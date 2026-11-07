/* gap2.js: second set of new practice-question makers (algebra, shape, data, reasoning, factors, ratio, spatial) for P5 to S3.
   Added through S.extraMakers beside the existing makers and gap1.js. Nothing is removed. */
(function () {
  'use strict';
  var S = Studio, H = S.h, K = S.kit, Q = K.Q, rnd = H.rnd, pick = H.pick, shuffle = H.shuffle, T = H.trimNum, BT = window.BT;
  if (!BT || !BT.svg || !BT.txt || !BT.gap1) return;
  var svg = BT.svg, txt = BT.txt, G = BT.gap1;
  function mcStr(ans, wrong) { var out = [ans]; wrong.forEach(function (w) { if (out.length < 4 && out.indexOf(w) < 0) out.push(w); }); return { options: shuffle(out), answer: ans }; }
  function mk(o, m) { o.type = 'mc'; o.options = m.options; o.answer = m.answer; return Q(o); }
  function gcd(a, b) { return b ? gcd(b, a % b) : Math.abs(a); }
  function r6(x) { return Math.round(x * 1000000) / 1000000; }

  /* ---------- algebra from shapes and words ---------- */
  function gPerimAlg(lv) {
    var a = rnd(2, 6), b = rnd(2, 6), kind = pick(['rect', 'tri', 'rectA']);
    if (kind === 'rect') {
      var s = '<rect x="30" y="20" width="150" height="70" style="fill:none;stroke:var(--fg);stroke-width:3"/>' + txt(105, 14, 'n + ' + a, 14) + txt(205, 60, String(b), 14, 'start');
      return mk({ tag: 'Algebra from shapes', text: 'A rectangle has length <b>n + ' + a + '</b> and width <b>' + b + '</b>. Which expression gives its <b>perimeter</b>?', pic: svg(240, 110, 'A rectangle with length n plus ' + a + ' and width ' + b, s, 260), hints: ['The perimeter goes all the way round: two lengths and two widths.'], explain: '2 × (n + ' + a + ') + 2 × ' + b + ' = 2n + ' + (2 * a + 2 * b) + '.' },
        mcStr('2n + ' + (2 * a + 2 * b), ['2n + ' + (a + b), 'n + ' + (2 * a + 2 * b), '4n + ' + (a + b)]));
    }
    if (kind === 'tri') return mk({ tag: 'Algebra from shapes', text: 'A triangle has sides <b>x</b> cm, <b>x + ' + a + '</b> cm and <b>x + ' + b + '</b> cm. Which expression gives its <b>perimeter</b>?', hints: ['Add the three sides. Add the x terms together and the numbers together.'], explain: 'x + (x + ' + a + ') + (x + ' + b + ') = 3x + ' + (a + b) + '.' },
      mcStr('3x + ' + (a + b), ['3x', 'x + ' + (a + b), '3x + ' + (a * b)]));
    var w = rnd(2, 9);
    return mk({ tag: 'Algebra from shapes', text: 'A rectangle has length <b>' + w + '</b> and width <b>n</b>. Which expression gives its <b>area</b>?', hints: ['Area = length × width.'], explain: w + ' × n = ' + w + 'n.' }, mcStr(w + 'n', [w + ' + n', '2n + ' + (2 * w), 'n' + w]));
  }
  function gExprWords(lv) {
    var n = rnd(2, 9), m = rnd(2, 9), kind = pick(['a', 'b', 'c', 'd']);
    var T0 = {
      a: ['I think of a number n, multiply it by ' + n + ' and add ' + m + '.', n + 'n + ' + m, [m + 'n + ' + n, n + 'n − ' + m, 'n + ' + (n + m)]],
      b: ['I think of a number n, add ' + m + ' and then multiply the result by ' + n + '.', n + '(n + ' + m + ')', [n + 'n + ' + m, 'n + ' + m + 'n', n + 'n + ' + n]],
      c: ['A pencil costs ' + n + 'p. What is the cost, in pence, of p pencils and a ruler that costs ' + (n + m) + 'p?', n + 'p + ' + (n + m), [(n + m) + 'p + ' + n, n + '(p + ' + (n + m) + ')', 'p + ' + (2 * n + m)]],
      d: ['Sam is s years old. Her brother is ' + m + ' years older. Which expression gives her brother\'s age?', 's + ' + m, [m + 's', 's − ' + m, s2(m)]]
    };
    function s2(mm) { return mm + ' − s'; }
    var e = T0[kind];
    return mk({ tag: 'Expressions from words', text: e[0] + ' Which expression is correct?', hints: ['Do the steps in the same order as the words.', 'Use brackets when an addition has to happen before a multiplication.'], explain: 'The expression is ' + e[1] + '.' }, mcStr(e[1], e[2]));
  }
  function gFuncMachine(lv) {
    var a = rnd(2, 6), b = rnd(1, 9), x = rnd(2, 12), sub = Math.random() < 0.3 && lv >= 2, out = a * x + (sub ? -b : b);
    var s = txt(60, 40, 'IN', 14) + '<rect x="95" y="15" width="160" height="40" rx="8" style="fill:none;stroke:var(--fg);stroke-width:3"/>' + txt(175, 41, '× ' + a + '  then  ' + (sub ? '−' : '+') + ' ' + b, 14) + txt(300, 40, 'OUT', 14);
    return Q({ tag: 'Number machines', text: 'A machine multiplies by <b>' + a + '</b> and then ' + (sub ? 'subtracts' : 'adds') + ' <b>' + b + '</b>. The number <b>' + x + '</b> goes in. What comes out?', pic: svg(330, 70, 'Number machine times ' + a + ' then ' + (sub ? 'minus ' : 'plus ') + b, s, 340), answer: String(out), hints: ['Do the steps in order: multiply first.'], explain: x + ' × ' + a + ' = ' + (a * x) + ', then ' + (sub ? '−' : '+') + ' ' + b + ' = ' + out + '.' });
  }
  function gBackwards(lv) {
    var a = rnd(2, 9), b = rnd(3, 30), x = rnd(2, 15), res = a * x + b, kind = pick(['num', 'age']);
    if (kind === 'num') return Q({ tag: 'Work backwards', text: 'I think of a number, multiply it by <b>' + a + '</b>, then add <b>' + b + '</b>. My answer is <b>' + res + '</b>. What was my number?', answer: String(x), hints: ['Undo the steps in reverse order: take away ' + b + ' first.', 'Then divide by ' + a + '.'], explain: res + ' − ' + b + ' = ' + (res - b) + ', and ' + (res - b) + ' ÷ ' + a + ' = ' + x + '.' });
    var p = rnd(3, 9), q = rnd(2, 8), tot = p * x + q * x;
    return Q({ tag: 'Work backwards', text: 'Ali buys <b>' + x + '</b> pens and <b>' + x + '</b> pencils. A pen costs <b>' + p + 'p</b> and a pencil costs <b>' + q + 'p</b>. Zoe spends the same total on pens only. How many pens does she buy?', answer: String(tot / p), hints: ['Find Ali\'s total first.', 'Then divide by the price of a pen.'], explain: 'Total = ' + (p * x) + ' + ' + (q * x) + ' = ' + tot + 'p. Pens: ' + tot + ' ÷ ' + p + ' = ' + T(r6(tot / p)) + '.' });
  }

  /* ---------- shapes ---------- */
  var SHAPES = [['cube', 6, 12, 8, true], ['cuboid', 6, 12, 8, true], ['triangular prism', 5, 9, 6, true], ['square-based pyramid', 5, 8, 5, false], ['cylinder', 3, 2, 0, false], ['cone', 2, 1, 1, false], ['sphere', 1, 0, 0, false], ['hexagonal prism', 8, 18, 12, true], ['tetrahedron', 4, 6, 4, false], ['pentagonal prism', 7, 15, 10, true]];
  function gPrism(lv) {
    var kind = pick(['notprism', 'fev', 'count']);
    if (kind === 'notprism') {
      var prisms = shuffle(SHAPES.filter(function (x) { return x[4]; })).slice(0, 3), no = pick(SHAPES.filter(function (x) { return !x[4]; })), opts = shuffle(prisms.concat([no]).map(function (x) { return x[0]; }));
      return mk({ tag: 'Solid shapes', text: 'Which one of these solid shapes is <b>not a prism</b>?', hints: ['A prism has the same shape (cross-section) all the way along its length.'], explain: 'A ' + no[0] + ' is not a prism.' }, { options: opts, answer: no[0] });
    }
    var s = pick(SHAPES.filter(function (x) { return x[2] > 0 && x[3] > 0; })), q = pick(['faces', 'edges', 'vertices']), idx = { faces: 1, edges: 2, vertices: 3 }[q], ans = s[idx];
    return mk({ tag: 'Solid shapes', text: 'How many <b>' + q + '</b> does a <b>' + s[0] + '</b> have?', hints: ['Picture the shape, or count on a model. Faces are flat surfaces, edges are where two faces meet, vertices are corners.'], explain: 'A ' + s[0] + ' has ' + s[1] + ' faces, ' + s[2] + ' edges and ' + s[3] + ' vertices.' }, mcStr(String(ans), [String(ans + 1), String(ans + 2), String(Math.max(1, ans - 1))]));
  }
  function gReflectName(lv) {
    var kind = pick(['sq', 'tri', 'rt']);
    var items = {
      sq: ['a square', 'along one of its sides', 'a rectangle', ['a square', 'a triangle', 'a rhombus']],
      tri: ['a right-angled triangle', 'along its shorter side (a side next to the right angle)', 'an isosceles triangle', ['a rectangle', 'a square', 'a parallelogram']],
      rt: ['a right-angled triangle', 'along its longest side (the hypotenuse)', 'a kite', ['a square', 'a rectangle', 'a rhombus']]
    }[kind];
    if (kind === 'sq') return mk({ tag: 'Reflection', text: 'A square is joined to its mirror image reflected <b>' + items[1] + '</b>. What shape do the two squares make together?', hints: ['Sketch it: two squares side by side.'], explain: 'Two squares side by side make a rectangle.' }, mcStr('a rectangle', ['a square', 'a triangle', 'a rhombus']));
    return mk({ tag: 'Reflection', text: 'A <b>' + items[0] + '</b> is reflected in a mirror line <b>' + items[1] + '</b>. The shape and its reflection are joined. What shape do they make together?', hints: ['Sketch the shape and its reflection.'], explain: 'Together they make ' + items[2] + '.' }, mcStr(items[2], items[3].concat(['a trapezium'])));
  }
  function gCircleSq(lv) {
    var d = pick([4, 6, 8, 10, 12, 20]), kind = pick(['side', 'perim']);
    var s = '<rect x="20" y="10" width="100" height="100" style="fill:none;stroke:var(--fg);stroke-width:3"/><circle cx="70" cy="60" r="50" style="fill:var(--accent);fill-opacity:.25;stroke:var(--fg);stroke-width:3"/>' + txt(70, 64, 'd = ' + d, 14);
    var ans = kind === 'side' ? d : 4 * d;
    return Q({ tag: 'Circle in a square', text: kind === 'side' ? 'A circle of diameter <b>' + d + ' cm</b> fits exactly inside a square, touching all four sides. How long is each side of the square?' : 'A circle of diameter <b>' + d + ' cm</b> fits exactly inside a square, touching all four sides. What is the <b>perimeter</b> of the square?', pic: svg(140, 120, 'A circle inside a square touching all four sides', s, 170), answer: String(ans), hints: ['The side of the square is the same as the width of the circle, which is the diameter.'], explain: kind === 'side' ? 'The side equals the diameter: ' + d + ' cm.' : 'Each side is ' + d + ' cm, so the perimeter is 4 × ' + d + ' = ' + (4 * d) + ' cm.' });
  }

  /* ---------- data ---------- */
  function gTwoWay2(lv) {
    var a = rnd(6, 20), b = rnd(6, 20), c = rnd(5, 18), d = rnd(5, 18), cols = ['Boys', 'Girls'], rows = pick([['Tea', 'Coffee'], ['Cats', 'Dogs'], ['Walk', 'Bus']]);
    var hide = pick(['a', 'b', 'c', 'd', 'rowT', 'colT']);
    var cells = { a: a, b: b, c: c, d: d, rowT: a + b, colT: a + c }, tot = a + b + c + d;
    function cell(k) { return hide === k ? '?' : String(cells[k]); }
    var html = '<table style="border-collapse:collapse;margin:6px auto;text-align:center"><tr><th></th><th>' + cols[0] + '</th><th>' + cols[1] + '</th><th>Total</th></tr><tr><th>' + rows[0] + '</th><td style="border:1px solid">' + cell('a') + '</td><td style="border:1px solid">' + cell('b') + '</td><td style="border:1px solid">' + cell('rowT') + '</td></tr><tr><th>' + rows[1] + '</th><td style="border:1px solid">' + cell('c') + '</td><td style="border:1px solid">' + cell('d') + '</td><td style="border:1px solid">' + (c + d) + '</td></tr><tr><th>Total</th><td style="border:1px solid">' + (hide === 'colT' ? '?' : (a + c)) + '</td><td style="border:1px solid">' + (b + d) + '</td><td style="border:1px solid">' + tot + '</td></tr></table>';
    var ans = cells[hide];
    if (hide === 'a') html = html.replace('?', '?');
    return Q({ tag: 'Two-way tables', text: 'Complete the table. What number should replace the <b>?</b>' + html, answer: String(ans), hints: ['Each row and each column adds to its total.', 'Use a row or column where only one number is missing.'], explain: 'The missing number is ' + ans + '.' });
  }
  function gBarMislead(lv) {
    var a = rnd(40, 70), b = a + rnd(2, 6), base = Math.round(a / 10) * 10 - 10, h = function (v, lo) { return 8 + (v - lo) * 90 / (b + 5 - lo); };
    var s = '<line x1="30" y1="106" x2="230" y2="106" style="stroke:var(--fg);stroke-width:2"/>' + '<rect x="60" y="' + (106 - h(a, base)) + '" width="50" height="' + h(a, base) + '" style="fill:var(--accent);opacity:.55"/><rect x="140" y="' + (106 - h(b, base)) + '" width="50" height="' + h(b, base) + '" style="fill:var(--accent)"/>' + txt(85, 122, 'May', 12) + txt(165, 122, 'June', 12) + txt(18, 106, String(base), 11, 'end') + txt(18, 20, String(b + 5), 11, 'end');
    var ans = b - a;
    return mk({ tag: 'Misleading graphs', text: 'A shop sold <b>' + a + '</b> cakes in May and <b>' + b + '</b> in June. The bar chart makes June look much bigger. What makes the graph <b>misleading</b>?', pic: svg(250, 130, 'Bar chart where the vertical axis starts at ' + base, s, 280), hints: ['Look at the numbers on the vertical axis. Where does it start?'], explain: 'The vertical axis starts at ' + base + ', not 0, so the June bar looks far taller than it should. The real difference is only ' + ans + ' cakes.' },
      mcStr('The vertical axis does not start at 0', ['The bars have different colours', 'There is no title on the graph', 'The bars are too wide']));
  }
  function gPieAngle(lv) {
    var tot = pick([10, 12, 20, 24, 30, 36, 40, 60]), part = rnd(1, Math.max(1, Math.floor(tot / 3))), ang = 360 * part / tot;
    var kind = pick(['angle', 'frac']);
    if (kind === 'angle') return Q({ tag: 'Pie charts', text: 'In a survey of <b>' + tot + '</b> children, <b>' + part + '</b> chose swimming. In a pie chart, what <b>angle</b> is the swimming sector?', answer: T(ang), hints: ['The whole circle is 360°.', 'Work out the angle for one child first: 360 ÷ ' + tot + '.'], explain: '360 ÷ ' + tot + ' = ' + T(360 / tot) + '° for each child. ' + part + ' × ' + T(360 / tot) + ' = ' + T(ang) + '°.' });
    var a2 = pick([90, 120, 180, 60, 45, 30]), fr = a2 / gcd(a2, 360) + '/' + 360 / gcd(a2, 360);
    return mk({ tag: 'Pie charts', text: 'A sector of a pie chart has an angle of <b>' + a2 + '°</b>. What <b>fraction</b> of the pie is it? Give the answer in its simplest form.', hints: ['The whole circle is 360°. Write the angle over 360 and simplify.'], explain: a2 + '/360 = ' + fr + '.' }, mcStr(fr, [(a2 / gcd(a2, 180)) + '/' + (180 / gcd(a2, 180)), (360 / gcd(a2, 360)) + '/' + (a2 / gcd(a2, 360)), a2 + '/100']));
  }
  function gVenn(lv) {
    var a = rnd(3, 12), b = rnd(3, 12), both = rnd(1, Math.min(a, b) - 1), A = a - both, B = b - both, outside = rnd(0, 6), kind = pick(['total', 'onlyA']);
    var s = '<circle cx="85" cy="70" r="50" style="fill:var(--accent);fill-opacity:.2;stroke:var(--fg);stroke-width:2"/><circle cx="145" cy="70" r="50" style="fill:var(--accent);fill-opacity:.2;stroke:var(--fg);stroke-width:2"/>' + txt(60, 74, String(A), 16) + txt(115, 74, String(both), 16) + txt(170, 74, String(B), 16) + txt(40, 26, 'Swim', 12) + txt(190, 26, 'Cycle', 12) + txt(218, 128, String(outside) + ' neither', 11, 'end');
    var pic = svg(240, 134, 'Venn diagram with ' + A + ' in swim only, ' + both + ' in both, ' + B + ' in cycle only and ' + outside + ' in neither', s, 280);
    if (kind === 'total') return Q({ tag: 'Venn diagrams', text: 'The Venn diagram shows how children travel to a club. How many children are there <b>altogether</b>?', pic: pic, answer: String(A + both + B + outside), hints: ['Add every number in the diagram, including the one outside the circles.'], explain: A + ' + ' + both + ' + ' + B + ' + ' + outside + ' = ' + (A + both + B + outside) + '.' });
    return Q({ tag: 'Venn diagrams', text: 'How many children can <b>swim</b> in total (in the Swim circle, including the middle)?', pic: pic, answer: String(A + both), hints: ['The whole Swim circle includes the part that overlaps with Cycle.'], explain: A + ' + ' + both + ' = ' + (A + both) + '.' });
  }
  function gMeanMiss(lv) {
    var n = rnd(4, 6), vals = [], i; for (i = 0; i < n; i++) vals.push(rnd(4, 20)); var tot = vals.reduce(function (x, y) { return x + y; }, 0), kind = pick(['missing', 'added']);
    if (kind === 'missing') { var m = rnd(5, 12), want = Math.round((tot + m) / (n + 1)), need = want * (n + 1) - tot; if (need < 0) need = 1;
      return Q({ tag: 'Mean', text: 'The mean of <b>' + (n + 1) + '</b> numbers is <b>' + want + '</b>. The first ' + n + ' are <b>' + vals.join(', ') + '</b>. What is the last number?', answer: String(need), hints: ['Total of all numbers = mean × how many numbers.', 'Take away the total of the numbers you know.'], explain: want + ' × ' + (n + 1) + ' = ' + want * (n + 1) + '. ' + want * (n + 1) + ' − ' + tot + ' = ' + need + '.' }); }
    var mean = tot / n, add = Math.round(mean) + pick([-3, 0, 3, 6]), newMean = r6((tot + add) / (n + 1));
    return Q({ tag: 'Mean', text: 'The numbers <b>' + vals.join(', ') + '</b> have a total of ' + tot + '. A new number, <b>' + add + '</b>, is added. What is the new <b>mean</b>? Give a decimal to 2 d.p. if needed.', answer: T(Math.round(newMean * 100) / 100), hints: ['Add the new number to the total, then divide by the new count.'], explain: '(' + tot + ' + ' + add + ') ÷ ' + (n + 1) + ' = ' + T(Math.round(newMean * 100) / 100) + '.' });
  }

  /* ---------- reasoning, factors and ratio ---------- */
  function gMust(lv) {
    var a = pick([2, 3, 4, 5, 6, 8, 9, 10]), b = pick([2, 3, 4, 5, 6, 7, 8, 9]), k = pick([2, 3, 4, 5, 6, 9, 12]);
    var N = a * b * rnd(1, 3), items = [], truths = [];
    var stmts = [['is a multiple of ' + a, N % a === 0, a], ['is a multiple of ' + b, N % b === 0, b], ['is a multiple of ' + (a * b), N % (a * b) === 0, a * b], ['is even', N % 2 === 0], ['is a multiple of ' + (a + b), N % (a + b) === 0, a + b], ['is odd', N % 2 === 1]];
    var p = pick([3, 4, 6, 8]), q = pick([2, 5, 7, 9]);
    return mk({ tag: 'Must be true', text: '<b>x</b> is a multiple of <b>' + p + '</b> and <b>y</b> is a multiple of <b>' + q + '</b>. Which of these is <b>always true</b> for the product <b>x × y</b>?', hints: ['Try some examples: x = ' + p + ', y = ' + q + '; then x = ' + 2 * p + ', y = ' + q + '.', 'If x = p × (something) and y = q × (something), what is x × y a multiple of?'], explain: 'x × y is always a multiple of ' + p + ' × ' + q + ' = ' + (p * q) + ', so it is a multiple of ' + p + ' and of ' + q + ' too.' },
      mcStr('x × y is a multiple of ' + p * q, ['x × y is a multiple of ' + (p * q + p), 'x × y is a prime number', 'x × y is odd']));
  }
  function gFactorSort(lv) {
    var kind = pick(['common', 'only', 'primeFactors']);
    if (kind === 'primeFactors') { var p = pick([2, 3, 5, 7]), q = pick([2, 3, 5, 7, 11].filter(function (x) { return x !== p; })), r = pick([2, 3, 5]), n = p * q * r; var f = [p, q, r].sort(function (x, y) { return x - y; });
      return Q({ tag: 'Prime factors', text: 'Write <b>' + n + '</b> as a product of <b>prime numbers</b>, smallest first, like <b>2 × 3 × 5</b>. (Type the × between them.)', answer: f.join(' × '), hints: ['Divide by the smallest prime that goes in, then repeat.'], explain: n + ' = ' + f.join(' × ') + '.' }); }
    var a = pick([12, 18, 24, 30, 36, 40, 42, 48]), b = pick([16, 20, 28, 32, 36, 45, 54, 60]);
    if (kind === 'common') return Q({ tag: 'Common factors', text: 'What is the <b>highest common factor</b> of <b>' + a + '</b> and <b>' + b + '</b>?', answer: String(gcd(a, b)), hints: ['List the factors of each, then find the biggest one in both lists.'], explain: 'The biggest number that divides both is ' + gcd(a, b) + '.' });
    var lcm = a * b / gcd(a, b);
    return Q({ tag: 'Common multiples', text: 'What is the <b>lowest common multiple</b> of <b>' + a + '</b> and <b>' + b + '</b>?', answer: String(lcm), hints: ['List multiples of the larger number until one is also a multiple of the other.'], explain: 'LCM = ' + a + ' × ' + b + ' ÷ HCF(' + gcd(a, b) + ') = ' + lcm + '.' });
  }
  function gRatioUnits(lv) {
    var kind = pick(['units', 'every', 'share']);
    if (kind === 'units') { var a = rnd(2, 9), b = rnd(2, 9); if (a === b) b++; var k = gcd(a, b);
      return mk({ tag: 'Ratio and units', text: 'One parcel has a mass of <b>' + a + ' kg</b>. Another has a mass of <b>' + b * 1000 + ' g</b>. What is the <b>ratio</b> of their masses, in its simplest form?', hints: ['Change both to the same unit first: ' + a + ' kg = ' + a * 1000 + ' g.', 'Then simplify the ratio.'], explain: a + ' kg = ' + a * 1000 + ' g. The ratio is ' + a * 1000 + ' : ' + b * 1000 + ' = ' + a / k + ' : ' + b / k + '.' }, mcStr(a / k + ' : ' + b / k, [b / k + ' : ' + a / k, a + ' : ' + b * 1000, a / k + ' : ' + b / k * 10])); }
    if (kind === 'every') { var n = rnd(3, 9), tot = n * rnd(3, 9) + 0, per = pick([2, 3, 4, 5]), c = n + 1;
      var T2 = c * rnd(2, 8), count = T2 / c * n;
      return Q({ tag: 'Ratio in every', text: 'In every <b>' + c + '</b> cars, <b>' + n + '</b> are silver. There are <b>' + T2 + '</b> cars in a car park. How many are silver?', answer: String(count), hints: ['How many groups of ' + c + ' are there in ' + T2 + '?', 'Each group has ' + n + ' silver cars.'], explain: T2 + ' ÷ ' + c + ' = ' + T2 / c + ' groups, and ' + T2 / c + ' × ' + n + ' = ' + count + '.' }); }
    var x = rnd(1, 5), y = rnd(2, 7), unit = rnd(3, 12), total = (x + y) * unit;
    return Q({ tag: 'Sharing in a ratio', text: 'Ruth and Tom share <b>£' + total + '</b> in the ratio <b>' + x + ' : ' + y + '</b>. How much does Tom get?', answer: String(y * unit), hints: ['Add the parts: ' + x + ' + ' + y + '.', 'Find the value of one part.'], explain: 'Parts = ' + (x + y) + '. One part = £' + unit + '. Tom gets ' + y + ' × ' + unit + ' = £' + y * unit + '.' });
  }

  /* ---------- spatial ---------- */
  function gCubeOutside(lv) {
    var n = pick([2, 3, 4]), kind = pick(['paint', 'hidden']), tot = n * n * n;
    if (kind === 'paint') return Q({ tag: 'Painted cubes', text: 'A cube made from <b>' + tot + '</b> small cubes (' + n + ' × ' + n + ' × ' + n + ') is painted on the <b>outside</b>. How many small faces are painted altogether?', answer: String(6 * n * n), hints: ['The big cube has 6 faces. Each big face is a ' + n + ' by ' + n + ' square of small faces.'], explain: '6 × ' + n + ' × ' + n + ' = ' + 6 * n * n + ' small faces.' });
    var inside = (n - 2) * (n - 2) * (n - 2);
    return Q({ tag: 'Painted cubes', text: 'A cube is made from <b>' + tot + '</b> small cubes (' + n + ' × ' + n + ' × ' + n + '). It is dipped in paint. How many small cubes have <b>no paint at all</b>?', answer: String(inside), hints: ['Think of peeling off the outer layer: the unpainted cubes make a smaller cube inside.', 'Take 2 off each side length.'], explain: 'The hidden cube is ' + (n - 2) + ' × ' + (n - 2) + ' × ' + (n - 2) + ' = ' + inside + '.' });
  }
  function gStackCount(lv) {
    var cols = pick([3, 4]), h = [], i, tot = 0; for (i = 0; i < cols; i++) { h.push(rnd(1, 4)); tot += h[i]; }
    var s = '', w = 36; h.forEach(function (v, c) { for (var k = 0; k < v; k++) s += '<rect x="' + (14 + c * w) + '" y="' + (100 - (k + 1) * w + 10) + '" width="' + w + '" height="' + w + '" style="fill:var(--accent);fill-opacity:.35;stroke:var(--fg);stroke-width:2"/>'; });
    var kind = pick(['front', 'total']), max = Math.max.apply(null, h);
    return Q({ tag: 'Cube stacks', text: kind === 'total' ? 'The picture shows a row of stacked cubes from the front. How many cubes are there in the row?' : 'The picture shows a row of stacked cubes from the front. How many cubes are in the tallest stack?', pic: svg(30 + cols * w, 150, 'A row of ' + cols + ' stacks of cubes with heights ' + h.join(', '), s, 280), answer: String(kind === 'total' ? tot : max), hints: ['Count the cubes in each stack.'], explain: kind === 'total' ? h.join(' + ') + ' = ' + tot + '.' : 'The tallest stack has ' + max + ' cubes.' });
  }

  /* ---------- wiring ---------- */
  var ALL = { gPerimAlg: gPerimAlg, gExprWords: gExprWords, gFuncMachine: gFuncMachine, gBackwards: gBackwards, gPrism: gPrism, gReflectName: gReflectName, gCircleSq: gCircleSq, gTwoWay2: gTwoWay2, gBarMislead: gBarMislead, gPieAngle: gPieAngle, gVenn: gVenn, gMeanMiss: gMeanMiss, gMust: gMust, gFactorSort: gFactorSort, gRatioUnits: gRatioUnits, gCubeOutside: gCubeOutside, gStackCount: gStackCount };
  var MAP = {};
  function add(ids, list) { ids.forEach(function (id) { MAP[id] = (MAP[id] || []).concat(list); }); }
  add([506, 6, 706, 809, 827], [[gPerimAlg, 'm'], [gExprWords, 'm'], [gFuncMachine, 'e'], [gBackwards, 'm']]);
  add([507, 7, 707, 810, 811], [[gPrism, 'e'], [gReflectName, 'm'], [gCircleSq, 'm']]);
  add([508, 8, 708, 812, 832, 852], [[gTwoWay2, 'e'], [gPieAngle, 'm'], [gVenn, 'm'], [gBarMislead, 'm'], [gMeanMiss, 'm']]);
  add([509, 9, 709], [[gMust, 'm'], [gBackwards, 'm'], [gExprWords, 'e']]);
  add([510, 10, 710, 802], [[gMust, 'm'], [gFactorSort, 'm']]);
  add([11, 711, 805, 823, 843], [[gRatioUnits, 'm']]);
  add([513, 13, 713, 813, 833, 853], [[gCubeOutside, 'm'], [gStackCount, 'e']]);
  add([829, 849], [[gPieAngle, 'm'], [gVenn, 'm']]);
  BT.gap2 = { makers: ALL, MAP: MAP };
  var prev = S.extraMakers;
  S.extraMakers = function (n, level) {
    var base = prev ? (prev(n, level) || []) : [], list = MAP[Number(n)];
    if (!list) return base;
    var lv = G.lvOf(Number(n)), pick1 = list.filter(function (x) { return level === 'low' ? x[1] === 'e' : level === 'high' ? x[1] !== 'e' : true; });
    if (!pick1.length) pick1 = list;
    return pick1.map(function (e) { var f = function () { return e[0](lv); }; Object.defineProperty(f, 'name', { value: e[0].name }); f.__gap = true; return f; }).concat(base);
  };
})();
