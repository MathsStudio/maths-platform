/* Spatial awareness and reasoning: question generators (part 2 of 3). Each generator takes a level lv: 1 = P5, 2 = P6, 3 = P7, 4 = S1, 5 = S2, 6 = S3 */
(function () { 'use strict';
var S = Studio, H = S.h, K = S.kit, R = window.SPA, Q = K.Q, rnd = H.rnd, pick = H.pick, shuffle = H.shuffle;
var G = R.G = {};
function mc(tag, text, pic, data, options, answer, hints, explain) {
  var o = options.map(String), a = String(answer); if (o.indexOf(a) === -1) o[0] = a;
  var seen = {}; o = o.filter(function (x) { if (seen[x]) return false; seen[x] = 1; return true; });
  var letters = o.every(function (x) { return /^[A-F]$/.test(x); }), yn = o.length === 2 && o.indexOf('Yes') > -1 && o.indexOf('No') > -1;
  o = letters ? o.slice().sort() : yn ? ['Yes', 'No'] : shuffle(o);
  return Q({ tag: tag, type: 'mc', text: text, pic: pic, data: data, options: o, answer: a, hints: hints, explain: explain });
}
function T(v) { return H.trimNum(v); }
function pad3(n) { n = ((n % 360) + 360) % 360; return (n < 10 ? '00' : n < 100 ? '0' : '') + n; }
var D8 = ['North', 'North-East', 'East', 'South-East', 'South', 'South-West', 'West', 'North-West'];
function compass(ang, size) {
  size = size || 130; var c = size / 2, r = size / 2 - 22, rad = (ang - 90) * Math.PI / 180, ex = c + r * Math.cos(rad), ey = c + r * Math.sin(rad), s = '';
  s += '<circle cx="' + c + '" cy="' + c + '" r="' + (r + 4) + '" style="fill:var(--surface);stroke:var(--line);stroke-width:2"/>';
  [['N', 0, -1], ['E', 1, 0], ['S', 0, 1], ['W', -1, 0]].forEach(function (d) { s += '<text x="' + (c + d[1] * (r + 14)) + '" y="' + (c + d[2] * (r + 14) + 5) + '" text-anchor="middle" style="font-size:14px;font-weight:700;fill:var(--fg)">' + d[0] + '</text>'; });
  s += '<line x1="' + c + '" y1="' + c + '" x2="' + ex.toFixed(1) + '" y2="' + ey.toFixed(1) + '" style="stroke:' + R.hsl(22) + ';stroke-width:5;stroke-linecap:round"/>';
  var a1 = rad + 2.7, a2 = rad - 2.7; s += '<polygon points="' + ex.toFixed(1) + ',' + ey.toFixed(1) + ' ' + (ex + 12 * Math.cos(a1)).toFixed(1) + ',' + (ey + 12 * Math.sin(a1)).toFixed(1) + ' ' + (ex + 12 * Math.cos(a2)).toFixed(1) + ',' + (ey + 12 * Math.sin(a2)).toFixed(1) + '" style="fill:' + R.hsl(22) + ';stroke:' + R.hsl(22) + ';stroke-width:2"/>';
  s += '<circle cx="' + c + '" cy="' + c + '" r="4" style="fill:var(--fg)"/>';
  return R.svg(size, size, s, 'A compass with an arrow', size + 20);
}
R.compass = compass;

/* ---------- turns and bearings ---------- */
G.turn = function (lv) {
  var cw = Math.random() < 0.5, word = cw ? 'clockwise' : 'anticlockwise';
  if (lv >= 4) {
    var b = rnd(1, 35) * 10, t = pick([30, 40, 50, 60, 70, 90, 110, 120, 130, 150, 160, 180, 200, 230, 250]), nb = ((cw ? b + t : b - t) % 360 + 360) % 360;
    return Q({ tag: 'Turns and bearings', text: 'A ship is heading on a bearing of <b>' + pad3(b) + '°</b>. It turns <b>' + t + '°</b> ' + word + '. What is its new bearing? (3 figures, like 045)', pic: compass(b), data: 'A compass with an arrow showing a bearing of ' + pad3(b) + ' degrees.', answer: String(nb), show: pad3(nb), unit: '°', hints: ['Bearings are measured clockwise from north.', cw ? 'Turning clockwise adds the angle.' : 'Turning anticlockwise takes the angle away.', 'If the answer is more than 360 take 360 away. If it is below 0 add 360.'], explain: pad3(b) + (cw ? ' + ' : ' − ') + t + ' = ' + (cw ? b + t : b - t) + ', which is ' + pad3(nb) + '° as a bearing.' });
  }
  var set = lv >= 3 ? D8 : ['North', 'East', 'South', 'West'], step = lv >= 3 ? 45 : 90, si = rnd(0, set.length - 1), ts = lv >= 3 ? pick([45, 90, 135, 180, 225, 270]) : pick([90, 180, 270]);
  var ni = (si + (cw ? 1 : -1) * ts / step + set.length * 4) % set.length, start = si * step, opts = lv >= 3 ? shuffle(D8.slice()).slice(0, 4) : set.slice();
  return mc('Turns and bearings', 'The arrow points <b>' + set[si] + '</b>. It turns <b>' + ts + '°</b> ' + word + '. Which way does it point now?', compass(start), 'A compass with an arrow pointing ' + set[si] + '.', opts.concat(set[ni]), set[ni], ['A quarter turn is ' + 90 + '°, a half turn is 180°.', 'Clockwise goes North, East, South, West.', 'Count the turns one step at a time.'], 'Turning ' + ts + '° ' + word + ' from ' + set[si] + ' points ' + set[ni] + '.');
};
G.facing = function (lv) {
  var dirs = ['North', 'East', 'South', 'West'], i = rnd(0, 3), n = rnd(2, lv >= 3 ? 4 : 3), moves = [], idx = i, txt = [];
  for (var k = 0; k < n; k++) { var m = pick(['left', 'right', 'right', 'left', 'around']); moves.push(m); idx = (idx + (m === 'right' ? 1 : m === 'left' ? 3 : 2)) % 4; txt.push(m === 'around' ? 'turn around' : 'turn ' + m); }
  return mc('Turns and bearings', 'You face <b>' + dirs[i] + '</b>. You ' + txt.join(', then ') + '. Which way do you face now?', compass(i * 90), 'A compass with an arrow pointing ' + dirs[i] + '.', dirs, dirs[idx], ['Imagine you are standing on the compass.', 'A right turn is a quarter turn clockwise. A left turn is a quarter turn anticlockwise.', 'Do one turn at a time and say the direction each time.'], 'Starting facing ' + dirs[i] + ', the turns end facing ' + dirs[idx] + '.');
};

/* ---------- mirror images and rotations of a piece ---------- */
var CHIRAL = [0, 1, 2, 3, 4, 5];
function pieceChoices(good, wrongs) {
  var seen = {}, res = [good];
  seen[R.pkey(good)] = 1;
  wrongs.forEach(function (w) { var k = R.pkey(w); if (!seen[k]) { seen[k] = 1; res.push(w); } });
  return res;
}
function optionsPieces(opts, y) {
  var out = '', gap = 12, box = 4, cell = 16, wbox = box * cell + 8;
  opts.forEach(function (o, i) { var x = i * (wbox + gap); out += '<rect x="' + x + '" y="' + y + '" width="' + wbox + '" height="' + wbox + '" rx="8" style="fill:var(--surface);stroke:var(--line);stroke-width:1.5"/><g transform="translate(' + x + ' ' + y + ')">' + R.pieceSvg(o, cell, 215, box) + '</g>' + R.letter('ABCD'.charAt(i), x + wbox / 2, y + wbox + 18); });
  return { svg: out, w: opts.length * wbox + (opts.length - 1) * gap };
}
G.mirror = function (lv) {
  var base, tries = 0, choices, vertical = lv < 2 ? true : Math.random() < 0.5;
  do {
    base = R.PIECES[pick(CHIRAL)]; if (Math.random() < 0.5) base = R.flipLR(base); base = R.norm(base);
    var good = vertical ? R.flipLR(base) : R.flipUD(base);
    choices = pieceChoices(good, [base, vertical ? R.flipUD(base) : R.flipLR(base), R.turnCW(base), R.turnCCW(base), R.norm(base.map(function (c) { return [-c[0], -c[1]]; }))]);
    tries++;
  } while (choices.length < 4 && tries < 40);
  var rest = choices.slice(1, 4), opts = shuffle([choices[0]].concat(rest)), ans = 'ABCD'.charAt(opts.indexOf(choices[0]));
  var wbox = 72, op = optionsPieces(opts, 120), W = op.w, out = '';
  if (vertical) { out += '<g transform="translate(' + (W / 2 - 100) + ' 12)">' + R.pieceSvg(base, 16, 215, 4) + '</g><line x1="' + (W / 2 - 8) + '" y1="2" x2="' + (W / 2 - 8) + '" y2="100" style="stroke:' + R.hsl(22) + ';stroke-width:3;stroke-dasharray:7 5"/><text x="' + (W / 2 + 6) + '" y="54" style="font-size:14px;font-weight:700;fill:var(--fg)">mirror line</text>'; }
  else { out += '<g transform="translate(' + (W / 2 - 122) + ' 2)">' + R.pieceSvg(base, 16, 215, 4) + '</g><line x1="' + (W / 2 - 140) + '" y1="86" x2="' + (W / 2 - 30) + '" y2="86" style="stroke:' + R.hsl(22) + ';stroke-width:3;stroke-dasharray:7 5"/><text x="' + (W / 2 - 14) + '" y="91" style="font-size:14px;font-weight:700;fill:var(--fg)">mirror line</text>'; }
  out += op.svg;
  return mc('Mirror images', 'The shape is reflected in the <b>' + (vertical ? 'vertical' : 'horizontal') + ' mirror line</b>. Which picture shows its mirror image?', R.svg(W, 120 + 72 + 24, out, 'A shape next to a mirror line and four possible pictures', 360), 'A shape is drawn beside a ' + (vertical ? 'vertical' : 'horizontal') + ' mirror line. Pictures A to D show four possible mirror images.', ['A', 'B', 'C', 'D'], ans, ['A mirror image is the same distance from the mirror line, but on the other side.', vertical ? 'Left and right swap. Up and down stay the same.' : 'Up and down swap. Left and right stay the same.', 'Try each picture. Pick the one that looks like the shape in a mirror, not the same shape turned.'], 'Picture ' + ans + ' shows the mirror image. ' + (vertical ? 'The parts nearest the mirror stay nearest, and left and right swap.' : 'The parts nearest the mirror stay nearest, and up and down swap.'));
};
G.turnShape = function (lv) {
  var base, choices, tries = 0, kinds = lv < 3 ? [['quarter turn clockwise', R.turnCW], ['quarter turn anticlockwise', R.turnCCW], ['half turn', function (c) { return R.turnCW(R.turnCW(c)); }]] : [['quarter turn clockwise', R.turnCW], ['quarter turn anticlockwise', R.turnCCW], ['half turn', function (c) { return R.turnCW(R.turnCW(c)); }], ['three-quarter turn clockwise', R.turnCCW]], kd = pick(kinds), f = kd[1];
  do {
    base = R.norm(R.PIECES[pick(CHIRAL)]); var good = f(base);
    choices = pieceChoices(good, [R.flipLR(good), R.flipUD(good), base, R.turnCW(good), R.turnCCW(good), R.turnCW(R.turnCW(good))]);
    tries++;
  } while (choices.length < 4 && tries < 60);
  var opts = shuffle(choices.slice(0, 4)), ans = 'ABCD'.charAt(opts.indexOf(choices[0])), op = optionsPieces(opts, 108), W = op.w;
  var out = '<g transform="translate(' + (W / 2 - 36) + ' 8)">' + R.pieceSvg(base, 16, 215, 4) + '</g>' + op.svg;
  return mc('Turning shapes', 'Which picture shows the shape after a <b>' + kd[0] + '</b>? (Turning does not flip it over.)', R.svg(W, 108 + 72 + 24, out, 'A shape and four pictures of it', 360), 'A shape is drawn at the top. Pictures A to D show four possible turned shapes.', ['A', 'B', 'C', 'D'], ans, ['Pick one corner or one long arm and follow where it goes.', 'A quarter turn clockwise moves the top of the shape to the right.', 'A turned shape is never a mirror image. Rule out any picture that has been flipped.'], 'Picture ' + ans + ' is the shape after a ' + kd[0] + '.');
};

/* ---------- cubes ---------- */
G.cubeCount = function (lv) {
  var rows = lv <= 1 ? 2 : lv <= 3 ? pick([2, 3]) : 3, cols = lv <= 1 ? 2 : 3, maxH = lv <= 2 ? 3 : 4, h = R.randStack(rows, cols, maxH, 4), tot = R.total(h), pic = R.cubes(h, 150);
  var ask = lv <= 1 ? 0 : lv === 2 ? pick([0, 0, 1]) : lv === 3 ? pick([0, 1, 2, 3]) : lv === 4 ? pick([1, 2, 3, 4]) : pick([2, 3, 4, 5, 6]);
  var d = 'A stack of cubes with ' + rows + ' rows and ' + cols + ' columns. The heights are ' + h.map(function (r) { return r.join(', '); }).join('; ') + '.';
  if (ask === 0) return Q({ tag: 'Counting cubes', text: 'How many cubes are in this stack? Remember the cubes you cannot see.', pic: pic, data: d + ' How many cubes are in the stack?', answer: String(tot), hints: ['Count one column at a time.', 'Each column holds as many cubes as its height. Hidden cubes sit under the top ones.', 'Add the columns together.'], explain: 'The columns hold ' + [].concat.apply([], h).filter(function (v) { return v > 0; }).join(' + ') + ' = ' + tot + ' cubes.' });
  if (ask === 1) { var hid = tot - R.visible(h); return Q({ tag: 'Counting cubes', text: 'How many cubes in this stack are <b>completely hidden</b>? A hidden cube shows no face from this view.', pic: pic, data: d + ' How many cubes are completely hidden?', answer: String(hid), hints: ['First count all the cubes.', 'Then count the cubes that show at least one face.', 'Hidden = total − visible.'], explain: 'There are ' + tot + ' cubes. ' + R.visible(h) + ' show a face. So ' + hid + ' are hidden.' }); }
  if (ask === 2) return Q({ tag: 'Views of cubes', text: 'You look straight down from <b>above</b>. How many squares do you see?', pic: pic, data: d + ' How many squares do you see from above?', answer: String(R.topView(h)), hints: ['From above you see the top of each column once.', 'Count the columns that have at least one cube.'], explain: 'A view from above shows one square for every column that has cubes. There are ' + R.topView(h) + ' of them.' });
  if (ask === 3) { var left = Math.random() < 0.5; return Q({ tag: 'Views of cubes', text: 'You look straight at the <b>' + (left ? 'left-hand' : 'right-hand') + ' faces</b> (the faces drawn on the ' + (left ? 'left' : 'right') + '). How many squares can you see?', pic: pic, data: d + ' How many squares can you see looking at the ' + (left ? 'left' : 'right') + ' side?', answer: String(left ? R.leftView(h) : R.rightView(h)), hints: ['Look at one line of columns at a time.', 'In each line, only the tallest column counts. Shorter ones are hidden behind it.', 'Add up the tallest column in each line.'], explain: 'Add the tallest column in each line of the ' + (left ? 'left' : 'right') + ' view: the total is ' + (left ? R.leftView(h) : R.rightView(h)) + ' squares.' }); }
  var e = pick([2, 3, 5]);
  if (ask === 4) return Q({ tag: 'Volume of cubes', text: 'Each small cube has edges of <b>' + e + ' cm</b>. What is the volume of the whole stack? (cm³)', pic: pic, data: d + ' Each cube has edges of ' + e + ' centimetres.', answer: String(tot * e * e * e), unit: 'cm³', hints: ['Count the small cubes first.', 'One small cube has volume ' + e + ' × ' + e + ' × ' + e + '.', 'Multiply the volume of one cube by the number of cubes.'], explain: tot + ' cubes, each ' + (e * e * e) + ' cm³, so ' + tot * e * e * e + ' cm³.' });
  return Q({ tag: 'Surface area of cubes', text: 'Each small cube has faces of <b>1 cm²</b>. What is the total <b>surface area</b> of the stack, including the bottom? (cm²)', pic: pic, data: d + ' Each small face is one square centimetre. Find the total surface area including the bottom.', answer: String(R.surface(h)), unit: 'cm²', hints: ['Surface area counts the outside faces only.', 'Count the faces you can see from above, from the front, and from each side, then double them for the faces on the opposite sides.', 'Faces where two cubes touch are not counted.'], explain: 'Each cube has 6 faces. Taking away the faces hidden where cubes touch leaves ' + R.surface(h) + ' cm².' });
};
G.solid = function (lv) {
  var L = [['cube', 6, 12, 8], ['cuboid', 6, 12, 8], ['square-based pyramid', 5, 8, 5], ['triangular prism', 5, 9, 6], ['tetrahedron (triangular-based pyramid)', 4, 6, 4], ['pentagonal prism', 7, 15, 10], ['hexagonal prism', 8, 18, 12], ['pentagonal pyramid', 6, 10, 6], ['hexagonal pyramid', 7, 12, 7], ['octahedron', 8, 12, 6]];
  var pool = lv <= 1 ? L.slice(0, 5) : lv <= 2 ? L.slice(0, 7) : L, s = pick(pool), what = pick([['faces', 1], ['edges', 2], ['vertices', 3]]);
  if (lv >= 4 && Math.random() < 0.5) { var miss = pick([1, 2, 3]), names = ['', 'faces', 'edges', 'vertices'], F = s[1], E = s[2], Vv = s[3], known = miss === 1 ? 'edges and vertices' : miss === 2 ? 'faces and vertices' : 'faces and edges'; return Q({ tag: 'Solid shapes', text: 'A solid has <b>' + (miss === 1 ? E : F) + '</b> ' + (miss === 1 ? 'edges' : 'faces') + ' and <b>' + (miss === 3 ? E : Vv) + '</b> ' + (miss === 3 ? 'edges' : 'vertices') + '. Use Euler’s rule (faces + vertices − edges = 2) to find the number of <b>' + names[miss] + '</b>.', answer: String(s[miss]), hints: ['Euler’s rule: F + V − E = 2.', 'Put in the two numbers you know.', 'Rearrange to find the missing one.'], explain: 'F + V − E = 2. Here F = ' + F + ', E = ' + E + ', V = ' + Vv + ' and ' + F + ' + ' + Vv + ' − ' + E + ' = 2.' }); }
  return Q({ tag: 'Solid shapes', text: 'How many <b>' + what[0] + '</b> does a <b>' + s[0] + '</b> have?', answer: String(s[what[1]]), hints: ['A face is a flat surface, an edge is where two faces meet, a vertex is a corner.', 'Picture the shape, or draw it, and count carefully.'], explain: 'A ' + s[0] + ' has ' + s[1] + ' faces, ' + s[2] + ' edges and ' + s[3] + ' vertices.' });
};
G.netValid = function (lv) {
  var valid = Math.random() < 0.5, cells = R.netOfKind(valid);
  return mc('Nets of a cube', 'Could this flat pattern of six squares be <b>folded to make a cube</b>?', R.netPic(cells), 'A flat pattern of six joined squares. Decide whether it folds into a cube.', ['Yes', 'No'], valid ? 'Yes' : 'No', ['Imagine folding each square up from the middle one.', 'Look for squares that would land on top of each other, and for gaps.', 'A row of four squares with one square above and one below always works.'], valid ? 'Yes. Each square folds to a different face of the cube.' : 'No. When it folds, two squares land on the same face and one face is missing.');
};
G.netOpposite = function (lv) {
  var cells = R.netOfKind(true), lab = R.netLabels(cells), letters = shuffle(['A', 'B', 'C', 'D', 'E', 'F']), ti = rnd(0, 5), tl = lab[cells[ti][0] + ',' + cells[ti][1]], oi = -1;
  cells.forEach(function (c, i) { if (lab[c[0] + ',' + c[1]] === (tl ^ 1)) oi = i; });
  var ans = letters[oi], opts = letters.filter(function (l, i) { return i !== ti; });
  return mc('Nets of a cube', 'This net folds to make a cube. Which letter is on the face <b>opposite ' + letters[ti] + '</b>?', R.netPic(cells, letters, ti), 'A net of a cube with the squares labelled with letters. Face ' + letters[ti] + ' is shaded.', shuffle(opts).slice(0, 4).concat(ans), ans, ['Opposite faces never touch when the cube is folded.', 'Squares that are two apart in a straight line of the net are opposite each other.', 'Fold the net in your mind, one square at a time.'], 'When folded, face ' + ans + ' ends up opposite face ' + letters[ti] + '.');
};

/* ---------- non-verbal reasoning tiles ---------- */
var SHAPES = ['tri', 'sq', 'pent', 'hex', 'circ'];
function variants(a, avoid) {
  var out = [], seen = {}; (avoid || []).forEach(function (s) { seen[R.key(s)] = 1; }); seen[R.key(a)] = 1;
  var mods = [function (s) { s.rot += 90; }, function (s) { s.rot += 180; }, function (s) { s.rot += 270; }, function (s) { s.rot += 45; }, function (s) { s.fill = (s.fill + 1) % 3; }, function (s) { s.fill = (s.fill + 2) % 3; }, function (s) { s.n = (s.n || 0) + 1; }, function (s) { s.n = Math.max(0, (s.n || 0) - 1); }, function (s) { s.sz = s.sz === 1 ? 0.7 : 1; }, function (s) { s.sh = pick(SHAPES.concat(['arrow', 'L', 'flag']).filter(function (x) { return x !== s.sh; })); }];
  shuffle(mods).forEach(function (m) { if (out.length >= 3) return; var c = R.clone(a); c.rot = c.rot || 0; m(c); if (!seen[R.key(c)]) { seen[R.key(c)] = 1; out.push(c); } });
  return out;
}
function asym(lv) { return pick(['arrow', 'L', 'flag']); }
function seriesRow(items, answerIdx, opts) {
  var box = 56, gap = 10, n = items.length + 1, W = Math.max(n * (box + gap) - gap, opts.length * (box + 14) - 14), x0 = (W - (n * (box + gap) - gap)) / 2, out = '';
  items.forEach(function (it, i) { out += R.tile(it, x0 + i * (box + gap), 4, box); });
  out += R.qbox(x0 + items.length * (box + gap), 4, box);
  var ox = (W - (opts.length * (box + 14) - 14)) / 2;
  opts.forEach(function (o, i) { out += R.tile(o, ox + i * (box + 14), 96, box) + R.letter('ABCDE'.charAt(i), ox + i * (box + 14) + box / 2, 96 + box + 18); });
  return { svg: R.svg(W, 96 + box + 26, out, 'A row of shapes with the last one missing and four choices', Math.max(W, 300)), W: W };
}
G.shapeSeries = function (lv) {
  var kinds = lv <= 1 ? ['rot90', 'fill', 'dots', 'sides'] : lv <= 2 ? ['rot90', 'fill', 'dots', 'sides', 'grow'] : lv <= 3 ? ['rot90', 'rot45', 'fill', 'dots', 'sides', 'grow', 'alt'] : ['rot45', 'rot90', 'rot135', 'dots', 'sides', 'grow', 'alt', 'altRot'];
  var kind = pick(kinds), sh = asym(lv), f0 = rnd(0, 2), r0 = rnd(0, 7) * 45, items = [], rule = '';
  var base = { sh: sh, fill: f0, rot: 0, sz: 1, n: 0 };
  function mk(i) {
    var s = R.clone(base);
    if (kind === 'rot90') { s.rot = r0 + 90 * i; rule = 'turns 90° clockwise each time'; }
    else if (kind === 'rot45') { s.rot = r0 + 45 * i; rule = 'turns 45° clockwise each time'; }
    else if (kind === 'rot135') { s.rot = r0 + 135 * i; rule = 'turns 135° clockwise each time'; }
    else if (kind === 'fill') { s.sh = pick(['tri', 'sq', 'pent']); s.fill = (f0 + i) % 3 === 0 ? 0 : ((f0 + i) % 3); rule = 'the shading changes in a repeating pattern'; s.sh = base.shape || (base.shape = s.sh); s.fill = [0, 1, 2][(f0 + i) % 3]; }
    else if (kind === 'dots') { s.sh = base.shape || (base.shape = pick(['circ', 'sq', 'tri'])); s.n = 1 + i; s.fill = 0; rule = 'one more dot each time'; }
    else if (kind === 'sides') { s.sh = ['tri', 'sq', 'pent', 'hex', 'hept'][i]; s.fill = f0; rule = 'one more side each time'; }
    else if (kind === 'grow') { s.sh = base.shape || (base.shape = pick(['tri', 'sq', 'pent', 'circ'])); s.sz = [0.5, 0.65, 0.8, 0.95, 1.1][i] || 1; if (s.sz > 1) s.sz = 1; rule = 'the shape grows each time'; }
    else if (kind === 'alt') { s.sh = base.shape || (base.shape = sh); s.rot = (i % 2) ? r0 + 180 : r0; s.fill = (i % 2) ? 1 : 0; rule = 'the shape and its shading swap every other tile'; }
    else { s.sh = sh; s.rot = (i % 2 === 0) ? r0 + 90 * (i / 2) : r0 + 180 + 90 * ((i - 1) / 2); rule = 'two patterns take turns'; }
    return s;
  }
  var all = []; for (var i = 0; i < 5; i++) all.push(mk(i));
  if (kind === 'grow') { var sizes = [0.5, 0.62, 0.74, 0.86, 1]; all.forEach(function (s, j) { s.sz = sizes[j]; }); }
  items = all.slice(0, 4); var good = all[4], wrong = variants(good, items), opts = shuffle([good].concat(wrong)), ans = 'ABCDE'.charAt(opts.findIndex(function (o) { return R.key(o) === R.key(good); }));
  var pic = seriesRow(items, 4, opts);
  return mc('Shape patterns', 'What comes <b>next</b> in the pattern? Choose the letter.', pic.svg, 'A row of four shapes follows a pattern. Choose the shape that comes next from A to D.', opts.map(function (o, i) { return 'ABCDE'.charAt(i); }), ans, ['Look at how the first shape changes into the second.', 'Check that the same change happens from the second to the third.', 'Follow the change one more time to get the missing shape.'], 'The pattern ' + rule + '. Picture ' + ans + ' is the next shape.');
};
G.matrix = function (lv) {
  var type = pick(lv <= 2 ? ['fillCol', 'dotsCol'] : ['fillCol', 'dotsCol', 'rotCol', 'sizeCol']), shs = shuffle(['tri', 'sq', 'pent', 'circ']).slice(0, 3), arr = asym(lv), a = shuffle([0, 1, 2]), tiles = [], i, j, rule;
  for (i = 0; i < 3; i++) { tiles.push([]); for (j = 0; j < 3; j++) {
    var s = { sh: shs[i], fill: 0, rot: 0, sz: 1, n: 0 };
    if (type === 'fillCol') { s.fill = a[j]; rule = 'Each row has its own shape. The shading changes across each row.'; }
    else if (type === 'dotsCol') { s.n = j + 1; s.fill = i === 1 ? 1 : 0; rule = 'The number of dots goes up by one across each row. The shape and shading stay the same along a row.'; }
    else if (type === 'rotCol') { s.sh = arr; s.rot = 90 * j + 45 * i; s.fill = [0, 1, 2][i]; rule = 'Each tile turns 90° more than the one to its left. Each row has its own shading.'; }
    else { s.sz = [0.5, 0.75, 1][j]; s.fill = a[i]; rule = 'Each row has its own shading. The shapes get bigger across each row.'; }
    tiles[i].push(s);
  } }
  var good = tiles[2][2], wrong = variants(good, [tiles[2][0], tiles[2][1]]), opts = shuffle([good].concat(wrong)), ans = 'ABCDE'.charAt(opts.findIndex(function (o) { return R.key(o) === R.key(good); })), box = 52, gap = 8, out = '';
  for (i = 0; i < 3; i++) for (j = 0; j < 3; j++) out += (i === 2 && j === 2) ? R.qbox(j * (box + gap), i * (box + gap), box) : R.tile(tiles[i][j], j * (box + gap), i * (box + gap), box);
  var gw = 3 * box + 2 * gap, W = Math.max(gw, 4 * (box + 14) - 14), gx = (W - gw) / 2, y = 3 * (box + gap) + 12, ox = (W - (4 * (box + 14) - 14)) / 2, body = '<g transform="translate(' + gx + ' 0)">' + out + '</g>';
  opts.forEach(function (o, k) { body += R.tile(o, ox + k * (box + 14), y, box) + R.letter('ABCDE'.charAt(k), ox + k * (box + 14) + box / 2, y + box + 18); });
  return mc('Pattern grids', 'Which tile completes the grid? Look along the <b>rows</b> and down the <b>columns</b>.', R.svg(W, y + box + 26, body, 'A three by three grid of shapes with the last tile missing', 340), 'A three by three grid of shapes with the bottom-right tile missing. Choose from A to D.', opts.map(function (o, k) { return 'ABCDE'.charAt(k); }), ans, ['Look at one row at a time. What changes from tile to tile?', 'Check that the same rule works for the other rows.', 'Apply the rule to the last row to find the missing tile.'], rule + ' So the missing tile is picture ' + ans + '.');
};
G.oddOne = function (lv) {
  var attr = pick(lv <= 2 ? ['sh', 'fill', 'n'] : ['sh', 'fill', 'n', 'rot']), shs = shuffle(['tri', 'sq', 'pent', 'hex', 'circ']), common = { sh: shs[0], fill: rnd(0, 2), rot: 0, sz: 1, n: 0 }, odd = R.clone(common), tiles = [], i;
  if (attr === 'sh') { odd.sh = shs[1]; } else if (attr === 'fill') { odd.fill = (common.fill + 1 + rnd(0, 1)) % 3; } else if (attr === 'n') { common.n = 2; odd.n = pick([1, 3]); } else { common.sh = asym(lv); odd.sh = common.sh; odd.rot = 180; common.rot = 0; }
  var vary = lv >= 3 ? pick(['sz', 'rotX', 'none']) : 'none';
  for (i = 0; i < 4; i++) { var t = R.clone(common); if (vary === 'sz' && attr !== 'sh') t.sz = [0.6, 0.8, 1, 0.7][i]; if (vary === 'rotX' && attr !== 'rot' && ['arrow','L','flag'].indexOf(common.sh) > -1) t.rot = [0, 90, 180, 270][i]; tiles.push(t); }
  var pos = rnd(0, 4); tiles.splice(pos, 0, odd); if (vary === 'sz') odd.sz = 0.8;
  var box = 52, gap = 12, W = 5 * (box + gap) - gap, out = ''; tiles.forEach(function (t, k) { out += R.tile(t, k * (box + gap), 4, box) + R.letter('ABCDE'.charAt(k), k * (box + gap) + box / 2, 4 + box + 18); });
  var why = attr === 'sh' ? 'It is a different shape.' : attr === 'fill' ? 'It has different shading.' : attr === 'n' ? 'It has a different number of dots.' : 'It points a different way.';
  return mc('Odd one out', 'Four of these tiles follow the same rule. Which one is the <b>odd one out</b>?', R.svg(W, box + 32, out, 'Five tiles in a row labelled A to E', 360), 'Five tiles labelled A to E. Four share a feature. Choose the odd one out.', ['A', 'B', 'C', 'D', 'E'], 'ABCDE'.charAt(pos), ['Say what the same four tiles have in common.', 'Check shape, shading, number of dots and which way they point.', 'Find the tile that breaks the rule.'], 'Tile ' + 'ABCDE'.charAt(pos) + ' is the odd one out. ' + why);
};
G.figAnalogy = function (lv) {
  var tf = pick(lv <= 2 ? ['rot90', 'fill', 'dot'] : ['rot90', 'rot180', 'fill', 'dot', 'grow', 'next']);
  var sh = tf === 'next' ? pick(['tri', 'sq', 'pent']) : (tf === 'rot90' || tf === 'rot180') ? asym(lv) : pick(['tri', 'sq', 'pent', 'circ']), sh2 = tf === 'next' ? pick(['tri', 'sq', 'pent']) : sh;
  function a1() { return { sh: sh, fill: tf === 'fill' ? 0 : rnd(0, 2), rot: rnd(0, 3) * 90, sz: tf === 'grow' ? 0.6 : 1, n: 0 }; }
  function apply(s) { var t = R.clone(s); if (tf === 'rot90') t.rot += 90; else if (tf === 'rot180') t.rot += 180; else if (tf === 'fill') t.fill = t.fill === 0 ? 1 : 0; else if (tf === 'dot') t.n = 1; else if (tf === 'grow') t.sz = 1; else if (tf === 'next') t.sh = { tri: 'sq', sq: 'pent', pent: 'hex' }[t.sh]; return t; }
  var A = a1(), Bt = apply(A), C = a1(); if (tf !== 'next') C.sh = pick(['tri', 'sq', 'pent', 'circ'].concat((tf === 'rot90' || tf === 'rot180') ? ['arrow', 'L', 'flag'] : [])); if (tf === 'fill') C.fill = 0; if (tf === 'rot90' || tf === 'rot180') C.sh = pick(['arrow', 'L', 'flag']); if (tf === 'next') C.sh = pick(['tri', 'sq', 'pent']);
  var good = apply(C), wrong = variants(good, [A, Bt, C]), opts = shuffle([good].concat(wrong)), ans = 'ABCDE'.charAt(opts.findIndex(function (o) { return R.key(o) === R.key(good); })), box = 52, out = '', y = 0;
  var W = 4 * (box + 14) - 14, x0 = (W - (4 * box + 2 * 12 + 40)) / 2 + 0;
  out += R.tile(A, 0, y, box) + '<text x="' + (box + 14) + '" y="' + (y + 34) + '" text-anchor="middle" style="font-size:22px;font-weight:700;fill:var(--fg)">→</text>' + R.tile(Bt, box + 28, y, box);
  out += '<text x="' + (2 * box + 42) + '" y="' + (y + 34) + '" style="font-size:15px;font-weight:700;fill:var(--fg)">as</text>';
  var cx = 2 * box + 74; out += R.tile(C, cx, y, box) + '<text x="' + (cx + box + 14) + '" y="' + (y + 34) + '" text-anchor="middle" style="font-size:22px;font-weight:700;fill:var(--fg)">→</text>' + R.qbox(cx + box + 28, y, box);
  var W2 = cx + 2 * box + 28, ox = (W2 - (4 * (box + 14) - 14)) / 2, oy = 84;
  opts.forEach(function (o, k) { out += R.tile(o, ox + k * (box + 14), oy, box) + R.letter('ABCDE'.charAt(k), ox + k * (box + 14) + box / 2, oy + box + 18); });
  var rule = { rot90: 'turns a quarter turn clockwise', rot180: 'turns a half turn', fill: 'changes its shading', dot: 'gains a dot', grow: 'gets bigger', next: 'gains one more side' }[tf];
  return mc('Shape analogies', 'The first shape changes into the second. Do the <b>same change</b> to the third. Which picture is the missing one?', R.svg(W2, oy + box + 26, out, 'Shape A changes into shape B. Shape C changes into a missing shape. Four choices.', 380), 'The first shape changes into the second in the same way the third changes into the missing shape. Choose from A to D.', opts.map(function (o, k) { return 'ABCDE'.charAt(k); }), ans, ['Compare the first two shapes. What has changed?', 'Do the very same change to the third shape.', 'Find the picture that matches.'], 'In the first pair the shape ' + rule + '. The same happens to the third shape, which gives picture ' + ans + '.');
};

/* ---------- position, coordinates and transformations ---------- */
function coordMc(tag, text, pts, lo, hi, lines, ans, hints, explain, data) {
  return Q({ tag: tag, kind: 'coord', placeholder: 'e.g. (3, 4)', text: text, pic: SK.grid(pts, lo, hi, lines), data: data, answer: ans, show: '(' + ans.split(',').join(', ') + ')', hints: hints, explain: explain });
}
G.reflectPoint = function (lv) {
  if (lv <= 1) { var x = rnd(1, 6), y = rnd(1, 6), dx = rnd(1, 4), dy = rnd(0, 4), right = Math.random() < 0.5; var nx = right ? x + dx : x - dx; if (nx < 0) { nx = x + dx; right = true; } return coordMc('Position', 'The dot P is at <b>(' + x + ', ' + y + ')</b>. Move it <b>' + dx + '</b> square' + (dx === 1 ? '' : 's') + ' ' + (right ? 'right' : 'left') + ' and <b>' + dy + '</b> up. What are its new coordinates?', [[x, y, 'P']], 0, 10, null, nx + ',' + (y + dy), ['The first number is across, the second number is up.', 'Moving right or left changes the first number. Moving up changes the second.'], 'Across: ' + x + (right ? ' + ' : ' − ') + dx + ' = ' + nx + '. Up: ' + y + ' + ' + dy + ' = ' + (y + dy) + '. So the point is (' + nx + ', ' + (y + dy) + ').', 'A grid with a dot P at ' + x + ', ' + y + '.'); }
  if (lv === 2) { var m = rnd(3, 6), px = rnd(Math.max(1, 2 * m - 10), m - 1), py = rnd(1, 9), ans = (2 * m - px) + ',' + py; return coordMc('Reflection', 'The point P <b>(' + px + ', ' + py + ')</b> is reflected in the mirror line <b>x = ' + m + '</b>. What are the coordinates of its image?', [[px, py, 'P']], 0, 10, [[[m, 0], [m, 10]]], ans, ['The mirror line is vertical. The image is the same height as P.', 'Find how far P is from the line, then go the same distance on the other side.'], 'P is ' + (m - px) + ' squares left of the line, so the image is ' + (m - px) + ' squares to the right: x = ' + (2 * m - px) + '. The height stays ' + py + '.', 'A grid with point P at ' + px + ', ' + py + ' and a vertical mirror line at x equals ' + m + '.'); }
  var mmFix = 0, kind = lv === 3 ? pick(['x', 'y', 'xm']) : pick(['x', 'y', 'xm', 'ym', 'diag']), px2 = rnd(-5, 5), py2 = rnd(-5, 5); if (px2 === 0) px2 = 2; if (py2 === 0) py2 = -3;
  
  if (kind === 'x') return coordMc('Reflection', 'The point P <b>(' + px2 + ', ' + py2 + ')</b> is reflected in the <b>x-axis</b>. What are the coordinates of its image?', [[px2, py2, 'P']], -6, 6, [[[-6, 0], [6, 0]]], px2 + ',' + (-py2), ['The x-axis is the horizontal line through 0.', 'Reflecting in the x-axis keeps x the same and changes the sign of y.'], 'x stays ' + px2 + '. y changes from ' + py2 + ' to ' + (-py2) + '.', 'A grid with point P at ' + px2 + ', ' + py2 + '.');
  if (kind === 'y') return coordMc('Reflection', 'The point P <b>(' + px2 + ', ' + py2 + ')</b> is reflected in the <b>y-axis</b>. What are the coordinates of its image?', [[px2, py2, 'P']], -6, 6, [[[0, -6], [0, 6]]], (-px2) + ',' + py2, ['The y-axis is the vertical line through 0.', 'Reflecting in the y-axis changes the sign of x and keeps y the same.'], 'x changes from ' + px2 + ' to ' + (-px2) + '. y stays ' + py2 + '.', 'A grid with point P at ' + px2 + ', ' + py2 + '.');
  if (kind === 'xm') { var mm = pick([-2, -1, 1, 2, 3]); if (px2 === mm) px2 = mm + 2; var nx2 = 2 * mm - px2; if (Math.abs(nx2) > 6) { px2 = mm + 1; nx2 = mm - 1; } return coordMc('Reflection', 'The point P <b>(' + px2 + ', ' + py2 + ')</b> is reflected in the line <b>x = ' + mm + '</b>. What are the coordinates of its image?', [[px2, py2, 'P']], -6, 6, [[[mm, -6], [mm, 6]]], nx2 + ',' + py2, ['The mirror line is vertical, so y stays the same.', 'Find the distance from P to the line and go the same distance past it.'], 'The distance from P to the line is ' + Math.abs(px2 - mm) + '. The image is the same distance on the other side: x = ' + nx2 + '.', 'A grid with point P at ' + px2 + ', ' + py2 + ' and a mirror line at x equals ' + mm + '.'); }
  if (kind === 'ym') { var my = pick([-2, -1, 1, 2, 3]); var ny = 2 * my - py2; if (Math.abs(ny) > 6) { py2 = my + 1; ny = my - 1; } return coordMc('Reflection', 'The point P <b>(' + px2 + ', ' + py2 + ')</b> is reflected in the line <b>y = ' + my + '</b>. What are the coordinates of its image?', [[px2, py2, 'P']], -6, 6, [[[-6, my], [6, my]]], px2 + ',' + ny, ['The mirror line is horizontal, so x stays the same.', 'Find the distance from P to the line and go the same distance past it.'], 'The distance from P to the line is ' + Math.abs(py2 - my) + '. The image is the same distance on the other side: y = ' + ny + '.', 'A grid with point P at ' + px2 + ', ' + py2 + ' and a mirror line at y equals ' + my + '.'); }
  return coordMc('Reflection', 'The point P <b>(' + px2 + ', ' + py2 + ')</b> is reflected in the line <b>y = x</b>. What are the coordinates of its image?', [[px2, py2, 'P']], -6, 6, [[[-6, -6], [6, 6]]], py2 + ',' + px2, ['The line y = x goes through (1, 1), (2, 2) and so on.', 'Reflecting in y = x swaps the two coordinates.'], 'The x and y coordinates swap: (' + px2 + ', ' + py2 + ') becomes (' + py2 + ', ' + px2 + ').', 'A grid with point P at ' + px2 + ', ' + py2 + ' and the line y equals x.');
};
G.rotatePoint = function (lv) {
  var px = rnd(-5, 5), py = rnd(-5, 5); if (px === 0) px = 3; if (py === 0) py = 2; var kind = lv <= 4 ? pick(['cw', 'ccw', 'half']) : pick(['cw', 'ccw', 'half']), ans;
  if (kind === 'cw') ans = py + ',' + (-px); else if (kind === 'ccw') ans = (-py) + ',' + px; else ans = (-px) + ',' + (-py);
  var name = { cw: '90° clockwise', ccw: '90° anticlockwise', half: '180°' }[kind];
  return coordMc('Rotation', 'The point P <b>(' + px + ', ' + py + ')</b> is rotated <b>' + name + '</b> about the <b>origin (0, 0)</b>. What are the coordinates of its image?', [[px, py, 'P']], -6, 6, null, ans, ['The origin is the centre of the turn.', kind === 'half' ? 'A half turn changes the sign of both coordinates.' : kind === 'cw' ? 'A quarter turn clockwise turns (x, y) into (y, −x).' : 'A quarter turn anticlockwise turns (x, y) into (−y, x).', 'Sketch the turn on the grid to check.'], 'Rotating ' + name + ' about the origin turns (' + px + ', ' + py + ') into (' + ans.split(',').join(', ') + ').', 'A grid with point P at ' + px + ', ' + py + '.');
};
G.translatePoint = function (lv) {
  var px = rnd(-4, 4), py = rnd(-4, 4), a = rnd(-3, 3), b = rnd(-3, 3); if (a === 0 && b === 0) a = 2;
  var vec = '<span class="fr"><b>' + a + '</b><i></i><b>' + b + '</b></span>', words = (a === 0 ? '' : Math.abs(a) + (a > 0 ? ' right' : ' left')) + (a !== 0 && b !== 0 ? ' and ' : '') + (b === 0 ? '' : Math.abs(b) + (b > 0 ? ' up' : ' down'));
  return coordMc('Translation', 'The point P <b>(' + px + ', ' + py + ')</b> is translated by the vector <b>(' + a + ', ' + b + ')</b>. This means ' + words + '. What are the coordinates of its image?', [[px, py, 'P']], -8, 8, null, (px + a) + ',' + (py + b), ['The top number moves the point across, the bottom number moves it up or down.', 'Add the first number to x. Add the second to y.'], 'x: ' + px + ' + ' + a + ' = ' + (px + a) + '. y: ' + py + ' + ' + b + ' = ' + (py + b) + '.', 'A grid with point P at ' + px + ', ' + py + '.');
};
G.enlargePoint = function (lv) {
  var k = pick(lv <= 5 ? [2, 3] : [2, 3, 0.5]), px = k === 0.5 ? pick([-4, -2, 2, 4, 6]) : rnd(-3, 3), py = k === 0.5 ? pick([-4, -2, 2, 4]) : rnd(-3, 3); if (px === 0) px = 1; if (py === 0) py = 2;
  var nx = px * k, ny = py * k, lim = Math.max(Math.abs(nx), Math.abs(ny), Math.abs(px), Math.abs(py)), hi = lim > 6 ? 10 : 8;
  return coordMc('Enlargement', 'The point P <b>(' + px + ', ' + py + ')</b> is enlarged by scale factor <b>' + k + '</b> from the <b>origin</b>. What are the coordinates of its image?', [[px, py, 'P']], -hi, hi, null, T(nx) + ',' + T(ny), ['Multiply both coordinates by the scale factor.', 'The image lies on a straight line from the origin through P.'], T(px) + ' × ' + k + ' = ' + T(nx) + ' and ' + T(py) + ' × ' + k + ' = ' + T(ny) + '.', 'A grid with point P at ' + px + ', ' + py + '.');
};
G.backBearing = function (lv) {
  var b = rnd(1, 35) * 10, back = (b + 180) % 360;
  return Q({ tag: 'Bearings', text: 'A boat is on a bearing of <b>' + pad3(b) + '°</b> from the harbour. What is the bearing of the <b>harbour from the boat</b>? (3 figures, like 045)', pic: compass(b), data: 'A compass showing a bearing of ' + pad3(b) + ' degrees.', answer: String(back), show: pad3(back), unit: '°', hints: ['The way back points in exactly the opposite direction.', 'Opposite directions differ by 180°.', b < 180 ? 'The bearing is less than 180°, so add 180°.' : 'The bearing is 180° or more, so take away 180°.'], explain: pad3(b) + (b < 180 ? ' + 180 = ' : ' − 180 = ') + pad3(back) + '. The harbour is on a bearing of ' + pad3(back) + '° from the boat.' });
};
G.gridWalk = function (lv) {
  var cols = ['A', 'B', 'C', 'D', 'E', 'F'], n = lv <= 1 ? 5 : 6, c = rnd(1, n - 2), r = rnd(2, n - 1), dc = rnd(1, n - 1 - c), dr = rnd(1, r - 1), size = 26, out = '', i, j;
  for (i = 0; i < n; i++) for (j = 0; j < n; j++) out += '<rect x="' + (24 + i * size) + '" y="' + (4 + j * size) + '" width="' + size + '" height="' + size + '" style="fill:var(--surface);stroke:var(--line);stroke-width:1.5"/>';
  for (i = 0; i < n; i++) out += '<text x="' + (24 + i * size + size / 2) + '" y="' + (4 + n * size + 16) + '" text-anchor="middle" style="font-size:13px;font-weight:700;fill:var(--fg)">' + cols[i] + '</text>';
  for (j = 0; j < n; j++) out += '<text x="12" y="' + (4 + (n - 1 - j) * size + size / 2 + 5) + '" text-anchor="middle" style="font-size:13px;font-weight:700;fill:var(--fg)">' + (j + 1) + '</text>';
  var sx = c - 1, sy = r - 1; out += '<circle cx="' + (24 + sx * size + size / 2) + '" cy="' + (4 + (n - 1 - sy) * size + size / 2) + '" r="8" style="fill:' + R.hsl(22) + ';stroke:var(--fg);stroke-width:2"/>';
  var ex = c - 1 + dc, ey = r - 1 - dr, ansTxt = cols[ex] + (ey + 1);
  return Q({ tag: 'Position', text: 'The counter is on <b>' + cols[sx] + (sy + 1) + '</b>. Move it <b>' + dc + '</b> square' + (dc === 1 ? '' : 's') + ' east and <b>' + dr + '</b> square' + (dr === 1 ? '' : 's') + ' south. Which square is it on now? (like C4)', pic: R.svg(48 + n * size, 32 + n * size, out, 'A square grid with letters across and numbers up the side', 240), data: 'A grid with letters across the bottom and numbers up the side. A counter is on ' + cols[sx] + (sy + 1) + '.', kind: 'text', placeholder: 'e.g. C4', answer: ansTxt, hints: ['East is to the right. South is down the page.', 'Moving east changes the letter. Moving south changes the number.'], explain: 'East ' + dc + ' takes the letter from ' + cols[sx] + ' to ' + cols[ex] + '. South ' + dr + ' takes the number from ' + (sy + 1) + ' to ' + (ey + 1) + '. The counter is on ' + ansTxt + '.' });
};

/* ---------- verbal reasoning ---------- */
var AL = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
function shiftWord(w, k) { return w.split('').map(function (ch) { return AL.charAt(((AL.indexOf(ch) + k) % 26 + 26) % 26); }).join(''); }
G.letterSeries = function (lv) {
  var kind = pick(lv <= 1 ? ['step', 'back'] : lv <= 3 ? ['step', 'back', 'alt', 'grow'] : ['step', 'back', 'alt', 'grow', 'alt2']), seq = [], ans, st = rnd(1, lv <= 2 ? 2 : 3), s0 = rnd(0, 6), i, rule;
  if (kind === 'step') { for (i = 0; i < 5; i++) seq.push(AL.charAt(s0 + i * st)); ans = AL.charAt(s0 + 5 * st); rule = 'The letters move on ' + st + ' place' + (st > 1 ? 's' : '') + ' each time.'; }
  else if (kind === 'back') { s0 = rnd(18, 25); for (i = 0; i < 5; i++) seq.push(AL.charAt(s0 - i * st)); ans = AL.charAt(s0 - 5 * st); rule = 'The letters move back ' + st + ' place' + (st > 1 ? 's' : '') + ' each time.'; }
  else if (kind === 'alt') { for (i = 0; i < 6; i++) seq.push(i % 2 === 0 ? AL.charAt(s0 + i / 2) : AL.charAt(25 - s0 - (i - 1) / 2)); ans = seq.pop(); rule = 'Two patterns take turns: one goes forward from the start of the alphabet, one goes back from the end.'; }
  else if (kind === 'grow') { var gap = 1; seq.push(AL.charAt(s0)); var pos = s0; for (i = 1; i < 5; i++) { pos += gap; seq.push(AL.charAt(pos)); gap++; } ans = AL.charAt(pos + gap); rule = 'The jump grows by one each time: +1, +2, +3, +4, then +5.'; }
  else { for (i = 0; i < 6; i++) seq.push(i % 2 === 0 ? AL.charAt(s0 + i) : AL.charAt(s0 + 10 - i)); ans = seq.pop(); rule = 'Two patterns take turns. Follow every other letter.'; }
  var wrong = shuffle(AL.split('')).filter(function (x) { return x !== ans; }).slice(0, 3);
  var q = mc('Letter series', 'What letter comes <b>next</b>? <span class="codeline"><b>' + seq.join(' , ') + ' , ?</b></span>', null, 'What letter comes next? ' + seq.join(', ') + '.', wrong.concat(ans), ans, ['Write the position of each letter in the alphabet: A is 1, B is 2.', 'Find how the positions change from one letter to the next.', 'Carry on the same pattern one more step.'], rule + ' The next letter is ' + ans + '.');
  return q;
};
G.codeWord = function (lv) {
  var words = ['CAT', 'DOG', 'SUN', 'MAP', 'PEN', 'BOX', 'HAT', 'BIRD', 'FISH', 'TREE', 'MOON', 'RAIN', 'LAMP', 'DOOR', 'BOOK', 'CAKE', 'STAR', 'SHIP'], w = pick(words), w2 = pick(words.filter(function (x) { return x !== w && (lv > 2 || x.length === w.length || true); })), k = rnd(1, lv <= 2 ? 3 : 5), back = lv >= 3 && Math.random() < 0.4;
  var kk = back ? -k : k;
  return Q({ tag: 'Codes', kind: 'text', placeholder: 'e.g. ABC', text: 'In a code, <b>' + w + '</b> is written as <b>' + shiftWord(w, kk) + '</b>. How is <b>' + w2 + '</b> written in the same code?', data: 'In a code, ' + w.split('').join(' ') + ' is written as ' + shiftWord(w, kk).split('').join(' ') + '. How is ' + w2.split('').join(' ') + ' written in the same code?', answer: shiftWord(w2, kk), hints: ['Compare the first letter of the word with the first letter of its code. How many places apart are they?', 'Check that the same jump works for the other letters.', 'Do the same jump to every letter of the new word. After Z the alphabet starts again at A.'], explain: 'Each letter moves ' + k + ' place' + (k > 1 ? 's' : '') + (back ? ' back' : ' on') + ' in the alphabet. So ' + w2 + ' becomes ' + shiftWord(w2, kk) + '.' });
};
G.letterValue = function (lv) {
  var w = pick(['CAB', 'BED', 'DAD', 'FAD', 'ACE', 'BAG', 'HEN', 'FIG', 'DIG', 'JAM', 'TEN', 'SUN', 'BEE', 'LEG', 'ZOO']), v = 0; w.split('').forEach(function (ch) { v += AL.indexOf(ch) + 1; });
  return Q({ tag: 'Codes', text: 'If A = 1, B = 2, C = 3 and so on to Z = 26, what is the <b>total value</b> of the letters in <b>' + w + '</b>?', data: 'If A is 1, B is 2 and so on, find the total value of the letters in ' + w.split('').join(' ') + '.', answer: String(v), hints: ['Write down the number for each letter.', 'Count along the alphabet if you need to.', 'Add the numbers together.'], explain: w.split('').map(function (ch) { return ch + ' = ' + (AL.indexOf(ch) + 1); }).join(', ') + '. The total is ' + v + '.' });
};
var HID = [['cow', 'c', 'ow', ['music', 'magic', 'picnic', 'traffic'], ['own', 'owner', 'owe']], ['hen', 'h', 'en', ['with', 'path', 'bath', 'wish'], ['end', 'enter', 'energy', 'enjoy']], ['pig', 'p', 'ig', ['help', 'stop', 'jump', 'sleep'], ['igloo']], ['dog', 'd', 'og', ['said', 'hand', 'red', 'bread'], ['ogre']], ['ant', 'an', 't', ['plan', 'man', 'can', 'scan'], ['the', 'table', 'time', 'tent']], ['ram', 'r', 'am', ['sister', 'water', 'after', 'winter'], ['amber', 'among', 'amount']], ['fox', 'f', 'ox', ['if', 'of', 'leaf'], ['oxen', 'oxygen']], ['rat', 'ra', 't', ['extra', 'camera'], ['the', 'table', 'time']], ['ape', 'ap', 'e', ['cap', 'map', 'nap', 'snap'], ['end', 'even', 'every']], ['cat', 'c', 'at', ['music', 'magic', 'picnic', 'traffic'], ['ate', 'attic', 'atlas']]];
R.HID = HID;
G.hiddenWord = function (lv) {
  var h = pick(HID), l = pick(h[3].filter(function (w) { return w.slice(-h[1].length) === h[1]; })), r = pick(h[4].filter(function (w) { return w.indexOf(h[2]) === 0; })), frame = pick(['The ' + l + ' ' + r + ' was very old.', 'We saw the ' + l + ' ' + r + ' today.', 'Look at that ' + l + ' ' + r + ' over there.', 'I like the ' + l + ' ' + r + ' a lot.']);
  var names = HID.map(function (x) { return x[0]; }), letters = (l + r).toLowerCase(), found = names.filter(function (n) { return letters.indexOf(n) > -1; });
  if (found.length !== 1 || letters.indexOf(h[0]) === -1) return G.hiddenWord(lv);
  var opts = shuffle(names.filter(function (n) { return n !== h[0]; })).slice(0, 3).concat(h[0]);
  return mc('Hidden words', 'An animal is hidden across two words in this sentence. Which animal is it?<div class="codeline"><b>' + frame + '</b></div>', null, frame + ' An animal is hidden across two words. Which animal is it?', opts, h[0], ['Ignore the spaces. Read the letters in a row.', 'Look at the end of one word and the start of the next.', 'Try each animal in the choices.'], 'The letters "' + l + r + '" hide ' + h[0].toUpperCase() + ': ' + l.slice(0, l.length - h[1].length) + '<b>' + h[1] + '</b> <b>' + h[2] + '</b>' + r.slice(h[2].length) + '.');
};
var SYN = [['happy', 'joyful', ['angry', 'tired', 'quiet']], ['big', 'enormous', ['tiny', 'narrow', 'heavy']], ['quick', 'rapid', ['slow', 'late', 'early']], ['begin', 'start', ['finish', 'continue', 'pause']], ['brave', 'courageous', ['nervous', 'lazy', 'careful']], ['rich', 'wealthy', ['poor', 'generous', 'greedy']], ['silent', 'quiet', ['noisy', 'busy', 'rude']], ['clever', 'intelligent', ['foolish', 'kind', 'shy']], ['difficult', 'hard', ['simple', 'boring', 'early']], ['gift', 'present', ['bill', 'lesson', 'secret']], ['strange', 'odd', ['common', 'lovely', 'bright']], ['leave', 'depart', ['arrive', 'remain', 'return']], ['furious', 'angry', ['cheerful', 'gentle', 'sleepy']], ['tiny', 'small', ['huge', 'loud', 'dull']], ['huge', 'giant', ['narrow', 'shiny', 'slow']], ['sad', 'unhappy', ['excited', 'curious', 'hungry']], ['smart', 'clever', ['rude', 'slow', 'noisy']], ['mend', 'repair', ['break', 'borrow', 'bend']], ['fix', 'repair', ['spoil', 'forget', 'choose']], ['reply', 'answer', ['ask', 'shout', 'whisper']]], ANT = [['ancient', 'modern', ['old', 'broken', 'famous']], ['expand', 'shrink', ['grow', 'stretch', 'spread']], ['victory', 'defeat', ['prize', 'game', 'win']], ['generous', 'mean', ['kind', 'rich', 'happy']], ['accept', 'refuse', ['take', 'agree', 'receive']], ['rough', 'smooth', ['hard', 'bumpy', 'wet']], ['increase', 'decrease', ['rise', 'grow', 'add']], ['arrive', 'depart', ['reach', 'enter', 'stay']], ['hollow', 'solid', ['empty', 'light', 'round']], ['permit', 'forbid', ['allow', 'ask', 'help']], ['cheap', 'expensive', ['small', 'tidy', 'plain']], ['early', 'late', ['quick', 'soon', 'first']], ['absent', 'present', ['away', 'missing', 'late']], ['borrow', 'lend', ['take', 'buy', 'keep']], ['forget', 'remember', ['lose', 'learn', 'know']], ['brave', 'cowardly', ['bold', 'strong', 'loud']], ['transparent', 'opaque', ['clear', 'thin', 'bright']], ['rapid', 'slow', ['fast', 'late', 'short']]];
function wordPick(bank, label, tag) {
  var b = pick(bank), opts = b[2].concat(b[1]);
  return mc(tag, 'Which word means the <b>' + (label === 'same' ? 'same as' : 'opposite of') + '</b> <b>' + b[0] + '</b>?', null, 'Which word means the ' + (label === 'same' ? 'same as' : 'opposite of') + ' ' + b[0] + '?', opts, b[1], ['Say the word in a sentence first.', 'Try each choice in the sentence and see which one fits best.'], b[1] + ' means ' + (label === 'same' ? 'the same as ' : 'the opposite of ') + b[0] + '.');
}
G.synonym = function (lv) { var q = wordPick(SYN, 'same', 'Word meanings'); return q; };
G.antonym = function (lv) { return wordPick(ANT, 'opposite', 'Word meanings'); };
var ODD = [[['apple', 'pear', 'plum', 'carrot'], 'carrot'], [['circle', 'square', 'triangle', 'cube'], 'cube'], [['Monday', 'Friday', 'April', 'Sunday'], 'April'], [['red', 'blue', 'green', 'round'], 'round'], [['hammer', 'spanner', 'saw', 'bread'], 'bread'], [['sparrow', 'eagle', 'salmon', 'robin'], 'salmon'], [['Glasgow', 'Dundee', 'Wales', 'Aberdeen'], 'Wales'], [['metre', 'kilometre', 'litre', 'centimetre'], 'litre'], [['violin', 'trumpet', 'flute', 'canvas'], 'canvas'], [['whale', 'dolphin', 'seal', 'shark'], 'shark'], [['Mars', 'Venus', 'Moon', 'Jupiter'], 'Moon'], [['oak', 'beech', 'rose', 'elm'], 'rose'], [['cube', 'cuboid', 'sphere', 'hexagon'], 'hexagon'], [['kilogram', 'gram', 'tonne', 'second'], 'second'], [['north', 'south', 'left', 'west'], 'left'], [['spoon', 'fork', 'knife', 'plate'], 'plate']];
G.oddWord = function (lv) { var o = pick(ODD), opts = shuffle(o[0].slice()); return mc('Odd one out', 'Which word is the <b>odd one out</b>?<div class="codeline"><b>' + opts.join(' , ') + '</b></div>', null, 'Which word is the odd one out? ' + opts.join(', ') + '.', opts, o[1], ['Say what the other three words have in common.', 'Find the word that does not belong to that group.'], o[1] + ' is the odd one out. The other three belong together.'); };
var WAN = [['bird', 'nest', 'bee', 'hive'], ['doctor', 'hospital', 'teacher', 'school'], ['finger', 'hand', 'toe', 'foot'], ['sad', 'happy', 'cold', 'hot'], ['page', 'book', 'petal', 'flower'], ['pen', 'write', 'knife', 'cut'], ['puppy', 'dog', 'kitten', 'cat'], ['day', 'night', 'summer', 'winter'], ['eye', 'see', 'ear', 'hear'], ['cow', 'calf', 'sheep', 'lamb'], ['wheel', 'car', 'wing', 'plane'], ['author', 'book', 'artist', 'painting'], ['sock', 'foot', 'glove', 'hand'], ['tall', 'short', 'wide', 'narrow'], ['painter', 'brush', 'writer', 'pen'], ['fish', 'swim', 'bird', 'fly'], ['hour', 'minute', 'metre', 'centimetre'], ['chef', 'kitchen', 'pilot', 'cockpit'], ['clock', 'time', 'ruler', 'length'], ['lion', 'pride', 'wolf', 'pack']];
G.wordAnalogy = function (lv) {
  var w = pick(WAN), pool = shuffle(WAN.map(function (x) { return x[3]; }).filter(function (x) { return x !== w[3]; })).slice(0, 3);
  return mc('Word links', '<b>' + w[0] + '</b> is to <b>' + w[1] + '</b> as <b>' + w[2] + '</b> is to ...', null, w[0] + ' is to ' + w[1] + ' as ' + w[2] + ' is to what?', pool.concat(w[3]), w[3], ['Say how the first two words are linked in a sentence.', 'Use the same link for the third word.'], 'The link is the same each time, so ' + w[2] + ' goes with ' + w[3] + '.');
};
G.orderPeople = function (lv) {
  var n = lv <= 2 ? 3 : 4, names = shuffle(['Ali', 'Beth', 'Cara', 'Dev', 'Eve', 'Finn']).slice(0, n), adj = pick([['taller', 'shortest', 'tallest'], ['older', 'youngest', 'oldest'], ['faster', 'slowest', 'fastest']]), facts = [], i;
  for (i = 0; i < n - 1; i++) facts.push('<b>' + names[i] + '</b> is ' + adj[0] + ' than <b>' + names[i + 1] + '</b>.');
  var ask = pick([0, 1, 2]); if (n === 3 && ask === 2) ask = 0; var qs, ans;
  if (ask === 0) { qs = 'Who is the <b>' + adj[1] + '</b>?'; ans = names[n - 1]; } else if (ask === 1) { qs = 'Who is the <b>' + adj[2] + '</b>?'; ans = names[0]; } else { var m = rnd(1, n - 2); qs = 'Who is <b>number ' + (m + 1) + '</b> counting from the ' + adj[2] + '?'; ans = names[m]; }
  return mc('Reasoning', shuffle(facts).join(' ') + ' ' + qs, null, facts.join(' ') + ' ' + qs.replace(/<[^>]+>/g, ''), names, ans, ['Put the people in order on a line.', 'Start with the person who is ' + adj[0] + ' than everyone.', 'Then read off the answer.'], 'The order from ' + adj[2] + ' to ' + adj[1] + ' is ' + names.join(', ') + '. So the answer is ' + ans + '.');
};

/* ---------- spatial word problems ---------- */
G.packBox = function (lv) {
  var e = lv <= 2 ? 1 : pick([1, 2]), a = rnd(2, 5) * e, b = rnd(2, 4) * e, c = rnd(2, 4) * e, n = (a / e) * (b / e) * (c / e), what = pick(['sugar cubes', 'building blocks', 'dice']);
  return Q({ tag: 'Packing', text: 'A box is <b>' + a + ' cm</b> long, <b>' + b + ' cm</b> wide and <b>' + c + ' cm</b> high. It is packed with ' + what + ' that are <b>' + e + ' cm</b> cubes. How many ' + what + ' fit in the box?', answer: String(n), hints: ['Work out how many cubes fit along each edge.', 'Along each edge: divide the length by ' + e + '.', 'Multiply the three numbers together.'], explain: (a / e) + ' × ' + (b / e) + ' × ' + (c / e) + ' = ' + n + '.' });
};
G.paintedCube = function (lv) {
  var n = lv <= 3 ? pick([3, 4]) : pick([3, 4, 5]), k = lv <= 3 ? pick([3, 2]) : pick([3, 2, 1, 0]), cnt = k === 3 ? 8 : k === 2 ? 12 * (n - 2) : k === 1 ? 6 * (n - 2) * (n - 2) : Math.pow(n - 2, 3);
  return Q({ tag: 'Cubes in 3D', text: 'A large cube is made from <b>' + n + ' × ' + n + ' × ' + n + '</b> small cubes. The outside of the large cube is painted. How many small cubes have exactly <b>' + k + '</b> painted face' + (k === 1 ? '' : 's') + '?', answer: String(cnt), hints: [k === 3 ? 'Cubes with three painted faces are in the corners.' : k === 2 ? 'Cubes with two painted faces are on the edges, but not in the corners.' : k === 1 ? 'Cubes with one painted face are in the middle of a face.' : 'Cubes with no painted faces are inside, where paint cannot reach.', 'A cube has 8 corners, 12 edges and 6 faces.'], explain: k === 3 ? 'The 8 corner cubes have three painted faces.' : k === 2 ? 'Each of the 12 edges has ' + (n - 2) + ' such cubes: 12 × ' + (n - 2) + ' = ' + cnt + '.' : k === 1 ? 'Each of the 6 faces has ' + (n - 2) + ' × ' + (n - 2) + ' such cubes: ' + cnt + '.' : 'The inner cube is ' + (n - 2) + ' × ' + (n - 2) + ' × ' + (n - 2) + ' = ' + cnt + '.' });
};
G.frameCube = function (lv) {
  var e = rnd(3, 12), kind = pick(['frame', 'wrap']); if (kind === 'frame') return Q({ tag: 'Cubes in 3D', text: 'A cube frame is made from straws. Each edge of the cube is <b>' + e + ' cm</b> long. What is the <b>total length</b> of straw needed? (cm)', answer: String(12 * e), unit: 'cm', hints: ['A cube has 12 edges.', 'All the edges are the same length.'], explain: '12 × ' + e + ' = ' + 12 * e + ' cm.' });
  var l = rnd(3, 9), w = rnd(2, 6), h = rnd(2, 6), sa = 2 * (l * w + l * h + w * h);
  return Q({ tag: 'Wrapping', text: 'A box is <b>' + l + ' cm</b> long, <b>' + w + ' cm</b> wide and <b>' + h + ' cm</b> high. What area of paper is needed to cover the whole outside? (cm²)', answer: String(sa), unit: 'cm²', hints: ['A box has 6 faces in 3 matching pairs.', 'Find the area of one of each: ' + l + ' × ' + w + ', ' + l + ' × ' + h + ' and ' + w + ' × ' + h + '.', 'Double the total.'], explain: '2 × (' + l * w + ' + ' + l * h + ' + ' + w * h + ') = ' + sa + ' cm².' });
};
G.walkMap = function (lv) {
  var a = rnd(2, 8), b = rnd(2, 8), c = rnd(1, a - 1), d1 = pick(['north', 'south']), opp = d1 === 'north' ? 'south' : 'north', d2 = pick(['east', 'west']), net = a - c;
  var ask = pick([0, 1]); if (ask === 0) return mc('Maps and directions', 'A hiker walks <b>' + a + ' km ' + d1 + '</b>, then <b>' + b + ' km ' + d2 + '</b>, then <b>' + c + ' km ' + opp + '</b>. How far is the hiker now <b>' + d1 + '</b> of the start? (km)', null, 'A hiker walks ' + a + ' kilometres ' + d1 + ', then ' + b + ' kilometres ' + d2 + ', then ' + c + ' kilometres ' + opp + '.', [String(net), String(a + c), String(b), String(a)], String(net), ['Draw a sketch of the walk.', 'Moving ' + opp + ' cancels some of the ' + d1 + ' walk.'], a + ' − ' + c + ' = ' + net + ' km ' + d1 + ' of the start.');
  return Q({ tag: 'Maps and directions', text: 'A hiker walks <b>' + a + ' km ' + d1 + '</b>, then <b>' + b + ' km ' + d2 + '</b>, then <b>' + c + ' km ' + opp + '</b>. How many km is the hiker <b>' + d2 + '</b> of the start?', answer: String(b), hints: ['Draw a sketch of the walk.', 'Only the ' + d2 + ' walk moves the hiker ' + d2 + '.'], explain: 'The ' + d1 + ' and ' + opp + ' walks do not change the east-west position. The hiker is ' + b + ' km ' + d2 + '.' });
};
G.stairs = function (lv) {
  var n = rnd(3, lv <= 3 ? 6 : 9), tot = n * (n + 1) / 2;
  return Q({ tag: 'Patterns in 3D', text: 'A staircase is built from cubes. The first step is <b>1</b> cube high, the second is <b>2</b> cubes high, and so on up to step <b>' + n + '</b>. How many cubes are used altogether?', answer: String(tot), hints: ['The steps are 1, 2, 3, ... up to ' + n + '.', 'Add them up, or pair the first with the last: 1 + ' + n + ', 2 + ' + (n - 1) + '.'], explain: '1 + 2 + ... + ' + n + ' = ' + tot + ' cubes.' });
};
})();
