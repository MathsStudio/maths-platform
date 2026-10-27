/* Small helpers: tokens, hashing, cookies, responses */
export const enc = new TextEncoder();

export function randomToken(bytes = 32) {
  const a = new Uint8Array(bytes); crypto.getRandomValues(a);
  let s = ''; for (const b of a) s += String.fromCharCode(b);
  return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}
export async function sha256(text) {
  const d = await crypto.subtle.digest('SHA-256', enc.encode(text));
  return [...new Uint8Array(d)].map(b => b.toString(16).padStart(2, '0')).join('');
}
export function safeEqual(a, b) {
  const x = enc.encode(String(a)), y = enc.encode(String(b));
  let r = x.length ^ y.length;
  for (let i = 0; i < Math.max(x.length, y.length); i++) r |= (x[i] || 0) ^ (y[i] || 0);
  return r === 0;
}
export function esc(s) {
  return String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}
export function parseCookies(request) {
  const out = {}; (request.headers.get('Cookie') || '').split(';').forEach(p => {
    const i = p.indexOf('='); if (i > 0) out[p.slice(0, i).trim()] = p.slice(i + 1).trim();
  }); return out;
}
export function cookie(name, value, request, maxAge) {
  const secure = new URL(request.url).protocol === 'https:' ? '; Secure' : '';
  return name + '=' + value + '; Path=/; HttpOnly; SameSite=Lax; Max-Age=' + maxAge + secure;
}
export const SECURITY = {
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'X-Frame-Options': 'DENY',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()'
};
export function withHeaders(res, extra) {
  const r = new Response(res.body, res);
  Object.entries(Object.assign({}, SECURITY, extra || {})).forEach(([k, v]) => r.headers.set(k, v));
  return r;
}
export function json(obj, status = 200, extra) {
  return withHeaders(new Response(JSON.stringify(obj), { status, headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' } }), extra);
}
export function page(html, status = 200, extra) {
  return withHeaders(new Response(html, { status, headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'private, no-store', 'X-Robots-Tag': 'noindex' } }), extra);
}
export function redirect(url, extra) {
  const h = new Headers({ Location: url, 'Cache-Control': 'no-store' });
  const r = new Response(null, { status: 303, headers: h });
  if (extra && extra['Set-Cookie']) r.headers.append('Set-Cookie', extra['Set-Cookie']);
  return withHeaders(r);
}
export function sameOrigin(request) {
  const o = request.headers.get('Origin'); if (!o) return true;
  try { return new URL(o).host === new URL(request.url).host; } catch (e) { return false; }
}
export function validEmail(e) {
  return typeof e === 'string' && e.length <= 254 && /^[^\s@<>"',;()]+@[^\s@<>"',;()]+\.[^\s@<>"',;()]{2,}$/.test(e);
}
