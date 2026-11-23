(function () {
  var BT = window.BT; if (!BT || !BT.L || !BT.sv || !BT.lk) return;
  var L = BT.L, V = BT.sv, E = L.E, S = L.st, SC = L.SC,
    g = function (t) { return E(t, 'g'); }, r = function (t) { return E(t, 'r'); };
  function N(title, goal, scenes) { L.full(title, scenes); return L.ep(title, goal, []); }

  N('How do you solve inequalities, including with brackets and negative numbers?', 'how to solve inequalities and when to flip the sign.', [
    SC('Inequalities', 'Start with the basics', [
      S("An inequality compares two things that are not equal. The symbols are: less than, greater than, less than or equal to, and greater than or equal to. The open end of the symbol points to the bigger side.", V.list(['x < 5: x is less than 5', 'x > 5: x is greater than 5', 'x ≤ 5: less than or equal to', 'x ≥ 5: greater than or equal to'])),
      S("We solve an inequality almost like an equation. We do the same to both sides. There is just one special rule, which we will meet soon.", V.rule('Same to both sides.'))
    ]),
    SC('Simple', 'Example 1: 2x + 3 < 11', [
      S("Subtract three from both sides. Two x is less than eight. Divide both sides by two. x is less than four.", E('2x + 3 < 11') + E('2x < 8') + g('x < 4'))
    ]),
    SC('With x on both sides', 'Example 2: 5x − 4 ≥ 2x + 8', [
      S("Subtract two x from both sides. Three x minus four is at least eight. Add four. Three x is at least twelve. Divide by three. x is at least four.", E('3x − 4 ≥ 8') + E('3x ≥ 12') + g('x ≥ 4'))
    ]),
    SC('Brackets', 'Example 3: 3(x − 2) > 9', [
      S("Expand the bracket first. Three x minus six is greater than nine. Add six. Three x is greater than fifteen. Divide by three. x is greater than five.", E('3x − 6 > 9') + E('3x > 15') + g('x > 5'))
    ]),
    SC('The special rule', 'Example 4: −2x < 10', [
      S("Here we divide by a negative number. When you multiply or divide an inequality by a negative number, you must flip the sign. Minus two x is less than ten. Divide by minus two, and flip. x is greater than minus five.", E('−2x < 10') + g('x > −5')),
      S("Why? Think about it. Five is more than three. But minus five is less than minus three. Negatives reverse the order.", V.rule('Divide by a negative: flip the sign.'))
    ]),
    SC('Check', 'Example 5: test a value', [
      S("Always check. For x greater than minus five, try x equals zero. Minus two times zero is zero, which is less than ten. It works. Try x equals minus six. Minus two times minus six is twelve, which is not less than ten. So minus six is not allowed. Good.", E('x = 0: 0 < 10 ✓') + E('x = −6: 12 < 10 ✗'))
    ]),
    SC('Number line', 'Example 6: showing the answer', [
      S("On a number line, a hollow circle means the number is not included. That is for less than or greater than. A filled circle means it is included, for less than or equal to. Then draw an arrow in the direction of the solutions.", V.list(['○  for < and >', '●  for ≤ and ≥']))
    ]),
    SC('Whole numbers', 'Example 7: list the integers', [
      S("List the whole numbers that satisfy minus two is less than or equal to x, which is less than four. They are minus two, minus one, zero, one, two and three. Four is not included, because the sign is less than.", g('−2, −1, 0, 1, 2, 3'))
    ]),
    SC('A negative coefficient', 'Example 8: 3 − 2x ≥ 11, slowly', [
      S("Let us do one where the x term is negative. Three minus two x is at least eleven. Step one. Subtract three from both sides. Minus two x is at least eight.", E('3 − 2x ≥ 11') + E('−2x ≥ 8')),
      S("Step two. Divide both sides by minus two. We are dividing by a negative number, so we must flip the sign. At least becomes at most. x is at most minus four.", g('x ≤ −4')),
      S("Step three. Check with numbers. Try x equals minus five, which should work. Three minus two times minus five is three plus ten, thirteen. Thirteen is at least eleven. Yes. Now try x equals zero, which should fail. Three minus zero is three. Three is not at least eleven. Correct.", E('x = −5: 13 ≥ 11 ✓') + E('x = 0: 3 ≥ 11 ✗')),
      S("A second way, if you dislike dividing by a negative. Add two x to both sides, and subtract eleven. Three minus eleven is minus eight, so minus eight is at least two x. Then x is at most minus four. Same answer, and no flip needed.", V.note('Or move x to the positive side'))
    ]),
    SC('Double inequalities', 'Example 9: −3 < 2x + 1 ≤ 9', [
      S("Sometimes x is trapped between two values. Do the same step to all three parts. Subtract one from each part. Minus four is less than two x, which is at most eight.", E('−3 < 2x + 1 ≤ 9') + E('−4 < 2x ≤ 8')),
      S("Divide all three parts by two. Minus two is less than x, which is at most four. x is bigger than minus two, and no bigger than four.", g('−2 < x ≤ 4')),
      S("The whole numbers that fit are minus one, zero, one, two, three and four. Minus two is not included, because of the less than sign. Four is included, because of the less than or equal sign.", g('−1, 0, 1, 2, 3, 4'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Forgetting to flip the sign. Solve minus two x is less than ten. Wrong: x is less than minus five. We divided by a negative number, so the sign must turn round. x is greater than minus five. Check with zero. Minus two times zero is zero, which is less than ten.", r('−2x < 10 → x < −5  ✗') + g('x > −5  ✓')),
      S("Mistake two. Writing the answer as an equation. Solve x plus three is less than seven. Wrong: x equals four. The answer is a range of values. x is less than four. Check with five. Five plus three is eight, which is not less than seven.", r('x = 4  ✗') + g('x < 4  ✓')),
      S("Mistake three. Using the wrong circle on the number line. Show x is at least two. Wrong: a hollow circle at two. At least means two is included. Use a filled circle.", r('x ≥ 2 with a hollow circle  ✗') + g('x ≥ 2 with a filled circle  ✓'))
    ]),
    SC('In real life', 'Speed limits', [
      S("A lift can carry at most eight hundred kilograms. If each person weighs about eighty kilograms, then eighty times n is at most eight hundred, so n is at most ten.", g('80n ≤ 800 → n ≤ 10'))
    ]),
    L.turn("Your turn! Number one. Solve three x plus one is less than sixteen. Pause and try it.", E('3x + 1 < 16'), "Three x is less than fifteen. x is less than five.", g('x < 5')),
    L.turn("Your turn! Number two. Solve two bracket x plus three, is at least ten. Pause and try it.", E('2(x + 3) ≥ 10'), "Two x plus six is at least ten. Two x is at least four. x is at least two.", g('x ≥ 2')),
    L.turn("Your turn! Number three. Solve minus three x is greater than twelve. Pause and try it.", E('−3x > 12'), "Divide by minus three and flip. x is less than minus four.", g('x < −4')),
    L.rec('How do you solve inequalities?', "Solve an inequality like an equation, doing the same to both sides. Expand brackets first. The one special rule is that multiplying or dividing by a negative number flips the sign. Show answers on a number line, with a hollow circle for less than or greater than, and a filled circle if the number is included.", ['Same to both sides', 'Expand brackets first', 'Negative: flip the sign', 'Hollow or filled circle'])
  ]);

  N('How do you change the subject of a formula with powers and roots?', 'how to rearrange formulae that contain squares and square roots.', [
    SC('Rearranging', 'Start with the basics', [
      S("The subject of a formula is the letter on its own, usually on the left. In the formula A equals pi r squared, the subject is A. Changing the subject means rearranging, so that a different letter is on its own.", E('A = π r²', 'b')),
      S("The method is to undo operations in reverse order, doing the same to both sides. A square is undone by a square root. A square root is undone by squaring.", V.list(['Undo ² with √', 'Undo √ with squaring']))
    ]),
    SC('The area of a circle', 'Example 1: make r the subject', [
      S("A equals pi r squared. First, divide both sides by pi. A over pi equals r squared. Then take the square root of both sides. r equals the square root of A over pi.", E('A = π r²') + E('A/π = r²') + g('r = √(A/π)'))
    ]),
    SC('Pythagoras', 'Example 2: make a the subject', [
      S("c squared equals a squared plus b squared. We want a. Subtract b squared from both sides. c squared minus b squared equals a squared. Square root. a equals the square root of c squared minus b squared.", E('c² = a² + b²') + E('a² = c² − b²') + g('a = √(c² − b²)'))
    ]),
    SC('A square root in the formula', 'Example 3: make L the subject', [
      S("The time for a pendulum is T equals two times the square root of L. To get L out, first divide by two. T over two equals root L. Now square both sides. L equals T over two, all squared.", E('T = 2√L') + E('T/2 = √L') + g('L = (T/2)²'))
    ]),
    SC('Kinetic energy', 'Example 4: v squared', [
      S("E equals a half m v squared. Multiply both sides by two. Two E equals m v squared. Divide by m. Two E over m equals v squared. Square root. v equals the square root of two E over m.", E('E = ½mv²') + E('2E = mv²') + g('v = √(2E/m)'))
    ]),
    SC('A square and a number', 'Example 5: make x the subject', [
      S("y equals x squared plus three. Subtract three. y minus three equals x squared. Square root. x equals the square root of y minus three.", E('y = x² + 3') + g('x = √(y − 3)'))
    ]),
    SC('Check', 'Example 6: substitute back', [
      S("Check with numbers. If r is three, then A is pi times nine. Put that into r equals root of A over pi. A over pi is nine. The square root of nine is three. We get back to r equals three.", V.rule('Substitute to check.'))
    ]),
    SC('A longer one', 'Example 7: V = ⅓πr²h, make r the subject', [
      S("This is the volume of a cone. We want r on its own. Go slowly, one step at a time. Step one. Get rid of the fraction. Multiply both sides by three. Three V equals pi r squared h.", E('V = ⅓πr²h') + E('3V = πr²h')),
      S("Step two. r squared is multiplied by pi and by h. Divide both sides by pi h. Three V over pi h equals r squared.", E('3V/(πh) = r²')),
      S("Step three. Square root both sides. r equals the square root of three V over pi h. The square root covers the whole fraction.", g('r = √(3V/(πh))')),
      S("Step four. Check with numbers. A cone with radius three and height four has volume pi times nine times four over three, which is twelve pi. Put V equals twelve pi, h equals four into the new formula. Three times twelve pi is thirty-six pi. Over pi times four is nine. The square root of nine is three. We get radius three back.", E('√(36π/(4π)) = √9 = 3 ✓'))
    ]),
    SC('Two steps with a root', 'Example 8: v² = u² + 2as, make u the subject', [
      S("This is a physics formula. Step one. Subtract two a s from both sides. v squared minus two a s equals u squared.", E('v² = u² + 2as') + E('v² − 2as = u²')),
      S("Step two. Square root both sides. u equals the square root of v squared minus two a s. Notice we cannot split the root across the minus.", g('u = √(v² − 2as)'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Taking away instead of using the square root. Pythagoras says c squared equals a squared plus b squared. Make a the subject. Wrong: a equals c minus b. Test with c equal five and b equal three. Five minus three is two. The real answer is four. Subtract b squared, then take the square root.", r('a = c − b = 2  ✗') + g('a = √(c² − b²) = 4  ✓')),
      S("Mistake two. Doing the steps in the wrong order. A equals pi r squared. Make r the subject. Wrong: take the square root of A, then divide by pi. Test with A equal twenty-eight point three. Root of twenty-eight point three over pi is one point seven. The right answer is three. Divide by pi first. Then take the square root.", r('r = √A ÷ π ≈ 1.7  ✗') + g('r = √(A ÷ π) = 3  ✓')),
      S("Mistake three. Leaving r squared. r squared equals forty-nine. Wrong: r equals forty-nine. The square root is needed to get r. r equals seven.", r('r = 49  ✗') + g('r = √49 = 7  ✓'))
    ]),
    SC('In real life', 'Falling objects', [
      S("The distance an object falls is d equals five t squared. If you know the depth of a well, rearrange to find how long a stone takes to fall. t equals the square root of d over five.", g('t = √(d/5)'))
    ]),
    L.turn("Your turn! Number one. Make r the subject of V equals r squared. Pause and try it.", E('V = r²'), "Take the square root. r equals root V.", g('r = √V')),
    L.turn("Your turn! Number two. Make x the subject of y equals x squared minus four. Pause and try it.", E('y = x² − 4'), "Add four, then square root. x equals root of y plus four.", g('x = √(y + 4)')),
    L.turn("Your turn! Number three. Make L the subject of T equals root L. Pause and try it.", E('T = √L'), "Square both sides. L equals T squared.", g('L = T²')),
    L.rec('How do you change the subject of a formula with powers and roots?', "Undo the operations in reverse order, doing the same to both sides. Undo a square with a square root, and undo a square root by squaring. Isolate the squared or rooted term first, then undo it. Check by substituting numbers.", ['Undo in reverse order', 'Isolate the power or root', 'Square root undoes square', 'Squaring undoes root'])
  ]);

  N('How do you change the subject when the letter appears twice?', 'how to collect the terms and factorise to get the subject on its own.', [
    SC('Twice', 'Start with the basics', [
      S("Sometimes the letter we want appears twice in the formula. Like a x plus b equals c x plus d. Then we cannot just undo one thing. Instead, we collect all the terms with that letter on one side, and everything else on the other. Then we factorise.", V.rule('Collect. Factorise. Divide.'))
    ]),
    SC('Simple', 'Example 1: make x the subject of ax + b = cx + d', [
      S("Move the x terms to the left, and the others to the right. a x minus c x equals d minus b.", E('ax − cx = d − b')),
      S("Now factorise the left. x bracket a minus c equals d minus b. Divide both sides by a minus c.", E('x(a − c) = d − b') + g('x = (d − b)/(a − c)'))
    ]),
    SC('With a fraction', 'Example 2: y = (x + 1)/(x − 2)', [
      S("Make x the subject. First multiply both sides by x minus two. y bracket x minus two equals x plus one. Expand. y x minus two y equals x plus one.", E('y(x − 2) = x + 1') + E('yx − 2y = x + 1')),
      S("Collect the x terms on one side. y x minus x equals one plus two y. Factorise. x bracket y minus one equals one plus two y.", E('yx − x = 1 + 2y') + E('x(y − 1) = 1 + 2y')),
      S("Divide. x equals one plus two y, over y minus one.", g('x = (1 + 2y)/(y − 1)'))
    ]),
    SC('Another way', 'Example 3: p = (q + r)/q', [
      S("Make q the subject. Multiply by q. p q equals q plus r. Subtract q. p q minus q equals r. Factorise. q bracket p minus one equals r. Divide. q equals r over p minus one.", E('pq = q + r') + E('q(p − 1) = r') + g('q = r/(p − 1)'))
    ]),
    SC('With a bracket', 'Example 4: A = 2x + y(x − 3)', [
      S("Expand the bracket. A equals two x plus y x minus three y. Move the non-x terms. A plus three y equals two x plus y x. Factorise. A plus three y equals x bracket two plus y. Divide. x equals A plus three y, over two plus y.", E('A + 3y = x(2 + y)') + g('x = (A + 3y)/(2 + y)'))
    ]),
    SC('Check', 'Example 5: with numbers', [
      S("Test the result of Example three. Let q be four and r be six. Then p is four plus six over four, which is two point five. Now q equals r over p minus one, six over one point five, which is four. It works.", V.rule('Check with numbers.'))
    ]),
    SC('With numbers first', 'Example 6: see the idea with numbers', [
      S("Before using letters, let us do the same steps with numbers, so the idea is clear. Solve five x plus three equals two x plus twelve. Step one. Subtract two x from both sides, so the x terms are together. Three x plus three equals twelve.", E('5x + 3 = 2x + 12') + E('3x + 3 = 12')),
      S("Step two. Subtract three. Three x equals nine. Step three. Divide by three. x equals three.", E('3x = 9') + g('x = 3')),
      S("Now do exactly the same with letters. a x plus b equals c x plus d. Subtract c x, and subtract b. a x minus c x equals d minus b. Factorise the x. x bracket a minus c equals d minus b. Divide by a minus c. The steps are identical, only the numbers have become letters.", E('x = (d − b)/(a − c)', 'g') + V.rule('Same steps as numbers.')),
      S("Check using our numbers. a is five, b is three, c is two, d is twelve. d minus b is nine. a minus c is three. Nine over three is three. The formula gives x equals three again.", E('(12 − 3)/(5 − 2) = 3 ✓'))
    ]),
    SC('Another type', 'Example 7: y = (2x + 1)/(x − 3)', [
      S("Make x the subject. Step one. Multiply both sides by x minus three, to clear the fraction. y bracket x minus three equals two x plus one.", E('y(x − 3) = 2x + 1')),
      S("Step two. Expand the bracket. y x minus three y equals two x plus one. Step three. Collect all the x terms on one side. Subtract two x. y x minus two x minus three y equals one. Add three y. y x minus two x equals one plus three y.", E('yx − 3y = 2x + 1') + E('yx − 2x = 1 + 3y')),
      S("Step four. Factorise the left side. x bracket y minus two equals one plus three y. Step five. Divide. x equals one plus three y, over y minus two.", E('x(y − 2) = 1 + 3y') + g('x = (1 + 3y)/(y − 2)')),
      S("Check with y equals five. Then x would be sixteen over three. Put x equals sixteen thirds into the original. Two times sixteen thirds plus one is thirty-five thirds. Sixteen thirds minus three is seven thirds. Thirty-five thirds divided by seven thirds is five. It matches.", V.rule('Check with a number.'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Trying to divide before factorising. Five x minus two x equals nine. Wrong: divide the five x by five and say x minus two x equals nine over five. Instead, factorise. x bracket five minus two equals nine. x times three is nine. x equals three.", r('5x − 2x = 9 → x − 2x = 9/5  ✗') + g('x(5 − 2) = 9 → x = 3  ✓')),
      S("Mistake two. Sign errors when moving terms. a x plus b equals c x plus d. Wrong: a x plus c x equals d minus b. Moving c x across the equals sign changes its sign. a x minus c x equals d minus b.", r('ax + cx = d − b  ✗') + g('ax − cx = d − b  ✓')),
      S("Mistake three. Forgetting to expand the bracket. y bracket x minus three. Wrong: y x minus three. The y multiplies both terms. y x minus three y.", r('y(x − 3) = yx − 3  ✗') + g('y(x − 3) = yx − 3y  ✓'))
    ]),
    SC('In real life', 'Lens formulae', [
      S("Many science formulae have the same letter twice. Rearranging them with this method lets a scientist find any unknown, whichever one they have not measured.", V.note('Rearranging is a science skill'))
    ]),
    L.turn("Your turn! Number one. In a x equals b x plus c, collect the x terms on one side. Pause and try it.", E('ax = bx + c'), "a x minus b x equals c.", g('ax − bx = c')),
    L.turn("Your turn! Number two. Factorise the left side of that. Pause and try it.", E('ax − bx'), "x bracket a minus b.", g('x(a − b)')),
    L.turn("Your turn! Number three. So what is x? Pause and try it.", E('x(a − b) = c'), "x equals c over a minus b.", g('x = c/(a − b)')),
    L.rec('How do you change the subject when the letter appears twice?', "When the letter appears more than once, collect all the terms containing it on one side and everything else on the other. Factorise to take the letter out as a common factor. Then divide by the bracket. Expand any brackets first.", ['Expand brackets', 'Collect the letter on one side', 'Factorise', 'Divide by the bracket'])
  ]);

  L.use(846, ['How do you solve linear equations?', 'How do you create and solve simple equations?', 'Equations with fractions', 'How do you solve inequalities, including with brackets and negative numbers?', 'Changing the subject and inequations', 'How do you change the subject of a formula with powers and roots?', 'How do you change the subject when the letter appears twice?', 'Brackets, factorising and equations']);
})();
