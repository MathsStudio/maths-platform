/* P5 509 Mixed reasoning, 510 Factors multiples primes, 513 Spatial awareness */
(function () {
  'use strict';
  var BT = window.BT; if (!BT || !BT.px) return;
  var X = BT.px.X, tbl = BT.px.tbl, grid = BT.px.grid, h = BT.px.h, L = BT.L;
  var barm = function (parts, total, title) { var w = 280, s = '<svg viewBox="0 0 300 70" style="width:100%;max-width:300px"><title>' + title + '</title>', x = 10; parts.forEach(function (p, i) { var pw = w * p[1] / total; s += '<rect x="' + x + '" y="20" width="' + pw + '" height="28" style="fill:' + (i % 2 ? '#d6e4ff' : '#bfe3cc') + ';stroke:currentColor;stroke-width:2"/><text x="' + (x + pw / 2) + '" y="39" text-anchor="middle" font-size="13" fill="currentColor">' + p[0] + '</text>'; x += pw; }); s += '<text x="150" y="12" text-anchor="middle" font-size="12" fill="currentColor">Total ' + total + '</text>'; return h(s + '</svg>'); };

  X('A plan for solving problems', 'a four-step plan to solve any maths problem.', 'Problem solving plan',
    ['Understand, plan, do, check', "Read the problem and find the question. Pick out the facts. Decide what to do. Do the calculation. Then check that the answer makes sense.", ['1 Understand', '2 Plan', '3 Do', '4 Check']],
    [['Shopping', "Mia has £20. She buys 3 books at £4.50 each and a pen for £1.25. How much change? Plan: find the total, then subtract from 20. 3 × 4.50 = 13.50. 13.50 + 1.25 = 14.75. 20 − 14.75 = 5.25. Change £5.25.", ['3 × 4.50 = 13.50', '13.50 + 1.25 = 14.75', 'g|£5.25']],
     ['Check', "Check by adding: 14.75 + 5.25 = 20.00. It works.", ['14.75 + 5.25 = 20', 'g|✓']],
     ['Picking out the facts', "A train has 8 carriages. Each carriage has 64 seats. 389 people are on the train. How many empty seats? Seats 8 × 64 = 512. 512 − 389 = 123 empty seats.", ['8 × 64 = 512', 'g|123']],
     ['Does it make sense?', "123 empty seats is less than 512, so it is sensible.", ['123 < 512', 'g|✓']]],
    [['Rushing', "Mistake one: starting the calculation before understanding the question.", 'Add all the numbers ✗', 'Find what is asked ✓'],
     ['No check', "Mistake two: not checking.", 'Give the answer and stop ✗', 'Check by adding ✓']],
    ["Cooks, builders and shopkeepers all use a plan to solve problems.", ['Plan first']],
    [['A pack of 6 pencils costs £2.40. What does one pencil cost?', "240p ÷ 6.", ['240 ÷ 6'], '40p'],
     ['Tom has 85 stickers and gives 29 away. He gets 14 more. How many has he?', "85 − 29 = 56. 56 + 14.", ['85 − 29 + 14'], '70'],
     ['A rope of 5 m is cut into pieces of 25 cm. How many pieces?', "5 m = 500 cm. 500 ÷ 25.", ['500 ÷ 25'], '20 pieces']],
    ["Understand. Plan. Do. Check.", ['Check makes sense']]);

  X('Bar models', 'how to draw a bar model to solve problems with totals and differences.', 'Bar models',
    ['Draw the problem', "A bar model is a picture with bars for the numbers in the problem. The whole is the total bar. Parts are drawn as sections. Use it to see what to do.", [barm([['girls', 38], ['boys', 46]], 84, 'Bar model of 84 pupils')]],
    [['Total and difference', "A class of 84 pupils has 8 more boys than girls. If we take away the 8 extra, both bars are equal: 84 − 8 = 76. 76 ÷ 2 = 38 girls. Boys are 38 + 8 = 46.", ['84 − 8 = 76', '76 ÷ 2 = 38', 'g|38 girls, 46 boys']],
     ['Check', "38 + 46 = 84.", ['38 + 46 = 84', 'g|✓']],
     ['Times as many', "Sam has 3 times as many marbles as Zak. Together they have 48. Draw 4 equal parts. 48 ÷ 4 = 12. Zak has 12 and Sam has 36.", ['48 ÷ 4 = 12', 'g|Zak 12, Sam 36']],
     ['Part and whole', "A book has 240 pages. Ben has read 3/8. 240 ÷ 8 = 30. 30 × 3 = 90 pages. 150 pages left.", ['240 ÷ 8 × 3', 'g|90 read']]],
    [['Splitting unequally', "Mistake one: dividing the total by 2 when the parts differ.", '84 ÷ 2 = 42 girls ✗', 'Remove the difference first ✓'],
     ['Wrong number of parts', "Mistake two: using 3 parts instead of 4.", '48 ÷ 3 = 16 ✗', 'Zak 1 part + Sam 3 parts = 4 parts ✓']],
    ["Bar models are used in schools around the world to solve problems.", ['Singapore bar model']],
    [['Two numbers total 50. One is 10 more than the other. Find them.', "50 − 10 = 40. 40 ÷ 2 = 20.", ['40 ÷ 2'], '20 and 30'],
     ['Ali has twice as many cards as Bo. Together 45. How many has Bo?', "3 parts: 45 ÷ 3.", ['45 ÷ 3'], '15'],
     ['A jar holds 200 sweets. 3/5 are red. How many are red?', "200 ÷ 5 × 3.", ['40 × 3'], '120']],
    ["Draw it, then calculate.", ['Equal parts']]);

  X('Working backwards', 'how to solve a problem by undoing the steps in reverse.', 'Working backwards',
    ['Undo in reverse', "When you know the end result, start from the answer and undo each step in reverse order. Use the opposite operation for each step.", ['Double, add 6, get 20']],
    [['A number puzzle', "I think of a number, double it and add 6. The answer is 20. Undo: 20 − 6 = 14. 14 ÷ 2 = 7. The number is 7.", ['20 − 6', '14 ÷ 2', 'g|7']],
     ['Check', "7 × 2 + 6 = 20.", ['14 + 6 = 20', 'g|✓']],
     ['Money', "Tom spent half his money, then £3. He has £5 left. Undo: 5 + 3 = 8. 8 × 2 = 16. He started with £16.", ['5 + 3 = 8', '8 × 2 = 16', 'g|£16']],
     ['A time problem', "A film ends at 8:15 pm and lasts 1 hour 45 minutes. 8:15 − 1 h = 7:15. 7:15 − 45 min = 6:30. It started at 6:30 pm.", ['8:15 − 1:45', 'g|6:30 pm']]],
    [['Same operation', "Mistake one: using the same operation to go back.", '20 + 6 = 26 ✗', '20 − 6 = 14 ✓'],
     ['Wrong order', "Mistake two: undoing in the wrong order.", '20 ÷ 2 first ✗', '20 − 6 first ✓']],
    ["Detectives work backwards from the end of a story to the start.", ['End → start']],
    [['I think of a number, triple it and subtract 4. The answer is 14. What is the number?', "14 + 4 = 18. 18 ÷ 3.", ['18 ÷ 3'], '6'],
     ['Amy spent a quarter of her money, then £2. She has £7 left. How much at the start?', "7 + 2 = 9 is 3/4. 9 ÷ 3 = 3 is 1/4. 12.", ['9 ÷ 3 × 4'], '£12'],
     ['A bus journey ends at 3:40 pm and takes 55 minutes. When did it start?', "3:40 − 40 = 3:00. 3:00 − 15 = 2:45.", ['3:40 − 55 min'], '2:45 pm']],
    ["Start at the end. Undo in reverse.", ['Opposite operations']]);

  X('Guess, check and improve', 'how to find an answer by trying numbers and improving your guess.', 'Guess and check',
    ['Try, test, improve', "Make a sensible guess. Check it. If it is too small or too big, change the guess to get closer. Keep a table to stay organised.", ['Guess → check → improve']],
    [['Two numbers', "Two numbers add to 21 and multiply to 80. Try 15 and 6: 90, too big. Try 16 and 5: 16 + 5 = 21 and 16 × 5 = 80. Yes.", ['16 + 5 = 21', '16 × 5 = 80', 'g|16 and 5']],
     ['Pens and pencils', "Pens cost 30p and pencils 20p. 10 items cost £2.60. Try 5 pens: 150 + 100 = 250p, too small. Try 6 pens, 4 pencils: 180 + 80 = 260p. Yes.", [tbl([['Pens', 'Cost', 'Result'], ['5', '250p', 'too low'], ['6', '260p', 'correct']]), 'g|6 pens, 4 pencils']],
     ['Check', "6 + 4 = 10 items. 180 + 80 = 260p = £2.60.", ['10 items', 'g|✓']],
     ['Square root', "Find a number whose square is 144. 10² = 100, too small. 12² = 144. Yes.", ['12 × 12', 'g|12']]],
    [['Stopping at the first try', "Mistake one: giving up after one try.", 'First guess wrong, stop ✗', 'Use the result to improve ✓'],
     ['Not checking both facts', "Mistake two: checking only one fact.", '15 + 6 = 21 so correct ✗', '15 × 6 = 90, not 80 ✓']],
    ["Engineers test designs by trying values and improving them.", ['Test and improve']],
    [['Two numbers add to 14 and multiply to 40. Find them.', "10 and 4.", ['10 + 4 = 14', '10 × 4 = 40'], '10 and 4'],
     ['Apples cost 40p and pears 30p. 8 fruits cost £2.80. How many apples?', "4 apples and 4 pears: 160 + 120 = 280.", ['160 + 120 = 280'], '4 apples'],
     ['A number multiplied by itself is 81. Find it.', "9 × 9.", ['9 × 9'], '9']],
    ["Guess, check, improve.", ['Use a table']]);

  X('Spotting patterns in problems', 'how to spot a pattern and use it to solve a problem.', 'Patterns in problems',
    ['Find the rule', "Write down the first few cases. Look for what changes. Use the pattern to predict the next case.", ['1, 3, 6, 10, 15, …']],
    [['Odd numbers', "1 = 1, 1 + 3 = 4, 1 + 3 + 5 = 9, 1 + 3 + 5 + 7 = 16. The totals are square numbers. 1 + 3 + 5 + 7 + 9 = 25 = 5 × 5.", ['1 + 3 + 5 + 7 + 9', 'g|25']],
     ['Handshakes', "2 people: 1 handshake. 3 people: 3. 4 people: 6. 5 people: 10. The pattern adds 2, 3, 4, ... so 6 people give 15 handshakes.", [tbl([['People', '2', '3', '4', '5', '6'], ['Handshakes', '1', '3', '6', '10', '15']]), 'g|15']],
     ['Check', "For 5 people each shakes 4 hands: 5 × 4 = 20, but each is counted twice. 20 ÷ 2 = 10.", ['5 × 4 ÷ 2', 'g|10 ✓']],
     ['Tables', "Multiples of 9 have digits that add to 9: 18 (1 + 8), 27 (2 + 7), 36 (3 + 6).", ['9, 18, 27, 36']]],
    [['Guessing the pattern from two terms', "Mistake one: deciding the rule too early.", '1, 3: add 2 forever ✗', 'Check more terms ✓'],
     ['Forgetting to count each pair once', "Mistake two: counting each handshake twice.", '5 people: 20 handshakes ✗', '5 people: 10 handshakes ✓']],
    ["Scientists look for patterns in data to make predictions.", ['Predict from patterns']],
    [['Find the sum of the first 6 odd numbers.', "6 × 6.", ['6 × 6'], '36'],
     ['How many handshakes between 7 people?', "7 × 6 ÷ 2.", ['42 ÷ 2'], '21'],
     ['Continue 1, 3, 6, 10, 15.', "Add 6, then 7.", ['15 + 6', '21 + 7'], '21, 28']],
    ["Write cases. Spot the rule.", ['Test your rule']]);

  X('Always, sometimes or never true', 'how to decide if a statement is always, sometimes or never true, using examples and counter-examples.', 'Reasoning',
    ['Test with examples', "To show a statement is not always true, find one example where it fails. This is a counter-example. To show it is always true, you need a reason that works for every case.", ['One counter-example breaks "always"']],
    [['Always', "The sum of two odd numbers is even. 3 + 5 = 8. 7 + 9 = 16. It is always true: two odd numbers each have 1 left over, and the two 1s make a pair.", ['3 + 5 = 8', 'g|Always true']],
     ['Sometimes', "Multiples of 3 are odd. 9 is odd but 6 is even. Sometimes true.", ['9 odd, 6 even', 'g|Sometimes']],
     ['Prime numbers', "All prime numbers are odd. 2 is prime and even, so this is not always true. It is sometimes true.", ['2 is a counter-example', 'g|Not always']],
     ['Never', "A multiple of 4 is odd. Multiples of 4 are 4, 8, 12, ... all even. Never true.", ['4, 8, 12, 16', 'g|Never']]],
    [['One example is enough to prove', "Mistake one: using examples to prove 'always'.", '3 + 5 even, so always ✗', 'Need a reason for all cases ✓'],
     ['Ignoring special numbers', "Mistake two: ignoring special cases such as 2 and 0.", 'All primes are odd ✗', '2 is prime and even ✓']],
    ["Lawyers and scientists search for counter-examples to test claims.", ['Counter-example']],
    [['Always, sometimes or never: the sum of two even numbers is even.', "2 + 4 = 6, 10 + 6 = 16...", ['Even + even'], 'Always'],
     ['Always, sometimes or never: a multiple of 5 ends in 5.', "10 ends in 0.", ['5, 10, 15'], 'Sometimes'],
     ['Always, sometimes or never: a square number is odd.', "4 is even, 9 is odd.", ['4 and 9'], 'Sometimes']],
    ["Find a counter-example.", ['One failure breaks always']]);

  L.usePri(509, ['A plan for solving problems', 'Bar models', 'Working backwards', 'Guess, check and improve', 'Spotting patterns in problems', 'Always, sometimes or never true']);

  X('Factors and factor pairs', 'what a factor is and how to list all the factors of a number.', 'Factors',
    ['Numbers that divide exactly', "A factor of a number divides it exactly, with no remainder. Factors come in pairs that multiply to the number. List them in order: 1 × 24, 2 × 12, 3 × 8, 4 × 6.", ['24 = 1 × 24 = 2 × 12 = 3 × 8 = 4 × 6']],
    [['Listing factors', "List the factors of 24. 1 × 24, 2 × 12, 3 × 8, 4 × 6. The factors are 1, 2, 3, 4, 6, 8, 12, 24.", ['4 pairs', 'g|1, 2, 3, 4, 6, 8, 12, 24']],
     ['Is it a factor?', "Is 7 a factor of 42? 42 ÷ 7 = 6 exactly. Yes.", ['42 ÷ 7 = 6', 'g|Yes']],
     ['Common factors', "Factors of 12: 1, 2, 3, 4, 6, 12. Factors of 18: 1, 2, 3, 6, 9, 18. The common factors are 1, 2, 3 and 6. The biggest is 6.", ['Both lists', 'g|HCF 6']],
     ['Rectangles', "A rectangle of 24 squares can be 1 by 24, 2 by 12, 3 by 8 or 4 by 6.", ['4 rectangles']]],
    [['Missing factors', "Mistake one: forgetting 1 and the number itself.", 'Factors of 24: 2, 3, 4, 6, 8, 12 ✗', 'Include 1 and 24 ✓'],
     ['Factors and multiples', "Mistake two: confusing factors and multiples.", 'Factors of 6: 6, 12, 18 ✗', 'Factors of 6: 1, 2, 3, 6 ✓']],
    ["A teacher arranges 24 chairs in equal rows. The factors tell the possible layouts.", ['6 rows of 4']],
    [['List the factors of 20.', "1×20, 2×10, 4×5.", ['3 pairs'], '1, 2, 4, 5, 10, 20'],
     ['Is 9 a factor of 54?', "54 ÷ 9 = 6.", ['54 ÷ 9'], 'Yes'],
     ['Find the highest common factor of 16 and 24.', "Common: 1, 2, 4, 8.", ['16: 1, 2, 4, 8, 16', '24: 1, 2, 3, 4, 6, 8, 12, 24'], '8']],
    ["Pairs that multiply.", ['Include 1 and the number']]);

  X('Multiples and common multiples', 'what a multiple is and how to find common multiples.', 'Multiples',
    ['The times table', "A multiple of a number is in its times table. The multiples of 6 are 6, 12, 18, 24, 30, … A common multiple is a multiple of two or more numbers. The lowest common multiple is the smallest.", ['Multiples of 6: 6, 12, 18, 24, 30']],
    [['Listing', "Multiples of 4: 4, 8, 12, 16, 20, 24.", ['4 × 1, 4 × 2, ...', 'g|4, 8, 12, 16, 20, 24']],
     ['Common multiples', "Multiples of 4: 4, 8, 12, 16, 20, 24. Multiples of 6: 6, 12, 18, 24. Common multiples are 12 and 24. The lowest is 12.", ['12, 24', 'g|LCM 12']],
     ['Buses', "One bus leaves every 4 minutes and another every 6 minutes. They leave together at 12 minutes.", ['LCM of 4 and 6 = 12', 'g|After 12 minutes']],
     ['Is it a multiple?', "Is 56 a multiple of 8? 8 × 7 = 56. Yes.", ['8 × 7', 'g|Yes']]],
    [['Zero and one', "Mistake one: confusing multiples with factors.", 'Multiples of 6: 1, 2, 3, 6 ✗', 'Multiples of 6: 6, 12, 18 ✓'],
     ['Stopping early', "Mistake two: stopping the lists too early.", 'No common multiple of 4 and 6 ✗', 'Keep going: 12 ✓']],
    ["Timetables repeat at multiples of the gap time.", ['Every 15 min']],
    [['List the first five multiples of 7.', "7, 14, 21, 28, 35.", ['7 × 1 … 7 × 5'], '7, 14, 21, 28, 35'],
     ['Find the lowest common multiple of 3 and 5.', "3, 6, 9, 12, 15; 5, 10, 15.", ['15'], '15'],
     ['Is 45 a multiple of 9?', "9 × 5 = 45.", ['9 × 5'], 'Yes']],
    ["Times table lists.", ['Common = in both']]);

  X('Prime numbers and square numbers', 'how to spot prime numbers and square numbers.', 'Primes and squares',
    ['Special numbers', "A prime number has exactly two factors: 1 and itself. 2, 3, 5, 7, 11, 13, 17, 19, 23, 29 are prime. 1 is not prime. A square number is a number multiplied by itself: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100.", ['Prime: 2 factors', 'Square: n × n']],
    [['Is it prime?', "Is 17 prime? Try dividing by 2, 3: no. 17 has factors 1 and 17 only. Yes.", ['1, 17 only', 'g|Prime']],
     ['Not prime', "Is 51 prime? 5 + 1 = 6 so 3 divides it. 51 = 3 × 17. Not prime.", ['51 ÷ 3 = 17', 'g|Not prime']],
     ['Square', "7² = 7 × 7 = 49.", ['7 × 7', 'g|49']],
     ['Square root', "The square root of 64 is 8, because 8 × 8 = 64.", ['8 × 8', 'g|8']]],
    [['Is 1 prime?', "Mistake one: calling 1 a prime number.", '1 is prime ✗', '1 has one factor, so not prime ✓'],
     ['Squares', "Mistake two: 7² = 14.", '7² = 14 ✗', '7² = 49 ✓']],
    ["A square garden with side 8 m has area 8 × 8 = 64 m².", ['8² = 64']],
    [['Is 21 prime?', "21 = 3 × 7.", ['3 × 7'], 'No'],
     ['Write 9² as a number.', "9 × 9.", ['9 × 9'], '81'],
     ['Which of 15, 17, 19 are prime?', "15 = 3 × 5.", ['17 and 19'], '17 and 19']],
    ["Prime: two factors. Square: n × n.", ['Test small primes']]);

  X('Divisibility tests', 'quick tests to tell if a number divides by 2, 3, 4, 5, 9 and 10.', 'Divisibility',
    ['Quick tests', "By 2: the last digit is even. By 5: the last digit is 0 or 5. By 10: the last digit is 0. By 3: the digits add to a multiple of 3. By 9: the digits add to a multiple of 9. By 4: the last two digits divide by 4.", [tbl([['Divisible by', 'Test'], ['2', 'Last digit even'], ['3', 'Digit sum in 3 times table'], ['4', 'Last two digits ÷ 4'], ['5', 'Ends 0 or 5'], ['9', 'Digit sum in 9 times table']])]],
    [['By 3', "Is 132 divisible by 3? 1 + 3 + 2 = 6. 6 is in the 3 times table. Yes.", ['1 + 3 + 2 = 6', 'g|Yes']],
     ['By 4', "Is 316 divisible by 4? The last two digits are 16. 16 ÷ 4 = 4. Yes.", ['16 ÷ 4', 'g|Yes']],
     ['By 9', "Is 4,725 divisible by 9? 4 + 7 + 2 + 5 = 18. 18 is in the 9 times table. Yes.", ['4 + 7 + 2 + 5 = 18', 'g|Yes']],
     ['No', "Is 214 divisible by 3? 2 + 1 + 4 = 7. Not in the 3 times table. No.", ['7', 'g|No']]],
    [['Last digit for 3', "Mistake one: looking at the last digit for 3.", '132 ends in 2, so not by 3 ✗', 'Digit sum 6 so yes ✓'],
     ['Checking by 4', "Mistake two: checking only the last digit for 4.", '314: ends in 4 so yes ✗', '14 ÷ 4 is not whole, so no ✓']],
    ["Quick tests help when simplifying fractions.", ['Simplify 132/150']],
    [['Is 245 divisible by 5?', "Ends in 5.", ['Last digit 5'], 'Yes'],
     ['Is 471 divisible by 3?', "4 + 7 + 1 = 12.", ['12'], 'Yes'],
     ['Is 518 divisible by 4?', "18 ÷ 4 is not whole.", ['18 ÷ 4'], 'No']],
    ["Learn the quick tests.", ['Digit sum for 3 and 9']]);

  L.usePri(510, ['Factors and factor pairs', 'Multiples and common multiples', 'Prime numbers and square numbers', 'Divisibility tests']);

  X('Grid references on a map', 'how to give and read positions on a grid map using coordinates and compass directions.', 'Map grids',
    ['Across then up', "A position on a grid is written (across, up). The point (3, 2) is 3 across and 2 up. Directions are north (up), east (right), south (down) and west (left).", [grid(5, 4, [[3, 2, 'A'], [1, 3, 'B']], 'Map grid with points A and B')]],
    [['Reading', "Point A is at (3, 2). Point B is at (1, 3).", ['A = (3, 2)', 'B = (1, 3)']],
     ['Moving', "From A (3, 2) move 2 left and 1 up. The new point is (1, 3), which is B.", ['3 − 2, 2 + 1', 'g|(1, 3)']],
     ['Distance', "Between (1, 3) and (5, 3) the points are on the same row. The distance is 5 − 1 = 4 squares.", ['5 − 1', 'g|4 squares']],
     ['Compass', "From A to B you go west 2 and north 1.", ['W 2, N 1', 'g|West, then North']]],
    [['Up first', "Mistake one: giving the up number first.", '(2, 3) is 2 up, 3 across ✗', '(2, 3) is 2 across, 3 up ✓'],
     ['East and west', "Mistake two: mixing east and west.", 'East is left ✗', 'East is right ✓']],
    ["Maps use grid references so we can say exactly where a place is.", ['Map reference']],
    [['Write the position of a point 4 across and 1 up.', "Across first.", ['(4, 1)'], '(4, 1)'],
     ['Start at (2, 2) and move 3 right and 2 up. Where do you end up?', "(5, 4).", ['2 + 3, 2 + 2'], '(5, 4)'],
     ['Which direction is opposite to east?', "West.", ['E ↔ W'], 'West']],
    ["Across, then up.", ['(x, y)']]);

  X('Turns and mirror images', 'how to describe turns and draw mirror images.', 'Turns and reflections',
    ['Quarter, half, three-quarter turns', "A quarter turn is 90°. A half turn is 180°. A three-quarter turn is 270°. A full turn is 360°. Clockwise goes the way clock hands go. A mirror image flips a shape over the mirror line, left and right swap.", ['1/4 turn = 90°', '1/2 turn = 180°', '3/4 turn = 270°']],
    [['Quarter turn', "An arrow points up. Turn it a quarter turn clockwise. It points right.", ['Up → right', 'g|Right']],
     ['Half turn', "An arrow points up. A half turn makes it point down.", ['Up → down', 'g|Down']],
     ['Anti-clockwise', "An arrow points right. A quarter turn anti-clockwise makes it point up.", ['Right → up', 'g|Up']],
     ['Mirror image', "The letter F reflected in a vertical mirror looks backwards, with its arms on the left.", ['Left and right swap']]],
    [['Clockwise or anti-clockwise', "Mistake one: turning the wrong way.", 'Quarter turn clockwise from up is left ✗', 'It points right ✓'],
     ['Distance from the mirror', "Mistake two: reflecting at the wrong distance.", '2 squares → 3 squares ✗', '2 squares → 2 squares ✓']],
    ["A compass needle turns. Mirrors flip left and right, not up and down.", ['Mirror flips left-right']],
    [['An arrow points left. Turn it a quarter turn clockwise. Where does it point?', "Left → up.", ['Left → up'], 'Up'],
     ['How many degrees in a three-quarter turn?', "3 × 90.", ['3 × 90'], '270°'],
     ['A point is 3 squares left of a vertical mirror line. How far on the other side is its image?', "3 squares right.", ['3 left → 3 right'], '3 squares right']],
    ["Quarter 90°. Half 180°.", ['Clockwise, anti-clockwise']]);

  X('Building with cubes and nets', 'how to describe solids made from cubes and how nets fold into cubes.', 'Cubes and nets',
    ['Counting cubes and folding nets', "A solid made from cubes can be counted in layers. A net of a cube is 6 squares joined edge to edge that fold up to make a cube. Not every arrangement of 6 squares folds to a cube.", ['Cube net: 6 squares']],
    [['Layers', "A cuboid is 4 cubes long, 3 wide and 2 high. One layer has 4 × 3 = 12 cubes. 2 layers: 24 cubes.", ['4 × 3 × 2', 'g|24 cubes']],
     ['A cross net', "A cross of 6 squares (4 in a row with one above and one below) folds to a cube.", ['Cross shape', 'g|Folds to a cube']],
     ['A line of six', "6 squares in a straight line cannot fold into a cube, because the squares overlap.", ['6 in a line', 'g|Not a cube']],
     ['Opposite faces', "In a cross net, the squares at the two ends of the row of four face each other when folded: they are opposite.", ['Ends of the row of four']]],
    [['Counting only what you see', "Mistake one: counting only the cubes you can see.", 'Visible cubes = all cubes ✗', 'Count layers, including hidden ones ✓'],
     ['Any six squares', "Mistake two: thinking any 6 squares make a net.", 'Straight line of 6 folds to a cube ✗', 'Must fold without overlap ✓']],
    ["Packaging designers draw nets before cutting out boxes.", ['Cereal box nets']],
    [['A cuboid is 5 cubes long, 2 wide and 3 high. How many cubes?', "5 × 2 × 3.", ['10 × 3'], '30'],
     ['How many squares make a net of a cube?', "A cube has 6 faces.", ['6 faces'], '6'],
     ['Can 6 squares in a straight line fold into a cube?', "They overlap.", ['No'], 'No']],
    ["Layers. Folded faces.", ['No overlap']]);

  X('Painted cubes and stacks', 'how to count cubes in stacks and cubes with painted faces.', 'Painted cubes',
    ['Corners, edges, faces, middle', "A 3 by 3 by 3 cube is painted on the outside, then cut into 27 small cubes. Corner cubes have 3 painted faces. Edge cubes have 2. Face-centre cubes have 1. The cube in the middle has none.", [tbl([['Painted faces', '3', '2', '1', '0'], ['Cubes', '8', '12', '6', '1']])]],
    [['Corners', "A cube has 8 corners, so 8 small cubes have 3 painted faces.", ['8 corners', 'g|8']],
     ['Edges', "A cube has 12 edges. Each has one middle small cube with 2 painted faces. 12.", ['12 edges', 'g|12']],
     ['Check', "8 + 12 + 6 + 1 = 27, the total number of small cubes.", ['8 + 12 + 6 + 1 = 27', 'g|✓']],
     ['A stack', "A 2 by 2 stack has heights 3, 2, 1 and 2 cubes. 3 + 2 + 1 + 2 = 8 cubes.", ['3 + 2 + 1 + 2', 'g|8 cubes']]],
    [['Forgetting the hidden cube', "Mistake one: forgetting the cube in the middle.", '8 + 12 + 6 = 26 ✗', '8 + 12 + 6 + 1 = 27 ✓'],
     ['Counting only the top', "Mistake two: counting only the top layer of a stack.", 'Heights 3, 2, 1, 2: 4 cubes ✗', '3 + 2 + 1 + 2 = 8 ✓']],
    ["Builders count bricks in stacks to know how many they need.", ['Stacks of bricks']],
    [['How many small cubes have 1 painted face in a painted 3 by 3 by 3 cube?', "6 faces, 1 each.", ['6 × 1'], '6'],
     ['A stack has heights 4, 1, 3, 2. How many cubes?', "4 + 1 + 3 + 2.", ['10'], '10'],
     ['How many small cubes in a 4 by 4 by 4 cube?', "4 × 4 × 4.", ['16 × 4'], '64']],
    ["Corners 3, edges 2, faces 1, middle 0.", ['Add to check']]);

  L.usePri(513, ['Grid references on a map', 'Turns and mirror images', 'Building with cubes and nets', 'Painted cubes and stacks']);
})();
