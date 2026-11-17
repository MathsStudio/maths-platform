/* lessons_502.js: new Watch lessons for P5 Topic 2, The four operations. One detailed lesson per question. */
(function () {
  'use strict';
  var BT = window.BT; if (!BT || !BT.story || !BT.lk) return;
  var V = BT.sv, LK = BT.lk, NL = BT.NL;
  var SC = function (h, sub, steps) { return { h: h, sub: sub, steps: steps }; };
  var st = function (say, html) { return { say: say, html: html || '' }; };
  var HTO = ['', 'H', 'T', 'O'], THTO = ['', 'Th', 'H', 'T', 'O'];
  var L = { line: true };
  var C = function (a) { return { carry: a }; };
  var SW = '<!--swap-->';

  /* ---------- What is column addition? ---------- */
  var colAdd = {
    title: 'What is column addition?', goal: 'how to add big numbers by lining up the digits in columns.',
    scenes: [
      SC('What is column addition?', 'A written way to add big numbers', [
        st("Column addition is a written way to add bigger numbers. We line up the digits in place value columns, then add one column at a time.", V.rule('Line up the digits. Add one column at a time, starting with the ones.')),
        st("It is very useful when the numbers are too big to add in your head.")]),
      SC('Line up the digits', 'A school collects 346 cans, then 275 more', [
        st("A school collects three hundred and forty-six cans, then two hundred and seventy-five more. How many altogether? Write the numbers one under the other, ones under ones, tens under tens and hundreds under hundreds.",
          LK.col(HTO, [['', 3, 4, 6], ['+', 2, 7, 5], L])),
        st("We always start with the ones column, on the right.", V.note('Start on the right, with the ones'))]),
      SC('Step 1: the ones', '6 + 5', [
        st("Six plus five is eleven. Eleven is one ten and one one. We write the 1 in the ones column, and carry the ten over to the tens column.",
          LK.col(HTO, [['', 3, 4, 6], ['+', 2, 7, 5], L, ['', '', '', 'h:1'], C(['', '', '1', ''])]) + LK.step('6 + 5 = 11: write 1, carry 1 ten'))]),
      SC('Step 2: the tens', '4 + 7 + the carried 1', [
        st("Now the tens. Four tens plus seven tens is eleven tens. Add the one we carried, and we have twelve tens. Twelve tens is one hundred and two tens. Write the 2 and carry the 1 to the hundreds.",
          LK.col(HTO, [['', 3, 4, 6], ['+', 2, 7, 5], L, ['', '', 'h:2', 1], C(['', '1', '1', ''])]) + LK.step('4 + 7 + 1 = 12: write 2, carry 1 hundred'))]),
      SC('Step 3: the hundreds', '3 + 2 + the carried 1', [
        st("Last, the hundreds. Three plus two is five, plus the one we carried makes six.",
          LK.col(HTO, [['', 3, 4, 6], ['+', 2, 7, 5], L, ['', 'h:6', 2, 1], C(['', '1', '1', ''])]) + LK.step('3 + 2 + 1 = 6')),
        st("So the school collected six hundred and twenty-one cans.", V.eq('346 + 275 = 621', 'g'))]),
      SC('Check with an estimate', 'Is 621 sensible?', [
        st("Always check that your answer makes sense. Round the numbers: three hundred and fifty plus two hundred and eighty is about six hundred and thirty.", V.eq('350 + 280 = 630', 'b')),
        st("Six hundred and twenty-one is close to six hundred and thirty, so our answer is sensible.", V.eq('621 ≈ 630 ✓', 'g'))]),
      SC('Bigger numbers', '4,687 + 2,546', [
        st("Column addition works for thousands too. Let's add four thousand, six hundred and eighty-seven and two thousand, five hundred and forty-six.", LK.col(THTO, [['', 4, 6, 8, 7], ['+', 2, 5, 4, 6], L])),
        st("Ones: seven plus six is thirteen. Write 3, carry 1. Tens: eight plus four plus one is thirteen. Write 3, carry 1. Hundreds: six plus five plus one is twelve. Write 2, carry 1. Thousands: four plus two plus one is seven.",
          SW + LK.col(THTO, [['', 4, 6, 8, 7], ['+', 2, 5, 4, 6], L, ['', 'h:7', 'h:2', 'h:3', 'h:3'], C(['', '1', '1', '1', ''])])),
        st("So the answer is seven thousand, two hundred and thirty-three.", V.eq('4,687 + 2,546 = 7,233', 'g'))]),
      SC('Watch out!', 'Line up the ones', [
        st("A common mistake is lining up the numbers on the left. Three hundred and fifty-two plus forty-one written like this gives the wrong answer.",
          LK.col(HTO, [['', 3, 5, 2], ['+', 'x:4', 'x:1', ''], L]) + V.eq('✗ wrong', 'r')),
        st("Always line up the ones on the right. Then the answer is three hundred and ninety-three.", LK.col(HTO, [['', 3, 5, 2], ['+', '', 4, 1], L, ['', 3, 9, 3]]) + V.eq('352 + 41 = 393 ✓', 'g'))]),
      SC('Your turn', 'Pause, think, then listen', [
        st("Your turn! Work out five hundred and sixty-eight plus two hundred and fifty-seven. Pause and try it.", LK.col(HTO, [['', 5, 6, 8], ['+', 2, 5, 7], L])),
        st("Ones: eight plus seven is fifteen. Write 5, carry 1. Tens: six plus five plus one is twelve. Write 2, carry 1. Hundreds: five plus two plus one is eight. The answer is eight hundred and twenty-five.",
          SW + LK.col(HTO, [['', 5, 6, 8], ['+', 2, 5, 7], L, ['', 'k:8', 'k:2', 'k:5'], C(['', '1', '1', ''])]) + V.eq('568 + 257 = 825', 'g'))]),
      SC('Let’s recap', 'What is column addition?', [
        st("Great work! In column addition, line up the digits by place value, ones under ones. Start with the ones and work left. If a column adds up to ten or more, write the ones digit and carry the ten to the next column. Check with an estimate.",
          V.list(['Line up ones under ones', 'Start with the ones column', '10 or more? Write the ones, carry the ten', 'Add the carried digit in the next column', 'Check with an estimate']))])
    ]
  };

  /* ---------- How do you use column subtraction? ---------- */
  var colSub = {
    title: 'How do you use column subtraction?', goal: 'how to subtract in columns, and how to exchange when the top digit is too small.',
    scenes: [
      SC('What is column subtraction?', 'Taking away in columns', [
        st("Column subtraction is a written way to take away. Like column addition, we line up the digits and start with the ones. We always put the bigger number on top.", V.rule('Bigger number on top. Line up the digits. Start with the ones.'))]),
      SC('An easy one first', '586 − 243', [
        st("Five hundred and eighty-six take away two hundred and forty-three. Ones: six take away three is three. Tens: eight take away four is four. Hundreds: five take away two is three.",
          LK.col(HTO, [['', 5, 8, 6], ['−', 2, 4, 3], L, ['', 'k:3', 'k:4', 'k:3']])),
        st("So the answer is three hundred and forty-three.", V.eq('586 − 243 = 343', 'g'))]),
      SC('When the top digit is too small', '63 − 28', [
        st("Now sixty-three take away twenty-eight. In the ones, we need three take away eight. We can't take eight from three!", LK.col(['', 'T', 'O'], [['', 6, 3], ['−', 2, 8], L]) + V.eq('3 − 8 ✗', 'r')),
        st("So we exchange. We take one ten from the tens column and change it into ten ones. Now there are five tens, and the three ones become thirteen ones.",
          SW + LK.col(['', 'T', 'O'], [C(['', '5', '13']), ['', 'x:6', 'x:3'], ['−', 2, 8], L]) + V.note('1 ten = 10 ones')),
        st("Thirteen take away eight is five. Five tens take away two tens is three tens. The answer is thirty-five.",
          SW + LK.col(['', 'T', 'O'], [C(['', '5', '13']), ['', 'x:6', 'x:3'], ['−', 2, 8], L, ['', 'k:3', 'k:5']]) + V.eq('63 − 28 = 35', 'g'))]),
      SC('Exchanging twice', '524 − 168', [
        st("Five hundred and twenty-four take away one hundred and sixty-eight.", LK.col(HTO, [['', 5, 2, 4], ['−', 1, 6, 8], L])),
        st("Ones: four take away eight won't work, so exchange a ten. Two tens become one ten, and four ones become fourteen. Fourteen take away eight is six.",
          SW + LK.col(HTO, [C(['', '', '1', '14']), ['', 5, 'x:2', 'x:4'], ['−', 1, 6, 8], L, ['', '', '', 'h:6']])),
        st("Tens: one take away six won't work, so exchange a hundred. Five hundreds become four, and one ten becomes eleven tens. Eleven take away six is five.",
          SW + LK.col(HTO, [C(['', '4', '11', '14']), ['', 'x:5', 'x:2', 'x:4'], ['−', 1, 6, 8], L, ['', '', 'h:5', 6]])),
        st("Hundreds: four take away one is three. The answer is three hundred and fifty-six.",
          SW + LK.col(HTO, [C(['', '4', '11', '14']), ['', 'x:5', 'x:2', 'x:4'], ['−', 1, 6, 8], L, ['', 'k:3', 'k:5', 'k:6']]) + V.eq('524 − 168 = 356', 'g'))]),
      SC('Exchanging across a zero', '503 − 147', [
        st("What if there is a zero? Five hundred and three take away one hundred and forty-seven. We need more ones, but there are no tens to exchange.", LK.col(HTO, [['', 5, 0, 3], ['−', 1, 4, 7], L])),
        st("So first we exchange a hundred into ten tens. Five hundreds become four, and zero tens become ten tens.",
          SW + LK.col(HTO, [C(['', '4', '10', '']), ['', 'x:5', 'x:0', 3], ['−', 1, 4, 7], L])),
        st("Now exchange one of those tens into ten ones. Ten tens become nine tens, and three ones become thirteen ones.",
          SW + LK.col(HTO, [C(['', '4', '9', '13']), ['', 'x:5', 'x:0', 'x:3'], ['−', 1, 4, 7], L])),
        st("Thirteen take away seven is six. Nine take away four is five. Four take away one is three. The answer is three hundred and fifty-six.",
          SW + LK.col(HTO, [C(['', '4', '9', '13']), ['', 'x:5', 'x:0', 'x:3'], ['−', 1, 4, 7], L, ['', 'k:3', 'k:5', 'k:6']]) + V.eq('503 − 147 = 356', 'g'))]),
      SC('Check by adding', 'Adding undoes subtracting', [
        st("We can check a subtraction by adding. Add the answer to the number we took away. We should get back to the number we started with.", V.eq('356 + 147 = 503 ✓', 'g')),
        st("It matches, so our subtraction is right.", V.rule('Check: answer + number taken away = starting number'))]),
      SC('Your turn', 'Pause, think, then listen', [
        st("Your turn! Work out seven hundred and thirty-one take away two hundred and eighty-five. Pause and try it.", LK.col(HTO, [['', 7, 3, 1], ['−', 2, 8, 5], L])),
        st("Ones: one take away five, so exchange. Eleven take away five is six. Tens: two take away eight, so exchange. Twelve take away eight is four. Hundreds: six take away two is four. The answer is four hundred and forty-six.",
          SW + LK.col(HTO, [C(['', '6', '12', '11']), ['', 'x:7', 'x:3', 'x:1'], ['−', 2, 8, 5], L, ['', 'k:4', 'k:4', 'k:6']]) + V.eq('731 − 285 = 446', 'g'))]),
      SC('Let’s recap', 'How do you use column subtraction?', [
        st("Well done! Put the bigger number on top and line up the digits. Start with the ones. If the top digit is too small, exchange one from the next column. If that column is zero, exchange from further along. Check by adding.",
          V.list(['Bigger number on top', 'Start with the ones', 'Top digit too small? Exchange', 'Zero next door? Exchange from further left', 'Check by adding back']))])
    ]
  };

  /* ---------- How do you add and subtract in your head? ---------- */
  var mental = {
    title: 'How do you add and subtract in your head?', goal: 'clever ways to add and subtract without writing a sum.',
    scenes: [
      SC('Adding and subtracting in your head', 'Mental maths tricks', [
        st("You don't always need paper. Mental maths means working it out in your head, using clever tricks. Let's learn five of them.", V.cards(['bonds', 'tens', 'adjust', 'doubles', 'count on'], ['b', 'g', 'r', 'y', 'b'], true))]),
      SC('Trick 1: number bonds', 'Pairs that make 10 and 100', [
        st("Number bonds are pairs of numbers that make ten. Seven and three. Six and four. Knowing them makes adding fast.", V.cards(['7 + 3', '6 + 4', '8 + 2'], ['b', 'g', 'r'], true) + V.eq('= 10', 'g')),
        st("They help with a hundred too. Sixty-four and thirty-six make one hundred, because four plus six makes ten, and sixty plus thirty plus that ten makes one hundred.", V.eq('64 + 36 = 100', 'b'))]),
      SC('Trick 2: add the tens and hundreds', 'Only one column changes', [
        st("Adding a whole number of hundreds only changes the hundreds digit. Three hundred and forty plus two hundred is five hundred and forty.", V.eq('340 + 200 = 540', 'b')),
        st("Adding tens only changes the tens digit. Three hundred and forty plus fifty is three hundred and ninety.", V.eq('340 + 50 = 390', 'g'))]),
      SC('Trick 3: round and adjust', 'Use a friendly number, then fix it', [
        st("Adding nine is tricky, but adding ten is easy. So to add nine, add ten, then take one away. Forty-six plus nine: forty-six plus ten is fifty-six, take away one is fifty-five.", V.eq('46 + 9 = 46 + 10 − 1 = 55', 'b')),
        st("It works for subtracting too. Seventy-three take away nineteen: take away twenty to get fifty-three, then add one back, because we took away one too many.", V.eq('73 − 19 = 73 − 20 + 1 = 54', 'g')),
        st("This is called compensating: round to a friendly number, then adjust.", V.rule('Round, then adjust.'))]),
      SC('Trick 4: near doubles', 'Use doubles you know', [
        st("If two numbers are next to each other, use a double. Twenty-five plus twenty-six is double twenty-five, which is fifty, plus one more.", V.eq('25 + 26 = 25 + 25 + 1 = 51', 'b')),
        st("Forty plus thirty-nine is double forty, which is eighty, take away one.", V.eq('40 + 39 = 80 − 1 = 79', 'g'))]),
      SC('Trick 5: count on to subtract', 'Find the difference', [
        st("When two numbers are close together, count up from the smaller one. One hundred and two take away ninety-seven.", V.eq('102 − 97 = ?')),
        st("Count up from ninety-seven to one hundred: that is three. Then from one hundred to one hundred and two: that is two more. Three plus two is five.", NL(96, 103, { lab: 1, jumps: [[97, 100, '3'], [100, 102, '2']] }) + V.eq('102 − 97 = 5', 'g'))]),
      SC('Pick the best trick', 'Look at the numbers first', [
        st("Before you start, look at the numbers. Ends in nine? Round and adjust. Numbers close together? Near doubles, or count on. Makes ten? Use bonds.",
          V.tbl([['58 + 29', 'round and adjust'], ['35 + 36', 'near doubles'], ['301 − 296', 'count on'], ['73 + 27', 'number bonds']], ['Sum', 'Best trick']))]),
      SC('Your turn', 'Pause, think, then listen', [
        st("Your turn! Fifty-eight plus twenty-nine. Pause and choose a trick.", V.eq('58 + 29 = ?')),
        st("Twenty-nine is nearly thirty. Fifty-eight plus thirty is eighty-eight, take away one is eighty-seven.", V.eq('58 + 30 − 1 = 87', 'g')),
        st("One more. Four hundred take away one hundred and sixty-five.", V.eq('400 − 165 = ?')),
        st("Count on from one hundred and sixty-five: five gets to one seventy, thirty more gets to two hundred, and two hundred more gets to four hundred. Five plus thirty plus two hundred is two hundred and thirty-five.",
          V.eq('5 + 30 + 200 = 235', 'g'))]),
      SC('Let’s recap', 'How do you add and subtract in your head?', [
        st("Brilliant! You now have five mental tricks: number bonds, adding whole tens and hundreds, rounding and adjusting, near doubles, and counting on to find a difference. Always look at the numbers first and pick the easiest trick.",
          V.list(['Number bonds to 10 and 100', 'Add whole tens and hundreds', 'Round and adjust: +9 is +10 − 1', 'Near doubles: 25 + 26', 'Count on to subtract close numbers']))])
    ]
  };

  /* ---------- How can counting on help me add two-digit numbers? ---------- */
  var countOn = {
    title: 'How can counting on help me add two-digit numbers?', goal: 'how to add by jumping along a number line in tens and ones.',
    scenes: [
      SC('Counting on', 'Adding with jumps', [
        st("Counting on means starting at one number and jumping forward to add the other number. We jump in tens first, then in ones.", V.rule('Start at the bigger number. Jump the tens, then the ones.'))]),
      SC('Jump in tens and ones', '34 + 25', [
        st("Let's add thirty-four and twenty-five. Start at thirty-four. Twenty-five is two tens and five ones.", V.eq('25 = 20 + 5', 'b')),
        st("Jump ten: forty-four. Jump ten again: fifty-four.", NL(30, 62, { lab: 10, tick: 2, jumps: [[34, 44, '+10'], [44, 54, '+10']], marks: [[34, 215]] })),
        st("Now jump five ones: fifty-five, fifty-six, fifty-seven, fifty-eight, fifty-nine.", NL(30, 62, { lab: 10, tick: 2, jumps: [[34, 44, '+10'], [44, 54, '+10'], [54, 59, '+5']], marks: [[34, 215], [59, 140]] }) + V.eq('34 + 25 = 59', 'g'))]),
      SC('Bigger jumps', 'Jump all the tens at once', [
        st("When you are confident, jump all the tens in one go. Thirty-four plus twenty is fifty-four. Then plus five is fifty-nine.", NL(30, 62, { lab: 10, tick: 2, jumps: [[34, 54, '+20'], [54, 59, '+5']] }) + V.eq('34 + 20 + 5 = 59', 'g'))]),
      SC('Crossing a ten', '47 + 36', [
        st("Forty-seven plus thirty-six. Start at forty-seven and jump thirty: seventy-seven.", NL(45, 85, { lab: 10, tick: 5, jumps: [[47, 77, '+30']] })),
        st("Now we need six more. Jump three to reach eighty, a friendly ten. Then jump three more to eighty-three. This is called bridging through ten.",
          NL(45, 85, { lab: 10, tick: 5, jumps: [[47, 77, '+30'], [77, 80, '+3'], [80, 83, '+3']] }) + V.eq('47 + 36 = 83', 'g'))]),
      SC('Start with the bigger number', '8 + 57', [
        st("Eight plus fifty-seven. Counting on eight from fifty-seven is much quicker than counting on fifty-seven from eight. Adding works in any order, so start with the bigger number.", V.eq('8 + 57 = 57 + 8 = 65', 'g'))]),
      SC('Counting on to subtract', '72 − 45', [
        st("Counting on can help with subtraction too. Seventy-two take away forty-five: count on from forty-five up to seventy-two.", V.eq('72 − 45 = ?')),
        st("Forty-five to fifty is five. Fifty to seventy is twenty. Seventy to seventy-two is two.", NL(40, 75, { lab: 10, tick: 5, jumps: [[45, 50, '5'], [50, 70, '20'], [70, 72, '2']] })),
        st("Add up the jumps: five plus twenty plus two is twenty-seven.", V.eq('72 − 45 = 27', 'g'))]),
      SC('Your turn', 'Pause, think, then listen', [
        st("Your turn! Thirty-eight plus forty-five. Pause and count on.", V.eq('38 + 45 = ?')),
        st("Start at forty-five, the bigger number. Jump thirty to seventy-five. Then jump eight: five takes us to eighty, three more is eighty-three.",
          NL(40, 90, { lab: 10, tick: 5, jumps: [[45, 75, '+30'], [75, 80, '+5'], [80, 83, '+3']] }) + V.eq('38 + 45 = 83', 'g'))]),
      SC('Let’s recap', 'How can counting on help me add?', [
        st("Great job! To count on, start at the bigger number. Jump the tens, then the ones. Use a friendly ten to bridge. And you can count on to subtract, by finding the jumps between the two numbers.",
          V.list(['Start at the bigger number', 'Jump the tens, then the ones', 'Bridge through a friendly ten', 'Count on to find a difference']))])
    ]
  };

  /* ---------- How can partitioning help me add two-digit numbers? ---------- */
  var partAdd = {
    title: 'How can partitioning help me add two-digit numbers?', goal: 'how to add by splitting numbers into tens and ones.',
    scenes: [
      SC('Partitioning to add', 'Split, add, recombine', [
        st("Partitioning means splitting numbers into tens and ones. Then we add the tens, add the ones, and put them back together.", V.rule('Split into tens and ones. Add tens. Add ones. Recombine.'))]),
      SC('Split both numbers', '43 + 25', [
        st("Forty-three plus twenty-five. Split forty-three into forty and three. Split twenty-five into twenty and five.", V.eq('43 = 40 + 3', 'b') + V.eq('25 = 20 + 5', 'g')),
        st("Add the tens: forty plus twenty is sixty. Add the ones: three plus five is eight.", V.eq('40 + 20 = 60', 'b') + V.eq('3 + 5 = 8', 'g')),
        st("Recombine: sixty plus eight is sixty-eight.", V.eq('43 + 25 = 68', 'r'))]),
      SC('When the ones make a new ten', '47 + 36', [
        st("Forty-seven plus thirty-six. Tens: forty plus thirty is seventy. Ones: seven plus six is thirteen.", V.eq('40 + 30 = 70', 'b') + V.eq('7 + 6 = 13', 'g')),
        st("Thirteen is more than ten, so recombining gives seventy plus thirteen, which is eighty-three.", V.eq('70 + 13 = 83', 'r'))]),
      SC('Split just one number', 'Another way', [
        st("Sometimes it is quicker to keep the first number whole and only split the second. Forty-seven plus thirty, then plus six.", V.eq('47 + 30 = 77', 'b') + V.eq('77 + 6 = 83', 'g'))]),
      SC('Partitioning to subtract', '68 − 25', [
        st("For subtraction, keep the first number whole and partition the second. Sixty-eight take away twenty is forty-eight. Then take away five more: forty-three.", V.eq('68 − 20 = 48', 'b') + V.eq('48 − 5 = 43', 'g')),
        st("Don't split both numbers when subtracting. It can go wrong when the ones need exchanging.", V.rule('Subtracting: split only the number you take away.'))]),
      SC('Three-digit numbers', '245 + 132', [
        st("It works for hundreds too. Two hundred and forty-five plus one hundred and thirty-two. Hundreds: two hundred plus one hundred is three hundred. Tens: forty plus thirty is seventy. Ones: five plus two is seven.",
          V.eq('200 + 100 = 300', 'b') + V.eq('40 + 30 = 70', 'g') + V.eq('5 + 2 = 7', 'r')),
        st("Recombine: three hundred and seventy-seven.", V.eq('245 + 132 = 377', 'g'))]),
      SC('Your turn', 'Pause, think, then listen', [
        st("Your turn! Fifty-six plus thirty-seven. Pause and partition.", V.eq('56 + 37 = ?')),
        st("Tens: fifty plus thirty is eighty. Ones: six plus seven is thirteen. Eighty plus thirteen is ninety-three.", V.eq('80 + 13 = 93', 'g'))]),
      SC('Let’s recap', 'How can partitioning help me add?', [
        st("Excellent! Partition the numbers into tens and ones, add the tens, add the ones, then recombine. If the ones make more than ten, remember to add that extra ten. For subtraction, only split the number you take away.",
          V.list(['Split into tens and ones', 'Add the tens, then the ones', 'Recombine the parts', 'Ones over 10? It adds a ten', 'Subtracting: split the second number only']))])
    ]
  };

  /* ---------- How do you multiply and divide by 0, 1, 10 and 100? ---------- */
  var times = {
    title: 'How do you multiply and divide by 0, 1, 10 and 100?', goal: 'the special rules for multiplying and dividing by 0, 1, 10 and 100.',
    scenes: [
      SC('Multiplying and dividing', 'What do they mean?', [
        st("Multiplying means adding equal groups. Three times four means three groups of four. Twelve altogether.", V.dots(3, 4, 'var(--accent)') + V.eq('3 × 4 = 12', 'b')),
        st("Dividing means sharing into equal groups. Twelve shared into three groups gives four in each group.", V.eq('12 ÷ 3 = 4', 'g')),
        st("Some numbers have special rules that make multiplying and dividing very quick. Let's learn them.", V.cards(['× 0', '× 1', '× 10', '× 100'], ['r', 'b', 'g', 'y'], true))]),
      SC('Multiplying by 1', 'One group', [
        st("Multiplying by one means one group. One group of seven is just seven. Any number times one stays the same.", V.eq('7 × 1 = 7', 'b') + V.eq('1 × 250 = 250', 'b')),
        st("Dividing by one also keeps the number the same. Nine shared into one group is nine.", V.eq('9 ÷ 1 = 9', 'g') + V.rule('× 1 or ÷ 1: the number stays the same.'))]),
      SC('Multiplying by 0', 'Zero groups', [
        st("Multiplying by zero means zero groups. If you have zero bags with eight sweets in each, you have no sweets at all.", V.eq('8 × 0 = 0', 'r')),
        st("And zero groups of anything, however big, is still zero.", V.eq('0 × 25 = 0', 'r') + V.rule('Anything × 0 = 0')),
        st("Zero shared between five people is zero each. But we never divide by zero. It doesn't make sense to share into zero groups.", V.eq('0 ÷ 5 = 0', 'g') + V.note('We never divide by 0.'))]),
      SC('Multiplying by 10', 'Digits move one place left', [
        st("When we multiply by ten, every digit moves one place to the left, because each place is ten times bigger. A zero fills the empty ones place.",
          V.tbl([['', '', '3', '6'], ['', '3', '6', '0']], ['Th', 'H', 'T', 'O']) + V.eq('36 × 10 = 360', 'b')),
        st("Two hundred and forty-five times ten is two thousand, four hundred and fifty.", V.eq('245 × 10 = 2,450', 'b')),
        st("Careful! We don't just add a zero to the end. The digits move. That matters later, when you meet decimals.", V.note('The digits move left. The zero holds the empty place.'))]),
      SC('Multiplying by 100', 'Digits move two places left', [
        st("One hundred is ten times ten. So multiplying by one hundred moves every digit two places to the left.",
          V.tbl([['', '', '3', '6'], ['3', '6', '0', '0']], ['Th', 'H', 'T', 'O']) + V.eq('36 × 100 = 3,600', 'g')),
        st("Seventy-two times one hundred is seven thousand, two hundred.", V.eq('72 × 100 = 7,200', 'g'))]),
      SC('Dividing by 10 and 100', 'Digits move right', [
        st("Dividing does the opposite. Dividing by ten moves every digit one place to the right. Five hundred and eighty divided by ten is fifty-eight.",
          V.tbl([['5', '8', '0'], ['', '5', '8']], ['H', 'T', 'O']) + V.eq('580 ÷ 10 = 58', 'b')),
        st("Dividing by one hundred moves every digit two places to the right. Four thousand, seven hundred divided by one hundred is forty-seven.", V.eq('4,700 ÷ 100 = 47', 'g'))]),
      SC('In real life', 'Money and measures', [
        st("You use these rules all the time. Twenty-three ten pence coins: twenty-three times ten is two hundred and thirty pence, which is two pounds thirty.", V.eq('23 × 10p = 230p = £2.30', 'b')),
        st("There are one hundred centimetres in a metre. So six metres is six times one hundred, which is six hundred centimetres.", V.eq('6 m = 6 × 100 = 600 cm', 'g'))]),
      SC('Your turn', 'Pause, think, then listen', [
        st("Your turn! What is fifteen times zero? Pause and think.", V.eq('15 × 0 = ?')),
        st("Zero groups of fifteen is zero.", V.eq('15 × 0 = 0', 'g')),
        st("And three thousand, four hundred divided by ten?", V.eq('3,400 ÷ 10 = ?')),
        st("Every digit moves one place to the right. The answer is three hundred and forty.", V.eq('3,400 ÷ 10 = 340', 'g'))]),
      SC('Let’s recap', 'Multiplying and dividing by 0, 1, 10 and 100', [
        st("Super! Times one or divided by one, the number stays the same. Times zero, the answer is always zero, and we never divide by zero. Times ten, digits move one place left. Times one hundred, two places left. Dividing moves the digits right.",
          V.list(['× 1 and ÷ 1: no change', '× 0 = 0, and never ÷ 0', '× 10: digits move 1 place left', '× 100: digits move 2 places left', '÷ 10 and ÷ 100: digits move right']))])
    ]
  };

  /* the four parts of a division, named */
  function divParts(hl) {   /* 17 ÷ 5 = 3 r 2 with each part named underneath; hl = the parts to stand out */
    var P = [['17', 'dividend', 'the number being divided'], ['÷'], ['5', 'divisor', 'the number you divide by'], ['='], ['3', 'quotient', 'the answer'], ['r'], ['2', 'remainder', 'what is left over']];
    return '<div style="display:flex;flex-wrap:nowrap;justify-content:center;align-items:flex-start;gap:6px 10px;font-weight:800;color:var(--fg)">' + P.map(function (p) {
      if (p.length === 1) return '<div style="font-size:2rem;line-height:1;padding-top:10px">' + p[0] + '</div>';
      var on = !hl || hl.indexOf(p[1]) > -1;
      return '<div style="display:grid;justify-items:center;gap:4px;opacity:' + (on ? 1 : 0.35) + '"><div style="font-size:2rem;line-height:1;background:var(--surface,#fff);border:3px solid ' + (on ? 'var(--accent,#2b5fd9)' : 'var(--line,#c9cfe0)') + ';border-radius:12px;padding:6px 14px">' + p[0] + '</div><div style="font-size:1rem;color:var(--accent,#2b5fd9)">' + p[1] + '</div><div style="font-size:.8rem;font-weight:600;max-width:8.5em;text-align:center;color:var(--muted,#555)">' + p[2] + '</div></div>';
    }).join('') + '</div>';
  }
  /* ---------- How do you work out division with remainders? ---------- */
  var remainders = {
    title: 'How do you work out division with remainders?', goal: 'what a remainder is, how to find one, and what to do with it in real life.',
    scenes: [
      SC('Division with remainders', 'When things don’t share equally', [
        st("Dividing means sharing equally. Twelve sweets shared between three friends: each friend gets four. Nothing is left over.", V.dots(3, 4, 'var(--accent)') + V.eq('12 ÷ 3 = 4', 'b')),
        st("But sometimes things don't share out equally. What is left over is called the remainder.", V.rule('The remainder is what is left over after sharing equally.'))]),
      SC('A remainder', '17 sweets, 5 friends', [
        st("Seventeen sweets shared between five friends. Each friend gets three sweets. That uses fifteen sweets.", V.dots(5, 3, 'var(--accent)') + V.eq('5 × 3 = 15', 'b')),
        st("Two sweets are left over. There are not enough to give everyone another one. So the remainder is two.", V.dots(1, 2, 'var(--bad)') + V.eq('17 − 15 = 2 left over', 'r')),
        st("We write this as seventeen divided by five equals three, remainder two. The little r means remainder.", V.eq('17 ÷ 5 = 3 r 2', 'g'))]),
      SC('The parts of a division', 'Dividend, divisor, quotient, remainder', [
        st("Each number in a division has a name. Seventeen is the dividend: the number being divided. Five is the divisor: the number we divide by. Three is the quotient: the answer. Two is the remainder: what is left over.", divParts()),
        st("They always fit together like this: the divisor times the quotient, add the remainder, gives the dividend. Five times three is fifteen, add two is seventeen.", V.eq('divisor × quotient + remainder = dividend', 'b') + V.eq('5 × 3 + 2 = 17 ✓', 'g'))]),
      SC('Use your times tables', '29 ÷ 4', [
        st("Times tables make this quicker. Twenty-nine divided by four. Which number in the four times table is closest to twenty-nine, without going over?", V.cards(['24', '28', '32'], ['b', 'g', 'r'], true)),
        st("Four times seven is twenty-eight. Four times eight is thirty-two, which is too big. So four goes into twenty-nine seven times.", V.eq('4 × 7 = 28', 'g')),
        st("Twenty-nine take away twenty-eight leaves one. The answer is seven, remainder one.", V.eq('29 ÷ 4 = 7 r 1', 'g') + V.rule('The remainder must be smaller than the number you divide by.'))]),
      SC('Bigger numbers', '86 ÷ 4', [
        st("Eighty-six divided by four. Split eighty-six into eighty and six. Eighty divided by four is twenty.", V.eq('80 ÷ 4 = 20', 'b')),
        st("Six divided by four is one, remainder two.", V.eq('6 ÷ 4 = 1 r 2', 'g')),
        st("Put them together: twenty plus one is twenty-one, remainder two.", V.eq('86 ÷ 4 = 21 r 2', 'r'))]),
      SC('Check your answer', 'Multiply back and add the remainder', [
        st("To check, multiply the answer by the number you divided by, then add the remainder. You should get back to the start.", V.eq('4 × 21 = 84', 'b') + V.eq('84 + 2 = 86 ✓', 'g'))]),
      SC('Remainders in real life', 'Round up or round down?', [
        st("In real life, we have to think about what the remainder means. Thirty children are going on a trip. Each minibus holds eight. Thirty divided by eight is three, remainder six.", V.eq('30 ÷ 8 = 3 r 6', 'b')),
        st("Six children can't be left behind! We need one more minibus. So we round up: four minibuses.", V.eq('We need 4 minibuses', 'g')),
        st("Now, twenty eggs go into boxes of six. Twenty divided by six is three, remainder two. Only full boxes can be sold, so we round down: three full boxes, with two eggs spare.", V.eq('20 ÷ 6 = 3 r 2 → 3 full boxes', 'r'))]),
      SC('Your turn', 'Pause, think, then listen', [
        st("Your turn! Thirty-eight divided by five. Pause and use your five times table.", V.eq('38 ÷ 5 = ?')),
        st("Five times seven is thirty-five. Thirty-eight take away thirty-five is three. The answer is seven, remainder three.", V.eq('38 ÷ 5 = 7 r 3', 'g')),
        st("Check: five times seven is thirty-five, plus three is thirty-eight.", V.eq('5 × 7 + 3 = 38 ✓', 'g'))]),
      SC('Let’s recap', 'How do you work out division with remainders?', [
        st("Well done! The number we divide is the dividend, we divide by the divisor, the answer is the quotient. When a number doesn't share equally, the amount left over is the remainder. Use your times tables to find the closest multiple without going over. The remainder must be smaller than the number you divide by. In real life, decide whether to round up or down.",
          V.list(['dividend ÷ divisor = quotient r remainder', 'Remainder = what is left over', 'Find the closest times-table fact', 'Remainder < the number you divide by', 'Check: multiply back, add the remainder', 'Real life: round up or round down']))])
    ]
  };

  /* ---------- Order of operations and word problems (rebuilt in full) ---------- */
  var order = {
    title: 'Order of operations and word problems', goal: 'which part of a calculation to do first, and how to turn words into number sentences.',
    scenes: [
      SC('Which comes first?', 'One calculation, two answers?', [
        st("Here is a puzzle: two plus three times four. Some people say twenty and some say fourteen. They can't both be right, so mathematicians agreed a rule about the order.", V.eq('2 + 3 × 4 = ?', 'b')),
        st("The order of operations tells us which part of a calculation to do first, so everybody gets the same answer.", V.rule('Brackets first, then × and ÷, then + and −.'))]),
      SC('Multiply before you add', '2 + 3 × 4', [
        st("Multiplication and division come before addition and subtraction. So in two plus three times four, we do three times four first. That is twelve.", V.eq('2 + 3 × 4', 'b') + V.eq('3 × 4 = 12')),
        st("Then add the two. Twelve plus two is fourteen. So the answer is fourteen, not twenty.", SW + V.eq('2 + 3 × 4', 'b') + V.eq('3 × 4 = 12') + V.eq('2 + 12 = 14', 'g'))]),
      SC('Divide before you subtract', '20 − 12 ÷ 4', [
        st("Here is another one: twenty take away twelve divided by four. Division comes before subtraction, so we do twelve divided by four first. That is three.", V.eq('20 − 12 ÷ 4', 'b') + V.eq('12 ÷ 4 = 3')),
        st("Then twenty take away three is seventeen.", SW + V.eq('20 − 12 ÷ 4', 'b') + V.eq('12 ÷ 4 = 3') + V.eq('20 − 3 = 17', 'g'))]),
      SC('Brackets are the boss', '(2 + 3) × 4', [
        st("Brackets change the order. Whatever is inside the brackets is always done first. Two plus three in brackets makes five.", V.eq('(2 + 3) × 4', 'b') + V.eq('2 + 3 = 5')),
        st("Then five times four is twenty. The same numbers, but the brackets give a different answer.", SW + V.eq('(2 + 3) × 4', 'b') + V.eq('2 + 3 = 5') + V.eq('5 × 4 = 20', 'g')),
        st("Another example: eighteen divided by, in brackets, four plus two. Four plus two is six, and eighteen divided by six is three.", V.eq('18 ÷ (4 + 2) = 18 ÷ 6 = 3', 'g'))]),
      SC('Only adding and subtracting?', 'Work from left to right', [
        st("When a calculation only has adding and subtracting, work from left to right. Fifteen take away six plus four: fifteen take away six is nine, then add four. Thirteen.", V.eq('15 − 6 + 4', 'b') + V.eq('15 − 6 = 9') + V.eq('9 + 4 = 13', 'g')),
        st("The same goes for only multiplying and dividing. Twenty-four divided by four times two: twenty-four divided by four is six, then six times two is twelve.", V.eq('24 ÷ 4 × 2 = 6 × 2 = 12', 'g'))]),
      SC('Words into a number sentence', 'Pencils in packs', [
        st("Now a word problem. A pack has six pencils. Maya buys four packs and gives away five pencils. How many does she have left? Pick out the numbers and decide what to do with each one.", V.list(['4 packs of 6 pencils → multiply', 'gives away 5 → subtract'])),
        st("Four packs of six is twenty-four pencils. Then take away the five she gave away. Twenty-four take away five is nineteen.", V.eq('4 × 6 − 5', 'b') + V.eq('24 − 5 = 19', 'g')),
        st("Maya has nineteen pencils left. Does it make sense? She had twenty-four and gave a few away, so a bit less than twenty-four is sensible.", V.note('Check: does the answer make sense?'))]),
      SC('Key words help', 'Which operation?', [
        st("Some words give clues. Altogether, total and more mean add. Left, difference and fewer mean subtract. Each, groups of and times mean multiply. Share, split and equal groups mean divide.",
          V.tbl([['Add', 'altogether, total, more'], ['Subtract', 'left, difference, fewer'], ['Multiply', 'each, groups of, times'], ['Divide', 'share, split, equal groups']], ['Operation', 'Clue words'])),
        st("But always think about the story too. The clue words help, but the story decides.")]),
      SC('A two-step problem', 'Tickets and a programme', [
        st("Cinema tickets cost seven pounds each. Ben buys three tickets and one programme for four pounds. How much does he spend? Three tickets at seven pounds is a multiplication. Then add the programme.", V.eq('3 × £7 + £4', 'b')),
        st("Multiply first: three times seven is twenty-one. Then add four. Ben spends twenty-five pounds.", SW + V.eq('3 × £7 + £4', 'b') + V.eq('3 × 7 = 21') + V.eq('21 + 4 = £25', 'g'))]),
      SC('Your turn', 'Pause, think, then listen', [
        st("Your turn! Work out ten plus six times three. Pause and remember which part comes first.", V.eq('10 + 6 × 3 = ?')),
        st("Multiply first: six times three is eighteen. Then add ten. The answer is twenty-eight.", V.eq('6 × 3 = 18') + V.eq('10 + 18 = 28', 'g'))]),
      SC('Let’s recap', 'Order of operations and word problems', [
        st("Well done! Do brackets first, then multiply and divide, then add and subtract. If there is only adding and subtracting, go from left to right. For a word problem, read it, pick out the numbers, choose the operations, solve it, and check the answer makes sense.",
          V.list(['Brackets first', 'Then × and ÷', 'Then + and −', 'Same kind only: left to right', 'Words: read, pick numbers, choose operations, check']))])
    ]
  };

  /* ---------- Use a fact you know (rebuilt in full) ---------- */
  var given = {
    title: 'Use a fact you know', goal: 'how to use one answer you know to find lots of others.',
    scenes: [
      SC('One fact, many answers', 'Work smart, not hard', [
        st("If you know one fact, you can often work out many more without starting again. This is called using a related fact. It saves time and helps you check your work.", V.rule('Look at how the numbers changed. Change the answer in the same way.'))]),
      SC('Fact families', 'If 7 × 6 = 42', [
        st("Let's start with a times table fact: seven times six is forty-two.", V.eq('7 × 6 = 42', 'b')),
        st("We can swap the numbers we multiply: six times seven is also forty-two. And division undoes multiplication: forty-two divided by six is seven, and forty-two divided by seven is six.", V.eq('6 × 7 = 42') + V.eq('42 ÷ 6 = 7') + V.eq('42 ÷ 7 = 6', 'g')),
        st("These four facts belong to one fact family.", V.note('One fact gives you four'))]),
      SC('Ten times bigger', 'If 24 × 3 = 72', [
        st("Suppose you know that twenty-four times three is seventy-two.", V.eq('24 × 3 = 72', 'b')),
        st("What is two hundred and forty times three? Twenty-four became ten times bigger, so the answer becomes ten times bigger too. Seven hundred and twenty.", V.eq('240 × 3 = 720', 'g')),
        st("And twenty-four times thirty? This time the three became ten times bigger, so again the answer is ten times bigger. Seven hundred and twenty.", V.eq('24 × 30 = 720', 'g'))]),
      SC('Both numbers bigger', 'If 24 × 3 = 72', [
        st("What if both numbers change? Two hundred and forty times thirty. Twenty-four is ten times bigger and three is ten times bigger, so the answer is ten times ten, one hundred times bigger.", V.eq('240 × 30 = ?', 'b')),
        st("Seventy-two times one hundred is seven thousand two hundred.", V.eq('240 × 30 = 7,200', 'g'))]),
      SC('Ten times smaller', 'If 24 × 3 = 72', [
        st("Numbers can get smaller too. Twenty-four times zero point three. Three became ten times smaller, so the answer becomes ten times smaller.", V.eq('24 × 0.3 = ?', 'b')),
        st("Seventy-two divided by ten is seven point two.", V.eq('24 × 0.3 = 7.2', 'g'))]),
      SC('Doubling', 'If 15 × 4 = 60', [
        st("Doubling works the same way. If fifteen times four is sixty, then fifteen times eight is double that, because eight is double four. One hundred and twenty.", V.eq('15 × 4 = 60', 'b') + V.eq('15 × 8 = 120', 'g')),
        st("And thirty times four is also one hundred and twenty, because thirty is double fifteen.", V.eq('30 × 4 = 120', 'g'))]),
      SC('Clever shortcut: times 99', '34 × 99', [
        st("To multiply by ninety-nine, multiply by one hundred, then take away one lot of the number. Thirty-four times one hundred is three thousand four hundred.", V.eq('34 × 100 = 3,400', 'b')),
        st("Ninety-nine lots is one lot fewer, so take away thirty-four. Three thousand three hundred and sixty-six.", V.eq('34 × 99 = 3,400 − 34 = 3,366', 'g'))]),
      SC('Clever shortcut: the same number twice', '15 × 66 − 15 × 63', [
        st("Fifteen times sixty-six, take away fifteen times sixty-three. Both parts have fifteen, so we only need fifteen times the difference between sixty-six and sixty-three.", V.eq('15 × 66 − 15 × 63', 'b') + V.eq('66 − 63 = 3')),
        st("Fifteen times three is forty-five. Much quicker!", V.eq('15 × 3 = 45', 'g'))]),
      SC('Your turn', 'Pause, think, then listen', [
        st("Your turn! You know that thirteen times six is seventy-eight. What is one hundred and thirty times six? Pause and think about how the numbers changed.", V.eq('13 × 6 = 78', 'b') + V.eq('130 × 6 = ?')),
        st("Thirteen became ten times bigger, so the answer is ten times bigger: seven hundred and eighty.", V.eq('130 × 6 = 780', 'g'))]),
      SC('Let’s recap', 'Use a fact you know', [
        st("Well done! Look at how each number changed, then change the answer in the same way. Use fact families to turn one fact into four. Look for shortcuts, like times one hundred take away one, or the same number appearing twice.",
          V.list(['A fact family gives four facts', 'Ten times bigger → answer ten times bigger', 'Ten times smaller → answer ten times smaller', '× 99 → × 100, then take one lot away', 'Same number twice → group them']))])
    ]
  };

  BT.lessons(502, 'Watch lesson', [colAdd, colSub, mental, countOn, partAdd, times, remainders, order, given]);
})();
