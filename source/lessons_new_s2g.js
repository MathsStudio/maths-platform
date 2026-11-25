/* lessons_new_s2g.js: S2 topic 823 Ratio and proportion */
(function () {
  'use strict';
  var BT = window.BT; if (!BT || !BT.L || !BT.L.fx) return;
  var L = BT.L, fx = L.fx;

  fx('What are ratios?', 'what a ratio is, how to simplify it, and how to write it as 1 to n or as a fraction.', {
    head: 'What are ratios?',
    basics: [['Comparing amounts', [
      ["A ratio compares amounts. If there are 3 red counters and 2 blue counters, the ratio of red to blue is 3 to 2, written 3 colon 2. The order matters. The first number goes with the first thing named.", ['Red : Blue = 3 : 2', 'Order matters']],
      ["We simplify a ratio by dividing both numbers by the same number, just like a fraction. Divide by the highest common factor to get the simplest form.", ['12 : 18', '÷ 6 → 2 : 3']]]]],
    ex: [
      ['Simplifying', [
        ["In a class there are 12 boys and 18 girls. Write the ratio of boys to girls in its simplest form. The ratio is 12 to 18. The highest common factor of 12 and 18 is 6.", ['Boys : Girls = 12 : 18', 'HCF = 6']],
        ["Divide both numbers by 6. 12 divided by 6 is 2, and 18 divided by 6 is 3. The simplest ratio is 2 to 3.", ['12 ÷ 6 = 2', '18 ÷ 6 = 3', 'g|2 : 3']]]],
      ['One to n', [
        ["Write 5 to 20 in the form 1 to n. To make the first number one, divide both by 5. 20 divided by 5 is 4.", ['5 : 20', '÷ 5 → 1 : 4', 'g|1 : 4']]]],
      ['A ratio that is not whole numbers', [
        ["Write 4 to 10 in the form 1 to n. Divide both by 4. 10 divided by 4 is 2.5. The ratio is 1 to 2.5.", ['4 : 10', '÷ 4 → 1 : 2.5', 'g|1 : 2.5']]]],
      ['Ratio as a fraction', [
        ["Boys to girls is 2 to 3. How much of the class are girls? There are 2 plus 3, 5 parts altogether. Girls are 3 of the 5 parts, which is 3/5.", ['2 + 3 = 5 parts', 'g|Girls = 3/5']]]]],
    mist: [
      ['Writing it the wrong way round', "Mistake one: swapping the order. 12 boys and 18 girls gives boys to girls as 12 to 18, which is 2 to 3. Writing 3 to 2 gives girls to boys, a different ratio.", ['r|Boys : Girls = 3 : 2 ✗', 'g|Boys : Girls = 2 : 3 ✓']],
      ['Dividing only one number', "Mistake two: dividing only one side. To simplify 12 to 18, we must divide both numbers by the same amount. Dividing only one side changes the ratio.", ['r|12 : 18 → 2 : 18 ✗', 'g|12 : 18 → 2 : 3 ✓']]],
    real: ['In real life', "A recipe for pastry uses flour and butter in the ratio 2 to 1. That means twice as much flour as butter. A paint mixture of blue and white in the ratio 1 to 3 has 3 times as much white as blue.", ['Flour : Butter = 2 : 1', 'Blue : White = 1 : 3']],
    turns: [
      { q: 'A bag has 15 red sweets and 25 blue sweets. Write the ratio of red to blue in its simplest form.', say: "The ratio is 15 to 25. The highest common factor is 5. 15 divided by 5 is 3. 25 divided by 5 is 5. The simplest ratio is 3 to 5.", work: ['Red : Blue = 15 : 25', 'HCF = 5', '15 ÷ 5 = 3 and 25 ÷ 5 = 5', '= 3 : 5'], ans: ['g|3 : 5'] },
      { q: 'Write the ratio 4 to 10 in the form 1 to n.', say: "Divide both numbers by 4, to make the first number one. 4 divided by 4 is 1. 10 divided by 4 is 2.5. So the ratio is 1 to 2.5.", work: ['4 : 10', '4 ÷ 4 = 1', '10 ÷ 4 = 2.5', '= 1 : 2.5'], ans: ['g|1 : 2.5'] },
      { q: 'The ratio of boys to girls in a club is 3 to 4. What fraction of the club are girls?', say: "There are 3 plus 4, 7 parts altogether. Girls are 4 of the 7 parts. So girls are 4/7 of the club.", work: ['3 + 4 = 7 parts', 'Girls = 4 parts', '= 4/7'], ans: ['g|4/7'] }],
    rec: ["A ratio compares amounts, and the order matters.", ['Write in the order given', 'Simplify: divide both by the HCF', '1 : n: divide both by the first number', 'Fraction: part ÷ total parts']]
  });

  fx('Sharing in a ratio with three parts', 'how to share an amount in a ratio with 3 parts.', {
    head: 'Sharing in a ratio with three parts',
    basics: [['Find the value of one part', [
      ["To share an amount in a ratio, first add the numbers in the ratio to find the total number of parts. Then divide the amount by the number of parts to find the value of 1 part. Finally multiply each ratio number by the value of 1 part.", ['1. Add the ratio numbers', '2. Amount ÷ parts = 1 part', '3. Multiply each number by 1 part']],
      ["Always check that the shares add up to the amount you started with.", ['Check: shares add to the total']]]]],
    ex: [
      ['Sharing money', [
        ["Share £150 between A, B and C in the ratio 2 to 3 to 5. Add the numbers: 2 plus 3 plus 5 is 10 parts. 150 divided by 10 is £15 for each part.", ['2 + 3 + 5 = 10 parts', '150 ÷ 10 = £15 per part']],
        ["A gets 2 parts, £30. B gets 3 parts, £45. C gets 5 parts, £75. Check: 30 plus 45 plus 75 is 150.", ['A: 2 × 15 = £30', 'B: 3 × 15 = £45', 'C: 5 × 15 = £75', 'g|30 + 45 + 75 = 150 ✓']]]],
      ['Another share', [
        ["Share £84 in the ratio 1 to 2 to 4. 1 plus 2 plus 4 is 7 parts. 84 divided by 7 is £12 a part. The shares are 12, 24 and £48.", ['1 + 2 + 4 = 7 parts', '84 ÷ 7 = £12', 'g|£12, £24, £48']]]],
      ['Angles in a triangle', [
        ["The angles in a triangle are in the ratio 2 to 3 to 4. Find the angles. The angles add up to 180 degrees. 2 plus 3 plus 4 is 9 parts. 180 divided by 9 is 20 degrees a part.", ['2 + 3 + 4 = 9 parts', '180 ÷ 9 = 20° per part']],
        ["The angles are 40, 60 and 80 degrees. They add up to 180.", ['2 × 20 = 40°', '3 × 20 = 60°', '4 × 20 = 80°', 'g|40 + 60 + 80 = 180 ✓']]]]],
    mist: [
      ['Dividing by the number of people', "Mistake one: dividing by 3 because there are 3 people. A, B and C do not get equal shares. Divide by the number of parts, 10.", ['r|150 ÷ 3 = £50 each ✗', 'g|150 ÷ 10 = £15 a part ✓']],
      ['Using the biggest number', "Mistake two: dividing by the biggest ratio number, 5, instead of the total of the ratio numbers. The total number of parts is 2 plus 3 plus 5.", ['r|150 ÷ 5 = 30 ✗', 'g|150 ÷ (2 + 3 + 5) = 15 ✓']]],
    real: ['In real life', "Lottery wins, business profits and inheritances are often shared in a ratio. If 3 friends put in different amounts, they can share the prize in the same ratio.", ['Share £150: 2 : 3 : 5', '£30, £45, £75']],
    turns: [
      { q: 'Share £120 in the ratio 1 to 2 to 3.', say: "1 plus 2 plus 3 is 6 parts. 120 divided by 6 is £20 a part. The shares are 20, 40 and £60.", work: ['1 + 2 + 3 = 6 parts', '120 ÷ 6 = £20 per part', '20, 40 and 60', 'Check: 20 + 40 + 60 = 120'], ans: ['g|£20, £40, £60'] },
      { q: 'Share £240 in the ratio 3 to 4 to 5.', say: "3 plus 4 plus 5 is 12 parts. 240 divided by 12 is £20 a part. The shares are 3 times 20, 4 times 20 and 5 times 20, so 60, 80 and £100.", work: ['3 + 4 + 5 = 12 parts', '240 ÷ 12 = £20 per part', '3 × 20 = 60, 4 × 20 = 80, 5 × 20 = 100', 'Check: 60 + 80 + 100 = 240'], ans: ['g|£60, £80, £100'] },
      { q: 'The angles of a triangle are in the ratio 2 to 3 to 4. Find the 3 angles.', say: "The angles of a triangle add up to 180 degrees. 2 plus 3 plus 4 is 9 parts. 180 divided by 9 is 20 degrees a part. The angles are 40, 60 and 80 degrees.", work: ['2 + 3 + 4 = 9 parts', '180 ÷ 9 = 20° per part', '40°, 60°, 80°', 'Check: 40 + 60 + 80 = 180'], ans: ['g|40°, 60°, 80°'] }],
    rec: ["Add the parts, find 1 part, then multiply.", ['Add the ratio numbers', 'Amount ÷ number of parts', 'Multiply each ratio number', 'Check the total']]
  });

  fx('Using one known part', 'how to find the other amounts and the total when only one share is known.', {
    head: 'Using one known part',
    basics: [['Start from what you know', [
      ["Sometimes you are told the value of 1 share, not the total. Match the known amount to its ratio number. Divide to find the value of 1 part. Then you can find every other share and the total.", ['Known share ÷ its ratio number = one part', 'Then multiply for the others']],
      ["Another way: you may be told the difference between 2 shares. The difference is the difference of the ratio numbers, in parts.", ['Difference in parts = difference of the ratio numbers']]]]],
    ex: [
      ['Money shared', [
        ["Money is shared between A, B and C in the ratio 2 to 3 to 5. B gets £45. How much is shared altogether, and how much does C get? B has 3 parts, so 3 parts are £45. 1 part is £15.", ['3 parts = £45', '1 part = 45 ÷ 3 = £15']],
        ["There are 10 parts altogether, so the total is £150. C has 5 parts, which is £75.", ['10 × 15 = £150', 'C: 5 × 15 = £75']]]],
      ['Counters', [
        ["Red to blue counters are in the ratio 3 to 5. There are 12 red counters. How many blue counters are there? 3 parts are 12, so 1 part is 4. Blue is 5 parts, 20 counters.", ['3 parts = 12', '1 part = 4', 'g|Blue = 5 × 4 = 20']]]],
      ['The difference is known', [
        ["2 amounts are in the ratio 3 to 5. The difference between them is £18. Find both amounts. The difference is 5 minus 3, 2 parts. 2 parts are £18, so 1 part is £9.", ['5 − 3 = 2 parts', '2 parts = £18', '1 part = £9']],
        ["The amounts are 3 times 9, £27, and 5 times 9, £45. Check the difference: 45 minus 27 is 18.", ['3 × 9 = £27', '5 × 9 = £45', 'g|45 − 27 = 18 ✓']]]]],
    mist: [
      ['Treating the known amount as one part', "Mistake one: using the known amount as the value of 1 part. B has 3 parts, so £45 is 3 parts, not one part.", ['r|C = 5 × 45 = £225 ✗', 'g|C = 5 × 15 = £75 ✓']],
      ['Using the total of the ratio', "Mistake two: dividing 45 by the total number of parts, 10. 45 belongs to B's 3 parts only.", ['r|45 ÷ 10 = 4.5 ✗', 'g|45 ÷ 3 = 15 ✓']]],
    real: ['In real life', "A shop sells red and blue pens in the ratio 3 to 5. If it has 12 red pens on the shelf, we can work out how many blue pens it has. The same method works for a recipe if you only have a certain amount of 1 ingredient.", ['Red : Blue = 3 : 5', '12 red → 20 blue']],
    turns: [
      { q: 'Red and blue counters are in the ratio 3 to 7. There are 21 red counters. How many blue counters are there?', say: "3 parts are 21 counters, so 1 part is 7. Blue is 7 parts. 7 times 7 is 49 blue counters.", work: ['3 parts = 21', '1 part = 21 ÷ 3 = 7', 'Blue = 7 parts = 7 × 7 = 49'], ans: ['g|49 blue counters'] },
      { q: 'Money is shared between A, B and C in the ratio 4 to 5 to 6. B gets £35. How much do A and C get, and what is the total?', say: "5 parts are £35, so 1 part is £7. A has 4 parts, £28. C has 6 parts, £42. The total is 15 parts, £105.", work: ['5 parts = £35', '1 part = 35 ÷ 5 = £7', 'A = 4 × 7 = £28 and C = 6 × 7 = £42', 'Total = 15 × 7 = £105'], ans: ['g|A £28, C £42, total £105'] },
      { q: '2 amounts are in the ratio 5 to 2. The difference between them is £27. Find both amounts.', say: "The difference is 5 minus 2, 3 parts. 3 parts are £27, so 1 part is £9. The amounts are 5 times 9, £45, and 2 times 9, £18.", work: ['5 − 2 = 3 parts', '3 parts = £27, so 1 part = £9', '5 × 9 = £45 and 2 × 9 = £18', 'Check: 45 − 18 = 27'], ans: ['g|£45 and £18'] }],
    rec: ["Match the known amount to its parts, then find 1 part.", ['Known amount ÷ its ratio number', 'Multiply for the other shares', 'Difference: difference of ratio numbers', 'Check your answer']]
  });

  fx('Combining ratios', 'how to combine 2 ratios that share a common quantity into 1 ratio.', {
    head: 'Combining ratios',
    basics: [['Make the shared part match', [
      ["Sometimes 2 ratios share 1 quantity. A to B is 2 to 3, and B to C is 4 to 5. To combine them, make the B numbers the same. Find the lowest common multiple of the B numbers.", ['A : B = 2 : 3', 'B : C = 4 : 5', 'LCM of 3 and 4 = 12']],
      ["Scale each ratio so that B becomes the common multiple. Then write A, B and C together.", ['Scale both ratios', 'Then A : B : C']]]]],
    ex: [
      ['Two ratios', [
        ["A to B is 2 to 3, and B to C is 4 to 5. Write A to B to C. The B numbers are 3 and 4, and the lowest common multiple is 12. Multiply the first ratio by 4: 8 to 12.", ['A : B = 2 : 3 → × 4 → 8 : 12']],
        ["Multiply the second ratio by 3: 12 to 15. Now B is 12 in both. So A to B to C is 8 to 12 to 15.", ['B : C = 4 : 5 → × 3 → 12 : 15', 'g|A : B : C = 8 : 12 : 15']]]],
      ['A different pair', [
        ["A to B is 3 to 4, and B to C is 2 to 5. The B numbers are 4 and 2. The lowest common multiple is 4. The first ratio stays the same. Multiply the second by 2: 4 to 10. So A to B to C is 3 to 4 to 10.", ['B : C = 2 : 5 → × 2 → 4 : 10', 'g|A : B : C = 3 : 4 : 10']]]],
      ['Then share', [
        ["Share £140 in the ratio 8 to 12 to 15. Add: 8 plus 12 plus 15 is 35 parts. 140 divided by 35 is £4 a part.", ['8 + 12 + 15 = 35', '140 ÷ 35 = £4']],
        ["The shares are 32, 48 and £60. They add up to 140.", ['8 × 4 = £32', '12 × 4 = £48', '15 × 4 = £60', 'g|32 + 48 + 60 = 140 ✓']]]]],
    mist: [
      ['Just joining the ratios', "Mistake one: writing the ratios side by side without matching B. 2 to 3 and 4 to 5 do not give 2 to 3 to 5. B is 3 in 1 ratio and 4 in the other.", ['r|2 : 3 : 5 ✗', 'g|8 : 12 : 15 ✓']],
      ['Multiplying only one number', "Mistake two: scaling only one part of a ratio. To change 2 to 3 into 8 to 12, we must multiply both numbers by 4.", ['r|2 : 3 → 8 : 3 ✗', 'g|2 : 3 → 8 : 12 ✓']]],
    real: ['In real life', "Recipes and mixtures combine ratios. If the ratio of flour to sugar is 2 to 1, and sugar to butter is 3 to 2, we can find the ratio of all 3 ingredients.", ['Flour : Sugar = 2 : 1', 'Sugar : Butter = 3 : 2']],
    turns: [
      { q: 'A to B is 1 to 2, and B to C is 3 to 5. Write A to B to C.', say: "The B numbers are 2 and 3. The lowest common multiple is 6. Multiply the first ratio by 3: 3 to 6. Multiply the second ratio by 2: 6 to 10. So A to B to C is 3 to 6 to 10.", work: ['LCM of 2 and 3 = 6', 'A : B = 1 : 2 → × 3 → 3 : 6', 'B : C = 3 : 5 → × 2 → 6 : 10', 'A : B : C = 3 : 6 : 10'], ans: ['g|3 : 6 : 10'] },
      { q: 'x to y is 2 to 5, and y to z is 10 to 3. Write x to y to z.', say: "The y numbers are 5 and 10. The lowest common multiple is 10. Multiply the first ratio by 2: 4 to 10. The second ratio stays the same: 10 to 3. So x to y to z is 4 to 10 to 3.", work: ['LCM of 5 and 10 = 10', 'x : y = 2 : 5 → × 2 → 4 : 10', 'y : z = 10 : 3', 'x : y : z = 4 : 10 : 3'], ans: ['g|4 : 10 : 3'] },
      { q: 'A to B is 3 to 4, and B to C is 6 to 7. £175 is shared between A, B and C in the ratio A to B to C. How much does each get?', say: "The B numbers are 4 and 6. The lowest common multiple is 12. Multiply the first ratio by 3: 9 to 12. Multiply the second by 2: 12 to 14. So A to B to C is 9 to 12 to 14. That is 35 parts. 175 divided by 35 is £5 a part. The shares are 45, 60 and £70.", work: ['A : B = 3 : 4 → × 3 → 9 : 12', 'B : C = 6 : 7 → × 2 → 12 : 14', 'A : B : C = 9 : 12 : 14, 35 parts', '175 ÷ 35 = £5 per part', '9 × 5 = 45, 12 × 5 = 60, 14 × 5 = 70'], ans: ['g|£45, £60, £70'] }],
    rec: ["Make the shared quantity the same, then join the ratios.", ['LCM of the shared numbers', 'Scale both numbers in each ratio', 'Write A : B : C', 'Then share as normal']]
  });

  fx('Direct proportion problems', 'how to solve problems where 2 quantities increase together at the same rate.', {
    head: 'Direct proportion',
    basics: [['Double one, double the other', [
      ["2 quantities are in direct proportion when they increase together at the same rate. If you buy twice as many pens, you pay twice as much. A good method is to find the value of 1 unit first. This is called the unitary method.", ['Direct: double 1, double the other', 'Find the value of ONE first']],
      ["Divide to find 1 unit. Then multiply to find any number of units.", ['÷ to get one', '× to get the number you need']]]]],
    ex: [
      ['Pens', [
        ["5 pens cost £3.50. How much do 8 pens cost? First find the cost of 1 pen. £3.50 divided by 5 is 70p.", ['5 pens = £3.50', '1 pen = 3.50 ÷ 5 = £0.70']],
        ["8 pens cost 8 times 70p, which is £5.60.", ['8 × 0.70', 'g|= £5.60']]]],
      ['A recipe', [
        ["4 people need 300 grams of rice. How much rice for 10 people? 1 person needs 300 divided by 4, 75 grams. 10 people need 10 times 75, 750 grams.", ['1 person: 300 ÷ 4 = 75 g', 'g|10 people: 10 × 75 = 750 g']]]],
      ['A scale factor', [
        ["6 buns need 250 grams of flour. How much flour for 18 buns? 18 is 3 times 6, so multiply the flour by 3. 250 times 3 is 750 grams.", ['18 ÷ 6 = 3', 'g|250 × 3 = 750 g']]]],
      ['Money', [
        ["£1 buys 1.15 euros. How many euros for £200? Multiply 200 by 1.15, which is 230 euros.", ['200 × 1.15', 'g|= €230']]]]],
    mist: [
      ['Adding instead of multiplying', "Mistake one: adding. 5 pens cost £3.50. 8 pens are 3 more, so adding 3 to the price is wrong. We need the price of 1 pen and multiply.", ['r|3.50 + 3 = £6.50 ✗', 'g|8 × 0.70 = £5.60 ✓']],
      ['Dividing instead of multiplying', "Mistake two: dividing when we should multiply. More pens cost more, so the answer must be bigger than £3.50.", ['r|3.50 ÷ 8 ✗', 'g|8 × 0.70 = 5.60 ✓']]],
    real: ['In real life', "Shopping, cooking and converting currency all use direct proportion. If petrol costs a fixed price per litre, double the litres means double the cost.", ['Cost ∝ litres', 'Double litres → double cost']],
    turns: [
      { q: '6 apples cost £2.40. How much do 9 apples cost?', say: "1 apple costs £2.40 divided by 6, which is 40p. 9 apples cost 9 times 40p, £3.60.", work: ['1 apple = 2.40 ÷ 6 = £0.40', '9 apples = 9 × 0.40', '= £3.60'], ans: ['g|£3.60'] },
      { q: '3 eggs make 12 muffins. How many eggs are needed for 20 muffins?', say: "1 muffin needs 3 divided by 12, which is 1/4 of an egg. 20 muffins need 20 times 1/4, 5 eggs.", work: ['1 muffin = 3 ÷ 12 = 0.25 egg', '20 muffins = 20 × 0.25', '= 5 eggs'], ans: ['g|5 eggs'] },
      { q: 'A car uses 6 litres of petrol to drive 100 kilometres. How much petrol does it need for 350 kilometres?', say: "350 divided by 100 is 3.5. So multiply 6 litres by 3.5. That is 21 litres.", work: ['350 ÷ 100 = 3.5', '6 × 3.5', '= 21 litres'], ans: ['g|21 litres'] }],
    rec: ["In direct proportion, both quantities go up together.", ['Find the value of one unit', 'Multiply for the amount you need', 'Check: more means more']]
  });

  fx('Inverse proportion problems', 'how to solve problems where 1 quantity goes up as the other goes down.', {
    head: 'Inverse proportion',
    basics: [['One up, one down', [
      ["2 quantities are in inverse proportion when 1 goes up as the other goes down. More workers means fewer days to do the same job. The total amount of work stays the same. To solve these, find the total first, then divide.", ['Inverse: 1 up, 1 down', 'The product stays the same']],
      ["Multiply the 2 numbers you are given to find the total. Then divide by the new number.", ['Total = number × time', 'New time = total ÷ new number']]]]],
    ex: [
      ['Workers', [
        ["4 workers build a wall in 6 days. How long would 8 workers take? The total work is 4 times 6, 24 worker-days.", ['4 × 6 = 24 worker-days']],
        ["8 workers share the 24 worker-days. 24 divided by 8 is 3 days. Double the workers, half the time.", ['24 ÷ 8', 'g|= 3 days']]]],
      ['Hours', [
        ["6 people paint a fence in 10 hours. How long would 5 people take? The total is 6 times 10, 60 person-hours. 60 divided by 5 is 12 hours.", ['6 × 10 = 60', 'g|60 ÷ 5 = 12 hours']]]],
      ['Speed and time', [
        ["A journey of 120 kilometres at 60 kilometres an hour takes 2 hours. At 80 kilometres an hour it takes 120 divided by 80, 1 and 1/2 hours.", ['120 ÷ 60 = 2 h', 'g|120 ÷ 80 = 1.5 h']]]],
      ['Sharing sweets', [
        ["12 sweets are shared equally. Among 3 people, each gets 4. Among 4 people, each gets 3. More people, fewer sweets each.", ['12 ÷ 3 = 4', 'g|12 ÷ 4 = 3']]]]],
    mist: [
      ['Using direct proportion', "Mistake one: doubling the days when the workers double. More workers must take less time. 8 workers taking 12 days is wrong.", ['r|8 workers: 12 days ✗', 'g|8 workers: 3 days ✓']],
      ['Forgetting the total', "Mistake two: dividing 6 days by 4 workers. First multiply to get the total work, 24, then divide by the new number of workers.", ['r|6 ÷ 4 ✗', 'g|(4 × 6) ÷ 8 = 3 ✓']]],
    real: ['In real life', "More taps fill a bath faster. A faster car takes less time on the same road. A bigger team finishes a job sooner. These are all inverse proportion.", ['More taps → less time', 'More speed → less time']],
    turns: [
      { q: '5 painters paint a house in 8 days. How long would 10 painters take?', say: "The total work is 5 times 8, 40 painter-days. 40 divided by 10 is 4 days.", work: ['5 × 8 = 40 painter-days', '40 ÷ 10 = 4', '= 4 days'], ans: ['g|4 days'] },
      { q: '3 pipes fill a tank in 12 hours. How long would 4 pipes take?', say: "The total is 3 times 12, 36 pipe-hours. 36 divided by 4 is 9 hours.", work: ['3 × 12 = 36 pipe-hours', '36 ÷ 4 = 9', '= 9 hours'], ans: ['g|9 hours'] },
      { q: 'A journey of 180 kilometres takes 3 hours at 60 kilometres an hour. How long does it take at 90 kilometres an hour?', say: "The distance is fixed at 180 kilometres. Divide 180 by 90. That is 2 hours.", work: ['Distance = 180 km', '180 ÷ 90', '= 2 hours'], ans: ['g|2 hours'] }],
    rec: ["In inverse proportion, 1 goes up as the other goes down.", ['Multiply to find the total', 'Divide by the new number', 'Check: more means less']]
  });

  fx('Ratios with mixed units', 'how to write a ratio when the amounts are in different units.', {
    head: 'Ratios with mixed units',
    basics: [['Same units first', [
      ["A ratio only makes sense when both amounts are in the same units. If the units are different, change them to the same unit first. Usually change to the smaller unit so there are no decimals.", ['Same units first', 'Smaller unit: no decimals']],
      ["Useful facts: 1 metre is 100 centimetres, 1 kilogram is 1,000 grams, 1 litre is 1,000 millilitres, 1 hour is 60 minutes, £1 is 100p.", ['1 m = 100 cm', '1 kg = 1000 g', '1 l = 1000 ml', '1 h = 60 min']]]]],
    ex: [
      ['Length', [
        ["Write 40 centimetres to 2 metres as a ratio in its simplest form. Change 2 metres to 200 centimetres. The ratio is 40 to 200. Divide both by 40 to get 1 to 5.", ['2 m = 200 cm', '40 : 200', 'g|= 1 : 5']]]],
      ['Mass', [
        ["Write 500 grams to 2 kilograms as a ratio. 2 kilograms is 2,000 grams. 500 to 2,000. Divide both by 500 to get 1 to 4.", ['2 kg = 2000 g', '500 : 2000', 'g|= 1 : 4']]]],
      ['Time', [
        ["Write 45 minutes to 2 hours as a ratio. 2 hours is 120 minutes. 45 to 120. Divide both by 15 to get 3 to 8.", ['2 h = 120 min', '45 : 120', 'g|= 3 : 8']]]],
      ['Money', [
        ["Write 50p to £2 as a ratio. £2 is 200p. 50 to 200 is 1 to 4.", ['£2 = 200p', '50 : 200', 'g|= 1 : 4']]]]],
    mist: [
      ['Not changing the units', "Mistake one: writing 40 to 2 without changing the units. 40 centimetres to 2 metres is not 20 to 1. The units must match.", ['r|40 : 2 = 20 : 1 ✗', 'g|40 : 200 = 1 : 5 ✓']],
      ['Wrong conversion', "Mistake two: using the wrong conversion. 2 metres is 200 centimetres, not 20.", ['r|2 m = 20 cm ✗', 'g|2 m = 200 cm ✓']]],
    real: ['In real life', "Recipes mix grams and kilograms, millilitres and litres. A cleaning mix might use 250 millilitres of cleaner to 2 litres of water. The ratio is 250 to 2,000, which is 1 to 8.", ['250 ml : 2 l = 250 : 2000', '= 1 : 8']],
    turns: [
      { q: 'Write 30 centimetres to 1 and 1/2 metres as a ratio in its simplest form.', say: "1 and 1/2 metres is 150 centimetres. The ratio is 30 to 150. Divide both by 30 to get 1 to 5.", work: ['1.5 m = 150 cm', '30 : 150', '÷ 30 → 1 : 5'], ans: ['g|1 : 5'] },
      { q: 'Write 250 millilitres to 2 litres as a ratio in its simplest form.', say: "2 litres is 2,000 millilitres. The ratio is 250 to 2,000. Divide both by 250 to get 1 to 8.", work: ['2 l = 2000 ml', '250 : 2000', '÷ 250 → 1 : 8'], ans: ['g|1 : 8'] },
      { q: 'Write 20 minutes to 1 hour and 40 minutes as a ratio in its simplest form.', say: "1 hour and 40 minutes is 100 minutes. The ratio is 20 to 100. Divide both by 20 to get 1 to 5.", work: ['1 h 40 min = 100 min', '20 : 100', '÷ 20 → 1 : 5'], ans: ['g|1 : 5'] }],
    rec: ["Change to the same unit before writing the ratio.", ['Convert to the smaller unit', 'Write the ratio', 'Simplify', 'Remember the conversion facts']]
  });

  fx('Best buys and scaling recipes', 'how to compare prices by finding the cost of 1 unit, and how to scale a recipe up or down.', {
    head: 'Best buys and scaling recipes',
    basics: [['Compare like with like', [
      ["To find the best buy, work out the cost of 1 unit for each option: the price of 1 item, or the price of 100 grams. Then compare. The lowest cost per unit is the best value. Or work out how much you get for £1.", ['Price ÷ amount = price per unit', 'Lowest price per unit: best buy']],
      ["To scale a recipe, find the scale factor: the new number of people divided by the old number. Multiply every ingredient by the scale factor.", ['Scale factor = new ÷ old', 'Multiply EVERY ingredient']]]]],
    ex: [
      ['Comparing two packs', [
        ["Rice comes in 500 grams for £1.20, and 750 grams for £1.65. Which is the better buy? Find the cost per 100 grams. £1.20 for 500 grams is 24p per hundred grams.", ['500 g: 120p ÷ 5 = 24p per 100 g']],
        ["£1.65 for 750 grams is 165p divided by 7.5, 22p per hundred grams. 22 is less than 24, so the larger pack is better value.", ['750 g: 165p ÷ 7.5 = 22p per 100 g', 'g|750 g pack is the better buy']]]],
      ['Number of items', [
        ["6 pens cost £2.40. 10 pens cost £3.80. Which is better? 6 pens: 240p divided by 6 is 40p each. 10 pens: 380 divided by 10 is 38p each. The pack of 10 is better.", ['240 ÷ 6 = 40p each', '380 ÷ 10 = 38p each', 'g|10 pens is the better buy']]]],
      ['Scaling up', [
        ["A recipe for 4 people uses 200 grams of flour and 2 eggs. Scale it up for 10 people. The scale factor is 10 divided by 4, 2.5.", ['Scale factor = 10 ÷ 4 = 2.5']],
        ["Flour: 200 times 2.5 is 500 grams. Eggs: 2 times 2.5 is 5 eggs.", ['200 × 2.5 = 500 g', '2 × 2.5 = 5 eggs']]]],
      ['Scaling to six', [
        ["For 6 people the scale factor is 6 divided by 4, 1.5. Flour is 300 grams, and eggs are 4 and 1/2.", ['Scale factor = 1.5', '200 × 1.5 = 300 g']]]]],
    mist: [
      ['Comparing only the prices', "Mistake one: choosing the cheaper pack without checking the amounts. The bigger pack costs more, but it gives more for each pound, so the price alone is not enough.", ['r|£1.20 < £1.65, so 500 g is better ✗', 'g|24p v 22p per 100 g: 750 g is better ✓']],
      ['Scaling only one ingredient', "Mistake two: scaling the flour but not the eggs. Every ingredient must be multiplied by the same scale factor, or the recipe will not work.", ['r|Flour × 2.5, eggs × 1 ✗', 'g|Everything × 2.5 ✓']]],
    real: ['In real life', "Supermarkets show the price per hundred grams on shelf labels to help you compare. Caterers scale recipes up for large numbers of guests, and cooks scale them down for 1 person.", ['Shelf label: 24p per 100 g', 'Recipe for 4 → recipe for 10']],
    turns: [
      { q: 'Pasta costs £1.60 for 400 grams, or £3.80 for 1 kilogram. Which is the better buy?', say: "400 grams for 160p is 40p per hundred grams. 1 kilogram is ten hundred grams. 380p divided by 10 is 38p per hundred grams. 38 is less than 40, so the one kilogram bag is better.", work: ['400 g: 160 ÷ 4 = 40p per 100 g', '1 kg = 1000 g: 380 ÷ 10 = 38p per 100 g', '38p < 40p'], ans: ['g|The 1 kg bag'] },
      { q: 'A pack of 12 pens costs £4.80. A pack of 20 pens costs £7.60. Which is the better buy?', say: "12 pens: 480p divided by 12 is 40p each. 20 pens: 760p divided by 20 is 38p each. The pack of 20 is better.", work: ['12 pens: 480 ÷ 12 = 40p each', '20 pens: 760 ÷ 20 = 38p each', '38p < 40p'], ans: ['g|The pack of 20'] },
      { q: 'A recipe for 4 people uses 150 grams of flour and 240 millilitres of milk. How much of each is needed for 6 people?', say: "The scale factor is 6 divided by 4, 1.5. Flour: 150 times 1.5 is 225 grams. Milk: 240 times 1.5 is 360 millilitres.", work: ['Scale factor = 6 ÷ 4 = 1.5', 'Flour: 150 × 1.5 = 225 g', 'Milk: 240 × 1.5 = 360 ml'], ans: ['g|225 g flour and 360 ml milk'] }],
    rec: ["Compare the cost of 1 unit. Scale every ingredient by the same factor.", ['Price per 100 g, or per item', 'Lowest price per unit wins', 'Scale factor = new ÷ old', 'Multiply every ingredient']]
  });

  L.use(823, ['What are ratios?', 'Ratios with mixed units', 'Sharing in a ratio with three parts', 'Using one known part', 'Combining ratios', 'Direct proportion problems', 'Inverse proportion problems', 'Best buys and scaling recipes']);
})();
