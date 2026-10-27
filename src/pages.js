/* Pages the Worker builds itself (they depend on who is signed in) */
import { esc } from './util.js';
const YEARS = ['P5', 'P6', 'P7', 'S1', 'S2', 'S3'];
export { YEARS };
export function shell(title, body) {
  return '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex"><title>' + esc(title) + ' · MathsStudio</title>' +
    '<link rel="icon" href="/favicon.svg" type="image/svg+xml"><link rel="stylesheet" href="/site.css?v=2"></head><body class="plain">' +
    '<header class="nav"><a class="brand" href="/"><svg class="mark" width="40" height="40" viewBox="0 0 64 64" role="img" aria-label="MathsStudio logo"><rect width="64" height="64" rx="16" fill="#2b5fd9"/><path d="M16 47V21L32 39L48 21V47" fill="none" stroke="#ffffff" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/><circle cx="32" cy="15" r="4.5" fill="#ffd166"/></svg><span class="word"><span>Maths</span><span class="st">Studio</span></span></a></header>' +
    '<main class="narrow">' + body + '</main>' +
    '<footer class="foot"><a href="/privacy/">Privacy</a> · <a href="/">Home</a></footer></body></html>';
}
export function message(title, text, extra) {
  return shell(title, '<div class="card"><h1>' + esc(title) + '</h1><p>' + text + '</p>' + (extra || '') + '</div>');
}
export function confirmLink(token) {
  return shell('Continue to MathsStudio', '<div class="card"><h1>Almost there</h1><p>Press the button to confirm and sign in.</p>' +
    '<form method="post" action="/auth/verify"><input type="hidden" name="t" value="' + esc(token) + '"><button class="btn" type="submit">Confirm and sign in</button></form></div>');
}
export function account(u) {
  const mk = u.marketing ? 'You are getting news, tips and offers by email.' : 'You are not getting news, tips or offers.';
  return shell('Your account', '<div class="card"><h1>Your account</h1>' +
    '<dl class="kv"><dt>Email</dt><dd>' + esc(u.email) + '</dd><dt>Year group</dt><dd>' + esc(u.year || 'Not chosen') + '</dd><dt>Plan</dt><dd>' + (u.plan === 'free' ? 'Free' : esc(u.plan)) + '</dd><dt>News and offers</dt><dd>' + mk + '</dd></dl>' +
    '<p><a class="btn" href="/">Open MathsStudio</a></p>' +
    '<form method="post" action="/account/marketing"><input type="hidden" name="on" value="' + (u.marketing ? '0' : '1') + '"><button class="btn alt" type="submit">' + (u.marketing ? 'Stop news and offers' : 'Send me news and offers') + '</button></form>' +
    '<form method="post" action="/logout"><button class="btn alt" type="submit">Sign out</button></form>' +
    '<details class="danger"><summary>Delete my account</summary><p>This removes your email and account from MathsStudio for good.</p>' +
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
export function admin(rows) {
  const verified = rows.filter(r => r.verified_at).length, mk = rows.filter(r => r.verified_at && r.marketing).length;
  const by = {}; rows.forEach(r => { if (r.verified_at) by[r.year || '-'] = (by[r.year || '-'] || 0) + 1; });
  const tr = rows.map(r => '<tr><td>' + esc(r.email) + '</td><td>' + esc(r.role || '') + '</td><td>' + esc(r.year || '') + '</td><td>' + (r.verified_at ? 'Yes' : 'No') + '</td><td>' + ((r.verified_at && r.marketing) ? 'Yes' : 'No') + '</td><td>' + esc((r.created_at || '').slice(0, 10)) + '</td><td>' + esc((r.last_login || '').slice(0, 10)) + '</td></tr>').join('');
  return '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex"><title>Admin · MathsStudio</title><link rel="stylesheet" href="/site.css?v=2"></head><body class="plain"><main class="wide">' +
    '<h1>People who signed up</h1><div class="stats"><div><b>' + rows.length + '</b><span>Sign-ups</span></div><div><b>' + verified + '</b><span>Verified</span></div><div><b>' + mk + '</b><span>OK to email with news</span></div>' +
    Object.keys(by).sort().map(k => '<div><b>' + by[k] + '</b><span>' + esc(k) + ' verified</span></div>').join('') + '</div>' +
    '<p><a class="btn" href="/admin/export.csv">Download as spreadsheet (CSV)</a></p>' +
    '<p class="note">Only email people with "OK to email with news" = Yes. Every email you send must include an unsubscribe link.</p>' +
    '<div class="tablewrap"><table><thead><tr><th>Email</th><th>Role</th><th>Year</th><th>Verified</th><th>OK to email</th><th>Signed up</th><th>Last sign-in</th></tr></thead><tbody>' + (tr || '<tr><td colspan="7">Nobody yet.</td></tr>') + '</tbody></table></div></main></body></html>';
}
