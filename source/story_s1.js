/* story_s1.js: teacher story lessons for S1 (topics 801 to 813). */
(function () {
  'use strict';
  var BT = window.BT; if (!BT || !BT.story || !BT.sv || !BT.sv.plot) return;
  var V = BT.sv, NL = BT.NL;
  var SC = function (h, sub, steps) { return { h: h, sub: sub, steps: steps }; };
  var st = function (say, html) { return { say: say, html: html || '' }; };
  var REC = function (say, items) { return SC('Let’s recap', '', [st(say, V.list(items))]); };

  /* 801 WHOLE NUMBERS AND DECIMALS */
  BT.story(801, 'Watch', [
    { title: 'Calculating with decimals', goal: 'how to multiply and divide decimals accurately.', scenes: [
      SC('Multiplying decimals', '3.6 × 0.4', [
        st("Welcome to secondary maths! Let's multiply three point six by zero point four. First ignore the decimal points and multiply the whole numbers: thirty-six times four is one hundred and forty-four.", V.eq('36 × 4 = 144', 'b')),
        st("Now count the decimal places in the question. Three point six has one, and zero point four has one. That is two altogether, so the answer has two decimal places: one point four four.", V.eq('3.6 × 0.4 = 1.44', 'g') + V.rule('Count the decimal places in the question.')),
        st("Check by estimating. Four times a bit less than half is a bit less than two. One point four four is sensible.", V.eq('≈ 4 × 0.4 = 1.6 ✓'))]),
      SC('Dividing decimals', '12.5 ÷ 0.5', [
        st("To divide by a decimal, make the divisor a whole number. Multiply both numbers by ten. Twelve point five divided by zero point five becomes a hundred and twenty-five divided by five, which is twenty-five.", V.eq('12.5 ÷ 0.5 = 125 ÷ 5 = 25', 'g'))]),
      REC("Multiply as whole numbers and put back the decimal places. To divide by a decimal, multiply both numbers by the same power of ten.", ['Multiply as whole numbers', 'Count the decimal places', 'Divide: make the divisor whole'])] },
    { title: 'Rounding and estimating', goal: 'how to round to decimal places and significant figures and estimate answers.', scenes: [
      SC('Rounding', 'Decimal places and significant figures', [
        st("Round zero point zero six seven eight to two significant figures. Count from the first digit that is not zero. The first two are six and seven. Next door is an eight, so round up: zero point zero six eight.", V.eq('0.0678 → 0.068', 'g') + V.rule('Leading zeros are not significant.')),
        st("Round forty-seven point three five to one decimal place. Look at the second decimal. It is a five, so round up: forty-seven point four.", V.eq('47.35 → 47.4 (1 d.p.)', 'g'))]),
      SC('Estimating', '4.87 × 6.1', [
        st("To estimate, round each number to one significant figure. Four point eight seven is about five. Six point one is about six. Five times six is thirty.", V.eq('5 × 6 = 30', 'g')),
        st("The exact answer is twenty-nine point seven, which is close. If your calculator said two hundred and ninety-seven, you would know you had slipped a decimal place.", V.eq('exact: 29.707 ✓', 'g'))]),
      REC("Round to one significant figure to estimate. Use the estimate to catch slips.", ['d.p. or s.f.?', 'Estimate with 1 s.f.', 'Compare with the exact answer'])] }
  ]);

  /* 802 INTEGERS, BODMAS, FACTORS, POWERS */
  BT.story(802, 'Watch', [
    { title: 'Negative numbers', goal: 'the rules for adding, subtracting, multiplying and dividing negatives.', scenes: [
      SC('Adding and subtracting', 'On the number line', [
        st("Subtracting a positive moves left. Minus five minus three: start at minus five and move three left, to minus eight.", NL(-10, 2, { lab: 2, tick: 1, jumps: [[-5, -8, '−3']] }) + V.eq('−5 − 3 = −8', 'g')),
        st("Subtracting a negative is like adding. Four take away minus two is four plus two, which is six. Two minuses make a plus.", V.eq('4 − (−2) = 4 + 2 = 6', 'g'))]),
      SC('Multiplying and dividing', 'Same signs give positive', [
        st("When you multiply or divide, the same signs give a positive answer, and different signs give a negative. Minus four times minus three is plus twelve. Minus twelve divided by four is minus three.", V.eq('−4 × −3 = 12') + V.eq('−12 ÷ 4 = −3', 'g') + V.rule('Same signs: positive. Different signs: negative.'))]),
      REC("Subtracting a negative is adding. For × and ÷: same signs positive, different signs negative.", ['− (−a) = + a', 'Same signs → positive', 'Different signs → negative'])] },
    { title: 'Powers, roots and prime factors', goal: 'how indices, roots and prime factors work together.', scenes: [
      SC('Index laws', 'Multiplying powers', [
        st("A power says how many times to multiply. Two to the five is two times itself five times, thirty-two. When you multiply powers of the same base, add the indices. Three squared times three to the four is three to the six.", V.eq('2⁵ = 32') + V.eq('3² × 3⁴ = 3⁶', 'g') + V.rule('Same base: add the indices.'))]),
      SC('Roots and prime factors', '60 as a product of primes', [
        st("A square root undoes a square. The square root of forty-nine is seven. Now break sixty into primes. Sixty is six times ten, which is two times three times two times five.", V.eq('√49 = 7') + V.eq('60 = 2² × 3 × 5', 'g')),
        st("And remember BODMAS: brackets, orders, then divide and multiply, then add and subtract.", V.list(['Brackets', 'Orders (powers, roots)', 'Divide / Multiply', 'Add / Subtract']))]),
      REC("Add indices when multiplying the same base. Roots undo powers. Prime factors are the building blocks of a number.", ['aᵐ × aⁿ = aᵐ⁺ⁿ', 'Roots undo powers', 'Prime factor trees'])] }
  ]);

  /* 803 FRACTIONS */
  BT.story(803, 'Watch', [
    { title: 'Adding and subtracting mixed numbers', goal: 'how to add mixed numbers by using a common denominator.', scenes: [
      SC('Whole numbers first', '2 1/3 + 1 3/4', [
        st("Two and a third plus one and three quarters. Add the whole numbers: two plus one is three. Now the fractions. The common denominator of three and four is twelve.", V.eq('2 + 1 = 3') + V.eq('1/3 = 4/12    3/4 = 9/12')),
        st("Four twelfths plus nine twelfths is thirteen twelfths. That is more than one whole: one and one twelfth. Add that to the three: four and one twelfth.", V.eq('4/12 + 9/12 = 13/12 = 1 1/12') + V.eq('3 + 1 1/12 = 4 1/12', 'g'))]),
      REC("Add whole numbers and fractions separately. Use a common denominator, and convert any improper fraction at the end.", ['Whole numbers first', 'Common denominator', 'Convert improper fractions'])] },
    { title: 'Multiplying and dividing fractions', goal: 'how to multiply and divide fractions and mixed numbers.', scenes: [
      SC('Multiplying mixed numbers', '2 1/2 × 1 1/3', [
        st("Turn mixed numbers into improper fractions first. Two and a half is five halves. One and a third is four thirds. Multiply tops and bottoms: twenty sixths. Simplify to ten thirds, which is three and a third.", V.eq('5/2 × 4/3 = 20/6 = 10/3 = 3 1/3', 'g'))]),
      SC('Dividing', '3/5 ÷ 2/3', [
        st("To divide, keep the first fraction, change to multiply, and flip the second. Three fifths times three halves is nine tenths.", V.eq('3/5 × 3/2 = 9/10', 'g') + V.rule('Keep, change, flip.'))]),
      REC("Improper fractions first. To multiply: tops and bottoms. To divide: keep, change, flip.", ['Mixed → improper', 'Multiply across', 'Divide: keep, change, flip'])] }
  ]);

  /* 804 PERCENTAGES */
  BT.story(804, 'Watch', [
    { title: 'Percentages of amounts', goal: 'how to find a percentage of an amount and write one amount as a percentage.', scenes: [
      SC('Finding a percentage', '35% of 240', [
        st("Find thirty-five per cent of two hundred and forty. Ten per cent is twenty-four. Thirty per cent is three times that, seventy-two. Five per cent is half of ten per cent, twelve. Add them: eighty-four.", V.eq('30% = 72') + V.eq('5% = 12') + V.eq('35% = 84', 'g')),
        st("Or use a calculator. Thirty-five per cent is zero point three five. Zero point three five times two hundred and forty is also eighty-four.", V.eq('0.35 × 240 = 84', 'g'))]),
      SC('One amount as a percentage', '18 out of 45', [
        st("Write eighteen out of forty-five as a percentage. Divide eighteen by forty-five to get zero point four. Multiply by a hundred: forty per cent.", V.eq('18 ÷ 45 = 0.4 = 40%', 'g'))]),
      REC("Build percentages from ten per cent, or use the decimal multiplier. For a percentage, divide then multiply by a hundred.", ['10% then build', 'Decimal multiplier', 'Part ÷ whole × 100'])] },
    { title: 'Percentage increase and decrease', goal: 'how to use multipliers for percentage change.', scenes: [
      SC('The multiplier', 'Increase by 12%', [
        st("To increase by twelve per cent, you have one hundred per cent plus twelve, a hundred and twelve per cent. As a decimal, that is the multiplier one point one two. Two hundred and fifty times one point one two is two hundred and eighty.", V.eq('250 × 1.12 = 280', 'g')),
        st("To decrease by fifteen per cent, you keep eighty-five per cent. The multiplier is zero point eight five. Sixty times zero point eight five is fifty-one.", V.eq('60 × 0.85 = 51', 'g')),
        st("So the multiplier is a hundred per cent, plus or minus the change, written as a decimal.", V.tbl([['+12%', '1.12'], ['−15%', '0.85'], ['+5%', '1.05'], ['−30%', '0.70']], ['Change', 'Multiplier']))]),
      REC("Increase: one plus the decimal. Decrease: one minus the decimal. Multiply the original amount.", ['Increase: 1 + p', 'Decrease: 1 − p', 'Multiply the original'])] }
  ]);

  /* 805 RATIO */
  BT.story(805, 'Watch', [
    { title: 'Simplifying and sharing in a ratio', goal: 'how to simplify a ratio and share an amount in a given ratio.', scenes: [
      SC('Simplifying', '24 : 36', [
        st("To simplify a ratio, divide both parts by their highest common factor. The highest common factor of twenty-four and thirty-six is twelve. So twenty-four to thirty-six is two to three.", V.eq('24 : 36 = 2 : 3', 'g')),
        st("Ratios with different units need the same units first. Fifty centimetres to two metres is fifty to two hundred, which is one to four.", V.eq('50 cm : 2 m = 50 : 200 = 1 : 4', 'g'))]),
      SC('Sharing', '£150 in the ratio 2 : 3', [
        st("Share a hundred and fifty pounds in the ratio two to three. Add the parts: five. A hundred and fifty divided by five is thirty pounds a part. So the shares are sixty and ninety.", V.bm([['A', [[80, '2']]], ['B', [[120, '3']]]]) + V.eq('150 ÷ 5 = £30') + V.eq('£60 and £90', 'g'))]),
      REC("Simplify by dividing by the highest common factor, with the same units. To share, add the parts, find one part, multiply.", ['Same units first', 'Divide by the HCF', 'Add parts → one part → multiply'])] },
    { title: 'Direct proportion', goal: 'how to solve proportion problems with the unitary method.', scenes: [
      SC('The unitary method', '3 kg costs £4.50', [
        st("Three kilograms of apples cost four pounds fifty. How much for five kilograms? Find the cost of one kilogram: four fifty divided by three is one pound fifty.", V.eq('£4.50 ÷ 3 = £1.50 per kg')),
        st("Now multiply by five. Five times one pound fifty is seven pounds fifty.", V.eq('5 × £1.50 = £7.50', 'g')),
        st("This is direct proportion: double the apples, double the cost. The graph of cost against mass is a straight line through the origin.", V.plot(0, 6, 0, 9, [{ l: [[0, 0], [6, 9]] }, { p: [5, 7.5, '£7.50'] }], { tx: 1, ty: 1, xl: 'kg', yl: '£' }))]),
      REC("Find one unit first, then multiply. In direct proportion the graph is a straight line through the origin.", ['Find the cost of one', 'Multiply', 'Straight line through the origin'])] }
  ]);

  /* 806 MONEY AND FINANCE */
  BT.story(806, 'Watch', [
    { title: 'Wages and overtime', goal: 'how to calculate pay including overtime.', scenes: [
      SC('Basic pay', '35 hours at £9.50', [
        st("Maya works thirty-five hours at nine pounds fifty an hour. Her basic pay is thirty-five times nine fifty, three hundred and thirty-two pounds fifty.", V.eq('35 × £9.50 = £332.50', 'b')),
        st("Overtime at time and a half means one and a half times the normal rate. Nine fifty times one point five is fourteen pounds twenty-five an hour. For six hours: eighty-five pounds fifty.", V.eq('£9.50 × 1.5 = £14.25') + V.eq('6 × £14.25 = £85.50', 'g')),
        st("Her total is basic pay plus overtime, four hundred and eighteen pounds.", V.eq('£332.50 + £85.50 = £418', 'g'))]),
      REC("Basic pay is hours times rate. Overtime uses a higher rate. Add the two.", ['Hours × rate', 'Overtime rate: × 1.5 or × 2', 'Add the pay'])] },
    { title: 'VAT and simple interest', goal: 'how to add VAT, remove it, and calculate simple interest.', scenes: [
      SC('Adding VAT', '£35 plus 20% VAT', [
        st("VAT of twenty per cent on thirty-five pounds. The multiplier is one point two. Thirty-five times one point two is forty-two pounds.", V.eq('£35 × 1.2 = £42', 'g'))]),
      SC('Removing VAT', 'Price with VAT is £60', [
        st("Going backwards: a price of sixty pounds already includes twenty per cent VAT. Sixty is one hundred and twenty per cent. Divide by one point two to get back to a hundred per cent: fifty pounds.", V.eq('£60 ÷ 1.2 = £50', 'g') + V.rule('To go backwards, divide by the multiplier.'))]),
      SC('Simple interest', '£800 at 3% for 2 years', [
        st("Simple interest is the same each year. Three per cent of eight hundred is twenty-four pounds. For two years that is forty-eight pounds.", V.eq('3% of £800 = £24') + V.eq('2 × £24 = £48', 'g'))]),
      REC("Use multipliers to add VAT, and divide by the multiplier to take it off. Simple interest is the same every year.", ['× 1.2 adds 20% VAT', '÷ 1.2 removes it', 'Interest = amount × rate × years'])] }
  ]);

  /* 807 TIME, DISTANCE, SPEED */
  BT.story(807, 'Watch', [
    { title: 'Speed, distance and time', goal: 'how to use the speed formula and convert times.', scenes: [
      SC('The formula', 'Speed = distance ÷ time', [
        st("Speed tells us how far we go in one hour. A car travels a hundred and eighty kilometres in two and a half hours. Divide the distance by the time: seventy-two kilometres per hour.", V.eq('180 ÷ 2.5 = 72 km/h', 'g')),
        st("Rearranged, distance is speed times time, and time is distance divided by speed. A triangle with D at the top, S and T at the bottom helps you remember.", V.cols([V.card('D', 'b'), V.card('S × T', 'g'), V.card('D ÷ S = T', 'r')], 3).replace('sv-cols"', 'sv-cols" '))]),
      SC('Hours and minutes', '2 h 15 min', [
        st("Careful with time. Two hours fifteen minutes is not two point one five hours. Fifteen minutes is a quarter of an hour, so it is two point two five hours.", V.eq('2 h 15 min = 2.25 h', 'g') + V.rule('Minutes ÷ 60 gives hours.'))]),
      REC("Speed is distance over time. Change minutes into hours by dividing by sixty before you use the formula.", ['S = D ÷ T', 'D = S × T', 'T = D ÷ S', 'Minutes ÷ 60'])] },
    { title: 'Distance–time graphs', goal: 'how to read a distance–time graph.', scenes: [
      SC('A journey', 'Three stages', [
        st("This graph shows a journey. Time is along the bottom, distance from home up the side. For the first hour the line goes up steadily to sixty kilometres.", V.plot(0, 4, 0, 180, [{ l: [[0, 0], [1, 60]] }], { tx: 1, ty: 60, xl: 'hours', yl: 'km' })),
        st("Then the line is flat for an hour. The distance is not changing, so the traveller has stopped.", V.plot(0, 4, 0, 180, [{ l: [[0, 0], [1, 60], [2, 60]] }], { tx: 1, ty: 60, xl: 'hours', yl: 'km' })),
        st("In the last two hours the line climbs from sixty to a hundred and eighty. That is a hundred and twenty kilometres in two hours, sixty kilometres an hour. The steeper the line, the faster the speed.", V.plot(0, 4, 0, 180, [{ l: [[0, 0], [1, 60], [2, 60], [4, 180]] }], { tx: 1, ty: 60, xl: 'hours', yl: 'km' }) + V.eq('gradient = 120 ÷ 2 = 60 km/h', 'g'))]),
      REC("The gradient of a distance–time graph is the speed. A flat line means stopped.", ['Steeper = faster', 'Flat = stopped', 'Gradient = speed'])] }
  ]);

  /* 808 MEASURE, AREA, VOLUME */
  BT.story(808, 'Watch', [
    { title: 'Area of triangles, parallelograms and trapeziums', goal: 'the area formulas for common 2D shapes.', scenes: [
      SC('Parallelogram', 'Base times perpendicular height', [
        st("A parallelogram can be cut and moved to make a rectangle. Its area is the base times the perpendicular height, not the slanted side. With base eight and height five, the area is forty.", V.eq('8 × 5 = 40 cm²', 'g') + V.rule('Use the perpendicular height.')),
        st("A triangle is half of a parallelogram. Half base times height.", V.eq('A = ½ × b × h', 'b'))]),
      SC('Trapezium', 'Two parallel sides', [
        st("A trapezium has two parallel sides. Add them, halve, and multiply by the height. With parallel sides six and ten and height four: half of sixteen is eight, times four is thirty-two.", V.eq('A = ½ (a + b) h') + V.eq('½ × (6 + 10) × 4 = 32 cm²', 'g'))]),
      REC("Parallelogram: base times height. Triangle: half base times height. Trapezium: half the sum of the parallel sides times the height.", ['Parallelogram: b × h', 'Triangle: ½ b h', 'Trapezium: ½ (a + b) h'])] },
    { title: 'Volume of a prism', goal: 'how to find the volume of a prism from its cross-section.', scenes: [
      SC('Cross-section times length', 'A triangular prism', [
        st("A prism has the same cross-section all the way along. Its volume is the area of the cross-section times the length. This triangle has base six and height four, so its area is twelve square centimetres.", V.eq('½ × 6 × 4 = 12 cm²')),
        st("The prism is ten centimetres long. Twelve times ten is a hundred and twenty cubic centimetres.", V.eq('V = 12 × 10 = 120 cm³', 'g') + V.rule('Volume = area of cross-section × length.'))]),
      REC("Find the area of the end face, then multiply by the length.", ['Area of the cross-section', '× length', 'Units are cubed'])] }
  ]);

  /* 809 SEQUENCES, FORMULAE, ALGEBRA */
  BT.story(809, 'Watch', [
    { title: 'Simplifying and expanding', goal: 'how to collect like terms and expand brackets.', scenes: [
      SC('Like terms', '3a + 2b + 4a − b', [
        st("Like terms have the same letter. Three a and four a make seven a. Two b take away b leaves one b. So three a plus two b plus four a minus b simplifies to seven a plus b.", V.eq('3a + 2b + 4a − b = 7a + b', 'g')),
        st("Think of letters as fruit. You can add apples to apples, but not apples to bananas.", V.rule('Only add like terms.'))]),
      SC('Expanding brackets', '3(x + 4)', [
        st("To expand a bracket, multiply everything inside by the number outside. Three times x is three x, and three times four is twelve.", V.eq('3(x + 4) = 3x + 12', 'g'))]),
      REC("Collect like terms. Multiply every term in a bracket by the number outside.", ['Like terms only', 'Multiply every term in the bracket'])] },
    { title: 'Formulae and equations', goal: 'how to substitute into formulae and solve two-step equations.', scenes: [
      SC('Substitution', 'P = 2l + 2w', [
        st("A formula is a rule written in letters. The perimeter of a rectangle is two l plus two w. When length is seven and width is four, the perimeter is fourteen plus eight, twenty-two.", V.eq('2 × 7 + 2 × 4 = 22', 'g'))]),
      SC('Solving equations', 'Undo in reverse order', [
        st("To solve two x plus five equals seventeen, undo the plus five first: two x equals twelve. Then undo the times two: x equals six.", V.eq('2x + 5 = 17') + V.eq('2x = 12') + V.eq('x = 6', 'g')),
        st("Another: x over three, minus one, equals four. Add one: x over three is five. Multiply by three: x is fifteen.", V.eq('x/3 − 1 = 4 → x/3 = 5 → x = 15', 'g'))]),
      REC("Substitute carefully. In equations, undo the operations in reverse order, doing the same to both sides.", ['Substitute, then calculate', 'Undo + and − first', 'Then undo × and ÷'])] }
  ]);

  /* 810 ANGLES */
  BT.story(810, 'Watch', [
    { title: 'Angle rules', goal: 'the basic angle facts and how to use them.', scenes: [
      SC('Facts to know', 'Lines and points', [
        st("Angles on a straight line add up to one eighty. Angles around a point add up to three sixty. Where two straight lines cross, the opposite angles, called vertically opposite, are equal.", V.tbl([['Straight line', '180°'], ['Around a point', '360°'], ['Vertically opposite', 'equal']], ['Fact', 'Rule']))]),
      SC('Triangles', 'Angles add to 180', [
        st("The angles in a triangle add up to one eighty. In an isosceles triangle, two sides are equal and the two base angles are equal. If the top angle is forty, the other two share a hundred and forty, seventy each.", V.eq('180 − 40 = 140') + V.eq('140 ÷ 2 = 70° each', 'g'))]),
      REC("Straight line one eighty, point three sixty, triangle one eighty. Isosceles triangles have two equal angles.", ['Line: 180°', 'Point: 360°', 'Triangle: 180°', 'Vertically opposite: equal'])] },
    { title: 'Parallel lines', goal: 'corresponding, alternate and co-interior angles.', scenes: [
      SC('F, Z and C', 'Equal or supplementary', [
        st("When a line crosses two parallel lines, corresponding angles in an F shape are equal.", V.par([[155, 72, '65°'], [215, 152, '65°']])),
        st("Alternate angles in a Z shape are equal too.", V.par([[155, 72, '65°'], [138, 130, '65°']])),
        st("Co-interior angles in a C shape add up to one eighty. If one is sixty-five, the other is one hundred and fifteen.", V.par([[155, 72, '65°'], [203, 130, '115°']]) + V.eq('180 − 65 = 115°', 'g'))]),
      REC("F: corresponding, equal. Z: alternate, equal. C: co-interior, add to one eighty.", ['F: equal', 'Z: equal', 'C: sum to 180°'])] }
  ]);

  /* 811 SHAPE, SYMMETRY, COORDINATES, SCALE */
  BT.story(811, 'Watch', [
    { title: 'Four-quadrant coordinates and reflection', goal: 'how to plot points in all four quadrants and reflect shapes.', scenes: [
      SC('The four quadrants', 'x first, then y', [
        st("Coordinates tell us where a point is. The first number is along, the x direction. The second is up or down, the y direction. Negative numbers go left and down.", V.plot(-4, 4, -4, 4, [{ p: [3, 2, '(3, 2)', 'var(--accent)'] }, { p: [-3, 2, '(−3, 2)'] }, { p: [-3, -2, '(−3, −2)', 'var(--good)'] }], { tx: 1, ty: 1 })),
        st("Reflect the point three, two in the y axis. It flips to the other side, to minus three, two. The y value stays the same, and the x value changes sign.", V.eq('(3, 2) → (−3, 2)', 'g') + V.rule('Reflect in the y-axis: x changes sign.'))]),
      REC("Along then up. Reflecting in the y-axis changes the sign of x. Reflecting in the x-axis changes the sign of y.", ['(x, y): along, then up', 'y-axis: x changes sign', 'x-axis: y changes sign'])] },
    { title: 'Symmetry and scale drawings', goal: 'rotational symmetry and scale factors.', scenes: [
      SC('Rotational symmetry', 'Order of rotation', [
        st("A shape has rotational symmetry if it looks the same after a turn of less than a full turn. The order is how many times it fits in one full turn. A square fits four times. An equilateral triangle fits three times.", V.tbl([['Square', '4'], ['Equilateral triangle', '3'], ['Rectangle', '2']], ['Shape', 'Order']))]),
      SC('Scale', 'Scale 1 : 100', [
        st("A scale of one to a hundred means one centimetre on the drawing is a hundred centimetres, one metre, in real life. So a wall drawn five centimetres long is five metres.", V.eq('5 cm × 100 = 500 cm = 5 m', 'g'))]),
      REC("The order of rotational symmetry counts how many times a shape fits on itself in a full turn. Multiply by the scale to get real lengths.", ['Order = number of fits', 'Drawing × scale = real', 'Change units'])] }
  ]);

  /* 812 INFORMATION HANDLING AND PROBABILITY */
  BT.story(812, 'Watch', [
    { title: 'Averages and the spread of data', goal: 'mean, median, mode and range for a data set.', scenes: [
      SC('Even number of values', '2, 4, 4, 5, 7, 8', [
        st("We have six values: two, four, four, five, seven, eight. The mean is the total, thirty, divided by six, which is five.", V.cards(['2', '4', '4', '5', '7', '8'], ['b'], true) + V.eq('30 ÷ 6 = 5', 'g')),
        st("The median is the middle value. With six values, the middle is between the third and fourth: four and five. The median is four point five. The mode is four, and the range is eight minus two, six.", V.tbl([['mean', '5'], ['median', '4.5'], ['mode', '4'], ['range', '6']], ['Measure', 'Value']))]),
      REC("Order the data for the median. With two middle values, find halfway between them.", ['Mean = total ÷ count', 'Median: middle of ordered data', 'Mode: most common', 'Range = max − min'])] },
    { title: 'Probability and relative frequency', goal: 'theoretical probability and experimental estimates.', scenes: [
      SC('Theoretical probability', 'A fair dice', [
        st("The probability of an even number on a fair dice is three out of six, one half. Probability is favourable outcomes over all outcomes.", V.eq('P(even) = 3/6 = 1/2', 'g'))]),
      SC('Relative frequency', 'Testing a dice', [
        st("Roll a dice ninety times and get eighteen sixes. The relative frequency is eighteen over ninety, zero point two. That is a bit more than one sixth, which is about zero point one seven, but experiments vary.", V.eq('18 ÷ 90 = 0.2') + V.eq('1/6 ≈ 0.167')),
        st("We can use probability to predict. In a hundred and twenty rolls, we expect a sixth to be sixes: twenty.", V.eq('120 × 1/6 = 20', 'g'))]),
      REC("Probability is favourable over total. More trials make relative frequency closer to the true probability.", ['Favourable ÷ total', 'Relative frequency = successes ÷ trials', 'Expected = probability × trials'])] }
  ]);

  /* 813 SPATIAL */
  BT.story(813, 'Watch', [
    { title: 'Nets and surface area', goal: 'how to find the surface area of a cuboid from its net.', scenes: [
      SC('Unfold the cuboid', 'Six rectangles', [
        st("A cuboid six centimetres long, three wide and two high has six faces. They come in three matching pairs. Six by three is eighteen. Six by two is twelve. Three by two is six.", V.tbl([['6 × 3', '18'], ['6 × 2', '12'], ['3 × 2', '6']], ['Pair of faces', 'Area'])),
        st("Add the three areas, thirty-six, and double because each face appears twice. The surface area is seventy-two square centimetres.", V.eq('2 × (18 + 12 + 6) = 72 cm²', 'g'))]),
      REC("Find the three different face areas, add them, and double.", ['Three pairs of faces', 'Add and double'])] },
    { title: 'Views and cross-sections', goal: 'how to picture a solid from different directions.', scenes: [
      SC('Plan, front and side', 'Three views', [
        st("Architects draw three views of a solid. The plan is the view from above. The front elevation is from the front, and the side elevation is from the side. A cylinder has a circle as its plan, and a rectangle for both elevations.", V.tbl([['Cylinder', 'circle', 'rectangle', 'rectangle'], ['Cone', 'circle', 'triangle', 'triangle']], ['Solid', 'Plan', 'Front', 'Side']))]),
      SC('Cross-sections', 'Slicing a solid', [
        st("A cross-section is the shape you see when you slice a solid. Slice a cylinder across and you see a circle. Slice a cube parallel to a face and you see a square.", V.cards(['cylinder → circle', 'cube → square'], ['b', 'g'], true))]),
      REC("Plan from above, elevations from the side. A cross-section is the shape of a slice.", ['Plan: from above', 'Elevations: from the side', 'Cross-section: a slice'])] }
  ]);
})();
