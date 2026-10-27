import { page, json, redirect, withHeaders, sameOrigin, validEmail, randomToken, sha256, safeEqual, parseCookies, cookie, hashPassword, checkPassword } from './util.js';
import * as db from './db.js';
import { sendMail, verifyMail, loginMail, resetMail } from './mail.js';
import * as pg from './pages.js';

const SESSION_SEC = 30 * 86400, VERIFY_SEC = 86400, LOGIN_SEC = 1800;
const ROLES = ['parent', 'teacher'];

async function readForm(request) {
  const ct = request.headers.get('Content-Type') || '';
  if (ct.includes('application/json')) { try { return await request.json(); } catch (e) { return {}; } }
  const o = {}; try { new URLSearchParams(await request.text()).forEach((v, k) => { o[k] = v; }); } catch (e) {}
  return o;
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
  return json({ ok: true, next: '/account/' }, 200, { 'Set-Cookie': await startSession(env, request, u.id) });
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
  return json({ ok: true, next: '/account/' }, 200, { 'Set-Cookie': await startSession(env, request, row.user_id) });
}
async function verifyPost(request, env) {
  const b = await readForm(request), tok = String(b.t || '');
  const row = tok ? await db.useToken(env, await sha256(tok)) : null;
  if (!row) return page(pg.message('Link not valid', 'This link has already been used or has run out. <a href="/login/">Sign in</a> and we will send you a new confirmation link if you still need one.'), 400);
  await db.confirmUser(env, row.user_id, !!row.marketing);
  return redirect('/account/', { 'Set-Cookie': await startSession(env, request, row.user_id) });
}

async function admin(request, env, url) {
  if (!env.ADMIN_PASSWORD) return page(pg.message('Admin locked', 'The admin password has not been set yet.'), 503);
  const h = request.headers.get('Authorization') || '', ok = h.startsWith('Basic ') && (() => { try { const s = atob(h.slice(6)), i = s.indexOf(':'); return safeEqual(s.slice(i + 1), env.ADMIN_PASSWORD); } catch (e) { return false; } })();
  if (!ok) return new Response('Password required.', { status: 401, headers: { 'WWW-Authenticate': 'Basic realm="MathsStudio admin", charset="UTF-8"', 'Cache-Control': 'no-store' } });
  const rows = await db.adminList(env);
  if (url.pathname === '/admin/export.csv')
    return withHeaders(new Response(pg.csv(rows), { headers: { 'Content-Type': 'text/csv; charset=utf-8', 'Content-Disposition': 'attachment; filename="mathsstudio-signups.csv"', 'Cache-Control': 'no-store', 'X-Robots-Tag': 'noindex' } }));
  return page(pg.admin(rows));
}

export default {
  async scheduled(event, env) { await db.init(env); await db.cleanup(env); },
  async fetch(request, env) {
    const url = new URL(request.url), p = url.pathname, m = request.method;
    try {
      if (p === '/admin' || p === '/admin/' || p === '/admin/export.csv') { await db.init(env); return await admin(request, env, url); }
      const dynamic = p.startsWith('/api/') || p.startsWith('/auth/') || p === '/logout' || p === '/unsubscribe' || p === '/account' || p.startsWith('/account/') || p === '/app' || p.startsWith('/app/') || p === '/learn' || p.startsWith('/learn/');
      if (!dynamic) return withHeaders(await env.ASSETS.fetch(request));
      await db.init(env);
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
      if (p === '/api/me' && m === 'GET') return json(user ? { signedIn: true, email: user.email, year: user.year || '' } : { signedIn: false });
      if (p === '/logout' && m === 'POST') {
        const t = parseCookies(request).ms_session; if (t) await db.dropSession(env, await sha256(t));
        return redirect('/', { 'Set-Cookie': cookie('ms_session', '', request, 0) });
      }
      if (p.startsWith('/app') || p === '/learn' || p.startsWith('/learn/')) {
        if (!user && env.REQUIRE_LOGIN === '1') return redirect('/login/');
        const isLearn = p === '/learn' || p.startsWith('/learn/');
        const res = await env.ASSETS.fetch(isLearn ? new Request(new URL('/app/' + url.search, url), request) : request);
        return withHeaders(res, { 'Cache-Control': 'private, no-store', 'X-Robots-Tag': 'noindex' });
      }
      if (p === '/account' || p === '/account/') return user ? page(pg.account(user)) : redirect('/login/');
      if (p === '/account/marketing' && m === 'POST') {
        if (!user) return redirect('/login/'); const b = await readForm(request), on = b.on === '1';
        if (on) await env.DB.prepare('UPDATE users SET marketing = 1, marketing_at = ?, marketing_text = ?, unsub_at = NULL WHERE id = ?').bind(new Date().toISOString(), db.MARKETING_TEXT, user.id).run();
        else await env.DB.prepare('UPDATE users SET marketing = 0, unsub_at = ? WHERE id = ?').bind(new Date().toISOString(), user.id).run();
        return redirect('/account/');
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
