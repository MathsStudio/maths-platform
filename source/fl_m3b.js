/* fl_m3b.js: P3 Multiplication (303), Division (304) and Fractions (305) */
(function () {
  'use strict';
  var FL = window.FL, S = window.Studio; if (!FL || !FL.MEGA) return;
  var B = FL.big, C = FL.cards, TH = FL.things, M = FL.MEGA, r = FL.r, pick = FL.pick, T = FL.track, G = FL.groups;
  function mc(tag, q, a, w, h, e, p) { return FL.MC(tag, q, a, w, [h], e, p || ''); }
  function arr(rw, cl, kind) { return TH(rw * cl, kind || 'apple', cl); }
  function pie(p, s) { return '<div style="display:inline-block;text-align:center;font-weight:800;margin:0 8px">' + FL.pie(p, s) + '<div>' + s + '/' + p + '</div></div>'; }
  function pies(l) { return '<div style="display:flex;justify-content:center;flex-wrap:wrap">' + l.map(function (x) { return pie(x[0], x[1]); }).join('') + '</div>'; }
  function sharing(n, g, kind) { var o = []; for (var i = 0; i < g; i++) o.push('<div style="border:3px dashed #2b2340;border-radius:12px;padding:4px;background:#fff">' + TH(n / g, kind || 'apple', 5) + '</div>'); return '<div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap">' + o.join('') + '</div>'; }

  /* ---------- 303 Multiplication ---------- */
  M(303, { id: 'learn1', ch: 'bear', bg: 'kitchen',
    way: ['Repeated adding is multiplying. 4 + 4 + 4 is 3 groups of 4, written 3 × 4.', C(['4 + 4 + 4', '= 3 × 4', '= 12'])],
    ex: [['What is 5 + 5 + 5 + 5 as a multiplication?', ['4 groups of 5.', '4 × 5 = 20.'], '4 × 5 = 20', sharing(20, 4)], ['Write 2 + 2 + 2 as a multiplication.', ['3 groups of 2.'], '3 × 2 = 6', sharing(6, 3)]],
    mist: ['× means “groups of”. 3 × 4 is 3 groups of 4, not 3 + 4.', C(['3 × 4 = 12', '3 + 4 = 7 ✗'])],
    real: ['4 plates have 3 buns each. How many buns?', '12', ['7', '10', '9'], '3 + 3 + 3 + 3.', sharing(12, 4, 'apple')],
    qs: [['What is 2 + 2 + 2 + 2?', '8', ['6', '4', '10'], '4 × 2.', ''], ['3 groups of 5 is…', '15', ['8', '10', '53'], '5 + 5 + 5.', ''], ['Write 5 + 5 as a multiplication.', '2 × 5', ['5 × 5', '2 + 5', '5 × 2 × 2'], '2 groups of 5.', ''], ['What is 10 + 10 + 10?', '30', ['20', '3', '100'], '3 × 10.', ''],
         ['4 × 2 means…', '4 groups of 2', ['4 + 2', '2 groups of 4 and 2'], 'Groups of.', ''], ['2 groups of 10 is…', '20', ['12', '10', '210'], '10 + 10.', ''], ['What is 5 + 5 + 5?', '15', ['10', '20', '555'], '3 × 5.', ''], ['6 × 2 is the same as…', '2 + 2 + 2 + 2 + 2 + 2', ['6 + 2', '2 + 6'], 'Six groups of 2.', '']],
    gen: function (lv) { var g = r(2, lv ? 6 : 4), n = pick(lv ? [2, 3, 4, 5, 10] : [2, 5, 10]); return mc('Adding to multiply', 'What is <b>' + new Array(g + 1).join(n + ' + ').slice(0, -3) + '</b>?', g * n, [g * n + n, g * n - n, g + n], 'Count the groups, then multiply.', g + ' × ' + n + ' = ' + g * n + '.'); } });

  M(303, { id: 'learn2', ch: 'bear', bg: 'kitchen',
    way: ['An array has rows going across and columns going down. 3 rows of 4 is 3 × 4 = 12.', arr(3, 4)],
    ex: [['What multiplication does this array show? 2 rows of 5.', ['2 rows, 5 in each row.', '2 × 5 = 10.'], '2 × 5 = 10', arr(2, 5)], ['How many in 4 rows of 3?', ['3 + 3 + 3 + 3.'], '12', arr(4, 3)]],
    mist: ['Rows go across, columns go down. 3 rows of 4 is not 4 rows of 3 (but both make 12).', arr(3, 4)],
    real: ['Chairs are in 5 rows with 4 in each row. How many chairs?', '20', ['9', '16', '25'], '5 × 4.', arr(5, 4, 'star')],
    qs: [['2 rows of 6. How many?', '12', ['8', '26', '10'], '2 × 6.', arr(2, 6)], ['3 rows of 5. How many?', '15', ['8', '35', '10'], '3 × 5.', arr(3, 5)], ['4 rows of 4. How many?', '16', ['8', '12', '20'], '4 × 4.', arr(4, 4)], ['5 rows of 2. How many?', '10', ['7', '25', '12'], '5 × 2.', arr(5, 2)],
         ['An array has 3 rows of 3. How many?', '9', ['6', '12', '33'], '3 × 3.', arr(3, 3)], ['Which multiplication is shown? 2 rows of 4', '2 × 4', ['4 × 4', '2 + 4', '2 × 2'], '2 groups of 4.', arr(2, 4)], ['Add the rows: 5 + 5 + 5 is…', '15', ['10', '55', '8'], '3 rows of 5.', ''], ['How many columns? 3 rows of 7', '7', ['3', '21', '10'], '7 in each row.', arr(3, 7)]],
    gen: function (lv) { var a = r(2, lv ? 6 : 4), b = r(2, lv ? 8 : 6); return mc('Arrays', 'An array has <b>' + a + ' rows</b> of <b>' + b + '</b>. How many are there?', a * b, [a + b, a * b + a, a * b - b], 'Multiply the rows by the number in each row.', a + ' × ' + b + ' = ' + a * b + '.', arr(a, b)); } });

  M(303, { id: 'learn3', ch: 'bear', bg: 'kitchen',
    way: ['Turn the array on its side. 3 rows of 5 becomes 5 rows of 3. Same number of dots.', arr(3, 5)],
    ex: [['If 4 × 6 = 24, what is 6 × 4?', ['Turn it round.'], '24', arr(4, 6)], ['If 7 × 5 = 35, what is 5 × 7?', ['Turn it round.'], '35', arr(5, 7)]],
    mist: ['Turnaround works for multiplication too, but not for division. 12 ÷ 3 is not 3 ÷ 12.', C(['3 × 4 = 4 × 3 ✓', '12 ÷ 3 ≠ 3 ÷ 12'])],
    real: ['2 rows of 10 stamps. Turn it round. How many rows of 2?', '10', ['2', '20', '12'], 'Same stamps.', arr(2, 10, 'star')],
    qs: [['3 × 2 = 6. What is 2 × 3?', '6', ['5', '9', '32'], 'Turn it round.', ''], ['5 × 4 = 20. What is 4 × 5?', '20', ['9', '54', '25'], 'Turn it round.', ''], ['Which equals 6 × 5?', '5 × 6', ['6 + 5', '5 + 6', '6 × 6'], 'Swap.', ''], ['10 × 3 = 30. What is 3 × 10?', '30', ['13', '103', '3'], 'Turn round.', ''],
         ['2 × 8 = 16. 8 × 2 = ?', '16', ['10', '82', '6'], 'Turn round.', ''], ['4 × 3 = 12. 3 × 4 = ?', '12', ['7', '34', '43'], 'Turn round.', ''], ['Fill the gap: 5 × 9 = 9 × ?', '5', ['4', '45', '14'], 'Swap.', ''], ['Does 6 ÷ 2 equal 2 ÷ 6?', 'No', ['Yes'], 'Not for division.', '']],
    gen: function (lv) { var a = r(2, lv ? 10 : 6), b = r(2, lv ? 10 : 6); return mc('Turnaround facts', 'If <b>' + a + ' × ' + b + ' = ' + a * b + '</b>, what is <b>' + b + ' × ' + a + '</b>?', a * b, [a * b + a, a * b - b, a + b], 'Turn it round: the answer is the same.', 'Turnaround: ' + b + ' × ' + a + ' = ' + a * b + '.'); } });

  M(303, { id: 'learn4', ch: 'bear', bg: 'kitchen',
    way: ['2s are even numbers. 5s end in 5 or 0. 10s end in 0. Learn the patterns to recall the tables.', C(['2: 2 4 6 8 10', '5: 5 10 15 20', '10: 10 20 30 40'])],
    ex: [['What is 6 × 5?', ['Count in 5s six times: 5, 10, 15, 20, 25, 30.'], '30', C(['5', '10', '15', '20', '25', '30'])], ['What is 7 × 2?', ['Double 7.', '7 + 7 = 14.'], '14', C(['7 + 7', '14'])]],
    mist: ['The 5 times table always ends in 5 or 0. If you get 23, check again.', C(['5, 10, 15, 20, 25'])],
    real: ['A bag of 10 sweets. How many sweets in 6 bags?', '60', ['16', '50', '600'], '6 × 10.', C(['6 × 10 = 60'])],
    qs: [['5 × 3 = ?', '15', ['8', '53', '10'], '5, 10, 15.', ''], ['10 × 7 = ?', '70', ['17', '7', '700'], 'Add a zero.', ''], ['2 × 9 = ?', '18', ['11', '29', '16'], 'Double 9.', ''], ['5 × 8 = ?', '40', ['13', '45', '35'], '5s: 40.', ''],
         ['10 × 4 = ?', '40', ['14', '4', '400'], 'Four tens.', ''], ['2 × 6 = ?', '12', ['8', '26', '14'], 'Double 6.', ''], ['5 × 6 = ?', '30', ['11', '35', '25'], '5s: 30.', ''], ['10 × 10 = ?', '100', ['20', '1000', '10'], 'Ten tens.', '']],
    gen: function (lv) { var t = pick([2, 5, 10]), n = r(1, lv ? 12 : 10); return mc('2, 5 and 10 times tables', 'What is <b>' + n + ' × ' + t + '</b>?', n * t, [n * t + t, n * t - t < 0 ? n * t + 2 * t : n * t - t, n + t], 'Count in ' + t + 's.', n + ' × ' + t + ' = ' + n * t + '.'); } });

  M(303, { id: 'learnm1', ch: 'bear', bg: 'kitchen',
    li: ['Multiplication stories', 'How do I solve a multiplication story?', 'In a story, “each” and “groups of” tell you to multiply. Find the number of groups and the number in each.', sharing(12, 4),
      [['each', 'every one has the same', '👉'], ['groups of', 'equal sets', '🧺'], ['altogether', 'all together', '➕'], ['multiply', 'groups of', '✖️']],
      [['4 plates with 3 buns on each plate.', sharing(12, 4)], ['4 groups of 3 is 4 × 3.', B('4 × 3')], ['4 × 3 = 12. There are 12 buns altogether.', B('4 × 3 = 12')]],
      [['5 bags with 2 apples in each bag. How many?', ['5 groups of 2.', '5 × 2 = 10.'], '10 apples.', sharing(10, 5)], ['Each car has 4 wheels. 3 cars. How many wheels?', ['3 groups of 4.', '3 × 4 = 12.'], '12 wheels.', C(['3 cars', '4 wheels each'])], ['A pack has 10 pencils. 6 packs. How many?', ['6 × 10 = 60.'], '60 pencils.', C(['6 × 10'])]],
      ['Pick the right numbers. “3 bags of 5” is 3 × 5, not 3 + 5.', C(['3 × 5 = 15'])],
      ['Each box has 5 pens. There are 4 boxes. How many pens?', TH(20, 'star'), ['9', '20', '45'], '20', '4 × 5 = 20.', 'Groups of: multiply.'],
      ['In a story: groups × number in each group = total.', C(['groups × each = total'])]],
    ex: [['6 pots with 2 flowers in each. How many flowers?', ['6 × 2.'], '12 flowers.', sharing(12, 6, 'flower')], ['Each spider has 8 legs. 2 spiders. How many legs?', ['2 × 8 = 16.'], '16 legs.', C(['2 × 8'])]],
    way: ['Draw the story: a box for each group and dots inside.', sharing(8, 4)],
    mist: ['Check which is the group and which is the amount in each. 2 bags of 5 is 10; 5 bags of 2 is also 10.', sharing(10, 2)],
    real: ['A bus has 10 seats in each row. There are 4 rows. How many seats?', '40', ['14', '30', '104'], '4 × 10.', arr(4, 10, 'star')],
    qs: [['3 plates with 5 cakes each. How many cakes?', '15', ['8', '35', '10'], '3 × 5.', ''], ['4 bikes. Each has 2 wheels. How many wheels?', '8', ['6', '24', '4'], '4 × 2.', ''], ['Each box holds 10. 5 boxes. How many?', '50', ['15', '510', '5'], '5 × 10.', ''], ['2 hands each have 5 fingers. How many fingers?', '10', ['7', '25', '12'], '2 × 5.', ''],
         ['6 bags with 3 sweets in each. How many sweets?', '18', ['9', '63', '12'], '6 × 3.', ''], ['4 spiders with 8 legs each. How many legs?', '32', ['12', '48', '24'], '4 × 8.', ''], ['5 rows of 5 chairs. How many chairs?', '25', ['10', '55', '20'], '5 × 5.', ''], ['3 packs of 10 biscuits. How many?', '30', ['13', '310', '3'], '3 × 10.', '']],
    gen: function (lv) { var g = r(2, lv ? 9 : 6), n = pick(lv ? [2, 3, 4, 5, 10] : [2, 5, 10]), it = pick([['bags', 'sweets'], ['boxes', 'pens'], ['plates', 'buns'], ['pots', 'flowers']]); return mc('Multiplication stories', g + ' ' + it[0] + ' with <b>' + n + '</b> ' + it[1] + ' in each. How many ' + it[1] + ' altogether?', g * n, [g + n, g * n + n, g * n - n < 1 ? g * n + 2 : g * n - n], 'Groups times the number in each group.', g + ' × ' + n + ' = ' + g * n + '.', sharing(Math.min(g * n, 30), g)); } });

  M(303, { id: 'learnm2', ch: 'bear', bg: 'kitchen',
    li: ['The 3 and 4 times tables', 'How can I learn the 3 and 4 times tables?', 'The 3s go 3, 6, 9, 12 and the 4s go 4, 8, 12, 16. The 4 times table is double the 2 times table doubled.', C(['3: 3 6 9 12 15', '4: 4 8 12 16 20']),
      [['times table', 'a list of multiples', '📋'], ['multiple', 'a number in a times table', '🔢'], ['double', 'times 2', '2️⃣'], ['product', 'the answer to a times sum', '✖️']],
      [['3 × 1 = 3, 3 × 2 = 6, 3 × 3 = 9, 3 × 4 = 12, 3 × 5 = 15.', C(['3', '6', '9', '12', '15'])], ['4 × 1 = 4, 4 × 2 = 8, 4 × 3 = 12, 4 × 4 = 16, 4 × 5 = 20.', C(['4', '8', '12', '16', '20'])], ['To get the 4s, double the 2s. 2 × 6 = 12, so 4 × 6 = 24.', C(['2 × 6 = 12', 'double → 24'])]],
      [['What is 3 × 6?', ['Count in 3s: 3, 6, 9, 12, 15, 18.'], '18', T(0, 18, [0, 3, 6, 9, 12, 15, 18])], ['What is 4 × 5?', ['Double 2 × 5 = 10.', '10 + 10 = 20.'], '20', C(['2 × 5 = 10', '4 × 5 = 20'])], ['What is 4 × 7?', ['Double 7 is 14.', 'Double 14 is 28.'], '28', C(['7 → 14 → 28'])]],
      ['Do not mix the tables up. 3 × 4 is 12 and 4 × 4 is 16.', C(['3 × 4 = 12', '4 × 4 = 16'])],
      ['What is 3 × 8?', '', ['21', '24', '28'], '24', '3, 6, 9, 12, 15, 18, 21, 24.', 'Count in 3s.'],
      ['3s: 3 6 9 12 15. 4s: double and double again.', C(['3s', '4s'])]],
    ex: [['What is 3 × 9?', ['3 × 10 = 30.', '30 − 3 = 27.'], '27', C(['30 − 3'])], ['What is 4 × 9?', ['4 × 10 = 40.', '40 − 4 = 36.'], '36', C(['40 − 4'])]],
    way: ['Use arrays: 3 rows of 4 is 12 and 4 rows of 3 is 12. The 3s and 4s are linked.', arr(3, 4)],
    mist: ['Count in the right step. 3, 6, 9, 12: do not forget a number.', C(['3', '6', '9', '12'])],
    real: ['A table has 4 legs. How many legs have 6 tables?', '24', ['10', '20', '64'], '6 × 4.', C(['6 × 4 = 24'])],
    qs: [['3 × 4 = ?', '12', ['7', '34', '16'], '3, 6, 9, 12.', ''], ['4 × 3 = ?', '12', ['7', '43', '16'], 'Turn round.', ''], ['3 × 7 = ?', '21', ['10', '24', '37'], '3s: 21.', ''], ['4 × 6 = ?', '24', ['10', '20', '28'], 'Double 12.', ''],
         ['4 × 8 = ?', '32', ['12', '36', '28'], 'Double 16.', ''], ['3 × 5 = ?', '15', ['8', '12', '35'], '3s: 15.', ''], ['4 × 9 = ?', '36', ['13', '40', '32'], '4s: 36.', ''], ['3 × 10 = ?', '30', ['13', '300', '3'], '3 tens.', '']],
    gen: function (lv) { var t = pick([3, 4]), n = r(1, lv ? 12 : 10); return mc('3 and 4 times tables', 'What is <b>' + n + ' × ' + t + '</b>?', n * t, [n * t + t, n * t - t < 1 ? n * t + 2 : n * t - t, n * t + 1], 'Count in ' + t + 's.', n + ' × ' + t + ' = ' + n * t + '.'); } });

  M(303, { id: 'learnm3', ch: 'bear', bg: 'kitchen',
    li: ['Multiplying by 10', 'What happens when I multiply by 10?', 'When you multiply by 10, each digit moves one place to the left and a zero fills the ones place. 6 × 10 = 60.', C(['6', '× 10', '60']),
      [['times 10', 'ten times bigger', '🔟'], ['place', 'where a digit sits', '📍'], ['shift', 'move to the left', '⬅️'], ['zero', 'the placeholder digit 0', '0️⃣']],
      [['5 × 10 = 50. Five tens make 50.', C(['5', '× 10', '= 50'])], ['23 × 10 = 230. The digits move to the left and a 0 goes on the end.', C(['23', '→', '230'])], ['10 × 8 = 80. Turn it round: 8 × 10 = 80.', C(['10 × 8', '8 × 10', '80'])]],
      [['What is 7 × 10?', ['7 tens.', 'Add a zero.'], '70', C(['7', '70'])], ['What is 34 × 10?', ['Move the digits left.', 'Put a zero in the ones.'], '340', C(['34', '340'])], ['What is 10 × 15?', ['15 tens = 150.'], '150', C(['15', '150'])]],
      ['Do not just add a zero to numbers with decimals. Here we use whole numbers.', C(['23 × 10 = 230'])],
      ['What is 9 × 10?', '', ['19', '90', '900'], '90', 'Nine tens make 90.', 'Add a zero.'],
      ['Times 10: digits move left, put 0 in the ones.', C(['× 10 → add a 0'])]],
    ex: [['What is 4 × 10?', ['4 tens = 40.'], '40', C(['4', '40'])], ['What is 52 × 10?', ['Move digits left. 520.'], '520', C(['52', '520'])]],
    way: ['Place value chart: put 6 in the ones. Times 10, it moves to the tens: 60.', C(['T O', '0 6', '6 0'])],
    mist: ['Zero placeholders matter: 40 is not 4. Do not lose the zero.', C(['4 × 10 = 40 ✓'])],
    real: ['A box has 10 pencils. How many pencils in 12 boxes?', '120', ['22', '102', '1200'], '12 × 10.', C(['12 × 10 = 120'])],
    qs: [['3 × 10 = ?', '30', ['13', '300', '3'], 'Add 0.', ''], ['10 × 9 = ?', '90', ['19', '900', '9'], 'Add 0.', ''], ['25 × 10 = ?', '250', ['35', '2500', '205'], 'Add 0.', ''], ['10 × 14 = ?', '140', ['24', '1400', '104'], 'Add 0.', ''],
         ['What do you add to the end of a number to multiply by 10?', 'a zero', ['a one', 'nothing'], 'A zero.', ''], ['6 × 10 = ?', '60', ['16', '600', '6'], 'Add 0.', ''], ['10 × 20 = ?', '200', ['30', '2000', '120'], '20 tens.', ''], ['30 × 10 = ?', '300', ['40', '3000', '33'], '30 tens.', '']],
    gen: function (lv) { var n = r(2, lv ? 99 : 19); return mc('Multiplying by 10', 'What is <b>' + n + ' × 10</b>?', n * 10, [n * 10 + 10, n + 10, n * 100], 'Move the digits one place to the left.', n + ' × 10 = ' + n * 10 + '.'); } });

  /* ---------- 304 Division ---------- */
  M(304, { id: 'learn1', ch: 'mouse', bg: 'farm',
    way: ['Share one at a time, like dealing cards, until none are left. Then count one group.', sharing(12, 3)],
    ex: [['Share 12 sweets between 3 friends.', ['Deal one at a time.', '4 each.'], '12 ÷ 3 = 4', sharing(12, 3, 'sweet')], ['Share 10 apples between 2 baskets.', ['5 each.'], '10 ÷ 2 = 5', sharing(10, 2)]],
    mist: ['Share fairly. Every group must have the same number.', C(['equal shares'])],
    real: ['20 stickers are shared between 4 children. How many each?', '5', ['4', '16', '80'], '20 ÷ 4.', sharing(20, 4, 'star')],
    qs: [['Share 8 between 2. How many each?', '4', ['6', '16', '10'], '8 ÷ 2.', sharing(8, 2)], ['Share 15 between 3. How many each?', '5', ['12', '18', '45'], '15 ÷ 3.', sharing(15, 3)], ['Share 20 between 4. How many each?', '5', ['16', '24', '80'], '20 ÷ 4.', sharing(20, 4)], ['Share 12 between 4. How many each?', '3', ['8', '16', '48'], '12 ÷ 4.', sharing(12, 4)],
         ['Share 18 between 3. How many each?', '6', ['15', '21', '54'], '18 ÷ 3.', ''], ['Share 10 between 5. How many each?', '2', ['5', '15', '50'], '10 ÷ 5.', ''], ['Share 14 between 2. How many each?', '7', ['12', '16', '28'], '14 ÷ 2.', ''], ['Share 30 between 10. How many each?', '3', ['20', '40', '300'], '30 ÷ 10.', '']],
    gen: function (lv) { var g = pick(lv ? [2, 3, 4, 5, 10] : [2, 5, 10]), e = r(1, lv ? 9 : 6); return mc('Sharing equally', e * g + ' sweets are shared equally between <b>' + g + '</b> friends. How many does each get?', e, [e + 1, e - 1 || 2, e * g], 'Share one at a time.', e * g + ' ÷ ' + g + ' = ' + e + '.', sharing(e * g > 30 ? g * 3 : e * g, g)); } });

  M(304, { id: 'learn2', ch: 'mouse', bg: 'farm',
    way: ['How many groups of 4 can you make from 12? Take away 4 each time: 12, 8, 4, 0. That is 3 groups.', T(0, 12, [12, 8, 4, 0], [[12, 8], [8, 4], [4, 0]])],
    ex: [['How many groups of 5 in 20?', ['20 − 5 = 15.', '15 − 5 = 10.', '10 − 5 = 5.', '5 − 5 = 0.'], '4 groups', T(0, 20, [20, 15, 10, 5, 0])], ['How many groups of 3 in 9?', ['9, 6, 3, 0.'], '3 groups', T(0, 9, [9, 6, 3, 0])]],
    mist: ['Stop when you reach zero. Count the jumps, not the numbers you land on.', C(['count the jumps'])],
    real: ['A bus holds 10 children. 30 children go on a trip. How many buses?', '3', ['2', '4', '20'], '30 ÷ 10.', C(['30 → 20 → 10 → 0'])],
    qs: [['How many groups of 2 in 10?', '5', ['4', '8', '20'], '10 ÷ 2.', ''], ['How many groups of 5 in 15?', '3', ['4', '10', '75'], '15 ÷ 5.', ''], ['How many groups of 4 in 16?', '4', ['3', '12', '64'], '16 ÷ 4.', ''], ['How many groups of 10 in 50?', '5', ['4', '40', '500'], '50 ÷ 10.', ''],
         ['How many groups of 3 in 12?', '4', ['3', '9', '36'], '12 ÷ 3.', ''], ['How many groups of 2 in 14?', '7', ['6', '12', '28'], '14 ÷ 2.', ''], ['How many groups of 5 in 30?', '6', ['5', '25', '150'], '30 ÷ 5.', ''], ['How many groups of 4 in 20?', '5', ['4', '16', '80'], '20 ÷ 4.', '']],
    gen: function (lv) { var g = pick(lv ? [2, 3, 4, 5, 10] : [2, 5, 10]), n = r(2, lv ? 9 : 6); return mc('Taking away groups', 'How many groups of <b>' + g + '</b> can you make from <b>' + g * n + '</b>?', n, [n + 1, n - 1 || 2, g], 'Take away ' + g + ' again and again.', g * n + ' ÷ ' + g + ' = ' + n + '.'); } });

  M(304, { id: 'learn3', ch: 'mouse', bg: 'farm',
    way: ['Read an array to divide. 12 in 3 rows: each row has 4. 12 in rows of 4: there are 3 rows.', arr(3, 4)],
    ex: [['15 stars in 3 equal rows. How many in each row?', ['3 rows.', '15 ÷ 3 = 5.'], '5 in each row', arr(3, 5, 'star')], ['20 chairs in rows of 5. How many rows?', ['20 ÷ 5 = 4.'], '4 rows', arr(4, 5, 'star')]],
    mist: ['Rows and columns swap. Check which number is the rows.', arr(2, 5)],
    real: ['24 eggs are in a tray with 4 rows. How many eggs in each row?', '6', ['20', '28', '4'], '24 ÷ 4.', arr(4, 6)],
    qs: [['12 in 2 rows. How many in each row?', '6', ['10', '14', '24'], '12 ÷ 2.', arr(2, 6)], ['15 in 3 rows. How many in each row?', '5', ['12', '18', '45'], '15 ÷ 3.', arr(3, 5)], ['20 in rows of 5. How many rows?', '4', ['5', '15', '100'], '20 ÷ 5.', arr(4, 5)], ['18 in rows of 3. How many rows?', '6', ['3', '15', '54'], '18 ÷ 3.', arr(6, 3)],
         ['8 in 2 rows. How many in each row?', '4', ['6', '10', '16'], '8 ÷ 2.', arr(2, 4)], ['16 in 4 rows. How many in each?', '4', ['12', '20', '64'], '16 ÷ 4.', arr(4, 4)], ['30 in rows of 10. How many rows?', '3', ['20', '40', '300'], '30 ÷ 10.', ''], ['10 in 5 rows. How many in each row?', '2', ['5', '15', '50'], '10 ÷ 5.', arr(5, 2)]],
    gen: function (lv) { var a = r(2, lv ? 7 : 5), b = r(2, lv ? 8 : 6); return mc('Arrays for dividing', a * b + ' counters are in <b>' + a + ' equal rows</b>. How many are in each row?', b, [b + 1, b - 1 || 2, a], 'Divide by the number of rows.', a * b + ' ÷ ' + a + ' = ' + b + '.', arr(a, b)); } });

  M(304, { id: 'learn4', ch: 'mouse', bg: 'farm',
    way: ['Half means 2 equal parts. To halve a number, share it between 2.', sharing(8, 2)],
    ex: [['What is half of 12?', ['12 ÷ 2.', '6 + 6 = 12.'], '6', sharing(12, 2)], ['What is half of 30?', ['Half of 20 is 10.', 'Half of 10 is 5.', '10 + 5 = 15.'], '15', C(['20 → 10', '10 → 5', '15'])]],
    mist: ['Half is not the same as a half-way mark. Split into 2 EQUAL parts.', pies([[2, 1]])],
    real: ['You share 14 sweets between 2 friends. How many each?', '7', ['12', '16', '28'], 'Half of 14.', sharing(14, 2, 'sweet')],
    qs: [['What is half of 10?', '5', ['20', '8', '2'], '10 ÷ 2.', ''], ['What is half of 18?', '9', ['36', '8', '16'], '18 ÷ 2.', ''], ['What is half of 50?', '25', ['100', '20', '52'], '50 ÷ 2.', ''], ['What is half of 16?', '8', ['32', '9', '14'], '16 ÷ 2.', ''],
         ['What is half of 40?', '20', ['80', '10', '42'], '40 ÷ 2.', ''], ['What is half of 24?', '12', ['48', '11', '22'], '24 ÷ 2.', ''], ['What is double 7?', '14', ['3', '77', '21'], 'The opposite of half.', ''], ['Half of ? is 6. What is ?', '12', ['3', '6', '8'], 'Double 6.', '']],
    gen: function (lv) { var n = r(1, lv ? 50 : 20) * 2; return mc('Halving', 'What is <b>half of ' + n + '</b>?', n / 2, [n / 2 + 1, n / 2 - 1 || 3, n * 2], 'Share it between 2.', n + ' ÷ 2 = ' + n / 2 + '.', ''); } });

  M(304, { id: 'learnm1', ch: 'mouse', bg: 'farm',
    li: ['Dividing by 2, 5 and 10', 'How can I divide by 2, 5 and 10?', 'The 2, 5 and 10 times tables help us divide. If 5 × 4 = 20, then 20 ÷ 5 = 4.', C(['5 × 4 = 20', '20 ÷ 5 = 4']),
      [['divide', 'share or group equally', '➗'], ['÷', 'the divide sign', '➗'], ['fact', 'a number sentence we know', '📋'], ['times table', 'multiples list', '📃']],
      [['10 ÷ 2: think 2 × ? = 10. 2 × 5 = 10, so 10 ÷ 2 = 5.', C(['2 × 5 = 10', '10 ÷ 2 = 5'])], ['30 ÷ 5: think 5 × ? = 30. 5 × 6 = 30, so 30 ÷ 5 = 6.', C(['5 × 6 = 30', '30 ÷ 5 = 6'])], ['40 ÷ 10 = 4 because 10 × 4 = 40.', C(['10 × 4 = 40', '40 ÷ 10 = 4'])]],
      [['What is 18 ÷ 2?', ['2 × 9 = 18.'], '9', C(['2 × 9 = 18'])], ['What is 35 ÷ 5?', ['5 × 7 = 35.'], '7', C(['5 × 7 = 35'])], ['What is 80 ÷ 10?', ['10 × 8 = 80.'], '8', C(['10 × 8 = 80'])]],
      ['Division is not turnaround. 12 ÷ 2 = 6 but 2 ÷ 12 is not 6.', C(['12 ÷ 2 = 6'])],
      ['What is 45 ÷ 5?', '', ['8', '9', '10'], '9', '5 × 9 = 45.', 'Think of the 5 times table.'],
      ['Use the times table backwards to divide.', C(['× ↔ ÷'])]],
    ex: [['What is 14 ÷ 2?', ['2 × 7 = 14.'], '7', C(['2 × 7'])], ['What is 25 ÷ 5?', ['5 × 5 = 25.'], '5', C(['5 × 5'])]],
    way: ['Counting up in 5s until you reach the number tells you how many fives: 5, 10, 15, 20: 4 fives.', C(['5', '10', '15', '20'])],
    mist: ['Check the answer by multiplying back. 20 ÷ 5 = 4, so 4 × 5 = 20.', C(['4 × 5 = 20 ✓'])],
    real: ['You have 50p in 10p coins. How many coins?', '5', ['40', '60', '500'], '50 ÷ 10.', FL.coins([10, 10, 10, 10, 10])],
    qs: [['16 ÷ 2 = ?', '8', ['14', '18', '32'], '2 × 8 = 16.', ''], ['40 ÷ 5 = ?', '8', ['35', '45', '200'], '5 × 8 = 40.', ''], ['70 ÷ 10 = ?', '7', ['60', '80', '700'], '10 × 7.', ''], ['12 ÷ 2 = ?', '6', ['10', '14', '24'], '2 × 6.', ''],
         ['25 ÷ 5 = ?', '5', ['20', '30', '125'], '5 × 5.', ''], ['90 ÷ 10 = ?', '9', ['80', '100', '900'], '10 × 9.', ''], ['10 ÷ 5 = ?', '2', ['5', '15', '50'], '5 × 2.', ''], ['20 ÷ 2 = ?', '10', ['18', '22', '40'], '2 × 10.', '']],
    gen: function (lv) { var d = pick([2, 5, 10]), q = r(1, lv ? 12 : 10); return mc('Dividing by 2, 5 and 10', 'What is <b>' + q * d + ' ÷ ' + d + '</b>?', q, [q + 1, q - 1 || 3, q * d], 'Think ' + d + ' × ? = ' + q * d + '.', d + ' × ' + q + ' = ' + q * d + ', so ' + q * d + ' ÷ ' + d + ' = ' + q + '.'); } });

  M(304, { id: 'learnm2', ch: 'mouse', bg: 'farm',
    li: ['Sharing or grouping stories', 'How do I solve a division story?', 'A division story either shares into equal groups (how many in each?) or groups a total (how many groups?). Both use ÷.', sharing(12, 3),
      [['share', 'split into equal groups', '🔀'], ['group', 'make sets of the same size', '🧺'], ['each', 'every group', '👉'], ['left over', 'what remains', '🧩']],
      [['Sharing: 12 sweets between 3 children. How many each? 12 ÷ 3 = 4.', sharing(12, 3, 'sweet')], ['Grouping: 12 sweets in bags of 3. How many bags? 12 ÷ 3 = 4.', sharing(12, 4, 'sweet')], ['Same sum, different story: both are 12 ÷ 3.', B('12 ÷ 3 = 4')]],
      [['20 pencils shared between 5. How many each?', ['20 ÷ 5 = 4.'], '4 each', sharing(20, 5)], ['20 pencils in packs of 5. How many packs?', ['20 ÷ 5 = 4.'], '4 packs', sharing(20, 4)], ['18 children make teams of 3. How many teams?', ['18 ÷ 3 = 6.'], '6 teams', C(['18 ÷ 3 = 6'])]],
      ['Read the question twice. Is it “each” or “how many groups”?', C(['each', 'groups'])],
      ['24 cakes in boxes of 4. How many boxes?', TH(24, 'sweet', 6), ['5', '6', '8'], '6', '24 ÷ 4 = 6.', 'Groups of 4.'],
      ['Division stories: share equally or make equal groups.', C(['share', 'group'])]],
    ex: [['15 stickers shared between 3. How many each?', ['15 ÷ 3.'], '5', sharing(15, 3)], ['16 apples in bags of 4. How many bags?', ['16 ÷ 4.'], '4', sharing(16, 4)]],
    way: ['Draw boxes for the groups and put counters in them until the total is used.', sharing(10, 2)],
    mist: ['The answer is a number of groups or a number in each, not the total.', C(['12 ÷ 3 = 4, not 12'])],
    real: ['30 children make 5 equal teams. How many in each team?', '6', ['25', '35', '150'], '30 ÷ 5.', C(['30 ÷ 5 = 6'])],
    qs: [['12 balloons shared by 4. How many each?', '3', ['8', '16', '48'], '12 ÷ 4.', ''], ['12 balloons in bags of 4. How many bags?', '3', ['8', '16', '48'], '12 ÷ 4.', ''], ['40 stickers in packs of 10. How many packs?', '4', ['30', '50', '400'], '40 ÷ 10.', ''], ['35 pencils shared by 5. How many each?', '7', ['30', '40', '175'], '35 ÷ 5.', ''],
         ['18 sweets shared by 3. How many each?', '6', ['15', '21', '54'], '18 ÷ 3.', ''], ['50p in 5p coins. How many coins?', '10', ['45', '55', '250'], '50 ÷ 5.', ''], ['16 cars in rows of 2. How many rows?', '8', ['14', '18', '32'], '16 ÷ 2.', ''], ['24 eggs in boxes of 6. How many boxes?', '4', ['18', '30', '144'], '24 ÷ 6.', '']],
    gen: function (lv) { var d = pick(lv ? [2, 3, 4, 5, 10] : [2, 5, 10]), q = r(2, lv ? 9 : 6), share = r(0, 1); return share ? mc('Division stories', q * d + ' sweets are shared between <b>' + d + '</b> children. How many does each get?', q, [q + 1, q - 1 || 3, q * d], 'Divide the total by ' + d + '.', q * d + ' ÷ ' + d + ' = ' + q + '.') : mc('Division stories', q * d + ' sweets are put in bags of <b>' + d + '</b>. How many bags?', q, [q + 1, q - 1 || 3, q * d], 'How many groups of ' + d + '?', q * d + ' ÷ ' + d + ' = ' + q + '.'); } });

  M(304, { id: 'learnm3', ch: 'mouse', bg: 'farm',
    li: ['Fact families', 'How are multiplying and dividing linked?', 'Multiplication and division are opposites. One array gives a whole family of four facts.', arr(3, 4),
      [['fact family', 'linked number sentences', '👨‍👩‍👧'], ['inverse', 'the opposite', '🔄'], ['array', 'rows and columns', '🔳'], ['product', 'the answer to a multiplication', '✖️']],
      [['3 rows of 4: 3 × 4 = 12 and 4 × 3 = 12.', C(['3 × 4 = 12', '4 × 3 = 12'])], ['Share 12 into 3 rows: 12 ÷ 3 = 4. Into 4 rows: 12 ÷ 4 = 3.', C(['12 ÷ 3 = 4', '12 ÷ 4 = 3'])], ['One array makes a family of four: 3 × 4, 4 × 3, 12 ÷ 3, 12 ÷ 4.', C(['3 × 4', '4 × 3', '12 ÷ 3', '12 ÷ 4'])]],
      [['5 × 6 = 30. Write the other 3 facts.', ['6 × 5 = 30.', '30 ÷ 5 = 6.', '30 ÷ 6 = 5.'], '6 × 5, 30 ÷ 5, 30 ÷ 6', C(['5 × 6', '6 × 5', '30 ÷ 5', '30 ÷ 6'])], ['If 4 × 7 = 28, what is 28 ÷ 4?', ['Opposite.'], '7', C(['28 ÷ 4 = 7'])], ['If 24 ÷ 3 = 8, what is 8 × 3?', ['Opposite.'], '24', C(['8 × 3 = 24'])]],
      ['The total (product) is the biggest number. It is the start of a division sum.', C(['12 ÷ 3 ✓', '3 ÷ 12 ✗'])],
      ['2 × 9 = 18. What is 18 ÷ 9?', C(['2 × 9 = 18']), ['2', '9', '16'], '2', '18 ÷ 9 = 2.', 'Use the fact family.'],
      ['Fact family: two multiplications and two divisions.', C(['× ×', '÷ ÷'])]],
    ex: [['3 × 8 = 24. Find 24 ÷ 8.', ['24 ÷ 8 = 3.'], '3', C(['3', '8', '24'])], ['10 × 4 = 40. Find 40 ÷ 4.', ['40 ÷ 4 = 10.'], '10', C(['10', '4', '40'])]],
    way: ['Draw a fact triangle: product at the top, the two numbers at the bottom.', C(['top 12', 'bottom 3 and 4'])],
    mist: ['Use the same three numbers. 3, 4 and 12 are a family; 3, 4 and 13 are not.', C(['3 4 12 ✓'])],
    real: ['You know 5 × 5 = 25. How many 5s are in 25?', '5', ['4', '20', '125'], '25 ÷ 5 = 5.', arr(5, 5, 'star')],
    qs: [['If 4 × 5 = 20, then 20 ÷ 5 = ?', '4', ['5', '16', '25'], 'Fact family.', ''], ['If 6 × 3 = 18, then 18 ÷ 3 = ?', '6', ['3', '15', '21'], 'Fact family.', ''], ['If 7 × 2 = 14, then 14 ÷ 7 = ?', '2', ['7', '12', '21'], 'Fact family.', ''], ['If 30 ÷ 5 = 6, then 6 × 5 = ?', '30', ['25', '11', '35'], 'Fact family.', ''],
         ['Which belongs to 3, 4, 12?', '12 ÷ 3 = 4', ['12 ÷ 5 = 4', '3 + 4 = 12'], 'Same three numbers.', ''], ['If 8 × 5 = 40, then 40 ÷ 8 = ?', '5', ['8', '35', '45'], 'Fact family.', ''], ['If 9 × 2 = 18, then 18 ÷ 2 = ?', '9', ['2', '16', '20'], 'Fact family.', ''], ['If 20 ÷ 4 = 5, then 4 × 5 = ?', '20', ['9', '16', '24'], 'Fact family.', '']],
    gen: function (lv) { var a = r(2, lv ? 10 : 6), b = r(2, lv ? 10 : 6), k = r(0, 2); return k === 0 ? mc('Fact families', 'If <b>' + a + ' × ' + b + ' = ' + a * b + '</b>, what is <b>' + a * b + ' ÷ ' + b + '</b>?', a, [b, a + 1, a * b - a], 'Use the fact family.', a * b + ' ÷ ' + b + ' = ' + a + '.') : k === 1 ? mc('Fact families', 'If <b>' + a * b + ' ÷ ' + a + ' = ' + b + '</b>, what is <b>' + b + ' × ' + a + '</b>?', a * b, [a * b + a, a + b, a * b - b], 'Use the fact family.', b + ' × ' + a + ' = ' + a * b + '.') : mc('Fact families', 'Which number sentence belongs to <b>' + a + ', ' + b + ' and ' + a * b + '</b>?', a * b + ' ÷ ' + a + ' = ' + b, [a * b + ' ÷ ' + (a + 1) + ' = ' + b, a + ' + ' + b + ' = ' + a * b, a * b + ' ÷ ' + b + ' = ' + (b)].filter(function (x) { return x !== a * b + ' ÷ ' + a + ' = ' + b; }), 'Use the same three numbers.', 'These three numbers make a fact family.'); } });

  /* ---------- 305 Fractions ---------- */
  M(305, { id: 'learn1', ch: 'fox', bg: 'kitchen',
    way: ['A fraction is an equal part of a whole. Shared into 4 equal parts, each part is one quarter.', pies([[4, 1]])],
    ex: [['A cake is cut into 2 equal parts. What is each part?', ['2 equal parts is halves.'], 'one half', pies([[2, 1]])], ['A pizza is cut into 4 equal parts. 1 part is eaten. What fraction is eaten?', ['1 out of 4.'], 'one quarter', pies([[4, 1]])]],
    mist: ['The parts must be EQUAL. If they are different sizes it is not halves or quarters.', C(['equal ✓', 'unequal ✗'])],
    real: ['You share a sandwich fairly between 2 people. What fraction does each get?', 'one half', ['one quarter', 'one third'], '2 equal parts.', pies([[2, 1]])],
    qs: [['A shape is cut into 2 equal parts. Each part is…', 'a half', ['a quarter', 'a third'], 'Halves.', pies([[2, 1]])], ['A shape is cut into 4 equal parts. Each part is…', 'a quarter', ['a half', 'a third'], 'Quarters.', pies([[4, 1]])], ['How many quarters make a whole?', '4', ['2', '3', '8'], '4 quarters.', pies([[4, 4]])], ['How many halves make a whole?', '2', ['1', '4', '3'], '2 halves.', pies([[2, 2]])],
         ['Which is bigger: a half or a quarter?', 'a half', ['a quarter'], 'Fewer parts = bigger parts.', pies([[2, 1], [4, 1]])], ['Is this cut into equal parts? (3 equal parts)', 'Yes', ['No'], 'They match.', pies([[3, 1]])], ['One of 3 equal parts is…', 'a third', ['a half', 'a quarter'], 'Thirds.', pies([[3, 1]])], ['What fraction is the whole?', '1', ['1/2', '2'], 'All the parts.', '']],
    gen: function (lv) { var p = pick(lv ? [2, 3, 4, 5, 6, 8] : [2, 3, 4]), nm = { 2: 'a half', 3: 'a third', 4: 'a quarter', 5: 'a fifth', 6: 'a sixth', 8: 'an eighth' }; return mc('What is a fraction', 'The shape is cut into <b>' + p + ' equal parts</b>. Each part is…', nm[p], Object.keys(nm).filter(function (k) { return +k !== p; }).slice(0, 3).map(function (k) { return nm[k]; }), 'Name the part by how many equal parts there are.', 'One of ' + p + ' equal parts is ' + nm[p] + '.', pies([[p, 1]])); } });

  M(305, { id: 'learn2', ch: 'fox', bg: 'kitchen',
    way: ['In 3/4, the bottom number (denominator) says how many equal parts. The top number (numerator) says how many we have.', pies([[4, 3]])],
    ex: [['Write the fraction: 2 of 5 equal parts shaded.', ['2 shaded, 5 parts.'], '2/5', pies([[5, 2]])], ['How do you say 3/8?', ['3 out of 8 equal parts.'], 'three eighths', pies([[8, 3]])]],
    mist: ['The bottom number is the TOTAL number of parts, not the shaded parts.', C(['3/4: 4 parts, 3 shaded'])],
    real: ['A bar of chocolate has 8 squares. You eat 3. What fraction did you eat?', '3/8', ['5/8', '8/3'], '3 out of 8.', pies([[8, 3]])],
    qs: [['What fraction is shaded? (1 of 4)', '1/4', ['4/1', '1/3', '3/4'], '1 out of 4.', pies([[4, 1]])], ['What fraction is shaded? (3 of 4)', '3/4', ['1/4', '4/3', '3/1'], '3 out of 4.', pies([[4, 3]])], ['What fraction is shaded? (2 of 3)', '2/3', ['3/2', '1/3', '2/4'], '2 out of 3.', pies([[3, 2]])], ['What fraction is not shaded? (1 of 4 shaded)', '3/4', ['1/4', '4/4'], '3 left.', pies([[4, 1]])],
         ['Which fraction is 1 out of 5?', '1/5', ['5/1', '1/4'], '1 shaded of 5.', ''], ['What is the bottom number called?', 'denominator', ['numerator', 'total'], 'Denominator.', ''], ['What is the top number called?', 'numerator', ['denominator', 'whole'], 'Numerator.', ''], ['What fraction is shaded? (5 of 6)', '5/6', ['6/5', '1/6'], '5 out of 6.', pies([[6, 5]])]],
    gen: function (lv) { var d = r(2, lv ? 10 : 6), n = r(1, d - 1); return mc('Writing fractions', 'What fraction is shaded?', n + '/' + d, [d + '/' + n, (n === 1 ? 2 : n - 1) + '/' + d, n + '/' + (d + 1)], 'Top: shaded. Bottom: all the equal parts.', n + ' of ' + d + ' parts: ' + n + '/' + d + '.', pies([[d, n]])); } });

  M(305, { id: 'learn3', ch: 'fox', bg: 'kitchen',
    way: ['Half of a number: share by 2. A quarter: halve, then halve again.', C(['half of 12 = 6', 'quarter of 12 = 3'])],
    ex: [['What is half of 16?', ['16 ÷ 2.'], '8', sharing(16, 2)], ['What is a quarter of 20?', ['Half of 20 is 10.', 'Half of 10 is 5.'], '5', sharing(20, 4)]],
    mist: ['A quarter is smaller than a half. A quarter of 20 is 5, not 10.', C(['½ of 20 = 10', '¼ of 20 = 5'])],
    real: ['There are 24 children. Half go to the park. How many go?', '12', ['6', '24', '48'], 'Half of 24.', sharing(24, 2, 'star')],
    qs: [['Half of 14 = ?', '7', ['28', '12', '6'], '14 ÷ 2.', ''], ['Half of 30 = ?', '15', ['60', '10', '14'], '30 ÷ 2.', ''], ['A quarter of 8 = ?', '2', ['4', '32', '1'], '8 ÷ 4.', ''], ['A quarter of 40 = ?', '10', ['20', '160', '4'], '40 ÷ 4.', ''],
         ['Half of 100 = ?', '50', ['200', '10', '25'], '100 ÷ 2.', ''], ['A quarter of 12 = ?', '3', ['6', '48', '4'], '12 ÷ 4.', ''], ['Half of 50p is…', '25p', ['100p', '20p', '5p'], '50 ÷ 2.', ''], ['A quarter of 100 = ?', '25', ['50', '10', '400'], '100 ÷ 4.', '']],
    gen: function (lv) { var q = r(1, lv ? 15 : 8), h = r(0, 1), n = h ? q * 2 : q * 4; return mc('Half and quarter of', 'What is <b>' + (h ? 'half' : 'a quarter') + ' of ' + n + '</b>?', q, [q * 2, q + 1, n], 'Share by ' + (h ? 2 : 4) + '.', n + ' ÷ ' + (h ? 2 : 4) + ' = ' + q + '.'); } });

  M(305, { id: 'learn4', ch: 'fox', bg: 'kitchen',
    way: ['To find a fraction of a shape, count the equal parts and how many are shaded.', pies([[8, 3]])],
    ex: [['A rectangle has 6 equal squares. 2 are red. What fraction is red?', ['2 of 6.'], '2/6', pies([[6, 2]])], ['What fraction of the flag is blue? (4 of 5 equal parts)', ['4 of 5.'], '4/5', pies([[5, 4]])]],
    mist: ['Only count equal parts. If one part is bigger the fraction is not correct.', C(['equal parts only'])],
    real: ['A pizza has 8 slices. You eat 3. What fraction is left?', '5/8', ['3/8', '8/5'], '5 slices left.', pies([[8, 5]])],
    qs: [['4 equal parts, 3 shaded. Fraction shaded?', '3/4', ['1/4', '4/3'], '3 of 4.', pies([[4, 3]])], ['6 equal parts, 1 shaded. Fraction shaded?', '1/6', ['6/1', '5/6'], '1 of 6.', pies([[6, 1]])], ['8 equal parts, 5 shaded. Fraction not shaded?', '3/8', ['5/8', '8/3'], '3 left.', pies([[8, 5]])], ['5 equal parts, 2 shaded. Fraction shaded?', '2/5', ['3/5', '5/2'], '2 of 5.', pies([[5, 2]])],
         ['10 equal parts, 7 shaded. Fraction shaded?', '7/10', ['3/10', '10/7'], '7 of 10.', pies([[10, 7]])], ['3 equal parts, 2 shaded. Fraction not shaded?', '1/3', ['2/3', '3/1'], '1 left.', pies([[3, 2]])], ['2 equal parts, 1 shaded. Fraction shaded?', '1/2', ['2/1', '2/2'], '1 of 2.', pies([[2, 1]])], ['4 equal parts, all shaded. Fraction shaded?', '4/4', ['1/4', '0/4'], 'All of them.', pies([[4, 4]])]],
    gen: function (lv) { var d = r(2, lv ? 10 : 6), n = r(1, d - 1), s = r(0, 1); return mc('Fraction of a shape', 'A shape has <b>' + d + '</b> equal parts and <b>' + n + '</b> are shaded. What fraction is <b>' + (s ? 'not ' : '') + 'shaded</b>?', (s ? d - n : n) + '/' + d, [(s ? n : d - n) + '/' + d, d + '/' + (s ? d - n : n), (s ? d - n : n) + '/' + (d + 1)], 'Top: how many. Bottom: all the equal parts.', (s ? d - n : n) + ' of ' + d + '.', pies([[d, n]])); } });

  M(305, { id: 'learnm1', ch: 'fox', bg: 'kitchen',
    li: ['Equivalent fractions', 'How can different fractions be equal?', 'Fractions that name the same amount are equivalent. One half is the same as two quarters.', pies([[2, 1], [4, 2]]),
      [['equivalent', 'equal in value', '🟰'], ['half', '1 of 2 equal parts', '🌗'], ['quarter', '1 of 4 equal parts', '🍰'], ['same amount', 'covers the same area', '📐']],
      [['1/2 of a pizza. Cut every half into 2: it is now 2/4 of the pizza.', pies([[2, 1], [4, 2]])], ['2/4 is the same as 1/2. They cover the same area.', pies([[2, 1], [4, 2]])], ['1/2 = 2/4 = 4/8.', pies([[2, 1], [4, 2], [8, 4]])]],
      [['Is 2/4 equal to 1/2?', ['Same amount shaded.'], 'Yes', pies([[2, 1], [4, 2]])], ['How many quarters make a half?', ['2 quarters = 1 half.'], '2', pies([[4, 2], [2, 1]])], ['1/2 = ?/8', ['Double top and bottom twice.'], '4', pies([[2, 1], [8, 4]])]],
      ['Multiply or divide top and bottom by the same number. 1/2 = 3/6.', C(['1/2 = 3/6', '×3 top and bottom'])],
      ['Which is the same as 1/2?', pies([[2, 1]]), ['1/4', '2/4', '3/4'], '2/4', '2/4 is the same as 1/2.', 'Double both numbers.'],
      ['Equivalent fractions name the same amount in different ways.', C(['1/2 = 2/4 = 4/8'])]],
    ex: [['1/3 = ?/6', ['Double the top and bottom.', '1×2, 3×2.'], '2/6', pies([[3, 1], [6, 2]])], ['3/6 = ?/2', ['Divide top and bottom by 3.'], '1/2', pies([[6, 3], [2, 1]])]],
    way: ['Fold a paper strip into halves, then quarters, then eighths and compare shaded parts.', pies([[2, 1], [4, 2], [8, 4]])],
    mist: ['Change the top AND the bottom. 1/2 = 2/3 is wrong.', C(['1/2 = 2/4 ✓', '1/2 = 2/3 ✗'])],
    real: ['You eat 2/4 of a cake. Your friend eats 1/2. Who ate more?', 'the same', ['you', 'your friend'], '2/4 = 1/2.', pies([[4, 2], [2, 1]])],
    qs: [['1/2 = ?/4', '2', ['1', '3', '4'], 'Double both.', pies([[2, 1], [4, 2]])], ['2/4 = ?/2', '1', ['2', '3', '4'], 'Halve both.', pies([[4, 2], [2, 1]])], ['1/4 = ?/8', '2', ['1', '4', '3'], 'Double both.', pies([[4, 1], [8, 2]])], ['Which is equal to 1/2?', '4/8', ['1/8', '3/8', '2/8'], 'Half of 8 is 4.', ''],
         ['Which is equal to 1/3?', '2/6', ['1/6', '3/6', '2/3'], 'Double both.', ''], ['3/6 = ?/2', '1', ['3', '2', '6'], 'Halve both.', ''], ['Is 2/8 equal to 1/4?', 'Yes', ['No'], '2/8 ÷ 2 = 1/4.', ''], ['Is 1/2 equal to 1/3?', 'No', ['Yes'], 'Different amount.', '']],
    gen: function (lv) { var d = pick(lv ? [2, 3, 4, 5] : [2, 3, 4]), n = 1, m = pick(lv ? [2, 3, 4, 5] : [2, 3]); return mc('Equivalent fractions', n + '/' + d + ' = <b>?</b>/' + d * m, m, [m + 1, m - 1 || 5, d], 'Multiply the top by ' + m + ' too.', n + '/' + d + ' = ' + m + '/' + d * m + '.', pies([[d, n], [d * m, m]])); } });

  M(305, { id: 'learnm2', ch: 'fox', bg: 'kitchen',
    li: ['Thirds, fifths and tenths', 'What are thirds, fifths and tenths?', 'We can cut wholes into other equal parts too: 3 equal parts are thirds, 5 are fifths and 10 are tenths.', pies([[3, 1], [5, 1], [10, 1]]),
      [['third', '1 of 3 equal parts', '3️⃣'], ['fifth', '1 of 5 equal parts', '5️⃣'], ['tenth', '1 of 10 equal parts', '🔟'], ['unit fraction', 'a fraction with 1 on top', '1️⃣']],
      [['3 equal parts: each part is one third, 1/3.', pies([[3, 1]])], ['5 equal parts: each part is one fifth, 1/5.', pies([[5, 1]])], ['10 equal parts: each part is one tenth, 1/10.', pies([[10, 1]])]],
      [['What fraction is shaded? (2 of 5)', ['2 of 5 equal parts.'], '2/5', pies([[5, 2]])], ['What fraction is shaded? (3 of 10)', ['3 of 10 equal parts.'], '3/10', pies([[10, 3]])], ['How many thirds make a whole?', ['3 thirds.'], '3', pies([[3, 3]])]],
      ['More parts means smaller parts. A tenth is smaller than a fifth.', C(['1/10 < 1/5'])],
      ['How many fifths make a whole?', pies([[5, 5]]), ['3', '5', '10'], '5', '5 fifths make 1.', 'Same as the bottom number.'],
      ['Thirds, fifths, tenths: the bottom number says how many equal parts.', C(['3 → thirds', '5 → fifths', '10 → tenths'])]],
    ex: [['What is 1/10 of 30?', ['30 ÷ 10 = 3.'], '3', C(['30 ÷ 10'])], ['What is 1/5 of 20?', ['20 ÷ 5 = 4.'], '4', C(['20 ÷ 5'])]],
    way: ['A tenth is easy to find in money: 1/10 of £1 is 10p.', FL.coins([10])],
    mist: ['Thirds are not the same as three parts of any size. They must be equal.', C(['equal parts'])],
    real: ['A pizza is cut into 10 equal slices. You eat 3. What fraction did you eat?', '3/10', ['10/3', '3/7'], '3 of 10.', pies([[10, 3]])],
    qs: [['One of 5 equal parts is…', 'one fifth', ['one third', 'one tenth'], 'Fifths.', pies([[5, 1]])], ['One of 10 equal parts is…', 'one tenth', ['one fifth', 'one third'], 'Tenths.', pies([[10, 1]])], ['How many tenths make a whole?', '10', ['5', '3'], '10 tenths.', pies([[10, 10]])], ['What is 1/3 of 12?', '4', ['3', '6', '9'], '12 ÷ 3.', ''],
         ['What is 1/5 of 10?', '2', ['5', '1', '10'], '10 ÷ 5.', ''], ['What is 1/10 of 50?', '5', ['10', '40', '500'], '50 ÷ 10.', ''], ['Which is smaller: 1/3 or 1/5?', '1/5', ['1/3'], 'More parts, smaller.', ''], ['What fraction is shaded? (7 of 10)', '7/10', ['3/10', '10/7'], '7 of 10.', pies([[10, 7]])]],
    gen: function (lv) { var d = pick([3, 5, 10]), q = r(1, lv ? 10 : 6); return mc('Thirds, fifths and tenths', 'What is <b>1/' + d + ' of ' + q * d + '</b>?', q, [q + 1, q - 1 || 3, q * d], 'Divide by ' + d + '.', q * d + ' ÷ ' + d + ' = ' + q + '.'); } });

  M(305, { id: 'learnm3', ch: 'fox', bg: 'kitchen',
    li: ['Comparing fractions', 'How do I compare and order fractions?', 'Fractions with the same bottom number: the bigger top number is bigger. Unit fractions: the smaller bottom number is bigger.', pies([[4, 1], [4, 3]]),
      [['compare', 'say which is bigger', '⚖️'], ['order', 'put in a line', '📋'], ['bigger', 'greater', '⬆️'], ['smaller', 'less', '⬇️']],
      [['Same bottom number: 3/4 is bigger than 1/4 because 3 parts is more than 1 part.', pies([[4, 1], [4, 3]])], ['Same top number: 1/2 is bigger than 1/4 because halves are bigger pieces.', pies([[2, 1], [4, 1]])], ['On a number line, bigger fractions are further to the right.', C(['0', '1/4', '1/2', '3/4', '1'])]],
      [['Which is bigger: 2/5 or 4/5?', ['Same bottom. 4 > 2.'], '4/5', pies([[5, 2], [5, 4]])], ['Which is bigger: 1/3 or 1/6?', ['Thirds are bigger pieces.'], '1/3', pies([[3, 1], [6, 1]])], ['Put in order, smallest first: 3/4, 1/4, 1/2.', ['1/4 < 1/2 < 3/4.'], '1/4, 1/2, 3/4', pies([[4, 1], [2, 1], [4, 3]])]],
      ['A bigger bottom number does not mean a bigger fraction. 1/8 is smaller than 1/4.', C(['1/8 < 1/4'])],
      ['Which is bigger: 1/2 or 1/3?', pies([[2, 1], [3, 1]]), ['1/2', '1/3', 'the same'], '1/2', 'Halves are bigger than thirds.', 'Fewer parts, bigger pieces.'],
      ['Compare fractions by looking at the parts: same bottom → compare tops; same top → bigger bottom is smaller.', C(['same bottom', 'same top'])]],
    ex: [['Which is smaller: 3/8 or 5/8?', ['Same bottom. 3 < 5.'], '3/8', pies([[8, 3], [8, 5]])], ['Which is bigger: 1/4 or 1/10?', ['Fourths are bigger pieces.'], '1/4', pies([[4, 1], [10, 1]])]],
    way: ['Draw fraction bars of the same length and shade. Compare the shaded parts.', pies([[3, 1], [3, 2]])],
    mist: ['Compare the whole fraction, not just one number.', C(['2/3 vs 3/4: use pictures'])],
    real: ['You eat 1/2 of a pizza. Your friend eats 1/4. Who ate more?', 'you', ['your friend', 'the same'], '1/2 > 1/4.', pies([[2, 1], [4, 1]])],
    qs: [['Which is bigger: 3/5 or 2/5?', '3/5', ['2/5'], 'Same bottom.', ''], ['Which is bigger: 1/2 or 1/5?', '1/2', ['1/5'], 'Fewer parts.', ''], ['Which is smaller: 1/4 or 1/8?', '1/8', ['1/4'], 'More parts.', ''], ['Which is biggest: 1/3, 1/6, 1/2?', '1/2', ['1/3', '1/6'], 'Halves are biggest.', ''],
         ['Order smallest first: 1/2, 1/4, 1/8', '1/8, 1/4, 1/2', ['1/2, 1/4, 1/8', '1/4, 1/8, 1/2'], 'More parts = smaller.', ''], ['Which is bigger: 3/4 or 1/4?', '3/4', ['1/4'], 'Same bottom.', ''], ['Which sign fits: 2/3 ◯ 1/3?', '>', ['<', '='], '2 > 1.', ''], ['Which sign fits: 1/10 ◯ 1/5?', '<', ['>', '='], 'More parts.', '']],
    gen: function (lv) { var d = pick(lv ? [3, 4, 5, 6, 8, 10] : [3, 4, 5, 8]), a = r(1, d - 1), b = r(1, d - 1); if (a === b) b = a === 1 ? 2 : a - 1; var big = Math.max(a, b); return mc('Comparing fractions', 'Which is <b>bigger</b>: ' + a + '/' + d + ' or ' + b + '/' + d + '?', big + '/' + d, [Math.min(a, b) + '/' + d], 'Same bottom number: compare the tops.', big + ' parts is more than ' + Math.min(a, b) + ' parts.', pies([[d, a], [d, b]])); } });
})();
