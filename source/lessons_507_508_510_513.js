/* lessons_507_508_510_513.js: new Watch lessons for P5 Topic 7 (Shape), Topic 8 (Data), Topic 10 (Factors)
   and Topic 11 (Spatial awareness). One detailed lesson per question. */
(function () {
  'use strict';
  var BT = window.BT; if (!BT || !BT.lessons || !BT.lk) return;
  var V = BT.sv, LK = BT.lk;
  var SC = function (h, sub, steps) { return { h: h, sub: sub, steps: steps }; };
  var st = function (say, html) { return { say: say, html: html || '' }; };
  var SW = '<!--swap-->';
  /* a regular polygon with n sides, as an SVG */
  function reg(n, r, fill, label) {
    var c = r + 8, pts = [];
    for (var i = 0; i < n; i++) { var a = -Math.PI / 2 + i * 2 * Math.PI / n; pts.push([(c + r * Math.cos(a)).toFixed(1), (c + r * Math.sin(a)).toFixed(1)]); }
    return '<div style="display:flex;flex-direction:column;align-items:center;gap:4px"><svg viewBox="0 0 ' + (2 * c) + ' ' + (2 * c) + '" width="' + (2 * c) + '" role="img" aria-label="' + (label || n + ' sided shape') + '"><polygon points="' + pts.map(function (p) { return p.join(','); }).join(' ') + '" style="fill:' + (fill || '#ecdcf8') + ';stroke:var(--fg);stroke-width:3;stroke-linejoin:round"/></svg>' + (label ? '<span style="font-size:15px">' + label + '</span>' : '') + '</div>';
  }
  function tri(kind) { return BT.svg(110, 90, kind + ' triangle', BT.tri(kind, 18, 80, 1.1), 120); }

  /* ---------- How do you identify different polygons? ---------- */
  var polygons = {
    title: 'How do you identify different polygons?', goal: 'what a polygon is and how to name polygons by their sides.',
    scenes: [
      SC('What is a polygon?', 'Flat shapes with straight sides', [
        st("A polygon is a flat, closed shape made only of straight sides. Closed means there are no gaps.", V.rule('A polygon: flat, closed, straight sides only.')),
        st("These are polygons. Every side is straight and the shape is closed.", V.row(reg(3, 34) + reg(4, 34) + reg(5, 34) + reg(6, 34))),
        st("These are not polygons. A circle has a curved edge, and an open shape has a gap.", '<svg viewBox="0 0 240 90" width="240" role="img" aria-label="A circle and an open shape"><circle cx="45" cy="45" r="36" style="fill:#fde5d2;stroke:var(--fg);stroke-width:3"/><polyline points="140,80 140,10 220,10 220,80" style="fill:none;stroke:var(--fg);stroke-width:3"/></svg>' + V.eq('✗ curved   ✗ not closed', 'r'))]),
      SC('Naming polygons', 'Count the sides', [
        st("We name a polygon by counting its sides. Three sides: triangle. Four sides: quadrilateral. Five sides: pentagon.", V.row(reg(3, 32, '#ecdcf8', 'triangle 3') + reg(4, 32, '#d6f0e2', 'quadrilateral 4') + reg(5, 32, '#fde5d2', 'pentagon 5'))),
        st("Six sides: hexagon. Seven sides: heptagon. Eight sides: octagon.", V.row(reg(6, 32, '#dbeaf7', 'hexagon 6') + reg(7, 32, '#ecdcf8', 'heptagon 7') + reg(8, 32, '#d6f0e2', 'octagon 8'))),
        st("The corners are called vertices. A polygon always has the same number of vertices as sides.", V.note('One corner is a vertex. Many corners are vertices.'))]),
      SC('Regular and irregular', 'Are all the sides equal?', [
        st("A regular polygon has all its sides the same length and all its angles the same size.", reg(6, 42, '#dbeaf7', 'regular hexagon')),
        st("An irregular polygon still has the same number of sides, but they are not all equal. Both of these are hexagons.",
          '<svg viewBox="0 0 160 110" width="160" role="img" aria-label="An irregular hexagon"><polygon points="20,60 50,12 120,20 148,62 100,100 40,96" style="fill:#fde5d2;stroke:var(--fg);stroke-width:3;stroke-linejoin:round"/></svg>' + V.note('irregular hexagon: 6 sides, not all equal'))]),
      SC('Quadrilaterals', 'Four-sided shapes', [
        st("There are lots of different quadrilaterals. A square has four equal sides and four right angles. A rectangle has four right angles and opposite sides equal.",
          V.row(V.poly([[10, 10], [90, 10], [90, 90], [10, 90]], '#ecdcf8', 100, 100, 'square') + V.poly([[10, 25], [150, 25], [150, 85], [10, 85]], '#d6f0e2', 160, 100, 'rectangle'))),
        st("A rhombus has four equal sides but no right angles. A trapezium has one pair of parallel sides.",
          V.row(V.poly([[60, 8], [110, 55], [60, 102], [10, 55]], '#fde5d2', 120, 110, 'rhombus') + V.poly([[40, 20], [120, 20], [150, 90], [10, 90]], '#dbeaf7', 160, 100, 'trapezium')))]),
      SC('Polygons around us', 'Look closely', [
        st("Polygons are everywhere. A stop sign is an octagon. The cells in a honeycomb are hexagons. And our fifty pence coin is a heptagon, with seven sides.", V.row(reg(8, 34, '#f8c0c0', 'stop sign') + reg(6, 34, '#ffe08a', 'honeycomb') + reg(7, 34, '#dfe3ea', '50p')))]),
      SC('Your turn', 'Pause, think, then listen', [
        st("Your turn! How many sides does this shape have, and what is it called? Pause and count.", reg(5, 46, '#d6f0e2')),
        st("It has five sides, so it is a pentagon. All the sides look equal, so it is a regular pentagon.", V.eq('5 sides: pentagon', 'g'))]),
      SC('Let’s recap', 'Polygons', [
        st("Well done! A polygon is a flat, closed shape with straight sides. We name it by counting the sides: triangle, quadrilateral, pentagon, hexagon, heptagon, octagon. In a regular polygon, all the sides and angles are equal.",
          V.list(['Polygon: flat, closed, straight sides', '3 triangle, 4 quadrilateral, 5 pentagon', '6 hexagon, 7 heptagon, 8 octagon', 'Corners are called vertices', 'Regular: all sides and angles equal']))])
    ]
  };

  /* ---------- What are the types of triangle? ---------- */
  var triangles = {
    title: 'What are the types of triangle?', goal: 'the four types of triangle and how to tell them apart.',
    scenes: [
      SC('Triangles', 'Three sides, three angles', [
        st("Every triangle has three straight sides and three angles. But triangles can look very different. We sort them by looking at their sides and angles.", BT.triRow ? BT.triRow() : V.note('four triangles')),
        st("Little marks on the sides show which sides are equal. Sides with the same mark are the same length.", V.note('Matching marks = equal sides'))]),
      SC('Equilateral', 'All three sides equal', [
        st("An equilateral triangle has all three sides the same length. Its three angles are also equal.", tri('equilateral') + V.eq('3 equal sides, 3 equal angles', 'g'))]),
      SC('Isosceles', 'Two sides equal', [
        st("An isosceles triangle has two sides the same length. The two angles at the bottom of those sides are also equal.", tri('isosceles') + V.eq('2 equal sides, 2 equal angles', 'b'))]),
      SC('Scalene', 'No sides equal', [
        st("A scalene triangle has no equal sides. All three sides are different lengths, and all three angles are different.", tri('scalene') + V.eq('no equal sides', 'r'))]),
      SC('Right-angled', 'One square corner', [
        st("A right-angled triangle has one right angle, a square corner of ninety degrees. We mark it with a little square.", tri('right') + V.eq('one right angle (90°)', 'b')),
        st("A right-angled triangle can also be isosceles or scalene. It depends on its sides.", V.note('Right-angled describes the angle. Isosceles or scalene describes the sides.'))]),
      SC('Sort them', 'Use the side lengths', [
        st("Let's name triangles from their side lengths. Five, five, five: all equal, so it is equilateral. Six, six, four: two equal, so it is isosceles. Three, four, five: none equal, so it is scalene.",
          V.tbl([['5 cm, 5 cm, 5 cm', 'equilateral'], ['6 cm, 6 cm, 4 cm', 'isosceles'], ['3 cm, 4 cm, 5 cm', 'scalene']], ['Sides', 'Type']))]),
      SC('Your turn', 'Pause, think, then listen', [
        st("Your turn! A triangle has sides of seven, nine and seven centimetres. What type is it? Pause and think.", V.eq('7 cm, 9 cm, 7 cm')),
        st("Two sides are equal, so it is an isosceles triangle.", V.eq('isosceles', 'g'))]),
      SC('Let’s recap', 'Types of triangle', [
        st("Brilliant! Equilateral: all three sides equal. Isosceles: two sides equal. Scalene: no sides equal. Right-angled: one right angle. Marks on the sides show which sides are equal.",
          V.list(['Equilateral: 3 equal sides', 'Isosceles: 2 equal sides', 'Scalene: no equal sides', 'Right-angled: one 90° angle', 'Matching marks show equal sides']))])
    ]
  };

  /* ---------- What makes a shape symmetrical? ---------- */
  var symmetry = {
    title: 'What makes a shape symmetrical?', goal: 'what a line of symmetry is, and how to find and complete symmetrical shapes.',
    scenes: [
      SC('What makes a shape symmetrical?', 'Two matching halves', [
        st("A shape is symmetrical if you can fold it in half so that both halves match exactly. The fold line is called a line of symmetry.", V.rule('Line of symmetry: fold here and both halves match.')),
        st("A butterfly is symmetrical. Its left wing is a mirror image of its right wing.",
          '<svg viewBox="0 0 200 140" width="200" role="img" aria-label="A butterfly with a dashed line of symmetry"><ellipse cx="62" cy="50" rx="48" ry="36" style="fill:#c9a6ef;stroke:var(--fg);stroke-width:2.5"/><ellipse cx="138" cy="50" rx="48" ry="36" style="fill:#c9a6ef;stroke:var(--fg);stroke-width:2.5"/><ellipse cx="70" cy="104" rx="30" ry="24" style="fill:#f8c99c;stroke:var(--fg);stroke-width:2.5"/><ellipse cx="130" cy="104" rx="30" ry="24" style="fill:#f8c99c;stroke:var(--fg);stroke-width:2.5"/><line x1="100" y1="4" x2="100" y2="136" style="stroke:#e2620f;stroke-width:3;stroke-dasharray:7 5"/></svg>')]),
      SC('Lines of symmetry in shapes', 'Some shapes have more than one', [
        st("A rectangle has two lines of symmetry: one down the middle and one across the middle.", '<svg viewBox="0 0 200 130" width="200" role="img" aria-label="A rectangle with its 2 lines of symmetry"><rect x="20" y="20" width="160" height="90" style="fill:#d6f0e2;stroke:var(--fg);stroke-width:3"/><line x1="100" y1="8" x2="100" y2="122" style="stroke:#e2620f;stroke-width:3;stroke-dasharray:7 5"/><line x1="8" y1="65" x2="192" y2="65" style="stroke:#e2620f;stroke-width:3;stroke-dasharray:7 5"/></svg>' + V.eq('rectangle: 2 lines', 'g')),
        st("A square has four: down, across, and both diagonals.", SW + '<svg viewBox="0 0 130 130" width="130" role="img" aria-label="A square with its 4 lines of symmetry"><rect x="20" y="20" width="90" height="90" style="fill:#ecdcf8;stroke:var(--fg);stroke-width:3"/><line x1="65" y1="8" x2="65" y2="122" style="stroke:#e2620f;stroke-width:3;stroke-dasharray:7 5"/><line x1="8" y1="65" x2="122" y2="65" style="stroke:#e2620f;stroke-width:3;stroke-dasharray:7 5"/><line x1="12" y1="12" x2="118" y2="118" style="stroke:#e2620f;stroke-width:3;stroke-dasharray:7 5"/><line x1="118" y1="12" x2="12" y2="118" style="stroke:#e2620f;stroke-width:3;stroke-dasharray:7 5"/></svg>' + V.eq('square: 4 lines', 'b')),
        st("An equilateral triangle has three. A circle has so many we cannot count them all! A scalene triangle has none.", V.tbl([['equilateral triangle', '3'], ['circle', 'infinite'], ['scalene triangle', '0']], ['Shape', 'Lines']))]),
      SC('Letters', 'Which letters are symmetrical?', [
        st("Letters can be symmetrical too. A has a line down the middle. H has two lines. M has one.", V.row(V.card('A', 'b') + V.card('H', 'g') + V.card('M', 'r'))),
        st("But F, G and R have no lines of symmetry.", V.row(V.card('F', 'y') + V.card('G', 'y') + V.card('R', 'y')) + V.eq('no lines', 'r'))]),
      SC('Completing a symmetrical shape', 'Reflect in the mirror line', [
        st("To complete a symmetrical shape, imagine the mirror line is a mirror. Each point on one side has a matching point the same distance away on the other side.",
          LK.grid(8, 5, function (i, j) { return (i === 2 && j >= 1 && j <= 3) || (i === 3 && j === 1) ? true : false; }, { u: 34, mirror: 4, alt: 'Half a shape next to a mirror line' }) + V.note('The dashed orange line is the mirror line.')),
        st("Count the squares from the mirror line, and copy each square the same distance on the other side.",
          SW + LK.grid(8, 5, function (i, j) { return ((i === 2 || i === 5) && j >= 1 && j <= 3) || ((i === 3 || i === 4) && j === 1) ? true : false; }, { u: 34, mirror: 4, alt: 'The completed symmetrical shape' }) + V.eq('both halves match', 'g'))]),
      SC('Symmetry around us', 'Nature and buildings', [
        st("Symmetry is everywhere: in faces, leaves, snowflakes, flags and buildings. Designers use it because symmetrical things look balanced.",
          V.row(reg(6, 34, '#dbeaf7', 'snowflake shape') + reg(4, 34, '#ecdcf8', 'window') + reg(8, 34, '#f8c0c0', 'stop sign')) + V.row(LK.tag('faces', 'b') + LK.tag('leaves', 'g') + LK.tag('flags', 'r') + LK.tag('buildings', 'b')))]),
      SC('Your turn', 'Pause, think, then listen', [
        st("Your turn! How many lines of symmetry does a regular hexagon have? Pause and think.", reg(6, 46, '#dbeaf7')),
        st("Six. Three go through opposite corners, and three go through the middles of opposite sides.", V.eq('regular hexagon: 6 lines', 'g'))]),
      SC('Let’s recap', 'Symmetry', [
        st("Great work! A shape is symmetrical if one half is the mirror image of the other. The fold line is the line of symmetry. Some shapes have several lines, some have none. To complete a shape, copy each point the same distance from the mirror line.",
          V.list(['Symmetrical: both halves match', 'The fold line is a line of symmetry', 'Rectangle 2, square 4, circle infinite', 'Some shapes have none', 'Reflect each point across the mirror line']))])
    ]
  };

  /* ---------- What is an angle? ---------- */
  var angle = {
    title: 'What is an angle?', goal: 'what an angle is, how we measure it, and the names of different angles.',
    scenes: [
      SC('What is an angle?', 'An amount of turn', [
        st("An angle is the amount of turn between two lines that meet at a point. The point where they meet is called the vertex.", V.angle(50, '')),
        st("We measure angles in degrees, with a little circle sign. A bigger turn means a bigger angle, even if the lines are short.", V.rule('Angles are measured in degrees (°).'))]),
      SC('Turns', 'Full, half and quarter', [
        st("A full turn, all the way round, is three hundred and sixty degrees. A half turn is one hundred and eighty degrees.", V.row(LK.tag('full turn = 360°', 'b') + LK.tag('half turn = 180°', 'g'))),
        st("A quarter turn is ninety degrees. We call this a right angle. It looks like the corner of a book. We mark it with a little square.", V.angle(90, '90°') + V.eq('right angle = 90°', 'b'))]),
      SC('Types of angle', 'Compare with a right angle', [
        st("An acute angle is smaller than a right angle. It is less than ninety degrees.", V.angle(40, '40°') + V.eq('acute: less than 90°', 'g')),
        st("An obtuse angle is bigger than a right angle, but less than a straight line. It is between ninety and one hundred and eighty degrees.", SW + V.angle(130, '130°') + V.eq('obtuse: between 90° and 180°', 'r')),
        st("A straight angle is exactly one hundred and eighty degrees, a straight line. And an angle bigger than that is called reflex.", SW + V.angle(180, '180°') + V.eq('straight: 180°. Reflex: more than 180°', 'b'))]),
      SC('Check with a right-angle tester', 'A folded paper corner', [
        st("Fold a piece of paper in half, then in half again. The corner is a perfect right angle. Hold it against an angle: if the angle is smaller, it is acute. If it is bigger, it is obtuse.", V.angle(90, '') + V.note('Folded paper corner = 90°'))]),
      SC('Angles in real life', 'Clocks and compasses', [
        st("At three o'clock, the hands of a clock make a right angle.", V.clock(3, 0) + V.eq('90°', 'b')),
        st("Turning from north to east on a compass is a quarter turn clockwise: ninety degrees. North to south is a half turn: one hundred and eighty degrees.", V.row(LK.tag('N → E: 90°', 'b') + LK.tag('N → S: 180°', 'g')))]),
      SC('Your turn', 'Pause, think, then listen', [
        st("Your turn! What type of angle is one hundred and twenty degrees? Pause and think.", V.angle(120, '120°')),
        st("It is bigger than ninety but smaller than one hundred and eighty, so it is obtuse.", V.eq('120° is obtuse', 'g'))]),
      SC('Let’s recap', 'Angles', [
        st("Fantastic! An angle is an amount of turn, measured in degrees. A right angle is ninety degrees. Acute is less than ninety. Obtuse is between ninety and one hundred and eighty. A straight line is one hundred and eighty, and a full turn is three hundred and sixty.",
          V.list(['Angle = amount of turn, in degrees', 'Right angle = 90°', 'Acute < 90°, obtuse 90° to 180°', 'Straight = 180°, reflex > 180°', 'Full turn = 360°']))])
    ]
  };

  /* ---------- How do I record and display data? ---------- */
  var data = {
    title: 'How do I record and display data?', goal: 'how to collect data with tally marks and show it in tables, bar charts and pictograms.',
    scenes: [
      SC('What is data?', 'Information we collect', [
        st("Data is information we collect to answer a question. For example: what is the favourite fruit in our class?", V.rule('Data = information collected to answer a question.')),
        st("We could ask everyone and write down their answers. But a long list is hard to read, so we organise the data.")]),
      SC('Tally marks', 'Count in groups of five', [
        st("A quick way to record data is with tally marks. Draw one line for each answer.", LK.tally(4)),
        st("For the fifth, draw a line across the first four. This makes a gate of five, which is easy to count.", LK.tally(5) + V.note('A gate = 5')),
        st("Twelve tallies: two gates and two more. Five, ten, eleven, twelve.", LK.tally(12) + V.eq('12', 'g'))]),
      SC('A frequency table', 'Tally and total', [
        st("Put the tallies in a table. The frequency is how many times each answer came up.",
          V.tbl([['Apple', LK.tally(7), '7'], ['Banana', LK.tally(5), '5'], ['Grapes', LK.tally(9), '9'], ['Orange', LK.tally(3), '3']], ['Fruit', 'Tally', 'Frequency'])),
        st("Now it is easy to see that grapes are the most popular, and oranges the least.", V.eq('Most popular: grapes', 'g'))]),
      SC('A bar chart', 'Show it as bars', [
        st("A bar chart shows the same data as bars. The taller the bar, the more people chose it.", V.bars([['Apple', 7], ['Banana', 5], ['Grapes', 9], ['Orange', 3]], 10)),
        st("Every bar chart needs a title, labels on both axes, and a sensible scale going up in equal steps.", V.note('Title, labels, equal steps on the scale'))]),
      SC('A pictogram', 'Pictures stand for numbers', [
        st("A pictogram uses pictures. The key tells you what each picture is worth. Here, one circle stands for two children.", LK.picto([['Apple', 3.5], ['Banana', 2.5], ['Grapes', 4.5], ['Orange', 1.5]], 'Key: one circle = 2 children')),
        st("Half a circle stands for one child. So apple has three and a half circles: seven children.", V.eq('3½ circles × 2 = 7', 'g'))]),
      SC('Reading the data', 'Answer questions', [
        st("How many more children chose grapes than apples? Nine take away seven is two more.", V.eq('9 − 7 = 2 more', 'b')),
        st("How many children were asked altogether? Seven plus five plus nine plus three is twenty-four.", V.eq('7 + 5 + 9 + 3 = 24', 'g'))]),
      SC('Your turn', 'Pause, think, then listen', [
        st("Your turn! In the pictogram, how many children chose banana? Remember, one circle is two children. Pause and think.", LK.picto([['Banana', 2.5]], 'Key: one circle = 2 children')),
        st("Two and a half circles. Two circles are four children, and half a circle is one more. Five children.", V.eq('2½ × 2 = 5', 'g'))]),
      SC('Let’s recap', 'Recording and displaying data', [
        st("Great work! Collect data with tally marks, drawing every fifth line across to make a gate. Put the totals in a frequency table. Show data with a bar chart or a pictogram, and always check the scale or the key.",
          V.list(['Data answers a question', 'Tally in gates of five', 'Frequency = how many times', 'Bar chart: title, labels, equal scale', 'Pictogram: check the key']))])
    ]
  };

  /* ---------- What are factors? ---------- */
  var factors = {
    title: 'What are factors?', goal: 'what factors are, how to find them in pairs, and how they link to multiples.',
    scenes: [
      SC('What are factors?', 'Numbers that divide exactly', [
        st("A factor of a number is a whole number that divides into it exactly, with nothing left over.", V.rule('A factor divides into a number exactly, with no remainder.')),
        st("Three is a factor of twelve, because twelve divided by three is four, with no remainder.", V.eq('12 ÷ 3 = 4 ✓', 'g')),
        st("Five is not a factor of twelve, because twelve divided by five is two, remainder two.", V.eq('12 ÷ 5 = 2 r 2 ✗', 'r'))]),
      SC('Factors as arrays', 'Rectangles of dots', [
        st("Factors are the numbers that make rectangles. Twelve dots can make three rows of four.", V.dots(3, 4, 'var(--accent)') + V.eq('3 × 4 = 12', 'b')),
        st("They can also make two rows of six, or one row of twelve. Each rectangle gives us a factor pair.", V.dots(2, 6, 'var(--good)') + V.eq('2 × 6 = 12', 'g'))]),
      SC('Finding factor pairs', 'Work up from 1', [
        st("To find all the factors of twelve, work up in order and find pairs that multiply to make twelve. One times twelve.", V.eq('1 × 12', 'b')),
        st("Two times six. Three times four. Four is already in our list, so we can stop.", V.eq('2 × 6', 'g') + V.eq('3 × 4', 'r')),
        st("So the factors of twelve are one, two, three, four, six and twelve.", V.cards(['1', '2', '3', '4', '6', '12'], ['b', 'g', 'r', 'y'], true))]),
      SC('Every number has 1 and itself', 'Always factors', [
        st("One is a factor of every number. And every number is a factor of itself. So every number has at least those two factors.", V.eq('7: factors 1 and 7', 'b'))]),
      SC('Factors and multiples', 'Two sides of the same fact', [
        st("Factors and multiples go together. Three times four is twelve. Three and four are factors of twelve, and twelve is a multiple of three and of four.", V.eq('3 × 4 = 12', 'b') + V.row(LK.tag('3 and 4 are factors of 12', 'g') + LK.tag('12 is a multiple of 3 and 4', 'r')))]),
      SC('Your turn', 'Pause, think, then listen', [
        st("Your turn! Find all the factors of eighteen. Pause and look for pairs.", V.eq('factors of 18?')),
        st("One times eighteen. Two times nine. Three times six. The factors are one, two, three, six, nine and eighteen.", V.cards(['1', '2', '3', '6', '9', '18'], ['b', 'g', 'r', 'y'], true))]),
      SC('Let’s recap', 'Factors', [
        st("Well done! A factor divides into a number exactly. Find factors in pairs, working up from one until the pairs meet. One and the number itself are always factors. Factors and multiples are two sides of the same multiplication fact.",
          V.list(['A factor divides exactly', 'Find factors in pairs', 'Start at 1, stop when pairs meet', '1 and the number are always factors', '3 × 4 = 12: factors 3, 4; multiple 12']))])
    ]
  };

  /* ---------- How do I use grid references on a map? ---------- */
  var gridRef = {
    title: 'How do I use grid references on a map?', goal: 'how to find and give grid references on a map.',
    scenes: [
      SC('Grid references', 'Finding places on a map', [
        st("Maps often have a grid of squares. A grid reference tells you exactly which square something is in.", LK.map(5, 4, [[1, 2, 'park', 140], [3, 0, 'school', 215], [0, 3, 'shop', 30]])),
        st("Letters go along the bottom of the map. Numbers go up the side.", V.row(LK.tag('letters: along the bottom', 'b') + LK.tag('numbers: up the side', 'g')))]),
      SC('Along, then up', 'Letter first, then number', [
        st("To give a grid reference, go along first to find the letter, then up to find the number. Remember: along the corridor, then up the stairs.", V.rule('Along the corridor, then up the stairs.')),
        st("The park is above the letter B, in the row numbered three. So its grid reference is B three.", LK.map(5, 4, [[1, 2, 'park', 140]], { hl: [1, 2] }) + V.eq('park = B3', 'g'))]),
      SC('More places', 'Practise reading the map', [
        st("The school is above D, in row one: D one. The shop is above A, in row four: A four.", LK.map(5, 4, [[3, 0, 'school', 215], [0, 3, 'shop', 30]]) + V.eq('school = D1, shop = A4', 'b'))]),
      SC('Watch out!', 'Order matters', [
        st("Always write the letter first. B three and three B mean the same square here, but we always say the letter first so everyone reads the map the same way.", V.eq('✓ B3', 'g') + V.eq('✗ 3B', 'r'))]),
      SC('Moving on the grid', 'Directions', [
        st("If you start at the park, in B three, and move two squares to the right, you arrive at D three.", LK.map(5, 4, [[1, 2, 'start', 140], [3, 2, 'end', 0]]) + V.eq('B3 → 2 right → D3', 'g'))]),
      SC('Your turn', 'Pause, think, then listen', [
        st("Your turn! What is the grid reference of the pond? Pause and go along, then up.", LK.map(5, 4, [[4, 1, 'pond', 200]])),
        st("Along to E, then up to two. The pond is at E two.", V.eq('pond = E2', 'g'))]),
      SC('Let’s recap', 'Grid references', [
        st("Brilliant! A grid reference tells you which square something is in. Go along the bottom to find the letter, then up the side to find the number. Always write the letter first: along the corridor, then up the stairs.",
          V.list(['Letters along the bottom', 'Numbers up the side', 'Along first, then up', 'Write the letter first: B3', 'Count squares to move around']))])
    ]
  };

  BT.lessons(507, 'Watch lesson', [polygons, triangles, symmetry, angle], ['3D shapes', 'Solid shapes and reflections']);
  BT.lessons(508, 'Watch lesson', [data], ['Mode, range and chance', 'Two-way tables, Venn diagrams and pie charts']);
  BT.lessons(510, 'Watch lesson', [factors], ['Prime numbers and square numbers', 'Always true, factors and multiples']);
  BT.lessons(513, 'Watch lesson', [gridRef], ['Turns and mirror images', 'Building with cubes and nets', 'Painted cubes and stacks']);
})();
