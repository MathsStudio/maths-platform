(function () { 'use strict';
var H = Studio.h, $ = H.$, rnd = H.rnd, shuffle = H.shuffle, pick = H.pick, V = Studio.viz;
function Q(o) { o.type = o.type || 'input'; return o; }
function factorsOf(n) { var f = []; for (var i = 1; i <= n; i++) if (n % i === 0) f.push(i); return f; }
function isPrime(n) { return n > 1 && factorsOf(n).length === 2; }
function gcd2(a, b) { return b ? gcd2(b, a % b) : a; }
function lcm2(a, b) { return a * b / gcd2(a, b); }
function tri(k) { return k * (k + 1) / 2; }
function pairsOf(n) { var p = []; for (var i = 1; i * i <= n; i++) if (n % i === 0) p.push([i, n / i]); return p; }
function multChips(k, count) { var a = []; for (var i = 1; i <= count; i++) a.push(String(k * i)); a.push('...'); return V.chips(a); }
function triDots(k) {
  var d = 24, w = 20 + k * d, h = 14 + k * d, s = '<svg viewBox="0 0 ' + w + ' ' + h + '" role="img" aria-label="A triangle of ' + tri(k) + ' dots with ' + k + ' rows" style="width:100%;max-width:' + Math.min(w, 300) + 'px;height:auto">';
  for (var r = 0; r < k; r++) for (var c = 0; c <= r; c++) s += '<circle cx="' + (w / 2 + (c - r / 2) * d) + '" cy="' + (12 + r * d + d / 2) + '" r="8" style="fill:' + V.hsl(255) + '"/>';
  return s + '</svg>';
}
function sqDots(k) { return V.array(k, k); }
function pairChips(n) { return V.chips(pairsOf(n).map(function (p) { return p[0] + ' × ' + p[1]; }).reduce(function (a, x, i) { if (i) a.push('·'); a.push(x); return a; }, []).map(function (x) { return x === '·' ? '·' : x; })); }

/* ---------- labs ---------- */
function mountFactorLab(host, ctx) {
  var n = 12, seen = {}, sawPrime = false;
  host.innerHTML = '<div class="visual" id="fVis" style="text-align:center;overflow-x:auto"></div><div class="lab-out say" id="fOut" aria-live="polite"></div>' +
    '<label class="eyebrow" for="fN">Choose a number (n)</label><input class="slider" id="fN" type="range" min="2" max="36" value="12" style="width:100%"><div class="explain" id="fExp"></div><p class="note" id="fNote"></p>';
  function draw() {
    var f = factorsOf(n), ps = pairsOf(n), prime = isPrime(n);
    $('fVis').innerHTML = '<div class="lab-grid" style="align-items:end">' + ps.map(function (p) {
      return '<div style="text-align:center">' + V.array(p[0], p[1]) + '<div class="caption" style="font-size:.95rem">' + p[0] + ' × ' + p[1] + '</div></div>';
    }).join('') + '</div>';
    $('fOut').textContent = n + ' has ' + f.length + ' factors: ' + f.join(', ') + (prime ? '. It is a prime number.' : '.');
    $('fExp').innerHTML = prime ? 'Only one rectangle can be made, one row of ' + n + '. A number with just two factors, 1 and itself, is <b>prime</b>.' :
      'Each rectangle shows a <b>factor pair</b>. The factors of ' + n + ' are ' + f.join(', ') + '.' + (Math.sqrt(n) % 1 === 0 ? ' This one makes a perfect square, so it is a <b>square number</b>.' : '');
    seen[n] = 1; if (prime) sawPrime = true;
    var c = Object.keys(seen).length;
    $('fNote').textContent = 'Numbers explored: ' + c + ' of 8' + (sawPrime ? '' : ' (find a prime too)');
    if (c >= 8 && sawPrime) ctx.complete();
  }
  $('fN').addEventListener('input', function (e) { n = Number(e.target.value); draw(); });
  draw();
}
function mountSieveLab(host, ctx) {
  var used = {}, steps = [2, 3, 5, 7];
  host.innerHTML = '<p class="say">Cross out the multiples of each prime, one prime at a time. The numbers left standing are prime.</p><div class="tools" id="sBtns"></div><div id="sGrid" style="display:grid;grid-template-columns:repeat(10,1fr);gap:4px;max-width:420px;margin:10px auto"></div><div class="lab-out say" id="sOut" aria-live="polite"></div>';
  function draw() {
    var crossed = {};
    steps.forEach(function (p) { if (used[p]) for (var m = p * 2; m <= 50; m += p) crossed[m] = true; });
    var g = '';
    for (var i = 1; i <= 50; i++) {
      var isP = i > 1 && !crossed[i], st = i === 1 ? 'opacity:.35' : crossed[i] ? 'opacity:.3;text-decoration:line-through' : (used[2] && used[3] && used[5] && used[7] ? 'background:var(--hl);font-weight:800' : 'font-weight:700');
      g += '<span style="text-align:center;padding:6px 0;border:1px solid var(--line);border-radius:6px;' + st + '">' + i + '</span>';
    }
    $('sGrid').innerHTML = g;
    $('sBtns').innerHTML = steps.map(function (p) { return '<button class="btn' + (used[p] ? ' ghost' : '') + '" type="button" data-p="' + p + '"' + (used[p] ? ' disabled' : '') + '>Cross out multiples of ' + p + '</button>'; }).join('');
    var done = steps.every(function (p) { return used[p]; });
    $('sOut').textContent = done ? 'The primes up to 50 are 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47. There are 15 of them.' : 'Primes found so far are the numbers not crossed out. Keep going.';
    host.querySelectorAll('[data-p]').forEach(function (b) { b.addEventListener('click', function () { used[Number(b.dataset.p)] = true; draw(); }); });
    if (done) ctx.complete();
  }
  draw();
}

/* ---------- slides ---------- */
function exOf(q, steps, final, render) { return { q: q, steps: steps, final: final, render: render }; }
var exFactors = exOf('Find all the factors of 24.',
  ['A factor divides exactly with nothing left over. Start with the pair 1 × 24. So 1 and 24 are factors.', 'Try 2. 2 × 12 = 24, so 2 and 12 are factors.', 'Try 3. 3 × 8 = 24, so 3 and 8 are factors. Try 4. 4 × 6 = 24, so 4 and 6 are factors.', 'Try 5. It does not divide 24. The next number, 6, is already in our list, so we can stop.', 'The factors of 24 are 1, 2, 3, 4, 6, 8, 12 and 24.'],
  'Factors of 24: 1, 2, 3, 4, 6, 8, 12, 24.',
  function (shown) { var all = ['1 × 24', '2 × 12', '3 × 8', '4 × 6'], k = shown <= 0 ? 0 : shown === 1 ? 1 : shown === 2 ? 2 : 4, out = []; for (var i = 0; i < k; i++) { if (i) out.push('·'); out.push(all[i]); } return out.length ? V.chips(out) : V.chips(['24']); });
var exLcm = exOf('Bus A leaves every 4 minutes and bus B every 6 minutes. Both leave at 9:00. When do they next leave together?',
  ['Write the multiples of 4: 4, 8, 12, 16, 20, 24.', 'Write the multiples of 6: 6, 12, 18, 24, 30.', 'Look for the smallest number in both lists. 12 is in both.', 'So the lowest common multiple of 4 and 6 is 12. The buses next leave together 12 minutes later, at 9:12.'],
  'The buses leave together again at 9:12.',
  function (shown) { return '<div class="visual"><div class="caption">Multiples of 4</div>' + V.chips(['4', '8', shown >= 3 ? '*12' : '12', '16', '20']) + '<div class="caption">Multiples of 6</div>' + V.chips(['6', shown >= 3 ? '*12' : '12', '18', '24', '30']) + '</div>'; });
var exPrime = exOf('Is 51 a prime number?',
  ['A prime has exactly two factors. We look for any factor besides 1 and 51.', 'Does 2 divide 51? No, 51 is odd. Does 5? No, it does not end in 0 or 5.', 'Does 3? The digits add up to 5 + 1 = 6, and 6 is in the 3 times table, so yes. 51 ÷ 3 = 17.', 'So 51 has more than two factors: 1, 3, 17 and 51. It is not prime.'],
  '51 is not prime: 3 × 17 = 51.',
  function (shown) { return V.chips(['51', '→', shown >= 3 ? '3 × 17' : '?', shown >= 3 ? 'not prime' : '']); });
var exPack = exOf('Mia has 36 biscuits. She packs them into boxes with the same number in each box and none left over. Which box sizes could she use, and how many different sizes is that?',
  ['Box sizes that work must divide 36 exactly. So we need the factors of 36.', 'Pairs that make 36: 1 × 36, 2 × 18, 3 × 12, 4 × 9, 6 × 6.', 'The factors are 1, 2, 3, 4, 6, 9, 12, 18 and 36. The pair 6 × 6 gives 6 only once.', 'That is 9 different box sizes.'],
  'Nine box sizes: 1, 2, 3, 4, 6, 9, 12, 18 or 36 biscuits.',
  function (shown) { return V.array(shown >= 2 ? 6 : 4, shown >= 2 ? 6 : 9); });

var LEARN1 = [
  { title: 'Multiples', v: function () { return multChips(6, 5) + '<div class="caption">The multiples of 6 are the answers in the 6 times table</div>'; },
    say: ['A multiple is a number you get by multiplying by a whole number. The multiples of 6 are 6, 12, 18, 24, 30 and so on.', 'They are the answers in the times table, and the list never stops.', 'To check if a number is a multiple of 6, ask: does it divide by 6 with nothing left over? 42 ÷ 6 = 7, so 42 is a multiple of 6.', 'A number is a multiple of itself, and 0 is a multiple of every number.'],
    real: 'Bus stops, bell times and bar codes all use multiples. If a bus comes every 15 minutes, the times are all multiples of 15 minutes after the first one.' },
  { title: 'Factors', v: function () { return V.array(3, 4) + '<div class="caption">3 rows of 4 makes 12, so 3 and 4 are factors of 12</div>'; },
    say: ['A factor is a number that divides exactly into another number. It fits in with nothing left over.', 'Twelve dots can be arranged in 3 rows of 4. So 3 and 4 are factors of 12. They multiply to make 12.', 'Factors always come in pairs, and the number 1 and the number itself are always factors.'],
    real: 'Sharing 12 cards fairly between friends is a factor problem. You can share them equally between 1, 2, 3, 4, 6 or 12 people, and those are the factors of 12.' },
  { title: 'Finding all the factors', ex: exFactors, v: '', say: [], real: 'A teacher lining up 24 children can make rows of 2, 3, 4, 6, 8 or 12. Those are the sizes that leave nobody out.' },
  { title: 'Common factors and the highest common factor', v: function () { return '<div class="caption">Factors of 12</div>' + V.chips(['1', '2', '3', '4', '6', '12']) + '<div class="caption">Factors of 18</div>' + V.chips(['1', '2', '3', '6', '9', '18']) + '<div class="caption">Common: 1, 2, 3 and 6. The highest is 6.</div>'; },
    say: ['A common factor is a number that is a factor of two or more numbers.', 'List the factors of 12 and of 18. The factors in both lists are 1, 2, 3 and 6.', 'The biggest of these is 6. It is called the highest common factor, or HCF.', 'The HCF is the largest piece you can use to share both amounts equally.'],
    real: 'You have a 12 metre ribbon and an 18 metre ribbon. You want to cut both into equal pieces with no ribbon left. The longest pieces you can cut are 6 metres each.' },
  { title: 'Common multiples and the lowest common multiple', ex: exLcm, v: '', say: [], real: 'Two buses that leave a station at different intervals will meet again at the lowest common multiple of their gaps. Timetable planners work this out.' }
];
var LEARN2 = [
  { title: 'Prime and composite numbers', v: function () { return '<div class="caption">Prime numbers</div>' + V.chips(['2', '3', '5', '7', '11', '13']) + '<div class="caption">Composite numbers</div>' + V.chips(['4', '6', '8', '9', '10', '12']); },
    say: ['A prime number has exactly two factors: 1 and itself. 7 is prime because only 1 and 7 divide into it.', 'A composite number has more than two factors. 12 is composite: 1, 2, 3, 4, 6 and 12 all divide into it.', 'The number 1 is neither prime nor composite, because it has just one factor.', 'The number 2 is the only even prime number. Every other even number has 2 as a factor.'],
    real: 'Prime numbers keep information safe. Online banking and secure websites use very large primes to lock your data.' },
  { title: 'Is it prime? A quick test', ex: exPrime, v: '', say: [], real: 'Testing for primes is like checking whether a seating plan can be split into equal groups. If it can be split, it is not prime.' },
  { title: 'Divisibility rules', v: function () { return '<table class="tbl"><tr><th>Divisible by</th><th>Quick test</th></tr><tr><td>2</td><td>ends in 0, 2, 4, 6 or 8</td></tr><tr><td>3</td><td>digits add to a multiple of 3</td></tr><tr><td>5</td><td>ends in 0 or 5</td></tr><tr><td>9</td><td>digits add to a multiple of 9</td></tr><tr><td>10</td><td>ends in 0</td></tr></table>'; },
    say: ['Divisibility rules are shortcuts to see if a number divides exactly, without doing the division.', 'A number is divisible by 2 if it ends in an even digit, and by 5 if it ends in 0 or 5.', 'For 3, add up the digits. 123 has digits 1 + 2 + 3 = 6, so 123 is divisible by 3.', 'For 9, the digits must add to a multiple of 9. And for 10, the number must end in 0.'],
    real: 'Checking if a bill can be split equally between 3 friends is quicker with the rule for 3 than with a calculator.' },
  { title: 'Square numbers', v: function () { return sqDots(4) + '<div class="caption">4 × 4 = 16, so 16 is a square number</div>'; },
    say: ['A square number is what you get when you multiply a number by itself. 4 × 4 = 16.', 'We write this as 4 squared, or 4². The dots make a perfect square, with the same number of rows and columns.', 'The first square numbers are 1, 4, 9, 16, 25, 36, 49, 64, 81 and 100.', 'Square numbers have an odd number of factors, because one factor pairs with itself.'],
    real: 'Floor tiles, chess boards and window panes in a square grid use square numbers. An 8 by 8 chess board has 64 squares.' },
  { title: 'Triangular numbers', v: function () { return triDots(4) + '<div class="caption">1 + 2 + 3 + 4 = 10, so 10 is a triangular number</div>'; },
    say: ['Triangular numbers make a triangle of dots. Row one has 1 dot, row two has 2, row three has 3 and so on.', 'The sequence goes 1, 3, 6, 10, 15, 21. You add one more each time than the last gap.', 'To find the 5th triangular number, add 1 + 2 + 3 + 4 + 5 = 15.'],
    real: 'Ten bowling pins stand in a triangle of 4 rows. That is the fourth triangular number, 10.' },
  { title: 'A factor and prime problem', ex: exPack, v: '', say: [], real: 'Packing eggs, sweets or cards into equal groups is a factor problem. The factors tell you every size of group that works.' }
];

/* ---------- questions ---------- */
function genWarm() {
  var k = rnd(2, 9), mm = rnd(3, 9); if (mm === k) mm = k === 9 ? 8 : k + 1; var n = mm * k;
  return shuffle([
    Q({ tag: 'Mental maths', text: 'What is the <b>5th</b> multiple of <b>' + k + '</b>?', answer: String(5 * k), hints: ['The multiples of ' + k + ' are the numbers in its times table.', 'Count up the times table to the 5th one.'], explain: '5 × ' + k + ' = ' + (5 * k) + '.' }),
    Q({ tag: 'Mental maths', text: 'How many factors does <b>' + pick([6, 10, 14, 15]) + '</b> have?', answer: '4', hints: ['A factor divides exactly. Start with 1 and the number itself.', 'Find one more pair that multiplies to the number.'], explain: 'Numbers like 6, 10, 14 and 15 are each made from two different primes, so they have 4 factors.' }),
    Q({ tag: 'Mental maths', text: 'What is <b>' + k + ' × ' + k + '</b>?', answer: String(k * k), hints: ['This is a square number.', 'Multiply ' + k + ' by itself using your times tables.'], explain: k + ' × ' + k + ' = ' + (k * k) + '.' }),
    Q({ tag: 'Mental maths', text: n + ' ÷ ' + k + ' = ?', answer: String(n / k), hints: ['Use the times table for ' + k + '.', 'Ask: what do I multiply ' + k + ' by to reach ' + n + '?'], explain: n + ' ÷ ' + k + ' = ' + (n / k) + '.' }),
    Q({ tag: 'Mental maths', text: 'What is the <b>smallest prime number</b>?', answer: '2', hints: ['A prime has exactly two factors.', 'Check the number 1 first: how many factors does it have?'], explain: '2 is the smallest prime and the only even prime.' })
  ]).slice(0, 4);
}
function genFactorCount() {
  var n = pick([12, 16, 18, 20, 24, 28, 30, 36, 40, 45, 48]);
  return Q({ tag: 'Factors', text: 'How many factors does <b>' + n + '</b> have?', answer: String(factorsOf(n).length),
    hints: ['A factor divides exactly. Write the pairs that multiply to ' + n + ', starting with 1 × ' + n + '.', 'Test 2, 3, 4 and so on. Stop when the pairs start to repeat. Count every number in the pairs.'],
    explain: 'The factors of ' + n + ' are ' + factorsOf(n).join(', ') + '. That is ' + factorsOf(n).length + ' factors.' });
}
function genBigFactor() {
  var n = pick([14, 15, 18, 20, 21, 24, 25, 28, 30, 32, 35, 36, 40, 42, 45, 48, 50]), f = factorsOf(n), second = f[1];
  return Q({ tag: 'Factors', text: 'What is the <b>largest factor</b> of <b>' + n + '</b> that is smaller than ' + n + '?', answer: String(n / second),
    hints: ['Find the smallest factor of ' + n + ' that is bigger than 1.', 'That factor pairs with the largest one. Divide ' + n + ' by the small factor.'],
    explain: 'The smallest factor above 1 is ' + second + '. ' + n + ' ÷ ' + second + ' = ' + (n / second) + ', so the largest factor below ' + n + ' is ' + (n / second) + '.' });
}
function genHCF() {
  var g = pick([2, 3, 4, 5, 6]), p = pick([2, 3, 4, 5]), q = pick([3, 5, 7]); if (p === q) q = 7;
  var a = g * p, b = g * q, h = gcd2(a, b);
  return Q({ tag: 'Common factors', text: 'What is the <b>highest common factor</b> of <b>' + a + '</b> and <b>' + b + '</b>?', answer: String(h),
    hints: ['List the factors of each number.', 'Find the factors that appear in both lists. Pick the biggest one.'],
    explain: 'Factors of ' + a + ': ' + factorsOf(a).join(', ') + '. Factors of ' + b + ': ' + factorsOf(b).join(', ') + '. The biggest in both is ' + h + '.' });
}
function genLCM() {
  var pr = pick([[4, 6], [6, 8], [3, 5], [4, 10], [6, 9], [5, 6], [8, 12], [3, 7], [10, 15]]), l = lcm2(pr[0], pr[1]);
  return Q({ tag: 'Common multiples', text: 'What is the <b>lowest common multiple</b> of <b>' + pr[0] + '</b> and <b>' + pr[1] + '</b>?', answer: String(l),
    hints: ['Write the first few multiples of each number.', 'Look down both lists for the first number that is in both.'],
    explain: 'Multiples of ' + pr[0] + ': ' + [1, 2, 3, 4, 5].map(function (i) { return pr[0] * i; }).join(', ') + '... Multiples of ' + pr[1] + ': ' + [1, 2, 3, 4, 5].map(function (i) { return pr[1] * i; }).join(', ') + '... The first in both is ' + l + '.' });
}
function genBuses() {
  var pr = pick([[6, 8], [4, 10], [6, 9], [5, 6], [8, 12], [10, 15]]), l = lcm2(pr[0], pr[1]);
  return Q({ tag: 'Common multiples', text: 'A red bus leaves every <b>' + pr[0] + '</b> minutes and a blue bus every <b>' + pr[1] + '</b> minutes. They leave together at 9:00. After how many minutes do they next leave together?', answer: String(l),
    hints: ['They leave together at times that are multiples of both gaps.', 'Find the lowest number that is in both times tables.'],
    explain: 'The lowest common multiple of ' + pr[0] + ' and ' + pr[1] + ' is ' + l + ', so they leave together after ' + l + ' minutes.' });
}
function genNthMultiple() {
  var k = rnd(3, 12), n = rnd(6, 12);
  return Q({ tag: 'Multiples', text: 'What is the <b>' + n + 'th multiple</b> of <b>' + k + '</b>?', answer: String(n * k),
    hints: ['The multiples of ' + k + ' are the numbers in its times table.', 'The ' + n + 'th multiple is ' + n + ' lots of ' + k + '.'], explain: n + ' × ' + k + ' = ' + (n * k) + '.' });
}
function genIsMultiple() {
  var k = pick([3, 4, 6, 7, 8, 9]), right = k * rnd(4, 12), wrong = [];
  while (wrong.length < 3) { var w = right + rnd(1, 11) * (Math.random() < 0.5 ? 1 : -1); if (w > 0 && w % k !== 0 && wrong.indexOf(w) === -1) wrong.push(w); }
  return Q({ tag: 'Multiples', type: 'mc', text: 'Which of these is a <b>multiple of ' + k + '</b>?', options: shuffle([String(right)].concat(wrong.map(String))), answer: String(right),
    hints: ['A multiple of ' + k + ' divides by ' + k + ' with nothing left over.', 'Try dividing each choice by ' + k + '. Only one divides exactly.'], explain: right + ' ÷ ' + k + ' = ' + (right / k) + ' exactly.' });
}
function genPrimeMC() {
  var primes = [11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71], comps = [21, 27, 33, 39, 51, 57, 63, 69, 77, 87, 91, 93], right = pick(primes), c = shuffle(comps.slice()).slice(0, 3);
  return Q({ tag: 'Prime numbers', type: 'mc', text: 'Which of these is a <b>prime number</b>?', options: shuffle([String(right)].concat(c.map(String))), answer: String(right),
    hints: ['A prime number has exactly two factors, 1 and itself.', 'Test each choice by trying 3, 7 and other small numbers. Three of the choices divide by a number besides 1 and themselves.'],
    explain: right + ' has only two factors, 1 and ' + right + '. ' + c.map(function (x) { var f = factorsOf(x); return x + ' = ' + f[1] + ' × ' + (x / f[1]); }).join(', ') + ', so those are composite.' });
}
function genPrimeCount() {
  var hi = pick([10, 20, 30]), cnt = { 10: 4, 20: 8, 30: 10 }[hi];
  return Q({ tag: 'Prime numbers', text: 'How many <b>prime numbers</b> are there between 1 and <b>' + hi + '</b>?', answer: String(cnt),
    hints: ['List the numbers and cross out any that have a factor other than 1 and themselves.', 'Remember 1 is not prime, and 2 is the only even prime.'],
    explain: 'The primes up to ' + hi + ' are ' + [2, 3, 5, 7, 11, 13, 17, 19, 23, 29].filter(function (x) { return x <= hi; }).join(', ') + '. That is ' + cnt + '.' });
}
function genSquare() {
  var k = rnd(3, 13);
  return Q({ tag: 'Square numbers', text: 'What is <b>' + k + '²</b> (' + k + ' squared)?', answer: String(k * k),
    hints: ['Squared means the number multiplied by itself.', 'Work out ' + k + ' lots of ' + k + '.'], explain: k + '² = ' + k + ' × ' + k + ' = ' + (k * k) + '.' });
}
function genSqBetween() {
  var k = rnd(4, 12), lo = k * k - rnd(2, 6), hi = k * k + rnd(2, 6);
  return Q({ tag: 'Square numbers', text: 'Which square number is between <b>' + lo + '</b> and <b>' + hi + '</b>?', answer: String(k * k),
    hints: ['A square number comes from multiplying a whole number by itself, such as 2 × 2 or 3 × 3.', 'Try whole numbers near the middle of the range, multiply each by itself, and see which result lands between the two numbers.'], explain: k + ' × ' + k + ' = ' + (k * k) + ', which is between ' + lo + ' and ' + hi + '.' });
}
function genTriangular() {
  var k = rnd(5, 9), seq = [1, 2, 3, 4].map(tri);
  return Q({ tag: 'Triangular numbers', pic: triDots(4), data: 'The picture shows the fourth triangular number, 10. The triangular numbers go 1, 3, 6, 10. Find the number at position ' + k + '.', text: 'The triangular numbers go <b>' + seq.join(', ') + '</b>, ... What is the <b>' + k + 'th</b> triangular number?', answer: String(tri(k)),
    hints: ['Look at the gaps between the numbers. They grow by 1 each time.', 'The ' + k + 'th number is the total of 1 + 2 + 3 and so on, up to ' + k + '.'], explain: 'Add 1 + 2 + ... + ' + k + ' = ' + tri(k) + '.' });
}
function genDivRule() {
  var rule = pick([3, 9]), good = [], bad = [];
  while (good.length < 1) { var g = rnd(120, 990); if (g % rule === 0) good.push(g); }
  while (bad.length < 3) { var b = rnd(120, 990); if (b % rule !== 0 && bad.indexOf(b) === -1) bad.push(b); }
  var sum = String(good[0]).split('').reduce(function (a, d) { return a + Number(d); }, 0);
  return Q({ tag: 'Divisibility', type: 'mc', text: 'Which of these numbers is <b>divisible by ' + rule + '</b>?', options: shuffle([String(good[0])].concat(bad.map(String))), answer: String(good[0]),
    hints: ['Add up the digits of each number.', 'For divisibility by ' + rule + ', the digit sum must be in the ' + rule + ' times table.'], explain: good[0] + ' has digits that add to ' + sum + ', and ' + sum + ' is in the ' + rule + ' times table, so ' + good[0] + ' is divisible by ' + rule + '.' });
}
function genRectangles() {
  var n = pick([12, 16, 18, 20, 24, 30, 36]), r = pairsOf(n).length;
  return Q({ tag: 'Factor problems', text: 'Priya arranges <b>' + n + '</b> square tiles into a rectangle with no gaps. How many <b>different rectangles</b> can she make? (A 2 by 6 and a 6 by 2 count as the same.)', answer: String(r),
    hints: ['Each rectangle comes from a factor pair of ' + n + '.', 'List the factor pairs and count them. Do not count a pair twice.'], explain: 'The factor pairs of ' + n + ' are ' + pairsOf(n).map(function (p) { return p[0] + ' × ' + p[1]; }).join(', ') + '. That is ' + r + ' rectangles.' });
}
function genArrayQ() {
  var n = pick([12, 18, 20, 24, 30, 36]), ps = pairsOf(n), p = pick(ps.filter(function (x) { return x[0] > 1 && x[0] !== x[1]; }));
  return Q({ tag: 'Non-verbal reasoning', pic: V.array(p[0], p[1]), data: 'The picture shows ' + n + ' dots in ' + p[0] + ' equal rows. How many dots are in each row?', text: 'The dots make a rectangle of <b>' + n + '</b> dots in <b>' + p[0] + '</b> rows. How many dots are in each row?', answer: String(p[1]),
    hints: ['Equal rows mean the total is the number of rows times the dots in a row.', 'Divide ' + n + ' by ' + p[0] + '.'], explain: n + ' ÷ ' + p[0] + ' = ' + p[1] + ', so ' + p[0] + ' × ' + p[1] + ' = ' + n + '.' });
}
var VERBAL = [
  { text: 'Which is the odd one out? <b>2, 3, 5, 9</b>', options: ['2', '3', '5', '9'], answer: '9', hints: ['Think about the number of factors each one has.', 'Three of these are prime. Which is not?'], explain: '2, 3 and 5 are prime. 9 = 3 × 3 is composite.' },
  { text: 'Which is the odd one out? <b>4, 9, 16, 20</b>', options: ['4', '9', '16', '20'], answer: '20', hints: ['Think about which numbers are made by multiplying a number by itself.', 'Try 2 × 2, 3 × 3, 4 × 4. Which choice is not in that pattern?'], explain: '4, 9 and 16 are square numbers. 20 is not.' },
  { text: '<b>Factor</b> is to <b>divides</b> as <b>multiple</b> is to ...', options: ['is made by multiplying', 'is a bigger factor', 'has no divisors', 'is always even'], answer: 'is made by multiplying', hints: ['A factor divides into a number. What does a multiple come from?', 'Think about times tables.'], explain: 'A factor divides into a number. A multiple is made by multiplying the number by a whole number.' },
  { text: 'Sam says, "15 is a prime number because it is odd." What is wrong with his idea?', options: ['15 has factors 3 and 5, so it is not prime', 'Odd numbers are never prime', '15 is even', 'Only 1 is prime'], answer: '15 has factors 3 and 5, so it is not prime', hints: ['Being odd is not enough to be prime.', 'Look for another factor of 15 besides 1 and 15.'], explain: '3 × 5 = 15, so 15 has more than two factors. Odd does not mean prime.' },
  { text: 'Which statement is <b>true</b>?', options: ['Every even number except 2 is composite', 'All prime numbers are odd', '1 is a prime number', 'Square numbers are always even'], answer: 'Every even number except 2 is composite', hints: ['Think about the number 2 as a factor.', 'Any even number bigger than 2 has 2 as a factor as well as 1 and itself.'], explain: 'Every even number above 2 has 2 as a factor, so it has more than two factors and is composite.' }
];
function genVerbal() { var v = pick(VERBAL); return Q({ tag: 'Verbal reasoning', type: 'mc', text: v.text, options: shuffle(v.options.slice()), answer: v.answer, hints: v.hints, explain: v.explain }); }
function practiceSet() { return H.buildPracticeSet([genFactorCount, genBigFactor, genHCF, genLCM, genBuses, genNthMultiple, genIsMultiple, genPrimeMC, genPrimeCount, genSquare, genSqBetween, genTriangular, genDivRule, genRectangles, genVerbal, genArrayQ], 50); }
Studio.pools10 = { easy: ['genNthMultiple', 'genIsMultiple', 'genFactorCount', 'genSquare', 'genDivRule'], hard: ['genHCF', 'genLCM', 'genBuses', 'genPrimeCount', 'genBigFactor', 'genTriangular', 'genRectangles', 'genVerbal'] };
Studio.gens10 = { genFactorCount: genFactorCount, genBigFactor: genBigFactor, genHCF: genHCF, genLCM: genLCM, genBuses: genBuses, genNthMultiple: genNthMultiple, genIsMultiple: genIsMultiple, genPrimeMC: genPrimeMC, genPrimeCount: genPrimeCount, genSquare: genSquare, genSqBetween: genSqBetween, genTriangular: genTriangular, genDivRule: genDivRule, genRectangles: genRectangles, genVerbal: genVerbal, genArrayQ: genArrayQ };

Studio.addTopic({ n: 10, short: 'Factors', title: 'Factors, multiples and primes', blurb: 'Multiples, factors and factor pairs, common factors and multiples, prime numbers, divisibility, square and triangular numbers.', practiceCount: 50, gens: {},
  steps: [
    { id: 'warm', label: 'Warm-up', type: 'quiz', tag: 'Step 1 · Warm-up', title: 'Mental maths warm-up', lead: 'Four quick questions on times tables, factors and primes.', make: genWarm, doneLabel: 'On to multiples and factors' },
    { id: 'learn1', label: 'Multiples and factors', type: 'slides', tag: 'Multiples and factors', slides: LEARN1 },
    { id: 'lab1', label: 'Factor lab', type: 'lab', tag: 'Step 3 · We do it together', title: 'Build every rectangle', lead: 'Slide the number and see every rectangle it can make. Explore at least eight numbers, including a prime.', mount: mountFactorLab },
    { id: 'learn2', label: 'Primes and squares', type: 'slides', tag: 'Primes, squares and triangles', slides: LEARN2 },
    { id: 'lab2', label: 'Prime sieve', type: 'lab', tag: 'Step 5 · We do it together', title: 'Find the primes', lead: 'Cross out multiples of 2, 3, 5 and 7. The numbers left are the primes up to 50.', mount: mountSieveLab },
    { id: 'practise', label: 'Practise', type: 'quiz', best: true, tag: 'Step 6 · Your turn', title: 'Practise', lead: '50 questions on factors, multiples, primes and square numbers. Use the hints one at a time.', make: practiceSet }
  ] });
})();
