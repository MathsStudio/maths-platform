import { page, json, redirect, withHeaders, sameOrigin, validEmail, randomToken, sha256, safeEqual, parseCookies, cookie, hashPassword, checkPassword } from './util.js';
import * as db from './db.js';
import { sendMail, sendBatch, newsletterMail, purchaseMail, verifyMail, loginMail, resetMail } from './mail.js';
import * as pg from './pages.js';

const SESSION_SEC = 30 * 86400, VERIFY_SEC = 86400, LOGIN_SEC = 1800;
const ROLES = ['parent', 'teacher'];

async function readForm(request) {
  const ct = request.headers.get('Content-Type') || '';
  if (ct.includes('application/json')) { try { return await request.json(); } catch (e) { return {}; } }
  const o = {}; try { new URLSearchParams(await request.text()).forEach((v, k) => { o[k] = v; }); } catch (e) {}
  return o;
}
/* Progress from the browser is checked and merged: finished steps only ever add up, and best scores keep the higher value. */
function cleanProgress(p) {
  const out = {}; if (!p || typeof p !== 'object') return out; let n = 0;
  for (const k of Object.keys(p)) {
    if (!/^t\d{1,4}$/.test(k) || ++n > 400) continue;
    const v = p[k]; if (!v || typeof v !== 'object') continue;
    const steps = {}; let c = 0;
    if (v.steps && typeof v.steps === 'object') for (const s of Object.keys(v.steps)) { if (++c > 80) break; if (v.steps[s] === true && /^[\w:.\-]{1,40}$/.test(s)) steps[s] = true; }
    const o = { steps }; if (typeof v.best === 'number' && isFinite(v.best)) o.best = Math.max(0, Math.min(100000, v.best));
    out[k] = o;
  }
  return out;
}
function mergeProgress(a, b) {
  const out = cleanProgress(a);
  for (const [k, v] of Object.entries(cleanProgress(b))) {
    const o = out[k] = out[k] || { steps: {} }; Object.assign(o.steps, v.steps);
    if (typeof v.best === 'number' && !(o.best >= v.best)) o.best = v.best;
  }
  return out;
}
async function progressApi(request, env, user, url) {
  if (!user) return json({ error: 'Sign in first.' }, 401);
  /* With ?learner=ID the progress belongs to that child's profile; without it, to the account (older behaviour). */
  const lid = url && url.searchParams.get('learner');
  let learner = 0;
  if (lid) {
    learner = /^\d{1,9}$/.test(lid) ? Number(lid) : 0;
    if (!learner || !(await db.ownsLearner(env, user.id, learner))) return json({ error: 'Profile not found.' }, 404);
  }
  const read = () => learner ? db.getLearnerProgress(env, learner) : db.getProgress(env, user.id);
  const write = (o) => learner ? db.putLearnerProgress(env, user.id, learner, o) : db.putProgress(env, user.id, o);
  if (request.method === 'GET') return json({ progress: await read() });
  if (!(request.headers.get('Content-Type') || '').includes('application/json')) return json({ error: 'Bad request.' }, 400);
  const text = await request.text(); if (text.length > 200000) return json({ error: 'Too large.' }, 413);
  let b; try { b = JSON.parse(text); } catch (e) { return json({ error: 'Bad request.' }, 400); }
  const next = b && b.replace === true ? cleanProgress(b.progress) : mergeProgress(await read(), b && b.progress);
  await write(next);
  return json({ progress: next });
}
/* Child profiles: first name or nickname plus an avatar, up to four per account. Every change is a POST, so it is origin-checked. */
const LEARNER_NAME = /^[\p{L}\p{N}][\p{L}\p{N} .'\-]{0,19}$/u;
async function learnersApi(request, env, user) {
  if (!user) return json({ error: 'Sign in first.' }, 401);
  if (request.method === 'GET') return json({ learners: await db.listLearners(env, user.id), avatars: db.AVATARS, max: db.MAX_LEARNERS });
  const b = await readForm(request), action = String(b.action || '');
  const name = String(b.name || '').trim().replace(/\s+/g, ' '), avatar = String(b.avatar || '');
  const id = /^\d{1,9}$/.test(String(b.id || '')) ? Number(b.id) : 0;
  if (action === 'add' || action === 'update') {
    if (!LEARNER_NAME.test(name)) return json({ error: 'Use a first name or nickname, up to 20 letters or numbers.' }, 400);
    if (!db.AVATARS.includes(avatar)) return json({ error: 'Choose one of the avatars.' }, 400);
  }
  if (action === 'add') {
    if ((await db.listLearners(env, user.id)).length >= db.MAX_LEARNERS) return json({ error: 'You can add up to ' + db.MAX_LEARNERS + ' children on one account.' }, 400);
    await db.addLearner(env, user.id, name, avatar);
  } else if (action === 'update' || action === 'delete') {
    if (!id || !(await db.ownsLearner(env, user.id, id))) return json({ error: 'Profile not found.' }, 404);
    if (action === 'update') await db.updateLearner(env, user.id, id, name, avatar); else await db.deleteLearner(env, user.id, id);
  } else return json({ error: 'Bad request.' }, 400);
  return json({ learners: await db.listLearners(env, user.id) });
}
function ip(request) { return request.headers.get('CF-Connecting-IP') || 'local'; }
async function currentUser(env, request) {
  const t = parseCookies(request).ms_session; if (!t) return null;
  const u = await db.sessionUser(env, await sha256(t));
  if (u && isOwner(env, u.email)) u.plan = 'owner';              // owners always have full access
  return u;
}
export function isOwner(env, email) {
  return String(env.OWNER_EMAILS || '').toLowerCase().split(/[\s,;]+/).filter(Boolean).includes(String(email || '').toLowerCase());
}
async function emailLink(env, request, user, marketing) {
  const verified = !!user.verified_at, purpose = verified ? 'login' : 'verify', token = randomToken();
  await db.saveToken(env, await sha256(token), user.id, purpose, marketing, verified ? LOGIN_SEC : VERIFY_SEC);
  const link = new URL(request.url).origin + (verified ? '/auth/verify?t=' : '/welcome/?t=') + token;
  const m = verified ? loginMail(link) : verifyMail(link);
  await sendMail(env, user.email, m.subject, m.text, m.html);
}
async function startSession(env, request, userId) {
  const t = randomToken();
  await db.saveSession(env, await sha256(t), userId, SESSION_SEC);
  return cookie('ms_session', t, request, SESSION_SEC);
}

async function signup(request, env) {
  const b = await readForm(request);
  if (b.website) return json({ ok: true });                       // hidden field: bots fill it in
  const email = String(b.email || '').trim().toLowerCase();
  if (!validEmail(email)) return json({ error: 'Please enter a valid email address.' }, 400);
  const role = ROLES.includes(b.role) ? b.role : null, year = pg.YEARS.includes(b.year) ? b.year : null;
  if (!role || !year) return json({ error: 'Please choose parent or teacher, and a year group.' }, 400);
  if (!env.RESEND_API_KEY || !env.FROM_EMAIL) return json({ error: 'Sign-up is not open yet. Please try again soon.' }, 503);
  const marketing = b.marketing === true || b.marketing === 'on' || b.marketing === '1' || b.marketing === 'true';
  if (!(await db.rateOk(env, 'ipS:' + ip(request), 60, 3600)) || !(await db.rateOk(env, 'em1:' + email, 1, 60)) || !(await db.rateOk(env, 'em2:' + email, 6, 86400)))
    return json({ error: 'Too many tries. Please wait a few minutes and try again.' }, 429);
  let u = await db.userByEmail(env, email);
  if (u && u.verified_at) return json({ error: 'This email is already registered. Please go to Sign in to get your sign-in link.' }, 409);
  if (!u) { const r = await db.createUser(env, email, role, year, randomToken(24)); u = await db.userById(env, r.id); }
  else if (!u.verified_at) await db.setYearRole(env, u.id, role, year);
  try { await emailLink(env, request, u, marketing); }
  catch (e) { return json({ error: 'We could not send the email. Please try again soon.' }, 502); }
  if (Math.random() < 0.02) await db.cleanup(env);
  return json({ ok: true });                                      // same answer whether or not the address already existed
}
async function login(request, env) {
  const b = await readForm(request), email = String(b.email || '').trim().toLowerCase(), pw = String(b.password || '');
  if (!validEmail(email) || !pw) return json({ error: 'Please enter your email and password.' }, 400);
  if (!(await db.rateOk(env, 'ipL:' + ip(request), 100, 3600)) || !(await db.rateOk(env, 'lg:' + email, 10, 900)))
    return json({ error: 'Too many tries. Please wait a few minutes and try again.' }, 429);
  const u = await db.userByEmail(env, email);
  if (u && !u.pw && !u.verified_at) {
    if (!env.RESEND_API_KEY || !env.FROM_EMAIL) return json({ error: 'Sign-in is not open yet. Please try again soon.' }, 503);
    if (await db.rateOk(env, 'em1:' + email, 1, 60)) { try { await emailLink(env, request, u, false); } catch (e) { return json({ error: 'We could not send the email. Please try again soon.' }, 502); } }
    return json({ error: 'Please confirm your email first. We have sent you a new link, and you will choose your password there.' }, 403);
  }
  if (u && !u.pw) return json({ error: 'This account has no password yet. Press “Forgot your password?” to choose one.' }, 401);
  if (!u || !(await checkPassword(pw, u.pw))) return json({ error: 'That email and password do not match. Check them, or press “Forgot your password?”.' }, 401);
  if (!u.verified_at) {
    if (!env.RESEND_API_KEY || !env.FROM_EMAIL) return json({ error: 'Sign-in is not open yet. Please try again soon.' }, 503);
    if (await db.rateOk(env, 'em1:' + email, 1, 60)) { try { await emailLink(env, request, u, false); } catch (e) { return json({ error: 'We could not send the email. Please try again soon.' }, 502); } }
    return json({ error: 'Please confirm your email first. We have sent you a new confirmation link.' }, 403);
  }
  await db.markLogin(env, u.id);
  return json({ ok: true, next: '/app/' }, 200, { 'Set-Cookie': await startSession(env, request, u.id) });
}
async function forgot(request, env) {
  const b = await readForm(request), email = String(b.email || '').trim().toLowerCase();
  if (!validEmail(email)) return json({ error: 'Please enter a valid email address.' }, 400);
  if (!env.RESEND_API_KEY || !env.FROM_EMAIL) return json({ error: 'This is not open yet. Please try again soon.' }, 503);
  if (!(await db.rateOk(env, 'ipF:' + ip(request), 40, 3600)) || !(await db.rateOk(env, 'em1:' + email, 1, 60)) || !(await db.rateOk(env, 'em2:' + email, 6, 86400)))
    return json({ error: 'Too many tries. Please wait a few minutes and try again.' }, 429);
  const u = await db.userByEmail(env, email);
  if (u) {
    try {
      const token = randomToken(); await db.saveToken(env, await sha256(token), u.id, 'reset', false, LOGIN_SEC);
      const m = resetMail(new URL(request.url).origin + '/reset/?t=' + token);
      await sendMail(env, u.email, m.subject, m.text, m.html);
    } catch (e) { return json({ error: 'We could not send the email. Please try again soon.' }, 502); }
  }
  return json({ ok: true });
}
async function reset(request, env) {
  const b = await readForm(request), tok = String(b.t || ''), pw = String(b.password || '');
  if (pw.length < 8) return json({ error: 'Please choose a password with at least 8 characters.' }, 400);
  if (pw.length > 200) return json({ error: 'That password is too long.' }, 400);
  const row = tok ? await db.useToken(env, await sha256(tok)) : null;
  if (!row || (row.purpose !== 'reset' && row.purpose !== 'verify')) return json({ error: 'This link has already been used or has run out. Please ask for a new one.' }, 400);
  await db.setPassword(env, row.user_id, await hashPassword(pw));
  await db.confirmUser(env, row.user_id, !!row.marketing);        // the link went to their inbox, so the email is confirmed too
  return json({ ok: true, next: '/app/' }, 200, { 'Set-Cookie': await startSession(env, request, row.user_id) });
}
async function verifyPost(request, env) {
  const b = await readForm(request), tok = String(b.t || '');
  const row = tok ? await db.useToken(env, await sha256(tok)) : null;
  if (!row) return page(pg.message('Link not valid', 'This link has already been used or has run out. <a href="/login/">Sign in</a> and we will send you a new confirmation link if you still need one.'), 400);
  await db.confirmUser(env, row.user_id, !!row.marketing);
  return redirect('/app/', { 'Set-Cookie': await startSession(env, request, row.user_id) });
}

async function admin(request, env, url) {
  if (!env.ADMIN_PASSWORD) return page(pg.message('Admin locked', 'The admin password has not been set yet.'), 503);
  const h = request.headers.get('Authorization') || '', ok = h.startsWith('Basic ') && (() => { try { const s = atob(h.slice(6)), i = s.indexOf(':'); return safeEqual(s.slice(i + 1), env.ADMIN_PASSWORD); } catch (e) { return false; } })();
  if (!(await db.rateOkPeek(env, 'adminfail:' + ip(request), 10, 900))) return new Response('Too many wrong tries. Wait 15 minutes.', { status: 429, headers: { 'Cache-Control': 'no-store' } });
  if (!ok && h) await db.rateOk(env, 'adminfail:' + ip(request), 1000, 900);   // only wrong passwords count, not the browser's first empty request
  if (!ok) return new Response('Password required.', { status: 401, headers: { 'WWW-Authenticate': 'Basic realm="MathsStudio admin", charset="UTF-8"', 'Cache-Control': 'no-store' } });
  if (url.pathname === '/admin/newsletter' && request.method === 'POST') return await newsletter(request, env);
  if (url.pathname === '/admin/revoke' && request.method === 'POST') return await revoke(request, env);
  const rows = await db.adminList(env);
  if (url.pathname === '/admin/export.csv')
    return withHeaders(new Response(pg.csv(rows), { headers: { 'Content-Type': 'text/csv; charset=utf-8', 'Content-Disposition': 'attachment; filename="mathsstudio-signups.csv"', 'Cache-Control': 'no-store', 'X-Robots-Tag': 'noindex' } }));
  return page(pg.admin(rows, { log: await db.recentNewsletters(env) }));
}


async function newsletter(request, env) {
  if (!sameOrigin(request)) return json({ error: 'Not allowed' }, 403);
  const b = await readForm(request), origin = new URL(request.url).origin;
  const subject = String(b.subject || '').trim().slice(0, 150), body = String(b.body || '').trim().slice(0, 20000);
  const audience = pg.YEARS.includes(b.audience) ? b.audience : '';
  const rows = await db.adminList(env), done = async note => page(pg.admin(rows, { note, subject, body, audience, log: await db.recentNewsletters(env) }));
  if (!subject || !body) return done('Please write a subject and a message first.');
  if (b.action === 'test') {
    const to = String(b.test_to || '').trim().toLowerCase();
    if (!validEmail(to)) return done('Please type the email address to send the test to.');
    const m = newsletterMail('[Test] ' + subject, body, origin + '/unsubscribe');
    try { await sendMail(env, to, m.subject, m.text, m.html); } catch (e) { return done('The test email could not be sent. Check that email sending is set up.'); }
    return done('Test sent to ' + to + '. Check your inbox, then send to everyone.');
  }
  if (b.action !== 'send' || b.confirm !== '1') return done('Tick the box to confirm before sending to everyone.');
  if (!(await db.rateOk(env, 'newsletter', 4, 3600))) return done('Too many sends in the last hour. Please wait a little.');
  const list = (await db.marketingList(env, audience)).slice(0, 4000);
  if (!list.length) return done('Nobody has opted in for that group yet, so nothing was sent.');
  let sent = 0, failed = 0;
  for (let i = 0; i < list.length; i += 100) {
    const chunk = list.slice(i, i + 100), items = chunk.map(u => {
      const link = origin + '/unsubscribe?t=' + encodeURIComponent(u.unsub_token), m = newsletterMail(subject, body, link);
      return { to: u.email, subject: m.subject, text: m.text, html: m.html, headers: { 'List-Unsubscribe': '<' + link + '>' } };
    });
    let ok = false; try { ok = await sendBatch(env, items); } catch (e) {}
    if (ok) sent += chunk.length; else failed += chunk.length;
  }
  await db.logNewsletter(env, subject, audience || 'everyone', sent, failed);
  return page(pg.admin(rows, { note: 'Sent to ' + sent + ' people' + (failed ? ', ' + failed + ' could not be sent (try again later for them).' : '.'), log: await db.recentNewsletters(env) }));
}

/* removes a paid year from someone (after a refund). Cancelling a monthly plan itself is done in the Stripe dashboard. */
async function revoke(request, env) {
  if (!sameOrigin(request)) return new Response('Bad request', { status: 400 });
  const b = await readForm(request), email = String(b.email || '').trim().toLowerCase(), year = String(b.year || '');
  const rows = await db.adminList(env), done = async note => page(pg.admin(rows, { note, log: await db.recentNewsletters(env) }));
  if (!PAY_YEARS.includes(year) || !email) return await done('Enter an email and choose a year.');
  const u = rows.find(r => String(r.email).toLowerCase() === email);
  if (!u) return await done('No account found for ' + email + '.');
  const n = await db.revokePass(env, u.id, year);
  return await done(n ? 'Removed ' + year + ' access for ' + email + '. If it was a monthly plan, also cancel it in the Stripe dashboard.' : email + ' had no paid ' + year + ' access.');
}

/* ---- Payments: Stripe Checkout (card, plus PayPal/Apple Pay/Google Pay if switched on in the Stripe dashboard) ---- */
const PRICE_PENCE = 1500, MONTH_PENCE = 299, GRACE = 2 * 86400, PAY_YEARS = ['P5', 'P6', 'P7', 'S1', 'S2', 'S3'];
async function checkout(request, env, user) {
  if (!env.STRIPE_SECRET_KEY) return json({ error: 'Payments are not open yet.' }, 503);
  if (!user) return json({ error: 'Please sign in first.' }, 401);
  const b = await readForm(request), year = String(b.year || ''), monthly = b.plan === 'month';
  if (!PAY_YEARS.includes(year)) return json({ error: 'Unknown year group.' }, 400);
  const origin = new URL(request.url).origin, f = new URLSearchParams();
  f.set('mode', monthly ? 'subscription' : 'payment'); f.set('client_reference_id', String(user.id)); f.set('customer_email', user.email);
  f.set('metadata[user_id]', String(user.id)); f.set('metadata[year]', year);
  f.set('line_items[0][quantity]', '1'); f.set('line_items[0][price_data][currency]', 'gbp'); f.set('line_items[0][price_data][unit_amount]', String(monthly ? MONTH_PENCE : PRICE_PENCE));
  if (monthly) { f.set('line_items[0][price_data][recurring][interval]', 'month'); f.set('subscription_data[metadata][user_id]', String(user.id)); f.set('subscription_data[metadata][year]', year); }
  f.set('line_items[0][price_data][product_data][name]', 'MathsStudio ' + year + (monthly ? ' – all topics, monthly (cancel any time)' : ' – all topics, 12 months'));
  f.set('custom_text[submit][message]', 'Access to MathsStudio starts straight away. By paying you agree to our [Terms](' + origin + '/terms/) and [Refund policy](' + origin + '/refunds/), and that you lose your legal 14-day right to cancel once you start using it. Our own 14-day money-back promise still applies.');
  f.set('success_url', origin + '/learn/?year=' + year + '&paid=1&sid={CHECKOUT_SESSION_ID}'); f.set('cancel_url', origin + '/learn/?year=' + year);
  const r = await fetch('https://api.stripe.com/v1/checkout/sessions', { method: 'POST', headers: { Authorization: 'Bearer ' + env.STRIPE_SECRET_KEY, 'Content-Type': 'application/x-www-form-urlencoded' }, body: f });
  const j = await r.json().catch(() => ({}));
  if (!r.ok || !j.url) return json({ error: 'We could not start the payment. Please try again.' }, 502);
  return json({ url: j.url });
}
const periodEnd = sub => Number(sub && (sub.current_period_end || (sub.items && sub.items.data && sub.items.data[0] && sub.items.data[0].current_period_end))) || 0;
async function stripeGet(env, path) {
  const r = await fetch('https://api.stripe.com' + path, { headers: { Authorization: 'Bearer ' + env.STRIPE_SECRET_KEY } });
  const j = await r.json().catch(() => ({})); return r.ok ? j : null;
}
/* gives the year to the user a paid Checkout Session belongs to (one-off year pass or monthly plan) */
async function grantFromSession(env, o, uid, year) {
  const ok = await grantCore(env, o, uid, year);
  if (ok) await receipt(env, o, uid, year);
  return ok;
}
/* one confirmation email per payment, even if the return page and the webhook both arrive */
async function receipt(env, o, uid, year) {
  const key = 'mail:' + o.id;
  try {
    if (!env.RESEND_API_KEY || !o.id || await db.seenEvent(env, key)) return;
    const u = await db.userById(env, uid), pass = (await db.userPasses(env, uid)).find(x => x.year === year);
    if (!u || !pass) { await db.forgetEvent(env, key); return; }
    const monthly = o.mode === 'subscription', m = purchaseMail({ site: env.SITE_URL || 'https://mathsstudio.co.uk', year, monthly, until: pass.until });
    try { await sendMail(env, u.email, m.subject, m.text, m.html); } catch (e) { await db.forgetEvent(env, key); }
  } catch (e) { /* never let an email problem undo a payment */ }
}
async function grantCore(env, o, uid, year) {
  if (o.mode === 'subscription' && o.subscription) {
    const sub = await stripeGet(env, '/v1/subscriptions/' + encodeURIComponent(typeof o.subscription === 'string' ? o.subscription : o.subscription.id));
    const end = periodEnd(sub); if (!sub || !end) return false;
    await db.addSub(env, uid, year, end + GRACE, sub.id, typeof o.customer === 'string' ? o.customer : (sub.customer || null)); return true;
  }
  if (!(await db.seenEvent(env, 'cs:' + o.id))) await db.addPurchase(env, uid, year);
  return true;
}
/* renews monthly access when the next payment has gone through (checked when the person opens the site near the end of their period) */
async function syncSubs(env, userId) {
  if (!env.STRIPE_SECRET_KEY) return;
  for (const row of await db.subsDue(env, userId)) {
    const sub = await stripeGet(env, '/v1/subscriptions/' + encodeURIComponent(row.sub_id)), end = periodEnd(sub);
    await db.setSynced(env, userId, row.year, sub && (sub.status === 'active' || sub.status === 'trialing') && end ? end + GRACE : 0);
  }
}
async function passesOf(env, user) {
  if (user.plan === 'owner') return [];
  await syncSubs(env, user.id).catch(() => {});
  return await db.userPasses(env, user.id);
}
async function portal(request, env, user) {
  if (!env.STRIPE_SECRET_KEY || !user) return redirect('/account/');
  const cust = await db.customerId(env, user.id); if (!cust) return redirect('/account/');
  const f = new URLSearchParams(); f.set('customer', cust); f.set('return_url', new URL(request.url).origin + '/account/');
  const r = await fetch('https://api.stripe.com/v1/billing_portal/sessions', { method: 'POST', headers: { Authorization: 'Bearer ' + env.STRIPE_SECRET_KEY, 'Content-Type': 'application/x-www-form-urlencoded' }, body: f });
  const j = await r.json().catch(() => ({}));
  if (!r.ok || !j.url) return page(pg.message('Could not open billing', 'We could not open the billing page just now. Please try again in a minute, or email us.'), 502);
  return redirect(j.url);
}
async function confirmPay(request, env, user) {
  if (!env.STRIPE_SECRET_KEY) return json({ error: 'Payments are not open yet.' }, 503);
  if (!user) return json({ error: 'Please sign in first.' }, 401);
  const b = await readForm(request), sid = String(b.session_id || '');
  if (!/^cs_[A-Za-z0-9_]{10,200}$/.test(sid)) return json({ error: 'Bad session.' }, 400);
  const r = await fetch('https://api.stripe.com/v1/checkout/sessions/' + sid, { headers: { Authorization: 'Bearer ' + env.STRIPE_SECRET_KEY } });
  const o = await r.json().catch(() => ({})), md = o.metadata || {}, year = String(md.year || '');
  if (!r.ok || o.payment_status !== 'paid' || String(md.user_id) !== String(user.id) || !PAY_YEARS.includes(year)) return json({ ok: false }, 200);
  if (!(await grantFromSession(env, o, user.id, year))) return json({ ok: false }, 200);
  return json({ ok: true, year });
}
async function hmacHex(key, msg) {
  const k = await crypto.subtle.importKey('raw', new TextEncoder().encode(key), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  return [...new Uint8Array(await crypto.subtle.sign('HMAC', k, new TextEncoder().encode(msg)))].map(x => x.toString(16).padStart(2, '0')).join('');
}
async function stripeWebhook(request, env) {
  if (!env.STRIPE_WEBHOOK_SECRET) return json({ error: 'Not configured' }, 503);
  const raw = await request.text(), h = request.headers.get('Stripe-Signature') || '';
  const parts = Object.fromEntries(h.split(',').map(x => x.split('=')).filter(x => x.length === 2).map(x => [x[0].trim(), x[1]]));
  const sigs = h.split(',').filter(x => x.trim().startsWith('v1=')).map(x => x.trim().slice(3));
  if (!parts.t || Math.abs(Date.now() / 1000 - Number(parts.t)) > 600) return json({ error: 'Bad signature' }, 400);
  const want = await hmacHex(env.STRIPE_WEBHOOK_SECRET, parts.t + '.' + raw);
  if (!sigs.some(s => safeEqual(s, want))) return json({ error: 'Bad signature' }, 400);
  let ev; try { ev = JSON.parse(raw); } catch (e) { return json({ error: 'Bad body' }, 400); }
  if (ev.type === 'checkout.session.completed' || ev.type === 'checkout.session.async_payment_succeeded') {
    const o = ev.data && ev.data.object || {}, md = o.metadata || {}, uid = Number(md.user_id), year = String(md.year || '');
    if (o.payment_status === 'paid' && uid && PAY_YEARS.includes(year)) await grantFromSession(env, o, uid, year);
  }
  return json({ received: true });
}

export default {
  async scheduled(event, env) { await db.init(env); await db.cleanup(env); },
  async fetch(request, env) {
    const url = new URL(request.url), p = url.pathname, m = request.method;
    try {
      if (p === '/admin' || p === '/admin/' || p === '/admin/export.csv' || p === '/admin/newsletter' || p === '/admin/revoke') { await db.init(env); return await admin(request, env, url); }
      const dynamic = p.startsWith('/api/') || p.startsWith('/auth/') || p === '/logout' || p === '/unsubscribe' || p === '/account' || p.startsWith('/account/') || p === '/app' || p.startsWith('/app/') || p === '/learn' || p.startsWith('/learn/');
      if (!dynamic) return withHeaders(await env.ASSETS.fetch(request));
      await db.init(env);
      if (p === '/api/stripe-webhook' && m === 'POST') return await stripeWebhook(request, env);
      if (m === 'POST' && !sameOrigin(request)) return json({ error: 'Not allowed' }, 403);

      if (p === '/api/signup' && m === 'POST') return await signup(request, env);
      if (p === '/api/login' && m === 'POST') return await login(request, env);
      if (p === '/api/forgot' && m === 'POST') return await forgot(request, env);
      if (p === '/api/reset' && m === 'POST') return await reset(request, env);
      if (p === '/auth/verify') return m === 'POST' ? await verifyPost(request, env) : verifyGetPage(url);
      if (p === '/unsubscribe') {
        if (m === 'POST') { const b = await readForm(request); const ok = await db.unsubscribe(env, String(b.t || '')); return page(pg.message(ok ? 'You are unsubscribed' : 'Link not valid', ok ? 'You will not get news, tips or offers from us any more.' : 'This unsubscribe link is not valid.'), ok ? 200 : 400); }
        const t = url.searchParams.get('t') || ''; const row = t && await db.unsubUser(env, t);
        return row ? page(pg.unsubPage(t)) : page(pg.message('Link not valid', 'This unsubscribe link is not valid.'), 400);
      }
      const user = await currentUser(env, request);
      if (p === '/api/me' && m === 'GET') return json(user ? { signedIn: true, email: user.email, year: user.year || '', owner: user.plan === 'owner', years: (await passesOf(env, user)).map(x => x.year), pay: !!env.STRIPE_SECRET_KEY } : { signedIn: false, owner: false, years: [], pay: !!env.STRIPE_SECRET_KEY }, 200, { 'Cache-Control': 'private, no-store' });
      if (p === '/api/progress' && (m === 'GET' || m === 'POST')) return await progressApi(request, env, user, url);
      if (p === '/api/learners' && (m === 'GET' || m === 'POST')) return await learnersApi(request, env, user);
      if (p === '/api/confirm' && m === 'POST') return await confirmPay(request, env, user);
      if (p === '/api/checkout' && m === 'POST') return await checkout(request, env, user);
      if (p === '/logout' && m === 'POST') {
        const t = parseCookies(request).ms_session; if (t) await db.dropSession(env, await sha256(t));
        return redirect('/', { 'Set-Cookie': cookie('ms_session', '', request, 0) });
      }
      if (p.startsWith('/app') || p === '/learn' || p.startsWith('/learn/')) {
        if (!user && env.REQUIRE_LOGIN === '1') return redirect('/login/');
        const isLearn = p === '/learn' || p.startsWith('/learn/');
        const res = await env.ASSETS.fetch(isLearn ? new Request(new URL('/app/' + url.search, url), request) : request);
        return withHeaders(res, { 'Cache-Control': 'private, no-store, no-transform', 'X-Robots-Tag': 'noindex' });
      }
      if (p === '/account' || p === '/account/') return user ? page(pg.account(user, await passesOf(env, user), !!(await db.customerId(env, user.id)))) : redirect('/login/');
      if (p === '/account/portal' && m === 'POST') return await portal(request, env, user);
      if (p === '/account/marketing' && m === 'POST') {
        if (!user) return redirect('/login/'); const b = await readForm(request), on = b.on === '1';
        if (on) await env.DB.prepare('UPDATE users SET marketing = 1, marketing_at = ?, marketing_text = ?, unsub_at = NULL WHERE id = ?').bind(new Date().toISOString(), db.MARKETING_TEXT, user.id).run();
        else await env.DB.prepare('UPDATE users SET marketing = 0, unsub_at = ? WHERE id = ?').bind(new Date().toISOString(), user.id).run();
        return redirect('/account/');
      }
      if (p === '/account/refund' && m === 'POST') {
        if (!user) return redirect('/login/');
        const b = await readForm(request), year = String(b.year || '').slice(0, 3), reason = String(b.reason || '').replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/g, '').slice(0, 500);
        const passes = await passesOf(env, user), pass = passes.find(x => x.year === year);
        if (!pass) return page(pg.message('Refund request', 'We could not find a paid pass for that year group on this account. Please email us and we will help. <a href="/account/">Back to your account</a>.'), 400);
        if (!(await db.rateOk(env, 'refund:' + user.id, 2, 86400))) return page(pg.message('Refund request', 'We already have your request. We usually reply within two working days. <a href="/account/">Back to your account</a>.'), 429);
        const paid = pass.created_at ? new Date(pass.created_at) : null, days = paid && !isNaN(paid) ? Math.floor((Date.now() - paid.getTime()) / 86400000) : null;
        const to = env.SUPPORT_EMAIL || 'info@mathsstudio.co.uk', until = pass.until ? new Date(pass.until * 1000).toISOString().slice(0, 10) : '';
        const body = 'Refund request from the Account page.\n\nAccount email: ' + user.email + '\nYear group: ' + year + '\nPass runs until: ' + until + '\nPayment recorded: ' + (paid && !isNaN(paid) ? paid.toISOString().slice(0, 10) + ' (' + days + ' days ago)' : 'unknown') + '\nWithin 14 days: ' + (days === null ? 'check in Stripe' : days <= 14 ? 'yes' : 'NO, ' + days + ' days') + '\n\nTheir note: ' + (reason || '(none)') + '\n\nTo refund: Stripe, Payments, find this email, Refund. Cancel a monthly plan in Stripe, then use Remove a paid year in the admin page. Reply to this email to write to them.';
        try {
          await sendMail(env, to, 'Refund request: ' + year + ' · ' + user.email, body, undefined, user.email);
          await sendMail(env, user.email, 'We have your MathsStudio refund request', 'Hello,\n\nWe have your refund request for ' + year + '. We usually reply within two working days, and if you are inside our 14-day promise we will refund the payment to the card you paid with.\n\nYou do not need to do anything else. You can reply to this email if you want to add anything.\n\nMathsStudio\n' + new URL(request.url).origin + '/refunds/').catch(() => {});
        } catch (e) { return page(pg.message('Refund request', 'We could not send your request just now. Please email info@mathsstudio.co.uk instead and we will sort it out. <a href="/account/">Back to your account</a>.'), 502); }
        return page(pg.message('Request sent', 'Thank you. We have your refund request for ' + year + ' and sent a confirmation to your email. We usually reply within two working days. <a href="/account/">Back to your account</a>.'));
      }
      if (p === '/account/delete' && m === 'POST') {
        if (!user) return redirect('/login/'); const b = await readForm(request);
        if (b.sure !== '1') return redirect('/account/');
        await db.deleteUser(env, user.id);
        return redirect('/', { 'Set-Cookie': cookie('ms_session', '', request, 0) });
      }
      return page(pg.message('Page not found', 'We could not find that page. <a href="/">Go to the home page</a>.'), 404);
    } catch (e) {
      return page(pg.message('Something went wrong', 'Please try again in a minute.'), 500);
    }
  }
};
function verifyGetPage(url) {
  const t = url.searchParams.get('t') || '';
  return t ? page(pg.confirmLink(t)) : page(pg.message('Link not valid', 'This link is not valid. <a href="/login/">Sign in</a> to get a new one.'), 400);
}
