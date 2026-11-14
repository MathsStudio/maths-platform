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
  /* S2 number: negatives, three decimal places, primes and factors (asked in the S2 question set) */
  addLearn(821, 'learn9', 'Negatives, decimals, primes and factors', [
    X('Calculating with negative numbers', 'Work out −7 + 12 and (−4) × (−6).',
      ['Adding: start at −7 on the number line and move 12 to the right.', '−7 + 12 = 5.', 'Multiplying: two negatives give a positive.', '(−4) × (−6) = 24.'],
      ['start at −7', 'right 12', '5', '− × − = +'], '5 and 24',
      'Weather forecasters work out temperature changes below zero.',
      'how to add, subtract, multiply and divide with negative numbers.',
      ['Subtracting a negative is the same as adding: 3 − (−5) = 8.', 'Same signs give a positive answer; different signs give a negative answer.'],
      ['Example 1: −3 − 8 = −11.', 'Example 2: 5 − (−2) = 7.', 'Example 3: (−36) ÷ 4 = −9.']),
    X('Rounding to three decimal places', 'Round 4.73862 to three decimal places.',
      ['Count three places after the point: 4.738|62.', 'Look at the next digit: 6.', '6 is 5 or more, so round the 8 up to 9.', 'The answer is 4.739.'],
      ['4.738|62', 'next digit 6', 'round up', '4.739'], '4.739',
      'Scientists and engineers give measurements to three decimal places.',
      'how to round a decimal to three places.',
      ['Keep any zeros that are needed: 2.1996 → 2.200 to three places.', 'Only the digit straight after the cut decides.'],
      ['Example 1: 0.12345 → 0.123.', 'Example 2: 7.0806 → 7.081.', 'Example 3: 3.14159 → 3.142.']),
    X('Primes, factors and multiples', 'Is 51 prime? Find the HCF and LCM of 12 and 18.',
      ['A prime has exactly two factors: 1 and itself.', '51 = 3 × 17, so 51 is not prime.', 'Factors of 12 and 18 in common: 1, 2, 3, 6. The HCF is 6.', 'Multiples of 12: 12, 24, 36 … 36 is the first also in 18’s list, so the LCM is 36.'],
      ['two factors', '51 = 3 × 17', 'HCF 6', 'LCM 36'], 'Not prime; HCF 6, LCM 36',
      'Bus timetables use the LCM to find when two buses leave together again.',
      'how to spot primes and find the highest common factor and lowest common multiple.',
      ['1 is not prime: it has only one factor.', 'HCF × LCM = the two numbers multiplied: 6 × 36 = 12 × 18.'],
      ['Example 1: 29 is prime.', 'Example 2: HCF of 20 and 30 is 10.', 'Example 3: LCM of 4 and 6 is 12.'])
  ]);

  /* S3 algebra: substitution and the nth term (asked in the S3 question set) */
  addLearn(845, 'learn9', 'Substitution and the nth term', [
    X('Substituting into an expression', 'Find 3a² − 2b when a = 4 and b = −5.',
      ['Swap each letter for its number, in brackets.', '3 × (4)² − 2 × (−5).', 'Powers first: 4² = 16, so 3 × 16 = 48.', '− 2 × (−5) = +10, so 48 + 10 = 58.'],
      ['3(4)² − 2(−5)', '4² = 16', '48', '58'], '58',
      'Spreadsheets substitute numbers into formulas every time a value changes.',
      'how to put numbers in place of letters, following BODMAS.',
      ['Use brackets for negative numbers so the signs stay right.', '3a² means 3 × a², not (3a)².'],
      ['Example 1: 2x + 7 when x = 3 → 13.', 'Example 2: p² − q when p = −3, q = 4 → 5.', 'Example 3: 5(m − n) when m = 2, n = −1 → 15.']),
    X('Finding the nth term', 'Find the nth term of 7, 11, 15, 19, …',
      ['The difference each time is 4, so start with 4n.', '4n gives 4, 8, 12, 16.', 'Each term is 3 more than that.', 'The nth term is 4n + 3.'],
      ['+4 each time', '4n', '+3', '4n + 3'], '4n + 3',
      'Taxi fares follow a rule: a fixed charge plus the same cost per mile.',
      'how to write a rule for any term of a linear sequence.',
      ['Check the rule: n = 1 gives 4 + 3 = 7. ✓', 'A falling sequence has a negative difference: 20, 17, 14 … is 23 − 3n.'],
      ['Example 1: 5, 8, 11 … → 3n + 2.', 'Example 2: 2, 7, 12 … → 5n − 3.', 'Example 3: 10, 8, 6 … → 12 − 2n.'])
  ]);

  /* S1 data: types of data */
  addLearn(812, 'learn9', 'Types of data', [
    X('Types of data', 'Is shoe size discrete or continuous? Is favourite colour numerical?',
      ['Categorical data is in words or groups: favourite colour.', 'Numerical data is numbers.', 'Discrete numbers are counted and take set values: shoe size, goals.', 'Continuous numbers are measured and can be any value: height, time.'],
      ['categorical', 'numerical', 'discrete: counted', 'continuous: measured'], 'Discrete; no, it is categorical',
      'Survey designers choose the right chart for each type of data.',
      'how to sort data into categorical, discrete and continuous.',
      ['Bar charts suit categorical and discrete data; continuous data goes in grouped tables or histograms.', 'Ask: could it be 2.37…? If yes, it is continuous.'],
      ['Example 1: number of pets → discrete.', 'Example 2: time to run 100 m → continuous.', 'Example 3: type of car → categorical.'])
  ]);
})();
