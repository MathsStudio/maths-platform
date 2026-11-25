(function () {
  var BT = window.BT; if (!BT || !BT.L || !BT.sv || !BT.lk) return;
  var L = BT.L, V = BT.sv, E = L.E, S = L.st, SC = L.SC,
    g = function (t) { return E(t, 'g'); }, r = function (t) { return E(t, 'r'); };
  function N(title, goal, scenes) { L.full(title, scenes); return L.ep(title, goal, []); }

  N('How do you solve inequalities, including with brackets and negative numbers?', 'how to solve inequalities and when to flip the sign.', [
    SC('Inequalities', 'Start with the basics', [
      S("An inequality compares 2 things that are not equal. The symbols are: less than, greater than, less than or equal to, and greater than or equal to. The open end of the symbol points to the bigger side.", V.list(['x < 5: x is less than 5', 'x > 5: x is greater than 5', 'x ≤ 5: less than or equal to', 'x ≥ 5: greater than or equal to'])),
      S("We solve an inequality almost like an equation. We do the same to both sides. There is just one special rule, which we will meet soon.", V.rule('Same to both sides.'))
    ]),
    SC('Simple', 'Example 1: 2x + 3 < 11', [
      S("Subtract 3 from both sides. 2 x is less than 8. Divide both sides by 2. x is less than 4.", E('2x + 3 < 11') + E('2x < 8') + g('x < 4'))
    ]),
    SC('With x on both sides', 'Example 2: 5x − 4 ≥ 2x + 8', [
      S("Subtract 2 x from both sides. 3 x minus 4 is at least 8. Add 4. 3 x is at least 12. Divide by 3. x is at least 4.", E('3x − 4 ≥ 8') + E('3x ≥ 12') + g('x ≥ 4'))
    ]),
    SC('Brackets', 'Example 3: 3(x − 2) > 9', [
      S("Expand the bracket first. 3 x minus 6 is greater than 9. Add 6. 3 x is greater than 15. Divide by 3. x is greater than 5.", E('3x − 6 > 9') + E('3x > 15') + g('x > 5'))
    ]),
    SC('The special rule', 'Example 4: −2x < 10', [
      S("Here we divide by a negative number. When you multiply or divide an inequality by a negative number, you must flip the sign. Minus 2 x is less than 10. Divide by minus 2, and flip. x is greater than minus 5.", E('−2x < 10') + g('x > −5')),
      S("Why? Think about it. 5 is more than 3. But minus 5 is less than minus 3. Negatives reverse the order.", V.rule('Divide by a negative: flip the sign.'))
    ]),
    SC('Check', 'Example 5: test a value', [
      S("Always check. For x greater than minus 5, try x equals 0. Minus 2 times 0 is 0, which is less than 10. It works. Try x equals minus 6. Minus 2 times minus 6 is 12, which is not less than 10. So minus 6 is not allowed. Good.", E('x = 0: 0 < 10 ✓') + E('x = −6: 12 < 10 ✗'))
    ]),
    SC('Number line', 'Example 6: showing the answer', [
      S("On a number line, a hollow circle means the number is not included. That is for less than or greater than. A filled circle means it is included, for less than or equal to. Then draw an arrow in the direction of the solutions.", V.list(['○  for < and >', '●  for ≤ and ≥']))
    ]),
    SC('Whole numbers', 'Example 7: list the integers', [
      S("List the whole numbers that satisfy minus 2 is less than or equal to x, which is less than 4. They are minus 2, minus 1, 0, 1, 2 and 3. 4 is not included, because the sign is less than.", g('−2, −1, 0, 1, 2, 3'))
    ]),
    SC('A negative coefficient', 'Example 8: 3 − 2x ≥ 11, slowly', [
      S("Let us do 1 where the x term is negative. 3 minus 2 x is at least 11. Step one. Subtract 3 from both sides. Minus 2 x is at least 8.", E('3 − 2x ≥ 11') + E('−2x ≥ 8')),
      S("Step two. Divide both sides by minus 2. We are dividing by a negative number, so we must flip the sign. At least becomes at most. x is at most minus 4.", g('x ≤ −4')),
      S("Step three. Check with numbers. Try x equals minus 5, which should work. 3 minus 2 times minus 5 is 3 plus 10, 13. 13 is at least 11. Yes. Now try x equals 0, which should fail. 3 minus 0 is 3. 3 is not at least 11. Correct.", E('x = −5: 13 ≥ 11 ✓') + E('x = 0: 3 ≥ 11 ✗')),
      S("A second way, if you dislike dividing by a negative. Add 2 x to both sides, and subtract 11. 3 minus 11 is minus 8, so minus 8 is at least 2 x. Then x is at most minus 4. Same answer, and no flip needed.", V.note('Or move x to the positive side'))
    ]),
    SC('Double inequalities', 'Example 9: −3 < 2x + 1 ≤ 9', [
      S("Sometimes x is trapped between 2 values. Do the same step to all 3 parts. Subtract 1 from each part. Minus 4 is less than 2 x, which is at most 8.", E('−3 < 2x + 1 ≤ 9') + E('−4 < 2x ≤ 8')),
      S("Divide all 3 parts by 2. Minus 2 is less than x, which is at most 4. x is bigger than minus 2, and no bigger than 4.", g('−2 < x ≤ 4')),
      S("The whole numbers that fit are minus 1, 0, 1, 2, 3 and 4. Minus 2 is not included, because of the less than sign. 4 is included, because of the less than or equal sign.", g('−1, 0, 1, 2, 3, 4'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Forgetting to flip the sign. Solve minus 2 x is less than 10. Wrong: x is less than minus 5. We divided by a negative number, so the sign must turn round. x is greater than minus 5. Check with 0. Minus 2 times 0 is 0, which is less than 10.", r('−2x < 10 → x < −5  ✗') + g('x > −5  ✓')),
      S("Mistake two. Writing the answer as an equation. Solve x plus 3 is less than 7. Wrong: x equals 4. The answer is a range of values. x is less than 4. Check with 5. 5 plus 3 is 8, which is not less than 7.", r('x = 4  ✗') + g('x < 4  ✓')),
      S("Mistake three. Using the wrong circle on the number line. Show x is at least 2. Wrong: a hollow circle at 2. At least means 2 is included. Use a filled circle.", r('x ≥ 2 with a hollow circle  ✗') + g('x ≥ 2 with a filled circle  ✓'))
    ]),
    SC('In real life', 'Speed limits', [
      S("A lift can carry at most 800 kilograms. If each person weighs about 80 kilograms, then 80 times n is at most 800, so n is at most 10.", g('80n ≤ 800 → n ≤ 10'))
    ]),
    L.turn("Your turn! Number one. Solve 3 x plus 1 is less than 16. Pause and try it.", E('3x + 1 < 16'), "3 x is less than 15. x is less than 5.", g('x < 5')),
    L.turn("Your turn! Number two. Solve 2 bracket x plus 3, is at least 10. Pause and try it.", E('2(x + 3) ≥ 10'), "2 x plus 6 is at least 10. 2 x is at least 4. x is at least 2.", g('x ≥ 2')),
    L.turn("Your turn! Number three. Solve minus 3 x is greater than 12. Pause and try it.", E('−3x > 12'), "Divide by minus 3 and flip. x is less than minus 4.", g('x < −4')),
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
      S("The time for a pendulum is T equals 2 times the square root of L. To get L out, first divide by 2. T over 2 equals root L. Now square both sides. L equals T over 2, all squared.", E('T = 2√L') + E('T/2 = √L') + g('L = (T/2)²'))
    ]),
    SC('Kinetic energy', 'Example 4: v squared', [
      S("E equals a half m v squared. Multiply both sides by 2. 2 E equals m v squared. Divide by m. 2 E over m equals v squared. Square root. v equals the square root of 2 E over m.", E('E = ½mv²') + E('2E = mv²') + g('v = √(2E/m)'))
    ]),
    SC('A square and a number', 'Example 5: make x the subject', [
      S("y equals x squared plus 3. Subtract 3. y minus 3 equals x squared. Square root. x equals the square root of y minus 3.", E('y = x² + 3') + g('x = √(y − 3)'))
    ]),
    SC('Check', 'Example 6: substitute back', [
      S("Check with numbers. If r is 3, then A is pi times 9. Put that into r equals root of A over pi. A over pi is 9. The square root of 9 is 3. We get back to r equals 3.", V.rule('Substitute to check.'))
    ]),
    SC('A longer one', 'Example 7: V = ⅓πr²h, make r the subject', [
      S("This is the volume of a cone. We want r on its own. Go slowly, 1 step at a time. Step one. Get rid of the fraction. Multiply both sides by 3. 3 V equals pi r squared h.", E('V = ⅓πr²h') + E('3V = πr²h')),
      S("Step two. r squared is multiplied by pi and by h. Divide both sides by pi h. 3 V over pi h equals r squared.", E('3V/(πh) = r²')),
      S("Step three. Square root both sides. r equals the square root of 3 V over pi h. The square root covers the whole fraction.", g('r = √(3V/(πh))')),
      S("Step four. Check with numbers. A cone with radius 3 and height 4 has volume pi times 9 times 4 over 3, which is 12 pi. Put V equals 12 pi, h equals 4 into the new formula. 3 times 12 pi is 36 pi. Over pi times 4 is 9. The square root of 9 is 3. We get radius 3 back.", E('√(36π/(4π)) = √9 = 3 ✓'))
    ]),
    SC('Two steps with a root', 'Example 8: v² = u² + 2as, make u the subject', [
      S("This is a physics formula. Step one. Subtract 2 a s from both sides. v squared minus 2 a s equals u squared.", E('v² = u² + 2as') + E('v² − 2as = u²')),
      S("Step two. Square root both sides. u equals the square root of v squared minus 2 a s. Notice we cannot split the root across the minus.", g('u = √(v² − 2as)'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Taking away instead of using the square root. Pythagoras says c squared equals a squared plus b squared. Make a the subject. Wrong: a equals c minus b. Test with c equal 5 and b equal 3. 5 minus 3 is 2. The real answer is 4. Subtract b squared, then take the square root.", r('a = c − b = 2  ✗') + g('a = √(c² − b²) = 4  ✓')),
      S("Mistake two. Doing the steps in the wrong order. A equals pi r squared. Make r the subject. Wrong: take the square root of A, then divide by pi. Test with A equal 28.3. Root of 28.3 over pi is 1.7. The right answer is 3. Divide by pi first. Then take the square root.", r('r = √A ÷ π ≈ 1.7  ✗') + g('r = √(A ÷ π) = 3  ✓')),
      S("Mistake three. Leaving r squared. r squared equals 49. Wrong: r equals 49. The square root is needed to get r. r equals 7.", r('r = 49  ✗') + g('r = √49 = 7  ✓'))
    ]),
    SC('In real life', 'Falling objects', [
      S("The distance an object falls is d equals 5 t squared. If you know the depth of a well, rearrange to find how long a stone takes to fall. t equals the square root of d over 5.", g('t = √(d/5)'))
    ]),
    L.turn("Your turn! Number one. Make r the subject of V equals r squared. Pause and try it.", E('V = r²'), "Take the square root. r equals root V.", g('r = √V')),
    L.turn("Your turn! Number two. Make x the subject of y equals x squared minus 4. Pause and try it.", E('y = x² − 4'), "Add 4, then square root. x equals root of y plus 4.", g('x = √(y + 4)')),
    L.turn("Your turn! Number three. Make L the subject of T equals root L. Pause and try it.", E('T = √L'), "Square both sides. L equals T squared.", g('L = T²')),
    L.rec('How do you change the subject of a formula with powers and roots?', "Undo the operations in reverse order, doing the same to both sides. Undo a square with a square root, and undo a square root by squaring. Isolate the squared or rooted term first, then undo it. Check by substituting numbers.", ['Undo in reverse order', 'Isolate the power or root', 'Square root undoes square', 'Squaring undoes root'])
  ]);

  N('How do you change the subject when the letter appears twice?', 'how to collect the terms and factorise to get the subject on its own.', [
    SC('Twice', 'Start with the basics', [
      S("Sometimes the letter we want appears twice in the formula. Like a x plus b equals c x plus d. Then we cannot just undo one thing. Instead, we collect all the terms with that letter on 1 side, and everything else on the other. Then we factorise.", V.rule('Collect. Factorise. Divide.'))
    ]),
    SC('Simple', 'Example 1: make x the subject of ax + b = cx + d', [
      S("Move the x terms to the left, and the others to the right. a x minus c x equals d minus b.", E('ax − cx = d − b')),
      S("Now factorise the left. x bracket a minus c equals d minus b. Divide both sides by a minus c.", E('x(a − c) = d − b') + g('x = (d − b)/(a − c)'))
    ]),
    SC('With a fraction', 'Example 2: y = (x + 1)/(x − 2)', [
      S("Make x the subject. First multiply both sides by x minus 2. y bracket x minus 2 equals x plus 1. Expand. y x minus 2 y equals x plus 1.", E('y(x − 2) = x + 1') + E('yx − 2y = x + 1')),
      S("Collect the x terms on 1 side. y x minus x equals 1 plus 2 y. Factorise. x bracket y minus 1 equals 1 plus 2 y.", E('yx − x = 1 + 2y') + E('x(y − 1) = 1 + 2y')),
      S("Divide. x equals 1 plus 2 y, over y minus 1.", g('x = (1 + 2y)/(y − 1)'))
    ]),
    SC('Another way', 'Example 3: p = (q + r)/q', [
      S("Make q the subject. Multiply by q. p q equals q plus r. Subtract q. p q minus q equals r. Factorise. q bracket p minus 1 equals r. Divide. q equals r over p minus 1.", E('pq = q + r') + E('q(p − 1) = r') + g('q = r/(p − 1)'))
    ]),
    SC('With a bracket', 'Example 4: A = 2x + y(x − 3)', [
      S("Expand the bracket. A equals 2 x plus y x minus 3 y. Move the non-x terms. A plus 3 y equals 2 x plus y x. Factorise. A plus 3 y equals x bracket 2 plus y. Divide. x equals A plus 3 y, over 2 plus y.", E('A + 3y = x(2 + y)') + g('x = (A + 3y)/(2 + y)'))
    ]),
    SC('Check', 'Example 5: with numbers', [
      S("Test the result of Example three. Let q be 4 and r be 6. Then p is 4 plus 6 over 4, which is 2.5. Now q equals r over p minus 1, 6 over 1.5, which is 4. It works.", V.rule('Check with numbers.'))
    ]),
    SC('With numbers first', 'Example 6: see the idea with numbers', [
      S("Before using letters, let us do the same steps with numbers, so the idea is clear. Solve 5 x plus 3 equals 2 x plus 12. Step one. Subtract 2 x from both sides, so the x terms are together. 3 x plus 3 equals 12.", E('5x + 3 = 2x + 12') + E('3x + 3 = 12')),
      S("Step two. Subtract 3. 3 x equals 9. Step three. Divide by 3. x equals 3.", E('3x = 9') + g('x = 3')),
      S("Now do exactly the same with letters. a x plus b equals c x plus d. Subtract c x, and subtract b. a x minus c x equals d minus b. Factorise the x. x bracket a minus c equals d minus b. Divide by a minus c. The steps are identical, only the numbers have become letters.", E('x = (d − b)/(a − c)', 'g') + V.rule('Same steps as numbers.')),
      S("Check using our numbers. a is 5, b is 3, c is 2, d is 12. d minus b is 9. a minus c is 3. 9 over 3 is 3. The formula gives x equals 3 again.", E('(12 − 3)/(5 − 2) = 3 ✓'))
    ]),
    SC('Another type', 'Example 7: y = (2x + 1)/(x − 3)', [
      S("Make x the subject. Step one. Multiply both sides by x minus 3, to clear the fraction. y bracket x minus 3 equals 2 x plus 1.", E('y(x − 3) = 2x + 1')),
      S("Step two. Expand the bracket. y x minus 3 y equals 2 x plus 1. Step three. Collect all the x terms on 1 side. Subtract 2 x. y x minus 2 x minus 3 y equals 1. Add 3 y. y x minus 2 x equals 1 plus 3 y.", E('yx − 3y = 2x + 1') + E('yx − 2x = 1 + 3y')),
      S("Step four. Factorise the left side. x bracket y minus 2 equals 1 plus 3 y. Step five. Divide. x equals 1 plus 3 y, over y minus 2.", E('x(y − 2) = 1 + 3y') + g('x = (1 + 3y)/(y − 2)')),
      S("Check with y equals 5. Then x would be 16 over 3. Put x equals 16 thirds into the original. 2 times 16 thirds plus 1 is 35 thirds. 16 thirds minus 3 is 7 thirds. 35 thirds divided by 7 thirds is 5. It matches.", V.rule('Check with a number.'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Trying to divide before factorising. 5 x minus 2 x equals 9. Wrong: divide the 5 x by 5 and say x minus 2 x equals 9 over 5. Instead, factorise. x bracket 5 minus 2 equals 9. x times 3 is 9. x equals 3.", r('5x − 2x = 9 → x − 2x = 9/5  ✗') + g('x(5 − 2) = 9 → x = 3  ✓')),
      S("Mistake two. Sign errors when moving terms. a x plus b equals c x plus d. Wrong: a x plus c x equals d minus b. Moving c x across the equals sign changes its sign. a x minus c x equals d minus b.", r('ax + cx = d − b  ✗') + g('ax − cx = d − b  ✓')),
      S("Mistake three. Forgetting to expand the bracket. y bracket x minus 3. Wrong: y x minus 3. The y multiplies both terms. y x minus 3 y.", r('y(x − 3) = yx − 3  ✗') + g('y(x − 3) = yx − 3y  ✓'))
    ]),
    SC('In real life', 'Lens formulae', [
      S("Many science formulae have the same letter twice. Rearranging them with this method lets a scientist find any unknown, whichever 1 they have not measured.", V.note('Rearranging is a science skill'))
    ]),
    L.turn("Your turn! Number one. In a x equals b x plus c, collect the x terms on 1 side. Pause and try it.", E('ax = bx + c'), "a x minus b x equals c.", g('ax − bx = c')),
    L.turn("Your turn! Number two. Factorise the left side of that. Pause and try it.", E('ax − bx'), "x bracket a minus b.", g('x(a − b)')),
    L.turn("Your turn! Number three. So what is x? Pause and try it.", E('x(a − b) = c'), "x equals c over a minus b.", g('x = c/(a − b)')),
    L.rec('How do you change the subject when the letter appears twice?', "When the letter appears more than once, collect all the terms containing it on 1 side and everything else on the other. Factorise to take the letter out as a common factor. Then divide by the bracket. Expand any brackets first.", ['Expand brackets', 'Collect the letter on one side', 'Factorise', 'Divide by the bracket'])
  ]);

  L.use(846, ['How do you solve linear equations?', 'How do you create and solve simple equations?', 'Equations with fractions', 'How do you solve inequalities, including with brackets and negative numbers?', 'Changing the subject and inequations', 'How do you change the subject of a formula with powers and roots?', 'How do you change the subject when the letter appears twice?', 'Brackets, factorising and equations']);
})();
