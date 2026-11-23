/* fl_m2.js: P2 lessons expanded (see fl_mega.js) and the P2 subtopics that were missing */
(function () {
  'use strict';
  var FL = window.FL, BT = window.BT, S = window.Studio; if (!FL || !FL.MEGA) return;
  var B = FL.big, C = FL.cards, SAY = FL.says, TH = FL.things, M = FL.MEGA, r = FL.r, pick = FL.pick;
  var T = FL.track;
  function sw(a, b) { return a + ' ' + b; }

  /* ---------- 201 Counting and numbers ---------- */
  M(201, { id: 'learn1', title: 'Number patterns', ch: 'rocket', bg: 'space',
    way: ['A pattern can also be a rule. 2, 4, 6, 8 follows the rule “add 2 each time”.', C(['2', '4', '6', '8', '+2 each time'])],
    ex: [['What comes next? 10, 20, 30, …', ['Look at the gaps: 10 to 20 is 10 more.', '20 to 30 is 10 more.', 'The rule is add 10.', '30 and 10 more is 40.'], 'The next number is 40.', C(['10', '20', '30', '?'])],
         ['What comes next? 9, 8, 7, 6, …', ['Each number is 1 less than the one before.', 'The rule is take away 1.', '6 take away 1 is 5.'], 'The next number is 5.', C(['9', '8', '7', '6', '?'])]],
    mist: ['Check every jump, not just the first one. 2, 4, 7 is not a pattern because the jumps are different.', C(['2 → 4: +2', '4 → 7: +3 ✗'])],
    real: ['Mia saves 5p each day: 5p, 10p, 15p, … How much on the 4th day?', '20p', ['18p', '25p', '15p'], 'Add 5 each time: 5, 10, 15, 20.', FL.coins([10, 10])],
    qs: [['What comes next? 2, 4, 6, 8, …', '10', ['9', '12', '8'], 'The rule is add 2, so 8 and 2 more is 10.', C(['2', '4', '6', '8', '?'])],
         ['What comes next? 5, 10, 15, 20, …', '25', ['30', '24', '21'], 'The rule is add 5.', C(['5', '10', '15', '20', '?'])],
         ['What comes next? 10, 8, 6, 4, …', '2', ['3', '0', '6'], 'The numbers go down by 2.', C(['10', '8', '6', '4', '?'])],
         ['What is the rule? 3, 6, 9, 12', 'add 3', ['add 2', 'add 4', 'take away 3'], 'Each number is 3 more than the one before.', C(['3', '6', '9', '12'])],
         ['What comes next? 1, 3, 5, 7, …', '9', ['8', '10', '11'], 'Add 2 each time: 7 and 2 more is 9.', C(['1', '3', '5', '7', '?'])],
         ['What comes next? 20, 30, 40, 50, …', '60', ['55', '70', '51'], 'Add 10 each time.', C(['20', '30', '40', '50', '?'])],
         ['What number is missing? 4, 8, ?, 16', '12', ['10', '13', '14'], 'The rule is add 4. 8 and 4 more is 12.', C(['4', '8', '?', '16'])],
         ['What comes next? 12, 11, 10, 9, …', '8', ['7', '10', '13'], 'Take away 1 each time.', C(['12', '11', '10', '9', '?'])]],
    gen: function (lv) { var st = pick(lv ? [2, 5, 10, 3] : [1, 2, 5, 10]), s = r(0, 4) * (st > 3 ? 1 : 1), a = [0, 1, 2, 3].map(function (i) { return s + st * i; }), n = s + st * 4; return FL.MC('Number patterns', 'What comes next? <b>' + a.join(', ') + ', …</b>', n, [n + 1, n - 1, n + st], ['Look at the gap between the numbers.'], 'Each time the number goes up by ' + st + ', so the next is ' + n + '.'); } });

  M(201, { id: 'learn2', title: 'Tens and ones', ch: 'rocket', bg: 'space',
    way: ['Say it in words: 3 tens and 4 ones is thirty-four. The tens digit is 3 and the ones digit is 4.', FL.tensOnes(3, 4)],
    ex: [['How many tens and ones are in 45?', ['The first digit is the tens: 4 tens.', 'The second digit is the ones: 5 ones.'], '45 is 4 tens and 5 ones.', FL.tensOnes(4, 5)],
         ['What number is 2 tens and 7 ones?', ['2 tens is 20.', '7 ones is 7.', '20 and 7 make 27.'], '2 tens and 7 ones make 27.', FL.tensOnes(2, 7)]],
    mist: ['Do not mix up the digits. 52 is 5 tens and 2 ones, not 2 tens and 5 ones.', C(['52 = 5 tens, 2 ones', '25 = 2 tens, 5 ones'])],
    real: ['Dad packs eggs in boxes of 10. He has 3 full boxes and 6 loose eggs. How many eggs?', '36', ['63', '9', '306'], '3 tens and 6 ones make 36.', FL.tensOnes(3, 6)],
    qs: [['How many tens are in 38?', '3', ['8', '38', '5'], 'The tens digit of 38 is 3.', FL.tensOnes(3, 8)],
         ['How many ones are in 38?', '8', ['3', '38', '5'], 'The ones digit of 38 is 8.', FL.tensOnes(3, 8)],
         ['What number is 5 tens and 0 ones?', '50', ['5', '15', '500'], '5 tens is 50.', FL.tensOnes(5, 0)],
         ['What number is 1 ten and 9 ones?', '19', ['91', '10', '9'], '10 and 9 make 19.', FL.tensOnes(1, 9)],
         ['Which number has 6 tens and 2 ones?', '62', ['26', '60', '8'], '6 tens is 60 and 2 ones is 2: 62.', ''],
         ['What is 70 + 4?', '74', ['47', '704', '11'], '7 tens and 4 ones make 74.', ''],
         ['Which number has 4 ones and 9 tens?', '94', ['49', '13', '90'], '9 tens is 90, and 4 more is 94.', ''],
         ['How many tens make 80?', '8', ['80', '10', '18'], '8 tens make 80.', FL.tensOnes(8, 0)]],
    gen: function (lv) { var t = r(1, lv ? 9 : 5), o = r(0, 9), n = t * 10 + o, k = r(0, 2); return k === 0 ? FL.MC('Tens and ones', 'How many tens are in <b>' + n + '</b>?', t, [o, t + 1, n], ['The tens digit is on the left.'], n + ' has ' + t + ' tens.') : k === 1 ? FL.MC('Tens and ones', 'How many ones are in <b>' + n + '</b>?', o, [t, o + 1, n], ['The ones digit is on the right.'], n + ' has ' + o + ' ones.') : FL.MC('Tens and ones', 'What number is <b>' + t + ' tens and ' + o + ' ones</b>?', n, [o * 10 + t, t + o, n + 10], ['Tens first, then ones.'], t + ' tens is ' + t * 10 + ' and ' + o + ' ones make ' + n + '.', FL.tensOnes(t, o)); } });

  M(201, { id: 'learn3', title: 'Number lines', ch: 'rocket', bg: 'space',
    way: ['A number line is like a ruler for numbers. Numbers on the right are bigger. Numbers on the left are smaller.', T(0, 10, [3, 8])],
    ex: [['Which is bigger, 4 or 9?', ['Find 4 and 9 on the number line.', '9 is further to the right.'], '9 is bigger than 4.', T(0, 10, [4, 9])],
         ['Which number is between 5 and 7?', ['Look at the number line.', 'After 5 comes 6, then 7.'], 'The number between 5 and 7 is 6.', T(0, 10, [5, 6, 7])]],
    mist: ['Count the jumps, not the dots. From 2 to 5 is 3 jumps.', T(2, 5, [2, 5], [[2, 5]])],
    real: ['Sam is on step 3 of the stairs. He climbs 4 more steps. Which step is he on?', '7', ['6', '4', '8'], 'Start at 3 and jump 4: 4, 5, 6, 7.', T(0, 10, [3, 7], [[3, 7]])],
    qs: [['Which number is bigger, 6 or 2?', '6', ['2', 'the same'], '6 is to the right of 2.', T(0, 10, [2, 6])],
         ['What number is just after 8?', '9', ['7', '10', '8'], 'After 8 comes 9.', T(5, 12, [8])],
         ['What number is just before 5?', '4', ['6', '3', '5'], 'Before 5 comes 4.', T(0, 10, [5])],
         ['Which number is smallest: 7, 3 or 9?', '3', ['7', '9', '10'], '3 is furthest to the left.', T(0, 10, [3, 7, 9])],
         ['Start at 2 and jump 5 to the right. Where do you land?', '7', ['5', '8', '6'], '2 and 5 more is 7.', T(0, 10, [2, 7], [[2, 7]])],
         ['Start at 9 and jump 4 to the left. Where do you land?', '5', ['13', '4', '6'], '9 take away 4 is 5.', T(0, 10, [9, 5])],
         ['Which number comes between 11 and 13?', '12', ['10', '14', '21'], 'Count: 11, 12, 13.', T(10, 15, [11, 12, 13])],
         ['Put these in order, smallest first: 5, 2, 8', '2, 5, 8', ['8, 5, 2', '5, 2, 8', '2, 8, 5'], 'Smallest is furthest left: 2, then 5, then 8.', T(0, 10, [2, 5, 8])]],
    gen: function (lv) { var a = r(0, lv ? 18 : 9), b = r(0, lv ? 18 : 9); if (a === b) b++; var k = r(0, 2); return k === 0 ? FL.MC('Number lines', 'Which number is <b>bigger</b>: ' + a + ' or ' + b + '?', Math.max(a, b), [Math.min(a, b)], ['The bigger number is further right on the number line.'], Math.max(a, b) + ' is bigger.') : k === 1 ? FL.MC('Number lines', 'What comes just <b>after</b> ' + a + '?', a + 1, [a - 1, a + 2], ['Count on one.'], 'After ' + a + ' comes ' + (a + 1) + '.') : FL.MC('Number lines', 'Start at ' + a + ' and jump <b>' + (b % 4 + 1) + '</b> to the right. Where do you land?', a + b % 4 + 1, [a + b % 4, a + b % 4 + 2, a - 1], ['Count on along the number line.'], a + ' and ' + (b % 4 + 1) + ' more is ' + (a + b % 4 + 1) + '.'); } });

  M(201, { id: 'learn4', title: 'One more, one less', ch: 'rocket', bg: 'space',
    way: ['One more is the next number when you count up. One less is the number just before.', C(['5', '→ one more →', '6'])],
    ex: [['What is one more than 9?', ['Count on from 9.', 'After 9 comes 10.'], 'One more than 9 is 10.', T(7, 12, [9, 10])],
         ['What is one less than 20?', ['Count back from 20.', 'Before 20 comes 19.'], 'One less than 20 is 19.', T(17, 22, [20, 19])]],
    mist: ['One less is not the same as zero. One less than 5 is 4.', C(['5 − 1 = 4'])],
    real: ['There are 8 ducks on the pond. One more duck swims over. How many ducks now?', '9', ['7', '10', '8'], '8 and one more is 9.', TH(8, 'duck')],
    qs: [['What is one more than 7?', '8', ['6', '9', '7'], 'After 7 comes 8.', ''], ['What is one less than 7?', '6', ['8', '5', '7'], 'Before 7 comes 6.', ''],
         ['What is one more than 14?', '15', ['13', '16', '24'], 'After 14 comes 15.', ''], ['What is one less than 30?', '29', ['31', '20', '28'], 'Count back one from 30: 29.', ''],
         ['There are 5 balloons. One pops. How many are left?', '4', ['6', '5', '3'], 'One less than 5 is 4.', TH(5, 'balloon')],
         ['What is one more than 19?', '20', ['18', '21', '10'], 'After 19 comes 20.', ''], ['What is one less than 10?', '9', ['11', '1', '8'], 'Before 10 comes 9.', ''],
         ['Which number is one more than 49?', '50', ['48', '59', '40'], 'After 49 comes 50.', '']],
    gen: function (lv) { var n = r(2, lv ? 98 : 18), more = r(0, 1); return FL.MC('One more, one less', 'What is one <b>' + (more ? 'more' : 'less') + '</b> than <b>' + n + '</b>?', more ? n + 1 : n - 1, [more ? n - 1 : n + 1, n, more ? n + 10 : n - 10], ['Count ' + (more ? 'on' : 'back') + ' one.'], (more ? n + 1 : n - 1) + ' is one ' + (more ? 'more' : 'less') + ' than ' + n + '.'); } });

  M(201, { id: 'learn5', title: 'What are odd and even numbers?', ch: 'rocket', bg: 'space',
    way: ['Counting in twos lands on even numbers: 2, 4, 6, 8. The numbers you skip are odd: 1, 3, 5, 7.', C(['2', '4', '6', '8', '10'])],
    ex: [['Is 14 odd or even?', ['Look at the last digit, 4.', '4 is an even digit.'], '14 is even.', B('14')], ['Is 17 odd or even?', ['Look at the last digit, 7.', '7 is an odd digit.'], '17 is odd.', B('17')]],
    mist: ['Look at the last digit only. 21 is odd, even though 2 is an even digit.', C(['21 → last digit 1 → odd'])],
    real: ['Mum has 9 cookies and shares them in pairs. Will every cookie have a partner?', 'No, one is left', ['Yes', 'No, two are left'], '9 is odd, so one is left over.', TH(9, 'sweet')],
    qs: [['Is 6 odd or even?', 'even', ['odd'], '6 makes 3 pairs.', ''], ['Is 11 odd or even?', 'odd', ['even'], 'Last digit 1: odd.', ''], ['Is 20 odd or even?', 'even', ['odd'], 'Last digit 0: even.', ''],
         ['Which is an odd number?', '13', ['12', '14', '16'], '13 ends in 3, an odd digit.', ''], ['Which is an even number?', '18', ['17', '19', '15'], '18 ends in 8.', ''], ['Is 3 + 3 odd or even?', 'even', ['odd'], '3 + 3 = 6, even.', ''],
         ['Which number is odd: 4, 8, 9, 10?', '9', ['4', '8', '10'], '9 has one left over.', ''], ['What odd number comes after 7?', '9', ['8', '10', '11'], 'Odd numbers: 7, 9, 11.', '']],
    gen: function (lv) { var n = r(1, lv ? 50 : 20); return FL.MC('Odd and even', 'Is <b>' + n + '</b> odd or even?', n % 2 ? 'odd' : 'even', [n % 2 ? 'even' : 'odd'], ['Look at the last digit.'], n + ' is ' + (n % 2 ? 'odd' : 'even') + '.'); } });
})();
