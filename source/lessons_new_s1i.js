/* generated: S1 809 */
(function () {
  'use strict';
  var BT = window.BT; if (!BT || !BT.fxh) return;
  var H = BT.fxh, E = H.E, M = H.M, T = H.T, LS = H.LS, L = BT.L, F = BT.F;
  var h = function (x) { return 'h|' + x; };
  var tbl = function (rows) { return h('<table style="border-collapse:collapse;margin:4px auto;font-size:12px">' + rows.map(function (r, i) { return '<tr>' + r.map(function (c) { return '<' + (i === 0 ? 'th' : 'td') + ' style="border:1.5px solid currentColor;padding:2px 5px;text-align:center">' + c + '</' + (i === 0 ? 'th' : 'td') + '>'; }).join('') + '</tr>'; }).join('') + '</table>'); };
  LS("Number patterns", "how to spot the rule in a number pattern and continue it.", "Number patterns",
    E("Finding the rule", ["A number pattern, or sequence, is a list of numbers that follows a rule. Look at how each number changes to get the next one. Check the difference or the multiplier.", ["Add or subtract the same amount", "Multiply by the same amount"]], ["Test the rule on every pair of neighbours before you use it.", ["Check all terms"]]),
    [E("Adding", ["Continue the pattern 3, 7, 11, 15. The difference is 4 each time. The next 2 are 19 and 23.", ["+4", "g|19, 23"]]), E("Subtracting", ["Continue 50, 45, 40, 35. The difference is minus 5. Next: 30 and 25.", ["−5", "g|30, 25"]]), E("Multiplying", ["Continue 2, 6, 18, 54. Each term is 3 times the one before. Next: 162, 486.", ["× 3", "g|162, 486"]]), E("Square numbers", ["Continue 1, 4, 9, 16. These are the square numbers. The next are 25 and 36.", ["1², 2², 3², 4²", "g|25, 36"]])],
    [M("Only checking the first pair", "Mistake one: finding the rule from the first 2 numbers only. 2, 4, 8 looks like adding 2, but the next is 16, not 10.", "2, 4, 8, 10 ✗", "2, 4, 8, 16 (× 2) ✓"), M("Wrong direction", "Mistake two: adding when the numbers go down.", "50, 45, 40, 45 ✗", "50, 45, 40, 35 ✓")],
    ["Patterns appear in nature and in money: a savings plan adds £10 a week, giving 10, 20, 30, 40.", ["+10 each week"]],
    [T("Continue 5, 9, 13, 17, …", "The rule is add 4. 21, 25.", ["+4"], "21, 25"), T("Continue 100, 90, 80, …", "The rule is subtract 10. 70, 60.", ["−10"], "70, 60"), T("Continue 3, 6, 12, 24, …", "Each term doubles. 48, 96.", ["× 2"], "48, 96")],
    ["Find the rule from all the terms.", ["Add, subtract, multiply"]]);

  LS("Term-to-term and position-to-term rules", "how to describe a sequence by its term-to-term rule and find any term from its position.", "Term-to-term and position-to-term rules",
    E("Two kinds of rule", ["A term-to-term rule tells you how to get from one term to the next. A position-to-term rule tells you how to find a term from its position number, n.", ["Term-to-term: +3", "Position-to-term: 3n + 1"]], ["Position-to-term rules are quicker for finding terms far along, because you do not have to list them all.", ["50th term in 1 step"]]),
    [E("Term-to-term", ["The sequence 4, 7, 10, 13 has the term-to-term rule add 3. The next term is 16.", ["+3", "g|16"]]), E("Position-to-term", ["The rule is 3 n plus 1. Find the fifth term. Put n equals 5. 3 times 5 plus 1 is 16.", ["3 × 5 + 1", "g|16"]]), E("Check against the sequence", ["Does 3 n plus 1 give 4, 7, 10? n equals 1: 4. n equals 2: 7. n equals 3: 10. Yes.", ["4, 7, 10 ✓", "g|Matches"]]), E("Far term", ["The tenth term of 3 n plus 1 is 3 times 10 plus 1, 31. The fiftieth is 151.", ["3 × 10 + 1 = 31", "3 × 50 + 1", "g|151"]])],
    [M("Using n as a number to add", "Mistake one: reading 3 n as 3 plus n.", "3n = 3 + 5 = 8 ✗", "3n = 3 × 5 = 15 ✓"), M("Order", "Mistake two: adding before multiplying.", "3 × 5 + 1 = 3 × 6 ✗", "3 × 5 + 1 = 15 + 1 = 16 ✓")],
    ["A taxi charges a fixed fee of £1 and £3 per mile. A journey of n miles costs 3 n plus £1.", ["Cost = 3n + 1"]],
    [T("The rule is 2n + 5. Find the 6th term.", "2 times 6 plus 5. 17.", ["2 × 6 + 5"], "17"), T("Sequence 5, 8, 11, 14. Write the term-to-term rule.", "Add three.", ["+3"], "add 3"), T("The position-to-term rule is 4n − 3. Find the 10th term.", "4 times 10 minus 3. 37.", ["4 × 10 − 3"], "37")],
    ["Term-to-term: step. Position-to-term: n.", ["Substitute n carefully"]]);

  LS("Using letters for numbers", "how to use letters to stand for unknown numbers and write simple expressions.", "Using letters for numbers",
    E("Letters as numbers", ["In algebra, a letter stands for a number that we do not know yet, or one that can change. Writing 3 times x as 3x. A number next to a letter means multiply.", ["3x means 3 × x", "x + 5", "x − 2"]], ["Do not use the multiplication sign. Also, a divided by 2 is written a over 2.", ["a ÷ 2 = a/2"]]),
    [E("Write an expression", ["Write an expression for 5 more than n. n plus 5.", ["n + 5", "g|n + 5"]]), E("Write another", ["A pencil costs p pence. Write the cost of 4 pencils. 4 times p.", ["4 × p", "g|4p"]]), E("Using the expression", ["If p is 30, 4 pencils cost 4 times 30, 120p.", ["4p = 4 × 30", "g|120p"]]), E("Two letters", ["A pen costs x pence and a rubber costs y pence. Write the cost of two pens and a rubber. Two x plus y.", ["2 × x + y", "g|2x + y"]])],
    [M("Writing 4p as 4 + p", "Mistake one: adding instead of multiplying.", "4p = 4 + p ✗", "4p = 4 × p ✓"), M("Wrong order", "Mistake two: writing the wrong order for subtraction. 3 less than x is x minus 3.", "3 − x ✗", "x − 3 ✓")],
    ["Formulas for area, for example length times width, use letters.", ["A = l × w"]],
    [T("Write an expression for 7 less than x.", "x minus seven.", ["x − 7"], "x − 7"), T("A pizza costs £p. Write the cost of 3 pizzas.", "Three times p.", ["3 × p"], "3p"), T("If n = 6, find 5n − 2.", "5 times 6 minus 2. 28.", ["5 × 6 − 2"], "28")],
    ["Letter = a number. 3x = 3 × x.", ["Write, then substitute"]]);

  LS("Solving simple equations", "how to solve one-step equations by doing the opposite operation.", "Solving simple equations",
    E("Balance", ["An equation is like a balance. Whatever you do to one side, you must do to the other. To find x, do the inverse operation to both sides.", ["+ undoes −", "× undoes ÷"]], ["Check your answer by putting it back into the equation.", ["Substitute back"]]),
    [E("Add", ["Solve x plus 7 equals 20. Subtract 7 from both sides. x equals 13.", ["x + 7 = 20", "− 7", "g|x = 13"]]), E("Subtract", ["Solve x minus 4 equals 9. Add 4 to both sides. x equals 13.", ["x − 4 = 9", "+ 4", "g|x = 13"]]), E("Multiply", ["Solve 3 x equals 18. Divide both sides by 3. x equals 6.", ["3x = 18", "÷ 3", "g|x = 6"]]), E("Divide", ["Solve x over 5 equals 4. Multiply both sides by 5. x equals 20.", ["x/5 = 4", "× 5", "g|x = 20"]])],
    [M("Wrong operation", "Mistake one: doing the same operation instead of the opposite.", "x + 7 = 20, x = 27 ✗", "x = 20 − 7 = 13 ✓"), M("One side only", "Mistake two: doing it to one side only.", "3x = 18 → x = 18 ✗", "x = 18 ÷ 3 = 6 ✓")],
    ["Finding a missing price: if 3 notebooks cost £12, then 3 x equals 12 and each costs £4.", ["3x = 12", "x = 4"]],
    [T("Solve x + 9 = 15.", "Subtract nine. Six.", ["− 9"], "x = 6"), T("Solve 4x = 28.", "Divide by 4. 7.", ["÷ 4"], "x = 7"), T("Solve x/3 = 8.", "Multiply by 3. 24.", ["× 3"], "x = 24")],
    ["Do the opposite to both sides.", ["Check by substitution"]]);

  LS("Two-step equations", "how to solve equations that need two steps.", "Two-step equations",
    E("Two steps", ["A 2-step equation has 2 operations on x, such as 2 x plus 3 equals 11. First undo the adding or subtracting, then undo the multiplying or dividing.", ["2x + 3 = 11", "− 3 → 2x = 8", "÷ 2 → x = 4"]], ["Undo in the reverse order to BODMAS. Add and subtract first, then multiply and divide.", ["Reverse BODMAS"]]),
    [E("Add then multiply", ["Solve 3 x plus 2 equals 23. Subtract 2: 3 x equals 21. Divide by 3: x equals 7.", ["3x + 2 = 23", "3x = 21", "g|x = 7"]]), E("Subtract", ["Solve 5 x minus 4 equals 26. Add 4: 5 x equals 30. Divide: x equals 6.", ["5x − 4 = 26", "5x = 30", "g|x = 6"]]), E("With division", ["Solve x over 2 plus 3 equals 8. Subtract 3: x over 2 equals 5. Multiply by 2: x equals 10.", ["x/2 + 3 = 8", "x/2 = 5", "g|x = 10"]]), E("Problem", ["I think of a number, double it and add 9. The answer is 25. 2 x plus 9 equals 25. 2 x is 16. x is 8.", ["2x + 9 = 25", "2x = 16", "g|x = 8"]])],
    [M("Dividing first", "Mistake one: dividing only part of the left side.", "2x + 3 = 11 → x + 3 = 5.5 ✗", "2x = 8, x = 4 ✓"), M("Not undoing the add", "Mistake two: not undoing the add first.", "2x + 3 = 11, x = 5.5 − 3 ✗", "− 3 first ✓")],
    ["Equations model real problems, such as a taxi fare of £2 plus £3 per mile, where the fare is £17: 3 x plus 2 equals 17, x equals 5 miles.", ["3x + 2 = 17", "x = 5 miles"]],
    [T("Solve 2x + 5 = 17.", "Subtract 5. 12. Divide by 2. 6.", ["2x = 12"], "x = 6"), T("Solve 4x − 3 = 21.", "Add 3. 24. Divide by 4. 6.", ["4x = 24"], "x = 6"), T("I think of a number, treble it and subtract 4. The answer is 23. Find the number.", "3 x minus 4 equals 23. Add 4: 27. Divide by 3: 9.", ["3x − 4 = 23", "3x = 27"], "9")],
    ["Undo add or subtract, then multiply or divide.", ["Check the answer"]]);

  LS("Introducing inequalities", "how to read inequality signs and show solutions on a number line.", "Inequalities on a number line",
    E("The signs", ["An inequality shows that one quantity is bigger or smaller than another. The sign less than looks like a mouth pointing to the smaller value. Less than or equal to includes the number itself.", ["x < 5: x is less than 5", "x ≤ 5: x is less than or equal to 5", "x > 5", "x ≥ 5"]], ["On a number line, an open circle means the number is not included. A closed circle means it is included.", ["Open circle: < or >", "Closed circle: ≤ or ≥"]]),
    [E("Reading", ["What whole numbers satisfy x less than 4, with x at least 0? 0, 1, 2 and 3.", ["0 ≤ x < 4", "g|0, 1, 2, 3"]]), E("Including", ["What whole numbers satisfy x at most 3, with x at least 1? 1, 2 and 3.", ["1 ≤ x ≤ 3", "g|1, 2, 3"]]), E("Solving", ["Solve x plus 2 is less than 7. Subtract 2 from both sides. x is less than 5.", ["x + 2 < 7", "g|x < 5"]]), E("With multiplication", ["Solve 3 x is at least 12. Divide by 3. x is at least 4.", ["3x ≥ 12", "g|x ≥ 4"]])],
    [M("Mixing the sign", "Mistake one: reversing the sign. x is less than five means x is below five.", "x < 5 means x > 5 ✗", "x < 5 means below 5 ✓"), M("Closed or open", "Mistake two: including a number that is not allowed.", "x < 5 includes 5 ✗", "x < 5 excludes 5 ✓")],
    ["Age limits use inequalities: a ride for people at least 120 centimetres tall means height ≥ 120.", ["h ≥ 120"]],
    [T("List the whole numbers with 2 ≤ x < 6.", "Two, three, four and five.", ["2 ≤ x < 6"], "2, 3, 4, 5"), T("Solve x − 3 > 4.", "Add 3. x is more than 7.", ["+ 3"], "x > 7"), T("Solve 2x ≤ 10.", "Divide by 2. x is at most 5.", ["÷ 2"], "x ≤ 5")],
    ["Mouth opens to the bigger.", ["Open: not included", "Closed: included"]]);

  L.use(809, ["Simplifying and expanding", "Formulae and equations", "Expressions from words and shapes", "How do you substitute numbers into a formula?", "Number patterns", "Term-to-term and position-to-term rules", "Using letters for numbers", "Solving simple equations", "Two-step equations", "Introducing inequalities"]);
})();
