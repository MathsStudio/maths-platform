/* fl_l3.js: P3 "Learn it" lessons (one per workbook question) and worked-example sets for topics 301 and 303 to 308.
   Topic 302 is in fl_learn.js. Pictures reuse the story helpers so each lesson looks like its story. */
(function () {
  'use strict';
  var FL = window.FL, BT = window.BT; if (!FL || !FL.LI || !FL.KS3) return;
  var V = BT.sv, INK = '#2b2340', K = FL.KS3, B = FL.big, C = FL.cards, SAY = FL.says, T = FL.things, TR = FL.track, TO = FL.tensOnes, PIE = FL.pie, COIN = FL.coins, SH = FL.shape, ROW = FL.shapeRow, LI = FL.LI;

  /* ---------- small pictures shared by the First level lessons ---------- */
  function pair() { return '<div style="display:flex;gap:14px;justify-content:center;align-items:center;flex-wrap:wrap">' + [].slice.call(arguments).join('') + '</div>'; }
  function seq(list, kind) { return '<div style="display:flex;gap:6px;justify-content:center;align-items:center;flex-wrap:wrap">' + list.map(function (n) { return '<div style="max-width:' + (n > 5 ? 190 : 110) + 'px">' + T(n, kind, 5) + '</div>'; }).join('<b style="font-size:1.4em">→</b>') + '</div>'; }
  function fbar(n, k, w) { var W = w || 260, s = ''; for (var i = 0; i < n; i++) s += '<rect x="' + (10 + i * W / n) + '" y="10" width="' + (W / n) + '" height="60" fill="' + (i < k ? '#ffb03b' : '#fff') + '" stroke="' + INK + '" stroke-width="3"/>'; return FL.svg(W + 20, 80, 'a bar in ' + n + ' equal parts with ' + k + ' shaded', s, W + 40); }
  function badBar() { return FL.svg(280, 80, 'a bar cut into two different sized parts', '<rect x="10" y="10" width="180" height="60" fill="#ffb03b" stroke="' + INK + '" stroke-width="3"/><rect x="190" y="10" width="80" height="60" fill="#fff" stroke="' + INK + '" stroke-width="3"/>', 300); }
  function cubes(n, col) { var s = ''; for (var i = 0; i < n; i++) s += '<rect x="' + (10 + i * 28) + '" y="10" width="28" height="28" fill="' + (col || '#4aa8ff') + '" stroke="' + INK + '" stroke-width="2"/>'; return FL.svg(n * 28 + 20, 48, n + ' cubes in a line', s, Math.min(n * 40 + 30, 460)); }
  function clocks(h1, m1, h2, m2) { return pair('<div style="text-align:center;font-weight:800">Start' + K.clk(h1, m1) + '</div>', '<b style="font-size:1.6em">→</b>', '<div style="text-align:center;font-weight:800">End' + K.clk(h2, m2) + '</div>'); }
  function arrow(deg, label) { return '<div style="text-align:center;font-weight:800">' + FL.svg(100, 100, 'an arrow', '<circle cx="50" cy="50" r="44" fill="#fff8e1" stroke="' + INK + '" stroke-width="2"/><g transform="rotate(' + deg + ' 50 50)"><path d="M50 82V22" stroke="#e0457b" stroke-width="8" stroke-linecap="round"/><path d="M50 12 66 34H34z" fill="#e0457b"/></g>', 100) + (label || '') + '</div>'; }
  function mirror(k, ok) { return '<div style="position:relative;display:inline-block">' + SH(k, '#7cc4ff', 120) + '<div style="position:absolute;top:-4px;bottom:-4px;left:' + (ok === false ? '30%' : '50%') + ';border-left:4px dashed #e0457b"></div></div>'; }
  FL.KL = { pair: pair, seq: seq, fbar: fbar, badBar: badBar, cubes: cubes, clocks: clocks, arrow: arrow, mirror: mirror };

  /* ========================= 301 Numbers to 100 and beyond (Captain Pip) ========================= */
  LI(301, 'learn1', ['Number patterns', 'How can I use number patterns to work out a sequence?',
    'A sequence is a list of numbers that follows a rule. Find the rule, check it, then use it to find the next number.', SAY('pirate', '5, 10, 15, 20, ?'),
    [['sequence', 'numbers in order that follow a pattern', '🔢'], ['rule', 'what you do each time, like add 2', '⚙️'], ['count on', 'go up in equal steps', '➕'], ['count back', 'go down in equal steps', '➖']],
    [['Captain Pip opens treasure chests: 2 coins, then 4, then 6, then 8.', seq([2, 4, 6, 8], 'star')],
      ['On a number line each jump is the same: 2.', TR(0, 10, [2, 4, 6, 8], [[2, 4], [4, 6], [6, 8]])],
      ['The rule is add 2. The next number is 10.', B('2, 4, 6, 8, 10')]],
    [['What comes next? 10, 20, 30, 40, ?', ['Find the gap: 10 to 20 is 10.', 'Check: 20 to 30 is 10 too. The rule is add 10.', '40 + 10 = 50.'], 'The next number is 50.', C(['10', '20', '30', '40', '?'])],
      ['What comes next? 25, 30, 35, 40, ?', ['25 to 30 is 5.', 'The rule is add 5.', '40 + 5 = 45.'], 'The next number is 45.', C(['25', '30', '35', '40', '?'])],
      ['What comes next? 18, 16, 14, 12, ?', ['The numbers are getting smaller.', '18 to 16 is 2 less. The rule is take away 2.', '12 − 2 = 10.'], 'The next number is 10.', C(['18', '16', '14', '12', '?'])]],
    ['Check that the rule works for every jump, not just the first one.', C(['3, 6, 9, 12', 'add 3 every time ✓'])],
    ['What comes next? <b>5, 10, 15, 20, ?</b>', '', [22, 25, 30], 25, 'The rule is add 5, and 20 + 5 = 25.', 'How much does it go up each time?'],
    ['Find the rule, check it, then use it.', C(['find the gap', 'check the rule', 'use the rule'])]]);

  LI(301, 'learn2', ['Hundreds, tens, ones', 'What are hundreds, tens and ones?',
    'In a 3-digit number each digit has a value. In 245 the 2 is 2 hundreds, the 4 is 4 tens and the 5 is 5 ones.', K.hto(2, 4, 5),
    [['digit', 'one of 0, 1, 2, 3, 4, 5, 6, 7, 8, 9', '🔢'], ['hundreds', 'groups of 100', '💯'], ['tens', 'groups of 10', '🔟'], ['ones', 'single ones', '1️⃣']],
    [['Captain Pip has 1 bag of 100 coins, 3 stacks of 10 and 6 single coins.', pair(K.coinsBox(1), TO(3, 6))],
      ['In a place value chart: 1 hundred, 3 tens and 6 ones.', K.hto(1, 3, 6)],
      ['We write 100 + 30 + 6 = 136.', B('100 + 30 + 6 = 136')]],
    [['What is the value of the 4 in 342?', ['Put 342 in a chart: 3 hundreds, 4 tens, 2 ones.', 'The 4 is in the tens column.', '4 tens is 40.'], 'The 4 is worth 40.', K.hto(3, 4, 2)],
      ['Write 5 hundreds, 2 tens and 7 ones as a number.', ['Hundreds: 5.', 'Tens: 2.', 'Ones: 7.'], 'The number is 527.', K.hto(5, 2, 7)],
      ['Partition 608.', ['6 hundreds is 600.', '0 tens: the zero keeps the tens place.', '8 ones is 8.'], '608 = 600 + 8', K.hto(6, 0, 8)]],
    ['Do not forget the zero. 4 hundreds and 5 ones is 405, not 45.', C(['405 ✓', '45 ✗'])],
    ['What is the value of the <b>7</b> in 375?', K.hto(3, 7, 5), [7, 70, 700], 70, 'The 7 is in the tens column, so it is worth 70.', 'Which column is the 7 in?'],
    ['Where a digit sits tells you what it is worth.', K.hto('H', 'T', 'O')]]);

  LI(301, 'learn3', ['Comparing numbers', 'How do I compare and order numbers to 1000?',
    'Compare the hundreds first. If they are the same, compare the tens. Then compare the ones.', SAY('pirate', '324 or 342?'),
    [['compare', 'look to see which is bigger', '⚖️'], ['bigger (>)', 'more than', '⬆️'], ['smaller (<)', 'less than', '⬇️'], ['order', 'put in a line from smallest to biggest', '📶']],
    [['Two chests: one has 324 coins and the other has 342.', C(['324 coins', '342 coins'])],
      ['The hundreds are the same. Look at the tens: 2 tens and 4 tens.', pair(K.hto(3, 2, 4), K.hto(3, 4, 2))],
      ['4 tens is more than 2 tens, so 342 is bigger.', B('342 > 324')]],
    [['Which is bigger: 518 or 581?', ['Hundreds: 5 and 5, the same.', 'Tens: 1 and 8. 8 tens is more.', 'So 581 is bigger.'], '581 > 518', C(['518', '581'])],
      ['Order 207, 270 and 72 from smallest to biggest.', ['72 has no hundreds, so it is the smallest.', '207 and 270 both have 2 hundreds.', 'Tens: 0 and 7, so 207 comes before 270.'], '72, 207, 270', C(['207', '270', '72'])],
      ['Which is smaller: 639 or 693?', ['Hundreds: both 6.', 'Tens: 3 and 9.', '3 tens is less.'], '639 < 693', C(['639', '693'])]],
    ['Start with the biggest place, not the last digit. 199 is smaller than 201, even though 9 is bigger than 1.', C(['199 < 201 ✓'])],
    ['Which is the biggest?', '', [456, 465, 546], 546, '546 has 5 hundreds, the most.', 'Compare the hundreds first.'],
    ['Hundreds first, then tens, then ones.', C(['hundreds', 'tens', 'ones'])]]);

  LI(301, 'learn4', ['Rounding to 10', 'How do I round numbers to the nearest 10?',
    'Rounding finds the nearest ten. Look at the ones digit: 5 or more rounds up, 4 or less rounds down.', TR(30, 40, [34]),
    [['round', 'change to the nearest ten', '🎯'], ['nearest', 'closest', '📍'], ['round up', 'go to the next ten', '⬆️'], ['round down', 'go back to the ten before', '⬇️']],
    [['The pirate ship is at 37 on the map. Is it closer to 30 or to 40?', TR(30, 40, [37])],
      ['37 is 3 away from 40 and 7 away from 30. 40 is nearer.', TR(30, 40, [37, 40], [[37, 40]])],
      ['37 rounded to the nearest 10 is 40.', B('37 → 40')]],
    [['Round 23 to the nearest 10.', ['23 is between 20 and 30.', 'The ones digit is 3. That is 4 or less.', 'Round down.'], '23 rounds to 20.', TR(20, 30, [23])],
      ['Round 68 to the nearest 10.', ['68 is between 60 and 70.', 'The ones digit is 8. That is 5 or more.', 'Round up.'], '68 rounds to 70.', TR(60, 70, [68])],
      ['Round 45 to the nearest 10.', ['45 is between 40 and 50.', 'It is exactly halfway.', 'When the ones digit is 5, we round up.'], '45 rounds to 50.', TR(40, 50, [45])]],
    ['Five rounds up, not down. 35 rounds to 40.', C(['35 → 40 ✓', '35 → 30 ✗'])],
    ['Round <b>52</b> to the nearest 10.', TR(50, 60, [52]), [50, 55, 60], 50, 'The ones digit is 2, so round down to 50.', 'Look at the ones digit.'],
    ['0 to 4: round down. 5 to 9: round up.', C(['0–4 ⬇️', '5–9 ⬆️'])]]);

  /* ========================= 303 Multiplication (Benny the bear bakes) ========================= */
  LI(303, 'learn1', ['Adding to multiply', 'How can adding help me multiply?',
    'Multiplying is adding equal groups. 3 groups of 4 is 4 + 4 + 4 = 12, and we write 3 × 4 = 12.', K.trays(3, 4),
    [['equal groups', 'groups with the same number in each', '🧁'], ['multiply (×)', 'lots of, or groups of', '✖️'], ['times', 'another word for multiply', '🔁'], ['repeated adding', 'adding the same number again and again', '➕']],
    [['Benny bakes 3 trays of buns with 5 buns on each tray.', K.trays(3, 5)],
      ['Draw 3 rows of 5 dots.', K.dots(3, 5)],
      ['5 + 5 + 5 = 15, so 3 × 5 = 15.', B('5 + 5 + 5 = 15<br>3 × 5 = 15')]],
    [['What is 4 groups of 2?', ['Write it as adding: 2 + 2 + 2 + 2.', 'Count in twos: 2, 4, 6, 8.', 'So 4 × 2 = 8.'], '4 × 2 = 8', K.trays(4, 2)],
      ['What is 3 × 10?', ['3 lots of 10 is 10 + 10 + 10.', 'Count in tens: 10, 20, 30.'], '3 × 10 = 30', K.dots(3, 10)],
      ['5 plates have 2 cakes each. How many cakes?', ['That is 5 groups of 2.', '2 + 2 + 2 + 2 + 2.', 'Count in twos: 2, 4, 6, 8, 10.'], '5 × 2 = 10 cakes', K.trays(5, 2)]],
    ['The groups must be equal. 3 + 4 + 5 is not a times fact.', C(['5 + 5 + 5 = 3 × 5 ✓', '3 + 4 + 5 ✗'])],
    ['Which times fact is <b>2 + 2 + 2</b>?', '', ['2 × 2', '3 × 2', '6 × 2'], '3 × 2', 'There are 3 twos, so it is 3 × 2.', 'Count how many 2s there are.'],
    ['Equal groups: add them, or multiply.', C(['equal groups', 'add again and again', '×'])]]);

  LI(303, 'learn2', ['Arrays', 'How can an array help me multiply?',
    'An array is things set out in rows. Count the rows, count how many are in each row, then multiply.', K.dots(3, 4),
    [['array', 'things set out in equal rows', '🔲'], ['row', 'a line going across', '↔️'], ['column', 'a line going up and down', '↕️'], ['multiply', 'rows × how many in each row', '✖️']],
    [['Benny puts cookies on a tray in 2 rows of 5.', T(10, 'sweet', 5)],
      ['Draw it as dots: 2 rows, 5 in each row.', K.dots(2, 5)],
      ['2 rows of 5 is 2 × 5 = 10.', B('2 × 5 = 10')]],
    [['How many dots in 3 rows of 4?', ['Rows: 3.', 'In each row: 4.', 'Count in fours: 4, 8, 12.'], '3 × 4 = 12', K.dots(3, 4)],
      ['How many dots in 5 rows of 2?', ['Rows: 5.', 'In each row: 2.', 'Count in twos: 2, 4, 6, 8, 10.'], '5 × 2 = 10', K.dots(5, 2)],
      ['How many dots in 4 rows of 5?', ['Rows: 4.', 'In each row: 5.', 'Count in fives: 5, 10, 15, 20.'], '4 × 5 = 20', K.dots(4, 5)]],
    ['Every row must be the same length, or it is not an array.', B('● ● ●<br>● ● ●<br>● ● &nbsp;&nbsp;✗')],
    ['How many dots?', K.dots(2, 10), [12, 20, 22], 20, '2 rows of 10 is 20.', 'Count the rows, then count in tens.'],
    ['Rows × how many in each row.', C(['rows', 'in each row', 'multiply'])]]);

  LI(303, 'learn3', ['Turnaround facts', 'Which way round should I multiply two numbers?',
    'You can multiply in either order and get the same answer. 2 × 5 and 5 × 2 are both 10.', pair(K.dots(2, 5), K.dots(5, 2)),
    [['turnaround fact', 'the same numbers, swapped round', '🔄'], ['order', 'which number comes first', '1️⃣'], ['multiply', 'groups of', '✖️'], ['same answer', 'it does not change', '✅']],
    [['Benny has 2 trays of 5 buns. Turn them round and it is 5 trays of 2. Still 10 buns.', pair(K.trays(2, 5), K.trays(5, 2))],
      ['Turn an array round and it has the same number of dots.', pair(K.dots(2, 5), K.dots(5, 2))],
      ['We write 2 × 5 = 10 and 5 × 2 = 10.', B('2 × 5 = 5 × 2 = 10')]],
    [['Use 3 × 10 = 30 to find 10 × 3.', ['10 × 3 has the same numbers, swapped.', 'Swapping does not change the answer.'], '10 × 3 = 30', B('3 × 10 = 10 × 3')],
      ['What is 2 × 7?', ['Turn it round: 7 × 2 is 7 twos.', 'Count in twos: 2, 4, 6, 8, 10, 12, 14.'], '2 × 7 = 14', K.dots(2, 7)],
      ['Is 4 × 5 the same as 5 × 4?', ['4 rows of 5 is 20.', '5 rows of 4 is 20.', 'Yes, they are turnaround facts.'], '4 × 5 = 5 × 4 = 20', pair(K.dots(4, 5), K.dots(5, 4))]],
    ['Turnarounds work for multiplying, but not for sharing. 10 ÷ 2 is not the same as 2 ÷ 10.', C(['5 × 2 = 2 × 5 ✓', '10 ÷ 2 ✓', '2 ÷ 10 ✗'])],
    ['6 × 5 = 30. What is <b>5 × 6</b>?', '', [11, 30, 56], 30, 'It is a turnaround fact, so it is 30.', 'The numbers are just swapped.'],
    ['Swap the numbers: same answer.', B('3 × 4 = 4 × 3')]]);

  LI(303, 'learn4', ['2, 5 and 10 times tables', 'How can counting in 2s, 5s and 10s help me learn times tables?',
    'Counting in equal steps gives you the times table. Count in 5s: 5, 10, 15, 20. So 4 × 5 = 20.', TR(0, 20, [5, 10, 15, 20], [[0, 5], [5, 10], [10, 15], [15, 20]]),
    [['count in 2s', '2, 4, 6, 8, 10', '2️⃣'], ['count in 5s', '5, 10, 15, 20, 25', '5️⃣'], ['count in 10s', '10, 20, 30, 40, 50', '🔟'], ['times table', 'a list of multiplying facts', '📋']],
    [['Benny puts 2 cookies on each of 4 plates.', K.trays(4, 2)],
      ['Jump in 2s on a number line: 2, 4, 6, 8.', TR(0, 10, [2, 4, 6, 8], [[0, 2], [2, 4], [4, 6], [6, 8]])],
      ['4 jumps of 2 is 8, so 4 × 2 = 8.', B('4 × 2 = 8')]],
    [['What is 6 × 2?', ['Count in 2s six times.', '2, 4, 6, 8, 10, 12.'], '6 × 2 = 12', C(['2', '4', '6', '8', '10', '12'])],
      ['What is 3 × 5?', ['Count in 5s three times.', '5, 10, 15.'], '3 × 5 = 15', C(['5', '10', '15'])],
      ['What is 7 × 10?', ['Count in 10s seven times.', '10, 20, 30, 40, 50, 60, 70.'], '7 × 10 = 70', C(['10', '20', '30', '40', '50', '60', '70'])]],
    ['Keep track of how many jumps you make. Hold up a finger for each one.', C(['5 ☝️', '10 ✌️', '15 🤟'])],
    ['What is <b>4 × 10</b>?', '', [14, 40, 400], 40, '10, 20, 30, 40.', 'Count in tens four times.'],
    ['The 2s end in 0, 2, 4, 6 or 8. The 5s end in 0 or 5. The 10s end in 0.', C(['2s: 0 2 4 6 8', '5s: 0 or 5', '10s: 0'])]]);

  /* ========================= 304 Division (Molly the mouse's picnic) ========================= */
  LI(304, 'learn1', ['Sharing equally', 'How can sharing equally help me divide?',
    'Dividing can mean sharing equally. Give one to each group at a time until they are all gone.', SAY('mouse', '12 ÷ 3 = ?'),
    [['share', 'give out', '🤲'], ['equally', 'everyone gets the same', '⚖️'], ['divide (÷)', 'share equally or make equal groups', '➗'], ['each', 'every one of them', '👆']],
    [['Molly shares 12 sweets between 3 friends.', T(12, 'sweet', 6)],
      ['Give one to each friend in turn. Each friend gets 4.', K.trays(3, 4)],
      ['We write 12 ÷ 3 = 4.', B('12 ÷ 3 = 4')]],
    [['Share 10 sweets between 2 friends.', ['Give one to each friend, again and again.', 'Each friend gets 5.', 'Check: 5 + 5 = 10.'], '10 ÷ 2 = 5', K.trays(2, 5)],
      ['Share 8 sweets between 4 plates.', ['Put one on each plate, then again.', 'Each plate gets 2.', 'Check: 4 × 2 = 8.'], '8 ÷ 4 = 2', K.trays(4, 2)],
      ['Share 15 sweets between 5 mice.', ['One each, round and round.', 'Each mouse gets 3.', 'Check: 5 × 3 = 15.'], '15 ÷ 5 = 3', K.trays(5, 3)]],
    ['Everyone must get the same. 3 and 7 is not sharing 10 equally.', C(['5 and 5 ✓', '3 and 7 ✗'])],
    ['Share <b>6</b> cakes between <b>2</b> friends. How many each?', T(6, 'sweet', 6), [2, 3, 4], 3, '6 ÷ 2 = 3.', 'Give one each until they are gone.'],
    ['Share one at a time until they are all gone. Everyone gets the same.', C(['share', 'equally', '÷'])]]);

  LI(304, 'learn2', ['Taking away groups', 'How can subtracting help me with division?',
    'Dividing can mean making groups. Take away the group size again and again, and count how many times.', TR(0, 12, [0, 4, 8, 12], [[12, 8], [8, 4], [4, 0]]),
    [['group', 'a set of things together', '📦'], ['take away', 'subtract', '➖'], ['how many groups', 'count the groups you make', '🔢'], ['divide', 'make equal groups', '➗']],
    [['Molly has 12 cheese bites. She puts 4 in each box. How many boxes?', T(12, 'sweet', 4)],
      ['Jump back 4 each time: 12, 8, 4, 0. That is 3 jumps.', TR(0, 12, [0, 4, 8, 12], [[12, 8], [8, 4], [4, 0]])],
      ['3 groups of 4, so 12 ÷ 4 = 3.', B('12 ÷ 4 = 3')]],
    [['How many groups of 2 are in 10?', ['Take away 2 again and again: 10, 8, 6, 4, 2, 0.', 'Count the jumps: 5.'], '10 ÷ 2 = 5', TR(0, 10, [0, 2, 4, 6, 8, 10], [[10, 8], [8, 6], [6, 4], [4, 2], [2, 0]])],
      ['How many groups of 5 are in 20?', ['20, then 15, then 10, then 5, then 0.', 'That is 4 jumps.'], '20 ÷ 5 = 4', TR(0, 20, [0, 5, 10, 15, 20], [[20, 15], [15, 10], [10, 5], [5, 0]])],
      ['How many groups of 10 are in 30?', ['30, then 20, then 10, then 0.', 'That is 3 jumps.'], '30 ÷ 10 = 3', C(['30', '20', '10', '0'])]],
    ['Count the jumps, not the numbers you land on.', C(['12 → 8 → 4 → 0', '3 jumps ✓'])],
    ['How many groups of <b>3</b> are in <b>9</b>?', TR(0, 9, [0, 3, 6, 9]), [2, 3, 4], 3, '9, 6, 3, 0: that is 3 jumps.', 'Jump back 3 each time.'],
    ['Take away the group size until you reach 0. Count the jumps.', C(['take away', 'again', 'count the jumps'])]]);

  LI(304, 'learn3', ['Arrays for dividing', 'How can an array help me with division?',
    'An array shows a times fact and a dividing fact. 3 rows of 5 is 15, so 15 ÷ 3 = 5.', K.dots(3, 5),
    [['array', 'things set out in equal rows', '🔲'], ['row', 'a line going across', '↔️'], ['in each row', 'how many in one row', '👉'], ['fact family', 'times and dividing facts that go together', '👨‍👩‍👧']],
    [['Molly sets out 15 sandwiches in 3 rows.', T(15, 'sweet', 5)],
      ['As an array: 3 rows, 5 in each row.', K.dots(3, 5)],
      ['3 × 5 = 15, so 15 ÷ 3 = 5 and 15 ÷ 5 = 3.', B('15 ÷ 3 = 5<br>15 ÷ 5 = 3')]],
    [['Use the array to find 8 ÷ 2.', ['There are 8 dots in 2 rows.', 'Count one row: 4.'], '8 ÷ 2 = 4', K.dots(2, 4)],
      ['20 dots in 4 rows. How many in each row?', ['Make 4 rows.', 'Each row has 5.', 'Check: 4 × 5 = 20.'], '20 ÷ 4 = 5', K.dots(4, 5)],
      ['Use 2 × 10 = 20 to find 20 ÷ 10.', ['2 rows of 10 make 20.', 'So 20 in groups of 10 makes 2 groups.'], '20 ÷ 10 = 2', K.dots(2, 10)]],
    ['In a dividing fact the biggest number comes first: 15 ÷ 3, not 3 ÷ 15.', C(['15 ÷ 3 ✓', '3 ÷ 15 ✗'])],
    ['12 dots in 3 rows. How many in each row?', K.dots(3, 4), [3, 4, 9], 4, '3 × 4 = 12, so 12 ÷ 3 = 4.', 'Count one row.'],
    ['One array gives two times facts and two dividing facts.', C(['3 × 5', '5 × 3', '15 ÷ 3', '15 ÷ 5'])]]);

  LI(304, 'learn4', ['Halving', 'How can halving help me divide?',
    'Halving means splitting into 2 equal parts. It is the same as dividing by 2.', PIE(2, 1),
    [['half', 'one of 2 equal parts', '🌗'], ['halve', 'split into 2 equal parts', '✂️'], ['double', 'the opposite of halving', '👯'], ['divide by 2', 'the same as halving', '➗']],
    [['Molly splits 8 carrots into two equal piles.', K.trays(2, 4)],
      ['8 split into 2 equal parts is 4 and 4.', K.dots(2, 4)],
      ['Half of 8 is 4, and 8 ÷ 2 = 4.', B('half of 8 = 4<br>8 ÷ 2 = 4')]],
    [['What is half of 10?', ['Split 10 into 2 equal parts.', '5 and 5.', 'Check: double 5 is 10.'], 'Half of 10 is 5.', K.trays(2, 5)],
      ['What is half of 16?', ['Think of a double: double 8 is 16.', 'So half of 16 is 8.'], 'Half of 16 is 8.', K.trays(2, 8)],
      ['What is half of 30?', ['Split 30 into 20 and 10.', 'Half of 20 is 10. Half of 10 is 5.', '10 + 5 = 15.'], 'Half of 30 is 15.', B('20 + 10<br>10 + 5 = 15')]],
    ['Halves must be equal. 3 and 5 are not halves of 8.', C(['4 and 4 ✓', '3 and 5 ✗'])],
    ['What is half of <b>14</b>?', '', [6, 7, 8], 7, 'Double 7 is 14, so half of 14 is 7.', 'Which number doubled makes 14?'],
    ['Halving undoes doubling.', C(['double 6 = 12', 'half of 12 = 6'])]]);

  /* ========================= 305 Fractions (Finn the fox) ========================= */
  LI(305, 'learn1', ['What is a fraction?', 'What is a fraction?',
    'A fraction is a part of a whole that has been cut into equal parts.', PIE(4, 1),
    [['whole', 'all of it', '🍕'], ['equal parts', 'parts that are all the same size', '⚖️'], ['half', 'one of 2 equal parts', '🌗'], ['quarter', 'one of 4 equal parts', '🍰']],
    [['Finn cuts a pizza into 4 equal slices and eats 1. He ate one quarter.', PIE(4, 1)],
      ['Draw a bar and split it into 2 equal parts. Shade 1. That is one half.', fbar(2, 1)],
      ['We write one half as 1/2 and one quarter as 1/4.', B('1/2 &nbsp; 1/4')]],
    [['A cake is cut into 2 equal pieces. What is one piece called?', ['There are 2 equal parts.', 'One of 2 equal parts is a half.'], 'One half: 1/2', PIE(2, 1)],
      ['A pizza is cut into 4 equal slices. What is one slice called?', ['There are 4 equal parts.', 'One of 4 equal parts is a quarter.'], 'One quarter: 1/4', PIE(4, 1)],
      ['A bar is cut into 3 equal parts. What is one part called?', ['There are 3 equal parts.', 'One of 3 equal parts is a third.'], 'One third: 1/3', fbar(3, 1)]],
    ['The parts must be the same size. This bar is not cut into halves.', badBar()],
    ['What fraction is shaded?', PIE(4, 1), ['1/2', '1/3', '1/4'], '1/4', '1 of 4 equal parts is one quarter.', 'Count the equal parts.'],
    ['A fraction is part of a whole cut into equal parts.', pair(PIE(2, 1), PIE(3, 1), PIE(4, 1))]]);

  LI(305, 'learn2', ['Writing fractions', 'How to write fractions',
    'The bottom number says how many equal parts the whole has. The top number says how many of those parts we have.', B('3/4'),
    [['top number', 'how many parts we have', '⬆️'], ['bottom number', 'how many equal parts in the whole', '⬇️'], ['fraction line', 'the line between the numbers', '➖'], ['three quarters', '3 parts out of 4', '🥧']],
    [['Finn has a pizza in 4 slices. He gives 3 to his friends.', PIE(4, 3)],
      ['Shade 3 of the 4 equal parts.', fbar(4, 3)],
      ['3 parts out of 4. We write 3/4: three quarters.', B('3/4')]],
    [['Write the fraction: 1 part shaded out of 2.', ['Equal parts: 2. That goes on the bottom.', 'Shaded: 1. That goes on the top.'], '1/2', PIE(2, 1)],
      ['Write the fraction: 2 parts shaded out of 4.', ['Bottom: 4 equal parts.', 'Top: 2 shaded parts.'], '2/4: two quarters', PIE(4, 2)],
      ['Write the fraction: 2 parts shaded out of 3.', ['Bottom: 3 equal parts.', 'Top: 2 shaded parts.'], '2/3: two thirds', fbar(3, 2)]],
    ['Do not swap the numbers. The number of equal parts goes on the bottom.', C(['3/4 ✓', '4/3 ✗'])],
    ['What fraction is shaded?', PIE(4, 3), ['3/4', '4/3', '1/4'], '3/4', '3 shaded out of 4 equal parts.', 'The bottom number is how many parts.'],
    ['Top: the parts we have. Bottom: the equal parts in the whole.', C(['top: parts we have', 'bottom: equal parts'])]]);

  LI(305, 'learn3', ['Half and quarter of a number', 'How can halving help me find a half or a quarter of a number?',
    'To find a half, share into 2 equal groups. To find a quarter, halve and then halve again.', T(8, 'sweet', 4),
    [['half', 'share into 2 equal groups', '🌗'], ['quarter', 'share into 4 equal groups', '🍰'], ['halve', 'split into 2 equal parts', '✂️'], ['share', 'give out equally', '🤲']],
    [['Finn shares 8 berries between 2 bowls: 4 each. That is half.', K.trays(2, 4)],
      ['Now share 8 between 4 bowls: 2 each. That is a quarter.', K.trays(4, 2)],
      ['Half of 8 is 4. A quarter of 8 is 2.', B('½ of 8 = 4<br>¼ of 8 = 2')]],
    [['What is half of 12?', ['Share 12 into 2 equal groups.', 'Each group has 6.'], 'Half of 12 is 6.', K.trays(2, 6)],
      ['What is a quarter of 12?', ['Halve 12: 6.', 'Halve again: 3.'], 'A quarter of 12 is 3.', K.trays(4, 3)],
      ['What is a quarter of 20?', ['Halve 20: 10.', 'Halve 10: 5.'], 'A quarter of 20 is 5.', B('20 → 10 → 5')]],
    ['A quarter is smaller than a half. To find a quarter, halve twice.', C(['½ of 8 = 4', '¼ of 8 = 2'])],
    ['What is a quarter of <b>16</b>?', '', [4, 8, 12], 4, 'Half of 16 is 8. Half of 8 is 4.', 'Halve, then halve again.'],
    ['Half: halve once. Quarter: halve twice.', C(['½ → halve', '¼ → halve, halve'])]]);

  LI(305, 'learn4', ['Fraction of a shape', 'How can I find a fraction of a shape?',
    'Count all the equal parts in the shape. Then count the shaded parts.', PIE(3, 1),
    [['shape', 'like a circle or a rectangle', '🔵'], ['equal parts', 'parts the same size', '⚖️'], ['shaded', 'coloured in', '🖍️'], ['fraction', 'shaded parts over all the parts', '½']],
    [['Finn cuts a sandwich into 2 equal parts. Each part is a half.', fbar(2, 1)],
      ['This circle has 4 equal parts with 2 shaded.', PIE(4, 2)],
      ['We write 2/4. Two quarters is the same as one half.', B('2/4 = 1/2')]],
    [['What fraction of the circle is shaded?', ['Count all the equal parts: 3.', 'Count the shaded parts: 1.'], '1/3', PIE(3, 1)],
      ['What fraction of the bar is shaded?', ['Equal parts: 4.', 'Shaded parts: 3.'], '3/4', fbar(4, 3)],
      ['What fraction of the circle is shaded?', ['Equal parts: 8.', 'Shaded parts: 3.'], '3/8', PIE(8, 3)]],
    ['The bottom number counts all the parts, not just the parts that are not shaded. 1 shaded and 3 not shaded is 1/4.', C(['1/4 ✓', '1/3 ✗'])],
    ['What fraction is shaded?', fbar(3, 2), ['1/3', '2/3', '3/2'], '2/3', '2 shaded out of 3 equal parts.', 'Count all the parts first.'],
    ['Shaded parts on the top. All the equal parts on the bottom.', C(['shaded', '────', 'all parts'])]]);

  /* ========================= 306 Money and time (Ollie the owl) ========================= */
  LI(306, 'learn1', ['Working out change', 'How can I use adding and subtracting to work out change?',
    'Change is the money you get back. Count on from the price to the money you paid.', SAY('owl', 'I pay 50p for a 35p pencil.'),
    [['price', 'how much something costs', '🏷️'], ['pay', 'give money for it', '👛'], ['change', 'the money you get back', '🪙'], ['count on', 'start at the price and count up', '➕']],
    [['Ollie buys a 35p pencil with a 50p coin.', COIN([50])],
      ['Count on from 35p to 40p (5p), then to 50p (10p).', TR(35, 50, [35, 40, 50], [[35, 40], [40, 50]])],
      ['5p + 10p = 15p change.', B('50p − 35p = 15p')]],
    [['A rubber costs 7p. Ollie pays 10p. What is the change?', ['Count on from 7 to 10.', '8, 9, 10: that is 3.'], '3p change', COIN([10])],
      ['A book costs 45p. Ollie pays 50p. What is the change?', ['Count on from 45 to 50.', 'That is 5.'], '5p change', COIN([50])],
      ['A toy costs 62p. Ollie pays £1. What is the change?', ['£1 is 100p.', 'Count on from 62 to 70: 8p.', 'From 70 to 100: 30p. 8p + 30p = 38p.'], '38p change', COIN([100])]],
    ['Change is what you get back, not the price. A 40p sweet paid with 50p gives 10p change.', C(['price 40p', 'change 10p'])],
    ['A sticker costs <b>15p</b>. Ollie pays <b>20p</b>. What is the change?', COIN([20]), ['5p', '15p', '35p'], '5p', '15 + 5 = 20.', 'Count on from 15p to 20p.'],
    ['Count on from the price to what you paid.', C(['price', 'count on', 'change'])]]);

  LI(306, 'learn2', ['Making totals', 'How can different coins and notes make the same total?',
    'You can make the same amount with different coins. 20p can be one 20p, two 10ps, or four 5ps.', COIN([20]),
    [['coin', 'metal money', '🪙'], ['note', 'paper money, like £5', '💷'], ['total', 'how much altogether', '➕'], ['amount', 'how much money', '💰']],
    [['Ollie has a 20p coin. His friend has two 10p coins. They both have 20p.', pair(COIN([20]), COIN([10, 10]))],
      ['More ways to make 20p.', pair(COIN([10, 5, 5]), COIN([5, 5, 5, 5]))],
      ['We write 20p = 10p + 10p = 10p + 5p + 5p.', B('20p = 10p + 10p')]],
    [['Make 30p with two coins.', ['Start with the biggest coin that fits: 20p.', '30p − 20p = 10p.', 'Use a 10p coin.'], '20p + 10p = 30p', COIN([20, 10])],
      ['Make 15p in two different ways.', ['10p + 5p = 15p.', '5p + 5p + 5p = 15p.'], 'Two ways to make 15p', pair(COIN([10, 5]), COIN([5, 5, 5]))],
      ['Make £1 with 50p coins.', ['£1 is 100p.', '50p + 50p = 100p.'], 'Two 50p coins make £1.', COIN([50, 50])]],
    ['Count the value, not the number of coins. Three 1p coins is less than one 5p coin.', pair(COIN([1, 1, 1]), '<b>&lt;</b>', COIN([5]))],
    ['Which coins make <b>12p</b>?', '', ['10p + 2p', '10p + 5p', '5p + 2p'], '10p + 2p', '10 + 2 = 12.', 'Add up the coins.'],
    ['Many ways, the same total. Start with the biggest coin.', C(['biggest coin first', 'then add the rest'])]]);

  LI(306, 'learn3', ['Telling the time', 'How to tell the time',
    'The short hand shows the hour. The long hand shows the minutes. At quarter past it points to 3, at half past to 6 and at quarter to it points to 9.', K.clk(3, 15),
    [['hour hand', 'the short hand', '🕐'], ['minute hand', 'the long hand', '⏱️'], ['quarter past', '15 minutes after the hour', '🍰'], ['quarter to', '15 minutes before the hour', '🥧']],
    [['Ollie has breakfast at quarter past 8.', K.clk(8, 15)],
      ['From 12 to 3 is a quarter of the way round the clock: a quarter of an hour.', PIE(4, 1)],
      ['Quarter past 8 can be written as 8:15.', B('quarter past 8 = 8:15')]],
    [['What time does the clock show?', ['The long hand points to 3: quarter past.', 'The short hand is just past 4.'], 'Quarter past 4', K.clk(4, 15)],
      ['What time does the clock show?', ['The long hand points to 9: quarter to.', 'The short hand is nearly at 7.'], 'Quarter to 7', K.clk(6, 45)],
      ['What time does the clock show?', ['The long hand points to 6: half past.', 'The short hand is between 2 and 3.'], 'Half past 2', K.clk(2, 30)]],
    ['At quarter to, the short hand is nearly at the next hour. This is quarter to 7, not quarter to 6.', K.clk(6, 45)],
    ['What time is it?', K.clk(9, 15), ['quarter to 9', 'quarter past 9', 'half past 9'], 'quarter past 9', 'The long hand points to 3.', 'Where is the long hand pointing?'],
    ['Long hand at 3: quarter past. At 6: half past. At 9: quarter to.', C(['3 → quarter past', '6 → half past', '9 → quarter to'])]]);

  LI(306, 'learn4', ['How long?', 'How long does something take?',
    'To find how long something takes, count on from the start time to the end time.', clocks(2, 0, 4, 0),
    [['start time', 'when it begins', '▶️'], ['end time', 'when it finishes', '⏹️'], ['hour', '60 minutes', '🕐'], ['half an hour', '30 minutes', '🌗']],
    [['Ollie starts painting at 2 o’clock and finishes at 4 o’clock.', clocks(2, 0, 4, 0)],
      ['Count the hours on a time line: 2 to 3, then 3 to 4.', TR(2, 4, [2, 3, 4], [[2, 3], [3, 4]])],
      ['That is 2 hours.', B('2 hours')]],
    [['A film starts at 1 o’clock and ends at 3 o’clock. How long is it?', ['Count on from 1 to 2: 1 hour.', 'Then 2 to 3: 1 more hour.'], '2 hours', clocks(1, 0, 3, 0)],
      ['Swimming starts at 10 o’clock and ends at half past 10. How long?', ['The long hand goes from 12 to 6.', 'That is half way round: half an hour.'], '30 minutes', clocks(10, 0, 10, 30)],
      ['A walk starts at 4 o’clock and ends at half past 5. How long?', ['4 o’clock to 5 o’clock is 1 hour.', '5 o’clock to half past 5 is 30 minutes.'], '1 hour and 30 minutes', clocks(4, 0, 5, 30)]],
    ['Count the jumps between the times, not the numbers. 3 o’clock to 5 o’clock is 2 hours, not 3.', TR(3, 5, [3, 4, 5], [[3, 4], [4, 5]])],
    ['Lunch starts at 12 o’clock and ends at 1 o’clock. How long is it?', clocks(12, 0, 1, 0), ['30 minutes', '1 hour', '2 hours'], '1 hour', '12 to 1 is one hour.', 'Count on from the start.'],
    ['Count on from the start time to the end time.', C(['start', 'count on', 'end'])]]);

  /* ========================= 307 Measurement (Benny in the giant's garden) ========================= */
  LI(307, 'learn1', ['Length', 'How can I work out the length of an object?',
    'Length is how long something is. We can measure it with things that are all the same size, like cubes, or with a ruler.', cubes(8),
    [['length', 'how long something is', '📏'], ['longer', 'more length', '⬆️'], ['shorter', 'less length', '⬇️'], ['measure', 'find out how long, heavy or full', '🔍']],
    [['Benny lines up cubes along a giant leaf. It is 8 cubes long.', cubes(8, '#8fd67d')],
      ['Start at one end. Put the cubes in a line with no gaps.', cubes(8)],
      ['We write: the leaf is 8 cubes long.', B('8 cubes')]],
    [['How long is the pencil?', ['Line one end up with 0.', 'Read the number at the other end: 5.'], '5 cm', FL.rulerPic(5)],
      ['Which is longer: a worm 6 cm long or a worm 9 cm long?', ['Compare the numbers: 6 and 9.', '9 is bigger.'], 'The 9 cm worm is longer.', C(['6 cm', '9 cm'])],
      ['One stick is 10 cubes long and one is 7. How much longer is the first?', ['Find the difference: 10 − 7.', '10 − 7 = 3.'], '3 cubes longer', '<div>' + cubes(10) + cubes(7, '#ffb03b') + '</div>']],
    ['Leave no gaps and do not overlap the cubes, or the length will be wrong.', C(['■■■■ ✓', '■ ■ ■ ✗'])],
    ['How long is the ribbon?', FL.rulerPic(7), ['6 cm', '7 cm', '8 cm'], '7 cm', 'It ends at 7.', 'Start counting at 0.'],
    ['Start at one end, leave no gaps, read the other end.', C(['start at 0', 'no gaps', 'read the end'])]]);

  LI(307, 'learn2', ['Using a ruler', 'How do I use a ruler to measure in centimetres?',
    'Put the 0 on the ruler at one end of the object. Read the number at the other end. That is the length in centimetres, cm.', FL.rulerPic(4),
    [['ruler', 'a strip marked in centimetres', '📏'], ['centimetre (cm)', 'a small unit of length', '🐜'], ['zero (0)', 'where you start measuring', '0️⃣'], ['end', 'where the object stops', '🏁']],
    [['Benny measures a giant’s button with a ruler.', FL.rulerPic(3)],
      ['Line up 0 with the start of the object.', FL.rulerPic(6)],
      ['It ends at 6, so it is 6 cm long.', B('6 cm')]],
    [['How long is the worm?', ['Check it starts at 0.', 'Read where it ends: 8.'], '8 cm', FL.rulerPic(8)],
      ['How long is the bean?', ['It starts at 0.', 'It ends at 2.'], '2 cm', FL.rulerPic(2)],
      ['How long is the straw?', ['Start at 0.', 'It ends at 10.'], '10 cm', FL.rulerPic(10)]],
    ['Start at 0, not at 1 and not at the very edge of the ruler.', C(['start at 0 ✓', 'start at 1 ✗'])],
    ['How long is the stick?', FL.rulerPic(9), ['8 cm', '9 cm', '10 cm'], '9 cm', 'It ends at 9.', 'Read the number at the end.'],
    ['Line up 0, read the end, write cm.', C(['0 at the start', 'read the end', 'write cm'])]]);

  LI(307, 'learn3', ['Mass', 'How can I compare mass with a balance?',
    'Mass is how heavy something is. On a balance, the heavier side goes down and the lighter side goes up.', K.balance('pumpkin', 'apple', true),
    [['mass', 'how heavy something is', '⚖️'], ['heavier', 'more mass', '🏋️'], ['lighter', 'less mass', '🪶'], ['balance', 'scales that compare two things', '⚖️']],
    [['Benny puts a pumpkin and an apple on a balance.', K.balance('pumpkin', 'apple', true)],
      ['The side that goes down is heavier. The side that goes up is lighter.', K.balance('heavy', 'light', true)],
      ['We write: the pumpkin is heavier than the apple.', B('pumpkin > apple')]],
    [['Which is heavier, the melon or the grape?', ['Look for the side that is lower.', 'The melon side is down.'], 'The melon is heavier.', K.balance('melon', 'grape', true)],
      ['Which is lighter, the feather or the book?', ['The feather side is up.', 'The side that goes up is lighter.'], 'The feather is lighter.', K.balance('feather', 'book', false)],
      ['Two apples balance. What does that tell you?', ['The balance is level.', 'Level means the same mass.'], 'They have the same mass.', K.balance('apple', 'apple', null)]],
    ['Bigger is not always heavier. A big balloon is lighter than a small stone.', K.balance('balloon', 'stone', false)],
    ['Which is heavier?', K.balance('book', 'pencil', true), ['book', 'pencil', 'the same'], 'book', 'The book side goes down.', 'Which side is lower?'],
    ['Down is heavier. Up is lighter. Level is the same.', C(['down: heavier', 'up: lighter', 'level: same'])]]);

  LI(307, 'learn4', ['Capacity', 'How can I compare how much containers hold?',
    'Capacity is how much a container can hold. Fill both and compare, or pour one into the other.', pair(K.jug(90, 'big'), K.jug(30, 'small')),
    [['capacity', 'how much a container holds', '🫙'], ['full', 'holds as much as it can', '🌊'], ['empty', 'holds nothing', '🫗'], ['litre', 'a unit for how much liquid', '🥛']],
    [['Benny fills a bucket and a cup with water.', pair(K.jug(100, 'bucket'), K.jug(25, 'cup'))],
      ['The higher the water, the more it holds.', pair(K.jug(90, 'A'), K.jug(45, 'B'))],
      ['We write: A holds more than B.', B('A > B')]],
    [['Which jug holds more?', ['Compare the water levels.', 'Jug A is fuller.'], 'Jug A holds more.', pair(K.jug(80, 'A'), K.jug(40, 'B'))],
      ['A cup fills a jug 4 times. Another cup fills it 2 times. Which cup holds more?', ['Fewer cups to fill means each cup holds more.', 'The second cup needs only 2.'], 'The second cup holds more.', C(['4 cups', '2 cups'])],
      ['Put these in order, holding least first: bath, cup, bucket.', ['A cup holds a little.', 'A bucket holds more.', 'A bath holds the most.'], 'cup, bucket, bath', C(['cup', 'bucket', 'bath'])]],
    ['A tall thin glass does not always hold more than a short wide one. Pour to check.', pair(K.jug(70, 'tall'), K.jug(70, 'wide'))],
    ['Which holds the most?', pair(K.jug(30, 'A'), K.jug(95, 'B'), K.jug(60, 'C')), ['A', 'B', 'C'], 'B', 'B has the most water.', 'Look at the water levels.'],
    ['Fill and compare, or pour and see.', C(['fill', 'compare', 'more or less'])]]);

  /* ========================= 308 Shape, movement and data (Ruby the rocket) ========================= */
  LI(308, 'learn1', ['3D shapes', 'What are the properties of 3D shapes?',
    '3D shapes are solid. We describe them by their faces, edges and corners (vertices).', ROW(['cube', 'cuboid', 'sphere', 'cylinder'], 80),
    [['face', 'a flat or curved surface', '⬛'], ['edge', 'where two faces meet', '📐'], ['vertex', 'a corner (more than one: vertices)', '📍'], ['solid', 'a 3D shape you can hold', '🧊']],
    [['Ruby finds a dice in the maze. It is a cube.', SH('cube', null, 120)],
      ['A cube has 6 square faces.', SH('cube', null, 120)],
      ['A cube: 6 faces, 12 edges, 8 vertices.', C(['6 faces', '12 edges', '8 vertices'])]],
    [['How many faces does a cuboid have?', ['Count front and back: 2.', 'Top and bottom: 2.', 'Two sides: 2. That makes 6.'], 'A cuboid has 6 faces.', SH('cuboid', null, 120)],
      ['Which shape has no flat faces?', ['A sphere is round all over.', 'It has 1 curved face and no edges.'], 'A sphere', SH('sphere', null, 110)],
      ['How many flat faces does a cylinder have?', ['Look at the top and the bottom: 2 circles.', 'The side is curved.'], '2 flat faces', SH('cylinder', null, 110)]],
    ['A 3D shape is not the same as a flat shape. A cube has square faces, but it is not a square.', pair(SH('square', '#7cc4ff', 80), SH('cube', null, 90))],
    ['Which shape is a <b>cone</b>?', ROW(['cone', 'cylinder', 'pyramid'], 80), ['the 1st', 'the 2nd', 'the 3rd'], 'the 1st', 'A cone has one circle face and a point.', 'It looks like an ice-cream cone.'],
    ['Count faces, edges and vertices.', C(['faces', 'edges', 'vertices'])]]);

  LI(308, 'learn2', ['Symmetry', 'What makes a shape symmetrical?',
    'A shape is symmetrical if a mirror line splits it into two halves that match exactly.', mirror('square'),
    [['symmetry', 'both halves match', '🦋'], ['line of symmetry', 'the fold or mirror line', '🪞'], ['half', 'one of two matching parts', '🌗'], ['match', 'exactly the same', '✅']],
    [['A butterfly in Ruby’s window: both wings match.', B('🦋')],
      ['Fold a square down the middle. The halves match.', mirror('square')],
      ['The dashed line is a line of symmetry.', mirror('triangle')]],
    [['Is this a line of symmetry?', ['Imagine folding along the dashed line.', 'Both halves of the circle match.'], 'Yes', mirror('circle')],
      ['Is this a line of symmetry?', ['Fold along the dashed line.', 'One side is bigger than the other.'], 'No', mirror('rectangle', false)],
      ['How many lines of symmetry does a square have?', ['Fold it down the middle, then across the middle: 2 lines.', 'Fold it corner to corner, both ways: 2 more lines.'], '4 lines of symmetry', SH('square', '#7cc4ff', 110)]],
    ['A line that cuts a shape in two is not always a mirror line. The halves must match when folded.', mirror('rectangle', false)],
    ['Is the dashed line a line of symmetry?', mirror('circle'), ['yes', 'no'], 'yes', 'Both halves match.', 'Imagine folding it.'],
    ['Fold it: if the halves match, it is symmetrical.', C(['fold', 'match?', 'line of symmetry'])]]);

  LI(308, 'learn3', ['Directions and turns', 'How to use directions and turns',
    'We give directions with left, right, forwards and backwards. A turn can be a quarter turn, a half turn or a whole turn.', pair(arrow(0, 'start'), arrow(90, 'quarter turn')),
    [['quarter turn', 'a turn to the next side', '↪️'], ['half turn', 'turn to face the other way', '🌗'], ['whole turn', 'all the way round', '🔄'], ['clockwise', 'the way clock hands go', '🕐']],
    [['Ruby faces up. She makes a quarter turn to the right.', pair(arrow(0, 'start'), arrow(90, 'end'))],
      ['Two quarter turns make a half turn. Now she faces down.', pair(arrow(0, 'start'), arrow(180, 'half turn'))],
      ['Four quarter turns make a whole turn, back to the start.', C(['¼ + ¼ = ½', '¼ + ¼ + ¼ + ¼ = whole'])]],
    [['Ruby faces up and makes a half turn. Which way does she face?', ['A half turn is two quarter turns.', 'Up turns to down.'], 'She faces down.', pair(arrow(0), arrow(180))],
      ['Ruby faces right and makes a quarter turn clockwise. Which way does she face?', ['Clockwise goes the way clock hands go.', 'From right, a quarter turn goes to down.'], 'She faces down.', pair(arrow(90), arrow(180))],
      ['Ruby goes forwards 2, turns right, then forwards 1. What does she do?', ['Move 2 squares forwards.', 'Turn a quarter turn right.', 'Move 1 square forwards.'], 'forwards 2, right, forwards 1', C(['⬆️ 2', '↪️ right', '➡️ 1'])]],
    ['Left and right depend on which way you face. Turn yourself to check.', pair(arrow(270, 'left'), arrow(90, 'right'))],
    ['How many quarter turns make a whole turn?', '', [2, 3, 4], 4, 'Four quarter turns go all the way round.', 'Think of a clock: 12, 3, 6, 9, back to 12.'],
    ['Quarter, half, whole: 1, 2 and 4 quarter turns.', C(['¼ turn', '½ turn', 'whole turn'])]]);

  LI(308, 'learn4', ['Bar charts', 'How do I record and display data?',
    'Data is information we collect. We can show it in a bar chart. The taller the bar, the more there are.', V.bars([['Cubes', 6], ['Spheres', 3], ['Cones', 4]], 8),
    [['data', 'information we collect', '📋'], ['tally', 'marks to count, in groups of 5', '✏️'], ['bar chart', 'bars that show how many', '📊'], ['most / least', 'the tallest bar / the shortest bar', '🏆']],
    [['Ruby counts the shapes she passes: 6 cubes, 3 spheres, 4 cones.', ROW(['cube', 'sphere', 'cone'], 70)],
      ['She keeps a tally: 6 is one group of 5 and 1 more.', FL.tally(6)],
      ['She draws a bar chart.', V.bars([['Cubes', 6], ['Spheres', 3], ['Cones', 4]], 8)]],
    [['Which shape did Ruby see most?', ['Find the tallest bar.', 'Cubes: 6.'], 'Cubes', V.bars([['Cubes', 6], ['Spheres', 3], ['Cones', 4]], 8)],
      ['How many more cubes than spheres?', ['Cubes: 6. Spheres: 3.', '6 − 3 = 3.'], '3 more cubes', V.bars([['Cubes', 6], ['Spheres', 3], ['Cones', 4]], 8)],
      ['How many shapes altogether?', ['6 + 3 + 4.', '6 + 4 = 10, then 10 + 3 = 13.'], '13 shapes', V.bars([['Cubes', 6], ['Spheres', 3], ['Cones', 4]], 8)]],
    ['Read across from the top of the bar to the number. Do not just guess by looking.', V.bars([['Red', 5], ['Blue', 7]], 8)],
    ['How many chose dogs?', V.bars([['Dogs', 7], ['Cats', 4]], 8), [4, 7, 8], 7, 'The dogs bar reaches 7.', 'Read across from the top of the bar.'],
    ['Collect, tally, then draw a bar chart.', C(['collect', 'tally', 'bar chart'])]]);

  /* worked examples for every P3 topic except 302 (in fl_learn.js) */
  [301, 303, 304, 305, 306, 307, 308].forEach(function (n) { if (FL.GENS && FL.GENS[n]) FL.wexGens(n, FL.GENS[n]); });
})();
