/* P7 701 Place value and rounding, 702 Four operations, 703 Fractions */
(function () {
  'use strict';
  var BT = window.BT; if (!BT || !BT.px) return;
  var X = BT.px.X, tbl = BT.px.tbl, nl = BT.px.nl, L = BT.L;

  X('Powers of ten and very large numbers', 'how powers of ten work and how to multiply and divide by them.', 'Powers of ten',
    ['Indices', "A power of ten shows how many tens are multiplied together. 10² = 10 × 10 = 100. 10³ = 1,000. 10⁶ = 1,000,000. The small number is the index and counts the zeros.", [tbl([['Power', 'Value'], ['10²', '100'], ['10³', '1,000'], ['10⁶', '1,000,000']])]],
    [['Writing as a power', "Write 100,000 as a power of ten. It has 5 zeros. 10⁵.", ['5 zeros', 'g|10⁵']],
     ['Multiply', "Work out 4.5 × 10³. Multiply by 1,000: move the digits 3 places left. 4,500.", ['4.5 × 1,000', 'g|4,500']],
     ['Divide', "Work out 72,000 ÷ 10². Divide by 100: move 2 places right. 720.", ['72,000 ÷ 100', 'g|720']],
     ['Compare', "Which is bigger, 3 × 10⁵ or 9 × 10⁴? 300,000 and 90,000. 3 × 10⁵.", ['300,000 > 90,000', 'g|3 × 10⁵']]],
    [['Index as multiplier', "Mistake one: 10³ = 10 × 3.", '10³ = 30 ✗', '10³ = 1,000 ✓'],
     ['Counting zeros', "Mistake two: miscounting zeros.", '10⁵ = 10,000 ✗', '10⁵ = 100,000 ✓']],
    ["Scientists write the distance from Earth to the Sun as about 150 × 10⁶ km.", ['150,000,000 km']],
    [['Write 10,000 as a power of ten.', "4 zeros.", ['4 zeros'], '10⁴'],
     ['Work out 6.2 × 10².', "× 100.", ['6.2 × 100'], '620'],
     ['Work out 35,000 ÷ 10³.', "÷ 1,000.", ['35,000 ÷ 1,000'], '35']],
    ["Index = number of zeros.", ['10ⁿ']]);

  X('Decimal places and significant figures', 'how to round to a number of decimal places and to significant figures.', 'Rounding',
    ['Two ways to round', "Decimal places count digits after the point. Significant figures count digits from the first non-zero digit. In both, look at the next digit: 5 or more rounds up.", ['3.4567 to 2 d.p. = 3.46', '3.4567 to 3 s.f. = 3.46']],
    [['Decimal places', "Round 6.7849 to 2 decimal places. The third decimal is 4, so round down. 6.78.", ['6.7849 → 6.78', 'g|6.78']],
     ['Significant figures', "Round 45,678 to 2 significant figures. The first two digits are 4 and 5. The next digit is 6, so round up. 46,000.", ['45,678 → 46,000', 'g|46,000']],
     ['Small numbers', "Round 0.004567 to 2 significant figures. The first non-zero digit is 4. 0.0046.", ['0.004|5|67', 'g|0.0046']],
     ['Compare', "3.4567 to 3 s.f. is 3.46. To 3 d.p. it is 3.457.", ['3.46', '3.457']]],
    [['Counting zeros as significant', "Mistake one: counting leading zeros.", '0.004567 to 2 s.f. = 0.00 ✗', '0.0046 ✓'],
     ['Forgetting place holders', "Mistake two: dropping the zeros of a large number.", '45,678 to 2 s.f. = 46 ✗', '46,000 ✓']],
    ["Scientists give measurements to a number of significant figures to show accuracy.", ['3 s.f.']],
    [['Round 8.4351 to 2 decimal places.', "Third decimal 5.", ['8.44'], '8.44'],
     ['Round 7,382 to 2 significant figures.', "73|82 → 74.", ['7,400'], '7,400'],
     ['Round 0.07352 to 2 significant figures.', "7 and 3, next 5.", ['0.074'], '0.074']],
    ["First non-zero digit starts s.f.", ['d.p.: after the point']]);

  X('Adding and subtracting negative numbers', 'how to add and subtract with negative numbers using a number line.', 'Negative numbers',
    ['Number line', "Adding moves right on a number line. Subtracting moves left. Subtracting a negative number is the same as adding the positive: 5 − (−3) = 5 + 3 = 8.", [nl(-8, 8, 2, [{ v: -3, l: '-3' }], 'Number line from -8 to 8')]],
    [['Crossing zero', "Work out −3 + 8. Start at −3 and move 8 right. 5.", ['−3 + 8', 'g|5']],
     ['Subtracting', "Work out 4 − 7. Start at 4 and move 7 left. −3.", ['4 − 7', 'g|−3']],
     ['Two negatives', "Work out −2 − 3. Start at −2 and move 3 left. −5.", ['−2 − 3', 'g|−5']],
     ['Subtracting a negative', "Work out 5 − (−3). Subtracting a negative is adding. 5 + 3 = 8.", ['5 + 3', 'g|8']]],
    [['Wrong direction', "Mistake one: moving the wrong way.", '4 − 7 = 3 ✗', '4 − 7 = −3 ✓'],
     ['Double negative', "Mistake two: 5 − (−3) = 2.", '5 − (−3) = 2 ✗', '5 − (−3) = 8 ✓']],
    ["A bank account at −£20 that receives £50 has £30.", ['−20 + 50 = 30']],
    [['Work out −6 + 9.', "Start at −6 and move 9 right.", ['−6 + 9'], '3'],
     ['Work out −4 − 5.', "Left 5.", ['−4 − 5'], '−9'],
     ['Work out 2 − (−6).', "2 + 6.", ['2 + 6'], '8']],
    ["Add right, subtract left. − − means +.", ['Use a number line']]);

  X('Estimating and checking calculations', 'how to estimate answers by rounding and use estimates to check results.', 'Estimating',
    ['Round to 1 s.f.', "Round each number to 1 significant figure, calculate, and compare with the exact answer. This catches big mistakes.", ['≈ means about']],
    [['Multiplying', "Estimate 4.9 × 21.2. 5 × 20 = 100. The exact answer is 103.88.", ['5 × 20', 'g|≈ 100']],
     ['Dividing', "Estimate 612 ÷ 29. 600 ÷ 30 = 20. The exact answer is 21.1.", ['600 ÷ 30', 'g|≈ 20']],
     ['Check', "A calculator gives 312 × 19 = 592.8. The estimate 300 × 20 = 6,000. 592.8 is far too small. Something is wrong: the real answer is 5,928.", ['300 × 20 = 6,000', 'g|5,928']],
     ['Costs', "Estimate the cost of 38 items at £1.95: 40 × 2 = £80.", ['40 × 2', 'g|≈ £80']]],
    [['Accepting a wrong answer', "Mistake one: trusting the calculator without checking.", '592.8 ✗', 'Estimate says about 6,000 ✓'],
     ['Not rounding both', "Mistake two: rounding only one number.", '312 × 20 ✗', '300 × 20 ✓']],
    ["Engineers estimate first to catch errors before building.", ['Check before you build']],
    [['Estimate 5.1 × 18.8.', "5 × 20.", ['5 × 20'], '≈ 100'],
     ['Estimate 810 ÷ 41.', "800 ÷ 40.", ['800 ÷ 40'], '≈ 20'],
     ['Estimate 29.7 + 41.2 + 9.8.', "30 + 40 + 10.", ['30 + 40 + 10'], '≈ 80']],
    ["Round to 1 s.f. first.", ['Does it make sense?']]);

  X('Ordering numbers of every kind', 'how to compare and order integers, decimals, fractions and negative numbers.', 'Ordering',
    ['Same form first', "To compare numbers, write them in the same form, usually decimals. Negative numbers are smaller than all positive numbers. For negatives, the bigger the digit, the smaller the number.", ['−5 < −2 < 0 < 3']],
    [['Mixed', "Order 0.6, 3/5, 0.58, 61%. 3/5 = 0.6, 61% = 0.61. Smallest: 0.58, 0.6 and 3/5 (equal), 0.61.", ['0.58 < 0.6 = 3/5 < 0.61', 'g|0.58, 3/5 = 0.6, 61%']],
     ['Negatives', "Order −0.5, −2, 0.5, −1.2 from smallest: −2, −1.2, −0.5, 0.5.", ['−2 < −1.2 < −0.5 < 0.5', 'g|−2, −1.2, −0.5, 0.5']],
     ['Fractions', "Which is bigger, 5/8 or 2/3? 15/24 and 16/24. 2/3.", ['15/24 < 16/24', 'g|2/3']],
     ['Standard measures', "Order 1.2 m, 130 cm, 1,150 mm. 1,150 mm = 1.15 m, 1.2 m, 1.3 m. Smallest: 1,150 mm, 1.2 m, 130 cm.", ['1.15 < 1.2 < 1.3', 'g|1,150 mm, 1.2 m, 130 cm']]],
    [['Negatives backwards', "Mistake one: −2 > −1.2 because 2 > 1.2.", '−2 > −1.2 ✗', '−2 < −1.2 ✓'],
     ['Different units', "Mistake two: comparing numbers in different units.", '130 > 1.2 ✗', '130 cm = 1.3 m > 1.2 m ✓']],
    ["Weather forecasts compare temperatures like −3 °C and −8 °C.", ['Temperatures']],
    [['Order 0.7, 3/4, 72% from smallest.', "0.7, 0.75, 0.72.", ['0.7 < 0.72 < 0.75'], '0.7, 72%, 3/4'],
     ['Order −3, 1, −0.5 from smallest.', "−3, −0.5, 1.", ['−3 < −0.5 < 1'], '−3, −0.5, 1'],
     ['Which is bigger, 7/20 or 0.36?', "0.35 < 0.36.", ['7/20 = 0.35'], '0.36']],
    ["Same form. Negatives reverse.", ['Convert units first']]);

  L.usePri(701, ['Powers of ten and very large numbers', 'Decimal places and significant figures', 'Adding and subtracting negative numbers', 'Estimating and checking calculations', 'Ordering numbers of every kind']);

  X('Multiplying decimals', 'how to multiply decimals by ignoring the points, then placing the point.', 'Decimal multiplication',
    ['Ignore the points', "Multiply the digits as whole numbers. Then count the decimal places in both numbers together and put that many in the answer.", ['3.4 × 2.6', '34 × 26 = 884', '2 decimal places: 8.84']],
    [['Two decimals', "Work out 3.4 × 2.6. 34 × 26 = 884. There are 2 decimal places, so 8.84.", ['34 × 26 = 884', 'g|8.84']],
     ['Decimal times whole', "Work out 0.25 × 12. 25 × 12 = 300. 2 decimal places: 3.00 = 3.", ['25 × 12 = 300', 'g|3']],
     ['Small decimals', "Work out 0.3 × 0.4. 3 × 4 = 12. 2 decimal places: 0.12.", ['3 × 4 = 12', 'g|0.12']],
     ['Estimate', "Check 3.4 × 2.6 ≈ 3 × 3 = 9. 8.84 is close.", ['≈ 9', 'g|✓']]],
    [['Wrong place', "Mistake one: 0.3 × 0.4 = 1.2.", '0.3 × 0.4 = 1.2 ✗', '0.3 × 0.4 = 0.12 ✓'],
     ['Not counting both', "Mistake two: counting only one number's decimals.", '3.4 × 2.6 = 88.4 ✗', '8.84 ✓']],
    ["A tile 0.3 m by 0.4 m has area 0.12 m².", ['0.12 m²']],
    [['Work out 2.5 × 1.6.', "25 × 16 = 400, 2 d.p.", ['4.00'], '4'],
     ['Work out 0.6 × 0.7.', "6 × 7 = 42.", ['0.42'], '0.42'],
     ['Work out 4.2 × 3.', "42 × 3 = 126.", ['12.6'], '12.6']],
    ["Multiply whole. Count d.p.", ['Check with an estimate']]);

  X('Dividing with decimals', 'how to divide by whole numbers and by decimals.', 'Decimal division',
    ['Make the divisor whole', "To divide by a decimal, multiply both numbers by 10 or 100 until the divisor is a whole number. Then divide as normal.", ['7.2 ÷ 0.4 = 72 ÷ 4']],
    [['Decimal by whole', "Work out 85.2 ÷ 6. 6 into 8 goes 1 r 2. 6 into 25 goes 4 r 1. 6 into 12 goes 2. 14.2.", ['85.2 ÷ 6', 'g|14.2']],
     ['Divide by a decimal', "Work out 7.2 ÷ 0.4. Multiply both by 10: 72 ÷ 4 = 18.", ['72 ÷ 4', 'g|18']],
     ['Divide by 0.5', "Work out 6 ÷ 0.5. 60 ÷ 5 = 12. Dividing by a half is doubling.", ['60 ÷ 5', 'g|12']],
     ['Check', "18 × 0.4 = 7.2.", ['7.2', 'g|✓']]],
    [['Dividing makes smaller', "Mistake one: expecting the answer to be smaller.", '6 ÷ 0.5 = 3 ✗', '6 ÷ 0.5 = 12 ✓'],
     ['Multiplying only one', "Mistake two: multiplying only one number.", '7.2 ÷ 4 for 7.2 ÷ 0.4 ✗', '72 ÷ 4 ✓']],
    ["How many 0.25 kg bags can you make from 6 kg? 6 ÷ 0.25 = 24 bags.", ['600 ÷ 25 = 24']],
    [['Work out 9.6 ÷ 0.3.', "96 ÷ 3.", ['96 ÷ 3'], '32'],
     ['Work out 12.6 ÷ 6.', "2.1.", ['12.6 ÷ 6'], '2.1'],
     ['How many 0.2 l cups from 3 l?', "30 ÷ 2.", ['30 ÷ 2'], '15 cups']],
    ["Make the divisor whole.", ['Same × both']]);

  X('Order of operations with powers', 'how to use brackets, powers, multiplication, division, addition and subtraction in the right order.', 'BIDMAS',
    ['BIDMAS', "Brackets, Indices, Division and Multiplication, Addition and Subtraction. Work left to right at each level.", ['B I D M A S']],
    [['With indices', "Work out 2 + 3 × 4². 4² = 16. 3 × 16 = 48. 2 + 48 = 50.", ['2 + 48', 'g|50']],
     ['Brackets', "Work out (2 + 3) × 4². 5 × 16 = 80.", ['5 × 16', 'g|80']],
     ['Fractions of brackets', "Work out 36 ÷ 3² + 5. 3² = 9. 36 ÷ 9 = 4. 4 + 5 = 9.", ['4 + 5', 'g|9']],
     ['A real problem', "A club has 4 teams of 11 players and 3 spares each. 4 × (11 + 3) = 56 people.", ['4 × 14', 'g|56']]],
    [['Left to right', "Mistake one: working left to right.", '2 + 3 × 4² = 5 × 16 ✗', '2 + 48 = 50 ✓'],
     ['Squaring a sum', "Mistake two: 3² = 6.", '3² = 6 ✗', '3² = 9 ✓']],
    ["Spreadsheets and calculators follow BIDMAS.", ['Calculator rules']],
    [['Work out 5 + 2 × 3².', "2 × 9 = 18.", ['5 + 18'], '23'],
     ['Work out (7 − 2)² − 10.', "25 − 10.", ['25 − 10'], '15'],
     ['Work out 48 ÷ (2 + 4) × 3.', "48 ÷ 6 × 3.", ['8 × 3'], '24']],
    ["Brackets, indices, ÷ ×, + −.", ['Left to right']]);

  X('Long calculations in real life', 'how to solve multi-step problems with large numbers and decimals.', 'Calculation problems',
    ['Plan the steps', "Work out what each step needs. Write each result. Use your estimate to check.", ['Plan → calculate → check']],
    [['Cost', "A school buys 28 books at £6.95 and 15 pens at £0.85. 28 × 6.95 = £194.60. 15 × 0.85 = £12.75. Total £207.35.", ['194.60 + 12.75', 'g|£207.35']],
     ['Check', "Estimate 28 × 7 = 196. 15 × 1 = 15. Total about £211. £207.35 is close.", ['196 + 15', 'g|✓']],
     ['Rate', "A printer prints 24 pages a minute. How many pages in 2 hours 15 minutes? 135 minutes × 24 = 3,240 pages.", ['135 × 24', 'g|3,240']],
     ['Sharing', "£1,250 is shared equally between 8. 1,250 ÷ 8 = £156.25.", ['1,250 ÷ 8', 'g|£156.25']]],
    [['Forgetting a step', "Mistake one: leaving out a step.", 'Only the books: £194.60 ✗', 'Books + pens ✓'],
     ['Units', "Mistake two: mixing hours and minutes.", '2.15 × 24 ✗', '135 × 24 ✓']],
    ["Budgets and receipts use long calculations every day.", ['Shop receipts']],
    [['A pack of 12 pencils costs £3.60. What does one cost?', "3.60 ÷ 12.", ['360 ÷ 12'], '30p'],
     ['A car travels 8 km per litre. How far on 45 litres?', "8 × 45.", ['8 × 45'], '360 km'],
     ['£2,400 is shared equally between 16 people. How much each?', "2,400 ÷ 16.", ['2,400 ÷ 16'], '£150']],
    ["Plan, calculate, check.", ['Write each step']]);

  L.usePri(702, ['Multiplying decimals', 'Dividing with decimals', 'Order of operations with powers', 'Long calculations in real life']);

  X('Multiplying fractions', 'how to multiply fractions and mixed numbers.', 'Multiplying fractions',
    ['Top times top, bottom times bottom', "To multiply fractions, multiply the numerators and multiply the denominators. Simplify if you can. To multiply a mixed number, change it to an improper fraction first.", ['2/3 × 3/4 = 6/12 = 1/2']],
    [['Two fractions', "Work out 2/3 × 3/4. 2 × 3 = 6. 3 × 4 = 12. 6/12 = 1/2.", ['6/12', 'g|1/2']],
     ['Fraction of a whole number', "Work out 3/5 × 10. 3 × 10/5 = 30/5 = 6.", ['30/5', 'g|6']],
     ['Mixed number', "Work out 1 1/2 × 2/3. 3/2 × 2/3 = 6/6 = 1.", ['3/2 × 2/3', 'g|1']],
     ['A problem', "Ali uses 3/4 of a bag of flour, and 1/2 of that for bread. 3/4 × 1/2 = 3/8 of the bag.", ['3/4 × 1/2', 'g|3/8']]],
    [['Adding the denominators', "Mistake one: finding a common denominator when multiplying.", '2/3 × 3/4 = 8/12 × 9/12 ✗', '6/12 = 1/2 ✓'],
     ['Not simplifying', "Mistake two: leaving the answer unsimplified.", '6/12 ✗', '1/2 ✓']],
    ["Scaling a recipe by 2/3 multiplies each amount by 2/3.", ['2/3 × 3/4 cup = 1/2 cup']],
    [['Work out 3/4 × 2/5.', "6/20.", ['6/20'], '3/10'],
     ['Work out 2/3 × 9.', "18/3.", ['18/3'], '6'],
     ['Work out 2 1/2 × 4/5.', "5/2 × 4/5 = 20/10.", ['20/10'], '2']],
    ["Top × top. Bottom × bottom.", ['Simplify']]);

  X('Dividing fractions', 'how to divide fractions by turning the second one upside down.', 'Dividing fractions',
    ['Flip and multiply', "To divide by a fraction, turn the second fraction upside down (its reciprocal) and multiply. Dividing by 1/2 is the same as multiplying by 2.", ['3/4 ÷ 1/2 = 3/4 × 2/1']],
    [['Fraction by fraction', "Work out 3/4 ÷ 1/2. 3/4 × 2/1 = 6/4 = 1 1/2.", ['6/4', 'g|1 1/2']],
     ['Whole by fraction', "Work out 6 ÷ 2/3. 6 × 3/2 = 18/2 = 9.", ['6 × 3/2', 'g|9']],
     ['Fraction by whole', "Work out 2/5 ÷ 4. 2/5 × 1/4 = 2/20 = 1/10.", ['2/20', 'g|1/10']],
     ['A problem', "How many 1/4 litre cups from 3 litres? 3 ÷ 1/4 = 3 × 4 = 12 cups.", ['3 × 4', 'g|12 cups']]],
    [['Flipping the wrong one', "Mistake one: flipping the first fraction.", '3/4 ÷ 1/2 = 4/3 × 1/2 ✗', '3/4 × 2/1 ✓'],
     ['Dividing makes smaller', "Mistake two: expecting a smaller answer.", '6 ÷ 2/3 = 4 ✗', '6 ÷ 2/3 = 9 ✓']],
    ["Cutting a ribbon of 3 m into pieces of 3/4 m gives 4 pieces.", ['3 ÷ 3/4 = 4']],
    [['Work out 1/2 ÷ 1/4.', "1/2 × 4.", ['1/2 × 4/1'], '2'],
     ['Work out 8 ÷ 2/5.', "8 × 5/2.", ['40/2'], '20'],
     ['Work out 3/5 ÷ 3.', "3/5 × 1/3.", ['3/15'], '1/5']],
    ["Flip the second. Multiply.", ['Reciprocal']]);

  X('Mixed numbers with different denominators', 'how to add and subtract mixed numbers with different denominators.', 'Mixed numbers',
    ['Common denominator', "Add or subtract the whole numbers, and the fractions with a common denominator. For subtraction it is often easier to change both to improper fractions.", ['2 1/3 + 1 3/4']],
    [['Adding', "Work out 2 1/3 + 1 3/4. Wholes: 3. Fractions: 4/12 + 9/12 = 13/12 = 1 1/12. 4 1/12.", ['3 + 1 1/12', 'g|4 1/12']],
     ['Subtracting', "Work out 3 1/2 − 1 3/4. 7/2 − 7/4 = 14/4 − 7/4 = 7/4 = 1 3/4.", ['14/4 − 7/4', 'g|1 3/4']],
     ['A problem', "A shelf is 2 2/3 m. A book takes 3/4 m. Left: 8/3 − 3/4 = 32/12 − 9/12 = 23/12 = 1 11/12 m.", ['32/12 − 9/12', 'g|1 11/12 m']],
     ['Check', "1 3/4 + 1 3/4 = 3 1/2.", ['✓']]],
    [['Subtracting the smaller', "Mistake one: subtracting the smaller fraction from the larger.", '3 1/2 − 1 3/4: 3/4 − 1/2 ✗', 'Change to improper ✓'],
     ['No common denominator', "Mistake two: adding without a common denominator.", '1/3 + 3/4 = 4/7 ✗', '13/12 ✓']],
    ["Builders and cooks use mixed numbers often.", ['Mixed measures']],
    [['Work out 1 1/2 + 2 3/4.', "3 + 5/4.", ['4 1/4'], '4 1/4'],
     ['Work out 4 1/3 − 1 2/3.', "13/3 − 5/3.", ['8/3'], '2 2/3'],
     ['Work out 2 3/5 + 1 1/2.', "13/5 + 3/2 = 26/10 + 15/10.", ['41/10'], '4 1/10']],
    ["Same denominator. Carry.", ['Improper fractions help']]);

  X('Fractions of amounts and finding the whole', 'how to find a fraction of an amount and work backwards to the whole.', 'Fractions of amounts',
    ['Forwards and backwards', "To find a fraction of an amount, divide by the denominator and multiply by the numerator. To find the whole from a part, divide by the numerator then multiply by the denominator.", ['3/5 of 60 = 36', '36 → 60']],
    [['Forwards', "Find 3/5 of 60. 60 ÷ 5 = 12. 12 × 3 = 36.", ['12 × 3', 'g|36']],
     ['Backwards', "3/5 of a number is 36. 36 ÷ 3 = 12 is one fifth. 12 × 5 = 60.", ['36 ÷ 3 × 5', 'g|60']],
     ['A problem', "Ben spent 2/7 of his money and has £35 left. 5/7 is £35. £35 ÷ 5 = £7. 7 × 7 = £49.", ['35 ÷ 5 × 7', 'g|£49']],
     ['Percentage link', "3/5 = 60%. 60% of 60 = 36.", ['3/5 = 0.6', 'g|✓']]],
    [['Multiplying on the way back', "Mistake one: multiplying by the numerator again.", '36 × 3/5 ✗', '36 ÷ 3 × 5 ✓'],
     ['Using the wrong fraction', "Mistake two: using the spent fraction instead of what is left.", '£35 = 2/7 ✗', '£35 = 5/7 ✓']],
    ["A sale reduces prices by 1/4. A £30 sale price is 3/4 of the old price: £40.", ['30 ÷ 3 × 4 = 40']],
    [['Find 5/8 of 72.', "72 ÷ 8 = 9, × 5.", ['9 × 5'], '45'],
     ['2/3 of a number is 24. Find the number.', "24 ÷ 2 × 3.", ['12 × 3'], '36'],
     ['Mia has 5/8 of a book left to read. That is 150 pages. How long is the book?', "150 ÷ 5 × 8.", ['30 × 8'], '240 pages']],
    ["Part ÷ top × bottom.", ['Find one part first']]);

  L.usePri(703, ['Multiplying fractions', 'Dividing fractions', 'Mixed numbers with different denominators', 'Fractions of amounts and finding the whole']);
})();
