/* lessons_s3a.js: S3 Watch lessons for the 16 third level questions given to S3. */
(function () {
  'use strict';
  var BT = window.BT; if (!BT || !BT.L || !BT.L.lesson) return;
  var L = BT.L, V = BT.sv, LK = BT.lk, E = L.E, LS = L.lesson;
  var SPA = window.SPA, cubes = function (h) { return SPA && SPA.cubes ? SPA.cubes(h, 215, null, true) : ''; };

  LS('How do you evaluate powers and express whole numbers as powers?', 'how to work out powers and write numbers as powers of a base.', {
    intro: ['Powers', 'Base and index', "In 3 to the power 4, 3 is the base and 4 is the index. It means 3 multiplied by itself 4 times.", E('3⁴ = 3 × 3 × 3 × 3 = 81', 'g')],
    ex: [['Evaluating', 'Work them out', [["2 to the power 7 is 128. 10 to the power 5 is 100,000. 5 cubed is 125.", E('2⁷ = 128 · 10⁵ = 100,000 · 5³ = 125', 'g')]]],
      ['Writing as a power', 'Find the base and index', [["64 is 2 times itself 6 times: 2 to the six. It is also 4 cubed and 8 squared.", E('64 = 2⁶ = 4³ = 8²', 'g')]]],
      ['Powers of ten', 'Place value', [["1,000 is 10 cubed. 1 million is 10 to the six.", E('1,000 = 10³ · 1,000,000 = 10⁶', 'g')]]],
      ['Using a calculator', 'The power key', [["Use the power key: 1.5 to the power 4 is 5.0625.", E('1.5⁴ = 5.0625', 'g')]]]],
    real: ['Doubling', "A bacterium splits in 2 every hour. After 10 hours, 1 becomes 2 to the 10: 1,024.", E('2¹⁰ = 1,024', 'g')],
    turn: ["Your turn! Write 243 as a power of 3. Pause and try it.", E('243 = 3^?'), "3, 9, 27, 81, 243: 3 to the five.", E('3⁵', 'g')],
    rec: ["A power multiplies the base by itself index times. To write a number as a power, keep dividing by the base and count.", ['Base and index', 'aⁿ: a × a × … n times', 'Divide repeatedly to find n', 'Some numbers have several forms']],
    deep: ['Powers grow fast, which is why they describe things like doubling populations.', '2⁷ is 128, not 14: the index counts multiplications, it isn’t multiplied.']
  });

  LS('How do you write a number as a product of its prime factors?', 'how to use factor trees and division to write numbers as products of primes.', {
    intro: ['Prime factors', 'Building blocks', "Every whole number greater than one can be written as a product of primes in exactly one way.", E('90 = 2 × 3 × 3 × 5', 'g')],
    ex: [['Factor tree', '90', [["Split 90 into 9 and 10. 9 is 3 times 3; 10 is 2 times 5. So 2 times 3 squared times 5.", E('90 = 2 × 3² × 5', 'g')]]],
      ['Repeated division', '168', [["Divide by the smallest prime repeatedly: 168, 84, 42, 21, then by 3: 7. 2 cubed times 3 times 7.", E('168 = 2³ × 3 × 7', 'g')]]],
      ['HCF from primes', '90 and 168', [["Shared primes: one two and one three. HCF is six.", E('HCF = 2 × 3 = 6', 'g')]]],
      ['LCM from primes', '90 and 168', [["Use the highest power of each prime: 2 cubed, 3 squared, 5, 7: 2,520.", E('LCM = 2³ × 3² × 5 × 7 = 2,520', 'g')]]]],
    real: ['Codes', "Internet security uses the fact that it is very hard to find the prime factors of huge numbers.", V.note('Big primes keep messages safe')],
    turn: ["Your turn! Write 120 as a product of prime factors. Pause and try it.", E('120 = ?'), "2 cubed times 3 times 5.", E('2³ × 3 × 5', 'g')],
    rec: ["Use a factor tree or repeated division until every factor is prime. Write repeats as powers. Use prime factors to find the HCF and LCM.", ['Factor tree or division', 'End with primes only', 'Use index form', 'HCF: shared · LCM: highest powers']],
    deep: ['Prime factorisation is unique, like a fingerprint for each number.', 'Check by multiplying your primes back together.']
  });

  LS('How do you calculate percentage changes?', 'how to work out percentage increases and decreases, and apply them.', {
    intro: ['Percentage change', 'Compare with the original', "Percentage change tells us how big a change is compared with where we started.", E('% change = change ÷ original × 100', 'g')],
    ex: [['Increase', '£48 to £54', [["The change is six pounds. Six divided by forty-eight times one hundred: twelve point five per cent increase.", E('6 ÷ 48 × 100 = 12.5%', 'g')]]],
      ['Decrease', '1,250 to 1,000', [["The change is 250. 250 divided by 1,250: 20% decrease.", E('250 ÷ 1,250 × 100 = 20%', 'g')]]],
      ['Applying a change', 'Multipliers', [["Increase 320 by 15%: times 1.15, 368. Decrease it by 15%: times 0 point 8 5, 272.", E('320 × 1.15 = 368 · 320 × 0.85 = 272', 'g')]]],
      ['Profit and loss', 'Percentage profit', [["Bought for £40, sold for 52: a £12 profit, 30%.", E('12 ÷ 40 × 100 = 30%', 'g')]]]],
    real: ['Population', "A town grew from 18,000 to 19,800: an increase of 10%.", E('1,800 ÷ 18,000 × 100 = 10%', 'g')],
    turn: ["Your turn! A price falls from £80 to £68. What is the percentage decrease? Pause and try it.", E('12 ÷ 80 × 100'), "Fifteen per cent.", E('15%', 'g')],
    rec: ["Find the change, divide by the original, multiply by 100. To apply a change, use a multiplier.", ['Change = new − original', '÷ original × 100', 'Increase: × (1 + r)', 'Decrease: × (1 − r)']],
    deep: ['Dividing by the original makes changes comparable, whatever the starting size.', 'Always divide by the original, not the new value.']
  });

  LS('How do you convert currencies?', 'how to convert money between currencies using exchange rates.', {
    intro: ['Exchange rates', 'Different money', "An exchange rate tells you how much of one currency you get for one unit of another.", E('£1 = €1.16 · £1 = $1.27', 'g')],
    ex: [['Pounds to euros', 'Multiply', [["Three hundred and fifty pounds at one point one six euros per pound: four hundred and six euros.", E('350 × 1.16 = €406', 'g')]]],
      ['Euros to pounds', 'Divide', [["232 euros divided by 1.16: £200.", E('232 ÷ 1.16 = £200', 'g')]]],
      ['Comparing prices', 'Where is cheaper?', [["Trainers cost £75 in Glasgow or 85 euros in Paris. 85 euros is £73.28, so Paris is slightly cheaper.", E('€85 ÷ 1.16 ≈ £73.28', 'g')]]],
      ['Between two foreign currencies', 'Via pounds', [["To change dollars to euros, change dollars to pounds first, then pounds to euros.", E('$ → £ → €', 'g')]]]],
    real: ['Holiday money', "With £500 and a rate of 1 euro 12, but a 2% fee, you receive 548 euros 80.", E('490 × 1.12 = €548.80', 'g')],
    turn: ["Your turn! At £1 to 1 dollar 25, how many pounds is 100 dollars? Pause and try it.", E('100 ÷ 1.25'), "Eighty pounds.", E('£80', 'g')],
    rec: ["Multiply by the rate to change from pounds; divide by it to change back to pounds. Compare prices in the same currency.", ['£ → other: × rate', 'Other → £: ÷ rate', 'Compare in one currency', 'Watch for fees']],
    deep: ['Multiplying or dividing depends on which way the rate is written: check the units.', 'A sensible check: if £1 buys more than 1 euro, you should get more euros than pounds.']
  });

  LS('How do you generate a formula from a sequence?', 'how to find the nth term formula of a linear sequence and use it.', {
    intro: ['Formula for a sequence', 'The nth term', "A formula for the nth term lets you find any term directly from its position.", V.cards(['7', '11', '15', '19', '…'], ['b'])],
    ex: [['Finding the formula', '7, 11, 15, 19', [["The difference is 4, so start with 4 n. 4 n gives 4, 8, 12; we need 3 more each time. Formula: 4 n plus 3.", E('nth term = 4n + 3', 'g')]]],
      ['Decreasing sequence', '30, 25, 20, 15', [["The difference is negative 5: negative 5 n. Negative 5 plus 35 is 30. Formula: 35 minus 5 n.", E('nth term = 35 − 5n', 'g')]]],
      ['Using the formula', 'The 50th term', [["For 4 n plus 3, the fiftieth term is 203.", E('4 × 50 + 3 = 203', 'g')]]],
      ['Patterns of shapes', 'Matchsticks', [["Triangles in a row use 3, 5, 7 matchsticks: 2 n plus 1.", E('M = 2n + 1', 'g')]]]],
    turn: ["Your turn! Find the nth term of 2, 8, 14, 20. Pause and try it.", E('2, 8, 14, 20'), "The difference is 6. 6 n gives 6, so take 4: 6 n minus 4.", E('6n − 4', 'g')],
    rec: ["Find the common difference; it goes in front of n. Adjust with a constant so the first term matches. Use the formula for any term.", ['Common difference', 'd × n', 'Adjust to the first term', 'Substitute n']],
    deep: ['The common difference is the gradient if you plotted the sequence.', 'Check your formula with at least two terms.']
  });

  LS('How do you simplify algebraic terms?', 'how to collect like terms and simplify products and quotients of terms.', {
    intro: ['Like terms', 'Same letters, same powers', "Like terms have exactly the same letters and powers. Only like terms can be added or subtracted.", E('3x + 5x = 8x · 3x + 5y stays', 'g')],
    ex: [['Collecting', 'Mix of terms', [["4 a plus 3 b minus a plus 2 b: 3 a plus 5 b.", E('4a + 3b − a + 2b = 3a + 5b', 'g')]]],
      ['Powers are different', 'x and x²', [["2 x squared plus 3 x plus x squared: 3 x squared plus 3 x. x and x squared are not like terms.", E('2x² + 3x + x² = 3x² + 3x', 'g')]]],
      ['Multiplying terms', 'Numbers then letters', [["3 a b times 4 a: 12 a squared b.", E('3ab × 4a = 12a²b', 'g')]]],
      ['Dividing terms', 'Cancel', [["12 x squared y divided by 4 x: 3 x y.", E('12x²y ÷ 4x = 3xy', 'g')]]]],
    turn: ["Your turn! Simplify 5 p minus 2 q plus 3 p plus q. Pause and try it.", E('5p − 2q + 3p + q'), "Eight p minus q.", E('8p − q', 'g')],
    rec: ["Collect like terms by adding their coefficients. Multiply numbers, then letters, adding powers. Divide by cancelling.", ['Like terms: same letters and powers', 'Add the numbers in front', 'Multiply: add powers', 'Divide: cancel']],
    deep: ['Collecting like terms is like counting the same objects: 3 apples + 5 apples = 8 apples.', 'x and x² are different terms and can’t be added.']
  });

  LS('How do you substitute numbers into an expression?', 'how to replace letters with numbers and evaluate expressions.', {
    intro: ['Substitution', 'Replace letters with numbers', "To evaluate an expression, replace each letter with its value, then work it out using the order of operations.", V.rule('Use brackets when you substitute negatives.')],
    ex: [['A simple one', 'a = 4, b = 3', [["5 a minus 2 b: 20 take away 6 is 14.", E('5 × 4 − 2 × 3 = 14', 'g')]]],
      ['With powers', 'x = 3', [["2 x squared: square first, 9, then double: 18. Not 6 squared.", E('2x² = 2 × 9 = 18', 'g')]]],
      ['With negatives', 'x = −2', [["x squared plus 3 x: 4 plus negative 6 is negative 2.", E('(−2)² + 3(−2) = 4 − 6 = −2', 'g')]]],
      ['Formulae', 'v = u + at', [["With u 10, a 3, t 5: 10 plus 15 is 25.", E('v = 10 + 3 × 5 = 25', 'g')]]]],
    turn: ["Your turn! Find three p squared minus q when p is two and q is five. Pause and try it.", E('3p² − q'), "3 times 4 is 12, take away 5 is 7.", E('7', 'g')],
    rec: ["Replace each letter with its value, in brackets if negative, then use BODMAS. Powers come before multiplying.", ['Replace each letter', 'Brackets round negatives', 'BODMAS', 'Powers before ×']],
    deep: ['Putting negatives in brackets stops sign mistakes when squaring.', '2x² means 2 × x², not (2x)².']
  });

  LS('How do you solve linear equations?', 'how to solve linear equations, including brackets and unknowns on both sides.', {
    intro: ['Linear equations', 'Keep it balanced', "A linear equation has an unknown with no powers. Solve it by doing the same to both sides until the letter is alone.", E('3x + 4 = 19 → x = 5', 'g')],
    ex: [['Two steps', '3x + 4 = 19', [["Subtract 4: 3 x equals 15. Divide by 3: x equals 5.", E('x = 5', 'g')]]],
      ['Brackets', '2(x − 3) = 14', [["Expand: 2 x minus 6 equals 14. Add 6: 2 x equals 20. x equals 10.", E('x = 10', 'g')]]],
      ['Both sides', '7x − 5 = 3x + 11', [["Subtract 3 x: 4 x minus 5 equals 11. Add 5: 4 x equals 16. x equals 4.", E('x = 4', 'g')]]],
      ['Fractions', 'x/3 + 2 = 6', [["Subtract 2: x over 3 equals 4. Multiply by 3: x equals 12.", E('x = 12', 'g')]]]],
    turn: ["Your turn! Solve 5, bracket, x plus 1, equals 3 x plus 17. Pause and try it.", E('5(x + 1) = 3x + 17'), "5 x plus 5 equals 3 x plus 17. 2 x equals 12. x equals 6.", E('x = 6', 'g')],
    rec: ["Expand brackets, collect the letter on one side, then undo operations in reverse order. Check by substituting.", ['Expand brackets', 'Letters to one side', 'Undo + and −, then × and ÷', 'Check']],
    deep: ['Every step keeps the equation balanced, so the solution never changes.', 'When moving a term, change its sign: you are subtracting it from both sides.']
  });

  LS('How do you create and solve simple equations?', 'how to turn a problem into an equation and solve it.', {
    intro: ['From words to equations', 'Let x be the unknown', "Many problems can be solved by writing an equation. Choose a letter for the unknown and write what the problem says.", V.list(['Choose a letter', 'Write the equation', 'Solve it', 'Answer the question'])],
    ex: [['Think of a number', 'A puzzle', [["I think of a number, multiply by 5 and subtract 8. The answer is 32. 5 n minus 8 equals 32, so n is 8.", E('5n − 8 = 32 → n = 8', 'g')]]],
      ['Angles', 'In a triangle', [["A triangle's angles are x, 2 x and 3 x. They add to 180: 6 x equals 180, x equals 30. The angles are 30, 60 and 90.", E('6x = 180 → x = 30', 'g')]]],
      ['Perimeter', 'A rectangle', [["A rectangle has width w and length w plus 5. Its perimeter is 34. 4 w plus 10 equals 34, so w is 6. It is 6 by 11.", E('4w + 10 = 34 → w = 6', 'g')]]],
      ['Money', 'Two items', [["A pen costs p pence and a pad costs 3 times as much. Together they cost £1.20. 4 p equals 120, p is 30.", E('4p = 120 → p = 30', 'g')]]]],
    turn: ["Your turn! 3 consecutive numbers add to 48. Write and solve an equation. Pause and try it.", E('n + (n + 1) + (n + 2) = 48'), "3 n plus 3 equals 48, so n is 15. The numbers are 15, 16 and 17.", E('15, 16, 17', 'g')],
    rec: ["Choose a letter for the unknown, write the problem as an equation, solve it, and give the answer in context.", ['Define the letter', 'Write the equation', 'Solve', 'Answer in words and check']],
    deep: ['Writing an equation turns a wordy problem into a short, solvable statement.', 'Say what your letter stands for, and check the answer fits the story.']
  });

  LS('How do you create and use algebraic formulae?', 'how to write formulae from situations and use them.', {
    intro: ['Formulae', 'Rules with letters', "A formula is a rule that connects quantities, like P equals 2 l plus 2 w for the perimeter of a rectangle.", E('P = 2l + 2w', 'g')],
    ex: [['Writing a formula', 'A taxi', [["A taxi charges £3 plus £1.80 per mile. Cost C for m miles: C equals 3 plus 1.8 m.", E('C = 3 + 1.8m', 'g')]]],
      ['Using it', '10 miles', [["3 plus 18: £21.", E('C = 3 + 1.8 × 10 = £21', 'g')]]],
      ['Working backwards', 'How far?', [["A fare of £30: 3 plus 1.8 m equals 30, so m is 15 miles.", E('1.8m = 27 → m = 15', 'g')]]],
      ['Rearranging', 'Change the subject', [["From C equals 3 plus 1.8 m: m equals C minus 3, over 1.8.", E('m = (C − 3) ÷ 1.8', 'g')]]]],
    real: ['Mobile phone', "A plan costs £8 a month plus 10p per minute over the limit: C equals 8 plus 0 point 1 m.", E('C = 8 + 0.1m', 'g')],
    turn: ["Your turn! Write a formula for the total cost T of n cinema tickets at £7.50 each plus a £2 booking fee. Pause and try it.", E('T = ?'), "T equals 7.5 n plus 2.", E('T = 7.5n + 2', 'g')],
    rec: ["Write a formula by spotting the fixed part and the part that changes. Substitute to use it; rearrange to find another quantity.", ['Fixed part + changing part', 'Substitute values', 'Solve to work backwards', 'Rearrange to change subject']],
    deep: ['A formula like C = 3 + 1.8m is a straight-line graph: 3 is the start, 1.8 the rate.', 'Say what each letter means and what units it uses.']
  });

  LS('How do you construct triangles?', 'how to construct triangles accurately with a ruler, protractor and compasses.', {
    intro: ['Constructing triangles', 'Accurate drawing', "To construct a triangle accurately, you need three facts. Depending on what you know, use a ruler and protractor, or a ruler and compasses.", V.list(['Three sides: compasses', 'Two sides and the angle between: protractor', 'Two angles and a side: protractor'])],
    ex: [['Three sides', '5 cm, 7 cm, 8 cm', [["Draw the eight centimetre base. Open compasses to five centimetres and draw an arc from one end. Open to seven and draw an arc from the other end. Join to where the arcs cross.", V.rule('Base first, then arcs that cross.')]]],
      ['Two sides and an angle', 'SAS', [["Draw a 6 centimetre base. At 1 end measure 50 degrees with a protractor and draw a line 9 centimetres long. Join the ends.", E('6 cm, 50°, 9 cm', 'g')]]],
      ['Two angles and a side', 'ASA', [["Draw a 7 centimetre base. Measure 40 degrees at 1 end and 65 at the other. Extend the lines until they meet.", E('40°, 7 cm, 65°', 'g')]]],
      ['Can it be drawn?', 'The triangle rule', [["Sides three, four and nine can't make a triangle: the two shorter sides must add up to more than the longest.", E('3 + 4 < 9 → impossible', 'b')]]]],
    turn: ["Your turn! Can you construct a triangle with sides 5, 6 and 12? Pause and think.", E('5 + 6 vs 12'), "No: 5 plus 6 is 11, which is less than 12.", E('No', 'g')],
    rec: ["Choose the method from the facts you have. Draw the base first. Use compasses for three sides, a protractor for angles. Check the two shorter sides add to more than the longest.", ['SSS: compasses', 'SAS and ASA: protractor', 'Base first', 'Shorter sides > longest']],
    deep: ['Compass arcs show every point at a fixed distance, so where they cross is exactly the right corner.', 'Leave construction arcs showing: they prove the triangle is accurate.']
  });

  LS('What are the properties of 3D objects?', 'how to describe 3D objects by faces, edges, vertices, nets and cross-sections.', {
    intro: ['3D properties', 'Describing solids', "We describe 3D objects by their faces, edges and vertices, the shapes of their faces, their nets and their cross-sections.", cubes([[2, 2], [2, 2]])],
    ex: [['Counting', 'Faces, edges, vertices', [["A triangular prism has five faces, nine edges and six vertices. A square-based pyramid has five faces, eight edges and five vertices.", V.tbl([['Cube', '6', '12', '8'], ['Triangular prism', '5', '9', '6'], ['Square pyramid', '5', '8', '5'], ['Tetrahedron', '4', '6', '4']], ['Solid', 'F', 'E', 'V'])]]],
      ['Euler’s formula', 'F + V − E = 2', [["For any polyhedron, faces plus vertices minus edges equals 2. Cube: 6 plus 8 minus 12 is 2.", E('F + V − E = 2', 'g')]]],
      ['Cross-sections', 'Slices', [["A prism has the same cross-section everywhere. A cylinder's cross-section is a circle; a cone's gets smaller towards the top.", V.cards(['Prism: constant', 'Cylinder: circle', 'Cone: shrinking circle'], ['b', 'p', 'g'])]]],
      ['Planes of symmetry', 'Mirror slices', [["A plane of symmetry cuts a solid into two mirror halves. A cube has nine.", E('cube: 9 planes of symmetry', 'g')]]]],
    turn: ["Your turn! A solid has 8 faces and 12 vertices. How many edges? Pause and use Euler's formula.", E('8 + 12 − E = 2'), "E is eighteen.", E('18 edges', 'g')],
    rec: ["Describe solids by faces, edges and vertices, face shapes, nets, cross-sections and planes of symmetry. For polyhedra, F + V − E = 2.", ['F, E, V', 'Euler: F + V − E = 2', 'Cross-sections', 'Planes of symmetry']],
    deep: ['Euler’s formula is a surprising rule that holds for every solid with flat faces and no holes.', 'Count edges carefully: each edge is shared by 2 faces.']
  });

  LS('What are angles in triangles and quadrilaterals?', 'how to use angle sums and properties of triangles and quadrilaterals.', {
    intro: ['Angle sums', 'Triangles and quadrilaterals', "The angles in a triangle add to 180 degrees. The angles in a quadrilateral add to 360.", V.tbl([['Triangle', '180°'], ['Quadrilateral', '360°']], ['Shape', 'Angle sum'])],
    ex: [['Triangle', 'Missing angle', [["Angles of 52 and 79 degrees: the third is 49.", E('180° − 52° − 79° = 49°', 'g')]]],
      ['Isosceles triangle', 'Base angles equal', [["An isosceles triangle with a top angle of 36 degrees has 2 base angles of 72.", E('(180° − 36°) ÷ 2 = 72°', 'g')]]],
      ['Quadrilateral', 'Missing angle', [["Angles of 90, 115 and 75: the fourth is 80.", E('360° − 280° = 80°', 'g')]]],
      ['Special quadrilaterals', 'Using properties', [["In a parallelogram, opposite angles are equal and neighbours add to 180. If 1 angle is 65, the others are 115, 65, 115.", E('65°, 115°, 65°, 115°', 'g')]]],
      ['Exterior angle of a triangle', 'Equals the two opposite', [["An exterior angle of a triangle equals the two interior angles opposite it added together.", E('ext = a + b', 'g')]]]],
    turn: ["Your turn! A kite has angles of 110, 110 and 60. Find the fourth. Pause and try it.", E('360° − 280°'), "Eighty degrees.", E('80°', 'g')],
    rec: ["Triangle angles add to 180; quadrilateral angles to 360. Use properties like equal base angles and equal opposite angles.", ['Triangle: 180°', 'Quadrilateral: 360°', 'Isosceles: equal base angles', 'Parallelogram: opposite angles equal']],
    deep: ['A quadrilateral splits into 2 triangles, which is why its angles add to 2 × 180°.', 'Mark equal angles and sides on the diagram before calculating.']
  });

  LS('What is a linear scale factor?', 'how a linear scale factor enlarges or reduces lengths, and its effect on area.', {
    intro: ['Linear scale factor', 'Multiplying lengths', "A linear scale factor tells you how many times longer each length becomes in an enlargement or reduction.", E('new length = old length × k', 'g')],
    ex: [['Enlargement', 'k = 3', [["A rectangle 4 by 2 centimetres with scale factor 3 becomes 12 by 6.", E('4 × 3 = 12 · 2 × 3 = 6', 'g')]]],
      ['Reduction', 'k = ¼', [["A scale factor of 1 quarter makes every length a quarter. 20 centimetres becomes 5.", E('20 × ¼ = 5', 'g')]]],
      ['Finding k', 'new ÷ old', [["A side of 8 becomes 14. The scale factor is 14 divided by 8: 1.75.", E('k = 14 ÷ 8 = 1.75', 'g')]]],
      ['Effect on area', 'Square it', [["With scale factor 3, the area becomes 9 times bigger: 8 square centimetres becomes 72.", E('8 × 3² = 72 cm²', 'g')]]]],
    real: ['Models and maps', "A model car is built at a scale of 1 to 43. A real car 4.3 metres long is a 10 centimetre model.", E('430 cm ÷ 43 = 10 cm', 'g')],
    turn: ["Your turn! A photo nine centimetres wide is reduced to six centimetres. What is the scale factor? Pause and try it.", E('6 ÷ 9'), "Two thirds.", E('k = ⅔', 'g')],
    rec: ["Multiply every length by the linear scale factor. Find it by dividing a new length by the matching old length. Areas scale by k squared.", ['New = old × k', 'k = new ÷ old', 'k > 1 enlarges, k < 1 reduces', 'Area × k²']],
    deep: ['Angles never change in an enlargement, only lengths.', 'Area does not scale by k: a scale factor of 2 makes areas 4 times bigger.']
  });

  LS('What is symmetry in 2D shapes?', 'line symmetry and rotational symmetry in 2D shapes.', {
    intro: ['Symmetry', 'Two kinds', "A shape has line symmetry if it folds onto itself along a mirror line. It has rotational symmetry if it fits onto itself during a turn.", V.cards(['Line: fold', 'Rotational: turn'], ['b', 'g'])],
    ex: [['Lines of symmetry', 'Regular polygons', [["A regular polygon has as many lines of symmetry as sides: a regular hexagon has six.", E('regular n-gon: n lines', 'g')]]],
      ['Order of rotational symmetry', 'Times it fits', [["The order is how many times it fits onto itself in a full turn. A regular hexagon has order six; a rectangle has order two.", V.tbl([['Square', '4', '4'], ['Rectangle', '2', '2'], ['Rhombus', '2', '2'], ['Kite', '1', '1'], ['Parallelogram', '0', '2']], ['Shape', 'Lines', 'Order'])]]],
      ['Completing a shape', 'Reflect in the line', [["To complete a symmetrical shape, reflect each point across the mirror line, the same distance on the other side.", LK.grid(8, 4, function (i, j) { return (i === 2 && j <= 2) || (i === 3 && j === 2) || (i === 5 && j <= 2) || (i === 4 && j === 2); }, { u: 30, mirror: 4, alt: 'A symmetrical shape' })]]],
      ['Letters', 'Symmetry around us', [["H has two lines and order two. S has no lines but order two. Z also has order two.", V.cards(['H: 2 lines, order 2', 'S: 0 lines, order 2'], ['b', 'p'])]]]],
    turn: ["Your turn! How many lines of symmetry does an equilateral triangle have, and what is its order? Pause and think.", E('?'), "Three lines and order three.", E('3 lines · order 3', 'g')],
    rec: ["Line symmetry: the shape folds onto itself. Rotational symmetry: it fits onto itself as it turns. Regular polygons have as many lines and as high an order as they have sides.", ['Line: mirror fold', 'Order: fits in one turn', 'Regular n-gon: n and n', 'Complete by reflecting']],
    deep: ['Every shape has rotational order at least 1, because a full turn always fits.', 'A parallelogram has rotational symmetry but no lines of symmetry.']
  });

  LS('How do you interpret and describe data?', 'how to describe and compare data using averages, spread and charts.', {
    intro: ['Interpreting data', 'What does it tell us?', "Interpreting data means describing what charts and statistics show, comparing groups, and drawing conclusions.", V.list(['Describe the pattern', 'Use an average', 'Use a measure of spread', 'Make a conclusion'])],
    ex: [['Comparing averages', 'Two classes', [["Class A has a mean score of 64; Class B 69. On average, Class B scored higher.", E('69 > 64', 'g')]]],
      ['Comparing spread', 'Range or IQR', [["Class A's range is 40; Class B's is 15. Class B's scores were more consistent.", E('15 < 40 → B more consistent', 'g')]]],
      ['Reading charts', 'Trends', [["A line graph of temperatures rising from January to July shows an upward trend, then falling in autumn.", V.note('Describe the trend in words')]]],
      ['Misleading graphs', 'Be careful', [["A bar chart whose axis starts at 90 makes small differences look huge. Always check the scale.", V.note('Check the scale starts sensibly')]]]],
    turn: ["Your turn! Team X has a median of 12 goals and an IQR of 3; Team Y has a median of 12 and an IQR of 9. Compare them. Pause and think.", E('?'), "They score the same on average, but Team X is more consistent.", E('Same average · X more consistent', 'g')],
    rec: ["Compare data with one average and one measure of spread, in context. Describe trends in charts, and check scales for misleading displays.", ['Average: which is higher?', 'Spread: which is more consistent?', 'Use context words', 'Check the scales']],
    deep: ['A good comparison always mentions both an average and a spread.', 'Write conclusions in context: "Class B scored higher on average", not just "69 > 64".']
  });
})();
