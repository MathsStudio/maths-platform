/* gap3.js: more practice-question makers for S1 to S3 topics that had few or no extra types (standard form, percentage change,
   wages and tax, straight lines, simultaneous equations, Pythagoras, circles, similarity, bearings, expanding and factorising,
   equations, solids, statistics, speed). Added through S.extraMakers beside the existing makers. Nothing is removed. */
(function () {
  'use strict';
  var S = Studio, H = S.h, K = S.kit, Q = K.Q, rnd = H.rnd, pick = H.pick, shuffle = H.shuffle, T = H.trimNum, BT = window.BT;
  if (!BT || !BT.svg || !BT.txt || !BT.gap1) return;
  var svg = BT.svg, txt = BT.txt, G = BT.gap1, M = '−';
  function mcStr(ans, wrong) { var out = [ans]; wrong.forEach(function (w) { if (out.length < 4 && out.indexOf(w) < 0) out.push(w); }); var i = 1; while (out.length < 4) { var f = String(ans) + String(i++); if (out.indexOf(f) < 0) out.push(f); } return { options: shuffle(out), answer: ans }; }
  function mk(o, m) { o.type = 'mc'; o.options = m.options; o.answer = m.answer; return Q(o); }
  function r6(x) { return Math.round(x * 1000000) / 1000000; }
  function r2(x) { return Math.round(x * 100) / 100; }
  function gcd(a, b) { return b ? gcd(b, a % b) : Math.abs(a); }
  function gbp(x) { return '£' + (Math.round(x * 100) % 100 === 0 ? String(Math.round(x)) : r2(x).toFixed(2)); }
  function neg(n) { return n < 0 ? M + Math.abs(n) : String(n); }
  function sg(n, first) { return n < 0 ? (first ? M : ' ' + M + ' ') + Math.abs(n) : (first ? '' : ' + ') + n; }
  function lin(a, b) { return (a === 1 ? '' : a === -1 ? M : a) + 'x' + (b ? sg(b) : ''); }
  var SUP = { 2: '²', 3: '³', 4: '⁴' };

  /* ---------- indices, standard form ---------- */
  function gIndices(lv) {
    var kind = pick(['eval', 'law', 'root', 'zero']);
    if (kind === 'eval') { var b = rnd(2, 9), e = rnd(2, lv >= 5 ? 4 : 3); if (b > 5) e = 2; return Q({ tag: 'Powers and roots', text: 'What is <b>' + b + SUP[e] + '</b>?', answer: String(Math.pow(b, e)), hints: ['Multiply ' + b + ' by itself ' + e + ' times.'], explain: b + SUP[e] + ' = ' + Math.pow(b, e) + '.' }); }
    if (kind === 'root') { var r = rnd(3, 15); return Q({ tag: 'Powers and roots', text: 'What is the <b>square root</b> of <b>' + r * r + '</b>?', answer: String(r), hints: ['Which number multiplied by itself gives ' + r * r + '?'], explain: r + ' × ' + r + ' = ' + r * r + '.' }); }
    if (kind === 'zero') { var z = rnd(2, 12); return mk({ tag: 'Powers and roots', text: 'What is <b>' + z + '<sup>0</sup></b>?', hints: ['Any number (except 0) to the power 0 is the same special value.'], explain: 'Any non-zero number to the power 0 equals 1.' }, mcStr('1', ['0', String(z), 'undefined'])); }
    var a = rnd(2, 6), m = rnd(2, 6), n = rnd(2, 5), op = pick(['×', '÷']), ans = op === '×' ? m + n : m + n;
    if (op === '÷') return mk({ tag: 'Laws of indices', text: 'Write <b>x<sup>' + (m + n) + '</sup> ÷ x<sup>' + n + '</sup></b> as a single power of x.', hints: ['When you divide powers of the same letter, subtract the indices.'], explain: (m + n) + ' − ' + n + ' = ' + m + ', so the answer is x<sup>' + m + '</sup>.' }, mcStr('x<sup>' + m + '</sup>', ['x<sup>' + (m + 2 * n) + '</sup>', 'x<sup>' + (m * n) + '</sup>', 'x<sup>' + (m + n) + '</sup>']));
    return mk({ tag: 'Laws of indices', text: 'Write <b>x<sup>' + m + '</sup> × x<sup>' + n + '</sup></b> as a single power of x.', hints: ['When you multiply powers of the same letter, add the indices.'], explain: m + ' + ' + n + ' = ' + (m + n) + ', so the answer is x<sup>' + (m + n) + '</sup>.' }, mcStr('x<sup>' + (m + n) + '</sup>', ['x<sup>' + (m * n) + '</sup>', 'x<sup>' + Math.abs(m - n) + '</sup>', '2x<sup>' + (m + n) + '</sup>']));
  }
  function gStdForm(lv) {
    var kind = pick(['to', 'from', 'to', 'small']);
    if (kind === 'to' || kind === 'small') { var d = rnd(11, 99) / 10, e = kind === 'to' ? rnd(2, 7) : -rnd(2, 6), val = d * Math.pow(10, e); var plain = kind === 'to' ? String(Math.round(val)).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : T(r6(val));
      var ans = T(d) + ' × 10<sup>' + e + '</sup>'; var wrong = [T(d) + ' × 10<sup>' + (e + (kind === 'to' ? 1 : -1)) + '</sup>', T(d * 10) + ' × 10<sup>' + e + '</sup>', T(d) + ' × 10<sup>' + (-e) + '</sup>', T(r6(d / 10)) + ' × 10<sup>' + (e + 1) + '</sup>'];
      return mk({ tag: 'Standard form', text: 'Write <b>' + plain + '</b> in <b>standard form</b>.', hints: ['Standard form is a number between 1 and 10, multiplied by a power of 10.', kind === 'to' ? 'Count how many places the decimal point moves to the left.' : 'For a small number, the power of 10 is negative.'], explain: plain + ' = ' + ans + '.' }, mcStr(ans, wrong)); }
    var d2 = rnd(11, 99) / 10, e2 = rnd(2, 6) * (Math.random() < 0.4 ? -1 : 1), v = d2 * Math.pow(10, e2), pl = e2 > 0 ? String(Math.round(v)) : T(r6(v));
    return Q({ tag: 'Standard form', text: 'Write <b>' + T(d2) + ' × 10<sup>' + e2 + '</sup></b> as an ordinary number.', answer: pl, hints: [e2 > 0 ? 'Move the decimal point ' + e2 + ' places to the right.' : 'Move the decimal point ' + (-e2) + ' places to the left.'], explain: T(d2) + ' × 10<sup>' + e2 + '</sup> = ' + pl + '.' });
  }
  function gSigFig(lv) {
    var n = rnd(10000, 99999) + rnd(0, 99) / 100, sf = pick([1, 2, 3]), ans, s = n;
    var mag = Math.pow(10, Math.floor(Math.log10(n)) - sf + 1); ans = Math.round(n / mag) * mag;
    return Q({ tag: 'Significant figures', text: 'Round <b>' + T(r2(n)) + '</b> to <b>' + sf + ' significant figure' + (sf > 1 ? 's' : '') + '</b>.', answer: String(Math.round(ans)), hints: ['Count from the first digit that is not zero.', 'Look at the next digit to decide whether to round up.'], explain: T(r2(n)) + ' rounds to ' + Math.round(ans) + '.' });
  }

  /* ---------- percentage change, finance ---------- */
  function gPctChange(lv) {
    var kind = pick(lv >= 6 ? ['inc', 'dec', 'rev', 'comp', 'chg'] : ['inc', 'dec', 'chg', 'inc']);
    var P = pick([20, 40, 50, 60, 80, 120, 150, 200, 250, 400, 500]), p = pick([5, 10, 15, 20, 25, 30, 12.5]);
    if (kind === 'inc') return Q({ tag: 'Percentage change', text: 'A jacket costs <b>£' + P + '</b>. The price goes <b>up by ' + p + '%</b>. What is the new price in £?', answer: T(r6(P * (1 + p / 100))), hints: ['Find ' + p + '% of £' + P + ', then add it on.'], explain: p + '% of ' + P + ' = ' + T(r6(P * p / 100)) + '. ' + P + ' + ' + T(r6(P * p / 100)) + ' = ' + T(r6(P * (1 + p / 100))) + '.' });
    if (kind === 'dec') return Q({ tag: 'Percentage change', text: 'A bike costs <b>£' + P + '</b>. In a sale it is reduced by <b>' + p + '%</b>. What is the sale price in £?', answer: T(r6(P * (1 - p / 100))), hints: ['Find ' + p + '% of the price, then take it off.'], explain: p + '% of ' + P + ' = ' + T(r6(P * p / 100)) + '. ' + P + ' − ' + T(r6(P * p / 100)) + ' = ' + T(r6(P * (1 - p / 100))) + '.' });
    if (kind === 'chg') { var o = pick([20, 40, 50, 80, 200, 250]), nw = o + o * pick([10, 20, 25, 50]) / 100 * (Math.random() < 0.5 ? 1 : -1), ch = (nw - o) / o * 100;
      return Q({ tag: 'Percentage change', text: 'A price changes from <b>£' + o + '</b> to <b>£' + T(r6(nw)) + '</b>. What is the <b>percentage ' + (ch > 0 ? 'increase' : 'decrease') + '</b>?', answer: T(r6(Math.abs(ch))), hints: ['Percentage change = change ÷ original × 100.'], explain: 'Change = ' + T(r6(Math.abs(nw - o))) + '. ' + T(r6(Math.abs(nw - o))) + ' ÷ ' + o + ' × 100 = ' + T(r6(Math.abs(ch))) + '%.' }); }
    if (kind === 'rev') { var pp = pick([10, 20, 25, 40]), orig = pick([40, 50, 80, 100, 120, 200]), after = orig * (1 + pp / 100);
      return Q({ tag: 'Reverse percentages', text: 'After a <b>' + pp + '% increase</b>, a price is <b>£' + T(r6(after)) + '</b>. What was the original price in £?', answer: String(orig), hints: ['The new price is ' + (100 + pp) + '% of the original.', 'Divide by ' + (100 + pp) + ' to find 1%, then multiply by 100.'], explain: T(r6(after)) + ' ÷ ' + (100 + pp) + ' × 100 = ' + orig + '.' }); }
    var inv = pick([500, 1000, 2000, 4000]), rt = pick([2, 3, 4, 5]), yrs = pick([2, 3]), amt = inv * Math.pow(1 + rt / 100, yrs);
    return Q({ tag: 'Compound interest', text: '£' + inv + ' is invested for <b>' + yrs + ' years</b> at <b>' + rt + '% compound interest</b> a year. How much is it worth after ' + yrs + ' years? Give your answer to the nearest penny.', answer: r2(amt).toFixed(2), hints: ['Each year, multiply by ' + T(r6(1 + rt / 100)) + '.', 'Use the multiplier ' + yrs + ' times.'], explain: inv + ' × ' + T(r6(1 + rt / 100)) + '<sup>' + yrs + '</sup> = ' + r2(amt).toFixed(2) + '.' });
  }
  function gWages(lv) {
    var kind = pick(['ot', 'tax', 'hp', 'ni']);
    if (kind === 'ot') { var rate = pick([10, 12, 14, 15, 16]), base = pick([35, 37, 40]), over = rnd(2, 8), mult = pick([1.5, 2]), pay = rate * base + over * rate * mult;
      return Q({ tag: 'Wages and overtime', text: 'Jo earns <b>£' + rate + '</b> an hour for a <b>' + base + '-hour</b> week. Overtime is paid at <b>' + (mult === 1.5 ? 'time and a half' : 'double time') + '</b>. One week she works <b>' + (base + over) + '</b> hours. What is her pay in £?', answer: T(r6(pay)), hints: ['Pay the basic hours first.', 'Overtime rate = ' + T(rate * mult) + ' an hour. Multiply by the extra hours.'], explain: base + ' × ' + rate + ' = ' + base * rate + '. ' + over + ' × ' + T(rate * mult) + ' = ' + T(over * rate * mult) + '. Total £' + T(r6(pay)) + '.' }); }
    if (kind === 'tax') { var pa = 12570, inc = pick([18570, 20570, 22570, 24570]), tx = (inc - pa) * 0.2;
      return Q({ tag: 'Income tax', text: 'Mia earns <b>£' + inc + '</b> a year. She pays <b>no tax</b> on the first <b>£' + pa + '</b> and <b>20%</b> on the rest. How much income tax does she pay in a year?', answer: T(r6(tx)), hints: ['Take away the tax-free amount first.', 'Then find 20% of what is left.'], explain: inc + ' − ' + pa + ' = ' + (inc - pa) + '. 20% of ' + (inc - pa) + ' = ' + T(r6(tx)) + '.' }); }
    if (kind === 'ni') { var wk = pick([400, 500, 600, 800]), thr = 242, rt = 8, nic = (wk - thr) * rt / 100;
      return Q({ tag: 'Income tax', text: 'National Insurance is <b>8%</b> of weekly pay over <b>£' + thr + '</b>. Sam earns <b>£' + wk + '</b> a week. How much National Insurance does he pay? (£)', answer: T(r6(nic)), hints: ['Take off the first £' + thr + ', then find 8% of the rest.'], explain: wk + ' − ' + thr + ' = ' + (wk - thr) + '. 8% of ' + (wk - thr) + ' = ' + T(r6(nic)) + '.' }); }
    var cash = pick([300, 400, 500, 600, 800]), dep = pick([10, 20, 25]), m = pick([12, 18, 24]), mon = pick([20, 25, 30, 40]), tot = cash * dep / 100 + m * mon;
    return Q({ tag: 'Hire purchase', text: 'A TV costs <b>£' + cash + '</b> cash. On hire purchase it is a <b>' + dep + '% deposit</b> plus <b>' + m + ' monthly payments of £' + mon + '</b>. What is the total hire purchase price in £?', answer: T(r6(tot)), hints: ['Work out the deposit, then the monthly payments added together.'], explain: 'Deposit £' + T(cash * dep / 100) + '. ' + m + ' × ' + mon + ' = ' + m * mon + '. Total £' + T(r6(tot)) + '.' });
  }
  function gUnitPrice(lv) {
    var a = pick([[250, 1.5], [500, 2.4], [400, 1.8], [750, 3.3]]), b = pick([[500, 2.5], [1000, 4.2], [800, 3.4], [1500, 6.0]]), ua = a[1] / a[0], ub = b[1] / b[0];
    if (Math.abs(ua - ub) < 0.0001) b = [b[0], b[1] + 0.2], ub = b[1] / b[0];
    var best = ua < ub ? 'A' : 'B';
    return mk({ tag: 'Best buys', text: 'Pack <b>A</b>: <b>' + a[0] + ' g</b> for <b>' + gbp(a[1]) + '</b>. Pack <b>B</b>: <b>' + b[0] + ' g</b> for <b>' + gbp(b[1]) + '</b>. Which is the <b>better buy</b>?', hints: ['Find the price of 1 g (or 100 g) for each pack.'], explain: 'A costs ' + T(r6(ua * 100)) + 'p per 100 g and B costs ' + T(r6(ub * 100)) + 'p per 100 g, so ' + best + ' is cheaper per gram.' }, mcStr('Pack ' + best, ['Pack ' + (best === 'A' ? 'B' : 'A'), 'They cost the same', 'Cannot tell']));
  }

  /* ---------- straight lines, simultaneous equations, equations ---------- */
  function gLine(lv) {
    var kind = pick(['grad', 'mc', 'y', 'int']);
    if (kind === 'grad') { var x1 = rnd(0, 5), y1 = rnd(-3, 6), m = pick([-3, -2, -1, 1, 2, 3, 4, 0.5]), dx = m === 0.5 ? 4 : rnd(1, 4), x2 = x1 + dx, y2 = y1 + m * dx;
      return Q({ tag: 'Gradient', text: 'Find the <b>gradient</b> of the line through <b>(' + x1 + ', ' + neg(y1) + ')</b> and <b>(' + x2 + ', ' + neg(y2) + ')</b>.', answer: T(m), hints: ['Gradient = change in y ÷ change in x.'], explain: '(' + neg(y2) + ' − ' + neg(y1) + ') ÷ (' + x2 + ' − ' + x1 + ') = ' + T(y2 - y1) + ' ÷ ' + dx + ' = ' + T(m) + '.' }); }
    var m2 = pick([-4, -3, -2, -1, 2, 3, 4, 5]), c = rnd(-6, 9), eq = 'y = ' + (m2 === 1 ? '' : m2 === -1 ? M : neg(m2)) + 'x' + (c ? sg(c) : '');
    if (kind === 'mc') return mk({ tag: 'Equation of a line', text: 'A line has equation <b>' + eq + '</b>. Which is its <b>gradient</b> and <b>y-intercept</b>?', hints: ['In y = mx + c, m is the gradient and c is where the line crosses the y-axis.'], explain: 'Gradient ' + neg(m2) + ', y-intercept ' + neg(c) + '.' }, mcStr('gradient ' + neg(m2) + ', y-intercept ' + neg(c), ['gradient ' + neg(c) + ', y-intercept ' + neg(m2), 'gradient ' + neg(-m2) + ', y-intercept ' + neg(c), 'gradient ' + neg(m2) + ', y-intercept ' + neg(-c)]));
    if (kind === 'y') { var x = rnd(-3, 5); return Q({ tag: 'Equation of a line', text: 'A line has equation <b>' + eq + '</b>. What is the value of <b>y</b> when <b>x = ' + neg(x) + '</b>?', answer: String(m2 * x + c), hints: ['Replace x with ' + neg(x) + ' and work it out.'], explain: 'y = ' + neg(m2) + ' × ' + neg(x) + (c < 0 ? ' − ' + Math.abs(c) : ' + ' + c) + ' = ' + (m2 * x + c) + '.' }); }
    var xi = rnd(2, 8), yi = rnd(1, 10);
    return Q({ tag: 'Equation of a line', text: 'The line <b>y = ' + m2 + 'x + ' + (yi) + '</b> crosses the <b>x-axis</b> when y = 0. What is the value of x at this point? Give an answer to 2 d.p. if needed.', answer: T(r2(-yi / m2)), hints: ['Put y = 0 and solve the equation.'], explain: '0 = ' + m2 + 'x + ' + yi + ', so x = ' + M + yi + ' ÷ ' + neg(m2) + ' = ' + T(r2(-yi / m2)) + '.' });
  }
  function gSimul(lv) {
    var x = rnd(1, 7), y = rnd(1, 7), a = rnd(1, 3), b = rnd(1, 3), c = rnd(1, 3), d = rnd(1, 3);
    if (a * d === b * c) d++;
    var kind = pick(['x', 'y']); if (lv >= 6 && Math.random() < 0.5) { a = pick([2, 3]); }
    var e1 = (a === 1 ? '' : a) + 'x + ' + (b === 1 ? '' : b) + 'y = ' + (a * x + b * y), e2 = (c === 1 ? '' : c) + 'x + ' + (d === 1 ? '' : d) + 'y = ' + (c * x + d * y);
    return Q({ tag: 'Simultaneous equations', text: 'Solve <b>' + e1 + '</b> and <b>' + e2 + '</b>. What is the value of <b>' + kind + '</b>?', answer: String(kind === 'x' ? x : y), hints: ['Make the number in front of x (or y) the same in both equations, then subtract.', 'Put your answer back into one equation to find the other letter.'], explain: 'x = ' + x + ' and y = ' + y + '. Check: ' + a + ' × ' + x + ' + ' + b + ' × ' + y + ' = ' + (a * x + b * y) + '.' });
  }
  function gEqn(lv) {
    var kind = pick(['one', 'two', 'ineq', 'subj']);
    if (kind === 'one') { var a = rnd(2, 9), x = rnd(-5, 12), b = rnd(-9, 15); return Q({ tag: 'Solving equations', text: 'Solve <b>' + lin(a, b) + ' = ' + (a * x + b) + '</b>.', answer: String(x), hints: ['Undo the plus or minus first, then divide.'], explain: a + 'x = ' + (a * x) + ', so x = ' + x + '.' }); }
    if (kind === 'two') { var p = rnd(4, 9), q = rnd(1, p - 2), xx = rnd(2, 9), r = rnd(1, 9); return Q({ tag: 'Solving equations', text: 'Solve <b>' + p + 'x ' + M + ' ' + r + ' = ' + q + 'x + ' + (p * xx - r - q * xx) + '</b>.', answer: String(xx), hints: ['Collect the x terms on one side first.'], explain: (p - q) + 'x = ' + (p * xx - q * xx) + ', so x = ' + xx + '.' }); }
    if (kind === 'ineq') { var m = rnd(2, 6), n = rnd(1, 9), k = m * rnd(2, 8) + n, lim = (k - n) / m; return mk({ tag: 'Inequalities', text: 'Solve <b>' + m + 'x + ' + n + ' &lt; ' + k + '</b>.', hints: ['Solve it like an equation, but keep the inequality sign.'], explain: m + 'x &lt; ' + (k - n) + ', so x &lt; ' + lim + '.' }, mcStr('x &lt; ' + lim, ['x &gt; ' + lim, 'x &lt; ' + (k + n), 'x &lt; ' + r2((k - n) * m)])); }
    var a2 = rnd(2, 6), b2 = rnd(2, 9); return mk({ tag: 'Change the subject', text: 'Make <b>x</b> the subject of <b>y = ' + a2 + 'x + ' + b2 + '</b>.', hints: ['Undo the + ' + b2 + ' first, then divide by ' + a2 + '.'], explain: 'y ' + M + ' ' + b2 + ' = ' + a2 + 'x, so x = (y ' + M + ' ' + b2 + ') ÷ ' + a2 + '.' }, mcStr('x = (y ' + M + ' ' + b2 + ') ÷ ' + a2, ['x = (y + ' + b2 + ') ÷ ' + a2, 'x = y ÷ ' + a2 + ' ' + M + ' ' + b2 + ' × ' + a2, 'x = ' + a2 + '(y ' + M + ' ' + b2 + ')']));
  }
  function gExpand(lv) {
    var kind = pick(lv <= 4 ? ['a', 'f'] : ['a', 'foil', 'fac', 'dots']);
    var a = rnd(2, 9), b = rnd(2, 9), c = rnd(1, 9);
    if (kind === 'a') return mk({ tag: 'Brackets', text: 'Expand <b>' + a + '(x + ' + b + ')</b>.', hints: ['Multiply everything inside the bracket by ' + a + '.'], explain: a + ' × x = ' + a + 'x and ' + a + ' × ' + b + ' = ' + a * b + '.' }, mcStr(a + 'x + ' + a * b, [a + 'x + ' + b, 'x + ' + a * b, (a + 1) + 'x + ' + a * b]));
    if (kind === 'f') return mk({ tag: 'Brackets', text: 'Expand and simplify <b>' + a + '(x + ' + b + ') + ' + c + 'x</b>.', hints: ['Expand first, then collect the x terms.'], explain: a + 'x + ' + a * b + ' + ' + c + 'x = ' + (a + c) + 'x + ' + a * b + '.' }, mcStr((a + c) + 'x + ' + a * b, [(a + c) + 'x + ' + b, a + 'x + ' + a * b + c, (a * c) + 'x + ' + a * b]));
    if (kind === 'foil') { var p = rnd(1, 6), q = rnd(1, 6); return mk({ tag: 'Expanding brackets', text: 'Expand and simplify <b>(x + ' + p + ')(x + ' + q + ')</b>.', hints: ['Multiply each term in the first bracket by each term in the second.'], explain: 'x² + ' + q + 'x + ' + p + 'x + ' + p * q + ' = x² + ' + (p + q) + 'x + ' + p * q + '.' }, mcStr('x² + ' + (p + q) + 'x + ' + p * q, ['x² + ' + (p * q) + 'x + ' + (p + q), 'x² + ' + (p + q) + 'x', '2x + ' + (p + q)])); }
    if (kind === 'fac') { var k = rnd(2, 6), m = rnd(2, 6), n = rnd(2, 6); if (m === n) n++; return mk({ tag: 'Factorising', text: 'Factorise <b>' + (k * m) + 'x + ' + (k * n) + '</b> fully.', hints: ['What is the biggest number that goes into both ' + k * m + ' and ' + k * n + '?'], explain: 'The common factor is ' + k + ': ' + k + '(' + m + 'x + ' + n + ').' }, mcStr(k + '(' + m + 'x + ' + n + ')', [m + '(' + k + 'x + ' + n + ')', k + '(' + m + 'x + ' + k * n + ')', 'x(' + k * m + ' + ' + k * n + ')'])); }
    var s = rnd(2, 9); return mk({ tag: 'Factorising', text: 'Factorise <b>x² ' + M + ' ' + s * s + '</b>.', hints: ['This is a difference of two squares: a² ' + M + ' b² = (a + b)(a ' + M + ' b).'], explain: 'x² ' + M + ' ' + s * s + ' = (x + ' + s + ')(x ' + M + ' ' + s + ').' }, mcStr('(x + ' + s + ')(x ' + M + ' ' + s + ')', ['(x ' + M + ' ' + s + ')²', '(x + ' + s * s + ')(x ' + M + ' 1)', 'x(x ' + M + ' ' + s * s + ')']));
  }
  function gSubst(lv) {
    var kind = pick(['sub', 'like']);
    if (kind === 'sub') { var a = rnd(2, 9), x = rnd(-4, 8), b = rnd(1, 9); return Q({ tag: 'Substitution', text: 'Work out the value of <b>' + a + 'x + ' + b + '</b> when <b>x = ' + neg(x) + '</b>.', answer: String(a * x + b), hints: ['Replace x with ' + neg(x) + ', then multiply before you add.'], explain: a + ' × ' + neg(x) + ' + ' + b + ' = ' + (a * x + b) + '.' }); }
    var a2 = rnd(2, 9), b2 = rnd(2, 9), c2 = rnd(2, 9), d2 = rnd(1, 8); return mk({ tag: 'Like terms', text: 'Simplify <b>' + a2 + 'x + ' + b2 + 'y ' + M + ' ' + c2 + 'x + ' + d2 + 'y</b>.', hints: ['Collect the x terms together and the y terms together.'], explain: '(' + a2 + ' ' + M + ' ' + c2 + ')x + (' + b2 + ' + ' + d2 + ')y.' }, mcStr((a2 - c2 === 0 ? '' : (a2 - c2 === 1 ? '' : a2 - c2 === -1 ? M : neg(a2 - c2))) + (a2 - c2 === 0 ? '' : 'x') + (a2 - c2 === 0 ? '' : ' + ') + (b2 + d2) + 'y', [(a2 + c2) + 'x + ' + (b2 + d2) + 'y', (a2 - c2) + 'x + ' + (b2 - d2) + 'y', (a2 + b2 + d2 - c2) + 'xy']));
  }
  function gNth(lv) {
    var a = rnd(2, 9), b = rnd(-5, 9), kind = pick(['nth', 'term']), seq = [1, 2, 3, 4].map(function (n) { return a * n + b; });
    if (kind === 'nth') return mk({ tag: 'nth term', text: 'Find the <b>nth term</b> of the sequence <b>' + seq.map(neg).join(', ') + '</b>, …', hints: ['The common difference is ' + a + ', so start with ' + a + 'n.', 'Then see what you add or subtract to get the first term.'], explain: 'The nth term is ' + a + 'n ' + (b < 0 ? M + ' ' + Math.abs(b) : '+ ' + b) + '.' }, mcStr(a + 'n ' + (b < 0 ? M + ' ' + Math.abs(b) : '+ ' + b), [(a + 1) + 'n ' + (b < 0 ? M + ' ' + Math.abs(b) : '+ ' + b), b + 'n + ' + a, a + 'n ' + (b < 0 ? '+ ' + Math.abs(b) : M + ' ' + b)]));
    var n = rnd(10, 40); return Q({ tag: 'nth term', text: 'The nth term of a sequence is <b>' + a + 'n ' + (b < 0 ? M + ' ' + Math.abs(b) : '+ ' + b) + '</b>. What is the <b>' + n + 'th</b> term?', answer: String(a * n + b), hints: ['Replace n with ' + n + '.'], explain: a + ' × ' + n + (b < 0 ? ' − ' : ' + ') + Math.abs(b) + ' = ' + (a * n + b) + '.' });
  }

  /* ---------- Pythagoras, trig, circles, similarity, solids ---------- */
  var TRI = [[3, 4, 5], [5, 12, 13], [8, 15, 17], [7, 24, 25], [6, 8, 10], [9, 12, 15], [20, 21, 29], [10, 24, 26], [12, 16, 20]];
  function triPic(a, b, c, hide) {
    var s = '<polygon points="30,110 190,110 30,20" style="fill:var(--surface-2,none);fill-opacity:.4;stroke:var(--fg);stroke-width:3"/><rect x="30" y="98" width="12" height="12" style="fill:none;stroke:var(--fg);stroke-width:2"/>' + txt(110, 128, hide === 'b' ? '?' : String(b), 14) + txt(14, 68, hide === 'a' ? '?' : String(a), 14) + txt(122, 58, hide === 'c' ? '?' : String(c), 14);
    return svg(220, 136, 'A right-angled triangle with sides ' + a + ', ' + b + ' and ' + c, s, 240);
  }
  function gPythag(lv) {
    var t = pick(TRI), k = lv >= 6 ? pick([1, 1, 2]) : 1, a = t[0] * k, b = t[1] * k, c = t[2] * k, kind = pick(['hyp', 'short', 'conv', 'dist']);
    if (kind === 'hyp') return Q({ tag: 'Pythagoras', text: 'Find the length of the <b>hypotenuse</b> (the longest side).', pic: triPic(a, b, c, 'c'), answer: String(c), hints: ['a² + b² = c². Add the squares of the two shorter sides.', 'Then take the square root.'], explain: a + '² + ' + b + '² = ' + (a * a) + ' + ' + (b * b) + ' = ' + (c * c) + '. √' + (c * c) + ' = ' + c + '.' });
    if (kind === 'short') { var hid = pick(['a', 'b']), known = hid === 'a' ? b : a, miss = hid === 'a' ? a : b; return Q({ tag: 'Pythagoras', text: 'Find the length of the <b>missing short side</b>.', pic: triPic(a, b, c, hid), answer: String(miss), hints: ['Take the square of the known short side away from the square of the hypotenuse.', 'Then take the square root.'], explain: c + '² ' + M + ' ' + known + '² = ' + (c * c) + ' ' + M + ' ' + (known * known) + ' = ' + (miss * miss) + '. √' + (miss * miss) + ' = ' + miss + '.' }); }
    if (kind === 'conv') { var right = Math.random() < 0.5, s3 = right ? c : c + pick([1, 2]); return mk({ tag: 'Pythagoras', text: 'A triangle has sides <b>' + a + ' cm</b>, <b>' + b + ' cm</b> and <b>' + s3 + ' cm</b>. Is it a <b>right-angled</b> triangle?', hints: ['Check whether the two shorter sides squared add up to the longest side squared.'], explain: a + '² + ' + b + '² = ' + (a * a + b * b) + ' and ' + s3 + '² = ' + (s3 * s3) + (right ? ', so it is right-angled.' : ', which are different, so it is not right-angled.') }, mcStr(right ? 'Yes' : 'No', [right ? 'No' : 'Yes'])); }
    return Q({ tag: 'Pythagoras', text: 'A ladder <b>' + c + ' m</b> long leans against a wall. Its foot is <b>' + a + ' m</b> from the wall. How high up the wall does it reach? (m)', answer: String(b), hints: ['The ladder is the hypotenuse.'], explain: c + '² ' + M + ' ' + a + '² = ' + (c * c - a * a) + '. √' + (c * c - a * a) + ' = ' + b + ' m.' });
  }
  function gTrig(lv) {
    var t = pick(TRI.slice(0, 5)), a = t[0], b = t[1], c = t[2], kind = pick(['sin', 'cos', 'tan']), ratio = { sin: [a, c], cos: [b, c], tan: [a, b] }[kind], v = ratio[0] / ratio[1];
    var s = '<polygon points="30,110 190,110 190,20" style="fill:var(--surface-2,none);fill-opacity:.4;stroke:var(--fg);stroke-width:3"/><rect x="178" y="98" width="12" height="12" style="fill:none;stroke:var(--fg);stroke-width:2"/>' + txt(44, 106, 'A', 14, 'start') + txt(110, 128, String(b), 14) + txt(206, 68, String(a), 14, 'start') + txt(96, 54, String(c), 14);
    return mk({ tag: 'Trigonometry', text: 'In this right-angled triangle, what is <b>' + kind + ' A</b>? Give your answer as a fraction in its simplest form.', pic: svg(240, 136, 'Right-angled triangle with angle A, opposite side ' + a + ', adjacent side ' + b + ' and hypotenuse ' + c, s, 250), hints: ['SOH CAH TOA: sin = opposite ÷ hypotenuse, cos = adjacent ÷ hypotenuse, tan = opposite ÷ adjacent.', 'Opposite is the side across from angle A.'], explain: kind + ' A = ' + ratio[0] + '/' + ratio[1] + '.' }, mcStr(ratio[0] + '/' + ratio[1], [ratio[1] + '/' + ratio[0], (kind === 'sin' ? b : a) + '/' + c, (kind === 'tan' ? b + '/' + c : a + '/' + b)]));
  }
  function gCircle(lv) {
    var kind = pick(['circ', 'area', 'diam', 'arc']), r = rnd(2, 12), pi = 3.14;
    if (kind === 'circ') return Q({ tag: 'Circles', text: 'A circle has <b>radius ' + r + ' cm</b>. Find its <b>circumference</b>. Use π = 3.14.', answer: T(r2(2 * pi * r)), hints: ['Circumference = 2 × π × radius.'], explain: '2 × 3.14 × ' + r + ' = ' + T(r2(2 * pi * r)) + ' cm.' });
    if (kind === 'area') return Q({ tag: 'Circles', text: 'A circle has <b>radius ' + r + ' cm</b>. Find its <b>area</b>. Use π = 3.14.', answer: T(r2(pi * r * r)), hints: ['Area = π × radius × radius.'], explain: '3.14 × ' + r + ' × ' + r + ' = ' + T(r2(pi * r * r)) + ' cm².' });
    if (kind === 'diam') { var d = r * 2; return Q({ tag: 'Circles', text: 'A circle has <b>diameter ' + d + ' cm</b>. Find its <b>circumference</b>. Use π = 3.14.', answer: T(r2(pi * d)), hints: ['Circumference = π × diameter.'], explain: '3.14 × ' + d + ' = ' + T(r2(pi * d)) + ' cm.' }); }
    var fr = pick([90, 120, 180, 60, 45]), rr = pick([6, 10, 12]); return Q({ tag: 'Circles', text: 'A sector has radius <b>' + rr + ' cm</b> and angle <b>' + fr + '°</b>. What is the length of its <b>arc</b>? Use π = 3.14 and give your answer to 2 d.p.', answer: T(r2(fr / 360 * 2 * pi * rr)), hints: ['Find the whole circumference, then the fraction ' + fr + '/360 of it.'], explain: '2 × 3.14 × ' + rr + ' = ' + T(r2(2 * pi * rr)) + '. ' + fr + '/360 of that is ' + T(r2(fr / 360 * 2 * pi * rr)) + ' cm.' });
  }
  function gSimilar(lv) {
    var kind = pick(['side', 'area', 'map', 'vol']), k = pick([2, 3, 4, 1.5, 2.5]);
    if (kind === 'side') { var a = rnd(3, 9), b = rnd(4, 12); return Q({ tag: 'Similar shapes', text: 'Two rectangles are <b>similar</b>. The small one is <b>' + a + ' cm</b> by <b>' + b + ' cm</b>. The large one is <b>' + T(a * k) + ' cm</b> long on the side matching the ' + a + ' cm side. How long is the other side of the large rectangle? (cm)', answer: T(b * k), hints: ['Find the scale factor: ' + T(a * k) + ' ÷ ' + a + '.', 'Multiply the other side by it.'], explain: 'Scale factor ' + T(k) + '. ' + b + ' × ' + T(k) + ' = ' + T(b * k) + ' cm.' }); }
    if (kind === 'area') { var kk = pick([2, 3, 4]), A = rnd(5, 20); return Q({ tag: 'Similar shapes', text: 'A shape has area <b>' + A + ' cm²</b>. It is enlarged with a <b>scale factor of ' + kk + '</b>. What is the area of the new shape? (cm²)', answer: String(A * kk * kk), hints: ['Areas scale by the scale factor squared.'], explain: kk + '² = ' + kk * kk + '. ' + A + ' × ' + kk * kk + ' = ' + A * kk * kk + '.' }); }
    if (kind === 'vol') { var k3 = pick([2, 3]), V = rnd(4, 15); return Q({ tag: 'Similar shapes', text: 'A solid has volume <b>' + V + ' cm³</b>. It is enlarged with a <b>scale factor of ' + k3 + '</b>. What is the volume of the new solid? (cm³)', answer: String(V * Math.pow(k3, 3)), hints: ['Volumes scale by the scale factor cubed.'], explain: k3 + '³ = ' + Math.pow(k3, 3) + '. ' + V + ' × ' + Math.pow(k3, 3) + ' = ' + V * Math.pow(k3, 3) + '.' }); }
    var sc = pick([20, 50, 100, 200]), cm = rnd(3, 14), real = cm * sc / 100; return Q({ tag: 'Scale drawings', text: 'A map has a scale of <b>1 : ' + sc * 1000 + '</b>. A road is <b>' + cm + ' cm</b> long on the map. How far is it in real life, in <b>km</b>?', answer: T(r6(cm * sc * 1000 / 100000)), hints: ['Multiply by ' + sc * 1000 + ' to get real centimetres.', '100 000 cm = 1 km.'], explain: cm + ' × ' + sc * 1000 + ' = ' + cm * sc * 1000 + ' cm = ' + T(r6(cm * sc * 1000 / 100000)) + ' km.' });
  }
  function gBearing(lv) {
    var kind = pick(['back', 'name']), b = rnd(1, 35) * 10;
    if (kind === 'back') { var back = b < 180 ? b + 180 : b - 180; return Q({ tag: 'Bearings', text: 'The bearing of <b>B from A</b> is <b>' + String(b).padStart(3, '0') + '°</b>. What is the bearing of <b>A from B</b>?', answer: String(back), hints: ['Add or subtract 180° to go back the opposite way.'], explain: b + (b < 180 ? ' + 180 = ' : ' − 180 = ') + back + '°.' }); }
    var dirs = [['North', 0], ['East', 90], ['South', 180], ['West', 270], ['North-East', 45], ['South-East', 135], ['South-West', 225], ['North-West', 315]], d = pick(dirs);
    return mk({ tag: 'Bearings', text: 'What is the <b>three-figure bearing</b> of <b>' + d[0] + '</b>?', hints: ['Bearings are measured clockwise from North.'], explain: d[0] + ' is ' + String(d[1]).padStart(3, '0') + '°.' }, mcStr(String(d[1]).padStart(3, '0') + '°', shuffle(dirs.filter(function (x) { return x[1] !== d[1]; })).slice(0, 3).map(function (x) { return String(x[1]).padStart(3, '0') + '°'; })));
  }
  function gPolyAngle(lv) {
    var kind = pick(['sum', 'ext', 'int', 'line', 'tri']), n = rnd(5, 12);
    if (kind === 'sum') return Q({ tag: 'Polygon angles', text: 'What is the <b>sum of the interior angles</b> of a polygon with <b>' + n + ' sides</b>?', answer: String((n - 2) * 180), hints: ['Sum = (number of sides − 2) × 180°.'], explain: '(' + n + ' − 2) × 180 = ' + (n - 2) * 180 + '°.' });
    if (kind === 'ext') { var m = pick([5, 6, 8, 9, 10, 12, 15, 18]); return Q({ tag: 'Polygon angles', text: 'What is the size of <b>one exterior angle</b> of a <b>regular polygon with ' + m + ' sides</b>? (degrees)', answer: String(360 / m), hints: ['The exterior angles of any polygon add up to 360°.'], explain: '360 ÷ ' + m + ' = ' + 360 / m + '°.' }); }
    if (kind === 'int') { var m2 = pick([5, 6, 8, 9, 10, 12]); return Q({ tag: 'Polygon angles', text: 'What is the size of <b>one interior angle</b> of a <b>regular polygon with ' + m2 + ' sides</b>? (degrees)', answer: T(r6((m2 - 2) * 180 / m2)), hints: ['Find the exterior angle 360 ÷ sides, then take it from 180°.'], explain: '360 ÷ ' + m2 + ' = ' + 360 / m2 + '. 180 − ' + 360 / m2 + ' = ' + T(r6(180 - 360 / m2)) + '°.' }); }
    if (kind === 'line') { var x = rnd(40, 140), y = rnd(20, 100); return Q({ tag: 'Angle rules', text: 'Angles on a straight line are <b>' + x + '°</b> and <b>' + y + '°</b> and <b>a</b>. What is <b>a</b>?', answer: String(180 - x - y), hints: ['Angles on a straight line add up to 180°.'], explain: '180 − ' + x + ' − ' + y + ' = ' + (180 - x - y) + '°.' }); }
    var p = rnd(30, 90), q = rnd(30, 80); return Q({ tag: 'Angle rules', text: 'Two angles of a triangle are <b>' + p + '°</b> and <b>' + q + '°</b>. What is the third angle?', answer: String(180 - p - q), hints: ['Angles in a triangle add up to 180°.'], explain: '180 − ' + p + ' − ' + q + ' = ' + (180 - p - q) + '°.' });
  }
  function gSolids(lv) {
    var kind = pick(lv <= 4 ? ['prism', 'cuboid', 'sa'] : ['prism', 'cyl', 'sa', 'cone', 'cyl']), pi = 3.14;
    if (kind === 'prism') { var b = rnd(3, 10), h = rnd(3, 10), l = rnd(4, 12); return Q({ tag: 'Volume of solids', text: 'A triangular prism has a right-angled triangle end with base <b>' + b + ' cm</b> and height <b>' + h + ' cm</b>. The prism is <b>' + l + ' cm</b> long. What is its volume? (cm³)', answer: T(r6(b * h / 2 * l)), hints: ['Volume = area of the end × length.', 'The triangle area is ½ × base × height.'], explain: '½ × ' + b + ' × ' + h + ' = ' + T(b * h / 2) + '. ' + T(b * h / 2) + ' × ' + l + ' = ' + T(r6(b * h / 2 * l)) + ' cm³.' }); }
    if (kind === 'cuboid') { var a = rnd(2, 9), b2 = rnd(2, 9), c = rnd(2, 9); return Q({ tag: 'Volume of solids', text: 'A cuboid is <b>' + a + ' cm</b> by <b>' + b2 + ' cm</b> by <b>' + c + ' cm</b>. What is its volume? (cm³)', answer: String(a * b2 * c), hints: ['Volume = length × width × height.'], explain: a + ' × ' + b2 + ' × ' + c + ' = ' + a * b2 * c + ' cm³.' }); }
    if (kind === 'sa') { var x = rnd(2, 9), y = rnd(2, 9), z = rnd(2, 9); return Q({ tag: 'Surface area', text: 'Find the <b>surface area</b> of a cuboid <b>' + x + ' cm</b> by <b>' + y + ' cm</b> by <b>' + z + ' cm</b>. (cm²)', answer: String(2 * (x * y + y * z + x * z)), hints: ['A cuboid has 3 pairs of matching faces.'], explain: '2 × (' + x * y + ' + ' + y * z + ' + ' + x * z + ') = ' + 2 * (x * y + y * z + x * z) + ' cm².' }); }
    if (kind === 'cyl') { var r = rnd(2, 9), hh = rnd(3, 12); return Q({ tag: 'Volume of solids', text: 'A cylinder has <b>radius ' + r + ' cm</b> and <b>height ' + hh + ' cm</b>. Find its volume. Use π = 3.14. (cm³)', answer: T(r2(pi * r * r * hh)), hints: ['Volume = π × r² × height.'], explain: '3.14 × ' + r + '² × ' + hh + ' = ' + T(r2(pi * r * r * hh)) + ' cm³.' }); }
    var rc = pick([3, 6, 9]), hc = pick([4, 8, 12]); return Q({ tag: 'Volume of solids', text: 'A cone has <b>radius ' + rc + ' cm</b> and <b>height ' + hc + ' cm</b>. Find its volume. Use π = 3.14. (cm³)', answer: T(r2(pi * rc * rc * hc / 3)), hints: ['A cone is one third of the cylinder with the same base and height.'], explain: '⅓ × 3.14 × ' + rc + '² × ' + hc + ' = ' + T(r2(pi * rc * rc * hc / 3)) + ' cm³.' });
  }

  /* ---------- statistics, speed, coordinates ---------- */
  function gMedian(lv) {
    var n = pick([5, 6, 7, 8]), v = []; for (var i = 0; i < n; i++) v.push(rnd(2, 40)); var sorted = v.slice().sort(function (a, b) { return a - b; }), kind = pick(['med', 'range', 'mode']);
    var med = n % 2 ? sorted[(n - 1) / 2] : (sorted[n / 2 - 1] + sorted[n / 2]) / 2;
    if (kind === 'med') return Q({ tag: 'Averages', text: 'Find the <b>median</b> of <b>' + v.join(', ') + '</b>.', answer: T(med), hints: ['Put the numbers in order first.', 'The median is the middle one (or halfway between the middle two).'], explain: 'In order: ' + sorted.join(', ') + '. The median is ' + T(med) + '.' });
    if (kind === 'range') return Q({ tag: 'Averages', text: 'Find the <b>range</b> of <b>' + v.join(', ') + '</b>.', answer: String(sorted[n - 1] - sorted[0]), hints: ['Range = biggest − smallest.'], explain: sorted[n - 1] + ' − ' + sorted[0] + ' = ' + (sorted[n - 1] - sorted[0]) + '.' });
    var md = rnd(2, 30), arr = [md, md, rnd(2, 30), rnd(2, 30), md + 1, rnd(31, 40)].sort(function (a, b) { return a - b; }); var cnt = {}; arr.forEach(function (x) { cnt[x] = (cnt[x] || 0) + 1; }); var best = Object.keys(cnt).filter(function (k) { return cnt[k] === 2 || cnt[k] > 2; });
    if (best.length !== 1) return Q({ tag: 'Averages', text: 'Find the <b>mean</b> of <b>' + [4, 6, 8, 10, 12].join(', ') + '</b>.', answer: '8', hints: ['Add them up, then divide by how many there are.'], explain: '40 ÷ 5 = 8.' });
    return Q({ tag: 'Averages', text: 'Find the <b>mode</b> of <b>' + shuffle(arr.slice()).join(', ') + '</b>.', answer: best[0], hints: ['The mode is the number that appears most often.'], explain: best[0] + ' appears most often.' });
  }
  function gQuart(lv) {
    var n = pick([7, 11, 15]), v = []; for (var i = 0; i < n; i++) v.push(rnd(3, 60)); var s = v.slice().sort(function (a, b) { return a - b; }), h = (n - 1) / 2;
    var half = (h - 1) / 2; var lo = s.slice(0, h), hi = s.slice(h + 1);
    function med(a) { var m = a.length; return m % 2 ? a[(m - 1) / 2] : (a[m / 2 - 1] + a[m / 2]) / 2; }
    var q1 = med(lo), q3 = med(hi), kind = pick(['iqr', 'q1']);
    if (kind === 'iqr') return Q({ tag: 'Quartiles', text: 'Find the <b>interquartile range</b> of <b>' + v.join(', ') + '</b>.', answer: T(q3 - q1), hints: ['Put in order. Find the median, then the median of the lower half (Q1) and of the upper half (Q3).', 'IQR = Q3 − Q1.'], explain: 'In order: ' + s.join(', ') + '. Q1 = ' + T(q1) + ', Q3 = ' + T(q3) + ', IQR = ' + T(q3 - q1) + '.' });
    return Q({ tag: 'Quartiles', text: 'Find the <b>upper quartile (Q3)</b> of <b>' + v.join(', ') + '</b>.', answer: T(q3), hints: ['Put in order, take away the median, then find the median of the top half.'], explain: 'In order: ' + s.join(', ') + '. Q3 = ' + T(q3) + '.' });
  }
  function gProb(lv) {
    var kind = pick(['not', 'exp', 'bag', 'or']), p = pick([0.1, 0.2, 0.25, 0.3, 0.35, 0.4, 0.6]);
    if (kind === 'not') return Q({ tag: 'Probability', text: 'The probability that it rains is <b>' + p + '</b>. What is the probability that it does <b>not</b> rain?', answer: T(r6(1 - p)), hints: ['Probabilities of all the outcomes add up to 1.'], explain: '1 − ' + p + ' = ' + T(r6(1 - p)) + '.' });
    if (kind === 'exp') { var n = pick([100, 200, 400, 500]), q = pick([0.1, 0.2, 0.25, 0.3]); return Q({ tag: 'Probability', text: 'A spinner lands on red with probability <b>' + q + '</b>. It is spun <b>' + n + '</b> times. About how many times should it land on red?', answer: T(r6(n * q)), hints: ['Expected number = probability × number of trials.'], explain: q + ' × ' + n + ' = ' + T(r6(n * q)) + '.' }); }
    if (kind === 'bag') { var r = rnd(2, 8), b = rnd(2, 8), g = rnd(1, 6), tot = r + b + g, num = r, d = gcd(num, tot); return mk({ tag: 'Probability', text: 'A bag has <b>' + r + ' red</b>, <b>' + b + ' blue</b> and <b>' + g + ' green</b> counters. One is taken at random. What is the probability it is <b>red</b>?', hints: ['Probability = favourable ÷ total.'], explain: r + '/' + tot + (d > 1 ? ' = ' + num / d + '/' + tot / d : '') + '.' }, mcStr(num / d + '/' + tot / d, [(b / gcd(b, tot)) + '/' + tot / gcd(b, tot), r + '/' + (tot - r), (r + 1) + '/' + tot])); }
    var a = rnd(2, 6), c = rnd(2, 6), tt = a + c + rnd(2, 8); var dd = gcd(a + c, tt); return mk({ tag: 'Probability', text: 'In a class of <b>' + tt + '</b> pupils, <b>' + a + '</b> walk, <b>' + c + '</b> cycle and the rest take the bus. What is the probability a pupil chosen at random <b>walks or cycles</b>?', hints: ['Add the pupils who walk and who cycle, then divide by the total.'], explain: (a + c) + '/' + tt + (dd > 1 ? ' = ' + (a + c) / dd + '/' + tt / dd : '') + '.' }, mcStr((a + c) / dd + '/' + tt / dd, [a / gcd(a, tt) + '/' + tt / gcd(a, tt), (tt - a - c) / gcd(tt - a - c, tt) + '/' + tt / gcd(tt - a - c, tt), (a + c) + '/' + (tt + 1)]));
  }
  function gSpeed(lv) {
    var kind = pick(['s', 'd', 't', 'avg']), sp = pick([30, 40, 45, 50, 60, 72]), t = pick([0.5, 1.5, 2, 2.5, 3, 4]);
    if (kind === 's') return Q({ tag: 'Speed, distance, time', text: 'A car travels <b>' + T(sp * t) + ' km</b> in <b>' + T(t) + ' hours</b>. What is its average speed in km/h?', answer: String(sp), hints: ['Speed = distance ÷ time.'], explain: T(sp * t) + ' ÷ ' + T(t) + ' = ' + sp + ' km/h.' });
    if (kind === 'd') return Q({ tag: 'Speed, distance, time', text: 'A train travels at <b>' + sp + ' km/h</b> for <b>' + T(t) + ' hours</b>. How far does it go? (km)', answer: T(sp * t), hints: ['Distance = speed × time.'], explain: sp + ' × ' + T(t) + ' = ' + T(sp * t) + ' km.' });
    if (kind === 't') { var mins = Math.round(60 * (sp * t) / sp); var m2 = pick([20, 30, 40]), hrs = m2 / 60, dist = sp * hrs; return Q({ tag: 'Speed, distance, time', text: 'A cyclist rides <b>' + T(r6(dist)) + ' km</b> at <b>' + sp + ' km/h</b>. How many <b>minutes</b> does it take?', answer: String(m2), hints: ['Time = distance ÷ speed, in hours. Then change hours to minutes.'], explain: T(r6(dist)) + ' ÷ ' + sp + ' = ' + T(r6(hrs)) + ' h = ' + m2 + ' minutes.' }); }
    var d1 = pick([60, 90, 120]), s1 = pick([30, 40, 60]), d2 = pick([60, 90, 120]), s2 = pick([30, 40, 60, 90]), tt = d1 / s1 + d2 / s2, avg = (d1 + d2) / tt;
    return Q({ tag: 'Speed, distance, time', text: 'A bus travels <b>' + d1 + ' km at ' + s1 + ' km/h</b> then <b>' + d2 + ' km at ' + s2 + ' km/h</b>. What is its <b>average speed</b> for the whole journey in km/h? Give 1 decimal place if needed.', answer: T(Math.round(avg * 10) / 10), hints: ['Average speed = total distance ÷ total time.', 'Find each time first.'], explain: 'Times: ' + T(r6(d1 / s1)) + ' h + ' + T(r6(d2 / s2)) + ' h = ' + T(r6(tt)) + ' h. ' + (d1 + d2) + ' ÷ ' + T(r6(tt)) + ' = ' + T(Math.round(avg * 10) / 10) + ' km/h.' });
  }
  function gCoordRefl(lv) {
    var x = rnd(1, 6), y = rnd(1, 6), kind = pick(['x', 'y', 'mid', 'enl']);
    if (kind === 'x') return Q({ tag: 'Coordinates', text: 'The point <b>(' + x + ', ' + y + ')</b> is reflected in the <b>x-axis</b>. What are the new coordinates? Write them like (3, ' + M + '2).', answer: '(' + x + ', ' + M + y + ')', kind: 'coord', hints: ['Reflecting in the x-axis changes the sign of the y-coordinate.'], explain: '(' + x + ', ' + y + ') becomes (' + x + ', ' + M + y + ').' });
    if (kind === 'y') return Q({ tag: 'Coordinates', text: 'The point <b>(' + x + ', ' + y + ')</b> is reflected in the <b>y-axis</b>. What are the new coordinates? Write them like (' + M + '3, 2).', answer: '(' + M + x + ', ' + y + ')', kind: 'coord', hints: ['Reflecting in the y-axis changes the sign of the x-coordinate.'], explain: '(' + x + ', ' + y + ') becomes (' + M + x + ', ' + y + ').' });
    if (kind === 'mid') { var x2 = x + 2 * rnd(1, 4), y2 = y + 2 * rnd(1, 4); return Q({ tag: 'Coordinates', text: 'Find the <b>midpoint</b> of <b>(' + x + ', ' + y + ')</b> and <b>(' + x2 + ', ' + y2 + ')</b>. Write it like (3, 4).', answer: '(' + (x + x2) / 2 + ', ' + (y + y2) / 2 + ')', kind: 'coord', hints: ['Add the x values and halve, add the y values and halve.'], explain: '((' + x + ' + ' + x2 + ') ÷ 2, (' + y + ' + ' + y2 + ') ÷ 2) = (' + (x + x2) / 2 + ', ' + (y + y2) / 2 + ').' }); }
    var k = pick([2, 3]); return Q({ tag: 'Coordinates', text: 'The point <b>(' + x + ', ' + y + ')</b> is enlarged by <b>scale factor ' + k + '</b> from the origin <b>(0, 0)</b>. What are the new coordinates? Write them like (6, 4).', answer: '(' + x * k + ', ' + y * k + ')', kind: 'coord', hints: ['Multiply both coordinates by the scale factor.'], explain: '(' + x + ' × ' + k + ', ' + y + ' × ' + k + ') = (' + x * k + ', ' + y * k + ').' });
  }
  function gNegs(lv) {
    var a = rnd(-12, 12), b = rnd(-12, 12), kind = pick(['add', 'sub', 'mul', 'bodmas']);
    if (kind === 'add') return Q({ tag: 'Negative numbers', text: 'Work out <b>' + neg(a) + ' + ' + (b < 0 ? '(' + neg(b) + ')' : b) + '</b>.', answer: String(a + b), hints: ['Use a number line. Adding a negative moves left.'], explain: neg(a) + ' + ' + (b < 0 ? '(' + neg(b) + ')' : b) + ' = ' + (a + b) + '.' });
    if (kind === 'sub') return Q({ tag: 'Negative numbers', text: 'Work out <b>' + neg(a) + ' ' + M + ' ' + (b < 0 ? '(' + neg(b) + ')' : b) + '</b>.', answer: String(a - b), hints: ['Subtracting a negative is the same as adding.'], explain: neg(a) + ' ' + M + ' ' + (b < 0 ? '(' + neg(b) + ')' : b) + ' = ' + (a - b) + '.' });
    if (kind === 'mul') { var c = rnd(2, 9), d = rnd(-9, -2); return Q({ tag: 'Negative numbers', text: 'Work out <b>' + c + ' × (' + neg(d) + ')</b>.', answer: String(c * d), hints: ['Positive × negative gives a negative.'], explain: c + ' × ' + neg(d) + ' = ' + c * d + '.' }); }
    var p = rnd(2, 9), q = rnd(2, 9), r = rnd(2, 5); return Q({ tag: 'BODMAS', text: 'Work out <b>' + p + ' + ' + q + ' × ' + r + ' ' + M + ' ' + (p + 1) + '</b>.', answer: String(p + q * r - (p + 1)), hints: ['Multiply before you add or subtract.'], explain: q + ' × ' + r + ' = ' + q * r + ', then ' + p + ' + ' + q * r + ' ' + M + ' ' + (p + 1) + ' = ' + (p + q * r - (p + 1)) + '.' });
  }
  function gSimpleInt(lv) {
    var P = pick([200, 500, 800, 1000, 2000]), r = pick([2, 3, 4, 5]), y = pick([2, 3, 4, 5]), kind = pick(['si', 'fx']);
    if (kind === 'si') return Q({ tag: 'Banking and interest', text: '£' + P + ' is saved at <b>' + r + '% simple interest</b> a year. How much interest is earned in <b>' + y + ' years</b>? (£)', answer: T(r6(P * r / 100 * y)), hints: ['Find one year of interest, then multiply by the number of years.'], explain: r + '% of ' + P + ' = ' + T(P * r / 100) + '. × ' + y + ' = ' + T(r6(P * r / 100 * y)) + '.' });
    var rate = pick([1.1, 1.15, 1.2, 1.25, 1.3]), gb = pick([100, 200, 300, 500]); return Q({ tag: 'Foreign exchange', text: '£1 = <b>' + rate + ' euros</b>. How many euros do you get for <b>£' + gb + '</b>?', answer: T(r6(gb * rate)), hints: ['Multiply the pounds by the exchange rate.'], explain: gb + ' × ' + rate + ' = ' + T(r6(gb * rate)) + ' euros.' });
  }

  var ALL = { gIndices: gIndices, gStdForm: gStdForm, gSigFig: gSigFig, gPctChange: gPctChange, gWages: gWages, gUnitPrice: gUnitPrice, gLine: gLine, gSimul: gSimul, gEqn: gEqn, gExpand: gExpand, gSubst: gSubst, gNth: gNth, gPythag: gPythag, gTrig: gTrig, gCircle: gCircle, gSimilar: gSimilar, gBearing: gBearing, gPolyAngle: gPolyAngle, gSolids: gSolids, gMedian: gMedian, gQuart: gQuart, gProb: gProb, gSpeed: gSpeed, gCoordRefl: gCoordRefl, gNegs: gNegs, gSimpleInt: gSimpleInt };
  var MAP = {};
  function add(ids, list) { ids.forEach(function (id) { MAP[id] = (MAP[id] || []).concat(list); }); }
  add([802], [[gIndices, 'm'], [gNegs, 'e']]);
  add([806], [[gUnitPrice, 'e'], [gSimpleInt, 'm']]);
  add([807, 825, 843], [[gSpeed, 'm']]);
  add([808, 826, 844], [[gSolids, 'm'], [gCircle, 'm']]);
  add([809], [[gSubst, 'e'], [gNth, 'm']]);
  add([810, 829], [[gPolyAngle, 'e']]);
  add([811], [[gCoordRefl, 'e']]);
  add([812, 832, 852], [[gProb, 'm']]);
  add([821], [[gStdForm, 'm'], [gIndices, 'e'], [gSigFig, 'e']]);
  add([822], [[gPctChange, 'm']]);
  add([824, 842], [[gWages, 'm'], [gPctChange, 'm'], [gSimpleInt, 'e']]);
  add([828, 847], [[gLine, 'm'], [gNth, 'm']]);
  add([829, 851], [[gBearing, 'e'], [gSimilar, 'm']]);
  add([830, 849], [[gPythag, 'm']]);
  add([830, 850], [[gCircle, 'm']]);
  add([831], [[gSimilar, 'm']]);
  add([832], [[gMedian, 'e']]);
  add([841], [[gStdForm, 'm'], [gPctChange, 'm']]);
  add([845], [[gExpand, 'm']]);
  add([846], [[gEqn, 'm']]);
  add([848], [[gSimul, 'm']]);
  add([849], [[gTrig, 'm']]);
  add([852], [[gQuart, 'm']]);
  add([827], [[gExpand, 'e'], [gEqn, 'm']]);
  BT.gap3 = { makers: ALL, MAP: MAP };
  var prev = S.extraMakers;
  S.extraMakers = function (n, level) {
    var base = prev ? (prev(n, level) || []) : [], list = MAP[Number(n)];
    if (!list) return base;
    var nE = list.filter(function (x) { return x[1] === 'e'; }).length, lv = G.lvOf(Number(n)), pick1 = list.filter(function (x) { return level === 'low' ? (x[1] === 'e' || (x[1] === 'm' && nE < 3)) : level === 'high' ? x[1] !== 'e' : true; });
    if (!pick1.length) pick1 = list;
    return pick1.map(function (e) { var f = function () { return e[0](lv); }; Object.defineProperty(f, 'name', { value: e[0].name }); f.__gap = true; return f; }).concat(base);
  };
})();
