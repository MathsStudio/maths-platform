/* learn_extra.js: extra Let's Learn slides where a topic now covers a question its slides did not teach yet.
   Each new step is placed after the topic's own Let's Learn steps, before the worked examples. */
(function () {
  'use strict';
  var S = Studio, BT = window.BT; if (!BT || !BT.add || !BT.X) return;
  var X = BT.X;
  function addLearn(n, id, label, slides) {
    var t = S.topics[n]; if (!t || t.steps.some(function (s) { return s.id === id; })) return;
    BT.add(n, id, label, slides);
    var st = t.steps.filter(function (s) { return s.id === id; })[0], learns = t.steps.filter(function (s) { return s.group === 'learn' || (s.type === 'slides' && s.id !== 'watch'); });
    var firstWorked = t.steps.filter(function (s) { return /^Worked examples/.test(s.label || ''); })[0];
    if (st && firstWorked) { t.steps.splice(t.steps.indexOf(st), 1); t.steps.splice(t.steps.indexOf(firstWorked), 0, st); }
    S.arrange(t);
  }
  BT.addLearn = addLearn;

  /* P6 spatial: coordinates and nets */
  addLearn(13, 'learn9', 'Coordinates and nets', [
    X('Reading coordinates', 'What are the coordinates of a point 4 across and 3 up?',
      ['Start at the origin, (0, 0), where the two axes meet.', 'Go across the x-axis first: 4.', 'Then go up the y-axis: 3.', 'Write them in brackets, across first: (4, 3).'],
      ['(0, 0)', 'across 4', 'up 3', '(4, 3)'], '(4, 3)',
      'Map apps and sat navs use coordinates to say exactly where something is.',
      'how to read coordinates: across first, then up.',
      ['The order matters: (4, 3) and (3, 4) are different points.', 'Remember: along the corridor, then up the stairs.'],
      ['Example 1: 2 across and 5 up is (2, 5).', 'Example 2: (6, 0) is on the x-axis.', 'Example 3: (0, 3) is on the y-axis.']),
    X('Plotting a shape', 'Plot (1, 1), (5, 1) and (3, 4), then join them. What shape is it?',
      ['Plot (1, 1): 1 across, 1 up.', 'Plot (5, 1): 5 across, 1 up.', 'Plot (3, 4): 3 across, 4 up.', 'Join them in order: a triangle.'],
      ['(1, 1)', '(5, 1)', '(3, 4)', 'triangle'], 'A triangle',
      'Designers plot points on a grid to draw logos and shapes on screens.',
      'how to plot points and join them to make a shape.',
      ['Join the points in the order given, and back to the start.', 'A missing corner of a rectangle has the same x as one corner and the same y as another.'],
      ['Example 1: (1, 1) (4, 1) (4, 4) (1, 4) make a square.', 'Example 2: (2, 2) (6, 2) (6, 4) → the fourth corner of the rectangle is (2, 4).', 'Example 3: (0, 0) (4, 0) (2, 3) make an isosceles triangle.']),
    X('Nets of 3D shapes', 'Which 3D shape does a net of 2 triangles and 3 rectangles make?',
      ['A net is a 3D shape opened out flat.', 'Two triangles are the two ends.', 'Three rectangles join them along the sides.', 'It folds into a triangular prism.'],
      ['net', '2 triangles', '3 rectangles', 'triangular prism'], 'A triangular prism',
      'Packaging, like a chocolate box, is cut from a flat net and folded.',
      'how to recognise the nets of common 3D shapes.',
      ['Count the faces of the net: it has the same number as the solid.', 'Picture folding it one face at a time: no two faces can overlap.'],
      ['Example 1: 6 squares → a cube.', 'Example 2: 1 square and 4 triangles → a square-based pyramid.', 'Example 3: 4 triangles → a tetrahedron.'])
  ]);

  /* P7 spatial: transformations and coordinates in four quadrants */
  addLearn(713, 'learn9', 'Transformations and coordinates', [
    X('Translating a shape', 'Translate a triangle with a corner at (1, 2) by 4 right and 3 down.',
      ['A translation slides the shape: it does not turn or flip.', 'Every corner moves the same way: 4 right and 3 down.', 'Add 4 to the across number and take 3 from the up number.', '(1, 2) moves to (5, −1).'],
      ['slide', '4 right, 3 down', '(1 + 4, 2 − 3)', '(5, −1)'], '(1, 2) → (5, −1)',
      'Cartoons on a screen move characters with translations.',
      'how to translate a shape using coordinates.',
      ['Right adds to x, left subtracts. Up adds to y, down subtracts.', 'The shape stays the same size and the same way round.'],
      ['Example 1: (3, 3) moved 2 left → (1, 3).', 'Example 2: (−2, 1) moved 5 up → (−2, 6).', 'Example 3: (0, 0) moved 3 right and 4 down → (3, −4).']),
    X('Reflecting in the axes', 'Reflect the point (3, 2) in the y-axis, then in the x-axis.',
      ['The y-axis is the vertical line where x = 0.', 'Reflecting in the y-axis changes the sign of x: (−3, 2).', 'The x-axis is the horizontal line where y = 0.', 'Reflecting (3, 2) in the x-axis changes the sign of y: (3, −2).'],
      ['y-axis mirror', '(−3, 2)', 'x-axis mirror', '(3, −2)'], '(−3, 2) and (3, −2)',
      'Architects reflect plans to make matching halves of a building.',
      'how to reflect points in the x-axis and the y-axis.',
      ['In the y-axis: x changes sign. In the x-axis: y changes sign.', 'Points on the mirror line stay where they are.'],
      ['Example 1: (4, 1) in the x-axis → (4, −1).', 'Example 2: (−2, 5) in the y-axis → (2, 5).', 'Example 3: (0, 3) in the y-axis → (0, 3).']),
    X('Rotating a shape', 'Rotate a flag a quarter turn clockwise about the origin.',
      ['A rotation turns a shape about a fixed point, the centre.', 'Say the angle: a quarter turn is 90°.', 'Say the direction: clockwise.', 'Use tracing paper: trace it, pin the centre, turn it 90°.'],
      ['centre', '90°', 'clockwise', 'trace and turn'], 'Centre, angle and direction',
      'The hands of a clock rotate about the centre of the clock face.',
      'how to describe and draw a rotation.',
      ['A full description needs the centre, the angle and the direction.', 'A half turn, 180°, is the same clockwise or anticlockwise.'],
      ['Example 1: 90° clockwise about (0, 0) takes (2, 0) to (0, −2).', 'Example 2: 180° about (0, 0) takes (3, 1) to (−3, −1).', 'Example 3: 90° anticlockwise about (0, 0) takes (0, 2) to (−2, 0).'])
  ]);

  /* P7 measure: area of a triangle */
  addLearn(705, 'learn9', 'Area of a triangle', [
    X('Area of a triangle', 'Find the area of a triangle with base 12 cm and height 7 cm.',
      ['A triangle is half of a rectangle with the same base and height.', 'Area = ½ × base × height.', '12 × 7 = 84.', 'Half of 84 is 42 cm².'],
      ['½ of a rectangle', '½ × b × h', '12 × 7 = 84', '42 cm²'], '42 cm²',
      'Builders work out the area of a triangular gable wall to order paint.',
      'how to find the area of any triangle.',
      ['Use the perpendicular height, at a right angle to the base, not a sloping side.', 'Answers are in square units: cm² or m².'],
      ['Example 1: base 10 m, height 4 m → 20 m².', 'Example 2: base 9 cm, height 6 cm → 27 cm².', 'Example 3: base 15 cm, height 8 cm → 60 cm².'])
  ]);
})();
