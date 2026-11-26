/* Pages the Worker builds itself (they depend on who is signed in) */
import { esc } from './util.js';
const YEARS = ['P2', 'P3', 'P4', 'P5', 'P6', 'P7', 'S1', 'S2', 'S3'];
/* P2 and P3 are free for everyone, so only P4 to S3 can be paid for or given */
const PAID = YEARS.filter(y => y !== 'P2' && y !== 'P3');
export { YEARS };
export function shell(title, body) {
  return '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex"><title>' + esc(title) + ' · MathsStudio</title>' +
    '<link rel="icon" href="/favicon.svg" type="image/svg+xml"><link rel="icon" href="/favicon.ico" sizes="48x48"><link rel="icon" href="/favicon-96.png" type="image/png" sizes="96x96"><link rel="icon" href="/icon-192.png" type="image/png" sizes="192x192"><link rel="apple-touch-icon" href="/apple-touch-icon.png"><link rel="stylesheet" href="/site.css?v=3"><style>body.shell{min-height:100vh;min-height:100dvh;display:flex;flex-direction:column;margin:0}.scard{max-width:420px;width:100%;margin:0 auto!important;padding:32px 32px 28px;box-sizing:border-box}.scard h1{font-size:24px!important;line-height:1.25;margin:0 0 6px}.scard .ssub{margin:0 0 22px;font-size:15px;color:#4a587a;line-height:1.5}.scard label{display:block;font-weight:800;font-size:14px;margin:0 0 6px}.scard input{width:100%;box-sizing:border-box;min-height:46px;font-size:16px;margin:0}.scard input:focus{outline:2px solid #2b5fd9;outline-offset:1px;box-shadow:none}.scard .btn{display:flex;align-items:center;justify-content:center;width:100%;min-height:46px;margin:18px 0 0;font-size:16px;white-space:nowrap;box-sizing:border-box}.scard .msg{margin:0 0 16px}.sbtns{display:flex;gap:10px}.sbtns .btn{flex:1 1 0;margin:0!important;width:auto}body.shell>header.nav{width:100%;box-sizing:border-box}body.shell main.narrow{flex:1 0 auto;display:flex;flex-direction:column;justify-content:center;width:100%;box-sizing:border-box;margin:0 auto;padding-top:24px;padding-bottom:40px}.sfoot{background:#14213d;color:#dbe3f7}.sfoot>div{max-width:1200px;margin:0 auto;padding:22px 24px;display:flex;flex-wrap:wrap;align-items:center;gap:12px 28px;font-size:15px}.sfoot .sb{display:flex;align-items:center;gap:10px;font-weight:700;font-size:20px;color:#fff;text-decoration:none}.sfoot .sc{flex:1 1 260px;min-width:0;font-size:13px;color:#b9c4e4;line-height:1.5}.sfoot nav{display:flex;flex-wrap:wrap;gap:4px 20px}.sfoot nav a{color:#dbe3f7;min-height:44px;display:inline-flex;align-items:center}</style></head><body class="plain shell">' +
    '<header class="nav"><a class="brand" href="/"><svg class="mark" width="40" height="40" viewBox="0 0 64 64" role="img" aria-label="MathsStudio logo"><rect width="64" height="64" rx="16" fill="#2b5fd9"/><path d="M16 47V21L32 39L48 21V47" fill="none" stroke="#ffffff" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/><circle cx="32" cy="15" r="4.5" fill="#ffd166"/></svg><span class="word"><span>Maths</span><span class="st">Studio</span></span></a></header>' +
    '<main class="narrow">' + body + '</main>' +
    '<footer class="sfoot"><div><a class="sb" href="/"><svg width="32" height="32" viewBox="0 0 64 64" aria-hidden="true"><rect width="64" height="64" rx="16" fill="#2b5fd9"/><path d="M16 47V21L32 39L48 21V47" fill="none" stroke="#ffffff" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/><circle cx="32" cy="15" r="4.5" fill="#ffd166"/></svg>MathsStudio</a>' +
    '<div class="sc">© 2026 MathsStudio. All rights reserved. The lessons, questions and activities on this site are protected by copyright.</div>' +
    '<nav aria-label="Footer"><a href="/terms/">Terms</a><a href="/refunds/">Refunds</a><a href="/privacy/">Privacy</a><a href="/">Home</a></nav></div></footer></body></html>';
}
export function message(title, text, extra) {
  return shell(title, '<div class="card"><h1>' + esc(title) + '</h1><p>' + text + '</p>' + (extra || '') + '</div>');
}
export function adminLogin(err) {
  return shell('Admin sign in', '<form class="card scard" method="post" action="/admin/login"><h1>Admin sign in</h1><p class="ssub">For the MathsStudio owner only.</p>' +
    (err ? '<div class="msg err" role="alert">' + esc(err) + '</div>' : '') +
    '<label for="apw">Admin password</label><input id="apw" name="password" type="password" autocomplete="current-password" required>' +
    '<button class="btn" type="submit">Sign in</button><p style="text-align:center;margin:14px 0 0"><a href="/admin/forgot">Forgot password?</a></p></form>');
}
export function adminForgot(note) {
  return shell('Forgot admin password', '<form class="card scard" method="post" action="/admin/forgot"><h1>Forgot your password?</h1><p class="ssub">We will email a link to the owner\'s verified email address. Use it to choose a new admin password.</p>' +
    (note ? '<div class="msg ok" role="status">' + esc(note) + '</div>' : '') +
    '<button class="btn" type="submit">Email me a reset link</button><p style="text-align:center;margin:14px 0 0"><a href="/admin">Back to sign in</a></p></form>');
}
export function adminReset(token, err) {
  return shell('New admin password', '<form class="card scard" method="post" action="/admin/reset"><h1>Choose a new admin password</h1><p class="ssub">At least 10 characters. You will be signed out everywhere else.</p>' +
    (err ? '<div class="msg err" role="alert">' + esc(err) + '</div>' : '') + '<input type="hidden" name="t" value="' + esc(token) + '">' +
    '<label for="npw">New password</label><input id="npw" name="password" type="password" minlength="10" autocomplete="new-password" required>' +
    '<label for="npw2">Type it again</label><input id="npw2" name="password2" type="password" minlength="10" autocomplete="new-password" required>' +
    '<button class="btn" type="submit">Save new password</button></form>');
}
export function adminOut() {
  return shell('Logged out', '<div class="card scard"><h1>You are logged out of admin</h1><p class="ssub" id="outmsg">Logging out…</p><div class="sbtns"><a class="btn" href="/admin">Log in again</a><a class="btn alt" href="/">Home page</a></div></div>' +
    '<script>(function(){var m=document.getElementById("outmsg");function done(){m.textContent="Done. To get back in you will need the admin password again. On a shared computer, also close the browser.";}' +
    'try{var x=new XMLHttpRequest();x.open("GET","/admin/bye",true,"logged-out","x");x.onloadend=done;x.send();}catch(e){done();}})();</script>');
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
    (owner ? '' : '<p class="hint">' + (years.length ? 'Need another year group? Open it and tap a locked topic.' : 'Tap any locked topic inside MathsStudio to unlock a whole year, from £2.99 a month or £20 for 12 months.') + '</p>') +
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
/* the Access column: every year the account can use now, in school order, with the date it runs until */
function accessCell(r) {
  if (r.owner) return 'Owner (all)';
  const acc = PAID.filter(y => (r.access || []).includes(y)), u = r.until || {};
  if (!acc.length) return 'None';
  const day = t => new Date(t * 1000).toISOString().slice(0, 10), dates = [...new Set(acc.map(y => day(u[y] || 0)))];
  const names = acc.length === PAID.length ? 'All years' : acc.join(', ');
  if (dates.length === 1) return esc(names) + '<br><small class="note">until ' + dates[0] + '</small>';
  if (acc.length === PAID.length) return 'All years<br><small class="note">until ' + dates.sort()[0] + ' or later</small>';
  return acc.map(y => esc(y) + ' <small class="note">until ' + day(u[y] || 0) + '</small>').join('<br>');
}
/* send an email from info@ to chosen accounts, or to any address typed in */
function emailCard(rows, o) {
  const em = o.em || {}, pick = new Set(em.to || []);
  const list = rows.filter(r => r.email).map(r => '<label class="empick" data-year="' + esc(r.year || '') + '"><input type="checkbox" name="to" value="' + esc(r.email) + '"' + (pick.has(String(r.email).toLowerCase()) ? ' checked' : '') + '><span>' + esc(r.email) + '</span><small>' + esc([r.year, r.role].filter(Boolean).join(' · ')) + '</small></label>').join('');
  return '<section class="card nl em"><h2>' + (em.id ? 'Edit draft' : em.replyId ? 'Reply' : 'Write an email') + '</h2><p class="note">Sends one normal email from <b>info@mathsstudio.co.uk</b>, like Gmail: people in To and CC see each other, BCC stays hidden. Their replies come to info@, which forwards to your Gmail. For news to everyone, use the <a href="#email">Newsletter tab</a>.</p>' +
    '<form method="post" action="/admin/email#sendemail" enctype="multipart/form-data"><input type="hidden" name="draft_id" value="' + (em.id || '') + '"><input type="hidden" name="reply_id" value="' + (em.replyId || '') + '"><div class="emto"><b style="font-size:13px">To</b><div class="emchips" id="emChips"><span class="note">Nobody chosen yet</span></div>' +
    '<details class="emdd"><summary>Choose people ▾</summary><div class="emddin"><div class="admtools"><input class="emfind" type="search" placeholder="Search email" aria-label="Search email"><select class="emyear" aria-label="Year"><option value="">All years</option>' + YEARS.map(y => '<option>' + y + '</option>').join('') + '</select></div>' +
    '<div class="admtools"><button type="button" class="btn alt emall">Tick all shown</button><button type="button" class="btn alt emnone">Clear</button></div>' +
    '<div class="emlist">' + (list || '<p class="note">Nobody has signed up yet.</p>') + '</div></div></details></div>' +
    '<label>Or type email addresses (separate with commas)<input name="to_other" value="' + esc(em.other || '') + '" placeholder="name@example.com, another@example.com"></label>' +
    '<div class="emcc"><label>CC <small class="note">(seen by everyone)</small><input name="cc" value="' + esc(em.cc || '') + '" placeholder="name@example.com, another@example.com"></label>' +
    '<label>BCC <small class="note">(hidden from others)</small><input name="bcc" value="' + esc(em.bcc || '') + '" placeholder="name@example.com, another@example.com"></label></div>' +
    '<label>Subject<input name="subject" maxlength="150" required value="' + esc(em.subject || '') + '"></label>' +
    '<label>Message<textarea name="body" rows="8" required placeholder="Write in plain text. Leave a blank line between paragraphs.">' + esc(em.body || '') + '</textarea></label>' +
    '<label>Attach files <small class="note">(up to 5 files, 10 MB in total, no program files)</small><input type="file" name="files" id="emFiles" multiple></label><div class="emchips" id="emFileList"></div>' +
    '<div class="admtools"><button class="btn" type="submit" name="action" value="send">Send email</button><button class="btn alt" type="submit" name="action" value="draft" formnovalidate>Save as draft</button></div></form></section>';
}

/* the small menu at the top of the three email screens, plus the result message */
function mailHead(active, o) {
  const m = o.mails || { sent: [], drafts: [], inbox: [] }, un = (m.inbox || []).filter(x => x.unread).length;
  return '<div class="msub">' + [['inbox', 'Inbox' + (un ? ' (' + un + ' new)' : '')], ['sendemail', 'Write'], ['drafts', 'Drafts (' + m.drafts.length + ')'], ['sent', 'Sent (' + m.sent.length + ')']].map(t => '<a href="#' + t[0] + '" data-sub="' + t[0] + '"' + (t[0] === active ? ' class="on"' : '') + '>' + t[1] + '</a>').join('') + '</div>' +
    (o.emNote ? '<p class="nlnote" role="status">' + esc(o.emNote) + '</p>' : '');
}
const nice = s => { const d = new Date(s); return isNaN(d) ? '' : d.toISOString().slice(0, 10) + ' ' + d.toISOString().slice(11, 16) + ' UTC'; };
function inboxList(o) {
  const l = (o.mails || {}).inbox || [];
  const act = (id, what, label) => '<form method="post" action="/admin/inbox#inbox"><input type="hidden" name="id" value="' + id + '"><input type="hidden" name="what" value="' + what + '"><button class="btn alt" type="submit">' + label + '</button></form>';
  return '<section class="card nl em"><h2>Inbox</h2><p class="note">Emails people send to info@mathsstudio.co.uk. A copy also goes to your Gmail. Attached files stay in Gmail, only their names show here.</p>' + (l.length ? '<div class="mlist">' + l.map(x => '<details class="mrow' + (x.unread ? ' unread' : '') + '"><summary><b>' + esc(x.from_name || x.from_email) + '</b> <span>' + esc(x.subject || '(no subject)') + '</span><span class="note"> · ' + esc(nice(x.received_at)) + (x.files ? ' · ' + x.files.split('\n').length + ' file' + (x.files.split('\n').length === 1 ? '' : 's') : '') + '</span></summary><div class="mbody"><p class="note">From: ' + esc(x.from_name ? x.from_name + ' <' + x.from_email + '>' : x.from_email) + '<br>To: ' + esc(x.to_addr) + (x.files ? '<br>Files: ' + esc(x.files.split('\n').join(', ')) : '') + '</p><div class="mtext">' + esc(x.body || '(no text)') + '</div><div class="admtools"><a class="btn" href="/admin?reply=' + x.id + '#sendemail">Reply</a>' + act(x.id, x.unread ? 'read' : 'unread', x.unread ? 'Mark as read' : 'Mark as unread') + act(x.id, 'delete', 'Delete') + '</div></div></details>').join('') + '</div>' : '<p class="note">Nothing here yet. New emails to info@ appear here once the Cloudflare step in SETUP.md is done.</p>') + '</section>';
}
function sentList(o) {
  const l = (o.mails || {}).sent || [];
  return '<section class="card nl em"><h2>Sent</h2><p class="note">Everything sent from this page, newest first. Attached files are listed by name only.</p>' + (l.length ? '<div class="mlist">' + l.map(x => '<details class="mrow"><summary><b>' + esc(x.subject || '(no subject)') + '</b><span class="note"> To ' + esc(x.to_list) + (x.files ? ' · ' + x.files.split('\n').length + ' file' + (x.files.split('\n').length === 1 ? '' : 's') : '') + ' · ' + esc(nice(x.created_at)) + '</span></summary><div class="mbody"><p class="note">From info@mathsstudio.co.uk<br>To: ' + esc(x.to_list) + (x.cc_list ? '<br>CC: ' + esc(x.cc_list) : '') + (x.bcc_list ? '<br>BCC: ' + esc(x.bcc_list) : '') + (x.files ? '<br>Files: ' + esc(x.files.split('\n').join(', ')) : '') + '</p><div class="mtext">' + esc(x.body) + '</div></div></details>').join('') + '</div>' : '<p class="note">Nothing sent yet.</p>') + '</section>';
}
function draftList(o) {
  const l = (o.mails || {}).drafts || [];
  return '<section class="card nl em"><h2>Drafts</h2><p class="note">Emails you started and saved. Files are not kept in drafts.</p>' + (l.length ? '<div class="mlist">' + l.map(x => '<div class="mrow mdraft"><div><b>' + esc(x.subject || '(no subject)') + '</b><span class="note"> To ' + esc(x.to_list || 'nobody yet') + ' · saved ' + esc(nice(x.updated_at)) + '</span></div><div class="admtools"><a class="btn alt" href="/admin?draft=' + x.id + '#sendemail">Open</a><form method="post" action="/admin/email/delete#drafts"><input type="hidden" name="id" value="' + x.id + '"><button class="btn alt" type="submit">Delete</button></form></div></div>').join('') + '</div>' : '<p class="note">No drafts. Use "Save as draft" on the Write screen.</p>') + '</section>';
}

export function admin(rows, o) {
  o = o || {};
  const verified = rows.filter(r => r.verified_at).length, mk = rows.filter(r => r.verified_at && r.marketing).length;
  const mkBy = { P2: 0, P3: 0, P4: 0, P5: 0, P6: 0, P7: 0, S1: 0, S2: 0, S3: 0 }; rows.forEach(r => { if (r.verified_at && r.marketing && !r.unsub_at && mkBy[r.year] !== undefined) mkBy[r.year]++; });
  const by = {}; rows.forEach(r => { if (r.verified_at) by[r.year || '-'] = (by[r.year || '-'] || 0) + 1; });
  const hl = String(o.hl || '').toLowerCase(), tr = rows.map(r => '<tr data-year="' + esc(r.year || '') + '" data-paid="' + (r.owner || (r.access || []).length ? '1' : '0') + '"' + (hl && String(r.email).toLowerCase() === hl ? ' style="background:#fff6d6"' : '') + '><td>' + esc(r.email) + '</td><td>' + esc(r.role || '') + '</td><td>' + accessCell(r) + '</td><td>' + (r.verified_at ? 'Yes' : 'No') + '</td><td>' + ((r.verified_at && r.marketing) ? 'Yes' : 'No') + '</td><td>' + esc((r.created_at || '').slice(0, 10)) + '</td><td>' + esc((r.last_login || '').slice(0, 10)) + '</td></tr>').join('');
  return '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex"><title>Admin · MathsStudio</title><link rel="stylesheet" href="/site.css?v=4"></head><body class="plain"><main class="adm">' +
    '<header class="admbar"><h1>Admin</h1><span class="admact"><a class="btn alt" href="/admin/export.csv">Download CSV</a><a class="btn alt" href="/admin/logout">Log out</a></span></header><div class="stats"><div><b>' + rows.length + '</b><span>Sign-ups</span></div><div><b>' + verified + '</b><span>Verified</span></div><div><b>' + mk + '</b><span>OK to email with news</span></div>' +
    '</div>' +
    (o.note && !o.hl ? '<p class="nlnote" role="status">' + esc(o.note) + '</p>' : '') +
    '<nav class="atabs" role="tablist" aria-label="Admin sections">' + [['requests', 'Lesson requests' + ((o.reqs || []).filter(r => !r.replied_at).length ? ' (' + (o.reqs || []).filter(r => !r.replied_at).length + ' new)' : '')], ['sendemail', 'Email'], ['email', 'Newsletter'], ['access', 'Give or remove access'], ['people', 'Who signed up (' + rows.length + ')']].map(t => '<a href="#' + t[0] + '" data-tab="' + t[0] + '">' + esc(t[1]) + '</a>').join('') + '</nav>' +
    '<div class="atab" id="tab-requests">' + reqCard(o.reqs, o) + '</div>' +
    '<div class="atab" id="tab-email" style="display:grid;gap:16px"><section class="card nl"><h2>Send a newsletter</h2><p class="note">To write to chosen people, with CC, BCC or files, use the <a href="#sendemail">Email tab</a>. A newsletter goes only to people who verified their email, said yes to news and have not unsubscribed (<b>' + mk + '</b> now). Every email has its own unsubscribe link.</p>' +
    '<form method="post" action="/admin/newsletter"><label>Send to<select name="audience"><option value="">Everyone who opted in (' + mk + ')</option>' + YEARS.map(y => '<option value="' + y + '"' + (o.audience === y ? ' selected' : '') + '>' + y + ' only (' + mkBy[y] + ')</option>').join('') + '</select></label>' +
    '<label>Subject<input name="subject" maxlength="150" required value="' + esc(o.subject || '') + '"></label>' +
    '<label>Message<textarea name="body" rows="9" required placeholder="Write in plain text. Leave a blank line between paragraphs. Web links turn into clickable links.">' + esc(o.body || '') + '</textarea></label>' +
    '<div class="nltest"><input name="test_to" type="email" placeholder="your email, for a test"><button class="btn alt" type="submit" name="action" value="test">Send test to me</button></div>' +
    '<label class="chk"><input type="checkbox" name="confirm" value="1"> I have checked the test email and want to send this to the people above</label>' +
    '<button class="btn" type="submit" name="action" value="send">Send to subscribers</button></form>' +
    (o.log && o.log.length ? '<h3>Recently sent</h3><ul class="nllog">' + o.log.map(x => '<li><b>' + esc(x.subject) + '</b> · ' + esc(x.audience) + ' · ' + x.sent + ' sent' + (x.failed ? ', ' + x.failed + ' failed' : '') + ' · ' + esc((x.created_at || '').slice(0, 10)) + '</li>').join('') + '</ul>' : '') + '</section>' +
    '</div><div class="atab" id="tab-sendemail">' + mailHead('sendemail', o) + emailCard(rows, o) + '</div>' +
    '<div class="atab" id="tab-inbox">' + mailHead('inbox', o) + inboxList(o) + '</div><div class="atab" id="tab-drafts">' + mailHead('drafts', o) + draftList(o) + '</div><div class="atab" id="tab-sent">' + mailHead('sent', o) + sentList(o) + '</div>' +
    '<div class="atab" id="tab-access"><div class="admgrid"><section class="card nl"><h2>Give access</h2><p class="note">Gives an existing account access to one year group, or all of them, without payment. Extends access if they already have it.</p><form method="post" action="/admin/grant#people"><label>Account email<input name="email" type="email" list="admEmails" autocomplete="off" placeholder="Click or type to choose" required></label><label>Year<select name="year"><option value="ALL">All paid years (P4 to S3)</option>' + PAID.map(y => '<option>' + y + '</option>').join('') + '</select></label><label>For<select name="months"><option value="1">1 month</option><option value="3">3 months</option><option value="12" selected>12 months</option><option value="60">5 years</option></select></label><button class="btn" type="submit">Give access</button></form></section>' +
    '<section class="card nl"><h2>Remove a paid year</h2><p class="note">Takes away paid access for one year group. Refund the payment in Stripe first, and cancel a monthly plan there too.</p><form method="post" action="/admin/revoke#people"><label>Account email<input name="email" type="email" list="admEmails" autocomplete="off" placeholder="Click or type to choose" required></label><label>Year<select name="year">' + PAID.map(y => '<option>' + y + '</option>').join('') + '</select></label><button class="btn alt" type="submit">Remove access</button></form></section></div></div>' +
    '<datalist id="admEmails">' + rows.filter(r => r.email).map(r => '<option value="' + esc(r.email) + '">' + esc([r.year, r.role].filter(Boolean).join(' · ')) + '</option>').join('') + '</datalist>' +
    '<div class="atab" id="tab-people">' +
    '<h2 class="admh">Who signed up</h2>' + '<div class="admtools"><input type="search" id="pplFind" placeholder="Search email" aria-label="Search email"><select id="pplYear" aria-label="Year"><option value="">All years</option>' + YEARS.map(y => '<option>' + y + '</option>').join('') + '</select><select id="pplPaid" aria-label="Access"><option value="">Paid and free</option><option value="1">Paid only</option><option value="0">Free only</option></select><span class="note" id="pplCount"></span></div>' + (o.note && o.hl ? '<p class="nlnote" role="status">' + esc(o.note) + ' The changed account is highlighted below.</p>' : '') + '<p class="note">Only email people with "OK to email with news" = Yes. Every email you send must include an unsubscribe link.</p>' +
    '<div class="tablewrap"><table id="pplTable"><thead><tr><th>Email</th><th>Role</th><th>Access</th><th>Verified</th><th>OK to email</th><th>Signed up</th><th>Last sign-in</th></tr></thead><tbody>' + (tr || '<tr><td colspan="7">Nobody yet.</td></tr>') + '</tbody></table></div></div>' + ADM_TABS_JS + '</main></body></html>';
}

/* the Lesson requests list: most-asked topics, then each request as a card with a reply box (new ones first) */
function reqCard(reqs, o) {
  if (!reqs) return '';
  o = o || {};
  const n = {}; reqs.forEach(r => { const k = r.year + ' · ' + String(r.topic).toLowerCase(); n[k] = (n[k] || 0) + 1; });
  const top = Object.keys(n).sort((a, b) => n[b] - n[a]).slice(0, 10), waiting = reqs.filter(r => !r.replied_at).length;
  const card = r => {
    const done = !!r.replied_at, open = !done || o.reqOpen === r.id;
    return '<div class="card" style="padding:14px 16px;margin:10px 0;border-left:5px solid ' + (done ? '#17754c' : '#ffd166') + '">' +
      '<div style="display:flex;flex-wrap:wrap;gap:8px 14px;align-items:baseline;justify-content:space-between"><b style="font-size:17px">' + esc(r.year) + ' · ' + esc(r.topic) + '</b>' +
      '<span class="note" style="margin:0">' + esc(String(r.created_at || '').slice(0, 10)) + ' · ' + (done ? '<b style="color:#17754c">Replied ' + esc(String(r.replied_at).slice(0, 10)) + '</b>' : '<b style="color:#8a5a00">New</b>') + '</span></div>' +
      '<div style="margin:4px 0;color:#3b4a6b">From <b>' + esc(r.email) + '</b></div>' +
      (r.details ? '<p style="margin:6px 0;white-space:pre-wrap">' + esc(r.details) + '</p>' : '<p class="note" style="margin:6px 0">No details given.</p>') +
      (done ? '<details style="border:0;padding:4px 0"><summary style="font-size:15px">Your reply</summary><p style="white-space:pre-wrap">' + esc(r.reply || '') + '</p></details>' : '') +
      '<details' + (open && !done ? ' open' : '') + ' style="border:0;padding:4px 0"><summary style="font-size:15px">' + (done ? 'Send another reply' : 'Reply') + '</summary>' +
      '<form method="post" action="/admin/reply#req' + r.id + '" style="margin-top:8px"><input type="hidden" name="id" value="' + r.id + '">' +
      '<label style="display:grid;gap:6px;font-weight:800;margin-bottom:10px">Message to ' + esc(r.email) + '<textarea name="body" rows="7" required style="width:100%;box-sizing:border-box;border:2px solid #b8c4e6;border-radius:12px;padding:10px 12px;font:inherit;font-weight:600;line-height:1.45;resize:vertical">' + esc(o.reqOpen === r.id && o.reqBody ? o.reqBody : 'Hello,\n\nThank you for your request about ' + r.topic + ' (' + r.year + ').\n\n') + '</textarea></label>' +
      '<button class="btn" type="submit">Send reply</button></form></details></div>';
  };
  return '<h2 class="admh">Lesson requests' + (waiting ? ' <span style="background:#ffd166;border-radius:999px;padding:2px 10px;font-size:15px">' + waiting + ' new</span>' : '') + '</h2>' +
    '<p class="note">From subscribers on the Request a lesson page. Reply here: it is sent from info@mathsstudio.co.uk and the request is marked as replied.</p>' +
    (o.reqNote ? '<p class="nlnote" role="status">' + esc(o.reqNote) + '</p>' : '') +
    (top.length ? '<p class="note"><b>Most asked:</b> ' + top.map(k => esc(k) + ' (' + n[k] + ')').join(', ') + '</p>' : '') +
    (reqs.length ? '<div class="admtools"><input type="search" id="rqFind" placeholder="Search email or topic" aria-label="Search requests"><select id="rqShow" aria-label="Show"><option value="new">New only</option><option value="done">Replied only</option><option value="">All</option></select><select id="rqYear" aria-label="Year"><option value="">All years</option>' + YEARS.map(y => '<option>' + y + '</option>').join('') + '</select><span class="note" id="rqCount"></span></div>' : '') +
    (reqs.length ? reqs.map(r => '<div class="rqitem" id="req' + r.id + '" data-done="' + (r.replied_at ? '1' : '0') + '" data-year="' + esc(r.year) + '">' + card(r) + '</div>').join('') : '<p class="note">No requests yet.</p>');
}

/* admin tabs: one section at a time; the address #name keeps the chosen tab (and forms return to their own tab) */
const ADM_TABS_JS = '<style>.admtools{display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin:8px 0}.admtools input,.admtools select{min-height:42px;border:2px solid #b8c4e6;border-radius:10px;padding:0 10px;font:inherit;font-weight:600;background:#fff;color:#14213d;max-width:100%}.admtools input,.admtools select{width:auto!important;margin:0!important;display:inline-block}.admtools select{flex:0 0 auto}.admtools input[type=search]{flex:1 1 220px;min-width:0}.admtools .note{margin:0}.admtools .btn{min-height:38px;padding:0 12px;font-size:14px}.emdd{border:2px solid #b8c4e6;border-radius:12px;padding:0;margin-top:8px}.emdd summary{padding:10px 12px;font-weight:800;cursor:pointer;font-size:15px}.emddin{padding:0 12px 12px}.emchips{display:flex;flex-wrap:wrap;gap:6px;margin:6px 0}.emchip{background:#eaf0ff;border-radius:999px;padding:3px 10px;font-weight:700;font-size:14px}[hidden]{display:none!important}.atabs{display:flex;flex-wrap:wrap;gap:8px;margin:18px 0 6px;border-bottom:2px solid #dbe3f7;padding-bottom:10px}.atabs a{padding:10px 16px;border-radius:12px;background:#fff;border:2px solid #dbe3f7;color:#14213d;font-weight:800;text-decoration:none}.atabs a.on{background:#2b5fd9;border-color:#2b5fd9;color:#fff}.js-tabs .atab{display:none!important}.js-tabs .atab.on{display:block!important}.js-tabs #tab-email.on{display:grid!important}.msub{display:flex;gap:8px;margin:0 0 12px}.msub a{padding:6px 14px;border-radius:999px;background:#eaf0ff;color:#14213d;font-weight:800;font-size:15px;text-decoration:none}.msub a.on{background:#14213d;color:#fff}.mlist{display:grid;gap:8px;margin-top:10px}.mrow{border:2px solid #dbe3f7;border-radius:12px;padding:10px 12px}.mrow summary{cursor:pointer}.mrow summary>span:not(.note){margin-left:10px}.mrow.unread{border-color:#2b5fd9;background:#f3f7ff}.mrow:not(.unread) summary b{font-weight:600}.mdraft{display:flex;flex-wrap:wrap;justify-content:space-between;gap:8px;align-items:center}.mbody{margin-top:8px}.mtext{white-space:pre-wrap;line-height:1.5;border-top:1px solid #e3e8f4;padding-top:8px}.emcc{display:grid;grid-template-columns:1fr 1fr;gap:12px}@media(max-width:640px){.emcc{grid-template-columns:1fr}}</style>' +
  '<script>(function(){var map={requests:"requests",sendemail:"sendemail",drafts:"drafts",sent:"sent",inbox:"inbox",email:"email",access:"access",people:"people"};document.querySelector("main.adm").classList.add("js-tabs");' +
  'function pick(){var h=(location.hash||"").slice(1),t=map[h]||(/^req/.test(h)?"requests":"requests");document.querySelectorAll(".atab").forEach(function(d){d.classList.toggle("on",d.id==="tab-"+t)});var top=(t==="drafts"||t==="sent"||t==="inbox")?"sendemail":t;document.querySelectorAll(".atabs a").forEach(function(a){a.classList.toggle("on",a.getAttribute("data-tab")===top)});' +
  'var el=h&&document.getElementById(h);if(el&&!map[h])el.scrollIntoView();else window.scrollTo(0,0)}window.addEventListener("hashchange",pick);pick();' +
  'function $(i){return document.getElementById(i)}function val(i){var e=$(i);return e?e.value:""}' +
  'function ppl(){var q=val("pplFind").toLowerCase(),y=val("pplYear"),pd=val("pplPaid"),n=0,t=$("pplTable");if(!t)return;t.querySelectorAll("tbody tr[data-year]").forEach(function(r){var ok=(!q||r.cells[0].textContent.toLowerCase().indexOf(q)>-1)&&(!y||r.getAttribute("data-year")===y)&&(!pd||r.getAttribute("data-paid")===pd);r.hidden=!ok;if(ok)n++});$("pplCount").textContent=n+" shown"}' +
  '["pplFind","pplYear","pplPaid"].forEach(function(i){var e=$(i);if(e)e.addEventListener("input",ppl)});ppl();' +
  'function rq(){var q=val("rqFind").toLowerCase(),s=val("rqShow"),y=val("rqYear"),n=0;document.querySelectorAll(".rqitem").forEach(function(d){var ok=(!q||d.textContent.toLowerCase().indexOf(q)>-1)&&(!s||(s==="done")===(d.getAttribute("data-done")==="1"))&&(!y||d.getAttribute("data-year")===y);if(d.id==="req"+(location.hash||"").slice(4)&&location.hash.indexOf("#req")===0)ok=true;d.hidden=!ok;if(ok)n++});var c=$("rqCount");if(c)c.textContent=n+" shown"}' +
  'if($("rqShow")&&!document.querySelector(".rqitem[data-done=\'0\']"))$("rqShow").value="";["rqFind","rqShow","rqYear"].forEach(function(i){var e=$(i);if(e)e.addEventListener("input",rq)});rq();' +
  'var dd=document.querySelector(".emdd");if(dd){var boxes=dd.querySelectorAll(".empick");function emf(){var q=dd.querySelector(".emfind").value.toLowerCase(),y=dd.querySelector(".emyear").value;boxes.forEach(function(l){l.hidden=!((!q||l.textContent.toLowerCase().indexOf(q)>-1)&&(!y||l.getAttribute("data-year")===y))})}' +
  'function chips(){var c=$("emChips"),on=[].filter.call(dd.querySelectorAll(".empick input"),function(b){return b.checked}).map(function(b){return b.value});c.innerHTML=on.length?on.map(function(v){return "<span class=\\"emchip\\">"+v.replace(/</g,"&lt;")+"</span>"}).join(""):"<span class=\\"note\\">Nobody chosen yet</span>";dd.querySelector("summary").textContent="Choose people ("+on.length+" chosen) \u25be"}' +
  'dd.querySelector(".emfind").addEventListener("input",emf);dd.querySelector(".emyear").addEventListener("input",emf);dd.addEventListener("change",chips);dd.querySelector(".emall").addEventListener("click",function(){boxes.forEach(function(l){if(!l.hidden)l.querySelector("input").checked=true});chips()});dd.querySelector(".emnone").addEventListener("click",function(){boxes.forEach(function(l){l.querySelector("input").checked=false});chips()});chips()}' +
  'var fi=$("emFiles");if(fi)fi.addEventListener("change",function(){var l=$("emFileList"),n=0;l.innerHTML=[].map.call(fi.files,function(f){n+=f.size;return "<span class=\\"emchip\\">"+f.name.replace(/</g,"&lt;")+" ("+(f.size/1048576).toFixed(1)+" MB)</span>"}).join("");if(fi.files.length>5||n>10485760)l.innerHTML+="<span class=\\"note\\">Too many or too big. Please choose 5 files or fewer, 10 MB in total.</span>"});' +
  '})();</script>';
