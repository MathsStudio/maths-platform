/* bite0.js: shared helpers for the Bitesize Second level upgrade (P5, P6, P7).
   Pictures (number lines, coins, triangles, circles, grids), slide builders and a way
   to add extra lesson parts (learn3, learn4) to any topic, so each topic can have as
   many slides as it needs. */
(function () {
  'use strict';
  var S = Studio, H = S.h, K = S.kit, V = S.viz, SK = window.SK;
  var BT = window.BT = {};

  function hs(h, k) { return V.hsl(h, k); }
  function svg(w, h, alt, inner, max) { return '<svg viewBox="0 0 ' + w + ' ' + h + '" role="img" aria-label="' + alt + '" style="width:100%;max-width:' + (max || Math.min(w, 360)) + 'px;height:auto">' + inner + '</svg>'; }
  function txt(x, y, s, sz, anchor, extra) { return '<text x="' + x + '" y="' + y + '" text-anchor="' + (anchor || 'middle') + '" class="pv-b" style="font-size:' + (sz || 13) + 'px' + (extra || '') + '">' + s + '</text>'; }
  function sg(n) { return n < 0 ? '−' + (-n) : String(n); }
  function fr(n, d) { return '<span class="fr"><b>' + n + '</b><i></i><b>' + d + '</b></span>'; }
  function gcd(a, b) { return b ? gcd(b, a % b) : Math.abs(a); }
  BT.hs = hs; BT.svg = svg; BT.txt = txt; BT.sg = sg; BT.fr = fr; BT.gcd = gcd;

  /* number line from lo to hi; o.marks [[value,hue]], o.jumps [[from,to,label]], o.lab label every n, o.tick tick every n */
  BT.NL = function (lo, hi, o) {
    o = o || {}; var W = 340, x0 = 24, x1 = W - 24, y = 54, per = (x1 - x0) / (hi - lo), lab = o.lab || 1, tk = o.tick || 1;
    function X(v) { return x0 + (v - lo) * per; }
    var s = '<line x1="' + (x0 - 8) + '" y1="' + y + '" x2="' + (x1 + 8) + '" y2="' + y + '" style="stroke:var(--fg);stroke-width:3"/>';
    for (var v = lo; v <= hi + 1e-9; v += tk) {
      var big = Math.abs(v % lab) < 1e-9;
      s += '<line x1="' + X(v) + '" y1="' + (y - (big ? 9 : 5)) + '" x2="' + X(v) + '" y2="' + (y + (big ? 9 : 5)) + '" style="stroke:var(--fg);stroke-width:2"/>';
      if (big) s += txt(X(v), y + 28, sg(Math.round(v * 100) / 100), 12);
    }
    (o.jumps || []).forEach(function (j) {
      var a = X(j[0]), b = X(j[1]), m = (a + b) / 2, h = 34;
      s += '<path d="M' + a + ',' + (y - 8) + ' Q' + m + ',' + (y - 8 - h) + ' ' + b + ',' + (y - 8) + '" fill="none" style="stroke:' + hs(22) + ';stroke-width:3"/>';
      if (j[2]) s += txt(m, y - h - 6, j[2], 13);
    });
    (o.marks || []).forEach(function (m) { s += '<circle cx="' + X(m[0]) + '" cy="' + y + '" r="7" style="fill:' + hs(m[1] || 215) + ';stroke:var(--fg);stroke-width:2"/>'; });
    return svg(W, 96, o.alt || 'A number line', s);
  };

  /* a fraction bar: n of d parts shaded */
  BT.bar = function (n, d, alt) {
    var W = 300, w = W / d, s = '';
    for (var i = 0; i < d; i++) s += '<rect x="' + (10 + i * w) + '" y="10" width="' + w + '" height="46" style="fill:' + (i < n ? hs(215) : 'transparent') + ';stroke:var(--fg);stroke-width:2.5"/>';
    return svg(320, 66, alt || n + ' of ' + d + ' parts shaded', s);
  };

  /* coins: list of values in pence */
  BT.coins = function (list, alt) {
    var s = '', x = 22, rows = 0, per = 7;
    list.forEach(function (v, i) {
      var r = v >= 100 ? 21 : v >= 50 ? 18 : v >= 20 ? 16 : v >= 10 ? 17 : v >= 5 ? 13 : v >= 2 ? 18 : 14, col = v >= 100 ? 45 : v >= 20 ? 48 : v >= 10 ? 40 : 28;
      var cx = 24 + (i % per) * 46, cy = 26 + Math.floor(i / per) * 46;
      s += '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" style="fill:' + hs(v >= 5 && v !== 2 && v !== 1 ? 215 : 30, 'band') + ';stroke:var(--fg);stroke-width:2.5"/>' + txt(cx, cy + 4, v >= 100 ? '£' + v / 100 : v + 'p', 11);
      rows = Math.floor(i / per);
    });
    return svg(340, 52 + rows * 46, alt || 'Coins', s);
  };

  /* ruler with an object of the given length in cm (decimal) */
  BT.ruler = function (len) {
    var s = '', x0 = 20, cm = 30, y = 70;
    s += '<rect x="' + x0 + '" y="26" width="' + (len * cm) + '" height="22" rx="4" style="fill:' + hs(40, 'band') + ';stroke:var(--fg);stroke-width:2.5"/>';
    s += '<rect x="' + (x0 - 4) + '" y="' + y + '" width="' + (10 * cm + 8) + '" height="34" style="fill:transparent;stroke:var(--fg);stroke-width:2.5"/>';
    for (var i = 0; i <= 100; i++) { var x = x0 + i * cm / 10, big = i % 10 === 0, half = i % 5 === 0; s += '<line x1="' + x + '" y1="' + y + '" x2="' + x + '" y2="' + (y + (big ? 20 : half ? 14 : 9)) + '" style="stroke:var(--fg);stroke-width:' + (big ? 2 : 1) + '"/>'; if (big) s += txt(x, y + 32, i / 10, 11); }
    s += '<line x1="' + (x0 + len * cm) + '" y1="50" x2="' + (x0 + len * cm) + '" y2="' + (y + 20) + '" style="stroke:' + hs(22) + ';stroke-width:2" stroke-dasharray="4 3"/>';
    return svg(340, 112, 'A pencil measured with a ruler: it ends at ' + len + ' centimetres', s);
  };

  /* triangle shapes: kind equilateral|isosceles|scalene|right */
  function tri(kind, ox, oy, sc) {
    var P, ticks = '', sq = '';
    if (kind === 'equilateral') { P = [[0, 0], [60, 0], [30, -52]]; ticks = [[[30, 0], 'h'], [[45, -26], 'd'], [[15, -26], 'd']]; }
    else if (kind === 'isosceles') { P = [[0, 0], [60, 0], [30, -66]]; ticks = [[[45, -33], 'd'], [[15, -33], 'd']]; }
    else if (kind === 'right') { P = [[0, 0], [66, 0], [0, -52]]; sq = '<polyline points="' + (ox + 10 * sc) + ',' + oy + ' ' + (ox + 10 * sc) + ',' + (oy - 10 * sc) + ' ' + ox + ',' + (oy - 10 * sc) + '" fill="none" style="stroke:var(--fg);stroke-width:2"/>'; }
    else { P = [[0, 0], [72, 0], [20, -48]]; }
    var pts = P.map(function (p) { return (ox + p[0] * sc) + ',' + (oy + p[1] * sc); }).join(' ');
    var s = '<polygon points="' + pts + '" style="fill:' + hs(kind === 'equilateral' ? 150 : kind === 'isosceles' ? 40 : kind === 'right' ? 215 : 330, 'band') + ';stroke:var(--fg);stroke-width:2.5;stroke-linejoin:round"/>' + sq;
    if (ticks) ticks.forEach(function (t) { var x = ox + t[0][0] * sc, y = oy + t[0][1] * sc; if (t[1] === 'h') s += '<line x1="' + x + '" y1="' + (y - 5) + '" x2="' + x + '" y2="' + (y + 5) + '" style="stroke:var(--fg);stroke-width:2"/>'; else s += '<circle cx="' + x + '" cy="' + y + '" r="3" style="fill:var(--fg)"/>'; });
    return s;
  }
  BT.tri = tri;
  BT.triRow = function () {
    var s = tri('equilateral', 14, 74, 1) + tri('isosceles', 98, 74, 1) + tri('scalene', 182, 74, 1) + tri('right', 266, 74, 1);
    s += txt(44, 96, 'equilateral', 11) + txt(128, 96, 'isosceles', 11) + txt(218, 96, 'scalene', 11) + txt(299, 96, 'right-angled', 11);
    return svg(340, 108, 'Four triangles: equilateral, isosceles, scalene and right-angled', s);
  };
  BT.single = function (kind) { return svg(120, 100, 'A ' + kind + ' triangle', tri(kind, 24, 84, 1.3), 160); };

  /* regular polygon with n sides, centre cx,cy radius r */
  function poly(n, cx, cy, r, rot, fill) {
    var p = []; for (var i = 0; i < n; i++) { var a = rot + i * 2 * Math.PI / n; p.push((cx + r * Math.cos(a)).toFixed(1) + ',' + (cy + r * Math.sin(a)).toFixed(1)); }
    return '<polygon points="' + p.join(' ') + '" style="fill:' + hs(fill || 215, 'band') + ';stroke:var(--fg);stroke-width:2.5;stroke-linejoin:round"/>';
  }
  BT.poly = poly;
  BT.polyRow = function () {
    var s = poly(5, 52, 52, 40, -Math.PI / 2, 215) + poly(6, 140, 52, 40, 0, 150) + '<polygon points="204,70 224,22 262,16 290,48 270,84" style="fill:' + hs(330, 'band') + ';stroke:var(--fg);stroke-width:2.5;stroke-linejoin:round"/>';
    s += txt(52, 108, 'regular pentagon', 11) + txt(140, 108, 'regular hexagon', 11) + txt(250, 108, 'irregular pentagon', 11);
    return svg(340, 118, 'A regular pentagon, a regular hexagon and an irregular pentagon', s);
  };

  /* circle with parts */
  BT.circle = function () {
    var cx = 120, cy = 82, r = 62, s = '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" style="fill:' + hs(215, 'band') + ';stroke:var(--fg);stroke-width:3"/>';
    s += '<line x1="' + (cx - r) + '" y1="' + cy + '" x2="' + (cx + r) + '" y2="' + cy + '" style="stroke:' + hs(22) + ';stroke-width:3"/>';
    s += '<line x1="' + cx + '" y1="' + cy + '" x2="' + (cx + r * 0.7) + '" y2="' + (cy - r * 0.714) + '" style="stroke:' + hs(150) + ';stroke-width:3"/>';
    s += '<circle cx="' + cx + '" cy="' + cy + '" r="4" style="fill:var(--fg)"/>';
    s += txt(cx, cy + 20, 'diameter', 12) + txt(cx + 42, cy - 50, 'radius', 12, 'start') + txt(cx - r - 6, cy - r + 6, 'circumference', 12, 'end');
    s += txt(cx + 8, cy - 6, 'centre', 11, 'start');
    return svg(340, 160, 'A circle with its centre, radius, diameter and circumference labelled', s, 300);
  };

  /* parallel and perpendicular lines */
  BT.parperp = function () {
    var a = 'style="stroke:var(--fg);stroke-width:4;stroke-linecap:round"';
    var s = '<line x1="20" y1="30" x2="150" y2="30" ' + a + '/><line x1="20" y1="80" x2="150" y2="80" ' + a + '/>';
    s += '<polyline points="78,24 86,30 78,36" fill="none" style="stroke:' + hs(22) + ';stroke-width:3"/><polyline points="78,74 86,80 78,86" fill="none" style="stroke:' + hs(22) + ';stroke-width:3"/>';
    s += txt(85, 108, 'parallel', 13);
    s += '<line x1="200" y1="90" x2="320" y2="90" ' + a + '/><line x1="230" y1="20" x2="230" y2="90" ' + a + '/><polyline points="230,76 244,76 244,90" fill="none" style="stroke:' + hs(22) + ';stroke-width:3"/>';
    s += txt(262, 108, 'perpendicular', 13);
    return svg(340, 116, 'Two parallel lines and two perpendicular lines', s);
  };

  /* map grid with letters across and numbers up; marks [[col,row,label]] col 0-4 row 1-4 */
  BT.gridMap = function (marks, hi) {
    var x0 = 34, y0 = 10, c = 56, rows = 4, cols = 5, s = '';
    for (var r = 0; r < rows; r++) for (var q = 0; q < cols; q++) s += '<rect x="' + (x0 + q * c) + '" y="' + (y0 + r * c * 0.7) + '" width="' + c + '" height="' + (c * 0.7) + '" style="fill:' + (hi && hi[0] === q && hi[1] === rows - r ? hs(50, 'band') : 'transparent') + ';stroke:var(--fg);stroke-width:1.5"/>';
    'ABCDE'.split('').forEach(function (l, i) { s += txt(x0 + i * c + c / 2, y0 + rows * c * 0.7 + 18, l, 14); });
    for (var n = 1; n <= rows; n++) s += txt(20, y0 + (rows - n) * c * 0.7 + c * 0.35 + 5, n, 14);
    (marks || []).forEach(function (m) { s += txt(x0 + m[0] * c + c / 2, y0 + (rows - m[1]) * c * 0.7 + c * 0.35 + 7, m[2], 24); });
    return svg(340, 140, 'A map split into a grid, with letters A to E across and numbers 1 to 4 up the side', s);
  };

  /* coordinate grid 0..cx by 0..cy with polygons [[points],hue] */
  BT.coordGrid = function (cx, cy, polys, alt) {
    var u = 30, x0 = 30, y0 = 10 + cy * u, s = '';
    for (var i = 0; i <= cx; i++) s += '<line x1="' + (x0 + i * u) + '" y1="10" x2="' + (x0 + i * u) + '" y2="' + y0 + '" style="stroke:var(--line);stroke-width:1"/>' + txt(x0 + i * u, y0 + 16, i, 11);
    for (var j = 0; j <= cy; j++) s += '<line x1="' + x0 + '" y1="' + (y0 - j * u) + '" x2="' + (x0 + cx * u) + '" y2="' + (y0 - j * u) + '" style="stroke:var(--line);stroke-width:1"/>' + txt(18, y0 - j * u + 4, j, 11);
    polys.forEach(function (p) { s += '<polygon points="' + p[0].map(function (q) { return (x0 + q[0] * u) + ',' + (y0 - q[1] * u); }).join(' ') + '" style="fill:' + hs(p[1], 'band') + ';stroke:var(--fg);stroke-width:2.5;stroke-linejoin:round;fill-opacity:.85"/>'; });
    return svg(x0 + cx * u + 14, y0 + 24, alt || 'A coordinate grid', s, 340);
  };

  /* a box made of unit cubes, l long, w wide, h high (isometric) */
  BT.box = function (l, w, h) {
    var c = 20, ht = 20, s = '', ox = 14 + w * c, oy = h * ht + 12;
    function P(x, y, z) { return (ox + (x - y) * c) + ',' + (oy + (x + y) * c / 2 - z * ht); }
    function pg(pts, f) { return '<polygon points="' + pts.map(function (q) { return P(q[0], q[1], q[2]); }).join(' ') + '" style="fill:' + f + ';stroke:var(--fg);stroke-width:1.2;stroke-linejoin:round"/>'; }
    for (var x = 0; x < l; x++) for (var y = 0; y < w; y++) for (var z = 0; z < h; z++) {
      if (x === l - 1) s += pg([[x + 1, y, z], [x + 1, y + 1, z], [x + 1, y + 1, z + 1], [x + 1, y, z + 1]], hs(215));
      if (y === w - 1) s += pg([[x, y + 1, z], [x + 1, y + 1, z], [x + 1, y + 1, z + 1], [x, y + 1, z + 1]], hs(215, 'band'));
      if (z === h - 1) s += pg([[x, y, z + 1], [x + 1, y, z + 1], [x + 1, y + 1, z + 1], [x, y + 1, z + 1]], hs(50, 'band'));
    }
    var W = 28 + (l + w) * c, Hh = oy + (l + w) * c / 2 + 8;
    return svg(W, Hh, 'A box ' + l + ' cubes long, ' + w + ' wide and ' + h + ' high', s, Math.min(W, 300));
  };

  /* three small transformation panels on a grid */
  BT.transforms = function () {
    var u = 12, s = '';
    function panel(ox, T, f, label, mirror) {
      var I = T.map(f), q = '';
      q += '<rect x="' + ox + '" y="6" width="' + 8 * u + '" height="' + 7 * u + '" style="fill:transparent;stroke:var(--line);stroke-width:1.5"/>';
      function pts(a) { return a.map(function (p) { return (ox + p[0] * u) + ',' + (6 + (7 - p[1]) * u); }).join(' '); }
      if (mirror) q += '<line x1="' + (ox + mirror * u) + '" y1="6" x2="' + (ox + mirror * u) + '" y2="' + (6 + 7 * u) + '" style="stroke:' + hs(150) + ';stroke-width:2" stroke-dasharray="5 3"/>';
      q += '<polygon points="' + pts(T) + '" style="fill:' + hs(215, 'band') + ';stroke:var(--fg);stroke-width:2"/><polygon points="' + pts(I) + '" style="fill:' + hs(22, 'band') + ';stroke:var(--fg);stroke-width:2;stroke-dasharray:4 2"/>';
      return q + txt(ox + 4 * u, 6 + 7 * u + 16, label, 12);
    }
    s += panel(6, [[1, 1], [4, 1], [1, 4]], function (p) { return [p[0] + 3, p[1] + 2]; }, 'translation');
    s += panel(122, [[1, 1], [3, 1], [1, 4]], function (p) { return [8 - p[0], p[1]]; }, 'reflection', 4);
    s += panel(238, [[4, 3], [7, 3], [4, 6]], function (p) { return [4 + (p[1] - 3), 3 - (p[0] - 4)]; }, 'rotation');
    return svg(340, 114, 'A shape moved by a translation, a reflection and a rotation', s);
  };

  /* slides: plain, and text-chip worked examples */
  BT.sl = function (title, say, vis, real, goal, more, eg) { return { title: title, v: vis || '', say: say, real: real, goal: goal, more: more, eg: eg }; };
  BT.X = SK.X;
  BT.XV = function (title, q, steps, final, vis, real, goal, more, eg) {
    return SK.XV(title, q, steps, final, function (s) { var k = Math.max(1, Math.min(s, steps.length)); return (typeof vis === 'function' ? vis(k) : vis) + K.cap(steps[k - 1]); }, real, goal, more, eg);
  };

  /* add a new lesson part (a group of slides) to a topic; the part appears in the Learn row */
  BT.add = function (n, id, label, slides) {
    var t = S.topics[n]; if (!t) { if (window.console) console.warn('bite: no topic ' + n); return; }
    if (t.steps.some(function (s) { return s.id === id; })) return;
    var key = n + '.' + id, m = H.slideMeta;
    m.goals[key] = slides.map(function (s) { return s.goal; });
    m.more[key] = slides.map(function (s) { return s.noMore ? null : { more: s.more || [], eg: s.eg || [] }; });
    t.steps.push({ id: id, label: label, type: 'slides', tag: 'Let’s learn · ' + label, slides: slides });
    S.arrange(t);
  };
})();
