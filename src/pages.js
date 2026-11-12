/* Pages the Worker builds itself (they depend on who is signed in) */
import { esc } from './util.js';
const YEARS = ['P5', 'P6', 'P7', 'S1', 'S2', 'S3'];
export { YEARS };
export function shell(title, body) {
  return '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex"><title>' + esc(title) + ' · MathsStudio</title>' +
    '<link rel="icon" href="/favicon.svg" type="image/svg+xml"><link rel="stylesheet" href="/site.css?v=3"></head><body class="plain">' +
    '<header class="nav"><a class="brand" href="/"><svg class="mark" width="40" height="40" viewBox="0 0 64 64" role="img" aria-label="MathsStudio logo"><rect width="64" height="64" rx="16" fill="#2b5fd9"/><path d="M16 47V21L32 39L48 21V47" fill="none" stroke="#ffffff" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/><circle cx="32" cy="15" r="4.5" fill="#ffd166"/></svg><span class="word"><span>Maths</span><span class="st">Studio</span></span></a></header>' +
    '<main class="narrow">' + body + '</main>' +
    '<footer class="foot"><a href="/terms/">Terms</a> · <a href="/refunds/">Refunds</a> · <a href="/privacy/">Privacy</a> · <a href="/">Home</a></footer></body></html>';
}
export function message(title, text, extra) {
  return shell(title, '<div class="card"><h1>' + esc(title) + '</h1><p>' + text + '</p>' + (extra || '') + '</div>');
}
export function confirmLink(token) {
  return shell('Continue to MathsStudio', '<div class="card"><h1>Almost there</h1><p>Press the button to confirm and sign in.</p>' +
    '<form method="post" action="/auth/verify"><input type="hidden" name="t" value="' + esc(token) + '"><button class="btn" type="submit">Confirm and sign in</button></form></div>');
}
export function account(u, passes, canManage) {
  passes = (passes || []).map(x => typeof x === 'string' ? { year: x } : x);
  const years = passes.map(x => x.year), dt = x => x.until ? ' · until ' + new Date(x.until * 1000).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' }) : '';
  const owner = u.plan === 'owner', ini = esc((u.email || '?').charAt(0).toUpperCase());
  const plan = owner ? '<span class="pill ok">Owner · full access</span>' : years.length ? passes.map(x => '<span class="pill ok">' + esc(x.year) + ' unlocked' + dt(x) + '</span>').join(' ') : '<span class="pill">Free · Topic 1 of each year</span>';
  const mk = u.marketing ? 'On' : 'Off';
  return shell('Your account', '<div class="card acct">' +
    '<div class="who"><div class="avatar" aria-hidden="true">' + ini + '</div><div><h1>Your account</h1><div class="mail">' + esc(u.email) + '</div></div></div>' +
    '<dl class="kv"><dt>Year group</dt><dd>' + esc(u.year || 'Not chosen') + '</dd><dt>Plan</dt><dd class="plans">' + plan + '</dd><dt>News and offers</dt><dd>' + mk + '</dd></dl>' +
    '<a class="btn big" href="/learn/' + (u.year ? '?year=' + encodeURIComponent(u.year) : '') + '">Open MathsStudio</a>' +
    (owner ? '' : '<p class="hint">' + (years.length ? 'Need another year group? Open it and tap a locked topic.' : 'Tap any locked topic inside MathsStudio to unlock a whole year, from £2.99 a month or £15 for 12 months.') + '</p>') +
    (canManage ? '<form method="post" action="/account/portal" class="manage"><button class="btn alt" type="submit">Manage subscription and receipts</button></form>' : '') +
    '<div class="two"><form method="post" action="/account/marketing"><input type="hidden" name="on" value="' + (u.marketing ? '0' : '1') + '"><button class="btn alt" type="submit">' + (u.marketing ? 'Stop news and offers' : 'Send me news and offers') + '</button></form>' +
    '<form method="post" action="/logout"><button class="btn alt" type="submit">Sign out</button></form></div>' +
    (!owner && years.length ? '<details class="refund"><summary>Request a refund</summary><p>Our 14-day money-back promise: if MathsStudio is not right for you, ask within 14 days of your first payment for a year group and we will refund it in full. We usually reply within two working days, and the money goes back to the card you paid with.</p>' +
    '<form method="post" action="/account/refund"><label>Which year group?<select name="year" required>' + years.map(y => '<option>' + esc(y) + '</option>').join('') + '</select></label>' +
    '<label>Anything you would like us to know? (optional)<textarea name="reason" rows="3" maxlength="500"></textarea></label>' +
    '<button class="btn alt" type="submit">Send refund request</button></form></details>' : '') +
    '<details class="danger"><summary>Delete my account</summary><p>This removes your email and account from MathsStudio for good. Paid access ends with it, so cancel a monthly plan first.</p>' +
    '<form method="post" action="/account/delete"><label class="chk"><input type="checkbox" name="sure" value="1" required> I want to delete my account</label><button class="btn danger-btn" type="submit">Delete my account</button></form></details></div>');
}
export function unsubPage(token) {
  return shell('Unsubscribe', '<div class="card"><h1>Unsubscribe</h1><p>Stop news, tips and offers from MathsStudio? Your account stays as it is.</p>' +
    '<form method="post" action="/unsubscribe"><input type="hidden" name="t" value="' + esc(token) + '"><button class="btn" type="submit">Yes, unsubscribe me</button></form></div>');
}
function csvCell(v) {
  let s = v == null ? '' : String(v);
  if (/^[=+\-@\t\r]/.test(s)) s = "'" + s;
  return '"' + s.replace(/"/g, '""') + '"';
}
export function csv(rows) {
  const cols = ['id', 'email', 'role', 'year', 'plan', 'verified', 'marketing_consent', 'marketing_at', 'unsubscribed_at', 'last_login', 'created_at'];
  const lines = [cols.join(',')];
  rows.forEach(r => lines.push([r.id, r.email, r.role, r.year, r.plan, r.verified_at ? 'yes' : 'no', (r.marketing && r.verified_at) ? 'yes' : 'no', r.marketing_at, r.unsub_at, r.last_login, r.created_at].map(csvCell).join(',')));
  return lines.join('\r\n') + '\r\n';
}
export function admin(rows, o) {
  o = o || {};
  const verified = rows.filter(r => r.verified_at).length, mk = rows.filter(r => r.verified_at && r.marketing).length;
  const mkBy = { P5: 0, P6: 0, P7: 0, S1: 0, S2: 0, S3: 0 }; rows.forEach(r => { if (r.verified_at && r.marketing && !r.unsub_at && mkBy[r.year] !== undefined) mkBy[r.year]++; });
  const by = {}; rows.forEach(r => { if (r.verified_at) by[r.year || '-'] = (by[r.year || '-'] || 0) + 1; });
  const tr = rows.map(r => '<tr><td>' + esc(r.email) + '</td><td>' + esc(r.role || '') + '</td><td>' + (r.owner ? 'Owner (all)' : (r.access || []).length >= 6 ? 'All years' : (r.access || []).length ? esc(r.access.join(', ')) : 'None') + '</td><td>' + (r.verified_at ? 'Yes' : 'No') + '</td><td>' + ((r.verified_at && r.marketing) ? 'Yes' : 'No') + '</td><td>' + esc((r.created_at || '').slice(0, 10)) + '</td><td>' + esc((r.last_login || '').slice(0, 10)) + '</td></tr>').join('');
  return '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex"><title>Admin · MathsStudio</title><link rel="stylesheet" href="/site.css?v=3"></head><body class="plain"><main class="adm">' +
    '<header class="admbar"><h1>Admin</h1><a class="btn alt" href="/admin/export.csv">Download CSV</a></header><div class="stats"><div><b>' + rows.length + '</b><span>Sign-ups</span></div><div><b>' + verified + '</b><span>Verified</span></div><div><b>' + mk + '</b><span>OK to email with news</span></div>' +
    Object.keys(by).sort().map(k => '<div><b>' + by[k] + '</b><span>' + esc(k) + ' verified</span></div>').join('') + '</div>' +
    (o.note ? '<p class="nlnote" role="status">' + esc(o.note) + '</p>' : '') +
    '<div class="admgrid"><section class="card nl"><h2>Send a newsletter</h2><p class="note">Goes only to people who verified their email, said yes to news and have not unsubscribed (<b>' + mk + '</b> now). Every email has its own unsubscribe link.</p>' +
    '<form method="post" action="/admin/newsletter"><label>Send to<select name="audience"><option value="">Everyone who opted in (' + mk + ')</option>' + ['P5', 'P6', 'P7', 'S1', 'S2', 'S3'].map(y => '<option value="' + y + '"' + (o.audience === y ? ' selected' : '') + '>' + y + ' only (' + mkBy[y] + ')</option>').join('') + '</select></label>' +
    '<label>Subject<input name="subject" maxlength="150" required value="' + esc(o.subject || '') + '"></label>' +
    '<label>Message<textarea name="body" rows="9" required placeholder="Write in plain text. Leave a blank line between paragraphs. Web links turn into clickable links.">' + esc(o.body || '') + '</textarea></label>' +
    '<div class="nltest"><input name="test_to" type="email" placeholder="your email, for a test"><button class="btn alt" type="submit" name="action" value="test">Send test to me</button></div>' +
    '<label class="chk"><input type="checkbox" name="confirm" value="1"> I have checked the test email and want to send this to the people above</label>' +
    '<button class="btn" type="submit" name="action" value="send">Send to subscribers</button></form>' +
    (o.log && o.log.length ? '<h3>Recently sent</h3><ul class="nllog">' + o.log.map(x => '<li><b>' + esc(x.subject) + '</b> · ' + esc(x.audience) + ' · ' + x.sent + ' sent' + (x.failed ? ', ' + x.failed + ' failed' : '') + ' · ' + esc((x.created_at || '').slice(0, 10)) + '</li>').join('') + '</ul>' : '') + '</section>' +
    '<div style="display:grid;gap:16px;min-width:0"><section class="card nl"><h2>Give access</h2><p class="note">Gives an existing account access to one year group, or all of them, without payment. Extends access if they already have it.</p><form method="post" action="/admin/grant"><label>Account email<input name="email" type="email" required></label><label>Year<select name="year"><option value="ALL">All years</option>' + ['P5', 'P6', 'P7', 'S1', 'S2', 'S3'].map(y => '<option>' + y + '</option>').join('') + '</select></label><label>For<select name="months"><option value="1">1 month</option><option value="3">3 months</option><option value="12" selected>12 months</option><option value="60">5 years</option></select></label><button class="btn" type="submit">Give access</button></form></section>' +
    '<section class="card nl"><h2>Remove a paid year</h2><p class="note">Takes away paid access for one year group. Refund the payment in Stripe first, and cancel a monthly plan there too.</p><form method="post" action="/admin/revoke"><label>Account email<input name="email" type="email" required></label><label>Year<select name="year">' + ['P5', 'P6', 'P7', 'S1', 'S2', 'S3'].map(y => '<option>' + y + '</option>').join('') + '</select></label><button class="btn alt" type="submit">Remove access</button></form></section></div></div>' +
    '<h2 class="admh">People who signed up</h2><p class="note">Only email people with "OK to email with news" = Yes. Every email you send must include an unsubscribe link.</p>' +
    '<div class="tablewrap"><table><thead><tr><th>Email</th><th>Role</th><th>Access</th><th>Verified</th><th>OK to email</th><th>Signed up</th><th>Last sign-in</th></tr></thead><tbody>' + (tr || '<tr><td colspan="7">Nobody yet.</td></tr>') + '</tbody></table></div></main></body></html>';
}
