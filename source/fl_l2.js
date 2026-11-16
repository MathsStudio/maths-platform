/* fl_l2.js: P2 "Learn it" lessons (one per workbook question) and worked-example sets for topics 201 to 205.
   Short sentences, small numbers and lots of pictures for the youngest learners. */
(function () {
  'use strict';
  var FL = window.FL, BT = window.BT; if (!FL || !FL.LI || !FL.KL) return;
  var V = BT.sv, KL = FL.KL, B = FL.big, C = FL.cards, SAY = FL.says, T = FL.things, G = FL.groups, TR = FL.track, TO = FL.tensOnes, COIN = FL.coins, SH = FL.shape, ROW = FL.shapeRow, LI = FL.LI, pair = KL.pair, r = FL.r, pick = FL.pick;
  function clk(h, m) { return '<div style="width:170px;max-width:100%;margin:0 auto">' + V.clock(h, m) + '</div>'; }
  function tr(n, lo, hi) { lo = Math.max(0, lo); return TR(lo, hi); }

  /* ========================= 201 Counting (Ruby the rocket) ========================= */
  LI(201, 'learn1', ['Number patterns', 'How can I use number patterns to work out a sequence?',
    'A pattern goes up or down by the same amount each time. Find the jump, then keep going.', SAY('rocket', '2, 4, 6, ?'),
    [['pattern', 'something that repeats or grows the same way', '🔁'], ['count on', 'go up', '⬆️'], ['count back', 'go down', '⬇️'], ['jump', 'the same step each time', '🐸']],
    [['Ruby sees stars: 2, then 4, then 6.', KL.seq([2, 4, 6], 'star')],
      ['On a number line, each jump is 2.', TR(0, 10, [2, 4, 6], [[2, 4], [4, 6]])],
      ['2, 4, 6, 8. The next number is 8.', B('2, 4, 6, 8')]],
    [['What comes next? 1, 2, 3, 4, ?', ['Each jump is 1.', '4 and 1 more is 5.'], '5', C(['1', '2', '3', '4', '?'])],
      ['What comes next? 5, 10, 15, ?', ['Each jump is 5.', 'Count on 5 from 15: 20.'], '20', C(['5', '10', '15', '?'])],
      ['What comes next? 10, 9, 8, ?', ['It goes down by 1.', '1 less than 8 is 7.'], '7', C(['10', '9', '8', '?'])]],
    ['Look at all the jumps, not just one.', C(['2, 4, 6, 8 ✓', 'jump 2 each time'])],
    ['What comes next? <b>10, 20, 30, ?</b>', '', [31, 40, 50], 40, 'It goes up in tens: 40.', 'How big is each jump?'],
    ['Find the jump. Keep going.', C(['find the jump', 'keep going'])]]);

  LI(201, 'learn2', ['Tens and ones', 'What are tens and ones?',
    'A ten is a group of 10. Ones are single things. 23 is 2 tens and 3 ones.', TO(2, 3),
    [['ten', 'a group of 10', '🔟'], ['ones', 'single ones', '1️⃣'], ['digit', 'one of 0 to 9', '🔢'], ['group', 'things put together', '📦']],
    [['Ruby packs 23 stars: 2 boxes of 10 and 3 more.', pair('<div style="border:3px solid #2b2340;border-radius:12px;padding:2px;max-width:200px">' + T(10, 'star', 5) + '</div>', '<div style="border:3px solid #2b2340;border-radius:12px;padding:2px;max-width:200px">' + T(10, 'star', 5) + '</div>', T(3, 'star'))],
      ['Draw it: 2 sticks of ten and 3 ones.', TO(2, 3)],
      ['We write 20 + 3 = 23.', B('20 + 3 = 23')]],
    [['How many tens and ones in 14?', ['14 is 1 group of 10.', 'And 4 more.'], '1 ten and 4 ones', TO(1, 4)],
      ['What number is 3 tens and 5 ones?', ['3 tens is 30.', '30 and 5 more is 35.'], '35', TO(3, 5)],
      ['How many tens in 40?', ['Count in tens: 10, 20, 30, 40.', 'That is 4 tens.'], '4 tens', TO(4, 0)]],
    ['The tens digit is first. 31 is 3 tens and 1 one. 13 is 1 ten and 3 ones.', C(['31', '13'])],
    ['How many tens in <b>27</b>?', TO(2, 7), [2, 7, 27], 2, '27 is 2 tens and 7 ones.', 'Count the sticks.'],
    ['Tens first, then ones.', C(['tens', 'ones'])]]);

  LI(201, 'learn3', ['Number lines', 'How do I order numbers on a number line?',
    'On a number line, numbers go up in order. Smaller numbers are on the left. Bigger numbers are on the right.', TR(0, 10, []),
    [['number line', 'numbers in order on a line', '📏'], ['order', 'put in the right place', '📶'], ['before', 'just to the left', '⬅️'], ['after', 'just to the right', '➡️']],
    [['Ruby’s planets are numbered 3, 7 and 5.', C(['3', '7', '5'])],
      ['Find them on the number line.', TR(0, 10, [3, 5, 7])],
      ['In order: 3, 5, 7.', B('3, 5, 7')]],
    [['Put 8, 2, 6 in order, smallest first.', ['Find 2: it is furthest left.', 'Then 6, then 8.'], '2, 6, 8', TR(0, 10, [2, 6, 8])],
      ['What number is between 11 and 13?', ['Count: 11, 12, 13.'], '12', TR(10, 14, [11, 13])],
      ['Which is bigger, 15 or 19?', ['19 is further right.', 'Further right is bigger.'], '19', TR(14, 20, [15, 19])]],
    ['Smaller is on the left, bigger is on the right.', TR(0, 5, [0, 5])],
    ['Which number comes just after <b>9</b>?', TR(6, 12, [9]), [8, 10, 11], 10, '10 comes after 9.', 'Look to the right.'],
    ['Left: smaller. Right: bigger.', C(['⬅️ smaller', 'bigger ➡️'])]]);

  LI(201, 'learn4', ['One more, one less', 'What is one more and one less?',
    'One more is the next number. One less is the number before.', TR(4, 8, [5, 6, 7], [[6, 7], [6, 5]]),
    [['one more', 'the next number, add 1', '➕'], ['one less', 'the number before, take away 1', '➖'], ['next', 'just after', '➡️'], ['before', 'just before', '⬅️']],
    [['Ruby has 6 stars. One more comes: 7.', pair(T(6, 'star'), T(1, 'star'))],
      ['On the number line: 6, jump 1 to 7.', TR(4, 8, [6, 7], [[6, 7]])],
      ['One more than 6 is 7. One less than 6 is 5.', C(['6 + 1 = 7', '6 − 1 = 5'])]],
    [['What is one more than 9?', ['Start at 9.', 'Jump 1 forward: 10.'], '10', TR(7, 11, [9, 10], [[9, 10]])],
      ['What is one less than 15?', ['Start at 15.', 'Jump 1 back: 14.'], '14', TR(12, 16, [15, 14], [[15, 14]])],
      ['What is one more than 19?', ['Start at 19.', 'One more is 20.'], '20', TR(17, 21, [19, 20], [[19, 20]])]],
    ['One less goes back. Do not jump forward.', TR(3, 7, [5, 4], [[5, 4]])],
    ['What is one less than <b>12</b>?', TR(9, 14, [12]), [11, 12, 13], 11, 'One back from 12 is 11.', 'Jump back 1.'],
    ['One more: forward 1. One less: back 1.', C(['➕ 1', '➖ 1'])]]);

  /* ========================= 202 Adding (Benny the bear) ========================= */
  LI(202, 'learn1', ['Turnaround adding', 'Which way round should I add two numbers?',
    'You can add two numbers either way round. The answer is the same.', G(3, 5, 'apple'),
    [['add (+)', 'put together', '➕'], ['total', 'how many altogether', '🧮'], ['turnaround', 'swap the numbers round', '🔄'], ['same', 'not different', '🟰']],
    [['Benny has 3 apples and 5 apples.', G(3, 5, 'apple')],
      ['Turn it round: 5 apples and 3 apples. Still 8.', G(5, 3, 'apple')],
      ['3 + 5 = 8 and 5 + 3 = 8.', B('3 + 5 = 5 + 3')]],
    [['What is 2 + 6?', ['Count 2, then 6 more.', 'Altogether: 8.'], '2 + 6 = 8', G(2, 6, 'apple')],
      ['What is 6 + 2?', ['It is the same numbers, turned round.', 'So it is 8 too.'], '6 + 2 = 8', G(6, 2, 'apple')],
      ['4 + 7 = 11. What is 7 + 4?', ['Turn it round.', 'The answer stays the same.'], '7 + 4 = 11', B('4 + 7 = 7 + 4')]],
    ['This works for adding, not for taking away.', C(['3 + 5 = 5 + 3 ✓', '5 − 3 ≠ 3 − 5'])],
    ['1 + 9 = 10. What is <b>9 + 1</b>?', '', [8, 10, 19], 10, 'Turnaround: still 10.', 'The numbers just swapped.'],
    ['Either way round, the same answer.', C(['3 + 5', '5 + 3', '= 8'])]]);

  LI(202, 'learn2', ['Bigger number first', 'Which order should I add numbers in?',
    'Start with the bigger number and count on the smaller one. It is quicker!', TR(7, 12, [9, 11], [[9, 10], [10, 11]]),
    [['bigger', 'more', '⬆️'], ['smaller', 'less', '⬇️'], ['count on', 'start at a number and keep counting', '➡️'], ['make ten', 'two numbers that add to 10', '🔟']],
    [['Benny picks 2 apples, then 9 apples.', G(2, 9, 'apple')],
      ['Start at 9, count on 2: 10, 11.', TR(7, 12, [9, 11], [[9, 10], [10, 11]])],
      ['2 + 9 = 11.', B('9 + 2 = 11')]],
    [['What is 3 + 8?', ['Start at the bigger number: 8.', 'Count on 3: 9, 10, 11.'], '3 + 8 = 11', TR(7, 12, [8, 11], [[8, 9], [9, 10], [10, 11]])],
      ['What is 6 + 3 + 4?', ['Look for numbers that make 10: 6 and 4.', '10 + 3 = 13.'], '13', B('6 + 4 + 3')],
      ['What is 1 + 7?', ['Start at 7.', 'Count on 1: 8.'], '1 + 7 = 8', TR(5, 9, [7, 8], [[7, 8]])]],
    ['Start counting from the next number. From 8, say 9, 10, 11, not 8, 9, 10.', TR(7, 12, [8, 11])],
    ['What is <b>2 + 8</b>?', '', [9, 10, 11], 10, 'Start at 8, count on 2: 9, 10.', 'Start with the bigger number.'],
    ['Bigger number first, then count on.', C(['bigger first', 'count on'])]]);

  LI(202, 'learn3', ['Near doubles', 'How can using near doubles help me add numbers?',
    'A double is the same number twice, like 4 + 4. If the numbers are next to each other, use the double and add 1.', G(4, 5, 'apple'),
    [['double', 'the same number twice', '👯'], ['near double', 'numbers next to each other, like 4 and 5', '🤏'], ['one more', 'add 1', '➕'], ['add', 'put together', '🧮']],
    [['Benny has 4 apples and 5 apples.', G(4, 5, 'apple')],
      ['4 + 4 is 8. The 5 is one more.', pair(G(4, 4, 'apple'), T(1, 'apple'))],
      ['4 + 5 = 8 + 1 = 9.', B('4 + 5 = 9')]],
    [['What is 3 + 4?', ['Double 3 is 6.', 'One more is 7.'], '3 + 4 = 7', G(3, 4, 'apple')],
      ['What is 6 + 7?', ['Double 6 is 12.', 'One more is 13.'], '6 + 7 = 13', G(6, 7, 'apple')],
      ['What is 5 + 6?', ['Double 5 is 10.', 'One more is 11.'], '5 + 6 = 11', G(5, 6, 'apple')]],
    ['Near doubles need numbers next to each other. 3 + 8 is not a near double.', C(['4 + 5 ✓', '3 + 8 ✗'])],
    ['Double 7 is 14. What is <b>7 + 8</b>?', '', [14, 15, 16], 15, '14 and one more is 15.', 'Use the double, then add 1.'],
    ['Double, then one more.', C(['4 + 4 = 8', '4 + 5 = 9'])]]);

  LI(202, 'learn4', ['Adding to take away', 'How can adding help me with subtracting?',
    'Adding and taking away are a family. If 3 + 4 = 7, then 7 − 4 = 3 and 7 − 3 = 4.', C(['3 + 4 = 7', '7 − 4 = 3', '7 − 3 = 4']),
    [['take away (−)', 'some go away', '➖'], ['left', 'how many are still there', '👀'], ['fact family', 'three numbers that go together', '👨‍👩‍👧'], ['count on', 'count up to find the gap', '➡️']],
    [['Benny has 7 apples. He eats 4.', T(7, 'apple')],
      ['3 and 4 make 7, so 3 are left.', G(3, 4, 'apple')],
      ['7 − 4 = 3.', B('7 − 4 = 3')]],
    [['What is 10 − 8?', ['What goes with 8 to make 10?', '8 + 2 = 10.'], '10 − 8 = 2', TR(7, 11, [8, 10], [[8, 9], [9, 10]])],
      ['6 + 2 = 8. What is 8 − 2?', ['It is the same family.', '6 and 2 make 8.'], '8 − 2 = 6', B('6 + 2 = 8 → 8 − 2 = 6')],
      ['What is 9 − 5?', ['What goes with 5 to make 9?', '5 + 4 = 9.'], '9 − 5 = 4', G(5, 4, 'apple')]],
    ['In a take away, the biggest number comes first: 7 − 4, not 4 − 7.', C(['7 − 4 ✓', '4 − 7 ✗'])],
    ['5 + 3 = 8. What is <b>8 − 3</b>?', '', [3, 5, 11], 5, 'Same family: 8 − 3 = 5.', 'Use the adding fact.'],
    ['Know one adding fact: know two take aways.', C(['3 + 4 = 7', '7 − 4 = 3', '7 − 3 = 4'])]]);

  /* ========================= 203 Money (Molly's toy shop) ========================= */
  LI(203, 'learn1', ['Coins and notes', 'What coins and notes do we use?',
    'We use coins and notes to pay. Each coin has a value written on it.', COIN([1, 2, 5, 10, 20, 50]),
    [['coin', 'metal money', '🪙'], ['note', 'paper money, like £5, £10, £20, £50 or £100', '💷'], ['p (pence)', 'small amounts, like 5p', '🔸'], ['£ (pounds)', 'bigger amounts, like £1', '💰']],
    [['Molly’s till has coins of different sizes and colours.', COIN([1, 2, 5, 10, 20, 50])],
      ['Pound coins too: £1 and £2.', COIN([100, 200])],
      ['Notes: £5, £10, £20, £50 and £100.', C(['£5', '£10', '£20', '£50', '£100'])]],
    [['Which coin is worth the most?', ['Read the number on each coin.', '50 is the biggest.'], 'The 50p coin', COIN([5, 50, 10])],
      ['How much is this coin?', ['Read the number: 20.'], '20p', COIN([20])],
      ['Which is worth more: 10p or 2p?', ['Compare 10 and 2.', '10 is more.'], '10p', COIN([10, 2])]],
    ['A bigger coin is not always worth more. The 5p is small, but it is worth more than the 2p.', COIN([5, 2])],
    ['How much is this coin?', COIN([10]), ['1p', '10p', '£10'], '10p', 'It says 10: ten pence.', 'Read the number on it.'],
    ['Read the number on the coin.', COIN([1, 2, 5, 10, 20, 50, 100, 200])]]);

  LI(203, 'learn2', ['Same total', 'How can different coins and notes make the same total?',
    'Different coins can make the same amount. 10p can be a 10p coin, or two 5p coins.', pair(COIN([10]), COIN([5, 5])),
    [['total', 'how much altogether', '➕'], ['amount', 'how much money', '💰'], ['same', 'equal', '🟰'], ['coins', 'metal money', '🪙']],
    [['Molly has a 10p coin. Her friend has two 5p coins.', pair(COIN([10]), COIN([5, 5]))],
      ['5p and 5p make 10p.', COIN([5, 5])],
      ['10p = 5p + 5p.', B('10p = 5p + 5p')]],
    [['Make 7p.', ['Start with 5p.', '2p more makes 7p.'], '5p + 2p = 7p', COIN([5, 2])],
      ['Make 20p with two coins.', ['10p and 10p.'], '10p + 10p = 20p', COIN([10, 10])],
      ['How much is 5p + 2p + 1p?', ['5 and 2 is 7.', '7 and 1 is 8.'], '8p', COIN([5, 2, 1])]],
    ['Count the value, not the number of coins.', pair(COIN([1, 1, 1]), COIN([5]))],
    ['Which makes <b>6p</b>?', '', ['5p + 1p', '5p + 2p', '2p + 2p'], '5p + 1p', '5 and 1 is 6.', 'Add the coins.'],
    ['Lots of ways to make the same total.', pair(COIN([10]), COIN([5, 5]), COIN([5, 2, 2, 1]))]]);

  LI(203, 'learn3', ['Paying', 'How can adding coins help me pay for something?',
    'To pay, add your coins until they make the price.', SAY('mouse', 'The car costs 8p.'),
    [['price', 'how much it costs', '🏷️'], ['pay', 'give money', '👛'], ['add', 'put together', '➕'], ['enough', 'the right amount or more', '✅']],
    [['A toy car costs 8p.', C(['🚗 8p'])],
      ['Use a 5p, a 2p and a 1p.', COIN([5, 2, 1])],
      ['5p + 2p + 1p = 8p.', B('5p + 2p + 1p = 8p')]],
    [['A ball costs 12p. Which coins?', ['Start with 10p.', '2p more makes 12p.'], '10p + 2p', COIN([10, 2])],
      ['A sweet costs 4p. Which coins?', ['2p and 2p make 4p.'], '2p + 2p', COIN([2, 2])],
      ['A kite costs 15p. Which coins?', ['Start with 10p.', '5p more makes 15p.'], '10p + 5p', COIN([10, 5])]],
    ['Start with the biggest coin that fits. It saves counting lots of small coins.', COIN([10, 5])],
    ['A toy costs <b>7p</b>. Which coins?', '', ['5p + 2p', '5p + 1p', '2p + 2p'], '5p + 2p', '5 and 2 make 7.', 'Start with the 5p.'],
    ['Biggest coin first, then add.', C(['biggest coin', 'add more', 'price'])]]);

  LI(203, 'learn4', ['Change from 20p', 'How can counting on help me find change from 20p?',
    'Change is the money you get back. Count on from the price up to 20p.', FL.trackP(15, 20, [15, 20], [[15, 16], [16, 17], [17, 18], [18, 19], [19, 20]]),
    [['change', 'money back', '🪙'], ['price', 'how much it costs', '🏷️'], ['count on', 'count up from the price', '➡️'], ['20p', 'the coin you pay with', '2️⃣0️⃣']],
    [['A teddy costs 15p. Molly is given 20p.', COIN([20])],
      ['Count on from 15 to 20: 16, 17, 18, 19, 20. That is 5.', FL.trackP(15, 20, [15, 20], [[15, 16], [16, 17], [17, 18], [18, 19], [19, 20]])],
      ['The change is 5p.', B('20p − 15p = 5p')]],
    [['A toy costs 18p. Pay 20p. Change?', ['Count on: 19, 20.', 'That is 2.'], '2p', FL.trackP(17, 20, [18, 20], [[18, 19], [19, 20]])],
      ['A toy costs 10p. Pay 20p. Change?', ['10 and 10 make 20.'], '10p', COIN([10])],
      ['A toy costs 16p. Pay 20p. Change?', ['Count on: 17, 18, 19, 20.', 'That is 4.'], '4p', FL.trackP(15, 20, [16, 20], [[16, 17], [17, 18], [18, 19], [19, 20]])]],
    ['Count the jumps, not the price. 15p to 20p is 5 jumps, so 5p.', C(['5 jumps', '5p'])],
    ['A toy costs <b>17p</b>. Pay 20p. Change?', '', ['2p', '3p', '17p'], '3p', '18, 19, 20: 3 jumps.', 'Count on from 17.'],
    ['Count on from the price to 20p.', C(['price', 'count on', 'change'])]]);

  /* ========================= 204 Time (Ollie the owl) ========================= */
  LI(204, 'learn1', ['O’clock and half past', 'How to tell the time',
    'The long hand shows minutes. The short hand shows the hour. At o’clock the long hand points to 12. At half past it points to 6.', clk(3, 0),
    [['clock', 'tells us the time', '🕐'], ['hour hand', 'the short hand', '⏰'], ['o’clock', 'long hand on 12', '🔝'], ['half past', 'long hand on 6', '🌗']],
    [['Ollie wakes up at 7 o’clock.', clk(7, 0)],
      ['The long hand points to 12. The short hand points to 7.', clk(7, 0)],
      ['We say 7 o’clock.', B('7 o’clock')]],
    [['What time is it?', ['The long hand is on 12: o’clock.', 'The short hand is on 3.'], '3 o’clock', clk(3, 0)],
      ['What time is it?', ['The long hand is on 6: half past.', 'The short hand is between 8 and 9.'], 'Half past 8', clk(8, 30)],
      ['What time is it?', ['Long hand on 12.', 'Short hand on 11.'], '11 o’clock', clk(11, 0)]],
    ['Do not mix up the hands. The short hand is the hour.', clk(12, 30)],
    ['What time is it?', clk(5, 0), ['5 o’clock', '12 o’clock', 'half past 5'], '5 o’clock', 'Long hand on 12, short hand on 5.', 'Look at the short hand.'],
    ['Long hand on 12: o’clock. Long hand on 6: half past.', pair(clk(4, 0), clk(4, 30))]]);

  LI(204, 'learn2', ['Days and months', 'What are the days of the week and the months of the year?',
    'There are 7 days in a week and 12 months in a year. They always come in the same order.', C(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']),
    [['day', 'from morning to night', '☀️'], ['week', '7 days', '📅'], ['month', 'about 4 weeks', '🗓️'], ['year', '12 months', '🎂']],
    [['Ollie goes to school Monday to Friday.', C(['Mon', 'Tue', 'Wed', 'Thu', 'Fri'])],
      ['Then the weekend: Saturday and Sunday.', C(['Sat', 'Sun'])],
      ['The months: January, February, March and on to December.', C(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'])]],
    [['What day comes after Tuesday?', ['Say the days: Monday, Tuesday…', 'Next is Wednesday.'], 'Wednesday', C(['Mon', 'Tue', '?'])],
      ['What day comes before Friday?', ['…Wednesday, Thursday, Friday.', 'Just before Friday is Thursday.'], 'Thursday', C(['?', 'Fri'])],
      ['What month comes after June?', ['…May, June, July.'], 'July', C(['May', 'Jun', '?'])]],
    ['After Sunday the week starts again with Monday. After December comes January.', C(['Sun → Mon', 'Dec → Jan'])],
    ['How many days are in a week?', '', [5, 7, 12], 7, 'Monday to Sunday is 7 days.', 'Count them.'],
    ['7 days in a week. 12 months in a year.', C(['7 days', '12 months'])]]);

  LI(204, 'learn3', ['Order of a day', 'How can I put the events of a day in order?',
    'Things in a day happen in order: morning, afternoon, evening and night. Think what comes first.', C(['🌅 morning', '☀️ afternoon', '🌆 evening', '🌙 night']),
    [['morning', 'the start of the day', '🌅'], ['afternoon', 'after lunch', '☀️'], ['evening', 'before bed', '🌆'], ['first, next, last', 'the order things happen', '1️⃣']],
    [['Ollie wakes up, eats lunch and goes to bed.', C(['wake up', 'lunch', 'bed'])],
      ['Wake up in the morning. Lunch in the afternoon. Bed at night.', pair(clk(7, 0), clk(12, 0), clk(8, 0))],
      ['First wake up, next lunch, last bed.', C(['1 wake up', '2 lunch', '3 bed'])]],
    [['Which comes first: breakfast or dinner?', ['Breakfast is in the morning.', 'Dinner is in the evening.'], 'Breakfast', C(['🥣', '🍝'])],
      ['Put in order: go home, go to school, play at break.', ['Go to school first.', 'Then play at break.', 'Then go home.'], 'school, break, home', C(['🏫', '⚽', '🏠'])],
      ['What happens after you brush your teeth at night?', ['You brush your teeth before bed.'], 'Go to bed', C(['🪥', '🛏️'])]],
    ['Think about what really happens. You put socks on before shoes!', C(['🧦 then 👟'])],
    ['What comes <b>last</b>?', C(['lunch', 'breakfast', 'bedtime']), ['lunch', 'breakfast', 'bedtime'], 'bedtime', 'Bedtime is at the end of the day.', 'Think about the night.'],
    ['Morning, afternoon, evening, night.', C(['🌅', '☀️', '🌆', '🌙'])]]);

  LI(204, 'learn4', ['Minutes, hours, days', 'How long is a minute, an hour and a day?',
    'A minute is short. An hour is longer: 60 minutes. A day is 24 hours.', C(['minute ⏱️', 'hour 🕐', 'day 📅']),
    [['minute', 'about the time to wash your hands well', '⏱️'], ['hour', 'about the time of a film for children', '🕐'], ['day', 'from one morning to the next', '📅'], ['longer', 'takes more time', '⬆️']],
    [['Ollie brushes his teeth for about 2 minutes.', C(['🪥 2 minutes'])],
      ['A swimming lesson takes about 1 hour.', C(['🏊 1 hour'])],
      ['A trip to Granny’s takes all day.', C(['🚗 1 day'])]],
    [['Which takes about a minute: eating an apple or a school day?', ['A school day is many hours.', 'An apple takes about a minute.'], 'Eating an apple', C(['🍎', '🏫'])],
      ['Which is longer: an hour or a minute?', ['An hour is 60 minutes.'], 'An hour', C(['hour', 'minute'])],
      ['Which takes about a day: a holiday trip or blinking?', ['Blinking takes less than a second.'], 'A holiday trip', C(['✈️', '😉'])]],
    ['A minute is not very long. You cannot watch a whole film in a minute.', C(['⏱️ < 🕐 < 📅'])],
    ['Which is the <b>longest</b>?', '', ['a minute', 'an hour', 'a day'], 'a day', 'A day is 24 hours.', 'Think of how long each one is.'],
    ['Minute, hour, day: short to long.', C(['minute', 'hour', 'day'])]]);

  /* ========================= 205 Shapes and data (Finn's shape park) ========================= */
  LI(205, 'learn1', ['2D shapes', 'What are 2D shapes?',
    '2D shapes are flat. We name them by their sides and corners.', ROW(['circle', 'triangle', 'square', 'rectangle'], 70),
    [['2D', 'flat, like a drawing', '📄'], ['side', 'a straight edge', '📏'], ['corner', 'where two sides meet', '📐'], ['circle', 'round, no corners', '⚪']],
    [['Finn sees a round clock, a square window and a triangle sign.', ROW(['circle', 'square', 'triangle'], 80)],
      ['A triangle has 3 sides and 3 corners.', SH('triangle', null, 110)],
      ['Square: 4 equal sides. Rectangle: 4 sides, 2 long and 2 short.', ROW(['square', 'rectangle'], 90)]],
    [['How many sides does a triangle have?', ['Count the straight sides.', '1, 2, 3.'], '3 sides', SH('triangle', null, 110)],
      ['What shape is this?', ['It has 4 sides.', 'All the sides are the same length.'], 'A square', SH('square', null, 110)],
      ['How many corners does a circle have?', ['A circle is round all the way.', 'It has no corners.'], '0 corners', SH('circle', null, 110)]],
    ['A square turned on its corner is still a square.', SH('square', null, 100)],
    ['Which shape has <b>3 sides</b>?', ROW(['square', 'triangle', 'circle'], 70), ['square', 'triangle', 'circle'], 'triangle', 'A triangle has 3 sides.', 'Count the sides.'],
    ['Count sides and corners to name a shape.', ROW(['circle', 'triangle', 'square', 'rectangle'], 60)]]);

  LI(205, 'learn2', ['2D and 3D', 'What is the difference between a 2D shape and a 3D object?',
    '2D shapes are flat. 3D objects are solid: you can pick them up.', pair(SH('square', '#7cc4ff', 90), SH('cube', null, 100)),
    [['2D', 'flat', '📄'], ['3D', 'solid', '🧊'], ['cube', 'like a dice', '🎲'], ['sphere', 'like a ball', '⚽']],
    [['Finn has a ball and a drawing of a circle.', pair(SH('sphere', null, 100), SH('circle', '#ffb03b', 90))],
      ['The ball is 3D. The circle is flat: 2D.', pair(SH('sphere', null, 100), SH('circle', '#ffb03b', 90))],
      ['Sphere: 3D. Circle: 2D.', C(['sphere 3D', 'circle 2D'])]],
    [['Is a dice 2D or 3D?', ['You can hold a dice.', 'It is solid.'], '3D: a cube', SH('cube', null, 100)],
      ['Is a drawing of a square 2D or 3D?', ['It is flat on the paper.'], '2D', SH('square', '#7cc4ff', 100)],
      ['What 3D object is a tin of beans?', ['It has 2 flat circle ends.', 'It has a curved side.'], 'A cylinder', SH('cylinder', null, 100)]],
    ['A ball is not a circle. A ball is a sphere: it is solid.', pair(SH('sphere', null, 90), SH('circle', '#ffb03b', 80))],
    ['Which is <b>3D</b>?', ROW(['circle', 'cube', 'square'], 70), ['circle', 'cube', 'square'], 'cube', 'A cube is solid.', 'Which one could you pick up?'],
    ['Flat: 2D. Solid: 3D.', C(['📄 2D', '🧊 3D'])]]);

  LI(205, 'learn3', ['Sorting shapes', 'How can I sort shapes?',
    'We sort shapes into groups that are the same in some way, like colour, size or number of sides.', ROW(['circle', 'square', 'triangle', 'square'], 60),
    [['sort', 'put into groups', '🗂️'], ['group', 'things that go together', '📦'], ['same', 'alike', '🟰'], ['different', 'not alike', '↔️']],
    [['Finn has a pile of shapes to tidy.', ROW(['circle', 'square', 'triangle', 'circle', 'square'], 55)],
      ['He sorts them: circles here, squares there, triangles there.', '<div>' + ROW(['circle', 'circle'], 50) + ROW(['square', 'square'], 50) + ROW(['triangle'], 50) + '</div>'],
      ['3 groups: circles, squares, triangles.', C(['circles', 'squares', 'triangles'])]],
    [['Sort by sides: which shapes have 4 sides?', ['Count the sides of each.', 'Square and rectangle have 4.'], 'Square and rectangle', ROW(['square', 'triangle', 'rectangle'], 70)],
      ['Which shape does not belong? Circle, circle, square.', ['Two are round.', 'The square has corners.'], 'The square', ROW(['circle', 'circle', 'square'], 70)],
      ['Sort by round or not round.', ['Round: circle, oval.', 'Not round: square, triangle.'], 'circle, oval | square, triangle', ROW(['circle', 'square', 'oval', 'triangle'], 60)]],
    ['Choose one rule and stick to it. Sort by sides, or by colour, not both at once.', C(['one rule'])],
    ['Which one is <b>not</b> a triangle?', ROW(['triangle', 'triangle', 'square'], 70), ['the 1st', 'the 2nd', 'the 3rd'], 'the 3rd', 'The 3rd shape has 4 sides.', 'Count the sides.'],
    ['Pick a rule, then sort.', C(['rule', 'sort', 'groups'])]]);

  LI(205, 'learn4', ['Tally and pictograms', 'How do I record and display data?',
    'We count with tally marks, in groups of 5. Then we show the data in a pictogram.', FL.tally(7),
    [['data', 'things we count', '📋'], ['tally', 'a mark for each one', '✏️'], ['pictogram', 'pictures to show how many', '🖼️'], ['most', 'the biggest number', '🏆']],
    [['Finn counts the fruit at a picnic: 4 apples, 2 fish sandwiches, 3 sweets.', C(['🍎 4', '🐟 2', '🍬 3'])],
      ['He makes a tally: one mark for each.', '<div>' + FL.tally(4) + FL.tally(2) + FL.tally(3) + '</div>'],
      ['He shows it as a pictogram.', FL.picto([['Apple', 4, 'apple'], ['Fish', 2, 'fish'], ['Sweet', 3, 'sweet']])]],
    [['How many apples?', ['Find the apple row.', 'Count: 1, 2, 3, 4.'], '4 apples', FL.picto([['Apple', 4, 'apple'], ['Fish', 2, 'fish'], ['Sweet', 3, 'sweet']])],
      ['Which is the most?', ['Find the longest row.', 'Apples have 4.'], 'Apples', FL.picto([['Apple', 4, 'apple'], ['Fish', 2, 'fish'], ['Sweet', 3, 'sweet']])],
      ['How many does this tally show?', ['Four marks and a line across make 5.', '2 more: 6, 7.'], '7', FL.tally(7)]],
    ['The fifth tally mark goes across the other four.', FL.tally(5)],
    ['How many does the tally show?', FL.tally(6), [5, 6, 7], 6, 'A 5 and 1 more: 6.', 'Count the group of 5 first.'],
    ['Tally to count, pictogram to show.', C(['count', 'tally', 'pictogram'])]]);

  /* ========================= P2 worked examples ========================= */
  function W(q, steps, final, pic) { return { q: q, steps: steps, final: final, pic: pic || '' }; }
  var P2W = {
    201: { low: [function () { var n = r(2, 18); return W('What is one more than ' + n + '?', ['Start at ' + n + '.', 'Jump 1 forward.'], 'One more than ' + n + ' is ' + (n + 1) + '.', TR(n - 1, n + 2, [n, n + 1], [[n, n + 1]])); },
        function () { var n = r(3, 19); return W('What is one less than ' + n + '?', ['Start at ' + n + '.', 'Jump 1 back.'], 'One less than ' + n + ' is ' + (n - 1) + '.', TR(n - 2, n + 1, [n, n - 1], [[n, n - 1]])); }],
      medium: [function () { var t = r(1, 4), o = r(0, 9); return W('How many tens and ones in ' + (10 * t + o) + '?', ['Count the tens: ' + t + '.', 'Count the ones: ' + o + '.'], (10 * t + o) + ' is ' + t + ' ten' + (t > 1 ? 's' : '') + ' and ' + o + ' one' + (o === 1 ? '' : 's') + '.', TO(t, o)); },
        function () { var a = r(2, 9), s = pick([1, 2]); return W('What comes next? ' + a + ', ' + (a + s) + ', ' + (a + 2 * s) + ', ?', ['Each jump is ' + s + '.', (a + 2 * s) + ' + ' + s + ' = ' + (a + 3 * s) + '.'], 'The next number is ' + (a + 3 * s) + '.', C([a, a + s, a + 2 * s, '?'])); }],
      high: [function () { var s = pick([2, 5, 10]), a = s * r(1, 3); return W('What comes next? ' + a + ', ' + (a + s) + ', ' + (a + 2 * s) + ', ?', ['Find the jump: ' + s + '.', 'Count on ' + s + ' from ' + (a + 2 * s) + '.'], 'The next number is ' + (a + 3 * s) + '.', C([a, a + s, a + 2 * s, '?'])); },
        function () { var x = [r(1, 9), r(10, 19), r(20, 40)].sort(function () { return Math.random() - 0.5; }), o = x.slice().sort(function (a, b) { return a - b; }); return W('Put ' + x.join(', ') + ' in order, smallest first.', ['Look at the tens first.', 'The smallest has the fewest tens.'], o.join(', '), C(x)); }] },
    202: { low: [function () { var a = r(1, 5), b = r(1, 5); return W('What is ' + a + ' + ' + b + '?', ['Count ' + a + ', then count on ' + b + '.'], a + ' + ' + b + ' = ' + (a + b), G(a, b, 'apple')); },
        function () { var a = r(2, 9), b = r(1, a - 1); return W('Benny has ' + a + ' apples. He eats ' + b + '. How many are left?', ['Start with ' + a + '.', 'Take away ' + b + '.'], a + ' − ' + b + ' = ' + (a - b), T(a, 'apple')); }],
      medium: [function () { var a = r(2, 9); return W('What is ' + a + ' + ' + (a + 1) + '?', ['Double ' + a + ' is ' + 2 * a + '.', 'One more is ' + (2 * a + 1) + '.'], a + ' + ' + (a + 1) + ' = ' + (2 * a + 1), G(a, a + 1, 'apple')); },
        function () { var b = r(1, 3), a = r(6, 9); return W('What is ' + b + ' + ' + a + '?', ['Start at the bigger number: ' + a + '.', 'Count on ' + b + '.'], b + ' + ' + a + ' = ' + (a + b), TR(a - 1, a + b + 1, [a, a + b])); }],
      high: [function () { var a = r(1, 9), c = r(2, 9); return W('What is ' + a + ' + ' + c + ' + ' + (10 - a) + '?', ['Find two numbers that make 10: ' + a + ' and ' + (10 - a) + '.', '10 + ' + c + ' = ' + (10 + c) + '.'], 'The answer is ' + (10 + c) + '.', B(a + ' + ' + c + ' + ' + (10 - a))); },
        function () { var b = r(2, 8); return W('What is 10 − ' + b + '?', ['What goes with ' + b + ' to make 10?', b + ' + ' + (10 - b) + ' = 10.'], '10 − ' + b + ' = ' + (10 - b), FL.frame(b, 10 - b)); }] },
    203: { low: [function () { var c = pick([[5, 2], [10, 5], [10, 2], [5, 1], [2, 2]]); return W('How much is ' + c[0] + 'p + ' + c[1] + 'p?', ['Start with the bigger coin: ' + c[0] + 'p.', 'Count on ' + c[1] + '.'], 'It makes ' + (c[0] + c[1]) + 'p.', COIN(c)); },
        function () { var c = pick([1, 2, 5, 10, 20, 50]); return W('How much is this coin worth?', ['Read the number on the coin.'], 'It is ' + c + 'p.', COIN([c])); }],
      medium: [function () { var c = pick([[5, 1], [5, 2], [5, 2, 1], [10, 1], [10, 2], [10, 2, 1], [10, 5], [10, 5, 1], [10, 5, 2]]), p = c.reduce(function (a, b) { return a + b; }, 0);
        return W('A toy costs ' + p + 'p. Which coins could you use?', ['Start with the biggest coin that fits: ' + c[0] + 'p.', 'Add smaller coins until you reach ' + p + 'p.'], c.join('p + ') + 'p = ' + p + 'p', COIN(c)); },
        function () { var c = pick([[10, 5, 2], [5, 5, 1], [10, 2, 1], [5, 2, 2]]); var t = c[0] + c[1] + c[2]; return W('How much is ' + c.join('p + ') + 'p?', [c[0] + ' + ' + c[1] + ' = ' + (c[0] + c[1]) + '.', (c[0] + c[1]) + ' + ' + c[2] + ' = ' + t + '.'], 'It makes ' + t + 'p.', COIN(c)); }],
      high: [function () { var p = r(11, 19); return W('A toy costs ' + p + 'p. You pay 20p. What is the change?', ['Count on from ' + p + ' to 20.', 'That is ' + (20 - p) + ' jumps.'], 'The change is ' + (20 - p) + 'p.', FL.trackP(p, 20, [p, 20])); },
        function () { var p = r(3, 9); return W('A sweet costs ' + p + 'p. You pay 10p. What is the change?', ['Count on from ' + p + ' to 10.', 'That is ' + (10 - p) + '.'], 'The change is ' + (10 - p) + 'p.', FL.trackP(p, 10, [p, 10])); }] },
    204: { low: [function () { var h = r(1, 12); return W('What time does the clock show?', ['The long hand is on 12: o’clock.', 'The short hand is on ' + h + '.'], h + ' o’clock', clk(h, 0)); },
        function () { var D = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], i = r(0, 5); return W('What day comes after ' + D[i] + '?', ['Say the days in order.', 'After ' + D[i] + ' comes ' + D[i + 1] + '.'], D[i + 1], C(D.slice(0, 7).map(function (d) { return d.slice(0, 3); }))); }],
      medium: [function () { var h = r(1, 12); return W('What time does the clock show?', ['The long hand is on 6: half past.', 'The short hand is just past ' + h + '.'], 'Half past ' + h, clk(h, 30)); },
        function () { var M = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'], i = r(0, 10); return W('What month comes after ' + M[i] + '?', ['Say the months in order.', 'After ' + M[i] + ' comes ' + M[i + 1] + '.'], M[i + 1], C(M.map(function (m) { return m.slice(0, 3); }))); }],
      high: [function () { var h = r(1, 10), d = r(1, 2); return W('A party starts at ' + h + ' o’clock and ends at ' + (h + d) + ' o’clock. How long is it?', ['Count on the hours from ' + h + ' to ' + (h + d) + '.'], d + ' hour' + (d > 1 ? 's' : ''), pair(clk(h, 0), clk(h + d, 0))); },
        function () { var e = pick([['breakfast', 'lunch', 'dinner'], ['wake up', 'go to school', 'go to bed'], ['get dressed', 'play outside', 'have a bath']]); return W('Put in order: ' + e.slice().reverse().join(', ') + '.', ['What happens in the morning?', 'What happens last, at night?'], e.join(', '), C(e.slice().reverse())); }] },
    205: { low: [function () { var s = pick([['triangle', 3], ['square', 4], ['rectangle', 4], ['pentagon', 5]]); return W('How many sides does a ' + s[0] + ' have?', ['Count the straight sides.'], 'A ' + s[0] + ' has ' + s[1] + ' sides.', SH(s[0], null, 110)); },
        function () { var n = r(3, 9); return W('How many does this tally show?', ['A group with a line across is 5.', 'Count on the rest.'], n, FL.tally(n)); }],
      medium: [function () { var s = pick([['cube', 'like a dice'], ['sphere', 'like a ball'], ['cylinder', 'like a tin'], ['cone', 'like an ice-cream cone']]); return W('What is this 3D object called?', ['It is solid.', 'It looks ' + s[1] + '.'], 'A ' + s[0], SH(s[0], null, 110)); },
        function () { var a = r(3, 6), b = r(1, a - 1); return W('How many more apples than fish?', ['Apples: ' + a + '. Fish: ' + b + '.', a + ' − ' + b + ' = ' + (a - b) + '.'], (a - b) + ' more apples', FL.picto([['Apple', a, 'apple'], ['Fish', b, 'fish']])); }],
      high: [function () { var a = r(2, 5), b = r(1, 4), c = r(1, 4); return W('How many altogether?', ['Count each row: ' + a + ', ' + b + ' and ' + c + '.', 'Add them: ' + (a + b + c) + '.'], (a + b + c) + ' altogether', FL.picto([['Apple', a, 'apple'], ['Fish', b, 'fish'], ['Sweet', c, 'sweet']])); },
        function () { var s = pick([['square', '2D'], ['cube', '3D'], ['circle', '2D'], ['sphere', '3D'], ['triangle', '2D'], ['cylinder', '3D']]); return W('Is this shape 2D or 3D?', ['Is it flat, or could you pick it up?'], 'It is ' + s[1] + '.', SH(s[0], null, 100)); }] }
  };
  Object.keys(P2W).forEach(function (n) { FL.workedSets(+n, P2W[n]); });
})();
