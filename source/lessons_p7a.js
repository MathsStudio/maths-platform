/* lessons_p7a.js: P7 Watch lessons, topics 1 to 6. New lessons for the questions P7 adds,
   and the older P7 lessons rebuilt in full. P5 and P6 lessons for shared questions are reused. */
(function () {
  'use strict';
  var BT = window.BT; if (!BT || !BT.L || !BT.lk) return;
  var L = BT.L, V = BT.sv, LK = BT.lk, SC = L.SC, st = L.st, SW = L.SW, F = L.F, BIG = L.BIG, ep = L.ep, rec = L.rec, turn = L.turn;

  /* ===================== Topic 1 ===================== */
  ep('Decimal places and significant figures', 'how to round to a number of decimal places or significant figures.', [
    SC('Two ways to round', 'Decimal places and significant figures', [
      st("We can round to a number of decimal places, counting digits after the point, or to a number of significant figures, counting from the first digit that isn't zero.", V.cards(['3.476 → 3.48 (2 d.p.)', '3.476 → 3.5 (2 s.f.)'], ['b', 'g']))]),
    SC('Decimal places', '7.2384 to 2 d.p.', [
      st("Round seven point two three eight four to two decimal places. Keep two digits after the point: seven point two three. The next digit is eight, so round up.", V.eq('7.23|84 → 7.24', 'g'))]),
    SC('Significant figures', 'Start at the first non-zero digit', [
      st("The first significant figure is the first digit that isn't zero. In four thousand, eight hundred and sixty-two, it is the four. To one significant figure, that rounds to five thousand.", V.eq('4,862 → 5,000 (1 s.f.)', 'g')),
      st("To two significant figures, keep four and eight, look at the six: round up to four thousand nine hundred.", V.eq('4,862 → 4,900 (2 s.f.)', 'g'))]),
    SC('Small numbers', 'Zeros at the start don’t count', [
      st("In zero point zero zero three seven two, the first significant figure is the three. To two significant figures: zero point zero zero three seven.", V.eq('0.00372 → 0.0037 (2 s.f.)', 'g') + V.rule('Leading zeros are not significant.'))]),
    SC('Keep the size', 'Fill with zeros', [
      st("When you round a big number to significant figures, fill the places with zeros so the size stays the same. Thirty-six thousand, four hundred to one significant figure is forty thousand, not four.", V.eq('36,400 → 40,000', 'g'))]),
    SC('Estimating', 'Round to 1 s.f.', [
      st("Rounding to one significant figure makes estimates quick. Forty-eight point seven times six point one is about fifty times six, which is three hundred.", V.eq('48.7 × 6.1 ≈ 50 × 6 = 300', 'g'))]),
    turn("Your turn! Round zero point zero six four eight to one significant figure. Pause and try it.", V.eq('0.0648 → ?'),
      "The first significant figure is six. The next digit is four, so round down. Zero point zero six.", V.eq('0.06', 'g')),
    rec('Decimal places and significant figures', "Decimal places count digits after the point. Significant figures count from the first non-zero digit. Look at the next digit to round, and fill with zeros to keep the size.",
      ['d.p.: digits after the point', 's.f.: from the first non-zero digit', 'Next digit 5 or more: round up', 'Keep the size with zeros'])
  ]);

  ep('Negative numbers and powers of ten', 'how to calculate with negative numbers and multiply or divide by powers of ten.', [
    SC('Adding and subtracting negatives', 'On a number line', [
      st("Adding a positive number moves right. Subtracting moves left. Negative three add five is two.", V.nl(-5, 5, { jumps: [[-3, 2, '+5']], marks: [[2, 150]] }) + V.eq('−3 + 5 = 2', 'g'))]),
    SC('Two signs together', 'Same signs make plus', [
      st("Subtracting a negative is the same as adding. Four take away negative two is six. Adding a negative is the same as subtracting: four add negative two is two.", V.eq('4 − (−2) = 4 + 2 = 6') + V.eq('4 + (−2) = 4 − 2 = 2', 'g'))]),
    SC('Multiplying and dividing negatives', 'Sign rules', [
      st("When you multiply or divide, two signs the same give a positive answer. Two different signs give a negative answer.", V.tbl([['+ × +', '+'], ['− × −', '+'], ['+ × −', '−'], ['− × +', '−']], ['Signs', 'Answer']) + V.eq('−3 × −4 = 12 · −12 ÷ 3 = −4', 'g'))]),
    SC('Powers of ten', '10, 100, 1,000', [
      st("Ten squared is one hundred. Ten cubed is one thousand. The power tells you how many zeros.", V.eq('10² = 100 · 10³ = 1,000 · 10⁴ = 10,000', 'g'))]),
    SC('Multiplying by powers of ten', 'Digits move left', [
      st("Multiplying by ten to the power three moves every digit three places left. Four point seven two times one thousand is four thousand, seven hundred and twenty.", V.eq('4.72 × 10³ = 4,720', 'g'))]),
    SC('Dividing by powers of ten', 'Digits move right', [
      st("Dividing by ten squared moves every digit two places right. Three hundred and sixty-five divided by one hundred is three point six five.", V.eq('365 ÷ 10² = 3.65', 'g'))]),
    turn("Your turn! Work out negative six take away negative four. Pause and try it.", V.eq('−6 − (−4) = ?'),
      "Subtracting a negative is adding: negative six add four is negative two.", V.eq('−6 + 4 = −2', 'g')),
    rec('Negative numbers and powers of ten', "Subtracting a negative means add. Same signs multiply to positive, different signs to negative. Multiplying by a power of ten moves digits left; dividing moves them right.",
      ['− (−) = +', 'Same signs ×: positive', 'Different signs ×: negative', '× 10ⁿ left, ÷ 10ⁿ right'])
  ]);

  /* ===================== Topic 2 ===================== */
  ep('What is the order of operations?', 'the order to carry out calculations, including brackets and powers.', [
    SC('Why an order?', 'One answer for everyone', [
      st("Three plus four times two. If you go left to right you get fourteen, but the right answer is eleven. Mathematicians agreed an order so everyone gets the same answer.", V.eq('3 + 4 × 2 = ?', 'b'))]),
    SC('BIDMAS', 'The order', [
      st("Brackets first. Then indices, which are powers like squared. Then division and multiplication. Then addition and subtraction.", V.tbl([['B', 'Brackets'], ['I', 'Indices (powers)'], ['D M', 'Divide and multiply, left to right'], ['A S', 'Add and subtract, left to right']], ['Letter', 'Meaning']))]),
    SC('Multiply first', '3 + 4 × 2', [
      st("Four times two is eight, then add three: eleven.", V.eq('3 + 4 × 2 = 3 + 8 = 11', 'g'))]),
    SC('Brackets first', '(3 + 4) × 2', [
      st("Now three plus four is in brackets, so do it first: seven. Then seven times two is fourteen.", V.eq('(3 + 4) × 2 = 7 × 2 = 14', 'g'))]),
    SC('Indices', '2 + 3²', [
      st("Indices come before adding. Three squared is nine. Then two plus nine is eleven.", V.eq('2 + 3² = 2 + 9 = 11', 'g'))]),
    SC('A longer one', '20 − (2 + 3)² ÷ 5', [
      st("Brackets: two plus three is five. Indices: five squared is twenty-five. Divide: twenty-five divided by five is five. Subtract: twenty take away five is fifteen.", V.eq('20 − 5² ÷ 5 = 20 − 25 ÷ 5 = 20 − 5 = 15', 'g'))]),
    SC('Left to right', 'Same level', [
      st("Division and multiplication are equal partners: work left to right. Twelve divided by three times two is four times two, eight.", V.eq('12 ÷ 3 × 2 = 4 × 2 = 8', 'g'))]),
    turn("Your turn! Work out five plus two times three squared. Pause and try it.", V.eq('5 + 2 × 3² = ?'),
      "Indices first: nine. Then two times nine is eighteen. Then five plus eighteen is twenty-three.", V.eq('5 + 18 = 23', 'g')),
    rec('What is the order of operations?', "Use BIDMAS: brackets, indices, then division and multiplication left to right, then addition and subtraction left to right.",
      ['Brackets', 'Indices', 'Divide and multiply, left to right', 'Add and subtract, left to right'])
  ]);

  ep('Decimal calculations', 'how to add, subtract, multiply and divide with decimals.', [
    SC('Adding and subtracting decimals', 'Line up the points', [
      st("Line up the decimal points, fill gaps with zeros, then add or subtract as normal. Twelve point five plus three point seven eight is sixteen point two eight.", V.eq('12.50 + 3.78 = 16.28', 'g') + V.rule('Line up the decimal points.'))]),
    SC('Subtracting', 'From a whole number', [
      st("Ten take away four point three six. Write ten as ten point zero zero. Then subtract: five point six four.", V.eq('10.00 − 4.36 = 5.64', 'g'))]),
    SC('Multiplying by a whole number', '3.4 × 6', [
      st("Ignore the point: thirty-four times six is two hundred and four. There is one decimal place in the question, so put one in the answer: twenty point four.", V.eq('34 × 6 = 204 → 3.4 × 6 = 20.4', 'g'))]),
    SC('Multiplying two decimals', '0.3 × 0.4', [
      st("Three times four is twelve. There are two decimal places in the question altogether, so the answer has two: zero point one two.", V.eq('0.3 × 0.4 = 0.12', 'g') + V.rule('Count the decimal places in the question.'))]),
    SC('Dividing by a whole number', '7.2 ÷ 4', [
      st("Use short division and keep the point in line. Four into seven is one, remainder three. Four into thirty-two is eight. One point eight.", V.eq('7.2 ÷ 4 = 1.8', 'g'))]),
    SC('Estimate first', 'Check the point', [
      st("Estimate to check where the point goes. Three point four times six is about three times six, eighteen. So twenty point four makes sense, not two hundred and four.", V.eq('≈ 18 ✓', 'g'))]),
    turn("Your turn! Work out two point five times four. Pause and try it.", V.eq('2.5 × 4 = ?'),
      "Twenty-five times four is one hundred. One decimal place: ten point zero, which is ten.", V.eq('2.5 × 4 = 10', 'g')),
    rec('Decimal calculations', "Line up the points to add and subtract. To multiply, ignore the points, then put back as many decimal places as the question had. To divide, keep the point in line. Estimate to check.",
      ['+ and −: line up the points', '×: count decimal places', '÷: keep the point in line', 'Estimate to check'])
  ]);

  /* ===================== Topic 3 ===================== */
  ep('How do you multiply fractions?', 'how to multiply a fraction by a whole number and by another fraction.', [
    SC('Fraction × whole number', 'Repeated adding', [
      st("Two fifths times three means three lots of two fifths: two fifths plus two fifths plus two fifths, which is six fifths.", V.eq('2/5 × 3 = 6/5 = 1 1/5', 'g') + V.rule('Multiply the numerator by the whole number.'))]),
    SC('Fraction of a fraction', '"Of" means times', [
      st("What is a half of a third? Cut a bar into thirds, then cut one third in half. That piece is one sixth of the whole.", LK.fbar(1, 6, 300, 280) + V.eq('1/2 × 1/3 = 1/6', 'g'))]),
    SC('Fraction × fraction', 'Tops times tops, bottoms times bottoms', [
      st("To multiply fractions, multiply the numerators together and the denominators together. Two thirds times four fifths is eight fifteenths.", V.eq('2/3 × 4/5 = 8/15', 'g') + V.rule('Multiply the tops. Multiply the bottoms.'))]),
    SC('Then simplify', '3/4 × 2/9', [
      st("Three times two is six. Four times nine is thirty-six. Six thirty-sixths simplifies to one sixth.", V.eq('3/4 × 2/9 = 6/36 = 1/6', 'g'))]),
    SC('Mixed numbers', 'Change to improper first', [
      st("One and a half times two thirds. Change one and a half to three halves. Three halves times two thirds is six sixths, which is one.", V.eq('1 1/2 × 2/3 = 3/2 × 2/3 = 6/6 = 1', 'g'))]),
    SC('Smaller answers', 'Why?', [
      st("Multiplying by a fraction less than one makes the number smaller, because you are finding part of it.", V.note('× a fraction less than 1 → smaller answer'))]),
    turn("Your turn! Work out three quarters times two fifths. Pause and try it.", V.eq('3/4 × 2/5 = ?'),
      "Three times two is six, four times five is twenty: six twentieths, which simplifies to three tenths.", V.eq('6/20 = 3/10', 'g')),
    rec('How do you multiply fractions?', "To multiply a fraction by a whole number, multiply the numerator. To multiply two fractions, multiply the numerators and multiply the denominators, then simplify. Change mixed numbers to improper fractions first.",
      ['Fraction × whole: × the top', 'Tops × tops, bottoms × bottoms', 'Simplify the answer', 'Mixed → improper first'])
  ]);

  ep('Dividing fractions', 'how to divide with fractions by flipping the second fraction and multiplying.', [
    SC('How many fit?', 'Dividing by a fraction', [
      st("Three divided by one half asks: how many halves fit into three? Each whole has two halves, so six.", LK.fbar(2, 2, 100, 280) + LK.fbar(2, 2, 100, 280) + LK.fbar(2, 2, 100, 280) + V.eq('3 ÷ 1/2 = 6', 'g'))]),
    SC('Keep, change, flip', 'The method', [
      st("To divide by a fraction: keep the first number, change divide to multiply, and flip the second fraction upside down.", V.rule('Keep, change, flip.') + V.eq('2/3 ÷ 1/4 = 2/3 × 4/1', 'b')),
      st("Two thirds times four is eight thirds, which is two and two thirds.", V.eq('8/3 = 2 2/3', 'g'))]),
    SC('Fraction ÷ whole number', 'Share it', [
      st("Three quarters divided by two: flip two to one half. Three quarters times one half is three eighths.", V.eq('3/4 ÷ 2 = 3/4 × 1/2 = 3/8', 'g'))]),
    SC('Fraction ÷ fraction', '5/6 ÷ 2/3', [
      st("Keep five sixths, change to times, flip two thirds to three halves. Fifteen twelfths, which simplifies to one and one quarter.", V.eq('5/6 × 3/2 = 15/12 = 1 1/4', 'g'))]),
    SC('In real life', 'Ribbon', [
      st("How many pieces of ribbon, each three quarters of a metre, can be cut from six metres? Six divided by three quarters is six times four thirds, which is eight pieces.", V.eq('6 ÷ 3/4 = 6 × 4/3 = 8', 'g'))]),
    turn("Your turn! Work out one half divided by one quarter. Pause and try it.", V.eq('1/2 ÷ 1/4 = ?'),
      "Keep, change, flip: one half times four is two. Two quarters fit in a half.", V.eq('2', 'g')),
    rec('Dividing fractions', "Dividing by a fraction asks how many fit. Keep the first fraction, change to multiply, flip the second fraction, then simplify.",
      ['Keep the first', 'Change ÷ to ×', 'Flip the second', 'Simplify'])
  ]);

  /* ===================== Topic 4 ===================== */
  ep('How do you calculate a percentage?', 'how to find any percentage of an amount, and write one amount as a percentage of another.', [
    SC('Percentages of amounts', 'With and without a calculator', [
      st("To find a percentage of an amount, we can build it from easy pieces, or change the percentage into a decimal and multiply.", V.cards(['Build it: 10%, 5%, 1%', 'Decimal: × 0.35'], ['b', 'g']))]),
    SC('Building it up', '35% of £80', [
      st("Ten per cent of eighty pounds is eight pounds. Thirty per cent is twenty-four pounds. Five per cent is four pounds. So thirty-five per cent is twenty-eight pounds.", V.eq('30% = £24 · 5% = £4', 'b') + V.eq('35% of £80 = £28', 'g'))]),
    SC('Using a decimal', 'With a calculator', [
      st("Thirty-five per cent is zero point three five. Zero point three five times eighty is twenty-eight.", V.eq('0.35 × 80 = 28', 'g'))]),
    SC('Awkward percentages', '17.5% of £240', [
      st("Ten per cent is twenty-four pounds. Five per cent is twelve. Two and a half per cent is six. Add them: seventeen and a half per cent is forty-two pounds.", V.eq('£24 + £12 + £6 = £42', 'g'))]),
    SC('One amount as a percentage of another', '18 out of 24', [
      st("A pupil scores eighteen out of twenty-four. Write it as a fraction, then multiply by one hundred. Eighteen divided by twenty-four is zero point seven five: seventy-five per cent.", V.eq('18 ÷ 24 × 100 = 75%', 'g') + V.rule('Part ÷ whole × 100'))]),
    SC('In real life', 'VAT', [
      st("A bike costs two hundred pounds before VAT of twenty per cent. Twenty per cent is forty pounds, so it costs two hundred and forty pounds.", V.eq('£200 + 20% = £240', 'g'))]),
    turn("Your turn! What is twelve per cent of fifty? Pause and try it.", V.eq('12% of 50 = ?'),
      "Ten per cent is five, one per cent is zero point five, so two per cent is one. Twelve per cent is six.", V.eq('5 + 1 = 6', 'g')),
    rec('How do you calculate a percentage?', "Build percentages from ten per cent, five per cent and one per cent, or multiply by the percentage as a decimal. To write one amount as a percentage of another, divide the part by the whole and multiply by one hundred.",
      ['Build from 10%, 5%, 1%', 'Or: % as a decimal × amount', 'Part ÷ whole × 100', 'Check it is sensible'])
  ]);

  ep('Percentage change', 'how to increase or decrease an amount by a percentage, and find the percentage change.', [
    SC('Increase and decrease', 'Up or down by a percentage', [
      st("Prices can go up by a percentage, like a pay rise, or down, like a sale. We find the percentage, then add or subtract it.", V.cards(['Increase: add it on', 'Decrease: take it off'], ['g', 'b']))]),
    SC('A decrease', '15% off £60', [
      st("Fifteen per cent of sixty pounds is nine pounds. Take it off: fifty-one pounds.", V.eq('£60 − £9 = £51', 'g'))]),
    SC('An increase', '8% rise on £250', [
      st("Eight per cent of two hundred and fifty pounds is twenty pounds. Add it on: two hundred and seventy pounds.", V.eq('£250 + £20 = £270', 'g'))]),
    SC('A quicker way', 'Multipliers', [
      st("Fifteen per cent off leaves eighty-five per cent, so multiply by zero point eight five. Eight per cent more is one hundred and eight per cent, so multiply by one point zero eight.", V.eq('£60 × 0.85 = £51 · £250 × 1.08 = £270', 'g'))]),
    SC('Finding the percentage change', 'Change ÷ original × 100', [
      st("A jacket went from forty pounds to thirty pounds. The change is ten pounds. Ten divided by the original, forty, times one hundred is twenty-five per cent. A twenty-five per cent decrease.", V.eq('10 ÷ 40 × 100 = 25%', 'g') + V.rule('Change ÷ original × 100'))]),
    turn("Your turn! A jacket costs eighty pounds. It goes up by ten per cent. What is the new price? Pause and try it.", V.eq('£80 + 10%'),
      "Ten per cent is eight pounds. Eighty plus eight is eighty-eight pounds.", V.eq('£88', 'g')),
    rec('Percentage change', "Find the percentage and add it on for an increase or take it off for a decrease, or use a multiplier. Percentage change is the change divided by the original amount, times one hundred.",
      ['Increase: add the percentage on', 'Decrease: take it off', 'Multipliers: 0.85, 1.08…', 'Change ÷ original × 100'])
  ]);

  ep('Percentages as fractions and reverse percentages', 'how to change percentages into fractions, and work back to the original amount.', [
    SC('Percentage to fraction', 'Over 100, then simplify', [
      st("A percentage is a fraction out of one hundred. Thirty-five per cent is thirty-five hundredths, which simplifies to seven twentieths.", V.eq('35% = 35/100 = 7/20', 'g'))]),
    SC('More examples', 'Simplify fully', [
      st("Eighty per cent is four fifths. Twelve and a half per cent is one eighth. Thirty-three and a third per cent is one third.", V.tbl([['80%', '4/5'], ['12.5%', '1/8'], ['33⅓%', '1/3']], ['Percentage', 'Fraction']))]),
    SC('Reverse percentages', 'Working backwards', [
      st("In a sale with twenty per cent off, a coat costs forty-eight pounds. What was the original price? The sale price is eighty per cent of the original, not of forty-eight.", V.eq('80% = £48', 'b'))]),
    SC('Find 1%, then 100%', 'Step by step', [
      st("If eighty per cent is forty-eight pounds, then one per cent is forty-eight divided by eighty: sixty pence. One hundred per cent is sixty pounds.", V.eq('1% = £0.60') + V.eq('100% = £60', 'g'))]),
    SC('A common mistake', 'Don’t add 20% back', [
      st("Adding twenty per cent back to forty-eight pounds gives fifty-seven pounds sixty, which is wrong. The twenty per cent was of the original price, not the sale price.", V.eq('£48 + 20% = £57.60 ✗', 'b') + V.note('Work with the percentage you know'))]),
    turn("Your turn! After a ten per cent rise, a price is sixty-six pounds. What was it before? Pause and try it.", V.eq('110% = £66'),
      "One hundred and ten per cent is sixty-six pounds, so ten per cent is six pounds, and one hundred per cent is sixty pounds.", V.eq('£60', 'g')),
    rec('Percentages as fractions and reverse percentages', "Write a percentage over one hundred and simplify. For reverse percentages, decide what percentage you know, find one per cent or ten per cent, then scale up to one hundred per cent.",
      ['% → fraction: over 100, simplify', 'Reverse: which % do you know?', 'Find 1% or 10%', 'Scale to 100%'])
  ]);

  /* ===================== Topic 5 ===================== */
  ep('What is financial decision making?', 'how to make sensible money choices: budgets, best buys, saving and borrowing.', [
    SC('Money choices', 'Thinking before spending', [
      st("Financial decision making means thinking carefully about how to use money: what to buy, how much to save, and whether something is good value.", V.list(['Needs and wants', 'Budgets', 'Best buys', 'Saving and interest']))]),
    SC('Needs and wants', 'What comes first?', [
      st("A need is something you must have, like food or a bus pass. A want is something nice to have, like a new toy. Needs come first.", V.cards(['Need: lunch', 'Want: a new toy'], ['g', 'b']))]),
    SC('A budget', 'Plan your money', [
      st("A budget plans income and spending. Sam gets twenty pounds a month. Bus fares cost eight pounds, lunch costs seven, which leaves five pounds to save or spend.", V.tbl([['Income', '£20'], ['Bus fares', '− £8'], ['Lunch', '− £7'], ['Left', '£5']], ['', 'Amount']))]),
    SC('Best buy', 'Compare the price for one', [
      st("Four cans for two pounds forty, or six cans for three pounds thirty? Find the price of one: sixty pence, and fifty-five pence. The six-pack is the better buy.", V.eq('£2.40 ÷ 4 = 60p · £3.30 ÷ 6 = 55p', 'g'))]),
    SC('Saving and interest', 'Money that grows', [
      st("A bank pays interest on savings. With three per cent interest a year, one hundred pounds becomes one hundred and three pounds after a year.", V.eq('£100 + 3% = £103', 'g'))]),
    SC('Borrowing costs money', 'Pay back more', [
      st("Borrowing usually costs interest too. Borrowing two hundred pounds at ten per cent means paying back two hundred and twenty pounds. So it's often better to save first.", V.eq('£200 + 10% = £220 to pay back', 'b'))]),
    turn("Your turn! Three bars cost one pound fifty, or five bars cost two pounds. Which is better value? Pause and try it.", V.eq('£1.50 ÷ 3 or £2 ÷ 5'),
      "Fifty pence each, or forty pence each. Five bars for two pounds is better value.", V.eq('5 for £2', 'g')),
    rec('What is financial decision making?', "Think about needs before wants, plan with a budget, compare the price for one to find the best buy, and remember saving earns interest while borrowing costs interest.",
      ['Needs before wants', 'Make a budget', 'Best buy: price for one', 'Saving earns, borrowing costs'])
  ]);

  ep('How do you work out the area of triangles?', 'how to find the area of a triangle using half of base times height.', [
    SC('Half a rectangle', 'Where the formula comes from', [
      st("Draw a diagonal across a rectangle and you get two equal triangles. So each triangle is half the rectangle's area.", V.poly([[20, 20], [200, 20], [200, 120], [20, 120]], 'var(--surface-2)', 220, 140, 'A rectangle split into two triangles'))]),
    SC('The formula', 'Area = ½ × base × height', [
      st("The area of a triangle is a half times the base times the height. The height must be perpendicular to the base: straight up at a right angle.", V.eq('Area = ½ × b × h', 'g') + V.rule('Use the perpendicular height, not the sloping side.'))]),
    SC('Example', 'Base 10 cm, height 6 cm', [
      st("A triangle has a base of ten centimetres and a height of six centimetres. Ten times six is sixty. Half of sixty is thirty square centimetres.", V.poly([[20, 120], [220, 120], [90, 20]], 'var(--surface-2)', 240, 140, 'A triangle with base 10 cm and height 6 cm') + V.eq('½ × 10 × 6 = 30 cm²', 'g'))]),
    SC('Any triangle', 'Even when the top leans', [
      st("It works for any triangle, even when the top point is over to one side. Base eight metres, height five metres: twenty square metres.", V.eq('½ × 8 × 5 = 20 m²', 'g'))]),
    SC('Compound shapes', 'Split and add', [
      st("A house shape is a rectangle with a triangle on top. Find each area and add. A rectangle ten by six is sixty, plus a triangle with base ten and height four, twenty. Eighty square metres.", V.eq('60 + 20 = 80 m²', 'g'))]),
    turn("Your turn! A triangle has a base of fourteen centimetres and a height of five. What is its area? Pause and try it.", V.eq('½ × 14 × 5'),
      "Fourteen times five is seventy. Half is thirty-five square centimetres.", V.eq('35 cm²', 'g')),
    rec('How do you work out the area of triangles?', "A triangle is half a rectangle, so its area is a half times base times perpendicular height. Split compound shapes into rectangles and triangles, then add.",
      ['Area = ½ × base × height', 'Use the perpendicular height', 'Answer in square units', 'Compound: split and add'])
  ]);

  /* ===================== Topic 6 ===================== */
  ep('The nth term', 'how to find a rule for the nth term of a sequence, and use it.', [
    SC('A sequence', 'Going up by the same amount', [
      st("Here is a sequence: five, eight, eleven, fourteen. It goes up by three each time.", V.cards(['5', '8', '11', '14', '…'], ['b']) + V.eq('+3 each time', 'g'))]),
    SC('The nth term', 'A rule for any position', [
      st("The nth term is a rule that gives any term from its position, n. It saves counting all the way to the hundredth term.", V.note('n = the position in the sequence'))]),
    SC('Finding the rule', 'Times the difference, then adjust', [
      st("It goes up by three, so the rule starts with three n. For n equals one, three n is three, but the first term is five. We need to add two.", V.eq('3n → 3, 6, 9, 12', 'b') + V.eq('3n + 2 → 5, 8, 11, 14', 'g'))]),
    SC('Using the rule', 'The 100th term', [
      st("The hundredth term is three times one hundred plus two: three hundred and two.", V.eq('3 × 100 + 2 = 302', 'g'))]),
    SC('Going down', 'A negative difference', [
      st("Twenty, sixteen, twelve, eight goes down by four, so the rule starts with negative four n. Negative four plus twenty-four is twenty, so the rule is twenty-four take away four n.", V.eq('24 − 4n → 20, 16, 12, 8', 'g'))]),
    SC('Is a number in the sequence?', 'Solve it', [
      st("Is fifty in the sequence three n plus two? Three n plus two equals fifty means three n equals forty-eight, so n is sixteen. Yes, it's the sixteenth term.", V.eq('3n + 2 = 50 → n = 16 ✓', 'g'))]),
    turn("Your turn! Find the nth term of seven, eleven, fifteen, nineteen. Pause and try it.", V.eq('7, 11, 15, 19'),
      "It goes up by four, so four n. Four n gives four for the first term, so add three: four n plus three.", V.eq('4n + 3', 'g')),
    rec('The nth term', "Find the difference between terms: that number goes in front of n. Then add or subtract to match the first term. Use the rule to find any term.",
      ['Difference → the number before n', 'Adjust to match the first term', 'Substitute n to find any term', 'Solve to test a number'])
  ]);

  ep('Equations with brackets and letters on both sides', 'how to solve equations with brackets, and with the letter on both sides.', [
    SC('Brackets', 'Multiply out first', [
      st("To solve three times, in brackets, x plus two, equals twenty-one, multiply out the bracket first: three x plus six equals twenty-one.", V.eq('3(x + 2) = 21 → 3x + 6 = 21', 'b')),
      st("Take six from both sides: three x equals fifteen. Divide by three: x equals five.", V.eq('3x = 15 → x = 5', 'g'))]),
    SC('Or divide first', 'Another way', [
      st("You could also divide both sides by three first: x plus two equals seven, so x equals five. Same answer.", V.eq('x + 2 = 7 → x = 5', 'g'))]),
    SC('Letters on both sides', 'Collect them together', [
      st("Five x plus three equals two x plus fifteen. Take two x from both sides so the letters are on one side: three x plus three equals fifteen.", V.eq('5x + 3 = 2x + 15 → 3x + 3 = 15', 'b')),
      st("Take three: three x equals twelve. Divide by three: x equals four.", V.eq('3x = 12 → x = 4', 'g'))]),
    SC('Check by substituting', 'Both sides equal?', [
      st("Check x equals four: five times four plus three is twenty-three. Two times four plus fifteen is twenty-three. Both sides match.", V.eq('23 = 23 ✓', 'g'))]),
    SC('A harder one', 'Brackets on both sides', [
      st("Two, bracket, x plus five, equals four, bracket, x minus one. Multiply out: two x plus ten equals four x minus four. Take two x: ten equals two x minus four. Add four: fourteen equals two x. So x equals seven.", V.eq('2x + 10 = 4x − 4 → 14 = 2x → x = 7', 'g'))]),
    turn("Your turn! Solve four x take away one equals x plus eleven. Pause and try it.", V.eq('4x − 1 = x + 11'),
      "Take x from both sides: three x take away one equals eleven. Add one: three x equals twelve. x equals four.", V.eq('x = 4', 'g')),
    rec('Equations with brackets and letters on both sides', "Multiply out brackets first. Move the letters to one side by taking the smaller amount from both sides. Then solve as normal and check by substituting.",
      ['Expand the brackets', 'Letters to one side', 'Numbers to the other', 'Solve and check'])
  ]);

  /* ===================== put topics 1 to 6 together ===================== */
  L.use(701, ['What is place value?', 'What are negative numbers?', 'How do you partition a number?', 'How do you round numbers?', 'How do you round decimal numbers?', 'How do you use estimation to check your answers?', 'Decimal places and significant figures', 'Negative numbers and powers of ten', 'Sensible estimates and rounding with units', 'Number lines, words and digit values']);
  L.use(702, ['What is column addition?', 'How do you add three or four numbers?', 'How do you use column subtraction?', 'How do you add and subtract in your head?', 'How do you multiply in your head?', 'How do you multiply and divide by 0, 1, 10 and 100?', 'How do you work out division with remainders?', 'How do you use written methods for short division?', 'How do you divide by a two-digit number?', 'What is the order of operations?', 'How do you work out longer mixed calculations?', 'How can counting on help me add two-digit numbers?', 'How can partitioning help me add two-digit numbers?', 'Long multiplication', 'Decimal calculations', 'Use a fact you know']);
  L.use(703, ['What is a fraction?', 'How do you write fractions?', 'How do you compare different fractions?', 'How do you add and subtract fractions?', 'How do you multiply fractions?', 'What are unit and mixed fractions?', 'How do you simplify fractions?', 'Dividing fractions', 'Fractions of amounts and multiplying', 'Counting parts and fractions as decimals']);
  L.use(704, ['What are decimals?', 'How do you compare fractions, decimals and percentages?', 'What is a percentage?', 'How do you calculate a percentage?', 'Percentage change', 'Percentages as fractions and reverse percentages', 'Percentages of a set and of a measure']);
  L.use(705, ['What is currency?', 'What is financial decision making?', 'How can different coins and notes make the same total?', 'How can I use adding and subtracting to work out change?', 'What is analogue and digital time?', 'What are imperial measurements?', 'What are metric measurements?', 'How can I work out the length of an object?', 'How can I work out the area of a shape?', 'How do you work out the area of triangles?', 'What is the perimeter?', 'Timetables and durations', 'Calendars and time zones']);
  L.use(706, ['What is a number sequence?', 'What is an equation?', 'How do you solve missing number problems?', 'The nth term', 'Equations with brackets and letters on both sides', 'Expressions from words and shapes']);
})();
