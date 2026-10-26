// Temporary password gate for the MathsStudio preview.
// The password is NOT stored in this repo. Set it in Cloudflare:
// Workers & Pages > maths-platform > Settings > Variables and Secrets > add a Secret named SITE_PASSWORD.
// Sign in with any user name and the password. Remove this file when real accounts are built.

function safeEqual(a, b) {
  const enc = new TextEncoder();
  const x = enc.encode(a);
  const y = enc.encode(b);
  let diff = x.length ^ y.length;
  const n = Math.max(x.length, y.length);
  for (let i = 0; i < n; i++) diff |= (x[i] || 0) ^ (y[i] || 0);
  return diff === 0;
}

function challenge(status, text) {
  return new Response(text, {
    status,
    headers: {
      'WWW-Authenticate': 'Basic realm="MathsStudio preview", charset="UTF-8"',
      'Cache-Control': 'no-store',
      'X-Robots-Tag': 'noindex, nofollow',
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}

export default {
  async fetch(request, env) {
    const secret = env.SITE_PASSWORD;
    if (!secret) {
      // Fail closed: if the password has not been set, nobody gets in.
      return challenge(503, 'This preview is locked. The password has not been set yet.');
    }
    const header = request.headers.get('Authorization') || '';
    if (header.startsWith('Basic ')) {
      let decoded = '';
      try { decoded = atob(header.slice(6)); } catch (e) { decoded = ''; }
      const i = decoded.indexOf(':');
      const pass = i >= 0 ? decoded.slice(i + 1) : '';
      if (safeEqual(pass, secret)) {
        const res = await env.ASSETS.fetch(request);
        const out = new Response(res.body, res);
        out.headers.set('Cache-Control', 'private, no-store');
        out.headers.set('X-Robots-Tag', 'noindex, nofollow');
        return out;
      }
    }
    return challenge(401, 'Password required.');
  },
};
