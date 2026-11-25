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
  BT.story(841, 'Watch lesson', [
    { title: 'Surds', goal: 'how to simplify and multiply surds.', scenes: [
      SC('What is a surd?', 'A root that does not simplify', [
        st("A surd is a square root that is not a whole number, like root 2 or root 12. Its decimal goes on forever, so we leave it as a root to be exact. We can still simplify them.", V.eq('√2 = 1.41421…', 'b')),
        st("To simplify root 12, look for a square number that divides into 12. 4 does. Root 12 is root 4 times root 3. Root 4 is 2, so we get 2 root 3.", V.eq('√12 = √4 × √3 = 2√3', 'g'))]),
      SC('Multiplying', '√2 × √8', [
        st("To multiply surds, multiply the numbers inside the roots. Root 2 times root 8 is root 16, which is 4.", V.eq('√2 × √8 = √16 = 4', 'g') + V.rule('√a × √b = √(ab)'))]),
      REC("Simplify a surd by pulling out the biggest square factor. Multiply surds by multiplying what is inside.", ['Find a square factor', '√(ab) = √a × √b', 'Leave exact answers as roots'])] },
    { title: 'Compound growth and depreciation', goal: 'how to model repeated percentage growth and decay.', scenes: [
      SC('Depreciation', 'A car loses 20% a year', [
        st("A car worth £15,000 loses 20% of its value each year. The multiplier is 0.8. After 3 years, multiply by 0.83 times.", V.eq('15,000 × 0.8³', 'b')),
        st("0.8 cubed is 0.512. 15,000 times that is 7,000, £680.", V.eq('15,000 × 0.512 = £7,680', 'g') + V.rule('Final = original × multiplierⁿ'))]),
      REC("For growth the multiplier is more than 1. For decay it is less than 1. Raise it to the power of the number of periods.", ['Growth: 1 + rate', 'Decay: 1 − rate', 'Raise to the power n'])] }
  ]);

  /* 842 FINANCE */
  BT.story(842, 'Watch lesson', [
    { title: 'Compound interest', goal: 'how savings grow with compound interest.', scenes: [
      SC('Interest on interest', '£5,000 at 3% for 4 years', [
        st("With compound interest, the interest is added to the savings each year, and then earns interest too. 3% growth has the multiplier 1 point oh 3. 4 years: 1 point oh 3 to the power 4.", V.eq('5000 × 1.03⁴', 'b')),
        st("1 point oh 3 to the fourth is about 1.1255. Times 5,000 is 5,000, £627.54.", V.eq('5000 × 1.1255 ≈ £5,627.54', 'g')),
        st("Compare with simple interest. 3% of 5,000 is a hundred and 50 a year, 600 in 4 years, giving 5,000, 600. Compound gives a little more.", V.eq('simple: £5,600'))]),
      REC("Compound interest uses the multiplier to the power of the number of years. It beats simple interest over time.", ['Multiplier = 1 + rate', 'Power = years', 'Interest = final − original'])] },
    { title: 'Tax bands', goal: 'how tax is worked out when there is more than 1 rate.', scenes: [
      SC('Two rates', 'An example with made-up bands', [
        st("Some tax systems charge different rates on different slices of income. In this example, the first 10,000 of taxable income is taxed at 20% and the rest at 40%. Always use the rates in the question, as real ones change.", V.eq('First £10,000 at 20%, the rest at 40%', 'b')),
        st("Taxable income is 17,500. 20% of 10,000 is 2,000. The remaining 7,500 at 40% is 3,000. The total tax is £5,000.", V.eq('20% of 10,000 = 2,000') + V.eq('40% of 7,500 = 3,000') + V.eq('Tax = £5,000', 'g'))]),
      REC("Split the income into slices, tax each slice at its own rate, then add.", ['Slice the income', 'Tax each slice', 'Add the results'])] }
  ]);

  /* 843 RATIO, PROPORTION, RATES AND SPEED */
  BT.story(843, 'Watch lesson', [
    { title: 'Density and other rates', goal: 'how to use rates such as density.', scenes: [
      SC('Density', 'Mass ÷ volume', [
        st("Density is a rate: how much mass fits in each cubic centimetre. A block has a mass of 540 grams and a volume of 200 cubic centimetres. Density is mass divided by volume.", V.eq('ρ = m ÷ V') + V.eq('540 ÷ 200 = 2.7 g/cm³', 'g')),
        st("Rearranged, mass is density times volume, and volume is mass over density. Many rate problems use this same triangle idea.", V.tbl([['mass', 'density × volume'], ['volume', 'mass ÷ density']], ['Find', 'Use']))]),
      REC("A rate compares 2 different quantities. Density is mass over volume, and speed is distance over time.", ['Rate = quantity ÷ quantity', 'Rearrange for the unknown', 'Check the units'])] },
    { title: 'Changing units of speed', goal: 'how to convert between km/h and m/s.', scenes: [
      SC('km/h to m/s', '90 km/h', [
        st("To change 90 kilometres per hour into metres per second, think about both units. 90 kilometres is 90,000 metres. 1 hour is 3,000, 600 seconds.", V.eq('90 km = 90,000 m') + V.eq('1 h = 3,600 s')),
        st("Divide 90,000 by 3,600 and you get 25 metres per second.", V.eq('90,000 ÷ 3,600 = 25 m/s', 'g') + V.rule('km/h ÷ 3.6 = m/s'))]),
      REC("Change the distance unit and the time unit separately. Dividing by 3.6 converts km/h to m/s.", ['Convert distance', 'Convert time', 'Divide'])] }
  ]);

  /* 844 SOLIDS */
  BT.story(844, 'Watch lesson', [
    { title: 'Volume of cones and spheres', goal: 'how to use the volume formulae for a cone and sphere.', scenes: [
      SC('Cone', 'Radius 3 cm, height 4 cm', [
        st("A cone is a third of the cylinder that fits around it. Its volume is one third pi r squared h. With radius 3 and height 4: a third of pi times 9 times 4 is 12 pi, about 37.7 cubic centimetres.", V.eq('V = ⅓πr²h = ⅓ × π × 9 × 4 = 12π ≈ 37.7 cm³', 'g'))]),
      SC('Sphere', 'Radius 3 cm', [
        st("The volume of a sphere is 4 thirds pi r cubed. With radius 3, r cubed is 27. 4 thirds of 27 is 36, so 36 pi, about a hundred and 13.1.", V.eq('V = 4/3 πr³ = 4/3 × π × 27 = 36π ≈ 113.1 cm³', 'g'))]),
      REC("Cone: a third pi r squared h. Sphere: 4 thirds pi r cubed. Substitute carefully and keep pi until the end.", ['Cone: ⅓πr²h', 'Sphere: 4/3 πr³', 'Cube r before multiplying'])] },
    { title: 'Surface area of cones and spheres', goal: 'how to find the curved surface area of a cone and sphere.', scenes: [
      SC('Sphere', '4πr²', [
        st("The surface area of a sphere is 4 pi r squared. With radius 3, that is 36 pi, about a hundred and 13 square centimetres.", V.eq('SA = 4πr² = 36π ≈ 113.1 cm²', 'g'))]),
      SC('Cone', 'The slant height', [
        st("The curved surface of a cone is pi r l, where l is the slant height. We need l. With radius 3 and height 4, use Pythagoras: 3 squared plus 4 squared is 25. So l is 5.", V.rt({ a: 'r = 3', b: 'h = 4', c: 'l = 5' }) + V.eq('l = √(3² + 4²) = 5', 'b')),
        st("The curved area is pi times 3 times 5, 15 pi, about 47.1 square centimetres.", V.eq('πrl = 15π ≈ 47.1 cm²', 'g'))]),
      REC("Sphere: 4 pi r squared. Cone curved surface: pi r l, with l from Pythagoras.", ['Sphere: 4πr²', 'Cone curved: πrl', 'Slant height by Pythagoras'])] }
  ]);

  /* 845 ALGEBRA: BRACKETS AND FACTORISING */
  BT.story(845, 'Watch lesson', [
    { title: 'Common factors and difference of two squares', goal: 'how to factorise by taking out a common factor and spotting a difference of squares.', scenes: [
      SC('Common factor', '6x + 9', [
        st("Factorising is expanding backwards. Look for the highest number that divides both terms. 6 x and 9 are both divisible by 3. Take out the three: 3 brackets 2 x plus 3.", V.eq('6x + 9 = 3(2x + 3)', 'g') + V.rule('Check by expanding.'))]),
      SC('Difference of two squares', 'x² − 16', [
        st("When you see 1 square minus another square, like x squared minus 16, it factorises into 2 brackets with the same terms and opposite signs. x squared minus 4 squared is x minus 4, times x plus 4.", V.eq('x² − 16 = (x − 4)(x + 4)', 'g'))]),
      REC("Take out the highest common factor first. A difference of 2 squares factorises into (a − b)(a + b).", ['HCF first', 'a² − b² = (a − b)(a + b)', 'Check by expanding'])] },
    { title: 'Factorising quadratics', goal: 'how to factorise a quadratic with 2 numbers.', scenes: [
      SC('Two numbers', 'x² + 7x + 12', [
        st("To factorise x squared plus 7 x plus 12, find 2 numbers that multiply to 12 and add to 7. 3 and 4 work: 3 times 4 is 12, 3 plus 4 is 7.", V.tbl([['1, 12', '13'], ['2, 6', '8'], ['3, 4', '7 ✓']], ['Multiply to 12', 'Add to']) + V.eq('x² + 7x + 12 = (x + 3)(x + 4)', 'g'))]),
      SC('With a negative', 'x² − 5x + 6', [
        st("For x squared minus 5 x plus 6, the numbers multiply to plus 6 and add to minus 5. Minus 2 and minus 3 work. So it is x minus 2, times x minus 3.", V.eq('(x − 2)(x − 3)', 'g'))]),
      REC("Find 2 numbers that multiply to the last term and add to the middle term.", ['Multiply to c', 'Add to b', 'Check by expanding'])] }
  ]);

  /* 846 EQUATIONS, INEQUATIONS, SUBJECT */
  BT.story(846, 'Watch lesson', [
    { title: 'Equations with fractions', goal: 'how to solve equations with a fraction on each side.', scenes: [
      SC('Cross-multiplying', '(x + 1)/2 = (x − 2)/3', [
        st("To get rid of fractions, multiply both sides by the common denominator, 6. 6 times x plus 1 over 2 is 3 times x plus 1. 6 times x minus 2 over 3 is 2 times x minus 2.", V.eq('3(x + 1) = 2(x − 2)', 'b')),
        st("Expand: 3 x plus 3 equals 2 x minus 4. Take away 2 x: x plus 3 equals minus 4. Take 3: x equals minus 7.", V.eq('3x + 3 = 2x − 4') + V.eq('x = −7', 'g')),
        st("Check: minus 7 plus 1 is minus 6, over 2, minus 3. Minus 7 minus 2 is minus 9, over 3, minus 3. Both sides match.", V.eq('−3 = −3 ✓', 'g'))]),
      REC("Multiply through by the common denominator, expand the brackets, collect terms, and check.", ['Clear the fractions', 'Expand', 'Collect terms', 'Check'])] },
    { title: 'Changing the subject and inequations', goal: 'how to rearrange formulae and solve inequations with a negative.', scenes: [
      SC('Rearranging', 'Make r the subject of A = πr²', [
        st("A equals pi r squared. Divide both sides by pi: r squared equals A over pi. Then take the square root: r equals the square root of A over pi.", V.eq('r² = A/π') + V.eq('r = √(A/π)', 'g')),
        st("Another one: y equals m x plus c. Take c from both sides, then divide by m. x equals y minus c, over m.", V.eq('x = (y − c)/m', 'g'))]),
      SC('Inequations', 'Dividing by a negative', [
        st("Solve minus 2 x is less than 8. Divide by minus 2. Because we divide by a negative, the inequality sign flips. x is greater than minus 4.", V.eq('−2x < 8') + V.eq('x > −4', 'g') + V.rule('Divide or multiply by a negative: flip the sign.') + NL(-8, 2, { lab: 1, tick: 1, marks: [[-4, 135]] }))]),
      REC("Undo operations in reverse order when rearranging. Flip an inequality sign when you multiply or divide by a negative.", ['Reverse order', 'Same to both sides', 'Negative: flip the sign'])] }
  ]);

  /* 847 STRAIGHT LINES */
  BT.story(847, 'Watch lesson', [
    { title: 'Parallel and perpendicular lines', goal: 'how gradients show whether lines are parallel or perpendicular.', scenes: [
      SC('Parallel', 'The same gradient', [
        st("Parallel lines never meet. They have exactly the same gradient. The lines y equals 2 x plus 1, and y equals 2 x minus 3 are parallel, because both have gradient 2.", V.plot(-2, 4, -5, 7, [{ l: [[-2, -3], [3, 7]] }, { l: [[-1, -5], [4, 5]], c: 'var(--good)' }], { tx: 1, ty: 2 , title: 'Parallel lines y = 2x + 1 and y = 2x − 3' }) + V.eq('y = 2x + 1   y = 2x − 3', 'g'))]),
      SC('Perpendicular', 'Gradients multiply to −1', [
        st("Perpendicular lines meet at a right angle. Their gradients multiply to minus 1. A line with gradient 2 is perpendicular to a line with gradient minus a half, because 2 times minus a half is minus 1.", V.eq('m₁ × m₂ = −1') + V.eq('2 × (−½) = −1 ✓', 'g'))]),
      REC("Parallel: equal gradients. Perpendicular: gradients multiply to minus 1.", ['Parallel: m₁ = m₂', 'Perpendicular: m₁m₂ = −1', 'Write gradients first'])] },
    { title: 'Lines in the form ax + by = c', goal: 'how to sketch a line from its intercepts.', scenes: [
      SC('Using intercepts', '2x + 3y = 12', [
        st("To sketch 2 x plus 3 y equals 12, find where it crosses each axis. When x is 0, 3 y is 12, so y is 4. When y is 0, 2 x is 12, so x is 6.", V.eq('x = 0: y = 4') + V.eq('y = 0: x = 6')),
        st("Plot the points 0, 4 and 6, 0, and join them with a straight line.", V.plot(-1, 7, -1, 5, [{ l: [[0, 4], [6, 0]] }, { p: [0, 4, '(0, 4)'] }, { p: [6, 0, '(6, 0)'] }], { tx: 1, ty: 1, xl: 'x', yl: 'y', title: 'Two points joined by a line' }))]),
      REC("Set x to 0 and y to 0 to find the 2 intercepts, then join them.", ['x = 0 → y-intercept', 'y = 0 → x-intercept', 'Join with a straight line'])] }
  ]);

  /* 848 SIMULTANEOUS EQUATIONS */
  BT.story(848, 'Watch lesson', [
    { title: 'Solving by graph', goal: 'how the intersection of 2 lines solves 2 equations at once.', scenes: [
      SC('Where the lines cross', 'y = x + 1 and y = −x + 5', [
        st("Simultaneous equations ask for values of x and y that satisfy 2 equations at once. If we draw both lines, the solution is the point where they cross.", V.plot(0, 6, 0, 6, [{ l: [[0, 1], [5, 6]] }, { l: [[0, 5], [5, 0]], c: 'var(--good)' }, { p: [2, 3, '(2, 3)'] }], { tx: 1, ty: 1, xl: 'x', yl: 'y', title: 'Where two lines cross' })),
        st("The lines cross at 2, 3. Check in both: 3 equals 2 plus 1, and 3 equals minus 2 plus 5. Both work, so x is 2 and y is 3.", V.eq('3 = 2 + 1 ✓') + V.eq('3 = −2 + 5 ✓') + V.eq('x = 2, y = 3', 'g'))]),
      REC("The solution is where the 2 lines cross. Always check in both equations.", ['Plot both lines', 'Read the crossing point', 'Check in both'])] },
    { title: 'Solving by elimination', goal: 'how to eliminate a variable to solve simultaneous equations.', scenes: [
      SC('Subtract to eliminate', 'x + y = 7 and 2x + y = 11', [
        st("Both equations have a plus y. Subtract the first from the second and the y disappears. 2 x take x is x. 11 take 7 is 4. So x is 4.", V.eq('2x + y = 11') + V.eq('x + y = 7') + V.eq('x = 4', 'g')),
        st("Put x equals 4 into the first equation: 4 plus y equals 7, so y is 3. Check in the second: 8 plus 3 is 11.", V.eq('y = 3', 'g') + V.eq('2(4) + 3 = 11 ✓', 'g') + V.rule('Same sign: subtract. Opposite signs: add.'))]),
      REC("Make the coefficients of 1 letter match. Add or subtract to eliminate it, solve, then substitute back.", ['Match a coefficient', 'Add or subtract', 'Substitute back', 'Check'])] }
  ]);

  /* 849 PYTHAGORAS AND TRIGONOMETRY */
  BT.story(849, 'Watch lesson', [
    { title: 'SOH CAH TOA', goal: 'how to use sine, cosine and tangent to find a missing side.', scenes: [
      SC('Naming the sides', 'Hypotenuse, opposite, adjacent', [
        st("In a right-angled triangle, the hypotenuse is opposite the right angle. The opposite is across from the angle you are using, and the adjacent is next to it. 3 ratios link them: sine is opposite over hypotenuse, cosine is adjacent over hypotenuse, tangent is opposite over adjacent.", V.tbl([['sin θ', 'O ÷ H'], ['cos θ', 'A ÷ H'], ['tan θ', 'O ÷ A']], ['Ratio', 'Sides']) + V.rule('SOH CAH TOA'))]),
      SC('Finding a side', 'Hypotenuse 10 cm, angle 30°', [
        st("The hypotenuse is 10 and the angle is 30 degrees. We want the opposite side. That is sine: sine 30 equals opposite over 10. So opposite equals 10 times sine 30, which is 5 centimetres.", V.rt({ a: 'adjacent', b: 'opposite ?', c: '10 cm', ang: '30°' }) + V.eq('sin 30° = O ÷ 10 → O = 10 × 0.5 = 5 cm', 'g'))]),
      REC("Label the sides first. Choose sine, cosine or tangent from the 2 sides involved.", ['Label O, A, H', 'Choose SOH, CAH or TOA', 'Rearrange and solve'])] },
    { title: 'Finding an angle', goal: 'how to use the inverse trigonometric functions.', scenes: [
      SC('Inverse tangent', 'Opposite 3, adjacent 4', [
        st("If we know 2 sides and want the angle, we use the inverse function. The opposite is 3 and the adjacent is 4. Tangent of the angle is 3 over 4, 0.75.", V.rt({ a: '4', b: '3', c: '', ang: 'θ ?' }) + V.eq('tan θ = 3/4 = 0.75', 'b')),
        st("Now press shift tan on the calculator: inverse tangent of 0.75 is 36.9 degrees.", V.eq('θ = tan⁻¹(0.75) = 36.9°', 'g') + V.rule('Check your calculator is in degrees.'))]),
      REC("To find an angle, use the inverse function: shift sin, cos or tan.", ['Ratio of two known sides', 'Inverse function', 'Degrees mode'])] }
  ]);

  /* 850 THE CIRCLE */
  BT.story(850, 'Watch lesson', [
    { title: 'Circle theorems', goal: 'the angle in a semicircle, the angle at the centre and tangents.', scenes: [
      SC('Angle in a semicircle', 'Always 90°', [
        st("Draw a diameter and join its ends to any point on the circle. The angle at that point is always a right angle. This is the angle in a semicircle theorem.", V.circle() + V.eq('angle in a semicircle = 90°', 'g')),
        st("Another: the angle at the centre is twice the angle at the circumference, when both stand on the same arc. If the angle at the circumference is 40, the angle at the centre is 80.", V.eq('centre = 2 × circumference') + V.eq('2 × 40° = 80°', 'g'))]),
      SC('Tangents', 'Perpendicular to the radius', [
        st("A tangent touches a circle at 1 point. The radius to that point meets the tangent at 90 degrees.", V.eq('tangent ⟂ radius', 'g'))]),
      REC("The angle in a semicircle is 90. The centre angle is double the edge angle. A tangent is perpendicular to the radius.", ['Semicircle: 90°', 'Centre = 2 × edge', 'Tangent ⟂ radius'])] },
    { title: 'Chords and tangent lengths', goal: 'how to use Pythagoras with chords and tangents.', scenes: [
      SC('Chord', 'Radius 5, perpendicular distance 3', [
        st("A perpendicular from the centre to a chord cuts it exactly in half. With radius 5 and perpendicular distance 3, half the chord is a side of a right-angled triangle. 5 squared minus 3 squared is 16, so half the chord is 4.", V.eq('5² − 3² = 16 → half chord = 4') + V.eq('chord = 8', 'g'))]),
      SC('Tangent length', 'A point 13 from the centre', [
        st("A tangent is perpendicular to the radius, so the radius, the tangent and the line to the centre make a right-angled triangle. The hypotenuse is 13 and the radius is 5. 13 squared minus 5 squared is a hundred and 44. The tangent is 12.", V.eq('13² − 5² = 144') + V.eq('tangent = 12', 'g'))]),
      REC("Look for the right angle. A perpendicular to a chord bisects it, and a tangent meets the radius at 90 degrees.", ['Find the right angle', 'Use Pythagoras', 'Double for a whole chord'])] }
  ]);

  /* 851 SIMILARITY, SCALE, BEARINGS, ELEVATION */
  BT.story(851, 'Watch lesson', [
    { title: 'Similar triangles', goal: 'how to use similar triangles to find an unknown length.', scenes: [
      SC('Shadows', 'A pole and a tree', [
        st("A 2 metre pole casts a 3 metre shadow. At the same moment, a tree casts a 12 metre shadow. The sun makes the 2 triangles similar, so the sides are in the same ratio.", V.eq('pole : shadow = 2 : 3', 'b')),
        st("12 is 4 times 3, so the scale factor is 4. The tree is 4 times 2, 8 metres tall.", V.eq('scale factor = 12 ÷ 3 = 4') + V.eq('height = 2 × 4 = 8 m', 'g'))]),
      REC("Match corresponding sides, find the scale factor, then multiply or divide.", ['Match corresponding sides', 'Find the scale factor', 'Apply it'])] },
    { title: 'Angles of elevation', goal: 'how to use tangent to find heights from angles of elevation.', scenes: [
      SC('Looking up', 'A tower 50 m away', [
        st("The angle of elevation is the angle up from the horizontal to the top of something. You stand 50 metres from a tower and the angle of elevation of the top is 35 degrees.", V.rt({ a: '50 m', b: 'h ?', c: '', ang: '35°' })),
        st("We know the adjacent side and want the opposite. That is tangent. h equals 50 times tan 35, which is about 35 metres.", V.eq('tan 35° = h ÷ 50') + V.eq('h = 50 × 0.7002 ≈ 35.0 m', 'g'))]),
      REC("Sketch a right-angled triangle. The angle of elevation is measured up from the horizontal.", ['Draw the right-angled triangle', 'Pick sin, cos or tan', 'Add eye height if needed'])] }
  ]);

  /* 852 STATISTICS AND PROBABILITY */
  BT.story(852, 'Watch lesson', [
    { title: 'Standard deviation', goal: 'how to calculate the standard deviation to measure spread.', scenes: [
      SC('Measuring spread', '2, 4, 6, 8', [
        st("The standard deviation tells us how spread out the data is. Take the data 2, 4, 6, 8. The mean is 5.", V.cards(['2', '4', '6', '8'], ['b'], true) + V.eq('mean = 20 ÷ 4 = 5')),
        st("Find each value minus the mean, and square it: minus 3 squared is 9, minus 1 squared is 1, 1 squared is 1, 3 squared is 9. They add to 20.", V.tbl([['2', '−3', '9'], ['4', '−1', '1'], ['6', '1', '1'], ['8', '3', '9']], ['x', 'x − mean', 'squared']) + V.eq('sum = 20')),
        st("Divide by n minus 1, which is 3: 6.67. Take the square root: 2.58.", V.eq('s = √(20 ÷ 3) ≈ 2.58', 'g') + V.rule('Divide by n − 1, then square root.'))]),
      REC("Subtract the mean, square, add, divide by n minus 1, take the square root.", ['x − mean', 'Square and add', '÷ (n − 1)', 'Square root'])] },
    { title: 'Quartiles and box plots', goal: 'how to find quartiles and draw a box plot.', scenes: [
      SC('Five-figure summary', '3, 5, 6, 8, 9, 12, 14', [
        st("Put the data in order. The median is the middle value, 8. The lower quartile is the middle of the lower half, 5. The upper quartile is the middle of the upper half, 12.", V.cards(['3', '5', '6', '8', '9', '12', '14'], ['b'], true) + V.tbl([['Q1', '5'], ['median', '8'], ['Q3', '12']], ['', 'value'])),
        st("The interquartile range is the upper quartile minus the lower quartile, 12 minus 5, 7. A box plot shows the minimum, quartiles, median and maximum.", boxplot() + V.eq('IQR = 12 − 5 = 7', 'g'))]),
      REC("Order the data, find the median, then the medians of each half. The IQR is Q3 minus Q1.", ['Order the data', 'Q1, median, Q3', 'IQR = Q3 − Q1'])] }
  ]);

  /* 853 SPATIAL */
  BT.story(853, 'Watch lesson', [
    { title: 'Vectors as journeys', goal: 'how to describe a movement with a vector.', scenes: [
      SC('Column vectors', 'Right and up', [
        st("A vector describes a journey. The top number is how far right, and the bottom number is how far up. Negative means left or down. The vector 3, 2 is 3 right and 2 up.", V.plot(0, 5, 0, 4, [{ l: [[1, 1], [4, 3]] }, { p: [1, 1, 'A', 'var(--accent)'] }, { p: [4, 3, 'B', 'var(--good)'] }], { tx: 1, ty: 1 , title: 'A vector journey from A to B' }) + V.eq('AB = (3, 2)', 'g')),
        st("To add vectors, add the tops and add the bottoms. 3, 2 plus 1, minus 4 gives 4, minus 2. To double a vector, double both numbers.", V.eq('(3, 2) + (1, −4) = (4, −2)') + V.eq('2(3, 2) = (6, 4)', 'g'))]),
      REC("Top is across, bottom is up. Add vectors component by component.", ['Top: across, bottom: up', 'Add tops and bottoms', 'Multiply both numbers'])] },
    { title: 'The magnitude of a vector', goal: 'how to find the length of a vector.', scenes: [
      SC('Pythagoras again', '|(3, 2)|', [
        st("The magnitude is the length of the vector. The vector goes 3 across and 2 up, so it is the hypotenuse of a right-angled triangle. 3 squared plus 2 squared is 13. The magnitude is root 13, about 3.61.", V.rt({ a: '3', b: '2', c: '|a| = ?' }) + V.eq('|a| = √(3² + 2²) = √13 ≈ 3.61', 'g'))]),
      REC("The magnitude of a vector is found with Pythagoras on its 2 components.", ['Square both components', 'Add', 'Square root'])] }
  ]);
})();
