/* fl_m4c.js: P4 Fractions, decimals and percentages (404), Money (405), Time (406) */
(function () {
  'use strict';
  var FL = window.FL; if (!FL || !FL.P4) return;
  var P = FL.P4, r = FL.r, pick = FL.pick, mc = FL.mcq, PIE = FL.pie, MN = FL.money, CK = function (h, m) { return '<div style="max-width:190px;margin:auto">' + BT.sv.clock(h, m || 0) + '</div>'; };
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function tm(h, m) { return h + ':' + pad(m); }
  function pie(d, k) { return '<div style="max-width:150px;margin:auto">' + PIE(d, k) + '</div>'; }

  /* ===== 404 Fractions, decimals and percentages ===== */
  P(404, 'learn1', { ch: 'mouse', bg: 'kitchen',
    way: 'With the same bottom number, the bigger top number is bigger. With 1 on top, more parts means smaller pieces.|3/5 > 2/5,1/3 > 1/5',
    ex: ['Which is bigger: 3/8 or 5/8?|Same bottom number 8.;5 is more than 3.|5/8|3/8,5/8', 'Which is bigger: 1/3 or 1/5?|A third is cut into fewer pieces than a fifth.;Fewer pieces means bigger pieces.|1/3|1/3,1/5'],
    mist: '1/8 is not bigger than 1/4. More pieces means each piece is smaller.|1/4 > 1/8',
    real: 'Ali eats 1/2 of a pizza. Ben eats 1/4 of the same pizza. Who ate more?|Ali|Ben,the same|A half is bigger than a quarter.|1/2 vs 1/4',
    qs: ['Which is bigger: 2/5 or 4/5?|4/5|2/5|Same denominator.', 'Which is bigger: 1/2 or 1/4?|1/2|1/4|Fewer pieces.', 'Which is smaller: 1/3 or 1/10?|1/10|1/3|More pieces.', 'Which is bigger: 3/10 or 7/10?|7/10|3/10|Same denominator.', 'Which is smallest: 1/2, 1/5 or 1/10?|1/10|1/2,1/5|Most pieces.', 'Which is biggest: 1/3, 1/4 or 1/5?|1/3|1/4,1/5|Fewest pieces.', 'Which sign: 2/4 __ 3/4|<|>,=|2 < 3.', 'Which sign: 1/2 __ 1/3|>|<,=|Half is bigger.'],
    gen: function g(lv) { var d = pick([4, 5, 8, 10]), a = r(1, d - 1), b = r(1, d - 1); if (lv === 2 && r(0, 1)) { var x = pick([2, 3, 4, 5, 10]), y = pick([2, 3, 4, 5, 10]); if (x === y) return g(lv); var big = x < y ? x : y; return mc('Comparing fractions', 'Which fraction is <b>bigger</b>: <b>1/' + x + '</b> or <b>1/' + y + '</b>?', '1/' + big, ['1/' + (x < y ? y : x)], 'Fewer pieces means bigger pieces.', '1/' + big + ' is bigger.', pie(x, 1)); } if (a === b) return g(lv); var m = a > b ? a : b; return mc('Comparing fractions', 'Which is <b>bigger</b>: <b>' + a + '/' + d + '</b> or <b>' + b + '/' + d + '</b>?', m + '/' + d, [(a > b ? b : a) + '/' + d], 'Same bottom number: compare the tops.', m + '/' + d + ' is bigger.', pie(d, m)); } });

  P(404, 'learn2', { ch: 'mouse', bg: 'kitchen',
    way: 'A fraction, a decimal and a percentage can name the same amount. 1/2 = 0.5 = 50%.|1/2 = 0.5 = 50%,1/4 = 0.25 = 25%',
    ex: ['Write 1/4 as a decimal and a percentage.|A quarter is 25 out of 100.;25 out of 100 is 0.25 and 25%.|0.25 and 25%|1/4 = 0.25 = 25%', 'Write 3/4 as a percentage.|3 quarters is 3 × 25.;75%.|75%|3 × 25 = 75'],
    mist: 'Percent means out of 100. 50% is 50 out of 100, which is half, not 5.|% = out of 100',
    real: 'A battery shows 0.5 full. What percentage is that?|50%|5%,0.5%,15%|0.5 is a half.|1/2 = 0.5 = 50%',
    qs: ['1/2 as a percentage?|50%|5%,12%,20%|Half of 100.', '1/4 as a decimal?|0.25|0.4,0.14,2.5|25 out of 100.', '0.5 as a fraction?|1/2|1/5,1/50,2/5|Same as a half.', '3/4 as a decimal?|0.75|0.34,0.7,3.4|75 out of 100.', '10% as a fraction?|1/10|1/100,10/1,1/2|10 out of 100.', '1/10 as a decimal?|0.1|0.01,1.1,10|One tenth.', '25% as a fraction?|1/4|1/25,2/5,1/2|25 out of 100.', '100% means…|all of it|half of it,none,10|Out of 100.'],
    gen: function g(lv) { var F = [['1/2', '0.5', '50%'], ['1/4', '0.25', '25%'], ['3/4', '0.75', '75%'], ['1/10', '0.1', '10%']], f = pick(lv ? F : F.slice(0, 3)), a = r(0, 2), b = (a + r(1, 2)) % 3, nm = ['fraction', 'decimal', 'percentage']; return mc('Fractions, decimals, percentages', 'Which <b>' + nm[b] + '</b> is the same as <b>' + f[a] + '</b>?', f[b], F.filter(function (x) { return x !== f; }).map(function (x) { return x[b]; }), 'They name the same amount.', f[0] + ' = ' + f[1] + ' = ' + f[2] + '.'); } });

  P(404, 'learn3', { ch: 'mouse', bg: 'kitchen',
    way: 'On a number line from 0 to 1, fractions sit between the whole numbers. Bigger fractions are further to the right.|0 ... 1/2 ... 1',
    ex: ['Where is 1/2 on a line from 0 to 1?|Halfway between 0 and 1.|in the middle|0, 1/2, 1', 'Which is nearer 1: 1/4 or 3/4?|3/4 is 3 quarters along.;It is further to the right.|3/4|1/4, 3/4'],
    mist: 'Equal gaps. A line from 0 to 1 split into 4 has marks at 1/4, 2/4 and 3/4.|4 equal parts',
    real: 'A rope is cut at 3/4 of its length. Is the cut nearer the start or the end?|the end|the start,the middle|3/4 is past the middle.|3/4',
    qs: ['What is halfway between 0 and 1?|1/2|1/4,1/10,2|Middle.', 'Which fraction is nearest 0?|1/10|1/2,3/4|Smallest.', 'Which fraction is nearest 1?|9/10|1/10,5/10|Biggest.', 'On a line in quarters, what comes after 1/4?|2/4|3/4,1/2 only,1|Next mark.', 'Which is between 1/4 and 3/4?|1/2|1/10,9/10,4/4|Middle.', 'How many quarters make 1?|4|2,3,5|4/4.', 'Which is larger: 2/5 or 4/5 on the line?|4/5|2/5|Further right.', 'Order smallest first: which is first of 1/2, 1/4, 3/4?|1/4|1/2,3/4|Smallest.'],
    gen: function g(lv) { var d = pick(lv ? [4, 5, 10] : [2, 4, 5]), k = r(1, d - 1); if (k === 0) return g(lv); var T = FL.track ? FL.track(0, d, [k], []) : ''; return mc('Fractions on a line', 'A line from 0 to 1 is split into <b>' + d + ' equal parts</b>. Which fraction is at the <b>' + k + (k === 1 ? 'st' : k === 2 ? 'nd' : k === 3 ? 'rd' : 'th') + ' mark</b>?', k + '/' + d, [(k + 1) + '/' + d, (k - 1 || d - 1) + '/' + d, k + '/' + (d + 1)], 'Count the marks from 0.', 'The ' + k + 'th mark is ' + k + '/' + d + '.', pie(d, k)); } });

  P(404, 'learn4', { ch: 'mouse', bg: 'kitchen',
    way: 'To find a fraction of an amount, divide by the bottom number. Then multiply by the top number.|1/4 of 20 = 20 ÷ 4 = 5',
    ex: ['What is 1/5 of 30?|Divide by 5.;30 ÷ 5 = 6.|6|30 ÷ 5 = 6', 'What is 3/4 of 20?|Find 1/4: 20 ÷ 4 = 5.;3 quarters: 3 × 5 = 15.|15|3 × 5 = 15'],
    mist: 'For 3/4 you must do 3 × the quarter. 1/4 of 20 is 5, but 3/4 of 20 is 15.|3 × (1/4)',
    real: 'A packet of 24 sweets. You eat 1/3. How many do you eat?|8|3,12,21|24 ÷ 3.|24 ÷ 3',
    qs: ['1/2 of 18?|9|8,36,6|÷ 2.', '1/4 of 20?|5|4,10,80|÷ 4.', '1/5 of 25?|5|4,20,125|÷ 5.', '1/10 of 60?|6|10,50,600|÷ 10.', '1/3 of 12?|4|3,6,9|÷ 3.', '3/4 of 8?|6|2,4,5|2 × 3.', '2/5 of 10?|4|2,5,6|2 × 2.', '3/10 of 50?|15|5,20,35|3 × 5.'],
    gen: function g(lv) { var d = pick(lv ? [2, 3, 4, 5, 10] : [2, 4, 5, 10]), q = r(2, lv ? 12 : 8), n = d * q, k = lv && d > 2 ? r(1, d - 1) : 1; return mc('Fraction of an amount', 'What is <b>' + k + '/' + d + ' of ' + n + '</b>?', k * q, [q, k * q + 1, n - k * q, k * q + q], 'Divide by ' + d + (k > 1 ? ', then multiply by ' + k : '') + '.', n + ' ÷ ' + d + ' = ' + q + (k > 1 ? ', ' + k + ' × ' + q + ' = ' + k * q : '') + '.'); } });

  P(404, 'learn5', { ch: 'mouse', bg: 'kitchen',
    way: 'Equivalent fractions are different names for the same amount. Multiply the top and bottom by the same number.|1/2 = 2/4 = 5/10',
    ex: ['1/2 = ?/4|The bottom went from 2 to 4, × 2.;Top: 1 × 2 = 2.|2/4|1/2 = 2/4', '3/5 = ?/10|× 2 on the bottom and the top.;3 × 2 = 6.|6/10|3/5 = 6/10'],
    mist: 'Change top and bottom by the same number. 1/2 is not 1/4.|same × both|',
    real: 'Half a pizza is cut into 4 slices. What fraction of a whole pizza is 2 slices?|2/4|2/8,4/2,1/4|Same as a half.|1/2 = 2/4',
    qs: ['1/2 = ?/4|2|1,3,4|× 2.', '1/2 = ?/10|5|2,10,1|× 5.', '1/5 = ?/10|2|1,5,10|× 2.', '2/4 = ?/2|1|2,4,0|÷ 2.', '1/4 = ?/8|2|1,4,8|× 2.', '2/5 = 4/?|10|5,2,8|× 2.', '3/4 = ?/8|6|3,4,8|× 2.', 'Which is equal to 1/2?|5/10|1/10,2/10,5/5|Half of 10.'],
    gen: function g(lv) { var b = pick(lv ? [2, 3, 4, 5] : [2, 3, 5]), a = r(1, b - 1), k = pick(b === 2 ? [2, 4, 5] : b === 4 ? [2] : [2, 3]); var nb = b * k, na = a * k; return mc('Equivalent fractions', 'Fill in the missing number: <b>' + a + '/' + b + ' = ?/' + nb + '</b>', na, [na + 1, na - 1 || 7, a, nb], 'Multiply the top by ' + k + ' too.', a + '/' + b + ' = ' + na + '/' + nb + '.', pie(b, a)); } });

  P(404, 'learnm1', { ch: 'mouse', bg: 'kitchen',
    t: 'What is a fraction?|What does a fraction tell me?|A fraction is a part of a whole. The bottom number says how many equal parts. The top number says how many we have.|3 shaded of 4 equal parts = 3/4',
    words: 'fraction=a part of a whole=🍕;numerator=the top number, parts we have=⬆️;denominator=the bottom number, equal parts in all=⬇️;equal parts=pieces the same size=🟰',
    see: ['Look at the shape. 1 of 4 equal parts is shaded.|' + pie(4, 1), 'Split into 4 equal parts. 1 part shaded is 1/4.|1 shaded,4 parts', '3 of the 4 parts shaded is 3/4.|3/4'],
    ex3: ['What fraction of this pizza is eaten? 2 of 8 slices.|Bottom 8, top 2.|2/8|2 of 8', 'A bar has 10 equal parts. 7 are coloured. What fraction?|7 out of 10.|7/10|7/10', 'Is a shape split into 3 unequal parts in thirds?|Parts must be equal.|No|not equal'],
    mist: 'Parts must be equal in size. Unequal parts are not fractions.|equal parts only',
    chk: 'A shape has 5 equal parts and 2 are shaded. What fraction?|2/5|5/2,2/3,3/5|2 out of 5.|shaded parts, all parts',
    rem: 'Top: parts we have. Bottom: equal parts in all.|top / bottom',
    way: 'Fold a piece of paper into equal parts to see the fractions.|fold in 2,fold in 4',
    ex: ['2 of 5 equal parts shaded. What fraction?|Top 2, bottom 5.|2/5|2/5', '1 of 3 equal parts. What fraction?|Top 1, bottom 3.|1/3|1/3'],
    real: 'A chocolate bar has 8 pieces. You eat 3. What fraction have you eaten?|3/8|5/8,8/3,3/5|3 out of 8.|eaten, pieces in all',
    qs: ['A circle is cut into 2 equal parts. One part is…|1/2|2/1,1/3,2/2|Half.', '3 of 4 equal parts shaded is…|3/4|4/3,1/4,3/3|3 out of 4.', '1 of 5 equal parts is…|1/5|5/1,1/4,1/6|Fifth.', 'What is the bottom number called?|the denominator|the numerator,the total,the digit|Parts in all.', 'What is the top number called?|the numerator|the denominator,the total,the digit|Parts we have.', '6 of 10 equal parts is…|6/10|10/6,6/4,4/10|6 out of 10.', 'How many quarters in a whole?|4|2,3,5|4/4.', 'How many thirds in a whole?|3|2,4,6|3/3.'],
    gen: function g(lv) { var d = pick(lv ? [3, 4, 5, 6, 8, 10] : [2, 3, 4, 5]), k = r(1, d - 1); return mc('What is a fraction', 'A shape is split into <b>' + d + ' equal parts</b> and <b>' + k + '</b> are shaded. What fraction is shaded?', k + '/' + d, [d + '/' + k, (k + 1) + '/' + d, k + '/' + (d + 1)], 'Shaded on top, all parts on the bottom.', k + ' of ' + d + ' is ' + k + '/' + d + '.', pie(d, k)); } });

  P(404, 'learnm2', { ch: 'mouse', bg: 'kitchen',
    t: 'Tenths and decimals|How do tenths become decimals?|One tenth is 0.1. We write tenths after a decimal point. 3/10 is 0.3.|1/10 = 0.1',
    words: 'tenth=one of 10 equal parts=🔟;decimal point=the dot in a decimal=⚫;decimal=a number with a point=0️⃣;tenths digit=the digit after the point=📍',
    see: ['A whole split into 10 equal parts. One part is 1/10 = 0.1.|1/10 = 0.1', '3/10 is 0.3, 7/10 is 0.7.|3/10 = 0.3', '10/10 is one whole, 1.0.|10/10 = 1'],
    ex3: ['Write 4/10 as a decimal.|4 tenths.|0.4|4/10 = 0.4', 'Write 0.8 as a fraction.|8 tenths.|8/10|0.8 = 8/10', 'Which is bigger: 0.6 or 0.4?|6 tenths > 4 tenths.|0.6|0.6 > 0.4'],
    mist: '0.5 is not 5. It is five tenths, which is half.|0.5 = 5/10 = 1/2',
    chk: 'What is 0.9 as a fraction?|9/10|1/9,9/100,10/9|9 tenths.|0.9',
    rem: 'Tenths go after the decimal point. 1/10 = 0.1.|0.1 = 1/10',
    way: 'Use a number line from 0 to 1 split into 10, marked 0.1, 0.2 ... 1.|0, 0.1, 0.2, ... 1',
    ex: ['Write 9/10 as a decimal.|9 tenths.|0.9|0.9', 'Which is bigger: 0.3 or 0.7?|7 tenths.|0.7|0.7'],
    real: 'A jug holds 0.5 litres. How many tenths is that?|5 tenths|1 tenth,10 tenths,50 tenths|0.5 = 5/10.|0.5 = 5/10',
    qs: ['3/10 as a decimal?|0.3|3.0,0.03,10.3|3 tenths.', '0.6 as a fraction?|6/10|10/6,6/100,1/6|6 tenths.', '1/10 as a decimal?|0.1|1.1,0.01,10|1 tenth.', '0.5 is the same as…|5/10|5/100,1/5,5/1|5 tenths.', 'Which is bigger: 0.8 or 0.3?|0.8|0.3|8 tenths.', 'Which is smaller: 0.2 or 0.7?|0.2|0.7|2 tenths.', '10 tenths equal…|1 whole|0.1,10,100|10/10.', 'What comes after 0.4 in tenths?|0.5|0.6,0.45,4.1|0.4 + 0.1.'],
    gen: function g(lv) { var k = r(1, 9), d = r(0, 2); return d === 0 ? mc('Tenths and decimals', 'Write <b>' + k + '/10</b> as a decimal.', '0.' + k, [k + '.0', '0.0' + k, '1.' + k], 'k tenths is 0.k.', k + '/10 = 0.' + k + '.') : d === 1 ? mc('Tenths and decimals', 'Write <b>0.' + k + '</b> as a fraction.', k + '/10', ['10/' + k, k + '/100', '1/' + k], 'After the point is tenths.', '0.' + k + ' = ' + k + '/10.') : (function () { var a = k, b = r(1, 9); if (a === b) b = a % 9 + 1; var big = a > b ? a : b; return mc('Tenths and decimals', 'Which is <b>bigger</b>: <b>0.' + a + '</b> or <b>0.' + b + '</b>?', '0.' + big, ['0.' + (a > b ? b : a)], 'Compare the tenths digit.', '0.' + big + ' is bigger.'); })(); } });

  P(404, 'learnm3', { ch: 'mouse', bg: 'kitchen',
    t: 'Percentages|What does percent mean?|Percent means out of 100. 50% is 50 out of 100, which is half. 25% is a quarter. 10% is a tenth.|50% = 1/2',
    words: 'percent=out of every 100=💯;percentage=an amount as a part of 100=📊;half=50%=➗;quarter=25%=🍰',
    see: ['A 100 square: 50 shaded is 50%, half.|50% = 1/2', '25 shaded is 25%, a quarter.|25% = 1/4', '10 shaded is 10%, a tenth.|10% = 1/10'],
    ex3: ['What is 50% of 40?|Half of 40.|20|÷ 2', 'What is 25% of 40?|A quarter of 40.|10|÷ 4', 'What is 10% of 40?|A tenth of 40.|4|÷ 10'],
    mist: '10% of 50 is 5, not 10. It is a tenth of the amount.|÷ 10',
    chk: 'What is 50% of 60?|30|50,6,20|Half.|60 ÷ 2',
    rem: '50% = half, 25% = quarter, 10% = tenth, 100% = all.|% = out of 100',
    way: 'Use 100 squares and shade 10, 25 or 50 to see the percentages.|10, 25, 50, 100',
    ex: ['What is 25% of 20?|A quarter of 20.|5|20 ÷ 4', 'What is 10% of 90?|A tenth of 90.|9|90 ÷ 10'],
    real: 'A shirt costing £20 is 50% off. How much do you save?|£10|£5,£20,£50|Half.|20 ÷ 2',
    qs: ['50% of 10?|5|10,50,2|Half.', '25% of 12?|3|4,6,12|Quarter.', '10% of 30?|3|10,30,5|Tenth.', '100% of 7?|7|0,1,70|All.', '50% of 24?|12|6,48,24|Half.', '25% of 100?|25|4,50,10|Quarter.', '10% of 200?|20|2,100,10|Tenth.', '25% of 8?|2|4,3,1|Quarter.'],
    gen: function g(lv) { var p = pick(lv ? [10, 25, 50] : [50, 25, 10]), d = p === 50 ? 2 : p === 25 ? 4 : 10, q = r(2, lv ? 12 : 8), n = d * q; return mc('Percentages', 'What is <b>' + p + '% of ' + n + '</b>?', q, [q * 2, q + 1, n - q, q - 1 || 12], p + '% is 1/' + d + '.', n + ' ÷ ' + d + ' = ' + q + '.'); } });

  /* ===== 405 Money ===== */
  P(405, 'learn1', { ch: 'frog', bg: 'pond',
    way: 'Change is what you get back. Count on from the price to the amount you paid.|price → paid',
    ex: ['A pen costs 65p. You pay £1. Change?|65p to 70p is 5p.;70p to £1 is 30p.;5p + 30p = 35p.|35p|65 + 35 = 100', 'A book costs £3.40. You pay £5. Change?|£3.40 to £4 is 60p.;£4 to £5 is £1.|£1.60|£3.40 + £1.60'],
    mist: 'Change is not the price. £1 - 65p is 35p, not 65p.|paid - price',
    real: 'You buy a snack for 85p and pay with £1. How much change?|15p|85p,25p,£1.85|85 + 15 = 100.|£1 - 85p',
    qs: ['Pay £1 for 70p. Change?|30p|70p,40p,£1.70|70 + 30.', 'Pay £1 for 45p. Change?|55p|45p,65p,£1.45|45 + 55.', 'Pay 50p for 35p. Change?|15p|25p,85p,5p|35 + 15.', 'Pay £2 for £1.50. Change?|50p|£1,50,£3.50|£1.50 + 50p.', 'Pay £5 for £3.20. Change?|£1.80|£2.80,£1.20,£8.20|3.20 + 1.80.', 'Pay £10 for £6. Change?|£4|£6,£16,£5|10 - 6.', 'Pay £1 for 98p. Change?|2p|98p,12p,1p|98 + 2.', 'Pay £5 for £4.75. Change?|25p|75p,£1.25,5p|4.75 + 0.25.'],
    gen: function g(lv) { var pay = pick(lv ? [100, 200, 500, 1000] : [50, 100, 200]), p = r(1, pay / 5 - 1) * 5; if (p < 5) return g(lv); return mc('Working out change', 'You pay <b>' + MN(pay) + '</b> for something that costs <b>' + MN(p) + '</b>. What is the change?', MN(pay - p), [MN(pay - p + 10), MN(pay - p - 5 > 0 ? pay - p - 5 : pay - p + 15), MN(p), MN(pay + p)], 'Count on from the price to what you paid.', MN(p) + ' + ' + MN(pay - p) + ' = ' + MN(pay) + '.'); } });

  P(405, 'learn2', { ch: 'frog', bg: 'pond',
    way: 'Different coins can make the same total. £1 = 50p + 50p = 20p + 20p + 20p + 20p + 20p.|£1 many ways',
    ex: ['Make 50p with 20p, 10p and 5p coins.|20p + 20p + 10p = 50p.|20p + 20p + 10p|20, 20, 10', 'Which is the same as 70p: 50p + 20p or 50p + 10p?|50 + 20 = 70.|50p + 20p|50 + 20'],
    mist: 'Check every total by adding. Do not guess from the number of coins.|add them up',
    real: 'You have two 20p coins and a 10p coin. Can you pay 50p?|Yes|No,Only 40p,Only 30p|20 + 20 + 10 = 50.|20 + 20 + 10',
    qs: ['50p + 20p + 5p = ?|75p|70p,80p,55p|Add.', '20p + 20p + 10p = ?|50p|40p,60p,30p|Add.', '£1 = how many 50p coins?|2|1,4,5|2 × 50.', '£1 = how many 20p coins?|5|2,4,10|5 × 20.', '£1 = how many 10p coins?|10|5,20,100|10 × 10.', '50p + 10p + 10p = ?|70p|60p,80p,65p|Add.', 'Which makes 30p: 20p + 10p or 20p + 5p?|20p + 10p|20p + 5p|30.', '£2 = how many 50p coins?|4|2,3,5|4 × 50.'],
    gen: function g(lv) { var cs = lv ? [50, 20, 10, 5, 2, 1] : [50, 20, 10, 5], a = pick(cs), b = pick(cs), c = pick(cs); return mc('Coin totals', 'How much is <b>' + [a, b, c].map(function (v) { return v + 'p'; }).join(' + ') + '</b>?', MN(a + b + c), [MN(a + b + c + 5), MN(a + b + c - 1), MN(a + b)], 'Add the coins.', (a + b + c) + 'p = ' + MN(a + b + c) + '.'); } });

  P(405, 'learn3', { ch: 'frog', bg: 'pond',
    way: 'The best buy is the one that costs least for each item. Find the price of one.|3 for 90p = 30p each',
    ex: ['2 apples cost 80p. 3 apples cost 90p. Which is the better buy?|2 apples: 80 ÷ 2 = 40p each.;3 apples: 90 ÷ 3 = 30p each.|3 apples|40p, 30p', '5 pens for £1 or 4 pens for 60p?|5 pens: 20p each.;4 pens: 15p each.|4 pens for 60p|20p, 15p'],
    mist: 'A lower total price is not always better. Compare the price of one.|price of one',
    real: 'A small drink is 50p for 1. A pack of 4 costs £1.60. Which is better?|the pack of 4|the small drink,the same,not sure|40p each is cheaper than 50p.|£1.60 ÷ 4',
    qs: ['2 pens for 60p. Price of one?|30p|60p,20p,2p|÷ 2.', '4 buns for £2. Price of one?|50p|£2,25p,£8|÷ 4.', '3 for 90p or 2 for 70p. Which is the better buy?|3 for 90p|2 for 70p|30p vs 35p.', '5 for £1 or 4 for £1. Which is the better buy?|5 for £1|4 for £1|20p vs 25p.', '10 sweets cost £1. Price of one?|10p|£1,£10,1p|÷ 10.', '2 for 50p or 3 for 90p. Better buy?|2 for 50p|3 for 90p|25p vs 30p.', 'Which is cheaper each: 3 for 60p or 4 for 60p?|4 for 60p|3 for 60p|15p vs 20p.', '4 cakes cost £2.40. Price of one?|60p|£2.40,£9.60,40p|÷ 4.'],
    gen: function g(lv) { var a = pick([2, 3, 4, 5]), b = pick([2, 3, 4, 5, 10]); if (a === b) return g(lv); var pa = r(2, 9) * 5 * a, pb = r(2, 9) * 5 * b, ua = pa / a, ub = pb / b; if (ua === ub) return g(lv); var win = ua < ub ? a + ' for ' + MN(pa) : b + ' for ' + MN(pb), lose = ua < ub ? b + ' for ' + MN(pb) : a + ' for ' + MN(pa); return mc('Best buy', 'Which is the <b>better buy</b>: <b>' + a + ' for ' + MN(pa) + '</b> or <b>' + b + ' for ' + MN(pb) + '</b>?', win, [lose], 'Find the price of one each.', a + ' for ' + MN(pa) + ' is ' + MN(ua) + ' each. ' + b + ' for ' + MN(pb) + ' is ' + MN(ub) + ' each.'); } });

  P(405, 'learn4', { ch: 'frog', bg: 'pond',
    way: 'Plan before you spend. Add up what you want to buy, then take it away from the money you have.|have - total = left',
    ex: ['You have £5. You buy a toy for £2.50 and a pen for £1. How much left?|£2.50 + £1 = £3.50.;£5 - £3.50 = £1.50.|£1.50|5 - 3.50', 'You have £2. Can you buy a 90p drink and a £1.20 snack?|90p + £1.20 = £2.10.;£2.10 is more than £2.|No|£2.10 > £2'],
    mist: 'Add the items first, then subtract from your money.|total first',
    real: 'You have £10 and spend £3.40 and £4.20. How much left?|£2.40|£7.60,£1.40,£12.60|3.40 + 4.20 = 7.60.|10 - 7.60',
    qs: ['You have £5 and spend £2. Left?|£3|£7,£2,£5|5 - 2.', 'You have £2 and spend 50p and 30p. Left?|£1.20|80p,£1.50,£2.80|2 - 0.80.', 'Spend £1 and £1.50. Total?|£2.50|£2,£3,£1.50|Add.', 'You have £10. A game costs £7.50. Left?|£2.50|£3.50,£17.50,£2|10 - 7.5.', 'Can £3 buy items of £1.50 and £1.60?|No|Yes|£3.10 > £3.', 'You have £4 and buy 3 items of £1. Left?|£1|£3,£7,£4|4 - 3.', 'Spend 75p and 25p. Total?|£1|50p,£1.25,£100|Add.', 'You have 50p and spend 35p. Left?|15p|25p,85p,5p|50 - 35.'],
    gen: function g(lv) { var have = pick(lv ? [500, 1000, 2000] : [200, 500]), a = r(2, 8) * 10 + (lv ? 5 : 0), b = r(2, 12) * 10; var tot = a + b; if (tot >= have) return g(lv); return mc('Planning spending', 'You have <b>' + MN(have) + '</b> and buy items costing <b>' + MN(a) + '</b> and <b>' + MN(b) + '</b>. How much is left?', MN(have - tot), [MN(have - tot + 10), MN(have - tot - 10), MN(tot), MN(have - a)], 'Add the prices, then subtract.', MN(a) + ' + ' + MN(b) + ' = ' + MN(tot) + '. ' + MN(have) + ' - ' + MN(tot) + ' = ' + MN(have - tot) + '.'); } });

  P(405, 'learnm1', { ch: 'frog', bg: 'pond',
    t: 'Adding pounds and pence|How do I add amounts of money?|Line up the decimal points. Add the pence first, then the pounds. 100p makes £1.|£1.20 + £2.35 = £3.55',
    words: 'pounds=whole money amounts=💷;pence=small money amounts=🪙;decimal point=separates pounds and pence=⚫;total=the sum=🧮',
    see: ['Line up the dots. £1.20 above £2.35.|£1.20,£2.35', 'Add pence: 20 + 35 = 55. Add pounds: 1 + 2 = 3.|55p,£3', 'Total £3.55.|£3.55'],
    ex3: ['£1.40 + £2.30|Pence: 40 + 30 = 70.;Pounds: 1 + 2 = 3.|£3.70|3.70', '£2.65 + £1.50|Pence: 65 + 50 = 115 = £1.15.;£2 + £1 + £1.15.|£4.15|4.15', '85p + 40p|85 + 40 = 125p.|£1.25|£1.25'],
    mist: 'When pence go over 99, change 100p into £1 and carry.|100p = £1',
    chk: '£2.30 + £1.45|£3.75|£3.65,£3.85,£2.75|30 + 45 = 75p.|2.30 + 1.45',
    rem: 'Line up the point, add pence then pounds, carry 100p as £1.|pence, pounds',
    way: 'Change to pence: £2.35 = 235p. Add in pence, then change back.|£1.20 = 120p',
    ex: ['£1.25 + £1.25|125 + 125 = 250p.|£2.50|250p', '60p + 70p|60 + 70 = 130p.|£1.30|130p'],
    real: 'A book costs £3.20 and a pen costs 85p. Total?|£4.05|£3.95,£4.15,£3.05|320 + 85 = 405.|£3.20 + 85p',
    qs: ['£1.50 + £1.50 = ?|£3|£2,£3.50,£2.50|150 + 150.', '75p + 50p = ?|£1.25|£1.15,£1.35,£1.20|125p.', '£2.20 + £1.30 = ?|£3.50|£3.40,£3.60,£2.50|Add pence then pounds.', '45p + 45p = ?|90p|80p,95p,£1|45 + 45.', '£1.80 + 90p = ?|£2.70|£2.60,£2.80,£1.90|180 + 90.', '£4.25 + £1.25 = ?|£5.50|£5,£5.25,£6.50|425 + 125.', '99p + 1p = ?|£1|£1.10,99p,100|100p.', '£3.40 + £2.60 = ?|£6|£5.80,£6.20,£5|340 + 260.'],
    gen: function g(lv) { var a = r(5, lv ? 450 : 150) * 5, b = r(5, lv ? 450 : 150) * 5; return mc('Adding money', 'What is <b>' + MN(a) + ' + ' + MN(b) + '</b>?', MN(a + b), [MN(a + b + 10), MN(a + b - 10), MN(a + b + 100), MN(a + b - 5)], 'Add the pence, then the pounds.', MN(a) + ' + ' + MN(b) + ' = ' + MN(a + b) + '.'); } });

  P(405, 'learnm2', { ch: 'frog', bg: 'pond',
    t: 'Buying several items|How much do several of the same item cost?|Multiply the price of one by how many you buy. 4 sweets at 35p cost 4 × 35p.|4 × 35p = 140p = £1.40',
    words: 'price=what one item costs=🏷️;each=for one=1️⃣;cost=how much you pay=💷;total=all the items together=🧮',
    see: ['One sticker is 20p. 3 stickers cost 3 × 20p = 60p.|3 × 20p = 60p', 'Split 35p into 30p and 5p. 4 × 30p = 120p, 4 × 5p = 20p.|120p + 20p', '140p = £1.40.|£1.40'],
    ex3: ['5 pencils at 30p each|5 × 30 = 150p.|£1.50|150p', '3 cakes at 45p each|3 × 40 = 120, 3 × 5 = 15.;120 + 15 = 135.|£1.35|135p', '4 books at £2 each|4 × 2 = 8.|£8|£8'],
    mist: 'Change pence to pounds at the end. 150p is £1.50, not £150.|100p = £1',
    chk: '3 sweets at 25p each. How much?|75p|28p,60p,£75|3 × 25.|3 × 25',
    rem: 'Cost of many = price of one × how many.|price × number',
    way: 'Add the price repeatedly: 20p + 20p + 20p.|20 + 20 + 20',
    ex: ['6 stamps at 10p|6 × 10 = 60p.|60p|60p', '2 rulers at £1.20|2 × 120 = 240p.|£2.40|£2.40'],
    real: 'A ride costs 50p. 5 friends ride. Total?|£2.50|£2,£3,£5.50|5 × 50.|5 × 50p',
    qs: ['4 × 10p = ?|40p|14p,4p,£4|4 × 10.', '3 × 20p = ?|60p|23p,£6,50p|3 × 20.', '5 × 25p = ?|£1.25|£1,£1.50,£2.50|125p.', '2 × £1.50 = ?|£3|£2,£3.50,£1.50|2 × 150.', '6 × 5p = ?|30p|11p,60p,35p|6 × 5.', '4 × 15p = ?|60p|45p,19p,£6|4 × 15.', '3 × £2.50 = ?|£7.50|£6.50,£7,£8.50|3 × 250.', '10 × 30p = ?|£3|30p,£30,£10|300p.'],
    gen: function g(lv) { var n = r(2, lv ? 9 : 6), p = pick(lv ? [15, 20, 25, 30, 35, 45, 50, 120, 150] : [10, 20, 25, 30, 50]); return mc('Buying several items', 'One item costs <b>' + MN(p) + '</b>. How much do <b>' + n + '</b> cost?', MN(n * p), [MN(n * p + 10), MN(n * p - 10), MN(n + p), MN(n * p + 100)], 'Multiply the price by ' + n + '.', n + ' × ' + MN(p) + ' = ' + MN(n * p) + '.'); } });

  P(405, 'learnm3', { ch: 'frog', bg: 'pond',
    t: 'Fewest coins|How do I pay using the fewest coins?|Use the biggest coins you can first, then smaller ones. This makes the fewest coins.|65p = 50p + 10p + 5p',
    words: 'coin=a piece of money=🪙;fewest=the smallest number=1️⃣;biggest=the largest value=⬆️;value=how much it is worth=💷',
    see: ['To make 65p, start with 50p.|50p', 'Left: 15p. Use a 10p. Left: 5p. Use a 5p.|10p,5p', '50p + 10p + 5p = 65p. That is 3 coins.|3 coins'],
    ex3: ['Fewest coins for 35p|20p + 10p + 5p.|3 coins|20, 10, 5', 'Fewest coins for 90p|50p + 20p + 20p.|3 coins|50, 20, 20', 'Fewest coins for 12p|10p + 2p.|2 coins|10, 2'],
    mist: 'Do not use lots of small coins. Start with the biggest coin that fits.|biggest first',
    chk: 'Fewest coins to make 40p?|20p + 20p|10p + 10p + 10p + 10p,20p + 10p + 5p + 5p|Two 20p coins.|40p',
    rem: 'Biggest coin first, then the next.|biggest first',
    way: 'Try with real or paper coins and see which uses the fewest.|50, 20, 10, 5, 2, 1',
    ex: ['Fewest coins for 27p|20p + 5p + 2p.|3 coins|20, 5, 2', 'Fewest coins for 60p|50p + 10p.|2 coins|50, 10'],
    real: 'You need to give 45p change. What are the fewest coins?|20p + 20p + 5p|50p,10p × 4 + 5p,20p + 10p × 2 + 5p|20 + 20 + 5.|45p',
    qs: ['Fewest coins for 50p?|one 50p|two 20p and a 10p,five 10p,ten 5p|One coin.', 'Fewest coins for 30p?|20p + 10p|three 10p,six 5p,50p|2 coins.', 'Fewest coins for 15p?|10p + 5p|three 5p,10p + 2p + 2p + 1p,15p|2 coins.', 'Fewest coins for 70p?|50p + 20p|seven 10p,20p + 20p + 20p + 10p,50p + 10p + 10p|2 coins.', 'Fewest coins for 8p?|5p + 2p + 1p|eight 1p,2p + 2p + 2p + 2p,5p + 1p + 1p + 1p|3 coins.', 'How many coins for 100p using only 50p?|2|1,4,5|50 + 50.', 'Fewest coins for 25p?|20p + 5p|ten p,five 5p,10p + 10p + 5p|2 coins.', 'Fewest coins for 17p?|10p + 5p + 2p|ten + five + one,five 2p + 1p,seventeen 1p|3 coins.'],
    gen: function g(lv) { var a = pick([50, 20, 10, 5, 2, 1]), tot = r(1, lv ? 9 : 5) * pick([5, 10]) + (lv ? r(0, 4) : 0); var left = tot; var coins = [50, 20, 10, 5, 2, 1], cnt = 0; coins.forEach(function (v) { while (left >= v) { left -= v; cnt++; } }); if (tot > 99) return g(lv); return mc('Fewest coins', 'What is the <b>fewest number of coins</b> that make <b>' + tot + 'p</b>?', cnt, [cnt + 1, cnt + 2, cnt - 1 > 0 ? cnt - 1 : cnt + 3], 'Use the biggest coins first.', 'Biggest coins first gives ' + cnt + ' coins.'); } });

  /* ===== 406 Time ===== */
  P(406, 'learn1', { ch: 'owl', bg: 'day',
    way: 'To work out how long, jump to the next hour first, then count the rest. This is bridging.|9:45 → 10:00 → 10:15',
    ex: ['How long from 9:45 to 10:15?|9:45 to 10:00 is 15 minutes.;10:00 to 10:15 is 15 minutes.;15 + 15 = 30.|30 minutes|15 + 15', 'How long from 2:50 to 3:20?|2:50 to 3:00 is 10 minutes.;3:00 to 3:20 is 20 minutes.|30 minutes|10 + 20'],
    mist: 'There are 60 minutes in an hour, not 100. Jump to the hour first.|60 minutes',
    real: 'A film starts at 4:40 and ends at 5:30. How long?|50 minutes|30 minutes,70 minutes,90 minutes|20 + 30.|4:40 → 5:00 → 5:30',
    qs: ['How long from 3:50 to 4:10?|20 minutes|40 minutes,60 minutes,10 minutes|10 + 10.', 'How long from 7:45 to 8:15?|30 minutes|60 minutes,15 minutes,45 minutes|15 + 15.', 'How long from 11:30 to 12:10?|40 minutes|20 minutes,30 minutes,80 minutes|30 + 10.', 'How long from 1:55 to 2:25?|30 minutes|25 minutes,35 minutes,70 minutes|5 + 25.', 'How long from 5:00 to 6:30?|1 hour 30 minutes|30 minutes,1 hour,2 hours|1 hour + 30 minutes.', 'How long from 10:15 to 11:45?|1 hour 30 minutes|30 minutes,1 hour,2 hours|1 h + 30 min.', 'How long from 6:40 to 7:20?|40 minutes|60 minutes,20 minutes,100 minutes|20 + 20.', 'How long from 8:10 to 9:00?|50 minutes|10 minutes,60 minutes,90 minutes|Count on 50.'],
    gen: function g(lv) { var h = r(1, 10), m1 = pick([10, 20, 30, 40, 45, 50, 55]), d = pick(lv ? [20, 25, 30, 35, 40, 45, 50] : [20, 30, 40]), tot = h * 60 + m1 + d, h2 = Math.floor(tot / 60), m2 = tot % 60; if (h2 > 12) return g(lv); return mc('Bridging the hour', 'How long is it from <b>' + tm(h, m1) + '</b> to <b>' + tm(h2, m2) + '</b>?', d + ' minutes', [(d + 10) + ' minutes', (d - 10) + ' minutes', (d + 40) + ' minutes'], 'Jump to the next hour, then count on.', 'It is ' + d + ' minutes.', CK(h, m1)); } });

  P(406, 'learn2', { ch: 'owl', bg: 'day',
    way: 'The short hand shows the hour. The long hand shows the minutes. Count in 5s round the clock.|5, 10, 15, 20, 25, 30',
    ex: ['What time? Long hand on 4, short hand just past 3.|Long hand on 4 is 20 minutes.;It is 20 past 3.|3:20|20 past 3', 'What time? Long hand on 8, short hand nearly at 5.|Long hand on 8 is 40 minutes. That is 20 to 5.|4:40|20 to 5'],
    mist: 'Past the half hour, say “to” the next hour. 4:40 is 20 to 5.|to the next hour',
    real: 'The long hand is on 10 and the short hand is just before 8. What time?|7:50|8:50,7:10,10:07|10 × 5 = 50.|10 to 8',
    qs: ['Long hand on 3. How many minutes past?|15|3,30,5|3 × 5.', 'Long hand on 6. How many minutes past?|30|6,60,15|6 × 5.', 'Long hand on 9. How many minutes to the next hour?|15|45,9,30|60 - 45.', 'Long hand on 2. How many minutes past?|10|2,20,5|2 × 5.', 'Long hand on 11. How many minutes past?|55|11,5,45|11 × 5.', 'What is 25 past 7 written as digital?|7:25|7:35,5:07,2:57|7 and 25.', 'What is 7:45 in words?|quarter to 8|quarter past 7,quarter to 7,45 past 8|15 to 8.', 'Long hand on 12 means…|o’clock|half past,quarter past,5 past|0 minutes.'],
    gen: function g(lv) { var h = r(1, 12), m = pick(lv ? [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55] : [5, 10, 15, 20, 25, 30]); return mc('Telling the time', 'What time does the clock show?', tm(h, m), [tm(h, 60 - m), tm(h % 12 + 1, m), tm(h, m + 5 < 60 ? m + 5 : 0), tm(h, m === 30 ? 15 : 30)], 'Hour hand first, then count in 5s.', 'It is ' + tm(h, m) + '.', CK(h, m)); } });

  P(406, 'learn3', { ch: 'owl', bg: 'day',
    way: 'am is from midnight to noon. pm is from noon to midnight. The clock goes round twice a day.|am = morning,pm = afternoon and night',
    ex: ['You wake up at 7:00. am or pm?|That is in the morning.|7:00 am|morning', 'You have dinner at 6:30. am or pm?|That is in the evening.|6:30 pm|evening'],
    mist: '12 noon is 12:00 pm, and 12 midnight is 12:00 am.|noon = pm,midnight = am',
    real: 'School ends at 3:15 in the afternoon. am or pm?|pm|am|After noon.|3:15 pm',
    qs: ['Breakfast at 8:00. am or pm?|am|pm|Morning.', 'Lunch at 12:30. am or pm?|pm|am|After noon.', 'Bedtime at 8:30 at night. am or pm?|pm|am|Night.', 'Waking at 6:45. am or pm?|am|pm|Morning.', 'Which is later: 10 am or 10 pm?|10 pm|10 am|Evening.', 'Which is earlier: 9 am or 9 pm?|9 am|9 pm|Morning.', 'What time is noon?|12:00 pm|12:00 am,1:00 pm,11:00 am|Middle of the day.', 'What time is midnight?|12:00 am|12:00 pm,1:00 am,11:00 pm|Middle of the night.'],
    gen: function g(lv) { var P = [['wake up', 'am', 7], ['eat breakfast', 'am', 8], ['start school', 'am', 9], ['eat lunch', 'pm', 12], ['leave school', 'pm', 3], ['eat dinner', 'pm', 6], ['go to bed', 'pm', 8], ['go to a late film', 'pm', 9], ['wake for a trip', 'am', 5]], p = pick(P), mm = pick(lv ? [0, 15, 30, 45] : [0, 30]); return mc('am and pm', 'You ' + p[0] + ' at <b>' + tm(p[2], mm) + '</b>. Is this <b>am</b> or <b>pm</b>?', p[1], [p[1] === 'am' ? 'pm' : 'am'], 'Morning is am. Afternoon and evening are pm.', tm(p[2], mm) + ' ' + p[1] + '.'); } });

  P(406, 'learn4', { ch: 'owl', bg: 'day',
    way: 'A timetable lists times in rows and columns. Find the place and read across or down.|train times table',
    ex: ['Train A leaves at 9:10 and arrives at 9:45. How long?|9:10 to 9:45 = 35 minutes.|35 minutes|9:10 → 9:45', 'A bus leaves at 3:20. It is late by 10 minutes. When does it leave?|3:20 + 10.|3:30|3:30'],
    mist: 'Read the correct row and column. Put your finger on the place and the train.|row and column',
    real: 'The bus leaves at 8:15 and the journey takes 20 minutes. When does it arrive?|8:35|8:20,8:45,9:15|8:15 + 20.|8:15 + 20 min',
    qs: ['A train leaves at 10:00 and arrives at 10:30. How long?|30 minutes|60 minutes,10 minutes,3 hours|Count on.', 'A bus leaves at 2:15 and takes 15 minutes. Arrives?|2:30|2:15,3:00,2:45|2:15 + 15.', 'A film starts at 6:00 and lasts 2 hours. Ends?|8:00|6:02,7:00,12:00|6 + 2.', 'A lesson starts at 9:00 and ends at 9:40. How long?|40 minutes|4 minutes,50 minutes,1 hour|Count on.', 'Which is earlier: 1:50 or 2:10?|1:50|2:10|Before 2.', 'A train leaves at 7:45 and arrives at 8:15. How long?|30 minutes|15 minutes,60 minutes,45 minutes|15 + 15.', 'The bus is every 20 minutes. One at 3:00. The next?|3:20|3:02,4:00,3:40|3:00 + 20.', 'A bus leaves at 11:30 and arrives at 12:10. How long?|40 minutes|20 minutes,60 minutes,80 minutes|30 + 10.'],
    gen: function g(lv) { var h = r(7, 11), m = pick([0, 10, 15, 20, 30, 40, 45]), d = pick(lv ? [20, 25, 35, 40, 50] : [15, 20, 30, 45]), tot = h * 60 + m + d, h2 = Math.floor(tot / 60), m2 = tot % 60; return r(0, 1) ? mc('Timetables', 'The bus leaves at <b>' + tm(h, m) + '</b> and the journey takes <b>' + d + ' minutes</b>. When does it arrive?', tm(h2, m2), [tm(h2, (m2 + 10) % 60), tm(h2 + 1, m2), tm(h2, (m2 + 50) % 60)], 'Add the minutes. Bridge to the hour.', tm(h, m) + ' + ' + d + ' minutes = ' + tm(h2, m2) + '.') : mc('Timetables', 'A train leaves at <b>' + tm(h, m) + '</b> and arrives at <b>' + tm(h2, m2) + '</b>. How long is the journey?', d + ' minutes', [(d + 10) + ' minutes', (d - 5) + ' minutes', (d + 30) + ' minutes'], 'Count on from the start.', 'The journey is ' + d + ' minutes.'); } });

  P(406, 'learnm1', { ch: 'owl', bg: 'day',
    t: '24-hour time|What is the 24-hour clock?|The 24-hour clock goes from 00:00 to 23:59. After 12 noon, add 12. 3 pm is 15:00.|3 pm = 15:00',
    words: '24-hour clock=time written with four digits=🕒;midnight=00:00=🌙;noon=12:00=☀️;digital time=time shown with numbers=🔢',
    see: ['Morning times stay the same. 9 am is 09:00.|09:00', 'Afternoon: add 12. 3 pm is 15:00.|3 + 12 = 15', 'Midnight is 00:00 and noon is 12:00.|00:00,12:00'],
    ex3: ['Write 4 pm as 24-hour time.|4 + 12 = 16.|16:00|4 pm', 'Write 18:30 as am or pm.|18 - 12 = 6.|6:30 pm|18:30', 'Write 7:15 am as 24-hour time.|Morning stays the same.|07:15|7:15 am'],
    mist: '12 pm is 12:00, not 24:00. After 12:59, add 12 for the afternoon.|noon 12:00',
    chk: 'What is 8 pm in 24-hour time?|20:00|08:00,18:00,12:00|8 + 12.|8 pm',
    rem: 'Add 12 for pm. Take 12 away to go back.|+12 / -12',
    way: 'Make a clock with two rings: 1 to 12 and 13 to 24.|12 + 1 = 13',
    ex: ['Write 1 pm in 24-hour time.|1 + 12 = 13.|13:00|13:00', 'Write 21:00 in 12-hour time.|21 - 12 = 9.|9:00 pm|9 pm'],
    real: 'A train leaves at 17:45. What time is that in the evening?|5:45 pm|7:45 pm,5:45 am,17:45 am|17 - 12 = 5.|17:45',
    qs: ['2 pm as 24-hour?|14:00|02:00,12:00,24:00|2 + 12.', '6 pm as 24-hour?|18:00|06:00,16:00,12:00|6 + 12.', '10 am as 24-hour?|10:00|22:00,00:10,01:00|Morning same.', '15:00 is…|3 pm|3 am,5 pm,1 pm|15 - 12.', '20:30 is…|8:30 pm|8:30 am,6:30 pm,10:30 pm|20 - 12.', '11 pm as 24-hour?|23:00|11:00,21:00,12:00|11 + 12.', '12:00 is…|noon|midnight,1 pm,12 am|Middle of the day.', '00:00 is…|midnight|noon,1 am,12 pm|Start of the day.'],
    gen: function g(lv) { var h = r(1, 11), m = pick(lv ? [0, 15, 30, 45] : [0, 30]), pm = r(0, 1), t24 = pm ? h + 12 : h, ask = r(0, 1); return ask ? mc('24-hour time', 'Write <b>' + tm(h, m) + ' ' + (pm ? 'pm' : 'am') + '</b> as 24-hour time.', pad(t24) + ':' + pad(m), [pad(pm ? h : h + 12) + ':' + pad(m), pad(h) + ':' + pad(m === 0 ? 30 : 0), pad(t24 + 1) + ':' + pad(m)], pm ? 'Add 12 for pm.' : 'am stays the same.', pad(t24) + ':' + pad(m) + '.') : mc('24-hour time', 'Write <b>' + pad(t24) + ':' + pad(m) + '</b> as 12-hour time.', tm(h, m) + ' ' + (pm ? 'pm' : 'am'), [tm(h, m) + ' ' + (pm ? 'am' : 'pm'), tm(h + 1, m) + ' ' + (pm ? 'pm' : 'am'), tm(h, m + 15) + ' ' + (pm ? 'pm' : 'am')], pm ? 'Take 12 away.' : 'am stays the same.', tm(h, m) + (pm ? ' pm.' : ' am.')); } });

  P(406, 'learnm2', { ch: 'owl', bg: 'day',
    t: 'Units of time|How are seconds, minutes, hours and days linked?|60 seconds make 1 minute. 60 minutes make 1 hour. 24 hours make 1 day. 7 days make 1 week.|60 s = 1 min',
    words: 'second=a very short time=⏱️;minute=60 seconds=⏲️;hour=60 minutes=🕐;day=24 hours=📅',
    see: ['1 minute is 60 seconds.|1 min = 60 s', '1 hour is 60 minutes. 2 hours is 120 minutes.|1 h = 60 min', '1 day is 24 hours. 1 week is 7 days.|24 h,7 days'],
    ex3: ['How many minutes in 2 hours?|2 × 60.|120|2 × 60', 'How many hours in 2 days?|2 × 24.|48|2 × 24', 'How many days in 3 weeks?|3 × 7.|21|3 × 7'],
    mist: 'A minute is 60 seconds, not 100. Use 60, 24 and 7.|60 24 7',
    chk: 'How many seconds in 2 minutes?|120|60,200,100|2 × 60.|2 × 60',
    rem: '60 s, 60 min, 24 h, 7 days.|60 60 24 7',
    way: 'Make a ladder from seconds up to weeks, writing how many to climb each rung.|60, 60, 24, 7',
    ex: ['How many minutes in half an hour?|Half of 60.|30|30', 'How many days in a fortnight?|2 weeks.|14|2 × 7'],
    real: 'A TV show lasts 90 minutes. Is that more or less than 1 hour?|more|less,the same|60 < 90.|90 min',
    qs: ['1 minute = ? seconds|60|100,10,30|60.', '1 hour = ? minutes|60|100,24,30|60.', '1 day = ? hours|24|12,60,7|24.', '1 week = ? days|7|5,10,24|7.', '3 minutes = ? seconds|180|60,300,130|3 × 60.', '2 hours = ? minutes|120|60,200,12|2 × 60.', 'Half an hour = ? minutes|30|15,50,60|Half of 60.', '2 weeks = ? days|14|7,12,21|2 × 7.'],
    gen: function g(lv) { var K = [['minutes', 'seconds', 60], ['hours', 'minutes', 60], ['days', 'hours', 24], ['weeks', 'days', 7]], k = pick(lv ? K : K.slice(0, 3)), n = r(2, lv ? 9 : 5); return mc('Units of time', 'How many <b>' + k[1] + '</b> are in <b>' + n + ' ' + k[0] + '</b>?', n * k[2], [n * k[2] + k[2], n * 100, n + k[2], n * k[2] - n], '1 ' + k[0].replace(/s$/, '') + ' = ' + k[2] + ' ' + k[1] + '.', n + ' × ' + k[2] + ' = ' + n * k[2] + '.'); } });

  P(406, 'learnm3', { ch: 'owl', bg: 'day',
    t: 'Months and the year|How many days are in each month?|A year has 12 months and 365 days. Some months have 30 days, some 31 and February has 28 or 29.|30 days has September...',
    words: 'month=part of a year=🗓️;leap year=366 days every 4 years=🐸;year=12 months=📆;date=day and month=📅',
    see: ['Rhyme: 30 days hath September, April, June and November.|Sep, Apr, Jun, Nov', 'All the rest have 31, except February with 28.|Feb = 28', 'In a leap year February has 29 days. A leap year has 366 days.|29, 366'],
    ex3: ['How many days in June?|June is in the rhyme.|30|30', 'How many days in July?|Not in the rhyme.|31|31', 'How many months have 30 days?|Sep, Apr, Jun, Nov.|4|4'],
    mist: 'Check the month. February is the short month. Not all months have 30 days.|28, 30, 31',
    chk: 'How many days in September?|30|31,28,29|In the rhyme.|Sep',
    rem: '30 days hath September, April, June and November. Feb 28 or 29. Others 31.|rhyme',
    way: 'Use your knuckles: knuckles are 31-day months, the dips between are 30 (not February).|knuckles',
    ex: ['How many days in April?|In the rhyme.|30|30', 'How many days in March?|Not in the rhyme.|31|31'],
    real: 'Your birthday is on 14 March. How many days from 1 March?|13|14,30,31|14 - 1.|14 - 1',
    qs: ['Days in a leap year?|366|365,364,360|One extra day.', 'How many months in a year?|12|10,11,13|12.', 'Days in November?|30|31,28,29|Rhyme.', 'Days in August?|31|30,28,29|Not rhyme.', 'Days in February (not leap)?|28|29,30,31|Short month.', 'Which has 31 days?|January|April,June,September|31.', 'Which has 30 days?|April|January,March,May|Rhyme.', 'Which month is after June?|July|May,August,June|Order.'],
    gen: function g(lv) { var Mo = [['January', 31], ['February', 28], ['March', 31], ['April', 30], ['May', 31], ['June', 30], ['July', 31], ['August', 31], ['September', 30], ['October', 31], ['November', 30], ['December', 31]], m = pick(lv ? Mo : Mo.filter(function (x) { return x[0] !== 'February'; })); return mc('Months', 'How many days are in <b>' + m[0] + '</b>? (not a leap year)', m[1], [30, 31, 28, 29, 32].filter(function (x) { return x !== m[1]; }), 'Use the rhyme.', m[0] + ' has ' + m[1] + ' days.'); } });
})();
