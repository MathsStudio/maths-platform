/* bmx.js: fills the gaps found when the Bitesize Second level map was checked against the questions.
   New question makers (with pictures where they help) and new lesson parts for P5, P6 and P7:
   parallel and perpendicular lines, nets of solids, types of triangle, parts of a circle (P5), grid references (P6, P7),
   division with remainders, counting on, mental methods, volume by counting cubes, reading a ruler,
   budgeting and best buy, and prime numbers.
   Makers are added to each topic through S.extraMakers; lessons through BT.add (part "learn8"). */
(function () {
  'use strict';
  var S = Studio, H = S.h, K = S.kit, Q = K.Q, rnd = H.rnd, pick = H.pick, shuffle = H.shuffle, T = H.trimNum, BT = window.BT;
  if (!BT || !BT.add) return;
  var hs = BT.hs, svg = BT.svg, txt = BT.txt, M = '−';
  function mcStr(ans, wrong) {
    var out = [ans]; wrong.forEach(function (w) { if (out.length < 4 && out.indexOf(w) < 0) out.push(w); });
    return { options: shuffle(out), answer: ans };
  }
  function mk(o, m) { o.type = 'mc'; o.options = m.options; o.answer = m.answer; return Q(o); }
  function yn(o, yes) { o.type = 'mc'; o.options = ['Yes', 'No']; o.answer = yes ? 'Yes' : 'No'; return Q(o); }
  function gbp(p) { return p < 100 ? p + 'p' : (p % 100 === 0 ? '£' + p / 100 : '£' + (p / 100).toFixed(2)); }
  function pounds(p) { return T(Math.round(p) / 100); }
  function f1(x) { return (Math.round(x * 10) / 10).toString(); }
  var STROKE = 'stroke:var(--fg);stroke-width:2.5;stroke-linejoin:round';

  /* ================= PARALLEL AND PERPENDICULAR LINES ================= */
  function gParLines() {
    var kind = pick(['parallel', 'perpendicular', 'neither']), th = pick([0, 20, 35, 60, 90, 120, 150]) * Math.PI / 180, L = 62, cx = 170, cy = 70;
    function seg(x, y, a) { return '<line x1="' + (x - L * Math.cos(a)).toFixed(1) + '" y1="' + (y - L * Math.sin(a)).toFixed(1) + '" x2="' + (x + L * Math.cos(a)).toFixed(1) + '" y2="' + (y + L * Math.sin(a)).toFixed(1) + '" style="stroke:var(--fg);stroke-width:4;stroke-linecap:round"/>'; }
    var s;
    if (kind === 'parallel') { var nx = -Math.sin(th) * 34, ny = Math.cos(th) * 34; s = seg(cx + nx, cy + ny, th) + seg(cx - nx, cy - ny, th); }
    else if (kind === 'perpendicular') s = seg(cx, cy, th) + seg(cx, cy, th + Math.PI / 2);
    else s = seg(cx, cy, th) + seg(cx, cy, th + pick([50, 125]) * Math.PI / 180);
    var why = kind === 'parallel' ? 'The lines stay the same distance apart and never meet, so they are parallel.' : kind === 'perpendicular' ? 'The lines cross at a right angle (90°), so they are perpendicular.' : 'The lines meet, but not at a right angle, so they are neither parallel nor perpendicular.';
    return mk({ tag: 'Parallel and perpendicular lines', text: 'Look at the two lines. Are they <b>parallel</b>, <b>perpendicular</b> or <b>neither</b>?', pic: svg(340, 140, 'Two straight lines. They are ' + kind + '.', s, 300),
      hints: ['Parallel lines never meet. Perpendicular lines meet at a right angle (90°).', 'Do the lines meet? If they do, is the corner a square corner?'], explain: why }, mcStr(kind, ['parallel', 'perpendicular', 'neither']));
  }
  function poly(pts, fill) { return '<polygon points="' + pts.map(function (p) { return p[0].toFixed(1) + ',' + p[1].toFixed(1); }).join(' ') + '" style="fill:' + (fill || hs(215, 'band')) + ';' + STROKE + '"/>'; }
  function regular(cx, cy, r, n, start) { var a = []; for (var i = 0; i < n; i++) { var t = (start + 360 / n * i) * Math.PI / 180; a.push([cx + r * Math.cos(t), cy + r * Math.sin(t)]); } return a; }
  var SHAPES = [
    { name: 'square', pts: [[30, 10], [120, 10], [120, 100], [30, 100]], par: 2, ra: 4, easy: 1 },
    { name: 'rectangle', pts: [[10, 25], [140, 25], [140, 95], [10, 95]], par: 2, ra: 4, easy: 1 },
    { name: 'parallelogram', pts: [[35, 20], [145, 20], [115, 100], [5, 100]], par: 2, ra: 0, easy: 1 },
    { name: 'rhombus', pts: [[75, 5], [140, 60], [75, 115], [10, 60]], par: 2, ra: 0 },
    { name: 'trapezium', pts: [[40, 20], [110, 20], [145, 100], [5, 100]], par: 1, ra: 0 },
    { name: 'right-angled trapezium', pts: [[10, 20], [90, 20], [140, 100], [10, 100]], par: 1, ra: 2 },
    { name: 'right-angled triangle', pts: [[20, 10], [20, 105], [135, 105]], par: 0, ra: 1, easy: 1 },
    { name: 'equilateral triangle', pts: [[10, 112], [140, 112], [75, 0]], par: 0, ra: 0, easy: 1 },
    { name: 'kite', pts: [[75, 5], [125, 45], [75, 115], [25, 45]], par: 0, ra: 0 },
    { name: 'regular hexagon', pts: regular(75, 60, 58, 6, 0), par: 3, ra: 0 },
    { name: 'regular pentagon', pts: regular(75, 62, 58, 5, -90), par: 0, ra: 0 }
  ];
  function gShapeSides(lv) {
    var pool = lv <= 1 ? SHAPES.filter(function (x) { return x.easy; }) : SHAPES, sh = pick(pool), asksPar = Math.random() < 0.5;
    var pic = svg(340, 126, 'A ' + sh.name, '<g transform="translate(95 4)">' + poly(sh.pts) + '</g>', 300);
    if (asksPar) return Q({ tag: 'Parallel and perpendicular lines', text: 'How many <b>pairs of parallel sides</b> does this shape have?', pic: pic, answer: String(sh.par),
      hints: ['Parallel sides run side by side and never meet.', 'Look at opposite sides. Do any of them point in exactly the same direction?'],
      explain: 'This is a ' + sh.name + '. It has ' + sh.par + (sh.par === 1 ? ' pair' : ' pairs') + ' of parallel sides.' });
    return Q({ tag: 'Parallel and perpendicular lines', text: 'How many <b>right angles</b> (corners where two sides are perpendicular) does this shape have?', pic: pic, answer: String(sh.ra),
      hints: ['A right angle is a square corner, 90°.', 'Count the corners that look like the corner of a page.'],
      explain: 'This is a ' + sh.name + '. It has ' + sh.ra + ' right ' + (sh.ra === 1 ? 'angle' : 'angles') + '.' });
  }

  /* ================= NETS OF SOLIDS ================= */
  var NET_FILL = hs(215, 'band'), NET_FILL2 = hs(50, 'band');
  function rect(x, y, w, h, f) { return '<rect x="' + x.toFixed(1) + '" y="' + y.toFixed(1) + '" width="' + w.toFixed(1) + '" height="' + h.toFixed(1) + '" style="fill:' + (f || NET_FILL) + ';' + STROKE + '"/>'; }
  function tri(a, b, c, f) { return poly([a, b, c], f || NET_FILL2); }
  var SOLIDS = {
    'cube': { faces: 6, edges: 12, verts: 8, clue: ['6 squares'] },
    'cuboid': { faces: 6, edges: 12, verts: 8, clue: ['6 rectangles (they are not all squares)'] },
    'triangular prism': { faces: 5, edges: 9, verts: 6, clue: ['2 triangles and 3 rectangles'] },
    'square-based pyramid': { faces: 5, edges: 8, verts: 5, clue: ['1 square and 4 triangles'] },
    'tetrahedron': { faces: 4, edges: 6, verts: 4, clue: ['4 triangles'] }
  };
  function netInner(kind) {
    var s = '', w, h, U = 30, i;
    if (kind === 'cube') {
      var v = pick(['strip', 'stairs', 'two3']), cells;
      if (v === 'strip') cells = [[0, 1], [1, 1], [2, 1], [3, 1], [rnd(0, 3), 0], [rnd(0, 3), 2]];
      else if (v === 'stairs') cells = [[0, 0], [1, 0], [1, 1], [2, 1], [2, 2], [3, 2]];
      else cells = [[0, 0], [1, 0], [2, 0], [2, 1], [3, 1], [4, 1]];
      var mx = 0, my = 0; cells.forEach(function (c) { s += rect(c[0] * U, c[1] * U, U, U); mx = Math.max(mx, c[0] + 1); my = Math.max(my, c[1] + 1); });
      w = mx * U; h = my * U;
    } else if (kind === 'cuboid') {
      var a = 64, b = 36, hh = 44;
      s += rect(0, b, a, hh) + rect(a, b, b, hh) + rect(a + b, b, a, hh) + rect(2 * a + b, b, b, hh) + rect(0, 0, a, b) + rect(0, b + hh, a, b);
      w = 2 * a + 2 * b; h = 2 * b + hh;
    } else if (kind === 'triangular prism') {
      var sd = 48, th = sd * 0.866, ln = 70;
      for (i = 0; i < 3; i++) s += rect(i * sd, th, sd, ln);
      s += tri([sd, th], [2 * sd, th], [1.5 * sd, 0]) + tri([sd, th + ln], [2 * sd, th + ln], [1.5 * sd, 2 * th + ln]);
      w = 3 * sd; h = 2 * th + ln;
    } else if (kind === 'square-based pyramid') {
      var q = 46, tt = 56;
      s += rect(tt, tt, q, q) + tri([tt, tt], [tt + q, tt], [tt + q / 2, 0]) + tri([tt, tt + q], [tt + q, tt + q], [tt + q / 2, 2 * tt + q]) +
        tri([tt, tt], [tt, tt + q], [0, tt + q / 2]) + tri([tt + q, tt], [tt + q, tt + q], [2 * tt + q, tt + q / 2]);
      w = 2 * tt + q; h = 2 * tt + q;
    } else {
      var e = 70, g = e * 0.866;
      s += tri([0, 2 * g], [e, 2 * g], [e / 2, g]) + tri([e, 2 * g], [2 * e, 2 * g], [1.5 * e, g]) + tri([e / 2, g], [1.5 * e, g], [e, 0]) + tri([e / 2, g], [1.5 * e, g], [e, 2 * g], NET_FILL);
      w = 2 * e; h = 2 * g;
    }
    return { s: s, w: w, h: h };
  }
  function netPic(kind) {
    var n = netInner(kind), W = n.w + 12, Hh = n.h + 12;
    return svg(W, Hh, 'A flat net made of the faces of a solid shape', '<g transform="translate(6 6)">' + n.s + '</g>', Math.min(W, 280));
  }
  function netsGallery() {
    var kinds = ['cube', 'triangular prism', 'square-based pyramid'], x = 4, out = '', sc = 0.5, hmax = 0;
    kinds.forEach(function (k) { var n = netInner(k); out += '<g transform="translate(' + x + ' 6) scale(' + sc + ')">' + n.s + '</g>' + txt(x + n.w * sc / 2, 6 + n.h * sc + 16, k, 11); x += n.w * sc + 22; hmax = Math.max(hmax, n.h * sc); });
    return svg(x, hmax + 30, 'Nets of a cube, a triangular prism and a square-based pyramid', out, 340);
  }
  function solidNames(lv) { return lv <= 1 ? ['cube', 'cuboid', 'triangular prism', 'square-based pyramid'] : Object.keys(SOLIDS); }
  function gNetSolid(lv) {
    var names = solidNames(lv), ans = pick(names), others = Object.keys(SOLIDS).filter(function (x) { return x !== ans; });
    var why = { 'cube': 'All 6 faces are squares, so it folds to make a cube.', 'cuboid': 'It has 6 rectangles, so it folds to make a cuboid.', 'triangular prism': 'It has 2 triangles and 3 rectangles, so it folds to make a triangular prism.', 'square-based pyramid': 'It has 1 square and 4 triangles, so it folds to make a square-based pyramid.', 'tetrahedron': 'It has 4 triangles, so it folds to make a tetrahedron.' };
    return mk({ tag: 'Nets of solids', text: 'This flat <b>net</b> folds up to make a solid. Which solid is it?', pic: netPic(ans),
      hints: ['Count the faces on the net and look at their shapes.', 'Squares, rectangles and triangles are clues. Match them to the solids.'], explain: why[ans] }, mcStr(ans, shuffle(others)));
  }
  function gNetFaces(lv) {
    var ans = pick(solidNames(lv)), what = pick(['faces', 'faces', 'edges', 'vertices']), key = what === 'faces' ? 'faces' : what === 'edges' ? 'edges' : 'verts', n = SOLIDS[ans][key];
    return Q({ tag: 'Nets of solids', text: 'This net folds to make a <b>' + ans + '</b>. How many <b>' + what + '</b> will the solid have?', pic: netPic(ans), answer: String(n),
      hints: what === 'faces' ? ['Each flat shape on the net becomes one face.', 'Count the shapes on the net.'] : ['Picture the folded solid.', what === 'edges' ? 'An edge is where two faces meet.' : 'A vertex is a corner where edges meet.'],
      explain: 'A ' + ans + ' has ' + SOLIDS[ans].faces + ' faces, ' + SOLIDS[ans].edges + ' edges and ' + SOLIDS[ans].verts + ' vertices, so the answer is ' + n + '.' });
  }
  function gNetClue(lv) {
    var ans = pick(solidNames(lv)), others = Object.keys(SOLIDS).filter(function (x) { return x !== ans; });
    return mk({ tag: 'Nets of solids', text: 'A net is made from <b>' + SOLIDS[ans].clue[0] + '</b>. Which solid does it fold to make?',
      hints: ['Think about the faces each solid has.', 'Cube: 6 squares. Prism: 2 triangles and 3 rectangles. Pyramid: 4 triangles and a base.'], explain: 'A net with ' + SOLIDS[ans].clue[0] + ' makes a ' + ans + '.' }, mcStr(ans, shuffle(others)));
  }

  /* ================= TYPES OF TRIANGLE (with a picture) ================= */
  function gTriPic(lv) {
    var t = pick(['equilateral', 'isosceles', 'scalene']), a = rnd(3, 8), b, c, sides;
    if (t === 'equilateral') sides = [a, a, a];
    else if (t === 'isosceles') { b = rnd(3, 8); while (b === a) b = rnd(3, 8); if (b >= 2 * a) b = a + 1; sides = [a, a, b]; }
    else sides = pick([[4, 5, 6], [5, 6, 7], [5, 7, 9], [4, 6, 7], [6, 7, 8], [5, 6, 8], [4, 7, 9]]);
    var A = sides[0], B = sides[1], C = sides[2];   /* BC = A, AC = B, AB = C */
    var x = (B * B + C * C - A * A) / (2 * C), y = Math.sqrt(Math.max(0.01, B * B - x * x));
    var P = [[0, 0], [C, 0], [x, y]], k = Math.min(250 / Math.max(C, x, A), 100 / y, 34), ox = 45, oy = 112;
    var Pt = P.map(function (p) { return [ox + p[0] * k, oy - p[1] * k]; });
    var cen = [(Pt[0][0] + Pt[1][0] + Pt[2][0]) / 3, (Pt[0][1] + Pt[1][1] + Pt[2][1]) / 3], s = poly(Pt), showNums = lv < 3 || Math.random() < 0.5;
    var edges = [[0, 1, C], [1, 2, A], [2, 0, B]];
    edges.forEach(function (e) {
      var p = Pt[e[0]], q = Pt[e[1]], mx = (p[0] + q[0]) / 2, my = (p[1] + q[1]) / 2, dx = q[0] - p[0], dy = q[1] - p[1], len = Math.sqrt(dx * dx + dy * dy), nx = -dy / len, ny = dx / len;
      if ((mx + nx - cen[0]) * (mx - cen[0]) + (my + ny - cen[1]) * (my - cen[1]) < 0) { nx = -nx; ny = -ny; }
      var same = edges.filter(function (o) { return o[2] === e[2]; }).length;
      if (same > 1) s += '<line x1="' + (mx - nx * 6).toFixed(1) + '" y1="' + (my - ny * 6).toFixed(1) + '" x2="' + (mx + nx * 6).toFixed(1) + '" y2="' + (my + ny * 6).toFixed(1) + '" style="stroke:' + hs(22) + ';stroke-width:3"/>';
      if (showNums) s += txt((mx + nx * 17).toFixed(1), (my + ny * 17 + 4).toFixed(1), e[2] + ' cm', 12);
    });
    var pic = svg(340, 142, 'A triangle with sides ' + sides.join(' cm, ') + ' cm', s, 320), ask = Math.random() < 0.7;
    if (ask) return mk({ tag: 'Types of triangle', text: 'What type of triangle is this? Small marks on sides show that they are equal.', pic: pic,
      hints: ['Count how many sides are equal.', 'Three equal sides: equilateral. Two equal: isosceles. None equal: scalene.'], explain: 'It has ' + (t === 'equilateral' ? 'three equal sides' : t === 'isosceles' ? 'two equal sides' : 'no equal sides') + ', so it is ' + t + '.' }, mcStr(t, ['equilateral', 'isosceles', 'scalene']));
    var eq = t === 'equilateral' ? 3 : t === 'isosceles' ? 2 : 0;
    return Q({ tag: 'Types of triangle', text: 'How many <b>equal sides</b> does this triangle have? (Write 0 if none are equal.)', pic: pic, answer: String(eq),
      hints: ['Look for the small marks, or compare the side lengths.', 'Equilateral has 3 equal sides, isosceles has 2, scalene has none.'], explain: 'The triangle is ' + t + ', so it has ' + eq + ' equal sides.' });
  }

  /* ================= PARTS OF A CIRCLE (P5) ================= */
  function gCircPart() {
    var cx = 170, cy = 72, r = 56, part = pick(['radius', 'diameter', 'circumference', 'centre']), th = rnd(0, 359) * Math.PI / 180, col = hs(22);
    if (Math.random() < 0.35) {
      var rr = rnd(2, 12), toD = Math.random() < 0.5;
      return Q({ tag: 'Parts of a circle', text: toD ? 'A circle has a <b>radius</b> of <b>' + rr + ' cm</b>. What is its <b>diameter</b>? (cm)' : 'A circle has a <b>diameter</b> of <b>' + rr * 2 + ' cm</b>. What is its <b>radius</b>? (cm)', answer: String(toD ? rr * 2 : rr),
        hints: ['The diameter goes right across the circle. The radius goes from the centre to the edge.', 'The diameter is twice the radius.'], explain: toD ? '2 × ' + rr + ' = ' + rr * 2 + ' cm.' : rr * 2 + ' ÷ 2 = ' + rr + ' cm.' });
    }
    var s = '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" style="fill:' + hs(215, 'band') + ';stroke:' + (part === 'circumference' ? col : 'var(--fg)') + ';stroke-width:' + (part === 'circumference' ? 6 : 3) + '"/>';
    function ln(a, b, c, d) { return '<line x1="' + a.toFixed(1) + '" y1="' + b.toFixed(1) + '" x2="' + c.toFixed(1) + '" y2="' + d.toFixed(1) + '" style="stroke:' + col + ';stroke-width:5;stroke-linecap:round"/>'; }
    if (part === 'radius') s += ln(cx, cy, cx + r * Math.cos(th), cy + r * Math.sin(th));
    if (part === 'diameter') s += ln(cx - r * Math.cos(th), cy - r * Math.sin(th), cx + r * Math.cos(th), cy + r * Math.sin(th));
    s += '<circle cx="' + cx + '" cy="' + cy + '" r="' + (part === 'centre' ? 8 : 3) + '" style="fill:' + (part === 'centre' ? col : 'var(--fg)') + '"/>';
    var why = { radius: 'The line from the centre to the edge is the radius.', diameter: 'The line right across the circle through the centre is the diameter.', circumference: 'The distance all the way round the edge is the circumference.', centre: 'The point in the middle is the centre.' };
    return mk({ tag: 'Parts of a circle', text: 'Which part of the circle is shown in <b>orange</b>?', pic: svg(340, 144, 'A circle with its ' + part + ' highlighted', s, 300),
      hints: ['Radius: centre to edge. Diameter: across, through the centre.', 'Circumference: all the way round. Centre: the middle point.'], explain: why[part] }, mcStr(part, ['radius', 'diameter', 'circumference', 'centre']));
  }

  /* ================= GRID REFERENCES (P6, P7) ================= */
  var PLACES = [['S', 'school', 215], ['P', 'park', 150], ['L', 'library', 22], ['H', 'hospital', 340], ['C', 'cafe', 50], ['F', 'fire station', 0]];
  function gGridMap(lv) {
    var cols = lv >= 3 ? 6 : 5, rows = lv >= 3 ? 5 : 4, c = 44, x0 = 34, y0 = 8, used = {}, items = [];
    shuffle(PLACES).slice(0, 4).forEach(function (p) {
      var col, row, key, g = 0; do { col = rnd(0, cols - 1); row = rnd(1, rows); key = col + ',' + row; g++; } while (used[key] && g < 50);
      used[key] = 1; items.push({ ch: p[0], name: p[1], hue: p[2], col: col, row: row, ref: 'ABCDEF'.charAt(col) + row });
    });
    var s = '', i, j;
    for (j = 0; j < rows; j++) for (i = 0; i < cols; i++) s += '<rect x="' + (x0 + i * c) + '" y="' + (y0 + j * c) + '" width="' + c + '" height="' + c + '" style="fill:transparent;stroke:var(--line);stroke-width:1.5"/>';
    for (i = 0; i < cols; i++) s += txt(x0 + i * c + c / 2, y0 + rows * c + 18, 'ABCDEF'.charAt(i), 14);
    for (j = 1; j <= rows; j++) s += txt(18, y0 + (rows - j) * c + c / 2 + 5, j, 14);
    items.forEach(function (it) { var cx = x0 + it.col * c + c / 2, cy = y0 + (rows - it.row) * c + c / 2; s += '<circle cx="' + cx + '" cy="' + cy + '" r="15" style="fill:' + hs(it.hue, 'band') + ';stroke:var(--fg);stroke-width:2"/>' + txt(cx, cy + 5, it.ch, 15); });
    var leg = items.map(function (it) { return it.ch + ' = ' + it.name; });
    s += txt(x0 + cols * c / 2, y0 + rows * c + 42, leg.slice(0, 2).join('     '), 12) + txt(x0 + cols * c / 2, y0 + rows * c + 60, leg.slice(2).join('     '), 12);
    var W = x0 + cols * c + 10, pic = svg(W, y0 + rows * c + 70, 'A map grid with letters across and numbers up the side. ' + items.map(function (it) { return 'The ' + it.name + ' is at ' + it.ref; }).join('. ') + '.', s, 340);
    var kind = pick([1, 2, 3]), it = pick(items), all = [];
    function refs(base) { var r = [base]; ['ABCDEF'.charAt((base.charCodeAt(0) - 64) % cols), 'ABCDEF'.charAt((base.charCodeAt(0) - 66 + cols) % cols)].forEach(function (L) { r.push(L + base.slice(1)); }); r.push(base.charAt(0) + ((Number(base.slice(1)) % rows) + 1)); r.push(base.slice(1) + base.charAt(0)); return r; }
    if (kind === 1) return mk({ tag: 'Grid references', text: 'What is the <b>grid reference</b> of the <b>' + it.name + '</b>?', pic: pic, hints: ['Give the letter (across) first, then the number (up).', 'Find the column letter under the ' + it.name + ', then the row number beside it.'], explain: 'The ' + it.name + ' is in column ' + it.ref.charAt(0) + ' and row ' + it.ref.slice(1) + ', so its grid reference is ' + it.ref + '.' }, mcStr(it.ref, refs(it.ref).slice(1)));
    if (kind === 2) { items.forEach(function (x) { all.push(x.name); }); return mk({ tag: 'Grid references', text: 'What is at grid reference <b>' + it.ref + '</b>?', pic: pic, hints: ['The letter tells you the column. The number tells you the row.', 'Go across to ' + it.ref.charAt(0) + ', then up to ' + it.ref.slice(1) + '.'], explain: 'Column ' + it.ref.charAt(0) + ', row ' + it.ref.slice(1) + ' is the ' + it.name + '.' }, mcStr(it.name, all.filter(function (x) { return x !== it.name; }))); }
    var a = items[0], b = items[1], g2 = 0; while (a.col === b.col && g2++ < 20) b = pick(items.filter(function (x) { return x !== a; }));
    var d = Math.abs(a.col - b.col);
    if (!d) return mk({ tag: 'Grid references', text: 'What is the <b>grid reference</b> of the <b>' + it.name + '</b>?', pic: pic, hints: ['Give the letter first, then the number.', 'Across, then up.'], explain: 'The ' + it.name + ' is at ' + it.ref + '.' }, mcStr(it.ref, refs(it.ref).slice(1)));
    return Q({ tag: 'Grid references', text: 'How many squares <b>across</b> (left or right) is the <b>' + b.name + '</b> from the <b>' + a.name + '</b>?', pic: pic, answer: String(d),
      hints: ['Find each place’s column letter.', 'Count the letters between them: A to C is 2 squares across.'], explain: 'The ' + a.name + ' is in column ' + a.ref.charAt(0) + ' and the ' + b.name + ' is in column ' + b.ref.charAt(0) + ', which is ' + d + (d === 1 ? ' square' : ' squares') + ' across.' });
  }

  /* ================= DIVISION WITH REMAINDERS ================= */
  function remNums(lv) {
    var d = lv <= 1 ? rnd(3, 9) : lv === 2 ? rnd(3, 12) : rnd(6, 25), q = lv <= 1 ? rnd(4, 11) : lv === 2 ? rnd(8, 25) : rnd(12, 40), r = rnd(1, d - 1);
    return { d: d, q: q, r: r, n: d * q + r };
  }
  function gRemMc(lv) {
    var x = remNums(lv), ans = x.q + ' r ' + x.r;
    var wrong = [(x.q + 1) + ' r ' + x.r, x.q + ' r ' + (x.r + 1 < x.d ? x.r + 1 : x.r - 1), (x.q - 1) + ' r ' + x.r, x.r + ' r ' + x.q];
    return mk({ tag: 'Division with remainders', text: 'Work out <b>' + x.n + ' ÷ ' + x.d + '</b>. Which answer is correct?', hints: ['Find the biggest multiple of ' + x.d + ' that is not more than ' + x.n + '.', 'Whatever is left over is the remainder.'],
      explain: x.d + ' × ' + x.q + ' = ' + x.d * x.q + ', and ' + x.n + ' − ' + x.d * x.q + ' = ' + x.r + ', so ' + x.n + ' ÷ ' + x.d + ' = ' + ans + '.' }, mcStr(ans, wrong));
  }
  function gRemOnly(lv) {
    var x = remNums(lv), askRem = Math.random() < 0.6;
    return Q({ tag: 'Division with remainders', text: askRem ? 'What is the <b>remainder</b> when <b>' + x.n + '</b> is divided by <b>' + x.d + '</b>?' : 'How many <b>whole groups</b> of <b>' + x.d + '</b> can you make from <b>' + x.n + '</b>?', answer: String(askRem ? x.r : x.q),
      hints: ['Count up in ' + x.d + 's (or use the ' + x.d + ' times table) without going past ' + x.n + '.', 'The number of steps is the answer to the division. What is left is the remainder.'],
      explain: x.d + ' × ' + x.q + ' = ' + x.d * x.q + '. ' + x.n + ' − ' + x.d * x.q + ' = ' + x.r + '. So there are ' + x.q + ' whole groups and ' + x.r + ' left over.' });
  }
  var CONTEXTS = [['eggs', 'box', 'boxes', 'a box holds'], ['pupils', 'minibus', 'minibuses', 'a minibus seats'], ['stickers', 'page', 'pages', 'a page holds'], ['biscuits', 'tin', 'tins', 'a tin holds'], ['photos', 'album page', 'album pages', 'an album page holds'], ['apples', 'bag', 'bags', 'a bag holds']];
  function left1(r, c) { return r === 1 ? '1 ' + c[0].replace(/s$/, '') + ' is' : r + ' ' + c[0] + ' are'; }
  function gRemStory(lv) {
    var x = remNums(lv), c = pick(CONTEXTS), kind = pick(['up', 'down', 'left']), ex = x.q + ' r ' + x.r;
    if (kind === 'up') return Q({ tag: 'Remainders in real life', text: 'There are <b>' + x.n + '</b> ' + c[0] + ' to pack. ' + c[3].charAt(0).toUpperCase() + c[3].slice(1) + ' <b>' + x.d + '</b>. How many ' + c[2] + ' are <b>needed</b> to hold all of them?', answer: String(x.q + 1),
      hints: ['Divide ' + x.n + ' by ' + x.d + ' first.', 'If there is a remainder, those ' + c[0] + ' still need one more ' + c[1] + '.'], explain: x.n + ' ÷ ' + x.d + ' = ' + ex + '. That is ' + x.q + ' full ' + c[2] + ' and ' + x.r + ' left over. The ' + x.r + ' left over need one more ' + c[1] + ', so ' + (x.q + 1) + ' ' + c[2] + ' are needed.' });
    if (kind === 'down') return Q({ tag: 'Remainders in real life', text: 'There are <b>' + x.n + '</b> ' + c[0] + '. ' + c[3].charAt(0).toUpperCase() + c[3].slice(1) + ' <b>' + x.d + '</b>. How many ' + c[2] + ' can be filled <b>completely</b>?', answer: String(x.q),
      hints: ['Divide ' + x.n + ' by ' + x.d + '.', 'Only count the full ones. Ignore the remainder.'], explain: x.n + ' ÷ ' + x.d + ' = ' + ex + '. So ' + x.q + ' ' + c[2] + ' are full, and ' + left1(x.r, c) + ' left over.' });
    return Q({ tag: 'Remainders in real life', text: x.n + ' ' + c[0] + ' are shared equally between <b>' + x.d + '</b> ' + (x.d === 1 ? c[1] : c[2]) + '. How many ' + c[0] + ' are <b>left over</b>?', answer: String(x.r),
      hints: ['Divide ' + x.n + ' by ' + x.d + ' and look at the remainder.', 'The remainder is what cannot be shared out equally.'], explain: x.n + ' ÷ ' + x.d + ' = ' + ex + '. Each ' + c[1] + ' gets ' + x.q + ' and ' + (x.r === 1 ? '1 is' : x.r + ' are') + ' left over.' });
  }
  function gRemDec() {
    var d = pick([2, 4, 5, 8]), q = rnd(5, 30), r = rnd(1, d - 1), n = d * q + r, ans = n / d;
    return Q({ tag: 'Remainders as decimals', text: 'Work out <b>' + n + ' ÷ ' + d + '</b> and give the answer as a <b>decimal</b>.', answer: T(Math.round(ans * 1000) / 1000),
      hints: [n + ' ÷ ' + d + ' = ' + q + ' remainder ' + r + '.', 'Write the remainder as a fraction of ' + d + ' (' + r + '/' + d + ') and change it to a decimal.'], explain: n + ' ÷ ' + d + ' = ' + q + ' r ' + r + '. The remainder ' + r + ' out of ' + d + ' is ' + T(r / d) + ', so the answer is ' + T(Math.round(ans * 1000) / 1000) + '.' });
  }

  /* ================= COUNTING ON (P5) ================= */
  function gCountAdd() {
    var a = rnd(24, 66), t = rnd(2, 3) * 10, o = rnd(2, 8), b = t + o, lo = Math.floor(a / 10) * 10, hi = Math.ceil((a + b) / 10) * 10;
    var pic = BT.NL(lo, hi, { lab: 10, tick: 5, marks: [[a, 215], [a + b, 22]], jumps: [[a, a + t, '+' + t], [a + t, a + b, '+' + o]], alt: 'A number line counting on from ' + a + ' by ' + t + ' and then ' + o });
    return Q({ tag: 'Counting on', text: 'Use <b>counting on</b> to work out <b>' + a + ' + ' + b + '</b>. Count on the tens first, then the ones.', pic: pic, answer: String(a + b),
      hints: ['Start at ' + a + ' and count on ' + t + ' (the tens).', 'Then count on ' + o + ' more (the ones).'], explain: a + ' + ' + t + ' = ' + (a + t) + '. Then ' + (a + t) + ' + ' + o + ' = ' + (a + b) + '.' });
  }
  function gCountChange() {
    var p = rnd(21, 94); while (p % 10 === 0) p = rnd(21, 94);
    var up = Math.ceil(p / 10) * 10, s1 = up - p, s2 = 100 - up, pic = BT.NL(Math.floor(p / 10) * 10, 100, { lab: 10, tick: 5, marks: [[p, 215], [100, 22]], jumps: [[p, up, '+' + s1], [up, 100, '+' + s2]], alt: 'A number line counting on from ' + p + ' to 100' });
    return Q({ tag: 'Counting on', text: 'A pencil costs <b>' + p + 'p</b>. You pay with a <b>£1</b> coin. Count on to find your change. (in pence)', pic: pic, answer: String(100 - p),
      hints: ['Start at ' + p + ' and count on to the next ten, ' + up + '.', 'Then count on from ' + up + ' to 100.'], explain: 'From ' + p + 'p to ' + up + 'p is ' + s1 + 'p. From ' + up + 'p to 100p is ' + s2 + 'p. ' + s1 + ' + ' + s2 + ' = ' + (100 - p) + ', so the change is ' + (100 - p) + 'p.' });
  }

  /* ================= MENTAL METHODS ================= */
  function gNearDouble(lv) {
    var b = lv <= 1 ? rnd(15, 49) : lv === 2 ? rnd(35, 99) : rnd(150, 480), k = pick([1, 1, 2, -1]), o = b + k, ans = b + o;
    return Q({ tag: 'Near doubles', text: 'Use a <b>near double</b> to work out <b>' + b + ' + ' + o + '</b>.', answer: String(ans),
      hints: ['Double ' + b + ' first.', k > 0 ? o + ' is ' + k + ' more than ' + b + ', so add ' + k + ' to the double.' : o + ' is ' + (-k) + ' less than ' + b + ', so take ' + (-k) + ' off the double.'],
      explain: 'Double ' + b + ' = ' + 2 * b + '. ' + o + ' is ' + Math.abs(k) + (k > 0 ? ' more' : ' less') + ' than ' + b + ', so ' + 2 * b + (k > 0 ? ' + ' : ' − ') + Math.abs(k) + ' = ' + ans + '.' });
  }
  var NEAR = { 1: [[9, 10], [19, 20], [29, 30], [39, 40], [11, 10], [21, 20]], 2: [[99, 100], [199, 200], [98, 100], [101, 100], [49, 50], [51, 50], [299, 300]], 3: [[198, 200], [299, 300], [398, 400], [499, 500], [999, 1000], [1001, 1000], [1998, 2000]] };
  function gRoundAdj(lv) {
    var pr = pick(NEAR[lv] || NEAR[2]), m = pr[0], r = pr[1], d = Math.abs(r - m), below = m < r, add = Math.random() < 0.55;
    var a = lv <= 1 ? rnd(m + 12, m + 60) : lv === 2 ? rnd(m + 120, m + 700) : rnd(m + 250, m + 1800), ans = add ? a + m : a - m;
    var step1 = add ? a + r : a - r, back = add ? (below ? 'take away' : 'add') : (below ? 'add' : 'take away');
    var fmt = H.fmtInt || String;
    return Q({ tag: 'Rounding to add and subtract', text: 'Work out <b>' + fmt(a) + (add ? ' + ' : ' ' + M + ' ') + fmt(m) + '</b> by rounding ' + fmt(m) + ' to ' + fmt(r) + ' first.', answer: String(ans),
      hints: [fmt(a) + (add ? ' + ' : ' ' + M + ' ') + fmt(r) + ' is easy to work out.', fmt(m) + ' is ' + d + (below ? ' less' : ' more') + ' than ' + fmt(r) + ', so ' + back + ' ' + d + ' afterwards.'],
      explain: fmt(a) + (add ? ' + ' : ' ' + M + ' ') + fmt(r) + ' = ' + fmt(step1) + '. Then ' + back + ' ' + d + ': ' + fmt(step1) + (back === 'add' ? ' + ' : ' ' + M + ' ') + d + ' = ' + fmt(ans) + '.' });
  }
  var NINES = { 2: [[9, 10], [19, 20], [11, 10]], 3: [[99, 100], [101, 100], [19, 20], [29, 30], [49, 50]] };
  function gMultNines(lv) {
    var pr = pick(NINES[lv] || NINES[2]), k = pr[0], r = pr[1], d = Math.abs(r - k), below = k < r, n = lv <= 2 ? rnd(3, 12) : rnd(12, 38), ans = n * k;
    return Q({ tag: 'Multiplying in your head', text: 'Work out <b>' + n + ' × ' + k + '</b> in your head. Hint: use ' + n + ' × ' + r + '.', answer: String(ans),
      hints: ['Work out ' + n + ' × ' + r + ' first.', k + ' is ' + d + (below ? ' less' : ' more') + ' than ' + r + ', so ' + (below ? 'take away' : 'add') + ' ' + n + ' × ' + d + '.'],
      explain: n + ' × ' + r + ' = ' + n * r + '. ' + n + ' × ' + d + ' = ' + n * d + '. ' + n * r + (below ? ' − ' : ' + ') + n * d + ' = ' + ans + '.' });
  }
  function gMult525(lv) {
    var kind = lv <= 2 ? '5' : pick(['25', '50', '5']), n, ans;
    if (kind === '5') { n = rnd(12, 88); ans = n * 5; return Q({ tag: 'Multiplying in your head', text: 'Work out <b>' + n + ' × 5</b> in your head. Hint: × 10 and then halve.', answer: String(ans), hints: ['Multiplying by 5 is the same as multiplying by 10 and then halving.', n + ' × 10 = ' + n * 10 + '.'], explain: n + ' × 10 = ' + n * 10 + '. Half of ' + n * 10 + ' is ' + ans + '.' }); }
    if (kind === '25') { n = rnd(3, 24) * 4; ans = n * 25; return Q({ tag: 'Multiplying in your head', text: 'Work out <b>' + n + ' × 25</b> in your head. Hint: 4 × 25 = 100.', answer: String(ans), hints: ['There are four 25s in 100.', 'Divide ' + n + ' by 4, then multiply by 100.'], explain: n + ' ÷ 4 = ' + n / 4 + '. ' + n / 4 + ' × 100 = ' + ans + '.' }); }
    n = rnd(12, 99); ans = n * 50; return Q({ tag: 'Multiplying in your head', text: 'Work out <b>' + n + ' × 50</b> in your head. Hint: × 100 and then halve.', answer: String(ans), hints: ['50 is half of 100.', n + ' × 100 = ' + n * 100 + '.'], explain: n + ' × 100 = ' + n * 100 + '. Half of ' + n * 100 + ' is ' + ans + '.' });
  }
  function shift(x, p) { return Math.round(x * Math.pow(10, p) * 1e6) / 1e6; }
  function gTens(lv) {
    var mul = Math.random() < 0.55, p = pick(lv >= 3 ? [1, 2, 3] : [1, 2]), f = Math.pow(10, p), base, ans, a, word = f === 10 ? '10' : f === 100 ? '100' : '1,000';
    if (lv <= 1) base = mul ? rnd(2, 95) : rnd(2, 95) * f; else if (lv === 2) base = mul ? rnd(11, 99) / 10 : rnd(2, 95) * (f / 10); else base = mul ? rnd(11, 999) / (Math.random() < 0.5 ? 100 : 10) : rnd(2, 95) * (f / 10) + (Math.random() < 0.5 ? 0 : rnd(1, 9) / 10);
    ans = mul ? shift(base, p) : shift(base, -p);
    var fmt = function (v) { return Math.abs(v) >= 1000 && v === Math.round(v) ? (H.fmtInt ? H.fmtInt(v) : String(v)) : T(v); };
    return Q({ tag: 'Multiply and divide by 10, 100 and 1000', text: 'Work out <b>' + fmt(base) + (mul ? ' × ' : ' ÷ ') + word + '</b>.', answer: T(ans),
      hints: ['Multiplying makes the digits move to the left. Dividing moves them to the right.', 'Move each digit ' + p + (p === 1 ? ' place' : ' places') + '.'], explain: 'Each digit moves ' + p + (p === 1 ? ' place ' : ' places ') + (mul ? 'to the left' : 'to the right') + ', so ' + fmt(base) + (mul ? ' × ' : ' ÷ ') + word + ' = ' + fmt(ans) + '.' });
  }
  function gSplitMult(lv) {
    var k = pick([11, 12, 14, 15]), n = lv <= 2 ? rnd(3, 9) : rnd(13, 29), e = k - 10, ans = n * k;
    return Q({ tag: 'Multiplying in your head', text: 'Work out <b>' + n + ' × ' + k + '</b> by splitting ' + k + ' into 10 + ' + e + '.', answer: String(ans),
      hints: ['Work out ' + n + ' × 10 and ' + n + ' × ' + e + ' separately.', 'Then add the two answers.'], explain: n + ' × 10 = ' + n * 10 + '. ' + n + ' × ' + e + ' = ' + n * e + '. ' + n * 10 + ' + ' + n * e + ' = ' + ans + '.' });
  }

  function gColAdd(lv) {
    var digs = lv <= 2 ? 4 : 5, lo = Math.pow(10, digs - 1), a = rnd(lo, lo * 9 - 1), b = rnd(lo, lo * 9 - 1), fmt = H.fmtInt || String, carries = 0, x = a, y = b, c = 0, i;
    for (i = 0; i < digs; i++) { var t = (x % 10) + (y % 10) + c; c = t >= 10 ? 1 : 0; carries += c; x = Math.floor(x / 10); y = Math.floor(y / 10); }
    return Q({ tag: 'Column addition', text: 'Use column addition to work out <b>' + fmt(a) + ' + ' + fmt(b) + '</b>.', answer: String(a + b),
      hints: ['Line up the digits so ones are under ones. Start on the right.', 'When a column adds up to 10 or more, write the ones digit and carry the 1 to the next column.'],
      explain: 'Adding the columns from the right, with ' + (carries ? carries + (carries === 1 ? ' carry' : ' carries') : 'no carries') + ', gives ' + fmt(a) + ' + ' + fmt(b) + ' = ' + fmt(a + b) + '.' });
  }

  /* ================= VOLUME, RULER, BUDGETING ================= */
  function gVolCount() {
    var l = rnd(2, 4), w = rnd(2, 3), h = rnd(2, 3), tot = l * w * h;
    if (Math.random() < 0.3) return Q({ tag: 'Volume by counting cubes', text: 'A box is filled with 1 cm cubes. <b>One layer</b> has <b>' + l * w + '</b> cubes and there are <b>' + h + ' layers</b>. How many cubes fill the box?', answer: String(tot),
      hints: ['Each layer has the same number of cubes.', 'Multiply the cubes in one layer by the number of layers.'], explain: l * w + ' × ' + h + ' = ' + tot + ' cubes. The volume is ' + tot + ' cm³.' });
    return Q({ tag: 'Volume by counting cubes', text: 'This box is filled with 1 cm cubes. How many cubes fit in the box? (This is its volume in cm³.)', pic: BT.box(l, w, h), answer: String(tot),
      hints: ['Count the cubes in one layer first: ' + l + ' long and ' + w + ' wide.', 'Then multiply by the number of layers, ' + h + '.'], explain: 'One layer has ' + l + ' × ' + w + ' = ' + l * w + ' cubes. With ' + h + ' layers: ' + l * w + ' × ' + h + ' = ' + tot + '. The volume is ' + tot + ' cm³.' });
  }
  function rulerPic(startMm, endMm) {
    var x0 = 14, mm = 2.6, y = 58, s = '', i, ex = x0 + endMm * mm, sx = x0 + startMm * mm;
    s += '<rect x="' + sx + '" y="12" width="' + (ex - sx) + '" height="26" rx="4" style="fill:' + hs(40, 'band') + ';stroke:var(--fg);stroke-width:2.5"/>';
    s += '<rect x="' + (x0 - 6) + '" y="' + y + '" width="' + (120 * mm + 12) + '" height="44" style="fill:transparent;stroke:var(--fg);stroke-width:2.5"/>';
    for (i = 0; i <= 120; i++) { var x = x0 + i * mm, big = i % 10 === 0, half = i % 5 === 0; s += '<line x1="' + x.toFixed(1) + '" y1="' + y + '" x2="' + x.toFixed(1) + '" y2="' + (y + (big ? 22 : half ? 15 : 9)) + '" style="stroke:var(--fg);stroke-width:' + (big ? 2 : 1) + '"/>'; if (big) s += txt(x.toFixed(1), y + 38, i / 10, 12); }
    [sx, ex].forEach(function (x) { s += '<line x1="' + x + '" y1="38" x2="' + x + '" y2="' + (y + 22) + '" style="stroke:' + hs(22) + ';stroke-width:2" stroke-dasharray="4 3"/>'; });
    return svg(340, 108, 'A strip measured against a ruler, from ' + f1(startMm / 10) + ' cm to ' + f1(endMm / 10) + ' cm', s, 340);
  }
  function gRuler(lv) {
    if (lv <= 1) { var len = rnd(6, 23) / 2; return Q({ tag: 'Measuring with a ruler', text: 'How long is the strip? Read the ruler and give the length in <b>centimetres</b>.', pic: rulerPic(0, len * 10), answer: T(len),
      hints: ['The strip starts at 0. Read the number where it ends.', 'The small marks are millimetres. The middle mark between two numbers is half a centimetre.'], explain: 'The strip ends ' + (len % 1 ? 'half way past ' + Math.floor(len) : 'exactly on ' + len) + ', so it is ' + T(len) + ' cm long.' }); }
    var st = pick([0, 0, 10, 20, 30]), ln = rnd(25, 84), end = st + ln;
    return Q({ tag: 'Measuring with a ruler', text: st ? 'How long is the strip? It does <b>not</b> start at 0. Give the length in <b>centimetres</b>.' : 'How long is the strip? Give the length in <b>centimetres</b>, to the nearest millimetre.', pic: rulerPic(st, end), answer: T(ln / 10),
      hints: st ? ['Read where the strip starts and where it ends.', 'Subtract the start reading from the end reading.'] : ['Read the whole centimetres, then count the small marks. Each small mark is 1 millimetre, or 0.1 cm.', 'Write the length as cm and tenths of a cm.'],
      explain: st ? 'The strip goes from ' + f1(st / 10) + ' cm to ' + f1(end / 10) + ' cm. ' + f1(end / 10) + ' − ' + f1(st / 10) + ' = ' + T(ln / 10) + ' cm.' : 'The strip ends at ' + T(ln / 10) + ' cm, which is ' + Math.floor(ln / 10) + ' cm and ' + (ln % 10) + ' mm.' });
  }
  var THINGS = ['a notebook', 'a pencil case', 'a football', 'a magazine', 'a sandwich', 'a drink', 'a poster', 'a game'];
  function items(n, lv) { var names = shuffle(THINGS).slice(0, n), out = []; names.forEach(function (x) { out.push({ name: x, p: (lv <= 1 ? rnd(2, 9) * 50 : rnd(20, 90) * 5) + (lv <= 1 ? 0 : rnd(0, 1) * 100) + 100 }); }); return out; }
  function gBudget(lv) {
    var n = lv <= 1 ? 2 : 3, it = items(n, lv), tot = 0; it.forEach(function (x) { tot += x.p; });
    var money = [500, 1000, 1500, 2000].filter(function (m) { return m > tot + 50; })[0] || 2500, left = money - tot;
    var list = it.map(function (x) { return x.name + ' (' + gbp(x.p) + ')'; }); var lastTwo = list.length > 1 ? list.slice(0, -1).join(', ') + ' and ' + list[list.length - 1] : list[0];
    return Q({ tag: 'Budgeting', text: 'You have <b>' + gbp(money) + '</b> to spend. You buy ' + lastTwo + '. How much money do you have <b>left</b>? (in pounds)', answer: pounds(left),
      hints: ['Add up the cost of everything you buy.', 'Take the total away from ' + gbp(money) + '.'], explain: 'The total is ' + it.map(function (x) { return gbp(x.p); }).join(' + ') + ' = ' + gbp(tot) + '. ' + gbp(money) + ' − ' + gbp(tot) + ' = ' + gbp(left) + '.' });
  }
  function gAfford(lv) {
    var it = items(2, lv), tot = it[0].p + it[1].p, enough = Math.random() < 0.5, money = enough ? Math.ceil((tot + rnd(0, 150)) / 50) * 50 : Math.floor((tot - rnd(50, 200)) / 50) * 50, diff = tot - money;
    if (!enough && Math.random() < 0.5) return Q({ tag: 'Budgeting', text: 'You have <b>' + gbp(money) + '</b>. You want ' + it[0].name + ' (' + gbp(it[0].p) + ') and ' + it[1].name + ' (' + gbp(it[1].p) + '). How much <b>more</b> money do you need? (in pounds)', answer: pounds(diff),
      hints: ['Find the total cost first.', 'Then find how far ' + gbp(money) + ' is from the total.'], explain: gbp(it[0].p) + ' + ' + gbp(it[1].p) + ' = ' + gbp(tot) + '. ' + gbp(tot) + ' − ' + gbp(money) + ' = ' + gbp(diff) + ' more is needed.' });
    return yn({ tag: 'Budgeting', text: 'You have <b>' + gbp(money) + '</b>. You want ' + it[0].name + ' (' + gbp(it[0].p) + ') and ' + it[1].name + ' (' + gbp(it[1].p) + '). Do you have <b>enough</b> money to buy both?', hints: ['Add the two prices together.', 'Compare the total with ' + gbp(money) + '.'],
      explain: gbp(it[0].p) + ' + ' + gbp(it[1].p) + ' = ' + gbp(tot) + '. ' + gbp(tot) + (enough ? ' is not more than ' : ' is more than ') + gbp(money) + ', so the answer is ' + (enough ? 'yes' : 'no') + '.' }, enough);
  }
  var GOODS = ['pens', 'bottles of water', 'yoghurts', 'apples', 'pencils', 'cakes'];
  function gBestBuy() {
    var g = pick(GOODS), n1 = pick([2, 3, 4, 5]), n2 = pick([6, 8, 10, 12]), u1 = rnd(6, 14) * 5, u2 = u1 + pick([-10, -5, 5, 10]); if (u2 < 10) u2 = u1 + 10;
    var p1 = n1 * u1, p2 = n2 * u2, a = Math.random() < 0.5, A = a ? [n1, p1, u1] : [n2, p2, u2], B = a ? [n2, p2, u2] : [n1, p1, u1], best = A[2] < B[2] ? 'Pack A' : 'Pack B';
    if (Math.random() < 0.3) return Q({ tag: 'Best buy', text: 'A pack of <b>' + A[0] + ' ' + g + '</b> costs <b>' + gbp(A[1]) + '</b>. How much does <b>one</b> cost? (in pounds)', answer: pounds(A[2]),
      hints: ['Share the price equally between the ' + g + '.', 'Divide ' + gbp(A[1]) + ' by ' + A[0] + '.'], explain: gbp(A[1]) + ' ÷ ' + A[0] + ' = ' + gbp(A[2]) + ' each.' });
    return mk({ tag: 'Best buy', text: '<b>Pack A:</b> ' + A[0] + ' ' + g + ' for ' + gbp(A[1]) + '. <b>Pack B:</b> ' + B[0] + ' ' + g + ' for ' + gbp(B[1]) + '. Which pack is the <b>better buy</b>?',
      hints: ['Work out the cost of one in each pack.', 'The pack with the lower cost for one is better value.'], explain: 'Pack A: ' + gbp(A[1]) + ' ÷ ' + A[0] + ' = ' + gbp(A[2]) + ' each. Pack B: ' + gbp(B[1]) + ' ÷ ' + B[0] + ' = ' + gbp(B[2]) + ' each. ' + best + ' costs less for one, so it is the better buy.' }, { options: ['Pack A', 'Pack B'], answer: best });
  }

  /* ================= PRIME NUMBERS ================= */
  function isPrime(n) { if (n < 2) return false; for (var d = 2; d * d <= n; d++) if (n % d === 0) return false; return true; }
  function smallest(n) { for (var d = 2; d * d <= n; d++) if (n % d === 0) return d; return n; }
  function maxFor(lv) { return lv <= 1 ? 30 : lv === 2 ? 60 : 110; }
  function comps(lv) { var m = maxFor(lv), out = []; for (var i = lv <= 1 ? 4 : 9; i <= m; i++) if (!isPrime(i) && (lv <= 1 || i % 2 === 1)) out.push(i); return out; }
  function prs(lv) { var m = maxFor(lv), out = []; for (var i = lv <= 1 ? 2 : 7; i <= m; i++) if (isPrime(i)) out.push(i); return out; }
  function factorText(n) { var d = smallest(n); return n + ' = ' + d + ' × ' + n / d; }
  function gSpotPrime(lv) {
    var p = pick(prs(lv)), cs = shuffle(comps(lv)).slice(0, 3), opts = shuffle([p].concat(cs));
    return mk({ tag: 'Prime numbers', text: 'Which of these numbers is a <b>prime number</b>?', hints: ['A prime number has exactly two factors: 1 and itself.', 'Look for a factor for each number. Try 2, 3, 5 and 7.'],
      explain: p + ' is prime. ' + cs.map(factorText).join(', ') + ', so those are not prime.' }, { options: opts.map(String), answer: String(p) });
  }
  function gPrimeYN(lv) {
    var prime = Math.random() < 0.45, n = prime ? pick(prs(lv)) : pick(comps(lv));
    return yn({ tag: 'Prime numbers', text: 'Is <b>' + n + '</b> a prime number?', hints: ['A prime number has only two factors: 1 and itself.', 'Test for a factor. Try dividing by 2, 3, 5 and 7.'],
      explain: prime ? n + ' cannot be divided exactly by any number other than 1 and ' + n + ', so it is prime.' : factorText(n) + ', so ' + n + ' has another factor and is not prime.' }, prime);
  }
  function nextPrime(n) { var m = n + 1; while (!isPrime(m)) m++; return m; }
  function gNextPrime(lv) {
    var n = lv <= 1 ? rnd(5, 28) : lv === 2 ? rnd(20, 60) : rnd(40, 105), q = nextPrime(n), skipped = [], m;
    for (m = n + 1; m < q; m++) skipped.push(factorText(m));
    return Q({ tag: 'Prime numbers', text: 'What is the <b>next prime number</b> after <b>' + n + '</b>?', answer: String(q), hints: ['Check each number after ' + n + ' in turn.', 'Even numbers (except 2) are never prime. Test the odd ones for factors.'],
      explain: skipped.length ? skipped.join(', ') + '. None of these are prime. ' + q + ' has no factors other than 1 and ' + q + ', so the next prime is ' + q + '.' : q + ' is the very next number and has no factors other than 1 and itself, so it is prime.' });
  }
  function gPrimeBetween(lv) {
    var m = maxFor(lv), a = rnd(1, Math.floor(m / 10) - 1) * 10, b = a + 10, list = [], i; for (i = a + 1; i < b; i++) if (isPrime(i)) list.push(i);
    return Q({ tag: 'Prime numbers', text: 'How many <b>prime numbers</b> are there between <b>' + a + '</b> and <b>' + b + '</b>?', answer: String(list.length), hints: ['List the odd numbers between ' + a + ' and ' + b + '.', 'Test each one for factors.'],
      explain: list.length ? 'The primes between ' + a + ' and ' + b + ' are ' + list.join(', ') + '. That is ' + list.length + '.' : 'There are no primes between ' + a + ' and ' + b + '. Every number in between has a factor.' });
  }

  /* ================= WHICH TOPIC GETS WHICH MAKER ================= */
  var MAP = {
    507: [[gParLines, 'e', 1], [gShapeSides, 'm', 1], [gNetSolid, 'e', 1], [gNetFaces, 'm', 1], [gNetClue, 'h', 1], [gCircPart, 'e', 1], [gTriPic, 'm', 1]],
    7: [[gParLines, 'e', 2], [gShapeSides, 'm', 2], [gNetSolid, 'e', 2], [gNetFaces, 'm', 2], [gNetClue, 'h', 2], [gGridMap, 'm', 2], [gTriPic, 'e', 2]],
    707: [[gParLines, 'e', 3], [gShapeSides, 'm', 3], [gNetSolid, 'e', 3], [gNetFaces, 'm', 3], [gNetClue, 'h', 3], [gGridMap, 'm', 3], [gTriPic, 'm', 3]],
    502: [[gRemMc, 'e', 1], [gRemOnly, 'e', 1], [gRemStory, 'm', 1], [gCountAdd, 'e', 1], [gCountChange, 'e', 1], [gNearDouble, 'e', 1], [gRoundAdj, 'm', 1], [gTens, 'm', 1]],
    2: [[gColAdd, 'e', 2], [gRemMc, 'e', 2], [gRemStory, 'm', 2], [gNearDouble, 'e', 2], [gRoundAdj, 'e', 2], [gMultNines, 'm', 2], [gMult525, 'm', 2], [gTens, 'm', 2], [gSplitMult, 'h', 2]],
    702: [[gColAdd, 'e', 3], [gRemMc, 'e', 3], [gRemStory, 'm', 3], [gRemDec, 'h', 3], [gNearDouble, 'e', 3], [gRoundAdj, 'm', 3], [gMultNines, 'm', 3], [gMult525, 'm', 3], [gTens, 'e', 3], [gSplitMult, 'h', 3]],
    505: [[gVolCount, 'e', 1], [gRuler, 'e', 1], [gBudget, 'e', 1], [gAfford, 'm', 1], [gBestBuy, 'm', 1]],
    5: [[gRuler, 'e', 2], [gBudget, 'e', 2], [gAfford, 'm', 2], [gBestBuy, 'm', 2]],
    510: [[gSpotPrime, 'e', 1], [gPrimeYN, 'e', 1], [gNextPrime, 'm', 1], [gPrimeBetween, 'm', 1]],
    10: [[gSpotPrime, 'e', 2], [gPrimeYN, 'e', 2], [gNextPrime, 'm', 2], [gPrimeBetween, 'm', 2]],
    710: [[gSpotPrime, 'e', 3], [gPrimeYN, 'e', 3], [gNextPrime, 'm', 3], [gPrimeBetween, 'm', 3]]
  };
  function bind(e) { var f = function () { return e[0](e[2]); }; Object.defineProperty(f, 'name', { value: e[0].name }); return f; }
  var prev = S.extraMakers;
  S.extraMakers = function (n, level) {
    var base = prev ? (prev(n, level) || []) : [], list = MAP[Number(n)];
    if (!list) return base;
    var pick1 = list.filter(function (x) { return level === 'low' ? x[1] === 'e' || (x[1] === 'm' && list.length < 4) : level === 'high' ? x[1] !== 'e' : true; });
    if (!pick1.length) pick1 = list;
    return pick1.map(bind).concat(base);
  };
  BT.bmx = { MAP: MAP, makers: { gParLines: gParLines, gShapeSides: gShapeSides, gNetSolid: gNetSolid, gNetFaces: gNetFaces, gNetClue: gNetClue, gTriPic: gTriPic, gCircPart: gCircPart, gGridMap: gGridMap, gRemMc: gRemMc, gRemOnly: gRemOnly, gRemStory: gRemStory, gRemDec: gRemDec, gCountAdd: gCountAdd, gCountChange: gCountChange, gNearDouble: gNearDouble, gColAdd: gColAdd, gRoundAdj: gRoundAdj, gMultNines: gMultNines, gMult525: gMult525, gTens: gTens, gSplitMult: gSplitMult, gVolCount: gVolCount, gRuler: gRuler, gBudget: gBudget, gAfford: gAfford, gBestBuy: gBestBuy, gSpotPrime: gSpotPrime, gPrimeYN: gPrimeYN, gNextPrime: gNextPrime, gPrimeBetween: gPrimeBetween } };

  /* ================= LESSONS (part "learn8") ================= */
  var sl = BT.sl, XV = BT.XV, NL = BT.NL;
  function table(rows, heads) { return K.table(rows, heads); }
  function L_nets() {
    return [
      sl('Nets of solid shapes', ['A net is a solid shape opened out flat. If you cut along some of the edges of a box and unfold it, you get its net.',
        'Cube: 6 squares. Cuboid: 6 rectangles. Triangular prism: 2 triangles and 3 rectangles. Square-based pyramid: 1 square and 4 triangles. Tetrahedron: 4 triangles.',
        'To find the solid, count the faces on the net and name their shapes.'],
        netsGallery(), 'Cereal boxes and chocolate cartons start life as a flat net that is folded and glued.', 'how to tell which solid a net folds to make.',
        ['A cube has many different nets. There are 11 of them.', 'A net always has as many shapes as the solid has faces.'],
        ['Example 1: 6 squares fold to make a cube.', 'Example 2: 4 triangles and 1 square fold to make a square-based pyramid.', 'Example 3: 2 triangles and 3 rectangles fold to make a triangular prism.']),
      XV('Which solid does the net make?', 'A net has 2 triangles and 3 rectangles. Which solid does it make?',
        ['Count the faces: 2 triangles and 3 rectangles is 5 faces.', 'Two matching triangles are the ends of the solid.', 'The 3 rectangles wrap around the sides.', 'A solid with triangle ends and rectangle sides is a triangular prism.'],
        'A triangular prism', function (k) { return netPic('triangular prism'); }, 'Opening a Toblerone box flat shows a net like this.', 'how to name a solid from the faces of its net.',
        ['Match the shapes of the faces to the solid.', 'Count the faces and edges to check.'], ['Example 1: 1 square + 4 triangles = square-based pyramid.', 'Example 2: 4 triangles = tetrahedron.', 'Example 3: 6 rectangles that are not all squares = cuboid.'])
    ];
  }
  function L_parperp() {
    return [
      sl('Parallel and perpendicular sides in shapes', ['Parallel lines never meet and stay the same distance apart. Perpendicular lines meet at a right angle, 90°.',
        'A rectangle has two pairs of parallel sides and four right angles. A trapezium has just one pair of parallel sides.', 'A square corner is the quickest check for a right angle.'],
        BT.parperp(), 'The rungs of a ladder are parallel. The wall and the floor meet at a right angle.', 'how to spot parallel and perpendicular lines and sides in shapes.',
        ['Opposite sides of a parallelogram are parallel, but its corners are not right angles.', 'Two lines can meet without being perpendicular. They are perpendicular only when the angle is 90°.'],
        ['Example 1: A rectangle has 2 pairs of parallel sides.', 'Example 2: A right-angled triangle has 1 right angle.', 'Example 3: A regular hexagon has 3 pairs of parallel sides.'])
    ];
  }
  function L_grid() {
    return [
      sl('Grid references', ['A grid reference tells you which square something is in. The letter is the column across the bottom. The number is the row up the side.',
        'Always say the letter first, then the number: C3.', 'To find a place, go across to the letter, then up to the number.'],
        BT.gridMap([[2, 3, 'P']], [2, 3]), 'Atlases and walking maps use grid references so people can find the same square.', 'how to give and read a grid reference.',
        ['Across first, then up. It is the same idea as coordinates, but with a letter for the column.', 'You can also count squares between two places by counting the letters or the numbers.'],
        ['Example 1: The park is in column C, row 3, so it is at C3.', 'Example 2: Two squares to the right of C3 is E3.', 'Example 3: One square up from C3 is C4.'])
    ];
  }
  function L_rem(lv) {
    var n = lv <= 1 ? [47, 5, 9, 2] : lv === 2 ? [83, 6, 13, 5] : [250, 12, 20, 10], fmt = String, e = n[0] - n[1] * n[2];
    var near = n[1] * n[2];
    return [
      XV('Division with remainders', 'Work out ' + n[0] + ' ÷ ' + n[1] + '.',
        ['Find the biggest multiple of ' + n[1] + ' that is not more than ' + n[0] + ': ' + n[1] + ' × ' + n[2] + ' = ' + near + '.', n[0] + ' − ' + near + ' = ' + e + '. That is what is left over.', 'Write the answer as ' + n[2] + ' remainder ' + e + ' (' + n[2] + ' r ' + e + ').', 'Check: ' + n[2] + ' × ' + n[1] + ' + ' + e + ' = ' + n[0] + '.'],
        n[0] + ' ÷ ' + n[1] + ' = ' + n[2] + ' r ' + e, function (k) { return NL(Math.floor(near / 10) * 10 - (lv > 2 ? 0 : 0), Math.ceil(n[0] / 10) * 10 + (lv > 2 ? 0 : 0), { lab: lv > 2 ? 10 : 5, tick: lv > 2 ? 10 : 1, marks: k >= 2 ? [[near, 215], [n[0], 22]] : [[near, 215]], jumps: k >= 2 ? [[near, n[0], '+' + e]] : [], alt: 'A number line from ' + near + ' to ' + n[0] }); },
        'Sharing sweets: some are always left over when they cannot be shared equally.', 'how to divide when the numbers do not share out exactly.',
        ['The remainder is always smaller than the number you divide by.', 'Check by multiplying back and adding the remainder.'], ['Example 1: 23 ÷ 4 = 5 r 3.', 'Example 2: 50 ÷ 6 = 8 r 2.', 'Example 3: 100 ÷ 9 = 11 r 1.']),
      XV('Remainders in real life', '50 eggs are packed in boxes of 6. How many boxes are needed?',
        ['Divide: 50 ÷ 6 = 8 remainder 2.', '8 boxes are full, with 2 eggs left over.', 'Those 2 eggs still need a box.', 'So 9 boxes are needed.'],
        '9 boxes', function () { return table([['How many full boxes?', '8'], ['Eggs left over', '2'], ['Boxes needed', '9']], ['Question', 'Answer']); }, 'Shops and packers round up so nothing is left without a box.', 'how to decide what to do with the remainder.',
        ['“How many are needed?” means round up. “How many are full?” means ignore the remainder.', 'Read the question carefully before you decide.'], ['Example 1: 25 pupils, 4 per car. 25 ÷ 4 = 6 r 1, so 7 cars are needed.', 'Example 2: 25 pupils, 4 per car. 6 cars are full.', 'Example 3: 17 sweets between 5 children is 3 each and 2 left over.'])
    ];
  }
  function L_mental(lv) {
    var a = lv <= 1 ? 46 : lv === 2 ? 348 : 1257, m = lv <= 1 ? 29 : lv === 2 ? 99 : 398, r = lv <= 1 ? 30 : lv === 2 ? 100 : 400, d = r - m;
    return [
      XV('Rounding to add and subtract', 'Work out ' + (H.fmtInt ? H.fmtInt(a) : a) + ' + ' + m + ' in your head.',
        [m + ' is just ' + d + ' less than ' + r + '.', 'Add ' + r + ' instead: ' + a + ' + ' + r + ' = ' + (a + r) + '.', 'You added ' + d + ' too much, so take ' + d + ' away: ' + (a + r) + ' − ' + d + ' = ' + (a + m) + '.'],
        (H.fmtInt ? H.fmtInt(a) : a) + ' + ' + m + ' = ' + (H.fmtInt ? H.fmtInt(a + m) : (a + m)), function (k) { return table([['Round', m + ' → ' + r], ['Add', a + ' + ' + r + ' = ' + (a + r)], ['Adjust', (a + r) + ' − ' + d + ' = ' + (a + m)]].slice(0, k), ['Step', 'Working']); },
        'Adding £2.99 to £10 in your head is easier as £3 take away 1p.', 'how to use a friendly round number to add or subtract quickly.',
        ['Round up, work it out, then correct the answer.', 'The same idea works for subtracting.'], ['Example 1: 56 + 19 = 56 + 20 − 1 = 75.', 'Example 2: 83 − 29 = 83 − 30 + 1 = 54.', 'Example 3: 250 + 99 = 250 + 100 − 1 = 349.']),
      XV('Near doubles and multiplying in your head', lv <= 2 ? 'Work out 7 × 19 in your head.' : 'Work out 36 × 25 in your head.',
        lv <= 2 ? ['19 is 1 less than 20.', '7 × 20 = 140.', 'Take away one 7: 140 − 7 = 133.'] : ['There are four 25s in 100.', 'Divide 36 by 4: 36 ÷ 4 = 9.', 'Multiply by 100: 9 × 100 = 900.'],
        lv <= 2 ? '7 × 19 = 133' : '36 × 25 = 900', function () { return lv <= 2 ? table([['7 × 20', '140'], ['7 × 1', '7'], ['7 × 19', '133']], ['Working', 'Answer']) : table([['36 ÷ 4', '9'], ['9 × 100', '900'], ['36 × 25', '900']], ['Working', 'Answer']); },
        'Working out the price of 25 items at 36p each is faster using quarters of £1.', 'how to multiply quickly by using friendly numbers.',
        ['Near doubles: 35 + 36 is double 35 plus 1.', 'To multiply by 5, multiply by 10 and halve. To multiply by 25, think of 100 split into four 25s.'], ['Example 1: 35 + 36 = 70 + 1 = 71.', 'Example 2: 18 × 5 = 180 ÷ 2 = 90.', 'Example 3: 12 × 25 = 300.'])
    ];
  }
  function L_colAdd(lv) {
    var big = lv >= 3;
    return [
      XV('Column addition with carrying', big ? 'Work out 48,372 + 29,659.' : 'Work out 3,486 + 2,759.',
        big ? ['Line up the digits so ones are under ones.', 'Ones: 2 + 9 = 11. Write 1 and carry 1.', 'Tens: 7 + 5 + 1 = 13. Write 3 and carry 1.', 'Hundreds: 3 + 6 + 1 = 10. Write 0 and carry 1.', 'Thousands: 8 + 9 + 1 = 18. Write 8 and carry 1.', 'Ten thousands: 4 + 2 + 1 = 7.'] :
          ['Line up the digits so ones are under ones.', 'Ones: 6 + 9 = 15. Write 5 and carry 1.', 'Tens: 8 + 5 + 1 = 14. Write 4 and carry 1.', 'Hundreds: 4 + 7 + 1 = 12. Write 2 and carry 1.', 'Thousands: 3 + 2 + 1 = 6.'],
        big ? '48,372 + 29,659 = 78,031' : '3,486 + 2,759 = 6,245',
        function () { return big ? table([['', '4', '8', '3', '7', '2'], ['+', '2', '9', '6', '5', '9'], ['=', '7', '8', '0', '3', '1']], ['', 'TTh', 'Th', 'H', 'T', 'O']) : table([['', '3', '4', '8', '6'], ['+', '2', '7', '5', '9'], ['=', '6', '2', '4', '5']], ['', 'Th', 'H', 'T', 'O']); },
        'Adding up the crowd at two football matches uses column addition.', 'how to add big numbers in columns, carrying when a column is 10 or more.',
        ['Always start with the ones column on the right.', 'Estimate first to check your answer makes sense.'], ['Example 1: 678 + 245 = 923.', 'Example 2: 4,509 + 3,876 = 8,385.', 'Example 3: 12,450 + 8,790 = 21,240.'])
    ];
  }
  function L_order() {
    return [
      XV('Order of operations', 'Work out 6 + 4 × 2.', ['Brackets first, then multiply and divide, then add and subtract.', 'There are no brackets, so multiply first: 4 × 2 = 8.', 'Now add: 6 + 8 = 14.'], '6 + 4 × 2 = 14',
        function () { return table([['B', 'Brackets'], ['×  ÷', 'Multiply and divide'], ['+  −', 'Add and subtract']], ['Order', 'Do these']); }, 'A phone bill adds a fixed charge to the cost of each call: the calls are multiplied before the fixed charge is added.', 'the order to do the operations in.',
        ['Work left to right when the operations have the same rank.', 'Brackets can change the order: (6 + 4) × 2 = 20.'], ['Example 1: 10 − 2 × 3 = 4.', 'Example 2: (10 − 2) × 3 = 24.', 'Example 3: 12 ÷ 4 + 5 = 8.'])
    ];
  }
  function L_volume() {
    return [
      XV('Volume: counting cubes', 'How many 1 cm cubes fill this box?', ['Count the cubes in one layer: 3 × 2 = 6.', 'There are 2 layers.', '6 × 2 = 12.'], '12 cubes, so the volume is 12 cm³',
        function () { return BT.box(3, 2, 2); }, 'The volume of a lunch box tells you how much food fits inside it.', 'how to find volume by counting cubes.', ['Volume is the space inside a solid. We measure it in cubes.', 'Length × width gives one layer. Multiply by the height for all the layers.'], ['Example 1: 2 × 2 × 2 = 8 cubes.', 'Example 2: 4 × 3 × 1 = 12 cubes.', 'Example 3: 3 × 3 × 3 = 27 cubes.'])
    ];
  }
  function L_ruler() {
    return [
      XV('Reading a ruler', 'How long is the strip?', ['Line the start of the strip up with 0.', 'Read the whole centimetres where it ends: 6.', 'Count the small marks after 6. Each one is 1 millimetre. There are 5.', 'The length is 6 cm and 5 mm, which is 6.5 cm.'], '6.5 cm',
        function () { return BT.ruler(6.5); }, 'Tailors and carpenters measure to the nearest millimetre.', 'how to read a ruler in centimetres and millimetres.', ['10 mm make 1 cm.', 'If the strip does not start at 0, subtract the start reading from the end reading.'], ['Example 1: 7 cm 3 mm = 7.3 cm.', 'Example 2: A strip from 2 cm to 8 cm is 6 cm long.', 'Example 3: 45 mm = 4.5 cm.'])
    ];
  }
  function L_budget() {
    return [
      XV('Budgeting', 'You have £10. You buy a book for £4.50 and a pen for £2.30. How much is left?', ['Add the prices: £4.50 + £2.30 = £6.80.', 'Take the total from your money: £10 − £6.80.', '£10 − £6.80 = £3.20.'], '£3.20 left',
        function () { return table([['Book', '£4.50'], ['Pen', '£2.30'], ['Total', '£6.80'], ['Left from £10', '£3.20']], ['Item', 'Cost']); }, 'A budget helps you plan what you can afford before you go shopping.', 'how to plan spending and work out how much is left.', ['Add the costs first, then subtract from the money you have.', 'Estimate with round numbers to check: about £5 + £2 = £7, so about £3 left.'], ['Example 1: £5 − £3.20 = £1.80.', 'Example 2: £20 − (£8 + £7.50) = £4.50.', 'Example 3: Two items at £6.25 cost £12.50 altogether.']),
      XV('Best buy', 'Pack A: 4 pens for £2.00. Pack B: 6 pens for £2.70. Which is the better buy?', ['Work out the cost of one pen in each pack.', 'Pack A: £2.00 ÷ 4 = 50p each.', 'Pack B: £2.70 ÷ 6 = 45p each.', 'Pack B costs less for one pen, so it is the better buy.'], 'Pack B is the better buy',
        function () { return table([['Pack A', '4 pens', '£2.00', '50p'], ['Pack B', '6 pens', '£2.70', '45p']], ['Pack', 'Pens', 'Price', 'Cost of one']); }, 'Shops show the price per 100 g so you can compare different sizes.', 'how to compare prices to find the best value.', ['Always compare the cost of one (or the cost per 100 g).', 'A bigger pack is not always cheaper for each item.'], ['Example 1: 3 yoghurts for £1.20 is 40p each.', 'Example 2: 10 pencils for £3 is 30p each.', 'Example 3: 2 for £1.50 is 75p each.'])
    ];
  }
  function L_primes(lv) {
    var n = lv <= 1 ? 39 : lv === 2 ? 51 : 91, d = lv <= 1 ? 3 : lv === 2 ? 3 : 7, q = n / d;
    var why = lv <= 2 ? 'Add the digits: ' + (lv <= 1 ? '3 + 9 = 12' : '5 + 1 = 6') + ', which is in the 3 times table, so ' + n + ' is divisible by 3.' : 'Try 7: 7 × 13 = 91.';
    return [
      XV('Testing for primes', 'Is ' + n + ' a prime number?', ['A prime has exactly two factors: 1 and itself.', n + ' is odd, so it is not divisible by 2. It does not end in 0 or 5, so it is not divisible by 5.', why, n + ' = ' + d + ' × ' + q + ', so it has another factor. ' + n + ' is not prime.'],
        'No: ' + n + ' = ' + d + ' × ' + q, function () { return table([['2', 'ends in 0, 2, 4, 6 or 8'], ['3', 'digits add to a multiple of 3'], ['5', 'ends in 0 or 5'], ['7', 'try the 7 times table']], ['Test', 'Rule']); },
        'Secret codes use very large prime numbers.', 'how to test whether a number is prime.', ['You only need to test primes up to about the square root of the number.', '2 is the only even prime number. 1 is not prime.'], ['Example 1: 23 is prime.', 'Example 2: 57 = 3 × 19, so it is not prime.', 'Example 3: 97 is prime.'])
    ];
  }
  function L_circle() {
    return [
      sl('Parts of a circle', ['The centre is the point in the middle. The radius is a line from the centre to the edge.', 'The diameter is a line right across the circle through the centre. It is twice as long as the radius.', 'The circumference is the distance all the way round the edge.'],
        BT.circle(), 'A bicycle wheel has a centre, spokes like radii, and a rim like the circumference.', 'the names of the parts of a circle.', ['Diameter = 2 × radius. Radius = diameter ÷ 2.', 'Every radius of a circle is the same length.'], ['Example 1: Radius 5 cm means diameter 10 cm.', 'Example 2: Diameter 14 cm means radius 7 cm.', 'Example 3: The distance round a circle is its circumference.'])
    ];
  }
  var LESS = [
    [507, 'Nets and circles', function () { return L_nets().concat(L_circle()); }],
    [7, 'Nets, lines and grids', function () { return L_nets().concat(L_parperp(), L_grid()); }],
    [707, 'Nets, lines and grids', function () { return L_nets().concat(L_parperp(), L_grid()); }],
    [502, 'Remainders and order', function () { return L_rem(1).concat(L_order()); }],
    [2, 'Remainders and mental methods', function () { return L_rem(2).concat(L_mental(2), L_colAdd(2)); }],
    [702, 'Remainders and mental methods', function () { return L_rem(3).concat(L_mental(3), L_colAdd(3)); }],
    [505, 'Volume, rulers and budgets', function () { return L_volume().concat(L_ruler(), L_budget()); }],
    [5, 'Rulers and budgets', function () { return L_ruler().concat(L_budget()); }],
    [510, 'Testing for primes', function () { return L_primes(1); }],
    [10, 'Testing for primes', function () { return L_primes(2); }],
    [710, 'Testing for primes', function () { return L_primes(3); }]
  ];
  var META = {
    'Nets of solid shapes': { tags: ['Nets of solids'], story: 'Open a cereal box very carefully along its glued edges and lay it flat. The flat shape you get is the net. Packaging designers draw the net first, because every fold has to land in exactly the right place.',
      insight: ['A net works because each face of the solid becomes one flat shape, and the shapes stay joined along the edges that will fold together. That is why the number and kinds of shapes on a net tell you the solid before you fold anything.', 'Watch for nets that look right but will not fold: two squares that would land on top of each other, or a gap where a face is missing. Counting the faces and checking every edge joins up is a quick safety check.'] },
    'Which solid does the net make?': { tags: ['Nets of solids'], story: 'A chocolate bar in a triangular box is a triangular prism. Before it was folded, the box was a flat net with two triangles and three rectangles, cut out by a machine.',
      insight: ['Two triangles with three rectangles means a prism, because the rectangles wrap around between the two matching ends. One square with four triangles that meet at a point means a pyramid.', 'Check your answer by counting. A net always has as many shapes as the solid has faces.'] },
    'Parts of a circle': { tags: ['Parts of a circle'], story: 'A bicycle wheel has a centre where the axle sits, spokes that run from the centre to the rim like radii, and a rim that is the circumference.',
      insight: ['The radius is the same wherever you measure it, because every point on the edge is the same distance from the centre. That is what makes a circle round.', 'The diameter is two radii end to end, so it is always twice the radius. A common slip is to mix them up. Radius: centre to edge. Diameter: right across.'] },
    'Parallel and perpendicular sides in shapes': { tags: ['Parallel and perpendicular lines'], story: 'The rungs of a ladder are parallel, so they stay the same distance apart. The ladder leans against a wall that stands at a right angle to the ground, so the wall and the ground are perpendicular.',
      insight: ['Parallel is about direction: two lines that point the same way never meet. Perpendicular is about the angle: two lines that meet at exactly 90°.', 'Shapes with slanted sides can still have parallel sides. A parallelogram has two pairs of parallel sides but no right angles, which shows the two ideas are separate.'] },
    'Grid references': { tags: ['Grid references'], story: 'A walking map is covered in a grid of lettered columns and numbered rows. When you phone for help and say you are at D3, the rescue team knows exactly which square to search.',
      insight: ['Two pieces of information pin down one square: the column and the row. Giving the letter first and the number second is a rule everybody shares, so everybody finds the same square.', 'The usual slip is to swap the order. Remember: along the corridor first, then up the stairs. Counting the squares between two places is the same as counting letters across or numbers up.'] },
    'Division with remainders': { tags: ['Division with remainders'], story: 'You have 23 sweets to share between 4 friends. Everyone gets 5, and 3 sweets are left over. That leftover is the remainder.',
      insight: ['A remainder is what is left when a number cannot be shared out equally. It is always smaller than the number you divide by, otherwise you could make one more group.', 'To check, multiply the answer by the number you divided by and add the remainder. You should land back on the number you started with.'] },
    'Remainders in real life': { tags: ['Remainders in real life', 'Division with remainders'], story: 'A minibus seats 15 and 100 pupils are going on a trip. 100 divided by 15 is 6 remainder 10. The 10 pupils left over still need a seat, so the school must book 7 minibuses, not 6.',
      insight: ['The sum is the same each time, but the question decides what to do with the remainder. If you are asked how many are needed, round up. If you are asked how many are full, ignore the remainder.', 'Read the last sentence of the problem first and ask: do I need one more, or do I leave the extras out?'] },
    'Order of operations': { tags: ['Order of operations'], story: 'A taxi charges £3 to start and £2 for every mile. For 4 miles you work out 4 × 2 = 8 first and then add 3, which gives £11. If you added 3 + 4 first you would get the wrong bill.',
      insight: ['The order of operations is a shared agreement so everybody gets the same answer: brackets first, then multiply and divide, then add and subtract.', 'Brackets can change the order on purpose: 6 + 4 × 2 is 14, but (6 + 4) × 2 is 20. When + and − (or × and ÷) sit side by side, work from left to right.'] },
    'Rounding to add and subtract': { tags: ['Rounding to add and subtract'], story: 'A pair of trainers costs £49.99. In your head you think £50, work out your sum, and then take off 1p. Shops price things just under a round number to look cheaper, and rounding quickly undoes the trick.',
      insight: ['Adding 99 is the same as adding 100 and then taking 1 away. We use a friendly round number because it is easy to work with, then put right the small difference.', 'The slip to avoid is correcting the wrong way round. If you added too much, take some away. If you added too little, add some back.'] },
    'Near doubles and multiplying in your head': { tags: ['Near doubles', 'Multiplying in your head', 'Multiply and divide by 10, 100 and 1000'], story: 'You are buying 4 packs of stickers at £2.50 each. Two packs cost £5, so four packs cost double that, £10. Doubling and halving let you do money sums in your head as fast as a calculator.',
      insight: ['Near doubles use what you already know: double 35 is 70, so 35 + 36 is just one more. Multiplying by 5 is multiplying by 10 and halving, and multiplying by 25 is thinking of 100 split into four equal parts.', 'Mental methods work because you change a hard sum into an easy one and then put right any difference. Check by estimating: 7 × 19 must be close to 7 × 20 = 140.'] },
    'Column addition with carrying': { tags: ['Column addition'], story: 'Two football matches have crowds of 3,486 and 2,759. To find the total, the club adds in columns, starting with the ones and carrying whenever a column reaches ten or more.',
      insight: ['Column addition works because every digit stays in its own place. When a column adds up to ten or more, ten of that place becomes one of the next place, so we carry it across.', 'Start on the right, write one digit under each column and carry the rest. An estimate first, like 3,500 + 2,800 = 6,300, tells you whether the answer is about right.'] },
    'Volume: counting cubes': { tags: ['Volume by counting cubes'], story: 'A lunch box is like a small cuboid. If one layer holds 6 sugar cubes and you can stack 2 layers, the box holds 12. Volume tells you how much fits inside a space.',
      insight: ['Volume is the amount of space inside a solid, and we measure it by counting how many equal cubes fit. One layer is length times width, so the whole box is the cubes in one layer times the number of layers.', 'Do not mix up volume with area. Area counts flat squares, and volume counts cubes that fill space.'] },
    'Reading a ruler': { tags: ['Measuring with a ruler'], story: 'When you measure a pencil for a project, you line one end up with 0, read the whole centimetres, and then count the small marks for millimetres. Carpenters and dressmakers measure in exactly the same way.',
      insight: ['A ruler is a number line with equal steps. The big numbers are centimetres and the small marks are millimetres, ten of them in every centimetre. Reading both gives a precise length, such as 6 cm 5 mm = 6.5 cm.', 'The usual mistake is to read from the edge of the ruler instead of from 0. If an object does not start at 0, subtract the start reading from the end reading.'] },
    'Budgeting': { tags: ['Budgeting'], story: 'Before a school trip you have £10 for the shop. You add up the prices of what you want, take the total from £10 and see what is left. A budget stops you finding out at the till that you do not have enough.',
      insight: ['A budget is a plan for your money. Add the costs first, then take the total away from what you have to find what is left.', 'Round the prices to check: £4.50 + £2.30 is about £5 + £2 = £7, so about £3 should be left.'] },
    'Best buy': { tags: ['Best buy'], story: 'At the supermarket a pack of 4 pens costs £2.00 and a pack of 6 costs £2.70. The bigger pack looks dearer, but shoppers who work out the price of one pen find the 6-pack is cheaper per pen.',
      insight: ['To compare prices fairly, compare the cost of one item, or the cost for the same amount, such as per 100 g. Dividing the price by the number in the pack does this.', 'A bigger pack is not always better value, and a cheaper pack is not always the better buy. Always work it out.'] },
    'Testing for primes': { tags: ['Prime numbers'], story: 'When you send a message or pay online, the computer scrambles it using very large prime numbers. Primes are hard to find and hard to break apart, which is why they keep information safe.',
      insight: ['A prime has exactly two factors, so a quick way to test a number is to look for any other factor. Try the small primes 2, 3, 5 and 7 in turn. If none divides it exactly, a number below 121 is prime.', 'Remember that 1 is not prime and 2 is the only even prime. Numbers like 51 and 91 look prime but are not: 51 = 3 × 17 and 91 = 7 × 13.'] }
  };
  LESS.forEach(function (e) { try { var ss = e[2](); ss.forEach(function (x) { var m = META[x.title]; if (m) { x.tags = m.tags; x.story = m.story; x.insight = m.insight; } }); BT.add(e[0], 'learn8', e[1], ss); } catch (err) { if (window.console) console.warn('bmx lesson ' + e[0], err); } });
})();
