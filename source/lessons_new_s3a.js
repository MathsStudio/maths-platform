/* lessons_new_s3a.js: new S3 Watch lessons for the Let's Learn ideas that had no Watch lesson (topics 841 to 843).
   Each is written in full: basics first, several slow worked examples, common mistakes, real life, "your turn" pauses. */
(function () {
  'use strict';
  var BT = window.BT; if (!BT || !BT.L || !BT.sv || !BT.lk) return;
  var L = BT.L, V = BT.sv, LK = BT.lk, E = L.E, S = L.st, SC = L.SC, g = function (t) { return E(t, 'g'); }, r = function (t) { return E(t, 'r'); };
  function N(title, goal, scenes) { L.full(title, scenes); return L.ep(title, goal, []); }

  /* ---- Laws of indices ---- */
  N('How do you use the laws of indices?', 'how to multiply, divide and raise powers, and use 0 and negative indices.', [
    SC('Indices', 'Start with the basics', [
      S("An index is the small raised number in a power. In 2 to the power 5, the 2 is the base and the 5 is the index. Index is the singular. The plural is indices. So this lesson is about the rules for powers.", E('2⁵ = 2 × 2 × 2 × 2 × 2', 'b')),
      S("Why do we need rules? Because powers can get big and messy. The rules let us simplify without writing everything out. There are 3 main laws, and then some special cases. Let's take them 1 at a time.", V.list(['Multiplying: add the indices', 'Dividing: subtract the indices', 'Power of a power: multiply the indices']))
    ]),
    SC('Law 1: multiplying', 'Add the indices', [
      S("Let's find out where the first law comes from. x squared times x cubed. x squared is x times x. x cubed is x times x times x. Together that is 5 x's multiplied. So x to the power 5.", E('x² × x³ = (x·x) × (x·x·x) = x⁵')),
      S("Look at the indices. 2 and 3. 2 plus 3 is 5. So when we multiply powers with the same base, we add the indices.", E('aᵐ × aⁿ = aᵐ⁺ⁿ', 'g')),
      S("This only works if the bases are the same. 3 to the power 4 times 3 to the power 2 is 3 to the power 6. But 3 to the power 4 times 2 to the power 2 cannot be combined this way.", E('3⁴ × 3² = 3⁶') + r('3⁴ × 2²  ✗  different bases'))
    ]),
    SC('Law 2: dividing', 'Subtract the indices', [
      S("Now dividing. x to the power 5, divided by x squared. Write it as a fraction. 5 x's on the top, 2 x's on the bottom. 2 pairs cancel. 3 x's are left.", E('x⁵ ÷ x² = (x·x·x·x·x) ÷ (x·x) = x³')),
      S("5 take away 2 is 3. So when we divide powers with the same base, we subtract the indices.", E('aᵐ ÷ aⁿ = aᵐ⁻ⁿ', 'g'))
    ]),
    SC('Law 3: power of a power', 'Multiply the indices', [
      S("What about x squared, all cubed? That means x squared, times x squared, times x squared. 3 lots of 2 x's. 6 x's altogether. So x to the power 6.", E('(x²)³ = x² × x² × x² = x⁶')),
      S("2 times 3 is 6. So for a power of a power, we multiply the indices.", E('(aᵐ)ⁿ = aᵐⁿ', 'g'))
    ]),
    SC('Using the laws', 'Example 1: with numbers in front', [
      S("Simplify 6 x to the 7, divided by 2 x to the 4. Deal with the numbers first. 6 divided by 2 is 3. Then the letters. 7 minus 4 is 3. So 3 x cubed.", E('6x⁷ ÷ 2x⁴') + g('= 3x³')),
      S("Another. 3 a squared, times 4 a to the 5. Multiply the numbers. 3 times 4 is 12. Add the indices. 2 plus 5 is 7. 12 a to the 7.", E('3a² × 4a⁵') + g('= 12a⁷'))
    ]),
    SC('Using the laws', 'Example 2: brackets', [
      S("Simplify 2 x cubed, all to the power 4. The power outside the bracket goes on everything inside. 2 to the power 4 is 16. And x cubed to the power 4 is x to the power 12, since 3 times 4 is 12.", E('(2x³)⁴ = 2⁴ × (x³)⁴') + g('= 16x¹²')),
      S("A common slip is to leave the 2 alone. The bracket means every part is raised to the power, the number as well as the letter.", V.rule('The power goes on every part.'))
    ]),
    SC('Special case: zero', 'The power zero', [
      S("Look at x cubed divided by x cubed. Anything divided by itself is 1. But the law says subtract the indices. 3 minus 3 is 0. So x to the power 0 must be 1.", E('x³ ÷ x³ = x⁰ = 1')),
      S("This is true for any number, except 0 itself. 5 to the power 0 is 1. A million to the power 0 is 1.", g('a⁰ = 1'))
    ]),
    SC('Special case: negative', 'Negative indices', [
      S("What if we divide a small power by a big 1? 2 squared divided by 2 to the 5. The law gives 2 to the negative 3. But we can also cancel. 2 squared over 2 to the 5 leaves 1 over 2 cubed. So 2 to the negative 3 is 1 over 2 cubed. That is 1/8.", E('2⁻³ = 1 ÷ 2³ = 1/8')),
      S("A negative index does not make the answer negative. It flips the number upside down. a to the negative n is 1 over a to the n.", E('a⁻ⁿ = 1 ÷ aⁿ', 'g'))
    ]),
    SC('Special case: fractions', 'Fractional indices', [
      S("An index of 1/2 means the square root. 25 to the power 1/2 is the square root of 25. That is 5. An index of 1/3 means the cube root. 8 to the 1/3 is 2.", E('25^(½) = √25 = 5') + E('8^(⅓) = ∛8 = 2')),
      S("What about 8 to the 2/3? Take the cube root first, which is 2. Then square it. 4. The bottom number of the fraction is the root, and the top number is the power.", g('8^(⅔) = (∛8)² = 2² = 4'))
    ]),
    SC('Watch out!', 'Four common mistakes', [
      S("Mistake one: multiplying the indices when you should add. x squared times x cubed is x to the five, not x to the six.", r('x² × x³ = x⁶  ✗') + g('x² × x³ = x⁵  ✓')),
      S("Mistake two: multiplying the bases. 2 cubed times 2 squared is 2 to the 5. It is not 4 to the 5.", r('2³ × 2² = 4⁵  ✗') + g('2³ × 2² = 2⁵  ✓')),
      S("Mistake three: thinking a negative index makes a negative number. 2 to the negative 3 is 1/8, which is positive.", r('2⁻³ = −8  ✗') + g('2⁻³ = 1/8  ✓')),
      S("Mistake four: thinking anything to the power 0 is 0. It is 1.", r('5⁰ = 0  ✗') + g('5⁰ = 1  ✓'))
    ]),
    SC('In real life', 'Computers and memory', [
      S("Computer memory is measured in powers of 2. A kilobyte is about 2 to the 10 bytes. A megabyte is 2 to the 20. To find how many kilobytes are in a megabyte, divide. 2 to the 20 divided by 2 to the 10 is 2 to the 10. That is 1,024.", g('2²⁰ ÷ 2¹⁰ = 2¹⁰ = 1,024'))
    ]),
    L.turn("Your turn! Number one. Simplify x to the six, times x to the four. Pause and try it.", E('x⁶ × x⁴'), "Add the indices. 6 plus 4 is 10. x to the 10.", g('x¹⁰')),
    L.turn("Your turn! Number two. Simplify 12 y to the 8, divided by 3 y to the 2. Pause and try it.", E('12y⁸ ÷ 3y²'), "12 divided by 3 is 4. 8 minus 2 is 6. 4 y to the 6.", g('4y⁶')),
    L.turn("Your turn! Number three. Simplify 3 a squared, all to the power 3. Pause and try it.", E('(3a²)³'), "3 cubed is 27. a squared cubed is a to the 6. 27 a to the 6.", g('27a⁶')),
    L.turn("Your turn! Number four. Work out 4 to the negative 2. Pause and try it.", E('4⁻²'), "1 over 4 squared. 1 over 16.", g('1/16')),
    L.rec('How do you use the laws of indices?', "To multiply powers with the same base, add the indices. To divide, subtract them. For a power of a power, multiply. Anything to the power 0 is 1. A negative index means 1 over the power. A fractional index means a root. Always apply the power to every part inside a bracket.", ['×: add indices', '÷: subtract indices', '(aᵐ)ⁿ: multiply', 'a⁰ = 1, a⁻ⁿ = 1/aⁿ', 'a^(1/2) = √a'])
  ]);

  /* ---- Standard form with negative powers ---- */
  N('How do you write numbers in standard form, including small numbers?', 'how to write very large and very small numbers in standard form, and convert back.', [
    SC('Standard form', 'Start with the basics', [
      S("Scientists work with huge numbers, like the distance to the sun, and tiny numbers, like the width of a hair. Writing all the zeros is slow, and easy to get wrong. Standard form is a short way to write them.", E('150,000,000 km', 'b') + E('0.00007 m', 'b')),
      S("A number in standard form looks like this. A number between 1 and 10, times 10 to a power. The first part must be at least 1, and less than 10. The power of 10 is a whole number, which can be positive or negative.", E('a × 10ⁿ', 'g') + V.rule('1 ≤ a < 10, and n is a whole number'))
    ]),
    SC('Powers of ten', 'Why it works', [
      S("Look at the powers of 10. 10 to the one is 10. 10 squared is 100. 10 cubed is 1,000. Each time, one more 0.", E('10¹ = 10') + E('10² = 100') + E('10³ = 1,000')),
      S("Now go downwards. 10 to the 0 is 1. 10 to the negative 1 is 1/10, 0.1. 10 to the negative 2 is 0.01. Each time, we divide by 10, and the decimal point moves 1 place left.", E('10⁰ = 1') + E('10⁻¹ = 0.1') + E('10⁻² = 0.01'))
    ]),
    SC('Large numbers', 'Example 1: 5,600,000', [
      S("Write 5 million, 600,000 in standard form. First, find the number between 1 and 10. Put the decimal point after the first digit. 5.6.", E('5.6')),
      S("Now count how many places the decimal point moved. In 5 million 600,000, the point started at the end. It moved 6 places to the left to get to 5.6. So the power is 6.", E('5,600,000 → 5.6 × 10⁶') + g('5.6 × 10⁶'))
    ]),
    SC('Small numbers', 'Example 2: 0.000032', [
      S("Now a small number. Write 0.000032 in standard form. Again find the number between 1 and 10. That is 3.2.", E('3.2')),
      S("This time the decimal point had to move to the right, 5 places, to get from the original to 3.2. When the number is small, the power is negative. So the power is negative 5.", E('0.000032 → 3.2 × 10⁻⁵') + g('3.2 × 10⁻⁵')),
      S("Here is a quick check. Is the number big or small? If it is bigger than 10, the power is positive. If it is smaller than 1, the power is negative.", V.cols([V.card('Big number: positive power', 'g', true), V.card('Small number: negative power', 'b', true)], 2))
    ]),
    SC('Converting back', 'Example 3: to an ordinary number', [
      S("Now the other way. Write 6.2 times 10 to the negative 3 as an ordinary number. The power is negative 3. So move the decimal point 3 places to the left. 6.2 becomes 0.0062.", E('6.2 × 10⁻³ = 0.0062', 'g')),
      S("And 4.8 times 10 to the 5. Move the point 5 places to the right. 4.8 becomes 480,000.", E('4.8 × 10⁵ = 480,000', 'g'))
    ]),
    SC('Comparing sizes', 'Example 4: which is bigger?', [
      S("Which is bigger, 3 times 10 to the negative 5, or 8 times 10 to the negative 6? Look at the powers first. Negative 5 is bigger than negative 6. So the first number is bigger.", E('3 × 10⁻⁵   or   8 × 10⁻⁶ ?')),
      S("Check by writing them out. 3 times 10 to the negative 5 is 0.00003. 8 times 10 to the negative 6 is 0.000008. The first has the larger digit sooner. So 3 times 10 to the negative 5 is bigger.", g('3 × 10⁻⁵ is bigger'))
    ]),
    SC('Not quite standard', 'Example 5: fixing the front', [
      S("What about 45 times 10 to the 4? It looks like standard form, but 45 is not between 1 and 10. Fix it. 45 is 4.5 times 10. So 4.5 times 10, times 10 to the 4. That is 4.5 times 10 to the 5.", E('45 × 10⁴ = 4.5 × 10 × 10⁴') + g('= 4.5 × 10⁵')),
      S("And 0.6 times 10 to the 3. 0.6 is 6 times 10 to the negative 1. So 6 times 10 to the negative 1, times 10 to the 3. 6 times 10 squared.", E('0.6 × 10³ = 6 × 10²', 'g'))
    ]),
    SC('Watch out!', 'Three common mistakes', [
      S("Mistake one: the first number is not between 1 and 10. 12 times 10 to the 3 is not in standard form.", r('12 × 10³  ✗') + g('1.2 × 10⁴  ✓')),
      S("Mistake two: using a positive power for a small number. 0.004 is 4 times 10 to the negative 3.", r('4 × 10³  ✗') + g('4 × 10⁻³  ✓')),
      S("Mistake three: miscounting the places. Count carefully, 1 place at a time, from the original decimal point.", V.rule('Count the places the point moves.'))
    ]),
    SC('In real life', 'Science', [
      S("The distance from the Earth to the Sun is about 150 million kilometres. In standard form, 1.5 times 10 to the 8. A red blood cell is about 0.00007 metres across. In standard form, 7 times 10 to the negative 5.", E('1.5 × 10⁸ km') + E('7 × 10⁻⁵ m'))
    ]),
    L.turn("Your turn! Number one. Write 340,000 in standard form. Pause and try it.", E('340,000'), "3.4. The point moves 5 places. 3.4 times 10 to the 5.", g('3.4 × 10⁵')),
    L.turn("Your turn! Number two. Write 0.00008 in standard form. Pause and try it.", E('0.00008'), "8. The point moves 5 places to the right. A small number, so a negative power. 8 times 10 to the negative 5.", g('8 × 10⁻⁵')),
    L.turn("Your turn! Number three. Write 2.5 times 10 to the negative 2 as an ordinary number. Pause and try it.", E('2.5 × 10⁻²'), "Move the point 2 places left. 0.025.", g('0.025')),
    L.rec('How do you write numbers in standard form, including small numbers?', "Standard form is a number between 1 and 10, times a power of 10. Big numbers have a positive power. Small numbers have a negative power. The power counts how many places the decimal point moves. To convert back, move the point the other way. Always check the front number is at least 1 and less than 10.", ['a × 10ⁿ with 1 ≤ a < 10', 'Big: n positive', 'Small: n negative', 'Count the places the point moves'])
  ]);

  /* ---- Multiplying and dividing in standard form ---- */
  N('How do you multiply and divide numbers in standard form?', 'how to add, multiply and divide numbers written in standard form.', [
    SC('Calculating', 'Start with the basics', [
      S("Numbers in standard form are made of 2 parts. The front number, between 1 and 10. And the power of 10. When we multiply or divide, we deal with each part separately. Numbers with numbers, and powers with powers.", E('(a × 10ᵐ) × (b × 10ⁿ) = (a × b) × 10ᵐ⁺ⁿ', 'g')),
      S("This works because of the laws of indices. When we multiply powers of 10, we add the indices. When we divide powers of 10, we subtract the indices.", V.cols([V.card('× powers: add', 'b', true), V.card('÷ powers: subtract', 'g', true)], 2))
    ]),
    SC('Multiplying', 'Example 1: simple', [
      S("Work out 3 times 10 to the 4, times 2 times 10 to the 5. Multiply the front numbers. 3 times 2 is 6. Add the powers. 4 plus 5 is 9.", E('(3 × 10⁴) × (2 × 10⁵)') + E('3 × 2 = 6') + E('10⁴ × 10⁵ = 10⁹')),
      S("The answer is 6 times 10 to the 9.", g('6 × 10⁹'))
    ]),
    SC('Multiplying', 'Example 2: a tidy-up is needed', [
      S("Now 4 times 10 to the 6, times 5 times 10 to the 3. 4 times 5 is 20. 6 plus 3 is 9. So 20 times 10 to the 9.", E('(4 × 10⁶) × (5 × 10³) = 20 × 10⁹')),
      S("But 20 is not between 1 and 10. So the answer is not yet in standard form. 20 is 2 times 10. So 20 times 10 to the 9 is 2 times 10 to the 10.", g('= 2 × 10¹⁰'))
    ]),
    SC('Dividing', 'Example 3: 8 times 10 to the 7, over 2 times 10 to the three', [
      S("Divide the front numbers. 8 divided by 2 is 4. Subtract the powers. 7 minus 3 is 4. So 4 times 10 to the 4.", E('(8 × 10⁷) ÷ (2 × 10³)') + g('= 4 × 10⁴'))
    ]),
    SC('Negative powers', 'Example 4: small numbers', [
      S("Multiply 6 times 10 to the negative 3, by 3 times 10 to the negative 2. 6 times 3 is 18. Add the powers. Negative 3 plus negative 2 is negative 5. So 18 times 10 to the negative 5.", E('18 × 10⁻⁵')),
      S("18 is 1.8 times 10. So 1.8 times 10, times 10 to the negative 5. That is 1.8 times 10 to the negative 4. Notice that the power went up by 1, from negative 5 to negative 4.", g('= 1.8 × 10⁻⁴'))
    ]),
    SC('Dividing, with a tidy-up', 'Example 5: a smaller front number', [
      S("Divide 2 times 10 to the 6, by 5 times 10 to the 2. 2 divided by 5 is 0.4. 6 minus 2 is 4. So 0.4 times 10 to the 4.", E('0.4 × 10⁴')),
      S("0.4 is not between 1 and 10. It is 4 times 10 to the negative 1. So 4 times 10 to the negative 1, times 10 to the 4. That is 4 times 10 cubed. Notice the power went down by 1.", g('= 4 × 10³'))
    ]),
    SC('Adding', 'Example 6: a different method', [
      S("Adding is different. 3 times 10 to the 5, plus 4 times 10 to the 4. The powers are not the same, so we cannot just add the front numbers. The easiest way is to write them as ordinary numbers. 300,000, plus 40,000, is 340,000.", E('300,000 + 40,000 = 340,000')),
      S("In standard form, that is 3.4 times 10 to the 5.", g('3.4 × 10⁵')),
      S("Another way is to give them the same power. 4 times 10 to the 4 is 0.4 times 10 to the 5. Then 3 plus 0.4 is 3.4. Same answer.", E('3 + 0.4 = 3.4'))
    ]),
    SC('Watch out!', 'Three common mistakes', [
      S("Mistake one: multiplying the powers. We add the powers when multiplying powers of 10.", r('10⁴ × 10⁵ = 10²⁰  ✗') + g('10⁴ × 10⁵ = 10⁹  ✓')),
      S("Mistake two: forgetting to tidy up. If the front number is not between 1 and 10 after calculating, fix it, and change the power.", V.rule('Check the front number at the end.')),
      S("Mistake three: adding powers when adding numbers. For addition, the powers must be matched first. We do not add the powers.", r('10⁵ + 10⁴ = 10⁹  ✗'))
    ]),
    SC('In real life', 'Light and distance', [
      S("Light travels at about 3 times 10 to the 8 metres per second. How far does it go in 500 seconds, which is 5 times 10 squared? Multiply. 3 times 5 is 15. 8 plus 2 is 10. 15 times 10 to the 10, which is 1.5 times 10 to the 11 metres.", E('(3 × 10⁸) × (5 × 10²) = 15 × 10¹⁰') + g('= 1.5 × 10¹¹ m'))
    ]),
    L.turn("Your turn! Number one. Work out 2 times 10 to the 3, times 4 times 10 to the 5. Pause and try it.", E('(2 × 10³)(4 × 10⁵)'), "2 times 4 is 8. 3 plus 5 is 8. 8 times 10 to the 8.", g('8 × 10⁸')),
    L.turn("Your turn! Number two. Work out 6 times 10 to the 8, divided by 3 times 10 to the 2. Pause and try it.", E('(6 × 10⁸) ÷ (3 × 10²)'), "6 divided by 3 is 2. 8 minus 2 is 6. 2 times 10 to the 6.", g('2 × 10⁶')),
    L.turn("Your turn! Number three. Work out 5 times 10 to the 4, times 6 times 10 to the 3. Give it in standard form. Pause and try it.", E('(5 × 10⁴)(6 × 10³)'), "30 times 10 to the 7. 30 is 3 times 10. So 3 times 10 to the 8.", g('3 × 10⁸')),
    L.rec('How do you multiply and divide numbers in standard form?', "To multiply, multiply the front numbers and add the powers of 10. To divide, divide the front numbers and subtract the powers. Then check the front number is still between 1 and 10, and tidy up if it is not. To add or subtract, make the powers the same first, or write the numbers out in full.", ['× : multiply fronts, add powers', '÷ : divide fronts, subtract powers', 'Tidy the front number', '+ and −: match the powers first'])
  ]);

  /* ---- Rounding and bounds ---- */
  N('How do you work with rounding and upper and lower bounds?', 'how to find the lower and upper bounds of rounded numbers and use tolerance.', [
    SC('Bounds', 'Start with the basics', [
      S("Suppose a bag of flour is labelled 500 grams. Is it exactly 500? Probably not. It might have been rounded. The real mass could be a little more, or a little less. Bounds tell us the smallest and largest the real value could be.", V.cols([V.card('Lower bound: smallest possible', 'b', true), V.card('Upper bound: largest possible', 'g', true)], 2)),
      S("A rounded number covers a range of real values. If a length is 3.4, rounded to 1 decimal place, the real length is anywhere from 3.35 up to, but not including, 3.45.", E('3.35 ≤ length < 3.45', 'g'))
    ]),
    SC('Finding bounds', 'Example 1: 1 decimal place', [
      S("A length is 3.4 centimetres, to 1 decimal place. Here is the method. Find the rounding unit. It is 0.1. Half of that is 0.05. Take it away to get the lower bound. Add it to get the upper bound.", E('Unit = 0.1, half = 0.05')),
      S("3.4 minus 0.05 is 3.35. 3.4 plus 0.05 is 3.45.", g('Lower 3.35, upper 3.45'))
    ]),
    SC('Finding bounds', 'Example 2: nearest 10', [
      S("A crowd is 80, to the nearest 10. The rounding unit is 10. Half is 5. 80 minus 5 is 75. 80 plus 5 is 85.", E('75 ≤ crowd < 85', 'g')),
      S("Be careful with the upper end. 85 itself would round up to 90. So the real number is less than 85. We still call 85 the upper bound.", V.rule('Upper bound: not quite reached.'))
    ]),
    SC('Finding bounds', 'Example 3: nearest whole number', [
      S("A distance is 12 kilometres, to the nearest whole number. The unit is 1. Half is 0.5. The bounds are 11.5 and 12.5.", g('11.5 ≤ d < 12.5'))
    ]),
    SC('Tolerance', 'Example 4: plus or minus', [
      S("Manufacturers use tolerance. A pipe is 250 millimetres, plus or minus 5. This means it can be up to 5 millimetres too long or too short. The range is 245 to 255.", E('250 ± 5 mm') + g('245 to 255 mm')),
      S("A pipe measuring 258 millimetres is outside the tolerance. It is rejected.", r('258 > 255  ✗ rejected'))
    ]),
    SC('Calculations', 'Example 5: the largest area', [
      S("A rectangle is 8 centimetres long and 5 wide, both to the nearest centimetre. What is the largest possible area? To make the area as large as possible, use the largest bounds. Length up to 8.5. Width up to 5.5.", E('Max: 8.5 × 5.5')),
      S("8.5 times 5.5 is 46.75 square centimetres.", g('Max area = 46.75 cm²')),
      S("For the smallest area, use the smallest bounds. 7.5 times 4.5 is 33.75.", g('Min area = 33.75 cm²'))
    ]),
    SC('Calculations', 'Example 6: dividing', [
      S("A speed is distance over time. A distance is 100 metres and a time is 10 seconds, both to the nearest whole number. For the largest speed, use the biggest distance and the smallest time. 100.5 over 9.5. For the smallest speed, use the smallest distance over the biggest time.", E('Max speed = 100.5 ÷ 9.5') + E('Min speed = 99.5 ÷ 10.5')),
      S("This is the key idea. To make a division as big as possible, make the top as big as possible, and the bottom as small as possible.", V.rule('Max ÷: biggest ÷ smallest.'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Rounding the bound the wrong way. A length is 7 centimetres, to the nearest centimetre. Wrong: the upper bound is 7.4. The bounds are half a unit either side. The lower bound is 6.5 and the upper bound is 7.5.", r('upper bound = 7.4  ✗') + g('upper bound = 7.5  ✓')),
      S("Mistake two. Using lower bounds for everything. A rectangle is 6 by 4, each to the nearest unit. Wrong: for the greatest area, use the lower bounds, 5.5 times 3.5, 19.25. The greatest area needs both upper bounds. 6.5 times 4.5, 29.25.", r('5.5 × 3.5 = 19.25 (greatest)  ✗') + g('6.5 × 4.5 = 29.25  ✓')),
      S("Mistake three. Using the wrong bounds for a division. The greatest value of 12 divided by 4, each to the nearest whole number. Wrong: upper over upper, 12.5 over 4.5, 2.78. To make a fraction as big as possible, make the top as big as possible and the bottom as small as possible. 12.5 over 3.5, 3.57.", r('12.5 ÷ 4.5 ≈ 2.78  ✗') + g('12.5 ÷ 3.5 ≈ 3.57  ✓'))
    ]),
    SC('In real life', 'Weighing', [
      S("A parcel weighs 2.3 kilograms, to 1 decimal place. A courier charges extra above 2.4 kilograms. Could the parcel really be over? The upper bound is 2.35. That is less than 2.4. So no extra charge.", E('Upper bound 2.35 < 2.4') + g('No extra charge'))
    ]),
    L.turn("Your turn! Number one. A mass is 17 kilograms, to the nearest kilogram. What are the lower and upper bounds? Pause and try it.", E('17 kg'), "Half of 1 is 0.5. 16.5 and 17.5.", g('16.5 and 17.5')),
    L.turn("Your turn! Number two. A time is 6.2 seconds, to 1 decimal place. What is the lower bound? Pause and try it.", E('6.2 s'), "Half of 0.1 is 0.05. 6.2 minus 0.05. 6.15.", g('6.15 s')),
    L.turn("Your turn! Number three. A square has sides of 10 centimetres, to the nearest centimetre. What is the largest possible area? Pause and try it.", E('10.5 × 10.5'), "The upper bound of a side is 10.5. 10.5 squared is 110.25.", g('110.25 cm²')),
    L.rec('How do you work with rounding and upper and lower bounds?', "A rounded number could be anywhere within half a rounding unit either side. Subtract half a unit for the lower bound, and add half a unit for the upper bound. Tolerance is written as plus or minus. For calculations, think which bounds make the answer as large or as small as possible.", ['Half the rounding unit', 'lower ≤ value < upper', 'Tolerance: ± range', 'Max ÷: biggest ÷ smallest'])
  ]);

  /* ---- Rational and irrational numbers ---- */
  N('What are rational and irrational numbers?', 'how to tell rational numbers from irrational numbers, and recognise exact values like surds and pi.', [
    SC('Kinds of number', 'Start with the basics', [
      S("Numbers come in families. Natural numbers are the counting numbers, 1, 2, 3. Integers include 0 and the negatives. Now we meet 2 bigger families. Rational and irrational numbers.", V.list(['Natural: 1, 2, 3 …', 'Integers: … −1, 0, 1 …'])),
      S("A rational number is any number that can be written as a fraction, with a whole number on top and a whole number on the bottom. The word comes from ratio. For example, 1/2, 3/4, and even 4, which is 4 over 1.", E('½, ¾, 4 = 4/1', 'g'))
    ]),
    SC('Decimals', 'Example 1: which decimals are rational?', [
      S("Decimals that stop, like 0.75, are rational. 0.75 is 75 over 100, which is 3/4. Decimals that repeat forever, like 0.333, are rational too. That is 1/3.", E('0.75 = 3/4') + E('0.333… = 1/3')),
      S("So a decimal is rational if it stops, or repeats in a pattern.", V.rule('Stops or repeats: rational.'))
    ]),
    SC('Irrational numbers', 'Example 2: no fraction', [
      S("An irrational number cannot be written as a fraction. As a decimal, it goes on forever, and never repeats. The most famous example is pi. 3.14159 and so on, with no pattern.", E('π = 3.14159265…', 'b')),
      S("Another example is the square root of 2. 1.41421 and so on. It cannot be written exactly as a fraction. This is why we keep it as root 2.", E('√2 = 1.41421356…', 'b'))
    ]),
    SC('Square roots', 'Example 3: sorting roots', [
      S("Is the square root of 16 rational? 16 is a perfect square. The square root is 4. 4 is a whole number, so it is rational. What about the square root of 7? 7 is not a perfect square. Its root goes on forever. So it is irrational.", E('√16 = 4  → rational', 'g') + E('√7 = 2.6457…  → irrational', 'b')),
      S("The rule is simple. The square root of a perfect square is rational. The square root of any other whole number is irrational.", V.rule('Root of a perfect square: rational.'))
    ]),
    SC('Combining', 'Example 4: sums and products', [
      S("What happens when we combine them? A rational number plus a rational number is always rational. A rational number times an irrational number, like 3 times root 2, is irrational. But careful. Root 2 times root 2 is 2. 2 is rational.", E('3 × √2 → irrational') + E('√2 × √2 = 2 → rational', 'g')),
      S("And pi plus 3 is still irrational. Adding a whole number does not make the endless decimal stop.", E('π + 3 → irrational'))
    ]),
    SC('Exact answers', 'Example 5: why we leave answers as pi or root', [
      S("A circle has radius 5. Its area is pi times 5 squared. That is 25 pi. This is the exact answer. If we write 78.5, we have rounded. Exact answers keep pi or the root in the answer.", E('A = 25π', 'g') + V.rule('Exact: leave it as π or a surd.'))
    ]),
    SC('Watch out!', 'Three common mistakes', [
      S("Mistake one: thinking every decimal that goes on forever is irrational. 0.333 repeating is rational. It is 1/3.", r('0.333… is irrational  ✗') + g('0.333… = 1/3 is rational  ✓')),
      S("Mistake two: thinking all square roots are irrational. The square root of 9 is 3, which is rational.", r('√9 irrational  ✗') + g('√9 = 3 rational  ✓')),
      S("Mistake three: thinking 22 over 7 is pi. It is only a close approximation. It is a fraction, so it is rational, but pi is not.", V.rule('22/7 ≈ π, but ≠ π'))
    ]),
    SC('In real life', 'Measuring', [
      S("A square with sides of 1 metre has a diagonal of root 2 metres. This length is irrational. No matter how finely we measure, we can never write its exact length as a fraction. We can only get closer.", V.note('The diagonal of a unit square is irrational'))
    ]),
    L.turn("Your turn! Number one. Is 0.6 rational or irrational? Pause and think.", E('0.6'), "It is 6/10, which is 3/5. It is a fraction, so it is rational.", g('Rational')),
    L.turn("Your turn! Number two. Is the square root of 25 rational or irrational? Pause and think.", E('√25'), "The root of 25 is 5. That is rational.", g('Rational')),
    L.turn("Your turn! Number three. Is the square root of 11 rational or irrational? Pause and think.", E('√11'), "11 is not a perfect square. So it is irrational.", g('Irrational')),
    L.rec('What are rational and irrational numbers?', "A rational number can be written as a fraction. Its decimal stops or repeats. An irrational number cannot be written as a fraction, and its decimal goes on forever without repeating. Pi and the square roots of non-square numbers are irrational. Leave exact answers in terms of pi or a surd.", ['Rational: a fraction', 'Decimal stops or repeats', 'Irrational: never repeats', 'π and √2 are irrational'])
  ]);

  /* ---- Estimating ---- */
  N('How do you estimate by rounding to one significant figure?', 'how to round to 1 significant figure and use it to estimate calculations.', [
    SC('Estimating', 'Start with the basics', [
      S("Before you use a calculator, it is wise to have an idea of the answer. That is called estimating. If the calculator says 4,000, and your estimate was 40, you know there is a mistake.", V.rule('Estimate first, then check the answer is sensible.')),
      S("To estimate, we round each number to 1 significant figure. A significant figure is a digit that matters. The first significant figure is the first digit that is not 0. It is the digit with the biggest value.", E('4,872 → 5,000', 'g'))
    ]),
    SC('One significant figure', 'Example 1: rounding', [
      S("Round 4,000, 872 to 1 significant figure. The first significant figure is the 4, in the thousands place. Look at the next digit, an 8. It is 5 or more, so round up. 5,000.", E('4,872 → 5,000')),
      S("Round 0.00368. The first digit that is not 0 is the three. Look at the next digit, a 6. Round up. 0.004.", E('0.00368 → 0.004')),
      S("Round 63. The 6 is in the tens. The next digit is 3, so we round down. 60.", E('63 → 60'))
    ]),
    SC('Estimating', 'Example 2: a product', [
      S("Estimate 48.2 times 19.8. Round each to 1 significant figure. 50, and 20. Then multiply. 50 times 20 is 1,000.", E('48.2 × 19.8') + E('≈ 50 × 20 = 1,000', 'g')),
      S("The exact answer is 954.36. Our estimate of 1,000 is close. That is just what an estimate should be.", E('Exact: 954.36'))
    ]),
    SC('Estimating', 'Example 3: a division', [
      S("Estimate 398 divided by 0.198. Round to 1 significant figure. 400, and 0.2. Divide. 400 divided by 0.2. Dividing by 0.2 is the same as multiplying by 5. 2,000.", E('398 ÷ 0.198') + E('≈ 400 ÷ 0.2 = 2,000', 'g')),
      S("Dividing by a number smaller than 1 makes the answer bigger. Always check this makes sense.", V.rule('÷ by less than 1: the answer grows.'))
    ]),
    SC('Estimating', 'Example 4: powers and roots', [
      S("Estimate 8.8 squared, plus the square root of 81.5. Round to 9, and 81. 9 squared is 81. The square root of 81 is 9. 81 plus 9 is 90.", E('8.8² + √81.5') + E('≈ 9² + √81 = 81 + 9 = 90', 'g')),
      S("When you round for a square root, choose a nearby perfect square. That keeps the sum easy.", V.rule('Roots: pick a nearby square number.'))
    ]),
    SC('Estimating', 'Example 5: a fraction', [
      S("Estimate 302 times 98.8, divided by 5.1. Round to 300, 100, and 5. 300 times 100 is 30,000. Divided by 5 is 6,000.", E('(302 × 98.8) ÷ 5.1') + E('≈ (300 × 100) ÷ 5 = 6,000', 'g'))
    ]),
    SC('Over or under?', 'Example 6: is the estimate too big or too small?', [
      S("Sometimes we are asked if the estimate is bigger or smaller than the real answer. In 48 times 19, we rounded 48 up to 50, and 19 up to 20. We rounded both up, and we multiplied, so the estimate is bigger than the real answer.", E('Both rounded up, so the estimate is an over-estimate', 'g')),
      S("But for a division, rounding the top up makes the answer bigger, while rounding the bottom up makes the answer smaller. Think about each number.", V.rule('Think about each number separately.'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Rounding a small number wrongly. Round 0.0386 to 1 significant figure. Wrong: 0.03. The next digit is an 8, so round up. 0.04.", r('0.0386 ≈ 0.03  ✗') + g('0.0386 ≈ 0.04  ✓')),
      S("Mistake two. Rounding to the wrong place. Round 473 to 1 significant figure. Wrong: 470, which keeps 2 digits. 1 significant figure means 1 digit, then zeros. The next digit is a 7, so round up. 500.", r('473 ≈ 470  ✗') + g('473 ≈ 500  ✓')),
      S("Mistake three. Using the exact numbers, not rounded ones. Estimate 4.8 times 19.6, divided by 0.52. Wrong: use a calculator, 180.9, and call it an estimate. An estimate rounds first. 5 times 20, divided by 0.5. 200.", r('exact 180.9, not an estimate  ✗') + g('5 × 20 ÷ 0.5 = 200  ✓'))
    ]),
    SC('In real life', 'Shopping', [
      S("You buy 11 items at £2.99 each. Estimate the cost. Round to 10 items at £3. About £30. The shop assistant says £32.89. Close enough to your estimate, so it seems right.", E('11 × 2.99 ≈ 10 × 3 = 30') + g('Exact: £32.89'))
    ]),
    L.turn("Your turn! Number one. Round 6,000, 105 to 1 significant figure. Pause and try it.", E('6,105'), "The first digit is 6. The next digit is 1. Round down. 6,000.", g('6,000')),
    L.turn("Your turn! Number two. Estimate 51.2 times 9.8. Pause and try it.", E('51.2 × 9.8'), "50 times 10. 500.", g('500')),
    L.turn("Your turn! Number three. Estimate 610 divided by 0.3. Pause and try it.", E('610 ÷ 0.3'), "600 divided by 0.3. That is 2,000.", g('2,000')),
    L.rec('How do you estimate by rounding to one significant figure?', "Round every number to 1 significant figure. The first significant figure is the first digit that is not 0. Then do the calculation with the easy numbers. For roots, choose a nearby perfect square. Check that the real answer is close to your estimate.", ['1 s.f.: first non-0 digit', 'Round, then calculate', 'Roots: nearby square number', 'Check the answer is sensible'])
  ]);

  /* ---- Reverse percentages ---- */
  N('How do you work out reverse percentages?', 'how to find the original amount when you know the amount after a percentage change.', [
    SC('Reverse percentages', 'Start with the basics', [
      S("Sometimes we know the price after a change, and want to know what it was before. For example, a coat is in a sale at £80, after 20% was taken off. What was the original price? This is a reverse percentage problem.", E('Sale price £80 after 20% off. Original = ?', 'b')),
      S("The most common mistake is to add 20% to 80. That does not work. The 20% was taken off the original price, not off the 80. We must work backwards from the original.", V.rule('The percentage is of the original, not of the new price.'))
    ]),
    SC('The method', 'Example 1: 20% off', [
      S("Think of the original price as 100%. After 20% off, we have 80% left. So the sale price, £80, is 80% of the original.", E('100% − 20% = 80%') + E('80% of original = £80')),
      S("Now find 1%. Divide by 80. £80 divided by 80 is £1. So 1% is £1. The original is 100%. That is £100.", E('1% = 80 ÷ 80 = £1') + g('100% = £100'))
    ]),
    SC('The multiplier method', 'Example 2: the same problem, quicker', [
      S("There is a quicker way. The sale price is the original times 0.8. To go backwards, divide by 0.8. 80 divided by 0.8 is 100.", E('Original × 0.8 = 80') + g('Original = 80 ÷ 0.8 = £100')),
      S("Reverse percentages always means divide by the multiplier.", V.rule('Going back: divide by the multiplier.'))
    ]),
    SC('After an increase', 'Example 3: a price rise', [
      S("A bike costs £270 after a 10% increase. What was the price before? After an increase of 10%, the multiplier is 1.1. Divide by 1.1.", E('Multiplier = 1.1') + E('270 ÷ 1.1 = 245.45…')),
      S("270 divided by 1.1 is £245.45. Check. 2 hundred and 40-5 45 times 1.1 is 270. It works.", g('≈ £245.45'))
    ]),
    SC('With VAT', 'Example 4: taking off VAT', [
      S("A laptop costs £720 including 20% VAT. What is the price before VAT? Including VAT means the price was multiplied by 1.2. Divide by 1.2.", E('720 ÷ 1.2') + g('= £600')),
      S("Check. 20% of 600 is 120. 600 plus 120 is 720.", E('600 + 120 = 720 ✓'))
    ]),
    SC('A decrease again', 'Example 5: a population', [
      S("A population fell by 15%, to 17,000. What was it before? After a fall of 15%, the multiplier is 0.85. Divide. 17,000 divided by 0.85 is 20,000.", E('17,000 ÷ 0.85') + g('= 20,000'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Taking the percentage off the sale price. A coat costs £60 after a 20% discount. Wrong: 20% of 60 is 12, so the original was 72. The £60 is 80% of the original. Divide by 0.8. £75.", r('60 + 12 = 72  ✗') + g('60 ÷ 0.8 = 75  ✓')),
      S("Mistake two. Multiplying instead of dividing. A price is £120 after a 20% increase. Wrong: 1 20 times 1.2, 144. That would be a bigger original price, which cannot be right. Divide by 1.2. £100.", r('120 × 1.2 = 144  ✗') + g('120 ÷ 1.2 = 100  ✓')),
      S("Mistake three. Using the wrong multiplier. After a 15% decrease the price is £68. Wrong: divide by 0.15. The multiplier for a 15% decrease is 0.85. 68 divided by 0.85 is £80.", r('68 ÷ 0.15 ≈ 453  ✗') + g('68 ÷ 0.85 = 80  ✓'))
    ]),
    SC('In real life', 'Sales', [
      S("A pair of trainers is reduced by 30% to £56. What was the original price? The multiplier is 0.7. 56 divided by 0.7 is £80. A real saving of £24.", g('56 ÷ 0.7 = £80'))
    ]),
    L.turn("Your turn! Number one. After a 25% discount, a jacket costs £45. What was the original price? Pause and try it.", E('45 ÷ 0.75'), "The multiplier is 0.75. 45 divided by 0.75 is £60.", g('£60')),
    L.turn("Your turn! Number two. A salary is £33,000 after a 10% rise. What was it before? Pause and try it.", E('33,000 ÷ 1.1'), "The multiplier is 1.1. 33,000 divided by 1.1 is £30,000.", g('£30,000')),
    L.turn("Your turn! Number three. A bill is £180 including 20% VAT. What is the price without VAT? Pause and try it.", E('180 ÷ 1.2'), "180 divided by 1.2 is £150.", g('£150')),
    L.rec('How do you work out reverse percentages?', "The percentage is always taken from the original amount. Write the multiplier for the change, 1 plus the rate for an increase, or 1 minus the rate for a decrease. To find the original, divide the new amount by the multiplier. Check by multiplying back.", ['Find the multiplier', 'Original = new ÷ multiplier', 'Never add the percentage back', 'Check by multiplying'])
  ]);

  /* ---- Repeated percentage change ---- */
  N('How do you work with repeated percentage change?', 'how to apply a percentage change more than once using powers of a multiplier.', [
    SC('Repeated change', 'Start with the basics', [
      S("Prices can rise by the same percentage year after year. A town can grow by 2% every year. When a percentage change happens again and again, we call it repeated percentage change.", V.rule('Each change is on the new amount.')),
      S("Here is the key idea. The second change is a percentage of the new amount, not the original. So you cannot just add the percentages together. 2 increases of 10% are not a 20% increase.", E('10% then 10% ≠ 20%', 'r'))
    ]),
    SC('Year by year', 'Example 1: £500 grows at 10% a year', [
      S("Let's see it step by step. £500 goes up by 10%. The multiplier is 1.1. 500 times 1.1 is £550.", E('500 × 1.1 = 550')),
      S("The next year, we increase the new amount. 550 times 1.1 is 605.", E('550 × 1.1 = 605')),
      S("After 2 years, the total is £605. That is an increase of £105. A single 20% increase would only have given 600. So the repeated change is bigger.", g('£605, not £600'))
    ]),
    SC('Using a power', 'Example 2: a shortcut', [
      S("We multiplied by 1.1 twice. That is the same as multiplying by 1.1 squared. 1.1 squared is 1.21. So 500 times 1.21. 605.", E('500 × 1.1² = 500 × 1.21') + g('= £605')),
      S("For 3 years, use the power 3. For 10 years, use the power 10. The number of changes is the power.", V.rule('n changes: multiplier to the power n.'))
    ]),
    SC('Decreases', 'Example 3: a car loses value', [
      S("A car costs £12,000. It loses 15% of its value each year. What is it worth after 3 years? The multiplier is 0.85. The power is 3.", E('12,000 × 0.85³')),
      S("0.85 cubed is about 0.614. Times 12,000 is about 7,000, £370, to the nearest £10.", g('≈ £7,370'))
    ]),
    SC('Different changes', 'Example 4: an increase then a decrease', [
      S("What if the changes are different? A price rises by 20%, then falls by 20%. Does it return to the start? The multipliers are 1.2, and 0.8. Multiply them. 1.2 times 0.8 is 0.96.", E('1.2 × 0.8 = 0.96')),
      S("0.96 means 96%. The price is 4% lower than the start. It does not return to the original, because each change is on a different amount.", g('Overall: 4% decrease'))
    ]),
    SC('Overall change', 'Example 5: finding the overall percentage', [
      S("2 years of growth of 5%. What is the overall percentage increase? 1.05 squared is 1.1025. That is 110.25% of the original. So the overall increase is 10.25%.", E('1.05² = 1.1025') + g('Overall: 10.25% increase'))
    ]),
    SC('Watch out!', 'Three common mistakes', [
      S("Mistake one: adding the percentages. 3 years at 10% is not 30%.", r('3 × 10% = 30%  ✗') + g('1.1³ = 1.331 → 33.1%  ✓')),
      S("Mistake two: multiplying by the number of years. Use a power.", r('500 × 1.1 × 3  ✗') + g('500 × 1.1³  ✓')),
      S("Mistake three: using the rate as the multiplier. For a 10% rise, the multiplier is 1.1, not 0.1.", r('× 0.1  ✗') + g('× 1.1  ✓'))
    ]),
    SC('In real life', 'Prices and inflation', [
      S("When prices rise by 3% each year, in 10 years, the same basket of shopping costs 1.03 to the power 10 times as much. That is about 1.34. A basket costing £100 today would cost about £134 in 10 years.", g('1.03¹⁰ ≈ 1.34'))
    ]),
    L.turn("Your turn! Number one. A bike is worth £200, and loses 10% a year. What is it worth after 2 years? Pause and try it.", E('200 × 0.9²'), "0.9 squared is 0.81. 200 times that is £162.", g('£162')),
    L.turn("Your turn! Number two. A town of 10,000 grows by 2% a year for 3 years. What is the population? Pause and try it.", E('10,000 × 1.02³'), "1.02 cubed is about 1.061. So about 10,000, 612.", g('≈ 10,612')),
    L.turn("Your turn! Number three. A price goes up by 10%, then down by 10%. Is it the same as at the start? Pause and think.", E('1.1 × 0.9'), "1.1 times 0.9 is 0.99. It is 1% lower. Not the same.", g('1% lower')),
    L.rec('How do you work with repeated percentage change?', "In repeated percentage change, each change is on the new amount. Find the multiplier, 1 plus the rate for a rise, or 1 minus the rate for a fall. Use a power for the number of repeats. You cannot add the percentages. Overall change is found by multiplying the multipliers.", ['Each change on the new amount', 'Multiplier to the power n', 'Not the sum of percentages', 'Multiply different multipliers'])
  ]);

  /* ---- Sets of numbers ---- */
  N('How do you describe sets of numbers?', 'how to use set notation and describe sets of numbers such as primes, factors and multiples.', [
    SC('Sets', 'Start with the basics', [
      S("A set is a collection of things. In maths, it is usually a collection of numbers. We write the members of a set between curly brackets, with commas between them. The members are called elements.", E('A = {2, 3, 5, 7}', 'g')),
      S("We often give a set a capital letter as a name. Here A is the set of the first 4 prime numbers. Order does not matter. And a number is only listed once.", V.rule('Order does not matter. No repeats.'))
    ]),
    SC('Notation', 'Example 1: the symbols', [
      S("There are a few symbols. This curly E means is an element of, or belongs to. 5 is an element of A. The same symbol with a line through it means is not an element of. 4 is not an element of A.", E('5 ∈ A') + E('4 ∉ A')),
      S("The number of elements in a set is written like this, with the letter n and the set name in brackets. For A, n of A is 4.", E('n(A) = 4', 'g'))
    ]),
    SC('Describing sets', 'Example 2: 3 ways', [
      S("There are 3 ways to describe a set. List all the members. Describe it in words. Or use a rule. The set of even numbers between 1 and 10 is 2, 4, 6, 8.", E('B = {2, 4, 6, 8}')),
      S("Another set. Multiples of 3, that are less than 20. 3, 6, 9, 12, 15, 18.", E('C = {3, 6, 9, 12, 15, 18}')),
      S("And factors of 12. The numbers that divide exactly into 12. 1, 2, 3, 4, 6, 12.", E('F = {1, 2, 3, 4, 6, 12}'))
    ]),
    SC('Intersection and union', 'Example 3: combining sets', [
      S("Let's combine 2 sets. P is the multiples of 2 up to 10. 2, 4, 6, 8, 10. Q is the multiples of 3 up to 10. 3, 6, 9. The intersection is the elements in both sets. Only 6 is in both.", E('P ∩ Q = {6}', 'g')),
      S("The union is the elements in either set, or both. 2, 3, 4, 6, 8, 9, 10. 6 is only listed once.", E('P ∪ Q = {2, 3, 4, 6, 8, 9, 10}', 'g'))
    ]),
    SC('Types of number', 'Example 4: the big sets', [
      S("Some sets are so important they have their own symbols. The natural numbers, 1, 2, 3 and so on. The integers, which include 0 and the negatives. The rational numbers, which are fractions. And the real numbers, which include everything on the number line.", V.cards(['ℕ: natural', 'ℤ: integers', 'ℚ: rational', 'ℝ: real'], ['b', 'g', 'p', 'b'], true)),
      S("Each set sits inside the next. Every natural number is an integer. Every integer is rational. Every rational number is real.", V.rule('ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ'))
    ]),
    SC('Empty set', 'Example 5: nothing at all', [
      S("A set can have no elements at all. The set of even prime numbers bigger than 2. There are none. We call this the empty set, and write it with an empty pair of brackets, or a circle with a line through it.", E('{ }  or  ∅', 'b')),
      S("Another example. Integers that are both even and odd. None. Empty set.", g('n(∅) = 0'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Calling a fraction an integer. Is 3/4 an integer? Wrong: yes, because it is made from whole numbers. An integer is a whole number, with no fractional part. 3/4 is a rational number, but not an integer.", r('3/4 is an integer  ✗') + g('3/4 is rational, not an integer  ✓')),
      S("Mistake two. Thinking a recurring decimal is irrational. 0.333, recurring. Wrong: it goes on forever, so it is irrational. It equals 1/3, which is a fraction, so it is rational. Irrational numbers like pi never repeat.", r('0.333… is irrational  ✗') + g('0.333… = 1/3, rational  ✓')),
      S("Mistake three. Thinking every square root is irrational. Root 16. Wrong: irrational, because it has a root sign. Root 16 is 4, a whole number, so it is rational. Root 17 is not a whole number, and it is irrational.", r('√16 is irrational  ✗') + g('√16 = 4 rational; √17 irrational  ✓'))
    ]),
    SC('In real life', 'Groups', [
      S("A school has a set of pupils who play football, and a set who play chess. Some play both. The intersection is the pupils who do both. The union is everyone in at least 1 club. Sets help us count people without counting anyone twice.", V.note('Sets keep counting tidy'))
    ]),
    L.turn("Your turn! Number one. Write the set of factors of 10. Pause and try it.", E('Factors of 10'), "1, 2, 5, 10.", g('{1, 2, 5, 10}')),
    L.turn("Your turn! Number two. A is 1, 2, 3, 4. B is 3, 4, 5, 6. Write the intersection. Pause and try it.", E('A ∩ B'), "The elements in both. 3 and 4.", g('{3, 4}')),
    L.turn("Your turn! Number three. Write the union of the same 2 sets. Pause and try it.", E('A ∪ B'), "Everything in either. 1, 2, 3, 4, 5, 6.", g('{1, 2, 3, 4, 5, 6}')),
    L.rec('How do you describe sets of numbers?', "A set is a collection of numbers, written in curly brackets. The symbol for is an element of, and the symbol for is not an element of, say whether a number belongs. The intersection is what 2 sets share. The union is everything in either set. The empty set has no elements.", ['{ } for sets', '∈ and ∉', '∩ in both, ∪ in either', 'n(A) counts elements'])
  ]);

  /* ---- Depreciation ---- */
  N('How do you work out depreciation?', 'how the value of things like cars falls by a percentage each year.', [
    SC('Depreciation', 'Start with the basics', [
      S("Most things you buy are worth less as they get older. A new car loses value the moment it leaves the shop. Phones, computers and furniture do the same. This fall in value is called depreciation.", E('Depreciation: value goes down over time', 'b')),
      S("Usually the value falls by a percentage each year. Not by the same amount of pounds. Each year it falls by a percentage of what it is worth at that time. So the pounds lost get smaller every year.", V.rule('A percentage of the current value each year.'))
    ]),
    SC('One year', 'Example 1: a car', [
      S("A car costs £12,000. It depreciates by 20% in the first year. 20% of 12,000 is 2,400. Take that away. £9,600.", E('20% of 12,000 = 2,400') + g('12,000 − 2,400 = £9,600')),
      S("Or use the multiplier. Losing 20% means keeping 80%. The multiplier is 0.8. 12,000 times 0.8 is 9,600.", E('12,000 × 0.8 = 9,600', 'g'))
    ]),
    SC('Several years', 'Example 2: 3 years at 15%', [
      S("A laptop costs £1,000. It loses 15% each year. What is it worth after 3 years? The multiplier is 0.85. Use a power of 3.", E('1,000 × 0.85³')),
      S("0.85 cubed is 0.614125. Times 1,000 is £614, to the nearest pound.", g('≈ £614'))
    ]),
    SC('Year by year', 'Example 3: a table', [
      S("Let's check with a table. After 1 year, 850. After 2 years, 7 hundred and 20-2 50. After 3 years, £614.13. Notice the amount lost each year gets smaller. 150, then 1 hundred and 20-7 50, then about £108.", V.tbl([['1', '£850.00'], ['2', '£722.50'], ['3', '£614.13']], ['Year', 'Value']))
    ]),
    SC('How much was lost?', 'Example 4: the total depreciation', [
      S("How much value did the laptop lose in 3 years? Subtract. 1,000 minus 614. £386. As a percentage of the original, that is 38.6%.", E('1,000 − 614 = £386') + g('≈ 38.6% in total'))
    ]),
    SC('Straight line', 'Example 5: a different way', [
      S("Some businesses use straight line depreciation. The value falls by the same amount every year. A machine costs 10,000 and loses 1,500 each year. After 4 years, it loses 6,000. It is worth £4,000.", E('10,000 − 4 × 1,500') + g('= £4,000')),
      S("That is not the same as a percentage each year. With a percentage, the loss shrinks each year. Check which method the question asks for.", V.rule('Percentage each year, or fixed amount?'))
    ]),
    SC('Watch out!', 'Three common mistakes', [
      S("Mistake one: adding the percentages. 3 years at 15% is not 45% off.", r('3 × 15% = 45%  ✗') + g('× 0.85³  ✓')),
      S("Mistake two: using 0.15 as the multiplier. For a fall, use 1 minus the rate.", r('× 0.15  ✗') + g('× 0.85  ✓')),
      S("Mistake three: taking the percentage of the original every year. Each year's percentage is of the current value.", V.rule('Each year: new value.'))
    ]),
    SC('In real life', 'Buying second hand', [
      S("Because new cars lose value fastest in the early years, many people buy second-hand. A 3-year-old car is much cheaper than a new 1, but may still be reliable.", V.note('Depreciation is fastest in year one'))
    ]),
    L.turn("Your turn! Number one. A phone costs £800 and loses 30% in the first year. What is it worth? Pause and try it.", E('800 × 0.7'), "The multiplier is 0.7. £560.", g('£560')),
    L.turn("Your turn! Number two. A van costs 20,000 and loses 10% a year. What is it worth after 2 years? Pause and try it.", E('20,000 × 0.9²'), "0.9 squared is 0.81. 16,000, £200.", g('£16,200')),
    L.turn("Your turn! Number three. What multiplier do you use for a 12% fall? Pause and think.", E('?'), "1 minus 0.12. 0.88.", g('0.88')),
    L.rec('How do you work out depreciation?', "Depreciation is a fall in value. Usually it is a percentage of the current value each year. Use a multiplier of 1 minus the rate, raised to the power of the number of years. The amount lost gets smaller each year. If the loss is a fixed amount each year, it is called straight line depreciation.", ['Multiplier: 1 − r', 'Power: number of years', 'Loss shrinks each year', 'Straight line: same amount'])
  ]);

  /* ---- VAT ---- */
  N('How do you calculate prices with VAT?', 'how to add VAT to a price, take it off again, and work with percentages of prices.', [
    SC('VAT', 'Start with the basics', [
      S("VAT stands for value added tax. It is a tax added to the price of most things you buy in the UK. The standard rate is 20%. Some things, like most food and children's clothes, have no VAT.", E('VAT = 20% (standard rate)', 'b')),
      S("The price before VAT is called the net price. The price with VAT added is called the gross price. The price on the shelf is often the gross price.", V.cols([V.card('Net: before VAT', 'b', true), V.card('Gross: with VAT', 'g', true)], 2))
    ]),
    SC('Adding VAT', 'Example 1: the long way', [
      S("A bicycle has a net price of £250. Add 20% VAT. First work out 20% of 250. 10% is 25. So 20% is 50.", E('10% = £25') + E('20% = £50')),
      S("Add it on. 250 plus 50 is £300. That is the gross price.", g('£250 + £50 = £300'))
    ]),
    SC('Adding VAT', 'Example 2: the multiplier way', [
      S("There is a quicker way. Adding 20% means the price becomes 120%. The multiplier is 1.2. 250 times 1.2 is 300.", E('250 × 1.2 = 300', 'g')),
      S("This is much better when you have a calculator, especially for awkward numbers.", V.rule('Add VAT: × 1.2'))
    ]),
    SC('Taking VAT off', 'Example 3: finding the net price', [
      S("A laptop costs £720, including VAT. What was the net price? The gross price is 120% of the net price. So we divide by 1.2. 720 divided by 1.2 is 600.", E('720 ÷ 1.2') + g('Net = £600')),
      S("Notice that the VAT is £120. That is 20% of 600, not 20% of 720.", V.rule('VAT = 20% of the net price.'))
    ]),
    SC('How much VAT?', 'Example 4: the VAT amount', [
      S("The shelf price of a jacket is £90, including VAT. How much of that is VAT? Find the net price. 90 divided by 1.2 is 75. The VAT is 90 minus 75. £15.", E('90 ÷ 1.2 = 75') + g('VAT = £15'))
    ]),
    SC('A bill', 'Example 5: several items', [
      S("A plumber charges £80 for parts and £120 for labour. VAT is added to the total. Net total is £200. 20% is £40. The total bill is £240.", E('(80 + 120) × 1.2') + g('= £240'))
    ]),
    SC('Watch out!', 'Three common mistakes', [
      S("Mistake one: taking 20% off the gross price to find the net. That gives the wrong answer. Divide by 1.2.", r('720 × 0.8 = 576  ✗') + g('720 ÷ 1.2 = 600  ✓')),
      S("Mistake two: forgetting which price is which. Net is before VAT. Gross is after.", V.rule('Net before, gross after.')),
      S("Mistake three: using 20 as the multiplier. 20% is 0.2. Adding it to 1 is 1.2.", r('× 20  ✗') + g('× 1.2  ✓'))
    ]),
    SC('In real life', 'Shop prices', [
      S("A shop advertises a television at £400 plus VAT. The real price you pay is 400 times 1.2, which is £480. Always check if a price includes VAT.", g('£400 + VAT = £480'))
    ]),
    L.turn("Your turn! Number one. Add 20% VAT to a price of £75. Pause and try it.", E('75 × 1.2'), "75 times 1.2 is £90.", g('£90')),
    L.turn("Your turn! Number two. A price with VAT is £180. What is the net price? Pause and try it.", E('180 ÷ 1.2'), "£150.", g('£150')),
    L.turn("Your turn! Number three. How much VAT is in that £180 price? Pause and try it.", E('180 − 150'), "Thirty pounds.", g('£30')),
    L.rec('How do you calculate prices with VAT?', "VAT is a percentage added to the net price to make the gross price. To add 20% VAT, multiply by 1.2. To find the net price from the gross price, divide by 1.2. The VAT amount is the difference between the gross and net prices.", ['Add VAT: × 1.2', 'Remove VAT: ÷ 1.2', 'VAT = gross − net', 'Net before, gross after'])
  ]);

  /* ---- Profit and loss ---- */
  N('How do you work out profit and loss as a percentage?', 'how to find profit, loss, percentage profit and selling prices.', [
    SC('Profit and loss', 'Start with the basics', [
      S("A shop buys things and sells them for a higher price. The price the shop pays is the cost price. The price it sells for is the selling price. The difference is profit, if the selling price is higher. If the selling price is lower, it is a loss.", V.cols([V.card('Profit = selling − cost', 'g', true), V.card('Loss = cost − selling', 'r', true)], 2)),
      S("We often show profit or loss as a percentage. And the golden rule is, the percentage is always of the cost price. It is what the shop paid, not what it sold for.", E('% profit = profit ÷ cost × 100', 'g'))
    ]),
    SC('Finding profit', 'Example 1: a bike', [
      S("A trader buys a bike for £40, and sells it for £52. The profit is 52 minus 40. £12.", E('52 − 40 = £12 profit')),
      S("The percentage profit is 12 divided by 40, times 100. 12 divided by 40 is 0.3. 30%.", g('12 ÷ 40 × 100 = 30%'))
    ]),
    SC('Finding a loss', 'Example 2: a clearance', [
      S("A shop buys a coat for £80 and sells it in a clearance for £60. It is a loss of £20. The percentage loss is 20 divided by 80, times 100. That is 25%.", E('80 − 60 = £20 loss') + g('20 ÷ 80 × 100 = 25% loss'))
    ]),
    SC('Selling price', 'Example 3: a target profit', [
      S("A shop wants a 40% profit on a toy that costs £15. What should the selling price be? The selling price is the cost plus 40%. The multiplier is 1.4. 15 times 1.4 is £21.", E('15 × 1.4') + g('= £21'))
    ]),
    SC('Working backwards', 'Example 4: finding the cost', [
      S("A shirt is sold for £36 at a profit of 20%. What did it cost? The selling price is 120% of the cost. So divide by 1.2. 36 divided by 1.2 is £30.", E('36 ÷ 1.2') + g('Cost = £30')),
      S("Check. 20% of 30 is 6. 30 plus 6 is 36. Correct.", E('30 + 6 = 36 ✓'))
    ]),
    SC('Mark-up', 'Example 5: expenses', [
      S("A cafe buys coffee for 20p a cup and sells it for £2.50. The profit on each cup is £2.30. The percentage profit is 2 30 divided by 0.20. That is 1,000, 150%. A big mark-up. But the cafe has to pay for the machine, the milk, the cups, the rent and the staff, so the real profit is much smaller.", V.note('Costs are more than ingredients'))
    ]),
    SC('Watch out!', 'Three common mistakes', [
      S("Mistake one: dividing by the selling price. Always divide by the cost price.", r('12 ÷ 52  ✗') + g('12 ÷ 40  ✓')),
      S("Mistake two: finding the cost by taking the percentage off the selling price. If the profit is 20% of cost, divide the selling price by 1.2.", r('36 × 0.8  ✗') + g('36 ÷ 1.2  ✓')),
      S("Mistake three: mixing up profit and selling price. Profit is only the difference.", V.rule('Profit = selling − cost.'))
    ]),
    SC('In real life', 'Running a stall', [
      S("At a school fair, you buy cakes for £50 and sell them for 75. Your profit is £25. The percentage profit is 25 over 50, which is 50%. The school keeps the profit.", g('25 ÷ 50 × 100 = 50%'))
    ]),
    L.turn("Your turn! Number one. A cap costs £12 and is sold for 15. What is the percentage profit? Pause and try it.", E('3 ÷ 12 × 100'), "The profit is £3. 3 over 12 is 1/4. 25%.", g('25%')),
    L.turn("Your turn! Number two. A shop adds a 30% profit to a cost of £40. What is the selling price? Pause and try it.", E('40 × 1.3'), "Fifty-two pounds.", g('£52')),
    L.turn("Your turn! Number three. A lamp is sold at a loss of 10%, for £45. What did it cost? Pause and try it.", E('45 ÷ 0.9'), "A loss means the multiplier is 0.9. 45 divided by 0.9 is £50.", g('£50')),
    L.rec('How do you work out profit and loss as a percentage?', "Profit is selling price minus cost price. Loss is cost price minus selling price. A percentage profit or loss is always of the cost price. To find a selling price, multiply the cost by the multiplier. To find the cost, divide the selling price by the multiplier.", ['Profit = selling − cost', '% profit = profit ÷ cost × 100', 'Selling = cost × multiplier', 'Cost = selling ÷ multiplier'])
  ]);

  /* ---- Simple interest ---- */
  N('How do you calculate simple interest?', 'how to work out simple interest and compare it with compound interest.', [
    SC('Interest', 'Start with the basics', [
      S("When you put money in a bank, the bank pays you for using it. That payment is called interest. When you borrow money, you pay interest. The amount you start with is called the principal.", V.cols([V.card('Principal: starting amount', 'b', true), V.card('Interest: the extra', 'g', true)], 2)),
      S("With simple interest, the same amount is paid every year. It is always a percentage of the original principal. The formula is principal times rate times time, divided by 100. We write it as I equals P R T over 100.", E('I = P × R × T ÷ 100', 'g'))
    ]),
    SC('One year', 'Example 1: £800 at 3%', [
      S("You save £800 at 3% simple interest. How much interest in 1 year? 3% of 800. 800 divided by 100 is 8. 8 times 3 is £24.", E('800 × 3 ÷ 100 = £24', 'g'))
    ]),
    SC('Several years', 'Example 2: 5 years', [
      S("The same £800 for 5 years. The interest is the same each year. £24 a year, for 5 years. That is £120.", E('24 × 5 = £120') + g('I = 800 × 3 × 5 ÷ 100 = £120')),
      S("The total in the account is the principal plus the interest. 800 plus 120 is £920.", g('Total = £920'))
    ]),
    SC('Finding the rate', 'Example 3: working backwards', [
      S("A loan of £2,000 costs £300 in interest over 3 years. What is the rate? Use the formula. 300 equals 2,000 times R times 3, over 100. 2,000 times 3 over 100 is 60. So 300 equals 60 R.", E('300 = 2,000 × R × 3 ÷ 100') + E('300 = 60R')),
      S("R is 300 divided by 60. 5. The rate is 5% a year.", g('R = 5%'))
    ]),
    SC('Months', 'Example 4: part of a year', [
      S("Interest for part of a year. A loan of £600 at 4% a year, for 6 months. 6 months is half a year, so T is 0.5. 600 times 4 times 0.5, over 100. That is £12.", E('600 × 4 × 0.5 ÷ 100') + g('= £12'))
    ]),
    SC('Compared with compound', 'Example 5: which is better for savers?', [
      S("Compare simple and compound for £1,000 at 5% for 3 years. Simple interest gives £150, so the total is 1,000, 150. Compound gives 1,000, £157.63. Compound is a bit more, because the interest earns interest.", E('Simple: £1,150') + E('Compound: £1,157.63', 'g'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Forgetting to turn the percentage into a decimal. £200 at 3% for a year. Wrong: 200 times 3, £600. 3% is 0.03. 200 times 0.03 is £6.", r('200 × 3 = £600  ✗') + g('200 × 0.03 = £6  ✓')),
      S("Mistake two. Using 1 year for several years. £500 at 4% for 3 years. Wrong: £20, which is 1 year. 3 years gives 3 times as much. £60.", r('500 × 0.04 = £20  ✗') + g('500 × 0.04 × 3 = £60  ✓')),
      S("Mistake three. Giving only the interest when asked for the total. £1,000 at 2% for 2 years. The interest is £40. Wrong: the account now holds £40. The total includes the original money. £1,040.", r('total = £40  ✗') + g('total = 1000 + 40 = £1040  ✓'))
    ]),
    SC('In real life', 'Short loans', [
      S("Simple interest is often used for short term loans, like borrowing money from a friend or a family member. Because it does not compound, it is easier to work out, and it never surprises you with a bigger bill.", V.note('Simple: the same amount each year'))
    ]),
    L.turn("Your turn! Number one. Find the simple interest on £500 at 4% for 3 years. Pause and try it.", E('500 × 4 × 3 ÷ 100'), "£20 a year. For 3 years. £60.", g('£60')),
    L.turn("Your turn! Number two. What is the total in the account? Pause and try it.", E('500 + 60'), "£560.", g('£560')),
    L.turn("Your turn! Number three. How much simple interest on £2,000 at 3% for 6 months? Pause and try it.", E('2,000 × 3 × 0.5 ÷ 100'), "2,000 times 3 is 6,000. Times 1/2 is 3,000. Divided by 100. £30.", g('£30')),
    L.rec('How do you calculate simple interest?', "Simple interest is the same amount every year, based on the principal. Use I equals P times R times T, over 100. T is the time in years. The total is the principal plus the interest. Compound interest is a little more, because the interest earns interest too.", ['I = PRT ÷ 100', 'Same amount each year', 'Total = P + I', 'Months: fractions of a year'])
  ]);

  /* ---- Take-home pay ---- */
  N('How do you work out take-home pay?', 'how deductions such as income tax, National Insurance and pension come off a salary.', [
    SC('Take-home pay', 'Start with the basics', [
      S("When you get a job, the salary you are promised is called your gross pay. But you do not receive all of it. Some is taken off before it reaches your bank. What you actually receive is called your net pay, or take-home pay.", V.cols([V.card('Gross: before deductions', 'b', true), V.card('Net: take-home pay', 'g', true)], 2)),
      S("The amounts taken off are called deductions. The common ones are income tax, National Insurance and pension contributions. Net pay equals gross pay minus all the deductions.", E('Net = Gross − deductions', 'g'))
    ]),
    SC('Income tax', 'Example 1: tax bands', [
      S("Income tax is worked out in bands. Suppose the first £12,500 is tax free. This is the personal allowance. The next 37,500 is taxed at 20%. Above that, 40%. Remember, each band is charged only on the slice of income inside it.", V.cols([V.card('First £12,500: 0%', 'g', true), V.card('Next £37,500: 20%', 'b', true), V.card('Above: 40%', 'p', true)], 3)),
      S("Someone earns £30,000. Taxable income is 30,000 minus 12,500. That is 17,500. 20% of 17,500 is £3,500 of tax.", E('30,000 − 12,500 = 17,500') + g('20% × 17,500 = £3,500'))
    ]),
    SC('National Insurance', 'Example 2: another deduction', [
      S("National Insurance is another deduction. It pays towards things like the state pension and the NHS. Suppose it is 8% of earnings above 12,500. 8% of 17,500 is £1,400.", E('8% × 17,500') + g('= £1,400'))
    ]),
    SC('Pension', 'Example 3: saving for later', [
      S("Many workers also put a percentage of their pay into a pension. Suppose 5% of gross pay. 5% of 30,000 is £1,500.", E('5% × 30,000') + g('= £1,500'))
    ]),
    SC('Putting it together', 'Example 4: yearly net pay', [
      S("Add up the deductions. 3,500, plus 1,400, plus 1,500. That is £6,400.", E('3,500 + 1,400 + 1,500 = £6,400')),
      S("Net pay is 30,000 minus 6,400. £23,600 a year.", g('Net = £23,600'))
    ]),
    SC('Monthly', 'Example 5: per month', [
      S("Most people are paid monthly. Divide the yearly amount by 12. 23,600 divided by 12 is 1,000, £966.67. About 1,000, £967 a month.", E('23,600 ÷ 12') + g('≈ £1,966.67 a month'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Taxing all the pay. A salary of 28,000, a personal allowance of 12,500, and tax at 20%. Wrong: 20% of 28,000, 5,600. Tax is only paid on the pay above the allowance. 15,500 times 0.2, 3,100.", r('tax = 20% of 28 000 = 5600  ✗') + g('tax = 20% of 15 500 = 3100  ✓')),
      S("Mistake two. Adding the deductions instead of subtracting. Gross pay is £2,000 a month, and the deductions are 500. Wrong: take-home pay is 2,500. Take-home pay is what is left. 1,500.", r('2000 + 500 = 2500  ✗') + g('2000 − 500 = 1500  ✓')),
      S("Mistake three. Mixing yearly and monthly amounts. Yearly tax is 3,100. Wrong: take that off a monthly pay of 2,000. Divide the tax by 12 first. About £258 a month.", r('2000 − 3100 < 0  ✗') + g('3100 ÷ 12 ≈ 258 a month  ✓'))
    ]),
    SC('In real life', 'Reading a payslip', [
      S("A payslip lists the gross pay and each deduction, and then the net pay at the bottom. Learning to check a payslip helps you spot mistakes, and understand where your money goes.", V.note('Gross − deductions = net'))
    ]),
    L.turn("Your turn! Number one. A person earns £24,000. The allowance is 12,500. How much is taxable? Pause and try it.", E('24,000 − 12,500'), "£11,500.", g('£11,500')),
    L.turn("Your turn! Number two. Tax is 20%. How much tax is due? Pause and try it.", E('20% × 11,500'), "£2,300.", g('£2,300')),
    L.turn("Your turn! Number three. Gross pay is £2,000 a month. Deductions total 420. What is the net pay? Pause and try it.", E('2,000 − 420'), "£1,580.", g('£1,580')),
    L.rec('How do you work out take-home pay?', "Gross pay is what you earn before deductions. Net pay is what you take home. Income tax is charged only on income above the personal allowance, band by band. National Insurance and pension contributions are also taken off. Net pay equals gross pay minus every deduction.", ['Gross − deductions = net', 'Tax only above the allowance', 'Tax by bands', 'Yearly ÷ 12 = monthly'])
  ]);

  /* ---- Budgets and a yearly plan ---- */
  N('How do you plan a budget with percentages and a yearly plan?', 'how to share an income between spending areas using percentages and plan across a whole year.', [
    SC('Budgeting', 'Start with the basics', [
      S("A budget is a plan for your money. It shows how much you earn, how much you will spend, and how much you will save. A good budget helps you avoid running out of money before the end of the month.", V.list(['Income: money coming in', 'Expenses: money going out', 'Savings: money kept for later'])),
      S("Often a budget is written as percentages. For example, 50% for needs, 30% for wants and 20% for savings. It is easy to adjust for any size of income.", V.cols([V.card('Needs 50%', 'b', true), V.card('Wants 30%', 'g', true), V.card('Savings 20%', 'p', true)], 3))
    ]),
    SC('Sharing income', 'Example 1: a monthly budget', [
      S("Someone has a monthly income of £2,400. Use 50, 30 and 20. 50% is half. Twelve hundred pounds for needs. 30%. 10% is 240, so 30% is 720. 20% is 480.", E('Needs: £1,200') + E('Wants: £720') + E('Savings: £480', 'g')),
      S("Always check they add up to the income. Twelve hundred, plus 720, plus 480. 20-4 hundred. Correct.", E('1,200 + 720 + 480 = 2,400 ✓'))
    ]),
    SC('Needs in detail', 'Example 2: splitting a category', [
      S("The needs budget of £1,200 covers rent, food and bills. Suppose rent is 1/2 of it. £600. Food is 1/4. 300. The rest is bills. That leaves £300.", E('Rent £600  ·  Food £300  ·  Bills £300'))
    ]),
    SC('A yearly plan', 'Example 3: 12 months', [
      S("A yearly plan multiplies by 12. Saving £480 a month is 480 times 12. 5,000, £760 a year.", E('480 × 12') + g('= £5,760 a year')),
      S("But some bills come once a year, like car insurance or a holiday. We divide these by 12 to see the monthly cost. A £600 insurance bill is £50 a month. Setting that aside each month avoids a nasty surprise.", E('600 ÷ 12 = £50 a month', 'g'))
    ]),
    SC('A shortfall', 'Example 4: when spending is too high', [
      S("Suppose income is £1,800 a month and planned spending is 1,950. The shortfall is £150. Over a year, that is £1,800. A budget helps you see this before it becomes a problem.", E('1,800 − 1,950 = −£150') + r('Shortfall £150 a month'))
    ]),
    SC('Changing the plan', 'Example 5: what if income changes?', [
      S("Income goes up by 10%, from 2,400 to £2,640. With the same percentages, every part of the budget rises by 10%. That is the power of using percentages. Savings go from 480 to 528.", E('2,640 × 20% = £528', 'g'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Percentages that do not add to 100. Rent 40%, food 25, travel 15, savings 10, fun 15. Wrong: it looks fine. Add them. 105%. That is more than the income. Change fun to 10%.", r('40 + 25 + 15 + 10 + 15 = 105%  ✗') + g('… + 10 = 100%  ✓')),
      S("Mistake two. Taking the percentage of the wrong amount. Income is £1,800 a month, and rent is 30%. Wrong: 30% of 1,000, 300. Use the income. 30% of 1,800 is 540.", r('30% of 1000 = 300  ✗') + g('30% of 1800 = 540  ✓')),
      S("Mistake three. Forgetting a yearly cost. A subscription is £12 a month. Wrong: put £12 in the yearly plan. There are 12 months. 12 times 12 is 100 and £44.", r('£12 a year  ✗') + g('12 × 12 = £144 a year  ✓'))
    ]),
    SC('In real life', 'Setting a goal', [
      S("You want to save £600 for a trip in 10 months. 600 divided by 10 is £60 a month. That is your savings target. A budget helps you reach it.", g('600 ÷ 10 = £60 a month'))
    ]),
    L.turn("Your turn! Number one. A monthly income is £1,500. 20% goes to savings. How much? Pause and try it.", E('20% × 1,500'), "£300.", g('£300')),
    L.turn("Your turn! Number two. How much is that saved in a year? Pause and try it.", E('300 × 12'), "£3,600.", g('£3,600')),
    L.turn("Your turn! Number three. An annual bill is £900. How much to set aside each month? Pause and try it.", E('900 ÷ 12'), "£75.", g('£75')),
    L.rec('How do you plan a budget with percentages and a yearly plan?', "A budget shows income, spending and savings. Split the income using percentages, and check the parts add to the whole. For a yearly plan, multiply monthly amounts by 12, and divide annual bills by 12. Compare income with planned spending to find any shortfall.", ['Income, expenses, savings', 'Percentages add to 100%', 'Monthly × 12 = yearly', 'Annual bills ÷ 12'])
  ]);

  /* ---- Cost of credit ---- */
  N('How do you work out the cost of credit and hire purchase?', 'how to compare cash prices with hire purchase and understand credit card balances.', [
    SC('Credit', 'Start with the basics', [
      S("Credit means buying something now and paying for it later. It is useful, but it usually costs more. The extra you pay is the cost of credit. It is important to understand exactly how much extra.", E('Cost of credit = total paid − cash price', 'g')),
      S("2 common ways of using credit are hire purchase and credit cards. We will look at both.", V.cols([V.card('Hire purchase', 'b', true), V.card('Credit card', 'p', true)], 2))
    ]),
    SC('Hire purchase', 'Example 1: deposit and instalments', [
      S("A sofa costs £800 cash. On hire purchase, you pay a deposit of £150, and then 12 monthly payments of £65. The deposit is the first payment. Instalments are the regular payments.", E('Deposit £150') + E('12 × £65')),
      S("Work out the total. 12 times 65 is £780. Add the deposit. £930.", g('150 + 780 = £930'))
    ]),
    SC('Cost of credit', 'Example 2: how much extra?', [
      S("The cash price was 800. The hire purchase total is 930. The cost of credit is the difference. £130 extra.", E('930 − 800') + g('Cost of credit = £130')),
      S("As a percentage of the cash price, that is 130 divided by 800, times 100. About 16%.", E('130 ÷ 800 × 100 ≈ 16%'))
    ]),
    SC('Credit card', 'Example 3: interest on a balance', [
      S("A credit card charges interest on money you owe. Suppose the interest is 2% per month. You owe £500 and pay nothing. After 1 month, you owe 500 times 1.02. £510.", E('500 × 1.02 = 510', 'g')),
      S("After 2 months, another 2% is added to 510. That is £520.20. The interest is on the interest. It is compound.", E('510 × 1.02 = 520.20'))
    ]),
    SC('A year of debt', 'Example 4: how bad can it get?', [
      S("After 12 months with no payments, the balance is 500 times 1.02 to the power 12. 1.02 to the 12 is about 1.268. 500 times that is about £634.", E('500 × 1.02¹²') + g('≈ £634')),
      S("So a 2% monthly rate adds about 27% in a year. That is much more than 24, which is 12 times 2.", V.rule('Monthly rates add up faster than they look.'))
    ]),
    SC('Paying it off', 'Example 5: paying in full', [
      S("The best way to use a credit card is to pay the whole balance every month. Then you pay no interest at all. If you only pay the minimum, the debt can last years and cost far more.", V.note('Pay in full to avoid interest'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Comparing only the monthly payment. A sofa costs £600 in cash. Hire purchase is £25 a month for 30 months. Wrong: £25 sounds cheap. Multiply. £750. That is 150 more.", r('only £25  ✗') + g('25 × 30 = £750 in total  ✓')),
      S("Mistake two. Forgetting the deposit. A deposit of £50, then 12 payments of 40. Wrong: 12 times 40, 480. Add the deposit. £530.", r('12 × 40 = £480  ✗') + g('50 + 480 = £530  ✓')),
      S("Mistake three. Calling the extra cost the interest rate. The cash price is £400, and the credit price is 450. Wrong: the interest is 50%. The extra is £50. As a fraction of 400 it is 12 and 1/2 per cent.", r('£50 extra = 50%  ✗') + g('50 ÷ 400 = 12.5%  ✓'))
    ]),
    SC('In real life', 'Buy now, pay later', [
      S("Shops often say interest free for 12 months. That can be fine if you pay on time. But if you miss the deadline, interest may be added back to the whole amount. Always read the details.", V.note('Read the small print'))
    ]),
    L.turn("Your turn! Number one. A TV costs £400 cash. On hire purchase, the deposit is £50, and there are 10 payments of £45. What is the total? Pause and try it.", E('50 + 10 × 45'), "10 times 45 is 450. Plus 50. £500.", g('£500')),
    L.turn("Your turn! Number two. What is the cost of credit? Pause and try it.", E('500 − 400'), "One hundred pounds.", g('£100')),
    L.turn("Your turn! Number three. A card balance of £200 has 1% interest for 1 month. What is the new balance? Pause and try it.", E('200 × 1.01'), "£202.", g('£202')),
    L.rec('How do you work out the cost of credit and hire purchase?', "Credit lets you buy now and pay later, but it usually costs more. The total on hire purchase is the deposit plus all the instalments. The cost of credit is the total paid minus the cash price. Card interest is compound, so use a power. Compare totals, not monthly payments.", ['Total = deposit + instalments', 'Cost of credit = total − cash price', 'Card interest: compound', 'Compare totals'])
  ]);

  /* ---- Comparing currency offers ---- */
  N('How do you compare currency exchange offers?', 'how to compare exchange rates, commission and fees to find the best offer.', [
    SC('Comparing offers', 'Start with the basics', [
      S("When you travel, you swap pounds for foreign money. Different places offer different deals. 1 might give a better rate. Another might charge a fee. To find the best deal, we must compare what you actually receive.", V.rule('Compare what you receive.')),
      S("Remember that the exchange rate tells us how much foreign money £1 buys. A higher number means more foreign money for your pound. That is better when you are buying euros.", E('£1 = €1.15  is better than  £1 = €1.12', 'g'))
    ]),
    SC('Two rates', 'Example 1: compare the rates', [
      S("Bank A offers 1.15 euros to the pound. Bank B offers 1.12. You change £500. At Bank A, 500 times 1.15 is 575 euros. At Bank B, 500 times 1.12 is 560.", E('A: 500 × 1.15 = €575') + E('B: 500 × 1.12 = €560')),
      S("Bank A gives 15 euros more. So Bank A is better, if there are no fees.", g('A gives €15 more'))
    ]),
    SC('Commission', 'Example 2: a percentage fee', [
      S("Now Bank A charges a 2% commission, and Bank B charges none. Commission is a fee, taken as a percentage. 2% of £500 is £10. So Bank A only changes £490.", E('2% × £500 = £10') + E('£500 − £10 = £490')),
      S("490 times 1.15 is 563.5 euros. Compare with Bank B's 560 euros. 563.5 is slightly more. So Bank A is still a little better.", E('490 × 1.15 = €563.50') + g('A: €563.50  vs  B: €560'))
    ]),
    SC('A fixed fee', 'Example 3: a flat charge', [
      S("A kiosk offers 1.18, but charges a fixed fee of £5. For £500, take off the fee first. £495. Times 1.18 is 584.1 euros.", E('(500 − 5) × 1.18') + g('= €584.10')),
      S("This beats both banks. But if you only change £50, the £5 fee is 10%. That would not be a good deal.", V.rule('Fixed fees hurt small amounts.'))
    ]),
    SC('Buying back', 'Example 4: changing leftover money', [
      S("When you come home, you change leftover euros back to pounds. The rate for buying euros is different from the rate for selling them. Suppose you change 230 euros back, at 1.22 euros to the pound. Divide. 230 divided by 1.22 is about £188.52.", E('230 ÷ 1.22') + g('≈ £188.52'))
    ]),
    SC('Best value', 'Example 5: a price abroad', [
      S("A guidebook costs 24 euros in Paris, and £19 in London. Rate: 1.15. 24 euros divided by 1.15 is £20.87. The London price is cheaper. Change both prices to the same currency to compare.", E('24 ÷ 1.15 ≈ £20.87') + g('£19 is cheaper'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Multiplying when you should divide. Change 220 euros into pounds, when £1 is 1.1 euros. Wrong: 2 20 times 1.1, £242. A euro is worth less than a pound, so the answer must be smaller. Divide. £200.", r('220 × 1.1 = £242  ✗') + g('220 ÷ 1.1 = £200  ✓')),
      S("Mistake two. Ignoring the fee. Shop A gives 1.1 euros per pound with no fee. Shop B gives 1.12, but takes a £5 fee. For £200. Wrong: B has the better rate, so B is better. A gives 220 euros. B gives 195 times 1.12, 218.4. A is better.", r('B has a better rate, so B  ✗') + g('A: 220 euros.  B: 218.4 euros  ✓')),
      S("Mistake three. Comparing different amounts. Offer 1 gives 220 euros for £200. Offer 2 gives 324 euros for £300. Wrong: 3 24 is bigger, so offer 2 is better. Compare euros per pound. 1.10 against 1.08. Offer 1 is better.", r('324 > 220, so offer 2  ✗') + g('1.10 against 1.08 per £: offer 1  ✓'))
    ]),
    SC('In real life', 'Airport or bank?', [
      S("Airport exchange desks often have worse rates and bigger fees. Comparing offers before you travel can save you a good deal of money.", V.note('Compare before you travel'))
    ]),
    L.turn("Your turn! Number one. You change £300 at 1.14 euros to the pound. How many euros? Pause and try it.", E('300 × 1.14'), "342 euros.", g('€342')),
    L.turn("Your turn! Number two. A fee of 2% is taken first. How many pounds are changed from 300? Pause and try it.", E('300 × 0.98'), "£294.", g('£294')),
    L.turn("Your turn! Number three. A hotel costs 150 euros a night. At 1.2 euros to the pound, how much in pounds? Pause and try it.", E('150 ÷ 1.2'), "£125.", g('£125')),
    L.rec('How do you compare currency exchange offers?', "To compare offers, work out how much you actually receive. Take off any commission or fixed fee first. Then multiply by the exchange rate to get foreign money, or divide by the rate to get pounds. Compare prices in the same currency.", ['Fees first', '£ → foreign: × rate', 'Foreign → £: ÷ rate', 'Compare in one currency'])
  ]);

  /* ---- Sharing in a ratio ---- */
  N('How do you share an amount in a ratio and work with changing ratios?', 'how to share amounts in a ratio, simplify ratios and work with ratios that change.', [
    SC('Ratio', 'Start with the basics', [
      S("A ratio compares amounts. If a recipe uses 2 cups of flour for every one cup of sugar, we say the ratio of flour to sugar is 2 to 1. We write it with a colon, 2 colon 1.", E('Flour : Sugar = 2 : 1', 'b')),
      S("A ratio has no units. It just says how many parts of one thing for each part of another. And the order matters. Flour to sugar is 2 to 1. Sugar to flour is 1 to 2.", V.rule('The order matters.'))
    ]),
    SC('Simplifying', 'Example 1: simplify 12 : 18', [
      S("Like a fraction, a ratio can be simplified. Divide both numbers by the same thing. 12 and 18 are both divisible by 6. 12 divided by 6 is 2. 18 divided by 6 is 3.", E('12 : 18') + g('= 2 : 3')),
      S("Check there is nothing else that divides both. 2 and 3 share no common factor, so it is fully simplified.", V.rule('Divide by the HCF.'))
    ]),
    SC('Sharing', 'Example 2: share £60 in the ratio 2 : 3', [
      S("Share £60 in the ratio 2 to 3. Step one, add the parts. 2 plus 3 is 5 parts altogether.", E('2 + 3 = 5 parts')),
      S("Step two, find the value of 1 part. 60 divided by 5 is £12.", E('60 ÷ 5 = £12 per part')),
      S("Step three, multiply. 2 parts is 2 times 12, £24. 3 parts is 3 times 12, £36. Check. 24 plus 36 is 60.", E('2 × 12 = £24') + E('3 × 12 = £36') + g('24 + 36 = 60 ✓'))
    ]),
    SC('Three parts', 'Example 3: a ratio with 3 numbers', [
      S("3 friends share 120 sweets in the ratio 1, 2, 3. Parts: 1 plus 2 plus 3 is 6. 1 part is 120 divided by 6. 20 sweets.", E('1 + 2 + 3 = 6') + E('120 ÷ 6 = 20')),
      S("So they get 20, 40 and 60 sweets.", g('20, 40, 60'))
    ]),
    SC('A known part', 'Example 4: when 1 amount is given', [
      S("Anna and Ben share money in the ratio 3 to 5. Anna gets £21. How much does Ben get? Anna's 3 parts are £21. 1 part is £7. Ben has 5 parts. 5 times 7 is £35.", E('3 parts = £21') + E('1 part = £7') + g('Ben: 5 × 7 = £35'))
    ]),
    SC('Ratios that change', 'Example 5: after a change', [
      S("Boys to girls in a club is 3 to 2. Then 4 more girls join, and now the numbers are equal. How many are in the club? Before, boys are 3 parts and girls are 2 parts. After 4 more girls, girls equal boys. So 2 parts plus 4 is 3 parts. 1 part is 4.", E('2 parts + 4 = 3 parts') + E('1 part = 4')),
      S("So there were 12 boys and 8 girls before. Now there are 12 and 12, 24 in total.", g('Now 12 boys, 12 girls'))
    ]),
    SC('Ratio to fraction', 'Example 6: finding fractions', [
      S("If the ratio of red to blue is 2 to 3, then red is 2 out of 5 parts. That is 2/5. Blue is 3/5. This helps us find percentages. 2/5 is 40%.", E('Red = 2/5 = 40%') + E('Blue = 3/5 = 60%'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Dividing by 1 of the ratio numbers. Share £60 in the ratio 2 to 3. Wrong: 60 divided by 2 is 30, and 60 divided by 3 is 20. They only add to 50. Add the parts first. 5. 60 divided by 5 is 12. Then 24 and 36.", r('60 ÷ 2 = 30 and 60 ÷ 3 = 20  ✗') + g('60 ÷ 5 = 12 → 24 and 36  ✓')),
      S("Mistake two. Using the wrong part for 1 part. Boys to girls is 3 to 2, and there are 15 boys. Wrong: 1 part is 15 divided by 2. Boys are 3 parts. 1 part is 15 divided by 3, 5. Girls are 2 parts. 10.", r('1 part = 15 ÷ 2  ✗') + g('1 part = 15 ÷ 3 = 5 → 10 girls  ✓')),
      S("Mistake three. Not checking that the shares add up. Share 72 in the ratio 5 to 4. Wrong: 45 and 36. They add to 81. That is not 72. 1 part is 8. 40 and 32.", r('45 + 36 = 81 ≠ 72  ✗') + g('40 + 32 = 72  ✓'))
    ]),
    SC('In real life', 'Mixing paint', [
      S("A painter mixes blue and white paint in the ratio 3 to 7 to make a light blue. For 10 litres of paint, 3 parts blue is 3 litres and 7 parts white is 7 litres. The same ratio gives the same colour every time.", g('3 L blue + 7 L white'))
    ]),
    L.turn("Your turn! Number one. Simplify 18 to 24. Pause and try it.", E('18 : 24'), "Divide both by 6. 3 to 4.", g('3 : 4')),
    L.turn("Your turn! Number two. Share £72 in the ratio 5 to 4. Pause and try it.", E('72 in 5 : 4'), "9 parts. 1 part is £8. £40 and £32.", g('£40 and £32')),
    L.turn("Your turn! Number three. Red to green is 3 to 4. There are 12 red. How many green? Pause and try it.", E('3 : 4, 12 red'), "3 parts is 12, so 1 part is 4. 4 parts is 16.", g('16')),
    L.rec('How do you share an amount in a ratio and work with changing ratios?', "A ratio compares amounts, and the order matters. Simplify by dividing by common factors. To share in a ratio, add the parts, divide the total by the number of parts to find 1 part, then multiply. If 1 amount is known, find the value of 1 part first. For a ratio that changes, write an equation for the parts.", ['Add the parts', 'Find one part', 'Multiply for each share', 'Check: shares add to total'])
  ]);

  /* ---- Direct proportion ---- */
  N('How do you work with direct proportion and formulae?', 'how to recognise direct proportion, use the unitary method and write y = kx.', [
    SC('Direct proportion', 'Start with the basics', [
      S("2 quantities are in direct proportion if, when 1 doubles, the other doubles too. If 1 pen costs 50p, 2 pens cost £1, and 4 pens cost £2. More pens means more cost, in the same proportion.", E('1 pen: 50p → 2 pens: £1 → 4 pens: £2', 'g')),
      S("A graph of 2 quantities in direct proportion is a straight line through the origin. And the ratio of the 2 quantities is always the same.", V.rule('Straight line through (0, 0).'))
    ]),
    SC('The unitary method', 'Example 1: find 1 first', [
      S("7 books cost £56. How much do 5 books cost? First find the cost of 1 book. 56 divided by 7 is £8.", E('56 ÷ 7 = £8 for 1 book')),
      S("Now multiply for 5 books. 5 times 8 is £40.", g('5 × 8 = £40'))
    ]),
    SC('Recipes', 'Example 2: scaling up', [
      S("A recipe for 4 people needs 300 grams of flour. How much for 10 people? 1 person needs 300 divided by 4, 75 grams. 10 people need 10 times 75. 750 grams.", E('300 ÷ 4 = 75') + g('75 × 10 = 750 g'))
    ]),
    SC('A formula', 'Example 3: y = kx', [
      S("Direct proportion can be written as a formula. y equals k x. The letter k is a number that never changes. It is called the constant of proportionality. For the books, the cost C equals 8 n, where n is the number of books. The constant is 8.", E('y = kx', 'g') + E('C = 8n')),
      S("To find k, divide y by x, for any pair of values. 56 divided by 7 is 8.", E('k = y ÷ x = 56 ÷ 7 = 8'))
    ]),
    SC('Finding k and using it', 'Example 4: y is proportional to x', [
      S("y is directly proportional to x. When x is 4, y is 12. Find y when x is 9. First, find k. 12 divided by 4 is 3. So y equals 3 x. Now put x equals 9. y is 27.", E('k = 12 ÷ 4 = 3') + E('y = 3x') + g('x = 9 → y = 27')),
      S("We can also go backwards. When y is 30, 3 x equals 30, so x is 10.", E('3x = 30 → x = 10'))
    ]),
    SC('Not proportional', 'Example 5: spotting the difference', [
      S("Not everything is proportional. A taxi charges a £3 start fee, and £2 a mile. For 2 miles, £7. For 4 miles, £11. Double the distance does not double the cost, because of the fixed fee. This is not direct proportion.", E('2 mi: £7  ·  4 mi: £11') + r('11 ≠ 2 × 7  → not proportional'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Adding instead of multiplying. 3 items cost £9. Wrong: 6 items cost 9 plus 3, £12. Double the items, double the cost. £18.", r('9 + 3 = 12  ✗') + g('9 × 2 = 18  ✓')),
      S("Mistake two. Using direct proportion with a fixed charge. A taxi costs £3 plus £2 a mile. 2 miles cost £7. Wrong: 4 miles cost twice that, £14. The £3 charge is not doubled. 3 plus 8, £11.", r('2 × 7 = 14  ✗') + g('3 + 2 × 4 = 11  ✓')),
      S("Mistake three. Finding k upside down. y is 12 when x is 4. Wrong: k is 4 divided by 12. k is y divided by x. 12 divided by 4 is 3.", r('k = 4 ÷ 12  ✗') + g('k = 12 ÷ 4 = 3  ✓'))
    ]),
    SC('In real life', 'Currency and fuel', [
      S("Exchange rates are direct proportion. Double the pounds gives double the euros. Fuel is too. If 10 litres cost £15, 30 litres cost £45. The constant is £1.50 a litre.", g('C = 1.5L'))
    ]),
    L.turn("Your turn! Number one. 6 tickets cost £42. How much do 9 tickets cost? Pause and try it.", E('42 ÷ 6 × 9'), "1 ticket is £7. 9 tickets are £63.", g('£63')),
    L.turn("Your turn! Number two. y is directly proportional to x. When x is 5, y is 20. Find the constant k. Pause and try it.", E('k = 20 ÷ 5'), "Four.", g('k = 4')),
    L.turn("Your turn! Number three. Use y equals 4 x to find y when x is 11. Pause and try it.", E('y = 4 × 11'), "Forty-four.", g('44')),
    L.rec('How do you work with direct proportion and formulae?', "In direct proportion, when 1 quantity doubles, so does the other. Use the unitary method, find 1 then multiply. Write it as y equals k x, where k is the constant of proportionality, found by dividing y by x. The graph is a straight line through the origin. If there is a fixed charge, it is not direct proportion.", ['Unitary method', 'y = kx', 'k = y ÷ x', 'Graph through (0, 0)'])
  ]);

  /* ---- Inverse proportion ---- */
  N('How do you work with inverse proportion and formulae?', 'how to recognise inverse proportion and use y = k/x.', [
    SC('Inverse proportion', 'Start with the basics', [
      S("In direct proportion, when 1 quantity goes up, so does the other. In inverse proportion, it is the opposite. When 1 quantity goes up, the other goes down in the same proportion. If 1 doubles, the other halves.", V.cols([V.card('Direct: both up', 'b', true), V.card('Inverse: 1 up, 1 down', 'g', true)], 2)),
      S("A good example is workers and time. 1 worker takes 12 days to dig a trench. 2 workers take 6 days. 4 workers take 3 days. More workers, less time.", E('1 worker: 12 days') + E('2 workers: 6 days') + E('4 workers: 3 days'))
    ]),
    SC('The pattern', 'Example 1: the product is constant', [
      S("Look at the numbers. 1 times 12 is 12. 2 times 6 is 12. 4 times 3 is 12. The product stays the same. That is the signature of inverse proportion. Multiply the 2 quantities and you always get the same number.", E('workers × days = 12', 'g'))
    ]),
    SC('Solving', 'Example 2: a trench', [
      S("6 workers take 4 days to build a wall. How long would 8 workers take? Find the constant, the total work. 6 times 4 is 24 worker days.", E('6 × 4 = 24')),
      S("With 8 workers, divide 24 by 8. 3 days.", g('24 ÷ 8 = 3 days'))
    ]),
    SC('A formula', 'Example 3: y = k / x', [
      S("Inverse proportion has a formula. y equals k over x. The letter k is again a constant. For the wall, the time T equals 24 over the number of workers W.", E('y = k/x', 'g') + E('T = 24/W')),
      S("To find k, multiply. k equals x times y. If y is inversely proportional to x, and y is 6 when x is 4, then k is 24.", E('k = x × y = 4 × 6 = 24'))
    ]),
    SC('Using it', 'Example 4: find y', [
      S("Using y equals 24 over x. Find y when x is 8. 24 divided by 8 is 3. And find x when y is 2. 2 equals 24 over x. So x is 12.", E('x = 8 → y = 3') + E('y = 2 → x = 12', 'g'))
    ]),
    SC('Speed and time', 'Example 5: travel', [
      S("A journey of 120 kilometres. At 60 kilometres per hour, it takes 2 hours. At 40, 3 hours. At 80, 1 and 1/2 hours. Speed and time are in inverse proportion when the distance is fixed.", E('v × t = 120', 'g'))
    ]),
    SC('The graph', 'Example 6: the shape', [
      S("The graph of inverse proportion is not a straight line. It is a curve that falls steeply and then flattens. It never touches either axis. As x gets bigger, y gets closer and closer to 0.", V.note('A falling curve, not a line'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Using direct proportion. 6 workers take 4 days. Wrong: 8 workers take 4 times 8 over 6, 5.3 days. More workers should take less time, not more. The total work is 24 worker days. Divided by 8. 3 days.", r('4 × 8 ÷ 6 ≈ 5.3 days  ✗') + g('24 ÷ 8 = 3 days  ✓')),
      S("Mistake two. Dividing to find k. y is 6 when x is 4, in inverse proportion. Wrong: k is 4 divided by 6. In inverse proportion we multiply. 4 times 6 is 24.", r('k = 4 ÷ 6  ✗') + g('k = 4 × 6 = 24  ✓')),
      S("Mistake three. Not checking the answer makes sense. y is 40 over x, and x is 10. Wrong: 40 times 10, 400. As x grows, y should shrink. 40 divided by 10 is 4.", r('40 × 10 = 400  ✗') + g('40 ÷ 10 = 4  ✓'))
    ]),
    SC('In real life', 'Sharing the work', [
      S("10 people clean a hall in 6 hours. If 20 people help, it takes 3 hours. That assumes everyone works equally well. In real life, too many people can get in each other's way.", V.note('Inverse proportion assumes equal work'))
    ]),
    L.turn("Your turn! Number one. 4 painters take 9 days to paint a house. How long do 6 painters take? Pause and try it.", E('4 × 9 ÷ 6'), "Total work is 36. 36 divided by 6 is 6 days.", g('6 days')),
    L.turn("Your turn! Number two. y is inversely proportional to x. When x is 5, y is 8. Find k. Pause and try it.", E('k = 5 × 8'), "Forty.", g('k = 40')),
    L.turn("Your turn! Number three. Use y equals 40 over x to find y when x is 10. Pause and try it.", E('y = 40 ÷ 10'), "Four.", g('4')),
    L.rec('How do you work with inverse proportion and formulae?', "In inverse proportion, when 1 quantity increases, the other decreases in the same proportion. The product of the 2 is always the same. Write it as y equals k over x, and find k by multiplying x and y. The graph is a falling curve. Check that the answer makes sense.", ['Product is constant', 'y = k/x', 'k = x × y', 'One up, other down'])
  ]);

  /* ---- Average speed ---- */
  N('How do you find average speed over a whole journey?', 'how to work out average speed when a journey has more than 1 part.', [
    SC('Average speed', 'Start with the basics', [
      S("Speed tells us how fast something moves. The formula is speed equals distance divided by time. You can remember it with a triangle, with distance on top, and speed and time at the bottom.", E('Speed = Distance ÷ Time', 'g') + V.cols([V.card('D = S × T', 'b', true), V.card('T = D ÷ S', 'p', true)], 2)),
      S("But a real journey is rarely at 1 speed. A car speeds up, slows down, and stops at lights. So we use average speed, which is the total distance divided by the total time.", E('Average speed = total distance ÷ total time', 'g'))
    ]),
    SC('A simple case', 'Example 1: 1 speed', [
      S("A cyclist rides 60 kilometres in 4 hours. Speed is 60 divided by 4. 15 kilometres per hour.", g('60 ÷ 4 = 15 km/h'))
    ]),
    SC('Two parts', 'Example 2: a journey in 2 stages', [
      S("A driver goes 80 kilometres in 1 hour, and then 60 kilometres in 2 hours. What is the average speed for the whole trip? Total distance is 80 plus 60. 140 kilometres. Total time is 1 plus 2. 3 hours.", E('Distance: 80 + 60 = 140 km') + E('Time: 1 + 2 = 3 h')),
      S("Average speed is 140 divided by 3. About 46.7 kilometres per hour.", g('140 ÷ 3 ≈ 46.7 km/h'))
    ]),
    SC('The trap', 'Example 3: not the average of the speeds', [
      S("The speeds were 80 and 30. The mean of 80 and 30 is 55. But the average speed is 46.7. They are different, because the driver spent more time at the slower speed. Never just average the speeds.", E('Mean of speeds = 55') + r('Average speed ≠ 55') + g('Average speed ≈ 46.7'))
    ]),
    SC('Finding time', 'Example 4: when speeds are given', [
      S("A train travels 150 kilometres at 75 kilometres per hour, and then 150 kilometres at 50. Find the time for each part. Time is distance divided by speed. First part, 2 hours. Second part, 3 hours.", E('150 ÷ 75 = 2 h') + E('150 ÷ 50 = 3 h')),
      S("Total distance is 300. Total time is 5 hours. Average speed is 60 kilometres per hour. Again, not 62.5, which would be the mean of 75 and 50.", E('300 ÷ 5') + g('= 60 km/h'))
    ]),
    SC('Out and back', 'Example 5: a return journey', [
      S("A girl cycles to school at 12 kilometres per hour and returns at 8. The distance is 6 kilometres each way. Time there is half an hour. Time back is 3/4 of an hour. Total distance is 12 kilometres. Total time is 1 and 1/4 hours. Average speed is 9.6 kilometres per hour.", E('6 ÷ 12 = 0.5 h') + E('6 ÷ 8 = 0.75 h') + g('12 ÷ 1.25 = 9.6 km/h'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Averaging the speeds. 80 kilometres per hour for 1 hour, then 30 for 2 hours. Wrong: 80 plus 30, over 2, 55. Use the total distance and total time. 140 kilometres in 3 hours. About 46.7.", r('(80 + 30) ÷ 2 = 55  ✗') + g('140 ÷ 3 ≈ 46.7  ✓')),
      S("Mistake two. Using minutes as hours. 15 kilometres in 45 minutes. Wrong: 15 divided by 45. Change the time to hours first. 45 minutes is 0.75 hours. 20 kilometres per hour.", r('15 ÷ 45 = 0.33 km/h  ✗') + g('15 ÷ 0.75 = 20 km/h  ✓')),
      S("Mistake three. Leaving out a stop. A driver goes 100 kilometres. The driving takes 1 hour, and there is 1/2 hour stop. Wrong: 100 kilometres per hour. The whole journey took 1 and 1/2 hours. About 66.7.", r('100 ÷ 1 = 100 km/h  ✗') + g('100 ÷ 1.5 ≈ 66.7 km/h  ✓'))
    ]),
    SC('In real life', 'Journey planning', [
      S("Sat navs use average speed to estimate arrival times. A 240 kilometre trip at an average of 80 kilometres per hour takes 3 hours. Heavy traffic lowers the average, and so the arrival time is later.", g('240 ÷ 80 = 3 h'))
    ]),
    L.turn("Your turn! Number one. A runner goes 12 kilometres in 1 and 1/2 hours. What is the average speed? Pause and try it.", E('12 ÷ 1.5'), "8 kilometres per hour.", g('8 km/h')),
    L.turn("Your turn! Number two. A car goes 60 kilometres in 1 hour, and then 90 kilometres in 1 hour. Find the average speed. Pause and try it.", E('150 ÷ 2'), "150 kilometres in 2 hours. 75 kilometres per hour.", g('75 km/h')),
    L.turn("Your turn! Number three. A bus takes 30 minutes to go 15 kilometres. Give its speed in kilometres per hour. Pause and try it.", E('15 ÷ 0.5'), "30 minutes is half an hour. 30 kilometres per hour.", g('30 km/h')),
    L.rec('How do you find average speed over a whole journey?', "Speed is distance divided by time. Average speed is the total distance divided by the total time. Do not just average the speeds. If speeds are given for parts of a journey, work out the time for each part first, using time equals distance divided by speed. Keep the time units consistent.", ['Average = total D ÷ total T', 'T = D ÷ S for each part', 'Do not average the speeds', 'Same time units'])
  ]);

  /* ---- Value for money ---- */
  N('How do you compare value for money using unit rates?', 'how to compare prices by finding the cost per unit and choose the best buy.', [
    SC('Best buy', 'Start with the basics', [
      S("A large pack costs more than a small pack. But is it better value? To find out, we compare the price of the same amount. Usually, we work out the price of 1 unit, like 1 gram or 1 litre. This is called the unit price.", E('Unit price = price ÷ amount', 'g')),
      S("2 ways to compare. Find the price per unit and pick the lowest. Or find how much you get for £1, and pick the highest. Both work. Just be consistent.", V.cols([V.card('Lowest price per unit', 'b', true), V.card('Most per pound', 'g', true)], 2))
    ]),
    SC('Price per unit', 'Example 1: cereal', [
      S("A small box of cereal is 300 grams for £1.80. A big box is 750 grams for £3.75. Which is better value? Work out the cost per gram for each. In pence, 1 80 is 180p. 180 divided by 300 is 0.6p per gram.", E('Small: 180p ÷ 300 = 0.6p per g')),
      S("The big box. 3 75 is 375p. Divided by 750 is 0.5p per gram.", E('Big: 375p ÷ 750 = 0.5p per g')),
      S("The big box costs less per gram. So it is the better buy.", g('Big box is better value'))
    ]),
    SC('Amount per pound', 'Example 2: the other way', [
      S("Let's use the other method for the same cereal. Small box, 300 grams for £1.80. Divide 300 by 1.8. 167 grams per pound. Big box. 750 divided by 3.75. 200 grams per pound.", E('Small: 300 ÷ 1.8 ≈ 167 g per £') + E('Big: 750 ÷ 3.75 = 200 g per £')),
      S("The big box gives more per pound. Same answer.", g('Big box wins'))
    ]),
    SC('Three offers', 'Example 3: comparing more than 2', [
      S("Juice comes in 3 sizes. 500 millilitres for 90p. 1 litre for £1.65. 1.5 litres for £2.40. Convert to pence per hundred millilitres. 90 divided by 5 is 18. 1 65 over 10 is 16 and 1/2. 2 40 over 15 is 16.", E('500 mL: 18p per 100 mL') + E('1 L: 16.5p per 100 mL') + E('1.5 L: 16p per 100 mL')),
      S("The biggest bottle is the cheapest per hundred millilitres.", g('1.5 L is the best buy'))
    ]),
    SC('Not always the big one', 'Example 4: a surprise', [
      S("Bigger is not always better. A shop has a special offer. Pasta, 500 grams for £1, or a family pack of 1 and 1/2 kilograms for £3.50. Per hundred grams, the small pack is 20p. The big pack is about 23p. The small 1 is better value.", E('500 g: 20p per 100 g') + E('1.5 kg: 23.3p per 100 g') + g('Small pack wins'))
    ]),
    SC('Special offers', 'Example 5: 3 for 2', [
      S("A shop offers 3 for the price of 2 on tins that cost 80p each. 3 tins cost £1.60. That is about 53p per tin. A normal price is 80p. So the offer is the better buy, if you need 3 tins.", E('2 × 80p = £1.60 for 3') + g('≈ 53p each'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Comparing the total prices. Cheese costs £2.50 for 250 grams, or 4 50 for 500. Wrong: 2 50 is cheaper, so buy that. But it is less cheese. Price per hundred grams. £1 against 90p. The large block is better.", r('£2.50 < £4.50, so small  ✗') + g('100p against 90p per 100 g: large  ✓')),
      S("Mistake two. Mixing units. Pasta is £1 for 500 grams, or £1.80 for 1.5 kilograms. Wrong: compare 501.5. Change to grams. 1,500. 20p against 12p per hundred grams.", r('500 against 1.5  ✗') + g('20p against 12p per 100 g  ✓')),
      S("Mistake three. Thinking the bigger pack is always cheaper. Pasta is £1 for 500 grams, or 3 50 for 1.5 kilograms. Wrong: the family pack must be cheaper. 20p against 23.3 pence per hundred grams. The small pack wins.", r('big pack must be cheaper  ✗') + g('20p against 23.3p per 100 g: small  ✓'))
    ]),
    SC('In real life', 'Supermarkets', [
      S("Shops often show the unit price on the shelf label, like pence per hundred grams. Reading it makes comparing easy. Now you also know how it is worked out.", V.note('Check the shelf label'))
    ]),
    L.turn("Your turn! Number one. 250 grams of cheese costs £2.50. 500 grams costs £4.50. Which is better value? Pause and try it.", E('250 g: £2.50  ·  500 g: £4.50'), "The small 1 is £1 per hundred grams. The big 1 is 90p per hundred grams. The 500 gram block is better value.", g('500 g')),
    L.turn("Your turn! Number two. Find the price per kilogram if 2 kilograms cost £3.40. Pause and try it.", E('3.40 ÷ 2'), "One pound seventy.", g('£1.70 per kg')),
    L.turn("Your turn! Number three. How much do 500 grams cost at £1.70 per kilogram? Pause and try it.", E('£1.70 ÷ 2'), "Eighty-five pence.", g('85p')),
    L.rec('How do you compare value for money using unit rates?', "To compare prices, find the price per unit, such as per gram or per litre. The lowest unit price is the best buy. Or find the amount you get for £1, where the highest is best. Use the same units for each. Bigger is not always cheaper, so always calculate.", ['Price ÷ amount', 'Lowest unit price wins', 'Or most per pound', 'Same units'])
  ]);

  /* ---- Distance-time graphs ---- */
  N('How do you read and draw distance-time graphs?', 'how to read journeys from distance-time graphs and find speed from the gradient.', [
    SC('Distance-time graphs', 'Start with the basics', [
      S("A distance-time graph shows a journey. Time goes along the bottom, on the horizontal axis. Distance from the start goes up the side, on the vertical axis. The line shows where the traveller is at each time.", V.cols([V.card('Across: time', 'b', true), V.card('Up: distance', 'g', true)], 2)),
      S("The shape of the line tells a story. Let's learn to read it. There are 3 kinds of section.", V.list(['Going up: moving away', 'Flat: stopped', 'Going down: coming back']))
    ]),
    SC('Reading a graph', 'Example 1: a walk', [
      S("A girl walks for 1 hour, and covers 4 kilometres. The line rises steadily. She then stops for half an hour, to eat lunch. The line is flat. Then she walks back, taking 1 and 1/2 hours. The line goes down to 0.", E('0–1 h: up 4 km') + E('1–1.5 h: flat') + E('1.5–3 h: back down'))
    ]),
    SC('Speed', 'Example 2: the gradient', [
      S("The steepness of the line is the speed. Gradient is the change in distance divided by the change in time. That is exactly the formula for speed. So the gradient of a distance-time graph is the speed.", E('Gradient = speed', 'g')),
      S("In the first hour, she walked 4 kilometres. 4 divided by 1 is 4 kilometres per hour.", g('4 ÷ 1 = 4 km/h')),
      S("On the way back, 4 kilometres took 1 and 1/2 hours. 4 divided by 1.5 is 2.67 kilometres per hour. Slower, so the line is less steep.", E('4 ÷ 1.5 ≈ 2.67 km/h'))
    ]),
    SC('Steeper means faster', 'Example 3: comparing', [
      S("2 cyclists. Line A rises 10 kilometres in 1 hour. Line B rises 15 kilometres in 1 hour. B is steeper. So B is faster. 10 kilometres per hour, and 15 kilometres per hour.", E('A: 10 km/h') + E('B: 15 km/h', 'g'))
    ]),
    SC('Drawing a graph', 'Example 4: from a description', [
      S("A bus leaves the depot, drives 30 kilometres in half an hour, waits for 15 minutes, then drives 20 kilometres more in half an hour. Plot the points. Start at 0, 0. Then half an hour, 30 kilometres. Then 3/4 of an hour, 30 kilometres, which is flat. Then 1 hour and 15 minutes, 50 kilometres.", E('(0, 0)') + E('(0.5, 30)') + E('(0.75, 30)') + E('(1.25, 50)')),
      S("Join the points with straight lines, using a ruler.", V.rule('Join with straight lines.'))
    ]),
    SC('Average speed', 'Example 5: the whole trip', [
      S("The average speed for the bus is the total distance divided by the total time. 50 kilometres in 1 and 1/4 hours. 50 divided by 1.25 is 40 kilometres per hour. The wait is included in the time.", E('50 ÷ 1.25') + g('= 40 km/h'))
    ]),
    SC('Meeting', 'Example 6: when lines cross', [
      S("If 2 journeys are drawn on the same graph, the point where the lines cross is where the 2 travellers meet. Read the time on the bottom, and the distance up the side.", V.note('Crossing point: they meet'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Thinking a flat line means slow. The line is flat between 1 hour and 2 hours, at 6 kilometres. Wrong: she walks slowly. The distance is not changing, so she is still at 6 kilometres. She has stopped.", r('flat = moving slowly  ✗') + g('flat = stopped at 6 km  ✓')),
      S("Mistake two. Reading a falling line as going downhill. The line falls from 6 kilometres to 0. Wrong: she is walking downhill. The graph shows distance from the start, not the shape of the ground. The distance is getting smaller, so she is coming back.", r('falling line = downhill  ✗') + g('distance falls = returning  ✓')),
      S("Mistake three. Forgetting to use hours for the speed. A line goes from 0 to 12 kilometres in 30 minutes. Wrong: 12 divided by 30, 0.4. 30 minutes is half an hour. 12 divided by 0.5 is 24 kilometres per hour.", r('12 ÷ 30 = 0.4 km/h  ✗') + g('12 ÷ 0.5 = 24 km/h  ✓'))
    ]),
    SC('In real life', 'Trains', [
      S("Train timetables can be drawn as distance-time graphs. Where the lines of 2 trains cross, they pass each other. Railway planners use these to avoid collisions.", V.note('Where lines cross, trains pass'))
    ]),
    L.turn("Your turn! Number one. A line rises 6 kilometres in 2 hours. What is the speed? Pause and try it.", E('6 ÷ 2'), "3 kilometres per hour.", g('3 km/h')),
    L.turn("Your turn! Number two. What does a horizontal line mean on a distance-time graph? Pause and think.", E('?'), "The person is stopped.", g('Stopped')),
    L.turn("Your turn! Number three. A line goes from 0 to 12 kilometres in 30 minutes. What is the speed in kilometres per hour? Pause and try it.", E('12 ÷ 0.5'), "30 minutes is half an hour. 24 kilometres per hour.", g('24 km/h')),
    L.rec('How do you read and draw distance-time graphs?', "Time goes across and distance goes up. A rising line means moving away. A flat line means stopped. A falling line means returning. The gradient is the speed, so a steeper line is faster. Average speed is total distance divided by total time, including stops.", ['Up: moving away', 'Flat: stopped', 'Down: returning', 'Gradient = speed'])
  ]);

  /* ---- Compound shapes ---- */
  N('How do you find the area and perimeter of compound shapes, including semicircles and trapezia?', 'how to split a shape into simple parts and add or subtract their areas.', [
    SC('Area', 'Start with the basics', [
      S("Area is the amount of flat space inside a shape. We measure it in square units, like square centimetres. Here are the formulas we need. Rectangle, length times width. Triangle, half times base times height. Circle, pi r squared.", V.list(['Rectangle: l × w', 'Triangle: ½ × b × h', 'Circle: π r²'])),
      S("A compound shape is made of simple shapes joined together. Our method is always the same. Split the shape, find each area, then add. Or take a piece away.", V.rule('Split, find, add or subtract.'))
    ]),
    SC('Trapezium', 'Example 1: a new formula', [
      S("A trapezium has 1 pair of parallel sides. Its area is half times the sum of the parallel sides, times the height. Parallel sides of 6 and 10, and a height of 4. 6 plus 10 is 16. Half of 16 is 8. 8 times 4 is 32.", E('A = ½(a + b)h', 'g') + E('½ × 16 × 4 = 32 cm²')),
      S("The height must be the straight, perpendicular distance between the parallel sides, not the slanted side.", V.rule('Use the perpendicular height.'))
    ]),
    SC('Adding', 'Example 2: an L-shape', [
      S("An L-shape. Split it into 2 rectangles. 1 is 8 by 3, which is 24. The other is 5 by 2, which is 10. Add. 34 square centimetres.", E('8 × 3 = 24') + E('5 × 2 = 10') + g('24 + 10 = 34 cm²'))
    ]),
    SC('Subtracting', 'Example 3: a hole', [
      S("A square of side 10 has a circle of radius 2 cut out of the middle. Area of the square is 100. Area of the circle is pi times 4, which is 12.57. Subtract. 87.43 square centimetres.", E('10 × 10 = 100') + E('π × 2² ≈ 12.57') + g('100 − 12.57 ≈ 87.43 cm²'))
    ]),
    SC('Semicircle', 'Example 4: a rectangle with a semicircle on top', [
      S("A rectangle 10 by 6 has a semicircle on the 10 side. The semicircle has diameter 10, so radius 5. A full circle would be pi times 25. We want half. That is about 39.27.", E('Radius = 5') + E('½ × π × 25 ≈ 39.27')),
      S("The rectangle is 60. Add them. About 99.3 square centimetres.", g('60 + 39.27 ≈ 99.3 cm²'))
    ]),
    SC('Perimeter', 'Example 5: the same shape', [
      S("Now the perimeter. The outside edge is the rectangle's other 3 sides, plus the curved edge of the semicircle. The 10 side where the semicircle sits is not part of the perimeter any more. 3 sides: 6 plus 10 plus 6 is 22. The curve is half the circumference. Half of pi times 10 is 15.7.", E('6 + 10 + 6 = 22') + E('½ × π × 10 ≈ 15.7')),
      S("Add. 37.7 centimetres.", g('≈ 37.7 cm'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Using the diameter as the radius. A semicircle sits on a side of length 10. Wrong: half of pi times 10 squared, 157. The radius is half of 10, 5. Half of pi times 25 is 39.3.", r('½ × π × 10² ≈ 157  ✗') + g('½ × π × 5² ≈ 39.3  ✓')),
      S("Mistake two. Counting the inside edge in the perimeter. A rectangle 10 by 6 has a semicircle on the 10 side. Wrong: add all 4 sides of the rectangle, 32, and the curve. The 10 side where the semicircle sits is not on the outside. 6 plus 10 plus 6, plus 15.7.", r('10 + 6 + 10 + 6 + 15.7 = 47.7  ✗') + g('6 + 10 + 6 + 15.7 = 37.7  ✓')),
      S("Mistake three. Using the slanted side as the height. A trapezium has parallel sides 4 and 8, a vertical height of 5, and a slanted side of 6. Wrong: half times 12 times 6, 36. The height is the straight distance between the parallel sides. Half times 12 times 5, 30.", r('½(4 + 8) × 6 = 36  ✗') + g('½(4 + 8) × 5 = 30  ✓'))
    ]),
    SC('In real life', 'Tracks and windows', [
      S("A running track is a rectangle with a semicircle at each end. A window with an arch is a rectangle with a semicircle. Builders use exactly these calculations to buy glass and fencing.", V.note('Rectangle + semicircle'))
    ]),
    L.turn("Your turn! Number one. Find the area of a trapezium with parallel sides 4 and 8, and height 5. Pause and try it.", E('a = 4, b = 8, h = 5'), "Half of 12 is 6. 6 times 5 is 30.", g('30 cm²')),
    L.turn("Your turn! Number two. A semicircle has diameter 8. Find its area, to 1 decimal place. Pause and try it.", E('d = 8'), "Radius 4. Half of pi times 16 is 25.1.", g('25.1 cm²')),
    L.turn("Your turn! Number three. An L-shape is made of rectangles 7 by 2, and 4 by 3. Find the area. Pause and try it.", E('7 × 2  +  4 × 3'), "14 plus 12. 26.", g('26')),
    L.rec('How do you find the area and perimeter of compound shapes?', "Split a compound shape into simple shapes, find each area, then add them, or subtract a piece that is cut out. A trapezium has area half times the sum of the parallel sides times the height. For a semicircle, use half of pi r squared, with r half the diameter. For the perimeter, count only the outside edge.", ['Split into parts', 'Add or subtract', 'Trapezium ½(a + b)h', 'Perimeter: outside only'])
  ]);

  /* ---- Volume of prisms and cylinders ---- */
  N('How do you find the volume of prisms and cylinders?', 'how to find volume using area of the cross-section times length.', [
    SC('Volume', 'Start with the basics', [
      S("Volume is the amount of space inside a solid. We measure it in cubic units, like cubic centimetres. A cube with side 1 centimetre has volume 1 cubic centimetre.", E('1 cm³', 'g')),
      S("A prism is a solid with the same cross-section all the way through. Think of a slice of cheese, or a tin of beans. The volume is the area of the cross-section, times the length.", E('V = area of cross-section × length', 'g'))
    ]),
    SC('A cuboid', 'Example 1: the simplest prism', [
      S("A box is 8 long, 5 wide and 3 high. The cross-section is a 5 by 3 rectangle, with area 15. Multiply by the length, 8. 120 cubic centimetres.", E('5 × 3 = 15') + g('15 × 8 = 120 cm³'))
    ]),
    SC('Triangular prism', 'Example 2: a tent shape', [
      S("A triangular prism. The triangle has base 6 and height 4. Its area is half times 6 times 4. 12. The prism is 10 long. 12 times 10 is 120 cubic centimetres.", E('½ × 6 × 4 = 12') + g('12 × 10 = 120 cm³'))
    ]),
    SC('Cylinder', 'Example 3: a circular prism', [
      S("A cylinder is a prism with a circle as the cross-section. The area is pi r squared. So the volume is pi r squared times the height. A tin with radius 3 and height 10. Pi times 9 is 28.27. Times 10 is 282.7.", E('V = π r² h', 'g') + E('π × 3² × 10 ≈ 282.7 cm³'))
    ]),
    SC('A trapezium prism', 'Example 4: other cross-sections', [
      S("A water trough has a trapezium cross-section with parallel sides of 2 and 4, and height 3. The area is half times 6 times 3, 9. The trough is 5 long. 45 cubic metres.", E('½ × (2 + 4) × 3 = 9') + g('9 × 5 = 45 m³'))
    ]),
    SC('Capacity', 'Example 5: litres', [
      S("1 litre is 1,000 cubic centimetres. A tank has volume 12,000 cubic centimetres. Divide by 1,000. 12 litres.", E('12 000 ÷ 1000 = 12 litres', 'g'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Using the diameter in pi r squared. A cylinder has diameter 6 and height 10. Wrong: pi times 6 squared times 10, 1,131. The radius is 3. Pi times 9 times 10, 283.", r('π × 6² × 10 ≈ 1131  ✗') + g('π × 3² × 10 ≈ 283  ✓')),
      S("Mistake two. Forgetting the half in the triangle area. A triangular prism has a triangle with base 6 and height 4, and a length of 10. Wrong: 6 times 4 times 10, 240. The triangle area is half of 6 times 4. 120.", r('6 × 4 × 10 = 240  ✗') + g('½ × 6 × 4 × 10 = 120  ✓')),
      S("Mistake three. Writing the wrong units. A box is 2 by 3 by 4. Wrong: 24 centimetres. Volume is measured in cubic units. 24 cubic centimetres.", r('24 cm  ✗') + g('24 cm³  ✓'))
    ]),
    SC('In real life', 'Pipes and packaging', [
      S("Engineers work out how much water fits in a pipe using the cylinder formula. A pipe of radius 5 centimetres and length 1 metre holds about 7.85 litres.", V.note('Cylinders everywhere'))
    ]),
    L.turn("Your turn! Number one. A cuboid is 4 by 5 by 6. Find the volume. Pause and try it.", E('4 × 5 × 6'), "120.", g('120 cm³')),
    L.turn("Your turn! Number two. A cylinder has radius 2 and height 7. Find the volume to 1 decimal place. Pause and try it.", E('π × 2² × 7'), "Pi times 4 times 7. 87.8.", g('87.8 cm³')),
    L.turn("Your turn! Number three. A triangular prism has a triangle of area 8, and length 9. Find the volume. Pause and try it.", E('8 × 9'), "Seventy-two.", g('72 cm³')),
    L.rec('How do you find the volume of prisms and cylinders?', "A prism has the same cross-section all the way through. Its volume is the area of the cross-section times the length. For a cylinder, the cross-section is a circle, so the volume is pi r squared times the height. 1 litre is 1,000 cubic centimetres.", ['V = area × length', 'Cylinder: π r² h', '1 L = 1000 cm³', 'Cubic units'])
  ]);

  /* ---- Surface area of cylinder ---- */
  N('How do you find the surface area of a cylinder and other solids?', 'how to add up the areas of every face, including the curved surface.', [
    SC('Surface area', 'Start with the basics', [
      S("Surface area is the total area of all the faces of a solid. It tells you how much wrapping paper or paint you need. We measure it in square units.", E('Total area of all faces', 'g')),
      S("The best method is to imagine opening the solid out flat. That flat shape is called a net. Then find each part's area and add them up.", V.rule('Unfold it into a net.'))
    ]),
    SC('A cuboid', 'Example 1: 6 faces', [
      S("A box is 5 by 4 by 3. There are 3 pairs of matching faces. 5 by 4 is 20, 2 of them, 40. 5 by 3 is 15, 2 of them, 30. 4 by 3 is 12, 2 of them, 24. Add. 94.", E('2 × 20 = 40') + E('2 × 15 = 30') + E('2 × 12 = 24') + g('Total = 94 cm²'))
    ]),
    SC('A triangular prism', 'Example 2: 5 faces', [
      S("A triangular prism has 2 triangles and 3 rectangles. Take triangles with base 6, height 4, and sloping sides of 5. The prism is 10 long. Each triangle is 12, so the 2 triangles make 24. The 3 rectangles are 6 by 10, 5 by 10, and 5 by 10. That is 60, 50 and 50.", E('2 triangles: 24') + E('60 + 50 + 50 = 160')),
      S("Add them. 184 square centimetres.", g('24 + 160 = 184 cm²'))
    ]),
    SC('The cylinder net', 'Example 3: unrolling', [
      S("A cylinder has 2 circles, and 1 curved surface. If you unroll the curved surface, it is a rectangle. The width of the rectangle is the height of the cylinder. The length of the rectangle is the circumference of the circle.", V.list(['2 circles: 2 × π r²', 'Rectangle: 2π r × h']))
    ]),
    SC('The formula', 'Example 4: radius 3, height 10', [
      S("2 circles: 2 times pi times 9. About 56.5. The curved part: 2 times pi times 3 times 10. About 188.5.", E('2π r² = 2 × π × 9 ≈ 56.5') + E('2π r h = 2 × π × 3 × 10 ≈ 188.5')),
      S("Add. About 245 square centimetres.", g('≈ 245 cm²'))
    ]),
    SC('An open cylinder', 'Example 5: no lid', [
      S("A cup is an open cylinder with 1 circle for the base only. A radius of 4 and height of 9. 1 circle is pi times 16, about 50.3. The curved part is 2 pi times 4 times 9, about 226.2. Add. 276.5.", E('π r² ≈ 50.3') + E('2π r h ≈ 226.2') + g('≈ 276.5 cm²')),
      S("Always check how many faces the solid has.", V.rule('Count the faces.'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Forgetting the second circle. A closed cylinder has radius 2 and height 5. Wrong: 1 circle plus the curved surface, 12.6 plus 62.8, 75.4. A closed cylinder has 2 circles. 25.1 plus 62.8. About 88.", r('12.6 + 62.8 = 75.4  ✗') + g('25.1 + 62.8 ≈ 88  ✓')),
      S("Mistake two. Mixing up area and volume. A cube has side 5. Wrong: 5 cubed, 125. That is the volume. The surface area is 6 faces, each 25. 150 square centimetres.", r('5³ = 125 cm²  ✗') + g('6 × 25 = 150 cm²  ✓')),
      S("Mistake three. Using the diameter. A cylinder has diameter 10 and height 4. Wrong: the curved area is 2 pi times 10 times 4, 251. Use the radius, 5. 2 pi times 5 times 4, about 126.", r('2π × 10 × 4 ≈ 251  ✗') + g('2π × 5 × 4 ≈ 126  ✓'))
    ]),
    SC('In real life', 'Labels and paint', [
      S("A can label covers only the curved surface. Paint for a tank covers everything. Knowing which faces you need saves money.", V.note('Which faces do you need?'))
    ]),
    L.turn("Your turn! Number one. Find the surface area of a cube with side 5. Pause and try it.", E('6 × 5 × 5'), "6 faces, each 25. 150.", g('150 cm²')),
    L.turn("Your turn! Number two. A cylinder has radius 2 and height 5. Find the curved surface area. Pause and try it.", E('2π × 2 × 5'), "2 times pi times 2 times 5 is 20 pi. About 62.8.", g('≈ 62.8 cm²')),
    L.turn("Your turn! Number three. What shape is the curved surface of a cylinder when it is unrolled? Pause and think.", E('?'), "A rectangle.", g('Rectangle')),
    L.rec('How do you find the surface area of a cylinder and other solids?', "Surface area is the total area of all the faces. Imagine the net, find each area and add. For a closed cylinder, there are 2 circles, each pi r squared, and a curved surface which unrolls to a rectangle of area 2 pi r times h. Check whether the solid is open or closed.", ['Draw the net', 'Add all the faces', 'Cylinder: 2π r² + 2π r h', 'Squared units'])
  ]);

  /* ---- Compound solids ---- */
  N('How do you find the volume and surface area of compound solids?', 'how to split a solid into simple parts, such as a cylinder with a cone or hemisphere on top.', [
    SC('Compound solids', 'Start with the basics', [
      S("A compound solid is made by joining simple solids together. Think of an ice cream cone with a scoop on top, or a pencil shape, a cylinder with a cone at the end. To find its volume, we find the volume of each part and add them.", V.rule('Split, find each, add.')),
      S("Here are the formulas we will need. Cylinder, pi r squared h. Cone, 1/3 pi r squared h. Sphere, 4/3 pi r cubed. A hemisphere is half a sphere, so 2/3 pi r cubed.", V.list(['Cylinder: π r² h', 'Cone: ⅓ π r² h', 'Sphere: ⁴⁄₃ π r³', 'Hemisphere: ⅔ π r³']))
    ]),
    SC('Cylinder and cone', 'Example 1: a pencil shape', [
      S("A cylinder with radius 3 and height 8 has a cone on top, with the same radius and height 4. Cylinder volume is pi times 9 times 8. That is about 226.2.", E('π × 3² × 8 ≈ 226.2')),
      S("Cone volume is 1/3 times pi times 9 times 4. About 37.7. Add them. About 264 cubic centimetres.", E('⅓ × π × 9 × 4 ≈ 37.7') + g('≈ 264 cm³'))
    ]),
    SC('Hemisphere', 'Example 2: a capsule', [
      S("A medicine capsule is a cylinder with a hemisphere on each end. Radius 2, and the cylinder part is 6 long. Cylinder, pi times 4 times 6, about 75.4. 2 hemispheres make 1 whole sphere. 4/3 times pi times 8, about 33.5.", E('π × 4 × 6 ≈ 75.4') + E('⁴⁄₃ × π × 8 ≈ 33.5')),
      S("Add. About 108.9 cubic centimetres.", g('≈ 108.9 cm³'))
    ]),
    SC('Subtracting', 'Example 3: a hollow', [
      S("A cube of side 10 has a cylindrical hole drilled right through, with radius 2. The cube is 1,000. The hole is pi times 4 times 10, about 125.7. Subtract. About 874.3.", E('10³ = 1000') + E('π × 4 × 10 ≈ 125.7') + g('≈ 874.3 cm³'))
    ]),
    SC('Surface area', 'Example 4: an ice cream cone', [
      S("A hemisphere sits on a cone, both with radius 3. The surface we can see is the curved surface of the hemisphere, plus the curved surface of the cone. The hemisphere curved area is 2 pi r squared, about 56.5.", E('2π r² = 2 × π × 9 ≈ 56.5')),
      S("The cone has slant height of 10. Its curved area is pi r l. Pi times 3 times 10, about 94.2. Add. About 150.8.", E('π r l ≈ 94.2') + g('≈ 150.8 cm²')),
      S("The flat circle where they join is hidden inside, so it is not counted.", V.rule('Do not count joined faces.'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Using the whole height for the cone. A cylinder of height 8 has a cone of height 4 on top, with radius 3. Wrong: the cone has height 12, 1/3 pi times 9 times 12, 113. The cone is only 4 tall. 1/3 pi times 9 times 4, 37.7.", r('⅓ × π × 9 × 12 ≈ 113.1  ✗') + g('⅓ × π × 9 × 4 ≈ 37.7  ✓')),
      S("Mistake two. Counting faces that are joined. 2 cubes of side 2 are stuck together, face to face. Wrong: 12 faces, each of area 4, 48. The 2 touching faces are hidden. 10 faces. 40.", r('12 × 4 = 48  ✗') + g('10 × 4 = 40  ✓')),
      S("Mistake three. Treating a hemisphere as a whole sphere. A hemisphere has radius 3. Wrong: 4/3 pi times 27, 113. A hemisphere is half a sphere. 56.5.", r('⁴⁄₃π × 27 ≈ 113.1  ✗') + g('½ × ⁴⁄₃π × 27 ≈ 56.5  ✓'))
    ]),
    SC('In real life', 'Silos and rockets', [
      S("A grain silo is a cylinder with a cone or dome on top. Engineers add the volumes to know how much grain it can hold.", V.note('Silo: cylinder + dome'))
    ]),
    L.turn("Your turn! Number one. A cylinder has volume 60 and a cone on top has volume 20. What is the total? Pause and try it.", E('60 + 20'), "Eighty.", g('80 cm³')),
    L.turn("Your turn! Number two. Write the volume of a hemisphere of radius 3. Pause and try it.", E('⅔ × π × 27'), "2/3 times pi times 27. 18 pi, about 56.5.", g('≈ 56.5 cm³')),
    L.turn("Your turn! Number three. Is the joined circle counted in the surface area of a cone on a cylinder? Pause and think.", E('?'), "No, it is hidden inside.", g('Not counted')),
    L.rec('How do you find the volume and surface area of compound solids?', "Split a compound solid into simple solids, find each volume, and add. Subtract any hole. A hemisphere is half a sphere. For surface area, count only the faces you can see, and leave out the faces that are joined together.", ['Split into solids', 'Add or subtract volumes', 'Hemisphere is ½ sphere', 'Skip joined faces'])
  ]);

  /* ---- Converting units of area and volume ---- */
  N('How do you convert units of area and volume?', 'how to change square and cubic units correctly.', [
    SC('Length first', 'Start with the basics', [
      S("Lengths are easy to convert. 1 metre is 100 centimetres. 1 centimetre is 10 millimetres. We multiply or divide by the same number.", V.list(['1 m = 100 cm', '1 cm = 10 mm', '1 km = 1000 m'])),
      S("But area and volume are different. They use squared and cubed units, so the conversion number must be squared or cubed too.", V.rule('Square it. Cube it.'))
    ]),
    SC('Area', 'Example 1: square metres to square centimetres', [
      S("Picture a square, 1 metre by 1 metre. Its area is 1 square metre. In centimetres, it is 100 by 100. That is 10,000 square centimetres.", E('1 m² = 100 × 100 = 10 000 cm²', 'g')),
      S("So to change square metres into square centimetres, multiply by 10,000. 3 square metres is 30,000 square centimetres.", E('3 m² = 30 000 cm²'))
    ]),
    SC('Going down', 'Example 2: square centimetres to square millimetres', [
      S("1 centimetre is 10 millimetres. A square centimetre is 10 by 10, 100 square millimetres. 5 square centimetres is 500 square millimetres.", E('1 cm² = 100 mm²') + g('5 cm² = 500 mm²'))
    ]),
    SC('Going back', 'Example 3: dividing', [
      S("To go the other way, divide. 25,000 square centimetres is how many square metres? Divide by 10,000. 2.5.", E('25 000 ÷ 10 000 = 2.5 m²', 'g'))
    ]),
    SC('Volume', 'Example 4: cubic units', [
      S("A cube 1 metre each way. In centimetres, it is 100 by 100 by 100. 1 million cubic centimetres.", E('1 m³ = 100³ = 1 000 000 cm³', 'g')),
      S("And 1 cubic centimetre is 1,000 cubic millimetres. And 1 cubic centimetre equals 1 millilitre. 1,000 cubic centimetres is 1 litre.", E('1 cm³ = 1000 mm³') + E('1000 cm³ = 1 litre'))
    ]),
    SC('Mixed units', 'Example 5: a problem', [
      S("A room is 4 metres by 3 metres. The carpet is sold per square centimetre. Area of the room is 12 square metres. Multiply by 10,000. 120,000 square centimetres.", E('4 × 3 = 12 m²') + g('12 × 10 000 = 120 000 cm²'))
    ]),
    SC('Watch out!', 'Three common mistakes', [
      S("Mistake one: using 100 for area. 1 square metre is 10,000 square centimetres, not 100.", r('1 m² = 100 cm²  ✗') + g('1 m² = 10 000 cm²  ✓')),
      S("Mistake two: using 100 for volume. It is 1 million.", r('1 m³ = 100 cm³  ✗') + g('1 m³ = 1 000 000 cm³  ✓')),
      S("Mistake three: multiplying when you should divide. Smaller unit, bigger number.", V.rule('Smaller unit, bigger number.'))
    ]),
    SC('In real life', 'Land and water', [
      S("Land is measured in hectares. 1 hectare is 10,000 square metres. A football pitch is about 3/4 of a hectare.", E('1 hectare = 10 000 m²'))
    ]),
    L.turn("Your turn! Number one. Change 2 square metres to square centimetres. Pause and try it.", E('2 m² → cm²'), "Multiply by 10,000. 20,000.", g('20 000 cm²')),
    L.turn("Your turn! Number two. Change 300 square millimetres to square centimetres. Pause and try it.", E('300 mm² → cm²'), "Divide by 100. 3.", g('3 cm²')),
    L.turn("Your turn! Number three. How many litres is 5,000 cubic centimetres? Pause and try it.", E('5000 cm³'), "Divide by 1,000. 5 litres.", g('5 litres')),
    L.rec('How do you convert units of area and volume?', "For area, square the length conversion. 1 square metre is 10,000 square centimetres. For volume, cube it. 1 cubic metre is 1 million cubic centimetres. Going to a smaller unit, multiply. Going to a bigger unit, divide. 1 litre is 1,000 cubic centimetres.", ['Area: square the factor', 'Volume: cube the factor', 'Smaller unit: multiply', '1 L = 1000 cm³'])
  ]);

  /* ---- Working backwards ---- */
  N('How do you work backwards from a volume or area to find a missing length?', 'how to rearrange a volume or area formula to find a radius, height or side.', [
    SC('Working backwards', 'Start with the basics', [
      S("Sometimes we know the volume or the area, and we need a missing length. We use the same formula, but we put in what we know and solve for the missing value. It is just an equation.", V.rule('Put in what you know. Solve.'))
    ]),
    SC('Cuboid', 'Example 1: find the height', [
      S("A box has volume 120, length 6, width 5. Volume is length times width times height. So 120 equals 30 times height. Divide by 30. The height is 4.", E('120 = 6 × 5 × h') + E('h = 120 ÷ 30') + g('h = 4 cm'))
    ]),
    SC('Cylinder', 'Example 2: find the height', [
      S("A cylinder has volume 157, and radius 2. Volume is pi r squared h. So 1 57 equals pi times 4 times h. That is 12.57 h. Divide. The height is 12.5.", E('157 = π × 4 × h') + E('h = 157 ÷ 12.57') + g('h ≈ 12.5 cm'))
    ]),
    SC('Finding a radius', 'Example 3: square roots', [
      S("A cylinder of height 5 has volume 314. Find the radius. Pi r squared times 5 is 3 14. Divide by 5 pi, which is 15.7. r squared is 20. Square root. About 4.5.", E('314 = π r² × 5') + E('r² = 314 ÷ 15.7 = 20') + g('r ≈ 4.5 cm')),
      S("We needed a square root at the end, because r was squared.", V.rule('Undo the square with √.'))
    ]),
    SC('A circle', 'Example 4: from the area', [
      S("A circle has area 50. Find the radius. Pi r squared equals 50. r squared is 50 divided by pi, about 15.9. Take the square root. About 4.", E('π r² = 50') + E('r² ≈ 15.9') + g('r ≈ 4 cm'))
    ]),
    SC('From circumference', 'Example 5: the diameter', [
      S("A circle has circumference 31.4. The circumference is pi times the diameter. So the diameter is 31.4 divided by pi. 10.", E('C = π d') + E('d = 31.4 ÷ π') + g('d = 10, r = 5'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Forgetting the square root. A cylinder of height 5 has volume 314. Then r squared is 20. Wrong: the radius is 20. Take the square root. About 4.5.", r('r = 20  ✗') + g('r = √20 ≈ 4.5  ✓')),
      S("Mistake two. Forgetting to divide by pi. A circle has area 50. Wrong: r squared is 50, so r is 7.1. Divide by pi first. 50 divided by pi is 15.9. Square root, 4.", r('r² = 50 → r ≈ 7.1  ✗') + g('r² = 50 ÷ π ≈ 15.9 → r ≈ 4  ✓')),
      S("Mistake three. Leaving out one of the values. A cuboid has volume 120, length 6 and width 5. Wrong: the height is 1 20 divided by 6, 20. Divide by both. 1 20 divided by 30 is 4.", r('120 ÷ 6 = 20  ✗') + g('120 ÷ (6 × 5) = 4  ✓'))
    ]),
    SC('In real life', 'Tanks', [
      S("An engineer needs a tank to hold 5,000 litres, with a set radius. She works backwards from the volume to find how tall to make it.", V.note('Volume known, height needed'))
    ]),
    L.turn("Your turn! Number one. A cuboid has volume 60, length 5 and width 3. Find the height. Pause and try it.", E('60 = 5 × 3 × h'), "60 divided by 15. 4.", g('4')),
    L.turn("Your turn! Number two. A circle has area 28.3. Find r squared, if pi is 3.14. Pause and try it.", E('π r² = 28.3'), "Divide by pi. About 9.", g('r² ≈ 9')),
    L.turn("Your turn! Number three. And so what is the radius? Pause and try it.", E('r² = 9'), "Square root of 9. 3.", g('r = 3')),
    L.rec('How do you work backwards from a volume or area to find a missing length?', "Write the formula, put in the numbers you know, and solve for the missing 1. Divide to find a height. If the unknown is squared, as in a radius, take the square root at the end. Keep pi until the last step to stay accurate.", ['Write the formula', 'Substitute known values', 'Divide', 'Square root if squared'])
  ]);

  /* ---- Regular payments and bank charges (S3 version of the S2 lesson) ---- */
  (function () {
    var H = BT.fxh; if (!H || !BT.L.fx) return;
    var TB = H.tbl(['Month', 'Description', 'Payment'], [['Jan', 'Energy (direct debit)', '£84.00'], ['Feb', 'Energy (direct debit)', '£94.08']], 2);
    BT.L.fx('How do you manage regular payments and bank charges?', 'how a price rise, a failed payment or an overdraft changes what regular payments cost over a year.', {
      head: 'Regular payments and charges',
      basics: [
        ['Standing orders and direct debits', [
          ["A standing order is fixed. You tell the bank to pay the same amount on the same date. A direct debit can change, because the company decides how much to take. In this lesson we use percentages to see what a change costs over a whole year.", ['Standing order: fixed', 'Direct debit: can change']],
          ["When prices rise, a direct debit rises with them, and the company usually tells you first. You can check the new amount on your statement and plan for it.", ['Check each new amount', 'Plan for the change']]]],
        ['A price rise on a statement', [
          ["Look at this energy direct debit. In January it was £84. In February it is £94.08. The supplier raised the price by 12%.", [TB, 'n|A rise of 12% on £84']],
          ["To increase an amount by a percentage, multiply by the multiplier. For a 12% rise the multiplier is 1.12, which is 112% as a decimal.", ['100% + 12% = 112%', '112% = 1.12']]]],
        ['The cost for a year', [
          ["Direct debits and standing orders are monthly. To find the cost for a year, multiply by 12. To find the extra cost of a rise for a year, work out the extra each month, then multiply by 12.", ['Year = monthly × 12', 'Extra a year = extra a month × 12']]]]],
      ex: [
        ['A price rise', [
          ["An energy direct debit is £84 a month. The supplier raises the price by 12%. What is the new monthly payment? The multiplier for a 12% rise is 1.12.", ['100% + 12% = 112%', 'Multiplier = 1.12']],
          ["Multiply the old payment by the multiplier. 84 times 1.12 is £94.08.", ['84 × 1.12', 'g|= £94.08']]]],
        ['The extra cost for a year', [
          ["How much extra is that a year? First find the extra each month. £94.08 minus £84 is £10.08.", ['94.08 − 84 = £10.08']],
          ["Now multiply by 12, because the rise applies to every month. £10.08 times 12 is £120.96.", ['10.08 × 12', 'g|= £120.96 extra a year']]]],
        ['Saving by standing order', [
          ["A standing order pays £150 a month into a savings account. At the end of the year the bank adds 3% of the total saved. First find the total saved in 12 months. 150 times 12 is £1,800.", ['150 × 12', 'g|= £1,800']],
          ["1% of 1,800 is £18. 3% is 3 times that, £54.", ['1% of 1,800 = 18', '3% = 18 × 3 = 54']],
          ["The account then holds 1,800 plus 54, £1,854.", ['1,800 + 54', 'g|= £1,854']]]],
        ['Overdraft charges', [
          ["A bank charges 1.5 per cent of the overdrawn amount each month. Dev is overdrawn by £400 for 1 month. 1% of 400 is £4. Half of 1% is £2. So 1.5 per cent is £6.", ['1% of 400 = 4', '0.5% of 400 = 2', 'g|1.5% = £6']],
          ["The bank also charges £5 each time a direct debit fails. Dev has 2 failed direct debits. The failed payments cost £10.", ['2 × 5 = £10']],
          ["Add the £6 overdraft charge. His total charges are £16.", ['6 + 10', 'g|= £16']]]],
        ['Monthly or yearly', [
          ["A gym costs £40 a month by direct debit, or £420 if paid for the whole year at once. Which is cheaper over a year, and by how much? By direct debit it is 40 times 12, £480.", ['40 × 12 = 480']],
          ["Paying at once costs £420. 480 minus 420 is 60. Paying yearly saves £60.", ['480 − 420', 'g|= £60 saved']]]]],
      mist: [
        ['Adding the percentage', "Mistake one: adding 12 to the payment instead of finding 12%. A 12% rise on £84 is not 84 plus 12. Use the multiplier 1.12.", ['r|84 + 12 = £96 ✗', 'g|84 × 1.12 = £94.08 ✓']],
        ['Using the wrong multiplier', "Mistake two: using 0.12 as the multiplier. That finds only the 12%, not the new price. For a rise, add the percentage to a 100% first.", ['r|84 × 0.12 = £10.08 (this is only the rise) ✗', 'g|84 × 1.12 = £94.08 ✓']],
        ['Stopping at 1 month', "Mistake three: giving the monthly extra when the question asks for the whole year. £10.08 is the extra for 1 month only. Multiply it by 12.", ['r|Extra a year = £10.08 ✗', 'g|10.08 × 12 = £120.96 ✓']]],
      real: ['In real life', "Check your direct debit amounts when prices rise. A small rise each month adds up over a year. Keep enough money in the account, because a failed payment can cost you a fee.", ['Check each new payment amount', 'Small monthly rises add up over a year']],
      turns: [
        { q: 'A phone direct debit is £35 a month. The company raises the price by 10%. What is the new payment?', say: "The multiplier for a 10% rise is 1.1. 35 times 1.1 is £38.50.", work: ['Multiplier = 1.1', '35 × 1.1'], ans: ['g|£38.50'] },
        { q: 'A broadband direct debit rises from £25 to £27.50 a month. How much extra is that over a year?', say: "The extra each month is £2.50. £2.50 times 12 is £30.", work: ['27.50 − 25 = 2.50', '2.50 × 12'], ans: ['g|£30'] },
        { q: 'A bank charges 2% of the overdrawn amount each month. Mina is overdrawn by £350 for 1 month and has 1 failed direct debit that costs £7. What is her total charge?', say: "1% of 350 is £3.50. 2% is £7. Add the £7 fee. Her total charge is £14.", work: ['1% of 350 = 3.50', '2% = 7', '7 + 7'], ans: ['g|£14'] },
        { q: 'A gym costs £35 a month by direct debit, or £390 if paid for the whole year at once. How much is saved by paying yearly?', say: "By direct debit the cost is 35 times 12, £420. 420 minus 390 is £30 saved.", work: ['35 × 12 = 420', '420 − 390'], ans: ['g|£30 saved'] }],
      rec: ["Find a percentage change with a multiplier. For a year, multiply the monthly amount by 12.", ['Rise: multiplier, then compare', 'Year = monthly × 12', 'Overdraft charge = % of the overdrawn amount', 'Add any fixed fees']]
    });
  })();

  /* ---- Watch lists: old lessons plus the new ones (841 to 844) ---- */
  L.use(841, ['How do you evaluate powers and express whole numbers as powers?', 'How do you use the laws of indices?', 'How do you write a number as a product of its prime factors?', 'How do you calculate percentage changes?', 'How do you work out reverse percentages?', 'How do you work with repeated percentage change?', 'Compound growth and depreciation', 'How do you write numbers in standard form, including small numbers?', 'How do you multiply and divide numbers in standard form?', 'How do you work with rounding and upper and lower bounds?', 'How do you estimate by rounding to one significant figure?', 'What are rational and irrational numbers?', 'Surds', 'How do you describe sets of numbers?', 'Percentage change and wages']);
  L.use(842, ['How do you convert currencies?', 'How do you compare currency exchange offers?', 'How do you calculate prices with VAT?', 'How do you work out profit and loss as a percentage?', 'How do you calculate simple interest?', 'Compound interest', 'How do you work out depreciation?', 'Tax bands', 'How do you work out take-home pay?', 'How do you plan a budget with percentages and a yearly plan?', 'How do you work out the cost of credit and hire purchase?', 'How do you manage regular payments and bank charges?', 'Percentage change and wages', 'Best buys, interest and exchange']);
  L.use(843, ['How do you share an amount in a ratio and work with changing ratios?', 'Ratio with different units', 'How do you work with direct proportion and formulae?', 'How do you work with inverse proportion and formulae?', 'Density and other rates', 'Changing units of speed', 'Speed, distance and time', 'How do you find average speed over a whole journey?', 'How do you read and draw distance-time graphs?', 'How do you compare value for money using unit rates?']);
  L.use(844, ['What are the properties of 3D objects?', 'How do you find the area and perimeter of compound shapes, including semicircles and trapezia?', 'How do you find the volume of prisms and cylinders?', 'How do you find the surface area of a cylinder and other solids?', 'Volume of cones and spheres', 'Surface area of cones and spheres', 'How do you find the volume and surface area of compound solids?', 'How do you convert units of area and volume?', 'How do you work backwards from a volume or area to find a missing length?', 'Circles, similarity and solids']);
})();
