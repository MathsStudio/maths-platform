/* lessons_s1a.js: S1 Watch lessons for the 19 third level questions given to S1. */
(function () {
  'use strict';
  var BT = window.BT; if (!BT || !BT.L || !BT.L.lesson) return;
  var L = BT.L, V = BT.sv, LK = BT.lk, E = L.E, LS = L.lesson;
  var TH = ['', 'Th', 'H', 'T', 'O'], LN = { line: true };

  LS('What is place value and decimal place value?', 'how the position of a digit, before or after the decimal point, gives its value.', {
    intro: ['Place value', 'Every digit has a column', "Our number system uses 10 digits. A digit's value depends on its column. Each column is 10 times bigger than the one to its right, and 10 times smaller than the one to its left.", V.tbl([['1,000', '100', '10', '1', '0.1', '0.01', '0.001']], ['Th', 'H', 'T', 'O', 'tenths', 'hundredths', 'thousandths'])],
    ex: [['Whole number places', '47,306', [["In 47,000, 306, the 7 is in the thousands column, so it is worth 7,000. The 0 holds the tens place.", E('47,306 = 40,000 + 7,000 + 300 + 6', 'g')]]],
      ['Decimal places', 'After the point', [["After the decimal point come tenths, hundredths and thousandths. In 3.258, the 2 is 2/10, the 5 is 5/100, and the 8 is 8/1000.", E('3.258 = 3 + 0.2 + 0.05 + 0.008', 'g')]]],
      ['Comparing decimals', '0.7 or 0.65?', [["Line up the decimal points and compare from the left. 0.7 has 7/10; 0.65 has 6/10. So 0.7 is bigger, even though it has fewer digits.", E('0.70 > 0.65', 'g') + V.rule('Compare column by column from the left.')]]],
      ['Multiplying by 10, 100, 1,000', 'Digits move', [["Multiplying by 10 moves every digit 1 place left. Dividing by 100 moves every digit 2 places right.", E('4.37 × 10 = 43.7') + E('52.8 ÷ 100 = 0.528', 'g')]]]],
    real: ['Sport timing', "In a race, times are measured to the hundredth or thousandth of a second. 9.58 seconds beats 9.63 seconds.", E('9.58 < 9.63', 'g')],
    turn: ["Your turn! What is the value of the 6 in 12.364? Pause and think.", E('12.364'), "The 6 is in the hundredths column, so it is worth 6/100: 0.06.", E('0.06', 'g')],
    rec: ["A digit's value depends on its column. Each column is 10 times the one to its right. After the point come tenths, hundredths and thousandths. Compare decimals column by column.", ['Each column × 10 to the left', 'tenths, hundredths, thousandths', 'Zeros hold places', 'Compare from the left']],
    deep: ['Place value works because every column is 10 times the one to its right, on both sides of the decimal point.', 'More digits after the point does not mean bigger: 0.7 is bigger than 0.65. Fill gaps with zeros to compare.']
  });

  LS('How do you use column addition and subtraction?', 'how to add and subtract large numbers and decimals in columns.', {
    intro: ['Column methods', 'One column at a time', "For big numbers, write them in columns, lining up the place values. Start on the right and work 1 column at a time.", V.rule('Line up the digits. Start with the ones.')],
    ex: [['Adding with carrying', '5,678 + 2,945', [["Ones: 8 plus 5 is 13, write 3, carry 1. Tens: 7 plus 4 plus 1 is 12, write 2, carry 1. Hundreds: 6 plus 9 plus 1 is 16, write 6, carry 1. Thousands: 5 plus 2 plus 1 is 8.", LK.col(TH, [['', 5, 6, 7, 8], ['+', 2, 9, 4, 5], LN, ['', 'h:8', 'h:6', 'h:2', 'h:3']]) + E('5,678 + 2,945 = 8,623', 'g')]]],
      ['Subtracting with exchanging', '7,042 − 3,857', [["Ones: 2 take away 7 can't be done. The tens is 0, so exchange from the hundreds: the 0 tens become 10, then 1 10 becomes 10 ones. 12 take away 7 is 5.", E('12 − 7 = 5', 'b')], ["Keep going column by column, exchanging when needed. The answer is 3,000, 185.", E('7,042 − 3,857 = 3,185', 'g')]]],
      ['Check with the inverse', 'Add back', [["Check a subtraction by adding: 3,000, 185 plus 3,000, 857 is 7,042.", E('3,185 + 3,857 = 7,042 ✓', 'g')]]]],
    real: ['Fundraising', "A school raised 4,000, £860 and then 2,000, £575. Together that is 7,000, £435.", E('£4,860 + £2,575 = £7,435', 'g')],
    turn: ["Your turn! Work out 6,005 take away 2,000, 318. Pause and try it.", E('6,005 − 2,318'), "Exchange across the zeros. The answer is 3,000, 687.", E('3,687', 'g')],
    rec: ["Line up the place values, start on the right, carry when a column makes 10 or more, exchange when the top digit is too small, and check with the inverse.", ['Line up the columns', 'Start with the ones', 'Carry or exchange', 'Check with the inverse']],
    deep: ['Carrying and exchanging both rely on place value: 10 of 1 column is the same as one of the next.', 'When the top number has zeros, exchange from the next column with a digit, and change each 0 to 9 on the way.']
  });

  LS('How do you add and subtract to three decimal places?', 'how to add and subtract decimals with up to 3 decimal places.', {
    intro: ['Decimals in columns', 'Line up the points', "Adding and subtracting decimals works just like whole numbers, as long as the decimal points line up.", V.rule('Line up the decimal points. Fill gaps with zeros.')],
    ex: [['Adding', '4.375 + 2.86', [["Write 2.86 as 2.860 so both have 3 decimal places. Then add: 7.235.", E('4.375 + 2.860 = 7.235', 'g')]]],
      ['Subtracting', '9.2 − 3.457', [["Write 9.2 as 9.200. Exchange where needed. The answer is 5.743.", E('9.200 − 3.457 = 5.743', 'g')]]],
      ['Mental decimals', 'Bridging to a whole number', [["5.98 plus 2.05: 5.98 is 2/100 away from 6. 6 plus 2.03 is 8.03.", E('5.98 + 2.05 = 8.03', 'g')]]]],
    real: ['Science measurements', "A beaker holds 1.25 litres. 0.375 litres is poured out. 0.875 litres are left.", E('1.250 − 0.375 = 0.875 l', 'g')],
    turn: ["Your turn! Work out 3.7 plus 0.456. Pause and try it.", E('3.700 + 0.456'), "Line up the points and add: 4.156.", E('4.156', 'g')],
    rec: ["Line up the decimal points, fill empty places with zeros, then add or subtract as normal. Estimate to check.", ['Line up the points', 'Fill gaps with zeros', 'Carry and exchange as normal', 'Estimate to check']],
    deep: ['Zeros added after the last decimal digit don’t change the value, so 2.86 = 2.860.', 'Lining up the last digits instead of the points is the most common mistake.']
  });

  LS('What are common multiples?', 'how to find common multiples and the lowest common multiple of 2 numbers.', {
    intro: ['Multiples', 'In the times table', "A multiple of a number is in its times table. Multiples of 6 are 6, 12, 18, 24 and so on.", E('6, 12, 18, 24, 30, 36…', 'b')],
    ex: [['Common multiples', '4 and 6', [["Multiples of 4: 4, 8, 12, 16, 20, 24. Multiples of 6: 6, 12, 18, 24. 12 and 24 are in both lists.", E('Common multiples: 12, 24, 36…', 'g')]]],
      ['The lowest common multiple', 'LCM', [["The lowest common multiple is the smallest number in both times tables. For 4 and 6 it is 12.", E('LCM(4, 6) = 12', 'g')]]],
      ['A quicker way', 'Multiples of the bigger number', [["List multiples of the bigger number and check each one. For 8 and 12: 12? No. 24? Yes, 24 divides by 8.", E('LCM(8, 12) = 24', 'g')]]]],
    real: ['Buses and lights', "1 light flashes every 6 seconds and another every 10 seconds. They flash together every 30 seconds, the lowest common multiple.", E('LCM(6, 10) = 30 s', 'g')],
    turn: ["Your turn! What is the lowest common multiple of 9 and 15? Pause and try it.", E('LCM(9, 15)'), "Multiples of 15: 15, 30, 45. 45 divides by 9. So 45.", E('45', 'g')],
    rec: ["A common multiple is in both times tables. The lowest common multiple is the smallest 1. List multiples of the bigger number and test each.", ['Multiples: times-table answers', 'Common: in both lists', 'LCM: the smallest common 1', 'Use it for repeating events']],
    deep: ['The LCM is when 2 repeating patterns line up again for the first time.', 'Multiplying the 2 numbers gives a common multiple, but not always the lowest: 4 × 6 = 24, but the LCM is 12.']
  });

  LS('What are common factors?', 'how to find common factors and the highest common factor of 2 numbers.', {
    intro: ['Factors', 'Numbers that divide exactly', "A factor divides into a number exactly. Factors come in pairs: the factors of 18 are 1 and 18, 2 and 9, 3 and 6.", E('18: 1, 2, 3, 6, 9, 18', 'b')],
    ex: [['Common factors', '18 and 24', [["Factors of 24: 1, 2, 3, 4, 6, 8, 12, 24. The factors in both lists are 1, 2, 3 and 6.", E('Common factors: 1, 2, 3, 6', 'g')]]],
      ['The highest common factor', 'HCF', [["The highest common factor is the biggest 1. For 18 and 24, it is 6.", E('HCF(18, 24) = 6', 'g')]]],
      ['Using the HCF', 'Simplifying fractions', [["The HCF helps simplify fractions. 18 twenty-fourths: divide top and bottom by 6 to get 3/4.", E('18/24 = 3/4', 'g')]]]],
    real: ['Packing', "30 pencils and 45 rubbers are shared into identical packs with nothing left over. The most packs is the HCF of 30 and 45: 15 packs.", E('HCF(30, 45) = 15', 'g')],
    turn: ["Your turn! What is the highest common factor of 20 and 32? Pause and try it.", E('HCF(20, 32)'), "Factors of 20: 1, 2, 4, 5, 10, 20. 4 is the biggest that also divides 32.", E('4', 'g')],
    rec: ["List the factors of both numbers in pairs. Common factors are in both lists; the highest common factor is the biggest.", ['Factors come in pairs', 'Common: in both lists', 'HCF: the biggest', 'Use it to simplify fractions']],
    deep: ['The HCF is the biggest equal group size you can split both amounts into.', 'Don’t confuse HCF and LCM: the HCF is never bigger than the smaller number.']
  });

  LS('What are fractions?', 'what a fraction means and how to find a fraction of an amount.', {
    intro: ['A fraction', 'Equal parts of a whole', "A fraction shows part of a whole that has been split into equal parts. The denominator, on the bottom, says how many parts. The numerator, on top, says how many we have.", LK.fbar(3, 8, 300, 280) + E('3/8: 3 of 8 equal parts', 'g')],
    ex: [['Fractions of shapes', 'Equal parts only', [["A circle cut into 5 equal slices with 2 shaded shows 2/5.", LK.pie(2, 5, { r: 50 }) + E('2/5', 'g')]]],
      ['A fraction of an amount', '3/8 of 64', [["Divide by the denominator to find 1/8: 64 divided by 8 is 8. Multiply by the numerator: 3/8 is 24.", E('64 ÷ 8 = 8 → 8 × 3 = 24', 'g')]]],
      ['Fractions as division', '3 ÷ 4', [["A fraction is also a division. 3/4 means 3 divided by 4, which is 0.75.", E('3/4 = 3 ÷ 4 = 0.75', 'g')]]]],
    real: ['Recipes', "A recipe uses 2/3 of a 300 gram bag of oats. 1/3 is 100 grams, so 2/3 is 200 grams.", E('2/3 of 300 g = 200 g', 'g')],
    turn: ["Your turn! What is 5/6 of 48? Pause and try it.", E('5/6 of 48'), "48 divided by 6 is 8. 8 times 5 is 40.", E('40', 'g')],
    rec: ["A fraction is equal parts of a whole: the denominator says how many parts, the numerator how many we have. To find a fraction of an amount, divide by the bottom and multiply by the top.", ['Equal parts', 'Denominator: how many parts', 'Numerator: how many we have', '÷ bottom, × top']],
    deep: ['A fraction is a division: 3/4 means 3 shared into 4, which is why fractions and decimals connect.', 'The parts must be equal in size, not just equal in number.']
  });

  LS('What are equivalent fractions?', 'how different fractions can show the same amount, and how to find them.', {
    intro: ['Same amount, different numbers', 'Equivalent fractions', "Equivalent fractions show the same amount. 1/2, 2/4 and 4/8 all cover the same part of a bar.", LK.fbar(1, 2, 280, 280) + LK.fbar(2, 4, 280, 280) + LK.fbar(4, 8, 280, 280)],
    ex: [['Making equivalent fractions', 'Multiply top and bottom', [["Multiply the numerator and denominator by the same number. 3/5 times 2 over 2 is 6/10.", E('3/5 = 6/10 = 9/15', 'g') + V.rule('Do the same to the top and the bottom.')]]],
      ['Simplifying', 'Divide top and bottom', [["Divide both by the same number to simplify. 12 sixteenths divided by 4 is 3/4.", E('12/16 = 3/4', 'g')]]],
      ['Missing numbers', '2/3 = ?/12', [["3 times 4 is 12, so the top must be 2 times 4: 8.", E('2/3 = 8/12', 'g')]]]],
    real: ['Pizza', "4 slices of an 8-slice pizza is the same as half a pizza. Same amount, different slices.", E('4/8 = 1/2', 'g')],
    turn: ["Your turn! Find the missing number: 3/4 equals how many twentieths? Pause and try it.", E('3/4 = ?/20'), "4 times 5 is 20, so 3 times 5 is 15. 15 twentieths.", E('15/20', 'g')],
    rec: ["Equivalent fractions show the same amount. Multiply or divide the top and bottom by the same number to find them.", ['Same amount, different numbers', '× top and bottom by the same', '÷ to simplify', 'Find missing numbers by scaling']],
    deep: ['Multiplying top and bottom by the same number is multiplying by 1, so the value never changes.', 'Adding the same number to top and bottom does not give an equivalent fraction: 1/2 ≠ 2/3.']
  });

  LS('What are mixed numbers and improper fractions?', 'how to change between mixed numbers and improper fractions.', {
    intro: ['More than one whole', 'Two ways to write it', "An improper fraction has a numerator bigger than its denominator, like 11/4. A mixed number writes the same amount as wholes and a fraction: 2 and 3/4.", E('11/4 = 2 3/4', 'g')],
    ex: [['Improper to mixed', '17/5', [["Divide the top by the bottom. 17 divided by 5 is 3, remainder 2. So 3 and 2/5.", E('17 ÷ 5 = 3 r 2 → 3 2/5', 'g')]]],
      ['Mixed to improper', '4 2/3', [["Multiply the whole number by the denominator and add the numerator. 4 times 3 is 12, plus 2 is 14. 14/3.", E('4 2/3 = 14/3', 'g')]]],
      ['On a number line', 'Between whole numbers', [["2 and 3/4 sits between 2 and 3, 3/4 of the way along.", V.nl(0, 4, { tick: 0.25, marks: [[2.75, 22]] })]]]],
    real: ['Measuring', "A carpenter needs 9/2 of a metre of wood. That is 4 and 1/2 metres.", E('9/2 = 4 1/2 m', 'g')],
    turn: ["Your turn! Write 23/6 as a mixed number. Pause and try it.", E('23/6'), "23 divided by 6 is 3 remainder 5. 3 and 5/6.", E('3 5/6', 'g')],
    rec: ["To change an improper fraction to a mixed number, divide and put the remainder over the denominator. To go back, multiply the whole by the denominator and add the numerator.", ['Improper → mixed: divide', 'Remainder over the same bottom', 'Mixed → improper: × then +', 'Same amount, 2 ways']],
    deep: ['Each whole is made of as many parts as the denominator, so wholes × denominator counts those parts.', 'Keep the same denominator when changing form; only the numerator changes.']
  });

  LS('What are percentages?', 'what percentages are and how to find percentages of amounts.', {
    intro: ['Out of one hundred', 'Per cent', "Per cent means out of 100. 45% means 45 out of every hundred.", LK.hsq(45) + E('45% = 45/100 = 0.45', 'g')],
    ex: [['Key percentages', 'Learn these', [["50% is 1/2, 25 is 1/4, 75 is 3/4, 10 is 1/10, 1% is 1/100.", V.tbl([['50%', '½'], ['25%', '¼'], ['75%', '¾'], ['10%', '1/10'], ['1%', '1/100']], ['Percentage', 'Fraction'])]]],
      ['Building percentages', '35% of £60', [["10% is £6. 30% is £18. 5% is £3. So 35% is £21.", E('£18 + £3 = £21', 'g')]]],
      ['One amount as a percentage', '18 out of 40', [["Write it as a fraction and make the bottom 100, or divide and multiply by 100. 18 divided by 40 is 0.45: 45%.", E('18 ÷ 40 × 100 = 45%', 'g')]]]],
    real: ['A discount', "A £45 coat has 20% off. 10% is £4.50, so 20% is £9. It costs £36.", E('£45 − £9 = £36', 'g')],
    turn: ["Your turn! What is 15% of 80? Pause and try it.", E('15% of 80'), "10% is 8, 5% is 4. 12.", E('12', 'g')],
    rec: ["Per cent means out of 100. Learn the key percentages, build others from 10%, 5% and 1%, and divide the part by the whole for a percentage.", ['Per cent = out of 100', 'Key: 50%, 25%, 10%, 1%', 'Build from 10% and 1%', 'Part ÷ whole × 100']],
    deep: ['Every percentage is a fraction with denominator 100, so it is easy to compare and calculate.', 'Percentages need a whole: 20% of £45 is £9, but 20% of £90 is £18.']
  });

  LS('What is financial maths?', 'how maths is used with money: earning, spending, saving, interest and value.', {
    intro: ['Maths with money', 'Everyday decisions', "Financial maths is the maths of money: wages, prices, savings, interest, tax and best value. It helps us make good decisions.", V.list(['Earning', 'Spending', 'Saving', 'Comparing'])],
    ex: [['Earning', 'Hourly pay', [["Ali earns £9.50 an hour and works 16 hours. 16 times £9.50 is £152.", E('16 × £9.50 = £152', 'g')]]],
      ['Saving and interest', 'Money grows', [["A bank pays 2% interest a year on £200. 2% is £4, so after a year there is £204.", E('£200 + 2% = £204', 'g')]]],
      ['Best value', 'Price for one', [["A 6-pack of juice costs £3.60; a 4-pack costs £2.56. Price per carton: 60p and 64p. The 6-pack is better value.", E('£3.60 ÷ 6 = 60p · £2.56 ÷ 4 = 64p', 'g')]]],
      ['Profit and loss', 'Buy and sell', [["A trader buys a bike for £80 and sells it for 100. The profit is £20.", E('£100 − £80 = £20 profit', 'g')]]]],
    turn: ["Your turn! You earn £12 an hour for 7 hours. How much is that? Pause and try it.", E('7 × £12'), "7 times 12 is £84.", E('£84', 'g')],
    rec: ["Financial maths uses multiplication, percentages and comparisons to understand earning, saving, spending and value.", ['Pay = hours × rate', 'Interest: a percentage', 'Best value: price for 1', 'Profit = selling − buying']],
    deep: ['Most money problems are just multiplication, division and percentages in a real setting.', 'Always check units: don’t mix pounds and pence in 1 calculation.']
  });

  LS('What is budgeting?', 'how to plan income and spending with a budget.', {
    intro: ['A budget', 'A plan for money', "A budget is a plan that compares money coming in, income, with money going out, spending. It helps you avoid running out.", E('Income − Spending = Left over', 'g')],
    ex: [['A weekly budget', 'Pocket money', [["Maya gets £15 a week. Bus fares cost £6, snacks £4. 15 take away 10 leaves £5 to save.", V.tbl([['Income', '£15'], ['Bus', '−£6'], ['Snacks', '−£4'], ['Left', '£5']], ['', 'Amount'])]]],
      ['Saving for something', 'How many weeks?', [["A jacket costs £60. Saving £5 a week takes 60 divided by 5: 12 weeks.", E('£60 ÷ £5 = 12 weeks', 'g')]]],
      ['Over budget', 'Spending more than you have', [["If spending is more than income, the budget is negative and you need to cut back. Income £200, spending 230: £30 short.", E('£200 − £230 = −£30', 'b')]]]],
    real: ['A party', "A class has £120 for a party. Food costs £75 and decorations 28. £17 is left for prizes.", E('£120 − £75 − £28 = £17', 'g')],
    turn: ["Your turn! Income is £250; spending is 185. How much is left? Pause and try it.", E('£250 − £185'), "Sixty-five pounds.", E('£65', 'g')],
    rec: ["A budget compares income with spending. Whatever is left can be saved. If spending is bigger than income, something must change.", ['Income − spending', 'Plan before you spend', 'Save the difference', 'Negative means overspent']],
    deep: ['A budget is a subtraction you plan ahead, so you can make choices before the money is gone.', 'Remember regular costs like bus fares or phone bills, not just big items.']
  });

  LS('How do you choose appropriate units of measurement?', 'how to choose sensible units for length, mass, capacity and time.', {
    intro: ['The right unit', 'Small things, big things', "We choose a unit that suits the size of what we measure, so the number is sensible and easy to use.", V.tbl([['Length', 'mm, cm, m, km'], ['Mass', 'g, kg, tonnes'], ['Capacity', 'ml, l'], ['Time', 's, min, h, days']], ['Measure', 'Units'])],
    ex: [['Length', 'Which unit?', [["A grain of rice is a few millimetres. A pencil is about 15 centimetres. A football pitch is about 100 metres. Glasgow to Edinburgh is about 75 kilometres.", E('mm · cm · m · km', 'g')]]],
      ['Mass and capacity', 'Which unit?', [["An apple weighs about 150 grams; a car about 1 and 1/2 tonnes. A teaspoon holds 5 millilitres; a bath about 150 litres.", E('g · kg · t · ml · l', 'g')]]],
      ['Is it sensible?', 'Spot the mistake', [["A classroom door that is 2 kilometres tall? No: it is about 2 metres. A mug holding 3 litres? Too big: about 300 millilitres.", E('door ≈ 2 m · mug ≈ 300 ml', 'g')]]]],
    real: ['Cooking', "Recipes use grams for flour and millilitres for milk, because kilograms and litres would give tiny decimals.", E('250 g flour · 300 ml milk', 'g')],
    turn: ["Your turn! What unit would you use to measure the mass of a lorry? Pause and think.", E('?'), "A lorry is very heavy, so tonnes.", E('tonnes', 'g')],
    rec: ["Pick a unit that matches the size of the object, and compare with things you know to check the answer is sensible.", ['Small: mm, g, ml', 'Medium: cm, m, kg, l', 'Large: km, tonnes', 'Compare to check']],
    deep: ['A good unit gives a number that is easy to picture, usually between 1 and 1,000.', 'Watch out for answers that are sensible numbers in the wrong unit, like a 2 km door.']
  });

  LS('How do you convert between standard units of measurement?', 'how to convert between metric units of length, mass, capacity and time.', {
    intro: ['Metric units', 'Powers of ten', "Metric units go up in tens, hundreds and thousands, which makes converting easy.", V.tbl([['1 cm', '10 mm'], ['1 m', '100 cm'], ['1 km', '1,000 m'], ['1 kg', '1,000 g'], ['1 l', '1,000 ml']], ['Unit', 'Equals'])],
    ex: [['To a smaller unit', 'Multiply', [["To change kilometres to metres, multiply by 1,000. 3.75 kilometres is 3,000, 750 metres.", E('3.75 km × 1,000 = 3,750 m', 'g') + V.rule('Bigger → smaller unit: multiply.')]]],
      ['To a bigger unit', 'Divide', [["To change grams to kilograms, divide by 1,000. 2,000, 400 grams is 2.4 kilograms.", E('2,400 g ÷ 1,000 = 2.4 kg', 'g') + V.rule('Smaller → bigger unit: divide.')]]],
      ['Time', 'Not powers of ten', [["Time uses sixties and twenty-fours. 2.5 hours is 2 hours 30 minutes, because 0.5 of 60 minutes is 30.", E('2.5 h = 2 h 30 min = 150 min', 'g')]]]],
    real: ['A recipe', "A jug holds 1.2 litres. A glass holds 200 millilitres. 1.2 litres is 1,200 millilitres, so the jug fills 6 glasses.", E('1,200 ÷ 200 = 6', 'g')],
    turn: ["Your turn! How many centimetres are in 4.06 metres? Pause and try it.", E('4.06 m = ? cm'), "Multiply by 100: 406 centimetres.", E('406 cm', 'g')],
    rec: ["Learn the metric links. To change to a smaller unit, multiply; to a bigger unit, divide. Time uses 60 and 24, not 10.", ['10 mm = 1 cm, 100 cm = 1 m', '1,000 for km, kg, l', 'Smaller unit: ×', 'Bigger unit: ÷']],
    deep: ['Converting just moves digits, because metric units are powers of 10 apart.', 'Check the size of the answer: more of a smaller unit, fewer of a bigger unit.']
  });

  LS('How do you calculate perimeter?', 'how to find the perimeter of shapes, including ones with missing sides.', {
    intro: ['Perimeter', 'Distance round the edge', "The perimeter is the total distance around the outside of a shape. Add up the lengths of all the sides.", V.poly([[20, 20], [200, 20], [200, 110], [20, 110]], 'var(--surface-2)', 220, 130, 'A rectangle')],
    ex: [['Rectangles', 'Two lengths and two widths', [["A rectangle 9 centimetres by 4 centimetres has a perimeter of 9 plus 4 plus 9 plus 4, 26 centimetres.", E('2 × (9 + 4) = 26 cm', 'g')]]],
      ['Regular shapes', 'All sides equal', [["A regular hexagon with sides of 7 centimetres has a perimeter of 6 times 7: 42 centimetres.", E('6 × 7 = 42 cm', 'g')]]],
      ['Missing sides', 'An L-shape', [["In an L-shape, work out the missing sides first. If the long side is 12 and 1 short part is 5, the other part is 7. Then add all 6 sides.", E('12 − 5 = 7', 'b') + V.rule('Find missing sides before adding.')]]],
      ['Circles', 'Circumference', [["The perimeter of a circle is called the circumference. It is about 3.14 times the diameter.", E('C = π × d ≈ 3.14 × d', 'g')]]]],
    real: ['Fencing', "A garden is 15 metres by 8 metres. Fencing all the way round needs 46 metres.", E('2 × (15 + 8) = 46 m', 'g')],
    turn: ["Your turn! A square has sides of 11 centimetres. What is its perimeter? Pause and try it.", E('4 × 11'), "4 times 11 is 44 centimetres.", E('44 cm', 'g')],
    rec: ["Perimeter is the distance round a shape: add all the sides. Find missing sides first in compound shapes. A circle's perimeter is its circumference.", ['Add all the sides', 'Rectangle: 2 × (l + w)', 'Find missing sides first', 'Circle: C = π × d']],
    deep: ['Perimeter is a length, so it is measured in cm or m, not square units.', 'In compound shapes, count every side, including the short inner ones.']
  });

  LS('What are two-dimensional shapes?', 'what 2D shapes are and how to name them.', {
    intro: ['Flat shapes', 'Two dimensions', "2-dimensional shapes are flat. They have length and width, but no thickness. Polygons are 2D shapes with straight sides.", V.cards(['triangle', 'square', 'pentagon', 'hexagon', 'circle'], ['b', 'p', 'g', 'b', 'p'], true)],
    ex: [['Naming polygons', 'Count the sides', [["Polygons are named by their number of sides: 3 is a triangle, 4 a quadrilateral, 5 a pentagon, 6 a hexagon, 8 an octagon, 10 a decagon.", V.tbl([['3', 'triangle'], ['4', 'quadrilateral'], ['5', 'pentagon'], ['6', 'hexagon'], ['8', 'octagon'], ['10', 'decagon']], ['Sides', 'Name'])]]],
      ['Regular and irregular', 'Equal or not', [["A regular polygon has all sides and all angles equal, like a square. An irregular polygon does not, like a rectangle that isn't square.", V.cards(['Regular: all equal', 'Irregular: not all equal'], ['g', 'b'])]]],
      ['Circles', 'Not a polygon', [["A circle is a 2D shape but not a polygon, because it has a curved edge and no straight sides.", E('circle: 2D, but not a polygon', 'b')]]]],
    real: ['All around us', "Road signs use 2D shapes: triangles warn, circles give orders and rectangles give information.", V.cards(['▲ warning', '● order', '■ information'], ['b', 'p', 'g'])],
    turn: ["Your turn! What do we call a polygon with 8 sides? Pause and think.", E('?'), "An octagon, like a stop sign.", E('octagon', 'g')],
    rec: ["2D shapes are flat. Polygons have straight sides and are named by how many. Regular polygons have equal sides and angles.", ['2D = flat', 'Polygons: straight sides', 'Named by number of sides', 'Regular: all equal']],
    deep: ['The Greek prefixes give the number of sides: penta 5, hexa 6, octa 8, deca 10.', 'A shape with equal sides isn’t always regular: a rhombus has equal sides but unequal angles.']
  });

  LS('What are the properties of 2D shapes?', 'the properties of triangles and quadrilaterals: sides, angles, symmetry and parallel lines.', {
    intro: ['Properties', 'What makes a shape what it is', "The properties of a shape are facts about its sides, angles, parallel lines and symmetry. We use them to sort and name shapes.", V.list(['Sides', 'Angles', 'Parallel sides', 'Lines of symmetry'])],
    ex: [['Triangles', 'By sides', [["An equilateral triangle has 3 equal sides and 3 sixty-degree angles. An isosceles has 2 equal sides and 2 equal angles. A scalene has no equal sides.", V.tbl([['Equilateral', '3 equal sides', '3 lines'], ['Isosceles', '2 equal sides', '1 line'], ['Scalene', 'none equal', '0 lines']], ['Triangle', 'Sides', 'Symmetry'])]]],
      ['Quadrilaterals', 'Four sides', [["A square has 4 equal sides and 4 right angles. A rectangle has 4 right angles. A parallelogram has 2 pairs of parallel sides. A trapezium has 1 pair. A kite has 2 pairs of equal neighbouring sides.", V.tbl([['Square', '4 equal, 4 right angles'], ['Rectangle', '4 right angles'], ['Rhombus', '4 equal sides'], ['Parallelogram', '2 pairs parallel'], ['Trapezium', '1 pair parallel'], ['Kite', '2 pairs equal, next to each other']], ['Shape', 'Key property'])]]],
      ['Diagonals', 'Corner to corner', [["The diagonals of a square and a rhombus cross at right angles. The diagonals of a rectangle are equal in length.", E('square: diagonals equal and at 90°', 'g')]]]],
    real: ['Design', "Builders use rectangles because their right angles fit together neatly, and triangles because they are rigid and strong.", V.cards(['Rectangles fit', 'Triangles are strong'], ['b', 'g'])],
    turn: ["Your turn! Which quadrilateral has exactly 1 pair of parallel sides? Pause and think.", E('?'), "A trapezium.", E('trapezium', 'g')],
    rec: ["Describe shapes by their sides, angles, parallel lines, diagonals and symmetry. These properties tell shapes apart.", ['Sides and angles', 'Parallel sides', 'Diagonals', 'Lines of symmetry']],
    deep: ['Shapes belong to families: every square is also a rectangle and a rhombus, because it has all their properties.', 'A rectangle has 2 lines of symmetry, not 4: its diagonals are not mirror lines.']
  });

  LS('How do you label, draw and measure angles?', 'how to name angles with 3 letters, and measure and draw them with a protractor.', {
    intro: ['Angles', 'Measured in degrees', "An angle is the amount of turn between 2 lines that meet at a point, the vertex. It is measured in degrees.", V.angle(50, '50°')],
    ex: [['Types of angle', 'Names by size', [["Acute is less than 90 degrees. Right is exactly 90. Obtuse is between 90 and 180. Reflex is more than 180.", V.tbl([['acute', '< 90°'], ['right', '90°'], ['obtuse', '90°–180°'], ['straight', '180°'], ['reflex', '> 180°']], ['Name', 'Size'])]]],
      ['Labelling', 'Three letters', [["We name an angle with 3 letters, the vertex in the middle. Angle ABC is the angle at B, between the lines BA and BC.", E('∠ABC: the angle at B', 'g')]]],
      ['Measuring', 'Using a protractor', [["Put the centre of the protractor on the vertex. Line up 0 with 1 arm. Read the scale that starts at 0 where the other arm crosses.", V.rule('Centre on the vertex, 0 on 1 arm, read from 0.')]]],
      ['Drawing', 'Draw a 65° angle', [["Draw a straight line. Put the protractor's centre at 1 end. Mark 65 degrees, counting up from 0. Join the mark to the end of the line.", V.angle(65, '65°')]]]],
    real: ['Estimating first', "Always estimate before measuring. If it looks acute but you read 115 degrees, you used the wrong scale: it should be 65.", E('180° − 115° = 65°', 'g')],
    turn: ["Your turn! What type of angle is 125 degrees? Pause and think.", E('125°'), "It is between 90 and 180, so it is obtuse.", E('obtuse', 'g')],
    rec: ["Angles measure turn in degrees. Name them with 3 letters, vertex in the middle. Measure and draw with a protractor from 0, and estimate first.", ['Acute, right, obtuse, reflex', '∠ABC: vertex B', 'Protractor: centre on vertex', 'Estimate first']],
    deep: ['Degrees split a full turn into 360 equal parts, so a right angle is 1/4 turn: 90°.', 'Protractors have 2 scales. Read the one that starts at 0 on your first arm.']
  });

  LS('What is data handling?', 'what data is, the types of data, and the steps of a data investigation.', {
    intro: ['Data', 'Information we collect', "Data is information, often numbers or categories. Data handling means collecting it, organising it, showing it and finding out what it tells us.", V.list(['Ask a question', 'Collect data', 'Organise and display', 'Interpret and conclude'])],
    ex: [['Types of data', 'Words or numbers', [["Categorical data is words or groups, like favourite colour. Numerical data is numbers. Discrete numbers are counted, like goals. Continuous numbers are measured, like height.", V.tbl([['Categorical', 'favourite sport'], ['Discrete', 'number of pets'], ['Continuous', 'height, time']], ['Type', 'Example'])]]],
      ['A good question', 'Something you can test', [["Start with a clear question, like: do Year 1 pupils spend more time on screens than Year 3 pupils? Then decide what data you need.", E('Question → data needed', 'g')]]],
      ['Bias', 'A fair sample', [["The data must be fair. Asking only the football club about favourite sports would give a biased answer.", E('Ask a fair, mixed sample', 'g')]]]],
    real: ['Shops and schools', "Shops use data to decide what to stock; schools use it to plan clubs.", V.cards(['Shops: stock', 'Schools: clubs', 'Doctors: health'], ['b', 'p', 'g'])],
    turn: ["Your turn! Is the time to run 100 metres discrete or continuous data? Pause and think.", E('?'), "Time is measured, so it is continuous.", E('continuous', 'g')],
    rec: ["Data handling is a cycle: ask a question, collect fair data, organise and display it, then interpret it.", ['Ask a question', 'Collect fair data', 'Organise and display', 'Interpret and conclude']],
    deep: ['The type of data decides the best chart: bar charts for categories, line graphs for change over time.', 'A small or one-sided sample can mislead. Ask enough people from different groups.']
  });

  LS('How do you collect and record data?', 'how to collect data with surveys and record it in tally charts and frequency tables.', {
    intro: ['Collecting data', 'Surveys and experiments', "We collect data by asking questions in a survey, by counting or observing, or by measuring in an experiment.", V.cards(['Survey', 'Observation', 'Experiment'], ['b', 'p', 'g'])],
    ex: [['Tally charts', 'Grouped in fives', [["A tally mark records each answer. The fifth mark crosses the other 4, so groups of 5 are quick to count.", LK.tally(12) + E('12', 'g')]]],
      ['Frequency tables', 'How many of each', [["Turn the tallies into numbers: the frequency is how many times each answer appeared.", V.tbl([['Football', '12'], ['Swimming', '7'], ['Dance', '9'], ['Total', '28']], ['Sport', 'Frequency'])]]],
      ['Grouped data', 'Using classes', [["For lots of different numbers, group them into classes like 0 to 9, 10 to 19. Classes must not overlap.", V.tbl([['0–9', '4'], ['10–19', '11'], ['20–29', '6']], ['Score', 'Frequency'])]]],
      ['Good survey questions', 'Clear and fair', [["Use clear questions with tick boxes that cover every answer and don't overlap. Avoid leading questions like: don't you agree football is best?", V.rule('Clear, fair, non-overlapping options.')]]]],
    real: ['Traffic survey', "Counting cars, buses and bikes passing the school for 10 minutes gives data on traffic.", E('tally → frequency table', 'g')],
    turn: ["Your turn! How many tally marks are in 3 full gates and 2 extra marks? Pause and think.", E('3 gates + 2'), "Each gate is 5, so 15 plus 2 is 17.", E('17', 'g')],
    rec: ["Collect data with surveys, observation or experiments. Record it with tally marks grouped in fives, then make a frequency table. Use non-overlapping groups for lots of numbers.", ['Survey, observe, measure', 'Tally in fives', 'Frequency table', 'Fair, clear questions']],
    deep: ['Tallying as you go means you only look at each piece of data once, which avoids counting mistakes.', 'Check the frequencies add up to the total number of people asked.']
  });
})();
