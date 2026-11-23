/* lessons_new_s2d.js: S2 topic 821, fractions, standard form, indices, tolerance */
(function () {
  'use strict';
  var BT = window.BT; if (!BT || !BT.L || !BT.L.fx) return;
  var L = BT.L, F = BT.F, fx = L.fx;

  fx('How do you add and subtract fractions?', 'how to add and subtract fractions and mixed numbers with different denominators.', {
    head: 'Adding and subtracting fractions',
    basics: [['Same denominator first', [
      ["The denominator tells us the size of the pieces. We can only add or subtract pieces that are the same size. So first we change the fractions so they have the same denominator. This is called a common denominator.", ['n|Same size pieces first', '1/2 + 1/3: halves and thirds are different sizes']],
      ["Find the lowest common multiple of the denominators. Change each fraction to an equivalent one with that denominator. Then add or subtract the numerators only, and keep the denominator the same.", ['1. Common denominator (LCM)', '2. Make equivalent fractions', '3. Add or subtract the tops', '4. Simplify']]]]],
    ex: [
      ['One half add one third', [
        ["The denominators are two and three. The lowest common multiple is six. One half is three sixths, because we multiply the top and the bottom by three. One third is two sixths, because we multiply top and bottom by two.", ['LCM of 2 and 3 = 6', '1/2 = 3/6', '1/3 = 2/6']],
        ["Now the pieces are the same size, so add the tops. Three plus two is five. The answer is five sixths.", ['3/6 + 2/6 = 5/6', 'g|1/2 + 1/3 = 5/6']]]],
      ['Three quarters take away one sixth', [
        ["The lowest common multiple of four and six is twelve. Three quarters is nine twelfths. One sixth is two twelfths.", ['LCM of 4 and 6 = 12', '3/4 = 9/12', '1/6 = 2/12']],
        ["Subtract the tops. Nine minus two is seven. The answer is seven twelfths. It cannot be simplified.", ['9/12 − 2/12 = 7/12', 'g|3/4 − 1/6 = 7/12']]]],
      ['Mixed numbers', [
        ["Two and a half plus one and three quarters. Add the whole numbers first: two plus one is three. Then add the fractions. A half is two quarters. Two quarters plus three quarters is five quarters, which is one and one quarter.", ['2 + 1 = 3', '1/2 + 3/4 = 2/4 + 3/4 = 5/4 = 1 1/4']],
        ["Put them together. Three plus one and a quarter is four and a quarter.", ['3 + 1 1/4', 'g|= 4 1/4']]]],
      ['Subtracting mixed numbers', [
        ["Three and one fifth take away one and three fifths. The fraction part of the first number is smaller, so change both to improper fractions. Three and one fifth is sixteen fifths. One and three fifths is eight fifths.", ['3 1/5 = 16/5', '1 3/5 = 8/5']],
        ["Sixteen fifths take away eight fifths is eight fifths. As a mixed number, that is one and three fifths.", ['16/5 − 8/5 = 8/5', 'g|= 1 3/5']]]]],
    mist: [
      ['Adding the tops and the bottoms', "Mistake one: adding the numerators and the denominators. One half plus one third is not two fifths. Two fifths is smaller than a half, which cannot be right. Find a common denominator first. The answer is five sixths.", ['r|1/2 + 1/3 = 2/5 ✗', 'g|1/2 + 1/3 = 3/6 + 2/6 = 5/6 ✓']],
      ['Forgetting to simplify', "Mistake two: leaving the answer unsimplified. One sixth plus one third is one sixth plus two sixths, which is three sixths. That simplifies to a half.", ['1/6 + 2/6 = 3/6', 'g|3/6 = 1/2 ✓']]],
    real: ['In real life', "A recipe needs three quarters of a cup of flour for the cake and two thirds of a cup for the topping. Three quarters is nine twelfths and two thirds is eight twelfths. Together that is seventeen twelfths, which is one and five twelfths cups.", ['3/4 + 2/3 = 9/12 + 8/12', '= 17/12 = 1 5/12 cups']],
    turns: [
      { q: 'Work out two thirds plus one quarter.', task: '2/3 + 1/4', say: "The lowest common multiple of three and four is twelve. Two thirds is eight twelfths. One quarter is three twelfths. Eight plus three is eleven. The answer is eleven twelfths.", work: ['LCM of 3 and 4 = 12', '2/3 = 8/12 and 1/4 = 3/12', '8/12 + 3/12 = 11/12'], ans: ['g|11/12'] },
      { q: 'Work out five sixths minus three eighths.', task: '5/6 − 3/8', say: "The lowest common multiple of six and eight is twenty-four. Five sixths is twenty twenty-fourths. Three eighths is nine twenty-fourths. Twenty minus nine is eleven. The answer is eleven twenty-fourths.", work: ['LCM of 6 and 8 = 24', '5/6 = 20/24 and 3/8 = 9/24', '20/24 − 9/24 = 11/24'], ans: ['g|11/24'] },
      { q: 'Work out one and two thirds plus two and three quarters.', task: '1 2/3 + 2 3/4', say: "Add the whole numbers first. One plus two is three. Then the fractions. The common denominator is twelve. Two thirds is eight twelfths, and three quarters is nine twelfths. Eight plus nine is seventeen twelfths, which is one and five twelfths. Three plus one and five twelfths is four and five twelfths.", work: ['1 + 2 = 3', '2/3 + 3/4 = 8/12 + 9/12', '= 17/12 = 1 5/12', '3 + 1 5/12 = 4 5/12'], ans: ['g|4 5/12'] }],
    rec: ["Same denominator first, then add or subtract the tops.", ['Find the LCM of the denominators', 'Make equivalent fractions', 'Add or subtract the numerators only', 'Simplify the answer', 'Mixed numbers: whole numbers and fractions, or improper fractions']]
  });

  fx('How do you multiply and divide fractions?', 'how to multiply and divide fractions and mixed numbers.', {
    head: 'Multiplying and dividing fractions',
    basics: [['Multiplying', [
      ["To multiply fractions, multiply the numerators together and multiply the denominators together. Two thirds times three quarters is two times three over three times four. That is six twelfths, which simplifies to a half.", ['2/3 × 3/4 = (2 × 3)/(3 × 4)', '= 6/12 = 1/2']],
      ["We can often make it easier by cancelling first. The three on the top and the three on the bottom cancel. That leaves two over four, which is a half.", ['2/3 × 3/4 → cancel the 3s', '= 2/4 = 1/2']]]],
      ['Dividing', [
      ["To divide by a fraction, we flip the second fraction upside down and multiply. This is the reciprocal. Two thirds divided by four fifths becomes two thirds times five quarters.", ['2/3 ÷ 4/5', '= 2/3 × 5/4']],
      ["Multiply across: two times five is ten, and three times four is twelve. Ten twelfths simplifies to five sixths. We flip only the second fraction, the one we divide by.", ['= 10/12', 'g|= 5/6']]]]],
    ex: [
      ['A fraction of an amount', [
        ["Three fifths of forty. The word of means multiply. Forty is forty over one. Three fifths times forty over one is one hundred and twenty over five.", ['3/5 × 40 = 3/5 × 40/1', '= 120/5']],
        ["One hundred and twenty divided by five is twenty-four.", ['120 ÷ 5 = 24', 'g|3/5 of 40 = 24']]]],
      ['Mixed numbers', [
        ["One and a half times two and two thirds. First change both to improper fractions. One and a half is three halves. Two and two thirds is eight thirds.", ['1 1/2 = 3/2', '2 2/3 = 8/3']],
        ["Multiply: three halves times eight thirds is twenty-four sixths. The threes cancel, and eight halves is four. Twenty-four divided by six is four.", ['3/2 × 8/3 = 24/6', 'g|= 4']]]],
      ['Dividing mixed numbers', [
        ["Two and a quarter divided by one and a half. Change to improper fractions: nine quarters divided by three halves. Flip the second fraction and multiply.", ['2 1/4 = 9/4', '1 1/2 = 3/2', '9/4 ÷ 3/2 = 9/4 × 2/3']],
        ["Nine times two is eighteen. Four times three is twelve. Eighteen twelfths simplifies to three halves, which is one and a half.", ['= 18/12 = 3/2', 'g|= 1 1/2']]]]],
    mist: [
      ['Flipping the wrong fraction', "Mistake one: flipping the first fraction, or both. Two thirds divided by four fifths. Wrong: three halves times four fifths. We only flip the second fraction. The first stays the same.", ['r|2/3 ÷ 4/5 = 3/2 × 4/5 ✗', 'g|2/3 ÷ 4/5 = 2/3 × 5/4 ✓']],
      ['Multiplying mixed numbers part by part', "Mistake two: multiplying the whole numbers and fractions separately. One and a half times two and two thirds is not one times two plus a half times two thirds. Change to improper fractions first.", ['r|1 1/2 × 2 2/3 = (1 × 2) + (1/2 × 2/3) ✗', 'g|3/2 × 8/3 = 4 ✓']]],
    real: ['In real life', "You have three and a half litres of juice. Each glass holds a quarter of a litre. How many glasses? Three and a half is seven halves. Seven halves divided by a quarter is seven halves times four. That is twenty-eight halves, which is fourteen glasses.", ['3 1/2 ÷ 1/4 = 7/2 × 4/1', '= 28/2 = 14 glasses']],
    turns: [
      { q: 'Work out three quarters times two fifths.', task: '3/4 × 2/5', say: "Multiply the numerators: three times two is six. Multiply the denominators: four times five is twenty. Six twentieths. Divide the top and the bottom by two to get three tenths.", work: ['3 × 2 = 6', '4 × 5 = 20', '6/20 = 3/10'], ans: ['g|3/10'] },
      { q: 'Work out five sixths divided by two thirds.', task: '5/6 ÷ 2/3', say: "Flip the second fraction and multiply. Five sixths times three halves. Five times three is fifteen. Six times two is twelve. Fifteen twelfths simplifies to five quarters, which is one and a quarter.", work: ['5/6 ÷ 2/3 = 5/6 × 3/2', '5 × 3 = 15 and 6 × 2 = 12', '15/12 = 5/4 = 1 1/4'], ans: ['g|1 1/4'] },
      { q: 'A batch of biscuits needs two thirds of a cup of sugar. You have four and a half cups. How many batches can you make?', say: "We divide four and a half by two thirds. Four and a half is nine halves. Nine halves divided by two thirds is nine halves times three halves. Nine times three is twenty-seven. Two times two is four. Twenty-seven quarters is six and three quarters. So six full batches, and three quarters of another.", work: ['4 1/2 = 9/2', '9/2 ÷ 2/3 = 9/2 × 3/2', '= 27/4', '= 6 3/4'], ans: ['g|6 full batches (6 3/4)'] }],
    rec: ["Multiply across. To divide, flip the second fraction and multiply.", ['Multiply the tops and the bottoms', 'Cancel before multiplying if you can', 'Divide: flip the second fraction, then multiply', 'Mixed numbers: change to improper fractions first', 'Simplify the answer']]
  });

  fx('Fraction problems with what is left', 'how to solve fraction problems where each fraction is taken from what is left.', {
    head: 'What is left',
    basics: [['Take it from what is left', [
      ["Some problems take a fraction of an amount, and then take another fraction of what is left. The key is that the second fraction is of the remainder, not of the original amount.", ['n|Second fraction: of what is LEFT']],
      ["Work in steps. Find the first part. Take it away to find what is left. Then find the second fraction of that. Write down the amount at each step.", ['1. First part', '2. What is left', '3. Fraction of what is left', '4. What remains']]]]],
    ex: [
      ['Spending money', [
        ["Aisha has sixty pounds. She spends one third on a coat. Then she spends one quarter of what is left on lunch. One third of sixty is twenty. So she has forty pounds left.", ['1/3 of 60 = 20', '60 − 20 = 40 left']],
        ["Now one quarter of the forty pounds left. Forty divided by four is ten. She spends ten pounds on lunch, and has thirty pounds left.", ['1/4 of 40 = 10', '40 − 10 = 30', 'g|£30 left']]]],
      ['Reading a book', [
        ["Tom reads two fifths of a book on Monday. What fraction is left? One whole is five fifths. Five fifths minus two fifths is three fifths left.", ['1 − 2/5 = 3/5 left']],
        ["On Tuesday he reads one third of what is left. One third of three fifths is three fifteenths, which is one fifth. So altogether he has read two fifths plus one fifth, which is three fifths. Two fifths of the book is still left.", ['1/3 × 3/5 = 1/5', '2/5 + 1/5 = 3/5 read', 'g|2/5 left']]]],
      ['Getting to school', [
        ["In a class, three eighths walk to school. One quarter of the rest cycle. The rest take the bus. What fraction take the bus? The rest after the walkers is one minus three eighths, which is five eighths.", ['1 − 3/8 = 5/8 are not walking']],
        ["The cyclists are one quarter of five eighths. That is five thirty-seconds. Bus riders are five eighths minus five thirty-seconds: twenty thirty-seconds minus five thirty-seconds, which is fifteen thirty-seconds.", ['1/4 × 5/8 = 5/32', '5/8 − 5/32 = 20/32 − 5/32', 'g|15/32 take the bus']]]]],
    mist: [
      ['Taking the second fraction of the original', "Mistake one: taking the second fraction of the whole amount. Aisha had sixty pounds and spent a third. She then spends a quarter of what is left. Wrong: a quarter of sixty is fifteen. A quarter of the forty pounds left is ten.", ['r|1/4 of 60 = 15 ✗', 'g|1/4 of 40 = 10 ✓']],
      ['Adding the fractions to find what is left', "Mistake two: adding one third and one quarter and saying the rest is five twelfths. The second fraction is a fraction of a smaller amount, so you cannot add the fractions directly.", ['r|1/3 + 1/4 = 7/12 spent ✗', 'n|1/4 is of what is left, not of the whole']]],
    real: ['In real life', "Budgeting uses this idea. You spend a third of your wages on rent. Then you save a quarter of what is left. The savings are one quarter of two thirds of your wages, which is one sixth of your wages.", ['2/3 × 1/4 = 2/12 = 1/6']],
    turns: [
      { q: 'Sam has forty-eight pounds. He spends one quarter on lunch, then one third of what is left on a book. How much does he have left?', say: "One quarter of forty-eight is twelve. So thirty-six pounds are left. One third of thirty-six is twelve for the book. Thirty-six minus twelve leaves twenty-four pounds.", work: ['1/4 of 48 = 12', '48 − 12 = 36 left', '1/3 of 36 = 12', '36 − 12 = 24'], ans: ['g|£24'] },
      { q: 'A tank is two fifths used in the morning. In the afternoon one quarter of what is left is used. What fraction of the tank is left?', say: "After the morning, three fifths are left. One quarter of three fifths is three twentieths used in the afternoon. Three fifths is twelve twentieths. Twelve twentieths minus three twentieths is nine twentieths.", work: ['1 − 2/5 = 3/5 left', '1/4 × 3/5 = 3/20 used', '3/5 = 12/20', '12/20 − 3/20 = 9/20'], ans: ['g|9/20 left'] },
      { q: 'A bag has seventy-two sweets. One third are red. Three eighths of the rest are green. How many are green?', say: "One third of seventy-two is twenty-four red sweets. That leaves forty-eight. Three eighths of forty-eight: forty-eight divided by eight is six, and six times three is eighteen. So eighteen sweets are green.", work: ['1/3 of 72 = 24 red', '72 − 24 = 48 left', '48 ÷ 8 = 6', '6 × 3 = 18'], ans: ['g|18 green'] }],
    rec: ["Each new fraction is taken from what is left.", ['Find the first part', 'Subtract to find what is left', 'Take the next fraction of what is left', 'Do not add fractions of different wholes']]
  });

  fx('Standard form', 'how to write very large and very small numbers in standard form and change them back.', {
    head: 'Standard form',
    basics: [['What is standard form?', [
      ["Standard form is a way to write very big or very small numbers neatly. It is a number between one and ten, times a power of ten. We write a times ten to the power n, where a is at least one and less than ten.", ['a × 10ⁿ', 'n|1 ≤ a < 10, n is a whole number']],
      ["Big numbers have a positive power. Small numbers, less than one, have a negative power. The power tells us how many places the decimal point has moved.", ['Big: positive power', 'Small: negative power']]]]],
    ex: [
      ['A large number', [
        ["Write four million five hundred thousand in standard form. Put the point to make a number between one and ten: four point five. The point has moved six places to the left. So the power is positive six.", ['4,500,000', '4.5 | 000000: moved 6 places']],
        ["Four point five times ten to the six.", ['g|4,500,000 = 4.5 × 10⁶']]]],
      ['A small number', [
        ["Write zero point zero zero zero seven two in standard form. The first number must be between one and ten, so we want seven point two. The point moves four places to the right. Moving right for a small number gives a negative power.", ['0.00072', 'Point moves 4 places right']],
        ["Seven point two times ten to the minus four.", ['g|0.00072 = 7.2 × 10⁻⁴']]]],
      ['Back to an ordinary number', [
        ["Write three point zero eight times ten to the five as an ordinary number. The power is five, so move the point five places to the right. Add zeros to fill the places.", ['3.08 × 10⁵', '3.08 → 308000.']],
        ["The answer is three hundred and eight thousand.", ['g|308,000']]]],
      ['Which is bigger?', [
        ["Compare three times ten to the five and eight times ten to the four. Look at the powers first. Five is bigger than four, so the first number is bigger. Check: three hundred thousand against eighty thousand.", ['3 × 10⁵ = 300,000', '8 × 10⁴ = 80,000', 'g|3 × 10⁵ is bigger']]]]],
    mist: [
      ['The first number is not between one and ten', "Mistake one: a number like forty-five times ten to the five. The first number must be between one and ten. Four point five times ten to the six is correct.", ['r|45 × 10⁵ ✗', 'g|4.5 × 10⁶ ✓']],
      ['Wrong sign on the power', "Mistake two: using a positive power for a small number. Zero point zero zero four is four times ten to the minus three, not ten to the three.", ['r|0.004 = 4 × 10³ ✗', 'g|0.004 = 4 × 10⁻³ ✓']]],
    real: ['In real life', "Scientists use standard form all the time. The Sun is about one hundred and fifty million kilometres from the Earth: one point five times ten to the eight. A red blood cell is about seven times ten to the minus six metres across.", ['1.5 × 10⁸ km', '7 × 10⁻⁶ m']],
    turns: [
      { q: 'Write sixty-two thousand in standard form.', task: '62,000', say: "Put the point to make a number between one and ten: six point two. The point moves four places to the left. So the power is four. The answer is six point two times ten to the four.", work: ['62,000 → 6.2', 'The point moved 4 places left', 'Power = 4'], ans: ['g|6.2 × 10⁴'] },
      { q: 'Write zero point zero zero three five in standard form.', task: '0.0035', say: "We want a number between one and ten: three point five. The point moves three places to the right. For a small number, that is a negative power. Three point five times ten to the minus three.", work: ['0.0035 → 3.5', 'The point moved 3 places right', 'Power = −3'], ans: ['g|3.5 × 10⁻³'] },
      { q: 'Write two point nine times ten to the minus two as an ordinary number.', task: '2.9 × 10⁻²', say: "A negative power means a small number. Move the point two places to the left. Two point nine becomes zero point zero two nine.", work: ['Power −2: move the point 2 places left', '2.9 → 0.029'], ans: ['g|0.029'] }],
    rec: ["Standard form: a number from one up to ten, times a power of ten.", ['a × 10ⁿ with 1 ≤ a < 10', 'Big numbers: positive power', 'Small numbers: negative power', 'The power counts the places the point moves']]
  });

  fx('Calculating in standard form', 'how to multiply and divide numbers in standard form.', {
    head: 'Calculating in standard form',
    basics: [['The two rules', [
      ["To multiply numbers in standard form, multiply the front numbers, and add the powers of ten. To divide, divide the front numbers, and subtract the powers.", ['× : multiply fronts, ADD powers', '÷ : divide fronts, SUBTRACT powers']],
      ["Check the answer. If the front number is not between one and ten, change it to standard form and adjust the power.", ['n|Front number must be from 1 up to 10']]]]],
    ex: [
      ['Multiplying', [
        ["Two times ten to the three, multiplied by four times ten to the five. Multiply the front numbers: two times four is eight. Add the powers: three plus five is eight.", ['(2 × 10³) × (4 × 10⁵)', '2 × 4 = 8', '3 + 5 = 8']],
        ["The answer is eight times ten to the eight.", ['g|8 × 10⁸']]]],
      ['Multiplying with a tidy-up', [
        ["Three times ten to the four, times five times ten to the three. Three times five is fifteen. Four plus three is seven. That gives fifteen times ten to the seven.", ['3 × 5 = 15', '4 + 3 = 7', '15 × 10⁷']],
        ["Fifteen is not between one and ten. Fifteen is one point five times ten. So the power goes up by one. The answer is one point five times ten to the eight.", ['15 = 1.5 × 10', '1.5 × 10 × 10⁷', 'g|1.5 × 10⁸']]]],
      ['Dividing', [
        ["Eight times ten to the six, divided by two times ten to the two. Eight divided by two is four. Six minus two is four.", ['(8 × 10⁶) ÷ (2 × 10²)', '8 ÷ 2 = 4', '6 − 2 = 4']],
        ["The answer is four times ten to the four.", ['g|4 × 10⁴']]]],
      ['Adding', [
        ["Add three times ten to the four and five times ten to the three. We cannot just add the front numbers when the powers are different. Write them as ordinary numbers. Thirty thousand and five thousand.", ['3 × 10⁴ = 30,000', '5 × 10³ = 5,000']],
        ["Thirty-five thousand. In standard form, that is three point five times ten to the four.", ['30,000 + 5,000 = 35,000', 'g|3.5 × 10⁴']]]]],
    mist: [
      ['Multiplying the powers', "Mistake one: multiplying the powers. Ten to the three times ten to the five is ten to the eight. Add the powers, do not multiply them.", ['r|10³ × 10⁵ = 10¹⁵ ✗', 'g|10³ × 10⁵ = 10⁸ ✓']],
      ['Leaving the answer untidy', "Mistake two: leaving fifteen times ten to the seven. It looks right, but the front number is bigger than ten. Change it to one point five times ten to the eight.", ['r|15 × 10⁷ (not standard form) ✗', 'g|1.5 × 10⁸ ✓']]],
    real: ['In real life', "Light travels at three times ten to the five kilometres each second. In five hundred seconds, which is five times ten to the two, it travels three times five, which is fifteen, times ten to the seven kilometres. That is one point five times ten to the eight kilometres, the distance to the Sun.", ['(3 × 10⁵) × (5 × 10²) = 15 × 10⁷', 'g|= 1.5 × 10⁸ km']],
    turns: [
      { q: 'Work out four times ten to the three, multiplied by two times ten to the four.', task: '(4 × 10³) × (2 × 10⁴)', say: "Multiply the front numbers: four times two is eight. Add the powers: three plus four is seven. The answer is eight times ten to the seven.", work: ['4 × 2 = 8', '3 + 4 = 7'], ans: ['g|8 × 10⁷'] },
      { q: 'Work out five times ten to the six, multiplied by four times ten to the two. Give the answer in standard form.', task: '(5 × 10⁶) × (4 × 10²)', say: "Multiply the front numbers: five times four is twenty. Add the powers: six plus two is eight. That gives twenty times ten to the eight. Twenty is two times ten, so the power goes up by one. Two times ten to the nine.", work: ['5 × 4 = 20', '6 + 2 = 8', '20 × 10⁸', '20 = 2 × 10, so 2 × 10⁹'], ans: ['g|2 × 10⁹'] },
      { q: 'Work out nine times ten to the eight, divided by three times ten to the three.', task: '(9 × 10⁸) ÷ (3 × 10³)', say: "Divide the front numbers: nine divided by three is three. Subtract the powers: eight minus three is five. The answer is three times ten to the five.", work: ['9 ÷ 3 = 3', '8 − 3 = 5'], ans: ['g|3 × 10⁵'] }],
    rec: ["Multiply: multiply the fronts and add the powers. Divide: divide the fronts and subtract the powers.", ['× : fronts multiply, powers add', '÷ : fronts divide, powers subtract', 'Tidy so the front is from 1 up to 10', 'Adding: write as ordinary numbers first']]
  });

  fx('Index laws and negative indices', 'the laws for multiplying and dividing powers, and what zero and negative powers mean.', {
    head: 'Index laws',
    basics: [['The laws', [
      ["The index, or power, tells us how many times to multiply. When we multiply powers with the same base, we add the indices. When we divide powers with the same base, we subtract the indices. When we raise a power to a power, we multiply the indices.", ['aᵐ × aⁿ = aᵐ⁺ⁿ', 'aᵐ ÷ aⁿ = aᵐ⁻ⁿ', '(aᵐ)ⁿ = aᵐⁿ']],
      ["Two special cases. Any number to the power zero is one. A negative power means one over the positive power.", ['a⁰ = 1', 'a⁻ⁿ = 1/aⁿ']]]]],
    ex: [
      ['Multiplying and dividing', [
        ["Two to the five times two to the three. The bases are the same, so add the indices: five plus three is eight. Two to the eight is two hundred and fifty-six.", ['2⁵ × 2³ = 2⁵⁺³', '= 2⁸', 'g|= 256']],
        ["Five to the seven divided by five to the four. Subtract the indices: seven minus four is three. Five cubed is one hundred and twenty-five.", ['5⁷ ÷ 5⁴ = 5⁷⁻⁴', '= 5³', 'g|= 125']]]],
      ['A power of a power', [
        ["Three squared, all cubed. That means three squared times three squared times three squared. Multiply the indices: two times three is six.", ['(3²)³ = 3²ˣ³', '= 3⁶', 'g|= 729']]]],
      ['Zero and negative indices', [
        ["Seven to the zero is one. Any number to the power zero is one. Two to the minus three is one over two cubed. Two cubed is eight, so it is one eighth.", ['7⁰ = 1', '2⁻³ = 1/2³ = 1/8']],
        ["Ten to the minus two is one over ten squared, which is one over one hundred. That is zero point zero one. Negative powers give small numbers, not negative numbers.", ['10⁻² = 1/10² = 1/100', 'g|= 0.01']]]],
      ['With letters', [
        ["Simplify three x squared times four x cubed. Multiply the numbers: three times four is twelve. Add the powers of x: two plus three is five.", ['3x² × 4x³', '3 × 4 = 12', 'x² × x³ = x⁵', 'g|12x⁵']]]]],
    mist: [
      ['Multiplying the bases', "Mistake one: multiplying the bases. Two cubed times two to the four is not four to the seven. The base stays two. The answer is two to the seven.", ['r|2³ × 2⁴ = 4⁷ ✗', 'g|2³ × 2⁴ = 2⁷ ✓']],
      ['Negative index means negative number', "Mistake two: thinking a negative index gives a negative answer. Two to the minus three is one eighth. It is a small positive number.", ['r|2⁻³ = −8 ✗', 'g|2⁻³ = 1/8 ✓']]],
    real: ['In real life', "Computers store data in powers of two. One kilobyte is two to the ten bytes, which is one thousand and twenty-four. Two to the ten times two to the ten is two to the twenty, which is about one million bytes, or one megabyte.", ['2¹⁰ = 1024', '2¹⁰ × 2¹⁰ = 2²⁰ ≈ 1,000,000']],
    turns: [
      { q: 'Work out three to the four times three squared.', task: '3⁴ × 3²', say: "The bases are the same, so add the indices. Four plus two is six. Three to the six is seven hundred and twenty-nine.", work: ['3⁴ × 3² = 3⁴⁺²', '= 3⁶', '3⁶ = 729'], ans: ['g|729'] },
      { q: 'Work out six to the nine divided by six to the seven.', task: '6⁹ ÷ 6⁷', say: "The bases are the same, so subtract the indices. Nine minus seven is two. Six squared is thirty-six.", work: ['6⁹ ÷ 6⁷ = 6⁹⁻⁷', '= 6²', '6² = 36'], ans: ['g|36'] },
      { q: 'Work out four to the minus two, as a fraction.', task: '4⁻²', say: "A negative index means one over the positive power. So it is one over four squared. Four squared is sixteen. The answer is one sixteenth.", work: ['4⁻² = 1/4²', '4² = 16', '= 1/16'], ans: ['g|1/16'] }],
    rec: ["Same base: add when multiplying, subtract when dividing.", ['aᵐ × aⁿ = aᵐ⁺ⁿ', 'aᵐ ÷ aⁿ = aᵐ⁻ⁿ', '(aᵐ)ⁿ = aᵐⁿ', 'a⁰ = 1', 'a⁻ⁿ = 1/aⁿ']]
  });

  fx('Tolerance', 'what tolerance means and how to find the smallest and largest acceptable values.', {
    head: 'Tolerance',
    basics: [['What is tolerance?', [
      ["Nothing can be made or measured perfectly. Tolerance tells us how far a size is allowed to be above or below the target. We write it with a plus or minus sign. A rod of fifty centimetres, plus or minus two, can be between forty-eight and fifty-two centimetres.", ['50 ± 2 cm', 'Smallest: 50 − 2 = 48', 'Largest: 50 + 2 = 52']],
      ["The smallest allowed value is the target minus the tolerance. The largest allowed value is the target plus the tolerance. Anything outside that range is rejected.", ['Smallest = target − tolerance', 'Largest = target + tolerance']]]]],
    ex: [
      ['A pipe', [
        ["A pipe is two hundred and fifty millimetres, plus or minus five. The smallest allowed length is two hundred and fifty minus five, which is two hundred and forty-five.", ['250 ± 5 mm', '250 − 5 = 245']],
        ["The largest is two hundred and fifty plus five, which is two hundred and fifty-five. Any pipe from two hundred and forty-five to two hundred and fifty-five millimetres is accepted.", ['250 + 5 = 255', 'g|245 mm to 255 mm']]]],
      ['Is it acceptable?', [
        ["A bolt should be twenty-five millimetres, plus or minus zero point two. The range is from twenty-four point eight to twenty-five point two. Is a bolt of twenty-four point seven acceptable?", ['25 − 0.2 = 24.8', '25 + 0.2 = 25.2']],
        ["Twenty-four point seven is less than twenty-four point eight, so it is outside the range. The bolt is rejected.", ['24.7 < 24.8', 'g|Rejected']]]],
      ['How big is the range?', [
        ["The total range is the largest minus the smallest. For fifty plus or minus two, that is fifty-two minus forty-eight, which is four. It is twice the tolerance.", ['52 − 48 = 4', 'Range = 2 × tolerance', 'g|Range = 4']]]]],
    mist: [
      ['Using the tolerance one way only', "Mistake one: adding the tolerance but forgetting to subtract it. Fifty plus or minus two goes both ways. The range is forty-eight to fifty-two, not fifty to fifty-two.", ['r|50 to 52 ✗', 'g|48 to 52 ✓']],
      ['Mixing up the target and the range', "Mistake two: reading the range as the tolerance. The tolerance is how far from the target. The whole range is twice that.", ['Tolerance = 2', 'Range = 48 to 52 = 4 wide']]],
    real: ['In real life', "Factories use tolerance for every part. A phone case that is slightly too big will not fit. In medicine, a tablet must contain the right dose, plus or minus a very small tolerance.", ['Part length 80 ± 0.1 mm', '79.9 mm to 80.1 mm']],
    turns: [
      { q: 'A plank is forty centimetres, plus or minus zero point three. Find the smallest and largest acceptable lengths.', say: "The smallest length is forty minus zero point three, which is thirty-nine point seven. The largest length is forty plus zero point three, which is forty point three.", work: ['40 − 0.3 = 39.7', '40 + 0.3 = 40.3'], ans: ['g|39.7 cm to 40.3 cm'] },
      { q: 'A shaft should be twelve millimetres, plus or minus zero point one five. Is a shaft of twelve point one eight acceptable?', say: "The smallest allowed is twelve minus zero point one five, which is eleven point eight five. The largest allowed is twelve plus zero point one five, which is twelve point one five. Twelve point one eight is bigger than twelve point one five, so it is outside the range.", work: ['12 − 0.15 = 11.85', '12 + 0.15 = 12.15', '12.18 > 12.15: outside the range'], ans: ['g|No, it is rejected'] },
      { q: 'A rod is one hundred and fifty millimetres with a tolerance of two millimetres. How wide is the range of acceptable lengths?', say: "The smallest is one hundred and fifty minus two, which is one hundred and forty-eight. The largest is one hundred and fifty plus two, which is one hundred and fifty-two. The range is the difference: four millimetres.", work: ['150 − 2 = 148', '150 + 2 = 152', '152 − 148 = 4'], ans: ['g|4 mm'] }],
    rec: ["Tolerance is how far a value can be above or below the target.", ['Smallest = target − tolerance', 'Largest = target + tolerance', 'Outside the range: rejected', 'Range = 2 × tolerance']]
  });

  L.use(821, ['How do you round to three decimal places?', 'Significant figures', 'Estimating by rounding to 1 significant figure', 'How do you add and subtract positive and negative numbers?', 'How do you multiply and divide positive and negative numbers?', 'How do you multiply to three decimal places?', 'How do you divide to three decimal places?', 'Tolerance', 'What are prime numbers?', 'How do you solve problems using multiples and factors?', 'Sets of numbers', 'What are powers and roots?', 'Standard form', 'Calculating in standard form', 'Index laws and negative indices', 'How do you add and subtract fractions?', 'How do you multiply and divide fractions?', 'Fraction problems with what is left']);
})();
