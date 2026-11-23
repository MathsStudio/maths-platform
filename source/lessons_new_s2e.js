/* lessons_new_s2e.js: S2 topic 822 Percentages */
(function () {
  'use strict';
  var BT = window.BT; if (!BT || !BT.L || !BT.L.fx) return;
  var L = BT.L, fx = L.fx;

  fx('Percentages of amounts without a calculator', 'how to find a percentage of an amount in your head by building it from 10 per cent and 1 per cent.', {
    head: 'Percentages without a calculator',
    basics: [['Start from ten per cent', [
      ["Per cent means out of one hundred. Ten per cent is one tenth, so divide by ten. One per cent is one hundredth, so divide by one hundred. Fifty per cent is a half, and twenty-five per cent is a quarter.", ['10% = ÷ 10', '1% = ÷ 100', '50% = ÷ 2', '25% = ÷ 4']],
      ["Build any other percentage from these. Five per cent is half of ten per cent. Two and a half per cent is half of five per cent. Then add the pieces together.", ['5% = half of 10%', '2.5% = half of 5%', 'Add the pieces']]]]],
    ex: [
      ['Thirty-five per cent of two hundred and forty pounds', [
        ["Find thirty-five per cent of two hundred and forty pounds. Ten per cent is two hundred and forty divided by ten, which is twenty-four pounds.", ['10% of £240 = 240 ÷ 10', '= £24']],
        ["Thirty-five is three tens and a five. Three tens is three times twenty-four, which is seventy-two. Five per cent is half of twenty-four, which is twelve. Seventy-two plus twelve is eighty-four pounds.", ['30% = 3 × 24 = 72', '5% = 24 ÷ 2 = 12', 'g|35% = 72 + 12 = £84']]]],
      ['Seventeen and a half per cent of eighty pounds', [
        ["Find seventeen and a half per cent of eighty pounds. Ten per cent is eight pounds. Five per cent is four pounds. Two and a half per cent is two pounds.", ['10% of £80 = £8', '5% = £4', '2.5% = £2']],
        ["Seventeen and a half is ten plus five plus two and a half. Add the amounts: eight plus four plus two is fourteen pounds.", ['17.5% = 10% + 5% + 2.5%', 'g|8 + 4 + 2 = £14']]]],
      ['Using one per cent', [
        ["Find seven per cent of six hundred. One per cent is six hundred divided by one hundred, which is six. Seven per cent is seven times six.", ['1% of 600 = 6', '7% = 7 × 6', 'g|= 42']]]],
      ['Twelve and a half per cent', [
        ["Find twelve and a half per cent of forty pounds. Twelve and a half per cent is one eighth. Forty divided by eight is five pounds. Check: ten per cent is four, two and a half per cent is one, and four plus one is five.", ['12.5% = 1/8', '40 ÷ 8 = 5', 'g|£5']]]]],
    mist: [
      ['Dividing by the percentage number', "Mistake one: dividing by the percentage number. Fifteen per cent of sixty is not sixty divided by fifteen. Build it instead. Ten per cent is six, five per cent is three, and six plus three is nine.", ['r|15% of 60 = 60 ÷ 15 = 4 ✗', 'g|10% + 5% = 6 + 3 = 9 ✓']],
      ['Forgetting the tens', "Mistake two: finding ten per cent and five per cent, but adding only one ten. For thirty-five per cent of two hundred and forty, we need three tens, not one.", ['r|24 + 12 = 36 ✗', 'g|3 × 24 + 12 = 84 ✓']]],
    real: ['In real life', "A jacket costs eighty pounds and is thirty per cent off. Ten per cent is eight pounds, so thirty per cent is twenty-four pounds. You pay eighty minus twenty-four, which is fifty-six pounds. You can do this in your head in the shop.", ['10% = £8, 30% = £24', '80 − 24 = £56']],
    turns: [
      { q: 'Find fifteen per cent of sixty pounds without a calculator.', say: "Ten per cent of sixty is six pounds. Five per cent is half of that, three pounds. Fifteen per cent is six plus three, which is nine pounds.", work: ['10% of £60 = 60 ÷ 10 = £6', '5% = 6 ÷ 2 = £3', '15% = 6 + 3 = £9'], ans: ['g|£9'] },
      { q: 'Find thirty-five per cent of eighty pounds without a calculator.', say: "Ten per cent of eighty is eight pounds. Thirty per cent is three times eight, which is twenty-four. Five per cent is half of eight, which is four. Twenty-four plus four is twenty-eight pounds.", work: ['10% of £80 = £8', '30% = 3 × 8 = £24', '5% = 8 ÷ 2 = £4', '35% = 24 + 4 = £28'], ans: ['g|£28'] },
      { q: 'A meal costs forty pounds. You leave a tip of twelve and a half per cent. How much is the tip?', say: "Ten per cent of forty is four pounds. Five per cent is two pounds, and two and a half per cent is one pound. Twelve and a half per cent is ten plus two and a half, which is four plus one, five pounds.", work: ['10% of £40 = £4', '5% = £2 and 2.5% = £1', '12.5% = 10% + 2.5% = 4 + 1', 'Check: 40 ÷ 8 = 5'], ans: ['g|£5'] }],
    rec: ["Build a percentage from ten per cent, five per cent and one per cent.", ['10% = ÷ 10, 1% = ÷ 100', '5% = half of 10%', '2.5% = half of 5%', 'Add the pieces together']]
  });

  fx('Writing one amount as a percentage of another', 'how to write one amount as a percentage of another, including amounts in different units.', {
    head: 'One amount as a percentage',
    basics: [['Part over whole', [
      ["To write one amount as a percentage of another, write it as a fraction: the part on the top and the whole on the bottom. Then change the fraction to a percentage by multiplying by one hundred.", ['part ÷ whole × 100', 'Part on top, whole on the bottom']],
      ["Both amounts must be in the same units. If they are not, change them first. Remember the whole is the amount after the word of.", ['Same units first', 'The whole follows "of"']]]]],
    ex: [
      ['Eighteen out of twenty-four', [
        ["Aisha scores eighteen out of twenty-four. What percentage is that? Write the fraction: eighteen over twenty-four. Simplify by dividing top and bottom by six. That gives three quarters.", ['18/24', '18/24 = 3/4']],
        ["Three quarters is zero point seven five. Multiply by one hundred to get seventy-five per cent. Check: three quarters of twenty-four is eighteen.", ['3 ÷ 4 = 0.75', '0.75 × 100', 'g|75%']]]],
      ['Seven out of eight', [
        ["Seven out of eight. Divide seven by eight to get zero point eight seven five. Multiply by one hundred. That is eighty-seven point five per cent.", ['7 ÷ 8 = 0.875', 'g|0.875 × 100 = 87.5%']]]],
      ['A discount', [
        ["A jacket is forty pounds. It is reduced by six pounds. What percentage is the reduction? The part is six, the whole is forty. Six divided by forty is zero point one five. That is fifteen per cent.", ['6 ÷ 40 = 0.15', 'g|0.15 × 100 = 15%']]]],
      ['Different units', [
        ["What percentage of two metres is forty centimetres? The units are different, so change two metres to two hundred centimetres. Then forty over two hundred is zero point two. That is twenty per cent.", ['2 m = 200 cm', '40 ÷ 200 = 0.2', 'g|0.2 × 100 = 20%']]]]],
    mist: [
      ['Dividing the wrong way round', "Mistake one: dividing the whole by the part. Eighteen out of twenty-four is eighteen divided by twenty-four, not twenty-four divided by eighteen. That would give a percentage over one hundred, which cannot be right for a score.", ['r|24 ÷ 18 = 1.33 → 133% ✗', 'g|18 ÷ 24 = 0.75 → 75% ✓']],
      ['Mixing the units', "Mistake two: using different units. Forty centimetres out of two metres is not forty divided by two. Change both to centimetres first.", ['r|40 ÷ 2 × 100 = 2000% ✗', 'g|40 ÷ 200 × 100 = 20% ✓']]],
    real: ['In real life', "Test scores, discounts and surveys are all shown as percentages. If twelve out of thirty pupils walk to school, twelve divided by thirty is zero point four, which is forty per cent.", ['12 ÷ 30 = 0.4', '= 40% walk']],
    turns: [
      { q: 'Write nine out of twenty-five as a percentage.', say: "Write the fraction nine over twenty-five. Multiply top and bottom by four to get thirty-six over one hundred. So it is thirty-six per cent.", work: ['9/25', '9/25 = 36/100', '= 36%'], ans: ['g|36%'] },
      { q: 'A shop sells forty-eight of its sixty cakes. What percentage were sold?', say: "The part is forty-eight and the whole is sixty. Forty-eight divided by sixty is zero point eight. Multiplying by one hundred gives eighty per cent.", work: ['48 ÷ 60 = 0.8', '0.8 × 100 = 80%'], ans: ['g|80%'] },
      { q: 'What percentage of two metres is thirty centimetres?', say: "The units are different. Two metres is two hundred centimetres. Thirty over two hundred is zero point one five. That is fifteen per cent.", work: ['2 m = 200 cm', '30 ÷ 200 = 0.15', '0.15 × 100 = 15%'], ans: ['g|15%'] }],
    rec: ["Part divided by whole, times one hundred.", ['Write part over whole', 'Divide, then × 100', 'Same units first', 'Check by finding the percentage of the whole']]
  });

  fx('Percentage increase and decrease with multipliers', 'how to increase or decrease an amount by a percentage using a multiplier.', {
    head: 'Increase and decrease with a multiplier',
    basics: [['The multiplier', [
      ["To increase an amount by a percentage, we find the new percentage of the old amount. A fifteen per cent rise gives one hundred and fifteen per cent of the old price. As a decimal, that is one point one five. This is the multiplier.", ['Increase 15%: 100% + 15% = 115%', 'Multiplier 1.15']],
      ["To decrease, take the percentage away from one hundred per cent. A twenty per cent fall leaves eighty per cent, a multiplier of zero point eight. Then multiply the old amount by the multiplier.", ['Decrease 20%: 100% − 20% = 80%', 'Multiplier 0.8']]]]],
    ex: [
      ['A price rise', [
        ["A jacket costs sixty pounds. The price goes up by fifteen per cent. What is the new price? One hundred plus fifteen is one hundred and fifteen per cent. The multiplier is one point one five.", ['100% + 15% = 115%', 'Multiplier = 1.15']],
        ["Sixty times one point one five is sixty-nine pounds.", ['60 × 1.15', 'g|= £69']]]],
      ['A sale', [
        ["A bag costs fifty pounds. It is reduced by twenty per cent. What is the sale price? One hundred minus twenty is eighty per cent. The multiplier is zero point eight.", ['100% − 20% = 80%', 'Multiplier = 0.8']],
        ["Fifty times zero point eight is forty pounds.", ['50 × 0.8', 'g|= £40']]]],
      ['Finding the multiplier', [
        ["What multiplier is used to decrease an amount by thirty-five per cent? One hundred minus thirty-five is sixty-five. As a decimal, zero point six five.", ['100 − 35 = 65', 'g|Multiplier = 0.65']]]],
      ['A phone', [
        ["A phone costs two hundred and fifty pounds. The price rises by twelve per cent. The multiplier is one point one two. Two hundred and fifty times one point one two is two hundred and eighty pounds.", ['250 × 1.12', 'g|= £280']]]]],
    mist: [
      ['Using the percentage as the multiplier', "Mistake one: multiplying by the percentage itself. A fifteen per cent rise is not times zero point one five. That finds the rise only, nine pounds, not the new price.", ['r|60 × 0.15 = £9 ✗', 'g|60 × 1.15 = £69 ✓']],
      ['Using the wrong direction', "Mistake two: using one point two for a decrease. A twenty per cent decrease must make the amount smaller, so the multiplier must be less than one.", ['r|50 × 1.2 = £60 ✗', 'g|50 × 0.8 = £40 ✓']]],
    real: ['In real life', "Value added tax of twenty per cent is added to many prices. A chair costs thirty-five pounds before tax. The multiplier is one point two. Thirty-five times one point two is forty-two pounds.", ['35 × 1.2', '= £42']],
    turns: [
      { q: 'Increase eighty pounds by twenty-five per cent.', say: "One hundred plus twenty-five is one hundred and twenty-five per cent. The multiplier is one point two five. Eighty times one point two five is one hundred pounds.", work: ['100% + 25% = 125%', 'Multiplier = 1.25', '80 × 1.25 = 100'], ans: ['g|£100'] },
      { q: 'Decrease one hundred and fifty pounds by forty per cent.', say: "One hundred minus forty is sixty per cent. The multiplier is zero point six. One hundred and fifty times zero point six is ninety pounds.", work: ['100% − 40% = 60%', 'Multiplier = 0.6', '150 × 0.6 = 90'], ans: ['g|£90'] },
      { q: 'A monthly wage of one thousand two hundred pounds rises by three and a half per cent. What is the new wage?', say: "One hundred plus three point five is one hundred and three point five per cent. The multiplier is one point zero three five. One thousand two hundred times one point zero three five is one thousand two hundred and forty-two pounds.", work: ['100% + 3.5% = 103.5%', 'Multiplier = 1.035', '1200 × 1.035 = 1242'], ans: ['g|£1,242'] }],
    rec: ["Increase: multiplier above one. Decrease: multiplier below one.", ['Increase: 100% + the percentage', 'Decrease: 100% − the percentage', 'Change to a decimal for the multiplier', 'New amount = old amount × multiplier']]
  });

  fx('Finding a percentage change', 'how to find the percentage increase or decrease between two amounts.', {
    head: 'Percentage change',
    basics: [['The formula', [
      ["To find a percentage change, first find the change: the new amount minus the old amount. Then divide the change by the original amount. Then multiply by one hundred.", ['change = new − old', '% change = change ÷ original × 100']],
      ["Always divide by the original amount, the one you started with. If the answer is positive it is an increase. If the new amount is smaller it is a decrease.", ['Divide by the ORIGINAL', 'New bigger: increase. New smaller: decrease']]]]],
    ex: [
      ['A bike', [
        ["A bike costs two hundred pounds and is sold for two hundred and fifty. What is the percentage increase? The change is two hundred and fifty minus two hundred, which is fifty pounds.", ['250 − 200 = 50']],
        ["Divide by the original: fifty divided by two hundred is zero point two five. Multiply by one hundred. The increase is twenty-five per cent.", ['50 ÷ 200 = 0.25', 'g|0.25 × 100 = 25%']]]],
      ['A fall in price', [
        ["A coat is reduced from eighty pounds to sixty. The change is twenty pounds down. Twenty divided by eighty is zero point two five. The decrease is twenty-five per cent.", ['80 − 60 = 20', '20 ÷ 80 = 0.25', 'g|25% decrease']]]],
      ['Profit', [
        ["A trader buys a scarf for eight pounds and sells it for ten pounds. The profit is two pounds. Two divided by eight is zero point two five. The percentage profit is twenty-five per cent.", ['10 − 8 = 2', '2 ÷ 8 = 0.25', 'g|25% profit']]]],
      ['Up and down are not the same', [
        ["A price goes from eighty to one hundred. That is twenty over eighty, a twenty-five per cent rise. Now it goes back from one hundred to eighty. That is twenty over one hundred, a twenty per cent fall. The percentages are different because the original is different.", ['80 → 100: 20 ÷ 80 = 25% up', '100 → 80: 20 ÷ 100 = 20% down']]]]],
    mist: [
      ['Dividing by the new amount', "Mistake one: dividing by the new amount. For two hundred rising to two hundred and fifty, fifty divided by two hundred and fifty gives twenty per cent. That is wrong. Divide by the original, two hundred.", ['r|50 ÷ 250 = 20% ✗', 'g|50 ÷ 200 = 25% ✓']],
      ['Forgetting to say increase or decrease', "Mistake two: giving just the number. Eighty down to sixty is a decrease of twenty-five per cent. Say whether it is an increase or a decrease.", ['r|Answer: 25% ✗ (up or down?)', 'g|25% decrease ✓']]],
    real: ['In real life', "News reports use percentage change all the time. If a town has two thousand four hundred people and grows to three thousand, the change is six hundred. Six hundred divided by two thousand four hundred is zero point two five. The population grew by twenty-five per cent.", ['600 ÷ 2400 = 0.25', '25% growth']],
    turns: [
      { q: 'A price rises from fifty pounds to sixty-five pounds. What is the percentage increase?', say: "The change is sixty-five minus fifty, which is fifteen. Fifteen divided by fifty is zero point three. Multiply by one hundred. The increase is thirty per cent.", work: ['65 − 50 = 15', '15 ÷ 50 = 0.3', '0.3 × 100 = 30%'], ans: ['g|30% increase'] },
      { q: 'A TV goes from ninety pounds down to seventy-two pounds in a sale. What is the percentage decrease?', say: "The change is ninety minus seventy-two, which is eighteen. Eighteen divided by ninety is zero point two. The decrease is twenty per cent.", work: ['90 − 72 = 18', '18 ÷ 90 = 0.2', '0.2 × 100 = 20%'], ans: ['g|20% decrease'] },
      { q: 'A village has two thousand four hundred people. Five years later it has three thousand. What is the percentage increase?', say: "The change is three thousand minus two thousand four hundred, which is six hundred. Six hundred divided by two thousand four hundred is zero point two five. The increase is twenty-five per cent.", work: ['3000 − 2400 = 600', '600 ÷ 2400 = 0.25', '0.25 × 100 = 25%'], ans: ['g|25% increase'] }],
    rec: ["Change divided by the original, times one hundred.", ['Change = new − old', 'Divide by the ORIGINAL', '× 100', 'Say increase or decrease']]
  });

  fx('Simple and compound interest', 'how simple interest and compound interest are worked out and how they differ.', {
    head: 'Simple and compound interest',
    basics: [['Two kinds of interest', [
      ["Interest is extra money a bank pays you for saving. With simple interest, you are paid the same amount every year, always based on the original amount. The amount each year is the original amount times the rate.", ['Simple: same amount each year', 'Interest = P × r × t']],
      ["With compound interest, the interest is added to the balance, so next year you earn interest on the bigger balance. Each year we multiply by the multiplier. After n years, multiply by the multiplier n times.", ['Compound: on the growing total', 'Amount = P × (1 + r)ⁿ']]]]],
    ex: [
      ['Simple interest', [
        ["Five hundred pounds is invested at four per cent simple interest for three years. Four per cent of five hundred is twenty pounds each year.", ['4% of £500 = £20 a year']],
        ["Over three years that is sixty pounds. The total is five hundred and sixty pounds.", ['3 × 20 = £60', 'g|500 + 60 = £560']]]],
      ['Compound interest', [
        ["Five hundred pounds is invested at four per cent compound interest for two years. The multiplier is one point zero four. After one year: five hundred times one point zero four is five hundred and twenty.", ['Multiplier = 1.04', 'Year 1: 500 × 1.04 = 520']],
        ["After year two: five hundred and twenty times one point zero four is five hundred and forty pounds and eighty pence. In one step, five hundred times one point zero four squared gives the same.", ['Year 2: 520 × 1.04 = 540.80', 'g|500 × 1.04² = £540.80']]]],
      ['Three years of compound interest', [
        ["Two thousand pounds is invested at three per cent compound interest for three years. The multiplier is one point zero three, to the power three. One point zero three cubed is about one point zero nine two seven. Times two thousand is about two thousand, one hundred and eighty-five pounds and forty-five pence.", ['2000 × 1.03³', 'g|≈ £2,185.45']]]],
      ['Which is better?', [
        ["One thousand pounds at five per cent for two years. Simple interest gives fifty pounds a year, so one hundred pounds and a total of one thousand one hundred. Compound interest gives one thousand times one point zero five squared, which is one thousand, one hundred and two pounds fifty. Compound is better by two pounds fifty.", ['Simple: 1000 + 100 = £1,100', 'Compound: 1000 × 1.05² = £1,102.50']]]]],
    mist: [
      ['Using simple interest for compound', "Mistake one: working out compound interest as simple. Five hundred at four per cent for two years is not five hundred plus two lots of twenty. With compound interest, year two earns interest on five hundred and twenty.", ['r|500 + 20 + 20 = £540 ✗', 'g|500 × 1.04² = £540.80 ✓']],
      ['Leaving out the one', "Mistake two: using zero point zero four as the multiplier. For growth, the multiplier is one plus the rate, one point zero four.", ['r|500 × 0.04² ✗', 'g|500 × 1.04² ✓']]],
    real: ['In real life', "Savings accounts use compound interest. Loans and credit cards do too, which is why debts can grow quickly. Simple interest is used for some short loans.", ['Savings: compound growth', 'Loans: compound too']],
    turns: [
      { q: 'Find the simple interest on eight hundred pounds at three per cent a year for four years.', say: "Three per cent of eight hundred is twenty-four pounds each year. Over four years, that is four times twenty-four, ninety-six pounds.", work: ['3% of £800 = 0.03 × 800 = £24 a year', '4 × 24 = £96'], ans: ['g|£96'] },
      { q: 'Three hundred pounds is invested at ten per cent compound interest for two years. How much is it worth?', say: "The multiplier is one point one. After year one: three hundred times one point one is three hundred and thirty. After year two: three hundred and thirty times one point one is three hundred and sixty-three pounds.", work: ['Multiplier = 1.1', 'Year 1: 300 × 1.1 = 330', 'Year 2: 330 × 1.1 = 363'], ans: ['g|£363'] },
      { q: 'One thousand pounds is invested at two per cent compound interest for three years. How much is it worth, to the nearest penny?', say: "The multiplier is one point zero two. One thousand times one point zero two cubed. One point zero two cubed is one point zero six one two zero eight. Times one thousand is one thousand and sixty-one pounds and twenty-one pence.", work: ['Multiplier = 1.02', '1000 × 1.02³', '1.02³ = 1.061208', '1000 × 1.061208 = 1061.208'], ans: ['g|£1,061.21'] }],
    rec: ["Simple interest is the same every year. Compound interest is on the growing total.", ['Simple: P × r × t', 'Compound: P × (1 + r)ⁿ', 'Compound grows faster', 'Round money to the nearest penny']]
  });

  fx('Comparing results using percentages', 'how to compare amounts out of different totals by changing them to percentages.', {
    head: 'Comparing with percentages',
    basics: [['Fair comparisons', [
      ["You cannot fairly compare scores out of different totals just by looking at the top numbers. Fifty-two is bigger than thirty-six, but it might be out of a bigger total. Change each result to a percentage.", ['Different totals: change to %', 'part ÷ whole × 100']],
      ["Then compare the percentages. The biggest percentage is the best result. Always compare like with like.", ['Compare % with %']]]]],
    ex: [
      ['Two tests', [
        ["In test one you score thirty-six out of forty-five. In test two you score fifty-two out of eighty. Which is the better result? Test one: thirty-six divided by forty-five is zero point eight, which is eighty per cent.", ['36 ÷ 45 = 0.8', '= 80%']],
        ["Test two: fifty-two divided by eighty is zero point six five, which is sixty-five per cent. Eighty is higher than sixty-five, so test one is better.", ['52 ÷ 80 = 0.65', '= 65%', 'g|Test 1 is better']]]],
      ['Close results', [
        ["Seven out of eight, or twenty-two out of twenty-five? Seven over eight is eighty-seven point five per cent. Twenty-two over twenty-five is eighty-eight per cent. The second is slightly better.", ['7/8 = 87.5%', '22/25 = 88%', 'g|22/25 is better']]]],
      ['Two discounts', [
        ["Shop A takes fifteen per cent off an eighty pound coat. Shop B takes eleven pounds off. Fifteen per cent of eighty is twelve pounds. So shop A saves more.", ['15% of £80 = £12', 'Shop B: £11', 'g|Shop A saves more']]]],
      ['Pass rates', [
        ["Class A: eighteen of twenty-four passed. Class B: fifteen of twenty passed. Eighteen over twenty-four is seventy-five per cent. Fifteen over twenty is also seventy-five per cent. The classes did equally well.", ['18/24 = 75%', '15/20 = 75%', 'g|Equal']]]]],
    mist: [
      ['Comparing the top numbers', "Mistake one: comparing the scores without the totals. Fifty-two is bigger than thirty-six, but fifty-two out of eighty is sixty-five per cent and thirty-six out of forty-five is eighty per cent.", ['r|52 > 36, so Test 2 is better ✗', 'g|65% < 80%, so Test 1 is better ✓']],
      ['Comparing a percentage with an amount', "Mistake two: comparing fifteen per cent with eleven pounds. They are different things. Find fifteen per cent of the price in pounds, or change eleven pounds to a percentage, before comparing.", ['r|15 > 11 ✗', 'g|£12 > £11 ✓']]],
    real: ['In real life', "Sports teams, exam boards and shops all compare using percentages. A player who scores nine goals from twelve shots has seventy-five per cent accuracy. Another scoring fifteen from twenty-four has about sixty-two point five per cent.", ['9/12 = 75%', '15/24 = 62.5%']],
    turns: [
      { q: 'Amy scores twenty-one out of thirty. Ben scores thirty-four out of fifty. Who did better?', say: "Amy: twenty-one divided by thirty is zero point seven, which is seventy per cent. Ben: thirty-four divided by fifty is zero point six eight, which is sixty-eight per cent. Seventy is bigger than sixty-eight, so Amy did better.", work: ['Amy: 21 ÷ 30 = 0.7 = 70%', 'Ben: 34 ÷ 50 = 0.68 = 68%', '70% > 68%'], ans: ['g|Amy did better'] },
      { q: 'Shop A takes fifteen per cent off an eighty pound coat. Shop B takes eleven pounds off the same coat. Which shop gives the bigger saving?', say: "Ten per cent of eighty is eight pounds. Five per cent is four pounds. So fifteen per cent is twelve pounds. Twelve is more than eleven, so shop A saves more.", work: ['10% of £80 = £8', '5% = £4', '15% = 8 + 4 = £12', '£12 > £11'], ans: ['g|Shop A'] },
      { q: 'Twelve out of sixteen pupils in class A passed. Fifteen out of twenty-four pupils in class B passed. Which class had the better pass rate?', say: "Class A: twelve divided by sixteen is zero point seven five, seventy-five per cent. Class B: fifteen divided by twenty-four is zero point six two five, sixty-two point five per cent. Seventy-five is bigger, so class A had the better pass rate.", work: ['A: 12 ÷ 16 = 0.75 = 75%', 'B: 15 ÷ 24 = 0.625 = 62.5%', '75% > 62.5%'], ans: ['g|Class A'] }],
    rec: ["Change to percentages before comparing.", ['Part ÷ whole × 100', 'Compare % with %', 'Bigger percentage is better', 'Percentage of a price can be changed to pounds']]
  });
})();
