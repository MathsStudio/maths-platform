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
    ex: [['Multiplying by a whole number', '4.6 × 7', [["46 times 7 is 322. The question has 1 decimal place, so the answer has 1: 32.2.", E('46 × 7 = 322 → 4.6 × 7 = 32.2', 'g')]]],
      ['Decimal × decimal', '0.6 × 0.07', [["6 times 7 is 42. There are 3 decimal places in the question altogether, so 0.042.", E('0.6 × 0.07 = 0.042', 'g')]]],
      ['Dividing by a whole number', '9.36 ÷ 4', [["Use short division, keeping the point in line. 4 into 9 is 2, remainder 1. 4 into 13 is 3, remainder 1. 4 into 16 is 4. 2.34.", E('9.36 ÷ 4 = 2.34', 'g')]]],
      ['Dividing by a decimal', '7.2 ÷ 0.3', [["Multiply both numbers by 10 so you divide by a whole number: 72 divided by 3 is 24.", E('7.2 ÷ 0.3 = 72 ÷ 3 = 24', 'g')]]]],
    real: ['Shopping', "3.5 kilograms of apples at £1.20 a kilogram costs £4.20.", E('3.5 × £1.20 = £4.20', 'g')],
    turn: ["Your turn! Work out 2.4 times 0.5. Pause and try it.", E('2.4 × 0.5'), "24 times 5 is 120. 2 decimal places: 1.20, which is 1.2.", E('1.2', 'g')],
    rec: ["Multiply as whole numbers, then put back the total decimal places. Divide with the point in line. To divide by a decimal, multiply both numbers by 10 first.", ['× : count decimal places', '÷ : keep the point in line', '÷ decimal: scale both by 10', 'Estimate first']],
    deep: ['Multiplying both numbers in a division by 10 keeps the answer the same, because the ratio between them doesn’t change.', 'Multiplying by a number less than 1 makes the answer smaller: 0.6 × 0.07 is tiny.']
  });

  LS('Rounding and estimating', 'how to round to the nearest 10, 100, 1,000 and to decimal places, and estimate calculations.', {
    intro: ['Rounding', 'Simpler numbers', "Rounding replaces a number with a simpler 1 close to it. The rule: look at the next digit; 5 or more rounds up.", V.rule('Next digit 5 or more: round up.')],
    ex: [['Whole numbers', '36,482', [["To the nearest 10: 36,000, 480. Hundred: 36,000, 500. Thousand: 36,000.", V.tbl([['10', '36,480'], ['100', '36,500'], ['1,000', '36,000']], ['Nearest', 'Rounded'])]]],
      ['Decimals', '7.846', [["To 1 decimal place: 7.8. To 2 decimal places: 7.85.", E('7.846 → 7.8 (1 d.p.) → 7.85 (2 d.p.)', 'g')]]],
      ['Estimating', '387 × 52', [["Round to 400 times 50: 20,000. The exact answer, 20,000, 124, is close.", E('387 × 52 ≈ 400 × 50 = 20,000', 'g')]]]],
    real: ['Crowds', "A stadium crowd of 42,000, 718 is reported as about 43,000.", E('42,718 → 43,000', 'g')],
    turn: ["Your turn! Round 16.95 to 1 decimal place. Pause and try it.", E('16.95'), "The next digit is 5, so round up: 17.0.", E('17.0', 'g')],
    rec: ["Look at the digit after the one you round to: 5 or more rounds up. Round to 1 significant figure to estimate calculations.", ['Find the place', 'Look at the next digit', 'Round up or keep', 'Estimate with easy numbers']],
    deep: ['Rounding is about which number is nearer, so 5 rounds up by agreement because it is exactly halfway.', 'Rounding 9s carries: 16.95 to 1 d.p. becomes 17.0, not 16.10.']
  });

  /* ---------- 802 ---------- */
  LS('Negative numbers', 'how to order and calculate with negative numbers.', {
    intro: ['Below zero', 'The number line', "Negative numbers are less than 0. On a number line they sit to the left of 0. The further left, the smaller.", V.nl(-6, 6, { marks: [[-4, 22], [3, 150]] })],
    ex: [['Ordering', 'Smallest to largest', [["Order 4, negative 7, 0, negative 2: negative 7, negative 2, 0, 4.", E('−7 < −2 < 0 < 4', 'g')]]],
      ['Adding and subtracting', 'Moving on the line', [["Negative 3 add 8: move 8 right to 5. 2 take away 6: move 6 left to negative 4.", E('−3 + 8 = 5 · 2 − 6 = −4', 'g')]]],
      ['Two signs', 'Minus a negative', [["Subtracting a negative is the same as adding. 5 take away negative 3 is 8.", E('5 − (−3) = 5 + 3 = 8', 'g')]]],
      ['Multiplying and dividing', 'Sign rules', [["Same signs give a positive; different signs give a negative. Negative 4 times negative 5 is 20. Negative 18 divided by 3 is negative 6.", E('−4 × −5 = 20 · −18 ÷ 3 = −6', 'g')]]]],
    real: ['Temperature', "It was negative 5 degrees at night and rose by 12 degrees. The temperature became 7 degrees.", E('−5 + 12 = 7°C', 'g')],
    turn: ["Your turn! Work out negative 6 take away 4. Pause and try it.", E('−6 − 4'), "Start at negative 6 and move 4 left: negative 10.", E('−10', 'g')],
    rec: ["Negative numbers are left of 0. Adding moves right, subtracting moves left. Subtracting a negative means add. Same signs multiply to positive.", ['Left of zero = negative', '+ moves right, − moves left', '− (−) = +', 'Same signs ×: +']],
    deep: ['Taking away a debt is like being given money, which is why subtracting a negative adds.', '−7 is smaller than −2, even though 7 is bigger than 2.']
  });

  LS('Powers, roots and prime factors', 'how to work with powers and roots, and write numbers as products of prime factors.', {
    intro: ['Powers', 'Repeated multiplication', "A power shows repeated multiplication. 2 to the power 5 means 2 times itself 5 times: 32.", E('2⁵ = 2 × 2 × 2 × 2 × 2 = 32', 'g')],
    ex: [['Squares and cubes', 'Powers of 2 and 3', [["7 squared is 49. 4 cubed is 64.", E('7² = 49 · 4³ = 64', 'g')]]],
      ['Roots', 'Undo powers', [["The square root of 81 is 9. The cube root of 125 is 5.", E('√81 = 9 · ∛125 = 5', 'g')]]],
      ['Prime factors', 'A factor tree', [["72 splits into 8 times 9. 8 is 2 cubed; 9 is 3 squared. So 72 is 2 cubed times 3 squared.", E('72 = 2 × 2 × 2 × 3 × 3 = 2³ × 3²', 'g')]]],
      ['Using prime factors', 'HCF and LCM', [["12 is 2 squared times 3; 18 is 2 times 3 squared. The HCF uses the common primes: 2 times 3, 6. The LCM uses the highest powers: 2 squared times 3 squared, 36.", E('HCF = 6 · LCM = 36', 'g')]]]],
    real: ['Computers', "Computer memory comes in powers of 2: 256, 512, 1,024.", E('2⁸ = 256 · 2¹⁰ = 1,024', 'g')],
    turn: ["Your turn! Write 60 as a product of prime factors. Pause and try it.", E('60 = ?'), "60 is 2 times 2 times 3 times 5: 2 squared times 3 times 5.", E('2² × 3 × 5', 'g')],
    rec: ["Powers are repeated multiplication; roots undo them. Use a factor tree to write numbers as products of primes, and use them to find the HCF and LCM.", ['aⁿ: a multiplied n times', '√ and ∛ undo powers', 'Factor tree to primes', 'HCF: shared primes · LCM: highest powers']],
    deep: ['Every whole number has exactly 1 prime factorisation, like a fingerprint.', '2⁵ is 32, not 10. The power is not a multiplier.']
  });

  LS('Powers, negatives and BODMAS', 'how to use the order of operations with powers and negative numbers.', {
    intro: ['BODMAS', 'The agreed order', "Brackets, Orders, Division and Multiplication, Addition and Subtraction. Orders means powers and roots.", V.tbl([['B', 'Brackets'], ['O', 'Orders: powers, roots'], ['D M', 'left to right'], ['A S', 'left to right']], ['', 'Meaning'])],
    ex: [['Powers first', '3 + 2 × 4²', [["Orders: 4 squared is 16. Multiply: 2 times 16 is 32. Add: 35.", E('3 + 2 × 16 = 3 + 32 = 35', 'g')]]],
      ['Brackets and powers', '(3 + 2)²', [["Brackets first: 5. Then square: 25.", E('(3 + 2)² = 5² = 25', 'g')]]],
      ['Negatives and powers', '(−3)² and −3²', [["Negative 3, in brackets, squared is negative 3 times negative 3: 9. But negative 3 squared without brackets means negative of 3 squared: negative 9.", E('(−3)² = 9 · −3² = −9', 'g')]]],
      ['A mixed one', '20 − 4 × (−2)', [["Multiply first: 4 times negative 2 is negative 8. 20 take away negative 8 is 28.", E('20 − (−8) = 28', 'g')]]]],
    turn: ["Your turn! Work out 10 take away 2 cubed. Pause and try it.", E('10 − 2³'), "2 cubed is 8. 10 take away 8 is 2.", E('2', 'g')],
    rec: ["Follow BODMAS: brackets, orders, then division and multiplication, then addition and subtraction. Watch brackets around negative numbers.", ['Brackets first', 'Then powers and roots', '× ÷ left to right', '+ − left to right']],
    deep: ['Without an agreed order, 3 + 2 × 4² could give several answers; BODMAS makes it 1.', '(−3)² = 9 but −3² = −9. The bracket decides what is squared.']
  });

  /* ---------- 803 ---------- */
  LS('Adding and subtracting mixed numbers', 'how to add and subtract mixed numbers with different denominators.', {
    intro: ['Mixed numbers', 'Wholes and parts', "To add or subtract mixed numbers, you can deal with the wholes and the fractions separately, or change them to improper fractions.", E('2 1/3 + 1 1/2', 'b')],
    ex: [['Wholes and parts', '2 1/3 + 1 1/2', [["Add the wholes: 3. Add the fractions with a common denominator: 2 sixths plus 3 sixths is 5 sixths. 3 and 5 sixths.", E('3 + 5/6 = 3 5/6', 'g')]]],
      ['Carrying a whole', '1 3/4 + 2 2/3', [["Wholes: 3. Fractions: 9 twelfths plus 8 twelfths is 17 twelfths, which is 1 and 5 twelfths. Total: 4 and 5 twelfths.", E('3 + 1 5/12 = 4 5/12', 'g')]]],
      ['Subtracting', '5 1/4 − 2 2/3', [["Change to improper fractions: 21 quarters take away 8 thirds. Common denominator 12: 63 twelfths take away 32 twelfths is 31 twelfths: 2 and 7 twelfths.", E('63/12 − 32/12 = 31/12 = 2 7/12', 'g')]]]],
    real: ['Wood', "A plank is 4 and a half metres. A piece of 1 and 3 quarters metres is cut off. 2 and 3 quarters metres are left.", E('4 1/2 − 1 3/4 = 2 3/4 m', 'g')],
    turn: ["Your turn! Work out 3 and 2 fifths plus 1 and 1 half. Pause and try it.", E('3 2/5 + 1 1/2'), "Wholes: 4. Fractions: 4 tenths plus 5 tenths is 9 tenths. 4 and 9 tenths.", E('4 9/10', 'g')],
    rec: ["Add or subtract the wholes and the fractions, using a common denominator. If subtracting is awkward, change to improper fractions first.", ['Common denominator', 'Wholes and fractions separately', 'Carry if the fraction is over 1', 'Or use improper fractions']],
    deep: ['Changing to improper fractions always works, even when the fraction part is too small to subtract.', 'When the fraction part adds to more than 1, carry a whole into the whole-number part.']
  });

  LS('Multiplying and dividing fractions', 'how to multiply and divide fractions and mixed numbers.', {
    intro: ['Multiplying fractions', 'Tops and bottoms', "To multiply fractions, multiply the numerators and multiply the denominators. Simplify at the end, or cancel first.", E('2/3 × 3/5 = 6/15 = 2/5', 'g')],
    ex: [['Cancelling first', '4/9 × 3/8', [["4 and 8 share a factor of 4; 3 and 9 share 3. Cancel: 1 third times 1 half is 1 sixth.", E('4/9 × 3/8 = 1/3 × 1/2 = 1/6', 'g')]]],
      ['Dividing', 'Keep, change, flip', [["3 quarters divided by 2 fifths: keep 3 quarters, change to multiply, flip to 5 halves. 15 eighths, which is 1 and 7 eighths.", E('3/4 × 5/2 = 15/8 = 1 7/8', 'g')]]],
      ['Mixed numbers', 'Change first', [["2 and a half times 1 and a third: 5 halves times 4 thirds is 20 sixths, which is 3 and 1 third.", E('5/2 × 4/3 = 20/6 = 3 1/3', 'g')]]]],
    real: ['Recipes', "A recipe needs 3 quarters of a cup of sugar. 2 thirds of the recipe needs half a cup.", E('2/3 × 3/4 = 1/2', 'g')],
    turn: ["Your turn! Work out 5 sixths divided by 5 twelfths. Pause and try it.", E('5/6 ÷ 5/12'), "Flip to 12 fifths: 5 sixths times 12 fifths is 60 thirtieths, which is 2.", E('2', 'g')],
    rec: ["Multiply tops and bottoms, cancelling first where you can. To divide, keep the first, change to multiply, flip the second. Change mixed numbers to improper fractions first.", ['× : tops × tops, bottoms × bottoms', 'Cancel to save work', '÷ : keep, change, flip', 'Mixed → improper first']],
    deep: ['Dividing by a fraction is the same as multiplying by its reciprocal, because they undo each other.', 'Never multiply mixed numbers part by part: 2½ × 1⅓ is not 2 × 1 plus ½ × ⅓.']
  });

  /* ---------- 804 ---------- */
  LS('Percentages of amounts', 'how to find any percentage of an amount, with and without a calculator.', {
    intro: ['A percentage of an amount', 'Two methods', "Build the percentage from 10%, 5% and 1%, or multiply by the percentage as a decimal.", V.cards(['Build: 10%, 5%, 1%', 'Decimal: × 0.36'], ['b', 'g'])],
    ex: [['Building', '36% of £250', [["10% is £25, so 30% is 75. 1% is £2.50, so 6% is 15. 36% is £90.", E('£75 + £15 = £90', 'g')]]],
      ['Decimal multiplier', '36% of £250', [["36% is 0.36. 0.36 times 250 is 90.", E('0.36 × 250 = 90', 'g')]]],
      ['Fractions help', '12.5% of 64', [["12 and a half per cent is 1 eighth. 1 eighth of 64 is 8.", E('12.5% = 1/8 → 64 ÷ 8 = 8', 'g')]]]],
    real: ['VAT', "VAT is 20%. On a £75 item, VAT is £15, so the price is £90.", E('20% of £75 = £15', 'g')],
    turn: ["Your turn! Find 17% of 300. Pause and try it.", E('17% of 300'), "10% is 30, 7% is 21. 51.", E('51', 'g')],
    rec: ["Build percentages from 10, 5 and 1%, use a decimal multiplier, or use a fraction you know.", ['10% → ÷ 10, 1% → ÷ 100', 'Decimal × amount', '12.5% = ⅛, 33⅓% = ⅓', 'Check it is sensible']],
    deep: ['Any percentage is just "hundredths of" the amount, so 36% of 250 is 36 × 2.5.', 'Percentages above 100% give an answer bigger than the amount.']
  });

  LS('Percentage increase and decrease', 'how to increase or decrease an amount by a percentage.', {
    intro: ['Changing by a percentage', 'Up or down', "To increase, add the percentage on. To decrease, take it off. A multiplier does it in 1 step.", V.cards(['Increase: × 1.15', 'Decrease: × 0.85'], ['g', 'b'])],
    ex: [['Decrease', '15% off £80', [["15% of 80 is 12. 80 take away 12 is £68.", E('£80 − £12 = £68', 'g')]]],
      ['Increase', '6% rise on £350', [["6% of 350 is 21. The new amount is £371.", E('£350 + £21 = £371', 'g')]]],
      ['Multipliers', 'One step', [["15% off leaves 85%: times 0.85. A 6% rise is 106%: times 1.06.", E('80 × 0.85 = 68 · 350 × 1.06 = 371', 'g')]]],
      ['Percentage change', 'Change ÷ original', [["A price rose from 50 to £60. The change is £10. 10 divided by 50 is 0.2: a 20% increase.", E('10 ÷ 50 × 100 = 20%', 'g')]]]],
    turn: ["Your turn! Decrease 200 by 30%. Pause and try it.", E('200 − 30%'), "30% of 200 is 60. 200 take away 60 is 140.", E('140', 'g')],
    rec: ["Find the percentage and add or subtract it, or multiply by 1 plus or minus the percentage as a decimal. Percentage change is change over original.", ['Increase: add on', 'Decrease: take off', 'Multiplier: 1 ± rate', 'Change ÷ original × 100']],
    deep: ['A multiplier combines finding the percentage and adding it on into 1 step.', 'A 10% rise then a 10% fall does not return to the start: £100 → £110 → £99.']
  });

  /* ---------- 805 ---------- */
  LS('Simplifying and sharing in a ratio', 'how to simplify ratios and share amounts in a given ratio.', {
    intro: ['Ratio', 'Comparing parts', "A ratio compares amounts. 5 red to 10 blue is written 5 to 10. Ratios can be simplified like fractions.", E('5 : 10 = 1 : 2', 'g')],
    ex: [['Simplifying', 'Divide by the HCF', [["24 to 36: the highest common factor is 12. Divide both: 2 to 3.", E('24 : 36 = 2 : 3', 'g')]]],
      ['Three-part ratios', '12 : 18 : 30', [["Divide all 3 by 6: 2 to 3 to 5.", E('12 : 18 : 30 = 2 : 3 : 5', 'g')]]],
      ['Sharing', '£180 in 2 : 3 : 4', [["Total parts: 9. 1 part: 180 divided by 9 is £20. Shares: 40, 60 and £80.", E('£40 · £60 · £80', 'g') + V.rule('Add the parts, find 1 part, multiply.')]]],
      ['From one share', 'Find the total', [["The ratio of boys to girls is 3 to 4, and there are 15 boys. 1 part is 5, so there are 20 girls and 35 pupils.", E('3 parts = 15 → 1 part = 5 → total 35', 'g')]]]],
    real: ['Mixing paint', "Blue and yellow paint mixed in the ratio 2 to 5 makes green. For 7 litres you need 2 litres of blue and 5 of yellow.", E('2 : 5 → 2 l and 5 l', 'g')],
    turn: ["Your turn! Share 72 sweets in the ratio 5 to 3. Pause and try it.", E('72 in 5 : 3'), "8 parts, so 1 part is 9. 45 and 27.", E('45 and 27', 'g')],
    rec: ["Simplify a ratio by dividing every part by the same number. To share, add the parts, find 1 part, then multiply.", ['Simplify: ÷ by the HCF', 'Add the parts', 'Total ÷ parts = one part', 'Check shares add to the total']],
    deep: ['A ratio is about parts, not amounts: 2 : 3 could be 2 and 3, or 200 and 300.', 'Read which share the question asks for: the first part, the second, or the difference.']
  });

  LS('Direct proportion', 'how to solve problems where 2 quantities increase together at the same rate.', {
    intro: ['Direct proportion', 'Double one, double the other', "2 quantities are in direct proportion if they grow together at the same rate: double 1 and the other doubles.", V.tbl([['1', '£2.40'], ['2', '£4.80'], ['5', '£12']], ['Tickets', 'Cost'])],
    ex: [['The unitary method', 'Find one first', [["5 notebooks cost £6.50. 1 costs £1.30. So 8 cost £10.40.", E('£6.50 ÷ 5 = £1.30 → × 8 = £10.40', 'g')]]],
      ['Recipes', 'Scaling', [["A recipe for 4 uses 300 grams of flour. For 10 people: 75 grams per person, times 10 is 750 grams.", E('300 ÷ 4 × 10 = 750 g', 'g')]]],
      ['Best buy', 'Compare one unit', [["500 grams for £2 or 750 grams for £2.85? Per hundred grams: 40p and 38p. The bigger pack is better value.", E('40p vs 38p per 100 g', 'g')]]]],
    real: ['Fuel', "A car uses 6 litres of fuel to go 100 kilometres. For 250 kilometres it needs 15 litres.", E('6 × 2.5 = 15 l', 'g')],
    turn: ["Your turn! 3 pens cost £2.70. How much do 7 cost? Pause and try it.", E('£2.70 ÷ 3 × 7'), "1 costs 90p. 7 cost £6.30.", E('£6.30', 'g')],
    rec: ["In direct proportion, find the value of 1, then multiply. Use it for recipes, prices and best buys.", ['Grow together at the same rate', 'Unitary method: find 1', 'Then multiply', 'Compare per unit for best buys']],
    deep: ['In direct proportion, the ratio between the 2 quantities always stays the same.', 'Not everything is proportional: a taxi with a fixed charge plus a price per mile is not.']
  });

  /* ---------- 806 ---------- */
  LS('Wages and overtime', 'how to calculate pay, including overtime and bonuses.', {
    intro: ['Earning money', 'Wages and salaries', "A wage is paid per hour or per week. A salary is a fixed amount per year. Overtime is extra hours, often paid at a higher rate.", V.cards(['Wage: per hour', 'Salary: per year', 'Overtime: extra rate'], ['b', 'p', 'g'])],
    ex: [['Hourly pay', 'Rate × hours', [["Sam earns £11.20 an hour for 35 hours: £392.", E('35 × £11.20 = £392', 'g')]]],
      ['Time and a half', 'Overtime', [["Overtime at time and a half pays 1.5 times the normal rate. 6 hours of overtime at £11.20: 1.5 times £11.20 is £16.80, times 6 is £100.80.", E('6 × 1.5 × £11.20 = £100.80', 'g')]]],
      ['Double time', 'Sundays', [["Double time pays twice the rate. 4 hours at double time: 4 times £22.40 is £89.60.", E('4 × 2 × £11.20 = £89.60', 'g')]]],
      ['Salary', 'Per month', [["A salary of £27,000 a year is 27,000 divided by 12: £2,250 a month.", E('£27,000 ÷ 12 = £2,250', 'g')]]]],
    turn: ["Your turn! 10 hours at £10 plus 4 hours at time and a half. Pause and try it.", E('10 × £10 + 4 × £15'), "£100 plus £60: £160.", E('£160', 'g')],
    rec: ["Pay is rate times hours. Time and a half is 1.5 times the rate; double time is twice. Divide a salary by 12 for monthly pay.", ['Pay = rate × hours', 'Time and a half: × 1.5', 'Double time: × 2', 'Salary ÷ 12 = monthly']],
    deep: ['Overtime rates are multipliers on the normal rate, so find the new rate first, then multiply by the hours.', 'Don’t multiply the total by 1.5: only the overtime hours get the higher rate.']
  });

  LS('VAT and simple interest', 'how to add VAT to prices and calculate simple interest.', {
    intro: ['VAT', 'A tax on spending', "Value Added Tax, VAT, is added to many prices in the UK. The standard rate is 20%.", E('Price with VAT = price × 1.2', 'g')],
    ex: [['Adding VAT', '£340 + VAT', [["20% of £340 is £68. The total is £408.", E('£340 × 1.2 = £408', 'g')]]],
      ['Simple interest', 'Same each year', [["Simple interest pays the same amount every year. £500 at 3% for 4 years: 3% is £15, times 4 is £60.", E('£500 × 0.03 × 4 = £60', 'g')]]],
      ['Total amount', 'Add the interest', [["After 4 years, the total is £560.", E('£500 + £60 = £560', 'g')]]],
      ['Part of a year', 'Months', [["For 6 months, use half a year: £1,200 at 4% for 6 months is £24.", E('£1,200 × 0.04 × 0.5 = £24', 'g')]]]],
    turn: ["Your turn! What is the simple interest on £800 at 2% for 3 years? Pause and try it.", E('£800 × 0.02 × 3'), "2% is £16 a year; 3 years is £48.", E('£48', 'g')],
    rec: ["Add VAT by multiplying by 1.2. Simple interest is the same each year: amount times rate times years.", ['VAT 20%: × 1.2', 'Simple interest = P × r × t', 'Months: fraction of a year', 'Total = amount + interest']],
    deep: ['Simple interest is only on the original amount, which is why it is the same every year.', 'Convert months to a fraction of a year: 6 months is 0.5, 3 months is 0.25.']
  });

  LS('Best buys, interest and exchange', 'how to compare deals, and use exchange rates and interest.', {
    intro: ['Making money decisions', 'Compare fairly', "To compare deals, compare the same quantity: price per item, per gram or per litre.", V.rule('Compare like with like.')],
    ex: [['Best buy', 'Price per unit', [["2 litres of juice for £1.80, or 3 litres for £2.64? Per litre: 90p and 88p. The 3-litre bottle is better value.", E('90p vs 88p per litre', 'g')]]],
      ['Offers', 'Three for two', [["3 for the price of 2: you pay for 2 items but get 3, so each costs 2 thirds of the price.", E('3 for 2 → each ⅔ price', 'g')]]],
      ['Exchange', 'Euros', [["If £1 is 1 euro 16, £300 is 348 euros. 87 euros is £75.", E('£300 × 1.16 = €348 · €87 ÷ 1.16 = £75', 'g')]]],
      ['Comparing interest', 'Which account?', [["Account A pays three per cent; account B pays two point five per cent plus a ten pound bonus. On four hundred pounds for one year: A gives twelve pounds, B gives twenty. B is better here.", E('A: £12 · B: £10 + £10 = £20', 'g')]]]],
    turn: ["Your turn! Which is better value: 400 grams for £1.60, or 1 kilogram for £3.90? Pause and try it.", E('per 100 g'), "40p and 39p per hundred grams. The kilogram bag.", E('1 kg for £3.90', 'g')],
    rec: ["Compare the price per unit to find the best buy. Multiply by the exchange rate to change pounds, divide to change back. Compare interest by working out what each account actually pays.", ['Price per unit', 'Offers: work out each item', 'Exchange: × or ÷ the rate', 'Compare actual interest']],
    deep: ['Unit prices put deals on the same scale, so the comparison is fair.', 'A bigger pack is not always cheaper per item. Always check.']
  });

  /* ---------- 807 ---------- */
  LS('Speed, distance and time', 'how to calculate speed, distance and time.', {
    intro: ['Speed', 'How fast?', "Speed is the distance travelled in a unit of time, like kilometres per hour.", E('Speed = Distance ÷ Time', 'g')],
    ex: [['Speed', 'D ÷ T', [["A cyclist rides 45 kilometres in 3 hours: 15 kilometres per hour.", E('45 ÷ 3 = 15 km/h', 'g')]]],
      ['Distance', 'S × T', [["A train travels at 120 kilometres per hour for 2 and a half hours: 300 kilometres.", E('120 × 2.5 = 300 km', 'g')]]],
      ['Time', 'D ÷ S', [["A car travels 192 kilometres at 64 kilometres per hour: 3 hours.", E('192 ÷ 64 = 3 h', 'g')]]],
      ['Minutes', 'Change to hours', [["20 minutes is a third of an hour. At 60 kilometres per hour, you travel 20 kilometres. 45 minutes is 0.75 hours.", E('20 min = ⅓ h · 45 min = 0.75 h', 'g')]]]],
    real: ['A journey', "Glasgow to Edinburgh is 75 kilometres. At 60 kilometres per hour it takes 1 hour 15 minutes.", E('75 ÷ 60 = 1.25 h = 1 h 15 min', 'g')],
    turn: ["Your turn! How far do you walk in 30 minutes at 5 kilometres per hour? Pause and try it.", E('5 × 0.5'), "30 minutes is half an hour: 2 and a half kilometres.", E('2.5 km', 'g')],
    rec: ["Speed is distance divided by time. Rearrange for distance or time. Always change minutes into hours first.", ['S = D ÷ T', 'D = S × T', 'T = D ÷ S', 'Minutes → hours']],
    deep: ['The units tell you the formula: km per hour means km ÷ hours.', 'A time of 1.25 hours is 1 hour 15 minutes, not 1 hour 25 minutes.']
  });

  LS('Distance–time graphs', 'how to read journeys from distance–time graphs.', {
    intro: ['Distance–time graphs', 'A journey as a picture', "Time goes along the bottom and distance up the side. The line shows where someone was at each moment.", V.note('Steeper line = faster')],
    ex: [['Reading the graph', 'Sloping, flat, steep', [["A sloping line means moving. A flat line means stopped. A steeper line means faster.", V.cards(['Sloping: moving', 'Flat: stopped', 'Steep: fast'], ['b', 'p', 'g'])]]],
      ['Working out speed', 'From a section', [["If a line goes from 0 to 12 kilometres in 1 hour, the speed is 12 kilometres per hour.", E('12 km ÷ 1 h = 12 km/h', 'g')]]],
      ['A return journey', 'Coming back', [["When the line comes back down to 0, the person is returning home. Work out speed the same way.", E('Line back down = returning', 'g')]]]],
    turn: ["Your turn! A flat section lasts 30 minutes. What happened? Pause and think.", E('?'), "The distance didn't change, so they stopped for 30 minutes.", E('Stopped for 30 min', 'g')],
    rec: ["On a distance–time graph, sloping lines show movement, flat lines show a stop and steeper lines show faster speeds. Speed is distance over time for each section.", ['Sloping: moving', 'Flat: stopped', 'Steeper: faster', 'Speed = change in D ÷ change in T']],
    deep: ['The gradient of a distance–time graph is the speed.', 'Read the scales carefully: each square is not always 1 unit.']
  });

  LS('Coins and perimeter puzzles', 'how to solve puzzles with coins and with perimeters.', {
    intro: ['Puzzles', 'Think before calculating', "Puzzles about coins and perimeters need careful thinking: list possibilities, look for patterns and check your answer.", V.list(['List the options', 'Look for patterns', 'Check every condition'])],
    ex: [['Coins', 'Making 50p', [["How can you make 50p with exactly 4 coins? 20, 20, 5 and 5 works. So does 20, 10, 10 and 10.", E('20 + 20 + 5 + 5 = 50 · 20 + 10 + 10 + 10 = 50', 'g')]]],
      ['Fewest coins', 'Start big', [["The fewest coins for 87p: 50, 20, 10, 5, 2: that is 87 with 5 coins.", E('50 + 20 + 10 + 5 + 2 = 87', 'g')]]],
      ['Perimeter puzzle', 'Same area, different perimeter', [["12 squares can make a 1 by 12 rectangle with perimeter 26, or a 3 by 4 with perimeter 14. Same area, different perimeters.", E('1 × 12: P = 26 · 3 × 4: P = 14', 'g')]]],
      ['Fixed perimeter', 'Biggest area', [["With a 20 metre fence, a 5 by 5 square gives the biggest rectangle area: 25 square metres.", E('5 × 5 = 25 m²', 'g')]]]],
    turn: ["Your turn! Find 2 rectangles made of 18 squares with different perimeters. Pause and try it.", E('area 18'), "2 by 9 has perimeter 22; 3 by 6 has perimeter 18.", E('2 × 9: 22 · 3 × 6: 18', 'g')],
    rec: ["List possibilities in order so none are missed. For coins, start with the biggest. Shapes with the same area can have different perimeters.", ['List systematically', 'Coins: biggest first', 'Same area ≠ same perimeter', 'Check every condition']],
    deep: ['Working systematically, in order, is how mathematicians make sure no answer is missed.', 'The most compact shape has the smallest perimeter for its area.']
  });

  /* ---------- 808 ---------- */
  LS('Area of triangles, parallelograms and trapeziums', 'the area formulas for triangles, parallelograms and trapeziums.', {
    intro: ['Area formulas', 'From rectangles', "These shapes can all be rearranged from rectangles, so their area formulas come from length times width.", V.tbl([['Triangle', '½ × b × h'], ['Parallelogram', 'b × h'], ['Trapezium', '½ × (a + b) × h']], ['Shape', 'Area'])],
    ex: [['Triangle', 'Half a rectangle', [["Base 12 centimetres, height 7: half of 84 is 42 square centimetres.", E('½ × 12 × 7 = 42 cm²', 'g')]]],
      ['Parallelogram', 'Slide a triangle', [["Cut a triangle off 1 end and slide it to the other: you get a rectangle. Base 9, height 5: 45 square centimetres.", E('9 × 5 = 45 cm²', 'g')]]],
      ['Trapezium', 'Average of parallel sides', [["Parallel sides 6 and 10, height 4: the average of 6 and 10 is 8, times 4 is 32 square centimetres.", E('½ × (6 + 10) × 4 = 32 cm²', 'g')]]]],
    real: ['A garden bed', "A trapezium-shaped lawn has parallel sides of 8 and 12 metres, 5 metres apart. Its area is 50 square metres.", E('½ × 20 × 5 = 50 m²', 'g')],
    turn: ["Your turn! A parallelogram has a base of 11 and a height of 6. What is its area? Pause and try it.", E('11 × 6'), "66 square units.", E('66', 'g')],
    rec: ["Triangle: half base times height. Parallelogram: base times height. Trapezium: half the sum of the parallel sides times height. Always use the perpendicular height.", ['Triangle ½bh', 'Parallelogram bh', 'Trapezium ½(a + b)h', 'Use perpendicular height']],
    deep: ['Each formula comes from cutting and rearranging into a rectangle.', 'Use the height at right angles to the base, never the slanted side.']
  });

  LS('Volume of a prism', 'how to find the volume of a prism using its cross-section.', {
    intro: ['Prisms', 'Same shape all the way through', "A prism has the same cross-section all along its length, like a Toblerone box or a cuboid.", cubes([[2, 2, 2], [2, 2, 2]])],
    ex: [['The formula', 'Area of cross-section × length', [["The volume of any prism is the area of the cross-section times the length.", E('V = A × l', 'g')]]],
      ['Cuboid', 'A rectangle cross-section', [["A cuboid with a cross-section of 4 by 3 and length 10: 12 times 10 is 120 cubic centimetres.", E('12 × 10 = 120 cm³', 'g')]]],
      ['Triangular prism', 'A triangle cross-section', [["A triangle with base 6 and height 5 has area 15. With a length of 20: 300 cubic centimetres.", E('15 × 20 = 300 cm³', 'g')]]],
      ['Capacity', 'Litres', [["A prism-shaped trough holds 40,000 cubic centimetres: 40 litres.", E('40,000 cm³ = 40 l', 'g')]]]],
    turn: ["Your turn! A prism has a cross-section of 24 square centimetres and a length of 9. What is its volume? Pause and try it.", E('24 × 9'), "216 cubic centimetres.", E('216 cm³', 'g')],
    rec: ["A prism's volume is the area of its cross-section times its length. Work out the cross-section first, then multiply.", ['Prism: same cross-section', 'V = area × length', 'Units: cm³ or m³', '1,000 cm³ = 1 litre']],
    deep: ['Volume of a prism works like stacking slices: each slice has the cross-section area.', 'Make sure the length is the edge perpendicular to the cross-section.']
  });

  /* ---------- 809 ---------- */
  LS('Simplifying and expanding', 'how to collect like terms and expand single brackets.', {
    intro: ['Algebraic expressions', 'Letters and numbers', "An expression mixes letters and numbers, like 3 a plus 2 b. Terms with the same letters are like terms and can be combined.", E('3a + 2b + 4a = 7a + 2b', 'g')],
    ex: [['Collecting like terms', 'Combine the same letters', [["5 x plus 3 y take away 2 x plus y: 5 x take away 2 x is 3 x; 3 y plus y is 4 y.", E('5x + 3y − 2x + y = 3x + 4y', 'g')]]],
      ['Multiplying terms', 'Letters next to each other', [["3 a times 4 b is 12 a b. 2 x times x is 2 x squared.", E('3a × 4b = 12ab · 2x × x = 2x²', 'g')]]],
      ['Expanding brackets', 'Multiply everything inside', [["4, bracket, x plus 3: multiply each term by 4. 4 x plus 12.", E('4(x + 3) = 4x + 12', 'g')]]],
      ['Expand and simplify', 'Two brackets', [["3, bracket, x plus 2, plus 2, bracket, x minus 1: 3 x plus 6 plus 2 x minus 2. 5 x plus 4.", E('3(x + 2) + 2(x − 1) = 5x + 4', 'g')]]]],
    turn: ["Your turn! Expand 5, bracket, 2 y minus 3. Pause and try it.", E('5(2y − 3)'), "10 y take away 15.", E('10y − 15', 'g')],
    rec: ["Collect like terms by combining the same letters. To expand a bracket, multiply every term inside by the term outside. Then simplify.", ['Like terms: same letters', 'Combine their numbers', 'Expand: multiply every term', 'Then simplify']],
    deep: ['Expanding uses the same idea as partitioning: 4 × 23 = 4 × 20 + 4 × 3.', 'Multiply every term inside the bracket, including the second 1: 4(x + 3) is not 4x + 3.']
  });

  LS('Formulae and equations', 'how to use formulae by substituting, and how to solve equations.', {
    intro: ['Formulae', 'A rule with letters', "A formula is a rule written with letters, like the area of a rectangle: A equals l times w.", E('A = l × w', 'g')],
    ex: [['Substituting', 'Put the numbers in', [["The formula for the cost of a taxi is C equals 2 plus 1.5 m. For 8 miles: 2 plus 12 is £14.", E('C = 2 + 1.5 × 8 = £14', 'g')]]],
      ['Solving an equation', 'Balance', [["4 x plus 7 equals 31. Take 7 from both sides: 4 x equals 24. Divide by 4: x equals 6.", E('4x + 7 = 31 → x = 6', 'g')]]],
      ['Letters both sides', 'Collect them', [["6 x minus 4 equals 2 x plus 12. Take 2 x from both sides: 4 x minus 4 equals 12. So 4 x equals 16, x equals 4.", E('6x − 4 = 2x + 12 → x = 4', 'g')]]],
      ['Writing an equation', 'From words', [["A rectangle's length is 3 more than its width, and its perimeter is 30. 2 w plus 2, bracket, w plus 3, equals 30: 4 w plus 6 equals 30, so w equals 6.", E('4w + 6 = 30 → w = 6', 'g')]]]],
    turn: ["Your turn! Solve 3, bracket, x minus 2, equals 18. Pause and try it.", E('3(x − 2) = 18'), "Divide by 3: x minus 2 equals 6. So x equals 8.", E('x = 8', 'g')],
    rec: ["Substitute numbers into formulae carefully, following BODMAS. Solve equations by doing the same to both sides, and check your answer.", ['Substitute, then use BODMAS', 'Balance both sides', 'Collect letters on one side', 'Check by substituting']],
    deep: ['A formula works for any values; an equation is true only for particular values.', 'When substituting, 2x with x = 5 is 10, not 25.']
  });

  /* ---------- 810 ---------- */
  LS('Angle rules', 'the basic angle facts and how to use them to find missing angles.', {
    intro: ['Angle facts', 'The rules', "Angles on a straight line add up to 180 degrees. Round a point, 360. In a triangle, 180. Vertically opposite angles are equal.", V.tbl([['Straight line', '180°'], ['Round a point', '360°'], ['Triangle', '180°'], ['Quadrilateral', '360°']], ['Where', 'Sum'])],
    ex: [['Straight line', 'Missing angle', [["1 angle on a line is 137 degrees. The other is 43.", E('180° − 137° = 43°', 'g')]]],
      ['Isosceles triangle', 'Two equal angles', [["An isosceles triangle has a top angle of 40 degrees. The other 2 are equal: 140 divided by 2, 70 degrees each.", E('(180° − 40°) ÷ 2 = 70°', 'g')]]],
      ['Vertically opposite', 'Crossing lines', [["2 lines cross. 1 angle is 65 degrees. The opposite 1 is 65, and the neighbours are 115.", E('65°, 115°, 65°, 115°', 'g')]]]],
    turn: ["Your turn! 3 angles round a point are 100, 120 and 90 degrees. Find the fourth. Pause and try it.", E('360° − 310°'), "Fifty degrees.", E('50°', 'g')],
    rec: ["Use the angle facts: straight line 180, round a point 360, triangle 180, vertically opposite angles equal. Give a reason for each step.", ['Line: 180°', 'Point: 360°', 'Triangle: 180°', 'Opposite angles equal']],
    deep: ['Most angle problems are solved by spotting which fact applies, then subtracting from the total.', 'Always state the reason, like "angles on a straight line", not just the number.']
  });

  LS('Parallel lines', 'the angle facts for a line crossing 2 parallel lines.', {
    intro: ['Parallel lines', 'Crossed by a transversal', "When a line crosses 2 parallel lines, it makes pairs of angles that are equal or add to 180 degrees.", V.note('Corresponding (F), alternate (Z), co-interior (C)')],
    ex: [['Corresponding angles', 'F shape: equal', [["Corresponding angles are in matching positions at each crossing. They are equal.", E('a = b', 'g')]]],
      ['Alternate angles', 'Z shape: equal', [["Alternate angles sit inside the parallel lines, on opposite sides. They are equal.", E('a = b', 'g')]]],
      ['Co-interior angles', 'C shape: add to 180°', [["Co-interior angles sit inside, on the same side. They add to 180 degrees. If 1 is 72, the other is 108.", E('180° − 72° = 108°', 'g')]]]],
    turn: ["Your turn! An alternate angle to 58 degrees. What is it? Pause and think.", E('?'), "Alternate angles are equal: 58 degrees.", E('58°', 'g')],
    rec: ["Corresponding angles and alternate angles are equal. Co-interior angles add to 180 degrees. Name the rule each time.", ['Corresponding (F): equal', 'Alternate (Z): equal', 'Co-interior (C): 180°', 'Give the reason']],
    deep: ['These rules work because the transversal crosses both parallel lines at the same angle.', 'Only use them when the lines are marked parallel.']
  });

  LS('Polygon angles, bearings and coordinates', 'how to find angles in polygons, use bearings and plot coordinates in 4 quadrants.', {
    intro: ['Three geometry skills', 'Polygons, bearings, coordinates', "This lesson brings together angles inside polygons, 3-figure bearings, and coordinates in all 4 quadrants.", V.list(['Polygon angles', 'Bearings', 'Coordinates'])],
    ex: [['Interior angles', '(n − 2) × 180°', [["A pentagon's angles add to 3 times 180: 540 degrees. A regular pentagon's angles are 108 each.", E('540° ÷ 5 = 108°', 'g')]]],
      ['Exterior angles', 'Add to 360°', [["The exterior angles of any polygon add to 360 degrees. A regular hexagon's exterior angle is 60 degrees.", E('360° ÷ 6 = 60°', 'g')]]],
      ['Bearings', 'Clockwise from north', [["Bearings are measured clockwise from north, with 3 figures. South-west is 2 2 5 degrees.", E('SW = 225°', 'g')]]],
      ['Four quadrants', 'Negative coordinates', [["Points can have negative coordinates. Negative 3, 2 is 3 left and 2 up.", E('(−3, 2): 3 left, 2 up', 'g')]]]],
    turn: ["Your turn! What is each exterior angle of a regular octagon? Pause and try it.", E('360° ÷ 8'), "Forty-five degrees.", E('45°', 'g')],
    rec: ["Interior angles add to n minus 2 times 180. Exterior angles add to 360. Bearings go clockwise from north with 3 figures. Coordinates go across, then up, including negatives.", ['Interior: (n − 2) × 180°', 'Exterior: total 360°', 'Bearings: clockwise from N', '(x, y) in 4 quadrants']],
    deep: ['Walking round any polygon you turn through 1 full turn, which is why exterior angles add to 360°.', 'Always write bearings with 3 figures: 045°, not 45°.']
  });

  /* ---------- 811 ---------- */
  LS('Four-quadrant coordinates and reflection', 'how to plot points in all 4 quadrants and reflect shapes in the axes.', {
    intro: ['Four quadrants', 'Negative coordinates', "The axes cross at the origin. Going left or down gives negative coordinates.", E('(x, y): across, then up or down', 'g')],
    ex: [['Plotting', 'Four points', [["2, 3 is in the top right. Negative 2, 3 is top left. Negative 2, negative 3 is bottom left. 2, negative 3 is bottom right.", V.tbl([['(2, 3)', 'top right'], ['(−2, 3)', 'top left'], ['(−2, −3)', 'bottom left'], ['(2, −3)', 'bottom right']], ['Point', 'Quadrant'])]]],
      ['Reflect in the y-axis', 'x changes sign', [["Reflecting in the y-axis flips left and right: 4, 1 becomes negative 4, 1.", E('(4, 1) → (−4, 1)', 'g')]]],
      ['Reflect in the x-axis', 'y changes sign', [["Reflecting in the x-axis flips up and down: 4, 1 becomes 4, negative 1.", E('(4, 1) → (4, −1)', 'g')]]],
      ['Reflect in y = x', 'Swap the coordinates', [["Reflecting in the line y equals x swaps the coordinates: 4, 1 becomes 1, 4.", E('(4, 1) → (1, 4)', 'g')]]]],
    turn: ["Your turn! Reflect negative 3, 5 in the x-axis. Pause and think.", E('(−3, 5)'), "The y-coordinate changes sign: negative 3, negative 5.", E('(−3, −5)', 'g')],
    rec: ["Coordinates go across then up, and can be negative. Reflecting in the y-axis changes the sign of x; in the x-axis, the sign of y; in y = x, swap them.", ['Across, then up', 'y-axis: x changes sign', 'x-axis: y changes sign', 'y = x: swap']],
    deep: ['A reflection keeps each point the same distance from the mirror line, which is why only one coordinate changes sign.', 'The x-axis is horizontal: reflecting in it changes y, not x.']
  });

  LS('Symmetry and scale drawings', 'how to find lines and order of rotational symmetry, and use scales in drawings.', {
    intro: ['Two kinds of symmetry', 'Line and rotational', "A shape has line symmetry if a mirror line splits it into matching halves. It has rotational symmetry if it looks the same after a turn of less than a full turn.", V.cards(['Line symmetry', 'Rotational symmetry'], ['b', 'g'])],
    ex: [['Order of rotation', 'How many matches?', [["A square looks the same 4 times in a full turn: order 4. A rectangle: order 2. An equilateral triangle: order 3.", V.tbl([['Square', '4', '4'], ['Rectangle', '2', '2'], ['Equilateral triangle', '3', '3'], ['Parallelogram', '0', '2']], ['Shape', 'Lines', 'Order'])]]],
      ['Scale drawings', 'Scale 1 : 50', [["On a scale of 1 to 50, 1 centimetre on the drawing is 50 centimetres in real life. A wall drawn 8 centimetres long is 4 metres.", E('8 × 50 = 400 cm = 4 m', 'g')]]],
      ['Map scales', '1 : 25,000', [["On a 1 to 25,000 map, 4 centimetres is 100,000 centimetres, which is 1 kilometre.", E('4 cm → 1 km', 'g')]]]],
    turn: ["Your turn! On a 1 to 100 plan, a room is 6 centimetres long. How long is the real room? Pause and try it.", E('6 × 100'), "600 centimetres, which is 6 metres.", E('6 m', 'g')],
    rec: ["Count lines of symmetry and how many times a shape fits onto itself in a turn. For scale drawings, multiply by the scale and change units.", ['Lines of symmetry: fold test', 'Order: matches in 1 turn', 'Scale 1 : n → × n', 'Convert the units']],
    deep: ['Every shape has rotational order at least 1, because it always fits after a full turn.', 'After multiplying by the scale, convert to sensible units: 400 cm is 4 m.']
  });

  /* ---------- 812 ---------- */
  LS('Averages and the spread of data', 'how to find and compare the mean, median, mode and range.', {
    intro: ['Averages', 'One number for a typical value', "An average describes a typical value. The range describes how spread out the data is.", V.tbl([['Mean', 'total ÷ how many'], ['Median', 'middle in order'], ['Mode', 'most common'], ['Range', 'largest − smallest']], ['Measure', 'How'])],
    ex: [['An example', '4, 9, 6, 9, 12', [["Mean: 40 divided by 5 is 8. Median: in order 4, 6, 9, 9, 12; middle is 9. Mode: 9. Range: 12 take away 4 is 8.", E('Mean 8 · Median 9 · Mode 9 · Range 8', 'g')]]],
      ['Even number of values', 'Median between two', [["For 3, 5, 8, 10, the middle 2 are 5 and 8. The median is halfway: 6.5.", E('(5 + 8) ÷ 2 = 6.5', 'g')]]],
      ['Comparing groups', 'Average and spread', [["Class A has mean 62 and range 30. Class B has mean 65 and range 12. B did better on average and were more consistent.", E('B: higher mean, smaller range', 'g')]]]],
    turn: ["Your turn! Find the median of 7, 2, 9, 4, 5. Pause and try it.", E('2, 4, 5, 7, 9'), "In order, the middle is 5.", E('5', 'g')],
    rec: ["Use the mean, median or mode for a typical value and the range for spread. Compare groups using 1 average and the range.", ['Mean: total ÷ count', 'Median: middle in order', 'Mode: most common', 'Range: spread']],
    deep: ['The median is not affected by 1 very big or very small value, so it is better when there are outliers.', 'When comparing, mention both an average and the spread.']
  });

  LS('Probability and relative frequency', 'how to calculate probability and estimate it from experiments.', {
    intro: ['Probability', 'From 0 to 1', "Probability measures how likely something is, from 0, impossible, to 1, certain.", V.cards(['0 impossible', '0.5 even', '1 certain'], ['b', 'p', 'g'])],
    ex: [['Theoretical probability', 'Equally likely outcomes', [["A bag has 4 red and 6 blue counters. The probability of red is 4 out of 10: 2 fifths.", E('P(red) = 4/10 = 2/5', 'g')]]],
      ['The complement', 'Not happening', [["The probability of not red is 1 take away 2 fifths: 3 fifths.", E('P(not red) = 1 − 2/5 = 3/5', 'g')]]],
      ['Relative frequency', 'From an experiment', [["A drawing pin lands point up 36 times in 50 throws. The relative frequency is 36 fiftieths: 0.72.", E('36 ÷ 50 = 0.72', 'g')]]],
      ['Expected results', 'Predict', [["If the probability of rain is 0.3, in 30 days we expect about 9 rainy days.", E('0.3 × 30 = 9', 'g')]]]],
    turn: ["Your turn! A fair dice is rolled 60 times. About how many sixes would you expect? Pause and try it.", E('1/6 × 60'), "Ten sixes.", E('10', 'g')],
    rec: ["Probability is ways it can happen over total outcomes. The complement is 1 minus it. Relative frequency comes from experiments and gets more reliable with more trials.", ['P = ways ÷ total', 'P(not) = 1 − P', 'Relative frequency from trials', 'Expected = P × trials']],
    deep: ['More trials make the relative frequency closer to the true probability.', 'Expected results are an estimate, not a guarantee: you might get 8 or 12 sixes.']
  });

  /* ---------- 813 ---------- */
  LS('Nets and surface area', 'how nets help find the surface area of cuboids and prisms.', {
    intro: ['Nets', 'A solid unfolded', "A net is a solid opened out flat. Its area is the surface area of the solid.", LK.grid(4, 3, function (i, j) { return (j === 1 || i === 1) ? true : 'skip'; }, { u: 36, alt: 'A cross-shaped net' })],
    ex: [['Cuboid', 'Three pairs of faces', [["A cuboid 6 by 4 by 3: top and bottom 24 each, front and back 18 each, sides 12 each. Total 108 square centimetres.", E('2(24 + 18 + 12) = 108 cm²', 'g')]]],
      ['Cube', 'Six equal squares', [["A cube with 5 centimetre edges: 6 times 25 is 150 square centimetres.", E('6 × 25 = 150 cm²', 'g')]]],
      ['Triangular prism', '2 triangles, 3 rectangles', [["Add the 2 triangle ends and the 3 rectangles. Each face is found with its own area formula.", E('SA = 2 triangles + 3 rectangles', 'g')]]]],
    turn: ["Your turn! What is the surface area of a cube with 3 centimetre edges? Pause and try it.", E('6 × 9'), "54 square centimetres.", E('54 cm²', 'g')],
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
    deep: ['Builders and designers use plans and elevations because a 3D object can’t be fully shown in 1 flat picture.', 'Hidden cubes don’t show in a view, so views alone can’t always tell you how many cubes there are.']
  });

  /* ===================== put the S1 topics together ===================== */
  (function () {
    var SC = L.SC, st = L.st, ep = L.ep;
    ep('How do you calculate with mixed operations?', 'how to work out calculations that mix decimals, powers and brackets.', [
      SC('Mixed operations', 'BIDMAS', [
        st("In secondary, calculations can mix decimals, powers and brackets. The order is the same as before, with powers added: Brackets, Indices, Division and Multiplication, then Addition and Subtraction.", E('B → I → D M → A S', 'b'))]),
      SC('Decimals in the mix', '2.5 × 4 + 18 ÷ 3', [
        st("Multiplying and dividing come first. 2.5 times 4 is 10. 18 divided by 3 is 6. Then add: 10 plus 6 is 16.", E('2.5 × 4 = 10') + E('18 ÷ 3 = 6') + E('10 + 6 = 16', 'g'))]),
      SC('Brackets and powers', '(7 − 3)² × 1.5 − 6', [
        st("Brackets first: 7 take away 3 is 4. Then the power: 4 squared is 16. Then multiply: 16 times 1.5 is 24. Last, subtract 6: 18.", E('7 − 3 = 4') + E('4² = 16') + E('16 × 1.5 = 24') + E('24 − 6 = 18', 'g'))]),
      SC('Brackets inside brackets', '3 × (20 − (4 + 6))', [
        st("Work from the inside out. 4 plus 6 is 10. 20 take away 10 is 10. 3 times 10 is 30.", E('4 + 6 = 10') + E('20 − 10 = 10') + E('3 × 10 = 30', 'g'))]),
      SC('Two brackets', '(12.6 + 3.4) ÷ (5 − 3)', [
        st("Work out each bracket first. 12.6 plus 3.4 is 16. 5 take away 3 is 2. 16 divided by 2 is 8.", E('12.6 + 3.4 = 16') + E('5 − 3 = 2') + E('16 ÷ 2 = 8', 'g'))]),
      SC('In real life', 'A phone bill', [
        st("A phone costs £12.50 a month for 3 months, plus 4 extra downloads at 75p each. 3 times £12.50 is £37.50. 4 times 75p is £3. Add them: £40.50.", E('3 × 12.50 + 4 × 0.75') + E('37.50 + 3.00 = £40.50', 'g'))]),
      L.turn("Your turn! Work out 4.2, add 3 times, bracket, 1.5 plus 2.5, squared. Pause and try it.", E('4.2 + 3 × (1.5 + 2.5)² = ?'),
        "Brackets: 1.5 plus 2.5 is 4. 4 squared is 16. 3 times 16 is 48. 4.2 plus 48 is 52.2.", E('4.2 + 48 = 52.2', 'g')),
      L.rec('How do you calculate with mixed operations?', "Use BIDMAS: brackets, then powers, then dividing and multiplying, then adding and subtracting. Work brackets from the inside out, and go left to right on the same level.",
        ['Brackets: inside out', 'Then powers', 'Then ÷ and ×, left to right', 'Then + and −, left to right'])
    ]);
  })();
  L.use(801, ['What is place value and decimal place value?', 'How do you use column addition and subtraction?', 'How do you add and subtract to three decimal places?', 'Calculating with decimals', 'Rounding and estimating', 'Sensible estimates and rounding with units', 'Number lines, words and digit values', 'How do you calculate with mixed operations?']);
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
