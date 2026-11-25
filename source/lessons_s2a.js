/* lessons_s2a.js: S2 Watch lessons for the 20 third level questions given to S2. */
(function () {
  'use strict';
  var BT = window.BT; if (!BT || !BT.L || !BT.L.lesson) return;
  var L = BT.L, V = BT.sv, LK = BT.lk, E = L.E, LS = L.lesson;
  var SPA = window.SPA, cubes = function (h) { return SPA && SPA.cubes ? SPA.cubes(h, 215, null, true) : ''; };

  LS('How do you round to three decimal places?', 'how to round numbers to one, two or three decimal places.', {
    intro: ['Decimal places', 'Digits after the point', "Rounding to three decimal places keeps three digits after the point. Look at the fourth digit to decide.", E('2.71828 → 2.718', 'g')],
    ex: [['Three decimal places', '5.43271', [["Keep 5.432. The next digit is 7, so round up: 5.433.", E('5.432|71 → 5.433', 'g')]]],
      ['Rounding down', '0.18249', [["Keep zero point one eight two. The next digit is four, so it stays: zero point one eight two.", E('0.182|49 → 0.182', 'g')]]],
      ['Carrying through nines', '3.9996', [["Keep 3.999. The next digit is 6, so round up. 9 9 9 plus 1 carries all the way: 4.000.", E('3.9996 → 4.000', 'g') + V.note('Keep the zeros to show 3 d.p.')]]],
      ['Calculator answers', '22 ÷ 7', [["22 divided by 7 is 3.142857. To 3 decimal places: 3.143.", E('3.142857… → 3.143', 'g')]]]],
    real: ['Science', "Scientists record a mass of zero point zero four five six seven kilograms to three decimal places as zero point zero four six.", E('0.04567 → 0.046 kg', 'g')],
    turn: ["Your turn! Round 7.0049 to 3 decimal places. Pause and try it.", E('7.0049'), "Keep 7.004. The next digit is 9, so round up: 7.005.", E('7.005', 'g')],
    rec: ["Count three digits after the point, look at the fourth, and round up if it is five or more. Keep any zeros at the end to show the accuracy.", ['Count 3 places after the point', 'Look at the 4th digit', '5 or more: round up', 'Keep end zeros']],
    deep: ['Rounding to decimal places is the same rule as rounding whole numbers, just further right.', '4.000 and 4 are equal, but 4.000 shows it was rounded to 3 decimal places.']
  });

  LS('How do you add and subtract positive and negative numbers?', 'how to add and subtract with negative numbers using a number line and sign rules.', {
    intro: ['Negative numbers', 'Left of zero', "On a number line, positive numbers are right of zero and negative numbers are left. Adding a positive moves right; subtracting a positive moves left.", V.nl(-8, 8, { tick: 1, lab: 2, marks: [[-5, 22], [3, 150]] })],
    ex: [['Adding a positive', '−5 + 9', [["Start at negative five and move nine to the right: four.", V.nl(-6, 6, { jumps: [[-5, 4, '+9']], marks: [[4, 150]] }) + E('−5 + 9 = 4', 'g')]]],
      ['Subtracting a positive', '3 − 8', [["Start at three and move eight left: negative five.", E('3 − 8 = −5', 'g')]]],
      ['Adding a negative', 'Same as subtracting', [["Adding negative 4 is the same as subtracting 4. 6 plus negative 4 is 2.", E('6 + (−4) = 6 − 4 = 2', 'g')]]],
      ['Subtracting a negative', 'Same as adding', [["Subtracting negative four is the same as adding four. Negative two take away negative four is two.", E('−2 − (−4) = −2 + 4 = 2', 'g') + V.rule('Two signs together: same → +, different → −')]]]],
    real: ['Temperature and banking', "A bank balance of negative £20 plus a deposit of £50 is £30.", E('−£20 + £50 = £30', 'g')],
    turn: ["Your turn! Work out negative seven take away negative three. Pause and try it.", E('−7 − (−3)'), "Subtracting a negative means add 3: negative 4.", E('−4', 'g')],
    rec: ["Adding a positive moves right; subtracting moves left. Adding a negative is subtracting; subtracting a negative is adding.", ['+ positive: right', '− positive: left', '+ (−) = −', '− (−) = +']],
    deep: ['Removing a negative, like taking away a debt, increases the total, which is why − (−) is +.', 'Rewrite 2 signs as 1 before you start: 5 − (−2) becomes 5 + 2.']
  });

  LS('How do you multiply and divide positive and negative numbers?', 'the sign rules for multiplying and dividing with negative numbers.', {
    intro: ['Sign rules', 'Same or different?', "When you multiply or divide 2 numbers, look at their signs. The same signs give a positive answer; different signs give a negative answer.", V.tbl([['+ × +', '+'], ['− × −', '+'], ['+ × −', '−'], ['− × +', '−']], ['Signs', 'Answer'])],
    ex: [['Different signs', '−6 × 4', [["6 times 4 is 24. The signs are different, so negative 24.", E('−6 × 4 = −24', 'g')]]],
      ['Same signs', '−7 × −3', [["7 times 3 is 21. Both negative, so positive 21.", E('−7 × −3 = 21', 'g')]]],
      ['Dividing', '−45 ÷ −9 and 32 ÷ −8', [["Negative 45 divided by negative 9 is positive 5. 32 divided by negative 8 is negative 4.", E('−45 ÷ −9 = 5 · 32 ÷ −8 = −4', 'g')]]],
      ['More than two', 'Count the negatives', [["Negative 2 times negative 3 times negative 4: an odd number of negatives gives a negative answer. Negative 24.", E('−2 × −3 × −4 = −24', 'g')]]]],
    real: ['Patterns', "Look at the pattern: 3 times negative 2 is negative 6, 2 times negative 2 is negative 4, 1 times negative 2 is negative 2, 0, then negative 1 times negative 2 must be 2. The answers go up by 2 each time.", E('… −4, −2, 0, 2', 'g')],
    turn: ["Your turn! Work out negative 56 divided by 7. Pause and try it.", E('−56 ÷ 7'), "56 divided by 7 is 8. Different signs: negative 8.", E('−8', 'g')],
    rec: ["Multiply or divide the numbers as normal, then decide the sign: same signs positive, different signs negative.", ['Work out the number', 'Same signs: +', 'Different signs: −', 'Odd number of negatives: −']],
    deep: ['The sign rules keep number patterns going smoothly past zero.', 'These rules are for × and ÷ only. For + and −, use the number line.']
  });

  LS('How do you multiply to three decimal places?', 'how to multiply decimals and place the decimal point correctly.', {
    intro: ['Multiplying decimals', 'Ignore, multiply, replace', "Multiply as if there were no decimal points, then count the decimal places in the question and put the same number in the answer.", V.rule('Total decimal places in = decimal places out')],
    ex: [['One decimal', '3.7 × 6', [["37 times 6 is 222. 1 decimal place: 22.2.", E('3.7 × 6 = 22.2', 'g')]]],
      ['Two decimals', '0.45 × 0.3', [["45 times 3 is 135. 2 plus 1 is 3 decimal places: 0 point 1 3 5.", E('0.45 × 0.3 = 0.135', 'g')]]],
      ['Three decimal places', '2.125 × 4', [["2,125 times 4 is 8,500. 3 decimal places: 8.500, which is 8.5.", E('2.125 × 4 = 8.5', 'g')]]],
      ['Estimate to check', '4.8 × 3.1', [["Estimate 5 times 3 is 15. 48 times 31 is 1,488, so 14.88.", E('≈ 15 → 14.88 ✓', 'g')]]]],
    real: ['Shopping', "2.35 kilograms of cheese at £8 a kilogram costs £18.80.", E('2.35 × 8 = £18.80', 'g')],
    turn: ["Your turn! Work out 0 point 0 6 times 0 point 4. Pause and try it.", E('0.06 × 0.4'), "6 times 4 is 24. 3 decimal places: 0 point 0 2 4.", E('0.024', 'g')],
    rec: ["Ignore the points and multiply. Count the decimal places in the question and put that many in the answer. Estimate to check.", ['Ignore the points', 'Multiply', 'Count decimal places', 'Estimate to check']],
    deep: ['Each decimal place means dividing by 10, so the places in the question add up in the answer.', 'Multiplying by a decimal less than 1 makes the answer smaller.']
  });

  LS('How do you divide to three decimal places?', 'how to divide decimals, including by a decimal, and give answers to three decimal places.', {
    intro: ['Dividing decimals', 'Keep the point in line', "To divide a decimal by a whole number, use short division and keep the point in line. Add zeros to keep going.", E('6.3 ÷ 4 = 1.575', 'g')],
    ex: [['By a whole number', '6.3 ÷ 4', [["4 into 6 is 1, remainder 2. 4 into 23 is 5, remainder 3. Add zeros: 4 into 30 is 7, remainder 2; 4 into 20 is 5. 1.575.", E('6.300 ÷ 4 = 1.575', 'g')]]],
      ['By a decimal', '5.6 ÷ 0.07', [["Make the divisor a whole number by multiplying both by 100: 560 divided by 7 is 80.", E('5.6 ÷ 0.07 = 560 ÷ 7 = 80', 'g')]]],
      ['Recurring answers', '10 ÷ 3', [["10 divided by 3 is 3.333 and so on. To 3 decimal places: 3.333.", E('10 ÷ 3 = 3.333…', 'g')]]],
      ['Rounding the answer', '2 ÷ 7', [["2 divided by 7 is 0 point 2 8 5 7. To 3 decimal places: 0 point 2 8 6.", E('2 ÷ 7 ≈ 0.286', 'g')]]]],
    real: ['Sharing a bill', "A bill of forty-seven pounds fifty is shared between four people: eleven pounds eighty-seven point five, so about eleven pounds eighty-eight each.", E('£47.50 ÷ 4 = £11.875', 'g')],
    turn: ["Your turn! Work out 4.2 divided by 0 point 6. Pause and try it.", E('4.2 ÷ 0.6'), "Multiply both by 10: 42 divided by 6 is 7.", E('7', 'g')],
    rec: ["Divide by a whole number with the point in line, adding zeros as needed. To divide by a decimal, multiply both numbers by 10 or 100 first. Round at the end.", ['Keep the point in line', 'Add zeros to continue', '÷ decimal: scale both', 'Round at the end']],
    deep: ['Scaling both numbers by the same amount doesn’t change the answer of a division.', 'Dividing by a number less than 1 makes the answer bigger.']
  });

  LS('How do you solve problems using multiples and factors?', 'how to use factors, multiples, the HCF and the LCM to solve real problems.', {
    intro: ['Factors and multiples in problems', 'Which one?', "If you are splitting things into equal groups, think factors and the highest common factor. If things repeat and you want them to line up, think multiples and the lowest common multiple.", V.cards(['Splitting → HCF', 'Repeating → LCM'], ['b', 'g'])],
    ex: [['HCF problem', 'Party bags', [["48 sweets and 36 balloons go into identical bags with nothing left. The most bags is the HCF: 12. Each has 4 sweets and 3 balloons.", E('HCF(48, 36) = 12', 'g')]]],
      ['LCM problem', 'Two buses', [["1 bus every 12 minutes, another every 18. Both leave at 9. They leave together again after the LCM: 36 minutes, at 9 36.", E('LCM(12, 18) = 36 → 9:36', 'g')]]],
      ['Tiles', 'Biggest square tile', [["A floor is 240 by 180 centimetres. The biggest square tile that fits exactly has side the HCF: 60 centimetres.", E('HCF(240, 180) = 60 cm', 'g')]]],
      ['Using prime factors', 'Bigger numbers', [["For 72 and 120: 72 is 2 cubed times 3 squared, 120 is 2 cubed times 3 times 5. HCF: 2 cubed times 3, 24.", E('HCF = 24', 'g')]]]],
    real: ['Gears', "A gear with 12 teeth turns a gear with 20 teeth. They line up again after the LCM: 60 teeth.", E('LCM(12, 20) = 60', 'g')],
    turn: ["Your turn! Hot dogs come in packs of eight and rolls in packs of six. What is the fewest of each so none are left over? Pause and try it.", E('LCM(8, 6)'), "24: 3 packs of hot dogs and 4 packs of rolls.", E('24', 'g')],
    rec: ["Use the HCF to split things into the largest equal groups. Use the LCM when repeating things line up. Prime factors help with big numbers.", ['Equal groups → HCF', 'Lining up → LCM', 'List or use prime factors', 'Answer in context']],
    deep: ['The HCF can never be bigger than the smaller number; the LCM can never be smaller than the bigger number.', 'Read the question: is it asking for the number of groups or the size of each group?']
  });

  LS('What are powers and roots?', 'what powers and roots are, and how to calculate with them.', {
    intro: ['Powers', 'Repeated multiplication', "A power, or index, shows how many times a number is multiplied by itself. 5 to the power 3 is 5 times 5 times 5.", E('5³ = 5 × 5 × 5 = 125', 'g')],
    ex: [['Squares and cubes', 'Special powers', [["A number to the power 2 is squared; to the power 3 is cubed. 9 squared is 81; 3 cubed is 27.", E('9² = 81 · 3³ = 27', 'g')]]],
      ['Higher powers', 'Powers of 2 and 10', [["2 to the power 6 is 64. 10 to the power 4 is 10,000.", E('2⁶ = 64 · 10⁴ = 10,000', 'g')]]],
      ['Roots', 'The inverse', [["A root undoes a power. The square root of 144 is 12. The cube root of 8 is 2.", E('√144 = 12 · ∛8 = 2', 'g')]]],
      ['Estimating roots', 'Between two squares', [["The square root of 50 lies between 7 and 8, because 7 squared is 49 and 8 squared is 64. It's just over 7.", E('√50 ≈ 7.07', 'g')]]]],
    real: ['Area and volume', "A square garden with an area of 81 square metres has sides of 9 metres. A cube with a volume of 64 cubic centimetres has edges of 4.", E('√81 = 9 m · ∛64 = 4 cm', 'g')],
    turn: ["Your turn! Work out 2 to the power 5, add the square root of 49. Pause and try it.", E('2⁵ + √49'), "32 plus 7 is 39.", E('39', 'g')],
    rec: ["A power is repeated multiplication. Roots undo powers. Estimate roots by finding the square numbers either side.", ['aⁿ = a × a × … (n times)', 'Squared: ², cubed: ³', '√ and ∛ undo them', 'Estimate between squares']],
    deep: ['Powers grow very fast: 2¹⁰ is already over a thousand.', '3² is 9, not 6: the power is not multiplied by the number.']
  });

  LS('How do you add and subtract fractions?', 'how to add and subtract fractions and mixed numbers with different denominators.', {
    intro: ['Same-size pieces', 'Common denominators', "You can only add or subtract fractions when the pieces are the same size, so find a common denominator first.", LK.fbar(1, 3, 280, 280) + LK.fbar(1, 4, 280, 150)],
    ex: [['Different denominators', '1/3 + 1/4', [["The lowest common denominator of 3 and 4 is 12. 1 third is 4 twelfths; 1 quarter is 3 twelfths. 7 twelfths.", E('4/12 + 3/12 = 7/12', 'g')]]],
      ['Subtracting', '5/6 − 3/8', [["The LCM of 6 and 8 is 24. 20 twenty-fourths take away 9 twenty-fourths is 11 twenty-fourths.", E('20/24 − 9/24 = 11/24', 'g')]]],
      ['Mixed numbers', '2 3/4 + 1 2/5', [["Wholes: 3. Fractions: 15 twentieths plus 8 twentieths is 23 twentieths, 1 and 3 twentieths. Total: 4 and 3 twentieths.", E('2 3/4 + 1 2/5 = 4 3/20', 'g')]]],
      ['Borrowing a whole', '3 1/6 − 1 2/3', [["Change to improper: 19 sixths take away 10 sixths is 9 sixths: 1 and a half.", E('19/6 − 10/6 = 9/6 = 1 1/2', 'g')]]]],
    real: ['Time', "Ali spends 3 quarters of an hour on maths and 2 thirds of an hour reading. Together: 9 twelfths plus 8 twelfths, 17 twelfths, 1 hour and 5 minutes.", E('3/4 + 2/3 = 1 5/12 h', 'g')],
    turn: ["Your turn! Work out 3 fifths plus 1 half. Pause and try it.", E('3/5 + 1/2'), "6 tenths plus 5 tenths is 11 tenths: 1 and 1 tenth.", E('1 1/10', 'g')],
    rec: ["Find a common denominator, change each fraction, then add or subtract the numerators. For mixed numbers, use wholes and parts, or improper fractions. Simplify.", ['Common denominator (LCM)', 'Change each fraction', 'Add or subtract the tops', 'Simplify the answer']],
    deep: ['Using the lowest common denominator keeps the numbers small, but any common denominator gives the right answer.', 'Never add the denominators: 1/3 + 1/4 is not 2/7.']
  });

  LS('How do you calculate fractions and percentages?', 'how to find fractions and percentages of amounts and convert between them.', {
    intro: ['Fractions and percentages', 'Two ways to describe part of a whole', "A fraction and a percentage can describe the same part. Three fifths is 60%. Changing between them helps calculations.", E('3/5 = 60/100 = 60%', 'g')],
    ex: [['Fraction of an amount', '5/8 of £72', [["72 divided by 8 is 9. 9 times 5 is £45.", E('5/8 of £72 = £45', 'g')]]],
      ['Percentage of an amount', '35% of 240', [["10% is 24. 30% is 72, 5% is 12. 84.", E('35% of 240 = 84', 'g')]]],
      ['Fraction to percentage', '7/20', [["Multiply top and bottom by 5: 35 hundredths, 35%. Or divide 7 by 20: 0 point 3 5.", E('7/20 = 35%', 'g')]]],
      ['Percentage to fraction', '45%', [["45 hundredths, which simplifies to 9 twentieths.", E('45% = 45/100 = 9/20', 'g')]]],
      ['Which is bigger?', '2/3 of 90 or 70% of 80', [["2 thirds of 90 is 60. 70% of 80 is 56. 2 thirds of 90 is bigger.", E('60 > 56', 'g')]]]],
    turn: ["Your turn! Which is bigger: 3 quarters of 60, or 40% of 120? Pause and try it.", E('¾ of 60 or 40% of 120'), "45 and 48. 40% of 120 is bigger.", E('48 > 45', 'g')],
    rec: ["For a fraction of an amount, divide by the bottom and multiply by the top. Build percentages from 10%. Convert using hundredths.", ['Fraction: ÷ bottom, × top', 'Percent: build from 10%', 'Fraction ↔ percentage via /100', 'Compare in the same form']],
    deep: ['A percentage is a fraction out of 100, so any fraction can become a percentage by scaling to hundredths.', 'Simplify fractions from percentages fully: 45/100 = 9/20.']
  });

  LS('What are ratios?', 'what a ratio is, how to simplify it, and how to share in a ratio.', {
    intro: ['Ratio', 'Comparing parts', "A ratio compares quantities in order. For every two cups of flour there is one cup of sugar: flour to sugar is two to one.", E('flour : sugar = 2 : 1', 'g')],
    ex: [['Simplifying', 'Divide by a common factor', [["15 to 25: divide by 5, 3 to 5.", E('15 : 25 = 3 : 5', 'g')]]],
      ['Equivalent ratios', 'Scaling up', [["2 to 1 is the same as 6 to 3 and 10 to 5.", E('2 : 1 = 6 : 3 = 10 : 5', 'g')]]],
      ['Sharing', '£56 in 3 : 4', [["7 parts. 1 part is £8. 3 parts is £24, 4 parts is £32.", E('£24 and £32', 'g')]]],
      ['Ratio and fractions', 'Part of the whole', [["In three to four, the first share is three sevenths of the total and the second is four sevenths.", E('3 : 4 → 3/7 and 4/7', 'g')]]]],
    real: ['Maps', "A map scale of 1 to 50,000 is a ratio: 1 centimetre on the map is 50,000 centimetres, half a kilometre, on the ground.", E('1 : 50,000 → 1 cm = 0.5 km', 'g')],
    turn: ["Your turn! Simplify the ratio 18 to 12. Pause and try it.", E('18 : 12'), "Divide by 6: 3 to 2.", E('3 : 2', 'g')],
    rec: ["A ratio compares quantities in order. Simplify by dividing, scale by multiplying, and share by finding the value of one part.", ['Order matters', 'Simplify: ÷ common factor', 'Scale: × both parts', 'Share: total ÷ parts']],
    deep: ['A ratio compares parts with parts; a fraction compares a part with the whole.', 'In 3 : 4, the fractions are 3/7 and 4/7, not 3/4.']
  });

  LS('How do you find the best value for money?', 'how to compare prices and offers to find the best value.', {
    intro: ['Best value', 'Compare fairly', "To find the best value, compare the same amount: the price of 1 item, 100 grams or 1 litre.", V.rule('Work out the price per unit.')],
    ex: [['Price per unit', 'Cereal boxes', [["500 grams for £2.15, or 750 grams for £3. Per hundred grams: 43p, and 40p. The bigger box is better value.", E('43p vs 40p per 100 g', 'g')]]],
      ['Amount per pound', 'Another way', [["Instead, find how much you get per pound: 233 grams, or 250 grams. More per pound is better value.", E('233 g vs 250 g per £1', 'g')]]],
      ['Offers', 'Buy one get one half price', [["2 pizzas at £4 each with the second half price cost £6: £3 each. 3 for £10 is £3.33 each. The first deal is better.", E('£3.00 vs £3.33 each', 'g')]]],
      ['Percentages off', '25% off vs £5 off', [["On a £24 jumper, 25% off saves £6, better than £5 off.", E('£6 > £5', 'g')]]]],
    real: ['Phone contracts', "Plan A is £12 a month; plan B is £120 a year. Over a year, A costs £144, so B is cheaper.", E('£144 vs £120', 'g')],
    turn: ["Your turn! Which is better: 6 cans for £3.60, or 10 cans for £5.80? Pause and try it.", E('per can'), "60p and 58p per can. 10 cans is better value.", E('10 for £5.80', 'g')],
    rec: ["Compare like with like: price per unit or amount per pound. Work out what offers really cost per item. Consider whether you will use it all.", ['Price per unit', 'Or amount per £1', 'Work out offers fully', 'Check you need it all']],
    deep: ['Unit pricing works because it turns different packs into the same comparison.', 'Bigger isn’t always cheaper, and an offer is only good value if you use what you buy.']
  });

  LS('How do you calculate distance, speed and time?', 'how to use the formulas linking distance, speed and time.', {
    intro: ['Three linked quantities', 'D, S and T', "Distance, speed and time are linked. If you know two, you can find the third.", V.tbl([['Distance', 'S × T'], ['Speed', 'D ÷ T'], ['Time', 'D ÷ S']], ['To find', 'Use'])],
    ex: [['Speed', 'A train', [["A train travels 270 kilometres in 3 hours: 90 kilometres per hour.", E('270 ÷ 3 = 90 km/h', 'g')]]],
      ['Distance', 'A cyclist', [["A cyclist rides at 18 kilometres per hour for 2 hours and 20 minutes. 20 minutes is a third of an hour, so 2 and a third hours: 42 kilometres.", E('18 × 2⅓ = 42 km', 'g')]]],
      ['Time', 'A car', [["A car travels 210 miles at 60 miles per hour: 3.5 hours, which is 3 hours 30 minutes.", E('210 ÷ 60 = 3.5 h = 3 h 30 min', 'g')]]],
      ['Changing units', 'Metres per second', [["10 metres per second is 36,000 metres per hour: 36 kilometres per hour.", E('10 m/s = 36 km/h', 'g')]]]],
    real: ['Running', "A runner completes 5 kilometres in 25 minutes. That is 12 kilometres per hour.", E('5 ÷ (25/60) = 12 km/h', 'g')],
    turn: ["Your turn! How long does it take to cycle 30 kilometres at 12 kilometres per hour? Pause and try it.", E('30 ÷ 12'), "2.5 hours: 2 hours 30 minutes.", E('2 h 30 min', 'g')],
    rec: ["Use D = S × T, S = D ÷ T and T = D ÷ S. Keep units matching, and change minutes to hours.", ['D = S × T', 'S = D ÷ T', 'T = D ÷ S', 'Minutes ÷ 60 for hours']],
    deep: ['The units of speed show the formula: km per hour means km ÷ hours.', '0.5 hours is 30 minutes, not 50 minutes.']
  });

  LS('How do you calculate time across hours and days?', 'how to work out durations and finishing times that cross hours, midnight and days.', {
    intro: ['Time is not decimal', 'Sixties and twenty-fours', "There are 60 minutes in an hour and 24 hours in a day, so we can't use column subtraction like normal numbers.", V.rule('Count on: to the next hour, then hours, then minutes.')],
    ex: [['Across hours', '09:45 to 13:20', [["15 minutes to 10. 3 hours to thirteen hundred. 20 more minutes. 3 hours 35 minutes.", E('15 min + 3 h + 20 min = 3 h 35 min', 'g')]]],
      ['Across midnight', '22:40 to 06:15', [["20 minutes to twenty-3 hundred. 1 hour to midnight. 6 hours to 6. 15 minutes. 7 hours 35 minutes.", E('20 min + 1 h + 6 h + 15 min = 7 h 35 min', 'g')]]],
      ['Across days', 'Monday 18:00 to Wednesday 09:30', [["Monday eighteen hundred to Tuesday eighteen hundred is 24 hours. Tuesday eighteen hundred to Wednesday 9 30 is 15 and a half hours. 39 and a half hours.", E('24 h + 15 h 30 min = 39 h 30 min', 'g')]]],
      ['Finishing time', 'Adding a duration', [["A flight leaves at twenty-1 50 and lasts 5 hours 40 minutes. Add 5 hours: 2 50. Add 40 minutes: 3 30 the next day.", E('21:50 + 5 h 40 min = 03:30', 'g')]]]],
    real: ['Shift work', "A nurse works from nineteen 30 to 7 45 the next morning: 12 hours 15 minutes.", E('12 h 15 min', 'g')],
    turn: ["Your turn! How long is it from twenty-3 15 to 1 40? Pause and try it.", E('23:15 → 01:40'), "45 minutes to midnight, 1 hour 40 to 1 40. 2 hours 25 minutes.", E('2 h 25 min', 'g')],
    rec: ["Count on to the next hour, then whole hours, then the minutes left. Cross midnight by counting to twenty-4 hundred. For days, count whole days of 24 hours.", ['Count on to the hour', 'Then whole hours', 'Then minutes', 'Midnight: count to 24:00']],
    deep: ['A number line for time makes crossing midnight easy to see.', '1.5 hours is 1 hour 30 minutes; never write it as 1 hour 50.']
  });

  LS('How do you convert units of area and volume?', 'how to convert square and cubic units, like cm² to m² and cm³ to litres.', {
    intro: ['Area units are squared', 'Not just times 100', "1 metre is 100 centimetres, but 1 square metre is 100 times 100: 10,000 square centimetres.", E('1 m² = 100 × 100 = 10,000 cm²', 'g')],
    ex: [['Area', 'cm² to mm²', [["1 centimetre is 10 millimetres, so 1 square centimetre is 10 times 10: 100 square millimetres.", E('1 cm² = 100 mm²', 'g')]]],
      ['Area', 'm² to cm²', [["3.5 square metres is 3.5 times 10,000: 35,000 square centimetres.", E('3.5 m² = 35,000 cm²', 'g')]]],
      ['Volume', 'm³ to cm³', [["1 cubic metre is 100 times 100 times 100: 1 million cubic centimetres.", E('1 m³ = 1,000,000 cm³', 'g')]]],
      ['Capacity', 'cm³ to litres', [["1,000 cubic centimetres is 1 litre. A tank of 240,000 cubic centimetres holds 240 litres.", E('240,000 cm³ = 240 l', 'g')]]]],
    real: ['A fish tank', "A tank 60 by 30 by 40 centimetres has a volume of 72,000 cubic centimetres: 72 litres.", E('60 × 30 × 40 = 72,000 cm³ = 72 l', 'g')],
    turn: ["Your turn! How many square centimetres are in two square metres? Pause and try it.", E('2 m² = ? cm²'), "2 times 10,000: 20,000 square centimetres.", E('20,000 cm²', 'g')],
    rec: ["Square the length conversion for area, and cube it for volume. 1 cubic metre is a million cubic centimetres; 1,000 cubic centimetres is 1 litre.", ['Area: square the factor', 'Volume: cube the factor', '1 m² = 10,000 cm²', '1,000 cm³ = 1 litre']],
    deep: ['A square metre is 100 cm long and 100 cm wide, which is why the factor is squared.', 'The most common mistake is converting m² to cm² by multiplying by 100 instead of 10,000.']
  });

  LS('What are three-dimensional objects?', 'how to describe 3D objects by their faces, edges and vertices, and recognise prisms and pyramids.', {
    intro: ['3D objects', 'Solid shapes', "Three-dimensional objects have length, width and height. We describe them by their faces, edges and vertices.", cubes([[1, 1], [1, 1]])],
    ex: [['Prisms', 'Same cross-section', [["A prism has the same cross-section all the way through. Cuboids, triangular prisms and hexagonal prisms are all prisms.", V.tbl([['Cube', '6', '12', '8'], ['Triangular prism', '5', '9', '6'], ['Hexagonal prism', '8', '18', '12']], ['Prism', 'Faces', 'Edges', 'Vertices'])]]],
      ['Pyramids', 'Coming to a point', [["A pyramid has a base and triangular faces meeting at a point. A square-based pyramid has five faces, eight edges and five vertices.", V.tbl([['Tetrahedron', '4', '6', '4'], ['Square-based pyramid', '5', '8', '5']], ['Pyramid', 'Faces', 'Edges', 'Vertices'])]]],
      ['Euler’s rule', 'F + V − E = 2', [["For these solids, faces plus vertices take away edges always equals 2. A cube: 6 plus 8 take away 12 is 2.", E('F + V − E = 2', 'g')]]],
      ['Curved solids', 'Cylinder, cone, sphere', [["A cylinder has two flat circles and one curved surface. A cone has one circle and one curved surface. A sphere has one curved surface.", V.cards(['Cylinder', 'Cone', 'Sphere'], ['b', 'p', 'g'])]]]],
    turn: ["Your turn! A pentagonal prism has 7 faces and 10 vertices. How many edges? Pause and use Euler's rule.", E('7 + 10 − E = 2'), "17 take away E equals 2, so E is 15.", E('15 edges', 'g')],
    rec: ["Describe 3D objects by faces, edges and vertices. Prisms have a constant cross-section; pyramids come to a point. For polyhedra, F + V − E = 2.", ['Faces, edges, vertices', 'Prism: same cross-section', 'Pyramid: base + point', 'F + V − E = 2']],
    deep: ['Euler’s rule works for every solid with flat faces and no holes.', 'A cylinder is not a prism in the strict sense because its cross-section is curved, but it behaves like one for volume.']
  });

  LS('How do you find angles between lines?', 'how to find angles where lines cross and where a line crosses parallel lines.', {
    intro: ['Angles between lines', 'Using angle facts', "When lines meet or cross, the angles follow rules. We use them to find missing angles and give reasons.", V.tbl([['Straight line', '180°'], ['Round a point', '360°'], ['Vertically opposite', 'equal']], ['Fact', 'Rule'])],
    ex: [['Crossing lines', 'Vertically opposite', [["2 lines cross. 1 angle is 74 degrees. The opposite angle is also 74. The others are 106 each.", E('74°, 106°, 74°, 106°', 'g')]]],
      ['Parallel lines', 'Corresponding and alternate', [["A line crosses 2 parallel lines. Corresponding angles are equal, alternate angles are equal, and co-interior angles add to 180 degrees.", V.cards(['F: equal', 'Z: equal', 'C: add to 180°'], ['b', 'p', 'g'])]]],
      ['A chain of reasons', 'Step by step', [["An angle is 62 degrees. Its alternate angle is 62, and the angle next to that on a straight line is 118.", E('62° → 62° (alternate) → 118° (straight line)', 'g')]]]],
    turn: ["Your turn! Co-interior angles: 1 is 95 degrees. Find the other. Pause and think.", E('?'), "They add to 180: 85 degrees.", E('85°', 'g')],
    rec: ["Use straight-line, round-a-point and vertically opposite facts, and the parallel line rules. Give a reason for each angle.", ['Straight line 180°', 'Vertically opposite equal', 'F and Z equal', 'C adds to 180°']],
    deep: ['Angle problems become chains: each angle you find unlocks the next.', 'Only use parallel line rules when the lines are marked with arrows.']
  });

  LS('How do you generate a rule from a pattern?', 'how to find a rule for a pattern and use it to predict terms.', {
    intro: ['Patterns', 'Spot the change', "A pattern changes in a regular way. Find how it changes each time, then write a rule.", V.cards(['4', '7', '10', '13', '…'], ['b'])],
    ex: [['Term-to-term rule', 'Add 3 each time', [["4, 7, 10, 13: the term-to-term rule is add 3.", E('+3 each time', 'g')]]],
      ['Position-to-term rule', 'Any term directly', [["It goes up in threes, so start with 3 n. For n equals 1, 3 n is 3, but the first term is 4: add 1. Rule: 3 n plus 1.", E('3n + 1', 'g')]]],
      ['Matchstick patterns', 'Squares in a row', [["1 square uses 4 matches, 2 squares 7, 3 squares 10. Rule: 3 n plus 1. 20 squares need 61 matches.", E('3 × 20 + 1 = 61', 'g')]]],
      ['Testing', 'Is 100 in the pattern?', [["3 n plus 1 equals 100 means 3 n equals 99, n equals 33. Yes, it's the thirty-third term.", E('3n + 1 = 100 → n = 33 ✓', 'g')]]]],
    turn: ["Your turn! Find the rule for 5, 9, 13, 17. Pause and try it.", E('5, 9, 13, 17'), "Up in fours, so 4 n, plus 1: 4 n plus 1.", E('4n + 1', 'g')],
    rec: ["Find the difference to get the number in front of n, then adjust to match the first term. Use the rule to find any term or test numbers.", ['Find the difference', 'That × n', 'Adjust to the first term', 'Test and predict']],
    deep: ['A position-to-term rule jumps straight to any term, unlike the term-to-term rule.', 'Check your rule with at least two terms, not just the first.']
  });

  LS('What is algebra?', 'what algebra is, and how letters, expressions and equations work.', {
    intro: ['Algebra', 'Letters for numbers', "Algebra uses letters to stand for numbers we don't know, or numbers that can change. It lets us write general rules.", E('n + n + n = 3n', 'g')],
    ex: [['Expressions', 'No equals sign', [["An expression is a mix of letters and numbers, like 2 x plus 5. It has no equals sign.", E('2x + 5', 'b')]]],
      ['Equations', 'With an equals sign', [["An equation says 2 things are equal, like 2 x plus 5 equals 17. We can solve it: x equals 6.", E('2x + 5 = 17 → x = 6', 'g')]]],
      ['Writing algebra', 'Conventions', [["We write 3 times n as 3 n, n times n as n squared, and n divided by 4 as n over 4.", V.tbl([['3 × n', '3n'], ['n × n', 'n²'], ['n ÷ 4', 'n/4'], ['1 × n', 'n']], ['Means', 'Write'])]]],
      ['Substituting', 'Put in a value', [["If a is 4, then 3 a plus 2 is 14, and a squared is 16.", E('a = 4: 3a + 2 = 14 · a² = 16', 'g')]]]],
    real: ['Formulae', "A phone plan costs £10 plus 5p a text: C equals 10 plus 0 point 0 5 t. For 100 texts: £15.", E('C = 10 + 0.05 × 100 = £15', 'g')],
    turn: ["Your turn! If y is three, what is five y take away four? Pause and try it.", E('5y − 4, y = 3'), "5 times 3 is 15, take away 4 is 11.", E('11', 'g')],
    rec: ["Algebra uses letters for numbers. Expressions have no equals sign; equations do and can be solved. Write 3n not 3 × n, and substitute to find values.", ['Letters stand for numbers', 'Expression vs equation', '3n, n², n/4', 'Substitute values']],
    deep: ['Algebra lets one rule describe infinitely many cases, like area = length × width for every rectangle.', '3n means 3 × n: if n = 5, 3n is 15, not 35.']
  });

  LS('How do you present data using graphs, charts and diagrams?', 'how to choose and draw charts and graphs, including pie charts and scatter graphs.', {
    intro: ['Presenting data', 'Choose the right display', "The right chart depends on the data and the question. Every chart needs a title, labels and a sensible scale.", V.tbl([['Compare categories', 'Bar chart'], ['Change over time', 'Line graph'], ['Parts of a whole', 'Pie chart'], ['Two measurements', 'Scatter graph']], ['Job', 'Display'])],
    ex: [['Bar charts', 'Gaps between bars', [["Bar charts compare categories. Bars are the same width with gaps between them.", V.bars([['Bus', 8], ['Car', 12], ['Walk', 15], ['Bike', 5]], 16, 0, { title: 'How we travel to school', x: 'Way of travelling', y: 'Number of pupils' })]]],
      ['Pie charts', 'Angles from 360°', [["For 36 people, each person is 10 degrees. 12 chose pizza: 120 degrees.", E('360 ÷ 36 = 10° each → 12 × 10 = 120°', 'g')]]],
      ['Line graphs', 'Points joined in time order', [["Plot each value against time and join the points. The slope shows whether it is rising or falling.", V.note('Line graph: change over time')]]],
      ['Scatter graphs', 'Is there a link?', [["Plot pairs, like height and shoe size. If the points rise together, there is positive correlation.", V.cards(['Positive', 'Negative', 'None'], ['g', 'b', 'p'])]]]],
    turn: ["Your turn! In a pie chart of 60 people, how many degrees does each person get? Pause and try it.", E('360 ÷ 60'), "Six degrees each.", E('6°', 'g')],
    rec: ["Choose the display that suits the data. Bar charts compare, line graphs show change, pie charts show parts of a whole, scatter graphs show links. Always add a title, labels and a scale.", ['Bar: compare', 'Line: over time', 'Pie: parts of a whole', 'Scatter: is there a link?']],
    deep: ['A good chart makes the answer to your question obvious at a glance.', 'Scales that don’t start at zero, or uneven gaps, can make a chart misleading.']
  });
})();
