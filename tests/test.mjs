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
ok(sent[0].to[0] === 'parent@example.com' && /\/welcome\/\?t=/.test(sent[0].text), 'email has a link to choose a password');
const tok = sent[0].text.match(/\/welcome\/\?t=([^\s]+)/)[1];
let u = sqlite.prepare('SELECT * FROM users').get();
ok(u.verified_at === null && u.marketing === 0, 'not verified and no marketing consent before the link is used');
r = await call('/api/signup', { method: 'POST', json: { email: 'parent@example.com', role: 'parent', year: 'P6' } }); ok(r.status === 429, 'second try within a minute is limited');
r = await call('/welcome/?t=' + tok); ok(r.status === 200 && r.text.startsWith('STATIC /welcome/'), 'welcome page is a plain page (an email scanner opening it uses nothing)');
u = sqlite.prepare('SELECT * FROM users').get(); ok(u.verified_at === null && u.pw === null, 'scanner visit does not use the link');
r = await call('/api/reset', { method: 'POST', json: { t: tok, password: 'abc' } }); ok(r.status === 400, 'short password refused');
r = await call('/api/reset', { method: 'POST', json: { t: tok, password: 'Passw0rd!x' } });
ok(r.status === 200 && cookieJar.startsWith('ms_session=') && sqlite.prepare('SELECT pw FROM users').get().pw.startsWith('p1$'), 'choosing a password confirms the email and signs in');
u = sqlite.prepare('SELECT * FROM users').get(); ok(u.verified_at && u.marketing === 1 && u.marketing_at && u.marketing_text.startsWith('v1'), 'verified, consent saved with date and wording');
const jar = cookieJar;
cookieJar = ''; r = await call('/api/reset', { method: 'POST', json: { t: tok, password: 'Another1234' } }); ok(r.status === 400, 'link cannot be used twice');
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
r = await call('/api/signup', { method: 'POST', json: { email: 'PARENT@example.com', role: 'parent', year: 'P6' }, headers: { 'CF-Connecting-IP': '3.3.3.3' } }); ok(r.status === 409 && /already registered/i.test(r.text), 'signing up again with a registered email says so');
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
await call('/api/signup', { method: 'POST', json: { email: 'new@example.com', role: 'teacher', year: 'S1' }, headers: { 'CF-Connecting-IP': '4.4.4.4' } });
sqlite.prepare('DELETE FROM rate').run(); sent.length = 0;
r = await call('/api/login', { method: 'POST', json: { email: 'new@example.com', password: 'Passw0rd!z' } }); ok(r.status === 403 && sent.length === 1 && /confirm/i.test(sent[0].subject) && /\/welcome\//.test(sent[0].text) && cookieJar === '', 'unverified account: new confirmation email, no sign-in');
sqlite.prepare('DELETE FROM rate').run(); await call('/api/login', { method: 'POST', json: { email: 'parent@example.com', password: 'NewPassw0rd!y' } });
r = await call('/api/me'); ok(r.status === 200 && JSON.parse(r.text).signedIn === true, 'api/me reports signed in');
cookieJar = ''; r = await call('/api/me'); ok(JSON.parse(r.text).signedIn === false, 'api/me reports signed out');
env.OWNER_EMAILS = 'Someone@x.com, PARENT@example.com'; await call('/api/login', { method: 'POST', json: { email: 'parent@example.com', password: 'NewPassw0rd!y' } });
r = await call('/account/'); ok(r.status === 200 && /Owner · full access/.test(r.text), 'owner email shows the owner plan'); delete env.OWNER_EMAILS;
r = await call('/account/'); ok(/>Free</.test(r.text) || /Free/.test(r.text), 'without the owner list it is the normal plan');
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
for (let i = 0; i < 11; i++) await call('/admin', { auth: 'wrong' + i, headers: { 'CF-Connecting-IP': '9.9.9.9' } });
r = await call('/admin', { auth: 'pw', headers: { 'CF-Connecting-IP': '9.9.9.9' } }); ok(r.status === 429, 'admin locks out after repeated wrong passwords, even for the right one');
r = await call('/admin', { auth: 'pw' }); ok(r.status === 200, 'other connections are not affected');
r = await call('/account/', { headers: { 'Sec-Fetch-Site': 'same-origin' } }); ok(/Content-Security-Policy/i.test([...r.r.headers.keys()].join(',')) || r.r.headers.get('Content-Security-Policy'), 'CSP header present');
r = await call('/api/forgot', { method: 'POST', json: { email: 'x@y.com' }, headers: { 'Sec-Fetch-Site': 'cross-site' } }); ok(r.status === 403, 'cross-site POST blocked');
// no email service => no signup
const env3 = { ...env, RESEND_API_KEY: undefined }; const r3 = await worker.fetch(new Request(B + '/api/signup', { method: 'POST', headers: { 'Content-Type': 'application/json', Origin: B }, body: JSON.stringify({ email: 'z@z.com', role: 'parent', year: 'P5' }) }), env3); ok(r3.status === 503, 'signup closed until email is set up');
// delete account
cookieJar = ''; sent.length = 0;
await call('/api/login', { method: 'POST', json: { email: 'parent@example.com' }, headers: { 'CF-Connecting-IP': '2.2.2.2' } }).catch(() => {});
r = await call('/api/signup', { method: 'POST', json: { email: 'bot@example.com', role: 'parent', year: 'P5', website: 'http://spam' } }); ok(r.status === 200 && !sqlite.prepare("SELECT 1 FROM users WHERE email='bot@example.com'").get(), 'honeypot ignored silently');
// payments (Stripe Checkout + webhook)
import { createHmac } from 'node:crypto';
const realFetch = globalThis.fetch; let stripeBody = null;
globalThis.fetch = async (u, o) => { if (String(u).includes('api.stripe.com')) { stripeBody = String(o.body); return new Response(JSON.stringify({ url: 'https://checkout.stripe.test/s1' }), { status: 200 }); } return realFetch(u, o); };
cookieJar = ''; sqlite.prepare('DELETE FROM rate').run();
await call('/api/login', { method: 'POST', json: { email: 'parent@example.com', password: 'NewPassw0rd!y' }, headers: { 'CF-Connecting-IP': '7.7.7.7' } });
r = await call('/api/checkout', { method: 'POST', json: { year: 'P6' } }); ok(r.status === 503, 'checkout closed until Stripe key is set');
env.STRIPE_SECRET_KEY = 'sk_test_x'; env.STRIPE_WEBHOOK_SECRET = 'whsec_x';
r = await call('/api/checkout', { method: 'POST', json: { year: 'XX' } }); ok(r.status === 400, 'checkout rejects unknown year');
r = await call('/api/checkout', { method: 'POST', json: { year: 'P6' } }); ok(r.status === 200 && JSON.parse(r.text).url.startsWith('https://checkout.stripe.test') && /unit_amount%5D=1500/.test(stripeBody) && /gbp/.test(stripeBody) && /metadata%5Byear%5D=P6/.test(stripeBody), 'checkout makes a 15 GBP Stripe session for the year');
const uid = sqlite.prepare("SELECT id FROM users WHERE email='parent@example.com'").get().id;
const evt = { id: 'evt_1', type: 'checkout.session.completed', data: { object: { payment_status: 'paid', metadata: { user_id: String(uid), year: 'P6' } } } };
async function hook(e, secret = 'whsec_x', t = Math.floor(Date.now() / 1000)) { const raw = JSON.stringify(e); const sig = createHmac('sha256', secret).update(t + '.' + raw).digest('hex'); return worker.fetch(new Request(B + '/api/stripe-webhook', { method: 'POST', headers: { 'Stripe-Signature': 't=' + t + ',v1=' + sig }, body: raw }), env); }
r = await hook(evt, 'wrong'); ok(r.status === 400, 'webhook with a bad signature is refused');
r = await call('/api/me'); ok(JSON.parse(r.text).years.length === 0 && JSON.parse(r.text).pay === true, 'before paying: no years, payments on');
r = await hook(evt); ok(r.status === 200, 'webhook accepted');
r = await call('/api/me'); ok(JSON.stringify(JSON.parse(r.text).years) === '["P6"]', 'after paying: P6 unlocked');
const u1 = sqlite.prepare('SELECT until FROM purchases WHERE user_id=?').get(uid).until; await hook(evt);
ok(sqlite.prepare('SELECT until FROM purchases WHERE user_id=?').get(uid).until === u1, 'repeated webhook is not counted twice');
ok(u1 - Math.floor(Date.now() / 1000) > 364 * 86400, 'pass lasts 12 months');
// confirm on return from Stripe
const sess = { id: 'cs_test_abc1234567890', payment_status: 'paid', metadata: { user_id: String(uid), year: 'S1' } };
globalThis.fetch = async (u, o) => String(u).includes('/checkout/sessions/cs_') ? new Response(JSON.stringify(sess), { status: 200 }) : realFetch(u, o);
env.STRIPE_SECRET_KEY = 'sk_test_x';
r = await call('/api/confirm', { method: 'POST', json: { session_id: 'bad' } }); ok(r.status === 400, 'confirm rejects a bad session id');
r = await call('/api/confirm', { method: 'POST', json: { session_id: 'cs_test_abc1234567890' } }); ok(JSON.parse(r.text).ok === true, 'confirm grants the year after Stripe says paid');
r = await call('/api/me'); ok(JSON.parse(r.text).years.includes('S1'), 'S1 unlocked by confirm');
const u2 = sqlite.prepare("SELECT until FROM purchases WHERE user_id=? AND year='S1'").get(uid).until; await call('/api/confirm', { method: 'POST', json: { session_id: 'cs_test_abc1234567890' } });
ok(sqlite.prepare("SELECT until FROM purchases WHERE user_id=? AND year='S1'").get(uid).until === u2, 'confirming twice does not add time');
sess.metadata.user_id = '99999'; sess.id = 'cs_test_other1234567'; r = await call('/api/confirm', { method: 'POST', json: { session_id: 'cs_test_other1234567' } }); ok(JSON.parse(r.text).ok === false, 'confirm refuses a session that belongs to someone else');
sess.metadata.user_id = String(uid); sess.id = 'cs_test_unpaid123456'; sess.payment_status = 'unpaid'; r = await call('/api/confirm', { method: 'POST', json: { session_id: 'cs_test_unpaid123456' } }); ok(JSON.parse(r.text).ok === false, 'confirm refuses an unpaid session');
globalThis.fetch = realFetch; delete env.STRIPE_SECRET_KEY; delete env.STRIPE_WEBHOOK_SECRET;
// newsletter from the admin page
const sentB = []; const rf = globalThis.fetch;
globalThis.fetch = async (u, o) => { if (String(u).includes('api.resend.com/emails/batch')) { sentB.push(...JSON.parse(o.body)); return new Response('{}', { status: 200 }); } return rf(u, o); };
sqlite.prepare("UPDATE users SET marketing=1, unsub_at=NULL, verified_at='2026-01-01' WHERE email='parent@example.com'").run();
sqlite.prepare("UPDATE users SET marketing=0 WHERE email<>'parent@example.com'").run();
sqlite.prepare('DELETE FROM rate').run();
async function adminPost(body, authPw = 'pw') { return worker.fetch(new Request(B + '/admin/newsletter', { method: 'POST', headers: { Authorization: 'Basic ' + btoa('a:' + authPw), Origin: B, 'Content-Type': 'application/x-www-form-urlencoded', 'CF-Connecting-IP': '8.8.8.8' }, body: new URLSearchParams(body).toString() }), env); }
r = await adminPost({ action: 'send', subject: 'Hi', body: 'x', confirm: '1' }, 'wrong'); ok(r.status === 401, 'newsletter needs the admin password');
r = await adminPost({ action: 'send', subject: 'Hi', body: 'Hello\n\nSee https://x.test', audience: '' }); ok(/Tick the box/.test(await r.text()) && sentB.length === 0, 'newsletter will not send without the confirm tick');
r = await adminPost({ action: 'send', subject: 'News', body: 'Hello\n\nSee https://x.test', confirm: '1' }); ok(/Sent to 1 people/.test(await r.text()) && sentB.length === 1, 'newsletter goes only to opted-in people');
ok(/unsubscribe\?t=/.test(sentB[0].text) && /List-Unsubscribe/.test(JSON.stringify(sentB[0].headers)) && /<a href="https:\/\/x.test"/.test(sentB[0].html), 'each copy has its own unsubscribe link and clickable links');
ok(sqlite.prepare('SELECT COUNT(*) c FROM newsletters').get().c === 1, 'send is logged');
r = await adminPost({ action: 'send', subject: 'P5 news', body: 'x', confirm: '1', audience: 'P5' }); ok(/nothing was sent|Nobody/.test(await r.text()), 'year filter only reaches that year');
globalThis.fetch = rf;
// monthly subscription
const nowS = () => Math.floor(Date.now() / 1000); let subState = { id: 'sub_test_1', status: 'active', customer: 'cus_test_1', current_period_end: nowS() + 30 * 86400 }; let portalBody = null;
globalThis.fetch = async (u, o) => {
  u = String(u);
  if (u.includes('api.stripe.com/v1/checkout/sessions/cs_')) return new Response(JSON.stringify(sess), { status: 200 });
  if (u.includes('api.stripe.com/v1/checkout/sessions')) { stripeBody = String(o.body); return new Response(JSON.stringify({ url: 'https://checkout.stripe.test/s2' }), { status: 200 }); }
  if (u.includes('api.stripe.com/v1/subscriptions/')) return new Response(JSON.stringify(subState), { status: 200 });
  if (u.includes('api.stripe.com/v1/billing_portal/sessions')) { portalBody = String(o.body); return new Response(JSON.stringify({ url: 'https://billing.stripe.test/p1' }), { status: 200 }); }
  return realFetch(u, o);
};
env.STRIPE_SECRET_KEY = 'sk_test_x';
r = await call('/api/checkout', { method: 'POST', json: { year: 'S2', plan: 'month' } });
ok(r.status === 200 && /mode=subscription/.test(stripeBody) && /unit_amount%5D=299/.test(stripeBody) && /recurring%5D%5Binterval%5D=month/.test(stripeBody) && /subscription_data%5Bmetadata%5D%5Byear%5D=S2/.test(stripeBody), 'monthly checkout is a 2.99 GBP monthly subscription');
r = await call('/api/checkout', { method: 'POST', json: { year: 'S2' } }); ok(/mode=payment/.test(stripeBody) && /unit_amount%5D=1500/.test(stripeBody), 'yearly checkout is still the 15 GBP one-off');
Object.assign(sess, { id: 'cs_test_sub1234567890', mode: 'subscription', subscription: 'sub_test_1', customer: 'cus_test_1', payment_status: 'paid', metadata: { user_id: String(uid), year: 'S2' } });
r = await call('/api/confirm', { method: 'POST', json: { session_id: 'cs_test_sub1234567890' } }); ok(JSON.parse(r.text).ok === true, 'confirm grants the monthly plan');
let row = sqlite.prepare("SELECT until, sub_id, cust_id FROM purchases WHERE user_id=? AND year='S2'").get(uid);
ok(row.sub_id === 'sub_test_1' && row.cust_id === 'cus_test_1' && Math.abs(row.until - (subState.current_period_end + 2 * 86400)) < 5, 'monthly access runs to period end plus 2 days grace');
r = await call('/account/'); ok(/S2 unlocked · until/.test(r.text) && /Manage subscription/.test(r.text), 'account shows the end date and the manage button');
r = await call('/account/portal', { method: 'POST', body: {} }); ok(r.status === 303 && r.loc === 'https://billing.stripe.test/p1' && /customer=cus_test_1/.test(portalBody), 'manage button opens the Stripe billing portal');
// renewal is picked up near the end of the period
sqlite.prepare("UPDATE purchases SET until=?, synced_at=NULL WHERE user_id=? AND year='S2'").run(nowS() + 86400, uid);
subState.current_period_end = nowS() + 30 * 86400;
r = await call('/api/me'); row = sqlite.prepare("SELECT until FROM purchases WHERE user_id=? AND year='S2'").get(uid);
ok(row.until > nowS() + 29 * 86400, 'a paid renewal extends access');
// cancelled plan is not extended
sqlite.prepare("UPDATE purchases SET until=?, synced_at=NULL WHERE user_id=? AND year='S2'").run(nowS() + 86400, uid);
subState.status = 'canceled'; r = await call('/api/me'); row = sqlite.prepare("SELECT until FROM purchases WHERE user_id=? AND year='S2'").get(uid);
ok(row.until < nowS() + 2 * 86400, 'a cancelled plan is not extended');
// checkout shows the consent wording; admin can remove a paid year after a refund
ok(/custom_text%5Bsubmit%5D%5Bmessage%5D=/.test(stripeBody || '') && /14-day/.test(decodeURIComponent(stripeBody || '')) && /terms/.test(decodeURIComponent(stripeBody || '')), 'checkout shows terms and 14-day wording');
const revPost = (body, pw = 'pw') => worker.fetch(new Request(B + '/admin/revoke', { method: 'POST', headers: { Authorization: 'Basic ' + btoa('a:' + pw), Origin: B, 'Content-Type': 'application/x-www-form-urlencoded', 'CF-Connecting-IP': '8.8.8.8' }, body: new URLSearchParams(body).toString() }), env);
r = await revPost({ email: 'parent@example.com', year: 'S2' }, 'wrong'); ok(r.status === 401, 'revoke needs the admin password');
const had = sqlite.prepare("SELECT COUNT(*) c FROM purchases WHERE user_id=? AND year='S2'").get(uid).c;
r = await revPost({ email: 'parent@example.com', year: 'S2' }); const revTxt = await r.text();
ok(had === 1 && /Removed S2 access/.test(revTxt) && sqlite.prepare("SELECT COUNT(*) c FROM purchases WHERE user_id=? AND year='S2'").get(uid).c === 0, 'admin can remove a paid year');
r = await revPost({ email: 'nobody@example.com', year: 'S2' }); ok(/No account found/.test(await r.text()), 'revoke reports unknown email');
globalThis.fetch = realFetch; delete env.STRIPE_SECRET_KEY;
console.log(fails ? fails + ' FAILED' : 'ALL PASSED');
