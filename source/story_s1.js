/* story_s1.js: teacher story lessons for S1 (topics 801 to 813). */
(function () {
  'use strict';
  var BT = window.BT; if (!BT || !BT.story || !BT.sv || !BT.sv.plot) return;
  var V = BT.sv, NL = BT.NL;
  var SC = function (h, sub, steps) { return { h: h, sub: sub, steps: steps }; };
  var st = function (say, html) { return { say: say, html: html || '' }; };
  var REC = function (say, items) { return SC('Let’s recap', '', [st(say, V.list(items))]); };

  /* 801 WHOLE NUMBERS AND DECIMALS */
  BT.story(801, 'Watch lesson', [
    { title: 'Calculating with decimals', goal: 'how to multiply and divide decimals accurately.', scenes: [
      SC('Multiplying decimals', '3.6 × 0.4', [
        st("Welcome to secondary maths! Let's multiply 3.6 by 0.4. First ignore the decimal points and multiply the whole numbers: 36 times 4 is 144.", V.eq('36 × 4 = 144', 'b')),
        st("Now count the decimal places in the question. 3.6 has 1, and 0.4 has 1. That is 2 altogether, so the answer has 2 decimal places: 1.44.", V.eq('3.6 × 0.4 = 1.44', 'g') + V.rule('Count the decimal places in the question.')),
        st("Check by estimating. 4 times a bit less than half is a bit less than 2. 1.44 is sensible.", V.eq('≈ 4 × 0.4 = 1.6 ✓'))]),
      SC('Dividing decimals', '12.5 ÷ 0.5', [
        st("To divide by a decimal, make the divisor a whole number. Multiply both numbers by 10. 12.5 divided by 0.5 becomes 125 divided by 5, which is 25.", V.eq('12.5 ÷ 0.5 = 125 ÷ 5 = 25', 'g'))]),
      REC("Multiply as whole numbers and put back the decimal places. To divide by a decimal, multiply both numbers by the same power of 10.", ['Multiply as whole numbers', 'Count the decimal places', 'Divide: make the divisor whole'])] },
    { title: 'Rounding and estimating', goal: 'how to round to decimal places and significant figures and estimate answers.', scenes: [
      SC('Rounding', 'Decimal places and significant figures', [
        st("Round 0.0678 to 2 significant figures. Count from the first digit that is not 0. The first 2 are 6 and 7. Next door is an 8, so round up: 0.068.", V.eq('0.0678 → 0.068', 'g') + V.rule('Leading zeros are not significant.')),
        st("Round 47.35 to 1 decimal place. Look at the second decimal. It is a 5, so round up: 47.4.", V.eq('47.35 → 47.4 (1 d.p.)', 'g'))]),
      SC('Estimating', '4.87 × 6.1', [
        st("To estimate, round each number to 1 significant figure. 4.87 is about 5. 6.1 is about 6. 5 times 6 is 30.", V.eq('5 × 6 = 30', 'g')),
        st("The exact answer is 29.7, which is close. If your calculator said 297, you would know you had slipped a decimal place.", V.eq('exact: 29.707 ✓', 'g'))]),
      REC("Round to 1 significant figure to estimate. Use the estimate to catch slips.", ['d.p. or s.f.?', 'Estimate with 1 s.f.', 'Compare with the exact answer'])] }
  ]);

  /* 802 INTEGERS, BODMAS, FACTORS, POWERS */
  BT.story(802, 'Watch lesson', [
    { title: 'Negative numbers', goal: 'the rules for adding, subtracting, multiplying and dividing negatives.', scenes: [
      SC('Adding and subtracting', 'On the number line', [
        st("Subtracting a positive moves left. Minus 5 minus 3: start at minus 5 and move 3 left, to minus 8.", NL(-10, 2, { lab: 2, tick: 1, jumps: [[-5, -8, '−3']] }) + V.eq('−5 − 3 = −8', 'g')),
        st("Subtracting a negative is like adding. 4 take away minus 2 is 4 plus 2, which is 6. 2 minuses make a plus.", V.eq('4 − (−2) = 4 + 2 = 6', 'g'))]),
      SC('Multiplying and dividing', 'Same signs give positive', [
        st("When you multiply or divide, the same signs give a positive answer, and different signs give a negative. Minus 4 times minus 3 is plus 12. Minus 12 divided by 4 is minus 3.", V.eq('−4 × −3 = 12') + V.eq('−12 ÷ 4 = −3', 'g') + V.rule('Same signs: positive. Different signs: negative.'))]),
      REC("Subtracting a negative is adding. For × and ÷: same signs positive, different signs negative.", ['− (−a) = + a', 'Same signs → positive', 'Different signs → negative'])] },
    { title: 'Powers, roots and prime factors', goal: 'how indices, roots and prime factors work together.', scenes: [
      SC('Index laws', 'Multiplying powers', [
        st("A power says how many times to multiply. 2 to the 5 is 2 times itself 5 times, 32. When you multiply powers of the same base, add the indices. 3 squared times 3 to the 4 is 3 to the 6.", V.eq('2⁵ = 32') + V.eq('3² × 3⁴ = 3⁶', 'g') + V.rule('Same base: add the indices.'))]),
      SC('Roots and prime factors', '60 as a product of primes', [
        st("A square root undoes a square. The square root of 49 is 7. Now break 60 into primes. 60 is 6 times 10, which is 2 times 3 times 2 times 5.", V.eq('√49 = 7') + V.eq('60 = 2² × 3 × 5', 'g')),
        st("And remember BODMAS: brackets, orders, then divide and multiply, then add and subtract.", V.list(['Brackets', 'Orders (powers, roots)', 'Divide / Multiply', 'Add / Subtract']))]),
      REC("Add indices when multiplying the same base. Roots undo powers. Prime factors are the building blocks of a number.", ['aᵐ × aⁿ = aᵐ⁺ⁿ', 'Roots undo powers', 'Prime factor trees'])] }
  ]);

  /* 803 FRACTIONS */
  BT.story(803, 'Watch lesson', [
    { title: 'Adding and subtracting mixed numbers', goal: 'how to add mixed numbers by using a common denominator.', scenes: [
      SC('Whole numbers first', '2 1/3 + 1 3/4', [
        st("2 and 1/3 plus 1 and 3/4. Add the whole numbers: 2 plus 1 is 3. Now the fractions. The common denominator of 3 and 4 is 12.", V.eq('2 + 1 = 3') + V.eq('1/3 = 4/12    3/4 = 9/12')),
        st("4/12 plus 9/12 is 13/12. That is more than 1 whole: 1 and 1/12. Add that to the 3: 4 and 1/12.", V.eq('4/12 + 9/12 = 13/12 = 1 1/12') + V.eq('3 + 1 1/12 = 4 1/12', 'g'))]),
      REC("Add whole numbers and fractions separately. Use a common denominator, and convert any improper fraction at the end.", ['Whole numbers first', 'Common denominator', 'Convert improper fractions'])] },
    { title: 'Multiplying and dividing fractions', goal: 'how to multiply and divide fractions and mixed numbers.', scenes: [
      SC('Multiplying mixed numbers', '2 1/2 × 1 1/3', [
        st("Turn mixed numbers into improper fractions first. 2 and 1/2 is 5/2. 1 and 1/3 is 4/3. Multiply tops and bottoms: 20/6. Simplify to 10/3, which is 3 and 1/3.", V.eq('5/2 × 4/3 = 20/6 = 10/3 = 3 1/3', 'g'))]),
      SC('Dividing', '3/5 ÷ 2/3', [
        st("To divide, keep the first fraction, change to multiply, and flip the second. 3/5 times 3/2 is 9/10.", V.eq('3/5 × 3/2 = 9/10', 'g') + V.rule('Keep, change, flip.'))]),
      REC("Improper fractions first. To multiply: tops and bottoms. To divide: keep, change, flip.", ['Mixed → improper', 'Multiply across', 'Divide: keep, change, flip'])] }
  ]);

  /* 804 PERCENTAGES */
  BT.story(804, 'Watch lesson', [
    { title: 'Percentages of amounts', goal: 'how to find a percentage of an amount and write 1 amount as a percentage.', scenes: [
      SC('Finding a percentage', '35% of 240', [
        st("Find 35% of 240. 10% is 24. 30% is 3 times that, 72. 5% is half of 10%, 12. Add them: 84.", V.eq('30% = 72') + V.eq('5% = 12') + V.eq('35% = 84', 'g')),
        st("Or use a calculator. 35% is 0.35. 0.35 times 240 is also 84.", V.eq('0.35 × 240 = 84', 'g'))]),
      SC('One amount as a percentage', '18 out of 45', [
        st("Write 18 out of 45 as a percentage. Divide 18 by 45 to get 0.4. Multiply by 100: 40%.", V.eq('18 ÷ 45 = 0.4 = 40%', 'g'))]),
      REC("Build percentages from 10%, or use the decimal multiplier. For a percentage, divide then multiply by 100.", ['10% then build', 'Decimal multiplier', 'Part ÷ whole × 100'])] },
    { title: 'Percentage increase and decrease', goal: 'how to use multipliers for percentage change.', scenes: [
      SC('The multiplier', 'Increase by 12%', [
        st("To increase by 12%, you have 100% plus 12, 112%. As a decimal, that is the multiplier 1.12. 250 times 1.12 is 280.", V.eq('250 × 1.12 = 280', 'g')),
        st("To decrease by 15%, you keep 85%. The multiplier is 0.85. 60 times 0.85 is 51.", V.eq('60 × 0.85 = 51', 'g')),
        st("So the multiplier is 100 per cent, plus or minus the change, written as a decimal.", V.tbl([['+12%', '1.12'], ['−15%', '0.85'], ['+5%', '1.05'], ['−30%', '0.70']], ['Change', 'Multiplier']))]),
      REC("Increase: 1 plus the decimal. Decrease: 1 minus the decimal. Multiply the original amount.", ['Increase: 1 + p', 'Decrease: 1 − p', 'Multiply the original'])] }
  ]);

  /* 805 RATIO */
  BT.story(805, 'Watch lesson', [
    { title: 'Simplifying and sharing in a ratio', goal: 'how to simplify a ratio and share an amount in a given ratio.', scenes: [
      SC('Simplifying', '24 : 36', [
        st("To simplify a ratio, divide both parts by their highest common factor. The highest common factor of 24 and 36 is 12. So 24 to 36 is 2 to 3.", V.eq('24 : 36 = 2 : 3', 'g')),
        st("Ratios with different units need the same units first. 50 centimetres to 2 metres is 50 to 200, which is 1 to 4.", V.eq('50 cm : 2 m = 50 : 200 = 1 : 4', 'g'))]),
      SC('Sharing', '£150 in the ratio 2 : 3', [
        st("Share 100 and £50 in the ratio 2 to 3. Add the parts: 5. 150 divided by 5 is £30 a part. So the shares are 60 and 90.", V.bm([['A', [[80, '2']]], ['B', [[120, '3']]]]) + V.eq('150 ÷ 5 = £30') + V.eq('£60 and £90', 'g'))]),
      REC("Simplify by dividing by the highest common factor, with the same units. To share, add the parts, find 1 part, multiply.", ['Same units first', 'Divide by the HCF', 'Add parts → one part → multiply'])] },
    { title: 'Direct proportion', goal: 'how to solve proportion problems with the unitary method.', scenes: [
      SC('The unitary method', '3 kg costs £4.50', [
        st("3 kilograms of apples cost £4.50. How much for 5 kilograms? Find the cost of 1 kilogram: 4 50 divided by 3 is £1.50.", V.eq('£4.50 ÷ 3 = £1.50 per kg')),
        st("Now multiply by 5. 5 times £1.50 is £7.50.", V.eq('5 × £1.50 = £7.50', 'g')),
        st("This is direct proportion: double the apples, double the cost. The graph of cost against mass is a straight line through the origin.", V.plot(0, 6, 0, 9, [{ l: [[0, 0], [6, 9]] }, { p: [5, 7.5, '£7.50'] }], { tx: 1, ty: 1, xl: 'Mass of apples (kg)', yl: 'Cost (£)', title: 'Cost of apples' }))]),
      REC("Find 1 unit first, then multiply. In direct proportion the graph is a straight line through the origin.", ['Find the cost of one', 'Multiply', 'Straight line through the origin'])] }
  ]);

  /* 806 MONEY AND FINANCE */
  BT.story(806, 'Watch lesson', [
    { title: 'Wages and overtime', goal: 'how to calculate pay including overtime.', scenes: [
      SC('Basic pay', '35 hours at £9.50', [
        st("Maya works 35 hours at £9.50 an hour. Her basic pay is 35 times 9 50, £332.50.", V.eq('35 × £9.50 = £332.50', 'b')),
        st("Overtime at time and 1/2 means 1 and 1/2 times the normal rate. 9 50 times 1.5 is £14.25 an hour. For 6 hours: £85.50.", V.eq('£9.50 × 1.5 = £14.25') + V.eq('6 × £14.25 = £85.50', 'g')),
        st("Her total is basic pay plus overtime, £418.", V.eq('£332.50 + £85.50 = £418', 'g'))]),
      REC("Basic pay is hours times rate. Overtime uses a higher rate. Add the two.", ['Hours × rate', 'Overtime rate: × 1.5 or × 2', 'Add the pay'])] },
    { title: 'VAT and simple interest', goal: 'how to add VAT, remove it, and calculate simple interest.', scenes: [
      SC('Adding VAT', '£35 plus 20% VAT', [
        st("VAT of 20% on £35. The multiplier is 1.2. 35 times 1.2 is £42.", V.eq('£35 × 1.2 = £42', 'g'))]),
      SC('Removing VAT', 'Price with VAT is £60', [
        st("Going backwards: a price of £60 already includes 20% VAT. 60 is 120%. Divide by 1.2 to get back to 100 per cent: £50.", V.eq('£60 ÷ 1.2 = £50', 'g') + V.rule('To go backwards, divide by the multiplier.'))]),
      SC('Simple interest', '£800 at 3% for 2 years', [
        st("Simple interest is the same each year. 3% of 800 is £24. For 2 years that is £48.", V.eq('3% of £800 = £24') + V.eq('2 × £24 = £48', 'g'))]),
      REC("Use multipliers to add VAT, and divide by the multiplier to take it off. Simple interest is the same every year.", ['× 1.2 adds 20% VAT', '÷ 1.2 removes it', 'Interest = amount × rate × years'])] }
  ]);

  /* 807 TIME, DISTANCE, SPEED */
  BT.story(807, 'Watch lesson', [
    { title: 'Speed, distance and time', goal: 'how to use the speed formula and convert times.', scenes: [
      SC('The formula', 'Speed = distance ÷ time', [
        st("Speed tells us how far we go in 1 hour. A car travels 180 kilometres in 2 and 1/2 hours. Divide the distance by the time: 72 kilometres per hour.", V.eq('180 ÷ 2.5 = 72 km/h', 'g')),
        st("Rearranged, distance is speed times time, and time is distance divided by speed. A triangle with D at the top, S and T at the bottom helps you remember.", V.cols([V.card('D', 'b'), V.card('S × T', 'g'), V.card('D ÷ S = T', 'r')], 3).replace('sv-cols"', 'sv-cols" '))]),
      SC('Hours and minutes', '2 h 15 min', [
        st("Careful with time. 2 hours 15 minutes is not 2.15 hours. 15 minutes is 1/4 of an hour, so it is 2.25 hours.", V.eq('2 h 15 min = 2.25 h', 'g') + V.rule('Minutes ÷ 60 gives hours.'))]),
      REC("Speed is distance over time. Change minutes into hours by dividing by 60 before you use the formula.", ['S = D ÷ T', 'D = S × T', 'T = D ÷ S', 'Minutes ÷ 60'])] },
    { title: 'Distance–time graphs', goal: 'how to read a distance–time graph.', scenes: [
      SC('A journey', 'Three stages', [
        st("This graph shows a journey. Time is along the bottom, distance from home up the side. For the first hour the line goes up steadily to 60 kilometres.", V.plot(0, 4, 0, 180, [{ l: [[0, 0], [1, 60]] }], { tx: 1, ty: 60, xl: 'Time (hours)', yl: 'Distance from home (km)', title: 'A journey' })),
        st("Then the line is flat for an hour. The distance is not changing, so the traveller has stopped.", V.plot(0, 4, 0, 180, [{ l: [[0, 0], [1, 60], [2, 60]] }], { tx: 1, ty: 60, xl: 'Time (hours)', yl: 'Distance from home (km)', title: 'A journey' })),
        st("In the last 2 hours the line climbs from 60 to 180. That is 120 kilometres in 2 hours, 60 kilometres an hour. The steeper the line, the faster the speed.", V.plot(0, 4, 0, 180, [{ l: [[0, 0], [1, 60], [2, 60], [4, 180]] }], { tx: 1, ty: 60, xl: 'Time (hours)', yl: 'Distance from home (km)', title: 'A journey' }) + V.eq('gradient = 120 ÷ 2 = 60 km/h', 'g'))]),
      REC("The gradient of a distance–time graph is the speed. A flat line means stopped.", ['Steeper = faster', 'Flat = stopped', 'Gradient = speed'])] }
  ]);

  /* 808 MEASURE, AREA, VOLUME */
  BT.story(808, 'Watch lesson', [
    { title: 'Area of triangles, parallelograms and trapeziums', goal: 'the area formulas for common 2D shapes.', scenes: [
      SC('Parallelogram', 'Base times perpendicular height', [
        st("A parallelogram can be cut and moved to make a rectangle. Its area is the base times the perpendicular height, not the slanted side. With base 8 and height 5, the area is 40.", V.eq('8 × 5 = 40 cm²', 'g') + V.rule('Use the perpendicular height.')),
        st("A triangle is half of a parallelogram. Half base times height.", V.eq('A = ½ × b × h', 'b'))]),
      SC('Trapezium', 'Two parallel sides', [
        st("A trapezium has 2 parallel sides. Add them, halve, and multiply by the height. With parallel sides 6 and 10 and height 4: half of 16 is 8, times 4 is 32.", V.eq('A = ½ (a + b) h') + V.eq('½ × (6 + 10) × 4 = 32 cm²', 'g'))]),
      REC("Parallelogram: base times height. Triangle: half base times height. Trapezium: half the sum of the parallel sides times the height.", ['Parallelogram: b × h', 'Triangle: ½ b h', 'Trapezium: ½ (a + b) h'])] },
    { title: 'Volume of a prism', goal: 'how to find the volume of a prism from its cross-section.', scenes: [
      SC('Cross-section times length', 'A triangular prism', [
        st("A prism has the same cross-section all the way along. Its volume is the area of the cross-section times the length. This triangle has base 6 and height 4, so its area is 12 square centimetres.", V.eq('½ × 6 × 4 = 12 cm²')),
        st("The prism is 10 centimetres long. 12 times 10 is 120 cubic centimetres.", V.eq('V = 12 × 10 = 120 cm³', 'g') + V.rule('Volume = area of cross-section × length.'))]),
      REC("Find the area of the end face, then multiply by the length.", ['Area of the cross-section', '× length', 'Units are cubed'])] }
  ]);

  /* 809 SEQUENCES, FORMULAE, ALGEBRA */
  BT.story(809, 'Watch lesson', [
    { title: 'Simplifying and expanding', goal: 'how to collect like terms and expand brackets.', scenes: [
      SC('Like terms', '3a + 2b + 4a − b', [
        st("Like terms have the same letter. 3 a and 4 a make 7 a. 2 b take away b leaves 1 b. So 3 a plus 2 b plus 4 a minus b simplifies to 7 a plus b.", V.eq('3a + 2b + 4a − b = 7a + b', 'g')),
        st("Think of letters as fruit. You can add apples to apples, but not apples to bananas.", V.rule('Only add like terms.'))]),
      SC('Expanding brackets', '3(x + 4)', [
        st("To expand a bracket, multiply everything inside by the number outside. 3 times x is 3 x, and 3 times 4 is 12.", V.eq('3(x + 4) = 3x + 12', 'g'))]),
      REC("Collect like terms. Multiply every term in a bracket by the number outside.", ['Like terms only', 'Multiply every term in the bracket'])] },
    { title: 'Formulae and equations', goal: 'how to substitute into formulae and solve two-step equations.', scenes: [
      SC('Substitution', 'P = 2l + 2w', [
        st("A formula is a rule written in letters. The perimeter of a rectangle is 2 l plus 2 w. When length is 7 and width is 4, the perimeter is 14 plus 8, 22.", V.eq('2 × 7 + 2 × 4 = 22', 'g'))]),
      SC('Solving equations', 'Undo in reverse order', [
        st("To solve 2 x plus 5 equals 17, undo the plus 5 first: 2 x equals 12. Then undo the times 2: x equals 6.", V.eq('2x + 5 = 17') + V.eq('2x = 12') + V.eq('x = 6', 'g')),
        st("Another: x over 3, minus 1, equals 4. Add 1: x over 3 is 5. Multiply by 3: x is 15.", V.eq('x/3 − 1 = 4 → x/3 = 5 → x = 15', 'g'))]),
      REC("Substitute carefully. In equations, undo the operations in reverse order, doing the same to both sides.", ['Substitute, then calculate', 'Undo + and − first', 'Then undo × and ÷'])] }
  ]);

  /* 810 ANGLES */
  BT.story(810, 'Watch lesson', [
    { title: 'Angle rules', goal: 'the basic angle facts and how to use them.', scenes: [
      SC('Facts to know', 'Lines and points', [
        st("Angles on a straight line add up to 1 80. Angles around a point add up to 3 60. Where 2 straight lines cross, the opposite angles, called vertically opposite, are equal.", V.tbl([['Straight line', '180°'], ['Around a point', '360°'], ['Vertically opposite', 'equal']], ['Fact', 'Rule']))]),
      SC('Triangles', 'Angles add to 180', [
        st("The angles in a triangle add up to 1 80. In an isosceles triangle, 2 sides are equal and the 2 base angles are equal. If the top angle is 40, the other 2 share 140, 70 each.", V.eq('180 − 40 = 140') + V.eq('140 ÷ 2 = 70° each', 'g'))]),
      REC("Straight line 1 80,.360, triangle 1 80. Isosceles triangles have 2 equal angles.", ['Line: 180°', 'Point: 360°', 'Triangle: 180°', 'Vertically opposite: equal'])] },
    { title: 'Parallel lines', goal: 'corresponding, alternate and co-interior angles.', scenes: [
      SC('F, Z and C', 'Equal or supplementary', [
        st("When a line crosses 2 parallel lines, corresponding angles in an F shape are equal.", V.par([[155, 72, '65°'], [215, 152, '65°']])),
        st("Alternate angles in a Z shape are equal too.", V.par([[155, 72, '65°'], [138, 130, '65°']])),
        st("Co-interior angles in a C shape add up to 1 80. If 1 is 65, the other is 115.", V.par([[155, 72, '65°'], [203, 130, '115°']]) + V.eq('180 − 65 = 115°', 'g'))]),
      REC("F: corresponding, equal. Z: alternate, equal. C: co-interior, add to 1 80.", ['F: equal', 'Z: equal', 'C: sum to 180°'])] }
  ]);

  /* 811 SHAPE, SYMMETRY, COORDINATES, SCALE */
  BT.story(811, 'Watch lesson', [
    { title: 'Four-quadrant coordinates and reflection', goal: 'how to plot points in all 4 quadrants and reflect shapes.', scenes: [
      SC('The four quadrants', 'x first, then y', [
        st("Coordinates tell us where a point is. The first number is along, the x direction. The second is up or down, the y direction. Negative numbers go left and down.", V.plot(-4, 4, -4, 4, [{ p: [3, 2, '(3, 2)', 'var(--accent)'] }, { p: [-3, 2, '(−3, 2)'] }, { p: [-3, -2, '(−3, −2)', 'var(--good)'] }], { tx: 1, ty: 1 , title: 'Points on a coordinate grid' })),
        st("Reflect the point 3, 2 in the y axis. It flips to the other side, to minus 3, 2. The y value stays the same, and the x value changes sign.", V.eq('(3, 2) → (−3, 2)', 'g') + V.rule('Reflect in the y-axis: x changes sign.'))]),
      REC("Along then up. Reflecting in the y-axis changes the sign of x. Reflecting in the x-axis changes the sign of y.", ['(x, y): along, then up', 'y-axis: x changes sign', 'x-axis: y changes sign'])] },
    { title: 'Symmetry and scale drawings', goal: 'rotational symmetry and scale factors.', scenes: [
      SC('Rotational symmetry', 'Order of rotation', [
        st("A shape has rotational symmetry if it looks the same after a turn of less than a full turn. The order is how many times it fits in 1 full turn. A square fits 4 times. An equilateral triangle fits 3 times.", V.tbl([['Square', '4'], ['Equilateral triangle', '3'], ['Rectangle', '2']], ['Shape', 'Order']))]),
      SC('Scale', 'Scale 1 : 100', [
        st("A scale of 1 to 100 means 1 centimetre on the drawing is 100 centimetres, 1 metre, in real life. So a wall drawn 5 centimetres long is 5 metres.", V.eq('5 cm × 100 = 500 cm = 5 m', 'g'))]),
      REC("The order of rotational symmetry counts how many times a shape fits on itself in a full turn. Multiply by the scale to get real lengths.", ['Order = number of fits', 'Drawing × scale = real', 'Change units'])] }
  ]);

  /* 812 INFORMATION HANDLING AND PROBABILITY */
  BT.story(812, 'Watch lesson', [
    { title: 'Averages and the spread of data', goal: 'mean, median, mode and range for a data set.', scenes: [
      SC('Even number of values', '2, 4, 4, 5, 7, 8', [
        st("We have 6 values: 2, 4, 4, 5, 7, 8. The mean is the total, 30, divided by 6, which is 5.", V.cards(['2', '4', '4', '5', '7', '8'], ['b'], true) + V.eq('30 ÷ 6 = 5', 'g')),
        st("The median is the middle value. With 6 values, the middle is between the third and fourth: 4 and 5. The median is 4.5. The mode is 4, and the range is 8 minus 2, 6.", V.tbl([['mean', '5'], ['median', '4.5'], ['mode', '4'], ['range', '6']], ['Measure', 'Value']))]),
      REC("Order the data for the median. With 2 middle values, find halfway between them.", ['Mean = total ÷ count', 'Median: middle of ordered data', 'Mode: most common', 'Range = max − min'])] },
    { title: 'Probability and relative frequency', goal: 'theoretical probability and experimental estimates.', scenes: [
      SC('Theoretical probability', 'A fair dice', [
        st("The probability of an even number on a fair dice is 3 out of 6, 1/2. Probability is favourable outcomes over all outcomes.", V.eq('P(even) = 3/6 = 1/2', 'g'))]),
      SC('Relative frequency', 'Testing a dice', [
        st("Roll a dice 90 times and get 18 sixes. The relative frequency is 18 over 90, 0.2. That is a bit more than 1/6, which is about 0.17, but experiments vary.", V.eq('18 ÷ 90 = 0.2') + V.eq('1/6 ≈ 0.167')),
        st("We can use probability to predict. In 120 rolls, we expect 1/6 to be sixes: 20.", V.eq('120 × 1/6 = 20', 'g'))]),
      REC("Probability is favourable over total. More trials make relative frequency closer to the true probability.", ['Favourable ÷ total', 'Relative frequency = successes ÷ trials', 'Expected = probability × trials'])] }
  ]);

  /* 813 SPATIAL */
  BT.story(813, 'Watch lesson', [
    { title: 'Nets and surface area', goal: 'how to find the surface area of a cuboid from its net.', scenes: [
      SC('Unfold the cuboid', 'Six rectangles', [
        st("A cuboid 6 centimetres long, 3 wide and 2 high has 6 faces. They come in 3 matching pairs. 6 by 3 is 18. 6 by 2 is 12. 3 by 2 is 6.", V.tbl([['6 × 3', '18'], ['6 × 2', '12'], ['3 × 2', '6']], ['Pair of faces', 'Area'])),
        st("Add the 3 areas, 36, and double because each face appears twice. The surface area is 72 square centimetres.", V.eq('2 × (18 + 12 + 6) = 72 cm²', 'g'))]),
      REC("Find the 3 different face areas, add them, and double.", ['Three pairs of faces', 'Add and double'])] },
    { title: 'Views and cross-sections', goal: 'how to picture a solid from different directions.', scenes: [
      SC('Plan, front and side', 'Three views', [
        st("Architects draw 3 views of a solid. The plan is the view from above. The front elevation is from the front, and the side elevation is from the side. A cylinder has a circle as its plan, and a rectangle for both elevations.", V.tbl([['Cylinder', 'circle', 'rectangle', 'rectangle'], ['Cone', 'circle', 'triangle', 'triangle']], ['Solid', 'Plan', 'Front', 'Side']))]),
      SC('Cross-sections', 'Slicing a solid', [
        st("A cross-section is the shape you see when you slice a solid. Slice a cylinder across and you see a circle. Slice a cube parallel to a face and you see a square.", V.cards(['cylinder → circle', 'cube → square'], ['b', 'g'], true))]),
      REC("Plan from above, elevations from the side. A cross-section is the shape of a slice.", ['Plan: from above', 'Elevations: from the side', 'Cross-section: a slice'])] }
  ]);
})();
