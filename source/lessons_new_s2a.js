/* lessons_new_s2a.js: S2 Watch lessons for topic 821 (number), written in full with L.fx */
(function () {
  'use strict';
  var BT = window.BT; if (!BT || !BT.L || !BT.L.fx) return;
  var L = BT.L, F = BT.F, fx = L.fx;

  fx('How do you round to three decimal places?', 'how to round a number to three decimal places.', {
    head: 'Rounding',
    basics: [['What are decimal places?', [
      ["Decimal places are the digits after the decimal point. To round to three decimal places, we keep exactly three digits after the point. The third digit is the last one we keep.", ['4.3726', 'n|3 decimal places = 3 digits after the point']],
      ["Then we look at the next digit, the fourth one. It is the decider. If the decider is five or more, we round the last digit up. If it is four or less, the last digit stays the same.", ['n|Decider 5 or more: round up', 'n|Decider 4 or less: stay the same']]]]],
    ex: [
      ['4.3726 to three decimal places', [
        ["Count three digits after the point: three, seven, two. That gives four point three seven two. The next digit is six. That is the decider.", ['4.3726', '4.372 | 6', 'n|Decider = 6']],
        ["Six is five or more, so the two goes up by one to a three. We stop after the third digit.", ['2 → 3', 'g|4.3726 ≈ 4.373 (3 d.p.)']]]],
      ['0.04519 to three decimal places', [
        ["Count the digits after the point: zero, four, five. That is zero point zero four five. The next digit is one, so the decider is one.", ['0.04519', '0.045 | 19', 'n|Decider = 1']],
        ["One is less than five, so the five stays the same. The zero at the start counts as a place, so we must not skip it.", ['g|0.04519 ≈ 0.045 (3 d.p.)']]]],
      ['7.0996 to three decimal places', [
        ["Keep three digits: zero, nine, nine. The decider is six, so we round up. The last nine goes up to ten, so we write zero and carry one.", ['7.0996', '7.099 | 6', '9 + 1 = 10: write 0, carry 1']],
        ["The carry changes the nine before it as well. Nine plus one is ten again. We write zero and carry again. Seven point one zero zero. We keep the zeros, because we need three decimal places.", ['0.099 + 0.001 = 0.100', 'g|7.0996 ≈ 7.100 (3 d.p.)']]]]],
    mist: [
      ['Not carrying', "Mistake one: forgetting to carry. Round seven point zero nine nine six to three decimal places. Wrong: seven point zero nine ten. You cannot write ten in one place. Carry it. The answer is seven point one zero zero.", ['r|7.0996 ≈ 7.0910 ✗', 'g|7.0996 ≈ 7.100 ✓']],
      ['Losing the zeros', "Mistake two: dropping the trailing zeros. The question asks for three decimal places, so seven point one zero zero must keep its zeros. Seven point one is a different level of accuracy.", ['r|7.1 ✗ (only 1 d.p.)', 'g|7.100 ✓ (3 d.p.)']]],
    real: ['In real life', "A laboratory balance reads twelve point three four five six seven grams. A scientist writes it to three decimal places, to match the precision of the scales. The fourth digit is five, so we round up. Twelve point three four six grams.", ['12.34567 g', 'g|≈ 12.346 g (3 d.p.)']],
    turns: [
      { q: 'Round eight point two six five four to three decimal places.', say: "Eight point two six five four. We keep three digits after the point, so eight point two six five. The decider is the next digit, which is four. Four is less than five, so the five stays the same. The answer is eight point two six five.", work: ['8.2654', '8.265 | 4', 'Decider = 4', '4 is less than 5: stay the same'], ans: ['g|8.265'] },
      { q: 'Round zero point nine nine nine six to three decimal places.', say: "Keep three digits: zero point nine nine nine. The decider is six, so we round up. Nine plus one is ten, and the carry runs along. Zero point nine nine nine plus zero point zero zero one is one point zero zero zero. The answer is one point zero zero zero.", work: ['0.9996', '0.999 | 6', 'Decider = 6: round up', '0.999 + 0.001 = 1.000'], ans: ['g|1.000'] },
      { q: 'A runner takes twelve point zero four five seven seconds. Write the time to three decimal places.', say: "Twelve point zero four five seven. Keep three digits after the point, twelve point zero four five. The decider is seven, which is five or more. So the five goes up to a six. The time is twelve point zero four six seconds.", work: ['12.0457 s', '12.045 | 7', 'Decider = 7: round up', '5 → 6'], ans: ['g|12.046 s'] }],
    rec: ["Three decimal places means three digits after the point. Look at the fourth digit to decide.", ['Count three digits after the point', 'Decider 5 or more: round up', 'Decider 4 or less: stay the same', 'Carry if a digit reaches ten', 'Keep trailing zeros']]
  });

  fx('Significant figures', 'how to count and round to a number of significant figures.', {
    head: 'Significant figures',
    basics: [['What is a significant figure?', [
      ["Significant figures are the digits that really matter in a number. We start counting at the first digit that is not zero. That first non-zero digit is the first significant figure.", ['4 5 3 0', 'n|Start at the first digit that is not zero']],
      ["Zeros at the very start of a decimal do not count. They only show where the point is. Zeros between other digits do count. Look at zero point zero zero six three. The six is the first significant figure, and the three is the second.", ['0.0063', 'n|Leading zeros: not significant', '6 and 3: 2 significant figures']]]]],
    ex: [
      ['Counting significant figures', [
        ["Count the significant figures in four thousand and five. The four is the first. The zeros in the middle are between digits, so they count. The five is the last. That is four significant figures.", ['4005', '4  0  0  5', 'g|4 significant figures']],
        ["Now zero point zero zero eight zero. The first non-zero digit is eight. The zero after the eight counts, because it is after a significant digit in a decimal. So two significant figures.", ['0.0080', '8  0', 'g|2 significant figures']]]],
      ['Round 46,382 to two significant figures', [
        ["The first two significant figures are four and six. The next digit is three, the decider. Three is less than five, so the six stays. Now the number has five digits, so we must fill the other places with zeros.", ['46382', '46 | 382', 'Decider = 3: stay the same']],
        ["Forty-six thousand, because the place values must stay right. If we wrote forty-six, the number would be completely wrong.", ['g|46,382 ≈ 46,000 (2 s.f.)']]]],
      ['Round 0.007382 to two significant figures', [
        ["The first significant figure is the seven, after the zeros. The two significant figures are seven and three. The decider is eight, so the three goes up to four.", ['0.007382', '0.0073 | 82', 'Decider = 8: round up']],
        ["Zero point zero zero seven four. The leading zeros stay, because they hold the place.", ['3 → 4', 'g|0.007382 ≈ 0.0074 (2 s.f.)']]]]],
    mist: [
      ['Counting the leading zeros', "Mistake one: counting the zeros at the start. Round zero point zero zero four seven to one significant figure. Wrong: zero point zero zero zero, as if the zeros were the figures. The first significant figure is the four. The decider is seven, so round up. Zero point zero zero five.", ['r|0.0047 ≈ 0.000 ✗', 'g|0.0047 ≈ 0.005 ✓ (1 s.f.)']],
      ['Dropping the place-holding zeros', "Mistake two: forgetting to put zeros back in a big number. Round seven thousand eight hundred and fifty to two significant figures. Wrong: seventy-nine. The size is wrong. The answer is seven thousand nine hundred.", ['r|7850 ≈ 79 ✗', 'g|7850 ≈ 7900 ✓ (2 s.f.)']]],
    real: ['In real life', "Scientists and engineers use significant figures to show how precise a measurement is. The distance from the Earth to the Sun is one hundred and forty-nine million, six hundred thousand kilometres. To two significant figures, that is one hundred and fifty million kilometres.", ['149,600,000 km', 'g|≈ 150,000,000 km (2 s.f.)']],
    turns: [
      { q: 'Round three thousand, nine hundred and sixty-one to two significant figures.', say: "The first two significant figures are three and nine. The next digit is six, so the decider is six. Six is five or more, so the nine goes up to ten. That carries, and three becomes four. Four thousand, with zeros to hold the places.", work: ['3961', '39 | 61', 'Decider = 6: round up', '39 + 1 = 40', 'Put the zeros back: 4000'], ans: ['g|4000 (2 s.f.)'] },
      { q: 'Round zero point zero zero five six two to two significant figures.', say: "The first significant figure is the five. The second is six. The next digit is two, which is the decider. Two is less than five, so the six stays. The leading zeros stay as well, so zero point zero zero five six.", work: ['0.00562', '0.0056 | 2', 'Decider = 2: stay the same'], ans: ['g|0.0056 (2 s.f.)'] },
      { q: 'A stadium holds eighty-two thousand, seven hundred and forty-nine people. Round this to one significant figure.', say: "The first significant figure is eight. The next digit is two, which is the decider. Two is less than five, so the eight stays. We fill the rest with zeros. The stadium holds about eighty thousand people.", work: ['82,749', '8 | 2,749', 'Decider = 2: stay the same', 'Fill with zeros: 80,000'], ans: ['g|≈ 80,000 people'] }],
    rec: ["Count from the first digit that is not zero.", ['First significant figure: first non-zero digit', 'Leading zeros do not count', 'Zeros between digits count', 'Look at the next digit to decide', 'Put zeros back to hold the place value']]
  });

  fx('Estimating by rounding to 1 significant figure', 'how to estimate an answer by rounding each number to one significant figure.', {
    head: 'Estimating',
    basics: [['Why estimate?', [
      ["An estimate is a quick answer that is close to the real one. We find it by rounding every number first, then doing an easy calculation. Estimating helps us check that an answer from a calculator is sensible.", ['n|Estimate: round first, then calculate']],
      ["The usual rule is to round each number to one significant figure. Look at the first digit that is not zero, and use the next digit to decide. Four thousand eight hundred and fifty becomes five thousand. Zero point zero three seven becomes zero point zero four.", ['4850 ≈ 5000', '0.037 ≈ 0.04']]]]],
    ex: [
      ['Estimate 4.8 × 21', [
        ["Round each number to one significant figure. Four point eight rounds to five. Twenty-one rounds to twenty.", ['4.8 ≈ 5', '21 ≈ 20']],
        ["Now multiply the rounded numbers. Five times twenty is one hundred. The exact answer is just over one hundred, so the estimate is very close.", ['5 × 20 = 100', 'g|4.8 × 21 ≈ 100']]]],
      ['Estimate 592 ÷ 19.8', [
        ["Round to one significant figure. Five hundred and ninety-two is about six hundred. Nineteen point eight is about twenty.", ['592 ≈ 600', '19.8 ≈ 20']],
        ["Six hundred divided by twenty is thirty. Divide both numbers by ten to make it easier, sixty divided by two, which is thirty.", ['600 ÷ 20 = 60 ÷ 2 = 30', 'g|592 ÷ 19.8 ≈ 30']]]],
      ['Estimate 38.6 × 0.52 ÷ 0.0098', [
        ["Round each number to one significant figure. Thirty-eight point six is forty. Zero point five two is zero point five. Zero point zero zero nine eight is zero point zero one.", ['38.6 ≈ 40', '0.52 ≈ 0.5', '0.0098 ≈ 0.01']],
        ["Forty times zero point five is twenty. Then twenty divided by zero point zero one is two thousand, because dividing by a hundredth is the same as multiplying by one hundred.", ['40 × 0.5 = 20', '20 ÷ 0.01 = 2000', 'g|≈ 2000']]]]],
    mist: [
      ['Rounding to the wrong place', "Mistake one: rounding to the nearest ten when the question wants one significant figure. Estimate three hundred and eighty-four times twelve. Wrong: round to three hundred and eighty and ten. One significant figure means four hundred and ten.", ['r|380 × 10 = 3800 ✗ (not 1 s.f.)', 'g|400 × 10 = 4000 ✓']],
      ['Not checking', "Mistake two: not using the estimate to check. If a calculator gives four thousand six hundred and eight for forty-six times ten point two, the estimate fifty times ten is five hundred. They are very different. Something went wrong, perhaps a decimal point.", ['46 × 10.2 ≈ 50 × 10 = 500', 'r|Calculator: 4608 ✗ (decimal point?)', 'g|46 × 10.2 = 469.2 ✓']]],
    real: ['In real life', "At a supermarket, you buy items costing one pound ninety-nine, three pounds ninety-five and two pounds ten. Round each to the nearest pound: two, four and two. The total is about eight pounds, which helps you check the receipt.", ['£1.99 + £3.95 + £2.10', '2 + 4 + 2 = 8', 'g|≈ £8']],
    turns: [
      { q: 'Estimate thirty-eight times fifty-two by rounding to one significant figure.', say: "Round each number. Thirty-eight is about forty. Fifty-two is about fifty. Forty times fifty is two thousand. So the estimate is two thousand.", work: ['38 ≈ 40', '52 ≈ 50', '40 × 50 = 2000'], ans: ['g|≈ 2000'] },
      { q: 'Estimate seven hundred and eight divided by thirty-one point two.', say: "Round to one significant figure. Seven hundred and eight is about seven hundred. Thirty-one point two is about thirty. Seven hundred divided by thirty is the same as seventy divided by three. That is about twenty-three.", work: ['708 ≈ 700', '31.2 ≈ 30', '700 ÷ 30 = 70 ÷ 3', '70 ÷ 3 ≈ 23'], ans: ['g|≈ 23'] },
      { q: 'A bag of rice costs one pound eighty-nine. Estimate the cost of nineteen bags by rounding.', say: "Round the price to two pounds and the number of bags to twenty. Two pounds times twenty is forty pounds. The exact cost is a little less than that, because we rounded the price up. About forty pounds.", work: ['£1.89 ≈ £2', '19 ≈ 20', '2 × 20 = 40'], ans: ['g|≈ £40'] }],
    rec: ["An estimate is a quick, sensible answer. Round each number to one significant figure and calculate.", ['Round every number to 1 s.f.', 'Calculate with the rounded numbers', 'Use it to check your answer', 'The estimate should be close to the exact answer']]
  });

})();
