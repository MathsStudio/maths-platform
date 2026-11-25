/* fl_m4d.js: P4 Measurement (407), Shape, position and movement (408), Data and chance (409) */
(function () {
  'use strict';
  var FL = window.FL; if (!FL || !FL.P4) return;
  var TL = function (n) { return FL.tally(n); }, TLR = function (rows) { return '<div style="display:grid;gap:8px;justify-items:start">' + rows.map(function (x) { return '<div style="display:flex;align-items:center;gap:10px;font-weight:800;font-size:1.3rem;color:#2b2340;background:#fff;border:3px solid #2b2340;border-radius:14px;padding:4px 12px"><span style="min-width:3.2em">' + x[0] + '</span>' + '<div style="width:' + (Math.ceil(x[1] / 5) * 70) + 'px">' + FL.tally(x[1]) + '</div><span>= ' + x[1] + '</span></div>'; }).join('') + '</div>'; };
  var P = FL.P4, r = FL.r, pick = FL.pick, mc = FL.mcq, SH = FL.shapeRow;
  function grid(rw, cl) { var s = ''; for (var i = 0; i < rw; i++) { s += '<div style="display:flex;justify-content:center">'; for (var j = 0; j < cl; j++) s += '<span style="width:26px;height:26px;background:#ffe08a;border:2px solid #2b2340;margin:-1px"></span>'; s += '</div>'; } return '<div style="margin:auto">' + s + '</div>'; }
  function rule(lo, hi, at) { var w = 300, s = '', n = hi - lo; for (var i = 0; i <= n; i++) { var x = 10 + i * (w - 20) / n; s += '<line x1="' + x + '" y1="20" x2="' + x + '" y2="' + (i % 5 === 0 ? 40 : 32) + '" stroke="#2b2340" stroke-width="2"/>' + (i % 5 === 0 ? '<text x="' + x + '" y="56" font-size="12" font-weight="800" text-anchor="middle" fill="#2b2340">' + (lo + i) + '</text>' : ''); } var ax = 10 + (at - lo) * (w - 20) / n; return '<svg viewBox="0 0 300 70" role="img" aria-label="A ruler pointing at ' + at + '" style="width:300px;max-width:100%;height:auto"><rect x="6" y="14" width="288" height="30" rx="4" fill="#ffe08a" stroke="#2b2340" stroke-width="2"/>' + s + '<rect x="' + (ax - 1.5) + '" y="0" width="3" height="14" fill="#e63946"/></svg>'; }
  function bars(items) { return '<div style="display:grid;gap:6px;justify-items:start;margin:auto;max-width:320px">' + items.map(function (x) { var s = ''; for (var i = 0; i < x[1]; i++) s += '<span style="display:inline-block;width:20px;height:22px;background:' + (x[2] || '#ffb703') + ';border:2px solid #2b2340;margin-right:-2px"></span>'; return '<div style="display:flex;align-items:center;gap:8px"><b style="min-width:62px;text-align:right">' + x[0] + '</b><span>' + s + '</span></div>'; }).join('') + '</div>'; }

  /* ===== 407 Measurement ===== */
  P(407, 'learn1', { ch: 'frog', bg: 'pond',
    way: 'Area is the amount of flat space a shape covers. Count the squares inside it, or multiply rows by columns.|' + FL.p4.rectPic(4, 3, 'squares'),
    ex: ['A rectangle is 4 squares long and 3 squares wide. What is its area?|3 rows of 4 squares.;3 × 4 = 12.|12 squares|3 × 4', 'A square is 5 squares long. What is its area?|5 rows of 5 squares.;5 × 5 = 25.|25 squares|5 × 5'],
    mist: 'Area is not the distance round the edge. It is the squares inside.|inside, not around',
    real: 'A tile floor has 6 rows of 8 tiles. How many tiles?|48|14,42,56|6 × 8.|6 × 8',
    qs: ['A rectangle has 2 rows of 5 squares. Area?|10 squares|7 squares,25 squares,12 squares|2 × 5.', '3 rows of 6 squares. Area?|18 squares|9 squares,36 squares,24 squares|3 × 6.', 'A square has sides of 4 squares. Area?|16 squares|8 squares,4 squares,12 squares|4 × 4.', '5 rows of 2 squares. Area?|10 squares|7 squares,25 squares,12 squares|5 × 2.', 'Area of 3 squares by 3 squares?|9 squares|6 squares,12 squares,3 squares|3 × 3.', '4 rows of 7 squares. Area?|28 squares|11 squares,24 squares,32 squares|4 × 7.', 'Which measures the space inside a shape?|area|perimeter,length,height|Area.', '2 rows of 10 squares. Area?|20 squares|12 squares,100 squares,10 squares|2 × 10.'],
    gen: function g(lv) { var a = r(2, lv ? 8 : 5), b = r(2, lv ? 8 : 6); return mc('Area', 'A rectangle is <b>' + b + ' squares long</b> and <b>' + a + ' squares wide</b>. What is its area?', a * b + ' squares', [(a + b) + ' squares', (a * b + a) + ' squares', (2 * (a + b)) + ' squares'], 'Multiply rows by columns.', a + ' × ' + b + ' = ' + a * b + ' squares.', grid(Math.min(a, 6), Math.min(b, 8))); } });

  P(407, 'learn2', { ch: 'frog', bg: 'pond',
    way: 'We measure length in millimetres (mm), centimetres (cm), metres (m) and kilometres (km). Use a small unit for small things.|' + FL.p4.tbl([['10 mm', '1 cm'], ['100 cm', '1 m'], ['1000 m', '1 km']], ['Small unit', 'Big unit']),
    ex: ['A line starts at 3 cm and ends at 11 cm. How long?|Take the start from the end.;11 - 3 = 8.|8 cm|11 - 3', 'Which unit for the length of a bus: cm or m?|A bus is long.|m|bus: m'],
    mist: 'Start at 0. If the object starts at 3 take 3 away from the end number.|end - start',
    real: 'A worm starts at 2 cm and ends at 9 cm on a ruler. How long?|7 cm|9 cm,11 cm,2 cm|9 - 2.|9 - 2',
    qs: ['Ends at 12 starts at 0. Length?|12 cm|11 cm,13 cm,0 cm|Read the end.', 'Starts at 4 ends at 10. Length?|6 cm|10 cm,14 cm,4 cm|10 - 4.', 'Starts at 7 ends at 15. Length?|8 cm|15 cm,22 cm,7 cm|15 - 7.', 'Unit for the length of a pencil?|cm|m,km,mm|Small.', 'Unit for the distance to the next town?|km|cm,m,mm|Far.', 'Unit for the width of your finger?|mm|km,m,cm|Tiny.', 'Which is longer: 1 m or 90 cm?|1 m|90 cm|100 cm.', 'A rope is 50 cm. 15 cm is cut off. Length now?|35 cm|65 cm,45 cm,15 cm|50 - 15.'],
    gen: function g(lv) { var s = r(0, lv ? 8 : 5), len = r(3, lv ? 12 : 9), e = s + len; if (e > 20) return g(lv); return mc('Length', 'The object starts at <b>' + s + '</b> and ends at <b>' + e + '</b> on the ruler. How long is it?', len + ' cm', [e + ' cm', (len + 1) + ' cm', (len - 1) + ' cm', (e + s) + ' cm'], 'Subtract the start from the end.', e + ' - ' + s + ' = ' + len + '.', rule(0, 20, e)); } });

  P(407, 'learn3', { ch: 'frog', bg: 'pond',
    way: 'Perimeter is the distance all the way round the edge of a shape. Add up all the sides.|' + FL.p4.rectPic(5, 3, 'cm'),
    ex: ['A rectangle has sides 5 cm and 3 cm. Perimeter?|Opposite sides are equal: 5, 3, 5, 3.;5 + 3 + 5 + 3 = 16.|16 cm|5 + 3 + 5 + 3', 'A square has sides of 6 cm. Perimeter?|4 sides of 6.;6 + 6 + 6 + 6 = 24.|24 cm|4 × 6'],
    mist: 'Add all four sides, not just two. 5 + 3 is only half the perimeter.|all the sides',
    real: 'A garden is 8 m long and 4 m wide. How much fencing goes round it?|24 m|12 m,32 m,16 m|8 + 4 + 8 + 4.|8 + 4 + 8 + 4',
    qs: ['A rectangle 4 cm by 2 cm. Perimeter?|12 cm|8 cm,6 cm,16 cm|4 + 2 + 4 + 2.', 'A square with sides of 3 cm. Perimeter?|12 cm|9 cm,6 cm,3 cm|4 × 3.', 'A rectangle 10 cm by 5 cm. Perimeter?|30 cm|15 cm,50 cm,25 cm|10 + 5 + 10 + 5.', 'A triangle has sides 3, 4 and 5 cm. Perimeter?|12 cm|60 cm,7 cm,9 cm|3 + 4 + 5.', 'A square with sides of 10 m. Perimeter?|40 m|20 m,100 m,10 m|4 × 10.', 'A rectangle 6 m by 1 m. Perimeter?|14 m|7 m,12 m,6 m|6 + 1 + 6 + 1.', 'Which measures the distance round a shape?|perimeter|area,volume,height|Perimeter.', 'A rectangle 9 cm by 3 cm. Perimeter?|24 cm|12 cm,27 cm,18 cm|9 + 3 + 9 + 3.'],
    gen: function g(lv) { var a = r(2, lv ? 15 : 9), b = r(2, lv ? 12 : 8); if (a === b) return g(lv); return mc('Perimeter', 'A rectangle is <b>' + a + ' cm</b> long and <b>' + b + ' cm</b> wide. What is its perimeter?', 2 * (a + b) + ' cm', [(a + b) + ' cm', (a * b) + ' cm', (2 * (a + b) + 2) + ' cm', (2 * a + b) + ' cm'], 'Add all four sides.', a + ' + ' + b + ' + ' + a + ' + ' + b + ' = ' + 2 * (a + b) + '.'); } });

  P(407, 'learn4', { ch: 'frog', bg: 'pond',
    way: 'On a scale, first work out how much each small step is worth. Then count on from the last number.|' + FL.p4.scale(0, 20, 2, 8, '') ,
    ex: ['The scale goes up in 10s: 0, 10, 20, 30. The pointer is halfway between 20 and 30. Reading?|Halfway is 5 more.;20 + 5 = 25.|25|' + FL.p4.scale(0, 40, 10, 25, '') + ', 'A scale is marked 0, 100, 200. Pointer is halfway between 100 and 200.|Halfway is 50 more.|150|' + FL.p4.scale(0, 300, 50, 150, '') + '],
    mist: 'Work out each small step first. Do not just read the nearest number.|step size first',
    real: 'A jug is marked 0, 250, 500 ml. The water is halfway between 250 and 500. About how much?|375 ml|300 ml,400 ml,250 ml|Halfway is 125 more.|250 + 125',
    qs: ['Marked 0 10 20. Halfway between 10 and 20?|15|12,14,25|Half of 10.', 'Marked 0 100 200. Halfway between 0 and 100?|50|10,25,150|Half.', 'Steps of 2: 6, 8, 10. What comes after 10?|12|11,14,15|+2.', 'Steps of 5 starting at 0. Third mark?|15|5,10,20|3 × 5.', 'Marked in 20s: 0, 20, 40. The pointer is on 60. Next mark?|80|62,70,100|+20.', 'A scale shows 0, 1, 2 kg. Halfway between 1 and 2?|1.5 kg|1.2 kg,1.1 kg,2.5 kg|Half a kilogram.', 'Marks 0, 50, 100. Pointer exactly on the middle mark?|50|25,75,0|Middle.', 'Steps of 10. After 40?|50|45,60,41|+10.'],
    gen: function g(lv) { var step = pick(lv ? [10, 20, 50, 100] : [10, 20]), k = r(0, 3), lo = k * step; return mc('Reading a scale', 'A scale is marked in <b>' + step + 's</b>. The pointer is <b>halfway</b> between <b>' + lo + '</b> and <b>' + (lo + step) + '</b>. What is the reading?', lo + step / 2, [lo + step / 2 + step / 5, lo + step / 2 - step / 5 > 0 ? lo + step / 2 - step / 5 : lo + step / 2 + step, lo + step, lo + step / 2 + step], 'Halfway is half of ' + step + ' more.', lo + ' + ' + step / 2 + ' = ' + (lo + step / 2) + '.'); } });

  P(407, 'learn5', { ch: 'frog', bg: 'pond',
    way: 'Mass is how heavy something is: grams (g) and kilograms (kg). Capacity is how much a container holds: millilitres (ml) and litres (l).|' + FL.p4.tbl([['1 kg', '1000 g'], ['1 l', '1000 ml']], ['Big unit', 'Small unit']),
    ex: ['How many grams are in 3 kg?|1 kg = 1000 g.;3 × 1000.|3000 g|3 × 1000', 'How many ml are in 2 litres?|1 l = 1000 ml.;2 × 1000.|2000 ml|2 × 1000'],
    mist: 'Use the same unit to compare. 1 kg is more than 500 g.|1 kg = 1000 g',
    real: 'A bag of rice is 2 kg. How many grams?|2000 g|200 g,20 g,2 g|2 × 1000.|2 kg',
    qs: ['1 kg = ? g|1000 g|100 g,10 g,10000 g|Kilo = 1000.', '1 litre = ? ml|1000 ml|100 ml,10 ml,10000 ml|1000.', '2 kg = ? g|2000 g|200 g,20 g,2 g|2 × 1000.', '3 l = ? ml|3000 ml|300 ml,30 ml,3 ml|3 × 1000.', 'Half a kg = ? g|500 g|50 g,5 g,5000 g|Half of 1000.', 'Which is heavier: 2 kg or 1500 g?|2 kg|1500 g|2000 g.', 'Which holds more: 800 ml or 1 l?|1 l|800 ml|1000 ml.', 'Unit for the mass of an apple?|g|kg,ml,l|Light.'],
    gen: function g(lv) { var k = r(1, lv ? 9 : 5), t = r(0, 3); return t === 0 ? mc('Mass', '<b>' + k + ' kg</b> = how many grams?', k * 1000 + ' g', [k * 100 + ' g', k * 10 + ' g', k * 10000 + ' g'], '1 kg = 1000 g.', k + ' × 1000 = ' + k * 1000 + '.') : t === 1 ? mc('Capacity', '<b>' + k + ' litres</b> = how many millilitres?', k * 1000 + ' ml', [k * 100 + ' ml', k * 10 + ' ml', k * 10000 + ' ml'], '1 l = 1000 ml.', k + ' × 1000 = ' + k * 1000 + '.') : t === 2 ? mc('Mass', 'Which is <b>heavier</b>: <b>' + k + ' kg</b> or <b>' + (k * 1000 - 100) + ' g</b>?', k + ' kg', [(k * 1000 - 100) + ' g'], 'Change to the same unit.', k + ' kg = ' + k * 1000 + ' g.') : mc('Mass', '<b>' + k * 1000 + ' g</b> = how many kilograms?', k + ' kg', [k * 100 + ' kg', k * 10 + ' kg', (k + 1) + ' kg'], '1000 g = 1 kg.', k * 1000 + ' ÷ 1000 = ' + k + '.'); } });

  P(407, 'learnm1', { ch: 'frog', bg: 'pond',
    t: 'Millimetres to kilometres|How are mm, cm, m and km linked?|10 mm make 1 cm. 100 cm make 1 m. 1000 m make 1 km. Multiply to change to a smaller unit.|10 mm = 1 cm',
    words: 'millimetre=a very small unit of length, mm=📏;centimetre=10 mm, cm=📐;metre=100 cm, m=📏;kilometre=1000 m, km=🛣️',
    see: ['1 cm is 10 mm. 3 cm is 30 mm.|1 cm = 10 mm', '1 m is 100 cm. 2 m is 200 cm.|1 m = 100 cm', '1 km is 1000 m. 3 km is 3000 m.|1 km = 1000 m'],
    ex3: ['How many mm in 4 cm?|4 × 10.|40 mm|4 × 10', 'How many cm in 5 m?|5 × 100.|500 cm|5 × 100', 'How many m in 2 km?|2 × 1000.|2000 m|2 × 1000'],
    mist: 'Check which unit is bigger. 1 m is 100 cm, but 1 cm is only 10 mm.|10, 100, 1000',
    chk: 'How many cm in 3 m?|300 cm|30 cm,3000 cm,103 cm|3 × 100.|3 × 100',
    rem: '10 mm = 1 cm. 100 cm = 1 m. 1000 m = 1 km.|10, 100, 1000',
    way: 'Use a ladder of units: km, m, cm, mm. Going down, multiply.|' + FL.p4.tbl([['1 km', '1000 m'], ['1 m', '100 cm'], ['1 cm', '10 mm']], ['Big unit', 'Small unit']),
    ex: ['How many mm in 6 cm?|6 × 10.|60 mm|60', 'How many cm in 8 m?|8 × 100.|800 cm|800'],
    real: 'A pencil is 15 cm. How many millimetres?|150 mm|15 mm,1500 mm,1.5 mm|15 × 10.|15 cm',
    qs: ['1 cm = ? mm|10 mm|100 mm,1 mm,1000 mm|10.', '1 m = ? cm|100 cm|10 cm,1000 cm,1 cm|100.', '1 km = ? m|1000 m|100 m,10 m,10000 m|1000.', '5 cm = ? mm|50 mm|5 mm,500 mm,15 mm|5 × 10.', '4 m = ? cm|400 cm|40 cm,4000 cm,104 cm|4 × 100.', '2 km = ? m|2000 m|200 m,20 m,2 m|2 × 1000.', '300 cm = ? m|3 m|30 m,300 m,0.3 m|÷ 100.', '70 mm = ? cm|7 cm|70 cm,700 cm,0.7 cm|÷ 10.'],
    gen: function g(lv) { var K = [['cm', 'mm', 10], ['m', 'cm', 100], ['km', 'm', 1000]], k = pick(lv ? K : K.slice(0, 2)), n = r(2, lv ? 9 : 6); return mc('Length units', '<b>' + n + ' ' + k[0] + '</b> = how many <b>' + k[1] + '</b>?', n * k[2] + ' ' + k[1], [n * k[2] / 10 + ' ' + k[1], n * k[2] * 10 + ' ' + k[1], (n + k[2]) + ' ' + k[1]], '1 ' + k[0] + ' = ' + k[2] + ' ' + k[1] + '.', n + ' × ' + k[2] + ' = ' + n * k[2] + '.'); } });

  P(407, 'learnm2', { ch: 'frog', bg: 'pond',
    t: 'Finding area by multiplying|How can I find area without counting every square?|Multiply the number of rows by the number in each row. Rows × columns = area.|4 × 5 = 20 squares',
    words: 'area=the space inside a shape=🔲;row=squares going across=↔️;column=squares going down=↕️;square unit=a square used to measure area=🟨',
    see: ['Look at this rectangle. It has 3 rows and 5 columns.|' + grid(3, 5), 'Count the rows: 3. Count the columns: 5.|3 rows,5 columns', '3 × 5 = 15 squares.|3 × 5 = 15'],
    ex3: ['4 rows of 6 squares|4 × 6.|24 squares|4 × 6', 'A rectangle is 7 cm by 2 cm. Area?|7 × 2.|14 square cm|7 × 2', 'A square has sides of 5 cm. Area?|5 × 5.|25 square cm|5 × 5'],
    mist: 'Multiply, do not add. A 3 by 5 rectangle has area 15 not 8.|× not +',
    chk: 'A rectangle is 3 cm by 8 cm. Area?|24 square cm|11 square cm,16 square cm,22 square cm|3 × 8.|3 × 8',
    rem: 'Area = rows × columns.|rows × columns',
    way: 'Cover a shape with squared paper and count, then check by multiplying.|' + FL.p4.rectPic(5, 3, 'squares'),
    ex: ['A rectangle is 2 cm by 9 cm. Area?|2 × 9.|18 square cm|18', 'A square has sides of 3 cm. Area?|3 × 3.|9 square cm|9'],
    real: 'A rug is 3 m by 2 m. How many square metres of floor?|6 square m|5 square m,10 square m,12 square m|3 × 2.|3 × 2',
    qs: ['A rectangle is 3 by 4. Area?|12|7,14,10|3 × 4.', '2 by 6. Area?|12|8,14,26|2 × 6.', '5 by 5. Area?|25|10,20,55|5 × 5.', '4 by 8. Area?|32|12,24,36|4 × 8.', '7 by 3. Area?|21|10,24,73|7 × 3.', '10 by 4. Area?|40|14,44,104|10 × 4.', '6 by 6. Area?|36|12,66,42|6 × 6.', '9 by 2. Area?|18|11,27,29|9 × 2.'],
    gen: function g(lv) { var a = r(2, lv ? 12 : 8), b = r(2, lv ? 12 : 8); return mc('Area by multiplying', 'A rectangle is <b>' + a + ' cm</b> by <b>' + b + ' cm</b>. What is its area in square centimetres?', a * b, [a + b, 2 * (a + b), a * b + a, a * b - b], 'Multiply the two sides.', a + ' × ' + b + ' = ' + a * b + '.'); } });

  P(407, 'learnm3', { ch: 'frog', bg: 'pond',
    t: 'Estimating measures|How can I make a sensible estimate of a measure?|To estimate, compare with something you know. A door is about 2 m tall. A bag of sugar is about 1 kg. A cup holds about 250 ml.|about 2 m',
    words: 'estimate=a sensible guess=🤔;about=close to=≈;benchmark=a known size to compare with=📌;sensible=makes sense=✅',
    see: ['Your hand span is about 15 cm.|15 cm', 'A bag of sugar is 1 kg. A big bottle of milk is 2 litres.|1 kg,2 l', 'A door is about 2 m tall.|2 m'],
    ex3: ['About how long is a pencil? 15 cm or 15 m?|A pencil is small.|15 cm|cm', 'About how heavy is an apple? 100 g or 100 kg?|Light.|100 g|g', 'About how much does a mug hold? 250 ml or 250 l?|Small.|250 ml|ml'],
    mist: 'Check the unit. A sensible answer needs the right size and the right unit.|size and unit',
    chk: 'A bus is about how long: 10 m or 10 cm?|10 m|10 cm,10 mm|Very long.|bus',
    rem: 'Compare with something you know. Check the answer is sensible.|benchmark',
    way: 'Use a ruler, a kilogram bag and a litre bottle as benchmarks.|1 kg, 1 l, 1 m',
    ex: ['About how tall is a child? 120 cm or 120 m?|About 1 m and a bit.|120 cm|cm', 'About how much does a cat weigh? 4 kg or 4 g?|A cat is heavy.|4 kg|kg'],
    real: 'About how much does a bath hold? 100 l or 100 ml?|100 l|100 ml|A lot.|bath',
    qs: ['A table is about…|1 m|1 cm,1 km,1 mm|Metre.', 'A bag of sugar weighs about…|1 kg|1 g,10 kg,100 g|Kilogram.', 'A teaspoon holds about…|5 ml|5 l,50 l,500 ml|Small.', 'The distance to school could be…|1 km|1 mm,1 cm,10 cm|Far.', 'A paper clip is about…|3 cm|3 m,30 m,3 km|Small.', 'A swimming pool holds…|lots of litres|a few ml,a spoon,a cup|Big.', 'A pencil weighs about…|5 g|5 kg,50 kg,500 kg|Light.', 'A kitchen floor is about…|4 m long|4 cm long,4 km long,4 mm long|Metres.'],
    gen: function g(lv) { var P = [['a pencil', 'cm', 15], ['a classroom', 'm', 8], ['a feather', 'g', 1], ['a child', 'kg', 30], ['a cup of water', 'ml', 250], ['a bath of water', 'l', 150], ['a football pitch', 'm', 100], ['a bag of sugar', 'kg', 1]], p = pick(P), all = ['mm', 'cm', 'm', 'km', 'g', 'kg', 'ml', 'l']; var grp = { mm: 'L', cm: 'L', m: 'L', km: 'L', g: 'M', kg: 'M', ml: 'C', l: 'C' }; var same = all.filter(function (x) { return x !== p[1] && grp[x] === grp[p[1]]; }); return mc('Estimating', 'Which unit would you use to measure <b>' + p[0] + '</b>?', p[1], same.concat(all.filter(function (x) { return grp[x] !== grp[p[1]]; })), 'Think: length, mass or capacity? Then how big?', p[0] + ' is measured in ' + p[1] + '.'); } });

  /* ===== 408 Shape, position and movement ===== */
  P(408, 'learn1', { ch: 'rocket', bg: 'space',
    way: 'A shape tessellates if copies fit together with no gaps and no overlaps. Squares, rectangles, triangles and hexagons do.|' + FL.sh.tess(),
    ex: ['Do squares tessellate?|Squares fit together with no gaps.|Yes|squares', 'Do circles tessellate?|Circles leave gaps.|No|circles'],
    mist: 'No gaps and no overlaps. Circles leave gaps, so they do not tessellate.|no gaps',
    real: 'A bathroom wall uses square tiles. Why do they work well?|They tessellate|They are round,They leave gaps,They overlap|No gaps.|squares',
    qs: ['Do rectangles tessellate?|Yes|No|Rows of rectangles.', 'Do triangles tessellate?|Yes|No|They fit in rows.', 'Do circles tessellate?|No|Yes|Gaps.', 'Do regular hexagons tessellate?|Yes|No|Honeycomb.', 'Do regular pentagons tessellate?|No|Yes|They leave gaps.', 'Do regular octagons tessellate on their own?|No|Yes|Gaps.', 'What does tessellate mean?|fit together with no gaps|have 4 sides,be round,be bigger|Pattern.', 'Which tessellates?|square|circle,pentagon,octagon|No gaps.'],
    gen: function g(lv) { var Y = ['square', 'rectangle', 'triangle', 'hexagon'], N = ['circle', 'pentagon', 'octagon'], yes = r(0, 1), s = yes ? pick(Y) : pick(N); return mc('Tessellation', 'Does a regular <b>' + s + '</b> tessellate?', yes ? 'Yes' : 'No', [yes ? 'No' : 'Yes'], 'Check for gaps.', 'A ' + s + (yes ? ' fits together with no gaps.' : ' leaves gaps or overlaps.'), SH([s], 90)); } });

  P(408, 'learn2', { ch: 'rocket', bg: 'space',
    way: 'A grid reference gives a place using a letter and a number. Go along first, then up.|' + FL.sh.grid(2, 4),
    ex: ['Start at B2 and move 2 squares up. Where are you?|Up changes the number.;B2 + 2 up = B4.|B4|B2 → B4', 'Start at A1 and move 3 squares right. Where?|Right changes the letter.;A, B, C, D.|D1|A1 → D1'],
    mist: 'Letter first, then number. C4 means along to C then up to 4.|letter, number',
    real: 'A map says the cafe is at D3. Which letter do you find first?|D|3,C,4|Along first.|D3',
    qs: ['What comes first in a grid reference?|the letter|the number|Along.', 'Start at A1. Move up 2. Where?|A3|C1,B2,A2|Up.', 'Start at B3. Move right 2. Where?|D3|B5,C3,A3|Right.', 'Start at D4. Move left 1. Where?|C4|D3,E4,D5|Left.', 'Start at C2. Move down 1. Where?|C1|B2,D2,C3|Down.', 'Which is further right: A3 or D3?|D3|A3|D is further along.', 'Which is higher: B1 or B4?|B4|B1|4 is higher.', 'How many squares from A1 to E1?|4|5,3,1|A to E.'],
    gen: function g(lv) { var L = ['A', 'B', 'C', 'D', 'E', 'F'], c = r(0, lv ? 3 : 2), rw = r(1, lv ? 5 : 3), t = r(0, 1); return t ? mc('Grid references', 'Start at <b>' + L[c] + rw + '</b>. Move <b>up 1</b>. Where are you?', L[c] + (rw + 1), [L[c + 1] + rw, L[c] + (rw + 2), (rw + 1) + L[c]], 'Up changes the number.', L[c] + (rw + 1) + '.') : mc('Grid references', 'Start at <b>' + L[c] + rw + '</b>. Move <b>right 1</b>. Where are you?', L[c + 1] + rw, [L[c] + (rw + 1), L[c + 2] + rw, rw + L[c + 1]], 'Right changes the letter.', L[c + 1] + rw + '.'); } });

  P(408, 'learn3', { ch: 'rocket', bg: 'space',
    way: 'A right angle is a square corner. It is a quarter turn. We mark it with a small square.|' + FL.sh.right(),
    ex: ['How many right angles has a square?|A square has 4 square corners.|4|4 corners', 'How many right angles has a rectangle?|A rectangle has 4 square corners.|4|4 corners'],
    mist: 'A right angle is exactly a square corner. Slanted corners are not right angles.|square corner',
    real: 'The corner of a book is a right angle. How many right angles on its cover?|4|2,3,1|A rectangle.|book',
    qs: ['A right angle is a…|quarter turn|half turn,full turn,third turn|Square corner.', 'Right angles in a square?|4|2,3,0|4 corners.', 'Right angles in a rectangle?|4|2,3,0|4 corners.', 'A triangle with one square corner has how many right angles?|1|0,2,3|One.', 'A circle has how many right angles?|0|1,2,4|No corners.', 'Is the corner of this page a right angle?|Yes|No|Square corner.', 'How many right angles in a half turn?|2|1,3,4|2 quarter turns.', 'How many right angles in a full turn?|4|2,3,1|4 quarter turns.'],
    gen: function g(lv) { var P = [['square', 4], ['rectangle', 4], ['right-angled triangle', 1], ['circle', 0], ['equilateral triangle', 0]], p = pick(P); return mc('Right angles', 'How many <b>right angles</b> does a <b>' + p[0] + '</b> have?', p[1], [0, 1, 2, 3, 4].filter(function (x) { return x !== p[1]; }), 'Count the square corners.', 'A ' + p[0] + ' has ' + p[1] + ' right angle' + (p[1] === 1 ? '' : 's') + '.', p[0] === 'right-angled triangle' || p[0] === 'equilateral triangle' ? SH(['triangle'], 90) : SH([p[0]], 90)); } });

  P(408, 'learn4', { ch: 'rocket', bg: 'space',
    way: 'The four main compass points are North, East, South and West. Between them are North-East, South-East, South-West and North-West.|' + FL.cards(['N = North', 'E = East', 'S = South', 'W = West']),
    ex: ['What is opposite to North?|Opposite means the other way.|South|N → S', 'Face East. Turn a quarter turn clockwise. Which way now?|Clockwise from East is South.|South|E → S'],
    mist: 'Clockwise goes N → E → S → W. Anticlockwise goes the other way.|N E S W clockwise',
    real: 'You walk North then turn around and walk back. Which way are you walking?|South|East,West,North|Opposite of North.|N → S',
    qs: ['Opposite of East?|West|North,South|Opposite.', 'Opposite of South?|North|East,West|Opposite.', 'Face North. Quarter turn clockwise. Which way?|East|West,South|N → E.', 'Face West. Quarter turn clockwise. Which way?|North|East,South|W → N.', 'Face South. Half turn. Which way?|North|East,West|Opposite.', 'Between North and East is…|North-East|South-East,North-West|Between.', 'Face East. Quarter turn anticlockwise. Which way?|North|South,West|E → N.', 'The sun rises in the…|East|West,South|East.'],
    gen: function g(lv) { var D = ['North', 'East', 'South', 'West'], i = r(0, 3), t = pick([1, 2, 3]), cw = r(0, 1), nm = { 1: 'quarter turn', 2: 'half turn', 3: 'three quarter turn' }, to = D[(i + (cw ? t : 4 - t)) % 4]; return mc('Compass points', 'You face <b>' + D[i] + '</b> and make a <b>' + nm[t] + ' ' + (cw ? 'clockwise' : 'anticlockwise') + '</b>. Which way do you face?', to, D.filter(function (x) { return x !== to; }), 'Turn one quarter at a time.', 'You face ' + to + '.'); } });

  P(408, 'learn5', { ch: 'rocket', bg: 'space',
    way: '2D shapes are flat. We name them by their sides and corners. 3D shapes are solid. We describe them by their faces, edges and vertices.|' + FL.sh.shapes(),
    ex: ['How many sides has a hexagon?|Hexa means 6.|6|6', 'How many faces has a cube?|A cube is like a dice.|6|6'],
    mist: 'Sides belong to 2D shapes. Faces belong to 3D shapes.|2D sides, 3D faces',
    real: 'A dice is a cube. How many faces and how many corners has it?|6 faces, 8 corners|6 faces and 6 corners,8 faces and 6 corners,4 faces and 8 corners|Cube.|dice',
    qs: ['How many sides has a pentagon?|5|4,6,8|Penta = 5.', 'How many sides has an octagon?|8|6,10,5|Octa = 8.', 'How many edges has a cube?|12|6,8,10|12.', 'How many vertices has a cube?|8|6,12,4|8.', 'How many faces has a cuboid?|6|4,8,12|6.', 'Which 3D shape can roll and has no edges?|sphere|cube,cuboid,pyramid|Round.', 'How many faces has a square-based pyramid?|5|4,6,8|4 triangles + 1 square.', 'How many faces has a cylinder?|3|2,4,6|2 circles + 1 curved.'],
    gen: function g(lv) { var P = [['cube', 6, 12, 8], ['cuboid', 6, 12, 8], ['square-based pyramid', 5, 8, 5]], p = pick(P), k = r(1, 3), nm = ['faces', 'edges', 'vertices'][k - 1]; return mc('Describing 3D shapes', 'How many <b>' + nm + '</b> has a <b>' + p[0] + '</b>?', p[k], [p[k] + 1, p[k] - 1, p[k] + 2], 'Count carefully.', 'A ' + p[0] + ' has ' + p[k] + ' ' + nm + '.', SH([p[0].indexOf('pyramid') >= 0 ? 'pyramid' : p[0]], 90)); } });

  P(408, 'learn6', { ch: 'rocket', bg: 'space',
    way: 'A line of symmetry is a fold line. Both halves match exactly. Some shapes have more than one.|' + FL.sh.sym(),
    ex: ['How many lines of symmetry has a square?|Fold across, down and both corners.|4|4 lines', 'Does the letter A have a line of symmetry?|Fold down the middle.|Yes|A'],
    mist: 'A rectangle has 2 lines of symmetry, not 4. A diagonal does not make matching halves.|rectangle: 2',
    real: 'A butterfly has matching wings. How many lines of symmetry?|1|2,4,0|Down the middle.|butterfly',
    qs: ['Lines of symmetry in a square?|4|2,1,0|4.', 'Lines of symmetry in a rectangle?|2|4,1,0|2.', 'Lines of symmetry in an equilateral triangle?|3|1,2,0|3.', 'Does a circle have lines of symmetry?|Yes, lots|No,Only 1|Any diameter.', 'Does the letter H have a line of symmetry?|Yes|No|Yes.', 'Does the letter F have a line of symmetry?|No|Yes|No.', 'A heart has how many lines of symmetry?|1|2,0,4|1.', 'A line of symmetry makes two halves that…|match|differ,are bigger,are smaller|Mirror.'],
    gen: function g(lv) { var P = [['square', 4], ['rectangle', 2], ['equilateral triangle', 3], ['regular pentagon', 5]], p = pick(lv ? P : P.slice(0, 3)); return mc('Symmetry', 'How many lines of symmetry has a <b>' + p[0] + '</b>?', p[1], [p[1] + 1, p[1] - 1 || 6, 0, 1].filter(function (x) { return x !== p[1]; }), 'Fold it every way.', 'A ' + p[0] + ' has ' + p[1] + ' lines.', SH([p[0].replace(/equilateral |regular /, '')], 90)); } });

  P(408, 'learnm1', { ch: 'rocket', bg: 'space',
    t: 'Turns and angles|How do turns and angles link?|A quarter turn is a right angle. A half turn is 2 right angles. A full turn is 4 right angles.|¼ = 1 right angle',
    words: 'right angle=a quarter turn=📐;half turn=2 right angles=↩️;three-quarter turn=3 right angles=↪️;full turn=4 right angles=🔄',
    see: ['A quarter turn is a right angle.|1 right angle', 'A half turn makes a straight line. That is 2 right angles.|2 right angles', 'A full turn takes you back to the start. That is 4 right angles.|4 right angles'],
    ex3: ['How many quarter turns make a full turn?|4 right angles.|4|4', 'A half turn is how many right angles?|2 quarter turns.|2|2', 'Face North. A half turn. Which way?|Opposite.|South|N → S'],
    mist: 'A turn is about how far you spin, not how fast. 4 quarter turns end where you began.|4 quarters = full',
    chk: 'How many right angles in three-quarters of a turn?|3|2,4,1|3 quarters.|¾ turn',
    rem: 'Quarter = 1, half = 2, three-quarter = 3, full = 4 right angles.|1 2 3 4',
    way: 'Stand up and turn yourself a quarter, a half and a full turn.|' + FL.sh.turns(),
    ex: ['Face East. A full turn. Where now?|Back to start.|East|E', 'How many half turns make a full turn?|2.|2|2'],
    real: 'You do 3 quarter turns clockwise starting facing North. Which way?|West|East,South,North|N → E → S → W.|3 quarters',
    qs: ['A quarter turn is how many right angles?|1|2,3,4|1.', 'A half turn is how many right angles?|2|1,3,4|2.', 'A full turn is how many right angles?|4|2,3,1|4.', 'Two quarter turns make a…|half turn|full turn,quarter turn|2 quarters.', 'Face South. Full turn. Which way?|South|North,East,West|Back.', 'Face West. Half turn. Which way?|East|North,South|Opposite.', 'Face North. Quarter turn clockwise. Which way?|East|West,South|N → E.', 'Face North. Three quarter turns clockwise. Which way?|West|East,South|N → E → S → W.'],
    gen: function g(lv) { var t = r(1, 4), rt = ['', 'quarter', 'half', 'three-quarter', 'full'][t]; return mc('Turns and angles', 'A <b>' + rt + ' turn</b> is how many <b>right angles</b>?', t, [t + 1, t - 1 || 5, 8 - t].filter(function (x) { return x !== t; }), 'A quarter turn is 1 right angle.', 'A ' + rt + ' turn is ' + t + ' right angle' + (t > 1 ? 's' : '') + '.'); } });

  P(408, 'learnm2', { ch: 'rocket', bg: 'space',
    t: 'Reflection|How do I draw a reflection?|A reflection is a mirror image. Every point is the same distance from the mirror line, on the other side.|2 squares → 2 squares',
    words: 'reflection=a mirror image=🪞;mirror line=the line of symmetry=📏;image=the reflected shape=🖼️;distance=how far from the line=↔️',
    see: ['A shape sits 2 squares from the mirror line.|2 squares', 'Its reflection is 2 squares from the line on the other side.|2 squares', 'Left becomes right. The shape is flipped.|⇄'],
    ex3: ['A dot is 3 squares left of the mirror line. Where is its reflection?|Same distance on the other side.|3 squares right|3 ⇄ 3', 'A point is 1 square above a horizontal line. Reflection?|1 square below.|1 square below|1 ⇅ 1', 'The reflection of the letter b is…|Left and right swap.|d|b ⇄ d'],
    mist: 'The reflection is the same distance from the line, not the same side.|other side',
    chk: 'A point is 4 squares right of the mirror line. Reflection?|4 squares left|2 squares left,4 squares right,8 squares left|Same distance.|4',
    rem: 'Same distance, other side of the mirror line.|same distance',
    way: 'Put a small mirror on the line and look at the shape.|' + FL.sh.mirror(),
    ex: ['A point is 2 squares from the line. Its reflection is how far from the line?|Same.|2 squares|2', 'Reflect the letter p across a vertical line.|Left and right swap.|q|p ⇄ q'],
    real: 'You see yourself 1 m in front of a mirror. How far behind the mirror does your image seem?|1 m|2 m,0 m,0.5 m|Same distance.|mirror',
    qs: ['A dot is 5 squares from the mirror line. Its reflection is how far from the line?|5 squares|10 squares,0 squares,2 squares|Same.', 'A dot is 1 square from the line. Reflection distance?|1 square|2 squares,0 squares|Same.', 'A reflection is a…|mirror image|turn,slide,shrink|Mirror.', 'Reflect a dot 3 squares left. It is now…|3 squares right|3 squares left,6 squares right|Other side.', 'The mirror line is also called…|line of symmetry|compass,grid,scale|Fold line.', 'A shape and its reflection are the…|same size|bigger,smaller,different|Mirror.', 'Reflect a dot that is on the line. Where is it?|on the line|2 squares away,1 square away|Distance 0.', 'Reflect a dot 4 squares above the line. It is now…|4 squares below|4 squares above,8 squares below|Other side.'],
    gen: function g(lv) { var d = r(1, lv ? 8 : 5), dir = pick(['left', 'right']); return mc('Reflection', 'A point is <b>' + d + ' square' + (d > 1 ? 's' : '') + ' to the ' + dir + '</b> of the mirror line. How far is its reflection from the line?', d + ' square' + (d > 1 ? 's' : ''), [(d * 2) + ' squares', (d + 1) + ' squares', d - 1 ? (d - 1) + ' squares' : '0 squares'], 'The reflection is the same distance away.', 'It is ' + d + ' square' + (d > 1 ? 's' : '') + ' on the other side.'); } });

  P(408, 'learnm3', { ch: 'rocket', bg: 'space',
    t: 'Giving directions|How do I give directions with turns?|Use forward, backward, left and right. A turn right is a quarter turn clockwise. A turn left is a quarter turn anticlockwise.|turn right = ¼ clockwise',
    words: 'forward=ahead=⬆️;left=to the side where your left hand is=⬅️;right=to the side where your right hand is=➡️;direction=the way you go=🧭',
    see: ['Face North. Turn right. You now face East.|N → E', 'Face East. Turn left. You face North.|E → N', 'Walk forward 3 squares to move 3 places.|3 forward'],
    ex3: ['Face South. Turn right. Which way?|Right is clockwise: S → W.|West|S → W', 'Face West. Turn left. Which way?|Left is anticlockwise: W → S.|South|W → S', 'Face North. Turn right twice. Which way?|N → E → S.|South|2 turns'],
    mist: 'Right and left depend on which way YOU face, not which way the page faces.|your right|',
    chk: 'Face East and turn left. Which way?|North|South,West,East|Left is anticlockwise.|E → N',
    rem: 'Right = clockwise. Left = anticlockwise.|R = clock, L = anti',
    way: 'Walk a route in the classroom giving instructions for each turn.|forward, turn right',
    ex: ['Face North. Turn left. Which way?|N → W.|West|N → W', 'Face East. Turn right. Which way?|E → S.|South|E → S'],
    real: 'A robot faces North. You say “turn right, forward 3”. Which way does it move?|East|West,North,South|Right of North.|N → E',
    qs: ['Face North. Turn right. Which way?|East|West,South|N → E.', 'Face North. Turn left. Which way?|West|East,South|N → W.', 'Face South. Turn left. Which way?|East|West,North|S → E.', 'Face West. Turn right. Which way?|North|East,South|W → N.', 'Face East. Turn right twice. Which way?|West|North,South|E → S → W.', 'Face South. Turn right then left. Which way?|South|North,East|Right then back.', 'Turn right is a…|quarter turn clockwise|half turn,quarter turn anticlockwise,full turn|Right.', 'Turn left is a…|quarter turn anticlockwise|quarter turn clockwise,half turn|Left.'],
    gen: function g(lv) { var D = ['North', 'East', 'South', 'West'], i = r(0, 3), right = r(0, 1), n = lv ? r(1, 3) : 1, to = D[(i + (right ? n : 4 - n % 4)) % 4]; return mc('Giving directions', 'You face <b>' + D[i] + '</b> and turn <b>' + (right ? 'right' : 'left') + (n > 1 ? ' ' + n + ' times' : '') + '</b>. Which way do you face?', to, D.filter(function (x) { return x !== to; }), 'Right is clockwise. Left is anticlockwise.', 'You face ' + to + '.'); } });

  /* ===== 409 Data and chance ===== */
  P(409, 'learn1', { ch: 'fox', bg: 'day',
    way: 'We collect data and show it in a tally chart, table or bar chart. A tally mark is a line for each one. Group them in fives.|' + TLR([['4 marks', 4], ['5 marks', 5]]),
    ex: ['A tally shows 5 and 3 more. How many?|A group of five is 5.;5 + 3 = 8.|8|' + TL(8), 'A bar chart shows red 6 and blue 9. How many more blue?|9 - 6.|3|9 - 6'],
    mist: 'Group in fives. A group of five is four lines with a line across them.|5 = four lines and a cross',
    real: 'A class vote: apples 7, bananas 5. How many children voted?|12|2,35,13|7 + 5.|7 + 5',
    qs: ['A tally shows 5 and 2. How many?|7|52,3,10|5 + 2.|' + TL(7), 'A tally shows 10. How many groups of 5?|2|1,3,5|10 ÷ 5.|' + TL(10), 'Bar chart red 8, blue 5. Which is more?|red|blue|8 > 5.', 'Bar chart red 8, blue 5. How many more red?|3|13,2,4|8 - 5.', 'Bar chart 4, 6, 3. How many altogether?|13|12,14,10|4 + 6 + 3.', 'How many in this tally: 5, 5, 1?|11|10,7,15|5 + 5 + 1.|' + TL(11), 'What is data?|information we collect|a shape,a number line,a graph only|Facts.', 'Which shows the most? 3, 9, 7|9|3,7|Biggest.'],
    gen: function g(lv) { var a = r(3, lv ? 14 : 9), b = r(3, lv ? 14 : 9), c = r(2, lv ? 14 : 9), tot = a + b + c; return mc('Recording data', 'A bar chart shows red <b>' + a + '</b>, blue <b>' + b + '</b> and green <b>' + c + '</b>. How many <b>altogether</b>?', tot, [tot + 1, tot - 1, Math.max(a, b, c), tot + 10], 'Add all the bars.', a + ' + ' + b + ' + ' + c + ' = ' + tot + '.', bars([['red', Math.min(a, 12)], ['blue', Math.min(b, 12), '#4aa8ff'], ['green', Math.min(c, 12), '#7cc96b']])); } });

  P(409, 'learn2', { ch: 'fox', bg: 'day',
    way: 'A table has rows and columns. Find the row, then the column, and read where they meet.|row across, column down',
    ex: ['A table: Mon 5, Tue 7, Wed 4. Which day had the most?|Compare 5, 7 and 4.|Tuesday|7 is biggest', 'How many altogether on Mon and Wed?|5 + 4.|9|5 + 4'],
    mist: 'Put your finger on the right row and column. Do not read a nearby number.|row and column',
    real: 'A table shows sunny days: Mon 2, Tue 3, Wed 0. How many in total?|5|6,3,4|2 + 3 + 0.|2 + 3 + 0',
    qs: ['A table: cats 6, dogs 9. Which has more?|dogs|cats|9 > 6.', 'A table: cats 6, dogs 9. How many altogether?|15|3,14,16|6 + 9.', 'A table: red 4, blue 7. How many more blue?|3|11,2,4|7 - 4.', 'Mon 3, Tue 5, Wed 8. Total?|16|15,17,11|3 + 5 + 8.', 'Mon 3, Tue 5, Wed 8. Which is least?|Mon|Tue,Wed|3.', 'A table has columns and…|rows|bars,tallies,lines|Rows.', 'Row Mon, column cakes shows 4. How many cakes on Mon?|4|Mon,cakes,44|Read it.', 'A: 10, B: 7. Difference?|3|17,2,4|10 - 7.'],
    gen: function g(lv) { var a = r(2, lv ? 20 : 12), b = r(2, lv ? 20 : 12), c = r(2, lv ? 20 : 12), k = r(0, 1); return k ? mc('Reading tables', 'A table shows Mon <b>' + a + '</b>, Tue <b>' + b + '</b>, Wed <b>' + c + '</b>. How many <b>altogether</b>?', a + b + c, [a + b + c + 1, a + b + c - 1, a + b], 'Add the three numbers.', a + ' + ' + b + ' + ' + c + ' = ' + (a + b + c) + '.') : (function () { if (a === b) b = a + 3; var big = a > b ? a : b; return mc('Reading tables', 'A table shows Mon <b>' + a + '</b> and Tue <b>' + b + '</b>. How many <b>more</b> on the bigger day than the smaller?', Math.abs(a - b), [a + b, Math.abs(a - b) + 1, big], 'Subtract the smaller from the bigger.', big + ' - ' + (a > b ? b : a) + ' = ' + Math.abs(a - b) + '.'); })(); } });

  P(409, 'learn3', { ch: 'fox', bg: 'day',
    way: 'A Venn diagram uses overlapping circles. Things in both groups go in the overlap. A Carroll diagram uses a grid with yes and no.|overlap = both rules',
    ex: ['Circles: even, more than 10. Where does 12 go?|12 is even and more than 10.|the overlap|both', 'Where does 7 go: even, more than 10?|7 is odd and less than 10.|outside both|neither'],
    mist: 'Check both rules for every item. An item can go in one circle, both or neither.|both rules',
    real: 'Sort animals: has legs, has wings. A bird has both. Where does it go?|the overlap|legs only,wings only,outside|Both.|bird',
    qs: ['Even / more than 10. Where is 14?|overlap|even only,more than 10 only|Both.', 'Even / more than 10. Where is 3?|outside both|even only,overlap|Neither.', 'Even / more than 10. Where is 8?|even only|overlap,more than 10 only|Even, not over 10.', 'Even / more than 10. Where is 15?|more than 10 only|even only,overlap|Odd, over 10.', 'Carroll: odd or even. Where is 21?|odd|even|Ends in 1.', 'Carroll: odd or even. Where is 38?|even|odd|Ends in 8.', 'A square is a 2D shape with corners. In the overlap?|Yes|No|Both.', 'The overlap holds things that…|are in both groups|are in neither,are in one,are small|Both.'],
    gen: function g(lv) { var n = r(1, lv ? 30 : 20), ev = n % 2 === 0, big = n > 10, ans = ev && big ? 'overlap' : ev ? 'even only' : big ? 'more than 10 only' : 'outside both'; return mc('Venn diagrams', 'A Venn diagram has circles for <b>even</b> and <b>more than 10</b>. Where does <b>' + n + '</b> go?', ans, ['even only', 'more than 10 only', 'overlap', 'outside both'].filter(function (x) { return x !== ans; }), 'Check both rules.', n + ' is ' + (ev ? 'even' : 'odd') + ' and ' + (big ? '' : 'not ') + 'more than 10.'); } });

  P(409, 'learn4', { ch: 'fox', bg: 'day',
    way: 'Chance tells how likely something is: impossible, unlikely, even chance, likely, certain.|' + FL.sh.chance(),
    ex: ['A dice shows 7. How likely?|A dice has 1 to 6.|impossible|1–6', 'A coin lands heads. How likely?|2 sides, 1 heads.|even chance|50-50'],
    mist: 'Unlikely is not impossible. Unlikely events can still happen.|unlikely ≠ impossible',
    real: 'A bag has 9 red and 1 blue counter. How likely is red?|likely|unlikely,impossible,even chance|9 of 10.|9 red 1 blue',
    qs: ['The sun will rise tomorrow. How likely?|certain|likely,unlikely|Always.', 'A pig will fly. How likely?|impossible|unlikely,certain|Cannot.', 'A coin lands heads. How likely?|even chance|likely,certain|50-50.', 'A dice shows a number from 1 to 6. How likely?|certain|likely,even chance|Always.', 'A bag has 1 red and 9 blue. Pick red. How likely?|unlikely|likely,certain|Few.', 'A bag has 5 red and 5 blue. Pick red. How likely?|even chance|likely,unlikely|Equal.', 'A dice shows 6. How likely?|unlikely|certain,even chance,impossible|1 in 6.', 'It will snow in the desert. How likely?|unlikely|certain,likely|Rare.'],
    gen: function g(lv) { var R = r(0, 10), B = 10 - R, ans = R === 0 ? 'impossible' : R === 10 ? 'certain' : R === 5 ? 'even chance' : R > 5 ? 'likely' : 'unlikely'; return mc('Chance', 'A bag has <b>' + R + ' red</b> and <b>' + B + ' blue</b> counters. You pick one without looking. How likely is <b>red</b>?', ans, ['impossible', 'unlikely', 'even chance', 'likely', 'certain'].filter(function (x) { return x !== ans; }), 'Compare red with all the counters.', R + ' of 10 are red: ' + ans + '.'); } });

  P(409, 'learnm1', { ch: 'fox', bg: 'day',
    t: 'Tally charts|How do I use tally marks?|A tally mark is a line for each one counted. Make groups of five: four lines with a line across. Count in 5s then add the rest.|' + TL(5),
    words: 'tally=a mark for each one counted=✏️;tally chart=a table of tally marks=📋;group of five=four lines with a cross=🖐️;frequency=how many=🔢',
    see: ['Count each one with a line. Here are 3 tally marks: 1, 2, 3.|' + TL(3), 'The fifth line goes across the four. Now count in fives: 5, 10, 15.|' + TL(15), '2 groups of 5 and 3 more. 5 + 5 + 3 = 13.|' + TL(13)],
    ex3: ['A tally shows 2 groups of five and 4. How many?|5 + 5 + 4.|14|' + TL(14), 'How do we show 7 as a tally?|One group of 5, then 2 more lines.|5 + 2 = 7|' + TL(7), 'A tally shows 3 groups of five. How many?|3 × 5.|15|' + TL(15)],
    mist: 'Do not count every line one by one if there are groups. Count 5, 10, 15 ...|' + TL(15),
    chk: 'How many do these tally marks show?|17|5,15,7|3 groups of 5 is 15, plus 2 more.|' + TL(17),
    rem: 'Make groups of five and count in 5s.|5, 10, 15',
    way: 'Make a tally chart of the colours of cars passing the school. Every car gets one line, and every fifth line goes across. Here 5 red cars and 3 blue cars passed.|' + TLR([['Red', 5], ['Blue', 3]]),
    ex: ['A tally has 1 group of 5 and 3 lines. How many?|5 + 3.|8|' + TL(8), 'How many groups of 5 are in this tally?|20 ÷ 5.|4|' + TL(20)],
    real: 'Ollie tallied the dogs he saw. How many dogs?|7|52,3,10|5 + 2.|' + TL(7),
    qs: ['This is one group of five. How many tally marks?|5|4,6,1|Four lines and a cross make 5.|' + TL(5), 'How many do these 2 groups of five show?|10|2,5,25|2 × 5 = 10.|' + TL(10), 'How many do these tally marks show?|17|5,12,32|15 + 2 = 17.|' + TL(17), 'How many do these 4 groups of five show?|20|4,9,45|4 × 5 = 20.|' + TL(20), 'How many do these tally marks show?|9|5,4,14|5 + 4 = 9.|' + TL(9), 'How many do these tally marks show?|13|5,23,8|10 + 3 = 13.|' + TL(13), 'What does a tally chart use to show data?|tally marks|pictures,bars only,letters|Marks.', 'How many groups of 5 make 25?|5|4,25,2|25 ÷ 5.|' + TL(25)],
    gen: function g(lv) { var gr = r(1, lv ? 8 : 5), x = r(0, 4), n = gr * 5 + x; return mc('Tally charts', 'A tally chart shows <b>' + gr + ' group' + (gr > 1 ? 's' : '') + ' of five</b> and <b>' + x + ' more</b>. How many in all?', n, [n + 1, n - 1, gr + x, n + 5].filter(function (v) { return v !== n; }), 'Count in 5s, then add the rest.', gr + ' × 5 + ' + x + ' = ' + n + '.', FL.tally ? FL.tally(Math.min(n, 30)) : ''); } });

  P(409, 'learnm2', { ch: 'fox', bg: 'day',
    t: 'Bar graphs and scales|How do I read a bar graph with a scale?|Look at the scale up the side. Each step might be 1, 2, 5 or 10. Read across from the top of the bar to the scale.|scale 0, 2, 4, 6',
    words: 'bar graph=a graph with bars=📊;scale=the numbers up the side=📏;axis=a line with labels=➖;title=what the graph is about=🏷️',
    see: ['Read the title first. It tells us what the graph shows: our favourite pets.|' + FL.barGraph([['Cats', 6], ['Dogs', 10, '#4aa8ff'], ['Fish', 4, '#7cc96b'], ['Birds', 8, '#ff8fab']], 2, 10, 'Our favourite pets', 'Pet', 'Number of children'), 'Check the scale up the side. It goes up in 2s: 0, 2, 4, 6, 8, 10.|' + FL.barGraph([['Cats', 6], ['Dogs', 10, '#4aa8ff'], ['Fish', 4, '#7cc96b'], ['Birds', 8, '#ff8fab']], 2, 10, 'Our favourite pets', 'Pet', 'Number of children'), 'The cats bar reaches the line at 6, so 6 children chose cats. Read across from the top of the bar to the scale.|' + FL.barGraph([['Cats', 6], ['Dogs', 10, '#4aa8ff'], ['Fish', 4, '#7cc96b'], ['Birds', 8, '#ff8fab']], 2, 10, 'Our favourite pets', 'Pet', 'Number of children', 0)],
    ex3: ['The scale goes up in 2s. A bar is halfway between 4 and 6. How many?|Halfway is 5.|5|5', 'A bar reaches 10 on a scale in 5s. How many?|It reaches the 10 mark.|10|10', 'Bars of 8 and 6. How many more?|8 - 6.|2|8 - 6'],
    mist: 'Do not count the bars. Read the number on the scale.|scale',
    chk: 'The scale goes up in 5s. A bar reaches the 2nd mark above 0. How many?|10|2,5,7|2 × 5.|2 × 5',
    rem: 'Read the title, check the scale, read across from the top of the bar.|title, scale',
    way: 'Make a bar graph of the weather for a week. Sunny 3 days, rainy 2 days and cloudy 2 days. Give the graph a title and label both axes.|' + FL.barGraph([['Sunny', 3, '#ffd23f'], ['Rainy', 2, '#4aa8ff'], ['Cloudy', 2, '#b8c0cc']], 1, 4, 'Weather this week', 'Weather', 'Number of days'),
    ex: ['Scale in 2s. A bar at the 3rd mark. How many?|3 × 2.|6|6', 'Scale in 10s. A bar at 40. How many?|It reaches 40.|40|40'],
    real: 'A graph of favourite fruit has scale in 5s. Apples reach 20. How many chose apples?|20|4,5,25|Read the scale.|scale in 5s',
    qs: ['Scale in 2s. Bar at the 4th mark. How many?|8|4,6,24|4 × 2.', 'Scale in 5s. Bar at the 3rd mark. How many?|15|3,8,35|3 × 5.', 'Scale in 10s. Bar at the 5th mark. How many?|50|5,15,510|5 × 10.', 'Scale in 5s. A bar halfway between 10 and 15?|12.5|11,13,10|Between.', 'Bars 12 and 8. Difference?|4|20,3,5|12 - 8.', 'Bars 12 and 8. Total?|20|4,18,22|12 + 8.', 'Where do you read the number?|on the scale|on the title,on the label|Scale.', 'The tallest bar shows the…|most|least,none,middle|Highest.'],
    gen: function g(lv) { var s = pick(lv ? [2, 5, 10] : [1, 2, 5]), k = r(2, 8), v = s * k; return mc('Bar graphs', 'The scale goes up in <b>' + s + 's</b>. A bar reaches the <b>' + k + 'th mark</b>. How many does it show?', v, [k, v + s, v - s > 0 ? v - s : v + 2 * s, k + s], 'Multiply the mark number by the step.', k + ' × ' + s + ' = ' + v + '.'); } });

  P(409, 'learnm3', { ch: 'fox', bg: 'day',
    t: 'Pictograms with keys|How do I read a pictogram?|A pictogram uses pictures. The key tells what each picture is worth. Multiply the pictures by the key.|each ⭐ = 2',
    words: 'pictogram=a chart using pictures=🖼️;key=what each picture is worth=🔑;symbol=a picture used for counting=⭐;data=information we collect=📊',
    see: ['Read the key first. Each star means 2 children. Monday has 2 stars.|' + FL.pictogram([['Monday', 2], ['Tuesday', 3]], '⭐', 2), 'Tuesday has 3 stars, so 3 × 2 = 6 children.|' + FL.pictogram([['Tuesday', 3]], '⭐', 2), 'A half star is half of 2, which is 1. Wednesday has 2 stars and a half star: 2 + 2 + 1 = 5 children.|' + FL.pictogram([['Wednesday', 2.5]], '⭐', 2)],
    ex3: ['Each ⭐ = 5. A row has 4 stars. How many?|4 × 5.|20|20', 'Each ⭐ = 10. A row has 3 stars. How many?|3 × 10.|30|30', 'Each ⭐ = 2. A row has 5 stars. How many?|5 × 2.|10|10'],
    mist: 'Check the key. One picture does not always mean 1.|key first',
    chk: 'Each ⭐ = 5. There are 6 stars. How many?|30|11,56,6|6 × 5.|6 × 5',
    rem: 'Key first. Pictures × key.|pictures × key',
    way: 'Draw your own pictogram using a key of 2. Red has 4 children, blue has 3 and green has 5. Each star is 2 children, so red is 2 stars, blue is 1 and a half stars, and green is 2 and a half stars.|' + FL.pictogram([['Red', 2], ['Blue', 1.5], ['Green', 2.5]], '⭐', 2),
    ex: ['Each 🍎 = 2. There are 7 apples drawn. How many?|7 × 2.|14|14', 'Each 🍎 = 10. 4 pictures. How many?|4 × 10.|40|40'],
    real: 'A pictogram key says each car = 10 cars. 5 pictures. How many cars?|50|15,5,510|5 × 10.|5 × 10',
    qs: ['Key: ⭐ = 1. 7 stars. How many?|7|1,70,8|7 × 1.', 'Key: ⭐ = 2. 4 stars. How many?|8|4,6,24|4 × 2.', 'Key: ⭐ = 5. 3 stars. How many?|15|8,35,3|3 × 5.', 'Key: ⭐ = 10. 6 stars. How many?|60|16,600,6|6 × 10.', 'Key: ⭐ = 2. A half star is…|1|2,0.5,4|Half of 2.', 'Key: ⭐ = 5. A row has 25 children. How many stars?|5|10,20,30|25 ÷ 5.', 'Key: ⭐ = 2. A row shows 12. How many stars?|6|10,14,24|12 ÷ 2.', 'What does the key tell you?|what each picture is worth|the title,the date,the colour|Key.'],
    gen: function g(lv) { var k = pick(lv ? [2, 5, 10] : [1, 2, 5]), n = r(2, 8); return mc('Pictograms', 'In a pictogram each picture is worth <b>' + k + '</b>. There are <b>' + n + '</b> pictures. How many in all?', n * k, [n + k, n * k + k, n * k - k > 0 ? n * k - k : n * k + 2], 'Multiply the pictures by the key.', n + ' × ' + k + ' = ' + n * k + '.'); } });
})();
