/* lessons_new_s2b.js: S2 topic 821, negatives and decimals */
(function () {
  'use strict';
  var BT = window.BT; if (!BT || !BT.L || !BT.L.fx) return;
  var L = BT.L, F = BT.F, fx = L.fx, nl = function (a, b, c, d) { return 'h|' + F.numline(a, b, c, d); };

  fx('How do you add and subtract positive and negative numbers?', 'how to add and subtract positive and negative numbers using the number line and the signs.', {
    head: 'Positive and negative numbers',
    basics: [['The number line', [
      ["Negative numbers are the numbers below 0. On a number line, positive numbers are to the right of 0 and negative numbers are to the left. The further left, the smaller the number.", [nl(-6, 6), 'n|Right = bigger, left = smaller']],
      ["Adding a positive number moves us right. Taking away a positive number moves us left. And there is a surprise: taking away a negative number moves us right, because 2 minus signs make a plus.", ['+ positive: move right', '− positive: move left', '− negative: move right (− − = +)']]]]],
    ex: [
      ['Three add negative five', [
        ["Start at 3 on the number line. Adding a negative number is the same as taking away. So we move 5 steps to the left.", [nl(-6, 6, 3, -2), '3 + (−5) = 3 − 5']],
        ["3 take away 5 lands on minus 2. We pass through 0 on the way.", ['3 − 5 = −2', 'g|3 + (−5) = −2']]]],
      ['Minus 4 take away 3', [
        ["Start at minus 4. We take away 3, so we move 3 steps left.", [nl(-8, 2, -4, -7), '−4 − 3']],
        ["Minus 4 then 3 more to the left is minus 7. When both numbers are negative, we add the sizes and keep the minus sign.", ['4 + 3 = 7', 'g|−4 − 3 = −7']]]],
      ['Five take away negative two', [
        ["Take away a negative is the same as add a positive. The 2 minus signs next to each other turn into a plus. So 5 minus negative 2 is 5 plus 2.", ['5 − (−2)', '− (−2) becomes + 2']],
        ["5 plus 2 is 7. We moved right, not left.", ['5 + 2 = 7', 'g|5 − (−2) = 7']]]],
      ['Minus 6 take away negative 9', [
        ["2 minus signs together make a plus. So this is minus 6 plus 9.", ['−6 − (−9)', '= −6 + 9']],
        ["From minus 6, move 9 steps right. We pass 0 and land on 3. 9 take away 6 gives the size, and the answer is positive because 9 is bigger.", ['9 − 6 = 3', 'g|−6 − (−9) = 3']]]]],
    mist: [
      ['Ignoring the double sign', "Mistake one: treating 2 minus signs as 1. Work out 5 minus negative 2. Wrong: 5 minus 2 is 3. But minus negative 2 is plus 2. The answer is 7.", ['r|5 − (−2) = 3 ✗', 'g|5 − (−2) = 5 + 2 = 7 ✓']],
      ['Adding the sizes when signs differ', "Mistake two: adding all the digits. Work out minus 3 plus 8. Wrong: minus 11. Start at minus 3 and move 8 right. That is plus 5.", ['r|−3 + 8 = −11 ✗', 'g|−3 + 8 = 5 ✓']]],
    real: ['In real life', "At night the temperature is minus 3 degrees. By midday it has risen by 8 degrees. Minus 3 plus 8 is 5 degrees. In a bank account, an overdraft of £40 is minus 40. Paying in £25 gives minus 15.", ['n|At night it is −3 °C. By midday it has risen 8 °C. What is the temperature at midday?', '−3 + 8 = 5 °C', '−40 + 25 = −15 (£)']],
    turns: [
      { q: 'Work out minus 7 plus 4.', task: '−7 + 4', say: "Start at minus 7. Adding 4 moves us 4 steps to the right. Minus 7 plus 4 lands on minus 3. We are still below 0.", work: ['−7 + 4', '7 − 4 = 3 (the sizes)', 'The bigger size is negative, so the answer is −3'], fig: nl(-8, 2, -7, -3), ans: ['g|−7 + 4 = −3'] },
      { q: 'Work out 3 minus negative 6.', task: '3 − (−6)', say: "2 minus signs make a plus. So 3 minus negative 6 is 3 plus 6. That is 9.", work: ['3 − (−6)', '− (−6) becomes + 6', '3 + 6 = 9'], ans: ['g|3 − (−6) = 9'] },
      { q: 'The temperature falls from 4 degrees to minus 6 degrees. By how many degrees did it fall?', say: "We want the difference between 4 and minus 6. That is 4 minus negative 6. 2 minus signs make a plus, so 4 plus 6. The temperature fell by 10 degrees.", work: ['4 − (−6)', '= 4 + 6', '= 10'], fig: nl(-8, 6, 4, -6), ans: ['g|It fell by 10 °C'] }],
    rec: ["Use the number line, and watch the signs.", ['Right = bigger, left = smaller', 'Add a positive: move right', 'Take away a positive: move left', 'Take away a negative = add a positive', 'Different signs: subtract the sizes']]
  });

  fx('How do you multiply and divide positive and negative numbers?', 'the sign rules for multiplying and dividing positive and negative numbers.', {
    head: 'Multiplying and dividing negatives',
    basics: [['The sign rules', [
      ["Multiplying and dividing follow the same simple rules. First ignore the signs and do the calculation. Then decide the sign of the answer.", ['n|1. Calculate with the sizes', 'n|2. Decide the sign']],
      ["If the 2 signs are the same, the answer is positive. If the 2 signs are different, the answer is negative. This works for multiplication and for division.", ['same signs: positive', 'different signs: negative', '(+)(+) = +   (−)(−) = +', '(+)(−) = −   (−)(+) = −']]]]],
    ex: [
      ['6 times negative 4', [
        ["Ignore the signs. 6 times 4 is 24. The signs are different, a positive and a negative, so the answer is negative.", ['6 × 4 = 24', 'signs different: negative']],
        ["6 times negative 4 is minus 24.", ['g|6 × (−4) = −24']]]],
      ['Negative 5 times negative 7', [
        ["Ignore the signs. 5 times 7 is 35. Both numbers are negative. The signs are the same, so the answer is positive.", ['5 × 7 = 35', 'signs the same: positive']],
        ["Negative 5 times negative 7 is plus 35.", ['g|(−5) × (−7) = 35']]]],
      ['Division', [
        ["Minus 36 divided by 9. 36 divided by 9 is 4. The signs are different, so the answer is negative.", ['−36 ÷ 9', '36 ÷ 9 = 4', 'g|−36 ÷ 9 = −4']],
        ["Minus 48 divided by minus 6. 48 divided by 6 is 8. The signs are the same, so the answer is positive.", ['−48 ÷ (−6)', '48 ÷ 6 = 8', 'g|−48 ÷ (−6) = 8']]]],
      ['More than two numbers', [
        ["Work out negative 2 times 3 times negative 5. Do it in order. Negative 2 times 3 is minus 6. Then minus 6 times minus 5 is plus 30.", ['(−2) × 3 = −6', '(−6) × (−5) = 30', 'g|(−2) × 3 × (−5) = 30']]]]],
    mist: [
      ['Negative times negative', "Mistake one: thinking negative times negative is negative. Work out negative 3 times negative 4. Wrong: minus 12. The signs are the same, so the answer is plus 12.", ['r|(−3) × (−4) = −12 ✗', 'g|(−3) × (−4) = 12 ✓']],
      ['Squaring a negative', "Mistake two: a negative number squared. Negative 5 squared means negative 5 times negative 5. That is plus 25. A square is never negative.", ['r|(−5)² = −25 ✗', 'g|(−5)² = (−5) × (−5) = 25 ✓']]],
    real: ['In real life', "You owe your friend £15 each week for 4 weeks. Each week is minus 15, so 4 weeks is 4 times minus 15, which is minus 60. The temperature on a mountain falls 3 degrees every hour. After 5 hours, the change is 5 times minus 3, which is minus 15 degrees.", ['n|You owe £15 each week for 4 weeks. What is the total change in your money?', '4 × (−15) = −60 (£)', '5 × (−3) = −15 (°C)']],
    turns: [
      { q: 'Work out negative 8 times 5.', task: '(−8) × 5', say: "Ignore the signs. 8 times 5 is 40. The signs are different, so the answer is negative. The answer is minus 40.", work: ['8 × 5 = 40', 'Different signs: negative'], ans: ['g|(−8) × 5 = −40'] },
      { q: 'Work out negative 12 divided by negative 3.', task: '(−12) ÷ (−3)', say: "Ignore the signs. 12 divided by 3 is 4. Both numbers are negative, so the signs are the same. The answer is positive 4.", work: ['12 ÷ 3 = 4', 'Same signs: positive'], ans: ['g|(−12) ÷ (−3) = 4'] },
      { q: 'Work out negative 4 times negative 2 times negative 3.', task: '(−4) × (−2) × (−3)', say: "Take it in 2 steps. Negative 4 times negative 2 is plus 8. Then plus 8 times negative 3 is minus 24. 3 negative signs make a negative answer.", work: ['(−4) × (−2) = 8', '8 × (−3) = −24'], ans: ['g|−24'] }],
    rec: ["Calculate with the sizes, then decide the sign.", ['Same signs: positive answer', 'Different signs: negative answer', 'Works for × and ÷', '(−5)² = 25, never −25', 'Do more than two numbers in steps']]
  });

  fx('How do you multiply to three decimal places?', 'how to multiply decimals with up to 3 decimal places.', {
    head: 'Multiplying decimals',
    basics: [['The method', [
      ["To multiply decimals, first ignore the decimal points and multiply the numbers as if they were whole numbers. Then count how many digits are after the decimal points in the question, altogether.", ['n|1. Ignore the points: multiply', 'n|2. Count the decimal places in the question', 'n|3. Put that many in the answer']],
      ["Finally put the same number of decimal places in the answer. Check with a quick estimate. If you multiply 0.6 by 0.4, 6 times 4 is 24, and there are 2 decimal places in total. So 0.24.", ['0.6 × 0.4', '6 × 4 = 24', '2 decimal places', 'g|0.24']]]]],
    ex: [
      ['2.5 times 0.12', [
        ["Ignore the points. 25 times 12. 25 times 10 is 250. 25 times 2 is 50. Together that is 300.", ['25 × 12', '25 × 10 = 250', '25 × 2 = 50', '250 + 50 = 300']],
        ["Count the decimal places in the question: 1 in 2.5, 2 in 0.12. That is 3 altogether. So the answer has 3 decimal places: 0.300. That is 0.3.", ['1 + 2 = 3 decimal places', '300 → 0.300', 'g|2.5 × 0.12 = 0.3']]]],
      ['4.7 times 2.3', [
        ["Ignore the points. 47 times 23. 47 times 3 is 141. 47 times 20 is 940. Add them.", ['47 × 3 = 141', '47 × 20 = 940', '141 + 940 = 1081']],
        ["There is 1 decimal place in each number, so 2 in total. 1,081 becomes 10.81. Estimate: 5 times 2 is 10, so the answer is sensible.", ['1 + 1 = 2 decimal places', '1081 → 10.81', 'g|4.7 × 2.3 = 10.81']]]],
      ['0.045 times 0.2', [
        ["Ignore the points. 45 times 2 is 90. There are 3 decimal places in 0.045 and 1 in 0.2. That is 4 places altogether.", ['45 × 2 = 90', '3 + 1 = 4 decimal places']],
        ["90 needs 4 decimal places. We add zeros in front: 0.0090. That is 0.009.", ['90 → 0.0090', 'g|0.045 × 0.2 = 0.009']]]]],
    mist: [
      ['Counting the places wrongly', "Mistake one: not counting the decimal places. Work out 0.3 times 0.2. Wrong: 0.6. 3 times 2 is 6, but there are 2 decimal places in total. So the answer is 0.06.", ['r|0.3 × 0.2 = 0.6 ✗', 'g|0.3 × 0.2 = 0.06 ✓']],
      ['Lining the points up', "Mistake two: lining up the decimal points, as in addition. For multiplying, the points do not need to line up. Multiply as whole numbers, then count the places.", ['n|Adding: line up the points', 'n|Multiplying: do not line up the points']]],
    real: ['In real life', "Fabric costs £2.35 a metre. You need 1.6 metres. Multiply 2.35 by 1.6. 235 times 16 is 3,000, 760. 3 decimal places gives 3.76. So the fabric costs £3.76.", ['n|Fabric costs £2.35 a metre. You need 1.6 metres. What does it cost?', '2.35 × 1.6', '235 × 16 = 3760', 'g|£3.76']],
    turns: [
      { q: 'Work out 0.7 times 0.8.', task: '0.7 × 0.8', say: "Ignore the points. 7 times 8 is 56. There is 1 decimal place in each number, 2 altogether. 56 with 2 decimal places is 0.56.", work: ['7 × 8 = 56', '1 + 1 = 2 decimal places', '56 → 0.56'], ans: ['g|0.56'] },
      { q: 'Work out 1.2 times 0.35.', task: '1.2 × 0.35', say: "Ignore the points. 12 times 35. 12 times 30 is 360. 12 times 5 is 60. Together that is 420. There are 3 decimal places in the question. So 0.420, which is 0.42.", work: ['12 × 35', '12 × 30 = 360', '12 × 5 = 60', '360 + 60 = 420', '1 + 2 = 3 decimal places: 0.420'], ans: ['g|0.42'] },
      { q: 'Ribbon costs £2.35 a metre. How much is 1.6 metres?', say: "Multiply 2.35 by 1.6. Ignore the points: 235 times 16. 235 times 10 is 2,350. 235 times 6 is 1,410. Add them to get 3,760. There are 3 decimal places, so 3.76. The ribbon costs £3.76.", work: ['2.35 × 1.6', '235 × 10 = 2350', '235 × 6 = 1410', '2350 + 1410 = 3760', '3 decimal places: 3.760'], ans: ['g|£3.76'] }],
    rec: ["Multiply as whole numbers, then count the decimal places.", ['Ignore the decimal points', 'Multiply the whole numbers', 'Count the decimal places in the question', 'Put that many in the answer', 'Check with an estimate']]
  });

  fx('How do you divide to three decimal places?', 'how to divide with decimals and round the answer to 3 decimal places.', {
    head: 'Dividing decimals',
    basics: [['Make the divisor a whole number', [
      ["Dividing by a decimal is awkward. So we make the number we are dividing by a whole number. We do this by multiplying both numbers by 10, or 100, or 1,000. Both numbers must be multiplied by the same amount.", ['4.8 ÷ 0.6', '× 10 both: 48 ÷ 6', 'n|Multiply BOTH by the same power of 10']],
      ["The answer does not change, because we scaled both numbers the same way. 48 divided by 6 is easy: 8.", ['48 ÷ 6 = 8', 'g|4.8 ÷ 0.6 = 8']]]]],
    ex: [
      ['7.2 divided by 0.04', [
        ["0.04 needs multiplying by 100 to become 4. So multiply both numbers by 100. 7.2 becomes 720.", ['7.2 ÷ 0.04', '× 100 both', '720 ÷ 4']],
        ["720 divided by 4 is 180. Check: 0.04 goes into 7.2 many times, because it is so small.", ['720 ÷ 4 = 180', 'g|7.2 ÷ 0.04 = 180']]]],
      ['5 divided by 7, to 3 decimal places', [
        ["7 goes into 5 0 times. Put a decimal point and add zeros. 7 goes into 57 times, which makes 49, remainder 1. Then 10: once, remainder 3. Then 30: 4 times, remainder 2. Then 20: twice, remainder 6.", ['5 ÷ 7', '50 ÷ 7 = 7 r 1', '10 ÷ 7 = 1 r 3', '30 ÷ 7 = 4 r 2', '20 ÷ 7 = 2 r 6']],
        ["So far 0.7142. For 3 decimal places we need the fourth digit as the decider. The fourth digit is 2, which is less than 5. So the third digit stays: 0.714.", ['0.7142…', 'Decider = 2: stay the same', 'g|5 ÷ 7 ≈ 0.714 (3 d.p.)']]]],
      ['2.5 divided by 0.3', [
        ["Multiply both by 10. 2.5 becomes 25, and 0.3 becomes 3. 25 divided by 3.", ['2.5 ÷ 0.3', '× 10 both: 25 ÷ 3']],
        ["3 goes into 20-5 8 times, making 24, remainder 1. Then 10: 3 times, remainder 1. The threes go on forever: 8.3333. To 3 decimal places, the decider is 3, so it stays.", ['25 ÷ 3 = 8 r 1', '10 ÷ 3 = 3 r 1', 'g|≈ 8.333 (3 d.p.)']]]]],
    mist: [
      ['Moving the point in one number only', "Mistake one: changing only one of the numbers. Work out 4.8 divided by 0.6. Wrong: 4.8 divided by 6, which is 0.8. You must multiply both numbers by 10. 48 divided by 6 is 8.", ['r|4.8 ÷ 0.6 = 4.8 ÷ 6 = 0.8 ✗', 'g|48 ÷ 6 = 8 ✓']],
      ['Thinking division makes smaller', "Mistake two: expecting the answer to be smaller. Dividing by a number smaller than 1 makes the answer bigger. 6 divided by 0.5 is 12, because there are 12/2 in 6.", ['6 ÷ 0.5 = 12', 'n|Dividing by less than 1 gives a bigger answer']]],
    real: ['In real life', "A jug holds 7.5 litres of juice. Each glass holds 0.25 litres. How many glasses can be filled? Multiply both numbers by 100: 750 divided by 25 is 30 glasses.", ['n|A jug holds 7.5 litres. Each glass holds 0.25 litres. How many glasses can be filled?', '7.5 ÷ 0.25', '750 ÷ 25 = 30', 'g|30 glasses']],
    turns: [
      { q: 'Work out 9.6 divided by 0.8.', task: '9.6 ÷ 0.8', say: "Multiply both numbers by 10. 9.6 becomes 96, 0.8 becomes 8. 96 divided by 8 is 12.", work: ['× 10 both: 96 ÷ 8', '96 ÷ 8 = 12'], ans: ['g|12'] },
      { q: 'Work out 3 divided by 0.07, to 3 decimal places.', task: '3 ÷ 0.07', say: "Multiply both numbers by 100. 3 becomes 300, 0.07 becomes 7. 300 divided by 7 is 42, remainder 6. Then 60 divided by 7 is 8, remainder 4. Then 40 divided by 7 is 5, remainder 5. Then 50 divided by 7 is 7. The next digit is 1, so the decider is 1, and the answer is 42.857.", work: ['× 100 both: 300 ÷ 7', '300 ÷ 7 = 42 r 6', '60 ÷ 7 = 8 r 4', '40 ÷ 7 = 5 r 5', '50 ÷ 7 = 7 r 1: 42.857…'], ans: ['g|≈ 42.857 (3 d.p.)'] },
      { q: 'Work out 4.2 divided by 0.15.', task: '4.2 ÷ 0.15', say: "Multiply both numbers by 100. 4.2 becomes 420. 0.15 becomes 15. 420 divided by 15. 15 times 20 is 300, leaving 120. 15 times 8 is 120. So 28.", work: ['× 100 both: 420 ÷ 15', '15 × 20 = 300', '420 − 300 = 120', '15 × 8 = 120'], ans: ['g|28'] }],
    rec: ["Make the divisor a whole number by multiplying both numbers by the same power of 10.", ['Multiply both numbers by 10, 100 or 1000', 'Divide as normal', 'Add zeros to carry on after the point', 'Look at the 4th digit to round to 3 d.p.', 'Dividing by less than 1 gives a bigger answer']]
  });
})();
