/* lessons_new_s2f.js: S2 topic 822 Percentages, full rewrites and topic list */
(function () {
  'use strict';
  var BT = window.BT; if (!BT || !BT.L || !BT.L.fx) return;
  var L = BT.L, fx = L.fx;

  fx('How do you calculate fractions and percentages?', 'how to move between fractions, decimals and percentages, and find a fraction or percentage of an amount.', {
    head: 'Fractions, decimals and percentages',
    basics: [['Three ways to write the same number', [
      ["A fraction, a decimal and a percentage can all describe the same amount. To change a fraction to a decimal, divide the top by the bottom. To change a decimal to a percentage, multiply by 100. To go back, divide by 100.", ['3/8 → 3 ÷ 8 = 0.375', '0.375 × 100 = 37.5%', '% → ÷ 100 → decimal']],
      ["To find a fraction of an amount, divide by the bottom and multiply by the top. To find a percentage of an amount, change the percentage to a decimal and multiply.", ['2/5 of 60: 60 ÷ 5 × 2', '35% of 240: 0.35 × 240']]]]],
    ex: [
      ['Fraction to percentage', [
        ["Write three eighths as a decimal and a percentage. Divide three by eight to get zero point three seven five. Multiply by one hundred to get thirty-seven point five per cent.", ['3 ÷ 8 = 0.375', 'g|0.375 × 100 = 37.5%']]]],
      ['Percentage to fraction', [
        ["Write 60% as a fraction in its simplest form. 60% is 60 over 100. Divide top and bottom by 20 to get 3 over 5.", ['60% = 60/100', 'g|= 3/5']]]],
      ['A fraction of an amount', [
        ["Find 2 fifths of 60. Divide 60 by 5 to get 12. Multiply by 2 to get 24.", ['60 ÷ 5 = 12', 'g|12 × 2 = 24']]]],
      ['A percentage of an amount', [
        ["Find 35% of 240. 35% is 0.35 as a decimal. 0.35 times 240 is 84.", ['35% = 0.35', 'g|0.35 × 240 = 84']]]]],
    mist: [
      ['Percent as the whole number', "Mistake one: using 35 instead of 0.35. 35% of 240 is not 35 times 240. Change the percentage to a decimal first.", ['r|35 × 240 = 8400 ✗', 'g|0.35 × 240 = 84 ✓']],
      ['Dividing the wrong way', "Mistake two: dividing 8 by 3 to change 3 eighths to a decimal. The top goes first: 3 divided by 8.", ['r|8 ÷ 3 = 2.67 ✗', 'g|3 ÷ 8 = 0.375 ✓']]],
    real: ['In real life', "A recipe uses 3 quarters of a bag of flour, which is 75%. A phone battery on 40% has 2 fifths left. All of these mean the same amount in different clothes.", ['3/4 = 0.75 = 75%', '40% = 2/5']],
    turns: [
      { q: 'Write 7 twentieths as a percentage.', say: "7 twentieths is the same as 35 hundredths, because we multiply top and bottom by 5. 35 hundredths is 35%.", work: ['7/20 = 35/100', '= 35%'], ans: ['g|35%'] },
      { q: 'Find 35% of £240.', say: "35% is 0.35. 0.35 times 240 is £84.", work: ['35% = 0.35', '0.35 × 240 = 84'], ans: ['g|£84'] },
      { q: 'Put these in order, smallest first: 0.4, 35%, 3 eighths.', say: "Change them all to percentages. Zero point four is forty per cent. Thirty-five per cent stays the same. Three eighths is thirty-seven point five per cent. In order: thirty-five, thirty-seven point five, forty.", work: ['0.4 = 40%', '3/8 = 0.375 = 37.5%', '35% < 37.5% < 40%'], ans: ['g|35%, 3/8, 0.4'] }],
    rec: ["Fractions, decimals and percentages are 3 ways to write the same number.", ['Fraction → decimal: top ÷ bottom', 'Decimal → %: × 100', 'Percentage of an amount: × decimal', 'Fraction of an amount: ÷ bottom × top']]
  });

  fx('Compound percentage change', 'how to find the result of 2 or more percentage changes in a row.', {
    head: 'Compound percentage change',
    basics: [['One change after another', [
      ["Sometimes an amount changes by a percentage, and then changes again by a percentage. Each change is on the new amount. So we multiply the multipliers together.", ['Change 1: × m₁', 'Change 2: × m₂', 'Overall: × m₁ × m₂']],
      ["You cannot just add the percentages. A 10% rise followed by a 20% rise is not a 30% rise. The overall multiplier is 1.1 times 1.2, which is 1.32.", ['1.1 × 1.2 = 1.32', 'That is 32%, not 30%']]]]],
    ex: [
      ['Two rises', [
        ["A price of £200 rises by 10%, then by 10% again. The multiplier each time is 1.1. 200 times 1.1 is 220.", ['200 × 1.1 = 220']],
        ["220 times 1.1 is £242.", ['220 × 1.1 = 242', 'g|£242']]]],
      ['A rise then a fall', [
        ["A price of £500 goes up by 20%, then down by 20%. Up: 500 times 1.2 is 600.", ['500 × 1.2 = 600']],
        ["Down: 600 times 0.8 is £480. It is less than the start, because the fall is of the bigger amount.", ['600 × 0.8 = 480', 'g|£480 (4% less)']]]],
      ['The overall multiplier', [
        ["A five per cent rise then a ten per cent rise. The multipliers are one point zero five and one point one. Multiply: one point zero five times one point one is one point one five five. That is a fifteen point five per cent rise.", ['1.05 × 1.1 = 1.155', 'g|15.5% increase']]]],
      ['Population', [
        ["A town grows by three per cent a year for two years. The multiplier is one point zero three, twice. One point zero three squared is one point zero six zero nine. The town grew by six point zero nine per cent overall.", ['1.03² = 1.0609', 'g|6.09% overall']]]]],
    mist: [
      ['Adding the percentages', "Mistake one: adding the percentages. 10% then 10% is not 20%. It is 21%, because the second 10% is of a bigger amount.", ['r|10% + 10% = 20% ✗', 'g|1.1 × 1.1 = 1.21 → 21% ✓']],
      ['Rise then fall cancel', "Mistake two: thinking a 20% rise and a 20% fall cancel out. The result is 4% less than the start.", ['r|+20% − 20% = 0% ✗', 'g|1.2 × 0.8 = 0.96 → 4% less ✓']]],
    real: ['In real life', "Shops put a price up and then have a sale. Investments rise 1 year and fall the next. In every case, we multiply the multipliers. That is why a loss and a gain of the same percentage never quite cancel.", ['1.2 × 0.8 = 0.96']],
    turns: [
      { q: 'A price of £200 goes up by 10% and then up by 10% again. What is the final price?', say: "The multiplier is 1.1 each time. 200 times 1.1 is 220. 220 times 1.1 is £242.", work: ['200 × 1.1 = 220', '220 × 1.1 = 242'], ans: ['g|£242'] },
      { q: '£500 goes up by 20%, then down by 20%. What is the final amount?', say: "Up by 20%: 500 times 1.2 is 600. Down by 20%: 600 times 0.8 is £480.", work: ['500 × 1.2 = 600', '600 × 0.8 = 480'], ans: ['g|£480'] },
      { q: 'A price rises by 5% and then by 10%. What single multiplier gives the overall change, and what is the overall percentage increase?', say: "The multipliers are one point zero five and one point one. One point zero five times one point one is one point one five five. That is an overall increase of fifteen point five per cent.", work: ['1.05 × 1.1 = 1.155', '1.155 − 1 = 0.155', '= 15.5%'], ans: ['g|× 1.155, a 15.5% increase'] }],
    rec: ["Multiply the multipliers. Do not add the percentages.", ['Each change is on the new amount', 'Overall multiplier = m₁ × m₂', 'A rise then a fall of the same % is a loss']]
  });

  fx('Percentage change and reverse percentages', 'how to find the original amount when you know the amount after a percentage change.', {
    head: 'Reverse percentages',
    basics: [['Working backwards', [
      ["Sometimes we know the amount after a percentage change and want the original. To reverse a multiplier, divide by it. If a price went up by 20%, the multiplier was 1.2. So we divide the new price by 1.2.", ['Increase 20%: × 1.2', 'Reverse: ÷ 1.2']],
      ["The same idea works for a decrease. If a price was reduced by 15%, the multiplier was 0.85. To find the original price, divide the sale price by 0.85.", ['Decrease 15%: × 0.85', 'Reverse: ÷ 0.85']]]]],
    ex: [
      ['After a rise', [
        ["After a 20% increase, a price is £60. What was it before? The multiplier was 1.2. Divide 60 by 1.2 to get £50.", ['Multiplier 1.2', '60 ÷ 1.2', 'g|= £50']]]],
      ['After a sale', [
        ["In a sale, a jacket is 15% off. The sale price is £68. What was the original price? The multiplier is 0.85. Divide 68 by 0.85 to get £80.", ['Multiplier 0.85', '68 ÷ 0.85', 'g|= £80']]]],
      ['Check by going forwards', [
        ["Always check. Eighty pounds with fifteen per cent off is eighty times zero point eight five, which is sixty-eight. That matches the sale price.", ['80 × 0.85 = 68 ✓']]]],
      ['Including tax', [
        ["A price including 20% tax is £90. What is the price before tax? Divide 90 by 1.2 to get £75.", ['90 ÷ 1.2', 'g|= £75']]]]],
    mist: [
      ['Taking the percentage off the new amount', "Mistake one: finding 20% of 60 and taking it off. 20% of 60 is 12, and 60 minus 12 is 48. That is wrong, because the 20% was of the original, not of 60.", ['r|60 − 12 = £48 ✗', 'g|60 ÷ 1.2 = £50 ✓']],
      ['Multiplying instead of dividing', "Mistake two: multiplying by the multiplier when going back. After a decrease, the original must be bigger. 68 times 0.85 is smaller, which cannot be right.", ['r|68 × 0.85 = 57.80 ✗', 'g|68 ÷ 0.85 = 80 ✓']]],
    real: ['In real life', "Prices in shops often include tax. To find the price before tax, we reverse the percentage. A bill of £90 with 20% tax was £75 before the tax was added.", ['90 ÷ 1.2 = 75']],
    turns: [
      { q: 'After a 25% increase, a price is £75. What was the original price?', say: "The multiplier is 1.25. Divide 75 by 1.25. That gives £60.", work: ['Multiplier = 1.25', '75 ÷ 1.25 = 60'], ans: ['g|£60'] },
      { q: 'A coat in a sale is 30% off. The sale price is £42. What was the original price?', say: "100 minus 30 is 70%. The multiplier is 0.7. Divide 42 by 0.7 to get £60.", work: ['100% − 30% = 70%', 'Multiplier = 0.7', '42 ÷ 0.7 = 60'], ans: ['g|£60'] },
      { q: 'A bill including 20% tax is £90. What was the price before tax?', say: "The multiplier is 1.2. Divide 90 by 1.2 to get £75.", work: ['Multiplier = 1.2', '90 ÷ 1.2 = 75'], ans: ['g|£75'] }],
    rec: ["To go back to the original, divide by the multiplier.", ['Find the multiplier first', 'Original = new ÷ multiplier', 'Check by going forwards', 'Never take the percentage off the new amount']]
  });

  fx('Percentage change and wages', 'how to use percentages to work out pay rises and percentage changes in wages.', {
    head: 'Percentages and wages',
    basics: [['Pay rises', [
      ["A pay rise is a percentage increase. To find the new wage, multiply the old wage by 1 plus the rate as a decimal. To find the size of the rise, multiply the old wage by the rate.", ['New wage = old × (1 + rate)', 'Rise = old × rate']],
      ["To find the percentage rise from 2 wages, find the difference, divide by the old wage, and multiply by 100.", ['% rise = (new − old) ÷ old × 100']]]]],
    ex: [
      ['A new wage', [
        ["A monthly wage is £1,500. It rises by 4%. The multiplier is 1.04. 1,500 times 1.04 is £1,560.", ['1500 × 1.04', 'g|= £1,560']]]],
      ['The size of the rise', [
        ["A salary of £24,000 rises by 5%. The rise is 5% of 24,000. 10% is 2,400, so 5% is 1,200. The new salary is 25,000, £200.", ['5% of 24,000 = 1,200', 'g|24,000 + 1,200 = £25,200']]]],
      ['Percentage rise in hourly pay', [
        ["Hourly pay goes from twelve pounds to twelve pounds sixty. The rise is sixty pence. Sixty pence divided by twelve pounds is zero point zero five. That is a five per cent rise.", ['12.60 − 12 = 0.60', '0.60 ÷ 12 = 0.05', 'g|5%']]]],
      ['Before and after', [
        ["After a 3% rise, Sam earns £1,854. What did he earn before? Divide by 1.03 to get £1,800.", ['1854 ÷ 1.03', 'g|= £1,800']]]]],
    mist: [
      ['Adding the percentage as a number', "Mistake one: adding the percentage number to the wage. A 4% rise on fifteen hundred pounds is not fifteen hundred plus 4. 4% of fifteen hundred is £60.", ['r|1500 + 4 = 1504 ✗', 'g|1500 + 60 = 1560 ✓']],
      ['Dividing by the new wage', "Mistake two: finding the percentage rise using the new wage. 12 to £12.60 is 60p over £12, the old wage.", ['r|0.60 ÷ 12.60 = 4.8% ✗', 'g|0.60 ÷ 12 = 5% ✓']]],
    real: ['In real life', "Wages, tax and pensions are all done in percentages. When a company offers a pay rise, you can use these steps to check the new wage on your payslip.", ['Rise = old × rate', 'New = old × multiplier']],
    turns: [
      { q: 'A monthly wage of £1,800 rises by 3%. What is the new wage?', say: "The multiplier is 1.03. 1,800 times 1.03 is £1,854.", work: ['Multiplier = 1.03', '1800 × 1.03 = 1854'], ans: ['g|£1,854'] },
      { q: 'Hourly pay rises from £10 to £10.50. What is the percentage rise?', say: "The rise is 50p. Divide by the old pay, £10. 0.5 divided by 10 is 0.05. That is a 5% rise.", work: ['10.50 − 10 = 0.50', '0.50 ÷ 10 = 0.05', '0.05 × 100 = 5%'], ans: ['g|5%'] },
      { q: 'A salary of £24,000 rises by 5%. What is the new salary, and how much is the rise?', say: "10% of 24,000 is 2,400. 5% is half of that, 1,200. The new salary is 24,000 plus 1,200, £25,200.", work: ['10% of 24,000 = 2,400', '5% = 1,200', '24,000 + 1,200 = 25,200'], ans: ['g|£25,200, a rise of £1,200'] }],
    rec: ["A pay rise is a percentage increase on the old wage.", ['New wage = old × multiplier', 'Rise = old × rate', '% rise = rise ÷ old × 100', 'Reverse: divide by the multiplier']]
  });

  L.use(822, ['How do you calculate fractions and percentages?', 'Percentages of amounts without a calculator', 'Writing one amount as a percentage of another', 'Percentage increase and decrease with multipliers', 'Finding a percentage change', 'Percentage change and reverse percentages', 'Compound percentage change', 'Simple and compound interest', 'Percentage change and wages', 'Comparing results using percentages']);
})();
