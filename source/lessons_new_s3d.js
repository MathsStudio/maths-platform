(function () {
  var BT = window.BT; if (!BT || !BT.L || !BT.sv || !BT.lk) return;
  var L = BT.L, V = BT.sv, E = L.E, S = L.st, SC = L.SC,
    g = function (t) { return E(t, 'g'); }, r = function (t) { return E(t, 'r'); };
  function N(title, goal, scenes) { L.full(title, scenes); return L.ep(title, goal, []); }

  N('How do you find the gradient of a line from two points?', 'how to measure steepness using rise over run.', [
    SC('Gradient', 'Start with the basics', [
      S("The gradient of a line tells us how steep it is. A big gradient is a steep line. A small gradient is a gentle slope. A gradient of zero is a flat line.", V.list(['Steep: big gradient', 'Gentle: small gradient', 'Flat: zero'])),
      S("We measure it as rise over run. The rise is how far the line goes up. The run is how far it goes across.", E('Gradient = rise ÷ run', 'g'))
    ]),
    SC('From a graph', 'Example 1: counting squares', [
      S("A line goes through the points zero, one and four, nine. Going from the first point to the second, we move across four, and up eight. Gradient is eight divided by four, which is two.", E('Run = 4, Rise = 8') + g('8 ÷ 4 = 2'))
    ]),
    SC('The formula', 'Example 2: using coordinates', [
      S("With two points, x one y one and x two y two, the gradient is y two minus y one, over x two minus x one. The change in y over the change in x.", E('m = (y₂ − y₁) ÷ (x₂ − x₁)', 'g'))
    ]),
    SC('Worked', 'Example 3: (1, 3) and (5, 11)', [
      S("y two minus y one is eleven minus three, which is eight. x two minus x one is five minus one, which is four. Eight over four is two.", E('(11 − 3) ÷ (5 − 1)') + g('= 8 ÷ 4 = 2'))
    ]),
    SC('Negative gradient', 'Example 4: going downhill', [
      S("Points two, seven and six, three. Rise is three minus seven, minus four. Run is six minus two, four. Gradient is minus four over four, which is minus one. A line that goes down as you move right has a negative gradient.", E('(3 − 7) ÷ (6 − 2) = −4 ÷ 4') + g('= −1'))
    ]),
    SC('Same order', 'Example 5: stay consistent', [
      S("You can use either point first, but be consistent. If you start the top with y two, you must start the bottom with x two. Using the points from Example three the other way round: three minus eleven is minus eight. One minus five is minus four. Minus eight over minus four is two. Same answer.", E('(3 − 11) ÷ (1 − 5) = −8 ÷ −4') + g('= 2'))
    ]),
    SC('Special lines', 'Example 6: flat and vertical', [
      S("A flat line has the same y everywhere, so the rise is zero. The gradient is zero. A vertical line has the same x everywhere, so the run is zero, and we cannot divide by zero. A vertical line has no gradient, we say it is undefined.", V.list(['Horizontal: m = 0', 'Vertical: undefined']))
    ]),
    SC('Watch out!', 'Three common mistakes', [
      S("Mistake one: dividing run by rise. It is rise over run.", r('run ÷ rise  ✗') + g('rise ÷ run  ✓')),
      S("Mistake two: mixing the order of the points. Top and bottom must match.", V.rule('Same order on top and bottom.')),
      S("Mistake three: dropping the negative sign.", V.rule('Down to the right: negative.'))
    ]),
    SC('In real life', 'Roads and ramps', [
      S("A road sign saying ten per cent means a gradient of one in ten. For every ten metres across, you climb one metre. A wheelchair ramp is made with a gentle gradient for safety.", V.note('Gradient: steepness'))
    ]),
    L.turn("Your turn! Number one. Find the gradient between zero, two and three, eight. Pause and try it.", E('(0, 2), (3, 8)'), "Rise six, run three. Two.", g('2')),
    L.turn("Your turn! Number two. Find the gradient between one, five and four, two. Pause and try it.", E('(1, 5), (4, 2)'), "Rise is minus three. Run is three. Minus one.", g('−1')),
    L.turn("Your turn! Number three. What is the gradient of a horizontal line? Pause and think.", E('?'), "Zero.", g('0')),
    L.rec('How do you find the gradient of a line from two points?', "Gradient is rise over run. With two points, subtract the y values on top and the x values on the bottom, in the same order. A line going up to the right has a positive gradient. A line going down has a negative gradient. A horizontal line has gradient zero.", ['Rise ÷ run', '(y₂ − y₁) ÷ (x₂ − x₁)', 'Same order', 'Negative: downhill'])
  ]);

  N('How do you read y = mx + c from a graph and from real life?', 'how to find the gradient and y-intercept from a line.', [
    SC('The equation', 'Start with the basics', [
      S("Every straight line has an equation in the form y equals m x plus c. The letter m is the gradient. The letter c is the y-intercept, where the line crosses the y axis.", E('y = mx + c', 'b') + V.list(['m: gradient', 'c: where it crosses the y axis']))
    ]),
    SC('Reading', 'Example 1: y = 2x + 3', [
      S("The number in front of x is two, so the gradient is two. The number on its own is three, so the line crosses the y axis at zero, three.", E('m = 2') + E('c = 3'))
    ]),
    SC('Rearranging', 'Example 2: y − 4x = 5', [
      S("The equation is not in the right form. Add four x to both sides. y equals four x plus five. Now the gradient is four, and c is five.", E('y = 4x + 5') + g('m = 4, c = 5'))
    ]),
    SC('From a graph', 'Example 3: reading the line', [
      S("A line crosses the y axis at two. It goes up three for every one across. So c is two, and the gradient is three. The equation is y equals three x plus two.", E('c = 2, m = 3') + g('y = 3x + 2'))
    ]),
    SC('Negative', 'Example 4: going down', [
      S("A line crosses the y axis at five and goes down two for every one across. The gradient is minus two. The equation is y equals minus two x plus five.", g('y = −2x + 5'))
    ]),
    SC('Real life', 'Example 5: a taxi', [
      S("A taxi costs three pounds to start, plus two pounds per mile. The cost C is two times the miles m, plus three. C equals two m plus three. The gradient two is the cost per mile. The intercept three is the starting charge.", E('C = 2m + 3') + g('m = £2 per mile, c = £3 fixed'))
    ]),
    SC('Parallel lines', 'Example 6: same gradient', [
      S("Lines with the same gradient are parallel. y equals two x plus one and y equals two x minus four never meet.", E('y = 2x + 1') + E('y = 2x − 4') + g('Parallel'))
    ]),
    SC('Watch out!', 'Three common mistakes', [
      S("Mistake one: not rearranging to y equals first. In two y equals six x plus four, the gradient is three, not six.", r('m = 6  ✗') + g('y = 3x + 2, m = 3  ✓')),
      S("Mistake two: mixing up m and c.", V.rule('m is the slope. c is the start.')),
      S("Mistake three: forgetting the sign of c.", V.rule('y = x − 4: c is −4.'))
    ]),
    SC('In real life', 'Phone plans', [
      S("A phone plan costs fifteen pounds a month plus ten pence per minute. The equation is C equals zero point one m plus fifteen. The graph starts at fifteen and rises slowly.", g('C = 0.1m + 15'))
    ]),
    L.turn("Your turn! Number one. What are the gradient and y-intercept of y equals five x minus two? Pause and try it.", E('y = 5x − 2'), "Gradient five. Intercept minus two.", g('m = 5, c = −2')),
    L.turn("Your turn! Number two. A line crosses the y axis at four, and has gradient one half. Write its equation. Pause and try it.", E('c = 4, m = ½'), "y equals a half x plus four.", g('y = ½x + 4')),
    L.turn("Your turn! Number three. Rearrange two y equals eight x plus six to find the gradient. Pause and try it.", E('2y = 8x + 6'), "Divide by two. y equals four x plus three. Gradient four.", g('m = 4')),
    L.rec('How do you read y = mx + c?', "In y equals m x plus c, m is the gradient and c is where the line crosses the y axis. Rearrange so that y is on its own first. Parallel lines have the same gradient. In real life, m is the rate of change and c is the starting value.", ['m: gradient', 'c: y-intercept', 'Rearrange to y = first', 'Parallel: same m'])
  ]);

  N('How do you find the equation of a line from a point and a gradient, or from two points?', 'how to build the equation y = mx + c from given information.', [
    SC('Building an equation', 'Start with the basics', [
      S("To find the equation of a line we need two things. The gradient, m, and one point on the line. Then we use y equals m x plus c, and find c.", V.rule('Find m. Then find c.'))
    ]),
    SC('A point and a gradient', 'Example 1: gradient 3, through (2, 7)', [
      S("The gradient is three, so y equals three x plus c. Put in the point. x is two and y is seven. Seven equals three times two, plus c. Seven equals six plus c. So c is one.", E('7 = 3(2) + c') + E('c = 1') + g('y = 3x + 1'))
    ]),
    SC('Negative', 'Example 2: gradient −2, through (3, 1)', [
      S("y equals minus two x plus c. Put in three, one. One equals minus six plus c. Add six. c is seven.", E('1 = −2(3) + c') + g('y = −2x + 7'))
    ]),
    SC('Two points', 'Example 3: (1, 3) and (3, 9)', [
      S("First, find the gradient. Nine minus three is six. Three minus one is two. Gradient is three. So y equals three x plus c.", E('m = 6 ÷ 2 = 3')),
      S("Now use either point. Using one, three. Three equals three plus c. So c is zero. The equation is y equals three x.", E('3 = 3(1) + c') + g('y = 3x'))
    ]),
    SC('Another', 'Example 4: (0, 5) and (2, 1)', [
      S("The first point is on the y axis, so c is five straight away. Gradient is one minus five, over two minus zero. Minus four over two, minus two. The equation is y equals minus two x plus five.", E('m = −4 ÷ 2 = −2') + g('y = −2x + 5'))
    ]),
    SC('Checking', 'Example 5: use the other point', [
      S("Always check using the point you did not use. In Example three, put in three, nine. Three times three is nine. Correct.", V.rule('Check with the other point.'))
    ]),
    SC('Fractions', 'Example 6: a fractional gradient', [
      S("Points two, one and six, three. Gradient is two over four, a half. y equals a half x plus c. Put in two, one. One equals one plus c, so c is zero. y equals a half x.", g('y = ½x'))
    ]),
    SC('Watch out!', 'Three common mistakes', [
      S("Mistake one: putting x and y the wrong way round.", V.rule('Point (x, y): x first.')),
      S("Mistake two: finding c with the wrong sign.", V.rule('Solve for c carefully.')),
      S("Mistake three: skipping the check.", V.rule('Check with the other point.'))
    ]),
    SC('In real life', 'Predicting', [
      S("A plant is ten centimetres tall after two weeks, and sixteen after four. The gradient is three centimetres a week. We can write an equation and predict the height at any week.", g('h = 3w + 4'))
    ]),
    L.turn("Your turn! Number one. A line has gradient two, through one, five. Find c. Pause and try it.", E('5 = 2(1) + c'), "Five equals two plus c. c is three.", g('c = 3')),
    L.turn("Your turn! Number two. Find the equation of the line through zero, one and two, seven. Pause and try it.", E('(0, 1), (2, 7)'), "Gradient is six over two, three. c is one. y equals three x plus one.", g('y = 3x + 1')),
    L.turn("Your turn! Number three. Check that the point two, seven is on y equals three x plus one. Pause and try it.", E('3(2) + 1'), "Six plus one is seven. Yes.", g('7 ✓')),
    L.rec('How do you find the equation of a line?', "Find the gradient m. If you have two points, use rise over run. Write y equals m x plus c, substitute the x and y of one point, and solve for c. Check using the other point.", ['Find m', 'Substitute a point', 'Solve for c', 'Check with the other point'])
  ]);

  N('How do you draw a straight line graph from a table of values?', 'how to calculate points and plot a line.', [
    SC('Tables', 'Start with the basics', [
      S("To draw the graph of an equation, we make a table of values. We choose some x values, work out the y values, and plot the points. Then we join them with a ruler.", V.list(['Choose x values', 'Calculate y', 'Plot the points', 'Join with a ruler']))
    ]),
    SC('A table', 'Example 1: y = 2x + 1', [
      S("Choose x equals minus one, zero, one, two, three. For minus one, two times minus one plus one is minus one. For zero, one. For one, three. For two, five. For three, seven.", V.tbl([['−1', '0', '1', '2', '3'], ['−1', '1', '3', '5', '7']], ['x', 'y']))
    ]),
    SC('Plotting', 'Example 2: the points', [
      S("Plot each pair as a point. Minus one, minus one. Zero, one. One, three. And so on. They fall on a straight line. Draw it with a ruler through all the points, extending past them.", V.rule('They should line up.'))
    ]),
    SC('Check', 'Example 3: reading off', [
      S("The graph crosses the y axis at one, matching c. It rises two for every one across, matching the gradient. If a point is off the line, we made an error in the table.", V.rule('A point off the line is an error.'))
    ]),
    SC('A negative gradient', 'Example 4: y = 3 − x', [
      S("For x of zero, y is three. For one, two. For two, one. For three, zero. For four, minus one. The y values go down as x goes up.", V.tbl([['0', '1', '2', '3', '4'], ['3', '2', '1', '0', '−1']], ['x', 'y']))
    ]),
    SC('Special lines', 'Example 5: x = 2 and y = −1', [
      S("x equals two is a vertical line through two on the x axis. y equals minus one is a horizontal line through minus one on the y axis.", V.list(['x = 2: vertical', 'y = −1: horizontal']))
    ]),
    SC('Reading a value', 'Example 6: using the graph', [
      S("To find y when x is two point five on y equals two x plus one, go up from two point five to the line, then across. About six.", V.note('Read across from the line'))
    ]),
    SC('Watch out!', 'Three common mistakes', [
      S("Mistake one: arithmetic mistakes with negative x values.", V.rule('Take care with negatives.')),
      S("Mistake two: joining points with a wobbly freehand line.", V.rule('Use a ruler.')),
      S("Mistake three: plotting x and y the wrong way round.", V.rule('Along first, then up.'))
    ]),
    SC('In real life', 'Conversion graphs', [
      S("A conversion graph from pounds to euros is a straight line through zero. Choose a few pounds, convert, plot, and join. Then read any amount from the line.", V.note('Conversion graph'))
    ]),
    L.turn("Your turn! Number one. Find y when x is three, for y equals two x minus one. Pause and try it.", E('y = 2(3) − 1'), "Five.", g('5')),
    L.turn("Your turn! Number two. Find y when x is minus two, for y equals x plus four. Pause and try it.", E('y = −2 + 4'), "Two.", g('2')),
    L.turn("Your turn! Number three. Where does y equals three x minus two cross the y axis? Pause and try it.", E('y = 3x − 2'), "At minus two.", g('(0, −2)')),
    L.rec('How do you draw a straight line graph from a table of values?', "Choose x values, work out each y, and plot the points. They should lie on a straight line. Join them with a ruler. The line crosses the y axis at c and has gradient m. Vertical lines are x equals a number, and horizontal lines are y equals a number.", ['Table of values', 'Plot the points', 'Join with a ruler', 'Check m and c'])
  ]);

  L.use(847, ['How do you find the gradient of a line from two points?', 'Gradient and straight lines', 'How do you read y = mx + c from a graph and from real life?', 'How do you find the equation of a line from a point and a gradient, or from two points?', 'How do you draw a straight line graph from a table of values?', 'Parallel and perpendicular lines', 'Lines in the form ax + by = c']);
})();
