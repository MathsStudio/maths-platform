/* moreq.js: extra question makers for the few banks that had fewer different questions than the set size needs.
   Each maker belongs to the topic it is listed under and only uses ideas that topic teaches. uni.js draws from these only when a bank runs short. */
(function () {
  'use strict';
  var S = window.Studio, FL = window.FL; if (!S || !FL) return;
  var H = S.h, rnd = H.rnd, pick = H.pick, shuffle = H.shuffle, Q = FL.Q, MC = FL.MC;
  function r(a, b) { return rnd(a, b); }
  function num(x) { return String(Math.round(x * 100000) / 100000); }
  function plur(n, w, ws) { return n === 1 ? w : (ws || w + 's'); }
  var X = window.__extraQ = {};
  var PEOPLE = ['Ava', 'Ben', 'Cara', 'Dev', 'Ella', 'Finn', 'Gus', 'Hana', 'Ian', 'Jo'];
  var THINGS = ['stickers', 'pencils', 'marbles', 'sweets', 'cards', 'shells', 'stamps', 'beads'];

  /* ---------- P4 403 Multiplication and division ---------- */
  X[403] = { practise: [
    function () { var a = pick([2, 3, 4, 5, 6, 8, 10]), b = r(2, 12); return Q('Times tables', 'What is <b>' + a + ' × ' + b + '</b>?', a * b, ['Count in ' + a + 's, ' + b + ' times.'], a + ' × ' + b + ' = ' + a * b + '.'); },
    function () { var a = pick([2, 3, 4, 5, 6, 8, 10]), b = r(2, 12); return Q('Division facts', 'What is <b>' + a * b + ' ÷ ' + a + '</b>?', b, ['Think: ' + a + ' times what makes ' + a * b + '?'], a + ' × ' + b + ' = ' + a * b + ', so ' + a * b + ' ÷ ' + a + ' = ' + b + '.'); },
    function () { var a = pick([2, 3, 4, 5, 10]), b = r(2, 10), n = pick(PEOPLE), t = pick(THINGS); return Q('Groups of', n + ' has <b>' + b + '</b> bags with <b>' + a + '</b> ' + t + ' in each bag. How many ' + t + ' altogether?', a * b, ['Make ' + b + ' groups of ' + a + '.'], b + ' × ' + a + ' = ' + a * b + '.'); },
    function () { var a = pick([2, 3, 4, 5, 10]), b = r(2, 10), t = pick(THINGS); return Q('Sharing', 'Share <b>' + a * b + '</b> ' + t + ' equally between <b>' + a + '</b> children. How many does each child get?', b, ['Divide by ' + a + '.'], a * b + ' ÷ ' + a + ' = ' + b + '.'); },
    function () { var a = pick([2, 3, 4, 5, 10]), b = r(2, 10); return Q('Missing number', a + ' × <b>?</b> = ' + a * b + '. What is the missing number?', b, ['Divide ' + a * b + ' by ' + a + '.'], a * b + ' ÷ ' + a + ' = ' + b + '.'); },
    function () { var a = r(11, 49); return Q('Doubling', 'Double <b>' + a + '</b>.', a * 2, ['Double the tens and the ones, then add.'], a + ' + ' + a + ' = ' + a * 2 + '.'); },
    function () { var a = r(2, 99); return Q('Tens', 'What is <b>' + a + ' × 10</b>?', a * 10, ['Each digit moves one place to the left.'], a + ' × 10 = ' + a * 10 + '.'); }
  ] };
  X[403].practical = X[403].practise;

  /* ---------- P4 404 Fractions ---------- */
  X[404] = { practise: [
    function () { var d = pick([2, 3, 4, 5, 6, 8, 10]), k = r(2, 12); return Q('Fraction of an amount', 'What is <b>1/' + d + '</b> of <b>' + d * k + '</b>?', k, ['Divide ' + d * k + ' by ' + d + '.'], d * k + ' ÷ ' + d + ' = ' + k + '.'); },
    function () { var d = pick([3, 4, 5, 6, 8, 10]), n = r(2, d - 1), k = r(2, 9); return Q('Fraction of an amount', 'What is <b>' + n + '/' + d + '</b> of <b>' + d * k + '</b>?', n * k, ['Find 1/' + d + ' first: divide by ' + d + '.', 'Then multiply by ' + n + '.'], d * k + ' ÷ ' + d + ' = ' + k + ', and ' + k + ' × ' + n + ' = ' + n * k + '.'); },
    function () { var d = r(3, 12), a = r(1, d - 1), b = r(1, d - 1); if (a === b) b = a === 1 ? 2 : a - 1; return MC('Comparing fractions', 'Which is bigger: <b>' + a + '/' + d + '</b> or <b>' + b + '/' + d + '</b>?', Math.max(a, b) + '/' + d, [Math.min(a, b) + '/' + d, 'They are equal'], ['The pieces are the same size.', 'More pieces is more.'], 'Same bottom number, so the bigger top number is bigger.'); },
    function () { var d = r(3, 12), n = r(1, d - 1); return Q('Fractions of a shape', n + ' out of <b>' + d + '</b> equal parts of a shape are shaded. Write the fraction shaded as top number / bottom number, for example 3/8.', n + '/' + d, ['The bottom number is the number of equal parts.', 'The top number is the parts shaded.'], n + '/' + d + ' is shaded.'); },
    function () { var d = r(3, 12), n = r(1, d - 1); return Q('Fractions of a shape', 'A pizza is cut into <b>' + d + '</b> equal slices and <b>' + n + '</b> slices are eaten. How many slices are left?', d - n, ['Take away the slices eaten from the whole pizza.'], d + ' − ' + n + ' = ' + (d - n) + '.'); },
    function () { var k = r(2, 10), q = pick([2, 4]); return Q('Counting fractions', 'How many ' + (q === 2 ? 'halves' : 'quarters') + ' are in <b>' + k + '</b> wholes?', k * q, ['There are ' + q + ' ' + (q === 2 ? 'halves' : 'quarters') + ' in 1 whole.'], k + ' × ' + q + ' = ' + k * q + '.'); },
    function () { var P = [['1/2', '0.5', '50%'], ['1/4', '0.25', '25%'], ['3/4', '0.75', '75%'], ['1/10', '0.1', '10%']], p = pick(P), a = pick([0, 1, 2]), b = (a + r(1, 2)) % 3, nm = ['fraction', 'decimal', 'percentage']; var w = shuffle(P.filter(function (x) { return x !== p; }).map(function (x) { return x[b]; })).slice(0, 2); return MC('Fractions, decimals and percentages', 'Which ' + nm[b] + ' is the same as <b>' + p[a] + '</b>?', p[b], w, ['Think of it as part of a whole.'], p[a] + ' = ' + p[b] + '.'); },
    function () { var d = pick([2, 4, 5, 10]), k = r(2, 12), t = pick(THINGS), n = pick(PEOPLE); return Q('Real fractions', n + ' has <b>' + d * k + '</b> ' + t + ' and gives away <b>1/' + d + '</b> of them. How many ' + t + ' does ' + n + ' give away?', k, ['Divide by ' + d + '.'], d * k + ' ÷ ' + d + ' = ' + k + '.'); }
  ] };
  X[404].practical = X[404].practise;

  /* ---------- P4 406 Time ---------- */
  function hm(h, m) { return h + ':' + (m < 10 ? '0' : '') + m; }
  X[406] = { practise: [
    function () { var h = r(1, 12), m = pick([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55]), w = { 5: 'five past', 10: 'ten past', 15: 'quarter past', 20: 'twenty past', 25: 'twenty-five past', 30: 'half past', 35: 'twenty-five to', 40: 'twenty to', 45: 'quarter to', 50: 'ten to', 55: 'five to' }[m], hh = m > 30 ? (h % 12) + 1 : h; return Q('Telling the time', 'What time is <b>' + w + ' ' + hh + '</b> on a digital clock? Write it like ' + hm(7, 5) + '.', hm(h, m), ['"Past" means minutes after the hour; "to" means minutes before the next hour.'], w + ' ' + hh + ' is ' + hm(h, m) + '.'); },
    function () { var h = r(1, 9), m = pick([0, 15, 30, 45]), d = pick([10, 15, 20, 30, 45, 60]), t = h * 60 + m + d, eh = Math.floor(t / 60), em = t % 60; return Q('Time later', 'A film starts at <b>' + hm(h, m) + '</b> and lasts <b>' + d + ' minutes</b>. What time does it finish? Write it like ' + hm(7, 5) + '.', hm(eh, em), ['Count on in 15s or add the minutes to the hour.'], hm(h, m) + ' + ' + d + ' minutes = ' + hm(eh, em) + '.'); },
    function () { var n = r(2, 9); return Q('Hours and minutes', 'How many minutes are in <b>' + n + ' hours</b>?', n * 60, ['There are 60 minutes in 1 hour.'], n + ' × 60 = ' + n * 60 + '.'); },
    function () { var h = r(1, 8), m = pick([0, 15, 30, 45]), a = pick([10, 15, 20, 25, 30, 40, 45]), t = h * 60 + m - a; if (t < 60) return X[406].practise[1](); return Q('Time earlier', 'A bus arrives at <b>' + hm(h, m) + '</b>. It left <b>' + a + ' minutes</b> before that. What time did it leave? Write it like ' + hm(7, 5) + '.', hm(Math.floor(t / 60), t % 60), ['Count back from the arrival time.'], hm(h, m) + ' − ' + a + ' minutes = ' + hm(Math.floor(t / 60), t % 60) + '.'); },
    function () { var items = [['breakfast', 'am'], ['going to bed at night', 'pm'], ['lunch', 'pm'], ['waking up', 'am'], ['dinner', 'pm'], ['school starting', 'am'], ['after-school club', 'pm'], ['brushing teeth in the morning', 'am']], it = pick(items); return MC('am and pm', 'Would <b>' + it[0] + '</b> most likely be in the <b>am</b> or the <b>pm</b>?', it[1], [it[1] === 'am' ? 'pm' : 'am'], ['am is from midnight to noon. pm is from noon to midnight.'], it[1] + ' is right for ' + it[0] + '.'); },
    function () { var h1 = r(1, 8), m1 = pick([0, 15, 30, 45]), d = pick([15, 30, 45, 60, 75, 90]), t = h1 * 60 + m1, e = t + d; return Q('Timetable', 'A train leaves at <b>' + hm(h1, m1) + '</b> and arrives at <b>' + hm(Math.floor(e / 60), e % 60) + '</b>. How many minutes is the journey?', d, ['Count on from the leaving time to the arriving time.'], 'From ' + hm(h1, m1) + ' to ' + hm(Math.floor(e / 60), e % 60) + ' is ' + d + ' minutes.'); }
  ] };
  X[406].practical = X[406].practise;

  /* ---------- P4 407 Measurement ---------- */
  X[407] = { practise: [
    function () { var l = r(2, 12), w = r(2, 9); return Q('Area', 'A rectangle has <b>' + w + ' rows</b> of <b>' + l + '</b> squares. How many squares is its area?', l * w, ['Multiply the rows by the squares in each row.'], w + ' × ' + l + ' = ' + l * w + ' squares.'); },
    function () { var l = r(2, 15), w = r(2, 12); return Q('Perimeter', 'A rectangle is <b>' + l + ' cm</b> long and <b>' + w + ' cm</b> wide. What is its perimeter in cm?', 2 * (l + w), ['Add all four sides.'], l + ' + ' + w + ' + ' + l + ' + ' + w + ' = ' + 2 * (l + w) + ' cm.'); },
    function () { var n = r(2, 20); return Q('Units', 'How many centimetres are in <b>' + n + ' metres</b>?', n * 100, ['1 metre is 100 centimetres.'], n + ' × 100 = ' + n * 100 + ' cm.'); },
    function () { var n = r(2, 12); return Q('Units', 'How many grams are in <b>' + n + ' kg</b>?', n * 1000, ['1 kilogram is 1000 grams.'], n + ' × 1000 = ' + n * 1000 + ' g.'); },
    function () { var n = r(2, 12); return Q('Units', 'How many millilitres are in <b>' + n + ' litres</b>?', n * 1000, ['1 litre is 1000 millilitres.'], n + ' × 1000 = ' + n * 1000 + ' ml.'); },
    function () { var a = r(2, 9) * 10, b = r(2, 9) * 10, c = r(2, 9) * 10; return Q('Perimeter', 'A triangle has sides of <b>' + a + ' cm</b>, <b>' + b + ' cm</b> and <b>' + c + ' cm</b>. What is its perimeter in cm?', a + b + c, ['Add the three sides.'], a + ' + ' + b + ' + ' + c + ' = ' + (a + b + c) + ' cm.'); },
    function () { var s = r(2, 12); return Q('Perimeter', 'A square has sides of <b>' + s + ' cm</b>. What is its perimeter in cm?', 4 * s, ['A square has four equal sides.'], '4 × ' + s + ' = ' + 4 * s + ' cm.'); },
    function () { var a = r(2, 9), b = r(2, 9); return Q('Length', 'A ribbon is <b>' + a + ' m</b> long. Another is <b>' + b + ' m</b> long. How many metres of ribbon is that altogether?', a + b, ['Add the two lengths.'], a + ' + ' + b + ' = ' + (a + b) + ' m.'); }
  ] };
  X[407].practical = X[407].practise;

  /* ---------- P4 408 Shape, position and movement ---------- */
  var SH = [['triangle', 3], ['square', 4], ['rectangle', 4], ['pentagon', 5], ['hexagon', 6], ['octagon', 8]];
  X[408] = { practise: [
    function () { var s = pick(SH); return Q('Sides', 'How many sides does a <b>' + s[0] + '</b> have?', s[1], ['Picture the shape and count the straight sides.'], 'A ' + s[0] + ' has ' + s[1] + ' sides.'); },
    function () { var a = r(1, 9), b = r(1, 9), m = r(1, 5), n = r(1, 5); return Q('Grid references', 'Start at <b>(' + a + ', ' + b + ')</b>. Move <b>' + m + '</b> across to the right. What is the first number of the new position?', a + m, ['The first number says how far across.'], a + ' + ' + m + ' = ' + (a + m) + '.'); },
    function () { var a = r(1, 9), b = r(1, 9), n = r(1, 5); return Q('Grid references', 'Start at <b>(' + a + ', ' + b + ')</b>. Move <b>' + n + '</b> up. What is the second number of the new position?', b + n, ['The second number says how far up.'], b + ' + ' + n + ' = ' + (b + n) + '.'); },
    function () { var D = ['north', 'east', 'south', 'west'], i = r(0, 3), k = r(1, 3), cw = Math.random() < 0.5, to = D[(i + (cw ? k : 4 - k)) % 4], nm = ['a quarter turn', 'a half turn', 'three quarter turns']; return MC('Turns', 'You face <b>' + D[i] + '</b>. You make <b>' + nm[k - 1] + '</b> <b>' + (cw ? 'clockwise' : 'anticlockwise') + '</b>. Which way do you face now?', to, D.filter(function (x) { return x !== to; }), ['Clockwise goes north, east, south, west.', 'Anticlockwise goes the other way.'], 'You face ' + to + '.'); },
    function () { var k = r(1, 4); return Q('Right angles', 'A quarter turn is a right angle. How many right angles are in <b>' + k + '</b> quarter turns?', k, ['One quarter turn is one right angle.'], k + ' quarter turns make ' + k + ' right angles.'); },
    function () { var s = pick([['square', 4], ['rectangle', 4], ['right-angled triangle', 1], ['triangle with a right angle in one corner', 1]]); return Q('Right angles', 'How many right angles does a <b>' + s[0] + '</b> have?', s[1], ['A right angle is a square corner.'], 'A ' + s[0] + ' has ' + s[1] + ' right angle' + (s[1] === 1 ? '' : 's') + '.'); },
    function () { var a = r(2, 9), b = r(2, 9); return Q('Position', 'A treasure is <b>' + a + '</b> squares east and <b>' + b + '</b> squares north of the start. How many squares do you move altogether?', a + b, ['Add the two moves.'], a + ' + ' + b + ' = ' + (a + b) + ' squares.'); }
  ] };
  X[408].practical = X[408].practise;

  /* ---------- P4 409 Data and chance ---------- */
  X[409] = { practise: [
    function () { var g = r(1, 6), o = r(0, 4); return Q('Tally marks', 'A tally chart shows <b>' + g + '</b> group' + (g === 1 ? '' : 's') + ' of five and <b>' + o + '</b> more single tallies. How many tallies is that?', g * 5 + o, ['Each group of five is 5 tallies.', 'Add the single tallies.'], g + ' × 5 = ' + g * 5 + ', and ' + g * 5 + ' + ' + o + ' = ' + (g * 5 + o) + '.'); },
    function () { var a = r(3, 20), b = r(1, a - 1), c = pick(['cats', 'dogs', 'books', 'bikes']); return Q('Bar chart', 'In a bar chart, the bar for red is <b>' + a + '</b> and the bar for blue is <b>' + b + '</b>. How many more is red than blue?', a - b, ['Take the smaller number away from the bigger.'], a + ' − ' + b + ' = ' + (a - b) + '.'); },
    function () { var a = r(2, 15), b = r(2, 15), c = r(2, 15); return Q('Tables', 'A table shows <b>' + a + '</b> votes for apples, <b>' + b + '</b> for pears and <b>' + c + '</b> for plums. How many votes altogether?', a + b + c, ['Add all 3 numbers.'], a + ' + ' + b + ' + ' + c + ' = ' + (a + b + c) + '.'); },
    function () { var S2 = [['The sun will rise tomorrow', 'certain'], ['A cat will talk to you today', 'impossible'], ['You will roll a 6 on a dice in one go', 'unlikely'], ['It will rain at some point in a Scottish week', 'likely'], ['A coin lands on heads or tails', 'certain'], ['You will find a unicorn', 'impossible'], ['You will pick a blue ball from a bag of 9 blue and 1 red', 'likely'], ['You will pick the red ball from a bag of 9 blue and 1 red', 'unlikely']], p = pick(S2); return MC('Chance', 'Is this <b>impossible, unlikely, likely or certain</b>? ' + p[0] + '.', p[1], ['impossible', 'unlikely', 'likely', 'certain'].filter(function (x) { return x !== p[1]; }), ['Think about how often it would happen.'], p[1] + '.'); },
    function () { var n = r(4, 12), k = r(1, n - 1), c = pick(['red', 'blue', 'green']); return Q('Chance', 'A bag has <b>' + n + '</b> counters. <b>' + k + '</b> are ' + c + ' and the rest are yellow. How many are yellow?', n - k, ['Take the ' + c + ' counters away from the total.'], n + ' − ' + k + ' = ' + (n - k) + '.'); },
    function () { var a = r(5, 30), b = r(5, 30); return Q('Bar chart', 'On a bar chart, Monday has <b>' + a + '</b> and Tuesday has <b>' + b + '</b> visitors. How many visitors in the two days?', a + b, ['Add the two bars.'], a + ' + ' + b + ' = ' + (a + b) + '.'); }
  ] };
  X[409].practical = X[409].practise;

  /* ---------- spatial reasoning (P5 513, P6 13): boxes, cubes and directions ---------- */
  var spatial = [
    function () { var l = r(2, 6), w = r(2, 6), h = r(2, 5); return Q('Cubes in a box', 'A box is <b>' + l + '</b> cubes long, <b>' + w + '</b> wide and <b>' + h + '</b> high, filled with 1 cm cubes. How many cubes fill it?', l * w * h, ['Find one layer first: ' + l + ' × ' + w + '.', 'Then multiply by the number of layers.'], l + ' × ' + w + ' × ' + h + ' = ' + l * w * h + ' cubes.'); },
    function () { var D = ['north', 'east', 'south', 'west'], i = r(0, 3), k = r(1, 3), cw = Math.random() < 0.5, to = D[(i + (cw ? k : 4 - k)) % 4], nm = ['a quarter turn', 'a half turn', 'three quarter turns']; return MC('Directions', 'You face <b>' + D[i] + '</b> and make <b>' + nm[k - 1] + '</b> <b>' + (cw ? 'clockwise' : 'anticlockwise') + '</b>. Which way do you face now?', to, D.filter(function (x) { return x !== to; }), ['Clockwise: north, east, south, west.'], 'You face ' + to + '.'); },
    function () { var a = r(0, 9), b = r(0, 9), m = r(1, 6), n = r(1, 6); return Q('Grid moves', 'A dot is at <b>(' + a + ', ' + b + ')</b>. It moves <b>' + m + '</b> right and <b>' + n + '</b> up. Where is it now? Write it like (3, 4).', '(' + (a + m) + ', ' + (b + n) + ')', ['Right changes the first number. Up changes the second.'], '(' + (a + m) + ', ' + (b + n) + ').'); },
    function () { var l = r(2, 6), w = r(2, 6), h = r(2, 5); return Q('Faces of a box', 'A cuboid is <b>' + l + ' cm</b> by <b>' + w + ' cm</b> by <b>' + h + ' cm</b>. What is the area of its biggest face in cm²?', Math.max(l * w, l * h, w * h), ['Find the three different face areas and pick the biggest.'], 'The faces are ' + l * w + ', ' + l * h + ' and ' + w * h + ' cm². The biggest is ' + Math.max(l * w, l * h, w * h) + ' cm².'); },
    function () { var a = r(2, 9), b = r(2, 9); return Q('Map distance', 'On a map a house is <b>' + a + '</b> squares east and <b>' + b + '</b> squares north of a school. If each square is 100 m, how many metres in a straight route east then north?', (a + b) * 100, ['Add the squares, then multiply by 100.'], '(' + a + ' + ' + b + ') × 100 = ' + (a + b) * 100 + ' m.'); },
    function () { var n = r(2, 7); return Q('Cube faces', 'A tower is made from <b>' + n + '</b> cubes stacked in one column. How many square faces can you see around the four sides of the tower?', 4 * n, ['Each cube shows one face on each of the four sides.'], n + ' × 4 = ' + 4 * n + ' faces.'); }
  ];
  X[513] = { practise: spatial }; X[13] = { practise: spatial };

  /* ---------- S3 850 The circle ---------- */
  var PI = 3.14;
  X[850] = { practise: [
    function () { var rr = r(2, 25); return Q('Circumference', 'A circle has radius <b>' + rr + ' cm</b>. Use π = 3.14. What is its circumference in cm?', num(2 * PI * rr), ['Circumference = 2 × π × r.'], '2 × 3.14 × ' + rr + ' = ' + num(2 * PI * rr) + ' cm.'); },
    function () { var d = r(2, 30); return Q('Circumference', 'A circle has diameter <b>' + d + ' m</b>. Use π = 3.14. What is its circumference in m?', num(PI * d), ['Circumference = π × diameter.'], '3.14 × ' + d + ' = ' + num(PI * d) + ' m.'); },
    function () { var rr = r(2, 12) * 5 / 5, v = 4 * rr * rr; return Q('Area', 'A circle has radius <b>' + rr + ' cm</b>. Use π = 3.14. What is its area in cm²?', num(PI * rr * rr), ['Area = π × r².', 'Square the radius first.'], '3.14 × ' + rr + ' × ' + rr + ' = ' + num(PI * rr * rr) + ' cm².'); },
    function () { var d = r(1, 15) * 2; return Q('Radius from diameter', 'A circle has diameter <b>' + d + ' cm</b>. Use π = 3.14. What is its area in cm²?', num(PI * (d / 2) * (d / 2)), ['Halve the diameter to get the radius.'], 'r = ' + d / 2 + ', so area = 3.14 × ' + d / 2 + ' × ' + d / 2 + ' = ' + num(PI * (d / 2) * (d / 2)) + ' cm².'); },
    function () { var rr = r(2, 20); return Q('Semicircle', 'A semicircle has radius <b>' + rr + ' cm</b>. Use π = 3.14. What is its area in cm²?', num(PI * rr * rr / 2), ['Find the circle area, then halve it.'], '3.14 × ' + rr + ' × ' + rr + ' ÷ 2 = ' + num(PI * rr * rr / 2) + ' cm².'); },
    function () { var rr = r(2, 20), k = pick([2, 4]); return Q((k === 2 ? 'Half' : 'Quarter') + ' circle', 'A ' + (k === 2 ? 'half' : 'quarter') + ' circle of radius <b>' + rr + ' cm</b> is cut out. Use π = 3.14. What is the area of the piece in cm²?', num(PI * rr * rr / k), ['Find the whole circle, then divide by ' + k + '.'], '3.14 × ' + rr + ' × ' + rr + ' ÷ ' + k + ' = ' + num(PI * rr * rr / k) + ' cm².'); },
    function () { var rr = r(2, 25), n = pick([2, 3, 5, 10]); return Q('Wheel turns', 'A wheel has radius <b>' + rr + ' cm</b>. Use π = 3.14. How far in cm does it roll in <b>' + n + '</b> full turns?', num(2 * PI * rr * n), ['One turn rolls one circumference.', 'Multiply by the number of turns.'], '2 × 3.14 × ' + rr + ' × ' + n + ' = ' + num(2 * PI * rr * n) + ' cm.'); }
  ] };

  /* ---------- P7 710 Factors, multiples and primes: real-life ---------- */
  X[710] = { practical: [
    function () { var a = pick([4, 6, 8, 9, 10, 12, 15]), b = pick([5, 6, 8, 10, 12, 14, 18, 20]); if (a === b) b += 2; var l = a * b / H.gcd(a, b); return Q('Common multiples', 'Two buses leave the station together. One goes every <b>' + a + '</b> minutes and the other every <b>' + b + '</b> minutes. After how many minutes do they next leave together?', l, ['This is the lowest common multiple of ' + a + ' and ' + b + '.'], 'LCM(' + a + ', ' + b + ') = ' + l + ' minutes.'); },
    function () { var a = pick([24, 36, 48, 60, 72, 84, 90, 96, 120]), b = pick([18, 30, 40, 42, 54, 56, 66, 80, 108]), g = H.gcd(a, b); if (a === b) b += 6; g = H.gcd(a, b); return Q('Common factors', 'A teacher has <b>' + a + '</b> pens and <b>' + b + '</b> pencils to put into identical packs with nothing left over. What is the greatest number of packs she can make?', g, ['This is the highest common factor of ' + a + ' and ' + b + '.'], 'HCF(' + a + ', ' + b + ') = ' + g + ' packs.'); },
    function () { var n = pick([24, 30, 36, 40, 48, 60, 72]), fs = []; for (var i = 1; i <= n; i++) if (n % i === 0) fs.push(i); return Q('Factors', n + ' children line up in equal rows. How many different row lengths (including 1 row and 1 long line) can they make?', fs.length, ['List all the factors of ' + n + '.'], 'The factors of ' + n + ' are ' + fs.join(', ') + ': ' + fs.length + ' factors.'); },
    function () { var p = pick([11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]); return MC('Prime numbers', p + ' counters cannot be arranged in a rectangle with more than one row except one long line. Is ' + p + ' prime or composite?', 'prime', ['composite'], ['A prime number has exactly 2 factors.'], p + ' has only 1 and ' + p + ' as factors, so it is prime.'); },
    function () { var n = pick([4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144]); return Q('Square numbers', 'A square tile pattern has <b>' + n + '</b> tiles. How many tiles are along one side?', Math.sqrt(n), ['The side is the square root of the number of tiles.'], '√' + n + ' = ' + Math.sqrt(n) + '.'); },
    function () { var a = r(2, 9), b = r(2, 9), c = a * b; return Q('Multiples', 'Chocolates come in boxes of <b>' + a + '</b>. How many boxes do you need to get exactly <b>' + c + '</b> chocolates?', b, ['Divide ' + c + ' by ' + a + '.'], c + ' ÷ ' + a + ' = ' + b + ' boxes.'); }
  ] };

  /* the practice banks of these topics also use the same makers as their real-life problems when they run short */
})();
