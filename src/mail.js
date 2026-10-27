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
    text: 'Welcome to MathsStudio.\n\nOpen this link to confirm your email and sign in (it works once and lasts 24 hours):\n' + link + '\n\nIf this was not you, ignore this email and nothing will happen.\n\nMathsStudio',
    html: wrap('<p>Welcome to MathsStudio.</p><p>Press the button to confirm your email and sign in. The link works once and lasts 24 hours.</p><p><a href="' + esc(link) + '" style="display:inline-block;background:#2b5fd9;color:#ffffff;padding:12px 22px;border-radius:10px;text-decoration:none;font-weight:700">Confirm and sign in</a></p><p style="font-size:13px;color:#5b6788">Or copy this address into your browser:<br>' + esc(link) + '</p>')
  };
}
export function loginMail(link) {
  return {
    subject: 'Your MathsStudio sign-in link',
    text: 'Open this link to sign in to MathsStudio (it works once and lasts 30 minutes):\n' + link + '\n\nIf this was not you, ignore this email.\n\nMathsStudio',
    html: wrap('<p>Press the button to sign in. The link works once and lasts 30 minutes.</p><p><a href="' + esc(link) + '" style="display:inline-block;background:#2b5fd9;color:#ffffff;padding:12px 22px;border-radius:10px;text-decoration:none;font-weight:700">Sign in</a></p><p style="font-size:13px;color:#5b6788">Or copy this address into your browser:<br>' + esc(link) + '</p>')
  };
}
