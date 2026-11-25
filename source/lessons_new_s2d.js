/* lessons_new_s2d.js: S2 topic 821, fractions, standard form, indices, tolerance */
(function () {
  'use strict';
  var BT = window.BT; if (!BT || !BT.L || !BT.L.fx) return;
  var L = BT.L, F = BT.F, fx = L.fx;

  fx('How do you add and subtract fractions?', 'how to add and subtract fractions and mixed numbers with different denominators.', {
    head: 'Adding and subtracting fractions',
    basics: [['Same denominator first', [
      ["The denominator tells us the size of the pieces. We can only add or subtract pieces that are the same size. So first we change the fractions so they have the same denominator. This is called a common denominator.", ['n|Same size pieces first', '1/2 + 1/3: halves and thirds are different sizes']],
      ["Find the lowest common multiple of the denominators. Change each fraction to an equivalent 1 with that denominator. Then add or subtract the numerators only, and keep the denominator the same.", ['1. Common denominator (LCM)', '2. Make equivalent fractions', '3. Add or subtract the tops', '4. Simplify']]]]],
    ex: [
      ['1 half add 1 third', [
        ["The denominators are 2 and 3. The lowest common multiple is 6. 1/2 is 3/6, because we multiply the top and the bottom by 3. 1/3 is 2/6, because we multiply top and bottom by 2.", ['LCM of 2 and 3 = 6', '1/2 = 3/6', '1/3 = 2/6']],
        ["Now the pieces are the same size, so add the tops. 3 plus 2 is 5. The answer is 5/6.", ['3/6 + 2/6 = 5/6', 'g|1/2 + 1/3 = 5/6']]]],
      ['3/4 take away 1/6', [
        ["The lowest common multiple of 4 and 6 is 12. 3/4 is 9/12. 1/6 is 2/12.", ['LCM of 4 and 6 = 12', '3/4 = 9/12', '1/6 = 2/12']],
        ["Subtract the tops. 9 minus 2 is 7. The answer is 7/12. It cannot be simplified.", ['9/12 − 2/12 = 7/12', 'g|3/4 − 1/6 = 7/12']]]],
      ['Mixed numbers', [
        ["2 and 1/2 plus 1 and 3/4. Add the whole numbers first: 2 plus 1 is 3. Then add the fractions. 1/2 is 2/4. 2/4 plus 3/4 is 5/4, which is 1 and 1/4.", ['2 + 1 = 3', '1/2 + 3/4 = 2/4 + 3/4 = 5/4 = 1 1/4']],
        ["Put them together. 3 plus 1 and 1/4 is 4 and 1/4.", ['3 + 1 1/4', 'g|= 4 1/4']]]],
      ['Subtracting mixed numbers', [
        ["3 and 1/5 take away 1 and 3/5. The fraction part of the first number is smaller, so change both to improper fractions. 3 and 1/5 is 16/5. 1 and 3/5 is 8/5.", ['3 1/5 = 16/5', '1 3/5 = 8/5']],
        ["16/5 take away 8/5 is 8/5. As a mixed number, that is 1 and 3/5.", ['16/5 − 8/5 = 8/5', 'g|= 1 3/5']]]]],
    mist: [
      ['Adding the tops and the bottoms', "Mistake one: adding the numerators and the denominators. 1/2 plus 1/3 is not 2/5. 2/5 is smaller than 1/2, which cannot be right. Find a common denominator first. The answer is 5/6.", ['r|1/2 + 1/3 = 2/5 ✗', 'g|1/2 + 1/3 = 3/6 + 2/6 = 5/6 ✓']],
      ['Forgetting to simplify', "Mistake two: leaving the answer unsimplified. 1/6 plus 1/3 is 1/6 plus 2/6, which is 3/6. That simplifies to 1/2.", ['1/6 + 2/6 = 3/6', 'g|3/6 = 1/2 ✓']]],
    real: ['In real life', "A recipe needs 3/4 of a cup of flour for the cake and 2/3 of a cup for the topping. 3/4 is 9/12 and 2/3 is 8/12. Together that is 17/12, which is 1 and 5/12 cups.", ['3/4 + 2/3 = 9/12 + 8/12', '= 17/12 = 1 5/12 cups']],
    turns: [
      { q: 'Work out 2/3 plus 1/4.', task: '2/3 + 1/4', say: "The lowest common multiple of 3 and 4 is 12. 2/3 is 8/12. 1/4 is 3/12. 8 plus 3 is 11. The answer is 11/12.", work: ['LCM of 3 and 4 = 12', '2/3 = 8/12 and 1/4 = 3/12', '8/12 + 3/12 = 11/12'], ans: ['g|11/12'] },
      { q: 'Work out 5/6 minus 3/8.', task: '5/6 − 3/8', say: "The lowest common multiple of 6 and 8 is 24. 5/6 is 20 twenty-fourths. 3/8 is 9 twenty-fourths. 20 minus 9 is 11. The answer is 11 twenty-fourths.", work: ['LCM of 6 and 8 = 24', '5/6 = 20/24 and 3/8 = 9/24', '20/24 − 9/24 = 11/24'], ans: ['g|11/24'] },
      { q: 'Work out 1 and 2/3 plus 2 and 3/4.', task: '1 2/3 + 2 3/4', say: "Add the whole numbers first. 1 plus 2 is 3. Then the fractions. The common denominator is 12. 2/3 is 8/12, and 3/4 is 9/12. 8 plus 9 is 17/12, which is 1 and 5/12. 3 plus 1 and 5/12 is 4 and 5/12.", work: ['1 + 2 = 3', '2/3 + 3/4 = 8/12 + 9/12', '= 17/12 = 1 5/12', '3 + 1 5/12 = 4 5/12'], ans: ['g|4 5/12'] }],
    rec: ["Same denominator first, then add or subtract the tops.", ['Find the LCM of the denominators', 'Make equivalent fractions', 'Add or subtract the numerators only', 'Simplify the answer', 'Mixed numbers: whole numbers and fractions, or improper fractions']]
  });

  fx('How do you multiply and divide fractions?', 'how to multiply and divide fractions and mixed numbers.', {
    head: 'Multiplying and dividing fractions',
    basics: [['Multiplying', [
      ["To multiply fractions, multiply the numerators together and multiply the denominators together. 2/3 times 3/4 is 2 times 3 over 3 times 4. That is 6/12, which simplifies to 1/2.", ['2/3 × 3/4 = (2 × 3)/(3 × 4)', '= 6/12 = 1/2']],
      ["We can often make it easier by cancelling first. The 3 on the top and the 3 on the bottom cancel. That leaves 2 over 4, which is 1/2.", ['2/3 × 3/4 → cancel the 3s', '= 2/4 = 1/2']]]],
      ['Dividing', [
      ["To divide by a fraction, we flip the second fraction upside down and multiply. This is the reciprocal. 2/3 divided by 4/5 becomes 2/3 times 5/4.", ['2/3 ÷ 4/5', '= 2/3 × 5/4']],
      ["Multiply across: 2 times 5 is 10, and 3 times 4 is 12. 10/12 simplifies to 5/6. We flip only the second fraction, the one we divide by.", ['= 10/12', 'g|= 5/6']]]]],
    ex: [
      ['A fraction of an amount', [
        ["3/5 of 40. The word of means multiply. 40 is 40 over 1. 3/5 times 40 over 1 is 120 over 5.", ['3/5 × 40 = 3/5 × 40/1', '= 120/5']],
        ["120 divided by 5 is 24.", ['120 ÷ 5 = 24', 'g|3/5 of 40 = 24']]]],
      ['Mixed numbers', [
        ["1 and 1/2 times 2 and 2/3. First change both to improper fractions. 1 and 1/2 is 3/2. 2 and 2/3 is 8/3.", ['1 1/2 = 3/2', '2 2/3 = 8/3']],
        ["Multiply: 3/2 times 8/3 is 24/6. The threes cancel, and 8/2 is 4. 24 divided by 6 is 4.", ['3/2 × 8/3 = 24/6', 'g|= 4']]]],
      ['Dividing mixed numbers', [
        ["2 and 1/4 divided by 1 and 1/2. Change to improper fractions: 9/4 divided by 3/2. Flip the second fraction and multiply.", ['2 1/4 = 9/4', '1 1/2 = 3/2', '9/4 ÷ 3/2 = 9/4 × 2/3']],
        ["9 times 2 is 18. 4 times 3 is 12. 18/12 simplifies to 3/2, which is 1 and 1/2.", ['= 18/12 = 3/2', 'g|= 1 1/2']]]]],
    mist: [
      ['Flipping the wrong fraction', "Mistake one: flipping the first fraction, or both. 2/3 divided by 4/5. Wrong: 3/2 times 4/5. We only flip the second fraction. The first stays the same.", ['r|2/3 ÷ 4/5 = 3/2 × 4/5 ✗', 'g|2/3 ÷ 4/5 = 2/3 × 5/4 ✓']],
      ['Multiplying mixed numbers part by part', "Mistake two: multiplying the whole numbers and fractions separately. 1 and 1/2 times 2 and 2/3 is not 1 times 2 plus 1/2 times 2/3. Change to improper fractions first.", ['r|1 1/2 × 2 2/3 = (1 × 2) + (1/2 × 2/3) ✗', 'g|3/2 × 8/3 = 4 ✓']]],
    real: ['In real life', "You have 3 and 1/2 litres of juice. Each glass holds 1/4 of a litre. How many glasses? 3 and 1/2 is 7/2. 7/2 divided by 1/4 is 7/2 times 4. That is 28/2, which is 14 glasses.", ['3 1/2 ÷ 1/4 = 7/2 × 4/1', '= 28/2 = 14 glasses']],
    turns: [
      { q: 'Work out 3/4 times 2/5.', task: '3/4 × 2/5', say: "Multiply the numerators: 3 times 2 is 6. Multiply the denominators: 4 times 5 is 20. 6/20. Divide the top and the bottom by 2 to get 3/10.", work: ['3 × 2 = 6', '4 × 5 = 20', '6/20 = 3/10'], ans: ['g|3/10'] },
      { q: 'Work out 5/6 divided by 2/3.', task: '5/6 ÷ 2/3', say: "Flip the second fraction and multiply. 5/6 times 3/2. 5 times 3 is 15. 6 times 2 is 12. 15/12 simplifies to 5/4, which is 1 and 1/4.", work: ['5/6 ÷ 2/3 = 5/6 × 3/2', '5 × 3 = 15 and 6 × 2 = 12', '15/12 = 5/4 = 1 1/4'], ans: ['g|1 1/4'] },
      { q: 'A batch of biscuits needs 2/3 of a cup of sugar. You have 4 and 1/2 cups. How many batches can you make?', say: "We divide 4 and 1/2 by 2/3. 4 and 1/2 is 9/2. 9/2 divided by 2/3 is 9/2 times 3/2. 9 times 3 is 27. 2 times 2 is 4. 27/4 is 6 and 3/4. So 6 full batches, and 3/4 of another.", work: ['4 1/2 = 9/2', '9/2 ÷ 2/3 = 9/2 × 3/2', '= 27/4', '= 6 3/4'], ans: ['g|6 full batches (6 3/4)'] }],
    rec: ["Multiply across. To divide, flip the second fraction and multiply.", ['Multiply the tops and the bottoms', 'Cancel before multiplying if you can', 'Divide: flip the second fraction, then multiply', 'Mixed numbers: change to improper fractions first', 'Simplify the answer']]
  });

  fx('Fraction problems with what is left', 'how to solve fraction problems where each fraction is taken from what is left.', {
    head: 'What is left',
    basics: [['Take it from what is left', [
      ["Some problems take a fraction of an amount, and then take another fraction of what is left. The key is that the second fraction is of the remainder, not of the original amount.", ['n|Second fraction: of what is LEFT']],
      ["Work in steps. Find the first part. Take it away to find what is left. Then find the second fraction of that. Write down the amount at each step.", ['1. First part', '2. What is left', '3. Fraction of what is left', '4. What remains']]]]],
    ex: [
      ['Spending money', [
        ["Aisha has £60. She spends 1/3 on a coat. Then she spends 1/4 of what is left on lunch. 1/3 of 60 is 20. So she has £40 left.", ['1/3 of 60 = 20', '60 − 20 = 40 left']],
        ["Now 1/4 of the £40 left. 40 divided by 4 is 10. She spends £10 on lunch, and has £30 left.", ['1/4 of 40 = 10', '40 − 10 = 30', 'g|£30 left']]]],
      ['Reading a book', [
        ["Tom reads 2/5 of a book on Monday. What fraction is left? 1 whole is 5/5. 5/5 minus 2/5 is 3/5 left.", ['1 − 2/5 = 3/5 left']],
        ["On Tuesday he reads 1/3 of what is left. 1/3 of 3/5 is 3/15, which is 1/5. So altogether he has read 2/5 plus 1/5, which is 3/5. 2/5 of the book is still left.", ['1/3 × 3/5 = 1/5', '2/5 + 1/5 = 3/5 read', 'g|2/5 left']]]],
      ['Getting to school', [
        ["In a class, 3/8 walk to school. 1/4 of the rest cycle. The rest take the bus. What fraction take the bus? The rest after the walkers is 1 minus 3/8, which is 5/8.", ['1 − 3/8 = 5/8 are not walking']],
        ["The cyclists are 1/4 of 5/8. That is 5 thirty-seconds. Bus riders are 5/8 minus 5 thirty-seconds: 20 thirty-seconds minus 5 thirty-seconds, which is 15 thirty-seconds.", ['1/4 × 5/8 = 5/32', '5/8 − 5/32 = 20/32 − 5/32', 'g|15/32 take the bus']]]]],
    mist: [
      ['Taking the second fraction of the original', "Mistake one: taking the second fraction of the whole amount. Aisha had £60 and spent 1/3. She then spends 1/4 of what is left. Wrong: 1/4 of 60 is 15. 1/4 of the £40 left is 10.", ['r|1/4 of 60 = 15 ✗', 'g|1/4 of 40 = 10 ✓']],
      ['Adding the fractions to find what is left', "Mistake two: adding 1/3 and 1/4 and saying the rest is 5/12. The second fraction is a fraction of a smaller amount, so you cannot add the fractions directly.", ['r|1/3 + 1/4 = 7/12 spent ✗', 'n|1/4 is of what is left, not of the whole']]],
    real: ['In real life', "Budgeting uses this idea. You spend 1/3 of your wages on rent. Then you save 1/4 of what is left. The savings are 1/4 of 2/3 of your wages, which is 1/6 of your wages.", ['2/3 × 1/4 = 2/12 = 1/6']],
    turns: [
      { q: 'Sam has £48. He spends 1/4 on lunch, then 1/3 of what is left on a book. How much does he have left?', say: "1/4 of 48 is 12. So £36 are left. 1/3 of 36 is 12 for the book. 36 minus 12 leaves £24.", work: ['1/4 of 48 = 12', '48 − 12 = 36 left', '1/3 of 36 = 12', '36 − 12 = 24'], ans: ['g|£24'] },
      { q: 'A tank is 2/5 used in the morning. In the afternoon 1/4 of what is left is used. What fraction of the tank is left?', say: "After the morning, 3/5 are left. 1/4 of 3/5 is 3/20 used in the afternoon. 3/5 is 12/20. 12/20 minus 3/20 is 9/20.", work: ['1 − 2/5 = 3/5 left', '1/4 × 3/5 = 3/20 used', '3/5 = 12/20', '12/20 − 3/20 = 9/20'], ans: ['g|9/20 left'] },
      { q: 'A bag has 72 sweets. 1/3 are red. 3/8 of the rest are green. How many are green?', say: "1/3 of 72 is 24 red sweets. That leaves 48. 3/8 of 48: 48 divided by 8 is 6, and 6 times 3 is 18. So 18 sweets are green.", work: ['1/3 of 72 = 24 red', '72 − 24 = 48 left', '48 ÷ 8 = 6', '6 × 3 = 18'], ans: ['g|18 green'] }],
    rec: ["Each new fraction is taken from what is left.", ['Find the first part', 'Subtract to find what is left', 'Take the next fraction of what is left', 'Do not add fractions of different wholes']]
  });

  fx('Standard form', 'how to write very large and very small numbers in standard form and change them back.', {
    head: 'Standard form',
    basics: [['What is standard form?', [
      ["Standard form is a way to write very big or very small numbers neatly. It is a number between 1 and 10, times a power of 10. We write a times 10 to the power n, where a is at least 1 and less than 10.", ['a × 10ⁿ', 'n|1 ≤ a < 10, n is a whole number']],
      ["Big numbers have a positive power. Small numbers, less than 1, have a negative power. The power tells us how many places the decimal point has moved.", ['Big: positive power', 'Small: negative power']]]]],
    ex: [
      ['A large number', [
        ["Write 4 million 500,000 in standard form. Put the point to make a number between 1 and 10: 4.5. The point has moved 6 places to the left. So the power is positive 6.", ['4,500,000', '4.5 | 000000: moved 6 places']],
        ["4.5 times 10 to the 6.", ['g|4,500,000 = 4.5 × 10⁶']]]],
      ['A small number', [
        ["Write 0.00072 in standard form. The first number must be between 1 and 10, so we want 7.2. The point moves 4 places to the right. Moving right for a small number gives a negative power.", ['0.00072', 'Point moves 4 places right']],
        ["7.2 times 10 to the minus 4.", ['g|0.00072 = 7.2 × 10⁻⁴']]]],
      ['Back to an ordinary number', [
        ["Write 3.08 times 10 to the 5 as an ordinary number. The power is 5, so move the point 5 places to the right. Add zeros to fill the places.", ['3.08 × 10⁵', '3.08 → 308000.']],
        ["The answer is 308,000.", ['g|308,000']]]],
      ['Which is bigger?', [
        ["Compare 3 times 10 to the 5 and 8 times 10 to the 4. Look at the powers first. 5 is bigger than 4, so the first number is bigger. Check: 300,000 against 80,000.", ['3 × 10⁵ = 300,000', '8 × 10⁴ = 80,000', 'g|3 × 10⁵ is bigger']]]]],
    mist: [
      ['The first number is not between 1 and 10', "Mistake one: a number like 45 times 10 to the 5. The first number must be between 1 and 10. 4.5 times 10 to the 6 is correct.", ['r|45 × 10⁵ ✗', 'g|4.5 × 10⁶ ✓']],
      ['Wrong sign on the power', "Mistake two: using a positive power for a small number. 0.004 is 4 times 10 to the minus 3, not 10 to the 3.", ['r|0.004 = 4 × 10³ ✗', 'g|0.004 = 4 × 10⁻³ ✓']]],
    real: ['In real life', "Scientists use standard form all the time. The Sun is about 150 million kilometres from the Earth: 1.5 times 10 to the 8. A red blood cell is about 7 times 10 to the minus 6 metres across.", ['1.5 × 10⁸ km', '7 × 10⁻⁶ m']],
    turns: [
      { q: 'Write 62,000 in standard form.', task: '62,000', say: "Put the point to make a number between 1 and 10: 6.2. The point moves 4 places to the left. So the power is 4. The answer is 6.2 times 10 to the 4.", work: ['62,000 → 6.2', 'The point moved 4 places left', 'Power = 4'], ans: ['g|6.2 × 10⁴'] },
      { q: 'Write 0.0035 in standard form.', task: '0.0035', say: "We want a number between 1 and 10: 3.5. The point moves 3 places to the right. For a small number, that is a negative power. 3.5 times 10 to the minus 3.", work: ['0.0035 → 3.5', 'The point moved 3 places right', 'Power = −3'], ans: ['g|3.5 × 10⁻³'] },
      { q: 'Write 2.9 times 10 to the minus 2 as an ordinary number.', task: '2.9 × 10⁻²', say: "A negative power means a small number. Move the point 2 places to the left. 2.9 becomes 0.029.", work: ['Power −2: move the point 2 places left', '2.9 → 0.029'], ans: ['g|0.029'] }],
    rec: ["Standard form: a number from 1 up to 10, times a power of 10.", ['a × 10ⁿ with 1 ≤ a < 10', 'Big numbers: positive power', 'Small numbers: negative power', 'The power counts the places the point moves']]
  });

  fx('Calculating in standard form', 'how to multiply and divide numbers in standard form.', {
    head: 'Calculating in standard form',
    basics: [['The two rules', [
      ["To multiply numbers in standard form, multiply the front numbers, and add the powers of 10. To divide, divide the front numbers, and subtract the powers.", ['× : multiply fronts, ADD powers', '÷ : divide fronts, SUBTRACT powers']],
      ["Check the answer. If the front number is not between 1 and 10, change it to standard form and adjust the power.", ['n|Front number must be from 1 up to 10']]]]],
    ex: [
      ['Multiplying', [
        ["2 times 10 to the 3, multiplied by 4 times 10 to the 5. Multiply the front numbers: 2 times 4 is 8. Add the powers: 3 plus 5 is 8.", ['(2 × 10³) × (4 × 10⁵)', '2 × 4 = 8', '3 + 5 = 8']],
        ["The answer is 8 times 10 to the 8.", ['g|8 × 10⁸']]]],
      ['Multiplying with a tidy-up', [
        ["3 times 10 to the 4, times 5 times 10 to the 3. 3 times 5 is 15. 4 plus 3 is 7. That gives 15 times 10 to the 7.", ['3 × 5 = 15', '4 + 3 = 7', '15 × 10⁷']],
        ["15 is not between 1 and 10. 15 is 1.5 times 10. So the power goes up by 1. The answer is 1.5 times 10 to the 8.", ['15 = 1.5 × 10', '1.5 × 10 × 10⁷', 'g|1.5 × 10⁸']]]],
      ['Dividing', [
        ["8 times 10 to the 6, divided by 2 times 10 to the 2. 8 divided by 2 is 4. 6 minus 2 is 4.", ['(8 × 10⁶) ÷ (2 × 10²)', '8 ÷ 2 = 4', '6 − 2 = 4']],
        ["The answer is 4 times 10 to the 4.", ['g|4 × 10⁴']]]],
      ['Adding', [
        ["Add three times ten to the four and five times ten to the three. We cannot just add the front numbers when the powers are different. Write them as ordinary numbers. Thirty thousand and five thousand.", ['3 × 10⁴ = 30,000', '5 × 10³ = 5,000']],
        ["35,000. In standard form, that is 3.5 times 10 to the 4.", ['30,000 + 5,000 = 35,000', 'g|3.5 × 10⁴']]]]],
    mist: [
      ['Multiplying the powers', "Mistake one: multiplying the powers. 10 to the 3 times 10 to the 5 is 10 to the 8. Add the powers, do not multiply them.", ['r|10³ × 10⁵ = 10¹⁵ ✗', 'g|10³ × 10⁵ = 10⁸ ✓']],
      ['Leaving the answer untidy', "Mistake two: leaving 15 times 10 to the 7. It looks right, but the front number is bigger than 10. Change it to 1.5 times 10 to the 8.", ['r|15 × 10⁷ (not standard form) ✗', 'g|1.5 × 10⁸ ✓']]],
    real: ['In real life', "Light travels at 3 times 10 to the 5 kilometres each second. In 500 seconds, which is 5 times 10 to the 2, it travels 3 times 5, which is 15, times 10 to the 7 kilometres. That is 1.5 times 10 to the 8 kilometres, the distance to the Sun.", ['(3 × 10⁵) × (5 × 10²) = 15 × 10⁷', 'g|= 1.5 × 10⁸ km']],
    turns: [
      { q: 'Work out 4 times 10 to the 3, multiplied by 2 times 10 to the 4.', task: '(4 × 10³) × (2 × 10⁴)', say: "Multiply the front numbers: 4 times 2 is 8. Add the powers: 3 plus 4 is 7. The answer is 8 times 10 to the 7.", work: ['4 × 2 = 8', '3 + 4 = 7'], ans: ['g|8 × 10⁷'] },
      { q: 'Work out 5 times 10 to the 6, multiplied by 4 times 10 to the 2. Give the answer in standard form.', task: '(5 × 10⁶) × (4 × 10²)', say: "Multiply the front numbers: 5 times 4 is 20. Add the powers: 6 plus 2 is 8. That gives 20 times 10 to the 8. 20 is 2 times 10, so the power goes up by 1. 2 times 10 to the 9.", work: ['5 × 4 = 20', '6 + 2 = 8', '20 × 10⁸', '20 = 2 × 10, so 2 × 10⁹'], ans: ['g|2 × 10⁹'] },
      { q: 'Work out 9 times 10 to the 8, divided by 3 times 10 to the 3.', task: '(9 × 10⁸) ÷ (3 × 10³)', say: "Divide the front numbers: 9 divided by 3 is 3. Subtract the powers: 8 minus 3 is 5. The answer is 3 times 10 to the 5.", work: ['9 ÷ 3 = 3', '8 − 3 = 5'], ans: ['g|3 × 10⁵'] }],
    rec: ["Multiply: multiply the fronts and add the powers. Divide: divide the fronts and subtract the powers.", ['× : fronts multiply, powers add', '÷ : fronts divide, powers subtract', 'Tidy so the front is from 1 up to 10', 'Adding: write as ordinary numbers first']]
  });

  fx('Index laws and negative indices', 'the laws for multiplying and dividing powers, and what 0 and negative powers mean.', {
    head: 'Index laws',
    basics: [['The laws', [
      ["The index, or power, tells us how many times to multiply. When we multiply powers with the same base, we add the indices. When we divide powers with the same base, we subtract the indices. When we raise a power to a power, we multiply the indices.", ['aᵐ × aⁿ = aᵐ⁺ⁿ', 'aᵐ ÷ aⁿ = aᵐ⁻ⁿ', '(aᵐ)ⁿ = aᵐⁿ']],
      ["2 special cases. Any number to the power 0 is 1. A negative power means 1 over the positive power.", ['a⁰ = 1', 'a⁻ⁿ = 1/aⁿ']]]]],
    ex: [
      ['Multiplying and dividing', [
        ["2 to the 5 times 2 to the 3. The bases are the same, so add the indices: 5 plus 3 is 8. 2 to the 8 is 256.", ['2⁵ × 2³ = 2⁵⁺³', '= 2⁸', 'g|= 256']],
        ["5 to the 7 divided by 5 to the 4. Subtract the indices: 7 minus 4 is 3. 5 cubed is 125.", ['5⁷ ÷ 5⁴ = 5⁷⁻⁴', '= 5³', 'g|= 125']]]],
      ['A power of a power', [
        ["3 squared, all cubed. That means 3 squared times 3 squared times 3 squared. Multiply the indices: 2 times 3 is 6.", ['(3²)³ = 3²ˣ³', '= 3⁶', 'g|= 729']]]],
      ['Zero and negative indices', [
        ["7 to the 0 is 1. Any number to the power 0 is 1. 2 to the minus 3 is 1 over 2 cubed. 2 cubed is 8, so it is 1/8.", ['7⁰ = 1', '2⁻³ = 1/2³ = 1/8']],
        ["10 to the minus 2 is 1 over 10 squared, which is 1 over 100. That is 0.01. Negative powers give small numbers, not negative numbers.", ['10⁻² = 1/10² = 1/100', 'g|= 0.01']]]],
      ['With letters', [
        ["Simplify 3 x squared times 4 x cubed. Multiply the numbers: 3 times 4 is 12. Add the powers of x: 2 plus 3 is 5.", ['3x² × 4x³', '3 × 4 = 12', 'x² × x³ = x⁵', 'g|12x⁵']]]]],
    mist: [
      ['Multiplying the bases', "Mistake one: multiplying the bases. 2 cubed times 2 to the 4 is not 4 to the 7. The base stays 2. The answer is 2 to the 7.", ['r|2³ × 2⁴ = 4⁷ ✗', 'g|2³ × 2⁴ = 2⁷ ✓']],
      ['Negative index means negative number', "Mistake two: thinking a negative index gives a negative answer. 2 to the minus 3 is 1/8. It is a small positive number.", ['r|2⁻³ = −8 ✗', 'g|2⁻³ = 1/8 ✓']]],
    real: ['In real life', "Computers store data in powers of 2. 1 kilobyte is 2 to the 10 bytes, which is 1,024. 2 to the 10 times 2 to the 10 is 2 to the 20, which is about 1 million bytes, or 1 megabyte.", ['2¹⁰ = 1024', '2¹⁰ × 2¹⁰ = 2²⁰ ≈ 1,000,000']],
    turns: [
      { q: 'Work out 3 to the 4 times 3 squared.', task: '3⁴ × 3²', say: "The bases are the same, so add the indices. 4 plus 2 is 6. 3 to the 6 is 729.", work: ['3⁴ × 3² = 3⁴⁺²', '= 3⁶', '3⁶ = 729'], ans: ['g|729'] },
      { q: 'Work out 6 to the 9 divided by 6 to the 7.', task: '6⁹ ÷ 6⁷', say: "The bases are the same, so subtract the indices. 9 minus 7 is 2. 6 squared is 36.", work: ['6⁹ ÷ 6⁷ = 6⁹⁻⁷', '= 6²', '6² = 36'], ans: ['g|36'] },
      { q: 'Work out 4 to the minus 2, as a fraction.', task: '4⁻²', say: "A negative index means 1 over the positive power. So it is 1 over 4 squared. 4 squared is 16. The answer is 1 sixteenth.", work: ['4⁻² = 1/4²', '4² = 16', '= 1/16'], ans: ['g|1/16'] }],
    rec: ["Same base: add when multiplying, subtract when dividing.", ['aᵐ × aⁿ = aᵐ⁺ⁿ', 'aᵐ ÷ aⁿ = aᵐ⁻ⁿ', '(aᵐ)ⁿ = aᵐⁿ', 'a⁰ = 1', 'a⁻ⁿ = 1/aⁿ']]
  });

  fx('Tolerance', 'what tolerance means and how to find the smallest and largest acceptable values.', {
    head: 'Tolerance',
    basics: [['What is tolerance?', [
      ["Nothing can be made or measured perfectly. Tolerance tells us how far a size is allowed to be above or below the target. We write it with a plus or minus sign. A rod of 50 centimetres, plus or minus 2, can be between 48 and 52 centimetres.", ['50 ± 2 cm', 'Smallest: 50 − 2 = 48', 'Largest: 50 + 2 = 52']],
      ["The smallest allowed value is the target minus the tolerance. The largest allowed value is the target plus the tolerance. Anything outside that range is rejected.", ['Smallest = target − tolerance', 'Largest = target + tolerance']]]]],
    ex: [
      ['A pipe', [
        ["A pipe is 250 millimetres, plus or minus 5. The smallest allowed length is 250 minus 5, which is 245.", ['250 ± 5 mm', '250 − 5 = 245']],
        ["The largest is 250 plus 5, which is 255. Any pipe from 245 to 255 millimetres is accepted.", ['250 + 5 = 255', 'g|245 mm to 255 mm']]]],
      ['Is it acceptable?', [
        ["A bolt should be 25 millimetres, plus or minus 0.2. The range is from 24.8 to 25.2. Is a bolt of 24.7 acceptable?", ['25 − 0.2 = 24.8', '25 + 0.2 = 25.2']],
        ["24.7 is less than 24.8, so it is outside the range. The bolt is rejected.", ['24.7 < 24.8', 'g|Rejected']]]],
      ['How big is the range?', [
        ["The total range is the largest minus the smallest. For 50 plus or minus 2, that is 52 minus 48, which is 4. It is twice the tolerance.", ['52 − 48 = 4', 'Range = 2 × tolerance', 'g|Range = 4']]]]],
    mist: [
      ['Using the tolerance one way only', "Mistake one: adding the tolerance but forgetting to subtract it. 50 plus or minus 2 goes both ways. The range is 48 to 52, not 50 to 52.", ['r|50 to 52 ✗', 'g|48 to 52 ✓']],
      ['Mixing up the target and the range', "Mistake two: reading the range as the tolerance. The tolerance is how far from the target. The whole range is twice that.", ['Tolerance = 2', 'Range = 48 to 52 = 4 wide']]],
    real: ['In real life', "Factories use tolerance for every part. A phone case that is slightly too big will not fit. In medicine, a tablet must contain the right dose, plus or minus a very small tolerance.", ['Part length 80 ± 0.1 mm', '79.9 mm to 80.1 mm']],
    turns: [
      { q: 'A plank is 40 centimetres, plus or minus 0.3. Find the smallest and largest acceptable lengths.', say: "The smallest length is 40 minus 0.3, which is 39.7. The largest length is 40 plus 0.3, which is 40.3.", work: ['40 − 0.3 = 39.7', '40 + 0.3 = 40.3'], ans: ['g|39.7 cm to 40.3 cm'] },
      { q: 'A shaft should be 12 millimetres, plus or minus 0.15. Is a shaft of 12.18 acceptable?', say: "The smallest allowed is 12 minus 0.15, which is 11.85. The largest allowed is 12 plus 0.15, which is 12.15. 12.18 is bigger than 12.15, so it is outside the range.", work: ['12 − 0.15 = 11.85', '12 + 0.15 = 12.15', '12.18 > 12.15: outside the range'], ans: ['g|No, it is rejected'] },
      { q: 'A rod is 150 millimetres with a tolerance of 2 millimetres. How wide is the range of acceptable lengths?', say: "The smallest is 150 minus 2, which is 148. The largest is 150 plus 2, which is 152. The range is the difference: 4 millimetres.", work: ['150 − 2 = 148', '150 + 2 = 152', '152 − 148 = 4'], ans: ['g|4 mm'] }],
    rec: ["Tolerance is how far a value can be above or below the target.", ['Smallest = target − tolerance', 'Largest = target + tolerance', 'Outside the range: rejected', 'Range = 2 × tolerance']]
  });

  L.use(821, ['How do you round to three decimal places?', 'Significant figures', 'Estimating by rounding to 1 significant figure', 'How do you add and subtract positive and negative numbers?', 'How do you multiply and divide positive and negative numbers?', 'How do you multiply to three decimal places?', 'How do you divide to three decimal places?', 'Tolerance', 'What are prime numbers?', 'How do you solve problems using multiples and factors?', 'Sets of numbers', 'What are powers and roots?', 'Standard form', 'Calculating in standard form', 'Index laws and negative indices', 'How do you add and subtract fractions?', 'How do you multiply and divide fractions?', 'Fraction problems with what is left']);
})();
