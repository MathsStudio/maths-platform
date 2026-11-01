/* story_h.js: extra picture helpers for the story lessons (P6 and P7). */
(function () {
  'use strict';
  var BT = window.BT; if (!BT || !BT.sv) return;
  var V = BT.sv, S = 'stroke:var(--fg);stroke-width:3.5;stroke-linejoin:round;';
  V.svg = function (w, h, inner, alt, max) { return '<svg viewBox="0 0 ' + w + ' ' + h + '" width="' + Math.min(w, max || 320) + '" role="img" aria-label="' + alt + '" style="max-width:100%;height:auto;display:block;margin:6px auto;font:700 14px var(--font-display,sans-serif)">' + inner + '</svg>'; };
  V.t = function (x, y, s, a, c) { return '<text x="' + x + '" y="' + y + '" text-anchor="' + (a || 'middle') + '" style="fill:' + (c || 'var(--fg)') + '">' + s + '</text>'; };
  /* bar model rows: [label, [[width,text,fill],...]] */
  V.bm = function (rows) {
    var s = '', y = 10;
    rows.forEach(function (r) { s += V.t(34, y + 24, r[0]); var x = 70; r[1].forEach(function (b) { s += '<rect x="' + x + '" y="' + y + '" width="' + b[0] + '" height="36" rx="4" style="fill:' + (b[2] || 'var(--surface-2)') + ';' + S + '"/>' + V.t(x + b[0] / 2, y + 24, b[1]); x += b[0]; }); y += 50; });
    return V.svg(340, y, s, 'A bar model');
  };
  /* pie chart: parts [[degrees, fill, label]] */
  V.pie = function (parts) {
    var cx = 110, cy = 100, r = 80, a0 = -Math.PI / 2, s = '';
    parts.forEach(function (p) {
      var a1 = a0 + p[0] * Math.PI / 180, big = p[0] > 180 ? 1 : 0;
      s += '<path d="M' + cx + ' ' + cy + ' L' + (cx + r * Math.cos(a0)).toFixed(1) + ' ' + (cy + r * Math.sin(a0)).toFixed(1) + ' A' + r + ' ' + r + ' 0 ' + big + ' 1 ' + (cx + r * Math.cos(a1)).toFixed(1) + ' ' + (cy + r * Math.sin(a1)).toFixed(1) + ' Z" style="fill:' + p[1] + ';' + S + 'stroke-width:2.5"/>';
      var m = (a0 + a1) / 2; s += V.t((cx + r * 0.58 * Math.cos(m)).toFixed(1), (cy + r * 0.58 * Math.sin(m) + 5).toFixed(1), p[2], 'middle', '#fff');
      a0 = a1;
    });
    return V.svg(220, 200, s, 'A pie chart', 240);
  };
  /* grid 0..n with polygons: polys [[pts, fill]], mirror x = m (dashed), n */
  V.grid = function (n, polys, mirrorX) {
    var u = 30, o = 28, w = o * 2 + n * u, s = '';
    for (var i = 0; i <= n; i++) { s += '<line x1="' + (o + i * u) + '" y1="' + o + '" x2="' + (o + i * u) + '" y2="' + (o + n * u) + '" style="stroke:var(--line);stroke-width:1.5"/><line x1="' + o + '" y1="' + (o + i * u) + '" x2="' + (o + n * u) + '" y2="' + (o + i * u) + '" style="stroke:var(--line);stroke-width:1.5"/>'; s += V.t(o + i * u, o + n * u + 18, i, 'middle', 'var(--muted)') + V.t(o - 10, o + (n - i) * u + 5, i, 'end', 'var(--muted)'); }
    polys.forEach(function (p) { s += '<polygon points="' + p[0].map(function (q) { return (o + q[0] * u) + ',' + (o + (n - q[1]) * u); }).join(' ') + '" style="fill:' + p[1] + ';fill-opacity:.45;' + S + 'stroke-width:3"/>'; });
    if (mirrorX !== undefined) s += '<line x1="' + (o + mirrorX * u) + '" y1="' + (o - 8) + '" x2="' + (o + mirrorX * u) + '" y2="' + (o + n * u + 4) + '" style="stroke:var(--bad);stroke-width:3.5;stroke-dasharray:8 6"/>';
    return V.svg(w, w, s, 'A coordinate grid', 340);
  };
  /* factor tree: root, [[a,b],[c,d]] simple two-level */
  V.circle = function (label) {
    var s = '<circle cx="110" cy="100" r="80" style="fill:var(--surface-2);' + S + '"/><line x1="110" y1="100" x2="190" y2="100" style="stroke:var(--accent);stroke-width:4"/><line x1="30" y1="100" x2="190" y2="100" style="stroke:var(--bad);stroke-width:2.5;stroke-dasharray:6 5"/><circle cx="110" cy="100" r="4" style="fill:var(--fg)"/>' + V.t(150, 90, 'radius', 'middle', 'var(--accent)') + V.t(110, 128, 'diameter', 'middle', 'var(--bad)');
    return V.svg(220, 200, s, 'A circle with its radius and diameter', 240);
  };
})();
