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
  /* parallel lines cut by a transversal, with labels [[x,y,text]] */
  V.par = function (labels) {
    var L = 'stroke:var(--fg);stroke-width:3.5;stroke-linecap:round;';
    var s = '<line x1="20" y1="60" x2="280" y2="60" style="' + L + '"/><line x1="20" y1="140" x2="280" y2="140" style="' + L + '"/><line x1="90" y1="20" x2="210" y2="180" style="stroke:var(--accent);stroke-width:3.5"/>';
    s += '<path d="M60 52 l12 8 l-12 8" style="fill:none;stroke:var(--fg);stroke-width:2"/><path d="M60 132 l12 8 l-12 8" style="fill:none;stroke:var(--fg);stroke-width:2"/>';
    labels.forEach(function (l) { s += V.t(l[0], l[1], l[2], 'middle', 'var(--bad)'); });
    return V.svg(300, 200, s, 'Two parallel lines cut by a transversal') + V.note('Not drawn to scale');
  };
  /* general graph: axes from x0..x1, y0..y1; items: {l:[[x,y],...],c,d}, {p:[x,y,label,c]}, {poly:[[x,y],...],c}; o: {tx,ty,xl,yl} */
  V.plot = function (x0, x1, y0, y1, items, o) {
    o = o || {}; var W = 320, H = 260, L = 36, B = 28, T = 10, R = 12, ux = (W - L - R) / (x1 - x0), uy = (H - B - T) / (y1 - y0), tx = o.tx || 1, ty = o.ty || 1, s = '';
    var X = function (x) { return L + (x - x0) * ux; }, Y = function (y) { return H - B - (y - y0) * uy; };
    for (var x = Math.ceil(x0 / tx) * tx; x <= x1 + 1e-9; x += tx) { s += '<line x1="' + X(x) + '" y1="' + T + '" x2="' + X(x) + '" y2="' + (H - B) + '" style="stroke:var(--line);stroke-width:1.2"/>' + V.t(X(x), H - B + 16, +x.toFixed(2), 'middle', 'var(--muted)'); }
    for (var y = Math.ceil(y0 / ty) * ty; y <= y1 + 1e-9; y += ty) { s += '<line x1="' + L + '" y1="' + Y(y) + '" x2="' + (W - R) + '" y2="' + Y(y) + '" style="stroke:var(--line);stroke-width:1.2"/>' + V.t(L - 5, Y(y) + 5, +y.toFixed(2), 'end', 'var(--muted)'); }
    if (y0 <= 0 && y1 >= 0) s += '<line x1="' + L + '" y1="' + Y(0) + '" x2="' + (W - R) + '" y2="' + Y(0) + '" style="stroke:var(--fg);stroke-width:2.5"/>';
    if (x0 <= 0 && x1 >= 0) s += '<line x1="' + X(0) + '" y1="' + T + '" x2="' + X(0) + '" y2="' + (H - B) + '" style="stroke:var(--fg);stroke-width:2.5"/>';
    items.forEach(function (it) {
      if (it.l) s += '<polyline points="' + it.l.map(function (q) { return X(q[0]) + ',' + Y(q[1]); }).join(' ') + '" style="fill:none;stroke:' + (it.c || 'var(--accent)') + ';stroke-width:4;stroke-linejoin:round;stroke-linecap:round' + (it.d ? ';stroke-dasharray:8 6' : '') + '"/>';
      if (it.poly) s += '<polygon points="' + it.poly.map(function (q) { return X(q[0]) + ',' + Y(q[1]); }).join(' ') + '" style="fill:' + (it.c || 'var(--accent)') + ';fill-opacity:.4;stroke:var(--fg);stroke-width:3;stroke-linejoin:round"/>';
      if (it.p) s += '<circle cx="' + X(it.p[0]) + '" cy="' + Y(it.p[1]) + '" r="5.5" style="fill:' + (it.p[3] || 'var(--bad)') + ';stroke:var(--fg);stroke-width:2"/>' + (it.p[2] ? V.t(X(it.p[0]) + 9, Y(it.p[1]) - 8, it.p[2], 'start', it.p[3] || 'var(--bad)') : '');
    });
    if (o.xl) s += V.t(W - R, H - 2, o.xl, 'end', 'var(--muted)');
    if (o.yl) s += V.t(L + 4, T + 12, o.yl, 'start', 'var(--muted)');
    return V.svg(W, H, s, o.alt || 'A graph', 340);
  };
  /* right-angled triangle, right angle bottom-left; labels {a: bottom, b: left, c: hypotenuse, ang: angle at bottom-right} */
  V.rt = function (lab) {
    lab = lab || {};
    var s = '<polygon points="30,150 30,30 210,150" style="fill:var(--surface-2);stroke:var(--fg);stroke-width:3.5;stroke-linejoin:round"/><path d="M30 134 h16 v16" style="fill:none;stroke:var(--accent);stroke-width:3"/>';
    if (lab.a) s += V.t(120, 174, lab.a); if (lab.b) s += V.t(14, 95, lab.b, 'end'); if (lab.c) s += V.t(138, 80, lab.c, 'start', 'var(--accent)'); if (lab.ang) s += V.t(168, 144, lab.ang, 'middle', 'var(--bad)');
    return V.svg(250, 190, s, 'A right-angled triangle', 270);
  };

})();
