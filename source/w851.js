(function () { var BT = window.BT; if (!BT || !BT.W3) return; var W = BT.W3, F = BT.F;
W('How do you construct triangles?', [
 [['5 + 6 = 11', F.tri(['','',''],[],['5','6','12'])], '11 is less than 12', 'Two sides must add to more than the third', 'So it is impossible'],
 ['All three sides are known', 'Draw the base', 'Compasses: draw arcs from each end', 'The arcs cross at the third corner'],
 [['Angles in a triangle add to 180°', F.tri(['40°','65°','?'],[2])], '40 + 65 = 105', '180 − 105 = 75°']]);
W('What are angles in triangles and quadrilaterals?', [
 [['110 + 110 + 60 = 280', F.quad('kite',['?','110°','60°','110°'],[0])], 'A quadrilateral adds to 360°', '360 − 280 = 80°'],
 [['Triangle: 180°', F.tri(['?','?','40°'],[0,1])], '180 − 40 = 140', 'Base angles are equal: 140 ÷ 2 = 70°'],
 ['Neighbouring angles add to 180°', '180 − 70 = 110°']]);
W('What is a linear scale factor?', [
 ['Scale factor = new ÷ old', '6 ÷ 9 = 6/9 = ⅔'],
 ['Area scale factor = k²', '4² = 16', '5 × 16 = 80 cm²'],
 ['New length = old × k', '15 × 0.4 = 6 cm']]);
W('How do you use scale drawings and map scales?', [
 ['1 : 10,000 means 1 cm is 10,000 cm', '6 × 10,000 = 60,000 cm', '60,000 ÷ 100 = 600 m'],
 ['4 m = 400 cm', '400 ÷ 50 = 8 cm'],
 ['20 m = 2,000 cm', 'Model : real = 10 : 2,000', 'Divide by 10: 1 : 200']]);
W('Similar triangles', [
 ['Scale factor: 12 ÷ 8 = 1.5', '10 × 1.5 = 15'],
 ['Two angles are equal', 'Angles in a triangle add to 180°', 'So the third angles are equal too', 'All angles equal: similar'],
 ['Pole: height 2, shadow 4', 'Tree: shadow 10', 'Scale factor: 10 ÷ 4 = 2.5', 'Tree: 2 × 2.5 = 5 m']]);
W('How do you use area and volume scale factors for similar shapes?', [
 ['Area scale factor = k²', '4² = 16', '10 × 16 = 160'],
 ['Volume factor: 64 ÷ 8 = 8', 'k³ = 8', 'k = ³√8 = 2'],
 ['Area ratio 16 : 25', 'Length ratio: √16 : √25', '4 : 5']]);
W('Angles of elevation', [
 [['sin 30° = ½', F.rt({a:'h', c:'50', angle:'30°', hi:'a', ratio:0.58})], 'Height = 50 × sin 30°', '50 × ½ = 25 m'],
 [['tan 45° = 1', F.rt({a:'h', b:'10', angle:'45°', hi:'a', ratio:1})], 'Height = 10 × tan 45°', '10 × 1 = 10 m'],
 ['Horizontal lines are parallel', 'Alternate angles are equal', 'So depression = elevation']]);
W('How do you measure and calculate with bearings?', [
 [['Back bearing: add 180°', F.bearing(60)], '60 + 180 = 240°'],
 ['A bearing needs three figures', '80° is written 080°'],
 [['East 6 km, then south 8 km', F.rt({a:'8 km', b:'6 km', c:'d', hi:'c', ratio:1.33})], 'A right angle between them', 'd² = 6² + 8² = 36 + 64 = 100', 'd = √100 = 10 km']]);
W('Polygon angles, bearings and coordinates', [
 ['Exterior angles add to 360°', '8 sides: 360 ÷ 8 = 45°']]);
})();
