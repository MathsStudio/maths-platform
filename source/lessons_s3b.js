/* lessons_s3b.js: the older S3 Watch lessons rebuilt in full with more worked examples,
   then each S3 topic's Watch lesson put together. */
(function () {
  'use strict';
  var BT = window.BT; if (!BT || !BT.L || !BT.L.lesson) return;
  var L = BT.L, V = BT.sv, LK = BT.lk, E = L.E, LS = L.lesson;

  /* ---------- 841 / 842 ---------- */
  LS('Surds', 'what surds are and how to simplify and calculate with them.', {
    intro: ['Surds', 'Roots that aren’t whole', "A surd is a root that can't be written as a whole number or fraction, like the square root of two. We keep it as a root to stay exact.", E('√2 ≈ 1.414…', 'b')],
    ex: [['Simplifying', 'Find a square factor', [["The square root of fifty: fifty is twenty-five times two, so it is five root two.", E('√50 = √25 × √2 = 5√2', 'g')]]],
      ['Adding', 'Like surds', [["Three root two plus five root two is eight root two, like collecting like terms.", E('3√2 + 5√2 = 8√2', 'g')]]],
      ['Multiplying', 'Multiply under the root', [["Root three times root twelve is root thirty-six: six.", E('√3 × √12 = √36 = 6', 'g')]]],
      ['Rationalising', 'No root on the bottom', [["Six over root three: multiply top and bottom by root three. Six root three over three, which is two root three.", E('6/√3 = 6√3/3 = 2√3', 'g')]]]],
    turn: ["Your turn! Simplify the square root of seventy-two. Pause and try it.", E('√72'), "Seventy-two is thirty-six times two: six root two.", E('6√2', 'g')],
    rec: ["A surd is an exact root. Simplify by taking out square factors. Add only like surds. Multiply under the root. Rationalise denominators.", ['Take out square factors', 'Add like surds', '√a × √b = √ab', 'Rationalise the denominator']],
    deep: ['Surds keep answers exact; decimals are only approximations.', '√a + √b is not √(a + b): √9 + √16 = 7, but √25 = 5.']
  });

  LS('Compound growth and depreciation', 'how quantities grow or shrink by a percentage each year.', {
    intro: ['Compound change', 'A percentage each year', "When something grows or shrinks by a percentage of its current value each year, we use a multiplier raised to a power.", E('value = start × multiplierⁿ', 'g')],
    ex: [['Growth', 'Population', [["A town of twenty thousand grows by three per cent a year. After five years: twenty thousand times one point zero three to the five, about twenty-three thousand one hundred and eighty-five.", E('20,000 × 1.03⁵ ≈ 23,185', 'g')]]],
      ['Depreciation', 'A car', [["A sixteen thousand pound car loses eighteen per cent a year. After three years: sixteen thousand times zero point eight two cubed, about eight thousand eight hundred and twenty-two pounds.", E('16,000 × 0.82³ ≈ £8,822', 'g')]]],
      ['How many years?', 'Trial and improvement', [["How long until an investment doubles at seven per cent? One point zero seven to the ten is about one point nine seven; to the eleven, about two point one. Eleven years.", E('1.07¹¹ ≈ 2.10', 'g')]]]],
    turn: ["Your turn! A painting worth five thousand pounds increases by ten per cent a year. What is it worth after two years? Pause and try it.", E('5,000 × 1.1²'), "Six thousand and fifty pounds.", E('£6,050', 'g')],
    rec: ["For compound growth, multiply by one plus the rate each year. For depreciation, by one minus the rate. Use a power for many years.", ['Growth: × (1 + r)ⁿ', 'Depreciation: × (1 − r)ⁿ', 'Each year on the new value', 'Trial and improvement for years']],
    deep: ['Compound change gives a curve, not a straight line, because each change is on a new amount.', 'Three years at 18% off is not 54% off: work year by year or use the power.']
  });

  LS('Compound interest', 'how compound interest works and how to calculate it.', {
    intro: ['Compound interest', 'Interest on interest', "With compound interest, the interest is added each year, and the next year's interest is paid on the bigger amount.", E('A = P × (1 + r)ⁿ', 'g')],
    ex: [['Year by year', '£2,000 at 5%', [["Year one: two thousand one hundred. Year two: two thousand two hundred and five. Year three: two thousand three hundred and fifteen pounds twenty-five.", V.tbl([['1', '£2,100.00'], ['2', '£2,205.00'], ['3', '£2,315.25']], ['Year', 'Balance'])]]],
      ['Using the formula', 'One calculation', [["Two thousand times one point zero five cubed: two thousand three hundred and fifteen pounds twenty-five. The interest earned is three hundred and fifteen pounds twenty-five.", E('2,000 × 1.05³ = £2,315.25', 'g')]]],
      ['Compared with simple', 'The difference', [["Simple interest for three years would be three hundred pounds. Compound gives fifteen pounds twenty-five more.", E('£315.25 vs £300', 'g')]]],
      ['Monthly rates', 'More often', [["A loan at one per cent a month for twelve months grows by one point zero one to the twelve: about twelve point seven per cent a year.", E('1.01¹² ≈ 1.127', 'g')]]]],
    turn: ["Your turn! Find the value of one thousand pounds after two years at four per cent compound interest. Pause and try it.", E('1,000 × 1.04²'), "One thousand and eighty-one pounds sixty.", E('£1,081.60', 'g')],
    rec: ["Compound interest adds interest to the balance each period. Use the amount times one plus the rate, to the power of the number of periods.", ['A = P(1 + r)ⁿ', 'Interest on interest', 'More than simple interest', 'Interest = A − P']],
    deep: ['Compound interest grows faster each year because the base keeps growing.', 'Use the rate as a decimal: 5% is 0.05, so the multiplier is 1.05.']
  });

  LS('Tax bands', 'how income tax is worked out using different bands and rates.', {
    intro: ['Tax bands', 'Different rates for different parts', "Income tax is charged in bands: no tax on the personal allowance, then a basic rate, then a higher rate on income above a limit.", V.note('Rates and bands change each year; these are example figures.')],
    ex: [['Taxable income', 'Above the allowance', [["With a twelve thousand five hundred pound allowance, someone earning fifty-five thousand has forty-two thousand five hundred pounds of taxable income.", E('55,000 − 12,500 = £42,500', 'g')]]],
      ['Two bands', 'Basic and higher', [["If the first thirty-seven thousand five hundred is taxed at twenty per cent and the rest at forty per cent: seven thousand five hundred plus two thousand: nine thousand five hundred pounds.", E('20% × 37,500 + 40% × 5,000 = £9,500', 'g')]]],
      ['Effective rate', 'Overall percentage', [["Nine thousand five hundred out of fifty-five thousand is about seventeen per cent of total income.", E('9,500 ÷ 55,000 ≈ 17%', 'g')]]]],
    turn: ["Your turn! With a twelve thousand allowance and twenty per cent tax, how much tax is due on thirty-two thousand? Pause and try it.", E('20% × 20,000'), "Four thousand pounds.", E('£4,000', 'g')],
    rec: ["Subtract the allowance, then tax each slice of income at its own band's rate, and add the amounts.", ['Allowance: no tax', 'Each band its own rate', 'Add the tax from each band', 'Effective rate = tax ÷ income']],
    deep: ['Only the income inside a higher band is taxed at the higher rate.', 'Don’t apply the highest rate to the whole income.']
  });

  /* ---------- 843 ---------- */
  LS('Density and other rates', 'how to use density, and other rates like population density.', {
    intro: ['Density', 'Mass per volume', "Density tells you how much mass is packed into each unit of volume.", E('Density = Mass ÷ Volume', 'g')],
    ex: [['Finding density', 'A metal block', [["A block of mass one thousand three hundred and fifty grams has volume five hundred cubic centimetres: two point seven grams per cubic centimetre, which is aluminium.", E('1,350 ÷ 500 = 2.7 g/cm³', 'g')]]],
      ['Finding mass', 'M = D × V', [["Gold has density nineteen point three grams per cubic centimetre. A ten cubic centimetre bar has mass one hundred and ninety-three grams.", E('19.3 × 10 = 193 g', 'g')]]],
      ['Finding volume', 'V = M ÷ D', [["Ice has density zero point nine two. Four hundred and sixty grams of ice has volume five hundred cubic centimetres.", E('460 ÷ 0.92 = 500 cm³', 'g')]]],
      ['Population density', 'People per km²', [["A city of six hundred thousand people covers one hundred and twenty square kilometres: five thousand people per square kilometre.", E('600,000 ÷ 120 = 5,000 per km²', 'g')]]]],
    turn: ["Your turn! A stone has mass two hundred and forty grams and volume eighty cubic centimetres. What is its density? Pause and try it.", E('240 ÷ 80'), "Three grams per cubic centimetre.", E('3 g/cm³', 'g')],
    rec: ["Density is mass divided by volume. Rearrange for mass or volume. Other rates, like population density, divide one quantity by another.", ['D = M ÷ V', 'M = D × V', 'V = M ÷ D', 'Units: g/cm³']],
    deep: ['Objects less dense than water (1 g/cm³) float.', 'Check units match: grams with cm³, kilograms with m³.']
  });

  LS('Changing units of speed', 'how to convert speeds between km/h, m/s and mph.', {
    intro: ['Speed units', 'Different ways to measure speed', "Speed can be in kilometres per hour, metres per second, or miles per hour. Convert both the distance and the time units.", V.cards(['km/h', 'm/s', 'mph'], ['b', 'p', 'g'])],
    ex: [['km/h to m/s', '72 km/h', [["Seventy-two kilometres is seventy-two thousand metres; one hour is three thousand six hundred seconds. Seventy-two thousand divided by three thousand six hundred is twenty metres per second.", E('72 km/h = 20 m/s', 'g') + V.rule('km/h ÷ 3.6 = m/s')]]],
      ['m/s to km/h', '15 m/s', [["Multiply by three point six: fifty-four kilometres per hour.", E('15 × 3.6 = 54 km/h', 'g')]]],
      ['mph and km/h', 'Using 1 mile ≈ 1.6 km', [["Seventy miles per hour is about one hundred and twelve kilometres per hour.", E('70 × 1.6 = 112 km/h', 'g')]]]],
    turn: ["Your turn! Convert thirty-six kilometres per hour to metres per second. Pause and try it.", E('36 ÷ 3.6'), "Ten metres per second.", E('10 m/s', 'g')],
    rec: ["Convert the distance and the time. Between km/h and m/s, divide or multiply by three point six. Use about one point six kilometres per mile.", ['km/h ÷ 3.6 = m/s', 'm/s × 3.6 = km/h', 'mph × 1.6 ≈ km/h', 'Check it’s sensible']],
    deep: ['3.6 comes from 3,600 seconds in an hour divided by 1,000 metres in a kilometre.', 'm/s numbers are smaller than km/h numbers for the same speed.']
  });

  /* ---------- 844 ---------- */
  LS('Volume of cones and spheres', 'how to find the volume of cones, pyramids and spheres.', {
    intro: ['Pointed and round solids', 'Formulas', "A cone or pyramid has a third of the volume of a prism with the same base and height. A sphere has its own formula.", V.tbl([['Cone', '⅓πr²h'], ['Pyramid', '⅓ × base × h'], ['Sphere', '⁴⁄₃πr³']], ['Solid', 'Volume'])],
    ex: [['Cone', 'r = 3, h = 10', [["A third times pi times nine times ten: thirty pi, about ninety-four point two cubic centimetres.", E('⅓ × π × 9 × 10 ≈ 94.2 cm³', 'g')]]],
      ['Pyramid', 'Square base 6, height 8', [["A third times thirty-six times eight: ninety-six cubic centimetres.", E('⅓ × 36 × 8 = 96 cm³', 'g')]]],
      ['Sphere', 'r = 6', [["Four thirds times pi times two hundred and sixteen: two hundred and eighty-eight pi, about nine hundred and four point eight cubic centimetres.", E('⁴⁄₃ × π × 216 ≈ 904.8 cm³', 'g')]]],
      ['Hemisphere', 'Half a sphere', [["Half of a sphere of radius six: about four hundred and fifty-two point four cubic centimetres.", E('904.8 ÷ 2 ≈ 452.4 cm³', 'g')]]]],
    turn: ["Your turn! Find the volume of a cone with radius five and height twelve, in terms of pi. Pause and try it.", E('⅓ × π × 25 × 12'), "One hundred pi.", E('100π ≈ 314', 'g')],
    rec: ["Cones and pyramids are a third of the matching prism. A sphere's volume is four thirds pi r cubed.", ['Cone: ⅓πr²h', 'Pyramid: ⅓ base × h', 'Sphere: ⁴⁄₃πr³', 'Hemisphere: half']],
    deep: ['Three cones of water exactly fill the cylinder with the same base and height.', 'Use the perpendicular height, not the slant height, for volume.']
  });

  LS('Surface area of cones and spheres', 'how to find the surface area of cones and spheres.', {
    intro: ['Curved surfaces', 'Formulas', "The curved surface of a cone is pi times radius times slant height. A sphere's surface area is four pi r squared.", V.tbl([['Cone curved', 'πrl'], ['Cone total', 'πrl + πr²'], ['Sphere', '4πr²']], ['Surface', 'Area'])],
    ex: [['Slant height', 'Pythagoras', [["A cone with radius three and height four has slant height five, from Pythagoras.", E('l = √(3² + 4²) = 5', 'g')]]],
      ['Cone surface area', 'r = 3, l = 5', [["Curved: fifteen pi. Base: nine pi. Total: twenty-four pi, about seventy-five point four.", E('15π + 9π = 24π ≈ 75.4 cm²', 'g')]]],
      ['Sphere', 'r = 5', [["Four times pi times twenty-five: one hundred pi, about three hundred and fourteen square centimetres.", E('4π × 25 ≈ 314 cm²', 'g')]]],
      ['Hemisphere', 'Curved plus flat', [["A solid hemisphere of radius five: half the sphere, fifty pi, plus the flat circle, twenty-five pi: seventy-five pi.", E('50π + 25π = 75π', 'g')]]]],
    turn: ["Your turn! Find the surface area of a sphere with radius two, in terms of pi. Pause and try it.", E('4π × 4'), "Sixteen pi.", E('16π ≈ 50.3', 'g')],
    rec: ["Cone: pi r l for the curved part, plus pi r squared for the base. Sphere: four pi r squared. Use Pythagoras to find a slant height.", ['Cone curved: πrl', 'Add the base πr²', 'Sphere: 4πr²', 'Slant height by Pythagoras']],
    deep: ['A sphere’s surface area is exactly four times the area of its biggest circle.', 'Don’t forget the flat face on a solid hemisphere or cone.']
  });

  /* ---------- 845 / 846 ---------- */
  LS('Common factors and difference of two squares', 'how to factorise using common factors and the difference of two squares.', {
    intro: ['Factorising', 'Two methods', "Look first for a common factor. Then check for a difference of two squares: something squared minus something squared.", E('a² − b² = (a + b)(a − b)', 'g')],
    ex: [['Common factor', '8x² + 12x', [["The highest common factor is four x: four x, bracket, two x plus three.", E('8x² + 12x = 4x(2x + 3)', 'g')]]],
      ['Difference of two squares', 'x² − 49', [["x squared minus seven squared: x plus seven times x minus seven.", E('x² − 49 = (x + 7)(x − 7)', 'g')]]],
      ['With coefficients', '9y² − 25', [["Three y squared minus five squared: three y plus five times three y minus five.", E('(3y + 5)(3y − 5)', 'g')]]],
      ['Both', '2x² − 18', [["Take out two first: two, bracket, x squared minus nine. Then: two times x plus three times x minus three.", E('2(x + 3)(x − 3)', 'g')]]]],
    turn: ["Your turn! Factorise x squared minus one hundred. Pause and try it.", E('x² − 100'), "x plus ten times x minus ten.", E('(x + 10)(x − 10)', 'g')],
    rec: ["Always take out the highest common factor first. Then spot a difference of two squares: a squared minus b squared is a plus b times a minus b.", ['HCF first', 'a² − b²', '= (a + b)(a − b)', 'Check by expanding']],
    deep: ['The middle terms cancel when you expand (a + b)(a − b), which is why there is no x term.', 'x² + 49 cannot be factorised this way: it must be a difference, not a sum.']
  });

  LS('Factorising quadratics', 'how to factorise quadratic expressions like x² + 7x + 12.', {
    intro: ['Quadratics', 'x² + bx + c', "To factorise x squared plus b x plus c, find two numbers that multiply to c and add to b.", E('x² + bx + c = (x + p)(x + q)', 'g')],
    ex: [['Positive terms', 'x² + 7x + 12', [["Three and four multiply to twelve and add to seven.", E('(x + 3)(x + 4)', 'g')]]],
      ['Negative constant', 'x² + 2x − 15', [["Five and negative three multiply to negative fifteen and add to two.", E('(x + 5)(x − 3)', 'g')]]],
      ['Negative middle', 'x² − 9x + 20', [["Negative four and negative five multiply to twenty and add to negative nine.", E('(x − 4)(x − 5)', 'g')]]],
      ['Solving', 'x² + 2x − 15 = 0', [["Factorise, then each bracket can be zero: x equals negative five or x equals three.", E('x = −5 or x = 3', 'g')]]]],
    turn: ["Your turn! Factorise x squared plus x minus twenty. Pause and try it.", E('x² + x − 20'), "Five and negative four: x plus five times x minus four.", E('(x + 5)(x − 4)', 'g')],
    rec: ["Find two numbers that multiply to the constant and add to the coefficient of x. Check by expanding. Set each bracket to zero to solve.", ['× to c', '+ to b', 'Watch the signs', 'Each bracket = 0 to solve']],
    deep: ['If c is negative, the two numbers have different signs; if c is positive, they share the sign of b.', 'Check by expanding back: it must give the original quadratic.']
  });

  LS('Equations with fractions', 'how to solve equations that contain fractions.', {
    intro: ['Clearing fractions', 'Multiply through', "To solve an equation with fractions, multiply every term by the denominator, or the lowest common multiple of the denominators.", V.rule('Multiply every term, on both sides.')],
    ex: [['One fraction', 'x/4 = 7', [["Multiply both sides by four: x equals twenty-eight.", E('x = 28', 'g')]]],
      ['Fraction plus a number', '(x + 3)/5 = 4', [["Multiply by five: x plus three equals twenty. x equals seventeen.", E('x = 17', 'g')]]],
      ['Two fractions', 'x/2 + x/3 = 10', [["Multiply by six: three x plus two x equals sixty. Five x equals sixty, x equals twelve.", E('3x + 2x = 60 → x = 12', 'g')]]],
      ['Fractions both sides', '(2x − 1)/3 = (x + 4)/2', [["Multiply by six: two, bracket, two x minus one, equals three, bracket, x plus four. Four x minus two equals three x plus twelve. x equals fourteen.", E('x = 14', 'g')]]]],
    turn: ["Your turn! Solve x over three plus two equals nine. Pause and try it.", E('x/3 + 2 = 9'), "Take two: x over three equals seven. Times three: x equals twenty-one.", E('x = 21', 'g')],
    rec: ["Multiply every term by the lowest common multiple of the denominators to clear the fractions. Then solve as normal and check.", ['Find the LCM of denominators', 'Multiply every term', 'Solve as normal', 'Check']],
    deep: ['Multiplying every term by the same number keeps the equation balanced.', 'Multiply every term, including whole numbers like the 2 in x/3 + 2.']
  });

  LS('Changing the subject and inequations', 'how to rearrange formulae and solve inequations.', {
    intro: ['Changing the subject', 'Rearranging', "Changing the subject means rearranging a formula so a different letter is on its own.", E('A = πr² → r = √(A ÷ π)', 'g')],
    ex: [['One step', 'P = 4s', [["Divide by four: s equals P over four.", E('s = P ÷ 4', 'g')]]],
      ['Two steps', 'y = 3x + 5', [["Subtract five: y minus five equals three x. Divide by three: x equals y minus five, over three.", E('x = (y − 5) ÷ 3', 'g')]]],
      ['With a square', 'A = πr²', [["Divide by pi, then take the square root: r equals the root of A over pi.", E('r = √(A ÷ π)', 'g')]]],
      ['Inequations', '5 − 2x < 11', [["Subtract five: negative two x less than six. Divide by negative two and flip: x greater than negative three.", E('x > −3', 'g')]]]],
    turn: ["Your turn! Make t the subject of v equals u plus a t. Pause and try it.", E('v = u + at'), "Subtract u, divide by a: t equals v minus u, over a.", E('t = (v − u) ÷ a', 'g')],
    rec: ["Rearrange by undoing operations in reverse order, doing the same to both sides. In inequations, flip the sign when multiplying or dividing by a negative.", ['Undo in reverse order', 'Same to both sides', 'Inequation: flip for negatives', 'Check with numbers']],
    deep: ['Changing the subject is like solving an equation with letters instead of numbers.', 'Forgetting to flip the inequality when dividing by a negative is the most common slip.']
  });

  /* ---------- 847 / 848 ---------- */
  LS('Parallel and perpendicular lines', 'how gradients show whether lines are parallel or perpendicular.', {
    intro: ['Gradients of lines', 'Parallel and perpendicular', "Parallel lines have the same gradient. Perpendicular lines have gradients that multiply to negative one.", V.cards(['Parallel: m₁ = m₂', 'Perpendicular: m₁ × m₂ = −1'], ['b', 'g'])],
    ex: [['Parallel', 'Same gradient', [["y equals three x plus one and y equals three x minus four are parallel.", E('m = 3 for both', 'g')]]],
      ['Perpendicular', 'Negative reciprocal', [["A line perpendicular to gradient two has gradient negative a half.", E('2 × (−½) = −1', 'g')]]],
      ['Finding an equation', 'Through a point', [["A line parallel to y equals two x plus one, through three, eleven: y equals two x plus c; eleven equals six plus c, so c is five.", E('y = 2x + 5', 'g')]]]],
    turn: ["Your turn! What is the gradient of a line perpendicular to y equals negative three x plus two? Pause and think.", E('?'), "The negative reciprocal of negative three: one third.", E('⅓', 'g')],
    rec: ["Parallel lines share a gradient. Perpendicular gradients multiply to negative one: flip and change the sign.", ['Parallel: same m', 'Perpendicular: −1/m', 'Substitute a point for c', 'Check with a sketch']],
    deep: ['Rotating a line by 90° swaps rise and run and changes one sign, giving the negative reciprocal.', 'The perpendicular to gradient 2 is −½, not −2.']
  });

  LS('Lines in the form ax + by = c', 'how to work with straight lines written as ax + by = c.', {
    intro: ['Another form', 'ax + by = c', "Lines can be written as a x plus b y equals c. Rearrange to y equals m x plus c to see the gradient.", E('2x + 3y = 12', 'b')],
    ex: [['Rearranging', 'Find the gradient', [["Two x plus three y equals twelve. Three y equals negative two x plus twelve. y equals negative two thirds x plus four.", E('y = −⅔x + 4', 'g')]]],
      ['Intercepts', 'Quick sketch', [["When x is zero, y is four. When y is zero, x is six. Join zero, four and six, zero.", E('(0, 4) and (6, 0)', 'g')]]],
      ['Is the point on it?', 'Substitute', [["Is three, two on the line? Six plus six is twelve: yes.", E('2(3) + 3(2) = 12 ✓', 'g')]]]],
    turn: ["Your turn! Where does five x plus two y equals twenty cross the y-axis? Pause and try it.", E('x = 0'), "Two y equals twenty, so y is ten: at zero, ten.", E('(0, 10)', 'g')],
    rec: ["Rearrange to y = mx + c for the gradient. Find intercepts by setting x or y to zero. Substitute a point to test it.", ['Rearrange for m', 'x = 0 → y-intercept', 'y = 0 → x-intercept', 'Substitute to test']],
    deep: ['Intercepts give two points quickly, which is enough to draw any straight line.', 'Watch the sign when moving the x term across.']
  });

  LS('Solving by graph', 'how to solve simultaneous equations by drawing their graphs.', {
    intro: ['Two lines', 'Where they cross', "The solution to two simultaneous equations is the point where their graphs cross: it fits both equations.", V.note('Crossing point = solution')],
    ex: [['Example', 'y = x + 1 and y = 7 − x', [["Draw both lines. They cross at three, four. So x is three and y is four.", E('(3, 4)', 'g')]]],
      ['Check', 'Substitute', [["Four equals three plus one, true. Four equals seven take away three, true.", E('✓ both', 'g')]]],
      ['No solution', 'Parallel lines', [["y equals two x plus one and y equals two x minus three are parallel and never meet: there is no solution.", E('parallel → no solution', 'b')]]]],
    turn: ["Your turn! Lines y equals two x and y equals x plus three cross where? Pause and think.", E('2x = x + 3'), "x is three, y is six: three, six.", E('(3, 6)', 'g')],
    rec: ["Draw both lines; the crossing point is the solution. Check it in both equations. Parallel lines have no solution.", ['Draw both lines', 'Read the crossing point', 'Check in both', 'Parallel: none']],
    deep: ['Graphs give a picture of why there is one solution, none, or infinitely many.', 'Graph readings can be approximate; algebra gives exact answers.']
  });

  LS('Solving by elimination', 'how to solve simultaneous equations by eliminating one unknown.', {
    intro: ['Elimination', 'Remove one letter', "Add or subtract the equations to eliminate one unknown, then solve for the other.", E('Match, then add or subtract', 'g')],
    ex: [['Subtracting', '3x + y = 11, x + y = 5', [["Subtract: two x equals six, x equals three. Then y equals two.", E('x = 3, y = 2', 'g')]]],
      ['Adding', '2x + 3y = 13, 4x − 3y = −1', [["The y terms have opposite signs, so add: six x equals twelve, x equals two. Then four plus three y equals thirteen, so y equals three.", E('x = 2, y = 3', 'g')]]],
      ['Scaling first', '2x + y = 7, 3x + 2y = 12', [["Double the first: four x plus two y equals fourteen. Subtract the second: x equals two. Then y equals three.", E('x = 2, y = 3', 'g')]]]],
    turn: ["Your turn! Solve x plus y equals ten and x minus y equals four. Pause and try it.", E('add them'), "Two x equals fourteen, x is seven, y is three.", E('x = 7, y = 3', 'g')],
    rec: ["Make the coefficients of one letter match, then add if the signs differ or subtract if they're the same. Solve, substitute back, and check.", ['Match one coefficient', 'Same signs: subtract', 'Different signs: add', 'Substitute and check']],
    deep: ['Elimination works because adding equal amounts to both sides keeps everything balanced.', 'Multiply every term when scaling an equation.']
  });

  LS('Simultaneous equations', 'how to set up and solve simultaneous equations from real problems.', {
    intro: ['Two unknowns', 'Two equations', "When a problem has two unknowns, write two equations and solve them together.", V.list(['Choose two letters', 'Write two equations', 'Eliminate one letter', 'Answer in context'])],
    ex: [['Tickets', 'Adults and children', [["Two adult and three child tickets cost thirty-one pounds; one adult and two child tickets cost eighteen. Let a and c be the prices. Double the second: two a plus four c equals thirty-six. Subtract the first: c equals five. Then a equals eight.", E('a = £8, c = £5', 'g')]]],
      ['Coins', 'Count and value', [["Twelve coins, some twenty pence and some fifty pence, worth three pounds thirty. x plus y equals twelve; twenty x plus fifty y equals three hundred and thirty. y equals three, x equals nine.", E('9 × 20p and 3 × 50p', 'g')]]],
      ['Checking', 'Both equations', [["Always check the answer in both original equations and that it makes sense.", V.note('Check in both')]]]],
    turn: ["Your turn! Two numbers add to twenty and differ by six. What are they? Pause and try it.", E('x + y = 20, x − y = 6'), "x is thirteen, y is seven.", E('13 and 7', 'g')],
    rec: ["Define two letters, write two equations from the information, solve by elimination or substitution, then answer and check.", ['Two letters', 'Two equations', 'Eliminate or substitute', 'Check and answer']],
    deep: ['You need as many equations as unknowns to get one answer.', 'Check the answer makes sense: a negative number of tickets would mean a mistake.']
  });

  /* ---------- 849 ---------- */
  LS('SOH CAH TOA', 'how to use sine, cosine and tangent to find sides in right-angled triangles.', {
    intro: ['Trigonometry', 'Sides and angles', "In a right-angled triangle, label the sides from the angle: opposite, adjacent and hypotenuse. Then pick a ratio.", V.tbl([['SOH', 'sin = O ÷ H'], ['CAH', 'cos = A ÷ H'], ['TOA', 'tan = O ÷ A']], ['', 'Ratio'])],
    ex: [['Opposite from hypotenuse', 'sin', [["Angle forty degrees, hypotenuse twelve: opposite is twelve times sine forty, about seven point seven one.", E('12 × sin 40° ≈ 7.71', 'g')]]],
      ['Adjacent from hypotenuse', 'cos', [["Angle sixty, hypotenuse ten: adjacent is ten times cos sixty: five.", E('10 × cos 60° = 5', 'g')]]],
      ['Opposite from adjacent', 'tan', [["Angle thirty-five, adjacent eight: opposite is eight times tan thirty-five, about five point six.", E('8 × tan 35° ≈ 5.60', 'g')]]],
      ['Hypotenuse', 'Divide', [["Angle fifty, opposite nine: hypotenuse is nine divided by sine fifty, about eleven point seven five.", E('9 ÷ sin 50° ≈ 11.75', 'g')]]]],
    turn: ["Your turn! Angle thirty degrees, hypotenuse twenty. Find the opposite side. Pause and try it.", E('20 × sin 30°'), "Twenty times a half: ten.", E('10', 'g')],
    rec: ["Label opposite, adjacent and hypotenuse from the angle. Choose the ratio that links the side you know and the side you want. Multiply or divide.", ['Label O, A, H', 'Pick SOH, CAH or TOA', 'Unknown on top: ×', 'Unknown on bottom: ÷']],
    deep: ['The ratios stay the same for a given angle because all right-angled triangles with that angle are similar.', 'Make sure your calculator is in degree mode.']
  });

  LS('Finding an angle', 'how to use inverse trigonometry to find an angle in a right-angled triangle.', {
    intro: ['Inverse trig', 'From sides to angle', "If you know two sides, find the ratio, then use the inverse function, like sine to the minus one, to find the angle.", E('θ = sin⁻¹(O ÷ H)', 'g')],
    ex: [['Using tan', 'O = 5, A = 5', [["Tan is one, so the angle is tan to the minus one of one: forty-five degrees.", E('tan⁻¹(1) = 45°', 'g')]]],
      ['Using sin', 'O = 7, H = 14', [["Sine is a half: the angle is thirty degrees.", E('sin⁻¹(0.5) = 30°', 'g')]]],
      ['Using cos', 'A = 4, H = 9', [["Cos is four ninths, about zero point four four four: the angle is about sixty-three point six degrees.", E('cos⁻¹(4 ÷ 9) ≈ 63.6°', 'g')]]],
      ['Real life', 'A ramp', [["A ramp rises one point two metres over a horizontal distance of five metres. Its angle is tan to the minus one of zero point two four: about thirteen point five degrees.", E('tan⁻¹(1.2 ÷ 5) ≈ 13.5°', 'g')]]]],
    turn: ["Your turn! Opposite eight, adjacent eight. What is the angle? Pause and think.", E('tan⁻¹(1)'), "Forty-five degrees.", E('45°', 'g')],
    rec: ["Label the sides, choose the ratio, divide to get a number, then use the inverse function to find the angle.", ['Label O, A, H', 'Choose the ratio', 'Divide the sides', 'Use sin⁻¹, cos⁻¹ or tan⁻¹']],
    deep: ['The inverse function answers: which angle has this ratio?', 'Sine and cosine ratios are always between 0 and 1 in a right-angled triangle; a bigger value means a mistake.']
  });

  /* ---------- 850 ---------- */
  LS('Circle theorems', 'the main angle facts inside circles.', {
    intro: ['Circle theorems', 'Angle rules in circles', "Circles have special angle rules involving the centre, chords and points on the circumference.", V.list(['Angle in a semicircle = 90°', 'Tangent ⊥ radius', 'Angle at centre = 2 × angle at edge', 'Same arc → equal angles'])],
    ex: [['Angle in a semicircle', '90°', [["An angle in a semicircle, with the diameter as one side, is always a right angle.", E('90°', 'g')]]],
      ['Tangent and radius', 'Perpendicular', [["A tangent touches the circle at one point and makes a right angle with the radius there.", E('tangent ⊥ radius', 'g')]]],
      ['Angle at the centre', 'Twice the angle at the edge', [["If the angle at the circumference is forty degrees, the angle at the centre on the same arc is eighty.", E('2 × 40° = 80°', 'g')]]],
      ['Isosceles triangles', 'Two radii', [["A triangle with two radii as sides is isosceles, so its base angles are equal.", V.note('Two radii → isosceles')]]]],
    turn: ["Your turn! A triangle is drawn in a semicircle with one angle of thirty-five degrees. What is the third angle? Pause and think.", E('180° − 90° − 35°'), "The angle in the semicircle is ninety, so the third is fifty-five degrees.", E('55°', 'g')],
    rec: ["The angle in a semicircle is ninety degrees. A tangent meets a radius at ninety degrees. The angle at the centre is twice the angle at the circumference. Look for isosceles triangles made by radii.", ['Semicircle: 90°', 'Tangent ⊥ radius', 'Centre = 2 × edge', 'Radii → isosceles']],
    deep: ['All these theorems come from isosceles triangles formed by radii.', 'State which theorem you use as your reason.']
  });

  LS('Chords and tangent lengths', 'how to use chords, tangents and Pythagoras in circles.', {
    intro: ['Chords and tangents', 'Lines and circles', "A chord joins two points on a circle. A line from the centre perpendicular to a chord cuts it in half.", V.note('Perpendicular from centre bisects a chord')],
    ex: [['Distance to a chord', 'Pythagoras', [["A circle of radius ten has a chord of length sixteen. Half the chord is eight. The distance from the centre is the root of one hundred minus sixty-four: six.", E('√(10² − 8²) = 6', 'g')]]],
      ['Chord length', 'Working back', [["Radius thirteen, distance from centre five: half chord is twelve, so the chord is twenty-four.", E('2 × √(169 − 25) = 24', 'g')]]],
      ['Tangent length', 'From an outside point', [["A point is seventeen centimetres from the centre of a circle of radius eight. The tangent length is the root of two hundred and eighty-nine minus sixty-four: fifteen.", E('√(17² − 8²) = 15', 'g')]]],
      ['Two tangents', 'Equal lengths', [["Two tangents from the same outside point are equal in length.", V.note('Tangents from a point are equal')]]]],
    turn: ["Your turn! A chord is six centimetres from the centre of a circle of radius ten. How long is the chord? Pause and try it.", E('2 × √(100 − 36)'), "Half chord eight, so the chord is sixteen.", E('16 cm', 'g')],
    rec: ["The perpendicular from the centre bisects a chord. Tangents meet radii at right angles. Use Pythagoras with radius, half-chord or tangent length.", ['Centre ⊥ chord bisects it', 'Tangent ⊥ radius', 'Use Pythagoras', 'Equal tangents from a point']],
    deep: ['Drawing the radius to a key point usually creates the right-angled triangle you need.', 'Remember to double the half-chord at the end.']
  });

  /* ---------- 851 ---------- */
  LS('Similar triangles', 'how to show triangles are similar and use them to find missing sides.', {
    intro: ['Similar triangles', 'Equal angles', "Two triangles are similar if their angles are equal. Then their sides are in the same ratio.", V.note('Equal angles → sides in the same ratio')],
    ex: [['Matching sides', 'Opposite equal angles', [["Match sides that are opposite equal angles. If a side of six matches a side of fifteen, the scale factor is two and a half.", E('k = 15 ÷ 6 = 2.5', 'g')]]],
      ['Finding a side', 'Multiply', [["Another side of four becomes ten.", E('4 × 2.5 = 10', 'g')]]],
      ['Nested triangles', 'Parallel lines', [["When a line inside a triangle is parallel to one side, it makes a smaller similar triangle. Use the whole sides, not the bits.", V.note('Use whole side lengths')]]],
      ['Heights by shadows', 'Real life', [["A one point five metre post casts a two metre shadow; a tree casts a twelve metre shadow at the same time. The tree is nine metres tall.", E('1.5 × 12 ÷ 2 = 9 m', 'g')]]]],
    turn: ["Your turn! Similar triangles: a side of eight matches a side of twelve. A side of ten matches what? Pause and try it.", E('10 × 12 ÷ 8'), "Fifteen.", E('15', 'g')],
    rec: ["Show the angles are equal, match corresponding sides, find the scale factor, then multiply or divide.", ['Equal angles', 'Match corresponding sides', 'k = new ÷ old', '× or ÷ by k']],
    deep: ['Two equal angles are enough, because the third must also be equal.', 'In nested triangles, use the full side lengths.']
  });

  LS('Angles of elevation', 'how to use angles of elevation and depression with trigonometry.', {
    intro: ['Elevation and depression', 'Looking up and down', "The angle of elevation is measured up from the horizontal. The angle of depression is measured down from the horizontal.", V.cards(['Elevation: up', 'Depression: down'], ['g', 'b'])],
    ex: [['Height of a building', 'Using tan', [["Standing forty metres from a building, the angle of elevation to the top is thirty-two degrees. Height is forty times tan thirty-two: about twenty-five metres.", E('40 × tan 32° ≈ 25.0 m', 'g')]]],
      ['Angle of depression', 'From a cliff', [["From a cliff sixty metres high, a boat is seen at an angle of depression of twenty degrees. Distance out is sixty divided by tan twenty: about one hundred and sixty-five metres.", E('60 ÷ tan 20° ≈ 165 m', 'g')]]],
      ['Equal angles', 'Alternate angles', [["The angle of depression from the top equals the angle of elevation from the bottom, because they are alternate angles.", V.note('Depression from A = elevation from B')]]]],
    turn: ["Your turn! A kite string is fifty metres long at an angle of elevation of thirty degrees. How high is the kite? Pause and try it.", E('50 × sin 30°'), "Twenty-five metres.", E('25 m', 'g')],
    rec: ["Draw the right-angled triangle with the horizontal. Mark the angle of elevation or depression. Use SOH CAH TOA.", ['Draw the horizontal', 'Mark the angle', 'Label O, A, H', 'Use trigonometry']],
    deep: ['Angles of elevation and depression are always measured from the horizontal, never the vertical.', 'Add the observer’s eye height if the question gives it.']
  });

  /* ---------- 852 ---------- */
  LS('Standard deviation', 'what standard deviation measures and how to calculate it.', {
    intro: ['Standard deviation', 'Spread around the mean', "Standard deviation measures how spread out data is around the mean. A small value means the data is close to the mean.", V.cards(['Small: consistent', 'Large: spread out'], ['g', 'b'])],
    ex: [['Step 1', 'Find the mean', [["Data: four, six, eight, ten. The mean is seven.", E('mean = 28 ÷ 4 = 7', 'g')]]],
      ['Step 2', 'Squared distances', [["Distances from seven: negative three, negative one, one, three. Squared: nine, one, one, nine. Total twenty.", E('9 + 1 + 1 + 9 = 20', 'g')]]],
      ['Step 3', 'Divide and root', [["Divide by n minus one, three: about six point six seven. Square root: about two point five eight.", E('s = √(20 ÷ 3) ≈ 2.58', 'g')]]],
      ['Comparing', 'Two machines', [["Machine A fills bottles with mean five hundred millilitres and s.d. two. Machine B: mean five hundred, s.d. eight. A is more consistent.", E('2 < 8 → A more consistent', 'g')]]]],
    turn: ["Your turn! Two classes have the same mean, but standard deviations of four and ten. Which is more consistent? Pause and think.", E('?'), "The class with standard deviation four.", E('s = 4', 'g')],
    rec: ["Find the mean, the squared distance of each value from it, add them, divide by n minus one, and square root. Smaller standard deviation means more consistent data.", ['Find the mean', 'Square each distance', 'Sum ÷ (n − 1)', 'Square root']],
    deep: ['Squaring makes all the distances positive so they don’t cancel out.', 'Compare means and standard deviations together, in context.']
  });

  LS('Quartiles and box plots', 'how to find quartiles and draw and compare box plots.', {
    intro: ['Box plots', 'Five numbers', "A box plot shows five numbers: the minimum, lower quartile, median, upper quartile and maximum.", V.cards(['Min', 'Q1', 'Median', 'Q3', 'Max'], ['b', 'p', 'g', 'p', 'b'], true)],
    ex: [['Finding the five numbers', '2, 4, 5, 7, 9, 11, 14', [["Minimum two, maximum fourteen, median seven. Lower half two, four, five: Q1 is four. Upper half nine, eleven, fourteen: Q3 is eleven.", E('2, 4, 7, 11, 14', 'g')]]],
      ['Drawing it', 'Box and whiskers', [["Draw a box from Q1 to Q3 with a line at the median, and whiskers out to the minimum and maximum.", V.note('Box: Q1 to Q3 · Whiskers: min to max')]]],
      ['Comparing box plots', 'Median and IQR', [["Compare medians for the typical value and interquartile ranges for consistency. A shorter box means more consistent data.", V.note('Compare median and IQR')]]]],
    turn: ["Your turn! Q1 is twelve and Q3 is twenty. What is the interquartile range? Pause and try it.", E('20 − 12'), "Eight.", E('8', 'g')],
    rec: ["Order the data and find the minimum, Q1, median, Q3 and maximum. Draw the box from Q1 to Q3 and whiskers to the extremes. Compare medians and interquartile ranges.", ['Order the data', 'Five-number summary', 'Box Q1 to Q3', 'Compare median and IQR']],
    deep: ['The middle half of the data is inside the box, whatever the extreme values are.', 'Draw box plots to scale on the same axis to compare them fairly.']
  });

  /* ---------- 853 ---------- */
  LS('Vectors as journeys', 'how vectors describe movement and how to add them.', {
    intro: ['Vectors', 'Direction and size', "A vector describes a movement: how far across and how far up. We write it as a column, with across on top and up below.", E('(3, 2): 3 right, 2 up', 'g')],
    ex: [['Reading a vector', 'Across, then up', [["The vector five, negative one means five right and one down.", E('(5, −1): 5 right, 1 down', 'g')]]],
      ['Adding vectors', 'One journey after another', [["Three, two then one, four is the same as four, six altogether. Add the tops and add the bottoms.", E('(3, 2) + (1, 4) = (4, 6)', 'g')]]],
      ['Multiplying by a number', 'Longer, same direction', [["Two times three, two is six, four: twice as long, the same direction.", E('2 × (3, 2) = (6, 4)', 'g')]]],
      ['Going back', 'Negative vectors', [["The vector negative three, negative two goes back the opposite way.", E('−(3, 2) = (−3, −2)', 'g')]]]],
    turn: ["Your turn! Add the vectors two, negative three and negative five, one. Pause and try it.", E('(2, −3) + (−5, 1)'), "Negative three, negative two.", E('(−3, −2)', 'g')],
    rec: ["A vector gives movement across and up. Add vectors component by component. Multiplying by a number scales it; a negative reverses it.", ['(across, up)', 'Add tops, add bottoms', '× k: k times as long', 'Negative: opposite way']],
    deep: ['Adding vectors gives the same result in any order: the end point is the same.', 'Keep across on top and up on the bottom.']
  });

  LS('The magnitude of a vector', 'how to find the length of a vector using Pythagoras.', {
    intro: ['Magnitude', 'How long is the movement?', "The magnitude of a vector is its length. Use Pythagoras with the across and up parts.", E('|(a, b)| = √(a² + b²)', 'g')],
    ex: [['A 3-4-5 vector', '(3, 4)', [["Three squared plus four squared is twenty-five. The square root is five.", E('|(3, 4)| = 5', 'g')]]],
      ['With negatives', '(−6, 8)', [["Thirty-six plus sixty-four is one hundred: magnitude ten. The negative sign doesn't matter once squared.", E('|(−6, 8)| = 10', 'g')]]],
      ['Not a whole number', '(2, 5)', [["Four plus twenty-five is twenty-nine. The magnitude is root twenty-nine, about five point three nine.", E('√29 ≈ 5.39', 'g')]]],
      ['Distance between points', 'From A to B', [["From one, two to seven, ten: the vector is six, eight, so the distance is ten.", E('(6, 8) → 10', 'g')]]]],
    turn: ["Your turn! Find the magnitude of five, twelve. Pause and try it.", E('√(25 + 144)'), "Thirteen.", E('13', 'g')],
    rec: ["Square the components, add them, and take the square root. Negative components give the same magnitude.", ['Square each part', 'Add', 'Square root', 'Distance between points']],
    deep: ['The magnitude is the straight-line distance, even if the journey went another way.', 'Square negative components carefully: (−6)² = 36.']
  });

  /* ===================== put the S3 topics together ===================== */
  L.use(841, ['How do you evaluate powers and express whole numbers as powers?', 'How do you write a number as a product of its prime factors?', 'How do you calculate percentage changes?', 'Surds', 'Compound growth and depreciation', 'Standard form', 'Percentage change and wages']);
  L.use(842, ['How do you convert currencies?', 'Compound interest', 'Tax bands', 'Percentage change and wages', 'Best buys, interest and exchange']);
  L.use(843, ['Density and other rates', 'Changing units of speed', 'Ratio with different units', 'Speed, distance and time']);
  L.use(844, ['What are the properties of 3D objects?', 'Volume of cones and spheres', 'Surface area of cones and spheres', 'Circles, similarity and solids']);
  L.use(845, ['How do you generate a formula from a sequence?', 'How do you simplify algebraic terms?', 'How do you substitute numbers into an expression?', 'How do you create and use algebraic formulae?', 'Common factors and difference of two squares', 'Factorising quadratics', 'Brackets, factorising and equations']);
  L.use(846, ['How do you solve linear equations?', 'How do you create and solve simple equations?', 'Equations with fractions', 'Changing the subject and inequations', 'Brackets, factorising and equations']);
  L.use(847, ['Parallel and perpendicular lines', 'Lines in the form ax + by = c', 'Gradient and straight lines']);
  L.use(848, ['Solving by graph', 'Solving by elimination', 'Simultaneous equations']);
  L.use(849, ['SOH CAH TOA', 'Finding an angle', 'Pythagoras and trigonometry']);
  L.use(850, ['Circle theorems', 'Chords and tangent lengths', 'Circles, similarity and solids']);
  L.use(851, ['How do you construct triangles?', 'What are angles in triangles and quadrilaterals?', 'What is a linear scale factor?', 'Similar triangles', 'Angles of elevation', 'Circles, similarity and solids', 'Polygon angles, bearings and coordinates']);
  L.use(852, ['How do you interpret and describe data?', 'Standard deviation', 'Quartiles and box plots', 'Two-way tables, Venn diagrams and pie charts', 'Quartiles and probability']);
  L.use(853, ['What is symmetry in 2D shapes?', 'Vectors as journeys', 'The magnitude of a vector', 'Painted cubes and stacks']);
})();
