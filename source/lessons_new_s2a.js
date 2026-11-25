/* lessons_new_s2a.js: S2 Watch lessons for topic 821 (number), written in full with L.fx */
(function () {
  'use strict';
  var BT = window.BT; if (!BT || !BT.L || !BT.L.fx) return;
  var L = BT.L, F = BT.F, fx = L.fx;

  fx('How do you round to three decimal places?', 'how to round a number to 3 decimal places.', {
    head: 'Rounding',
    basics: [['What are decimal places?', [
      ["Decimal places are the digits after the decimal point. To round to 3 decimal places, we keep exactly 3 digits after the point. The third digit is the last 1 we keep.", ['4.3726', 'n|3 decimal places = 3 digits after the point']],
      ["Then we look at the next digit, the fourth 1. It is the decider. If the decider is 5 or more, we round the last digit up. If it is 4 or less, the last digit stays the same.", ['n|Decider 5 or more: round up', 'n|Decider 4 or less: stay the same']]]]],
    ex: [
      ['4.3726 to 3 decimal places', [
        ["Count 3 digits after the point: 3, 7, 2. That gives 4.372. The next digit is 6. That is the decider.", ['4.3726', '4.372 | 6', 'n|Decider = 6']],
        ["6 is 5 or more, so the 2 goes up by 1 to a 3. We stop after the third digit.", ['2 → 3', 'g|4.3726 ≈ 4.373 (3 d.p.)']]]],
      ['0.04519 to 3 decimal places', [
        ["Count the digits after the point: 0, 4, 5. That is 0.045. The next digit is 1, so the decider is 1.", ['0.04519', '0.045 | 19', 'n|Decider = 1']],
        ["1 is less than 5, so the 5 stays the same. The 0 at the start counts as a place, so we must not skip it.", ['g|0.04519 ≈ 0.045 (3 d.p.)']]]],
      ['7.0996 to 3 decimal places', [
        ["Keep 3 digits: 0, 9, 9. The decider is 6, so we round up. The last 9 goes up to 10, so we write 0 and carry 1.", ['7.0996', '7.099 | 6', '9 + 1 = 10: write 0, carry 1']],
        ["The carry changes the 9 before it as well. 9 plus 1 is 10 again. We write 0 and carry again. 7.100. We keep the zeros, because we need 3 decimal places.", ['0.099 + 0.001 = 0.100', 'g|7.0996 ≈ 7.100 (3 d.p.)']]]]],
    mist: [
      ['Not carrying', "Mistake one: forgetting to carry. Round 7.0996 to 3 decimal places. Wrong: 7.09 10. You cannot write 10 in 1 place. Carry it. The answer is 7.100.", ['r|7.0996 ≈ 7.0910 ✗', 'g|7.0996 ≈ 7.100 ✓']],
      ['Losing the zeros', "Mistake two: dropping the trailing zeros. The question asks for 3 decimal places, so 7.100 must keep its zeros. 7.1 is a different level of accuracy.", ['r|7.1 ✗ (only 1 d.p.)', 'g|7.100 ✓ (3 d.p.)']]],
    real: ['In real life', "A laboratory balance reads 12.34567 grams. A scientist writes it to 3 decimal places, to match the precision of the scales. The fourth digit is 5, so we round up. 12.346 grams.", ['12.34567 g', 'g|≈ 12.346 g (3 d.p.)']],
    turns: [
      { q: 'Round 8.2654 to 3 decimal places.', say: "8.2654. We keep 3 digits after the point, so 8.265. The decider is the next digit, which is 4. 4 is less than 5, so the 5 stays the same. The answer is 8.265.", work: ['8.2654', '8.265 | 4', 'Decider = 4', '4 is less than 5: stay the same'], ans: ['g|8.265'] },
      { q: 'Round 0.9996 to 3 decimal places.', say: "Keep 3 digits: 0.999. The decider is 6, so we round up. 9 plus 1 is 10, and the carry runs along. 0.999 plus 0.001 is 1.000. The answer is 1.000.", work: ['0.9996', '0.999 | 6', 'Decider = 6: round up', '0.999 + 0.001 = 1.000'], ans: ['g|1.000'] },
      { q: 'A runner takes 12.0457 seconds. Write the time to 3 decimal places.', say: "12.0457. Keep 3 digits after the point, 12.045. The decider is 7, which is 5 or more. So the 5 goes up to a 6. The time is 12.046 seconds.", work: ['12.0457 s', '12.045 | 7', 'Decider = 7: round up', '5 → 6'], ans: ['g|12.046 s'] }],
    rec: ["3 decimal places means 3 digits after the point. Look at the fourth digit to decide.", ['Count three digits after the point', 'Decider 5 or more: round up', 'Decider 4 or less: stay the same', 'Carry if a digit reaches 10', 'Keep trailing zeros']]
  });

  fx('Significant figures', 'how to count and round to a number of significant figures.', {
    head: 'Significant figures',
    basics: [['What is a significant figure?', [
      ["Significant figures are the digits that really matter in a number. We start counting at the first digit that is not 0. That first non-0 digit is the first significant figure.", ['4 5 3 0', 'n|Start at the first digit that is not zero']],
      ["Zeros at the very start of a decimal do not count. They only show where the point is. Zeros between other digits do count. Look at 0.0063. The 6 is the first significant figure, and the 3 is the second.", ['0.0063', 'n|Leading zeros: not significant', '6 and 3: 2 significant figures']]]]],
    ex: [
      ['Counting significant figures', [
        ["Count the significant figures in 4,005. The 4 is the first. The zeros in the middle are between digits, so they count. The 5 is the last. That is 4 significant figures.", ['4005', '4  0  0  5', 'g|4 significant figures']],
        ["Now 0.0080. The first non-0 digit is 8. The 0 after the 8 counts, because it is after a significant digit in a decimal. So 2 significant figures.", ['0.0080', '8  0', 'g|2 significant figures']]]],
      ['Round 46,382 to 2 significant figures', [
        ["The first 2 significant figures are 4 and 6. The next digit is 3, the decider. 3 is less than 5, so the 6 stays. Now the number has 5 digits, so we must fill the other places with zeros.", ['46382', '46 | 382', 'Decider = 3: stay the same']],
        ["46,000, because the place values must stay right. If we wrote 46, the number would be completely wrong.", ['g|46,382 ≈ 46,000 (2 s.f.)']]]],
      ['Round 0.007382 to 2 significant figures', [
        ["The first significant figure is the 7, after the zeros. The 2 significant figures are 7 and 3. The decider is 8, so the 3 goes up to 4.", ['0.007382', '0.0073 | 82', 'Decider = 8: round up']],
        ["0.0074. The leading zeros stay, because they hold the place.", ['3 → 4', 'g|0.007382 ≈ 0.0074 (2 s.f.)']]]]],
    mist: [
      ['Counting the leading zeros', "Mistake one: counting the zeros at the start. Round 0.0047 to 1 significant figure. Wrong: 0.000, as if the zeros were the figures. The first significant figure is the four. The decider is 7, so round up. 0.005.", ['r|0.0047 ≈ 0.000 ✗', 'g|0.0047 ≈ 0.005 ✓ (1 s.f.)']],
      ['Dropping the place-holding zeros', "Mistake two: forgetting to put zeros back in a big number. Round 7,850 to 2 significant figures. Wrong: 79. The size is wrong. The answer is 7,900.", ['r|7850 ≈ 79 ✗', 'g|7850 ≈ 7900 ✓ (2 s.f.)']]],
    real: ['In real life', "Scientists and engineers use significant figures to show how precise a measurement is. The distance from the Earth to the Sun is 149 million, 600,000 kilometres. To 2 significant figures, that is 150 million kilometres.", ['149,600,000 km', 'g|≈ 150,000,000 km (2 s.f.)']],
    turns: [
      { q: 'Round 3,000, 961 to 2 significant figures.', say: "The first 2 significant figures are 3 and 9. The next digit is 6, so the decider is 6. 6 is 5 or more, so the 9 goes up to 10. That carries, and 3 becomes 4. 4,000, with zeros to hold the places.", work: ['3961', '39 | 61', 'Decider = 6: round up', '39 + 1 = 40', 'Put the zeros back: 4000'], ans: ['g|4000 (2 s.f.)'] },
      { q: 'Round 0.00562 to 2 significant figures.', say: "The first significant figure is the five. The second is 6. The next digit is 2, which is the decider. 2 is less than 5, so the 6 stays. The leading zeros stay as well, so 0.0056.", work: ['0.00562', '0.0056 | 2', 'Decider = 2: stay the same'], ans: ['g|0.0056 (2 s.f.)'] },
      { q: 'A stadium holds 82,000, 749 people. Round this to 1 significant figure.', say: "The first significant figure is 8. The next digit is 2, which is the decider. 2 is less than 5, so the 8 stays. We fill the rest with zeros. The stadium holds about 80,000 people.", work: ['82,749', '8 | 2,749', 'Decider = 2: stay the same', 'Fill with zeros: 80,000'], ans: ['g|≈ 80,000 people'] }],
    rec: ["Count from the first digit that is not 0.", ['First significant figure: first non-zero digit', 'Leading zeros do not count', 'Zeros between digits count', 'Look at the next digit to decide', 'Put zeros back to hold the place value']]
  });

  fx('Estimating by rounding to 1 significant figure', 'how to estimate an answer by rounding each number to 1 significant figure.', {
    head: 'Estimating',
    basics: [['Why estimate?', [
      ["An estimate is a quick answer that is close to the real 1. We find it by rounding every number first, then doing an easy calculation. Estimating helps us check that an answer from a calculator is sensible.", ['n|Estimate: round first, then calculate']],
      ["The usual rule is to round each number to 1 significant figure. Look at the first digit that is not 0, and use the next digit to decide. 4,850 becomes 5,000. 0.037 becomes 0.04.", ['4850 ≈ 5000', '0.037 ≈ 0.04']]]]],
    ex: [
      ['Estimate 4.8 × 21', [
        ["Round each number to 1 significant figure. 4.8 rounds to 5. 21 rounds to 20.", ['4.8 ≈ 5', '21 ≈ 20']],
        ["Now multiply the rounded numbers. 5 times 20 is 100. The exact answer is just over 100, so the estimate is very close.", ['5 × 20 = 100', 'g|4.8 × 21 ≈ 100']]]],
      ['Estimate 592 ÷ 19.8', [
        ["Round to 1 significant figure. 592 is about 600. 19.8 is about 20.", ['592 ≈ 600', '19.8 ≈ 20']],
        ["600 divided by 20 is 30. Divide both numbers by 10 to make it easier, 60 divided by 2, which is 30.", ['600 ÷ 20 = 60 ÷ 2 = 30', 'g|592 ÷ 19.8 ≈ 30']]]],
      ['Estimate 38.6 × 0.52 ÷ 0.0098', [
        ["Round each number to 1 significant figure. 38.6 is 40. 0.52 is 0.5. 0.0098 is 0.01.", ['38.6 ≈ 40', '0.52 ≈ 0.5', '0.0098 ≈ 0.01']],
        ["40 times 0.5 is 20. Then 20 divided by 0.01 is 2,000, because dividing by a hundredth is the same as multiplying by 100.", ['40 × 0.5 = 20', '20 ÷ 0.01 = 2000', 'g|≈ 2000']]]]],
    mist: [
      ['Rounding to the wrong place', "Mistake one: rounding to the nearest 10 when the question wants 1 significant figure. Estimate 384 times 12. Wrong: round to 380 and 10. 1 significant figure means 410.", ['r|380 × 10 = 3800 ✗ (not 1 s.f.)', 'g|400 × 10 = 4000 ✓']],
      ['Not checking', "Mistake two: not using the estimate to check. If a calculator gives 4,608 for 46 times 10.2, the estimate 50 times 10 is 500. They are very different. Something went wrong, perhaps a decimal point.", ['46 × 10.2 ≈ 50 × 10 = 500', 'r|Calculator: 4608 ✗ (decimal point?)', 'g|46 × 10.2 = 469.2 ✓']]],
    real: ['In real life', "At a supermarket, you buy items costing £1.99, £3.95 and £2.10. Round each to the nearest pound: 2, 4 and 2. The total is about £8, which helps you check the receipt.", ['£1.99 + £3.95 + £2.10', '2 + 4 + 2 = 8', 'g|≈ £8']],
    turns: [
      { q: 'Estimate 38 times 52 by rounding to 1 significant figure.', say: "Round each number. 38 is about 40. 52 is about 50. 40 times 50 is 2,000. So the estimate is 2,000.", work: ['38 ≈ 40', '52 ≈ 50', '40 × 50 = 2000'], ans: ['g|≈ 2000'] },
      { q: 'Estimate 708 divided by 31.2.', say: "Round to 1 significant figure. 708 is about 700. 31.2 is about 30. 700 divided by 30 is the same as 70 divided by 3. That is about 23.", work: ['708 ≈ 700', '31.2 ≈ 30', '700 ÷ 30 = 70 ÷ 3', '70 ÷ 3 ≈ 23'], ans: ['g|≈ 23'] },
      { q: 'A bag of rice costs £1.89. Estimate the cost of 19 bags by rounding.', say: "Round the price to £2 and the number of bags to 20. £2 times 20 is £40. The exact cost is a little less than that, because we rounded the price up. About £40.", work: ['£1.89 ≈ £2', '19 ≈ 20', '2 × 20 = 40'], ans: ['g|≈ £40'] }],
    rec: ["An estimate is a quick, sensible answer. Round each number to 1 significant figure and calculate.", ['Round every number to 1 s.f.', 'Calculate with the rounded numbers', 'Use it to check your answer', 'The estimate should be close to the exact answer']]
  });

})();
