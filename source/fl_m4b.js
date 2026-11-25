/* fl_m4b.js: P4 Adding and subtracting (402), Multiplication and division (403) */
(function () {
  'use strict';
  var FL = window.FL; if (!FL || !FL.P4) return;
  var P = FL.P4, r = FL.r, pick = FL.pick, mc = FL.mcq;

  /* ===== 402 Adding and subtracting ===== */
  P(402, 'learn1', { ch: 'fox', bg: 'day',
    way: 'To add 9, add 10 then take away 1. To add 19, add 20 then take away 1. This is compensating.|+9 = +10 -1',
    ex: ['What is 46 + 9?|Add 10: 56.;Take away 1: 55.|55|46 + 10 = 56', 'What is 83 - 19?|Take away 20: 63.;Add 1 back: 64.|64|83 - 20 = 63'],
    mist: 'Remember to put the extra back. 46 + 9 is 55, not 56.|+10 then -1',
    real: 'A book costs 49p. You buy 3 of them. Think: 3 × 50p take 3p.|£1.47|£1.50,£1.53,£1.40|150 - 3 = 147.|3 × 50p = 150p',
    qs: ['34 + 9 = ?|43|44,42,33|34 + 10 - 1.', '57 + 19 = ?|76|77,75,66|57 + 20 - 1.', '72 - 9 = ?|63|62,64,61|72 - 10 + 1.', '65 - 19 = ?|46|45,47,44|65 - 20 + 1.', '48 + 11 = ?|59|58,60,49|48 + 10 + 1.', '90 - 21 = ?|69|70,68,71|90 - 20 - 1.', '45 + 29 = ?|74|73,75,64|45 + 30 - 1.', '90 - 29 = ?|61|60,62,71|90 - 30 + 1.'],
    gen: function g(lv) { var a = r(21, lv ? 89 : 70), k = pick(lv ? [9, 19, 29, 11, 21] : [9, 19, 11]), up = r(0, 1), res = up ? a + k : a - k; if (res < 1) return g(lv); var near = Math.round(k / 10) * 10 || 10; return mc('Compensating', 'What is <b>' + a + (up ? ' + ' : ' - ') + k + '</b>?', res, [res + 1, res - 1, res + 10, res - 10], 'Use ' + near + ' and adjust by ' + Math.abs(near - k) + '.', a + (up ? ' + ' : ' - ') + k + ' = ' + res + '.'); } });

  P(402, 'learn2', { ch: 'fox', bg: 'day',
    way: 'Line up the digits. Add the ones first, then add the tens.|ones first, then tens',
    ex: ['What is 52 + 36?|Ones: 2 + 6 = 8.;Tens: 5 + 3 = 8.|88|52, +36, 88', 'What is 47 + 35?|Ones: 7 + 5 = 12. Write 2 and carry 1 ten.;Tens: 4 + 3 + 1 = 8.|82|47, +35, 82'],
    mist: 'Line up ones under ones. Do not add a tens digit to a ones digit.|ones, tens',
    real: 'A school has 32 girls and 45 boys. How many pupils?|77|67,87,76|32 + 45.|32 + 45',
    qs: ['34 + 25 = ?|59|49,58,69|4 + 5 = 9 then 3 + 2 = 5.', '41 + 38 = ?|79|69,78,89|1 + 8 = 9 then 4 + 3 = 7.', '52 + 17 = ?|69|59,68,79|2 + 7 = 9 then 5 + 1 = 6.', '23 + 64 = ?|87|77,86,97|3 + 4 = 7 then 2 + 6 = 8.', '60 + 28 = ?|88|78,87,98|0 + 8 = 8 then 6 + 2 = 8.', '15 + 43 = ?|58|48,57,68|5 + 3 = 8 then 1 + 4 = 5.', '38 + 24 = ?|62|52,61,72|8 + 4 = 12, write 2 carry 1. Then 3 + 2 + 1 = 6.', '27 + 15 = ?|42|32,41,52|7 + 5 = 12, write 2 carry 1. Then 2 + 1 + 1 = 4.'],
    gen: function g(lv) { var p = FL.p4pairs.add(lv ? 2 : 1, lv ? 6 : 5, lv && r(0, 1)), a = p[0], b = p[1]; return mc('Adding in columns', 'What is <b>' + a + ' + ' + b + '</b>?', a + b, [a + b + 10, a + b - 10, a + b + 1, a + b - 1], 'Add the ones, then add the tens. Carry 1 ten if the ones make 10 or more.', a + ' + ' + b + ' = ' + (a + b) + '.'); } });

  P(402, 'learn3', { ch: 'fox', bg: 'day',
    way: 'Line up the digits. Subtract the ones first, then subtract the tens.|ones first, then tens',
    ex: ['What is 87 - 43?|Ones: 7 - 3 = 4.;Tens: 8 - 4 = 4.|44|87, -43, 44', 'What is 56 - 32?|Ones: 6 - 2 = 4.;Tens: 5 - 3 = 2.|24|56, -32, 24'],
    mist: 'Always take the bottom number from the top. Do not add them.|top take away bottom',
    real: 'A bus holds 78. 35 are on board. How many seats left?|43|113,33,42|78 - 35.|78 - 35',
    qs: ['68 - 25 = ?|43|93,33,42|8 - 5 = 3 then 6 - 2 = 4.', '79 - 36 = ?|43|115,33,42|9 - 6 = 3 then 7 - 3 = 4.', '85 - 23 = ?|62|108,52,63|5 - 3 = 2 then 8 - 2 = 6.', '47 - 24 = ?|23|71,33,22|7 - 4 = 3 then 4 - 2 = 2.', '96 - 55 = ?|41|151,31,42|6 - 5 = 1 then 9 - 5 = 4.', '59 - 38 = ?|21|97,31,20|9 - 8 = 1 then 5 - 3 = 2.', '74 - 41 = ?|33|115,43,32|4 - 1 = 3 then 7 - 4 = 3.', '88 - 62 = ?|26|150,36,25|8 - 2 = 6 then 8 - 6 = 2.'],
    gen: function g(lv) { var p = FL.p4pairs.sub(lv ? 5 : 3, 9), a = p[0], b = p[1]; return mc('Subtracting in columns', 'What is <b>' + a + ' - ' + b + '</b>?', a - b, [a - b + 10, a - b - 10, a - b + 1, a - b - 1], 'Subtract the ones, then subtract the tens.', a + ' - ' + b + ' = ' + (a - b) + '.'); } });

  P(402, 'learn4', { ch: 'fox', bg: 'day',
    way: 'Round each number to the nearest 10 first, then add or subtract. The estimate tells you if your answer is sensible.|48 + 31 ≈ 50 + 30',
    ex: ['Estimate 48 + 31.|48 rounds to 50.;31 rounds to 30.;50 + 30 = 80.|about 80|50 + 30', 'Estimate 82 - 39.|82 rounds to 80, 39 rounds to 40.;80 - 40 = 40.|about 40|80 - 40'],
    mist: 'An estimate is not exact. Use it to check, not to give the final answer.|≈ means about',
    real: 'You work out 38 + 21 = 49. Is that sensible? Estimate: 40 + 20.|No, about 60|Yes,about 50,about 600|Estimate is 60, so check 49.|40 + 20',
    qs: ['Estimate 48 + 31 by rounding to tens.|80|90,70,50|50 + 30.', 'Estimate 39 + 22.|60|50,70,90|40 + 20.', 'Estimate 61 - 29.|30|40,20,90|60 - 30.', 'Estimate 52 + 38.|90|80,100,70|50 + 40.', 'Estimate 74 - 31.|40|30,50,110|70 - 30.', 'Estimate 78 + 22.|100|90,110,70|80 + 20.', 'Estimate 41 + 59.|100|90,110,40|40 + 60.', 'Estimate 91 - 48.|40|50,30,140|90 - 50.'],
    gen: function g(lv) { var a = r(21, 89), b = r(11, lv ? 59 : 39), ra = Math.round(a / 10) * 10, rb = Math.round(b / 10) * 10, up = r(0, 1); if (!up && ra - rb < 10) return g(lv); var e = up ? ra + rb : ra - rb; return mc('Estimating', 'Estimate <b>' + a + (up ? ' + ' : ' - ') + b + '</b> by rounding to the nearest 10.', e, [e + 10, e - 10, a + b, e + 20], 'Round each number, then do the sum.', ra + (up ? ' + ' : ' - ') + rb + ' = ' + e + '.'); } });

  P(402, 'learnm1', { ch: 'fox', bg: 'day',
    t: 'Partitioning to add|How can I split numbers to add them?|Split a number into hundreds, tens and ones, add the parts, then put them back together.|45 + 32 = 40 + 30 + 5 + 2',
    words: 'partition=split a number into parts=✂️;total=the answer to an addition=🧮;tens=groups of 10=🔟;ones=single units=1️⃣',
    see: ['Split 45 into 40 and 5. Split 32 into 30 and 2.|45 = 40 + 5,32 = 30 + 2', 'Add the tens: 40 + 30 = 70. Add the ones: 5 + 2 = 7.|70,7', 'Put it together: 70 + 7 = 77.|45 + 32 = 77'],
    ex3: ['What is 54 + 23?|50 + 20 = 70.;4 + 3 = 7.;70 + 7 = 77.|77|50 + 20,4 + 3', 'What is 63 + 28?|60 + 20 = 80.;3 + 8 = 11.;80 + 11 = 91.|91|80 + 11', 'What is 27 + 31?|20 + 30 = 50.;7 + 1 = 8.;50 + 8 = 58.|58|20 + 30,7 + 1'],
    mist: 'Add the tens as tens. 40 + 30 is 70, not 7.|tens stay tens',
    chk: 'What is 35 + 42?|77|67,87,75|30 + 40 + 5 + 2.|35 + 42',
    rem: 'Split, add tens, add ones, put back together.|split, add, join',
    way: 'Draw base ten blocks, a rod for each ten and a cube for each one.|4 rods 5 cubes,3 rods 2 cubes',
    ex: ['What is 36 + 41?|30 + 40 = 70.;6 + 1 = 7.|77|70 + 7', 'What is 72 + 19?|70 + 10 = 80.;2 + 9 = 11.|91|80 + 11'],
    real: 'You have 47 marbles and win 22. How many now?|69|59,79,25|40 + 20, 7 + 2.|47 + 22',
    qs: ['23 + 45 = ?|68|58,78,65|20 + 40, 3 + 5.', '51 + 36 = ?|87|77,97,85|50 + 30, 1 + 6.', '64 + 25 = ?|89|79,99,84|60 + 20, 4 + 5.', '38 + 27 = ?|65|55,75,64|30 + 20, 8 + 7 = 15.', '75 + 18 = ?|93|83,103,92|70 + 10, 5 + 8 = 13.', '31 + 58 = ?|89|79,99,88|30 + 50, 1 + 8.', 'Split 67 into tens and ones.|60 + 7|6 + 7,70 + 6,600 + 7|6 tens and 7 ones.', '44 + 44 = ?|88|84,78,98|Double 44.'],
    gen: function g(lv) { var a = r(12, lv ? 89 : 59), b = r(12, lv ? 89 : 59); return mc('Partitioning', 'Use partitioning to work out <b>' + a + ' + ' + b + '</b>.', a + b, [a + b + 10, a + b - 10, a + b + 1, a + b - 1], 'Add the tens, add the ones, then join.', a + ' + ' + b + ' = ' + (a + b) + '.'); } });

  P(402, 'learnm2', { ch: 'fox', bg: 'day',
    t: 'Add or subtract?|How do I know whether to add or subtract?|Read the story. Joining, getting more, or finding the total means add. Taking away, giving, or finding the difference means subtract.|join = add,take away = subtract',
    words: 'total=altogether=🧮;difference=how many more or less=↔️;left=what remains=🧺;more than=add on=➕',
    see: ['“How many altogether?” means add.|3 + 4 = 7', '“How many are left?” means subtract.|9 - 4 = 5', '“How many more?” means find the difference.|12 - 7 = 5'],
    ex3: ['Sam has 25 cards. He gets 14 more. How many now?|Getting more means add.;25 + 14 = 39.|39|25 + 14', 'There are 68 sweets. 27 are eaten. How many left?|Eaten means take away.;68 - 27 = 41.|41|68 - 27', 'Ali has 45 and Bea has 30. How many more has Ali?|More means difference.;45 - 30 = 15.|15|45 - 30'],
    mist: 'Do not pick by the biggest number. Read what is happening in the story.|story first',
    chk: 'There are 14 red and 9 blue balloons. How many altogether?|23|5,24,13|Altogether means add.|14 + 9',
    rem: 'Picture the story, choose add or subtract, then check the answer makes sense.|read, choose, check',
    way: 'Draw a bar model: one long bar for the total and two short bars for the parts.|total = part + part',
    ex: ['A box has 38 pens. 15 are used. How many left?|Used means take away.;38 - 15 = 23.|23|38 - 15', 'A shop sells 26 apples and 13 pears. How many fruit?|Altogether means add.;26 + 13 = 39.|39|26 + 13'],
    real: 'A class has 29 children. 8 are away. How many are in school?|21|37,20,22|Away means take away.|29 - 8',
    qs: ['15 birds and 8 more arrive. Altogether?|23|7,22,24|Add.', '48 balloons, 12 pop. How many left?|36|60,38,35|Subtract.', 'Amy has 30p, Ben has 45p. How many more has Ben?|15p|75p,25p,5p|Difference.', '68 ducks, 25 leave. How many left?|43|93,33,42|Subtract.', '17 + 22 pupils. How many altogether?|39|29,49,38|Add.', 'A jug has 95 ml. 35 ml is poured out. Left?|60 ml|130 ml,70 ml,50 ml|Subtract.', '53 and 36. How many altogether?|89|79,17,99|Add.', 'Which sum for “How many more is 75 than 42”?|75 - 42|75 + 42,42 - 75,75 × 42|Difference.'],
    gen: function g(lv) { var ad = r(0, 1), p = ad ? FL.p4pairs.add(2, 6) : FL.p4pairs.sub(4, 9), a = p[0], b = p[1], name = pick(['marbles', 'stickers', 'books', 'coins']); return ad ? mc('Add or subtract', 'Mia has <b>' + a + '</b> ' + name + ' and gets <b>' + b + '</b> more. How many does she have <b>now</b>?', a + b, [a - b, a + b + 10, a + b - 1], 'Getting more means add.', a + ' + ' + b + ' = ' + (a + b) + '.') : mc('Add or subtract', 'Mia has <b>' + a + '</b> ' + name + ' and gives away <b>' + b + '</b>. How many are <b>left</b>?', a - b, [a + b, a - b + 10, a - b - 1], 'Giving away means take away.', a + ' - ' + b + ' = ' + (a - b) + '.'); } });

  P(402, 'learnm3', { ch: 'fox', bg: 'day',
    t: 'Missing numbers|How do I find a missing number?|Use the opposite. Addition and subtraction undo each other. To find a missing part, subtract from the total.|? + 8 = 20, so 20 - 8 = 12',
    words: 'missing number=the number we must find=❓;inverse=the opposite operation=🔄;total=the whole amount=🧮;part=a piece of the total=🧩',
    see: ['? + 8 = 20. The total is 20 and one part is 8.|20 = 8 + ?', 'Find the other part: 20 - 8 = 12.|12 + 8 = 20 ✓', 'Check by putting 12 back in the box.|12 + 8 = 20'],
    ex3: ['? + 15 = 40|40 - 15 = 25.|25|25 + 15 = 40', '60 - ? = 24|The part taken is 60 - 24.;36.|36|60 - 36 = 24', '? - 12 = 30|Add back: 30 + 12.;42.|42|42 - 12 = 30'],
    mist: 'Do not guess. Work out with the opposite, then check by putting your answer in.|check it',
    chk: '? + 9 = 30. What is the missing number?|21|39,20,22|30 - 9.|30 - 9',
    rem: 'Missing part: use the opposite. Always check.|add ↔ subtract',
    way: 'Draw a bar model with the total on top and the parts below. Fill in what you know.|total 50,part 20,part ?',
    ex: ['25 + ? = 70|70 - 25 = 45.|45|45 + 25 = 70', '? - 18 = 22|22 + 18 = 40.|40|40 - 18 = 22'],
    real: 'You need 78 points. You have 52. How many more?|26|36,130,25|78 - 52.|52 + ? = 78',
    qs: ['? + 20 = 50|30|70,40,20|50 - 20.', '35 + ? = 60|25|95,35,15|60 - 35.', '? - 10 = 45|55|35,45,65|45 + 10.', '80 - ? = 30|50|110,40,60|80 - 30.', '? + 45 = 99|54|144,64,44|99 - 45.', '95 - ? = 55|40|150,50,30|95 - 55.', '? - 25 = 25|50|0,25,100|25 + 25.', '17 + ? = 17|0|17,34,1|Nothing needed.'],
    gen: function g(lv) { var p = FL.p4pairs.add(1, lv ? 5 : 4), a = p[0], b = p[1], t = a + b, k = r(0, 2); return k === 0 ? mc('Missing numbers', 'What is the missing number? <b>? + ' + a + ' = ' + t + '</b>', b, [b + 10, b - 1, t + a], 'Subtract the part from the total.', t + ' - ' + a + ' = ' + b + '.') : k === 1 ? mc('Missing numbers', 'What is the missing number? <b>' + t + ' - ? = ' + a + '</b>', b, [b + 10, b - 1, t + a], 'Subtract the answer from the total.', t + ' - ' + a + ' = ' + b + '.') : mc('Missing numbers', 'What is the missing number? <b>? - ' + a + ' = ' + b + '</b>', t, [t + 10, t - 1, b - a < 1 ? t + 5 : b - a], 'Add back.', b + ' + ' + a + ' = ' + t + '.'); } });

  /* a picture of rows of cakes, made when the lesson is built */
  function AR(rows, per, show) { return function () { return FL.p4.arr(rows, per, 'cake', show); }; }

  /* ===== 403 Multiplication and division ===== */
  P(403, 'learn1', { ch: 'bear', bg: 'farm',
    vis: [['Look at 7 cakes in a row. To double 7 we make 2 rows of 7. 7 + 7 = 14.', AR(2, 7, 3)], ['Double again. Now there are 4 rows of 7. That is double 14, which is 28. So 7 × 4 = 28.', AR(4, 7, 3)], ['Halving goes the other way. 28 cakes in 4 equal rows is 7 in each row. 28 ÷ 4 = 7.', AR(4, 7, 2)]],
    way: 'To double a number, add it to itself. To halve it, share it into 2 equal parts.|double 7 = 14,half of 14 = 7',
    ex: ['Double 26.|Double 20 = 40.;Double 6 = 12.;40 + 12 = 52.|52|20 + 20,6 + 6', 'Half of 74.|Half of 70 = 35.;Half of 4 = 2.;35 + 2 = 37.|37|70 → 35,4 → 2'],
    mist: 'Doubling is × 2. Halving is ÷ 2. Do not mix them up.|× 2 and ÷ 2',
    real: 'A packet has 38 sweets. You buy 2 packets. How many sweets?|76|40,66,36|Double 38.|38 + 38',
    qs: ['Double 15.|30|20,25,35|15 + 15.', 'Double 40.|80|20,60,44|40 + 40.', 'Double 34.|68|64,38,58|30 → 60, 4 → 8.', 'Half of 50.|25|20,100,5|Share into 2.', 'Half of 86.|43|83,34,53|40 + 3.', 'Half of 120.|60|20,240,30|Half of 12 tens.', 'Double 125.|250|225,150,120|100 → 200, 25 → 50.', 'Half of 9 tens is…|45|90,4,35|90 ÷ 2.'],
    gen: function g(lv) { var n = r(6, lv ? 99 : 49), dbl = r(0, 1); if (!dbl && n % 2) n++; return dbl ? mc('Doubling', 'What is <b>double ' + n + '</b>?', n * 2, [n * 2 + 10, n * 2 - 2, n + 2, n * 2 + 2], 'Add the number to itself.', n + ' + ' + n + ' = ' + n * 2 + '.') : mc('Halving', 'What is <b>half of ' + n + '</b>?', n / 2, [n / 2 + 1, n / 2 + 10, n * 2, n / 2 - 1], 'Share into 2 equal parts.', 'Half of ' + n + ' is ' + n / 2 + '.'); } });

  P(403, 'learn2', { ch: 'bear', bg: 'farm',
    way: 'To multiply by 20, 30 or 40, multiply by 2, 3 or 4, then by 10.|3 × 20 = 3 × 2 × 10',
    ex: ['What is 4 × 30?|4 × 3 = 12.;12 × 10 = 120.|120|4 × 3 = 12', 'What is 6 × 50?|6 × 5 = 30.;30 × 10 = 300.|300|6 × 5 = 30'],
    mist: 'Do not forget the zero. 4 × 30 = 120, not 12.|× 10 adds a place',
    real: 'Each bag has 40 stickers. There are 5 bags. How many?|200|45,20,2000|5 × 4 = 20.|5 × 40',
    qs: ['2 × 20 = ?|40|22,4,400|2 × 2 = 4.', '3 × 30 = ?|90|33,9,900|3 × 3 = 9.', '5 × 20 = ?|100|25,10,1000|5 × 2 = 10.', '4 × 50 = ?|200|54,20,2000|4 × 5 = 20.', '6 × 40 = ?|240|64,24,2400|6 × 4 = 24.', '7 × 30 = ?|210|37,21,2100|7 × 3 = 21.', '9 × 20 = ?|180|29,18,1800|9 × 2 = 18.', '8 × 50 = ?|400|58,40,4000|8 × 5 = 40.'],
    gen: function g(lv) { var a = r(2, lv ? 9 : 6), b = pick(lv ? [20, 30, 40, 50, 60] : [20, 30, 40, 50]), p = a * b; return mc('Multiples of ten', 'What is <b>' + a + ' × ' + b + '</b>?', p, [p / 10, p * 10, a + b, p + 10], 'Do ' + a + ' × ' + b / 10 + ' then × 10.', a + ' × ' + b / 10 + ' = ' + p / 10 + ', then × 10 = ' + p + '.'); } });

  P(403, 'learn3', { ch: 'bear', bg: 'farm',
    vis: [['Take 3 rows of 24. Split each row into 20 and 4. 3 rows of 20 is 60.', AR(3, 4, 1)], ['3 rows of 4 is 12. Now put the parts together: 60 + 12 = 72. So 3 × 24 = 72.', AR(3, 4, 3)]],
    way: 'Split the two-digit number into tens and ones. Multiply each part, then add.|4 × 23 = 4 × 20 + 4 × 3',
    ex: ['What is 3 × 24?|3 × 20 = 60.;3 × 4 = 12.;60 + 12 = 72.|72|60 + 12', 'What is 5 × 36?|5 × 30 = 150.;5 × 6 = 30.;150 + 30 = 180.|180|150 + 30'],
    mist: 'Multiply both the tens and the ones. 3 × 24 is not 3 × 20.|do both parts',
    real: '6 boxes hold 18 pencils each. How many pencils?|108|24,96,118|6 × 10 + 6 × 8.|6 × 18',
    qs: ['2 × 23 = ?|46|43,26,25|40 + 6.', '3 × 31 = ?|93|34,91,63|90 + 3.', '4 × 22 = ?|88|26,80,84|80 + 8.', '5 × 17 = ?|85|75,22,95|50 + 35.', '6 × 14 = ?|84|20,64,74|60 + 24.', '3 × 45 = ?|135|120,125,105|120 + 15.', '7 × 12 = ?|84|19,74,94|70 + 14.', '4 × 35 = ?|140|120,130,150|120 + 20.'],
    gen: function g(lv) { var a = r(2, lv ? 9 : 5), b = r(11, lv ? 49 : 29), t = Math.floor(b / 10) * 10, o = b % 10; return mc('Two-digit multiplying', 'What is <b>' + a + ' × ' + b + '</b>?', a * b, [a * t + o, a * b + a, a * b - 10, a * t], 'Split ' + b + ' into ' + t + ' and ' + o + '.', a + ' × ' + t + ' = ' + a * t + ', ' + a + ' × ' + o + ' = ' + a * o + ', total ' + a * b + '.'); } });

  P(403, 'learn4', { ch: 'bear', bg: 'farm',
    vis: [['Here are 3 rows of 4 cakes. 3 × 4 = 12.', AR(3, 4, 3)], ['Turn it around: 4 rows of 3 cakes. 4 × 3 = 12. The same 12 cakes!', AR(4, 3, 3)], ['Share the 12 cakes into 3 equal rows: 12 ÷ 3 = 4. Or into 4 equal rows: 12 ÷ 4 = 3.', AR(3, 4, 1)]],
    way: 'Use a fact you know to find a new one. If 3 × 4 = 12, then 30 × 4 = 120 and 12 ÷ 4 = 3.|3 × 4 = 12 → 12 ÷ 4 = 3',
    ex: ['You know 6 × 4 = 24. What is 24 ÷ 4?|Division undoes multiplication.|6|24 ÷ 4 = 6', 'You know 5 × 8 = 40. What is 50 × 8?|5 tens × 8 = 40 tens.|400|50 × 8 = 400'],
    mist: 'Division is the opposite of multiplication. 24 ÷ 6 = 4 because 6 × 4 = 24.|× and ÷ undo',
    real: 'You know 7 × 5 = 35. How many fives make 35?|7|30,5,175|35 ÷ 5 = 7.|35 ÷ 5',
    qs: ['3 × 6 = 18. So 18 ÷ 6 = ?|3|9,12,6|Opposite.', '4 × 5 = 20. So 40 × 5 = ?|200|2000,25,45|× 10.', '7 × 4 = 28. So 28 ÷ 7 = ?|4|7,21,35|Opposite.', '9 × 3 = 27. So 90 × 3 = ?|270|27,2700,120|× 10.', '8 × 6 = 48. So 480 ÷ 6 = ?|80|8,48,800|÷ by 6 then × 10.', '2 × 9 = 18. So 18 ÷ 2 = ?|9|16,20,36|Opposite.', '5 × 7 = 35. So 5 × 70 = ?|350|35,3500,75|× 10.', '6 × 6 = 36. So 36 ÷ 6 = ?|6|30,12,216|Opposite.'],
    gen: function g(lv) { var a = r(2, lv ? 9 : 6), b = r(2, lv ? 9 : 6), p = a * b, k = r(0, 1); return k ? mc('Fact families', 'You know <b>' + a + ' × ' + b + ' = ' + p + '</b>. What is <b>' + p + ' ÷ ' + b + '</b>?', a, [b, p, a + 1, a - 1 || 10], 'Division undoes multiplication.', p + ' ÷ ' + b + ' = ' + a + '.') : mc('Fact families', 'You know <b>' + a + ' × ' + b + ' = ' + p + '</b>. What is <b>' + a + ' × ' + b * 10 + '</b>?', p * 10, [p, p * 100, p + 10], 'It is 10 times bigger.', a + ' × ' + b * 10 + ' = ' + p * 10 + '.'); } });

  P(403, 'learn5', { ch: 'bear', bg: 'farm',
    way: 'Sometimes a division does not come out exactly. What is left over is the remainder.|13 ÷ 4 = 3 remainder 1',
    ex: ['What is 17 ÷ 5?|5 × 3 = 15.;17 - 15 = 2.|3 remainder 2|5 × 3 = 15', 'What is 25 ÷ 6?|6 × 4 = 24.;25 - 24 = 1.|4 remainder 1|6 × 4 = 24'],
    mist: 'The remainder is always smaller than what you divide by.|r < divisor',
    real: '14 children make teams of 4. How many teams, and how many left?|3 teams, 2 left|4 teams, 2 left,3 teams, 1 left,2 teams, 3 left|4 × 3 = 12.|14 ÷ 4',
    qs: ['What is 7 ÷ 2?|3 remainder 1|4 remainder 1,3 remainder 0,2 remainder 3|2 × 3 = 6.', 'What is 11 ÷ 3?|3 remainder 2|2 remainder 3,4 remainder 1,3 remainder 1|3 × 3 = 9.', 'What is 19 ÷ 4?|4 remainder 3|5 remainder 1,3 remainder 4,4 remainder 2|4 × 4 = 16.', 'What is 22 ÷ 5?|4 remainder 2|5 remainder 0,4 remainder 3,3 remainder 7|5 × 4 = 20.', 'What is 15 ÷ 3?|5|4 remainder 3,6,5 remainder 1|Exact.', 'What is 30 ÷ 7?|4 remainder 2|5 remainder 0,3 remainder 9,4 remainder 3|7 × 4 = 28.', 'Which remainder is possible for ÷ 3?|2|3,4,5|Must be smaller than 3.', 'What is 26 ÷ 10?|2 remainder 6|3 remainder 4,2 remainder 0,26|10 × 2 = 20.'],
    gen: function g(lv) { var d = r(2, lv ? 9 : 5), q = r(2, lv ? 9 : 6), rm = r(1, d - 1), n = d * q + rm; return mc('Remainders', 'What is <b>' + n + ' ÷ ' + d + '</b>?', q + ' remainder ' + rm, [(q + 1) + ' remainder ' + rm, q + ' remainder ' + (rm + 1 < d ? rm + 1 : rm - 1 || 2), (q - 1) + ' remainder ' + (rm + d)], d + ' × ' + q + ' = ' + d * q + '. What is left?', d + ' × ' + q + ' = ' + d * q + ', and ' + n + ' - ' + d * q + ' = ' + rm + '.'); } });

  P(403, 'learnm1', { ch: 'bear', bg: 'farm',
    t: 'Times table tricks|How can I learn the 6, 7, 8 and 9 times tables?|Use facts you already know. For 6s, double the 3s. For 9s, take away from the 10s. For 8s, double three times.|6 × 4 = double 3 × 4',
    words: 'multiple=a number in a times table=✖️;product=the answer to a multiplication=🎯;double=× 2=2️⃣;fact=a number sentence you know=📘',
    see: ['6 × 4: double 3 × 4 = 12, so 6 × 4 = 24.|3 × 4 = 12,6 × 4 = 24', '9 × 4: do 10 × 4 = 40, then take away 4.|40 - 4 = 36', '8 × 3: double 2 × 3 = 6, then double 12.|3 → 6 → 12 → 24'],
    ex3: ['What is 6 × 7?|5 × 7 = 35.;Add one more 7: 42.|42|35 + 7', 'What is 9 × 6?|10 × 6 = 60.;Take away 6: 54.|54|60 - 6', 'What is 8 × 7?|4 × 7 = 28.;Double: 56.|56|28 × 2'],
    mist: 'In the 9 times table the digits of the answer add to 9. 9 × 4 = 36 and 3 + 6 = 9.|3 + 6 = 9',
    chk: 'What is 9 × 7?|63|56,72,69|10 × 7 - 7.|70 - 7',
    rem: 'Build new facts from easy ones: 5s, 10s and doubles.|5s, 10s, doubles',
    vis: [['Let us find 6 × 4. First look at 3 × 4. That is 3 rows of 4 cakes: 12.', AR(3, 4, 3)], ['6 rows is double 3 rows. Double 12 is 24. So 6 × 4 = 24.', AR(6, 4, 3)], ['For 9 × 4, think 10 × 4 = 40, then take away one row of 4. 40 − 4 = 36.', AR(9, 4, 3)]],
    way: 'Draw an array of dots in rows and columns and count the rows of 6.|6 × 4 = 24',
    ex: ['What is 7 × 7?|5 × 7 = 35, 2 × 7 = 14.;35 + 14 = 49.|49|35 + 14', 'What is 8 × 8?|8 × 4 = 32.;Double: 64.|64|32 × 2'],
    real: 'An egg box holds 6. How many eggs in 7 boxes?|42|36,48,13|6 × 7.|7 × 6',
    qs: ['6 × 6 = ?|36|30,42,12|5 × 6 + 6.', '6 × 8 = ?|48|42,54,14|5 × 8 + 8.', '7 × 6 = ?|42|36,48,13|5 × 6 + 12.', '7 × 8 = ?|56|54,63,15|Double 28.', '8 × 9 = ?|72|63,81,17|80 - 8.', '9 × 9 = ?|81|72,99,18|90 - 9.', '9 × 5 = ?|45|54,40,14|50 - 5.', '8 × 6 = ?|48|42,56,14|Double 24.'],
    gen: function g(lv) { var a = r(6, 9), b = r(2, lv ? 9 : 7); return mc('Times tables', 'What is <b>' + a + ' × ' + b + '</b>?', a * b, [a * b + a, a * b - a, a * b + b, a * b + 10, a * b - 1], 'Use a trick: doubles, 5s or 10s.', a + ' × ' + b + ' = ' + a * b + '.'); } });

  P(403, 'learnm2', { ch: 'bear', bg: 'farm',
    t: 'Sharing and grouping|What does dividing mean?|Division means sharing into equal groups, or finding how many groups fit. 12 ÷ 3 can be 12 shared into 3, or how many 3s in 12.|12 ÷ 3 = 4',
    words: 'divide=share equally or group=➗;share=give equal amounts=🍰;group=a set of things together=👥;equal=the same size=🟰',
    see: ['Sharing: 12 cakes are shared between 3 plates, one cake at a time. Each plate gets 4 cakes. 12 ÷ 3 = 4.|' + FL.p4.arr(3, 4, 'cake', 1), 'Grouping: how many plates of 3 cakes can we make from 12 cakes? 4 plates. 12 ÷ 3 = 4.|' + FL.p4.arr(4, 3, 'cake', 1), 'Both give the same answer: 4. And 3 × 4 = 12, so division undoes multiplication.|' + FL.p4.arr(3, 4, 'cake', 3)],
    ex3: ['20 stickers shared between 4. How many each?|20 ÷ 4.;4 × 5 = 20.|5|20 ÷ 4 = 5', 'How many groups of 5 in 35?|5 × 7 = 35.|7|35 ÷ 5 = 7', '18 ÷ 3 = ?|3 × 6 = 18.|6|18 ÷ 3 = 6'],
    mist: 'Division groups must be equal. 10 shared between 3 is not 3, 3, 4.|equal groups',
    chk: 'How many groups of 4 in 24?|6|5,8,20|4 × 6 = 24.|24 ÷ 4',
    rem: 'Divide means share equally or find how many groups.|÷ = share or group',
    vis: [['Look at 6 plates with 3 cakes on each plate. We show them as 6 rows of 3 cakes.', AR(6, 3, 1)], ['Count the cakes in each row: 3, 6, 9, 12, 15, 18. Adding 3 six times: 3 + 3 + 3 + 3 + 3 + 3 = 18.', AR(6, 3, 2)], ['So 6 × 3 = 18. Multiplication is a quick way to add equal groups.', AR(6, 3, 3)], ['Now share 12 cakes between 3 plates. Give one cake to each plate at a time. Each plate gets 4 cakes. 12 ÷ 3 = 4.', AR(3, 4, 1)], ['Or group them: how many plates of 3 cakes can we make from 12 cakes? 4 plates. Again 12 ÷ 3 = 4.', AR(4, 3, 1)], ['Multiplication and division are linked. 3 × 4 = 12, so 12 ÷ 3 = 4.', AR(3, 4, 3)]],
    way: 'Draw 3 circles and put the 12 sweets in one at a time until they are all used up. Every circle ends with 4 sweets.|' + FL.p4.arr(3, 4, 'cake', 1),
    ex: ['16 pencils shared between 4 pots. How many in each?|4 × 4 = 16.|4|16 ÷ 4', 'How many 10s in 70?|10 × 7 = 70.|7|70 ÷ 10'],
    real: '30 children make teams of 5. How many teams?|6|35,25,150|5 × 6 = 30.|30 ÷ 5',
    qs: ['12 ÷ 4 = ?|3|8,16,4|4 × 3 = 12.', '20 ÷ 5 = ?|4|15,25,100|5 × 4 = 20.', '18 ÷ 2 = ?|9|16,20,36|Half.', '24 ÷ 6 = ?|4|18,30,144|6 × 4 = 24.', '40 ÷ 10 = ?|4|30,50,400|10 × 4.', '27 ÷ 3 = ?|9|24,30,81|3 × 9.', '35 ÷ 7 = ?|5|28,42,245|7 × 5.', '48 ÷ 8 = ?|6|40,56,384|8 × 6.'],
    gen: function g(lv) { var d = r(2, lv ? 9 : 6), q = r(2, lv ? 10 : 6), n = d * q; return mc('Sharing and grouping', n + ' items are shared equally between <b>' + d + '</b>. How many each?'.replace(/^/, ''), q, [q + 1, q - 1, n - d, d], d + ' × ? = ' + n + '.', n + ' ÷ ' + d + ' = ' + q + '.'); } });

  P(403, 'learnm3', { ch: 'bear', bg: 'farm',
    t: 'Multiplication and division stories|How do I solve word problems with × and ÷?|Read the story. “Each” or “groups of” means multiply. “Shared equally” or “how many groups” means divide.|3 bags of 5 = 3 × 5',
    words: 'each=for every one=1️⃣;groups of=equal sets=👥;shared=split equally=🍰;total=altogether=🧮',
    see: ['4 boxes with 6 eggs each. 4 × 6 = 24 eggs.|4 × 6 = 24', '20 pens shared into 5 pots. 20 ÷ 5 = 4 each.|20 ÷ 5 = 4', 'Picture the story first, then choose × or ÷.|draw it'],
    ex3: ['5 packs with 8 cards each. How many cards?|5 × 8 = 40.|40|5 × 8', '36 apples into bags of 6. How many bags?|36 ÷ 6 = 6.|6|36 ÷ 6', 'A ticket costs £4. How much for 7 tickets?|7 × 4 = 28.|£28|7 × £4'],
    mist: 'Check the answer. Sharing makes the answer smaller; groups of makes it bigger.|÷ smaller, × bigger',
    chk: 'There are 8 shelves with 5 books each. How many books?|40|13,3,45|8 groups of 5.|8 × 5',
    rem: 'Draw it, choose × or ÷, work it out, check it.|draw, choose, solve',
    way: 'Draw a picture or bar for each group and write the number in it.|3 groups of 5',
    ex: ['6 plates with 3 cakes each. How many cakes?|6 × 3 = 18.|18|6 × 3', '28 children into 4 equal teams. How many each?|28 ÷ 4 = 7.|7|28 ÷ 4'],
    real: 'Crayons cost 9p each. How much for 6 crayons?|54p|15p,45p,64p|6 × 9.|6 × 9p',
    qs: ['4 bags with 7 apples each. How many apples?|28|11,24,32|4 × 7.', '45 sweets shared by 5. How many each?|9|40,50,225|45 ÷ 5.', '6 rows of 8 seats. How many seats?|48|14,42,54|6 × 8.', '32 stickers in packs of 4. How many packs?|8|28,36,128|32 ÷ 4.', '9 packs of 3 pens. How many pens?|27|12,24,30|9 × 3.', '60 ÷ 10 children in a game: how many groups of 10?|6|50,70,600|60 ÷ 10.', '7 pizzas cut into 8 slices. How many slices?|56|15,48,63|7 × 8.', '21 cakes in boxes of 3. How many boxes?|7|18,24,63|21 ÷ 3.'],
    gen: function g(lv) { var a = r(3, lv ? 9 : 6), b = r(3, lv ? 9 : 6), m = r(0, 1); return m ? mc('× and ÷ stories', 'There are <b>' + a + ' boxes</b> with <b>' + b + ' pencils</b> in each. How many pencils?', a * b, [a + b, a * b + b, a * b - a], 'Each box has the same number, so multiply.', a + ' × ' + b + ' = ' + a * b + '.') : mc('× and ÷ stories', '<b>' + a * b + ' pencils</b> are put into boxes of <b>' + b + '</b>. How many boxes?', a, [a + 1, a * b - b, a - 1 || 9], 'Groups of ' + b + ': divide.', a * b + ' ÷ ' + b + ' = ' + a + '.'); } });
})();
