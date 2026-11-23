/* P6 topics 7 Shape angles symmetry, 8 Data and chance */
(function () {
  'use strict';
  var BT = window.BT; if (!BT || !BT.px) return;
  var X = BT.px.X, tbl = BT.px.tbl, shape = BT.px.shape, pie = BT.px.pie, nl = BT.px.nl, L = BT.L;

  X('Classifying 2D shapes', 'how to classify polygons, triangles and quadrilaterals by their sides and angles.', '2D shapes',
    ['Properties', "Polygons are named by their number of sides. Triangles are classified by sides (equilateral, isosceles, scalene) and by angles (right-angled). Quadrilaterals include squares, rectangles, rhombuses, parallelograms, trapeziums and kites. Regular polygons have equal sides and angles.", [tbl([['Shape', 'Properties'], ['Square', '4 equal sides, 4 right angles'], ['Rhombus', '4 equal sides, opposite angles equal'], ['Parallelogram', 'Opposite sides equal and parallel'], ['Trapezium', '1 pair of parallel sides']])]],
    [['Triangle', "A triangle has two equal sides. It is isosceles.", ['2 equal sides', 'g|Isosceles']],
     ['Quadrilateral', "A shape has 4 equal sides but no right angles. It is a rhombus.", ['4 equal sides', 'g|Rhombus']],
     ['Angle sum', "Three angles of a quadrilateral are 90°, 80° and 100°. 90 + 80 + 100 = 270. 360 − 270 = 90°.", ['360 − 270', 'g|90°']],
     ['Regular polygon', "A regular hexagon has 6 equal sides and 6 equal angles.", ['6 equal sides', 'g|Regular hexagon']]],
    [['Square is not a rectangle', "Mistake one: saying a square is not a rectangle.", 'Square is not a rectangle ✗', 'A square is a rectangle with equal sides ✓'],
     ['Wrong angle total', "Mistake two: using 180 for a quadrilateral.", '180 − 270 ✗', '360 − 270 ✓']],
    ["Floor tiles are often squares or hexagons because they fit together.", ['Tessellations']],
    [['How many sides has a heptagon?', "Seven.", ['hepta = 7'], '7'],
     ['A triangle has angles 60°, 60°, 60°. What type is it?', "All equal.", ['3 equal angles'], 'Equilateral'],
     ['Three angles of a quadrilateral are 70°, 110° and 80°. Find the fourth.', "360 − 260.", ['70 + 110 + 80 = 260'], '100°']],
    ["Sides and angles name the shape.", ['Triangle 180°', 'Quadrilateral 360°']]);

  X('Circles and their parts', 'how to name the parts of a circle and use radius, diameter and circumference.', 'Circles',
    ['Parts of a circle', "The centre is the middle point. The radius goes from the centre to the edge. The diameter goes across the circle through the centre and is twice the radius. The circumference is the distance around the circle. About 3 times the diameter.", ['d = 2r', 'C ≈ 3 × d']],
    [['Radius and diameter', "A circle has radius 7 cm. The diameter is 14 cm.", ['2 × 7', 'g|14 cm']],
     ['Finding the radius', "A circle has diameter 18 cm. The radius is 9 cm.", ['18 ÷ 2', 'g|9 cm']],
     ['Estimating the circumference', "A circle has diameter 10 cm. The circumference is about 3 × 10 = 30 cm (more exactly 31.4 cm).", ['3 × 10', 'g|≈ 30 cm']],
     ['Chord and arc', "A chord is a straight line joining two points on the circle. An arc is part of the circumference.", ['Chord', 'Arc']]],
    [['Radius and diameter', "Mistake one: confusing radius and diameter.", 'r = 14 when d = 7 ✗', 'r = 7 when d = 14 ✓'],
     ['Circumference as area', "Mistake two: mixing circumference with area.", 'Circumference in cm² ✗', 'Circumference in cm ✓']],
    ["A wheel with diameter 60 cm rolls about 3 × 60 = 180 cm in one turn.", ['≈ 180 cm']],
    [['A circle has radius 4 cm. What is the diameter?', "2 × 4.", ['2 × 4'], '8 cm'],
     ['A circle has diameter 22 cm. What is the radius?', "÷ 2.", ['22 ÷ 2'], '11 cm'],
     ['Estimate the circumference of a circle with diameter 20 cm.', "3 × 20.", ['3 × 20'], '≈ 60 cm']],
    ["d = 2r. C ≈ 3d.", ['Radius to the edge']]);

  X('Angle facts', 'how to measure angles and use facts about angles on a line, around a point and vertically opposite.', 'Angles',
    ['Angle rules', "Angles on a straight line add to 180°. Angles around a point add to 360°. Vertically opposite angles are equal. Angles in a triangle add to 180°.", ['Line 180°', 'Point 360°', 'Opposite angles equal']],
    [['Straight line', "Angles on a line: 125° and ?. 180 − 125 = 55°.", ['180 − 125', 'g|55°']],
     ['Around a point', "Angles 90°, 120° and 100° and ? meet at a point. 90 + 120 + 100 = 310. 360 − 310 = 50°.", ['360 − 310', 'g|50°']],
     ['Vertically opposite', "Two lines cross. One angle is 65°. The opposite angle is also 65°. The angles next to it are 180 − 65 = 115°.", ['65° and 65°', 'g|115°']],
     ['Triangle', "Two angles of a triangle are 50° and 70°. 180 − 120 = 60°.", ['180 − 120', 'g|60°']]],
    [['Wrong total', "Mistake one: using 360 on a line.", '360 − 125 ✗', '180 − 125 ✓'],
     ['Opposite angles', "Mistake two: thinking opposite angles add to 180.", 'Opposite angles add to 180 ✗', 'Opposite angles are equal ✓']],
    ["Scissors, signposts and road junctions all make angles.", ['Junction angles']],
    [['Angles on a straight line: 40° and ?. Find ?', "140°.", ['180 − 40'], '140°'],
     ['Angles around a point: 100°, 150° and ?. Find ?', "360 − 250.", ['360 − 250'], '110°'],
     ['Two lines cross and make an angle of 72°. Find the vertically opposite angle.', "Equal.", ['72°'], '72°']],
    ["Line 180. Point 360. Opposite equal.", ['Triangle 180']]);

  X('Symmetry', 'how to find lines of symmetry and the order of rotational symmetry.', 'Symmetry',
    ['Line and rotational symmetry', "A line of symmetry splits a shape into two matching halves. A shape has rotational symmetry if it looks the same after a turn of less than 360°. The order is the number of times it fits in one full turn.", ['Square: 4 lines, order 4']],
    [['Lines', "A rectangle has 2 lines of symmetry.", ['Vertical, horizontal', 'g|2']],
     ['Rotational', "A rectangle fits onto itself twice in a full turn. Order 2.", ['Half turn', 'g|Order 2']],
     ['Equilateral triangle', "An equilateral triangle has 3 lines of symmetry and order 3.", ['3 lines, order 3']],
     ['None', "A scalene triangle has no lines of symmetry and no rotational symmetry (order 1).", ['0 lines', 'Order 1']]],
    [['Diagonals of a rectangle', "Mistake one: diagonals as lines of symmetry in a rectangle.", 'Rectangle 4 lines ✗', 'Rectangle 2 lines ✓'],
     ['Order of a parallelogram', "Mistake two: lines of symmetry for a parallelogram.", 'Parallelogram has 2 lines ✗', 'No lines, order 2 ✓']],
    ["Logos, flags and snowflakes are often symmetrical.", ['Logos']],
    [['How many lines of symmetry has a regular pentagon?', "5.", ['5 sides'], '5'],
     ['What is the order of rotational symmetry of a square?', "4.", ['4 quarter turns'], '4'],
     ['Does a scalene triangle have a line of symmetry?', "No.", ['No matching halves'], 'No']],
    ["Lines: matching halves. Order: fits in one turn.", ['Regular n-gon: n lines, order n']]);

  X('3D shapes and their nets', 'how to describe 3D shapes and match nets to solids.', '3D shapes',
    ['Faces, edges, vertices', "A prism has the same cross-section all along its length. A pyramid has a base and triangular faces meeting at a point. A cube has 6 faces, 12 edges and 8 vertices. A net is a flat pattern that folds into a solid.", [tbl([['Solid', 'Faces', 'Edges', 'Vertices'], ['Cube', '6', '12', '8'], ['Triangular prism', '5', '9', '6'], ['Square-based pyramid', '5', '8', '5']])]],
    [['Describing', "A triangular prism has 2 triangle faces and 3 rectangle faces. 5 faces, 9 edges and 6 vertices.", ['2 + 3 = 5', 'g|5, 9, 6']],
     ['Net', "The net of a cube has 6 squares. The net of a triangular prism has 2 triangles and 3 rectangles.", ['6 squares']],
     ['Euler', "For any solid: faces + vertices − edges = 2. For a cube: 6 + 8 − 12 = 2.", ['6 + 8 − 12', 'g|2']],
     ['Cylinder', "A cylinder has 2 circular faces and 1 curved surface. Its net is 2 circles and a rectangle.", ['2 circles + rectangle']]],
    [['Edges and vertices', "Mistake one: swapping edges and vertices.", 'Cube: 8 edges ✗', 'Cube: 12 edges, 8 vertices ✓'],
     ['Wrong net', "Mistake two: a net that overlaps.", 'Six squares in a line fold to a cube ✗', 'They overlap ✓']],
    ["Cereal boxes are cuboids. The cardboard cut-out is a net.", ['Box nets']],
    [['How many vertices has a square-based pyramid?', "5.", ['4 + 1'], '5'],
     ['Check Euler for a triangular prism: faces + vertices − edges.', "5 + 6 − 9.", ['5 + 6 − 9'], '2'],
     ['What 2D shapes make the net of a cylinder?', "2 circles and a rectangle.", ['Circles + rectangle'], '2 circles and a rectangle']],
    ["Faces, edges, vertices.", ['F + V − E = 2']]);

  L.usePri(7, ['Classifying 2D shapes', 'Circles and their parts', 'Angle facts', 'Symmetry', '3D shapes and their nets']);

  X('Collecting and organising data', 'how to collect data and record it in tally charts and frequency tables.', 'Data',
    ['Tally and frequency', "Data is information. A survey asks questions to collect data. A tally chart records data. A frequency table shows the total for each group. Grouped data puts values in ranges such as 0 to 9 and 10 to 19.", [tbl([['Shoe size', 'Tally', 'Frequency'], ['3', '|||| |', '6'], ['4', '|||| ||||', '9'], ['5', '|||', '3']])]],
    [['Total', "How many pupils? 6 + 9 + 3 = 18.", ['6 + 9 + 3', 'g|18']],
     ['Most common', "The mode is the size with the highest frequency: 4.", ['9 is highest', 'g|4']],
     ['Grouped', "Heights: 128, 133, 140, 135, 142. Groups 125 to 134: 2, 135 to 144: 3.", ['128 and 133', '135, 140, 142']],
     ['Fair survey', "To get a fair result, ask a sample from different groups, not just your friends.", ['Fair sample']]],
    [['Counting a group of five', "Mistake one: counting five as four.", 'Group of five = 4 ✗', 'Group of five = 5 ✓'],
     ['Biased sample', "Mistake two: asking only friends.", 'Ask 5 friends ✗', 'Ask a mixed group ✓']],
    ["Councils survey residents before making decisions.", ['Resident survey']],
    [['A tally shows |||| |||| ||. What is the frequency?', "5 + 5 + 2.", ['12'], '12'],
     ['Using the table, how many wear size 5?', "3.", ['Size 5'], '3'],
     ['How many more wear size 4 than size 5?', "9 − 3.", ['9 − 3'], '6']],
    ["Tally in fives. Total at the end.", ['Frequency']]);

  X('Reading and choosing graphs', 'how to read and choose bar charts, line graphs and pie charts.', 'Graphs',
    ['Which graph', "Bar charts compare categories. Line graphs show change over time. Pie charts show parts of a whole. Always check the title, axis labels, units and scale.", ['Bar: compare', 'Line: change over time', 'Pie: parts of a whole']],
    [['Bar chart', "A bar chart shows 18 pupils like football and 12 like netball. The difference is 18 − 12 = 6.", ['18 − 12', 'g|6']],
     ['Line graph', "A line graph shows the temperature at 9 am as 8 °C and at 3 pm as 16 °C. The rise is 8 °C.", ['16 − 8', 'g|8 °C']],
     ['Pie chart', "A pie chart of 60 pupils has a half-circle for walking. 60 ÷ 2 = 30 pupils walk.", [pie([['Walk', 0.5], ['Bus', 0.25], ['Car', 0.25]], 'Pie chart of how 60 pupils travel'), 'g|30']],
     ['Which graph?', "To show how a plant grows each week, use a line graph.", ['Change over time', 'g|Line graph']]],
    [['Reading the label', "Mistake one: ignoring the scale.", 'Each step is 1, reading 6 as 3 ✗', 'Check the scale ✓'],
     ['Wrong graph', "Mistake two: using a pie chart for change over time.", 'Pie for growth ✗', 'Line for growth ✓']],
    ["Newspapers use all three types of graph.", ['Graph choice']],
    [['A half of a pie chart of 40 pupils is "walk". How many walk?', "20.", ['40 ÷ 2'], '20'],
     ['A line graph rises from 10 °C to 22 °C. By how much?', "12.", ['22 − 10'], '12 °C'],
     ['Which graph shows rainfall each month?', "Bar chart (or line).", ['Categories'], 'Bar chart']],
    ["Title. Labels. Scale.", ['Pick the right graph']]);

  X('Mean, median, mode and range with larger sets', 'how to calculate averages and range, including finding a missing value.', 'Averages',
    ['Averages', "The mean is the total divided by the number of values. The median is the middle value when ordered. The mode is the most common. The range is the biggest minus the smallest.", ['Mean = total ÷ count']],
    [['Mean', "Find the mean of 8, 5, 9, 6, 7. Total 35. 35 ÷ 5 = 7.", ['35 ÷ 5', 'g|7']],
     ['Median', "Median of 12, 3, 9, 5, 7: order 3, 5, 7, 9, 12. The middle is 7.", ['3, 5, 7, 9, 12', 'g|7']],
     ['Missing value', "The mean of 4 numbers is 6. Three are 5, 6, 8. The total is 24. 5 + 6 + 8 = 19. The fourth is 5.", ['24 − 19', 'g|5']],
     ['Range', "Range of 3, 9, 12, 5, 7 is 12 − 3 = 9.", ['12 − 3', 'g|9']]],
    [['Dividing by the wrong number', "Mistake one: dividing by the wrong count.", '35 ÷ 4 ✗', '35 ÷ 5 ✓'],
     ['Not ordering', "Mistake two: choosing the middle without ordering.", '12, 3, 9, 5, 7: middle 9 ✗', 'Order first: median 7 ✓']],
    ["Teachers use the mean to compare class results.", ['Mean score']],
    [['Find the mean of 10, 12, 14, 8.', "44 ÷ 4.", ['44 ÷ 4'], '11'],
     ['Find the median of 4, 9, 2, 7, 5.', "2, 4, 5, 7, 9.", ['5'], '5'],
     ['The mean of 5 numbers is 8. Four are 6, 7, 9, 10. Find the fifth.', "40 − 32.", ['40 − 32'], '8']],
    ["Mean: share equally.", ['Order for median']]);

  X('Probability as a fraction', 'how to use the probability scale and write probabilities as fractions.', 'Probability',
    ['The scale from 0 to 1', "Probability is a number from 0 (impossible) to 1 (certain). For equally likely outcomes, probability = number of ways ÷ total outcomes. Probabilities of all outcomes add to 1.", [nl(0, 1, 0.5, [], 'Probability scale from 0 to 1')]],
    [['A dice', "Probability of rolling a 4 on a fair dice: 1/6.", ['1 ÷ 6', 'g|1/6']],
     ['Even', "Probability of an even number: 3/6 = 1/2.", ['2, 4, 6', 'g|1/2']],
     ['Counters', "A bag has 5 red, 3 blue and 2 green. P(red) = 5/10 = 1/2. P(not red) = 1/2.", ['5/10', 'g|1/2']],
     ['Total is 1', "P(blue) + P(not blue) = 1. P(blue) = 3/10, so P(not blue) = 7/10.", ['1 − 3/10', 'g|7/10']]],
    [['Using the number of colours', "Mistake one: using 3 as the total.", 'P(red) = 1/3 ✗', 'P(red) = 5/10 ✓'],
     ['Not adding to 1', "Mistake two: probabilities that do not add to 1.", '1/2 + 1/3 = 1 ✗', 'Check they sum to 1 ✓']],
    ["Weather forecasts give probabilities such as a 30% chance of rain.", ['3/10']],
    [['A bag has 4 red and 6 blue counters. P(blue)?', "6/10.", ['6/10'], '3/5'],
     ['P(a number greater than 4 on a dice)?', "5 or 6.", ['2/6'], '1/3'],
     ['P(rain) = 0.3. P(no rain)?', "1 − 0.3.", ['1 − 0.3'], '0.7']],
    ["Ways ÷ total. Sum is 1.", ['0 to 1']]);

  X('Venn diagrams and two-way tables', 'how to read and complete Venn diagrams and two-way tables.', 'Sorting data',
    ['Two sets', "A Venn diagram uses overlapping circles. The overlap holds things in both sets. A two-way table sorts by two features at once and has totals for rows and columns.", [tbl([['', 'Cat', 'No cat', 'Total'], ['Dog', '5', '8', '13'], ['No dog', '7', '10', '17'], ['Total', '12', '18', '30']])]],
    [['Reading', "How many have both a dog and a cat? Row Dog, column Cat: 5.", ['Dog, Cat', 'g|5']],
     ['Missing', "Row No dog: total 17, 7 have a cat. 17 − 7 = 10 have no cat.", ['17 − 7', 'g|10']],
     ['Venn', "20 like football, 15 like netball, 6 like both. Football only: 14. Netball only: 9. Either: 14 + 6 + 9 = 29.", ['14 + 6 + 9', 'g|29']],
     ['Total check', "12 + 18 = 30 = 13 + 17.", ['30', 'g|✓']]],
    [['Counting the overlap twice', "Mistake one: adding 20 and 15.", '20 + 15 = 35 ✗', '14 + 6 + 9 = 29 ✓'],
     ['Wrong row', "Mistake two: reading the wrong row.", 'No dog, cat: 5 ✗', 'No dog, cat: 7 ✓']],
    ["Surveys of favourite things are often shown in Venn diagrams.", ['Survey Venn']],
    [['In the table, how many have a dog?', "13.", ['5 + 8'], '13'],
     ['In a Venn diagram 12 like tea, 8 like coffee, 3 like both. How many like only tea?', "12 − 3.", ['12 − 3'], '9'],
     ['How many pupils in the table altogether?', "30.", ['13 + 17'], '30']],
    ["Count the overlap once.", ['Totals check']]);

  L.usePri(8, ['Collecting and organising data', 'Reading and choosing graphs', 'Mean, median, mode and range with larger sets', 'Probability as a fraction', 'Venn diagrams and two-way tables']);
})();
