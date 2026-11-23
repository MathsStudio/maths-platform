/* formulas.js: formula pages for S1, S2 and S3 (button beside "Topics", chip inside lessons).
   Every card has labelled figures, what each letter means, and a worked example. Only formulas the year teaches are listed. */
(function () {
  'use strict';
  var S = Studio;
  /* ---------- figures (all drawn in a 200 x 130 box) ---------- */
  function svg(body, w) { return '<svg class="fm-svg" viewBox="0 0 200 130" role="img" aria-hidden="true" style="max-width:' + (w || 200) + 'px">' + body + '</svg>'; }
  function T(x, y, s, a, extra) { return '<text class="t" x="' + x + '" y="' + y + '" text-anchor="' + (a || 'middle') + '"' + (extra || '') + '>' + s + '</text>'; }
  function RA(x, y, d) { d = d || 9; return '<path class="d2" d="M' + x + ' ' + (y - d) + ' h' + d + ' v' + d + '"/>'; }   /* square corner marker for a corner at (x,y), opening up-right */
  var F = {
    rect: function () { return svg('<rect class="s" x="25" y="25" width="110" height="75"/>' + T(80, 118, 'l (length)') + T(144, 66, 'w (width)', 'start') + T(80, 68, 'A = area')); },
    tri: function () { return svg('<polygon class="s" points="25,105 175,105 125,22"/><line class="d" x1="125" y1="22" x2="125" y2="105"/><path class="d2" d="M125 96 h-9 v9"/>' + T(100, 122, 'b (base)') + T(134, 68, 'h', 'start')); },
    para: function () { return svg('<polygon class="s" points="20,105 150,105 180,25 50,25"/><line class="d" x1="150" y1="25" x2="150" y2="105"/><path class="d2" d="M150 96 h-9 v9"/>' + T(85, 122, 'b (base)') + T(144, 70, 'h', 'end')); },
    trap: function () { return svg('<polygon class="s" points="20,105 180,105 145,25 55,25"/><line class="d" x1="145" y1="25" x2="145" y2="105"/><path class="d2" d="M145 96 h-9 v9"/>' + T(100, 18, 'a') + T(100, 122, 'b') + T(151, 70, 'h', 'start')); },
    cuboid: function () { return svg('<polygon class="s" points="30,50 130,50 130,110 30,110"/><polygon class="s2" points="30,50 70,22 170,22 130,50"/><polygon class="s3" points="130,50 170,22 170,82 130,110"/>' + T(80, 126, 'l (length)') + T(178, 64, 'h', 'start') + T(160, 16, 'w (width)', 'middle') ); },
    prism: function () { return svg('<polygon class="s" points="25,105 115,105 145,45 55,45"/><polygon class="s2" points="55,45 145,45 175,105 85,105"/><polygon class="s3" points="25,105 85,105 55,45"/>' + T(55, 123, 'end face (area)') + T(130, 36, 'length') + T(135, 122, 'same shape all the way along', 'middle', ' style="display:none"')); },
    circle: function () { return svg('<circle class="s" cx="100" cy="52" r="42"/><line class="d3" x1="58" y1="52" x2="142" y2="52"/><line class="d" x1="100" y1="52" x2="130" y2="22"/><circle cx="100" cy="52" r="2.5" fill="currentColor"/>' + T(121, 44, 'r', 'start') + T(100, 72, 'd') + T(100, 112, 'r = radius, d = diameter') + T(100, 127, 'C = the distance round the edge')); },
    cyl: function () { return svg('<ellipse class="s" cx="100" cy="30" rx="48" ry="14"/><path class="s" d="M52 30 v68 a48 14 0 0 0 96 0 v-68"/><line class="d" x1="100" y1="30" x2="148" y2="30"/><line class="d" x1="174" y1="30" x2="174" y2="98"/>' + T(154, 26, 'r', 'start') + T(180, 68, 'h', 'start')); },
    cone: function () { return svg('<path class="s" d="M100 14 L50 98 a50 14 0 0 0 100 0 Z"/><line class="d" x1="100" y1="14" x2="100" y2="98"/><line class="d" x1="100" y1="98" x2="150" y2="98"/>' + T(106, 62, 'h', 'start') + T(126, 92, 'r')); },
    sphere: function () { return svg('<circle class="s" cx="100" cy="65" r="48"/><ellipse class="d3" cx="100" cy="65" rx="48" ry="13"/><line class="d" x1="100" y1="65" x2="148" y2="65"/>' + T(153, 62, 'r', 'start')); },
    pyr: function () { return svg('<polygon class="s" points="100,14 40,92 130,112"/><polygon class="s3" points="100,14 130,112 170,80"/><line class="d" x1="100" y1="14" x2="100" y2="102"/>' + T(94, 62, 'h', 'end') + T(80, 126, 'base')); },
    pyth: function () { return svg('<polygon class="s" points="35,100 165,100 35,22"/><path class="d2" d="M35 91 h9 v9"/>' + T(100, 116, 'b') + T(26, 64, 'a', 'end') + T(112, 54, 'c', 'start') + T(100, 128, 'c is the longest side')); },
    std: function () { return svg('<text class="t" x="100" y="60" text-anchor="middle" style="font-size:28px">5.3 \u00d7 10<tspan dy="-12" style="font-size:18px">6</tspan></text><line class="d3" x1="60" y1="68" x2="60" y2="84"/><line class="d3" x1="128" y1="68" x2="128" y2="84"/>' + T(62, 98, 'a') + T(132, 98, 'n') + T(100, 114, 'a is from 1 up to 10') + T(100, 128, 'n is how many places moved') + T(100, 20, '5 300 000 in standard form')); },
    trig: function () { return svg('<polygon class="s" points="30,105 170,105 170,35"/><path class="d2" d="M161 105 v-9 h9" /><path class="d" d="M62 105 a32 32 0 0 0 -4 -14"/>' + T(70, 98, 'θ', 'start') + T(100, 122, 'adjacent') + T(178, 72, 'opposite', 'start') + T(86, 56, 'hypotenuse', 'middle', ' transform="rotate(-14 86 56)"')); },
    ftri: function (top, bl, br) { return svg('<polygon class="s" points="100,12 25,115 175,115"/><line class="d" x1="45" y1="86" x2="155" y2="86"/><line class="d" x1="100" y1="86" x2="100" y2="115"/>' + T(100, 66, top) + T(70, 106, bl) + T(130, 106, br), 190); },
    bar: function (parts, total, hi, lab) { var w = 160 / total, b = ''; for (var i = 0; i < total; i++) b += '<rect class="' + (i < hi ? 's3' : 's') + '" x="' + (20 + i * w) + '" y="40" width="' + w + '" height="34"/>'; return svg(b + T(100, 28, lab[0]) + T(100, 98, lab[1]) + T(100, 118, lab[2] || '')); },
    ratio: function () { return svg('<rect class="s3" x="20" y="38" width="64" height="38"/><rect class="s" x="84" y="38" width="96" height="38"/>' + T(52, 62, '\u00a312') + T(132, 62, '\u00a318') + T(52, 94, '2 parts') + T(132, 94, '3 parts') + T(100, 22, 'share \u00a330 in the ratio 2 : 3') + T(100, 118, '\u00a330 \u00f7 5 parts = \u00a36 for each part')); },
    mean: function () { var v = [4, 7, 9], b = ''; v.forEach(function (n, i) { b += '<rect class="s" x="' + (24 + i * 44) + '" y="' + (100 - n * 7) + '" width="36" height="' + (n * 7) + '"/>' + T(42 + i * 44, 114, n); }); return svg(b + '<line class="d" x1="14" y1="' + (100 - 6.7 * 7) + '" x2="190" y2="' + (100 - 6.7 * 7) + '"/>' + T(100, 14, '4 + 7 + 9 = 20, then 20 \u00f7 3 \u2248 6.7') + T(100, 128, 'the dashed line is the mean')); },
    dice: function () { var b = ''; for (var i = 0; i < 6; i++) b += '<rect class="' + (i === 4 ? 's3' : 's') + '" x="' + (20 + i * 27) + '" y="44" width="25" height="25"/>' + T(32.5 + i * 27, 62, i + 1); return svg(b + T(100, 28, 'a fair dice: 6 equal outcomes') + T(100, 96, '1 way to roll a 5') + T(100, 116, 'P(5) = 1 ÷ 6')); },
    angline: function () { return svg('<line class="s" x1="15" y1="95" x2="185" y2="95"/><line class="s" x1="100" y1="95" x2="140" y2="30"/>' + T(70, 88, 'a') + T(128, 88, 'b') + T(100, 118, 'a + b = 180°')); },
    angpoint: function () { return svg('<line class="s" x1="100" y1="65" x2="170" y2="65"/><line class="s" x1="100" y1="65" x2="60" y2="15"/><line class="s" x1="100" y1="65" x2="55" y2="105"/>' + T(125, 54, 'a') + T(70, 62, 'b') + T(112, 90, 'c') + T(100, 124, 'a + b + c = 360°')); },
    angtri: function () { return svg('<polygon class="s" points="25,100 175,100 110,20"/>' + T(46, 94, 'a') + T(150, 94, 'b') + T(110, 46, 'c') + T(100, 122, 'a + b + c = 180°')); },
    angquad: function () { return svg('<polygon class="s" points="30,95 170,95 150,22 50,30"/>' + T(52, 88, 'a') + T(150, 88, 'b') + T(138, 42, 'c') + T(64, 46, 'd') + T(100, 122, 'a + b + c + d = 360°')); },
    angpoly: function () { return svg('<polygon class="s" points="100,8 160,50 138,96 62,96 40,50"/><line class="d" x1="100" y1="8" x2="138" y2="96"/><line class="d" x1="100" y1="8" x2="62" y2="96"/>' + T(100, 112, '5 sides: 3 triangles') + T(100, 127, '3 \u00d7 180\u00b0 = 540\u00b0')); },
    bear: function () { return svg('<line class="d3" x1="70" y1="112" x2="70" y2="22"/><polygon class="s3" points="70,14 64,28 76,28"/><line class="s" x1="70" y1="112" x2="150" y2="83"/><path class="d" d="M70 78 A34 34 0 0 1 102 100"/>' + T(70, 10, 'N') + T(94, 74, '070\u00b0', 'start') + T(154, 86, 'B', 'start') + T(60, 124, 'A', 'end')); },
    scale: function () { return svg('<rect class="s3" x="20" y="38" width="60" height="22"/><rect class="s" x="20" y="84" width="160" height="22"/>' + T(50, 54, '3 cm') + T(100, 100, '1.5 km in real life', 'middle') + T(100, 24, 'on the map (1 cm = 500 m)')); },
    sim: function () { return svg('<polygon class="s" points="15,100 55,100 55,70"/><polygon class="s" points="80,100 180,100 180,36"/>' + T(35, 116, '4') + T(130, 116, '10') + T(100, 18, 'enlarge by k = 10 ÷ 4 = 2.5')); },
    seq: function () { var v = [5, 8, 11, 14], b = ''; v.forEach(function (n, i) { b += '<rect class="s" x="' + (14 + i * 46) + '" y="46" width="38" height="30"/>' + T(33 + i * 46, 67, n); if (i < 3) b += T(57 + i * 46, 38, '+3', 'middle'); }); return svg(b + T(100, 104, 'n = 1, 2, 3, 4 gives 3n + 2') ); },
    line: function () { return svg('<line class="d3" x1="30" y1="112" x2="30" y2="10"/><line class="d3" x1="30" y1="112" x2="190" y2="112"/><line class="s" x1="30" y1="92" x2="170" y2="22"/><line class="d" x1="70" y1="72" x2="130" y2="72"/><line class="d" x1="130" y1="72" x2="130" y2="42"/>' + T(100, 88, 'run') + T(138, 60, 'rise', 'start') + T(26, 96, 'c', 'end') + T(100, 127, 'm = rise \u00f7 run')); },
    ind: function () { return svg('<text class="t" x="100" y="66" text-anchor="middle" style="font-size:46px">a<tspan dy="-22" dx="2" style="font-size:28px">n</tspan></text><line class="d3" x1="86" y1="74" x2="86" y2="90"/><line class="d3" x1="118" y1="26" x2="118" y2="16"/>' + T(86, 104, 'base') + T(118, 11, 'power (index)') + T(100, 126, '2\u00b3 = 2 \u00d7 2 \u00d7 2 = 8')); },
    factor: function () { return svg('<rect class="s" x="30" y="20" width="80" height="50"/><rect class="s3" x="110" y="20" width="60" height="50"/><rect class="s3" x="30" y="70" width="80" height="35"/><rect class="s" x="110" y="70" width="60" height="35"/>' + T(70, 50, 'x²') + T(140, 50, '3x') + T(70, 92, '2x') + T(140, 92, '6') + T(70, 14, 'x') + T(140, 14, '+ 3') + T(18, 90, '+ 2', 'end') + T(18, 50, 'x', 'end') + T(100, 124, '(x + 2)(x + 3)')); }
  };
  function pair(figs) { return '<div class="fm-figs">' + figs.map(function (f) { return '<figure>' + f[0] + (f[1] ? '<figcaption>' + f[1] + '</figcaption>' : '') + '</figure>'; }).join('') + '</div>'; }
  /* ---------- cards: [icon, title, category, figures, rows [name, formula, meaning], example [question, working]] ---------- */
  var C = {
    area: function (y) {
      var f = [[F.rect(), 'Rectangle'], [F.tri(), 'Triangle'], [F.para(), 'Parallelogram']]; var r = [
        ['Area of a rectangle', 'A = l × w', 'A is the area, l is the length, w is the width.'],
        ['Perimeter of a rectangle', 'P = 2 × (l + w)', 'P is the distance all the way round: two lengths and two widths.'],
        ['Area of a triangle', 'A = ½ × b × h', 'b is the base, h is the height. The height meets the base at a right angle.'],
        ['Area of a parallelogram', 'A = b × h', 'b is the base, h is the straight-up height (not the slanted side).']];
      if (y !== 'S3') { f.push([F.trap(), 'Trapezium']); r.push(['Area of a trapezium', 'A = ½ × (a + b) × h', 'a and b are the two parallel sides, h is the distance between them.']); }
      return { icon: '📐', title: 'Area and perimeter', cat: 'Shape', figs: f, rows: r, ex: ['A triangle has a base of 8 cm and a height of 5 cm. What is its area?', 'b = 8 and h = 5, so A = ½ × 8 × 5 = 20 cm².'] };
    },
    circle: function () {
      return { icon: '⭕', title: 'Circles', cat: 'Shape', figs: [[F.circle(), 'Radius, diameter and circumference']], rows: [
        ['Circumference', 'C = π × d   or   C = 2πr', 'C is the distance round the circle. d is the diameter (all the way across), r is the radius (centre to edge). π is about 3.14.'],
        ['Area', 'A = πr²', 'A is the space inside. r² means r × r.'],
        ['Arc length', 'arc = θ ÷ 360 × πd', 'θ is the angle at the centre. An arc is part of the circumference.'],
        ['Sector area', 'A = θ ÷ 360 × πr²', 'A sector is a slice of the circle, like a slice of pizza.']], ex: ['A circle has a radius of 5 cm. What is its area?', 'A = π × r × r = 3.14 × 5 × 5 = 78.5 cm².'] };
    },
    circle2: function () {
      return { icon: '⭕', title: 'Circles', cat: 'Shape', figs: [[F.circle(), 'Radius, diameter and circumference']], rows: [
        ['Circumference', 'C = π × d   or   C = 2πr', 'C is the distance round the circle. d is the diameter (all the way across), r is the radius (centre to edge). π is about 3.14.'],
        ['Area', 'A = πr²', 'A is the space inside. r² means r × r.']], ex: ['A circle has a diameter of 10 cm. What is its circumference?', 'C = π × d = 3.14 × 10 = 31.4 cm.'] };
    },
    volume: function (y) {
      var f = [[F.cuboid(), 'Cuboid'], [F.prism(), 'Triangular prism']], r = [
        ['Volume of a cuboid', 'V = l × w × h', 'V is the volume (space inside). l is the length, w the width, h the height.'],
        ['Volume of a prism', 'V = area of end × length', 'A prism has the same shape all the way along. Find the area of that end face, then multiply by how long the prism is.']];
      if (y !== 'S1') { f.push([F.cyl(), 'Cylinder']); r.push(['Volume of a cylinder', 'V = πr²h', 'The circle at the end has area πr². Multiply by the height h.']); }
      if (y === 'S2') r.push(['Surface area of a cuboid', 'A = 2(lw + lh + wh)', 'Add the areas of all 6 faces: two of each pair.']);
      if (y === 'S3') { f.push([F.cone(), 'Cone'], [F.sphere(), 'Sphere'], [F.pyr(), 'Pyramid']); r.push(['Volume of a cone', 'V = ⅓ × πr²h', 'A third of the cylinder with the same r and h.'], ['Volume of a pyramid', 'V = ⅓ × base area × h', 'A third of the prism with the same base and height.'], ['Volume of a sphere', 'V = 4/3 × πr³', 'r³ means r × r × r.'], ['Surface area of a cylinder', 'A = 2πr² + 2πrh', 'Two circles for the ends plus the curved side (a rectangle when unrolled).']); }
      return { icon: '📦', title: 'Volume' + (y === 'S1' ? '' : ' and surface area'), cat: 'Shape', figs: f, rows: r, ex: y === 'S3' ? ['A cone has radius 3 cm and height 4 cm. What is its volume?', 'V = ⅓ × π × 3 × 3 × 4 = ⅓ × 3.14 × 36 = 37.7 cm³.'] : ['A cuboid is 4 cm long, 3 cm wide and 2 cm high. What is its volume?', 'V = l × w × h = 4 × 3 × 2 = 24 cm³.'] };
    },
    speed: function (y) {
      var f = [[F.ftri('d', 's', 't'), 'Cover what you want to find']], r = [
        ['Speed', 's = d ÷ t', 's is the speed, d is the distance, t is the time taken.'],
        ['Distance', 'd = s × t', 'How far you go at that speed for that long.'],
        ['Time', 't = d ÷ s', 'How long a journey takes.']];
      if (y === 'S3') { f.push([F.ftri('mass', 'density', 'volume'), 'Density'], [F.ftri('force', 'pressure', 'area'), 'Pressure']); r.push(['Density', 'density = mass ÷ volume', 'How much mass is packed into each unit of volume.'], ['Pressure', 'pressure = force ÷ area', 'The same force on a smaller area gives more pressure.']); }
      return { icon: '🚗', title: 'Speed, distance and time' + (y === 'S3' ? ', density, pressure' : ''), cat: 'Number', figs: f, rows: r, ex: ['A car travels 150 km in 3 hours. What is its speed?', 'd = 150 and t = 3, so s = d ÷ t = 150 ÷ 3 = 50 km/h.'] };
    },
    percent: function (y) {
      var r = [['Percentage of an amount', 'percentage ÷ 100 × amount', 'Turn the percentage into a decimal (15% = 0.15), then multiply.'], ['Percentage change', 'change ÷ original × 100', 'change is the new amount minus the original. Always divide by the original.'], ['Simple interest', 'I = P × r × t ÷ 100', 'I is the interest, P is the money you start with, r is the % per year, t is the years.']];
      if (y !== 'S1') r.push(['Compound interest', 'A = P × (1 + r ÷ 100)ⁿ', 'A is the final amount. The interest is added each year, so the next year earns interest on interest. n is the number of years.']);
      return { icon: '％', title: 'Percentages and interest', cat: 'Number', figs: [[F.bar(0, 20, 3, ['15% of \u00a380', 'each small part is 5% = \u00a34', '3 parts: 3 \u00d7 \u00a34 = \u00a312']), '']], rows: r, ex: ['What is 15% of £80?', '15 ÷ 100 = 0.15, then 0.15 × 80 = £12.'] };
    },
    ratio: function () {
      return { icon: '⚖️', title: 'Ratio and proportion', cat: 'Number', figs: [[F.ratio(), '']], rows: [
        ['Share in a ratio', 'total ÷ number of parts = one part', 'Add the ratio numbers to get the parts, divide the total by that, then multiply for each share.'],
        ['Unit method', 'find one, then multiply', 'If 4 pens cost £8, one pen costs £2, so 7 pens cost 7 × £2.']], ex: ['Share £30 in the ratio 2 : 3.', '2 + 3 = 5 parts. £30 ÷ 5 = £6 a part. So £6 × 2 = £12 and £6 × 3 = £18.'] };
    },
    data: function () {
      return { icon: '📊', title: 'Averages', cat: 'Data', figs: [[F.mean(), '']], rows: [
        ['Mean', 'mean = total of the values ÷ how many values', 'Add all the numbers up, then divide by how many numbers there are.'],
        ['Median', 'the middle value when in order', 'Put the numbers in order. The median is in the middle (if two are in the middle, find halfway between them).'],
        ['Mode', 'the value that appears most', 'The most common value. A set can have no mode or more than one.'],
        ['Range', 'range = largest − smallest', 'How spread out the numbers are.']], ex: ['Find the mean of 4, 7 and 9.', 'Total = 4 + 7 + 9 = 20. There are 3 values. Mean = 20 ÷ 3 ≈ 6.7.'] };
    },
    prob: function () {
      return { icon: '🎲', title: 'Probability', cat: 'Data', figs: [[F.dice(), '']], rows: [
        ['Probability', 'P = number of ways it can happen ÷ total number of outcomes', 'A number from 0 (impossible) to 1 (certain). All outcomes must be equally likely.'],
        ['It does not happen', 'P(not A) = 1 − P(A)', 'The chances of A happening and of A not happening add up to 1.']], ex: ['What is the probability of rolling a 5 on a fair dice?', '1 way to roll a 5 and 6 equal outcomes, so P = 1 ÷ 6.'] };
    },
    angles: function (y) {
      var f = [[F.angline(), 'Straight line'], [F.angpoint(), 'Round a point'], [F.angtri(), 'Triangle'], [F.angquad(), 'Quadrilateral'], [F.angpoly(), 'Polygon']], r = [
        ['Angles on a straight line', 'add up to 180°', 'Two angles side by side on a line fill half a turn.'],
        ['Angles round a point', 'add up to 360°', 'A full turn.'],
        ['Angles in a triangle', 'add up to 180°', 'Any triangle, whatever its shape.'],
        ['Angles in a quadrilateral', 'add up to 360°', 'Split it into two triangles: 2 × 180°.'],
        ['Angles in a polygon', '(n − 2) × 180°', 'n is the number of sides. Split the polygon into triangles from one corner.']];
      if (y !== 'S1') r.push(['One exterior angle of a regular polygon', '360° ÷ n', 'The exterior angles of any polygon add up to 360°, and a regular polygon shares them equally.']);
      return { icon: '🔺', title: 'Angles', cat: 'Angles', figs: f, rows: r, ex: ['A triangle has angles of 50° and 60°. What is the third angle?', '50 + 60 = 110. The angles add up to 180°, so 180 − 110 = 70°.'] };
    },
    bearings: function () {
      return { icon: '🧭', title: 'Bearings', cat: 'Angles', figs: [[F.bear(), 'The bearing of B from A']], rows: [
        ['Measuring a bearing', 'clockwise from North, 3 figures', 'Start at North (a line pointing up), turn clockwise to the line you want. Write 70° as 070°.'],
        ['Back bearing', 'add or subtract 180°', 'The way back is the opposite direction.']], ex: ['The bearing of B from A is 070°. What is the bearing of A from B?', '070 + 180 = 250, so the bearing is 250°.'] };
    },
    scale: function () {
      return { icon: '🗺️', title: 'Scale', cat: 'Shape', figs: [[F.scale(), '']], rows: [
        ['Real length', 'drawing length × scale', 'A scale of 1 : 50 000 means 1 unit on the map is 50 000 of the same unit in real life.'],
        ['Units', '100 000 cm = 1 km', 'Change cm to km at the end.']], ex: ['On a 1 : 50 000 map, a path is 3 cm long. How long is it in real life?', '3 × 50 000 = 150 000 cm. 150 000 ÷ 100 000 = 1.5 km.'] };
    },
    similar: function (y) {
      var r = [['Scale factor', 'k = new length ÷ old length', 'k tells you how many times bigger (or smaller) the shape became. Every length is multiplied by k.']];
      if (y === 'S3') r.push(['Areas', 'new area = old area × k²', 'Area has two lengths multiplied, so it grows by k × k.'], ['Volumes', 'new volume = old volume × k³', 'Volume has three lengths, so it grows by k × k × k.']);
      return { icon: '🔍', title: 'Similar shapes', cat: 'Shape', figs: [[F.sim(), '']], rows: r, ex: ['A side of 4 cm becomes 10 cm after enlarging. What is the scale factor?', 'k = new ÷ old = 10 ÷ 4 = 2.5.'] };
    },
    seq: function () {
      return { icon: '🔢', title: 'Sequences', cat: 'Algebra', figs: [[F.seq(), '']], rows: [['nth term of a linear sequence', 'nth term = difference × n + adjustment', 'The difference is what you add each time. n is the position (1st, 2nd, 3rd...). The adjustment makes the first term right.']], ex: ['Find the nth term of 5, 8, 11, 14.', 'The difference is 3, so start with 3n. When n = 1, 3n = 3 but we need 5, so add 2. The nth term is 3n + 2.'] };
    },
    lines: function () {
      return { icon: '📈', title: 'Straight lines', cat: 'Algebra', figs: [[F.line(), '']], rows: [
        ['Gradient (steepness)', 'm = rise ÷ run = (y₂ − y₁) ÷ (x₂ − x₁)', 'rise is how far up, run is how far across. (x₁, y₁) and (x₂, y₂) are two points on the line.'],
        ['Equation of a line', 'y = mx + c', 'm is the gradient, c is where the line crosses the y-axis.']], ex: ['A line goes through (0, 1) and (2, 5). Find its equation.', 'Rise = 5 − 1 = 4 and run = 2 − 0 = 2, so m = 4 ÷ 2 = 2. It crosses the y-axis at 1, so c = 1. The line is y = 2x + 1.'] };
    },
    indices: function (y) {
      var r = [['Multiplying powers', 'aᵐ × aⁿ = aᵐ⁺ⁿ', 'Same base: add the powers. a is the base, m and n are the powers.'], ['Dividing powers', 'aᵐ ÷ aⁿ = aᵐ⁻ⁿ', 'Same base: subtract the powers.'], ['Power of a power', '(aᵐ)ⁿ = aᵐⁿ', 'Multiply the powers.'], ['Power zero', 'a⁰ = 1', 'Any number to the power 0 is 1.']];
      if (y === 'S3') r.push(['Negative power', 'a⁻ⁿ = 1 ÷ aⁿ', 'A negative power means one over.']);
      r.push(['Standard form', 'a × 10ⁿ, with 1 ≤ a < 10', 'A short way to write very big or very small numbers. n tells you how many places the decimal point moved.']);
      return { icon: '↑', title: 'Indices and standard form', cat: 'Number', figs: [[F.ind(), 'Base and power'], [F.std(), 'Standard form']], rows: r, ex: ['Write 5 300 000 in standard form.', 'Move the decimal point 6 places to get 5.3. So 5 300 000 = 5.3 × 10⁶.'] };
    },
    pythag: function () {
      return { icon: '📐', title: 'Pythagoras', cat: 'Shape', figs: [[F.pyth(), 'Right-angled triangle']], rows: [['Pythagoras’ theorem', 'a² + b² = c²', 'c is the longest side (the hypotenuse), opposite the right angle. a and b are the two shorter sides.']], ex: ['A right-angled triangle has short sides 3 and 4. Find the longest side.', 'c² = 3² + 4² = 9 + 16 = 25, so c = √25 = 5.'] };
    },
    trig: function () {
      return { icon: '📐', title: 'Trigonometry', cat: 'Shape', figs: [[F.trig(), 'Right-angled triangle']], rows: [
        ['Sine', 'sin θ = opposite ÷ hypotenuse', 'θ is the angle. Opposite is the side across from it, adjacent is the side next to it, hypotenuse is the longest side.'],
        ['Cosine', 'cos θ = adjacent ÷ hypotenuse', 'SOH CAH TOA helps you remember all three.'],
        ['Tangent', 'tan θ = opposite ÷ adjacent', 'Use it when the hypotenuse is not involved.']], ex: ['The opposite side is 3 and the hypotenuse is 6. Find θ.', 'sin θ = 3 ÷ 6 = 0.5, so θ = 30°.'] };
    },
    factor: function () {
      return { icon: '🧩', title: 'Factorising', cat: 'Algebra', figs: [[F.factor(), 'x² + 5x + 6']], rows: [
        ['Common factor', 'ab + ac = a(b + c)', 'Take out what both terms share.'],
        ['Difference of two squares', 'a² − b² = (a − b)(a + b)', 'One square take away another square.'],
        ['Quadratic', 'x² + bx + c = (x + p)(x + q)', 'Find two numbers p and q that add to b and multiply to c.']], ex: ['Factorise x² + 5x + 6.', 'Two numbers that add to 5 and multiply to 6 are 2 and 3. So x² + 5x + 6 = (x + 2)(x + 3).'] };
    }
  };
  var YEAR = {
    S1: ['area', 'volume', 'speed', 'percent', 'ratio', 'data', 'prob', 'angles', 'scale', 'seq'],
    S2: ['indices', 'percent', 'ratio', 'speed', 'area', 'circle2', 'volume', 'lines', 'seq', 'angles', 'bearings', 'pythag', 'similar', 'data', 'prob'],
    S3: ['percent', 'indices', 'speed', 'area', 'circle', 'volume', 'factor', 'lines', 'pythag', 'trig', 'similar', 'bearings', 'data', 'prob']
  };
  var TOPIC = {
    804: ['percent'], 805: ['ratio'], 806: ['percent'], 807: ['speed'], 808: ['area', 'volume'], 809: ['seq'], 810: ['angles'], 811: ['scale'], 812: ['data', 'prob'],
    821: ['indices'], 822: ['percent'], 823: ['ratio'], 824: ['percent'], 825: ['speed'], 826: ['area', 'volume'], 828: ['lines', 'seq'], 829: ['angles', 'bearings'], 830: ['pythag', 'circle2'], 831: ['similar'], 832: ['data', 'prob'],
    841: ['percent', 'indices'], 842: ['percent'], 843: ['speed'], 844: ['volume', 'area'], 845: ['factor'], 847: ['lines'], 849: ['pythag', 'trig'], 850: ['circle'], 851: ['similar', 'bearings'], 852: ['data', 'prob']
  };
  var CATS = ['Shape', 'Number', 'Algebra', 'Data', 'Angles'];
  function yearOfTopic(n) { n = Number(n); return n >= 801 && n <= 813 ? 'S1' : n >= 821 && n <= 833 ? 'S2' : n >= 841 && n <= 853 ? 'S3' : null; }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }
  var css = document.createElement('style');
  css.textContent = '.fm-btn{display:inline-flex;align-items:center;gap:6px;background:#ffd966;color:#14213d;border:0;border-radius:99px;padding:8px 18px;font:800 15px/1.2 inherit;font-family:inherit;cursor:pointer}.fm-btn:hover{filter:brightness(.96)}.fm-btn:focus-visible{outline:3px solid #2a62d9;outline-offset:2px}.fm-chip{margin-left:auto;padding:6px 14px;font-size:14px}' +
    '#fmDlg{border:0;border-radius:18px;padding:0;width:min(940px,calc(100vw - 24px));max-height:calc(100vh - 32px);background:var(--bg,#f3f6ff);color:var(--fg,#14213d);box-shadow:0 20px 60px rgba(20,33,61,.35)}#fmDlg::backdrop{background:rgba(20,33,61,.45)}' +
    '.fm-in{padding:20px 22px 26px}.fm-top{display:flex;align-items:flex-start;justify-content:space-between;gap:12px}.fm-top h2{margin:0 0 4px;font-size:26px}.fm-x{font-size:26px;line-height:1;background:var(--line,#eaf0ff);border:0;border-radius:50%;width:40px;height:40px;cursor:pointer;color:inherit}' +
    '.fm-lead{margin:0 0 12px;color:var(--mut,#5a6786);font-size:15px}.fm-tabs{display:flex;gap:8px;flex-wrap:wrap;margin:0 0 14px}.fm-tab{border:2px solid var(--line,#d9e2f7);background:var(--surface,#fff);color:inherit;border-radius:99px;padding:6px 14px;font:700 14px inherit;font-family:inherit;cursor:pointer}.fm-tab[aria-pressed=true]{background:#2a62d9;border-color:#2a62d9;color:#fff}' +
    '.fm-grid{column-count:2;column-gap:14px}.fm-c{break-inside:avoid;margin-bottom:14px;background:var(--surface,#fff);border:2px solid var(--line,#d9e2f7);border-radius:16px;padding:14px 16px;min-width:0}.fm-c.wide{column-span:all}.fm-c h3{margin:0 0 8px;font-size:18px}' +
    '.fm-figs{display:flex;flex-wrap:wrap;gap:6px 10px;justify-content:center;margin:2px 0 8px}.fm-figs figure{margin:0;flex:1 1 190px;max-width:220px;text-align:center}.fm-figs figcaption{font-size:12.5px;color:var(--mut,#5a6786);margin-top:-2px}.fm-svg{width:100%;height:auto;display:block;margin:auto}' +
    '.fm-svg .s{fill:color-mix(in srgb,#2a62d9 12%,transparent);stroke:#2a62d9;stroke-width:2;stroke-linejoin:round}.fm-svg .s2{fill:color-mix(in srgb,#2a62d9 24%,transparent);stroke:#2a62d9;stroke-width:2;stroke-linejoin:round}.fm-svg .s3{fill:color-mix(in srgb,#ffb703 45%,transparent);stroke:#2a62d9;stroke-width:2;stroke-linejoin:round}' +
    '.fm-svg .d{stroke:#e0562b;stroke-width:2;stroke-dasharray:5 4;fill:none}.fm-svg .d2{stroke:#e0562b;stroke-width:1.6;fill:none}.fm-svg .d3{stroke:currentColor;stroke-width:1.5;fill:none;opacity:.7}.fm-svg .t{font:700 12.5px Inter,"Segoe UI",system-ui,sans-serif;fill:currentColor}' +
    '.fm-r{border-top:1px solid var(--line,#d9e2f7);padding:8px 0}.fm-r:first-of-type{border-top:0}.fm-n{font-size:13px;font-weight:700;color:var(--mut,#5a6786)}.fm-f{font:600 17px/1.35 Georgia,"Times New Roman",serif;margin:2px 0;overflow-wrap:anywhere}.fm-m{font-size:13.5px;color:var(--mut,#5a6786);line-height:1.45}' +
    '.fm-ex{margin-top:8px;background:color-mix(in srgb,#2a62d9 10%,transparent);border-radius:10px;padding:9px 12px;font-size:14px;line-height:1.5}.fm-ex b{color:#2a62d9}.fm-more{margin-top:14px}@media(max-width:700px){.fm-grid{column-count:1}}';
  document.head.appendChild(css);
  function card(id, y) {
    var c = C[id](y);
    return '<div class="fm-c' + (c.figs.length > 3 ? ' wide' : '') + '" data-cat="' + c.cat + '"><h3>' + c.icon + ' ' + esc(c.title) + '</h3>' + pair(c.figs) +
      c.rows.map(function (r) { return '<div class="fm-r"><div class="fm-n">' + esc(r[0]) + '</div><div class="fm-f">' + esc(r[1]) + '</div><div class="fm-m">' + esc(r[2]) + '</div></div>'; }).join('') +
      '<div class="fm-ex"><b>Example.</b> ' + esc(c.ex[0]) + '<br>' + esc(c.ex[1]) + '</div></div>';
  }
  function open(y, ids) {
    if (!YEAR[y]) return;
    var d = document.getElementById('fmDlg'); if (!d) { d = document.createElement('dialog'); d.id = 'fmDlg'; document.body.appendChild(d); d.addEventListener('click', function (e) { if (e.target === d) d.close(); }); }
    var all = YEAR[y], list = ids && ids.length ? ids.filter(function (i) { return all.indexOf(i) > -1; }) : all;
    if (!list.length) list = all;
    var cards = list.map(function (i) { return { id: i, c: C[i](y) }; }), cats = CATS.filter(function (k) { return cards.some(function (x) { return x.c.cat === k; }); });
    d.innerHTML = '<div class="fm-in"><div class="fm-top"><div><h2>Formulas for ' + y + '</h2><p class="fm-lead">' + (list.length < all.length ? 'The formulas for this topic.' : 'Everything ' + y + ' teaches, in one place. Each one shows a picture, what every letter means, and a worked example.') + '</p></div><button class="fm-x" type="button" aria-label="Close" data-fmx>×</button></div>' +
      (list.length > 1 ? '<div class="fm-tabs" role="group" aria-label="Choose a group">' + ['All'].concat(cats).map(function (k, i) { return '<button type="button" class="fm-tab" data-tab="' + k + '" aria-pressed="' + (i === 0) + '">' + k + '</button>'; }).join('') + '</div>' : '') +
      '<div class="fm-grid">' + list.map(function (i) { return card(i, y); }).join('') + '</div>' + (list.length < all.length ? '<button class="fm-btn fm-more" type="button" data-fm="' + y + '">Show all ' + y + ' formulas</button>' : '') + '</div>';
    d.querySelectorAll('.fm-tab').forEach(function (b) { b.addEventListener('click', function () { var k = b.getAttribute('data-tab'); d.querySelectorAll('.fm-tab').forEach(function (x) { x.setAttribute('aria-pressed', x === b); }); d.querySelectorAll('.fm-c').forEach(function (c) { c.hidden = !(k === 'All' || c.getAttribute('data-cat') === k); }); }); });
    if (!d.open) d.showModal(); d.scrollTop = 0;
  }
  document.addEventListener('click', function (e) {
    var t = e.target.closest && e.target.closest('[data-fm],[data-fmx]'); if (!t) return;
    e.preventDefault();
    if (t.hasAttribute('data-fmx')) { var d = document.getElementById('fmDlg'); if (d) d.close(); return; }
    var y = t.getAttribute('data-fm'), tp = t.getAttribute('data-fmt');
    open(y, tp ? (TOPIC[Number(tp)] || []) : null);
  });
  S.formulas = {
    has: function (y) { return !!YEAR[y]; },
    button: function (y) { return YEAR[y] ? '<button class="fm-btn" type="button" data-fm="' + y + '">📐 ' + y + ' Formulas</button>' : ''; },
    chip: function (n) { var y = yearOfTopic(n); return y && TOPIC[Number(n)] ? '<button class="fm-btn fm-chip" type="button" data-fm="' + y + '" data-fmt="' + Number(n) + '">📐 Formulas for this topic</button>' : ''; }
  };
})();
