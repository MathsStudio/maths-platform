/* lessons_new_s2f.js: S2 topic 822 Percentages, full rewrites and topic list */
(function () {
  'use strict';
  var BT = window.BT; if (!BT || !BT.L || !BT.L.fx) return;
  var L = BT.L, fx = L.fx;

  fx('How do you calculate fractions and percentages?', 'how to move between fractions, decimals and percentages, and find a fraction or percentage of an amount.', {
    head: 'Fractions, decimals and percentages',
    basics: [['Three ways to write the same number', [
      ["A fraction, a decimal and a percentage can all describe the same amount. To change a fraction to a decimal, divide the top by the bottom. To change a decimal to a percentage, multiply by one hundred. To go back, divide by one hundred.", ['3/8 → 3 ÷ 8 = 0.375', '0.375 × 100 = 37.5%', '% → ÷ 100 → decimal']],
      ["To find a fraction of an amount, divide by the bottom and multiply by the top. To find a percentage of an amount, change the percentage to a decimal and multiply.", ['2/5 of 60: 60 ÷ 5 × 2', '35% of 240: 0.35 × 240']]]]],
    ex: [
      ['Fraction to percentage', [
        ["Write three eighths as a decimal and a percentage. Divide three by eight to get zero point three seven five. Multiply by one hundred to get thirty-seven point five per cent.", ['3 ÷ 8 = 0.375', 'g|0.375 × 100 = 37.5%']]]],
      ['Percentage to fraction', [
        ["Write sixty per cent as a fraction in its simplest form. Sixty per cent is sixty over one hundred. Divide top and bottom by twenty to get three over five.", ['60% = 60/100', 'g|= 3/5']]]],
      ['A fraction of an amount', [
        ["Find two fifths of sixty. Divide sixty by five to get twelve. Multiply by two to get twenty-four.", ['60 ÷ 5 = 12', 'g|12 × 2 = 24']]]],
      ['A percentage of an amount', [
        ["Find thirty-five per cent of two hundred and forty. Thirty-five per cent is zero point three five as a decimal. Zero point three five times two hundred and forty is eighty-four.", ['35% = 0.35', 'g|0.35 × 240 = 84']]]]],
    mist: [
      ['Percent as the whole number', "Mistake one: using thirty-five instead of zero point three five. Thirty-five per cent of two hundred and forty is not thirty-five times two hundred and forty. Change the percentage to a decimal first.", ['r|35 × 240 = 8400 ✗', 'g|0.35 × 240 = 84 ✓']],
      ['Dividing the wrong way', "Mistake two: dividing eight by three to change three eighths to a decimal. The top goes first: three divided by eight.", ['r|8 ÷ 3 = 2.67 ✗', 'g|3 ÷ 8 = 0.375 ✓']]],
    real: ['In real life', "A recipe uses three quarters of a bag of flour, which is seventy-five per cent. A phone battery on forty per cent has two fifths left. All of these mean the same amount in different clothes.", ['3/4 = 0.75 = 75%', '40% = 2/5']],
    turns: [
      { q: 'Write seven twentieths as a percentage.', say: "Seven twentieths is the same as thirty-five hundredths, because we multiply top and bottom by five. Thirty-five hundredths is thirty-five per cent.", work: ['7/20 = 35/100', '= 35%'], ans: ['g|35%'] },
      { q: 'Find thirty-five per cent of two hundred and forty pounds.', say: "Thirty-five per cent is zero point three five. Zero point three five times two hundred and forty is eighty-four pounds.", work: ['35% = 0.35', '0.35 × 240 = 84'], ans: ['g|£84'] },
      { q: 'Put these in order, smallest first: zero point four, thirty-five per cent, three eighths.', say: "Change them all to percentages. Zero point four is forty per cent. Thirty-five per cent stays the same. Three eighths is thirty-seven point five per cent. In order: thirty-five, thirty-seven point five, forty.", work: ['0.4 = 40%', '3/8 = 0.375 = 37.5%', '35% < 37.5% < 40%'], ans: ['g|35%, 3/8, 0.4'] }],
    rec: ["Fractions, decimals and percentages are three ways to write the same number.", ['Fraction → decimal: top ÷ bottom', 'Decimal → %: × 100', 'Percentage of an amount: × decimal', 'Fraction of an amount: ÷ bottom × top']]
  });

  fx('Compound percentage change', 'how to find the result of two or more percentage changes in a row.', {
    head: 'Compound percentage change',
    basics: [['One change after another', [
      ["Sometimes an amount changes by a percentage, and then changes again by a percentage. Each change is on the new amount. So we multiply the multipliers together.", ['Change 1: × m₁', 'Change 2: × m₂', 'Overall: × m₁ × m₂']],
      ["You cannot just add the percentages. A ten per cent rise followed by a twenty per cent rise is not a thirty per cent rise. The overall multiplier is one point one times one point two, which is one point three two.", ['1.1 × 1.2 = 1.32', 'That is 32%, not 30%']]]]],
    ex: [
      ['Two rises', [
        ["A price of two hundred pounds rises by ten per cent, then by ten per cent again. The multiplier each time is one point one. Two hundred times one point one is two hundred and twenty.", ['200 × 1.1 = 220']],
        ["Two hundred and twenty times one point one is two hundred and forty-two pounds.", ['220 × 1.1 = 242', 'g|£242']]]],
      ['A rise then a fall', [
        ["A price of five hundred pounds goes up by twenty per cent, then down by twenty per cent. Up: five hundred times one point two is six hundred.", ['500 × 1.2 = 600']],
        ["Down: six hundred times zero point eight is four hundred and eighty pounds. It is less than the start, because the fall is of the bigger amount.", ['600 × 0.8 = 480', 'g|£480 (4% less)']]]],
      ['The overall multiplier', [
        ["A five per cent rise then a ten per cent rise. The multipliers are one point zero five and one point one. Multiply: one point zero five times one point one is one point one five five. That is a fifteen point five per cent rise.", ['1.05 × 1.1 = 1.155', 'g|15.5% increase']]]],
      ['Population', [
        ["A town grows by three per cent a year for two years. The multiplier is one point zero three, twice. One point zero three squared is one point zero six zero nine. The town grew by six point zero nine per cent overall.", ['1.03² = 1.0609', 'g|6.09% overall']]]]],
    mist: [
      ['Adding the percentages', "Mistake one: adding the percentages. Ten per cent then ten per cent is not twenty per cent. It is twenty-one per cent, because the second ten per cent is of a bigger amount.", ['r|10% + 10% = 20% ✗', 'g|1.1 × 1.1 = 1.21 → 21% ✓']],
      ['Rise then fall cancel', "Mistake two: thinking a twenty per cent rise and a twenty per cent fall cancel out. The result is four per cent less than the start.", ['r|+20% − 20% = 0% ✗', 'g|1.2 × 0.8 = 0.96 → 4% less ✓']]],
    real: ['In real life', "Shops put a price up and then have a sale. Investments rise one year and fall the next. In every case, we multiply the multipliers. That is why a loss and a gain of the same percentage never quite cancel.", ['1.2 × 0.8 = 0.96']],
    turns: [
      { q: 'A price of two hundred pounds goes up by ten per cent and then up by ten per cent again. What is the final price?', say: "The multiplier is one point one each time. Two hundred times one point one is two hundred and twenty. Two hundred and twenty times one point one is two hundred and forty-two pounds.", work: ['200 × 1.1 = 220', '220 × 1.1 = 242'], ans: ['g|£242'] },
      { q: 'Five hundred pounds goes up by twenty per cent, then down by twenty per cent. What is the final amount?', say: "Up by twenty per cent: five hundred times one point two is six hundred. Down by twenty per cent: six hundred times zero point eight is four hundred and eighty pounds.", work: ['500 × 1.2 = 600', '600 × 0.8 = 480'], ans: ['g|£480'] },
      { q: 'A price rises by five per cent and then by ten per cent. What single multiplier gives the overall change, and what is the overall percentage increase?', say: "The multipliers are one point zero five and one point one. One point zero five times one point one is one point one five five. That is an overall increase of fifteen point five per cent.", work: ['1.05 × 1.1 = 1.155', '1.155 − 1 = 0.155', '= 15.5%'], ans: ['g|× 1.155, a 15.5% increase'] }],
    rec: ["Multiply the multipliers. Do not add the percentages.", ['Each change is on the new amount', 'Overall multiplier = m₁ × m₂', 'A rise then a fall of the same % is a loss']]
  });

  fx('Percentage change and reverse percentages', 'how to find the original amount when you know the amount after a percentage change.', {
    head: 'Reverse percentages',
    basics: [['Working backwards', [
      ["Sometimes we know the amount after a percentage change and want the original. To reverse a multiplier, divide by it. If a price went up by twenty per cent, the multiplier was one point two. So we divide the new price by one point two.", ['Increase 20%: × 1.2', 'Reverse: ÷ 1.2']],
      ["The same idea works for a decrease. If a price was reduced by fifteen per cent, the multiplier was zero point eight five. To find the original price, divide the sale price by zero point eight five.", ['Decrease 15%: × 0.85', 'Reverse: ÷ 0.85']]]]],
    ex: [
      ['After a rise', [
        ["After a twenty per cent increase, a price is sixty pounds. What was it before? The multiplier was one point two. Divide sixty by one point two to get fifty pounds.", ['Multiplier 1.2', '60 ÷ 1.2', 'g|= £50']]]],
      ['After a sale', [
        ["In a sale, a jacket is fifteen per cent off. The sale price is sixty-eight pounds. What was the original price? The multiplier is zero point eight five. Divide sixty-eight by zero point eight five to get eighty pounds.", ['Multiplier 0.85', '68 ÷ 0.85', 'g|= £80']]]],
      ['Check by going forwards', [
        ["Always check. Eighty pounds with fifteen per cent off is eighty times zero point eight five, which is sixty-eight. That matches the sale price.", ['80 × 0.85 = 68 ✓']]]],
      ['Including tax', [
        ["A price including twenty per cent tax is ninety pounds. What is the price before tax? Divide ninety by one point two to get seventy-five pounds.", ['90 ÷ 1.2', 'g|= £75']]]]],
    mist: [
      ['Taking the percentage off the new amount', "Mistake one: finding twenty per cent of sixty and taking it off. Twenty per cent of sixty is twelve, and sixty minus twelve is forty-eight. That is wrong, because the twenty per cent was of the original, not of sixty.", ['r|60 − 12 = £48 ✗', 'g|60 ÷ 1.2 = £50 ✓']],
      ['Multiplying instead of dividing', "Mistake two: multiplying by the multiplier when going back. After a decrease, the original must be bigger. Sixty-eight times zero point eight five is smaller, which cannot be right.", ['r|68 × 0.85 = 57.80 ✗', 'g|68 ÷ 0.85 = 80 ✓']]],
    real: ['In real life', "Prices in shops often include tax. To find the price before tax, we reverse the percentage. A bill of ninety pounds with twenty per cent tax was seventy-five pounds before the tax was added.", ['90 ÷ 1.2 = 75']],
    turns: [
      { q: 'After a twenty-five per cent increase, a price is seventy-five pounds. What was the original price?', say: "The multiplier is one point two five. Divide seventy-five by one point two five. That gives sixty pounds.", work: ['Multiplier = 1.25', '75 ÷ 1.25 = 60'], ans: ['g|£60'] },
      { q: 'A coat in a sale is thirty per cent off. The sale price is forty-two pounds. What was the original price?', say: "One hundred minus thirty is seventy per cent. The multiplier is zero point seven. Divide forty-two by zero point seven to get sixty pounds.", work: ['100% − 30% = 70%', 'Multiplier = 0.7', '42 ÷ 0.7 = 60'], ans: ['g|£60'] },
      { q: 'A bill including twenty per cent tax is ninety pounds. What was the price before tax?', say: "The multiplier is one point two. Divide ninety by one point two to get seventy-five pounds.", work: ['Multiplier = 1.2', '90 ÷ 1.2 = 75'], ans: ['g|£75'] }],
    rec: ["To go back to the original, divide by the multiplier.", ['Find the multiplier first', 'Original = new ÷ multiplier', 'Check by going forwards', 'Never take the percentage off the new amount']]
  });

  fx('Percentage change and wages', 'how to use percentages to work out pay rises and percentage changes in wages.', {
    head: 'Percentages and wages',
    basics: [['Pay rises', [
      ["A pay rise is a percentage increase. To find the new wage, multiply the old wage by one plus the rate as a decimal. To find the size of the rise, multiply the old wage by the rate.", ['New wage = old × (1 + rate)', 'Rise = old × rate']],
      ["To find the percentage rise from two wages, find the difference, divide by the old wage, and multiply by one hundred.", ['% rise = (new − old) ÷ old × 100']]]]],
    ex: [
      ['A new wage', [
        ["A monthly wage is one thousand five hundred pounds. It rises by four per cent. The multiplier is one point zero four. One thousand five hundred times one point zero four is one thousand five hundred and sixty pounds.", ['1500 × 1.04', 'g|= £1,560']]]],
      ['The size of the rise', [
        ["A salary of twenty-four thousand pounds rises by five per cent. The rise is five per cent of twenty-four thousand. Ten per cent is two thousand four hundred, so five per cent is one thousand two hundred. The new salary is twenty-five thousand, two hundred pounds.", ['5% of 24,000 = 1,200', 'g|24,000 + 1,200 = £25,200']]]],
      ['Percentage rise in hourly pay', [
        ["Hourly pay goes from twelve pounds to twelve pounds sixty. The rise is sixty pence. Sixty pence divided by twelve pounds is zero point zero five. That is a five per cent rise.", ['12.60 − 12 = 0.60', '0.60 ÷ 12 = 0.05', 'g|5%']]]],
      ['Before and after', [
        ["After a three per cent rise, Sam earns one thousand eight hundred and fifty-four pounds. What did he earn before? Divide by one point zero three to get one thousand eight hundred pounds.", ['1854 ÷ 1.03', 'g|= £1,800']]]]],
    mist: [
      ['Adding the percentage as a number', "Mistake one: adding the percentage number to the wage. A four per cent rise on fifteen hundred pounds is not fifteen hundred plus four. Four per cent of fifteen hundred is sixty pounds.", ['r|1500 + 4 = 1504 ✗', 'g|1500 + 60 = 1560 ✓']],
      ['Dividing by the new wage', "Mistake two: finding the percentage rise using the new wage. Twelve to twelve pounds sixty is sixty pence over twelve pounds, the old wage.", ['r|0.60 ÷ 12.60 = 4.8% ✗', 'g|0.60 ÷ 12 = 5% ✓']]],
    real: ['In real life', "Wages, tax and pensions are all done in percentages. When a company offers a pay rise, you can use these steps to check the new wage on your payslip.", ['Rise = old × rate', 'New = old × multiplier']],
    turns: [
      { q: 'A monthly wage of one thousand eight hundred pounds rises by three per cent. What is the new wage?', say: "The multiplier is one point zero three. One thousand eight hundred times one point zero three is one thousand eight hundred and fifty-four pounds.", work: ['Multiplier = 1.03', '1800 × 1.03 = 1854'], ans: ['g|£1,854'] },
      { q: 'Hourly pay rises from ten pounds to ten pounds fifty. What is the percentage rise?', say: "The rise is fifty pence. Divide by the old pay, ten pounds. Zero point five divided by ten is zero point zero five. That is a five per cent rise.", work: ['10.50 − 10 = 0.50', '0.50 ÷ 10 = 0.05', '0.05 × 100 = 5%'], ans: ['g|5%'] },
      { q: 'A salary of twenty-four thousand pounds rises by five per cent. What is the new salary, and how much is the rise?', say: "Ten per cent of twenty-four thousand is two thousand four hundred. Five per cent is half of that, one thousand two hundred. The new salary is twenty-four thousand plus one thousand two hundred, twenty-five thousand two hundred pounds.", work: ['10% of 24,000 = 2,400', '5% = 1,200', '24,000 + 1,200 = 25,200'], ans: ['g|£25,200, a rise of £1,200'] }],
    rec: ["A pay rise is a percentage increase on the old wage.", ['New wage = old × multiplier', 'Rise = old × rate', '% rise = rise ÷ old × 100', 'Reverse: divide by the multiplier']]
  });

  L.use(822, ['How do you calculate fractions and percentages?', 'Percentages of amounts without a calculator', 'Writing one amount as a percentage of another', 'Percentage increase and decrease with multipliers', 'Finding a percentage change', 'Percentage change and reverse percentages', 'Compound percentage change', 'Simple and compound interest', 'Percentage change and wages', 'Comparing results using percentages']);
})();
