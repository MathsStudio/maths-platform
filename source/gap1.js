/* gap1.js: new practice-question makers found missing when the 10-minute mental arithmetic tests (age 10 to 11) were checked
   against the site. Number, calculation, fraction, percentage, money, time and measure questions for P5 to S3.
   Makers are added through S.extraMakers, so they are mixed into the practice sets, warm-ups and games beside the existing ones. */
(function () {
  'use strict';
  var S = Studio, H = S.h, K = S.kit, Q = K.Q, rnd = H.rnd, pick = H.pick, shuffle = H.shuffle, T = H.trimNum, BT = window.BT;
  if (!BT || !BT.svg || !BT.txt) return;
  var svg = BT.svg, txt = BT.txt;
  function mcStr(ans, wrong) {
    var out = [ans]; wrong.forEach(function (w) { if (out.length < 4 && out.indexOf(w) < 0) out.push(w); });
    return { options: shuffle(out), answer: ans };
  }
  function mk(o, m) { o.type = 'mc'; o.options = m.options; o.answer = m.answer; return Q(o); }
  function fmt(n) { return Math.abs(n) >= 10000 ? String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : T(Math.round(n * 1000000) / 1000000); }
  function r6(x) { return Math.round(x * 1000000) / 1000000; }
  function gbp(x) { return '£' + (Math.round(x * 100) % 100 === 0 ? String(Math.round(x)) : (Math.round(x * 100) / 100).toFixed(2)); }
  function gcd(a, b) { return b ? gcd(b, a % b) : Math.abs(a); }
  var M = '−';

  /* ---------- number lines ---------- */
  function lineSvg(lo, hi, div, val, labelAll) {
    var x0 = 30, x1 = 330, y = 62, s = '<line x1="' + x0 + '" y1="' + y + '" x2="' + x1 + '" y2="' + y + '" style="stroke:var(--fg);stroke-width:3"/>';
    for (var i = 0; i <= div; i++) {
      var x = x0 + (x1 - x0) * i / div, big = (i === 0 || i === div);
      s += '<line x1="' + x + '" y1="' + (y - (big ? 11 : 7)) + '" x2="' + x + '" y2="' + (y + (big ? 11 : 7)) + '" style="stroke:var(--fg);stroke-width:' + (big ? 3 : 2) + '"/>';
    }
    s += txt(x0, y + 30, String(lo).replace('-', M), 15, 'middle', ';font-weight:700') + txt(x1, y + 30, String(hi).replace('-', M), 15, 'middle', ';font-weight:700');
    if (labelAll) for (var j = 1; j < div; j++) s += txt(x0 + (x1 - x0) * j / div, y + 30, T(r6(lo + (hi - lo) * j / div)).replace('-', M), 12, 'middle');
    var ax = x0 + (x1 - x0) * (val - lo) / (hi - lo);
    s += '<line x1="' + ax + '" y1="10" x2="' + ax + '" y2="' + (y - 14) + '" style="stroke:var(--accent);stroke-width:3"/><polygon points="' + (ax - 7) + ',' + (y - 22) + ' ' + (ax + 7) + ',' + (y - 22) + ' ' + ax + ',' + (y - 10) + '" style="fill:var(--accent)"/>';
    return svg(360, 108, 'A number line from ' + lo + ' to ' + hi + ' with an arrow', s, 380);
  }
  function gNumLine(lv) {
    var kind = lv <= 1 ? pick(['tenths', 'steps']) : lv === 2 ? pick(['tenths', 'steps', 'neg']) : pick(['tenths', 'steps', 'neg', 'negdec']);
    var lo, hi, div, val;
    if (kind === 'tenths') { lo = rnd(lv <= 1 ? 1 : 3, 30); hi = lo + 1; div = 10; val = lo + rnd(1, 9) / 10; }
    else if (kind === 'steps') { var st = pick([2, 5, 10, 20]); div = pick([4, 5, 10]); lo = rnd(0, 4) * st * div / 2; hi = lo + st * div; var k = rnd(1, div - 1); val = lo + k * st; }
    else if (kind === 'neg') { var s2 = pick([1, 2, 5]); div = 10; lo = -5 * s2; hi = 5 * s2; var kk = rnd(1, 9); if (kk === 5) kk = 3; val = lo + kk * s2; }
    else { lo = -1; hi = 0; div = 10; val = -rnd(1, 9) / 10; }
    val = r6(val);
    return Q({ tag: 'Number lines', text: 'What number is the <b>arrow</b> pointing to?', pic: lineSvg(lo, hi, div, val), answer: T(val),
      hints: ['Work out how much each small step is worth: the distance between the two labelled ends, shared by the number of gaps.', 'Count the steps from the left end to the arrow, then add them on.'],
      explain: 'Each step is ' + T(r6((hi - lo) / div)) + '. The arrow is at ' + T(val) + '.' });
  }

  /* ---------- numbers in words ---------- */
  var ONES = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  var TENS = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  function below1000(n) {
    var h = Math.floor(n / 100), r = n % 100, out = '';
    if (h) out += ONES[h] + ' hundred' + (r ? ' and ' : '');
    if (r) out += r < 20 ? ONES[r] : TENS[Math.floor(r / 10)] + (r % 10 ? '-' + ONES[r % 10] : '');
    return out;
  }
  function words(n) {
    if (n === 0) return 'zero';
    var th = Math.floor(n / 1000), r = n % 1000, out = '';
    if (th) out += below1000(th) + ' thousand' + (r ? (r < 100 ? ' and ' : ', ') : '');
    if (r) out += below1000(r);
    return out;
  }
  function gWords(lv) {
    var max = lv <= 1 ? 99999 : 999999, n = rnd(1, 3) === 1 ? rnd(10, 99) * 1000 + rnd(1, 99) : rnd(10000, max);
    if (Math.random() < 0.35) n = Math.floor(n / 1000) * 1000 + rnd(1, 90);
    if (n % 1000 === 0) n += 7;
    if (Math.random() < 0.5) return Q({ tag: 'Numbers in words', text: 'Write this number in figures: <b>' + words(n) + '</b>.', answer: String(n),
      hints: ['Say the thousands first, then the rest.', 'A place with nothing in it needs a zero.'], explain: words(n) + ' = ' + fmt(n) + '.' });
    var wrong = [n + 10, n - 10 + (n % 100 < 10 ? 100 : 0), Math.floor(n / 1000) * 10000 + n % 1000, n + 1000].map(function (x) { return fmt(x); });
    return mk({ tag: 'Numbers in words', text: 'Which of these is <b>' + words(n) + '</b>?', hints: ['Say the thousands first, then the hundreds, tens and ones.'], explain: words(n) + ' = ' + fmt(n) + '.' }, mcStr(fmt(n), wrong));
  }

  /* ---------- value of a digit ---------- */
  var PLACE = ['ones', 'tens', 'hundreds', 'thousands', 'ten thousands', 'hundred thousands', 'millions'];
  function gDigit(lv) {
    var len = lv <= 1 ? 6 : 7, digits = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]).slice(0, len), dec = lv >= 2 && Math.random() < 0.4;
    var nd = dec ? 2 : 0, ip = digits.slice(0, len - nd), dp = digits.slice(len - nd), pos = rnd(0, digits.length - 1), d = digits[pos];
    var str = ip.join('').replace(/\B(?=(\d{3})+(?!\d))/g, ',') + (nd ? '.' + dp.join('') : '');
    var placeExp = pos < ip.length ? ip.length - 1 - pos : -(pos - ip.length + 1), val = d * Math.pow(10, placeExp);
    var valTxt = placeExp >= 0 ? fmt(val) : T(r6(val));
    if (Math.random() < 0.5) return Q({ tag: 'Value of a digit', text: 'What is the <b>value</b> of the <b>' + d + '</b> in <b>' + str + '</b>?', answer: String(placeExp >= 0 ? val : T(r6(val))),
      hints: ['Find which column the ' + d + ' is in.', 'Multiply the digit by what the column is worth.'], explain: 'The ' + d + ' is worth ' + valTxt + '.' });
    var wordsOf = function (e) { return e >= 0 ? (e === 0 ? 'ones' : PLACE[e]) : (e === -1 ? 'tenths' : 'hundredths'); };
    var ans = d + ' ' + wordsOf(placeExp), wrong = [d + ' ' + wordsOf(placeExp + 1), d + ' ' + wordsOf(placeExp - 1), d + ' ' + wordsOf(placeExp + 2)].filter(function (x) { return x.indexOf('undefined') < 0; });
    return mk({ tag: 'Value of a digit', text: 'In <b>' + str + '</b>, what is the <b>value</b> of the digit <b>' + d + '</b>?', hints: ['Say the name of the column the ' + d + ' is in.'], explain: 'The ' + d + ' is in the ' + wordsOf(placeExp) + ' column, so its value is ' + valTxt + '.' }, mcStr(valTxt, [fmt(d * Math.pow(10, placeExp + 1)), fmt(d * Math.pow(10, placeExp + 2)), placeExp > -2 ? T(r6(d * Math.pow(10, placeExp - 1))) : fmt(d * 10)]));
  }

  /* ---------- rounding with units ---------- */
  function gRoundUnit(lv) {
    var k = pick(['mm', 'cm', 'ml', 'g', 'tenp', 'kg100']), v, ans, text, hint, expl;
    if (k === 'mm') { v = rnd(10000, 99999); if (v % 1000 === 500) v += 7; ans = Math.round(v / 1000); text = 'A javelin is thrown <b>' + fmt(v) + ' mm</b>. Round this to the nearest <b>metre</b>.'; hint = '1000 mm = 1 m. Change to metres first.'; expl = fmt(v) + ' mm = ' + T(v / 1000) + ' m, which rounds to ' + ans + ' m.'; }
    else if (k === 'cm') { v = rnd(110, 990); if (v % 100 === 50) v += 3; ans = Math.round(v / 100); text = 'A rope is <b>' + v + ' cm</b> long. What is this to the nearest <b>metre</b>?'; hint = '100 cm = 1 m.'; expl = v + ' cm = ' + T(v / 100) + ' m, which rounds to ' + ans + ' m.'; }
    else if (k === 'ml') { v = rnd(11000, 99999); if (v % 1000 === 500) v += 11; ans = Math.round(v / 1000); text = 'A tank holds <b>' + fmt(v) + ' ml</b>. Round this to the nearest <b>litre</b>.'; hint = '1000 ml = 1 litre.'; expl = fmt(v) + ' ml = ' + T(v / 1000) + ' litres, which rounds to ' + ans + ' litres.'; }
    else if (k === 'g') { v = rnd(1100, 9900); if (v % 1000 === 500) v += 9; ans = Math.round(v / 1000); text = 'A parcel has a mass of <b>' + fmt(v) + ' g</b>. What is this to the nearest <b>kilogram</b>?'; hint = '1000 g = 1 kg.'; expl = fmt(v) + ' g = ' + T(v / 1000) + ' kg, which rounds to ' + ans + ' kg.'; }
    else if (k === 'tenp') { var p = rnd(110, 990); if (p % 10 === 5 || p % 10 === 0) p += 3; ans = Math.round(p / 10) / 10; text = 'A book costs <b>' + gbp(p / 100) + '</b>. What is the cost to the nearest <b>10p</b>?'; hint = 'Look at the pence. Is the units digit 5 or more?'; expl = gbp(p / 100) + ' rounds to ' + gbp(ans) + '.'; return Q({ tag: 'Rounding with units', text: text, answer: ans.toFixed(2), hints: [hint], explain: expl }); }
    else { var kgv = rnd(11, 99) / 10 + rnd(1, 9) / 1000; kgv = Math.round(kgv * 1000) / 1000; if (Math.round(kgv * 1000) % 100 === 50) kgv += 0.003; var g = Math.round(kgv * 1000); ans = Math.round(g / 100) * 100;
      return Q({ tag: 'Rounding with units', text: 'A sack weighs <b>' + T(r6(g / 1000)) + ' kg</b>. What is this to the nearest <b>100 g</b>? Give your answer in grams.', answer: String(ans), hints: ['Change to grams first: ' + T(r6(g / 1000)) + ' kg = ' + g + ' g.', 'Round to the nearest hundred.'], explain: g + ' g rounds to ' + ans + ' g.' }); }
    return Q({ tag: 'Rounding with units', text: text, answer: String(ans), hints: [hint], explain: expl });
  }

  /* ---------- sensible estimates ---------- */
  var EST = [
    ['the mass of an adult elephant', '5000 kg', ['50 kg', '500 g', '5 kg']], ['the mass of an apple', '100 g', ['1 g', '10 kg', '1 kg']], ['the mass of a bag of sugar', '1 kg', ['10 g', '100 kg', '10 kg']],
    ['the mass of a cat', '4 kg', ['40 g', '40 kg', '400 kg']], ['the mass of a family car', '1200 kg', ['12 kg', '120 g', '12 g']], ['the mass of a pencil', '10 g', ['1 kg', '100 g', '1 g']],
    ['the volume of a bathtub when full', '150 litres', ['150 ml', '1.5 litres', '15 ml']], ['the volume of a cup of tea', '250 ml', ['25 litres', '2.5 litres', '25 ml']], ['the volume of a teaspoon', '5 ml', ['50 ml', '5 litres', '500 ml']],
    ['the volume of a carton of milk', '1 litre', ['1 ml', '10 litres', '100 litres']], ['the volume of a fish tank', '60 litres', ['6 ml', '600 litres', '6 litres']], ['the volume of a bottle of water', '500 ml', ['5 ml', '50 litres', '5 litres']],
    ['the length of a train carriage', '20 m', ['2 cm', '200 mm', '2 km']], ['the length of a bus', '10 m', ['10 cm', '100 m', '10 mm']], ['the height of a giraffe', '5 m', ['5 km', '500 mm', '5 cm']],
    ['the height of a door', '2 m', ['2 cm', '20 m', '2 km']], ['the length of a pencil', '15 cm', ['15 m', '15 mm', '1.5 km']], ['the thickness of a coin', '2 mm', ['2 m', '2 cm', '20 cm']],
    ['the distance from Glasgow to Edinburgh', '75 km', ['75 m', '7.5 km', '750 km']], ['the length of a football pitch', '100 m', ['100 mm', '10 km', '10 cm']], ['the width of a classroom', '8 m', ['8 cm', '80 m', '8 mm']],
    ['the time it takes to brush your teeth', '2 minutes', ['2 hours', '2 seconds', '20 minutes']], ['the time of a school day', '6 hours', ['6 minutes', '60 hours', '6 seconds']], ['the temperature of a warm classroom', '20 °C', ['2 °C', '200 °C', '-20 °C']],
    ['the temperature of a fridge', '4 °C', ['40 °C', '-14 °C', '104 °C']], ['the speed of a person walking', '5 km/h', ['50 km/h', '0.5 km/h', '500 km/h']], ['the speed of a car on a motorway', '110 km/h', ['11 km/h', '1100 km/h', '1.1 km/h']]
  ];
  function gEstimate() {
    var e = pick(EST);
    return mk({ tag: 'Sensible estimates', text: 'Which of these is the most <b>sensible estimate</b> for <b>' + e[0] + '</b>?', hints: ['Think of something you know that is about the same size, then pick the unit that fits.'], explain: 'About ' + e[1] + ' is the sensible estimate for ' + e[0] + '.' }, mcStr(e[1], e[2]));
  }
  var JARS = [['a 1 litre bottle', 1000, 'ml'], ['a 440 ml cup', 440, 'ml'], ['a 300 g jar', 300, 'g'], ['a 2 litre jug', 2000, 'ml']];
  function gEstFill() {
    var j = pick(JARS), pct = pick([25, 50, 75, 20, 60]), full = j[1], amt = Math.round(full * pct / 100), s = '';
    var h = 100 * pct / 100;
    s = '<rect x="60" y="10" width="70" height="104" rx="8" style="fill:none;stroke:var(--fg);stroke-width:3"/><rect x="62" y="' + (112 - h) + '" width="66" height="' + h + '" style="fill:var(--accent);opacity:.55"/>';
    var wrong = [Math.round(amt / 10), amt * 10, Math.round(amt / 100) || 1].map(function (x) { return fmt(x) + ' ' + j[2]; });
    return mk({ tag: 'Sensible estimates', text: 'The picture shows <b>' + j[0] + '</b> when full. About how much is in it now?', pic: svg(190, 124, 'A container filled to ' + pct + ' percent', s, 190), hints: ['Compare the filled part with the whole container.', 'Is it about a half, a quarter, three quarters?'], explain: pct + '% of ' + fmt(full) + ' ' + j[2] + ' is about ' + fmt(amt) + ' ' + j[2] + '.' }, mcStr(fmt(amt) + ' ' + j[2], wrong));
  }

  /* ---------- calendar ---------- */
  var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var WEEK = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  function isLeap(y) { return (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0; }
  function mdays(m, leap) { return [31, leap ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][m]; }
  function ord(n) { var s = ['th', 'st', 'nd', 'rd'], v = n % 100; return n + (s[(v - 20) % 10] || s[v] || s[0]); }
  function doy(m, d, leap) { var t = d; for (var i = 0; i < m; i++) t += mdays(i, leap); return t; }
  function gCalendar(lv) {
    var kind = pick(lv <= 1 ? ['count', 'month', 'leap2'] : ['count', 'leap', 'first', 'weekday', 'older']);
    if (kind === 'month') { var want = pick([30, 31, 28]); var ms = MONTHS.filter(function (x, i) { return mdays(i, false) === want; }), notIn = MONTHS.filter(function (x, i) { return mdays(i, false) !== want; });
      var ans = pick(ms); return mk({ tag: 'Calendar', text: 'Which of these months has <b>' + want + ' days</b> (not in a leap year)?', hints: ['Use the knuckle rhyme or the poem: thirty days has September, April, June and November.'], explain: ans + ' has ' + want + ' days.' }, mcStr(ans, shuffle(notIn).slice(0, 3))); }
    if (kind === 'leap2' || kind === 'leap') { var yr = rnd(lv >= 4 ? 1890 : 2008, lv >= 4 ? 2110 : 2034), ok = isLeap(yr);
      return mk({ tag: 'Calendar', text: 'Is <b>' + yr + '</b> a <b>leap year</b>?', hints: ['A leap year has 29 days in February. The year divides exactly by 4.', 'Century years such as 1900 and 2100 are leap years only if they divide exactly by 400.'], explain: yr + (ok ? ' is a leap year.' : ' is not a leap year.') }, mcStr(ok ? 'Yes' : 'No', [ok ? 'No' : 'Yes'])); }
    if (kind === 'count') { var y2 = pick([2020, 2021, 2022, 2023, 2024, 2025, 2026, 2028]), lp = isLeap(y2), n = rnd(2, 5), tot = 0; for (var i = 0; i < n; i++) tot += mdays(i, lp);
      return Q({ tag: 'Calendar', text: 'The year <b>' + y2 + '</b> ' + (lp ? 'is' : 'is not') + ' a leap year. How many days are there in the first <b>' + n + ' months</b> of ' + y2 + '?', answer: String(tot), hints: ['List the months and how many days each has.', lp ? 'February has 29 days in a leap year.' : 'February has 28 days.'], explain: 'Add the days: ' + tot + '.' }); }
    if (kind === 'first') { var n3 = rnd(2, 4), y3 = 2024, t3 = 0; for (var q = 0; q < n3; q++) t3 += mdays(q, true);
      return mk({ tag: 'Calendar', text: 'The year 2024 is a leap year. How many days will there be in the first <b>' + n3 + ' months</b> of 2024?', hints: ['February has 29 days in a leap year.'], explain: 'The total is ' + t3 + ' days.' }, mcStr(String(t3), [String(t3 - 1), String(t3 + 1), String(t3 + 2)])); }
    if (kind === 'weekday') { var m = rnd(0, 9), d1 = rnd(1, 20), w = rnd(0, 6), m2 = m + 1, d2 = rnd(1, 27), gap = doy(m2, d2, false) - doy(m, d1, false), tw = ((w + gap) % 7 + 7) % 7;
      return mk({ tag: 'Calendar', text: 'In a year that is not a leap year, <b>' + ord(d1) + ' ' + MONTHS[m] + '</b> is a <b>' + WEEK[w] + '</b>. What day of the week is <b>' + ord(d2) + ' ' + MONTHS[m2] + '</b> in the same year?', hints: ['Count how many days later it is, then take away whole weeks of 7.', 'The days left over move you on through the week.'], explain: 'There are ' + gap + ' days between the dates. ' + gap + ' = ' + Math.floor(gap / 7) + ' weeks and ' + (gap % 7) + ' days, so the day is ' + WEEK[tw] + '.' }, mcStr(WEEK[tw], shuffle(WEEK.filter(function (x) { return x !== WEEK[tw]; })).slice(0, 3))); }
    var ma = rnd(0, 9), da = rnd(1, mdays(ma, false) - 1), mb = ma + 1, db = rnd(1, 28), diff = mdays(ma, false) - da + db;
    return mk({ tag: 'Calendar', text: 'Sam was born on <b>' + ord(da) + ' ' + MONTHS[ma] + '</b>. Jeremy was born on <b>' + ord(db) + ' ' + MONTHS[mb] + '</b> in the same year. By how many days is Sam older than Jeremy?', hints: ['Count the days left in ' + MONTHS[ma] + ' after Sam\'s birthday, then add the days into ' + MONTHS[mb] + '.'], explain: mdays(ma, false) + ' − ' + da + ' = ' + (mdays(ma, false) - da) + ', then ' + db + ' more: ' + diff + ' days.' }, mcStr(String(diff), [String(diff - 1), String(diff + 1), String(diff + 7)]));
  }

  /* ---------- time zones ---------- */
  var ZONES = [['Paris', 1], ['Athens', 2], ['Dubai', 4], ['Mumbai', 5], ['Singapore', 8], ['Tokyo', 9], ['Sydney', 10], ['New York', -5], ['Chicago', -6], ['Denver', -7], ['Los Angeles', -8]];
  function t12(h, m) { h = ((h % 24) + 24) % 24; var ap = h < 12 ? 'am' : 'pm', hh = h % 12 === 0 ? 12 : h % 12; return hh + ':' + (m < 10 ? '0' : '') + m + ' ' + ap; }
  function t24(h, m) { h = ((h % 24) + 24) % 24; return (h < 10 ? '0' : '') + h + ':' + (m < 10 ? '0' : '') + m; }
  function gZone(lv) {
    var z = pick(lv <= 2 ? ZONES.filter(function (x) { return Math.abs(x[1]) <= 6; }) : ZONES), h = rnd(6, 21), mi = lv >= 3 ? pick([0, 15, 30, 45]) : 0, back = Math.random() < 0.3, use24 = lv >= 3 || Math.random() < 0.4;
    var f = use24 ? t24 : t12, diff = z[1], rel = Math.abs(diff) + ' hour' + (Math.abs(diff) > 1 ? 's' : '') + (diff > 0 ? ' ahead of' : ' behind');
    var ans, text, hint;
    if (!back) { ans = f(h + diff, mi); text = z[0] + ' is ' + rel + ' London. It is <b>' + f(h, mi) + '</b> in London. What time is it in ' + z[0] + '?'; hint = diff > 0 ? 'Ahead means later, so add ' + diff + ' hours.' : 'Behind means earlier, so take away ' + Math.abs(diff) + ' hours.'; }
    else { ans = f(h - diff, mi); text = z[0] + ' is ' + rel + ' London. It is <b>' + f(h, mi) + '</b> in ' + z[0] + '. What time is it in London?'; hint = diff > 0 ? z[0] + ' is ahead, so London is earlier: take away ' + diff + ' hours.' : z[0] + ' is behind, so London is later: add ' + Math.abs(diff) + ' hours.'; }
    var wrong = [f(h + (back ? 1 : -1) * diff, mi), f((back ? h - diff : h + diff) + 1, mi), f((back ? h - diff : h + diff) - 1, mi)];
    return mk({ tag: 'Time zones', text: text, hints: [hint, 'If you pass midnight, the clock starts again.'], explain: 'The answer is ' + ans + '.' }, mcStr(ans, wrong));
  }

  /* ---------- coins ---------- */
  function gCoins(lv) {
    var kind = pick(lv <= 1 ? ['many'] : ['many', 'many', 'fewest']);
    if (kind === 'many') { var c = pick(lv <= 1 ? [2, 5, 10] : [2, 5, 10, 20, 50]), n = rnd(8, 60), amt = c * n; if (Math.random() < 0.4) amt = c * rnd(12, 140);
      return Q({ tag: 'Coins', text: 'How many <b>' + c + 'p coins</b> are there in <b>' + gbp(amt / 100) + '</b>?', answer: String(amt / c), hints: ['Change the pounds to pence: ' + gbp(amt / 100) + ' = ' + amt + 'p.', 'Divide by ' + c + '.'], explain: amt + ' ÷ ' + c + ' = ' + (amt / c) + ' coins.' }); }
    var v = rnd(31, 98), coins = [50, 20, 10, 5, 2, 1], left = v, cnt = 0; coins.forEach(function (x) { cnt += Math.floor(left / x); left %= x; });
    return Q({ tag: 'Coins', text: 'What is the <b>smallest number of coins</b> (1p, 2p, 5p, 10p, 20p, 50p) that make <b>' + v + 'p</b>?', answer: String(cnt), hints: ['Use the biggest coin you can first, then the next biggest.'], explain: 'Using the biggest coins first needs ' + cnt + ' coins.' });
  }

  /* ---------- perimeter, area puzzles ---------- */
  function gPerimPuzzle(lv) {
    var kind = pick(['sq', 'rect', 'rug', 'other']);
    if (kind === 'sq') return Q({ tag: 'Perimeter and area puzzles', text: 'The <b>perimeter</b> of a square (in cm) is the same as its <b>area</b> (in cm²). What is the side length of the square?', answer: '4', hints: ['Call the side s. The perimeter is 4 × s and the area is s × s.', 'Try s = 4.'], explain: 'With s = 4: perimeter = 16 and area = 16. They match, so the side is 4 cm.' });
    if (kind === 'rect') { var w = pick([3, 6]), l = w === 3 ? 6 : 3;
      return Q({ tag: 'Perimeter and area puzzles', text: 'A rectangle is <b>' + w + ' cm</b> wide. Its perimeter (in cm) equals its area (in cm²). How long is it?', answer: String(l), hints: ['Try lengths one at a time and compare perimeter with area.'], explain: 'Length ' + l + ': perimeter = 2 × (' + w + ' + ' + l + ') = ' + (2 * (w + l)) + ' and area = ' + w + ' × ' + l + ' = ' + (w * l) + '. They match.' }); }
    if (kind === 'rug') { var opts = [[25, 2], [16, 2.5], [4, 5]], o = pick(opts), s = o[0] === 16 ? pick([2, 4]) : pick([2, 3, 4]), ans = s * o[1];
      return Q({ tag: 'Perimeter and area puzzles', text: 'A square rug measures <b>' + s + ' m × ' + s + ' m</b> and covers <b>' + o[0] + '%</b> of the floor of a square room. How long is one wall of the room?', answer: T(ans), hints: ['Find the area of the rug, then the area of the whole floor.', o[0] + '% is ' + o[0] + ' out of 100, so the floor is 100 ÷ ' + o[0] + ' times the rug.'], explain: 'Rug area = ' + (s * s) + ' m². Floor area = ' + T(s * s * 100 / o[0]) + ' m². The wall is the square root: ' + T(ans) + ' m.' }); }
    var side = rnd(4, 14), p = 2 * (side + rnd(3, 12) * 1), a = rnd(3, 9);
    var other = rnd(5, 15); p = 2 * (a + other);
    return Q({ tag: 'Perimeter and area puzzles', text: 'A rectangle has two sides of <b>' + a + ' cm</b>. Its perimeter is <b>' + p + ' cm</b>. How long are the other two sides?', answer: String(other), hints: ['Take away the two known sides from the perimeter, then share what is left between the other two sides.'], explain: p + ' − ' + (2 * a) + ' = ' + (p - 2 * a) + ', and ' + (p - 2 * a) + ' ÷ 2 = ' + other + ' cm.' });
  }

  /* ---------- given facts and shortcuts ---------- */
  function gGivenFact(lv) {
    var kind = pick(lv <= 1 ? ['shift', 'half'] : ['shift', 'half', 'add', 'divide']);
    if (kind === 'shift') { var A = rnd(12, 99), B = pick([3, 4, 6, 7, 8, 9, 12]), C = A * B, ka = pick([10, 100, 0.1, 2, 0.5]), kb = pick([10, 0.1, 100, 1]);
      if (ka === 0.5 && A % 2) ka = 2; var A2 = r6(A * ka), B2 = r6(B * kb), ans = r6(A2 * B2);
      return Q({ tag: 'Use a given fact', text: 'You know that <b>' + A + ' × ' + B + ' = ' + C + '</b>. Use this to work out <b>' + T(A2) + ' × ' + T(B2) + '</b>.', answer: T(ans), hints: ['Look at how each number has changed: multiplied or divided by what?', 'Change the answer ' + C + ' in the same ways.'], explain: A + ' changed to ' + T(A2) + ' and ' + B + ' changed to ' + T(B2) + ', so ' + C + ' × ' + T(r6(ka * kb)) + ' = ' + T(ans) + '.' }); }
    if (kind === 'half') { var a = rnd(7, 49) * 2, b = rnd(3, 19), c = a * b, d = Math.random() < 0.5;
      return Q({ tag: 'Use a given fact', text: 'You know that <b>' + a + ' × ' + b + ' = ' + c + '</b>. What is <b>' + (d ? a / 2 : a * 2) + ' × ' + b + '</b>?', answer: String(d ? c / 2 : c * 2), hints: [d ? 'The first number has been halved, so halve the answer.' : 'The first number has been doubled, so double the answer.'], explain: (d ? c + ' ÷ 2 = ' : c + ' × 2 = ') + (d ? c / 2 : c * 2) + '.' }); }
    if (kind === 'add') { var x = rnd(21, 79), y = rnd(12, 49), z = x * y, up = Math.random() < 0.5;
      return Q({ tag: 'Use a given fact', text: 'You know that <b>' + x + ' × ' + y + ' = ' + z + '</b>. What is <b>' + (up ? x + 1 : x - 1) + ' × ' + y + '</b>?', answer: String(up ? z + y : z - y), hints: ['One more (or one less) group of ' + y + '.'], explain: z + (up ? ' + ' : ' − ') + y + ' = ' + (up ? z + y : z - y) + '.' }); }
    var q = rnd(12, 99), dv = pick([4, 6, 7, 8, 9, 12]), tot = q * dv, p = pick([1, 2]), qq = pick([0, 1]), ans2 = r6(q / Math.pow(10, p + qq));
    return Q({ tag: 'Use a given fact', text: 'You know that <b>' + tot + ' ÷ ' + dv + ' = ' + q + '</b>. What is <b>' + T(r6(tot / Math.pow(10, p))) + ' ÷ ' + T(r6(dv * Math.pow(10, qq))) + '</b>?', answer: T(ans2), hints: ['Compare each number with the one in the fact. How many times smaller or bigger is it?'], explain: 'The first number is ' + Math.pow(10, p) + ' times smaller and the second is ' + Math.pow(10, qq) + ' times bigger, so the answer is ' + q + ' ÷ ' + Math.pow(10, p + qq) + ' = ' + T(ans2) + '.' });
  }
  function gShortcut(lv) {
    var kind = pick(lv <= 1 ? ['a', 'c'] : ['a', 'b', 'c', 'd']);
    if (kind === 'a') { var a = rnd(12, 48), b = rnd(40, 80), c = b - rnd(2, 6);
      return Q({ tag: 'Clever shortcuts', text: 'Work out <b>' + a + ' × ' + b + ' − ' + a + ' × ' + c + '</b>.', answer: String(a * (b - c)), hints: ['Both parts have the same ' + a + '. How many groups of ' + a + ' are left?'], explain: a + ' × (' + b + ' − ' + c + ') = ' + a + ' × ' + (b - c) + ' = ' + (a * (b - c)) + '.' }); }
    if (kind === 'b') { var p = rnd(11, 89), q = 100 - p, m = pick([230, 340, 35, 450, 60]); return Q({ tag: 'Clever shortcuts', text: 'What is <b>' + p + ' × ' + m + ' + ' + q + ' × ' + m + '</b>?', answer: String(100 * m), hints: ['Add the two multipliers first: ' + p + ' + ' + q + '.'], explain: '(' + p + ' + ' + q + ') × ' + m + ' = 100 × ' + m + ' = ' + (100 * m) + '.' }); }
    if (kind === 'c') { var n = rnd(12, 89); return Q({ tag: 'Clever shortcuts', text: '<b>' + n + ' × 99 = ' + (n * 100) + ' − ?</b> What number is missing?', answer: String(n), hints: ['99 is 100 − 1. So ' + n + ' × 99 is ' + n + ' × 100 take away one ' + n + '.'], explain: n + ' × 99 = ' + n + ' × 100 − ' + n + ', so the missing number is ' + n + '.' }); }
    var d1 = pick([7.2, 12.4, 3.6, 8.5, 6.3]), d2 = r6(10 - d1), k = pick([35, 67, 90, 24]); return Q({ tag: 'Clever shortcuts', text: 'Work out <b>' + T(d1) + ' × ' + k + ' + ' + T(d2) + ' × ' + k + '</b>.', answer: String(10 * k), hints: ['Add the decimals first: ' + T(d1) + ' + ' + T(d2) + '.'], explain: '(' + T(d1) + ' + ' + T(d2) + ') × ' + k + ' = 10 × ' + k + ' = ' + (10 * k) + '.' });
  }

  /* ---------- fractions ---------- */
  function mixedStr(n, d) { var w = Math.floor(n / d), r = n % d; return r === 0 ? String(w) : (w ? w + ' ' : '') + r + '/' + d; }
  function gThirds() {
    var d = pick([2, 3, 4, 5, 6, 8, 10]), w = rnd(2, 9), num = rnd(1, d - 1), total = w * d + num, kind = Math.random() < 0.6;
    if (kind) return mk({ tag: 'Counting fractions', text: 'How many <b>' + (d === 2 ? 'halves' : d === 3 ? 'thirds' : d === 4 ? 'quarters' : d === 5 ? 'fifths' : d === 6 ? 'sixths' : d === 8 ? 'eighths' : 'tenths') + '</b> are there in <b>' + w + ' ' + num + '/' + d + '</b>?', hints: ['One whole is ' + d + ' of them.', 'Multiply the whole number by ' + d + ' and add the extra parts.'], explain: w + ' × ' + d + ' + ' + num + ' = ' + total + '.' }, mcStr(String(total), [String(w * d), String(w + num), String(total + d)]));
    var whole = rnd(2, 9);
    return mk({ tag: 'Counting fractions', text: 'How many <b>' + (d === 2 ? 'halves' : d === 3 ? 'thirds' : d === 4 ? 'quarters' : d === 5 ? 'fifths' : d === 6 ? 'sixths' : d === 8 ? 'eighths' : 'tenths') + '</b> are there in <b>' + whole + '</b>?', hints: ['One whole is ' + d + ' of them.'], explain: whole + ' × ' + d + ' = ' + (whole * d) + '.' }, mcStr(String(whole * d), [String(whole + d), String(whole * d + d), String(Math.max(1, whole * d - d))]));
  }
  function gFracWhole(lv) {
    var kind = pick(lv <= 1 ? ['times'] : ['times', 'divide']);
    if (kind === 'times') { var d = pick([3, 4, 5, 6, 7, 8]), n = rnd(1, d - 1), w = rnd(2, 9), num = n * w, g = gcd(num, d);
      var ans = num % d === 0 ? String(num / d) : mixedStr(num, d); if (num % d && gcd(num % d, d) > 1) { var r = num % d, gg = gcd(r, d); ans = (Math.floor(num / d) ? Math.floor(num / d) + ' ' : '') + (r / gg) + '/' + (d / gg); }
      var wrong = [n + '/' + (d * w), mixedStr(num + d, d), mixedStr(num, d * 2)]; return mk({ tag: 'Fractions and whole numbers', text: 'What is <b>' + n + '/' + d + ' × ' + w + '</b>? Give the answer in its simplest form.', hints: ['Multiply the top by ' + w + ' and keep the bottom.', 'Then change an improper fraction to a mixed number.'], explain: n + '/' + d + ' × ' + w + ' = ' + num + '/' + d + ' = ' + ans + '.' }, mcStr(ans, wrong)); }
    var dd = pick([4, 5, 6, 8, 3]), nn = rnd(1, dd - 1), w2 = pick([2, 3, 4, 5, 6, 8]), top = nn, bot = dd * w2, g2 = gcd(top, bot);
    return mk({ tag: 'Fractions and whole numbers', text: 'What is <b>' + nn + '/' + dd + ' ÷ ' + w2 + '</b>? Give the answer in its simplest form.', hints: ['Dividing by ' + w2 + ' makes each part ' + w2 + ' times smaller: multiply the bottom by ' + w2 + '.'], explain: nn + '/' + dd + ' ÷ ' + w2 + ' = ' + nn + '/' + bot + ' = ' + (top / g2) + '/' + (bot / g2) + '.' }, mcStr((top / g2) + '/' + (bot / g2), [(nn * w2) + '/' + dd, nn + '/' + (dd + w2), (nn + w2) + '/' + dd]));
  }
  function gFracDec(lv) {
    var kind = pick(['fd', 'df', 'th']);
    if (kind === 'fd') { var d = pick([20, 25, 4, 5, 8, 50, 40]), n = rnd(1, d - 1); if (gcd(n, d) === 1 && d > 10 && Math.random() < 0.5) n = 1; var val = n / d;
      return mk({ tag: 'Fractions, decimals and percentages', text: 'What is <b>' + n + '/' + d + '</b> written as a <b>decimal</b>?', hints: ['Make the bottom number 10, 100 or 1000, or divide the top by the bottom.'], explain: n + ' ÷ ' + d + ' = ' + T(r6(val)) + '.' }, mcStr(T(r6(val)), [T(r6(val * 10)), T(r6(val / 10)), T(r6(1 - val))].filter(function (x) { return x !== T(r6(val)); }))); }
    if (kind === 'df') { var dec = pick([1.2, 1.5, 1.8, 2.4, 0.25, 0.75, 0.6, 3.5, 0.04, 1.25]), den = dec * 100, top = Math.round(den), g = gcd(top, 100), s = (top / g) + '/' + (100 / g);
      if (dec > 1) { var wn = Math.floor(dec), rest = Math.round((dec - wn) * 100), g3 = gcd(rest, 100), fr = (rest / g3) + '/' + (100 / g3); s = wn + ' ' + fr; var imp = Math.round(dec * 100) / g; s = (top / g) + '/' + (100 / g); }
      return mk({ tag: 'Fractions, decimals and percentages', text: 'What is <b>' + T(dec) + '</b> as a fraction in its <b>simplest form</b>?', hints: ['Write the decimal over 10 or 100, then divide top and bottom by the same number.'], explain: T(dec) + ' = ' + top + '/100 = ' + s + '.' }, mcStr(s, [(top / g) + '/' + (100 / g + 1), ((top / g) + 1) + '/' + (100 / g), (100 / g) + '/' + (top / g)])); }
    var top2 = rnd(11, 99), dv = pick([1000, 100]); var dd2 = T(r6(top2 / dv));
    return mk({ tag: 'Fractions, decimals and percentages', text: 'What is <b>' + top2 + '/' + dv + '</b> as a decimal?', hints: ['Divide by ' + dv + ': move every digit ' + (dv === 100 ? 'two' : 'three') + ' places to the right of the decimal point.'], explain: top2 + ' ÷ ' + dv + ' = ' + dd2 + '.' }, mcStr(dd2, [T(r6(top2 / dv / 10)), T(r6(top2 / dv * 10)), T(r6(top2 / 10000))]));
  }
  function gShadedGrid() {
    var cols = pick([3, 4, 5, 6]), rows = pick([2, 3]), total = cols * rows, k = rnd(1, total - 1), cells = shuffle(Array.apply(null, Array(total)).map(function (_, i) { return i; })).slice(0, k), s = '', w = 30;
    for (var r = 0; r < rows; r++) for (var c = 0; c < cols; c++) { var on = cells.indexOf(r * cols + c) >= 0; s += '<rect x="' + (12 + c * w) + '" y="' + (12 + r * w) + '" width="' + w + '" height="' + w + '" style="fill:' + (on ? 'var(--accent)' : 'none') + ';fill-opacity:' + (on ? '.55' : '1') + ';stroke:var(--fg);stroke-width:2"/>'; }
    var g = gcd(k, total), ans = (k / g) + '/' + (total / g);
    return mk({ tag: 'Fractions of shapes', text: 'What <b>fraction</b> of the grid is shaded? Give the answer in its simplest form.', pic: svg(24 + cols * w, 24 + rows * w, k + ' of ' + total + ' squares are shaded', s, 260), hints: ['Count the shaded squares and count all the squares.', 'Write shaded over total, then simplify.'], explain: k + ' out of ' + total + ' squares are shaded: ' + k + '/' + total + ' = ' + ans + '.' }, mcStr(ans, [(total - k) / gcd(total - k, total) + '/' + total / gcd(total - k, total), (k + 1) + '/' + total, k + '/' + (total + rows)]));
  }

  /* ---------- percentages ---------- */
  function isPrime(n) { if (n < 2) return false; for (var i = 2; i * i <= n; i++) if (n % i === 0) return false; return true; }
  function isSq(n) { var r = Math.round(Math.sqrt(n)); return r * r === n; }
  var SETS = [['even numbers', function (n) { return n % 2 === 0; }], ['odd numbers', function (n) { return n % 2 === 1; }], ['square numbers', isSq], ['prime numbers', isPrime], ['multiples of 5', function (n) { return n % 5 === 0; }], ['multiples of 3', function (n) { return n % 3 === 0; }], ['factors of 12', function (n) { return 12 % n === 0; }]];
  function gPctSet() {
    for (var t = 0; t < 40; t++) {
      var N = pick([10, 20, 25, 40, 50, 100]), s = pick(SETS), cnt = 0; for (var i = 1; i <= N; i++) if (s[1](i)) cnt++;
      if (cnt === 0 || cnt === N) continue; var p = cnt * 100 / N; if (p !== Math.round(p)) continue;
      return Q({ tag: 'Percentage of a set', text: 'What <b>percentage</b> of the whole numbers from <b>1 to ' + N + '</b> are <b>' + s[0] + '</b>?', answer: String(p), hints: ['Count how many of the numbers fit. Then make it a fraction of ' + N + '.', 'Change the fraction to a percentage.'], explain: cnt + ' out of ' + N + ' numbers are ' + s[0] + ': ' + cnt + '/' + N + ' = ' + p + '%.' });
    }
    return Q({ tag: 'Percentage of a set', text: 'What percentage of the whole numbers from 1 to 10 are square numbers?', answer: '30', hints: ['The squares are 1, 4 and 9.'], explain: '3 out of 10 is 30%.' });
  }
  function gPctMeasure() {
    var kind = pick(['mass', 'vol', 'minutes']);
    if (kind === 'mass') { var kg = pick([1.2, 2.5, 0.8, 1.5, 3, 0.5]), p = pick([10, 20, 25, 40, 50, 60, 75]), g = kg * 1000 * p / 100;
      return Q({ tag: 'Percentage of a measure', text: 'A dog food contains <b>' + p + '%</b> meat. How many <b>grams</b> of meat are in a <b>' + T(kg) + ' kg</b> bag?', answer: T(g), hints: ['Change the bag to grams first: ' + T(kg) + ' kg = ' + T(kg * 1000) + ' g.', 'Then find ' + p + '% of it.'], explain: p + '% of ' + T(kg * 1000) + ' g = ' + T(g) + ' g.' }); }
    if (kind === 'vol') { var a = rnd(2, 4), b = rnd(2, 4), c = rnd(2, 3), vol = a * b * c, pc = pick([10, 15, 20, 25, 50]), ans = r6(vol * pc / 100);
      return Q({ tag: 'Percentage of a measure', text: 'A metal container is a cuboid <b>' + a + ' m</b> by <b>' + b + ' m</b> by <b>' + c + ' m</b>. Sand is poured in until it is <b>' + pc + '%</b> full. What is the volume of sand in m³?', answer: T(ans), hints: ['Find the volume of the whole container: length × width × height.', 'Then find ' + pc + '% of it.'], explain: 'Volume = ' + vol + ' m³. ' + pc + '% of ' + vol + ' = ' + T(ans) + ' m³.' }); }
    var h = pick([2, 3, 4]), pp = pick([25, 50, 75]), ans2 = h * 60 * pp / 100;
    return Q({ tag: 'Percentage of a measure', text: 'How many <b>minutes</b> are there in <b>' + pp + '%</b> of <b>' + h + ' hours</b>?', answer: T(ans2), hints: ['Change the hours to minutes first.'], explain: h + ' hours = ' + (h * 60) + ' minutes. ' + pp + '% of ' + (h * 60) + ' = ' + T(ans2) + '.' });
  }

  /* ---------- wiring ---------- */
  var ALL = {
    gNumLine: gNumLine, gWords: gWords, gDigit: gDigit, gRoundUnit: gRoundUnit, gEstimate: gEstimate, gEstFill: gEstFill, gCalendar: gCalendar, gZone: gZone, gCoins: gCoins,
    gPerimPuzzle: gPerimPuzzle, gGivenFact: gGivenFact, gShortcut: gShortcut, gThirds: gThirds, gFracWhole: gFracWhole, gFracDec: gFracDec, gShadedGrid: gShadedGrid, gPctSet: gPctSet, gPctMeasure: gPctMeasure
  };
  var YEAR_LV = { 501: 1, 502: 1, 503: 1, 504: 1, 505: 1, 506: 1, 507: 1, 508: 1, 509: 1, 510: 1, 513: 1, 1: 2, 2: 2, 3: 2, 4: 2, 5: 2, 6: 2, 7: 2, 8: 2, 9: 2, 10: 2, 11: 2, 13: 2, 701: 3, 702: 3, 703: 3, 704: 3, 705: 3, 706: 3, 707: 3, 708: 3, 709: 3, 710: 3, 711: 3, 712: 3, 713: 3 };
  function lvOf(n) { if (YEAR_LV[n]) return YEAR_LV[n]; return n >= 841 ? 6 : n >= 821 ? 5 : 4; }
  var MAP = {};
  function add(ids, list) { ids.forEach(function (id) { MAP[id] = (MAP[id] || []).concat(list); }); }
  var P = [501, 1, 701], P5 = 501, S1 = 801;
  add([501, 1, 701, 801], [[gNumLine, 'e'], [gWords, 'e'], [gDigit, 'e'], [gRoundUnit, 'm'], [gEstimate, 'm'], [gEstFill, 'm']]);
  add([502, 2, 702, 802], [[gGivenFact, 'm'], [gShortcut, 'm']]);
  add([503, 3, 703, 803], [[gThirds, 'e'], [gFracWhole, 'm'], [gFracDec, 'm'], [gShadedGrid, 'e']]);
  add([504, 4, 704, 804], [[gPctSet, 'm'], [gPctMeasure, 'm'], [gFracDec, 'e']]);
  add([505, 5, 705, 807, 825, 808], [[gCalendar, 'e'], [gCoins, 'e'], [gPerimPuzzle, 'm'], [gEstimate, 'e'], [gEstFill, 'e'], [gRoundUnit, 'm']]);
  add([5, 705, 807, 825, 842], [[gZone, 'm']]);
  add([826, 844, 808], [[gEstimate, 'm']]);
  add([807, 825], [[gCalendar, 'm']]);
  BT.gap1 = { makers: ALL, MAP: MAP, lvOf: lvOf };
  var prev = S.extraMakers;
  S.extraMakers = function (n, level) {
    var base = prev ? (prev(n, level) || []) : [], list = MAP[Number(n)];
    if (!list) return base;
    var lv = lvOf(Number(n)), pick1 = list.filter(function (x) { return level === 'low' ? x[1] === 'e' : level === 'high' ? x[1] !== 'e' : true; });
    if (!pick1.length) pick1 = list;
    return pick1.map(function (e) { var f = function () { return e[0](lv); }; Object.defineProperty(f, 'name', { value: e[0].name }); f.__gap = true; return f; }).concat(base);
  };
})();
