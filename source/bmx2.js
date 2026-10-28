/* bmx2.js: fills the gaps found when the Bitesize Third and Fourth level maps were checked against S1, S2 and S3.
   New question makers (with pictures where they help) and new lesson parts for the secondary years:
   writing numbers as powers, multiples and factors in context, wages and VAT, bank statements, days and dates, time zones,
   naming and measuring angles, complementary and supplementary angles, constructing triangles, prisms and pyramids,
   fair samples, sample size, survey questions, tally charts, two-way tables, trends, misleading graphs,
   relative frequency and expected outcomes, percentage change, improper fractions, estimating, converting area and volume units,
   budgeting, and factorising and solving quadratics.
   Makers are added through S.extraMakers; lessons through BT.add (part "learn8"). */
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
  function fmt(n) { return Math.abs(n) >= 10000 ? String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : T(Math.round(n * 100) / 100); }
  function gbp(x) { return '£' + (Math.round(x * 100) % 100 === 0 ? fmt(Math.round(x)) : (Math.round(x * 100) / 100).toFixed(2)); }
  var SUP = { 0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹', '-': '⁻' };
  function sup(n) { return String(n).replace('-', M === '−' ? '-' : '-').split('').map(function (c) { return SUP[c] || c; }).join(''); }
  function pw(b, e) { return b + sup(e); }
  function gcd(a, b) { return b ? gcd(b, a % b) : Math.abs(a); }
  var STROKE = 'stroke:var(--fg);stroke-width:2.5;stroke-linejoin:round';

  /* ================= POWERS ================= */
  function gPowWrite(lv) {
    var b = pick(lv <= 1 ? [2, 3, 5, 10] : [2, 3, 4, 5, 6, 7, 10]), e = lv <= 1 ? rnd(2, 4) : rnd(2, 6), v = Math.pow(b, e);
    if (b === 10 && e > 4) e = 4, v = 10000;
    var branch = lv <= 1 ? pick(['eval', 'write']) : pick(['eval', 'write', 'compare']);
    if (branch === 'eval') return Q({ tag: 'Writing numbers as powers', text: 'Work out <b>' + pw(b, e) + '</b>.', answer: String(v),
      hints: ['The small raised number (the index) says how many times to write the base in a multiplication.', pw(b, e) + ' means ' + Array(e + 1).join(b + ' × ').replace(/ × $/, '') + '.'],
      explain: pw(b, e) + ' = ' + Array(e + 1).join(b + ' × ').replace(/ × $/, '') + ' = ' + fmt(v) + '.' });
    if (branch === 'write') return mk({ tag: 'Writing numbers as powers', text: 'Write <b>' + fmt(v) + '</b> as a power of ' + b + '.',
      hints: ['Keep multiplying ' + b + ' by itself until you reach ' + fmt(v) + '.', 'Count how many ' + b + 's you multiplied. That count is the index.'],
      explain: fmt(v) + ' = ' + Array(e + 1).join(b + ' × ').replace(/ × $/, '') + ', so it is ' + pw(b, e) + '.' },
      mcStr(pw(b, e), [pw(b, e + 1), pw(b, e - 1), pw(b + 1, e)]));
    var x = pick([2, 3, 4]), p1 = rnd(3, 5), y = x + pick([1, 2]), p2 = rnd(2, 3);
    var A = Math.pow(x, p1), Bv = Math.pow(y, p2), bigger = A > Bv ? pw(x, p1) : pw(y, p2);
    return mk({ tag: 'Writing numbers as powers', text: 'Which is bigger, <b>' + pw(x, p1) + '</b> or <b>' + pw(y, p2) + '</b>?',
      hints: ['Work each power out in full.', pw(x, p1) + ' = ' + fmt(A) + '.'], explain: pw(x, p1) + ' = ' + fmt(A) + ' and ' + pw(y, p2) + ' = ' + fmt(Bv) + ', so ' + bigger + ' is bigger.' },
      { options: shuffle([pw(x, p1), pw(y, p2)]), answer: bigger });
  }
  function gIndexLaw(lv) {
    var b = pick([2, 3, 5, 7]), m = rnd(2, 6), n = rnd(2, 5), kind = pick(lv >= 3 ? ['mul', 'div', 'zero', 'neg'] : ['mul', 'div']);
    if (kind === 'mul') return mk({ tag: 'Laws of indices', text: 'Simplify <b>' + pw(b, m) + ' × ' + pw(b, n) + '</b>. Give your answer as a power of ' + b + '.',
      hints: ['When you multiply powers with the same base, add the indices.'], explain: pw(b, m) + ' × ' + pw(b, n) + ' = ' + pw(b, m + n) + '. Add the indices: ' + m + ' + ' + n + ' = ' + (m + n) + '.' },
      mcStr(pw(b, m + n), [pw(b, m * n), pw(b * b, m + n), pw(b, Math.abs(m - n))]));
    if (kind === 'div') { var hi = Math.max(m, n) + 1, lo = Math.min(m, n); return mk({ tag: 'Laws of indices', text: 'Simplify <b>' + pw(b, hi) + ' ÷ ' + pw(b, lo) + '</b>. Give your answer as a power of ' + b + '.',
      hints: ['When you divide powers with the same base, subtract the indices.'], explain: pw(b, hi) + ' ÷ ' + pw(b, lo) + ' = ' + pw(b, hi - lo) + '. Subtract the indices: ' + hi + ' − ' + lo + ' = ' + (hi - lo) + '.' },
      mcStr(pw(b, hi - lo), [pw(b, hi + lo), pw(b, hi / lo), pw(b, hi * lo)])); }
    if (kind === 'zero') return Q({ tag: 'Laws of indices', text: 'What is the value of <b>' + pw(b, 0) + '</b>?', answer: '1',
      hints: ['Any number to the power 0 is the same.', pw(b, 3) + ' ÷ ' + pw(b, 3) + ' = 1, and by the index rule that is also ' + pw(b, 0) + '.'], explain: 'Any non-zero number to the power 0 equals 1, so ' + pw(b, 0) + ' = 1.' });
    var e = rnd(1, 3), den = Math.pow(b, e);
    return mk({ tag: 'Laws of indices', text: 'Write <b>' + pw(b, -e) + '</b> as a fraction.',
      hints: ['A negative index means “one over” the positive power.'], explain: pw(b, -e) + ' = 1 ÷ ' + pw(b, e) + ' = 1/' + den + '.' }, mcStr('1/' + den, ['-' + den, '1/' + (den + b), String(den)]));
  }

  /* ================= MULTIPLES AND FACTORS IN CONTEXT ================= */
  function gMFStory(lv) {
    var cop = lv <= 1 ? [[2, 3], [3, 4], [2, 5], [3, 5], [4, 5]] : [[3, 4], [2, 7], [3, 5], [4, 5], [5, 6], [3, 7], [5, 7]], c = pick(cop), g = pick(lv <= 1 ? [2, 3, 4] : [2, 3, 4, 5, 6]), a = g * c[0], b = g * c[1];
    var l = g * c[0] * c[1];
    if (Math.random() < 0.5) {
      var who = pick([['buses', 'minutes', 'A bus to the school leaves the station every ', ' and a bus to the park leaves every '], ['lights', 'seconds', 'A red light flashes every ', ' and a blue light flashes every ']]);
      return Q({ tag: 'Multiples and factors in context', text: who[2] + a + ' ' + who[1] + who[3] + b + ' ' + who[1] + '. They both start together. After how many ' + who[1] + ' will they next go <b>together</b>?', answer: String(l),
        hints: ['“Together again” means a number both times divide into. That is a common multiple.', 'You want the lowest common multiple (LCM) of ' + a + ' and ' + b + '.'], explain: 'The multiples of ' + a + ' and ' + b + ' first meet at ' + l + ', the LCM. They go together again after ' + l + ' ' + who[1] + '.' });
    }
    return Q({ tag: 'Multiples and factors in context', text: 'A builder cuts two planks, ' + a + ' cm and ' + b + ' cm long, into equal pieces with no wood left over. What is the <b>longest</b> each piece can be, in cm?', answer: String(g),
      hints: ['The length must divide into both ' + a + ' and ' + b + ' exactly. That is a common factor.', 'The longest one is the highest common factor (HCF).'], explain: 'The HCF of ' + a + ' and ' + b + ' is ' + g + ', so each piece can be ' + g + ' cm long.' });
  }

  /* ================= WAGES, VAT, BUDGETS, STATEMENTS ================= */
  function gWageVat(lv) {
    var kind = pick(lv <= 1 ? ['wage', 'vat'] : ['wage', 'vat', 'ot', 'novat']);
    if (kind === 'wage') { var h = rnd(12, 38), r = pick([8, 9, 10, 11, 12, 13, 14]); return Q({ tag: 'Wages and VAT', text: 'Sam is paid £' + r + ' an hour and works ' + h + ' hours. How much does Sam earn, in pounds?', answer: String(h * r),
      hints: ['Pay = hours worked × rate per hour.'], explain: h + ' × £' + r + ' = £' + h * r + '.' }); }
    if (kind === 'ot') { var base = rnd(25, 38), over = rnd(2, 8), rr = pick([10, 12, 14, 16]), tot = base * rr + over * rr * 1.5;
      return Q({ tag: 'Wages and VAT', text: 'Ria earns £' + rr + ' an hour. She works ' + base + ' normal hours and ' + over + ' hours of overtime at time and a half (1.5 times the rate). How much does she earn, in pounds?', answer: T(tot),
        hints: ['Work out the normal pay and the overtime pay separately.', 'Overtime rate = £' + rr + ' × 1.5 = £' + T(rr * 1.5) + ' an hour.'], explain: 'Normal: ' + base + ' × ' + rr + ' = £' + base * rr + '. Overtime: ' + over + ' × £' + T(rr * 1.5) + ' = £' + T(over * rr * 1.5) + '. Total £' + T(tot) + '.' }); }
    var pr = pick([40, 50, 60, 80, 120, 150, 200, 250, 400]);
    if (kind === 'novat') { var inc = pr * 1.2; return Q({ tag: 'Wages and VAT', text: 'A price including 20% VAT is £' + T(inc) + '. What was the price <b>before</b> VAT, in pounds?', answer: String(pr),
      hints: ['£' + T(inc) + ' is 120% of the original price.', 'Divide by 1.2 to get back to 100%.'], explain: '£' + T(inc) + ' ÷ 1.2 = £' + pr + '.' }); }
    return Q({ tag: 'Wages and VAT', text: 'A phone case costs £' + pr + ' before VAT. VAT is 20%. What is the price <b>including</b> VAT, in pounds?', answer: T(pr * 1.2),
      hints: ['20% of £' + pr + ' is £' + T(pr * 0.2) + '.', 'Add the VAT to the price.'], explain: 'VAT = 20% of £' + pr + ' = £' + T(pr * 0.2) + '. Price with VAT = £' + pr + ' + £' + T(pr * 0.2) + ' = £' + T(pr * 1.2) + '.' });
  }
  function stmtPic(open, rows) {
    var y = 22, s = '<rect x="4" y="4" width="352" height="' + (30 + rows.length * 24 + 24) + '" rx="8" style="fill:var(--surface);stroke:var(--line);stroke-width:1.5"/>';
    s += txt(14, y, 'Date', 12, 'start', ';font-weight:700') + txt(70, y, 'Details', 12, 'start', ';font-weight:700') + txt(214, y, 'Out', 12, 'end', ';font-weight:700') + txt(272, y, 'In', 12, 'end', ';font-weight:700') + txt(346, y, 'Balance', 12, 'end', ';font-weight:700');
    s += '<line x1="8" y1="30" x2="352" y2="30" style="stroke:var(--line);stroke-width:1.5"/>'; y = 50;
    s += txt(14, y, '1 Mar', 12, 'start') + txt(70, y, 'Opening balance', 12, 'start') + txt(346, y, gbp(open), 12, 'end');
    var bal = open;
    rows.forEach(function (r) { y += 24; bal += (r.inn || 0) - (r.out || 0);
      s += txt(14, y, r.d, 12, 'start') + txt(70, y, r.t, 12, 'start') + (r.out ? txt(214, y, gbp(r.out), 12, 'end') : '') + (r.inn ? txt(272, y, gbp(r.inn), 12, 'end') : '') + txt(346, y, r.hide ? '?' : gbp(bal), 12, 'end', r.hide ? ';font-weight:700;fill:var(--accent)' : ''); });
    return svg(360, 50 + rows.length * 24 + 16, 'A bank statement with money in, money out and a running balance', s, 360);
  }
  function gStatement(lv) {
    var open = rnd(8, 30) * 10, items = [['Shop', 'Supermarket'], ['Train', 'Rail ticket'], ['Phone', 'Phone bill'], ['Cafe', 'Cafe']];
    var rows = [{ d: '3 Mar', t: 'Wages', inn: rnd(6, 14) * 50 }, { d: '5 Mar', t: pick(items)[1], out: rnd(4, 18) * 5 }, { d: '9 Mar', t: 'Rent', out: rnd(3, 6) * 50 }];
    if (lv >= 2) rows.push({ d: '12 Mar', t: 'Refund', inn: rnd(2, 9) * 5 });
    var final = open; rows.forEach(function (r) { final += (r.inn || 0) - (r.out || 0); });
    var totOut = 0; rows.forEach(function (r) { totOut += r.out || 0; });
    if (Math.random() < 0.5) return Q({ tag: 'Bank statements', text: 'Look at the bank statement. What is the <b>final balance</b>, in pounds?', pic: stmtPic(open, rows), answer: T(final),
      hints: ['Start from the opening balance. Add money in, take away money out.', 'Work down the rows one at a time.'], explain: 'Opening ' + gbp(open) + ' plus money in minus money out gives ' + gbp(final) + '.' });
    return Q({ tag: 'Bank statements', text: 'How much money was <b>paid out</b> in total on this statement, in pounds?', pic: stmtPic(open, rows), answer: T(totOut),
      hints: ['Only use the “Out” column. Ignore the “In” column.'], explain: 'Add the Out column: ' + gbp(totOut) + '.' });
  }
  function gBudgetS(lv) {
    var inc = rnd(15, 32) * 100, rent = Math.round(inc * pick([0.3, 0.35, 0.4]) / 10) * 10, bills = rnd(12, 24) * 10, food = rnd(25, 40) * 10, tr = rnd(5, 15) * 10, left = inc - rent - bills - food - tr;
    if (lv >= 2 && Math.random() < 0.5) { var pc = Math.round(rent / inc * 1000) / 10; return Q({ tag: 'Budgeting', text: 'Jo earns £' + fmt(inc) + ' a month. Rent is £' + rent + '. What percentage of the income is spent on rent? Give your answer to 1 decimal place.', answer: T(pc),
      hints: ['Percentage = part ÷ whole × 100.'], explain: rent + ' ÷ ' + inc + ' × 100 = ' + T(pc) + '%.' }); }
    return Q({ tag: 'Budgeting', text: 'Jo earns £' + fmt(inc) + ' a month. Rent £' + rent + ', bills £' + bills + ', food £' + food + ', travel £' + tr + '. How much is left to save each month, in pounds?', answer: String(left),
      hints: ['Add up all the spending first.', 'Subtract the total spending from the income.'], explain: 'Spending: ' + rent + ' + ' + bills + ' + ' + food + ' + ' + tr + ' = £' + (rent + bills + food + tr) + '. £' + fmt(inc) + ' − £' + (rent + bills + food + tr) + ' = £' + left + '.' });
  }

  /* ================= DAYS, DATES, TIME ZONES ================= */
  var MONTHS = [['January', 31], ['February', 28], ['March', 31], ['April', 30], ['May', 31], ['June', 30], ['July', 31], ['August', 31], ['September', 30], ['October', 31], ['November', 30], ['December', 31]];
  function gDays(lv) {
    var m = rnd(0, 10), d1 = rnd(5, MONTHS[m][1] - 2), span = rnd(6, lv <= 1 ? 25 : 45), tot = d1, mm = m, d = d1 + span;
    while (d > MONTHS[mm][1]) { d -= MONTHS[mm][1]; mm = (mm + 1) % 12; }
    if (Math.random() < 0.5) return mk({ tag: 'Days and dates', text: 'A project starts on <b>' + d1 + ' ' + MONTHS[m][0] + '</b> and takes <b>' + span + ' days</b>. On what date does it end?',
      hints: ['Count the days left in ' + MONTHS[m][0] + ' first: ' + MONTHS[m][1] + ' − ' + d1 + ' = ' + (MONTHS[m][1] - d1) + '.', MONTHS[m][0] + ' has ' + MONTHS[m][1] + ' days.'], explain: 'Counting on ' + span + ' days from ' + d1 + ' ' + MONTHS[m][0] + ' lands on ' + d + ' ' + MONTHS[mm][0] + '.' },
      mcStr(d + ' ' + MONTHS[mm][0], [(d + 1) + ' ' + MONTHS[mm][0], Math.max(1, d - 1) + ' ' + MONTHS[mm][0], d + ' ' + MONTHS[(mm + 1) % 12][0]]));
    var m2 = (m + 1) % 12, d2 = rnd(3, 25), ans = (MONTHS[m][1] - d1) + d2;
    return Q({ tag: 'Days and dates', text: 'How many days are there from <b>' + d1 + ' ' + MONTHS[m][0] + '</b> to <b>' + d2 + ' ' + MONTHS[m2][0] + '</b>?', answer: String(ans),
      hints: ['Days left in ' + MONTHS[m][0] + ' after the ' + d1 + 'th: ' + MONTHS[m][1] + ' − ' + d1 + '.', 'Then add the days into ' + MONTHS[m2][0] + '.'], explain: MONTHS[m][1] + ' − ' + d1 + ' = ' + (MONTHS[m][1] - d1) + ' days left in ' + MONTHS[m][0] + ', then ' + d2 + ' more. ' + (MONTHS[m][1] - d1) + ' + ' + d2 + ' = ' + ans + ' days.' });
  }
  var ZONES = [['Paris', 1], ['Athens', 2], ['Dubai', 4], ['Mumbai', 5], ['Bangkok', 7], ['Tokyo', 9], ['Sydney', 10], ['New York', -5], ['Chicago', -6], ['Los Angeles', -8]];
  function clock(h, m) { return (h < 10 ? '0' : '') + h + ':' + (m < 10 ? '0' : '') + (m || 0) + (m === undefined ? '0' : ''); }
  function t24(h) { h = ((h % 24) + 24) % 24; return (h < 10 ? '0' : '') + h + ':00'; }
  function gZone() {
    var z = pick(ZONES), h = rnd(7, 20), diff = z[1], ahead = diff > 0;
    var ans = t24(h + diff), rel = Math.abs(diff) + ' hour' + (Math.abs(diff) > 1 ? 's' : '') + (ahead ? ' ahead of' : ' behind');
    var wrong = [t24(h - diff), t24(h + diff + 1), t24(h + diff - 1)];
    return mk({ tag: 'Time zones', text: z[0] + ' is ' + rel + ' London. It is <b>' + t24(h) + '</b> in London. What time is it in ' + z[0] + '?',
      hints: [ahead ? 'Ahead means later, so add the hours.' : 'Behind means earlier, so subtract the hours.', 'Use the 24-hour clock. If you pass 24:00, start again from 00:00.'], explain: t24(h) + (ahead ? ' + ' : ' − ') + Math.abs(diff) + ' hours = ' + ans + '.' }, mcStr(ans, wrong));
  }

  /* ================= ANGLES ================= */
  function pt(cx, cy, r, deg) { var a = deg * Math.PI / 180; return [cx + r * Math.cos(a), cy - r * Math.sin(a)]; }
  function gAngName() {
    var a = pick([40, 60, 100, 120, 140]), ba = pick([0, 15]), vx = 130, vy = 118, L = 78;
    var letters = shuffle(['P', 'Q', 'R', 'S', 'T', 'X', 'Y', 'Z']).slice(0, 3), V = letters[0], A = letters[1], C = letters[2];
    var pA = pt(vx, vy, L, ba), pC = pt(vx, vy, L, ba + a), arcP = pt(vx, vy, 28, ba), arcQ = pt(vx, vy, 28, ba + a);
    var s = '<line x1="' + vx + '" y1="' + vy + '" x2="' + pA[0].toFixed(1) + '" y2="' + pA[1].toFixed(1) + '" style="' + STROKE + '"/><line x1="' + vx + '" y1="' + vy + '" x2="' + pC[0].toFixed(1) + '" y2="' + pC[1].toFixed(1) + '" style="' + STROKE + '"/>';
    s += '<path d="M' + arcP[0].toFixed(1) + ' ' + arcP[1].toFixed(1) + ' A28 28 0 0 0 ' + arcQ[0].toFixed(1) + ' ' + arcQ[1].toFixed(1) + '" style="fill:' + hs(35, 'band') + ';stroke:var(--accent);stroke-width:3"/>';
    var lA = pt(vx, vy, L + 14, ba), lC = pt(vx, vy, L + 14, ba + a);
    s += txt(vx - 14, vy + 18, V, 15, 'middle', ';font-weight:700') + txt(lA[0].toFixed(1), (lA[1] + 5).toFixed(1), A, 15, 'middle', ';font-weight:700') + txt(lC[0].toFixed(1), (lC[1] + 5).toFixed(1), C, 15, 'middle', ';font-weight:700');
    var ans = '∠' + A + V + C;
    return mk({ tag: 'Naming angles', text: 'Which name describes the <b>marked angle</b>? (The middle letter is the corner where the angle is.)', pic: svg(260, 140, 'Two lines meeting at point ' + V + ' with an angle marked, ends labelled ' + A + ' and ' + C, s, 260),
      hints: ['An angle is named with three letters. The middle letter is the point where the two lines meet.', 'Here the lines meet at ' + V + ', so ' + V + ' goes in the middle.'], explain: 'The lines meet at ' + V + ', so ' + V + ' is the middle letter: ' + ans + ' (or ∠' + C + V + A + ').' },
      mcStr(ans, ['∠' + V + A + C, '∠' + A + C + V, '∠' + V + C + A]));
  }
  function protPic(theta, flip) {
    var cx = 190, cy = 150, R = 140, s = '<path d="M' + (cx - R) + ' ' + cy + ' A' + R + ' ' + R + ' 0 0 1 ' + (cx + R) + ' ' + cy + ' Z" style="fill:' + hs(200, 'band') + ';fill-opacity:.5;stroke:var(--fg);stroke-width:1.5"/>';
    for (var d = 0; d <= 180; d += 10) { var p1 = pt(cx, cy, R, d), p2 = pt(cx, cy, R - 10, d), t = pt(cx, cy, R - 21, d), t2 = pt(cx, cy, R - 40, d);
      s += '<line x1="' + p1[0].toFixed(1) + '" y1="' + p1[1].toFixed(1) + '" x2="' + p2[0].toFixed(1) + '" y2="' + p2[1].toFixed(1) + '" style="stroke:var(--fg);stroke-width:1.5"/>' + txt(t[0].toFixed(1), (t[1] + 3).toFixed(1), String(d), 9) + txt(t2[0].toFixed(1), (t2[1] + 3).toFixed(1), String(180 - d), 9, 'middle', ';fill:var(--accent)'); }
    for (var m = 0; m <= 180; m += 5) { if (m % 10 === 0) continue; var q1 = pt(cx, cy, R, m), q2 = pt(cx, cy, R - 6, m); s += '<line x1="' + q1[0].toFixed(1) + '" y1="' + q1[1].toFixed(1) + '" x2="' + q2[0].toFixed(1) + '" y2="' + q2[1].toFixed(1) + '" style="stroke:var(--fg);stroke-width:1"/>'; }
    var rayDeg = flip ? 180 - theta : theta, ray = pt(cx, cy, R + 12, rayDeg);
    s += '<line x1="' + (cx - R - 14) + '" y1="' + cy + '" x2="' + (cx + R + 14) + '" y2="' + cy + '" style="stroke:var(--fg);stroke-width:1.5"/>';
    s += '<line x1="' + cx + '" y1="' + cy + '" x2="' + (flip ? cx - R - 14 : cx + R + 14) + '" y2="' + cy + '" style="stroke:var(--fg);stroke-width:4"/>';
    s += '<line x1="' + cx + '" y1="' + cy + '" x2="' + ray[0].toFixed(1) + '" y2="' + ray[1].toFixed(1) + '" style="stroke:#d33;stroke-width:3.5"/>';
    s += '<circle cx="' + cx + '" cy="' + cy + '" r="3.5" style="fill:var(--fg)"/>' + txt(flip ? cx - R - 10 : cx + R + 10, cy + 16, 'arm', 11, 'middle');
    return svg(380, 172, 'A protractor with a thick arm along the base line and a red line from the centre', s, 380);
  }
  function gProt(lv) {
    var theta = rnd(3, 34) * 5, flip = Math.random() < 0.5;
    if (lv <= 1 && theta % 10) theta -= 5, theta = Math.max(20, theta);
    return Q({ tag: 'Measuring angles with a protractor', text: 'Read the size of the angle between the thick <b>arm</b> and the red line, in degrees. ' + (flip ? 'The arm points to the <b>left</b>.' : 'The arm points to the <b>right</b>.'), pic: protPic(theta, flip), answer: String(theta),
      hints: ['Start at the 0 on the arm. Use the scale that begins with 0 on the arm.', 'The two scales run in opposite directions. Pick the one that has 0 on the arm.'], explain: 'The thick arm lies on 0° of one scale. Following that scale up to the red line gives ' + theta + '°.' });
  }
  function gCompSupp(lv) {
    var comp = Math.random() < 0.5, tot = comp ? 90 : 180, a = comp ? rnd(10, 80) : rnd(20, 160), nm = comp ? 'complementary' : 'supplementary';
    if (lv >= 2 && Math.random() < 0.6) { var k = pick([2, 3, 4]), x = Math.round(tot / (k + 1)); tot = x * (k + 1);
      return Q({ tag: 'Complementary and supplementary angles', text: 'Two ' + nm + ' angles are ' + 'x° and ' + k + 'x°. (They add up to ' + tot + '°.) Find <b>x</b>.', answer: String(x),
        hints: ['Write an equation: x + ' + k + 'x = ' + tot + '.', 'Combine the x terms first.'], explain: (k + 1) + 'x = ' + tot + ', so x = ' + tot + ' ÷ ' + (k + 1) + ' = ' + x + '.' }); }
    return Q({ tag: 'Complementary and supplementary angles', text: (comp ? 'Complementary angles add up to 90°.' : 'Supplementary angles add up to 180°.') + ' What angle is ' + nm + ' to <b>' + a + '°</b>?', answer: String(tot - a),
      hints: ['Subtract the angle from ' + tot + '°.'], explain: tot + '° − ' + a + '° = ' + (tot - a) + '°.' });
  }
  function arcPic(L, r1, r2) {
    var sc = 26, ax = 30, ay = 150, bx = ax + L * sc, xx = (L * L + r1 * r1 - r2 * r2) / (2 * L), hh = Math.sqrt(Math.max(0, r1 * r1 - xx * xx)), thA = Math.atan2(hh, xx), thB = Math.PI - Math.atan2(hh, L - xx);
    function arc(px, rr, th) { var a1 = th - 0.22, a2 = th + 0.22, x1 = px + rr * sc * Math.cos(a1), y1 = ay - rr * sc * Math.sin(a1), x2 = px + rr * sc * Math.cos(a2), y2 = ay - rr * sc * Math.sin(a2); return '<path d="M' + x1.toFixed(1) + ' ' + y1.toFixed(1) + ' A' + (rr * sc) + ' ' + (rr * sc) + ' 0 0 0 ' + x2.toFixed(1) + ' ' + y2.toFixed(1) + '" style="fill:none;stroke:var(--accent);stroke-width:2.5"/>'; }
    var s = '<line x1="' + ax + '" y1="' + ay + '" x2="' + bx + '" y2="' + ay + '" style="' + STROKE + '"/>' + arc(ax, r1, thA) + arc(bx, r2, thB);
    s += '<circle cx="' + ax + '" cy="' + ay + '" r="4" style="fill:var(--fg)"/><circle cx="' + bx + '" cy="' + ay + '" r="4" style="fill:var(--fg)"/>' + txt(ax, ay + 20, 'A', 14) + txt(bx, ay + 20, 'B', 14) + txt((ax + bx) / 2, ay + 20, L + ' cm', 12);
    return svg(260, 176, 'A base line AB with two arcs, one from each end, crossing above the line', s, 260);
  }
  function gConstruct(lv) {
    var kind = pick(['exists', 'which', 'arcs']);
    if (kind === 'exists') { var a = rnd(3, 9), b = rnd(3, 9), ok = Math.random() < 0.5, c = ok ? rnd(Math.abs(a - b) + 1, a + b - 1) : (Math.random() < 0.5 ? a + b + rnd(1, 3) : Math.max(1, Math.abs(a - b) - rnd(0, 1)));
      if (ok && c <= Math.abs(a - b)) c = Math.abs(a - b) + 1; ok = (a + b > c) && (a + c > b) && (b + c > a);
      return mk({ tag: 'Constructing triangles', text: 'Can a triangle be drawn with sides <b>' + a + ' cm, ' + b + ' cm and ' + c + ' cm</b>?', hints: ['The two shorter sides must add up to more than the longest side, or the arcs will not meet.'],
        explain: ok ? 'The two shorter sides add to more than the longest, so the arcs meet and the triangle can be drawn.' : 'The two shorter sides do not add to more than the longest, so the arcs cannot meet. No triangle.' }, { options: ['Yes', 'No'], answer: ok ? 'Yes' : 'No' }); }
    if (kind === 'which') return mk({ tag: 'Constructing triangles', text: 'Which measurements are <b>enough</b> to construct one exact triangle?', hints: ['Three angles give the shape but not the size.', 'Sides and angles together can fix both the shape and the size.'],
      explain: 'Three sides (SSS), two sides and the angle between them (SAS) or two angles and a side (ASA) fix one exact triangle. Three angles only give the shape, not the size.' },
      mcStr('Two sides and the angle between them', ['Three angles only', 'One side and one angle', 'Two angles only']));
    var L = pick([5, 6, 7]), r1 = pick([4, 5]), r2 = pick([4, 5]);
    return mk({ tag: 'Constructing triangles', text: 'To construct a triangle with sides ' + L + ' cm, ' + r1 + ' cm and ' + r2 + ' cm, you draw the ' + L + ' cm base AB first. What do you draw next?', pic: arcPic(L, r1, r2),
      hints: ['You need a third corner that is ' + r1 + ' cm from A and ' + r2 + ' cm from B.', 'A compass draws a curve at a fixed distance from a point.'], explain: 'Set the compass to ' + r1 + ' cm and draw an arc from A. Then set it to ' + r2 + ' cm and draw an arc from B. Where the arcs cross is the third corner.' },
      mcStr('Two arcs with a compass, one from each end of AB', ['A straight line at 90° to AB', 'A circle with AB as the diameter', 'Two lines at 60° from AB']));
  }
  function gSolidKind() {
    var base = pick([['triangular', 3], ['square', 4], ['pentagonal', 5], ['hexagonal', 6]]), prism = Math.random() < 0.5, n = base[1], nm = base[0] + ' ' + (prism ? 'prism' : 'pyramid');
    var f = prism ? n + 2 : n + 1, v = prism ? 2 * n : n + 1, e = prism ? 3 * n : 2 * n, pick1 = pick(['faces', 'vertices', 'edges']), ans = pick1 === 'faces' ? f : pick1 === 'vertices' ? v : e;
    if (Math.random() < 0.4) return mk({ tag: 'Prisms and pyramids', text: 'A solid has the <b>same cross-section</b> all the way along its length, and its end faces are ' + base[0] + (n === 4 ? 's' : ' shapes') + '. What kind of solid is it?', hints: ['A prism has the same cross-section all the way through. A pyramid tapers to a point.'],
      explain: 'Same cross-section all the way along means a prism: a ' + base[0] + ' prism.' }, mcStr(base[0] + ' prism', [base[0] + ' pyramid', 'cylinder', 'cone']));
    return Q({ tag: 'Prisms and pyramids', text: 'How many <b>' + pick1 + '</b> does a ' + nm + ' have?', answer: String(ans),
      hints: [prism ? 'A prism has 2 end faces and ' + n + ' side faces.' : 'A pyramid has 1 base and ' + n + ' sloping faces.', 'Euler’s check: faces + vertices − edges = 2.'], explain: 'A ' + nm + ' has ' + f + ' faces, ' + v + ' vertices and ' + e + ' edges. Check: ' + f + ' + ' + v + ' − ' + e + ' = 2.' });
  }

  /* ================= DATA HANDLING ================= */
  function gBias() {
    var qs = [['the favourite sport of pupils in the school', 'Ask 40 pupils chosen at random from the school roll', ['Ask only the pupils in the football team', 'Ask 3 of your friends', 'Ask the pupils waiting outside the gym']],
      ['how people in a town travel to work', 'Ask 100 people chosen at random from the electoral roll', ['Ask people at the bus station', 'Ask only your neighbours', 'Ask people leaving a cycle shop']],
      ['the favourite lunch of pupils in S2', 'Ask a random sample of S2 pupils from every class', ['Ask only pupils in the lunch queue', 'Ask the first 5 pupils you see', 'Ask only your own class']],
      ['how many hours teenagers sleep', 'Survey a random sample of teenagers from different schools', ['Survey only members of the school choir', 'Survey only pupils who arrive late', 'Survey one teenager']]], q = pick(qs);
    return mk({ tag: 'Fair samples', text: 'You want to find out <b>' + q[0] + '</b>. Which sample is the <b>fairest</b>?', hints: ['A fair sample is chosen at random, covers different people, and is not too small.'],
      explain: 'A random sample that covers different people gives every person an equal chance and avoids bias. The other samples leave out important groups or are too small.' }, mcStr(q[1], q[2]));
  }
  function gSampleSize() {
    var a = pick([10, 20, 30]), b = pick([100, 150, 200]), swap = Math.random() < 0.5, x = swap ? b : a, y = swap ? a : b;
    return mk({ tag: 'Sample size', text: 'Survey A asks <b>' + x + '</b> people chosen at random. Survey B asks <b>' + y + '</b> people chosen at random. Which survey is likely to be <b>more reliable</b>?', hints: ['A larger random sample is closer to the whole population.'],
      explain: 'A bigger random sample is more likely to represent everybody, so Survey ' + (x > y ? 'A' : 'B') + ' is more reliable.' }, { options: ['Survey A', 'Survey B', 'They are equally reliable'], answer: x > y ? 'Survey A' : 'Survey B' });
  }
  function gSurveyQ() {
    var ts = [['school uniform', 'Do you agree that the awful school uniform should be changed?', 'What do you think about the school uniform?'], ['homework', 'Surely too much homework is bad for you, isn’t it?', 'How much time do you spend on homework each night?'],
      ['school lunches', 'Don’t you think the new lunch menu is brilliant?', 'How would you rate the new lunch menu: poor, fair, good or very good?']], t = pick(ts);
    return mk({ tag: 'Survey questions', text: 'You are writing a questionnaire about <b>' + t[0] + '</b>. Which question is <b>fair</b> (not leading)?', hints: ['A leading question pushes people towards one answer. A fair question lets people give their own view.'],
      explain: 'A fair question uses neutral words. The other question pushes the person towards one answer.' }, { options: shuffle([t[2], t[1]]), answer: t[2] });
  }
  function tallyMarks(n) { var s = '', x = 0; for (var g = 0; g < Math.floor(n / 5); g++) { for (var i = 0; i < 4; i++) s += '<line x1="' + (x + i * 6) + '" y1="-10" x2="' + (x + i * 6) + '" y2="8" style="stroke:var(--fg);stroke-width:2"/>'; s += '<line x1="' + (x - 3) + '" y1="5" x2="' + (x + 21) + '" y2="-7" style="stroke:var(--fg);stroke-width:2"/>'; x += 34; } for (var j = 0; j < n % 5; j++) s += '<line x1="' + (x + j * 6) + '" y1="-10" x2="' + (x + j * 6) + '" y2="8" style="stroke:var(--fg);stroke-width:2"/>'; return s; }
  function gTally() {
    var cats = pick([['Cat', 'Dog', 'Fish', 'Rabbit'], ['Bus', 'Car', 'Walk', 'Cycle'], ['Red', 'Blue', 'Green', 'Yellow']]), vals = cats.map(function () { return rnd(3, 17); }), s = '';
    cats.forEach(function (c, i) { var y = 24 + i * 32; s += txt(10, y + 4, c, 13, 'start') + '<g transform="translate(90 ' + y + ')">' + tallyMarks(vals[i]) + '</g>'; });
    var i = rnd(0, 3), j = (i + rnd(1, 3)) % 4, tot = vals.reduce(function (a, b) { return a + b; }, 0), kind = pick(['one', 'total', 'diff']);
    var text = kind === 'one' ? 'How many chose <b>' + cats[i] + '</b>?' : kind === 'total' ? 'How many people were asked <b>altogether</b>?' : 'How many <b>more</b> chose ' + cats[i] + ' than ' + cats[j] + '? (If fewer, give a negative number.)';
    var ans = kind === 'one' ? vals[i] : kind === 'total' ? tot : vals[i] - vals[j];
    return Q({ tag: 'Tally charts', text: 'Look at the tally chart. ' + text, pic: svg(300, 130, 'A tally chart for ' + cats.join(', '), s, 300), answer: String(ans),
      hints: ['Each group of five is four lines with one line across them.', 'Count the groups of 5, then add the single lines.'], explain: kind === 'one' ? cats[i] + ' = ' + vals[i] + '.' : kind === 'total' ? vals.join(' + ') + ' = ' + tot + '.' : vals[i] + ' − ' + vals[j] + ' = ' + ans + '.' });
  }
  function gTwoWay() {
    var a = rnd(5, 18), b = rnd(5, 18), c = rnd(5, 18), d = rnd(5, 18), rows = ['Boys', 'Girls'], cols = ['Walk', 'Bus'], v = [[a, b], [c, d]], hide = pick([[0, 0], [0, 1], [1, 0], [1, 1]]);
    var s = '', cx = [110, 170, 230], i, j;
    s += txt(cx[0] + 0, 22, cols[0], 13, 'middle', ';font-weight:700') + txt(cx[1], 22, cols[1], 13, 'middle', ';font-weight:700') + txt(cx[2], 22, 'Total', 13, 'middle', ';font-weight:700');
    for (i = 0; i < 2; i++) { s += txt(10, 50 + i * 28, rows[i], 13, 'start', ';font-weight:700'); for (j = 0; j < 2; j++) s += txt(cx[j], 50 + i * 28, (i === hide[0] && j === hide[1]) ? '?' : String(v[i][j]), 14, 'middle', (i === hide[0] && j === hide[1]) ? ';font-weight:700;fill:var(--accent)' : ''); s += txt(cx[2], 50 + i * 28, String(v[i][0] + v[i][1]), 14); }
    s += txt(10, 106, 'Total', 13, 'start', ';font-weight:700') + txt(cx[0], 106, String(a + c), 14) + txt(cx[1], 106, String(b + d), 14) + txt(cx[2], 106, String(a + b + c + d), 14);
    s += '<line x1="6" y1="30" x2="260" y2="30" style="stroke:var(--line);stroke-width:1.5"/><line x1="6" y1="92" x2="260" y2="92" style="stroke:var(--line);stroke-width:1.5"/><line x1="140" y1="6" x2="140" y2="116" style="stroke:var(--line);stroke-width:1" opacity="0"/>';
    return Q({ tag: 'Two-way tables', text: 'The two-way table shows how pupils travel to school. Find the <b>missing number</b> (the ?).', pic: svg(270, 120, 'A two-way table of boys and girls against walk and bus with one missing value', s, 300), answer: String(v[hide[0]][hide[1]]),
      hints: ['Each row adds up to its total, and each column adds up to its total.', 'Use the row or the column that has the ? and only one other number missing.'], explain: 'Use the totals. The missing number is ' + v[hide[0]][hide[1]] + '.' });
  }
  function gTrend() {
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], shape = pick(['up', 'down', 'peak', 'dip']), base = rnd(20, 40), vals = [];
    for (var i = 0; i < 6; i++) { var t = i / 5, v = shape === 'up' ? base + t * 40 : shape === 'down' ? base + 40 - t * 40 : shape === 'peak' ? base + (t < 0.5 ? t : 1 - t) * 80 : base + 40 - (t < 0.5 ? t : 1 - t) * 80; vals.push(Math.round(v / 5) * 5 + rnd(-1, 1) * 0); }
    var mx = 120, mn = 0, s = '', pts = [];
    for (var k = 0; k <= 4; k++) { var yy = 120 - k * 25; s += '<line x1="40" y1="' + yy + '" x2="320" y2="' + yy + '" style="stroke:var(--line);stroke-width:1"/>' + txt(32, yy + 4, String(k * 25), 10, 'end'); }
    vals.forEach(function (v, ii) { var x = 60 + ii * 50, y = 120 - v / 100 * 100; pts.push(x + ',' + y); s += '<circle cx="' + x + '" cy="' + y + '" r="4" style="fill:var(--accent)"/>' + txt(x, 138, months[ii], 11); });
    s += '<polyline points="' + pts.join(' ') + '" style="fill:none;stroke:var(--accent);stroke-width:2.5"/>';
    var names = { up: 'It rises steadily', down: 'It falls steadily', peak: 'It rises, then falls', dip: 'It falls, then rises' };
    return mk({ tag: 'Trends in graphs', text: 'The line graph shows the number of ice creams sold each month. Which sentence <b>describes the trend</b>?', pic: svg(340, 148, 'A line graph over six months. ' + names[shape], s, 340), hints: ['Follow the line from left to right. Is it going up, going down, or changing direction?'],
      explain: names[shape] + '.' }, mcStr(names[shape], Object.keys(names).filter(function (x) { return x !== shape; }).map(function (x) { return names[x]; })));
  }
  function gMislead() {
    var items = [['A bar chart’s vertical axis starts at 80 instead of 0.', 'Small differences look much bigger than they are'], ['A graph has no labels or title on its axes.', 'Nobody can tell what the numbers mean'], ['A pictogram uses a big picture for one value and a tiny picture for another.', 'The sizes of the pictures make the values look different from the data'],
      ['A line graph squashes the scale so a big rise looks flat.', 'A real change looks smaller than it is']], t = pick(items);
    return mk({ tag: 'Misleading graphs', text: t[0] + ' Why can this be <b>misleading</b>?', hints: ['Think about what a reader sees at a glance compared with the real numbers.'], explain: t[1] + '. A good graph has a fair scale, clear labels and a title.' },
      mcStr(t[1], items.filter(function (x) { return x !== t; }).map(function (x) { return x[1]; })));
  }
  function gRelFreq(lv) {
    var n = pick([50, 100, 200, 250, 500]), p = rnd(2, 8) / 10, x = Math.round(n * p);
    if (Math.random() < 0.5) return Q({ tag: 'Relative frequency', text: 'A spinner is spun ' + n + ' times and lands on blue ' + x + ' times. What is the <b>relative frequency</b> of blue? Give a decimal.', answer: T(x / n),
      hints: ['Relative frequency = number of times the result happens ÷ total number of trials.'], explain: x + ' ÷ ' + n + ' = ' + T(x / n) + '.' });
    var pr = pick([0.1, 0.2, 0.25, 0.3, 0.4, 0.5]), tr = pick([100, 200, 300, 400, 500]);
    return Q({ tag: 'Expected outcomes', text: 'The probability that a drawing pin lands point up is ' + pr + '. If it is dropped <b>' + tr + '</b> times, how many times would you expect it to land point up?', answer: T(pr * tr),
      hints: ['Expected number = probability × number of trials.'], explain: pr + ' × ' + tr + ' = ' + T(pr * tr) + '.' });
  }

  /* ================= NUMBER SKILLS ================= */
  function gPctChg(lv) {
    var inc = Math.random() < 0.5, p = pick(lv <= 1 ? [10, 20, 25, 50] : [5, 10, 15, 20, 25, 30, 35]), v = pick([20, 40, 60, 80, 120, 200, 240, 300, 400]), ch = v * p / 100, nv = inc ? v + ch : v - ch;
    return Q({ tag: 'Percentage increase and decrease', text: 'A price of £' + v + ' is ' + (inc ? 'increased' : 'reduced') + ' by <b>' + p + '%</b>. What is the new price, in pounds?', answer: T(nv),
      hints: ['Find ' + p + '% of £' + v + ' first.', inc ? 'Add it on to the original price.' : 'Take it off the original price.'], explain: p + '% of £' + v + ' = £' + T(ch) + '. £' + v + (inc ? ' + ' : ' − ') + '£' + T(ch) + ' = £' + T(nv) + '.' });
  }
  function gImproper(lv) {
    var d = pick([3, 4, 5, 6, 8]), w = rnd(1, lv <= 1 ? 4 : 7), n = rnd(1, d - 1), imp = w * d + n, mixed = w + ' ' + n + '/' + d;
    if (Math.random() < 0.5) return mk({ tag: 'Improper fractions and mixed numbers', text: 'Write <b>' + imp + '/' + d + '</b> as a mixed number.', hints: ['Divide ' + imp + ' by ' + d + '. The whole part is the answer, the remainder is the new numerator.'], explain: imp + ' ÷ ' + d + ' = ' + w + ' remainder ' + n + ', so ' + imp + '/' + d + ' = ' + mixed + '.' },
      mcStr(mixed, [(w + 1) + ' ' + n + '/' + d, w + ' ' + (n + 1) + '/' + d, n + ' ' + w + '/' + d]));
    return mk({ tag: 'Improper fractions and mixed numbers', text: 'Write <b>' + mixed + '</b> as an improper fraction.', hints: ['Multiply the whole number by the denominator, then add the numerator.'], explain: w + ' × ' + d + ' + ' + n + ' = ' + imp + ', so ' + mixed + ' = ' + imp + '/' + d + '.' },
      mcStr(imp + '/' + d, [(imp + d) + '/' + d, (w + n) + '/' + d, (imp - 1) + '/' + d]));
  }
  function r1sf(x) { var e = Math.floor(Math.log10(Math.abs(x))), p = Math.pow(10, e); return Math.round(x / p) * p; }
  function gEst1sf(lv) {
    var kind = pick(['mul', 'div']), a, b, ans, txtq;
    if (kind === 'mul') { a = pick(lv <= 1 ? [38, 47, 62, 71, 83, 19, 52] : [4.8, 6.1, 38.7, 51.2, 0.48, 19.6, 297]); b = pick(lv <= 1 ? [21, 32, 48, 19, 29] : [5.2, 29, 2.9, 41, 9.8, 3.1]); ans = r1sf(a) * r1sf(b); txtq = a + ' × ' + b; }
    else { b = pick([19, 21, 29, 31, 48, 52, 4.8, 5.1]); a = pick([612, 389, 4180, 7800, 891, 2960, 2390]); ans = r1sf(a) / r1sf(b); txtq = fmt(a) + ' ÷ ' + b; }
    if (ans !== Math.round(ans * 100) / 100) return gEst1sf(lv);
    return Q({ tag: 'Estimating by rounding', text: 'Estimate <b>' + txtq + '</b> by rounding each number to <b>1 significant figure</b>.', answer: T(ans),
      hints: ['Round each number to 1 significant figure first.', 'Then do the easy calculation with the rounded numbers.'], explain: txtq + ' ≈ ' + fmt(r1sf(a)) + (kind === 'mul' ? ' × ' : ' ÷ ') + fmt(r1sf(b)) + ' = ' + fmt(ans) + '.' });
  }
  function gAreaConv(lv) {
    var kind = pick(lv >= 3 ? ['a1', 'a2', 'v1', 'v2'] : ['a1', 'a2', 'v1']);
    if (kind === 'a1') { var v = pick([2, 3, 4.5, 0.5, 7]); return Q({ tag: 'Converting units of area and volume', text: 'Convert <b>' + v + ' m²</b> to cm².', answer: String(v * 10000), hints: ['1 m = 100 cm, so 1 m² = 100 × 100 cm².'], explain: '1 m² = 10,000 cm², so ' + v + ' m² = ' + fmt(v * 10000) + ' cm².' }); }
    if (kind === 'a2') { var w = pick([200, 350, 40, 1200]); return Q({ tag: 'Converting units of area and volume', text: 'Convert <b>' + w + ' mm²</b> to cm².', answer: T(w / 100), hints: ['1 cm = 10 mm, so 1 cm² = 10 × 10 mm² = 100 mm².'], explain: '1 cm² = 100 mm², so ' + w + ' ÷ 100 = ' + T(w / 100) + ' cm².' }); }
    if (kind === 'v1') { var c = pick([2, 3, 5, 0.5]); return Q({ tag: 'Converting units of area and volume', text: 'Convert <b>' + c + ' litres</b> to cm³. (1 litre = 1,000 cm³.)', answer: String(c * 1000), hints: ['Multiply the litres by 1,000.'], explain: c + ' × 1,000 = ' + fmt(c * 1000) + ' cm³.' }); }
    var m3 = pick([2, 3, 0.5, 1.5]); return Q({ tag: 'Converting units of area and volume', text: 'Convert <b>' + m3 + ' m³</b> to cm³.', answer: String(m3 * 1000000), hints: ['1 m = 100 cm, so 1 m³ = 100 × 100 × 100 cm³.'], explain: '1 m³ = 1,000,000 cm³, so ' + m3 + ' m³ = ' + fmt(m3 * 1000000) + ' cm³.' });
  }

  /* ================= QUADRATICS ================= */
  function lin(v, k) { return k >= 0 ? v + ' + ' + k : v + ' ' + M + ' ' + (-k); }
  function quad(b, c) { return 'x² ' + (b >= 0 ? '+ ' + (b === 1 ? '' : b) : M + ' ' + (b === -1 ? '' : -b)) + 'x ' + (c >= 0 ? '+ ' + c : M + ' ' + (-c)); }
  function gFactQuad() {
    var p = pick([-6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7]), q = pick([-7, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 8]);
    var b = p + q, c = p * q, ans = '(' + lin('x', p) + ')(' + lin('x', q) + ')';
    var wrong = ['(' + lin('x', -p) + ')(' + lin('x', -q) + ')', '(' + lin('x', p) + ')(' + lin('x', -q) + ')', '(' + lin('x', p + 1) + ')(' + lin('x', q - 1) + ')'];
    return mk({ tag: 'Factorising quadratics', text: 'Factorise <b>' + quad(b, c) + '</b>.', hints: ['Find two numbers that multiply to give ' + c + ' and add to give ' + b + '.', 'Put those numbers in the brackets: (x + ...)(x + ...).'], explain: 'The numbers are ' + p + ' and ' + q + ': ' + p + ' × ' + q + ' = ' + c + ' and ' + p + ' + ' + q + ' = ' + b + '. So ' + quad(b, c) + ' = ' + ans + '.' }, mcStr(ans, wrong));
  }
  function gSolveQuad() {
    var p = pick([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6]), q = pick([-6, -3, -2, 1, 2, 3, 4, 7]);
    if (p === q) q += 1; if (q === 0) q = 1;
    var b = -(p + q), c = p * q, lo = Math.min(p, q), hi = Math.max(p, q), f = function (a) { return 'x = ' + (a < 0 ? M + (-a) : a); };
    var ans = f(lo) + ' or ' + f(hi);
    return mk({ tag: 'Solving quadratics', text: 'Solve <b>' + quad(b, c) + ' = 0</b>.', hints: ['Factorise first: find two numbers that multiply to ' + c + ' and add to ' + b + '.', 'Then set each bracket equal to 0.'], explain: quad(b, c) + ' = (x ' + (-p >= 0 ? '+ ' + (-p) : M + ' ' + p) + ')(x ' + (-q >= 0 ? '+ ' + (-q) : M + ' ' + q) + ') = 0, so ' + ans + '.' },
      mcStr(ans, [f(-lo) + ' or ' + f(-hi), f(lo) + ' or ' + f(-hi), f(lo + 1) + ' or ' + f(hi - 1)]));
  }

  /* ================= WIRING ================= */
  var MAP = {
    802: [[gPowWrite, 'e', 1], [gMFStory, 'm', 1]],
    821: [[gPowWrite, 'e', 2], [gIndexLaw, 'm', 2], [gEst1sf, 'm', 2]],
    841: [[gEst1sf, 'm', 3], [gIndexLaw, 'm', 3]],
    803: [[gImproper, 'e', 1]],
    804: [[gPctChg, 'e', 1]],
    806: [[gWageVat, 'e', 1], [gStatement, 'm', 1]],
    824: [[gWageVat, 'e', 2], [gStatement, 'm', 2], [gBudgetS, 'm', 2]],
    842: [[gBudgetS, 'm', 3], [gWageVat, 'h', 3]],
    807: [[gDays, 'e', 1], [gZone, 'm', 1]],
    825: [[gDays, 'e', 2], [gZone, 'm', 2]],
    810: [[gAngName, 'e', 1], [gProt, 'e', 1], [gCompSupp, 'e', 1], [gConstruct, 'm', 1]],
    829: [[gCompSupp, 'm', 2], [gConstruct, 'm', 2], [gAngName, 'e', 2]],
    811: [[gSolidKind, 'm', 1]],
    826: [[gAreaConv, 'm', 2]],
    844: [[gAreaConv, 'm', 3]],
    812: [[gBias, 'e', 1], [gSampleSize, 'e', 1], [gSurveyQ, 'e', 1], [gTally, 'e', 1], [gTwoWay, 'm', 1], [gTrend, 'm', 1], [gMislead, 'm', 1]],
    832: [[gBias, 'e', 2], [gSampleSize, 'e', 2], [gSurveyQ, 'e', 2], [gTwoWay, 'm', 2], [gTrend, 'm', 2], [gMislead, 'm', 2], [gRelFreq, 'm', 2]],
    852: [[gBias, 'e', 3], [gSampleSize, 'e', 3], [gTrend, 'm', 3], [gMislead, 'm', 3], [gRelFreq, 'm', 3]],
    845: [[gFactQuad, 'h', 3]],
    846: [[gSolveQuad, 'h', 3]]
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
  BT.bmx2 = { pics: { protPic: protPic, arcPic: arcPic, stmtPic: stmtPic, pw: pw }, MAP: MAP, makers: { gPowWrite: gPowWrite, gIndexLaw: gIndexLaw, gMFStory: gMFStory, gWageVat: gWageVat, gStatement: gStatement, gBudgetS: gBudgetS, gDays: gDays, gZone: gZone, gAngName: gAngName, gProt: gProt, gCompSupp: gCompSupp, gConstruct: gConstruct, gSolidKind: gSolidKind,
    gBias: gBias, gSampleSize: gSampleSize, gSurveyQ: gSurveyQ, gTally: gTally, gTwoWay: gTwoWay, gTrend: gTrend, gMislead: gMislead, gRelFreq: gRelFreq, gPctChg: gPctChg, gImproper: gImproper, gEst1sf: gEst1sf, gAreaConv: gAreaConv, gFactQuad: gFactQuad, gSolveQuad: gSolveQuad } };
})();
