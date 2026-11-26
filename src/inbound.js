/* Reads an incoming email (raw text of the message) into the few parts the Inbox shows.
   No outside libraries: handles folded headers, encoded words, multipart, base64 and quoted-printable. */

const dec = (bytes, charset) => { try { return new TextDecoder((charset || 'utf-8').toLowerCase()).decode(bytes); } catch (e) { return new TextDecoder('utf-8').decode(bytes); } };
const toBytes = s => { const a = new Uint8Array(s.length); for (let i = 0; i < s.length; i++) a[i] = s.charCodeAt(i) & 255; return a; };

function splitHead(raw) {
  const m = raw.match(/\r?\n\r?\n/), i = m ? m.index : raw.length;
  const head = raw.slice(0, i), body = m ? raw.slice(i + m[0].length) : '', h = {};
  head.replace(/\r?\n[ \t]+/g, ' ').split(/\r?\n/).forEach(l => { const k = l.indexOf(':'); if (k > 0) { const n = l.slice(0, k).trim().toLowerCase(); if (!(n in h)) h[n] = l.slice(k + 1).trim(); } });
  return { h, body };
}
function param(v, name) {
  const m = String(v || '').match(new RegExp(name + '\\*?=\\s*(?:"([^"]*)"|([^;\\s]+))', 'i'));
  return m ? (m[1] !== undefined ? m[1] : m[2]) : '';
}
/* =?UTF-8?B?...?= and =?UTF-8?Q?...?= in subjects and names */
export function words(s) {
  return String(s || '').replace(/=\?([^?]+)\?([bqBQ])\?([^?]*)\?=/g, (all, cs, enc, txt) => {
    try {
      if (enc.toLowerCase() === 'b') return dec(Uint8Array.from(atob(txt), c => c.charCodeAt(0)), cs);
      const q = txt.replace(/_/g, ' ').replace(/=([0-9A-Fa-f]{2})/g, (x, h) => String.fromCharCode(parseInt(h, 16)));
      return dec(toBytes(q), cs);
    } catch (e) { return txt; }
  }).replace(/\?=\s+=\?/g, '');
}
function body(bodyStr, enc, charset) {
  enc = String(enc || '').toLowerCase();
  let bytes;
  if (enc === 'base64') { try { bytes = Uint8Array.from(atob(bodyStr.replace(/[^A-Za-z0-9+/=]/g, '')), c => c.charCodeAt(0)); } catch (e) { bytes = toBytes(bodyStr); } }
  else if (enc === 'quoted-printable') {
    const s = bodyStr.replace(/=\r?\n/g, '').replace(/=([0-9A-Fa-f]{2})/g, (x, h) => String.fromCharCode(parseInt(h, 16)));
    bytes = toBytes(s);
  } else bytes = toBytes(bodyStr);
  return dec(bytes, charset);
}
function htmlToText(h) {
  return h.replace(/<style[\s\S]*?<\/style>|<script[\s\S]*?<\/script>/gi, '').replace(/<br\s*\/?>|<\/p>|<\/div>|<\/tr>|<\/li>/gi, '\n').replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\n{3,}/g, '\n\n').trim();
}
/* walk the parts: remember the plain text (or html as a fallback) and the names of attached files */
function walk(raw, out, depth) {
  const { h, body: b } = splitHead(raw), ct = String(h['content-type'] || 'text/plain'), type = ct.split(';')[0].trim().toLowerCase();
  const name = param(h['content-disposition'], 'filename') || param(ct, 'name');
  if (type.startsWith('multipart/') && depth < 6) {
    const bd = param(ct, 'boundary'); if (!bd) return;
    b.split('--' + bd).slice(1).forEach(p => { if (/^--/.test(p)) return; walk(p.replace(/^\r?\n/, ''), out, depth + 1); });
    return;
  }
  if (name || /attachment/i.test(h['content-disposition'] || '')) { out.files.push(words(name) || 'file'); return; }
  const txt = () => body(b, h['content-transfer-encoding'], param(ct, 'charset'));
  if (type === 'text/plain' && !out.text) out.text = txt();
  else if (type === 'text/html' && !out.html) out.html = txt();
}
function addr(s) {
  s = words(s); const m = s.match(/<([^>]+)>/), a = (m ? m[1] : s).trim().replace(/^"|"$/g, '');
  const n = m ? s.slice(0, m.index).trim().replace(/^"|"$/g, '') : '';
  return { email: a.toLowerCase(), name: n };
}
export function parseMail(raw) {
  const { h } = splitHead(raw), out = { files: [] }; walk(raw, out, 0);
  const from = addr(h.from || ''), to = addr((h.to || '').split(',')[0]);
  return {
    fromEmail: from.email, fromName: from.name, to: to.email, subject: words(h.subject || '').slice(0, 300),
    messageId: String(h['message-id'] || '').slice(0, 300), date: h.date || '',
    body: (out.text || (out.html ? htmlToText(out.html) : '')).replace(/\r\n/g, '\n').trim().slice(0, 60000), files: out.files.slice(0, 20)
  };
}

/* the Cloudflare Email Routing hook: keep a copy in the Inbox, then pass the message on to the Gmail inbox as before */
export async function readRaw(stream, limit) {
  const reader = stream.getReader(), parts = []; let n = 0;
  for (;;) { const { done, value } = await reader.read(); if (done) break; n += value.length; if (n > limit) break; parts.push(value); }
  let s = ''; for (const p of parts) for (let i = 0; i < p.length; i += 0x8000) s += String.fromCharCode.apply(null, p.subarray(i, i + 0x8000));
  return s;
}
