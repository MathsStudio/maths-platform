(function () {
  var BT = window.BT; if (!BT || !BT.L || !BT.sv || !BT.lk) return;
  var L = BT.L, V = BT.sv, E = L.E, S = L.st, SC = L.SC,
    g = function (t) { return E(t, 'g'); }, r = function (t) { return E(t, 'r'); };
  function N(title, goal, scenes) { L.full(title, scenes); return L.ep(title, goal, []); }

  N("How do you use Pythagoras' theorem to find a missing side?", 'how to find the hypotenuse or a shorter side of a right-angled triangle, step by step.', [
    SC('Right-angled triangles', 'Start with the basics', [
      S("A right-angled triangle has one corner that is exactly ninety degrees, like the corner of a book. The side opposite the right angle is special. It is the longest side, and it is called the hypotenuse. The other two sides are called the shorter sides, or the legs.", V.list(['Right angle: 90°', 'Hypotenuse: longest side, opposite the right angle', 'Two shorter sides'])),
      S("Pythagoras discovered a rule that links the three sides. Square the two shorter sides and add them. You get the square of the hypotenuse. We write a squared plus b squared equals c squared, where c is the hypotenuse.", E('a² + b² = c²', 'g'))
    ]),
    SC('Seeing it work', 'A triangle with sides 3, 4 and 5', [
      S("Let us test the rule on a triangle with sides three, four and five. The hypotenuse is five, the longest. Three squared is nine. Four squared is sixteen. Nine plus sixteen is twenty-five. And five squared is twenty-five. The rule works.", E('3² + 4² = 9 + 16 = 25') + g('5² = 25 ✓')),
      S("Think of it as squares. Draw a real square on each side. The area of the two small squares, nine and sixteen, add up to the area of the big square, twenty-five. That is what Pythagoras says.", V.rule('Small squares add to the big square.'))
    ]),
    SC('Finding the hypotenuse', 'Example 1: sides 6 and 8, step by step', [
      S("Step one. Draw or imagine the triangle. The two shorter sides are six and eight. We want the hypotenuse, so call it c.", E('a = 6, b = 8, c = ?')),
      S("Step two. Write the rule. a squared plus b squared equals c squared. Put in the numbers. Six squared plus eight squared equals c squared.", E('6² + 8² = c²')),
      S("Step three. Work out the squares. Six squared is thirty-six. Eight squared is sixty-four. Add them. One hundred. So c squared equals one hundred.", E('36 + 64 = 100') + E('c² = 100')),
      S("Step four. Take the square root, because we want c, not c squared. The square root of one hundred is ten. The hypotenuse is ten. And it is bigger than both shorter sides, as it should be.", g('c = √100 = 10'))
    ]),
    SC('Not a whole number', 'Example 2: sides 5 and 7', [
      S("The answer is not always a whole number. Sides five and seven. Five squared is twenty-five. Seven squared is forty-nine. Add. Seventy-four. c squared is seventy-four.", E('5² + 7² = 25 + 49 = 74')),
      S("Take the square root with a calculator. The square root of seventy-four is eight point six zero two, and so on. We round it. To one decimal place, eight point six. Always write the units.", g('c = √74 ≈ 8.6 cm'))
    ]),
    SC('Finding a shorter side', 'Example 3: hypotenuse 13, one side 5', [
      S("Now the opposite problem. We know the hypotenuse, thirteen, and one shorter side, five. We want the other shorter side, b. Write the rule. Five squared plus b squared equals thirteen squared.", E('5² + b² = 13²')),
      S("Step two. Work out the squares. Twenty-five plus b squared equals one hundred and sixty-nine.", E('25 + b² = 169')),
      S("Step three. We want b squared on its own. Subtract twenty-five from both sides. b squared equals one hundred and forty-four.", E('b² = 169 − 25 = 144')),
      S("Step four. Square root. b equals twelve. Check that it is shorter than the hypotenuse. Twelve is less than thirteen. Good.", g('b = √144 = 12'))
    ]),
    SC('Not whole again', 'Example 4: hypotenuse 9, one side 6', [
      S("Hypotenuse nine, one side six. Six squared plus b squared equals nine squared. Thirty-six plus b squared equals eighty-one. Subtract. b squared equals forty-five.", E('36 + b² = 81') + E('b² = 45')),
      S("Square root of forty-five is six point seven zero eight. Round to one decimal place. Six point seven. And it is less than nine, so it makes sense.", g('b = √45 ≈ 6.7'))
    ]),
    SC('Add or subtract?', 'How to decide', [
      S("This is the most important decision. If you are finding the hypotenuse, you add the squares. If you are finding a shorter side, you subtract.", V.list(['Finding the hypotenuse: ADD the squares', 'Finding a shorter side: SUBTRACT'])),
      S("A quick check. The hypotenuse is always the longest side. If your hypotenuse comes out smaller than another side, you have subtracted when you should have added.", V.rule('Hypotenuse is the longest side.'))
    ]),
    SC('A ladder', 'Example 5: a real problem', [
      S("A ladder five metres long leans against a wall. The foot of the ladder is one and a half metres from the wall. How high up the wall does it reach? Draw it. The wall and ground make a right angle. The ladder is the hypotenuse, five metres.", E('Hypotenuse = 5, base = 1.5, height = ?')),
      S("The height is a shorter side, so we subtract. Height squared plus one point five squared equals five squared. One point five squared is two point two five. Height squared equals twenty-five minus two point two five.", E('h² + 1.5² = 5²') + E('h² = 25 − 2.25 = 22.75')),
      S("Square root. The height is four point seven seven, to two decimal places. About four point eight metres up the wall.", g('h = √22.75 ≈ 4.77 m'))
    ]),
    SC('On a grid', 'Example 6: distance between two points', [
      S("Pythagoras also gives the distance between two points. Take the points one, two, and seven, ten. Across, the difference in x is seven minus one, six. Up, the difference in y is ten minus two, eight. These form the two shorter sides of a right-angled triangle.", E('Across: 7 − 1 = 6') + E('Up: 10 − 2 = 8')),
      S("The distance is the hypotenuse. Six squared plus eight squared is thirty-six plus sixty-four, one hundred. Square root. The distance is ten.", g('Distance = √100 = 10'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Forgetting the square root. The shorter sides are six and eight. Wrong: the hypotenuse is one hundred. That is c squared. Take the square root. Ten.", r('c = 100  ✗') + g('c = √100 = 10  ✓')),
      S("Mistake two. Adding when you should subtract. The hypotenuse is thirteen, and one shorter side is five. Wrong: add the squares, twenty-five plus one sixty-nine, one ninety-four, so the side is thirteen point nine. That is longer than the hypotenuse, which is impossible. Subtract. One sixty-nine minus twenty-five, one forty-four. Twelve.", r('25 + 169 = 194 → 13.9  ✗') + g('169 − 25 = 144 → 12  ✓')),
      S("Mistake three. Using Pythagoras on a triangle with no right angle. A triangle has sides four, five and six. Wrong: use four squared plus five squared to find six. Sixteen plus twenty-five is forty-one, not thirty-six. The rule only works when there is a right angle.", r('4² + 5² = 41, not 6² = 36  ✗') + g('needs a right angle  ✓'))
    ]),
    SC('In real life', 'Screens and ramps', [
      S("A television screen is sold by its diagonal. If it is eighty centimetres wide and forty-five centimetres high, the diagonal is the square root of six thousand four hundred plus two thousand and twenty-five. That is the square root of eight thousand four hundred and twenty-five, about ninety-two centimetres.", g('√8425 ≈ 92 cm')),
      S("Builders use it for ramps, roofs and checking that corners are square. It is one of the most useful ideas in maths.", V.note('Builders and engineers use it daily'))
    ]),
    L.turn("Your turn! Number one. A right-angled triangle has shorter sides nine and twelve. Find the hypotenuse. Pause and try it.", E('9² + 12² = c²'), "Eighty-one plus one hundred and forty-four is two hundred and twenty-five. The square root is fifteen.", g('c = 15')),
    L.turn("Your turn! Number two. The hypotenuse is seventeen and one shorter side is eight. Find the other shorter side. Pause and try it.", E('8² + b² = 17²'), "Two hundred and eighty-nine minus sixty-four is two hundred and twenty-five. The square root is fifteen.", g('b = 15')),
    L.turn("Your turn! Number three. The hypotenuse is ten and one shorter side is seven. Find the other side, to one decimal place. Pause and try it.", E('7² + b² = 10²'), "One hundred minus forty-nine is fifty-one. The square root of fifty-one is seven point one.", g('b ≈ 7.1')),
    L.rec("How do you use Pythagoras' theorem to find a missing side?", "In a right-angled triangle, a squared plus b squared equals c squared, where c is the hypotenuse, the longest side opposite the right angle. To find the hypotenuse, add the squares and take the square root. To find a shorter side, subtract and take the square root. Check that the hypotenuse is the longest side.", ['a² + b² = c²', 'Hypotenuse: add', 'Shorter side: subtract', 'Square root at the end'])
  ]);

  N('How do you check for a right angle and use Pythagorean triples?', 'how to test whether a triangle has a right angle, and how to recognise common whole-number triangles.', [
    SC('The reverse', 'Start with the basics', [
      S("Pythagoras says that in a right-angled triangle, a squared plus b squared equals c squared. The rule also works in reverse. If the three sides of a triangle satisfy a squared plus b squared equals c squared, then the triangle must have a right angle.", E('a² + b² = c²  ⟺  right angle', 'g')),
      S("This lets us test a triangle, even when we cannot see an angle. We only need the three side lengths.", V.rule('Test with the three sides.'))
    ]),
    SC('The test', 'The steps', [
      S("Step one. Find the longest side. That is the one that would be the hypotenuse. Step two. Square the two shorter sides and add them. Step three. Square the longest side. Step four. Compare. If they are equal, there is a right angle.", V.list(['Longest side is c', 'a² + b²', 'c²', 'Equal? Right angle.']))
    ]),
    SC('A yes', 'Example 1: sides 6, 8 and 10', [
      S("The longest side is ten. Six squared plus eight squared is thirty-six plus sixty-four, one hundred. Ten squared is one hundred. They are equal. So the triangle has a right angle.", E('6² + 8² = 100') + E('10² = 100') + g('Right-angled ✓'))
    ]),
    SC('A no', 'Example 2: sides 5, 6 and 8', [
      S("The longest side is eight. Five squared plus six squared is twenty-five plus thirty-six, sixty-one. Eight squared is sixty-four. Sixty-one is not equal to sixty-four. So there is no right angle.", E('5² + 6² = 61') + E('8² = 64') + r('61 ≠ 64: not right-angled'))
    ]),
    SC('Bigger or smaller', 'Example 3: what the difference tells us', [
      S("We can say more. If a squared plus b squared is less than c squared, as with sixty-one and sixty-four, the biggest angle is more than ninety degrees. The triangle is obtuse. If it is more than c squared, all angles are less than ninety degrees. The triangle is acute.", V.list(['a² + b² = c²: right angle', 'a² + b² < c²: obtuse', 'a² + b² > c²: acute'])),
      S("For five, six and eight, sixty-one is less than sixty-four, so the triangle is obtuse. One angle is more than ninety degrees.", g('Obtuse'))
    ]),
    SC('Big numbers', 'Example 4: 7, 24 and 25', [
      S("Is the triangle with sides seven, twenty-four and twenty-five right-angled? Seven squared is forty-nine. Twenty-four squared is five hundred and seventy-six. Add. Six hundred and twenty-five. Twenty-five squared is six hundred and twenty-five. Yes.", E('49 + 576 = 625') + g('25² = 625 ✓'))
    ]),
    SC('Triples', 'Pythagorean triples', [
      S("Sets of three whole numbers that fit a squared plus b squared equals c squared are called Pythagorean triples. The most famous is three, four, five. Others are five, twelve, thirteen. Eight, fifteen, seventeen. Seven, twenty-four, twenty-five.", V.list(['3, 4, 5', '5, 12, 13', '8, 15, 17', '7, 24, 25'])),
      S("Learn the first two. They often appear in exam questions, and they save you from a calculator.", V.rule('Learn 3-4-5 and 5-12-13.'))
    ]),
    SC('Multiples', 'Example 5: scaling a triple', [
      S("If you multiply every number in a triple by the same amount, you get another triple. Three, four, five times two is six, eight, ten. Times three is nine, twelve, fifteen. Times ten is thirty, forty, fifty. They are all right-angled.", E('3,4,5 → 6,8,10 → 9,12,15 → 30,40,50')),
      S("Check nine, twelve, fifteen. Eighty-one plus one hundred and forty-four is two hundred and twenty-five. Fifteen squared is two hundred and twenty-five. Yes.", E('81 + 144 = 225 = 15² ✓'))
    ]),
    SC('Recognising', 'Example 6: use a triple to save time', [
      S("A right-angled triangle has a hypotenuse of twenty-six and a shorter side of ten. Find the other side. Notice that ten and twenty-six are two times five and two times thirteen. This is the five, twelve, thirteen triple doubled. So the missing side is two times twelve, twenty-four.", E('10, ?, 26 = 2 × (5, 12, 13)') + g('Missing side = 24')),
      S("Check by calculating. Twenty-six squared minus ten squared is six hundred and seventy-six minus one hundred, five hundred and seventy-six. The square root is twenty-four. It matches.", E('676 − 100 = 576 = 24² ✓'))
    ]),
    SC('A builder', 'Example 7: a square corner', [
      S("A builder wants to check that a corner of a foundation is a true right angle. She measures three metres along one wall, and four metres along the other. If the distance between those two marks is exactly five metres, the corner is square. This is the three, four, five triple.", E('3 m, 4 m, 5 m')),
      S("If the diagonal is more than five, the corner is too wide. If less than five, the corner is too narrow.", V.rule('Diagonal 5 m: a perfect corner.'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Using the wrong side as the hypotenuse. Test six, eight and ten. Wrong: ten squared plus six squared equals eight squared. That is one thirty-six against sixty-four. The longest side must be the hypotenuse. Six squared plus eight squared is a hundred, and ten squared is a hundred.", r('10² + 6² = 136 ≠ 8² = 64  ✗') + g('6² + 8² = 100 = 10²  ✓')),
      S("Mistake two. Adding the sides before squaring. Wrong: six plus eight, all squared, is one ninety-six. Square each side first, then add. Thirty-six plus sixty-four is a hundred.", r('(6 + 8)² = 196  ✗') + g('6² + 8² = 100  ✓')),
      S("Mistake three. Assuming a triangle is right-angled because it looks it. Sides five, six and eight. Wrong: it looks square, so it is right-angled. Test. Twenty-five plus thirty-six is sixty-one. Eight squared is sixty-four. They are not equal. No right angle.", r('looks square, so right-angled  ✗') + g('61 ≠ 64, not right-angled  ✓'))
    ]),
    L.turn("Your turn! Number one. Is a triangle with sides nine, forty and forty-one right-angled? Pause and try it.", E('9, 40, 41'), "Eighty-one plus sixteen hundred is sixteen hundred and eighty-one. Forty-one squared is sixteen hundred and eighty-one. Yes.", g('Right-angled ✓')),
    L.turn("Your turn! Number two. Is a triangle with sides four, five and six right-angled? Pause and try it.", E('4, 5, 6'), "Sixteen plus twenty-five is forty-one. Six squared is thirty-six. Not equal. No.", g('Not right-angled')),
    L.turn("Your turn! Number three. Three, four, five is a triple. Write the triple that is five times bigger. Pause and try it.", E('5 × (3, 4, 5)'), "Fifteen, twenty, twenty-five.", g('15, 20, 25')),
    L.rec('How do you check for a right angle and use Pythagorean triples?', "If a squared plus b squared equals c squared for the three sides, with c the longest, the triangle has a right angle. If a squared plus b squared is less than c squared, it is obtuse, and if it is more, it is acute. Whole-number sets that work, like three, four, five and five, twelve, thirteen, are Pythagorean triples. Multiples of a triple also work.", ['Longest side is c', 'a² + b² = c²: right angle', '3-4-5 and 5-12-13', 'Multiples work too'])
  ]);

  N('How do you give exact answers using surds in Pythagoras questions?', 'how to leave a square root in its exact form and simplify it.', [
    SC('Exact answers', 'Start with the basics', [
      S("When we found the square root of seventy-four earlier, our calculator gave eight point six zero two three, and so on. That decimal never ends. Any rounded answer is slightly wrong. An exact answer leaves the square root in the answer, like root seventy-four.", E('√74 is exact. 8.6 is rounded.', 'g')),
      S("A number like root seventy-four, that cannot be written as a fraction, is called a surd. We often need to simplify surds, to make them as small as possible.", V.rule('Surd: an exact root that is not a whole number.'))
    ]),
    SC('Perfect squares', 'The numbers to know', [
      S("To simplify surds, we need to recognise square numbers. One, four, nine, sixteen, twenty-five, thirty-six, forty-nine, sixty-four, eighty-one, one hundred.", V.list(['1, 4, 9, 16, 25', '36, 49, 64, 81, 100']))
    ]),
    SC('A key rule', 'Splitting a root', [
      S("Here is a rule that makes simplifying possible. The square root of a times b equals the square root of a, times the square root of b. For example, root thirty-six times four is root thirty-six times root four, six times two, twelve.", E('√(a × b) = √a × √b', 'g') + E('√(36 × 4) = 6 × 2 = 12'))
    ]),
    SC('Simplifying', 'Example 1: √50, step by step', [
      S("Step one. Find the biggest square number that divides into fifty. Twenty-five. Fifty is twenty-five times two.", E('50 = 25 × 2')),
      S("Step two. Split the root. Root twenty-five times root two.", E('√50 = √25 × √2')),
      S("Step three. Root twenty-five is five. So root fifty is five root two. That is the simplified, exact form.", g('√50 = 5√2'))
    ]),
    SC('Another', 'Example 2: √72', [
      S("The biggest square that divides seventy-two. Thirty-six. Seventy-two is thirty-six times two. Root thirty-six times root two is six root two.", E('72 = 36 × 2') + g('√72 = 6√2')),
      S("A common mistake is to use a smaller square, like four. Seventy-two is four times eighteen. Root four times root eighteen is two root eighteen. That is not fully simplified, because eighteen still has a square factor, nine. So always look for the biggest square.", V.rule('Use the biggest square factor.'))
    ]),
    SC('And another', 'Example 3: √45', [
      S("Forty-five is nine times five. Root nine is three. So root forty-five is three root five.", E('45 = 9 × 5') + g('√45 = 3√5'))
    ]),
    SC('Pythagoras', 'Example 4: sides 5 and 5', [
      S("A right-angled triangle has two shorter sides of five and five. Hypotenuse squared is twenty-five plus twenty-five, fifty. The exact hypotenuse is root fifty, which simplifies to five root two.", E('c² = 25 + 25 = 50') + g('c = 5√2')),
      S("If we need a decimal, five root two is about seven point zero seven. But exact answers are better, when asked for in surd form.", E('5√2 ≈ 7.07'))
    ]),
    SC('A square and its diagonal', 'Example 5: side 4', [
      S("A square has side four. Its diagonal splits it into two right-angled triangles. Diagonal squared is sixteen plus sixteen, thirty-two. Thirty-two is sixteen times two. So the diagonal is four root two.", E('d² = 16 + 16 = 32') + g('d = 4√2')),
      S("A neat fact. The diagonal of any square is the side times root two.", V.rule('Diagonal = side × √2'))
    ]),
    SC('An equilateral triangle', 'Example 6: the height', [
      S("An equilateral triangle has all sides six. Draw the height. It cuts the base in half, three and three. Now there is a right-angled triangle with hypotenuse six, and a shorter side three. Height squared plus three squared equals six squared. Height squared is thirty-six minus nine, twenty-seven.", E('h² + 3² = 6²') + E('h² = 27')),
      S("Twenty-seven is nine times three. So the height is three root three. About five point two. The area is half times six times three root three, which is nine root three.", g('h = 3√3') + E('Area = ½ × 6 × 3√3 = 9√3'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Not simplifying fully. Simplify root seventy-two. Wrong: two root eighteen. Eighteen still has a square factor, nine. Use the biggest square, thirty-six. Six root two.", r('√72 = 2√18  not fully  ✗') + g('√72 = 6√2  ✓')),
      S("Mistake two. Adding roots like numbers. Root two plus root three. Wrong: root five. Check with decimals. One point four one plus one point seven three is three point one five. Root five is two point two four. They are not equal.", r('√2 + √3 = √5  ✗') + g('1.41 + 1.73 = 3.15, but √5 = 2.24  ✓')),
      S("Mistake three. Rounding too early. The diagonal of a square of side five. Wrong: root fifty is seven point one, then use seven point one in the next step. Seven point one squared is fifty point four one, not fifty. Keep five root two. Five root two squared is twenty-five times two, fifty.", r('√50 ≈ 7.1, 7.1² = 50.41  ✗') + g('(5√2)² = 25 × 2 = 50  ✓'))
    ]),
    L.turn("Your turn! Number one. Simplify root eighteen. Pause and try it.", E('√18'), "Eighteen is nine times two. Root nine is three. Three root two.", g('3√2')),
    L.turn("Your turn! Number two. A right-angled triangle has shorter sides three and three. Give the hypotenuse as a surd in simplest form. Pause and try it.", E('3² + 3²'), "Eighteen. Root eighteen is three root two.", g('3√2')),
    L.turn("Your turn! Number three. Find the diagonal of a square with side five, as a surd. Pause and try it.", E('5² + 5²'), "Fifty. Root fifty is five root two.", g('5√2')),
    L.rec('How do you give exact answers using surds in Pythagoras questions?', "A surd is an exact square root that is not a whole number. Leave answers as surds when asked for an exact answer. To simplify, find the biggest square number that divides the number, split the root, and take the square root of the square. For example, root fifty is five root two. The diagonal of a square is its side times root two.", ['Exact: keep the root', 'Biggest square factor', '√50 = 5√2', 'Square diagonal = side × √2'])
  ]);

  L.use(849, ["How do you use Pythagoras' theorem to find a missing side?", 'How do you check for a right angle and use Pythagorean triples?', 'How do you give exact answers using surds in Pythagoras questions?', 'SOH CAH TOA', 'Finding an angle', 'Pythagoras and trigonometry']);
})();
