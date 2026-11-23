(function () {
  var BT = window.BT; if (!BT || !BT.L || !BT.sv || !BT.lk) return;
  var L = BT.L, V = BT.sv, E = L.E, S = L.st, SC = L.SC,
    g = function (t) { return E(t, 'g'); }, r = function (t) { return E(t, 'r'); };
  function N(title, goal, scenes) { L.full(title, scenes); return L.ep(title, goal, []); }

  /* ================= 850 ================= */
  N('How do you find the circumference and area of a circle, exactly and as a decimal?', 'how to use the formulae for circles, give answers in terms of pi, and work with semicircles and quarter circles.', [
    SC('Parts of a circle', 'Start with the basics', [
      S("A circle has a centre. The radius is the distance from the centre to the edge. The diameter goes right across through the centre, so it is twice the radius. The distance all the way around the edge is called the circumference.", V.list(['Radius r: centre to edge', 'Diameter d = 2r', 'Circumference: around the edge'])),
      S("There is a special number called pi. It is the circumference divided by the diameter, for every circle. Pi is about three point one four one six. It never ends, so on a calculator we use the pi button.", E('π ≈ 3.1416', 'g'))
    ]),
    SC('Two formulae', 'Circumference and area', [
      S("To find the circumference, multiply pi by the diameter. Or, because the diameter is two radii, two times pi times the radius.", E('C = πd = 2πr', 'g')),
      S("To find the area, the amount of flat space inside, use pi times the radius squared. Radius squared means radius times radius.", E('A = πr²', 'g') + V.rule('Circumference: a length. Area: squares.'))
    ]),
    SC('Example 1', 'Radius 5 cm, step by step', [
      S("Step one. Write down the radius. r equals five. Step two. Circumference. Two times pi times five. Two times five is ten. So ten pi. On a calculator, ten times pi is thirty-one point four. To one decimal place.", E('C = 2 × π × 5 = 10π') + g('C ≈ 31.4 cm')),
      S("Step three. Area. Pi times five squared. Five squared is twenty-five. So twenty-five pi. On a calculator, seventy-eight point five.", E('A = π × 5² = 25π') + g('A ≈ 78.5 cm²')),
      S("Notice the units. Circumference is a length, in centimetres. Area is in square centimetres.", V.rule('cm for length, cm² for area.'))
    ]),
    SC('Example 2', 'Diameter 12 cm', [
      S("This time we are given the diameter. For the circumference we can use the diameter directly. Pi times twelve. Twelve pi, about thirty-seven point seven.", E('C = π × 12 = 12π') + g('C ≈ 37.7 cm')),
      S("For the area, we need the radius. Halve the diameter. Twelve divided by two is six. Then pi times six squared. Six squared is thirty-six. Thirty-six pi, about one hundred and thirteen point one.", E('r = 12 ÷ 2 = 6') + E('A = π × 6² = 36π') + g('A ≈ 113.1 cm²'))
    ]),
    SC('Exact answers', 'Example 3: in terms of π', [
      S("Sometimes a question asks for the answer in terms of pi. This means leave pi in the answer, and do not use a calculator for it. It is the exact answer. A circle has radius three. The circumference is two times pi times three. Six pi. The area is pi times nine. Nine pi.", E('C = 2π(3) = 6π', 'g') + E('A = π(3²) = 9π', 'g')),
      S("Write the number first, then pi. Six pi, not pi six. Exact answers are neat, and they have no rounding error.", V.rule('Number first, then π.'))
    ]),
    SC('Semicircle', 'Example 4: a half circle with diameter 10', [
      S("A semicircle is half a circle. Its perimeter has two parts. The curved edge, which is half of the circumference. And the straight edge across the diameter. Do not forget that one.", V.list(['Curved edge: ½ × πd', 'Straight edge: d'])),
      S("Curved part: half of pi times ten, which is five pi, about fifteen point seven. Straight part: ten. Add them. Five pi plus ten, about twenty-five point seven centimetres.", E('½ × π × 10 = 5π ≈ 15.7') + g('Perimeter = 5π + 10 ≈ 25.7 cm')),
      S("The area of a semicircle with diameter ten. The radius is five. Half of pi times twenty-five. That is twelve and a half pi, about thirty-nine point three.", E('A = ½ × π × 5² = 12.5π') + g('≈ 39.3 cm²'))
    ]),
    SC('Quarter circle', 'Example 5: radius 8', [
      S("A quarter circle has a curved edge that is a quarter of the circumference, and two straight edges, each a radius. The full circumference is two pi times eight, sixteen pi. A quarter of that is four pi, about twelve point five seven. The two straight edges are eight plus eight, sixteen.", E('¼ × 16π = 4π ≈ 12.57') + E('8 + 8 = 16')),
      S("Perimeter is about twenty-eight point six. The area is a quarter of pi times sixty-four. That is sixteen pi, about fifty point three.", g('Perimeter ≈ 28.6 cm') + g('Area = 16π ≈ 50.3 cm²'))
    ]),
    SC('A wheel', 'Example 6: how many turns?', [
      S("A bicycle wheel has diameter seventy centimetres. One full turn takes the bike forward one circumference. Pi times seventy is about two hundred and nineteen point nine centimetres, or about two point two metres.", E('C = π × 70 ≈ 219.9 cm')),
      S("How many turns for a hundred metres? A hundred metres is ten thousand centimetres. Ten thousand divided by two hundred and nineteen point nine is about forty-five and a half turns.", E('10 000 ÷ 219.9 ≈ 45.5') + g('About 45 and a half turns'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Using the diameter where the radius is needed. A circle has diameter ten. Here is the wrong way. Area equals pi times ten squared, which is three hundred and fourteen. That is far too big. The area formula needs the radius. Halve the diameter first, to get five. Then pi times twenty-five, which is seventy-eight point five.", r('A = π × 10² ≈ 314.2  ✗') + g('r = 5 → A = π × 5² ≈ 78.5  ✓')),
      S("Mistake two. Mixing up the formulae. A circle has radius four. Wrong: area equals two pi r, two times pi times four, twenty-five point one. That is the circumference formula. The area formula is pi r squared. Pi times sixteen, fifty point three.", r('A = 2π × 4 ≈ 25.1  ✗') + g('A = π × 4² ≈ 50.3  ✓')),
      S("Mistake three. Squaring wrongly. Radius three. Wrong: pi times three squared, worked out as pi times three times two, which is eighteen point nine. Squared means times itself. Three times three is nine. Pi times nine is twenty-eight point three.", r('π × 3 × 2 ≈ 18.8  ✗') + g('π × 3 × 3 = 9π ≈ 28.3  ✓'))
    ]),
    SC('In real life', 'Pizzas', [
      S("A pizza with diameter thirty centimetres has area pi times fifteen squared, two hundred and twenty-five pi, about seven hundred and seven square centimetres. A pizza of diameter forty has area pi times four hundred, about one thousand two hundred and fifty-seven. It is only a third bigger across, but the area is nearly two times bigger. That is why bigger pizzas can be better value.", g('30 cm: ≈ 707 cm²') + g('40 cm: ≈ 1257 cm²'))
    ]),
    L.turn("Your turn! Number one. Find the circumference of a circle with diameter fourteen centimetres, to one decimal place. Pause and try it.", E('C = π × 14'), "Pi times fourteen is forty-four point zero. About forty-four centimetres.", g('C ≈ 44.0 cm')),
    L.turn("Your turn! Number two. Find the area of a circle with radius two, in terms of pi. Pause and try it.", E('A = π × 2²'), "Pi times four. Four pi.", g('A = 4π cm²')),
    L.turn("Your turn! Number three. Find the perimeter of a semicircle with diameter eight, to one decimal place. Pause and try it.", E('4π + 8'), "The curved part is four pi, twelve point six. Plus the straight edge, eight. Twenty point six.", g('≈ 20.6 cm')),
    L.rec('How do you find the circumference and area of a circle?', "The circumference is pi times the diameter, or two pi r. The area is pi r squared, and the radius is half the diameter. Leave pi in the answer when asked for an exact answer. For semicircles and quarter circles, take the fraction of the circle for the curved edge, and add the straight edges.", ['C = πd = 2πr', 'A = πr²', 'Halve the diameter for r', 'Add the straight edges'])
  ]);

  N('How do you work backwards from the circumference or area of a circle?', 'how to find the radius or diameter when the circumference or area is given.', [
    SC('Working backwards', 'Start with the basics', [
      S("Sometimes we know the circumference or the area, and we need the radius or the diameter. We use the same formulae, but rearranged. It is the same as solving an equation.", V.rule('Same formula. Solve for r.')),
      S("For the circumference, C equals pi d. To find d, divide the circumference by pi. For the area, A equals pi r squared. Divide by pi to get r squared, then take the square root.", E('d = C ÷ π') + E('r² = A ÷ π, then r = √(A ÷ π)'))
    ]),
    SC('From circumference', 'Example 1: C = 31.4 cm', [
      S("The circumference of a circle is thirty-one point four centimetres. Find the diameter and radius. Step one. Write the formula. C equals pi d. Step two. Put in the number. Thirty-one point four equals pi times d.", E('31.4 = π × d')),
      S("Step three. Divide both sides by pi. d equals thirty-one point four divided by pi. That is ten. Step four. The radius is half the diameter. Five.", E('d = 31.4 ÷ π = 10') + g('d = 10 cm, r = 5 cm')),
      S("Check. Pi times ten is thirty-one point four. Correct.", V.rule('Check by going forwards.'))
    ]),
    SC('Not neat', 'Example 2: C = 20 m', [
      S("A circular path has circumference twenty metres. Find the radius. The formula with the radius is C equals two pi r. So twenty equals two pi r. Divide by two pi. Two pi is about six point two eight three. Twenty divided by six point two eight three is three point one eight.", E('20 = 2πr') + E('r = 20 ÷ 2π ≈ 3.18')),
      S("The radius is about three point two metres, to one decimal place.", g('r ≈ 3.2 m'))
    ]),
    SC('From area', 'Example 3: A = 50.27 cm²', [
      S("The area is fifty point two seven. Find the radius. Step one. A equals pi r squared. Fifty point two seven equals pi r squared. Step two. Divide by pi. r squared equals fifty point two seven divided by pi. That is sixteen.", E('50.27 = πr²') + E('r² = 50.27 ÷ π = 16')),
      S("Step three. We want r, not r squared. Take the square root. The square root of sixteen is four. The radius is four.", g('r = √16 = 4 cm'))
    ]),
    SC('Another', 'Example 4: A = 100 cm²', [
      S("Area one hundred. r squared equals one hundred divided by pi, thirty-one point eight three. Square root. Five point six four. To one decimal place, five point six.", E('r² = 100 ÷ π ≈ 31.83') + g('r ≈ 5.6 cm'))
    ]),
    SC('Exact answers', 'Example 5: A = 49π', [
      S("If the area is given in terms of pi, it is even easier. A equals forty-nine pi. So pi r squared equals forty-nine pi. Divide both sides by pi. r squared is forty-nine. The radius is seven. The circumference is two pi times seven, fourteen pi.", E('πr² = 49π') + E('r² = 49') + g('r = 7') + g('C = 14π'))
    ]),
    SC('A real problem', 'Example 6: a pond', [
      S("A round pond has area twelve point five seven square metres. A fence goes around the edge. How long is the fence? We need the circumference. First find r. r squared is twelve point five seven divided by pi, four. So r is two. Now the circumference is two pi times two, four pi, about twelve point six metres.", E('r² = 12.57 ÷ π = 4') + E('r = 2') + g('C = 4π ≈ 12.6 m'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Forgetting the square root. The area is fifty point three. Wrong working. r squared is sixteen, so the radius is sixteen. That cannot be right. A circle of radius sixteen has area about eight hundred. The radius is the square root of sixteen, four.", r('r² = 16 → r = 16  ✗') + g('r = √16 = 4  ✓')),
      S("Mistake two. Confusing diameter and radius. The circumference is twenty. Wrong: divide by pi, six point four, and call that the radius. Twenty divided by pi is the diameter. The radius is half of that. Three point two.", r('r = 20 ÷ π ≈ 6.4  ✗') + g('d = 6.4, so r = 3.2  ✓')),
      S("Mistake three. Multiplying instead of dividing by pi. The circumference is thirty-one point four. Wrong: multiply by pi. Thirty-one point four times pi is ninety-eight point six. A circle with diameter ninety-eight would have circumference much more than thirty-one. We should divide by pi. Ten.", r('d = 31.4 × π ≈ 98.6  ✗') + g('d = 31.4 ÷ π = 10  ✓'))
    ]),
    SC('In real life', 'Tree trunks', [
      S("Foresters measure a tree by wrapping a tape around the trunk. They get the circumference, say one hundred and fifty-seven centimetres. Dividing by pi gives the diameter, fifty centimetres. They never need to cut the tree.", g('157 ÷ π = 50 cm'))
    ]),
    L.turn("Your turn! Number one. The circumference of a circle is twenty-five point one. Find the diameter to the nearest whole number. Pause and try it.", E('25.1 ÷ π'), "Twenty-five point one divided by pi is eight.", g('d = 8')),
    L.turn("Your turn! Number two. The area is twenty-eight point three. Find r squared, to the nearest whole number. Pause and try it.", E('28.3 ÷ π'), "About nine.", g('r² ≈ 9')),
    L.turn("Your turn! Number three. And so what is the radius? Pause and try it.", E('r² = 9'), "Three.", g('r = 3')),
    L.rec('How do you work backwards from the circumference or area?', "For the circumference, divide by pi to find the diameter, then halve it for the radius. For the area, divide by pi to get r squared, then take the square root. Check by working forwards.", ['d = C ÷ π', 'r² = A ÷ π', 'Square root for r', 'Check by going forwards'])
  ]);

  N('How do you find arc length and sector area?', 'how to find part of the circumference or area using a fraction of the circle.', [
    SC('Sectors and arcs', 'Start with the basics', [
      S("Cut a slice of pizza from the centre. The slice is called a sector. The curved edge of the slice is called an arc. The two straight edges are radii.", V.list(['Sector: a slice of the circle', 'Arc: the curved edge', 'Two radii: the straight edges'])),
      S("The big idea is that a sector is a fraction of the whole circle. The fraction is the angle at the centre divided by three hundred and sixty, because a full circle is three hundred and sixty degrees.", E('Fraction = angle ÷ 360', 'g'))
    ]),
    SC('Fractions', 'Example 1: from angles to fractions', [
      S("Ninety degrees. Ninety over three hundred and sixty is a quarter. Sixty degrees is a sixth. A hundred and twenty degrees is a third. A hundred and eighty degrees is a half.", V.tbl([['90°', '1/4'], ['60°', '1/6'], ['120°', '1/3'], ['180°', '1/2']], ['Angle', 'Fraction'])),
      S("For other angles, simplify the fraction. Forty-five over three hundred and sixty is one eighth. A hundred and thirty-five over three hundred and sixty is three eighths.", E('45/360 = 1/8') + E('135/360 = 3/8'))
    ]),
    SC('Arc length', 'Example 2: radius 6, angle 60°', [
      S("Step one. Find the fraction. Sixty over three hundred and sixty, a sixth. Step two. Find the whole circumference. Two pi times six, twelve pi.", E('Fraction = 60/360 = 1/6') + E('C = 2π × 6 = 12π')),
      S("Step three. Multiply. A sixth of twelve pi is two pi. About six point two eight centimetres.", g('Arc = 1/6 × 12π = 2π ≈ 6.28 cm'))
    ]),
    SC('Sector area', 'Example 3: the same sector', [
      S("For the area, find the area of the whole circle. Pi times six squared, thirty-six pi. Then take a sixth of it. Six pi. About eighteen point eight five square centimetres.", E('A = π × 6² = 36π') + g('Sector = 1/6 × 36π = 6π ≈ 18.85 cm²'))
    ]),
    SC('A bigger angle', 'Example 4: radius 8, angle 135°', [
      S("The fraction is three eighths. The circumference is two pi times eight, sixteen pi. The arc is three eighths of sixteen pi. Sixteen divided by eight is two. Two times three is six. Six pi. About eighteen point eight five.", E('3/8 × 16π = 6π') + g('Arc ≈ 18.85')),
      S("The area of the whole circle is pi times sixty-four. Three eighths of that is twenty-four pi. About seventy-five point four.", E('3/8 × 64π = 24π') + g('Area ≈ 75.40'))
    ]),
    SC('Perimeter of a sector', 'Example 5: do not forget the radii', [
      S("The perimeter of the sector in Example two is the arc, plus the two straight edges. The arc is two pi, about six point two eight. The two radii are six plus six, twelve. The perimeter is about eighteen point two eight centimetres.", E('Arc ≈ 6.28') + E('Radii = 6 + 6 = 12') + g('Perimeter ≈ 18.28 cm'))
    ]),
    SC('Backwards', 'Example 6: finding the angle', [
      S("An arc of length five pi is part of a circle with radius twelve. What angle is at the centre? First the whole circumference. Two pi times twelve, twenty-four pi. The fraction is five pi over twenty-four pi, which is five twenty-fourths.", E('C = 24π') + E('Fraction = 5π/24π = 5/24')),
      S("The angle is five twenty-fourths of three hundred and sixty. Three hundred and sixty divided by twenty-four is fifteen. Fifteen times five is seventy-five degrees.", g('Angle = 5/24 × 360 = 75°'))
    ]),
    SC('A real slice', 'Example 7: a pizza', [
      S("A pizza has radius fifteen centimetres, and is cut into eight equal slices. Each slice has angle forty-five degrees, one eighth. The whole pizza has area pi times two hundred and twenty-five. One eighth of that is about eighty-eight point four square centimetres per slice.", E('225π ÷ 8 ≈ 88.4') + g('One slice ≈ 88.4 cm²'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Forgetting the two straight edges when asked for the perimeter of a sector. A sector has radius six and angle sixty. Wrong: the perimeter is just the arc, six point two eight. But the perimeter goes all the way around the slice, including both straight edges. Add twelve. Eighteen point two eight.", r('Perimeter = 6.28  ✗') + g('6.28 + 6 + 6 = 18.28  ✓')),
      S("Mistake two. Using the area formula for the arc, or the other way round. Radius six and angle sixty. Wrong: arc equals a sixth of pi r squared, which is a sixth of thirty-six pi, six pi, about eighteen point eight five. That is the sector area. The arc is a sixth of the circumference, a sixth of twelve pi, two pi, six point two eight.", r('Arc = 1/6 × π × 6² ≈ 18.85  ✗') + g('Arc = 1/6 × 2π × 6 ≈ 6.28  ✓')),
      S("Mistake three. Using the diameter as the radius. A pizza has diameter thirty. Wrong: use r equals thirty, area of a slice is one eighth of pi times nine hundred, which is three hundred and fifty-four. Halve the diameter first. r is fifteen. One eighth of two hundred and twenty-five pi is eighty-eight point four.", r('r = 30  ✗  → 353.4') + g('r = 15  ✓  → 88.4'))
    ]),
    L.turn("Your turn! Number one. What fraction of a circle is a sector with angle forty-five degrees? Pause and try it.", E('45/360'), "One eighth.", g('1/8')),
    L.turn("Your turn! Number two. Find the arc length for radius ten and angle ninety degrees, in terms of pi. Pause and try it.", E('1/4 × 2π × 10'), "A quarter of twenty pi is five pi.", g('5π cm')),
    L.turn("Your turn! Number three. Find the area of a semicircle sector with radius four, in terms of pi. Pause and try it.", E('180°, r = 4'), "A half of pi times sixteen. Eight pi.", g('8π cm²')),
    L.rec('How do you find arc length and sector area?', "A sector is a fraction of a circle, the angle divided by three hundred and sixty. The arc length is that fraction of the circumference. The sector area is that fraction of the area. The perimeter of a sector also includes the two radii. To find an angle, find the fraction first.", ['Fraction = angle ÷ 360', 'Arc: fraction of 2πr', 'Area: fraction of πr²', 'Perimeter: add the radii'])
  ]);

  L.use(850, ['How do you find the circumference and area of a circle, exactly and as a decimal?', 'How do you work backwards from the circumference or area of a circle?', 'How do you find arc length and sector area?', 'Circle theorems', 'Chords and tangent lengths', 'Circles, similarity and solids']);

  /* ================= 851 ================= */
  N('How do you use scale drawings and map scales?', 'how to read a scale such as 1 : 50 000 and change between drawing lengths and real lengths.', [
    SC('Scales', 'Start with the basics', [
      S("A scale drawing shows a real thing at a different size. A map shows a whole town on one page. An architect's plan shows a house on a sheet of paper. The scale tells us how the drawing and the real thing compare.", V.note('Same shape, different size')),
      S("A scale is written as a ratio. One to fifty thousand means that one unit on the map stands for fifty thousand of the same unit in real life. One centimetre on the map is fifty thousand centimetres on the ground.", E('1 : 50 000', 'b') + V.rule('1 cm on the map = 50 000 cm real.'))
    ]),
    SC('Map to real', 'Example 1: 3 cm on a 1 : 50 000 map', [
      S("Step one. Multiply the map length by the scale number. Three times fifty thousand is one hundred and fifty thousand centimetres.", E('3 × 50 000 = 150 000 cm')),
      S("Step two. Change the units. Real distances in centimetres are huge. Divide by one hundred for metres. One thousand five hundred metres. Divide by one thousand for kilometres. One point five kilometres. A shortcut is that a hundred thousand centimetres is one kilometre.", E('150 000 ÷ 100 = 1500 m') + g('= 1.5 km'))
    ]),
    SC('Another', 'Example 2: 8 cm on a 1 : 25 000 map', [
      S("Eight times twenty-five thousand is two hundred thousand centimetres. Divide by one hundred thousand to get kilometres. Two kilometres.", E('8 × 25 000 = 200 000 cm') + g('= 2 km'))
    ]),
    SC('A plan', 'Example 3: 1 : 200', [
      S("A house plan has the scale one to two hundred. A room is five centimetres long on the plan. Five times two hundred is one thousand centimetres. That is ten metres.", E('5 × 200 = 1000 cm') + g('= 10 m'))
    ]),
    SC('Real to drawing', 'Example 4: going the other way', [
      S("Now the reverse. A wall is twelve metres long. How long is it on a plan with scale one to two hundred? Step one. Change to centimetres. Twelve metres is twelve hundred centimetres. Step two. Divide by the scale number. One thousand two hundred divided by two hundred is six.", E('12 m = 1200 cm') + g('1200 ÷ 200 = 6 cm')),
      S("A memory trick. Going from the drawing to real life, the real thing is bigger, so multiply. Going from real life to the drawing, the drawing is smaller, so divide.", V.list(['Drawing → real: multiply', 'Real → drawing: divide']))
    ]),
    SC('Finding the scale', 'Example 5: a model car', [
      S("A model car is twelve centimetres long. The real car is four point eight metres long. What is the scale? Step one. Same units. Four point eight metres is four hundred and eighty centimetres. Step two. Write the ratio, model to real. Twelve to four hundred and eighty.", E('12 : 480')),
      S("Step three. Divide both by twelve, to get one on the left. One to forty. The scale is one to forty.", g('1 : 40'))
    ]),
    SC('Other forms', 'Example 6: "1 cm to 5 km"', [
      S("Some maps say one centimetre represents five kilometres. Then twelve centimetres on the map is twelve times five, sixty kilometres in real life. This is the same idea, with the units written out.", E('12 × 5 = 60 km', 'g'))
    ]),
    SC('Areas', 'Example 7: a warning', [
      S("A scale gives lengths. If a field is a square of side two centimetres on a one to ten thousand map, each side is twenty thousand centimetres, two hundred metres. The area is two hundred times two hundred, forty thousand square metres. We find the real lengths first, then the area. We do not scale the area directly.", E('Side: 2 × 10 000 = 20 000 cm = 200 m') + g('Area = 200 × 200 = 40 000 m²'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Not changing units. Four centimetres on a one to fifty thousand map. Wrong: four times fifty thousand is two hundred thousand, so the distance is two hundred thousand kilometres. That is about five times round the whole Earth! The two hundred thousand is in centimetres. Divide by one hundred thousand. Two kilometres.", r('4 × 50 000 = 200 000 km  ✗') + g('200 000 cm = 2 km  ✓')),
      S("Mistake two. Dividing when you should multiply. A map has scale one to twenty-five thousand. A path is six centimetres on the map. Wrong: six divided by twenty-five thousand. That gives a tiny number. The real path is longer than the map. Multiply. One hundred and fifty thousand centimetres, one point five kilometres.", r('6 ÷ 25 000  ✗') + g('6 × 25 000 = 150 000 cm = 1.5 km  ✓')),
      S("Mistake three. Reading one to fifty thousand as fifty thousand metres. One centimetre on the map is fifty thousand centimetres, which is five hundred metres. Wrong: one centimetre is fifty thousand metres. That is fifty kilometres for one centimetre. A whole country would fit on a page, not a town.", r('1 cm = 50 000 m  ✗') + g('1 cm = 50 000 cm = 500 m  ✓'))
    ]),
    SC('In real life', 'Using a map', [
      S("On a one to fifty thousand map, one centimetre is five hundred metres. So two centimetres is one kilometre. A walker who measures nine centimetres on the map knows the walk is four and a half kilometres.", g('9 cm → 4.5 km'))
    ]),
    L.turn("Your turn! Number one. On a map with scale one to ten thousand, a road is six centimetres long. How long is it in metres? Pause and try it.", E('6 × 10 000'), "Sixty thousand centimetres, which is six hundred metres.", g('600 m')),
    L.turn("Your turn! Number two. A room is four metres long. How long is it on a plan with scale one to fifty, in centimetres? Pause and try it.", E('400 ÷ 50'), "Four hundred centimetres divided by fifty. Eight centimetres.", g('8 cm')),
    L.turn("Your turn! Number three. A model plane is ten centimetres long. The real plane is twenty metres. What is the scale as one to something? Pause and try it.", E('10 : 2000'), "Twenty metres is two thousand centimetres. Ten to two thousand is one to two hundred.", g('1 : 200')),
    L.rec('How do you use scale drawings and map scales?', "A scale such as one to fifty thousand means one unit on the drawing stands for fifty thousand of the same unit in real life. To find a real length, multiply the drawing length by the scale number, then change units. To find a drawing length, change the real length to the same unit, and divide. Always convert units at the end.", ['Drawing → real: multiply', 'Real → drawing: divide', 'Change units: cm → m → km', 'Check it makes sense'])
  ]);

  N('How do you use area and volume scale factors for similar shapes?', 'how lengths, areas and volumes change when a shape is enlarged, and how to work backwards.', [
    SC('Similar shapes', 'Start with the basics', [
      S("Two shapes are similar if one is an enlargement of the other. They have the same shape, but different sizes. The linear scale factor tells us how many times bigger every length is. If a length of two becomes six, the scale factor is three.", E('Scale factor k = new length ÷ old length', 'g')),
      S("The big question of this lesson is what happens to the area and the volume. They do not grow in the same way as the lengths.", V.note('Lengths, areas and volumes grow differently'))
    ]),
    SC('Area', 'Example 1: k = 3', [
      S("A rectangle is two by four. Its area is eight. Enlarge it by scale factor three. The sides are six and twelve. The new area is seventy-two. How many times bigger is the area? Seventy-two divided by eight is nine. That is three squared.", E('2 × 4 = 8') + E('6 × 12 = 72') + g('72 ÷ 8 = 9 = 3²')),
      S("So the area scale factor is k squared.", V.rule('Area scale factor = k².'))
    ]),
    SC('Volume', 'Example 2: k = 3', [
      S("A cube has side two. Its volume is eight. Enlarge by scale factor three. The side is six. The volume is six times six times six, two hundred and sixteen. Two hundred and sixteen divided by eight is twenty-seven. That is three cubed.", E('2³ = 8') + E('6³ = 216') + g('216 ÷ 8 = 27 = 3³')),
      S("So the volume scale factor is k cubed.", V.rule('Volume scale factor = k³.'))
    ]),
    SC('Summary', 'The three scale factors', [
      S("If the lengths are multiplied by k, then the areas are multiplied by k squared, and the volumes by k cubed.", V.tbl([['Length', 'k'], ['Area', 'k²'], ['Volume', 'k³']], ['', 'Multiply by']))
    ]),
    SC('Finding the area', 'Example 3: k = 2.5', [
      S("A photo has area forty square centimetres. It is enlarged with scale factor two and a half. The area scale factor is two and a half squared, six point two five. The new area is forty times six point two five, two hundred and fifty square centimetres.", E('k² = 2.5² = 6.25') + g('40 × 6.25 = 250 cm²'))
    ]),
    SC('Finding the volume', 'Example 4: a bottle', [
      S("A bottle holds five hundred millilitres. A similar bottle is twice as tall. The volume scale factor is two cubed, eight. So it holds five hundred times eight, four thousand millilitres, four litres.", E('k³ = 2³ = 8') + g('500 × 8 = 4000 ml = 4 litres'))
    ]),
    SC('Working backwards', 'Example 5: from areas to k', [
      S("Two similar shapes have areas twenty and forty-five square centimetres. Find the linear scale factor. Step one. The area scale factor is forty-five over twenty, which is nine over four. Step two. Take the square root to get the linear factor. The square root of nine over four is three over two.", E('45 ÷ 20 = 9/4') + g('k = √(9/4) = 3/2')),
      S("So the lengths of the bigger shape are one and a half times the lengths of the smaller.", V.note('Lengths ×1.5'))
    ]),
    SC('From volumes', 'Example 6: cube roots', [
      S("Two similar solids have volumes twenty-four and eighty-one. Find the length scale factor. The volume scale factor is eighty-one over twenty-four, which is twenty-seven over eight. Take the cube root. The cube root of twenty-seven is three. The cube root of eight is two. So k is three over two.", E('81 ÷ 24 = 27/8') + g('k = ∛(27/8) = 3/2'))
    ]),
    SC('A missing length', 'Example 7: using the factor', [
      S("Two similar cones have volumes sixty-four and two hundred and sixteen. The small cone is four centimetres tall. How tall is the large one? The volume factor is two hundred and sixteen over sixty-four, which is twenty-seven over eight. The length factor is three over two. The height is four times one and a half, six.", E('k = ∛(27/8) = 1.5') + g('Height = 4 × 1.5 = 6 cm'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Using the length scale factor for the area. A shape has area eight, and is enlarged by scale factor three. Wrong: eight times three, twenty-four. That would only be right if we only stretched in one direction. The area is multiplied by three squared, nine. Eight times nine is seventy-two.", r('8 × 3 = 24  ✗') + g('8 × 3² = 72  ✓')),
      S("Mistake two. Not square rooting when going from an area ratio. Two similar shapes have areas in the ratio nine to one. Wrong: the lengths are in the ratio nine to one. The area ratio is the square of the length ratio. So the lengths are in the ratio three to one, the square root of nine.", r('Lengths 9 : 1  ✗') + g('Lengths √9 : √1 = 3 : 1  ✓')),
      S("Mistake three. Square rooting a volume ratio. Volumes are in the ratio eight to one. Wrong: the length ratio is the square root of eight, about two point eight. For volumes we use the cube root. The cube root of eight is two. The lengths are in the ratio two to one.", r('√8 ≈ 2.83  ✗') + g('∛8 = 2  ✓'))
    ]),
    SC('In real life', 'Why giants cannot exist', [
      S("A person twice as tall has four times the skin area, but eight times the volume, and so about eight times the weight. Bones scale with area, but weight scales with volume. This is why a human ten times taller would break their own legs. Area and volume scale factors explain real limits in nature.", V.note('Weight grows as k³, bones as k²'))
    ]),
    L.turn("Your turn! Number one. A shape has area ten. It is enlarged with scale factor four. What is the new area? Pause and try it.", E('10 × 4²'), "Four squared is sixteen. Ten times sixteen is one hundred and sixty.", g('160')),
    L.turn("Your turn! Number two. Two similar solids have volumes eight and sixty-four. What is the length scale factor? Pause and try it.", E('64 ÷ 8 = 8'), "The volume factor is eight. The cube root of eight is two.", g('k = 2')),
    L.turn("Your turn! Number three. Two similar shapes have areas in the ratio sixteen to twenty-five. What is the ratio of their lengths? Pause and try it.", E('16 : 25'), "Square root both. Four to five.", g('4 : 5')),
    L.rec('How do you use area and volume scale factors?', "For similar shapes with length scale factor k, the area scale factor is k squared and the volume scale factor is k cubed. To go from an area ratio to a length ratio, take the square root. From a volume ratio, take the cube root.", ['Length: k', 'Area: k²', 'Volume: k³', 'Backwards: √ or ∛'])
  ]);

  N('How do you measure and calculate with bearings?', 'how to give directions as three-figure bearings, find back bearings and solve journey problems.', [
    SC('Bearings', 'Start with the basics', [
      S("A bearing is a way of giving a direction, as an angle. It is always measured from north, and always measured clockwise. It is always written with three figures.", V.list(['From north', 'Clockwise', 'Three figures'])),
      S("North is zero zero zero degrees. East is zero nine zero. South is one eight zero. West is two seven zero. Between them, the angles fill in. North east is zero four five.", V.tbl([['North', '000°'], ['East', '090°'], ['South', '180°'], ['West', '270°']], ['Direction', 'Bearing']))
    ]),
    SC('Reading', 'Example 1: what the bearing means', [
      S("Bearing one three zero. Stand at the point. Face north. Turn clockwise through a hundred and thirty degrees. That is a direction a little east of south. That is the way you are looking.", E('130°: past east (090°), before south (180°)'))
    ]),
    SC('Three figures', 'Example 2: writing it properly', [
      S("If the angle has fewer than three figures, add zeros at the front. Forty-five degrees is zero four five. Seven degrees is zero zero seven.", E('45° → 045°') + E('7° → 007°'))
    ]),
    SC('Back bearings', 'Example 3: the way back', [
      S("The bearing of B from A is one three zero degrees. What is the bearing of A from B? That is the back bearing. Go the other way. We add or subtract a hundred and eighty degrees. A hundred and thirty plus a hundred and eighty is three hundred and ten.", E('130 + 180 = 310') + g('Bearing of A from B = 310°')),
      S("Another. The bearing of B from A is two five zero. Add a hundred and eighty. That gives four hundred and thirty. That is more than three hundred and sixty, so subtract three hundred and sixty. Seventy. Written with three figures, zero seven zero.", E('250 + 180 = 430') + E('430 − 360 = 70') + g('070°')),
      S("A rule. If the bearing is less than a hundred and eighty, add a hundred and eighty. If it is more than a hundred and eighty, subtract a hundred and eighty.", V.rule('< 180: add 180.   > 180: subtract 180.'))
    ]),
    SC('A journey', 'Example 4: a ship sails 8 km on 040° then 6 km on 130°', [
      S("A ship leaves port P. It sails eight kilometres on a bearing of zero four zero. Then six kilometres on a bearing of one three zero. How far is it from P, and what is the bearing of the ship from P? The second bearing is ninety degrees more than the first, so the ship turned right by exactly ninety degrees. We have a right-angled triangle.", E('040° then 130°: a right angle')),
      S("Step one. The distance back to P is the hypotenuse. Eight squared plus six squared is sixty-four plus thirty-six, one hundred. Square root. Ten kilometres.", E('8² + 6² = 100') + g('Distance = 10 km')),
      S("Step two. The angle at P inside the triangle. Tangent of the angle is opposite over adjacent, six over eight. The angle is about thirty-seven degrees. Step three. The bearing of the ship from P is zero four zero plus thirty-seven, which is zero seven seven.", E('tan θ = 6/8 → θ ≈ 36.9°') + g('Bearing ≈ 040° + 37° = 077°'))
    ]),
    SC('East and north', 'Example 5: how far north and east', [
      S("A boat sails ten kilometres on a bearing of zero six zero. How far east and how far north has it gone? Bearings are measured from north, so the angle is between the journey and the north line. The north distance is the adjacent side. Ten times cosine of sixty degrees. That is five.", E('North = 10 × cos 60° = 5 km')),
      S("The east distance is the opposite side. Ten times sine of sixty. That is eight point six six kilometres. Check with Pythagoras. Five squared plus eight point six six squared is twenty-five plus seventy-five, one hundred. Square root, ten. Correct.", E('East = 10 × sin 60° ≈ 8.66 km') + E('5² + 8.66² ≈ 100 ✓'))
    ]),
    SC('Drawing', 'Example 6: scale drawing', [
      S("To draw a bearing, place a protractor at the point, with zero pointing north. Measure the angle clockwise. Mark it, and draw a line of the right length at the chosen scale. Always draw a north line at every point first.", V.rule('Draw a north line at every point.'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Measuring from east, as in graphs, instead of from north. Due east is a bearing of zero nine zero. Wrong: calling due east zero degrees. Zero degrees is north. A ship going east is on bearing zero nine zero, not zero zero zero.", r('East = 000°  ✗') + g('East = 090°  ✓')),
      S("Mistake two. Not writing three figures. A bearing of forty-five degrees is written zero four five. Wrong: forty-five. And seven degrees is zero zero seven. Wrong: seven. Examiners expect three figures.", r('45°  ✗   7°  ✗') + g('045°  ✓   007°  ✓')),
      S("Mistake three. Not reducing a back bearing. The bearing of B from A is two five zero. Wrong: add one eighty to get four three zero, and give that as the answer. Bearings go up to three hundred and fifty-nine. Subtract three hundred and sixty. Seventy. Zero seven zero. Or, since it is over one eighty, just subtract one eighty. Seventy. Same answer.", r('250 + 180 = 430°  ✗') + g('430 − 360 = 070°  ✓'))
    ]),
    SC('In real life', 'Ships and planes', [
      S("Ships, aircraft and walkers use bearings. A pilot is told to fly on a heading of two four zero. Air traffic control can then predict where the plane will be. Bearings use the same idea as the compass on a phone.", V.note('Pilots, sailors, walkers'))
    ]),
    L.turn("Your turn! Number one. What is the back bearing of a line with bearing sixty? Pause and try it.", E('060°'), "Sixty plus one eighty is two four zero.", g('240°')),
    L.turn("Your turn! Number two. Write a direction of eighty degrees as a three-figure bearing. Pause and try it.", E('80°'), "Zero eight zero.", g('080°')),
    L.turn("Your turn! Number three. A walker goes six kilometres on bearing zero nine zero, then eight kilometres on bearing one eight zero. How far is she from the start? Pause and try it.", E('6² + 8²'), "East, then south, a right angle. Thirty-six plus sixty-four is one hundred. Ten kilometres.", g('10 km')),
    L.rec('How do you measure and calculate with bearings?', "A bearing is an angle measured clockwise from north, written with three figures. The back bearing is found by adding or subtracting one hundred and eighty. For journeys, draw a north line at every point, make a triangle, and use Pythagoras or trigonometry. Sine gives the east distance and cosine gives the north distance from a bearing.", ['Clockwise from north', 'Three figures', 'Back bearing ±180', 'North and east: cos and sin'])
  ]);

  L.use(851, ['How do you construct triangles?', 'What are angles in triangles and quadrilaterals?', 'What is a linear scale factor?', 'How do you use scale drawings and map scales?', 'Similar triangles', 'How do you use area and volume scale factors for similar shapes?', 'Angles of elevation', 'How do you measure and calculate with bearings?', 'Circles, similarity and solids', 'Polygon angles, bearings and coordinates']);
})();
