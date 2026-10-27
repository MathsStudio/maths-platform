import { DatabaseSync } from 'node:sqlite';
import worker from '../src/worker.js';
const sqlite = new DatabaseSync(':memory:');
function stmt(sql, args = []) {
  return {
    bind(...a) { return stmt(sql, a); },
    async first() { const r = sqlite.prepare(sql).get(...args); return r ? { ...r } : null; },
    async all() { return { results: sqlite.prepare(sql).all(...args).map(r => ({ ...r })) }; },
    async run() { const r = sqlite.prepare(sql).run(...args); return { success: true, meta: { changes: r.changes } }; },
    _run() { sqlite.prepare(sql).run(...args); }
  };
}
const DB = { prepare: s => stmt(s), async batch(list) { for (const s of list) s._run(); return []; } };
const sent = [];
globalThis.fetch = async (u, o) => { if (String(u).includes('api.resend.com')) { sent.push(JSON.parse(o.body)); return new Response('{}', { status: 200 }); } throw new Error('unexpected fetch ' + u); };
const env = { DB, RESEND_API_KEY: 'k', FROM_EMAIL: 'MathsStudio <info@mathsstudio.co.uk>', ADMIN_PASSWORD: 'pw',
  ASSETS: { fetch: async r => new Response('STATIC ' + new URL(r.url).pathname, { headers: { 'Content-Type': 'text/html' } }) } };
const B = 'https://x.test';
let cookieJar = '';
async function call(path, { method = 'GET', body, json, headers = {}, auth } = {}) {
  const h = { Origin: B, 'CF-Connecting-IP': '1.1.1.1', ...headers };
  if (cookieJar) h.Cookie = cookieJar;
  if (auth) h.Authorization = 'Basic ' + btoa('a:' + auth);
  let b;
  if (json) { h['Content-Type'] = 'application/json'; b = JSON.stringify(json); }
  else if (body) { h['Content-Type'] = 'application/x-www-form-urlencoded'; b = new URLSearchParams(body).toString(); }
  const r = await worker.fetch(new Request(B + path, { method, headers: h, body: b, redirect: 'manual' }), env);
  const sc = r.headers.get('Set-Cookie'); if (sc) cookieJar = sc.split(';')[0].endsWith('=') ? '' : sc.split(';')[0];
  return { status: r.status, loc: r.headers.get('Location'), text: await r.text(), r };
}
let fails = 0; const ok = (c, m) => { console.log((c ? 'PASS ' : 'FAIL ') + m); if (!c) fails++; };
let r;

