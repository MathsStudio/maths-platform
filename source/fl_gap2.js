/* fl_gap2.js: P5 and P6 lessons that were missing, in the same Let's learn slide format.
   P5: elapsed time (505), compass directions (513).
   P6: speed, distance and time (5), simplifying and equivalent ratios, ratio in recipes (11), compass directions, scale on plans and maps (13). */
(function () {
  'use strict';
  var FL = window.FL, BT = window.BT, S = window.Studio; if (!FL || !FL.LI || !BT || !S) return;
  var B = FL.big, C = FL.cards, LI = FL.LI, r = FL.r, pick = FL.pick, Q = FL.Q, MC = FL.MC, H = S.h;
  var INK = '#2b2340';
  var more = window.__addQ = window.__addQ || {};
  function addQ(n, f) { (more[n] = more[n] || []).push(f); }
  function lab(n, id, label, lead, fn) { BT.addLab(n, id, label, lead, FL.genAct(fn, 'owl')); }
  function hm(m) { var h = Math.floor(m / 60), mm = m % 60; return h + ':' + (mm < 10 ? '0' : '') + mm; }
  function tbl(rows) { return '<table style="margin:0 auto;border-collapse:collapse;font-weight:800;color:' + INK + '">' + rows.map(function (x, i) { return '<tr>' + x.map(function (c) { return '<td style="border:2px solid ' + INK + ';padding:6px 12px;text-align:center;' + (i === 0 ? 'background:#ffd166' : 'background:#fff') + '">' + c + '</td>'; }).join('') + '</tr>'; }).join('') + '</table>'; }
  function compass(hl) { var P = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'], s = '<circle cx="80" cy="80" r="44" fill="#fff" stroke="' + INK + '" stroke-width="3"/>';
    P.forEach(function (p, i) { var a = i * Math.PI / 4 - Math.PI / 2, x = 80 + 62 * Math.cos(a), y = 80 + 62 * Math.sin(a); s += '<line x1="80" y1="80" x2="' + (80 + 44 * Math.cos(a)).toFixed(1) + '" y2="' + (80 + 44 * Math.sin(a)).toFixed(1) + '" stroke="' + INK + '" stroke-width="2"/><text x="' + x.toFixed(1) + '" y="' + (y + 5).toFixed(1) + '" text-anchor="middle" font-size="14" font-weight="800" fill="' + (p === hl ? '#e63946' : INK) + '">' + p + '</text>'; });
    return '<svg viewBox="0 0 160 160" role="img" aria-label="A compass with eight points: N, NE, E, SE, S, SW, W, NW" style="width:190px;max-width:100%;height:auto">' + s + '</svg>'; }

  /* ---------- P6 topic 5: speed, distance and time ---------- */
  function qSpeed() { var sp = pick([20, 30, 40, 45, 50, 60, 70, 80, 90]), t = r(2, 6), d = sp * t, k = r(0, 2);
    if (k === 0) return Q('Speed', 'A car travels <b>' + d + ' km</b> in <b>' + t + ' hours</b>. What is its speed in km/h?', sp, ['Speed = distance ÷ time.'], d + ' ÷ ' + t + ' = ' + sp + ' km/h.');
    if (k === 1) return Q('Distance', 'A bus travels at <b>' + sp + ' km/h</b> for <b>' + t + ' hours</b>. How far does it go in km?', d, ['Distance = speed × time.'], sp + ' × ' + t + ' = ' + d + ' km.');
    return Q('Time', 'A train travels <b>' + d + ' km</b> at <b>' + sp + ' km/h</b>. How many hours does the journey take?', t, ['Time = distance ÷ speed.'], d + ' ÷ ' + sp + ' = ' + t + ' hours.'); }
  LI(5, 'learnx1', ['Speed, distance and time', 'How are speed, distance and time linked?',
    'Speed tells us how far something goes in one hour. Speed = distance ÷ time. Distance = speed × time. Time = distance ÷ speed.', tbl([['distance', 'time', 'speed'], ['120 km', '2 hours', '60 km/h']]),
    [['speed', 'how far in one hour', '🚗'], ['distance', 'how far it goes', '📏'], ['time', 'how long it takes', '⏱️'], ['km/h', 'kilometres per hour', '🛣️']],
    [['A car goes 120 km in 2 hours.', tbl([['distance', 'time'], ['120 km', '2 hours']])],
      ['In 1 hour it goes half as far: 120 ÷ 2 = 60 km.', B('120 ÷ 2 = 60')],
      ['The speed is 60 kilometres per hour, written 60 km/h.', B('60 km/h')]],
    [['A cyclist rides 45 km in 3 hours. What is the speed?', ['Speed = distance ÷ time.', '45 ÷ 3 = 15.'], 'The speed is 15 km/h.', B('45 ÷ 3 = 15 km/h')],
      ['A bus travels at 50 km/h for 4 hours. How far does it go?', ['Distance = speed × time.', '50 × 4 = 200.'], 'It goes 200 km.', B('50 × 4 = 200 km')],
      ['A train goes 240 km at 80 km/h. How long does it take?', ['Time = distance ÷ speed.', '240 ÷ 80 = 3.'], 'It takes 3 hours.', B('240 ÷ 80 = 3 h')]],
    ['Check the units. Distance in km and time in hours give speed in km/h.', C(['km ÷ hours = km/h ✓', 'km ÷ minutes = km/h ✗'])],
    ['A lorry goes <b>180 km</b> in <b>3 hours</b>. What is its speed?', '', ['60 km/h', '540 km/h', '6 km/h'], '60 km/h', '180 ÷ 3 = 60.', 'Speed = distance ÷ time.'],
    ['Speed = distance ÷ time. Use the triangle: cover the one you want.', tbl([['D', 'S', 'T'], ['distance', 'speed', 'time']])]]);
  addQ(5, qSpeed); lab(5, 'fl_sp', 'Speed, distance, time', 'Find the missing speed, distance or time.', qSpeed);

  /* ---------- P6 topic 11: simplifying ratios, ratio in recipes ---------- */
  function gcd(a, b) { return b ? gcd(b, a % b) : a; }
  function qSimp() { var a, b; do { a = r(1, 7); b = r(1, 9); } while (a === b || gcd(a, b) !== 1);
    var f = r(2, 6), A = a * f, Bb = b * f, t = r(0, 1);
    if (t === 0) return Q('Simplifying ratios', 'Write the ratio <b>' + A + ' : ' + Bb + '</b> in its simplest form. Write it like 2:3.', a + ':' + b, ['Divide both numbers by the same number.', 'Both ' + A + ' and ' + Bb + ' divide by ' + f + '.'], A + ' ÷ ' + f + ' = ' + a + ' and ' + Bb + ' ÷ ' + f + ' = ' + b + ', so the ratio is ' + a + ':' + b + '.');
    return Q('Equivalent ratios', a + ' : ' + b + ' = ' + A + ' : ?  What is the missing number?', Bb, ['Find what ' + a + ' was multiplied by to make ' + A + '.', 'Multiply ' + b + ' by the same number.'], a + ' × ' + f + ' = ' + A + ', so ' + b + ' × ' + f + ' = ' + Bb + '.'); }
  LI(11, 'learnx1', ['Simplifying ratios', 'How do I write a ratio in its simplest form?',
    'To simplify a ratio, divide both numbers by the same number, as many times as you can. 6 : 9 = 2 : 3.', B('6 : 9 = 2 : 3'),
    [['ratio', 'compares two amounts', '⚖️'], ['simplest form', 'the smallest whole numbers', '🔢'], ['equivalent', 'the same ratio in different numbers', '🟰'], ['common factor', 'a number that divides both', '➗']],
    [['In a bag there are 6 red and 9 blue counters. The ratio red to blue is 6 : 9.', B('6 : 9')],
      ['Both 6 and 9 divide by 3. 6 ÷ 3 = 2 and 9 ÷ 3 = 3.', B('6 : 9 → 2 : 3')],
      ['2 : 3 cannot be made smaller. It is in simplest form.', B('2 : 3')]],
    [['Simplify 12 : 20.', ['The biggest number that divides both is 4.', '12 ÷ 4 = 3 and 20 ÷ 4 = 5.'], '12 : 20 = 3 : 5', B('12 : 20 = 3 : 5')],
      ['Simplify 15 : 25.', ['Both divide by 5.', '15 ÷ 5 = 3 and 25 ÷ 5 = 5.'], '15 : 25 = 3 : 5', B('15 : 25 = 3 : 5')],
      ['2 : 3 = 8 : ?', ['2 × 4 = 8.', 'Multiply 3 by 4 as well: 3 × 4 = 12.'], '2 : 3 = 8 : 12', B('2 : 3 = 8 : 12')]],
    ['Divide both parts by the same number. Dividing only one part changes the ratio.', C(['6 : 9 → 2 : 3 ✓', '6 : 9 → 2 : 9 ✗'])],
    ['Simplify <b>10 : 25</b>.', '', ['2 : 5', '5 : 2', '1 : 3'], '2 : 5', 'Both divide by 5: 10 ÷ 5 = 2 and 25 ÷ 5 = 5.', 'Find a number that divides both.'],
    ['Divide both parts by the same number to simplify. Multiply both to make an equivalent ratio.', C(['÷ both', '× both'])]]);
  function qRec() { var per = pick([25, 40, 50, 60, 75, 100]), n1 = pick([2, 4, 5]), n2 = pick([6, 8, 10, 12, 15]), item = pick(['flour', 'sugar', 'rice', 'butter']), k = r(0, 1);
    if (k === 0) { var base = per * n1; return Q('Recipes', 'A recipe for <b>' + n1 + '</b> people uses <b>' + base + ' g</b> of ' + item + '. How many grams are needed for <b>' + n2 + '</b> people?', per * n2, ['Find the amount for 1 person: ' + base + ' ÷ ' + n1 + ' = ' + per + ' g.', 'Multiply by ' + n2 + '.'], base + ' ÷ ' + n1 + ' = ' + per + ' g for 1 person. ' + per + ' × ' + n2 + ' = ' + per * n2 + ' g.'); }
    return Q('Recipes', 'To make <b>' + n1 + '</b> pancakes you need <b>' + 2 * n1 + '</b> eggs. How many eggs for <b>' + n2 + '</b> pancakes?', 2 * n2, ['Find the eggs for 1 pancake.', 'Multiply by ' + n2 + '.'], '2 eggs for each pancake, so ' + n2 + ' × 2 = ' + 2 * n2 + ' eggs.'); }
  LI(11, 'learnx2', ['Ratio in recipes', 'How do I scale a recipe up or down?',
    'To change a recipe, first find the amount for one person, then multiply. This keeps the ratio the same.', tbl([['people', 'flour'], ['4', '200 g'], ['8', '400 g']]),
    [['scale', 'make bigger or smaller by the same ratio', '📈'], ['unit amount', 'the amount for one', '1️⃣'], ['ingredient', 'something that goes in a recipe', '🥣'], ['proportion', 'keeping the same ratio', '⚖️']],
    [['A recipe for 4 people uses 200 g of flour.', tbl([['people', 'flour'], ['4', '200 g']])],
      ['For 8 people, double everything: 200 × 2 = 400 g.', tbl([['people', 'flour'], ['4', '200 g'], ['8', '400 g']])],
      ['For 1 person: 200 ÷ 4 = 50 g. For 6 people: 50 × 6 = 300 g.', tbl([['people', 'flour'], ['1', '50 g'], ['6', '300 g']])]],
    [['A recipe for 3 people uses 150 g of rice. How much for 5 people?', ['For 1 person: 150 ÷ 3 = 50 g.', 'For 5 people: 50 × 5 = 250 g.'], '250 g of rice', tbl([['people', 'rice'], ['3', '150 g'], ['1', '50 g'], ['5', '250 g']])],
      ['8 muffins need 200 g of sugar. How much for 12 muffins?', ['For 1 muffin: 200 ÷ 8 = 25 g.', 'For 12 muffins: 25 × 12 = 300 g.'], '300 g of sugar', tbl([['muffins', 'sugar'], ['8', '200 g'], ['1', '25 g'], ['12', '300 g']])],
      ['A recipe for 6 uses 3 eggs. How many eggs for 4?', ['For 1 person: 3 ÷ 6 = half an egg.', 'For 4: 4 × half = 2 eggs.'], '2 eggs', tbl([['people', 'eggs'], ['6', '3'], ['4', '2']])]],
    ['Multiply every ingredient by the same number. If you only change the flour, the recipe goes wrong.', C(['all × 2 ✓', 'only flour × 2 ✗'])],
    ['A recipe for <b>2</b> people uses <b>100 g</b> of pasta. How much for <b>5</b> people?', '', ['250 g', '200 g', '500 g'], '250 g', '100 ÷ 2 = 50 g for 1 person, and 50 × 5 = 250 g.', 'Find the amount for one person first.'],
    ['Find the amount for one, then multiply to scale a recipe.', C(['÷ to find one', '× to scale'])]]);
  addQ(11, qSimp); addQ(11, qRec); lab(11, 'fl_s1', 'Simplify the ratio', 'Simplify or complete each ratio.', qSimp); lab(11, 'fl_s2', 'Scale the recipe', 'How much do you need?', qRec);

  /* ---------- compass directions (P6 topic 13, P5 topic 513) ---------- */
  var DIR = ['north', 'north-east', 'east', 'south-east', 'south', 'south-west', 'west', 'north-west'];
  function qCompass() { var i = r(0, 7), k = pick([1, 2, 3, 4, 5, 6, 7]), cw = Math.random() < 0.5, j = (i + (cw ? k : 8 - k)) % 8, deg = k * 45; return MC('Compass directions', 'You face <b>' + DIR[i] + '</b>. You turn <b>' + deg + '°</b> <b>' + (cw ? 'clockwise' : 'anticlockwise') + '</b>. Which way do you face now?', DIR[j], DIR.filter(function (x) { return x !== DIR[j]; }).slice(0, 3), ['Each step on the compass is 45°.', 'Clockwise goes N, NE, E, SE, S, SW, W, NW.'], deg + ' ÷ 45 = ' + k + ' steps ' + (cw ? 'clockwise' : 'anticlockwise') + ' from ' + DIR[i] + ' gives ' + DIR[j] + '.'); }
  function compassLesson(n, id) { LI(n, id, ['Compass directions', 'How do I use the eight points of the compass?',
    'A compass has eight points: N, NE, E, SE, S, SW, W and NW. Each step between neighbouring points is a turn of 45°, and a quarter turn is 90°.', compass(''),
    [['north (N)', 'the direction to the top of a map', '⬆️'], ['north-east (NE)', 'half way between N and E', '↗️'], ['clockwise', 'turning the way a clock hand goes', '🔁'], ['45°', 'one step between compass points', '📐']],
    [['The eight points go around the compass: N, NE, E, SE, S, SW, W, NW.', compass('')],
      ['NE is between north and east, so it is 45° from each.', compass('NE')],
      ['A quarter turn clockwise is 90°, which is two steps. From N, a quarter turn clockwise reaches E.', compass('E')]],
    [['You face north and turn 90° clockwise. Which way?', ['90 ÷ 45 = 2 steps.', 'N → NE → E.'], 'You face east.', compass('E')],
      ['You face south-west and turn 180°. Which way?', ['180 ÷ 45 = 4 steps.', 'SW → W → NW → N → NE.'], 'You face north-east.', compass('NE')],
      ['You face east and turn 45° anticlockwise. Which way?', ['One step back the other way.', 'E → NE.'], 'You face north-east.', compass('NE')]],
    ['Anticlockwise goes the other way round. Count the steps carefully.', C(['clockwise: N → NE → E', 'anticlockwise: N → NW → W'])],
    ['You face <b>east</b> and turn <b>90°</b> clockwise. Which way do you face?', compass('E'), ['north', 'south', 'west'], 'south', 'East to south-east to south is two steps clockwise.', 'Count 45° steps.'],
    ['Eight points, 45° between each. Count steps clockwise or anticlockwise.', C(['45° a step', '90° two steps'])]]); }
  compassLesson(13, 'learnx1'); compassLesson(513, 'learnx1');
  addQ(13, qCompass); addQ(513, qCompass); lab(13, 'fl_c1', 'Which way now?', 'Turn and find the new direction.', qCompass); lab(513, 'fl_c1', 'Which way now?', 'Turn and find the new direction.', qCompass);

  /* ---------- P6 topic 13: scale on plans and maps ---------- */
  function qScale() { var U = [['cm', 'km', [1, 2, 5, 10]], ['cm', 'm', [10, 20, 50, 100]]], u = pick(U), s = pick(u[2]), d = r(2, 9), k = r(0, 1);
    if (k === 0) return Q('Scale', 'On a map, <b>1 cm</b> stands for <b>' + s + ' ' + u[1] + '</b>. Two towns are <b>' + d + ' cm</b> apart on the map. How far apart are they really, in ' + u[1] + '?', s * d, ['Multiply the map distance by the scale.'], d + ' × ' + s + ' = ' + s * d + ' ' + u[1] + '.');
    return Q('Scale', 'On a map, <b>1 cm</b> stands for <b>' + s + ' ' + u[1] + '</b>. A road is really <b>' + s * d + ' ' + u[1] + '</b> long. How long is it on the map, in cm?', d, ['Divide the real distance by the scale.'], s * d + ' ÷ ' + s + ' = ' + d + ' cm.'); }
  LI(13, 'learnx2', ['Scale on plans and maps', 'How does a scale tell me real distances?',
    'A scale shows how a length on a map or plan matches the real length. If 1 cm stands for 2 km, then 5 cm stands for 10 km.', tbl([['map', 'real'], ['1 cm', '2 km'], ['5 cm', '10 km']]),
    [['scale', 'how map lengths match real lengths', '🗺️'], ['map distance', 'the length measured on the map', '📏'], ['real distance', 'the length in real life', '🌍'], ['1 cm : 2 km', '1 cm on the map is 2 km in real life', '🔎']],
    [['A map has the scale 1 cm : 2 km.', tbl([['map', 'real'], ['1 cm', '2 km']])],
      ['Every 1 cm is 2 km. So 5 cm is 5 × 2 = 10 km.', tbl([['map', 'real'], ['1 cm', '2 km'], ['5 cm', '10 km']])],
      ['To go back, divide: 14 km ÷ 2 = 7 cm on the map.', B('14 ÷ 2 = 7 cm')]],
    [['Scale 1 cm : 5 km. A lake is 4 cm long on the map. How long is it really?', ['Multiply by the scale.', '4 × 5 = 20.'], 'The lake is 20 km long.', B('4 × 5 = 20 km')],
      ['Scale 1 cm : 10 m. A path is 70 m long. How long on the plan?', ['Divide by the scale.', '70 ÷ 10 = 7.'], 'It is 7 cm long on the plan.', B('70 ÷ 10 = 7 cm')],
      ['Scale 1 cm : 3 km. Two villages are 9 cm apart. How far apart are they?', ['9 × 3 = 27.'], 'They are 27 km apart.', B('9 × 3 = 27 km')]],
    ['Multiply to go from map to real. Divide to go from real to map.', C(['map → real: ×', 'real → map: ÷'])],
    ['Scale <b>1 cm : 4 km</b>. A bridge is <b>6 cm</b> on the map. How long is it really?', '', ['24 km', '10 km', '1.5 km'], '24 km', '6 × 4 = 24 km.', 'Multiply by the scale.'],
    ['The scale links map lengths to real lengths.', C(['map × scale = real', 'real ÷ scale = map'])]]);
  addQ(13, qScale); lab(13, 'fl_c2', 'Map scale', 'Use the scale to find real distances.', qScale);

  /* ---------- P5 topic 505: elapsed time ---------- */
  function qElapsed() { var st = r(6, 15) * 60 + pick([0, 15, 30, 45]), d = pick([20, 25, 30, 40, 45, 50, 75, 80, 90, 100, 105, 120, 135]), e = st + d, k = r(0, 1);
    if (k === 0) return Q('Elapsed time', 'A film starts at <b>' + hm(st) + '</b> and lasts <b>' + d + ' minutes</b>. What time does it end? Write it like 3:45.', hm(e), ['Add the minutes to the start time.', 'Go to the next hour first, then add what is left.'], hm(st) + ' + ' + d + ' minutes = ' + hm(e) + '.');
    return Q('Elapsed time', 'A class starts at <b>' + hm(st) + '</b> and ends at <b>' + hm(e) + '</b>. How many minutes does it last?', d, ['Count on from the start time to the end time.', 'Bridge through the hour.'], 'From ' + hm(st) + ' to ' + hm(e) + ' is ' + d + ' minutes.'); }
  LI(505, 'learnx1', ['How long does it take?', 'How do I work out how much time has passed?',
    'Elapsed time is how long something takes. Count on from the start time, stopping at the next hour to make it easier.', tbl([['start', 'end', 'time passed'], ['9:15', '10:45', '1 h 30 min']]),
    [['elapsed time', 'how much time has passed', '⏳'], ['bridge', 'count on to the next hour first', '🌉'], ['duration', 'how long something lasts', '⏱️'], ['minutes', '60 in an hour', '🕒']],
    [['A film starts at 9:15 and ends at 10:45.', tbl([['start', 'end'], ['9:15', '10:45']])],
      ['9:15 to 10:00 is 45 minutes. 10:00 to 10:45 is 45 more minutes.', B('45 + 45 = 90 min')],
      ['90 minutes is 1 hour 30 minutes.', B('1 h 30 min')]],
    [['A train leaves at 2:40 and arrives at 4:10. How long is the journey?', ['2:40 to 3:00 is 20 minutes.', '3:00 to 4:00 is 60 minutes.', '4:00 to 4:10 is 10 minutes.', '20 + 60 + 10 = 90.'], '90 minutes, or 1 h 30 min', B('1 h 30 min')],
      ['A lesson starts at 1:50 and lasts 55 minutes. When does it end?', ['1:50 + 10 minutes = 2:00.', '55 − 10 = 45 minutes left.', '2:00 + 45 minutes = 2:45.'], 'It ends at 2:45.', B('2:45')],
      ['A match starts at 3:25 and ends at 5:05. How long is it?', ['3:25 to 4:00 is 35 minutes.', '4:00 to 5:00 is 60 minutes.', '5:00 to 5:05 is 5 minutes.', '35 + 60 + 5 = 100.'], '100 minutes, or 1 h 40 min', B('1 h 40 min')]],
    ['Do not subtract the times like ordinary numbers. 10:15 − 9:45 is 30 minutes, not 0:70.', C(['bridge the hour ✓', 'subtract like numbers ✗'])],
    ['A film starts at <b>7:20</b> and lasts <b>80 minutes</b>. When does it end?', '', ['8:40', '8:20', '7:100'], '8:40', '7:20 + 40 minutes = 8:00, then 40 more minutes is 8:40.', 'Bridge through 8:00.'],
    ['Count on to the next hour, then on again. Minutes make 60 in an hour.', C(['count on', 'bridge the hour'])]]);
  addQ(505, qElapsed); lab(505, 'fl_t1', 'How long?', 'Work out the end time or how long.', qElapsed);
  qSpeed.life = qRec.life = qScale.life = qElapsed.life = true;
})();
