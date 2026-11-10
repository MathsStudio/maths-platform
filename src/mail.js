/* Sends email through Resend (https://resend.com). Needs RESEND_API_KEY and FROM_EMAIL. */
import { esc } from './util.js';
export async function sendMail(env, to, subject, text, html) {
  if (!env.RESEND_API_KEY || !env.FROM_EMAIL) throw new Error('mail-not-configured');
  const r = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: 'Bearer ' + env.RESEND_API_KEY, 'Content-Type': 'application/json' },
    body: JSON.stringify({ from: env.FROM_EMAIL, to: [to], subject, text, html })
  });
  if (!r.ok) throw new Error('mail-failed-' + r.status);
}
function wrap(inner) {
  return '<div style="font-family:Arial,Helvetica,sans-serif;font-size:16px;color:#14213d;line-height:1.5;max-width:520px">' +
    '<div style="font-weight:700;font-size:20px;margin-bottom:12px">MathsStudio</div>' + inner +
    '<p style="color:#5b6788;font-size:13px;margin-top:28px">You received this because someone used this email address on MathsStudio. If that was not you, ignore this email and nothing will happen.</p></div>';
}
export function verifyMail(link) {
  return {
    subject: 'Confirm your email for MathsStudio',
    text: 'Welcome to MathsStudio.\n\nOpen this link to confirm your email and choose your password (it works once and lasts 24 hours). You only need to do this once. Next time, sign in with your email and password:\n' + link + '\n\nIf this was not you, ignore this email and nothing will happen.\n\nMathsStudio',
    html: wrap('<p>Welcome to MathsStudio.</p><p>Press the button to confirm your email and choose your password. The link works once and lasts 24 hours. After that you sign in with your email and password.</p><p><a href="' + esc(link) + '" style="display:inline-block;background:#2b5fd9;color:#ffffff;padding:12px 22px;border-radius:10px;text-decoration:none;font-weight:700">Confirm and choose my password</a></p><p style="font-size:13px;color:#5b6788">Or copy this address into your browser:<br>' + esc(link) + '</p>')
  };
}
export function loginMail(link) {
  return {
    subject: 'Your MathsStudio sign-in link',
    text: 'Open this link to sign in to MathsStudio (it works once and lasts 30 minutes):\n' + link + '\n\nIf this was not you, ignore this email.\n\nMathsStudio',
    html: wrap('<p>Press the button to sign in. The link works once and lasts 30 minutes.</p><p><a href="' + esc(link) + '" style="display:inline-block;background:#2b5fd9;color:#ffffff;padding:12px 22px;border-radius:10px;text-decoration:none;font-weight:700">Sign in</a></p><p style="font-size:13px;color:#5b6788">Or copy this address into your browser:<br>' + esc(link) + '</p>')
  };
}
export function resetMail(link) {
  return {
    subject: 'Reset your MathsStudio password',
    text: 'Open this link to choose a new password for MathsStudio (it works once and lasts 30 minutes):\n' + link + '\n\nIf this was not you, ignore this email and your password stays the same.\n\nMathsStudio',
    html: wrap('<p>Press the button to choose a new password. The link works once and lasts 30 minutes.</p><p><a href="' + esc(link) + '" style="display:inline-block;background:#2b5fd9;color:#ffffff;padding:12px 22px;border-radius:10px;text-decoration:none;font-weight:700">Choose a new password</a></p><p style="color:#5b6788;font-size:14px">If the button does not work, copy this link into your browser:<br>' + esc(link) + '</p>')
  };
}

/* newsletter: plain text in, paragraphs and links out; every copy carries its own unsubscribe link */
function paras(body) { return String(body || '').replace(/\r\n/g, '\n').split(/\n{2,}/).map(x => x.trim()).filter(Boolean); }
function linkify(t) { return esc(t).replace(/(https?:\/\/[^\s<]+)/g, '<a href="$1" style="color:#2b5fd9">$1</a>').replace(/\n/g, '<br>'); }
export function newsletterMail(subject, body, unsubUrl) {
  const ps = paras(body);
  return {
    subject,
    text: ps.join('\n\n') + '\n\n--\nMathsStudio\nYou get this because you chose to receive news from MathsStudio. Unsubscribe: ' + unsubUrl,
    html: '<div style="font-family:Arial,Helvetica,sans-serif;font-size:16px;color:#14213d;line-height:1.55;max-width:560px"><div style="font-weight:700;font-size:20px;margin-bottom:14px">MathsStudio</div>' +
      ps.map(x => '<p style="margin:0 0 14px">' + linkify(x) + '</p>').join('') +
      '<p style="color:#5b6788;font-size:13px;margin-top:28px;border-top:1px solid #e3e8f4;padding-top:14px">You get this because you chose to receive news from MathsStudio. <a href="' + esc(unsubUrl) + '" style="color:#5b6788">Unsubscribe</a></p></div>'
  };
}
/* up to 100 emails per call */
export async function sendBatch(env, items) {
  if (!env.RESEND_API_KEY || !env.FROM_EMAIL) throw new Error('mail-not-configured');
  const r = await fetch('https://api.resend.com/emails/batch', {
    method: 'POST', headers: { Authorization: 'Bearer ' + env.RESEND_API_KEY, 'Content-Type': 'application/json' },
    body: JSON.stringify(items.map(i => ({ from: env.FROM_EMAIL, to: [i.to], subject: i.subject, text: i.text, html: i.html, headers: i.headers })))
  });
  return r.ok;
}