r = await call('/'); ok(r.status === 200 && r.text.startsWith('STATIC'), 'static page passes through');
r = await call('/app/'); ok(r.status === 200, 'app is open while REQUIRE_LOGIN is off');
env.REQUIRE_LOGIN = '1'; r = await call('/learn/'); ok(r.status === 303 && r.loc === '/login/', '/learn/ needs sign-in when REQUIRE_LOGIN is on'); r = await call('/app/'); ok(r.status === 303 && r.loc === '/login/', 'app needs sign-in when REQUIRE_LOGIN is on'); delete env.REQUIRE_LOGIN;
r = await call('/account/'); ok(r.status === 303, 'account needs sign-in');
r = await call('/api/signup', { method: 'POST', json: { email: 'bad', role: 'parent', year: 'P6' } }); ok(r.status === 400, 'bad email rejected');
r = await call('/api/signup', { method: 'POST', json: { email: 'a@b.com', role: 'kid', year: 'P6' } }); ok(r.status === 400, 'bad role rejected');
r = await call('/api/signup', { method: 'POST', headers: { Origin: 'https://evil.test' }, json: { email: 'a@b.com', role: 'parent', year: 'P6' } }); ok(r.status === 403, 'other origin blocked');
r = await call('/api/signup', { method: 'POST', json: { email: 'Parent@Example.com ', role: 'parent', year: 'P6', marketing: true, password: 'Passw0rd!x' } });
ok(r.status === 200 && sent.length === 1, 'signup sends one email');
ok(sent[0].to[0] === 'parent@example.com' && /\/auth\/verify\?t=/.test(sent[0].text), 'email has a verify link');
const link1 = sent[0].text.match(/https:\/\/x\.test(\/auth\/verify\?t=[^\s]+)/)[1];
let u = sqlite.prepare('SELECT * FROM users').get();
ok(u.verified_at === null && u.marketing === 0, 'not verified and no marketing consent before the link is used');
r = await call('/api/signup', { method: 'POST', json: { email: 'parent@example.com', role: 'parent', year: 'P6', password: 'Passw0rd!x' } }); ok(r.status === 429, 'second try within a minute is limited');
r = await call(link1); ok(r.status === 200 && /<form method="post"/.test(r.text), 'opening the link (like an email scanner) only shows a button');
u = sqlite.prepare('SELECT * FROM users').get(); ok(u.verified_at === null, 'scanner visit does not use the link');
const tok = link1.split('t=')[1];
r = await call('/auth/verify', { method: 'POST', body: { t: tok } });
ok(r.status === 303 && r.loc === '/account/' && cookieJar.startsWith('ms_session='), 'button confirms and signs in');
u = sqlite.prepare('SELECT * FROM users').get(); ok(u.verified_at && u.marketing === 1 && u.marketing_at && u.marketing_text.startsWith('v1'), 'verified, consent saved with date and wording');
const jar = cookieJar;
cookieJar = ''; r = await call('/auth/verify', { method: 'POST', body: { t: tok } }); ok(r.status === 400, 'link cannot be used twice');
cookieJar = jar;
r = await call('/account/'); ok(r.status === 200 && r.text.includes('parent@example.com') && r.text.includes('P6'), 'account page shows details');
r = await call('/app/'); ok(r.status === 200 && r.text.startsWith('STATIC /app/') && /no-store/.test(r.r.headers.get('Cache-Control')), 'app opens when signed in');
r = await call('/learn/?year=P5'); ok(r.status === 200 && r.text.startsWith('STATIC /app/') && /no-store/.test(r.r.headers.get('Cache-Control')), '/learn/ opens the app');
r = await call('/learn'); ok(r.status === 200 && r.text.startsWith('STATIC /app/'), '/learn without slash opens the app');
r = await call('/account/marketing', { method: 'POST', body: { on: '0' } }); u = sqlite.prepare('SELECT * FROM users').get(); ok(u.marketing === 0 && u.unsub_at, 'stop news from account');
// login for existing verified user
cookieJar = ''; sent.length = 0;
r = await call('/api/login', { method: 'POST', json: { email: 'nobody@example.com', password: 'whatever123' } }); ok(r.status === 401 && sent.length === 0 && cookieJar === '', 'login for unknown email is refused, no email');
sqlite.prepare('DELETE FROM rate').run();
r = await call('/api/login', { method: 'POST', json: { email: 'parent@example.com', password: 'wrong-password' } }); ok(r.status === 401 && cookieJar === '', 'wrong password refused');
r = await call('/api/login', { method: 'POST', json: { email: 'parent@example.com', password: 'Passw0rd!x' } }); ok(r.status === 200 && r.r.headers.get('Set-Cookie').startsWith('ms_session=') && sent.length === 0, 'right password signs in with no email');
ok(!/pw/.test(sqlite.prepare('SELECT unsub_token FROM users').get().unsub_token) && sqlite.prepare('SELECT pw FROM users').get().pw.startsWith('p1$'), 'password is stored hashed');
r = await call('/api/signup', { method: 'POST', json: { email: 'PARENT@example.com', role: 'parent', year: 'P6', password: 'Passw0rd!x' }, headers: { 'CF-Connecting-IP': '3.3.3.3' } }); ok(r.status === 409 && /already registered/i.test(r.text), 'signing up again with a registered email says so');
r = await call('/api/signup', { method: 'POST', json: { email: 'short@example.com', role: 'parent', year: 'P6', password: 'abc' } }); ok(r.status === 400, 'short password refused');
// forgot / reset
sqlite.prepare('DELETE FROM rate').run(); cookieJar = ''; sent.length = 0;
r = await call('/api/forgot', { method: 'POST', json: { email: 'nobody@example.com' } }); ok(r.status === 200 && sent.length === 0, 'forgot for unknown email: same answer, no email');
r = await call('/api/forgot', { method: 'POST', json: { email: 'parent@example.com' } }); ok(r.status === 200 && sent.length === 1 && /password/i.test(sent[0].subject) && /\/reset\/\?t=/.test(sent[0].text), 'reset email sent');
const rt = sent[0].text.match(/\/reset\/\?t=([^\s]+)/)[1];
r = await call('/api/reset', { method: 'POST', json: { t: rt, password: 'short' } }); ok(r.status === 400, 'reset refuses a short password');
r = await call('/api/reset', { method: 'POST', json: { t: rt, password: 'NewPassw0rd!y' } }); ok(r.status === 200 && cookieJar.startsWith('ms_session='), 'reset sets the new password and signs in');
cookieJar = ''; r = await call('/api/reset', { method: 'POST', json: { t: rt, password: 'Another1234' } }); ok(r.status === 400, 'reset link works once');
sqlite.prepare('DELETE FROM rate').run();
r = await call('/api/login', { method: 'POST', json: { email: 'parent@example.com', password: 'Passw0rd!x' } }); ok(r.status === 401, 'old password no longer works');
r = await call('/api/login', { method: 'POST', json: { email: 'parent@example.com', password: 'NewPassw0rd!y' } }); ok(r.status === 200, 'new password works');
// account created before passwords existed
sqlite.prepare("INSERT INTO users (email, unsub_token, created_at, verified_at) VALUES ('old@example.com','t2','2026-01-01','2026-01-01')").run();
cookieJar = ''; r = await call('/api/login', { method: 'POST', json: { email: 'old@example.com', password: 'anything123' } }); ok(r.status === 401 && /no password/i.test(r.text), 'old account is told to set a password');
// unverified account: right password sends a fresh confirmation link instead of signing in
sqlite.prepare('DELETE FROM rate').run(); sent.length = 0;
await call('/api/signup', { method: 'POST', json: { email: 'new@example.com', role: 'teacher', year: 'S1', password: 'Passw0rd!z' }, headers: { 'CF-Connecting-IP': '4.4.4.4' } });
sqlite.prepare('DELETE FROM rate').run(); sent.length = 0;
r = await call('/api/login', { method: 'POST', json: { email: 'new@example.com', password: 'Passw0rd!z' } }); ok(r.status === 403 && sent.length === 1 && /confirm/i.test(sent[0].subject) && cookieJar === '', 'unverified account: new confirmation email, no sign-in');
// unsubscribe link
sqlite.prepare('UPDATE users SET marketing = 1').run();
const ut = sqlite.prepare('SELECT unsub_token FROM users').get().unsub_token;
r = await call('/unsubscribe?t=' + ut); ok(r.status === 200 && /<form/.test(r.text) && sqlite.prepare('SELECT marketing m FROM users').get().m === 1, 'unsubscribe link shows confirm button, no change yet');
r = await call('/unsubscribe', { method: 'POST', body: { t: ut } }); ok(r.status === 200 && sqlite.prepare('SELECT marketing m FROM users').get().m === 0, 'unsubscribe works');
// admin
r = await call('/admin'); ok(r.status === 401, 'admin asks for password');
r = await call('/admin', { auth: 'wrong' }); ok(r.status === 401, 'admin rejects wrong password');
r = await call('/admin', { auth: 'pw' }); ok(r.status === 200 && r.text.includes('parent@example.com'), 'admin list');
sqlite.prepare("INSERT INTO users (email, unsub_token, created_at, verified_at, marketing) VALUES ('=cmd@x.com','t','2026-01-01','2026-01-01',1)").run();
r = await call('/admin/export.csv', { auth: 'pw' }); ok(r.status === 200 && /text\/csv/.test(r.r.headers.get('Content-Type')) && r.text.includes("\"'=cmd@x.com\""), 'csv export guards formulas');
const env2 = { ...env, ADMIN_PASSWORD: undefined }; const r2 = await worker.fetch(new Request(B + '/admin', { headers: { Authorization: 'Basic ' + btoa('a:') } }), env2); ok(r2.status === 503, 'admin fails closed without a password');
// no email service => no signup
const env3 = { ...env, RESEND_API_KEY: undefined }; const r3 = await worker.fetch(new Request(B + '/api/signup', { method: 'POST', headers: { 'Content-Type': 'application/json', Origin: B }, body: JSON.stringify({ email: 'z@z.com', role: 'parent', year: 'P5', password: 'Passw0rd!x' }) }), env3); ok(r3.status === 503, 'signup closed until email is set up');
// delete account
cookieJar = ''; sent.length = 0;
await call('/api/login', { method: 'POST', json: { email: 'parent@example.com' }, headers: { 'CF-Connecting-IP': '2.2.2.2' } }).catch(() => {});
r = await call('/api/signup', { method: 'POST', json: { email: 'bot@example.com', role: 'parent', year: 'P5', website: 'http://spam' } }); ok(r.status === 200 && !sqlite.prepare("SELECT 1 FROM users WHERE email='bot@example.com'").get(), 'honeypot ignored silently');
console.log(fails ? fails + ' FAILED' : 'ALL PASSED');
