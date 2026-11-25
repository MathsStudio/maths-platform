/* fl_p4.js: Primary 4 (First level, leading into P5). Nine topics, each with four story lessons,
   three hands-on activities and practice questions at Low, Medium and High (with the Strengths Check). */
(function () {
  'use strict';
  var FL = window.FL, BT = window.BT; if (!FL || !BT || !BT.L) return;
  var L = BT.L, E = L.E, LS = L.lesson, V = BT.sv, r = FL.r, pick = FL.pick, shuffle = FL.shuffle, Q = FL.Q, MC = FL.MC, svg = FL.svg, tx = FL.tx;
  var INK = '#2b2340';
  function nums(a, w) { var o = [String(a)]; w.forEach(function (x) { if (x >= 0 && o.indexOf(String(x)) < 0) o.push(String(x)); }); return o.slice(1); }
  function clk(h, m, w) { return '<div style="max-width:' + (w || 190) + 'px;margin:0 auto">' + V.clock(h, m) + '</div>'; }
  function tname(h, m) { var nx = h % 12 + 1; return m === 0 ? h + ' o’clock' : m === 30 ? 'half past ' + h : m === 15 ? 'quarter past ' + h : m === 45 ? 'quarter to ' + nx : m < 30 ? m + ' past ' + h : (60 - m) + ' to ' + nx; }
  function tbl(rows, heads) { return '<div class="fl-tbl" style="overflow-x:auto;font-size:1.15em">' + V.tbl(rows, heads) + '</div>'; }

  /* ---------- pictures ---------- */
  function thermo(t) { var y = function (v) { return 150 - (v + 10) * 6; }, s = '<rect x="50" y="20" width="24" height="140" rx="12" fill="#fff" stroke="' + INK + '" stroke-width="3"/><circle cx="62" cy="168" r="18" fill="#ef5b5b" stroke="' + INK + '" stroke-width="3"/><rect x="56" y="' + y(t) + '" width="12" height="' + (165 - y(t)) + '" fill="#ef5b5b"/>';
    for (var v = -10; v <= 10; v++) s += '<line x1="74" y1="' + y(v) + '" x2="' + (v % 5 === 0 ? 90 : 82) + '" y2="' + y(v) + '" stroke="' + INK + '" stroke-width="' + (v % 5 === 0 ? 2.5 : 1.5) + '"/>' + (v % 5 === 0 ? tx(110, y(v) + 5, v, 14) : '');
    return svg(140, 195, 'a thermometer showing ' + t + ' degrees', s, 150); }
  function grid(c, rw, mark) { var cols = 'ABCDE', s = '', S0 = 40; for (var i = 0; i < 5; i++) { s += tx(30 + S0 * i + S0 / 2, 225, cols[i], 15) + tx(14, 200 - S0 * i - S0 / 2 + 5, i + 1, 15); for (var j = 0; j < 5; j++) s += '<rect x="' + (30 + S0 * i) + '" y="' + (200 - S0 * (j + 1)) + '" width="' + S0 + '" height="' + S0 + '" fill="#fff" stroke="' + INK + '" stroke-width="1.5"/>'; }
    if (mark) s += '<text x="' + (30 + S0 * c + S0 / 2) + '" y="' + (200 - S0 * rw - S0 / 2 + 9) + '" font-size="26" text-anchor="middle">' + mark + '</text>';
    return svg(240, 235, 'a grid with columns A to E and rows 1 to 5', s, 260); }
  function compass(hl) { var P = { N: [100, 28], E: [172, 104], S: [100, 182], W: [28, 104] }, s = '<circle cx="100" cy="100" r="62" fill="#fff8e1" stroke="' + INK + '" stroke-width="3"/><path d="M100 48 112 100 100 152 88 100Z" fill="#ef5b5b" stroke="' + INK + '" stroke-width="2"/><path d="M48 100 100 88 152 100 100 112Z" fill="#7cc4ff" stroke="' + INK + '" stroke-width="2"/>';
    Object.keys(P).forEach(function (k) { s += tx(P[k][0], P[k][1], k, 22, k === hl ? '#e0457b' : INK); }); return svg(200, 200, 'a compass', s, 200); }
  function gridShape(cells, w, h, show) { var s = '', S0 = 28; for (var y = 0; y < h; y++) for (var x = 0; x < w; x++) { var on = cells.indexOf(x + ',' + y) >= 0; s += '<rect x="' + (6 + x * S0) + '" y="' + (6 + y * S0) + '" width="' + S0 + '" height="' + S0 + '" fill="' + (on ? '#8fd67d' : '#fff') + '" stroke="' + (on ? INK : '#c9c3d6') + '" stroke-width="' + (on ? 2 : 1) + '"/>'; }
    return svg(w * S0 + 12, h * S0 + 12, 'a shape on squared paper', s, Math.min(320, w * 40)); }
  function rectCells(a, b) { var c = []; for (var y = 0; y < b; y++) for (var x = 0; x < a; x++) c.push((x + 1) + ',' + (y + 1)); return c; }
  function rectPic(a, b, unit) { var k = Math.min(26, 220 / Math.max(a, b)), W = a * k, H = b * k, s = '<rect x="40" y="20" width="' + W + '" height="' + H + '" fill="#d6ecff" stroke="' + INK + '" stroke-width="3"/>' + tx(40 + W / 2, 16, a + ' ' + unit, 14) + tx(36, 20 + H / 2 + 5, b + ' ' + unit, 14, null, 800, 'end');
    return svg(W + 60, H + 30, 'a rectangle ' + a + ' by ' + b, s, 320); }
  function scale(lo, hi, step, val, unit) { var n = (hi - lo) / step, W = 300, s = '<line x1="20" y1="40" x2="' + (20 + W) + '" y2="40" stroke="' + INK + '" stroke-width="3"/>';
    for (var i = 0; i <= n; i++) { var x = 20 + W * i / n, big = (lo + i * step) % (step * 2) === 0 || i === 0 || i === n; s += '<line x1="' + x + '" y1="' + (big ? 26 : 32) + '" x2="' + x + '" y2="40" stroke="' + INK + '" stroke-width="2"/>' + (big ? tx(x, 62, lo + i * step, 13) : ''); }
    var px = 20 + W * (val - lo) / (hi - lo); s += '<path d="M' + px + ' 38 l-8 -18 h16z" fill="#ef5b5b" stroke="' + INK + '" stroke-width="2"/>';
    return svg(W + 40, 72, 'a scale in ' + unit, s, 380); }
  function fline(d, marks) { var W = 300, s = '<line x1="20" y1="40" x2="' + (20 + W) + '" y2="40" stroke="' + INK + '" stroke-width="3"/>';
    for (var i = 0; i <= d; i++) { var x = 20 + W * i / d; s += '<line x1="' + x + '" y1="30" x2="' + x + '" y2="50" stroke="' + INK + '" stroke-width="2"/>' + tx(x, 70, i === 0 ? '0' : i === d ? '1' : i + '/' + d, 13); }
    (marks || []).forEach(function (m) { var x = 20 + W * m[0]; s += '<circle cx="' + x + '" cy="40" r="7" fill="' + (m[2] || '#ef5b5b') + '" stroke="' + INK + '" stroke-width="2"/>' + (m[1] ? tx(x, 20, m[1], 13, '#e0457b') : ''); });
    return svg(W + 40, 80, 'a number line from 0 to 1', s, 380); }
  function venn(a, b, items) { var s = '<circle cx="100" cy="90" r="70" fill="#7cc4ff" fill-opacity=".35" stroke="' + INK + '" stroke-width="2.5"/><circle cx="190" cy="90" r="70" fill="#ffb03b" fill-opacity=".35" stroke="' + INK + '" stroke-width="2.5"/>' + tx(80, 14, a, 13) + tx(210, 14, b, 13);
    (items || []).forEach(function (it) { s += tx(it[1], it[2], it[0], 15); }); return svg(290, 175, 'a Venn diagram', s, 360); }
  FL.thermo = thermo; FL.grid = grid; FL.compass = compass;
  /* rows of things with the repeated addition beside them: show 1 = rows of, 2 = + the adding, 3 = + the answer */
  function arr(rows, per, kind, show, op) {
    var tot = rows * per, lines = [rows + ' rows of ' + per];
    if (show >= 2) { var a = []; for (var i = 0; i < rows; i++) a.push(per); lines.push(a.join(' + ')); }
    if (show >= 3) lines.push(rows + ' × ' + per + ' = ' + tot);
    return '<div style="display:flex;align-items:center;gap:22px;justify-content:center;flex-wrap:wrap"><style>.arrp{height:210px;display:flex;align-items:center;justify-content:center}.arrp svg{height:100%!important;width:auto!important;max-width:100%!important;min-width:0!important;flex:none!important}</style><div class="arrp">' + FL.things(tot, kind || 'cake', per) + '</div><div style="font:800 1.5rem/1.5 system-ui,sans-serif;color:' + INK + ';background:#fff;border:3px solid ' + INK + ';border-radius:16px;padding:10px 16px">' + lines.join('<br>') + '</div></div>';
  }
  FL.p4 = { arr: arr, scale: scale, fline: fline, venn: venn, gridShape: gridShape, rectCells: rectCells, rectPic: rectPic, tbl: tbl, clk: clk };

  /* ================= 1. Place value: Professor Owl's number lab ================= */
  var g1 = {
    seq: function (big) { var j = pick(big ? [25, 50, 100] : [3, 4, 5, 10]), s = j * r(0, j === 100 ? 5 : 8), down = r(0, 1), a = []; for (var i = 0; i < 4; i++) a.push(down ? s + (4 - i) * j : s + i * j); var nx = down ? s : s + 4 * j; return Q('Number patterns', 'What comes next? <b>' + a.join(', ') + ', …</b>', nx, ['What is the jump between the numbers?', 'Jump ' + (down ? 'back ' : 'on ') + j + '.'], 'The jump is ' + j + (down ? ' back' : '') + '. Next: ' + nx + '.'); },
    pv: function (big) { var n = big ? r(100, 999) : r(100, 500), ds = String(n).split(''), k = r(0, ds.length - 1), place = ['ones', 'tens', 'hundreds', 'thousands'][ds.length - 1 - k], val = +ds[k] * Math.pow(10, ds.length - 1 - k); if (ds[k] === '0') return g1.pv(big); return Q('Place value', 'What is the <b>value</b> of the digit <b>' + ds[k] + '</b> in <b>' + n + '</b>?', val, ['Which column is the ' + ds[k] + ' in?', 'It is in the ' + place + ' column.'], 'The ' + ds[k] + ' is in the ' + place + ', so it is worth ' + val + '.'); },
    rnd: function (big) { var to = big ? pick([10, 100]) : 10, n = r(to === 100 ? 120 : 15, to === 100 ? 949 : 999); if (n % to === to / 2) n++; var a = Math.round(n / to) * to; return Q('Rounding', 'Round <b>' + n + '</b> to the nearest <b>' + to + '</b>.', a, ['Which two ' + to + 's is it between?', 'Look at the digit to the right: 5 or more rounds up.'], n + ' rounds to ' + a + '.'); },
    neg: function (big) { var t = r(big ? -9 : -5, 8), ch = r(2, 6), up = r(0, 1); if (!up && t - ch < -10) up = 1; var e = up ? t + ch : t - ch; return Q('Negative numbers', 'It is <b>' + t + '°C</b>. The temperature ' + (up ? 'rises' : 'falls') + ' by <b>' + ch + '</b> degrees. What is it now?', e, ['Use the thermometer: ' + (up ? 'count up' : 'count down') + '.', 'Remember to count through zero.'], t + (up ? ' + ' : ' − ') + ch + ' = ' + e + '°C.', thermo(t)); },
    order: function () { var a = shuffle([r(100, 999), r(100, 999), r(100, 999)]); while (new Set(a).size < 3) a[2]++; var s = a.slice().sort(function (x, y) { return x - y; }); return MC('Ordering', 'Which list is in order, <b>smallest first</b>?', s.join(', '), [s.slice().reverse().join(', '), [s[1], s[0], s[2]].join(', '), [s[0], s[2], s[1]].join(', ')], ['Compare the hundreds first.', 'Then the tens.'], s.join(' < ') + '.'); }
  };
  FL.topic({ n: 401, year: 'P4', short: 'Place value', title: 'Place value and number', blurb: 'Explore Professor Owl’s number lab: patterns, numbers to 1000, rounding and numbers below zero.',
    lessons: [
      FL.LS('How can I use number patterns to work out a sequence?', 'P4', 'how to find the rule in bigger patterns, including 3s, 4s, 25s and 100s.', {
        intro: ['Professor Owl', 'Pattern puzzles', "Hoo! I'm Professor Owl. My lab has number patterns everywhere. Find the rule and you can predict what comes next!", FL.says('owl', '25, 50, 75 … what next?')],
        ex: [['Counting in 25s', 'Up by 25', [["Twenty-five, fifty, seventy-five, one hundred. Each jump is twenty-five.", E('25, 50, 75, 100', 'g')]]],
          ['Counting in 3s', 'Up by 3', [["Three, six, nine, twelve, fifteen. The rule is add three.", E('3, 6, 9, 12, 15', 'g')]]],
          ['Counting back', 'Down by 100', [["Nine hundred, eight hundred, seven hundred. The rule is take away one hundred.", E('900, 800, 700, 600', 'g')]]]],
        real: ['Seats', "In the lab theatre, each row has four more seats than the row in front: twelve, sixteen, twenty, twenty-four.", E('12, 16, 20, 24', 'b')],
        turn: ["Your turn! What comes next: forty, eighty, one hundred and twenty? Pause and try it.", E('40, 80, 120, ?'), "The rule is add forty. One hundred and sixty.", E('160', 'g')],
        rec: ["Find the rule between each pair, check it every time, then continue or fill gaps.", ['Find the rule', 'Check every pair', 'Up or down?', 'Continue or fill gaps']],
        deep: ['Patterns in 3s and 4s are the 3 and 4 times tables.', 'Some patterns go down, past zero, into negative numbers.']
      }),
      LS('What is the value of each digit in a 3-digit number?', 'how hundreds, tens and ones make up numbers to 1000.', {
        intro: ['Numbers to 1000', 'Hundreds, tens, ones', "Professor Owl counts big piles in hundreds, tens and ones. Ten hundreds make one thousand, the biggest number we use this year!", E('10 hundreds = 1000', 'b')],
        ex: [['Read it', '452', [["Four hundreds, five tens and two ones: four hundred and fifty-two.", E('400 + 50 + 2', 'g')]]],
          ['Zeros', '608', [["Six hundreds, no tens and eight ones: six hundred and eight. The zero holds the tens place.", E('600 + 0 + 8', 'g')]]],
          ['Digit value', 'Where is the 7?', [["In seven hundred and sixteen, the seven is in the hundreds. It is worth seven hundred.", E('716: the 7 is worth 700', 'g')]]]],
        real: ['Steps', "Professor Owl climbed nine hundred and twenty-five steps up the lighthouse.", E('925 steps', 'b')],
        turn: ["Your turn! What is the value of the three in five hundred and thirty-one? Pause and try it.", E('531'), "It is in the tens column: thirty.", E('30', 'g')],
        rec: ["Each column is worth ten times the column to its right.", ['H, T, O', '10 tens = 1 hundred', 'Zero holds a place', 'Value depends on the column']],
        deep: ['1000 is ten hundreds, or a hundred tens.', 'Read numbers from the biggest column.']
      }),
      LS('How do I round to the nearest 10 and 100?', 'how to round numbers to the nearest 10 or 100.', {
        intro: ['Rounding', 'Nearest 10 or 100', "Professor Owl estimates quickly by rounding. To round to the nearest hundred, find the two hundreds the number is between.", scale(300, 400, 10, 362, '')],
        ex: [['Nearest 10', '467', [["Four hundred and sixty-seven is between four hundred and sixty and four hundred and seventy. It rounds to four hundred and seventy.", E('467 → 470', 'g')]]],
          ['Nearest 100', '362', [["Three hundred and sixty-two is between three hundred and four hundred. Look at the tens: six, so round up to four hundred.", E('362 → 400', 'g')]]],
          ['Round down', '630', [["To the nearest hundred, six hundred and thirty: look at the tens, three, so round down. Six hundred.", E('630 → 600', 'g')]]]],
        real: ['Crowd', "Four hundred and eighty people came to the show. That is about five hundred.", E('480 → 500', 'b')],
        turn: ["Your turn! Round seven hundred and forty-nine to the nearest hundred. Pause and try it.", E('749 → ?'), "Look at the tens: four. Round down to seven hundred.", E('700', 'g')],
        rec: ["To round to 100, look at the tens digit. 5 or more rounds up.", ['Find the two 10s or 100s', 'Look at the next digit', '5 or more: up', '4 or less: down']],
        deep: ['Rounding helps to estimate and check answers.', 'For the nearest 100, only the tens digit decides.']
      }),
      LS('How can a thermometer help me understand negative numbers?', 'how numbers continue below zero.', {
        intro: ['Brrr!', 'Below zero', "On a cold day, the temperature can fall below zero. Numbers below zero are negative numbers, like minus three.", thermo(-3)],
        ex: [['Read it', 'Minus 4', [["The red line stops four below zero: minus four degrees.", thermo(-4)]]],
          ['Warmer', 'From −2 up 5', [["From minus two, count up five: minus one, zero, one, two, three.", E('−2 + 5 = 3', 'g')]]],
          ['Colder', 'From 3 down 6', [["From three, count down six: two, one, zero, minus one, minus two, minus three.", E('3 − 6 = −3', 'g')]]]],
        real: ['Freezer', "Professor Owl's freezer is minus eighteen degrees. Much colder than the kitchen!", E('−18°C', 'b')],
        turn: ["Your turn! It is two degrees. It falls by five degrees. What is it now? Pause and try it.", thermo(2), "Two, one, zero, minus one, minus two, minus three.", E('−3°C', 'g')],
        rec: ["Numbers below zero are negative. Count through zero carefully.", ['Zero is the middle', 'Below zero: negative', 'Up is warmer', 'Count through zero']],
        deep: ['−5 is colder than −2.', 'Negative numbers are used for temperatures, lifts and sea levels.']
      })
    ],
    acts: [
      ['Pattern lab', 'Find the missing number.', FL.rounds(function () { var j = pick([3, 4, 25, 50, 100]), s = j * r(0, 6), gap = r(1, 3), a = []; for (var i = 0; i < 5; i++) a.push(i === gap ? '?' : s + i * j); var ans = s + gap * j; return { vis: FL.says('owl', a.join(', ')), q: 'What is the missing number?', answer: String(ans), wrong: nums(ans, [ans + j, ans - j, ans + 10]), explain: 'The rule is add ' + j + '. The missing number is ' + ans + '.' }; }, 6)],
      ['Thermometer', 'Read the temperature.', FL.rounds(function () { var t = 2 * r(-5, 5); return { vis: '<div style="text-align:center">' + thermo(t) + '</div>', q: 'What temperature does it show?', answer: t + '°C', wrong: [(-t) + '°C', (t + 2) + '°C', (t - 2) + '°C'].filter(function (x) { return x !== t + '°C'; }), explain: 'It shows ' + t + '°C.' }; }, 6)],
      ['Round to 100', 'Round to the nearest 100.', FL.rounds(function () { var n = r(110, 990); if (n % 100 === 50) n++; var a = Math.round(n / 100) * 100, lo = Math.floor(n / 100) * 100; return { vis: scale(lo, lo + 100, 10, n, ''), q: 'Round ' + n + ' to the nearest 100.', answer: String(a), wrong: nums(a, [a === lo ? lo + 100 : lo, Math.round(n / 10) * 10, a + 100]), explain: 'Look at the tens. ' + n + ' rounds to ' + a + '.' }; }, 6)]
    ],
    more: [
      ['Pattern hunt', 'Find the rule.', FL.genAct(function () { return g1.seq(false); }, 'owl')],
      ['Digit values', 'What is each digit worth?', FL.genAct(function () { return g1.pv(true); }, 'owl')],
      ['Round it', 'Nearest 10 or 100.', FL.genAct(function () { return g1.rnd(true); }, 'owl')],
      ['Freezing!', 'Temperatures below zero.', FL.genAct(function () { return g1.neg(true); }, 'owl')],
      ['Order them', 'Smallest first.', FL.genAct(function () { return g1.order(); }, 'owl')]
    ],
    lifeLead: 'place value, rounding and temperatures below zero in the lab, the weather and on trips',
    life: { low: [function () { var n = r(110, 490), t = Math.round(n / 10) * 10; return Q('Real life', 'A school has <b>' + n + '</b> pupils. About how many is that to the nearest 10?', t, ['Look at the ones digit.', '5 or more rounds up.'], n + ' rounds to ' + t + '.'); }, function () { var t = r(1, 6), d = r(2, 6); return Q('Real life', 'It is <b>' + t + '°C</b> in the morning. At night it is <b>' + d + '</b> degrees colder. What is the temperature at night?', t - d, ['Count down from ' + t + '.', 'Go through zero.'], t + ' − ' + d + ' = ' + (t - d) + '°C.', FL.thermo(t)); }, function () { var h = r(1, 9), t = r(0, 9), o = r(1, 9); return Q('Real life', 'A shop has <b>' + h + '</b> boxes of 100 pencils, <b>' + t + '</b> packs of 10 and <b>' + o + '</b> single pencils. How many pencils?', 100 * h + 10 * t + o, ['Hundreds, tens and ones.', 'Write the digits in order.'], (100 * h + 10 * t + o) + ' pencils.'); }], medium: [function () { var n = r(120, 949); if (n % 100 === 50) n++; var t = Math.round(n / 100) * 100; return Q('Real life', '<b>' + n + '</b> people came to the school show. About how many is that to the nearest 100?', t, ['Look at the tens digit.', '5 or more rounds up.'], n + ' rounds to ' + t + '.'); }, function () { var t = r(-4, 3), u = r(3, 8); return Q('Real life', 'At 6 am it is <b>' + t + '°C</b>. By lunch it is <b>' + u + '</b> degrees warmer. What is the temperature at lunch?', t + u, ['Count up from ' + t + '.', 'Count through zero.'], t + ' + ' + u + ' = ' + (t + u) + '°C.', FL.thermo(t)); }, function () { var s = 25 * r(1, 4), k = r(3, 5); return Q('Real life', 'Tickets are numbered in 25s: ' + s + ', ' + (s + 25) + ', ' + (s + 50) + ' … What is the ' + (k + 1) + 'th ticket number?', s + 25 * k, ['The jump is 25.', 'Keep adding 25.'], 'The ' + (k + 1) + 'th ticket is ' + (s + 25 * k) + '.'); }], high: [function () { var a = r(-6, -1), b = r(2, 6); return Q('Real life', 'In Aviemore it is <b>' + a + '°C</b>. In Glasgow it is <b>' + b + '°C</b>. How many degrees warmer is Glasgow?', b - a, ['Count up from ' + a + ' to zero, then to ' + b + '.', 'Add the two jumps.'], (-a) + ' + ' + b + ' = ' + (b - a) + ' degrees.'); }, function () { var a = r(21, 49), b = r(21, 49); var t = Math.round((a + b) / 10) * 10; return MC('Real life', 'Class trip: <b>' + a + '</b> pupils on Monday and <b>' + b + '</b> on Tuesday. Roughly how many is that altogether, to the nearest 10?', String(t), [String(t + 10), String(t - 10), String(a + b)], ['Add them first.', 'Then round to the nearest 10.'], (a + b) + ' rounds to ' + t + '.'); }, function () { var n = r(101, 989), ds = String(n).split(''); return Q('Real life', 'A bus number has <b>' + ds[0] + '</b> hundreds, <b>' + ds[1] + '</b> tens and <b>' + ds[2] + '</b> ones. What is 10 more than the bus number?', n + 10, ['Make the number first.', 'Then add one ten.'], n + ' + 10 = ' + (n + 10) + '.'); }] },
    gens: { low: [function () { return g1.seq(false); }, function () { return g1.pv(false); }, function () { return g1.rnd(false); }, function () { return g1.neg(false); }],
      medium: [function () { return g1.seq(false); }, function () { return g1.pv(true); }, function () { return g1.rnd(true); }, function () { return g1.neg(false); }, g1.order],
      high: [function () { return g1.seq(true); }, function () { return g1.pv(true); }, function () { return g1.rnd(true); }, function () { return g1.neg(true); }, g1.order] }
  });

  /* ================= 2. Adding and subtracting: the space station ================= */
  /* P4 column work stays between P3 (counting on, partitioning) and P5 (big numbers, carrying, exchanging):
     2-digit numbers, tens and ones, with no carrying and no exchanging */
  function addPair(lo, hi, carry) { var t1 = r(lo || 1, hi || 7), o1 = r(2, 9), o2 = carry ? r(10 - o1, 9) : r(1, 9 - o1), t2 = r(1, 9 - t1 - (carry ? 1 : 0)); return [t1 * 10 + o1, t2 * 10 + o2]; }
  function subPair(lo, hi) { var t1 = r(lo || 3, hi || 9), t2 = r(1, t1 - 1), o1 = r(2, 9), o2 = r(1, o1); return [t1 * 10 + o1, t2 * 10 + o2]; }
  FL.p4pairs = { add: addPair, sub: subPair };
  var g2 = {
    comp: function (big) { var a = r(big ? 120 : 23, big ? 680 : 89), b = pick([9, 19, 29, 39, 49, 99, 98]); if (!big && b > 49) b = 19; var sub = r(0, 1); if (sub && a <= b) a += b; return Q('Compensating', 'What is <b>' + a + (sub ? ' − ' : ' + ') + b + '</b>?', sub ? a - b : a + b, ['' + b + ' is close to ' + (b + (b % 10 === 9 ? 1 : 2)) + '.', (sub ? 'Take away ' : 'Add ') + (b + (b % 10 === 9 ? 1 : 2)) + ', then ' + (sub ? 'add back ' : 'take away ') + (b % 10 === 9 ? 1 : 2) + '.'], a + (sub ? ' − ' : ' + ') + b + ' = ' + (sub ? a - b : a + b) + '.'); },
    col: function (big) { var p = addPair(big ? 2 : 1, big ? 6 : 5, big && r(0, 1)), a = p[0], b = p[1]; return Q('Column adding', 'What is <b>' + a + ' + ' + b + '</b>?', a + b, ['Line up the tens and the ones.', 'Add the ones first, then add the tens. If the ones make 10 or more, carry 1 ten.'], a + ' + ' + b + ' = ' + (a + b) + '.'); },
    colsub: function (big) { var p = subPair(big ? 5 : 3, 9), a = p[0], b = p[1]; return Q('Column subtracting', 'What is <b>' + a + ' − ' + b + '</b>?', a - b, ['Line up the tens and the ones. Start with the ones.', 'Take away the ones first, then take away the tens.'], a + ' − ' + b + ' = ' + (a - b) + '.'); },
    est: function () { var a = r(21, 89), b = r(21, 89), ra = Math.round(a / 10) * 10, rb = Math.round(b / 10) * 10; return MC('Estimating', 'Estimate <b>' + a + ' + ' + b + '</b> by rounding to the nearest 10.', String(ra + rb), [ra + rb + 10, ra + rb - 10, ra + rb + 20].map(String), ['Round each number to the nearest 10.', ra + ' + ' + rb + '.'], a + ' ≈ ' + ra + ', ' + b + ' ≈ ' + rb + '. Estimate: ' + (ra + rb) + '.'); },
    word: function () { var k = r(0, 1), p = k ? subPair(4, 9) : addPair(2, 7), a = p[0], b = p[1]; return k ? Q('Word problems', 'The space station has <b>' + a + '</b> litres of water. The crew use <b>' + b + '</b> litres. How much is left?', a - b, ['This is taking away.', 'Subtract the ones, then the tens.'], a + ' − ' + b + ' = ' + (a - b) + ' litres.') : Q('Word problems', 'A rocket flies <b>' + a + '</b> km, then <b>' + b + '</b> km more. How far altogether?', a + b, ['This is adding.', 'Add the ones, then the tens.'], a + ' + ' + b + ' = ' + (a + b) + ' km.'); }
  };
  FL.topic({ n: 402, year: 'P4', short: 'Adding', title: 'Adding and subtracting', blurb: 'Fly to the space station with Ruby the rocket: compensating, column methods and estimating.',
    lessons: [
      LS('How can compensating help me add and subtract?', 'how to round a number to make it easier, then adjust.', {
        intro: ['Ruby the rocket', 'A clever trick', "Ruby needs to add nine to lots of numbers. Adding ten is easy, so she adds ten, then takes one away. That is called compensating!", FL.says('rocket', '46 + 9 = ?')],
        ex: [['Add 9', '46 + 9', [["Forty-six plus ten is fifty-six. Take away one: fifty-five.", E('46 + 10 − 1 = 55', 'g')]]],
          ['Add 19', '64 + 19', [["Sixty-four plus twenty is eighty-four. Take away one: eighty-three.", E('64 + 20 − 1 = 83', 'g')]]],
          ['Subtract 29', '85 − 29', [["Eighty-five take away thirty is fifty-five. We took one too many, so add one back: fifty-six.", E('85 − 30 + 1 = 56', 'g')]]]],
        real: ['Fuel', "Ruby has one hundred and twenty-three litres of fuel and adds ninety-nine more. One hundred and twenty-three plus one hundred, take away one: two hundred and twenty-two.", E('123 + 99 = 222', 'b')],
        turn: ["Your turn! What is fifty-seven plus nineteen? Pause and try it.", E('57 + 19'), "Fifty-seven plus twenty is seventy-seven. Take away one: seventy-six.", E('76', 'g')],
        rec: ["Round to a friendly number, work it out, then adjust.", ['Spot a number near a ten', 'Round it', 'Add or subtract', 'Adjust back']],
        deep: ['When adding, you added too much, so take away the extra.', 'When subtracting, you took too much, so add the extra back.']
      }),
      LS('How do I add using columns?', 'how to add 2-digit numbers in columns, ones first and then tens.', {
        intro: ['Column adding', 'Line them up', "Ruby lines up the tens and the ones in columns. Then she adds each column, starting with the ones on the right.", E('T O', 'b')],
        ex: [['Add the ones, then the tens', '43 + 52', [["Ones: 3 + 2 = 5. Tens: 4 + 5 = 9. The answer is 95.", E('43 + 52 = 95', 'g')]]],
          ['Another one', '24 + 35', [["Ones: 4 + 5 = 9. Tens: 2 + 3 = 5. The answer is 59.", E('24 + 35 = 59', 'g')]]],
          ['Carry a ten', '47 + 35', [["Ones: 7 + 5 = 12. Write 2 and carry 1 ten to the tens column. Tens: 4 + 3 + 1 = 8. The answer is 82.", E('47 + 35 = 82', 'g')]]],
          ['A 2-digit and a 1-digit number', '61 + 7', [["Ones: 1 + 7 = 8. Tens: just 6. The answer is 68.", E('61 + 7 = 68', 'g')]]]],
        real: ['Space miles', "On Monday Ruby flies 34 kilometres, on Tuesday 25. Ones: 4 + 5 = 9. Tens: 3 + 2 = 5. Altogether: 59 kilometres.", E('34 + 25 = 59', 'b')],
        turn: ["Your turn! What is 26 + 53? Pause and try it.", E('26 + 53'), "Ones: 6 + 3 = 9. Tens: 2 + 5 = 7. The answer is 79.", E('79', 'g')],
        rec: ["Line up the tens and the ones. Add the ones first, then the tens.", ['Line up T and O', 'Start with the ones', 'Then add the tens', 'Check with an estimate']],
        deep: ['Always line up the ones, not the first digits.', 'Adding the ones first is the same order we always use.']
      }),
      LS('How do I subtract using columns?', 'how to subtract 2-digit numbers in columns, ones first and then tens.', {
        intro: ['Column subtracting', 'Top take away bottom', "Ruby subtracts in columns too. The bigger number goes on top. Start with the ones, then do the tens.", E('T O', 'b')],
        ex: [['Take away the ones, then the tens', '87 − 43', [["Ones: 7 − 3 = 4. Tens: 8 − 4 = 4. The answer is 44.", E('87 − 43 = 44', 'g')]]],
          ['Another one', '98 − 53', [["Ones: 8 − 3 = 5. Tens: 9 − 5 = 4. The answer is 45.", E('98 − 53 = 45', 'g')]]],
          ['Check it', 'Add back', [["Check: 44 + 43 = 87. Correct!", E('44 + 43 = 87', 'g')]]]],
        real: ['Oxygen', "The station had 65 oxygen tanks. 24 were used. Ones: 5 − 4 = 1. Tens: 6 − 2 = 4. 41 are left.", E('65 − 24 = 41', 'b')],
        turn: ["Your turn! What is 79 − 36? Pause and try it.", E('79 − 36'), "Ones: 9 − 6 = 3. Tens: 7 − 3 = 4. The answer is 43.", E('43', 'g')],
        rec: ["Line up the tens and the ones. Take away the ones first, then the tens.", ['Line up T and O', 'Start with the ones', 'Then the tens', 'Check by adding']],
        deep: ['The bigger number always goes on top.', 'Adding back checks a subtraction.']
      }),
      LS('How can estimating help me check my answer?', 'how to round numbers to the nearest 10 to get a quick estimate.', {
        intro: ['Estimating', 'About how many?', "Before Ruby blasts off, she estimates. Round the numbers to the nearest 10, work out a quick answer, and use it to check.", FL.says('rocket', '48 + 31 is about…')],
        ex: [['Round to 10', '48 + 31', [["48 is about 50. 31 is about 30. 50 + 30 = 80. About 80.", E('≈ 50 + 30 = 80', 'g')]]],
          ['Check', 'Is 79 sensible?', [["The exact answer is 79. That is close to 80, so it makes sense.", E('79 ≈ 80 ✓', 'g')]]],
          ['Spot a mistake', '82 − 39', [["About 80 take away 40: 40. If you got 53, something went wrong!", E('≈ 40, not 53', 'g')]]]],
        real: ['Shopping list', "Ruby buys things costing £2.98 and £4.10. That is about £3 + £4 = £7.", E('≈ £3 + £4 = £7', 'b')],
        turn: ["Your turn! Estimate 62 + 29. Pause and try it.", E('62 + 29 ≈ ?'), "62 is about 60. 29 is about 30. 60 + 30 = 90.", E('≈ 90', 'g')],
        rec: ["Round each number to the nearest 10, work out a quick answer, then compare.", ['Round each number', 'Quick answer', 'Compare to the real answer', 'Too far off? Check again']],
        deep: ['≈ means approximately equal.', 'An estimate is a check, not the final answer.']
      })
    ],
    acts: [
      ['Compensate!', 'Use the trick to add or subtract.', FL.rounds(function () { var a = r(25, 89), b = pick([9, 19, 29, 39]), sub = r(0, 1); if (sub && a <= b) a += b; var ans = sub ? a - b : a + b; return { vis: FL.says('rocket', a + (sub ? ' − ' : ' + ') + b + ' = ?'), q: 'What is ' + a + (sub ? ' − ' : ' + ') + b + '?', answer: String(ans), wrong: nums(ans, [ans + 1, ans - 1, ans + (sub ? 2 : -2)]), explain: (sub ? a + ' − ' + (b + 1) + ' + 1' : a + ' + ' + (b + 1) + ' − 1') + ' = ' + ans + '.' }; }, 6)],
      ['Column builder', 'Add in columns.', FL.rounds(function () { var p = addPair(1, 7), a = p[0], b = p[1]; return { vis: '<pre style="font:800 1.8em/1.3 ui-monospace,monospace;text-align:right;display:inline-block;margin:0 auto;padding:8px 18px;border-radius:12px;background:var(--card,#fff)">  ' + a + '\n+ ' + b + '\n─────</pre>', q: 'What is ' + a + ' + ' + b + '?', answer: String(a + b), wrong: nums(a + b, [a + b + 10, a + b - 10, a + b + 100]), explain: a + ' + ' + b + ' = ' + (a + b) + '.' }; }, 6)],
      ['Best estimate', 'Round and estimate.', FL.rounds(function () { var a = r(21, 89), b = r(21, 69), ra = Math.round(a / 10) * 10, rb = Math.round(b / 10) * 10; return { vis: FL.says('rocket', a + ' + ' + b), q: 'Which is the best estimate?', answer: String(ra + rb), wrong: [ra + rb + 10, ra + rb - 10, ra + rb + 30].map(String), explain: ra + ' + ' + rb + ' = ' + (ra + rb) + '.' }; }, 6)]
    ],
    more: [
      ['Compensate!', 'Round, then adjust.', FL.genAct(function () { return g2.comp(false); }, 'rocket')],
      ['Column adding', 'Line up the digits.', FL.genAct(function () { return g2.col(true); }, 'rocket')],
      ['Column subtracting', 'Take away the ones, then the tens.', FL.genAct(function () { return g2.colsub(true); }, 'rocket')],
      ['Best estimate', 'Round first.', FL.genAct(function () { return g2.est(); }, 'rocket')],
      ['Space stories', 'Word problems.', FL.genAct(function () { return g2.word(); }, 'rocket')]
    ],
    lifeLead: 'adding and subtracting 2-digit numbers, change and estimating on trips and in shops',
    life: { low: [function () { var p = addPair(1, 5), a = p[0], b = p[1]; return Q('Real life', 'A train has <b>' + a + '</b> people. <b>' + b + '</b> more get on. How many are on the train now?', a + b, ['This is adding.', 'Add the ones, then the tens.'], a + ' + ' + b + ' = ' + (a + b) + '.'); }, function () { var p = subPair(4, 9), a = p[0], b = p[1]; return Q('Real life', 'A farmer has <b>' + a + '</b> eggs. He sells <b>' + b + '</b>. How many are left?', a - b, ['This is taking away.', 'Use columns.'], a + ' − ' + b + ' = ' + (a - b) + '.'); }, function () { var a = r(25, 89), b = pick([9, 19, 29]); return Q('Real life', 'Sam has <b>' + a + '</b> stickers and gets <b>' + b + '</b> more. How many now?', a + b, ['Add ' + (b + 1) + ', then take 1 away.', 'This is compensating.'], a + ' + ' + b + ' = ' + (a + b) + '.'); }], medium: [function () { var p = addPair(2, 6), a = p[0], b = p[1]; return Q('Real life', 'The rocket flies <b>' + a + '</b> km on Monday and <b>' + b + '</b> km on Tuesday. How far altogether?', a + b, ['Line up the columns.', 'Add the ones, then the tens.'], a + ' + ' + b + ' = ' + (a + b) + ' km.'); }, function () { var p = subPair(5, 9), a = p[0], b = p[1]; return Q('Real life', 'A book has <b>' + a + '</b> pages. Mia has read <b>' + b + '</b>. How many pages are left?', a - b, ['Subtract in columns.', 'Take away the ones, then the tens.'], a + ' − ' + b + ' = ' + (a - b) + '.'); }, function () { var a = r(21, 89), b = r(21, 89), t = Math.round(a / 10) * 10 + Math.round(b / 10) * 10; return MC('Real life', 'A shop sold <b>' + a + '</b> ice creams on Saturday and <b>' + b + '</b> on Sunday. Which is the best estimate of the total?', String(t), [String(t + 10), String(t - 10), String(t + 20)], ['Round each to the nearest 10.', 'Add the rounded numbers.'], 'About ' + t + '.'); }], high: [function () { var p = addPair(2, 5), a = p[0], b = p[1], c = r(10, 20); return Q('Real life', 'A cinema had <b>' + a + '</b> people in the morning and <b>' + b + '</b> in the afternoon. <b>' + c + '</b> of them had popcorn. How many did not have popcorn?', a + b - c, ['First add the two groups.', 'Then take away the popcorn people.'], a + ' + ' + b + ' = ' + (a + b) + ', − ' + c + ' = ' + (a + b - c) + '.'); }, function () { var g = r(70, 99), a = r(10, 25), b = r(10, 25); return Q('Real life', 'The station had <b>' + g + '</b> litres of water. The crew used <b>' + a + '</b> litres on Monday and <b>' + b + '</b> on Tuesday. How much is left?', g - a - b, ['Take away both amounts.', 'Or add them first, then take away.'], g + ' − ' + (a + b) + ' = ' + (g - a - b) + ' litres.'); }, function () { var p = subPair(6, 9), a = p[0], b = p[1]; return Q('Real life', 'Class A collected <b>' + a + '</b> bottle tops. Class B collected <b>' + b + '</b>. How many more did Class A collect?', a - b, ['Find the difference.', 'Subtract the smaller from the bigger.'], a + ' − ' + b + ' = ' + (a - b) + '.'); }] },
    gens: { low: [function () { return g2.comp(false); }, function () { return g2.col(false); }, function () { return g2.colsub(false); }],
      medium: [function () { return g2.comp(false); }, function () { return g2.col(false); }, function () { return g2.colsub(false); }, g2.est, g2.word],
      high: [function () { return g2.comp(true); }, function () { return g2.col(true); }, function () { return g2.colsub(true); }, g2.est, g2.word] }
  });

  /* ================= 3. Multiplication and division: the fox's farm ================= */
  var g3 = {
    fact: function (tables) { var t = pick(tables), n = r(2, 10), div = r(0, 1); return div ? Q('Division facts', 'What is <b>' + n * t + ' ÷ ' + t + '</b>?', n, ['Think: ' + t + ' × ? = ' + n * t + '.', 'Use your ' + t + ' times table.'], n * t + ' ÷ ' + t + ' = ' + n + '.') : Q('Times tables', 'What is <b>' + n + ' × ' + t + '</b>?', n * t, ['Count in ' + t + 's.', 'Use a fact you know and adjust.'], n + ' × ' + t + ' = ' + n * t + '.'); },
    dbl: function (big) { var n = big ? r(16, 99) : r(6, 45), h = r(0, 1); if (h && n % 2) n++; return h ? Q('Halving', 'What is half of <b>' + n + '</b>?', n / 2, ['Halve the tens, then halve the ones.', 'Then put them together.'], 'Half of ' + n + ' is ' + n / 2 + '.') : Q('Doubling', 'What is double <b>' + n + '</b>?', 2 * n, ['Double the tens, then double the ones.', 'Then add them.'], 'Double ' + n + ' is ' + 2 * n + '.'); },
    tens: function (big) { var a = r(2, 9), b = r(2, big ? 9 : 5) * 10; return Q('Multiples of ten', 'What is <b>' + a + ' × ' + b + '</b>?', a * b, ['Work out ' + a + ' × ' + b / 10 + ' first.', 'Then make it ten times bigger.'], a + ' × ' + b / 10 + ' = ' + a * b / 10 + ', so ' + a + ' × ' + b + ' = ' + a * b + '.'); },
    two: function (big) { var a = r(11, big ? 49 : 25), b = pick(big ? [3, 4, 5] : [2, 3, 4]); return Q('Multiplying two-digit numbers', 'What is <b>' + a + ' × ' + b + '</b>?', a * b, ['Split ' + a + ' into tens and ones.', Math.floor(a / 10) * 10 + ' × ' + b + ' and ' + a % 10 + ' × ' + b + '.'], Math.floor(a / 10) * 10 + ' × ' + b + ' = ' + Math.floor(a / 10) * 10 * b + ', ' + a % 10 + ' × ' + b + ' = ' + a % 10 * b + '. Total ' + a * b + '.'); },
    three: function () { var a = pick([2, 5]), b = pick([3, 4]), c = a === 2 ? 5 : 2; return Q('Order of multiplying', 'What is <b>' + a + ' × ' + b + ' × ' + c + '</b>?', a * b * c, ['Multiply in any order.', a + ' × ' + c + ' = 10 first.'], a + ' × ' + c + ' = 10, and 10 × ' + b + ' = ' + 10 * b + '.'); },
    word: function () { var g = r(3, 9), t = pick([2, 3, 4, 5, 10]), k = r(0, 1); return k ? Q('Word problems', 'Finn packs <b>' + g * t + '</b> eggs into boxes of <b>' + t + '</b>. How many boxes?', g, ['This is dividing.', g * t + ' ÷ ' + t + '.'], g * t + ' ÷ ' + t + ' = ' + g + ' boxes.') : Q('Word problems', 'There are <b>' + g + '</b> hen houses with <b>' + t + '</b> hens in each. How many hens?', g * t, ['This is multiplying.', g + ' × ' + t + '.'], g + ' × ' + t + ' = ' + g * t + ' hens.'); }
  };
  FL.topic({ n: 403, year: 'P4', short: 'Multiply, divide', title: 'Multiplication and division', blurb: 'Help Finn the fox on the farm: doubling, multiples of ten, two-digit numbers and new facts from old.',
    lessons: [
      LS('How can doubling and halving help me multiply and divide?', 'how doubling helps with the 4 and 8 times tables, and halving helps divide.', {
        intro: ['Finn’s farm', 'Double up', "Hi, it's Finn! On my farm I double and halve all the time. Doubling the two times table gives the four times table!", FL.says('fox', '3 × 4 = double 3 × 2')],
        ex: [['× 4', 'Double, double', [["Seven times four: double seven is fourteen, double again is twenty-eight.", E('7 × 4 = 28', 'g')]]],
          ['× 4 again', 'Bigger numbers', [["Twelve times four: double twelve is twenty-four, double again is forty-eight.", E('12 × 4 = 48', 'g')]]],
          ['÷ 4', 'Halve, halve', [["Thirty-six divided by four: half is eighteen, half again is nine.", E('36 ÷ 4 = 9', 'g')]]]],
        real: ['Eggs', "Each hen lays four eggs a week. Nine hens: double nine is eighteen, double eighteen is thirty-six eggs.", E('9 × 4 = 36', 'b')],
        turn: ["Your turn! What is eight times four? Pause and try it.", E('8 × 4'), "Double eight is sixteen. Double sixteen is thirty-two.", E('32', 'g')],
        rec: ["× 2: double. × 4: double twice. ÷ 4: halve twice.", ['Double for × 2', 'Double twice for × 4', 'Halve for ÷ 2', 'Halve twice for ÷ 4']],
        deep: ['Doubling and halving undo each other.', 'Halve the tens and ones separately for big numbers.']
      }),
      LS('How do I multiply by multiples of ten?', 'how to multiply by 10, 20, 30 and so on.', {
        intro: ['Multiples of ten', 'Ten times bigger', "Multiplying by ten makes a number ten times bigger: the digits move one place to the left. That helps with twenty, thirty and more!", E('4 × 10 = 40', 'b')],
        ex: [['× 10', '23 × 10', [["The digits move one place: two hundred and thirty.", E('23 × 10 = 230', 'g')]]],
          ['× 30', '4 × 30', [["Four times three is twelve. Ten times bigger: one hundred and twenty.", E('4 × 30 = 120', 'g')]]],
          ['× 50', '6 × 50', [["Six times five is thirty. Ten times bigger: three hundred.", E('6 × 50 = 300', 'g')]]]],
        real: ['Carrots', "Finn plants six rows of forty carrots. Six times four is twenty-four, ten times bigger: two hundred and forty.", E('6 × 40 = 240', 'b')],
        turn: ["Your turn! What is three times seventy? Pause and try it.", E('3 × 70'), "Three times seven is twenty-one. Ten times bigger: two hundred and ten.", E('210', 'g')],
        rec: ["Use the times table fact, then make it ten times bigger.", ['Find the small fact', 'Then × 10', 'Digits move left', 'Zero holds the ones place']],
        deep: ['× 10 does not just "add a zero": the digits move.', 'This also works for × 100.']
      }),
      LS('How can I multiply a two-digit number?', 'how to multiply a two-digit number by a one-digit number by partitioning.', {
        intro: ['Bigger numbers', 'Split it', "To multiply twenty-three by four, Finn splits twenty-three into twenty and three, multiplies each part, then adds.", E('23 = 20 + 3', 'b')],
        ex: [['23 × 4', 'Tens and ones', [["Twenty times four is eighty. Three times four is twelve. Eighty plus twelve: ninety-two.", E('80 + 12 = 92', 'g')]]],
          ['15 × 3', 'Again', [["Ten times three is thirty. Five times three is fifteen. Forty-five.", E('30 + 15 = 45', 'g')]]],
          ['A grid', '34 × 5', [["Use a grid: thirty times five is one hundred and fifty, four times five is twenty. One hundred and seventy.", tbl([['× 5', '150', '20']], ['', '30', '4'])]]]],
        real: ['Fence posts', "Each field needs twenty-six posts. Three fields: sixty plus eighteen, seventy-eight posts.", E('26 × 3 = 78', 'b')],
        turn: ["Your turn! What is twenty-one times four? Pause and try it.", E('21 × 4'), "Twenty times four is eighty. One times four is four. Eighty-four.", E('84', 'g')],
        rec: ["Split into tens and ones, multiply each part, then add.", ['Partition', 'Multiply the tens', 'Multiply the ones', 'Add the parts']],
        deep: ['Partitioning works because multiplying spreads over adding.', 'Don’t forget to add both parts.']
      }),
      LS('How can known facts help me find new facts?', 'how to use a fact I know to work out new ones, including changing the order.', {
        intro: ['Fact detective', 'Know one, find many', "If Finn knows three times four is twelve, he knows lots more: four times three, twelve divided by three, thirty times four…", FL.says('fox', '3 × 4 = 12')],
        ex: [['Turn around', '4 × 3', [["Four times three is also twelve.", E('3 × 4 = 4 × 3 = 12', 'g')]]],
          ['Divide', '12 ÷ 3', [["Twelve divided by three is four, and twelve divided by four is three.", E('12 ÷ 3 = 4', 'g')]]],
          ['Order', '5 × 7 × 2', [["Multiply in an easy order: five times two is ten, ten times seven is seventy.", E('5 × 2 × 7 = 70', 'g')]]]],
        real: ['A group', "There are three pens with four sheep each, and every sheep needs two buckets of water. Four times two is eight, three times eight is twenty-four buckets.", E('3 × 4 × 2 = 24', 'b')],
        turn: ["Your turn! Four times five is twenty. What is twenty divided by four? Pause and try it.", E('20 ÷ 4'), "Five.", E('5', 'g')],
        rec: ["One fact gives a family: turn it round, divide, or scale it by ten.", ['Turn it round', 'Divide back', '× 10 for bigger facts', 'Choose an easy order']],
        deep: ['Multiplying three numbers works in any order.', 'Look for pairs that make 10.']
      })
    ],
    acts: [
      ['Double trouble', 'Double or halve.', FL.rounds(function () { var n = r(11, 49), h = r(0, 1); if (h && n % 2) n++; var a = h ? n / 2 : 2 * n; return { vis: FL.says('fox', (h ? 'Half of ' : 'Double ') + n + '?'), q: (h ? 'What is half of ' : 'What is double ') + n + '?', answer: String(a), wrong: nums(a, [a + 1, a - 1, a + 10]), explain: (h ? 'Half of ' : 'Double ') + n + ' = ' + a + '.' }; }, 6)],
      ['Hen houses', 'Multiply a two-digit number.', FL.rounds(function () { var a = r(11, 29), b = pick([2, 3, 4, 5]); return { vis: FL.says('fox', a + ' = ' + Math.floor(a / 10) * 10 + ' + ' + a % 10), q: 'What is ' + a + ' × ' + b + '?', answer: String(a * b), wrong: nums(a * b, [a * b + b, a * b - 10, a * b + 10]), explain: Math.floor(a / 10) * 10 * b + ' + ' + a % 10 * b + ' = ' + a * b + '.' }; }, 6)],
      ['Fact families', 'Use one fact to find another.', FL.rounds(function () { var a = pick([2, 3, 4, 5, 10]), b = r(2, 9), k = r(0, 2); var q = k === 0 ? [a * b + ' ÷ ' + a, b] : k === 1 ? [b + ' × ' + a, a * b] : [a + ' × ' + b * 10, a * b * 10]; return { vis: FL.says('fox', a + ' × ' + b + ' = ' + a * b), q: 'So what is ' + q[0] + '?', answer: String(q[1]), wrong: nums(q[1], [q[1] + a, q[1] * 10, q[1] - b]), explain: q[0] + ' = ' + q[1] + '.' }; }, 6)]
    ],
    more: [
      ['Double trouble', 'Double and halve.', FL.genAct(function () { return g3.dbl(true); }, 'fox')],
      ['Times ten', 'Multiples of ten.', FL.genAct(function () { return g3.tens(true); }, 'fox')],
      ['Split and multiply', 'Two-digit numbers.', FL.genAct(function () { return g3.two(false); }, 'fox')],
      ['Easy order', 'Multiply three numbers.', FL.genAct(function () { return g3.three(); }, 'fox')],
      ['Farm stories', 'Word problems.', FL.genAct(function () { return g3.word(); }, 'fox')]
    ],
    lifeLead: 'multiplying and dividing on the farm, with the 2, 3, 4, 5 and 10 times tables',
    life: { low: [function () { var g = r(2, 10), t = pick([2, 5, 10]); return Q('Real life', 'There are <b>' + g + '</b> hen houses with <b>' + t + '</b> hens in each. How many hens?', g * t, ['Multiply.', 'Count in ' + t + 's.'], g + ' × ' + t + ' = ' + g * t + '.'); }, function () { var g = r(2, 10), t = pick([2, 5, 10]); return Q('Real life', '<b>' + g * t + '</b> eggs go into boxes of <b>' + t + '</b>. How many boxes?', g, ['Divide.', 'How many ' + t + 's make ' + g * t + '?'], g * t + ' ÷ ' + t + ' = ' + g + '.'); }, function () { var n = 2 * r(5, 25); return Q('Real life', 'Finn shares <b>' + n + '</b> carrots equally between 2 horses. How many each?', n / 2, ['Halve it.', 'Halve the tens, then the ones.'], 'Half of ' + n + ' is ' + n / 2 + '.'); }], medium: [function () { var g = r(2, 9), t = pick([3, 4]); return Q('Real life', 'Each sheep pen has <b>' + t + '</b> sheep. There are <b>' + g + '</b> pens. How many sheep?', g * t, ['Multiply.', 'Use the ' + t + ' times table.'], g + ' × ' + t + ' = ' + g * t + '.'); }, function () { var a = r(2, 9), b = pick([20, 30, 40, 50]); return Q('Real life', 'Finn plants <b>' + a + '</b> rows with <b>' + b + '</b> carrots in each. How many carrots?', a * b, ['Work out ' + a + ' × ' + b / 10 + ' first.', 'Then make it ten times bigger.'], a + ' × ' + b + ' = ' + a * b + '.'); }, function () { var g = r(2, 10), t = pick([3, 4, 5]); return Q('Real life', '<b>' + g * t + '</b> apples are shared equally between <b>' + t + '</b> baskets. How many in each?', g, ['Divide.', 'Think: ' + t + ' × ? = ' + g * t + '.'], g * t + ' ÷ ' + t + ' = ' + g + '.'); }], high: [function () { var a = r(12, 29), b = pick([3, 4, 5]); return Q('Real life', 'Each field needs <b>' + a + '</b> fence posts. How many posts for <b>' + b + '</b> fields?', a * b, ['Split ' + a + ' into tens and ones.', 'Multiply each part, then add.'], a + ' × ' + b + ' = ' + a * b + '.'); }, function () { var p = r(2, 5), s = pick([2, 3, 4]), b = pick([2, 5]); return Q('Real life', 'There are <b>' + p + '</b> pens with <b>' + s + '</b> goats each. Every goat needs <b>' + b + '</b> buckets of water. How many buckets?', p * s * b, ['Multiply in an easy order.', 'Find the number of goats first.'], p + ' × ' + s + ' × ' + b + ' = ' + p * s * b + '.'); }, function () { var n = r(2, 10), t = pick([3, 4, 5]), extra = r(1, t - 1); return Q('Real life', 'Finn has <b>' + n * t + '</b> eggs. He packs them in boxes of <b>' + t + '</b> and sells ' + extra + ' box' + (extra > 1 ? 'es' : '') + '. How many boxes are left?', n - extra, ['First find how many boxes.', 'Then take away the boxes sold.'], n * t + ' ÷ ' + t + ' = ' + n + ', − ' + extra + ' = ' + (n - extra) + '.'); }] },
    gens: { low: [function () { return g3.fact([2, 3, 4, 5, 10]); }, function () { return g3.dbl(false); }, function () { return g3.tens(false); }],
      medium: [function () { return g3.fact([2, 3, 4, 5, 10]); }, function () { return g3.dbl(false); }, function () { return g3.tens(true); }, function () { return g3.two(false); }, g3.three, g3.word],
      high: [function () { return g3.fact([3, 4, 5, 10]); }, function () { return g3.dbl(true); }, function () { return g3.two(true); }, g3.three, g3.word] }
  });

  /* ================= 4. Fractions: the cake competition ================= */
  var pie = FL.pie || function () { return ''; };
  var g4 = {
    cmpUnit: function () { var a = r(2, 10), b = r(2, 10); if (a === b) b++; return MC('Comparing fractions', 'Which fraction is <b>bigger</b>?', '1/' + Math.min(a, b), ['1/' + Math.max(a, b)], ['The bigger the bottom number, the smaller each piece.', 'Picture the cake cut into ' + a + ' and ' + b + ' pieces.'], '1/' + Math.min(a, b) + ' is bigger: fewer pieces means bigger pieces.'); },
    cmpSame: function () { var d = r(4, 10), a = r(1, d - 1), b = r(1, d - 1); if (a === b) b = a === 1 ? 2 : a - 1; return MC('Comparing fractions', 'Which fraction is <b>bigger</b>?', Math.max(a, b) + '/' + d, [Math.min(a, b) + '/' + d], ['The pieces are the same size.', 'More pieces means more.'], Math.max(a, b) + '/' + d + ' has more of the same-sized pieces.'); },
    of: function (big) { var d = pick(big ? [2, 3, 4, 5, 10] : [2, 4, 10]), k = r(2, big ? 10 : 8), n = d * k, top = 1; return Q('Fraction of an amount', 'What is <b>' + top + '/' + d + '</b> of <b>' + n + '</b>?', top * k, ['Divide by ' + d + ' to find 1/' + d + '.', (top > 1 ? 'Then multiply by ' + top + '.' : 'That is your answer.')], '1/' + d + ' of ' + n + ' is ' + k + (top > 1 ? ', so ' + top + '/' + d + ' is ' + top * k : '') + '.'); },
    dec: function () { var pairs = [['1/2', '0.5', '50%'], ['1/4', '0.25', '25%'], ['3/4', '0.75', '75%'], ['1/10', '0.1', '10%']], p = pick(pairs), k = r(0, 1); return MC('Fractions and decimals', 'Which is the same as <b>' + (k ? p[2] : p[0]) + '</b>?', k ? p[0] : p[1], pairs.filter(function (x) { return x !== p; }).map(function (x) { return k ? x[0] : x[1]; }), ['Think of a whole as 1, or as 100%.', 'Half is 0.5 and 50%.'], p[0] + ' = ' + p[1] + ' = ' + p[2] + '.'); },
    line: function () { var d = pick([4, 5, 8, 10]), n = r(1, d - 1); return Q('Fractions on a number line', 'What fraction is marked on the number line? (write like 1/4)', n + '/' + d, ['How many equal steps from 0 to 1?', 'Count the steps to the dot.'], 'There are ' + d + ' steps and the dot is on step ' + n + ': ' + n + '/' + d + '.', fline(d, [[n / d, '']])); }
  };
  g4.line = (function (f) { return function () { var q = f(); q.kind = 'frac'; return q; }; })(g4.line);
  FL.topic({ n: 404, year: 'P4', short: 'Fractions', title: 'Fractions, decimals and percentages', blurb: 'Judge the cake competition with Benny the bear: comparing fractions, simple decimals and percentages, and fractions of amounts.',
    lessons: [
      LS('How can I compare fractions?', 'how to tell which fraction is bigger.', {
        intro: ['Benny’s cake contest', 'Bigger slice?', "Benny is judging a cake competition. Would you rather have one half or one quarter of a cake? Let's compare!", FL.says('bear', '1/2 or 1/4?')],
        ex: [['Same top', '1/2 and 1/4', [["Cut into two pieces, each piece is big. Cut into four, each piece is smaller. One half is bigger.", '<div class="sv-row">' + pie(2, 1) + pie(4, 1) + '</div>']]],
          ['Same bottom', '3/8 and 5/8', [["The pieces are the same size, so five pieces is more than three. Five eighths is bigger.", '<div class="sv-row">' + pie(8, 3) + pie(8, 5) + '</div>']]],
          ['Thirds', '1/3 and 1/5', [["Fewer pieces means bigger pieces. One third is bigger than one fifth.", E('1/3 > 1/5', 'g')]]]],
        real: ['Pizza night', "Would you rather have three tenths or seven tenths of a pizza? Seven tenths: more slices of the same size!", E('7/10 > 3/10', 'b')],
        turn: ["Your turn! Which is bigger: one sixth or one third? Pause and try it.", E('1/6 or 1/3'), "One third: fewer, bigger pieces.", E('1/3', 'g')],
        rec: ["Same bottom: bigger top wins. Top of 1: smaller bottom wins.", ['Same bottom: compare tops', 'Top of 1: smaller bottom wins', 'Draw it to check', '< and >']],
        deep: ['A bigger bottom number does not mean a bigger fraction.', 'Fractions must be of the same whole to compare.']
      }),
      LS('How can I compare fractions, decimals and percentages?', 'that a half, 0.5 and 50% are the same amount.', {
        intro: ['Three ways', 'Same amount', "One half can also be written as nought point five, or as fifty percent. They all mean the same amount!", E('1/2 = 0.5 = 50%', 'b')],
        ex: [['A half', '1/2', [["Half of a hundred squares is fifty: fifty percent. As a decimal: nought point five.", pie(2, 1)]]],
          ['A quarter', '1/4', [["A quarter is twenty-five percent, or nought point two five.", E('1/4 = 0.25 = 25%', 'g')]]],
          ['A tenth', '1/10', [["One tenth is nought point one, or ten percent.", E('1/10 = 0.1 = 10%', 'g')]]]],
        real: ['Phone battery', "Benny's tablet says fifty percent battery: it is half full.", E('50% = half', 'b')],
        turn: ["Your turn! What percentage is three quarters? Pause and try it.", pie(4, 3), "Seventy-five percent.", E('75%', 'g')],
        rec: ["Fractions, decimals and percentages are different ways to write the same amount.", ['1/2 = 0.5 = 50%', '1/4 = 0.25 = 25%', '3/4 = 0.75 = 75%', '1/10 = 0.1 = 10%']],
        deep: ['Percent means out of 100.', '100% is the whole thing.']
      }),
      LS('How can I order fractions on a number line?', 'how to place fractions between 0 and 1 on a number line.', {
        intro: ['Number line', 'Between 0 and 1', "Fractions live between the whole numbers on a number line. Split the gap from zero to one into equal steps.", fline(4)],
        ex: [['Quarters', '4 steps', [["Split zero to one into four equal steps: one quarter, two quarters, three quarters.", fline(4, [[0.25, '1/4'], [0.75, '3/4']])]]],
          ['Halfway', '1/2', [["Two quarters is halfway: the same as one half.", fline(4, [[0.5, '1/2']])]]],
          ['Order', 'Smallest first', [["On a line of tenths, three tenths, then five tenths, then nine tenths.", fline(10, [[0.3, '3/10'], [0.5, ''], [0.9, '9/10']])]]]],
        real: ['A race', "The finish line is at one. Benny has run three quarters of the way.", fline(4, [[0.75, 'Benny']])],
        turn: ["Your turn! Which is closer to one: two fifths or four fifths? Pause and try it.", fline(5, [[0.4, ''], [0.8, '']]), "Four fifths.", E('4/5', 'g')],
        rec: ["Split 0 to 1 into equal steps. Count the steps to place a fraction.", ['Equal steps', 'Count from 0', 'Further right = bigger', 'Halfway is 1/2']],
        deep: ['Fractions with the same bottom are easy to order: compare the tops.', 'The number line keeps going past 1.']
      }),
      LS('How do I find a fraction of an amount?', 'how to find a fraction of a number by dividing.', {
        intro: ['Sharing cakes', 'Fraction of a number', "To find one third of twelve cupcakes, share them into three equal groups. Each group is one third!", FL.things(12, 'sweet', 6)],
        ex: [['1/3 of 12', 'Divide by 3', [["Twelve divided by three is four.", E('1/3 of 12 = 4', 'g')]]],
          ['1/5 of 20', 'Divide by 5', [["Twenty divided by five is four.", E('1/5 of 20 = 4', 'g')]]],
          ['1/10 of 30', 'Divide by 10', [["Thirty divided by ten is three.", E('1/10 of 30 = 3', 'g')]]]],
        real: ['Prize money', "The winner gets one quarter of forty pounds. Forty divided by four: ten pounds.", E('1/4 of £40 = £10', 'b')],
        turn: ["Your turn! What is one tenth of fifty? Pause and try it.", E('1/10 of 50'), "Fifty divided by ten: five.", E('5', 'g')],
        rec: ["To find one part, divide by the bottom number.", ['÷ by the bottom number', 'Share into equal groups', 'Draw groups to check', '1/2 = ÷ 2']],
        deep: ['Finding 1/4 is the same as halving twice.', 'The bigger the bottom number, the smaller the share.']
      })
    ],
    acts: [
      ['Cake judge', 'Pick the bigger fraction.', FL.rounds(function () { var d = pick([3, 4, 5, 6, 8]), a = r(1, d - 1), b = r(1, d - 1); if (a === b) b = a === 1 ? 2 : a - 1; return { vis: '<div class="sv-row">' + pie(d, a) + pie(d, b, '#7cc4ff') + '</div>', q: 'Which is bigger: ' + a + '/' + d + ' (orange) or ' + b + '/' + d + ' (blue)?', answer: Math.max(a, b) + '/' + d, wrong: [Math.min(a, b) + '/' + d], keepOrder: true, explain: Math.max(a, b) + '/' + d + ' has more pieces of the same size.' }; }, 6)],
      ['Number line drop', 'Which fraction is marked?', FL.rounds(function () { var d = pick([4, 5, 8, 10]), n = r(1, d - 1); return { vis: fline(d, [[n / d, '?']]), q: 'What fraction is at the dot?', answer: n + '/' + d, wrong: [(n + 1 < d ? n + 1 : n - 1) + '/' + d, d + '/' + n, n + '/' + (d + 1)], explain: 'Step ' + n + ' of ' + d + ': ' + n + '/' + d + '.' }; }, 6)],
      ['Match it', 'Match fractions, decimals and percentages.', FL.rounds(function () { var P = [['1/2', '0.5', '50%'], ['1/4', '0.25', '25%'], ['3/4', '0.75', '75%'], ['1/10', '0.1', '10%']], p = pick(P), a = r(0, 2), b = (a + r(1, 2)) % 3; return { vis: FL.says('bear', p[a]), q: 'Which is the same as ' + p[a] + '?', answer: p[b], wrong: P.filter(function (x) { return x !== p; }).map(function (x) { return x[b]; }), explain: p.join(' = ') + '.' }; }, 6)]
    ],
    more: [
      ['Bigger slice', 'Compare unit fractions.', FL.genAct(function () { return g4.cmpUnit(); }, 'bear')],
      ['Same-size pieces', 'Compare fractions.', FL.genAct(function () { return g4.cmpSame(); }, 'bear')],
      ['Fraction of a number', 'Divide by the bottom.', FL.genAct(function () { return g4.of(true); }, 'bear')],
      ['Half, quarter, tenth', 'Fractions, decimals and %.', FL.genAct(function () { return g4.dec(); }, 'bear')],
      ['Number line', 'Fractions between 0 and 1.', FL.genAct(function () { return g4.line(); }, 'bear')]
    ],
    lifeLead: 'fractions of amounts and comparing fractions in baking, sharing and races',
    life: { low: [function () { var d = pick([2, 4, 10]), k = r(2, 8); return Q('Real life', 'There are <b>' + d * k + '</b> cupcakes. Benny eats <b>1/' + d + '</b> of them. How many does he eat?', k, ['Divide by ' + d + '.', 'Share into ' + d + ' equal groups.'], d * k + ' ÷ ' + d + ' = ' + k + '.'); }, function () { var a = r(2, 10), b = r(2, 10); if (a === b) b++; return MC('Real life', 'Would you get more cake with <b>1/' + a + '</b> or <b>1/' + b + '</b> of the same cake?', '1/' + Math.min(a, b), ['1/' + Math.max(a, b)], ['Fewer pieces means bigger pieces.', 'Compare the bottom numbers.'], '1/' + Math.min(a, b) + ' is bigger.'); }], medium: [function () { var d = pick([3, 4, 5, 10]), k = r(2, 10); return Q('Real life', 'A class has <b>' + d * k + '</b> pupils. <b>1/' + d + '</b> of them walk to school. How many walk?', k, ['Divide by ' + d + '.', 'That gives one part.'], d * k + ' ÷ ' + d + ' = ' + k + '.'); }, function () { var d = pick([5, 8, 10]), a = r(1, d - 1), b = r(1, d - 1); if (a === b) b = a === 1 ? 2 : a - 1; return MC('Real life', 'Sam ran <b>' + a + '/' + d + '</b> of the track. Mia ran <b>' + b + '/' + d + '</b>. Who ran further?', a > b ? 'Sam' : 'Mia', [a > b ? 'Mia' : 'Sam'], ['Same bottom number.', 'Compare the tops.'], (a > b ? 'Sam' : 'Mia') + ' ran further.', '', true); }], high: [function () { var d = pick([3, 4, 5]), k = r(2, 8), n = d * k; return Q('Real life', 'Benny bakes <b>' + n + '</b> cookies. He gives <b>1/' + d + '</b> away. How many does he keep?', n - k, ['First find 1/' + d + ' of ' + n + '.', 'Then take that away from ' + n + '.'], '1/' + d + ' of ' + n + ' is ' + k + ', ' + n + ' − ' + k + ' = ' + (n - k) + '.'); }, function () { var p = pick([['1/2', '50%'], ['1/4', '25%'], ['3/4', '75%'], ['1/10', '10%']]); return MC('Real life', 'A phone battery is <b>' + p[1] + '</b> full. What fraction is that?', p[0], ['1/2', '1/4', '3/4', '1/10'].filter(function (x) { return x !== p[0]; }), ['Percent means out of 100.', '50% is a half.'], p[1] + ' = ' + p[0] + '.'); }, function () { var d = pick([5, 6, 8, 10]), a = r(1, d - 3), b = r(1, d - a - 1), left = d - a - b; return MC('Real life', 'A pizza has <b>' + d + '</b> equal slices. Benny eats <b>' + a + '/' + d + '</b> and Finn eats <b>' + b + '/' + d + '</b>. What fraction is left?', left + '/' + d, [(a + b) + '/' + d, (left + 1) + '/' + d, left + '/' + (d + 1)], ['Add the slices eaten first.', 'Take them away from ' + d + '/' + d + '.'], left + '/' + d + ' is left.', FL.pie(d, a + b)); }] },
    gens: { low: [g4.cmpUnit, g4.cmpSame, function () { return g4.of(false); }],
      medium: [g4.cmpUnit, g4.cmpSame, function () { return g4.of(false); }, g4.dec, g4.line],
      high: [g4.cmpUnit, function () { return g4.of(true); }, g4.dec, g4.line] }
  });

  /* ================= 5. Money: the school fair ================= */
  var ITEMS = [['a cake', 85], ['a badge', 45], ['a toy car', 1.2], ['a book', 2.5], ['a drink', 65], ['a balloon', 35], ['a cookie', 40], ['a yo-yo', 1.75], ['a pencil', 25], ['a mug', 3.4]].map(function (x) { return [x[0], x[1] < 10 ? Math.round(x[1] * 100) : x[1]]; });
  function gbp(p) { return p >= 100 ? '£' + (p / 100).toFixed(2) : p + 'p'; }
  var g5 = {
    change: function (big) { var pay = big ? pick([500, 1000]) : pick([100, 200]), cost = r(big ? 120 : 15, pay - 5); if (!big) cost = Math.round(cost / 5) * 5; return Q('Change', 'Something costs <b>' + gbp(cost) + '</b>. You pay with <b>' + gbp(pay) + '</b>. How much change, in pence?', pay - cost, ['Count on from ' + gbp(cost) + ' to the next pound.', 'Then on to ' + gbp(pay) + '.'], gbp(cost) + ' + ' + gbp(pay - cost) + ' = ' + gbp(pay) + '. Change: ' + (pay - cost) + 'p.'); },
    total: function (big) { var cs = shuffle(big ? [500, 200, 100, 50, 20, 10, 5, 2] : [200, 100, 50, 20, 10, 5, 2, 1]).slice(0, r(3, 5))   /* First level money: up to £10 */, t = cs.reduce(function (a, b) { return a + b; }, 0); return Q('Money', 'How much money is shown, in pence?', t, ['Start with the biggest note or coin.', 'Count on each one.'], cs.sort(function (a, b) { return b - a; }).map(gbp).join(' + ') + ' = ' + gbp(t) + ' (' + t + 'p).', FL.coins(cs)); },
    cheaper: function () { var a = r(110, 480), b = r(110, 480); if (a === b) b += 5; return MC('Comparing prices', 'Shop A sells a ball for <b>' + gbp(a) + '</b>. Shop B sells it for <b>' + gbp(b) + '</b>. Which is cheaper?', a < b ? 'Shop A' : 'Shop B', [a < b ? 'Shop B' : 'Shop A'], ['Compare the pounds first.', 'Then compare the pence.'], (a < b ? 'Shop A' : 'Shop B') + ' is cheaper by ' + gbp(Math.abs(a - b)) + '.'); },
    budget: function () { var it = shuffle(ITEMS).slice(0, 2), t = it[0][1] + it[1][1], have = Math.ceil(t / 100) * 100 + pick([0, 100]); return Q('Spending', 'You buy ' + it[0][0] + ' (<b>' + gbp(it[0][1]) + '</b>) and ' + it[1][0] + ' (<b>' + gbp(it[1][1]) + '</b>). How much do you spend, in pence?', t, ['Add the two prices.', 'Change pounds to pence: £1 = 100p.'], gbp(it[0][1]) + ' + ' + gbp(it[1][1]) + ' = ' + gbp(t) + ' (' + t + 'p).'); },
    enough: function () { var it = shuffle(ITEMS).slice(0, 2), t = it[0][1] + it[1][1], have = pick([100, 200, 300, 500]); return MC('Planning', 'You have <b>' + gbp(have) + '</b>. Can you buy ' + it[0][0] + ' (<b>' + gbp(it[0][1]) + '</b>) and ' + it[1][0] + ' (<b>' + gbp(it[1][1]) + '</b>)?', t <= have ? 'Yes' : 'No', [t <= have ? 'No' : 'Yes'], ['Add the prices.', 'Is the total more than ' + gbp(have) + '?'], 'Total ' + gbp(t) + (t <= have ? ', which is not more than ' : ', which is more than ') + gbp(have) + '.', '', true); }
  };
  FL.topic({ n: 405, year: 'P4', short: 'Money', title: 'Money', blurb: 'Run a stall at the school fair with Molly the mouse: change, making totals, comparing prices and planning what to spend.',
    lessons: [
      FL.LS('How can I use adding and subtracting to work out change?', 'P4', 'how to work out change from £1, £2, £5 and £10.', {
        intro: ['The school fair', 'Molly’s stall', "Molly is running a stall at the school fair! Customers pay with notes, so she needs to give change quickly.", FL.says('mouse', 'That will be £3.40!')],
        ex: [['From £5', '£3.40', [["Count on from three pounds forty: sixty pence makes four pounds, one pound makes five. Change: one pound sixty.", E('£3.40 + 60p + £1 = £5', 'g')]]],
          ['From £2', '£1.25', [["One pound twenty-five, plus seventy-five pence makes two pounds. Change: seventy-five pence.", E('£1.25 + 75p = £2', 'g')]]],
          ['From £10', '£6.50', [["Six pounds fifty plus fifty pence is seven pounds, plus three pounds is ten. Change: three pounds fifty.", E('£6.50 + 50p + £3 = £10', 'g')]]]],
        real: ['A busy day', "A customer buys a mug for three pounds forty and pays with a five pound note. Molly gives one pound sixty change.", FL.coins([100, 50, 10])],
        turn: ["Your turn! Something costs two pounds thirty. You pay with five pounds. How much change? Pause and try it.", E('£5 − £2.30'), "Seventy pence makes three pounds, plus two pounds: two pounds seventy.", E('£2.70', 'g')],
        rec: ["Count on from the price to the next pound, then on to the money paid.", ['Start at the price', 'Count to the next pound', 'Then to what was paid', 'Add the jumps']],
        deep: ['£1 = 100p, so £2.30 = 230p.', 'Counting on is how shopkeepers give change.']
      }),
      FL.LS('How can different coins and notes make the same total?', 'P4', 'how to make amounts up to £20 in different ways.', {
        intro: ['Many ways', 'Notes and coins', "Molly can make ten pounds with one ten pound note, or two fives, or five two pound coins!", FL.coins([1000])],
        ex: [['£10', 'Two £5 notes', [["Five plus five is ten pounds.", FL.coins([500, 500])]]],
          ['£3.75', 'Fewest coins', [["Two pounds, one pound, fifty pence, twenty pence, five pence.", FL.coins([200, 100, 50, 20, 5])]]],
          ['£7.20', 'Another way', [["Five pounds, two pounds and twenty pence.", FL.coins([500, 200, 20])]]]],
        real: ['The float', "At the start of the fair Molly has twenty pounds in coins and notes to give change.", FL.coins([1000, 500, 200, 200, 100])],
        turn: ["Your turn! How much is a five pound note, a two pound coin and a fifty pence coin? Pause and try it.", FL.coins([500, 200, 50]), "Seven pounds fifty.", E('£7.50', 'g')],
        rec: ["The same total can be made in many ways. Use the biggest first for the fewest coins and notes.", ['Biggest first', 'Count on', 'Many ways', '£1 = 100p']],
        deep: ['Using fewer coins makes paying quicker.', 'Count values, not the number of coins.']
      }),
      LS('How do I compare prices to find the best buy?', 'how to compare prices to see which is cheaper.', {
        intro: ['Best buy', 'Which is cheaper?', "Two stalls sell the same toy. Which is cheaper? Compare the pounds first, then the pence.", FL.says('mouse', '£2.45 or £2.54?')],
        ex: [['Pounds first', '£3.10 or £2.95', [["Two pounds is less than three pounds, so two pounds ninety-five is cheaper.", E('£2.95 < £3.10', 'g')]]],
          ['Then pence', '£2.45 or £2.54', [["Both are two pounds. Forty-five pence is less than fifty-four. Two pounds forty-five is cheaper.", E('£2.45 < £2.54', 'g')]]],
          ['How much cheaper?', 'Find the difference', [["Two pounds fifty-four take away two pounds forty-five is nine pence.", E('9p cheaper', 'g')]]]],
        real: ['Juice', "One stall sells juice for sixty-five pence, another for seventy pence. The first is five pence cheaper.", E('65p < 70p', 'b')],
        turn: ["Your turn! Which is cheaper: one pound nineteen or ninety-nine pence? Pause and try it.", E('£1.19 or 99p'), "Ninety-nine pence is less than one pound.", E('99p', 'g')],
        rec: ["Compare pounds first, then pence. Subtract to find how much cheaper.", ['Same units', 'Pounds first', 'Then pence', 'Subtract the difference']],
        deep: ['Watch for prices in pence and pounds: 99p is £0.99.', 'The cheaper item is not always the better buy: check the size.']
      }),
      LS('How can I plan what to spend?', 'how to add prices and check what I can afford.', {
        intro: ['Shopping list', 'Spend wisely', "Molly has five pounds to spend at the fair. She plans so she does not run out!", FL.coins([500])],
        ex: [['Add up', 'Cake and drink', [["A cake is eighty-five pence, a drink sixty-five. Total: one pound fifty.", E('85p + 65p = £1.50', 'g')]]],
          ['Enough?', '£5 budget', [["A book for two pounds fifty and a yo-yo for one pound seventy-five: four pounds twenty-five. That is less than five pounds, so yes!", E('£4.25 ≤ £5 ✓', 'g')]]],
          ['What is left?', 'Change', [["Five pounds take away four pounds twenty-five: seventy-five pence left.", E('£5 − £4.25 = 75p', 'g')]]]],
        real: ['Choosing', "Molly cannot buy everything. She picks the things she wants most and keeps within five pounds.", ['a book £2.50', 'a yo-yo £1.75', 'a badge 45p'].map(function (x) { return V.card(x, 'b', true); }).join(' ')],
        turn: ["Your turn! You have two pounds. Can you buy a cookie for forty pence and a mug for three pounds forty? Pause and try it.", E('40p + £3.40'), "That is three pounds eighty: too much. No!", E('No', 'g')],
        rec: ["Add the prices, compare with what you have, then work out what is left.", ['List the prices', 'Add them up', 'Compare with your money', 'Find what is left']],
        deep: ['Estimating first helps: round each price to the nearest pound.', 'Always leave room for change.']
      })
    ],
    acts: [
      ['Fill the till', 'Pay the right amount.', FL.purse([135, 210, 275, 340, 505, 760], [1000, 500, 200, 100, 50, 20, 10, 5])],
      ['Change from £5', 'Count on to find the change.', FL.rounds(function () { var cost = 5 * r(20, 95); return { vis: FL.says('mouse', 'It costs ' + gbp(cost) + '. You pay £5.'), q: 'How much change?', answer: gbp(500 - cost), wrong: [gbp(500 - cost + 10), gbp(500 - cost - 5 > 0 ? 500 - cost - 5 : 500 - cost + 20), gbp(Math.abs(400 - cost) || 15)].filter(function (x, i, a) { return x !== gbp(500 - cost) && a.indexOf(x) === i; }), explain: gbp(cost) + ' + ' + gbp(500 - cost) + ' = £5.' }; }, 6)],
      ['Best buy', 'Which is cheaper?', FL.rounds(function () { var a = r(105, 495), b = r(105, 495); if (a === b) b += 9; return { vis: '<div style="display:flex;gap:14px;justify-content:center;flex-wrap:wrap">' + [['Stall A', a, '#d6ecff'], ['Stall B', b, '#ffe2ec']].map(function (x) { return '<div style="background:' + x[2] + ';color:' + INK + ';border:3px solid ' + INK + ';border-radius:16px;padding:12px 20px;text-align:center;font-weight:800;font-size:1.25em">' + x[0] + '<br><span style="font-size:1.4em">' + gbp(x[1]) + '</span></div>'; }).join('') + '</div>', q: 'Which stall is cheaper?', answer: a < b ? 'Stall A' : 'Stall B', wrong: [a < b ? 'Stall B' : 'Stall A'], keepOrder: true, explain: gbp(Math.min(a, b)) + ' is less than ' + gbp(Math.max(a, b)) + '.' }; }, 6)]
    ],
    more: [
      ['Count the money', 'Coins and notes.', FL.genAct(function () { return g5.total(true); }, 'mouse')],
      ['Change please', 'Count on.', FL.genAct(function () { return g5.change(false); }, 'mouse')],
      ['Change from £5 and £10', 'Bigger change.', FL.genAct(function () { return g5.change(true); }, 'mouse')],
      ['Cheaper or dearer?', 'Compare prices.', FL.genAct(function () { return g5.cheaper(); }, 'mouse')],
      ['Can I afford it?', 'Plan your spending.', FL.genAct(function () { return g5.enough(); }, 'mouse')]
    ],
    lifeLead: 'money: change, totals, best buys and budgets up to £10',
    life: { low: [function () { var c = 5 * r(3, 19); return Q('Real life', 'A comic costs <b>' + c + 'p</b>. You pay with £1. How much change, in pence?', 100 - c, ['£1 = 100p.', 'Count on to 100.'], (100 - c) + 'p change.'); }, function () { var a = 5 * r(4, 14), b = 5 * r(2, 8); return Q('Real life', 'A pen costs <b>' + a + 'p</b> and a rubber costs <b>' + b + 'p</b>. How much altogether, in pence?', a + b, ['Add the prices.', 'Add the tens, then the ones.'], a + 'p + ' + b + 'p = ' + (a + b) + 'p.'); }], medium: [function () { var c = 10 * r(12, 48); return Q('Real life', 'A toy costs <b>£' + (c / 100).toFixed(2) + '</b>. You pay with a £5 note. How much change, in pence?', 500 - c, ['Count on to the next pound.', 'Then on to £5.'], (500 - c) + 'p change.'); }, function () { var a = r(110, 390), b = r(110, 390); if (a === b) b += 10; return MC('Real life', 'Shop A sells a ball for <b>£' + (a / 100).toFixed(2) + '</b>. Shop B sells it for <b>£' + (b / 100).toFixed(2) + '</b>. How much cheaper is the cheaper shop, in pence?', String(Math.abs(a - b)), [String(Math.abs(a - b) + 10), String(Math.abs(a - b) + 1), String(a + b)], ['Find the difference.', 'Take the smaller from the bigger.'], 'The difference is ' + Math.abs(a - b) + 'p.'); }], high: [function () { var a = 5 * r(20, 60), b = 5 * r(20, 60), pay = Math.ceil((a + b) / 500) * 500 || 500; return Q('Real life', 'You buy a book for <b>£' + (a / 100).toFixed(2) + '</b> and a game for <b>£' + (b / 100).toFixed(2) + '</b>. You pay with £' + pay / 100 + '. How much change, in pence?', pay - a - b, ['Add the prices first.', 'Then count on to £' + pay / 100 + '.'], 'Total ' + (a + b) + 'p, change ' + (pay - a - b) + 'p.'); }, function () { var n = r(2, 3), c = 5 * r(20, 60); return Q('Real life', 'Molly buys <b>' + n + '</b> badges at <b>' + c + 'p</b> each. How much does she spend, in pence?', n * c, ['Multiply or add the price ' + n + ' times.', 'Double, then add if needed.'], n + ' × ' + c + 'p = ' + n * c + 'p.'); }] },
    gens: { low: [function () { return g5.change(false); }, function () { return g5.total(false); }, g5.cheaper],
      medium: [function () { return g5.change(false); }, function () { return g5.total(true); }, g5.cheaper, g5.budget, g5.enough],
      high: [function () { return g5.change(true); }, function () { return g5.total(true); }, g5.budget, g5.enough] }
  });

  /* ================= 6. Time: the train journey ================= */
  var g6 = {
    read: function (five) { var h = r(1, 12), m = five ? 5 * r(1, 11) : pick([0, 15, 30, 45]), ans = tname(h, m), w = [tname(h, (m + 30) % 60), tname(h % 12 + 1, m), tname(h, (60 - m) % 60 || 5)].filter(function (x, i, a) { return x !== ans && a.indexOf(x) === i; }); if (w.length < 2) w.push(tname(h, (m + 10) % 60)); return MC('Telling the time', 'What time does the clock show?', ans, w, ['Read the long hand first: each number is 5 minutes.', 'Past the 6, say "to" the next hour.'], 'It is ' + ans + '.', clk(h, m)); },
    bridge: function (big) { var h = r(1, 10), m = 5 * r(big ? 7 : 8, 11), add = 5 * r(big ? 4 : 2, big ? 14 : 6), t = m + add, eh = h + Math.floor(t / 60), em = t % 60; return MC('Bridging the hour', 'A train leaves at <b>' + h + ':' + (m < 10 ? '0' : '') + m + '</b>. The journey takes <b>' + add + ' minutes</b>. When does it arrive?', eh + ':' + (em < 10 ? '0' : '') + em, [(eh + 1) + ':' + (em < 10 ? '0' : '') + em, h + ':' + (t < 70 ? (t % 60 < 10 ? '0' : '') + t % 60 : '59'), eh + ':' + ((em + 10) % 60 < 10 ? '0' : '') + (em + 10) % 60], ['Count on to the next hour first.', 'Then add the minutes left.'], 'To ' + (h + 1) + ':00 is ' + (60 - m) + ' minutes, then ' + (add - (60 - m)) + ' more: ' + eh + ':' + (em < 10 ? '0' : '') + em + '.'); },
    ampm: function () { var e = pick([['eating breakfast', 'am'], ['walking to school', 'am'], ['eating dinner', 'pm'], ['going to bed', 'pm'], ['playing after school', 'pm'], ['waking up', 'am']]); return MC('am and pm', 'You are <b>' + e[0] + '</b> at 7 o’clock. Is it 7 am or 7 pm?', '7 ' + e[1], ['7 ' + (e[1] === 'am' ? 'pm' : 'am')], ['am is from midnight to midday.', 'pm is from midday to midnight.'], e[0].charAt(0).toUpperCase() + e[0].slice(1) + ' at 7 is ' + '7 ' + e[1] + '.', '', true); },
    howlong: function () { var h = r(1, 9), m = 5 * r(0, 6), d = 5 * r(3, 18), t = m + d; return Q('How long', 'A film starts at <b>' + h + ':' + (m < 10 ? '0' : '') + m + '</b> and ends at <b>' + (h + Math.floor(t / 60)) + ':' + (t % 60 < 10 ? '0' : '') + t % 60 + '</b>. How many minutes is it?', d, ['Count on to the next hour.', 'Then add the extra minutes.'], 'It lasts ' + d + ' minutes.'); },
    units: function () { var k = pick([['minutes', 'hour', 60], ['hours', 'day', 24], ['days', 'week', 7], ['months', 'year', 12], ['seconds', 'minute', 60]]); return Q('Units of time', 'How many <b>' + k[0] + '</b> are in one <b>' + k[1] + '</b>?', k[2], ['Think about a clock or a calendar.', 'This is a fact to remember.'], 'There are ' + k[2] + ' ' + k[0] + ' in a ' + k[1] + '.'); }
  };
  var TT = [['Glasgow', '9:15', '10:05'], ['Stirling', '9:45', '10:35'], ['Perth', '10:20', '11:10'], ['Dundee', '10:55', '11:45']];
  FL.topic({ n: 406, year: 'P4', short: 'Time', title: 'Time', blurb: 'Ride the train with Ollie the owl: telling the time to 5 minutes, bridging the hour, am and pm, and timetables.',
    lessons: [
      LS('How can bridging through the hour help me work out time?', 'how to count on to the next hour, then add the rest.', {
        intro: ['All aboard!', 'Ollie’s train', "Ollie is catching a train! It leaves at ten to three and takes twenty-five minutes. When does it arrive? Bridge through the hour!", clk(2, 50)],
        ex: [['To the hour', '2:50 + 10', [["From two fifty, ten minutes takes us to three o'clock.", E('2:50 → 3:00', 'g')]]],
          ['The rest', '+ 15 more', [["Twenty-five minus ten is fifteen. Three o'clock plus fifteen minutes: three fifteen.", E('3:00 → 3:15', 'g')]]],
          ['How long', '8:40 to 9:20', [["From eight forty to nine o'clock is twenty minutes. Then twenty more. Forty minutes.", E('20 + 20 = 40 min', 'g')]]]],
        real: ['Late train', "The train was due at four forty-five but is thirty minutes late. Fifteen minutes to five o'clock, then fifteen more: five fifteen.", E('4:45 + 30 min = 5:15', 'b')],
        turn: ["Your turn! It is six thirty-five. What time will it be in forty minutes? Pause and try it.", E('6:35 + 40 min'), "Twenty-five minutes to seven o'clock, then fifteen more: seven fifteen.", E('7:15', 'g')],
        rec: ["Count on to the next o'clock first, then add the minutes left.", ['Find the next hour', 'Count to it', 'Add what is left', '60 minutes in an hour']],
        deep: ['Time does not work like 100: after 59 minutes comes the next hour.', 'A number line helps with time too.']
      }),
      FL.LS('How to tell the time', 'P4', 'how to tell the time to five minutes.', {
        intro: ['Five minutes', 'Minute marks', "Each number on the clock is five minutes for the long hand. Count in fives to tell the time!", clk(3, 20)],
        ex: [['Past', 'Long hand on 4', [["The long hand is on four: twenty minutes past. The short hand is past three. Twenty past three.", clk(3, 20)]]],
          ['To', 'Long hand on 8', [["The long hand is on eight: twenty minutes to the next hour. Twenty to six.", clk(5, 40)]]],
          ['Digital', '5:40', [["On a digital clock, twenty to six is five forty.", E('20 to 6 = 5:40', 'g')]]]],
        real: ['Train times', "Ollie's train leaves at ten past eleven: eleven ten.", clk(11, 10)],
        turn: ["Your turn! The long hand is on seven, the short hand is past two. What time is it? Pause and try it.", clk(2, 35, 170), "Twenty-five to three: two thirty-five.", E('25 to 3', 'g')],
        rec: ["Count in fives for the long hand. Up to 6 is past, after 6 is to.", ['Each number = 5 min', 'Up to 30: past', 'After 30: to', 'Digital: hour then minutes']],
        deep: ['At "to" times, the short hand is nearly at the next number.', '2:35 and 25 to 3 are the same time.']
      }),
      LS('What do am and pm mean?', 'how am and pm tell us morning or afternoon and evening.', {
        intro: ['Morning or night?', 'am and pm', "Seven o'clock happens twice a day! am means morning, from midnight to midday. pm means afternoon and evening, from midday to midnight.", '<div class="sv-row">' + V.card('7 am ☀️ breakfast', 'b') + V.card('7 pm 🌙 bedtime story', 'p') + '</div>'],
        ex: [['am', 'Morning', [["Ollie wakes up at seven am.", E('7 am', 'g')]]],
          ['pm', 'Afternoon', [["School finishes at three pm.", E('3 pm', 'g')]]],
          ['Midday', '12 pm', [["Twelve noon is midday. After that, it is pm.", E('12 noon', 'g')]]]],
        real: ['Night train', "The sleeper train leaves at nine pm and arrives at seven am the next morning.", E('9 pm → 7 am', 'b')],
        turn: ["Your turn! Is lunch at twelve thirty am or pm? Pause and try it.", E('12:30 lunch'), "After midday: pm.", E('pm', 'g')],
        rec: ["am: midnight to midday. pm: midday to midnight.", ['am: morning', 'pm: afternoon and evening', 'Midday: 12 noon', 'Midnight: 12 at night']],
        deep: ['24-hour clocks use 13:00 instead of 1 pm.', 'Morning starts just after midnight.']
      }),
      LS('How do I read a timetable?', 'how to use a timetable to find times and how long a journey takes.', {
        intro: ['Timetables', 'Read across', "A train timetable shows when trains leave and arrive. Read across the row to find your stop.", tbl(TT, ['Station', 'Train 1', 'Train 2'])],
        ex: [['Find a time', 'Stirling', [["Train one leaves Stirling at nine forty-five.", E('Stirling: 9:45', 'g')]]],
          ['How long', 'Glasgow to Perth', [["Train one leaves Glasgow at nine fifteen and reaches Perth at ten twenty: one hour and five minutes.", E('9:15 → 10:20 = 1 h 5 min', 'g')]]],
          ['Pick a train', 'Arrive before 11', [["To reach Perth before eleven, take train one.", E('Train 1', 'g')]]]],
        real: ['Planning', "Ollie wants to get to Dundee for lunch at twelve. Train two arrives at eleven forty-five: just in time!", E('11:45', 'b')],
        turn: ["Your turn! When does train two arrive in Dundee? Pause and try it.", tbl(TT, ['Station', 'Train 1', 'Train 2']), "Eleven forty-five.", E('11:45', 'g')],
        rec: ["Find the row for the place, the column for the train, and read where they meet.", ['Find the row', 'Find the column', 'Read the time', 'Subtract for how long']],
        deep: ['Each column is one train.', 'Bridge through the hour to find journey times.']
      })
    ],
    acts: [
      ['Set the clock', 'Set the clock to five minutes.', FL.setClock([[3, 20], [5, 40], [8, 5], [11, 55], [2, 35], [7, 10]], 5)],
      ['Train arrivals', 'When does the train arrive?', FL.rounds(function () { var h = r(1, 10), m = 5 * r(7, 11), add = 5 * r(3, 8), t = m + add, eh = h + Math.floor(t / 60), em = t % 60, f = function (a, b) { return a + ':' + (b < 10 ? '0' : '') + b; }; return { vis: clk(h, m, 170), q: 'The train leaves at ' + f(h, m) + ' and takes ' + add + ' minutes. When does it arrive?', answer: f(eh, em), wrong: [f(eh + 1, em), f(eh, (em + 10) % 60), f(h, Math.min(59, t))].filter(function (x, i, a) { return x !== f(eh, em) && a.indexOf(x) === i; }), explain: 'Count on to ' + (h + 1) + ':00, then the rest: ' + f(eh, em) + '.' }; }, 6)],
      ['Timetable', 'Read the timetable.', FL.rounds(function () { var row = pick(TT), c = r(1, 2); return { vis: tbl(TT, ['Station', 'Train 1', 'Train 2']), q: 'When is train ' + c + ' at ' + row[0] + '?', answer: row[c], wrong: shuffle(TT.filter(function (x) { return x !== row; }).map(function (x) { return x[c]; }).concat([row[3 - c]])).slice(0, 3), explain: 'Read across ' + row[0] + ' to train ' + c + ': ' + row[c] + '.' }; }, 6)]
    ],
    more: [
      ['What time is it?', 'To 5 minutes.', FL.genAct(function () { return g6.read(true); }, 'owl')],
      ['Over the hour', 'Bridge through the hour.', FL.genAct(function () { return g6.bridge(false); }, 'owl')],
      ['am or pm?', 'Morning or evening.', FL.genAct(function () { return g6.ampm(); }, 'owl')],
      ['How long?', 'Durations.', FL.genAct(function () { return g6.howlong(); }, 'owl')],
      ['Time facts', 'Minutes, hours, days.', FL.genAct(function () { return g6.units(); }, 'owl')]
    ],
    lifeLead: 'time: o’clock to 5 minutes, am and pm, journeys and timetables',
    life: { low: [function () { var h = r(1, 10), d = pick([1, 2, 3]); return MC('Real life', 'Swimming starts at <b>' + h + ' o’clock</b> and lasts <b>' + d + ' hour' + (d > 1 ? 's' : '') + '</b>. When does it end?', ((h + d - 1) % 12 + 1) + ' o’clock', [((h + d) % 12 + 1) + ' o’clock', ((h + d - 2) % 12 + 1) + ' o’clock'], ['Count on the hours.', 'Move the short hand on.'], ((h + d - 1) % 12 + 1) + ' o’clock.'); }, function () { var e = pick([['breakfast', 'am'], ['dinner', 'pm'], ['bedtime', 'pm'], ['the walk to school', 'am']]); return MC('Real life', 'Is <b>' + e[0] + '</b> at 7 am or 7 pm?', '7 ' + e[1], ['7 ' + (e[1] === 'am' ? 'pm' : 'am')], ['am is the morning.', 'pm is afternoon and evening.'], '7 ' + e[1] + '.', '', true); }], medium: [function () { var h = r(1, 10), m = 5 * r(8, 11), d = 5 * r(3, 6), t = m + d, em = t % 60; return MC('Real life', 'A bus leaves at <b>' + h + ':' + m + '</b> and takes <b>' + d + ' minutes</b>. When does it arrive?', (h + 1) + ':' + (em < 10 ? '0' : '') + em, [h + ':' + Math.min(59, t), (h + 1) + ':' + (em + 10 < 10 ? '0' : '') + (em + 10), (h + 2) + ':' + (em < 10 ? '0' : '') + em], ['Count on to the next hour.', 'Then add what is left.'], 'It arrives at ' + (h + 1) + ':' + (em < 10 ? '0' : '') + em + '.'); }, function () { var row = pick(TT), c = r(1, 2); return MC('Real life', 'Look at the timetable. When is train ' + c + ' at <b>' + row[0] + '</b>?', row[c], TT.filter(function (x) { return x !== row; }).map(function (x) { return x[c]; }), ['Find the row.', 'Read across to the train.'], row[c] + '.', tbl(TT, ['Station', 'Train 1', 'Train 2'])); }], high: [function () { var s = pick([[9, 15, 10, 5], [9, 45, 10, 35], [10, 20, 11, 10]]), d = (s[2] * 60 + s[3]) - (s[0] * 60 + s[1]); return Q('Real life', 'A train leaves at <b>' + s[0] + ':' + s[1] + '</b> and arrives at <b>' + s[2] + ':' + (s[3] < 10 ? '0' : '') + s[3] + '</b>. How many minutes is the journey?', d, ['Count on to the next hour.', 'Then add the minutes after the hour.'], 'The journey takes ' + d + ' minutes.'); }, function () { var h = r(2, 6), m = 5 * r(7, 11), a = 5 * r(4, 8), b = 5 * r(2, 6), t = m + a + b, eh = h + Math.floor(t / 60), em = t % 60; return MC('Real life', 'Ollie leaves home at <b>' + h + ':' + m + '</b>. He walks for ' + a + ' minutes, then waits ' + b + ' minutes for a train. What time does the train come?', eh + ':' + (em < 10 ? '0' : '') + em, [(eh + 1) + ':' + (em < 10 ? '0' : '') + em, h + ':' + Math.min(59, m + a), eh + ':' + ((em + 5) % 60 < 10 ? '0' : '') + (em + 5) % 60], ['Add the two times first.', 'Then bridge through the hour.'], 'At ' + eh + ':' + (em < 10 ? '0' : '') + em + '.'); }] },
    gens: { low: [function () { return g6.read(false); }, g6.ampm, g6.units],
      medium: [function () { return g6.read(true); }, function () { return g6.bridge(false); }, g6.ampm, g6.units],
      high: [function () { return g6.read(true); }, function () { return g6.bridge(true); }, g6.howlong, g6.units] }
  });

  /* ================= 7. Measurement: Frankie's garden ================= */
  var g7 = {
    area: function (big) { var a = r(2, big ? 9 : 5), b = r(2, big ? 7 : 4); return Q('Area', 'What is the <b>area</b> of this rectangle, in squares?', a * b, ['Count the squares.', 'Or: ' + a + ' rows × ' + b + '.'], a + ' × ' + b + ' = ' + a * b + ' squares.', gridShape(rectCells(a, b), a + 2, b + 2)); },
    perim: function (big) { var a = r(2, big ? 15 : 8), b = r(2, big ? 10 : 6); return Q('Perimeter', 'What is the <b>perimeter</b> of a rectangle <b>' + a + ' cm</b> long and <b>' + b + ' cm</b> wide?', 2 * (a + b), ['Perimeter is the distance all the way round.', a + ' + ' + b + ' + ' + a + ' + ' + b + '.'], a + ' + ' + b + ' + ' + a + ' + ' + b + ' = ' + 2 * (a + b) + ' cm.', rectPic(a, b, 'cm')); },
    conv: function () { var k = ['m', 'cm', 100], n = r(1, 9); return Q('Units', 'How many <b>' + k[1] + '</b> are in <b>' + n + ' ' + k[0] + '</b>?', n * k[2], ['1 ' + k[0].replace(/s$/, '') + ' = ' + k[2] + ' ' + k[1] + '.', 'Multiply by ' + k[2] + '.'], n + ' × ' + k[2] + ' = ' + n * k[2] + ' ' + k[1] + '.'); },
    scale: function (big) { var cfg = pick(big ? [[0, 1000, 100, 'g'], [0, 500, 50, 'ml']] : [[0, 100, 10, 'cm'], [0, 50, 5, 'kg'], [0, 20, 2, 'kg']]), steps = (cfg[1] - cfg[0]) / cfg[2], v = cfg[0] + cfg[2] * r(1, steps - 1); return Q('Reading scales', 'What does the arrow point to, in ' + cfg[3] + '?', v, ['What does each small step stand for?', 'Each step is ' + cfg[2] + ' ' + cfg[3] + '.'], 'The arrow points to ' + v + ' ' + cfg[3] + '.', scale(cfg[0], cfg[1], cfg[2], v, cfg[3])); },
    len: function () { var a = r(1, 4), b = 10 * r(1, 9); return Q('Length', 'A ribbon is <b>' + a + ' m ' + b + ' cm</b> long. How many cm is that?', a * 100 + b, ['1 m = 100 cm.', a + ' m = ' + a * 100 + ' cm.'], a * 100 + ' + ' + b + ' = ' + (a * 100 + b) + ' cm.'); }
  };
  FL.topic({ n: 407, year: 'P4', short: 'Measure', title: 'Measurement', blurb: 'Plan Frankie the frog’s pond garden: area, length, perimeter and reading scales.',
    lessons: [
      LS('How can I find the area of a shape?', 'how area is the space a shape covers, counted in squares.', {
        intro: ['Frankie’s garden', 'How much space?', "Frankie is planning a pond garden. Area is how much space a shape covers. We measure it by counting squares!", gridShape(rectCells(4, 3), 6, 5)],
        ex: [['Count', 'A rectangle', [["Count the green squares: twelve. The area is twelve squares.", gridShape(rectCells(4, 3), 6, 5)]]],
          ['Rows', 'Multiply', [["There are three rows of four. Three times four is twelve. Quicker than counting!", E('3 × 4 = 12 squares', 'g')]]],
          ['Odd shapes', 'Still count', [["An L-shape: count every square: seven.", gridShape(['1,1', '1,2', '1,3', '2,3', '3,3', '4,3', '2,2'], 6, 5)]]]],
        real: ['A lawn', "Frankie's lawn is five squares long and four squares wide: twenty squares of grass.", gridShape(rectCells(5, 4), 7, 6)],
        turn: ["Your turn! What is the area of a rectangle two rows of six? Pause and try it.", gridShape(rectCells(6, 2), 8, 4), "Two times six: twelve squares.", E('12 squares', 'g')],
        rec: ["Area is the number of squares a shape covers. For a rectangle, multiply rows by columns.", ['Area = space inside', 'Count squares', 'Rectangle: rows × columns', 'Units: squares (or cm²)']],
        deep: ['Shapes with the same area can look very different.', 'Count half squares as halves.']
      }),
      FL.LS('How can I work out the length of an object?', 'P4', 'how to measure and change between metres and centimetres.', {
        intro: ['Measuring', 'm and cm', "Frankie measures his garden in metres and centimetres. One metre is one hundred centimetres!", E('1 m = 100 cm', 'b')],
        ex: [['m to cm', '3 m', [["Three metres is three hundred centimetres.", E('3 m = 300 cm', 'g')]]],
          ['Mixed', '1 m 45 cm', [["One metre forty-five is one hundred and forty-five centimetres.", E('1 m 45 cm = 145 cm', 'g')]]],
          ['Compare', '2 m or 180 cm', [["Two metres is two hundred centimetres, so it is longer than one hundred and eighty.", E('200 cm > 180 cm', 'g')]]]],
        real: ['Fence', "Frankie's fence is four metres twenty long: four hundred and twenty centimetres.", E('4 m 20 cm = 420 cm', 'b')],
        turn: ["Your turn! How many centimetres in two metres fifty? Pause and try it.", E('2 m 50 cm'), "Two hundred and fifty centimetres.", E('250 cm', 'g')],
        rec: ["1 m = 100 cm. Change to the same unit to compare.", ['1 m = 100 cm', 'Use cm for short things', 'Same units to compare', 'Pick a sensible unit']],
        deep: ['Use mm for tiny things, km for long journeys.', 'A metre is about one big step.']
      }),
      LS('How do I find the perimeter of a shape?', 'how perimeter is the distance all the way round a shape.', {
        intro: ['Around the edge', 'Perimeter', "Frankie wants a fence all the way round his pond garden. The distance round the edge is called the perimeter.", rectPic(6, 4, 'm')],
        ex: [['Add the sides', '6 m by 4 m', [["Six plus four plus six plus four: twenty metres.", E('6 + 4 + 6 + 4 = 20 m', 'g')]]],
          ['A square', '5 cm sides', [["Four sides of five: twenty centimetres.", E('4 × 5 = 20 cm', 'g')]]],
          ['On squares', 'Count edges', [["Walk round the outside and count the edges of the squares.", gridShape(rectCells(3, 2), 5, 4)]]]],
        real: ['Lace', "A card is ten centimetres by eight. Lace round the edge: thirty-six centimetres.", rectPic(10, 8, 'cm')],
        turn: ["Your turn! What is the perimeter of a rectangle seven by three? Pause and try it.", rectPic(7, 3, 'cm'), "Seven plus three plus seven plus three: twenty.", E('20 cm', 'g')],
        rec: ["Perimeter: add all the sides. Area: count the squares inside.", ['Perimeter = around', 'Add every side', 'Rectangle: 2 lengths + 2 widths', 'Not the same as area']],
        deep: ['Perimeter is a length (cm, m); area is in squares.', 'Don’t forget the sides you cannot see labelled.']
      }),
      LS('How do I read a scale?', 'how to read scales on rulers, jugs and weighing scales.', {
        intro: ['Scales', 'What is each step?', "Scales have marks. Before reading, work out what each small step is worth.", scale(0, 100, 10, 70, 'cm')],
        ex: [['Steps of 10', '0 to 100', [["Each step is ten. The arrow is on seventy.", scale(0, 100, 10, 70, 'cm')]]],
          ['Steps of 5', '0 to 50 kg', [["Each step is five. The arrow is on thirty-five kilograms.", scale(0, 50, 5, 35, 'kg')]]],
          ['Steps of 100', 'Jug in ml', [["A jug goes up in hundreds of millilitres. The water is at six hundred.", scale(0, 1000, 100, 600, 'ml')]]]],
        real: ['Compost', "Frankie weighs his compost: the arrow points to sixteen kilograms.", scale(0, 20, 2, 16, 'kg')],
        turn: ["Your turn! The scale goes up in twos. What does the arrow point to? Pause and try it.", scale(0, 20, 2, 14, 'kg'), "One step after twelve: fourteen.", E('14 kg', 'g')],
        rec: ["Find the value of each step, then count from a labelled mark.", ['Read the labels', 'Count the steps between', 'Value of one step', 'Count on to the arrow']],
        deep: ['Not every scale goes up in ones.', 'Check the unit: g, kg, ml or litres.']
      })
    ],
    acts: [
      ['Area builder', 'Find the area.', FL.rounds(function () { var a = r(2, 6), b = r(2, 4); return { vis: gridShape(rectCells(a, b), a + 2, b + 2), q: 'What is the area?', answer: a * b + ' squares', wrong: [2 * (a + b) + ' squares', (a * b + a) + ' squares', (a + b) + ' squares'].filter(function (x, i, arr) { return x !== a * b + ' squares' && arr.indexOf(x) === i; }), explain: a + ' × ' + b + ' = ' + a * b + ' squares.' }; }, 6)],
      ['Fence it', 'Find the perimeter.', FL.rounds(function () { var a = r(2, 9), b = r(2, 6); return { vis: rectPic(a, b, 'm'), q: 'What is the perimeter?', answer: 2 * (a + b) + ' m', wrong: [a * b + ' m', (a + b) + ' m', (2 * (a + b) + 2) + ' m'].filter(function (x, i, arr) { return x !== 2 * (a + b) + ' m' && arr.indexOf(x) === i; }), explain: a + ' + ' + b + ' + ' + a + ' + ' + b + ' = ' + 2 * (a + b) + ' m.' }; }, 6)],
      ['Scale reader', 'Read the scale.', FL.rounds(function () { var c = pick([[0, 100, 10, 'cm'], [0, 50, 5, 'kg'], [0, 20, 2, 'kg'], [0, 1000, 100, 'ml']]), v = c[0] + c[2] * r(1, (c[1] - c[0]) / c[2] - 1); return { vis: scale(c[0], c[1], c[2], v, c[3]), q: 'What does the arrow show?', answer: v + ' ' + c[3], wrong: [v + c[2], v - c[2], v + 2 * c[2]].filter(function (x) { return x >= 0 && x <= c[1]; }).map(function (x) { return x + ' ' + c[3]; }), explain: 'Each step is ' + c[2] + ' ' + c[3] + '. The arrow is on ' + v + '.' }; }, 6)]
    ],
    more: [
      ['Count the squares', 'Area.', FL.genAct(function () { return g7.area(true); }, 'frog')],
      ['Around the edge', 'Perimeter.', FL.genAct(function () { return g7.perim(true); }, 'frog')],
      ['Metres and centimetres', 'Change the units.', FL.genAct(function () { return g7.conv(); }, 'frog')],
      ['Read the scale', 'What is each step worth?', FL.genAct(function () { return g7.scale(true); }, 'frog')],
      ['Mixed lengths', 'm and cm.', FL.genAct(function () { return g7.len(); }, 'frog')]
    ],
    lifeLead: 'area, perimeter, length in m and cm, and reading scales in the garden',
    life: { low: [function () { var a = r(2, 6), b = r(2, 5); return Q('Real life', 'A vegetable patch is <b>' + a + '</b> squares long and <b>' + b + '</b> squares wide. What is its area in squares?', a * b, ['Rows times columns.', 'Or count the squares.'], a + ' × ' + b + ' = ' + a * b + ' squares.', gridShape(rectCells(a, b), a + 2, b + 2)); }, function () { var n = r(1, 6); return Q('Real life', 'A rope is <b>' + n + ' m</b> long. How many centimetres is that?', n * 100, ['1 m = 100 cm.', 'Multiply by 100.'], n + ' m = ' + n * 100 + ' cm.'); }, function () { var k = pick([['the length of a garden', 'm'], ['the length of a pencil', 'cm'], ['the mass of a bag of soil', 'kg'], ['the water in a watering can', 'litres'], ['the width of a book', 'cm'], ['the height of a tree', 'm']]); return MC('Real life', 'Which unit would Frankie use to measure <b>' + k[0] + '</b>?', k[1], ['cm', 'm', 'kg', 'litres'].filter(function (x) { return x !== k[1]; }), ['Is it length, mass or capacity?', 'Short lengths use cm, long ones use m.'], k[1] + '.'); }], medium: [function () { var a = r(3, 10), b = r(2, 8); return Q('Real life', 'Frankie puts a fence round a garden <b>' + a + ' m</b> long and <b>' + b + ' m</b> wide. How many metres of fence does he need?', 2 * (a + b), ['Perimeter: add all four sides.', a + ' + ' + b + ' + ' + a + ' + ' + b + '.'], 'He needs ' + 2 * (a + b) + ' m.', rectPic(a, b, 'm')); }, function () { var a = r(1, 3), b = 10 * r(1, 9); return Q('Real life', 'A plank is <b>' + a + ' m ' + b + ' cm</b> long. How many centimetres is that?', a * 100 + b, ['1 m = 100 cm.', 'Then add the extra centimetres.'], (a * 100 + b) + ' cm.'); }], high: [function () { var s = r(3, 8); return Q('Real life', 'A square pond has sides of <b>' + s + ' m</b>. Frankie walks all the way round twice. How far does he walk?', 8 * s, ['Find the perimeter first.', 'Then double it.'], 'Perimeter ' + 4 * s + ' m, twice is ' + 8 * s + ' m.'); }, function () { var a = r(2, 5), b = r(2, 4), c = r(1, a * b - 1); return Q('Real life', 'A lawn is <b>' + a + '</b> squares by <b>' + b + '</b> squares. <b>' + c + '</b> squares are covered by a pond. How many squares of grass are left?', a * b - c, ['Find the area first.', 'Then take away the pond.'], a * b + ' − ' + c + ' = ' + (a * b - c) + ' squares.'); }] },
    gens: { low: [function () { return g7.area(false); }, function () { return g7.perim(false); }, function () { return g7.scale(false); }],
      medium: [function () { return g7.area(false); }, function () { return g7.perim(false); }, function () { return g7.scale(false); }, g7.len, g7.conv],
      high: [function () { return g7.area(true); }, function () { return g7.perim(true); }, function () { return g7.scale(true); }, g7.conv, g7.len] }
  });

  /* ================= 8. Shape, position and movement: Captain Pip's island ================= */
  var COLS = 'ABCDE';
  var g8 = {
    tess: function () { var k = pick([['squares', 'Yes'], ['equilateral triangles', 'Yes'], ['regular hexagons', 'Yes'], ['rectangles', 'Yes'], ['circles', 'No'], ['regular pentagons', 'No'], ['regular octagons', 'No'], ['ovals', 'No']]); return MC('Tessellation', 'Do <b>' + k[0] + '</b> tessellate on their own (fit together with no gaps)?', k[1], [k[1] === 'Yes' ? 'No' : 'Yes'], ['Imagine tiling a floor.', 'Are there gaps where they meet?'], k[1] === 'Yes' ? k[0].charAt(0).toUpperCase() + k[0].slice(1) + ' fit together with no gaps.' : k[0].charAt(0).toUpperCase() + k[0].slice(1) + ' leave gaps.', '', true); },
    gridRef: function () { var c = r(0, 4), rw = r(0, 4), it = pick(['💎', '🏝️', '⚓', '🦜', '🗝️']); return MC('Grid references', 'What is the grid reference of the ' + it + '?', COLS[c] + (rw + 1), [COLS[(c + 1) % 5] + (rw + 1), COLS[c] + ((rw + 1) % 5 + 1), COLS[rw] + (c + 1)].filter(function (x, i, a) { return x !== COLS[c] + (rw + 1) && a.indexOf(x) === i; }), ['Letter first: go along the bottom.', 'Then the number: go up.'], 'Along to ' + COLS[c] + ', up to ' + (rw + 1) + ': ' + COLS[c] + (rw + 1) + '.', grid(c, rw, it)); },
    right: function () { var k = pick([['a square', 4], ['a rectangle', 4], ['a right-angled triangle', 1], ['an equilateral triangle', 0], ['a regular hexagon', 0]]); return Q('Right angles', 'How many <b>right angles</b> does <b>' + k[0] + '</b> have?', k[1], ['A right angle is a square corner, like the corner of a page.', 'Check each corner.'], k[0].charAt(0).toUpperCase() + k[0].slice(1) + ' has ' + k[1] + ' right angle' + (k[1] === 1 ? '' : 's') + '.'); },
    comp: function () { var D = ['North', 'East', 'South', 'West'], s = r(0, 3), t = pick([1, 2, 3]), cw = r(0, 1), e = cw ? (s + t) % 4 : (s - t + 8) % 4, nm = ['', 'a quarter turn', 'a half turn', 'three quarter turns'][t]; return MC('Compass points', 'Pip faces <b>' + D[s] + '</b>. She makes <b>' + nm + ' ' + (cw ? 'clockwise' : 'anticlockwise') + '</b>. Which way does she face?', D[e], D.filter(function (x) { return x !== D[e]; }), ['Clockwise goes N, E, S, W.', 'A quarter turn moves one compass point.'], 'She now faces ' + D[e] + '.', compass(D[s].charAt(0))); },
    angle: function () { var k = pick([['quarter turn', 1], ['half turn', 2], ['three quarter turn', 3], ['full turn', 4]]); return Q('Right angles', 'How many <b>right angles</b> are in a <b>' + k[0] + '</b>?', k[1], ['A quarter turn is one right angle.', 'Count the quarter turns.'], 'A ' + k[0] + ' is ' + k[1] + ' right angle' + (k[1] > 1 ? 's' : '') + '.'); }
  };
  FL.topic({ n: 408, year: 'P4', short: 'Shape, position', title: 'Shape, position and movement', blurb: 'Explore Captain Pip’s treasure island: tessellation, grid references, right angles and compass points.',
    lessons: [
      LS('What is tessellation?', 'how shapes can fit together with no gaps or overlaps.', {
        intro: ['Pip’s island', 'Tiled floors', "Captain Pip's island has a cave with a tiled floor. When shapes fit together with no gaps or overlaps, they tessellate!", FL.svg(240, 120, 'tessellating hexagons', (function () { var s = ''; for (var y = 0; y < 3; y++) for (var x = 0; x < 5; x++) { var cx = 30 + x * 45, cy = 25 + y * 40 + (x % 2) * 20, p = []; for (var k = 0; k < 6; k++) { var a = Math.PI / 3 * k; p.push((cx + 26 * Math.cos(a)).toFixed(1) + ',' + (cy + 23 * Math.sin(a)).toFixed(1)); } s += '<polygon points="' + p.join(' ') + '" fill="' + ['#ffd166', '#7cc4ff', '#8fd67d'][(x + y) % 3] + '" stroke="' + INK + '" stroke-width="2"/>'; } return s; })(), 300)],
        ex: [['Squares', 'No gaps', [["Squares fit together perfectly, like a chessboard.", FL.shapeRow(['square', 'square', 'square'], 60)]]],
          ['Triangles', 'Flip and fit', [["Triangles tessellate if you turn every other one upside down.", FL.shapeRow(['triangle', 'triangle', 'triangle'], 60)]]],
          ['Circles', 'Gaps!', [["Circles leave gaps between them. They do not tessellate.", FL.shapeRow(['circle', 'circle', 'circle'], 60)]]]],
        real: ['Honeycomb', "Bees build honeycomb from hexagons, which tessellate with no wasted space.", FL.shape('hexagon', '#ffd166', 110)],
        turn: ["Your turn! Do rectangles tessellate? Pause and try it.", FL.shape('rectangle', null, 110), "Yes: think of a brick wall.", E('Yes', 'g')],
        rec: ["A tessellation covers a surface with shapes, no gaps and no overlaps.", ['No gaps', 'No overlaps', 'Squares, triangles, hexagons', 'Circles leave gaps']],
        deep: ['Regular pentagons do not tessellate on their own.', 'You can flip or turn shapes to make them fit.']
      }),
      LS('How can I use grid references?', 'how to find and describe a square on a grid.', {
        intro: ['Treasure map', 'Grid references', "Pip's treasure map has a grid. Letters go along the bottom, numbers go up the side. Along the corridor, then up the stairs!", grid(2, 3, '💎')],
        ex: [['Find it', 'The diamond', [["Along to C, up to 4. The diamond is at C4.", grid(2, 3, '💎')]]],
          ['The anchor', 'A2', [["Along to A, up to 2: the anchor is at A2.", grid(0, 1, '⚓')]]],
          ['Order matters', 'Letter first', [["B3 is not the same as C2! Always the letter first.", E('letter, then number', 'g')]]]],
        real: ['Maps', "Real maps use grid references to help people find places.", grid(4, 0, '🏝️')],
        turn: ["Your turn! Where is the parrot? Pause and try it.", grid(3, 2, '🦜'), "Along to D, up to 3: D3.", E('D3', 'g')],
        rec: ["Go along to find the letter, then up to find the number.", ['Along first', 'Then up', 'Letter then number', 'Check the square']],
        deep: ['Along the corridor, up the stairs helps remember the order.', 'Each grid reference names one square.']
      }),
      LS('What is a right angle?', 'how to spot a right angle, a square corner, and that it is a quarter turn.', {
        intro: ['Square corners', 'Right angles', "A right angle is a square corner, like the corner of a book. It is also a quarter turn.", FL.svg(160, 140, 'a right angle', '<path d="M30 120 V20 M30 120 H140" stroke="' + INK + '" stroke-width="5" fill="none"/><rect x="30" y="96" width="24" height="24" fill="none" stroke="#e0457b" stroke-width="3"/>', 180)],
        ex: [['A square', '4 right angles', [["Every corner of a square is a right angle.", FL.shape('square', null, 110)]]],
          ['Not right', 'Too wide or too narrow', [["An equilateral triangle has no right angles: its corners are too narrow.", FL.shape('triangle', null, 110)]]],
          ['Turns', 'Quarter turn', [["Turning a quarter turn is turning through one right angle. A half turn is two right angles.", E('¼ turn = 1 right angle', 'g')]]]],
        real: ['Doors and windows', "Doors, windows and books all have right-angled corners.", FL.shape('rectangle', null, 110)],
        turn: ["Your turn! How many right angles in a full turn? Pause and try it.", E('full turn = ? right angles'), "Four.", E('4', 'g')],
        rec: ["A right angle is a square corner and a quarter turn.", ['Square corner', 'Quarter turn', 'Mark it with a small square', 'Use a page corner to check']],
        deep: ['Angles smaller than a right angle are acute; bigger are obtuse.', 'A rectangle has 4 right angles, however long it is.']
      }),
      LS('How do I use compass points?', 'how to use North, East, South and West to give directions.', {
        intro: ['Which way?', 'Compass points', "Pip uses a compass to find her way: North, East, South and West. Never Eat Shredded Wheat!", compass('N')],
        ex: [['Clockwise', 'N, E, S, W', [["Going clockwise: North, East, South, West.", compass('E')]]],
          ['Quarter turn', 'North to East', [["Facing North, a quarter turn clockwise makes you face East.", compass('E')]]],
          ['Half turn', 'North to South', [["A half turn from North makes you face South.", compass('S')]]]],
        real: ['Directions', "From the boat, walk North three squares, then East two squares to find the treasure.", grid(2, 3, '💎')],
        turn: ["Your turn! Facing West, make a half turn. Which way do you face? Pause and try it.", compass('W'), "East.", E('East', 'g')],
        rec: ["The four compass points are North, East, South and West, going clockwise.", ['N at the top', 'Clockwise: N, E, S, W', 'Quarter turn = 1 point', 'Half turn = opposite']],
        deep: ['North-East is halfway between North and East.', 'A compass needle always points North.']
      })
    ],
    acts: [
      ['Treasure hunt', 'Find the grid reference.', FL.rounds(function () { var c = r(0, 4), rw = r(0, 4), it = pick(['💎', '⚓', '🦜', '🗝️']), ans = COLS[c] + (rw + 1); return { vis: '<div style="text-align:center">' + grid(c, rw, it) + '</div>', q: 'Where is the ' + it + '?', answer: ans, wrong: [COLS[(c + 1) % 5] + (rw + 1), COLS[c] + ((rw + 1) % 5 + 1), (rw + 1) + COLS[c]].filter(function (x, i, a) { return x !== ans && a.indexOf(x) === i; }), explain: 'Along to ' + COLS[c] + ', up to ' + (rw + 1) + ': ' + ans + '.' }; }, 6)],
      ['Compass turns', 'Which way now?', FL.rounds(function () { var D = ['North', 'East', 'South', 'West'], s = r(0, 3), t = pick([1, 2, 3]), cw = r(0, 1), e = cw ? (s + t) % 4 : (s - t + 8) % 4; return { vis: compass(D[s].charAt(0)), q: 'Facing ' + D[s] + ', turn ' + ['', 'a quarter turn', 'a half turn', 'three quarters'][t] + ' ' + (cw ? 'clockwise' : 'anticlockwise') + '. Which way now?', answer: D[e], wrong: D.filter(function (x) { return x !== D[e]; }), explain: 'You now face ' + D[e] + '.' }; }, 6)],
      ['Tile it', 'Does it tessellate?', FL.rounds(function () { var k = pick([['square', 'Yes'], ['triangle', 'Yes'], ['hexagon', 'Yes'], ['rectangle', 'Yes'], ['circle', 'No'], ['pentagon', 'No'], ['octagon', 'No'], ['oval', 'No']]); return { vis: FL.shapeRow([k[0], k[0], k[0]], 70), q: 'Do regular ' + k[0] + 's tessellate?', answer: k[1], wrong: [k[1] === 'Yes' ? 'No' : 'Yes'], keepOrder: true, explain: k[1] === 'Yes' ? 'They fit together with no gaps.' : 'They leave gaps.' }; }, 6)]
    ],
    more: [
      ['Grid reference', 'Along, then up.', FL.genAct(function () { return g8.gridRef(); }, 'pirate')],
      ['Tile the floor', 'Does it tessellate?', FL.genAct(function () { return g8.tess(); }, 'pirate')],
      ['Square corners', 'Right angles in shapes.', FL.genAct(function () { return g8.right(); }, 'pirate')],
      ['Compass turns', 'Which way now?', FL.genAct(function () { return g8.comp(); }, 'pirate')],
      ['Turns and right angles', 'How many right angles?', FL.genAct(function () { return g8.angle(); }, 'pirate')]
    ],
    lifeLead: 'grid references, compass directions, turns and right angles on a treasure map',
    life: { low: [function () { var c = r(0, 4), rw = r(0, 4), a = 'ABCDE'.charAt(c) + (rw + 1); return MC('Real life', 'On the treasure map, where is the 💎?', a, ['ABCDE'.charAt((c + 1) % 5) + (rw + 1), 'ABCDE'.charAt(c) + ((rw + 1) % 5 + 1), (rw + 1) + 'ABCDE'.charAt(c)], ['Letter first: go along.', 'Then the number: go up.'], 'It is at ' + a + '.', grid(c, rw, '💎')); }, function () { var D = ['North', 'East', 'South', 'West'], s = r(0, 3); return MC('Real life', 'Pip faces <b>' + D[s] + '</b> and turns to face the opposite way. Which way does she face?', D[(s + 2) % 4], D.filter(function (x, i) { return i !== (s + 2) % 4; }), ['Opposite means a half turn.', 'North is opposite South.'], D[(s + 2) % 4] + '.'); }], medium: [function () { var D = ['North', 'East', 'South', 'West'], s = r(0, 3), t = pick([1, 3]), e = (s + t) % 4; return MC('Real life', 'The ship faces <b>' + D[s] + '</b>. It turns <b>' + (t === 1 ? 'a quarter turn' : 'three quarter turns') + ' clockwise</b>. Which way does it face?', D[e], D.filter(function (x) { return x !== D[e]; }), ['Clockwise: N, E, S, W.', 'Each quarter turn moves one point.'], 'It faces ' + D[e] + '.', compass(D[s].charAt(0))); }, function () { var c = r(0, 3), rw = r(0, 3), m = pick([[1, 0, 'East'], [0, 1, 'North']]), a = 'ABCDE'.charAt(c + m[0]) + (rw + 1 + m[1]); return MC('Real life', 'The parrot is at <b>' + 'ABCDE'.charAt(c) + (rw + 1) + '</b>. It flies one square <b>' + m[2] + '</b>. Where is it now?', a, ['ABCDE'.charAt(c) + (rw + 1), 'ABCDE'.charAt(c + 1 - m[0]) + (rw + 2 - m[1]), 'ABCDE'.charAt(Math.max(0, c - 1)) + (rw + 1)], ['North is up, East is along to the right.', 'Change the letter or the number by one.'], 'It is now at ' + a + '.'); }], high: [function () { var D = ['North', 'East', 'South', 'West'], s = r(0, 3), a = r(1, 2), b = r(1, 2), e = (s + a - b + 8) % 4; return MC('Real life', 'Pip faces <b>' + D[s] + '</b>. She turns <b>' + a + ' right angle' + (a > 1 ? 's' : '') + ' clockwise</b>, then <b>' + b + ' right angle' + (b > 1 ? 's' : '') + ' anticlockwise</b>. Which way does she face?', D[e], D.filter(function (x) { return x !== D[e]; }), ['Do one turn at a time.', 'A right angle is a quarter turn.'], 'She faces ' + D[e] + '.'); }, function () { var k = pick([['a square and a rectangle', 8], ['two squares', 8], ['a rectangle and a right-angled triangle', 5], ['three squares', 12]]); return Q('Real life', 'Pip draws <b>' + k[0] + '</b> on her map. How many right angles are there altogether?', k[1], ['Count the right angles in each shape.', 'Squares and rectangles have 4.'], 'There are ' + k[1] + ' right angles.'); }, function () { var c = r(0, 2), rw = r(0, 1), e = r(1, 2), nn = r(1, 3), a = 'ABCDE'.charAt(c + e) + (rw + 1 + nn); return MC('Real life', 'Pip starts at <b>' + 'ABCDE'.charAt(c) + (rw + 1) + '</b>. She walks <b>' + e + '</b> ' + (e === 1 ? 'square' : 'squares') + ' East, then <b>' + nn + '</b> ' + (nn === 1 ? 'square' : 'squares') + ' North. Where is she now?', a, ['ABCDE'.charAt(c + nn) + (rw + 1 + e), 'ABCDE'.charAt(c + e) + (rw + 1), 'ABCDE'.charAt(c) + (rw + 1 + nn)], ['East changes the letter.', 'North changes the number.'], 'She is at ' + a + '.'); }] },
    gens: { low: [g8.gridRef, g8.tess, g8.right], medium: [g8.gridRef, g8.tess, g8.right, g8.comp], high: [g8.gridRef, g8.comp, g8.angle, g8.right, g8.tess] }
  });

  /* ================= 9. Data and chance: the weather station ================= */
  var g9 = {
    tally: function () { var n = r(3, 19); return Q('Tally marks', 'What number do these tally marks show?', n, ['Each bundle is 5.', 'Count the fives, then the ones.'], 'That is ' + n + '.', FL.tally(n)); },
    bar: function () { var it = [['Sunny', r(1, 9)], ['Rainy', r(1, 9)], ['Cloudy', r(1, 9)], ['Snowy', r(0, 4)]], a = r(0, 3), b = (a + r(1, 3)) % 4; if (it[a][1] === it[b][1]) it[a][1]++; return Q('Bar charts', 'How many more <b>' + (it[a][1] > it[b][1] ? it[a][0] : it[b][0]) + '</b> days than <b>' + (it[a][1] > it[b][1] ? it[b][0] : it[a][0]) + '</b> days?', Math.abs(it[a][1] - it[b][1]), ['Read both bars.', 'Take the smaller from the bigger.'], Math.max(it[a][1], it[b][1]) + ' − ' + Math.min(it[a][1], it[b][1]) + ' = ' + Math.abs(it[a][1] - it[b][1]) + '.', V.bars(it, 10)); },
    table: function () { var d = ['Mon', 'Tue', 'Wed', 'Thu'], t = d.map(function () { return r(4, 16); }), k = r(0, 3); return Q('Tables', 'What was the temperature on <b>' + d[k] + '</b>, in °C?', t[k], ['Find ' + d[k] + ' in the table.', 'Read across.'], 'On ' + d[k] + ' it was ' + t[k] + '°C.', tbl([t.map(String)], d)); },
    venn: function () { var n = r(1, 30), even = n % 2 === 0, big = n > 10, where = even && big ? 'in both circles' : even ? 'only in the Even circle' : big ? 'only in the More than 10 circle' : 'outside both circles'; return MC('Sorting diagrams', 'Where does <b>' + n + '</b> go in a Venn diagram with circles <b>Even</b> and <b>More than 10</b>?', where, ['in both circles', 'only in the Even circle', 'only in the More than 10 circle', 'outside both circles'].filter(function (x) { return x !== where; }), ['Is it even?', 'Is it more than 10?'], n + ' is ' + (even ? '' : 'not ') + 'even and ' + (big ? '' : 'not ') + 'more than 10: ' + where + '.', venn('Even', 'More than 10'), ['in both circles', 'only in the Even circle', 'only in the More than 10 circle', 'outside both circles']); },
    chance: function () { var e = pick([['The sun will rise tomorrow.', 'certain'], ['It will snow in Scotland in July.', 'unlikely'], ['A dice will land on 7.', 'impossible'], ['A coin will land on heads.', 'even chance'], ['It will rain in Scotland this year.', 'certain'], ['You will meet a dinosaur today.', 'impossible'], ['It will be cold in January.', 'likely'], ['A dice will land on 1.', 'unlikely']]); return MC('Chance', '<b>' + e[0] + '</b> How likely is it?', e[1], ['impossible', 'unlikely', 'even chance', 'likely', 'certain'].filter(function (x) { return x !== e[1]; }).slice(0, 3), ['Could it ever happen?', 'Will it always happen?'], 'It is ' + e[1] + '.', '', ['impossible', 'unlikely', 'even chance', 'likely', 'certain']); }
  };
  g9.chance = (function (f) { return function () { var q = f(); if (q.options && q.options.indexOf(q.answer) < 0) q.options[0] = q.answer; return q; }; })(g9.chance);
  FL.topic({ n: 409, year: 'P4', short: 'Data', title: 'Data and chance', blurb: 'Run a weather station with Ollie the owl: bar charts, tables, sorting diagrams and how likely things are.',
    lessons: [
      FL.LS('How do I record and display data?', 'P4', 'how to collect data, show it in a bar chart and answer questions about it.', {
        intro: ['Weather station', 'Ollie’s records', "Ollie records the weather every day for a month. He tallies the results, then draws a bar chart.", V.bars([['Sunny', 7], ['Rainy', 12], ['Cloudy', 9], ['Snowy', 2]], 14)],
        ex: [['Tally', 'Count in fives', [["Ollie draws a tally mark each rainy day. Twelve rainy days.", FL.tally(12)]]],
          ['Bar chart', 'Read the scale', [["This scale goes up in twos. The Rainy bar reaches twelve.", V.bars([['Sunny', 7], ['Rainy', 12], ['Cloudy', 9], ['Snowy', 2]], 14)]]],
          ['Compare', 'How many more?', [["Twelve rainy days, seven sunny: five more rainy days.", E('12 − 7 = 5', 'g')]]]],
        real: ['Scotland!', "Ollie lives in Scotland, so rainy days win again!", FL.says('owl', 'Rainy: 12 days')],
        turn: ["Your turn! How many days were not rainy? Pause and try it.", V.bars([['Sunny', 7], ['Rainy', 12], ['Cloudy', 9], ['Snowy', 2]], 14), "Seven plus nine plus two: eighteen.", E('18', 'g')],
        rec: ["Collect with tallies, display in a bar chart, read the scale carefully, then compare.", ['Collect', 'Tally', 'Draw bars', 'Read and compare']],
        deep: ['Choose a scale that fits your biggest number.', 'Label both axes and give the chart a title.']
      }),
      LS('How do I read and make tables?', 'how to read information from a table.', {
        intro: ['Tables', 'Rows and columns', "Ollie writes the temperature each day in a table. Columns show the days. It is easy to find any day's temperature.", tbl([['8', '11', '6', '14']], ['Mon', 'Tue', 'Wed', 'Thu'])],
        ex: [['Read it', 'Tuesday', [["Find Tuesday, read below: eleven degrees.", E('Tue: 11°C', 'g')]]],
          ['Warmest', 'Biggest number', [["The biggest number is fourteen, on Thursday.", E('Thu: 14°C', 'g')]]],
          ['Difference', 'Thu − Wed', [["Fourteen take away six: Thursday was eight degrees warmer than Wednesday.", E('14 − 6 = 8', 'g')]]]],
        real: ['Rainfall', "Ollie also records rain in millimetres for each week.", tbl([['Week 1', '12 mm'], ['Week 2', '30 mm'], ['Week 3', '5 mm']], ['Week', 'Rain'])],
        turn: ["Your turn! Which day was coldest? Pause and try it.", tbl([['8', '11', '6', '14']], ['Mon', 'Tue', 'Wed', 'Thu']), "Wednesday: six degrees.", E('Wed', 'g')],
        rec: ["Find the right column and row, then read where they meet.", ['Read the headings', 'Find the row', 'Find the column', 'Compare values']],
        deep: ['Tables keep data tidy and easy to compare.', 'Always check the units in the heading.']
      }),
      LS('How can I sort data with Venn and Carroll diagrams?', 'how to sort things into groups using Venn and Carroll diagrams.', {
        intro: ['Sorting', 'Two rules', "Ollie sorts numbers using two rules at once. A Venn diagram uses circles. A Carroll diagram uses a table.", venn('Even', 'More than 10', [['4', 70, 95], ['12', 145, 95], ['15', 215, 95], ['7', 145, 170]])],
        ex: [['Venn', 'Overlap', [["Twelve is even and more than ten, so it goes in the overlap.", venn('Even', 'More than 10', [['12', 145, 95]])]]],
          ['Outside', 'Neither rule', [["Seven is not even and not more than ten, so it goes outside both circles.", venn('Even', 'More than 10', [['7', 145, 170]])]]],
          ['Carroll', 'A table', [["A Carroll diagram has rows and columns for yes and no.", tbl([['Even', '4', '12'], ['Not even', '7', '15']], ['', '10 or less', 'More than 10'])]]]],
        real: ['Animals', "Sort animals: can fly, and has four legs. A bird can fly but has two legs.", venn('Can fly', 'Four legs', [['bird', 70, 95], ['dog', 215, 95], ['fish', 145, 170]])],
        turn: ["Your turn! Where does eighteen go: Even, More than 10, both, or neither? Pause and try it.", venn('Even', 'More than 10'), "Eighteen is even and more than ten: in the overlap.", E('both', 'g')],
        rec: ["Check each rule. Both: the overlap. Neither: outside.", ['Check rule 1', 'Check rule 2', 'Both: in the middle', 'Neither: outside']],
        deep: ['Carroll diagrams always have a box for "not".', 'Every item must go somewhere.']
      }),
      LS('How likely is it?', 'how to describe chance with impossible, unlikely, even chance, likely and certain.', {
        intro: ['Will it rain?', 'Chance', "Ollie the weather owl says how likely things are: impossible, unlikely, even chance, likely or certain.", '<div class="sv-row">' + ['impossible', 'unlikely', 'even chance', 'likely', 'certain'].map(function (x, i) { return V.card(x, ['p', 'b', 'g', 'b', 'p'][i], true); }).join('') + '</div>'],
        ex: [['Certain', 'Will happen', [["Tomorrow will come after today. That is certain.", E('certain', 'g')]]],
          ['Even chance', 'Half and half', [["A coin landing on heads: even chance.", E('even chance', 'g')]]],
          ['Impossible', 'Cannot happen', [["A normal dice landing on seven is impossible.", E('impossible', 'g')]]]],
        real: ['Forecast', "In winter in Scotland, rain is likely. Snow in August is very unlikely!", FL.says('owl', 'Rain: likely!')],
        turn: ["Your turn! How likely is it that a cat will learn to talk? Pause and try it.", E('a talking cat?'), "Impossible!", E('impossible', 'g')],
        rec: ["Describe chance on a scale from impossible to certain.", ['Impossible', 'Unlikely', 'Even chance', 'Likely, certain']],
        deep: ['Even chance means as likely to happen as not.', 'Likely things do not always happen.']
      })
    ],
    acts: [
      ['Weather tally', 'Count the tally marks.', FL.rounds(function () { var n = r(3, 22); return { vis: '<div style="text-align:center">' + FL.tally(n) + '</div>', q: 'How many days?', answer: String(n), wrong: nums(n, [n + 1, n - 1, n + 5]), explain: 'Count the fives, then the ones: ' + n + '.' }; }, 6)],
      ['Sort it', 'Where does the number go?', FL.rounds(function () { var n = r(1, 25), ev = n % 2 === 0, bg = n > 10, a = ev && bg ? 'Both' : ev ? 'Even only' : bg ? 'More than 10 only' : 'Neither'; return { vis: venn('Even', 'More than 10') + FL.says('owl', String(n)), q: 'Where does ' + n + ' go?', answer: a, wrong: ['Both', 'Even only', 'More than 10 only', 'Neither'].filter(function (x) { return x !== a; }), keepOrder: ['Both', 'Even only', 'More than 10 only', 'Neither'], explain: n + ' is ' + (ev ? '' : 'not ') + 'even and ' + (bg ? '' : 'not ') + 'more than 10.' }; }, 6)],
      ['Chance line', 'How likely is it?', FL.rounds(function () { var e = pick([['a dice landing on 8', 'impossible'], ['the sun rising tomorrow', 'certain'], ['a coin landing on tails', 'even chance'], ['rain in Glasgow this week', 'likely'], ['snow on a summer day', 'unlikely'], ['a fish riding a bike', 'impossible'], ['a Monday coming after Sunday', 'certain']]); return { vis: FL.says('owl', e[0]), q: 'How likely is ' + e[0] + '?', answer: e[1], wrong: ['impossible', 'unlikely', 'even chance', 'likely', 'certain'].filter(function (x) { return x !== e[1]; }).slice(0, 3), keepOrder: ['impossible', 'unlikely', 'even chance', 'likely', 'certain'], explain: 'It is ' + e[1] + '.' }; }, 6)]
    ],
    more: [
      ['Tally up', 'Count the marks.', FL.genAct(function () { return g9.tally(); }, 'owl')],
      ['Bar chart detective', 'How many more?', FL.genAct(function () { return g9.bar(); }, 'owl')],
      ['Table reader', 'Find the value.', FL.genAct(function () { return g9.table(); }, 'owl')],
      ['Venn sorter', 'Where does it go?', FL.genAct(function () { return g9.venn(); }, 'owl')],
      ['How likely?', 'The chance scale.', FL.genAct(function () { return g9.chance(); }, 'owl')]
    ],
    lifeLead: 'tally charts, bar charts, tables, sorting diagrams and chance',
    life: { low: [function () { var n = r(6, 19); return Q('Real life', 'Ollie counts the rainy days with tally marks. How many rainy days?', n, ['Each bundle is 5.', 'Count the fives, then the ones.'], n + ' days.', FL.tally(n)); }, function () { var it = [['Pasta', r(2, 9)], ['Soup', r(2, 9)], ['Salad', r(2, 9)]], k = r(0, 2); return Q('Real life', 'The kitchen made a chart of lunch choices. How many chose <b>' + it[k][0] + '</b>?', it[k][1], ['Find the bar.', 'Read across to the scale.'], it[k][1] + '.', V.bars(it, 10)); }], medium: [function () { var a = r(5, 12), b = r(1, a - 1); return Q('Real life', 'In June there were <b>' + a + '</b> sunny days and <b>' + b + '</b> rainy days. How many more sunny days than rainy days?', a - b, ['Find the difference.', 'Take away.'], a + ' − ' + b + ' = ' + (a - b) + '.', V.bars([['Sunny', a], ['Rainy', b]], 14)); }, function () { var d = ['Mon', 'Tue', 'Wed', 'Thu'], t = d.map(function () { return r(4, 16); }), hi = Math.max.apply(null, t), lo = Math.min.apply(null, t); return Q('Real life', 'How much warmer was the warmest day than the coldest day, in °C?', hi - lo, ['Find the biggest and smallest temperatures.', 'Take away.'], hi + ' − ' + lo + ' = ' + (hi - lo) + '.', tbl([t.map(String)], d)); }], high: [function () { var it = [['Cats', r(2, 9)], ['Dogs', r(2, 9)], ['Fish', r(2, 9)]], tot = it[0][1] + it[1][1] + it[2][1]; return Q('Real life', 'How many children voted altogether?', tot, ['Read every bar.', 'Add them up.'], 'Total: ' + tot + '.', V.bars(it, 10)); }, function () { var w = [r(5, 30), r(5, 30), r(5, 30)]; return Q('Real life', 'How much rain fell in all three weeks, in mm?', w[0] + w[1] + w[2], ['Read each row.', 'Add the three amounts.'], 'Total: ' + (w[0] + w[1] + w[2]) + ' mm.', tbl([['Week 1', w[0] + ' mm'], ['Week 2', w[1] + ' mm'], ['Week 3', w[2] + ' mm']], ['Week', 'Rain'])); }, function () { var e = pick([['picking a red sweet from a bag of only red sweets', 'certain'], ['picking a blue sweet from a bag of only red sweets', 'impossible'], ['a coin landing on tails', 'even chance'], ['snow in Glasgow in January', 'likely'], ['a dice landing on 6', 'unlikely']]); return MC('Real life', 'How likely is <b>' + e[0] + '</b>?', e[1], ['impossible', 'unlikely', 'even chance', 'likely', 'certain'].filter(function (x) { return x !== e[1]; }).slice(0, 3), ['Could it ever happen?', 'Will it always happen?'], 'It is ' + e[1] + '.', '', ['impossible', 'unlikely', 'even chance', 'likely', 'certain']); }] },
    gens: { low: [g9.tally, g9.table, g9.chance], medium: [g9.tally, g9.bar, g9.table, g9.chance, g9.venn], high: [g9.bar, g9.table, g9.venn, g9.chance] }
  });
})();
