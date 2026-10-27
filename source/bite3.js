/* bite3.js: P7 additions from the BBC Bitesize Second level map.
   Significant figures, negatives in context, long multiplication, decimal division,
   fraction proportion, multipliers, currency and imperial, circles, triangles, transformations. */
(function () {
  'use strict';
  var BT = window.BT, K = Studio.kit, sl = BT.sl, X = BT.X, XV = BT.XV, fr = BT.fr, NL = BT.NL;

  /* ---- 701 Place value and rounding ---- */
  BT.add(701, 'learn3', 'Significant figures and negatives', [
    X('Significant figures', 'Round 4 872 to 2 significant figures, and 0.03684 to 2 significant figures.',
      ['Significant figures start at the first digit that is not zero.', '4 872: the first two significant digits are 4 and 8. The next digit is 7, so round up to 4 900.', '0.03684: the zeros before the 3 do not count. The first two significant digits are 3 and 6, and the next digit is 8, so round up to 0.037.', 'The answers are 4 900 and 0.037.'],
      ['4 872 and 0.03684', '4 900', '0.037', '2 s.f.'], '4 900 and 0.037',
      'A calculator might show 0.03684 but a lab report would give 0.037.',
      'how to round to a number of significant figures.',
      ['Count from the first non-zero digit. Zeros inside or at the end of a number can be significant, zeros at the start are not.', 'Fill the gap with zeros so the size of the number stays right.'],
      ['Example 1: 7 351 to 1 s.f. is 7 000.', 'Example 2: 0.0652 to 1 s.f. is 0.07.', 'Example 3: 25.48 to 3 s.f. is 25.5.']),
    XV('Negative numbers in context', 'A submarine is at −120 m. It rises 85 m. Where is it now?',
      ['Sea level is 0. Below sea level is negative, so the submarine starts at −120.', 'Rising means going up, so add 85.', '−120 + 85 = −35.', 'It is now 35 m below the surface.'],
      '−35 m',
      function (k) { return NL(-130, 0, { lab: 10, tick: 10, marks: k >= 3 ? [[-120, 215], [-35, 22]] : [[-120, 215]], jumps: k >= 2 ? [[-120, -35, '+85']] : [], alt: 'A number line from minus 130 to 0 showing a rise from minus 120 to minus 35' }); },
      'Heights above and below sea level, temperatures and bank balances all use negative numbers.',
      'how to use negative numbers in real situations.',
      ['Change a context into a calculation: rising is adding, falling is subtracting.', 'To find the difference between two heights, count the distance on the number line.'],
      ['Example 1: From −10 °C to 6 °C is a rise of 16 degrees.', 'Example 2: An account at £20 that pays £35 is at −£15.', 'Example 3: A diver at −40 m descends 25 m to −65 m.'])
  ]);

  /* ---- 702 The four operations ---- */
  BT.add(702, 'learn3', 'Written and mental methods', [
    X('Long multiplication', 'Work out 346 × 24.',
      ['Multiply by the ones digit: 346 × 4 = 1 384.', 'Multiply by the tens digit: 346 × 20 = 6 920.', 'Add the two answers: 1 384 + 6 920 = 8 304.', 'So 346 × 24 = 8 304.'],
      ['346 × 24', '346 × 4 = 1 384', '346 × 20 = 6 920', '= 8 304'], '346 × 24 = 8 304',
      '24 boxes each holding 346 pencils hold 8 304 pencils.',
      'how to multiply a 3-digit number by a 2-digit number with a written method.',
      ['Write a zero in the ones column when you multiply by the tens digit.', 'Estimate first: 346 × 24 is about 350 × 25 = 8 750, so 8 304 is sensible.'],
      ['Example 1: 125 × 12 = 1 250 + 250 = 1 500.', 'Example 2: 238 × 15 = 2 380 + 1 190 = 3 570.', 'Example 3: 412 × 31 = 12 360 + 412 = 12 772.']),
    X('Short division with a decimal remainder', 'Work out 7 ÷ 4 and 53 ÷ 8 as decimals.',
      ['7 ÷ 4 = 1 remainder 3. Add a decimal point and a zero: 30 ÷ 4 = 7 remainder 2. Add another zero: 20 ÷ 4 = 5.', 'So 7 ÷ 4 = 1.75.', '53 ÷ 8 = 6 remainder 5. Then 50 ÷ 8 = 6 remainder 2, 20 ÷ 8 = 2 remainder 4 and 40 ÷ 8 = 5.', 'So 53 ÷ 8 = 6.625.'],
      ['7 ÷ 4', '1.75', '53 ÷ 8', '6.625'], '1.75 and 6.625',
      'Sharing 7 metres of ribbon between 4 people gives 1.75 metres each.',
      'how to carry on dividing with a decimal point instead of leaving a remainder.',
      ['Put the decimal point in the answer straight above the decimal point and keep adding zeros.', 'Check: 1.75 × 4 = 7.'],
      ['Example 1: 9 ÷ 2 = 4.5.', 'Example 2: 13 ÷ 5 = 2.6.', 'Example 3: 15 ÷ 8 = 1.875.']),
    X('Multiplying in your head with factors', 'Work out 35 × 12 and 48 × 15 in your head.',
      ['Split 12 into 3 × 4. 35 × 3 = 105 and 105 × 4 = 420.', 'Or 35 × 10 = 350 and 35 × 2 = 70, so 350 + 70 = 420.', 'For 48 × 15: 48 × 10 = 480 and half of that is 240, so 480 + 240 = 720.', 'So 35 × 12 = 420 and 48 × 15 = 720.'],
      ['35 × 12', '35 × 10 + 35 × 2', '48 × 10 + 48 × 5', '420 and 720'], '420 and 720',
      'Working out the cost of 12 tickets at £35 each in your head.',
      'how to use factors and partitioning to multiply in your head.',
      ['× 15 is the same as × 10 plus half of that again.', 'Choose the method that makes the sum easiest for you.'],
      ['Example 1: 24 × 15 = 240 + 120 = 360.', 'Example 2: 45 × 12 = 450 + 90 = 540.', 'Example 3: 18 × 20 = 36 × 10 = 360.'])
  ]);

  /* ---- 703 Fractions ---- */
  BT.add(703, 'learn3', 'Fractions as proportion', [
    X('Cancel before you multiply', 'Work out ' + fr(4, 9) + ' × ' + fr(3, 8) + '.',
      ['Look for common factors between a top and a bottom. 4 and 8 share the factor 4. 3 and 9 share the factor 3.', 'Divide 4 and 8 by 4 to get 1 and 2. Divide 3 and 9 by 3 to get 1 and 3.', 'Multiply what is left: ' + fr(1, 3) + ' × ' + fr(1, 2) + ' = ' + fr(1, 6) + '.', 'So ' + fr(4, 9) + ' × ' + fr(3, 8) + ' = ' + fr(1, 6) + '.'],
      [fr(4, 9) + ' × ' + fr(3, 8), 'cancel 4 and 8, 3 and 9', fr(1, 3) + ' × ' + fr(1, 2), fr(1, 6)], fr(1, 6),
      'Cancelling first keeps the numbers small so there is less to simplify.',
      'how to cancel common factors before multiplying fractions.',
      ['You can cancel a top with the bottom of the other fraction. This is a shortcut for simplifying at the end.', 'Check: ' + fr(4, 9) + ' × ' + fr(3, 8) + ' = ' + fr(12, 72) + ' = ' + fr(1, 6) + '.'],
      ['Example 1: ' + fr(2, 5) + ' × ' + fr(5, 6) + ' = ' + fr(1, 3) + '.', 'Example 2: ' + fr(3, 4) + ' × ' + fr(8, 9) + ' = ' + fr(2, 3) + '.', 'Example 3: ' + fr(6, 7) + ' × ' + fr(7, 12) + ' = ' + fr(1, 2) + '.']),
    X('What fraction is it?', 'In a class of 28 pupils, 21 walk to school. What fraction walks, in its simplest form, and what percentage is that?',
      ['Write the part over the whole: ' + fr(21, 28) + '.', 'Divide both numbers by 7: ' + fr(21, 28) + ' = ' + fr(3, 4) + '.', fr(3, 4) + ' = 75%.', 'Three quarters of the class, 75%, walk to school.'],
      [fr(21, 28), fr(3, 4), '75%', 'answer'], fr(3, 4) + ' = 75%',
      'Writing one amount as a fraction of another is how we describe proportion.',
      'how to write one amount as a fraction of another.',
      ['Part over whole, then simplify.', 'Then change to a decimal or percentage if you need to.'],
      ['Example 1: 6 out of 15 is ' + fr(2, 5) + ' = 40%.', 'Example 2: 12 out of 48 is ' + fr(1, 4) + ' = 25%.', 'Example 3: 35 out of 50 is ' + fr(7, 10) + ' = 70%.'])
  ]);

  /* ---- 704 Decimals and percentages ---- */
  BT.add(704, 'learn3', 'Comparing and multipliers', [
    X('Order fractions, decimals and percentages', 'Put 0.6, ' + fr(5, 8) + ' and 59% in order, smallest first.',
      ['Change all three to decimals.', '0.6 stays 0.6. ' + fr(5, 8) + ' = 5 ÷ 8 = 0.625. 59% = 0.59.', 'Order the decimals: 0.59, 0.6, 0.625.', 'So the order is 59%, 0.6, ' + fr(5, 8) + '.'],
      ['0.6, ' + fr(5, 8) + ', 59%', '0.6, 0.625, 0.59', '0.59 < 0.6 < 0.625', '59%, 0.6, ' + fr(5, 8)], '59%, 0.6, ' + fr(5, 8),
      'Comparing scores shown in different forms, like 5/8, 0.6 and 59%.',
      'how to compare and order numbers in different forms.',
      ['Decimals are often easiest because the order is clear place by place.', 'Line up the decimal places by adding zeros: 0.590, 0.600, 0.625.'],
      ['Example 1: 0.7, ' + fr(2, 3) + ', 68% becomes 0.7, 0.667, 0.68.', 'Example 2: ' + fr(3, 20) + ', 0.2, 14% becomes 0.15, 0.2, 0.14.', 'Example 3: ' + fr(7, 8) + ', 0.85, 86% becomes 0.875, 0.85, 0.86.']),
    X('Percentage multipliers', 'A coat costs £80 and is reduced by 15%. A scarf costing £12 rises in price by 5%. Find both new prices.',
      ['A 15% reduction leaves 85%, so multiply by 0.85.', '80 × 0.85 = 68, so the coat is £68.', 'A 5% rise gives 105%, so multiply by 1.05.', '12 × 1.05 = 12.60, so the scarf is £12.60.'],
      ['100% − 15% = 85%', '80 × 0.85 = £68', '100% + 5% = 105%', '12 × 1.05 = £12.60'], 'Coat £68, scarf £12.60',
      'Sales and price rises use multipliers all the time.',
      'how to use a multiplier to find a new price after a percentage change.',
      ['A multiplier is the new amount as a decimal of the old amount.', 'Reduction: subtract the percentage from 100%. Increase: add it to 100%.'],
      ['Example 1: 20% off multiplies by 0.8.', 'Example 2: 10% more multiplies by 1.1.', 'Example 3: 35% off multiplies by 0.65.'])
  ]);

  /* ---- 705 Money, time and measurement ---- */
  BT.add(705, 'learn3', 'Currency, imperial and money decisions', [
    X('Exchange rates both ways', 'In this example £1 = €1.15. Convert £240 to euros and €172.50 to pounds.',
      ['Pounds to euros: multiply by 1.15. 240 × 1.15 = 276, so £240 = €276.', 'Euros to pounds: divide by 1.15.', '172.50 ÷ 1.15 = 150.', 'So €172.50 = £150. Check: 150 × 1.15 = 172.50.'],
      ['£240 × 1.15', '€276', '€172.50 ÷ 1.15', '£150'], '€276 and £150',
      'A travel shop shows buy and sell rates for each currency, and the rate changes daily.',
      'how to change money in both directions.',
      ['To go from pounds, multiply. To go back to pounds, divide.', 'A bank may charge a fee, so you get a little less.'],
      ['Example 1: £100 at £1 = €1.15 is €115.', 'Example 2: €230 ÷ 1.15 = £200.', 'Example 3: £50 at £1 = $1.30 is $65.']),
    X('Imperial and metric conversions', 'About how many grams is 8 oz of butter, and how many kilometres is 5 miles? (1 oz ≈ 28 g and 1 mile ≈ 1.6 km)',
      ['For the butter, multiply 8 by 28.', '8 × 28 = 224, so 8 oz is about 224 g.', 'For the distance, multiply 5 by 1.6.', '5 × 1.6 = 8, so 5 miles is about 8 km.'],
      ['8 × 28', '≈ 224 g', '5 × 1.6', '≈ 8 km'], 'About 224 g and 8 km',
      'Old recipes use ounces and pints, but kitchen scales show grams.',
      'how to convert between imperial and metric units.',
      ['Use the rule for the units you have and multiply or divide.', 'Some rules to know: 1 inch ≈ 2.5 cm, 1 lb ≈ 450 g, 1 pint ≈ 570 ml.'],
      ['Example 1: 6 inches ≈ 15 cm.', 'Example 2: 3 lb ≈ 1 350 g.', 'Example 3: 2 pints ≈ 1 140 ml.']),
    X('Making a money decision', 'Mia gets £60 a month. She wants a £150 bike. She saves £25 a month and spends the rest. How long to save, and how much does she spend each month?',
      ['She spends the rest of her money each month: 60 − 25 = £35.', 'To save £150 at £25 a month, divide: 150 ÷ 25 = 6.', 'It takes 6 months.', 'Check: 6 × 25 = 150.'],
      ['60 − 25 = £35', '150 ÷ 25 = 6', '6 months', '6 × 25 = 150'], '6 months, and £35 spent each month',
      'A budget helps you plan how much you can spend and how much you can save.',
      'how to use a budget to make a choice about saving and spending.',
      ['A budget lists what comes in and what goes out.', 'Saving more each month means you reach your goal sooner.'],
      ['Example 1: Saving £50 a month for £400 takes 8 months.', 'Example 2: Income £200, bills £150 leaves £50.', 'Example 3: A £12 per month plan costs £144 a year.'])
  ]);

  /* ---- 707 Shape, angles and symmetry ---- */
  BT.add(707, 'learn3', 'Circles, triangles and transformations', [
    X('The circumference of a circle', 'A circular pond has a diameter of 6 m. Find its circumference. Use π ≈ 3.14.',
      ['The circumference is the distance round a circle. C = π × diameter.', 'Use π ≈ 3.14, so C = 3.14 × 6.', '3.14 × 6 = 18.84.', 'The circumference is about 18.84 m.'],
      ['C = π × d', 'C = 3.14 × 6', '= 18.84', '≈ 18.84 m'], '≈ 18.84 m',
      'The distance once round a bicycle wheel is its circumference.',
      'how to find the circumference from the diameter.',
      ['π is the number of times the diameter fits round the circle. It is about 3.14.', 'If you are given the radius, double it first to get the diameter.'],
      ['Example 1: d = 10 cm gives C ≈ 31.4 cm.', 'Example 2: r = 5 m means d = 10 m, so C ≈ 31.4 m.', 'Example 3: d = 2 m gives C ≈ 6.28 m.']),
    X('Angles in an isosceles triangle', 'An isosceles triangle has a 40° angle between its two equal sides. Find the other two angles.',
      ['The angles in a triangle add up to 180°.', 'The other two angles are equal because the triangle is isosceles.', '180 − 40 = 140, and 140 ÷ 2 = 70.', 'Each of the other two angles is 70°.'],
      ['180° in total', 'two equal angles', '180 − 40 = 140 → 70 each', '70° and 70°'], '70° and 70°',
      'Designers use these facts when they draw roof frames and bridge supports.',
      'how to find missing angles in an isosceles triangle.',
      ['In an equilateral triangle all three angles are 60°.', 'In a right-angled triangle the other two angles add up to 90°.'],
      ['Example 1: An apex of 50° gives base angles of 65°.', 'Example 2: Base angles of 40° give an apex of 100°.', 'Example 3: A right-angled isosceles triangle has angles 90°, 45° and 45°.']),
    XV('Translating a shape', 'A triangle has corners (1, 1), (3, 1) and (1, 4). It is translated 4 right and 2 up. Find the new corners.',
      ['A translation moves every corner the same way: add 4 to x and 2 to y.', '(1, 1) moves to (5, 3).', '(3, 1) moves to (7, 3).', '(1, 4) moves to (5, 6).'],
      '(5, 3), (7, 3) and (5, 6)',
      function (k) { var p = [[[1, 1], [3, 1], [1, 4]], 215]; var polys = [p]; if (k >= 2) polys.push([[[5, 3], [7, 3], [5, 6]], 22]); return BT.coordGrid(8, 7, polys, 'A triangle and its translation 4 right and 2 up'); },
      'A chess piece slid across the board is a translation.',
      'how to translate a shape and find the new coordinates.',
      ['Add the move to the x-coordinate for left and right, and to the y-coordinate for up and down.', 'Left or down is a negative move.'],
      ['Example 1: (2, 3) moved 3 right and 1 up is (5, 4).', 'Example 2: (6, 5) moved 2 left and 3 down is (4, 2).', 'Example 3: (0, 0) moved 4 right is (4, 0).'])
  ]);

  /* ---- 711 Ratio, proportion and money ---- */
  BT.add(711, 'learn3', 'Ratio, fractions and percentages', [
    X('Ratios, fractions and percentages', 'Squash is mixed with water in the ratio 1 : 4. What fraction and what percentage of the drink is squash?',
      ['Add the parts to find the total: 1 + 4 = 5 parts.', 'Squash is 1 part out of 5, so the fraction is ' + fr(1, 5) + '.', fr(1, 5) + ' = 20%.', 'Water is 4 parts, which is ' + fr(4, 5) + ' = 80%.'],
      ['1 : 4', '1 + 4 = 5 parts', fr(1, 5) + ' = 20%', fr(4, 5) + ' = 80%'], 'Squash is ' + fr(1, 5) + ' or 20%',
      'In a 1 : 4 mix there are 4 parts of water for every 1 part of squash, so one fifth of the whole drink is squash.',
      'how to change between a ratio, a fraction and a percentage.',
      ['The denominator of the fraction is the total number of parts, not the other number in the ratio.', 'Check: the fractions of all the parts add up to 1.'],
      ['Example 1: 2 : 3 means ' + fr(2, 5) + ' and ' + fr(3, 5) + ', which is 40% and 60%.', 'Example 2: 3 : 1 means ' + fr(3, 4) + ' and ' + fr(1, 4) + ', which is 75% and 25%.', 'Example 3: 1 : 1 means half each, 50%.'])
  ]);
})();
