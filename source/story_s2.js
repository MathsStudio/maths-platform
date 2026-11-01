/* story_s2.js: teacher story lessons for S2 (topics 821 to 833). */
(function () {
  'use strict';
  var BT = window.BT; if (!BT || !BT.story || !BT.sv || !BT.sv.plot) return;
  var V = BT.sv, NL = BT.NL;
  var SC = function (h, sub, steps) { return { h: h, sub: sub, steps: steps }; };
  var st = function (say, html) { return { say: say, html: html || '' }; };
  var REC = function (say, items) { return SC('Let’s recap', '', [st(say, V.list(items))]); };

  /* 821 NUMBER: POWERS, ROOTS, STANDARD FORM */
  BT.story(821, 'Watch', [
    { title: 'Standard form', goal: 'how to write very big and very small numbers in standard form.', scenes: [
      SC('Big numbers', '45,000', [
        st("Scientists need a short way to write very large and very small numbers. It is called standard form. A number in standard form is a number between one and ten, multiplied by a power of ten.", V.eq('a × 10ⁿ', 'b') + V.note('1 ≤ a < 10')),
        st("Forty-five thousand: put the decimal point after the first digit to get four point five. We moved the point four places, so the power is ten to the four.", V.eq('45,000 = 4.5 × 10⁴', 'g'))]),
      SC('Small numbers', '0.00032', [
        st("For a small number, the power is negative. Zero point zero zero zero three two. Move the point four places right to get three point two. The power is minus four.", V.eq('0.00032 = 3.2 × 10⁻⁴', 'g'))]),
      SC('Calculating', 'Multiply in standard form', [
        st("To multiply, multiply the numbers and add the powers. Three times ten to the three, times two times ten to the two. Three times two is six. Ten to the three times ten squared is ten to the five.", V.eq('(3 × 10³) × (2 × 10²) = 6 × 10⁵', 'g'))]),
      REC("Standard form is a number from one to ten times a power of ten. Big numbers have positive powers, small numbers negative.", ['1 ≤ a < 10', 'Big: positive power', 'Small: negative power'])] },
    { title: 'Index laws and negative indices', goal: 'the laws of indices, including zero and negative powers.', scenes: [
      SC('Index laws', 'Same base', [
        st("When you multiply the same base, add the powers. When you divide, subtract. Brackets raised to a power: multiply the powers.", V.tbl([['aᵐ × aⁿ', 'aᵐ⁺ⁿ'], ['aᵐ ÷ aⁿ', 'aᵐ⁻ⁿ'], ['(aᵐ)ⁿ', 'aᵐⁿ']], ['Law', 'Result'])),
        st("An example: five to the six divided by five to the four is five squared, twenty-five.", V.eq('5⁶ ÷ 5⁴ = 5² = 25', 'g'))]),
      SC('Zero and negative powers', 'What do they mean?', [
        st("Anything to the power zero is one. A negative power means a reciprocal. Two to the minus three is one over two cubed, which is one eighth.", V.eq('a⁰ = 1') + V.eq('2⁻³ = 1/2³ = 1/8', 'g'))]),
      REC("Add powers to multiply, subtract to divide. Power zero is one. A negative power is a reciprocal.", ['× add, ÷ subtract', 'a⁰ = 1', 'a⁻ⁿ = 1/aⁿ'])] }
  ]);

  /* 822 PERCENTAGES */
  BT.story(822, 'Watch', [
    { title: 'Compound percentage change', goal: 'how to apply a percentage change repeatedly.', scenes: [
      SC('Compound interest', '£2000 at 5% for 3 years', [
        st("With compound interest, each year's interest is added, so next year you earn interest on interest. Five per cent growth has the multiplier one point oh five.", V.eq('multiplier = 1.05', 'b')),
        st("After one year, two thousand times one point oh five. After three years, multiply three times: two thousand times one point oh five cubed.", V.eq('2000 × 1.05³', 'b')),
        st("One point oh five cubed is one point one five seven six two five. Times two thousand is two thousand, three hundred and fifteen pounds twenty-five.", V.eq('2000 × 1.157625 = £2,315.25', 'g') + V.rule('Amount × multiplier to the power of the years.'))]),
      REC("For repeated percentage change, raise the multiplier to the power of the number of years.", ['Find the multiplier', 'Raise to the power n', 'Multiply the original'])] },
    { title: 'Percentage change and reverse percentages', goal: 'how to calculate percentage change and work backwards.', scenes: [
      SC('Percentage change', 'From 40 to 50', [
        st("Percentage change is the change divided by the original, times a hundred. A price rises from forty to fifty. The change is ten. Ten over forty is a quarter, so twenty-five per cent.", V.eq('(50 − 40) ÷ 40 × 100 = 25%', 'g') + V.rule('Always divide by the original.'))]),
      SC('Reverse percentages', 'After a 20% increase the price is £90', [
        st("After a twenty per cent increase, the price is ninety pounds. What was it before? Ninety pounds is a hundred and twenty per cent of the original. So divide by one point two: seventy-five pounds.", V.eq('£90 ÷ 1.2 = £75', 'g')),
        st("Check: twenty per cent of seventy-five is fifteen, and seventy-five plus fifteen is ninety.", V.eq('75 + 15 = 90 ✓', 'g'))]),
      REC("Change over original times a hundred. For reverse problems, divide by the multiplier.", ['Change ÷ original × 100', 'Reverse: ÷ multiplier', 'Check by going forwards'])] }
  ]);

  /* 823 RATIO AND PROPORTION */
  BT.story(823, 'Watch', [
    { title: 'Combining ratios', goal: 'how to link two ratios into one.', scenes: [
      SC('A shared quantity', 'a : b = 2 : 3 and b : c = 4 : 5', [
        st("Suppose a to b is two to three, and b to c is four to five. The b in both ratios is different: three in the first, four in the second. Make them match using the lowest common multiple, twelve.", V.eq('a : b = 2 : 3', 'b') + V.eq('b : c = 4 : 5', 'b')),
        st("Multiply the first ratio by four, to get eight to twelve. Multiply the second by three, to get twelve to fifteen. Now b is twelve in both.", V.eq('a : b = 8 : 12') + V.eq('b : c = 12 : 15')),
        st("So the combined ratio is eight to twelve to fifteen.", V.eq('a : b : c = 8 : 12 : 15', 'g'))]),
      REC("To combine ratios, make the shared part the same number in both, then join them.", ['Find the shared part', 'Make it equal using the LCM', 'Join the ratios'])] },
    { title: 'Direct and inverse proportion', goal: 'the difference between direct and inverse proportion.', scenes: [
      SC('Direct proportion', 'y = kx', [
        st("In direct proportion, when one quantity doubles, so does the other. The graph is a straight line through the origin. The rule is y equals k x, where k is the constant of proportionality.", V.plot(0, 5, 0, 10, [{ l: [[0, 0], [5, 10]] }], { tx: 1, ty: 2, xl: 'x', yl: 'y' }) + V.eq('y = kx', 'b'))]),
      SC('Inverse proportion', 'More workers, less time', [
        st("In inverse proportion, when one doubles the other halves. Six workers take ten days. Their total work is sixty worker-days. Four workers need sixty divided by four, fifteen days.", V.eq('6 × 10 = 60') + V.eq('60 ÷ 4 = 15 days', 'g') + V.rule('Direct: ÷ and ×. Inverse: x × y stays the same.'))]),
      REC("Direct proportion: y over x stays the same. Inverse: x times y stays the same.", ['Direct: y = kx', 'Inverse: y = k/x', 'Find k first'])] }
  ]);

  /* 824 FINANCE */
  BT.story(824, 'Watch', [
    { title: 'Income tax', goal: 'how income tax is worked out using an allowance and a rate.', scenes: [
      SC('Taxable income', 'A worked example', [
        st("Income tax is only paid on the part of your income above a tax-free personal allowance. In this example, take an allowance of twelve thousand five hundred pounds, and a rate of twenty per cent. The real rates change, so always use the figures in the question.", V.eq('Example: allowance £12,500, rate 20%', 'b')),
        st("Someone earns thirty thousand. Taxable income is thirty thousand minus twelve thousand five hundred, seventeen thousand five hundred. Twenty per cent of that is three thousand five hundred pounds tax.", V.eq('30,000 − 12,500 = 17,500') + V.eq('20% of 17,500 = £3,500', 'g'))]),
      REC("Subtract the allowance to find taxable income. Apply the tax rate to that part only.", ['Income − allowance', '× tax rate', 'Use the figures in the question'])] },
    { title: 'Hire purchase and exchange rates', goal: 'how to compare ways of paying and convert currency.', scenes: [
      SC('Hire purchase', 'Cash £550 or credit?', [
        st("A sofa costs five hundred and fifty pounds cash. On hire purchase it is a hundred pounds deposit and twelve payments of forty-five pounds. The payments are five hundred and forty. With the deposit, the total is six hundred and forty.", V.eq('12 × £45 = £540') + V.eq('£100 + £540 = £640', 'b')),
        st("The extra cost of credit is six forty minus five fifty, ninety pounds. That is the price of paying slowly.", V.eq('£640 − £550 = £90 extra', 'g'))]),
      SC('Exchange rates', '£1 = €1.18', [
        st("To change pounds to euros, multiply by the rate. To change euros to pounds, divide. Two hundred and fifty euros divided by one point one eight is two hundred and eleven pounds eighty-six.", V.eq('250 ÷ 1.18 = £211.86', 'g') + V.rule('Pounds to euros: ×. Euros to pounds: ÷.'))]),
      REC("Total credit cost is deposit plus all payments. For currency, multiply to go to the bigger number of units, divide to come back.", ['Deposit + payments', 'Compare with cash', '£ → €: ×, € → £: ÷'])] }
  ]);

  /* 825 TIME, DISTANCE, SPEED */
  BT.story(825, 'Watch', [
    { title: 'Average speed', goal: 'why average speed is total distance over total time.', scenes: [
      SC('A common mistake', '30 km/h then 60 km/h', [
        st("A car drives sixty kilometres at thirty kilometres an hour, then sixty kilometres at sixty an hour. Is the average forty-five? Let's check carefully.", V.eq('average = 45?', 'r')),
        st("The first part takes two hours. The second takes one hour. Total distance is a hundred and twenty kilometres, in three hours.", V.eq('60 ÷ 30 = 2 h') + V.eq('60 ÷ 60 = 1 h')),
        st("Average speed is total distance over total time: a hundred and twenty divided by three is forty kilometres an hour, not forty-five.", V.eq('120 ÷ 3 = 40 km/h', 'g') + V.rule('Average speed = total distance ÷ total time.'))]),
      REC("Never average the speeds. Divide the total distance by the total time.", ['Total distance', 'Total time', 'Divide'])] },
    { title: 'Distance–time graphs with a return', goal: 'how to read speeds from a graph with several stages.', scenes: [
      SC('Out, rest and back', 'A cycle ride', [
        st("A cyclist rides out for two hours to eighty kilometres. That is forty kilometres an hour.", V.plot(0, 5, 0, 100, [{ l: [[0, 0], [2, 80]] }], { tx: 1, ty: 20, xl: 'hours', yl: 'km' })),
        st("Then she rests for an hour. The line is flat. Then she rides home, and the line goes back down to zero over two hours. The speed is still forty, but the gradient is negative because she is coming back.", V.plot(0, 5, 0, 100, [{ l: [[0, 0], [2, 80], [3, 80], [5, 0]] }], { tx: 1, ty: 20, xl: 'hours', yl: 'km' }) + V.eq('80 ÷ 2 = 40 km/h each way', 'g'))]),
      REC("Gradient is speed. Flat is stopped. A line coming down is moving back towards the start.", ['Gradient = speed', 'Flat = rest', 'Downward = coming back'])] }
  ]);

  /* 826 AREA, VOLUME, SURFACE AREA */
  BT.story(826, 'Watch', [
    { title: 'Circles', goal: 'how to find the area and circumference of a circle.', scenes: [
      SC('Two formulas', 'Radius 5 cm', [
        st("The circumference is the distance around. It is two pi r. The area is pi r squared. Pi is about three point one four. With radius five centimetres, the circumference is ten pi, about thirty-one point four.", V.circle() + V.eq('C = 2πr = 10π ≈ 31.4 cm', 'g')),
        st("The area is pi times five squared, twenty-five pi, about seventy-eight point five square centimetres. Careful: square the radius first, then multiply by pi.", V.eq('A = πr² = 25π ≈ 78.5 cm²', 'g') + V.rule('Square the radius first.'))]),
      REC("Circumference is two pi r. Area is pi r squared. Use the radius, half the diameter.", ['C = 2πr', 'A = πr²', 'Radius = ½ diameter'])] },
    { title: 'Cylinders', goal: 'volume and surface area of a cylinder.', scenes: [
      SC('Volume', 'Radius 3 cm, height 10 cm', [
        st("A cylinder is a circle stretched up. Its volume is the area of the circle times the height. Pi times three squared is nine pi. Times ten gives ninety pi, about two hundred and eighty-two point seven cubic centimetres.", V.eq('V = πr²h = π × 9 × 10 = 90π ≈ 282.7 cm³', 'g'))]),
      SC('Surface area', 'Two circles and a rectangle', [
        st("The surface is two circles plus a curved part, which unrolls into a rectangle. The rectangle's width is the circumference. So the surface area is two pi r squared plus two pi r h. Eighteen pi plus sixty pi is seventy-eight pi, about two hundred and forty-five square centimetres.", V.eq('SA = 2πr² + 2πrh = 18π + 60π = 78π ≈ 245 cm²', 'g'))]),
      REC("Cylinder volume is pi r squared times h. The surface is two circles plus a rectangle.", ['V = πr²h', 'SA = 2πr² + 2πrh', 'Circle area × height'])] }
  ]);

  /* 827 ALGEBRA */
  BT.story(827, 'Watch', [
    { title: 'Expanding two brackets', goal: 'how to multiply two brackets.', scenes: [
      SC('Every term times every term', '(x + 3)(x + 2)', [
        st("To expand two brackets, multiply every term in the first by every term in the second. x times x is x squared. x times two is two x. Three times x is three x. Three times two is six.", V.eq('x·x = x²   x·2 = 2x   3·x = 3x   3·2 = 6')),
        st("Add them up and collect the like terms. Two x plus three x is five x. The answer is x squared plus five x plus six.", V.eq('(x + 3)(x + 2) = x² + 5x + 6', 'g'))]),
      REC("Multiply every term by every term, then collect the like terms.", ['4 multiplications', 'Collect like terms', 'Check with a number'])] },
    { title: 'Equations, inequalities and formulae', goal: 'solving equations and inequalities and rearranging formulae.', scenes: [
      SC('Brackets in equations', '2(x + 3) = 14', [
        st("Divide both sides by two: x plus three equals seven. Then take away three. x equals four.", V.eq('x + 3 = 7') + V.eq('x = 4', 'g'))]),
      SC('Inequalities', '3x − 5 > 10', [
        st("An inequality is solved like an equation. Three x minus five is greater than ten. Add five: three x is greater than fifteen. Divide by three: x is greater than five.", V.eq('3x > 15') + V.eq('x > 5', 'g') + NL(0, 10, { lab: 1, tick: 1, marks: [[5, 135]] }))]),
      SC('Changing the subject', 'v = u + at', [
        st("To make a the subject of v equals u plus a t, take away u from both sides: v minus u equals a t. Then divide by t. a equals v minus u, all over t.", V.eq('v − u = at') + V.eq('a = (v − u) ÷ t', 'g'))]),
      REC("Do the same to both sides. Inequalities flip only when you multiply or divide by a negative.", ['Same to both sides', 'Flip < > if × or ÷ by negative', 'Rearrange step by step'])] }
  ]);

  /* 828 STRAIGHT LINES AND SEQUENCES */
  BT.story(828, 'Watch', [
    { title: 'The equation y = mx + c', goal: 'what the gradient and intercept tell you about a line.', scenes: [
      SC('Gradient and intercept', 'y = 2x + 1', [
        st("A straight line has the equation y equals m x plus c. The m is the gradient, how steep the line is. The c is the y-intercept, where it crosses the y axis. For y equals two x plus one, the gradient is two and the intercept is one.", V.plot(-2, 4, -3, 9, [{ l: [[-2, -3], [4, 9]] }, { p: [0, 1, '(0, 1)'] }], { tx: 1, ty: 1, xl: 'x', yl: 'y' })),
        st("To draw it, make a table of values. When x is zero, y is one. When x is two, y is five. Plot and join with a straight line.", V.tbl([['0', '1'], ['1', '3'], ['2', '5']], ['x', 'y']))]),
      REC("In y equals m x plus c, m is the gradient and c is where it cuts the y axis.", ['m = gradient', 'c = y-intercept', 'Table of values to plot'])] },
    { title: 'Finding a line from two points', goal: 'how to find the gradient and equation of a line.', scenes: [
      SC('Rise over run', 'Points (1, 3) and (4, 9)', [
        st("The gradient is the change in y divided by the change in x. From the point one, three to four, nine, y goes up six and x goes across three. The gradient is two.", V.eq('(9 − 3) ÷ (4 − 1) = 6 ÷ 3 = 2', 'g')),
        st("Now find c. Put the point one, three into y equals two x plus c. Three equals two plus c, so c is one. The line is y equals two x plus one.", V.eq('3 = 2(1) + c → c = 1') + V.eq('y = 2x + 1', 'g'))]),
      REC("Gradient is rise over run. Substitute a point to find c.", ['m = Δy ÷ Δx', 'Substitute a point', 'Write y = mx + c'])] }
  ]);

  /* 829 ANGLES, POLYGONS, BEARINGS */
  BT.story(829, 'Watch', [
    { title: 'Interior and exterior angles', goal: 'how to use exterior angles to find the shape of a regular polygon.', scenes: [
      SC('Exterior angles', 'They always add to 360', [
        st("Walk round the edge of any polygon and turn at each corner. By the time you are back at the start you have made a full turn. So the exterior angles always add up to three hundred and sixty.", V.eq('exterior angles sum = 360°', 'b')),
        st("A regular polygon has equal exterior angles. If each is forty-five, there are three sixty divided by forty-five, eight sides. It is an octagon. Each interior angle is one eighty minus forty-five, one hundred and thirty-five.", V.eq('360 ÷ 45 = 8 sides') + V.eq('180 − 45 = 135°', 'g'))]),
      REC("Exterior angles add to three sixty. Interior plus exterior on a straight line is one eighty.", ['Sum of exterior angles = 360°', 'n = 360 ÷ exterior', 'Interior = 180° − exterior'])] },
    { title: 'Bearings', goal: 'how to measure and calculate bearings.', scenes: [
      SC('Measuring a bearing', 'Clockwise from north', [
        st("A bearing is the angle clockwise from north, written with three figures. Draw a north line at the starting point and measure clockwise to the line. If the bearing of B from A is zero six five degrees, B is a little north of east.", V.tbl([['N', '000°'], ['E', '090°'], ['S', '180°'], ['W', '270°']], ['Direction', 'Bearing']))]),
      SC('The back bearing', 'From B back to A', [
        st("To go back the other way, add or subtract one eighty. The bearing of B from A is zero six five. So the bearing of A from B is zero six five plus one eighty, two four five.", V.eq('065° + 180° = 245°', 'g') + V.rule('Back bearing: ± 180°.'))]),
      REC("Bearings are measured clockwise from north with three figures. Back bearing: add or subtract one eighty.", ['From north, clockwise', 'Three figures', 'Back bearing: ± 180°'])] }
  ]);

  /* 830 PYTHAGORAS AND THE CIRCLE */
  BT.story(830, 'Watch', [
    { title: 'Pythagoras’ theorem', goal: 'how to find a missing side in a right-angled triangle.', scenes: [
      SC('The theorem', 'a² + b² = c²', [
        st("In a right-angled triangle, the longest side, opposite the right angle, is the hypotenuse. Pythagoras found that the squares on the two shorter sides add up to the square on the hypotenuse.", V.rt({ a: 'a', b: 'b', c: 'c' }) + V.eq('a² + b² = c²', 'b')),
        st("With sides six and eight: thirty-six plus sixty-four is a hundred. The square root of a hundred is ten. So the hypotenuse is ten.", V.eq('6² + 8² = 36 + 64 = 100') + V.eq('c = √100 = 10', 'g'))]),
      SC('A shorter side', 'Hypotenuse 13, other side 5', [
        st("To find a shorter side, subtract. Thirteen squared is a hundred and sixty-nine. Take away five squared, twenty-five. That leaves a hundred and forty-four. The square root is twelve.", V.eq('13² − 5² = 169 − 25 = 144') + V.eq('b = √144 = 12', 'g') + V.rule('Finding the longest side: add. A shorter side: subtract.'))]),
      REC("Add the squares to find the hypotenuse. Subtract to find a shorter side. Then take the square root.", ['Hypotenuse: add squares', 'Short side: subtract', 'Square root at the end'])] },
    { title: 'Arcs and sectors', goal: 'how to find the arc length and area of a sector.', scenes: [
      SC('A fraction of a circle', 'A 90° sector, radius 6 cm', [
        st("A sector is a slice of a circle. A ninety degree sector is ninety out of three sixty, a quarter of the whole circle.", V.pie([[90, 'var(--accent)', '90°'], [270, 'var(--surface-2)', '']]) + V.eq('90 ÷ 360 = 1/4', 'b')),
        st("The area of the whole circle is pi times six squared, thirty-six pi. A quarter of that is nine pi, about twenty-eight point three square centimetres.", V.eq('¼ × 36π = 9π ≈ 28.3 cm²', 'g')),
        st("The arc is a quarter of the circumference. The whole circumference is twelve pi, so the arc is three pi, about nine point four centimetres.", V.eq('¼ × 12π = 3π ≈ 9.4 cm', 'g'))]),
      REC("Take the fraction angle over three sixty of the whole circle's area or circumference.", ['Fraction = angle ÷ 360', 'Sector area: × πr²', 'Arc length: × 2πr'])] }
  ]);

  /* 831 SIMILARITY AND ENLARGEMENT */
  BT.story(831, 'Watch', [
    { title: 'Similar shapes and scale factors', goal: 'how lengths, areas and volumes scale in similar shapes.', scenes: [
      SC('Scale factor', 'A 3-4-5 triangle becomes 6-8-10', [
        st("Similar shapes have the same shape but different size. Every length is multiplied by the same scale factor. Three, four, five becomes six, eight, ten. The scale factor is two.", V.tbl([['3', '6'], ['4', '8'], ['5', '10']], ['Small', 'Large']) + V.eq('scale factor = 6 ÷ 3 = 2', 'g'))]),
      SC('Areas', 'Scale factor squared', [
        st("Areas do not scale by the same factor. If lengths are multiplied by three, areas are multiplied by three squared, nine. Volumes are multiplied by three cubed, twenty-seven.", V.tbl([['Length', '× k'], ['Area', '× k²'], ['Volume', '× k³']], ['Measure', 'Scales by']))]),
      REC("Lengths scale by k, areas by k squared, volumes by k cubed.", ['Length × k', 'Area × k²', 'Volume × k³'])] },
    { title: 'Enlargement', goal: 'how to enlarge a shape from a centre.', scenes: [
      SC('From the origin', 'Scale factor 2', [
        st("To enlarge from the origin with scale factor two, double each coordinate. The triangle with corners one, one; three, one; and one, two becomes two, two; six, two; and two, four.", V.plot(0, 7, 0, 5, [{ poly: [[1, 1], [3, 1], [1, 2]] }, { poly: [[2, 2], [6, 2], [2, 4]], c: 'var(--good)' }], { tx: 1, ty: 1 })),
        st("The new shape is twice as wide and twice as tall, but has the same angles. Its area is four times bigger.", V.eq('area × 2² = × 4', 'g'))]),
      REC("Multiply each coordinate by the scale factor to enlarge from the origin.", ['Multiply coordinates', 'Same angles', 'Area × k²'])] }
  ]);

  /* 832 DATA HANDLING AND PROBABILITY */
  BT.story(832, 'Watch', [
    { title: 'Scatter graphs', goal: 'how to describe correlation and use a line of best fit.', scenes: [
      SC('Correlation', 'Revision time and test score', [
        st("A scatter graph shows two sets of data at once. Here, students who revised longer scored higher. The points trend upwards: positive correlation.", V.plot(0, 6, 0, 100, [{ p: [1, 25, '', 'var(--accent)'] }, { p: [2, 40, '', 'var(--accent)'] }, { p: [2.5, 50, '', 'var(--accent)'] }, { p: [3, 55, '', 'var(--accent)'] }, { p: [4, 70, '', 'var(--accent)'] }, { p: [5, 85, '', 'var(--accent)'] }], { tx: 1, ty: 20, xl: 'hours', yl: 'score' })),
        st("Draw a line of best fit through the middle of the points, with about as many points on each side. Then you can estimate: for four and a half hours of revision, the score is about seventy-eight.", V.plot(0, 6, 0, 100, [{ l: [[0.5, 15], [5.5, 92]], d: true }, { p: [1, 25, '', 'var(--accent)'] }, { p: [2, 40, '', 'var(--accent)'] }, { p: [2.5, 50, '', 'var(--accent)'] }, { p: [3, 55, '', 'var(--accent)'] }, { p: [4, 70, '', 'var(--accent)'] }, { p: [5, 85, '', 'var(--accent)'] }], { tx: 1, ty: 20, xl: 'hours', yl: 'score' }) + V.rule('Correlation is not the same as cause.'))]),
      REC("Describe the correlation, draw a line of best fit through the middle, and only estimate inside the range of the data.", ['Positive, negative or none', 'Best fit through the middle', 'Estimate within the data'])] },
    { title: 'Tree diagrams', goal: 'how to find probabilities of combined events.', scenes: [
      SC('Without replacement', '3 red and 7 blue counters', [
        st("A bag has three red and seven blue counters. Two are taken without putting the first back. What is the chance both are red? The first is red with probability three out of ten.", V.eq('P(1st red) = 3/10', 'b')),
        st("Now there are nine counters left, two of them red. The second is red with probability two ninths. Multiply along the branches.", V.eq('P(2nd red) = 2/9', 'b') + V.eq('3/10 × 2/9 = 6/90 = 1/15', 'g') + V.rule('Along the branches, multiply.')),
        st("If the first counter were replaced, the second chance would still be three out of ten, and the answer would be nine over a hundred.", V.eq('with replacement: 3/10 × 3/10 = 9/100'))]),
      REC("Multiply along the branches. Without replacement, the numbers change on the second pick.", ['Multiply along branches', 'Add different routes', 'Without replacement: change the total'])] }
  ]);

  /* 833 SPATIAL */
  BT.story(833, 'Watch', [
    { title: 'Rotation on a grid', goal: 'how to rotate a shape about the origin.', scenes: [
      SC('A quarter turn anticlockwise', 'About the origin', [
        st("To rotate you need three things: a centre, an angle and a direction. Here we turn a triangle ninety degrees anticlockwise about the origin. The point x, y goes to minus y, x.", V.eq('(x, y) → (−y, x)', 'b')),
        st("The corner at one, one goes to minus one, one. The corner at three, one goes to minus one, three. And one, two goes to minus two, one.", V.plot(-4, 4, -1, 4, [{ poly: [[1, 1], [3, 1], [1, 2]] }, { poly: [[-1, 1], [-1, 3], [-2, 1]], c: 'var(--good)' }], { tx: 1, ty: 1 }))]),
      REC("Rotation needs a centre, an angle and a direction. The shape stays the same size.", ['Centre', 'Angle', 'Direction'])] },
    { title: 'Views of solids', goal: 'how to draw and read plans and elevations of solids.', scenes: [
      SC('Plan and elevations', 'Prisms and pyramids', [
        st("A plan is the view from above. The front and side elevations are the views from the front and side. A square-based pyramid has a square with diagonals as its plan, and a triangle for both elevations.", V.tbl([['Cube', 'square', 'square', 'square'], ['Square pyramid', 'square', 'triangle', 'triangle'], ['Triangular prism', 'rectangle', 'rectangle', 'triangle']], ['Solid', 'Plan', 'Front', 'Side']))]),
      REC("Imagine looking at the solid from above, the front and the side, and draw what you see.", ['Plan: from above', 'Front elevation', 'Side elevation'])] }
  ]);
})();
