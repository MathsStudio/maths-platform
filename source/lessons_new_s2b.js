/* lessons_new_s2b.js: S2 topic 821, negatives and decimals */
(function () {
  'use strict';
  var BT = window.BT; if (!BT || !BT.L || !BT.L.fx) return;
  var L = BT.L, F = BT.F, fx = L.fx, nl = function (a, b, c, d) { return 'h|' + F.numline(a, b, c, d); };

  fx('How do you add and subtract positive and negative numbers?', 'how to add and subtract positive and negative numbers using the number line and the signs.', {
    head: 'Positive and negative numbers',
    basics: [['The number line', [
      ["Negative numbers are the numbers below zero. On a number line, positive numbers are to the right of zero and negative numbers are to the left. The further left, the smaller the number.", [nl(-6, 6), 'n|Right = bigger, left = smaller']],
      ["Adding a positive number moves us right. Taking away a positive number moves us left. And there is a surprise: taking away a negative number moves us right, because two minus signs make a plus.", ['+ positive: move right', '− positive: move left', '− negative: move right (− − = +)']]]]],
    ex: [
      ['Three add negative five', [
        ["Start at three on the number line. Adding a negative number is the same as taking away. So we move five steps to the left.", [nl(-6, 6, 3, -2), '3 + (−5) = 3 − 5']],
        ["Three take away five lands on minus two. We pass through zero on the way.", ['3 − 5 = −2', 'g|3 + (−5) = −2']]]],
      ['Minus four take away three', [
        ["Start at minus four. We take away three, so we move three steps left.", [nl(-8, 2, -4, -7), '−4 − 3']],
        ["Minus four then three more to the left is minus seven. When both numbers are negative, we add the sizes and keep the minus sign.", ['4 + 3 = 7', 'g|−4 − 3 = −7']]]],
      ['Five take away negative two', [
        ["Take away a negative is the same as add a positive. The two minus signs next to each other turn into a plus. So five minus negative two is five plus two.", ['5 − (−2)', '− (−2) becomes + 2']],
        ["Five plus two is seven. We moved right, not left.", ['5 + 2 = 7', 'g|5 − (−2) = 7']]]],
      ['Minus six take away negative nine', [
        ["Two minus signs together make a plus. So this is minus six plus nine.", ['−6 − (−9)', '= −6 + 9']],
        ["From minus six, move nine steps right. We pass zero and land on three. Nine take away six gives the size, and the answer is positive because nine is bigger.", ['9 − 6 = 3', 'g|−6 − (−9) = 3']]]]],
    mist: [
      ['Ignoring the double sign', "Mistake one: treating two minus signs as one. Work out five minus negative two. Wrong: five minus two is three. But minus negative two is plus two. The answer is seven.", ['r|5 − (−2) = 3 ✗', 'g|5 − (−2) = 5 + 2 = 7 ✓']],
      ['Adding the sizes when signs differ', "Mistake two: adding all the digits. Work out minus three plus eight. Wrong: minus eleven. Start at minus three and move eight right. That is plus five.", ['r|−3 + 8 = −11 ✗', 'g|−3 + 8 = 5 ✓']]],
    real: ['In real life', "At night the temperature is minus three degrees. By midday it has risen by eight degrees. Minus three plus eight is five degrees. In a bank account, an overdraft of forty pounds is minus forty. Paying in twenty-five pounds gives minus fifteen.", ['−3 + 8 = 5 °C', '−40 + 25 = −15 (£)']],
    turns: [
      { q: 'Work out minus seven plus four.', task: '−7 + 4', say: "Start at minus seven. Adding four moves us four steps to the right. Minus seven plus four lands on minus three. We are still below zero.", work: ['−7 + 4', '7 − 4 = 3 (the sizes)', 'The bigger size is negative, so the answer is −3'], fig: nl(-8, 2, -7, -3), ans: ['g|−7 + 4 = −3'] },
      { q: 'Work out three minus negative six.', task: '3 − (−6)', say: "Two minus signs make a plus. So three minus negative six is three plus six. That is nine.", work: ['3 − (−6)', '− (−6) becomes + 6', '3 + 6 = 9'], ans: ['g|3 − (−6) = 9'] },
      { q: 'The temperature falls from four degrees to minus six degrees. By how many degrees did it fall?', say: "We want the difference between four and minus six. That is four minus negative six. Two minus signs make a plus, so four plus six. The temperature fell by ten degrees.", work: ['4 − (−6)', '= 4 + 6', '= 10'], fig: nl(-8, 6, 4, -6), ans: ['g|It fell by 10 °C'] }],
    rec: ["Use the number line, and watch the signs.", ['Right = bigger, left = smaller', 'Add a positive: move right', 'Take away a positive: move left', 'Take away a negative = add a positive', 'Different signs: subtract the sizes']]
  });

  fx('How do you multiply and divide positive and negative numbers?', 'the sign rules for multiplying and dividing positive and negative numbers.', {
    head: 'Multiplying and dividing negatives',
    basics: [['The sign rules', [
      ["Multiplying and dividing follow the same simple rules. First ignore the signs and do the calculation. Then decide the sign of the answer.", ['n|1. Calculate with the sizes', 'n|2. Decide the sign']],
      ["If the two signs are the same, the answer is positive. If the two signs are different, the answer is negative. This works for multiplication and for division.", ['same signs: positive', 'different signs: negative', '(+)(+) = +   (−)(−) = +', '(+)(−) = −   (−)(+) = −']]]]],
    ex: [
      ['Six times negative four', [
        ["Ignore the signs. Six times four is twenty-four. The signs are different, a positive and a negative, so the answer is negative.", ['6 × 4 = 24', 'signs different: negative']],
        ["Six times negative four is minus twenty-four.", ['g|6 × (−4) = −24']]]],
      ['Negative five times negative seven', [
        ["Ignore the signs. Five times seven is thirty-five. Both numbers are negative. The signs are the same, so the answer is positive.", ['5 × 7 = 35', 'signs the same: positive']],
        ["Negative five times negative seven is plus thirty-five.", ['g|(−5) × (−7) = 35']]]],
      ['Division', [
        ["Minus thirty-six divided by nine. Thirty-six divided by nine is four. The signs are different, so the answer is negative.", ['−36 ÷ 9', '36 ÷ 9 = 4', 'g|−36 ÷ 9 = −4']],
        ["Minus forty-eight divided by minus six. Forty-eight divided by six is eight. The signs are the same, so the answer is positive.", ['−48 ÷ (−6)', '48 ÷ 6 = 8', 'g|−48 ÷ (−6) = 8']]]],
      ['More than two numbers', [
        ["Work out negative two times three times negative five. Do it in order. Negative two times three is minus six. Then minus six times minus five is plus thirty.", ['(−2) × 3 = −6', '(−6) × (−5) = 30', 'g|(−2) × 3 × (−5) = 30']]]]],
    mist: [
      ['Negative times negative', "Mistake one: thinking negative times negative is negative. Work out negative three times negative four. Wrong: minus twelve. The signs are the same, so the answer is plus twelve.", ['r|(−3) × (−4) = −12 ✗', 'g|(−3) × (−4) = 12 ✓']],
      ['Squaring a negative', "Mistake two: a negative number squared. Negative five squared means negative five times negative five. That is plus twenty-five. A square is never negative.", ['r|(−5)² = −25 ✗', 'g|(−5)² = (−5) × (−5) = 25 ✓']]],
    real: ['In real life', "You owe your friend fifteen pounds each week for four weeks. Each week is minus fifteen, so four weeks is four times minus fifteen, which is minus sixty. The temperature on a mountain falls three degrees every hour. After five hours, the change is five times minus three, which is minus fifteen degrees.", ['4 × (−15) = −60 (£)', '5 × (−3) = −15 (°C)']],
    turns: [
      { q: 'Work out negative eight times five.', task: '(−8) × 5', say: "Ignore the signs. Eight times five is forty. The signs are different, so the answer is negative. The answer is minus forty.", work: ['8 × 5 = 40', 'Different signs: negative'], ans: ['g|(−8) × 5 = −40'] },
      { q: 'Work out negative twelve divided by negative three.', task: '(−12) ÷ (−3)', say: "Ignore the signs. Twelve divided by three is four. Both numbers are negative, so the signs are the same. The answer is positive four.", work: ['12 ÷ 3 = 4', 'Same signs: positive'], ans: ['g|(−12) ÷ (−3) = 4'] },
      { q: 'Work out negative four times negative two times negative three.', task: '(−4) × (−2) × (−3)', say: "Take it in two steps. Negative four times negative two is plus eight. Then plus eight times negative three is minus twenty-four. Three negative signs make a negative answer.", work: ['(−4) × (−2) = 8', '8 × (−3) = −24'], ans: ['g|−24'] }],
    rec: ["Calculate with the sizes, then decide the sign.", ['Same signs: positive answer', 'Different signs: negative answer', 'Works for × and ÷', '(−5)² = 25, never −25', 'Do more than two numbers in steps']]
  });

  fx('How do you multiply to three decimal places?', 'how to multiply decimals with up to three decimal places.', {
    head: 'Multiplying decimals',
    basics: [['The method', [
      ["To multiply decimals, first ignore the decimal points and multiply the numbers as if they were whole numbers. Then count how many digits are after the decimal points in the question, altogether.", ['n|1. Ignore the points: multiply', 'n|2. Count the decimal places in the question', 'n|3. Put that many in the answer']],
      ["Finally put the same number of decimal places in the answer. Check with a quick estimate. If you multiply zero point six by zero point four, six times four is twenty-four, and there are two decimal places in total. So zero point two four.", ['0.6 × 0.4', '6 × 4 = 24', '2 decimal places', 'g|0.24']]]]],
    ex: [
      ['Two point five times zero point one two', [
        ["Ignore the points. Twenty-five times twelve. Twenty-five times ten is two hundred and fifty. Twenty-five times two is fifty. Together that is three hundred.", ['25 × 12', '25 × 10 = 250', '25 × 2 = 50', '250 + 50 = 300']],
        ["Count the decimal places in the question: one in two point five, two in zero point one two. That is three altogether. So the answer has three decimal places: zero point three zero zero. That is zero point three.", ['1 + 2 = 3 decimal places', '300 → 0.300', 'g|2.5 × 0.12 = 0.3']]]],
      ['Four point seven times two point three', [
        ["Ignore the points. Forty-seven times twenty-three. Forty-seven times three is one hundred and forty-one. Forty-seven times twenty is nine hundred and forty. Add them.", ['47 × 3 = 141', '47 × 20 = 940', '141 + 940 = 1081']],
        ["There is one decimal place in each number, so two in total. One thousand and eighty-one becomes ten point eight one. Estimate: five times two is ten, so the answer is sensible.", ['1 + 1 = 2 decimal places', '1081 → 10.81', 'g|4.7 × 2.3 = 10.81']]]],
      ['Zero point zero four five times zero point two', [
        ["Ignore the points. Forty-five times two is ninety. There are three decimal places in zero point zero four five and one in zero point two. That is four places altogether.", ['45 × 2 = 90', '3 + 1 = 4 decimal places']],
        ["Ninety needs four decimal places. We add zeros in front: zero point zero zero nine zero. That is zero point zero zero nine.", ['90 → 0.0090', 'g|0.045 × 0.2 = 0.009']]]]],
    mist: [
      ['Counting the places wrongly', "Mistake one: not counting the decimal places. Work out zero point three times zero point two. Wrong: zero point six. Three times two is six, but there are two decimal places in total. So the answer is zero point zero six.", ['r|0.3 × 0.2 = 0.6 ✗', 'g|0.3 × 0.2 = 0.06 ✓']],
      ['Lining the points up', "Mistake two: lining up the decimal points, as in addition. For multiplying, the points do not need to line up. Multiply as whole numbers, then count the places.", ['n|Adding: line up the points', 'n|Multiplying: do not line up the points']]],
    real: ['In real life', "Fabric costs two pounds thirty-five a metre. You need one point six metres. Multiply two point three five by one point six. Two hundred and thirty-five times sixteen is three thousand, seven hundred and sixty. Three decimal places gives three point seven six. So the fabric costs three pounds seventy-six.", ['2.35 × 1.6', '235 × 16 = 3760', 'g|£3.76']],
    turns: [
      { q: 'Work out zero point seven times zero point eight.', task: '0.7 × 0.8', say: "Ignore the points. Seven times eight is fifty-six. There is one decimal place in each number, two altogether. Fifty-six with two decimal places is zero point five six.", work: ['7 × 8 = 56', '1 + 1 = 2 decimal places', '56 → 0.56'], ans: ['g|0.56'] },
      { q: 'Work out one point two times zero point three five.', task: '1.2 × 0.35', say: "Ignore the points. Twelve times thirty-five. Twelve times thirty is three hundred and sixty. Twelve times five is sixty. Together that is four hundred and twenty. There are three decimal places in the question. So zero point four two zero, which is zero point four two.", work: ['12 × 35', '12 × 30 = 360', '12 × 5 = 60', '360 + 60 = 420', '1 + 2 = 3 decimal places: 0.420'], ans: ['g|0.42'] },
      { q: 'Ribbon costs two pounds thirty-five a metre. How much is one point six metres?', say: "Multiply two point three five by one point six. Ignore the points: two hundred and thirty-five times sixteen. Two hundred and thirty-five times ten is two thousand three hundred and fifty. Two hundred and thirty-five times six is one thousand four hundred and ten. Add them to get three thousand seven hundred and sixty. There are three decimal places, so three point seven six. The ribbon costs three pounds seventy-six.", work: ['2.35 × 1.6', '235 × 10 = 2350', '235 × 6 = 1410', '2350 + 1410 = 3760', '3 decimal places: 3.760'], ans: ['g|£3.76'] }],
    rec: ["Multiply as whole numbers, then count the decimal places.", ['Ignore the decimal points', 'Multiply the whole numbers', 'Count the decimal places in the question', 'Put that many in the answer', 'Check with an estimate']]
  });

  fx('How do you divide to three decimal places?', 'how to divide with decimals and round the answer to three decimal places.', {
    head: 'Dividing decimals',
    basics: [['Make the divisor a whole number', [
      ["Dividing by a decimal is awkward. So we make the number we are dividing by a whole number. We do this by multiplying both numbers by ten, or a hundred, or a thousand. Both numbers must be multiplied by the same amount.", ['4.8 ÷ 0.6', '× 10 both: 48 ÷ 6', 'n|Multiply BOTH by the same power of 10']],
      ["The answer does not change, because we scaled both numbers the same way. Forty-eight divided by six is easy: eight.", ['48 ÷ 6 = 8', 'g|4.8 ÷ 0.6 = 8']]]]],
    ex: [
      ['Seven point two divided by zero point zero four', [
        ["Zero point zero four needs multiplying by one hundred to become four. So multiply both numbers by one hundred. Seven point two becomes seven hundred and twenty.", ['7.2 ÷ 0.04', '× 100 both', '720 ÷ 4']],
        ["Seven hundred and twenty divided by four is one hundred and eighty. Check: zero point zero four goes into seven point two many times, because it is so small.", ['720 ÷ 4 = 180', 'g|7.2 ÷ 0.04 = 180']]]],
      ['Five divided by seven, to three decimal places', [
        ["Seven goes into five zero times. Put a decimal point and add zeros. Seven goes into fifty seven times, which makes forty-nine, remainder one. Then ten: once, remainder three. Then thirty: four times, remainder two. Then twenty: twice, remainder six.", ['5 ÷ 7', '50 ÷ 7 = 7 r 1', '10 ÷ 7 = 1 r 3', '30 ÷ 7 = 4 r 2', '20 ÷ 7 = 2 r 6']],
        ["So far zero point seven one four two. For three decimal places we need the fourth digit as the decider. The fourth digit is two, which is less than five. So the third digit stays: zero point seven one four.", ['0.7142…', 'Decider = 2: stay the same', 'g|5 ÷ 7 ≈ 0.714 (3 d.p.)']]]],
      ['Two point five divided by zero point three', [
        ["Multiply both by ten. Two point five becomes twenty-five, and zero point three becomes three. Twenty-five divided by three.", ['2.5 ÷ 0.3', '× 10 both: 25 ÷ 3']],
        ["Three goes into twenty-five eight times, making twenty-four, remainder one. Then ten: three times, remainder one. The threes go on forever: eight point three three three three. To three decimal places, the decider is three, so it stays.", ['25 ÷ 3 = 8 r 1', '10 ÷ 3 = 3 r 1', 'g|≈ 8.333 (3 d.p.)']]]]],
    mist: [
      ['Moving the point in one number only', "Mistake one: changing only one of the numbers. Work out four point eight divided by zero point six. Wrong: four point eight divided by six, which is zero point eight. You must multiply both numbers by ten. Forty-eight divided by six is eight.", ['r|4.8 ÷ 0.6 = 4.8 ÷ 6 = 0.8 ✗', 'g|48 ÷ 6 = 8 ✓']],
      ['Thinking division makes smaller', "Mistake two: expecting the answer to be smaller. Dividing by a number smaller than one makes the answer bigger. Six divided by zero point five is twelve, because there are twelve halves in six.", ['6 ÷ 0.5 = 12', 'n|Dividing by less than 1 gives a bigger answer']]],
    real: ['In real life', "A jug holds seven point five litres of juice. Each glass holds zero point two five litres. How many glasses can be filled? Multiply both numbers by one hundred: seven hundred and fifty divided by twenty-five is thirty glasses.", ['7.5 ÷ 0.25', '750 ÷ 25 = 30', 'g|30 glasses']],
    turns: [
      { q: 'Work out nine point six divided by zero point eight.', task: '9.6 ÷ 0.8', say: "Multiply both numbers by ten. Nine point six becomes ninety-six, zero point eight becomes eight. Ninety-six divided by eight is twelve.", work: ['× 10 both: 96 ÷ 8', '96 ÷ 8 = 12'], ans: ['g|12'] },
      { q: 'Work out three divided by zero point zero seven, to three decimal places.', task: '3 ÷ 0.07', say: "Multiply both numbers by one hundred. Three becomes three hundred, zero point zero seven becomes seven. Three hundred divided by seven is forty-two, remainder six. Then sixty divided by seven is eight, remainder four. Then forty divided by seven is five, remainder five. Then fifty divided by seven is seven. The next digit is one, so the decider is one, and the answer is forty-two point eight five seven.", work: ['× 100 both: 300 ÷ 7', '300 ÷ 7 = 42 r 6', '60 ÷ 7 = 8 r 4', '40 ÷ 7 = 5 r 5', '50 ÷ 7 = 7 r 1: 42.857…'], ans: ['g|≈ 42.857 (3 d.p.)'] },
      { q: 'Work out four point two divided by zero point one five.', task: '4.2 ÷ 0.15', say: "Multiply both numbers by one hundred. Four point two becomes four hundred and twenty. Zero point one five becomes fifteen. Four hundred and twenty divided by fifteen. Fifteen times twenty is three hundred, leaving one hundred and twenty. Fifteen times eight is one hundred and twenty. So twenty-eight.", work: ['× 100 both: 420 ÷ 15', '15 × 20 = 300', '420 − 300 = 120', '15 × 8 = 120'], ans: ['g|28'] }],
    rec: ["Make the divisor a whole number by multiplying both numbers by the same power of ten.", ['Multiply both numbers by 10, 100 or 1000', 'Divide as normal', 'Add zeros to carry on after the point', 'Look at the 4th digit to round to 3 d.p.', 'Dividing by less than 1 gives a bigger answer']]
  });
})();
