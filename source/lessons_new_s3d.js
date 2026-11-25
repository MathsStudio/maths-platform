(function () {
  var BT = window.BT; if (!BT || !BT.L || !BT.sv || !BT.lk) return;
  var L = BT.L, V = BT.sv, E = L.E, S = L.st, SC = L.SC,
    g = function (t) { return E(t, 'g'); }, r = function (t) { return E(t, 'r'); };
  function N(title, goal, scenes) { L.full(title, scenes); return L.ep(title, goal, []); }

  N('How do you find the gradient of a line from two points?', 'how to measure steepness using rise over run.', [
    SC('Gradient', 'Start with the basics', [
      S("The gradient of a line tells us how steep it is. A big gradient is a steep line. A small gradient is a gentle slope. A gradient of 0 is a flat line.", V.list(['Steep: big gradient', 'Gentle: small gradient', 'Flat: zero'])),
      S("We measure it as rise over run. The rise is how far the line goes up. The run is how far it goes across.", E('Gradient = rise ÷ run', 'g'))
    ]),
    SC('From a graph', 'Example 1: counting squares', [
      S("A line goes through the points 0, 1 and 4, 9. Going from the first point to the second, we move across 4, and up 8. Gradient is 8 divided by 4, which is 2.", E('Run = 4, Rise = 8') + g('8 ÷ 4 = 2'))
    ]),
    SC('The formula', 'Example 2: using coordinates', [
      S("With 2 points, x 1 y 1 and x 2 y 2, the gradient is y 2 minus y 1, over x 2 minus x 1. The change in y over the change in x.", E('m = (y₂ − y₁) ÷ (x₂ − x₁)', 'g'))
    ]),
    SC('Worked', 'Example 3: (1, 3) and (5, 11)', [
      S("y 2 minus y 1 is 11 minus 3, which is 8. x 2 minus x 1 is 5 minus 1, which is 4. 8 over 4 is 2.", E('(11 − 3) ÷ (5 − 1)') + g('= 8 ÷ 4 = 2'))
    ]),
    SC('Negative gradient', 'Example 4: going downhill', [
      S("Points 2, 7 and 6, 3. Rise is 3 minus 7, minus 4. Run is 6 minus 2, 4. Gradient is minus 4 over 4, which is minus 1. A line that goes down as you move right has a negative gradient.", E('(3 − 7) ÷ (6 − 2) = −4 ÷ 4') + g('= −1'))
    ]),
    SC('Same order', 'Example 5: stay consistent', [
      S("You can use either point first, but be consistent. If you start the top with y 2, you must start the bottom with x 2. Using the points from Example three the other way round: 3 minus 11 is minus 8. 1 minus 5 is minus 4. Minus 8 over minus 4 is 2. Same answer.", E('(3 − 11) ÷ (1 − 5) = −8 ÷ −4') + g('= 2'))
    ]),
    SC('Special lines', 'Example 6: flat and vertical', [
      S("A flat line has the same y everywhere, so the rise is 0. The gradient is 0. A vertical line has the same x everywhere, so the run is 0, and we cannot divide by 0. A vertical line has no gradient, we say it is undefined.", V.list(['Horizontal: m = 0', 'Vertical: undefined']))
    ]),
    SC('Negative coordinates', 'Example 6: (−2, −1) and (2, 5), slowly', [
      S("Negative numbers are where mistakes happen. Take the points minus 2, minus 1, and 2, 5. Step one. Label them. x 1 is minus 2, y 1 is minus 1. x 2 is 2, y 2 is 5.", E('(x₁, y₁) = (−2, −1)') + E('(x₂, y₂) = (2, 5)')),
      S("Step two. The rise is y 2 minus y 1. 5 minus minus 1. Subtracting a negative is the same as adding. 5 plus 1 is 6.", E('5 − (−1) = 6')),
      S("Step three. The run is x 2 minus x 1. 2 minus minus 2. That is 2 plus 2, 4.", E('2 − (−2) = 4')),
      S("Step four. Gradient is 6 over 4. Simplify. 3 over 2, or 1 and a half. A gradient that is not a whole number is perfectly fine.", g('m = 6/4 = 3/2')),
      S("Step five. Does it make sense? The line goes up as we move right, so the gradient is positive. Yes.", V.rule('Does the sign make sense?'))
    ]),
    SC('From a real graph', 'Example 7: the cost of hiring a van', [
      S("The cost of hiring a van is plotted against the days. At 0 days the cost is £3. At 4 days the cost is £11. The points are 0, 3 and 4, 11.", E('(0, 3) and (4, 11)')),
      S("The rise is 11 minus 3, 8. The run is 4 minus 0, 4. The gradient is 8 over 4, which is 2.", g('m = 8 ÷ 4 = 2')),
      S("What does it mean? Each extra day costs £2 more. The gradient is the rate of change, here £2 per day. The £3 is the fixed charge.", V.rule('Gradient = rate of change.'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Dividing run by rise. The points are 0, 2 and 3, 8. Wrong: 3 over 6, a half. Gradient is rise over run. 6 over 3. 2.", r('run ÷ rise = 3 ÷ 6  ✗') + g('rise ÷ run = 6 ÷ 3 = 2  ✓')),
      S("Mistake two. Using a different order on the top and the bottom. The points are 1, 5 and 4, 2. Wrong: 2 minus 5 on top, 1 minus 4 on the bottom, which gives plus 1. Use the same order. 2 minus 5 over 4 minus 1. Minus 3 over 3. Minus 1.", r('(2 − 5) ÷ (1 − 4) = 1  ✗') + g('(2 − 5) ÷ (4 − 1) = −1  ✓')),
      S("Mistake three. Dropping the negative sign. The points are 2, 7 and 6, 3. The line goes down. Wrong: 4 over 4, 1. 3 minus 7 is minus 4. The gradient is minus 1.", r('m = 4 ÷ 4 = 1  ✗') + g('m = (3 − 7) ÷ (6 − 2) = −1  ✓'))
    ]),
    SC('In real life', 'Roads and ramps', [
      S("A road sign saying 10% means a gradient of 1 in 10. For every 10 metres across, you climb 1 metre. A wheelchair ramp is made with a gentle gradient for safety.", V.note('Gradient: steepness'))
    ]),
    L.turn("Your turn! Number one. Find the gradient between 0, 2 and 3, 8. Pause and try it.", E('(0, 2), (3, 8)'), "Rise 6, run 3. 2.", g('2')),
    L.turn("Your turn! Number two. Find the gradient between 1, 5 and 4, 2. Pause and try it.", E('(1, 5), (4, 2)'), "Rise is minus 3. Run is 3. Minus 1.", g('−1')),
    L.turn("Your turn! Number three. What is the gradient of a horizontal line? Pause and think.", E('?'), "Zero.", g('0')),
    L.rec('How do you find the gradient of a line from two points?', "Gradient is rise over run. With 2 points, subtract the y values on top and the x values on the bottom, in the same order. A line going up to the right has a positive gradient. A line going down has a negative gradient. A horizontal line has gradient 0.", ['Rise ÷ run', '(y₂ − y₁) ÷ (x₂ − x₁)', 'Same order', 'Negative: downhill'])
  ]);

  N('How do you read y = mx + c from a graph and from real life?', 'how to find the gradient and y-intercept from a line.', [
    SC('The equation', 'Start with the basics', [
      S("Every straight line has an equation in the form y equals m x plus c. The letter m is the gradient. The letter c is the y-intercept, where the line crosses the y axis.", E('y = mx + c', 'b') + V.list(['m: gradient', 'c: where it crosses the y axis']))
    ]),
    SC('Reading', 'Example 1: y = 2x + 3', [
      S("The number in front of x is 2, so the gradient is 2. The number on its own is 3, so the line crosses the y axis at 0, 3.", E('m = 2') + E('c = 3'))
    ]),
    SC('Rearranging', 'Example 2: y − 4x = 5', [
      S("The equation is not in the right form. Add 4 x to both sides. y equals 4 x plus 5. Now the gradient is 4, and c is 5.", E('y = 4x + 5') + g('m = 4, c = 5'))
    ]),
    SC('From a graph', 'Example 3: reading the line', [
      S("A line crosses the y axis at 2. It goes up 3 for every one across. So c is 2, and the gradient is 3. The equation is y equals 3 x plus 2.", E('c = 2, m = 3') + g('y = 3x + 2'))
    ]),
    SC('Negative', 'Example 4: going down', [
      S("A line crosses the y axis at 5 and goes down 2 for every one across. The gradient is minus 2. The equation is y equals minus 2 x plus 5.", g('y = −2x + 5'))
    ]),
    SC('Real life', 'Example 5: a taxi', [
      S("A taxi costs £3 to start, plus £2 per mile. The cost C is 2 times the miles m, plus 3. C equals 2 m plus 3. The gradient 2 is the cost per mile. The intercept 3 is the starting charge.", E('C = 2m + 3') + g('m = £2 per mile, c = £3 fixed'))
    ]),
    SC('Parallel lines', 'Example 6: same gradient', [
      S("Lines with the same gradient are parallel. y equals 2 x plus 1 and y equals 2 x minus 4 never meet.", E('y = 2x + 1') + E('y = 2x − 4') + g('Parallel'))
    ]),
    SC('Rearranging slowly', 'Example 7: 2x + 3y = 12', [
      S("Sometimes the equation is not in the form y equals m x plus c. Step one. Get the y term on its own. Subtract 2 x from both sides. 3 y equals 12 minus 2 x.", E('2x + 3y = 12') + E('3y = 12 − 2x')),
      S("Step two. Divide every term by 3. y equals 4, minus 2 thirds x. Write the x term first. y equals minus 2 thirds x plus 4.", g('y = −⅔x + 4')),
      S("Now read off. The gradient is minus 2 thirds. The line crosses the y axis at 4. A negative gradient, so the line slopes down.", E('m = −⅔, c = 4'))
    ]),
    SC('Quick sketches', 'Example 8: drawing from m and c', [
      S("You can sketch a line from y equals m x plus c without a table. Take y equals a half x plus 1. Step one. Plot the y-intercept, 0, 1. Step two. The gradient is a half. That means across 2, up 1. From 0, 1, go across 2 and up 1, to 2, 2. Step three. Join the points and extend.", E('y = ½x + 1') + V.rule('Start at c. Then rise over run.')),
      S("Check with the equation. At x equals 2, y is a half times 2 plus 1, which is 2. The point is on the line.", E('x = 2: y = 2 ✓'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Not rearranging first. 2 y equals 6 x plus 4. Wrong: the gradient is 6. Divide every term by 2. y equals 3 x plus 2. The gradient is 3.", r('2y = 6x + 4 → m = 6  ✗') + g('y = 3x + 2 → m = 3  ✓')),
      S("Mistake two. Swapping m and c. y equals 5 x minus 2. Wrong: gradient minus 2, and crossing at 5. The gradient is the number multiplying x. The line crosses the y axis at the number on its own.", r('m = −2, c = 5  ✗') + g('m = 5, c = −2  ✓')),
      S("Mistake three. Losing the sign of c. y equals x minus 4. Wrong: crosses the y axis at 4. It is minus 4. The line crosses below the origin.", r('c = 4  ✗') + g('c = −4  ✓'))
    ]),
    SC('In real life', 'Phone plans', [
      S("A phone plan costs £15 a month plus 10p per minute. The equation is C equals 0.1 m plus 15. The graph starts at 15 and rises slowly.", g('C = 0.1m + 15'))
    ]),
    L.turn("Your turn! Number one. What are the gradient and y-intercept of y equals 5 x minus 2? Pause and try it.", E('y = 5x − 2'), "Gradient 5. Intercept minus 2.", g('m = 5, c = −2')),
    L.turn("Your turn! Number two. A line crosses the y axis at 4, and has gradient one half. Write its equation. Pause and try it.", E('c = 4, m = ½'), "y equals a half x plus 4.", g('y = ½x + 4')),
    L.turn("Your turn! Number three. Rearrange 2 y equals 8 x plus 6 to find the gradient. Pause and try it.", E('2y = 8x + 6'), "Divide by 2. y equals 4 x plus 3. Gradient 4.", g('m = 4')),
    L.rec('How do you read y = mx + c?', "In y equals m x plus c, m is the gradient and c is where the line crosses the y axis. Rearrange so that y is on its own first. Parallel lines have the same gradient. In real life, m is the rate of change and c is the starting value.", ['m: gradient', 'c: y-intercept', 'Rearrange to y = first', 'Parallel: same m'])
  ]);

  N('How do you find the equation of a line from a point and a gradient, or from two points?', 'how to build the equation y = mx + c from given information.', [
    SC('Building an equation', 'Start with the basics', [
      S("To find the equation of a line we need 2 things. The gradient, m, and 1 point on the line. Then we use y equals m x plus c, and find c.", V.rule('Find m. Then find c.'))
    ]),
    SC('A point and a gradient', 'Example 1: gradient 3, through (2, 7)', [
      S("The gradient is 3, so y equals 3 x plus c. Put in the point. x is 2 and y is 7. 7 equals 3 times 2, plus c. 7 equals 6 plus c. So c is 1.", E('7 = 3(2) + c') + E('c = 1') + g('y = 3x + 1'))
    ]),
    SC('Negative', 'Example 2: gradient −2, through (3, 1)', [
      S("y equals minus 2 x plus c. Put in 3, 1. 1 equals minus 6 plus c. Add 6. c is 7.", E('1 = −2(3) + c') + g('y = −2x + 7'))
    ]),
    SC('Two points', 'Example 3: (1, 3) and (3, 9)', [
      S("First, find the gradient. 9 minus 3 is 6. 3 minus 1 is 2. Gradient is 3. So y equals 3 x plus c.", E('m = 6 ÷ 2 = 3')),
      S("Now use either point. Using 1, 3. 3 equals 3 plus c. So c is 0. The equation is y equals 3 x.", E('3 = 3(1) + c') + g('y = 3x'))
    ]),
    SC('Another', 'Example 4: (0, 5) and (2, 1)', [
      S("The first point is on the y axis, so c is 5 straight away. Gradient is 1 minus 5, over 2 minus 0. Minus 4 over 2, minus 2. The equation is y equals minus 2 x plus 5.", E('m = −4 ÷ 2 = −2') + g('y = −2x + 5'))
    ]),
    SC('Checking', 'Example 5: use the other point', [
      S("Always check using the point you did not use. In Example three, put in 3, 9. 3 times 3 is 9. Correct.", V.rule('Check with the other point.'))
    ]),
    SC('Fractions', 'Example 6: a fractional gradient', [
      S("Points 2, 1 and 6, 3. Gradient is 2 over 4, a half. y equals a half x plus c. Put in 2, 1. 1 equals 1 plus c, so c is 0. y equals a half x.", g('y = ½x'))
    ]),
    SC('Negative point', 'Example 7: gradient 3, through (−1, 4)', [
      S("Take care with negatives. Start with y equals 3 x plus c. Step one. Put in x equals minus 1 and y equals 4. 4 equals 3 times minus 1, plus c.", E('4 = 3(−1) + c')),
      S("Step two. 3 times minus 1 is minus 3. So 4 equals minus 3 plus c. Add 3 to both sides. c equals 7.", E('4 = −3 + c') + g('c = 7')),
      S("Step three. Write the equation. y equals 3 x plus 7. Check. Put in x equals minus 1. 3 times minus 1 plus 7 is 4. Correct.", g('y = 3x + 7') + E('3(−1) + 7 = 4 ✓'))
    ]),
    SC('Parallel line', 'Example 8: parallel to y = 2x − 1, through (2, 7)', [
      S("Parallel lines have the same gradient. The line y equals 2 x minus 1 has gradient 2. So our line also has gradient 2. y equals 2 x plus c.", V.rule('Parallel: same gradient.')),
      S("Put in 2, 7. 7 equals 4 plus c. So c is 3. The equation is y equals 2 x plus 3. Check the point. 2 times 2 plus 3 is 7. Correct.", g('y = 2x + 3'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Putting x and y the wrong way round. A line has gradient 2 and goes through 1, 5. Wrong: x is 5 and y is 1. That gives 1 equals 10 plus c, so c is minus 9. The point is x equals 1, y equals 5. 5 equals 2 plus c. c is 3.", r('1 = 2(5) + c → c = −9  ✗') + g('5 = 2(1) + c → c = 3  ✓')),
      S("Mistake two. Getting the sign wrong when solving for c. The gradient is 3, through 2, 7. 7 equals 6 plus c. Wrong: c is 13. Subtract 6 from both sides. c is 1.", r('c = 7 + 6 = 13  ✗') + g('c = 7 − 6 = 1  ✓')),
      S("Mistake three. Skipping the check. A line goes through 0, 1 and 2, 7. Wrong: the gradient is 2, so y equals 2 x plus 1. Test the other point. When x is 2, y is 5, not 7. The gradient is 6 over 2, 3. y equals 3 x plus 1. When x is 2, y is 7.", r('y = 2x + 1: at x = 2, y = 5 ≠ 7  ✗') + g('y = 3x + 1: at x = 2, y = 7  ✓'))
    ]),
    SC('In real life', 'Predicting', [
      S("A plant is 10 centimetres tall after 2 weeks, and 16 after 4. The gradient is 3 centimetres a week. We can write an equation and predict the height at any week.", g('h = 3w + 4'))
    ]),
    L.turn("Your turn! Number one. A line has gradient 2, through 1, 5. Find c. Pause and try it.", E('5 = 2(1) + c'), "5 equals 2 plus c. c is 3.", g('c = 3')),
    L.turn("Your turn! Number two. Find the equation of the line through 0, 1 and 2, 7. Pause and try it.", E('(0, 1), (2, 7)'), "Gradient is 6 over 2, 3. c is 1. y equals 3 x plus 1.", g('y = 3x + 1')),
    L.turn("Your turn! Number three. Check that the point 2, 7 is on y equals 3 x plus 1. Pause and try it.", E('3(2) + 1'), "6 plus 1 is 7. Yes.", g('7 ✓')),
    L.rec('How do you find the equation of a line?', "Find the gradient m. If you have 2 points, use rise over run. Write y equals m x plus c, substitute the x and y of 1 point, and solve for c. Check using the other point.", ['Find m', 'Substitute a point', 'Solve for c', 'Check with the other point'])
  ]);

  N('How do you draw a straight line graph from a table of values?', 'how to calculate points and plot a line.', [
    SC('Tables', 'Start with the basics', [
      S("To draw the graph of an equation, we make a table of values. We choose some x values, work out the y values, and plot the points. Then we join them with a ruler.", V.list(['Choose x values', 'Calculate y', 'Plot the points', 'Join with a ruler']))
    ]),
    SC('A table', 'Example 1: y = 2x + 1', [
      S("Choose x equals minus 1, 0, 1, 2, 3. For minus 1, 2 times minus 1 plus 1 is minus 1. For 0, 1. For 1, 3. For 2, 5. For 3, 7.", V.tbl([['−1', '0', '1', '2', '3'], ['−1', '1', '3', '5', '7']], ['x', 'y']))
    ]),
    SC('Plotting', 'Example 2: the points', [
      S("Plot each pair as a point. Minus 1, minus 1. 0, 1. 1, 3. And so on. They fall on a straight line. Draw it with a ruler through all the points, extending past them.", V.rule('They should line up.'))
    ]),
    SC('Check', 'Example 3: reading off', [
      S("The graph crosses the y axis at 1, matching c. It rises 2 for every one across, matching the gradient. If a point is off the line, we made an error in the table.", V.rule('A point off the line is an error.'))
    ]),
    SC('A negative gradient', 'Example 4: y = 3 − x', [
      S("For x of 0, y is 3. For 1, 2. For 2, 1. For 3, 0. For 4, minus 1. The y values go down as x goes up.", V.tbl([['0', '1', '2', '3', '4'], ['3', '2', '1', '0', '−1']], ['x', 'y']))
    ]),
    SC('Special lines', 'Example 5: x = 2 and y = −1', [
      S("x equals 2 is a vertical line through 2 on the x axis. y equals minus 1 is a horizontal line through minus 1 on the y axis.", V.list(['x = 2: vertical', 'y = −1: horizontal']))
    ]),
    SC('Reading a value', 'Example 6: using the graph', [
      S("To find y when x is 2.5 on y equals 2 x plus 1, go up from 2.5 to the line, then across. About 6.", V.note('Read across from the line'))
    ]),
    SC('A fractional gradient', 'Example 7: y = ½x + 1', [
      S("When there is a half in the equation, choose even values of x, so there are no fractions. x equals 0 gives y equals 1. x equals 2 gives y equals 2. x equals 4 gives y equals 3. x equals 6 gives y equals 4.", V.tbl([['0', '2', '4', '6'], ['1', '2', '3', '4']], ['x', 'y'])),
      S("Plot them. Each time x goes across 2, y goes up 1. That matches the gradient of a half. Join them with a ruler.", V.rule('Choose x to avoid fractions.'))
    ]),
    SC('How many points', 'Why three points is better than two', [
      S("2 points are enough to draw a line. But we use 3, or more. If all 3 are in a straight line, we know our calculations are right. If 1 is off the line, we have made a mistake, and we can find it.", V.rule('3 points: 1 is a check.')),
      S("Also choose a good range of x values, spread out, including negative ones. A longer line is easier to draw accurately and read from.", V.note('Spread the points out'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Arithmetic slips with negative x. y equals 2 x plus 1, and x is minus 2. Wrong: 2 times minus 2 is plus 4, so y is 5. A positive times a negative is negative. Minus 4 plus 1 is minus 3.", r('y = 2(−2) + 1 = 5  ✗') + g('y = −4 + 1 = −3  ✓')),
      S("Mistake two. Drawing a bendy line through a wrong point. The table for y equals 2 x plus 1 gives 8 when x is 3. Wrong: draw a wavy line through it. A straight line equation has points in a straight line. Check. 2 times 3 plus 1 is 7. The point is 3, 7.", r('(3, 8) → wavy line  ✗') + g('(3, 7) → straight line  ✓')),
      S("Mistake three. Plotting x and y the wrong way round. The point is 4, 1. Wrong: 1 across and 4 up. The first number is across. 4 across and 1 up.", r('(4, 1) plotted at 1 across, 4 up  ✗') + g('4 across, 1 up  ✓'))
    ]),
    SC('In real life', 'Conversion graphs', [
      S("A conversion graph from pounds to euros is a straight line through 0. Choose a few pounds, convert, plot, and join. Then read any amount from the line.", V.note('Conversion graph'))
    ]),
    L.turn("Your turn! Number one. Find y when x is 3, for y equals 2 x minus 1. Pause and try it.", E('y = 2(3) − 1'), "Five.", g('5')),
    L.turn("Your turn! Number two. Find y when x is minus 2, for y equals x plus 4. Pause and try it.", E('y = −2 + 4'), "Two.", g('2')),
    L.turn("Your turn! Number three. Where does y equals 3 x minus 2 cross the y axis? Pause and try it.", E('y = 3x − 2'), "At minus two.", g('(0, −2)')),
    L.rec('How do you draw a straight line graph from a table of values?', "Choose x values, work out each y, and plot the points. They should lie on a straight line. Join them with a ruler. The line crosses the y axis at c and has gradient m. Vertical lines are x equals a number, and horizontal lines are y equals a number.", ['Table of values', 'Plot the points', 'Join with a ruler', 'Check m and c'])
  ]);

  L.use(847, ['How do you find the gradient of a line from two points?', 'Gradient and straight lines', 'How do you read y = mx + c from a graph and from real life?', 'How do you find the equation of a line from a point and a gradient, or from two points?', 'How do you draw a straight line graph from a table of values?', 'Parallel and perpendicular lines', 'Lines in the form ax + by = c']);
})();
