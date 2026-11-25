/* lessons_new_s2e.js: S2 topic 822 Percentages */
(function () {
  'use strict';
  var BT = window.BT; if (!BT || !BT.L || !BT.L.fx) return;
  var L = BT.L, fx = L.fx;

  fx('Percentages of amounts without a calculator', 'how to find a percentage of an amount in your head by building it from 10 per cent and 1 per cent.', {
    head: 'Percentages without a calculator',
    basics: [['Start from 10 per cent', [
      ["Per cent means out of 100. 10% is 1 tenth, so divide by 10. 1% is 1 hundredth, so divide by 100. 50% is a half, and 25% is a quarter.", ['10% = ÷ 10', '1% = ÷ 100', '50% = ÷ 2', '25% = ÷ 4']],
      ["Build any other percentage from these. 5% is half of 10%. 2 and a half per cent is half of 5%. Then add the pieces together.", ['5% = half of 10%', '2.5% = half of 5%', 'Add the pieces']]]]],
    ex: [
      ['35% of £240', [
        ["Find 35% of £240. 10% is 240 divided by 10, which is £24.", ['10% of £240 = 240 ÷ 10', '= £24']],
        ["35 is 3 tens and a 5. 3 tens is 3 times 24, which is 72. 5% is half of 24, which is 12. 72 plus 12 is £84.", ['30% = 3 × 24 = 72', '5% = 24 ÷ 2 = 12', 'g|35% = 72 + 12 = £84']]]],
      ['17 and a half per cent of £80', [
        ["Find 17 and a half per cent of £80. 10% is £8. 5% is £4. 2 and a half per cent is £2.", ['10% of £80 = £8', '5% = £4', '2.5% = £2']],
        ["17 and a half is 10 plus 5 plus 2 and a half. Add the amounts: 8 plus 4 plus 2 is £14.", ['17.5% = 10% + 5% + 2.5%', 'g|8 + 4 + 2 = £14']]]],
      ['Using one per cent', [
        ["Find 7% of 600. 1% is 600 divided by 100, which is 6. 7% is 7 times 6.", ['1% of 600 = 6', '7% = 7 × 6', 'g|= 42']]]],
      ['12 and a half per cent', [
        ["Find 12 and a half per cent of £40. 12 and a half per cent is 1 eighth. 40 divided by 8 is £5. Check: 10% is 4, 2 and a half per cent is 1, and 4 plus 1 is 5.", ['12.5% = 1/8', '40 ÷ 8 = 5', 'g|£5']]]]],
    mist: [
      ['Dividing by the percentage number', "Mistake one: dividing by the percentage number. 15% of 60 is not 60 divided by 15. Build it instead. 10% is 6, 5% is 3, and 6 plus 3 is 9.", ['r|15% of 60 = 60 ÷ 15 = 4 ✗', 'g|10% + 5% = 6 + 3 = 9 ✓']],
      ['Forgetting the tens', "Mistake two: finding 10% and 5%, but adding only one 10. For 35% of 240, we need 3 tens, not one.", ['r|24 + 12 = 36 ✗', 'g|3 × 24 + 12 = 84 ✓']]],
    real: ['In real life', "A jacket costs £80 and is 30% off. 10% is £8, so 30% is £24. You pay 80 minus 24, which is £56. You can do this in your head in the shop.", ['10% = £8, 30% = £24', '80 − 24 = £56']],
    turns: [
      { q: 'Find 15% of £60 without a calculator.', say: "10% of 60 is £6. 5% is half of that, £3. 15% is 6 plus 3, which is £9.", work: ['10% of £60 = 60 ÷ 10 = £6', '5% = 6 ÷ 2 = £3', '15% = 6 + 3 = £9'], ans: ['g|£9'] },
      { q: 'Find 35% of £80 without a calculator.', say: "10% of 80 is £8. 30% is 3 times 8, which is 24. 5% is half of 8, which is 4. 24 plus 4 is £28.", work: ['10% of £80 = £8', '30% = 3 × 8 = £24', '5% = 8 ÷ 2 = £4', '35% = 24 + 4 = £28'], ans: ['g|£28'] },
      { q: 'A meal costs £40. You leave a tip of 12 and a half per cent. How much is the tip?', say: "10% of 40 is £4. 5% is £2, and 2 and a half per cent is £1. 12 and a half per cent is 10 plus 2 and a half, which is 4 plus 1, £5.", work: ['10% of £40 = £4', '5% = £2 and 2.5% = £1', '12.5% = 10% + 2.5% = 4 + 1', 'Check: 40 ÷ 8 = 5'], ans: ['g|£5'] }],
    rec: ["Build a percentage from 10%, 5% and 1%.", ['10% = ÷ 10, 1% = ÷ 100', '5% = half of 10%', '2.5% = half of 5%', 'Add the pieces together']]
  });

  fx('Writing one amount as a percentage of another', 'how to write one amount as a percentage of another, including amounts in different units.', {
    head: 'One amount as a percentage',
    basics: [['Part over whole', [
      ["To write 1 amount as a percentage of another, write it as a fraction: the part on the top and the whole on the bottom. Then change the fraction to a percentage by multiplying by 100.", ['part ÷ whole × 100', 'Part on top, whole on the bottom']],
      ["Both amounts must be in the same units. If they are not, change them first. Remember the whole is the amount after the word of.", ['Same units first', 'The whole follows "of"']]]]],
    ex: [
      ['18 out of 24', [
        ["Aisha scores 18 out of 24. What percentage is that? Write the fraction: 18 over 24. Simplify by dividing top and bottom by 6. That gives 3 quarters.", ['18/24', '18/24 = 3/4']],
        ["3 quarters is 0 point 7 5. Multiply by 100 to get 75%. Check: 3 quarters of 24 is 18.", ['3 ÷ 4 = 0.75', '0.75 × 100', 'g|75%']]]],
      ['Seven out of eight', [
        ["Seven out of eight. Divide seven by eight to get zero point eight seven five. Multiply by one hundred. That is eighty-seven point five per cent.", ['7 ÷ 8 = 0.875', 'g|0.875 × 100 = 87.5%']]]],
      ['A discount', [
        ["A jacket is £40. It is reduced by £6. What percentage is the reduction? The part is 6, the whole is 40. 6 divided by 40 is 0 point 1 5. That is 15%.", ['6 ÷ 40 = 0.15', 'g|0.15 × 100 = 15%']]]],
      ['Different units', [
        ["What percentage of 2 metres is 40 centimetres? The units are different, so change 2 metres to 200 centimetres. Then 40 over 200 is 0 point 2. That is 20%.", ['2 m = 200 cm', '40 ÷ 200 = 0.2', 'g|0.2 × 100 = 20%']]]]],
    mist: [
      ['Dividing the wrong way round', "Mistake one: dividing the whole by the part. 18 out of 24 is 18 divided by 24, not 24 divided by 18. That would give a percentage over 100, which cannot be right for a score.", ['r|24 ÷ 18 = 1.33 → 133% ✗', 'g|18 ÷ 24 = 0.75 → 75% ✓']],
      ['Mixing the units', "Mistake two: using different units. 40 centimetres out of 2 metres is not 40 divided by 2. Change both to centimetres first.", ['r|40 ÷ 2 × 100 = 2000% ✗', 'g|40 ÷ 200 × 100 = 20% ✓']]],
    real: ['In real life', "Test scores, discounts and surveys are all shown as percentages. If 12 out of 30 pupils walk to school, 12 divided by 30 is 0 point 4, which is 40%.", ['12 ÷ 30 = 0.4', '= 40% walk']],
    turns: [
      { q: 'Write 9 out of 25 as a percentage.', say: "Write the fraction 9 over 25. Multiply top and bottom by 4 to get 36 over 100. So it is 36%.", work: ['9/25', '9/25 = 36/100', '= 36%'], ans: ['g|36%'] },
      { q: 'A shop sells 48 of its 60 cakes. What percentage were sold?', say: "The part is 48 and the whole is 60. 48 divided by 60 is 0 point 8. Multiplying by 100 gives 80%.", work: ['48 ÷ 60 = 0.8', '0.8 × 100 = 80%'], ans: ['g|80%'] },
      { q: 'What percentage of 2 metres is 30 centimetres?', say: "The units are different. 2 metres is 200 centimetres. 30 over 200 is 0 point 1 5. That is 15%.", work: ['2 m = 200 cm', '30 ÷ 200 = 0.15', '0.15 × 100 = 15%'], ans: ['g|15%'] }],
    rec: ["Part divided by whole, times 100.", ['Write part over whole', 'Divide, then × 100', 'Same units first', 'Check by finding the percentage of the whole']]
  });

  fx('Percentage increase and decrease with multipliers', 'how to increase or decrease an amount by a percentage using a multiplier.', {
    head: 'Increase and decrease with a multiplier',
    basics: [['The multiplier', [
      ["To increase an amount by a percentage, we find the new percentage of the old amount. A 15% rise gives 115% of the old price. As a decimal, that is 1.15. This is the multiplier.", ['Increase 15%: 100% + 15% = 115%', 'Multiplier 1.15']],
      ["To decrease, take the percentage away from 100%. A 20% fall leaves 80%, a multiplier of 0 point 8. Then multiply the old amount by the multiplier.", ['Decrease 20%: 100% − 20% = 80%', 'Multiplier 0.8']]]]],
    ex: [
      ['A price rise', [
        ["A jacket costs £60. The price goes up by 15%. What is the new price? 100 plus 15 is 115%. The multiplier is 1.15.", ['100% + 15% = 115%', 'Multiplier = 1.15']],
        ["60 times 1.15 is £69.", ['60 × 1.15', 'g|= £69']]]],
      ['A sale', [
        ["A bag costs £50. It is reduced by 20%. What is the sale price? 100 minus 20 is 80%. The multiplier is 0 point 8.", ['100% − 20% = 80%', 'Multiplier = 0.8']],
        ["50 times 0 point 8 is £40.", ['50 × 0.8', 'g|= £40']]]],
      ['Finding the multiplier', [
        ["What multiplier is used to decrease an amount by 35%? 100 minus 35 is 65. As a decimal, 0 point 6 5.", ['100 − 35 = 65', 'g|Multiplier = 0.65']]]],
      ['A phone', [
        ["A phone costs £250. The price rises by 12%. The multiplier is 1.12. 250 times 1.12 is £280.", ['250 × 1.12', 'g|= £280']]]]],
    mist: [
      ['Using the percentage as the multiplier', "Mistake one: multiplying by the percentage itself. A 15% rise is not times 0 point 1 5. That finds the rise only, £9, not the new price.", ['r|60 × 0.15 = £9 ✗', 'g|60 × 1.15 = £69 ✓']],
      ['Using the wrong direction', "Mistake two: using 1.2 for a decrease. A 20% decrease must make the amount smaller, so the multiplier must be less than 1.", ['r|50 × 1.2 = £60 ✗', 'g|50 × 0.8 = £40 ✓']]],
    real: ['In real life', "Value added tax of 20% is added to many prices. A chair costs £35 before tax. The multiplier is 1.2. 35 times 1.2 is £42.", ['35 × 1.2', '= £42']],
    turns: [
      { q: 'Increase £80 by 25%.', say: "100 plus 25 is 125%. The multiplier is 1.25. 80 times 1.25 is £100.", work: ['100% + 25% = 125%', 'Multiplier = 1.25', '80 × 1.25 = 100'], ans: ['g|£100'] },
      { q: 'Decrease £150 by 40%.', say: "100 minus 40 is 60%. The multiplier is 0 point 6. 150 times 0 point 6 is £90.", work: ['100% − 40% = 60%', 'Multiplier = 0.6', '150 × 0.6 = 90'], ans: ['g|£90'] },
      { q: 'A monthly wage of £1,200 rises by 3 and a half per cent. What is the new wage?', say: "One hundred plus three point five is one hundred and three point five per cent. The multiplier is one point zero three five. One thousand two hundred times one point zero three five is one thousand two hundred and forty-two pounds.", work: ['100% + 3.5% = 103.5%', 'Multiplier = 1.035', '1200 × 1.035 = 1242'], ans: ['g|£1,242'] }],
    rec: ["Increase: multiplier above one. Decrease: multiplier below one.", ['Increase: 100% + the percentage', 'Decrease: 100% − the percentage', 'Change to a decimal for the multiplier', 'New amount = old amount × multiplier']]
  });

  fx('Finding a percentage change', 'how to find the percentage increase or decrease between two amounts.', {
    head: 'Percentage change',
    basics: [['The formula', [
      ["To find a percentage change, first find the change: the new amount minus the old amount. Then divide the change by the original amount. Then multiply by 100.", ['change = new − old', '% change = change ÷ original × 100']],
      ["Always divide by the original amount, the one you started with. If the answer is positive it is an increase. If the new amount is smaller it is a decrease.", ['Divide by the ORIGINAL', 'New bigger: increase. New smaller: decrease']]]]],
    ex: [
      ['A bike', [
        ["A bike costs £200 and is sold for 250. What is the percentage increase? The change is 250 minus 200, which is £50.", ['250 − 200 = 50']],
        ["Divide by the original: 50 divided by 200 is 0 point 2 5. Multiply by 100. The increase is 25%.", ['50 ÷ 200 = 0.25', 'g|0.25 × 100 = 25%']]]],
      ['A fall in price', [
        ["A coat is reduced from £80 to 60. The change is £20 down. 20 divided by 80 is 0 point 2 5. The decrease is 25%.", ['80 − 60 = 20', '20 ÷ 80 = 0.25', 'g|25% decrease']]]],
      ['Profit', [
        ["A trader buys a scarf for £8 and sells it for £10. The profit is £2. 2 divided by 8 is 0 point 2 5. The percentage profit is 25%.", ['10 − 8 = 2', '2 ÷ 8 = 0.25', 'g|25% profit']]]],
      ['Up and down are not the same', [
        ["A price goes from 80 to 100. That is 20 over 80, a 25% rise. Now it goes back from 100 to 80. That is 20 over 100, a 20% fall. The percentages are different because the original is different.", ['80 → 100: 20 ÷ 80 = 25% up', '100 → 80: 20 ÷ 100 = 20% down']]]]],
    mist: [
      ['Dividing by the new amount', "Mistake one: dividing by the new amount. For 200 rising to 250, 50 divided by 250 gives 20%. That is wrong. Divide by the original, 200.", ['r|50 ÷ 250 = 20% ✗', 'g|50 ÷ 200 = 25% ✓']],
      ['Forgetting to say increase or decrease', "Mistake two: giving just the number. 80 down to 60 is a decrease of 25%. Say whether it is an increase or a decrease.", ['r|Answer: 25% ✗ (up or down?)', 'g|25% decrease ✓']]],
    real: ['In real life', "News reports use percentage change all the time. If a town has 2,400 people and grows to 3,000, the change is 600. 600 divided by 2,400 is 0 point 2 5. The population grew by 25%.", ['600 ÷ 2400 = 0.25', '25% growth']],
    turns: [
      { q: 'A price rises from £50 to £65. What is the percentage increase?', say: "The change is 65 minus 50, which is 15. 15 divided by 50 is 0 point 3. Multiply by 100. The increase is 30%.", work: ['65 − 50 = 15', '15 ÷ 50 = 0.3', '0.3 × 100 = 30%'], ans: ['g|30% increase'] },
      { q: 'A TV goes from £90 down to £72 in a sale. What is the percentage decrease?', say: "The change is 90 minus 72, which is 18. 18 divided by 90 is 0 point 2. The decrease is 20%.", work: ['90 − 72 = 18', '18 ÷ 90 = 0.2', '0.2 × 100 = 20%'], ans: ['g|20% decrease'] },
      { q: 'A village has 2,400 people. 5 years later it has 3,000. What is the percentage increase?', say: "The change is 3,000 minus 2,400, which is 600. 600 divided by 2,400 is 0 point 2 5. The increase is 25%.", work: ['3000 − 2400 = 600', '600 ÷ 2400 = 0.25', '0.25 × 100 = 25%'], ans: ['g|25% increase'] }],
    rec: ["Change divided by the original, times 100.", ['Change = new − old', 'Divide by the ORIGINAL', '× 100', 'Say increase or decrease']]
  });

  fx('Simple and compound interest', 'how simple interest and compound interest are worked out and how they differ.', {
    head: 'Simple and compound interest',
    basics: [['Two kinds of interest', [
      ["Interest is extra money a bank pays you for saving. With simple interest, you are paid the same amount every year, always based on the original amount. The amount each year is the original amount times the rate.", ['Simple: same amount each year', 'Interest = P × r × t']],
      ["With compound interest, the interest is added to the balance, so next year you earn interest on the bigger balance. Each year we multiply by the multiplier. After n years, multiply by the multiplier n times.", ['Compound: on the growing total', 'Amount = P × (1 + r)ⁿ']]]]],
    ex: [
      ['Simple interest', [
        ["£500 is invested at 4% simple interest for 3 years. 4% of 500 is £20 each year.", ['4% of £500 = £20 a year']],
        ["Over 3 years that is £60. The total is £560.", ['3 × 20 = £60', 'g|500 + 60 = £560']]]],
      ['Compound interest', [
        ["£500 is invested at 4% compound interest for 2 years. The multiplier is 1.04. After 1 year: 500 times 1.04 is 520.", ['Multiplier = 1.04', 'Year 1: 500 × 1.04 = 520']],
        ["After year 2: 520 times 1.04 is £540 and 80p. In 1 step, 500 times 1.04 squared gives the same.", ['Year 2: 520 × 1.04 = 540.80', 'g|500 × 1.04² = £540.80']]]],
      ['3 years of compound interest', [
        ["£2,000 is invested at 3% compound interest for 3 years. The multiplier is 1.03, to the power 3. 1.03 cubed is about 1.0927. Times 2,000 is about 2,000, £185 and 45p.", ['2000 × 1.03³', 'g|≈ £2,185.45']]]],
      ['Which is better?', [
        ["One thousand pounds at five per cent for two years. Simple interest gives fifty pounds a year, so one hundred pounds and a total of one thousand one hundred. Compound interest gives one thousand times one point zero five squared, which is one thousand, one hundred and two pounds fifty. Compound is better by two pounds fifty.", ['Simple: 1000 + 100 = £1,100', 'Compound: 1000 × 1.05² = £1,102.50']]]]],
    mist: [
      ['Using simple interest for compound', "Mistake one: working out compound interest as simple. 500 at 4% for 2 years is not 500 plus 2 lots of 20. With compound interest, year 2 earns interest on 520.", ['r|500 + 20 + 20 = £540 ✗', 'g|500 × 1.04² = £540.80 ✓']],
      ['Leaving out the one', "Mistake two: using 0 point 0 4 as the multiplier. For growth, the multiplier is 1 plus the rate, 1.04.", ['r|500 × 0.04² ✗', 'g|500 × 1.04² ✓']]],
    real: ['In real life', "Savings accounts use compound interest. Loans and credit cards do too, which is why debts can grow quickly. Simple interest is used for some short loans.", ['Savings: compound growth', 'Loans: compound too']],
    turns: [
      { q: 'Find the simple interest on £800 at 3% a year for 4 years.', say: "3% of 800 is £24 each year. Over 4 years, that is 4 times 24, £96.", work: ['3% of £800 = 0.03 × 800 = £24 a year', '4 × 24 = £96'], ans: ['g|£96'] },
      { q: '£300 is invested at 10% compound interest for 2 years. How much is it worth?', say: "The multiplier is 1.1. After year 1: 300 times 1.1 is 330. After year 2: 330 times 1.1 is £363.", work: ['Multiplier = 1.1', 'Year 1: 300 × 1.1 = 330', 'Year 2: 330 × 1.1 = 363'], ans: ['g|£363'] },
      { q: '£1,000 is invested at 2% compound interest for 3 years. How much is it worth, to the nearest penny?', say: "The multiplier is 1.02. 1,000 times 1.02 cubed. 1.02 cubed is 1.061208. Times 1,000 is £1,061 and 21p.", work: ['Multiplier = 1.02', '1000 × 1.02³', '1.02³ = 1.061208', '1000 × 1.061208 = 1061.208'], ans: ['g|£1,061.21'] }],
    rec: ["Simple interest is the same every year. Compound interest is on the growing total.", ['Simple: P × r × t', 'Compound: P × (1 + r)ⁿ', 'Compound grows faster', 'Round money to the nearest penny']]
  });

  fx('Comparing results using percentages', 'how to compare amounts out of different totals by changing them to percentages.', {
    head: 'Comparing with percentages',
    basics: [['Fair comparisons', [
      ["You cannot fairly compare scores out of different totals just by looking at the top numbers. 52 is bigger than 36, but it might be out of a bigger total. Change each result to a percentage.", ['Different totals: change to %', 'part ÷ whole × 100']],
      ["Then compare the percentages. The biggest percentage is the best result. Always compare like with like.", ['Compare % with %']]]]],
    ex: [
      ['Two tests', [
        ["In test 1 you score 36 out of 45. In test 2 you score 52 out of 80. Which is the better result? Test 1: 36 divided by 45 is 0 point 8, which is 80%.", ['36 ÷ 45 = 0.8', '= 80%']],
        ["Test 2: 52 divided by 80 is 0 point 6 5, which is 65%. 80 is higher than 65, so test 1 is better.", ['52 ÷ 80 = 0.65', '= 65%', 'g|Test 1 is better']]]],
      ['Close results', [
        ["Seven out of eight, or twenty-two out of twenty-five? Seven over eight is eighty-seven point five per cent. Twenty-two over twenty-five is eighty-eight per cent. The second is slightly better.", ['7/8 = 87.5%', '22/25 = 88%', 'g|22/25 is better']]]],
      ['Two discounts', [
        ["Shop A takes 15% off an £80 coat. Shop B takes £11 off. 15% of 80 is £12. So shop A saves more.", ['15% of £80 = £12', 'Shop B: £11', 'g|Shop A saves more']]]],
      ['Pass rates', [
        ["Class A: 18 of 24 passed. Class B: 15 of 20 passed. 18 over 24 is 75%. 15 over 20 is also 75%. The classes did equally well.", ['18/24 = 75%', '15/20 = 75%', 'g|Equal']]]]],
    mist: [
      ['Comparing the top numbers', "Mistake one: comparing the scores without the totals. 52 is bigger than 36, but 52 out of 80 is 65% and 36 out of 45 is 80%.", ['r|52 > 36, so Test 2 is better ✗', 'g|65% < 80%, so Test 1 is better ✓']],
      ['Comparing a percentage with an amount', "Mistake two: comparing 15% with £11. They are different things. Find 15% of the price in pounds, or change £11 to a percentage, before comparing.", ['r|15 > 11 ✗', 'g|£12 > £11 ✓']]],
    real: ['In real life', "Sports teams, exam boards and shops all compare using percentages. A player who scores nine goals from twelve shots has seventy-five per cent accuracy. Another scoring fifteen from twenty-four has about sixty-two point five per cent.", ['9/12 = 75%', '15/24 = 62.5%']],
    turns: [
      { q: 'Amy scores 21 out of 30. Ben scores 34 out of 50. Who did better?', say: "Amy: 21 divided by 30 is 0 point 7, which is 70%. Ben: 34 divided by 50 is 0 point 6 8, which is 68%. 70 is bigger than 68, so Amy did better.", work: ['Amy: 21 ÷ 30 = 0.7 = 70%', 'Ben: 34 ÷ 50 = 0.68 = 68%', '70% > 68%'], ans: ['g|Amy did better'] },
      { q: 'Shop A takes 15% off an £80 coat. Shop B takes £11 off the same coat. Which shop gives the bigger saving?', say: "10% of 80 is £8. 5% is £4. So 15% is £12. 12 is more than 11, so shop A saves more.", work: ['10% of £80 = £8', '5% = £4', '15% = 8 + 4 = £12', '£12 > £11'], ans: ['g|Shop A'] },
      { q: '12 out of 16 pupils in class A passed. 15 out of 24 pupils in class B passed. Which class had the better pass rate?', say: "Class A: twelve divided by sixteen is zero point seven five, seventy-five per cent. Class B: fifteen divided by twenty-four is zero point six two five, sixty-two point five per cent. Seventy-five is bigger, so class A had the better pass rate.", work: ['A: 12 ÷ 16 = 0.75 = 75%', 'B: 15 ÷ 24 = 0.625 = 62.5%', '75% > 62.5%'], ans: ['g|Class A'] }],
    rec: ["Change to percentages before comparing.", ['Part ÷ whole × 100', 'Compare % with %', 'Bigger percentage is better', 'Percentage of a price can be changed to pounds']]
  });
})();
