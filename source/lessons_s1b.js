/* lessons_s1b.js: the older S1 Watch lessons rebuilt in full with more worked examples,
   then each S1 topic's Watch lesson put together: question lessons first, topic lessons after. */
(function () {
  'use strict';
  var BT = window.BT; if (!BT || !BT.L || !BT.L.lesson) return;
  var L = BT.L, V = BT.sv, LK = BT.lk, E = L.E, LS = L.lesson;
  var SPA = window.SPA, cubes = function (h) { return SPA && SPA.cubes ? SPA.cubes(h, 215, null, true) : ''; };

  /* ---------- 801 ---------- */
  LS('Calculating with decimals', 'how to multiply and divide decimals, and use estimation to place the point.', {
    intro: ['Decimals in calculations', 'Same methods, careful with the point', "We multiply and divide decimals with the same methods as whole numbers. The key is putting the decimal point in the right place.", V.rule('Estimate first, so you know where the point goes.')],
    ex: [['Multiplying by a whole number', '4.6 × 7', [["Forty-six times seven is three hundred and twenty-two. The question has one decimal place, so the answer has one: thirty-two point two.", E('46 × 7 = 322 → 4.6 × 7 = 32.2', 'g')]]],
      ['Decimal × decimal', '0.6 × 0.07', [["Six times seven is forty-two. There are three decimal places in the question altogether, so zero point zero four two.", E('0.6 × 0.07 = 0.042', 'g')]]],
      ['Dividing by a whole number', '9.36 ÷ 4', [["Use short division, keeping the point in line. Four into nine is two, remainder one. Four into thirteen is three, remainder one. Four into sixteen is four. Two point three four.", E('9.36 ÷ 4 = 2.34', 'g')]]],
      ['Dividing by a decimal', '7.2 ÷ 0.3', [["Multiply both numbers by ten so you divide by a whole number: seventy-two divided by three is twenty-four.", E('7.2 ÷ 0.3 = 72 ÷ 3 = 24', 'g')]]]],
    real: ['Shopping', "Three point five kilograms of apples at one pound twenty a kilogram costs four pounds twenty.", E('3.5 × £1.20 = £4.20', 'g')],
    turn: ["Your turn! Work out two point four times zero point five. Pause and try it.", E('2.4 × 0.5'), "Twenty-four times five is one hundred and twenty. Two decimal places: one point two zero, which is one point two.", E('1.2', 'g')],
    rec: ["Multiply as whole numbers, then put back the total decimal places. Divide with the point in line. To divide by a decimal, multiply both numbers by ten first.", ['× : count decimal places', '÷ : keep the point in line', '÷ decimal: scale both by 10', 'Estimate first']],
    deep: ['Multiplying both numbers in a division by ten keeps the answer the same, because the ratio between them doesn’t change.', 'Multiplying by a number less than 1 makes the answer smaller: 0.6 × 0.07 is tiny.']
  });

  LS('Rounding and estimating', 'how to round to the nearest 10, 100, 1,000 and to decimal places, and estimate calculations.', {
    intro: ['Rounding', 'Simpler numbers', "Rounding replaces a number with a simpler one close to it. The rule: look at the next digit; five or more rounds up.", V.rule('Next digit 5 or more: round up.')],
    ex: [['Whole numbers', '36,482', [["To the nearest ten: thirty-six thousand, four hundred and eighty. Hundred: thirty-six thousand, five hundred. Thousand: thirty-six thousand.", V.tbl([['10', '36,480'], ['100', '36,500'], ['1,000', '36,000']], ['Nearest', 'Rounded'])]]],
      ['Decimals', '7.846', [["To one decimal place: seven point eight. To two decimal places: seven point eight five.", E('7.846 → 7.8 (1 d.p.) → 7.85 (2 d.p.)', 'g')]]],
      ['Estimating', '387 × 52', [["Round to four hundred times fifty: twenty thousand. The exact answer, twenty thousand, one hundred and twenty-four, is close.", E('387 × 52 ≈ 400 × 50 = 20,000', 'g')]]]],
    real: ['Crowds', "A stadium crowd of forty-two thousand, seven hundred and eighteen is reported as about forty-three thousand.", E('42,718 → 43,000', 'g')],
    turn: ["Your turn! Round sixteen point nine five to one decimal place. Pause and try it.", E('16.95'), "The next digit is five, so round up: seventeen point zero.", E('17.0', 'g')],
    rec: ["Look at the digit after the one you round to: five or more rounds up. Round to one significant figure to estimate calculations.", ['Find the place', 'Look at the next digit', 'Round up or keep', 'Estimate with easy numbers']],
    deep: ['Rounding is about which number is nearer, so 5 rounds up by agreement because it is exactly halfway.', 'Rounding 9s carries: 16.95 to 1 d.p. becomes 17.0, not 16.10.']
  });

  /* ---------- 802 ---------- */
  LS('Negative numbers', 'how to order and calculate with negative numbers.', {
    intro: ['Below zero', 'The number line', "Negative numbers are less than zero. On a number line they sit to the left of zero. The further left, the smaller.", V.nl(-6, 6, { marks: [[-4, 22], [3, 150]] })],
    ex: [['Ordering', 'Smallest to largest', [["Order four, negative seven, zero, negative two: negative seven, negative two, zero, four.", E('−7 < −2 < 0 < 4', 'g')]]],
      ['Adding and subtracting', 'Moving on the line', [["Negative three add eight: move eight right to five. Two take away six: move six left to negative four.", E('−3 + 8 = 5 · 2 − 6 = −4', 'g')]]],
      ['Two signs', 'Minus a negative', [["Subtracting a negative is the same as adding. Five take away negative three is eight.", E('5 − (−3) = 5 + 3 = 8', 'g')]]],
      ['Multiplying and dividing', 'Sign rules', [["Same signs give a positive; different signs give a negative. Negative four times negative five is twenty. Negative eighteen divided by three is negative six.", E('−4 × −5 = 20 · −18 ÷ 3 = −6', 'g')]]]],
    real: ['Temperature', "It was negative five degrees at night and rose by twelve degrees. The temperature became seven degrees.", E('−5 + 12 = 7°C', 'g')],
    turn: ["Your turn! Work out negative six take away four. Pause and try it.", E('−6 − 4'), "Start at negative six and move four left: negative ten.", E('−10', 'g')],
    rec: ["Negative numbers are left of zero. Adding moves right, subtracting moves left. Subtracting a negative means add. Same signs multiply to positive.", ['Left of zero = negative', '+ moves right, − moves left', '− (−) = +', 'Same signs ×: +']],
    deep: ['Taking away a debt is like being given money, which is why subtracting a negative adds.', '−7 is smaller than −2, even though 7 is bigger than 2.']
  });

  LS('Powers, roots and prime factors', 'how to work with powers and roots, and write numbers as products of prime factors.', {
    intro: ['Powers', 'Repeated multiplication', "A power shows repeated multiplication. Two to the power five means two times itself five times: thirty-two.", E('2⁵ = 2 × 2 × 2 × 2 × 2 = 32', 'g')],
    ex: [['Squares and cubes', 'Powers of 2 and 3', [["Seven squared is forty-nine. Four cubed is sixty-four.", E('7² = 49 · 4³ = 64', 'g')]]],
      ['Roots', 'Undo powers', [["The square root of eighty-one is nine. The cube root of one hundred and twenty-five is five.", E('√81 = 9 · ∛125 = 5', 'g')]]],
      ['Prime factors', 'A factor tree', [["Seventy-two splits into eight times nine. Eight is two cubed; nine is three squared. So seventy-two is two cubed times three squared.", E('72 = 2 × 2 × 2 × 3 × 3 = 2³ × 3²', 'g')]]],
      ['Using prime factors', 'HCF and LCM', [["Twelve is two squared times three; eighteen is two times three squared. The HCF uses the common primes: two times three, six. The LCM uses the highest powers: two squared times three squared, thirty-six.", E('HCF = 6 · LCM = 36', 'g')]]]],
    real: ['Computers', "Computer memory comes in powers of two: two hundred and fifty-six, five hundred and twelve, one thousand and twenty-four.", E('2⁸ = 256 · 2¹⁰ = 1,024', 'g')],
    turn: ["Your turn! Write sixty as a product of prime factors. Pause and try it.", E('60 = ?'), "Sixty is two times two times three times five: two squared times three times five.", E('2² × 3 × 5', 'g')],
    rec: ["Powers are repeated multiplication; roots undo them. Use a factor tree to write numbers as products of primes, and use them to find the HCF and LCM.", ['aⁿ: a multiplied n times', '√ and ∛ undo powers', 'Factor tree to primes', 'HCF: shared primes · LCM: highest powers']],
    deep: ['Every whole number has exactly one prime factorisation, like a fingerprint.', '2⁵ is 32, not 10. The power is not a multiplier.']
  });

  LS('Powers, negatives and BODMAS', 'how to use the order of operations with powers and negative numbers.', {
    intro: ['BODMAS', 'The agreed order', "Brackets, Orders, Division and Multiplication, Addition and Subtraction. Orders means powers and roots.", V.tbl([['B', 'Brackets'], ['O', 'Orders: powers, roots'], ['D M', 'left to right'], ['A S', 'left to right']], ['', 'Meaning'])],
    ex: [['Powers first', '3 + 2 × 4²', [["Orders: four squared is sixteen. Multiply: two times sixteen is thirty-two. Add: thirty-five.", E('3 + 2 × 16 = 3 + 32 = 35', 'g')]]],
      ['Brackets and powers', '(3 + 2)²', [["Brackets first: five. Then square: twenty-five.", E('(3 + 2)² = 5² = 25', 'g')]]],
      ['Negatives and powers', '(−3)² and −3²', [["Negative three, in brackets, squared is negative three times negative three: nine. But negative three squared without brackets means negative of three squared: negative nine.", E('(−3)² = 9 · −3² = −9', 'g')]]],
      ['A mixed one', '20 − 4 × (−2)', [["Multiply first: four times negative two is negative eight. Twenty take away negative eight is twenty-eight.", E('20 − (−8) = 28', 'g')]]]],
    turn: ["Your turn! Work out ten take away two cubed. Pause and try it.", E('10 − 2³'), "Two cubed is eight. Ten take away eight is two.", E('2', 'g')],
    rec: ["Follow BODMAS: brackets, orders, then division and multiplication, then addition and subtraction. Watch brackets around negative numbers.", ['Brackets first', 'Then powers and roots', '× ÷ left to right', '+ − left to right']],
    deep: ['Without an agreed order, 3 + 2 × 4² could give several answers; BODMAS makes it one.', '(−3)² = 9 but −3² = −9. The bracket decides what is squared.']
  });

  /* ---------- 803 ---------- */
  LS('Adding and subtracting mixed numbers', 'how to add and subtract mixed numbers with different denominators.', {
    intro: ['Mixed numbers', 'Wholes and parts', "To add or subtract mixed numbers, you can deal with the wholes and the fractions separately, or change them to improper fractions.", E('2 1/3 + 1 1/2', 'b')],
    ex: [['Wholes and parts', '2 1/3 + 1 1/2', [["Add the wholes: three. Add the fractions with a common denominator: two sixths plus three sixths is five sixths. Three and five sixths.", E('3 + 5/6 = 3 5/6', 'g')]]],
      ['Carrying a whole', '1 3/4 + 2 2/3', [["Wholes: three. Fractions: nine twelfths plus eight twelfths is seventeen twelfths, which is one and five twelfths. Total: four and five twelfths.", E('3 + 1 5/12 = 4 5/12', 'g')]]],
      ['Subtracting', '5 1/4 − 2 2/3', [["Change to improper fractions: twenty-one quarters take away eight thirds. Common denominator twelve: sixty-three twelfths take away thirty-two twelfths is thirty-one twelfths: two and seven twelfths.", E('63/12 − 32/12 = 31/12 = 2 7/12', 'g')]]]],
    real: ['Wood', "A plank is four and a half metres. A piece of one and three quarters metres is cut off. Two and three quarters metres are left.", E('4 1/2 − 1 3/4 = 2 3/4 m', 'g')],
    turn: ["Your turn! Work out three and two fifths plus one and one half. Pause and try it.", E('3 2/5 + 1 1/2'), "Wholes: four. Fractions: four tenths plus five tenths is nine tenths. Four and nine tenths.", E('4 9/10', 'g')],
    rec: ["Add or subtract the wholes and the fractions, using a common denominator. If subtracting is awkward, change to improper fractions first.", ['Common denominator', 'Wholes and fractions separately', 'Carry if the fraction is over 1', 'Or use improper fractions']],
    deep: ['Changing to improper fractions always works, even when the fraction part is too small to subtract.', 'When the fraction part adds to more than 1, carry a whole into the whole-number part.']
  });

  LS('Multiplying and dividing fractions', 'how to multiply and divide fractions and mixed numbers.', {
    intro: ['Multiplying fractions', 'Tops and bottoms', "To multiply fractions, multiply the numerators and multiply the denominators. Simplify at the end, or cancel first.", E('2/3 × 3/5 = 6/15 = 2/5', 'g')],
    ex: [['Cancelling first', '4/9 × 3/8', [["Four and eight share a factor of four; three and nine share three. Cancel: one third times one half is one sixth.", E('4/9 × 3/8 = 1/3 × 1/2 = 1/6', 'g')]]],
      ['Dividing', 'Keep, change, flip', [["Three quarters divided by two fifths: keep three quarters, change to multiply, flip to five halves. Fifteen eighths, which is one and seven eighths.", E('3/4 × 5/2 = 15/8 = 1 7/8', 'g')]]],
      ['Mixed numbers', 'Change first', [["Two and a half times one and a third: five halves times four thirds is twenty sixths, which is three and one third.", E('5/2 × 4/3 = 20/6 = 3 1/3', 'g')]]]],
    real: ['Recipes', "A recipe needs three quarters of a cup of sugar. Two thirds of the recipe needs half a cup.", E('2/3 × 3/4 = 1/2', 'g')],
    turn: ["Your turn! Work out five sixths divided by five twelfths. Pause and try it.", E('5/6 ÷ 5/12'), "Flip to twelve fifths: five sixths times twelve fifths is sixty thirtieths, which is two.", E('2', 'g')],
    rec: ["Multiply tops and bottoms, cancelling first where you can. To divide, keep the first, change to multiply, flip the second. Change mixed numbers to improper fractions first.", ['× : tops × tops, bottoms × bottoms', 'Cancel to save work', '÷ : keep, change, flip', 'Mixed → improper first']],
    deep: ['Dividing by a fraction is the same as multiplying by its reciprocal, because they undo each other.', 'Never multiply mixed numbers part by part: 2½ × 1⅓ is not 2 × 1 plus ½ × ⅓.']
  });

  /* ---------- 804 ---------- */
  LS('Percentages of amounts', 'how to find any percentage of an amount, with and without a calculator.', {
    intro: ['A percentage of an amount', 'Two methods', "Build the percentage from ten per cent, five per cent and one per cent, or multiply by the percentage as a decimal.", V.cards(['Build: 10%, 5%, 1%', 'Decimal: × 0.36'], ['b', 'g'])],
    ex: [['Building', '36% of £250', [["Ten per cent is twenty-five pounds, so thirty per cent is seventy-five. One per cent is two pounds fifty, so six per cent is fifteen. Thirty-six per cent is ninety pounds.", E('£75 + £15 = £90', 'g')]]],
      ['Decimal multiplier', '36% of £250', [["Thirty-six per cent is zero point three six. Zero point three six times two hundred and fifty is ninety.", E('0.36 × 250 = 90', 'g')]]],
      ['Fractions help', '12.5% of 64', [["Twelve and a half per cent is one eighth. One eighth of sixty-four is eight.", E('12.5% = 1/8 → 64 ÷ 8 = 8', 'g')]]]],
    real: ['VAT', "VAT is twenty per cent. On a seventy-five pound item, VAT is fifteen pounds, so the price is ninety pounds.", E('20% of £75 = £15', 'g')],
    turn: ["Your turn! Find seventeen per cent of three hundred. Pause and try it.", E('17% of 300'), "Ten per cent is thirty, seven per cent is twenty-one. Fifty-one.", E('51', 'g')],
    rec: ["Build percentages from ten, five and one per cent, use a decimal multiplier, or use a fraction you know.", ['10% → ÷ 10, 1% → ÷ 100', 'Decimal × amount', '12.5% = ⅛, 33⅓% = ⅓', 'Check it is sensible']],
    deep: ['Any percentage is just "hundredths of" the amount, so 36% of 250 is 36 × 2.5.', 'Percentages above 100% give an answer bigger than the amount.']
  });

  LS('Percentage increase and decrease', 'how to increase or decrease an amount by a percentage.', {
    intro: ['Changing by a percentage', 'Up or down', "To increase, add the percentage on. To decrease, take it off. A multiplier does it in one step.", V.cards(['Increase: × 1.15', 'Decrease: × 0.85'], ['g', 'b'])],
    ex: [['Decrease', '15% off £80', [["Fifteen per cent of eighty is twelve. Eighty take away twelve is sixty-eight pounds.", E('£80 − £12 = £68', 'g')]]],
      ['Increase', '6% rise on £350', [["Six per cent of three hundred and fifty is twenty-one. The new amount is three hundred and seventy-one pounds.", E('£350 + £21 = £371', 'g')]]],
      ['Multipliers', 'One step', [["Fifteen per cent off leaves eighty-five per cent: times zero point eight five. A six per cent rise is one hundred and six per cent: times one point zero six.", E('80 × 0.85 = 68 · 350 × 1.06 = 371', 'g')]]],
      ['Percentage change', 'Change ÷ original', [["A price rose from fifty to sixty pounds. The change is ten pounds. Ten divided by fifty is zero point two: a twenty per cent increase.", E('10 ÷ 50 × 100 = 20%', 'g')]]]],
    turn: ["Your turn! Decrease two hundred by thirty per cent. Pause and try it.", E('200 − 30%'), "Thirty per cent of two hundred is sixty. Two hundred take away sixty is one hundred and forty.", E('140', 'g')],
    rec: ["Find the percentage and add or subtract it, or multiply by one plus or minus the percentage as a decimal. Percentage change is change over original.", ['Increase: add on', 'Decrease: take off', 'Multiplier: 1 ± rate', 'Change ÷ original × 100']],
    deep: ['A multiplier combines finding the percentage and adding it on into one step.', 'A 10% rise then a 10% fall does not return to the start: £100 → £110 → £99.']
  });

  /* ---------- 805 ---------- */
  LS('Simplifying and sharing in a ratio', 'how to simplify ratios and share amounts in a given ratio.', {
    intro: ['Ratio', 'Comparing parts', "A ratio compares amounts. Five red to ten blue is written five to ten. Ratios can be simplified like fractions.", E('5 : 10 = 1 : 2', 'g')],
    ex: [['Simplifying', 'Divide by the HCF', [["Twenty-four to thirty-six: the highest common factor is twelve. Divide both: two to three.", E('24 : 36 = 2 : 3', 'g')]]],
      ['Three-part ratios', '12 : 18 : 30', [["Divide all three by six: two to three to five.", E('12 : 18 : 30 = 2 : 3 : 5', 'g')]]],
      ['Sharing', '£180 in 2 : 3 : 4', [["Total parts: nine. One part: one hundred and eighty divided by nine is twenty pounds. Shares: forty, sixty and eighty pounds.", E('£40 · £60 · £80', 'g') + V.rule('Add the parts, find one part, multiply.')]]],
      ['From one share', 'Find the total', [["The ratio of boys to girls is three to four, and there are fifteen boys. One part is five, so there are twenty girls and thirty-five pupils.", E('3 parts = 15 → 1 part = 5 → total 35', 'g')]]]],
    real: ['Mixing paint', "Blue and yellow paint mixed in the ratio two to five makes green. For seven litres you need two litres of blue and five of yellow.", E('2 : 5 → 2 l and 5 l', 'g')],
    turn: ["Your turn! Share seventy-two sweets in the ratio five to three. Pause and try it.", E('72 in 5 : 3'), "Eight parts, so one part is nine. Forty-five and twenty-seven.", E('45 and 27', 'g')],
    rec: ["Simplify a ratio by dividing every part by the same number. To share, add the parts, find one part, then multiply.", ['Simplify: ÷ by the HCF', 'Add the parts', 'Total ÷ parts = one part', 'Check shares add to the total']],
    deep: ['A ratio is about parts, not amounts: 2 : 3 could be 2 and 3, or 200 and 300.', 'Read which share the question asks for: the first part, the second, or the difference.']
  });

  LS('Direct proportion', 'how to solve problems where two quantities increase together at the same rate.', {
    intro: ['Direct proportion', 'Double one, double the other', "Two quantities are in direct proportion if they grow together at the same rate: double one and the other doubles.", V.tbl([['1', '£2.40'], ['2', '£4.80'], ['5', '£12']], ['Tickets', 'Cost'])],
    ex: [['The unitary method', 'Find one first', [["Five notebooks cost six pounds fifty. One costs one pound thirty. So eight cost ten pounds forty.", E('£6.50 ÷ 5 = £1.30 → × 8 = £10.40', 'g')]]],
      ['Recipes', 'Scaling', [["A recipe for four uses three hundred grams of flour. For ten people: seventy-five grams per person, times ten is seven hundred and fifty grams.", E('300 ÷ 4 × 10 = 750 g', 'g')]]],
      ['Best buy', 'Compare one unit', [["Five hundred grams for two pounds or seven hundred and fifty grams for two pounds eighty-five? Per hundred grams: forty pence and thirty-eight pence. The bigger pack is better value.", E('40p vs 38p per 100 g', 'g')]]]],
    real: ['Fuel', "A car uses six litres of fuel to go one hundred kilometres. For two hundred and fifty kilometres it needs fifteen litres.", E('6 × 2.5 = 15 l', 'g')],
    turn: ["Your turn! Three pens cost two pounds seventy. How much do seven cost? Pause and try it.", E('£2.70 ÷ 3 × 7'), "One costs ninety pence. Seven cost six pounds thirty.", E('£6.30', 'g')],
    rec: ["In direct proportion, find the value of one, then multiply. Use it for recipes, prices and best buys.", ['Grow together at the same rate', 'Unitary method: find one', 'Then multiply', 'Compare per unit for best buys']],
    deep: ['In direct proportion, the ratio between the two quantities always stays the same.', 'Not everything is proportional: a taxi with a fixed charge plus a price per mile is not.']
  });

  /* ---------- 806 ---------- */
  LS('Wages and overtime', 'how to calculate pay, including overtime and bonuses.', {
    intro: ['Earning money', 'Wages and salaries', "A wage is paid per hour or per week. A salary is a fixed amount per year. Overtime is extra hours, often paid at a higher rate.", V.cards(['Wage: per hour', 'Salary: per year', 'Overtime: extra rate'], ['b', 'p', 'g'])],
    ex: [['Hourly pay', 'Rate × hours', [["Sam earns eleven pounds twenty an hour for thirty-five hours: three hundred and ninety-two pounds.", E('35 × £11.20 = £392', 'g')]]],
      ['Time and a half', 'Overtime', [["Overtime at time and a half pays one point five times the normal rate. Six hours of overtime at eleven pounds twenty: one point five times eleven pounds twenty is sixteen pounds eighty, times six is one hundred pounds eighty.", E('6 × 1.5 × £11.20 = £100.80', 'g')]]],
      ['Double time', 'Sundays', [["Double time pays twice the rate. Four hours at double time: four times twenty-two pounds forty is eighty-nine pounds sixty.", E('4 × 2 × £11.20 = £89.60', 'g')]]],
      ['Salary', 'Per month', [["A salary of twenty-seven thousand pounds a year is twenty-seven thousand divided by twelve: two thousand two hundred and fifty pounds a month.", E('£27,000 ÷ 12 = £2,250', 'g')]]]],
    turn: ["Your turn! Ten hours at ten pounds plus four hours at time and a half. Pause and try it.", E('10 × £10 + 4 × £15'), "One hundred pounds plus sixty pounds: one hundred and sixty pounds.", E('£160', 'g')],
    rec: ["Pay is rate times hours. Time and a half is one point five times the rate; double time is twice. Divide a salary by twelve for monthly pay.", ['Pay = rate × hours', 'Time and a half: × 1.5', 'Double time: × 2', 'Salary ÷ 12 = monthly']],
    deep: ['Overtime rates are multipliers on the normal rate, so find the new rate first, then multiply by the hours.', 'Don’t multiply the total by 1.5: only the overtime hours get the higher rate.']
  });

  LS('VAT and simple interest', 'how to add VAT to prices and calculate simple interest.', {
    intro: ['VAT', 'A tax on spending', "Value Added Tax, VAT, is added to many prices in the UK. The standard rate is twenty per cent.", E('Price with VAT = price × 1.2', 'g')],
    ex: [['Adding VAT', '£340 + VAT', [["Twenty per cent of three hundred and forty pounds is sixty-eight pounds. The total is four hundred and eight pounds.", E('£340 × 1.2 = £408', 'g')]]],
      ['Simple interest', 'Same each year', [["Simple interest pays the same amount every year. Five hundred pounds at three per cent for four years: three per cent is fifteen pounds, times four is sixty pounds.", E('£500 × 0.03 × 4 = £60', 'g')]]],
      ['Total amount', 'Add the interest', [["After four years, the total is five hundred and sixty pounds.", E('£500 + £60 = £560', 'g')]]],
      ['Part of a year', 'Months', [["For six months, use half a year: one thousand two hundred pounds at four per cent for six months is twenty-four pounds.", E('£1,200 × 0.04 × 0.5 = £24', 'g')]]]],
    turn: ["Your turn! What is the simple interest on eight hundred pounds at two per cent for three years? Pause and try it.", E('£800 × 0.02 × 3'), "Two per cent is sixteen pounds a year; three years is forty-eight pounds.", E('£48', 'g')],
    rec: ["Add VAT by multiplying by one point two. Simple interest is the same each year: amount times rate times years.", ['VAT 20%: × 1.2', 'Simple interest = P × r × t', 'Months: fraction of a year', 'Total = amount + interest']],
    deep: ['Simple interest is only on the original amount, which is why it is the same every year.', 'Convert months to a fraction of a year: 6 months is 0.5, 3 months is 0.25.']
  });

  LS('Best buys, interest and exchange', 'how to compare deals, and use exchange rates and interest.', {
    intro: ['Making money decisions', 'Compare fairly', "To compare deals, compare the same quantity: price per item, per gram or per litre.", V.rule('Compare like with like.')],
    ex: [['Best buy', 'Price per unit', [["Two litres of juice for one pound eighty, or three litres for two pounds sixty-four? Per litre: ninety pence and eighty-eight pence. The three-litre bottle is better value.", E('90p vs 88p per litre', 'g')]]],
      ['Offers', 'Three for two', [["Three for the price of two: you pay for two items but get three, so each costs two thirds of the price.", E('3 for 2 → each ⅔ price', 'g')]]],
      ['Exchange', 'Euros', [["If one pound is one euro sixteen, three hundred pounds is three hundred and forty-eight euros. Eighty-seven euros is seventy-five pounds.", E('£300 × 1.16 = €348 · €87 ÷ 1.16 = £75', 'g')]]],
      ['Comparing interest', 'Which account?', [["Account A pays three per cent; account B pays two point five per cent plus a ten pound bonus. On four hundred pounds for one year: A gives twelve pounds, B gives twenty. B is better here.", E('A: £12 · B: £10 + £10 = £20', 'g')]]]],
    turn: ["Your turn! Which is better value: four hundred grams for one pound sixty, or one kilogram for three pounds ninety? Pause and try it.", E('per 100 g'), "Forty pence and thirty-nine pence per hundred grams. The kilogram bag.", E('1 kg for £3.90', 'g')],
    rec: ["Compare the price per unit to find the best buy. Multiply by the exchange rate to change pounds, divide to change back. Compare interest by working out what each account actually pays.", ['Price per unit', 'Offers: work out each item', 'Exchange: × or ÷ the rate', 'Compare actual interest']],
    deep: ['Unit prices put deals on the same scale, so the comparison is fair.', 'A bigger pack is not always cheaper per item. Always check.']
  });

  /* ---------- 807 ---------- */
  LS('Speed, distance and time', 'how to calculate speed, distance and time.', {
    intro: ['Speed', 'How fast?', "Speed is the distance travelled in a unit of time, like kilometres per hour.", E('Speed = Distance ÷ Time', 'g')],
    ex: [['Speed', 'D ÷ T', [["A cyclist rides forty-five kilometres in three hours: fifteen kilometres per hour.", E('45 ÷ 3 = 15 km/h', 'g')]]],
      ['Distance', 'S × T', [["A train travels at one hundred and twenty kilometres per hour for two and a half hours: three hundred kilometres.", E('120 × 2.5 = 300 km', 'g')]]],
      ['Time', 'D ÷ S', [["A car travels one hundred and ninety-two kilometres at sixty-four kilometres per hour: three hours.", E('192 ÷ 64 = 3 h', 'g')]]],
      ['Minutes', 'Change to hours', [["Twenty minutes is a third of an hour. At sixty kilometres per hour, you travel twenty kilometres. Forty-five minutes is zero point seven five hours.", E('20 min = ⅓ h · 45 min = 0.75 h', 'g')]]]],
    real: ['A journey', "Glasgow to Edinburgh is seventy-five kilometres. At sixty kilometres per hour it takes one hour fifteen minutes.", E('75 ÷ 60 = 1.25 h = 1 h 15 min', 'g')],
    turn: ["Your turn! How far do you walk in thirty minutes at five kilometres per hour? Pause and try it.", E('5 × 0.5'), "Thirty minutes is half an hour: two and a half kilometres.", E('2.5 km', 'g')],
    rec: ["Speed is distance divided by time. Rearrange for distance or time. Always change minutes into hours first.", ['S = D ÷ T', 'D = S × T', 'T = D ÷ S', 'Minutes → hours']],
    deep: ['The units tell you the formula: km per hour means km ÷ hours.', 'A time of 1.25 hours is 1 hour 15 minutes, not 1 hour 25 minutes.']
  });

  LS('Distance–time graphs', 'how to read journeys from distance–time graphs.', {
    intro: ['Distance–time graphs', 'A journey as a picture', "Time goes along the bottom and distance up the side. The line shows where someone was at each moment.", V.note('Steeper line = faster')],
    ex: [['Reading the graph', 'Sloping, flat, steep', [["A sloping line means moving. A flat line means stopped. A steeper line means faster.", V.cards(['Sloping: moving', 'Flat: stopped', 'Steep: fast'], ['b', 'p', 'g'])]]],
      ['Working out speed', 'From a section', [["If a line goes from zero to twelve kilometres in one hour, the speed is twelve kilometres per hour.", E('12 km ÷ 1 h = 12 km/h', 'g')]]],
      ['A return journey', 'Coming back', [["When the line comes back down to zero, the person is returning home. Work out speed the same way.", E('Line back down = returning', 'g')]]]],
    turn: ["Your turn! A flat section lasts thirty minutes. What happened? Pause and think.", E('?'), "The distance didn't change, so they stopped for thirty minutes.", E('Stopped for 30 min', 'g')],
    rec: ["On a distance–time graph, sloping lines show movement, flat lines show a stop and steeper lines show faster speeds. Speed is distance over time for each section.", ['Sloping: moving', 'Flat: stopped', 'Steeper: faster', 'Speed = change in D ÷ change in T']],
    deep: ['The gradient of a distance–time graph is the speed.', 'Read the scales carefully: each square is not always 1 unit.']
  });

  LS('Coins and perimeter puzzles', 'how to solve puzzles with coins and with perimeters.', {
    intro: ['Puzzles', 'Think before calculating', "Puzzles about coins and perimeters need careful thinking: list possibilities, look for patterns and check your answer.", V.list(['List the options', 'Look for patterns', 'Check every condition'])],
    ex: [['Coins', 'Making 50p', [["How can you make fifty pence with exactly four coins? Twenty, twenty, five and five works. So does twenty, ten, ten and ten.", E('20 + 20 + 5 + 5 = 50 · 20 + 10 + 10 + 10 = 50', 'g')]]],
      ['Fewest coins', 'Start big', [["The fewest coins for eighty-seven pence: fifty, twenty, ten, five, two: that is eighty-seven with five coins.", E('50 + 20 + 10 + 5 + 2 = 87', 'g')]]],
      ['Perimeter puzzle', 'Same area, different perimeter', [["Twelve squares can make a one by twelve rectangle with perimeter twenty-six, or a three by four with perimeter fourteen. Same area, different perimeters.", E('1 × 12: P = 26 · 3 × 4: P = 14', 'g')]]],
      ['Fixed perimeter', 'Biggest area', [["With a twenty metre fence, a five by five square gives the biggest rectangle area: twenty-five square metres.", E('5 × 5 = 25 m²', 'g')]]]],
    turn: ["Your turn! Find two rectangles made of eighteen squares with different perimeters. Pause and try it.", E('area 18'), "Two by nine has perimeter twenty-two; three by six has perimeter eighteen.", E('2 × 9: 22 · 3 × 6: 18', 'g')],
    rec: ["List possibilities in order so none are missed. For coins, start with the biggest. Shapes with the same area can have different perimeters.", ['List systematically', 'Coins: biggest first', 'Same area ≠ same perimeter', 'Check every condition']],
    deep: ['Working systematically, in order, is how mathematicians make sure no answer is missed.', 'The most compact shape has the smallest perimeter for its area.']
  });

  /* ---------- 808 ---------- */
  LS('Area of triangles, parallelograms and trapeziums', 'the area formulas for triangles, parallelograms and trapeziums.', {
    intro: ['Area formulas', 'From rectangles', "These shapes can all be rearranged from rectangles, so their area formulas come from length times width.", V.tbl([['Triangle', '½ × b × h'], ['Parallelogram', 'b × h'], ['Trapezium', '½ × (a + b) × h']], ['Shape', 'Area'])],
    ex: [['Triangle', 'Half a rectangle', [["Base twelve centimetres, height seven: half of eighty-four is forty-two square centimetres.", E('½ × 12 × 7 = 42 cm²', 'g')]]],
      ['Parallelogram', 'Slide a triangle', [["Cut a triangle off one end and slide it to the other: you get a rectangle. Base nine, height five: forty-five square centimetres.", E('9 × 5 = 45 cm²', 'g')]]],
      ['Trapezium', 'Average of parallel sides', [["Parallel sides six and ten, height four: the average of six and ten is eight, times four is thirty-two square centimetres.", E('½ × (6 + 10) × 4 = 32 cm²', 'g')]]]],
    real: ['A garden bed', "A trapezium-shaped lawn has parallel sides of eight and twelve metres, five metres apart. Its area is fifty square metres.", E('½ × 20 × 5 = 50 m²', 'g')],
    turn: ["Your turn! A parallelogram has a base of eleven and a height of six. What is its area? Pause and try it.", E('11 × 6'), "Sixty-six square units.", E('66', 'g')],
    rec: ["Triangle: half base times height. Parallelogram: base times height. Trapezium: half the sum of the parallel sides times height. Always use the perpendicular height.", ['Triangle ½bh', 'Parallelogram bh', 'Trapezium ½(a + b)h', 'Use perpendicular height']],
    deep: ['Each formula comes from cutting and rearranging into a rectangle.', 'Use the height at right angles to the base, never the slanted side.']
  });

  LS('Volume of a prism', 'how to find the volume of a prism using its cross-section.', {
    intro: ['Prisms', 'Same shape all the way through', "A prism has the same cross-section all along its length, like a Toblerone box or a cuboid.", cubes([[2, 2, 2], [2, 2, 2]])],
    ex: [['The formula', 'Area of cross-section × length', [["The volume of any prism is the area of the cross-section times the length.", E('V = A × l', 'g')]]],
      ['Cuboid', 'A rectangle cross-section', [["A cuboid with a cross-section of four by three and length ten: twelve times ten is one hundred and twenty cubic centimetres.", E('12 × 10 = 120 cm³', 'g')]]],
      ['Triangular prism', 'A triangle cross-section', [["A triangle with base six and height five has area fifteen. With a length of twenty: three hundred cubic centimetres.", E('15 × 20 = 300 cm³', 'g')]]],
      ['Capacity', 'Litres', [["A prism-shaped trough holds forty thousand cubic centimetres: forty litres.", E('40,000 cm³ = 40 l', 'g')]]]],
    turn: ["Your turn! A prism has a cross-section of twenty-four square centimetres and a length of nine. What is its volume? Pause and try it.", E('24 × 9'), "Two hundred and sixteen cubic centimetres.", E('216 cm³', 'g')],
    rec: ["A prism's volume is the area of its cross-section times its length. Work out the cross-section first, then multiply.", ['Prism: same cross-section', 'V = area × length', 'Units: cm³ or m³', '1,000 cm³ = 1 litre']],
    deep: ['Volume of a prism works like stacking slices: each slice has the cross-section area.', 'Make sure the length is the edge perpendicular to the cross-section.']
  });

  /* ---------- 809 ---------- */
  LS('Simplifying and expanding', 'how to collect like terms and expand single brackets.', {
    intro: ['Algebraic expressions', 'Letters and numbers', "An expression mixes letters and numbers, like three a plus two b. Terms with the same letters are like terms and can be combined.", E('3a + 2b + 4a = 7a + 2b', 'g')],
    ex: [['Collecting like terms', 'Combine the same letters', [["Five x plus three y take away two x plus y: five x take away two x is three x; three y plus y is four y.", E('5x + 3y − 2x + y = 3x + 4y', 'g')]]],
      ['Multiplying terms', 'Letters next to each other', [["Three a times four b is twelve a b. Two x times x is two x squared.", E('3a × 4b = 12ab · 2x × x = 2x²', 'g')]]],
      ['Expanding brackets', 'Multiply everything inside', [["Four, bracket, x plus three: multiply each term by four. Four x plus twelve.", E('4(x + 3) = 4x + 12', 'g')]]],
      ['Expand and simplify', 'Two brackets', [["Three, bracket, x plus two, plus two, bracket, x minus one: three x plus six plus two x minus two. Five x plus four.", E('3(x + 2) + 2(x − 1) = 5x + 4', 'g')]]]],
    turn: ["Your turn! Expand five, bracket, two y minus three. Pause and try it.", E('5(2y − 3)'), "Ten y take away fifteen.", E('10y − 15', 'g')],
    rec: ["Collect like terms by combining the same letters. To expand a bracket, multiply every term inside by the term outside. Then simplify.", ['Like terms: same letters', 'Combine their numbers', 'Expand: multiply every term', 'Then simplify']],
    deep: ['Expanding uses the same idea as partitioning: 4 × 23 = 4 × 20 + 4 × 3.', 'Multiply every term inside the bracket, including the second one: 4(x + 3) is not 4x + 3.']
  });

  LS('Formulae and equations', 'how to use formulae by substituting, and how to solve equations.', {
    intro: ['Formulae', 'A rule with letters', "A formula is a rule written with letters, like the area of a rectangle: A equals l times w.", E('A = l × w', 'g')],
    ex: [['Substituting', 'Put the numbers in', [["The formula for the cost of a taxi is C equals two plus one point five m. For eight miles: two plus twelve is fourteen pounds.", E('C = 2 + 1.5 × 8 = £14', 'g')]]],
      ['Solving an equation', 'Balance', [["Four x plus seven equals thirty-one. Take seven from both sides: four x equals twenty-four. Divide by four: x equals six.", E('4x + 7 = 31 → x = 6', 'g')]]],
      ['Letters both sides', 'Collect them', [["Six x minus four equals two x plus twelve. Take two x from both sides: four x minus four equals twelve. So four x equals sixteen, x equals four.", E('6x − 4 = 2x + 12 → x = 4', 'g')]]],
      ['Writing an equation', 'From words', [["A rectangle's length is three more than its width, and its perimeter is thirty. Two w plus two, bracket, w plus three, equals thirty: four w plus six equals thirty, so w equals six.", E('4w + 6 = 30 → w = 6', 'g')]]]],
    turn: ["Your turn! Solve three, bracket, x minus two, equals eighteen. Pause and try it.", E('3(x − 2) = 18'), "Divide by three: x minus two equals six. So x equals eight.", E('x = 8', 'g')],
    rec: ["Substitute numbers into formulae carefully, following BODMAS. Solve equations by doing the same to both sides, and check your answer.", ['Substitute, then use BODMAS', 'Balance both sides', 'Collect letters on one side', 'Check by substituting']],
    deep: ['A formula works for any values; an equation is true only for particular values.', 'When substituting, 2x with x = 5 is 10, not 25.']
  });

  /* ---------- 810 ---------- */
  LS('Angle rules', 'the basic angle facts and how to use them to find missing angles.', {
    intro: ['Angle facts', 'The rules', "Angles on a straight line add up to one hundred and eighty degrees. Round a point, three hundred and sixty. In a triangle, one hundred and eighty. Vertically opposite angles are equal.", V.tbl([['Straight line', '180°'], ['Round a point', '360°'], ['Triangle', '180°'], ['Quadrilateral', '360°']], ['Where', 'Sum'])],
    ex: [['Straight line', 'Missing angle', [["One angle on a line is one hundred and thirty-seven degrees. The other is forty-three.", E('180° − 137° = 43°', 'g')]]],
      ['Isosceles triangle', 'Two equal angles', [["An isosceles triangle has a top angle of forty degrees. The other two are equal: one hundred and forty divided by two, seventy degrees each.", E('(180° − 40°) ÷ 2 = 70°', 'g')]]],
      ['Vertically opposite', 'Crossing lines', [["Two lines cross. One angle is sixty-five degrees. The opposite one is sixty-five, and the neighbours are one hundred and fifteen.", E('65°, 115°, 65°, 115°', 'g')]]]],
    turn: ["Your turn! Three angles round a point are one hundred, one hundred and twenty and ninety degrees. Find the fourth. Pause and try it.", E('360° − 310°'), "Fifty degrees.", E('50°', 'g')],
    rec: ["Use the angle facts: straight line one hundred and eighty, round a point three hundred and sixty, triangle one hundred and eighty, vertically opposite angles equal. Give a reason for each step.", ['Line: 180°', 'Point: 360°', 'Triangle: 180°', 'Opposite angles equal']],
    deep: ['Most angle problems are solved by spotting which fact applies, then subtracting from the total.', 'Always state the reason, like "angles on a straight line", not just the number.']
  });

  LS('Parallel lines', 'the angle facts for a line crossing two parallel lines.', {
    intro: ['Parallel lines', 'Crossed by a transversal', "When a line crosses two parallel lines, it makes pairs of angles that are equal or add to one hundred and eighty degrees.", V.note('Corresponding (F), alternate (Z), co-interior (C)')],
    ex: [['Corresponding angles', 'F shape: equal', [["Corresponding angles are in matching positions at each crossing. They are equal.", E('a = b', 'g')]]],
      ['Alternate angles', 'Z shape: equal', [["Alternate angles sit inside the parallel lines, on opposite sides. They are equal.", E('a = b', 'g')]]],
      ['Co-interior angles', 'C shape: add to 180°', [["Co-interior angles sit inside, on the same side. They add to one hundred and eighty degrees. If one is seventy-two, the other is one hundred and eight.", E('180° − 72° = 108°', 'g')]]]],
    turn: ["Your turn! An alternate angle to fifty-eight degrees. What is it? Pause and think.", E('?'), "Alternate angles are equal: fifty-eight degrees.", E('58°', 'g')],
    rec: ["Corresponding angles and alternate angles are equal. Co-interior angles add to one hundred and eighty degrees. Name the rule each time.", ['Corresponding (F): equal', 'Alternate (Z): equal', 'Co-interior (C): 180°', 'Give the reason']],
    deep: ['These rules work because the transversal crosses both parallel lines at the same angle.', 'Only use them when the lines are marked parallel.']
  });

  LS('Polygon angles, bearings and coordinates', 'how to find angles in polygons, use bearings and plot coordinates in four quadrants.', {
    intro: ['Three geometry skills', 'Polygons, bearings, coordinates', "This lesson brings together angles inside polygons, three-figure bearings, and coordinates in all four quadrants.", V.list(['Polygon angles', 'Bearings', 'Coordinates'])],
    ex: [['Interior angles', '(n − 2) × 180°', [["A pentagon's angles add to three times one hundred and eighty: five hundred and forty degrees. A regular pentagon's angles are one hundred and eight each.", E('540° ÷ 5 = 108°', 'g')]]],
      ['Exterior angles', 'Add to 360°', [["The exterior angles of any polygon add to three hundred and sixty degrees. A regular hexagon's exterior angle is sixty degrees.", E('360° ÷ 6 = 60°', 'g')]]],
      ['Bearings', 'Clockwise from north', [["Bearings are measured clockwise from north, with three figures. South-west is two two five degrees.", E('SW = 225°', 'g')]]],
      ['Four quadrants', 'Negative coordinates', [["Points can have negative coordinates. Negative three, two is three left and two up.", E('(−3, 2): 3 left, 2 up', 'g')]]]],
    turn: ["Your turn! What is each exterior angle of a regular octagon? Pause and try it.", E('360° ÷ 8'), "Forty-five degrees.", E('45°', 'g')],
    rec: ["Interior angles add to n minus two times one hundred and eighty. Exterior angles add to three hundred and sixty. Bearings go clockwise from north with three figures. Coordinates go across, then up, including negatives.", ['Interior: (n − 2) × 180°', 'Exterior: total 360°', 'Bearings: clockwise from N', '(x, y) in four quadrants']],
    deep: ['Walking round any polygon you turn through one full turn, which is why exterior angles add to 360°.', 'Always write bearings with three figures: 045°, not 45°.']
  });

  /* ---------- 811 ---------- */
  LS('Four-quadrant coordinates and reflection', 'how to plot points in all four quadrants and reflect shapes in the axes.', {
    intro: ['Four quadrants', 'Negative coordinates', "The axes cross at the origin. Going left or down gives negative coordinates.", E('(x, y): across, then up or down', 'g')],
    ex: [['Plotting', 'Four points', [["Two, three is in the top right. Negative two, three is top left. Negative two, negative three is bottom left. Two, negative three is bottom right.", V.tbl([['(2, 3)', 'top right'], ['(−2, 3)', 'top left'], ['(−2, −3)', 'bottom left'], ['(2, −3)', 'bottom right']], ['Point', 'Quadrant'])]]],
      ['Reflect in the y-axis', 'x changes sign', [["Reflecting in the y-axis flips left and right: four, one becomes negative four, one.", E('(4, 1) → (−4, 1)', 'g')]]],
      ['Reflect in the x-axis', 'y changes sign', [["Reflecting in the x-axis flips up and down: four, one becomes four, negative one.", E('(4, 1) → (4, −1)', 'g')]]],
      ['Reflect in y = x', 'Swap the coordinates', [["Reflecting in the line y equals x swaps the coordinates: four, one becomes one, four.", E('(4, 1) → (1, 4)', 'g')]]]],
    turn: ["Your turn! Reflect negative three, five in the x-axis. Pause and think.", E('(−3, 5)'), "The y-coordinate changes sign: negative three, negative five.", E('(−3, −5)', 'g')],
    rec: ["Coordinates go across then up, and can be negative. Reflecting in the y-axis changes the sign of x; in the x-axis, the sign of y; in y = x, swap them.", ['Across, then up', 'y-axis: x changes sign', 'x-axis: y changes sign', 'y = x: swap']],
    deep: ['A reflection keeps each point the same distance from the mirror line, which is why only one coordinate changes sign.', 'The x-axis is horizontal: reflecting in it changes y, not x.']
  });

  LS('Symmetry and scale drawings', 'how to find lines and order of rotational symmetry, and use scales in drawings.', {
    intro: ['Two kinds of symmetry', 'Line and rotational', "A shape has line symmetry if a mirror line splits it into matching halves. It has rotational symmetry if it looks the same after a turn of less than a full turn.", V.cards(['Line symmetry', 'Rotational symmetry'], ['b', 'g'])],
    ex: [['Order of rotation', 'How many matches?', [["A square looks the same four times in a full turn: order four. A rectangle: order two. An equilateral triangle: order three.", V.tbl([['Square', '4', '4'], ['Rectangle', '2', '2'], ['Equilateral triangle', '3', '3'], ['Parallelogram', '0', '2']], ['Shape', 'Lines', 'Order'])]]],
      ['Scale drawings', 'Scale 1 : 50', [["On a scale of one to fifty, one centimetre on the drawing is fifty centimetres in real life. A wall drawn eight centimetres long is four metres.", E('8 × 50 = 400 cm = 4 m', 'g')]]],
      ['Map scales', '1 : 25,000', [["On a one to twenty-five thousand map, four centimetres is one hundred thousand centimetres, which is one kilometre.", E('4 cm → 1 km', 'g')]]]],
    turn: ["Your turn! On a one to one hundred plan, a room is six centimetres long. How long is the real room? Pause and try it.", E('6 × 100'), "Six hundred centimetres, which is six metres.", E('6 m', 'g')],
    rec: ["Count lines of symmetry and how many times a shape fits onto itself in a turn. For scale drawings, multiply by the scale and change units.", ['Lines of symmetry: fold test', 'Order: matches in one turn', 'Scale 1 : n → × n', 'Convert the units']],
    deep: ['Every shape has rotational order at least 1, because it always fits after a full turn.', 'After multiplying by the scale, convert to sensible units: 400 cm is 4 m.']
  });

  /* ---------- 812 ---------- */
  LS('Averages and the spread of data', 'how to find and compare the mean, median, mode and range.', {
    intro: ['Averages', 'One number for a typical value', "An average describes a typical value. The range describes how spread out the data is.", V.tbl([['Mean', 'total ÷ how many'], ['Median', 'middle in order'], ['Mode', 'most common'], ['Range', 'largest − smallest']], ['Measure', 'How'])],
    ex: [['An example', '4, 9, 6, 9, 12', [["Mean: forty divided by five is eight. Median: in order four, six, nine, nine, twelve; middle is nine. Mode: nine. Range: twelve take away four is eight.", E('Mean 8 · Median 9 · Mode 9 · Range 8', 'g')]]],
      ['Even number of values', 'Median between two', [["For three, five, eight, ten, the middle two are five and eight. The median is halfway: six point five.", E('(5 + 8) ÷ 2 = 6.5', 'g')]]],
      ['Comparing groups', 'Average and spread', [["Class A has mean sixty-two and range thirty. Class B has mean sixty-five and range twelve. B did better on average and were more consistent.", E('B: higher mean, smaller range', 'g')]]]],
    turn: ["Your turn! Find the median of seven, two, nine, four, five. Pause and try it.", E('2, 4, 5, 7, 9'), "In order, the middle is five.", E('5', 'g')],
    rec: ["Use the mean, median or mode for a typical value and the range for spread. Compare groups using one average and the range.", ['Mean: total ÷ count', 'Median: middle in order', 'Mode: most common', 'Range: spread']],
    deep: ['The median is not affected by one very big or very small value, so it is better when there are outliers.', 'When comparing, mention both an average and the spread.']
  });

  LS('Probability and relative frequency', 'how to calculate probability and estimate it from experiments.', {
    intro: ['Probability', 'From 0 to 1', "Probability measures how likely something is, from zero, impossible, to one, certain.", V.cards(['0 impossible', '0.5 even', '1 certain'], ['b', 'p', 'g'])],
    ex: [['Theoretical probability', 'Equally likely outcomes', [["A bag has four red and six blue counters. The probability of red is four out of ten: two fifths.", E('P(red) = 4/10 = 2/5', 'g')]]],
      ['The complement', 'Not happening', [["The probability of not red is one take away two fifths: three fifths.", E('P(not red) = 1 − 2/5 = 3/5', 'g')]]],
      ['Relative frequency', 'From an experiment', [["A drawing pin lands point up thirty-six times in fifty throws. The relative frequency is thirty-six fiftieths: zero point seven two.", E('36 ÷ 50 = 0.72', 'g')]]],
      ['Expected results', 'Predict', [["If the probability of rain is zero point three, in thirty days we expect about nine rainy days.", E('0.3 × 30 = 9', 'g')]]]],
    turn: ["Your turn! A fair dice is rolled sixty times. About how many sixes would you expect? Pause and try it.", E('1/6 × 60'), "Ten sixes.", E('10', 'g')],
    rec: ["Probability is ways it can happen over total outcomes. The complement is one minus it. Relative frequency comes from experiments and gets more reliable with more trials.", ['P = ways ÷ total', 'P(not) = 1 − P', 'Relative frequency from trials', 'Expected = P × trials']],
    deep: ['More trials make the relative frequency closer to the true probability.', 'Expected results are an estimate, not a guarantee: you might get 8 or 12 sixes.']
  });

  /* ---------- 813 ---------- */
  LS('Nets and surface area', 'how nets help find the surface area of cuboids and prisms.', {
    intro: ['Nets', 'A solid unfolded', "A net is a solid opened out flat. Its area is the surface area of the solid.", LK.grid(4, 3, function (i, j) { return (j === 1 || i === 1) ? true : 'skip'; }, { u: 36, alt: 'A cross-shaped net' })],
    ex: [['Cuboid', 'Three pairs of faces', [["A cuboid six by four by three: top and bottom twenty-four each, front and back eighteen each, sides twelve each. Total one hundred and eight square centimetres.", E('2(24 + 18 + 12) = 108 cm²', 'g')]]],
      ['Cube', 'Six equal squares', [["A cube with five centimetre edges: six times twenty-five is one hundred and fifty square centimetres.", E('6 × 25 = 150 cm²', 'g')]]],
      ['Triangular prism', 'Two triangles, three rectangles', [["Add the two triangle ends and the three rectangles. Each face is found with its own area formula.", E('SA = 2 triangles + 3 rectangles', 'g')]]]],
    turn: ["Your turn! What is the surface area of a cube with three centimetre edges? Pause and try it.", E('6 × 9'), "Fifty-four square centimetres.", E('54 cm²', 'g')],
    rec: ["Surface area is the total area of all faces. Draw or imagine the net, find each face's area, and add them.", ['Draw the net', 'Area of each face', 'Add them all', 'Units: cm²']],
    deep: ['The net shows every face exactly once, so adding its parts gives the total surface.', 'Don’t mix up surface area (cm²) with volume (cm³).']
  });

  LS('Views and cross-sections', 'how to draw plans and elevations, and describe cross-sections of solids.', {
    intro: ['Views', 'Looking from different sides', "A plan is the view from above. The front elevation is from the front. The side elevation is from the side.", cubes([[2, 1, 1], [1, 1, 0]]) + V.cards(['Plan', 'Front', 'Side'], ['b', 'p', 'g'])],
    ex: [['Plans', 'From above', [["From above, you see the tops of all the stacks, as squares on a grid. Height doesn't show in a plan.", V.note('Plan: the footprint')]]],
      ['Elevations', 'From the front and side', [["From the front, each column shows its tallest stack. Count the height of each column.", V.note('Elevation: the tallest in each column')]]],
      ['Cross-sections', 'A slice through', [["Slice through a cylinder parallel to its end and the cross-section is a circle. Slice a cube corner to corner and it can be a rectangle or even a triangle.", V.cards(['Cylinder: circle', 'Cuboid: rectangle', 'Cone: circle or triangle'], ['b', 'p', 'g'])]]]],
    turn: ["Your turn! What is the plan view of a cylinder standing upright? Pause and think.", E('?'), "From above you see a circle.", E('circle', 'g')],
    rec: ["Plans show the view from above; elevations show the front and side. A cross-section is the shape of a slice through a solid.", ['Plan: above', 'Front and side elevations', 'Cross-section: a slice', 'Prisms: same all along']],
    deep: ['Builders and designers use plans and elevations because a 3D object can’t be fully shown in one flat picture.', 'Hidden cubes don’t show in a view, so views alone can’t always tell you how many cubes there are.']
  });

  /* ===================== put the S1 topics together ===================== */
  L.use(801, ['What is place value and decimal place value?', 'How do you use column addition and subtraction?', 'How do you add and subtract to three decimal places?', 'Calculating with decimals', 'Rounding and estimating', 'Sensible estimates and rounding with units', 'Number lines, words and digit values']);
  L.use(802, ['What are common multiples?', 'What are common factors?', 'Negative numbers', 'Powers, roots and prime factors', 'Powers, negatives and BODMAS', 'Use a fact you know', 'Always true, factors and multiples']);
  L.use(803, ['What are fractions?', 'What are equivalent fractions?', 'What are mixed numbers and improper fractions?', 'Adding and subtracting mixed numbers', 'Multiplying and dividing fractions', 'Counting parts and fractions as decimals']);
  L.use(804, ['What are percentages?', 'Percentages of amounts', 'Percentage increase and decrease', 'Percentages of a set and of a measure']);
  L.use(805, ['Simplifying and sharing in a ratio', 'Direct proportion', 'Ratio with different units']);
  L.use(806, ['What is financial maths?', 'What is budgeting?', 'Wages and overtime', 'VAT and simple interest', 'Best buys, interest and exchange']);
  L.use(807, ['Speed, distance and time', 'Distance–time graphs', 'Sensible estimates and rounding with units', 'Calendars and time zones', 'Coins and perimeter puzzles']);
  L.use(808, ['How do you choose appropriate units of measurement?', 'How do you convert between standard units of measurement?', 'How do you calculate perimeter?', 'Area of triangles, parallelograms and trapeziums', 'Volume of a prism', 'Sensible estimates and rounding with units', 'Coins and perimeter puzzles']);
  L.use(809, ['Simplifying and expanding', 'Formulae and equations', 'Expressions from words and shapes']);
  L.use(810, ['How do you label, draw and measure angles?', 'Angle rules', 'Parallel lines', 'Solid shapes and reflections', 'Polygon angles, bearings and coordinates']);
  L.use(811, ['What are two-dimensional shapes?', 'What are the properties of 2D shapes?', 'Four-quadrant coordinates and reflection', 'Symmetry and scale drawings', 'Solid shapes and reflections', 'Polygon angles, bearings and coordinates']);
  L.use(812, ['What is data handling?', 'How do you collect and record data?', 'Averages and the spread of data', 'Probability and relative frequency', 'Two-way tables, Venn diagrams and pie charts']);
  L.use(813, ['Nets and surface area', 'Views and cross-sections', 'Painted cubes and stacks']);
})();
