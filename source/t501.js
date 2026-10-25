(function () { 'use strict';
var H = Studio.h, $ = H.$, rnd = H.rnd, fmtInt = H.fmtInt, shuffle = H.shuffle, pick = H.pick, trimNum = H.trimNum, V = Studio.viz;
function Q(o) { o.type = o.type || 'input'; return o; }
var COLS = ['ten thousands', 'thousands', 'hundreds', 'tens', 'ones'];
function digitsOf(n, len) { var s = String(n); while (s.length < len) s = '0' + s; return s.split('').map(Number); }
function words(n) { return H.words ? H.words(n) : fmtInt(n); }
function numberLine(lo, hi, val, label) {
  var W = 340, x0 = 20, x1 = W - 20, n = 10, s = '<svg viewBox="0 0 ' + W + ' 86" role="img" aria-label="' + (label || 'A number line from ' + lo + ' to ' + hi) + '" style="width:100%;max-width:' + W + 'px;height:auto">';
  s += '<line x1="' + x0 + '" y1="46" x2="' + x1 + '" y2="46" style="stroke:var(--fg);stroke-width:3"/>';
  for (var i = 0; i <= n; i++) {
    var x = x0 + (x1 - x0) * i / n, big = i === 0 || i === n || i === n / 2;
    s += '<line x1="' + x + '" y1="' + (big ? 36 : 40) + '" x2="' + x + '" y2="' + (big ? 56 : 52) + '" style="stroke:var(--fg);stroke-width:' + (big ? 3 : 2) + '"/>';
  }
  s += '<text x="' + x0 + '" y="76" text-anchor="middle" class="pv-b" style="font-size:13px">' + fmtInt(lo) + '</text><text x="' + x1 + '" y="76" text-anchor="middle" class="pv-b" style="font-size:13px">' + fmtInt(hi) + '</text><text x="' + ((x0 + x1) / 2) + '" y="76" text-anchor="middle" class="pv-b" style="font-size:13px">' + trimNum((lo + hi) / 2) + '</text>';
  if (val !== null && val !== undefined) {
    var vx = x0 + (x1 - x0) * (val - lo) / (hi - lo);
    s += '<polygon points="' + vx + ',42 ' + (vx - 8) + ',22 ' + (vx + 8) + ',22" style="fill:' + V.hsl(22) + '"/><text x="' + vx + '" y="16" text-anchor="middle" class="pv-b" style="font-size:13px">' + trimNum(val) + '</text>';
  }
  return s + '</svg>';
}
function colChart(n) {
  var d = digitsOf(n, 5), s = '<table class="tbl" aria-label="Place value chart for ' + fmtInt(n) + '"><tr>' + COLS.map(function (c) { return '<th style="font-size:.78rem">' + c + '</th>'; }).join('') + '</tr><tr>' + d.map(function (x, i) { var lead = d.slice(0, i).every(function (z) { return z === 0; }) && i < 4; return '<td' + (lead && x === 0 ? ' style="opacity:.25"' : '') + '>' + (lead && x === 0 ? '' : x) + '</td>'; }).join('') + '</tr></table>';
  return s;
}
function decChart(whole, t, h) {
  return '<table class="tbl" aria-label="Decimal place value chart"><tr><th>ones</th><th></th><th>tenths</th><th>hundredths</th></tr><tr><td>' + whole + '</td><td>.</td><td>' + t + '</td><td>' + h + '</td></tr></table>';
}

/* ---------- labs ---------- */
function mountBuildLab(host, ctx) {
  var d = [0, 0, 0, 0, 0], goals = 0, target;
  function newTarget() { target = rnd(1, 9) * 10000 + rnd(0, 9) * 1000 + rnd(0, 9) * 100 + rnd(0, 9) * 10 + rnd(0, 9); }
  function val() { return d[0] * 10000 + d[1] * 1000 + d[2] * 100 + d[3] * 10 + d[4]; }
  newTarget();
  function draw() {
    var v = val(), ok = v === target;
    host.innerHTML = '<p class="say wq">Build the number <b>' + fmtInt(target) + '</b> by tapping the arrows on each column.</p><div class="lab-grid" style="grid-template-columns:repeat(5,1fr);text-align:center">' +
      d.map(function (x, i) { return '<div><div class="note" style="min-height:0;font-size:.78rem">' + COLS[i] + '</div><button class="btn ghost" data-up="' + i + '" type="button" aria-label="More ' + COLS[i] + '">▲</button><div class="pv-b" style="font-size:1.8rem;padding:4px 0">' + x + '</div><button class="btn ghost" data-dn="' + i + '" type="button" aria-label="Fewer ' + COLS[i] + '">▼</button></div>'; }).join('') + '</div>' +
      '<div class="lab-out say" aria-live="polite">Your number: ' + fmtInt(v) + (ok ? ' ✓ That is it!' : '') + '</div>' +
      '<div class="explain">' + d.map(function (x, i) { return x ? x * Math.pow(10, 4 - i) : null; }).filter(function (x) { return x !== null; }).map(fmtInt).join(' + ') + (v ? '' : '0') + '</div>' +
      '<p class="note">Numbers built: ' + goals + ' of 3</p>' + (ok ? '<div class="tools"><button class="btn" id="bNext" type="button">' + (goals >= 3 ? 'Well done' : 'Next number') + '</button></div>' : '');
    host.querySelectorAll('[data-up]').forEach(function (b) { b.addEventListener('click', function () { var i = Number(b.dataset.up); d[i] = (d[i] + 1) % 10; draw(); }); });
    host.querySelectorAll('[data-dn]').forEach(function (b) { b.addEventListener('click', function () { var i = Number(b.dataset.dn); d[i] = (d[i] + 9) % 10; draw(); }); });
    if (ok) {
      if (!draw.counted) { goals++; draw.counted = true; if (goals >= 3) ctx.complete(); }
      var nb = $('bNext'); if (nb) nb.addEventListener('click', function () { newTarget(); d = [0, 0, 0, 0, 0]; draw.counted = false; draw(); });
    }
  }
  draw();
}
function mountRoundLab(host, ctx) {
  var n = 4638, place = 100, seen = {};
  host.innerHTML = '<div class="visual" id="rVis" style="text-align:center"></div><div class="lab-out say" id="rOut" aria-live="polite"></div>' +
    '<label class="eyebrow" for="rN">Choose a number</label><input class="slider" id="rN" type="range" min="1000" max="9999" value="4638" style="width:100%">' +
    '<div class="tools"><button class="btn" data-pl="10" type="button">Nearest 10</button><button class="btn" data-pl="100" type="button">Nearest 100</button><button class="btn" data-pl="1000" type="button">Nearest 1,000</button></div><div class="explain" id="rExp"></div><p class="note" id="rNote"></p>';
  function draw() {
    var lo = Math.floor(n / place) * place, hi = lo + place, half = lo + place / 2, r = n >= half ? hi : lo;
    $('rVis').innerHTML = numberLine(lo, hi, n, 'The number ' + n + ' between ' + lo + ' and ' + hi);
    $('rOut').textContent = fmtInt(n) + ' rounded to the nearest ' + fmtInt(place) + ' is ' + fmtInt(r);
    $('rExp').innerHTML = 'The two landmarks are <b>' + fmtInt(lo) + '</b> and <b>' + fmtInt(hi) + '</b>. The halfway point is <b>' + fmtInt(half) + '</b>. ' + fmtInt(n) + ' is ' + (n >= half ? 'at or past halfway, so round <b>up</b>' : 'before halfway, so round <b>down</b>') + ' to <b>' + fmtInt(r) + '</b>.';
    seen[place + ':' + n] = 1; var c = Object.keys(seen).length; $('rNote').textContent = 'Roundings seen: ' + Math.min(c, 6) + ' of 6';
    if (c >= 6) ctx.complete();
  }
  $('rN').addEventListener('input', function (e) { n = Number(e.target.value); draw(); });
  host.querySelectorAll('[data-pl]').forEach(function (b) { b.addEventListener('click', function () { place = Number(b.dataset.pl); draw(); }); });
  draw();
}

/* ---------- slides ---------- */
function exOf(q, steps, final, render) { return { q: q, steps: steps, final: final, render: render }; }
var exRound100 = exOf('Round 4,638 to the nearest 100.',
  ['Find the hundreds digit. In 4,638 it is the 6. We underline it: 4,6̲38.', 'Look at the digit to its right, the tens digit. It is 3.', '3 is less than 5, so the 6 stays the same. Every digit to the right becomes 0.', '4,638 rounded to the nearest 100 is 4,600.'],
  '4,638 ≈ 4,600',
  function (shown) { return numberLine(4600, 4700, 4638, '4,638 sits between 4,600 and 4,700') + '<div class="caption">' + (shown >= 3 ? '4,638 is nearer 4,600 than 4,700' : '4,638 is between 4,600 and 4,700') + '</div>'; });
var exRound10 = exOf('Round 7,365 to the nearest 10.',
  ['The tens digit is 6. The digit to its right is 5.', 'When the next digit is 5 or more, we round up. So the 6 becomes 7.', 'The ones digit becomes 0.', '7,365 rounded to the nearest 10 is 7,370.'],
  '7,365 ≈ 7,370',
  function (shown) { return numberLine(7360, 7370, 7365, '7,365 is exactly halfway between 7,360 and 7,370') + '<div class="caption">' + (shown >= 3 ? 'Halfway rounds up to 7,370' : '7,365 is halfway between 7,360 and 7,370') + '</div>'; });
var exRoundDec = exOf('Round 6.47 to the nearest whole number.',
  ['The ones digit is 6. Look at the tenths digit to its right. It is 4.', '4 is less than 5, so the 6 stays the same.', 'Drop the digits after the point. 6.47 rounded to the nearest whole number is 6.'],
  '6.47 ≈ 6',
  function (shown) { return numberLine(6, 7, 6.47, '6.47 is between 6 and 7') + '<div class="caption">' + (shown >= 2 ? '6.47 is nearer 6 than 7' : '6.47 is between 6 and 7') + '</div>'; });

var LEARN1 = [
  { title: 'Every digit has a place', v: function () { return colChart(34527) + '<div class="caption">34,527: the 4 is in the thousands column, so it is worth 4,000</div>'; },
    say: ['We write numbers with just ten digits, 0 to 9. The place of a digit tells us how much it is worth.', 'In 34,527 the 3 is in the ten thousands column, so it is worth 30,000. The 4 is worth 4,000, the 5 is worth 500, the 2 is worth 20 and the 7 is worth 7.', 'To find the value of a digit, say its column name, then say how many of that column it has.'],
    real: 'A football stadium holds 34,527 people. The 3 means thirty thousand, not three. The place of each digit matters.' },
  { title: 'Each column is 10 times bigger', v: function () { return V.chips(['1', '→', '10', '→', '100', '→', '1,000', '→', '10,000']) + '<div class="caption">× 10 each step to the left</div>'; },
    say: ['Moving one column to the left makes a digit worth ten times more. One hundred is ten tens.', 'Moving one column to the right makes it ten times smaller. One thousand is ten hundreds.', 'This pattern never changes, however big the number gets.'],
    real: 'Ten 10p coins make £1, and ten £1 coins make £10. Money follows the same pattern as place value.' },
  { title: 'Zero holds the place', v: function () { return colChart(30405) + '<div class="caption">30,405: no thousands and no tens, so zeros hold the places</div>'; },
    say: ['A zero in a column means there is none of that column. It holds the place so the other digits stay in the right columns.', 'In 30,405 there are 3 ten thousands, no thousands, 4 hundreds, no tens and 5 ones.', 'If we left the zeros out, we would write 345, a very different number.'],
    real: 'A phone number or a house number with a zero in the middle would point you to the wrong place without it. Zero keeps every digit where it belongs.' },
  { title: 'Reading, writing and ordering numbers', v: function () { return '<div class="flow"><span class="chip">45,206</span></div><div class="caption">forty-five thousand, two hundred and six</div><div class="flow"><span class="chip">45,206</span><span>=</span><span class="chip">40,000 + 5,000 + 200 + 6</span></div>'; },
    say: ['To read a big number, say the thousands part, then the word thousand, then the rest. 45,206 is forty-five thousand, two hundred and six.', 'Expanded form splits a number into the value of each digit: 40,000 + 5,000 + 200 + 6.', 'To order numbers, compare the digits from the left. The first column that differs decides which is bigger.'],
    real: 'Prices of cars, populations of towns and the length of a road in metres are all big numbers. Reading them aloud correctly is a real-life skill.' },
  { title: 'Tenths and hundredths', v: function () { return decChart(3, 4, 7) + '<div class="caption">3.47: 3 ones, 4 tenths, 7 hundredths</div>'; },
    say: ['Decimals extend place value to the right of the decimal point. The first column is tenths and the second is hundredths.', 'A tenth is one part of ten equal parts. A hundredth is one part of a hundred equal parts.', 'In 3.47 the 4 is worth 4 tenths, which is 0.4, and the 7 is worth 7 hundredths, which is 0.07.', 'To compare decimals, line them up by the point and compare from the left: 0.6 is bigger than 0.58, because 6 tenths beats 5 tenths.'],
    real: 'Money is a decimal number: £3.47 is 3 pounds, 4 ten-pences and 7 pennies. A length of 1.25 metres is 1 metre and 25 hundredths of a metre.' }
];
var LEARN2 = [
  { title: 'Why do we round?', v: function () { return '<div class="flow"><span class="chip">38,642</span><span>≈</span><span class="chip big">39,000</span></div><div class="caption">About 39,000 people watched the match</div>'; },
    say: ['Rounding changes a number to a nearby, friendlier number. We round when an exact answer is not needed.', 'The rounded number is close to the real one. 38,642 is nearly 39,000.', 'We say "approximately" and use the symbol ≈ which means about equal to.'],
    real: 'Newspapers say about 39,000 fans came to the match, not 38,642. Shopkeepers round prices in their head to see if they have enough money.' },
  { title: 'Rounding to the nearest 10', ex: exRound10, v: '', say: [], real: 'If a book costs £7.68, you think of it as about £8. If a packet has 63 sweets, there are about 60.' },
  { title: 'Rounding to the nearest 100', ex: exRound100, v: '', say: [], real: 'A shop says it sells about 4,600 bars of chocolate a week, not 4,638. The nearest 100 is easy to say and remember.' },
  { title: 'Rounding to the nearest 1,000 and the 5 rule', v: function () { return numberLine(6000, 7000, 6500, '6,500 is halfway between 6,000 and 7,000') + '<div class="caption">6,500 is exactly halfway, so it rounds up to 7,000</div>'; },
    say: ['To round to the nearest 1,000, look at the hundreds digit. If it is 5 or more, round up. If it is 4 or less, stay.', 'The number exactly halfway rounds up. So 6,500 rounds up to 7,000, and 6,499 rounds down to 6,000.', 'Underline the digit you are rounding to, check the digit next door, and then put zeros after it.'],
    real: 'A town of 12,486 people might be described as about 12,000. A town of 12,501 would be about 13,000.' },
  { title: 'Rounding decimals to a whole number', ex: exRoundDec, v: '', say: [], real: 'A parcel of 2.7 kilograms is about 3 kilograms. A plank of 1.4 metres is about 1 metre long.' },
  { title: 'Rounding to estimate', v: function () { return '<div class="flow"><span class="chip">398</span><span>+</span><span class="chip">203</span><span>≈</span><span class="chip">400</span><span>+</span><span class="chip">200</span><span>=</span><span class="chip big">600</span></div>'; },
    say: ['An estimate is a quick, close answer. Round the numbers first, then calculate with the easy numbers.', 'To estimate 398 + 203, round to 400 + 200 = 600. The exact answer, 601, is close.', 'Estimating checks that an answer makes sense. If your estimate is 600 and your answer is 6,010, you have made a mistake.'],
    real: 'In a shop you can add the rounded prices to see if £20 is enough. A bag at £7.95, a book at £5.10 and a pen at £2.05 is about £8 + £5 + £2 = £15.' }
];

/* ---------- questions ---------- */
function genWarm() {
  var a = rnd(2, 9), b = rnd(2, 9), n = rnd(11, 89) * 10 + rnd(1, 9);
  return shuffle([
    Q({ tag: 'Mental maths', text: 'What is <b>' + a + ' × 10</b>?', answer: String(a * 10), hints: ['Multiplying by 10 moves each digit one column to the left.', 'Write the number, then a zero to hold the ones place.'], explain: a + ' × 10 = ' + (a * 10) + '.' }),
    Q({ tag: 'Mental maths', text: 'What is <b>' + (b * 100) + ' ÷ 10</b>?', answer: String(b * 10), hints: ['Dividing by 10 moves each digit one column to the right.', 'Take one zero away from the end.'], explain: (b * 100) + ' ÷ 10 = ' + (b * 10) + '.' }),
    Q({ tag: 'Mental maths', text: 'What is the <b>tens digit</b> in <b>' + n + '</b>?', answer: String(Math.floor(n / 10) % 10), hints: ['The ones digit is the last digit. The tens digit is next to it.', 'Count one column to the left of the ones.'], explain: 'In ' + n + ' the tens digit is ' + (Math.floor(n / 10) % 10) + '.' }),
    Q({ tag: 'Mental maths', text: 'What is <b>' + (a + b) + ' + ' + a + '</b>?', answer: String(2 * a + b), hints: ['Add the ones carefully.', 'Start with ' + (a + b) + ' and count on ' + a + '.'], explain: (a + b) + ' + ' + a + ' = ' + (2 * a + b) + '.' }),
    Q({ tag: 'Mental maths', text: 'What is <b>half of ' + (b * 20) + '</b>?', answer: String(b * 10), hints: ['Half means divide by 2.', 'Halve the tens first, then the ones.'], explain: 'Half of ' + (b * 20) + ' is ' + (b * 10) + '.' })
  ]).slice(0, 4);
}
function genValue() {
  var n = rnd(10000, 99999), i = rnd(0, 4), d = digitsOf(n, 5)[i];
  if (d === 0) { d = rnd(1, 9); var ds = digitsOf(n, 5); ds[i] = d; n = Number(ds.join('')); }
  var shown = fmtInt(n);
  return Q({ tag: 'Place value', text: 'What is the value of the digit <b>' + d + '</b> in the <b>' + COLS[i] + '</b> column of <b>' + shown + '</b>?', answer: String(d * Math.pow(10, 4 - i)),
    hints: ['Find the ' + COLS[i] + ' column in the number.', 'The value is the digit times the value of its column.'], explain: 'In ' + shown + ' the ' + d + ' is in the ' + COLS[i] + ' column. Its value is ' + d + ' × ' + fmtInt(Math.pow(10, 4 - i)) + ' = ' + fmtInt(d * Math.pow(10, 4 - i)) + '.' });
}
function genExpanded() {
  var n = rnd(10000, 99999), d = digitsOf(n, 5), pos = rnd(1, 3);
  if (d[pos] === 0) { d[pos] = rnd(1, 9); n = Number(d.join('')); }
  var parts = d.map(function (x, i) { return x * Math.pow(10, 4 - i); }), missing = parts[pos];
  var shown = parts.map(function (p, i) { return i === pos ? '?' : fmtInt(p); }).filter(function (x, i) { return parts[i] !== 0 || i === pos; }).join(' + ');
  return Q({ tag: 'Place value', text: fmtInt(n) + ' = ' + shown + '. What is the missing number?', answer: String(missing),
    hints: ['Expanded form shows the value of each digit added together.', 'Go column by column and find the digit that has no part shown, then say what it is worth.'], explain: 'The missing part is ' + fmtInt(missing) + '.' });
}
function genOrder() {
  var base = rnd(10, 90) * 1000, nums = [];
  while (nums.length < 4) { var x = base + rnd(1, 9) * pick([1, 10, 100, 1000]) + rnd(0, 9); if (nums.indexOf(x) === -1) nums.push(x); }
  var big = Math.random() < 0.5, sorted = nums.slice().sort(function (a, b) { return a - b; }), ans = big ? sorted[3] : sorted[0];
  return Q({ tag: 'Ordering numbers', type: 'mc', text: 'Which is the <b>' + (big ? 'largest' : 'smallest') + '</b> of these numbers: ' + nums.map(fmtInt).join(', ') + '?', options: shuffle(nums.map(fmtInt)), answer: fmtInt(ans),
    hints: ['Compare the numbers starting from the left, at the biggest column.', 'If two numbers have the same digit, move one column to the right.'], explain: 'The ' + (big ? 'largest' : 'smallest') + ' is ' + fmtInt(ans) + '. Compare the digits from the left.' });
}
function genDecCompare() {
  var a = rnd(1, 9), b = rnd(1, 9), x, y;
  x = a / 10; y = (b + (a === b ? 1 : 0)) % 10 / 10 + 0.0; var d2 = rnd(1, 9);
  var p = trimNum(a / 10), q = trimNum((a * 10 + d2 - (d2 > 5 ? 10 : 0) * 0) / 100);
  var big = (a * 10 + 0) > (a * 10 + d2) ? p : q;
  // make a pair like 0.6 and 0.58
  var t1 = rnd(2, 8), h = rnd(1, 9), left = t1 / 10, right = (t1 - 1) / 10 + (h / 100) ;
  right = Math.round(right * 100) / 100;
  var ans = left > right ? left : right;
  return Q({ tag: 'Decimals', type: 'mc', text: 'Which is <b>bigger</b>: <b>' + trimNum(left) + '</b> or <b>' + trimNum(right) + '</b>?', options: shuffle([trimNum(left), trimNum(right)]), answer: trimNum(ans),
    hints: ['Write both with the same number of decimal places, so each has tenths and hundredths.', 'Compare the tenths first.'], explain: trimNum(left) + ' = ' + (Math.round(left * 100) / 100).toFixed(2) + ' and ' + trimNum(right) + ' = ' + right.toFixed(2) + '. ' + ans.toFixed(2) + ' is bigger.' });
}
function genDecValue() {
  var w = rnd(1, 9), t = rnd(2, 9), h = rnd(2, 9), where = pick(['tenths', 'hundredths']), val = where === 'tenths' ? t / 10 : h / 100;
  return Q({ tag: 'Decimals', text: 'What is the value of the <b>' + (where === 'tenths' ? t : h) + '</b> in the ' + where + ' column of <b>' + w + '.' + t + h + '</b>?', answer: trimNum(val),
    hints: ['The first column after the point is tenths. The second is hundredths.', 'A tenth is 0.1 and a hundredth is 0.01. Multiply the digit by its column value.'], explain: 'The ' + (where === 'tenths' ? t : h) + ' is in the ' + where + ' column, worth ' + trimNum(val) + '.' });
}
function genRound(place) {
  var n = rnd(1000, 99999), r = Math.round(n / place) * place, pn = place === 10 ? 'tens' : place === 100 ? 'hundreds' : 'thousands';
  if ((n % place) * 2 === place) r = n - (n % place) + place;
  var style = rnd(0, 3), hints = ['Underline the ' + pn + ' digit, then look at the digit to its right.', 'If that next digit is in the top half of the digits, the underlined digit goes up by one. Otherwise it stays. Then put zeros after it.'];
  var lo = n - (n % place);
  if (style === 1) return Q({ tag: 'Rounding', type: 'mc', text: 'Which number is <b>' + fmtInt(n) + '</b> rounded to the nearest <b>' + fmtInt(place) + '</b>?', options: shuffle([lo, lo + place, lo - place, lo + 2 * place].map(fmtInt)), answer: fmtInt(r), hints: hints, explain: fmtInt(n) + ' lies between ' + fmtInt(lo) + ' and ' + fmtInt(lo + place) + ' and is nearer ' + fmtInt(r) + '.' });
  if (style === 2) return Q({ tag: 'Rounding', type: 'mc', text: 'Which two landmarks is <b>' + fmtInt(n) + '</b> between, when we round to the nearest <b>' + fmtInt(place) + '</b>?', options: shuffle([fmtInt(lo) + ' and ' + fmtInt(lo + place), fmtInt(lo - place) + ' and ' + fmtInt(lo), fmtInt(lo + place) + ' and ' + fmtInt(lo + 2 * place), fmtInt(lo - 2 * place) + ' and ' + fmtInt(lo - place)]), answer: fmtInt(lo) + ' and ' + fmtInt(lo + place), hints: ['The landmarks are multiples of ' + fmtInt(place) + '.', 'Find the multiple just below the number and the one just above it.'], explain: fmtInt(lo) + ' ≤ ' + fmtInt(n) + ' < ' + fmtInt(lo + place) + '.' });
  if (style === 3) { var pr = pick(['tickets sold', 'steps walked', 'books in a library', 'visitors to a castle']); return Q({ tag: 'Rounding in context', text: 'A school counted <b>' + fmtInt(n) + '</b> ' + pr + '. Round this to the nearest <b>' + fmtInt(place) + '</b>.', answer: String(r), hints: hints, explain: fmtInt(n) + ' rounds to ' + fmtInt(r) + '.' }); }
  return Q({ tag: 'Rounding', text: 'Round <b>' + fmtInt(n) + '</b> to the nearest <b>' + fmtInt(place) + '</b>.', answer: String(r), hints: hints, explain: 'The landmarks are ' + fmtInt(lo) + ' and ' + fmtInt(lo + place) + '. ' + fmtInt(n) + ' is nearer ' + fmtInt(r) + '.' });
}
function genRound10() { return genRound(10); }
function genRound100() { return genRound(100); }
function genRound1000() { return genRound(1000); }
function genRoundDec() {
  var w = rnd(1, 99), t = rnd(0, 9), h = rnd(0, 9), v = w + t / 10 + h / 100, r = t >= 5 ? w + 1 : w;
  return Q({ tag: 'Rounding decimals', text: 'Round <b>' + v.toFixed(2) + '</b> to the nearest <b>whole number</b>.', answer: String(r),
    hints: ['Look at the ones digit and then the tenths digit just after the point.', 'If the tenths digit is in the top half of the digits, round up. Otherwise the whole number stays.'], explain: 'The tenths digit is ' + t + ', so ' + v.toFixed(2) + ' rounds to ' + r + '.' });
}
function genEstimate() {
  var a = rnd(2, 9) * 100 + rnd(1, 9) * 10 + rnd(0, 9), b = rnd(2, 8) * 100 + rnd(1, 9) * 10 + rnd(0, 9), ra = Math.round(a / 100) * 100, rb = Math.round(b / 100) * 100;
  return Q({ tag: 'Estimating', text: 'Estimate <b>' + a + ' + ' + b + '</b> by rounding each number to the nearest 100.', answer: String(ra + rb),
    hints: ['Round ' + a + ' first, then round ' + b + ', each to the nearest 100.', 'Add the two rounded numbers.'], explain: a + ' ≈ ' + ra + ' and ' + b + ' ≈ ' + rb + '. ' + ra + ' + ' + rb + ' = ' + (ra + rb) + '.' });
}
function genCrowd() {
  var n = rnd(2100, 49999), place = pick([100, 1000]), r = Math.round(n / place) * place;
  if ((n % place) * 2 === place) r = n - (n % place) + place;
  return Q({ tag: 'Rounding in real life', text: 'A crowd of <b>' + fmtInt(n) + '</b> people went to a concert. A newspaper reports the crowd to the nearest <b>' + fmtInt(place) + '</b>. What does it print?', answer: String(r),
    hints: ['Find the ' + (place === 100 ? 'hundreds' : 'thousands') + ' digit and look at the digit just to its right.', 'Round up if that digit is 5 or more, then replace the digits to the right with zeros.'], explain: fmtInt(n) + ' rounds to ' + fmtInt(r) + ' to the nearest ' + fmtInt(place) + '.' });
}
function genLargest() {
  var ds = shuffle([1, 3, 4, 6, 8, 9, 2, 5, 7].slice()).slice(0, 4), big = Math.random() < 0.5, s = ds.slice().sort(function (a, b) { return big ? b - a : a - b; }), ans = Number(s.join(''));
  return Q({ tag: 'Place value reasoning', text: 'Use each of the digits <b>' + ds.join(', ') + '</b> once to make the <b>' + (big ? 'largest' : 'smallest') + '</b> four-digit number.', answer: String(ans),
    hints: ['The leftmost column is worth the most, so put the ' + (big ? 'biggest' : 'smallest') + ' digit there.', 'Then put the next ' + (big ? 'biggest' : 'smallest') + ' digit in the next column, and so on.'], explain: 'Put the digits in order from the ' + (big ? 'biggest to smallest' : 'smallest to biggest') + ': ' + fmtInt(ans) + '.' });
}
function genLine() {
  var lo = rnd(1, 9) * 100, step = pick([10, 20, 50]), val = lo + step * rnd(1, 9), hi = lo + step * 10;
  return Q({ tag: 'Non-verbal reasoning', pic: numberLine(lo, hi, val, 'A number line from ' + lo + ' to ' + hi + ' with an arrow'), data: 'The number line goes from ' + lo + ' to ' + hi + ' in ten equal steps. An arrow points to a mark. What number does the arrow show?', text: 'The line goes from <b>' + lo + '</b> to <b>' + hi + '</b> in 10 equal steps. What number is the arrow pointing to?', answer: String(val),
    hints: ['Work out the size of one step: find the distance between the two ends and share it into 10 steps.', 'Count the steps from the left end to the arrow and add that many steps to the start.'], explain: 'Each step is ' + step + '. The arrow is ' + ((val - lo) / step) + ' steps from ' + lo + ', so it shows ' + val + '.' });
}
var VERBAL = [
  { text: 'Which is the odd one out? <b>400, 4,000, 40, 4,001</b>', options: ['400', '4,000', '40', '4,001'], answer: '4,001', hints: ['Look at the zeros in each number.', 'Three of these are a 4 followed by zeros. One has another digit.'], explain: '400, 4,000 and 40 are all 4 followed by zeros. 4,001 has a 1 on the end.' },
  { text: '<b>Hundreds</b> is to <b>tens</b> as <b>tens</b> is to ...', options: ['ones', 'thousands', 'tenths', 'hundredths'], answer: 'ones', hints: ['Each word is the column just to the right of the one before.', 'Which column is just to the right of tens?'], explain: 'Hundreds then tens then ones: each is the next column to the right.' },
  { text: 'Ben says 0.45 is bigger than 0.5 because 45 is bigger than 5. What is his mistake?', options: ['He compared the digits, not the columns. 0.5 is 5 tenths, which is bigger than 4 tenths', 'He is right', '0.45 is the same as 0.5', 'Decimals cannot be compared'], answer: 'He compared the digits, not the columns. 0.5 is 5 tenths, which is bigger than 4 tenths', hints: ['Write 0.5 as 0.50 so both have two decimal places.', 'Compare the tenths columns first.'], explain: '0.50 has 5 tenths and 0.45 has 4 tenths, so 0.5 is bigger.' },
  { text: 'Which number is <b>rounded</b> to the nearest 100?', options: ['4,700', '4,730', '4,705', '4,670'], answer: '4,700', hints: ['A number rounded to the nearest 100 ends in two zeros.', 'Look at the last two digits of each choice.'], explain: 'Only 4,700 ends in 00, so it is a multiple of 100.' },
  { text: 'A shop says it sold <b>about 5,000</b> tickets, rounded to the nearest 1,000. Which could be the exact number?', options: ['4,720', '5,501', '4,380', '5,640'], answer: '4,720', hints: ['Numbers that round to 5,000 are between 4,500 and 5,499.', 'Check each choice against that range.'], explain: '4,720 is between 4,500 and 5,499, so it rounds to 5,000.' }
];
function genVerbal() { var v = pick(VERBAL); return Q({ tag: 'Verbal reasoning', type: 'mc', text: v.text, options: shuffle(v.options.slice()), answer: v.answer, hints: v.hints, explain: v.explain }); }
function practiceSet() { return H.buildPracticeSet([genValue, genExpanded, genOrder, genDecCompare, genDecValue, genRound10, genRound100, genRound1000, genRoundDec, genEstimate, genCrowd, genLargest, genLine, genVerbal], 50); }

Studio.addTopic({ n: 501, year: 'P5', dn: 1, replaces: 1, short: 'Place value', title: 'Place value and rounding', blurb: 'Numbers to 100,000, tenths and hundredths, comparing and ordering, rounding to 10, 100 and 1,000, and estimating.', practiceCount: 50, gens: {},
  steps: [
    { id: 'warm', label: 'Warm-up', type: 'quiz', tag: 'Step 1 · Warm-up', title: 'Mental maths warm-up', lead: 'Four quick questions.', make: genWarm, doneLabel: 'On to place value' },
    { id: 'learn1', label: 'Place value', type: 'slides', tag: 'Place value', slides: LEARN1 },
    { id: 'lab1', label: 'Number builder', type: 'lab', tag: 'Step 3 · We do it together', title: 'Build the number', lead: 'Tap the arrows to build each target number, one column at a time. Build three numbers.', mount: mountBuildLab },
    { id: 'learn2', label: 'Rounding', type: 'slides', tag: 'Rounding and estimating', slides: LEARN2 },
    { id: 'lab2', label: 'Rounding line', type: 'lab', tag: 'Step 5 · We do it together', title: 'Round on the number line', lead: 'Slide the number and choose 10, 100 or 1,000. See which landmark is nearer.', mount: mountRoundLab },
    { id: 'practise', label: 'Practise', type: 'quiz', best: true, tag: 'Step 6 · Your turn', title: 'Practise', lead: '50 questions on place value, decimals and rounding. Use the hints one at a time.', make: practiceSet }
  ] });
})();
