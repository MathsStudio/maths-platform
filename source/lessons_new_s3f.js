(function () {
  var BT = window.BT; if (!BT || !BT.L || !BT.sv || !BT.lk) return;
  var L = BT.L, V = BT.sv, E = L.E, S = L.st, SC = L.SC,
    g = function (t) { return E(t, 'g'); }, r = function (t) { return E(t, 'r'); };
  function N(title, goal, scenes) { L.full(title, scenes); return L.ep(title, goal, []); }

  N("How do you use Pythagoras' theorem to find a missing side?", 'how to find the hypotenuse or a shorter side of a right-angled triangle, step by step.', [
    SC('Right-angled triangles', 'Start with the basics', [
      S("A right-angled triangle has 1 corner that is exactly 90 degrees, like the corner of a book. The side opposite the right angle is special. It is the longest side, and it is called the hypotenuse. The other 2 sides are called the shorter sides, or the legs.", V.list(['Right angle: 90°', 'Hypotenuse: longest side, opposite the right angle', 'Two shorter sides'])),
      S("Pythagoras discovered a rule that links the 3 sides. Square the 2 shorter sides and add them. You get the square of the hypotenuse. We write a squared plus b squared equals c squared, where c is the hypotenuse.", E('a² + b² = c²', 'g'))
    ]),
    SC('Seeing it work', 'A triangle with sides 3, 4 and 5', [
      S("Let us test the rule on a triangle with sides 3, 4 and 5. The hypotenuse is 5, the longest. 3 squared is 9. 4 squared is 16. 9 plus 16 is 25. And 5 squared is 25. The rule works.", E('3² + 4² = 9 + 16 = 25') + g('5² = 25 ✓')),
      S("Think of it as squares. Draw a real square on each side. The area of the 2 small squares, 9 and 16, add up to the area of the big square, 25. That is what Pythagoras says.", V.rule('Small squares add to the big square.'))
    ]),
    SC('Finding the hypotenuse', 'Example 1: sides 6 and 8, step by step', [
      S("Step one. Draw or imagine the triangle. The 2 shorter sides are 6 and 8. We want the hypotenuse, so call it c.", E('a = 6, b = 8, c = ?')),
      S("Step two. Write the rule. a squared plus b squared equals c squared. Put in the numbers. 6 squared plus 8 squared equals c squared.", E('6² + 8² = c²')),
      S("Step three. Work out the squares. 6 squared is 36. 8 squared is 64. Add them. 100. So c squared equals 100.", E('36 + 64 = 100') + E('c² = 100')),
      S("Step four. Take the square root, because we want c, not c squared. The square root of 100 is 10. The hypotenuse is 10. And it is bigger than both shorter sides, as it should be.", g('c = √100 = 10'))
    ]),
    SC('Not a whole number', 'Example 2: sides 5 and 7', [
      S("The answer is not always a whole number. Sides 5 and 7. 5 squared is 25. 7 squared is 49. Add. 74. c squared is 74.", E('5² + 7² = 25 + 49 = 74')),
      S("Take the square root with a calculator. The square root of 74 is 8.602, and so on. We round it. To 1 decimal place, 8.6. Always write the units.", g('c = √74 ≈ 8.6 cm'))
    ]),
    SC('Finding a shorter side', 'Example 3: hypotenuse 13, 1 side 5', [
      S("Now the opposite problem. We know the hypotenuse, 13, and 1 shorter side, 5. We want the other shorter side, b. Write the rule. 5 squared plus b squared equals 13 squared.", E('5² + b² = 13²')),
      S("Step two. Work out the squares. 25 plus b squared equals 169.", E('25 + b² = 169')),
      S("Step three. We want b squared on its own. Subtract 25 from both sides. b squared equals 144.", E('b² = 169 − 25 = 144')),
      S("Step four. Square root. b equals 12. Check that it is shorter than the hypotenuse. 12 is less than 13. Good.", g('b = √144 = 12'))
    ]),
    SC('Not whole again', 'Example 4: hypotenuse 9, 1 side 6', [
      S("Hypotenuse 9, 1 side 6. 6 squared plus b squared equals 9 squared. 36 plus b squared equals 81. Subtract. b squared equals 45.", E('36 + b² = 81') + E('b² = 45')),
      S("Square root of 45 is 6.708. Round to 1 decimal place. 6.7. And it is less than 9, so it makes sense.", g('b = √45 ≈ 6.7'))
    ]),
    SC('Add or subtract?', 'How to decide', [
      S("This is the most important decision. If you are finding the hypotenuse, you add the squares. If you are finding a shorter side, you subtract.", V.list(['Finding the hypotenuse: ADD the squares', 'Finding a shorter side: SUBTRACT'])),
      S("A quick check. The hypotenuse is always the longest side. If your hypotenuse comes out smaller than another side, you have subtracted when you should have added.", V.rule('Hypotenuse is the longest side.'))
    ]),
    SC('A ladder', 'Example 5: a real problem', [
      S("A ladder 5 metres long leans against a wall. The foot of the ladder is 1 and a half metres from the wall. How high up the wall does it reach? Draw it. The wall and ground make a right angle. The ladder is the hypotenuse, 5 metres.", E('Hypotenuse = 5, base = 1.5, height = ?')),
      S("The height is a shorter side, so we subtract. Height squared plus 1.5 squared equals 5 squared. 1.5 squared is 2.25. Height squared equals 25 minus 2.25.", E('h² + 1.5² = 5²') + E('h² = 25 − 2.25 = 22.75')),
      S("Square root. The height is 4.77, to 2 decimal places. About 4.8 metres up the wall.", g('h = √22.75 ≈ 4.77 m'))
    ]),
    SC('On a grid', 'Example 6: distance between 2 points', [
      S("Pythagoras also gives the distance between 2 points. Take the points 1, 2, and 7, 10. Across, the difference in x is 7 minus 1, 6. Up, the difference in y is 10 minus 2, 8. These form the 2 shorter sides of a right-angled triangle.", E('Across: 7 − 1 = 6') + E('Up: 10 − 2 = 8')),
      S("The distance is the hypotenuse. 6 squared plus 8 squared is 36 plus 64, 100. Square root. The distance is 10.", g('Distance = √100 = 10'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Forgetting the square root. The shorter sides are 6 and 8. Wrong: the hypotenuse is 100. That is c squared. Take the square root. 10.", r('c = 100  ✗') + g('c = √100 = 10  ✓')),
      S("Mistake two. Adding when you should subtract. The hypotenuse is 13, and 1 shorter side is 5. Wrong: add the squares, 25 plus 1 69, 1 94, so the side is 13.9. That is longer than the hypotenuse, which is impossible. Subtract. 1 69 minus 25, 1 44. 12.", r('25 + 169 = 194 → 13.9  ✗') + g('169 − 25 = 144 → 12  ✓')),
      S("Mistake three. Using Pythagoras on a triangle with no right angle. A triangle has sides 4, 5 and 6. Wrong: use 4 squared plus 5 squared to find 6. 16 plus 25 is 41, not 36. The rule only works when there is a right angle.", r('4² + 5² = 41, not 6² = 36  ✗') + g('needs a right angle  ✓'))
    ]),
    SC('In real life', 'Screens and ramps', [
      S("A television screen is sold by its diagonal. If it is 80 centimetres wide and 45 centimetres high, the diagonal is the square root of 6,400 plus 2,025. That is the square root of 8,425, about 92 centimetres.", g('√8425 ≈ 92 cm')),
      S("Builders use it for ramps, roofs and checking that corners are square. It is one of the most useful ideas in maths.", V.note('Builders and engineers use it daily'))
    ]),
    L.turn("Your turn! Number one. A right-angled triangle has shorter sides 9 and 12. Find the hypotenuse. Pause and try it.", E('9² + 12² = c²'), "81 plus 144 is 225. The square root is 15.", g('c = 15')),
    L.turn("Your turn! Number two. The hypotenuse is 17 and 1 shorter side is 8. Find the other shorter side. Pause and try it.", E('8² + b² = 17²'), "289 minus 64 is 225. The square root is 15.", g('b = 15')),
    L.turn("Your turn! Number three. The hypotenuse is 10 and 1 shorter side is 7. Find the other side, to 1 decimal place. Pause and try it.", E('7² + b² = 10²'), "100 minus 49 is 51. The square root of 51 is 7.1.", g('b ≈ 7.1')),
    L.rec("How do you use Pythagoras' theorem to find a missing side?", "In a right-angled triangle, a squared plus b squared equals c squared, where c is the hypotenuse, the longest side opposite the right angle. To find the hypotenuse, add the squares and take the square root. To find a shorter side, subtract and take the square root. Check that the hypotenuse is the longest side.", ['a² + b² = c²', 'Hypotenuse: add', 'Shorter side: subtract', 'Square root at the end'])
  ]);

  N('How do you check for a right angle and use Pythagorean triples?', 'how to test whether a triangle has a right angle, and how to recognise common whole-number triangles.', [
    SC('The reverse', 'Start with the basics', [
      S("Pythagoras says that in a right-angled triangle, a squared plus b squared equals c squared. The rule also works in reverse. If the 3 sides of a triangle satisfy a squared plus b squared equals c squared, then the triangle must have a right angle.", E('a² + b² = c²  ⟺  right angle', 'g')),
      S("This lets us test a triangle, even when we cannot see an angle. We only need the 3 side lengths.", V.rule('Test with the 3 sides.'))
    ]),
    SC('The test', 'The steps', [
      S("Step one. Find the longest side. That is the one that would be the hypotenuse. Step two. Square the 2 shorter sides and add them. Step three. Square the longest side. Step four. Compare. If they are equal, there is a right angle.", V.list(['Longest side is c', 'a² + b²', 'c²', 'Equal? Right angle.']))
    ]),
    SC('A yes', 'Example 1: sides 6, 8 and 10', [
      S("The longest side is 10. 6 squared plus 8 squared is 36 plus 64, 100. 10 squared is 100. They are equal. So the triangle has a right angle.", E('6² + 8² = 100') + E('10² = 100') + g('Right-angled ✓'))
    ]),
    SC('A no', 'Example 2: sides 5, 6 and 8', [
      S("The longest side is 8. 5 squared plus 6 squared is 25 plus 36, 61. 8 squared is 64. 61 is not equal to 64. So there is no right angle.", E('5² + 6² = 61') + E('8² = 64') + r('61 ≠ 64: not right-angled'))
    ]),
    SC('Bigger or smaller', 'Example 3: what the difference tells us', [
      S("We can say more. If a squared plus b squared is less than c squared, as with 61 and 64, the biggest angle is more than 90 degrees. The triangle is obtuse. If it is more than c squared, all angles are less than 90 degrees. The triangle is acute.", V.list(['a² + b² = c²: right angle', 'a² + b² < c²: obtuse', 'a² + b² > c²: acute'])),
      S("For 5, 6 and 8, 61 is less than 64, so the triangle is obtuse. 1 angle is more than 90 degrees.", g('Obtuse'))
    ]),
    SC('Big numbers', 'Example 4: 7, 24 and 25', [
      S("Is the triangle with sides 7, 24 and 25 right-angled? 7 squared is 49. 24 squared is 576. Add. 625. 25 squared is 625. Yes.", E('49 + 576 = 625') + g('25² = 625 ✓'))
    ]),
    SC('Triples', 'Pythagorean triples', [
      S("Sets of 3 whole numbers that fit a squared plus b squared equals c squared are called Pythagorean triples. The most famous is 3, 4, 5. Others are 5, 12, 13. 8, 15, 17. 7, 24, 25.", V.list(['3, 4, 5', '5, 12, 13', '8, 15, 17', '7, 24, 25'])),
      S("Learn the first 2. They often appear in exam questions, and they save you from a calculator.", V.rule('Learn 3-4-5 and 5-12-13.'))
    ]),
    SC('Multiples', 'Example 5: scaling a triple', [
      S("If you multiply every number in a triple by the same amount, you get another triple. 3, 4, 5 times 2 is 6, 8, 10. Times 3 is 9, 12, 15. Times 10 is 30, 40, 50. They are all right-angled.", E('3,4,5 → 6,8,10 → 9,12,15 → 30,40,50')),
      S("Check 9, 12, 15. 81 plus 144 is 225. 15 squared is 225. Yes.", E('81 + 144 = 225 = 15² ✓'))
    ]),
    SC('Recognising', 'Example 6: use a triple to save time', [
      S("A right-angled triangle has a hypotenuse of 26 and a shorter side of 10. Find the other side. Notice that 10 and 26 are 2 times 5 and 2 times 13. This is the 5, 12, 13 triple doubled. So the missing side is 2 times 12, 24.", E('10, ?, 26 = 2 × (5, 12, 13)') + g('Missing side = 24')),
      S("Check by calculating. 26 squared minus 10 squared is 676 minus 100, 576. The square root is 24. It matches.", E('676 − 100 = 576 = 24² ✓'))
    ]),
    SC('A builder', 'Example 7: a square corner', [
      S("A builder wants to check that a corner of a foundation is a true right angle. She measures 3 metres along 1 wall, and 4 metres along the other. If the distance between those 2 marks is exactly 5 metres, the corner is square. This is the 3, 4, 5 triple.", E('3 m, 4 m, 5 m')),
      S("If the diagonal is more than 5, the corner is too wide. If less than 5, the corner is too narrow.", V.rule('Diagonal 5 m: a perfect corner.'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Using the wrong side as the hypotenuse. Test 6, 8 and 10. Wrong: 10 squared plus 6 squared equals 8 squared. That is 1 36 against 64. The longest side must be the hypotenuse. 6 squared plus 8 squared is a hundred, and 10 squared is a hundred.", r('10² + 6² = 136 ≠ 8² = 64  ✗') + g('6² + 8² = 100 = 10²  ✓')),
      S("Mistake two. Adding the sides before squaring. Wrong: 6 plus 8, all squared, is 1 96. Square each side first, then add. 36 plus 64 is a hundred.", r('(6 + 8)² = 196  ✗') + g('6² + 8² = 100  ✓')),
      S("Mistake three. Assuming a triangle is right-angled because it looks it. Sides 5, 6 and 8. Wrong: it looks square, so it is right-angled. Test. 25 plus 36 is 61. 8 squared is 64. They are not equal. No right angle.", r('looks square, so right-angled  ✗') + g('61 ≠ 64, not right-angled  ✓'))
    ]),
    L.turn("Your turn! Number one. Is a triangle with sides 9, 40 and 41 right-angled? Pause and try it.", E('9, 40, 41'), "81 plus sixteen hundred is sixteen hundred and 81. 41 squared is sixteen hundred and 81. Yes.", g('Right-angled ✓')),
    L.turn("Your turn! Number two. Is a triangle with sides 4, 5 and 6 right-angled? Pause and try it.", E('4, 5, 6'), "16 plus 25 is 41. 6 squared is 36. Not equal. No.", g('Not right-angled')),
    L.turn("Your turn! Number three. 3, 4, 5 is a triple. Write the triple that is 5 times bigger. Pause and try it.", E('5 × (3, 4, 5)'), "15, 20, 25.", g('15, 20, 25')),
    L.rec('How do you check for a right angle and use Pythagorean triples?', "If a squared plus b squared equals c squared for the 3 sides, with c the longest, the triangle has a right angle. If a squared plus b squared is less than c squared, it is obtuse, and if it is more, it is acute. Whole-number sets that work, like 3, 4, 5 and 5, 12, 13, are Pythagorean triples. Multiples of a triple also work.", ['Longest side is c', 'a² + b² = c²: right angle', '3-4-5 and 5-12-13', 'Multiples work too'])
  ]);

  N('How do you give exact answers using surds in Pythagoras questions?', 'how to leave a square root in its exact form and simplify it.', [
    SC('Exact answers', 'Start with the basics', [
      S("When we found the square root of 74 earlier, our calculator gave 8.6023, and so on. That decimal never ends. Any rounded answer is slightly wrong. An exact answer leaves the square root in the answer, like root 74.", E('√74 is exact. 8.6 is rounded.', 'g')),
      S("A number like root 74, that cannot be written as a fraction, is called a surd. We often need to simplify surds, to make them as small as possible.", V.rule('Surd: an exact root that is not a whole number.'))
    ]),
    SC('Perfect squares', 'The numbers to know', [
      S("To simplify surds, we need to recognise square numbers. 1, 4, 9, 16, 25, 36, 49, 64, 81, 100.", V.list(['1, 4, 9, 16, 25', '36, 49, 64, 81, 100']))
    ]),
    SC('A key rule', 'Splitting a root', [
      S("Here is a rule that makes simplifying possible. The square root of a times b equals the square root of a, times the square root of b. For example, root 36 times 4 is root 36 times root 4, 6 times 2, 12.", E('√(a × b) = √a × √b', 'g') + E('√(36 × 4) = 6 × 2 = 12'))
    ]),
    SC('Simplifying', 'Example 1: √50, step by step', [
      S("Step one. Find the biggest square number that divides into 50. 25. 50 is 25 times 2.", E('50 = 25 × 2')),
      S("Step two. Split the root. Root 25 times root 2.", E('√50 = √25 × √2')),
      S("Step three. Root 25 is 5. So root 50 is 5 root 2. That is the simplified, exact form.", g('√50 = 5√2'))
    ]),
    SC('Another', 'Example 2: √72', [
      S("The biggest square that divides 72. 36. 72 is 36 times 2. Root 36 times root 2 is 6 root 2.", E('72 = 36 × 2') + g('√72 = 6√2')),
      S("A common mistake is to use a smaller square, like 4. 72 is 4 times 18. Root 4 times root 18 is 2 root 18. That is not fully simplified, because 18 still has a square factor, 9. So always look for the biggest square.", V.rule('Use the biggest square factor.'))
    ]),
    SC('And another', 'Example 3: √45', [
      S("45 is 9 times 5. Root 9 is 3. So root 45 is 3 root 5.", E('45 = 9 × 5') + g('√45 = 3√5'))
    ]),
    SC('Pythagoras', 'Example 4: sides 5 and 5', [
      S("A right-angled triangle has 2 shorter sides of 5 and 5. Hypotenuse squared is 25 plus 25, 50. The exact hypotenuse is root 50, which simplifies to 5 root 2.", E('c² = 25 + 25 = 50') + g('c = 5√2')),
      S("If we need a decimal, 5 root 2 is about 7.07. But exact answers are better, when asked for in surd form.", E('5√2 ≈ 7.07'))
    ]),
    SC('A square and its diagonal', 'Example 5: side 4', [
      S("A square has side 4. Its diagonal splits it into 2 right-angled triangles. Diagonal squared is 16 plus 16, 32. 32 is 16 times 2. So the diagonal is 4 root 2.", E('d² = 16 + 16 = 32') + g('d = 4√2')),
      S("A neat fact. The diagonal of any square is the side times root 2.", V.rule('Diagonal = side × √2'))
    ]),
    SC('An equilateral triangle', 'Example 6: the height', [
      S("An equilateral triangle has all sides 6. Draw the height. It cuts the base in half, 3 and 3. Now there is a right-angled triangle with hypotenuse 6, and a shorter side 3. Height squared plus 3 squared equals 6 squared. Height squared is 36 minus 9, 27.", E('h² + 3² = 6²') + E('h² = 27')),
      S("27 is 9 times 3. So the height is 3 root 3. About 5.2. The area is half times 6 times 3 root 3, which is 9 root 3.", g('h = 3√3') + E('Area = ½ × 6 × 3√3 = 9√3'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Not simplifying fully. Simplify root 72. Wrong: 2 root 18. 18 still has a square factor, 9. Use the biggest square, 36. 6 root 2.", r('√72 = 2√18  not fully  ✗') + g('√72 = 6√2  ✓')),
      S("Mistake two. Adding roots like numbers. Root 2 plus root 3. Wrong: root 5. Check with decimals. 1.41 plus 1.73 is 3.15. Root 5 is 2.24. They are not equal.", r('√2 + √3 = √5  ✗') + g('1.41 + 1.73 = 3.15, but √5 = 2.24  ✓')),
      S("Mistake three. Rounding too early. The diagonal of a square of side 5. Wrong: root 50 is 7.1, then use 7.1 in the next step. 7.1 squared is 50.41, not 50. Keep 5 root 2. 5 root 2 squared is 25 times 2, 50.", r('√50 ≈ 7.1, 7.1² = 50.41  ✗') + g('(5√2)² = 25 × 2 = 50  ✓'))
    ]),
    L.turn("Your turn! Number one. Simplify root 18. Pause and try it.", E('√18'), "18 is 9 times 2. Root 9 is 3. 3 root 2.", g('3√2')),
    L.turn("Your turn! Number two. A right-angled triangle has shorter sides 3 and 3. Give the hypotenuse as a surd in simplest form. Pause and try it.", E('3² + 3²'), "18. Root 18 is 3 root 2.", g('3√2')),
    L.turn("Your turn! Number three. Find the diagonal of a square with side 5, as a surd. Pause and try it.", E('5² + 5²'), "50. Root 50 is 5 root 2.", g('5√2')),
    L.rec('How do you give exact answers using surds in Pythagoras questions?', "A surd is an exact square root that is not a whole number. Leave answers as surds when asked for an exact answer. To simplify, find the biggest square number that divides the number, split the root, and take the square root of the square. For example, root 50 is 5 root 2. The diagonal of a square is its side times root 2.", ['Exact: keep the root', 'Biggest square factor', '√50 = 5√2', 'Square diagonal = side × √2'])
  ]);

  L.use(849, ["How do you use Pythagoras' theorem to find a missing side?", 'How do you check for a right angle and use Pythagorean triples?', 'How do you give exact answers using surds in Pythagoras questions?', 'SOH CAH TOA', 'Finding an angle', 'Pythagoras and trigonometry']);
})();
