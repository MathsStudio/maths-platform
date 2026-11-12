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
  `CREATE INDEX IF NOT EXISTS rate_k ON rate (k, ts)`,
  `CREATE TABLE IF NOT EXISTS newsletters (id INTEGER PRIMARY KEY AUTOINCREMENT, subject TEXT NOT NULL, audience TEXT NOT NULL, sent INTEGER NOT NULL, failed INTEGER NOT NULL, created_at TEXT NOT NULL)`,
  `CREATE TABLE IF NOT EXISTS progress (user_id INTEGER PRIMARY KEY, data TEXT NOT NULL, updated_at TEXT NOT NULL)`,
  `CREATE TABLE IF NOT EXISTS learners (id INTEGER PRIMARY KEY AUTOINCREMENT, user_id INTEGER NOT NULL, name TEXT NOT NULL, avatar TEXT NOT NULL, created_at TEXT NOT NULL)`,
  `CREATE INDEX IF NOT EXISTS learners_user ON learners (user_id)`,
  `CREATE TABLE IF NOT EXISTS learner_progress (learner_id INTEGER PRIMARY KEY, user_id INTEGER NOT NULL, data TEXT NOT NULL, updated_at TEXT NOT NULL)`,
  `CREATE TABLE IF NOT EXISTS purchases (
    user_id INTEGER NOT NULL, year TEXT NOT NULL, until INTEGER NOT NULL, created_at TEXT NOT NULL, PRIMARY KEY (user_id, year)
  )`
];
let ready = null;
export function init(env) {
  if (!ready) ready = env.DB.batch(SCHEMA.map(s => env.DB.prepare(s)))
    .then(() => env.DB.prepare('ALTER TABLE users ADD COLUMN pw TEXT').run().catch(() => {}))
    .then(() => env.DB.prepare('ALTER TABLE purchases ADD COLUMN sub_id TEXT').run().catch(() => {}))
    .then(() => env.DB.prepare('ALTER TABLE purchases ADD COLUMN cust_id TEXT').run().catch(() => {}))
    .then(() => env.DB.prepare('ALTER TABLE purchases ADD COLUMN synced_at INTEGER').run().catch(() => {}))   // adds the password column once; harmless if it already exists
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
    env.DB.prepare('DELETE FROM progress WHERE user_id = ?').bind(id),
    env.DB.prepare('DELETE FROM learner_progress WHERE user_id = ?').bind(id),
    env.DB.prepare('DELETE FROM learners WHERE user_id = ?').bind(id),
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

/* records a paid 12-month pass; paying again before it ends adds 12 more months */
export async function addPurchase(env, userId, year) {
  const now = Math.floor(Date.now() / 1000), cur = await env.DB.prepare('SELECT until FROM purchases WHERE user_id = ? AND year = ?').bind(userId, year).first();
  const start = cur && cur.until > now ? cur.until : now, until = start + 365 * 86400;
  await env.DB.prepare('INSERT INTO purchases (user_id, year, until, created_at) VALUES (?, ?, ?, ?) ON CONFLICT(user_id, year) DO UPDATE SET until = excluded.until').bind(userId, year, until, new Date().toISOString()).run();
  return until;
}
/* monthly plan: access runs to the end of the paid period (plus a short grace); renewals move it on */
export async function addSub(env, userId, year, until, subId, custId) {
  const now = Math.floor(Date.now() / 1000);
  await env.DB.prepare('INSERT INTO purchases (user_id, year, until, created_at, sub_id, cust_id, synced_at) VALUES (?, ?, ?, ?, ?, ?, ?) ON CONFLICT(user_id, year) DO UPDATE SET until = MAX(until, excluded.until), sub_id = excluded.sub_id, cust_id = excluded.cust_id, synced_at = excluded.synced_at')
    .bind(userId, year, until, new Date().toISOString(), subId || null, custId || null, now).run();
}
export async function subsDue(env, userId) {
  const now = Math.floor(Date.now() / 1000);
  const r = await env.DB.prepare('SELECT year, until, sub_id FROM purchases WHERE user_id = ? AND sub_id IS NOT NULL AND until < ? AND (synced_at IS NULL OR synced_at < ?)').bind(userId, now + 3 * 86400, now - 3600).all();
  return r.results || [];
}
export async function setSynced(env, userId, year, until) {
  await env.DB.prepare('UPDATE purchases SET synced_at = ?, until = MAX(until, ?) WHERE user_id = ? AND year = ?').bind(Math.floor(Date.now() / 1000), until || 0, userId, year).run();
}
export async function userPasses(env, userId) {
  const r = await env.DB.prepare('SELECT year, until, sub_id, created_at FROM purchases WHERE user_id = ? AND until > ? ORDER BY year').bind(userId, Math.floor(Date.now() / 1000)).all();
  return r.results || [];
}
export async function customerId(env, userId) {
  const r = await env.DB.prepare('SELECT cust_id FROM purchases WHERE user_id = ? AND cust_id IS NOT NULL ORDER BY until DESC LIMIT 1').bind(userId).first();
  return r && r.cust_id;
}
export async function seenEvent(env, id) {
  await env.DB.prepare('CREATE TABLE IF NOT EXISTS pay_events (id TEXT PRIMARY KEY, created_at TEXT NOT NULL)').run();
  const r = await env.DB.prepare('INSERT OR IGNORE INTO pay_events (id, created_at) VALUES (?, ?)').bind(id, new Date().toISOString()).run();
  return !(r.meta && r.meta.changes);   // true = already handled
}

/* year passes a user has paid for and that have not run out (payments will fill this table; until is a Unix time in seconds) */
export async function userYears(env, userId) {
  const r = await env.DB.prepare('SELECT year FROM purchases WHERE user_id = ? AND until > ?').bind(userId, Math.floor(Date.now() / 1000)).all();
  return (r.results || []).map(x => x.year);
}

/* people who verified their email, said yes to news and have not unsubscribed; year = '' for everyone */
export async function marketingList(env, year) {
  const q = "SELECT email, unsub_token FROM users WHERE verified_at IS NOT NULL AND marketing = 1 AND unsub_at IS NULL" + (year ? " AND year = ?" : "") + " ORDER BY id";
  const r = year ? await env.DB.prepare(q).bind(year).all() : await env.DB.prepare(q).all();
  return r.results || [];
}
export async function logNewsletter(env, subject, audience, sent, failed) {
  await env.DB.prepare('INSERT INTO newsletters (subject, audience, sent, failed, created_at) VALUES (?, ?, ?, ?, ?)').bind(subject, audience, sent, failed, new Date().toISOString()).run();
}
export async function recentNewsletters(env) {
  const r = await env.DB.prepare('SELECT subject, audience, sent, failed, created_at FROM newsletters ORDER BY id DESC LIMIT 5').all();
  return r.results || [];
}

/* admin gift: adds days of access for a year group (extends from the current end if still running); no payment or Stripe plan attached */
export async function grantPass(env, userId, year, days) {
  const now = Math.floor(Date.now() / 1000), cur = await env.DB.prepare('SELECT until FROM purchases WHERE user_id = ? AND year = ?').bind(userId, year).first();
  const until = (cur && cur.until > now ? cur.until : now) + days * 86400;
  await env.DB.prepare('INSERT INTO purchases (user_id, year, until, created_at) VALUES (?, ?, ?, ?) ON CONFLICT(user_id, year) DO UPDATE SET until = excluded.until').bind(userId, year, until, new Date().toISOString()).run();
  return until;
}
export async function revokePass(env, userId, year) {
  const r = await env.DB.prepare('DELETE FROM purchases WHERE user_id = ? AND year = ?').bind(userId, year).run();
  return (r.meta && r.meta.changes) || 0;
}

export async function forgetEvent(env, id) { await env.DB.prepare('DELETE FROM pay_events WHERE id = ?').bind(id).run(); }

/* Learning progress saved to the account (so it follows the email to any device) */
export async function getProgress(env, userId) {
  const r = await env.DB.prepare('SELECT data FROM progress WHERE user_id = ?').bind(userId).first();
  try { return r ? JSON.parse(r.data) : {}; } catch (e) { return {}; }
}
export const putProgress = (env, userId, obj) =>
  env.DB.prepare('INSERT INTO progress (user_id, data, updated_at) VALUES (?, ?, ?) ON CONFLICT(user_id) DO UPDATE SET data = excluded.data, updated_at = excluded.updated_at')
    .bind(userId, JSON.stringify(obj), now()).run();

/* Child profiles (learners): a first name or nickname and an avatar. Each learner has their own progress. */
export const MAX_LEARNERS = 4;
export const AVATARS = ['fox', 'owl', 'cat', 'robot', 'penguin', 'dino', 'rocket', 'star'];
export async function listLearners(env, userId) {
  const r = await env.DB.prepare('SELECT id, name, avatar FROM learners WHERE user_id = ? ORDER BY id').bind(userId).all();
  return r.results || [];
}
export async function ownsLearner(env, userId, id) {
  const r = await env.DB.prepare('SELECT id FROM learners WHERE id = ? AND user_id = ?').bind(id, userId).first();
  return !!r;
}
/* The first profile on an account takes over the progress already saved to the account, so nothing is lost. */
export async function addLearner(env, userId, name, avatar) {
  const existing = await listLearners(env, userId);
  const r = await env.DB.prepare('INSERT INTO learners (user_id, name, avatar, created_at) VALUES (?, ?, ?, ?) RETURNING id').bind(userId, name, avatar, now()).first();
  if (!existing.length) {
    const old = await env.DB.prepare('SELECT data FROM progress WHERE user_id = ?').bind(userId).first();
    if (old) await env.DB.prepare('INSERT INTO learner_progress (learner_id, user_id, data, updated_at) VALUES (?, ?, ?, ?)').bind(r.id, userId, old.data, now()).run();
  }
  return r.id;
}
export const updateLearner = (env, userId, id, name, avatar) =>
  env.DB.prepare('UPDATE learners SET name = ?, avatar = ? WHERE id = ? AND user_id = ?').bind(name, avatar, id, userId).run();
export async function deleteLearner(env, userId, id) {
  await env.DB.batch([
    env.DB.prepare('DELETE FROM learner_progress WHERE learner_id = ? AND user_id = ?').bind(id, userId),
    env.DB.prepare('DELETE FROM learners WHERE id = ? AND user_id = ?').bind(id, userId)
  ]);
}
export async function getLearnerProgress(env, id) {
  const r = await env.DB.prepare('SELECT data FROM learner_progress WHERE learner_id = ?').bind(id).first();
  try { return r ? JSON.parse(r.data) : {}; } catch (e) { return {}; }
}
export const putLearnerProgress = (env, userId, id, obj) =>
  env.DB.prepare('INSERT INTO learner_progress (learner_id, user_id, data, updated_at) VALUES (?, ?, ?, ?) ON CONFLICT(learner_id) DO UPDATE SET data = excluded.data, updated_at = excluded.updated_at')
    .bind(id, userId, JSON.stringify(obj), now()).run();
