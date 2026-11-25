(function () {
  var BT = window.BT; if (!BT || !BT.L || !BT.sv || !BT.lk) return;
  var L = BT.L, V = BT.sv, E = L.E, S = L.st, SC = L.SC,
    g = function (t) { return E(t, 'g'); }, r = function (t) { return E(t, 'r'); };
  function N(title, goal, scenes) { L.full(title, scenes); return L.ep(title, goal, []); }

  /* ---- full version of the old short lesson (shown in S3 topics 845/846) ---- */
  N('Brackets, factorising and equations', 'how to factorise expressions, find the two brackets of a quadratic step by step, and use brackets to solve equations.', [
    SC('Factorising', 'Start with the basics', [
      S("Factorising puts an expression back into brackets. It is the reverse of expanding. When we expand, 3 bracket x plus 2 becomes 3 x plus 6. When we factorise, 3 x plus 6 goes back to 3 bracket x plus 2.", E('3(x + 2)', 'b') + V.rule('Expand ↔ Factorise')),
      S("We will do four things in this lesson. Take out a common factor. Factorise a quadratic by finding two special numbers. Use the same idea to solve a quadratic equation. And solve equations that have brackets.", V.list(['Common factors', 'Quadratics: find two numbers', 'Solve quadratics', 'Equations with brackets']))
    ]),
    SC('Common factor', 'Example 1: 6x + 9', [
      S("Look for a number that divides into every term. 6 and 9 both divide by 3. Take 3 outside. 6 x divided by 3 is 2 x. 9 divided by 3 is 3.", E('6x + 9') + g('= 3(2x + 3)')),
      S("Check by expanding. 3 times 2 x is 6 x. 3 times 3 is 9. We are back at the start.", V.rule('Always check by expanding.'))
    ]),
    SC('Letters too', 'Example 2: x² + 7x', [
      S("Now the terms share a letter. x squared is x times x. 7 x is 7 times x. Both have an x. Take x outside. What is left is x plus 7.", E('x² + 7x') + g('= x(x + 7)'))
    ]),
    SC('Quadratics', 'What is a quadratic?', [
      S("A quadratic has an x squared term, an x term, and a number. For example, x squared plus 5 x plus 6. Many quadratics factorise into 2 brackets, like x plus 2, times x plus 3.", E('x² + 5x + 6', 'b')),
      S("How do we find the two brackets? Let us expand x plus 2 times x plus 3, and watch what happens. x squared, plus 3 x, plus 2 x, plus 6. That is x squared plus 5 x plus 6.", E('(x + 2)(x + 3) = x² + 3x + 2x + 6') + g('= x² + 5x + 6')),
      S("Look at the numbers two and three. They multiply to give six, the last number. And they add to give five, the number in front of x. That is the secret. To factorise, we work backwards and find those two numbers.", V.rule('× to the last number, + to the middle number.'))
    ]),
    SC('Finding the numbers', 'Example 3: x² + 5x + 6, step by step', [
      S("Step one. Look at the last number, six. List the pairs of whole numbers that multiply to make six. One and six. Two and three.", E('1 × 6 = 6') + E('2 × 3 = 6')),
      S("Step two. Add each pair. 1 plus 6 is 7. 2 plus 3 is 5. We need 5, the middle number. So the pair is 2 and 3.", E('1 + 6 = 7 ✗', 'r') + g('2 + 3 = 5 ✓')),
      S("Step three. Write the brackets. x plus 2, times x plus 3. Check by expanding, as we did before. It works.", g('x² + 5x + 6 = (x + 2)(x + 3)'))
    ]),
    SC('Another one', 'Example 4: x² + 7x + 12', [
      S("The last number is 12. Pairs that multiply to 12. 1 and 12 add to 13. 2 and 6 add to 8. 3 and 4 add to 7. That is the middle number. So 3 and 4.", V.tbl([['1 × 12', '13'], ['2 × 6', '8'], ['3 × 4', '7 ✓']], ['Multiply to 12', 'Add'])),
      S("The brackets are x plus 3, and x plus 4.", g('(x + 3)(x + 4)'))
    ]),
    SC('Negative middle', 'Example 5: x² − 7x + 10', [
      S("The last number is positive 10, but the middle is negative 7. When the last number is positive and the middle is negative, both numbers are negative. Pairs: minus 1 and minus 10 add to minus 11. Minus 2 and minus 5 add to minus 7. That is the one.", V.tbl([['−1, −10', '−11'], ['−2, −5', '−7 ✓']], ['Multiply to 10', 'Add'])),
      S("So x minus 2, times x minus 5. Check. Minus 2 times minus 5 is plus 10. Minus 2 x minus 5 x is minus 7 x. Correct.", g('(x − 2)(x − 5)'))
    ]),
    SC('Negative last number', 'Example 6: x² + 2x − 15', [
      S("Now the last number is negative 15. A negative product means 1 number is positive and 1 is negative. Pairs that multiply to 15 in size. 1 and 15. 3 and 5. We need them to add to plus 2. Try minus 3 and plus 5. They multiply to minus 15, and add to plus 2.", V.tbl([['−1, 15', '14'], ['1, −15', '−14'], ['−3, 5', '2 ✓'], ['3, −5', '−2']], ['Multiply to −15', 'Add'])),
      S("So x minus 3, times x plus 5.", g('(x − 3)(x + 5)')),
      S("A tip. When the last number is negative, the bigger of the two numbers takes the sign of the middle number.", V.rule('Last number negative: one + and one −.'))
    ]),
    SC('Difference of squares', 'Example 7: x² − 9', [
      S("There is no x term here. Think of it as x squared plus 0 x minus 9. We need 2 numbers that multiply to minus 9 and add to 0. 3 and minus 3. So x minus 3, times x plus 3.", E('x² − 9') + g('= (x − 3)(x + 3)'))
    ]),
    SC('Solving a quadratic', 'Example 8: x² + 5x + 6 = 0', [
      S("Why do we factorise? To solve equations. Take x squared plus 5 x plus 6 equals 0. Factorise. x plus 2, times x plus 3, equals 0.", E('(x + 2)(x + 3) = 0')),
      S("Here is the key idea. If 2 things multiply to give 0, one of them must be 0. So either x plus 2 is 0, or x plus 3 is 0. That gives x equals minus 2, or x equals minus 3.", E('x + 2 = 0 → x = −2') + E('x + 3 = 0 → x = −3'))
    ]),
    SC('Check the answers', 'Example 9: put them back', [
      S("Check x equals minus 2. 4, minus 10, plus 6. That is 0. Check x equals minus 3. 9, minus 15, plus 6. 0 as well. Both work.", E('(−2)² + 5(−2) + 6 = 0 ✓') + E('(−3)² + 5(−3) + 6 = 0 ✓'))
    ]),
    SC('Equations with brackets', 'Example 10: 4(x − 2) = 3(x + 1)', [
      S("Now equations with brackets, which are not quadratics. Expand both sides first. 4 x minus 8, equals 3 x plus 3.", E('4x − 8 = 3x + 3')),
      S("Take 3 x from both sides. x minus 8 equals 3. Add 8. x equals 11. Check. 4 times 9 is 36. 3 times 12 is 36. Equal.", E('x − 8 = 3') + g('x = 11'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Not taking out the highest common factor. Factorise 12 x plus 18. Wrong: 2 bracket 6 x plus 9. That is correct as far as it goes, but 6 x plus 9 still has a common factor, 3. Take out 6. 6 bracket 2 x plus 3.", r('2(6x + 9)  not fully factorised  ✗') + g('6(2x + 3)  ✓')),
      S("Mistake two. Finding 2 numbers that multiply correctly but add wrongly. Factorise x squared plus 5 x plus 6. Wrong: 1 and 6 multiply to 6, so x plus 1 times x plus 6. But 1 plus 6 is 7, not 5. 2 and 3. Check by expanding.", r('(x + 1)(x + 6) = x² + 7x + 6  ✗') + g('(x + 2)(x + 3) = x² + 5x + 6  ✓')),
      S("Mistake three. Giving 1 answer to a quadratic, or the wrong signs. Solve x squared plus 5 x plus 6 equals 0. The brackets are x plus 2 and x plus 3. Wrong: x equals 2. Set each bracket to 0. x plus 2 is 0 gives minus 2. x plus 3 is 0 gives minus 3.", r('x + 2 = 0 → x = 2  ✗') + g('x = −2 or x = −3  ✓'))
    ]),
    SC('In real life', 'Areas', [
      S("A rectangular garden has area x squared plus 5 x plus 6 square metres. Factorising gives x plus 2, times x plus 3. So its sides are x plus 2 metres and x plus 3 metres. Factorising lets us find the dimensions from the area.", g('Sides: (x + 2) m and (x + 3) m'))
    ]),
    L.turn("Your turn! Number one. Factorise x squared plus 7 x plus 12. Look for 2 numbers that multiply to 12 and add to 7. Pause and try it.", E('x² + 7x + 12'), "3 and 4 multiply to 12 and add to 7. So x plus 3, times x plus 4.", g('(x + 3)(x + 4)')),
    L.turn("Your turn! Number two. Factorise x squared minus 8 x plus 15. Both numbers are negative. Pause and try it.", E('x² − 8x + 15'), "Minus 3 and minus 5 multiply to 15 and add to minus 8. So x minus 3, times x minus 5.", g('(x − 3)(x − 5)')),
    L.turn("Your turn! Number three. Solve x squared plus x minus 6 equals 0. Factorise first. Pause and try it.", E('x² + x − 6 = 0'), "Minus 2 and plus 3 multiply to minus 6 and add to 1. So x minus 2, times x plus 3, equals 0. x is 2 or minus 3.", g('x = 2 or x = −3')),
    L.turn("Your turn! Number four. Solve 3 bracket x plus 4, equals 2 bracket x minus 1, plus 20. Pause and try it.", E('3(x + 4) = 2(x − 1) + 20'), "3 x plus 12 equals 2 x plus 18. So x is 6.", g('x = 6')),
    L.rec('How do you use brackets and factorising to solve equations?', "To factorise, take out the highest common factor. For a quadratic x squared plus b x plus c, find two numbers that multiply to c and add to b, and put them in two brackets. Check by expanding. To solve a quadratic, make it equal zero, factorise, and set each bracket equal to zero. For equations with brackets, expand first, then solve.", ['Take out the HCF', 'Quadratic: × to c, + to b', 'Check by expanding', 'Each bracket = 0'])
  ]);

  N('How do you expand brackets, including negatives?', 'how to multiply every term inside a bracket and handle minus signs.', [
    SC('Brackets', 'Start with the basics', [
      S("A bracket groups terms together. The number outside tells us to multiply everything inside. 3 bracket x plus 4 means 3 times x, and 3 times 4. We say we expand the bracket.", E('3(x + 4)', 'b')),
      S("The rule is simple. Multiply the outside by every term inside, one at a time.", V.rule('Outside × every term inside.'))
    ]),
    SC('Positive', 'Example 1: 3(x + 4)', [
      S("3 times x is 3 x. 3 times 4 is 12. So 3 bracket x plus 4 equals 3 x plus 12.", E('3(x + 4)') + g('= 3x + 12'))
    ]),
    SC('With a letter', 'Example 2: 2x(x + 5)', [
      S("2 x times x is 2 x squared. 2 x times 5 is 10 x. So the answer is 2 x squared plus 10 x.", E('2x(x + 5)') + g('= 2x² + 10x'))
    ]),
    SC('Subtraction', 'Example 3: 4(x − 3)', [
      S("4 times x is 4 x. 4 times minus 3 is minus 12. The minus sign stays with the three.", E('4(x − 3)') + g('= 4x − 12'))
    ]),
    SC('A negative outside', 'Example 4: −2(x + 6)', [
      S("Now the number outside is negative. Minus 2 times x is minus 2 x. Minus 2 times plus 6 is minus 12. Remember, a negative times a positive is negative.", E('−2(x + 6)') + g('= −2x − 12'))
    ]),
    SC('Negative times negative', 'Example 5: −3(x − 5)', [
      S("Minus 3 times x is minus 3 x. Minus 3 times minus 5 is plus 15, because 2 negatives make a positive.", E('−3(x − 5)') + g('= −3x + 15')),
      S("This is the step where most mistakes happen. Take your time with the signs.", V.rule('− × − = +'))
    ]),
    SC('Expand and simplify', 'Example 6: collecting terms', [
      S("Expand and simplify 2 bracket x plus 3, plus 4 bracket x minus 1. First expand. 2 x plus 6, plus 4 x minus 4. Now collect like terms. 6 x plus 2.", E('2(x + 3) + 4(x − 1)') + E('= 2x + 6 + 4x − 4') + g('= 6x + 2'))
    ]),
    SC('A minus in front', 'Example 7: subtracting a bracket', [
      S("Simplify 5 x plus 6, minus bracket 2 x plus 1. The minus in front multiplies the whole bracket by minus 1. So minus 2 x and minus 1. 5 x minus 2 x is 3 x. 6 minus 1 is 5.", E('5x + 6 − (2x + 1)') + E('= 5x + 6 − 2x − 1') + g('= 3x + 5'))
    ]),
    SC('Why minus times minus is plus', 'A pattern to trust', [
      S("Many students ask why a negative times a negative is positive. Here is a pattern that shows it. Look at minus 3 times 3, minus 3 times 2, minus 3 times 1. Each answer goes up by 3 as the number goes down by 1.", V.tbl([['−3 × 3', '−9'], ['−3 × 2', '−6'], ['−3 × 1', '−3'], ['−3 × 0', '0']], ['Sum', 'Answer'])),
      S("Carry on the pattern. Minus 3 times minus 1 must be 3, to keep going up by 3. Minus 3 times minus 2 is 6. So a negative times a negative is positive.", E('−3 × −1 = +3') + E('−3 × −2 = +6', 'g'))
    ]),
    SC('Two bracket terms', 'Example 8: 3(2x − 1) − 2(x − 4)', [
      S("Take it very slowly. Step one. Expand the first bracket. 3 times 2 x is 6 x. 3 times minus 1 is minus 3. So 6 x minus 3.", E('3(2x − 1) = 6x − 3')),
      S("Step two. Expand the second bracket, with its minus 2 in front. Minus 2 times x is minus 2 x. Minus 2 times minus 4 is plus 8. So minus 2 x plus 8.", E('−2(x − 4) = −2x + 8')),
      S("Step three. Put them together. 6 x minus 3, minus 2 x, plus 8. Step four. Collect the x terms. 6 x minus 2 x is 4 x. Collect the numbers. Minus 3 plus 8 is 5.", E('6x − 3 − 2x + 8') + g('= 4x + 5')),
      S("Step five. Check with a number. Let x be 2. The original is 3 times 3, minus 2 times minus 2. 9 plus 4 is 13. The answer 4 times 2 plus 5 is 13. They agree.", E('x = 2: 13 = 13 ✓'))
    ]),
    SC('Letters outside', 'Example 9: −x(3 − x)', [
      S("The outside can be a letter too. Minus x times 3 is minus 3 x. Minus x times minus x is plus x squared, because a negative times a negative is positive. So the answer is minus 3 x plus x squared. We usually write the x squared first.", E('−x(3 − x)') + g('= x² − 3x'))
    ]),
    SC('Watch out!', 'Three common mistakes', [
      S("Mistake one: multiplying only the first term. 3 bracket x plus 4 is not 3 x plus 4.", r('3x + 4  ✗') + g('3x + 12  ✓')),
      S("Mistake two: getting signs wrong with a negative outside.", r('−2(x + 6) = −2x + 12  ✗') + g('= −2x − 12  ✓')),
      S("Mistake three: a minus in front of a bracket only changing the first sign.", V.rule('Change every sign.'))
    ]),
    SC('In real life', 'Shopping', [
      S("3 friends each buy a ticket costing x pounds and a drink costing £4. The total is 3 bracket x plus 4. Expanding gives 3 x plus 12, the tickets and all the drinks.", g('3(x + 4) = 3x + 12'))
    ]),
    L.turn("Your turn! Number one. Expand 5 bracket x plus 2. Pause and try it.", E('5(x + 2)'), "Five x plus ten.", g('5x + 10')),
    L.turn("Your turn! Number two. Expand minus 4 bracket x minus 3. Pause and try it.", E('−4(x − 3)'), "Minus 4 x, plus 12.", g('−4x + 12')),
    L.turn("Your turn! Number three. Expand and simplify 3 bracket x plus 1, minus bracket x plus 5. Pause and try it.", E('3(x + 1) − (x + 5)'), "3 x plus 3, minus x minus 5. 2 x minus 2.", g('2x − 2')),
    L.rec('How do you expand brackets, including negatives?', "Multiply the number outside by every term inside the bracket. Take care with signs. A negative times a negative is positive. A minus in front of a bracket changes every sign inside. After expanding, collect like terms.", ['Multiply every term', 'Watch the signs', '− × − = +', 'Collect like terms'])
  ]);

  N('How do you expand two brackets?', 'how to multiply 2 brackets, using FOIL or a grid.', [
    SC('Two brackets', 'Start with the basics', [
      S("Now we multiply 2 brackets together. For example, x plus 2, times x plus 3. Every term in the first bracket must multiply every term in the second.", E('(x + 2)(x + 3)', 'b')),
      S("There are four multiplications. A handy memory aid is FOIL. First, Outside, Inside, Last.", V.list(['First × First', 'Outside × Outside', 'Inside × Inside', 'Last × Last']))
    ]),
    SC('FOIL', 'Example 1: (x + 2)(x + 3)', [
      S("First, x times x is x squared. Outside, x times 3 is 3 x. Inside, 2 times x is 2 x. Last, 2 times 3 is 6.", E('x² + 3x + 2x + 6')),
      S("Collect the middle terms. 3 x plus 2 x is 5 x. The answer is x squared plus 5 x plus 6.", g('x² + 5x + 6'))
    ]),
    SC('A grid', 'Example 2: the same in a grid', [
      S("A grid does the same job. Write one bracket across the top and the other down the side. Multiply each pair. Then add up everything inside.", V.tbl([['x', 'x²', '3x'], ['2', '2x', '6']], ['×', 'x', '3'])),
      S("Same answer. Use whichever you prefer, but be consistent.", g('x² + 5x + 6'))
    ]),
    SC('With a minus', 'Example 3: (x − 4)(x + 5)', [
      S("First, x squared. Outside, 5 x. Inside, minus 4 x. Last, minus 20. 5 x minus 4 x is x. So x squared plus x minus 20.", E('x² + 5x − 4x − 20') + g('= x² + x − 20'))
    ]),
    SC('Two minuses', 'Example 4: (x − 3)(x − 2)', [
      S("First, x squared. Outside, minus 2 x. Inside, minus 3 x. Last, minus 3 times minus 2, which is plus 6. Collect. Minus 5 x. So x squared minus 5 x plus 6.", E('x² − 2x − 3x + 6') + g('= x² − 5x + 6'))
    ]),
    SC('Squaring a bracket', 'Example 5: (x + 4)²', [
      S("A squared bracket means the bracket times itself. Write it out. x plus 4, times x plus 4. First, x squared. Outside and inside, 4 x each, 8 x. Last, 16. So x squared plus 8 x plus 16.", E('(x + 4)(x + 4)') + g('= x² + 8x + 16')),
      S("Notice the middle is 8 x, not 0. It is not just x squared plus 16.", r('x² + 16  ✗'))
    ]),
    SC('With a number in front', 'Example 6: (2x + 1)(x + 3)', [
      S("First, 2 x squared. Outside, 6 x. Inside, 1 x. Last, 3. 7 x in the middle. So 2 x squared plus 7 x plus 3.", E('2x² + 6x + x + 3') + g('= 2x² + 7x + 3'))
    ]),
    SC('A picture of why', 'The area model', [
      S("Why do we need 4 multiplications? Picture a rectangle with sides x plus 2, and x plus 3. Cut it into 4 pieces. 1 big square of x by x, which is x squared. 2 strips, x by 3, and x by 2. And 1 small rectangle, 2 by 3, which is 6.", V.tbl([['x²', '3x'], ['2x', '6']], ['', 'x', '3'])),
      S("Add the areas of all four pieces. x squared, plus 3 x, plus 2 x, plus 6. That is x squared plus 5 x plus 6. So each piece is one of the four products. We never miss 1 when we use the grid.", V.rule('Four pieces, four products.'))
    ]),
    SC('Perfect difference', 'Example 7: (x + 5)(x − 5)', [
      S("This is a special case. First, x squared. Outside, x times minus 5 is minus 5 x. Inside, 5 times x is plus 5 x. Last, 5 times minus 5 is minus 25. The middle terms cancel. We are left with x squared minus 25.", E('x² − 5x + 5x − 25') + g('= x² − 25')),
      S("So a sum times a difference gives a difference of two squares. Remember this. We will use it for factorising.", V.rule('(x + a)(x − a) = x² − a²'))
    ]),
    SC('A number in front', 'Example 8: (3x − 2)(x + 4)', [
      S("Step one, First. 3 x times x is 3 x squared. Step two, Outside. 3 x times 4 is 12 x. Step three, Inside. Minus 2 times x is minus 2 x. Step four, Last. Minus 2 times 4 is minus 8.", E('3x² + 12x − 2x − 8')),
      S("Step five. Collect the middle terms. 12 x minus 2 x is 10 x. The answer is 3 x squared plus 10 x minus 8.", g('= 3x² + 10x − 8'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Squaring each term. Expand x plus 4, all squared. Wrong: x squared plus 16. The middle term has gone. Write it as 2 brackets. x squared plus 4 x plus 4 x plus 16. x squared plus 8 x plus 16.", r('(x + 4)² = x² + 16  ✗') + g('(x + 4)² = x² + 8x + 16  ✓')),
      S("Mistake two. Missing one of the four products. Expand x plus 2, times x plus 3. Wrong: x squared plus 6. That only multiplies first by first, and last by last. We also need the outside and inside. x squared plus 3 x plus 2 x plus 6. x squared plus 5 x plus 6.", r('(x + 2)(x + 3) = x² + 6  ✗') + g('= x² + 3x + 2x + 6 = x² + 5x + 6  ✓')),
      S("Mistake three. Sign errors. Expand x minus 3, times x minus 2. Wrong: the last term is minus 6. Minus 3 times minus 2 is plus 6. And the middle is minus 2 x minus 3 x, minus 5 x.", r('x² − 5x − 6  ✗') + g('x² − 5x + 6  ✓'))
    ]),
    SC('In real life', 'Areas', [
      S("A rectangular garden is x plus 2 metres by x plus 3 metres. Its area is the product of the two. Expanding gives x squared plus 5 x plus 6 square metres.", g('Area = x² + 5x + 6'))
    ]),
    L.turn("Your turn! Number one. Expand x plus 1, times x plus 6. Pause and try it.", E('(x + 1)(x + 6)'), "x squared plus 7 x plus 6.", g('x² + 7x + 6')),
    L.turn("Your turn! Number two. Expand x minus 5, times x plus 2. Pause and try it.", E('(x − 5)(x + 2)'), "x squared minus 3 x minus 10.", g('x² − 3x − 10')),
    L.turn("Your turn! Number three. Expand x plus 3, all squared. Pause and try it.", E('(x + 3)²'), "x squared plus 6 x plus 9.", g('x² + 6x + 9')),
    L.rec('How do you expand two brackets?', "Multiply every term in the first bracket by every term in the second. Use FOIL, or a grid. Then collect like terms. A squared bracket means the bracket times itself, so x plus 4 squared is x squared plus 8 x plus 16.", ['Four products', 'FOIL or grid', 'Collect middle terms', '(x + a)² = x² + 2ax + a²'])
  ]);

  N('How do you factorise fully, including by taking out common factors?', 'how to take out the highest common factor from an expression.', [
    SC('Factorising', 'Start with the basics', [
      S("Factorising is the reverse of expanding. Expanding removes brackets. Factorising puts them back. We look for something that all the terms share, and take it outside.", V.cols([V.card('Expand: remove brackets', 'b', true), V.card('Factorise: add brackets', 'g', true)], 2)),
      S("That shared thing is called a common factor.", V.rule('Find what all terms share.'))
    ]),
    SC('Numbers', 'Example 1: 6x + 12', [
      S("6 and 12 both divide by 6. Take 6 outside. 6 x divided by 6 is x. 12 divided by 6 is 2. So 6 bracket x plus 2.", E('6x + 12') + g('= 6(x + 2)')),
      S("Check by expanding. 6 x plus 12. Correct.", V.rule('Check by expanding.'))
    ]),
    SC('Letters', 'Example 2: x² + 5x', [
      S("Both terms have an x. Take x outside. x squared divided by x is x. 5 x divided by x is 5. So x bracket x plus 5.", E('x² + 5x') + g('= x(x + 5)'))
    ]),
    SC('Fully', 'Example 3: 6x² + 9x', [
      S("Factorise fully. 6 and 9 share 3. The terms also share x. So the highest common factor is 3 x. 6 x squared divided by 3 x is 2 x. 9 x divided by 3 x is 3.", E('6x² + 9x') + g('= 3x(2x + 3)')),
      S("Fully means we must take out the highest common factor, not just part of it.", r('3(2x² + 3x)  ✗ not fully') + g('3x(2x + 3)  ✓'))
    ]),
    SC('Three terms', 'Example 4: 4x² − 8x + 12', [
      S("4, 8 and 12 share 4. There is no x in 12, so we cannot take out x. Take out 4. x squared minus 2 x plus 3.", E('4x² − 8x + 12') + g('= 4(x² − 2x + 3)'))
    ]),
    SC('Negative terms', 'Example 5: 10y − 15', [
      S("10 and 15 share 5. 10 y divided by 5 is 2 y. 15 divided by 5 is 3. So 5 bracket 2 y minus 3.", E('10y − 15') + g('= 5(2y − 3)'))
    ]),
    SC('Difference of two squares', 'Example 6: x² − 25', [
      S("There is a special pattern. A square minus a square factorises into 2 brackets. x squared minus 25 is x squared minus 5 squared. So x minus 5, times x plus 5.", E('x² − 25') + g('= (x − 5)(x + 5)'))
    ]),
    SC('Finding the HCF', 'How to be sure you have the highest', [
      S("Let us do this carefully. To find the highest common factor of an expression, deal with the numbers first, then the letters. Take 8 x squared plus 12 x. Step one, the numbers. 8 and 12. The biggest number that divides both is 4.", E('8x² + 12x') + E('HCF of 8 and 12 = 4')),
      S("Step two, the letters. x squared is x times x. 12 x has 1 x. The most x's they share is 1. So the letter part is x.", E('x² and x share x')),
      S("Step three. Put them together. The highest common factor is 4 x. Divide each term by 4 x. 8 x squared over 4 x is 2 x. 12 x over 4 x is 3.", E('8x² ÷ 4x = 2x') + E('12x ÷ 4x = 3')),
      S("The answer is 4 x, bracket 2 x plus 3. Step four. Check by expanding. 4 x times 2 x is 8 x squared. 4 x times 3 is 12 x. Correct.", g('4x(2x + 3)'))
    ]),
    SC('With a minus', 'Example 7: 15y² − 10y', [
      S("15 and 10 share 5. y squared and y share y. The highest common factor is 5 y. 15 y squared over 5 y is 3 y. Minus 10 y over 5 y is minus 2. So 5 y, bracket 3 y minus 2.", E('15y² − 10y') + g('= 5y(3y − 2)'))
    ]),
    SC('A square minus a square', 'Example 8: 4x² − 49', [
      S("There is no common factor except 1. But look. 4 x squared is 2 x, all squared. 49 is 7 squared. A square minus a square. It factorises into 2 x minus 7, times 2 x plus 7.", E('4x² − 49 = (2x)² − 7²') + g('= (2x − 7)(2x + 7)')),
      S("Check by expanding. 2 x times 2 x is 4 x squared. The middle terms cancel. Minus 7 times 7 is minus 49. Correct.", V.rule('a² − b² = (a − b)(a + b)'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Not taking out the highest common factor. Factorise 8 x squared plus 12 x. Wrong: 2 x bracket 4 x plus 6. Inside the bracket, 4 x plus 6 still has a common factor, 2. Take out 4 x. 4 x bracket 2 x plus 3.", r('2x(4x + 6)  not fully  ✗') + g('4x(2x + 3)  ✓')),
      S("Mistake two. Forgetting the one. Factorise x squared plus x. Wrong: x bracket x. Expand to check. That is only x squared. When x is taken out of x, 1 is left. x bracket x plus 1.", r('x² + x = x(x)  ✗') + g('x² + x = x(x + 1)  ✓')),
      S("Mistake three. Not checking by expanding. Factorise 10 y minus 15. Wrong: 5 bracket 2 y plus 3. Expand. 10 y plus 15. The sign is wrong. 5 bracket 2 y minus 3. Expand. 10 y minus 15.", r('5(2y + 3) = 10y + 15  ✗') + g('5(2y − 3) = 10y − 15  ✓'))
    ]),
    SC('In real life', 'Splitting a bill', [
      S("A bill is 6 x plus £12. Written as 6 bracket x plus 2, it shows that 6 people each pay x plus 2.", g('6(x + 2)'))
    ]),
    L.turn("Your turn! Number one. Factorise 8 x plus 12. Pause and try it.", E('8x + 12'), "4 bracket 2 x plus 3.", g('4(2x + 3)')),
    L.turn("Your turn! Number two. Factorise x squared minus 7 x. Pause and try it.", E('x² − 7x'), "x bracket x minus 7.", g('x(x − 7)')),
    L.turn("Your turn! Number three. Factorise fully 10 x squared plus 15 x. Pause and try it.", E('10x² + 15x'), "5 x bracket 2 x plus 3.", g('5x(2x + 3)')),
    L.rec('How do you factorise fully?', "Factorising is the reverse of expanding. Find the highest common factor of all the terms, numbers and letters, and take it outside the bracket. Divide each term by it. Check by expanding. A square minus a square factorises into two brackets.", ['Find the HCF', 'Divide each term', 'Check by expanding', 'a² − b² = (a − b)(a + b)'])
  ]);

  N('How do you find the highest common factor and the lowest common multiple?', 'how to find HCF and LCM using prime factors.', [
    SC('Factors and multiples', 'Start with the basics', [
      S("A factor divides exactly into a number. The factors of 12 are 1, 2, 3, 4, 6 and 12. A multiple is in the times table. Multiples of 12 are 12, 24, 36, and so on.", V.cols([V.card('Factors: go into it', 'b', true), V.card('Multiples: times table', 'g', true)], 2))
    ]),
    SC('HCF', 'Example 1: the highest common factor of 12 and 18', [
      S("The highest common factor is the biggest number that divides into both. Factors of 12: 1, 2, 3, 4, 6, 12. Factors of 18: 1, 2, 3, 6, 9, 18. The biggest in both lists is 6.", E('HCF(12, 18) = 6', 'g'))
    ]),
    SC('LCM', 'Example 2: the lowest common multiple of 4 and 6', [
      S("The lowest common multiple is the smallest number in both times tables. Multiples of 4: 4, 8, 12, 16. Multiples of 6: 6, 12, 18. The first match is 12.", E('LCM(4, 6) = 12', 'g'))
    ]),
    SC('Prime factors', 'Example 3: a better method', [
      S("For bigger numbers, use prime factors. Write each number as a product of primes. 12 is 2 times 2 times 3. 18 is 2 times 3 times 3.", E('12 = 2 × 2 × 3') + E('18 = 2 × 3 × 3'))
    ]),
    SC('HCF from primes', 'Example 4: multiply the shared primes', [
      S("For the highest common factor, take the primes that are in both. Both have a 2. Both have a 3. Multiply. 2 times 3 is 6.", g('HCF = 2 × 3 = 6'))
    ]),
    SC('LCM from primes', 'Example 5: take the most of each', [
      S("For the lowest common multiple, take the most times each prime appears. 2 appears twice in 12. 3 appears twice in 18. So 2 times 2 times 3 times 3. 36.", g('LCM = 2 × 2 × 3 × 3 = 36'))
    ]),
    SC('Problems', 'Example 6: buses', [
      S("1 bus comes every 12 minutes and another every 18. They leave together at 9 o'clock. When do they next leave together? The lowest common multiple of 12 and 18 is 36. 36 minutes later, at 9 36.", g('9:36'))
    ]),
    SC('Sharing', 'Example 7: tiles', [
      S("A room is 12 metres by 18 metres. What is the biggest square tile that fits exactly? That is the highest common factor. 6 metres.", g('6 m'))
    ]),
    SC('Bigger numbers', 'Example 8: 60 and 84, by factor trees', [
      S("Let us use prime factors for bigger numbers, very carefully. Step one. Break down 60. 60 is 2 times 30. 30 is 2 times 15. 15 is 3 times 5. So 60 is 2 times 2 times 3 times 5.", E('60 = 2 × 2 × 3 × 5')),
      S("Step two. Break down 84. 84 is 2 times 42. 42 is 2 times 21. 21 is 3 times 7. So 84 is 2 times 2 times 3 times 7.", E('84 = 2 × 2 × 3 × 7')),
      S("Step three, the highest common factor. Which primes do they both have? 2, 2 and 3. Multiply. 2 times 2 times 3 is 12.", g('HCF = 2 × 2 × 3 = 12')),
      S("Step four, the lowest common multiple. Take every prime, the most times it appears in either number. Two, 2, 3, 5 and 7. Multiply. 2 times 2 is 4. Times 3 is 12. Times 5 is 60. Times 7 is 420.", g('LCM = 2 × 2 × 3 × 5 × 7 = 420')),
      S("A lovely check. The HCF times the LCM equals the product of the two numbers. 12 times 420 is 5,040. 60 times 84 is 5,040. It matches.", E('12 × 420 = 60 × 84 = 5040 ✓'))
    ]),
    SC('Using it', 'Example 9: simplifying a fraction', [
      S("The HCF helps simplify fractions. 60 over 84. Divide the top and bottom by the HCF, 12. 60 over 12 is 5. 84 over 12 is 7. So 60 over 84 is 5 sevenths.", E('60/84 = 5/7', 'g'))
    ]),
    SC('Adding fractions', 'Example 10: the LCM as a common denominator', [
      S("The LCM gives the best common denominator. To add a sixth and a quarter, the lowest common multiple of 6 and 4 is 12. A sixth is 2 twelfths. A quarter is 3 twelfths. Add. 5 twelfths.", E('1/6 + 1/4 = 2/12 + 3/12') + g('= 5/12'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Mixing up HCF and LCM. 6 and 8. Wrong: the highest common factor is 24. A common factor can never be bigger than the smaller number. The HCF is 2. The lowest common multiple is 24.", r('HCF(6, 8) = 24  ✗') + g('HCF = 2 and LCM = 24  ✓')),
      S("Mistake two. Multiplying the numbers to find the LCM. 4 and 6. Wrong: 4 times 6, 24. That is a common multiple, but not the lowest. 12 is in both times tables.", r('LCM(4, 6) = 24  ✗') + g('LCM(4, 6) = 12  ✓')),
      S("Mistake three. Missing a prime factor. Write 12 as a product of primes. Wrong: 2 times 3, which is 6. 12 is 2 times 2 times 3. Write every prime.", r('12 = 2 × 3  ✗') + g('12 = 2 × 2 × 3  ✓'))
    ]),
    L.turn("Your turn! Number one. Find the HCF of 8 and 12. Pause and try it.", E('HCF(8, 12)'), "Four.", g('4')),
    L.turn("Your turn! Number two. Find the LCM of six and eight. Pause and try it.", E('LCM(6, 8)'), "Twenty-four.", g('24')),
    L.turn("Your turn! Number three. 2 lights flash every 10 seconds and every 15 seconds. When do they flash together? Pause and try it.", E('LCM(10, 15)'), "Thirty seconds.", g('30 s')),
    L.rec('How do you find the HCF and LCM?', "The highest common factor is the biggest number that divides both. The lowest common multiple is the smallest number in both times tables. Write each number as a product of primes. For HCF, multiply the primes they share. For LCM, take the most of each prime.", ['HCF: shared primes', 'LCM: most of each prime', 'HCF ≤ smaller number', 'LCM ≥ bigger number'])
  ]);

  L.use(845, ['How do you generate a formula from a sequence?', 'How do you simplify algebraic terms?', 'How do you substitute numbers into an expression?', 'How do you expand brackets, including negatives?', 'How do you expand two brackets?', 'How do you factorise fully, including by taking out common factors?', 'Common factors and difference of two squares', 'Factorising quadratics', 'How do you find the highest common factor and the lowest common multiple?', 'How do you create and use algebraic formulae?', 'Brackets, factorising and equations']);
})();
