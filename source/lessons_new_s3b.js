(function () {
  var BT = window.BT; if (!BT || !BT.L || !BT.sv || !BT.lk) return;
  var L = BT.L, V = BT.sv, E = L.E, S = L.st, SC = L.SC,
    g = function (t) { return E(t, 'g'); }, r = function (t) { return E(t, 'r'); };
  function N(title, goal, scenes) { L.full(title, scenes); return L.ep(title, goal, []); }

  /* ---- full version of the old short lesson (shown in S3 topics 845/846) ---- */
  N('Brackets, factorising and equations', 'how to factorise expressions, find the two brackets of a quadratic step by step, and use brackets to solve equations.', [
    SC('Factorising', 'Start with the basics', [
      S("Factorising puts an expression back into brackets. It is the reverse of expanding. When we expand, three bracket x plus two becomes three x plus six. When we factorise, three x plus six goes back to three bracket x plus two.", E('3(x + 2)', 'b') + V.rule('Expand ↔ Factorise')),
      S("We will do four things in this lesson. Take out a common factor. Factorise a quadratic by finding two special numbers. Use the same idea to solve a quadratic equation. And solve equations that have brackets.", V.list(['Common factors', 'Quadratics: find two numbers', 'Solve quadratics', 'Equations with brackets']))
    ]),
    SC('Common factor', 'Example 1: 6x + 9', [
      S("Look for a number that divides into every term. Six and nine both divide by three. Take three outside. Six x divided by three is two x. Nine divided by three is three.", E('6x + 9') + g('= 3(2x + 3)')),
      S("Check by expanding. Three times two x is six x. Three times three is nine. We are back at the start.", V.rule('Always check by expanding.'))
    ]),
    SC('Letters too', 'Example 2: x² + 7x', [
      S("Now the terms share a letter. x squared is x times x. Seven x is seven times x. Both have an x. Take x outside. What is left is x plus seven.", E('x² + 7x') + g('= x(x + 7)'))
    ]),
    SC('Quadratics', 'What is a quadratic?', [
      S("A quadratic has an x squared term, an x term, and a number. For example, x squared plus five x plus six. Many quadratics factorise into two brackets, like x plus two, times x plus three.", E('x² + 5x + 6', 'b')),
      S("How do we find the two brackets? Let us expand x plus two times x plus three, and watch what happens. x squared, plus three x, plus two x, plus six. That is x squared plus five x plus six.", E('(x + 2)(x + 3) = x² + 3x + 2x + 6') + g('= x² + 5x + 6')),
      S("Look at the numbers two and three. They multiply to give six, the last number. And they add to give five, the number in front of x. That is the secret. To factorise, we work backwards and find those two numbers.", V.rule('× to the last number, + to the middle number.'))
    ]),
    SC('Finding the numbers', 'Example 3: x² + 5x + 6, step by step', [
      S("Step one. Look at the last number, six. List the pairs of whole numbers that multiply to make six. One and six. Two and three.", E('1 × 6 = 6') + E('2 × 3 = 6')),
      S("Step two. Add each pair. One plus six is seven. Two plus three is five. We need five, the middle number. So the pair is two and three.", E('1 + 6 = 7 ✗', 'r') + g('2 + 3 = 5 ✓')),
      S("Step three. Write the brackets. x plus two, times x plus three. Check by expanding, as we did before. It works.", g('x² + 5x + 6 = (x + 2)(x + 3)'))
    ]),
    SC('Another one', 'Example 4: x² + 7x + 12', [
      S("The last number is twelve. Pairs that multiply to twelve. One and twelve add to thirteen. Two and six add to eight. Three and four add to seven. That is the middle number. So three and four.", V.tbl([['1 × 12', '13'], ['2 × 6', '8'], ['3 × 4', '7 ✓']], ['Multiply to 12', 'Add'])),
      S("The brackets are x plus three, and x plus four.", g('(x + 3)(x + 4)'))
    ]),
    SC('Negative middle', 'Example 5: x² − 7x + 10', [
      S("The last number is positive ten, but the middle is negative seven. When the last number is positive and the middle is negative, both numbers are negative. Pairs: minus one and minus ten add to minus eleven. Minus two and minus five add to minus seven. That is the one.", V.tbl([['−1, −10', '−11'], ['−2, −5', '−7 ✓']], ['Multiply to 10', 'Add'])),
      S("So x minus two, times x minus five. Check. Minus two times minus five is plus ten. Minus two x minus five x is minus seven x. Correct.", g('(x − 2)(x − 5)'))
    ]),
    SC('Negative last number', 'Example 6: x² + 2x − 15', [
      S("Now the last number is negative fifteen. A negative product means one number is positive and one is negative. Pairs that multiply to fifteen in size. One and fifteen. Three and five. We need them to add to plus two. Try minus three and plus five. They multiply to minus fifteen, and add to plus two.", V.tbl([['−1, 15', '14'], ['1, −15', '−14'], ['−3, 5', '2 ✓'], ['3, −5', '−2']], ['Multiply to −15', 'Add'])),
      S("So x minus three, times x plus five.", g('(x − 3)(x + 5)')),
      S("A tip. When the last number is negative, the bigger of the two numbers takes the sign of the middle number.", V.rule('Last number negative: one + and one −.'))
    ]),
    SC('Difference of squares', 'Example 7: x² − 9', [
      S("There is no x term here. Think of it as x squared plus zero x minus nine. We need two numbers that multiply to minus nine and add to zero. Three and minus three. So x minus three, times x plus three.", E('x² − 9') + g('= (x − 3)(x + 3)'))
    ]),
    SC('Solving a quadratic', 'Example 8: x² + 5x + 6 = 0', [
      S("Why do we factorise? To solve equations. Take x squared plus five x plus six equals zero. Factorise. x plus two, times x plus three, equals zero.", E('(x + 2)(x + 3) = 0')),
      S("Here is the key idea. If two things multiply to give zero, one of them must be zero. So either x plus two is zero, or x plus three is zero. That gives x equals minus two, or x equals minus three.", E('x + 2 = 0 → x = −2') + E('x + 3 = 0 → x = −3'))
    ]),
    SC('Check the answers', 'Example 9: put them back', [
      S("Check x equals minus two. Four, minus ten, plus six. That is zero. Check x equals minus three. Nine, minus fifteen, plus six. Zero as well. Both work.", E('(−2)² + 5(−2) + 6 = 0 ✓') + E('(−3)² + 5(−3) + 6 = 0 ✓'))
    ]),
    SC('Equations with brackets', 'Example 10: 4(x − 2) = 3(x + 1)', [
      S("Now equations with brackets, which are not quadratics. Expand both sides first. Four x minus eight, equals three x plus three.", E('4x − 8 = 3x + 3')),
      S("Take three x from both sides. x minus eight equals three. Add eight. x equals eleven. Check. Four times nine is thirty-six. Three times twelve is thirty-six. Equal.", E('x − 8 = 3') + g('x = 11'))
    ]),
    SC('Watch out!', 'Three common mistakes', [
      S("Mistake one: not taking out the highest common factor. Six x plus nine is three bracket two x plus three, not one bracket six x plus nine.", V.rule('Take out the highest factor.')),
      S("Mistake two: finding two numbers that add to the right total but do not multiply to the last number. You need both.", r('2 + 3 = 5, but 2 × 3 = 6 needed too') + V.rule('Both tests: multiply and add.')),
      S("Mistake three: forgetting that a quadratic equation usually has two answers, and forgetting to set it equal to zero first.", V.rule('Equal to zero. Two answers.'))
    ]),
    SC('In real life', 'Areas', [
      S("A rectangular garden has area x squared plus five x plus six square metres. Factorising gives x plus two, times x plus three. So its sides are x plus two metres and x plus three metres. Factorising lets us find the dimensions from the area.", g('Sides: (x + 2) m and (x + 3) m'))
    ]),
    L.turn("Your turn! Number one. Factorise x squared plus seven x plus twelve. Look for two numbers that multiply to twelve and add to seven. Pause and try it.", E('x² + 7x + 12'), "Three and four multiply to twelve and add to seven. So x plus three, times x plus four.", g('(x + 3)(x + 4)')),
    L.turn("Your turn! Number two. Factorise x squared minus eight x plus fifteen. Both numbers are negative. Pause and try it.", E('x² − 8x + 15'), "Minus three and minus five multiply to fifteen and add to minus eight. So x minus three, times x minus five.", g('(x − 3)(x − 5)')),
    L.turn("Your turn! Number three. Solve x squared plus x minus six equals zero. Factorise first. Pause and try it.", E('x² + x − 6 = 0'), "Minus two and plus three multiply to minus six and add to one. So x minus two, times x plus three, equals zero. x is two or minus three.", g('x = 2 or x = −3')),
    L.turn("Your turn! Number four. Solve three bracket x plus four, equals two bracket x minus one, plus twenty. Pause and try it.", E('3(x + 4) = 2(x − 1) + 20'), "Three x plus twelve equals two x plus eighteen. So x is six.", g('x = 6')),
    L.rec('How do you use brackets and factorising to solve equations?', "To factorise, take out the highest common factor. For a quadratic x squared plus b x plus c, find two numbers that multiply to c and add to b, and put them in two brackets. Check by expanding. To solve a quadratic, make it equal zero, factorise, and set each bracket equal to zero. For equations with brackets, expand first, then solve.", ['Take out the HCF', 'Quadratic: × to c, + to b', 'Check by expanding', 'Each bracket = 0'])
  ]);

  N('How do you expand brackets, including negatives?', 'how to multiply every term inside a bracket and handle minus signs.', [
    SC('Brackets', 'Start with the basics', [
      S("A bracket groups terms together. The number outside tells us to multiply everything inside. Three bracket x plus four means three times x, and three times four. We say we expand the bracket.", E('3(x + 4)', 'b')),
      S("The rule is simple. Multiply the outside by every term inside, one at a time.", V.rule('Outside × every term inside.'))
    ]),
    SC('Positive', 'Example 1: 3(x + 4)', [
      S("Three times x is three x. Three times four is twelve. So three bracket x plus four equals three x plus twelve.", E('3(x + 4)') + g('= 3x + 12'))
    ]),
    SC('With a letter', 'Example 2: 2x(x + 5)', [
      S("Two x times x is two x squared. Two x times five is ten x. So the answer is two x squared plus ten x.", E('2x(x + 5)') + g('= 2x² + 10x'))
    ]),
    SC('Subtraction', 'Example 3: 4(x − 3)', [
      S("Four times x is four x. Four times minus three is minus twelve. The minus sign stays with the three.", E('4(x − 3)') + g('= 4x − 12'))
    ]),
    SC('A negative outside', 'Example 4: −2(x + 6)', [
      S("Now the number outside is negative. Minus two times x is minus two x. Minus two times plus six is minus twelve. Remember, a negative times a positive is negative.", E('−2(x + 6)') + g('= −2x − 12'))
    ]),
    SC('Negative times negative', 'Example 5: −3(x − 5)', [
      S("Minus three times x is minus three x. Minus three times minus five is plus fifteen, because two negatives make a positive.", E('−3(x − 5)') + g('= −3x + 15')),
      S("This is the step where most mistakes happen. Take your time with the signs.", V.rule('− × − = +'))
    ]),
    SC('Expand and simplify', 'Example 6: collecting terms', [
      S("Expand and simplify two bracket x plus three, plus four bracket x minus one. First expand. Two x plus six, plus four x minus four. Now collect like terms. Six x plus two.", E('2(x + 3) + 4(x − 1)') + E('= 2x + 6 + 4x − 4') + g('= 6x + 2'))
    ]),
    SC('A minus in front', 'Example 7: subtracting a bracket', [
      S("Simplify five x plus six, minus bracket two x plus one. The minus in front multiplies the whole bracket by minus one. So minus two x and minus one. Five x minus two x is three x. Six minus one is five.", E('5x + 6 − (2x + 1)') + E('= 5x + 6 − 2x − 1') + g('= 3x + 5'))
    ]),
    SC('Why minus times minus is plus', 'A pattern to trust', [
      S("Many students ask why a negative times a negative is positive. Here is a pattern that shows it. Look at minus three times three, minus three times two, minus three times one. Each answer goes up by three as the number goes down by one.", V.tbl([['−3 × 3', '−9'], ['−3 × 2', '−6'], ['−3 × 1', '−3'], ['−3 × 0', '0']], ['Sum', 'Answer'])),
      S("Carry on the pattern. Minus three times minus one must be three, to keep going up by three. Minus three times minus two is six. So a negative times a negative is positive.", E('−3 × −1 = +3') + E('−3 × −2 = +6', 'g'))
    ]),
    SC('Two bracket terms', 'Example 8: 3(2x − 1) − 2(x − 4)', [
      S("Take it very slowly. Step one. Expand the first bracket. Three times two x is six x. Three times minus one is minus three. So six x minus three.", E('3(2x − 1) = 6x − 3')),
      S("Step two. Expand the second bracket, with its minus two in front. Minus two times x is minus two x. Minus two times minus four is plus eight. So minus two x plus eight.", E('−2(x − 4) = −2x + 8')),
      S("Step three. Put them together. Six x minus three, minus two x, plus eight. Step four. Collect the x terms. Six x minus two x is four x. Collect the numbers. Minus three plus eight is five.", E('6x − 3 − 2x + 8') + g('= 4x + 5')),
      S("Step five. Check with a number. Let x be two. The original is three times three, minus two times minus two. Nine plus four is thirteen. The answer four times two plus five is thirteen. They agree.", E('x = 2: 13 = 13 ✓'))
    ]),
    SC('Letters outside', 'Example 9: −x(3 − x)', [
      S("The outside can be a letter too. Minus x times three is minus three x. Minus x times minus x is plus x squared, because a negative times a negative is positive. So the answer is minus three x plus x squared. We usually write the x squared first.", E('−x(3 − x)') + g('= x² − 3x'))
    ]),
    SC('Watch out!', 'Three common mistakes', [
      S("Mistake one: multiplying only the first term. Three bracket x plus four is not three x plus four.", r('3x + 4  ✗') + g('3x + 12  ✓')),
      S("Mistake two: getting signs wrong with a negative outside.", r('−2(x + 6) = −2x + 12  ✗') + g('= −2x − 12  ✓')),
      S("Mistake three: a minus in front of a bracket only changing the first sign.", V.rule('Change every sign.'))
    ]),
    SC('In real life', 'Shopping', [
      S("Three friends each buy a ticket costing x pounds and a drink costing four pounds. The total is three bracket x plus four. Expanding gives three x plus twelve, the tickets and all the drinks.", g('3(x + 4) = 3x + 12'))
    ]),
    L.turn("Your turn! Number one. Expand five bracket x plus two. Pause and try it.", E('5(x + 2)'), "Five x plus ten.", g('5x + 10')),
    L.turn("Your turn! Number two. Expand minus four bracket x minus three. Pause and try it.", E('−4(x − 3)'), "Minus four x, plus twelve.", g('−4x + 12')),
    L.turn("Your turn! Number three. Expand and simplify three bracket x plus one, minus bracket x plus five. Pause and try it.", E('3(x + 1) − (x + 5)'), "Three x plus three, minus x minus five. Two x minus two.", g('2x − 2')),
    L.rec('How do you expand brackets, including negatives?', "Multiply the number outside by every term inside the bracket. Take care with signs. A negative times a negative is positive. A minus in front of a bracket changes every sign inside. After expanding, collect like terms.", ['Multiply every term', 'Watch the signs', '− × − = +', 'Collect like terms'])
  ]);

  N('How do you expand two brackets?', 'how to multiply two brackets, using FOIL or a grid.', [
    SC('Two brackets', 'Start with the basics', [
      S("Now we multiply two brackets together. For example, x plus two, times x plus three. Every term in the first bracket must multiply every term in the second.", E('(x + 2)(x + 3)', 'b')),
      S("There are four multiplications. A handy memory aid is FOIL. First, Outside, Inside, Last.", V.list(['First × First', 'Outside × Outside', 'Inside × Inside', 'Last × Last']))
    ]),
    SC('FOIL', 'Example 1: (x + 2)(x + 3)', [
      S("First, x times x is x squared. Outside, x times three is three x. Inside, two times x is two x. Last, two times three is six.", E('x² + 3x + 2x + 6')),
      S("Collect the middle terms. Three x plus two x is five x. The answer is x squared plus five x plus six.", g('x² + 5x + 6'))
    ]),
    SC('A grid', 'Example 2: the same in a grid', [
      S("A grid does the same job. Write one bracket across the top and the other down the side. Multiply each pair. Then add up everything inside.", V.tbl([['x', 'x²', '3x'], ['2', '2x', '6']], ['×', 'x', '3'])),
      S("Same answer. Use whichever you prefer, but be consistent.", g('x² + 5x + 6'))
    ]),
    SC('With a minus', 'Example 3: (x − 4)(x + 5)', [
      S("First, x squared. Outside, five x. Inside, minus four x. Last, minus twenty. Five x minus four x is x. So x squared plus x minus twenty.", E('x² + 5x − 4x − 20') + g('= x² + x − 20'))
    ]),
    SC('Two minuses', 'Example 4: (x − 3)(x − 2)', [
      S("First, x squared. Outside, minus two x. Inside, minus three x. Last, minus three times minus two, which is plus six. Collect. Minus five x. So x squared minus five x plus six.", E('x² − 2x − 3x + 6') + g('= x² − 5x + 6'))
    ]),
    SC('Squaring a bracket', 'Example 5: (x + 4)²', [
      S("A squared bracket means the bracket times itself. Write it out. x plus four, times x plus four. First, x squared. Outside and inside, four x each, eight x. Last, sixteen. So x squared plus eight x plus sixteen.", E('(x + 4)(x + 4)') + g('= x² + 8x + 16')),
      S("Notice the middle is eight x, not zero. It is not just x squared plus sixteen.", r('x² + 16  ✗'))
    ]),
    SC('With a number in front', 'Example 6: (2x + 1)(x + 3)', [
      S("First, two x squared. Outside, six x. Inside, one x. Last, three. Seven x in the middle. So two x squared plus seven x plus three.", E('2x² + 6x + x + 3') + g('= 2x² + 7x + 3'))
    ]),
    SC('A picture of why', 'The area model', [
      S("Why do we need four multiplications? Picture a rectangle with sides x plus two, and x plus three. Cut it into four pieces. One big square of x by x, which is x squared. Two strips, x by three, and x by two. And one small rectangle, two by three, which is six.", V.tbl([['x²', '3x'], ['2x', '6']], ['', 'x', '3'])),
      S("Add the areas of all four pieces. x squared, plus three x, plus two x, plus six. That is x squared plus five x plus six. So each piece is one of the four products. We never miss one when we use the grid.", V.rule('Four pieces, four products.'))
    ]),
    SC('Perfect difference', 'Example 7: (x + 5)(x − 5)', [
      S("This is a special case. First, x squared. Outside, x times minus five is minus five x. Inside, five times x is plus five x. Last, five times minus five is minus twenty-five. The middle terms cancel. We are left with x squared minus twenty-five.", E('x² − 5x + 5x − 25') + g('= x² − 25')),
      S("So a sum times a difference gives a difference of two squares. Remember this. We will use it for factorising.", V.rule('(x + a)(x − a) = x² − a²'))
    ]),
    SC('A number in front', 'Example 8: (3x − 2)(x + 4)', [
      S("Step one, First. Three x times x is three x squared. Step two, Outside. Three x times four is twelve x. Step three, Inside. Minus two times x is minus two x. Step four, Last. Minus two times four is minus eight.", E('3x² + 12x − 2x − 8')),
      S("Step five. Collect the middle terms. Twelve x minus two x is ten x. The answer is three x squared plus ten x minus eight.", g('= 3x² + 10x − 8'))
    ]),
    SC('Watch out!', 'Three common mistakes', [
      S("Mistake one: squaring each term. x plus four squared is not x squared plus sixteen.", r('(x + 4)² = x² + 16  ✗') + g('= x² + 8x + 16  ✓')),
      S("Mistake two: forgetting one of the four products.", V.rule('Four products, always.')),
      S("Mistake three: sign errors, especially minus times minus.", V.rule('Check each sign.'))
    ]),
    SC('In real life', 'Areas', [
      S("A rectangular garden is x plus two metres by x plus three metres. Its area is the product of the two. Expanding gives x squared plus five x plus six square metres.", g('Area = x² + 5x + 6'))
    ]),
    L.turn("Your turn! Number one. Expand x plus one, times x plus six. Pause and try it.", E('(x + 1)(x + 6)'), "x squared plus seven x plus six.", g('x² + 7x + 6')),
    L.turn("Your turn! Number two. Expand x minus five, times x plus two. Pause and try it.", E('(x − 5)(x + 2)'), "x squared minus three x minus ten.", g('x² − 3x − 10')),
    L.turn("Your turn! Number three. Expand x plus three, all squared. Pause and try it.", E('(x + 3)²'), "x squared plus six x plus nine.", g('x² + 6x + 9')),
    L.rec('How do you expand two brackets?', "Multiply every term in the first bracket by every term in the second. Use FOIL, or a grid. Then collect like terms. A squared bracket means the bracket times itself, so x plus four squared is x squared plus eight x plus sixteen.", ['Four products', 'FOIL or grid', 'Collect middle terms', '(x + a)² = x² + 2ax + a²'])
  ]);

  N('How do you factorise fully, including by taking out common factors?', 'how to take out the highest common factor from an expression.', [
    SC('Factorising', 'Start with the basics', [
      S("Factorising is the reverse of expanding. Expanding removes brackets. Factorising puts them back. We look for something that all the terms share, and take it outside.", V.cols([V.card('Expand: remove brackets', 'b', true), V.card('Factorise: add brackets', 'g', true)], 2)),
      S("That shared thing is called a common factor.", V.rule('Find what all terms share.'))
    ]),
    SC('Numbers', 'Example 1: 6x + 12', [
      S("Six and twelve both divide by six. Take six outside. Six x divided by six is x. Twelve divided by six is two. So six bracket x plus two.", E('6x + 12') + g('= 6(x + 2)')),
      S("Check by expanding. Six x plus twelve. Correct.", V.rule('Check by expanding.'))
    ]),
    SC('Letters', 'Example 2: x² + 5x', [
      S("Both terms have an x. Take x outside. x squared divided by x is x. Five x divided by x is five. So x bracket x plus five.", E('x² + 5x') + g('= x(x + 5)'))
    ]),
    SC('Fully', 'Example 3: 6x² + 9x', [
      S("Factorise fully. Six and nine share three. The terms also share x. So the highest common factor is three x. Six x squared divided by three x is two x. Nine x divided by three x is three.", E('6x² + 9x') + g('= 3x(2x + 3)')),
      S("Fully means we must take out the highest common factor, not just part of it.", r('3(2x² + 3x)  ✗ not fully') + g('3x(2x + 3)  ✓'))
    ]),
    SC('Three terms', 'Example 4: 4x² − 8x + 12', [
      S("Four, eight and twelve share four. There is no x in twelve, so we cannot take out x. Take out four. x squared minus two x plus three.", E('4x² − 8x + 12') + g('= 4(x² − 2x + 3)'))
    ]),
    SC('Negative terms', 'Example 5: 10y − 15', [
      S("Ten and fifteen share five. Ten y divided by five is two y. Fifteen divided by five is three. So five bracket two y minus three.", E('10y − 15') + g('= 5(2y − 3)'))
    ]),
    SC('Difference of two squares', 'Example 6: x² − 25', [
      S("There is a special pattern. A square minus a square factorises into two brackets. x squared minus twenty-five is x squared minus five squared. So x minus five, times x plus five.", E('x² − 25') + g('= (x − 5)(x + 5)'))
    ]),
    SC('Finding the HCF', 'How to be sure you have the highest', [
      S("Let us do this carefully. To find the highest common factor of an expression, deal with the numbers first, then the letters. Take eight x squared plus twelve x. Step one, the numbers. Eight and twelve. The biggest number that divides both is four.", E('8x² + 12x') + E('HCF of 8 and 12 = 4')),
      S("Step two, the letters. x squared is x times x. Twelve x has one x. The most x's they share is one. So the letter part is x.", E('x² and x share x')),
      S("Step three. Put them together. The highest common factor is four x. Divide each term by four x. Eight x squared over four x is two x. Twelve x over four x is three.", E('8x² ÷ 4x = 2x') + E('12x ÷ 4x = 3')),
      S("The answer is four x, bracket two x plus three. Step four. Check by expanding. Four x times two x is eight x squared. Four x times three is twelve x. Correct.", g('4x(2x + 3)'))
    ]),
    SC('With a minus', 'Example 7: 15y² − 10y', [
      S("Fifteen and ten share five. y squared and y share y. The highest common factor is five y. Fifteen y squared over five y is three y. Minus ten y over five y is minus two. So five y, bracket three y minus two.", E('15y² − 10y') + g('= 5y(3y − 2)'))
    ]),
    SC('A square minus a square', 'Example 8: 4x² − 49', [
      S("There is no common factor except one. But look. Four x squared is two x, all squared. Forty-nine is seven squared. A square minus a square. It factorises into two x minus seven, times two x plus seven.", E('4x² − 49 = (2x)² − 7²') + g('= (2x − 7)(2x + 7)')),
      S("Check by expanding. Two x times two x is four x squared. The middle terms cancel. Minus seven times seven is minus forty-nine. Correct.", V.rule('a² − b² = (a − b)(a + b)'))
    ]),
    SC('Watch out!', 'Three common mistakes', [
      S("Mistake one: not taking out the highest common factor.", V.rule('Highest common factor.')),
      S("Mistake two: forgetting the one. Factorising x squared plus x gives x bracket x plus one.", r('x(x)  ✗') + g('x(x + 1)  ✓')),
      S("Mistake three: not checking. Always expand your answer to see if you get back to the start.", V.rule('Expand to check.'))
    ]),
    SC('In real life', 'Splitting a bill', [
      S("A bill is six x plus twelve pounds. Written as six bracket x plus two, it shows that six people each pay x plus two.", g('6(x + 2)'))
    ]),
    L.turn("Your turn! Number one. Factorise eight x plus twelve. Pause and try it.", E('8x + 12'), "Four bracket two x plus three.", g('4(2x + 3)')),
    L.turn("Your turn! Number two. Factorise x squared minus seven x. Pause and try it.", E('x² − 7x'), "x bracket x minus seven.", g('x(x − 7)')),
    L.turn("Your turn! Number three. Factorise fully ten x squared plus fifteen x. Pause and try it.", E('10x² + 15x'), "Five x bracket two x plus three.", g('5x(2x + 3)')),
    L.rec('How do you factorise fully?', "Factorising is the reverse of expanding. Find the highest common factor of all the terms, numbers and letters, and take it outside the bracket. Divide each term by it. Check by expanding. A square minus a square factorises into two brackets.", ['Find the HCF', 'Divide each term', 'Check by expanding', 'a² − b² = (a − b)(a + b)'])
  ]);

  N('How do you find the highest common factor and the lowest common multiple?', 'how to find HCF and LCM using prime factors.', [
    SC('Factors and multiples', 'Start with the basics', [
      S("A factor divides exactly into a number. The factors of twelve are one, two, three, four, six and twelve. A multiple is in the times table. Multiples of twelve are twelve, twenty-four, thirty-six, and so on.", V.cols([V.card('Factors: go into it', 'b', true), V.card('Multiples: times table', 'g', true)], 2))
    ]),
    SC('HCF', 'Example 1: the highest common factor of 12 and 18', [
      S("The highest common factor is the biggest number that divides into both. Factors of twelve: one, two, three, four, six, twelve. Factors of eighteen: one, two, three, six, nine, eighteen. The biggest in both lists is six.", E('HCF(12, 18) = 6', 'g'))
    ]),
    SC('LCM', 'Example 2: the lowest common multiple of 4 and 6', [
      S("The lowest common multiple is the smallest number in both times tables. Multiples of four: four, eight, twelve, sixteen. Multiples of six: six, twelve, eighteen. The first match is twelve.", E('LCM(4, 6) = 12', 'g'))
    ]),
    SC('Prime factors', 'Example 3: a better method', [
      S("For bigger numbers, use prime factors. Write each number as a product of primes. Twelve is two times two times three. Eighteen is two times three times three.", E('12 = 2 × 2 × 3') + E('18 = 2 × 3 × 3'))
    ]),
    SC('HCF from primes', 'Example 4: multiply the shared primes', [
      S("For the highest common factor, take the primes that are in both. Both have a two. Both have a three. Multiply. Two times three is six.", g('HCF = 2 × 3 = 6'))
    ]),
    SC('LCM from primes', 'Example 5: take the most of each', [
      S("For the lowest common multiple, take the most times each prime appears. Two appears twice in twelve. Three appears twice in eighteen. So two times two times three times three. Thirty-six.", g('LCM = 2 × 2 × 3 × 3 = 36'))
    ]),
    SC('Problems', 'Example 6: buses', [
      S("One bus comes every twelve minutes and another every eighteen. They leave together at nine o'clock. When do they next leave together? The lowest common multiple of twelve and eighteen is thirty-six. Thirty-six minutes later, at nine thirty-six.", g('9:36'))
    ]),
    SC('Sharing', 'Example 7: tiles', [
      S("A room is twelve metres by eighteen metres. What is the biggest square tile that fits exactly? That is the highest common factor. Six metres.", g('6 m'))
    ]),
    SC('Bigger numbers', 'Example 8: 60 and 84, by factor trees', [
      S("Let us use prime factors for bigger numbers, very carefully. Step one. Break down sixty. Sixty is two times thirty. Thirty is two times fifteen. Fifteen is three times five. So sixty is two times two times three times five.", E('60 = 2 × 2 × 3 × 5')),
      S("Step two. Break down eighty-four. Eighty-four is two times forty-two. Forty-two is two times twenty-one. Twenty-one is three times seven. So eighty-four is two times two times three times seven.", E('84 = 2 × 2 × 3 × 7')),
      S("Step three, the highest common factor. Which primes do they both have? Two, two and three. Multiply. Two times two times three is twelve.", g('HCF = 2 × 2 × 3 = 12')),
      S("Step four, the lowest common multiple. Take every prime, the most times it appears in either number. Two, two, three, five and seven. Multiply. Two times two is four. Times three is twelve. Times five is sixty. Times seven is four hundred and twenty.", g('LCM = 2 × 2 × 3 × 5 × 7 = 420')),
      S("A lovely check. The HCF times the LCM equals the product of the two numbers. Twelve times four hundred and twenty is five thousand and forty. Sixty times eighty-four is five thousand and forty. It matches.", E('12 × 420 = 60 × 84 = 5040 ✓'))
    ]),
    SC('Using it', 'Example 9: simplifying a fraction', [
      S("The HCF helps simplify fractions. Sixty over eighty-four. Divide the top and bottom by the HCF, twelve. Sixty over twelve is five. Eighty-four over twelve is seven. So sixty over eighty-four is five sevenths.", E('60/84 = 5/7', 'g'))
    ]),
    SC('Adding fractions', 'Example 10: the LCM as a common denominator', [
      S("The LCM gives the best common denominator. To add a sixth and a quarter, the lowest common multiple of six and four is twelve. A sixth is two twelfths. A quarter is three twelfths. Add. Five twelfths.", E('1/6 + 1/4 = 2/12 + 3/12') + g('= 5/12'))
    ]),
    SC('Watch out!', 'Three common mistakes', [
      S("Mistake one: mixing up HCF and LCM. HCF is never bigger than the smaller number. LCM is never smaller than the bigger number.", V.rule('HCF small. LCM big.')),
      S("Mistake two: just multiplying the two numbers. That gives a common multiple, but not always the lowest.", V.rule('Not always the lowest.')),
      S("Mistake three: missing a prime when using prime factors. Write them all out.", V.rule('List all the primes.'))
    ]),
    L.turn("Your turn! Number one. Find the HCF of eight and twelve. Pause and try it.", E('HCF(8, 12)'), "Four.", g('4')),
    L.turn("Your turn! Number two. Find the LCM of six and eight. Pause and try it.", E('LCM(6, 8)'), "Twenty-four.", g('24')),
    L.turn("Your turn! Number three. Two lights flash every ten seconds and every fifteen seconds. When do they flash together? Pause and try it.", E('LCM(10, 15)'), "Thirty seconds.", g('30 s')),
    L.rec('How do you find the HCF and LCM?', "The highest common factor is the biggest number that divides both. The lowest common multiple is the smallest number in both times tables. Write each number as a product of primes. For HCF, multiply the primes they share. For LCM, take the most of each prime.", ['HCF: shared primes', 'LCM: most of each prime', 'HCF ≤ smaller number', 'LCM ≥ bigger number'])
  ]);

  L.use(845, ['How do you generate a formula from a sequence?', 'How do you simplify algebraic terms?', 'How do you substitute numbers into an expression?', 'How do you expand brackets, including negatives?', 'How do you expand two brackets?', 'How do you factorise fully, including by taking out common factors?', 'Common factors and difference of two squares', 'Factorising quadratics', 'How do you find the highest common factor and the lowest common multiple?', 'How do you create and use algebraic formulae?', 'Brackets, factorising and equations']);
})();
