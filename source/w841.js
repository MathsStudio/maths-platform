(function () { var BT = window.BT; if (!BT || !BT.W3) return; var W = BT.W3;
W('How do you evaluate powers and express whole numbers as powers?', [
 ['3 × 3 = 9, then 9 × 3 = 27', '27 × 3 = 81, then 81 × 3 = 243', 'Five 3s: 3 × 3 × 3 × 3 × 3 = 243'],
 ['4³ = 4 × 4 × 4', '4 × 4 = 16', '16 × 4 = 64'],
 ['1000 = 10 × 10 × 10', 'Three 10s (three zeros)']]);
W('How do you use the laws of indices?', [
 ['x⁶ × x⁴ = x⁶⁺⁴', '6 + 4 = 10', 'x⁶ × x⁴ = x¹⁰'],
 ['12y⁸ ÷ 3y²', 'Numbers: 12 ÷ 3 = 4', 'Powers: y⁸ ÷ y² = y⁸⁻² = y⁶', '4y⁶'],
 ['(3a²)³ = 3³ × (a²)³', '3³ = 3 × 3 × 3 = 27', '(a²)³ = a²ˣ³ = a⁶', '27a⁶'],
 ['4⁻² = 1 ÷ 4²', '4² = 4 × 4 = 16', '4⁻² = 1/16']]);
W('How do you write a number as a product of its prime factors?', [
 ['120 ÷ 2 = 60', '60 ÷ 2 = 30', '30 ÷ 2 = 15', '15 = 3 × 5', '120 = 2 × 2 × 2 × 3 × 5'],
 ['84 ÷ 2 = 42', '42 ÷ 2 = 21', '21 = 3 × 7', '84 = 2 × 2 × 3 × 7'],
 ['90 = 2 × 3² × 5', '120 = 2³ × 3 × 5', 'Lowest powers: 2, 3 and 5', '2 × 3 × 5 = 30']]);
W('How do you calculate percentage changes?', [
 ['Change: 80 − 68 = 12', '12 ÷ 80 = 0.15', '0.15 × 100 = 15%'],
 ['100% + 12% = 112%', '112 ÷ 100 = 1.12', '250 × 1.12 = 280'],
 ['100% − 20% = 80%', '80 ÷ 100 = 0.8', '600 × 0.8 = 480']]);
W('How do you work out reverse percentages?', [
 ['100% − 25% = 75%', '75 ÷ 100 = 0.75', '45 ÷ 0.75 = 60'],
 ['100% + 10% = 110%', '110 ÷ 100 = 1.1', '33,000 ÷ 1.1 = 30,000'],
 ['100% + 20% = 120%', '120 ÷ 100 = 1.2', '180 ÷ 1.2 = 150']]);
W('How do you work with repeated percentage change?', [
 ['100% − 10% = 90%, so × 0.9', '0.9² = 0.9 × 0.9 = 0.81', '200 × 0.81 = 162'],
 ['100% + 2% = 102%, so × 1.02', '1.02³ = 1.02 × 1.02 × 1.02', '1.02³ = 1.061208', '10,000 × 1.061208 = 10,612'],
 ['Up 10%: × 1.1', 'Down 10%: × 0.9', '1.1 × 0.9 = 0.99', '0.99 = 99%, so 1% lower']]);
W('Compound growth and depreciation', [
 ['100% + 10% = 110%, so × 1.1', '1.1² = 1.1 × 1.1 = 1.21', '5,000 × 1.21 = 6,050'],
 ['100% − 12% = 88%', '88 ÷ 100 = 0.88'],
 ['100% − 20% = 80%, so × 0.8', '0.8² = 0.8 × 0.8 = 0.64', '400 × 0.64 = 256']]);
W('How do you write numbers in standard form, including small numbers?', [
 ['340,000 = 3.4 × 100,000', '100,000 = 10⁵', '340,000 = 3.4 × 10⁵'],
 ['0.00008 → 8 (point moves 5 right)', 'Small number: negative power', '0.00008 = 8 × 10⁻⁵'],
 ['10⁻² = 0.01', '2.5 × 0.01 = 0.025']]);
W('How do you multiply and divide numbers in standard form?', [
 ['(2 × 10³) × (4 × 10⁵)', '2 × 4 = 8', '10³ × 10⁵ = 10³⁺⁵ = 10⁸', '= 8 × 10⁸'],
 ['(6 × 10⁸) ÷ (3 × 10²)', '6 ÷ 3 = 2', '10⁸ ÷ 10² = 10⁸⁻² = 10⁶', '= 2 × 10⁶'],
 ['(5 × 10⁴) × (6 × 10³)', '5 × 6 = 30 and 10⁴ × 10³ = 10⁷', '30 × 10⁷ is not standard form', '30 = 3 × 10', '3 × 10 × 10⁷ = 3 × 10⁸']]);
W('How do you work with rounding and upper and lower bounds?', [
 ['Nearest 1 kg: half of 1 = 0.5', 'Lower: 17 − 0.5 = 16.5', 'Upper: 17 + 0.5 = 17.5'],
 ['1 d.p.: half of 0.1 = 0.05', 'Lower bound: 6.2 − 0.05 = 6.15'],
 ['Nearest cm: half of 1 = 0.5', 'Largest side: 10 + 0.5 = 10.5', '10.5 × 10.5 = 110.25']]);
W('How do you estimate by rounding to one significant figure?', [
 ['6105: first digit 6, next digit 1', '1 is less than 5: round down', '6105 ≈ 6000'],
 ['51.2 ≈ 50', '9.8 ≈ 10', '50 × 10 = 500'],
 ['610 ≈ 600', '0.3 is already 1 s.f.', '600 ÷ 0.3 = 2000']]);
W('What are rational and irrational numbers?', [
 ['0.6 = 6/10', '6/10 = 3/5, a fraction', 'So 0.6 is rational'],
 ['√25 = 5 (5 × 5 = 25)', '5 = 5/1, a fraction', 'So √25 is rational'],
 ['3 × 3 = 9 and 4 × 4 = 16', '11 is not a perfect square', 'So √11 is irrational']]);
W('Surds', [
 ['45 = 9 × 5', '√45 = √9 × √5', '√9 = 3', '√45 = 3√5'],
 ['4√3 + 2√3', 'Same surd: add 4 + 2 = 6', '= 6√3'],
 ['√5 × √20 = √(5 × 20)', '5 × 20 = 100', '√100 = 10']]);
W('How do you describe sets of numbers?', [
 ['1 × 10 = 10', '2 × 5 = 10', 'Factors: 1, 2, 5, 10'],
 ['A = {1, 2, 3, 4}', 'B = {3, 4, 5, 6}', 'In both A and B: 3 and 4'],
 ['A = {1, 2, 3, 4}', 'B = {3, 4, 5, 6}', 'In A or B, no repeats: 1, 2, 3, 4, 5, 6']]);
W('Percentage change and wages', [
 ['Rise: 420 − 400 = 20', '20 ÷ 400 = 0.05', '0.05 × 100 = 5%']]);
})();
