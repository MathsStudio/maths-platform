/* lessons_p7b.js: P7 Watch lessons, topics 7 to 13. New lessons for the questions P7 adds,
   and the older P7 lessons rebuilt in full. P5 and P6 lessons for shared questions are reused. */
(function () {
  'use strict';
  var BT = window.BT; if (!BT || !BT.L || !BT.lk) return;
  var L = BT.L, V = BT.sv, LK = BT.lk, SC = L.SC, st = L.st, SW = L.SW, F = L.F, BIG = L.BIG, ep = L.ep, rec = L.rec, turn = L.turn;
  var SPA = window.SPA;
  var cubes = function (h) { return SPA && SPA.cubes ? SPA.cubes(h, 215, null, true) : ''; };
  function par(t) {
    var s = '<line x1="20" y1="50" x2="260" y2="50" style="stroke:var(--fg);stroke-width:4"/><line x1="20" y1="130" x2="260" y2="130" style="stroke:var(--fg);stroke-width:4"/><line x1="90" y1="160" x2="190" y2="20" style="stroke:hsl(215,70%,50%);stroke-width:4"/>';
    if (t) s += '<text x="165" y="44" style="font-size:15px;font-weight:700;fill:hsl(22,85%,50%)">' + t[0] + '</text><text x="128" y="124" style="font-size:15px;font-weight:700;fill:hsl(22,85%,50%)">' + t[1] + '</text>';
    return '<svg viewBox="0 0 280 180" width="280" role="img" aria-label="Two parallel lines crossed by a third line">' + s + '</svg>';
  }

  /* ===================== Topic 7 ===================== */
  ep('Angles in polygons', 'how to find the sum of the interior angles of any polygon, and each angle of a regular polygon.', [
    SC('Split into triangles', 'From one corner', [
      st("Pick one corner of a polygon and draw lines to every other corner. A pentagon splits into three triangles.", V.poly([[110, 10], [200, 75], [165, 170], [55, 170], [20, 75]], 'var(--surface-2)', 220, 180, 'A pentagon')),
      st("Each triangle has one hundred and eighty degrees, so the pentagon's angles add up to three times one hundred and eighty: five hundred and forty degrees.", V.eq('3 × 180° = 540°', 'g'))]),
    SC('The rule', 'Sides take away two', [
      st("A polygon with n sides splits into n take away two triangles. So the angle sum is n take away two, times one hundred and eighty.", V.eq('Angle sum = (n − 2) × 180°', 'g'))]),
    SC('A table', 'Some polygons', [
      st("A quadrilateral makes three hundred and sixty degrees, a hexagon seven hundred and twenty, an octagon one thousand and eighty.", V.tbl([['Triangle', '3', '180°'], ['Quadrilateral', '4', '360°'], ['Pentagon', '5', '540°'], ['Hexagon', '6', '720°'], ['Octagon', '8', '1,080°']], ['Shape', 'Sides', 'Angle sum']))]),
    SC('Regular polygons', 'All angles equal', [
      st("In a regular polygon all the angles are equal. A regular hexagon's angles add to seven hundred and twenty degrees. Divide by six: each angle is one hundred and twenty degrees.", V.eq('720° ÷ 6 = 120°', 'g'))]),
    SC('A missing angle', 'In a quadrilateral', [
      st("A quadrilateral has angles of ninety, one hundred and ten and eighty degrees. The angles make three hundred and sixty, so the fourth is eighty degrees.", V.eq('360° − 90° − 110° − 80° = 80°', 'g'))]),
    turn("Your turn! What does each angle of a regular octagon measure? Pause and try it.", V.eq('(8 − 2) × 180° ÷ 8'),
      "Six times one hundred and eighty is one thousand and eighty. Divide by eight: one hundred and thirty-five degrees.", V.eq('135°', 'g')),
    rec('Angles in polygons', "A polygon with n sides has an angle sum of n take away two, times one hundred and eighty degrees. In a regular polygon, divide the sum by the number of angles.",
      ['Split into triangles', 'Sum = (n − 2) × 180°', 'Regular: divide by n', 'Missing angle: sum − the others'])
  ]);

  ep('Angles in parallel lines', 'the angle facts when a line crosses two parallel lines: corresponding, alternate and co-interior.', [
    SC('A transversal', 'Crossing parallel lines', [
      st("A line that crosses two parallel lines is called a transversal. It makes eight angles, and many of them are equal.", par())]),
    SC('Corresponding angles', 'F shape', [
      st("Corresponding angles are in the same position at each crossing. They are equal. Look for an F shape.", par(['70°', '70°']) + V.note('Corresponding angles are equal (F shape)'))]),
    SC('Alternate angles', 'Z shape', [
      st("Alternate angles are on opposite sides of the transversal, between the parallel lines. They are equal too. Look for a Z shape.", V.note('Alternate angles are equal (Z shape)'))]),
    SC('Co-interior angles', 'C shape', [
      st("Co-interior angles are on the same side, between the parallel lines. They add up to one hundred and eighty degrees. Look for a C shape.", V.eq('a + b = 180°', 'g') + V.note('Co-interior angles add to 180° (C shape)'))]),
    SC('Using them', 'Find the missing angles', [
      st("If one angle is sixty-five degrees, its corresponding angle is sixty-five, its alternate angle is sixty-five, and the co-interior angle is one hundred and fifteen.", V.eq('180° − 65° = 115°', 'g'))]),
    turn("Your turn! Two co-interior angles: one is one hundred and twenty degrees. What is the other? Pause and think.", V.eq('?'),
      "Co-interior angles add to one hundred and eighty, so the other is sixty degrees.", V.eq('60°', 'g')),
    rec('Angles in parallel lines', "Corresponding angles, an F shape, are equal. Alternate angles, a Z shape, are equal. Co-interior angles, a C shape, add up to one hundred and eighty degrees.",
      ['Corresponding (F): equal', 'Alternate (Z): equal', 'Co-interior (C): add to 180°', 'Vertically opposite: equal'])
  ]);

  /* ===================== Topic 8 ===================== */
  ep('Mean from a frequency table', 'how to find the mean, mode and range from a frequency table.', [
    SC('A frequency table', 'Data in a table', [
      st("Twenty families were asked how many pets they have. The frequency is how many families gave each answer.", V.tbl([['0', '4'], ['1', '7'], ['2', '6'], ['3', '3']], ['Pets', 'Frequency']))]),
    SC('Find the total', 'Multiply across', [
      st("Four families have no pets: zero. Seven have one: seven pets. Six have two: twelve. Three have three: nine. Multiply each row and add.", V.tbl([['0', '4', '0'], ['1', '7', '7'], ['2', '6', '12'], ['3', '3', '9']], ['Pets', 'Frequency', 'Pets × freq']) + V.eq('Total pets = 28', 'g'))]),
    SC('The mean', 'Total ÷ how many', [
      st("Twenty-eight pets shared between twenty families. Twenty-eight divided by twenty is one point four pets per family.", V.eq('28 ÷ 20 = 1.4', 'g') + V.rule('Mean = total ÷ total frequency'))]),
    SC('Mode and range', 'From the table', [
      st("The mode is the answer with the highest frequency: one pet. The range is the biggest value take away the smallest: three take away zero is three.", V.eq('Mode = 1 · Range = 3', 'g'))]),
    SC('A common mistake', 'Divide by the right number', [
      st("Don't divide by four, the number of rows. Divide by twenty, the number of families.", V.note('Divide by the total frequency, not the number of rows'))]),
    turn("Your turn! Three pupils scored five, and two scored ten. What is the mean? Pause and try it.", V.eq('(3 × 5 + 2 × 10) ÷ 5'),
      "Fifteen plus twenty is thirty-five. Five pupils, so seven.", V.eq('35 ÷ 5 = 7', 'g')),
    rec('Mean from a frequency table', "Multiply each value by its frequency and add to find the total. Divide by the total frequency for the mean. The mode has the highest frequency.",
      ['Value × frequency', 'Add for the total', 'Mean = total ÷ total frequency', 'Mode = highest frequency'])
  ]);

  ep('Pie charts and combined probability', 'how to draw pie charts with angles and find the probability of two events.', [
    SC('Pie charts with angles', '360° in a circle', [
      st("A pie chart is a circle, with three hundred and sixty degrees. If thirty-six people were asked, each person gets three hundred and sixty divided by thirty-six: ten degrees.", V.eq('360° ÷ 36 = 10° per person', 'g'))]),
    SC('Working out the angles', 'Multiply each group', [
      st("Eighteen chose football: one hundred and eighty degrees. Twelve chose swimming: one hundred and twenty. Six chose tennis: sixty.", V.tbl([['Football', '18', '180°'], ['Swimming', '12', '120°'], ['Tennis', '6', '60°']], ['Sport', 'People', 'Angle']) + LK.pie(3, 6, { r: 50, hue: 150 }))]),
    SC('Reading a pie chart', 'Angle back to people', [
      st("If a slice is ninety degrees out of three hundred and sixty, it is a quarter of the people. A quarter of forty people is ten.", V.eq('90/360 = 1/4 → 1/4 of 40 = 10', 'g'))]),
    SC('Two events', 'A coin and a dice', [
      st("Flip a coin and roll a dice. List every outcome in a table: heads one, heads two, up to tails six. There are twelve outcomes.", V.eq('2 × 6 = 12 outcomes', 'b'))]),
    SC('Combined probability', 'Count the outcomes', [
      st("The probability of heads and a six is one out of twelve. The probability of tails and an even number is three out of twelve, which is one quarter.", V.eq('P(H, 6) = 1/12 · P(T, even) = 3/12 = 1/4', 'g'))]),
    turn("Your turn! Two coins are flipped. What is the probability of two heads? Pause and think.", V.eq('HH, HT, TH, TT'),
      "There are four outcomes and one is two heads, so one quarter.", V.eq('P(HH) = 1/4', 'g')),
    rec('Pie charts and combined probability', "In a pie chart, divide three hundred and sixty by the total to find the angle for one item. For two events, list every outcome in a table, then count the ones you want.",
      ['360° ÷ total = angle for one', 'Angle × group size', 'Two events: list all outcomes', 'P = wanted ÷ all outcomes'])
  ]);

  /* ===================== Topic 9 ===================== */
  ep('Algebra in problems', 'how to use a letter to stand for an unknown and solve problems with equations.', [
    SC('Let a letter stand for it', 'The unknown', [
      st("When a problem has a number you don't know, call it a letter, like n. Then write what the problem says as an equation.", V.note('Let n be the unknown number'))]),
    SC('Ages', 'A puzzle', [
      st("Mia is three times as old as her brother. Together they are twenty-four. Let the brother's age be b. Mia is three b. Together: four b equals twenty-four.", V.eq('b + 3b = 24 → 4b = 24', 'b')),
      st("So b is six. The brother is six and Mia is eighteen.", V.eq('b = 6, Mia = 18', 'g'))]),
    SC('Perimeter', 'A rectangle', [
      st("A rectangle is x centimetres wide and twice as long. Its perimeter is thirty-six centimetres. Two widths and two lengths: x plus x plus two x plus two x is six x.", V.eq('6x = 36 → x = 6', 'g')),
      st("It is six centimetres wide and twelve long.", V.eq('6 cm by 12 cm', 'g'))]),
    SC('Money', 'Two prices', [
      st("A pen costs p pence and a pencil costs twenty pence less. Two pens and three pencils cost two pounds forty. Two p plus three, bracket, p take away twenty equals two hundred and forty.", V.eq('2p + 3(p − 20) = 240 → 5p − 60 = 240', 'b')),
      st("Five p is three hundred, so p is sixty. A pen costs sixty pence and a pencil forty.", V.eq('p = 60', 'g'))]),
    turn("Your turn! I think of a number, double it and add seven. I get twenty-five. What is my number? Pause and try it.", V.eq('2n + 7 = 25'),
      "Take seven: two n equals eighteen. Divide by two: n equals nine.", V.eq('n = 9', 'g')),
    rec('Algebra in problems', "Choose a letter for the unknown, write the problem as an equation, solve it, then answer the question in words and check it fits the story.",
      ['Letter for the unknown', 'Write an equation', 'Solve it', 'Answer and check'])
  ]);

  ep('Reasoning and counterexamples', 'how to reason about statements and use a counterexample to show one is false.', [
    SC('True or false?', 'Testing a claim', [
      st("In maths, a claim must be true every time to be called true. If we find one example where it fails, the claim is false.", V.rule('One counterexample proves a claim false.'))]),
    SC('A counterexample', '"All primes are odd"', [
      st("Is every prime number odd? Three, five, seven, eleven are odd. But two is prime and even. Two is a counterexample, so the claim is false.", V.eq('2 is prime and even → false', 'b'))]),
    SC('Another one', '"Multiplying makes bigger"', [
      st("Does multiplying always make a number bigger? Five times three is fifteen, bigger. But eight times a half is four, smaller. So it is false.", V.eq('8 × ½ = 4 → false', 'b'))]),
    SC('Showing something is always true', 'Explain why', [
      st("Examples can't prove something is always true; we need a reason. The sum of two odd numbers is always even: each odd number is an even number plus one, so two odds make an even number plus two, which is even.", V.eq('(2a + 1) + (2b + 1) = 2(a + b + 1)', 'g'))]),
    SC('Sometimes true', 'Neither always nor never', [
      st("A square number is even. Four and sixteen are, but nine and twenty-five are not. So it is sometimes true.", V.note('Sometimes true'))]),
    turn("Your turn! 'The sum of three numbers is always bigger than each of them.' Can you find a counterexample? Pause and think.", V.eq('?'),
      "Use a negative number: one plus two plus negative five is negative two, which is smaller than one and two.", V.eq('1 + 2 + (−5) = −2', 'g')),
    rec('Reasoning and counterexamples', "One counterexample proves a claim false. To show something is always true, give a reason that works every time. Some claims are only sometimes true.",
      ['Test with examples', 'One counterexample → false', 'Always true needs a reason', 'Watch for 0, 1, 2, negatives and fractions'])
  ]);

  /* ===================== Topic 10 ===================== */
  ep('What are square and cube numbers?', 'what square and cube numbers are, and square roots and cube roots.', [
    SC('Square numbers', 'A number times itself', [
      st("A square number is a number multiplied by itself. Five times five is twenty-five, so twenty-five is a square number. We write five squared.", V.dots(5, 5, 'var(--accent)') + V.eq('5² = 25', 'g'))]),
    SC('The first squares', 'Learn them', [
      st("The square numbers up to one hundred and forty-four are worth knowing.", V.cards(['1', '4', '9', '16', '25', '36', '49', '64', '81', '100', '121', '144'], ['g'], true))]),
    SC('Cube numbers', 'Three times', [
      st("A cube number is a number multiplied by itself three times. Two times two times two is eight. Picture a cube built from small cubes.", cubes([[2, 2], [2, 2]]) + V.eq('2³ = 8', 'g'))]),
    SC('The first cubes', 'Learn these too', [
      st("The first cube numbers are one, eight, twenty-seven, sixty-four, one hundred and twenty-five, and one thousand for ten cubed.", V.tbl([['1³', '1'], ['2³', '8'], ['3³', '27'], ['4³', '64'], ['5³', '125'], ['10³', '1,000']], ['Cube', 'Value']))]),
    SC('Square roots', 'Undoing a square', [
      st("A square root undoes squaring. The square root of forty-nine is seven, because seven times seven is forty-nine.", V.eq('√49 = 7', 'g'))]),
    SC('Cube roots', 'Undoing a cube', [
      st("A cube root undoes cubing. The cube root of sixty-four is four, because four times four times four is sixty-four.", V.eq('∛64 = 4', 'g'))]),
    turn("Your turn! Work out three cubed plus four squared. Pause and try it.", V.eq('3³ + 4² = ?'),
      "Three cubed is twenty-seven. Four squared is sixteen. Together, forty-three.", V.eq('27 + 16 = 43', 'g')),
    rec('What are square and cube numbers?', "A square number is a number times itself; a cube number is a number times itself three times. Square roots and cube roots undo them.",
      ['n² = n × n', 'n³ = n × n × n', '√ undoes squaring', '∛ undoes cubing'])
  ]);

  /* ===================== Topic 11 ===================== */
  ep('How do you convert between ratios, fractions and percentages?', 'how to change a ratio into fractions and percentages of the whole.', [
    SC('Parts and the whole', 'A ratio splits a whole', [
      st("In a class, the ratio of boys to girls is two to three. For every five pupils, two are boys and three are girls.", V.cards(['B', 'B', 'G', 'G', 'G'], ['b', 'b', 'g', 'g', 'g']) + V.eq('2 + 3 = 5 parts', 'b'))]),
    SC('Ratio to fractions', 'Part over total', [
      st("So two fifths of the class are boys, and three fifths are girls.", V.eq('boys = 2/5 · girls = 3/5', 'g') + V.rule('Fraction = part ÷ total parts'))]),
    SC('Fractions to percentages', 'Out of 100', [
      st("Two fifths is forty per cent and three fifths is sixty per cent. They add up to one hundred per cent.", V.eq('2/5 = 40% · 3/5 = 60%', 'g'))]),
    SC('Percentage back to ratio', '25% red', [
      st("Twenty-five per cent of the sweets are red and the rest are green. Red to green is twenty-five to seventy-five, which simplifies to one to three.", V.eq('25 : 75 = 1 : 3', 'g'))]),
    SC('Fraction back to ratio', '3/8 are cats', [
      st("Three eighths of the pets are cats and the rest are dogs. So three parts are cats and five parts are dogs: three to five.", V.eq('cats : dogs = 3 : 5', 'g'))]),
    turn("Your turn! Juice and water are mixed in the ratio one to four. What percentage is juice? Pause and try it.", V.eq('1 : 4'),
      "There are five parts. Juice is one fifth, which is twenty per cent.", V.eq('1/5 = 20%', 'g')),
    rec('How do you convert between ratios, fractions and percentages?', "Add the parts of a ratio to find the total. Each part over the total is a fraction, which you can change to a percentage. Work backwards to turn a fraction or percentage into a ratio.",
      ['Add the parts', 'Part ÷ total = fraction', 'Fraction → percentage', 'Back again: part : rest'])
  ]);

  ep('Proportion, exchange and interest', 'how to use direct proportion, exchange rates and simple interest.', [
    SC('Direct proportion', 'Double one, double the other', [
      st("Two quantities are in direct proportion if, when one doubles, the other doubles too. If three pens cost one pound twenty, find one pen first: forty pence. Then seven pens cost two pounds eighty.", V.eq('£1.20 ÷ 3 = 40p') + V.eq('7 × 40p = £2.80', 'g') + V.rule('Find one, then multiply.'))]),
    SC('Exchange rates', 'Proportion with money', [
      st("If one pound is one euro sixteen, then one hundred and fifty pounds is one hundred and fifty times one point one six: one hundred and seventy-four euros.", V.eq('£150 × 1.16 = €174', 'g'))]),
    SC('Simple interest', 'A percentage each year', [
      st("A bank pays four per cent simple interest a year on five hundred pounds. Four per cent of five hundred is twenty pounds each year.", V.eq('4% of £500 = £20 a year', 'g'))]),
    SC('Over several years', 'The same each year', [
      st("With simple interest, you get the same amount every year. After three years: sixty pounds interest, so five hundred and sixty pounds altogether.", V.eq('3 × £20 = £60 → £560', 'g'))]),
    SC('Inverse proportion', 'More workers, less time', [
      st("Sometimes when one goes up, the other goes down. If two painters take six hours, three painters take four hours. The total work, twelve painter-hours, stays the same.", V.eq('2 × 6 = 12 = 3 × 4', 'g'))]),
    turn("Your turn! Five tickets cost thirty pounds. How much do eight tickets cost? Pause and try it.", V.eq('£30 ÷ 5 × 8'),
      "One ticket is six pounds. Eight tickets are forty-eight pounds.", V.eq('£48', 'g')),
    rec('Proportion, exchange and interest', "For direct proportion, find the value of one, then multiply. Exchange rates work the same way. Simple interest gives the same percentage each year. Inverse proportion keeps the product the same.",
      ['Find one, then multiply', 'Exchange: × the rate', 'Simple interest: same each year', 'Inverse: product stays the same'])
  ]);

  /* ===================== Topic 12: volume, direction, scale and speed ===================== */
  ep('How do you calculate volume using an equation?', 'how to calculate the volume of a cuboid with the formula V = l × b × h.', [
    SC('Counting is slow', 'Use a formula', [
      st("For a big cuboid, counting cubes takes too long. Instead we use a formula: volume equals length times breadth times height.", V.eq('V = l × b × h', 'g'))]),
    SC('Why it works', 'Layers of cubes', [
      st("Length times breadth tells you how many cubes are in one layer. Times the height tells you how many layers.", cubes([[3, 3, 3, 3], [3, 3, 3, 3]]) + V.eq('4 × 2 = 8 per layer · × 3 layers = 24', 'g'))]),
    SC('Example', 'A box', [
      st("A box is twelve centimetres long, five centimetres wide and four centimetres high. Twelve times five is sixty, times four is two hundred and forty cubic centimetres.", V.eq('12 × 5 × 4 = 240 cm³', 'g'))]),
    SC('Capacity', 'Litres', [
      st("A fish tank is fifty centimetres by thirty by forty. Its volume is sixty thousand cubic centimetres. One thousand cubic centimetres is one litre, so it holds sixty litres.", V.eq('50 × 30 × 40 = 60,000 cm³ = 60 litres', 'g'))]),
    SC('Missing length', 'Work backwards', [
      st("A cuboid has a volume of ninety cubic centimetres, a length of six and a breadth of five. Six times five is thirty, so the height is ninety divided by thirty: three centimetres.", V.eq('90 ÷ (6 × 5) = 3 cm', 'g'))]),
    SC('Cubes', 'All sides equal', [
      st("For a cube, all three lengths are the same. A cube with seven centimetre edges has a volume of seven cubed: three hundred and forty-three cubic centimetres.", V.eq('7³ = 343 cm³', 'g'))]),
    turn("Your turn! Find the volume of a cuboid eight metres by three metres by two metres. Pause and try it.", V.eq('8 × 3 × 2'),
      "Eight times three is twenty-four, times two is forty-eight cubic metres.", V.eq('48 m³', 'g')),
    rec('How do you calculate volume using an equation?', "The volume of a cuboid is length times breadth times height, in cubic units. One thousand cubic centimetres is one litre. Divide to find a missing length.",
      ['V = l × b × h', 'Answer in cm³ or m³', '1,000 cm³ = 1 litre', 'Missing length: V ÷ the other two'])
  ]);

  ep('Speed, distance, time and bearings', 'how to use speed, distance and time, and give directions as three-figure bearings.', [
    SC('Speed', 'How fast?', [
      st("Speed tells us how far something travels in a certain time. Sixty miles per hour means sixty miles every hour.", V.eq('Speed = Distance ÷ Time', 'g'))]),
    SC('The triangle', 'D, S and T', [
      st("Distance equals speed times time. Speed equals distance divided by time. Time equals distance divided by speed.", V.tbl([['Distance', 'S × T'], ['Speed', 'D ÷ T'], ['Time', 'D ÷ S']], ['To find', 'Use']))]),
    SC('Examples', 'Three questions', [
      st("A car travels at fifty kilometres per hour for three hours: one hundred and fifty kilometres. A train goes two hundred and forty kilometres in two hours: one hundred and twenty kilometres per hour.", V.eq('50 × 3 = 150 km') + V.eq('240 ÷ 2 = 120 km/h', 'g'))]),
    SC('Minutes', 'Change to hours', [
      st("A cyclist rides at twenty kilometres per hour for thirty minutes. Thirty minutes is half an hour, so the distance is ten kilometres.", V.eq('20 × 0.5 = 10 km', 'g'))]),
    SC('Bearings', 'Three-figure directions', [
      st("A bearing is a direction measured clockwise from north, always written with three figures. East is zero nine zero degrees. South is one eight zero. West is two seven zero.", V.tbl([['North', '000°'], ['East', '090°'], ['South', '180°'], ['West', '270°']], ['Direction', 'Bearing']))]),
    SC('Back bearings', 'Coming home', [
      st("To go straight back, add or take away one hundred and eighty degrees. The back bearing of zero six zero degrees is two four zero degrees.", V.eq('060° + 180° = 240°', 'g'))]),
    turn("Your turn! How long does it take to walk twelve kilometres at four kilometres per hour? Pause and try it.", V.eq('T = 12 ÷ 4'),
      "Twelve divided by four is three hours.", V.eq('3 hours', 'g')),
    rec('Speed, distance, time and bearings', "Distance is speed times time, speed is distance over time, time is distance over speed. Change minutes to hours. Bearings are measured clockwise from north with three figures.",
      ['D = S × T', 'S = D ÷ T, T = D ÷ S', 'Minutes → hours', 'Bearings: clockwise from N, 3 figures'])
  ]);

  /* ===================== Topic 13: spatial ===================== */
  ep('How can you transform a shape?', 'the three transformations: translation, reflection and rotation.', [
    SC('Transformations', 'Moving a shape', [
      st("A transformation moves a shape. The three we use are translation, reflection and rotation. The shape keeps the same size and shape.", V.cards(['Translation: slide', 'Reflection: flip', 'Rotation: turn'], ['b', 'p', 'g']))]),
    SC('Translation', 'A slide', [
      st("A translation slides a shape without turning or flipping it. We say how far right or left, and how far up or down. Three right and two up.", LK.grid(9, 5, function (i, j) { return (i === 1 && j >= 3) || (i === 2 && j === 4) || (i === 4 && j >= 1 && j <= 2) || (i === 5 && j === 2); }, { u: 28, alt: 'A shape translated 3 right and 2 up' }))]),
    SC('Reflection', 'A flip', [
      st("A reflection flips a shape over a mirror line. Each point ends up the same distance away on the other side.", LK.grid(10, 4, function (i, j) { return (i >= 2 && i <= 3 && j === 1) || (i === 2 && j === 2) || (i >= 6 && i <= 7 && j === 1) || (i === 7 && j === 2); }, { u: 28, mirror: 5, alt: 'A shape reflected in a mirror line' }))]),
    SC('Rotation', 'A turn', [
      st("A rotation turns a shape about a fixed point, the centre of rotation. We say the angle, like ninety degrees, and the direction, clockwise or anticlockwise.", V.note('Rotation: centre, angle and direction'))]),
    SC('Describing a transformation', 'Give all the details', [
      st("For a translation, give the distance across and up. For a reflection, give the mirror line. For a rotation, give the centre, the angle and the direction.", V.tbl([['Translation', 'how far across and up'], ['Reflection', 'the mirror line'], ['Rotation', 'centre, angle, direction']], ['Transformation', 'Describe']))]),
    SC('Tracing paper trick', 'For rotations', [
      st("To rotate a shape, trace it, put your pencil on the centre, and turn the paper. Then draw the shape in its new position.", V.note('Trace it, pin the centre, turn'))]),
    turn("Your turn! A shape moves five squares left and one square down without turning. Which transformation is that? Pause and think.", V.eq('?'),
      "It slid without turning or flipping, so it is a translation.", V.eq('Translation', 'g')),
    rec('How can you transform a shape?', "A translation slides, a reflection flips over a mirror line, and a rotation turns about a centre. The shape stays the same size. Describe each one fully.",
      ['Translation: slide', 'Reflection: flip in a mirror line', 'Rotation: turn about a centre', 'Same size and shape'])
  ]);

  ep('Surface area and views', 'how to find the surface area of a cuboid, and draw plans and elevations.', [
    SC('Surface area', 'The area of all the faces', [
      st("Surface area is the total area of all the faces of a 3D shape. Think of the paper needed to wrap a box exactly.", V.note('Surface area = add the areas of every face'))]),
    SC('A cuboid', 'Three pairs of faces', [
      st("A cuboid has three pairs of matching faces. For a box five by three by two centimetres: top and bottom are five times three, fifteen each. Front and back are five times two, ten each. Sides are three times two, six each.", V.tbl([['Top and bottom', '15 + 15'], ['Front and back', '10 + 10'], ['Two sides', '6 + 6']], ['Faces', 'Area cm²']))]),
    SC('Add them up', 'Total', [
      st("Thirty plus twenty plus twelve is sixty-two square centimetres.", V.eq('2(15 + 10 + 6) = 62 cm²', 'g'))]),
    SC('A cube', 'Six equal squares', [
      st("A cube with four centimetre edges has six faces of sixteen square centimetres. Its surface area is ninety-six square centimetres.", V.eq('6 × 16 = 96 cm²', 'g'))]),
    SC('Plans and elevations', 'Views of a solid', [
      st("A plan is the view from directly above. The front elevation is the view from the front, and the side elevation is the view from the side.", cubes([[2, 1, 1], [1, 1, 0]]) + V.cards(['Plan: from above', 'Front elevation', 'Side elevation'], ['b', 'p', 'g']))]),
    turn("Your turn! What is the surface area of a cube with two centimetre edges? Pause and try it.", V.eq('6 × 2 × 2'),
      "Each face is four square centimetres, and there are six faces: twenty-four square centimetres.", V.eq('24 cm²', 'g')),
    rec('Surface area and views', "Surface area is the total area of every face. A cuboid has three pairs of matching faces. A plan is the view from above, and elevations are views from the front and side.",
      ['Add the area of every face', 'Cuboid: 2(lb + lh + bh)', 'Cube: 6 × one face', 'Plan, front and side elevations'])
  ]);

  /* ===================== put topics 7 to 13 together ===================== */
  L.use(707, ['How do you identify different polygons?', 'What are the types of triangle?', 'What are the parts of a circle?', 'What makes a shape symmetrical?', 'What is an angle?', 'What are parallel and perpendicular lines?', 'Angle facts', 'Angles in polygons', 'Angles in parallel lines', 'Solid shapes and reflections']);
  L.use(708, ['How do I record and display data?', 'How can data be displayed?', 'How do I find the mean, median, mode and range?', 'What is probability?', 'Mean from a frequency table', 'Pie charts and combined probability', 'Two-way tables, Venn diagrams and pie charts']);
  L.use(709, ['How do you solve maths problems?', 'Multi-step problems', 'Algebra in problems', 'Reasoning and counterexamples', 'Always true, factors and multiples']);
  L.use(710, ['What are factors?', 'What are prime numbers?', 'What are square and cube numbers?', 'Common factors and multiples', 'Prime factors', 'Always true, factors and multiples']);
  L.use(711, ['What is a ratio?', 'How do you convert between ratios, fractions and percentages?', 'How do you calculate ratio in everyday situations?', 'Proportion, exchange and interest', 'Ratio with different units']);
  L.use(712, ['What is volume?', 'How do you calculate volume using an equation?', 'Speed, distance, time and bearings']);
  L.use(713, ['What are nets?', 'How can you transform a shape?', 'How do I use grid references on a map?', 'What are coordinates?', 'Surface area and views', 'Reflecting on a grid', 'Painted cubes and stacks']);
})();
