/* fl_m2b.js: P2 Adding and taking away (202) and Money (203) */
(function () {
  'use strict';
  var FL = window.FL, S = window.Studio; if (!FL || !FL.MEGA) return;
  var B = FL.big, C = FL.cards, SAY = FL.says, TH = FL.things, M = FL.MEGA, r = FL.r, pick = FL.pick, T = FL.track, G = FL.groups;
  function mc(tag, q, a, w, h, e, p) { return FL.MC(tag, q, a, w, [h], e, p || ''); }

  /* ---------- 202 Adding and taking away ---------- */
  M(202, { id: 'learn1', ch: 'bear', bg: 'kitchen',
    way: ['3 + 5 and 5 + 3 are a pair. Draw the dots and you can see they match.', G(3, 5, 'apple', '+')],
    ex: [['3 + 6 or 6 + 3: are the answers the same?', ['3 + 6 = 9.', '6 + 3 = 9.'], 'Yes, both make 9.', G(3, 6, 'apple', '+')], ['If 4 + 7 = 11, what is 7 + 4?', ['Turn it round.', 'The answer stays the same.'], '7 + 4 = 11.', B('4 + 7 = 7 + 4')]],
    mist: ['Turning round works for adding, not for taking away. 7 − 2 is not the same as 2 − 7.', C(['5 + 2 = 2 + 5 ✓', '5 − 2 ≠ 2 − 5 ✗'])],
    real: ['Anna has 4 stickers and gets 6 more. Ben has 6 stickers and gets 4 more. Who has more?', 'They have the same', ['Anna', 'Ben'], '4 + 6 and 6 + 4 both make 10.', G(4, 6, 'star', '+')],
    qs: [['If 2 + 7 = 9, what is 7 + 2?', '9', ['5', '10', '72'], 'Turn it round. Same answer.', ''], ['3 + 4 = 7. So 4 + 3 = ?', '7', ['1', '12', '34'], 'Same numbers, same total.', ''], ['Which is the same as 5 + 8?', '8 + 5', ['5 − 8', '13 + 5', '8 − 5'], 'Swap the numbers.', ''],
         ['6 + 2 = 8. So 2 + 6 = ?', '8', ['4', '12', '10'], 'Turnaround.', ''], ['Fill the gap: 9 + 1 = 1 + ?', '9', ['10', '8', '1'], 'Swap them.', ''], ['4 + 5 = 5 + ?', '4', ['9', '5', '1'], 'The same numbers swap places.', ''], ['If 10 + 3 = 13, then 3 + 10 = ?', '13', ['7', '30', '103'], 'Same total.', ''], ['Does 6 − 2 = 2 − 6?', 'No', ['Yes'], 'Taking away does not turn round.', '']],
    gen: function (lv) { var a = r(1, lv ? 12 : 8), b = r(1, lv ? 12 : 8); return mc('Turnaround adding', 'If <b>' + a + ' + ' + b + ' = ' + (a + b) + '</b>, what is <b>' + b + ' + ' + a + '</b>?', a + b, [a + b + 1, a + b - 1, Math.abs(a - b)], 'Turn it round: the total stays the same.', 'Same numbers, same total: ' + (a + b) + '.'); } });

  M(202, { id: 'learn2', ch: 'bear', bg: 'kitchen',
    way: ['Pretend the big number is in your head. Hold up fingers for the small number and count on.', C(['9', '10', '11', '← 2 more'])],
    ex: [['What is 3 + 8?', ['Start with the bigger number, 8.', 'Count on 3: 9, 10, 11.'], '3 + 8 = 11.', T(6, 12, [8, 11], [[8, 11]])], ['What is 2 + 15?', ['Start with 15.', 'Count on 2: 16, 17.'], '2 + 15 = 17.', T(14, 18, [15, 17], [[15, 17]])]],
    mist: ['Do not count on from the small number. 2 + 9: start at 9, not at 2.', C(['start at 9', 'count on 2'])],
    real: ['You have 2 sweets and Gran gives you 9. How many now?', '11', ['10', '12', '9'], 'Start at 9 and count on 2.', TH(9, 'sweet')],
    qs: [['What is 2 + 7? Start at 7.', '9', ['8', '10', '5'], '7, then 8, 9.', ''], ['What is 3 + 9?', '12', ['11', '13', '6'], 'Start at 9: 10, 11, 12.', ''], ['What is 1 + 12?', '13', ['11', '14', '12'], 'Start at 12 and add 1.', ''], ['What is 4 + 10?', '14', ['13', '15', '6'], 'Start at 10 and count on 4.', ''],
         ['Which is the best number to start from for 3 + 11?', '11', ['3', '14', '8'], 'Always start with the bigger number.', ''], ['What is 2 + 17?', '19', ['18', '20', '15'], '17, 18, 19.', ''], ['What is 5 + 8?', '13', ['12', '14', '3'], 'Start at 8 and count on 5: 9, 10, 11, 12, 13.', ''], ['What is 3 + 16?', '19', ['18', '20', '13'], '17, 18, 19.', '']],
    gen: function (lv) { var a = r(1, 4), b = r(6, lv ? 18 : 12); return mc('Bigger number first', 'What is <b>' + a + ' + ' + b + '</b>? Start with the bigger number.', a + b, [a + b + 1, a + b - 1, b - a], 'Start at ' + b + ' and count on ' + a + '.', b + ' and ' + a + ' more is ' + (a + b) + '.'); } });

  M(202, { id: 'learn3', ch: 'bear', bg: 'kitchen',
    way: ['A double is a number added to itself. Doubles: 1+1, 2+2, 3+3, 4+4, 5+5. Near doubles are one away.', C(['4 + 4 = 8', '4 + 5 = 9'])],
    ex: [['What is 6 + 7?', ['Double 6 is 12.', '7 is one more than 6.', '12 and 1 more is 13.'], '6 + 7 = 13.', C(['6 + 6 = 12', '6 + 7 = 13'])], ['What is 8 + 7?', ['Double 7 is 14.', '8 is one more than 7.', '14 and 1 is 15.'], '8 + 7 = 15.', C(['7 + 7 = 14', '7 + 8 = 15'])]],
    mist: ['A near double is only one away. 4 + 7 is not a near double.', C(['4 + 5 ✓ near double', '4 + 7 ✗'])],
    real: ['Sam has 5 red cars and 6 blue cars. How many cars?', '11', ['10', '12', '1'], 'Double 5 is 10, and 1 more is 11.', G(5, 6, 'car', '+')],
    qs: [['What is double 4?', '8', ['6', '16', '44'], '4 + 4 = 8.', ''], ['What is 5 + 5?', '10', ['5', '55', '9'], 'Double 5.', ''], ['What is 3 + 4?', '7', ['6', '8', '34'], 'Double 3 is 6, and 1 more is 7.', ''], ['What is 6 + 5?', '11', ['10', '12', '1'], 'Double 5 is 10, and 1 more.', ''],
         ['What is double 7?', '14', ['12', '15', '77'], '7 + 7 = 14.', ''], ['What is 7 + 8?', '15', ['14', '16', '1'], 'Double 7 is 14. Add 1.', ''], ['What is double 9?', '18', ['16', '19', '99'], '9 + 9 = 18.', ''], ['What is 9 + 8?', '17', ['16', '18', '1'], 'Double 8 is 16. Add 1.', '']],
    gen: function (lv) { var a = r(2, lv ? 10 : 7), near = r(0, 1); return near ? mc('Near doubles', 'What is <b>' + a + ' + ' + (a + 1) + '</b>?', 2 * a + 1, [2 * a, 2 * a + 2, a + 2], 'Double ' + a + ' is ' + 2 * a + '. Add one more.', 'Double ' + a + ' is ' + 2 * a + ' and 1 more is ' + (2 * a + 1) + '.') : mc('Doubles', 'What is <b>double ' + a + '</b>?', 2 * a, [2 * a + 1, 2 * a - 1, a + 2], 'Add the number to itself.', a + ' + ' + a + ' = ' + 2 * a + '.'); } });

  M(202, { id: 'learn4', ch: 'bear', bg: 'kitchen',
    way: ['Taking away is the opposite of adding. If 3 + 4 = 7 then 7 − 4 = 3.', C(['3 + 4 = 7', '7 − 4 = 3', '7 − 3 = 4'])],
    ex: [['What is 10 − 6?', ['Think: what do I add to 6 to make 10?', '6 + 4 = 10.'], '10 − 6 = 4.', T(0, 10, [6, 10], [[6, 10]])], ['What is 15 − 9?', ['Think: 9 + ? = 15.', '9 + 6 = 15.'], '15 − 9 = 6.', T(8, 16, [9, 15], [[9, 15]])]],
    mist: ['Check by adding back. If 12 − 5 = 6, then 6 + 5 = 11, not 12. So the answer is wrong.', C(['12 − 5 = 7', '7 + 5 = 12 ✓'])],
    real: ['There are 14 children on the bus. 6 get off. How many are on the bus now?', '8', ['9', '20', '7'], 'Think: 6 + 8 = 14.', TH(14, 'duck')],
    qs: [['What is 8 − 5?', '3', ['2', '13', '4'], '5 + 3 = 8.', ''], ['What is 12 − 4?', '8', ['7', '16', '9'], '4 + 8 = 12.', ''], ['If 6 + 5 = 11, what is 11 − 5?', '6', ['5', '16', '7'], 'The opposite of adding.', ''], ['What is 20 − 10?', '10', ['30', '20', '9'], '10 + 10 = 20.', ''],
         ['What is 9 − 4?', '5', ['4', '13', '6'], '4 + 5 = 9.', ''], ['What is 17 − 8?', '9', ['8', '25', '10'], '8 + 9 = 17.', ''], ['If 7 + 8 = 15, what is 15 − 7?', '8', ['7', '22', '9'], '15 − 7 = 8.', ''], ['What is 13 − 6?', '7', ['6', '19', '8'], '6 + 7 = 13.', '']],
    gen: function (lv) { var a = r(2, lv ? 12 : 9), b = r(2, lv ? 12 : 9); return mc('Adding to take away', 'What is <b>' + (a + b) + ' − ' + a + '</b>? Think: ' + a + ' + ? = ' + (a + b) + '.', b, [b + 1, b - 1, a + b], 'Find what to add to ' + a + ' to get ' + (a + b) + '.', a + ' + ' + b + ' = ' + (a + b) + ', so ' + (a + b) + ' − ' + a + ' = ' + b + '.'); } });

  M(202, { id: 'learn5', ch: 'bear', bg: 'kitchen',
    way: ['Equal groups are a quicker way to add. 3 groups of 2 is the same as 2 + 2 + 2.', C(['2 + 2 + 2', '= 6'])],
    ex: [['5 plates with 2 cakes on each plate. How many cakes?', ['5 equal groups of 2.', '2, 4, 6, 8, 10.'], 'There are 10 cakes.', TH(10, 'sweet')], ['3 bags with 3 apples in each bag. How many?', ['3 equal groups of 3.', '3 + 3 + 3 = 9.'], 'There are 9 apples.', TH(9, 'apple', 3)]],
    mist: ['Count the groups AND the number in each. 3 groups of 4 is not 3 + 4.', C(['4 + 4 + 4 = 12', '3 + 4 = 7 ✗'])],
    real: ['A box holds 5 pencils. You have 3 boxes. How many pencils?', '15', ['8', '10', '12'], '5 + 5 + 5 = 15.', G(3, 5, 'flower', '+')],
    qs: [['2 bags with 5 apples in each. How many apples?', '10', ['7', '12', '25'], '5 + 5 = 10.', ''], ['4 plates with 2 buns on each. How many?', '8', ['6', '24', '10'], '2 + 2 + 2 + 2 = 8.', ''], ['3 groups of 5. How many altogether?', '15', ['8', '10', '35'], '5, 10, 15.', ''], ['2 groups of 10. How many?', '20', ['12', '10', '30'], '10 + 10 = 20.', ''],
         ['Which sum matches 3 groups of 4?', '4 + 4 + 4', ['3 + 4', '3 + 3 + 3 + 3', '4 + 4'], 'Add 4 three times.', ''], ['5 groups of 2. How many?', '10', ['7', '12', '25'], '2, 4, 6, 8, 10.', ''], ['4 groups of 5. How many?', '20', ['9', '25', '15'], '5, 10, 15, 20.', ''], ['3 groups of 3. How many?', '9', ['6', '12', '33'], '3 + 3 + 3 = 9.', '']],
    gen: function (lv) { var g = r(2, lv ? 6 : 4), n = pick([2, 3, 5, 10]); return mc('Equal groups', '<b>' + g + '</b> groups with <b>' + n + '</b> in each group. How many altogether?', g * n, [g + n, g * n + n, g * n - n], 'Add ' + n + ' again and again.', g + ' groups of ' + n + ' is ' + g * n + '.'); } });

  /* new lessons */
  M(202, { id: 'learnm1', ch: 'bear', bg: 'kitchen',
    li: ['Number bonds to 10', 'Which pairs of numbers make 10?', 'Number bonds are pairs of numbers that make 10. Knowing them helps with every sum.', C(['1 + 9', '2 + 8', '3 + 7', '4 + 6', '5 + 5']),
      [['number bond', 'two numbers that make a total', '🔗'], ['ten', 'the total we learn first', '🔟'], ['partner', 'the number that goes with another', '🤝'], ['pair', 'two numbers together', '✌️']],
      [['Benny has 10 buns. 6 are on the red plate. The rest are on the blue plate.', G(6, 4, 'apple', '+')], ['6 and 4 make 10. 6 + 4 = 10, so the partner of 6 is 4.', C(['6 + 4 = 10'])], ['Learn the pairs: 1 and 9, 2 and 8, 3 and 7, 4 and 6, 5 and 5.', C(['1+9', '2+8', '3+7', '4+6', '5+5'])]],
      [['What goes with 7 to make 10?', ['Start at 7 and count on to 10.', '8, 9, 10: that is 3 jumps.'], '7 + 3 = 10.', T(0, 10, [7, 10], [[7, 10]])], ['What goes with 2 to make 10?', ['Start at 2 and count on to 10.', '8 jumps.'], '2 + 8 = 10.', T(0, 10, [2, 10], [[2, 10]])], ['Which pair does not make 10?', ['4 + 6 = 10.', '5 + 4 = 9.'], '5 + 4 does not make 10.', C(['4 + 6 ✓', '5 + 4 ✗'])]],
      ['Make sure the pair adds to exactly 10. 6 + 3 = 9, not 10.', C(['6 + 4 ✓', '6 + 3 ✗'])],
      ['What goes with 6 to make 10?', '', ['3', '4', '5'], '4', '6 + 4 = 10.', 'Count on from 6 to 10.'],
      ['Number bonds to 10: 1+9, 2+8, 3+7, 4+6, 5+5.', C(['1+9', '2+8', '3+7', '4+6', '5+5'])]],
    way: ['A ten-frame shows the pair. 7 filled and 3 empty: 7 + 3 = 10.', FL.frame(7, 3, 10)],
    ex: [['What goes with 1 to make 10?', ['Count on from 1 to 10.', '9 jumps.'], '1 + 9 = 10.', T(0, 10, [1, 10], [[1, 10]])], ['What goes with 5 to make 10?', ['5 + ? = 10.', '5 and 5 make 10.'], '5 + 5 = 10.', C(['5 + 5 = 10'])]],
    mist: ['Do not forget the 10. 8 + 2 = 10, not 8 + 3.', C(['8 + 2 ✓', '8 + 3 ✗'])],
    real: ['You need 10 stickers. You have 3. How many more?', '7', ['6', '8', '13'], '3 + 7 = 10.', TH(3, 'star')],
    qs: [['3 + ? = 10', '7', ['6', '8', '13'], '3 + 7 = 10.', ''], ['6 + ? = 10', '4', ['3', '5', '16'], '6 + 4 = 10.', ''], ['? + 9 = 10', '1', ['0', '2', '19'], '1 + 9 = 10.', ''], ['8 + ? = 10', '2', ['1', '3', '18'], '8 + 2 = 10.', ''],
         ['Which pair makes 10?', '4 + 6', ['4 + 5', '3 + 8', '2 + 7'], '4 + 6 = 10.', ''], ['5 + ? = 10', '5', ['4', '6', '15'], '5 + 5 = 10.', ''], ['? + 7 = 10', '3', ['2', '4', '17'], '3 + 7 = 10.', ''], ['What is the partner of 2 to make 10?', '8', ['7', '9', '12'], '2 + 8 = 10.', '']],
    gen: function () { var a = r(0, 10), b = 10 - a; return mc('Number bonds to 10', a + ' + <b>?</b> = 10. What is the missing number?', b, [b + 1, b - 1, a], 'Count on from ' + a + ' to 10.', a + ' + ' + b + ' = 10.'); } });

  M(202, { id: 'learnm2', ch: 'bear', bg: 'kitchen',
    li: ['Counting back', 'How can counting back help me take away?', 'To take away, start at the big number and count back the number you take away.', T(0, 10, [8, 5], [[8, 5]]),
      [['take away', 'make less', '➖'], ['count back', 'say the numbers going down', '⬇️'], ['left', 'what is still there', '🧺'], ['minus', 'another word for take away', '➖']],
      [['Benny has 8 buns. He eats 3. Cross out 3.', TH(8, 'apple')], ['Count back from 8: 7, 6, 5. There are 5 left.', T(0, 10, [8, 5], [[8, 5]])], ['We write it: 8 − 3 = 5.', B('8 − 3 = 5')]],
      [['What is 9 − 2?', ['Start at 9.', 'Count back 2: 8, 7.'], '9 − 2 = 7.', T(5, 10, [9, 7], [[9, 7]])], ['What is 12 − 3?', ['Start at 12.', 'Count back 3: 11, 10, 9.'], '12 − 3 = 9.', T(8, 13, [12, 9], [[12, 9]])], ['What is 10 − 4?', ['Start at 10.', 'Count back 4: 9, 8, 7, 6.'], '10 − 4 = 6.', T(4, 10, [10, 6], [[10, 6]])]],
      ['Start on the big number. 7 − 2 starts at 7, not at 2.', C(['start at 7', 'count back 2'])],
      ['What is 11 − 3?', '', ['7', '8', '9'], '8', '11, then 10, 9, 8.', 'Count back 3.'],
      ['To take away, count back from the big number.', C(['start at the big number', 'count back'])]],
    ex: [['What is 6 − 1?', ['Start at 6.', 'Count back 1: 5.'], '6 − 1 = 5.', T(3, 7, [6, 5], [[6, 5]])], ['What is 14 − 2?', ['Start at 14.', 'Count back 2: 13, 12.'], '14 − 2 = 12.', T(10, 15, [14, 12], [[14, 12]])]],
    way: ['Use fingers: say the big number, then put down one finger each time you count back.', C(['9', '8', '7', '6'])],
    mist: ['Do not count the number you start on. 9 − 2: say 8, 7. Do not say 9, 8.', C(['9 → 8 → 7: 2 jumps'])],
    real: ['There are 12 birds on a wall. 4 fly away. How many are left?', '8', ['16', '9', '7'], '12, then 11, 10, 9, 8.', TH(12, 'duck')],
    qs: [['What is 7 − 2?', '5', ['4', '6', '9'], 'Count back 2: 6, 5.', ''], ['What is 10 − 3?', '7', ['6', '8', '13'], '9, 8, 7.', ''], ['What is 15 − 2?', '13', ['12', '14', '17'], '14, 13.', ''], ['What is 9 − 5?', '4', ['3', '5', '14'], '8, 7, 6, 5, 4.', ''],
         ['What is 18 − 3?', '15', ['14', '16', '21'], '17, 16, 15.', ''], ['What is 20 − 1?', '19', ['21', '10', '18'], 'One less than 20.', ''], ['What is 13 − 4?', '9', ['8', '10', '17'], '12, 11, 10, 9.', ''], ['What is 16 − 6?', '10', ['9', '11', '22'], 'Count back 6 to 10.', '']],
    gen: function (lv) { var a = r(5, lv ? 20 : 12), b = r(1, lv ? 5 : 4); return mc('Counting back', 'What is <b>' + a + ' − ' + b + '</b>?', a - b, [a - b + 1, a - b - 1, a + b], 'Start at ' + a + ' and count back ' + b + '.', a + ' take away ' + b + ' is ' + (a - b) + '.'); } });

  M(202, { id: 'learnm3', ch: 'bear', bg: 'kitchen',
    li: ['How many more?', 'How do I find how many more?', 'To find how many more, count on from the smaller number to the bigger number.', G(5, 8, 'apple', '+'),
      [['difference', 'how many more or fewer', '↔️'], ['more than', 'bigger than', '⬆️'], ['fewer', 'not as many', '⬇️'], ['compare', 'look at two things together', '👀']],
      [['Benny has 8 buns and Ava has 5. Line them up in pairs.', TH(8, 'apple')], ['5 pairs, and 3 buns have no partner. Benny has 3 more.', C(['5 pairs', '3 left over'])], ['Count on from 5 to 8: 6, 7, 8. That is 3 jumps.', T(4, 9, [5, 8], [[5, 8]])]],
      [['Ava has 4 stickers. Ben has 9. How many more has Ben?', ['Count on from 4 to 9.', '5, 6, 7, 8, 9 is 5 jumps.'], 'Ben has 5 more.', T(3, 10, [4, 9], [[4, 9]])], ['A red pencil is 7 cubes. A blue pencil is 10 cubes. How many more cubes is the blue pencil?', ['Count on from 7 to 10.', '8, 9, 10 is 3.'], 'It is 3 cubes longer.', T(6, 11, [7, 10], [[7, 10]])], ['There are 6 cats and 11 dogs. How many fewer cats?', ['Count on from 6 to 11.'], 'There are 5 fewer cats.', T(5, 12, [6, 11], [[6, 11]])]],
      ['More means count on from the smaller number, not add. 9 is 5 more than 4 (not 13).', C(['9 − 4 = 5 ✓', '9 + 4 = 13 ✗'])],
      ['Dev has 6 and Eva has 10. How many more has Eva?', TH(10, 'star'), ['3', '4', '5'], '4', '6, 7, 8, 9, 10: that is 4 jumps.', 'Count on from 6 to 10.'],
      ['Count on from the smaller number to the bigger one to find how many more.', C(['small → big', 'count the jumps'])]],
    ex: [['A tree has 12 apples. Another has 9. How many more apples on the first tree?', ['Count on from 9 to 12.', '10, 11, 12 is 3 jumps.'], 'It has 3 more apples.', T(8, 13, [9, 12], [[9, 12]])], ['Maya is 8 years old. Her brother is 13. How many years older is he?', ['Count on from 8 to 13.', '5 jumps.'], 'He is 5 years older.', T(7, 14, [8, 13], [[8, 13]])]],
    way: ['Take away to compare: 8 − 5 = 3. The difference is 3.', B('8 − 5 = 3')],
    mist: ['“How many more” is not “how many altogether”. Do not add the two numbers.', C(['4 and 9: 5 more ✓', '4 + 9 = 13 ✗'])],
    real: ['Class A has 15 children and Class B has 12. How many more children are in Class A?', '3', ['27', '4', '2'], 'Count on from 12 to 15.', T(11, 16, [12, 15], [[12, 15]])],
    qs: [['5 and 9: how many more is 9 than 5?', '4', ['3', '14', '5'], 'Count on: 6, 7, 8, 9.', ''], ['Ava has 3 and Ben has 8. How many more has Ben?', '5', ['4', '11', '6'], '8 − 3 = 5.', ''], ['10 is how many more than 7?', '3', ['2', '17', '4'], '8, 9, 10.', ''], ['A rope is 12 cubes and a string is 7 cubes. How many more cubes is the rope?', '5', ['4', '19', '6'], '12 − 7 = 5.', ''],
         ['There are 9 red and 6 blue counters. How many more red?', '3', ['2', '15', '4'], '7, 8, 9: 3 jumps.', ''], ['How many fewer is 4 than 11?', '7', ['6', '15', '8'], 'Count on from 4 to 11.', ''], ['20 is how many more than 15?', '5', ['4', '35', '6'], '16, 17, 18, 19, 20.', ''], ['Which is more, 14 or 9, and by how many?', '14, by 5', ['9, by 5', '14, by 23', '14, by 4'], '14 − 9 = 5.', '']],
    gen: function (lv) { var a = r(2, lv ? 15 : 8), d = r(1, lv ? 8 : 5); return mc('How many more', 'Ava has <b>' + a + '</b> and Ben has <b>' + (a + d) + '</b>. How many <b>more</b> has Ben?', d, [d + 1, d - 1 < 1 ? d + 2 : d - 1, a + a + d], 'Count on from ' + a + ' to ' + (a + d) + '.', (a + d) + ' − ' + a + ' = ' + d + '.'); } });

  M(202, { id: 'learnm4', ch: 'bear', bg: 'kitchen',
    li: ['Missing numbers', 'How do I find a missing number?', 'A missing number is a hidden number in a sum. We use what we know to find it.', B('3 + ? = 8'),
      [['missing', 'hidden, not there', '❓'], ['sum', 'a number sentence', '➕'], ['equals', 'the same as', '🟰'], ['find', 'work out', '🔍']],
      [['There are 8 buns altogether. 3 are on the plate. How many are in the bag?', G(3, 5, 'apple', '+')], ['Count on from 3 to 8: 4, 5, 6, 7, 8. That is 5 jumps.', T(2, 9, [3, 8], [[3, 8]])], ['3 + 5 = 8, so the missing number is 5.', B('3 + 5 = 8')]],
      [['4 + ? = 9. What is missing?', ['Count on from 4 to 9.', '5 jumps.'], 'The missing number is 5.', T(3, 10, [4, 9], [[4, 9]])], ['? + 6 = 10. What is missing?', ['Think: what goes with 6 to make 10?', '4 + 6 = 10.'], 'The missing number is 4.', B('? + 6 = 10')], ['7 − ? = 3. What is missing?', ['Count back from 7 to 3.', '4 jumps.'], 'The missing number is 4.', T(2, 8, [7, 3], [[7, 3]])]],
      ['Put the answer back in the sum to check it. 3 + 4 = 7, so 4 is not right for 3 + ? = 8.', C(['3 + 5 = 8 ✓'])],
      ['What is missing? 5 + ? = 12', '', ['6', '7', '8'], '7', '5 + 7 = 12.', 'Count on from 5 to 12.'],
      ['To find the missing number, count on or count back, then check.', C(['count on', 'check it'])]],
    ex: [['2 + ? = 7. What is missing?', ['Count on from 2 to 7.', '5 jumps.'], 'The missing number is 5.', T(1, 8, [2, 7], [[2, 7]])], ['9 − ? = 6. What is missing?', ['Count back from 9 to 6.', '3 jumps.'], 'The missing number is 3.', T(4, 10, [9, 6], [[9, 6]])]],
    way: ['A box can hide the number. Draw a box □ and fill it in: 4 + □ = 10.', B('4 + □ = 10')],
    mist: ['Check your answer by putting it in. 5 + 3 = 8, so 5 + ? = 9 needs 4.', C(['5 + 4 = 9 ✓'])],
    real: ['You want 12 stickers. You have 7. How many more do you need?', '5', ['4', '19', '6'], '7 + 5 = 12.', TH(7, 'star')],
    qs: [['3 + ? = 9', '6', ['5', '7', '12'], '3 + 6 = 9.', ''], ['? + 4 = 11', '7', ['6', '8', '15'], '7 + 4 = 11.', ''], ['10 − ? = 4', '6', ['5', '7', '14'], '10 − 6 = 4.', ''], ['5 + ? = 14', '9', ['8', '10', '19'], '5 + 9 = 14.', ''],
         ['? + 8 = 15', '7', ['6', '8', '23'], '7 + 8 = 15.', ''], ['12 − ? = 5', '7', ['6', '8', '17'], '12 − 7 = 5.', ''], ['6 + ? = 6', '0', ['1', '6', '12'], '6 + 0 = 6.', ''], ['? + 5 = 20', '15', ['14', '25', '10'], '15 + 5 = 20.', '']],
    gen: function (lv) { var a = r(1, lv ? 14 : 8), b = r(1, lv ? 9 : 6), k = r(0, 2); return k === 0 ? mc('Missing numbers', a + ' + <b>?</b> = ' + (a + b), b, [b + 1, b - 1 < 0 ? b + 2 : b - 1, a + b], 'Count on from ' + a + '.', a + ' + ' + b + ' = ' + (a + b) + '.') : k === 1 ? mc('Missing numbers', '<b>?</b> + ' + b + ' = ' + (a + b), a, [a + 1, a - 1 < 0 ? a + 2 : a - 1, a + b], 'What goes with ' + b + ' to make ' + (a + b) + '?', a + ' + ' + b + ' = ' + (a + b) + '.') : mc('Missing numbers', (a + b) + ' − <b>?</b> = ' + a, b, [b + 1, b - 1 < 0 ? b + 2 : b - 1, a + b], 'Count back from ' + (a + b) + ' to ' + a + '.', (a + b) + ' − ' + b + ' = ' + a + '.'); } });

  /* ---------- 203 Money ---------- */
  M(203, { id: 'learn1', ch: 'owl', bg: 'day',
    way: ['Silver and copper coins: 1p and 2p are copper. 5p, 10p, 20p and 50p are silver. The £1 and £2 coins are gold and silver.', FL.coins([1, 2, 5, 10, 20, 50])],
    ex: [['Which coin is worth the most: 5p, 2p or 10p?', ['Look at the numbers.', '10 is the biggest.'], 'The 10p coin is worth the most.', FL.coins([5, 2, 10])], ['How much are these coins: 5p and 5p?', ['5 + 5 = 10.'], 'They are worth 10p.', FL.coins([5, 5])]],
    mist: ['A bigger coin is not always worth more. The 2p coin is bigger than the 5p coin but worth less.', FL.coins([2, 5])],
    real: ['You have a 10p coin. Is that enough for a 5p sweet?', 'Yes', ['No'], '10p is more than 5p.', FL.coins([10])],
    qs: [['Which coin is worth 5p?', 'the 5p coin', ['the 2p coin', 'the 10p coin'], 'Read the number on the coin.', FL.coins([2, 5, 10])], ['Which is worth more: 10p or 20p?', '20p', ['10p'], '20 is more than 10.', FL.coins([10, 20])], ['Which is worth the least?', '1p', ['2p', '5p', '10p'], '1p is the smallest amount.', FL.coins([5, 1, 10])], ['How much are 2p and 2p?', '4p', ['2p', '22p', '5p'], '2 + 2 = 4.', FL.coins([2, 2])],
         ['How much is 10p and 5p?', '15p', ['10p', '5p', '105p'], '10 + 5 = 15.', FL.coins([10, 5])], ['How many 1p coins make 5p?', '5', ['1', '2', '10'], '1p five times is 5p.', FL.coins([1, 1, 1, 1, 1])], ['How much is 20p and 20p?', '40p', ['22p', '20p', '400p'], '20 + 20 = 40.', FL.coins([20, 20])], ['Which coin is worth 50p?', 'the 50p coin', ['the 20p coin', 'the 5p coin'], 'Read the number.', FL.coins([20, 50, 5])]],
    gen: function (lv) { var L = [1, 2, 5, 10, 20, 50].slice(0, lv ? 6 : 4), a = pick(L), b = pick(L); if (a === b) b = L[(L.indexOf(a) + 1) % L.length]; return mc('Coins', 'Which coin is worth <b>more</b>: <b>' + a + 'p</b> or <b>' + b + 'p</b>?', Math.max(a, b) + 'p', [Math.min(a, b) + 'p'], 'Compare the numbers.', Math.max(a, b) + ' is more than ' + Math.min(a, b) + '.', FL.coins([a, b])); } });

  M(203, { id: 'learn2', ch: 'owl', bg: 'day',
    way: ['Think of a coin as a number of 1p pieces. A 10p coin is the same as ten 1p coins.', FL.coins([10, 5, 5])],
    ex: [['Show 15p with two coins.', ['Try a 10p coin.', '10p and 5p make 15p.'], '10p and 5p make 15p.', FL.coins([10, 5])], ['Show 7p with coins.', ['Use a 5p, then 2p.', '5 + 2 = 7.'], '5p and 2p make 7p.', FL.coins([5, 2])]],
    mist: ['Count every coin. 5p, 2p and 2p is 9p, not 7p.', FL.coins([5, 2, 2])],
    real: ['You have a 10p and a 5p. Can you pay for a 15p comb?', 'Yes', ['No'], '10 + 5 = 15.', FL.coins([10, 5])],
    qs: [['Which makes 12p?', '10p and 2p', ['5p and 2p', '10p and 5p', '5p and 5p'], '10 + 2 = 12.', ''], ['10p and 10p make...', '20p', ['10p', '100p', '15p'], '10 + 10 = 20.', FL.coins([10, 10])], ['5p, 5p, 5p make...', '15p', ['10p', '555p', '5p'], '5, 10, 15.', FL.coins([5, 5, 5])], ['Which two coins make 6p?', '5p and 1p', ['5p and 2p', '2p and 2p', '10p and 1p'], '5 + 1 = 6.', ''],
         ['20p and 5p make...', '25p', ['20p', '15p', '205p'], '20 + 5 = 25.', FL.coins([20, 5])], ['Which makes 30p?', '20p and 10p', ['20p and 5p', '10p and 5p', '50p'], '20 + 10 = 30.', ''], ['2p, 2p, 2p make...', '6p', ['4p', '8p', '222p'], '2 + 2 + 2 = 6.', FL.coins([2, 2, 2])], ['Which makes 17p?', '10p, 5p and 2p', ['10p and 5p', '5p, 5p and 2p', '20p'], '10 + 5 + 2 = 17.', '']],
    gen: function (lv) { var cs = [5, 10, 20].concat(lv ? [2, 1] : []), a = pick(cs), b = pick(cs); return mc('Same total', 'How much are <b>' + a + 'p</b> and <b>' + b + 'p</b> together?', a + b + 'p', [a + b + 5 + 'p', a + b - 1 + 'p', a + 'p'], 'Add the two coins.', a + ' + ' + b + ' = ' + (a + b) + '.', FL.coins([a, b])); } });

  M(203, { id: 'learn3', ch: 'owl', bg: 'day',
    way: ['To pay, count on: start with the biggest coin, then add the others until you reach the price.', FL.coins([10, 5, 2])],
    ex: [['A pencil costs 12p. Pay with exact coins.', ['Start with 10p.', 'Add 2p.'], '10p and 2p pay for it.', FL.coins([10, 2])], ['A rubber costs 6p. Which coins pay?', ['5p and 1p make 6p.'], '5p and 1p pay for it.', FL.coins([5, 1])]],
    mist: ['Too much is not exact. 10p for a 6p rubber means you get change.', FL.coins([10])],
    real: ['A comic costs 20p. You have 10p and 5p. Can you buy it?', 'No', ['Yes'], '10 + 5 = 15p, and 15 is less than 20.', FL.coins([10, 5])],
    qs: [['A lolly costs 5p. Which coin pays exactly?', '5p', ['2p', '10p'], 'Match the price.', ''], ['A sweet costs 7p. Which coins pay?', '5p and 2p', ['5p and 1p', '10p', '2p and 2p'], '5 + 2 = 7.', ''], ['A ball costs 15p. Which pays exactly?', '10p and 5p', ['10p and 2p', '20p', '5p and 5p'], '10 + 5 = 15.', ''], ['Can you pay 20p with 10p and 5p?', 'No', ['Yes'], 'That is 15p.', FL.coins([10, 5])],
         ['A toy costs 30p. Which coins pay?', '20p and 10p', ['20p and 5p', '10p and 10p', '50p'], '20 + 10 = 30.', ''], ['How many 5p coins pay 20p?', '4', ['2', '5', '20'], '5, 10, 15, 20.', ''], ['A bun costs 8p. Which coins pay?', '5p, 2p and 1p', ['5p and 2p', '5p and 1p', '10p'], '5 + 2 + 1 = 8.', ''], ['A pen costs 11p. Which pays?', '10p and 1p', ['10p and 2p', '5p and 5p', '5p and 1p'], '10 + 1 = 11.', '']],
    gen: function (lv) { var p = pick([5, 6, 7, 8, 9, 10, 12, 15, 17].concat(lv ? [20, 25, 30] : [])), L = [20, 10, 5, 2, 1], c = [], left = p; L.forEach(function (v) { while (left >= v) { c.push(v); left -= v; } }); return mc('Paying', 'A toy costs <b>' + p + 'p</b>. You pay with coins that add up to ' + p + 'p. How many coins is that if you use the fewest?', c.length, [c.length + 1, c.length + 2, c.length - 1 || 2], 'Use the biggest coins first.', 'Use ' + c.map(function (v) { return v + 'p'; }).join(', ') + ': ' + c.length + ' coins.'); } });

  M(203, { id: 'learn4', ch: 'owl', bg: 'day',
    way: ['Change is the money you get back. Count on from the price up to the money you gave.', FL.coins([20])],
    ex: [['Something costs 15p. You pay 20p. What is the change?', ['Count on from 15 to 20.', '16, 17, 18, 19, 20: 5 jumps.'], 'The change is 5p.', T(14, 20, [15, 20], [[15, 20]])], ['Something costs 12p. You pay 20p. What is the change?', ['Count on from 12 to 20.', 'Jump 8.'], 'The change is 8p.', T(11, 20, [12, 20], [[12, 20]])]],
    mist: ['Change is what is left over, not the price. If you pay 20p for 15p, change is 5p, not 15p.', FL.coins([5])],
    real: ['Sara pays 20p for a 14p sweet. How much change?', '6p', ['4p', '14p', '34p'], 'Count on from 14 to 20.', FL.coins([20])],
    qs: [['Pay 20p for something that costs 18p. Change?', '2p', ['8p', '12p', '38p'], '18 + 2 = 20.', ''], ['Pay 20p for 10p. Change?', '10p', ['20p', '30p', '5p'], '10 + 10 = 20.', ''], ['Pay 20p for 15p. Change?', '5p', ['10p', '15p', '35p'], '15 + 5 = 20.', ''], ['Pay 20p for 12p. Change?', '8p', ['6p', '10p', '32p'], '12 + 8 = 20.', ''],
         ['Pay 10p for 7p. Change?', '3p', ['2p', '4p', '17p'], '7 + 3 = 10.', ''], ['Pay 10p for 6p. Change?', '4p', ['3p', '16p', '5p'], '6 + 4 = 10.', ''], ['Pay 20p for 20p. Change?', '0p', ['10p', '20p', '1p'], 'It is exact. No change.', ''], ['Pay 20p for 16p. Change?', '4p', ['14p', '6p', '36p'], '16 + 4 = 20.', '']],
    gen: function (lv) { var p = r(2, 19), pay = lv && p > 9 || p < 10 && r(0, 1) ? 20 : 10; if (pay === 10 && p > 9) pay = 20; return mc('Change', 'You pay <b>' + pay + 'p</b> for something that costs <b>' + p + 'p</b>. How much change?', pay - p + 'p', [pay - p + 1 + 'p', pay - p - 1 + 'p', p + 'p'], 'Count on from ' + p + ' to ' + pay + '.', p + ' + ' + (pay - p) + ' = ' + pay + '.', FL.coins([pay])); } });

  M(203, { id: 'learnm1', ch: 'owl', bg: 'day',
    li: ['Comparing prices', 'How do I know which costs more?', 'The bigger price costs more. The smaller price costs less. Compare the numbers.', C(['6p', 'vs', '9p']),
      [['costs', 'how much you pay', '🏷️'], ['more', 'bigger', '⬆️'], ['less', 'smaller', '⬇️'], ['cheaper', 'costs less', '💰']],
      [['A bun costs 6p. A cake costs 9p.', C(['bun 6p', 'cake 9p'])], ['9 is bigger than 6, so the cake costs more.', T(0, 10, [6, 9])], ['6 is smaller than 9, so the bun is cheaper.', C(['bun: cheaper', 'cake: costs more'])]],
      [['Pencil 8p. Pen 12p. Which costs more?', ['Compare 8 and 12.', '12 is bigger.'], 'The pen costs more.', C(['8p', '12p'])], ['Apple 5p. Pear 4p. Which is cheaper?', ['Compare 5 and 4.', '4 is smaller.'], 'The pear is cheaper.', C(['5p', '4p'])], ['Ball 15p. Kite 15p. Which costs more?', ['They are the same price.'], 'They cost the same.', C(['15p', '15p'])]],
      ['Look at the number, not the size of the thing. A big cheap toy can cost less.', C(['10p', '20p'])],
      ['Sweet 7p, lolly 10p. Which is cheaper?', FL.coins([5, 2]), ['the sweet', 'the lolly'], 'the sweet', '7 is less than 10.', 'Compare 7 and 10.'],
      ['The bigger number costs more. The smaller number is cheaper.', C(['bigger: costs more', 'smaller: cheaper'])]],
    ex: [['Bag 9p and box 6p. Which is cheaper?', ['Compare 9 and 6.', '6 is smaller.'], 'The box is cheaper.', C(['9p', '6p'])], ['Toy car 20p, toy bus 15p. Which costs more?', ['20 is bigger than 15.'], 'The car costs more.', C(['20p', '15p'])]],
    way: ['Line up the prices on a number line. The price further right costs more.', T(0, 20, [8, 15])],
    mist: ['Do not pick the price you read first. Compare both numbers.', C(['7p', '12p'])],
    real: ['At the shop, a juice is 12p and a milk is 9p. Which is cheaper?', 'the milk', ['the juice', 'they are the same'], '9 is smaller than 12.', C(['juice 12p', 'milk 9p'])],
    qs: [['Which costs more: 8p or 5p?', '8p', ['5p'], '8 is bigger.', ''], ['Which is cheaper: 14p or 17p?', '14p', ['17p'], '14 is smaller.', ''], ['Which costs less: 10p or 7p?', '7p', ['10p'], '7 is smaller.', ''], ['Which costs most: 4p, 9p or 6p?', '9p', ['4p', '6p'], '9 is the biggest.', ''],
         ['Which costs least: 12p, 8p or 15p?', '8p', ['12p', '15p'], '8 is the smallest.', ''], ['How much more is 9p than 6p?', '3p', ['2p', '15p', '4p'], '6 + 3 = 9.', ''], ['Sweet 3p, lolly 8p. How much more is the lolly?', '5p', ['4p', '11p', '6p'], '3 + 5 = 8.', ''], ['Two things cost 5p each. Which is dearer?', 'neither', ['the first', 'the second'], 'They cost the same.', '']],
    gen: function (lv) { var a = r(2, lv ? 19 : 12), b = r(2, lv ? 19 : 12); if (a === b) b++; var more = r(0, 1); return mc('Comparing prices', 'A pen costs <b>' + a + 'p</b> and a rubber costs <b>' + b + 'p</b>. Which costs <b>' + (more ? 'more' : 'less') + '</b>?', more ? (a > b ? 'the pen' : 'the rubber') : (a < b ? 'the pen' : 'the rubber'), [more ? (a > b ? 'the rubber' : 'the pen') : (a < b ? 'the rubber' : 'the pen')], 'Compare ' + a + ' and ' + b + '.', Math.max(a, b) + ' is bigger than ' + Math.min(a, b) + '.'); } });

  M(203, { id: 'learnm2', ch: 'owl', bg: 'day',
    li: ['Money stories', 'How do I solve a story about money?', 'In a money story, work out if you need to add, take away or find change. Then do the sum.', FL.coins([10, 5]),
      [['story', 'a problem told in words', '📖'], ['spend', 'pay money', '🛍️'], ['save', 'keep money', '🐷'], ['altogether', 'all added together', '➕']],
      [['Lola buys a pencil for 5p and a rubber for 3p.', C(['pencil 5p', 'rubber 3p'])], ['“Altogether” means add: 5p + 3p = 8p.', B('5 + 3 = 8')], ['She pays 10p. Change: count on from 8p to 10p. 2p.', T(7, 10, [8, 10], [[8, 10]])]],
      [['A bun costs 4p and a drink 6p. How much altogether?', ['Altogether: add.', '4 + 6 = 10.'], '10p altogether.', C(['4p', '6p'])], ['Max has 15p. He spends 6p. How much is left?', ['Spend means take away.', '15 − 6 = 9.'], 'He has 9p left.', FL.coins([10, 5])], ['A toy costs 20p. Eli has 12p. How much more does he need?', ['Count on from 12 to 20.', '8.'], 'He needs 8p more.', T(11, 20, [12, 20], [[12, 20]])]],
      ['Read the question twice. “Left” means take away. “Altogether” means add.', C(['altogether: +', 'left: −'])],
      ['You have 10p and spend 4p. How much is left?', FL.coins([10]), ['6p', '14p', '4p'], '6p', '10 − 4 = 6.', 'Spend means take away.'],
      ['Money stories: add for altogether, take away for left.', C(['+ altogether', '− left'])]],
    ex: [['Mia has 8p and finds 5p. How much now?', ['Finds means add.', '8 + 5 = 13.'], 'She has 13p.', C(['8p', '5p'])], ['Tom has 20p. He buys a toy for 14p. How much change?', ['20 − 14: count on from 14 to 20.', '6.'], 'He gets 6p change.', T(13, 20, [14, 20], [[14, 20]])]],
    way: ['Draw the story: a bar for the money you have and a bar for what you spend.', C(['has 10p', 'spends 4p', 'left 6p'])],
    mist: ['Check the question word. If it asks how much is left, do not add.', C(['10p − 4p = 6p ✓', '10p + 4p ✗'])],
    real: ['You have 20p. You buy a 7p sweet and a 5p lolly. How much is left?', '8p', ['12p', '32p', '7p'], '7 + 5 = 12, then 20 − 12 = 8.', FL.coins([20])],
    qs: [['A cake is 8p and a bun is 5p. How much altogether?', '13p', ['3p', '12p', '58p'], '8 + 5 = 13.', ''], ['You have 10p and spend 3p. How much is left?', '7p', ['13p', '6p', '3p'], '10 − 3 = 7.', ''], ['A pen costs 9p. You have 5p. How much more do you need?', '4p', ['14p', '3p', '5p'], '5 + 4 = 9.', ''], ['Lola has 6p and Max has 7p. How much altogether?', '13p', ['1p', '12p', '67p'], '6 + 7 = 13.', ''],
         ['Pay 20p for a 13p toy. Change?', '7p', ['6p', '33p', '13p'], '13 + 7 = 20.', ''], ['You save 5p each week for 3 weeks. How much?', '15p', ['8p', '5p', '35p'], '5 + 5 + 5 = 15.', ''], ['You have 15p and buy a 9p apple. How much is left?', '6p', ['24p', '5p', '7p'], '15 − 9 = 6.', ''], ['An ice lolly is 12p. You have 10p. How much more?', '2p', ['22p', '1p', '12p'], '10 + 2 = 12.', '']],
    gen: function (lv) { var a = r(3, lv ? 14 : 9), b = r(2, lv ? 9 : 6), k = r(0, 1); return k ? mc('Money stories', 'You have <b>' + (a + b) + 'p</b> and spend <b>' + b + 'p</b>. How much is left?', a + 'p', [a + 2 + 'p', a + b + b + 'p', a - 1 + 'p'], 'Spend means take away.', (a + b) + ' − ' + b + ' = ' + a + '.') : mc('Money stories', 'A book costs <b>' + a + 'p</b> and a pen costs <b>' + b + 'p</b>. How much altogether?', a + b + 'p', [a + b + 1 + 'p', a - b + 'p', a + b - 1 + 'p'], 'Altogether means add.', a + ' + ' + b + ' = ' + (a + b) + '.'); } });
})();
