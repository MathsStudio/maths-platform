/* lessons_505.js: new Watch lessons for P5 Topic 5, Money, time and measurement. One detailed lesson per question. */
(function () {
  'use strict';
  var BT = window.BT; if (!BT || !BT.lessons || !BT.lk) return;
  var V = BT.sv, LK = BT.lk, NL = BT.NL;
  var SC = function (h, sub, steps) { return { h: h, sub: sub, steps: steps }; };
  var st = function (say, html) { return { say: say, html: html || '' }; };
  var SW = '<!--swap-->';
  var coins = function (l) { return BT.coins(l); };
  var note = function (v, col) { return '<span style="display:inline-flex;align-items:center;justify-content:center;width:96px;height:50px;border-radius:6px;background:' + col + ';color:#fff;font-weight:700;font-size:20px;border:2px solid var(--fg)">£' + v + '</span>'; };
  var N5 = note(5, '#2f9e8f'), N10 = note(10, '#d9822b'), N20 = note(20, '#7b4fb0');

  /* ---------- How can different coins and notes make the same total? ---------- */
  var sameTotal = {
    title: 'How can different coins and notes make the same total?', goal: 'our coins and notes, how to write money, and different ways to make the same amount.',
    scenes: [
      SC('Coins and notes', 'The money we use in the UK', [
        st("In the UK we use pounds and pence. There are one hundred pence in one pound.", V.rule('100p = £1')),
        st("Here are our coins: one p, two p, five p, ten p, twenty p, fifty p, one pound and two pounds.", coins([1, 2, 5, 10, 20, 50, 100, 200])),
        st("For bigger amounts we use notes: five pounds, ten pounds and twenty pounds. There is also a fifty pound note.", V.row(N5 + N10 + N20))]),
      SC('Writing money', 'Pounds and pence', [
        st("We can write money in pence, or in pounds and pence. Three pounds forty-five is written with a pound sign and a decimal point.", V.eq('£3.45 = 3 pounds and 45 pence', 'b')),
        st("Because a pound is one hundred pence, three pounds forty-five is the same as three hundred and forty-five pence.", V.eq('£3.45 = 345p', 'g')),
        st("Be careful with small amounts of pence. Three pounds and five pence needs a zero: three point nought five.", V.eq('£3.05, not £3.5', 'r'))]),
      SC('The same total, different ways', 'Make £1', [
        st("There are many ways to make one pound. One pound coin.", coins([100])),
        st("Two fifty pence coins: fifty, one hundred.", coins([50, 50])),
        st("Fifty, twenty, twenty and ten: fifty, seventy, ninety, one hundred.", coins([50, 20, 20, 10])),
        st("Or ten ten pence coins. Every way makes one pound.", coins([10, 10, 10, 10, 10, 10, 10, 10, 10, 10]) + V.eq('All make £1', 'g'))]),
      SC('Counting money', 'Biggest first', [
        st("To count money, start with the biggest note or coin. Here we have a five pound note, a two pound coin, fifty pence, twenty pence and five pence.", V.row(N5) + coins([200, 50, 20, 5])),
        st("Count on: five pounds, seven pounds, seven fifty, seven seventy, seven seventy-five.", V.eq('£5 → £7 → £7.50 → £7.70 → £7.75', 'b') + V.eq('Total £7.75', 'g'))]),
      SC('Fewest coins', 'Start with the biggest coin that fits', [
        st("Make eighty-five pence with the fewest coins. Start with the biggest coin that fits: fifty pence. Thirty-five pence is left.", coins([50]) + V.eq('85 − 50 = 35p left', 'b')),
        st("Twenty pence fits: fifteen left. Ten pence fits: five left. Then five pence.", coins([50, 20, 10, 5]) + V.eq('4 coins', 'g'))]),
      SC('Bigger amounts', 'Make £12.50', [
        st("Twelve pounds fifty could be a ten pound note, a two pound coin and a fifty pence coin.", V.row(N10) + coins([200, 50])),
        st("Or two five pound notes, a two pound coin and fifty pence. Both make twelve pounds fifty.", V.row(N5 + N5) + coins([200, 50]) + V.eq('£12.50 two ways', 'g'))]),
      SC('Your turn', 'Pause, think, then listen', [
        st("Your turn! Make three pounds sixty in two different ways. Pause and think.", V.eq('£3.60 = ?')),
        st("One way: two pounds, one pound, fifty pence and ten pence.", coins([200, 100, 50, 10])),
        st("Another way: one pound, one pound, one pound, twenty, twenty, twenty.", coins([100, 100, 100, 20, 20, 20]) + V.eq('Both make £3.60', 'g'))]),
      SC('Let’s recap', 'Coins and notes', [
        st("Great work! One hundred pence make one pound. Write pounds and pence with a decimal point, like three pounds forty-five. The same total can be made in many ways. Count from the biggest coin, and for the fewest coins, start with the biggest one that fits.",
          V.list(['100p = £1', '£3.45 = 345p', 'Many ways make the same total', 'Count from the biggest coin', 'Fewest coins: biggest that fits first']))])
    ]
  };

  /* ---------- How can I use adding and subtracting to work out change? ---------- */
  var change = {
    title: 'How can I use adding and subtracting to work out change?', goal: 'how to work out change by counting on and by subtracting.',
    scenes: [
      SC('What is change?', 'Money you get back', [
        st("When you pay with more money than the price, the shop gives you some back. The money you get back is called change.", V.rule('Change = money paid − price')),
        st("A book costs three pounds sixty-five. You pay with a five pound note. How much change will you get?", V.row(V.card('£3.65', 'b', true) + N5) + V.eq('Change = ?', 'r'))]),
      SC('Method 1: count on', 'The shopkeeper’s way', [
        st("Count on from the price to the money paid, using friendly jumps. From three sixty-five to three seventy is five pence.", V.eq('£3.65 → £3.70: 5p', 'b')),
        st("From three seventy to four pounds is thirty pence. From four pounds to five pounds is one pound.", V.eq('£3.70 → £4: 30p', 'g') + V.eq('£4 → £5: £1', 'r')),
        st("Add the jumps: five pence, plus thirty pence, plus one pound. The change is one pound thirty-five.", V.eq('5p + 30p + £1 = £1.35', 'g'))]),
      SC('Method 2: subtract', 'Take the price away', [
        st("We can also subtract. Change everything into pence: five pounds is five hundred pence, and three sixty-five is three hundred and sixty-five pence.", V.eq('500p − 365p', 'b')),
        st("Five hundred take away three hundred and sixty-five is one hundred and thirty-five pence. That is one pound thirty-five, the same answer.", V.eq('500 − 365 = 135p = £1.35', 'g'))]),
      SC('Check by adding', 'Price + change = money paid', [
        st("Check by adding the change to the price. Three sixty-five plus one thirty-five is five pounds. It matches what we paid.", V.eq('£3.65 + £1.35 = £5.00 ✓', 'g'))]),
      SC('Change from £10', '£6.28', [
        st("A toy costs six pounds twenty-eight. You pay with ten pounds. Count on: two pence to six thirty.", V.eq('£6.28 → £6.30: 2p', 'b')),
        st("Seventy pence to seven pounds. Then three pounds to ten pounds.", V.eq('£6.30 → £7: 70p', 'g') + V.eq('£7 → £10: £3', 'r')),
        st("Two pence, plus seventy pence, plus three pounds. The change is three pounds seventy-two.", V.eq('Change = £3.72', 'g'))]),
      SC('Buying more than one thing', 'Add first, then find the change', [
        st("A sandwich costs two forty and a drink costs one thirty-five. First add the prices: three pounds seventy-five.", V.eq('£2.40 + £1.35 = £3.75', 'b')),
        st("You pay with ten pounds. Count on: five pence to three eighty, twenty pence to four pounds, six pounds to ten. Change: six pounds twenty-five.", V.eq('5p + 20p + £6 = £6.25', 'g'))]),
      SC('Your turn', 'Pause, think, then listen', [
        st("Your turn! A game of mini golf costs seven pounds eighty. You pay with twenty pounds. What is the change? Pause and count on.", V.eq('£20 − £7.80 = ?')),
        st("Twenty pence to eight pounds. Two pounds to ten pounds. Ten pounds to twenty pounds. Twenty pence plus two pounds plus ten pounds is twelve pounds twenty.", V.eq('Change = £12.20', 'g'))]),
      SC('Let’s recap', 'Working out change', [
        st("Well done! Change is the money paid take away the price. Count on from the price in friendly jumps, or subtract in pence. If you buy more than one thing, add the prices first. Always check by adding the change back to the price.",
          V.list(['Change = money paid − price', 'Count on in friendly jumps', 'Or subtract in pence', 'Several items? Add the prices first', 'Check: price + change = money paid']))])
    ]
  };

  /* ---------- What is analogue and digital time? ---------- */
  var time = {
    title: 'What is analogue and digital time?', goal: 'how to read analogue and digital clocks, and 12-hour and 24-hour time.',
    scenes: [
      SC('Two kinds of clock', 'Analogue and digital', [
        st("An analogue clock has a round face with numbers and hands that turn.", V.clock(3, 0)),
        st("A digital clock shows the time in numbers, like on a phone or an oven. Both show the same time in different ways.", V.big('3:00'))]),
      SC('The hands', 'Short hand and long hand', [
        st("An analogue clock has two hands. The short hand is the hour hand. It points to the hour.", V.clock(3, 0) + V.note('The short hand points to 3')),
        st("The long hand is the minute hand. When it points straight up to twelve, it is exactly o'clock. This clock shows three o'clock.", V.eq("3 o'clock", 'g'))]),
      SC('Counting the minutes', 'Count in fives', [
        st("The minute hand goes all the way round in sixty minutes. Each number on the clock is five minutes. Count in fives.", V.clock(3, 20)),
        st("Here the minute hand points to four. Five, ten, fifteen, twenty. It is twenty minutes past three.", V.eq('20 past 3 = 3:20', 'g'))]),
      SC('Past and to', 'Quarter past, half past, quarter to', [
        st("When the minute hand is on three, it is quarter past. Quarter past three.", V.clock(3, 15) + V.eq('quarter past 3 = 3:15', 'b')),
        st("On six, it is half past. Half past three.", SW + V.clock(3, 30) + V.eq('half past 3 = 3:30', 'g')),
        st("After half past, we count the minutes to the next hour. On nine, it is quarter to four.", SW + V.clock(3, 45) + V.eq('quarter to 4 = 3:45', 'r')),
        st("On eight, there are twenty minutes to go. Twenty to four, which a digital clock shows as three forty.", SW + V.clock(3, 40) + V.eq('20 to 4 = 3:40', 'b'))]),
      SC('Morning or afternoon?', 'a.m. and p.m.', [
        st("The hour hand goes round twice every day. So three o'clock happens twice: once at night and once in the afternoon.", V.row(LK.tag('a.m. = midnight to midday', 'b') + LK.tag('p.m. = midday to midnight', 'g'))),
        st("We write a.m. for times in the morning, and p.m. for times after midday. Three forty in the afternoon is three forty p.m.", V.eq('3:40 p.m.', 'g'))]),
      SC('24-hour time', 'No a.m. or p.m. needed', [
        st("Twenty-four-hour clocks, like on timetables, count the hours all the way from zero to twenty-three. Morning times stay the same, with four digits.", V.eq('7:15 a.m. = 07:15', 'b')),
        st("For afternoon times, add twelve to the hour. Three forty p.m.: three plus twelve is fifteen. So it is fifteen forty.", V.eq('3:40 p.m. = 15:40', 'g')),
        st("To go back, take away twelve. Twenty forty-five is eight forty-five p.m., quarter to nine in the evening.", V.eq('20:45 = 8:45 p.m.', 'r'))]),
      SC('Your turn', 'Pause, think, then listen', [
        st("Your turn! What time does this clock show? Pause and think.", V.clock(10, 50)),
        st("The minute hand is on ten: fifty minutes past, or ten minutes to the next hour. The hour hand is nearly at eleven. It is ten to eleven, which is ten fifty.", V.eq('ten to eleven = 10:50', 'g')),
        st("And if it is the evening, what is it in twenty-four-hour time?", V.eq('10:50 p.m. = ?')),
        st("Add twelve to the hour: twenty-two fifty.", V.eq('10:50 p.m. = 22:50', 'g'))]),
      SC('Let’s recap', 'Analogue and digital time', [
        st("Brilliant! On an analogue clock, the short hand shows the hour and the long hand shows the minutes. Count the minutes in fives. After half past, say the minutes to the next hour. Use a.m. and p.m. for 12-hour times, and add twelve for afternoon times in the 24-hour clock.",
          V.list(['Short hand = hour, long hand = minutes', 'Each number on the clock = 5 minutes', 'Past the hour, then to the next hour', 'a.m. morning, p.m. afternoon and evening', '24-hour: add 12 to p.m. hours']))])
    ]
  };

  /* ---------- What are metric measurements? ---------- */
  var metric = {
    title: 'What are metric measurements?', goal: 'the metric units for length, mass and capacity, and how to change between them.',
    scenes: [
      SC('What are metric measurements?', 'Units built on tens', [
        st("When we measure, we use units. The metric system is the set of units we use in school and in most of the world. It is built on tens, hundreds and thousands, like place value.", V.rule('Metric units go up in 10s, 100s and 1,000s.')),
        st("We measure three main things: length, mass and capacity.", V.row(LK.tag('length: how long', 'b') + LK.tag('mass: how heavy', 'g') + LK.tag('capacity: how much it holds', 'r')))]),
      SC('Length', 'mm, cm, m and km', [
        st("Length is how long something is. A millimetre is tiny, like the width of a grain of rice. A centimetre is about the width of your finger.", V.eq('10 mm = 1 cm', 'b')),
        st("A metre is about one big stride. A kilometre is a long way: about a fifteen-minute walk.", V.eq('100 cm = 1 m', 'g') + V.eq('1,000 m = 1 km', 'r'))]),
      SC('Mass', 'grams and kilograms', [
        st("Mass is how heavy something is. A gram is very light, like a paperclip. A kilogram is like a bag of sugar.", V.eq('1,000 g = 1 kg', 'b')),
        st("An apple is about one hundred grams. A small dog might be ten kilograms.", V.cards(['apple ≈ 100 g', 'sugar = 1 kg', 'dog ≈ 10 kg'], ['b', 'g', 'r'], true))]),
      SC('Capacity', 'millilitres and litres', [
        st("Capacity is how much liquid a container holds. A teaspoon holds about five millilitres. A big bottle of water holds one litre.", V.eq('1,000 ml = 1 l', 'b')),
        st("A cup holds about two hundred and fifty millilitres. Four cups make one litre.", V.eq('4 × 250 ml = 1,000 ml = 1 l', 'g'))]),
      SC('Choose the right unit', 'Small things, small units', [
        st("Choose a unit that suits the size. Measure a ladybird in millimetres, a book in centimetres, a football pitch in metres, and a journey in kilometres.",
          V.tbl([['ladybird', 'mm'], ['book', 'cm'], ['football pitch', 'm'], ['journey to Edinburgh', 'km']], ['Thing', 'Best unit']))]),
      SC('Changing units', 'Multiply or divide by 10, 100 or 1,000', [
        st("To change a big unit into a small unit, multiply. Three metres is three times one hundred: three hundred centimetres.", V.eq('3 m = 3 × 100 = 300 cm', 'b')),
        st("Two kilograms is two times one thousand: two thousand grams. Two point five kilometres is two thousand five hundred metres.", V.eq('2 kg = 2,000 g', 'g') + V.eq('2.5 km = 2,500 m', 'g')),
        st("To change a small unit into a big unit, divide. Four thousand millilitres divided by one thousand is four litres.", V.eq('4,000 ml ÷ 1,000 = 4 l', 'r') + V.rule('Big to small: multiply. Small to big: divide.'))]),
      SC('Your turn', 'Pause, think, then listen', [
        st("Your turn! How many millimetres are in five centimetres? Pause and think.", V.eq('5 cm = ? mm')),
        st("There are ten millimetres in a centimetre. Five times ten is fifty millimetres.", V.eq('5 cm = 50 mm', 'g')),
        st("And how many kilograms is three thousand grams?", V.eq('3,000 g = ? kg')),
        st("Divide by one thousand: three kilograms.", V.eq('3,000 g = 3 kg', 'g'))]),
      SC('Let’s recap', 'Metric measurements', [
        st("Great work! Metric units are based on tens. Length uses millimetres, centimetres, metres and kilometres. Mass uses grams and kilograms. Capacity uses millilitres and litres. Multiply to change to a smaller unit, and divide to change to a bigger unit.",
          V.list(['10 mm = 1 cm, 100 cm = 1 m, 1,000 m = 1 km', '1,000 g = 1 kg', '1,000 ml = 1 l', 'Choose a unit that suits the size', 'Big to small: ×. Small to big: ÷']))])
    ]
  };

  /* ---------- How can I work out the length of an object? ---------- */
  var length = {
    title: 'How can I work out the length of an object?', goal: 'how to measure length accurately with a ruler and compare lengths.',
    scenes: [
      SC('Measuring length', 'How long is it?', [
        st("Length is how long something is from one end to the other. For small things we use a ruler. For big things we use a metre stick or a tape measure.", V.rule('Length = the distance from one end to the other.'))]),
      SC('Using a ruler', 'Start at zero', [
        st("Line up one end of the object with the zero mark on the ruler, not with the end of the ruler.", BT.ruler(6)),
        st("Then read the number where the other end of the object stops. This pencil is six centimetres long.", V.eq('6 cm', 'g'))]),
      SC('Centimetres and millimetres', 'The small marks', [
        st("Between each centimetre there are ten small marks. Each small mark is one millimetre.", BT.ruler(6.4)),
        st("This pencil ends four small marks after six. It is six centimetres and four millimetres, which we write as six point four centimetres, or sixty-four millimetres.", V.eq('6 cm 4 mm = 6.4 cm = 64 mm', 'g'))]),
      SC('A common mistake', 'Starting at 1', [
        st("If you start measuring at the one mark instead of zero, your answer will be one centimetre too long. Always line up with zero.", V.eq('✗ start at 1: 1 cm too long', 'r') + V.eq('✓ start at 0', 'g'))]),
      SC('Measuring longer things', 'Metres and centimetres', [
        st("A table is longer than a ruler, so use a metre stick or tape. This table is one metre and thirty-five centimetres long.", V.eq('1 m 35 cm', 'b')),
        st("One metre is one hundred centimetres, so the table is one hundred and thirty-five centimetres, or one point three five metres.", V.eq('1 m 35 cm = 135 cm = 1.35 m', 'g'))]),
      SC('Comparing lengths', 'Use the same units', [
        st("Which is longer: one point two metres or ninety-five centimetres? We must use the same units to compare.", V.cards(['1.2 m', '95 cm'], ['b', 'r'])),
        st("One point two metres is one hundred and twenty centimetres. One hundred and twenty is more than ninety-five, so one point two metres is longer.", V.eq('120 cm > 95 cm', 'g'))]),
      SC('Estimating length', 'Use body benchmarks', [
        st("You can estimate lengths using your body. Your finger is about one centimetre wide. Your hand span is about fifteen centimetres. A big stride is about one metre.", V.cards(['finger ≈ 1 cm', 'hand span ≈ 15 cm', 'stride ≈ 1 m'], ['b', 'g', 'r'], true))]),
      SC('Your turn', 'Pause, think, then listen', [
        st("Your turn! How long is this crayon? Pause and read the ruler.", BT.ruler(9.2)),
        st("It ends two small marks after nine. That is nine point two centimetres, or ninety-two millimetres.", V.eq('9.2 cm = 92 mm', 'g'))]),
      SC('Let’s recap', 'Measuring length', [
        st("Well done! Line up the end of the object with zero. Read where the other end stops. Each centimetre has ten millimetres. Use metres for long things, and change to the same units before you compare.",
          V.list(['Start at zero, not the end of the ruler', 'Read where the object ends', '1 cm = 10 mm', '1 m = 100 cm', 'Same units before comparing']))])
    ]
  };

  /* ---------- How can I work out the area of a shape? ---------- */
  var area = {
    title: 'How can I work out the area of a shape?', goal: 'what area is and how to find it by counting squares and by multiplying.',
    scenes: [
      SC('What is area?', 'The space inside a flat shape', [
        st("Area is the amount of space inside a flat shape. Imagine covering a table with square tiles. The number of tiles is the area.", V.rule('Area = the space inside a shape, measured in squares.'))]),
      SC('Counting squares', 'A rectangle on squared paper', [
        st("This rectangle is drawn on squared paper. Each square is one centimetre long and one centimetre wide. Let's count the squares inside.", LK.grid(4, 3, 0, { u: 40, w: '4 cm', h: '3 cm' })),
        st("There are twelve squares. So the area is twelve square centimetres.", SW + LK.grid(4, 3, 12, { u: 40, w: '4 cm', h: '3 cm' }) + V.eq('Area = 12 cm²', 'g')),
        st("We write square centimetres as c m with a little two. It means squares that are one centimetre on each side.", V.note('cm² means square centimetres'))]),
      SC('A quicker way', 'Rows times columns', [
        st("Counting every square takes a long time. Look: there are three rows, and four squares in each row.", LK.grid(4, 3, 12, { u: 40, w: '4 cm', h: '3 cm' })),
        st("Three rows of four is three times four, which is twelve. For a rectangle, area equals length times width.", V.eq('Area = length × width', 'b') + V.eq('4 × 3 = 12 cm²', 'g'))]),
      SC('Same area, different shapes', '12 squares', [
        st("Different rectangles can have the same area. Six by two is twelve. Twelve by one is also twelve.", LK.grid(6, 2, 12, { u: 34 }) + LK.grid(12, 1, 12, { u: 26, hue: 140 }) + V.eq('6 × 2 = 12 × 1 = 12 cm²', 'g'))]),
      SC('Shapes that are not rectangles', 'Split them into rectangles', [
        st("This L-shape is not a rectangle. But we can split it into two rectangles.", LK.grid(5, 4, function (i, j) { return j < 2 || i < 2 ? (i < 2 ? true : true) : 'skip'; }, { u: 36 })),
        st("The top part is five by two: ten squares. The bottom part is two by two: four squares. Ten plus four is fourteen square centimetres.",
          SW + LK.grid(5, 4, function (i, j) { return j < 2 ? true : (i < 2 ? 'b' : 'skip'); }, { u: 36 }) + V.eq('10 + 4 = 14 cm²', 'g'))]),
      SC('Your turn', 'Pause, think, then listen', [
        st("Your turn! A rug is five metres long and four metres wide. What is its area? Pause and think.", LK.grid(5, 4, 0, { u: 36, w: '5 m', h: '4 m' })),
        st("Length times width: five times four is twenty. The area is twenty square metres.", V.eq('5 × 4 = 20 m²', 'g'))]),
      SC('Let’s recap', 'Area', [
        st("Super! Area is the space inside a flat shape. Count the squares, or for a rectangle, multiply length by width. Area is measured in square units, like square centimetres or square metres. Split tricky shapes into rectangles.",
          V.list(['Area = space inside a shape', 'Count squares to find it', 'Rectangle: length × width', 'Units: cm², m²', 'Split L-shapes into rectangles']))])
    ]
  };

  /* ---------- What is the perimeter? ---------- */
  var perimeter = {
    title: 'What is the perimeter?', goal: 'what perimeter is and how to find it for rectangles, squares and other shapes.',
    scenes: [
      SC('What is the perimeter?', 'The distance around the outside', [
        st("The perimeter is the total distance all the way around the outside edge of a shape.", V.rule('Perimeter = the distance all the way around.')),
        st("Imagine walking around the edge of a playground. The distance you walk is the perimeter.")]),
      SC('Perimeter of a rectangle', '6 cm by 4 cm', [
        st("This rectangle is six centimetres long and four centimetres wide. Start at one corner and add every side as you go round.", V.poly([[20, 20], [260, 20], [260, 180], [20, 180]], null, 280, 200, 'A 6 by 4 rectangle', [[140, 14, '6 cm'], [140, 198, '6 cm'], [10, 104, '4'], [272, 104, '4']])),
        st("Six plus four plus six plus four is twenty. The perimeter is twenty centimetres.", V.eq('6 + 4 + 6 + 4 = 20 cm', 'g')),
        st("A shortcut: add one length and one width, then double it. Six plus four is ten. Ten doubled is twenty.", V.eq('(6 + 4) × 2 = 20 cm', 'b'))]),
      SC('Perimeter of a square', 'All four sides are equal', [
        st("A square has four equal sides. If each side is five centimetres, the perimeter is four times five.", V.eq('4 × 5 = 20 cm', 'g'))]),
      SC('Other shapes', 'Add every side', [
        st("For any straight-sided shape, add up all the sides. This triangle has sides of three, four and five centimetres. Three plus four plus five is twelve centimetres.",
          V.poly([[20, 170], [180, 170], [20, 50]], null, 220, 190, 'A 3, 4, 5 triangle', [[100, 188, '4 cm'], [8, 116, '3'], [110, 102, '5 cm']]) + V.eq('3 + 4 + 5 = 12 cm', 'g'))]),
      SC('Perimeter or area?', 'Two different questions', [
        st("Perimeter and area are different. Perimeter is the distance around the edge, measured in centimetres. Area is the space inside, measured in square centimetres.", V.row(LK.tag('perimeter: around the edge, cm', 'b') + LK.tag('area: inside, cm²', 'g'))),
        st("For a fence around a garden, you need the perimeter. For grass to cover the garden, you need the area.")]),
      SC('Your turn', 'Pause, think, then listen', [
        st("Your turn! A garden is eight metres long and three metres wide. How much fence goes all the way around? Pause and think.", V.eq('8 m by 3 m')),
        st("Eight plus three is eleven. Double it: twenty-two metres of fence.", V.eq('(8 + 3) × 2 = 22 m', 'g'))]),
      SC('Let’s recap', 'Perimeter', [
        st("Great job! The perimeter is the distance all the way around a shape. Add every side. For a rectangle, add the length and width, then double. For a square, multiply one side by four. Perimeter is a length, so it is measured in centimetres or metres.",
          V.list(['Perimeter = distance around the edge', 'Add every side', 'Rectangle: (length + width) × 2', 'Square: 4 × side', 'Measured in cm or m, not cm²']))])
    ]
  };

  BT.lessons(505, 'Watch lesson', [sameTotal, change, time, metric, length, area, perimeter], ['Calendars and time zones']);
})();
