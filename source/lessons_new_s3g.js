(function () {
  var BT = window.BT; if (!BT || !BT.L || !BT.sv || !BT.lk) return;
  var L = BT.L, V = BT.sv, E = L.E, S = L.st, SC = L.SC,
    g = function (t) { return E(t, 'g'); }, r = function (t) { return E(t, 'r'); };
  function N(title, goal, scenes) { L.full(title, scenes); return L.ep(title, goal, []); }

  /* ================= 850 ================= */
  N('How do you find the circumference and area of a circle, exactly and as a decimal?', 'how to use the formulae for circles, give answers in terms of pi, and work with semicircles and quarter circles.', [
    SC('Parts of a circle', 'Start with the basics', [
      S("A circle has a centre. The radius is the distance from the centre to the edge. The diameter goes right across through the centre, so it is twice the radius. The distance all the way around the edge is called the circumference.", V.list(['Radius r: centre to edge', 'Diameter d = 2r', 'Circumference: around the edge'])),
      S("There is a special number called pi. It is the circumference divided by the diameter, for every circle. Pi is about 3.1416. It never ends, so on a calculator we use the pi button.", E('π ≈ 3.1416', 'g'))
    ]),
    SC('Two formulae', 'Circumference and area', [
      S("To find the circumference, multiply pi by the diameter. Or, because the diameter is 2 radii, 2 times pi times the radius.", E('C = πd = 2πr', 'g')),
      S("To find the area, the amount of flat space inside, use pi times the radius squared. Radius squared means radius times radius.", E('A = πr²', 'g') + V.rule('Circumference: a length. Area: squares.'))
    ]),
    SC('Example 1', 'Radius 5 cm, step by step', [
      S("Step one. Write down the radius. r equals 5. Step two. Circumference. 2 times pi times 5. 2 times 5 is 10. So 10 pi. On a calculator, 10 times pi is 31.4. To 1 decimal place.", E('C = 2 × π × 5 = 10π') + g('C ≈ 31.4 cm')),
      S("Step three. Area. Pi times 5 squared. 5 squared is 25. So 25 pi. On a calculator, 78.5.", E('A = π × 5² = 25π') + g('A ≈ 78.5 cm²')),
      S("Notice the units. Circumference is a length, in centimetres. Area is in square centimetres.", V.rule('cm for length, cm² for area.'))
    ]),
    SC('Example 2', 'Diameter 12 cm', [
      S("This time we are given the diameter. For the circumference we can use the diameter directly. Pi times 12. 12 pi, about 37.7.", E('C = π × 12 = 12π') + g('C ≈ 37.7 cm')),
      S("For the area, we need the radius. Halve the diameter. 12 divided by 2 is 6. Then pi times 6 squared. 6 squared is 36. 36 pi, about 113.1.", E('r = 12 ÷ 2 = 6') + E('A = π × 6² = 36π') + g('A ≈ 113.1 cm²'))
    ]),
    SC('Exact answers', 'Example 3: in terms of π', [
      S("Sometimes a question asks for the answer in terms of pi. This means leave pi in the answer, and do not use a calculator for it. It is the exact answer. A circle has radius 3. The circumference is 2 times pi times 3. 6 pi. The area is pi times 9. 9 pi.", E('C = 2π(3) = 6π', 'g') + E('A = π(3²) = 9π', 'g')),
      S("Write the number first, then pi. 6 pi, not pi 6. Exact answers are neat, and they have no rounding error.", V.rule('Number first, then π.'))
    ]),
    SC('Semicircle', 'Example 4: a half circle with diameter 10', [
      S("A semicircle is half a circle. Its perimeter has 2 parts. The curved edge, which is half of the circumference. And the straight edge across the diameter. Do not forget that one.", V.list(['Curved edge: ½ × πd', 'Straight edge: d'])),
      S("Curved part: half of pi times 10, which is 5 pi, about 15.7. Straight part: 10. Add them. 5 pi plus 10, about 25.7 centimetres.", E('½ × π × 10 = 5π ≈ 15.7') + g('Perimeter = 5π + 10 ≈ 25.7 cm')),
      S("The area of a semicircle with diameter 10. The radius is 5. Half of pi times 25. That is 12 and a half pi, about 39.3.", E('A = ½ × π × 5² = 12.5π') + g('≈ 39.3 cm²'))
    ]),
    SC('Quarter circle', 'Example 5: radius 8', [
      S("A quarter circle has a curved edge that is a quarter of the circumference, and 2 straight edges, each a radius. The full circumference is 2 pi times 8, 16 pi. A quarter of that is 4 pi, about 12.57. The 2 straight edges are 8 plus 8, 16.", E('¼ × 16π = 4π ≈ 12.57') + E('8 + 8 = 16')),
      S("Perimeter is about 28.6. The area is a quarter of pi times 64. That is 16 pi, about 50.3.", g('Perimeter ≈ 28.6 cm') + g('Area = 16π ≈ 50.3 cm²'))
    ]),
    SC('A wheel', 'Example 6: how many turns?', [
      S("A bicycle wheel has diameter 70 centimetres. 1 full turn takes the bike forward 1 circumference. Pi times 70 is about 219.9 centimetres, or about 2.2 metres.", E('C = π × 70 ≈ 219.9 cm')),
      S("How many turns for a hundred metres? A hundred metres is 10,000 centimetres. 10,000 divided by 219.9 is about 45 and a half turns.", E('10 000 ÷ 219.9 ≈ 45.5') + g('About 45 and a half turns'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Using the diameter where the radius is needed. A circle has diameter 10. Here is the wrong way. Area equals pi times 10 squared, which is 314. That is far too big. The area formula needs the radius. Halve the diameter first, to get 5. Then pi times 25, which is 78.5.", r('A = π × 10² ≈ 314.2  ✗') + g('r = 5 → A = π × 5² ≈ 78.5  ✓')),
      S("Mistake two. Mixing up the formulae. A circle has radius 4. Wrong: area equals 2 pi r, 2 times pi times 4, 25.1. That is the circumference formula. The area formula is pi r squared. Pi times 16, 50.3.", r('A = 2π × 4 ≈ 25.1  ✗') + g('A = π × 4² ≈ 50.3  ✓')),
      S("Mistake three. Squaring wrongly. Radius 3. Wrong: pi times 3 squared, worked out as pi times 3 times 2, which is 18.9. Squared means times itself. 3 times 3 is 9. Pi times 9 is 28.3.", r('π × 3 × 2 ≈ 18.8  ✗') + g('π × 3 × 3 = 9π ≈ 28.3  ✓'))
    ]),
    SC('In real life', 'Pizzas', [
      S("A pizza with diameter 30 centimetres has area pi times 15 squared, 225 pi, about 707 square centimetres. A pizza of diameter 40 has area pi times 400, about 1,257. It is only a third bigger across, but the area is nearly 2 times bigger. That is why bigger pizzas can be better value.", g('30 cm: ≈ 707 cm²') + g('40 cm: ≈ 1257 cm²'))
    ]),
    L.turn("Your turn! Number one. Find the circumference of a circle with diameter 14 centimetres, to 1 decimal place. Pause and try it.", E('C = π × 14'), "Pi times 14 is 44.0. About 44 centimetres.", g('C ≈ 44.0 cm')),
    L.turn("Your turn! Number two. Find the area of a circle with radius 2, in terms of pi. Pause and try it.", E('A = π × 2²'), "Pi times 4. 4 pi.", g('A = 4π cm²')),
    L.turn("Your turn! Number three. Find the perimeter of a semicircle with diameter 8, to 1 decimal place. Pause and try it.", E('4π + 8'), "The curved part is 4 pi, 12.6. Plus the straight edge, 8. 20.6.", g('≈ 20.6 cm')),
    L.rec('How do you find the circumference and area of a circle?', "The circumference is pi times the diameter, or 2 pi r. The area is pi r squared, and the radius is half the diameter. Leave pi in the answer when asked for an exact answer. For semicircles and quarter circles, take the fraction of the circle for the curved edge, and add the straight edges.", ['C = πd = 2πr', 'A = πr²', 'Halve the diameter for r', 'Add the straight edges'])
  ]);

  N('How do you work backwards from the circumference or area of a circle?', 'how to find the radius or diameter when the circumference or area is given.', [
    SC('Working backwards', 'Start with the basics', [
      S("Sometimes we know the circumference or the area, and we need the radius or the diameter. We use the same formulae, but rearranged. It is the same as solving an equation.", V.rule('Same formula. Solve for r.')),
      S("For the circumference, C equals pi d. To find d, divide the circumference by pi. For the area, A equals pi r squared. Divide by pi to get r squared, then take the square root.", E('d = C ÷ π') + E('r² = A ÷ π, then r = √(A ÷ π)'))
    ]),
    SC('From circumference', 'Example 1: C = 31.4 cm', [
      S("The circumference of a circle is 31.4 centimetres. Find the diameter and radius. Step one. Write the formula. C equals pi d. Step two. Put in the number. 31.4 equals pi times d.", E('31.4 = π × d')),
      S("Step three. Divide both sides by pi. d equals 31.4 divided by pi. That is 10. Step four. The radius is half the diameter. 5.", E('d = 31.4 ÷ π = 10') + g('d = 10 cm, r = 5 cm')),
      S("Check. Pi times 10 is 31.4. Correct.", V.rule('Check by going forwards.'))
    ]),
    SC('Not neat', 'Example 2: C = 20 m', [
      S("A circular path has circumference 20 metres. Find the radius. The formula with the radius is C equals 2 pi r. So 20 equals 2 pi r. Divide by 2 pi. 2 pi is about 6.283. 20 divided by 6.283 is 3.18.", E('20 = 2πr') + E('r = 20 ÷ 2π ≈ 3.18')),
      S("The radius is about 3.2 metres, to 1 decimal place.", g('r ≈ 3.2 m'))
    ]),
    SC('From area', 'Example 3: A = 50.27 cm²', [
      S("The area is 50.27. Find the radius. Step one. A equals pi r squared. 50.27 equals pi r squared. Step two. Divide by pi. r squared equals 50.27 divided by pi. That is 16.", E('50.27 = πr²') + E('r² = 50.27 ÷ π = 16')),
      S("Step three. We want r, not r squared. Take the square root. The square root of 16 is 4. The radius is 4.", g('r = √16 = 4 cm'))
    ]),
    SC('Another', 'Example 4: A = 100 cm²', [
      S("Area 100. r squared equals 100 divided by pi, 31.83. Square root. 5.64. To 1 decimal place, 5.6.", E('r² = 100 ÷ π ≈ 31.83') + g('r ≈ 5.6 cm'))
    ]),
    SC('Exact answers', 'Example 5: A = 49π', [
      S("If the area is given in terms of pi, it is even easier. A equals 49 pi. So pi r squared equals 49 pi. Divide both sides by pi. r squared is 49. The radius is 7. The circumference is 2 pi times 7, 14 pi.", E('πr² = 49π') + E('r² = 49') + g('r = 7') + g('C = 14π'))
    ]),
    SC('A real problem', 'Example 6: a pond', [
      S("A round pond has area 12.57 square metres. A fence goes around the edge. How long is the fence? We need the circumference. First find r. r squared is 12.57 divided by pi, 4. So r is 2. Now the circumference is 2 pi times 2, 4 pi, about 12.6 metres.", E('r² = 12.57 ÷ π = 4') + E('r = 2') + g('C = 4π ≈ 12.6 m'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Forgetting the square root. The area is 50.3. Wrong working. r squared is 16, so the radius is 16. That cannot be right. A circle of radius 16 has area about 800. The radius is the square root of 16, 4.", r('r² = 16 → r = 16  ✗') + g('r = √16 = 4  ✓')),
      S("Mistake two. Confusing diameter and radius. The circumference is 20. Wrong: divide by pi, 6.4, and call that the radius. 20 divided by pi is the diameter. The radius is half of that. 3.2.", r('r = 20 ÷ π ≈ 6.4  ✗') + g('d = 6.4, so r = 3.2  ✓')),
      S("Mistake three. Multiplying instead of dividing by pi. The circumference is 31.4. Wrong: multiply by pi. 31.4 times pi is 98.6. A circle with diameter 98 would have circumference much more than 31. We should divide by pi. 10.", r('d = 31.4 × π ≈ 98.6  ✗') + g('d = 31.4 ÷ π = 10  ✓'))
    ]),
    SC('In real life', 'Tree trunks', [
      S("Foresters measure a tree by wrapping a tape around the trunk. They get the circumference, say 157 centimetres. Dividing by pi gives the diameter, 50 centimetres. They never need to cut the tree.", g('157 ÷ π = 50 cm'))
    ]),
    L.turn("Your turn! Number one. The circumference of a circle is 25.1. Find the diameter to the nearest whole number. Pause and try it.", E('25.1 ÷ π'), "25.1 divided by pi is 8.", g('d = 8')),
    L.turn("Your turn! Number two. The area is 28.3. Find r squared, to the nearest whole number. Pause and try it.", E('28.3 ÷ π'), "About nine.", g('r² ≈ 9')),
    L.turn("Your turn! Number three. And so what is the radius? Pause and try it.", E('r² = 9'), "Three.", g('r = 3')),
    L.rec('How do you work backwards from the circumference or area?', "For the circumference, divide by pi to find the diameter, then halve it for the radius. For the area, divide by pi to get r squared, then take the square root. Check by working forwards.", ['d = C ÷ π', 'r² = A ÷ π', 'Square root for r', 'Check by going forwards'])
  ]);

  N('How do you find arc length and sector area?', 'how to find part of the circumference or area using a fraction of the circle.', [
    SC('Sectors and arcs', 'Start with the basics', [
      S("Cut a slice of pizza from the centre. The slice is called a sector. The curved edge of the slice is called an arc. The 2 straight edges are radii.", V.list(['Sector: a slice of the circle', 'Arc: the curved edge', '2 radii: the straight edges'])),
      S("The big idea is that a sector is a fraction of the whole circle. The fraction is the angle at the centre divided by 360, because a full circle is 360 degrees.", E('Fraction = angle ÷ 360', 'g'))
    ]),
    SC('Fractions', 'Example 1: from angles to fractions', [
      S("90 degrees. 90 over 360 is a quarter. 60 degrees is a sixth. A hundred and 20 degrees is a third. A hundred and 80 degrees is a half.", V.tbl([['90°', '1/4'], ['60°', '1/6'], ['120°', '1/3'], ['180°', '1/2']], ['Angle', 'Fraction'])),
      S("For other angles, simplify the fraction. 45 over 360 is 1 eighth. A hundred and 35 over 360 is 3 eighths.", E('45/360 = 1/8') + E('135/360 = 3/8'))
    ]),
    SC('Arc length', 'Example 2: radius 6, angle 60°', [
      S("Step one. Find the fraction. 60 over 360, a sixth. Step two. Find the whole circumference. 2 pi times 6, 12 pi.", E('Fraction = 60/360 = 1/6') + E('C = 2π × 6 = 12π')),
      S("Step three. Multiply. A sixth of 12 pi is 2 pi. About 6.28 centimetres.", g('Arc = 1/6 × 12π = 2π ≈ 6.28 cm'))
    ]),
    SC('Sector area', 'Example 3: the same sector', [
      S("For the area, find the area of the whole circle. Pi times 6 squared, 36 pi. Then take a sixth of it. 6 pi. About 18.85 square centimetres.", E('A = π × 6² = 36π') + g('Sector = 1/6 × 36π = 6π ≈ 18.85 cm²'))
    ]),
    SC('A bigger angle', 'Example 4: radius 8, angle 135°', [
      S("The fraction is 3 eighths. The circumference is 2 pi times 8, 16 pi. The arc is 3 eighths of 16 pi. 16 divided by 8 is 2. 2 times 3 is 6. 6 pi. About 18.85.", E('3/8 × 16π = 6π') + g('Arc ≈ 18.85')),
      S("The area of the whole circle is pi times 64. 3 eighths of that is 24 pi. About 75.4.", E('3/8 × 64π = 24π') + g('Area ≈ 75.40'))
    ]),
    SC('Perimeter of a sector', 'Example 5: do not forget the radii', [
      S("The perimeter of the sector in Example two is the arc, plus the 2 straight edges. The arc is 2 pi, about 6.28. The 2 radii are 6 plus 6, 12. The perimeter is about 18.28 centimetres.", E('Arc ≈ 6.28') + E('Radii = 6 + 6 = 12') + g('Perimeter ≈ 18.28 cm'))
    ]),
    SC('Backwards', 'Example 6: finding the angle', [
      S("An arc of length 5 pi is part of a circle with radius 12. What angle is at the centre? First the whole circumference. 2 pi times 12, 24 pi. The fraction is 5 pi over 24 pi, which is 5 twenty-fourths.", E('C = 24π') + E('Fraction = 5π/24π = 5/24')),
      S("The angle is 5 twenty-fourths of 360. 360 divided by 24 is 15. 15 times 5 is 75 degrees.", g('Angle = 5/24 × 360 = 75°'))
    ]),
    SC('A real slice', 'Example 7: a pizza', [
      S("A pizza has radius 15 centimetres, and is cut into 8 equal slices. Each slice has angle 45 degrees, 1 eighth. The whole pizza has area pi times 225. 1 eighth of that is about 88.4 square centimetres per slice.", E('225π ÷ 8 ≈ 88.4') + g('1 slice ≈ 88.4 cm²'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Forgetting the 2 straight edges when asked for the perimeter of a sector. A sector has radius 6 and angle 60. Wrong: the perimeter is just the arc, 6.28. But the perimeter goes all the way around the slice, including both straight edges. Add 12. 18.28.", r('Perimeter = 6.28  ✗') + g('6.28 + 6 + 6 = 18.28  ✓')),
      S("Mistake two. Using the area formula for the arc, or the other way round. Radius 6 and angle 60. Wrong: arc equals a sixth of pi r squared, which is a sixth of 36 pi, 6 pi, about 18.85. That is the sector area. The arc is a sixth of the circumference, a sixth of 12 pi, 2 pi, 6.28.", r('Arc = 1/6 × π × 6² ≈ 18.85  ✗') + g('Arc = 1/6 × 2π × 6 ≈ 6.28  ✓')),
      S("Mistake three. Using the diameter as the radius. A pizza has diameter 30. Wrong: use r equals 30, area of a slice is 1 eighth of pi times 900, which is 354. Halve the diameter first. r is 15. 1 eighth of 225 pi is 88.4.", r('r = 30  ✗  → 353.4') + g('r = 15  ✓  → 88.4'))
    ]),
    L.turn("Your turn! Number one. What fraction of a circle is a sector with angle 45 degrees? Pause and try it.", E('45/360'), "One eighth.", g('1/8')),
    L.turn("Your turn! Number two. Find the arc length for radius 10 and angle 90 degrees, in terms of pi. Pause and try it.", E('1/4 × 2π × 10'), "A quarter of 20 pi is 5 pi.", g('5π cm')),
    L.turn("Your turn! Number three. Find the area of a semicircle sector with radius 4, in terms of pi. Pause and try it.", E('180°, r = 4'), "A half of pi times 16. 8 pi.", g('8π cm²')),
    L.rec('How do you find arc length and sector area?', "A sector is a fraction of a circle, the angle divided by 360. The arc length is that fraction of the circumference. The sector area is that fraction of the area. The perimeter of a sector also includes the 2 radii. To find an angle, find the fraction first.", ['Fraction = angle ÷ 360', 'Arc: fraction of 2πr', 'Area: fraction of πr²', 'Perimeter: add the radii'])
  ]);

  L.use(850, ['How do you find the circumference and area of a circle, exactly and as a decimal?', 'How do you work backwards from the circumference or area of a circle?', 'How do you find arc length and sector area?', 'Circle theorems', 'Chords and tangent lengths', 'Circles, similarity and solids']);

  /* ================= 851 ================= */
  N('How do you use scale drawings and map scales?', 'how to read a scale such as 1 : 50 000 and change between drawing lengths and real lengths.', [
    SC('Scales', 'Start with the basics', [
      S("A scale drawing shows a real thing at a different size. A map shows a whole town on 1 page. An architect's plan shows a house on a sheet of paper. The scale tells us how the drawing and the real thing compare.", V.note('Same shape, different size')),
      S("A scale is written as a ratio. 1 to 50,000 means that one unit on the map stands for 50,000 of the same unit in real life. 1 centimetre on the map is 50,000 centimetres on the ground.", E('1 : 50 000', 'b') + V.rule('1 cm on the map = 50 000 cm real.'))
    ]),
    SC('Map to real', 'Example 1: 3 cm on a 1 : 50 000 map', [
      S("Step one. Multiply the map length by the scale number. 3 times 50,000 is 150,000 centimetres.", E('3 × 50 000 = 150 000 cm')),
      S("Step two. Change the units. Real distances in centimetres are huge. Divide by 100 for metres. 1,500 metres. Divide by 1,000 for kilometres. 1.5 kilometres. A shortcut is that a hundred thousand centimetres is 1 kilometre.", E('150 000 ÷ 100 = 1500 m') + g('= 1.5 km'))
    ]),
    SC('Another', 'Example 2: 8 cm on a 1 : 25 000 map', [
      S("8 times 25,000 is 200,000 centimetres. Divide by 100,000 to get kilometres. 2 kilometres.", E('8 × 25 000 = 200 000 cm') + g('= 2 km'))
    ]),
    SC('A plan', 'Example 3: 1 : 200', [
      S("A house plan has the scale 1 to 200. A room is 5 centimetres long on the plan. 5 times 200 is 1,000 centimetres. That is 10 metres.", E('5 × 200 = 1000 cm') + g('= 10 m'))
    ]),
    SC('Real to drawing', 'Example 4: going the other way', [
      S("Now the reverse. A wall is 12 metres long. How long is it on a plan with scale 1 to 200? Step one. Change to centimetres. 12 metres is twelve hundred centimetres. Step two. Divide by the scale number. 1,200 divided by 200 is 6.", E('12 m = 1200 cm') + g('1200 ÷ 200 = 6 cm')),
      S("A memory trick. Going from the drawing to real life, the real thing is bigger, so multiply. Going from real life to the drawing, the drawing is smaller, so divide.", V.list(['Drawing → real: multiply', 'Real → drawing: divide']))
    ]),
    SC('Finding the scale', 'Example 5: a model car', [
      S("A model car is 12 centimetres long. The real car is 4.8 metres long. What is the scale? Step one. Same units. 4.8 metres is 480 centimetres. Step two. Write the ratio, model to real. 12 to 480.", E('12 : 480')),
      S("Step three. Divide both by 12, to get 1 on the left. 1 to 40. The scale is 1 to 40.", g('1 : 40'))
    ]),
    SC('Other forms', 'Example 6: "1 cm to 5 km"', [
      S("Some maps say 1 centimetre represents 5 kilometres. Then 12 centimetres on the map is 12 times 5, 60 kilometres in real life. This is the same idea, with the units written out.", E('12 × 5 = 60 km', 'g'))
    ]),
    SC('Areas', 'Example 7: a warning', [
      S("A scale gives lengths. If a field is a square of side 2 centimetres on a 1 to 10,000 map, each side is 20,000 centimetres, 200 metres. The area is 200 times 200, 40,000 square metres. We find the real lengths first, then the area. We do not scale the area directly.", E('Side: 2 × 10 000 = 20 000 cm = 200 m') + g('Area = 200 × 200 = 40 000 m²'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Not changing units. 4 centimetres on a 1 to 50,000 map. Wrong: 4 times 50,000 is 200,000, so the distance is 200,000 kilometres. That is about 5 times round the whole Earth! The 200,000 is in centimetres. Divide by 100,000. 2 kilometres.", r('4 × 50 000 = 200 000 km  ✗') + g('200 000 cm = 2 km  ✓')),
      S("Mistake two. Dividing when you should multiply. A map has scale 1 to 25,000. A path is 6 centimetres on the map. Wrong: 6 divided by 25,000. That gives a tiny number. The real path is longer than the map. Multiply. 150,000 centimetres, 1.5 kilometres.", r('6 ÷ 25 000  ✗') + g('6 × 25 000 = 150 000 cm = 1.5 km  ✓')),
      S("Mistake three. Reading 1 to 50,000 as 50,000 metres. 1 centimetre on the map is 50,000 centimetres, which is 500 metres. Wrong: 1 centimetre is 50,000 metres. That is 50 kilometres for 1 centimetre. A whole country would fit on a page, not a town.", r('1 cm = 50 000 m  ✗') + g('1 cm = 50 000 cm = 500 m  ✓'))
    ]),
    SC('In real life', 'Using a map', [
      S("On a 1 to 50,000 map, 1 centimetre is 500 metres. So 2 centimetres is 1 kilometre. A walker who measures 9 centimetres on the map knows the walk is 4 and a half kilometres.", g('9 cm → 4.5 km'))
    ]),
    L.turn("Your turn! Number one. On a map with scale 1 to 10,000, a road is 6 centimetres long. How long is it in metres? Pause and try it.", E('6 × 10 000'), "60,000 centimetres, which is 600 metres.", g('600 m')),
    L.turn("Your turn! Number two. A room is 4 metres long. How long is it on a plan with scale 1 to 50, in centimetres? Pause and try it.", E('400 ÷ 50'), "400 centimetres divided by 50. 8 centimetres.", g('8 cm')),
    L.turn("Your turn! Number three. A model plane is 10 centimetres long. The real plane is 20 metres. What is the scale as 1 to something? Pause and try it.", E('10 : 2000'), "20 metres is 2,000 centimetres. 10 to 2,000 is 1 to 200.", g('1 : 200')),
    L.rec('How do you use scale drawings and map scales?', "A scale such as 1 to 50,000 means 1 unit on the drawing stands for 50,000 of the same unit in real life. To find a real length, multiply the drawing length by the scale number, then change units. To find a drawing length, change the real length to the same unit, and divide. Always convert units at the end.", ['Drawing → real: multiply', 'Real → drawing: divide', 'Change units: cm → m → km', 'Check it makes sense'])
  ]);

  N('How do you use area and volume scale factors for similar shapes?', 'how lengths, areas and volumes change when a shape is enlarged, and how to work backwards.', [
    SC('Similar shapes', 'Start with the basics', [
      S("2 shapes are similar if 1 is an enlargement of the other. They have the same shape, but different sizes. The linear scale factor tells us how many times bigger every length is. If a length of 2 becomes 6, the scale factor is 3.", E('Scale factor k = new length ÷ old length', 'g')),
      S("The big question of this lesson is what happens to the area and the volume. They do not grow in the same way as the lengths.", V.note('Lengths, areas and volumes grow differently'))
    ]),
    SC('Area', 'Example 1: k = 3', [
      S("A rectangle is 2 by 4. Its area is 8. Enlarge it by scale factor 3. The sides are 6 and 12. The new area is 72. How many times bigger is the area? 72 divided by 8 is 9. That is 3 squared.", E('2 × 4 = 8') + E('6 × 12 = 72') + g('72 ÷ 8 = 9 = 3²')),
      S("So the area scale factor is k squared.", V.rule('Area scale factor = k².'))
    ]),
    SC('Volume', 'Example 2: k = 3', [
      S("A cube has side 2. Its volume is 8. Enlarge by scale factor 3. The side is 6. The volume is 6 times 6 times 6, 216. 216 divided by 8 is 27. That is 3 cubed.", E('2³ = 8') + E('6³ = 216') + g('216 ÷ 8 = 27 = 3³')),
      S("So the volume scale factor is k cubed.", V.rule('Volume scale factor = k³.'))
    ]),
    SC('Summary', 'The three scale factors', [
      S("If the lengths are multiplied by k, then the areas are multiplied by k squared, and the volumes by k cubed.", V.tbl([['Length', 'k'], ['Area', 'k²'], ['Volume', 'k³']], ['', 'Multiply by']))
    ]),
    SC('Finding the area', 'Example 3: k = 2.5', [
      S("A photo has area 40 square centimetres. It is enlarged with scale factor 2 and a half. The area scale factor is 2 and a half squared, 6.25. The new area is 40 times 6.25, 250 square centimetres.", E('k² = 2.5² = 6.25') + g('40 × 6.25 = 250 cm²'))
    ]),
    SC('Finding the volume', 'Example 4: a bottle', [
      S("A bottle holds 500 millilitres. A similar bottle is twice as tall. The volume scale factor is 2 cubed, 8. So it holds 500 times 8, 4,000 millilitres, 4 litres.", E('k³ = 2³ = 8') + g('500 × 8 = 4000 ml = 4 litres'))
    ]),
    SC('Working backwards', 'Example 5: from areas to k', [
      S("2 similar shapes have areas 20 and 45 square centimetres. Find the linear scale factor. Step one. The area scale factor is 45 over 20, which is 9 over 4. Step two. Take the square root to get the linear factor. The square root of 9 over 4 is 3 over 2.", E('45 ÷ 20 = 9/4') + g('k = √(9/4) = 3/2')),
      S("So the lengths of the bigger shape are 1 and a half times the lengths of the smaller.", V.note('Lengths ×1.5'))
    ]),
    SC('From volumes', 'Example 6: cube roots', [
      S("2 similar solids have volumes 24 and 81. Find the length scale factor. The volume scale factor is 81 over 24, which is 27 over 8. Take the cube root. The cube root of 27 is 3. The cube root of 8 is 2. So k is 3 over 2.", E('81 ÷ 24 = 27/8') + g('k = ∛(27/8) = 3/2'))
    ]),
    SC('A missing length', 'Example 7: using the factor', [
      S("2 similar cones have volumes 64 and 216. The small cone is 4 centimetres tall. How tall is the large 1? The volume factor is 216 over 64, which is 27 over 8. The length factor is 3 over 2. The height is 4 times 1 and a half, 6.", E('k = ∛(27/8) = 1.5') + g('Height = 4 × 1.5 = 6 cm'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Using the length scale factor for the area. A shape has area 8, and is enlarged by scale factor 3. Wrong: 8 times 3, 24. That would only be right if we only stretched in 1 direction. The area is multiplied by 3 squared, 9. 8 times 9 is 72.", r('8 × 3 = 24  ✗') + g('8 × 3² = 72  ✓')),
      S("Mistake two. Not square rooting when going from an area ratio. 2 similar shapes have areas in the ratio 9 to 1. Wrong: the lengths are in the ratio 9 to 1. The area ratio is the square of the length ratio. So the lengths are in the ratio 3 to 1, the square root of 9.", r('Lengths 9 : 1  ✗') + g('Lengths √9 : √1 = 3 : 1  ✓')),
      S("Mistake three. Square rooting a volume ratio. Volumes are in the ratio 8 to 1. Wrong: the length ratio is the square root of 8, about 2.8. For volumes we use the cube root. The cube root of 8 is 2. The lengths are in the ratio 2 to 1.", r('√8 ≈ 2.83  ✗') + g('∛8 = 2  ✓'))
    ]),
    SC('In real life', 'Why giants cannot exist', [
      S("A person twice as tall has 4 times the skin area, but 8 times the volume, and so about 8 times the weight. Bones scale with area, but weight scales with volume. This is why a human 10 times taller would break their own legs. Area and volume scale factors explain real limits in nature.", V.note('Weight grows as k³, bones as k²'))
    ]),
    L.turn("Your turn! Number one. A shape has area 10. It is enlarged with scale factor 4. What is the new area? Pause and try it.", E('10 × 4²'), "4 squared is 16. 10 times 16 is 160.", g('160')),
    L.turn("Your turn! Number two. 2 similar solids have volumes 8 and 64. What is the length scale factor? Pause and try it.", E('64 ÷ 8 = 8'), "The volume factor is 8. The cube root of 8 is 2.", g('k = 2')),
    L.turn("Your turn! Number three. 2 similar shapes have areas in the ratio 16 to 25. What is the ratio of their lengths? Pause and try it.", E('16 : 25'), "Square root both. 4 to 5.", g('4 : 5')),
    L.rec('How do you use area and volume scale factors?', "For similar shapes with length scale factor k, the area scale factor is k squared and the volume scale factor is k cubed. To go from an area ratio to a length ratio, take the square root. From a volume ratio, take the cube root.", ['Length: k', 'Area: k²', 'Volume: k³', 'Backwards: √ or ∛'])
  ]);

  N('How do you measure and calculate with bearings?', 'how to give directions as three-figure bearings, find back bearings and solve journey problems.', [
    SC('Bearings', 'Start with the basics', [
      S("A bearing is a way of giving a direction, as an angle. It is always measured from north, and always measured clockwise. It is always written with 3 figures.", V.list(['From north', 'Clockwise', 'Three figures'])),
      S("North is 0 0 0 degrees. East is 0 9 0. South is 1 8 0. West is 2 7 0. Between them, the angles fill in. North east is 0 4 5.", V.tbl([['North', '000°'], ['East', '090°'], ['South', '180°'], ['West', '270°']], ['Direction', 'Bearing']))
    ]),
    SC('Reading', 'Example 1: what the bearing means', [
      S("Bearing 1 3 0. Stand at the point. Face north. Turn clockwise through a hundred and 30 degrees. That is a direction a little east of south. That is the way you are looking.", E('130°: past east (090°), before south (180°)'))
    ]),
    SC('Three figures', 'Example 2: writing it properly', [
      S("If the angle has fewer than 3 figures, add zeros at the front. 45 degrees is 0 4 5. 7 degrees is 0 0 7.", E('45° → 045°') + E('7° → 007°'))
    ]),
    SC('Back bearings', 'Example 3: the way back', [
      S("The bearing of B from A is 1 3 0 degrees. What is the bearing of A from B? That is the back bearing. Go the other way. We add or subtract a hundred and 80 degrees. A hundred and 30 plus a hundred and 80 is 310.", E('130 + 180 = 310') + g('Bearing of A from B = 310°')),
      S("Another. The bearing of B from A is 2 5 0. Add a hundred and 80. That gives 430. That is more than 360, so subtract 360. 70. Written with 3 figures, 0 7 0.", E('250 + 180 = 430') + E('430 − 360 = 70') + g('070°')),
      S("A rule. If the bearing is less than a hundred and 80, add a hundred and 80. If it is more than a hundred and 80, subtract a hundred and 80.", V.rule('< 180: add 180.   > 180: subtract 180.'))
    ]),
    SC('A journey', 'Example 4: a ship sails 8 km on 040° then 6 km on 130°', [
      S("A ship leaves port P. It sails 8 kilometres on a bearing of 0 4 0. Then 6 kilometres on a bearing of 1 3 0. How far is it from P, and what is the bearing of the ship from P? The second bearing is 90 degrees more than the first, so the ship turned right by exactly 90 degrees. We have a right-angled triangle.", E('040° then 130°: a right angle')),
      S("Step one. The distance back to P is the hypotenuse. 8 squared plus 6 squared is 64 plus 36, 100. Square root. 10 kilometres.", E('8² + 6² = 100') + g('Distance = 10 km')),
      S("Step two. The angle at P inside the triangle. Tangent of the angle is opposite over adjacent, 6 over 8. The angle is about 37 degrees. Step three. The bearing of the ship from P is 0 4 0 plus 37, which is 0 7 7.", E('tan θ = 6/8 → θ ≈ 36.9°') + g('Bearing ≈ 040° + 37° = 077°'))
    ]),
    SC('East and north', 'Example 5: how far north and east', [
      S("A boat sails 10 kilometres on a bearing of 0 6 0. How far east and how far north has it gone? Bearings are measured from north, so the angle is between the journey and the north line. The north distance is the adjacent side. 10 times cosine of 60 degrees. That is 5.", E('North = 10 × cos 60° = 5 km')),
      S("The east distance is the opposite side. 10 times sine of 60. That is 8.66 kilometres. Check with Pythagoras. 5 squared plus 8.66 squared is 25 plus 75, 100. Square root, 10. Correct.", E('East = 10 × sin 60° ≈ 8.66 km') + E('5² + 8.66² ≈ 100 ✓'))
    ]),
    SC('Drawing', 'Example 6: scale drawing', [
      S("To draw a bearing, place a protractor at the point, with 0 pointing north. Measure the angle clockwise. Mark it, and draw a line of the right length at the chosen scale. Always draw a north line at every point first.", V.rule('Draw a north line at every point.'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Measuring from east, as in graphs, instead of from north. Due east is a bearing of 0 9 0. Wrong: calling due east 0 degrees. 0 degrees is north. A ship going east is on bearing 0 9 0, not 0 0 0.", r('East = 000°  ✗') + g('East = 090°  ✓')),
      S("Mistake two. Not writing 3 figures. A bearing of 45 degrees is written 0 4 5. Wrong: 45. And 7 degrees is 0 0 7. Wrong: 7. Examiners expect 3 figures.", r('45°  ✗   7°  ✗') + g('045°  ✓   007°  ✓')),
      S("Mistake three. Not reducing a back bearing. The bearing of B from A is 2 5 0. Wrong: add 1 80 to get 4 3 0, and give that as the answer. Bearings go up to 359. Subtract 360. 70. 0 7 0. Or, since it is over 1 80, just subtract 1 80. 70. Same answer.", r('250 + 180 = 430°  ✗') + g('430 − 360 = 070°  ✓'))
    ]),
    SC('In real life', 'Ships and planes', [
      S("Ships, aircraft and walkers use bearings. A pilot is told to fly on a heading of 2 4 0. Air traffic control can then predict where the plane will be. Bearings use the same idea as the compass on a phone.", V.note('Pilots, sailors, walkers'))
    ]),
    L.turn("Your turn! Number one. What is the back bearing of a line with bearing 60? Pause and try it.", E('060°'), "60 plus 1 80 is 2 4 0.", g('240°')),
    L.turn("Your turn! Number two. Write a direction of 80 degrees as a 3-figure bearing. Pause and try it.", E('80°'), "Zero eight zero.", g('080°')),
    L.turn("Your turn! Number three. A walker goes 6 kilometres on bearing 0 9 0, then 8 kilometres on bearing 1 8 0. How far is she from the start? Pause and try it.", E('6² + 8²'), "East, then south, a right angle. 36 plus 64 is 100. 10 kilometres.", g('10 km')),
    L.rec('How do you measure and calculate with bearings?', "A bearing is an angle measured clockwise from north, written with 3 figures. The back bearing is found by adding or subtracting 180. For journeys, draw a north line at every point, make a triangle, and use Pythagoras or trigonometry. Sine gives the east distance and cosine gives the north distance from a bearing.", ['Clockwise from north', 'Three figures', 'Back bearing ±180', 'North and east: cos and sin'])
  ]);

  L.use(851, ['How do you construct triangles?', 'What are angles in triangles and quadrilaterals?', 'What is a linear scale factor?', 'How do you use scale drawings and map scales?', 'Similar triangles', 'How do you use area and volume scale factors for similar shapes?', 'Angles of elevation', 'How do you measure and calculate with bearings?', 'Circles, similarity and solids', 'Polygon angles, bearings and coordinates']);
})();
