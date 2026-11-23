(function () { var BT = window.BT; if (!BT || !BT.W3) return; var W = BT.W3;
W('How do you generate a formula from a sequence?', [
 ['2, 8, 14, 20: difference = 6', '6n gives 6, 12, 18, 24', '2 − 6 = −4: subtract 4', 'nth term = 6n − 4'],
 ['5, 8, 11, 14: difference = 3', '3n gives 3, 6, 9, 12', '5 − 3 = 2: add 2', 'nth term = 3n + 2'],
 ['6n − 4 with n = 20', '6 × 20 = 120', '120 − 4 = 116']]);
W('How do you simplify algebraic terms?', [
 ['5p − 2q + 3p + q', 'p terms: 5p + 3p = 8p', 'q terms: −2q + q = −q', '8p − q'],
 ['4x × 3y = (4 × 3) × (x × y)', '4 × 3 = 12 and x × y = xy', '12xy'],
 ['20a² ÷ 5a', 'Numbers: 20 ÷ 5 = 4', 'a² ÷ a = a', '4a']]);
W('How do you substitute numbers into an expression?', [
 ['3p² − q with p = 2, q = 5', 'p² = 2² = 4', '3 × 4 = 12', '12 − 5 = 7'],
 ['x² − 4x with x = −3', '(−3)² = 9', '4 × (−3) = −12', '9 − (−12) = 9 + 12 = 21'],
 ['A = ½ b h = ½ × 10 × 6', '½ × 10 = 5', '5 × 6 = 30']]);
W('How do you expand brackets, including negatives?', [
 ['5(x + 2) = 5 × x + 5 × 2', '5 × x = 5x and 5 × 2 = 10', '5x + 10'],
 ['−4(x − 3) = −4 × x + (−4) × (−3)', '−4 × x = −4x', '−4 × −3 = +12', '−4x + 12'],
 ['3(x + 1) = 3x + 3', '−(x + 5) = −x − 5', '3x + 3 − x − 5', '2x − 2']]);
W('How do you expand two brackets?', [
 ['(x + 1)(x + 6)', 'x × x = x², x × 6 = 6x', '1 × x = x, 1 × 6 = 6', 'x² + 6x + x + 6 = x² + 7x + 6'],
 ['(x − 5)(x + 2)', 'x × x = x², x × 2 = 2x', '−5 × x = −5x, −5 × 2 = −10', 'x² + 2x − 5x − 10 = x² − 3x − 10'],
 ['(x + 3)² = (x + 3)(x + 3)', 'x² + 3x + 3x + 9', 'x² + 6x + 9']]);
W('How do you factorise fully, including by taking out common factors?', [
 ['8x + 12', 'HCF of 8 and 12 is 4', '8x ÷ 4 = 2x and 12 ÷ 4 = 3', '4(2x + 3)'],
 ['x² − 7x', 'Both terms have x', 'x² ÷ x = x and 7x ÷ x = 7', 'x(x − 7)'],
 ['10x² + 15x', 'HCF of 10 and 15 is 5, and both have x', 'HCF = 5x', '10x² ÷ 5x = 2x and 15x ÷ 5x = 3', '5x(2x + 3)']]);
W('Common factors and difference of two squares', [
 ['x² − 100 = x² − 10²', 'Difference of two squares', '(x + 10)(x − 10)'],
 ['6x² + 9x', 'HCF of 6 and 9 is 3, and both have x', 'HCF = 3x', '6x² ÷ 3x = 2x and 9x ÷ 3x = 3', '3x(2x + 3)'],
 ['3x² − 12', 'Take out 3: 3(x² − 4)', 'x² − 4 = x² − 2²', '= (x + 2)(x − 2)', '3(x + 2)(x − 2)']]);
W('Factorising quadratics', [
 ['x² + x − 20', 'Multiply to −20, add to +1', '5 × (−4) = −20 and 5 + (−4) = 1', '(x + 5)(x − 4)'],
 ['x² − 7x + 10', 'Multiply to +10, add to −7', '(−2) × (−5) = 10 and −2 + (−5) = −7', '(x − 2)(x − 5)'],
 ['x² − 9x + 20 = 0', 'Multiply to 20, add to −9: −4 and −5', '(x − 4)(x − 5) = 0', 'x − 4 = 0 or x − 5 = 0', 'x = 4 or x = 5']]);
W('How do you find the highest common factor and the lowest common multiple?', [
 ['Factors of 8: 1, 2, 4, 8', 'Factors of 12: 1, 2, 3, 4, 6, 12', 'Biggest in both: 4'],
 ['Multiples of 6: 6, 12, 18, 24', 'Multiples of 8: 8, 16, 24', 'First in both: 24'],
 ['Multiples of 10: 10, 20, 30', 'Multiples of 15: 15, 30', 'First in both: 30 seconds']]);
W('How do you create and use algebraic formulae?', [
 ['Cost per ticket: 7.5 × n = 7.5n', 'Fixed fee: + 2', 'T = 7.5n + 2'],
 ['T = 7.5n + 2 with n = 4', '7.5 × 4 = 30', '30 + 2 = 32'],
 ['7.5n + 2 = 47', 'Subtract 2: 7.5n = 45', 'Divide by 7.5: n = 45 ÷ 7.5', 'n = 6']]);
W('Brackets, factorising and equations', [
 ['x² + 7x + 12', 'Multiply to 12, add to 7', '3 × 4 = 12 and 3 + 4 = 7', '(x + 3)(x + 4)'],
 ['x² − 8x + 15', 'Multiply to 15, add to −8', '(−3) × (−5) = 15 and −3 + (−5) = −8', '(x − 3)(x − 5)'],
 ['x² + x − 6 = 0', 'Multiply to −6, add to 1: −2 and 3', '(x − 2)(x + 3) = 0', 'x − 2 = 0 or x + 3 = 0', 'x = 2 or x = −3'],
 ['3(x + 4) = 2(x − 1) + 20', 'Left: 3x + 12', 'Right: 2x − 2 + 20 = 2x + 18', '3x + 12 = 2x + 18', 'Subtract 2x: x + 12 = 18', 'Subtract 12: x = 6']]);
})();
