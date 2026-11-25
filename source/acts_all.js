/* acts_all.js: hands-on activities for the questions assigned to each P5, P6 and P7 topic.
   One activity maker per skill, with a level v (0 = P5, 1 = P6, 2 = P7) so the same activity gets harder each year. */
(function () {
  'use strict';
  var S = Studio, H = S.h, BT = window.BT; if (!BT || !BT.rounds || !BT.lk) return;
  var rnd = H.rnd, pick = H.pick, shuffle = H.shuffle, fmt = H.fmtInt, gcd = H.gcd, V = BT.sv, LK = BT.lk, SPA = window.SPA;
  var T = function (x) { return String(Math.round(x * 1000) / 1000); };
  var fr = function (n, d) { return n + '/' + d; };
  var simp = function (n, d) { var g = gcd(n, d); return fr(n / g, d / g); };
  var mixed = function (n, d) { var w = Math.floor(n / d), r = n % d; return r ? (w ? w + ' ' : '') + simp(r, d) : String(w); };
  var big = function (t) { return '<div style="font-size:clamp(26px,7vw,40px);font-weight:900">' + t + '</div>'; };
  function R(make, rounds) { return BT.rounds({ make: make, rounds: rounds || 6 }); }
  var REG = {};
  function lab(ns, id, label, lead, makeFor) { REG[id] = { label: label, lead: lead, mk: makeFor }; ns.forEach(function (n, v) { if (n !== null) BT.addLab(n, id, label, lead[v] || lead[0], R(makeFor(v))); }); }
  /* reuse an activity in a secondary topic at a given level */
  function also(id, pairs) { var r = REG[id]; if (!r) return; pairs.forEach(function (p) { BT.addLab(p[0], id, r.label, r.lead[p[1]] || r.lead[r.lead.length - 1] || r.lead[0], R(r.mk(p[1]))); }); }

  /* ---------- 1 Place value: rounding decimals, estimating ---------- */
  lab([null, 1, 701], 'x_rounddec', 'Round the decimal', ['', 'Round each decimal to the nearest whole number or tenth.', 'Round each decimal to the given number of decimal places.'], function (v) { return function () {
    var dp = v === 1 ? pick([0, 1]) : pick([1, 2]), x = rnd(100, 99999) / (v === 1 ? 100 : 1000), f = Math.pow(10, dp), r = Math.round(x * f) / f;
    var place = dp === 0 ? 'the nearest whole number' : dp === 1 ? 'one decimal place' : 'two decimal places';
    return { vis: big(T(x)), q: 'Round <b>' + T(x) + '</b> to ' + place + '.', answer: r.toFixed(dp), wrong: [(r + 1 / f).toFixed(dp), (r - 1 / f).toFixed(dp), (Math.floor(x * f) / f === r ? Math.ceil(x * f) / f : Math.floor(x * f) / f).toFixed(dp)],
      explain: 'Look at the next digit. ' + (Math.round(x * f * 10) % 10 >= 5 ? 'It is 5 or more, so round up.' : 'It is 4 or less, so round down.') + ' The answer is ' + r.toFixed(dp) + '.' };
  }; });
  lab([null, 1, 701], 'x_estimate', 'Estimate first', ['', 'Round the numbers, then pick the best estimate.', 'Round the numbers, then pick the best estimate.'], function (v) { return function () {
    var op = pick(v === 1 ? ['+', '−', '×'] : ['×', '÷', '+']), a, b, ea, eb, est, exact;
    if (op === '+') { a = rnd(1200, 8900); b = rnd(1200, 8900); ea = Math.round(a / 1000) * 1000; eb = Math.round(b / 1000) * 1000; est = ea + eb; exact = a + b; }
    else if (op === '−') { a = rnd(5100, 9800); b = rnd(1200, 4800); ea = Math.round(a / 1000) * 1000; eb = Math.round(b / 1000) * 1000; est = ea - eb; exact = a - b; }
    else if (op === '×') { a = rnd(21, 89); b = rnd(21, 89); ea = Math.round(a / 10) * 10; eb = Math.round(b / 10) * 10; est = ea * eb; exact = a * b; }
    else { eb = pick([20, 30, 40, 50]); var q = rnd(11, 39); ea = eb * Math.round(q / 1); a = ea + rnd(-4, 4); b = eb + rnd(-2, 2); est = Math.round(ea / eb); exact = Math.round(a / b * 10) / 10; }
    return { vis: big(fmt(a) + ' ' + op + ' ' + fmt(b)), q: 'Which is the best estimate?', answer: fmt(est), wrong: [fmt(est * 10), fmt(Math.round(est / 10) || est + 3), fmt(est + (op === '×' ? ea : 1000))],
      explain: 'Round first: ' + fmt(ea) + ' ' + op + ' ' + fmt(eb) + ' = ' + fmt(est) + '. The exact answer, ' + fmt(exact) + ', is close to it.' };
  }; });

  /* ---------- 2 Four operations: short division, multiply in your head ---------- */
  lab([null, 2, 702], 'x_shortdiv', 'Short division', ['', 'Work out each short division, carrying the remainder to the next digit.', 'Work out each short division, carrying the remainder to the next digit.'], function (v) { return function () {
    var d = rnd(3, 9), q = rnd(v === 1 ? 21 : 121, v === 1 ? 199 : 999), r = rnd(0, 1) ? 0 : rnd(1, d - 1), n = d * q + r;
    var ans = q + (r ? ' r ' + r : '');
    return { vis: big(fmt(n) + ' ÷ ' + d), q: 'Work out <b>' + fmt(n) + ' ÷ ' + d + '</b>.', answer: ans, wrong: [(q + 1) + (r ? ' r ' + r : ''), (q - 1) + (r ? ' r ' + r : ''), q + ' r ' + ((r + 1) % d || d - 1), String(q * 10)],
      explain: 'Divide each digit from the left, carrying any remainder to the next digit. ' + d + ' × ' + q + ' = ' + fmt(d * q) + (r ? ', with ' + r + ' left over.' : ', exactly.') };
  }; });
  lab([null, 2, 702], 'x_mentalx', 'Multiply in your head', ['', 'Use a quick method: partition, double or round and adjust.', 'Use a quick method: partition, double or round and adjust.'], function (v) { return function () {
    var k = rnd(0, 2), a, b, ex;
    if (k === 0) { a = rnd(12, v === 1 ? 49 : 99); b = rnd(3, 9); ex = (a - a % 10) + ' × ' + b + ' = ' + (a - a % 10) * b + ' and ' + a % 10 + ' × ' + b + ' = ' + a % 10 * b + '.'; }
    else if (k === 1) { a = rnd(11, 49); b = pick([4, 8]); ex = 'Double ' + a + ' is ' + 2 * a + (b === 8 ? ', double again is ' + 4 * a + ', and double again is ' + 8 * a : ', and double again is ' + 4 * a) + '.'; }
    else { a = rnd(3, 9); b = pick([19, 29, 39, 49, 99]); ex = a + ' × ' + (b + 1) + ' = ' + a * (b + 1) + ', then take away one ' + a + '.'; }
    return { vis: big(a + ' × ' + b), q: 'Work out <b>' + a + ' × ' + b + '</b> in your head.', answer: fmt(a * b), wrong: [fmt(a * b + 10), fmt(a * b - a), fmt(a * b + b)], explain: ex + ' So ' + a + ' × ' + b + ' = ' + fmt(a * b) + '.' };
  }; });

  /* ---------- 3 Fractions ---------- */
  lab([503, 3, 703], 'x_fcompare', 'Fraction compare', ['Look at the fraction bars and pick the bigger fraction.', 'Pick the bigger fraction. Use a common denominator when the bottoms are different.', 'Pick the bigger fraction. Use a common denominator when the bottoms are different.'], function (v) { return function () {
    var a, b, c, d;
    do {
      if (v === 0) { if (rnd(0, 1)) { d = b = pick([5, 6, 8, 10]); a = rnd(1, d - 1); c = rnd(1, d - 1); } else { a = c = 1; b = rnd(2, 10); d = rnd(2, 10); } }
      else { b = pick([3, 4, 5, 6, 8]); d = b * pick([2, 3]); if (d > 12) d = b * 2; a = rnd(1, b - 1); c = rnd(1, d - 1); }
    } while (a * d === c * b);
    var big1 = a * d > c * b, ans = big1 ? fr(a, b) : fr(c, d), l = b * d / gcd(b, d);
    return { vis: LK.fbar(a, b, 240, 280, fr(a, b)) + LK.fbar(c, d, 240, 150, fr(c, d)), q: 'Which fraction is bigger?', answer: ans, wrong: [big1 ? fr(c, d) : fr(a, b), 'They are equal'], keepOrder: true,
      explain: b === d ? 'The bottoms are the same, so compare the tops.' : a === 1 && c === 1 ? 'With 1 on top, the smaller the bottom number, the bigger the pieces.' : 'Make the bottoms the same: ' + fr(a * l / b, l) + ' and ' + fr(c * l / d, l) + '. So ' + ans + ' is bigger.' };
  }; });
  lab([null, 3, 703], 'x_simplify', 'Simplify it', ['', 'Divide the top and the bottom by the same number to simplify each fraction.'], function (v) { return function () {
    var d0 = pick([2, 3, 4, 5, 6, 7, 8, 9]), n0 = rnd(1, d0 - 1); while (gcd(n0, d0) !== 1) n0 = rnd(1, d0 - 1);
    var k = rnd(2, v === 1 ? 5 : 9), n = n0 * k, d = d0 * k;
    return { vis: big(fr(n, d)), q: 'Simplify <b>' + fr(n, d) + '</b> fully.', answer: fr(n0, d0), wrong: [fr(n / (k > 2 && k % 2 === 0 ? 2 : 1), d / (k > 2 && k % 2 === 0 ? 2 : 1)), fr(n0 + 1, d0), fr(n0, d0 + 1), fr(n - 1, d - 1)],
      explain: 'The highest common factor of ' + n + ' and ' + d + ' is ' + k + '. ' + n + ' ÷ ' + k + ' = ' + n0 + ' and ' + d + ' ÷ ' + k + ' = ' + d0 + '.' };
  }; });
  lab([null, 3, 703], 'x_fadd', 'Add and subtract fractions', ['', 'Add or subtract. Make the denominators the same first.'], function (v) { return function () {
    var b = pick([3, 4, 5, 6, 8]), d = v === 1 && rnd(0, 1) ? b : b * 2, a = rnd(1, b - 1), c = rnd(1, d - 1), add = rnd(0, 1) || a * d <= c * b;
    if (!add && a * d <= c * b) add = true;
    var top = add ? a * d + c * b : a * d - c * b, bot = b * d, ans = mixed(top, bot);
    var l = d % b === 0 ? d : b * d;
    return { vis: big(fr(a, b) + (add ? ' + ' : ' − ') + fr(c, d)), q: 'Work out <b>' + fr(a, b) + (add ? ' + ' : ' − ') + fr(c, d) + '</b>. Give the simplest answer.', answer: ans, wrong: [fr(add ? a + c : Math.abs(a - c), add ? b + d : Math.abs(b - d) || b), mixed(top + bot / gcd(top, bot), bot), fr(add ? a + c : Math.abs(a - c), Math.max(b, d))],
      explain: 'Use ' + l + ' as the common denominator: ' + fr(a * l / b, l) + (add ? ' + ' : ' − ') + fr(c * l / d, l) + ' = ' + fr(add ? a * l / b + c * l / d : a * l / b - c * l / d, l) + ' = ' + ans + '.' };
  }; });
  lab([null, null, 703], 'x_fmult', 'Multiply fractions', ['', '', 'Multiply the tops, multiply the bottoms, then simplify.'], function () { return function () {
    var a = rnd(1, 4), b = rnd(a + 1, 9), c = rnd(1, 4), d = rnd(c + 1, 9), whole = rnd(0, 2) === 0;
    if (whole) { var w = rnd(2, 9); return { vis: big(fr(a, b) + ' × ' + w), q: 'Work out <b>' + fr(a, b) + ' × ' + w + '</b>.', answer: mixed(a * w, b), wrong: [fr(a * w, b * w), fr(a, b * w), mixed(a * w + 1, b)], explain: 'Multiply the top by ' + w + ': ' + fr(a * w, b) + ' = ' + mixed(a * w, b) + '.' }; }
    return { vis: big(fr(a, b) + ' × ' + fr(c, d)), q: 'Work out <b>' + fr(a, b) + ' × ' + fr(c, d) + '</b>.', answer: simp(a * c, b * d), wrong: [fr(a + c, b + d), simp(a * d, b * c), fr(a * c, b + d)], explain: 'Tops: ' + a + ' × ' + c + ' = ' + a * c + '. Bottoms: ' + b + ' × ' + d + ' = ' + b * d + '. So ' + fr(a * c, b * d) + (simp(a * c, b * d) !== fr(a * c, b * d) ? ' = ' + simp(a * c, b * d) : '') + '.' };
  }; });

  /* ---------- 4 Decimals and percentages ---------- */
  lab([504, 4, 704], 'x_decline', 'Decimal number line', ['Find the decimal marked on the number line.', 'Find the decimal marked on the number line.', 'Find the decimal marked on the number line.'], function (v) { return function () {
    var lo = rnd(0, v === 0 ? 3 : 9), step = v === 2 ? 0.01 : 0.1, k = rnd(1, 9), x = lo + k * step, hi = lo + 10 * step;
    var vis = BT.NL(lo, hi, { tick: step, lab: hi - lo, marks: [[x, 22]], alt: 'A number line with one point marked' });
    return { vis: vis, q: 'The line goes from ' + T(lo) + ' to ' + T(hi) + ' in 10 equal steps. Which number is marked?', answer: T(x), wrong: [T(x + step), T(x - step), T(lo + k * step * 10)],
      explain: 'Each step is ' + T(step) + '. The point is ' + k + ' steps after ' + T(lo) + ', so it is ' + T(x) + '.' };
  }; });
  lab([null, 4, 704], 'x_fdp', 'Fraction, decimal, percentage', ['', 'Match each fraction, decimal or percentage to the same amount.'], function (v) { return function () {
    var set = [[1, 2], [1, 4], [3, 4], [1, 5], [2, 5], [3, 5], [4, 5], [1, 10], [3, 10], [7, 10], [9, 10]].concat(v === 2 ? [[1, 8], [3, 8], [1, 20], [3, 20], [1, 3]] : []);
    var p = pick(set), dec = p[0] / p[1], pc = Math.round(dec * 1000) / 10, from = rnd(0, 2), show = [fr(p[0], p[1]), T(Math.round(dec * 1000) / 1000), pc + '%'], to = (from + rnd(1, 2)) % 3;
    var others = shuffle(set.filter(function (q) { return q !== p; })).slice(0, 3).map(function (q) { var d2 = q[0] / q[1]; return [fr(q[0], q[1]), T(Math.round(d2 * 1000) / 1000), Math.round(d2 * 1000) / 10 + '%'][to]; });
    var names = ['fraction', 'decimal', 'percentage'];
    return { vis: big(show[from]), q: 'Which ' + names[to] + ' is the same as <b>' + show[from] + '</b>?', answer: show[to], wrong: others,
      explain: fr(p[0], p[1]) + ' = ' + show[1] + ' = ' + show[2] + '.' };
  }; });
  lab([504, 4, 704], 'x_pctof', 'Percentage finder', ['Find 10%, 25% or 50% of each amount.', 'Find each percentage of the amount. Build it from 10% and 1%.', 'Find each percentage of the amount. Build it from 10% and 1%.'], function (v) { return function () {
    var p = pick(v === 0 ? [10, 25, 50, 75] : v === 1 ? [5, 10, 15, 20, 25, 30, 40, 75] : [12, 15, 35, 45, 60, 65, 17.5]), amt = pick(v === 0 ? [20, 40, 60, 80, 100, 120, 200] : [40, 60, 80, 120, 160, 240, 360, 480]);
    var ans = Math.round(amt * p) / 100;
    return { vis: LK.hsq(Math.min(100, Math.round(p))), q: 'What is <b>' + p + '% of £' + amt + '</b>?', answer: '£' + T(ans), wrong: ['£' + T(ans * 2), '£' + T(ans / 2), '£' + T(Math.round(ans + amt / 10))],
      explain: '10% of £' + amt + ' is £' + T(amt / 10) + '. ' + p + '% of £' + amt + ' = £' + T(ans) + '.' };
  }; });

  /* ---------- 5 Money, time and measurement ---------- */
  lab([505, 5, 705], 'x_clock', 'Clock match', ['Read the clock and pick the digital time.', 'Read the clock and pick the 24-hour time.', 'Read the clock and pick the 24-hour time.'], function (v) { return function () {
    var h = rnd(1, 12), m = pick(v === 0 ? [0, 15, 30, 45, 5, 10, 20, 40, 50] : [0, 5, 10, 15, 20, 25, 35, 40, 45, 50, 55]), pm = v > 0 && rnd(0, 1), mm = (m < 10 ? '0' : '') + m;
    var h24 = pm ? (h === 12 ? 12 : h + 12) : (h === 12 ? 0 : h), dig = v === 0 ? h + ':' + mm : (h24 < 10 ? '0' : '') + h24 + ':' + mm;
    var wrongH = v === 0 ? [(h % 12 + 1) + ':' + mm, h + ':' + ((60 - m) % 60 < 10 ? '0' : '') + (60 - m) % 60, (m / 5 || 12) + ':' + (h * 5 < 10 ? '0' : '') + (h * 5 % 60)] : [(h < 10 ? '0' : '') + h + ':' + mm, ((h24 + 12) % 24 < 10 ? '0' : '') + (h24 + 12) % 24 + ':' + mm, ((h24 + 1) % 24 < 10 ? '0' : '') + (h24 + 1) % 24 + ':' + mm];
    return { vis: V.clock(h, m), q: v === 0 ? 'What time does the clock show?' : 'It is the ' + (pm ? 'afternoon or evening' : 'morning') + '. What is the time on a 24-hour clock?', answer: dig, wrong: wrongH,
      explain: 'The short hand shows the hour, ' + h + '. The long hand shows ' + m + ' minutes.' + (pm ? ' After midday, add 12 to the hour.' : '') };
  }; });
  lab([505, 5, 705], 'x_units', 'Unit converter', ['Change between metric units.', 'Change between metric units, and use rough imperial equivalents.', 'Change between metric and imperial units.'], function (v) { return function () {
    var M = [['cm', 'mm', 10], ['m', 'cm', 100], ['km', 'm', 1000], ['kg', 'g', 1000], ['l', 'ml', 1000]], I = [['inch', 'cm', 2.5, 'about'], ['foot', 'cm', 30, 'about'], ['mile', 'km', 1.6, 'about'], ['kg', 'lb', 2.2, 'about'], ['gallon', 'litres', 4.5, 'about']];
    if (v > 0 && rnd(0, 2) === 0) { var u = pick(I), q = rnd(2, 10), a = Math.round(q * u[2] * 10) / 10; return { vis: big(q + ' ' + u[0] + (q > 1 && !/lb|kg/.test(u[0]) ? (u[0] === 'foot' ? '' : 's') : '')).replace('foots', 'feet'), q: '1 ' + u[0] + ' is ' + u[3] + ' ' + u[2] + ' ' + u[1] + '. About how many ' + u[1] + ' is ' + q + ' ' + (u[0] === 'foot' && q > 1 ? 'feet' : u[0] + (q > 1 && !/lb|kg/.test(u[0]) ? 's' : '')) + '?', answer: T(a), wrong: [T(a * 10), T(q + u[2]), T(a + u[2])], explain: q + ' × ' + u[2] + ' = ' + T(a) + ' ' + u[1] + '.' }; }
    var c = pick(M), x = v === 0 ? rnd(2, 12) : rnd(12, 95) / 10, down = rnd(0, 1), from = down ? c[0] : c[1], to = down ? c[1] : c[0], val = down ? x : x * c[2], ans = down ? x * c[2] : x;
    return { vis: big(T(val) + ' ' + from), q: 'How many <b>' + to + '</b> is ' + T(val) + ' ' + from + '?', answer: T(ans), wrong: [T(down ? ans * 10 : ans / 10), T(down ? ans / 10 : ans * 10), T(down ? val + c[2] : val / c[2] / 10)],
      explain: '1 ' + c[0] + ' = ' + c[2] + ' ' + c[1] + '. ' + (down ? 'Multiply' : 'Divide') + ' by ' + c[2] + ': ' + T(ans) + ' ' + to + '.' };
  }; });
  lab([null, 5, 711], 'x_money', 'Smart shopper', ['', 'Work out costs, change and exchange rates.', 'Find the best buy and convert currencies.'], function (v) { return function () {
    var k = rnd(0, 1);
    if (k === 0 || v === 1) {
      var rate = pick([[1.15, '€', 'euros'], [1.25, '$', 'dollars'], [180, '¥', 'yen']]), p = rnd(2, 20) * 10, got = Math.round(p * rate[0] * 100) / 100, M = function (x) { return rate[1] + (rate[0] > 10 ? fmt(Math.round(x)) : x.toFixed(2)); };
      return { vis: big('£' + p), q: '£1 = ' + rate[1] + rate[0] + '. How many ' + rate[2] + ' do you get for <b>£' + p + '</b>?', answer: M(got), wrong: [M(p / rate[0]), M(got * 10), M(got + rate[0])], explain: 'Multiply by the rate: ' + p + ' × ' + rate[0] + ' = ' + M(got) + '.' };
    }
    var a = rnd(2, 6), b = a * 2, pa = rnd(150, 400) / 100, pb = Math.round((pa * 2 + pick([-0.4, -0.2, 0.2, 0.4])) * 100) / 100, ua = pa / a, ub = pb / b, best = ua < ub ? a + ' for £' + pa.toFixed(2) : b + ' for £' + pb.toFixed(2);
    return { vis: V.cards([a + ' for £' + pa.toFixed(2), b + ' for £' + pb.toFixed(2)], ['b', 'p']), q: 'Which pack of yoghurts is the better buy?', answer: best, wrong: [ua < ub ? b + ' for £' + pb.toFixed(2) : a + ' for £' + pa.toFixed(2), 'They are the same value'], keepOrder: true,
      explain: 'Price for one: £' + ua.toFixed(3) + ' and £' + ub.toFixed(3) + '. The lower price for one is the better buy.' };
  }; });
  lab([null, null, null], 'x_bankpay', 'Regular payments', ['Work out what regular payments cost.', 'Work out what regular payments cost over a year.', 'Work out what regular payments and charges cost.'], function (v) { return function () {
    var P = function (x) { return '£' + (Math.round(x * 100) % 100 === 0 ? String(Math.round(x)).replace(/\B(?=(\d{3})+$)/g, ',') : (Math.round(x * 100) / 100).toFixed(2)); }, k = rnd(0, 2);
    if (v === 0) {
      if (k === 0) { var m = rnd(3, 30) * 10, y = m * 12; return { vis: big(P(m) + ' a month'), q: 'A standing order pays <b>' + P(m) + '</b> every month. How much is paid in a year?', answer: P(y), wrong: [P(m * 52), P(m * 10), P(m + 12)], explain: 'A monthly payment is made 12 times a year. ' + m + ' × 12 = ' + P(y) + '.' }; }
      if (k === 1) { var a = rnd(40, 80), b = rnd(40, 80), c = rnd(40, 80), t = a + b + c; while (t % 3) { c++; t++; } return { vis: big(P(a) + ', ' + P(b) + ', ' + P(c)), q: 'Direct debit payments for three months are ' + P(a) + ', ' + P(b) + ' and ' + P(c) + '. What is the mean monthly payment?', answer: P(t / 3), wrong: [P(t), P(t / 3 + 3), P(t / 2)], explain: 'Add: ' + a + ' + ' + b + ' + ' + c + ' = ' + t + '. Divide by 3: ' + P(t / 3) + '.' }; }
      var bal = rnd(40, 90) * 10, out = rnd(10, 30) * 10, dd = rnd(2, 8) * 5, inn = rnd(60, 120) * 10, fin = bal - out - dd + inn;
      return { vis: big('Balance ' + P(bal)), q: 'An account has <b>' + P(bal) + '</b>. A standing order of ' + P(out) + ' and a direct debit of ' + P(dd) + ' are paid out. Then ' + P(inn) + ' of wages arrive. What is the balance?', answer: P(fin), wrong: [P(bal + out + dd + inn), P(bal - out - dd), P(bal - out + inn)], explain: bal + ' − ' + out + ' − ' + dd + ' + ' + inn + ' = ' + P(fin) + '.' };
    }
    if (k === 0) { var base = rnd(4, 15) * 5, pc = pick([5, 10, 20]), np = Math.round(base * (100 + pc)) / 100; return { vis: big(P(base) + ' + ' + pc + '%'), q: 'A direct debit is <b>' + P(base) + '</b> a month. The price rises by ' + pc + '%. What is the new monthly payment?', answer: P(np), wrong: [P(base + pc), P(base * pc / 100), P(base * (100 - pc) / 100)], explain: 'Multiplier ' + (100 + pc) / 100 + '. ' + base + ' × ' + (100 + pc) / 100 + ' = ' + P(np) + '.' }; }
    if (k === 1) { var o = rnd(20, 60), ex = rnd(1, 6) * 2.5, yr = ex * 12; return { vis: big(P(o) + ' → ' + P(o + ex)), q: 'A direct debit rises from <b>' + P(o) + '</b> to <b>' + P(o + ex) + '</b> a month. How much extra is that over a year?', answer: P(yr), wrong: [P(ex), P(yr + o), P(ex * 52)], explain: 'Extra a month: ' + P(ex) + '. Over a year: ' + ex + ' × 12 = ' + P(yr) + '.' }; }
    var od = rnd(2, 9) * 50, rt = pick([1, 2, 3]), fee = pick([5, 7, 10]), tot = od * rt / 100 + fee;
    return { vis: big('Overdrawn ' + P(od)), q: 'A bank charges <b>' + rt + '%</b> of the overdrawn amount each month, plus ' + P(fee) + ' for a failed direct debit. Sam is overdrawn by ' + P(od) + ' for one month with one failed direct debit. What is the total charge?', answer: P(tot), wrong: [P(od * rt / 100), P(od * rt / 100 * fee), P(od + fee)], explain: rt + '% of ' + od + ' = ' + P(od * rt / 100) + '. Add the fee of ' + P(fee) + ': ' + P(tot) + '.' };
  }; });
  lab([null, 5, 712], 'x_volume', 'Volume builder', ['', 'Count the cubes to find the volume of each cuboid.', 'Use length × breadth × height to find each volume.'], function (v) { return function () {
    var l = rnd(2, 4), w = rnd(1, 3), h = rnd(1, 3), vol = l * w * h, rows = []; for (var i = 0; i < w; i++) { var r = []; for (var j = 0; j < l; j++) r.push(h); rows.push(r); }
    if (v === 2) { l = rnd(3, 12); w = rnd(2, 8); h = rnd(2, 9); vol = l * w * h; return { vis: big(l + ' cm × ' + w + ' cm × ' + h + ' cm'), q: 'What is the volume of a cuboid ' + l + ' cm long, ' + w + ' cm wide and ' + h + ' cm high?', answer: vol + ' cm³', wrong: [(l + w + h) + ' cm³', (l * w) + ' cm³', (2 * (l * w + l * h + w * h)) + ' cm³'], explain: 'V = l × b × h = ' + l + ' × ' + w + ' × ' + h + ' = ' + vol + ' cm³.' }; }
    return { vis: SPA && SPA.cubes ? SPA.cubes(rows, 215, null, true) : '', q: 'Each cube is 1 cm³. What is the volume of this cuboid?', answer: vol + ' cm³', wrong: [(vol + l) + ' cm³', (l * w) + ' cm³', (l + w + h) + ' cm³'],
      explain: 'Count in layers: each layer has ' + l + ' × ' + w + ' = ' + l * w + ' cubes, and there ' + (h > 1 ? 'are ' + h + ' layers' : 'is 1 layer') + '. ' + l * w + ' × ' + h + ' = ' + vol + ' cm³.' };
  }; });
  lab([null, null, 705], 'x_triarea', 'Triangle area', ['', '', 'Area of a triangle = half of base × height.'], function () { return function () {
    var b = rnd(2, 12) * 2, h = rnd(3, 12), a = b * h / 2, s = '<polygon points="20,120 ' + (20 + b * 9) + ',120 ' + (30 + b * 4) + ',' + (120 - h * 8) + '" style="fill:var(--surface-2);stroke:var(--fg);stroke-width:3"/>';
    return { vis: big('base ' + b + ' cm · height ' + h + ' cm'), q: 'A triangle has a base of ' + b + ' cm and a height of ' + h + ' cm. What is its area?', answer: a + ' cm²', wrong: [b * h + ' cm²', (b + h) + ' cm²', a / 2 + ' cm²'], explain: '½ × ' + b + ' × ' + h + ' = ' + a + ' cm². A triangle is half of a rectangle.' };
  }; });

  /* ---------- 6 Algebra ---------- */
  lab([506, 6, 706], 'x_balance', 'Balance it', ['Find the missing number that makes both sides balance.', 'Solve each equation. Do the same to both sides.', 'Solve each equation. Do the same to both sides.'], function (v) { return function () {
    var x = rnd(2, v === 0 ? 12 : 15), a = rnd(2, 9), b = rnd(1, 20), k = rnd(0, v === 0 ? 1 : 2), lhs, rhs, ex;
    if (k === 0) { lhs = (v === 0 ? '□' : 'x') + ' + ' + b; rhs = x + b; ex = 'Take ' + b + ' from both sides: ' + (x + b) + ' − ' + b + ' = ' + x + '.'; }
    else if (k === 1) { lhs = a + ' × ' + (v === 0 ? '□' : 'x'); rhs = a * x; if (v > 0) lhs = a + 'x'; ex = 'Divide both sides by ' + a + ': ' + a * x + ' ÷ ' + a + ' = ' + x + '.'; }
    else { lhs = a + 'x + ' + b; rhs = a * x + b; ex = 'Take ' + b + ' from both sides to get ' + a + 'x = ' + a * x + ', then divide by ' + a + '.'; }
    return { vis: big(lhs + ' = ' + rhs), q: 'What is ' + (v === 0 ? 'the missing number' : 'x') + '?', answer: String(x), wrong: [String(x + 1), String(rhs - (k === 0 ? 0 : b)), String(rhs + b)], explain: ex };
  }; });

  /* ---------- 7 Shape ---------- */
  var POLY = [[3, 'triangle'], [4, 'quadrilateral'], [5, 'pentagon'], [6, 'hexagon'], [7, 'heptagon'], [8, 'octagon'], [9, 'nonagon'], [10, 'decagon']];
  function polyPts(n, r, cx, cy) { var p = []; for (var i = 0; i < n; i++) { var a = -Math.PI / 2 + i * 2 * Math.PI / n; p.push([(cx + r * Math.cos(a)).toFixed(1), (cy + r * Math.sin(a)).toFixed(1)]); } return p; }
  lab([507, 7, 707], 'x_poly', 'Name the polygon', ['Count the sides and name each polygon.', 'Count the sides and name each polygon.', 'Name each polygon and find the sum of its interior angles.'], function (v) { return function () {
    var p = pick(v === 0 ? POLY.slice(0, 6) : POLY), vis = V.poly(polyPts(p[0], 60, 80, 72), 'var(--surface-2)', 160, 144, 'A polygon with ' + p[0] + ' sides');
    if (v === 2 && rnd(0, 1)) { var sum = (p[0] - 2) * 180; return { vis: vis, q: 'What do the interior angles of a ' + p[1] + ' add up to?', answer: sum + '°', wrong: [(p[0] * 180) + '°', ((p[0] - 1) * 180) + '°', '360°'], explain: 'A ' + p[0] + '-sided shape splits into ' + (p[0] - 2) + ' triangles: ' + (p[0] - 2) + ' × 180° = ' + sum + '°.' }; }
    return { vis: vis, q: 'How many sides? What is this shape called?', answer: p[1], wrong: shuffle(POLY.filter(function (x) { return x !== p; })).slice(0, 3).map(function (x) { return x[1]; }), explain: 'It has ' + p[0] + ' sides, so it is a ' + p[1] + '.' };
  }; });
  lab([null, 7, 707], 'x_lines', 'Parallel or perpendicular?', ['', 'Look at each pair of lines. Are they parallel, perpendicular or neither?'], function () { return function () {
    var k = rnd(0, 2), a = rnd(0, 170), b = k === 0 ? a : k === 1 ? a + 90 : a + pick([30, 50, 120, 140]);
    function ln(ang, ox, oy) { var r = ang * Math.PI / 180, dx = 70 * Math.cos(r), dy = 70 * Math.sin(r); return '<line x1="' + (ox - dx).toFixed(1) + '" y1="' + (oy - dy).toFixed(1) + '" x2="' + (ox + dx).toFixed(1) + '" y2="' + (oy + dy).toFixed(1) + '" style="stroke:var(--fg);stroke-width:4;stroke-linecap:round"/>'; }
    var s = k === 0 ? ln(a, 90, 60) + ln(b, 150, 100) : ln(a, 120, 80) + ln(b, 120, 80);
    var names = ['parallel', 'perpendicular', 'neither'];
    return { vis: '<svg viewBox="0 0 240 160" width="240" role="img" aria-label="Two lines">' + s + '</svg>', q: 'These two lines are…', answer: names[k], wrong: names.filter(function (x, i) { return i !== k; }), keepOrder: true,
      explain: k === 0 ? 'Parallel lines go the same way and never meet.' : k === 1 ? 'Perpendicular lines meet at a right angle, 90°.' : 'They meet, but not at a right angle, so they are neither.' };
  }; });
  lab([null, null, 707], 'x_transform', 'Which transformation?', ['', '', 'Is it a translation, a reflection or a rotation?'], function () { return function () {
    var k = rnd(0, 2), sh = [[0, 0], [1, 0], [0, 1], [0, 2]], cells = {}, mv;
    sh.forEach(function (c) { cells[(c[0] + 1) + ',' + (c[1] + 1)] = 1; });
    if (k === 0) mv = sh.map(function (c) { return [c[0] + 5, c[1] + 1]; });
    else if (k === 1) mv = sh.map(function (c) { return [7 - c[0], c[1]]; });
    else mv = sh.map(function (c) { return [5 + c[1], 3 - c[0]]; });
    mv.forEach(function (c) { cells[(c[0] + (k === 0 ? 0 : 1)) + ',' + (c[1] + 1)] = 2; });
    var vis = LK.grid(10, 6, function (i, j) { return !!cells[i + ',' + (5 - j)]; }, { u: 26, mirror: k === 1 ? 5 : undefined, alt: 'A shape and its image' });
    var names = ['translation', 'reflection', 'rotation'];
    return { vis: vis, q: 'The shape on the left moved to the shape on the right. Which transformation is it?', answer: names[k], wrong: names.filter(function (x, i) { return i !== k; }), keepOrder: true,
      explain: k === 0 ? 'A translation slides a shape without turning or flipping it.' : k === 1 ? 'A reflection flips the shape over a mirror line.' : 'A rotation turns the shape about a point.' };
  }; });

  /* ---------- 8 Data and chance ---------- */
  lab([508, 8, 708], 'x_avg', 'Average detective', ['Find the mode or the range of each set of numbers.', 'Find the mean, median, mode or range.', 'Find the mean, median, mode or range.'], function (v) { return function () {
    var n = v === 0 ? 5 : pick([5, 6, 7]), d = []; for (var i = 0; i < n; i++) d.push(rnd(1, v === 0 ? 12 : 20)); d[rnd(1, n - 1)] = d[0];
    var kinds = v === 0 ? ['mode', 'range'] : ['mean', 'median', 'mode', 'range'], k = pick(kinds), s = d.slice().sort(function (a, b) { return a - b; }), ans, ex;
    if (k === 'mean') { var tot = d.reduce(function (a, b) { return a + b; }, 0); d[n - 1] += (n - tot % n) % n; tot = d.reduce(function (a, b) { return a + b; }, 0); s = d.slice().sort(function (a, b) { return a - b; }); ans = tot / n; ex = 'Add them: ' + tot + '. Share by ' + n + ': ' + ans + '.'; }
    else if (k === 'median') { ans = n % 2 ? s[(n - 1) / 2] : (s[n / 2 - 1] + s[n / 2]) / 2; ex = 'In order: ' + s.join(', ') + '. The middle ' + (n % 2 ? 'value is ' : 'two are ' + s[n / 2 - 1] + ' and ' + s[n / 2] + ', halfway is ') + ans + '.'; }
    else if (k === 'mode') { var c = {}, best = s[0]; s.forEach(function (x) { c[x] = (c[x] || 0) + 1; if (c[x] > c[best]) best = x; }); ans = best; ex = best + ' appears most often.'; }
    else { ans = s[n - 1] - s[0]; ex = 'Largest − smallest: ' + s[n - 1] + ' − ' + s[0] + ' = ' + ans + '.'; }
    return { vis: V.cards(d.map(String), ['b']), q: 'What is the <b>' + k + '</b>?', answer: T(ans), wrong: [T(ans + 1), T(s[n - 1]), T(s[Math.floor(n / 2)] === ans ? ans - 1 : s[Math.floor(n / 2)])], explain: ex };
  }; });
  lab([null, 8, 708], 'x_prob', 'Chance bag', ['', 'What is the chance of picking each colour? Write it as a fraction.'], function (v) { return function () {
    var r = rnd(1, 6), b = rnd(1, 6), g = rnd(0, 4), tot = r + b + g, col = pick(g ? ['red', 'blue', 'green'] : ['red', 'blue']), k = col === 'red' ? r : col === 'blue' ? b : g;
    var dots = ''; for (var i = 0; i < tot; i++) { var c = i < r ? 'hsl(0,70%,55%)' : i < r + b ? 'hsl(215,70%,55%)' : 'hsl(140,55%,45%)'; dots += '<circle cx="' + (22 + (i % 8) * 28) + '" cy="' + (22 + Math.floor(i / 8) * 28) + '" r="11" style="fill:' + c + ';stroke:var(--fg);stroke-width:1.5"/>'; }
    var vis = '<svg viewBox="0 0 240 ' + (20 + Math.ceil(tot / 8) * 28) + '" width="240" role="img" aria-label="' + r + ' red, ' + b + ' blue and ' + g + ' green counters">' + dots + '</svg>';
    return { vis: vis, q: 'A bag has ' + r + ' red, ' + b + ' blue' + (g ? ' and ' + g + ' green' : '') + ' counters. What is the chance of picking <b>' + col + '</b>?', answer: simp(k, tot), wrong: [fr(k, tot + 1), fr(1, tot), simp(tot - k, tot), fr(k, tot - k > k ? tot - k : tot + 2)],
      explain: k + ' ' + col + ' out of ' + tot + ' counters: ' + fr(k, tot) + (simp(k, tot) !== fr(k, tot) ? ' = ' + simp(k, tot) : '') + '.' };
  }; });

  /* ---------- 10 Factors, multiples and primes ---------- */
  lab([510, 10, 710], 'x_factors', 'Factor pairs', ['Pick the pair that multiplies to make the number.', 'Find factor pairs and common factors.', 'Find factor pairs, common factors and multiples.'], function (v) { return function () {
    var n = pick([12, 18, 20, 24, 30, 36, 40, 42, 48, 60]), pairs = []; for (var i = 1; i * i <= n; i++) if (n % i === 0) pairs.push([i, n / i]);
    if (v > 0 && rnd(0, 1)) { var m = pick([12, 16, 18, 24, 30]), a = pick([2, 3, 4, 6]) * rnd(2, 5), b = m, h = gcd(a, b); return { vis: big(a + ' and ' + b), q: 'What is the highest common factor of ' + a + ' and ' + b + '?', answer: String(h), wrong: [String(h * 2), String(Math.min(a, b)), String(h === 1 ? 2 : 1)], explain: 'The biggest number that divides into both ' + a + ' and ' + b + ' is ' + h + '.' }; }
    var p = pick(pairs.slice(1)), wrongs = [[p[0] + 1, p[1] - 1], [p[0], p[1] + 2], [p[0] + 2, p[1]], [p[0] - 1, p[1] + 1], [p[0] + 1, p[1]]].filter(function (q) { return q[0] > 0 && q[0] * q[1] !== n; }).map(function (q) { return q[0] + ' × ' + q[1]; });
    return { vis: V.dots(p[0], p[1], 'var(--accent)'), q: 'Which pair of factors makes <b>' + n + '</b>?', answer: p[0] + ' × ' + p[1], wrong: wrongs, explain: p[0] + ' × ' + p[1] + ' = ' + n + '. Factors come in pairs: ' + pairs.map(function (q) { return q[0] + ' × ' + q[1]; }).join(', ') + '.' };
  }; });
  lab([null, 10, 710], 'x_prime', 'Prime spotter', ['', 'Which number is prime?', 'Which number is prime?'], function (v) { return function () {
    var isP = function (x) { if (x < 2) return false; for (var d = 2; d * d <= x; d++) if (x % d === 0) return false; return true; }, lim = v === 1 ? 50 : 100, p, w = [];
    do p = rnd(11, lim); while (!isP(p)); while (w.length < 3) { var x = rnd(9, lim); if (!isP(x) && x % 2 && w.indexOf(x) < 0) w.push(x); }
    return { vis: '', q: 'Which of these numbers is <b>prime</b>?', answer: String(p), wrong: w.map(String), explain: p + ' has exactly two factors, 1 and ' + p + '. ' + w.map(function (x) { for (var d = 3; d < x; d++) if (x % d === 0) return x + ' = ' + d + ' × ' + x / d; return ''; }).join(', ') + '.' };
  }; });
  lab([null, null, 710], 'x_sqcube', 'Square and cube numbers', ['', '', 'Work out squares, cubes and square roots.'], function () { return function () {
    var k = rnd(0, 2), n = rnd(2, k === 1 ? 6 : 12), ans, q, w;
    if (k === 0) { ans = n * n; q = n + '²'; w = [n * 2, n * n * n, n + 2]; }
    else if (k === 1) { ans = n * n * n; q = n + '³'; w = [n * 3, n * n, n * n * 3]; }
    else { ans = n; q = '√' + n * n; w = [n * n / 2, n + 1, n * 2]; }
    return { vis: big(q), q: 'What is <b>' + q + '</b>?', answer: String(ans), wrong: w.map(String), explain: k === 0 ? n + ' × ' + n + ' = ' + ans + '.' : k === 1 ? n + ' × ' + n + ' × ' + n + ' = ' + ans + '.' : n + ' × ' + n + ' = ' + n * n + ', so √' + n * n + ' = ' + n + '.' };
  }; });

  /* ---------- 11 Ratio ---------- */
  lab([null, 11, 711], 'x_ratio', 'Share it fairly', ['Share each amount in the ratio.', 'Share each amount in the ratio.', 'Share amounts and simplify ratios.'], function (v) { return function () {
    if (v === 2 && rnd(0, 1)) { var a0 = rnd(1, 5), b0 = rnd(1, 5); while (gcd(a0, b0) !== 1 || a0 === b0) b0 = rnd(1, 5); var k = rnd(2, 6); return { vis: big((a0 * k) + ' : ' + (b0 * k)), q: 'Simplify the ratio <b>' + a0 * k + ' : ' + b0 * k + '</b>.', answer: a0 + ' : ' + b0, wrong: [b0 + ' : ' + a0, (a0 * k / (k % 2 ? 1 : 2)) + ' : ' + (b0 * k / (k % 2 ? 1 : 2)), (a0 + 1) + ' : ' + b0], explain: 'Divide both parts by ' + k + '.' }; }
    var a = rnd(1, 4), b = rnd(1, 5), part = rnd(2, 12); while (b === a) b = rnd(1, 5); var tot = (a + b) * part;
    return { vis: V.cards(['Ali ' + a + ' part' + (a > 1 ? 's' : ''), 'Bea ' + b + ' part' + (b > 1 ? 's' : '')], ['b', 'p']), q: 'Share <b>£' + tot + '</b> between Ali and Bea in the ratio ' + a + ' : ' + b + '. How much does Ali get?', answer: '£' + a * part, wrong: ['£' + b * part, '£' + tot / 2, '£' + (a * part + part)],
      explain: 'Total parts: ' + a + ' + ' + b + ' = ' + (a + b) + '. One part: £' + tot + ' ÷ ' + (a + b) + ' = £' + part + '. Ali: ' + a + ' × £' + part + ' = £' + a * part + '.' };
  }; });

  /* ---------- 13 Spatial: coordinates and nets ---------- */
  lab([null, 13, 713], 'x_coords', 'Coordinate hunt', ['', 'Read the coordinates of the marked point: across first, then up.', 'Read the coordinates in all four quadrants.'], function (v) { return function () {
    var lo = v === 2 ? -4 : 0, x = rnd(lo, 6), y = rnd(lo, 6), u = 22, o = 20, W = (6 - lo) * u + 2 * o, s = '';
    var X = function (a) { return o + (a - lo) * u; }, Y = function (b) { return o + (6 - b) * u; };
    for (var i = lo; i <= 6; i++) s += '<line x1="' + X(i) + '" y1="' + Y(lo) + '" x2="' + X(i) + '" y2="' + Y(6) + '" style="stroke:var(--line)"/><line x1="' + X(lo) + '" y1="' + Y(i) + '" x2="' + X(6) + '" y2="' + Y(i) + '" style="stroke:var(--line)"/>';
    s += '<line x1="' + X(lo) + '" y1="' + Y(0) + '" x2="' + X(6) + '" y2="' + Y(0) + '" style="stroke:var(--fg);stroke-width:2"/><line x1="' + X(0) + '" y1="' + Y(lo) + '" x2="' + X(0) + '" y2="' + Y(6) + '" style="stroke:var(--fg);stroke-width:2"/>';
    for (i = lo; i <= 6; i += (v === 2 ? 2 : 1)) if (i) s += '<text x="' + X(i) + '" y="' + (Y(0) + 14) + '" text-anchor="middle" style="font-size:10px;fill:var(--fg)">' + i + '</text><text x="' + (X(0) - 6) + '" y="' + (Y(i) + 4) + '" text-anchor="end" style="font-size:10px;fill:var(--fg)">' + i + '</text>';
    s += '<circle cx="' + X(x) + '" cy="' + Y(y) + '" r="6" style="fill:hsl(22,85%,55%);stroke:var(--fg);stroke-width:2"/>';
    return { vis: '<svg viewBox="0 0 ' + W + ' ' + W + '" width="' + Math.min(W, 300) + '" role="img" aria-label="A coordinate grid with one point">' + s + '</svg>', q: 'What are the coordinates of the orange point?', answer: '(' + x + ', ' + y + ')', wrong: ['(' + y + ', ' + x + ')', '(' + (x + 1) + ', ' + y + ')', '(' + x + ', ' + (y - 1) + ')'],
      explain: 'Go across to ' + x + ', then ' + (y < 0 ? 'down' : 'up') + ' to ' + y + '. Across first, then up: (' + x + ', ' + y + ').' };
  }; });
  var NETS_OK = [[[0, 1], [1, 0], [1, 1], [1, 2], [1, 3], [2, 1]], [[0, 0], [1, 0], [1, 1], [1, 2], [1, 3], [2, 3]], [[0, 0], [0, 1], [1, 1], [1, 2], [1, 3], [2, 3]], [[0, 0], [0, 1], [0, 2], [1, 2], [1, 3], [1, 4]]];
  var NETS_BAD = [[[0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [1, 0]], [[0, 0], [1, 0], [0, 1], [1, 1], [0, 2], [1, 2]], [[0, 1], [1, 0], [1, 1], [1, 2], [2, 1], [2, 2]], [[0, 0], [0, 1], [1, 0], [1, 1], [2, 0], [3, 0]]];
  lab([null, 13, 713], 'x_nets', 'Will it fold?', ['', 'Will these six squares fold into a cube?'], function () { return function () {
    var ok = rnd(0, 1), net = pick(ok ? NETS_OK : NETS_BAD), set = {}; net.forEach(function (c) { set[c[0] + ',' + c[1]] = 1; });
    var cols = Math.max.apply(null, net.map(function (c) { return c[1]; })) + 1, rows = Math.max.apply(null, net.map(function (c) { return c[0]; })) + 1;
    var vis = LK.grid(cols, rows, function (i, j) { return set[j + ',' + i] ? true : 'skip'; }, { u: 36, alt: 'Six squares joined edge to edge' });
    return { vis: vis, q: 'Will this net fold into a cube?', answer: ok ? 'Yes, it makes a cube' : 'No, faces overlap', wrong: [ok ? 'No, faces overlap' : 'Yes, it makes a cube'], keepOrder: true,
      explain: ok ? 'Fold the squares up round the base: each one lands on a different face.' : 'When you fold it, two squares land on the same face, so one face is missing.' };
  }; });
  /* ---------- 9 Problem solving: choose the calculation ---------- */
  lab([509, 9, 709], 'x_whichop', 'Problem detective', ['Read each problem and pick the calculation that solves it.', 'Read each problem and pick the calculation that solves it.', 'Read each two-step problem and pick the calculation that solves it.'], function (v) { return function () {
    var a = rnd(3, 9), b = rnd(12, 48), c = rnd(2, 9), nm = pick(['Maya', 'Ben', 'Ali', 'Priya', 'Sam', 'Zara']), P = [
      [nm + ' has ' + b + ' stickers and is given ' + a + ' more. How many now?', b + ' + ' + a, [b + ' − ' + a, b + ' × ' + a, a + ' − ' + b]],
      [nm + ' has ' + b + ' sweets and eats ' + a + '. How many are left?', b + ' − ' + a, [b + ' + ' + a, a + ' − ' + b, b + ' ÷ ' + a]],
      [a + ' bags each hold ' + b + ' marbles. How many marbles altogether?', a + ' × ' + b, [a + ' + ' + b, b + ' ÷ ' + a, b + ' − ' + a]],
      [a * c + ' pencils are shared equally between ' + a + ' tables. How many on each table?', a * c + ' ÷ ' + a, [a * c + ' × ' + a, a * c + ' − ' + a, a + ' ÷ ' + a * c]]];
    if (v > 0) P.push([nm + ' buys ' + a + ' pens at ' + c + 'p each and pays with £1. How much change?', '100 − ' + a + ' × ' + c, [a + ' × ' + c + ' − 100', '100 − ' + a + ' − ' + c, '(100 − ' + a + ') × ' + c]],
      ['A ticket costs £' + c + '. ' + a + ' adults and ' + (a + 1) + ' children go. How much altogether?', '(' + a + ' + ' + (a + 1) + ') × ' + c, [a + ' + ' + (a + 1) + ' × ' + c, a + ' × ' + (a + 1) + ' × ' + c, '(' + a + ' + ' + (a + 1) + ') + ' + c]]);
    var q = pick(v === 2 ? P.slice(4) : P);
    return { vis: '', q: q[0], answer: q[1], wrong: q[2], explain: 'Picture the story: ' + (/×/.test(q[1]) ? 'equal groups mean multiply' : /÷/.test(q[1]) ? 'sharing equally means divide' : /−/.test(q[1]) ? 'taking away or finding what is left means subtract' : 'putting together means add') + '. The calculation is ' + q[1] + '.' };
  }; });

  /* ---------- 13 Spatial: grid references (P5) ---------- */
  lab([513, null, null], 'x_gridref', 'Grid reference hunt', ['Find the grid reference of each place: letter first, then number.'], function () { return function () {
    var places = [['🏠', 'house'], ['🌳', 'tree'], ['⛪', 'church'], ['🏫', 'school'], ['🏊', 'pool']], it = pick(places), c = rnd(0, 4), r = rnd(0, 3);
    var vis = LK.map(5, 4, [[c, r, it[1], 22]], { alt: 'A map grid with letters A to E and numbers 1 to 4' }), ref = String.fromCharCode(65 + c) + (r + 1);
    return { vis: vis, q: 'What is the grid reference of the <b>' + it[1] + '</b>?', answer: ref, wrong: [(r + 1) + String.fromCharCode(65 + c), String.fromCharCode(65 + (c + 1) % 5) + (r + 1), String.fromCharCode(65 + c) + ((r + 1) % 4 + 1)], explain: 'Go along to column ' + String.fromCharCode(65 + c) + ', then up to row ' + (r + 1) + ': ' + ref + '.' };
  }; });

  /* ===================== S1 to S3: new activities ===================== */
  var NM = ['Maya', 'Ben', 'Ali', 'Priya', 'Sam', 'Zara', 'Leo', 'Isla'];
  var sg = function (x) { return x < 0 ? '−' + Math.abs(x) : String(x); };
  lab([null, null, null], 'x_neg', 'Negative number workout', [''], function () { return function () {
    var a = rnd(-12, 12), b = rnd(-9, 9) || 3, op = pick(['+', '−', '×', '÷']), ans, ex;
    if (op === '÷') { var q = rnd(-9, 9) || 2; a = q * b; ans = q; ex = 'Same signs give a positive answer, different signs a negative one.'; }
    else if (op === '×') { ans = a * b; ex = 'Same signs give a positive answer, different signs a negative one.'; }
    else if (op === '+') { ans = a + b; ex = b < 0 ? 'Adding a negative is the same as subtracting ' + Math.abs(b) + '.' : 'Move ' + b + ' to the right on the number line.'; }
    else { ans = a - b; ex = b < 0 ? 'Subtracting a negative is the same as adding ' + Math.abs(b) + '.' : 'Move ' + b + ' to the left on the number line.'; }
    var t = sg(a) + ' ' + op + ' ' + (b < 0 ? '(' + sg(b) + ')' : b);
    return { vis: big(t), q: 'Work out <b>' + t + '</b>.', answer: sg(ans), wrong: [sg(-ans), sg(ans + 2), sg(op === '+' || op === '−' ? a - (op === '+' ? b : -b) : ans - 1)], explain: ex + ' The answer is ' + sg(ans) + '.' };
  }; });
  lab([null, null, null], 'x_decx', 'Decimal multiply and divide', [''], function () { return function () {
    var k = rnd(0, 1);
    if (k === 0) { var a = rnd(11, 99) / 10, b = pick([0.2, 0.3, 0.4, 0.5, 3, 4, 6]), ans = Math.round(a * b * 1000) / 1000; return { vis: big(T(a) + ' × ' + T(b)), q: 'Work out <b>' + T(a) + ' × ' + T(b) + '</b>.', answer: T(ans), wrong: [T(ans * 10), T(ans / 10), T(ans + 0.1)], explain: 'Multiply without the points, then count the decimal places in the question: ' + T(ans) + '.' }; }
    var d = pick([0.2, 0.4, 0.5, 0.25, 4, 8]), q = rnd(3, 40) / (d < 1 ? 1 : 10), n = Math.round(q * d * 1000) / 1000;
    return { vis: big(T(n) + ' ÷ ' + T(d)), q: 'Work out <b>' + T(n) + ' ÷ ' + T(d) + '</b>.', answer: T(q), wrong: [T(q * 10), T(q / 10), T(n * d)], explain: (d < 1 ? 'Multiply both numbers by ' + (d === 0.25 ? 100 : 10) + ' so you divide by a whole number. ' : 'Keep the point in line. ') + 'The answer is ' + T(q) + '.' };
  }; });
  lab([null, null, null], 'x_terms', 'Simplify the terms', [''], function () { return function () {
    var a = rnd(2, 9), b = rnd(1, 8), c = rnd(1, 9), d = rnd(1, 6), x = pick(['x', 'a', 'n', 'p']), y = pick(['y', 'b', 'm', 'q']);
    var t = a + x + ' + ' + c + y + ' − ' + b + x + ' + ' + d + y, cx = a - b, cy = c + d;
    var term = function (k, v) { return k === 0 ? '' : k === 1 ? v : k === -1 ? '−' + v : sg(k) + v; };
    var ans = (term(cx, x) ? term(cx, x) + ' + ' : '') + term(cy, y);
    return { vis: big(t), q: 'Simplify <b>' + t + '</b>.', answer: ans, wrong: [term(a + b, x) + ' + ' + term(cy, y), term(cx, x) + ' + ' + term(c - d, y), (cx + cy) + x + y], explain: 'Collect the ' + x + ' terms: ' + a + ' − ' + b + ' = ' + cx + '. Collect the ' + y + ' terms: ' + c + ' + ' + d + ' = ' + cy + '.' };
  }; });
  lab([null, null, null], 'x_subst', 'Substitution', [''], function () { return function () {
    var x = rnd(-4, 6) || 2, a = rnd(2, 6), b = rnd(1, 9), k = rnd(0, 2), e, ans;
    if (k === 0) { e = a + 'x + ' + b; ans = a * x + b; }
    else if (k === 1) { e = 'x² + ' + b; ans = x * x + b; }
    else { e = a + 'x² − ' + b; ans = a * x * x - b; }
    return { vis: big(e), q: 'Find the value of <b>' + e + '</b> when <b>x = ' + sg(x) + '</b>.', answer: sg(ans), wrong: [sg(k === 0 ? a + x + b : k === 1 ? 2 * x + b : (a * x) * (a * x) - b), sg(ans + 1), sg(-ans)], explain: 'Replace x with ' + (x < 0 ? '(' + sg(x) + ')' : x) + ' and use BODMAS: powers first, then multiply, then add or subtract. ' + sg(ans) + '.' };
  }; });
  lab([null, null, null], 'x_nth', 'Find the rule', [''], function () { return function () {
    var d = pick([2, 3, 4, 5, 6, -2, -3]), c = rnd(-3, 9), seq = [1, 2, 3, 4].map(function (n) { return d * n + c; });
    var rule = function (dd, cc) { return (dd === 1 ? '' : dd === -1 ? '−' : sg(dd)) + 'n' + (cc > 0 ? ' + ' + cc : cc < 0 ? ' − ' + Math.abs(cc) : ''); };
    return { vis: big(seq.map(sg).join(', ') + ', …'), q: 'What is the nth term of this sequence?', answer: rule(d, c), wrong: [rule(d, c + d), rule(c + d, d), 'n + ' + d], explain: 'The difference is ' + sg(d) + ', so start with ' + sg(d) + 'n. Then adjust to match the first term, ' + sg(seq[0]) + ': ' + rule(d, c) + '.' };
  }; });
  lab([null, null, null], 'x_scale', 'Scale factor', [''], function () { return function () {
    var k = pick([2, 3, 1.5, 0.5, 2.5, 4]), a = rnd(2, 12) * 2, b = rnd(2, 10) * 2, ask = rnd(0, 2);
    if (ask === 0) return { vis: V.cards([a + ' cm → ' + T(a * k) + ' cm', b + ' cm → ?'], ['b', 'p']), q: 'Two shapes are similar. A side of ' + a + ' cm becomes ' + T(a * k) + ' cm. What does a side of ' + b + ' cm become?', answer: T(b * k) + ' cm', wrong: [T(b + a * k - a) + ' cm', T(b / k) + ' cm', T(b * k * k) + ' cm'], explain: 'Scale factor: ' + T(a * k) + ' ÷ ' + a + ' = ' + T(k) + '. ' + b + ' × ' + T(k) + ' = ' + T(b * k) + ' cm.' };
    if (ask === 1) return { vis: big(a + ' → ' + T(a * k)), q: 'A length of ' + a + ' cm becomes ' + T(a * k) + ' cm. What is the scale factor?', answer: T(k), wrong: [T(a * k - a), T(1 / k), T(k * 2)], explain: 'Scale factor = new ÷ original = ' + T(a * k) + ' ÷ ' + a + ' = ' + T(k) + '.' };
    return { vis: big('k = ' + T(k)), q: 'A shape with area ' + a + ' cm² is enlarged by scale factor ' + T(k) + '. What is the new area?', answer: T(a * k * k) + ' cm²', wrong: [T(a * k) + ' cm²', T(a * k * 3) + ' cm²', T(a + k) + ' cm²'], explain: 'Areas scale by k²: ' + a + ' × ' + T(k * k) + ' = ' + T(a * k * k) + ' cm².' };
  }; });
  lab([null, null, null], 'x_speed', 'Speed, distance, time', [''], function () { return function () {
    var s = pick([4, 5, 12, 15, 30, 40, 48, 60, 80]), t = pick([0.5, 1.5, 2, 2.5, 3, 0.25, 0.75]), d = s * t, k = rnd(0, 2), mins = function (h) { var m = Math.round(h * 60); return Math.floor(m / 60) + ' h ' + m % 60 + ' min'; };
    if (k === 0) return { vis: big(s + ' km/h for ' + mins(t)), q: 'How far do you travel at ' + s + ' km/h for ' + mins(t) + '?', answer: T(d) + ' km', wrong: [T(s * Math.round(t * 60) / 100) + ' km', T(s / t) + ' km', T(d * 2) + ' km'], explain: 'D = S × T = ' + s + ' × ' + T(t) + ' = ' + T(d) + ' km. (' + mins(t) + ' = ' + T(t) + ' hours.)' };
    if (k === 1) return { vis: big(T(d) + ' km in ' + mins(t)), q: 'What is the average speed for ' + T(d) + ' km in ' + mins(t) + '?', answer: s + ' km/h', wrong: [T(d * t) + ' km/h', T(s * 2) + ' km/h', T(d) + ' km/h'], explain: 'S = D ÷ T = ' + T(d) + ' ÷ ' + T(t) + ' = ' + s + ' km/h.' };
    return { vis: big(T(d) + ' km at ' + s + ' km/h'), q: 'How long does it take to travel ' + T(d) + ' km at ' + s + ' km/h?', answer: mins(t), wrong: [mins(t + 0.5), T(t) + ' min', mins(t * 2)], explain: 'T = D ÷ S = ' + T(d) + ' ÷ ' + s + ' = ' + T(t) + ' hours = ' + mins(t) + '.' };
  }; });
  lab([null, null, null], 'x_areaunits', 'Area and volume units', [''], function () { return function () {
    var k = rnd(0, 3), n = rnd(2, 9) + pick([0, 0.5]);
    var P = [['m²', 'cm²', 10000], ['cm²', 'mm²', 100], ['m³', 'cm³', 1000000], ['litres', 'cm³', 1000]][k];
    return { vis: big(T(n) + ' ' + P[0]), q: 'How many <b>' + P[1] + '</b> is ' + T(n) + ' ' + P[0] + '?', answer: fmt(n * P[2]), wrong: [fmt(n * Math.sqrt(P[2]) | 0) , fmt(n * P[2] / 10), fmt(n * P[2] * 10)], explain: '1 ' + P[0].replace('litres', 'litre') + ' = ' + fmt(P[2]) + ' ' + P[1] + (k < 3 ? ', because you ' + (k === 2 ? 'cube' : 'square') + ' the length conversion' : '') + '. ' + T(n) + ' × ' + fmt(P[2]) + ' = ' + fmt(n * P[2]) + '.' };
  }; });
  var SOL = [['cube', 6, 12, 8], ['cuboid', 6, 12, 8], ['triangular prism', 5, 9, 6], ['square-based pyramid', 5, 8, 5], ['tetrahedron', 4, 6, 4], ['pentagonal prism', 7, 15, 10], ['hexagonal prism', 8, 18, 12]];
  lab([null, null, null], 'x_faces', 'Faces, edges, vertices', [''], function () { return function () {
    var s = pick(SOL), what = pick([['faces', 1], ['edges', 2], ['vertices', 3]]);
    return { vis: big(s[0]), q: 'How many <b>' + what[0] + '</b> does a ' + s[0] + ' have?', answer: String(s[what[1]]), wrong: [String(s[what[1]] + 1), String(s[what[1]] - 2), String(s[(what[1] % 3) + 1])], explain: 'A ' + s[0] + ' has ' + s[1] + ' faces, ' + s[2] + ' edges and ' + s[3] + ' vertices. Check: F + V − E = ' + s[1] + ' + ' + s[3] + ' − ' + s[2] + ' = 2.' };
  }; });
  var SYM = [['square', 4, 4], ['rectangle', 2, 2], ['equilateral triangle', 3, 3], ['isosceles triangle', 1, 1], ['rhombus', 2, 2], ['parallelogram', 0, 2], ['kite', 1, 1], ['regular hexagon', 6, 6], ['regular pentagon', 5, 5]];
  lab([null, null, null], 'x_symm', 'Symmetry spotter', [''], function () { return function () {
    var s = pick(SYM), lines = rnd(0, 1);
    return { vis: big(s[0]), q: lines ? 'How many <b>lines of symmetry</b> does a ' + s[0] + ' have?' : 'What is the <b>order of rotational symmetry</b> of a ' + s[0] + '?', answer: String(lines ? s[1] : s[2]), wrong: [String((lines ? s[1] : s[2]) + 1), String((lines ? s[1] : s[2]) * 2), String(lines ? s[2] + 2 : s[1] + 3)], explain: 'A ' + s[0] + ' has ' + s[1] + ' line' + (s[1] === 1 ? '' : 's') + ' of symmetry and rotational symmetry of order ' + s[2] + '.' };
  }; });
  lab([null, null, null], 'x_datatype', 'Data detective', [''], function () { return function () {
    var D = [['favourite colour', 'categorical'], ['number of brothers and sisters', 'discrete'], ['height in cm', 'continuous'], ['shoe size', 'discrete'], ['time to run 100 m', 'continuous'], ['type of pet', 'categorical'], ['number of goals scored', 'discrete'], ['mass of an apple', 'continuous']], d = pick(D);
    return { vis: big(d[0]), q: 'What type of data is <b>' + d[0] + '</b>?', answer: d[1], wrong: ['categorical', 'discrete', 'continuous'].filter(function (x) { return x !== d[1]; }), keepOrder: true,
      explain: d[1] === 'categorical' ? 'It is a word or group, not a number.' : d[1] === 'discrete' ? 'It is counted, so it can only take certain values.' : 'It is measured, so it can take any value in a range.' };
  }; });
  lab([null, null, null], 'x_pctchange', 'Percentage change', [''], function () { return function () {
    var o = pick([20, 40, 50, 80, 120, 200, 250, 400]), p = pick([5, 10, 15, 20, 25, 30, 40]), up = rnd(0, 1), n = o * (up ? 1 + p / 100 : 1 - p / 100);
    return { vis: big('£' + o + ' → £' + T(n)), q: 'A price changes from £' + o + ' to £' + T(n) + '. What is the percentage ' + (up ? 'increase' : 'decrease') + '?', answer: p + '%', wrong: [Math.round(Math.abs(n - o) / n * 100) + '%', Math.abs(n - o) + '%', (p + 5) + '%'], explain: 'Change: £' + T(Math.abs(n - o)) + '. Divide by the original, £' + o + ', and × 100: ' + p + '%.' };
  }; });
  lab([null, null, null], 'x_perim', 'Perimeter puzzle', [''], function () { return function () {
    var a = rnd(6, 15), b = rnd(4, 10), c = rnd(2, a - 2), d = rnd(1, b - 2), k = rnd(0, 1);
    if (k === 0) return { vis: big(a + ' cm × ' + b + ' cm'), q: 'What is the perimeter of a rectangle ' + a + ' cm by ' + b + ' cm?', answer: 2 * (a + b) + ' cm', wrong: [a * b + ' cm', (a + b) + ' cm', 2 * a + b + ' cm'], explain: '2 × (' + a + ' + ' + b + ') = ' + 2 * (a + b) + ' cm.' };
    return { vis: big('L-shape ' + a + ' by ' + b), q: 'An L-shape is a ' + a + ' cm by ' + b + ' cm rectangle with a ' + c + ' cm by ' + d + ' cm corner cut out. What is its perimeter?', answer: 2 * (a + b) + ' cm', wrong: [2 * (a + b) - 2 * c + ' cm', 2 * (a + b) - c - d + ' cm', (a * b - c * d) + ' cm'], explain: 'Cutting a corner out of a rectangle doesn’t change the perimeter: the two new sides replace the two missing parts. 2 × (' + a + ' + ' + b + ') = ' + 2 * (a + b) + ' cm.' };
  }; });

  /* S1 */
  also('x_rounddec', [[801, 2]]); also('x_estimate', [[801, 2]]); also('x_factors', [[802, 1]]); also('x_neg', [[802, 0]]);
  also('x_fcompare', [[803, 1]]); also('x_simplify', [[803, 1]]); also('x_fadd', [[803, 2]]); also('x_fmult', [[803, 2]]);
  also('x_pctof', [[804, 2]]); also('x_fdp', [[804, 2]]); also('x_pctchange', [[804, 0]]); also('x_ratio', [[805, 2]]); also('x_money', [[806, 2]]);
  also('x_speed', [[807, 0]]); also('x_clock', [[807, 2]]); also('x_units', [[808, 2]]); also('x_perim', [[808, 0]]); also('x_triarea', [[808, 2]]);
  also('x_nth', [[809, 0]]); also('x_terms', [[809, 0]]); also('x_balance', [[809, 2]]); also('x_lines', [[810, 2]]); also('x_poly', [[810, 2], [811, 1]]);
  also('x_symm', [[811, 0]]); also('x_coords', [[811, 2]]); also('x_datatype', [[812, 0]]); also('x_avg', [[812, 2]]); also('x_prob', [[812, 2]]); also('x_nets', [[813, 1]]); also('x_faces', [[813, 0]]);
  /* S2 */
  also('x_rounddec', [[821, 2]]); also('x_neg', [[821, 0]]); also('x_decx', [[821, 0]]); also('x_prime', [[821, 2]]); also('x_sqcube', [[821, 2]]); also('x_fadd', [[821, 2]]);
  also('x_pctof', [[822, 2]]); also('x_fdp', [[822, 2]]); also('x_pctchange', [[822, 0]]); also('x_ratio', [[823, 2]]); also('x_money', [[824, 2]]);
  also('x_speed', [[825, 0]]); also('x_clock', [[825, 2]]); also('x_areaunits', [[826, 0]]); also('x_faces', [[826, 0]]); also('x_volume', [[826, 2]]);
  also('x_terms', [[827, 0]]); also('x_balance', [[827, 2]]); also('x_subst', [[827, 0]]); also('x_nth', [[828, 0]]); also('x_lines', [[829, 2]]); also('x_poly', [[829, 2]]);
  also('x_scale', [[831, 0]]); also('x_avg', [[832, 2]]); also('x_prob', [[832, 2]]); also('x_transform', [[833, 2]]); also('x_nets', [[833, 1]]);
  /* S3 */
  also('x_sqcube', [[841, 2]]); also('x_factors', [[841, 2]]); also('x_pctchange', [[841, 0]]); also('x_money', [[842, 2]]); also('x_speed', [[843, 0]]);
  also('x_faces', [[844, 0]]); also('x_volume', [[844, 2]]); also('x_nth', [[845, 0]]); also('x_terms', [[845, 0]]); also('x_subst', [[845, 0]]);
  also('x_balance', [[846, 2]]); also('x_scale', [[851, 0]]); also('x_poly', [[851, 2]]); also('x_avg', [[852, 2]]); also('x_symm', [[853, 0]]); also('x_transform', [[853, 2]]);

  BT.ACTGEN = REG;
  if (BT.relabelActivities) BT.relabelActivities();
})();
