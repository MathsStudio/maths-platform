(function () { var BT = window.BT; if (!BT || !BT.W3) return; var W = BT.W3, F = BT.F;
W('How do you find the circumference and area of a circle, exactly and as a decimal?', [
 [['C = πd', F.cdia('14')], 'C = π × 14', 'C = 44.0 cm (1 d.p.)'],
 [['A = πr²', F.cdia('','2')], 'A = π × 2²', 'A = π × 4 = 4π'],
 [['Curved part: ½ × π × 8 = 4π', F.circle('semi',{d:'8',hiArc:1,hiD:1})], '4π = 12.6', 'Add the straight edge: 12.6 + 8 = 20.6']]);
W('How do you work backwards from the circumference or area of a circle?', [
 ['C = πd', '25.1 = π × d', 'd = 25.1 ÷ π', 'd = 7.99 ≈ 8'],
 ['A = πr²', '28.3 = π × r²', 'r² = 28.3 ÷ π', 'r² = 9.01 ≈ 9'],
 ['r² = 9', 'r = √9 = 3']]);
W('How do you find arc length and sector area?', [
 [['Full circle = 360°', F.circle('sector',{deg:45})], 'Fraction = 45 ÷ 360 = 1/8'],
 [['Fraction: 90 ÷ 360 = ¼', F.circle('sector',{deg:90,r:'10'})], 'Circumference: 2π × 10 = 20π', 'Arc = ¼ × 20π = 5π'],
 [['Semicircle: fraction = ½', F.circle('semi',{d:'8'})], 'Full area: π × 4² = 16π', 'Sector = ½ × 16π = 8π']]);
W('Circle theorems', [
 [['Angle in a semicircle = 90°', F.circle('semitri',{b:'35°',top:'90°'})], 'Angles in a triangle add to 180°', '180 − 90 − 35 = 55°'],
 [['Centre angle = 2 × edge angle', F.circle('edge',{centre:'120°',edge:'?'})], 'Edge angle = 120 ÷ 2', 'Edge angle = 60°'],
 [['A tangent meets the radius at a right angle', F.circle('tangent',{d:'10',r:'6',t:'?'})], 'Angle = 90°']]);
W('Chords and tangent lengths', [
 [['Half-chord² + 6² = 10²', F.circle('chord',{d:'6',r:'10',chord:'?'})], 'Half-chord² = 100 − 36 = 64', 'Half-chord = √64 = 8', 'Chord = 2 × 8 = 16'],
 [['Tangent² + 6² = 10²', F.circle('tangent',{d:'10',r:'6',t:'?'})], 'Tangent² = 100 − 36 = 64', 'Tangent = √64 = 8'],
 ['Tangents from a point are equal', 'Other tangent = 7']]);
W('How do you find a missing radius or angle from an arc or sector?', [
 [['Full circle: π × 4² = 16π = 50.3', F.circle('sector',{deg:90,label:'?',r:'4'})], 'Fraction: 12.6 ÷ 50.3 = 0.25 = ¼', 'Angle: ¼ × 360 = 90°']]);
})();
