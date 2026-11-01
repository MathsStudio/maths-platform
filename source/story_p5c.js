/* story_p5c.js: teacher story lessons for P5, part C: 507 shape, 508 data and chance, 509 problem solving, 510 factors and multiples, 513 spatial. */
(function () {
  'use strict';
  var BT = window.BT; if (!BT || !BT.story || !BT.sv) return;
  var V = BT.sv;
  var SC = function (h, sub, steps) { return { h: h, sub: sub, steps: steps }; };
  var st = function (say, html) { return { say: say, html: html || '' }; };
  var S = 'stroke:var(--fg);stroke-width:3.5;stroke-linejoin:round;';
  function svg(w, h, inner, alt) { return '<svg viewBox="0 0 ' + w + ' ' + h + '" width="' + Math.min(w, 300) + '" role="img" aria-label="' + alt + '" style="max-width:100%;height:auto;display:block;margin:6px auto;font:700 14px var(--font-display,sans-serif)">' + inner + '</svg>'; }
  function t(x, y, s, a) { return '<text x="' + x + '" y="' + y + '" text-anchor="' + (a || 'middle') + '" style="fill:var(--fg)">' + s + '</text>'; }
  /* bar model: rows of [label, [[width,text,fill],...]] */
  function bm(rows) {
    var s = '', y = 10;
    rows.forEach(function (r) { s += t(34, y + 24, r[0], 'middle'); var x = 70; r[1].forEach(function (b) { s += '<rect x="' + x + '" y="' + y + '" width="' + b[0] + '" height="36" rx="4" style="fill:' + (b[2] || 'var(--surface-2)') + ';' + S + '"/>' + t(x + b[0] / 2, y + 24, b[1]); x += b[0]; }); y += 50; });
    return svg(340, y, s, 'A bar model');
  }

  /* ======================= 507 SHAPE, ANGLES AND SYMMETRY ======================= */
  var shapes = {
    title: 'Shapes and angles', goal: 'how to name 2D shapes and tell apart right, acute and obtuse angles.',
    scenes: [
      SC('2D shapes', 'Count the sides', [
        st("Flat shapes are called two-D shapes. We name them by counting their straight sides. A triangle has three sides. A quadrilateral has four. A pentagon has five, and a hexagon has six.", V.tbl([['Triangle', '3'], ['Quadrilateral', '4'], ['Pentagon', '5'], ['Hexagon', '6']], ['Shape', 'Sides'])),
        st("Where two sides meet, we get a corner. The corner is called a vertex, and the space between the two sides is an angle.", V.poly([[20, 120], [110, 20], [200, 120]], 'var(--surface-2)', 220, 140, 'A triangle'))]),
      SC('Types of angle', 'Right, acute, obtuse', [
        st("A right angle is a square corner. It measures ninety degrees. You see it in the corner of a book.", V.angle(90, '90°') + V.eq('right angle = 90°', 'b')),
        st("An angle smaller than a right angle is acute. Think of it as a sharp, cute little angle.", V.angle(45, '45°') + V.eq('acute < 90°', 'g')),
        st("An angle bigger than a right angle, but less than a straight line, is obtuse. A straight line is one hundred and eighty degrees.", V.angle(125, '125°') + V.eq('obtuse: between 90° and 180°', 'r'))]),
      SC('Let’s recap', '', [
        st("Great. We name shapes by their sides, and we name angles by comparing them with a right angle.", V.list(['Triangle 3, quadrilateral 4, pentagon 5, hexagon 6', 'Right angle = 90°', 'Acute: smaller than 90°', 'Obtuse: bigger than 90°']))])
    ]
  };
  var sym = {
    title: 'Symmetry and reflection', goal: 'what a line of symmetry is and how to reflect a shape.',
    scenes: [
      SC('Lines of symmetry', 'Fold it in half', [
        st("A shape has a line of symmetry if you can fold it in half and both sides match exactly, like a butterfly's wings. The fold is the mirror line.", svg(240, 140, '<polygon points="120,20 40,120 200,120" style="fill:var(--surface-2);' + S + '"/><line x1="120" y1="8" x2="120" y2="132" style="stroke:var(--bad);stroke-width:3;stroke-dasharray:7 6"/>', 'An isosceles triangle with a dashed line of symmetry')),
        st("A square has four lines of symmetry. A rectangle has two. A circle has lots and lots!", V.tbl([['Square', '4'], ['Rectangle', '2'], ['Equilateral triangle', '3']], ['Shape', 'Lines of symmetry']))]),
      SC('Reflection', 'The mirror image', [
        st("Reflection makes a mirror image. Each point is the same distance from the mirror line, but on the other side. The shape flips over, but its size stays the same.", svg(300, 130, '<polygon points="30,100 30,40 90,100" style="fill:var(--accent);fill-opacity:.35;' + S + '"/><line x1="150" y1="8" x2="150" y2="122" style="stroke:var(--bad);stroke-width:3;stroke-dasharray:7 6"/><polygon points="270,100 270,40 210,100" style="fill:var(--good);fill-opacity:.35;' + S + '"/>', 'A triangle and its reflection in a mirror line') + V.rule('Same distance from the mirror line.'))])
    ]
  };
  var solids = {
    title: '3D shapes', goal: 'faces, edges and vertices of 3D shapes.',
    scenes: [
      SC('Faces, edges, vertices', 'Solid shapes', [
        st("Solid shapes are three-D. A face is a flat surface. An edge is where two faces meet. A vertex is a corner, where edges meet.", V.cards(['face', 'edge', 'vertex'], ['b', 'g', 'r'], true)),
        st("A cube has six faces, twelve edges and eight vertices. A cuboid, like a cereal box, has exactly the same numbers.", V.tbl([['Cube', '6', '12', '8'], ['Square-based pyramid', '5', '8', '5'], ['Triangular prism', '5', '9', '6']], ['Shape', 'Faces', 'Edges', 'Vertices']))])
    ]
  };
  BT.story(507, 'Watch', [shapes, sym, solids]);

  /* ======================= 508 DATA AND CHANCE ======================= */
  var data = {
    title: 'Reading and drawing graphs', goal: 'how to collect data and show it in a bar chart.',
    scenes: [
      SC('Collecting data', 'Favourite pets', [
        st("Data is information. Let's ask the class about their favourite pets. We keep a tally, making a mark for each vote and crossing out every fifth one.", V.tbl([['Cat', '|||| |', '6'], ['Dog', '|||| ||||', '9'], ['Fish', '|||', '3']], ['Pet', 'Tally', 'Total'])),
        st("Now draw a bar chart. Each bar's height shows how many. Dog is the tallest bar, so it is the most popular pet.", V.bars([['Cat', 6], ['Dog', 9], ['Fish', 3]], 10)),
        st("Always give your chart a title, and label both axes. Then anyone can read it without asking you.", V.list(['Title', 'Label the axes', 'Equal-width bars', 'Even scale']))])
    ]
  };
  var avg = {
    title: 'Mode, range and chance', goal: 'how to find the mode and range, and describe chance.',
    scenes: [
      SC('Mode and range', 'Six scores', [
        st("Here are six scores: four, seven, four, nine, four, six. The mode is the number that appears most often. Four appears three times, so the mode is four.", V.cards(['4', '7', '4', '9', '4', '6'], ['g', 'b', 'g', 'b', 'g', 'b'], true) + V.eq('mode = 4', 'g')),
        st("The range tells us how spread out the numbers are. Take the smallest from the biggest. Nine take away four is five.", V.eq('range = 9 − 4 = 5', 'g'))]),
      SC('Chance', 'How likely is it?', [
        st("Chance tells us how likely something is. Some things are impossible, like a pig flying. Some are certain, like the sun rising tomorrow. Others are in between.", V.cards(['impossible', 'unlikely', 'even', 'likely', 'certain'], ['r', 'y', 'b', 'g', 'g'], true)),
        st("When a coin is flipped, heads and tails are equally likely. That is called even chance, or one in two.", V.eq('P(heads) = 1/2', 'b'))])
    ]
  };
  BT.story(508, 'Watch', [data, avg]);

  /* ======================= 509 MIXED REASONING ======================= */
  var plan = {
    title: 'A plan for problems', goal: 'a step-by-step plan, and how bar models help.',
    scenes: [
      SC('The plan', 'Four steps for any problem', [
        st("Big problems feel scary. So we use a plan. First, read the problem and find what it is asking. Second, pick out the numbers you need. Third, choose the operations and solve. Fourth, check that the answer makes sense.", V.list(['Read', 'Pick out the numbers', 'Solve', 'Check'])),
        st("Drawing helps a lot. A bar model is a picture of the numbers in the story.", '')]),
      SC('A bar model', 'Two children share 52 stickers', [
        st("Sam and Ben have fifty-two stickers altogether. Sam has twelve more than Ben. How many does each have? Draw Ben's bar. Sam's bar is the same, plus twelve more.", bm([['Ben', [[100, '?', 'var(--surface-2)']]], ['Sam', [[100, '?', 'var(--surface-2)'], [60, '12', 'var(--hl)']]]])),
        st("Take away the extra twelve. Fifty-two take away twelve is forty. Those forty are two equal bars, so divide by two. Ben has twenty.", V.eq('52 − 12 = 40') + V.eq('40 ÷ 2 = 20', 'g')),
        st("Sam has twenty plus twelve, thirty-two. Check: twenty plus thirty-two is fifty-two. It works!", V.eq('Ben 20, Sam 32', 'g') + V.eq('20 + 32 = 52 ✓', 'g'))])
    ]
  };
  var back = {
    title: 'Working backwards and guess and check', goal: 'two strategies for tricky puzzles.',
    scenes: [
      SC('Working backwards', 'Think of a number', [
        st("I think of a number, double it, and add three. The answer is seventeen. What was my number? Work backwards, using opposite operations, in reverse order.", V.cards(['?', '× 2', '+ 3', '17'], ['y', 'g', 'g', 'b'], true)),
        st("Undo the add three: seventeen take away three is fourteen. Undo the double: fourteen divided by two is seven. My number was seven.", V.eq('17 − 3 = 14') + V.eq('14 ÷ 2 = 7', 'g'))]),
      SC('Guess and check', 'Two numbers', [
        st("Two numbers add up to ten and multiply to make twenty-one. Guess, check, and improve. Try two and eight. They add to ten, but two times eight is sixteen. Too small.", V.eq('2 + 8 = 10, 2 × 8 = 16 ✗', 'r')),
        st("Try three and seven. They add to ten, and three times seven is twenty-one. We found them!", V.eq('3 + 7 = 10, 3 × 7 = 21 ✓', 'g'))])
    ]
  };
  BT.story(509, 'Watch', [plan, back]);

  /* ======================= 510 FACTORS, MULTIPLES AND PRIMES ======================= */
  var fm = {
    title: 'Multiples and factors', goal: 'what multiples and factors are and how to find them.',
    scenes: [
      SC('Multiples', 'The times table list', [
        st("A multiple is a number in a times table. The multiples of four are what you get counting in fours: four, eight, twelve, sixteen, twenty. They go on forever.", V.cards(['4', '8', '12', '16', '20'], ['b'], true)),
        st("Multiples of ten always end in zero. And multiples of two are even numbers.", V.eq('10, 20, 30, 40…', 'g'))]),
      SC('Factors', 'Which numbers fit into 12?', [
        st("A factor is a number that divides exactly into another. Let's find the factors of twelve using arrays. One row of twelve. Two rows of six. Three rows of four.", V.dots(3, 4, 'var(--accent)') + V.eq('1 × 12, 2 × 6, 3 × 4', 'b')),
        st("Every pair gives us factors. So the factors of twelve are one, two, three, four, six and twelve.", V.cards(['1', '2', '3', '4', '6', '12'], ['g'], true))])
    ]
  };
  var prime = {
    title: 'Prime numbers and square numbers', goal: 'what prime and square numbers are.',
    scenes: [
      SC('Prime numbers', 'Only two factors', [
        st("A prime number has exactly two factors: one and itself. Seven can only be made as one times seven, so it is prime. Nine can be three times three, so it is not.", V.eq('7: factors 1, 7', 'g') + V.eq('9: factors 1, 3, 9', 'r')),
        st("Here are the primes up to twenty. Notice two is the only even prime. And one is not prime, because it has only one factor.", V.cards(['2', '3', '5', '7', '11', '13', '17', '19'], ['b'], true))]),
      SC('Square numbers', 'Making a square', [
        st("A square number is what you get when you multiply a number by itself. Four rows of four dots make a square. Four times four is sixteen.", V.dots(4, 4, 'var(--good)') + V.eq('4 × 4 = 16', 'g')),
        st("The first square numbers are one, four, nine, sixteen, twenty-five. We write four squared as four with a little two.", V.cards(['1', '4', '9', '16', '25'], ['g'], true))])
    ]
  };
  BT.story(510, 'Watch', [fm, prime]);

  /* ======================= 513 SPATIAL AWARENESS ======================= */
  var turns = {
    title: 'Turns and mirror images', goal: 'how to describe turns and mirror images.',
    scenes: [
      SC('Turns', 'Quarter, half, three-quarter', [
        st("A full turn takes you all the way round, back to where you began. A half turn is turning to face the opposite way. A quarter turn is a right angle, ninety degrees.", V.tbl([['Quarter turn', '90°'], ['Half turn', '180°'], ['Three-quarter turn', '270°'], ['Full turn', '360°']], ['Turn', 'Angle'])),
        st("Clockwise means the way the clock hands move. Anticlockwise is the opposite way. Always say which way you are turning.", V.cards(['↻ clockwise', '↺ anticlockwise'], ['b', 'r'], true))]),
      SC('Mirror images', 'Left becomes right', [
        st("In a mirror, left and right swap, but up and down stay the same. The distance to the mirror stays the same too.", V.rule('Same distance from the mirror, flipped sideways.'))])
    ]
  };
  var cubes = {
    title: 'Building with cubes and nets', goal: 'how to picture solids and unfold them into nets.',
    scenes: [
      SC('Counting cubes', 'A 2 by 2 by 2 block', [
        st("Imagine a block made from cubes, two cubes long, two wide, and two high. First layer has four cubes. Second layer has four more. Eight cubes altogether.", V.dots(2, 2, 'var(--accent)') + V.eq('4 + 4 = 8 cubes', 'g')),
        st("Careful: some cubes hide behind others. So count by layers, not just by what you see.", V.rule('Count layer by layer.'))]),
      SC('Nets', 'Unfold a cube', [
        st("A net is a flat pattern that folds into a solid. The net of a cube is six squares joined together. Fold the squares up, and you have a cube!", svg(240, 180, '<g style="fill:var(--surface-2);' + S + '"><rect x="90" y="10" width="50" height="50"/><rect x="40" y="60" width="50" height="50"/><rect x="90" y="60" width="50" height="50"/><rect x="140" y="60" width="50" height="50"/><rect x="90" y="110" width="50" height="50"/><rect x="190" y="60" width="50" height="50" style="fill:var(--hl)"/></g>', 'A cross-shaped net of a cube')),
        st("Not every pattern of six squares works. The net must fold without overlapping. Always picture folding it step by step.", V.list(['Six squares', 'No overlapping', 'Picture the folds']))])
    ]
  };
  BT.story(513, 'Watch', [turns, cubes]);
})();
