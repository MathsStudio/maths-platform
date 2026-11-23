/* fl_m3a.js: P3 Numbers to 100 and beyond (301) and Adding and subtracting (302) */
(function () {
  'use strict';
  var FL = window.FL, S = window.Studio; if (!FL || !FL.MEGA) return;
  var B = FL.big, C = FL.cards, TH = FL.things, M = FL.MEGA, r = FL.r, pick = FL.pick, T = FL.track, G = FL.groups;
  function mc(tag, q, a, w, h, e, p) { return FL.MC(tag, q, a, w, [h], e, p || ''); }
  function nl(lo, hi, mark, hops) { return T(lo, hi, mark, hops); }
  var W = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'], TY = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  function words(n) { if (n < 20) return W[n]; if (n < 100) return TY[Math.floor(n / 10)] + (n % 10 ? '-' + W[n % 10] : ''); if (n < 1000) return W[Math.floor(n / 100)] + ' hundred' + (n % 100 ? ' and ' + words(n % 100) : ''); return String(n); }
  FL.words = words;
  function hto(h, t, o) { return C([h + ' hundreds', t + ' tens', o + ' ones']); }

  /* ---------- 301 ---------- */
  M(301, { id: 'learn1', ch: 'pirate', bg: 'sea',
    way: ['A pattern has a rule. Find the rule by looking at the gap between each pair of numbers.', C(['5', '10', '15', '20', '+5 each time'])],
    ex: [['What comes next? 30, 40, 50, 60, …', ['Gaps: 10, 10, 10.', 'The rule is add 10.', '60 + 10 = 70.'], 'The next number is 70.', C(['30', '40', '50', '60', '?'])], ['What comes next? 18, 15, 12, 9, …', ['Gaps: 3 less each time.', '9 − 3 = 6.'], 'The next number is 6.', C(['18', '15', '12', '9', '?'])]],
    mist: ['Check every gap. 2, 5, 8, 12 changes from +3 to +4, so it is not a pattern.', C(['+3', '+3', '+4 ✗'])],
    real: ['Pip saves 20p, 40p, 60p, … each week. How much in week 4?', '80p', ['70p', '100p', '60p'], 'Add 20 each week.', C(['20p', '40p', '60p', '?'])],
    qs: [['What comes next? 4, 8, 12, 16, …', '20', ['18', '24', '19'], '+4.', ''], ['What comes next? 100, 90, 80, 70, …', '60', ['50', '65', '71'], '−10.', ''], ['What is the rule? 7, 14, 21, 28', 'add 7', ['add 5', 'add 14', 'add 8'], 'Gap is 7.', ''], ['What is missing? 15, 20, ?, 30', '25', ['24', '26', '35'], '+5.', ''],
         ['What comes next? 3, 6, 9, 12, …', '15', ['14', '18', '13'], '+3.', ''], ['What comes next? 50, 45, 40, 35, …', '30', ['25', '36', '32'], '−5.', ''], ['What is the rule? 1, 3, 5, 7', 'add 2', ['add 1', 'add 3', 'add 7'], '+2.', ''], ['What is missing? 2, ?, 6, 8, 10', '4', ['3', '5', '12'], '+2.', '']],
    gen: function (lv) { var st = pick(lv ? [3, 4, 6, 7, 8, 9] : [2, 3, 4, 5, 10]), s = r(1, 9) * (lv ? 1 : 2), down = lv === 2 && r(0, 1), a = [0, 1, 2, 3].map(function (i) { return down ? s + 40 - st * i : s + st * i; }), n = down ? s + 40 - st * 4 : s + st * 4; return mc('Number patterns', 'What comes next? <b>' + a.join(', ') + ', …</b>', n, [n + 1, n - 1, n + st], 'Find the gap between the numbers.', 'The rule is ' + (down ? 'take away ' : 'add ') + st + ', so the next number is ' + n + '.'); } });

  M(301, { id: 'learn2', ch: 'pirate', bg: 'sea',
    way: ['Think of money: 100 is a pound, 10 is a 10p coin and 1 is a penny. 245 is 2 hundreds, 4 tens and 5 ones.', hto(2, 4, 5)],
    ex: [['What is the value of the 6 in 463?', ['463 is 4 hundreds, 6 tens, 3 ones.', 'The 6 is in the tens place.'], 'The 6 is worth 60.', hto(4, 6, 3)], ['Write 3 hundreds, 0 tens and 8 ones.', ['300 and 0 and 8.', 'The 0 holds the tens place.'], '308', hto(3, 0, 8)]],
    mist: ['Do not skip the zero. 3 hundreds and 5 ones is 305, not 35.', C(['305 ✓', '35 ✗'])],
    real: ['A shop has 2 boxes of 100 pens, 3 packs of 10 and 7 loose. How many pens?', '237', ['327', '2037', '23'], '200 + 30 + 7.', hto(2, 3, 7)],
    qs: [['How many hundreds in 573?', '5', ['7', '3', '57'], 'First digit.', hto(5, 7, 3)], ['What is the value of 4 in 248?', '40', ['4', '400', '8'], 'Tens place.', hto(2, 4, 8)], ['What number is 6 hundreds, 2 tens, 1 one?', '621', ['126', '6021', '612'], '600 + 20 + 1.', ''], ['What number is 7 hundreds and 9 ones?', '709', ['79', '790', '7009'], 'Zero tens.', ''],
         ['What is 400 + 50 + 2?', '452', ['4502', '542', '45'], 'Put them together.', ''], ['What is the value of 9 in 912?', '900', ['90', '9', '12'], 'Hundreds place.', ''], ['Which number has 3 tens?', '534', ['354', '345', '3'], 'Tens is the middle digit.', ''], ['How many tens in 380?', '8', ['3', '80', '0'], 'Middle digit.', '']],
    gen: function (lv) { var h = r(1, 9), t = r(0, 9), o = r(0, 9), n = h * 100 + t * 10 + o, k = r(0, 2); return k === 0 ? mc('Hundreds, tens and ones', 'What is the value of the <b>' + [h, t, o][k = r(0, 2)] + '</b> in ' + n + '? (' + ['hundreds', 'tens', 'ones'][k] + ' place)', [h * 100, t * 10, o][k], [[h * 100, t * 10, o][k] * 10 + 1, [h, t, o][k], [h * 100, t * 10, o][k] + 100].filter(function (x) { return x !== [h * 100, t * 10, o][k]; }), 'Look at the place of the digit.', 'The digit is in the ' + ['hundreds', 'tens', 'ones'][k] + ' place.') : k === 1 ? mc('Hundreds, tens and ones', 'What number is <b>' + h + ' hundreds, ' + t + ' tens and ' + o + ' ones</b>?', n, [o * 100 + t * 10 + h, h * 10 + t + o, n + 100], 'Hundreds, then tens, then ones.', h * 100 + ' + ' + t * 10 + ' + ' + o + ' = ' + n + '.', hto(h, t, o)) : mc('Hundreds, tens and ones', 'How many <b>tens</b> are in the digit place of <b>' + n + '</b>?', t, [h, o, t + 1], 'The tens digit is in the middle.', n + ' has ' + t + ' tens.'); } });

  M(301, { id: 'learn3', ch: 'pirate', bg: 'sea',
    way: ['Line the numbers up in columns. Start with the hundreds, then tens, then ones. The first difference decides.', C(['4 2 7', '4 5 1', '← 2 tens < 5 tens'])],
    ex: [['Which is bigger: 618 or 681?', ['Hundreds: 6 and 6, the same.', 'Tens: 1 and 8. 8 is more.'], '681 is bigger.', C(['618', '681'])], ['Put in order, smallest first: 352, 325, 532.', ['Hundreds: 3, 3, 5. 532 is biggest.', 'Tens: 5 and 2. 325 is smaller.'], '325, 352, 532.', C(['352', '325', '532'])]],
    mist: ['Compare the hundreds first, not the ones. 199 is smaller than 201.', C(['199 < 201'])],
    real: ['A bag holds 450 sweets, another 405. Which holds more?', '450', ['405', 'the same'], 'Tens: 5 is more than 0.', C(['450', '405'])],
    qs: [['Which is bigger: 345 or 354?', '354', ['345'], 'Tens: 5 > 4.', ''], ['Which is smaller: 702 or 720?', '702', ['720'], 'Tens: 0 < 2.', ''], ['Which is the biggest: 289, 298, 829?', '829', ['289', '298'], 'Hundreds.', ''], ['Which is the smallest: 505, 550, 55?', '55', ['505', '550'], '55 has no hundreds.', ''],
         ['Put in order, biggest first: 120, 210, 102', '210, 120, 102', ['102, 120, 210', '120, 210, 102'], 'Largest first.', ''], ['Which sign fits: 456 ◯ 465?', '<', ['>', '='], '5 tens < 6 tens.', ''], ['Which sign fits: 800 ◯ 799?', '>', ['<', '='], '8 hundreds > 7.', ''], ['Which is bigger: 999 or 1000?', '1000', ['999'], '1000 is one more.', '']],
    gen: function (lv) { var a = r(100, lv ? 999 : 500), b = a + r(1, lv ? 90 : 300) * (r(0, 1) ? 1 : -1); if (b < 100) b = a + 12; var big = Math.max(a, b), sm = Math.min(a, b), o = r(0, 1); return mc('Comparing numbers', 'Which is <b>' + (o ? 'bigger' : 'smaller') + '</b>: ' + a + ' or ' + b + '?', o ? big : sm, [o ? sm : big], 'Compare the hundreds, then the tens, then the ones.', big + ' is bigger than ' + sm + '.'); } });

  M(301, { id: 'learn4', ch: 'pirate', bg: 'sea',
    way: ['On a number line, find the two tens either side. Round to the nearer one. Halfway (5) goes up.', nl(30, 40, [34, 30, 40])],
    ex: [['Round 47 to the nearest 10.', ['47 is between 40 and 50.', 'The ones digit is 7, so go up.'], '47 rounds to 50.', nl(40, 50, [47, 50])], ['Round 82 to the nearest 10.', ['82 is between 80 and 90.', 'The ones digit is 2, so stay down.'], '82 rounds to 80.', nl(80, 90, [82, 80])]],
    mist: ['5 rounds UP. 35 rounds to 40, not 30.', nl(30, 40, [35, 40])],
    real: ['A shop has 63 apples. About how many tens is that?', '60', ['70', '63', '50'], '3 is less than 5, round down.', ''],
    qs: [['Round 23 to the nearest 10.', '20', ['30', '25', '10'], '3 < 5.', ''], ['Round 68 to the nearest 10.', '70', ['60', '80', '68'], '8 ≥ 5.', ''], ['Round 45 to the nearest 10.', '50', ['40', '45', '55'], '5 goes up.', ''], ['Round 91 to the nearest 10.', '90', ['100', '91', '80'], '1 is small.', ''],
         ['Round 99 to the nearest 10.', '100', ['90', '99', '110'], '9 goes up.', ''], ['Round 14 to the nearest 10.', '10', ['20', '14', '15'], '4 < 5.', ''], ['Which rounds to 60?', '57', ['52', '67', '64'], '57 is closest to 60.', ''], ['Round 75 to the nearest 10.', '80', ['70', '75', '85'], 'Halfway goes up.', '']],
    gen: function (lv) { var n = r(11, lv ? 199 : 99), rd = Math.round(n / 10) * 10; return mc('Rounding', 'Round <b>' + n + '</b> to the nearest 10.', rd, [rd + 10, rd - 10, n], 'Look at the ones digit: 5 or more goes up.', n + ' rounds to ' + rd + '.', nl(Math.floor(n / 10) * 10, Math.floor(n / 10) * 10 + 10, [n, rd])); } });

  M(301, { id: 'learn5', ch: 'pirate', bg: 'sea',
    way: ['Odd and even alternate. Even numbers end in 0, 2, 4, 6, 8; odd numbers end in 1, 3, 5, 7, 9. Bigger numbers follow the same rule.', C(['10 even', '11 odd', '12 even', '13 odd'])],
    ex: [['Is 86 odd or even?', ['Look at the ones digit, 6.', '6 is even.'], '86 is even.', B('86')], ['Is 275 odd or even?', ['The ones digit is 5.', '5 is odd.'], '275 is odd.', B('275')]],
    mist: ['Only the last digit matters. 98 is even; 89 is odd.', C(['98 even', '89 odd'])],
    real: ['23 children go to a trip. Can they all stand in pairs?', 'No', ['Yes'], '23 is odd.', B('23')],
    qs: [['Is 48 odd or even?', 'even', ['odd'], 'Ends in 8.', ''], ['Is 91 odd or even?', 'odd', ['even'], 'Ends in 1.', ''], ['Is 130 odd or even?', 'even', ['odd'], 'Ends in 0.', ''], ['Which is odd?', '57', ['56', '58', '60'], 'Ends in 7.', ''],
         ['Which is even?', '84', ['83', '85', '87'], 'Ends in 4.', ''], ['Odd + odd is…', 'even', ['odd'], '3 + 5 = 8.', ''], ['Even + even is…', 'even', ['odd'], '4 + 6 = 10.', ''], ['Odd + even is…', 'odd', ['even'], '3 + 4 = 7.', '']],
    gen: function (lv) { var n = r(10, lv ? 999 : 99); return mc('Odd and even', 'Is <b>' + n + '</b> odd or even?', n % 2 ? 'odd' : 'even', [n % 2 ? 'even' : 'odd'], 'Look at the last digit.', n + ' is ' + (n % 2 ? 'odd' : 'even') + '.'); } });

  M(301, { id: 'learn6', ch: 'pirate', bg: 'sea',
    way: ['We write ordinal numbers with a short ending: 1st, 2nd, 3rd, then th: 4th, 5th, 11th, 12th, 20th, 21st.', C(['1st', '2nd', '3rd', '4th', '21st'])],
    ex: [['Zoe is 4th in the queue. How many are in front?', ['4th means 3 before her.'], '3 people.', C(['1st', '2nd', '3rd', '4th'])], ['What comes after 9th?', ['9th, 10th.'], '10th', C(['9th', '10th'])]],
    mist: ['Ordinal numbers use position, not amount. 3rd is a place, 3 is how many.', C(['3rd place', '3 medals'])],
    real: ['You finish a race in 2nd place. Who finished first?', 'someone else', ['you'], '1st is before 2nd.', C(['🥇', '🥈'])],
    qs: [['What comes after 6th?', '7th', ['5th', '8th', '6'], 'Next.', ''], ['What comes before 3rd?', '2nd', ['4th', '1st'], 'Before.', ''], ['Which is the 5th letter in A B C D E F?', 'E', ['D', 'F'], 'Count to 5.', ''], ['What is the ordinal for 11?', '11th', ['11st', '11nd'], 'Teen numbers end th.', ''],
         ['What is the ordinal for 22?', '22nd', ['22th', '22rd'], '2nd ending.', ''], ['Which place is after 2nd?', '3rd', ['1st', '4th'], 'Order.', ''], ['Dev is 8th. How many people are in front?', '7', ['8', '9'], '1st to 7th.', ''], ['What is the ordinal for 20?', '20th', ['20nd', '20st'], 'Ends th.', '']],
    gen: function (lv) { var n = r(1, lv ? 30 : 12); function o(k) { var t = k % 100; return k + (t > 10 && t < 14 ? 'th' : k % 10 === 1 ? 'st' : k % 10 === 2 ? 'nd' : k % 10 === 3 ? 'rd' : 'th'); } return mc('Ordinal numbers', 'What comes <b>after ' + o(n) + '</b>?', o(n + 1), [o(n - 1 || 3), o(n + 2), n + 1 + ''], 'Add one place.', o(n + 1) + ' comes after ' + o(n) + '.'); } });

  /* new 301 lessons */
  M(301, { id: 'learnm1', ch: 'pirate', bg: 'sea',
    li: ['Counting in steps', 'How do I count in steps of 2, 3, 4, 5 and 10?', 'Counting in steps is skip counting. Each jump is the same size. It helps with times tables later.', C(['2s', '3s', '4s', '5s', '10s']),
      [['step', 'the size of each jump', '👣'], ['multiple', 'a number in a counting list', '🔢'], ['forwards', 'going up', '⬆️'], ['backwards', 'going down', '⬇️']],
      [['In 2s: 2, 4, 6, 8, 10, 12.', C(['2', '4', '6', '8', '10', '12'])], ['In 5s: 5, 10, 15, 20, 25, 30.', C(['5', '10', '15', '20', '25', '30'])], ['In 3s: 3, 6, 9, 12, 15, 18.', C(['3', '6', '9', '12', '15', '18'])]],
      [['Count in 4s from 0: 0, 4, 8, ?', ['4 more than 8.'], '12', nl(0, 16, [0, 4, 8, 12])], ['Count back in 10s from 70: 70, 60, ?', ['10 less than 60.'], '50', C(['70', '60', '?'])], ['Which number is in the 3s list: 10, 12 or 14?', ['3, 6, 9, 12.'], '12', C(['3', '6', '9', '12'])]],
      ['Keep the step the same. 5, 10, 14 changes the step.', C(['5, 10, 15 ✓'])],
      ['Count in 3s: 12, 15, 18, ?', '', ['20', '21', '22'], '21', '18 + 3 = 21.', 'Add 3.'],
      ['Skip count: keep the jump the same size every time.', C(['same step', 'forwards or backwards'])]],
    ex: [['Count in 5s from 35: 35, 40, 45, ?', ['+5.'], '50', C(['35', '40', '45', '?'])], ['Count in 2s back from 20: 20, 18, 16, ?', ['−2.'], '14', C(['20', '18', '16', '?'])]],
    way: ['Colour the multiples on a hundred square and look at the pattern.', C(['2s: all even', '5s: end in 0 or 5', '10s: end in 0'])],
    mist: ['Start counting from the start number, not zero, if the question says so.', C(['start at 35'])],
    real: ['Each box holds 4 eggs. How many in 5 boxes? Count in 4s.', '20', ['9', '16', '24'], '4, 8, 12, 16, 20.', TH(8, 'star')],
    qs: [['Count in 3s: 3, 6, 9, …', '12', ['10', '11', '13'], '+3.', ''], ['Count in 4s: 4, 8, 12, …', '16', ['14', '15', '18'], '+4.', ''], ['Count in 5s: 25, 30, 35, …', '40', ['38', '45', '36'], '+5.', ''], ['Count back in 10s: 90, 80, 70, …', '60', ['50', '65', '71'], '−10.', ''],
         ['Count in 2s: 14, 16, 18, …', '20', ['19', '22', '21'], '+2.', ''], ['Which is in the 4s: 18, 20 or 22?', '20', ['18', '22'], '4, 8, 12, 16, 20.', ''], ['Count back in 5s: 40, 35, 30, …', '25', ['20', '26', '24'], '−5.', ''], ['Count in 3s from 0 to 12. How many numbers (not counting 0)?', '4', ['3', '5', '12'], '3, 6, 9, 12.', '']],
    gen: function (lv) { var st = pick(lv ? [3, 4, 6, 7] : [2, 3, 4, 5, 10]), s = st * r(0, 3), n = s + 3 * st; return mc('Counting in steps', 'Count in ' + st + 's: <b>' + s + ', ' + (s + st) + ', ' + (s + 2 * st) + ', …</b> What comes next?', n, [n + 1, n - 1, n + st], 'Add ' + st + ' each time.', 'Next is ' + n + '.'); } });

  M(301, { id: 'learnm2', ch: 'pirate', bg: 'sea',
    li: ['Number lines to 100', 'How do I find numbers on a number line to 100?', 'A number line to 100 goes in tens. Find the two tens either side of your number, then count on in ones.', nl(0, 10, [0, 5, 10]),
      [['tens', '10, 20, 30 …', '🔟'], ['between', 'in the middle of two', '↔️'], ['halfway', 'exactly in the middle', '🎯'], ['place', 'put in the right spot', '📍']],
      [['The line goes 0, 10, 20, 30 … 100. Each big step is 10.', C(['0', '10', '20', '30', '…', '100'])], ['Where is 47? Between 40 and 50. It is 7 after 40.', C(['40', '47', '50'])], ['Halfway between 40 and 50 is 45.', C(['40', '45', '50'])]],
      [['Which tens is 63 between?', ['60 is below, 70 above.'], '60 and 70.', C(['60', '63', '70'])], ['What number is halfway between 20 and 30?', ['25.'], '25', C(['20', '25', '30'])], ['Is 38 closer to 30 or 40?', ['8 ones is more than halfway.'], '40', C(['30', '38', '40'])]],
      ['A number line is not drawn to scale. Use the tens markers to guide you.', C(['0', '10', '20'])],
      ['Which tens does 72 lie between?', C(['70', '72', '80']), ['60 and 70', '70 and 80', '80 and 90'], '70 and 80', '72 is 2 more than 70.', 'Find the tens either side.'],
      ['Find the tens either side of the number, then count the ones.', C(['tens', 'ones'])]],
    ex: [['What is halfway between 60 and 70?', ['Halfway means 5 more than 60.'], '65', C(['60', '65', '70'])], ['Is 91 closer to 90 or 100?', ['1 more than 90.'], '90', C(['90', '91', '100'])]],
    way: ['Draw a line from 0 to 100 and mark every 10. Then mark your number with an arrow.', C(['0', '50', '100'])],
    mist: ['Count the ones from the tens marker, not from 0.', C(['7 after 40 = 47'])],
    real: ['A thermometer climbs to 83 degrees. Which tens is it between?', '80 and 90', ['70 and 80', '90 and 100'], '83 is 3 above 80.', C(['80', '83', '90'])],
    qs: [['Which tens is 56 between?', '50 and 60', ['40 and 50', '60 and 70'], 'Tens either side.', ''], ['What is halfway between 10 and 20?', '15', ['12', '14', '25'], 'Add 5 to 10.', ''], ['What is halfway between 70 and 80?', '75', ['72', '74', '85'], 'Add 5.', ''], ['Is 24 closer to 20 or 30?', '20', ['30'], '4 < 5.', ''],
         ['Is 67 closer to 60 or 70?', '70', ['60'], '7 > 5.', ''], ['What number is 2 after 40?', '42', ['38', '24', '40'], 'Count on 2.', ''], ['What number is 3 before 50?', '47', ['53', '43', '50'], 'Count back 3.', ''], ['Which is nearest 100: 89, 95 or 79?', '95', ['89', '79'], 'Closest.', '']],
    gen: function (lv) { var t = r(1, 8) * 10, o = r(1, 9), n = t + o; return mc('Number lines', 'Which two tens is <b>' + n + '</b> between?', t + ' and ' + (t + 10), [t - 10 + ' and ' + t, t + 10 + ' and ' + (t + 20), t + 5 + ' and ' + (t + 15)], 'Find the tens either side.', n + ' is between ' + t + ' and ' + (t + 10) + '.', nl(t, t + 10, [n])); } });

  M(301, { id: 'learnm3', ch: 'pirate', bg: 'sea',
    li: ['Writing numbers in words', 'How do I read and write numbers in words?', 'We write 21 as twenty-one and 100 as one hundred. Tens words go with a hyphen and the ones word.', C(['21', 'twenty-one']),
      [['hyphen', 'the little dash - in twenty-one', '➖'], ['hundred', 'ten tens', '💯'], ['twenty', '20', '2️⃣'], ['thirty', '30', '3️⃣']],
      [['20 twenty, 30 thirty, 40 forty, 50 fifty, 60 sixty, 70 seventy, 80 eighty, 90 ninety.', C(['20 twenty', '30 thirty', '40 forty', '50 fifty'])], ['Put the tens and ones together: 34 is thirty-four.', C(['30', '4', 'thirty-four'])], ['100 is one hundred. 245 is two hundred and forty-five.', C(['100', 'one hundred', '245', 'two hundred and forty-five'])]],
      [['Write 47 in words.', ['40 is forty.', '7 is seven.'], 'forty-seven', B('47 → forty-seven')], ['What number is “sixty-two”?', ['sixty is 60, two is 2.'], '62', B('sixty-two → 62')], ['Write 150 in words.', ['One hundred and fifty.'], 'one hundred and fifty', B('150')]],
      ['Spell carefully: forty has no u. Fifty is not fivety.', C(['forty', 'fifty'])],
      ['Which is 56 in words?', B('56'), ['fifty-six', 'sixty-five', 'five-six'], 'fifty-six', '50 and 6.', 'Tens word, then ones.'],
      ['Number words: tens word, hyphen, ones word.', C(['thirty-five'])]],
    ex: [['Write 83 in words.', ['eighty-three.'], 'eighty-three', B('83')], ['What is “ninety-nine” in digits?', ['90 and 9.'], '99', B('ninety-nine')]],
    way: ['Make number cards: put a digit card next to its word card and match them.', C(['58', 'fifty-eight'])],
    mist: ['Do not mix teens and tens: 13 is thirteen, 30 is thirty.', C(['13 thirteen', '30 thirty'])],
    real: ['The cheque says “seventy-five pounds”. How much is it?', '£75', ['£57', '£705', '£7'], '70 and 5.', B('seventy-five')],
    qs: [['What is 25 in words?', 'twenty-five', ['fifty-two', 'twenty-fifty'], '20 and 5.', ''], ['What number is “forty-one”?', '41', ['14', '401', '40'], '40 and 1.', ''], ['What is 90 in words?', 'ninety', ['nineteen', 'nine'], '90.', ''], ['What number is “eighty-eight”?', '88', ['808', '80', '18'], 'Eighty and eight.', ''],
         ['What is 100 in words?', 'one hundred', ['ten', 'one thousand'], '100.', ''], ['What number is “thirty”?', '30', ['13', '3'], 'Thirty.', ''], ['What is 66 in words?', 'sixty-six', ['six-six', 'sixteen-six'], '60 and 6.', ''], ['What number is “seventeen”?', '17', ['70', '71', '7'], 'Teen.', '']],
    gen: function (lv) { var n = r(21, lv ? 199 : 99); return r(0, 1) ? mc('Number words', 'How do you write <b>' + n + '</b> in words?', words(n), [words(n + 1), words(n + 10), words(n - 10 < 1 ? n + 20 : n - 10)], 'Say it out loud.', n + ' is ' + words(n) + '.') : mc('Number words', 'What number is “<b>' + words(n) + '</b>”?', n, [n + 1, n + 10, n - 10 < 1 ? n + 20 : n - 10], 'Read the tens word and the ones word.', words(n) + ' is ' + n + '.'); } });

  /* ---------- 302 ---------- */
  M(302, { id: 'learn1', ch: 'frog', bg: 'pond',
    way: ['You can add in any order. Spot pairs that make 10, 20 or 100 first.', C(['6 + 4 = 10', '+ 3 = 13'])],
    ex: [['What is 4 + 9 + 6?', ['4 and 6 make 10.', '10 + 9 = 19.'], '19', C(['4 + 6 = 10', '10 + 9'])], ['What is 8 + 5 + 2?', ['8 and 2 make 10.', '10 + 5 = 15.'], '15', C(['8 + 2 = 10', '10 + 5'])]],
    mist: ['Reordering works for adding, but not for taking away.', C(['3 + 5 + 7 ✓ any order', '9 − 4 ✗'])],
    real: ['Dev has 7 red, 8 blue and 3 green marbles. How many?', '18', ['17', '19', '15'], '7 + 3 = 10, 10 + 8 = 18.', G(7, 8, 'star', '+')],
    qs: [['What is 3 + 8 + 7?', '18', ['17', '19', '15'], '3 + 7 = 10.', ''], ['What is 6 + 9 + 4?', '19', ['18', '20', '10'], '6 + 4 = 10.', ''], ['What is 5 + 7 + 5?', '17', ['16', '18', '15'], '5 + 5 = 10.', ''], ['What is 2 + 8 + 9?', '19', ['18', '20', '11'], '2 + 8 = 10.', ''],
         ['What is 12 + 5 + 8?', '25', ['24', '26', '20'], '12 + 8 = 20.', ''], ['What is 14 + 9 + 6?', '29', ['28', '30', '20'], '14 + 6 = 20.', ''], ['Which pair makes 10?', '3 and 7', ['3 and 8', '4 and 5'], '3 + 7.', ''], ['What is 25 + 17 + 5?', '47', ['46', '42', '30'], '25 + 5 = 30.', '']],
    gen: function (lv) { var a = r(1, 9), c = 10 - a, b = r(2, lv ? 19 : 9); return mc('Reordering', 'What is <b>' + a + ' + ' + b + ' + ' + c + '</b>?', 10 + b, [10 + b + 1, 10 + b - 1, a + b], 'Spot the pair that makes 10 first.', a + ' + ' + c + ' = 10, then 10 + ' + b + ' = ' + (10 + b) + '.'); } });

  M(302, { id: 'learn2', ch: 'frog', bg: 'pond',
    way: ['Bridging through 10: make the next ten first, then add what is left.', nl(5, 16, [8, 10, 15], [[8, 10], [10, 15]])],
    ex: [['What is 8 + 6?', ['8 + 2 = 10.', '6 − 2 = 4 left.', '10 + 4 = 14.'], '14', nl(7, 15, [8, 10, 14], [[8, 10], [10, 14]])], ['What is 15 − 7?', ['15 − 5 = 10.', '7 − 5 = 2 left.', '10 − 2 = 8.'], '8', nl(6, 16, [15, 10, 8], [[15, 10], [10, 8]])]],
    mist: ['Split the number to make the 10, and remember the rest. 9 + 6: 9 + 1 = 10, then 5 more.', C(['9 + 1 + 5'])],
    real: ['A bus has 9 passengers and 7 get on. How many now?', '16', ['15', '17', '2'], '9 + 1 = 10, then 6 more.', TH(9, 'car')],
    qs: [['What is 9 + 5?', '14', ['13', '15', '4'], '9 + 1 = 10, +4.', ''], ['What is 7 + 6?', '13', ['12', '14', '1'], '7 + 3 = 10, +3.', ''], ['What is 8 + 7?', '15', ['14', '16', '1'], '8 + 2 = 10, +5.', ''], ['What is 6 + 8?', '14', ['13', '15', '2'], '6 + 4 = 10, +4.', ''],
         ['What is 13 − 5?', '8', ['7', '9', '18'], '13 − 3 = 10, −2.', ''], ['What is 12 − 4?', '8', ['7', '9', '16'], '12 − 2 = 10, −2.', ''], ['What is 16 − 8?', '8', ['7', '9', '24'], '16 − 6 = 10, −2.', ''], ['What is 14 − 6?', '8', ['7', '9', '20'], '14 − 4 = 10, −2.', '']],
    gen: function (lv) { var a = r(6, 9), b = r(a === 9 ? 2 : 11 - a, lv ? 9 : 8), add = r(0, 1); if (add) return mc('Bridging through 10', 'What is <b>' + a + ' + ' + b + '</b>? Make 10 first.', a + b, [a + b + 1, a + b - 1, a + b + 10], 'Add to make 10, then add the rest.', a + ' + ' + (10 - a) + ' = 10, then ' + (b - (10 - a)) + ' more makes ' + (a + b) + '.'); var x = r(11, 18), y = r(x - 10 + 1, 9); return mc('Bridging through 10', 'What is <b>' + x + ' − ' + y + '</b>? Go back to 10 first.', x - y, [x - y + 1, x - y - 1, x + y], 'Take away to 10, then take away the rest.', x + ' − ' + (x - 10) + ' = 10, then ' + (y - (x - 10)) + ' less gives ' + (x - y) + '.'); } });

  M(302, { id: 'learn3', ch: 'frog', bg: 'pond',
    way: ['Count on in tens first, then in ones. 35 + 24: 35, 45, 55, then 56, 57, 58, 59.', nl(30, 60, [35, 55, 59], [[35, 55], [55, 59]])],
    ex: [['What is 42 + 31?', ['Add the tens: 42, 52, 62, 72.', 'Add the ones: 73.'], '73', nl(40, 75, [42, 72, 73])], ['What is 58 + 17?', ['Add the tens: 68.', 'Add 7: 75.'], '75', nl(55, 80, [58, 68, 75])]],
    mist: ['Count the tens first, then the ones. Do not count the start number again.', C(['start at 35, not 34'])],
    real: ['A farm has 45 hens and 23 ducks. How many birds?', '68', ['67', '78', '22'], '45 + 20 = 65, + 3 = 68.', TH(10, 'duck')],
    qs: [['What is 34 + 25?', '59', ['58', '69', '9'], '34 + 20 = 54, + 5.', ''], ['What is 47 + 30?', '77', ['78', '17', '71'], '+3 tens.', ''], ['What is 52 + 36?', '88', ['87', '78', '16'], '+30, +6.', ''], ['What is 26 + 43?', '69', ['68', '79', '17'], '+40, +3.', ''],
         ['What is 61 + 28?', '89', ['88', '79', '33'], '+20, +8.', ''], ['What is 15 + 54?', '69', ['68', '79', '39'], '+50, +4.', ''], ['What is 70 + 19?', '89', ['88', '79', '51'], '+10, +9.', ''], ['What is 38 + 41?', '79', ['78', '89', '3'], '+40, +1.', '']],
    gen: function (lv) { var a = r(11, lv ? 70 : 50), b = r(11, lv ? 29 : 39); return mc('Counting on', 'What is <b>' + a + ' + ' + b + '</b>? Count on the tens, then the ones.', a + b, [a + b + 1, a + b - 1, a + b + 10], 'Add the tens first.', a + ' + ' + Math.floor(b / 10) * 10 + ' = ' + (a + Math.floor(b / 10) * 10) + ', then ' + b % 10 + ' more is ' + (a + b) + '.'); } });

  M(302, { id: 'learn4', ch: 'frog', bg: 'pond',
    way: ['Split each number into tens and ones, add the tens, add the ones, then put them back.', C(['30 + 4', '20 + 5', '50 + 9'])],
    ex: [['What is 46 + 23?', ['40 + 6 and 20 + 3.', '40 + 20 = 60. 6 + 3 = 9.', '60 + 9 = 69.'], '69', C(['40+6', '20+3', '69'])], ['What is 57 − 24?', ['50 + 7 and 20 + 4.', '50 − 20 = 30. 7 − 4 = 3.', '30 + 3 = 33.'], '33', C(['50+7', '20+4', '33'])]],
    mist: ['Keep tens with tens and ones with ones. 40 + 3 is 43, not 7.', C(['40 + 3 = 43'])],
    real: ['Mia has 34 beads and Sam has 25. How many in total?', '59', ['58', '69', '9'], '30+20, 4+5.', TH(10, 'sweet')],
    qs: [['What is 32 + 45?', '77', ['67', '78', '7'], '30+40, 2+5.', ''], ['What is 53 + 26?', '79', ['78', '89', '29'], '50+20, 3+6.', ''], ['What is 68 − 35?', '33', ['32', '43', '103'], '60−30, 8−5.', ''], ['What is 74 − 23?', '51', ['50', '41', '97'], '70−20, 4−3.', ''],
         ['What is 41 + 57?', '98', ['97', '88', '16'], '40+50, 1+7.', ''], ['What is 89 − 46?', '43', ['42', '53', '135'], '80−40, 9−6.', ''], ['What is 25 + 63?', '88', ['87', '78', '38'], '20+60, 5+3.', ''], ['What is 96 − 52?', '44', ['43', '54', '148'], '90−50, 6−2.', '']],
    gen: function (lv) { var a = r(11, lv ? 89 : 59), b = r(11, 40), sub = r(0, 1); if (sub && a > b) return mc('Partitioning', 'What is <b>' + a + ' − ' + b + '</b>? Split into tens and ones.', a - b, [a - b + 1, a - b - 1, a - b + 10], 'Take away the tens, then the ones.', a + ' − ' + b + ' = ' + (a - b) + '.'); return mc('Partitioning', 'What is <b>' + a + ' + ' + b + '</b>? Split into tens and ones.', a + b, [a + b + 1, a + b - 1, a + b + 10], 'Add the tens, then the ones.', a + ' + ' + b + ' = ' + (a + b) + '.'); } });

  M(302, { id: 'learnm1', ch: 'frog', bg: 'pond',
    li: ['Number bonds to 20', 'Which pairs of numbers make 20?', 'Number bonds to 20 are pairs that add to 20. Knowing them helps to add and take away quickly.', C(['10 + 10', '12 + 8', '15 + 5', '17 + 3']),
      [['bond', 'a pair that makes a total', '🔗'], ['twenty', '2 tens', '2️⃣'], ['partner', 'the number that goes with another', '🤝'], ['complement', 'the number that completes the total', '✅']],
      [['If you know 7 + 3 = 10, then 17 + 3 = 20.', C(['7 + 3 = 10', '17 + 3 = 20'])], ['The partner of 12 is 8 because 12 + 8 = 20.', C(['12 + 8 = 20'])], ['Learn them: 1+19, 2+18, 3+17, 4+16, 5+15, 6+14, 7+13, 8+12, 9+11, 10+10.', C(['1+19', '5+15', '10+10'])]],
      [['What goes with 13 to make 20?', ['Count on from 13 to 20.', '7 jumps.'], '7', nl(12, 20, [13, 20])], ['What goes with 16 to make 20?', ['16 + 4 = 20.'], '4', nl(15, 20, [16, 20])], ['What is 20 − 8?', ['Think 8 + 12 = 20.'], '12', C(['8 + 12 = 20'])]],
      ['Check by adding. If 14 + 5 = 19, it is not a bond to 20.', C(['14 + 6 = 20 ✓'])],
      ['What goes with 11 to make 20?', '', ['8', '9', '10'], '9', '11 + 9 = 20.', 'Count on from 11 to 20.'],
      ['Number bonds to 20: pairs of numbers that make 20.', C(['10+10', '12+8', '15+5'])]],
    ex: [['What goes with 14 to make 20?', ['14 + 6 = 20.'], '6', nl(13, 20, [14, 20])], ['What is 20 − 15?', ['15 + 5 = 20.'], '5', C(['15 + 5 = 20'])]],
    way: ['Use two ten-frames: one full frame is 10, the second shows the partner.', FL.frame(10, 0, 10)],
    mist: ['Make sure the pair adds to 20, not 10. 12 + 8 = 20.', C(['12 + 8 ✓', '12 + 3 ✗'])],
    real: ['You need 20 stickers. You have 13. How many more?', '7', ['6', '8', '33'], '13 + 7 = 20.', TH(13, 'star')],
    qs: [['What goes with 8 to make 20?', '12', ['11', '13', '28'], '8 + 12.', ''], ['What goes with 15 to make 20?', '5', ['4', '6', '35'], '15 + 5.', ''], ['What goes with 17 to make 20?', '3', ['2', '4', '37'], '17 + 3.', ''], ['What goes with 11 to make 20?', '9', ['8', '10', '31'], '11 + 9.', ''],
         ['What goes with 4 to make 20?', '16', ['15', '17', '24'], '4 + 16.', ''], ['What is 20 − 7?', '13', ['12', '14', '27'], '7 + 13.', ''], ['What is 20 − 12?', '8', ['7', '9', '32'], '12 + 8.', ''], ['What is 20 − 18?', '2', ['1', '3', '38'], '18 + 2.', '']],
    gen: function () { var a = r(1, 19), b = 20 - a; return r(0, 1) ? mc('Number bonds to 20', a + ' + <b>?</b> = 20', b, [b + 1, b - 1 || 2, a], 'Count on from ' + a + ' to 20.', a + ' + ' + b + ' = 20.') : mc('Number bonds to 20', 'What is <b>20 − ' + a + '</b>?', b, [b + 1, b - 1 || 2, 20 + a], 'Think what goes with ' + a + ' to make 20.', '20 − ' + a + ' = ' + b + '.'); } });

  M(302, { id: 'learnm2', ch: 'frog', bg: 'pond',
    li: ['Number bonds to 100', 'Which tens make 100?', 'Number bonds to 100 use tens: 30 + 70 = 100. Use the bonds to 10 and make them ten times bigger.', C(['10 + 90', '30 + 70', '50 + 50']),
      [['hundred', '10 tens', '💯'], ['tens bond', 'a pair of tens that make 100', '🔗'], ['partner', 'the number that completes 100', '🤝'], ['ten times', 'tens instead of ones', '✖️']],
      [['3 + 7 = 10, so 30 + 70 = 100.', C(['3 + 7 = 10', '30 + 70 = 100'])], ['The partner of 40 is 60 because 40 + 60 = 100.', C(['40 + 60 = 100'])], ['Learn them: 10+90, 20+80, 30+70, 40+60, 50+50.', C(['10+90', '20+80', '30+70', '40+60', '50+50'])]],
      [['What goes with 20 to make 100?', ['2 + 8 = 10, so 20 + 80 = 100.'], '80', C(['20 + 80 = 100'])], ['What goes with 60 to make 100?', ['6 + 4 = 10, so 60 + 40.'], '40', C(['60 + 40 = 100'])], ['What is 100 − 70?', ['70 + 30 = 100.'], '30', C(['70 + 30'])]],
      ['The partners are tens. 100 − 70 is 30, not 3.', C(['100 − 70 = 30'])],
      ['What goes with 90 to make 100?', '', ['1', '10', '9'], '10', '90 + 10 = 100.', 'Think of 9 + 1 = 10.'],
      ['Bonds to 100: use the bonds to 10 and think in tens.', C(['30 + 70', '40 + 60'])]],
    ex: [['What is 100 − 40?', ['4 + 6 = 10, so 40 + 60 = 100.'], '60', C(['40 + 60'])], ['What goes with 80 to make 100?', ['8 + 2 = 10.'], '20', C(['80 + 20'])]],
    way: ['Put ten rods of ten in a frame: take some away and count what is left.', C(['100', '− 30', '= 70'])],
    mist: ['Do not forget the zero. 100 − 30 = 70, not 7.', C(['70 ✓', '7 ✗'])],
    real: ['A pound is 100p. You spend 60p. How much is left?', '40p', ['4p', '60p', '160p'], '60 + 40 = 100.', FL.coins([20, 20])],
    qs: [['What goes with 30 to make 100?', '70', ['60', '7', '130'], '3 + 7 = 10.', ''], ['What goes with 50 to make 100?', '50', ['40', '5', '150'], '5 + 5 = 10.', ''], ['What goes with 10 to make 100?', '90', ['80', '9', '110'], '1 + 9 = 10.', ''], ['What is 100 − 20?', '80', ['8', '70', '120'], '2 + 8 = 10.', ''],
         ['What is 100 − 60?', '40', ['4', '50', '160'], '6 + 4 = 10.', ''], ['What is 100 − 90?', '10', ['1', '9', '190'], '9 + 1 = 10.', ''], ['What is 100 − 45?', '55', ['65', '54', '145'], '45 + 55 = 100.', ''], ['What goes with 25 to make 100?', '75', ['85', '65', '125'], '25 + 75 = 100.', '']],
    gen: function (lv) { var a = r(1, 9) * 10, k = lv ? r(0, 1) : 0, x = k ? a + r(1, 9) : a, y = 100 - x; return mc('Number bonds to 100', x + ' + <b>?</b> = 100', y, [y + 10, y - 10 < 1 ? y + 20 : y - 10, y + 1], k ? 'Make the tens, then the ones.' : 'Use the bonds to 10.', x + ' + ' + y + ' = 100.'); } });

  M(302, { id: 'learnm3', ch: 'frog', bg: 'pond',
    li: ['Finding the difference', 'How do I find the difference between two numbers?', 'The difference is how far apart two numbers are. Count on from the smaller to the bigger, or take away.', nl(12, 20, [14, 19], [[14, 19]]),
      [['difference', 'how far apart', '↔️'], ['smaller', 'the lesser number', '⬇️'], ['bigger', 'the greater number', '⬆️'], ['count on', 'jump up from the small number', '🦘']],
      [['The difference between 14 and 19. Jump from 14 to 19.', nl(12, 20, [14, 19], [[14, 19]])], ['14, 15, 16, 17, 18, 19. That is 5 jumps. The difference is 5.', C(['14', '→', '19', '= 5'])], ['Or take away: 19 − 14 = 5.', B('19 − 14 = 5')]],
      [['What is the difference between 8 and 15?', ['Count on from 8 to 15.', '7 jumps.'], '7', nl(7, 16, [8, 15], [[8, 15]])], ['Max has 32 stickers. Zoe has 27. How many more has Max?', ['Count on from 27 to 32.', '5 jumps.'], '5', nl(26, 33, [27, 32], [[27, 32]])], ['What is the difference between 45 and 70?', ['45 to 50 is 5.', '50 to 70 is 20.', '5 + 20 = 25.'], '25', nl(45, 70, [45, 50, 70], [[45, 50], [50, 70]])]],
      ['The difference is always positive. 19 − 14 and 14 − 19 both mean “5 apart”.', C(['5 apart'])],
      ['What is the difference between 23 and 31?', nl(22, 32, [23, 31]), ['7', '8', '9'], '8', '23 + 8 = 31.', 'Count on from 23.'],
      ['Difference: count on from the smaller number to the bigger one.', C(['small → big', 'count the jumps'])]],
    ex: [['A rope is 48 cm. Another is 63 cm. What is the difference?', ['48 to 50 is 2.', '50 to 63 is 13.', '2 + 13 = 15.'], '15 cm', nl(47, 64, [48, 50, 63])], ['A pencil costs 65p and a pen costs 90p. How much more is the pen?', ['65 to 70 is 5.', '70 to 90 is 20.', '25.'], '25p', C(['65p', '90p'])]],
    way: ['Draw two bars. The gap between the ends is the difference.', C(['bar A', 'bar B', 'gap = difference'])],
    mist: ['Do not add the numbers. “How many more” means find the gap.', C(['23 and 31: 8 apart ✓', '23 + 31 ✗'])],
    real: ['Ruby scored 56 and Ben scored 71. How many points more did Ben score?', '15', ['127', '14', '25'], '56 to 60 is 4, 60 to 71 is 11. 4 + 11.', nl(55, 72, [56, 71])],
    qs: [['What is the difference between 12 and 20?', '8', ['7', '32', '9'], '12 to 20.', ''], ['What is the difference between 30 and 55?', '25', ['35', '15', '85'], '30 to 55.', ''], ['What is the difference between 47 and 52?', '5', ['4', '99', '6'], '47 to 52.', ''], ['Dev has 18, Eve has 31. How many more has Eve?', '13', ['14', '49', '12'], '18 to 31.', ''],
         ['What is the difference between 64 and 90?', '26', ['36', '154', '16'], '64 to 90.', ''], ['What is the difference between 100 and 63?', '37', ['47', '163', '27'], '63 to 100.', ''], ['What is the difference between 25 and 25?', '0', ['25', '50', '1'], 'The same.', ''], ['The bus costs 75p, the train costs 90p. How much more is the train?', '15p', ['25p', '165p', '10p'], '75 to 90.', '']],
    gen: function (lv) { var a = r(5, lv ? 70 : 40), d = r(2, lv ? 40 : 15); return mc('Finding the difference', 'What is the <b>difference</b> between <b>' + a + '</b> and <b>' + (a + d) + '</b>?', d, [d + 1, d - 1, a + a + d], 'Count on from ' + a + ' to ' + (a + d) + '.', (a + d) + ' − ' + a + ' = ' + d + '.'); } });

  M(302, { id: 'learnm4', ch: 'frog', bg: 'pond',
    li: ['Checking my answer', 'How can I check my addition and subtraction?', 'Adding and taking away are opposites. We can use one to check the other.', C(['35 + 24 = 59', '59 − 24 = 35']),
      [['inverse', 'the opposite operation', '🔄'], ['check', 'make sure it is right', '✅'], ['opposite', 'does the reverse', '↔️'], ['estimate', 'a quick sensible guess', '🎯']],
      [['35 + 24 = 59. Check: 59 − 24 should be 35.', C(['35 + 24 = 59', '59 − 24 = 35 ✓'])], ['72 − 28 = 44. Check: 44 + 28 should be 72.', C(['72 − 28 = 44', '44 + 28 = 72 ✓'])], ['Estimate first: 38 + 41 is about 40 + 40 = 80.', C(['38 → 40', '41 → 40', '≈ 80'])]],
      [['Ben says 46 + 17 = 63. Check with subtraction.', ['63 − 17 = 46.', 'It is correct.'], 'Yes, 63 is right.', C(['46 + 17 = 63', '63 − 17 = 46'])], ['Mia says 81 − 35 = 54. Check with adding.', ['54 + 35 = 89, not 81.', 'So it is wrong.'], 'No. 81 − 35 = 46.', C(['54 + 35 = 89 ✗'])], ['Estimate 59 + 22.', ['60 + 20 = 80.'], 'About 80.', C(['59 ≈ 60', '22 ≈ 20'])]],
      ['Check the whole answer, not only the ones digit.', C(['check everything'])],
      ['Which check proves 27 + 15 = 42?', C(['27 + 15 = 42']), ['42 − 15 = 27', '42 + 15 = 57', '27 − 15 = 12'], '42 − 15 = 27', 'Take away one number from the total.', 'Use the opposite.'],
      ['Check with the opposite: add ↔ take away.', C(['+ ↔ −'])]],
    ex: [['Check 53 + 28 = 81 using subtraction.', ['81 − 28 = 53.'], 'Correct.', C(['81 − 28 = 53 ✓'])], ['Check 70 − 24 = 46 using adding.', ['46 + 24 = 70.'], 'Correct.', C(['46 + 24 = 70 ✓'])]],
    way: ['Draw a number triangle: the total on top, the two parts below. It shows all four sums.', C(['total 59', 'parts 35 and 24'])],
    mist: ['If the check does not give the first number, you made a mistake. Try again.', C(['check ✗ → try again'])],
    real: ['The shop till says 38p + 27p = 55p. Is that right?', 'No', ['Yes'], '38 + 27 = 65, not 55.', C(['38p', '27p'])],
    qs: [['Which check proves 25 + 17 = 42?', '42 − 17 = 25', ['42 + 17 = 59', '25 − 17 = 8'], 'Take away.', ''], ['Which check proves 60 − 24 = 36?', '36 + 24 = 60', ['36 − 24 = 12', '60 + 24 = 84'], 'Add back.', ''], ['Is 45 + 38 = 73 correct?', 'No', ['Yes'], '45 + 38 = 83.', ''], ['Is 90 − 47 = 43 correct?', 'Yes', ['No'], '43 + 47 = 90.', ''],
         ['Estimate 49 + 31', 'about 80', ['about 70', 'about 90', 'about 100'], '50 + 30.', ''], ['Estimate 62 − 19', 'about 40', ['about 50', 'about 30', 'about 80'], '60 − 20.', ''], ['If 18 + 26 = 44, then 44 − 26 = ?', '18', ['26', '70', '8'], 'Take away.', ''], ['If 100 − 36 = 64, then 64 + 36 = ?', '100', ['28', '64', '36'], 'Add back.', '']],
    gen: function (lv) { var a = r(11, lv ? 70 : 50), b = r(11, lv ? 29 : 39), wrong = r(0, 1), ans = a + b + (wrong ? pick([1, -1, 10, -10]) : 0); return mc('Checking', 'Ben says <b>' + a + ' + ' + b + ' = ' + ans + '</b>. Is he right?', ans === a + b ? 'Yes' : 'No', [ans === a + b ? 'No' : 'Yes'], 'Check with the opposite: ' + ans + ' − ' + b + '.', a + ' + ' + b + ' = ' + (a + b) + '.'); } });
})();
