/* bite1.js: P5 additions from the BBC Bitesize Second level map.
   Negative numbers, partitioning, counting on, short division, unit fractions,
   fraction/decimal/percentage friends, coins and currency, imperial units, a ruler,
   parallel and perpendicular lines, triangles, polygons and grid references. */
(function () {
  'use strict';
  var BT = window.BT, K = Studio.kit, V = Studio.viz, sl = BT.sl, X = BT.X, XV = BT.XV, fr = BT.fr, NL = BT.NL;

  /* ---- 501 Place value and rounding ---- */
  BT.add(501, 'learn3', 'Negative numbers', [
    sl('Numbers below zero', [
      'A negative number is a number below zero. We write it with a minus sign, like −3.',
      'On a number line, negative numbers sit to the left of zero. The further left a number is, the smaller it is.',
      '−1 is just below zero. −5 is colder than −2.'],
      NL(-5, 5, { marks: [[-3, 22]], alt: 'A number line from minus 5 to 5 with minus 3 marked' }),
      'On a cold winter morning the temperature in Scotland can drop below zero, to −3 °C.',
      'what negative numbers are and where they sit on a number line.',
      ['Zero is neither positive nor negative. It is the dividing line between them.', 'We say “minus 3” or “negative 3”. Both mean 3 below zero.'],
      ['Example 1: 3 degrees below zero is −3 °C.', 'Example 2: The basement of a shop might be floor −1.', 'Example 3: A freezer at −18 °C is far colder than a fridge at 4 °C.']),
    XV('Counting back past zero', 'The temperature is 3 °C. It falls by 5 degrees. What is the new temperature?',
      ['Start at 3 on the number line.', 'Count back 5 steps: 2, 1, 0, −1, −2.', 'You have gone past zero, so the answer is a negative number.', 'The temperature is now −2 °C.'],
      '3 − 5 = −2',
      function (k) { return NL(-5, 5, { marks: k >= 4 ? [[3, 215], [-2, 22]] : [[3, 215]], jumps: k >= 2 ? [[3, k >= 4 ? -2 : -2, '−5']] : [], alt: 'A number line showing a move from 3 back to minus 2' }); },
      'A thermometer at 3 °C that drops 5 degrees reads −2 °C.',
      'how to count back past zero.',
      ['When you count back past zero, keep counting into the negatives.', 'Always check the direction: back means left on the number line.'],
      ['Example 1: 2 − 4 = −2.', 'Example 2: 1 − 6 = −5.', 'Example 3: 0 − 3 = −3.']),
    sl('Ordering negative numbers', [
      'To order numbers, picture the number line. Numbers further to the right are bigger.',
      'Order −6, 2, −1 and 0 from smallest to largest: −6, −1, 0, 2.',
      'Be careful: −6 is smaller than −1, even though 6 is bigger than 1.'],
      NL(-6, 2, { marks: [[-6, 22], [-1, 215], [0, 150], [2, 45]], alt: 'A number line with minus 6, minus 1, 0 and 2 marked' }),
      'In a game, a score of −10 is worse than a score of −3.',
      'how to put negative numbers in order.',
      ['With negatives, the number that looks biggest is the smallest. −20 is smaller than −2.', 'Left is smaller and right is bigger, just like positive numbers.'],
      ['Example 1: −5 < −2.', 'Example 2: Smallest to largest: −8, −3, 0, 4.', 'Example 3: The coldest is −7 °C when the others are −2 °C and 1 °C.']),
    sl('Partitioning a number', [
      'Partitioning means splitting a number into its place values.',
      '4,372 = 4,000 + 300 + 70 + 2.',
      'We can partition decimals as well: 3.45 = 3 + 0.4 + 0.05.'],
      K.table([['4,372', '4,000 + 300 + 70 + 2'], ['605', '600 + 0 + 5'], ['3.45', '3 + 0.4 + 0.05']], ['Number', 'Partitioned']),
      'Splitting £3.45 into £3, 40p and 5p is partitioning.',
      'how to split a number into its place values.',
      ['Partitioning helps with mental maths because you work with easier parts.', 'A zero means there are none of that place value, so we skip it.'],
      ['Example 1: 52 = 50 + 2.', 'Example 2: 1,208 = 1,000 + 200 + 8.', 'Example 3: 7.6 = 7 + 0.6.'])
  ]);

  /* ---- 502 The four operations ---- */
  BT.add(502, 'learn3', 'Mental and written methods', [
    X('Partitioning to add', 'Work out 47 + 36 by partitioning.',
      ['Split both numbers: 47 = 40 + 7 and 36 = 30 + 6.', 'Add the tens: 40 + 30 = 70.', 'Add the ones: 7 + 6 = 13.', 'Put the parts together: 70 + 13 = 83.'],
      ['47 + 36', '40 + 7 and 30 + 6', '70 and 13', '70 + 13 = 83'], '47 + 36 = 83',
      'Adding two prices, like 47p and 36p, in your head.',
      'how to add two numbers by splitting them into tens and ones.',
      ['Partition both numbers, add the tens, add the ones, then join the answers.', 'If the ones add to more than 9, carry the extra ten.'],
      ['Example 1: 34 + 25: 30 + 20 = 50, 4 + 5 = 9, so 59.', 'Example 2: 58 + 27: 50 + 20 = 70, 8 + 7 = 15, so 85.', 'Example 3: 66 + 19: 60 + 10 = 70, 6 + 9 = 15, so 85.']),
    XV('Counting on in tens and ones', 'Work out 47 + 36 by counting on.',
      ['Start at the bigger number, 47.', 'Count on the tens first: 47 + 30 = 77.', 'Now count on the ones: 77 + 6 = 83.', 'The answer is 83.'],
      '47 + 36 = 83',
      function (k) { return NL(40, 90, { lab: 10, tick: 5, marks: k >= 4 ? [[47, 215], [83, 22]] : [[47, 215]], jumps: k >= 3 ? [[47, 77, '+30'], [77, 83, '+6']] : k >= 2 ? [[47, 77, '+30']] : [], alt: 'A number line counting on from 47 to 83' }); },
      'Counting on is how you work out change at a shop.',
      'how to count on in tens and ones using a number line.',
      ['Counting on works well when one number is much easier to start from.', 'Jump the tens first because they are bigger steps.'],
      ['Example 1: 52 + 24: 52 + 20 = 72, 72 + 4 = 76.', 'Example 2: 68 + 15: 68 + 10 = 78, 78 + 5 = 83.', 'Example 3: 29 + 43: 29 + 40 = 69, 69 + 3 = 72.']),
    sl('Multiplying and dividing by 0 and 1', [
      'Any number times 0 is 0. For example, 8 × 0 = 0.',
      'Any number times 1 stays the same. 8 × 1 = 8.',
      '0 divided by a number is 0, and a number divided by 1 stays the same. We can never divide by 0.'],
      K.table([['8 × 0', '0'], ['8 × 1', '8'], ['0 ÷ 8', '0'], ['8 ÷ 1', '8']], ['Calculation', 'Answer']),
      'Zero bags of 6 apples is no apples. One bag of 6 apples is 6 apples.',
      'what happens when we multiply or divide by 0 and by 1.',
      ['Multiplying by 1 does not change a number, so 1 is called the identity for multiplication.', 'Dividing by 0 has no answer, because you cannot share things into zero groups.'],
      ['Example 1: 275 × 0 = 0.', 'Example 2: 275 × 1 = 275.', 'Example 3: 0 ÷ 5 = 0.']),
    X('Short division: the bus stop', 'Work out 156 ÷ 3 using the bus stop method.',
      ['Write 156 under the bus stop and 3 outside it.', '1 ÷ 3 does not go, so look at 15: 15 ÷ 3 = 5. Write 5 above the 5.', 'Bring down the 6: 6 ÷ 3 = 2. Write 2 above the 6.', 'The answer is 52. Check: 52 × 3 = 156.'],
      ['3 ) 156', '15 ÷ 3 = 5', '6 ÷ 3 = 2', '156 ÷ 3 = 52'], '156 ÷ 3 = 52',
      'Sharing 156 stickers equally between 3 friends gives each friend 52.',
      'how to divide a bigger number by one digit using the bus stop method.',
      ['Work from the left. Divide each digit in turn and bring the next digit down.', 'Always check with the opposite operation: multiply your answer by the divisor.'],
      ['Example 1: 84 ÷ 4 = 21.', 'Example 2: 96 ÷ 3 = 32.', 'Example 3: 248 ÷ 4 = 62.']),
    sl('Which operation first?', [
      'When a calculation has more than one operation, we do multiplication and division before addition and subtraction.',
      'In 4 + 3 × 2, do 3 × 2 = 6 first. Then 4 + 6 = 10. The answer is not 14.',
      'Brackets come before everything. (4 + 3) × 2 = 14.'],
      K.table([['4 + 3 × 2', '4 + 6 = 10'], ['(4 + 3) × 2', '7 × 2 = 14'], ['10 − 6 ÷ 2', '10 − 3 = 7']], ['Calculation', 'Working']),
      'A rubber costs £4 and 3 pens cost £2 each. The total is 4 + 3 × 2 = £10.',
      'the order in which to do the parts of a calculation.',
      ['The order is: brackets, then multiplication and division, then addition and subtraction.', 'Two calculators can give different answers if one ignores the order.'],
      ['Example 1: 5 + 2 × 3 = 11.', 'Example 2: (5 + 2) × 3 = 21.', 'Example 3: 20 − 12 ÷ 4 = 17.'])
  ]);

  /* ---- 503 Fractions ---- */
  BT.add(503, 'learn3', 'Fraction words', [
    sl('Numerator and denominator', [
      'A fraction has two numbers. The bottom number is the denominator. It tells us how many equal parts the whole is cut into.',
      'The top number is the numerator. It tells us how many of those parts we are talking about.',
      'In ' + fr(3, 8) + ' the whole is cut into 8 equal parts and we have 3 of them.'],
      BT.bar(3, 8, '3 of 8 equal parts shaded'),
      'If a pizza is cut into 8 equal slices and you eat 3, you ate ' + fr(3, 8) + ' of the pizza.',
      'what the numerator and the denominator of a fraction tell us.',
      ['The parts must be equal in size. If they are not, it is not a fraction of the whole.', 'The denominator names the size of the parts: halves, thirds, quarters, fifths and so on.'],
      ['Example 1: In ' + fr(2, 5) + ' the numerator is 2 and the denominator is 5.', 'Example 2: ' + fr(7, 10) + ' means 7 out of 10 equal parts.', 'Example 3: A fraction with denominator 4 is called quarters.']),
    sl('Unit and non-unit fractions', [
      'A unit fraction has 1 as its numerator, like ' + fr(1, 2) + ', ' + fr(1, 5) + ' or ' + fr(1, 10) + '.',
      'A non-unit fraction has a numerator bigger than 1, like ' + fr(3, 5) + ' or ' + fr(7, 10) + '.',
      fr(3, 5) + ' is three of the unit fraction ' + fr(1, 5) + ': ' + fr(1, 5) + ' + ' + fr(1, 5) + ' + ' + fr(1, 5) + '.'],
      BT.bar(1, 5, 'A unit fraction, 1 of 5 parts shaded') + BT.bar(3, 5, 'A non-unit fraction, 3 of 5 parts shaded'),
      'One slice of a cake cut in 5 is a unit fraction. Three slices is a non-unit fraction.',
      'the difference between unit fractions and non-unit fractions.',
      ['The smaller the unit fraction is, the bigger its denominator. ' + fr(1, 10) + ' is smaller than ' + fr(1, 2) + '.', 'Every non-unit fraction can be built from unit fractions.'],
      ['Example 1: ' + fr(1, 8) + ' is a unit fraction.', 'Example 2: ' + fr(5, 8) + ' is five lots of ' + fr(1, 8) + '.', 'Example 3: ' + fr(1, 3) + ' is bigger than ' + fr(1, 4) + '.'])
  ]);

  /* ---- 504 Decimals and percentages ---- */
  BT.add(504, 'learn3', 'Three ways to say it', [
    sl('One amount, three names', [
      'A fraction, a decimal and a percentage can all describe the same amount.',
      'Half is ' + fr(1, 2) + ' = 0.5 = 50%. A quarter is ' + fr(1, 4) + ' = 0.25 = 25%.',
      'Learn these friends well and many questions become quick.'],
      K.table([[fr(1, 2), '0.5', '50%'], [fr(1, 4), '0.25', '25%'], [fr(3, 4), '0.75', '75%'], [fr(1, 10), '0.1', '10%'], [fr(1, 5), '0.2', '20%']], ['Fraction', 'Decimal', 'Percentage']),
      'A phone at 50% battery is half full.',
      'how fractions, decimals and percentages match each other.',
      ['Percent means out of 100, so 25% is 25 out of 100, which simplifies to ' + fr(1, 4) + '.', 'Decimals with hundredths match percentages: 0.35 = 35%.'],
      ['Example 1: 0.75 = 75% = ' + fr(3, 4) + '.', 'Example 2: ' + fr(1, 10) + ' = 0.1 = 10%.', 'Example 3: 20% = 0.2 = ' + fr(1, 5) + '.']),
    X('Which is bigger?', 'Which is bigger, 0.7 or ' + fr(3, 5) + '?',
      ['Write both as percentages so they are easy to compare.', '0.7 = 70%.', fr(3, 5) + ' = 6 tenths = 60%.', '70% is more than 60%, so 0.7 is bigger.'],
      ['0.7 and ' + fr(3, 5), '0.7 = 70%', fr(3, 5) + ' = 60%', '0.7 is bigger'], '0.7 is bigger',
      'A 0.7 litre bottle holds more than a three-fifths litre bottle.',
      'how to compare a fraction and a decimal.',
      ['Change everything to the same form, then compare. Percentages are often easiest.', 'You could also use decimals: 3 ÷ 5 = 0.6.'],
      ['Example 1: 0.25 and ' + fr(1, 3) + ': 25% and about 33%, so ' + fr(1, 3) + ' is bigger.', 'Example 2: 0.5 and ' + fr(2, 5) + ': 50% and 40%, so 0.5 is bigger.', 'Example 3: 0.9 and ' + fr(4, 5) + ': 90% and 80%, so 0.9 is bigger.'])
  ]);

  /* ---- 505 Money, time and measurement ---- */
  BT.add(505, 'learn3', 'Coins and currency', [
    sl('Different coins, the same total', [
      'We can make the same total with different coins and notes.',
      '85p can be 50p + 20p + 10p + 5p, or 20p + 20p + 20p + 20p + 5p.',
      'To use the fewest coins, start with the biggest coin that fits and keep going.'],
      BT.coins([50, 20, 10, 5]) + BT.coins([20, 20, 20, 20, 5]),
      'At the shop you can pay £1 with one £1 coin, or with two 50p coins.',
      'how different coins and notes can make the same amount.',
      ['Check your total by adding the coins in order, biggest first.', 'There is often more than one way. Only the total matters.'],
      ['Example 1: £1 = 50p + 50p or 20p × 5.', 'Example 2: 30p = 20p + 10p or 10p + 10p + 10p.', 'Example 3: £2.50 = £2 + 50p or £1 + £1 + 20p + 20p + 10p.']),
    X('Using the fewest coins', 'What is the fewest number of coins needed to make £1.37?',
      ['Start with the biggest coin that fits: a £1 coin leaves 37p.', 'Next the biggest that fits 37p is 20p, which leaves 17p.', 'Then 10p leaves 7p, then 5p leaves 2p, then a 2p coin.', 'The coins are £1, 20p, 10p, 5p and 2p. That is 5 coins.'],
      ['£1.37', '£1 + 37p', '£1 + 20p + 10p + 5p + 2p', '5 coins'], 'Fewest coins: 5',
      'A shop till gives your change using as few coins as it can.',
      'how to make an amount with the fewest coins.',
      ['Always take the biggest coin that does not go over the amount.', 'Check by adding up: 100 + 20 + 10 + 5 + 2 = 137p.'],
      ['Example 1: 68p = 50p + 10p + 5p + 2p + 1p.', 'Example 2: 90p = 50p + 20p + 20p.', 'Example 3: £2.45 = £2 + 20p + 20p + 5p.']),
    X('Currency and exchange rates', 'Sam is on holiday in Spain. In this example £1 = €1.20. How many euros does he get for £50?',
      ['Different countries use different currencies. Spain uses the euro, €.', 'The exchange rate says £1 buys €1.20.', 'Multiply: 50 × 1.20 = 60.', 'Sam gets €60.'],
      ['£1 = €1.20', '£50 × 1.20', '50 × 1.2 = 60', '€60'], '€60',
      'Exchange rates change every day, so the numbers here are only an example.',
      'what a currency is and how to change pounds into another currency.',
      ['The pound (£) is the UK currency. The euro (€) and the dollar ($) are others.', 'To change pounds to another currency, multiply by the exchange rate.'],
      ['Example 1: £10 at £1 = €1.20 is €12.', 'Example 2: £20 at £1 = $1.25 is $25.', 'Example 3: £5 at £1 = €1.20 is €6.'])
  ]);
  BT.add(505, 'learn4', 'Imperial and metric', [
    sl('Measuring length with a ruler', [
      'Line the zero mark of the ruler up with one end of the object.',
      'Read the number at the other end. Each small mark is 1 millimetre. 10 millimetres make 1 centimetre.',
      'This pencil ends halfway between 6 and 7, so it is 6.5 cm, which is 65 mm.'],
      BT.ruler(6.5),
      'Measuring a pencil, a book or your hand span with a ruler.',
      'how to measure the length of an object with a ruler.',
      ['Always start at the zero mark, not at the edge of the ruler.', 'Say the unit when you give your answer: cm or mm.'],
      ['Example 1: A rubber is 4.2 cm = 42 mm.', 'Example 2: A paper clip is about 3 cm.', 'Example 3: A pencil sharpener is about 2.5 cm.']),
    sl('Metric and imperial', [
      'At school in Scotland we use metric units: millimetres, centimetres, metres and kilometres, grams and kilograms, millilitres and litres.',
      'Imperial units are older: inches, feet, yards and miles, ounces, pounds and stones, pints and gallons.',
      'UK road signs still show miles, and milk is still sold in pints.'],
      K.table([['length', 'mm, cm, m, km', 'inches, feet, yards, miles'], ['mass', 'g, kg', 'ounces, pounds, stones'], ['capacity', 'ml, l', 'pints, gallons']], ['We measure', 'Metric', 'Imperial']),
      'A car speed limit sign says 30 miles per hour.',
      'the difference between metric and imperial units.',
      ['Metric units are based on 10, 100 and 1,000, so they are easy to change.', 'Imperial units have awkward links, like 12 inches in a foot.'],
      ['Example 1: A kilometre is metric and a mile is imperial.', 'Example 2: A kilogram is metric and a pound is imperial.', 'Example 3: A litre is metric and a pint is imperial.']),
    X('Imperial facts', 'A man is 6 feet tall. How many inches is that?',
      ['There are 12 inches in 1 foot.', 'Multiply the number of feet by 12.', '6 × 12 = 72.', 'He is 72 inches tall.'],
      ['1 foot = 12 inches', '6 × 12', '72', '72 inches'], '72 inches',
      'Some people still give their height in feet and inches.',
      'how to change between feet and inches.',
      ['Useful facts: 12 inches = 1 foot, 3 feet = 1 yard, 16 ounces = 1 pound, 14 pounds = 1 stone, 8 pints = 1 gallon.', 'To change a bigger unit to a smaller one, multiply.'],
      ['Example 1: 3 feet = 36 inches.', 'Example 2: 2 pounds = 32 ounces.', 'Example 3: 2 stone = 28 pounds.'])
  ]);

  /* ---- 507 Shape, angles and symmetry ---- */
  BT.add(507, 'learn3', 'Lines, triangles and maps', [
    sl('Parallel and perpendicular lines', [
      'Parallel lines run side by side and never meet. They stay the same distance apart, like railway tracks.',
      'Perpendicular lines meet at a right angle, 90°, like the corner of a page.',
      'Arrows >> mark parallel lines. A small square marks a right angle.'],
      BT.parperp(),
      'Railway tracks are parallel. A lamp post stands perpendicular to the pavement.',
      'what parallel and perpendicular lines are.',
      ['Parallel lines can go on for ever and never touch.', 'Perpendicular lines make four right angles where they cross.'],
      ['Example 1: The opposite sides of a rectangle are parallel.', 'Example 2: The sides of a rectangle that meet at a corner are perpendicular.', 'Example 3: The lines on lined paper are parallel.']),
    sl('Types of triangle', [
      'A triangle has 3 sides and 3 angles. We name triangles by their sides and angles.',
      'Equilateral: all 3 sides are equal. Isosceles: 2 sides are equal. Scalene: no sides are equal.',
      'A right-angled triangle has one angle of 90°.'],
      BT.triRow(),
      'A give way sign on the road is an equilateral triangle.',
      'the names of the types of triangle.',
      ['Small marks on the sides show which sides are equal.', 'A triangle can be both right-angled and isosceles when the two shorter sides are equal.'],
      ['Example 1: A triangle with sides 5 cm, 5 cm and 5 cm is equilateral.', 'Example 2: A triangle with sides 4 cm, 4 cm and 6 cm is isosceles.', 'Example 3: A triangle with sides 3 cm, 4 cm and 5 cm is scalene (and right-angled).']),
    sl('Regular and irregular polygons', [
      'A polygon is a closed shape with straight sides. A pentagon has 5 sides, a hexagon 6, a heptagon 7 and an octagon 8.',
      'A regular polygon has all its sides and all its angles equal. An irregular polygon does not.',
      'A stop sign is a regular octagon.'],
      BT.polyRow(),
      'The cells in a honeycomb are regular hexagons.',
      'the names of polygons and the difference between regular and irregular.',
      ['The prefix tells the number of sides: pent- 5, hex- 6, hept- 7, oct- 8.', 'A circle is not a polygon because it has no straight sides.'],
      ['Example 1: A square is a regular quadrilateral.', 'Example 2: A rectangle that is not a square is an irregular quadrilateral.', 'Example 3: A shape with 6 sides of different lengths is an irregular hexagon.']),
    sl('Grid references', [
      'A map can be split into squares with letters across the bottom and numbers up the side.',
      'To give a grid reference, say the letter first and then the number: C3.',
      'The tree is in square B2. Find B by looking along the bottom and 2 by looking up the side.'],
      BT.gridMap([[1, 2, '🌳'], [2, 3, '⚓'], [3, 1, '🏠'], [0, 4, '⛰️']], [1, 2]),
      'Maps in an atlas use grid references to help you find a town.',
      'how to read and give a grid reference on a map.',
      ['Letter then number: across first, then up.', 'Coordinates work the same way but use two numbers.'],
      ['Example 1: The anchor is in C3.', 'Example 2: The house is in D1.', 'Example 3: The mountain is in A4.'])
  ]);
})();
