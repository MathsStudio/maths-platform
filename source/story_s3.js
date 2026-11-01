/* story_s3.js: teacher story lessons for S3 (topics 841 to 853). */
(function () {
  'use strict';
  var BT = window.BT; if (!BT || !BT.story || !BT.sv || !BT.sv.plot) return;
  var V = BT.sv, NL = BT.NL;
  var SC = function (h, sub, steps) { return { h: h, sub: sub, steps: steps }; };
  var st = function (say, html) { return { say: say, html: html || '' }; };
  var REC = function (say, items) { return SC('Let’s recap', '', [st(say, V.list(items))]); };
  function boxplot() {
    var X = function (v) { return 20 + v * 17; }, s = '';
    for (var v = 0; v <= 16; v += 2) s += '<line x1="' + X(v) + '" y1="78" x2="' + X(v) + '" y2="84" style="stroke:var(--fg);stroke-width:2"/>' + V.t(X(v), 100, v, 'middle', 'var(--muted)');
    s += '<line x1="20" y1="80" x2="292" y2="80" style="stroke:var(--fg);stroke-width:2"/>';
    s += '<line x1="' + X(3) + '" y1="40" x2="' + X(5) + '" y2="40" style="stroke:var(--fg);stroke-width:3"/><line x1="' + X(12) + '" y1="40" x2="' + X(14) + '" y2="40" style="stroke:var(--fg);stroke-width:3"/>';
    s += '<rect x="' + X(5) + '" y="20" width="' + (X(12) - X(5)) + '" height="40" style="fill:var(--accent);fill-opacity:.35;stroke:var(--fg);stroke-width:3"/><line x1="' + X(8) + '" y1="20" x2="' + X(8) + '" y2="60" style="stroke:var(--fg);stroke-width:4"/>';
    s += V.t(X(3), 14, '3') + V.t(X(5), 14, 'Q1 5') + V.t(X(8), 14, '8') + V.t(X(12), 14, 'Q3 12') + V.t(X(14), 14, '14');
    return V.svg(310, 112, s, 'A box plot', 340);
  }

  /* 841 NUMBER AND PERCENTAGES */
  BT.story(841, 'Watch', [
    { title: 'Surds', goal: 'how to simplify and multiply surds.', scenes: [
      SC('What is a surd?', 'A root that does not simplify', [
        st("A surd is a square root that is not a whole number, like root two or root twelve. Its decimal goes on forever, so we leave it as a root to be exact. We can still simplify them.", V.eq('√2 = 1.41421…', 'b')),
        st("To simplify root twelve, look for a square number that divides into twelve. Four does. Root twelve is root four times root three. Root four is two, so we get two root three.", V.eq('√12 = √4 × √3 = 2√3', 'g'))]),
      SC('Multiplying', '√2 × √8', [
        st("To multiply surds, multiply the numbers inside the roots. Root two times root eight is root sixteen, which is four.", V.eq('√2 × √8 = √16 = 4', 'g') + V.rule('√a × √b = √(ab)'))]),
      REC("Simplify a surd by pulling out the biggest square factor. Multiply surds by multiplying what is inside.", ['Find a square factor', '√(ab) = √a × √b', 'Leave exact answers as roots'])] },
    { title: 'Compound growth and depreciation', goal: 'how to model repeated percentage growth and decay.', scenes: [
      SC('Depreciation', 'A car loses 20% a year', [
        st("A car worth fifteen thousand pounds loses twenty per cent of its value each year. The multiplier is zero point eight. After three years, multiply by zero point eight three times.", V.eq('15,000 × 0.8³', 'b')),
        st("Zero point eight cubed is zero point five one two. Fifteen thousand times that is seven thousand, six hundred and eighty pounds.", V.eq('15,000 × 0.512 = £7,680', 'g') + V.rule('Final = original × multiplierⁿ'))]),
      REC("For growth the multiplier is more than one. For decay it is less than one. Raise it to the power of the number of periods.", ['Growth: 1 + rate', 'Decay: 1 − rate', 'Raise to the power n'])] }
  ]);

  /* 842 FINANCE */
  BT.story(842, 'Watch', [
    { title: 'Compound interest', goal: 'how savings grow with compound interest.', scenes: [
      SC('Interest on interest', '£5,000 at 3% for 4 years', [
        st("With compound interest, the interest is added to the savings each year, and then earns interest too. Three per cent growth has the multiplier one point oh three. Four years: one point oh three to the power four.", V.eq('5000 × 1.03⁴', 'b')),
        st("One point oh three to the fourth is about one point one two five five. Times five thousand is five thousand, six hundred and twenty-seven pounds fifty-four.", V.eq('5000 × 1.1255 ≈ £5,627.54', 'g')),
        st("Compare with simple interest. Three per cent of five thousand is a hundred and fifty a year, six hundred in four years, giving five thousand, six hundred. Compound gives a little more.", V.eq('simple: £5,600'))]),
      REC("Compound interest uses the multiplier to the power of the number of years. It beats simple interest over time.", ['Multiplier = 1 + rate', 'Power = years', 'Interest = final − original'])] },
    { title: 'Tax bands', goal: 'how tax is worked out when there is more than one rate.', scenes: [
      SC('Two rates', 'An example with made-up bands', [
        st("Some tax systems charge different rates on different slices of income. In this example, the first ten thousand of taxable income is taxed at twenty per cent and the rest at forty per cent. Always use the rates in the question, as real ones change.", V.eq('First £10,000 at 20%, the rest at 40%', 'b')),
        st("Taxable income is seventeen thousand five hundred. Twenty per cent of ten thousand is two thousand. The remaining seven thousand five hundred at forty per cent is three thousand. The total tax is five thousand pounds.", V.eq('20% of 10,000 = 2,000') + V.eq('40% of 7,500 = 3,000') + V.eq('Tax = £5,000', 'g'))]),
      REC("Split the income into slices, tax each slice at its own rate, then add.", ['Slice the income', 'Tax each slice', 'Add the results'])] }
  ]);

  /* 843 RATIO, PROPORTION, RATES AND SPEED */
  BT.story(843, 'Watch', [
    { title: 'Density and other rates', goal: 'how to use rates such as density.', scenes: [
      SC('Density', 'Mass ÷ volume', [
        st("Density is a rate: how much mass fits in each cubic centimetre. A block has a mass of five hundred and forty grams and a volume of two hundred cubic centimetres. Density is mass divided by volume.", V.eq('ρ = m ÷ V') + V.eq('540 ÷ 200 = 2.7 g/cm³', 'g')),
        st("Rearranged, mass is density times volume, and volume is mass over density. Many rate problems use this same triangle idea.", V.tbl([['mass', 'density × volume'], ['volume', 'mass ÷ density']], ['Find', 'Use']))]),
      REC("A rate compares two different quantities. Density is mass over volume, and speed is distance over time.", ['Rate = quantity ÷ quantity', 'Rearrange for the unknown', 'Check the units'])] },
    { title: 'Changing units of speed', goal: 'how to convert between km/h and m/s.', scenes: [
      SC('km/h to m/s', '90 km/h', [
        st("To change ninety kilometres per hour into metres per second, think about both units. Ninety kilometres is ninety thousand metres. One hour is three thousand, six hundred seconds.", V.eq('90 km = 90,000 m') + V.eq('1 h = 3,600 s')),
        st("Divide ninety thousand by three thousand six hundred and you get twenty-five metres per second.", V.eq('90,000 ÷ 3,600 = 25 m/s', 'g') + V.rule('km/h ÷ 3.6 = m/s'))]),
      REC("Change the distance unit and the time unit separately. Dividing by three point six converts km/h to m/s.", ['Convert distance', 'Convert time', 'Divide'])] }
  ]);

  /* 844 SOLIDS */
  BT.story(844, 'Watch', [
    { title: 'Volume of cones and spheres', goal: 'how to use the volume formulae for a cone and sphere.', scenes: [
      SC('Cone', 'Radius 3 cm, height 4 cm', [
        st("A cone is a third of the cylinder that fits around it. Its volume is one third pi r squared h. With radius three and height four: a third of pi times nine times four is twelve pi, about thirty-seven point seven cubic centimetres.", V.eq('V = ⅓πr²h = ⅓ × π × 9 × 4 = 12π ≈ 37.7 cm³', 'g'))]),
      SC('Sphere', 'Radius 3 cm', [
        st("The volume of a sphere is four thirds pi r cubed. With radius three, r cubed is twenty-seven. Four thirds of twenty-seven is thirty-six, so thirty-six pi, about a hundred and thirteen point one.", V.eq('V = 4/3 πr³ = 4/3 × π × 27 = 36π ≈ 113.1 cm³', 'g'))]),
      REC("Cone: a third pi r squared h. Sphere: four thirds pi r cubed. Substitute carefully and keep pi until the end.", ['Cone: ⅓πr²h', 'Sphere: 4/3 πr³', 'Cube r before multiplying'])] },
    { title: 'Surface area of cones and spheres', goal: 'how to find the curved surface area of a cone and sphere.', scenes: [
      SC('Sphere', '4πr²', [
        st("The surface area of a sphere is four pi r squared. With radius three, that is thirty-six pi, about a hundred and thirteen square centimetres.", V.eq('SA = 4πr² = 36π ≈ 113.1 cm²', 'g'))]),
      SC('Cone', 'The slant height', [
        st("The curved surface of a cone is pi r l, where l is the slant height. We need l. With radius three and height four, use Pythagoras: three squared plus four squared is twenty-five. So l is five.", V.rt({ a: 'r = 3', b: 'h = 4', c: 'l = 5' }) + V.eq('l = √(3² + 4²) = 5', 'b')),
        st("The curved area is pi times three times five, fifteen pi, about forty-seven point one square centimetres.", V.eq('πrl = 15π ≈ 47.1 cm²', 'g'))]),
      REC("Sphere: four pi r squared. Cone curved surface: pi r l, with l from Pythagoras.", ['Sphere: 4πr²', 'Cone curved: πrl', 'Slant height by Pythagoras'])] }
  ]);

  /* 845 ALGEBRA: BRACKETS AND FACTORISING */
  BT.story(845, 'Watch', [
    { title: 'Common factors and difference of two squares', goal: 'how to factorise by taking out a common factor and spotting a difference of squares.', scenes: [
      SC('Common factor', '6x + 9', [
        st("Factorising is expanding backwards. Look for the highest number that divides both terms. Six x and nine are both divisible by three. Take out the three: three brackets two x plus three.", V.eq('6x + 9 = 3(2x + 3)', 'g') + V.rule('Check by expanding.'))]),
      SC('Difference of two squares', 'x² − 16', [
        st("When you see one square minus another square, like x squared minus sixteen, it factorises into two brackets with the same terms and opposite signs. x squared minus four squared is x minus four, times x plus four.", V.eq('x² − 16 = (x − 4)(x + 4)', 'g'))]),
      REC("Take out the highest common factor first. A difference of two squares factorises into (a − b)(a + b).", ['HCF first', 'a² − b² = (a − b)(a + b)', 'Check by expanding'])] },
    { title: 'Factorising quadratics', goal: 'how to factorise a quadratic with two numbers.', scenes: [
      SC('Two numbers', 'x² + 7x + 12', [
        st("To factorise x squared plus seven x plus twelve, find two numbers that multiply to twelve and add to seven. Three and four work: three times four is twelve, three plus four is seven.", V.tbl([['1, 12', '13'], ['2, 6', '8'], ['3, 4', '7 ✓']], ['Multiply to 12', 'Add to']) + V.eq('x² + 7x + 12 = (x + 3)(x + 4)', 'g'))]),
      SC('With a negative', 'x² − 5x + 6', [
        st("For x squared minus five x plus six, the numbers multiply to plus six and add to minus five. Minus two and minus three work. So it is x minus two, times x minus three.", V.eq('(x − 2)(x − 3)', 'g'))]),
      REC("Find two numbers that multiply to the last term and add to the middle term.", ['Multiply to c', 'Add to b', 'Check by expanding'])] }
  ]);

  /* 846 EQUATIONS, INEQUATIONS, SUBJECT */
  BT.story(846, 'Watch', [
    { title: 'Equations with fractions', goal: 'how to solve equations with a fraction on each side.', scenes: [
      SC('Cross-multiplying', '(x + 1)/2 = (x − 2)/3', [
        st("To get rid of fractions, multiply both sides by the common denominator, six. Six times x plus one over two is three times x plus one. Six times x minus two over three is two times x minus two.", V.eq('3(x + 1) = 2(x − 2)', 'b')),
        st("Expand: three x plus three equals two x minus four. Take away two x: x plus three equals minus four. Take three: x equals minus seven.", V.eq('3x + 3 = 2x − 4') + V.eq('x = −7', 'g')),
        st("Check: minus seven plus one is minus six, over two, minus three. Minus seven minus two is minus nine, over three, minus three. Both sides match.", V.eq('−3 = −3 ✓', 'g'))]),
      REC("Multiply through by the common denominator, expand the brackets, collect terms, and check.", ['Clear the fractions', 'Expand', 'Collect terms', 'Check'])] },
    { title: 'Changing the subject and inequations', goal: 'how to rearrange formulae and solve inequations with a negative.', scenes: [
      SC('Rearranging', 'Make r the subject of A = πr²', [
        st("A equals pi r squared. Divide both sides by pi: r squared equals A over pi. Then take the square root: r equals the square root of A over pi.", V.eq('r² = A/π') + V.eq('r = √(A/π)', 'g')),
        st("Another one: y equals m x plus c. Take c from both sides, then divide by m. x equals y minus c, over m.", V.eq('x = (y − c)/m', 'g'))]),
      SC('Inequations', 'Dividing by a negative', [
        st("Solve minus two x is less than eight. Divide by minus two. Because we divide by a negative, the inequality sign flips. x is greater than minus four.", V.eq('−2x < 8') + V.eq('x > −4', 'g') + V.rule('Divide or multiply by a negative: flip the sign.') + NL(-8, 2, { lab: 1, tick: 1, marks: [[-4, 135]] }))]),
      REC("Undo operations in reverse order when rearranging. Flip an inequality sign when you multiply or divide by a negative.", ['Reverse order', 'Same to both sides', 'Negative: flip the sign'])] }
  ]);

  /* 847 STRAIGHT LINES */
  BT.story(847, 'Watch', [
    { title: 'Parallel and perpendicular lines', goal: 'how gradients show whether lines are parallel or perpendicular.', scenes: [
      SC('Parallel', 'The same gradient', [
        st("Parallel lines never meet. They have exactly the same gradient. The lines y equals two x plus one, and y equals two x minus three are parallel, because both have gradient two.", V.plot(-2, 4, -5, 7, [{ l: [[-2, -3], [3, 7]] }, { l: [[-1, -5], [4, 5]], c: 'var(--good)' }], { tx: 1, ty: 2 }) + V.eq('y = 2x + 1   y = 2x − 3', 'g'))]),
      SC('Perpendicular', 'Gradients multiply to −1', [
        st("Perpendicular lines meet at a right angle. Their gradients multiply to minus one. A line with gradient two is perpendicular to a line with gradient minus a half, because two times minus a half is minus one.", V.eq('m₁ × m₂ = −1') + V.eq('2 × (−½) = −1 ✓', 'g'))]),
      REC("Parallel: equal gradients. Perpendicular: gradients multiply to minus one.", ['Parallel: m₁ = m₂', 'Perpendicular: m₁m₂ = −1', 'Write gradients first'])] },
    { title: 'Lines in the form ax + by = c', goal: 'how to sketch a line from its intercepts.', scenes: [
      SC('Using intercepts', '2x + 3y = 12', [
        st("To sketch two x plus three y equals twelve, find where it crosses each axis. When x is zero, three y is twelve, so y is four. When y is zero, two x is twelve, so x is six.", V.eq('x = 0: y = 4') + V.eq('y = 0: x = 6')),
        st("Plot the points zero, four and six, zero, and join them with a straight line.", V.plot(-1, 7, -1, 5, [{ l: [[0, 4], [6, 0]] }, { p: [0, 4, '(0, 4)'] }, { p: [6, 0, '(6, 0)'] }], { tx: 1, ty: 1, xl: 'x', yl: 'y' }))]),
      REC("Set x to zero and y to zero to find the two intercepts, then join them.", ['x = 0 → y-intercept', 'y = 0 → x-intercept', 'Join with a straight line'])] }
  ]);

  /* 848 SIMULTANEOUS EQUATIONS */
  BT.story(848, 'Watch', [
    { title: 'Solving by graph', goal: 'how the intersection of two lines solves two equations at once.', scenes: [
      SC('Where the lines cross', 'y = x + 1 and y = −x + 5', [
        st("Simultaneous equations ask for values of x and y that satisfy two equations at once. If we draw both lines, the solution is the point where they cross.", V.plot(0, 6, 0, 6, [{ l: [[0, 1], [5, 6]] }, { l: [[0, 5], [5, 0]], c: 'var(--good)' }, { p: [2, 3, '(2, 3)'] }], { tx: 1, ty: 1, xl: 'x', yl: 'y' })),
        st("The lines cross at two, three. Check in both: three equals two plus one, and three equals minus two plus five. Both work, so x is two and y is three.", V.eq('3 = 2 + 1 ✓') + V.eq('3 = −2 + 5 ✓') + V.eq('x = 2, y = 3', 'g'))]),
      REC("The solution is where the two lines cross. Always check in both equations.", ['Plot both lines', 'Read the crossing point', 'Check in both'])] },
    { title: 'Solving by elimination', goal: 'how to eliminate a variable to solve simultaneous equations.', scenes: [
      SC('Subtract to eliminate', 'x + y = 7 and 2x + y = 11', [
        st("Both equations have a plus y. Subtract the first from the second and the y disappears. Two x take x is x. Eleven take seven is four. So x is four.", V.eq('2x + y = 11') + V.eq('x + y = 7') + V.eq('x = 4', 'g')),
        st("Put x equals four into the first equation: four plus y equals seven, so y is three. Check in the second: eight plus three is eleven.", V.eq('y = 3', 'g') + V.eq('2(4) + 3 = 11 ✓', 'g') + V.rule('Same sign: subtract. Opposite signs: add.'))]),
      REC("Make the coefficients of one letter match. Add or subtract to eliminate it, solve, then substitute back.", ['Match a coefficient', 'Add or subtract', 'Substitute back', 'Check'])] }
  ]);

  /* 849 PYTHAGORAS AND TRIGONOMETRY */
  BT.story(849, 'Watch', [
    { title: 'SOH CAH TOA', goal: 'how to use sine, cosine and tangent to find a missing side.', scenes: [
      SC('Naming the sides', 'Hypotenuse, opposite, adjacent', [
        st("In a right-angled triangle, the hypotenuse is opposite the right angle. The opposite is across from the angle you are using, and the adjacent is next to it. Three ratios link them: sine is opposite over hypotenuse, cosine is adjacent over hypotenuse, tangent is opposite over adjacent.", V.tbl([['sin θ', 'O ÷ H'], ['cos θ', 'A ÷ H'], ['tan θ', 'O ÷ A']], ['Ratio', 'Sides']) + V.rule('SOH CAH TOA'))]),
      SC('Finding a side', 'Hypotenuse 10 cm, angle 30°', [
        st("The hypotenuse is ten and the angle is thirty degrees. We want the opposite side. That is sine: sine thirty equals opposite over ten. So opposite equals ten times sine thirty, which is five centimetres.", V.rt({ a: 'adjacent', b: 'opposite ?', c: '10 cm', ang: '30°' }) + V.eq('sin 30° = O ÷ 10 → O = 10 × 0.5 = 5 cm', 'g'))]),
      REC("Label the sides first. Choose sine, cosine or tangent from the two sides involved.", ['Label O, A, H', 'Choose SOH, CAH or TOA', 'Rearrange and solve'])] },
    { title: 'Finding an angle', goal: 'how to use the inverse trigonometric functions.', scenes: [
      SC('Inverse tangent', 'Opposite 3, adjacent 4', [
        st("If we know two sides and want the angle, we use the inverse function. The opposite is three and the adjacent is four. Tangent of the angle is three over four, zero point seven five.", V.rt({ a: '4', b: '3', c: '', ang: 'θ ?' }) + V.eq('tan θ = 3/4 = 0.75', 'b')),
        st("Now press shift tan on the calculator: inverse tangent of zero point seven five is thirty-six point nine degrees.", V.eq('θ = tan⁻¹(0.75) = 36.9°', 'g') + V.rule('Check your calculator is in degrees.'))]),
      REC("To find an angle, use the inverse function: shift sin, cos or tan.", ['Ratio of two known sides', 'Inverse function', 'Degrees mode'])] }
  ]);

  /* 850 THE CIRCLE */
  BT.story(850, 'Watch', [
    { title: 'Circle theorems', goal: 'the angle in a semicircle, the angle at the centre and tangents.', scenes: [
      SC('Angle in a semicircle', 'Always 90°', [
        st("Draw a diameter and join its ends to any point on the circle. The angle at that point is always a right angle. This is the angle in a semicircle theorem.", V.circle() + V.eq('angle in a semicircle = 90°', 'g')),
        st("Another: the angle at the centre is twice the angle at the circumference, when both stand on the same arc. If the angle at the circumference is forty, the angle at the centre is eighty.", V.eq('centre = 2 × circumference') + V.eq('2 × 40° = 80°', 'g'))]),
      SC('Tangents', 'Perpendicular to the radius', [
        st("A tangent touches a circle at one point. The radius to that point meets the tangent at ninety degrees.", V.eq('tangent ⟂ radius', 'g'))]),
      REC("The angle in a semicircle is ninety. The centre angle is double the edge angle. A tangent is perpendicular to the radius.", ['Semicircle: 90°', 'Centre = 2 × edge', 'Tangent ⟂ radius'])] },
    { title: 'Chords and tangent lengths', goal: 'how to use Pythagoras with chords and tangents.', scenes: [
      SC('Chord', 'Radius 5, perpendicular distance 3', [
        st("A perpendicular from the centre to a chord cuts it exactly in half. With radius five and perpendicular distance three, half the chord is a side of a right-angled triangle. Five squared minus three squared is sixteen, so half the chord is four.", V.eq('5² − 3² = 16 → half chord = 4') + V.eq('chord = 8', 'g'))]),
      SC('Tangent length', 'A point 13 from the centre', [
        st("A tangent is perpendicular to the radius, so the radius, the tangent and the line to the centre make a right-angled triangle. The hypotenuse is thirteen and the radius is five. Thirteen squared minus five squared is a hundred and forty-four. The tangent is twelve.", V.eq('13² − 5² = 144') + V.eq('tangent = 12', 'g'))]),
      REC("Look for the right angle. A perpendicular to a chord bisects it, and a tangent meets the radius at ninety degrees.", ['Find the right angle', 'Use Pythagoras', 'Double for a whole chord'])] }
  ]);

  /* 851 SIMILARITY, SCALE, BEARINGS, ELEVATION */
  BT.story(851, 'Watch', [
    { title: 'Similar triangles', goal: 'how to use similar triangles to find an unknown length.', scenes: [
      SC('Shadows', 'A pole and a tree', [
        st("A two metre pole casts a three metre shadow. At the same moment, a tree casts a twelve metre shadow. The sun makes the two triangles similar, so the sides are in the same ratio.", V.eq('pole : shadow = 2 : 3', 'b')),
        st("Twelve is four times three, so the scale factor is four. The tree is four times two, eight metres tall.", V.eq('scale factor = 12 ÷ 3 = 4') + V.eq('height = 2 × 4 = 8 m', 'g'))]),
      REC("Match corresponding sides, find the scale factor, then multiply or divide.", ['Match corresponding sides', 'Find the scale factor', 'Apply it'])] },
    { title: 'Angles of elevation', goal: 'how to use tangent to find heights from angles of elevation.', scenes: [
      SC('Looking up', 'A tower 50 m away', [
        st("The angle of elevation is the angle up from the horizontal to the top of something. You stand fifty metres from a tower and the angle of elevation of the top is thirty-five degrees.", V.rt({ a: '50 m', b: 'h ?', c: '', ang: '35°' })),
        st("We know the adjacent side and want the opposite. That is tangent. h equals fifty times tan thirty-five, which is about thirty-five metres.", V.eq('tan 35° = h ÷ 50') + V.eq('h = 50 × 0.7002 ≈ 35.0 m', 'g'))]),
      REC("Sketch a right-angled triangle. The angle of elevation is measured up from the horizontal.", ['Draw the right-angled triangle', 'Pick sin, cos or tan', 'Add eye height if needed'])] }
  ]);

  /* 852 STATISTICS AND PROBABILITY */
  BT.story(852, 'Watch', [
    { title: 'Standard deviation', goal: 'how to calculate the standard deviation to measure spread.', scenes: [
      SC('Measuring spread', '2, 4, 6, 8', [
        st("The standard deviation tells us how spread out the data is. Take the data two, four, six, eight. The mean is five.", V.cards(['2', '4', '6', '8'], ['b'], true) + V.eq('mean = 20 ÷ 4 = 5')),
        st("Find each value minus the mean, and square it: minus three squared is nine, minus one squared is one, one squared is one, three squared is nine. They add to twenty.", V.tbl([['2', '−3', '9'], ['4', '−1', '1'], ['6', '1', '1'], ['8', '3', '9']], ['x', 'x − mean', 'squared']) + V.eq('sum = 20')),
        st("Divide by n minus one, which is three: six point six seven. Take the square root: two point five eight.", V.eq('s = √(20 ÷ 3) ≈ 2.58', 'g') + V.rule('Divide by n − 1, then square root.'))]),
      REC("Subtract the mean, square, add, divide by n minus one, take the square root.", ['x − mean', 'Square and add', '÷ (n − 1)', 'Square root'])] },
    { title: 'Quartiles and box plots', goal: 'how to find quartiles and draw a box plot.', scenes: [
      SC('Five-figure summary', '3, 5, 6, 8, 9, 12, 14', [
        st("Put the data in order. The median is the middle value, eight. The lower quartile is the middle of the lower half, five. The upper quartile is the middle of the upper half, twelve.", V.cards(['3', '5', '6', '8', '9', '12', '14'], ['b'], true) + V.tbl([['Q1', '5'], ['median', '8'], ['Q3', '12']], ['', 'value'])),
        st("The interquartile range is the upper quartile minus the lower quartile, twelve minus five, seven. A box plot shows the minimum, quartiles, median and maximum.", boxplot() + V.eq('IQR = 12 − 5 = 7', 'g'))]),
      REC("Order the data, find the median, then the medians of each half. The IQR is Q3 minus Q1.", ['Order the data', 'Q1, median, Q3', 'IQR = Q3 − Q1'])] }
  ]);

  /* 853 SPATIAL */
  BT.story(853, 'Watch', [
    { title: 'Vectors as journeys', goal: 'how to describe a movement with a vector.', scenes: [
      SC('Column vectors', 'Right and up', [
        st("A vector describes a journey. The top number is how far right, and the bottom number is how far up. Negative means left or down. The vector three, two is three right and two up.", V.plot(0, 5, 0, 4, [{ l: [[1, 1], [4, 3]] }, { p: [1, 1, 'A', 'var(--accent)'] }, { p: [4, 3, 'B', 'var(--good)'] }], { tx: 1, ty: 1 }) + V.eq('AB = (3, 2)', 'g')),
        st("To add vectors, add the tops and add the bottoms. Three, two plus one, minus four gives four, minus two. To double a vector, double both numbers.", V.eq('(3, 2) + (1, −4) = (4, −2)') + V.eq('2(3, 2) = (6, 4)', 'g'))]),
      REC("Top is across, bottom is up. Add vectors component by component.", ['Top: across, bottom: up', 'Add tops and bottoms', 'Multiply both numbers'])] },
    { title: 'The magnitude of a vector', goal: 'how to find the length of a vector.', scenes: [
      SC('Pythagoras again', '|(3, 2)|', [
        st("The magnitude is the length of the vector. The vector goes three across and two up, so it is the hypotenuse of a right-angled triangle. Three squared plus two squared is thirteen. The magnitude is root thirteen, about three point six one.", V.rt({ a: '3', b: '2', c: '|a| = ?' }) + V.eq('|a| = √(3² + 2²) = √13 ≈ 3.61', 'g'))]),
      REC("The magnitude of a vector is found with Pythagoras on its two components.", ['Square both components', 'Add', 'Square root'])] }
  ]);
})();
