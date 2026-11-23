/* lessons_new_s2g.js: S2 topic 823 Ratio and proportion */
(function () {
  'use strict';
  var BT = window.BT; if (!BT || !BT.L || !BT.L.fx) return;
  var L = BT.L, fx = L.fx;

  fx('What are ratios?', 'what a ratio is, how to simplify it, and how to write it as 1 to n or as a fraction.', {
    head: 'What are ratios?',
    basics: [['Comparing amounts', [
      ["A ratio compares amounts. If there are three red counters and two blue counters, the ratio of red to blue is three to two, written three colon two. The order matters. The first number goes with the first thing named.", ['Red : Blue = 3 : 2', 'Order matters']],
      ["We simplify a ratio by dividing both numbers by the same number, just like a fraction. Divide by the highest common factor to get the simplest form.", ['12 : 18', '÷ 6 → 2 : 3']]]]],
    ex: [
      ['Simplifying', [
        ["In a class there are twelve boys and eighteen girls. Write the ratio of boys to girls in its simplest form. The ratio is twelve to eighteen. The highest common factor of twelve and eighteen is six.", ['Boys : Girls = 12 : 18', 'HCF = 6']],
        ["Divide both numbers by six. Twelve divided by six is two, and eighteen divided by six is three. The simplest ratio is two to three.", ['12 ÷ 6 = 2', '18 ÷ 6 = 3', 'g|2 : 3']]]],
      ['One to n', [
        ["Write five to twenty in the form one to n. To make the first number one, divide both by five. Twenty divided by five is four.", ['5 : 20', '÷ 5 → 1 : 4', 'g|1 : 4']]]],
      ['A ratio that is not whole numbers', [
        ["Write four to ten in the form one to n. Divide both by four. Ten divided by four is two point five. The ratio is one to two point five.", ['4 : 10', '÷ 4 → 1 : 2.5', 'g|1 : 2.5']]]],
      ['Ratio as a fraction', [
        ["Boys to girls is two to three. How much of the class are girls? There are two plus three, five parts altogether. Girls are three of the five parts, which is three fifths.", ['2 + 3 = 5 parts', 'g|Girls = 3/5']]]]],
    mist: [
      ['Writing it the wrong way round', "Mistake one: swapping the order. Twelve boys and eighteen girls gives boys to girls as twelve to eighteen, which is two to three. Writing three to two gives girls to boys, a different ratio.", ['r|Boys : Girls = 3 : 2 ✗', 'g|Boys : Girls = 2 : 3 ✓']],
      ['Dividing only one number', "Mistake two: dividing only one side. To simplify twelve to eighteen, we must divide both numbers by the same amount. Dividing only one side changes the ratio.", ['r|12 : 18 → 2 : 18 ✗', 'g|12 : 18 → 2 : 3 ✓']]],
    real: ['In real life', "A recipe for pastry uses flour and butter in the ratio two to one. That means twice as much flour as butter. A paint mixture of blue and white in the ratio one to three has three times as much white as blue.", ['Flour : Butter = 2 : 1', 'Blue : White = 1 : 3']],
    turns: [
      { q: 'A bag has fifteen red sweets and twenty-five blue sweets. Write the ratio of red to blue in its simplest form.', say: "The ratio is fifteen to twenty-five. The highest common factor is five. Fifteen divided by five is three. Twenty-five divided by five is five. The simplest ratio is three to five.", work: ['Red : Blue = 15 : 25', 'HCF = 5', '15 ÷ 5 = 3 and 25 ÷ 5 = 5', '= 3 : 5'], ans: ['g|3 : 5'] },
      { q: 'Write the ratio four to ten in the form one to n.', say: "Divide both numbers by four, to make the first number one. Four divided by four is one. Ten divided by four is two point five. So the ratio is one to two point five.", work: ['4 : 10', '4 ÷ 4 = 1', '10 ÷ 4 = 2.5', '= 1 : 2.5'], ans: ['g|1 : 2.5'] },
      { q: 'The ratio of boys to girls in a club is three to four. What fraction of the club are girls?', say: "There are three plus four, seven parts altogether. Girls are four of the seven parts. So girls are four sevenths of the club.", work: ['3 + 4 = 7 parts', 'Girls = 4 parts', '= 4/7'], ans: ['g|4/7'] }],
    rec: ["A ratio compares amounts, and the order matters.", ['Write in the order given', 'Simplify: divide both by the HCF', '1 : n: divide both by the first number', 'Fraction: part ÷ total parts']]
  });

  fx('Sharing in a ratio with three parts', 'how to share an amount in a ratio with three parts.', {
    head: 'Sharing in a ratio with three parts',
    basics: [['Find the value of one part', [
      ["To share an amount in a ratio, first add the numbers in the ratio to find the total number of parts. Then divide the amount by the number of parts to find the value of one part. Finally multiply each ratio number by the value of one part.", ['1. Add the ratio numbers', '2. Amount ÷ parts = one part', '3. Multiply each number by one part']],
      ["Always check that the shares add up to the amount you started with.", ['Check: shares add to the total']]]]],
    ex: [
      ['Sharing money', [
        ["Share one hundred and fifty pounds between A, B and C in the ratio two to three to five. Add the numbers: two plus three plus five is ten parts. One hundred and fifty divided by ten is fifteen pounds for each part.", ['2 + 3 + 5 = 10 parts', '150 ÷ 10 = £15 per part']],
        ["A gets two parts, thirty pounds. B gets three parts, forty-five pounds. C gets five parts, seventy-five pounds. Check: thirty plus forty-five plus seventy-five is one hundred and fifty.", ['A: 2 × 15 = £30', 'B: 3 × 15 = £45', 'C: 5 × 15 = £75', 'g|30 + 45 + 75 = 150 ✓']]]],
      ['Another share', [
        ["Share eighty-four pounds in the ratio one to two to four. One plus two plus four is seven parts. Eighty-four divided by seven is twelve pounds a part. The shares are twelve, twenty-four and forty-eight pounds.", ['1 + 2 + 4 = 7 parts', '84 ÷ 7 = £12', 'g|£12, £24, £48']]]],
      ['Angles in a triangle', [
        ["The angles in a triangle are in the ratio two to three to four. Find the angles. The angles add up to one hundred and eighty degrees. Two plus three plus four is nine parts. One hundred and eighty divided by nine is twenty degrees a part.", ['2 + 3 + 4 = 9 parts', '180 ÷ 9 = 20° per part']],
        ["The angles are forty, sixty and eighty degrees. They add up to one hundred and eighty.", ['2 × 20 = 40°', '3 × 20 = 60°', '4 × 20 = 80°', 'g|40 + 60 + 80 = 180 ✓']]]]],
    mist: [
      ['Dividing by the number of people', "Mistake one: dividing by three because there are three people. A, B and C do not get equal shares. Divide by the number of parts, ten.", ['r|150 ÷ 3 = £50 each ✗', 'g|150 ÷ 10 = £15 a part ✓']],
      ['Using the biggest number', "Mistake two: dividing by the biggest ratio number, five, instead of the total of the ratio numbers. The total number of parts is two plus three plus five.", ['r|150 ÷ 5 = 30 ✗', 'g|150 ÷ (2 + 3 + 5) = 15 ✓']]],
    real: ['In real life', "Lottery wins, business profits and inheritances are often shared in a ratio. If three friends put in different amounts, they can share the prize in the same ratio.", ['Share £150: 2 : 3 : 5', '£30, £45, £75']],
    turns: [
      { q: 'Share one hundred and twenty pounds in the ratio one to two to three.', say: "One plus two plus three is six parts. One hundred and twenty divided by six is twenty pounds a part. The shares are twenty, forty and sixty pounds.", work: ['1 + 2 + 3 = 6 parts', '120 ÷ 6 = £20 per part', '20, 40 and 60', 'Check: 20 + 40 + 60 = 120'], ans: ['g|£20, £40, £60'] },
      { q: 'Share two hundred and forty pounds in the ratio three to four to five.', say: "Three plus four plus five is twelve parts. Two hundred and forty divided by twelve is twenty pounds a part. The shares are three times twenty, four times twenty and five times twenty, so sixty, eighty and one hundred pounds.", work: ['3 + 4 + 5 = 12 parts', '240 ÷ 12 = £20 per part', '3 × 20 = 60, 4 × 20 = 80, 5 × 20 = 100', 'Check: 60 + 80 + 100 = 240'], ans: ['g|£60, £80, £100'] },
      { q: 'The angles of a triangle are in the ratio two to three to four. Find the three angles.', say: "The angles of a triangle add up to one hundred and eighty degrees. Two plus three plus four is nine parts. One hundred and eighty divided by nine is twenty degrees a part. The angles are forty, sixty and eighty degrees.", work: ['2 + 3 + 4 = 9 parts', '180 ÷ 9 = 20° per part', '40°, 60°, 80°', 'Check: 40 + 60 + 80 = 180'], ans: ['g|40°, 60°, 80°'] }],
    rec: ["Add the parts, find one part, then multiply.", ['Add the ratio numbers', 'Amount ÷ number of parts', 'Multiply each ratio number', 'Check the total']]
  });

  fx('Using one known part', 'how to find the other amounts and the total when only one share is known.', {
    head: 'Using one known part',
    basics: [['Start from what you know', [
      ["Sometimes you are told the value of one share, not the total. Match the known amount to its ratio number. Divide to find the value of one part. Then you can find every other share and the total.", ['Known share ÷ its ratio number = one part', 'Then multiply for the others']],
      ["Another way: you may be told the difference between two shares. The difference is the difference of the ratio numbers, in parts.", ['Difference in parts = difference of the ratio numbers']]]]],
    ex: [
      ['Money shared', [
        ["Money is shared between A, B and C in the ratio two to three to five. B gets forty-five pounds. How much is shared altogether, and how much does C get? B has three parts, so three parts are forty-five pounds. One part is fifteen pounds.", ['3 parts = £45', '1 part = 45 ÷ 3 = £15']],
        ["There are ten parts altogether, so the total is one hundred and fifty pounds. C has five parts, which is seventy-five pounds.", ['10 × 15 = £150', 'C: 5 × 15 = £75']]]],
      ['Counters', [
        ["Red to blue counters are in the ratio three to five. There are twelve red counters. How many blue counters are there? Three parts are twelve, so one part is four. Blue is five parts, twenty counters.", ['3 parts = 12', '1 part = 4', 'g|Blue = 5 × 4 = 20']]]],
      ['The difference is known', [
        ["Two amounts are in the ratio three to five. The difference between them is eighteen pounds. Find both amounts. The difference is five minus three, two parts. Two parts are eighteen pounds, so one part is nine pounds.", ['5 − 3 = 2 parts', '2 parts = £18', '1 part = £9']],
        ["The amounts are three times nine, twenty-seven pounds, and five times nine, forty-five pounds. Check the difference: forty-five minus twenty-seven is eighteen.", ['3 × 9 = £27', '5 × 9 = £45', 'g|45 − 27 = 18 ✓']]]]],
    mist: [
      ['Treating the known amount as one part', "Mistake one: using the known amount as the value of one part. B has three parts, so forty-five pounds is three parts, not one part.", ['r|C = 5 × 45 = £225 ✗', 'g|C = 5 × 15 = £75 ✓']],
      ['Using the total of the ratio', "Mistake two: dividing forty-five by the total number of parts, ten. Forty-five belongs to B's three parts only.", ['r|45 ÷ 10 = 4.5 ✗', 'g|45 ÷ 3 = 15 ✓']]],
    real: ['In real life', "A shop sells red and blue pens in the ratio three to five. If it has twelve red pens on the shelf, we can work out how many blue pens it has. The same method works for a recipe if you only have a certain amount of one ingredient.", ['Red : Blue = 3 : 5', '12 red → 20 blue']],
    turns: [
      { q: 'Red and blue counters are in the ratio three to seven. There are twenty-one red counters. How many blue counters are there?', say: "Three parts are twenty-one counters, so one part is seven. Blue is seven parts. Seven times seven is forty-nine blue counters.", work: ['3 parts = 21', '1 part = 21 ÷ 3 = 7', 'Blue = 7 parts = 7 × 7 = 49'], ans: ['g|49 blue counters'] },
      { q: 'Money is shared between A, B and C in the ratio four to five to six. B gets thirty-five pounds. How much do A and C get, and what is the total?', say: "Five parts are thirty-five pounds, so one part is seven pounds. A has four parts, twenty-eight pounds. C has six parts, forty-two pounds. The total is fifteen parts, one hundred and five pounds.", work: ['5 parts = £35', '1 part = 35 ÷ 5 = £7', 'A = 4 × 7 = £28 and C = 6 × 7 = £42', 'Total = 15 × 7 = £105'], ans: ['g|A £28, C £42, total £105'] },
      { q: 'Two amounts are in the ratio five to two. The difference between them is twenty-seven pounds. Find both amounts.', say: "The difference is five minus two, three parts. Three parts are twenty-seven pounds, so one part is nine pounds. The amounts are five times nine, forty-five pounds, and two times nine, eighteen pounds.", work: ['5 − 2 = 3 parts', '3 parts = £27, so 1 part = £9', '5 × 9 = £45 and 2 × 9 = £18', 'Check: 45 − 18 = 27'], ans: ['g|£45 and £18'] }],
    rec: ["Match the known amount to its parts, then find one part.", ['Known amount ÷ its ratio number', 'Multiply for the other shares', 'Difference: difference of ratio numbers', 'Check your answer']]
  });

  fx('Combining ratios', 'how to combine two ratios that share a common quantity into one ratio.', {
    head: 'Combining ratios',
    basics: [['Make the shared part match', [
      ["Sometimes two ratios share one quantity. A to B is two to three, and B to C is four to five. To combine them, make the B numbers the same. Find the lowest common multiple of the B numbers.", ['A : B = 2 : 3', 'B : C = 4 : 5', 'LCM of 3 and 4 = 12']],
      ["Scale each ratio so that B becomes the common multiple. Then write A, B and C together.", ['Scale both ratios', 'Then A : B : C']]]]],
    ex: [
      ['Two ratios', [
        ["A to B is two to three, and B to C is four to five. Write A to B to C. The B numbers are three and four, and the lowest common multiple is twelve. Multiply the first ratio by four: eight to twelve.", ['A : B = 2 : 3 → × 4 → 8 : 12']],
        ["Multiply the second ratio by three: twelve to fifteen. Now B is twelve in both. So A to B to C is eight to twelve to fifteen.", ['B : C = 4 : 5 → × 3 → 12 : 15', 'g|A : B : C = 8 : 12 : 15']]]],
      ['A different pair', [
        ["A to B is three to four, and B to C is two to five. The B numbers are four and two. The lowest common multiple is four. The first ratio stays the same. Multiply the second by two: four to ten. So A to B to C is three to four to ten.", ['B : C = 2 : 5 → × 2 → 4 : 10', 'g|A : B : C = 3 : 4 : 10']]]],
      ['Then share', [
        ["Share one hundred and forty pounds in the ratio eight to twelve to fifteen. Add: eight plus twelve plus fifteen is thirty-five parts. One hundred and forty divided by thirty-five is four pounds a part.", ['8 + 12 + 15 = 35', '140 ÷ 35 = £4']],
        ["The shares are thirty-two, forty-eight and sixty pounds. They add up to one hundred and forty.", ['8 × 4 = £32', '12 × 4 = £48', '15 × 4 = £60', 'g|32 + 48 + 60 = 140 ✓']]]]],
    mist: [
      ['Just joining the ratios', "Mistake one: writing the ratios side by side without matching B. Two to three and four to five do not give two to three to five. B is three in one ratio and four in the other.", ['r|2 : 3 : 5 ✗', 'g|8 : 12 : 15 ✓']],
      ['Multiplying only one number', "Mistake two: scaling only one part of a ratio. To change two to three into eight to twelve, we must multiply both numbers by four.", ['r|2 : 3 → 8 : 3 ✗', 'g|2 : 3 → 8 : 12 ✓']]],
    real: ['In real life', "Recipes and mixtures combine ratios. If the ratio of flour to sugar is two to one, and sugar to butter is three to two, we can find the ratio of all three ingredients.", ['Flour : Sugar = 2 : 1', 'Sugar : Butter = 3 : 2']],
    turns: [
      { q: 'A to B is one to two, and B to C is three to five. Write A to B to C.', say: "The B numbers are two and three. The lowest common multiple is six. Multiply the first ratio by three: three to six. Multiply the second ratio by two: six to ten. So A to B to C is three to six to ten.", work: ['LCM of 2 and 3 = 6', 'A : B = 1 : 2 → × 3 → 3 : 6', 'B : C = 3 : 5 → × 2 → 6 : 10', 'A : B : C = 3 : 6 : 10'], ans: ['g|3 : 6 : 10'] },
      { q: 'x to y is two to five, and y to z is ten to three. Write x to y to z.', say: "The y numbers are five and ten. The lowest common multiple is ten. Multiply the first ratio by two: four to ten. The second ratio stays the same: ten to three. So x to y to z is four to ten to three.", work: ['LCM of 5 and 10 = 10', 'x : y = 2 : 5 → × 2 → 4 : 10', 'y : z = 10 : 3', 'x : y : z = 4 : 10 : 3'], ans: ['g|4 : 10 : 3'] },
      { q: 'A to B is three to four, and B to C is six to seven. One hundred and seventy-five pounds is shared between A, B and C in the ratio A to B to C. How much does each get?', say: "The B numbers are four and six. The lowest common multiple is twelve. Multiply the first ratio by three: nine to twelve. Multiply the second by two: twelve to fourteen. So A to B to C is nine to twelve to fourteen. That is thirty-five parts. One hundred and seventy-five divided by thirty-five is five pounds a part. The shares are forty-five, sixty and seventy pounds.", work: ['A : B = 3 : 4 → × 3 → 9 : 12', 'B : C = 6 : 7 → × 2 → 12 : 14', 'A : B : C = 9 : 12 : 14, 35 parts', '175 ÷ 35 = £5 per part', '9 × 5 = 45, 12 × 5 = 60, 14 × 5 = 70'], ans: ['g|£45, £60, £70'] }],
    rec: ["Make the shared quantity the same, then join the ratios.", ['LCM of the shared numbers', 'Scale both numbers in each ratio', 'Write A : B : C', 'Then share as normal']]
  });

  fx('Direct proportion problems', 'how to solve problems where two quantities increase together at the same rate.', {
    head: 'Direct proportion',
    basics: [['Double one, double the other', [
      ["Two quantities are in direct proportion when they increase together at the same rate. If you buy twice as many pens, you pay twice as much. A good method is to find the value of one unit first. This is called the unitary method.", ['Direct: double one, double the other', 'Find the value of ONE first']],
      ["Divide to find one unit. Then multiply to find any number of units.", ['÷ to get one', '× to get the number you need']]]]],
    ex: [
      ['Pens', [
        ["Five pens cost three pounds fifty. How much do eight pens cost? First find the cost of one pen. Three pounds fifty divided by five is seventy pence.", ['5 pens = £3.50', '1 pen = 3.50 ÷ 5 = £0.70']],
        ["Eight pens cost eight times seventy pence, which is five pounds sixty.", ['8 × 0.70', 'g|= £5.60']]]],
      ['A recipe', [
        ["Four people need three hundred grams of rice. How much rice for ten people? One person needs three hundred divided by four, seventy-five grams. Ten people need ten times seventy-five, seven hundred and fifty grams.", ['1 person: 300 ÷ 4 = 75 g', 'g|10 people: 10 × 75 = 750 g']]]],
      ['A scale factor', [
        ["Six buns need two hundred and fifty grams of flour. How much flour for eighteen buns? Eighteen is three times six, so multiply the flour by three. Two hundred and fifty times three is seven hundred and fifty grams.", ['18 ÷ 6 = 3', 'g|250 × 3 = 750 g']]]],
      ['Money', [
        ["One pound buys one point one five euros. How many euros for two hundred pounds? Multiply two hundred by one point one five, which is two hundred and thirty euros.", ['200 × 1.15', 'g|= €230']]]]],
    mist: [
      ['Adding instead of multiplying', "Mistake one: adding. Five pens cost three pounds fifty. Eight pens are three more, so adding three to the price is wrong. We need the price of one pen and multiply.", ['r|3.50 + 3 = £6.50 ✗', 'g|8 × 0.70 = £5.60 ✓']],
      ['Dividing instead of multiplying', "Mistake two: dividing when we should multiply. More pens cost more, so the answer must be bigger than three pounds fifty.", ['r|3.50 ÷ 8 ✗', 'g|8 × 0.70 = 5.60 ✓']]],
    real: ['In real life', "Shopping, cooking and converting currency all use direct proportion. If petrol costs a fixed price per litre, double the litres means double the cost.", ['Cost ∝ litres', 'Double litres → double cost']],
    turns: [
      { q: 'Six apples cost two pounds forty. How much do nine apples cost?', say: "One apple costs two pounds forty divided by six, which is forty pence. Nine apples cost nine times forty pence, three pounds sixty.", work: ['1 apple = 2.40 ÷ 6 = £0.40', '9 apples = 9 × 0.40', '= £3.60'], ans: ['g|£3.60'] },
      { q: 'Three eggs make twelve muffins. How many eggs are needed for twenty muffins?', say: "One muffin needs three divided by twelve, which is a quarter of an egg. Twenty muffins need twenty times a quarter, five eggs.", work: ['1 muffin = 3 ÷ 12 = 0.25 egg', '20 muffins = 20 × 0.25', '= 5 eggs'], ans: ['g|5 eggs'] },
      { q: 'A car uses six litres of petrol to drive one hundred kilometres. How much petrol does it need for three hundred and fifty kilometres?', say: "Three hundred and fifty divided by one hundred is three point five. So multiply six litres by three point five. That is twenty-one litres.", work: ['350 ÷ 100 = 3.5', '6 × 3.5', '= 21 litres'], ans: ['g|21 litres'] }],
    rec: ["In direct proportion, both quantities go up together.", ['Find the value of one unit', 'Multiply for the amount you need', 'Check: more means more']]
  });

  fx('Inverse proportion problems', 'how to solve problems where one quantity goes up as the other goes down.', {
    head: 'Inverse proportion',
    basics: [['One up, one down', [
      ["Two quantities are in inverse proportion when one goes up as the other goes down. More workers means fewer days to do the same job. The total amount of work stays the same. To solve these, find the total first, then divide.", ['Inverse: one up, one down', 'The product stays the same']],
      ["Multiply the two numbers you are given to find the total. Then divide by the new number.", ['Total = number × time', 'New time = total ÷ new number']]]]],
    ex: [
      ['Workers', [
        ["Four workers build a wall in six days. How long would eight workers take? The total work is four times six, twenty-four worker-days.", ['4 × 6 = 24 worker-days']],
        ["Eight workers share the twenty-four worker-days. Twenty-four divided by eight is three days. Double the workers, half the time.", ['24 ÷ 8', 'g|= 3 days']]]],
      ['Hours', [
        ["Six people paint a fence in ten hours. How long would five people take? The total is six times ten, sixty person-hours. Sixty divided by five is twelve hours.", ['6 × 10 = 60', 'g|60 ÷ 5 = 12 hours']]]],
      ['Speed and time', [
        ["A journey of one hundred and twenty kilometres at sixty kilometres an hour takes two hours. At eighty kilometres an hour it takes one hundred and twenty divided by eighty, one and a half hours.", ['120 ÷ 60 = 2 h', 'g|120 ÷ 80 = 1.5 h']]]],
      ['Sharing sweets', [
        ["Twelve sweets are shared equally. Among three people, each gets four. Among four people, each gets three. More people, fewer sweets each.", ['12 ÷ 3 = 4', 'g|12 ÷ 4 = 3']]]]],
    mist: [
      ['Using direct proportion', "Mistake one: doubling the days when the workers double. More workers must take less time. Eight workers taking twelve days is wrong.", ['r|8 workers: 12 days ✗', 'g|8 workers: 3 days ✓']],
      ['Forgetting the total', "Mistake two: dividing six days by four workers. First multiply to get the total work, twenty-four, then divide by the new number of workers.", ['r|6 ÷ 4 ✗', 'g|(4 × 6) ÷ 8 = 3 ✓']]],
    real: ['In real life', "More taps fill a bath faster. A faster car takes less time on the same road. A bigger team finishes a job sooner. These are all inverse proportion.", ['More taps → less time', 'More speed → less time']],
    turns: [
      { q: 'Five painters paint a house in eight days. How long would ten painters take?', say: "The total work is five times eight, forty painter-days. Forty divided by ten is four days.", work: ['5 × 8 = 40 painter-days', '40 ÷ 10 = 4', '= 4 days'], ans: ['g|4 days'] },
      { q: 'Three pipes fill a tank in twelve hours. How long would four pipes take?', say: "The total is three times twelve, thirty-six pipe-hours. Thirty-six divided by four is nine hours.", work: ['3 × 12 = 36 pipe-hours', '36 ÷ 4 = 9', '= 9 hours'], ans: ['g|9 hours'] },
      { q: 'A journey of one hundred and eighty kilometres takes three hours at sixty kilometres an hour. How long does it take at ninety kilometres an hour?', say: "The distance is fixed at one hundred and eighty kilometres. Divide one hundred and eighty by ninety. That is two hours.", work: ['Distance = 180 km', '180 ÷ 90', '= 2 hours'], ans: ['g|2 hours'] }],
    rec: ["In inverse proportion, one goes up as the other goes down.", ['Multiply to find the total', 'Divide by the new number', 'Check: more means less']]
  });

  fx('Ratios with mixed units', 'how to write a ratio when the amounts are in different units.', {
    head: 'Ratios with mixed units',
    basics: [['Same units first', [
      ["A ratio only makes sense when both amounts are in the same units. If the units are different, change them to the same unit first. Usually change to the smaller unit so there are no decimals.", ['Same units first', 'Smaller unit: no decimals']],
      ["Useful facts: one metre is one hundred centimetres, one kilogram is one thousand grams, one litre is one thousand millilitres, one hour is sixty minutes, one pound is one hundred pence.", ['1 m = 100 cm', '1 kg = 1000 g', '1 l = 1000 ml', '1 h = 60 min']]]]],
    ex: [
      ['Length', [
        ["Write forty centimetres to two metres as a ratio in its simplest form. Change two metres to two hundred centimetres. The ratio is forty to two hundred. Divide both by forty to get one to five.", ['2 m = 200 cm', '40 : 200', 'g|= 1 : 5']]]],
      ['Mass', [
        ["Write five hundred grams to two kilograms as a ratio. Two kilograms is two thousand grams. Five hundred to two thousand. Divide both by five hundred to get one to four.", ['2 kg = 2000 g', '500 : 2000', 'g|= 1 : 4']]]],
      ['Time', [
        ["Write forty-five minutes to two hours as a ratio. Two hours is one hundred and twenty minutes. Forty-five to one hundred and twenty. Divide both by fifteen to get three to eight.", ['2 h = 120 min', '45 : 120', 'g|= 3 : 8']]]],
      ['Money', [
        ["Write fifty pence to two pounds as a ratio. Two pounds is two hundred pence. Fifty to two hundred is one to four.", ['£2 = 200p', '50 : 200', 'g|= 1 : 4']]]]],
    mist: [
      ['Not changing the units', "Mistake one: writing forty to two without changing the units. Forty centimetres to two metres is not twenty to one. The units must match.", ['r|40 : 2 = 20 : 1 ✗', 'g|40 : 200 = 1 : 5 ✓']],
      ['Wrong conversion', "Mistake two: using the wrong conversion. Two metres is two hundred centimetres, not twenty.", ['r|2 m = 20 cm ✗', 'g|2 m = 200 cm ✓']]],
    real: ['In real life', "Recipes mix grams and kilograms, millilitres and litres. A cleaning mix might use two hundred and fifty millilitres of cleaner to two litres of water. The ratio is two hundred and fifty to two thousand, which is one to eight.", ['250 ml : 2 l = 250 : 2000', '= 1 : 8']],
    turns: [
      { q: 'Write thirty centimetres to one and a half metres as a ratio in its simplest form.', say: "One and a half metres is one hundred and fifty centimetres. The ratio is thirty to one hundred and fifty. Divide both by thirty to get one to five.", work: ['1.5 m = 150 cm', '30 : 150', '÷ 30 → 1 : 5'], ans: ['g|1 : 5'] },
      { q: 'Write two hundred and fifty millilitres to two litres as a ratio in its simplest form.', say: "Two litres is two thousand millilitres. The ratio is two hundred and fifty to two thousand. Divide both by two hundred and fifty to get one to eight.", work: ['2 l = 2000 ml', '250 : 2000', '÷ 250 → 1 : 8'], ans: ['g|1 : 8'] },
      { q: 'Write twenty minutes to one hour and forty minutes as a ratio in its simplest form.', say: "One hour and forty minutes is one hundred minutes. The ratio is twenty to one hundred. Divide both by twenty to get one to five.", work: ['1 h 40 min = 100 min', '20 : 100', '÷ 20 → 1 : 5'], ans: ['g|1 : 5'] }],
    rec: ["Change to the same unit before writing the ratio.", ['Convert to the smaller unit', 'Write the ratio', 'Simplify', 'Remember the conversion facts']]
  });

  fx('Best buys and scaling recipes', 'how to compare prices by finding the cost of one unit, and how to scale a recipe up or down.', {
    head: 'Best buys and scaling recipes',
    basics: [['Compare like with like', [
      ["To find the best buy, work out the cost of one unit for each option: the price of one item, or the price of one hundred grams. Then compare. The lowest cost per unit is the best value. Or work out how much you get for one pound.", ['Price ÷ amount = price per unit', 'Lowest price per unit: best buy']],
      ["To scale a recipe, find the scale factor: the new number of people divided by the old number. Multiply every ingredient by the scale factor.", ['Scale factor = new ÷ old', 'Multiply EVERY ingredient']]]]],
    ex: [
      ['Comparing two packs', [
        ["Rice comes in five hundred grams for one pound twenty, and seven hundred and fifty grams for one pound sixty-five. Which is the better buy? Find the cost per one hundred grams. One pound twenty for five hundred grams is twenty-four pence per hundred grams.", ['500 g: 120p ÷ 5 = 24p per 100 g']],
        ["One pound sixty-five for seven hundred and fifty grams is one hundred and sixty-five pence divided by seven point five, twenty-two pence per hundred grams. Twenty-two is less than twenty-four, so the larger pack is better value.", ['750 g: 165p ÷ 7.5 = 22p per 100 g', 'g|750 g pack is the better buy']]]],
      ['Number of items', [
        ["Six pens cost two pounds forty. Ten pens cost three pounds eighty. Which is better? Six pens: two hundred and forty pence divided by six is forty pence each. Ten pens: three hundred and eighty divided by ten is thirty-eight pence each. The pack of ten is better.", ['240 ÷ 6 = 40p each', '380 ÷ 10 = 38p each', 'g|10 pens is the better buy']]]],
      ['Scaling up', [
        ["A recipe for four people uses two hundred grams of flour and two eggs. Scale it up for ten people. The scale factor is ten divided by four, two point five.", ['Scale factor = 10 ÷ 4 = 2.5']],
        ["Flour: two hundred times two point five is five hundred grams. Eggs: two times two point five is five eggs.", ['200 × 2.5 = 500 g', '2 × 2.5 = 5 eggs']]]],
      ['Scaling to six', [
        ["For six people the scale factor is six divided by four, one point five. Flour is three hundred grams, and eggs are four and a half.", ['Scale factor = 1.5', '200 × 1.5 = 300 g']]]]],
    mist: [
      ['Comparing only the prices', "Mistake one: choosing the cheaper pack without checking the amounts. The bigger pack costs more, but it gives more for each pound, so the price alone is not enough.", ['r|£1.20 < £1.65, so 500 g is better ✗', 'g|24p v 22p per 100 g: 750 g is better ✓']],
      ['Scaling only one ingredient', "Mistake two: scaling the flour but not the eggs. Every ingredient must be multiplied by the same scale factor, or the recipe will not work.", ['r|Flour × 2.5, eggs × 1 ✗', 'g|Everything × 2.5 ✓']]],
    real: ['In real life', "Supermarkets show the price per hundred grams on shelf labels to help you compare. Caterers scale recipes up for large numbers of guests, and cooks scale them down for one person.", ['Shelf label: 24p per 100 g', 'Recipe for 4 → recipe for 10']],
    turns: [
      { q: 'Pasta costs one pound sixty for four hundred grams, or three pounds eighty for one kilogram. Which is the better buy?', say: "Four hundred grams for one hundred and sixty pence is forty pence per hundred grams. One kilogram is ten hundred grams. Three hundred and eighty pence divided by ten is thirty-eight pence per hundred grams. Thirty-eight is less than forty, so the one kilogram bag is better.", work: ['400 g: 160 ÷ 4 = 40p per 100 g', '1 kg = 1000 g: 380 ÷ 10 = 38p per 100 g', '38p < 40p'], ans: ['g|The 1 kg bag'] },
      { q: 'A pack of twelve pens costs four pounds eighty. A pack of twenty pens costs seven pounds sixty. Which is the better buy?', say: "Twelve pens: four hundred and eighty pence divided by twelve is forty pence each. Twenty pens: seven hundred and sixty pence divided by twenty is thirty-eight pence each. The pack of twenty is better.", work: ['12 pens: 480 ÷ 12 = 40p each', '20 pens: 760 ÷ 20 = 38p each', '38p < 40p'], ans: ['g|The pack of 20'] },
      { q: 'A recipe for four people uses one hundred and fifty grams of flour and two hundred and forty millilitres of milk. How much of each is needed for six people?', say: "The scale factor is six divided by four, one point five. Flour: one hundred and fifty times one point five is two hundred and twenty-five grams. Milk: two hundred and forty times one point five is three hundred and sixty millilitres.", work: ['Scale factor = 6 ÷ 4 = 1.5', 'Flour: 150 × 1.5 = 225 g', 'Milk: 240 × 1.5 = 360 ml'], ans: ['g|225 g flour and 360 ml milk'] }],
    rec: ["Compare the cost of one unit. Scale every ingredient by the same factor.", ['Price per 100 g, or per item', 'Lowest price per unit wins', 'Scale factor = new ÷ old', 'Multiply every ingredient']]
  });

  L.use(823, ['What are ratios?', 'Ratios with mixed units', 'Sharing in a ratio with three parts', 'Using one known part', 'Combining ratios', 'Direct proportion problems', 'Inverse proportion problems', 'Best buys and scaling recipes']);
})();
