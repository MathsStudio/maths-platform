(function () { var BT = window.BT; if (!BT || !BT.W3) return; var W = BT.W3, F = BT.F;
W("How do you use Pythagoras' theorem to find a missing side?", [
 [['a² + b² = c²', F.rt({a:'12', b:'9', c:'c', hi:'c'})], '9² + 12² = c²', '81 + 144 = 225', 'c = √225 = 15'],
 [['a² + b² = c²', F.rt({a:'b', b:'8', c:'17', hi:'a'})], '8² + b² = 17²', '64 + b² = 289', 'b² = 289 − 64 = 225', 'b = √225 = 15'],
 [['7² + b² = 10²', F.rt({a:'b', b:'7', c:'10', hi:'a'})], '49 + b² = 100', 'b² = 100 − 49 = 51', 'b = √51 = 7.1 (1 d.p.)']]);
W('How do you check for a right angle and use Pythagorean triples?', [
 [['9² + 40² = 81 + 1600 = 1681', F.rt({a:'40', b:'9', c:'41', hi:'c', ratio:2.2})], '41² = 1681', 'They are equal, so right-angled ✓'],
 [['4² + 5² = 16 + 25 = 41', F.rt({a:'5', b:'4', c:'6', hi:'c', ratio:1.25})], '6² = 36', '41 ≠ 36, so not right-angled'],
 ['3 × 5 = 15', '4 × 5 = 20', '5 × 5 = 25', 'Triple: 15, 20, 25']]);
W('How do you give exact answers using surds in Pythagoras questions?', [
 [['18 = 9 × 2', F.rt({a:'3', b:'3', c:'?', hi:'c', ratio:1})], '√18 = √9 × √2', '√9 = 3', '√18 = 3√2'],
 [['c² = 3² + 3²', F.rt({a:'3', b:'3', c:'c', hi:'c', ratio:1})], 'c² = 9 + 9 = 18', 'c = √18', '√18 = 3√2'],
 [['d² = 5² + 5²', F.rt({a:'5', b:'5', c:'d', hi:'c', ratio:1})], 'd² = 25 + 25 = 50', 'd = √50', '50 = 25 × 2, so √50 = 5√2']]);
W('SOH CAH TOA', [
 [['sin 30° = ½', F.rt({a:'x', c:'20', angle:'30°', hi:'a', ratio:0.58})], 'Opposite = hypotenuse × sin 30°', '20 × ½ = 10'],
 [['Opposite and adjacent: T, O, A', F.rt({a:'opp', b:'adj', angle:'θ', hi:'angle'})], 'tan = opposite ÷ adjacent'],
 [['tan 45° = 1', F.rt({a:'x', b:'6', angle:'45°', hi:'a', ratio:1})], 'Opposite = adjacent × tan 45°', '6 × 1 = 6']]);
W('Finding an angle', [
 [['tan θ = 8 ÷ 8 = 1', F.rt({a:'8', b:'8', angle:'θ', hi:'angle', ratio:1})], 'θ = tan⁻¹(1)', 'θ = 45°'],
 [['sin θ = 3 ÷ 6 = ½', F.rt({a:'3', c:'6', angle:'θ', hi:'angle', ratio:0.58})], 'θ = sin⁻¹(½)', 'θ = 30°'],
 [['cos θ = 5 ÷ 10 = ½', F.rt({b:'5', c:'10', angle:'θ', hi:'angle', ratio:1.7})], 'θ = cos⁻¹(½)', 'θ = 60°']]);
W('Pythagoras and trigonometry', [
 [['sin θ = 6 ÷ 12 = ½', F.rt({a:'6', c:'12', angle:'θ', hi:'angle', ratio:0.58})], 'θ = sin⁻¹(½) = 30°']]);
W('How do you use Pythagoras to find the distance between two points?', [
 [['Across: 4 − 1 = 3', F.grid([[1,2,'A'],[4,6,'B']],[[1,2,4,2,0,1],[4,2,4,6,0,1],[1,2,4,6,1]])], 'Up: 6 − 2 = 4', 'd² = 3² + 4² = 9 + 16 = 25', 'd = √25 = 5']]);
})();
