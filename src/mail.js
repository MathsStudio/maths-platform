/* Sends email through Resend (https://resend.com). Needs RESEND_API_KEY and FROM_EMAIL. */
import { esc } from './util.js';
export async function sendMail(env, to, subject, text, html, replyTo) {
  if (!env.RESEND_API_KEY || !env.FROM_EMAIL) throw new Error('mail-not-configured');
  const r = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: 'Bearer ' + env.RESEND_API_KEY, 'Content-Type': 'application/json' },
    body: JSON.stringify({ from: env.FROM_EMAIL, to: [to], subject, text, html, reply_to: replyTo || undefined })
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

/* sent once after a successful payment: confirms the plan and links straight to the year group */
export function purchaseMail(o) {
  const site = o.site, learn = site + '/learn/?year=' + o.year, acct = site + '/account/';
  const when = d => new Date(d * 1000).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
  const plan = o.monthly ? '£2.99 a month (renews monthly until you cancel)' : '£15 for 12 months (does not renew by itself)';
  const access = o.monthly ? 'Your plan renews each month. Cancel any time from your account.' : 'Your access lasts until ' + when(o.until) + '.';
  return {
    subject: 'Payment received: you now have full access to MathsStudio ' + o.year,
    text: 'Thank you! Your payment has been received.\n\nYou now have full access to every topic in ' + o.year + ' on MathsStudio.\n\nStart learning: ' + learn + '\n\nYear group: ' + o.year + '\nPlan: ' + plan + '\n' + access + '\n\nYour account' + (o.monthly ? ' (press Manage subscription to see or cancel your plan)' : '') + ': ' + acct +
      '\n\nNot happy? Our 14-day money-back promise is explained here: ' + site + '/refunds/\nTerms: ' + site + '/terms/\n\nQuestions? Just reply to this email or write to info@mathsstudio.co.uk.\n\nMathsStudio',
    html: '<div style="font-family:Arial,Helvetica,sans-serif;font-size:16px;color:#14213d;line-height:1.55;max-width:540px"><div style="font-weight:700;font-size:20px;margin-bottom:14px">MathsStudio</div>' +
      '<p style="margin:0 0 12px;font-size:20px;font-weight:700">Thank you! Payment received.</p>' +
      '<p style="margin:0 0 16px">You now have <b>full access to every topic in ' + esc(o.year) + '</b> on MathsStudio.</p>' +
      '<p style="margin:0 0 20px"><a href="' + esc(learn) + '" style="display:inline-block;background:#2b5fd9;color:#ffffff;padding:13px 24px;border-radius:10px;text-decoration:none;font-weight:700">Start learning ' + esc(o.year) + '</a></p>' +
      '<table style="border-collapse:collapse;font-size:15px;margin:0 0 18px"><tr><td style="padding:4px 18px 4px 0;color:#5b6788">Year group</td><td style="padding:4px 0"><b>' + esc(o.year) + '</b></td></tr><tr><td style="padding:4px 18px 4px 0;color:#5b6788;vertical-align:top">Plan</td><td style="padding:4px 0">' + esc(plan) + '</td></tr><tr><td style="padding:4px 18px 4px 0;color:#5b6788;vertical-align:top">Access</td><td style="padding:4px 0">' + esc(access) + '</td></tr></table>' +
      '<p style="margin:0 0 10px;font-size:15px">' + (o.monthly ? 'Manage or cancel your plan: sign in, open <a href="' + esc(acct) + '" style="color:#2b5fd9">your account</a> and press <b>Manage subscription</b>.' : 'You can see your access any time in <a href="' + esc(acct) + '" style="color:#2b5fd9">your account</a>.') + '</p>' +
      '<p style="margin:0 0 10px;font-size:15px">Not happy? Our <a href="' + esc(site + '/refunds/') + '" style="color:#2b5fd9">14-day money-back promise</a> has you covered. <a href="' + esc(site + '/terms/') + '" style="color:#2b5fd9">Terms</a>.</p>' +
      '<p style="color:#5b6788;font-size:13px;margin-top:26px;border-top:1px solid #e3e8f4;padding-top:14px">Questions? Reply to this email or write to info@mathsstudio.co.uk. You are getting this email because of a purchase on mathsstudio.co.uk.</p></div>'
  };
}
