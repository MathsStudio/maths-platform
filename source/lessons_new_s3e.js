(function () {
  var BT = window.BT; if (!BT || !BT.L || !BT.sv || !BT.lk) return;
  var L = BT.L, V = BT.sv, E = L.E, S = L.st, SC = L.SC,
    g = function (t) { return E(t, 'g'); }, r = function (t) { return E(t, 'r'); };
  function N(title, goal, scenes) { L.full(title, scenes); return L.ep(title, goal, []); }

  N('What are simultaneous equations and what does the solution mean?', 'what a pair of equations is, why we need both, and how to check an answer.', [
    SC('Two unknowns', 'Start with the basics', [
      S("Look at this equation. x plus y equals 10. There are many answers. x could be 1 and y 9. Or x could be 5 and y 5. Or x could be 7 and y 3. Lots of pairs work.", E('x + y = 10', 'b') + V.tbl([['1', '9'], ['5', '5'], ['7', '3']], ['x', 'y'])),
      S("Now add a second clue. x minus y equals 2. Which of those pairs also works for the second equation? 1 minus 9 is minus 8, no. 5 minus 5 is 0, no. 7 minus 3 is 4, no. None of them. Let us keep looking.", E('x − y = 2'))
    ]),
    SC('Trial and improvement', 'Example 1: finding the pair that fits both', [
      S("Try x equals 6 and y equals 4. 6 plus 4 is 10, so the first equation works. 6 minus 4 is 2, so the second equation works too. The pair that fits both is x equals 6, y equals 4.", E('6 + 4 = 10 ✓') + E('6 − 4 = 2 ✓') + g('x = 6, y = 4'))
    ]),
    SC('Why simultaneous?', 'The meaning of the word', [
      S("The word simultaneous means at the same time. Both equations must be true at the same time, with the same values of x and y. The answer is the one pair that fits both.", V.rule('Both true at the same time.')),
      S("Usually, 2 equations with 2 unknowns give exactly 1 pair of answers.", V.note('2 equations, 2 unknowns'))
    ]),
    SC('The graph', 'Example 2: what the solution looks like', [
      S("Each equation is a straight line on a graph. Every point on a line is a pair that works for that equation. The point where the 2 lines cross is on both lines. So it is the pair that works for both. That crossing point is the solution.", V.rule('The lines cross at the solution.')),
      S("For our 2 equations, the lines cross at the point 6, 4.", g('Cross at (6, 4)'))
    ]),
    SC('Real life', 'Example 3: pens and pencils', [
      S("Sam buys some pens and some pencils. 10 items in total, so pens plus pencils is 10. He has 2 more pens than pencils, so pens minus pencils is 2. It is exactly our pair of equations. 6 pens and 4 pencils.", E('p + q = 10') + E('p − q = 2') + g('6 pens, 4 pencils'))
    ]),
    SC('Setting one up', 'Example 4: from a word problem', [
      S("A cinema sells adult tickets for £8 and child tickets for £5. 4 people pay £41 in total. Let a be adults and c be children. 4 people: a plus c equals 4. Money: 8 a plus 5 c equals 41.", E('a + c = 4') + E('8a + 5c = 41')),
      S("We will learn how to solve these properly in the next lessons. For now, test: 3 adults and 1 child. 24 plus 5 is 29. Not 41. The method will find the right answer for us.", V.note('Methods coming next'))
    ]),
    SC('Checking', 'Example 5: always check both', [
      S("Is x equals 3, y equals 2 a solution of x plus y equals 5, and 2 x minus y equals 3? First equation: 3 plus 2 is 5. Yes. Second: 6 minus 2 is 4, not 3. No. So it is not a solution. It must satisfy both.", E('3 + 2 = 5 ✓') + E('2(3) − 2 = 4 ≠ 3 ✗') + r('Not a solution'))
    ]),
    SC('Listing pairs', 'Example 6: a careful search', [
      S("Let us find a solution without any fancy method, just by listing. Solve x plus y equals 7, and x minus y equals 1. Step one. List every pair of whole numbers that add to 7.", E('x + y = 7')),
      S("1 and 6. 2 and 5. 3 and 4. 4 and 3. 5 and 2. 6 and 1.", V.tbl([['1', '6'], ['2', '5'], ['3', '4'], ['4', '3'], ['5', '2'], ['6', '1']], ['x', 'y'])),
      S("Step two. For each pair, work out x minus y, and see if it equals 1. 1 minus 6 is minus 5. 2 minus 5 is minus 3. 3 minus 4 is minus 1. 4 minus 3 is 1. That is the one we want.", E('4 − 3 = 1 ✓') + g('x = 4, y = 3')),
      S("Step three. Check in both equations. 4 plus 3 is 7. 4 minus 3 is 1. Both true. This method works, but it is slow for big numbers. That is why we will learn faster methods.", V.rule('Listing works, but is slow.'))
    ]),
    SC('Drawing both lines', 'Example 7: the graph, step by step', [
      S("Now let us see the graph for x plus y equals 10, and x minus y equals 2. To draw a line, we only need a few points. For x plus y equals 10, choose x equals 0. Then y is 10. Choose x equals 5. Then y is 5. Choose x equals 10. Then y is 0.", V.tbl([['0', '10'], ['5', '5'], ['10', '0']], ['x', 'y'])),
      S("For x minus y equals 2, choose y equals 0. Then x is 2. Choose y equals 2. Then x is 4. Choose y equals 4. Then x is 6.", V.tbl([['2', '0'], ['4', '2'], ['6', '4']], ['x', 'y'])),
      S("Plot both sets of points and join each with a ruler. Look where the 2 lines cross. The crossing point is 6, 4. That is the same answer as before. It is on both lines, so it satisfies both equations.", g('Cross at (6, 4)')),
      S("Why only one crossing point? 2 different straight lines can only cross once. So there is only one solution.", V.note('Two straight lines cross once'))
    ]),
    SC('What can go wrong', 'Example 8: no solution or too many', [
      S("Sometimes 2 lines never cross. They are parallel. For example, y equals 2 x plus 1, and y equals 2 x plus 5, have the same gradient. There is no pair that fits both. Such equations have no solution.", E('y = 2x + 1') + E('y = 2x + 5') + r('Parallel: no solution')),
      S("In this course, the questions will almost always have exactly 1 solution. But it is good to know why.", V.rule('Parallel lines never meet.'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Checking only one equation. Is x equals 3, y equals 2 a solution of x plus y equals 5 and 2 x minus y equals 3? The first works. Wrong: so it is a solution. Check the second too. 6 minus 2 is 4, not 3. It fails, so it is not a solution.", r('3 + 2 = 5 ✓ so solution  ✗') + g('2(3) − 2 = 4 ≠ 3, not a solution  ✓')),
      S("Mistake two. Giving only x. Solve x plus y equals 10 and x minus y equals 2. Wrong: x equals 6. A solution has 2 values. y is 4.", r('x = 6  ✗  (incomplete)') + g('x = 6 and y = 4  ✓')),
      S("Mistake three. Treating 1 equation as if it gave the answer. x plus y equals 10 on its own has many pairs, like 5 and 5. Wrong: x equals 5 and y equals 5. That fails the second equation, 5 minus 5 is 0, not 2. The pair must fit both. 6 and 4.", r('x = 5, y = 5  ✗') + g('x = 6, y = 4 fits both  ✓'))
    ]),
    L.turn("Your turn! Number one. Is x equals 4, y equals 1 a solution of x plus y equals 5, and x minus y equals 3? Pause and try it.", E('x + y = 5, x − y = 3'), "4 plus 1 is 5. 4 minus 1 is 3. Yes, it is a solution.", g('Yes ✓')),
    L.turn("Your turn! Number two. Find the pair that fits x plus y equals 8, and x minus y equals 2. Pause and try it.", E('x + y = 8, x − y = 2'), "5 and 3. 5 plus 3 is 8, 5 minus 3 is 2.", g('x = 5, y = 3')),
    L.turn("Your turn! Number three. Where do the graphs of 2 equations meet, if the solution is x equals 2, y equals 7? Pause and think.", E('?'), "At the point 2, 7.", g('(2, 7)')),
    L.rec('What are simultaneous equations and what does the solution mean?', "Simultaneous equations are 2 equations with 2 unknowns that must both be true at the same time. The solution is the one pair of values that fits both. On a graph, it is where the 2 lines cross. Always check your answer in both equations.", ['2 equations, 2 unknowns', 'Both true together', 'Lines cross at the solution', 'Check both'])
  ]);

  N('How do you solve simultaneous equations by substitution?', 'how to replace 1 letter with an expression and solve step by step.', [
    SC('Substitution', 'Start with the basics', [
      S("Substitution means replacing. If we know that y equals 2 x plus 1, then wherever we see y, we can write 2 x plus 1 instead. This turns 2 unknowns into 1.", E('y = 2x + 1', 'b') + V.rule('Replace y with its expression.')),
      S("Here is the plan. 1, get 1 letter on its own. 2, replace that letter in the other equation. 3, solve for the other letter. 4, put the answer back to find the first. 5, check.", V.list(['Letter on its own', 'Replace in other equation', 'Solve', 'Find the other letter', 'Check']))
    ]),
    SC('Example 1', 'y = 2x + 1 and 3x + y = 11', [
      S("The first equation already has y on its own. In the second equation, replace y with 2 x plus 1. 3 x plus bracket 2 x plus 1, equals 11.", E('3x + (2x + 1) = 11')),
      S("Now it is 1 equation with 1 letter. 5 x plus 1 equals 11. Subtract 1. 5 x equals 10. x equals 2.", E('5x + 1 = 11') + g('x = 2')),
      S("Put x equals 2 back into y equals 2 x plus 1. y is 5.", E('y = 2(2) + 1') + g('y = 5'))
    ]),
    SC('Check', 'Is x = 2, y = 5 right?', [
      S("Check both equations. First: 5 equals 2 times 2 plus 1, which is 5. Yes. Second: 3 times 2 plus 5 is 11. Yes.", E('5 = 2(2) + 1 ✓') + E('3(2) + 5 = 11 ✓'))
    ]),
    SC('Example 2', 'x = y + 2 and x + 2y = 11', [
      S("Here x is on its own. Replace x in the second equation with y plus 2. y plus 2, plus 2 y, equals 11. Collect. 3 y plus 2 equals 11. 3 y equals 9. y equals 3.", E('(y + 2) + 2y = 11') + E('3y = 9') + g('y = 3')),
      S("Then x is y plus 2, which is 5. Check. 5 plus 6 is 11.", g('x = 5, y = 3'))
    ]),
    SC('Rearranging first', 'Example 3: x + y = 7 and 2x − y = 5', [
      S("Neither letter is on its own. Rearrange the first equation. y equals 7 minus x.", E('y = 7 − x')),
      S("Replace y in the second equation. 2 x minus bracket 7 minus x, equals 5. Be careful with the minus in front of the bracket. It changes both signs. 2 x minus 7 plus x equals 5.", E('2x − (7 − x) = 5') + E('2x − 7 + x = 5')),
      S("3 x minus 7 equals 5. 3 x equals 12. x equals 4. Then y is 7 minus 4, 3.", E('3x = 12') + g('x = 4, y = 3'))
    ]),
    SC('Check', 'Example 4: check Example 3', [
      S("First equation: 4 plus 3 is 7. Yes. Second: 8 minus 3 is 5. Yes.", E('4 + 3 = 7 ✓') + E('8 − 3 = 5 ✓'))
    ]),
    SC('A real problem', 'Example 5: tickets', [
      S("Adult tickets cost £8 and child tickets cost £5. 4 people pay £26 in total. How many adults and how many children? Let a be the number of adults and c the number of children. 4 people means a plus c equals 4. The money gives 8 a plus 5 c equals 26.", E('a + c = 4') + E('8a + 5c = 26')),
      S("Step one. Get a on its own from the first equation. Subtract c from both sides. a equals 4 minus c.", E('a = 4 − c')),
      S("Step two. Replace a in the second equation, using a bracket. 8 bracket 4 minus c, plus 5 c, equals 26.", E('8(4 − c) + 5c = 26')),
      S("Step three. Expand the bracket. 8 times 4 is 32. 8 times minus c is minus 8 c. So 32 minus 8 c plus 5 c equals 26. Collect the c terms. Minus 8 c plus 5 c is minus 3 c.", E('32 − 8c + 5c = 26') + E('32 − 3c = 26')),
      S("Step four. Subtract 32 from both sides. Minus 3 c equals minus 6. Divide by minus 3. c equals 2.", E('−3c = −6') + g('c = 2')),
      S("Step five. Find a. a equals 4 minus 2, which is 2. 2 adults and 2 children. Check the money. 2 times 8 is 16. 2 times 5 is 10. 16 plus 10 is 26. Correct.", g('2 adults, 2 children') + E('16 + 10 = 26 ✓')),
      S("Always ask if the answer makes sense. 2 adults and 2 children is a sensible answer. A negative number of people would tell us we had made a mistake.", V.rule('Does the answer make sense?'))
    ]),
    SC('A number in front', 'Example 6: y = 3x and x + y = 12', [
      S("Let us do another one, very slowly. y equals 3 x, and x plus y equals 12. Step one. Is a letter on its own? Yes. y equals 3 x.", E('y = 3x') + E('x + y = 12')),
      S("Step two. Replace y in the second equation. Wherever you see y, write 3 x. x plus 3 x equals 12. We use a bracket if there is more than 1 term, but here 3 x is 1 term.", E('x + 3x = 12')),
      S("Step three. Collect the x terms. x is 1 x. 1 x plus 3 x is 4 x. 4 x equals 12. Divide both sides by 4. x equals 3.", E('4x = 12') + g('x = 3')),
      S("Step four. Find y. y equals 3 x. 3 times 3 is 9. y equals 9.", E('y = 3 × 3') + g('y = 9')),
      S("Step five. Check in the equation we did not use to find y. x plus y is 3 plus 9, which is 12. Correct.", E('3 + 9 = 12 ✓'))
    ]),
    SC('A number multiplying the bracket', 'Example 7: 2x + y = 9 and 3x − 2y = 10', [
      S("This one needs more care. Step one. Get y on its own from the first equation. Subtract 2 x from both sides. y equals 9 minus 2 x.", E('2x + y = 9') + g('y = 9 − 2x')),
      S("Step two. Replace y in the second equation. 3 x minus 2, bracket 9 minus 2 x, equals 10. The bracket is important, because the whole of 9 minus 2 x is being multiplied by minus 2.", E('3x − 2(9 − 2x) = 10')),
      S("Step three. Expand the bracket. Minus 2 times 9 is minus 18. Minus 2 times minus 2 x is plus 4 x. So 3 x minus 18 plus 4 x equals 10.", E('3x − 18 + 4x = 10')),
      S("Step four. Collect the x terms. 3 x plus 4 x is 7 x. 7 x minus 18 equals 10. Add 18 to both sides. 7 x equals 28. Divide by 7. x equals 4.", E('7x − 18 = 10') + E('7x = 28') + g('x = 4')),
      S("Step five. Find y. y equals 9 minus 2 times 4, which is 9 minus 8. y equals 1.", E('y = 9 − 8') + g('y = 1')),
      S("Step six. Check both. First equation: 8 plus 1 is 9. Yes. Second equation: 12 minus 2 is 10. Yes. So x is 4, and y is 1.", E('2(4) + 1 = 9 ✓') + E('3(4) − 2(1) = 10 ✓'))
    ]),
    SC('Choosing the easiest letter', 'Which letter should I get on its own?', [
      S("A helpful tip. Choose the letter that has no number in front of it, or just a 1. In x plus 3 y equals 7, x has just a 1 in front. So write x equals 7 minus 3 y. That avoids fractions.", E('x + 3y = 7 → x = 7 − 3y', 'g')),
      S("If every letter has a number, you can still do it, but fractions appear. In that case, the elimination method, which comes next, is usually easier.", V.note('Next: elimination'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Forgetting the brackets. y equals 7 minus x goes into 2 x minus y equals 5. Wrong: 2 x minus 7 minus x. The minus sign applies to the whole of 7 minus x. 2 x minus bracket 7 minus x. That is 2 x minus 7 plus x.", r('2x − 7 − x = 5  ✗') + g('2x − (7 − x) = 2x − 7 + x = 5  ✓')),
      S("Mistake two. Stopping after finding x. 5 x equals 10 gives x equals 2. Wrong: the answer is x equals 2. We also need y. y equals 2 x plus 1, 5.", r('x = 2 only  ✗') + g('x = 2 and y = 5  ✓')),
      S("Mistake three. Not checking both equations. A student says x equals 4 and y equals 2 for 2 x plus y equals 9 and 3 x minus 2 y equals 10. Check the first. 8 plus 2 is 10, not 9. It fails. The correct answer is y equals 1. 8 plus 1 is 9. 12 minus 2 is 10.", r('2(4) + 2 = 10 ≠ 9  ✗') + g('(4, 1): 8 + 1 = 9 and 12 − 2 = 10  ✓'))
    ]),
    SC('In real life', 'Comparing plans', [
      S("2 phone plans can be written as 2 equations. Substituting 1 into the other finds the number of minutes where they cost the same.", V.note('Where do the costs match?'))
    ]),
    L.turn("Your turn! Number one. Solve y equals x plus 3, and x plus y equals 9. Replace y first. Pause and try it.", E('y = x + 3, x + y = 9'), "x plus x plus 3 is 9. 2 x is 6. x is 3, and y is 6.", g('x = 3, y = 6')),
    L.turn("Your turn! Number two. Solve x equals 2 y, and x plus y equals 12. Pause and try it.", E('x = 2y, x + y = 12'), "2 y plus y is 12. 3 y is 12. y is 4, and x is 8.", g('x = 8, y = 4')),
    L.turn("Your turn! Number three. Solve y equals 3 x minus 1, and y equals x plus 5. Pause and try it.", E('y = 3x − 1, y = x + 5'), "3 x minus 1 equals x plus 5. 2 x is 6. x is 3, and y is 8.", g('x = 3, y = 8')),
    L.rec('How do you solve simultaneous equations by substitution?', "Get 1 letter on its own. Replace it in the other equation, using brackets. Solve for the remaining letter, then substitute back to find the first. Check in both equations, and ask whether the answer makes sense.", ['Letter on its own', 'Replace using brackets', 'Solve, then substitute back', 'Check both'])
  ]);

  L.use(848, ['What are simultaneous equations and what does the solution mean?', 'Solving by graph', 'How do you solve simultaneous equations by substitution?', 'Solving by elimination', 'Simultaneous equations']);
})();
