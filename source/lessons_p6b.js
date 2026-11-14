/* lessons_p6b.js: P6 Watch lessons, topics 5 to 13. New lessons for the questions P6 adds,
   and the older P6 lessons rebuilt in full. The P5 lessons for shared questions are reused. */
(function () {
  'use strict';
  var BT = window.BT; if (!BT || !BT.L || !BT.lk) return;
  var L = BT.L, V = BT.sv, LK = BT.lk, SC = L.SC, st = L.st, SW = L.SW, F = L.F, BIG = L.BIG, ep = L.ep, rec = L.rec, turn = L.turn;
  var SPA = window.SPA, P = 'var(--accent)', G = 'var(--good)';
  var cubes = function (h) { return SPA && SPA.cubes ? SPA.cubes(h, 215, null, true) : ''; };
  function lines(a, b, gap) {
    function ln(ang, ox, oy) { var r = ang * Math.PI / 180, dx = 80 * Math.cos(r), dy = 80 * Math.sin(r); return '<line x1="' + (ox - dx).toFixed(1) + '" y1="' + (oy - dy).toFixed(1) + '" x2="' + (ox + dx).toFixed(1) + '" y2="' + (oy + dy).toFixed(1) + '" style="stroke:var(--fg);stroke-width:4;stroke-linecap:round"/>'; }
    return '<svg viewBox="0 0 260 170" width="260" role="img" aria-label="Two lines">' + (gap ? ln(a, 110, 60) + ln(b, 150, 110) : ln(a, 130, 85) + ln(b, 130, 85)) + '</svg>';
  }
  function circleParts(hl) {
    var s = '<circle cx="110" cy="90" r="70" style="fill:var(--surface-2);stroke:' + (hl === 'c' ? '#e2620f' : 'var(--fg)') + ';stroke-width:' + (hl === 'c' ? 6 : 3) + '"/>';
    if (hl === 'r' || hl === 'all') s += '<line x1="110" y1="90" x2="170" y2="54" style="stroke:#e2620f;stroke-width:5"/>';
    if (hl === 'd' || hl === 'all') s += '<line x1="40" y1="90" x2="180" y2="90" style="stroke:hsl(215,70%,50%);stroke-width:5"/>';
    s += '<circle cx="110" cy="90" r="5" style="fill:var(--fg)"/>';
    return '<svg viewBox="0 0 220 180" width="220" role="img" aria-label="A circle with its parts">' + s + '</svg>';
  }
  function grid(pts, lo) {
    lo = lo || 0; var u = 24, o = 20, n = 6, s = '', X = function (a) { return o + (a - lo) * u; }, Y = function (b) { return o + (n - b) * u; };
    for (var i = lo; i <= n; i++) s += '<line x1="' + X(i) + '" y1="' + Y(lo) + '" x2="' + X(i) + '" y2="' + Y(n) + '" style="stroke:var(--line)"/><line x1="' + X(lo) + '" y1="' + Y(i) + '" x2="' + X(n) + '" y2="' + Y(i) + '" style="stroke:var(--line)"/>';
    s += '<line x1="' + X(lo) + '" y1="' + Y(0) + '" x2="' + X(n) + '" y2="' + Y(0) + '" style="stroke:var(--fg);stroke-width:2"/><line x1="' + X(0) + '" y1="' + Y(lo) + '" x2="' + X(0) + '" y2="' + Y(n) + '" style="stroke:var(--fg);stroke-width:2"/>';
    for (i = lo; i <= n; i++) if (i) s += '<text x="' + X(i) + '" y="' + (Y(0) + 15) + '" text-anchor="middle" style="font-size:11px;fill:var(--fg)">' + i + '</text><text x="' + (X(0) - 6) + '" y="' + (Y(i) + 4) + '" text-anchor="end" style="font-size:11px;fill:var(--fg)">' + i + '</text>';
    (pts || []).forEach(function (p) { s += '<circle cx="' + X(p[0]) + '" cy="' + Y(p[1]) + '" r="6" style="fill:hsl(22,85%,55%);stroke:var(--fg);stroke-width:2"/>' + (p[2] ? '<text x="' + (X(p[0]) + 9) + '" y="' + (Y(p[1]) - 8) + '" style="font-size:13px;font-weight:700;fill:var(--fg)">' + p[2] + '</text>' : ''); });
    var W = (n - lo) * u + 2 * o; return '<svg viewBox="0 0 ' + W + ' ' + W + '" width="' + Math.min(W, 260) + '" role="img" aria-label="A coordinate grid">' + s + '</svg>';
  }

  /* ===================== Topic 5: money, time and measurement ===================== */
  ep('What is currency?', 'what currency is, and how exchange rates change money from one currency to another.', [
    SC('Currency', 'Money in different countries', [
      st("Currency is the money a country uses. The UK uses pounds and pence. Most of Europe uses euros. The USA uses dollars, and Japan uses yen.", V.tbl([['UK', 'pound £'], ['Europe', 'euro €'], ['USA', 'dollar $'], ['Japan', 'yen ¥']], ['Country', 'Currency']))]),
    SC('Exchange rates', 'How much is £1 worth?', [
      st("An exchange rate tells you how much of another currency you get for one pound. If one pound equals one euro fifteen, then for every pound you get one euro and fifteen cents.", V.eq('£1 = €1.15', 'b'))]),
    SC('Pounds to another currency', 'Multiply by the rate', [
      st("To change pounds into euros, multiply by the rate. Two hundred pounds times one point one five is two hundred and thirty euros.", V.eq('£200 × 1.15 = €230', 'g') + V.rule('Pounds → other currency: multiply by the rate.'))]),
    SC('Back into pounds', 'Divide by the rate', [
      st("To change euros back into pounds, divide by the rate. One hundred and fifteen euros divided by one point one five is one hundred pounds.", V.eq('€115 ÷ 1.15 = £100', 'g') + V.rule('Other currency → pounds: divide by the rate.'))]),
    SC('Using a table', 'Ready reckoner', [
      st("Travellers often use a table. If one pound is one dollar twenty-five, then ten pounds is twelve dollars fifty, and fifty pounds is sixty-two dollars fifty.", V.tbl([['£1', '$1.25'], ['£10', '$12.50'], ['£50', '$62.50']], ['Pounds', 'Dollars']))]),
    turn("Your turn! One pound is one dollar twenty-five. How many dollars is forty pounds? Pause and try it.", V.eq('£40 × 1.25 = ?'),
      "Forty times one point two five is fifty. Fifty dollars.", V.eq('$50', 'g')),
    rec('What is currency?', "Currency is the money a country uses. An exchange rate tells you how much one pound is worth. Multiply by the rate to change pounds, and divide to change back.",
      ['Currency = a country’s money', 'Exchange rate: £1 = …', 'Pounds → other: multiply', 'Other → pounds: divide'])
  ]);

  ep('What are imperial measurements?', 'what imperial units are and roughly how they compare with metric units.', [
    SC('Two systems', 'Metric and imperial', [
      st("We mostly use metric units: centimetres, metres, kilograms and litres. But older imperial units are still used in the UK: inches, feet, miles, pounds, stones, pints and gallons.", V.cards(['Metric: cm, m, kg, l', 'Imperial: inch, foot, mile, lb, pint'], ['b', 'p']))]),
    SC('Imperial length', 'Inches, feet and miles', [
      st("There are twelve inches in a foot, and three feet in a yard. Road signs in the UK use miles.", V.tbl([['12 inches', '1 foot'], ['3 feet', '1 yard'], ['1,760 yards', '1 mile']], ['Imperial', 'Equals']))]),
    SC('Rough equivalents', 'Imperial and metric', [
      st("It helps to know roughly how they compare. One inch is about two and a half centimetres. One foot is about thirty centimetres. One mile is about one point six kilometres.", V.tbl([['1 inch', '≈ 2.5 cm'], ['1 foot', '≈ 30 cm'], ['1 mile', '≈ 1.6 km'], ['1 kg', '≈ 2.2 lb'], ['1 pint', '≈ 570 ml'], ['1 gallon', '≈ 4.5 litres']], ['Imperial', 'Metric']))]),
    SC('Converting', '5 miles', [
      st("About how many kilometres is five miles? Multiply by one point six: eight kilometres.", V.eq('5 × 1.6 = 8 km', 'g'))]),
    SC('Converting back', '30 cm', [
      st("About how many inches is thirty centimetres? Each inch is about two and a half centimetres, so divide: twelve inches, which is one foot.", V.eq('30 ÷ 2.5 = 12 inches = 1 foot', 'g'))]),
    SC('In real life', 'Height and weight', [
      st("People in the UK often say their height in feet and inches, like five feet four, and weigh themselves in stones. A baby's weight is often given in pounds and ounces.", V.note('5 ft 4 in ≈ 163 cm'))]),
    turn("Your turn! About how many centimetres is three feet? Pause and try it.", V.eq('3 feet ≈ ? cm'),
      "One foot is about thirty centimetres, so three feet is about ninety centimetres.", V.eq('3 × 30 = 90 cm', 'g')),
    rec('What are imperial measurements?', "Imperial units include inches, feet, miles, pounds, pints and gallons. Use rough equivalents to convert: an inch is about two and a half centimetres, a mile about one point six kilometres.",
      ['12 inches = 1 foot', '1 inch ≈ 2.5 cm', '1 mile ≈ 1.6 km', '1 kg ≈ 2.2 lb'])
  ]);

  ep('What is volume?', 'what volume means and how to find it by counting cubes.', [
    SC('Volume', 'How much space?', [
      st("Volume is the amount of space a solid takes up. We measure it in cubes. A cube with edges of one centimetre has a volume of one cubic centimetre, written one centimetre cubed.", cubes([[1]]) + V.eq('1 cm³', 'g'))]),
    SC('Counting cubes', 'A small cuboid', [
      st("This cuboid is made of centimetre cubes. Count them: there are six. So its volume is six cubic centimetres.", cubes([[1, 1, 1], [1, 1, 1]]) + V.eq('Volume = 6 cm³', 'g'))]),
    SC('Count in layers', 'Faster than one by one', [
      st("For bigger shapes, count one layer and multiply by the number of layers. Here each layer has three times two, six cubes, and there are two layers.", cubes([[2, 2, 2], [2, 2, 2]]) + V.eq('6 × 2 = 12 cm³', 'g'))]),
    SC('Capacity', 'How much a container holds', [
      st("Capacity is how much liquid a container can hold. One cubic centimetre holds one millilitre. A cube with ten centimetre edges holds one thousand millilitres, which is one litre.", V.eq('1 cm³ = 1 ml') + V.eq('1,000 cm³ = 1 litre', 'g'))]),
    SC('Same volume, different shapes', 'Rearranging cubes', [
      st("Twelve cubes can make many different cuboids: twelve in a row, two rows of six, or two layers of six. They all have the same volume, twelve cubic centimetres.", cubes([[1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1]]) + V.eq('12 cm³', 'g'))]),
    turn("Your turn! A cuboid has a layer of eight cubes and three layers. What is its volume? Pause and try it.", V.eq('8 × 3 = ?'),
      "Eight times three is twenty-four. Twenty-four cubic centimetres.", V.eq('24 cm³', 'g')),
    rec('What is volume?', "Volume is the space a solid takes up, measured in cubes such as cubic centimetres. Count cubes in layers. One cubic centimetre holds one millilitre.",
      ['Volume = space taken up', 'Measured in cm³ or m³', 'Count one layer, × layers', '1 cm³ = 1 ml'])
  ]);

  ep('Timetables and durations', 'how to read a timetable and work out how long a journey takes.', [
    SC('Reading a timetable', 'Rows and columns', [
      st("A timetable shows when a bus or train leaves each stop. Each column is one journey. Read down a column to follow one bus.", V.tbl([['Glasgow', '09:15', '10:45', '12:30'], ['Stirling', '09:55', '11:25', '13:10'], ['Perth', '10:40', '12:10', '13:55']], ['Stop', 'Bus 1', 'Bus 2', 'Bus 3']))]),
    SC('24-hour times', 'After midday', [
      st("Timetables use the twenty-four hour clock. After midday, add twelve to the hour. Thirteen ten is ten past one in the afternoon.", V.eq('13:10 = 1:10 pm', 'g'))]),
    SC('How long does it take?', 'Count on', [
      st("Bus two leaves Glasgow at ten forty-five and reaches Perth at twelve ten. Count on: fifteen minutes to eleven, one hour to twelve, then ten minutes more.", V.eq('15 min + 1 h + 10 min', 'b')),
      st("That is one hour and twenty-five minutes.", V.eq('1 h 25 min', 'g') + V.rule('Count on to the next hour, then in hours, then the minutes left.'))]),
    SC('Finding the right bus', 'Work backwards', [
      st("You need to be in Stirling by noon. Bus two gets there at eleven twenty-five, which works. Bus three arrives at thirteen ten, which is too late.", V.eq('Take Bus 2', 'g'))]),
    SC('Adding a duration', 'When will it finish?', [
      st("A film starts at nineteen forty and lasts one hour and fifty-five minutes. Add one hour: twenty forty. Add fifty-five minutes: twenty-one thirty-five.", V.eq('19:40 + 1 h 55 min = 21:35', 'g'))]),
    turn("Your turn! How long is it from nine fifteen to ten forty? Pause and try it.", V.eq('09:15 → 10:40'),
      "Forty-five minutes to ten, then forty more minutes. One hour and twenty-five minutes.", V.eq('1 h 25 min', 'g')),
    rec('Timetables and durations', "Read down a column to follow one journey. Timetables use the twenty-four hour clock. To find a duration, count on to the next hour, then whole hours, then the minutes left.",
      ['One column = one journey', 'After midday: + 12', 'Count on to the hour first', 'Then hours, then minutes'])
  ]);

  /* ===================== Topic 6: algebra ===================== */
  ep('What is an equation?', 'what an equation is and how to solve one by keeping it balanced.', [
    SC('An equation', 'Two sides that balance', [
      st("An equation says that two things are equal. Like a balance, both sides weigh the same. x plus four equals eleven.", V.eq('x + 4 = 11', 'b')),
      st("The letter stands for a number we don't know yet. Solving the equation means finding it.", V.note('x is the unknown number'))]),
    SC('Keep it balanced', 'Do the same to both sides', [
      st("To find x, get it on its own. Take four from both sides. x equals seven.", V.eq('x + 4 − 4 = 11 − 4', 'b') + V.eq('x = 7', 'g')),
      st("Check: seven plus four is eleven.", V.eq('7 + 4 = 11 ✓', 'g') + V.rule('Whatever you do to one side, do to the other.'))]),
    SC('Undo subtraction', 'Add to both sides', [
      st("y take away six equals nine. Add six to both sides: y equals fifteen.", V.eq('y − 6 = 9 → y = 15', 'g'))]),
    SC('Undo multiplication', 'Divide both sides', [
      st("Three n equals twenty-one means three times n. Divide both sides by three: n equals seven.", V.eq('3n = 21 → n = 7', 'g'))]),
    SC('Two steps', '2x + 5 = 17', [
      st("First undo the plus five: take five from both sides. Two x equals twelve.", V.eq('2x + 5 = 17 → 2x = 12', 'b')),
      st("Then undo the times two: divide by two. x equals six.", V.eq('x = 6', 'g'))]),
    SC('Writing an equation', 'From a story', [
      st("I think of a number, multiply it by four and add three. The answer is thirty-one. Write it as an equation: four n plus three equals thirty-one. Then n equals seven.", V.eq('4n + 3 = 31 → 4n = 28 → n = 7', 'g'))]),
    turn("Your turn! Solve five x take away two equals twenty-three. Pause and try it.", V.eq('5x − 2 = 23'),
      "Add two to both sides: five x equals twenty-five. Divide by five: x equals five.", V.eq('5x = 25 → x = 5', 'g')),
    rec('What is an equation?', "An equation says two sides are equal. To solve it, do the same thing to both sides to get the letter on its own. Undo adding by subtracting, and undo multiplying by dividing. Always check.",
      ['Equation: two equal sides', 'Do the same to both sides', 'Undo + with −, × with ÷', 'Check your answer'])
  ]);

  /* ===================== Topic 7: shape ===================== */
  ep('What are the parts of a circle?', 'the names of the parts of a circle: centre, radius, diameter and circumference.', [
    SC('A circle', 'Every point the same distance', [
      st("A circle is a round shape where every point on the edge is the same distance from the middle. The middle is called the centre.", circleParts(''))]),
    SC('Radius', 'Centre to edge', [
      st("The radius is a straight line from the centre to the edge. All radii of a circle are the same length.", circleParts('r') + V.note('radius: centre to edge'))]),
    SC('Diameter', 'Right across through the centre', [
      st("The diameter goes right across the circle, through the centre. It is made of two radii, so it is twice as long as the radius.", circleParts('d') + V.eq('diameter = 2 × radius', 'g'))]),
    SC('Circumference', 'The distance round', [
      st("The circumference is the distance all the way round the edge of the circle. It is the circle's perimeter.", circleParts('c') + V.note('circumference: the distance round'))]),
    SC('Using the facts', 'Radius and diameter', [
      st("A wheel has a radius of thirty centimetres. Its diameter is sixty centimetres. A plate with a diameter of twenty-four centimetres has a radius of twelve.", V.eq('r = 30 → d = 60') + V.eq('d = 24 → r = 12', 'g'))]),
    SC('Other parts', 'Chord and arc', [
      st("A chord is a straight line joining two points on the edge that does not have to pass through the centre. An arc is part of the circumference.", V.cards(['Chord: edge to edge', 'Arc: part of the edge'], ['b', 'p']))]),
    turn("Your turn! A hoop has a diameter of eighty centimetres. What is its radius? Pause and try it.", V.eq('d = 80 cm → r = ?'),
      "The radius is half the diameter: forty centimetres.", V.eq('r = 40 cm', 'g')),
    rec('What are the parts of a circle?', "The centre is the middle. The radius goes from the centre to the edge. The diameter goes across through the centre and is twice the radius. The circumference is the distance round.",
      ['Centre: the middle', 'Radius: centre to edge', 'Diameter = 2 × radius', 'Circumference: the distance round'])
  ]);

  ep('What are parallel and perpendicular lines?', 'how to spot parallel and perpendicular lines.', [
    SC('Parallel lines', 'Never meet', [
      st("Parallel lines go in the same direction and stay the same distance apart. However far you extend them, they never meet, like railway tracks.", lines(20, 20, true) + V.note('Parallel: same direction, never meet'))]),
    SC('Perpendicular lines', 'Meet at a right angle', [
      st("Perpendicular lines meet or cross at a right angle, ninety degrees, like the corner of a page.", lines(0, 90) + V.note('Perpendicular: meet at 90°'))]),
    SC('Neither', 'Crossing at other angles', [
      st("Lines that cross at any other angle are neither parallel nor perpendicular.", lines(10, 60) + V.note('Neither'))]),
    SC('In shapes', 'Look at the sides', [
      st("A rectangle has two pairs of parallel sides, and its sides meet at right angles, so neighbouring sides are perpendicular.", V.poly([[20, 20], [180, 20], [180, 110], [20, 110]], 'var(--surface-2)', 200, 130, 'A rectangle')),
      st("A trapezium has exactly one pair of parallel sides.", V.poly([[50, 20], [150, 20], [190, 110], [10, 110]], 'var(--surface-2)', 200, 130, 'A trapezium'))]),
    SC('All around us', 'Real life', [
      st("You can see parallel lines in ladders, roads and window frames. Perpendicular lines are where a wall meets the floor, or where streets cross at a crossroads.", V.cards(['Parallel: ladder rungs', 'Perpendicular: wall and floor'], ['b', 'g']))]),
    turn("Your turn! The two sides of a door frame go straight up and never meet. Are they parallel or perpendicular? Pause and think.", V.eq('?'),
      "They never meet, so they are parallel.", V.eq('Parallel', 'g')),
    rec('What are parallel and perpendicular lines?', "Parallel lines go the same way and never meet. Perpendicular lines meet at a right angle. Lines crossing at other angles are neither.",
      ['Parallel: never meet', 'Perpendicular: meet at 90°', 'Otherwise: neither', 'Rectangles have both'])
  ]);

  ep('Angle facts', 'the angle facts for a straight line, a full turn and a triangle, and how to use them.', [
    SC('Angles on a straight line', 'Add up to 180°', [
      st("Angles on a straight line add up to one hundred and eighty degrees, a half turn. If one angle is one hundred and ten degrees, the other is seventy.", V.eq('180° − 110° = 70°', 'g'))]),
    SC('Angles round a point', 'Add up to 360°', [
      st("Angles all the way round a point add up to three hundred and sixty degrees, a full turn. If three angles are ninety, one hundred and twenty and eighty, the last is seventy.", V.eq('360° − 90° − 120° − 80° = 70°', 'g'))]),
    SC('Angles in a triangle', 'Add up to 180°', [
      st("The three angles inside any triangle add up to one hundred and eighty degrees. If two angles are fifty and sixty, the third is seventy.", V.poly([[20, 120], [200, 120], [80, 20]], 'var(--surface-2)', 220, 140, 'A triangle') + V.eq('180° − 50° − 60° = 70°', 'g'))]),
    SC('Angles in a quadrilateral', 'Add up to 360°', [
      st("A four-sided shape can be cut into two triangles, so its angles add up to three hundred and sixty degrees.", V.eq('2 × 180° = 360°', 'g'))]),
    SC('Vertically opposite angles', 'Equal', [
      st("When two straight lines cross, the angles opposite each other are equal.", lines(25, 145) + V.note('Opposite angles are equal'))]),
    turn("Your turn! A triangle has angles of ninety and thirty-five degrees. What is the third angle? Pause and try it.", V.eq('180° − 90° − 35° = ?'),
      "One hundred and eighty take away ninety take away thirty-five is fifty-five degrees.", V.eq('55°', 'g')),
    rec('Angle facts', "Angles on a straight line make one hundred and eighty degrees. Angles round a point make three hundred and sixty. A triangle's angles make one hundred and eighty, and a quadrilateral's make three hundred and sixty.",
      ['Straight line: 180°', 'Round a point: 360°', 'Triangle: 180°', 'Quadrilateral: 360°'])
  ]);

  /* ===================== Topic 8: data ===================== */
  ep('How can data be displayed?', 'the different charts and graphs used to show data, and when to use each one.', [
    SC('Showing data', 'Pictures of numbers', [
      st("Data is easier to understand as a picture. We can use tables, pictograms, bar charts, line graphs and pie charts. Each one is good for a different job.", V.cards(['Table', 'Pictogram', 'Bar chart', 'Line graph', 'Pie chart'], ['b', 'p', 'g', 'b', 'p'], true))]),
    SC('Bar charts', 'Comparing groups', [
      st("A bar chart compares groups. The taller the bar, the bigger the number. Always read the scale on the side.", V.bars([['Cats', 6], ['Dogs', 9], ['Fish', 3], ['Birds', 2]], 10))]),
    SC('Line graphs', 'Change over time', [
      st("A line graph shows how something changes over time, like temperature through the day. The line shows whether it is going up or down.", V.note('Line graph: change over time'))]),
    SC('Pie charts', 'Parts of a whole', [
      st("A pie chart shows how a whole is split into parts. A half of the circle is half of the data.", LK.pie(1, 4, { r: 54, hue: 280 }) + V.note('Pie chart: fractions of the whole'))]),
    SC('Pictograms', 'Pictures with a key', [
      st("A pictogram uses symbols. The key tells you what each symbol is worth. If one symbol stands for four children, then half a symbol stands for two.", V.eq('1 symbol = 4 · half = 2', 'g'))]),
    SC('Choosing a display', 'Which is best?', [
      st("To compare favourite sports, use a bar chart. To show a plant's height each week, use a line graph. To show how pocket money is spent, use a pie chart.", V.tbl([['Compare groups', 'Bar chart'], ['Change over time', 'Line graph'], ['Parts of a whole', 'Pie chart']], ['Job', 'Best display']))]),
    turn("Your turn! Which display is best for showing the temperature every hour of a day? Pause and think.", V.eq('?'),
      "The temperature changes over time, so a line graph is best.", V.eq('Line graph', 'g')),
    rec('How can data be displayed?', "Bar charts compare groups, line graphs show change over time, pie charts show parts of a whole, and pictograms use symbols with a key. Always read the title, labels and scale.",
      ['Bar chart: compare', 'Line graph: change over time', 'Pie chart: parts of a whole', 'Read the title, labels and scale'])
  ]);

  ep('How do I find the mean, median, mode and range?', 'how to find the four averages and spreads of a set of data.', [
    SC('Describing data', 'One number to sum it up', [
      st("Here are five test scores: six, eight, three, eight, five. We can describe them with the mean, median, mode and range.", V.cards(['6', '8', '3', '8', '5'], ['b']))]),
    SC('The mean', 'Share it out equally', [
      st("The mean is the total shared equally. Add the scores: thirty. There are five scores, so divide by five. The mean is six.", V.eq('6 + 8 + 3 + 8 + 5 = 30') + V.eq('30 ÷ 5 = 6', 'g'))]),
    SC('The median', 'The middle value', [
      st("For the median, put the numbers in order: three, five, six, eight, eight. The middle one is six.", V.cards(['3', '5', '6', '8', '8'], ['b', 'b', 'g', 'b', 'b']) + V.eq('Median = 6', 'g')),
      st("If there are two middle numbers, the median is halfway between them.", V.note('Even count: halfway between the middle two'))]),
    SC('The mode', 'The most common', [
      st("The mode is the most common value. Eight appears twice, so the mode is eight.", V.eq('Mode = 8', 'g'))]),
    SC('The range', 'How spread out', [
      st("The range is the largest take away the smallest. Eight take away three is five.", V.eq('Range = 8 − 3 = 5', 'g'))]),
    SC('Remember them', 'A rhyme', [
      st("Hey diddle diddle, the median's the middle. You add then divide for the mean. The mode is the one that appears the most, and the range is the difference between.", V.tbl([['Mean', 'add, then divide'], ['Median', 'the middle'], ['Mode', 'the most'], ['Range', 'largest − smallest']], ['Measure', 'How']))]),
    turn("Your turn! Find the mean of four, seven and ten. Pause and try it.", V.eq('4, 7, 10'),
      "The total is twenty-one. Divide by three: the mean is seven.", V.eq('21 ÷ 3 = 7', 'g')),
    rec('How do I find the mean, median, mode and range?', "The mean is the total divided by how many. The median is the middle value in order. The mode is the most common. The range is largest minus smallest.",
      ['Mean: add, then divide', 'Median: middle when in order', 'Mode: most common', 'Range: largest − smallest'])
  ]);

  ep('What is probability?', 'how likely something is, and how to write probability as a fraction.', [
    SC('Probability', 'How likely?', [
      st("Probability tells us how likely something is to happen. It goes from impossible to certain. We can place events on a probability scale from zero to one.", V.cards(['0 impossible', '½ even chance', '1 certain'], ['b', 'p', 'g']))]),
    SC('Equally likely outcomes', 'A dice', [
      st("When you roll a fair dice, there are six possible outcomes, and each is equally likely. The chance of rolling a four is one out of six.", V.eq('P(4) = 1/6', 'g'))]),
    SC('Probability as a fraction', 'Ways it can happen over all outcomes', [
      st("Probability equals the number of ways something can happen, divided by the total number of outcomes. The chance of rolling an even number: two, four or six is three ways out of six, which is one half.", V.eq('P(even) = 3/6 = 1/2', 'g') + V.rule('P = ways it can happen ÷ total outcomes'))]),
    SC('A bag of counters', 'Picking without looking', [
      st("A bag has three red and five blue counters. There are eight altogether. The probability of picking red is three eighths.", V.eq('P(red) = 3/8', 'g')),
      st("The probability of not picking red is five eighths. The two add up to one.", V.eq('3/8 + 5/8 = 1', 'g'))]),
    SC('Impossible and certain', '0 and 1', [
      st("The probability of picking a green counter from that bag is zero, because there are none. The probability of picking a counter that is red or blue is one, because it's certain.", V.eq('P(green) = 0 · P(red or blue) = 1', 'g'))]),
    turn("Your turn! A spinner has five equal parts: two are yellow. What is the probability of yellow? Pause and think.", V.eq('P(yellow) = ?'),
      "Two ways out of five: two fifths.", V.eq('P(yellow) = 2/5', 'g')),
    rec('What is probability?', "Probability goes from zero, impossible, to one, certain. For equally likely outcomes, it is the number of ways something can happen divided by the total number of outcomes.",
      ['0 = impossible, 1 = certain', 'P = ways ÷ total outcomes', 'Write it as a fraction', 'P(not) = 1 − P'])
  ]);

  /* ===================== Topic 9: reasoning ===================== */
  ep('Multi-step problems', 'how to break a problem into steps and solve it one step at a time.', [
    SC('More than one step', 'Plan before you calculate', [
      st("Some problems need more than one calculation. Read carefully, find what you know and what you need, then plan the steps.", V.list(['Read it twice', 'What do I know?', 'What do I need?', 'Plan the steps', 'Check']))]),
    SC('Example', 'At the cinema', [
      st("Tickets cost seven pounds fifty for adults and four pounds for children. Two adults and three children go. How much change from forty pounds?", V.eq('2 × £7.50 + 3 × £4', 'b'))]),
    SC('Step by step', 'Solve each part', [
      st("Step one: two adults cost fifteen pounds. Step two: three children cost twelve pounds. Step three: the total is twenty-seven pounds.", V.eq('£15 + £12 = £27')),
      st("Step four: the change from forty pounds is thirteen pounds.", V.eq('£40 − £27 = £13', 'g'))]),
    SC('Check it makes sense', 'Estimate', [
      st("About eight pounds times two plus four pounds times three is about twenty-eight pounds, so change of about twelve pounds. Thirteen pounds is sensible.", V.eq('≈ £28 spent ✓', 'g'))]),
    SC('Another example', 'Saving up', [
      st("Zara saves three pounds a week. She already has eleven pounds. A pair of trainers costs fifty pounds. How many weeks must she save? She needs thirty-nine more. Thirty-nine divided by three is thirteen weeks.", V.eq('£50 − £11 = £39') + V.eq('£39 ÷ £3 = 13 weeks', 'g'))]),
    turn("Your turn! Pens cost sixty pence each. Ben buys five and pays with five pounds. What is his change? Pause and try it.", V.eq('£5 − 5 × 60p'),
      "Five pens cost three pounds. Five pounds take away three pounds is two pounds.", V.eq('£2 change', 'g')),
    rec('Multi-step problems', "Read the problem, find what you know and what you need, then plan and solve one step at a time. Estimate to check the answer makes sense.",
      ['Read and plan', 'One step at a time', 'Keep track of each answer', 'Check with an estimate'])
  ]);

  ep('Bar models for sums and differences', 'how to draw bar models to solve problems about totals and differences.', [
    SC('Bar models', 'Drawing the problem', [
      st("A bar model is a drawing that helps you see a problem. Bars show the amounts, and you can see what to add or take away.", LK.fbar(3, 5, 300, 215))]),
    SC('A total', 'Part plus part', [
      st("Maya has twenty-four stickers and Ben has thirty-eight. How many altogether? Draw two parts side by side. The whole is the total: sixty-two.", V.cols([V.card('24', 'b'), V.card('38', 'p')], 2) + V.eq('24 + 38 = 62', 'g'))]),
    SC('A missing part', 'Whole minus part', [
      st("A class needs seventy-five pounds and has raised forty-eight. How much more? The whole is seventy-five, one part is forty-eight. The missing part is twenty-seven pounds.", V.eq('75 − 48 = 27', 'g'))]),
    SC('A difference', 'Compare two bars', [
      st("A tower is ninety-two metres tall, and another is fifty-eight. Draw two bars, one above the other. The difference is the extra bit: thirty-four metres.", V.eq('92 − 58 = 34', 'g'))]),
    SC('More, then find both', 'A harder one', [
      st("Two numbers add to forty. One is ten more than the other. Take the extra ten away: thirty left, shared equally is fifteen each. So the numbers are fifteen and twenty-five.", V.eq('40 − 10 = 30 → 15 and 25', 'g'))]),
    turn("Your turn! Two boxes hold fifty pencils altogether. One holds eight more than the other. How many in each? Pause and try it.", V.eq('?'),
      "Fifty take away eight is forty-two. Half is twenty-one. So the boxes hold twenty-one and twenty-nine.", V.eq('21 and 29', 'g')),
    rec('Bar models for sums and differences', "Draw bars for the amounts. Part plus part makes the whole. Whole take away a part gives the missing part. Compare two bars to see the difference.",
      ['Draw bars for each amount', 'Part + part = whole', 'Whole − part = missing part', 'Compare bars for a difference'])
  ]);

  /* ===================== Topic 10: factors and primes ===================== */
  ep('What are prime numbers?', 'what prime numbers are and how to test whether a number is prime.', [
    SC('Prime numbers', 'Exactly two factors', [
      st("A prime number has exactly two factors: one and itself. Thirteen can only be made as one times thirteen, so it is prime.", V.dots(1, 13, 'var(--accent)') + V.eq('13 = 1 × 13 only', 'g'))]),
    SC('Composite numbers', 'More than two factors', [
      st("A number with more than two factors is called composite. Twelve can be made in lots of ways: one times twelve, two times six, three times four.", V.dots(3, 4, 'var(--good)') + V.eq('12 = 1 × 12 = 2 × 6 = 3 × 4', 'b'))]),
    SC('Primes up to 50', 'Learn to spot them', [
      st("The primes up to fifty are: two, three, five, seven, eleven, thirteen, seventeen, nineteen, twenty-three, twenty-nine, thirty-one, thirty-seven, forty-one, forty-three and forty-seven.", V.cards(['2', '3', '5', '7', '11', '13', '17', '19', '23', '29', '31', '37', '41', '43', '47'], ['g'], true))]),
    SC('Special cases', 'One and two', [
      st("One is not prime, because it has only one factor. Two is the only even prime number. Every other even number divides by two.", V.note('1 is not prime. 2 is the only even prime.'))]),
    SC('Testing a number', 'Is 51 prime?', [
      st("To test a number, try dividing it by the small primes: two, three, five, seven. Fifty-one is odd, so not two. Its digits add to six, which divides by three, so fifty-one does too: three times seventeen.", V.eq('51 = 3 × 17 → not prime', 'b'))]),
    SC('Is 53 prime?', 'Try the small primes', [
      st("Fifty-three: not even, digits add to eight so not three, doesn't end in zero or five, and seven times seven is forty-nine, seven times eight is fifty-six. Nothing works, so fifty-three is prime.", V.eq('53 is prime', 'g'))]),
    turn("Your turn! Is thirty-nine prime? Pause and test it.", V.eq('39'),
      "Three plus nine is twelve, so thirty-nine divides by three: three times thirteen. It is not prime.", V.eq('39 = 3 × 13', 'g')),
    rec('What are prime numbers?', "A prime number has exactly two factors. One is not prime, and two is the only even prime. Test a number by dividing it by the small primes.",
      ['Prime: exactly two factors', 'Composite: more than two', '1 is not prime, 2 is the only even prime', 'Test with 2, 3, 5, 7'])
  ]);

  ep('Common factors and multiples', 'how to find common factors and common multiples of two numbers.', [
    SC('Common factors', 'Factors two numbers share', [
      st("A common factor divides into two numbers. Factors of twelve: one, two, three, four, six, twelve. Factors of eighteen: one, two, three, six, nine, eighteen.", V.eq('12: 1, 2, 3, 4, 6, 12') + V.eq('18: 1, 2, 3, 6, 9, 18')),
      st("The common factors are one, two, three and six. The highest common factor is six.", V.eq('HCF = 6', 'g'))]),
    SC('Common multiples', 'Multiples two numbers share', [
      st("Multiples of four: four, eight, twelve, sixteen, twenty, twenty-four. Multiples of six: six, twelve, eighteen, twenty-four.", V.eq('4: 4, 8, 12, 16, 20, 24…') + V.eq('6: 6, 12, 18, 24…')),
      st("Twelve and twenty-four are common multiples. The lowest common multiple is twelve.", V.eq('LCM = 12', 'g'))]),
    SC('In real life: HCF', 'Making equal groups', [
      st("Twelve apples and eighteen pears are shared into identical bags with none left over. The most bags you can make is the highest common factor: six bags, each with two apples and three pears.", V.eq('HCF(12, 18) = 6 bags', 'g'))]),
    SC('In real life: LCM', 'When will they meet?', [
      st("One bus comes every four minutes and another every six minutes. They leave together. They will next leave together after the lowest common multiple: twelve minutes.", V.eq('LCM(4, 6) = 12 minutes', 'g'))]),
    turn("Your turn! What is the highest common factor of sixteen and twenty-four? Pause and try it.", V.eq('16 and 24'),
      "Factors of sixteen: one, two, four, eight, sixteen. Eight also divides twenty-four. The HCF is eight.", V.eq('HCF = 8', 'g')),
    rec('Common factors and multiples', "List the factors of both numbers to find the common ones; the biggest is the highest common factor. List the multiples to find common multiples; the smallest is the lowest common multiple.",
      ['Common factor: divides both', 'HCF: the biggest one', 'Common multiple: in both tables', 'LCM: the smallest one'])
  ]);

  ep('Prime factors', 'how to write a number as a product of its prime factors with a factor tree.', [
    SC('Building blocks', 'Every number is made of primes', [
      st("Every whole number bigger than one is either prime, or can be made by multiplying primes together. These primes are its prime factors.", V.eq('12 = 2 × 2 × 3', 'g'))]),
    SC('A factor tree', '36', [
      st("Draw a factor tree. Split thirty-six into two factors, like four and nine.", V.eq('36 → 4 × 9', 'b')),
      st("Keep splitting until every branch ends in a prime. Four is two times two. Nine is three times three.", V.eq('4 → 2 × 2 · 9 → 3 × 3', 'b')),
      st("So thirty-six is two times two times three times three.", V.eq('36 = 2 × 2 × 3 × 3', 'g'))]),
    SC('Index form', 'A shorter way', [
      st("We can write repeated factors with powers: two squared times three squared.", V.eq('36 = 2² × 3²', 'g'))]),
    SC('Another example', '60', [
      st("Sixty is six times ten. Six is two times three. Ten is two times five. So sixty is two times two times three times five.", V.eq('60 = 2 × 2 × 3 × 5 = 2² × 3 × 5', 'g'))]),
    SC('Any start works', 'Same answer every time', [
      st("You could start sixty as two times thirty instead. You still end with two, two, three and five. Every number has only one set of prime factors.", V.note('Different trees, same prime factors'))]),
    turn("Your turn! Write twenty-four as a product of prime factors. Pause and try it.", V.eq('24 = ?'),
      "Twenty-four is four times six: two times two times two times three. That is two cubed times three.", V.eq('24 = 2 × 2 × 2 × 3 = 2³ × 3', 'g')),
    rec('Prime factors', "Split a number into factors with a factor tree until every branch ends in a prime. Multiply the primes to check. Use powers for repeated primes.",
      ['Split into two factors', 'Keep going until all are prime', 'Write them multiplied together', 'Use powers for repeats'])
  ]);

  /* ===================== Topic 11: ratio ===================== */
  ep('What is a ratio?', 'what a ratio is and how to write and simplify one.', [
    SC('A ratio', 'Comparing amounts', [
      st("A ratio compares one amount with another. In a bag there are two red sweets for every three green sweets. We write the ratio of red to green as two to three.", V.cards(['●', '●', '■', '■', '■'], ['b', 'b', 'g', 'g', 'g']) + V.eq('red : green = 2 : 3', 'g'))]),
    SC('Order matters', 'Red to green, or green to red?', [
      st("The order matters. Red to green is two to three, but green to red is three to two.", V.eq('2 : 3 ≠ 3 : 2', 'b'))]),
    SC('Simplifying ratios', 'Divide both parts', [
      st("A class has twelve boys and eighteen girls. The ratio is twelve to eighteen. Divide both parts by six: two to three.", V.eq('12 : 18 = 2 : 3', 'g') + V.rule('Divide both parts by the same number.'))]),
    SC('Ratio and fractions', 'Part of the whole', [
      st("With two red and three green, there are five sweets in each group. So two fifths of the sweets are red and three fifths are green.", V.eq('2 : 3 → red = 2/5, green = 3/5', 'g'))]),
    SC('Scaling up', 'Same ratio, more sweets', [
      st("If the ratio stays two to three and there are eight red sweets, there are twelve green, because both parts were multiplied by four.", V.eq('2 : 3 = 8 : 12', 'g'))]),
    turn("Your turn! Simplify the ratio fifteen to twenty-five. Pause and try it.", V.eq('15 : 25'),
      "Both divide by five: three to five.", V.eq('3 : 5', 'g')),
    rec('What is a ratio?', "A ratio compares amounts, in order. Simplify it by dividing both parts by the same number. Scale it by multiplying both parts by the same number.",
      ['Ratio compares amounts', 'Order matters', 'Simplify: divide both parts', 'Scale: multiply both parts'])
  ]);

  ep('How do you calculate ratio in everyday situations?', 'how to share amounts in a ratio and use ratio in recipes and maps.', [
    SC('Sharing in a ratio', '£40 in the ratio 3 : 5', [
      st("Share forty pounds between Ali and Bea in the ratio three to five. First add the parts: three plus five is eight parts.", V.eq('3 + 5 = 8 parts', 'b')),
      st("Find one part: forty divided by eight is five pounds. Ali gets three parts, fifteen pounds. Bea gets five parts, twenty-five pounds.", V.eq('£40 ÷ 8 = £5') + V.eq('Ali £15 · Bea £25', 'g'))]),
    SC('Check', 'Do they add up?', [
      st("Fifteen plus twenty-five is forty. It matches the total, so we are right.", V.eq('£15 + £25 = £40 ✓', 'g'))]),
    SC('Recipes', 'Scaling ingredients', [
      st("Squash is mixed one part juice to four parts water. For one litre of juice you need four litres of water. For half a litre of juice, two litres of water.", V.tbl([['1 l', '4 l'], ['0.5 l', '2 l'], ['3 l', '12 l']], ['Juice', 'Water']))]),
    SC('Recipes for more people', 'Multiply everything', [
      st("A recipe for four people uses two hundred grams of pasta. For twelve people, that is three times as many, so six hundred grams.", V.eq('200 g × 3 = 600 g', 'g'))]),
    SC('Maps and scale', '1 : 100', [
      st("A map scale of one to one hundred means one centimetre on the plan is one hundred centimetres, one metre, in real life. Five centimetres on the plan is five metres.", V.eq('5 cm → 5 m', 'g'))]),
    turn("Your turn! Share thirty sweets in the ratio one to two. Pause and try it.", V.eq('30 in 1 : 2'),
      "There are three parts. Thirty divided by three is ten. So ten and twenty.", V.eq('10 and 20', 'g')),
    rec('How do you calculate ratio in everyday situations?', "To share in a ratio, add the parts, find one part, then multiply. In recipes and maps, multiply every part by the same number.",
      ['Add the parts', 'Total ÷ parts = one part', 'Multiply for each share', 'Recipes and maps: scale every part'])
  ]);

  ep('Ratio with different units', 'how to make the units the same before writing or using a ratio.', [
    SC('Same units first', 'Compare like with like', [
      st("To write a ratio, both amounts must be in the same unit. Fifty centimetres to two metres can't be written as fifty to two.", V.eq('50 cm : 2 m', 'b'))]),
    SC('Change the units', 'Metres to centimetres', [
      st("Two metres is two hundred centimetres. So the ratio is fifty to two hundred, which simplifies to one to four.", V.eq('50 : 200 = 1 : 4', 'g') + V.rule('Change to the same unit, then simplify.'))]),
    SC('Money', 'Pounds and pence', [
      st("Fifty pence to two pounds. Two pounds is two hundred pence. Fifty to two hundred is one to four.", V.eq('50p : £2 = 50 : 200 = 1 : 4', 'g'))]),
    SC('Time', 'Minutes and hours', [
      st("Thirty minutes to two hours. Two hours is one hundred and twenty minutes. Thirty to one hundred and twenty is one to four.", V.eq('30 min : 2 h = 30 : 120 = 1 : 4', 'g'))]),
    SC('Mass', 'Grams and kilograms', [
      st("A cake uses two hundred and fifty grams of sugar and one kilogram of flour. One kilogram is one thousand grams. Two hundred and fifty to one thousand is one to four.", V.eq('250 g : 1 kg = 1 : 4', 'g'))]),
    turn("Your turn! Write forty centimetres to one metre as a ratio in its simplest form. Pause and try it.", V.eq('40 cm : 1 m'),
      "One metre is one hundred centimetres. Forty to one hundred simplifies to two to five.", V.eq('2 : 5', 'g')),
    rec('Ratio with different units', "Before writing a ratio, change both amounts into the same unit. Then simplify by dividing both parts by the same number.",
      ['Same unit first', 'm → cm: × 100', 'h → min: × 60', 'Then simplify'])
  ]);

  /* ===================== Topic 13: spatial ===================== */
  ep('What are nets?', 'what a net is and which nets fold into cubes, cuboids, prisms and pyramids.', [
    SC('A net', 'A 3D shape opened out', [
      st("A net is a flat shape that can be folded to make a 3D shape. If you unfold a cardboard box, you see its net.", LK.grid(4, 3, function (i, j) { return (j === 1 || i === 1) ? true : 'skip'; }, { u: 38, alt: 'A cross-shaped net of six squares' }))]),
    SC('Net of a cube', 'Six squares', [
      st("A cube has six square faces, so its net is six squares. There are eleven different nets of a cube.", V.eq('6 squares → cube', 'g'))]),
    SC('Net of a cuboid', 'Three pairs of rectangles', [
      st("A cuboid has three pairs of matching rectangles: top and bottom, front and back, left and right. Its net has the same six rectangles.", V.note('Opposite faces are the same size'))]),
    SC('Prisms and pyramids', 'Count the faces', [
      st("A triangular prism's net has two triangles and three rectangles. A square-based pyramid's net has one square and four triangles.", V.tbl([['Triangular prism', '2 triangles + 3 rectangles'], ['Square-based pyramid', '1 square + 4 triangles'], ['Tetrahedron', '4 triangles']], ['Shape', 'Net']))]),
    SC('Will it fold?', 'Check for overlaps', [
      st("To check a net, picture folding it one face at a time. If two faces land in the same place, it doesn't work. A two by three rectangle of squares can't make a cube.", LK.grid(3, 2, 6, { u: 38, alt: 'A two by three block of squares' }) + V.eq('Not a net of a cube', 'b'))]),
    turn("Your turn! How many faces will the net of a triangular prism have? Pause and think.", V.eq('?'),
      "Two triangles and three rectangles: five faces.", V.eq('5 faces', 'g')),
    rec('What are nets?', "A net is a 3D shape opened out flat. A cube's net has six squares. Prisms have two matching end faces and rectangles; pyramids have a base and triangles. Picture folding to check.",
      ['Net = shape opened out', 'Cube: 6 squares, 11 nets', 'Prism: 2 ends + rectangles', 'Pyramid: base + triangles'])
  ]);

  ep('What are coordinates?', 'how to read and plot coordinates on a grid.', [
    SC('A coordinate grid', 'Two number lines', [
      st("A coordinate grid has two axes. The x-axis goes across. The y-axis goes up. They meet at the origin, nought nought.", grid([[0, 0, 'origin']]))]),
    SC('Reading coordinates', 'Across, then up', [
      st("Coordinates give the position of a point. The first number tells you how far across. The second tells you how far up. This point is at three, five.", grid([[3, 5, '(3, 5)']]) + V.rule('Along the corridor, then up the stairs.'))]),
    SC('Order matters', '(2, 4) or (4, 2)?', [
      st("Two four and four two are different points. Always go across first.", grid([[2, 4, 'A (2, 4)'], [4, 2, 'B (4, 2)']]))]),
    SC('Plotting a shape', 'Join the points', [
      st("Plot one one, five one, five four and one four, then join them in order. You get a rectangle.", grid([[1, 1], [5, 1], [5, 4], [1, 4]]) + V.eq('(1, 1) (5, 1) (5, 4) (1, 4) → rectangle', 'g'))]),
    SC('A missing corner', 'Use the pattern', [
      st("A square has corners at two two, five two and five five. The fourth corner is at two five.", V.eq('(2, 2) (5, 2) (5, 5) → (2, 5)', 'g'))]),
    turn("Your turn! A point is four across and zero up. What are its coordinates? Pause and think.", V.eq('?'),
      "Across first, then up: four, nought.", V.eq('(4, 0)', 'g')),
    rec('What are coordinates?', "Coordinates give a point's position: how far across, then how far up. The point where the axes meet is the origin, nought nought. Order matters.",
      ['x across, y up', 'Write (across, up)', 'Origin = (0, 0)', '(2, 4) ≠ (4, 2)'])
  ]);

  ep('Reflecting on a grid', 'how to reflect a shape in a mirror line on a grid.', [
    SC('Reflection', 'A mirror image', [
      st("A reflection is a mirror image. Each point of the shape moves to the other side of the mirror line, the same distance away.", LK.grid(10, 4, function (i, j) { return (i === 2 && j === 1) || (i === 7 && j === 1); }, { u: 28, mirror: 5, alt: 'A square reflected in a mirror line' }))]),
    SC('Count the squares', 'Same distance', [
      st("This square is three squares to the left of the mirror. Its reflection is three squares to the right.", V.rule('Count to the mirror, then count the same on the other side.'))]),
    SC('A shape', 'Reflect each corner', [
      st("To reflect a whole shape, reflect each corner one at a time, then join them up.", LK.grid(10, 5, function (i, j) { return (i >= 1 && i <= 3 && j === 3) || (i === 3 && j <= 2 && j >= 1) || (i >= 6 && i <= 8 && j === 3) || (i === 6 && j <= 2 && j >= 1); }, { u: 26, mirror: 5, alt: 'A shape and its reflection' }))]),
    SC('Touching the mirror', 'Stays in place', [
      st("Any part of the shape that touches the mirror line stays where it is.", V.note('Points on the mirror line don’t move'))]),
    SC('Horizontal mirror lines', 'Flip up and down', [
      st("If the mirror line goes across, the shape flips up and down instead of left and right.", V.note('Horizontal mirror: up and down swap'))]),
    turn("Your turn! A point is two squares above a horizontal mirror line. Where will its reflection be? Pause and think.", V.eq('?'),
      "Two squares below the mirror line.", V.eq('2 squares below', 'g')),
    rec('Reflecting on a grid', "Reflect each corner the same distance on the other side of the mirror line, then join them up. Points on the mirror stay where they are.",
      ['Count to the mirror line', 'Count the same on the other side', 'Reflect every corner', 'Points on the line stay put'])
  ]);

  /* ===================== put topics 5 to 13 together ===================== */
  L.use(5, ['What is currency?', 'How can different coins and notes make the same total?', 'How can I use adding and subtracting to work out change?', 'What is analogue and digital time?', 'What are imperial measurements?', 'What are metric measurements?', 'How can I work out the length of an object?', 'How can I work out the area of a shape?', 'What is volume?', 'What is the perimeter?', 'Timetables and durations', 'Calendars and time zones']);
  L.use(6, ['What is a number sequence?', 'What is an equation?', 'How do you solve missing number problems?', 'Expressions from words and shapes']);
  L.use(7, ['How do you identify different polygons?', 'What are the types of triangle?', 'What are the parts of a circle?', 'What makes a shape symmetrical?', 'What is an angle?', 'What are parallel and perpendicular lines?', 'Angle facts', 'Solid shapes and reflections']);
  L.use(8, ['How do I record and display data?', 'How can data be displayed?', 'How do I find the mean, median, mode and range?', 'What is probability?', 'Two-way tables, Venn diagrams and pie charts']);
  L.use(9, ['How do you solve maths problems?', 'Multi-step problems', 'Bar models for sums and differences', 'Always true, factors and multiples']);
  L.use(10, ['What are factors?', 'What are prime numbers?', 'Common factors and multiples', 'Prime factors', 'Always true, factors and multiples']);
  L.use(11, ['What is a ratio?', 'How do you calculate ratio in everyday situations?', 'Ratio with different units']);
  L.use(13, ['What are nets?', 'How do I use grid references on a map?', 'What are coordinates?', 'Reflecting on a grid', 'Painted cubes and stacks']);
})();
