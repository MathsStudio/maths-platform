/* story_p5a.js: teacher story lessons for P5, part A: Place value and rounding (501) and The four operations (502). */
(function () {
  'use strict';
  var BT = window.BT; if (!BT || !BT.story) return;
  var V = BT.sv, NL = BT.NL;
  var SC = function (h, sub, steps) { return { h: h, sub: sub, steps: steps }; };
  var st = function (say, html) { return { say: say, html: html || '' }; };

  /* ======================= 501 PLACE VALUE AND ROUNDING ======================= */
  var pv = {
    title: 'What is a digit really worth?', goal: 'how the place of a digit decides its value.',
    scenes: [
      SC('Place value', 'What is a digit really worth?', [
        st("Hello, and welcome! Today we'll meet one of the cleverest ideas in maths. It's called place value.", V.big('4,372')),
        st("Don't worry if it sounds big. We'll start right at the beginning, with a story.")]),
      SC('A story about bundling', 'Why do we put digits in columns?', [
        st("Long ago, people counted with sticks. When the pile got big, they tied ten sticks into one bundle called a ten.", V.sticks(10, 'var(--accent)', true) + V.eq('10 ones = 1 ten', 'g')),
        st("Then ten bundles of ten were tied into a bigger bundle, called a hundred. Each new place is worth ten of the one before.", V.sticks(10, 'var(--good)', true) + V.eq('10 tens = 1 hundred'))]),
      SC('The place value chart', '4,372 people at a football match', [
        st("Here is the crowd at a football match: four thousand, three hundred and seventy-two. Each digit sits in its own column.",
          V.cols([V.chip('Thousands', 'b') + V.card('4', 'b'), V.chip('Hundreds', 'g') + V.card('3', 'g'), V.chip('Tens', 'r') + V.card('7', 'r'), V.chip('Ones', 'y') + V.card('2', 'y')])),
        st("The 4 is in the thousands column, so it is worth four thousand. The 3 is in the hundreds, so it is worth three hundred.",
          V.cols([V.eq('4,000', 'b'), V.eq('300', 'g'), '', ''])),
        st("The 7 is worth seventy, and the 2 is just two. Add them all up and you get four thousand, three hundred and seventy-two.",
          V.cols(['', '', V.eq('70', 'r'), V.eq('2', 'y')]) + V.eq('4,000 + 300 + 70 + 2 = 4,372'))]),
      SC('Each column is 10 times bigger', 'One place left is times ten. One place right is divided by ten.', [
        st("Here's the secret. Every column is ten times bigger than the one on its right: ones, tens, hundreds, thousands.", V.cols([V.card('1'), V.card('10'), V.card('100'), V.card('1,000')])),
        st("So the digit 5 can be worth 5, or 50, or 500, or 5,000. The place decides the value!", V.cards(['5', '50', '500', '5,000'], ['b', 'g', 'r', 'y']))]),
      SC('Zero holds the place', 'Why is 4,050 not the same as 45?', [
        st("Zero is a place holder. In four thousand and fifty, the zeros say: no hundreds, and no ones. They keep the 4 and the 5 in the right columns.", V.tbl([['4', '0', '5', '0']], ['Thousands', 'Hundreds', 'Tens', 'Ones'])),
        st("Take the zeros away and everything slides over. Forty-five is a much smaller number!", V.tbl([['', '', '4', '5']], ['Thousands', 'Hundreds', 'Tens', 'Ones']) + V.eq('4,050 is not 45', 'r'))]),
      SC('Let’s recap', '', [
        st("Great work! The place a digit sits in tells you its value. Each column is ten times bigger than the one on its right. And zero holds the place so the other digits stay put. Now let's look at tiny parts of a whole.",
          V.list(['The place decides the value', 'Each column is 10 times bigger', 'Zero holds the place']))])
    ]
  };

  var dec = {
    title: 'Tenths and hundredths', goal: 'how decimals show parts of a whole.',
    scenes: [
      SC('Slicing one whole', 'A chocolate bar cut into 10 equal pieces', [
        st("Imagine a chocolate bar cut into ten equal pieces. One piece is one tenth.", BT.bar(1, 10, 'One of ten equal parts shaded') + V.eq('1 tenth = 1/10 = 0.1', 'b')),
        st("Three pieces make three tenths. We write that as zero point three.", BT.bar(3, 10, 'Three of ten equal parts shaded') + V.eq('3 tenths = 3/10 = 0.3', 'b')),
        st("The little dot is the decimal point. It shows where the whole numbers end and the parts begin.", V.cards(['0', '.', '3'], ['g', 'r', 'b']))]),
      SC('Even smaller: hundredths', 'Cut each tenth into 10 tiny pieces', [
        st("Now cut each tenth into ten tiny pieces. The whole is cut into one hundred pieces, so each tiny piece is one hundredth.", V.dots(10, 10, 'var(--accent)', 1)),
        st("One hundredth is written zero point zero one. Seven hundredths is zero point zero seven.", V.eq('1 hundredth = 1/100 = 0.01', 'b') + V.eq('7 hundredths = 0.07', 'g'))]),
      SC('The decimal place value chart', 'Meet the number 3.47', [
        st("Look at the number three point four seven. The 3 is in the ones column, so it is three whole ones.", V.cols([V.chip('Ones', 'y') + V.card('3', 'y'), V.chip('.', 'r') + V.card('.', 'r'), V.chip('Tenths', 'b') + V.card('4', 'b'), V.chip('Hundredths', 'g') + V.card('7', 'g')])),
        st("The 4 is four tenths, which is zero point four. The 7 is seven hundredths, which is zero point zero seven.", V.eq('3 + 0.4 + 0.07 = 3.47'))]),
      SC('Which is bigger?', '0.5 or 0.45?', [
        st("Careful! Which is bigger, zero point five or zero point four five? Many people think forty-five must be bigger.", V.cards(['0.5', '0.45'], ['b', 'g'])),
        st("Line up the places. Zero point five is five tenths, which is the same as fifty hundredths. That is more than forty-five hundredths.", V.tbl([['0', '5', '0'], ['0', '4', '5']], ['Ones', 'Tenths', 'Hundredths'])),
        st("So zero point five is bigger. A longer decimal is not always a bigger number. Always compare the places from the left.", V.rule('Compare the digits from the left, place by place.'))])
    ]
  };

  var rnd = {
    title: 'Rounding numbers', goal: 'how to round to the nearest 10 and 100.',
    scenes: [
      SC('Why do we round?', 'Sometimes a nearby number is easier', [
        st("A newspaper says four thousand, three hundred and seventy-two fans came to the match. But if you tell a friend, you would say about four thousand four hundred.", V.cards(['4,372', '≈ 4,400'], ['b', 'g'])),
        st("That is rounding. We swap a number for a nearby one that is easier to use. The wiggly equals sign means about.", V.eq('about the same as: ≈', 'b'))]),
      SC('Rounding to the nearest 10', 'Round 47', [
        st("Let's round forty-seven to the nearest ten. Look at the number line. Forty-seven sits between forty and fifty.", NL(40, 50, { lab: 5, tick: 1, marks: [[47, 2]] })),
        st("Is it closer to forty or to fifty? It is only three steps from fifty, but seven steps from forty. So forty-seven rounds up to fifty.", NL(40, 50, { lab: 5, tick: 1, marks: [[47, 2], [50, 135]] }) + V.eq('47 → 50', 'g'))]),
      SC('The 5 rule', 'Look at the digit next door', [
        st("Here is a shortcut. To round to the nearest ten, look at the digit next door, in the ones place.", V.cards(['4', '7'], ['b', 'r']) + V.note('tens | ones')),
        st("If it is 5 or more, round up. If it is 4 or less, stay the same. Seven is more than five, so we round up. Twenty-three has a 3 next door, so it stays at twenty.", V.rule('5 or more: round up. 4 or less: stay the same.') + V.eq('23 → 20 and 47 → 50')),
        st("What about exactly five? Thirty-five is exactly halfway. We agree to round up, so thirty-five becomes forty.", V.eq('35 → 40', 'g'))]),
      SC('Rounding to the nearest 100', 'Round 4,372', [
        st("Now let's round four thousand, three hundred and seventy-two to the nearest hundred. Which hundreds is it between?", NL(4300, 4400, { lab: 50, tick: 10, marks: [[4372, 2]] })),
        st("The digit next door is in the tens place. It is a 7, so we round up to four thousand, four hundred.", V.cards(['4,3', '7', '2'], ['b', 'r', 'y']) + V.eq('4,372 → 4,400', 'g'))]),
      SC('Let’s recap', '', [
        st("Great! To round, find the place you are rounding to, look at the digit next door, and use the rule: five or more, round up. Four or less, stay the same.", V.list(['Look at the digit next door', '5 or more: round up', '4 or less: stay the same']))])
    ]
  };

  var neg = {
    title: 'Numbers below zero', goal: 'what negative numbers are and how to order them.',
    scenes: [
      SC('A very cold night', 'Temperatures below zero', [
        st("It is a freezing night in Scotland. The temperature starts at three degrees, then it falls. Two degrees, one degree, and then zero, which is when water freezes.", NL(-5, 5, { lab: 1, tick: 1, marks: [[3, 2], [0, 135]] })),
        st("It keeps falling. Below zero, the temperature goes minus one, minus two, minus three. Numbers below zero are called negative numbers.", NL(-5, 5, { lab: 1, tick: 1, marks: [[-3, 2], [0, 135]] }) + V.eq('−1, −2, −3 are negative numbers', 'b'))]),
      SC('The number line', 'Zero is in the middle', [
        st("On a number line, zero sits in the middle. Positive numbers go to the right. Negative numbers go to the left.", NL(-10, 10, { lab: 2, tick: 1, marks: [[0, 135]] })),
        st("The further left you go, the smaller the number. So minus eight is smaller than minus two.", NL(-10, 10, { lab: 2, tick: 1, marks: [[-8, 2], [-2, 30]] }) + V.eq('−8 is smaller than −2', 'g'))]),
      SC('Which is colder?', 'Ordering negative numbers', [
        st("Which is colder, minus three degrees or minus seven degrees? Minus seven is further below zero, so it is colder.", V.cards(['−3 °C', '−7 °C'], ['b', 'r'])),
        st("Let's put these in order, smallest first: minus six, two, minus one, zero. The negatives come first, and the one furthest from zero is the smallest.", V.cards(['−6', '−1', '0', '2'], ['r', 'r', 'g', 'b'])),
        st("So smallest to biggest is minus six, minus one, zero, two.", V.rule('Smallest is furthest left on the number line.'))]),
      SC('Counting back past zero', '', [
        st("Let's count back from four in steps of two. Four, two, zero, minus two, minus four. We just keep going down, right past zero.", NL(-6, 6, { lab: 2, tick: 1, jumps: [[4, 2, '−2'], [2, 0, '−2'], [0, -2, '−2'], [-2, -4, '−2']] })),
        st("Well done. Negative numbers are just the numbers below zero, and the number line helps us see them.", V.list(['Negatives are below zero', 'Further left means smaller', 'Count back past zero']))])
    ]
  };

  BT.story(501, 'Watch', [pv, dec, rnd, neg]);
})();
