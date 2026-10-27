/* bite2.js: P6 additions from the BBC Bitesize Second level map.
   Negatives, decimals, mental and short division, comparing and multiplying fractions,
   imperial/currency/area/volume, triangles, polygons, circles, transformations, cubes. */
(function () {
  'use strict';
  var BT = window.BT, K = Studio.kit, V = Studio.viz, sl = BT.sl, X = BT.X, XV = BT.XV, fr = BT.fr, NL = BT.NL;

  /* ---- Topic 1 Place value and rounding ---- */
  BT.add(1, 'learn3', 'Negatives and decimals', [
    XV('Negative numbers on a number line', 'The temperature at night is −4 °C and in the day it is 3 °C. How many degrees warmer is it in the day?',
      ['Mark −4 and 3 on a number line.', 'Count from −4 up to 0: that is 4 steps.', 'Then count from 0 up to 3: that is 3 more steps.', '4 + 3 = 7, so it is 7 degrees warmer.'],
      '7 °C warmer',
      function (k) { return NL(-5, 5, { marks: [[-4, 215], [3, 22]], jumps: k >= 3 ? [[-4, 0, '+4'], [0, 3, '+3']] : k >= 2 ? [[-4, 0, '+4']] : [], alt: 'A number line from minus 5 to 5 with minus 4 and 3 marked' }); },
      'Weather forecasts give the lowest and highest temperatures. The difference tells you how much it warms up.',
      'how to find the difference between a negative number and a positive number.',
      ['To find the distance across zero, add the two distances from zero.', 'Count up the number line and keep the direction clear.'],
      ['Example 1: From −2 to 5 is 7.', 'Example 2: From −6 to −1 is 5.', 'Example 3: From 4 down to −3 is 7.']),
    X('Adding and subtracting with negatives', 'Work out −2 + 5 and 4 − 7.',
      ['For −2 + 5, start at −2 and move 5 to the right: −1, 0, 1, 2, 3.', 'So −2 + 5 = 3.', 'For 4 − 7, start at 4 and move 7 to the left: 3, 2, 1, 0, −1, −2, −3.', 'So 4 − 7 = −3.'],
      ['−2 + 5', '= 3', '4 − 7', '= −3'], '3 and −3',
      'A bank account at £4 that pays out £7 is overdrawn by £3, which is −£3.',
      'how to add and subtract using negative numbers.',
      ['Adding moves to the right on a number line. Subtracting moves to the left.', 'If you finish to the left of zero, the answer is negative.'],
      ['Example 1: −5 + 8 = 3.', 'Example 2: 2 − 9 = −7.', 'Example 3: −3 + 3 = 0.']),
    sl('Rounding decimals', [
      'To round to 1 decimal place, look at the second decimal digit. If it is 5 or more, round up.',
      '3.47: the second decimal is 7, so round up to 3.5.',
      'To round to 2 decimal places look at the third decimal digit: 6.384 rounds to 6.38.'],
      K.table([['3.47', '1 d.p.', '3.5'], ['6.384', '2 d.p.', '6.38'], ['2.95', '1 d.p.', '3.0'], ['0.068', '2 d.p.', '0.07']], ['Number', 'Round to', 'Answer']),
      'Prices and measurements are often rounded: £2.499 is about £2.50.',
      'how to round decimals to 1 or 2 decimal places.',
      ['Only look at the digit just after the place you are rounding to.', 'Write the zero at the end of 3.0 so it is clear you rounded to 1 decimal place.'],
      ['Example 1: 5.62 to 1 d.p. is 5.6.', 'Example 2: 8.275 to 2 d.p. is 8.28.', 'Example 3: 0.449 to 1 d.p. is 0.4.']),
    X('Partitioning decimals', 'Work out 2.6 + 3.7 by partitioning.',
      ['Split each number into wholes and tenths: 2 + 0.6 and 3 + 0.7.', 'Add the wholes: 2 + 3 = 5.', 'Add the tenths: 0.6 + 0.7 = 1.3.', 'Put them together: 5 + 1.3 = 6.3.'],
      ['2 + 0.6 and 3 + 0.7', '5 and 1.3', '5 + 1.3', '6.3'], '2.6 + 3.7 = 6.3',
      'Adding two lengths of ribbon, 2.6 m and 3.7 m.',
      'how to add decimals by splitting them into parts.',
      ['Partitioning works for decimals in the same way as for whole numbers.', 'Add the whole numbers and the decimal parts separately, then join them.'],
      ['Example 1: 4.3 + 2.5: 6 + 0.8 = 6.8.', 'Example 2: 1.8 + 2.6: 3 + 1.4 = 4.4.', 'Example 3: 5.9 + 0.7 = 6.6.'])
  ]);

  /* ---- Topic 2 The four operations ---- */
  BT.add(2, 'learn3', 'Mental methods and short division', [
    X('Multiplying in your head', 'Work out 23 × 4 and 18 × 5 in your head.',
      ['Partition 23 = 20 + 3.', '20 × 4 = 80 and 3 × 4 = 12, so 80 + 12 = 92.', 'For × 5, do × 10 and then halve: 18 × 10 = 180, and half of 180 is 90.', 'So 23 × 4 = 92 and 18 × 5 = 90.'],
      ['23 × 4', '80 + 12 = 92', '18 × 10 = 180', 'half of 180 = 90'], '92 and 90',
      'Working out the cost of 4 tickets at £23 each without a calculator.',
      'how to multiply in your head by splitting numbers or using × 10.',
      ['Split the harder number into tens and ones and multiply each part.', '× 5 is the same as × 10 and then halving.'],
      ['Example 1: 34 × 3 = 90 + 12 = 102.', 'Example 2: 16 × 5 = 160 ÷ 2 = 80.', 'Example 3: 52 × 6 = 300 + 12 = 312.']),
    X('Doubling and halving', 'Work out 16 × 25.',
      ['25 is a quarter of 100, so 25s are easy when paired with 4s.', 'Halve 16 and double 25: 8 × 50.', 'Halve again and double again: 4 × 100.', '4 × 100 = 400, so 16 × 25 = 400.'],
      ['16 × 25', '8 × 50', '4 × 100', '400'], '16 × 25 = 400',
      'Four 25p coins make £1, so sixteen 25p coins make £4.',
      'how to double one number and halve the other to make a sum easier.',
      ['Halving one number and doubling the other keeps the answer the same.', 'This works best when you end with a × 10 or × 100 sum.'],
      ['Example 1: 14 × 5 = 7 × 10 = 70.', 'Example 2: 12 × 15 = 6 × 30 = 180.', 'Example 3: 8 × 25 = 2 × 100 = 200.']),
    X('Short division with a remainder', 'Work out 157 ÷ 4 using the bus stop method.',
      ['Write 157 under the bus stop and 4 outside.', '1 ÷ 4 does not go. 15 ÷ 4 = 3 remainder 3. Write 3 and carry 3.', 'The carried 3 makes 37: 37 ÷ 4 = 9 remainder 1.', 'The answer is 39 remainder 1. Check: 39 × 4 + 1 = 157.'],
      ['4 ) 157', '15 ÷ 4 = 3 r 3', '37 ÷ 4 = 9 r 1', '39 r 1'], '157 ÷ 4 = 39 remainder 1',
      'Sharing 157 cards between 4 players gives 39 each with 1 left over.',
      'how to use the bus stop method when there is a remainder.',
      ['Carry the remainder to the next digit and keep dividing.', 'Check by multiplying and adding the remainder back.'],
      ['Example 1: 95 ÷ 4 = 23 remainder 3.', 'Example 2: 250 ÷ 7 = 35 remainder 5.', 'Example 3: 134 ÷ 5 = 26 remainder 4.'])
  ]);

  /* ---- Topic 3 Fractions ---- */
  BT.add(3, 'learn3', 'Comparing and multiplying fractions', [
    X('Comparing with a common denominator', 'Which is bigger, ' + fr(2, 3) + ' or ' + fr(3, 4) + '?',
      ['The denominators are different, so find a common denominator.', 'The lowest common multiple of 3 and 4 is 12.', fr(2, 3) + ' = ' + fr(8, 12) + ' and ' + fr(3, 4) + ' = ' + fr(9, 12) + '.', fr(9, 12) + ' is bigger than ' + fr(8, 12) + ', so ' + fr(3, 4) + ' is bigger.'],
      [fr(2, 3) + ' or ' + fr(3, 4), 'common denominator 12', fr(8, 12) + ' and ' + fr(9, 12), fr(3, 4) + ' is bigger'], fr(3, 4) + ' is bigger',
      'Two pizza halves are not the same if the pizzas are different sizes, but fractions of the same whole can be compared.',
      'how to compare two fractions with different denominators.',
      ['Change both fractions so they have the same bottom number, then compare the tops.', 'Use the lowest common multiple of the denominators.'],
      ['Example 1: ' + fr(1, 2) + ' and ' + fr(3, 5) + ' become ' + fr(5, 10) + ' and ' + fr(6, 10) + ', so ' + fr(3, 5) + ' is bigger.', 'Example 2: ' + fr(5, 6) + ' and ' + fr(3, 4) + ' become ' + fr(10, 12) + ' and ' + fr(9, 12) + ', so ' + fr(5, 6) + ' is bigger.', 'Example 3: ' + fr(2, 5) + ' and ' + fr(3, 10) + ' become ' + fr(4, 10) + ' and ' + fr(3, 10) + '.']),
    sl('A fraction of a fraction', [
      'To find a fraction of a fraction, multiply them.',
      fr(1, 2) + ' of ' + fr(1, 4) + ' means ' + fr(1, 2) + ' × ' + fr(1, 4) + '. Multiply the tops: 1 × 1 = 1. Multiply the bottoms: 2 × 4 = 8.',
      'So half of a quarter is one eighth, ' + fr(1, 8) + '.'],
      (function () {
        var s = '';
        for (var i = 0; i < 4; i++) s += '<rect x="' + (10 + i * 75) + '" y="10" width="75" height="70" style="fill:' + (i === 0 ? BT.hs(215, 'band') : 'transparent') + ';stroke:var(--fg);stroke-width:2.5"/>';
        s += '<line x1="10" y1="45" x2="85" y2="45" style="stroke:var(--fg);stroke-width:2.5"/><rect x="10" y="45" width="75" height="35" style="fill:' + BT.hs(22, 'band') + ';stroke:var(--fg);stroke-width:2.5"/>';
        s += BT.txt(150, 100, 'half of one quarter is one eighth', 13);
        return BT.svg(320, 108, 'A bar cut into four quarters; the first quarter is cut in half, making one eighth', s);
      })(),
      'Half of a quarter of a pizza is an eighth of the pizza.',
      'how to find a fraction of a fraction by multiplying.',
      ['Multiply the numerators together and the denominators together.', '“Of” in maths often means multiply.'],
      ['Example 1: ' + fr(1, 3) + ' × ' + fr(1, 2) + ' = ' + fr(1, 6) + '.', 'Example 2: ' + fr(1, 2) + ' × ' + fr(3, 5) + ' = ' + fr(3, 10) + '.', 'Example 3: ' + fr(1, 4) + ' × ' + fr(1, 4) + ' = ' + fr(1, 16) + '.']),
    X('Multiplying fractions', 'Work out ' + fr(2, 3) + ' × ' + fr(3, 5) + '.',
      ['Multiply the numerators: 2 × 3 = 6.', 'Multiply the denominators: 3 × 5 = 15.', 'That gives ' + fr(6, 15) + '. Simplify by dividing both numbers by 3.', fr(6, 15) + ' = ' + fr(2, 5) + '.'],
      [fr(2, 3) + ' × ' + fr(3, 5), fr(6, 15), '÷ 3', fr(2, 5)], fr(2, 5),
      'Two thirds of a class are girls and three fifths of the girls walk to school. The part of the class who are girls that walk is 2/3 × 3/5 = 2/5.',
      'how to multiply two fractions and simplify the answer.',
      ['Always simplify your answer at the end.', 'You can also cancel common factors before multiplying to keep the numbers small.'],
      ['Example 1: ' + fr(1, 2) + ' × ' + fr(2, 3) + ' = ' + fr(2, 6) + ' = ' + fr(1, 3) + '.', 'Example 2: ' + fr(3, 4) + ' × ' + fr(2, 5) + ' = ' + fr(6, 20) + ' = ' + fr(3, 10) + '.', 'Example 3: ' + fr(2, 5) + ' × ' + fr(5, 6) + ' = ' + fr(10, 30) + ' = ' + fr(1, 3) + '.'])
  ]);

  /* ---- Topic 4 Decimals and percentages ---- */
  BT.add(4, 'learn3', 'Three ways to say it', [
    sl('Fractions, decimals and percentages', [
      'We can write an amount as a fraction, a decimal or a percentage.',
      'To change a fraction to a decimal, divide the top by the bottom. ' + fr(3, 8) + ' = 3 ÷ 8 = 0.375.',
      'To change a decimal to a percentage, multiply by 100. 0.375 = 37.5%.'],
      K.table([[fr(1, 5), '0.2', '20%'], [fr(2, 5), '0.4', '40%'], [fr(3, 5), '0.6', '60%'], [fr(1, 8), '0.125', '12.5%'], [fr(3, 8), '0.375', '37.5%']], ['Fraction', 'Decimal', 'Percentage']),
      'A shop sale sign says “¼ off”, which is the same as 25% off.',
      'how to change between fractions, decimals and percentages.',
      ['Fraction to decimal: divide. Decimal to percentage: multiply by 100.', 'Percentage to fraction: write it over 100 and simplify.'],
      ['Example 1: ' + fr(7, 10) + ' = 0.7 = 70%.', 'Example 2: 45% = ' + fr(45, 100) + ' = ' + fr(9, 20) + '.', 'Example 3: 0.04 = 4% = ' + fr(1, 25) + '.']),
    X('Putting them in order', 'Put 0.45, ' + fr(2, 5) + ' and 48% in order, smallest first.',
      ['Change everything to percentages so they can be compared.', '0.45 = 45%, ' + fr(2, 5) + ' = 40% and 48% stays as it is.', 'The order is 40%, 45%, 48%.', 'So the order is ' + fr(2, 5) + ', 0.45, 48%.'],
      ['0.45, ' + fr(2, 5) + ', 48%', '45%, 40%, 48%', '40% < 45% < 48%', fr(2, 5) + ', 0.45, 48%'], fr(2, 5) + ', 0.45, 48%',
      'Comparing test scores written as 18/40, 0.48 and 47%.',
      'how to put fractions, decimals and percentages in order.',
      ['Turn every number into the same form first.', 'Percentages are usually the easiest form to compare.'],
      ['Example 1: 0.3, ' + fr(1, 4) + ', 28% becomes 30%, 25%, 28%.', 'Example 2: ' + fr(3, 5) + ', 0.55, 62% becomes 60%, 55%, 62%.', 'Example 3: 0.9, 85%, ' + fr(4, 5) + ' becomes 90%, 85%, 80%.'])
  ]);

  /* ---- Topic 5 Money, time and measurement ---- */
  BT.add(5, 'learn3', 'Imperial, currency and volume', [
    sl('Imperial and metric together', [
      'We can change between imperial and metric units using rough rules.',
      '1 inch is about 2.5 cm. 1 mile is about 1.6 km. 1 kg is about 2.2 pounds.',
      'These are approximate, so we write “about” or use the ≈ sign.'],
      K.table([['1 inch', '≈ 2.5 cm'], ['1 foot', '≈ 30 cm'], ['1 mile', '≈ 1.6 km'], ['1 pound', '≈ 450 g'], ['1 kg', '≈ 2.2 pounds'], ['1 pint', '≈ 570 ml'], ['1 gallon', '≈ 4.5 litres']], ['Imperial', 'Metric']),
      'Cars show speed in miles per hour, but a map app might give distances in kilometres.',
      'how imperial units relate to metric units.',
      ['The rules are approximate. Exact conversions have more decimal places.', 'Use them to get a feel for size, like a 100 m race being about 110 yards.'],
      ['Example 1: 10 inches is about 25 cm.', 'Example 2: A 2 kg bag of sugar is about 4.4 pounds.', 'Example 3: A 5 mile run is about 8 km.']),
    X('Miles to kilometres', 'A road sign says 30 miles. About how many kilometres is that?',
      ['1 mile is about 1.6 km.', 'Multiply the miles by 1.6.', '30 × 1.6 = 48.', '30 miles is about 48 km.'],
      ['1 mile ≈ 1.6 km', '30 × 1.6', '= 48', '≈ 48 km'], 'About 48 km',
      'Tourists often change a distance in miles into kilometres to understand it.',
      'how to change miles into kilometres.',
      ['To go from miles to kilometres, multiply by 1.6.', 'To go the other way, divide by 1.6.'],
      ['Example 1: 10 miles ≈ 16 km.', 'Example 2: 50 miles ≈ 80 km.', 'Example 3: 80 km ≈ 50 miles.']),
    X('Currency both ways', 'In this example £1 = $1.25. A toy costs $15. What is that in pounds?',
      ['£1 buys $1.25. To go from dollars to pounds we divide by the rate.', '15 ÷ 1.25: multiply both numbers by 4 to get 60 ÷ 5.', '60 ÷ 5 = 12.', 'The toy costs £12.'],
      ['£1 = $1.25', '15 ÷ 1.25', '60 ÷ 5 = 12', '£12'], '£12',
      'Exchange rates change daily, so this is only an example rate.',
      'how to change foreign money back into pounds.',
      ['Pounds to foreign money: multiply by the rate. Foreign money to pounds: divide by the rate.', 'Check with a sensible estimate: $15 should be a bit less than £15.'],
      ['Example 1: £40 × 1.25 = $50.', 'Example 2: $50 ÷ 1.25 = £40.', 'Example 3: £8 × 1.2 = €9.60.']),
    XV('Area of a triangle', 'Find the area of a right-angled triangle with base 8 cm and height 5 cm.',
      ['A triangle is half of a rectangle with the same base and height.', 'The rectangle is 8 × 5 = 40 cm².', 'Half of 40 is 20.', 'The area of the triangle is 20 cm².'],
      '20 cm²',
      function (k) {
        var s = '<rect x="30" y="14" width="200" height="110" style="fill:transparent;stroke:var(--fg);stroke-width:2;stroke-dasharray:6 4"/><polygon points="30,124 230,124 30,14" style="fill:' + BT.hs(215, 'band') + ';stroke:var(--fg);stroke-width:3;stroke-linejoin:round"/>';
        s += BT.txt(130, 144, '8 cm', 13) + BT.txt(16, 74, '5 cm', 13, 'end');
        if (k >= 3) s += BT.txt(110, 84, 'half = 20 cm²', 14);
        return BT.svg(260, 154, 'A right-angled triangle with base 8 centimetres and height 5 centimetres inside a rectangle', s, 300);
      },
      'A triangular sail or a slice of toast cut corner to corner is half of a rectangle.',
      'how to find the area of a triangle as half of a rectangle.',
      ['Area of a triangle = base × height ÷ 2.', 'The height is measured at a right angle to the base.'],
      ['Example 1: Base 6 cm, height 4 cm: 24 ÷ 2 = 12 cm².', 'Example 2: Base 10 m, height 3 m: 30 ÷ 2 = 15 m².', 'Example 3: Base 7 cm, height 6 cm: 42 ÷ 2 = 21 cm².']),
    XV('What is volume?', 'A box is 4 cubes long, 3 cubes wide and 2 cubes high. How many cubes fill it?',
      ['Count the cubes in one layer: 4 × 3 = 12.', 'There are 2 layers.', '12 × 2 = 24.', 'The volume is 24 cubes. If each cube is 1 cm³, the volume is 24 cm³.'],
      '24 cubes (24 cm³)',
      function () { return BT.box(4, 3, 2); },
      'The volume of a fish tank tells you how much water it can hold.',
      'what volume is and how to find it by counting cubes.',
      ['Volume is the amount of space inside a 3D shape. It is measured in cubic units like cm³.', 'For a box, volume = length × width × height.'],
      ['Example 1: 3 × 2 × 2 = 12 cubes.', 'Example 2: 5 × 4 × 1 = 20 cubes.', 'Example 3: 2 × 2 × 2 = 8 cubes.'])
  ]);

  /* ---- Topic 7 Shape, angles and symmetry ---- */
  BT.add(7, 'learn3', 'Triangles, circles and transformations', [
    sl('Types of triangle', [
      'We name triangles by their sides: equilateral has 3 equal sides, isosceles has 2 equal sides and scalene has no equal sides.',
      'We also name them by an angle: a right-angled triangle has one angle of 90°.',
      'In an equilateral triangle all angles are 60°. In an isosceles triangle the two angles opposite the equal sides are equal.'],
      BT.triRow(),
      'The roof end of a house is often an isosceles triangle.',
      'the types of triangle and what makes each one special.',
      ['The three angles of any triangle add up to 180°.', 'Tick marks on the sides show which sides are equal.'],
      ['Example 1: Sides 6, 6, 6 is equilateral.', 'Example 2: Sides 5, 5, 8 is isosceles.', 'Example 3: Sides 3, 4, 5 is scalene and right-angled.']),
    sl('Polygons', [
      'A polygon is a closed shape made of straight sides. We name it by the number of sides.',
      'Pentagon 5, hexagon 6, heptagon 7, octagon 8, nonagon 9 and decagon 10.',
      'A regular polygon has equal sides and equal angles. An irregular polygon does not.'],
      BT.polyRow(),
      'A stop sign is a regular octagon and a honeycomb cell is a regular hexagon.',
      'the names of polygons and how to tell regular from irregular.',
      ['The number of sides equals the number of corners (vertices).', 'The word polygon means “many angles”.'],
      ['Example 1: A regular hexagon has 6 equal sides.', 'Example 2: A nonagon has 9 sides.', 'Example 3: A shape with 8 sides that are not all equal is an irregular octagon.']),
    sl('Parts of a circle', [
      'The circumference is the distance all the way round the circle. The diameter goes straight across through the centre.',
      'The radius goes from the centre to the edge. The diameter is twice the radius: d = 2 × r.',
      'The circumference is a little more than 3 times the diameter.'],
      BT.circle(),
      'A bicycle wheel has a radius from the hub to the tyre. The tyre length round is its circumference.',
      'the names of the parts of a circle.',
      ['All radii in a circle are the same length.', 'The distance across a circle that does not pass through the centre is shorter than the diameter.'],
      ['Example 1: A radius of 5 cm means a diameter of 10 cm.', 'Example 2: A diameter of 12 m means a radius of 6 m.', 'Example 3: A circle of diameter 10 cm has a circumference of about 31 cm.']),
    sl('Parallel and perpendicular lines', [
      'Parallel lines never meet and stay the same distance apart. Perpendicular lines meet at a right angle.',
      'A rectangle has two pairs of parallel sides, and each side is perpendicular to the sides next to it.',
      'A trapezium has just one pair of parallel sides.'],
      BT.parperp(),
      'The edges of a door frame show parallel and perpendicular lines.',
      'how to spot parallel and perpendicular lines in shapes.',
      ['Use arrows to mark parallel lines and a small square to mark right angles.', 'A parallelogram has two pairs of parallel sides but no right angles.'],
      ['Example 1: Opposite sides of a square are parallel.', 'Example 2: A square has four right angles.', 'Example 3: Railway tracks are parallel.']),
    sl('Translation, reflection and rotation', [
      'A translation slides a shape without turning it. Every point moves the same distance in the same direction.',
      'A reflection flips a shape in a mirror line. The image is the same distance from the mirror as the original.',
      'A rotation turns a shape about a point. We say the angle and the direction, like a quarter turn clockwise.'],
      BT.transforms(),
      'A slide puzzle translates tiles, a mirror reflects your face and a fan rotates.',
      'the three ways to move a shape: translate, reflect and rotate.',
      ['The size and shape do not change in any of these three moves.', 'In a reflection the image is back to front, like writing in a mirror.'],
      ['Example 1: Move a shape 3 squares right: a translation.', 'Example 2: Flip it over the dotted line: a reflection.', 'Example 3: Turn it a quarter turn about a corner: a rotation.'])
  ]);

  /* ---- Topic 10 Factors, multiples and primes ---- */
  BT.add(10, 'learn3', 'Cube numbers', [
    sl('Cube numbers', [
      'A cube number is a number multiplied by itself and then by itself again. 3 × 3 × 3 = 27.',
      'We write it with a small 3: 3³ = 27. We say “3 cubed”.',
      'The first cube numbers are 1, 8, 27, 64 and 125.'],
      BT.box(3, 3, 3) + K.table([['1³', '1 × 1 × 1', '1'], ['2³', '2 × 2 × 2', '8'], ['3³', '3 × 3 × 3', '27'], ['4³', '4 × 4 × 4', '64'], ['5³', '5 × 5 × 5', '125'], ['10³', '10 × 10 × 10', '1,000']], ['Cube', 'Working', 'Answer']),
      'A cube-shaped box 3 cm long, wide and high holds 27 cubic centimetres.',
      'what cube numbers are and how to work them out.',
      ['Squares are n × n. Cubes are n × n × n. Do not mix them up: 3² = 9 but 3³ = 27.', 'A cube number is the number of small cubes in a bigger cube.'],
      ['Example 1: 2³ = 2 × 2 × 2 = 8.', 'Example 2: 4³ = 64.', 'Example 3: 10³ = 1,000.'])
  ]);
})();
