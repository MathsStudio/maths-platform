/* formulas.js: a formula page for S1, S2 and S3, opened from the Topics heading and from a chip inside each lesson.
   Only formulas that the year's own lessons teach are listed. */
(function () {
  'use strict';
  var S = Studio;
  var C = {
    area: function (y) {
      var r = [['Rectangle', 'A = l × w'], ['Rectangle perimeter', 'P = 2 × (l + w)'], ['Triangle', 'A = ½ × b × h'], ['Parallelogram', 'A = b × h']];
      if (y !== 'S3') r.push(['Trapezium', 'A = ½ × (a + b) × h']);
      return { icon: '📐', title: 'Area and perimeter', rows: r, ex: 'Triangle with base 8 cm and height 5 cm: ½ × 8 × 5 = 20 cm²' };
    },
    circle: function () {
      return { icon: '⭕', title: 'Circles', rows: [['Circumference', 'C = π × d   or   C = 2πr'], ['Area', 'A = πr²'], ['Arc length', 'arc = θ/360 × πd'], ['Sector area', 'A = θ/360 × πr²']], ex: 'Radius 5 cm: A = π × 5² = 78.5 cm² (using π ≈ 3.14)' };
    },
    circle2: function () {
      return { icon: '⭕', title: 'Circles', rows: [['Circumference', 'C = π × d   or   C = 2πr'], ['Area', 'A = πr²']], ex: 'Diameter 10 cm: C = π × 10 = 31.4 cm (using π ≈ 3.14)' };
    },
    volume: function (y) {
      var r = [['Cuboid', 'V = l × w × h'], ['Prism', 'V = area of end × length']];
      if (y !== 'S1') r.push(['Cylinder', 'V = πr²h']);
      if (y === 'S3') { r.push(['Cone', 'V = ⅓ × πr²h']); r.push(['Pyramid', 'V = ⅓ × base area × h']); r.push(['Sphere', 'V = 4/3 × πr³']); r.push(['Cylinder surface', 'A = 2πr² + 2πrh']); }
      if (y === 'S2') r.push(['Cuboid surface', 'A = 2(lw + lh + wh)']);
      return { icon: '📦', title: 'Volume' + (y === 'S1' ? '' : ' and surface area'), rows: r, ex: y === 'S3' ? 'Cone, radius 3 cm and height 4 cm: ⅓ × π × 9 × 4 ≈ 37.7 cm³' : '4 cm × 3 cm × 2 cm cuboid: 4 × 3 × 2 = 24 cm³' };
    },
    speed: function (y) {
      var r = [['Speed', 's = d ÷ t'], ['Distance', 'd = s × t'], ['Time', 't = d ÷ s']];
      if (y === 'S3') { r.push(['Density', 'density = mass ÷ volume']); r.push(['Pressure', 'pressure = force ÷ area']); }
      return { icon: '🚗', title: 'Speed, distance and time' + (y === 'S3' ? ', density, pressure' : ''), rows: r, ex: '150 km in 3 hours: 150 ÷ 3 = 50 km/h' };
    },
    percent: function (y) {
      var r = [['Percentage of an amount', '% ÷ 100 × amount'], ['Percentage change', 'change ÷ original × 100']];
      r.push(['Simple interest', 'I = P × r × t ÷ 100']);
      if (y !== 'S1') r.push(['Compound interest', 'A = P × (1 + r/100)ⁿ']);
      return { icon: '％', title: 'Percentages and interest', rows: r, ex: '15% of £80: 0.15 × 80 = £12' };
    },
    ratio: function () {
      return { icon: '⚖️', title: 'Ratio and proportion', rows: [['Share in a ratio', 'total ÷ parts = one part'], ['Unit method', 'find one, then multiply']], ex: 'Share £30 in the ratio 2 : 3: 30 ÷ 5 = £6, so £12 and £18' };
    },
    data: function () {
      return { icon: '📊', title: 'Averages', rows: [['Mean', 'total ÷ how many'], ['Median', 'middle value, in order'], ['Mode', 'most common value'], ['Range', 'largest − smallest']], ex: '4, 7, 9: mean = 20 ÷ 3 ≈ 6.7' };
    },
    prob: function () {
      return { icon: '🎲', title: 'Probability', rows: [['Probability', 'P = favourable ÷ total'], ['Not happening', 'P(not A) = 1 − P(A)']], ex: 'A fair dice, a 5: P = 1 ÷ 6' };
    },
    angles: function (y) {
      var r = [['Straight line', '180°'], ['Around a point', '360°'], ['Triangle', '180°'], ['Quadrilateral', '360°']];
      if (y !== 'S1') { r.push(['Polygon (n sides)', '(n − 2) × 180°']); r.push(['Regular polygon, one exterior angle', '360° ÷ n']); }
      else r.push(['Polygon (n sides)', '(n − 2) × 180°']);
      return { icon: '🔺', title: 'Angles', rows: r, ex: 'Triangle with 50° and 60°: 180 − 110 = 70°' };
    },
    bearings: function () {
      return { icon: '🧭', title: 'Bearings', rows: [['Measure', 'clockwise from North, 3 figures'], ['Back bearing', 'add or subtract 180°']], ex: 'Bearing 070° there, so 250° coming back' };
    },
    scale: function () {
      return { icon: '🗺️', title: 'Scale', rows: [['Real length', 'drawing length × scale'], ['Scale 1 : 50 000', '1 cm on the map is 500 m']], ex: '3 cm on a 1 : 50 000 map is 3 × 50 000 = 150 000 cm = 1.5 km' };
    },
    similar: function (y) {
      var r = [['Scale factor', 'k = new length ÷ old length']];
      if (y === 'S3') { r.push(['Areas', 'multiply by k²']); r.push(['Volumes', 'multiply by k³']); }
      return { icon: '🔍', title: 'Similar shapes', rows: r, ex: 'A 4 cm side becomes 10 cm: k = 10 ÷ 4 = 2.5' };
    },
    seq: function () {
      return { icon: '🔢', title: 'Sequences', rows: [['nth term (linear)', 'difference × n + adjustment']], ex: '5, 8, 11, 14: 3n + 2' };
    },
    lines: function () {
      return { icon: '📈', title: 'Straight lines', rows: [['Gradient', 'm = rise ÷ run = (y₂ − y₁) ÷ (x₂ − x₁)'], ['Equation', 'y = mx + c']], ex: 'Through (0, 1) and (2, 5): m = 4 ÷ 2 = 2, so y = 2x + 1' };
    },
    indices: function (y) {
      var r = [['Multiply', 'aᵐ × aⁿ = aᵐ⁺ⁿ'], ['Divide', 'aᵐ ÷ aⁿ = aᵐ⁻ⁿ'], ['Power of a power', '(aᵐ)ⁿ = aᵐⁿ'], ['Power zero', 'a⁰ = 1'], ['Standard form', 'a × 10ⁿ, with 1 ≤ a < 10']];
      if (y === 'S3') r.splice(4, 0, ['Negative power', 'a⁻ⁿ = 1 ÷ aⁿ']);
      return { icon: '↑', title: 'Indices and standard form', rows: r, ex: '5 300 000 = 5.3 × 10⁶' };
    },
    pythag: function () {
      return { icon: '📐', title: 'Pythagoras', rows: [['Right-angled triangle', 'a² + b² = c²'], ['Longest side', 'c is opposite the right angle']], ex: '3 and 4: c² = 9 + 16 = 25, so c = 5' };
    },
    trig: function () {
      return { icon: '📐', title: 'Trigonometry', rows: [['sin θ', 'opposite ÷ hypotenuse'], ['cos θ', 'adjacent ÷ hypotenuse'], ['tan θ', 'opposite ÷ adjacent']], ex: 'SOH CAH TOA. Opposite 3, hypotenuse 6: sin θ = 0.5, so θ = 30°' };
    },
    factor: function () {
      return { icon: '🧩', title: 'Factorising', rows: [['Common factor', 'ab + ac = a(b + c)'], ['Difference of two squares', 'a² − b² = (a − b)(a + b)'], ['Quadratic', 'x² + bx + c = (x + p)(x + q), where p + q = b and pq = c']], ex: 'x² + 5x + 6 = (x + 2)(x + 3)' };
    }
  };
  var YEAR = {
    S1: ['area', 'volume', 'speed', 'percent', 'ratio', 'data', 'prob', 'angles', 'scale', 'seq'],
    S2: ['indices', 'percent', 'ratio', 'speed', 'area', 'circle2', 'volume', 'lines', 'seq', 'angles', 'bearings', 'pythag', 'similar', 'data', 'prob'],
    S3: ['percent', 'indices', 'speed', 'area', 'circle', 'volume', 'factor', 'lines', 'pythag', 'trig', 'similar', 'bearings', 'data', 'prob']
  };
  /* which cards a lesson topic opens first */
  var TOPIC = {
    804: ['percent'], 805: ['ratio'], 806: ['percent'], 807: ['speed'], 808: ['area', 'volume'], 809: ['seq'], 810: ['angles'], 811: ['scale'], 812: ['data', 'prob'],
    821: ['indices'], 822: ['percent'], 823: ['ratio'], 824: ['percent'], 825: ['speed'], 826: ['area', 'volume'], 828: ['lines', 'seq'], 829: ['angles', 'bearings'], 830: ['pythag', 'circle2'], 831: ['similar'], 832: ['data', 'prob'],
    841: ['percent', 'indices'], 842: ['percent'], 843: ['speed'], 844: ['volume', 'area'], 845: ['factor'], 847: ['lines'], 849: ['pythag', 'trig'], 850: ['circle'], 851: ['similar', 'bearings'], 852: ['data', 'prob']
  };
  function yearOfTopic(n) { n = Number(n); return n >= 801 && n <= 813 ? 'S1' : n >= 821 && n <= 833 ? 'S2' : n >= 841 && n <= 853 ? 'S3' : null; }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }
  var css = document.createElement('style');
  css.textContent = '.fm-btn{display:inline-flex;align-items:center;gap:6px;background:#ffd966;color:#14213d;border:0;border-radius:99px;padding:8px 18px;font:800 15px/1.2 inherit;font-family:inherit;cursor:pointer}.fm-btn:hover{filter:brightness(.96)}.fm-btn:focus-visible{outline:3px solid #2a62d9;outline-offset:2px}' +
    '.fm-chip{margin-left:auto;padding:6px 14px;font-size:14px}.topics-head{display:flex;align-items:center;gap:14px;flex-wrap:wrap;margin-bottom:12px}.topics-head h2{margin:0}' +
    '#fmDlg{border:0;border-radius:18px;padding:0;width:min(900px,calc(100vw - 24px));max-height:calc(100vh - 32px);background:var(--bg,#f3f6ff);color:var(--fg,#14213d);box-shadow:0 20px 60px rgba(20,33,61,.35)}#fmDlg::backdrop{background:rgba(20,33,61,.45)}' +
    '.fm-in{padding:20px 22px 24px}.fm-top{display:flex;align-items:flex-start;justify-content:space-between;gap:12px}.fm-top h2{margin:0 0 4px;font-size:26px}.fm-x{font-size:26px;line-height:1;background:#eaf0ff;border:0;border-radius:50%;width:40px;height:40px;cursor:pointer;color:#14213d}' +
    '.fm-lead{margin:0 0 14px;color:var(--mut,#5a6786)}.fm-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px}.fm-c{background:var(--card,#fff);border:2px solid var(--line,#d9e2f7);border-radius:16px;padding:14px 16px;min-width:0}.fm-c h3{margin:0 0 8px;font-size:18px}' +
    '.fm-r{display:flex;justify-content:space-between;gap:10px;align-items:baseline;border-top:1px solid var(--line,#d9e2f7);padding:7px 0}.fm-r:first-of-type{border-top:0}.fm-n{color:var(--mut,#5a6786);font-size:14px}.fm-f{font:600 17px Georgia,"Times New Roman",serif;text-align:right}' +
    '.fm-ex{margin-top:8px;background:#eaf0ff;border-radius:10px;padding:8px 12px;font-size:14px;color:#2b3a5e}.fm-more{margin-top:14px}@media(max-width:700px){.fm-grid{grid-template-columns:1fr}.fm-r{flex-direction:column;gap:2px}.fm-f{text-align:left}}';
  document.head.appendChild(css);
  function card(id, y) { var c = C[id](y); return '<div class="fm-c"><h3>' + c.icon + ' ' + esc(c.title) + '</h3>' + c.rows.map(function (r) { return '<div class="fm-r"><span class="fm-n">' + esc(r[0]) + '</span><span class="fm-f">' + esc(r[1]) + '</span></div>'; }).join('') + '<div class="fm-ex"><b>Example:</b> ' + esc(c.ex) + '</div></div>'; }
  function open(y, ids) {
    if (!YEAR[y]) return;
    var d = document.getElementById('fmDlg'); if (!d) { d = document.createElement('dialog'); d.id = 'fmDlg'; document.body.appendChild(d); d.addEventListener('click', function (e) { if (e.target === d) d.close(); }); }
    var all = YEAR[y], list = ids && ids.length ? ids.filter(function (i) { return all.indexOf(i) > -1; }) : all;
    if (!list.length) list = all;
    d.innerHTML = '<div class="fm-in"><div class="fm-top"><div><h2>' + y + ' formulas</h2><p class="fm-lead">' + (list.length < all.length ? 'The formulas for this topic.' : 'Everything ' + y + ' teaches, in one place.') + '</p></div><button class="fm-x" type="button" aria-label="Close" data-fmx>×</button></div>' +
      '<div class="fm-grid">' + list.map(function (i) { return card(i, y); }).join('') + '</div>' + (list.length < all.length ? '<button class="fm-btn fm-more" type="button" data-fm="' + y + '">Show all ' + y + ' formulas</button>' : '') + '</div>';
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
