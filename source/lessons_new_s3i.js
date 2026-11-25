(function () {
  var BT = window.BT; if (!BT || !BT.L || !BT.sv || !BT.lk) return;
  var L = BT.L, V = BT.sv, E = L.E, S = L.st, SC = L.SC,
    g = function (t) { return E(t, 'g'); }, r = function (t) { return E(t, 'r'); };
  function N(title, goal, scenes) { L.full(title, scenes); return L.ep(title, goal, []); }

  /* ---- reflection and congruence ---- */
  N('How do you reflect shapes and decide whether shapes are congruent?', 'how to reflect a shape in a mirror line, and what it means for shapes to be congruent.', [
    SC('Reflection', 'Start with the basics', [
      S("A reflection flips a shape over a mirror line, like your face in a mirror. The shape keeps its size and shape. Each point goes the same distance behind the mirror as it was in front, directly across.", V.rule('Same distance, other side.')),
      S("We will use triangle A, with corners at 1, 1. 3, 1. And 1, 4. Let us reflect it in different mirror lines.", E('A: (1, 1), (3, 1), (1, 4)', 'b'))
    ]),
    SC('The y-axis', 'Example 1: reflect in the y-axis', [
      S("The y-axis is the vertical line through 0. A point reflects to the other side, with the same height. The x coordinate changes sign. The y coordinate stays. So x, y becomes minus x, y.", E('(x, y) → (−x, y)', 'g')),
      S("1, 1 becomes minus 1, 1. 3, 1 becomes minus 3, 1. 1, 4 becomes minus 1, 4.", E('(1, 1) → (−1, 1)') + E('(3, 1) → (−3, 1)') + E('(1, 4) → (−1, 4)'))
    ]),
    SC('The x-axis', 'Example 2: reflect in the x-axis', [
      S("The x-axis is the horizontal line through 0. Now the y coordinate changes sign. x, y becomes x, minus y. 1, 1 becomes 1, minus 1. 3, 1 becomes 3, minus 1. 1, 4 becomes 1, minus 4.", E('(x, y) → (x, −y)', 'g') + E('(1, −1), (3, −1), (1, −4)'))
    ]),
    SC('The line y = x', 'Example 3: swapping', [
      S("The line y equals x goes diagonally through 0. Reflecting in it swaps the coordinates. x, y becomes y, x. 1, 1 stays at 1, 1, because it is on the mirror line. 3, 1 becomes 1, 3. 1, 4 becomes 4, 1.", E('(x, y) → (y, x)', 'g') + E('(1, 1), (1, 3), (4, 1)')),
      S("A point on the mirror line does not move.", V.rule('Points on the mirror stay put.'))
    ]),
    SC('A line like x = 3', 'Example 4: a vertical mirror line', [
      S("Reflect in the line x equals 3. We count the distance to the mirror. The point 1, 1 is 2 units to the left of the line. So the image is 2 units to the right, at 5, 1. The point 3, 1 is on the line, and stays. The point 1, 4 goes to 5, 4.", E('(1, 1) → (5, 1)') + E('(3, 1) → (3, 1)') + E('(1, 4) → (5, 4)')),
      S("A formula for this. If the mirror line is x equals a, the new x is 2 a minus the old x. 2 times 3, 6, minus 1, 5.", E('x′ = 2a − x = 6 − 1 = 5', 'g'))
    ]),
    SC('Describing', 'Example 5: describing a reflection', [
      S("To describe a reflection fully, give the mirror line. If triangle A goes to a triangle with corners minus 1, 1, minus 3, 1 and minus 1, 4, the reflection is in the y-axis. Always say, reflection in the line, and give its equation.", g('Reflection in the line x = 0 (the y-axis)'))
    ]),
    SC('Congruent shapes', 'Example 6: what congruent means', [
      S("2 shapes are congruent if they are exactly the same shape and size. 1 can be moved onto the other by sliding, turning, or flipping. They can be in different positions or flipped over, but not enlarged. Reflections, rotations and translations keep a shape congruent. Enlargements do not.", V.list(['Reflection: congruent', 'Rotation: congruent', 'Translation: congruent', 'Enlargement: NOT congruent']))
    ]),
    SC('Triangles', 'Example 7: proving 2 triangles are congruent', [
      S("We do not need to check everything. For triangles there are 4 tests. 3 sides the same, called S S S. 2 sides and the angle between them the same, S A S. 2 angles and a side the same, A S A. And for right-angled triangles, the hypotenuse and 1 other side the same, R H S.", V.list(['SSS: three sides', 'SAS: 2 sides and the angle between', 'ASA: 2 angles and a side', 'RHS: right angle, hypotenuse, side'])),
      S("Triangle 1 has sides 5, 6 and 7. Triangle 2 has sides 7, 5 and 6. Same 3 lengths. So they are congruent by S S S.", g('Congruent (SSS)'))
    ]),
    SC('Not enough', 'Example 8: 3 angles are not enough', [
      S("2 triangles each have angles 60, 60 and 60. 1 has sides 3. The other has sides 6. They have the same shape but different sizes. They are similar, not congruent. So A A A, 3 angles, does not prove congruence.", r('Angles equal: not enough'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Changing the wrong coordinate. Reflect the point 3, 5 in the y-axis. Wrong: 3, minus 5. That is a reflection in the x-axis. The y-axis is vertical, so the x coordinate changes sign. Minus 3, 5.", r('(3, 5) → (3, −5)  ✗') + g('(3, 5) → (−3, 5)  ✓')),
      S("Mistake two. Measuring the distance to the mirror line from the wrong place. Reflect the point 1, 2 in the line x equals 4. Wrong: go the same distance as from the y-axis, to minus 1, 2. The mirror line is x equals 4. The point is 3 to the left of it, so the image is 3 to the right. 7, 2.", r('(1, 2) → (−1, 2)  ✗') + g('(1, 2) → (7, 2)  ✓')),
      S("Mistake three. Describing a reflection without the mirror line, or saying a bigger copy is congruent. A triangle with sides 2, 3, 4 and 1 with sides 4, 6, 8. Wrong: they are congruent. The sides are doubled. They are similar, but not the same size.", r('2,3,4 and 4,6,8: congruent  ✗') + g('Similar, not congruent  ✓'))
    ]),
    L.turn("Your turn! Number one. Reflect the point 4, 2 in the x-axis. Pause and try it.", E('(4, 2)'), "The y coordinate changes sign. 4, minus 2.", g('(4, −2)')),
    L.turn("Your turn! Number two. Reflect the point 2, 5 in the line y equals x. Pause and try it.", E('(2, 5)'), "Swap the coordinates. 5, 2.", g('(5, 2)')),
    L.turn("Your turn! Number three. Triangle P has sides 3, 4, 5. Triangle Q has sides 3, 4, 5. Are they congruent? Give the reason. Pause and try it.", E('3, 4, 5 and 3, 4, 5'), "Yes, because all 3 sides are equal. S S S.", g('Congruent (SSS)')),
    L.rec('How do you reflect shapes and decide whether shapes are congruent?', "A reflection flips a shape over a mirror line, with each point the same distance on the other side. In the y-axis, x changes sign. In the x-axis, y changes sign. In y equals x, swap the coordinates. Congruent shapes are the same size and shape. Reflections, rotations and translations keep shapes congruent, enlargements do not. Triangles are congruent by SSS, SAS, ASA or RHS.", ['Same distance, other side', 'y-axis: (−x, y)', 'Congruent: same size and shape', 'SSS, SAS, ASA, RHS'])
  ]);

  /* ---- combined transformations ---- */
  N('How do you carry out combined transformations?', 'how to translate, rotate and enlarge shapes, and how the order changes the result.', [
    SC('Transformations', 'Start with the basics', [
      S("A transformation moves or changes a shape. There are 4. Translation, which slides. Reflection, which flips. Rotation, which turns. And enlargement, which changes the size. A combined transformation does 1 after another.", V.list(['Translation: slide', 'Reflection: flip', 'Rotation: turn', 'Enlargement: resize'])),
      S("We will use triangle A with corners at 1, 1. 2, 1. And 1, 3.", E('A: (1, 1), (2, 1), (1, 3)', 'b'))
    ]),
    SC('Translation', 'Example 1: a vector', [
      S("A translation is described by a column vector. The top number is how far right. The bottom number is how far up. A negative top number means left. A negative bottom number means down. The vector 2, 3 means 2 right and 3 up.", E('(2, 3): right 2, up 3', 'g')),
      S("Add the vector to each point. 1, 1 becomes 3, 4. 2, 1 becomes 4, 4. 1, 3 becomes 3, 6.", E('(1, 1) → (3, 4)') + E('(2, 1) → (4, 4)') + E('(1, 3) → (3, 6)'))
    ]),
    SC('Rotation', 'Example 2: 90° clockwise about the origin', [
      S("A rotation needs 3 things. The angle, the direction, and the centre. For 90 degrees clockwise about the origin, the point x, y goes to y, minus x.", E('(x, y) → (y, −x)', 'g')),
      S("1, 1 becomes 1, minus 1. 2, 1 becomes 1, minus 2. 1, 3 becomes 3, minus 1.", E('(1, 1) → (1, −1)') + E('(2, 1) → (1, −2)') + E('(1, 3) → (3, −1)')),
      S("A check. Take the point 1, 3. It is up and a bit right. Turning clockwise a quarter turn, it ends right and a bit down, 3, minus 1. That matches.", V.rule('Check with a quick sketch.'))
    ]),
    SC('Anticlockwise', 'Example 3: the other direction', [
      S("For 90 degrees anticlockwise, the point x, y goes to minus y, x. 1, 3 goes to minus 3, 1. For a hundred and 80 degrees, either direction, x, y goes to minus x, minus y.", E('90° anticlockwise: (x, y) → (−y, x)') + E('180°: (x, y) → (−x, −y)'))
    ]),
    SC('Enlargement', 'Example 4: scale factor 2, centre the origin', [
      S("An enlargement needs a scale factor and a centre. With the centre at the origin, multiply both coordinates by the scale factor. Scale factor 2. 1, 1 becomes 2, 2. 2, 1 becomes 4, 2. 1, 3 becomes 2, 6.", E('(x, y) → (2x, 2y)', 'g') + E('(2, 2), (4, 2), (2, 6)')),
      S("The new triangle has sides twice as long. Notice that every point is twice as far from the centre.", V.rule('Twice as far from the centre.'))
    ]),
    SC('A fraction', 'Example 5: scale factor 1 half', [
      S("A scale factor between 0 and 1 makes the shape smaller. Scale factor one half, centre the origin. 2, 4 goes to 1, 2. 6, 2 goes to 3, 1.", E('(2, 4) → (1, 2)') + E('(6, 2) → (3, 1)'))
    ]),
    SC('Combined', 'Example 6: rotate, then translate', [
      S("Now combine 2 transformations. First, rotate A 90 degrees clockwise about the origin. We found the corners 1, minus 1. 1, minus 2. 3, minus 1. Second, translate by the vector 2, 3. Add 2 to x and 3 to y.", E('(1, −1), (1, −2), (3, −1)')),
      S("1, minus 1 becomes 3, 2. 1, minus 2 becomes 3, 1. 3, minus 1 becomes 5, 2. The final triangle is at 3, 2. 3, 1. 5, 2.", E('(3, 2), (3, 1), (5, 2)', 'g'))
    ]),
    SC('Order matters', 'Example 7: not always the same', [
      S("Take the point 1, 2. Translate it by 3, 0, then reflect in the y-axis. Translate first. 4, 2. Reflect. Minus 4, 2.", E('(1, 2) → (4, 2) → (−4, 2)')),
      S("Now do it in the other order. Reflect first. Minus 1, 2. Then translate by 3, 0. 2, 2. Different! The order matters.", E('(1, 2) → (−1, 2) → (2, 2)') + r('(−4, 2) ≠ (2, 2)'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Rotating the wrong way. Rotate 1, 2 90 degrees clockwise about the origin. Wrong: use the anticlockwise rule, minus 2, 1. Clockwise gives y, minus x. 2, minus 1. Check with a sketch. 1, 2 is up and right. A quarter turn clockwise is down and right.", r('(1, 2) → (−2, 1)  ✗') + g('(1, 2) → (2, −1)  ✓')),
      S("Mistake two. Enlarging only one coordinate. Enlarge 3, 2 by scale factor 2 from the origin. Wrong: 6, 2. Both coordinates are multiplied. 6, 4.", r('(3, 2) → (6, 2)  ✗') + g('(3, 2) → (6, 4)  ✓')),
      S("Mistake three. Mixing up the vector. The vector minus 2, 3 means 2 left and 3 up. Wrong: 2 right and 3 up, so the point 4, 1 goes to 6, 4. Take away 2 from x. 2, 4.", r('(4, 1) → (6, 4)  ✗') + g('(4, 1) → (2, 4)  ✓'))
    ]),
    SC('In real life', 'Animation', [
      S("Games and films use transformations all the time. A character slides, turns and grows, 1 transformation after another. The computer applies each one in order, to every point.", V.note('Computer graphics'))
    ]),
    L.turn("Your turn! Number one. Translate the point 3, 5 by the vector minus 1, 2. Pause and try it.", E('(3, 5) + (−1, 2)'), "Two, seven.", g('(2, 7)')),
    L.turn("Your turn! Number two. Rotate 2, 1 90 degrees clockwise about the origin. Pause and try it.", E('(2, 1)'), "The rule is y, minus x. 1, minus 2.", g('(1, −2)')),
    L.turn("Your turn! Number three. Enlarge 4, 6 by scale factor one half, centre the origin. Pause and try it.", E('(4, 6)'), "Half of each. 2, 3.", g('(2, 3)')),
    L.rec('How do you carry out combined transformations?', "A translation slides a shape by a vector. A rotation needs an angle, a direction and a centre. An enlargement needs a scale factor and a centre. For combined transformations, do them 1 at a time in order, because the order can change the result. Always check with a quick sketch.", ['Translation: add the vector', 'Rotation: angle, direction, centre', 'Enlargement: multiply both', 'Order matters'])
  ]);

  /* ---- growth patterns ---- */
  N('How do linear, quadratic and exponential patterns grow?', 'how to tell patterns apart using differences and ratios, and how quickly each one grows.', [
    SC('Patterns', 'Start with the basics', [
      S("A sequence is a list of numbers in a pattern. We want to know how it grows. 3 kinds are very important. Linear, quadratic and exponential. They grow at very different speeds.", V.list(['Linear: add the same each time', 'Quadratic: differences grow steadily', 'Exponential: multiply each time']))
    ]),
    SC('Linear', 'Example 1: 5, 8, 11, 14', [
      S("Look at the differences. 8 minus 5 is 3. 11 minus 8 is 3. 14 minus 11 is 3. The difference is the same each time. This is a linear sequence. The nth term is 3 n plus 2.", E('Differences: 3, 3, 3') + g('nth term = 3n + 2')),
      S("Check. The first term, 3 times 1 plus 2, is 5. The fourth, 3 times 4 plus 2, is 14.", E('3(1) + 2 = 5 ✓') + E('3(4) + 2 = 14 ✓'))
    ]),
    SC('Quadratic', 'Example 2: 2, 5, 10, 17', [
      S("The differences. 3, 5, 7. They are not the same. Now find the differences of the differences. 2, 2. These second differences are constant. That is the sign of a quadratic sequence.", E('Differences: 3, 5, 7') + E('Second differences: 2, 2', 'g')),
      S("The second difference is 2, so the nth term starts with n squared. Compare with n squared, which is 1, 4, 9, 16. Each term of ours is one more. So the nth term is n squared plus 1.", E('n²: 1, 4, 9, 16') + g('nth term = n² + 1'))
    ]),
    SC('Exponential', 'Example 3: 3, 6, 12, 24', [
      S("The differences are 3, 6, 12. They are not constant and the second differences are not constant. Look at the ratios. 6 over 3 is 2. 12 over 6 is 2. 24 over 12 is 2. Each term is multiplied by 2. This is exponential growth.", E('Ratios: 2, 2, 2', 'g')),
      S("The nth term is 3 times 2 to the power n minus 1. Check. The fourth term is 3 times 2 cubed, 24.", g('nth term = 3 × 2ⁿ⁻¹') + E('3 × 2³ = 24 ✓'))
    ]),
    SC('Doubling', 'Example 4: a penny a day', [
      S("Suppose you get 1p on day 1, and it doubles every day. Day 2, 2p. Day 3, 4. Day 10 is 2 to the power 9. 512p, £5.12. Day 20 is 2 to the power 19. 524,000, 288p. Over £5,000. Day 30. More than 5 million pounds.", V.tbl([['10', '£5.12'], ['20', '£5242.88'], ['30', '£5 368 709.12']], ['Day', 'Amount'])),
      S("Compare with adding 10p a day. Day 30 is only £2.91. Doubling wins by a huge margin.", E('Adding 10p a day: day 30 = £2.91', 'r'))
    ]),
    SC('Compound growth', 'Example 5: money in the bank', [
      S("Compound interest is exponential. £100 at 10%. Each year it is multiplied by 1.1. Year 1, a hundred and 10. Year 2, a hundred and 21. Year 3, a hundred and 33.1. After n years it is a hundred times 1.1 to the power n.", E('100 × 1.1ⁿ', 'g') + E('110, 121, 133.10'))
    ]),
    SC('Comparing', 'Example 6: n² against 2ⁿ', [
      S("Which grows faster, n squared or 2 to the power n? At n equals 4, both are 16. At 5, 25 against 32. At 10, 100 against 1,024. Exponential growth always overtakes.", V.tbl([['4', '16', '16'], ['5', '25', '32'], ['10', '100', '1024']], ['n', 'n²', '2ⁿ']))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Confusing 2 to the power n with 2 n. At n equals 5, 2 to the power 5 is 32. 2 times 5 is 10. Wrong: the fifth term of the doubling sequence is 10. The terms are 2, 4, 8, 16, 32.", r('2⁵ = 10  ✗') + g('2⁵ = 2×2×2×2×2 = 32  ✓')),
      S("Mistake two. Using the linear nth term for an exponential sequence. 3, 6, 12, 24. Wrong: 3 n. At n equals 4, 3 times 4 is 12, not 24. This sequence is multiplied by 2 each time.", r('3n: 3, 6, 9, 12  ✗') + g('3 × 2ⁿ⁻¹: 3, 6, 12, 24  ✓')),
      S("Mistake three. Confusing n squared with 2 n. At n equals 5, n squared is 25. 2 times 5 is 10. Wrong: the sequence 1, 4, 9, 16, 25 has nth term 2 n. 2 n gives 2, 4, 6. The terms are squares.", r('2n: 2, 4, 6, 8, 10  ✗') + g('n²: 1, 4, 9, 16, 25  ✓'))
    ]),
    L.turn("Your turn! Number one. The sequence is 4, 9, 14, 19. Is it linear, quadratic or exponential? Pause and think.", E('4, 9, 14, 19'), "The differences are all 5. Linear.", g('Linear, 5n − 1')),
    L.turn("Your turn! Number two. The sequence is 1, 3, 9, 27. What is the next term? Pause and try it.", E('1, 3, 9, 27'), "Multiply by 3 each time. 81.", g('81')),
    L.turn("Your turn! Number three. The sequence is 2, 6, 12, 20. The second differences are all 2. What kind is it? Pause and think.", E('2, 6, 12, 20'), "Quadratic.", g('Quadratic')),
    L.rec('How do linear, quadratic and exponential patterns grow?', "In a linear sequence the differences are constant. In a quadratic sequence the second differences are constant, and the nth term contains n squared. In an exponential sequence each term is multiplied by the same ratio. Exponential growth soon overtakes the others. Compound interest is exponential.", ['Linear: constant differences', 'Quadratic: constant second differences', 'Exponential: constant ratio', 'Exponential overtakes'])
  ]);

  /* ---- nets, views and cubes ---- */
  N('How do you work with nets, views and stacks of cubes?', 'how to recognise nets of cubes, draw views of cube stacks, and count the cubes and their faces.', [
    SC('3D shapes', 'Start with the basics', [
      S("In spatial reasoning, we work out what a 3D shape looks like from different directions, and what it looks like unfolded. A net is a flat shape that folds into a solid. We will look at nets of cubes, stacks of cubes, and the views we see from the top and sides.", V.list(['Net: unfolded solid', 'Plan: view from above', 'Elevation: view from the side']))
    ]),
    SC('Nets of a cube', 'Example 1: which flat shapes fold?', [
      S("A cube has 6 square faces, so a net of a cube has 6 squares joined edge to edge. There are exactly 11 different nets. Here are the rules for testing a net.", V.list(['Exactly six squares', 'No 4 squares in a 2 × 2 block', 'No row of more than four', 'When folded, no 2 squares overlap'])),
      S("A cross shape works. A row of 4, with 1 square above and 1 below. Fold the middle 4 around, and the top and bottom close the ends.", g('Cross: valid net'))
    ]),
    SC('Not a net', 'Example 2: a 2 × 3 block', [
      S("A block of 2 rows of 3 squares has 6 squares, but it does not fold into a cube. It has a 2 by 2 block inside, and when folded, squares would overlap. Not a net.", r('2 × 3 block: not a net')),
      S("A row of 5 squares with one more square cannot work either. A row of more than 4 squares would wrap around and overlap.", V.rule('Do not use a row of 5.'))
    ]),
    SC('Opposite faces', 'Example 3: finding the opposite face', [
      S("In a row of 4 squares, the first and third are opposite. So are the second and fourth. If the squares of the row are labelled A, B, C, D, then A is opposite C, and B is opposite D. Use this to find which colour is opposite which.", E('Row A B C D: A opposite C, B opposite D', 'g'))
    ]),
    SC('Counting cubes', 'Example 4: a stack with a plan view', [
      S("A stack of cubes is shown by a plan view with numbers. Each number is how many cubes are stacked in that spot. The front row has 2, 1. The back row has 3, 1. Add the numbers. 2 plus 1 plus 3 plus 1 is 7 cubes.", V.tbl([['3', '1'], ['2', '1']], ['Back', ''])),
      S("Step one. The front elevation, viewed from the front, shows the tallest in each column. Left column, 3. Right column, 1. Step two. The side elevation viewed from the right shows the tallest in each row. Back row, 3. Front row, 2.", E('Front: heights 3, 1') + E('Right side: heights 3, 2'))
    ]),
    SC('Surface area', 'Example 5: a line of columns', [
      S("A stack in 1 line has columns of height 3, 1 and 2. There are 6 cubes. Each cube has 6 faces, 36 in all. Faces that touch are hidden. Count the touching pairs. In the column of 3, 2. In the column of 2, 1. Between the columns, the lower of the 2 heights. Min of 3 and 1 is 1. Min of 1 and 2 is 1. Total 5 touching pairs. Each hides 2 faces.", E('6 cubes × 6 faces = 36') + E('Touching pairs: 2 + 0 + 1 + 1 + 1 = 5')),
      S("The surface area, in squares, is 36 minus 10. 26.", g('36 − 2 × 5 = 26 squares'))
    ]),
    SC('Painted cubes', 'Example 6: a 3 × 3 × 3 cube', [
      S("A big cube made of 27 small cubes is painted on the outside, and then taken apart. How many small cubes have paint on 3 faces? The corners. A cube has 8 corners. 8 cubes.", E('Corners: 8 cubes with 3 faces painted', 'g')),
      S("2 faces painted. The edge pieces, not corners. Each of the 12 edges has 1. 12 cubes. 1 face painted. The middle of each face. 6 faces, 1 each. 6 cubes. No face painted. The very middle. 1 cube.", E('Edges: 12 with 2 faces') + E('Face centres: 6 with 1 face') + E('Centre: 1 with 0 faces')),
      S("Check. 8 plus 12 plus 6 plus 1 is 27. Every cube is counted.", E('8 + 12 + 6 + 1 = 27 ✓'))
    ]),
    SC('A bigger cube', 'Example 7: 4 × 4 × 4', [
      S("64 small cubes. Corners, still 8. Edges. Each edge has 2 cubes that are not corners. 12 edges, 24. Faces. Each face has a 2 by 2 middle, 4 cubes. 6 faces, 24. Inside. 2 by 2 by 2, 8.", E('8 + 24 + 24 + 8 = 64 ✓', 'g'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Missing hidden cubes. A stack has a back row of 3 and 1, and a front row of 2 and 1. Wrong: from the front you see 2 and 1, so the stack has 3 cubes. There is a row behind. The plan view total is 7.", r('Front view only: 3 cubes  ✗') + g('Whole plan: 3 + 1 + 2 + 1 = 7  ✓')),
      S("Mistake two. Counting only 4 corners of a cube. A big cube has 8 corners, 4 on the top and 4 on the bottom. Wrong: 4 cubes with 3 faces painted. The answer is 8.", r('4 corners  ✗') + g('8 corners  ✓')),
      S("Mistake three. Accepting a net with 4 squares in a block. 6 squares arranged as a 2 by 2 block with 2 more squares. Wrong: it folds into a cube. The block would overlap itself, so it is not a net. Test with the rules.", r('2 × 2 block inside: not a net  ✗ accepted') + g('Reject nets with a 2 × 2 block  ✓'))
    ]),
    L.turn("Your turn! Number one. How many faces does a cube have? And how many squares are in its net? Pause and think.", E('?'), "6 faces, 6 squares.", g('6 and 6')),
    L.turn("Your turn! Number two. A stack has a plan view with numbers 2, 3, 1, 1. How many cubes in total? Pause and try it.", E('2, 3, 1, 1'), "2 plus 3 plus 1 plus 1 is 7.", g('7')),
    L.turn("Your turn! Number three. A 3 by 3 by 3 cube is painted and taken apart. How many small cubes have exactly 1 painted face? Pause and try it.", E('3 × 3 × 3'), "1 for the middle of each of the 6 faces. 6.", g('6')),
    L.rec('How do you work with nets, views and stacks of cubes?', "A net of a cube has 6 squares, with no 2 by 2 block and no overlaps when folded. A plan view with numbers shows how many cubes are in each place, and the total is the sum. A painted cube has 8 corners with 3 faces, 12 edges with 2, 6 face centres with 1, and 1 hidden middle. Always check that your counts add to the total.", ['6 squares, no 2×2 block', 'Plan: add the numbers', 'Corners 8, edges 12, faces 6', 'Check the total'])
  ]);

  /* ---- logic and ordering ---- */
  N('How do you solve ordering and logic puzzles?', 'how to organise clues, put things in order, and decide what must be true.', [
    SC('Logic', 'Start with the basics', [
      S("Logic puzzles give you a few clues, and you have to work out what must be true. There is no guessing. The method is to draw a picture, such as a number line or a table, and fit each clue in.", V.rule('Draw it. Fit each clue.'))
    ]),
    SC('Ordering', 'Example 1: a race', [
      S("4 runners. Anna, Ben, Cara and Dan. Clue 1. Ben finished ahead of Anna. Clue 2. Cara finished behind Anna. Clue 3. Dan finished ahead of Ben. Who was first, second, third and fourth?", V.list(['Ben ahead of Anna', 'Cara behind Anna', 'Dan ahead of Ben'])),
      S("Step one. Write each clue as a chain, with the winner on the left. Ben, then Anna. Anna, then Cara. Dan, then Ben.", E('B → A') + E('A → C') + E('D → B')),
      S("Step two. Join the chains. Dan is ahead of Ben. Ben is ahead of Anna. Anna is ahead of Cara. So the order is Dan, Ben, Anna, Cara.", g('1st Dan, 2nd Ben, 3rd Anna, 4th Cara')),
      S("Step three. Check every clue. Ben ahead of Anna, yes. Cara behind Anna, yes. Dan ahead of Ben, yes.", V.rule('Check every clue.'))
    ]),
    SC('Taller than', 'Example 2: a chain', [
      S("Sam is taller than Ravi. Ravi is taller than Lee. Lee is taller than Mia. Is Sam taller than Mia? Yes. If A is bigger than B, and B is bigger than C, then A is bigger than C. This is called transitivity. Draw it as a line. Sam, Ravi, Lee, Mia, from tallest to shortest.", E('Sam > Ravi > Lee > Mia', 'g'))
    ]),
    SC('A gap', 'Example 3: what we cannot tell', [
      S("Tom is taller than Uma. Tom is taller than Vic. Who is taller, Uma or Vic? We cannot tell. Both are shorter than Tom, but the clues do not compare them. In logic, saying we cannot tell is a valid answer.", E('Uma ? Vic') + V.rule('Not enough information.'))
    ]),
    SC('Odd one out', 'Example 4: numbers', [
      S("Which is the odd 1 out? 16, 25, 36, 48. Look for a property most share. 16 is 4 squared. 25 is 5 squared. 36 is 6 squared. 48 is not a square number. So 48 is the odd 1 out.", E('16, 25, 36 are squares; 48 is not', 'g')),
      S("Be careful. There can be more than 1 reason. In 2, 4, 6, 9, the 9 is odd, and also the only one that is not even. Check each possible property.", V.rule('Test each property.'))
    ]),
    SC('All, some, none', 'Example 5: deduction', [
      S("All squares have 4 equal sides. The shape ABCD is a square. What must be true? ABCD has 4 equal sides. That follows from the statement.", g('Valid: ABCD has 4 equal sides')),
      S("Now. All squares are rectangles. The shape P is a rectangle. Is P a square? Not necessarily. A rectangle that is 2 by 4 is not a square. We cannot say.", E('All squares are rectangles') + r('P is a rectangle → P is a square?  Not necessarily'))
    ]),
    SC('Table', 'Example 6: matching', [
      S("3 friends, Asha, Ben and Cleo, have 3 pets. A cat, a dog and a fish. Asha does not have the dog. Ben has the fish. Who has the cat? Ben has the fish, so Asha and Cleo have the cat and the dog. Asha does not have the dog, so Asha has the cat. Cleo has the dog.", V.tbl([['Asha', 'Cat'], ['Ben', 'Fish'], ['Cleo', 'Dog']], ['Friend', 'Pet'])),
      S("Use a grid, and cross out impossible choices. Each time you place 1, cross it out in its row and column.", V.rule('Cross out what is impossible.'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Reversing the order of a clue. The clue says Ben finished ahead of Anna. Wrong: write Anna, then Ben, so Anna is first. Ahead means closer to the front. Ben, then Anna.", r('Anna → Ben  ✗') + g('Ben → Anna  ✓')),
      S("Mistake two. Assuming a statement works backwards. All dogs are animals. Rex is an animal. Wrong: Rex is a dog. Rex could be a cat. The statement only works from dog to animal, not from animal to dog.", r('Rex is an animal, so a dog  ✗') + g('We cannot tell  ✓')),
      S("Mistake three. Not checking all the clues at the end. A race puzzle, answer Dan, Anna, Ben, Cara. Check clue 1. Ben ahead of Anna. But Anna is ahead of Ben here. Wrong. Go back and fix it. Dan, Ben, Anna, Cara.", r('Dan, Anna, Ben, Cara  ✗') + g('Dan, Ben, Anna, Cara  ✓'))
    ]),
    L.turn("Your turn! Number one. P is older than Q. Q is older than R. Who is the youngest? Pause and try it.", E('P > Q > R'), "R.", g('R')),
    L.turn("Your turn! Number two. Which is the odd 1 out? 3, 5, 7, 9. Think about prime numbers. Pause and try it.", E('3, 5, 7, 9'), "9 is not prime. 3, 5 and 7 are.", g('9')),
    L.turn("Your turn! Number three. All birds have feathers. A penguin is a bird. What must be true? Pause and try it.", E('?'), "A penguin has feathers.", g('A penguin has feathers')),
    L.rec('How do you solve ordering and logic puzzles?', "Draw the clues as a chain, a number line or a grid. Join the chains to find the order, then check every clue. If a is bigger than b and b bigger than c, then a is bigger than c. A statement that all A are B does not mean all B are A. Sometimes the answer is that we cannot tell.", ['Draw a chain or grid', 'Join the clues', 'Check every clue', 'Cannot tell is valid'])
  ]);

  L.use(853, ['What is symmetry in 2D shapes?', 'How do you reflect shapes and decide whether shapes are congruent?', 'How do you carry out combined transformations?', 'Vectors as journeys', 'The magnitude of a vector', 'How do linear, quadratic and exponential patterns grow?', 'How do you work with nets, views and stacks of cubes?', 'Painted cubes and stacks', 'How do you solve ordering and logic puzzles?']);
})();
