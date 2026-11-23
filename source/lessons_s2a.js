/* lessons_s2a.js: S2 Watch lessons for the 20 third level questions given to S2. */
(function () {
  'use strict';
  var BT = window.BT; if (!BT || !BT.L || !BT.L.lesson) return;
  var L = BT.L, V = BT.sv, LK = BT.lk, E = L.E, LS = L.lesson;
  var SPA = window.SPA, cubes = function (h) { return SPA && SPA.cubes ? SPA.cubes(h, 215, null, true) : ''; };

  LS('How do you round to three decimal places?', 'how to round numbers to one, two or three decimal places.', {
    intro: ['Decimal places', 'Digits after the point', "Rounding to three decimal places keeps three digits after the point. Look at the fourth digit to decide.", E('2.71828 → 2.718', 'g')],
    ex: [['Three decimal places', '5.43271', [["Keep five point four three two. The next digit is seven, so round up: five point four three three.", E('5.432|71 → 5.433', 'g')]]],
      ['Rounding down', '0.18249', [["Keep zero point one eight two. The next digit is four, so it stays: zero point one eight two.", E('0.182|49 → 0.182', 'g')]]],
      ['Carrying through nines', '3.9996', [["Keep three point nine nine nine. The next digit is six, so round up. Nine nine nine plus one carries all the way: four point zero zero zero.", E('3.9996 → 4.000', 'g') + V.note('Keep the zeros to show 3 d.p.')]]],
      ['Calculator answers', '22 ÷ 7', [["Twenty-two divided by seven is three point one four two eight five seven. To three decimal places: three point one four three.", E('3.142857… → 3.143', 'g')]]]],
    real: ['Science', "Scientists record a mass of zero point zero four five six seven kilograms to three decimal places as zero point zero four six.", E('0.04567 → 0.046 kg', 'g')],
    turn: ["Your turn! Round seven point zero zero four nine to three decimal places. Pause and try it.", E('7.0049'), "Keep seven point zero zero four. The next digit is nine, so round up: seven point zero zero five.", E('7.005', 'g')],
    rec: ["Count three digits after the point, look at the fourth, and round up if it is five or more. Keep any zeros at the end to show the accuracy.", ['Count 3 places after the point', 'Look at the 4th digit', '5 or more: round up', 'Keep end zeros']],
    deep: ['Rounding to decimal places is the same rule as rounding whole numbers, just further right.', '4.000 and 4 are equal, but 4.000 shows it was rounded to 3 decimal places.']
  });

  LS('How do you add and subtract positive and negative numbers?', 'how to add and subtract with negative numbers using a number line and sign rules.', {
    intro: ['Negative numbers', 'Left of zero', "On a number line, positive numbers are right of zero and negative numbers are left. Adding a positive moves right; subtracting a positive moves left.", V.nl(-8, 8, { tick: 1, lab: 2, marks: [[-5, 22], [3, 150]] })],
    ex: [['Adding a positive', '−5 + 9', [["Start at negative five and move nine to the right: four.", V.nl(-6, 6, { jumps: [[-5, 4, '+9']], marks: [[4, 150]] }) + E('−5 + 9 = 4', 'g')]]],
      ['Subtracting a positive', '3 − 8', [["Start at three and move eight left: negative five.", E('3 − 8 = −5', 'g')]]],
      ['Adding a negative', 'Same as subtracting', [["Adding negative four is the same as subtracting four. Six plus negative four is two.", E('6 + (−4) = 6 − 4 = 2', 'g')]]],
      ['Subtracting a negative', 'Same as adding', [["Subtracting negative four is the same as adding four. Negative two take away negative four is two.", E('−2 − (−4) = −2 + 4 = 2', 'g') + V.rule('Two signs together: same → +, different → −')]]]],
    real: ['Temperature and banking', "A bank balance of negative twenty pounds plus a deposit of fifty pounds is thirty pounds.", E('−£20 + £50 = £30', 'g')],
    turn: ["Your turn! Work out negative seven take away negative three. Pause and try it.", E('−7 − (−3)'), "Subtracting a negative means add three: negative four.", E('−4', 'g')],
    rec: ["Adding a positive moves right; subtracting moves left. Adding a negative is subtracting; subtracting a negative is adding.", ['+ positive: right', '− positive: left', '+ (−) = −', '− (−) = +']],
    deep: ['Removing a negative, like taking away a debt, increases the total, which is why − (−) is +.', 'Rewrite two signs as one before you start: 5 − (−2) becomes 5 + 2.']
  });

  LS('How do you multiply and divide positive and negative numbers?', 'the sign rules for multiplying and dividing with negative numbers.', {
    intro: ['Sign rules', 'Same or different?', "When you multiply or divide two numbers, look at their signs. The same signs give a positive answer; different signs give a negative answer.", V.tbl([['+ × +', '+'], ['− × −', '+'], ['+ × −', '−'], ['− × +', '−']], ['Signs', 'Answer'])],
    ex: [['Different signs', '−6 × 4', [["Six times four is twenty-four. The signs are different, so negative twenty-four.", E('−6 × 4 = −24', 'g')]]],
      ['Same signs', '−7 × −3', [["Seven times three is twenty-one. Both negative, so positive twenty-one.", E('−7 × −3 = 21', 'g')]]],
      ['Dividing', '−45 ÷ −9 and 32 ÷ −8', [["Negative forty-five divided by negative nine is positive five. Thirty-two divided by negative eight is negative four.", E('−45 ÷ −9 = 5 · 32 ÷ −8 = −4', 'g')]]],
      ['More than two', 'Count the negatives', [["Negative two times negative three times negative four: an odd number of negatives gives a negative answer. Negative twenty-four.", E('−2 × −3 × −4 = −24', 'g')]]]],
    real: ['Patterns', "Look at the pattern: three times negative two is negative six, two times negative two is negative four, one times negative two is negative two, zero, then negative one times negative two must be two. The answers go up by two each time.", E('… −4, −2, 0, 2', 'g')],
    turn: ["Your turn! Work out negative fifty-six divided by seven. Pause and try it.", E('−56 ÷ 7'), "Fifty-six divided by seven is eight. Different signs: negative eight.", E('−8', 'g')],
    rec: ["Multiply or divide the numbers as normal, then decide the sign: same signs positive, different signs negative.", ['Work out the number', 'Same signs: +', 'Different signs: −', 'Odd number of negatives: −']],
    deep: ['The sign rules keep number patterns going smoothly past zero.', 'These rules are for × and ÷ only. For + and −, use the number line.']
  });

  LS('How do you multiply to three decimal places?', 'how to multiply decimals and place the decimal point correctly.', {
    intro: ['Multiplying decimals', 'Ignore, multiply, replace', "Multiply as if there were no decimal points, then count the decimal places in the question and put the same number in the answer.", V.rule('Total decimal places in = decimal places out')],
    ex: [['One decimal', '3.7 × 6', [["Thirty-seven times six is two hundred and twenty-two. One decimal place: twenty-two point two.", E('3.7 × 6 = 22.2', 'g')]]],
      ['Two decimals', '0.45 × 0.3', [["Forty-five times three is one hundred and thirty-five. Two plus one is three decimal places: zero point one three five.", E('0.45 × 0.3 = 0.135', 'g')]]],
      ['Three decimal places', '2.125 × 4', [["Two thousand one hundred and twenty-five times four is eight thousand five hundred. Three decimal places: eight point five zero zero, which is eight point five.", E('2.125 × 4 = 8.5', 'g')]]],
      ['Estimate to check', '4.8 × 3.1', [["Estimate five times three is fifteen. Forty-eight times thirty-one is one thousand four hundred and eighty-eight, so fourteen point eight eight.", E('≈ 15 → 14.88 ✓', 'g')]]]],
    real: ['Shopping', "Two point three five kilograms of cheese at eight pounds a kilogram costs eighteen pounds eighty.", E('2.35 × 8 = £18.80', 'g')],
    turn: ["Your turn! Work out zero point zero six times zero point four. Pause and try it.", E('0.06 × 0.4'), "Six times four is twenty-four. Three decimal places: zero point zero two four.", E('0.024', 'g')],
    rec: ["Ignore the points and multiply. Count the decimal places in the question and put that many in the answer. Estimate to check.", ['Ignore the points', 'Multiply', 'Count decimal places', 'Estimate to check']],
    deep: ['Each decimal place means dividing by 10, so the places in the question add up in the answer.', 'Multiplying by a decimal less than 1 makes the answer smaller.']
  });

  LS('How do you divide to three decimal places?', 'how to divide decimals, including by a decimal, and give answers to three decimal places.', {
    intro: ['Dividing decimals', 'Keep the point in line', "To divide a decimal by a whole number, use short division and keep the point in line. Add zeros to keep going.", E('6.3 ÷ 4 = 1.575', 'g')],
    ex: [['By a whole number', '6.3 ÷ 4', [["Four into six is one, remainder two. Four into twenty-three is five, remainder three. Add zeros: four into thirty is seven, remainder two; four into twenty is five. One point five seven five.", E('6.300 ÷ 4 = 1.575', 'g')]]],
      ['By a decimal', '5.6 ÷ 0.07', [["Make the divisor a whole number by multiplying both by one hundred: five hundred and sixty divided by seven is eighty.", E('5.6 ÷ 0.07 = 560 ÷ 7 = 80', 'g')]]],
      ['Recurring answers', '10 ÷ 3', [["Ten divided by three is three point three three three and so on. To three decimal places: three point three three three.", E('10 ÷ 3 = 3.333…', 'g')]]],
      ['Rounding the answer', '2 ÷ 7', [["Two divided by seven is zero point two eight five seven. To three decimal places: zero point two eight six.", E('2 ÷ 7 ≈ 0.286', 'g')]]]],
    real: ['Sharing a bill', "A bill of forty-seven pounds fifty is shared between four people: eleven pounds eighty-seven point five, so about eleven pounds eighty-eight each.", E('£47.50 ÷ 4 = £11.875', 'g')],
    turn: ["Your turn! Work out four point two divided by zero point six. Pause and try it.", E('4.2 ÷ 0.6'), "Multiply both by ten: forty-two divided by six is seven.", E('7', 'g')],
    rec: ["Divide by a whole number with the point in line, adding zeros as needed. To divide by a decimal, multiply both numbers by ten or one hundred first. Round at the end.", ['Keep the point in line', 'Add zeros to continue', '÷ decimal: scale both', 'Round at the end']],
    deep: ['Scaling both numbers by the same amount doesn’t change the answer of a division.', 'Dividing by a number less than 1 makes the answer bigger.']
  });

  LS('How do you solve problems using multiples and factors?', 'how to use factors, multiples, the HCF and the LCM to solve real problems.', {
    intro: ['Factors and multiples in problems', 'Which one?', "If you are splitting things into equal groups, think factors and the highest common factor. If things repeat and you want them to line up, think multiples and the lowest common multiple.", V.cards(['Splitting → HCF', 'Repeating → LCM'], ['b', 'g'])],
    ex: [['HCF problem', 'Party bags', [["Forty-eight sweets and thirty-six balloons go into identical bags with nothing left. The most bags is the HCF: twelve. Each has four sweets and three balloons.", E('HCF(48, 36) = 12', 'g')]]],
      ['LCM problem', 'Two buses', [["One bus every twelve minutes, another every eighteen. Both leave at nine. They leave together again after the LCM: thirty-six minutes, at nine thirty-six.", E('LCM(12, 18) = 36 → 9:36', 'g')]]],
      ['Tiles', 'Biggest square tile', [["A floor is two hundred and forty by one hundred and eighty centimetres. The biggest square tile that fits exactly has side the HCF: sixty centimetres.", E('HCF(240, 180) = 60 cm', 'g')]]],
      ['Using prime factors', 'Bigger numbers', [["For seventy-two and one hundred and twenty: seventy-two is two cubed times three squared, one hundred and twenty is two cubed times three times five. HCF: two cubed times three, twenty-four.", E('HCF = 24', 'g')]]]],
    real: ['Gears', "A gear with twelve teeth turns a gear with twenty teeth. They line up again after the LCM: sixty teeth.", E('LCM(12, 20) = 60', 'g')],
    turn: ["Your turn! Hot dogs come in packs of eight and rolls in packs of six. What is the fewest of each so none are left over? Pause and try it.", E('LCM(8, 6)'), "Twenty-four: three packs of hot dogs and four packs of rolls.", E('24', 'g')],
    rec: ["Use the HCF to split things into the largest equal groups. Use the LCM when repeating things line up. Prime factors help with big numbers.", ['Equal groups → HCF', 'Lining up → LCM', 'List or use prime factors', 'Answer in context']],
    deep: ['The HCF can never be bigger than the smaller number; the LCM can never be smaller than the bigger number.', 'Read the question: is it asking for the number of groups or the size of each group?']
  });

  LS('What are powers and roots?', 'what powers and roots are, and how to calculate with them.', {
    intro: ['Powers', 'Repeated multiplication', "A power, or index, shows how many times a number is multiplied by itself. Five to the power three is five times five times five.", E('5³ = 5 × 5 × 5 = 125', 'g')],
    ex: [['Squares and cubes', 'Special powers', [["A number to the power two is squared; to the power three is cubed. Nine squared is eighty-one; three cubed is twenty-seven.", E('9² = 81 · 3³ = 27', 'g')]]],
      ['Higher powers', 'Powers of 2 and 10', [["Two to the power six is sixty-four. Ten to the power four is ten thousand.", E('2⁶ = 64 · 10⁴ = 10,000', 'g')]]],
      ['Roots', 'The inverse', [["A root undoes a power. The square root of one hundred and forty-four is twelve. The cube root of eight is two.", E('√144 = 12 · ∛8 = 2', 'g')]]],
      ['Estimating roots', 'Between two squares', [["The square root of fifty lies between seven and eight, because seven squared is forty-nine and eight squared is sixty-four. It's just over seven.", E('√50 ≈ 7.07', 'g')]]]],
    real: ['Area and volume', "A square garden with an area of eighty-one square metres has sides of nine metres. A cube with a volume of sixty-four cubic centimetres has edges of four.", E('√81 = 9 m · ∛64 = 4 cm', 'g')],
    turn: ["Your turn! Work out two to the power five, add the square root of forty-nine. Pause and try it.", E('2⁵ + √49'), "Thirty-two plus seven is thirty-nine.", E('39', 'g')],
    rec: ["A power is repeated multiplication. Roots undo powers. Estimate roots by finding the square numbers either side.", ['aⁿ = a × a × … (n times)', 'Squared: ², cubed: ³', '√ and ∛ undo them', 'Estimate between squares']],
    deep: ['Powers grow very fast: 2¹⁰ is already over a thousand.', '3² is 9, not 6: the power is not multiplied by the number.']
  });

  LS('How do you add and subtract fractions?', 'how to add and subtract fractions and mixed numbers with different denominators.', {
    intro: ['Same-size pieces', 'Common denominators', "You can only add or subtract fractions when the pieces are the same size, so find a common denominator first.", LK.fbar(1, 3, 280, 280) + LK.fbar(1, 4, 280, 150)],
    ex: [['Different denominators', '1/3 + 1/4', [["The lowest common denominator of three and four is twelve. One third is four twelfths; one quarter is three twelfths. Seven twelfths.", E('4/12 + 3/12 = 7/12', 'g')]]],
      ['Subtracting', '5/6 − 3/8', [["The LCM of six and eight is twenty-four. Twenty twenty-fourths take away nine twenty-fourths is eleven twenty-fourths.", E('20/24 − 9/24 = 11/24', 'g')]]],
      ['Mixed numbers', '2 3/4 + 1 2/5', [["Wholes: three. Fractions: fifteen twentieths plus eight twentieths is twenty-three twentieths, one and three twentieths. Total: four and three twentieths.", E('2 3/4 + 1 2/5 = 4 3/20', 'g')]]],
      ['Borrowing a whole', '3 1/6 − 1 2/3', [["Change to improper: nineteen sixths take away ten sixths is nine sixths: one and a half.", E('19/6 − 10/6 = 9/6 = 1 1/2', 'g')]]]],
    real: ['Time', "Ali spends three quarters of an hour on maths and two thirds of an hour reading. Together: nine twelfths plus eight twelfths, seventeen twelfths, one hour and five minutes.", E('3/4 + 2/3 = 1 5/12 h', 'g')],
    turn: ["Your turn! Work out three fifths plus one half. Pause and try it.", E('3/5 + 1/2'), "Six tenths plus five tenths is eleven tenths: one and one tenth.", E('1 1/10', 'g')],
    rec: ["Find a common denominator, change each fraction, then add or subtract the numerators. For mixed numbers, use wholes and parts, or improper fractions. Simplify.", ['Common denominator (LCM)', 'Change each fraction', 'Add or subtract the tops', 'Simplify the answer']],
    deep: ['Using the lowest common denominator keeps the numbers small, but any common denominator gives the right answer.', 'Never add the denominators: 1/3 + 1/4 is not 2/7.']
  });

  LS('How do you calculate fractions and percentages?', 'how to find fractions and percentages of amounts and convert between them.', {
    intro: ['Fractions and percentages', 'Two ways to describe part of a whole', "A fraction and a percentage can describe the same part. Three fifths is sixty per cent. Changing between them helps calculations.", E('3/5 = 60/100 = 60%', 'g')],
    ex: [['Fraction of an amount', '5/8 of £72', [["Seventy-two divided by eight is nine. Nine times five is forty-five pounds.", E('5/8 of £72 = £45', 'g')]]],
      ['Percentage of an amount', '35% of 240', [["Ten per cent is twenty-four. Thirty per cent is seventy-two, five per cent is twelve. Eighty-four.", E('35% of 240 = 84', 'g')]]],
      ['Fraction to percentage', '7/20', [["Multiply top and bottom by five: thirty-five hundredths, thirty-five per cent. Or divide seven by twenty: zero point three five.", E('7/20 = 35%', 'g')]]],
      ['Percentage to fraction', '45%', [["Forty-five hundredths, which simplifies to nine twentieths.", E('45% = 45/100 = 9/20', 'g')]]],
      ['Which is bigger?', '2/3 of 90 or 70% of 80', [["Two thirds of ninety is sixty. Seventy per cent of eighty is fifty-six. Two thirds of ninety is bigger.", E('60 > 56', 'g')]]]],
    turn: ["Your turn! Which is bigger: three quarters of sixty, or forty per cent of one hundred and twenty? Pause and try it.", E('¾ of 60 or 40% of 120'), "Forty-five and forty-eight. Forty per cent of one hundred and twenty is bigger.", E('48 > 45', 'g')],
    rec: ["For a fraction of an amount, divide by the bottom and multiply by the top. Build percentages from ten per cent. Convert using hundredths.", ['Fraction: ÷ bottom, × top', 'Percent: build from 10%', 'Fraction ↔ percentage via /100', 'Compare in the same form']],
    deep: ['A percentage is a fraction out of 100, so any fraction can become a percentage by scaling to hundredths.', 'Simplify fractions from percentages fully: 45/100 = 9/20.']
  });

  LS('What are ratios?', 'what a ratio is, how to simplify it, and how to share in a ratio.', {
    intro: ['Ratio', 'Comparing parts', "A ratio compares quantities in order. For every two cups of flour there is one cup of sugar: flour to sugar is two to one.", E('flour : sugar = 2 : 1', 'g')],
    ex: [['Simplifying', 'Divide by a common factor', [["Fifteen to twenty-five: divide by five, three to five.", E('15 : 25 = 3 : 5', 'g')]]],
      ['Equivalent ratios', 'Scaling up', [["Two to one is the same as six to three and ten to five.", E('2 : 1 = 6 : 3 = 10 : 5', 'g')]]],
      ['Sharing', '£56 in 3 : 4', [["Seven parts. One part is eight pounds. Three parts is twenty-four pounds, four parts is thirty-two pounds.", E('£24 and £32', 'g')]]],
      ['Ratio and fractions', 'Part of the whole', [["In three to four, the first share is three sevenths of the total and the second is four sevenths.", E('3 : 4 → 3/7 and 4/7', 'g')]]]],
    real: ['Maps', "A map scale of one to fifty thousand is a ratio: one centimetre on the map is fifty thousand centimetres, half a kilometre, on the ground.", E('1 : 50,000 → 1 cm = 0.5 km', 'g')],
    turn: ["Your turn! Simplify the ratio eighteen to twelve. Pause and try it.", E('18 : 12'), "Divide by six: three to two.", E('3 : 2', 'g')],
    rec: ["A ratio compares quantities in order. Simplify by dividing, scale by multiplying, and share by finding the value of one part.", ['Order matters', 'Simplify: ÷ common factor', 'Scale: × both parts', 'Share: total ÷ parts']],
    deep: ['A ratio compares parts with parts; a fraction compares a part with the whole.', 'In 3 : 4, the fractions are 3/7 and 4/7, not 3/4.']
  });

  LS('How do you find the best value for money?', 'how to compare prices and offers to find the best value.', {
    intro: ['Best value', 'Compare fairly', "To find the best value, compare the same amount: the price of one item, one hundred grams or one litre.", V.rule('Work out the price per unit.')],
    ex: [['Price per unit', 'Cereal boxes', [["Five hundred grams for two pounds fifteen, or seven hundred and fifty grams for three pounds. Per hundred grams: forty-three pence, and forty pence. The bigger box is better value.", E('43p vs 40p per 100 g', 'g')]]],
      ['Amount per pound', 'Another way', [["Instead, find how much you get per pound: two hundred and thirty-three grams, or two hundred and fifty grams. More per pound is better value.", E('233 g vs 250 g per £1', 'g')]]],
      ['Offers', 'Buy one get one half price', [["Two pizzas at four pounds each with the second half price cost six pounds: three pounds each. Three for ten pounds is three pounds thirty-three each. The first deal is better.", E('£3.00 vs £3.33 each', 'g')]]],
      ['Percentages off', '25% off vs £5 off', [["On a twenty-four pound jumper, twenty-five per cent off saves six pounds, better than five pounds off.", E('£6 > £5', 'g')]]]],
    real: ['Phone contracts', "Plan A is twelve pounds a month; plan B is one hundred and twenty pounds a year. Over a year, A costs one hundred and forty-four pounds, so B is cheaper.", E('£144 vs £120', 'g')],
    turn: ["Your turn! Which is better: six cans for three pounds sixty, or ten cans for five pounds eighty? Pause and try it.", E('per can'), "Sixty pence and fifty-eight pence per can. Ten cans is better value.", E('10 for £5.80', 'g')],
    rec: ["Compare like with like: price per unit or amount per pound. Work out what offers really cost per item. Consider whether you will use it all.", ['Price per unit', 'Or amount per £1', 'Work out offers fully', 'Check you need it all']],
    deep: ['Unit pricing works because it turns different packs into the same comparison.', 'Bigger isn’t always cheaper, and an offer is only good value if you use what you buy.']
  });

  LS('How do you calculate distance, speed and time?', 'how to use the formulas linking distance, speed and time.', {
    intro: ['Three linked quantities', 'D, S and T', "Distance, speed and time are linked. If you know two, you can find the third.", V.tbl([['Distance', 'S × T'], ['Speed', 'D ÷ T'], ['Time', 'D ÷ S']], ['To find', 'Use'])],
    ex: [['Speed', 'A train', [["A train travels two hundred and seventy kilometres in three hours: ninety kilometres per hour.", E('270 ÷ 3 = 90 km/h', 'g')]]],
      ['Distance', 'A cyclist', [["A cyclist rides at eighteen kilometres per hour for two hours and twenty minutes. Twenty minutes is a third of an hour, so two and a third hours: forty-two kilometres.", E('18 × 2⅓ = 42 km', 'g')]]],
      ['Time', 'A car', [["A car travels two hundred and ten miles at sixty miles per hour: three point five hours, which is three hours thirty minutes.", E('210 ÷ 60 = 3.5 h = 3 h 30 min', 'g')]]],
      ['Changing units', 'Metres per second', [["Ten metres per second is thirty-six thousand metres per hour: thirty-six kilometres per hour.", E('10 m/s = 36 km/h', 'g')]]]],
    real: ['Running', "A runner completes five kilometres in twenty-five minutes. That is twelve kilometres per hour.", E('5 ÷ (25/60) = 12 km/h', 'g')],
    turn: ["Your turn! How long does it take to cycle thirty kilometres at twelve kilometres per hour? Pause and try it.", E('30 ÷ 12'), "Two point five hours: two hours thirty minutes.", E('2 h 30 min', 'g')],
    rec: ["Use D = S × T, S = D ÷ T and T = D ÷ S. Keep units matching, and change minutes to hours.", ['D = S × T', 'S = D ÷ T', 'T = D ÷ S', 'Minutes ÷ 60 for hours']],
    deep: ['The units of speed show the formula: km per hour means km ÷ hours.', '0.5 hours is 30 minutes, not 50 minutes.']
  });

  LS('How do you calculate time across hours and days?', 'how to work out durations and finishing times that cross hours, midnight and days.', {
    intro: ['Time is not decimal', 'Sixties and twenty-fours', "There are sixty minutes in an hour and twenty-four hours in a day, so we can't use column subtraction like normal numbers.", V.rule('Count on: to the next hour, then hours, then minutes.')],
    ex: [['Across hours', '09:45 to 13:20', [["Fifteen minutes to ten. Three hours to thirteen hundred. Twenty more minutes. Three hours thirty-five minutes.", E('15 min + 3 h + 20 min = 3 h 35 min', 'g')]]],
      ['Across midnight', '22:40 to 06:15', [["Twenty minutes to twenty-three hundred. One hour to midnight. Six hours to six. Fifteen minutes. Seven hours thirty-five minutes.", E('20 min + 1 h + 6 h + 15 min = 7 h 35 min', 'g')]]],
      ['Across days', 'Monday 18:00 to Wednesday 09:30', [["Monday eighteen hundred to Tuesday eighteen hundred is twenty-four hours. Tuesday eighteen hundred to Wednesday nine thirty is fifteen and a half hours. Thirty-nine and a half hours.", E('24 h + 15 h 30 min = 39 h 30 min', 'g')]]],
      ['Finishing time', 'Adding a duration', [["A flight leaves at twenty-one fifty and lasts five hours forty minutes. Add five hours: two fifty. Add forty minutes: three thirty the next day.", E('21:50 + 5 h 40 min = 03:30', 'g')]]]],
    real: ['Shift work', "A nurse works from nineteen thirty to seven forty-five the next morning: twelve hours fifteen minutes.", E('12 h 15 min', 'g')],
    turn: ["Your turn! How long is it from twenty-three fifteen to one forty? Pause and try it.", E('23:15 → 01:40'), "Forty-five minutes to midnight, one hour forty to one forty. Two hours twenty-five minutes.", E('2 h 25 min', 'g')],
    rec: ["Count on to the next hour, then whole hours, then the minutes left. Cross midnight by counting to twenty-four hundred. For days, count whole days of twenty-four hours.", ['Count on to the hour', 'Then whole hours', 'Then minutes', 'Midnight: count to 24:00']],
    deep: ['A number line for time makes crossing midnight easy to see.', '1.5 hours is 1 hour 30 minutes; never write it as 1 hour 50.']
  });

  LS('How do you convert units of area and volume?', 'how to convert square and cubic units, like cm² to m² and cm³ to litres.', {
    intro: ['Area units are squared', 'Not just times 100', "One metre is one hundred centimetres, but one square metre is one hundred times one hundred: ten thousand square centimetres.", E('1 m² = 100 × 100 = 10,000 cm²', 'g')],
    ex: [['Area', 'cm² to mm²', [["One centimetre is ten millimetres, so one square centimetre is ten times ten: one hundred square millimetres.", E('1 cm² = 100 mm²', 'g')]]],
      ['Area', 'm² to cm²', [["Three point five square metres is three point five times ten thousand: thirty-five thousand square centimetres.", E('3.5 m² = 35,000 cm²', 'g')]]],
      ['Volume', 'm³ to cm³', [["One cubic metre is one hundred times one hundred times one hundred: one million cubic centimetres.", E('1 m³ = 1,000,000 cm³', 'g')]]],
      ['Capacity', 'cm³ to litres', [["One thousand cubic centimetres is one litre. A tank of two hundred and forty thousand cubic centimetres holds two hundred and forty litres.", E('240,000 cm³ = 240 l', 'g')]]]],
    real: ['A fish tank', "A tank sixty by thirty by forty centimetres has a volume of seventy-two thousand cubic centimetres: seventy-two litres.", E('60 × 30 × 40 = 72,000 cm³ = 72 l', 'g')],
    turn: ["Your turn! How many square centimetres are in two square metres? Pause and try it.", E('2 m² = ? cm²'), "Two times ten thousand: twenty thousand square centimetres.", E('20,000 cm²', 'g')],
    rec: ["Square the length conversion for area, and cube it for volume. One cubic metre is a million cubic centimetres; one thousand cubic centimetres is one litre.", ['Area: square the factor', 'Volume: cube the factor', '1 m² = 10,000 cm²', '1,000 cm³ = 1 litre']],
    deep: ['A square metre is 100 cm long and 100 cm wide, which is why the factor is squared.', 'The most common mistake is converting m² to cm² by multiplying by 100 instead of 10,000.']
  });

  LS('What are three-dimensional objects?', 'how to describe 3D objects by their faces, edges and vertices, and recognise prisms and pyramids.', {
    intro: ['3D objects', 'Solid shapes', "Three-dimensional objects have length, width and height. We describe them by their faces, edges and vertices.", cubes([[1, 1], [1, 1]])],
    ex: [['Prisms', 'Same cross-section', [["A prism has the same cross-section all the way through. Cuboids, triangular prisms and hexagonal prisms are all prisms.", V.tbl([['Cube', '6', '12', '8'], ['Triangular prism', '5', '9', '6'], ['Hexagonal prism', '8', '18', '12']], ['Prism', 'Faces', 'Edges', 'Vertices'])]]],
      ['Pyramids', 'Coming to a point', [["A pyramid has a base and triangular faces meeting at a point. A square-based pyramid has five faces, eight edges and five vertices.", V.tbl([['Tetrahedron', '4', '6', '4'], ['Square-based pyramid', '5', '8', '5']], ['Pyramid', 'Faces', 'Edges', 'Vertices'])]]],
      ['Euler’s rule', 'F + V − E = 2', [["For these solids, faces plus vertices take away edges always equals two. A cube: six plus eight take away twelve is two.", E('F + V − E = 2', 'g')]]],
      ['Curved solids', 'Cylinder, cone, sphere', [["A cylinder has two flat circles and one curved surface. A cone has one circle and one curved surface. A sphere has one curved surface.", V.cards(['Cylinder', 'Cone', 'Sphere'], ['b', 'p', 'g'])]]]],
    turn: ["Your turn! A pentagonal prism has seven faces and ten vertices. How many edges? Pause and use Euler's rule.", E('7 + 10 − E = 2'), "Seventeen take away E equals two, so E is fifteen.", E('15 edges', 'g')],
    rec: ["Describe 3D objects by faces, edges and vertices. Prisms have a constant cross-section; pyramids come to a point. For polyhedra, F + V − E = 2.", ['Faces, edges, vertices', 'Prism: same cross-section', 'Pyramid: base + point', 'F + V − E = 2']],
    deep: ['Euler’s rule works for every solid with flat faces and no holes.', 'A cylinder is not a prism in the strict sense because its cross-section is curved, but it behaves like one for volume.']
  });

  LS('How do you find angles between lines?', 'how to find angles where lines cross and where a line crosses parallel lines.', {
    intro: ['Angles between lines', 'Using angle facts', "When lines meet or cross, the angles follow rules. We use them to find missing angles and give reasons.", V.tbl([['Straight line', '180°'], ['Round a point', '360°'], ['Vertically opposite', 'equal']], ['Fact', 'Rule'])],
    ex: [['Crossing lines', 'Vertically opposite', [["Two lines cross. One angle is seventy-four degrees. The opposite angle is also seventy-four. The others are one hundred and six each.", E('74°, 106°, 74°, 106°', 'g')]]],
      ['Parallel lines', 'Corresponding and alternate', [["A line crosses two parallel lines. Corresponding angles are equal, alternate angles are equal, and co-interior angles add to one hundred and eighty degrees.", V.cards(['F: equal', 'Z: equal', 'C: add to 180°'], ['b', 'p', 'g'])]]],
      ['A chain of reasons', 'Step by step', [["An angle is sixty-two degrees. Its alternate angle is sixty-two, and the angle next to that on a straight line is one hundred and eighteen.", E('62° → 62° (alternate) → 118° (straight line)', 'g')]]]],
    turn: ["Your turn! Co-interior angles: one is ninety-five degrees. Find the other. Pause and think.", E('?'), "They add to one hundred and eighty: eighty-five degrees.", E('85°', 'g')],
    rec: ["Use straight-line, round-a-point and vertically opposite facts, and the parallel line rules. Give a reason for each angle.", ['Straight line 180°', 'Vertically opposite equal', 'F and Z equal', 'C adds to 180°']],
    deep: ['Angle problems become chains: each angle you find unlocks the next.', 'Only use parallel line rules when the lines are marked with arrows.']
  });

  LS('How do you generate a rule from a pattern?', 'how to find a rule for a pattern and use it to predict terms.', {
    intro: ['Patterns', 'Spot the change', "A pattern changes in a regular way. Find how it changes each time, then write a rule.", V.cards(['4', '7', '10', '13', '…'], ['b'])],
    ex: [['Term-to-term rule', 'Add 3 each time', [["Four, seven, ten, thirteen: the term-to-term rule is add three.", E('+3 each time', 'g')]]],
      ['Position-to-term rule', 'Any term directly', [["It goes up in threes, so start with three n. For n equals one, three n is three, but the first term is four: add one. Rule: three n plus one.", E('3n + 1', 'g')]]],
      ['Matchstick patterns', 'Squares in a row', [["One square uses four matches, two squares seven, three squares ten. Rule: three n plus one. Twenty squares need sixty-one matches.", E('3 × 20 + 1 = 61', 'g')]]],
      ['Testing', 'Is 100 in the pattern?', [["Three n plus one equals one hundred means three n equals ninety-nine, n equals thirty-three. Yes, it's the thirty-third term.", E('3n + 1 = 100 → n = 33 ✓', 'g')]]]],
    turn: ["Your turn! Find the rule for five, nine, thirteen, seventeen. Pause and try it.", E('5, 9, 13, 17'), "Up in fours, so four n, plus one: four n plus one.", E('4n + 1', 'g')],
    rec: ["Find the difference to get the number in front of n, then adjust to match the first term. Use the rule to find any term or test numbers.", ['Find the difference', 'That × n', 'Adjust to the first term', 'Test and predict']],
    deep: ['A position-to-term rule jumps straight to any term, unlike the term-to-term rule.', 'Check your rule with at least two terms, not just the first.']
  });

  LS('What is algebra?', 'what algebra is, and how letters, expressions and equations work.', {
    intro: ['Algebra', 'Letters for numbers', "Algebra uses letters to stand for numbers we don't know, or numbers that can change. It lets us write general rules.", E('n + n + n = 3n', 'g')],
    ex: [['Expressions', 'No equals sign', [["An expression is a mix of letters and numbers, like two x plus five. It has no equals sign.", E('2x + 5', 'b')]]],
      ['Equations', 'With an equals sign', [["An equation says two things are equal, like two x plus five equals seventeen. We can solve it: x equals six.", E('2x + 5 = 17 → x = 6', 'g')]]],
      ['Writing algebra', 'Conventions', [["We write three times n as three n, n times n as n squared, and n divided by four as n over four.", V.tbl([['3 × n', '3n'], ['n × n', 'n²'], ['n ÷ 4', 'n/4'], ['1 × n', 'n']], ['Means', 'Write'])]]],
      ['Substituting', 'Put in a value', [["If a is four, then three a plus two is fourteen, and a squared is sixteen.", E('a = 4: 3a + 2 = 14 · a² = 16', 'g')]]]],
    real: ['Formulae', "A phone plan costs ten pounds plus five pence a text: C equals ten plus zero point zero five t. For one hundred texts: fifteen pounds.", E('C = 10 + 0.05 × 100 = £15', 'g')],
    turn: ["Your turn! If y is three, what is five y take away four? Pause and try it.", E('5y − 4, y = 3'), "Five times three is fifteen, take away four is eleven.", E('11', 'g')],
    rec: ["Algebra uses letters for numbers. Expressions have no equals sign; equations do and can be solved. Write 3n not 3 × n, and substitute to find values.", ['Letters stand for numbers', 'Expression vs equation', '3n, n², n/4', 'Substitute values']],
    deep: ['Algebra lets one rule describe infinitely many cases, like area = length × width for every rectangle.', '3n means 3 × n: if n = 5, 3n is 15, not 35.']
  });

  LS('How do you present data using graphs, charts and diagrams?', 'how to choose and draw charts and graphs, including pie charts and scatter graphs.', {
    intro: ['Presenting data', 'Choose the right display', "The right chart depends on the data and the question. Every chart needs a title, labels and a sensible scale.", V.tbl([['Compare categories', 'Bar chart'], ['Change over time', 'Line graph'], ['Parts of a whole', 'Pie chart'], ['Two measurements', 'Scatter graph']], ['Job', 'Display'])],
    ex: [['Bar charts', 'Gaps between bars', [["Bar charts compare categories. Bars are the same width with gaps between them.", V.bars([['Bus', 8], ['Car', 12], ['Walk', 15], ['Bike', 5]], 16, 0, { title: 'How we travel to school', x: 'Way of travelling', y: 'Number of pupils' })]]],
      ['Pie charts', 'Angles from 360°', [["For thirty-six people, each person is ten degrees. Twelve chose pizza: one hundred and twenty degrees.", E('360 ÷ 36 = 10° each → 12 × 10 = 120°', 'g')]]],
      ['Line graphs', 'Points joined in time order', [["Plot each value against time and join the points. The slope shows whether it is rising or falling.", V.note('Line graph: change over time')]]],
      ['Scatter graphs', 'Is there a link?', [["Plot pairs, like height and shoe size. If the points rise together, there is positive correlation.", V.cards(['Positive', 'Negative', 'None'], ['g', 'b', 'p'])]]]],
    turn: ["Your turn! In a pie chart of sixty people, how many degrees does each person get? Pause and try it.", E('360 ÷ 60'), "Six degrees each.", E('6°', 'g')],
    rec: ["Choose the display that suits the data. Bar charts compare, line graphs show change, pie charts show parts of a whole, scatter graphs show links. Always add a title, labels and a scale.", ['Bar: compare', 'Line: over time', 'Pie: parts of a whole', 'Scatter: is there a link?']],
    deep: ['A good chart makes the answer to your question obvious at a glance.', 'Scales that don’t start at zero, or uneven gaps, can make a chart misleading.']
  });
})();
