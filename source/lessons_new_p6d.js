/* P6 topics 9 Mixed reasoning, 10 Factors multiples primes, 11 Ratio, 13 Spatial */
(function () {
  'use strict';
  var BT = window.BT; if (!BT || !BT.px) return;
  var X = BT.px.X, tbl = BT.px.tbl, grid = BT.px.grid, barm = BT.px.barm, L = BT.L;

  X('Solving multi-step problems', 'how to break a problem into steps, choose the operations and check the answer.', 'Multi-step problems',
    ['Break it down', "Read the problem twice. Underline the question. Work out what you need first. Do one step at a time and write each result. Check that the final answer makes sense.", ['Understand', 'Plan', 'Do', 'Check']],
    [['Shopping', "Ali buys 4 notebooks at £1.75 and 2 pens at 85p. Notebooks: 4 × 1.75 = £7. Pens: 2 × 0.85 = £1.70. Total £8.70. Change from £10: £1.30.", ['7.00 + 1.70 = 8.70', '10 − 8.70', 'g|£1.30']],
     ['Time', "A film starts at 6:45 pm and lasts 2 h 20 min. 6:45 + 2 h = 8:45. 8:45 + 20 min = 9:05. It ends at 9:05 pm.", ['8:45 + 20', 'g|9:05 pm']],
     ['Measures', "A rope of 12 m is cut into pieces of 75 cm. 12 m = 1,200 cm. 1,200 ÷ 75 = 16 pieces.", ['1,200 ÷ 75', 'g|16 pieces']],
     ['Check', "Check: 16 × 75 = 1,200.", ['16 × 75 = 1,200', 'g|✓']]],
    [['Skipping a step', "Mistake one: stopping before the final step.", 'Total £8.70 is the change ✗', 'Change = 10 − 8.70 = £1.30 ✓'],
     ['Mixed units', "Mistake two: mixing metres and centimetres.", '12 ÷ 75 ✗', '1,200 ÷ 75 ✓']],
    ["Planning a party needs many steps: cost, time and numbers of guests.", ['Party planning']],
    [['Tom saves £3.50 a week for 6 weeks and spends £8. How much is left?', "6 × 3.50 = 21. 21 − 8.", ['21 − 8'], '£13'],
     ['A bus journey starts at 8:50 and takes 1 h 25 min. When does it arrive?', "8:50 + 1 h = 9:50. 9:50 + 25 min = 10:15.", ['9:50 + 25'], '10:15'],
     ['A tank holds 60 litres. It is 3/5 full. How many more litres to fill it?', "60 ÷ 5 = 12, × 3 = 36 full. 60 − 36.", ['60 − 36'], '24 litres']],
    ["One step at a time.", ['Check units', 'Check the answer']]);

  X('Bar models for sums and differences', 'how to draw a bar model to solve problems with a total and a difference or a ratio.', 'Bar models',
    ['Draw the bars', "A bar model draws each quantity as a bar. If two quantities differ by a known amount, remove the difference to make equal bars, then share.", [barm([['small', 40], ['large', 52]], 92, 'Bar model of 92 with a difference of 12')]],
    [['Total and difference', "Two numbers add to 92 and differ by 12. 92 − 12 = 80. 80 ÷ 2 = 40. The numbers are 40 and 52.", ['92 − 12', '80 ÷ 2', 'g|40 and 52']],
     ['Times as many', "Sam has 3 times as many cards as Zak. Together they have 64. 4 equal parts. 64 ÷ 4 = 16. Zak 16, Sam 48.", ['64 ÷ 4', 'g|Zak 16, Sam 48']],
     ['Fractions', "A jar has 120 sweets. 2/5 are red. 120 ÷ 5 = 24. 24 × 2 = 48 red.", ['24 × 2', 'g|48 red']],
     ['Check', "40 + 52 = 92. 52 − 40 = 12.", ['✓']]],
    [['Splitting equally', "Mistake one: dividing the total equally when there is a difference.", '92 ÷ 2 = 46 each ✗', 'Remove 12 first ✓'],
     ['Wrong number of parts', "Mistake two: dividing by 3 instead of 4.", '64 ÷ 3 ✗', '64 ÷ 4 ✓']],
    ["Teachers around the world use bar models to teach problem solving.", ['Bar model method']],
    [['Two numbers add to 70 and differ by 10. Find them.', "60 ÷ 2 = 30, 40.", ['70 − 10 = 60'], '30 and 40'],
     ['Ali has twice as many marbles as Bo. Together 90. How many has Bo?', "90 ÷ 3.", ['90 ÷ 3'], '30'],
     ['A class of 32 has 3/8 who walk. How many walk?', "32 ÷ 8 × 3.", ['4 × 3'], '12']],
    ["Draw it. Make equal bars.", ['Remove the difference']]);

  X('Testing statements: always, sometimes or never', 'how to test a statement with examples and counter-examples.', 'Reasoning',
    ['Counter-examples', "A statement is always true only if it works for every case. One counter-example shows it is not always true. To show it is sometimes true, give one example that works and one that does not.", ['One counter-example breaks always']],
    [['Always', "The sum of two even numbers is even. 4 + 6 = 10, 8 + 2 = 10. Always true.", ['Even + even', 'g|Always']],
     ['Sometimes', "Multiples of 3 are odd. 9 is odd, 6 is even. Sometimes.", ['9, 6', 'g|Sometimes']],
     ['Never', "A prime number greater than 2 is even. Even numbers greater than 2 are divisible by 2. Never true.", ['Divisible by 2', 'g|Never']],
     ['Counter-example', "All squares are multiples of 4? 9 = 3 × 3 is not. Counter-example 9.", ['9 is a square, not a multiple of 4', 'g|Not always']]],
    [['Examples as proof', "Mistake one: using examples to prove always.", '3 + 5 = 8, so always even ✗', 'Odd + odd is always even, with a reason ✓'],
     ['Ignoring 2', "Mistake two: forgetting 2 is prime.", 'All primes are odd ✗', '2 is prime and even ✓']],
    ["Scientists look for counter-examples to test ideas.", ['Test claims']],
    [['Always, sometimes or never: the sum of two odd numbers is even.', "Odd + odd.", ['3 + 5 = 8'], 'Always'],
     ['Always, sometimes or never: a multiple of 5 ends in 5.', "10 ends in 0.", ['10'], 'Sometimes'],
     ['Always, sometimes or never: a square number is even.', "9 is odd.", ['4 and 9'], 'Sometimes']],
    ["Find a counter-example.", ['Always needs a reason']]);

  X('Working backwards from the answer', 'how to solve problems by undoing steps in reverse order.', 'Working backwards from the answer',
    ['Undo in reverse', "When the end is known, start from the answer and undo each step in reverse order using opposite operations.", ['×3, −4, = 14']],
    [['A number puzzle', "I think of a number, multiply by 3 and take away 4. The answer is 14. 14 + 4 = 18. 18 ÷ 3 = 6.", ['14 + 4', '18 ÷ 3', 'g|6']],
     ['Money', "Amy spent 1/4 of her money, then £2. She has £7 left. 7 + 2 = 9 is 3/4. 9 ÷ 3 = 3 is 1/4. Total £12.", ['9 ÷ 3 × 4', 'g|£12']],
     ['Time', "A bus arrives at 3:40 pm after a 55-minute journey. 3:40 − 55 min = 2:45 pm.", ['3:40 − 55 min', 'g|2:45 pm']],
     ['Check', "12 − 3 = 9, 9 − 2 = 7.", ['✓']]],
    [['Same operation', "Mistake one: using the same operation to go back.", '14 − 4 ✗', '14 + 4 ✓'],
     ['Wrong order', "Mistake two: undoing the first step first.", '14 ÷ 3 first ✗', '14 + 4 first ✓']],
    ["Detectives work backwards from clues.", ['End to start']],
    [['I think of a number, double it and add 5. The answer is 21. What is it?', "21 − 5 = 16, ÷ 2.", ['16 ÷ 2'], '8'],
     ['After spending half his money and then £4, Ben has £6. How much at the start?', "6 + 4 = 10, × 2.", ['10 × 2'], '£20'],
     ['A film ends at 9:10 pm and is 1 h 40 min long. When did it start?', "9:10 − 1:40.", ['9:10 − 1:40'], '7:30 pm']],
    ["Start at the end. Undo in reverse.", ['Opposite operations']]);

  L.usePri(9, ['Solving multi-step problems', 'Bar models for sums and differences', 'Testing statements: always, sometimes or never', 'Working backwards from the answer']);

  X('Factors, factor pairs and primes', 'how to find factors and recognise prime numbers.', 'Factors and primes',
    ['Divide exactly', "A factor divides a number exactly. Factors come in pairs. A prime number has exactly two factors: 1 and itself. A composite number has more than two factors.", ['36 = 1×36 = 2×18 = 3×12 = 4×9 = 6×6']],
    [['Listing', "Factors of 36: 1, 2, 3, 4, 6, 9, 12, 18, 36.", ['4 pairs + 6', 'g|1, 2, 3, 4, 6, 9, 12, 18, 36']],
     ['Prime?', "Is 29 prime? Not divisible by 2, 3 or 5. Yes, prime.", ['Test 2, 3, 5', 'g|Prime']],
     ['Composite', "Is 51 prime? 5 + 1 = 6, so divisible by 3: 51 = 3 × 17. Not prime.", ['3 × 17', 'g|Composite']],
     ['Primes to 30', "The primes up to 30 are 2, 3, 5, 7, 11, 13, 17, 19, 23, 29.", ['10 primes']]],
    [['Is 1 prime?', "Mistake one: calling 1 a prime.", '1 is prime ✗', '1 has only one factor ✓'],
     ['Missing a pair', "Mistake two: missing factors.", 'Factors of 36: 1, 2, 3, 4, 6, 12, 36 ✗', 'Also 9 and 18 ✓']],
    ["Secret codes use huge prime numbers.", ['Cryptography']],
    [['List the factors of 30.', "1×30, 2×15, 3×10, 5×6.", ['4 pairs'], '1, 2, 3, 5, 6, 10, 15, 30'],
     ['Is 57 prime?', "5 + 7 = 12, divisible by 3.", ['57 = 3 × 19'], 'No'],
     ['Is 31 prime?', "Not divisible by 2, 3 or 5.", ['No pair found'], 'Yes']],
    ["Pairs that multiply. Prime = 2 factors.", ['1 is not prime']]);

  X('Common factors and multiples', 'how to find the highest common factor and lowest common multiple.', 'HCF and LCM',
    ['HCF and LCM', "The highest common factor (HCF) is the biggest number that divides both numbers. The lowest common multiple (LCM) is the smallest number that both divide into.", ['HCF: biggest shared factor', 'LCM: smallest shared multiple']],
    [['HCF', "Factors of 12: 1, 2, 3, 4, 6, 12. Factors of 18: 1, 2, 3, 6, 9, 18. HCF = 6.", ['Common: 1, 2, 3, 6', 'g|HCF 6']],
     ['LCM', "Multiples of 4: 4, 8, 12, 16, 20, 24. Multiples of 6: 6, 12, 18, 24. LCM = 12.", ['12, 24', 'g|LCM 12']],
     ['Buses', "Buses leave every 8 minutes and every 12 minutes. They leave together every 24 minutes.", ['LCM of 8 and 12 = 24', 'g|24 min']],
     ['Sharing', "30 pencils and 45 rubbers are shared equally into the most groups with nothing left. HCF = 15 groups.", ['HCF of 30 and 45', 'g|15 groups']]],
    [['HCF and LCM swap', "Mistake one: confusing them.", 'LCM of 4 and 6 = 2 ✗', 'LCM = 12, HCF = 2 ✓'],
     ['Stopping early', "Mistake two: stopping the multiples too soon.", 'No LCM of 4 and 6 ✗', 'Keep going: 12 ✓']],
    ["Timetables repeat at the LCM.", ['Bus timetables']],
    [['Find the HCF of 16 and 24.', "Common: 1, 2, 4, 8.", ['8'], '8'],
     ['Find the LCM of 3 and 5.', "15.", ['15'], '15'],
     ['Find the LCM of 6 and 8.', "24.", ['6, 12, 18, 24', '8, 16, 24'], '24']],
    ["HCF: shared factor. LCM: shared multiple.", ['List both']]);

  X('Prime factors', 'how to write a number as a product of prime factors using a factor tree.', 'Prime factors',
    ['Factor trees', "Every number greater than 1 is a prime or a product of primes. A factor tree splits a number into factors until all are prime. Write the answer with indices: 2 × 2 × 3 = 2² × 3.", ['12 = 2 × 2 × 3']],
    [['A factor tree', "Split 60 into 6 × 10. 6 = 2 × 3. 10 = 2 × 5. So 60 = 2 × 2 × 3 × 5.", ['2 × 2 × 3 × 5', 'g|2² × 3 × 5']],
     ['Another', "Write 36 as a product of primes. 36 = 4 × 9 = 2 × 2 × 3 × 3 = 2² × 3².", ['2² × 3²', 'g|2² × 3²']],
     ['Check', "2 × 2 × 3 × 3 = 36.", ['4 × 9 = 36', 'g|✓']],
     ['Use for HCF', "36 = 2² × 3². 60 = 2² × 3 × 5. Common: 2² × 3 = 12. HCF 12.", ['2 × 2 × 3', 'g|12']]],
    [['Leaving composites', "Mistake one: stopping before all factors are prime.", '60 = 6 × 10 ✗', '60 = 2 × 2 × 3 × 5 ✓'],
     ['Adding', "Mistake two: adding instead of multiplying.", '2 + 2 + 3 + 5 ✗', '2 × 2 × 3 × 5 ✓']],
    ["Prime factors are the building blocks of numbers.", ['Number building blocks']],
    [['Write 20 as a product of prime factors.', "20 = 4 × 5.", ['2 × 2 × 5'], '2² × 5'],
     ['Write 45 as a product of prime factors.', "45 = 5 × 9.", ['3 × 3 × 5'], '3² × 5'],
     ['Write 100 as a product of prime factors.', "100 = 10 × 10.", ['2 × 5 × 2 × 5'], '2² × 5²']],
    ["Split until prime.", ['Check by multiplying']]);

  L.usePri(10, ['Factors, factor pairs and primes', 'Common factors and multiples', 'Prime factors']);

  X('What a ratio tells us', 'what a ratio is and how to write and simplify one.', 'Ratio',
    ['Comparing parts', "A ratio compares quantities. If there are 3 red counters for every 2 blue, the ratio of red to blue is 3 : 2. Simplify by dividing both parts by a common factor.", ['3 : 2', '12 : 8 = 3 : 2']],
    [['Writing', "A bag has 6 red and 4 blue counters. The ratio of red to blue is 6 : 4, which simplifies to 3 : 2.", ['6 : 4 ÷ 2', 'g|3 : 2']],
     ['Order matters', "The ratio of blue to red is 2 : 3.", ['blue : red', 'g|2 : 3']],
     ['Fractions', "In 3 : 2 there are 5 parts. Red is 3/5 of the counters.", ['3 + 2 = 5', 'g|3/5']],
     ['Equivalent ratios', "3 : 2 = 6 : 4 = 9 : 6 = 12 : 8.", ['× 2', '× 3', '× 4']]],
    [['Wrong order', "Mistake one: writing the ratio the wrong way.", 'red : blue = 4 : 6 ✗', 'red : blue = 6 : 4 = 3 : 2 ✓'],
     ['Not simplified', "Mistake two: leaving it unsimplified.", '6 : 4 ✗', '3 : 2 ✓']],
    ["A drink mix of 1 part juice to 4 parts water is the ratio 1 : 4.", ['1 : 4']],
    [['A class has 12 girls and 18 boys. Write girls : boys in its simplest form.', "12 : 18 ÷ 6.", ['2 : 3'], '2 : 3'],
     ['In the ratio 2 : 3, what fraction is the first part?', "2 out of 5.", ['2/5'], '2/5'],
     ['Write 15 : 20 in its simplest form.', "÷ 5.", ['3 : 4'], '3 : 4']],
    ["Compare parts. Simplify.", ['Keep the order']]);

  X('Sharing in a ratio', 'how to share an amount in a given ratio.', 'Sharing in a ratio',
    ['Find one part', "To share in a ratio, add the parts, divide the total by the number of parts to find one part, then multiply.", ['Total ÷ parts = one part']],
    [['Sharing money', "Share £40 in the ratio 3 : 2. 3 + 2 = 5 parts. £40 ÷ 5 = £8. 3 × 8 = £24, 2 × 8 = £16.", ['40 ÷ 5 = 8', 'g|£24 and £16']],
     ['Check', "24 + 16 = 40.", ['✓']],
     ['Three parts', "Share 60 sweets in the ratio 1 : 2 : 3. 6 parts. 60 ÷ 6 = 10. 10, 20, 30.", ['60 ÷ 6', 'g|10, 20, 30']],
     ['Finding the total', "Red : blue = 2 : 5. There are 14 red. One part is 7. Blue = 35. Total 49.", ['14 ÷ 2 = 7', 'g|35 blue']]],
    [['Dividing by the wrong number', "Mistake one: dividing by 2 or 3.", '40 ÷ 2 = 20 ✗', '40 ÷ 5 = 8 ✓'],
     ['Not multiplying', "Mistake two: giving one part as the answer.", '3 : 2 gives £8 each ✗', '£24 and £16 ✓']],
    ["Business partners share profits in a ratio matching their investment.", ['Profit shares']],
    [['Share £60 in the ratio 1 : 2.', "3 parts, £20.", ['60 ÷ 3'], '£20 and £40'],
     ['Share 45 marbles in the ratio 4 : 5.', "9 parts, 5 each.", ['45 ÷ 9 = 5'], '20 and 25'],
     ['Boys : girls = 3 : 4 and there are 12 boys. How many girls?', "One part is 4.", ['12 ÷ 3 = 4'], '16']],
    ["Add parts. Divide. Multiply.", ['Check the total']]);

  X('Ratios with different units and unit prices', 'how to compare quantities in different units and use unit prices to find the best buy.', 'Ratio and units',
    ['Same unit first', "To write a ratio of quantities in different units, change to the same unit first. For unit prices, divide the price by the quantity to find the cost of one.", ['Same units', 'Cost of one']],
    [['Different units', "Write 50 cm : 2 m as a ratio. 2 m = 200 cm. 50 : 200 = 1 : 4.", ['50 : 200 ÷ 50', 'g|1 : 4']],
     ['Time', "Write 30 minutes : 2 hours. 2 h = 120 minutes. 30 : 120 = 1 : 4.", ['30 : 120', 'g|1 : 4']],
     ['Best buy', "6 cans for £2.70 or 10 cans for £4.20. 270 ÷ 6 = 45p. 420 ÷ 10 = 42p. The 10 pack is cheaper per can.", ['45p', '42p', 'g|10 cans']],
     ['Recipe', "A recipe for 4 uses 300 g flour. For 6: 300 ÷ 4 = 75 g each. 75 × 6 = 450 g.", ['75 × 6', 'g|450 g']]],
    [['Ignoring units', "Mistake one: 50 : 2 without converting.", '50 : 2 = 25 : 1 ✗', '50 : 200 = 1 : 4 ✓'],
     ['Cheapest price', "Mistake two: choosing the lower price without comparing amounts.", '£2.70 < £4.20 so best ✗', '42p < 45p each ✓']],
    ["Supermarkets show unit prices so you can compare quickly.", ['Price per 100 g']],
    [['Write 20 cm : 1 m as a ratio.', "1 m = 100 cm.", ['20 : 100'], '1 : 5'],
     ['4 pens cost £1.60. What is one pen?', "160 ÷ 4.", ['160 ÷ 4'], '40p'],
     ['A recipe for 3 uses 150 g butter. How much for 5?', "50 × 5.", ['150 ÷ 3 = 50'], '250 g']],
    ["Same units. Cost of one.", ['Compare per unit']]);

  L.usePri(11, ['What a ratio tells us', 'Sharing in a ratio', 'Ratios with different units and unit prices']);

  X('Coordinates and grid references', 'how to read and plot coordinates in the first quadrant and find positions on a map.', 'Coordinates',
    ['x then y', "A coordinate pair (x, y) gives the position across (x) then up (y). Plot by going along the x-axis first, then up.", [grid(6, 5, [[4, 3, 'A'], [1, 4, 'B']], 'Coordinate grid with points A and B')]],
    [['Reading', "A is at (4, 3). B is at (1, 4).", ['A (4, 3)', 'B (1, 4)']],
     ['Plotting', "Plot C at (5, 1): 5 across, 1 up.", ['(5, 1)', 'g|5 across, 1 up']],
     ['Fourth corner', "Three corners of a rectangle are (1, 1), (4, 1) and (4, 3). The fourth is (1, 3).", ['x = 1, y = 3', 'g|(1, 3)']],
     ['Distance', "From (1, 4) to (4, 4) the distance is 4 − 1 = 3 units.", ['4 − 1', 'g|3 units']]],
    [['y first', "Mistake one: giving y first.", 'A is (3, 4) ✗', 'A is (4, 3) ✓'],
     ['Axis labels', "Mistake two: reading off the grid line number wrongly.", 'Counting squares from 1 ✗', 'Count from 0 ✓']],
    ["Maps and games use coordinates. Chess squares use a letter and a number.", ['Map grid']],
    [['Write the coordinates of a point 3 across and 5 up.', "(3, 5).", ['(x, y)'], '(3, 5)'],
     ['Three corners of a rectangle are (2, 1), (6, 1) and (6, 4). Find the fourth.', "(2, 4).", ['x = 2, y = 4'], '(2, 4)'],
     ['Find the distance from (1, 2) to (6, 2).', "6 − 1.", ['6 − 1'], '5 units']],
    ["Along, then up.", ['(x, y)']]);

  X('Reflecting and translating on a grid', 'how to reflect a shape in a mirror line and translate it on a grid.', 'Transformations',
    ['Reflect and translate', "Reflecting flips a shape over a mirror line. Each point is the same distance from the line on the other side. Translating slides a shape without turning it.", ['Reflection: same distance', 'Translation: slide']],
    [['Reflect a point', "Reflect (2, 3) in the line x = 4. It is 2 left of the line, so its image is 2 right: (6, 3).", ['4 − 2 = 2', '4 + 2 = 6', 'g|(6, 3)']],
     ['Reflect in the y-axis', "Reflect (3, 2) in the y-axis. x changes sign: (−3, 2).", ['x → −x', 'g|(−3, 2)']],
     ['Translate', "Translate (1, 2) by 3 right and 2 up. (1 + 3, 2 + 2) = (4, 4).", ['(4, 4)', 'g|(4, 4)']],
     ['Shape stays', "Reflection and translation keep the size and shape the same (congruent).", ['Same size', 'Same shape']]],
    [['Wrong distance', "Mistake one: reflecting at the wrong distance.", '(2, 3) in x = 4 → (5, 3) ✗', '→ (6, 3) ✓'],
     ['Turning in a translation', "Mistake two: turning the shape in a translation.", 'Shape turned ✗', 'Shape only slides ✓']],
    ["Logos reflect and repeat shapes to make patterns.", ['Patterns']],
    [['Reflect (1, 4) in the line x = 3.', "1 is 2 left of 3, so the image is 2 right of 3.", ['3 + 2'], '(5, 4)'],
     ['Translate (2, 5) by 4 right and 3 down.', "(6, 2).", ['2 + 4, 5 − 3'], '(6, 2)'],
     ['A shape is translated. Is its size the same?', "Yes.", ['Slides only'], 'Yes']],
    ["Mirror: same distance. Translate: slide.", ['Same size']]);

  X('Nets, painted cubes and stacks', 'how to match nets to solids and count cubes in stacks and painted cubes.', 'Cubes and nets',
    ['Counting cubes', "A 3 by 3 by 3 cube is painted outside and cut into 27 small cubes. Corners have 3 painted faces (8). Edges 2 (12). Face centres 1 (6). The middle 0 (1). A stack of cubes is counted by adding the heights.", [tbl([['Painted faces', '3', '2', '1', '0'], ['Cubes', '8', '12', '6', '1']])]],
    [['Check total', "8 + 12 + 6 + 1 = 27.", ['27 cubes', 'g|✓']],
     ['4 by 4 by 4', "A 4 by 4 by 4 cube has 64 small cubes. 8 corners with 3 faces, 24 edge cubes with 2 faces, 24 face cubes with 1 face and 8 inside.", ['8 + 24 + 24 + 8 = 64', 'g|64']],
     ['A stack', "A 2 by 2 stack has heights 3, 2, 1 and 4. 3 + 2 + 1 + 4 = 10 cubes.", ['3 + 2 + 1 + 4', 'g|10']],
     ['A net', "A net of a cube has 6 squares and must fold without overlap.", ['6 squares']]],
    [['Forgetting the middle', "Mistake one: forgetting the hidden cube.", '8 + 12 + 6 = 26 ✗', '8 + 12 + 6 + 1 = 27 ✓'],
     ['Counting only visible cubes', "Mistake two: counting only visible cubes.", 'Visible = all ✗', 'Count hidden layers ✓']],
    ["Builders count bricks in stacks.", ['Brick stacks']],
    [['How many small cubes have 2 painted faces in a painted 3 by 3 by 3 cube?', "12 edges.", ['12'], '12'],
     ['A stack has heights 2, 4, 3, 1. How many cubes?', "10.", ['2 + 4 + 3 + 1'], '10'],
     ['How many small cubes in a 5 by 5 by 5 cube?', "125.", ['5 × 5 × 5'], '125']],
    ["Corners 3, edges 2, faces 1, middle 0.", ['Add all heights']]);

  L.usePri(13, ['Coordinates and grid references', 'Reflecting and translating on a grid', 'Nets, painted cubes and stacks']);
})();
