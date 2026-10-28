/* D1 database: schema (created on first use) and queries */
const SCHEMA = [
  `CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT NOT NULL UNIQUE COLLATE NOCASE,
    role TEXT, year TEXT,
    plan TEXT NOT NULL DEFAULT 'free',
    marketing INTEGER NOT NULL DEFAULT 0,
    marketing_at TEXT, marketing_text TEXT, unsub_at TEXT,
    unsub_token TEXT NOT NULL,
    verified_at TEXT, last_login TEXT,
    created_at TEXT NOT NULL
  )`,
  `CREATE TABLE IF NOT EXISTS tokens (
    hash TEXT PRIMARY KEY, user_id INTEGER NOT NULL, purpose TEXT NOT NULL,
    marketing INTEGER NOT NULL DEFAULT 0, expires_at INTEGER NOT NULL, used_at INTEGER
  )`,
  `CREATE TABLE IF NOT EXISTS sessions (
    hash TEXT PRIMARY KEY, user_id INTEGER NOT NULL, expires_at INTEGER NOT NULL
  )`,
  `CREATE TABLE IF NOT EXISTS rate (k TEXT NOT NULL, ts INTEGER NOT NULL)`,
  `CREATE INDEX IF NOT EXISTS rate_k ON rate (k, ts)`
];
let ready = null;
export function init(env) {
  if (!ready) ready = env.DB.batch(SCHEMA.map(s => env.DB.prepare(s)))
    .then(() => env.DB.prepare('ALTER TABLE users ADD COLUMN pw TEXT').run().catch(() => {}))   // adds the password column once; harmless if it already exists
    .catch(e => { ready = null; throw e; });
  return ready;
}
export const MARKETING_TEXT = 'v1: I would like to get news, tips and offers from MathsStudio by email. I can unsubscribe at any time.';
const now = () => new Date().toISOString();

export async function rateOk(env, key, limit, windowSec) {
  const t = Math.floor(Date.now() / 1000), since = t - windowSec;
  const r = await env.DB.prepare('SELECT COUNT(*) AS n FROM rate WHERE k = ? AND ts > ?').bind(key, since).first();
  if (r && r.n >= limit) return false;
  await env.DB.prepare('INSERT INTO rate (k, ts) VALUES (?, ?)').bind(key, t).run();
  if (Math.random() < 0.05) await env.DB.prepare('DELETE FROM rate WHERE ts < ?').bind(t - 86400).run();
  return true;
}
export const userByEmail = (env, email) => env.DB.prepare('SELECT * FROM users WHERE email = ?').bind(email).first();
export const userById = (env, id) => env.DB.prepare('SELECT * FROM users WHERE id = ?').bind(id).first();
export async function createUser(env, email, role, year, unsubToken) {
  return env.DB.prepare('INSERT INTO users (email, role, year, unsub_token, created_at) VALUES (?, ?, ?, ?, ?) RETURNING id').bind(email, role, year, unsubToken, now()).first();
}
export function saveToken(env, hash, userId, purpose, marketing, ttlSec) {
  return env.DB.prepare('INSERT INTO tokens (hash, user_id, purpose, marketing, expires_at) VALUES (?, ?, ?, ?, ?)').bind(hash, userId, purpose, marketing ? 1 : 0, Math.floor(Date.now() / 1000) + ttlSec).run();
}
/* A link works once. Returns the token row if it was valid, and marks it used. */
export async function useToken(env, hash) {
  const t = Math.floor(Date.now() / 1000);
  return env.DB.prepare('UPDATE tokens SET used_at = ? WHERE hash = ? AND used_at IS NULL AND expires_at > ? RETURNING user_id, purpose, marketing').bind(t, hash, t).first();
}
export async function confirmUser(env, id, marketingTicked) {
  const u = await userById(env, id), t = now();
  if (!u.verified_at) await env.DB.prepare('UPDATE users SET verified_at = ? WHERE id = ?').bind(t, id).run();
  if (marketingTicked && !u.marketing) await env.DB.prepare('UPDATE users SET marketing = 1, marketing_at = ?, marketing_text = ?, unsub_at = NULL WHERE id = ?').bind(t, MARKETING_TEXT, id).run();
  await env.DB.prepare('UPDATE users SET last_login = ? WHERE id = ?').bind(t, id).run();
}
export const setYearRole = (env, id, role, year) => env.DB.prepare('UPDATE users SET role = ?, year = ? WHERE id = ?').bind(role, year, id).run();
export function saveSession(env, hash, userId, ttlSec) {
  return env.DB.prepare('INSERT INTO sessions (hash, user_id, expires_at) VALUES (?, ?, ?)').bind(hash, userId, Math.floor(Date.now() / 1000) + ttlSec).run();
}
export function sessionUser(env, hash) {
  return env.DB.prepare('SELECT u.* FROM sessions s JOIN users u ON u.id = s.user_id WHERE s.hash = ? AND s.expires_at > ? AND u.verified_at IS NOT NULL').bind(hash, Math.floor(Date.now() / 1000)).first();
}
export const dropSession = (env, hash) => env.DB.prepare('DELETE FROM sessions WHERE hash = ?').bind(hash).run();
export async function unsubscribe(env, token) {
  const r = await env.DB.prepare('UPDATE users SET marketing = 0, unsub_at = ? WHERE unsub_token = ? RETURNING id').bind(now(), token).first();
  return !!r;
}
export const unsubUser = (env, token) => env.DB.prepare('SELECT id, marketing FROM users WHERE unsub_token = ?').bind(token).first();
export async function deleteUser(env, id) {
  await env.DB.batch([
    env.DB.prepare('DELETE FROM sessions WHERE user_id = ?').bind(id),
    env.DB.prepare('DELETE FROM tokens WHERE user_id = ?').bind(id),
    env.DB.prepare('DELETE FROM users WHERE id = ?').bind(id)
  ]);
}
export async function adminList(env) {
  const all = await env.DB.prepare('SELECT id, email, role, year, plan, marketing, marketing_at, unsub_at, verified_at, last_login, created_at FROM users ORDER BY id DESC LIMIT 5000').all();
  return all.results || [];
}
export async function cleanup(env) {
  const t = Math.floor(Date.now() / 1000);
  await env.DB.batch([
    env.DB.prepare('DELETE FROM tokens WHERE expires_at < ?').bind(t - 86400),
    env.DB.prepare('DELETE FROM sessions WHERE expires_at < ?').bind(t),
    env.DB.prepare("DELETE FROM users WHERE verified_at IS NULL AND created_at < ?").bind(new Date(Date.now() - 7 * 86400000).toISOString())
  ]);
}

export const setPassword = (env, id, hash) => env.DB.prepare('UPDATE users SET pw = ? WHERE id = ?').bind(hash, id).run();
export const markLogin = (env, id) => env.DB.prepare('UPDATE users SET last_login = ? WHERE id = ?').bind(new Date().toISOString(), id).run();
/* counts tries in a window without adding one (used to lock out repeated wrong admin passwords) */
export async function rateOkPeek(env, key, limit, windowSec) {
  const since = Math.floor(Date.now() / 1000) - windowSec;
  const r = await env.DB.prepare('SELECT COUNT(*) AS n FROM rate WHERE k = ? AND ts > ?').bind(key, since).first();
  return !(r && r.n > limit);
}
