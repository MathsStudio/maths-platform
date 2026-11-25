/* lessons_new_s3a.js: new S3 Watch lessons for the Let's Learn ideas that had no Watch lesson (topics 841 to 843).
   Each is written in full: basics first, several slow worked examples, common mistakes, real life, "your turn" pauses. */
(function () {
  'use strict';
  var BT = window.BT; if (!BT || !BT.L || !BT.sv || !BT.lk) return;
  var L = BT.L, V = BT.sv, LK = BT.lk, E = L.E, S = L.st, SC = L.SC, g = function (t) { return E(t, 'g'); }, r = function (t) { return E(t, 'r'); };
  function N(title, goal, scenes) { L.full(title, scenes); return L.ep(title, goal, []); }

  /* ---- Laws of indices ---- */
  N('How do you use the laws of indices?', 'how to multiply, divide and raise powers, and use zero and negative indices.', [
    SC('Indices', 'Start with the basics', [
      S("An index is the small raised number in a power. In two to the power five, the two is the base and the five is the index. Index is the singular. The plural is indices. So this lesson is about the rules for powers.", E('2⁵ = 2 × 2 × 2 × 2 × 2', 'b')),
      S("Why do we need rules? Because powers can get big and messy. The rules let us simplify without writing everything out. There are three main laws, and then some special cases. Let's take them one at a time.", V.list(['Multiplying: add the indices', 'Dividing: subtract the indices', 'Power of a power: multiply the indices']))
    ]),
    SC('Law 1: multiplying', 'Add the indices', [
      S("Let's find out where the first law comes from. x squared times x cubed. x squared is x times x. x cubed is x times x times x. Together that is five x's multiplied. So x to the power five.", E('x² × x³ = (x·x) × (x·x·x) = x⁵')),
      S("Look at the indices. Two and three. Two plus three is five. So when we multiply powers with the same base, we add the indices.", E('aᵐ × aⁿ = aᵐ⁺ⁿ', 'g')),
      S("This only works if the bases are the same. Three to the power four times three to the power two is three to the power six. But three to the power four times two to the power two cannot be combined this way.", E('3⁴ × 3² = 3⁶') + r('3⁴ × 2²  ✗  different bases'))
    ]),
    SC('Law 2: dividing', 'Subtract the indices', [
      S("Now dividing. x to the power five, divided by x squared. Write it as a fraction. Five x's on the top, two x's on the bottom. Two pairs cancel. Three x's are left.", E('x⁵ ÷ x² = (x·x·x·x·x) ÷ (x·x) = x³')),
      S("Five take away two is three. So when we divide powers with the same base, we subtract the indices.", E('aᵐ ÷ aⁿ = aᵐ⁻ⁿ', 'g'))
    ]),
    SC('Law 3: power of a power', 'Multiply the indices', [
      S("What about x squared, all cubed? That means x squared, times x squared, times x squared. Three lots of two x's. Six x's altogether. So x to the power six.", E('(x²)³ = x² × x² × x² = x⁶')),
      S("Two times three is six. So for a power of a power, we multiply the indices.", E('(aᵐ)ⁿ = aᵐⁿ', 'g'))
    ]),
    SC('Using the laws', 'Example 1: with numbers in front', [
      S("Simplify six x to the seven, divided by two x to the four. Deal with the numbers first. Six divided by two is three. Then the letters. Seven minus four is three. So three x cubed.", E('6x⁷ ÷ 2x⁴') + g('= 3x³')),
      S("Another. Three a squared, times four a to the five. Multiply the numbers. Three times four is twelve. Add the indices. Two plus five is seven. Twelve a to the seven.", E('3a² × 4a⁵') + g('= 12a⁷'))
    ]),
    SC('Using the laws', 'Example 2: brackets', [
      S("Simplify two x cubed, all to the power four. The power outside the bracket goes on everything inside. Two to the power four is sixteen. And x cubed to the power four is x to the power twelve, since three times four is twelve.", E('(2x³)⁴ = 2⁴ × (x³)⁴') + g('= 16x¹²')),
      S("A common slip is to leave the two alone. The bracket means every part is raised to the power, the number as well as the letter.", V.rule('The power goes on every part.'))
    ]),
    SC('Special case: zero', 'The power zero', [
      S("Look at x cubed divided by x cubed. Anything divided by itself is one. But the law says subtract the indices. Three minus three is zero. So x to the power zero must be one.", E('x³ ÷ x³ = x⁰ = 1')),
      S("This is true for any number, except zero itself. Five to the power zero is one. A million to the power zero is one.", g('a⁰ = 1'))
    ]),
    SC('Special case: negative', 'Negative indices', [
      S("What if we divide a small power by a big one? Two squared divided by two to the five. The law gives two to the negative three. But we can also cancel. Two squared over two to the five leaves one over two cubed. So two to the negative three is one over two cubed. That is one eighth.", E('2⁻³ = 1 ÷ 2³ = 1/8')),
      S("A negative index does not make the answer negative. It flips the number upside down. a to the negative n is one over a to the n.", E('a⁻ⁿ = 1 ÷ aⁿ', 'g'))
    ]),
    SC('Special case: fractions', 'Fractional indices', [
      S("An index of one half means the square root. Twenty-five to the power a half is the square root of twenty-five. That is five. An index of one third means the cube root. Eight to the one third is two.", E('25^(½) = √25 = 5') + E('8^(⅓) = ∛8 = 2')),
      S("What about eight to the two thirds? Take the cube root first, which is two. Then square it. Four. The bottom number of the fraction is the root, and the top number is the power.", g('8^(⅔) = (∛8)² = 2² = 4'))
    ]),
    SC('Watch out!', 'Four common mistakes', [
      S("Mistake one: multiplying the indices when you should add. x squared times x cubed is x to the five, not x to the six.", r('x² × x³ = x⁶  ✗') + g('x² × x³ = x⁵  ✓')),
      S("Mistake two: multiplying the bases. Two cubed times two squared is two to the five. It is not four to the five.", r('2³ × 2² = 4⁵  ✗') + g('2³ × 2² = 2⁵  ✓')),
      S("Mistake three: thinking a negative index makes a negative number. Two to the negative three is one eighth, which is positive.", r('2⁻³ = −8  ✗') + g('2⁻³ = 1/8  ✓')),
      S("Mistake four: thinking anything to the power zero is zero. It is one.", r('5⁰ = 0  ✗') + g('5⁰ = 1  ✓'))
    ]),
    SC('In real life', 'Computers and memory', [
      S("Computer memory is measured in powers of two. A kilobyte is about two to the ten bytes. A megabyte is two to the twenty. To find how many kilobytes are in a megabyte, divide. Two to the twenty divided by two to the ten is two to the ten. That is one thousand and twenty-four.", g('2²⁰ ÷ 2¹⁰ = 2¹⁰ = 1,024'))
    ]),
    L.turn("Your turn! Number one. Simplify x to the six, times x to the four. Pause and try it.", E('x⁶ × x⁴'), "Add the indices. Six plus four is ten. x to the ten.", g('x¹⁰')),
    L.turn("Your turn! Number two. Simplify twelve y to the eight, divided by three y to the two. Pause and try it.", E('12y⁸ ÷ 3y²'), "Twelve divided by three is four. Eight minus two is six. Four y to the six.", g('4y⁶')),
    L.turn("Your turn! Number three. Simplify three a squared, all to the power three. Pause and try it.", E('(3a²)³'), "Three cubed is twenty-seven. a squared cubed is a to the six. Twenty-seven a to the six.", g('27a⁶')),
    L.turn("Your turn! Number four. Work out four to the negative two. Pause and try it.", E('4⁻²'), "One over four squared. One over sixteen.", g('1/16')),
    L.rec('How do you use the laws of indices?', "To multiply powers with the same base, add the indices. To divide, subtract them. For a power of a power, multiply. Anything to the power zero is one. A negative index means one over the power. A fractional index means a root. Always apply the power to every part inside a bracket.", ['×: add indices', '÷: subtract indices', '(aᵐ)ⁿ: multiply', 'a⁰ = 1, a⁻ⁿ = 1/aⁿ', 'a^(1/2) = √a'])
  ]);

  /* ---- Standard form with negative powers ---- */
  N('How do you write numbers in standard form, including small numbers?', 'how to write very large and very small numbers in standard form, and convert back.', [
    SC('Standard form', 'Start with the basics', [
      S("Scientists work with huge numbers, like the distance to the sun, and tiny numbers, like the width of a hair. Writing all the zeros is slow, and easy to get wrong. Standard form is a short way to write them.", E('150,000,000 km', 'b') + E('0.00007 m', 'b')),
      S("A number in standard form looks like this. A number between one and ten, times ten to a power. The first part must be at least one, and less than ten. The power of ten is a whole number, which can be positive or negative.", E('a × 10ⁿ', 'g') + V.rule('1 ≤ a < 10, and n is a whole number'))
    ]),
    SC('Powers of ten', 'Why it works', [
      S("Look at the powers of ten. Ten to the one is ten. Ten squared is one hundred. Ten cubed is one thousand. Each time, one more zero.", E('10¹ = 10') + E('10² = 100') + E('10³ = 1,000')),
      S("Now go downwards. Ten to the zero is one. Ten to the negative one is one tenth, zero point one. Ten to the negative two is zero point zero one. Each time, we divide by ten, and the decimal point moves one place left.", E('10⁰ = 1') + E('10⁻¹ = 0.1') + E('10⁻² = 0.01'))
    ]),
    SC('Large numbers', 'Example 1: 5,600,000', [
      S("Write five million, six hundred thousand in standard form. First, find the number between one and ten. Put the decimal point after the first digit. Five point six.", E('5.6')),
      S("Now count how many places the decimal point moved. In five million six hundred thousand, the point started at the end. It moved six places to the left to get to five point six. So the power is six.", E('5,600,000 → 5.6 × 10⁶') + g('5.6 × 10⁶'))
    ]),
    SC('Small numbers', 'Example 2: 0.000032', [
      S("Now a small number. Write zero point zero zero zero zero three two in standard form. Again find the number between one and ten. That is three point two.", E('3.2')),
      S("This time the decimal point had to move to the right, five places, to get from the original to three point two. When the number is small, the power is negative. So the power is negative five.", E('0.000032 → 3.2 × 10⁻⁵') + g('3.2 × 10⁻⁵')),
      S("Here is a quick check. Is the number big or small? If it is bigger than ten, the power is positive. If it is smaller than one, the power is negative.", V.cols([V.card('Big number: positive power', 'g', true), V.card('Small number: negative power', 'b', true)], 2))
    ]),
    SC('Converting back', 'Example 3: to an ordinary number', [
      S("Now the other way. Write six point two times ten to the negative three as an ordinary number. The power is negative three. So move the decimal point three places to the left. Six point two becomes zero point zero zero six two.", E('6.2 × 10⁻³ = 0.0062', 'g')),
      S("And four point eight times ten to the five. Move the point five places to the right. Four point eight becomes four hundred and eighty thousand.", E('4.8 × 10⁵ = 480,000', 'g'))
    ]),
    SC('Comparing sizes', 'Example 4: which is bigger?', [
      S("Which is bigger, three times ten to the negative five, or eight times ten to the negative six? Look at the powers first. Negative five is bigger than negative six. So the first number is bigger.", E('3 × 10⁻⁵   or   8 × 10⁻⁶ ?')),
      S("Check by writing them out. Three times ten to the negative five is zero point zero zero zero zero three. Eight times ten to the negative six is zero point zero zero zero zero zero eight. The first has the larger digit sooner. So three times ten to the negative five is bigger.", g('3 × 10⁻⁵ is bigger'))
    ]),
    SC('Not quite standard', 'Example 5: fixing the front', [
      S("What about forty-five times ten to the four? It looks like standard form, but forty-five is not between one and ten. Fix it. Forty-five is four point five times ten. So four point five times ten, times ten to the four. That is four point five times ten to the five.", E('45 × 10⁴ = 4.5 × 10 × 10⁴') + g('= 4.5 × 10⁵')),
      S("And zero point six times ten to the three. Zero point six is six times ten to the negative one. So six times ten to the negative one, times ten to the three. Six times ten squared.", E('0.6 × 10³ = 6 × 10²', 'g'))
    ]),
    SC('Watch out!', 'Three common mistakes', [
      S("Mistake one: the first number is not between one and ten. Twelve times ten to the three is not in standard form.", r('12 × 10³  ✗') + g('1.2 × 10⁴  ✓')),
      S("Mistake two: using a positive power for a small number. Zero point zero zero four is four times ten to the negative three.", r('4 × 10³  ✗') + g('4 × 10⁻³  ✓')),
      S("Mistake three: miscounting the places. Count carefully, one place at a time, from the original decimal point.", V.rule('Count the places the point moves.'))
    ]),
    SC('In real life', 'Science', [
      S("The distance from the Earth to the Sun is about one hundred and fifty million kilometres. In standard form, one point five times ten to the eight. A red blood cell is about zero point zero zero zero zero seven metres across. In standard form, seven times ten to the negative five.", E('1.5 × 10⁸ km') + E('7 × 10⁻⁵ m'))
    ]),
    L.turn("Your turn! Number one. Write three hundred and forty thousand in standard form. Pause and try it.", E('340,000'), "Three point four. The point moves five places. Three point four times ten to the five.", g('3.4 × 10⁵')),
    L.turn("Your turn! Number two. Write zero point zero zero zero zero eight in standard form. Pause and try it.", E('0.00008'), "Eight. The point moves five places to the right. A small number, so a negative power. Eight times ten to the negative five.", g('8 × 10⁻⁵')),
    L.turn("Your turn! Number three. Write two point five times ten to the negative two as an ordinary number. Pause and try it.", E('2.5 × 10⁻²'), "Move the point two places left. Zero point zero two five.", g('0.025')),
    L.rec('How do you write numbers in standard form, including small numbers?', "Standard form is a number between one and ten, times a power of ten. Big numbers have a positive power. Small numbers have a negative power. The power counts how many places the decimal point moves. To convert back, move the point the other way. Always check the front number is at least one and less than ten.", ['a × 10ⁿ with 1 ≤ a < 10', 'Big: n positive', 'Small: n negative', 'Count the places the point moves'])
  ]);

  /* ---- Multiplying and dividing in standard form ---- */
  N('How do you multiply and divide numbers in standard form?', 'how to add, multiply and divide numbers written in standard form.', [
    SC('Calculating', 'Start with the basics', [
      S("Numbers in standard form are made of two parts. The front number, between one and ten. And the power of ten. When we multiply or divide, we deal with each part separately. Numbers with numbers, and powers with powers.", E('(a × 10ᵐ) × (b × 10ⁿ) = (a × b) × 10ᵐ⁺ⁿ', 'g')),
      S("This works because of the laws of indices. When we multiply powers of ten, we add the indices. When we divide powers of ten, we subtract the indices.", V.cols([V.card('× powers: add', 'b', true), V.card('÷ powers: subtract', 'g', true)], 2))
    ]),
    SC('Multiplying', 'Example 1: simple', [
      S("Work out three times ten to the four, times two times ten to the five. Multiply the front numbers. Three times two is six. Add the powers. Four plus five is nine.", E('(3 × 10⁴) × (2 × 10⁵)') + E('3 × 2 = 6') + E('10⁴ × 10⁵ = 10⁹')),
      S("The answer is six times ten to the nine.", g('6 × 10⁹'))
    ]),
    SC('Multiplying', 'Example 2: a tidy-up is needed', [
      S("Now four times ten to the six, times five times ten to the three. Four times five is twenty. Six plus three is nine. So twenty times ten to the nine.", E('(4 × 10⁶) × (5 × 10³) = 20 × 10⁹')),
      S("But twenty is not between one and ten. So the answer is not yet in standard form. Twenty is two times ten. So twenty times ten to the nine is two times ten to the ten.", g('= 2 × 10¹⁰'))
    ]),
    SC('Dividing', 'Example 3: eight times ten to the seven, over two times ten to the three', [
      S("Divide the front numbers. Eight divided by two is four. Subtract the powers. Seven minus three is four. So four times ten to the four.", E('(8 × 10⁷) ÷ (2 × 10³)') + g('= 4 × 10⁴'))
    ]),
    SC('Negative powers', 'Example 4: small numbers', [
      S("Multiply six times ten to the negative three, by three times ten to the negative two. Six times three is eighteen. Add the powers. Negative three plus negative two is negative five. So eighteen times ten to the negative five.", E('18 × 10⁻⁵')),
      S("Eighteen is one point eight times ten. So one point eight times ten, times ten to the negative five. That is one point eight times ten to the negative four. Notice that the power went up by one, from negative five to negative four.", g('= 1.8 × 10⁻⁴'))
    ]),
    SC('Dividing, with a tidy-up', 'Example 5: a smaller front number', [
      S("Divide two times ten to the six, by five times ten to the two. Two divided by five is zero point four. Six minus two is four. So zero point four times ten to the four.", E('0.4 × 10⁴')),
      S("Zero point four is not between one and ten. It is four times ten to the negative one. So four times ten to the negative one, times ten to the four. That is four times ten cubed. Notice the power went down by one.", g('= 4 × 10³'))
    ]),
    SC('Adding', 'Example 6: a different method', [
      S("Adding is different. Three times ten to the five, plus four times ten to the four. The powers are not the same, so we cannot just add the front numbers. The easiest way is to write them as ordinary numbers. Three hundred thousand, plus forty thousand, is three hundred and forty thousand.", E('300,000 + 40,000 = 340,000')),
      S("In standard form, that is three point four times ten to the five.", g('3.4 × 10⁵')),
      S("Another way is to give them the same power. Four times ten to the four is zero point four times ten to the five. Then three plus zero point four is three point four. Same answer.", E('3 + 0.4 = 3.4'))
    ]),
    SC('Watch out!', 'Three common mistakes', [
      S("Mistake one: multiplying the powers. We add the powers when multiplying powers of ten.", r('10⁴ × 10⁵ = 10²⁰  ✗') + g('10⁴ × 10⁵ = 10⁹  ✓')),
      S("Mistake two: forgetting to tidy up. If the front number is not between one and ten after calculating, fix it, and change the power.", V.rule('Check the front number at the end.')),
      S("Mistake three: adding powers when adding numbers. For addition, the powers must be matched first. We do not add the powers.", r('10⁵ + 10⁴ = 10⁹  ✗'))
    ]),
    SC('In real life', 'Light and distance', [
      S("Light travels at about three times ten to the eight metres per second. How far does it go in five hundred seconds, which is five times ten squared? Multiply. Three times five is fifteen. Eight plus two is ten. Fifteen times ten to the ten, which is one point five times ten to the eleven metres.", E('(3 × 10⁸) × (5 × 10²) = 15 × 10¹⁰') + g('= 1.5 × 10¹¹ m'))
    ]),
    L.turn("Your turn! Number one. Work out two times ten to the three, times four times ten to the five. Pause and try it.", E('(2 × 10³)(4 × 10⁵)'), "Two times four is eight. Three plus five is eight. Eight times ten to the eight.", g('8 × 10⁸')),
    L.turn("Your turn! Number two. Work out six times ten to the eight, divided by three times ten to the two. Pause and try it.", E('(6 × 10⁸) ÷ (3 × 10²)'), "Six divided by three is two. Eight minus two is six. Two times ten to the six.", g('2 × 10⁶')),
    L.turn("Your turn! Number three. Work out five times ten to the four, times six times ten to the three. Give it in standard form. Pause and try it.", E('(5 × 10⁴)(6 × 10³)'), "Thirty times ten to the seven. Thirty is three times ten. So three times ten to the eight.", g('3 × 10⁸')),
    L.rec('How do you multiply and divide numbers in standard form?', "To multiply, multiply the front numbers and add the powers of ten. To divide, divide the front numbers and subtract the powers. Then check the front number is still between one and ten, and tidy up if it is not. To add or subtract, make the powers the same first, or write the numbers out in full.", ['× : multiply fronts, add powers', '÷ : divide fronts, subtract powers', 'Tidy the front number', '+ and −: match the powers first'])
  ]);

  /* ---- Rounding and bounds ---- */
  N('How do you work with rounding and upper and lower bounds?', 'how to find the lower and upper bounds of rounded numbers and use tolerance.', [
    SC('Bounds', 'Start with the basics', [
      S("Suppose a bag of flour is labelled five hundred grams. Is it exactly five hundred? Probably not. It might have been rounded. The real mass could be a little more, or a little less. Bounds tell us the smallest and largest the real value could be.", V.cols([V.card('Lower bound: smallest possible', 'b', true), V.card('Upper bound: largest possible', 'g', true)], 2)),
      S("A rounded number covers a range of real values. If a length is three point four, rounded to one decimal place, the real length is anywhere from three point three five up to, but not including, three point four five.", E('3.35 ≤ length < 3.45', 'g'))
    ]),
    SC('Finding bounds', 'Example 1: one decimal place', [
      S("A length is three point four centimetres, to one decimal place. Here is the method. Find the rounding unit. It is zero point one. Half of that is zero point zero five. Take it away to get the lower bound. Add it to get the upper bound.", E('Unit = 0.1, half = 0.05')),
      S("Three point four minus zero point zero five is three point three five. Three point four plus zero point zero five is three point four five.", g('Lower 3.35, upper 3.45'))
    ]),
    SC('Finding bounds', 'Example 2: nearest ten', [
      S("A crowd is eighty, to the nearest ten. The rounding unit is ten. Half is five. Eighty minus five is seventy-five. Eighty plus five is eighty-five.", E('75 ≤ crowd < 85', 'g')),
      S("Be careful with the upper end. Eighty-five itself would round up to ninety. So the real number is less than eighty-five. We still call eighty-five the upper bound.", V.rule('Upper bound: not quite reached.'))
    ]),
    SC('Finding bounds', 'Example 3: nearest whole number', [
      S("A distance is twelve kilometres, to the nearest whole number. The unit is one. Half is zero point five. The bounds are eleven point five and twelve point five.", g('11.5 ≤ d < 12.5'))
    ]),
    SC('Tolerance', 'Example 4: plus or minus', [
      S("Manufacturers use tolerance. A pipe is two hundred and fifty millimetres, plus or minus five. This means it can be up to five millimetres too long or too short. The range is two hundred and forty-five to two hundred and fifty-five.", E('250 ± 5 mm') + g('245 to 255 mm')),
      S("A pipe measuring two hundred and fifty-eight millimetres is outside the tolerance. It is rejected.", r('258 > 255  ✗ rejected'))
    ]),
    SC('Calculations', 'Example 5: the largest area', [
      S("A rectangle is eight centimetres long and five wide, both to the nearest centimetre. What is the largest possible area? To make the area as large as possible, use the largest bounds. Length up to eight point five. Width up to five point five.", E('Max: 8.5 × 5.5')),
      S("Eight point five times five point five is forty-six point seven five square centimetres.", g('Max area = 46.75 cm²')),
      S("For the smallest area, use the smallest bounds. Seven point five times four point five is thirty-three point seven five.", g('Min area = 33.75 cm²'))
    ]),
    SC('Calculations', 'Example 6: dividing', [
      S("A speed is distance over time. A distance is one hundred metres and a time is ten seconds, both to the nearest whole number. For the largest speed, use the biggest distance and the smallest time. One hundred point five over nine point five. For the smallest speed, use the smallest distance over the biggest time.", E('Max speed = 100.5 ÷ 9.5') + E('Min speed = 99.5 ÷ 10.5')),
      S("This is the key idea. To make a division as big as possible, make the top as big as possible, and the bottom as small as possible.", V.rule('Max ÷: biggest ÷ smallest.'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Rounding the bound the wrong way. A length is seven centimetres, to the nearest centimetre. Wrong: the upper bound is seven point four. The bounds are half a unit either side. The lower bound is six point five and the upper bound is seven point five.", r('upper bound = 7.4  ✗') + g('upper bound = 7.5  ✓')),
      S("Mistake two. Using lower bounds for everything. A rectangle is six by four, each to the nearest unit. Wrong: for the greatest area, use the lower bounds, five point five times three point five, nineteen point two five. The greatest area needs both upper bounds. Six point five times four point five, twenty-nine point two five.", r('5.5 × 3.5 = 19.25 (greatest)  ✗') + g('6.5 × 4.5 = 29.25  ✓')),
      S("Mistake three. Using the wrong bounds for a division. The greatest value of twelve divided by four, each to the nearest whole number. Wrong: upper over upper, twelve point five over four point five, two point seven eight. To make a fraction as big as possible, make the top as big as possible and the bottom as small as possible. Twelve point five over three point five, three point five seven.", r('12.5 ÷ 4.5 ≈ 2.78  ✗') + g('12.5 ÷ 3.5 ≈ 3.57  ✓'))
    ]),
    SC('In real life', 'Weighing', [
      S("A parcel weighs two point three kilograms, to one decimal place. A courier charges extra above two point four kilograms. Could the parcel really be over? The upper bound is two point three five. That is less than two point four. So no extra charge.", E('Upper bound 2.35 < 2.4') + g('No extra charge'))
    ]),
    L.turn("Your turn! Number one. A mass is seventeen kilograms, to the nearest kilogram. What are the lower and upper bounds? Pause and try it.", E('17 kg'), "Half of one is zero point five. Sixteen point five and seventeen point five.", g('16.5 and 17.5')),
    L.turn("Your turn! Number two. A time is six point two seconds, to one decimal place. What is the lower bound? Pause and try it.", E('6.2 s'), "Half of zero point one is zero point zero five. Six point two minus zero point zero five. Six point one five.", g('6.15 s')),
    L.turn("Your turn! Number three. A square has sides of ten centimetres, to the nearest centimetre. What is the largest possible area? Pause and try it.", E('10.5 × 10.5'), "The upper bound of a side is ten point five. Ten point five squared is one hundred and ten point two five.", g('110.25 cm²')),
    L.rec('How do you work with rounding and upper and lower bounds?', "A rounded number could be anywhere within half a rounding unit either side. Subtract half a unit for the lower bound, and add half a unit for the upper bound. Tolerance is written as plus or minus. For calculations, think which bounds make the answer as large or as small as possible.", ['Half the rounding unit', 'lower ≤ value < upper', 'Tolerance: ± range', 'Max ÷: biggest ÷ smallest'])
  ]);

  /* ---- Rational and irrational numbers ---- */
  N('What are rational and irrational numbers?', 'how to tell rational numbers from irrational numbers, and recognise exact values like surds and pi.', [
    SC('Kinds of number', 'Start with the basics', [
      S("Numbers come in families. Natural numbers are the counting numbers, one, two, three. Integers include zero and the negatives. Now we meet two bigger families. Rational and irrational numbers.", V.list(['Natural: 1, 2, 3 …', 'Integers: … −1, 0, 1 …'])),
      S("A rational number is any number that can be written as a fraction, with a whole number on top and a whole number on the bottom. The word comes from ratio. For example, a half, three quarters, and even four, which is four over one.", E('½, ¾, 4 = 4/1', 'g'))
    ]),
    SC('Decimals', 'Example 1: which decimals are rational?', [
      S("Decimals that stop, like zero point seven five, are rational. Zero point seven five is seventy-five over one hundred, which is three quarters. Decimals that repeat forever, like zero point three three three, are rational too. That is one third.", E('0.75 = 3/4') + E('0.333… = 1/3')),
      S("So a decimal is rational if it stops, or repeats in a pattern.", V.rule('Stops or repeats: rational.'))
    ]),
    SC('Irrational numbers', 'Example 2: no fraction', [
      S("An irrational number cannot be written as a fraction. As a decimal, it goes on forever, and never repeats. The most famous example is pi. Three point one four one five nine and so on, with no pattern.", E('π = 3.14159265…', 'b')),
      S("Another example is the square root of two. One point four one four two one and so on. It cannot be written exactly as a fraction. This is why we keep it as root two.", E('√2 = 1.41421356…', 'b'))
    ]),
    SC('Square roots', 'Example 3: sorting roots', [
      S("Is the square root of sixteen rational? Sixteen is a perfect square. The square root is four. Four is a whole number, so it is rational. What about the square root of seven? Seven is not a perfect square. Its root goes on forever. So it is irrational.", E('√16 = 4  → rational', 'g') + E('√7 = 2.6457…  → irrational', 'b')),
      S("The rule is simple. The square root of a perfect square is rational. The square root of any other whole number is irrational.", V.rule('Root of a perfect square: rational.'))
    ]),
    SC('Combining', 'Example 4: sums and products', [
      S("What happens when we combine them? A rational number plus a rational number is always rational. A rational number times an irrational number, like three times root two, is irrational. But careful. Root two times root two is two. Two is rational.", E('3 × √2 → irrational') + E('√2 × √2 = 2 → rational', 'g')),
      S("And pi plus three is still irrational. Adding a whole number does not make the endless decimal stop.", E('π + 3 → irrational'))
    ]),
    SC('Exact answers', 'Example 5: why we leave answers as pi or root', [
      S("A circle has radius five. Its area is pi times five squared. That is twenty-five pi. This is the exact answer. If we write seventy-eight point five, we have rounded. Exact answers keep pi or the root in the answer.", E('A = 25π', 'g') + V.rule('Exact: leave it as π or a surd.'))
    ]),
    SC('Watch out!', 'Three common mistakes', [
      S("Mistake one: thinking every decimal that goes on forever is irrational. Zero point three three three repeating is rational. It is a third.", r('0.333… is irrational  ✗') + g('0.333… = 1/3 is rational  ✓')),
      S("Mistake two: thinking all square roots are irrational. The square root of nine is three, which is rational.", r('√9 irrational  ✗') + g('√9 = 3 rational  ✓')),
      S("Mistake three: thinking twenty-two over seven is pi. It is only a close approximation. It is a fraction, so it is rational, but pi is not.", V.rule('22/7 ≈ π, but ≠ π'))
    ]),
    SC('In real life', 'Measuring', [
      S("A square with sides of one metre has a diagonal of root two metres. This length is irrational. No matter how finely we measure, we can never write its exact length as a fraction. We can only get closer.", V.note('The diagonal of a unit square is irrational'))
    ]),
    L.turn("Your turn! Number one. Is zero point six rational or irrational? Pause and think.", E('0.6'), "It is six tenths, which is three fifths. It is a fraction, so it is rational.", g('Rational')),
    L.turn("Your turn! Number two. Is the square root of twenty-five rational or irrational? Pause and think.", E('√25'), "The root of twenty-five is five. That is rational.", g('Rational')),
    L.turn("Your turn! Number three. Is the square root of eleven rational or irrational? Pause and think.", E('√11'), "Eleven is not a perfect square. So it is irrational.", g('Irrational')),
    L.rec('What are rational and irrational numbers?', "A rational number can be written as a fraction. Its decimal stops or repeats. An irrational number cannot be written as a fraction, and its decimal goes on forever without repeating. Pi and the square roots of non-square numbers are irrational. Leave exact answers in terms of pi or a surd.", ['Rational: a fraction', 'Decimal stops or repeats', 'Irrational: never repeats', 'π and √2 are irrational'])
  ]);

  /* ---- Estimating ---- */
  N('How do you estimate by rounding to one significant figure?', 'how to round to one significant figure and use it to estimate calculations.', [
    SC('Estimating', 'Start with the basics', [
      S("Before you use a calculator, it is wise to have an idea of the answer. That is called estimating. If the calculator says four thousand, and your estimate was forty, you know there is a mistake.", V.rule('Estimate first, then check the answer is sensible.')),
      S("To estimate, we round each number to one significant figure. A significant figure is a digit that matters. The first significant figure is the first digit that is not zero. It is the digit with the biggest value.", E('4,872 → 5,000', 'g'))
    ]),
    SC('One significant figure', 'Example 1: rounding', [
      S("Round four thousand, eight hundred and seventy-two to one significant figure. The first significant figure is the four, in the thousands place. Look at the next digit, an eight. It is five or more, so round up. Five thousand.", E('4,872 → 5,000')),
      S("Round zero point zero zero three six eight. The first digit that is not zero is the three. Look at the next digit, a six. Round up. Zero point zero zero four.", E('0.00368 → 0.004')),
      S("Round sixty-three. The six is in the tens. The next digit is three, so we round down. Sixty.", E('63 → 60'))
    ]),
    SC('Estimating', 'Example 2: a product', [
      S("Estimate forty-eight point two times nineteen point eight. Round each to one significant figure. Fifty, and twenty. Then multiply. Fifty times twenty is one thousand.", E('48.2 × 19.8') + E('≈ 50 × 20 = 1,000', 'g')),
      S("The exact answer is nine hundred and fifty-four point three six. Our estimate of one thousand is close. That is just what an estimate should be.", E('Exact: 954.36'))
    ]),
    SC('Estimating', 'Example 3: a division', [
      S("Estimate three hundred and ninety-eight divided by zero point one nine eight. Round to one significant figure. Four hundred, and zero point two. Divide. Four hundred divided by zero point two. Dividing by zero point two is the same as multiplying by five. Two thousand.", E('398 ÷ 0.198') + E('≈ 400 ÷ 0.2 = 2,000', 'g')),
      S("Dividing by a number smaller than one makes the answer bigger. Always check this makes sense.", V.rule('÷ by less than 1: the answer grows.'))
    ]),
    SC('Estimating', 'Example 4: powers and roots', [
      S("Estimate eight point eight squared, plus the square root of eighty-one point five. Round to nine, and eighty-one. Nine squared is eighty-one. The square root of eighty-one is nine. Eighty-one plus nine is ninety.", E('8.8² + √81.5') + E('≈ 9² + √81 = 81 + 9 = 90', 'g')),
      S("When you round for a square root, choose a nearby perfect square. That keeps the sum easy.", V.rule('Roots: pick a nearby square number.'))
    ]),
    SC('Estimating', 'Example 5: a fraction', [
      S("Estimate three hundred and two times ninety-eight point eight, divided by five point one. Round to three hundred, one hundred, and five. Three hundred times one hundred is thirty thousand. Divided by five is six thousand.", E('(302 × 98.8) ÷ 5.1') + E('≈ (300 × 100) ÷ 5 = 6,000', 'g'))
    ]),
    SC('Over or under?', 'Example 6: is the estimate too big or too small?', [
      S("Sometimes we are asked if the estimate is bigger or smaller than the real answer. In forty-eight times nineteen, we rounded forty-eight up to fifty, and nineteen up to twenty. We rounded both up, and we multiplied, so the estimate is bigger than the real answer.", E('Both rounded up, so the estimate is an over-estimate', 'g')),
      S("But for a division, rounding the top up makes the answer bigger, while rounding the bottom up makes the answer smaller. Think about each number.", V.rule('Think about each number separately.'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Rounding a small number wrongly. Round zero point zero three eight six to one significant figure. Wrong: zero point zero three. The next digit is an eight, so round up. Zero point zero four.", r('0.0386 ≈ 0.03  ✗') + g('0.0386 ≈ 0.04  ✓')),
      S("Mistake two. Rounding to the wrong place. Round four hundred and seventy-three to one significant figure. Wrong: four hundred and seventy, which keeps two digits. One significant figure means one digit, then zeros. The next digit is a seven, so round up. Five hundred.", r('473 ≈ 470  ✗') + g('473 ≈ 500  ✓')),
      S("Mistake three. Using the exact numbers, not rounded ones. Estimate four point eight times nineteen point six, divided by zero point five two. Wrong: use a calculator, one hundred and eighty point nine, and call it an estimate. An estimate rounds first. Five times twenty, divided by zero point five. Two hundred.", r('exact 180.9, not an estimate  ✗') + g('5 × 20 ÷ 0.5 = 200  ✓'))
    ]),
    SC('In real life', 'Shopping', [
      S("You buy eleven items at two pounds ninety-nine each. Estimate the cost. Round to ten items at three pounds. About thirty pounds. The shop assistant says thirty-two pounds eighty-nine. Close enough to your estimate, so it seems right.", E('11 × 2.99 ≈ 10 × 3 = 30') + g('Exact: £32.89'))
    ]),
    L.turn("Your turn! Number one. Round six thousand, one hundred and five to one significant figure. Pause and try it.", E('6,105'), "The first digit is six. The next digit is one. Round down. Six thousand.", g('6,000')),
    L.turn("Your turn! Number two. Estimate fifty-one point two times nine point eight. Pause and try it.", E('51.2 × 9.8'), "Fifty times ten. Five hundred.", g('500')),
    L.turn("Your turn! Number three. Estimate six hundred and ten divided by zero point three. Pause and try it.", E('610 ÷ 0.3'), "Six hundred divided by zero point three. That is two thousand.", g('2,000')),
    L.rec('How do you estimate by rounding to one significant figure?', "Round every number to one significant figure. The first significant figure is the first digit that is not zero. Then do the calculation with the easy numbers. For roots, choose a nearby perfect square. Check that the real answer is close to your estimate.", ['1 s.f.: first non-zero digit', 'Round, then calculate', 'Roots: nearby square number', 'Check the answer is sensible'])
  ]);

  /* ---- Reverse percentages ---- */
  N('How do you work out reverse percentages?', 'how to find the original amount when you know the amount after a percentage change.', [
    SC('Reverse percentages', 'Start with the basics', [
      S("Sometimes we know the price after a change, and want to know what it was before. For example, a coat is in a sale at eighty pounds, after twenty per cent was taken off. What was the original price? This is a reverse percentage problem.", E('Sale price £80 after 20% off. Original = ?', 'b')),
      S("The most common mistake is to add twenty per cent to eighty. That does not work. The twenty per cent was taken off the original price, not off the eighty. We must work backwards from the original.", V.rule('The percentage is of the original, not of the new price.'))
    ]),
    SC('The method', 'Example 1: 20% off', [
      S("Think of the original price as one hundred per cent. After twenty per cent off, we have eighty per cent left. So the sale price, eighty pounds, is eighty per cent of the original.", E('100% − 20% = 80%') + E('80% of original = £80')),
      S("Now find one per cent. Divide by eighty. Eighty pounds divided by eighty is one pound. So one per cent is one pound. The original is one hundred per cent. That is one hundred pounds.", E('1% = 80 ÷ 80 = £1') + g('100% = £100'))
    ]),
    SC('The multiplier method', 'Example 2: the same problem, quicker', [
      S("There is a quicker way. The sale price is the original times zero point eight. To go backwards, divide by zero point eight. Eighty divided by zero point eight is one hundred.", E('Original × 0.8 = 80') + g('Original = 80 ÷ 0.8 = £100')),
      S("Reverse percentages always means divide by the multiplier.", V.rule('Going back: divide by the multiplier.'))
    ]),
    SC('After an increase', 'Example 3: a price rise', [
      S("A bike costs two hundred and seventy pounds after a ten per cent increase. What was the price before? After an increase of ten per cent, the multiplier is one point one. Divide by one point one.", E('Multiplier = 1.1') + E('270 ÷ 1.1 = 245.45…')),
      S("Two hundred and seventy divided by one point one is two hundred and forty-five pounds forty-five. Check. Two hundred and forty-five forty-five times one point one is two hundred and seventy. It works.", g('≈ £245.45'))
    ]),
    SC('With VAT', 'Example 4: taking off VAT', [
      S("A laptop costs seven hundred and twenty pounds including twenty per cent VAT. What is the price before VAT? Including VAT means the price was multiplied by one point two. Divide by one point two.", E('720 ÷ 1.2') + g('= £600')),
      S("Check. Twenty per cent of six hundred is one hundred and twenty. Six hundred plus one hundred and twenty is seven hundred and twenty.", E('600 + 120 = 720 ✓'))
    ]),
    SC('A decrease again', 'Example 5: a population', [
      S("A population fell by fifteen per cent, to seventeen thousand. What was it before? After a fall of fifteen per cent, the multiplier is zero point eight five. Divide. Seventeen thousand divided by zero point eight five is twenty thousand.", E('17,000 ÷ 0.85') + g('= 20,000'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Taking the percentage off the sale price. A coat costs sixty pounds after a twenty per cent discount. Wrong: twenty per cent of sixty is twelve, so the original was seventy-two. The sixty pounds is eighty per cent of the original. Divide by zero point eight. Seventy-five pounds.", r('60 + 12 = 72  ✗') + g('60 ÷ 0.8 = 75  ✓')),
      S("Mistake two. Multiplying instead of dividing. A price is one hundred and twenty pounds after a twenty per cent increase. Wrong: one twenty times one point two, one hundred and forty-four. That would be a bigger original price, which cannot be right. Divide by one point two. One hundred pounds.", r('120 × 1.2 = 144  ✗') + g('120 ÷ 1.2 = 100  ✓')),
      S("Mistake three. Using the wrong multiplier. After a fifteen per cent decrease the price is sixty-eight pounds. Wrong: divide by zero point one five. The multiplier for a fifteen per cent decrease is zero point eight five. Sixty-eight divided by zero point eight five is eighty pounds.", r('68 ÷ 0.15 ≈ 453  ✗') + g('68 ÷ 0.85 = 80  ✓'))
    ]),
    SC('In real life', 'Sales', [
      S("A pair of trainers is reduced by thirty per cent to fifty-six pounds. What was the original price? The multiplier is zero point seven. Fifty-six divided by zero point seven is eighty pounds. A real saving of twenty-four pounds.", g('56 ÷ 0.7 = £80'))
    ]),
    L.turn("Your turn! Number one. After a twenty-five per cent discount, a jacket costs forty-five pounds. What was the original price? Pause and try it.", E('45 ÷ 0.75'), "The multiplier is zero point seven five. Forty-five divided by zero point seven five is sixty pounds.", g('£60')),
    L.turn("Your turn! Number two. A salary is thirty-three thousand pounds after a ten per cent rise. What was it before? Pause and try it.", E('33,000 ÷ 1.1'), "The multiplier is one point one. Thirty-three thousand divided by one point one is thirty thousand pounds.", g('£30,000')),
    L.turn("Your turn! Number three. A bill is one hundred and eighty pounds including twenty per cent VAT. What is the price without VAT? Pause and try it.", E('180 ÷ 1.2'), "One hundred and eighty divided by one point two is one hundred and fifty pounds.", g('£150')),
    L.rec('How do you work out reverse percentages?', "The percentage is always taken from the original amount. Write the multiplier for the change, one plus the rate for an increase, or one minus the rate for a decrease. To find the original, divide the new amount by the multiplier. Check by multiplying back.", ['Find the multiplier', 'Original = new ÷ multiplier', 'Never add the percentage back', 'Check by multiplying'])
  ]);

  /* ---- Repeated percentage change ---- */
  N('How do you work with repeated percentage change?', 'how to apply a percentage change more than once using powers of a multiplier.', [
    SC('Repeated change', 'Start with the basics', [
      S("Prices can rise by the same percentage year after year. A town can grow by two per cent every year. When a percentage change happens again and again, we call it repeated percentage change.", V.rule('Each change is on the new amount.')),
      S("Here is the key idea. The second change is a percentage of the new amount, not the original. So you cannot just add the percentages together. Two increases of ten per cent are not a twenty per cent increase.", E('10% then 10% ≠ 20%', 'r'))
    ]),
    SC('Year by year', 'Example 1: £500 grows at 10% a year', [
      S("Let's see it step by step. Five hundred pounds goes up by ten per cent. The multiplier is one point one. Five hundred times one point one is five hundred and fifty pounds.", E('500 × 1.1 = 550')),
      S("The next year, we increase the new amount. Five hundred and fifty times one point one is six hundred and five.", E('550 × 1.1 = 605')),
      S("After two years, the total is six hundred and five pounds. That is an increase of one hundred and five pounds. A single twenty per cent increase would only have given six hundred. So the repeated change is bigger.", g('£605, not £600'))
    ]),
    SC('Using a power', 'Example 2: a shortcut', [
      S("We multiplied by one point one twice. That is the same as multiplying by one point one squared. One point one squared is one point two one. So five hundred times one point two one. Six hundred and five.", E('500 × 1.1² = 500 × 1.21') + g('= £605')),
      S("For three years, use the power three. For ten years, use the power ten. The number of changes is the power.", V.rule('n changes: multiplier to the power n.'))
    ]),
    SC('Decreases', 'Example 3: a car loses value', [
      S("A car costs twelve thousand pounds. It loses fifteen per cent of its value each year. What is it worth after three years? The multiplier is zero point eight five. The power is three.", E('12,000 × 0.85³')),
      S("Zero point eight five cubed is about zero point six one four. Times twelve thousand is about seven thousand, three hundred and seventy pounds, to the nearest ten pounds.", g('≈ £7,370'))
    ]),
    SC('Different changes', 'Example 4: an increase then a decrease', [
      S("What if the changes are different? A price rises by twenty per cent, then falls by twenty per cent. Does it return to the start? The multipliers are one point two, and zero point eight. Multiply them. One point two times zero point eight is zero point nine six.", E('1.2 × 0.8 = 0.96')),
      S("Zero point nine six means ninety-six per cent. The price is four per cent lower than the start. It does not return to the original, because each change is on a different amount.", g('Overall: 4% decrease'))
    ]),
    SC('Overall change', 'Example 5: finding the overall percentage', [
      S("Two years of growth of five per cent. What is the overall percentage increase? One point zero five squared is one point one zero two five. That is one hundred and ten point two five per cent of the original. So the overall increase is ten point two five per cent.", E('1.05² = 1.1025') + g('Overall: 10.25% increase'))
    ]),
    SC('Watch out!', 'Three common mistakes', [
      S("Mistake one: adding the percentages. Three years at ten per cent is not thirty per cent.", r('3 × 10% = 30%  ✗') + g('1.1³ = 1.331 → 33.1%  ✓')),
      S("Mistake two: multiplying by the number of years. Use a power.", r('500 × 1.1 × 3  ✗') + g('500 × 1.1³  ✓')),
      S("Mistake three: using the rate as the multiplier. For a ten per cent rise, the multiplier is one point one, not zero point one.", r('× 0.1  ✗') + g('× 1.1  ✓'))
    ]),
    SC('In real life', 'Prices and inflation', [
      S("When prices rise by three per cent each year, in ten years, the same basket of shopping costs one point zero three to the power ten times as much. That is about one point three four. A basket costing one hundred pounds today would cost about one hundred and thirty-four pounds in ten years.", g('1.03¹⁰ ≈ 1.34'))
    ]),
    L.turn("Your turn! Number one. A bike is worth two hundred pounds, and loses ten per cent a year. What is it worth after two years? Pause and try it.", E('200 × 0.9²'), "Zero point nine squared is zero point eight one. Two hundred times that is one hundred and sixty-two pounds.", g('£162')),
    L.turn("Your turn! Number two. A town of ten thousand grows by two per cent a year for three years. What is the population? Pause and try it.", E('10,000 × 1.02³'), "One point zero two cubed is about one point zero six one. So about ten thousand, six hundred and twelve.", g('≈ 10,612')),
    L.turn("Your turn! Number three. A price goes up by ten per cent, then down by ten per cent. Is it the same as at the start? Pause and think.", E('1.1 × 0.9'), "One point one times zero point nine is zero point nine nine. It is one per cent lower. Not the same.", g('1% lower')),
    L.rec('How do you work with repeated percentage change?', "In repeated percentage change, each change is on the new amount. Find the multiplier, one plus the rate for a rise, or one minus the rate for a fall. Use a power for the number of repeats. You cannot add the percentages. Overall change is found by multiplying the multipliers.", ['Each change on the new amount', 'Multiplier to the power n', 'Not the sum of percentages', 'Multiply different multipliers'])
  ]);

  /* ---- Sets of numbers ---- */
  N('How do you describe sets of numbers?', 'how to use set notation and describe sets of numbers such as primes, factors and multiples.', [
    SC('Sets', 'Start with the basics', [
      S("A set is a collection of things. In maths, it is usually a collection of numbers. We write the members of a set between curly brackets, with commas between them. The members are called elements.", E('A = {2, 3, 5, 7}', 'g')),
      S("We often give a set a capital letter as a name. Here A is the set of the first four prime numbers. Order does not matter. And a number is only listed once.", V.rule('Order does not matter. No repeats.'))
    ]),
    SC('Notation', 'Example 1: the symbols', [
      S("There are a few symbols. This curly E means is an element of, or belongs to. Five is an element of A. The same symbol with a line through it means is not an element of. Four is not an element of A.", E('5 ∈ A') + E('4 ∉ A')),
      S("The number of elements in a set is written like this, with the letter n and the set name in brackets. For A, n of A is four.", E('n(A) = 4', 'g'))
    ]),
    SC('Describing sets', 'Example 2: three ways', [
      S("There are three ways to describe a set. List all the members. Describe it in words. Or use a rule. The set of even numbers between one and ten is two, four, six, eight.", E('B = {2, 4, 6, 8}')),
      S("Another set. Multiples of three, that are less than twenty. Three, six, nine, twelve, fifteen, eighteen.", E('C = {3, 6, 9, 12, 15, 18}')),
      S("And factors of twelve. The numbers that divide exactly into twelve. One, two, three, four, six, twelve.", E('F = {1, 2, 3, 4, 6, 12}'))
    ]),
    SC('Intersection and union', 'Example 3: combining sets', [
      S("Let's combine two sets. P is the multiples of two up to ten. Two, four, six, eight, ten. Q is the multiples of three up to ten. Three, six, nine. The intersection is the elements in both sets. Only six is in both.", E('P ∩ Q = {6}', 'g')),
      S("The union is the elements in either set, or both. Two, three, four, six, eight, nine, ten. Six is only listed once.", E('P ∪ Q = {2, 3, 4, 6, 8, 9, 10}', 'g'))
    ]),
    SC('Types of number', 'Example 4: the big sets', [
      S("Some sets are so important they have their own symbols. The natural numbers, one, two, three and so on. The integers, which include zero and the negatives. The rational numbers, which are fractions. And the real numbers, which include everything on the number line.", V.cards(['ℕ: natural', 'ℤ: integers', 'ℚ: rational', 'ℝ: real'], ['b', 'g', 'p', 'b'], true)),
      S("Each set sits inside the next. Every natural number is an integer. Every integer is rational. Every rational number is real.", V.rule('ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ'))
    ]),
    SC('Empty set', 'Example 5: nothing at all', [
      S("A set can have no elements at all. The set of even prime numbers bigger than two. There are none. We call this the empty set, and write it with an empty pair of brackets, or a circle with a line through it.", E('{ }  or  ∅', 'b')),
      S("Another example. Integers that are both even and odd. None. Empty set.", g('n(∅) = 0'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Calling a fraction an integer. Is three quarters an integer? Wrong: yes, because it is made from whole numbers. An integer is a whole number, with no fractional part. Three quarters is a rational number, but not an integer.", r('3/4 is an integer  ✗') + g('3/4 is rational, not an integer  ✓')),
      S("Mistake two. Thinking a recurring decimal is irrational. Zero point three three three, recurring. Wrong: it goes on forever, so it is irrational. It equals one third, which is a fraction, so it is rational. Irrational numbers like pi never repeat.", r('0.333… is irrational  ✗') + g('0.333… = 1/3, rational  ✓')),
      S("Mistake three. Thinking every square root is irrational. Root sixteen. Wrong: irrational, because it has a root sign. Root sixteen is four, a whole number, so it is rational. Root seventeen is not a whole number, and it is irrational.", r('√16 is irrational  ✗') + g('√16 = 4 rational; √17 irrational  ✓'))
    ]),
    SC('In real life', 'Groups', [
      S("A school has a set of pupils who play football, and a set who play chess. Some play both. The intersection is the pupils who do both. The union is everyone in at least one club. Sets help us count people without counting anyone twice.", V.note('Sets keep counting tidy'))
    ]),
    L.turn("Your turn! Number one. Write the set of factors of ten. Pause and try it.", E('Factors of 10'), "One, two, five, ten.", g('{1, 2, 5, 10}')),
    L.turn("Your turn! Number two. A is one, two, three, four. B is three, four, five, six. Write the intersection. Pause and try it.", E('A ∩ B'), "The elements in both. Three and four.", g('{3, 4}')),
    L.turn("Your turn! Number three. Write the union of the same two sets. Pause and try it.", E('A ∪ B'), "Everything in either. One, two, three, four, five, six.", g('{1, 2, 3, 4, 5, 6}')),
    L.rec('How do you describe sets of numbers?', "A set is a collection of numbers, written in curly brackets. The symbol for is an element of, and the symbol for is not an element of, say whether a number belongs. The intersection is what two sets share. The union is everything in either set. The empty set has no elements.", ['{ } for sets', '∈ and ∉', '∩ in both, ∪ in either', 'n(A) counts elements'])
  ]);

  /* ---- Depreciation ---- */
  N('How do you work out depreciation?', 'how the value of things like cars falls by a percentage each year.', [
    SC('Depreciation', 'Start with the basics', [
      S("Most things you buy are worth less as they get older. A new car loses value the moment it leaves the shop. Phones, computers and furniture do the same. This fall in value is called depreciation.", E('Depreciation: value goes down over time', 'b')),
      S("Usually the value falls by a percentage each year. Not by the same amount of pounds. Each year it falls by a percentage of what it is worth at that time. So the pounds lost get smaller every year.", V.rule('A percentage of the current value each year.'))
    ]),
    SC('One year', 'Example 1: a car', [
      S("A car costs twelve thousand pounds. It depreciates by twenty per cent in the first year. Twenty per cent of twelve thousand is two thousand four hundred. Take that away. Nine thousand six hundred pounds.", E('20% of 12,000 = 2,400') + g('12,000 − 2,400 = £9,600')),
      S("Or use the multiplier. Losing twenty per cent means keeping eighty per cent. The multiplier is zero point eight. Twelve thousand times zero point eight is nine thousand six hundred.", E('12,000 × 0.8 = 9,600', 'g'))
    ]),
    SC('Several years', 'Example 2: three years at 15%', [
      S("A laptop costs one thousand pounds. It loses fifteen per cent each year. What is it worth after three years? The multiplier is zero point eight five. Use a power of three.", E('1,000 × 0.85³')),
      S("Zero point eight five cubed is zero point six one four one two five. Times one thousand is six hundred and fourteen pounds, to the nearest pound.", g('≈ £614'))
    ]),
    SC('Year by year', 'Example 3: a table', [
      S("Let's check with a table. After one year, eight hundred and fifty. After two years, seven hundred and twenty-two fifty. After three years, six hundred and fourteen pounds thirteen. Notice the amount lost each year gets smaller. One hundred and fifty, then one hundred and twenty-seven fifty, then about one hundred and eight pounds.", V.tbl([['1', '£850.00'], ['2', '£722.50'], ['3', '£614.13']], ['Year', 'Value']))
    ]),
    SC('How much was lost?', 'Example 4: the total depreciation', [
      S("How much value did the laptop lose in three years? Subtract. One thousand minus six hundred and fourteen. Three hundred and eighty-six pounds. As a percentage of the original, that is thirty-eight point six per cent.", E('1,000 − 614 = £386') + g('≈ 38.6% in total'))
    ]),
    SC('Straight line', 'Example 5: a different way', [
      S("Some businesses use straight line depreciation. The value falls by the same amount every year. A machine costs ten thousand and loses one thousand five hundred each year. After four years, it loses six thousand. It is worth four thousand pounds.", E('10,000 − 4 × 1,500') + g('= £4,000')),
      S("That is not the same as a percentage each year. With a percentage, the loss shrinks each year. Check which method the question asks for.", V.rule('Percentage each year, or fixed amount?'))
    ]),
    SC('Watch out!', 'Three common mistakes', [
      S("Mistake one: adding the percentages. Three years at fifteen per cent is not forty-five per cent off.", r('3 × 15% = 45%  ✗') + g('× 0.85³  ✓')),
      S("Mistake two: using zero point one five as the multiplier. For a fall, use one minus the rate.", r('× 0.15  ✗') + g('× 0.85  ✓')),
      S("Mistake three: taking the percentage of the original every year. Each year's percentage is of the current value.", V.rule('Each year: new value.'))
    ]),
    SC('In real life', 'Buying second hand', [
      S("Because new cars lose value fastest in the early years, many people buy second-hand. A three-year-old car is much cheaper than a new one, but may still be reliable.", V.note('Depreciation is fastest in year one'))
    ]),
    L.turn("Your turn! Number one. A phone costs eight hundred pounds and loses thirty per cent in the first year. What is it worth? Pause and try it.", E('800 × 0.7'), "The multiplier is zero point seven. Five hundred and sixty pounds.", g('£560')),
    L.turn("Your turn! Number two. A van costs twenty thousand and loses ten per cent a year. What is it worth after two years? Pause and try it.", E('20,000 × 0.9²'), "Zero point nine squared is zero point eight one. Sixteen thousand, two hundred pounds.", g('£16,200')),
    L.turn("Your turn! Number three. What multiplier do you use for a twelve per cent fall? Pause and think.", E('?'), "One minus zero point one two. Zero point eight eight.", g('0.88')),
    L.rec('How do you work out depreciation?', "Depreciation is a fall in value. Usually it is a percentage of the current value each year. Use a multiplier of one minus the rate, raised to the power of the number of years. The amount lost gets smaller each year. If the loss is a fixed amount each year, it is called straight line depreciation.", ['Multiplier: 1 − r', 'Power: number of years', 'Loss shrinks each year', 'Straight line: same amount'])
  ]);

  /* ---- VAT ---- */
  N('How do you calculate prices with VAT?', 'how to add VAT to a price, take it off again, and work with percentages of prices.', [
    SC('VAT', 'Start with the basics', [
      S("VAT stands for value added tax. It is a tax added to the price of most things you buy in the UK. The standard rate is twenty per cent. Some things, like most food and children's clothes, have no VAT.", E('VAT = 20% (standard rate)', 'b')),
      S("The price before VAT is called the net price. The price with VAT added is called the gross price. The price on the shelf is often the gross price.", V.cols([V.card('Net: before VAT', 'b', true), V.card('Gross: with VAT', 'g', true)], 2))
    ]),
    SC('Adding VAT', 'Example 1: the long way', [
      S("A bicycle has a net price of two hundred and fifty pounds. Add twenty per cent VAT. First work out twenty per cent of two hundred and fifty. Ten per cent is twenty-five. So twenty per cent is fifty.", E('10% = £25') + E('20% = £50')),
      S("Add it on. Two hundred and fifty plus fifty is three hundred pounds. That is the gross price.", g('£250 + £50 = £300'))
    ]),
    SC('Adding VAT', 'Example 2: the multiplier way', [
      S("There is a quicker way. Adding twenty per cent means the price becomes one hundred and twenty per cent. The multiplier is one point two. Two hundred and fifty times one point two is three hundred.", E('250 × 1.2 = 300', 'g')),
      S("This is much better when you have a calculator, especially for awkward numbers.", V.rule('Add VAT: × 1.2'))
    ]),
    SC('Taking VAT off', 'Example 3: finding the net price', [
      S("A laptop costs seven hundred and twenty pounds, including VAT. What was the net price? The gross price is one hundred and twenty per cent of the net price. So we divide by one point two. Seven hundred and twenty divided by one point two is six hundred.", E('720 ÷ 1.2') + g('Net = £600')),
      S("Notice that the VAT is one hundred and twenty pounds. That is twenty per cent of six hundred, not twenty per cent of seven hundred and twenty.", V.rule('VAT = 20% of the net price.'))
    ]),
    SC('How much VAT?', 'Example 4: the VAT amount', [
      S("The shelf price of a jacket is ninety pounds, including VAT. How much of that is VAT? Find the net price. Ninety divided by one point two is seventy-five. The VAT is ninety minus seventy-five. Fifteen pounds.", E('90 ÷ 1.2 = 75') + g('VAT = £15'))
    ]),
    SC('A bill', 'Example 5: several items', [
      S("A plumber charges eighty pounds for parts and one hundred and twenty pounds for labour. VAT is added to the total. Net total is two hundred pounds. Twenty per cent is forty pounds. The total bill is two hundred and forty pounds.", E('(80 + 120) × 1.2') + g('= £240'))
    ]),
    SC('Watch out!', 'Three common mistakes', [
      S("Mistake one: taking twenty per cent off the gross price to find the net. That gives the wrong answer. Divide by one point two.", r('720 × 0.8 = 576  ✗') + g('720 ÷ 1.2 = 600  ✓')),
      S("Mistake two: forgetting which price is which. Net is before VAT. Gross is after.", V.rule('Net before, gross after.')),
      S("Mistake three: using twenty as the multiplier. Twenty per cent is zero point two. Adding it to one is one point two.", r('× 20  ✗') + g('× 1.2  ✓'))
    ]),
    SC('In real life', 'Shop prices', [
      S("A shop advertises a television at four hundred pounds plus VAT. The real price you pay is four hundred times one point two, which is four hundred and eighty pounds. Always check if a price includes VAT.", g('£400 + VAT = £480'))
    ]),
    L.turn("Your turn! Number one. Add twenty per cent VAT to a price of seventy-five pounds. Pause and try it.", E('75 × 1.2'), "Seventy-five times one point two is ninety pounds.", g('£90')),
    L.turn("Your turn! Number two. A price with VAT is one hundred and eighty pounds. What is the net price? Pause and try it.", E('180 ÷ 1.2'), "One hundred and fifty pounds.", g('£150')),
    L.turn("Your turn! Number three. How much VAT is in that one hundred and eighty pound price? Pause and try it.", E('180 − 150'), "Thirty pounds.", g('£30')),
    L.rec('How do you calculate prices with VAT?', "VAT is a percentage added to the net price to make the gross price. To add twenty per cent VAT, multiply by one point two. To find the net price from the gross price, divide by one point two. The VAT amount is the difference between the gross and net prices.", ['Add VAT: × 1.2', 'Remove VAT: ÷ 1.2', 'VAT = gross − net', 'Net before, gross after'])
  ]);

  /* ---- Profit and loss ---- */
  N('How do you work out profit and loss as a percentage?', 'how to find profit, loss, percentage profit and selling prices.', [
    SC('Profit and loss', 'Start with the basics', [
      S("A shop buys things and sells them for a higher price. The price the shop pays is the cost price. The price it sells for is the selling price. The difference is profit, if the selling price is higher. If the selling price is lower, it is a loss.", V.cols([V.card('Profit = selling − cost', 'g', true), V.card('Loss = cost − selling', 'r', true)], 2)),
      S("We often show profit or loss as a percentage. And the golden rule is, the percentage is always of the cost price. It is what the shop paid, not what it sold for.", E('% profit = profit ÷ cost × 100', 'g'))
    ]),
    SC('Finding profit', 'Example 1: a bike', [
      S("A trader buys a bike for forty pounds, and sells it for fifty-two pounds. The profit is fifty-two minus forty. Twelve pounds.", E('52 − 40 = £12 profit')),
      S("The percentage profit is twelve divided by forty, times one hundred. Twelve divided by forty is zero point three. Thirty per cent.", g('12 ÷ 40 × 100 = 30%'))
    ]),
    SC('Finding a loss', 'Example 2: a clearance', [
      S("A shop buys a coat for eighty pounds and sells it in a clearance for sixty pounds. It is a loss of twenty pounds. The percentage loss is twenty divided by eighty, times one hundred. That is twenty-five per cent.", E('80 − 60 = £20 loss') + g('20 ÷ 80 × 100 = 25% loss'))
    ]),
    SC('Selling price', 'Example 3: a target profit', [
      S("A shop wants a forty per cent profit on a toy that costs fifteen pounds. What should the selling price be? The selling price is the cost plus forty per cent. The multiplier is one point four. Fifteen times one point four is twenty-one pounds.", E('15 × 1.4') + g('= £21'))
    ]),
    SC('Working backwards', 'Example 4: finding the cost', [
      S("A shirt is sold for thirty-six pounds at a profit of twenty per cent. What did it cost? The selling price is one hundred and twenty per cent of the cost. So divide by one point two. Thirty-six divided by one point two is thirty pounds.", E('36 ÷ 1.2') + g('Cost = £30')),
      S("Check. Twenty per cent of thirty is six. Thirty plus six is thirty-six. Correct.", E('30 + 6 = 36 ✓'))
    ]),
    SC('Mark-up', 'Example 5: expenses', [
      S("A cafe buys coffee for twenty pence a cup and sells it for two pounds fifty. The profit on each cup is two pounds thirty. The percentage profit is two thirty divided by zero point two zero. That is one thousand, one hundred and fifty per cent. A big mark-up. But the cafe has to pay for the machine, the milk, the cups, the rent and the staff, so the real profit is much smaller.", V.note('Costs are more than ingredients'))
    ]),
    SC('Watch out!', 'Three common mistakes', [
      S("Mistake one: dividing by the selling price. Always divide by the cost price.", r('12 ÷ 52  ✗') + g('12 ÷ 40  ✓')),
      S("Mistake two: finding the cost by taking the percentage off the selling price. If the profit is twenty per cent of cost, divide the selling price by one point two.", r('36 × 0.8  ✗') + g('36 ÷ 1.2  ✓')),
      S("Mistake three: mixing up profit and selling price. Profit is only the difference.", V.rule('Profit = selling − cost.'))
    ]),
    SC('In real life', 'Running a stall', [
      S("At a school fair, you buy cakes for fifty pounds and sell them for seventy-five. Your profit is twenty-five pounds. The percentage profit is twenty-five over fifty, which is fifty per cent. The school keeps the profit.", g('25 ÷ 50 × 100 = 50%'))
    ]),
    L.turn("Your turn! Number one. A cap costs twelve pounds and is sold for fifteen. What is the percentage profit? Pause and try it.", E('3 ÷ 12 × 100'), "The profit is three pounds. Three over twelve is a quarter. Twenty-five per cent.", g('25%')),
    L.turn("Your turn! Number two. A shop adds a thirty per cent profit to a cost of forty pounds. What is the selling price? Pause and try it.", E('40 × 1.3'), "Fifty-two pounds.", g('£52')),
    L.turn("Your turn! Number three. A lamp is sold at a loss of ten per cent, for forty-five pounds. What did it cost? Pause and try it.", E('45 ÷ 0.9'), "A loss means the multiplier is zero point nine. Forty-five divided by zero point nine is fifty pounds.", g('£50')),
    L.rec('How do you work out profit and loss as a percentage?', "Profit is selling price minus cost price. Loss is cost price minus selling price. A percentage profit or loss is always of the cost price. To find a selling price, multiply the cost by the multiplier. To find the cost, divide the selling price by the multiplier.", ['Profit = selling − cost', '% profit = profit ÷ cost × 100', 'Selling = cost × multiplier', 'Cost = selling ÷ multiplier'])
  ]);

  /* ---- Simple interest ---- */
  N('How do you calculate simple interest?', 'how to work out simple interest and compare it with compound interest.', [
    SC('Interest', 'Start with the basics', [
      S("When you put money in a bank, the bank pays you for using it. That payment is called interest. When you borrow money, you pay interest. The amount you start with is called the principal.", V.cols([V.card('Principal: starting amount', 'b', true), V.card('Interest: the extra', 'g', true)], 2)),
      S("With simple interest, the same amount is paid every year. It is always a percentage of the original principal. The formula is principal times rate times time, divided by one hundred. We write it as I equals P R T over one hundred.", E('I = P × R × T ÷ 100', 'g'))
    ]),
    SC('One year', 'Example 1: £800 at 3%', [
      S("You save eight hundred pounds at three per cent simple interest. How much interest in one year? Three per cent of eight hundred. Eight hundred divided by one hundred is eight. Eight times three is twenty-four pounds.", E('800 × 3 ÷ 100 = £24', 'g'))
    ]),
    SC('Several years', 'Example 2: five years', [
      S("The same eight hundred pounds for five years. The interest is the same each year. Twenty-four pounds a year, for five years. That is one hundred and twenty pounds.", E('24 × 5 = £120') + g('I = 800 × 3 × 5 ÷ 100 = £120')),
      S("The total in the account is the principal plus the interest. Eight hundred plus one hundred and twenty is nine hundred and twenty pounds.", g('Total = £920'))
    ]),
    SC('Finding the rate', 'Example 3: working backwards', [
      S("A loan of two thousand pounds costs three hundred pounds in interest over three years. What is the rate? Use the formula. Three hundred equals two thousand times R times three, over one hundred. Two thousand times three over one hundred is sixty. So three hundred equals sixty R.", E('300 = 2,000 × R × 3 ÷ 100') + E('300 = 60R')),
      S("R is three hundred divided by sixty. Five. The rate is five per cent a year.", g('R = 5%'))
    ]),
    SC('Months', 'Example 4: part of a year', [
      S("Interest for part of a year. A loan of six hundred pounds at four per cent a year, for six months. Six months is half a year, so T is zero point five. Six hundred times four times zero point five, over one hundred. That is twelve pounds.", E('600 × 4 × 0.5 ÷ 100') + g('= £12'))
    ]),
    SC('Compared with compound', 'Example 5: which is better for savers?', [
      S("Compare simple and compound for one thousand pounds at five per cent for three years. Simple interest gives one hundred and fifty pounds, so the total is one thousand, one hundred and fifty. Compound gives one thousand, one hundred and fifty-seven pounds sixty-three. Compound is a bit more, because the interest earns interest.", E('Simple: £1,150') + E('Compound: £1,157.63', 'g'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Forgetting to turn the percentage into a decimal. Two hundred pounds at three per cent for a year. Wrong: two hundred times three, six hundred pounds. Three per cent is zero point zero three. Two hundred times zero point zero three is six pounds.", r('200 × 3 = £600  ✗') + g('200 × 0.03 = £6  ✓')),
      S("Mistake two. Using one year for several years. Five hundred pounds at four per cent for three years. Wrong: twenty pounds, which is one year. Three years gives three times as much. Sixty pounds.", r('500 × 0.04 = £20  ✗') + g('500 × 0.04 × 3 = £60  ✓')),
      S("Mistake three. Giving only the interest when asked for the total. One thousand pounds at two per cent for two years. The interest is forty pounds. Wrong: the account now holds forty pounds. The total includes the original money. One thousand and forty pounds.", r('total = £40  ✗') + g('total = 1000 + 40 = £1040  ✓'))
    ]),
    SC('In real life', 'Short loans', [
      S("Simple interest is often used for short term loans, like borrowing money from a friend or a family member. Because it does not compound, it is easier to work out, and it never surprises you with a bigger bill.", V.note('Simple: the same amount each year'))
    ]),
    L.turn("Your turn! Number one. Find the simple interest on five hundred pounds at four per cent for three years. Pause and try it.", E('500 × 4 × 3 ÷ 100'), "Twenty pounds a year. For three years. Sixty pounds.", g('£60')),
    L.turn("Your turn! Number two. What is the total in the account? Pause and try it.", E('500 + 60'), "Five hundred and sixty pounds.", g('£560')),
    L.turn("Your turn! Number three. How much simple interest on two thousand pounds at three per cent for six months? Pause and try it.", E('2,000 × 3 × 0.5 ÷ 100'), "Two thousand times three is six thousand. Times a half is three thousand. Divided by one hundred. Thirty pounds.", g('£30')),
    L.rec('How do you calculate simple interest?', "Simple interest is the same amount every year, based on the principal. Use I equals P times R times T, over one hundred. T is the time in years. The total is the principal plus the interest. Compound interest is a little more, because the interest earns interest too.", ['I = PRT ÷ 100', 'Same amount each year', 'Total = P + I', 'Months: fractions of a year'])
  ]);

  /* ---- Take-home pay ---- */
  N('How do you work out take-home pay?', 'how deductions such as income tax, National Insurance and pension come off a salary.', [
    SC('Take-home pay', 'Start with the basics', [
      S("When you get a job, the salary you are promised is called your gross pay. But you do not receive all of it. Some is taken off before it reaches your bank. What you actually receive is called your net pay, or take-home pay.", V.cols([V.card('Gross: before deductions', 'b', true), V.card('Net: take-home pay', 'g', true)], 2)),
      S("The amounts taken off are called deductions. The common ones are income tax, National Insurance and pension contributions. Net pay equals gross pay minus all the deductions.", E('Net = Gross − deductions', 'g'))
    ]),
    SC('Income tax', 'Example 1: tax bands', [
      S("Income tax is worked out in bands. Suppose the first twelve thousand five hundred pounds is tax free. This is the personal allowance. The next thirty-seven thousand five hundred is taxed at twenty per cent. Above that, forty per cent. Remember, each band is charged only on the slice of income inside it.", V.cols([V.card('First £12,500: 0%', 'g', true), V.card('Next £37,500: 20%', 'b', true), V.card('Above: 40%', 'p', true)], 3)),
      S("Someone earns thirty thousand pounds. Taxable income is thirty thousand minus twelve thousand five hundred. That is seventeen thousand five hundred. Twenty per cent of seventeen thousand five hundred is three thousand five hundred pounds of tax.", E('30,000 − 12,500 = 17,500') + g('20% × 17,500 = £3,500'))
    ]),
    SC('National Insurance', 'Example 2: another deduction', [
      S("National Insurance is another deduction. It pays towards things like the state pension and the NHS. Suppose it is eight per cent of earnings above twelve thousand five hundred. Eight per cent of seventeen thousand five hundred is one thousand four hundred pounds.", E('8% × 17,500') + g('= £1,400'))
    ]),
    SC('Pension', 'Example 3: saving for later', [
      S("Many workers also put a percentage of their pay into a pension. Suppose five per cent of gross pay. Five per cent of thirty thousand is one thousand five hundred pounds.", E('5% × 30,000') + g('= £1,500'))
    ]),
    SC('Putting it together', 'Example 4: yearly net pay', [
      S("Add up the deductions. Three thousand five hundred, plus one thousand four hundred, plus one thousand five hundred. That is six thousand four hundred pounds.", E('3,500 + 1,400 + 1,500 = £6,400')),
      S("Net pay is thirty thousand minus six thousand four hundred. Twenty-three thousand six hundred pounds a year.", g('Net = £23,600'))
    ]),
    SC('Monthly', 'Example 5: per month', [
      S("Most people are paid monthly. Divide the yearly amount by twelve. Twenty-three thousand six hundred divided by twelve is one thousand, nine hundred and sixty-six pounds sixty-seven. About one thousand, nine hundred and sixty-seven pounds a month.", E('23,600 ÷ 12') + g('≈ £1,966.67 a month'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Taxing all the pay. A salary of twenty-eight thousand, a personal allowance of twelve thousand five hundred, and tax at twenty per cent. Wrong: twenty per cent of twenty-eight thousand, five thousand six hundred. Tax is only paid on the pay above the allowance. Fifteen thousand five hundred times zero point two, three thousand one hundred.", r('tax = 20% of 28 000 = 5600  ✗') + g('tax = 20% of 15 500 = 3100  ✓')),
      S("Mistake two. Adding the deductions instead of subtracting. Gross pay is two thousand pounds a month, and the deductions are five hundred. Wrong: take-home pay is two thousand five hundred. Take-home pay is what is left. One thousand five hundred.", r('2000 + 500 = 2500  ✗') + g('2000 − 500 = 1500  ✓')),
      S("Mistake three. Mixing yearly and monthly amounts. Yearly tax is three thousand one hundred. Wrong: take that off a monthly pay of two thousand. Divide the tax by twelve first. About two hundred and fifty-eight pounds a month.", r('2000 − 3100 < 0  ✗') + g('3100 ÷ 12 ≈ 258 a month  ✓'))
    ]),
    SC('In real life', 'Reading a payslip', [
      S("A payslip lists the gross pay and each deduction, and then the net pay at the bottom. Learning to check a payslip helps you spot mistakes, and understand where your money goes.", V.note('Gross − deductions = net'))
    ]),
    L.turn("Your turn! Number one. A person earns twenty-four thousand pounds. The allowance is twelve thousand five hundred. How much is taxable? Pause and try it.", E('24,000 − 12,500'), "Eleven thousand five hundred pounds.", g('£11,500')),
    L.turn("Your turn! Number two. Tax is twenty per cent. How much tax is due? Pause and try it.", E('20% × 11,500'), "Two thousand three hundred pounds.", g('£2,300')),
    L.turn("Your turn! Number three. Gross pay is two thousand pounds a month. Deductions total four hundred and twenty. What is the net pay? Pause and try it.", E('2,000 − 420'), "One thousand five hundred and eighty pounds.", g('£1,580')),
    L.rec('How do you work out take-home pay?', "Gross pay is what you earn before deductions. Net pay is what you take home. Income tax is charged only on income above the personal allowance, band by band. National Insurance and pension contributions are also taken off. Net pay equals gross pay minus every deduction.", ['Gross − deductions = net', 'Tax only above the allowance', 'Tax by bands', 'Yearly ÷ 12 = monthly'])
  ]);

  /* ---- Budgets and a yearly plan ---- */
  N('How do you plan a budget with percentages and a yearly plan?', 'how to share an income between spending areas using percentages and plan across a whole year.', [
    SC('Budgeting', 'Start with the basics', [
      S("A budget is a plan for your money. It shows how much you earn, how much you will spend, and how much you will save. A good budget helps you avoid running out of money before the end of the month.", V.list(['Income: money coming in', 'Expenses: money going out', 'Savings: money kept for later'])),
      S("Often a budget is written as percentages. For example, fifty per cent for needs, thirty per cent for wants and twenty per cent for savings. It is easy to adjust for any size of income.", V.cols([V.card('Needs 50%', 'b', true), V.card('Wants 30%', 'g', true), V.card('Savings 20%', 'p', true)], 3))
    ]),
    SC('Sharing income', 'Example 1: a monthly budget', [
      S("Someone has a monthly income of two thousand four hundred pounds. Use fifty, thirty and twenty. Fifty per cent is half. Twelve hundred pounds for needs. Thirty per cent. Ten per cent is two hundred and forty, so thirty per cent is seven hundred and twenty. Twenty per cent is four hundred and eighty.", E('Needs: £1,200') + E('Wants: £720') + E('Savings: £480', 'g')),
      S("Always check they add up to the income. Twelve hundred, plus seven hundred and twenty, plus four hundred and eighty. Twenty-four hundred. Correct.", E('1,200 + 720 + 480 = 2,400 ✓'))
    ]),
    SC('Needs in detail', 'Example 2: splitting a category', [
      S("The needs budget of one thousand two hundred pounds covers rent, food and bills. Suppose rent is a half of it. Six hundred pounds. Food is a quarter. Three hundred. The rest is bills. That leaves three hundred pounds.", E('Rent £600  ·  Food £300  ·  Bills £300'))
    ]),
    SC('A yearly plan', 'Example 3: twelve months', [
      S("A yearly plan multiplies by twelve. Saving four hundred and eighty pounds a month is four hundred and eighty times twelve. Five thousand, seven hundred and sixty pounds a year.", E('480 × 12') + g('= £5,760 a year')),
      S("But some bills come once a year, like car insurance or a holiday. We divide these by twelve to see the monthly cost. A six hundred pound insurance bill is fifty pounds a month. Setting that aside each month avoids a nasty surprise.", E('600 ÷ 12 = £50 a month', 'g'))
    ]),
    SC('A shortfall', 'Example 4: when spending is too high', [
      S("Suppose income is one thousand eight hundred pounds a month and planned spending is one thousand nine hundred and fifty. The shortfall is one hundred and fifty pounds. Over a year, that is one thousand eight hundred pounds. A budget helps you see this before it becomes a problem.", E('1,800 − 1,950 = −£150') + r('Shortfall £150 a month'))
    ]),
    SC('Changing the plan', 'Example 5: what if income changes?', [
      S("Income goes up by ten per cent, from two thousand four hundred to two thousand six hundred and forty pounds. With the same percentages, every part of the budget rises by ten per cent. That is the power of using percentages. Savings go from four hundred and eighty to five hundred and twenty-eight.", E('2,640 × 20% = £528', 'g'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Percentages that do not add to one hundred. Rent forty per cent, food twenty-five, travel fifteen, savings ten, fun fifteen. Wrong: it looks fine. Add them. A hundred and five per cent. That is more than the income. Change fun to ten per cent.", r('40 + 25 + 15 + 10 + 15 = 105%  ✗') + g('… + 10 = 100%  ✓')),
      S("Mistake two. Taking the percentage of the wrong amount. Income is one thousand eight hundred pounds a month, and rent is thirty per cent. Wrong: thirty per cent of one thousand, three hundred. Use the income. Thirty per cent of one thousand eight hundred is five hundred and forty.", r('30% of 1000 = 300  ✗') + g('30% of 1800 = 540  ✓')),
      S("Mistake three. Forgetting a yearly cost. A subscription is twelve pounds a month. Wrong: put twelve pounds in the yearly plan. There are twelve months. Twelve times twelve is a hundred and forty-four pounds.", r('£12 a year  ✗') + g('12 × 12 = £144 a year  ✓'))
    ]),
    SC('In real life', 'Setting a goal', [
      S("You want to save six hundred pounds for a trip in ten months. Six hundred divided by ten is sixty pounds a month. That is your savings target. A budget helps you reach it.", g('600 ÷ 10 = £60 a month'))
    ]),
    L.turn("Your turn! Number one. A monthly income is one thousand five hundred pounds. Twenty per cent goes to savings. How much? Pause and try it.", E('20% × 1,500'), "Three hundred pounds.", g('£300')),
    L.turn("Your turn! Number two. How much is that saved in a year? Pause and try it.", E('300 × 12'), "Three thousand six hundred pounds.", g('£3,600')),
    L.turn("Your turn! Number three. An annual bill is nine hundred pounds. How much to set aside each month? Pause and try it.", E('900 ÷ 12'), "Seventy-five pounds.", g('£75')),
    L.rec('How do you plan a budget with percentages and a yearly plan?', "A budget shows income, spending and savings. Split the income using percentages, and check the parts add to the whole. For a yearly plan, multiply monthly amounts by twelve, and divide annual bills by twelve. Compare income with planned spending to find any shortfall.", ['Income, expenses, savings', 'Percentages add to 100%', 'Monthly × 12 = yearly', 'Annual bills ÷ 12'])
  ]);

  /* ---- Cost of credit ---- */
  N('How do you work out the cost of credit and hire purchase?', 'how to compare cash prices with hire purchase and understand credit card balances.', [
    SC('Credit', 'Start with the basics', [
      S("Credit means buying something now and paying for it later. It is useful, but it usually costs more. The extra you pay is the cost of credit. It is important to understand exactly how much extra.", E('Cost of credit = total paid − cash price', 'g')),
      S("Two common ways of using credit are hire purchase and credit cards. We will look at both.", V.cols([V.card('Hire purchase', 'b', true), V.card('Credit card', 'p', true)], 2))
    ]),
    SC('Hire purchase', 'Example 1: deposit and instalments', [
      S("A sofa costs eight hundred pounds cash. On hire purchase, you pay a deposit of one hundred and fifty pounds, and then twelve monthly payments of sixty-five pounds. The deposit is the first payment. Instalments are the regular payments.", E('Deposit £150') + E('12 × £65')),
      S("Work out the total. Twelve times sixty-five is seven hundred and eighty pounds. Add the deposit. Nine hundred and thirty pounds.", g('150 + 780 = £930'))
    ]),
    SC('Cost of credit', 'Example 2: how much extra?', [
      S("The cash price was eight hundred. The hire purchase total is nine hundred and thirty. The cost of credit is the difference. One hundred and thirty pounds extra.", E('930 − 800') + g('Cost of credit = £130')),
      S("As a percentage of the cash price, that is one hundred and thirty divided by eight hundred, times one hundred. About sixteen per cent.", E('130 ÷ 800 × 100 ≈ 16%'))
    ]),
    SC('Credit card', 'Example 3: interest on a balance', [
      S("A credit card charges interest on money you owe. Suppose the interest is two per cent per month. You owe five hundred pounds and pay nothing. After one month, you owe five hundred times one point zero two. Five hundred and ten pounds.", E('500 × 1.02 = 510', 'g')),
      S("After two months, another two per cent is added to five hundred and ten. That is five hundred and twenty pounds twenty. The interest is on the interest. It is compound.", E('510 × 1.02 = 520.20'))
    ]),
    SC('A year of debt', 'Example 4: how bad can it get?', [
      S("After twelve months with no payments, the balance is five hundred times one point zero two to the power twelve. One point zero two to the twelve is about one point two six eight. Five hundred times that is about six hundred and thirty-four pounds.", E('500 × 1.02¹²') + g('≈ £634')),
      S("So a two per cent monthly rate adds about twenty-seven per cent in a year. That is much more than twenty-four, which is twelve times two.", V.rule('Monthly rates add up faster than they look.'))
    ]),
    SC('Paying it off', 'Example 5: paying in full', [
      S("The best way to use a credit card is to pay the whole balance every month. Then you pay no interest at all. If you only pay the minimum, the debt can last years and cost far more.", V.note('Pay in full to avoid interest'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Comparing only the monthly payment. A sofa costs six hundred pounds in cash. Hire purchase is twenty-five pounds a month for thirty months. Wrong: twenty-five pounds sounds cheap. Multiply. Seven hundred and fifty pounds. That is a hundred and fifty more.", r('only £25  ✗') + g('25 × 30 = £750 in total  ✓')),
      S("Mistake two. Forgetting the deposit. A deposit of fifty pounds, then twelve payments of forty. Wrong: twelve times forty, four hundred and eighty. Add the deposit. Five hundred and thirty pounds.", r('12 × 40 = £480  ✗') + g('50 + 480 = £530  ✓')),
      S("Mistake three. Calling the extra cost the interest rate. The cash price is four hundred pounds, and the credit price is four hundred and fifty. Wrong: the interest is fifty per cent. The extra is fifty pounds. As a fraction of four hundred it is twelve and a half per cent.", r('£50 extra = 50%  ✗') + g('50 ÷ 400 = 12.5%  ✓'))
    ]),
    SC('In real life', 'Buy now, pay later', [
      S("Shops often say interest free for twelve months. That can be fine if you pay on time. But if you miss the deadline, interest may be added back to the whole amount. Always read the details.", V.note('Read the small print'))
    ]),
    L.turn("Your turn! Number one. A TV costs four hundred pounds cash. On hire purchase, the deposit is fifty pounds, and there are ten payments of forty-five pounds. What is the total? Pause and try it.", E('50 + 10 × 45'), "Ten times forty-five is four hundred and fifty. Plus fifty. Five hundred pounds.", g('£500')),
    L.turn("Your turn! Number two. What is the cost of credit? Pause and try it.", E('500 − 400'), "One hundred pounds.", g('£100')),
    L.turn("Your turn! Number three. A card balance of two hundred pounds has one per cent interest for one month. What is the new balance? Pause and try it.", E('200 × 1.01'), "Two hundred and two pounds.", g('£202')),
    L.rec('How do you work out the cost of credit and hire purchase?', "Credit lets you buy now and pay later, but it usually costs more. The total on hire purchase is the deposit plus all the instalments. The cost of credit is the total paid minus the cash price. Card interest is compound, so use a power. Compare totals, not monthly payments.", ['Total = deposit + instalments', 'Cost of credit = total − cash price', 'Card interest: compound', 'Compare totals'])
  ]);

  /* ---- Comparing currency offers ---- */
  N('How do you compare currency exchange offers?', 'how to compare exchange rates, commission and fees to find the best offer.', [
    SC('Comparing offers', 'Start with the basics', [
      S("When you travel, you swap pounds for foreign money. Different places offer different deals. One might give a better rate. Another might charge a fee. To find the best deal, we must compare what you actually receive.", V.rule('Compare what you receive.')),
      S("Remember that the exchange rate tells us how much foreign money one pound buys. A higher number means more foreign money for your pound. That is better when you are buying euros.", E('£1 = €1.15  is better than  £1 = €1.12', 'g'))
    ]),
    SC('Two rates', 'Example 1: compare the rates', [
      S("Bank A offers one point one five euros to the pound. Bank B offers one point one two. You change five hundred pounds. At Bank A, five hundred times one point one five is five hundred and seventy-five euros. At Bank B, five hundred times one point one two is five hundred and sixty.", E('A: 500 × 1.15 = €575') + E('B: 500 × 1.12 = €560')),
      S("Bank A gives fifteen euros more. So Bank A is better, if there are no fees.", g('A gives €15 more'))
    ]),
    SC('Commission', 'Example 2: a percentage fee', [
      S("Now Bank A charges a two per cent commission, and Bank B charges none. Commission is a fee, taken as a percentage. Two per cent of five hundred pounds is ten pounds. So Bank A only changes four hundred and ninety pounds.", E('2% × £500 = £10') + E('£500 − £10 = £490')),
      S("Four hundred and ninety times one point one five is five hundred and sixty-three point five euros. Compare with Bank B's five hundred and sixty euros. Five hundred and sixty-three point five is slightly more. So Bank A is still a little better.", E('490 × 1.15 = €563.50') + g('A: €563.50  vs  B: €560'))
    ]),
    SC('A fixed fee', 'Example 3: a flat charge', [
      S("A kiosk offers one point one eight, but charges a fixed fee of five pounds. For five hundred pounds, take off the fee first. Four hundred and ninety-five pounds. Times one point one eight is five hundred and eighty-four point one euros.", E('(500 − 5) × 1.18') + g('= €584.10')),
      S("This beats both banks. But if you only change fifty pounds, the five pound fee is ten per cent. That would not be a good deal.", V.rule('Fixed fees hurt small amounts.'))
    ]),
    SC('Buying back', 'Example 4: changing leftover money', [
      S("When you come home, you change leftover euros back to pounds. The rate for buying euros is different from the rate for selling them. Suppose you change two hundred and thirty euros back, at one point two two euros to the pound. Divide. Two hundred and thirty divided by one point two two is about one hundred and eighty-eight pounds fifty-two.", E('230 ÷ 1.22') + g('≈ £188.52'))
    ]),
    SC('Best value', 'Example 5: a price abroad', [
      S("A guidebook costs twenty-four euros in Paris, and nineteen pounds in London. Rate: one point one five. Twenty-four euros divided by one point one five is twenty pounds eighty-seven. The London price is cheaper. Change both prices to the same currency to compare.", E('24 ÷ 1.15 ≈ £20.87') + g('£19 is cheaper'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Multiplying when you should divide. Change two hundred and twenty euros into pounds, when one pound is one point one euros. Wrong: two twenty times one point one, two hundred and forty-two pounds. A euro is worth less than a pound, so the answer must be smaller. Divide. Two hundred pounds.", r('220 × 1.1 = £242  ✗') + g('220 ÷ 1.1 = £200  ✓')),
      S("Mistake two. Ignoring the fee. Shop A gives one point one euros per pound with no fee. Shop B gives one point one two, but takes a five pound fee. For two hundred pounds. Wrong: B has the better rate, so B is better. A gives two hundred and twenty euros. B gives one hundred and ninety-five times one point one two, two hundred and eighteen point four. A is better.", r('B has a better rate, so B  ✗') + g('A: 220 euros.  B: 218.4 euros  ✓')),
      S("Mistake three. Comparing different amounts. Offer one gives two hundred and twenty euros for two hundred pounds. Offer two gives three hundred and twenty-four euros for three hundred pounds. Wrong: three twenty-four is bigger, so offer two is better. Compare euros per pound. One point one zero against one point zero eight. Offer one is better.", r('324 > 220, so offer 2  ✗') + g('1.10 against 1.08 per £: offer 1  ✓'))
    ]),
    SC('In real life', 'Airport or bank?', [
      S("Airport exchange desks often have worse rates and bigger fees. Comparing offers before you travel can save you a good deal of money.", V.note('Compare before you travel'))
    ]),
    L.turn("Your turn! Number one. You change three hundred pounds at one point one four euros to the pound. How many euros? Pause and try it.", E('300 × 1.14'), "Three hundred and forty-two euros.", g('€342')),
    L.turn("Your turn! Number two. A fee of two per cent is taken first. How many pounds are changed from three hundred? Pause and try it.", E('300 × 0.98'), "Two hundred and ninety-four pounds.", g('£294')),
    L.turn("Your turn! Number three. A hotel costs one hundred and fifty euros a night. At one point two euros to the pound, how much in pounds? Pause and try it.", E('150 ÷ 1.2'), "One hundred and twenty-five pounds.", g('£125')),
    L.rec('How do you compare currency exchange offers?', "To compare offers, work out how much you actually receive. Take off any commission or fixed fee first. Then multiply by the exchange rate to get foreign money, or divide by the rate to get pounds. Compare prices in the same currency.", ['Fees first', '£ → foreign: × rate', 'Foreign → £: ÷ rate', 'Compare in one currency'])
  ]);

  /* ---- Sharing in a ratio ---- */
  N('How do you share an amount in a ratio and work with changing ratios?', 'how to share amounts in a ratio, simplify ratios and work with ratios that change.', [
    SC('Ratio', 'Start with the basics', [
      S("A ratio compares amounts. If a recipe uses two cups of flour for every one cup of sugar, we say the ratio of flour to sugar is two to one. We write it with a colon, two colon one.", E('Flour : Sugar = 2 : 1', 'b')),
      S("A ratio has no units. It just says how many parts of one thing for each part of another. And the order matters. Flour to sugar is two to one. Sugar to flour is one to two.", V.rule('The order matters.'))
    ]),
    SC('Simplifying', 'Example 1: simplify 12 : 18', [
      S("Like a fraction, a ratio can be simplified. Divide both numbers by the same thing. Twelve and eighteen are both divisible by six. Twelve divided by six is two. Eighteen divided by six is three.", E('12 : 18') + g('= 2 : 3')),
      S("Check there is nothing else that divides both. Two and three share no common factor, so it is fully simplified.", V.rule('Divide by the HCF.'))
    ]),
    SC('Sharing', 'Example 2: share £60 in the ratio 2 : 3', [
      S("Share sixty pounds in the ratio two to three. Step one, add the parts. Two plus three is five parts altogether.", E('2 + 3 = 5 parts')),
      S("Step two, find the value of one part. Sixty divided by five is twelve pounds.", E('60 ÷ 5 = £12 per part')),
      S("Step three, multiply. Two parts is two times twelve, twenty-four pounds. Three parts is three times twelve, thirty-six pounds. Check. Twenty-four plus thirty-six is sixty.", E('2 × 12 = £24') + E('3 × 12 = £36') + g('24 + 36 = 60 ✓'))
    ]),
    SC('Three parts', 'Example 3: a ratio with three numbers', [
      S("Three friends share one hundred and twenty sweets in the ratio one, two, three. Parts: one plus two plus three is six. One part is one hundred and twenty divided by six. Twenty sweets.", E('1 + 2 + 3 = 6') + E('120 ÷ 6 = 20')),
      S("So they get twenty, forty and sixty sweets.", g('20, 40, 60'))
    ]),
    SC('A known part', 'Example 4: when one amount is given', [
      S("Anna and Ben share money in the ratio three to five. Anna gets twenty-one pounds. How much does Ben get? Anna's three parts are twenty-one pounds. One part is seven pounds. Ben has five parts. Five times seven is thirty-five pounds.", E('3 parts = £21') + E('1 part = £7') + g('Ben: 5 × 7 = £35'))
    ]),
    SC('Ratios that change', 'Example 5: after a change', [
      S("Boys to girls in a club is three to two. Then four more girls join, and now the numbers are equal. How many are in the club? Before, boys are three parts and girls are two parts. After four more girls, girls equal boys. So two parts plus four is three parts. One part is four.", E('2 parts + 4 = 3 parts') + E('1 part = 4')),
      S("So there were twelve boys and eight girls before. Now there are twelve and twelve, twenty-four in total.", g('Now 12 boys, 12 girls'))
    ]),
    SC('Ratio to fraction', 'Example 6: finding fractions', [
      S("If the ratio of red to blue is two to three, then red is two out of five parts. That is two fifths. Blue is three fifths. This helps us find percentages. Two fifths is forty per cent.", E('Red = 2/5 = 40%') + E('Blue = 3/5 = 60%'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Dividing by one of the ratio numbers. Share sixty pounds in the ratio two to three. Wrong: sixty divided by two is thirty, and sixty divided by three is twenty. They only add to fifty. Add the parts first. Five. Sixty divided by five is twelve. Then twenty-four and thirty-six.", r('60 ÷ 2 = 30 and 60 ÷ 3 = 20  ✗') + g('60 ÷ 5 = 12 → 24 and 36  ✓')),
      S("Mistake two. Using the wrong part for one part. Boys to girls is three to two, and there are fifteen boys. Wrong: one part is fifteen divided by two. Boys are three parts. One part is fifteen divided by three, five. Girls are two parts. Ten.", r('one part = 15 ÷ 2  ✗') + g('one part = 15 ÷ 3 = 5 → 10 girls  ✓')),
      S("Mistake three. Not checking that the shares add up. Share seventy-two in the ratio five to four. Wrong: forty-five and thirty-six. They add to eighty-one. That is not seventy-two. One part is eight. Forty and thirty-two.", r('45 + 36 = 81 ≠ 72  ✗') + g('40 + 32 = 72  ✓'))
    ]),
    SC('In real life', 'Mixing paint', [
      S("A painter mixes blue and white paint in the ratio three to seven to make a light blue. For ten litres of paint, three parts blue is three litres and seven parts white is seven litres. The same ratio gives the same colour every time.", g('3 L blue + 7 L white'))
    ]),
    L.turn("Your turn! Number one. Simplify eighteen to twenty-four. Pause and try it.", E('18 : 24'), "Divide both by six. Three to four.", g('3 : 4')),
    L.turn("Your turn! Number two. Share seventy-two pounds in the ratio five to four. Pause and try it.", E('72 in 5 : 4'), "Nine parts. One part is eight pounds. Forty pounds and thirty-two pounds.", g('£40 and £32')),
    L.turn("Your turn! Number three. Red to green is three to four. There are twelve red. How many green? Pause and try it.", E('3 : 4, 12 red'), "Three parts is twelve, so one part is four. Four parts is sixteen.", g('16')),
    L.rec('How do you share an amount in a ratio and work with changing ratios?', "A ratio compares amounts, and the order matters. Simplify by dividing by common factors. To share in a ratio, add the parts, divide the total by the number of parts to find one part, then multiply. If one amount is known, find the value of one part first. For a ratio that changes, write an equation for the parts.", ['Add the parts', 'Find one part', 'Multiply for each share', 'Check: shares add to total'])
  ]);

  /* ---- Direct proportion ---- */
  N('How do you work with direct proportion and formulae?', 'how to recognise direct proportion, use the unitary method and write y = kx.', [
    SC('Direct proportion', 'Start with the basics', [
      S("Two quantities are in direct proportion if, when one doubles, the other doubles too. If one pen costs fifty pence, two pens cost one pound, and four pens cost two pounds. More pens means more cost, in the same proportion.", E('1 pen: 50p → 2 pens: £1 → 4 pens: £2', 'g')),
      S("A graph of two quantities in direct proportion is a straight line through the origin. And the ratio of the two quantities is always the same.", V.rule('Straight line through (0, 0).'))
    ]),
    SC('The unitary method', 'Example 1: find one first', [
      S("Seven books cost fifty-six pounds. How much do five books cost? First find the cost of one book. Fifty-six divided by seven is eight pounds.", E('56 ÷ 7 = £8 for one book')),
      S("Now multiply for five books. Five times eight is forty pounds.", g('5 × 8 = £40'))
    ]),
    SC('Recipes', 'Example 2: scaling up', [
      S("A recipe for four people needs three hundred grams of flour. How much for ten people? One person needs three hundred divided by four, seventy-five grams. Ten people need ten times seventy-five. Seven hundred and fifty grams.", E('300 ÷ 4 = 75') + g('75 × 10 = 750 g'))
    ]),
    SC('A formula', 'Example 3: y = kx', [
      S("Direct proportion can be written as a formula. y equals k x. The letter k is a number that never changes. It is called the constant of proportionality. For the books, the cost C equals eight n, where n is the number of books. The constant is eight.", E('y = kx', 'g') + E('C = 8n')),
      S("To find k, divide y by x, for any pair of values. Fifty-six divided by seven is eight.", E('k = y ÷ x = 56 ÷ 7 = 8'))
    ]),
    SC('Finding k and using it', 'Example 4: y is proportional to x', [
      S("y is directly proportional to x. When x is four, y is twelve. Find y when x is nine. First, find k. Twelve divided by four is three. So y equals three x. Now put x equals nine. y is twenty-seven.", E('k = 12 ÷ 4 = 3') + E('y = 3x') + g('x = 9 → y = 27')),
      S("We can also go backwards. When y is thirty, three x equals thirty, so x is ten.", E('3x = 30 → x = 10'))
    ]),
    SC('Not proportional', 'Example 5: spotting the difference', [
      S("Not everything is proportional. A taxi charges a three pound start fee, and two pounds a mile. For two miles, seven pounds. For four miles, eleven pounds. Double the distance does not double the cost, because of the fixed fee. This is not direct proportion.", E('2 mi: £7  ·  4 mi: £11') + r('11 ≠ 2 × 7  → not proportional'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Adding instead of multiplying. Three items cost nine pounds. Wrong: six items cost nine plus three, twelve pounds. Double the items, double the cost. Eighteen pounds.", r('9 + 3 = 12  ✗') + g('9 × 2 = 18  ✓')),
      S("Mistake two. Using direct proportion with a fixed charge. A taxi costs three pounds plus two pounds a mile. Two miles cost seven pounds. Wrong: four miles cost twice that, fourteen pounds. The three pound charge is not doubled. Three plus eight, eleven pounds.", r('2 × 7 = 14  ✗') + g('3 + 2 × 4 = 11  ✓')),
      S("Mistake three. Finding k upside down. y is twelve when x is four. Wrong: k is four divided by twelve. k is y divided by x. Twelve divided by four is three.", r('k = 4 ÷ 12  ✗') + g('k = 12 ÷ 4 = 3  ✓'))
    ]),
    SC('In real life', 'Currency and fuel', [
      S("Exchange rates are direct proportion. Double the pounds gives double the euros. Fuel is too. If ten litres cost fifteen pounds, thirty litres cost forty-five pounds. The constant is one pound fifty a litre.", g('C = 1.5L'))
    ]),
    L.turn("Your turn! Number one. Six tickets cost forty-two pounds. How much do nine tickets cost? Pause and try it.", E('42 ÷ 6 × 9'), "One ticket is seven pounds. Nine tickets are sixty-three pounds.", g('£63')),
    L.turn("Your turn! Number two. y is directly proportional to x. When x is five, y is twenty. Find the constant k. Pause and try it.", E('k = 20 ÷ 5'), "Four.", g('k = 4')),
    L.turn("Your turn! Number three. Use y equals four x to find y when x is eleven. Pause and try it.", E('y = 4 × 11'), "Forty-four.", g('44')),
    L.rec('How do you work with direct proportion and formulae?', "In direct proportion, when one quantity doubles, so does the other. Use the unitary method, find one then multiply. Write it as y equals k x, where k is the constant of proportionality, found by dividing y by x. The graph is a straight line through the origin. If there is a fixed charge, it is not direct proportion.", ['Unitary method', 'y = kx', 'k = y ÷ x', 'Graph through (0, 0)'])
  ]);

  /* ---- Inverse proportion ---- */
  N('How do you work with inverse proportion and formulae?', 'how to recognise inverse proportion and use y = k/x.', [
    SC('Inverse proportion', 'Start with the basics', [
      S("In direct proportion, when one quantity goes up, so does the other. In inverse proportion, it is the opposite. When one quantity goes up, the other goes down in the same proportion. If one doubles, the other halves.", V.cols([V.card('Direct: both up', 'b', true), V.card('Inverse: one up, one down', 'g', true)], 2)),
      S("A good example is workers and time. One worker takes twelve days to dig a trench. Two workers take six days. Four workers take three days. More workers, less time.", E('1 worker: 12 days') + E('2 workers: 6 days') + E('4 workers: 3 days'))
    ]),
    SC('The pattern', 'Example 1: the product is constant', [
      S("Look at the numbers. One times twelve is twelve. Two times six is twelve. Four times three is twelve. The product stays the same. That is the signature of inverse proportion. Multiply the two quantities and you always get the same number.", E('workers × days = 12', 'g'))
    ]),
    SC('Solving', 'Example 2: a trench', [
      S("Six workers take four days to build a wall. How long would eight workers take? Find the constant, the total work. Six times four is twenty-four worker days.", E('6 × 4 = 24')),
      S("With eight workers, divide twenty-four by eight. Three days.", g('24 ÷ 8 = 3 days'))
    ]),
    SC('A formula', 'Example 3: y = k / x', [
      S("Inverse proportion has a formula. y equals k over x. The letter k is again a constant. For the wall, the time T equals twenty-four over the number of workers W.", E('y = k/x', 'g') + E('T = 24/W')),
      S("To find k, multiply. k equals x times y. If y is inversely proportional to x, and y is six when x is four, then k is twenty-four.", E('k = x × y = 4 × 6 = 24'))
    ]),
    SC('Using it', 'Example 4: find y', [
      S("Using y equals twenty-four over x. Find y when x is eight. Twenty-four divided by eight is three. And find x when y is two. Two equals twenty-four over x. So x is twelve.", E('x = 8 → y = 3') + E('y = 2 → x = 12', 'g'))
    ]),
    SC('Speed and time', 'Example 5: travel', [
      S("A journey of one hundred and twenty kilometres. At sixty kilometres per hour, it takes two hours. At forty, three hours. At eighty, one and a half hours. Speed and time are in inverse proportion when the distance is fixed.", E('v × t = 120', 'g'))
    ]),
    SC('The graph', 'Example 6: the shape', [
      S("The graph of inverse proportion is not a straight line. It is a curve that falls steeply and then flattens. It never touches either axis. As x gets bigger, y gets closer and closer to zero.", V.note('A falling curve, not a line'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Using direct proportion. Six workers take four days. Wrong: eight workers take four times eight over six, five point three days. More workers should take less time, not more. The total work is twenty-four worker days. Divided by eight. Three days.", r('4 × 8 ÷ 6 ≈ 5.3 days  ✗') + g('24 ÷ 8 = 3 days  ✓')),
      S("Mistake two. Dividing to find k. y is six when x is four, in inverse proportion. Wrong: k is four divided by six. In inverse proportion we multiply. Four times six is twenty-four.", r('k = 4 ÷ 6  ✗') + g('k = 4 × 6 = 24  ✓')),
      S("Mistake three. Not checking the answer makes sense. y is forty over x, and x is ten. Wrong: forty times ten, four hundred. As x grows, y should shrink. Forty divided by ten is four.", r('40 × 10 = 400  ✗') + g('40 ÷ 10 = 4  ✓'))
    ]),
    SC('In real life', 'Sharing the work', [
      S("Ten people clean a hall in six hours. If twenty people help, it takes three hours. That assumes everyone works equally well. In real life, too many people can get in each other's way.", V.note('Inverse proportion assumes equal work'))
    ]),
    L.turn("Your turn! Number one. Four painters take nine days to paint a house. How long do six painters take? Pause and try it.", E('4 × 9 ÷ 6'), "Total work is thirty-six. Thirty-six divided by six is six days.", g('6 days')),
    L.turn("Your turn! Number two. y is inversely proportional to x. When x is five, y is eight. Find k. Pause and try it.", E('k = 5 × 8'), "Forty.", g('k = 40')),
    L.turn("Your turn! Number three. Use y equals forty over x to find y when x is ten. Pause and try it.", E('y = 40 ÷ 10'), "Four.", g('4')),
    L.rec('How do you work with inverse proportion and formulae?', "In inverse proportion, when one quantity increases, the other decreases in the same proportion. The product of the two is always the same. Write it as y equals k over x, and find k by multiplying x and y. The graph is a falling curve. Check that the answer makes sense.", ['Product is constant', 'y = k/x', 'k = x × y', 'One up, other down'])
  ]);

  /* ---- Average speed ---- */
  N('How do you find average speed over a whole journey?', 'how to work out average speed when a journey has more than one part.', [
    SC('Average speed', 'Start with the basics', [
      S("Speed tells us how fast something moves. The formula is speed equals distance divided by time. You can remember it with a triangle, with distance on top, and speed and time at the bottom.", E('Speed = Distance ÷ Time', 'g') + V.cols([V.card('D = S × T', 'b', true), V.card('T = D ÷ S', 'p', true)], 2)),
      S("But a real journey is rarely at one speed. A car speeds up, slows down, and stops at lights. So we use average speed, which is the total distance divided by the total time.", E('Average speed = total distance ÷ total time', 'g'))
    ]),
    SC('A simple case', 'Example 1: one speed', [
      S("A cyclist rides sixty kilometres in four hours. Speed is sixty divided by four. Fifteen kilometres per hour.", g('60 ÷ 4 = 15 km/h'))
    ]),
    SC('Two parts', 'Example 2: a journey in two stages', [
      S("A driver goes eighty kilometres in one hour, and then sixty kilometres in two hours. What is the average speed for the whole trip? Total distance is eighty plus sixty. One hundred and forty kilometres. Total time is one plus two. Three hours.", E('Distance: 80 + 60 = 140 km') + E('Time: 1 + 2 = 3 h')),
      S("Average speed is one hundred and forty divided by three. About forty-six point seven kilometres per hour.", g('140 ÷ 3 ≈ 46.7 km/h'))
    ]),
    SC('The trap', 'Example 3: not the average of the speeds', [
      S("The speeds were eighty and thirty. The mean of eighty and thirty is fifty-five. But the average speed is forty-six point seven. They are different, because the driver spent more time at the slower speed. Never just average the speeds.", E('Mean of speeds = 55') + r('Average speed ≠ 55') + g('Average speed ≈ 46.7'))
    ]),
    SC('Finding time', 'Example 4: when speeds are given', [
      S("A train travels one hundred and fifty kilometres at seventy-five kilometres per hour, and then one hundred and fifty kilometres at fifty. Find the time for each part. Time is distance divided by speed. First part, two hours. Second part, three hours.", E('150 ÷ 75 = 2 h') + E('150 ÷ 50 = 3 h')),
      S("Total distance is three hundred. Total time is five hours. Average speed is sixty kilometres per hour. Again, not sixty-two point five, which would be the mean of seventy-five and fifty.", E('300 ÷ 5') + g('= 60 km/h'))
    ]),
    SC('Out and back', 'Example 5: a return journey', [
      S("A girl cycles to school at twelve kilometres per hour and returns at eight. The distance is six kilometres each way. Time there is half an hour. Time back is three quarters of an hour. Total distance is twelve kilometres. Total time is one and a quarter hours. Average speed is nine point six kilometres per hour.", E('6 ÷ 12 = 0.5 h') + E('6 ÷ 8 = 0.75 h') + g('12 ÷ 1.25 = 9.6 km/h'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Averaging the speeds. Eighty kilometres per hour for one hour, then thirty for two hours. Wrong: eighty plus thirty, over two, fifty-five. Use the total distance and total time. One hundred and forty kilometres in three hours. About forty-six point seven.", r('(80 + 30) ÷ 2 = 55  ✗') + g('140 ÷ 3 ≈ 46.7  ✓')),
      S("Mistake two. Using minutes as hours. Fifteen kilometres in forty-five minutes. Wrong: fifteen divided by forty-five. Change the time to hours first. Forty-five minutes is zero point seven five hours. Twenty kilometres per hour.", r('15 ÷ 45 = 0.33 km/h  ✗') + g('15 ÷ 0.75 = 20 km/h  ✓')),
      S("Mistake three. Leaving out a stop. A driver goes one hundred kilometres. The driving takes one hour, and there is a half hour stop. Wrong: one hundred kilometres per hour. The whole journey took one and a half hours. About sixty-six point seven.", r('100 ÷ 1 = 100 km/h  ✗') + g('100 ÷ 1.5 ≈ 66.7 km/h  ✓'))
    ]),
    SC('In real life', 'Journey planning', [
      S("Sat navs use average speed to estimate arrival times. A two hundred and forty kilometre trip at an average of eighty kilometres per hour takes three hours. Heavy traffic lowers the average, and so the arrival time is later.", g('240 ÷ 80 = 3 h'))
    ]),
    L.turn("Your turn! Number one. A runner goes twelve kilometres in one and a half hours. What is the average speed? Pause and try it.", E('12 ÷ 1.5'), "Eight kilometres per hour.", g('8 km/h')),
    L.turn("Your turn! Number two. A car goes sixty kilometres in one hour, and then ninety kilometres in one hour. Find the average speed. Pause and try it.", E('150 ÷ 2'), "One hundred and fifty kilometres in two hours. Seventy-five kilometres per hour.", g('75 km/h')),
    L.turn("Your turn! Number three. A bus takes thirty minutes to go fifteen kilometres. Give its speed in kilometres per hour. Pause and try it.", E('15 ÷ 0.5'), "Thirty minutes is half an hour. Thirty kilometres per hour.", g('30 km/h')),
    L.rec('How do you find average speed over a whole journey?', "Speed is distance divided by time. Average speed is the total distance divided by the total time. Do not just average the speeds. If speeds are given for parts of a journey, work out the time for each part first, using time equals distance divided by speed. Keep the time units consistent.", ['Average = total D ÷ total T', 'T = D ÷ S for each part', 'Do not average the speeds', 'Same time units'])
  ]);

  /* ---- Value for money ---- */
  N('How do you compare value for money using unit rates?', 'how to compare prices by finding the cost per unit and choose the best buy.', [
    SC('Best buy', 'Start with the basics', [
      S("A large pack costs more than a small pack. But is it better value? To find out, we compare the price of the same amount. Usually, we work out the price of one unit, like one gram or one litre. This is called the unit price.", E('Unit price = price ÷ amount', 'g')),
      S("Two ways to compare. Find the price per unit and pick the lowest. Or find how much you get for one pound, and pick the highest. Both work. Just be consistent.", V.cols([V.card('Lowest price per unit', 'b', true), V.card('Most per pound', 'g', true)], 2))
    ]),
    SC('Price per unit', 'Example 1: cereal', [
      S("A small box of cereal is three hundred grams for one pound eighty. A big box is seven hundred and fifty grams for three pounds seventy-five. Which is better value? Work out the cost per gram for each. In pence, one eighty is one hundred and eighty pence. One hundred and eighty divided by three hundred is zero point six pence per gram.", E('Small: 180p ÷ 300 = 0.6p per g')),
      S("The big box. Three seventy-five is three hundred and seventy-five pence. Divided by seven hundred and fifty is zero point five pence per gram.", E('Big: 375p ÷ 750 = 0.5p per g')),
      S("The big box costs less per gram. So it is the better buy.", g('Big box is better value'))
    ]),
    SC('Amount per pound', 'Example 2: the other way', [
      S("Let's use the other method for the same cereal. Small box, three hundred grams for one pound eighty. Divide three hundred by one point eight. One hundred and sixty-seven grams per pound. Big box. Seven hundred and fifty divided by three point seven five. Two hundred grams per pound.", E('Small: 300 ÷ 1.8 ≈ 167 g per £') + E('Big: 750 ÷ 3.75 = 200 g per £')),
      S("The big box gives more per pound. Same answer.", g('Big box wins'))
    ]),
    SC('Three offers', 'Example 3: comparing more than two', [
      S("Juice comes in three sizes. Five hundred millilitres for ninety pence. One litre for one pound sixty-five. One point five litres for two pounds forty. Convert to pence per hundred millilitres. Ninety divided by five is eighteen. One sixty-five over ten is sixteen and a half. Two forty over fifteen is sixteen.", E('500 mL: 18p per 100 mL') + E('1 L: 16.5p per 100 mL') + E('1.5 L: 16p per 100 mL')),
      S("The biggest bottle is the cheapest per hundred millilitres.", g('1.5 L is the best buy'))
    ]),
    SC('Not always the big one', 'Example 4: a surprise', [
      S("Bigger is not always better. A shop has a special offer. Pasta, five hundred grams for one pound, or a family pack of one and a half kilograms for three pounds fifty. Per hundred grams, the small pack is twenty pence. The big pack is about twenty-three pence. The small one is better value.", E('500 g: 20p per 100 g') + E('1.5 kg: 23.3p per 100 g') + g('Small pack wins'))
    ]),
    SC('Special offers', 'Example 5: three for two', [
      S("A shop offers three for the price of two on tins that cost eighty pence each. Three tins cost one pound sixty. That is about fifty-three pence per tin. A normal price is eighty pence. So the offer is the better buy, if you need three tins.", E('2 × 80p = £1.60 for 3') + g('≈ 53p each'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Comparing the total prices. Cheese costs two pounds fifty for two hundred and fifty grams, or four fifty for five hundred. Wrong: two fifty is cheaper, so buy that. But it is less cheese. Price per hundred grams. One pound against ninety pence. The large block is better.", r('£2.50 < £4.50, so small  ✗') + g('100p against 90p per 100 g: large  ✓')),
      S("Mistake two. Mixing units. Pasta is one pound for five hundred grams, or one pound eighty for one point five kilograms. Wrong: compare five hundred and one point five. Change to grams. One thousand five hundred. Twenty pence against twelve pence per hundred grams.", r('500 against 1.5  ✗') + g('20p against 12p per 100 g  ✓')),
      S("Mistake three. Thinking the bigger pack is always cheaper. Pasta is one pound for five hundred grams, or three fifty for one point five kilograms. Wrong: the family pack must be cheaper. Twenty pence against twenty-three point three pence per hundred grams. The small pack wins.", r('big pack must be cheaper  ✗') + g('20p against 23.3p per 100 g: small  ✓'))
    ]),
    SC('In real life', 'Supermarkets', [
      S("Shops often show the unit price on the shelf label, like pence per hundred grams. Reading it makes comparing easy. Now you also know how it is worked out.", V.note('Check the shelf label'))
    ]),
    L.turn("Your turn! Number one. Two hundred and fifty grams of cheese costs two pounds fifty. Five hundred grams costs four pounds fifty. Which is better value? Pause and try it.", E('250 g: £2.50  ·  500 g: £4.50'), "The small one is one pound per hundred grams. The big one is ninety pence per hundred grams. The five hundred gram block is better value.", g('500 g')),
    L.turn("Your turn! Number two. Find the price per kilogram if two kilograms cost three pounds forty. Pause and try it.", E('3.40 ÷ 2'), "One pound seventy.", g('£1.70 per kg')),
    L.turn("Your turn! Number three. How much do five hundred grams cost at one pound seventy per kilogram? Pause and try it.", E('£1.70 ÷ 2'), "Eighty-five pence.", g('85p')),
    L.rec('How do you compare value for money using unit rates?', "To compare prices, find the price per unit, such as per gram or per litre. The lowest unit price is the best buy. Or find the amount you get for one pound, where the highest is best. Use the same units for each. Bigger is not always cheaper, so always calculate.", ['Price ÷ amount', 'Lowest unit price wins', 'Or most per pound', 'Same units'])
  ]);

  /* ---- Distance-time graphs ---- */
  N('How do you read and draw distance-time graphs?', 'how to read journeys from distance-time graphs and find speed from the gradient.', [
    SC('Distance-time graphs', 'Start with the basics', [
      S("A distance-time graph shows a journey. Time goes along the bottom, on the horizontal axis. Distance from the start goes up the side, on the vertical axis. The line shows where the traveller is at each time.", V.cols([V.card('Across: time', 'b', true), V.card('Up: distance', 'g', true)], 2)),
      S("The shape of the line tells a story. Let's learn to read it. There are three kinds of section.", V.list(['Going up: moving away', 'Flat: stopped', 'Going down: coming back']))
    ]),
    SC('Reading a graph', 'Example 1: a walk', [
      S("A girl walks for one hour, and covers four kilometres. The line rises steadily. She then stops for half an hour, to eat lunch. The line is flat. Then she walks back, taking one and a half hours. The line goes down to zero.", E('0–1 h: up 4 km') + E('1–1.5 h: flat') + E('1.5–3 h: back down'))
    ]),
    SC('Speed', 'Example 2: the gradient', [
      S("The steepness of the line is the speed. Gradient is the change in distance divided by the change in time. That is exactly the formula for speed. So the gradient of a distance-time graph is the speed.", E('Gradient = speed', 'g')),
      S("In the first hour, she walked four kilometres. Four divided by one is four kilometres per hour.", g('4 ÷ 1 = 4 km/h')),
      S("On the way back, four kilometres took one and a half hours. Four divided by one point five is two point six seven kilometres per hour. Slower, so the line is less steep.", E('4 ÷ 1.5 ≈ 2.67 km/h'))
    ]),
    SC('Steeper means faster', 'Example 3: comparing', [
      S("Two cyclists. Line A rises ten kilometres in one hour. Line B rises fifteen kilometres in one hour. B is steeper. So B is faster. Ten kilometres per hour, and fifteen kilometres per hour.", E('A: 10 km/h') + E('B: 15 km/h', 'g'))
    ]),
    SC('Drawing a graph', 'Example 4: from a description', [
      S("A bus leaves the depot, drives thirty kilometres in half an hour, waits for fifteen minutes, then drives twenty kilometres more in half an hour. Plot the points. Start at zero, zero. Then half an hour, thirty kilometres. Then three quarters of an hour, thirty kilometres, which is flat. Then one hour and fifteen minutes, fifty kilometres.", E('(0, 0)') + E('(0.5, 30)') + E('(0.75, 30)') + E('(1.25, 50)')),
      S("Join the points with straight lines, using a ruler.", V.rule('Join with straight lines.'))
    ]),
    SC('Average speed', 'Example 5: the whole trip', [
      S("The average speed for the bus is the total distance divided by the total time. Fifty kilometres in one and a quarter hours. Fifty divided by one point two five is forty kilometres per hour. The wait is included in the time.", E('50 ÷ 1.25') + g('= 40 km/h'))
    ]),
    SC('Meeting', 'Example 6: when lines cross', [
      S("If two journeys are drawn on the same graph, the point where the lines cross is where the two travellers meet. Read the time on the bottom, and the distance up the side.", V.note('Crossing point: they meet'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Thinking a flat line means slow. The line is flat between one hour and two hours, at six kilometres. Wrong: she walks slowly. The distance is not changing, so she is still at six kilometres. She has stopped.", r('flat = moving slowly  ✗') + g('flat = stopped at 6 km  ✓')),
      S("Mistake two. Reading a falling line as going downhill. The line falls from six kilometres to zero. Wrong: she is walking downhill. The graph shows distance from the start, not the shape of the ground. The distance is getting smaller, so she is coming back.", r('falling line = downhill  ✗') + g('distance falls = returning  ✓')),
      S("Mistake three. Forgetting to use hours for the speed. A line goes from zero to twelve kilometres in thirty minutes. Wrong: twelve divided by thirty, zero point four. Thirty minutes is half an hour. Twelve divided by zero point five is twenty-four kilometres per hour.", r('12 ÷ 30 = 0.4 km/h  ✗') + g('12 ÷ 0.5 = 24 km/h  ✓'))
    ]),
    SC('In real life', 'Trains', [
      S("Train timetables can be drawn as distance-time graphs. Where the lines of two trains cross, they pass each other. Railway planners use these to avoid collisions.", V.note('Where lines cross, trains pass'))
    ]),
    L.turn("Your turn! Number one. A line rises six kilometres in two hours. What is the speed? Pause and try it.", E('6 ÷ 2'), "Three kilometres per hour.", g('3 km/h')),
    L.turn("Your turn! Number two. What does a horizontal line mean on a distance-time graph? Pause and think.", E('?'), "The person is stopped.", g('Stopped')),
    L.turn("Your turn! Number three. A line goes from zero to twelve kilometres in thirty minutes. What is the speed in kilometres per hour? Pause and try it.", E('12 ÷ 0.5'), "Thirty minutes is half an hour. Twenty-four kilometres per hour.", g('24 km/h')),
    L.rec('How do you read and draw distance-time graphs?', "Time goes across and distance goes up. A rising line means moving away. A flat line means stopped. A falling line means returning. The gradient is the speed, so a steeper line is faster. Average speed is total distance divided by total time, including stops.", ['Up: moving away', 'Flat: stopped', 'Down: returning', 'Gradient = speed'])
  ]);

  /* ---- Compound shapes ---- */
  N('How do you find the area and perimeter of compound shapes, including semicircles and trapezia?', 'how to split a shape into simple parts and add or subtract their areas.', [
    SC('Area', 'Start with the basics', [
      S("Area is the amount of flat space inside a shape. We measure it in square units, like square centimetres. Here are the formulas we need. Rectangle, length times width. Triangle, half times base times height. Circle, pi r squared.", V.list(['Rectangle: l × w', 'Triangle: ½ × b × h', 'Circle: π r²'])),
      S("A compound shape is made of simple shapes joined together. Our method is always the same. Split the shape, find each area, then add. Or take a piece away.", V.rule('Split, find, add or subtract.'))
    ]),
    SC('Trapezium', 'Example 1: a new formula', [
      S("A trapezium has one pair of parallel sides. Its area is half times the sum of the parallel sides, times the height. Parallel sides of six and ten, and a height of four. Six plus ten is sixteen. Half of sixteen is eight. Eight times four is thirty-two.", E('A = ½(a + b)h', 'g') + E('½ × 16 × 4 = 32 cm²')),
      S("The height must be the straight, perpendicular distance between the parallel sides, not the slanted side.", V.rule('Use the perpendicular height.'))
    ]),
    SC('Adding', 'Example 2: an L-shape', [
      S("An L-shape. Split it into two rectangles. One is eight by three, which is twenty-four. The other is five by two, which is ten. Add. Thirty-four square centimetres.", E('8 × 3 = 24') + E('5 × 2 = 10') + g('24 + 10 = 34 cm²'))
    ]),
    SC('Subtracting', 'Example 3: a hole', [
      S("A square of side ten has a circle of radius two cut out of the middle. Area of the square is one hundred. Area of the circle is pi times four, which is twelve point five seven. Subtract. Eighty-seven point four three square centimetres.", E('10 × 10 = 100') + E('π × 2² ≈ 12.57') + g('100 − 12.57 ≈ 87.43 cm²'))
    ]),
    SC('Semicircle', 'Example 4: a rectangle with a semicircle on top', [
      S("A rectangle ten by six has a semicircle on the ten side. The semicircle has diameter ten, so radius five. A full circle would be pi times twenty-five. We want half. That is about thirty-nine point two seven.", E('Radius = 5') + E('½ × π × 25 ≈ 39.27')),
      S("The rectangle is sixty. Add them. About ninety-nine point three square centimetres.", g('60 + 39.27 ≈ 99.3 cm²'))
    ]),
    SC('Perimeter', 'Example 5: the same shape', [
      S("Now the perimeter. The outside edge is the rectangle's other three sides, plus the curved edge of the semicircle. The ten side where the semicircle sits is not part of the perimeter any more. Three sides: six plus ten plus six is twenty-two. The curve is half the circumference. Half of pi times ten is fifteen point seven.", E('6 + 10 + 6 = 22') + E('½ × π × 10 ≈ 15.7')),
      S("Add. Thirty-seven point seven centimetres.", g('≈ 37.7 cm'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Using the diameter as the radius. A semicircle sits on a side of length ten. Wrong: half of pi times ten squared, one hundred and fifty-seven. The radius is half of ten, five. Half of pi times twenty-five is thirty-nine point three.", r('½ × π × 10² ≈ 157  ✗') + g('½ × π × 5² ≈ 39.3  ✓')),
      S("Mistake two. Counting the inside edge in the perimeter. A rectangle ten by six has a semicircle on the ten side. Wrong: add all four sides of the rectangle, thirty-two, and the curve. The ten side where the semicircle sits is not on the outside. Six plus ten plus six, plus fifteen point seven.", r('10 + 6 + 10 + 6 + 15.7 = 47.7  ✗') + g('6 + 10 + 6 + 15.7 = 37.7  ✓')),
      S("Mistake three. Using the slanted side as the height. A trapezium has parallel sides four and eight, a vertical height of five, and a slanted side of six. Wrong: half times twelve times six, thirty-six. The height is the straight distance between the parallel sides. Half times twelve times five, thirty.", r('½(4 + 8) × 6 = 36  ✗') + g('½(4 + 8) × 5 = 30  ✓'))
    ]),
    SC('In real life', 'Tracks and windows', [
      S("A running track is a rectangle with a semicircle at each end. A window with an arch is a rectangle with a semicircle. Builders use exactly these calculations to buy glass and fencing.", V.note('Rectangle + semicircle'))
    ]),
    L.turn("Your turn! Number one. Find the area of a trapezium with parallel sides four and eight, and height five. Pause and try it.", E('a = 4, b = 8, h = 5'), "Half of twelve is six. Six times five is thirty.", g('30 cm²')),
    L.turn("Your turn! Number two. A semicircle has diameter eight. Find its area, to one decimal place. Pause and try it.", E('d = 8'), "Radius four. Half of pi times sixteen is twenty-five point one.", g('25.1 cm²')),
    L.turn("Your turn! Number three. An L-shape is made of rectangles seven by two, and four by three. Find the area. Pause and try it.", E('7 × 2  +  4 × 3'), "Fourteen plus twelve. Twenty-six.", g('26')),
    L.rec('How do you find the area and perimeter of compound shapes?', "Split a compound shape into simple shapes, find each area, then add them, or subtract a piece that is cut out. A trapezium has area half times the sum of the parallel sides times the height. For a semicircle, use half of pi r squared, with r half the diameter. For the perimeter, count only the outside edge.", ['Split into parts', 'Add or subtract', 'Trapezium ½(a + b)h', 'Perimeter: outside only'])
  ]);

  /* ---- Volume of prisms and cylinders ---- */
  N('How do you find the volume of prisms and cylinders?', 'how to find volume using area of the cross-section times length.', [
    SC('Volume', 'Start with the basics', [
      S("Volume is the amount of space inside a solid. We measure it in cubic units, like cubic centimetres. A cube with side one centimetre has volume one cubic centimetre.", E('1 cm³', 'g')),
      S("A prism is a solid with the same cross-section all the way through. Think of a slice of cheese, or a tin of beans. The volume is the area of the cross-section, times the length.", E('V = area of cross-section × length', 'g'))
    ]),
    SC('A cuboid', 'Example 1: the simplest prism', [
      S("A box is eight long, five wide and three high. The cross-section is a five by three rectangle, with area fifteen. Multiply by the length, eight. One hundred and twenty cubic centimetres.", E('5 × 3 = 15') + g('15 × 8 = 120 cm³'))
    ]),
    SC('Triangular prism', 'Example 2: a tent shape', [
      S("A triangular prism. The triangle has base six and height four. Its area is half times six times four. Twelve. The prism is ten long. Twelve times ten is one hundred and twenty cubic centimetres.", E('½ × 6 × 4 = 12') + g('12 × 10 = 120 cm³'))
    ]),
    SC('Cylinder', 'Example 3: a circular prism', [
      S("A cylinder is a prism with a circle as the cross-section. The area is pi r squared. So the volume is pi r squared times the height. A tin with radius three and height ten. Pi times nine is twenty-eight point two seven. Times ten is two hundred and eighty-two point seven.", E('V = π r² h', 'g') + E('π × 3² × 10 ≈ 282.7 cm³'))
    ]),
    SC('A trapezium prism', 'Example 4: other cross-sections', [
      S("A water trough has a trapezium cross-section with parallel sides of two and four, and height three. The area is half times six times three, nine. The trough is five long. Forty-five cubic metres.", E('½ × (2 + 4) × 3 = 9') + g('9 × 5 = 45 m³'))
    ]),
    SC('Capacity', 'Example 5: litres', [
      S("One litre is one thousand cubic centimetres. A tank has volume twelve thousand cubic centimetres. Divide by one thousand. Twelve litres.", E('12 000 ÷ 1000 = 12 litres', 'g'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Using the diameter in pi r squared. A cylinder has diameter six and height ten. Wrong: pi times six squared times ten, one thousand one hundred and thirty-one. The radius is three. Pi times nine times ten, two hundred and eighty-three.", r('π × 6² × 10 ≈ 1131  ✗') + g('π × 3² × 10 ≈ 283  ✓')),
      S("Mistake two. Forgetting the half in the triangle area. A triangular prism has a triangle with base six and height four, and a length of ten. Wrong: six times four times ten, two hundred and forty. The triangle area is half of six times four. One hundred and twenty.", r('6 × 4 × 10 = 240  ✗') + g('½ × 6 × 4 × 10 = 120  ✓')),
      S("Mistake three. Writing the wrong units. A box is two by three by four. Wrong: twenty-four centimetres. Volume is measured in cubic units. Twenty-four cubic centimetres.", r('24 cm  ✗') + g('24 cm³  ✓'))
    ]),
    SC('In real life', 'Pipes and packaging', [
      S("Engineers work out how much water fits in a pipe using the cylinder formula. A pipe of radius five centimetres and length one metre holds about seven point eight five litres.", V.note('Cylinders everywhere'))
    ]),
    L.turn("Your turn! Number one. A cuboid is four by five by six. Find the volume. Pause and try it.", E('4 × 5 × 6'), "One hundred and twenty.", g('120 cm³')),
    L.turn("Your turn! Number two. A cylinder has radius two and height seven. Find the volume to one decimal place. Pause and try it.", E('π × 2² × 7'), "Pi times four times seven. Eighty-seven point eight.", g('87.8 cm³')),
    L.turn("Your turn! Number three. A triangular prism has a triangle of area eight, and length nine. Find the volume. Pause and try it.", E('8 × 9'), "Seventy-two.", g('72 cm³')),
    L.rec('How do you find the volume of prisms and cylinders?', "A prism has the same cross-section all the way through. Its volume is the area of the cross-section times the length. For a cylinder, the cross-section is a circle, so the volume is pi r squared times the height. One litre is one thousand cubic centimetres.", ['V = area × length', 'Cylinder: π r² h', '1 L = 1000 cm³', 'Cubic units'])
  ]);

  /* ---- Surface area of cylinder ---- */
  N('How do you find the surface area of a cylinder and other solids?', 'how to add up the areas of every face, including the curved surface.', [
    SC('Surface area', 'Start with the basics', [
      S("Surface area is the total area of all the faces of a solid. It tells you how much wrapping paper or paint you need. We measure it in square units.", E('Total area of all faces', 'g')),
      S("The best method is to imagine opening the solid out flat. That flat shape is called a net. Then find each part's area and add them up.", V.rule('Unfold it into a net.'))
    ]),
    SC('A cuboid', 'Example 1: six faces', [
      S("A box is five by four by three. There are three pairs of matching faces. Five by four is twenty, two of them, forty. Five by three is fifteen, two of them, thirty. Four by three is twelve, two of them, twenty-four. Add. Ninety-four.", E('2 × 20 = 40') + E('2 × 15 = 30') + E('2 × 12 = 24') + g('Total = 94 cm²'))
    ]),
    SC('A triangular prism', 'Example 2: five faces', [
      S("A triangular prism has two triangles and three rectangles. Take triangles with base six, height four, and sloping sides of five. The prism is ten long. Each triangle is twelve, so the two triangles make twenty-four. The three rectangles are six by ten, five by ten, and five by ten. That is sixty, fifty and fifty.", E('2 triangles: 24') + E('60 + 50 + 50 = 160')),
      S("Add them. One hundred and eighty-four square centimetres.", g('24 + 160 = 184 cm²'))
    ]),
    SC('The cylinder net', 'Example 3: unrolling', [
      S("A cylinder has two circles, and one curved surface. If you unroll the curved surface, it is a rectangle. The width of the rectangle is the height of the cylinder. The length of the rectangle is the circumference of the circle.", V.list(['Two circles: 2 × π r²', 'Rectangle: 2π r × h']))
    ]),
    SC('The formula', 'Example 4: radius three, height ten', [
      S("Two circles: two times pi times nine. About fifty-six point five. The curved part: two times pi times three times ten. About one hundred and eighty-eight point five.", E('2π r² = 2 × π × 9 ≈ 56.5') + E('2π r h = 2 × π × 3 × 10 ≈ 188.5')),
      S("Add. About two hundred and forty-five square centimetres.", g('≈ 245 cm²'))
    ]),
    SC('An open cylinder', 'Example 5: no lid', [
      S("A cup is an open cylinder with one circle for the base only. A radius of four and height of nine. One circle is pi times sixteen, about fifty point three. The curved part is two pi times four times nine, about two hundred and twenty-six point two. Add. Two hundred and seventy-six point five.", E('π r² ≈ 50.3') + E('2π r h ≈ 226.2') + g('≈ 276.5 cm²')),
      S("Always check how many faces the solid has.", V.rule('Count the faces.'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Forgetting the second circle. A closed cylinder has radius two and height five. Wrong: one circle plus the curved surface, twelve point six plus sixty-two point eight, seventy-five point four. A closed cylinder has two circles. Twenty-five point one plus sixty-two point eight. About eighty-eight.", r('12.6 + 62.8 = 75.4  ✗') + g('25.1 + 62.8 ≈ 88  ✓')),
      S("Mistake two. Mixing up area and volume. A cube has side five. Wrong: five cubed, one hundred and twenty-five. That is the volume. The surface area is six faces, each twenty-five. One hundred and fifty square centimetres.", r('5³ = 125 cm²  ✗') + g('6 × 25 = 150 cm²  ✓')),
      S("Mistake three. Using the diameter. A cylinder has diameter ten and height four. Wrong: the curved area is two pi times ten times four, two hundred and fifty-one. Use the radius, five. Two pi times five times four, about one hundred and twenty-six.", r('2π × 10 × 4 ≈ 251  ✗') + g('2π × 5 × 4 ≈ 126  ✓'))
    ]),
    SC('In real life', 'Labels and paint', [
      S("A can label covers only the curved surface. Paint for a tank covers everything. Knowing which faces you need saves money.", V.note('Which faces do you need?'))
    ]),
    L.turn("Your turn! Number one. Find the surface area of a cube with side five. Pause and try it.", E('6 × 5 × 5'), "Six faces, each twenty-five. One hundred and fifty.", g('150 cm²')),
    L.turn("Your turn! Number two. A cylinder has radius two and height five. Find the curved surface area. Pause and try it.", E('2π × 2 × 5'), "Two times pi times two times five is twenty pi. About sixty-two point eight.", g('≈ 62.8 cm²')),
    L.turn("Your turn! Number three. What shape is the curved surface of a cylinder when it is unrolled? Pause and think.", E('?'), "A rectangle.", g('Rectangle')),
    L.rec('How do you find the surface area of a cylinder and other solids?', "Surface area is the total area of all the faces. Imagine the net, find each area and add. For a closed cylinder, there are two circles, each pi r squared, and a curved surface which unrolls to a rectangle of area two pi r times h. Check whether the solid is open or closed.", ['Draw the net', 'Add all the faces', 'Cylinder: 2π r² + 2π r h', 'Squared units'])
  ]);

  /* ---- Compound solids ---- */
  N('How do you find the volume and surface area of compound solids?', 'how to split a solid into simple parts, such as a cylinder with a cone or hemisphere on top.', [
    SC('Compound solids', 'Start with the basics', [
      S("A compound solid is made by joining simple solids together. Think of an ice cream cone with a scoop on top, or a pencil shape, a cylinder with a cone at the end. To find its volume, we find the volume of each part and add them.", V.rule('Split, find each, add.')),
      S("Here are the formulas we will need. Cylinder, pi r squared h. Cone, one third pi r squared h. Sphere, four thirds pi r cubed. A hemisphere is half a sphere, so two thirds pi r cubed.", V.list(['Cylinder: π r² h', 'Cone: ⅓ π r² h', 'Sphere: ⁴⁄₃ π r³', 'Hemisphere: ⅔ π r³']))
    ]),
    SC('Cylinder and cone', 'Example 1: a pencil shape', [
      S("A cylinder with radius three and height eight has a cone on top, with the same radius and height four. Cylinder volume is pi times nine times eight. That is about two hundred and twenty-six point two.", E('π × 3² × 8 ≈ 226.2')),
      S("Cone volume is one third times pi times nine times four. About thirty-seven point seven. Add them. About two hundred and sixty-four cubic centimetres.", E('⅓ × π × 9 × 4 ≈ 37.7') + g('≈ 264 cm³'))
    ]),
    SC('Hemisphere', 'Example 2: a capsule', [
      S("A medicine capsule is a cylinder with a hemisphere on each end. Radius two, and the cylinder part is six long. Cylinder, pi times four times six, about seventy-five point four. Two hemispheres make one whole sphere. Four thirds times pi times eight, about thirty-three point five.", E('π × 4 × 6 ≈ 75.4') + E('⁴⁄₃ × π × 8 ≈ 33.5')),
      S("Add. About one hundred and eight point nine cubic centimetres.", g('≈ 108.9 cm³'))
    ]),
    SC('Subtracting', 'Example 3: a hollow', [
      S("A cube of side ten has a cylindrical hole drilled right through, with radius two. The cube is one thousand. The hole is pi times four times ten, about one hundred and twenty-five point seven. Subtract. About eight hundred and seventy-four point three.", E('10³ = 1000') + E('π × 4 × 10 ≈ 125.7') + g('≈ 874.3 cm³'))
    ]),
    SC('Surface area', 'Example 4: an ice cream cone', [
      S("A hemisphere sits on a cone, both with radius three. The surface we can see is the curved surface of the hemisphere, plus the curved surface of the cone. The hemisphere curved area is two pi r squared, about fifty-six point five.", E('2π r² = 2 × π × 9 ≈ 56.5')),
      S("The cone has slant height of ten. Its curved area is pi r l. Pi times three times ten, about ninety-four point two. Add. About one hundred and fifty point eight.", E('π r l ≈ 94.2') + g('≈ 150.8 cm²')),
      S("The flat circle where they join is hidden inside, so it is not counted.", V.rule('Do not count joined faces.'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Using the whole height for the cone. A cylinder of height eight has a cone of height four on top, with radius three. Wrong: the cone has height twelve, one third pi times nine times twelve, one hundred and thirteen. The cone is only four tall. One third pi times nine times four, thirty-seven point seven.", r('⅓ × π × 9 × 12 ≈ 113.1  ✗') + g('⅓ × π × 9 × 4 ≈ 37.7  ✓')),
      S("Mistake two. Counting faces that are joined. Two cubes of side two are stuck together, face to face. Wrong: twelve faces, each of area four, forty-eight. The two touching faces are hidden. Ten faces. Forty.", r('12 × 4 = 48  ✗') + g('10 × 4 = 40  ✓')),
      S("Mistake three. Treating a hemisphere as a whole sphere. A hemisphere has radius three. Wrong: four thirds pi times twenty-seven, one hundred and thirteen. A hemisphere is half a sphere. Fifty-six point five.", r('⁴⁄₃π × 27 ≈ 113.1  ✗') + g('½ × ⁴⁄₃π × 27 ≈ 56.5  ✓'))
    ]),
    SC('In real life', 'Silos and rockets', [
      S("A grain silo is a cylinder with a cone or dome on top. Engineers add the volumes to know how much grain it can hold.", V.note('Silo: cylinder + dome'))
    ]),
    L.turn("Your turn! Number one. A cylinder has volume sixty and a cone on top has volume twenty. What is the total? Pause and try it.", E('60 + 20'), "Eighty.", g('80 cm³')),
    L.turn("Your turn! Number two. Write the volume of a hemisphere of radius three. Pause and try it.", E('⅔ × π × 27'), "Two thirds times pi times twenty-seven. Eighteen pi, about fifty-six point five.", g('≈ 56.5 cm³')),
    L.turn("Your turn! Number three. Is the joined circle counted in the surface area of a cone on a cylinder? Pause and think.", E('?'), "No, it is hidden inside.", g('Not counted')),
    L.rec('How do you find the volume and surface area of compound solids?', "Split a compound solid into simple solids, find each volume, and add. Subtract any hole. A hemisphere is half a sphere. For surface area, count only the faces you can see, and leave out the faces that are joined together.", ['Split into solids', 'Add or subtract volumes', 'Hemisphere is ½ sphere', 'Skip joined faces'])
  ]);

  /* ---- Converting units of area and volume ---- */
  N('How do you convert units of area and volume?', 'how to change square and cubic units correctly.', [
    SC('Length first', 'Start with the basics', [
      S("Lengths are easy to convert. One metre is one hundred centimetres. One centimetre is ten millimetres. We multiply or divide by the same number.", V.list(['1 m = 100 cm', '1 cm = 10 mm', '1 km = 1000 m'])),
      S("But area and volume are different. They use squared and cubed units, so the conversion number must be squared or cubed too.", V.rule('Square it. Cube it.'))
    ]),
    SC('Area', 'Example 1: square metres to square centimetres', [
      S("Picture a square, one metre by one metre. Its area is one square metre. In centimetres, it is one hundred by one hundred. That is ten thousand square centimetres.", E('1 m² = 100 × 100 = 10 000 cm²', 'g')),
      S("So to change square metres into square centimetres, multiply by ten thousand. Three square metres is thirty thousand square centimetres.", E('3 m² = 30 000 cm²'))
    ]),
    SC('Going down', 'Example 2: square centimetres to square millimetres', [
      S("One centimetre is ten millimetres. A square centimetre is ten by ten, one hundred square millimetres. Five square centimetres is five hundred square millimetres.", E('1 cm² = 100 mm²') + g('5 cm² = 500 mm²'))
    ]),
    SC('Going back', 'Example 3: dividing', [
      S("To go the other way, divide. Twenty-five thousand square centimetres is how many square metres? Divide by ten thousand. Two point five.", E('25 000 ÷ 10 000 = 2.5 m²', 'g'))
    ]),
    SC('Volume', 'Example 4: cubic units', [
      S("A cube one metre each way. In centimetres, it is one hundred by one hundred by one hundred. One million cubic centimetres.", E('1 m³ = 100³ = 1 000 000 cm³', 'g')),
      S("And one cubic centimetre is a thousand cubic millimetres. And one cubic centimetre equals one millilitre. One thousand cubic centimetres is one litre.", E('1 cm³ = 1000 mm³') + E('1000 cm³ = 1 litre'))
    ]),
    SC('Mixed units', 'Example 5: a problem', [
      S("A room is four metres by three metres. The carpet is sold per square centimetre. Area of the room is twelve square metres. Multiply by ten thousand. One hundred and twenty thousand square centimetres.", E('4 × 3 = 12 m²') + g('12 × 10 000 = 120 000 cm²'))
    ]),
    SC('Watch out!', 'Three common mistakes', [
      S("Mistake one: using one hundred for area. One square metre is ten thousand square centimetres, not one hundred.", r('1 m² = 100 cm²  ✗') + g('1 m² = 10 000 cm²  ✓')),
      S("Mistake two: using one hundred for volume. It is one million.", r('1 m³ = 100 cm³  ✗') + g('1 m³ = 1 000 000 cm³  ✓')),
      S("Mistake three: multiplying when you should divide. Smaller unit, bigger number.", V.rule('Smaller unit, bigger number.'))
    ]),
    SC('In real life', 'Land and water', [
      S("Land is measured in hectares. One hectare is ten thousand square metres. A football pitch is about three quarters of a hectare.", E('1 hectare = 10 000 m²'))
    ]),
    L.turn("Your turn! Number one. Change two square metres to square centimetres. Pause and try it.", E('2 m² → cm²'), "Multiply by ten thousand. Twenty thousand.", g('20 000 cm²')),
    L.turn("Your turn! Number two. Change three hundred square millimetres to square centimetres. Pause and try it.", E('300 mm² → cm²'), "Divide by one hundred. Three.", g('3 cm²')),
    L.turn("Your turn! Number three. How many litres is five thousand cubic centimetres? Pause and try it.", E('5000 cm³'), "Divide by one thousand. Five litres.", g('5 litres')),
    L.rec('How do you convert units of area and volume?', "For area, square the length conversion. One square metre is ten thousand square centimetres. For volume, cube it. One cubic metre is one million cubic centimetres. Going to a smaller unit, multiply. Going to a bigger unit, divide. One litre is one thousand cubic centimetres.", ['Area: square the factor', 'Volume: cube the factor', 'Smaller unit: multiply', '1 L = 1000 cm³'])
  ]);

  /* ---- Working backwards ---- */
  N('How do you work backwards from a volume or area to find a missing length?', 'how to rearrange a volume or area formula to find a radius, height or side.', [
    SC('Working backwards', 'Start with the basics', [
      S("Sometimes we know the volume or the area, and we need a missing length. We use the same formula, but we put in what we know and solve for the missing value. It is just an equation.", V.rule('Put in what you know. Solve.'))
    ]),
    SC('Cuboid', 'Example 1: find the height', [
      S("A box has volume one hundred and twenty, length six, width five. Volume is length times width times height. So one hundred and twenty equals thirty times height. Divide by thirty. The height is four.", E('120 = 6 × 5 × h') + E('h = 120 ÷ 30') + g('h = 4 cm'))
    ]),
    SC('Cylinder', 'Example 2: find the height', [
      S("A cylinder has volume one hundred and fifty-seven, and radius two. Volume is pi r squared h. So one fifty-seven equals pi times four times h. That is twelve point five seven h. Divide. The height is twelve point five.", E('157 = π × 4 × h') + E('h = 157 ÷ 12.57') + g('h ≈ 12.5 cm'))
    ]),
    SC('Finding a radius', 'Example 3: square roots', [
      S("A cylinder of height five has volume three hundred and fourteen. Find the radius. Pi r squared times five is three fourteen. Divide by five pi, which is fifteen point seven. r squared is twenty. Square root. About four point five.", E('314 = π r² × 5') + E('r² = 314 ÷ 15.7 = 20') + g('r ≈ 4.5 cm')),
      S("We needed a square root at the end, because r was squared.", V.rule('Undo the square with √.'))
    ]),
    SC('A circle', 'Example 4: from the area', [
      S("A circle has area fifty. Find the radius. Pi r squared equals fifty. r squared is fifty divided by pi, about fifteen point nine. Take the square root. About four.", E('π r² = 50') + E('r² ≈ 15.9') + g('r ≈ 4 cm'))
    ]),
    SC('From circumference', 'Example 5: the diameter', [
      S("A circle has circumference thirty-one point four. The circumference is pi times the diameter. So the diameter is thirty-one point four divided by pi. Ten.", E('C = π d') + E('d = 31.4 ÷ π') + g('d = 10, r = 5'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Forgetting the square root. A cylinder of height five has volume three hundred and fourteen. Then r squared is twenty. Wrong: the radius is twenty. Take the square root. About four point five.", r('r = 20  ✗') + g('r = √20 ≈ 4.5  ✓')),
      S("Mistake two. Forgetting to divide by pi. A circle has area fifty. Wrong: r squared is fifty, so r is seven point one. Divide by pi first. Fifty divided by pi is fifteen point nine. Square root, four.", r('r² = 50 → r ≈ 7.1  ✗') + g('r² = 50 ÷ π ≈ 15.9 → r ≈ 4  ✓')),
      S("Mistake three. Leaving out one of the values. A cuboid has volume one hundred and twenty, length six and width five. Wrong: the height is one twenty divided by six, twenty. Divide by both. One twenty divided by thirty is four.", r('120 ÷ 6 = 20  ✗') + g('120 ÷ (6 × 5) = 4  ✓'))
    ]),
    SC('In real life', 'Tanks', [
      S("An engineer needs a tank to hold five thousand litres, with a set radius. She works backwards from the volume to find how tall to make it.", V.note('Volume known, height needed'))
    ]),
    L.turn("Your turn! Number one. A cuboid has volume sixty, length five and width three. Find the height. Pause and try it.", E('60 = 5 × 3 × h'), "Sixty divided by fifteen. Four.", g('4')),
    L.turn("Your turn! Number two. A circle has area twenty-eight point three. Find r squared, if pi is three point one four. Pause and try it.", E('π r² = 28.3'), "Divide by pi. About nine.", g('r² ≈ 9')),
    L.turn("Your turn! Number three. And so what is the radius? Pause and try it.", E('r² = 9'), "Square root of nine. Three.", g('r = 3')),
    L.rec('How do you work backwards from a volume or area to find a missing length?', "Write the formula, put in the numbers you know, and solve for the missing one. Divide to find a height. If the unknown is squared, as in a radius, take the square root at the end. Keep pi until the last step to stay accurate.", ['Write the formula', 'Substitute known values', 'Divide', 'Square root if squared'])
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
          ["The bank also charges £5 each time a direct debit fails. Dev has two failed direct debits. The failed payments cost £10.", ['2 × 5 = £10']],
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
        { q: 'A bank charges 2% of the overdrawn amount each month. Mina is overdrawn by £350 for one month and has one failed direct debit that costs £7. What is her total charge?', say: "1% of 350 is £3.50. 2% is £7. Add the £7 fee. Her total charge is £14.", work: ['1% of 350 = 3.50', '2% = 7', '7 + 7'], ans: ['g|£14'] },
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
