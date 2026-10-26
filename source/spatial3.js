/* Spatial awareness and reasoning: lessons, activities and topic set-up for P5 to S3 (part 3 of 3) */
(function () { 'use strict';
var S = Studio, H = S.h, K = S.kit, V = S.viz, R = window.SPA, G = R.G, rnd = H.rnd, pick = H.pick, shuffle = H.shuffle, $ = H.$;
var YEARS = [
  { year: 'P5', n: 513, lv: 1 }, { year: 'P6', n: 13, lv: 2 }, { year: 'P7', n: 713, lv: 3 },
  { year: 'S1', n: 813, lv: 4 }, { year: 'S2', n: 833, lv: 5 }, { year: 'S3', n: 853, lv: 6 }
];
function mk(name, lv) { var f = function () { return G[name](lv); }; Object.defineProperty(f, 'name', { value: name }); return f; }

/* ---------- pictures used in the lessons ---------- */
function mirrorPic() {
  var p = R.PIECES[0], out = '<g transform="translate(10 8)">' + R.pieceSvg(p, 16, 215, 4) + '</g><line x1="98" y1="2" x2="98" y2="92" style="stroke:' + R.hsl(22) + ';stroke-width:3;stroke-dasharray:7 5"/><g transform="translate(112 8)">' + R.pieceSvg(R.flipLR(p), 16, 150, 4) + '</g><text x="98" y="108" text-anchor="middle" style="font-size:12px;font-weight:700;fill:var(--fg)">mirror line</text>';
  return R.svg(200, 114, out, 'A shape and its mirror image on the other side of a dashed mirror line', 260);
}
function turnPic() {
  var p = R.PIECES[0], out = '', ops = [[p, 'Start'], [R.turnCW(p), '¼ turn'], [R.turnCW(R.turnCW(p)), '½ turn'], [R.turnCCW(p), '¾ turn']];
  ops.forEach(function (o, i) { out += '<g transform="translate(' + (i * 82) + ' 4)">' + R.pieceSvg(o[0], 14, i ? 150 : 215, 4) + '</g><text x="' + (i * 82 + 32) + '" y="86" text-anchor="middle" style="font-size:12px;font-weight:700;fill:var(--fg)">' + o[1] + '</text>'; });
  return R.svg(330, 94, out, 'A shape turned a quarter turn, a half turn and three-quarters of a turn clockwise', 340);
}
function seriesPic() {
  var out = '', specs = [0, 90, 180, 270].map(function (r) { return { sh: 'arrow', fill: 1, rot: r, sz: 1 }; });
  specs.forEach(function (s, i) { out += R.tile(s, i * 66, 4, 56); });
  out += R.qbox(4 * 66, 4, 56);
  return R.svg(5 * 66 - 10, 66, out, 'An arrow turns a quarter turn each time and the next tile is missing', 340);
}
function matrixPic() {
  var out = '', sh = ['tri', 'sq', 'circ'], i, j, box = 48;
  for (i = 0; i < 3; i++) for (j = 0; j < 3; j++) out += (i === 2 && j === 2) ? R.qbox(j * 56, i * 56, box) : R.tile({ sh: sh[i], fill: j, rot: 0, sz: 1 }, j * 56, i * 56, box);
  return R.svg(160, 160, out, 'A three by three grid. Each row has its own shape and the shading changes across each row. The last tile is missing.', 200);
}
function oddPic() {
  var out = '', t = [{ sh: 'sq', fill: 1 }, { sh: 'sq', fill: 1 }, { sh: 'tri', fill: 1 }, { sh: 'sq', fill: 1 }, { sh: 'sq', fill: 1 }];
  t.forEach(function (s, i) { out += R.tile(s, i * 66, 4, 56) + R.letter('ABCDE'.charAt(i), i * 66 + 28, 78); });
  return R.svg(320, 86, out, 'Five tiles labelled A to E. Tile C is a triangle and the other four are squares.', 340);
}
function netPic() { var cells = [[0, 1], [1, 1], [2, 1], [3, 1], [1, 0], [2, 2]]; return R.netPic(cells, ['', '', '', '', '', '']); }
function netLabelPic() { var cells = [[0, 1], [1, 1], [2, 1], [3, 1], [1, 0], [2, 2]]; return R.netPic(cells, ['A', 'B', 'C', 'D', 'E', 'F']); }
function badNetPic() { return R.netPic([[0, 0], [1, 0], [0, 1], [1, 1], [2, 0], [3, 0]]); }
function alphaPic() {
  var out = '', L = 'ABCDEFGHIJKLM'.split(''), M = 'NOPQRSTUVWXYZ'.split('');
  L.forEach(function (c, i) { out += '<text x="' + (14 + i * 22) + '" y="14" text-anchor="middle" style="font-size:14px;font-weight:700;fill:var(--fg)">' + c + '</text><text x="' + (14 + i * 22) + '" y="32" text-anchor="middle" style="font-size:11px;fill:var(--muted)">' + (i + 1) + '</text>'; });
  M.forEach(function (c, i) { out += '<text x="' + (14 + i * 22) + '" y="58" text-anchor="middle" style="font-size:14px;font-weight:700;fill:var(--fg)">' + c + '</text><text x="' + (14 + i * 22) + '" y="76" text-anchor="middle" style="font-size:11px;fill:var(--muted)">' + (i + 14) + '</text>'; });
  return R.svg(300, 86, out, 'The alphabet with each letter numbered from 1 to 26', 340);
}
function stackPic(lv) { return R.cubes(lv <= 1 ? [[2, 1], [1, 3]] : [[1, 2, 0], [3, 1, 1], [0, 2, 1]], 150); }
function gridPic(lv) {
  if (lv <= 1) return SK.grid([[2, 3, 'P'], [5, 5, 'Q']], 0, 8, null);
  if (lv === 2) return SK.grid([[2, 3, 'P'], [8, 3, 'P′']], 0, 10, [[[5, 0], [5, 10]]]);
  if (lv === 3) return SK.grid([[3, 2, 'P'], [3, -2, 'P′']], -6, 6, [[[-6, 0], [6, 0]]]);
  if (lv === 4) return SK.grid([[3, 1, 'P'], [1, -3, 'P′']], -6, 6, null);
  if (lv === 5) return SK.grid([[1, 2, 'P'], [3, 6, 'P′']], -6, 6, null);
  return SK.grid([[2, 1, 'P'], [-1, 2, 'P′']], -6, 6, [[[-6, -6], [6, 6]]]);
}
function compassPic(lv) { return R.compass(lv >= 4 ? 70 : 90); }

/* ---------- lessons ---------- */
function T(x) { return x; }
function lessons(lv) {
  var A = [], B = [];
  A.push({ title: lv <= 2 ? 'Turning shapes' : 'Turns and directions', v: function () { return lv <= 3 ? turnPic() : compassPic(lv); },
    say: lv <= 1 ? ['A whole turn goes all the way round. A half turn is half of that, and a quarter turn is a quarter.', 'Clockwise turns go the same way as the hands of a clock. Anticlockwise goes the other way.', 'When a shape turns, it does not flip. It looks the same but points a new way.']
      : lv === 2 ? ['A quarter turn is 90°, a half turn is 180° and three-quarters of a turn is 270°.', 'Follow one corner of the shape as it moves. Where that corner ends up tells you the whole picture.', 'Turning never flips the shape. The shape stays the same way round.']
      : lv === 3 ? ['Turns are measured in degrees. Eighths of a turn are 45°, quarters are 90°, halves are 180°.', 'On a compass, North is at the top. Each step clockwise to the next point is 45°: N, NE, E, SE, S, SW, W, NW.', 'Add the turns one at a time. Turning 90° clockwise and then 90° anticlockwise takes you back to where you started.']
      : ['A bearing measures a direction as an angle clockwise from North, always with three figures: 045°, 090°, 270°.', 'Turning clockwise adds to the bearing. Turning anticlockwise takes away from it. If you go past 360° take away 360°.', 'Facing opposite directions means the bearings differ by 180°. That gives the back bearing.'],
    real: lv <= 3 ? 'Steering a bike or a car, and following instructions like "turn left at the lights", all use turns.' : 'Pilots, sailors and walkers with a compass describe directions with bearings.',
    goal: lv <= 3 ? 'how shapes and arrows change when they turn.' : 'how to describe a direction as a bearing and work out new bearings after a turn.', more: ['Always say which way you turn (clockwise or anticlockwise) and how far.', lv <= 3 ? 'Check by picturing a clock hand pointing to the top, then turning it.' : 'Draw a quick sketch of North, then the angle clockwise.'], eg: lv <= 3 ? ['Example 1: facing North, a quarter turn clockwise faces East.', 'Example 2: a half turn from West faces East.', 'Example 3: facing South, a quarter turn anticlockwise faces East.'] : ['Example 1: 040° turned 90° clockwise is 130°.', 'Example 2: 300° turned 100° clockwise is 400° − 360° = 040°.', 'Example 3: 060° turned 80° anticlockwise is 340°.'] });
  A.push({ title: 'Mirror images', v: mirrorPic,
    say: ['A mirror image is a reflection. Each point is the same distance from the mirror line, but on the opposite side.', lv <= 1 ? 'Left and right swap, but up and down stay the same when the mirror line is vertical.' : 'With a vertical mirror line, left and right swap. With a horizontal mirror line, up and down swap.', 'A reflected shape is flipped over. That is different from a turn, where the shape is not flipped.', lv >= 3 ? 'Hold a letter such as F up to a mirror, or flip a piece of paper over, to check what a reflection looks like.' : 'Imagine the paper folded along the mirror line, so the two shapes fit exactly on top of each other.'],
    real: 'Your reflection in a mirror, a lake that shows the mountains upside down, and the two halves of a butterfly all show reflection.', goal: 'how to pick out the mirror image of a shape.', more: ['A good test: the mirror image has the same size and shape, but it cannot be turned to fit the original.', 'Count squares to the mirror line to place each corner correctly.'], eg: ['Example 1: a shape touching the mirror line has an image that touches it too.', 'Example 2: a corner 3 squares left of the line has an image 3 squares right of it.', 'Example 3: for a horizontal mirror line, a point 2 above has an image 2 below.'] });
  A.push({ title: 'Cubes and stacks', v: function () { return stackPic(lv); },
    say: lv <= 1 ? ['A stack of cubes is built in columns. Each column can be one cube tall or more.', 'Some cubes are hidden behind or underneath others. They are still part of the stack.', 'To count them, go one column at a time and add up.']
      : lv <= 3 ? ['Count the cubes column by column, including the ones you cannot see. A tall column has hidden cubes under the top.', 'From above you see only the top of each column. The number of squares seen from above is the number of columns that are not empty.', 'From the side you see the tallest column in each line. Shorter columns behind it are hidden.']
      : ['Count cubes column by column. The total is the volume of the stack in unit cubes.', 'Surface area counts every square face on the outside, including the bottom. Faces where two cubes touch are inside, so they are not counted.', 'If each cube has edges of e cm, the volume is e³ cm³ for each cube, and each face is e² cm².'],
    real: 'Packing boxes in a lorry, stacking crates in a shop and building with blocks all need cube counting.', goal: lv <= 3 ? 'how to count cubes in a stack, including hidden ones.' : 'how to find the volume and surface area of a stack of cubes.', more: ['Make a small table of column heights to keep track.', 'Build the stack with real blocks if you can, then check by counting.'], eg: lv <= 3 ? ['Example 1: columns of 2, 1, 1 and 3 hold 7 cubes.', 'Example 2: from above, 4 columns show 4 squares.', 'Example 3: a column 3 tall hides 2 cubes under its top.'] : ['Example 1: 7 cubes of edge 2 cm have volume 7 × 8 = 56 cm³.', 'Example 2: a 1 × 1 × 3 tower has surface area 14 square units.', 'Example 3: joining two cubes hides 2 faces, so 12 − 2 = 10 faces show.'] });
  A.push({ title: 'Nets of a cube', v: netPic,
    say: ['A net is a flat pattern that folds up to make a solid. The net of a cube is made of six squares.', 'Many different arrangements of six squares are nets. A row of four squares with one square above and one below always works.', 'A net does not work if two squares would land on the same face, or if there is a gap.', lv <= 2 ? 'Faces that are opposite each other on the cube are never next to each other in the net.' : 'Two squares with exactly one square between them in a straight line of the net are opposite faces on the cube.'],
    real: 'Cereal boxes and packaging start as flat nets that are cut out, folded and glued.', goal: 'how to tell whether a pattern of six squares folds into a cube.', more: ['Pick one square as the bottom, then fold the others up around it.', lv <= 2 ? 'Beware of a 2 × 2 block of squares. It can never fold into a cube.' : 'A 2 × 2 block of squares can never fold into a cube, because four squares cannot meet at one corner.'], eg: ['Example 1: a cross shape with six squares folds to a cube.', 'Example 2: six squares in a straight line do not fold to a cube.', 'Example 3: a row of four with one above and one below is a net.'] });
  B.push({ title: 'Shape patterns', v: seriesPic,
    say: ['In a pattern of shapes, look for what changes from one shape to the next.', 'Things that can change are the way a shape points, its shading, its size, the number of sides and the number of dots.', 'Work out the rule from the first shapes, then check that it works for the others, then use it to find the missing shape.', lv >= 3 ? 'Sometimes two rules take turns, one for every other shape. Check the odd places and the even places separately.' : 'In this pattern the arrow turns a quarter turn clockwise each time, so the next arrow points to the left.'],
    real: 'Tiling patterns on floors and fabrics repeat in the same way.', goal: 'how to find the rule in a pattern of shapes and use it.', more: ['Write down what changes. Say it in words: "turns a quarter turn clockwise".', 'If you cannot see a pattern, look at one thing at a time: shape, shading, size, then direction.'], eg: ['Example 1: shading goes white, blue, green, white, blue, ... then green comes next.', 'Example 2: a triangle, square, pentagon, hexagon pattern adds one side each time.', 'Example 3: one dot, two dots, three dots, then four dots.'] });
  B.push({ title: lv <= 2 ? 'Odd one out and pattern grids' : 'Pattern grids, analogies and odd one out', v: function () { return lv <= 2 ? oddPic() : matrixPic(); },
    say: lv <= 2 ? ['An odd one out is the picture that does not follow the same rule as the others.', 'Say what the other four have in common. Look at shape, shading, size and the way they point.', 'In this picture four tiles are squares and tile C is a triangle, so C is the odd one out.']
      : ['In a pattern grid, look along each row and down each column. Find the rule, then use it on the last row.', 'In this grid every row has its own shape, and the shading changes across each row, so the missing tile is a green circle.', 'In a shape analogy the first shape changes into the second. Do the same change to the third shape.', 'In an odd one out, say what four of the pictures share, then find the one that breaks the rule.'],
    real: 'Spotting patterns helps in puzzles, coding and design.', goal: lv <= 2 ? 'how to find the odd one out in a set of shapes.' : 'how to solve pattern grids, shape analogies and odd-one-out puzzles.', more: ['Check every feature, not just the shape. Shading and size matter too.', 'If two answers seem to work, look for a feature you have not checked yet.'], eg: ['Example 1: four circles and one square. The square is the odd one out.', 'Example 2: four black shapes and one white shape. The white shape is the odd one out.', 'Example 3: if a small arrow becomes a large arrow, a small circle becomes a large circle.'] });
  B.push({ title: lv <= 1 ? 'Finding places on a grid' : lv === 2 ? 'Reflecting on a grid' : lv === 3 ? 'Reflection in the axes' : lv === 4 ? 'Rotation and translation' : lv === 5 ? 'Enlargement and combined moves' : 'Combined transformations',
    v: function () { return gridPic(lv); },
    say: lv <= 1 ? ['A coordinate pair gives a position. The first number says how far across. The second says how far up.', 'To move a point, change the first number to move across, or the second number to move up and down.', 'On a map grid the letters go across and the numbers go up, so C4 means column C and row 4.']
      : lv === 2 ? ['To reflect a point in a vertical mirror line, keep the height the same. Find how far the point is from the line and go the same distance on the other side.', 'Point P (2, 3) is 3 squares left of the line x = 5. Its image is 3 squares right, at (8, 3).', 'The mirror line x = 5 is vertical and goes through 5 on the x-axis.']
      : lv === 3 ? ['Reflecting in the x-axis keeps x the same and changes the sign of y. P (3, 2) becomes (3, −2).', 'Reflecting in the y-axis changes the sign of x and keeps y the same.', 'For a mirror line such as x = 2, find the distance from the point to the line and go the same distance past it.']
      : lv === 4 ? ['Rotating 180° about the origin changes the signs of both coordinates. A quarter turn clockwise turns (x, y) into (y, −x).', 'A translation slides every point the same distance. The vector (a, b) means a across and b up.', 'P (3, 1) rotated 90° clockwise about the origin becomes (1, −3).']
      : lv === 5 ? ['An enlargement multiplies the distance from the centre by the scale factor. From the origin, (x, y) becomes (kx, ky).', 'P (1, 2) enlarged by scale factor 3 from the origin goes to (3, 6).', 'When you combine transformations, do them one at a time and say each result.']
      : ['Reflecting in y = x swaps the coordinates: (x, y) becomes (y, x). Reflecting in y = −x gives (−y, −x).', 'P (2, 1) reflected in y = x becomes (1, 2).', 'To combine transformations, do the first, write the new coordinates, then do the second. Order matters.'],
    real: lv <= 1 ? 'Maps, games like battleships and chess boards all use grid positions.' : 'Computer graphics and video games move, turn and reflect shapes all the time.', goal: lv <= 1 ? 'how to give and use positions on a grid.' : 'how to find the image of a point after a transformation.', more: ['Sketch the point and the line or centre on a grid and check your answer against the picture.', 'The image of a point after a reflection or rotation is always the same distance from the line or centre as the original.'], eg: lv <= 1 ? ['Example 1: from (2, 3) move 3 right to (5, 3).', 'Example 2: from (2, 3) move 2 up to (2, 5).', 'Example 3: D3 means column D, row 3.'] : ['Example 1: (4, 2) reflected in the y-axis is (−4, 2).', 'Example 2: (1, 3) translated by (2, −1) is (3, 2).', 'Example 3: (2, 2) enlarged by scale factor 2 is (4, 4).'] });
  B.push({ title: 'Verbal reasoning: letters and words', v: alphaPic,
    say: ['Verbal reasoning uses letters and words. Learn the alphabet with numbers: A is 1, B is 2, up to Z which is 26.', 'In a letter series, work out the jump between the letters. In a code, every letter moves the same number of places.', 'In a word link, say how the first pair of words are related, then use the same link on the second pair. In a hidden word puzzle, ignore the spaces and read the letters in a row.', lv >= 4 ? 'For two patterns that take turns, look at every other letter separately.' : 'To find an odd one out, say what category three of the words belong to.'],
    real: 'Crosswords, word games and quiz questions all use these skills.', goal: 'how to solve letter series, codes, hidden words and word links.', more: ['Write the number under each letter if it helps. Counting on your fingers is fine.', 'Do not guess too early. Check your rule works for every letter or word you were given.'], eg: ['Example 1: A, C, E, G, ... the jump is 2, so the next letter is I.', 'Example 2: in a code that moves each letter on 1, CAT becomes DBU.', 'Example 3: "magic attic" hides the word CAT.'] });
  return { A: A, B: B };
}

/* ---------- activities ---------- */
function cubeLab(lv) {
  var N = lv <= 3 ? 3 : 4, MAX = lv <= 1 ? 3 : 4;
  return function (host, ctx) {
    var h = [], i, j, done = 0, need = 3, target = null;
    for (i = 0; i < N; i++) { h.push([]); for (j = 0; j < N; j++) h[i].push(0); }
    host.innerHTML = '<p class="say wq" id="cbTask"></p><div class="visual" id="cbVis" style="text-align:center"></div><p class="eyebrow" style="margin:10px 0 4px">Tap a square to add a cube to that column. After ' + MAX + ' cubes it goes back to empty.</p><div id="cbGrid" style="display:grid;grid-template-columns:repeat(' + N + ',54px);gap:6px;justify-content:center;margin:8px 0"></div><div class="lab-out say" id="cbOut" aria-live="polite"></div><div class="row" style="margin-top:8px"><button class="btn ghost" id="cbClear" type="button">Clear</button><button class="btn ghost" id="cbRand" type="button">Random stack</button></div><div class="fb" id="cbFb" aria-live="polite" style="display:none"></div>';
    function newTarget() { var t = R.randStack(N, N, MAX, 5); target = { total: R.total(t), top: R.topView(t) }; $('cbTask').innerHTML = 'Challenge ' + (done + 1) + ' of ' + need + ': build a stack with <b>' + target.total + ' cubes</b> that shows <b>' + target.top + ' squares</b> from above.'; }
    function draw() {
      $('cbVis').innerHTML = R.cubes(h, 150, null, true);
      var g = $('cbGrid'); g.innerHTML = '';
      h.forEach(function (r, a) { r.forEach(function (v, b) { var bt = document.createElement('button'); bt.type = 'button'; bt.className = 'btn ghost'; bt.style.cssText = 'min-height:48px;font-size:1.1rem'; bt.textContent = v; bt.setAttribute('aria-label', 'Column row ' + (a + 1) + ' column ' + (b + 1) + ' has ' + v + ' cubes. Tap to add one.'); bt.addEventListener('click', function () { h[a][b] = (h[a][b] + 1) % (MAX + 1); draw(); check(); }); g.appendChild(bt); }); });
      var t = R.total(h), out = 'Cubes: ' + t + '. From above you see ' + R.topView(h) + ' squares. Left-hand view: ' + R.leftView(h) + ' squares. Right-hand view: ' + R.rightView(h) + ' squares.'; if (lv >= 4) out += ' Surface area: ' + R.surface(h) + ' square units.';
      $('cbOut').textContent = out;
    }
    function check() {
      var fb = $('cbFb'); if (!target || R.total(h) !== target.total || R.topView(h) !== target.top) { fb.style.display = 'none'; return; }
      done++; fb.style.display = ''; fb.className = 'fb ok say'; fb.innerHTML = '<strong>Brilliant!</strong>' + (done >= need ? ' You have finished all ' + need + ' challenges.' : ' That stack works. Here is the next challenge.');
      if (done >= need) { ctx.complete(); $('cbTask').textContent = 'All ' + need + ' challenges done. You can keep building.'; target = null; } else newTarget();
    }
    $('cbClear').addEventListener('click', function () { h.forEach(function (r) { r.fill(0); }); draw(); });
    $('cbRand').addEventListener('click', function () { var t = R.randStack(N, N, MAX, 4); for (var a = 0; a < N; a++) for (var b = 0; b < N; b++) h[a][b] = t[a][b]; draw(); check(); });
    newTarget(); draw();
  };
}
function turnLab(lv) {
  return function (host, ctx) {
    var start, cur, tgt, moves = 0, done = 0, need = 3;
    function newRound(msg) {
      start = R.norm(R.PIECES[lv <= 2 ? pick([0, 1, 2]) : rnd(0, 5)]); cur = start; moves = 0;
      var ops = lv <= 1 ? [R.turnCW, R.turnCCW] : [R.turnCW, R.turnCCW, R.flipLR, R.flipUD], t = start, k, n = rnd(2, 4);
      for (k = 0; k < n; k++) t = pick(ops)(t);
      if (R.pkey(t) === R.pkey(start)) t = lv <= 1 ? R.turnCW(start) : R.flipLR(start);
      tgt = t; draw(msg || '');
    }
    function go(f) {
      cur = f(cur); moves++;
      if (R.pkey(cur) === R.pkey(tgt)) { done++; var m = ' You matched it in ' + moves + ' moves.' + (done >= need ? ' All ' + need + ' challenges done. Keep playing if you like.' : ' Next challenge.'); if (done >= need) ctx.complete(); newRound(m); return; }
      draw('');
    }
    function draw(msg) {
      host.innerHTML = '<p class="say wq">' + (done >= need ? 'Keep practising: ' : 'Challenge ' + (done + 1) + ' of ' + need + ': ') + 'use the buttons to make <b>your shape</b> match the <b>target</b>.</p><div style="display:flex;gap:18px;justify-content:center;flex-wrap:wrap;margin:8px 0"><div style="text-align:center"><div class="eyebrow">Your shape</div><svg viewBox="0 0 88 88" width="140" height="140" role="img" aria-label="Your shape">' + R.pieceSvg(cur, 18, 215, 4) + '</svg></div><div style="text-align:center"><div class="eyebrow">Target</div><svg viewBox="0 0 88 88" width="140" height="140" role="img" aria-label="The target shape">' + R.pieceSvg(tgt, 18, 150, 4) + '</svg></div></div>' +
        '<div class="row" style="justify-content:center;flex-wrap:wrap"><button class="btn" id="tlCW" type="button">Turn clockwise</button><button class="btn" id="tlCCW" type="button">Turn anticlockwise</button>' + (lv >= 2 ? '<button class="btn" id="tlLR" type="button">Flip left and right</button><button class="btn" id="tlUD" type="button">Flip up and down</button>' : '') + '<button class="btn ghost" id="tlReset" type="button">Start again</button></div><div class="lab-out say" aria-live="polite">Moves: ' + moves + '. A quarter turn is 90°.</div>' + (msg ? '<div class="fb ok say"><strong>Brilliant!</strong>' + msg + '</div>' : '');
      $('tlCW').addEventListener('click', function () { go(R.turnCW); }); $('tlCCW').addEventListener('click', function () { go(R.turnCCW); });
      if ($('tlLR')) { $('tlLR').addEventListener('click', function () { go(R.flipLR); }); $('tlUD').addEventListener('click', function () { go(R.flipUD); }); }
      $('tlReset').addEventListener('click', function () { cur = start; moves = 0; draw(''); });
    }
    newRound('');
  };
}

/* ---------- topic registration ---------- */
var GEN_BY_LV = {
  1: ['turn', 'facing', 'mirror', 'turnShape', 'cubeCount', 'solid', 'netValid', 'shapeSeries', 'oddOne', 'reflectPoint', 'gridWalk', 'letterSeries', 'letterValue', 'synonym', 'antonym', 'oddWord', 'wordAnalogy', 'orderPeople'],
  2: ['turn', 'facing', 'mirror', 'turnShape', 'cubeCount', 'solid', 'netValid', 'netOpposite', 'shapeSeries', 'matrix', 'oddOne', 'reflectPoint', 'gridWalk', 'letterSeries', 'codeWord', 'letterValue', 'hiddenWord', 'synonym', 'antonym', 'oddWord', 'wordAnalogy', 'orderPeople'],
  3: ['turn', 'facing', 'mirror', 'turnShape', 'cubeCount', 'solid', 'netValid', 'netOpposite', 'shapeSeries', 'matrix', 'oddOne', 'figAnalogy', 'reflectPoint', 'gridWalk', 'letterSeries', 'codeWord', 'letterValue', 'hiddenWord', 'synonym', 'antonym', 'oddWord', 'wordAnalogy', 'orderPeople'],
  4: ['turn', 'mirror', 'turnShape', 'cubeCount', 'solid', 'netValid', 'netOpposite', 'shapeSeries', 'matrix', 'oddOne', 'figAnalogy', 'reflectPoint', 'rotatePoint', 'translatePoint', 'backBearing', 'letterSeries', 'codeWord', 'letterValue', 'hiddenWord', 'synonym', 'antonym', 'wordAnalogy', 'orderPeople'],
  5: ['turn', 'mirror', 'turnShape', 'cubeCount', 'solid', 'netOpposite', 'shapeSeries', 'matrix', 'oddOne', 'figAnalogy', 'reflectPoint', 'rotatePoint', 'translatePoint', 'enlargePoint', 'backBearing', 'letterSeries', 'codeWord', 'hiddenWord', 'synonym', 'antonym', 'wordAnalogy', 'orderPeople'],
  6: ['turn', 'mirror', 'turnShape', 'cubeCount', 'solid', 'netOpposite', 'shapeSeries', 'matrix', 'oddOne', 'figAnalogy', 'reflectPoint', 'rotatePoint', 'translatePoint', 'enlargePoint', 'backBearing', 'letterSeries', 'codeWord', 'hiddenWord', 'synonym', 'antonym', 'wordAnalogy', 'orderPeople']
};
var HARD = { mirror: 1, turnShape: 1, netOpposite: 1, matrix: 1, figAnalogy: 1, codeWord: 1, hiddenWord: 1, antonym: 1, wordAnalogy: 1, orderPeople: 1, rotatePoint: 1, enlargePoint: 1, backBearing: 1 };
var PRACT = ['packBox', 'paintedCube', 'frameCube', 'walkMap', 'stairs'];
var HARDP = { paintedCube: 1, frameCube: 1 };

function register(Y) {
  var lv = Y.lv, n = Y.n, ls = lessons(lv);
  var names = GEN_BY_LV[lv], gens = names.map(function (nm) { return mk(nm, lv); });
  var easy = names.filter(function (nm) { return !HARD[nm]; }), hard = names.filter(function (nm) { return HARD[nm] || nm === 'cubeCount' || nm === 'solid' || nm === 'turn' || nm === 'netValid' || nm === 'shapeSeries' || nm === 'oddOne'; });
  if (lv >= 4) { easy = ['turn', 'solid', 'netValid', 'shapeSeries', 'oddOne', 'reflectPoint', 'translatePoint', 'letterSeries', 'letterValue', 'synonym', 'cubeCount']; hard = names.filter(function (nm) { return easy.indexOf(nm) === -1 || nm === 'cubeCount' || nm === 'turn' || nm === 'reflectPoint'; }); }
  var pgens = PRACT.map(function (nm) { return mk(nm, lv); }), pnames = PRACT.slice();
  var lbl = 'Spatial awareness';
  window.SLIDE_GOALS[n + '.learn1'] = ls.A.map(function (s) { return s.goal; }); window.SLIDE_GOALS[n + '.learn2'] = ls.B.map(function (s) { return s.goal; });
  window.SLIDE_MORE[n + '.learn1'] = ls.A.map(function (s) { return { more: s.more, eg: s.eg }; }); window.SLIDE_MORE[n + '.learn2'] = ls.B.map(function (s) { return { more: s.more, eg: s.eg }; });
  S.pools(n, Y.year.charAt(0) === 'S' ? -1 : 13, easy, hard);
  var warm = K.warmFrom([mk('turn', lv), mk('solid', lv), mk('shapeSeries', lv), mk('letterSeries', lv), mk('oddWord', lv > 3 ? 1 : lv), mk('cubeCount', Math.min(lv, 2)), mk('facing', Math.min(lv, 3)), mk('oddOne', lv)].filter(function (f) { return !!f; }));
  var practise = function () { return H.buildPracticeSet(gens, 100); };
  var practical = function () { var m = pgens.slice(); return H.buildPracticeSet(m, 30); };
  var topic = { n: n, base: 13, year: Y.year === 'P6' ? undefined : Y.year, short: 'Spatial awareness', title: 'Spatial awareness and reasoning', practiceCount: 100, gens: {},
    blurb: lv <= 1 ? 'Turns, mirror images, cube stacks, nets of a cube, shape patterns, positions on a grid, and letter and word puzzles.' : lv <= 3 ? 'Turns and reflections, cubes and their views, nets, shape patterns and grids, coordinates, and verbal reasoning with letters and words.' : 'Bearings and transformations, cubes, nets and 3D solids, non-verbal and verbal reasoning, with problems in context.',
    steps: [
      { id: 'warm', label: 'Warm-up', type: 'quiz', tag: 'Step 1 · Warm-up', title: 'Mental maths warm-up', lead: 'Four quick questions.', make: warm, doneLabel: 'On to the lesson' },
      { id: 'learn1', label: 'Shapes and space', type: 'slides', tag: 'Shapes and space', slides: ls.A },
      { id: 'lab1', label: 'Cube builder', type: 'lab', tag: 'Step 3 · We do it together', title: 'Cube builder', lead: 'Build stacks of cubes. See the total, the views and the challenges.', mount: cubeLab(lv) },
      { id: 'lab2', label: 'Turn and flip', type: 'lab', tag: 'Step 3 · We do it together', title: 'Turn and flip', lead: 'Turn ' + (lv >= 2 ? 'and flip ' : '') + 'the shape to match the target.', mount: turnLab(lv) },
      { id: 'learn2', label: 'Patterns and puzzles', type: 'slides', tag: 'Patterns and puzzles', slides: ls.B },
      { id: 'practise', label: 'Practise', type: 'quiz', best: true, tag: 'Step 5 · Your turn', title: 'Practise', lead: '100 questions for this stage. Use the hints one at a time.', make: practise },
      { id: 'practical', label: 'Real-time problem', type: 'quiz', tag: 'Step 6 · Real-time problems', title: 'Real-time problems', lead: '30 situation questions about boxes, cubes, maps and directions. Low, Medium and High change how many steps each problem has.', make: practical }
    ] };
  if (Y.year === 'P6') delete topic.year;
  S.addTopic(topic);
}
YEARS.forEach(register);

/* Reasoning questions mixed into the practice sets of every other topic (P5 to S3) */
var LVOF = { P5: 1, P6: 2, P7: 3, S1: 4, S2: 5, S3: 6 }, OWN = { 13: 1, 513: 1, 713: 1, 813: 1, 833: 1, 853: 1 };
var N_EASY = ['shapeSeries', 'oddOne', 'turn', 'cubeCount', 'solid', 'netValid'], N_HARD = ['matrix', 'figAnalogy', 'mirror', 'turnShape', 'netOpposite', 'shapeSeries', 'oddOne'];
var V_EASY = ['letterSeries', 'oddWord', 'synonym', 'letterValue'], V_HARD = ['codeWord', 'hiddenWord', 'antonym', 'wordAnalogy', 'orderPeople', 'letterSeries'];
S.extraMakers = function (n, level) {
  n = Number(n); if (OWN[n]) return []; var t = S.topics[n]; if (!t) return [];
  var lv = LVOF[t.year || 'P6'] || 2;
  function ok(nm) { return !(nm === 'matrix' && lv < 2) && !(nm === 'figAnalogy' && lv < 3) && !(nm === 'netOpposite' && lv < 2); }
  var nn = (level === 'low' ? N_EASY : level === 'high' ? N_HARD : N_EASY.concat(N_HARD)).filter(ok), vv = level === 'low' ? V_EASY : level === 'high' ? V_HARD : V_EASY.concat(V_HARD);
  if (level === 'wide') { var all = N_EASY.concat(N_HARD, V_EASY, V_HARD).filter(ok), sw = {}; return all.filter(function (x) { if (sw[x]) return false; sw[x] = 1; return true; }).map(function (nm) { return mk(nm, lv); }); }
  var out = [nn[n % nn.length], nn[(n + 3) % nn.length], vv[n % vv.length], vv[(n + 2) % vv.length]];
  var seen = {}; return out.filter(function (x) { if (seen[x]) return false; seen[x] = 1; return true; }).map(function (nm) { return mk(nm, lv); });
};
})();
