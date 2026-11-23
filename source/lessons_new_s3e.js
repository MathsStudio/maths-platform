(function () {
  var BT = window.BT; if (!BT || !BT.L || !BT.sv || !BT.lk) return;
  var L = BT.L, V = BT.sv, E = L.E, S = L.st, SC = L.SC,
    g = function (t) { return E(t, 'g'); }, r = function (t) { return E(t, 'r'); };
  function N(title, goal, scenes) { L.full(title, scenes); return L.ep(title, goal, []); }

  N('What are simultaneous equations and what does the solution mean?', 'what a pair of equations is, why we need both, and how to check an answer.', [
    SC('Two unknowns', 'Start with the basics', [
      S("Look at this equation. x plus y equals ten. There are many answers. x could be one and y nine. Or x could be five and y five. Or x could be seven and y three. Lots of pairs work.", E('x + y = 10', 'b') + V.tbl([['1', '9'], ['5', '5'], ['7', '3']], ['x', 'y'])),
      S("Now add a second clue. x minus y equals two. Which of those pairs also works for the second equation? One minus nine is minus eight, no. Five minus five is zero, no. Seven minus three is four, no. None of them. Let us keep looking.", E('x − y = 2'))
    ]),
    SC('Trial and improvement', 'Example 1: finding the pair that fits both', [
      S("Try x equals six and y equals four. Six plus four is ten, so the first equation works. Six minus four is two, so the second equation works too. The pair that fits both is x equals six, y equals four.", E('6 + 4 = 10 ✓') + E('6 − 4 = 2 ✓') + g('x = 6, y = 4'))
    ]),
    SC('Why simultaneous?', 'The meaning of the word', [
      S("The word simultaneous means at the same time. Both equations must be true at the same time, with the same values of x and y. The answer is the one pair that fits both.", V.rule('Both true at the same time.')),
      S("Usually, two equations with two unknowns give exactly one pair of answers.", V.note('Two equations, two unknowns'))
    ]),
    SC('The graph', 'Example 2: what the solution looks like', [
      S("Each equation is a straight line on a graph. Every point on a line is a pair that works for that equation. The point where the two lines cross is on both lines. So it is the pair that works for both. That crossing point is the solution.", V.rule('The lines cross at the solution.')),
      S("For our two equations, the lines cross at the point six, four.", g('Cross at (6, 4)'))
    ]),
    SC('Real life', 'Example 3: pens and pencils', [
      S("Sam buys some pens and some pencils. Ten items in total, so pens plus pencils is ten. He has two more pens than pencils, so pens minus pencils is two. It is exactly our pair of equations. Six pens and four pencils.", E('p + q = 10') + E('p − q = 2') + g('6 pens, 4 pencils'))
    ]),
    SC('Setting one up', 'Example 4: from a word problem', [
      S("A cinema sells adult tickets for eight pounds and child tickets for five pounds. Four people pay forty-one pounds in total. Let a be adults and c be children. Four people: a plus c equals four. Money: eight a plus five c equals forty-one.", E('a + c = 4') + E('8a + 5c = 41')),
      S("We will learn how to solve these properly in the next lessons. For now, test: three adults and one child. Twenty-four plus five is twenty-nine. Not forty-one. The method will find the right answer for us.", V.note('Methods coming next'))
    ]),
    SC('Checking', 'Example 5: always check both', [
      S("Is x equals three, y equals two a solution of x plus y equals five, and two x minus y equals three? First equation: three plus two is five. Yes. Second: six minus two is four, not three. No. So it is not a solution. It must satisfy both.", E('3 + 2 = 5 ✓') + E('2(3) − 2 = 4 ≠ 3 ✗') + r('Not a solution'))
    ]),
    SC('Listing pairs', 'Example 6: a careful search', [
      S("Let us find a solution without any fancy method, just by listing. Solve x plus y equals seven, and x minus y equals one. Step one. List every pair of whole numbers that add to seven.", E('x + y = 7')),
      S("One and six. Two and five. Three and four. Four and three. Five and two. Six and one.", V.tbl([['1', '6'], ['2', '5'], ['3', '4'], ['4', '3'], ['5', '2'], ['6', '1']], ['x', 'y'])),
      S("Step two. For each pair, work out x minus y, and see if it equals one. One minus six is minus five. Two minus five is minus three. Three minus four is minus one. Four minus three is one. That is the one we want.", E('4 − 3 = 1 ✓') + g('x = 4, y = 3')),
      S("Step three. Check in both equations. Four plus three is seven. Four minus three is one. Both true. This method works, but it is slow for big numbers. That is why we will learn faster methods.", V.rule('Listing works, but is slow.'))
    ]),
    SC('Drawing both lines', 'Example 7: the graph, step by step', [
      S("Now let us see the graph for x plus y equals ten, and x minus y equals two. To draw a line, we only need a few points. For x plus y equals ten, choose x equals zero. Then y is ten. Choose x equals five. Then y is five. Choose x equals ten. Then y is zero.", V.tbl([['0', '10'], ['5', '5'], ['10', '0']], ['x', 'y'])),
      S("For x minus y equals two, choose y equals zero. Then x is two. Choose y equals two. Then x is four. Choose y equals four. Then x is six.", V.tbl([['2', '0'], ['4', '2'], ['6', '4']], ['x', 'y'])),
      S("Plot both sets of points and join each with a ruler. Look where the two lines cross. The crossing point is six, four. That is the same answer as before. It is on both lines, so it satisfies both equations.", g('Cross at (6, 4)')),
      S("Why only one crossing point? Two different straight lines can only cross once. So there is only one solution.", V.note('Two straight lines cross once'))
    ]),
    SC('What can go wrong', 'Example 8: no solution or too many', [
      S("Sometimes two lines never cross. They are parallel. For example, y equals two x plus one, and y equals two x plus five, have the same gradient. There is no pair that fits both. Such equations have no solution.", E('y = 2x + 1') + E('y = 2x + 5') + r('Parallel: no solution')),
      S("In this course, the questions will almost always have exactly one solution. But it is good to know why.", V.rule('Parallel lines never meet.'))
    ]),
    SC('Watch out!', 'Three common mistakes', [
      S("Mistake one: checking only one equation. A pair must fit both.", V.rule('Check both.')),
      S("Mistake two: giving only x. A solution has two values, x and y.", V.rule('Give x and y.')),
      S("Mistake three: thinking the lines cross at the origin. They cross wherever the solution is.", V.rule('Crossing point = solution.'))
    ]),
    L.turn("Your turn! Number one. Is x equals four, y equals one a solution of x plus y equals five, and x minus y equals three? Pause and try it.", E('x + y = 5, x − y = 3'), "Four plus one is five. Four minus one is three. Yes, it is a solution.", g('Yes ✓')),
    L.turn("Your turn! Number two. Find the pair that fits x plus y equals eight, and x minus y equals two. Pause and try it.", E('x + y = 8, x − y = 2'), "Five and three. Five plus three is eight, five minus three is two.", g('x = 5, y = 3')),
    L.turn("Your turn! Number three. Where do the graphs of two equations meet, if the solution is x equals two, y equals seven? Pause and think.", E('?'), "At the point two, seven.", g('(2, 7)')),
    L.rec('What are simultaneous equations and what does the solution mean?', "Simultaneous equations are two equations with two unknowns that must both be true at the same time. The solution is the one pair of values that fits both. On a graph, it is where the two lines cross. Always check your answer in both equations.", ['Two equations, two unknowns', 'Both true together', 'Lines cross at the solution', 'Check both'])
  ]);

  N('How do you solve simultaneous equations by substitution?', 'how to replace one letter with an expression and solve step by step.', [
    SC('Substitution', 'Start with the basics', [
      S("Substitution means replacing. If we know that y equals two x plus one, then wherever we see y, we can write two x plus one instead. This turns two unknowns into one.", E('y = 2x + 1', 'b') + V.rule('Replace y with its expression.')),
      S("Here is the plan. One, get one letter on its own. Two, replace that letter in the other equation. Three, solve for the other letter. Four, put the answer back to find the first. Five, check.", V.list(['Letter on its own', 'Replace in other equation', 'Solve', 'Find the other letter', 'Check']))
    ]),
    SC('Example 1', 'y = 2x + 1 and 3x + y = 11', [
      S("The first equation already has y on its own. In the second equation, replace y with two x plus one. Three x plus bracket two x plus one, equals eleven.", E('3x + (2x + 1) = 11')),
      S("Now it is one equation with one letter. Five x plus one equals eleven. Subtract one. Five x equals ten. x equals two.", E('5x + 1 = 11') + g('x = 2')),
      S("Put x equals two back into y equals two x plus one. y is five.", E('y = 2(2) + 1') + g('y = 5'))
    ]),
    SC('Check', 'Is x = 2, y = 5 right?', [
      S("Check both equations. First: five equals two times two plus one, which is five. Yes. Second: three times two plus five is eleven. Yes.", E('5 = 2(2) + 1 ✓') + E('3(2) + 5 = 11 ✓'))
    ]),
    SC('Example 2', 'x = y + 2 and x + 2y = 11', [
      S("Here x is on its own. Replace x in the second equation with y plus two. y plus two, plus two y, equals eleven. Collect. Three y plus two equals eleven. Three y equals nine. y equals three.", E('(y + 2) + 2y = 11') + E('3y = 9') + g('y = 3')),
      S("Then x is y plus two, which is five. Check. Five plus six is eleven.", g('x = 5, y = 3'))
    ]),
    SC('Rearranging first', 'Example 3: x + y = 7 and 2x − y = 5', [
      S("Neither letter is on its own. Rearrange the first equation. y equals seven minus x.", E('y = 7 − x')),
      S("Replace y in the second equation. Two x minus bracket seven minus x, equals five. Be careful with the minus in front of the bracket. It changes both signs. Two x minus seven plus x equals five.", E('2x − (7 − x) = 5') + E('2x − 7 + x = 5')),
      S("Three x minus seven equals five. Three x equals twelve. x equals four. Then y is seven minus four, three.", E('3x = 12') + g('x = 4, y = 3'))
    ]),
    SC('Check', 'Example 4: check Example 3', [
      S("First equation: four plus three is seven. Yes. Second: eight minus three is five. Yes.", E('4 + 3 = 7 ✓') + E('8 − 3 = 5 ✓'))
    ]),
    SC('A real problem', 'Example 5: tickets', [
      S("Adult tickets cost eight pounds and child tickets cost five pounds. Four people pay twenty-six pounds in total. How many adults and how many children? Let a be the number of adults and c the number of children. Four people means a plus c equals four. The money gives eight a plus five c equals twenty-six.", E('a + c = 4') + E('8a + 5c = 26')),
      S("Step one. Get a on its own from the first equation. Subtract c from both sides. a equals four minus c.", E('a = 4 − c')),
      S("Step two. Replace a in the second equation, using a bracket. Eight bracket four minus c, plus five c, equals twenty-six.", E('8(4 − c) + 5c = 26')),
      S("Step three. Expand the bracket. Eight times four is thirty-two. Eight times minus c is minus eight c. So thirty-two minus eight c plus five c equals twenty-six. Collect the c terms. Minus eight c plus five c is minus three c.", E('32 − 8c + 5c = 26') + E('32 − 3c = 26')),
      S("Step four. Subtract thirty-two from both sides. Minus three c equals minus six. Divide by minus three. c equals two.", E('−3c = −6') + g('c = 2')),
      S("Step five. Find a. a equals four minus two, which is two. Two adults and two children. Check the money. Two times eight is sixteen. Two times five is ten. Sixteen plus ten is twenty-six. Correct.", g('2 adults, 2 children') + E('16 + 10 = 26 ✓')),
      S("Always ask if the answer makes sense. Two adults and two children is a sensible answer. A negative number of people would tell us we had made a mistake.", V.rule('Does the answer make sense?'))
    ]),
    SC('A number in front', 'Example 6: y = 3x and x + y = 12', [
      S("Let us do another one, very slowly. y equals three x, and x plus y equals twelve. Step one. Is a letter on its own? Yes. y equals three x.", E('y = 3x') + E('x + y = 12')),
      S("Step two. Replace y in the second equation. Wherever you see y, write three x. x plus three x equals twelve. We use a bracket if there is more than one term, but here three x is one term.", E('x + 3x = 12')),
      S("Step three. Collect the x terms. x is one x. One x plus three x is four x. Four x equals twelve. Divide both sides by four. x equals three.", E('4x = 12') + g('x = 3')),
      S("Step four. Find y. y equals three x. Three times three is nine. y equals nine.", E('y = 3 × 3') + g('y = 9')),
      S("Step five. Check in the equation we did not use to find y. x plus y is three plus nine, which is twelve. Correct.", E('3 + 9 = 12 ✓'))
    ]),
    SC('A number multiplying the bracket', 'Example 7: 2x + y = 9 and 3x − 2y = 10', [
      S("This one needs more care. Step one. Get y on its own from the first equation. Subtract two x from both sides. y equals nine minus two x.", E('2x + y = 9') + g('y = 9 − 2x')),
      S("Step two. Replace y in the second equation. Three x minus two, bracket nine minus two x, equals ten. The bracket is important, because the whole of nine minus two x is being multiplied by minus two.", E('3x − 2(9 − 2x) = 10')),
      S("Step three. Expand the bracket. Minus two times nine is minus eighteen. Minus two times minus two x is plus four x. So three x minus eighteen plus four x equals ten.", E('3x − 18 + 4x = 10')),
      S("Step four. Collect the x terms. Three x plus four x is seven x. Seven x minus eighteen equals ten. Add eighteen to both sides. Seven x equals twenty-eight. Divide by seven. x equals four.", E('7x − 18 = 10') + E('7x = 28') + g('x = 4')),
      S("Step five. Find y. y equals nine minus two times four, which is nine minus eight. y equals one.", E('y = 9 − 8') + g('y = 1')),
      S("Step six. Check both. First equation: eight plus one is nine. Yes. Second equation: twelve minus two is ten. Yes. So x is four, and y is one.", E('2(4) + 1 = 9 ✓') + E('3(4) − 2(1) = 10 ✓'))
    ]),
    SC('Choosing the easiest letter', 'Which letter should I get on its own?', [
      S("A helpful tip. Choose the letter that has no number in front of it, or just a one. In x plus three y equals seven, x has just a one in front. So write x equals seven minus three y. That avoids fractions.", E('x + 3y = 7 → x = 7 − 3y', 'g')),
      S("If every letter has a number, you can still do it, but fractions appear. In that case, the elimination method, which comes next, is usually easier.", V.note('Next: elimination'))
    ]),
    SC('Watch out!', 'Three common mistakes', [
      S("Mistake one: forgetting brackets when substituting an expression. Replace y with a bracket.", r('2x − 7 − x  ✗') + g('2x − (7 − x)  ✓')),
      S("Mistake two: finding x and stopping. You must find y too.", V.rule('Find both letters.')),
      S("Mistake three: substituting back into the same equation you rearranged from. That is fine, but check both original equations at the end.", V.rule('Check both.'))
    ]),
    SC('In real life', 'Comparing plans', [
      S("Two phone plans can be written as two equations. Substituting one into the other finds the number of minutes where they cost the same.", V.note('Where do the costs match?'))
    ]),
    L.turn("Your turn! Number one. Solve y equals x plus three, and x plus y equals nine. Replace y first. Pause and try it.", E('y = x + 3, x + y = 9'), "x plus x plus three is nine. Two x is six. x is three, and y is six.", g('x = 3, y = 6')),
    L.turn("Your turn! Number two. Solve x equals two y, and x plus y equals twelve. Pause and try it.", E('x = 2y, x + y = 12'), "Two y plus y is twelve. Three y is twelve. y is four, and x is eight.", g('x = 8, y = 4')),
    L.turn("Your turn! Number three. Solve y equals three x minus one, and y equals x plus five. Pause and try it.", E('y = 3x − 1, y = x + 5'), "Three x minus one equals x plus five. Two x is six. x is three, and y is eight.", g('x = 3, y = 8')),
    L.rec('How do you solve simultaneous equations by substitution?', "Get one letter on its own. Replace it in the other equation, using brackets. Solve for the remaining letter, then substitute back to find the first. Check in both equations, and ask whether the answer makes sense.", ['Letter on its own', 'Replace using brackets', 'Solve, then substitute back', 'Check both'])
  ]);

  L.use(848, ['What are simultaneous equations and what does the solution mean?', 'Solving by graph', 'How do you solve simultaneous equations by substitution?', 'Solving by elimination', 'Simultaneous equations']);
})();
