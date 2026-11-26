/* P5 Watch gaps: sub-topics taught in the Let's Learn steps that had no Watch lesson.
   504 10% and 50%, comparing decimals; 505 coins, rulers and cubes, budgets; 509 logic and odd one out; 513 shape patterns, compass points, letters */
(function () {
  'use strict';
  var BT = window.BT; if (!BT || !BT.px) return;
  var X0 = BT.px.X, L = BT.L;
  /* every example shows its answer under the working: the answer is added as a green line if the entry does not have one */
  var X = function (title, goal, head, basics, exs, mist, real, turns, rec) {
    exs = exs.map(function (e) { var w = e[2].slice(); if (!w.some(function (l) { return /^g\|/.test(l); })) w.push('g|' + e[3]); return [e[0], e[1], w, e[3]]; });
    return X0(title, goal, head, basics, exs, mist, real, turns, rec);
  };

  X('Making amounts with the fewest coins', 'how to make an amount with the fewest coins.', 'Fewest coins',
    ['Different coins, same total', "There are many ways to make 50p. One 50p coin is the fewest coins. To use the fewest, start with the biggest coin that fits, then the next biggest.", ['50p in one coin']],
    [['Make 85p', "Use the fewest coins. 50p fits first. 85 minus 50 is 35. 20p fits. 35 minus 20 is 15. 10p fits, then 5p.", ['50 + 20 + 10 + 5 = 85', 'g|4 coins'], ],
     ['Make 30p', "20p fits first. 10p is left.", ['20 + 10 = 30', 'g|2 coins']],
     ['Make £1.27', "A pound coin, then 20p, 5p and 2p.", ['£1 + 20p + 5p + 2p', 'g|4 coins']]],
    [['Small coins first', "Mistake one: using small coins first.", '10p × 5 = 50p, 5 coins ✗', '50p, 1 coin ✓'],
     ['Not using the biggest', "Mistake two: stopping at the wrong coin.", '20p + 20p + 10p = 50p, 3 coins ✗', '50p, 1 coin ✓']],
    ["A shop gives the fewest coins back as change.", ['Change']],
    [['Make 60p with the fewest coins.', "50p, then 10p.", ['50 + 10 = 60'], '2 coins'],
     ['Make 45p with the fewest coins.', "20p, 20p, then 5p.", ['20 + 20 + 5 = 45'], '3 coins'],
     ['Make £1.05 with the fewest coins.', "A pound coin, then 5p.", ['£1 + 5p'], '2 coins']],
    ["Biggest coin first, then the next.", ['Biggest coin first', 'Fewest coins']]);

  X('Reading a ruler and counting cubes', 'how to read a ruler in centimetres and millimetres, and how to find volume by counting cubes.', 'Ruler and cubes',
    ['Reading a ruler', "On a ruler, the long marks are centimetres and the short marks are millimetres. There are 10 millimetres in 1 centimetre.", ['1 cm = 10 mm']],
    [['Measure a line', "The line ends at 7 centimetres and 5 millimetres. That is 75 millimetres.", ['70 + 5 = 75', 'g|75 mm']],
     ['Count the cubes', "A box is 3 cubes long, 2 wide and 2 high. Count the layers: 2 layers of 6 cubes.", ['2 × 6 = 12', 'g|12 cubes']]],
    [['Wrong marks', "Mistake one: reading the short mark as a centimetre.", '7 cm for the short mark ✗', '7 cm and 5 mm ✓'],
     ['Top layer only', "Mistake two: counting only the top layer of cubes.", '6 cubes ✗', '12 cubes ✓']],
    ["Sewing patterns and science experiments use millimetres.", ['Millimetres']],
    [['A line ends at 4 cm and 8 mm. How many millimetres is that?', "4 centimetres is 40 millimetres. Add 8.", ['40 + 8'], '48 mm'],
     ['A box has 2 layers of 4 cubes. What is its volume?', "2 times 4.", ['2 × 4'], '8 cubes'],
     ['A line ends at 9 cm and 3 mm. How many millimetres?', "9 centimetres is 90 millimetres. Add 3.", ['90 + 3'], '93 mm']],
    ["10 millimetres make 1 centimetre.", ['Read the centimetre marks', 'Count the layers']]);

  X('Budgeting and best buys', 'how to plan spending with a budget and how to find the best buy.', 'Budgets',
    ['Plan a budget', "A budget is a plan for money. Add up the costs, then take the total from the money you have to find what is left.", ['Money in minus costs = left']],
    [['Spend and check', "Sam has £20. A book costs £6.50 and a snack costs £3.25. Add the costs: £9.75. Take that from £20.", ['6.50 + 3.25 = 9.75', 'g|£10.25 left']],
     ['Best buy', "A 500 g pack costs £2.00. A 250 g pack costs £1.10. Compare the price for the same weight.", ['£2.00 ÷ 5 = 40p', 'g|500 g pack']]],
    [['Forgetting to subtract', "Mistake one: stopping after adding the costs.", '£9.75 left ✗', '£10.25 left ✓'],
     ['Comparing pack prices', "Mistake two: comparing total prices of packs of different sizes.", 'The cheaper pack is best ✗', 'Compare the price per 100 g ✓']],
    ["Families plan a budget for the week's shopping.", ['Budget', 'Best buy']],
    [['Lee has £15. Crisps cost £2.40 and juice costs £1.60. How much is left?', "Add the costs, then take them from £15.", ['2.40 + 1.60 = 4.00'], '£11.00'],
     ['Which is the better buy: 2 for £3 or 3 for £4?', "2 for £3 is £1.50 each. 3 for £4 is about £1.33 each.", ['£4 ÷ 3 = £1.33'], '3 for £4']],
    ["Add the costs, then subtract from the money you have.", ['Budgets', 'Best buy per item']]);

  X('Logic puzzles and clues', 'how to solve a logic puzzle by using clues and a table.', 'Logic puzzles',
    ['Use the clues', "Each clue rules something out. Make a table. Put a tick for a match and a cross for no match. Check every clue before you decide.", ['Tick = yes, cross = no']],
    [['Who has the red bag?', "Ana does not have red. Cara has blue, so Ben has red. Ana has green.", ['Cara: blue', 'Ben: red'], 'Ben'],
     ['Who has the cat?', "Tom has no dog. Uma has the fish. So Val has the dog, and Tom has the cat.", ['Uma: fish', 'Val: dog'], 'Tom']],
    [['Ticking too early', "Mistake one: ticking before checking every clue.", 'Ben has red after one clue ✗', 'Check all clues first ✓'],
     ['Missing crosses', "Mistake two: forgetting a cross in the table.", 'Only ticks in the table ✗', 'Crosses rule options out ✓']],
    ["Logic puzzles train you to check every clue before you decide.", ['Clues', 'Table']],
    [['Three boxes are red, blue and green. Red is last. Blue is not first. Which box is first?', "Red is last, so blue is second. Green is first.", ['Blue: second'], 'Green'],
     ['Ali is taller than Ben. Ben is taller than Cy. Who is shortest?', "Cy is below Ben, and Ben is below Ali.", ['Ali > Ben > Cy'], 'Cy'],
     ['Ella is 2 years older than Finn, who is 5. How old is Ella?', "Add 2 to Finn's age.", ['5 + 2 = 7'], '7 years']],
    ["Check every clue before you decide.", ['Clues', 'Table']]);

  X('Odd ones out and analogies', 'how to find the odd one out and how to complete an analogy.', 'Odd one out',
    ['Find the odd one out', "The odd one out does not follow the rule that the others share. Check the rule for each option, not just one.", ['Same rule = not odd']],
    [['Odd one out: 4, 9, 15, 16', "4, 9 and 16 are square numbers. 15 is not.", ['4, 9, 16 are squares', 'g|15']],
     ['Odd one out: 2, 3, 5, 9', "2, 3 and 5 are prime. 9 is not prime.", ['9 = 3 × 3', 'g|9']]],
    [['One feature only', "Mistake one: choosing the odd one out from one feature only.", 'Choosing 9 because it is big ✗', 'Check the rule each number follows ✓'],
     ['Not checking all', "Mistake two: stopping at the first rule you find.", 'Rule fits 3 numbers, so stop ✗', 'Check every number ✓']],
    ["Odd one out puzzles train you to spot the rule quickly.", ['Rules', 'Checking']],
    [['Odd one out: 6, 8, 10, 13', "6, 8 and 10 are even. 13 is odd.", ['6, 8, 10 are even'], '13'],
     ['Analogy: 2 is to 4 as 5 is to ?', "Double the first number. 2 doubled is 4, so 5 doubled is 10.", ['5 × 2 = 10'], '10'],
     ['Odd one out: 1, 4, 9, 11', "1, 4 and 9 are square numbers. 11 is not.", ['1, 4, 9 are squares'], '11']],
    ["Find the rule that the others share.", ['Odd one out', 'Analogies']]);

  X('Shape patterns and odd ones out', 'how to find the rule in a pattern of shapes and use it to predict the next step.', 'Shape patterns',
    ['Shape patterns', "A pattern of shapes grows by a rule. Count how many shapes each step adds to find the rule.", ['Add the same number each step']],
    [['Triangles in a row', "Step 1 has 3 triangles, step 2 has 5 and step 3 has 7. The pattern adds 2 each step.", ['7 + 2 = 9', 'g|9 triangles']],
     ['Matchsticks', "1 square uses 4 matchsticks. Each extra square adds 3. So 4 squares use 13.", ['13 + 3 = 16', 'g|16 matchsticks']]],
    [['Wrong step', "Mistake one: taking the count from the wrong step.", 'Step 2 has 5, so step 4 has 5 ✗', 'Keep adding 2 each time ✓'],
     ['Adding the wrong amount', "Mistake two: adding the first shape again.", 'Adding 3 when the pattern adds 2 ✗', 'Count the change each step ✓']],
    ["Tiles and bricks often follow the same rule.", ['Rules']],
    [['Step 1: 2 circles. Step 2: 4. Step 3: 6. How many in step 5?', "The pattern adds 2 each step. Step 4 has 8 and step 5 has 10.", ['2 × 5 = 10'], '10 circles'],
     ['Which shape has no straight sides: square, triangle, circle, pentagon?', "The other three all have straight sides.", ['Straight sides'], 'Circle']],
    ["Find the rule by counting the change each step.", ['Shape patterns', 'Odd one out']]);

  X('Compass points on a grid', 'how to use the eight points of the compass and turns to find a new direction.', 'Compass points',
    ['Eight points of the compass', "North, north-east, east, south-east, south, south-west, west and north-west. A turn clockwise moves through the points in that order.", ['N, NE, E, SE, S, SW, W, NW']],
    [['Quarter turn from north', "Facing north, a 90 degree turn clockwise faces east.", ['90 degrees clockwise'], 'East'],
     ['Half turn from south', "A 180 degree turn from south faces north.", ['180 degrees'], 'North'],
     ['Eighth turn from west', "Facing west, a 45 degree turn clockwise faces north-west.", ['45 degrees clockwise'], 'North-west']],
    [['Anticlockwise', "Mistake one: turning the wrong way.", 'Facing north, 90 degrees anticlockwise is east ✗', 'It is west ✓']],
    ["Walking directions and maps use compass points.", ['Compass']],
    [['Facing east, turn 90 degrees clockwise. Which way now?', "East turning clockwise goes to south.", ['90 degrees clockwise'], 'South'],
     ['Facing north-east, turn 90 degrees anticlockwise. Which way?', "Going back from north-east by 90 degrees gives north-west.", ['NE, NW'], 'North-west'],
     ['Facing south, turn 45 degrees clockwise. Which way?', "Clockwise from south moves toward south-west.", ['45 degrees clockwise'], 'South-west']],
    ["North, east, south and west are the main points.", ['Clockwise turns']]);

  X('Alphabet letter series', 'how to use letter positions to find the next letter in a series.', 'Letters',
    ['Letters and numbers', "Each letter has a position in the alphabet. A is 1, B is 2 and Z is 26. Use the positions to find the next letter in a series.", ['A = 1, B = 2, C = 3']],
    [['Next letter: A, C, E, G', "The series skips one letter each time. After G, skip H to reach I.", ['A(1), C(3), E(5), G(7)'], 'I'],
     ['Letter for position 10', "Count along the alphabet. A is 1, so 10 is J.", ['10 = J'], 'J']],
    [['Not checking the skip', "Mistake one: writing the letter after G as H.", 'H ✗', 'I ✓']],
    ["Codes and passwords use letters in order.", ['Alphabet']],
    [['Next letter: B, D, F, H', "The series skips one letter. After H, skip I and reach J.", ['B(2), D(4), F(6), H(8)'], 'J'],
     ['Letter for position 15', "Count along the alphabet. Position 15 is O.", ['15 = O'], 'O'],
     ['Next letter: Z, X, V', "The series goes back two letters each time. After V comes T.", ['Z(26), X(24), V(22)'], 'T']],
    ["Use letter positions to find the pattern.", ['Count the skip', 'Use positions']]);

  X('Finding 10% and 50% of amounts', 'how to find 10% and 50% of an amount.', 'Percent',
    ['10% and 50%', "10% of an amount is one tenth, so divide by 10. 50% is half, so divide by 2.", ['10% = ÷ 10', '50% = ÷ 2']],
    [['10% of 80', "Divide 80 by 10.", ['80 ÷ 10'], '8'],
     ['50% of 46', "Half of 46 is 23.", ['46 ÷ 2'], '23'],
     ['10% of £35', "Divide £35 by 10. That is £3.50.", ['35 ÷ 10 = 3.50'], '£3.50']],
    [['Multiplying instead', "Mistake one: multiplying by 10 instead of dividing.", '10% of 80 = 800 ✗', '10% of 80 = 8 ✓'],
     ['Taking 50% as a quarter', "Mistake two: dividing by 4 for half.", '50% of 40 = 10 ✗', '50% of 40 = 20 ✓']],
    ["A 10% discount takes off one tenth of the price.", ['Percent']],
    [['10% of 150?', "Divide 150 by 10.", ['150 ÷ 10'], '15'],
     ['50% of 62?', "Half of 62.", ['62 ÷ 2'], '31'],
     ['10% of £24?', "Divide £24 by 10.", ['24 ÷ 10'], '£2.40']],
    ["10% is one tenth. 50% is half.", ['Divide by 10', 'Divide by 2']]);

  X('Ordering decimals fairly', 'how to compare and order decimals fairly.', 'Compare decimals',
    ['Compare decimals', "Line up the decimal points. Compare the tenths first, then the hundredths. A zero at the end does not change the value.", ['Compare tenths first']],
    [['Bigger: 0.6 or 0.55?', "6 tenths is more than 5 tenths.", ['0.6 > 0.55'], '0.6'],
     ['Order 0.3, 0.25, 0.4', "Look at the tenths: 2, 3, 4.", ['0.25 < 0.3 < 0.4'], '0.25, 0.3, 0.4']],
    [['Longer is bigger', "Mistake one: thinking 0.45 is bigger than 0.5 because it has more digits.", '0.45 is bigger ✗', '0.5 is bigger ✓']],
    ["Prices and measurements in decimals are compared like this.", ['Decimals']],
    [['Bigger: 0.7 or 0.65?', "7 tenths is more than 6 tenths.", ['0.7 > 0.65'], '0.7'],
     ['Order 0.5, 0.45, 0.6 from smallest', "Tenths: 5, 4, 6. Smallest is 0.45.", ['0.45 < 0.5 < 0.6'], '0.45, 0.5, 0.6'],
     ['Bigger: 0.2 or 0.19?', "2 tenths is more than 1 tenth.", ['0.2 > 0.19'], '0.2']],
    ["Line up the points, then compare tenths first.", ['Compare tenths first', 'Zeros at the end do not change the value']]);

  L.usePri(504, ['Adding and subtracting decimals', 'Multiplying and dividing decimals by 10 and 100', 'What is a percentage?', 'One amount, three names', 'Finding 10% and 50% of amounts', 'Ordering decimals fairly']);
  L.usePri(505, ['Money problems and change', 'Making amounts with the fewest coins', 'Time on analogue and digital clocks', 'Metric units and changing units', 'Reading a ruler and counting cubes', 'Perimeter and area of rectangles', 'Budgeting and best buys', 'Calendars and time zones']);
  L.usePri(509, ['A plan for solving problems', 'Bar models', 'Working backwards', 'Guess, check and improve', 'Spotting patterns in problems', 'Always, sometimes or never true', 'Logic puzzles and clues', 'Odd ones out and analogies']);
  L.usePri(513, ['Grid references on a map', 'Turns and mirror images', 'Building with cubes and nets', 'Painted cubes and stacks', 'Shape patterns and odd ones out', 'Compass points on a grid', 'Alphabet letter series']);
})();
