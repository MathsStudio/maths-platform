(function () {
  var BT = window.BT; if (!BT || !BT.L || !BT.sv || !BT.lk) return;
  var L = BT.L, V = BT.sv, E = L.E, S = L.st, SC = L.SC,
    g = function (t) { return E(t, 'g'); }, r = function (t) { return E(t, 'r'); };
  function N(title, goal, scenes) { L.full(title, scenes); return L.ep(title, goal, []); }

  /* ---- reflection and congruence ---- */
  N('How do you reflect shapes and decide whether shapes are congruent?', 'how to reflect a shape in a mirror line, and what it means for shapes to be congruent.', [
    SC('Reflection', 'Start with the basics', [
      S("A reflection flips a shape over a mirror line, like your face in a mirror. The shape keeps its size and shape. Each point goes the same distance behind the mirror as it was in front, directly across.", V.rule('Same distance, other side.')),
      S("We will use triangle A, with corners at one, one. Three, one. And one, four. Let us reflect it in different mirror lines.", E('A: (1, 1), (3, 1), (1, 4)', 'b'))
    ]),
    SC('The y-axis', 'Example 1: reflect in the y-axis', [
      S("The y-axis is the vertical line through zero. A point reflects to the other side, with the same height. The x coordinate changes sign. The y coordinate stays. So x, y becomes minus x, y.", E('(x, y) → (−x, y)', 'g')),
      S("One, one becomes minus one, one. Three, one becomes minus three, one. One, four becomes minus one, four.", E('(1, 1) → (−1, 1)') + E('(3, 1) → (−3, 1)') + E('(1, 4) → (−1, 4)'))
    ]),
    SC('The x-axis', 'Example 2: reflect in the x-axis', [
      S("The x-axis is the horizontal line through zero. Now the y coordinate changes sign. x, y becomes x, minus y. One, one becomes one, minus one. Three, one becomes three, minus one. One, four becomes one, minus four.", E('(x, y) → (x, −y)', 'g') + E('(1, −1), (3, −1), (1, −4)'))
    ]),
    SC('The line y = x', 'Example 3: swapping', [
      S("The line y equals x goes diagonally through zero. Reflecting in it swaps the coordinates. x, y becomes y, x. One, one stays at one, one, because it is on the mirror line. Three, one becomes one, three. One, four becomes four, one.", E('(x, y) → (y, x)', 'g') + E('(1, 1), (1, 3), (4, 1)')),
      S("A point on the mirror line does not move.", V.rule('Points on the mirror stay put.'))
    ]),
    SC('A line like x = 3', 'Example 4: a vertical mirror line', [
      S("Reflect in the line x equals three. We count the distance to the mirror. The point one, one is two units to the left of the line. So the image is two units to the right, at five, one. The point three, one is on the line, and stays. The point one, four goes to five, four.", E('(1, 1) → (5, 1)') + E('(3, 1) → (3, 1)') + E('(1, 4) → (5, 4)')),
      S("A formula for this. If the mirror line is x equals a, the new x is two a minus the old x. Two times three, six, minus one, five.", E('x′ = 2a − x = 6 − 1 = 5', 'g'))
    ]),
    SC('Describing', 'Example 5: describing a reflection', [
      S("To describe a reflection fully, give the mirror line. If triangle A goes to a triangle with corners minus one, one, minus three, one and minus one, four, the reflection is in the y-axis. Always say, reflection in the line, and give its equation.", g('Reflection in the line x = 0 (the y-axis)'))
    ]),
    SC('Congruent shapes', 'Example 6: what congruent means', [
      S("Two shapes are congruent if they are exactly the same shape and size. One can be moved onto the other by sliding, turning, or flipping. They can be in different positions or flipped over, but not enlarged. Reflections, rotations and translations keep a shape congruent. Enlargements do not.", V.list(['Reflection: congruent', 'Rotation: congruent', 'Translation: congruent', 'Enlargement: NOT congruent']))
    ]),
    SC('Triangles', 'Example 7: proving two triangles are congruent', [
      S("We do not need to check everything. For triangles there are four tests. Three sides the same, called S S S. Two sides and the angle between them the same, S A S. Two angles and a side the same, A S A. And for right-angled triangles, the hypotenuse and one other side the same, R H S.", V.list(['SSS: three sides', 'SAS: two sides and the angle between', 'ASA: two angles and a side', 'RHS: right angle, hypotenuse, side'])),
      S("Triangle one has sides five, six and seven. Triangle two has sides seven, five and six. Same three lengths. So they are congruent by S S S.", g('Congruent (SSS)'))
    ]),
    SC('Not enough', 'Example 8: three angles are not enough', [
      S("Two triangles each have angles sixty, sixty and sixty. One has sides three. The other has sides six. They have the same shape but different sizes. They are similar, not congruent. So A A A, three angles, does not prove congruence.", r('Angles equal: not enough'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Changing the wrong coordinate. Reflect the point three, five in the y-axis. Wrong: three, minus five. That is a reflection in the x-axis. The y-axis is vertical, so the x coordinate changes sign. Minus three, five.", r('(3, 5) → (3, −5)  ✗') + g('(3, 5) → (−3, 5)  ✓')),
      S("Mistake two. Measuring the distance to the mirror line from the wrong place. Reflect the point one, two in the line x equals four. Wrong: go the same distance as from the y-axis, to minus one, two. The mirror line is x equals four. The point is three to the left of it, so the image is three to the right. Seven, two.", r('(1, 2) → (−1, 2)  ✗') + g('(1, 2) → (7, 2)  ✓')),
      S("Mistake three. Describing a reflection without the mirror line, or saying a bigger copy is congruent. A triangle with sides two, three, four and one with sides four, six, eight. Wrong: they are congruent. The sides are doubled. They are similar, but not the same size.", r('2,3,4 and 4,6,8: congruent  ✗') + g('Similar, not congruent  ✓'))
    ]),
    L.turn("Your turn! Number one. Reflect the point four, two in the x-axis. Pause and try it.", E('(4, 2)'), "The y coordinate changes sign. Four, minus two.", g('(4, −2)')),
    L.turn("Your turn! Number two. Reflect the point two, five in the line y equals x. Pause and try it.", E('(2, 5)'), "Swap the coordinates. Five, two.", g('(5, 2)')),
    L.turn("Your turn! Number three. Triangle P has sides three, four, five. Triangle Q has sides three, four, five. Are they congruent? Give the reason. Pause and try it.", E('3, 4, 5 and 3, 4, 5'), "Yes, because all three sides are equal. S S S.", g('Congruent (SSS)')),
    L.rec('How do you reflect shapes and decide whether shapes are congruent?', "A reflection flips a shape over a mirror line, with each point the same distance on the other side. In the y-axis, x changes sign. In the x-axis, y changes sign. In y equals x, swap the coordinates. Congruent shapes are the same size and shape. Reflections, rotations and translations keep shapes congruent, enlargements do not. Triangles are congruent by SSS, SAS, ASA or RHS.", ['Same distance, other side', 'y-axis: (−x, y)', 'Congruent: same size and shape', 'SSS, SAS, ASA, RHS'])
  ]);

  /* ---- combined transformations ---- */
  N('How do you carry out combined transformations?', 'how to translate, rotate and enlarge shapes, and how the order changes the result.', [
    SC('Transformations', 'Start with the basics', [
      S("A transformation moves or changes a shape. There are four. Translation, which slides. Reflection, which flips. Rotation, which turns. And enlargement, which changes the size. A combined transformation does one after another.", V.list(['Translation: slide', 'Reflection: flip', 'Rotation: turn', 'Enlargement: resize'])),
      S("We will use triangle A with corners at one, one. Two, one. And one, three.", E('A: (1, 1), (2, 1), (1, 3)', 'b'))
    ]),
    SC('Translation', 'Example 1: a vector', [
      S("A translation is described by a column vector. The top number is how far right. The bottom number is how far up. A negative top number means left. A negative bottom number means down. The vector two, three means two right and three up.", E('(2, 3): right 2, up 3', 'g')),
      S("Add the vector to each point. One, one becomes three, four. Two, one becomes four, four. One, three becomes three, six.", E('(1, 1) → (3, 4)') + E('(2, 1) → (4, 4)') + E('(1, 3) → (3, 6)'))
    ]),
    SC('Rotation', 'Example 2: 90° clockwise about the origin', [
      S("A rotation needs three things. The angle, the direction, and the centre. For ninety degrees clockwise about the origin, the point x, y goes to y, minus x.", E('(x, y) → (y, −x)', 'g')),
      S("One, one becomes one, minus one. Two, one becomes one, minus two. One, three becomes three, minus one.", E('(1, 1) → (1, −1)') + E('(2, 1) → (1, −2)') + E('(1, 3) → (3, −1)')),
      S("A check. Take the point one, three. It is up and a bit right. Turning clockwise a quarter turn, it ends right and a bit down, three, minus one. That matches.", V.rule('Check with a quick sketch.'))
    ]),
    SC('Anticlockwise', 'Example 3: the other direction', [
      S("For ninety degrees anticlockwise, the point x, y goes to minus y, x. One, three goes to minus three, one. For a hundred and eighty degrees, either direction, x, y goes to minus x, minus y.", E('90° anticlockwise: (x, y) → (−y, x)') + E('180°: (x, y) → (−x, −y)'))
    ]),
    SC('Enlargement', 'Example 4: scale factor 2, centre the origin', [
      S("An enlargement needs a scale factor and a centre. With the centre at the origin, multiply both coordinates by the scale factor. Scale factor two. One, one becomes two, two. Two, one becomes four, two. One, three becomes two, six.", E('(x, y) → (2x, 2y)', 'g') + E('(2, 2), (4, 2), (2, 6)')),
      S("The new triangle has sides twice as long. Notice that every point is twice as far from the centre.", V.rule('Twice as far from the centre.'))
    ]),
    SC('A fraction', 'Example 5: scale factor one half', [
      S("A scale factor between zero and one makes the shape smaller. Scale factor one half, centre the origin. Two, four goes to one, two. Six, two goes to three, one.", E('(2, 4) → (1, 2)') + E('(6, 2) → (3, 1)'))
    ]),
    SC('Combined', 'Example 6: rotate, then translate', [
      S("Now combine two transformations. First, rotate A ninety degrees clockwise about the origin. We found the corners one, minus one. One, minus two. Three, minus one. Second, translate by the vector two, three. Add two to x and three to y.", E('(1, −1), (1, −2), (3, −1)')),
      S("One, minus one becomes three, two. One, minus two becomes three, one. Three, minus one becomes five, two. The final triangle is at three, two. Three, one. Five, two.", E('(3, 2), (3, 1), (5, 2)', 'g'))
    ]),
    SC('Order matters', 'Example 7: not always the same', [
      S("Take the point one, two. Translate it by three, zero, then reflect in the y-axis. Translate first. Four, two. Reflect. Minus four, two.", E('(1, 2) → (4, 2) → (−4, 2)')),
      S("Now do it in the other order. Reflect first. Minus one, two. Then translate by three, zero. Two, two. Different! The order matters.", E('(1, 2) → (−1, 2) → (2, 2)') + r('(−4, 2) ≠ (2, 2)'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Rotating the wrong way. Rotate one, two ninety degrees clockwise about the origin. Wrong: use the anticlockwise rule, minus two, one. Clockwise gives y, minus x. Two, minus one. Check with a sketch. One, two is up and right. A quarter turn clockwise is down and right.", r('(1, 2) → (−2, 1)  ✗') + g('(1, 2) → (2, −1)  ✓')),
      S("Mistake two. Enlarging only one coordinate. Enlarge three, two by scale factor two from the origin. Wrong: six, two. Both coordinates are multiplied. Six, four.", r('(3, 2) → (6, 2)  ✗') + g('(3, 2) → (6, 4)  ✓')),
      S("Mistake three. Mixing up the vector. The vector minus two, three means two left and three up. Wrong: two right and three up, so the point four, one goes to six, four. Take away two from x. Two, four.", r('(4, 1) → (6, 4)  ✗') + g('(4, 1) → (2, 4)  ✓'))
    ]),
    SC('In real life', 'Animation', [
      S("Games and films use transformations all the time. A character slides, turns and grows, one transformation after another. The computer applies each one in order, to every point.", V.note('Computer graphics'))
    ]),
    L.turn("Your turn! Number one. Translate the point three, five by the vector minus one, two. Pause and try it.", E('(3, 5) + (−1, 2)'), "Two, seven.", g('(2, 7)')),
    L.turn("Your turn! Number two. Rotate two, one ninety degrees clockwise about the origin. Pause and try it.", E('(2, 1)'), "The rule is y, minus x. One, minus two.", g('(1, −2)')),
    L.turn("Your turn! Number three. Enlarge four, six by scale factor one half, centre the origin. Pause and try it.", E('(4, 6)'), "Half of each. Two, three.", g('(2, 3)')),
    L.rec('How do you carry out combined transformations?', "A translation slides a shape by a vector. A rotation needs an angle, a direction and a centre. An enlargement needs a scale factor and a centre. For combined transformations, do them one at a time in order, because the order can change the result. Always check with a quick sketch.", ['Translation: add the vector', 'Rotation: angle, direction, centre', 'Enlargement: multiply both', 'Order matters'])
  ]);

  /* ---- growth patterns ---- */
  N('How do linear, quadratic and exponential patterns grow?', 'how to tell patterns apart using differences and ratios, and how quickly each one grows.', [
    SC('Patterns', 'Start with the basics', [
      S("A sequence is a list of numbers in a pattern. We want to know how it grows. Three kinds are very important. Linear, quadratic and exponential. They grow at very different speeds.", V.list(['Linear: add the same each time', 'Quadratic: differences grow steadily', 'Exponential: multiply each time']))
    ]),
    SC('Linear', 'Example 1: 5, 8, 11, 14', [
      S("Look at the differences. Eight minus five is three. Eleven minus eight is three. Fourteen minus eleven is three. The difference is the same each time. This is a linear sequence. The nth term is three n plus two.", E('Differences: 3, 3, 3') + g('nth term = 3n + 2')),
      S("Check. The first term, three times one plus two, is five. The fourth, three times four plus two, is fourteen.", E('3(1) + 2 = 5 ✓') + E('3(4) + 2 = 14 ✓'))
    ]),
    SC('Quadratic', 'Example 2: 2, 5, 10, 17', [
      S("The differences. Three, five, seven. They are not the same. Now find the differences of the differences. Two, two. These second differences are constant. That is the sign of a quadratic sequence.", E('Differences: 3, 5, 7') + E('Second differences: 2, 2', 'g')),
      S("The second difference is two, so the nth term starts with n squared. Compare with n squared, which is one, four, nine, sixteen. Each term of ours is one more. So the nth term is n squared plus one.", E('n²: 1, 4, 9, 16') + g('nth term = n² + 1'))
    ]),
    SC('Exponential', 'Example 3: 3, 6, 12, 24', [
      S("The differences are three, six, twelve. They are not constant and the second differences are not constant. Look at the ratios. Six over three is two. Twelve over six is two. Twenty-four over twelve is two. Each term is multiplied by two. This is exponential growth.", E('Ratios: 2, 2, 2', 'g')),
      S("The nth term is three times two to the power n minus one. Check. The fourth term is three times two cubed, twenty-four.", g('nth term = 3 × 2ⁿ⁻¹') + E('3 × 2³ = 24 ✓'))
    ]),
    SC('Doubling', 'Example 4: a penny a day', [
      S("Suppose you get one penny on day one, and it doubles every day. Day two, two pence. Day three, four. Day ten is two to the power nine. Five hundred and twelve pence, five pounds twelve. Day twenty is two to the power nineteen. Five hundred and twenty-four thousand, two hundred and eighty-eight pence. Over five thousand pounds. Day thirty. More than five million pounds.", V.tbl([['10', '£5.12'], ['20', '£5242.88'], ['30', '£5 368 709.12']], ['Day', 'Amount'])),
      S("Compare with adding ten pence a day. Day thirty is only two pounds ninety-one. Doubling wins by a huge margin.", E('Adding 10p a day: day 30 = £2.91', 'r'))
    ]),
    SC('Compound growth', 'Example 5: money in the bank', [
      S("Compound interest is exponential. One hundred pounds at ten per cent. Each year it is multiplied by one point one. Year one, a hundred and ten. Year two, a hundred and twenty-one. Year three, a hundred and thirty-three point one. After n years it is a hundred times one point one to the power n.", E('100 × 1.1ⁿ', 'g') + E('110, 121, 133.10'))
    ]),
    SC('Comparing', 'Example 6: n² against 2ⁿ', [
      S("Which grows faster, n squared or two to the power n? At n equals four, both are sixteen. At five, twenty-five against thirty-two. At ten, one hundred against one thousand and twenty-four. Exponential growth always overtakes.", V.tbl([['4', '16', '16'], ['5', '25', '32'], ['10', '100', '1024']], ['n', 'n²', '2ⁿ']))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Confusing two to the power n with two n. At n equals five, two to the power five is thirty-two. Two times five is ten. Wrong: the fifth term of the doubling sequence is ten. The terms are two, four, eight, sixteen, thirty-two.", r('2⁵ = 10  ✗') + g('2⁵ = 2×2×2×2×2 = 32  ✓')),
      S("Mistake two. Using the linear nth term for an exponential sequence. Three, six, twelve, twenty-four. Wrong: three n. At n equals four, three times four is twelve, not twenty-four. This sequence is multiplied by two each time.", r('3n: 3, 6, 9, 12  ✗') + g('3 × 2ⁿ⁻¹: 3, 6, 12, 24  ✓')),
      S("Mistake three. Confusing n squared with two n. At n equals five, n squared is twenty-five. Two times five is ten. Wrong: the sequence one, four, nine, sixteen, twenty-five has nth term two n. Two n gives two, four, six. The terms are squares.", r('2n: 2, 4, 6, 8, 10  ✗') + g('n²: 1, 4, 9, 16, 25  ✓'))
    ]),
    L.turn("Your turn! Number one. The sequence is four, nine, fourteen, nineteen. Is it linear, quadratic or exponential? Pause and think.", E('4, 9, 14, 19'), "The differences are all five. Linear.", g('Linear, 5n − 1')),
    L.turn("Your turn! Number two. The sequence is one, three, nine, twenty-seven. What is the next term? Pause and try it.", E('1, 3, 9, 27'), "Multiply by three each time. Eighty-one.", g('81')),
    L.turn("Your turn! Number three. The sequence is two, six, twelve, twenty. The second differences are all two. What kind is it? Pause and think.", E('2, 6, 12, 20'), "Quadratic.", g('Quadratic')),
    L.rec('How do linear, quadratic and exponential patterns grow?', "In a linear sequence the differences are constant. In a quadratic sequence the second differences are constant, and the nth term contains n squared. In an exponential sequence each term is multiplied by the same ratio. Exponential growth soon overtakes the others. Compound interest is exponential.", ['Linear: constant differences', 'Quadratic: constant second differences', 'Exponential: constant ratio', 'Exponential overtakes'])
  ]);

  /* ---- nets, views and cubes ---- */
  N('How do you work with nets, views and stacks of cubes?', 'how to recognise nets of cubes, draw views of cube stacks, and count the cubes and their faces.', [
    SC('3D shapes', 'Start with the basics', [
      S("In spatial reasoning, we work out what a 3D shape looks like from different directions, and what it looks like unfolded. A net is a flat shape that folds into a solid. We will look at nets of cubes, stacks of cubes, and the views we see from the top and sides.", V.list(['Net: unfolded solid', 'Plan: view from above', 'Elevation: view from the side']))
    ]),
    SC('Nets of a cube', 'Example 1: which flat shapes fold?', [
      S("A cube has six square faces, so a net of a cube has six squares joined edge to edge. There are exactly eleven different nets. Here are the rules for testing a net.", V.list(['Exactly six squares', 'No four squares in a 2 × 2 block', 'No row of more than four', 'When folded, no two squares overlap'])),
      S("A cross shape works. A row of four, with one square above and one below. Fold the middle four around, and the top and bottom close the ends.", g('Cross: valid net'))
    ]),
    SC('Not a net', 'Example 2: a 2 × 3 block', [
      S("A block of two rows of three squares has six squares, but it does not fold into a cube. It has a two by two block inside, and when folded, squares would overlap. Not a net.", r('2 × 3 block: not a net')),
      S("A row of five squares with one more square cannot work either. A row of more than four squares would wrap around and overlap.", V.rule('Do not use a row of 5.'))
    ]),
    SC('Opposite faces', 'Example 3: finding the opposite face', [
      S("In a row of four squares, the first and third are opposite. So are the second and fourth. If the squares of the row are labelled A, B, C, D, then A is opposite C, and B is opposite D. Use this to find which colour is opposite which.", E('Row A B C D: A opposite C, B opposite D', 'g'))
    ]),
    SC('Counting cubes', 'Example 4: a stack with a plan view', [
      S("A stack of cubes is shown by a plan view with numbers. Each number is how many cubes are stacked in that spot. The front row has two, one. The back row has three, one. Add the numbers. Two plus one plus three plus one is seven cubes.", V.tbl([['3', '1'], ['2', '1']], ['Back', ''])),
      S("Step one. The front elevation, viewed from the front, shows the tallest in each column. Left column, three. Right column, one. Step two. The side elevation viewed from the right shows the tallest in each row. Back row, three. Front row, two.", E('Front: heights 3, 1') + E('Right side: heights 3, 2'))
    ]),
    SC('Surface area', 'Example 5: a line of columns', [
      S("A stack in one line has columns of height three, one and two. There are six cubes. Each cube has six faces, thirty-six in all. Faces that touch are hidden. Count the touching pairs. In the column of three, two. In the column of two, one. Between the columns, the lower of the two heights. Min of three and one is one. Min of one and two is one. Total five touching pairs. Each hides two faces.", E('6 cubes × 6 faces = 36') + E('Touching pairs: 2 + 0 + 1 + 1 + 1 = 5')),
      S("The surface area, in squares, is thirty-six minus ten. Twenty-six.", g('36 − 2 × 5 = 26 squares'))
    ]),
    SC('Painted cubes', 'Example 6: a 3 × 3 × 3 cube', [
      S("A big cube made of twenty-seven small cubes is painted on the outside, and then taken apart. How many small cubes have paint on three faces? The corners. A cube has eight corners. Eight cubes.", E('Corners: 8 cubes with 3 faces painted', 'g')),
      S("Two faces painted. The edge pieces, not corners. Each of the twelve edges has one. Twelve cubes. One face painted. The middle of each face. Six faces, one each. Six cubes. No face painted. The very middle. One cube.", E('Edges: 12 with 2 faces') + E('Face centres: 6 with 1 face') + E('Centre: 1 with 0 faces')),
      S("Check. Eight plus twelve plus six plus one is twenty-seven. Every cube is counted.", E('8 + 12 + 6 + 1 = 27 ✓'))
    ]),
    SC('A bigger cube', 'Example 7: 4 × 4 × 4', [
      S("Sixty-four small cubes. Corners, still eight. Edges. Each edge has two cubes that are not corners. Twelve edges, twenty-four. Faces. Each face has a two by two middle, four cubes. Six faces, twenty-four. Inside. Two by two by two, eight.", E('8 + 24 + 24 + 8 = 64 ✓', 'g'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Missing hidden cubes. A stack has a back row of three and one, and a front row of two and one. Wrong: from the front you see two and one, so the stack has three cubes. There is a row behind. The plan view total is seven.", r('Front view only: 3 cubes  ✗') + g('Whole plan: 3 + 1 + 2 + 1 = 7  ✓')),
      S("Mistake two. Counting only four corners of a cube. A big cube has eight corners, four on the top and four on the bottom. Wrong: four cubes with three faces painted. The answer is eight.", r('4 corners  ✗') + g('8 corners  ✓')),
      S("Mistake three. Accepting a net with four squares in a block. Six squares arranged as a two by two block with two more squares. Wrong: it folds into a cube. The block would overlap itself, so it is not a net. Test with the rules.", r('2 × 2 block inside: not a net  ✗ accepted') + g('Reject nets with a 2 × 2 block  ✓'))
    ]),
    L.turn("Your turn! Number one. How many faces does a cube have? And how many squares are in its net? Pause and think.", E('?'), "Six faces, six squares.", g('6 and 6')),
    L.turn("Your turn! Number two. A stack has a plan view with numbers two, three, one, one. How many cubes in total? Pause and try it.", E('2, 3, 1, 1'), "Two plus three plus one plus one is seven.", g('7')),
    L.turn("Your turn! Number three. A three by three by three cube is painted and taken apart. How many small cubes have exactly one painted face? Pause and try it.", E('3 × 3 × 3'), "One for the middle of each of the six faces. Six.", g('6')),
    L.rec('How do you work with nets, views and stacks of cubes?', "A net of a cube has six squares, with no two by two block and no overlaps when folded. A plan view with numbers shows how many cubes are in each place, and the total is the sum. A painted cube has eight corners with three faces, twelve edges with two, six face centres with one, and one hidden middle. Always check that your counts add to the total.", ['6 squares, no 2×2 block', 'Plan: add the numbers', 'Corners 8, edges 12, faces 6', 'Check the total'])
  ]);

  /* ---- logic and ordering ---- */
  N('How do you solve ordering and logic puzzles?', 'how to organise clues, put things in order, and decide what must be true.', [
    SC('Logic', 'Start with the basics', [
      S("Logic puzzles give you a few clues, and you have to work out what must be true. There is no guessing. The method is to draw a picture, such as a number line or a table, and fit each clue in.", V.rule('Draw it. Fit each clue.'))
    ]),
    SC('Ordering', 'Example 1: a race', [
      S("Four runners. Anna, Ben, Cara and Dan. Clue one. Ben finished ahead of Anna. Clue two. Cara finished behind Anna. Clue three. Dan finished ahead of Ben. Who was first, second, third and fourth?", V.list(['Ben ahead of Anna', 'Cara behind Anna', 'Dan ahead of Ben'])),
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
      S("Which is the odd one out? Sixteen, twenty-five, thirty-six, forty-eight. Look for a property most share. Sixteen is four squared. Twenty-five is five squared. Thirty-six is six squared. Forty-eight is not a square number. So forty-eight is the odd one out.", E('16, 25, 36 are squares; 48 is not', 'g')),
      S("Be careful. There can be more than one reason. In two, four, six, nine, the nine is odd, and also the only one that is not even. Check each possible property.", V.rule('Test each property.'))
    ]),
    SC('All, some, none', 'Example 5: deduction', [
      S("All squares have four equal sides. The shape ABCD is a square. What must be true? ABCD has four equal sides. That follows from the statement.", g('Valid: ABCD has four equal sides')),
      S("Now. All squares are rectangles. The shape P is a rectangle. Is P a square? Not necessarily. A rectangle that is two by four is not a square. We cannot say.", E('All squares are rectangles') + r('P is a rectangle → P is a square?  Not necessarily'))
    ]),
    SC('Table', 'Example 6: matching', [
      S("Three friends, Asha, Ben and Cleo, have three pets. A cat, a dog and a fish. Asha does not have the dog. Ben has the fish. Who has the cat? Ben has the fish, so Asha and Cleo have the cat and the dog. Asha does not have the dog, so Asha has the cat. Cleo has the dog.", V.tbl([['Asha', 'Cat'], ['Ben', 'Fish'], ['Cleo', 'Dog']], ['Friend', 'Pet'])),
      S("Use a grid, and cross out impossible choices. Each time you place one, cross it out in its row and column.", V.rule('Cross out what is impossible.'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Reversing the order of a clue. The clue says Ben finished ahead of Anna. Wrong: write Anna, then Ben, so Anna is first. Ahead means closer to the front. Ben, then Anna.", r('Anna → Ben  ✗') + g('Ben → Anna  ✓')),
      S("Mistake two. Assuming a statement works backwards. All dogs are animals. Rex is an animal. Wrong: Rex is a dog. Rex could be a cat. The statement only works from dog to animal, not from animal to dog.", r('Rex is an animal, so a dog  ✗') + g('We cannot tell  ✓')),
      S("Mistake three. Not checking all the clues at the end. A race puzzle, answer Dan, Anna, Ben, Cara. Check clue one. Ben ahead of Anna. But Anna is ahead of Ben here. Wrong. Go back and fix it. Dan, Ben, Anna, Cara.", r('Dan, Anna, Ben, Cara  ✗') + g('Dan, Ben, Anna, Cara  ✓'))
    ]),
    L.turn("Your turn! Number one. P is older than Q. Q is older than R. Who is the youngest? Pause and try it.", E('P > Q > R'), "R.", g('R')),
    L.turn("Your turn! Number two. Which is the odd one out? Three, five, seven, nine. Think about prime numbers. Pause and try it.", E('3, 5, 7, 9'), "Nine is not prime. Three, five and seven are.", g('9')),
    L.turn("Your turn! Number three. All birds have feathers. A penguin is a bird. What must be true? Pause and try it.", E('?'), "A penguin has feathers.", g('A penguin has feathers')),
    L.rec('How do you solve ordering and logic puzzles?', "Draw the clues as a chain, a number line or a grid. Join the chains to find the order, then check every clue. If a is bigger than b and b bigger than c, then a is bigger than c. A statement that all A are B does not mean all B are A. Sometimes the answer is that we cannot tell.", ['Draw a chain or grid', 'Join the clues', 'Check every clue', 'Cannot tell is valid'])
  ]);

  L.use(853, ['What is symmetry in 2D shapes?', 'How do you reflect shapes and decide whether shapes are congruent?', 'How do you carry out combined transformations?', 'Vectors as journeys', 'The magnitude of a vector', 'How do linear, quadratic and exponential patterns grow?', 'How do you work with nets, views and stacks of cubes?', 'Painted cubes and stacks', 'How do you solve ordering and logic puzzles?']);
})();
