/* bite4.js: new practice-question makers for the Bitesize Second level upgrade.
   They are mixed into the practice sets (and so into the games and warm-ups that reuse them)
   of the P5, P6 and P7 topics, by difficulty level. */
(function () {
  'use strict';
  var S = Studio, H = S.h, K = S.kit, Q = K.Q, rnd = H.rnd, pick = H.pick, shuffle = H.shuffle, T = H.trimNum, BT = window.BT, sg = BT.sg, gcd = BT.gcd;
  function frs(n, d) { return n + '/' + d; }
  /* answer plus distractors, as formatted strings, 4 options */
  function mcNum(ans, cands, fmt) {
    fmt = fmt || String; var out = [ans], k = 1;
    cands.forEach(function (c) { if (out.length < 4 && out.indexOf(c) < 0) out.push(c); });
    while (out.length < 4) { if (out.indexOf(ans + k) < 0) out.push(ans + k); if (out.length < 4 && out.indexOf(ans - k) < 0) out.push(ans - k); k++; }
    return { options: shuffle(out.map(fmt)), answer: fmt(ans) };
  }
  function mcStr(ans, wrong) {
    var out = [ans]; wrong.forEach(function (w) { if (out.length < 4 && out.indexOf(w) < 0) out.push(w); });
    return { options: shuffle(out), answer: ans };
  }
  function mk(o, m) { o.type = 'mc'; o.options = m.options; o.answer = m.answer; return Q(o); }
  var M = '−';

  /* ---------------- P5 ---------------- */
  function gNegOrder() {
    var a = rnd(-9, 9), b = rnd(-9, 9), c = rnd(-9, 9); while (b === a) b = rnd(-9, 9); while (c === a || c === b) c = rnd(-9, 9);
    var small = Math.random() < 0.5, ans = small ? Math.min(a, b, c) : Math.max(a, b, c);
    var m = { options: shuffle([a, b, c].map(sg)), answer: sg(ans) };
    return mk({ tag: 'Negative numbers', text: 'Which is the <b>' + (small ? 'smallest' : 'largest') + '</b> number: <b>' + sg(a) + '</b>, <b>' + sg(b) + '</b> or <b>' + sg(c) + '</b>?', hints: ['Picture a number line. Numbers on the right are bigger.', 'A negative number is smaller than zero.'], explain: 'On the number line the ' + (small ? 'furthest left' : 'furthest right') + ' number is ' + sg(ans) + '.' }, m);
  }
  function gNegMove() {
    var t = rnd(0, 6), d = rnd(t + 1, t + 7), ans = t - d, m = mcNum(ans, [d - t, t + d, ans - 1, ans + 2], sg);
    return mk({ tag: 'Negative numbers', text: 'The temperature is <b>' + t + ' °C</b>. It falls by <b>' + d + ' degrees</b>. What is the new temperature?', hints: ['Count back from ' + t + ' on a number line.', 'You will go past zero into the negatives.'], explain: t + ' ' + M + ' ' + d + ' = ' + sg(ans) + ' °C.' }, m);
  }
  function gPartition() {
    var a = rnd(1, 9), b = rnd(0, 9), c = rnd(0, 9), d = rnd(1, 9), n = a * 1000 + b * 100 + c * 10 + d;
    return Q({ tag: 'Partitioning', text: 'What number is <b>' + a * 1000 + ' + ' + b * 100 + ' + ' + c * 10 + ' + ' + d + '</b>?', answer: String(n), hints: ['Each part is a place value: thousands, hundreds, tens and ones.', 'Write each digit in its column.'], explain: 'The number is ' + n + '.' });
  }
  function gPartAdd() {
    var a = rnd(21, 68), b = rnd(21, 49);
    return Q({ tag: 'Mental addition', text: 'Work out <b>' + a + ' + ' + b + '</b> by partitioning.', answer: String(a + b), hints: ['Split each number into tens and ones.', 'Add the tens, add the ones, then join them.'], explain: Math.floor(a / 10) * 10 + ' + ' + Math.floor(b / 10) * 10 + ' = ' + (Math.floor(a / 10) + Math.floor(b / 10)) * 10 + '. ' + a % 10 + ' + ' + b % 10 + ' = ' + (a % 10 + b % 10) + '. Together: ' + (a + b) + '.' });
  }
  function gZeroOne() {
    var a = rnd(2, 99), k = pick([0, 1, 2, 3]), txt, ans;
    if (k === 0) { txt = a + ' × 0'; ans = 0; } else if (k === 1) { txt = a + ' × 1'; ans = a; } else if (k === 2) { txt = '0 ÷ ' + a; ans = 0; } else { txt = a + ' ÷ 1'; ans = a; }
    return Q({ tag: 'Multiplying by 0 and 1', text: 'What is <b>' + txt + '</b>?', answer: String(ans), hints: ['Anything times 0 is 0. Anything times 1 stays the same.', 'Zero divided by a number is 0. A number divided by 1 stays the same.'], explain: txt + ' = ' + ans + '.' });
  }
  function gBus() {
    var d = rnd(2, 6), q = rnd(21, 97), n = d * q;
    return Q({ tag: 'Short division', text: 'Work out <b>' + n + ' ÷ ' + d + '</b>.', answer: String(q), hints: ['Use the bus stop method. Divide each digit in turn.', 'Check by multiplying your answer by ' + d + '.'], explain: n + ' ÷ ' + d + ' = ' + q + '. Check: ' + q + ' × ' + d + ' = ' + n + '.' });
  }
  function gOrderOps() {
    var a = rnd(2, 9), b = rnd(2, 6), c = rnd(2, 6), k = pick([0, 1, 2]);
    if (k === 0) return Q({ tag: 'Order of operations', text: 'Work out <b>' + a + ' + ' + b + ' × ' + c + '</b>.', answer: String(a + b * c), hints: ['Multiply before you add.', 'Do ' + b + ' × ' + c + ' first.'], explain: b + ' × ' + c + ' = ' + b * c + ', then ' + a + ' + ' + b * c + ' = ' + (a + b * c) + '.' });
    if (k === 1) return Q({ tag: 'Order of operations', text: 'Work out <b>(' + a + ' + ' + b + ') × ' + c + '</b>.', answer: String((a + b) * c), hints: ['Brackets come first.', 'Add inside the brackets, then multiply.'], explain: '(' + a + ' + ' + b + ') = ' + (a + b) + ', then × ' + c + ' = ' + (a + b) * c + '.' });
    var big = a * 4 + b * c;
    return Q({ tag: 'Order of operations', text: 'Work out <b>' + big + ' − ' + b * c + ' ÷ ' + c + '</b>.', answer: String(big - b), hints: ['Divide before you subtract.', b * c + ' ÷ ' + c + ' comes first.'], explain: b * c + ' ÷ ' + c + ' = ' + b + ', then ' + big + ' − ' + b + ' = ' + (big - b) + '.' });
  }
  function gNumDen() {
    var d = rnd(3, 12), n = rnd(1, d - 1), k = pick(['numerator', 'denominator', 'unit']);
    if (k === 'unit') { var ans = n === 1 ? 'Yes' : 'No'; return mk({ tag: 'Fraction words', text: 'Is <b>' + frs(n, d) + '</b> a unit fraction?', hints: ['A unit fraction has 1 as its numerator.', 'Look at the top number.'], explain: frs(n, d) + (n === 1 ? ' has numerator 1, so it is a unit fraction.' : ' has numerator ' + n + ', which is not 1, so it is not a unit fraction.') }, mcStr(ans, ['Yes', 'No'].filter(function (x) { return x !== ans; }).concat(['Only if the bottom is 2', 'Cannot tell']))); }
    return Q({ tag: 'Fraction words', text: 'What is the <b>' + k + '</b> of the fraction <b>' + frs(n, d) + '</b>?', answer: String(k === 'numerator' ? n : d), hints: [k === 'numerator' ? 'The numerator is the top number.' : 'The denominator is the bottom number.', 'It tells you ' + (k === 'numerator' ? 'how many parts we have.' : 'how many equal parts the whole is cut into.')], explain: 'In ' + frs(n, d) + ' the numerator is ' + n + ' and the denominator is ' + d + '.' });
  }
  var FRIEND = [['1/2', '0.5', 50], ['1/4', '0.25', 25], ['3/4', '0.75', 75], ['1/10', '0.1', 10], ['1/5', '0.2', 20], ['2/5', '0.4', 40], ['3/5', '0.6', 60], ['7/10', '0.7', 70]];
  function gFDPFriend() {
    var f = pick(FRIEND), k = pick([0, 1, 2]);
    if (k === 0) return Q({ tag: 'Fractions, decimals, percentages', text: 'Write <b>' + f[0] + '</b> as a percentage. (Give the number only.)', answer: String(f[2]), hints: ['Change the fraction to a fraction out of 100.', 'Or divide the top by the bottom and multiply by 100.'], explain: f[0] + ' = ' + f[1] + ' = ' + f[2] + '%.' });
    if (k === 1) return Q({ tag: 'Fractions, decimals, percentages', text: 'Write <b>' + f[1] + '</b> as a percentage. (Give the number only.)', answer: String(f[2]), hints: ['Multiply the decimal by 100.', 'Move the digits two places.'], explain: f[1] + ' × 100 = ' + f[2] + '%.' });
    var others = FRIEND.filter(function (x) { return x !== f; }).map(function (x) { return x[0]; });
    return mk({ tag: 'Fractions, decimals, percentages', text: 'Which fraction is the same as <b>' + f[2] + '%</b>?', hints: ['Write the percentage over 100.', 'Then simplify.'], explain: f[2] + '% = ' + f[2] + '/100 = ' + f[0] + '.' }, mcStr(f[0], shuffle(others).slice(0, 3)));
  }
  function gCompareFD() {
    var f = pick([['1/2', 0.5], ['3/5', 0.6], ['1/4', 0.25], ['4/5', 0.8], ['3/10', 0.3], ['2/5', 0.4]]), d = pick([0.2, 0.3, 0.35, 0.45, 0.55, 0.65, 0.7, 0.75, 0.85, 0.9]);
    if (d === f[1]) d += 0.05;
    var bigF = f[1] > d, ans = bigF ? f[0] : String(d);
    return mk({ tag: 'Comparing', text: 'Which is <b>bigger</b>: <b>' + f[0] + '</b> or <b>' + d + '</b>?', hints: ['Write both as decimals or both as percentages.', f[0] + ' = ' + f[1] + '.'], explain: f[0] + ' = ' + f[1] + ' and the other is ' + d + ', so ' + ans + ' is bigger.' }, mcStr(ans, [bigF ? String(d) : f[0], 'They are equal', 'Cannot tell']));
  }
  var COIN = [200, 100, 50, 20, 10, 5, 2, 1];
  function money(p) { return p >= 100 ? '£' + (p / 100).toFixed(2) : p + 'p'; }
  function gCoins() {
    var p = rnd(31, 299), left = p, n = 0;
    COIN.forEach(function (c) { while (left >= c) { left -= c; n++; } });
    return Q({ tag: 'Coins and notes', text: 'What is the <b>fewest</b> number of coins that make <b>' + money(p) + '</b>? (The coins are 1p, 2p, 5p, 10p, 20p, 50p, £1 and £2.)', answer: String(n), hints: ['Start with the biggest coin that fits.', 'Keep taking the biggest coin that does not go over what is left.'], explain: 'Using the biggest coin each time, ' + money(p) + ' needs ' + n + ' coins.' });
  }
  function gCurrency() {
    var r = pick([1.2, 1.5, 2, 1.25]), a = pick([10, 20, 40, 50, 80]), cur = pick([['euros', '€'], ['dollars', '$']]), ans = Math.round(a * r * 100) / 100;
    return Q({ tag: 'Currency', text: 'In this example, £1 = ' + cur[1] + r.toFixed(2) + '. How many ' + cur[0] + ' do you get for <b>£' + a + '</b>? (Give the number only.)', answer: T(ans), hints: ['Multiply the pounds by the exchange rate.', a + ' × ' + r + '.'], explain: a + ' × ' + r + ' = ' + T(ans) + ', so you get ' + cur[1] + T(ans) + '.' });
  }
  var IMP = [['inches', 'foot', 12, 'feet'], ['feet', 'yard', 3, 'yards'], ['ounces', 'pound', 16, 'pounds'], ['pounds', 'stone', 14, 'stone'], ['pints', 'gallon', 8, 'gallons']];
  function gImperial() {
    var c = pick(IMP), n = rnd(2, 6);
    return Q({ tag: 'Imperial units', text: 'There are ' + c[2] + ' ' + c[0] + ' in 1 ' + c[1] + '. How many ' + c[0] + ' are in <b>' + n + ' ' + c[3] + '</b>?', answer: String(n * c[2]), hints: ['Going to a smaller unit means multiplying.', 'Multiply ' + n + ' by ' + c[2] + '.'], explain: n + ' × ' + c[2] + ' = ' + n * c[2] + ' ' + c[0] + '.' });
  }
  function gParPerp() {
    var items = [
      ['Which word describes two lines that never meet?', 'parallel', ['perpendicular', 'curved', 'diagonal'], 'Parallel lines stay the same distance apart and never meet.'],
      ['Which word describes two lines that meet at a right angle?', 'perpendicular', ['parallel', 'equal', 'curved'], 'Perpendicular lines cross at 90°.'],
      ['How many pairs of parallel sides does a rectangle have?', '2', ['1', '3', '4'], 'A rectangle has two pairs of parallel sides.'],
      ['The size of a right angle is...', '90°', ['45°', '180°', '60°'], 'A right angle is 90°, like the corner of a page.'],
      ['Which pair of things are parallel?', 'Railway tracks', ['The corner of a page', 'A clock’s hands at 3 o’clock', 'A tree and the ground'], 'Railway tracks run side by side and never meet.']
    ], it = pick(items);
    return mk({ tag: 'Lines', text: it[0], hints: ['Think about what each word means.', 'Parallel: side by side. Perpendicular: at a right angle.'], explain: it[3] }, mcStr(it[1], it[2]));
  }
  function gTriType() {
    var t = pick(['equilateral', 'isosceles', 'scalene']), a = rnd(3, 8), b = rnd(3, 8), c, sides;
    if (t === 'equilateral') sides = [a, a, a];
    else if (t === 'isosceles') { while (b === a) b = rnd(3, 8); if (b >= 2 * a) b = a + 1; sides = [a, a, b]; }
    else { var tr = pick([[3, 4, 5], [4, 5, 6], [5, 6, 7], [5, 7, 9], [4, 6, 7], [6, 8, 10]]); sides = tr; }
    return mk({ tag: 'Triangles', text: 'A triangle has sides <b>' + sides.join(' cm, ') + ' cm</b>. What type of triangle is it?', hints: ['Count how many sides are equal.', 'Three equal is equilateral, two equal is isosceles, none equal is scalene.'], explain: 'It has ' + (t === 'equilateral' ? 'three equal sides' : t === 'isosceles' ? 'two equal sides' : 'no equal sides') + ', so it is ' + t + '.' }, mcStr(t, ['equilateral', 'isosceles', 'scalene', 'right-angled'].filter(function (x) { return x !== t; })));
  }
  function gGridRef() {
    var col = pick('ABCDE'.split('')), row = rnd(1, 4), ans = col + row;
    var m = mcStr(ans, [row + col, col + (row % 4 + 1), String.fromCharCode(((col.charCodeAt(0) - 65 + 1) % 5) + 65) + row]);
    return mk({ tag: 'Grid references', text: 'On a map, a castle is in <b>column ' + col + '</b> and <b>row ' + row + '</b>. What is its grid reference?', hints: ['Give the letter first and then the number.', 'Across, then up.'], explain: 'Column ' + col + ' and row ' + row + ' gives ' + ans + '.' }, m);
  }
  var POLY = [['triangle', 3], ['quadrilateral', 4], ['pentagon', 5], ['hexagon', 6], ['heptagon', 7], ['octagon', 8], ['nonagon', 9], ['decagon', 10]];
  function gPolyName() {
    var p = pick(POLY);
    if (Math.random() < 0.5) return Q({ tag: 'Polygons', text: 'How many sides does a <b>' + p[0] + '</b> have?', answer: String(p[1]), hints: ['Think of the prefix: pent-, hex-, hept-, oct-.', 'The number of sides is the number of corners.'], explain: 'A ' + p[0] + ' has ' + p[1] + ' sides.' });
    return mk({ tag: 'Polygons', text: 'Which polygon has <b>' + p[1] + ' sides</b>?', hints: ['Match the number of sides to the name.', 'Pentagon 5, hexagon 6, heptagon 7, octagon 8.'], explain: 'A ' + p[0] + ' has ' + p[1] + ' sides.' }, mcStr(p[0], shuffle(POLY.filter(function (x) { return x !== p; }).map(function (x) { return x[0]; })).slice(0, 3)));
  }

  /* ---------------- P6 ---------------- */
  function gNegDiff() {
    var a = rnd(1, 9), b = rnd(1, 9);
    return Q({ tag: 'Negative numbers', text: 'The temperature is <b>' + M + a + ' °C</b> at night and <b>' + b + ' °C</b> in the day. How many degrees warmer is it in the day?', answer: String(a + b), hints: ['Count from ' + M + a + ' up to 0, then on to ' + b + '.', 'Add the two distances.'], explain: a + ' + ' + b + ' = ' + (a + b) + ' degrees.' });
  }
  function gNegAddSub() {
    var a = rnd(-6, 6), b = rnd(1, 9), add = Math.random() < 0.5, ans = add ? a + b : a - b, m = mcNum(ans, [ans + 2, ans - 2, add ? a - b : a + b], sg);
    return mk({ tag: 'Negative numbers', text: 'Work out <b>' + sg(a) + (add ? ' + ' : ' ' + M + ' ') + b + '</b>.', hints: ['Use a number line. Adding moves right and subtracting moves left.', 'Start at ' + sg(a) + '.'], explain: sg(a) + (add ? ' + ' : ' ' + M + ' ') + b + ' = ' + sg(ans) + '.' }, m);
  }
  function gRound1dp() {
    var w = rnd(1, 9), d1 = rnd(1, 8), d2 = rnd(0, 9), x = w + d1 / 10 + d2 / 100, r = d2 >= 5 ? w + (d1 + 1) / 10 : w + d1 / 10;
    return Q({ tag: 'Rounding decimals', text: 'Round <b>' + x.toFixed(2) + '</b> to <b>1 decimal place</b>.', answer: T(Math.round(r * 10) / 10), hints: ['Look at the second decimal digit.', '5 or more rounds up. Less than 5 stays the same.'], explain: 'The second decimal digit is ' + d2 + ', so ' + (d2 >= 5 ? 'round up' : 'round down') + ' to ' + T(Math.round(r * 10) / 10) + '.' });
  }
  function gRound2dp() {
    var w = rnd(1, 9), d1 = rnd(1, 9), d2 = rnd(1, 8), d3 = rnd(0, 9), x = w + d1 / 10 + d2 / 100 + d3 / 1000, r = d3 >= 5 ? w + d1 / 10 + (d2 + 1) / 100 : w + d1 / 10 + d2 / 100;
    return Q({ tag: 'Rounding decimals', text: 'Round <b>' + x.toFixed(3) + '</b> to <b>2 decimal places</b>.', answer: T(Math.round(r * 100) / 100), hints: ['Look at the third decimal digit.', '5 or more rounds up.'], explain: 'The third decimal digit is ' + d3 + ', so the answer is ' + T(Math.round(r * 100) / 100) + '.' });
  }
  function gMentalMult() {
    var a = rnd(12, 49), b = rnd(3, 9);
    return Q({ tag: 'Multiplying in your head', text: 'Work out <b>' + a + ' × ' + b + '</b> in your head.', answer: String(a * b), hints: ['Split ' + a + ' into tens and ones.', Math.floor(a / 10) * 10 + ' × ' + b + ' and ' + a % 10 + ' × ' + b + ', then add.'], explain: Math.floor(a / 10) * 10 * b + ' + ' + (a % 10) * b + ' = ' + a * b + '.' });
  }
  function gDoubleHalve() {
    var a = pick([4, 6, 8, 12, 14, 16, 18, 24]), k = pick([5, 25]);
    return Q({ tag: 'Multiplying in your head', text: 'Work out <b>' + a + ' × ' + k + '</b>.', answer: String(a * k), hints: [k === 5 ? 'Multiply by 10 and then halve.' : 'Halve one number and double the other.', k === 5 ? a + ' × 10 = ' + a * 10 + '.' : 'Aim for × 100.'], explain: a + ' × ' + k + ' = ' + a * k + '.' });
  }
  function gShortDivRem() {
    var d = rnd(3, 8), q = rnd(12, 40), r = rnd(1, d - 1), n = d * q + r, askRem = Math.random() < 0.5;
    return Q({ tag: 'Short division', text: askRem ? 'What is the <b>remainder</b> when <b>' + n + '</b> is divided by <b>' + d + '</b>?' : 'How many <b>whole groups</b> of <b>' + d + '</b> are in <b>' + n + '</b>?', answer: String(askRem ? r : q), hints: ['Use the bus stop method for ' + n + ' ÷ ' + d + '.', 'The whole number is the answer to the division, and what is left over is the remainder.'], explain: n + ' ÷ ' + d + ' = ' + q + ' remainder ' + r + '.' });
  }
  function frSimp(n, d) { var g = gcd(n, d); return [n / g, d / g]; }
  function gCompareFr() {
    var d1 = pick([2, 3, 4, 5, 6, 8]), d2 = pick([3, 4, 5, 6, 8, 10]); while (d2 === d1) d2 = pick([3, 4, 5, 6, 8, 10]);
    var n1 = rnd(1, d1 - 1), n2 = rnd(1, d2 - 1); if (n1 * d2 === n2 * d1) n1 = n1 === d1 - 1 ? n1 - 1 || 1 : n1 + 1;
    if (n1 * d2 === n2 * d1) return gCompareFr();
    var a = frs(n1, d1), b = frs(n2, d2), ans = n1 * d2 > n2 * d1 ? a : b, lcm = d1 * d2 / gcd(d1, d2);
    return mk({ tag: 'Comparing fractions', text: 'Which is <b>bigger</b>: <b>' + a + '</b> or <b>' + b + '</b>?', hints: ['Find a common denominator.', 'The lowest common multiple of ' + d1 + ' and ' + d2 + ' is ' + lcm + '.'], explain: a + ' = ' + frs(n1 * lcm / d1, lcm) + ' and ' + b + ' = ' + frs(n2 * lcm / d2, lcm) + ', so ' + ans + ' is bigger.' }, mcStr(ans, [ans === a ? b : a, 'They are equal', 'Cannot tell']));
  }
  function gMultFr() {
    var pairs = [[1, 2, 1, 4], [1, 3, 1, 2], [2, 3, 3, 5], [1, 2, 3, 5], [3, 4, 2, 5], [2, 5, 5, 6], [1, 4, 1, 4], [3, 4, 4, 9], [2, 3, 3, 4]], p = pick(pairs), n = p[0] * p[2], d = p[1] * p[3], s = frSimp(n, d), ans = frs(s[0], s[1]);
    var wr = [frs(p[0] + p[2], p[1] + p[3]), frs(n, d), frs(p[0] * p[3], p[1] * p[2]), frs(s[0], s[1] + 1)].filter(function (x) { return x !== ans; });
    return mk({ tag: 'Multiplying fractions', text: 'Work out <b>' + frs(p[0], p[1]) + ' × ' + frs(p[2], p[3]) + '</b>. Give the answer in its simplest form.', hints: ['Multiply the tops, then multiply the bottoms.', 'Then simplify.'], explain: frs(p[0], p[1]) + ' × ' + frs(p[2], p[3]) + ' = ' + frs(n, d) + (frs(n, d) !== ans ? ' = ' + ans : '') + '.' }, mcStr(ans, wr));
  }
  var FORMS = [['1/4', 0.25, 25], ['1/5', 0.2, 20], ['2/5', 0.4, 40], ['1/2', 0.5, 50], ['3/5', 0.6, 60], ['3/4', 0.75, 75], ['7/10', 0.7, 70], ['9/10', 0.9, 90], ['1/10', 0.1, 10]];
  function gFDPOrder() {
    var t = shuffle(FORMS.slice()).slice(0, 3), f = [0, 1, 2].map(function (i) { var x = t[i]; return i === 0 ? x[0] : i === 1 ? String(x[1]) : x[2] + '%'; });
    var items = t.map(function (x, i) { return { s: f[i], v: x[2] }; }), small = Math.random() < 0.5;
    var sorted = items.slice().sort(function (a, b) { return a.v - b.v; }), ans = small ? sorted[0].s : sorted[2].s;
    return mk({ tag: 'Comparing', text: 'Which is the <b>' + (small ? 'smallest' : 'largest') + '</b>: <b>' + f.join('</b>, <b>') + '</b>?', hints: ['Change them all to percentages.', 'Then compare.'], explain: items.map(function (x) { return x.s + ' = ' + x.v + '%'; }).join(', ') + '. The ' + (small ? 'smallest' : 'largest') + ' is ' + ans + '.' }, mcStr(ans, f.filter(function (x) { return x !== ans; }).concat(['They are all equal'])));
  }
  function gMilesKm() {
    var a = pick([5, 10, 20, 30, 50, 100]);
    return Q({ tag: 'Imperial and metric', text: 'About how many <b>kilometres</b> is <b>' + a + ' miles</b>? (1 mile ≈ 1.6 km)', answer: T(a * 1.6), hints: ['Multiply the miles by 1.6.', a + ' × 1.6.'], explain: a + ' × 1.6 = ' + T(a * 1.6) + ' km.' });
  }
  function gTriArea() {
    var b = rnd(3, 12), h = rnd(2, 10); if ((b * h) % 2) b += 1;
    return Q({ tag: 'Area of a triangle', text: 'A triangle has a base of <b>' + b + ' cm</b> and a height of <b>' + h + ' cm</b>. What is its area in cm²?', answer: String(b * h / 2), hints: ['A triangle is half of a rectangle.', 'Multiply base by height, then halve.'], explain: b + ' × ' + h + ' = ' + b * h + ', and half of that is ' + b * h / 2 + ' cm².' });
  }
  function gVolBox() {
    var l = rnd(2, 6), w = rnd(2, 5), h = rnd(2, 4);
    return Q({ tag: 'Volume', text: 'A box is <b>' + l + ' cubes long</b>, <b>' + w + ' cubes wide</b> and <b>' + h + ' cubes high</b>. How many cubes fill it?', answer: String(l * w * h), hints: ['Count the cubes in one layer first: ' + l + ' × ' + w + '.', 'Multiply by the number of layers.'], explain: l + ' × ' + w + ' × ' + h + ' = ' + l * w * h + ' cubes.' });
  }
  function gCurrencyBack() {
    var r = pick([1.25, 1.5, 2, 1.2]), a = pick([8, 10, 12, 20, 40]), x = Math.round(a * r * 100) / 100, cur = pick([['$', 'dollars'], ['€', 'euros']]);
    return Q({ tag: 'Currency', text: 'In this example, £1 = ' + cur[0] + r.toFixed(2) + '. A toy costs <b>' + cur[0] + T(x) + '</b>. How much is that in pounds? (Give the number only.)', answer: String(a), hints: ['You are going from ' + cur[1] + ' back to pounds, so divide by the rate.', T(x) + ' ÷ ' + r + '.'], explain: T(x) + ' ÷ ' + r + ' = ' + a + ', so it costs £' + a + '.' });
  }
  function gCircleParts() {
    var r = rnd(2, 15), toD = Math.random() < 0.5;
    return Q({ tag: 'Parts of a circle', text: toD ? 'A circle has a <b>radius</b> of <b>' + r + ' cm</b>. What is its <b>diameter</b>?' : 'A circle has a <b>diameter</b> of <b>' + r * 2 + ' cm</b>. What is its <b>radius</b>?', answer: String(toD ? r * 2 : r), hints: ['The diameter is twice the radius.', toD ? 'Double ' + r + '.' : 'Halve ' + r * 2 + '.'], explain: toD ? '2 × ' + r + ' = ' + r * 2 + ' cm.' : r * 2 + ' ÷ 2 = ' + r + ' cm.' });
  }
  function gTransform() {
    var items = [
      ['Which move slides a shape without turning or flipping it?', 'translation', ['reflection', 'rotation', 'enlargement']],
      ['Which move flips a shape in a mirror line?', 'reflection', ['translation', 'rotation', 'enlargement']],
      ['Which move turns a shape about a point?', 'rotation', ['translation', 'reflection', 'enlargement']],
      ['A shape is moved 3 squares right. What is this transformation?', 'translation', ['reflection', 'rotation', 'enlargement']],
      ['A quarter turn about a corner is a...', 'rotation', ['translation', 'reflection', 'symmetry']]
    ], it = pick(items);
    return mk({ tag: 'Transformations', text: it[0], hints: ['Translation slides, reflection flips, rotation turns.', 'Think about what happens to the shape.'], explain: 'The answer is ' + it[1] + '.' }, mcStr(it[1], it[2]));
  }
  function gCube() {
    var n = rnd(2, 6), askCube = Math.random() < 0.6;
    if (askCube) return Q({ tag: 'Cube numbers', text: 'What is <b>' + n + '³</b>?', answer: String(n * n * n), hints: [n + '³ means ' + n + ' × ' + n + ' × ' + n + '.', n + ' × ' + n + ' = ' + n * n + ', then × ' + n + '.'], explain: n + ' × ' + n + ' × ' + n + ' = ' + n * n * n + '.' });
    var ans = n * n * n, m = mcNum(ans, [n * n, n * 3, n * n + n], String);
    return mk({ tag: 'Cube numbers', text: 'Which of these is a <b>cube number</b>?', hints: ['A cube number is a number multiplied by itself, then by itself again.', 'Try 2 × 2 × 2, 3 × 3 × 3.'], explain: ans + ' = ' + n + ' × ' + n + ' × ' + n + ', so it is a cube number.' }, m);
  }

  /* ---------------- P7 ---------------- */
  function gSigFig() {
    var k = pick([1, 2, 3]), digs = rnd(4, 5), n = rnd(Math.pow(10, digs - 1) + 100, Math.pow(10, digs) - 100);
    while (String(n).charAt(k) === '5') n += 10;
    var p = Math.pow(10, digs - k), ans = Math.round(n / p) * p;
    return Q({ tag: 'Significant figures', text: 'Round <b>' + n + '</b> to <b>' + k + ' significant figure' + (k > 1 ? 's' : '') + '</b>.', answer: String(ans), hints: ['Find the ' + (k === 1 ? 'first' : k === 2 ? 'first two' : 'first three') + ' digits. Look at the digit after them.', '5 or more rounds up. Fill with zeros.'], explain: n + ' to ' + k + ' s.f. is ' + ans + '.' });
  }
  function gNegContext() {
    var a = rnd(2, 9) * 10, b = rnd(2, 9) * 10, down = Math.random() < 0.5, ans = down ? -(a + b) : b - a, m = mcNum(ans, [a + b, a - b, -(a - b), ans + 10], sg);
    return mk({ tag: 'Negative numbers', text: down ? 'A diver is at <b>' + M + a + ' m</b> and descends another <b>' + b + ' m</b>. Where is the diver now?' : 'A submarine is at <b>' + M + a + ' m</b> and rises <b>' + b + ' m</b>. Where is it now?', hints: [down ? 'Going down makes the number smaller.' : 'Going up means adding.', 'Use a number line.'], explain: down ? M + a + ' ' + M + ' ' + b + ' = ' + sg(ans) + ' m.' : M + a + ' + ' + b + ' = ' + sg(ans) + ' m.' }, m);
  }
  function gLongMult() {
    var a = rnd(120, 480), b = rnd(12, 39);
    return Q({ tag: 'Long multiplication', text: 'Work out <b>' + a + ' × ' + b + '</b>.', answer: String(a * b), hints: ['Multiply by the ones digit, then by the tens digit.', a + ' × ' + b % 10 + ' = ' + a * (b % 10) + ' and ' + a + ' × ' + Math.floor(b / 10) * 10 + ' = ' + a * Math.floor(b / 10) * 10 + '.'], explain: a * (b % 10) + ' + ' + a * Math.floor(b / 10) * 10 + ' = ' + a * b + '.' });
  }
  function gDivDec() {
    var d = pick([2, 4, 5, 8]), n = rnd(3, 40); while (n % d === 0) n = rnd(3, 40);
    var ans = n / d;
    return Q({ tag: 'Division with decimals', text: 'Work out <b>' + n + ' ÷ ' + d + '</b> as a decimal.', answer: T(ans), hints: ['Divide, then add a decimal point and zeros to carry on.', 'Check: ' + T(ans) + ' × ' + d + ' should be ' + n + '.'], explain: n + ' ÷ ' + d + ' = ' + T(ans) + '.' });
  }
  function gFactorMult() {
    var a = rnd(12, 48), k = pick([12, 15]);
    return Q({ tag: 'Multiplying in your head', text: 'Work out <b>' + a + ' × ' + k + '</b>.', answer: String(a * k), hints: [k === 12 ? '× 12 is × 10 plus × 2.' : '× 15 is × 10 plus half as much again.', a + ' × 10 = ' + a * 10 + '.'], explain: a + ' × ' + k + ' = ' + a * k + '.' });
  }
  function gCancelMult() {
    var pairs = [[4, 9, 3, 8], [2, 5, 5, 6], [3, 4, 8, 9], [6, 7, 7, 12], [5, 8, 4, 15], [9, 10, 5, 6], [4, 15, 5, 8]], p = pick(pairs), n = p[0] * p[2], d = p[1] * p[3], s = frSimp(n, d), ans = frs(s[0], s[1]);
    var wr = [frs(n, d), frs(p[0] + p[2], p[1] + p[3]), frs(s[0] + 1, s[1]), frs(s[0], s[1] * 2)].filter(function (x) { return x !== ans; });
    return mk({ tag: 'Multiplying fractions', text: 'Work out <b>' + frs(p[0], p[1]) + ' × ' + frs(p[2], p[3]) + '</b> in its simplest form.', hints: ['Look for common factors to cancel first.', 'Or multiply across, then simplify.'], explain: frs(p[0], p[1]) + ' × ' + frs(p[2], p[3]) + ' = ' + frs(n, d) + ' = ' + ans + '.' }, mcStr(ans, wr));
  }
  function gFracOfWhole() {
    var w = pick([20, 24, 25, 28, 30, 36, 40, 45, 48, 50]), n = rnd(2, w - 1), s = frSimp(n, w), ans = frs(s[0], s[1]);
    var wr = [frs(n, w), frs(w - n, w), frs(s[0], s[1] + 1), frs(s[1], s[0])].filter(function (x) { return x !== ans; });
    return mk({ tag: 'Fractions as proportion', text: '<b>' + n + '</b> out of <b>' + w + '</b> pupils walk to school. What fraction walk, in its simplest form?', hints: ['Write the part over the whole.', 'Then simplify.'], explain: frs(n, w) + ' simplifies to ' + ans + '.' }, mcStr(ans, wr));
  }
  function gMultiplier() {
    var p = pick([40, 60, 80, 120, 200]), d = pick([10, 15, 20, 25, 30, 40]), up = Math.random() < 0.5, mult = (up ? 100 + d : 100 - d) / 100, ans = Math.round(p * mult * 100) / 100;
    return Q({ tag: 'Percentage multipliers', text: 'A price of <b>£' + p + '</b> is ' + (up ? 'increased' : 'reduced') + ' by <b>' + d + '%</b>. What is the new price? (£)', answer: T(ans), hints: ['The multiplier is ' + (up ? '100% + ' : '100% − ') + d + '% = ' + (up ? 100 + d : 100 - d) + '%.', 'Multiply the price by ' + mult + '.'], explain: p + ' × ' + mult + ' = £' + T(ans) + '.' });
  }
  function gExchBack() {
    var r = pick([1.15, 1.2, 1.25, 1.5]), a = pick([40, 80, 120, 200, 240]), x = Math.round(a * r * 100) / 100;
    return Q({ tag: 'Exchange rates', text: 'In this example £1 = €' + r.toFixed(2) + '. How many pounds is <b>€' + T(x) + '</b>? (Give the number only.)', answer: String(a), hints: ['Going from euros to pounds means dividing by the rate.', T(x) + ' ÷ ' + r + '.'], explain: T(x) + ' ÷ ' + r + ' = ' + a + ', so £' + a + '.' });
  }
  function gImpConv() {
    var c = pick([['oz', 'grams', 28], ['miles', 'km', 1.6], ['inches', 'cm', 2.5], ['pounds', 'grams', 450], ['pints', 'ml', 570]]), n = rnd(2, 9) * (c[2] === 1.6 ? 5 : 1), ans = Math.round(n * c[2] * 10) / 10;
    return Q({ tag: 'Imperial and metric', text: 'About how many <b>' + c[1] + '</b> is <b>' + n + ' ' + c[0] + '</b>? (1 ' + c[0].replace(/s$/, '') + ' ≈ ' + c[2] + ' ' + c[1] + ')', answer: T(ans), hints: ['Multiply by the conversion rate.', n + ' × ' + c[2] + '.'], explain: n + ' × ' + c[2] + ' = ' + T(ans) + ' ' + c[1] + '.' });
  }
  function gBudgetSave() {
    var s = rnd(2, 8) * 5, m = rnd(4, 12), g = s * m;
    return Q({ tag: 'Budgeting', text: 'Mia wants a bike that costs <b>£' + g + '</b>. She saves <b>£' + s + '</b> a month. How many months does she need?', answer: String(m), hints: ['Divide the cost by the amount saved each month.', g + ' ÷ ' + s + '.'], explain: g + ' ÷ ' + s + ' = ' + m + ' months.' });
  }
  function gCirc() {
    var d = pick([2, 4, 5, 6, 8, 10, 12, 20]), r = Math.random() < 0.4, ans = Math.round(3.14 * d * 100) / 100;
    return Q({ tag: 'Circumference', text: 'A circle has a ' + (r ? '<b>radius</b> of <b>' + d / 2 + ' cm</b>' : '<b>diameter</b> of <b>' + d + ' cm</b>') + '. Find its circumference. Use π ≈ 3.14. (cm)', answer: T(ans), hints: [r ? 'Double the radius to get the diameter.' : 'Circumference = π × diameter.', '3.14 × ' + d + '.'], explain: '3.14 × ' + d + ' = ' + T(ans) + ' cm.' });
  }
  function gBaseAngle() {
    var apex = pick([20, 30, 40, 50, 60, 80, 100, 120, 140]), ans = (180 - apex) / 2;
    return Q({ tag: 'Triangle angles', text: 'An <b>isosceles</b> triangle has an angle of <b>' + apex + '°</b> between its two equal sides. What size is each of the other two angles? (°)', answer: String(ans), hints: ['The three angles add up to 180°.', '180 − ' + apex + ', then divide by 2.'], explain: '(180 − ' + apex + ') ÷ 2 = ' + ans + '°.' });
  }
  function gTranslate() {
    var x = rnd(0, 6), y = rnd(0, 6), r = rnd(-3, 4), u = rnd(-3, 4); while (x + r < 0) r++; while (y + u < 0) u++;
    var ans = '(' + (x + r) + ', ' + (y + u) + ')', wr = ['(' + (x + u) + ', ' + (y + r) + ')', '(' + (x - r < 0 ? x + r + 1 : x - r) + ', ' + (y + u) + ')', '(' + (x + r) + ', ' + (y + u + 1) + ')'].filter(function (v) { return v !== ans; });
    return mk({ tag: 'Translation', text: 'The point <b>(' + x + ', ' + y + ')</b> is translated <b>' + Math.abs(r) + ' ' + (r >= 0 ? 'right' : 'left') + '</b> and <b>' + Math.abs(u) + ' ' + (u >= 0 ? 'up' : 'down') + '</b>. Where does it move to?', hints: ['Right and left change x. Up and down change y.', 'Add for right or up, subtract for left or down.'], explain: 'x: ' + x + (r >= 0 ? ' + ' : ' − ') + Math.abs(r) + ' = ' + (x + r) + '. y: ' + y + (u >= 0 ? ' + ' : ' − ') + Math.abs(u) + ' = ' + (y + u) + '.' }, mcStr(ans, wr));
  }

  /* ---------- which topic gets which makers; e easy, m medium, h hard ---------- */
  var MAP = {
    501: [[gNegOrder, 'e'], [gNegMove, 'e'], [gPartition, 'm']],
    502: [[gPartAdd, 'e'], [gZeroOne, 'e'], [gBus, 'm'], [gOrderOps, 'm']],
    503: [[gNumDen, 'e']],
    504: [[gFDPFriend, 'e'], [gCompareFD, 'm']],
    505: [[gCoins, 'e'], [gImperial, 'm'], [gCurrency, 'm']],
    507: [[gParPerp, 'e'], [gTriType, 'm'], [gGridRef, 'e'], [gPolyName, 'e']],
    1: [[gNegDiff, 'm'], [gNegAddSub, 'm'], [gRound1dp, 'e'], [gRound2dp, 'h']],
    2: [[gMentalMult, 'e'], [gDoubleHalve, 'm'], [gShortDivRem, 'm']],
    3: [[gCompareFr, 'm'], [gMultFr, 'h']],
    4: [[gFDPOrder, 'm'], [gFDPFriend, 'e']],
    5: [[gMilesKm, 'm'], [gTriArea, 'm'], [gVolBox, 'e'], [gCurrencyBack, 'h'], [gImperial, 'e']],
    7: [[gTriType, 'e'], [gPolyName, 'e'], [gCircleParts, 'e'], [gTransform, 'm'], [gParPerp, 'm']],
    10: [[gCube, 'm']],
    701: [[gSigFig, 'm'], [gNegContext, 'm']],
    702: [[gLongMult, 'e'], [gDivDec, 'h'], [gFactorMult, 'm']],
    703: [[gCancelMult, 'h'], [gFracOfWhole, 'm']],
    704: [[gMultiplier, 'm'], [gFDPOrder, 'h']],
    705: [[gExchBack, 'm'], [gImpConv, 'm'], [gBudgetSave, 'e']],
    707: [[gCirc, 'm'], [gBaseAngle, 'm'], [gTranslate, 'h'], [gTransform, 'e']]
  };
  window.BT.MAP = MAP;
  var prev = S.extraMakers;
  S.extraMakers = function (n, level) {
    var base = prev ? (prev(n, level) || []) : [], list = MAP[Number(n)];
    if (!list) return base;
    var out = list.filter(function (x) { return level === 'low' ? x[1] === 'e' || x[1] === 'm' && list.length < 3 : level === 'high' ? x[1] !== 'e' : true; }).map(function (x) { return x[0]; });
    if (!out.length) out = list.map(function (x) { return x[0]; });
    /* a longer line-up so the new skills show up several times in every set of 100 */
    return out.concat(out.length < 4 ? out : []).concat(base);
  };
})();
