/* Spatial awareness and reasoning: drawing library and shared helpers (part 1 of 3) */
(function () { 'use strict';
var S = Studio, H = S.h, K = S.kit, V = S.viz, rnd = H.rnd, pick = H.pick, shuffle = H.shuffle;
var R = window.SPA = {};
R.rnd = rnd; R.pick = pick; R.shuffle = shuffle;
function svg(w, h, inner, alt, max) { return '<svg viewBox="0 0 ' + w + ' ' + h + '" role="img" aria-label="' + alt + '" style="width:100%;max-width:' + (max || w) + 'px;height:auto">' + inner + '</svg>'; }
R.svg = svg;
var LINE = 'stroke:var(--fg);stroke-width:2';
var FILLS = ['fill:var(--surface)', 'fill:' + 'hsl(215 var(--dot-s) var(--dot-l))', 'fill:' + 'hsl(150 var(--dot-s) var(--dot-l))'];
function hsl(h, dl) { return 'hsl(' + h + ' var(--dot-s) ' + (dl ? 'calc(var(--dot-l) + (' + dl + '))' : 'var(--dot-l)') + ')'; }
R.hsl = hsl;

/* ---------- shape tiles (non-verbal reasoning) ---------- */
function polyPts(n, r, rot) { var p = []; for (var i = 0; i < n; i++) { var a = (rot - 90 + i * 360 / n) * Math.PI / 180; p.push((r * Math.cos(a)).toFixed(1) + ',' + (r * Math.sin(a)).toFixed(1)); } return p.join(' '); }
var GLYPH = {
  arrow: [[0, -1], [0.75, 0], [0.28, 0], [0.28, 0.85], [-0.28, 0.85], [-0.28, 0], [-0.75, 0]],
  L: [[-0.6, -1], [-0.05, -1], [-0.05, 0.4], [0.65, 0.4], [0.65, 1], [-0.6, 1]],
  flag: [[-0.5, -1], [0.8, -0.5], [-0.5, 0], [-0.5, 1], [-0.75, 1], [-0.75, -1]]
};
var SIDES = { tri: 3, sq: 4, pent: 5, hex: 6, hept: 7 };
/* spec: { sh, fill 0|1|2, rot (degrees), sz (0.55..1), n (dots) } drawn in a 56 by 56 box with its top-left corner at (x, y) */
R.tile = function (sp, x, y, box) {
  box = box || 56; var cx = x + box / 2, cy = y + box / 2, r = box * 0.36 * (sp.sz || 1), s = '';
  s += '<rect x="' + x + '" y="' + y + '" width="' + box + '" height="' + box + '" rx="6" style="fill:var(--surface);stroke:var(--line);stroke-width:1.5"/>';
  var f = FILLS[sp.fill || 0], st = 'stroke:var(--fg);stroke-width:2';
  var rot = ((sp.rot || 0) % 360 + 360) % 360;
  if (sp.sh === 'circ') s += '<circle cx="' + cx + '" cy="' + cy + '" r="' + r.toFixed(1) + '" style="' + f + ';' + st + '"/>';
  else if (SIDES[sp.sh]) s += '<polygon points="' + polyPts(SIDES[sp.sh], r * (sp.sh === 'sq' ? 1.12 : 1.05), sp.sh === 'sq' ? 45 : 0) + '" transform="translate(' + cx + ' ' + cy + ')" style="' + f + ';' + st + '"/>';
  else if (GLYPH[sp.sh]) s += '<polygon points="' + GLYPH[sp.sh].map(function (p) { return (p[0] * r * 1.1).toFixed(1) + ',' + (p[1] * r * 1.1).toFixed(1); }).join(' ') + '" transform="translate(' + cx + ' ' + cy + ') rotate(' + rot + ')" style="' + f + ';' + st + '"/>';
  if (sp.n) { var gap = 9, x0 = cx - (sp.n - 1) * gap / 2; for (var i = 0; i < sp.n; i++) s += '<circle cx="' + (x0 + i * gap).toFixed(1) + '" cy="' + cy + '" r="3" style="fill:var(--fg)"/>'; }
  return s;
};
R.qbox = function (x, y, box) { box = box || 56; return '<rect x="' + x + '" y="' + y + '" width="' + box + '" height="' + box + '" rx="6" style="fill:var(--surface-2);stroke:var(--line);stroke-width:1.5;stroke-dasharray:5 4"/><text x="' + (x + box / 2) + '" y="' + (y + box / 2 + 9) + '" text-anchor="middle" style="font-size:28px;font-weight:700;fill:var(--fg)">?</text>'; };
R.letter = function (L, x, y) { return '<text x="' + x + '" y="' + y + '" text-anchor="middle" style="font-size:15px;font-weight:700;fill:var(--fg)">' + L + '</text>'; };
R.key = function (sp) { return JSON.stringify([sp.sh, sp.fill || 0, GLYPH[sp.sh] ? ((sp.rot || 0) % 360 + 360) % 360 : 0, sp.sz || 1, sp.n || 0]); };
R.clone = function (o) { return JSON.parse(JSON.stringify(o)); };

/* a row of lettered options under a picture */
R.optionsRow = function (opts, y, box) {
  box = box || 56; var gap = 14, w = opts.length * box + (opts.length - 1) * gap, x0 = 0, s = '';
  opts.forEach(function (o, i) { var x = x0 + i * (box + gap); s += R.tile(o, x, y, box) + R.letter('ABCDE'.charAt(i), x + box / 2, y + box + 18); });
  return { svg: s, w: w };
};

/* ---------- isometric cube stacks ---------- */
R.cubes = function (hts, hue, hl, big) {
  var c = big ? 26 : 22, rows = hts.length, cols = hts[0].length, list = [], i, j, k, mnx = 1e9, mxx = -1e9, mny = 1e9, mxy = -1e9;
  for (i = 0; i < rows; i++) for (j = 0; j < cols; j++) for (k = 0; k < hts[i][j]; k++) list.push([i, j, k]);
  list.sort(function (a, b) { return (a[0] + a[1]) - (b[0] + b[1]) || a[2] - b[2]; });
  function P(x, y, z) { return [c * (x - y), c * (x + y) / 2 - c * z]; }
  list.forEach(function (q) { [[q[0], q[1], q[2] + 1], [q[0] + 1, q[1] + 1, q[2]], [q[0], q[1] + 1, q[2]], [q[0] + 1, q[1], q[2]]].forEach(function (p) { var s = P(p[0], p[1], p[2]); mnx = Math.min(mnx, s[0]); mxx = Math.max(mxx, s[0]); mny = Math.min(mny, s[1]); mxy = Math.max(mxy, s[1]); }); });
  if (!list.length) return svg(120, 60, '<text x="60" y="34" text-anchor="middle" style="font-size:14px;fill:var(--fg)">No cubes yet</text>', 'An empty grid', 160);
  var pad = 8, W = mxx - mnx + 2 * pad, Hh = mxy - mny + 2 * pad, ox = pad - mnx, oy = pad - mny, out = '';
  list.forEach(function (q) {
    var x = q[0], y = q[1], z = q[2], A = P(x, y, z + 1), B = P(x + 1, y, z + 1), C = P(x + 1, y + 1, z + 1), D = P(x, y + 1, z + 1), B2 = P(x + 1, y, z), C2 = P(x + 1, y + 1, z), D2 = P(x, y + 1, z);
    function pt(p) { return (p[0] + ox).toFixed(1) + ',' + (p[1] + oy).toFixed(1); }
    var mark = hl && hl[x + ',' + y + ',' + z] ? 22 : hue;
    out += '<polygon points="' + [D, C, C2, D2].map(pt).join(' ') + '" style="fill:' + hsl(mark, '0%') + ';stroke:var(--fg);stroke-width:1.6;stroke-linejoin:round"/>';
    out += '<polygon points="' + [B, C, C2, B2].map(pt).join(' ') + '" style="fill:' + hsl(mark, '-14%') + ';stroke:var(--fg);stroke-width:1.6;stroke-linejoin:round"/>';
    out += '<polygon points="' + [A, B, C, D].map(pt).join(' ') + '" style="fill:' + hsl(mark, '16%') + ';stroke:var(--fg);stroke-width:1.6;stroke-linejoin:round"/>';
  });
  return svg(W, Hh, out, 'A stack of cubes drawn in 3D', Math.min(300, Math.round(W * 1.5)));
};
R.total = function (h) { var t = 0; h.forEach(function (r) { r.forEach(function (v) { t += v; }); }); return t; };
R.topView = function (h) { var t = 0; h.forEach(function (r) { r.forEach(function (v) { if (v > 0) t++; }); }); return t; };
/* looking at the left-hand faces (faces that point towards +j): for each i, the tallest column along j */
R.leftView = function (h) { var t = 0; h.forEach(function (r) { t += Math.max.apply(null, r); }); return t; };
/* looking at the right-hand faces (faces that point towards +i): for each j, the tallest column along i */
R.rightView = function (h) { var t = 0, i, j; for (j = 0; j < h[0].length; j++) { var m = 0; for (i = 0; i < h.length; i++) m = Math.max(m, h[i][j]); t += m; } return t; };
R.visible = function (h) {
  var cnt = 0; function at(i, j, k) { return h[i] && h[i][j] !== undefined && h[i][j] > k; }
  h.forEach(function (r, i) { r.forEach(function (v, j) { for (var k = 0; k < v; k++) if (!at(i, j, k + 1) || !at(i + 1, j, k) || !at(i, j + 1, k)) cnt++; }); });
  return cnt;
};
/* faces joined between neighbouring cubes, for surface area */
R.surface = function (h) {
  var s = 0; function at(i, j, k) { return h[i] && h[i][j] !== undefined && h[i][j] > k; }
  h.forEach(function (r, i) { r.forEach(function (v, j) { for (var k = 0; k < v; k++) { [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]].forEach(function (d) { var ni = i + d[0], nj = j + d[1], nk = k + d[2]; if (nk < 0) { s++; return; } if (!at(ni, nj, nk)) s++; }); } }); });
  return s;
};
R.randStack = function (rows, cols, maxH, minTotal) {
  for (var t = 0; t < 50; t++) {
    var h = []; for (var i = 0; i < rows; i++) { var r = []; for (var j = 0; j < cols; j++) r.push(Math.random() < 0.18 ? 0 : rnd(1, maxH)); h.push(r); }
    if (R.total(h) >= (minTotal || 4)) return h;
  } return [[1, 2], [2, 1]];
};

/* ---------- nets of a cube (cube rolling over the net) ---------- */
R.netLabels = function (cells) {
  var seen = {}, key = function (c) { return c[0] + ',' + c[1]; }, set = {}; cells.forEach(function (c) { set[key(c)] = true; });
  var lab = {}, st0 = { T: 0, B: 1, N: 2, S: 3, E: 4, W: 5 }, queue = [[cells[0], st0]]; lab[key(cells[0])] = st0.B; seen[key(cells[0])] = 1;
  while (queue.length) {
    var cur = queue.shift(), c = cur[0], s = cur[1];
    [[1, 0, 'E'], [-1, 0, 'W'], [0, 1, 'S'], [0, -1, 'N']].forEach(function (d) {
      var n = [c[0] + d[0], c[1] + d[1]], kn = key(n); if (!set[kn] || seen[kn]) return;
      var t = { T: s.T, B: s.B, N: s.N, S: s.S, E: s.E, W: s.W };
      if (d[2] === 'E') { t.B = s.E; t.E = s.T; t.T = s.W; t.W = s.B; }
      else if (d[2] === 'W') { t.B = s.W; t.W = s.T; t.T = s.E; t.E = s.B; }
      else if (d[2] === 'S') { t.B = s.S; t.S = s.T; t.T = s.N; t.N = s.B; }
      else { t.B = s.N; t.N = s.T; t.T = s.S; t.S = s.B; }
      lab[kn] = t.B; seen[kn] = 1; queue.push([n, t]);
    });
  }
  return lab;
};
R.isNet = function (cells) {
  var set = {}; cells.forEach(function (c) { set[c[0] + ',' + c[1]] = 1; });
  for (var i = 0; i < cells.length; i++) { var x = cells[i][0], y = cells[i][1]; if (set[(x + 1) + ',' + y] && set[x + ',' + (y + 1)] && set[(x + 1) + ',' + (y + 1)]) return false; }
  var lab = R.netLabels(cells), used = {}, ok = true; cells.forEach(function (c) { var l = lab[c[0] + ',' + c[1]]; if (l === undefined || used[l]) ok = false; used[l] = 1; });
  return ok;
};
R.randHexomino = function () {
  var cells = [[0, 0]], set = { '0,0': 1 };
  while (cells.length < 6) {
    var c = pick(cells), d = pick([[1, 0], [-1, 0], [0, 1], [0, -1]]), n = [c[0] + d[0], c[1] + d[1]];
    if (!set[n[0] + ',' + n[1]]) { cells.push(n); set[n[0] + ',' + n[1]] = 1; }
  }
  var mx = Math.min.apply(null, cells.map(function (c) { return c[0]; })), my = Math.min.apply(null, cells.map(function (c) { return c[1]; }));
  cells = cells.map(function (c) { return [c[0] - mx, c[1] - my]; });
  var w = Math.max.apply(null, cells.map(function (c) { return c[0]; })) + 1, h = Math.max.apply(null, cells.map(function (c) { return c[1]; })) + 1;
  return (w > 5 || h > 5) ? R.randHexomino() : cells;
};
R.netOfKind = function (valid) { for (var t = 0; t < 400; t++) { var c = R.randHexomino(); if (R.isNet(c) === valid) return c; } return valid ? [[0, 0], [1, 0], [2, 0], [3, 0], [1, 1], [1, -1]].map(function (c) { return [c[0], c[1] + 1]; }) : [[0, 0], [1, 0], [0, 1], [1, 1], [2, 0], [3, 0]]; };
R.netPic = function (cells, letters, shade) {
  var s = 30, w = Math.max.apply(null, cells.map(function (c) { return c[0]; })) + 1, h = Math.max.apply(null, cells.map(function (c) { return c[1]; })) + 1, out = '';
  cells.forEach(function (c, i) {
    var x = 6 + c[0] * s, y = 6 + c[1] * s, on = shade !== undefined && shade === i;
    out += '<rect x="' + x + '" y="' + y + '" width="' + s + '" height="' + s + '" style="fill:' + (on ? hsl(22) : hsl(215)) + ';fill-opacity:' + (on ? 1 : 0.3) + ';stroke:var(--fg);stroke-width:2"/>';
    if (letters) out += '<text x="' + (x + s / 2) + '" y="' + (y + s / 2 + 5) + '" text-anchor="middle" style="font-size:15px;font-weight:700;fill:var(--fg)">' + letters[i] + '</text>';
  });
  return svg(12 + w * s, 12 + h * s, out, 'A flat pattern of six joined squares', Math.min(260, 12 + w * s + 40));
};

/* ---------- polyomino pieces for turns and flips ---------- */
R.PIECES = [
  [[0, 0], [0, 1], [0, 2], [1, 2]],
  [[0, 0], [1, 0], [1, 1], [2, 1]],
  [[0, 0], [0, 1], [1, 1], [1, 2], [1, 3]],
  [[1, 0], [2, 0], [0, 1], [1, 1], [1, 2]],
  [[0, 0], [1, 0], [0, 1], [1, 1], [0, 2]],
  [[0, 0], [0, 1], [0, 2], [1, 2], [1, 3]]
];
R.norm = function (cells) {
  var mx = Math.min.apply(null, cells.map(function (c) { return c[0]; })), my = Math.min.apply(null, cells.map(function (c) { return c[1]; }));
  return cells.map(function (c) { return [c[0] - mx, c[1] - my]; }).sort(function (a, b) { return a[1] - b[1] || a[0] - b[0]; });
};
R.pkey = function (cells) { return JSON.stringify(R.norm(cells)); };
R.turnCW = function (cells) { return R.norm(cells.map(function (c) { return [-c[1], c[0]]; })); };
R.turnCCW = function (cells) { return R.norm(cells.map(function (c) { return [c[1], -c[0]]; })); };
R.flipLR = function (cells) { return R.norm(cells.map(function (c) { return [-c[0], c[1]]; })); };
R.flipUD = function (cells) { return R.norm(cells.map(function (c) { return [c[0], -c[1]]; })); };
R.pieceSvg = function (cells, cell, hue, box) {
  cell = cell || 16; cells = R.norm(cells); box = box || 4; var W = box * cell + 8, out = '';
  var w = Math.max.apply(null, cells.map(function (c) { return c[0]; })) + 1, h = Math.max.apply(null, cells.map(function (c) { return c[1]; })) + 1, ox = 4 + (box - w) * cell / 2, oy = 4 + (box - h) * cell / 2;
  cells.forEach(function (c) { out += '<rect x="' + (ox + c[0] * cell) + '" y="' + (oy + c[1] * cell) + '" width="' + cell + '" height="' + cell + '" style="fill:' + hsl(hue || 215) + ';stroke:var(--fg);stroke-width:1.6"/>'; });
  return out;
};
})();
