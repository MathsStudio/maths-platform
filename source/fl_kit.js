/* fl_kit.js: First level (P2, P3, P4). Cartoon pictures, hands-on activity types for young children,
   and a simple way to make a topic: story Watch lessons plus activities (no practice sets, no
   Strengths Check). Loaded after everything else so the add-ons made for older years do not touch it. */
(function () {
  'use strict';
  var S = window.Studio, H = S && S.h, BT = window.BT; if (!S || !BT || !BT.L) return;
  var rnd = H.rnd, pick = H.pick, shuffle = H.shuffle;
  var FL = window.FL = {};

  /* ---------- drawing ---------- */
  function svg(w, h, alt, inner, max) { return '<svg viewBox="0 0 ' + w + ' ' + h + '" role="img" aria-label="' + alt + '" style="width:100%;max-width:' + (max || w) + 'px;height:auto">' + inner + '</svg>'; }
  function tx(x, y, t, size, fill, weight, anchor) { return '<text x="' + x + '" y="' + y + '" font-size="' + (size || 16) + '" font-weight="' + (weight || 800) + '" text-anchor="' + (anchor || 'middle') + '" style="fill:' + (fill || 'var(--fg)') + ';font-family:inherit">' + t + '</text>'; }
  FL.svg = svg; FL.tx = tx;
  var INK = '#2b2340';
  /* number words written as digits on screen (two..twenty, tens, hundred); "one" is left alone because it is often a pronoun */
  FL.digitise = function (t) {
    var W = { two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, eleven: 11, twelve: 12, thirteen: 13, fourteen: 14, fifteen: 15, sixteen: 16, seventeen: 17, eighteen: 18, nineteen: 19, twenty: 20, thirty: 30, forty: 40, fifty: 50, sixty: 60, seventy: 70, eighty: 80, ninety: 90 };
    var tens = { twenty: 20, thirty: 30, forty: 40, fifty: 50, sixty: 60, seventy: 70, eighty: 80, ninety: 90 }, ones = { one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9 };
    return String(t).replace(/\b(twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety)[- ](one|two|three|four|five|six|seven|eight|nine)\b/gi, function (m, a, b) { return tens[a.toLowerCase()] + ones[b.toLowerCase()]; })
      .replace(/\b(two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety)\b(?!\s+(?:o.clock))/gi, function (m) { return W[m.toLowerCase()]; });
  };
  /* a 10 by 10 square with n small squares shaded: percentages made visible */
  FL.hundred = function (n) {
    var s = '', i, r, c; for (i = 0; i < 100; i++) { r = Math.floor(i / 10); c = i % 10; s += '<rect x="' + (6 + c * 20) + '" y="' + (6 + r * 20) + '" width="19" height="19" rx="2" fill="' + (i < n ? '#ffb03b' : '#fff3d6') + '" stroke="' + INK + '" stroke-width="1.6"/>'; }
    return '<div style="text-align:center;font-weight:800;color:' + INK + '"><div style="max-width:230px;margin:0 auto">' + svg(212, 212, n + ' of 100 squares shaded', s, 230) + '</div><div style="margin-top:4px;font-size:1.2rem;background:#fff;border:3px solid ' + INK + ';border-radius:12px;display:inline-block;padding:2px 12px">' + n + ' out of 100 = ' + n + '%</div></div>';
  };

  /* a bar graph with a title, labelled axes and a scale: items [label, value, colour?] */
  FL.barGraph = function (items, step, max, title, xl, yl, mark) {
    var W = 330, H = 230, L = 52, B = 38, T = 34, plotW = W - L - 12, plotH = H - B - T, s = '', i, v;
    s += tx(W / 2, 18, title, 15, INK, 800);
    for (v = 0; v <= max; v += step) { var y = T + plotH - (v / max) * plotH; s += '<line x1="' + L + '" y1="' + y + '" x2="' + (L + plotW) + '" y2="' + y + '" stroke="#cfc6e6" stroke-width="1.5"/>' + tx(L - 6, y + 4, v, 12, INK, 800, 'end'); }
    s += '<line x1="' + L + '" y1="' + T + '" x2="' + L + '" y2="' + (T + plotH) + '" stroke="' + INK + '" stroke-width="3"/><line x1="' + L + '" y1="' + (T + plotH) + '" x2="' + (L + plotW) + '" y2="' + (T + plotH) + '" stroke="' + INK + '" stroke-width="3"/>';
    var bw = plotW / items.length;
    items.forEach(function (it, k) { var h = (it[1] / max) * plotH, x = L + k * bw + bw * 0.18, w = bw * 0.64, y0 = T + plotH - h;
      s += '<rect x="' + x + '" y="' + y0 + '" width="' + w + '" height="' + h + '" fill="' + (it[2] || '#ffb03b') + '" stroke="' + INK + '" stroke-width="2.5"/>' + tx(x + w / 2, T + plotH + 15, it[0], 11, INK, 800);
      if (mark === k) s += '<line x1="' + L + '" y1="' + y0 + '" x2="' + (x + w) + '" y2="' + y0 + '" stroke="#d64545" stroke-width="3" stroke-dasharray="6 4"/>' + tx(x + w / 2, y0 - 5, it[1], 13, '#d64545', 800); });
    s += tx(L + plotW / 2, H - 6, xl, 12, INK, 800) + '<text transform="translate(12 ' + (T + plotH / 2) + ') rotate(-90)" font-size="12" font-weight="800" text-anchor="middle" fill="' + INK + '">' + yl + '</text>';
    return svg(W, H, title, s, 420);
  };

  /* simple concept pictures for P4 shape and chance lessons */
  FL.sh = {
    tess: function () { var s = tx(80, 14, 'Squares fit: no gaps', 12, INK, 800), i, j; for (i = 0; i < 3; i++) for (j = 0; j < 3; j++) s += '<rect x="' + (20 + i * 38) + '" y="' + (24 + j * 38) + '" width="38" height="38" fill="' + ((i + j) % 2 ? '#ffd23f' : '#7cc4ff') + '" stroke="' + INK + '" stroke-width="2.5"/>';
      s += tx(250, 14, 'Circles leave gaps', 12, INK, 800); for (i = 0; i < 3; i++) for (j = 0; j < 3; j++) s += '<circle cx="' + (205 + i * 38 + 19) + '" cy="' + (24 + j * 38 + 19) + '" r="18" fill="#ff8fab" stroke="' + INK + '" stroke-width="2.5"/>';
      return svg(330, 150, 'Squares tessellate but circles do not', s, 420); },
    right: function () { var s = '<line x1="60" y1="130" x2="60" y2="30" stroke="' + INK + '" stroke-width="5"/><line x1="60" y1="130" x2="180" y2="130" stroke="' + INK + '" stroke-width="5"/><rect x="60" y="100" width="30" height="30" fill="none" stroke="#d64545" stroke-width="3"/>' + tx(215, 95, 'right angle', 15, '#d64545', 800) + tx(215, 115, '= a quarter turn', 13, INK, 800);
      return svg(330, 150, 'A right angle is a square corner', s, 380); },
    shapes: function () { var s = '<polygon points="60,30 20,100 100,100" fill="#7cc4ff" stroke="' + INK + '" stroke-width="3"/>' + tx(60, 125, 'triangle: 3 sides', 12, INK, 800) + tx(60, 140, '3 corners', 12, INK, 800)
        + '<rect x="190" y="50" width="70" height="70" fill="#ffd23f" stroke="' + INK + '" stroke-width="3"/><polygon points="190,50 215,30 285,30 260,50" fill="#ffe27a" stroke="' + INK + '" stroke-width="3"/><polygon points="260,50 285,30 285,100 260,120" fill="#e0a800" stroke="' + INK + '" stroke-width="3"/>' + tx(235, 140, 'cube: 6 faces, 12 edges', 12, INK, 800) + tx(235, 20, '8 vertices', 12, INK, 800);
      return svg(330, 150, 'A triangle is flat and a cube is solid', s, 420); },
    sym: function () { var s = '<rect x="60" y="20" width="100" height="100" fill="#ffd23f" stroke="' + INK + '" stroke-width="3"/>', d = ' stroke="#d64545" stroke-width="3" stroke-dasharray="7 5"';
      s += '<line x1="110" y1="10" x2="110" y2="130"' + d + '/><line x1="50" y1="70" x2="170" y2="70"' + d + '/><line x1="55" y1="15" x2="165" y2="125"' + d + '/><line x1="165" y1="15" x2="55" y2="125"' + d + '/>' + tx(255, 60, 'A square has', 14, INK, 800) + tx(255, 80, '4 lines of symmetry', 14, '#d64545', 800);
      return svg(330, 140, 'A square has 4 lines of symmetry', s, 420); },
    turns: function () { var s = '', L = ['quarter turn', 'half turn', '3/4 turn', 'full turn'], A = [90, 180, 270, 360], i;
      for (i = 0; i < 4; i++) { var cx = 45 + i * 80, cy = 60, a = A[i] * Math.PI / 180, ex = cx + 30 * Math.sin(a), ey = cy - 30 * Math.cos(a);
        s += '<circle cx="' + cx + '" cy="' + cy + '" r="30" fill="#fff" stroke="' + INK + '" stroke-width="2.5"/><line x1="' + cx + '" y1="' + cy + '" x2="' + cx + '" y2="' + (cy - 30) + '" stroke="' + INK + '" stroke-width="3"/>' + (A[i] < 360 ? '<line x1="' + cx + '" y1="' + cy + '" x2="' + ex + '" y2="' + ey + '" stroke="#d64545" stroke-width="3"/>' : '') + tx(cx, 112, L[i], 11, INK, 800) + tx(cx, 126, ['1/4', '1/2', '3/4', '1'][i], 12, '#d64545', 800); }
      return svg(330, 135, 'Quarter, half, three-quarter and full turns', s, 420); },
    mirror: function () { var s = '<rect x="30" y="40" width="50" height="50" fill="#7cc4ff" stroke="' + INK + '" stroke-width="3"/><polygon points="80,40 80,90 110,90" fill="#7cc4ff" stroke="' + INK + '" stroke-width="3"/><line x1="165" y1="20" x2="165" y2="120" stroke="#d64545" stroke-width="4" stroke-dasharray="8 5"/>' + tx(165, 135, 'mirror line', 12, '#d64545', 800)
        + '<rect x="250" y="40" width="50" height="50" fill="#7cc4ff" fill-opacity=".6" stroke="' + INK + '" stroke-width="3"/><polygon points="250,40 250,90 220,90" fill="#7cc4ff" fill-opacity=".6" stroke="' + INK + '" stroke-width="3"/>';
      return svg(330, 145, 'A shape and its mirror image', s, 420); },
    grid: function (col, row) { var s = '', i, j; for (i = 0; i < 5; i++) { s += tx(52 + i * 40, 18, 'ABCDE'[i], 13, INK, 800); for (j = 0; j < 5; j++) s += '<rect x="' + (32 + i * 40) + '" y="' + (24 + j * 24) + '" width="40" height="24" fill="' + (i === col && j === 5 - row ? '#ffd23f' : '#fff') + '" stroke="' + INK + '" stroke-width="2"/>'; }
      for (j = 0; j < 5; j++) s += tx(22, 41 + j * 24, 5 - j, 13, INK, 800);
      s += tx(290, 70, 'C4:', 15, '#d64545', 800) + tx(290, 90, 'along to C,', 12, INK, 800) + tx(290, 105, 'up to 4', 12, INK, 800);
      return svg(360, 150, 'A grid with columns A to E and rows 1 to 5', s, 420); },
    chance: function () { var s = '<line x1="30" y1="60" x2="300" y2="60" stroke="' + INK + '" stroke-width="4"/>', P = [[0, 'impossible', '0'], [.25, 'unlikely', '1/4'], [.5, 'even chance', '1/2'], [.75, 'likely', '3/4'], [1, 'certain', '1']], i;
      P.forEach(function (p, k) { var x = 30 + p[0] * 270; s += '<circle cx="' + x + '" cy="60" r="7" fill="#ffd23f" stroke="' + INK + '" stroke-width="2.5"/>' + tx(x, 40, p[2], 13, '#d64545', 800) + tx(x, 88 + (k % 2) * 16, p[1], 11, INK, 800); });
      return svg(330, 120, 'A chance line from impossible (0) to certain (1)', s, 420); }
  };
  /* a pictogram: one row per label, one picture per `key` items, half picture for a half */
  FL.pictogram = function (rows, icon, key) {
    var h = '<div style="display:grid;gap:6px;justify-items:start;font-weight:800;color:' + INK + ';background:#fff;border:3px solid ' + INK + ';border-radius:14px;padding:8px 12px"><div style="font-size:1.05rem">Key: ' + icon + ' = ' + key + '</div>';
    rows.forEach(function (r) { var full = Math.floor(r[1]), half = r[1] - full > 0; h += '<div style="display:flex;align-items:center;gap:8px"><span style="min-width:4.6em;font-size:1.05rem">' + r[0] + '</span><span style="font-size:1.7rem;letter-spacing:2px">' + new Array(full + 1).join(icon) + (half ? '<span style="display:inline-block;width:.55em;overflow:hidden;vertical-align:bottom">' + icon + '</span>' : '') + '</span></div>'; });
    return h + '</div>';
  };


  /* friendly characters, drawn at (0,0) to (100,100) */
  var CH = {
    rocket: '<path d="M50 6c18 14 24 36 20 62H30C26 42 32 20 50 6z" fill="#ef5b5b" stroke="' + INK + '" stroke-width="3"/><circle cx="50" cy="38" r="11" fill="#bfe3ff" stroke="' + INK + '" stroke-width="3"/><circle cx="46" cy="36" r="2.4" fill="' + INK + '"/><circle cx="54" cy="36" r="2.4" fill="' + INK + '"/><path d="M45 42q5 4 10 0" stroke="' + INK + '" stroke-width="2.4" fill="none" stroke-linecap="round"/><path d="M30 56 16 76h16zM70 56l14 20H68z" fill="#ffd166" stroke="' + INK + '" stroke-width="3"/><path d="M40 70q10 26 20 0" fill="#ffb03b" stroke="' + INK + '" stroke-width="3"/>',
    bear: '<circle cx="26" cy="24" r="12" fill="#a86b3c" stroke="' + INK + '" stroke-width="3"/><circle cx="74" cy="24" r="12" fill="#a86b3c" stroke="' + INK + '" stroke-width="3"/><circle cx="50" cy="52" r="36" fill="#c58550" stroke="' + INK + '" stroke-width="3"/><ellipse cx="50" cy="64" rx="16" ry="12" fill="#f3d2a8"/><circle cx="38" cy="46" r="4" fill="' + INK + '"/><circle cx="62" cy="46" r="4" fill="' + INK + '"/><ellipse cx="50" cy="58" rx="6" ry="4.5" fill="' + INK + '"/><path d="M44 68q6 5 12 0" stroke="' + INK + '" stroke-width="2.6" fill="none" stroke-linecap="round"/>',
    mouse: '<circle cx="24" cy="30" r="16" fill="#c9cedb" stroke="' + INK + '" stroke-width="3"/><circle cx="24" cy="30" r="8" fill="#f7b6c8"/><circle cx="76" cy="30" r="16" fill="#c9cedb" stroke="' + INK + '" stroke-width="3"/><circle cx="76" cy="30" r="8" fill="#f7b6c8"/><ellipse cx="50" cy="58" rx="30" ry="28" fill="#dfe3ec" stroke="' + INK + '" stroke-width="3"/><circle cx="40" cy="52" r="4" fill="' + INK + '"/><circle cx="60" cy="52" r="4" fill="' + INK + '"/><circle cx="50" cy="64" r="5" fill="#ef7fa1" stroke="' + INK + '" stroke-width="2"/><path d="M30 66H16M30 70l-13 4M70 66h14M70 70l13 4" stroke="' + INK + '" stroke-width="2" stroke-linecap="round"/>',
    owl: '<path d="M20 30 26 12 38 24M80 30 74 12 62 24" fill="#8a5a3b" stroke="' + INK + '" stroke-width="3"/><ellipse cx="50" cy="56" rx="34" ry="38" fill="#9c6a45" stroke="' + INK + '" stroke-width="3"/><ellipse cx="50" cy="66" rx="20" ry="22" fill="#e9cfa9"/><circle cx="36" cy="42" r="12" fill="#fff" stroke="' + INK + '" stroke-width="3"/><circle cx="64" cy="42" r="12" fill="#fff" stroke="' + INK + '" stroke-width="3"/><circle cx="37" cy="43" r="5" fill="' + INK + '"/><circle cx="63" cy="43" r="5" fill="' + INK + '"/><path d="M45 52 50 60 55 52z" fill="#ffb03b" stroke="' + INK + '" stroke-width="2"/>',
    fox: '<path d="M16 40 22 8 42 26zM84 40 78 8 58 26z" fill="#f08a3c" stroke="' + INK + '" stroke-width="3"/><path d="M14 38q36-26 72 0q-6 34-36 50Q20 72 14 38z" fill="#f59a4b" stroke="' + INK + '" stroke-width="3"/><path d="M28 58q22 32 44 0q-10 26-22 30-12-4-22-30z" fill="#fff"/><circle cx="37" cy="48" r="4" fill="' + INK + '"/><circle cx="63" cy="48" r="4" fill="' + INK + '"/><circle cx="50" cy="70" r="5" fill="' + INK + '"/>',
    frog: '<circle cx="32" cy="28" r="14" fill="#7cc96b" stroke="' + INK + '" stroke-width="3"/><circle cx="68" cy="28" r="14" fill="#7cc96b" stroke="' + INK + '" stroke-width="3"/><circle cx="32" cy="28" r="6" fill="' + INK + '"/><circle cx="68" cy="28" r="6" fill="' + INK + '"/><ellipse cx="50" cy="62" rx="40" ry="28" fill="#8fd67d" stroke="' + INK + '" stroke-width="3"/><path d="M30 66q20 14 40 0" stroke="' + INK + '" stroke-width="3" fill="none" stroke-linecap="round"/><circle cx="26" cy="58" r="5" fill="#f7a8b8"/><circle cx="74" cy="58" r="5" fill="#f7a8b8"/>',
    pirate: '<circle cx="50" cy="58" r="32" fill="#f3c9a0" stroke="' + INK + '" stroke-width="3"/><path d="M16 40q34-34 68 0z" fill="#d64545" stroke="' + INK + '" stroke-width="3"/><circle cx="62" cy="28" r="4" fill="#fff"/><circle cx="40" cy="56" r="4" fill="' + INK + '"/><path d="M54 50h14v10H54z" fill="' + INK + '"/><path d="M50 46 76 42" stroke="' + INK + '" stroke-width="2"/><path d="M40 72q10 8 20 0" stroke="' + INK + '" stroke-width="3" fill="none" stroke-linecap="round"/>'
  };
  FL.char = function (k, size) { return '<svg viewBox="0 0 100 100" role="img" aria-label="' + k + '" style="width:' + (size || 110) + 'px;max-width:100%;height:auto">' + (CH[k] || CH.fox) + '</svg>'; };
  /* a character saying something, in a speech bubble */
  /* a character turned to face a direction: 0 up, 90 right, 180 down, 270 left (so the picture matches "Ruby faces right") */
  FL.facing = function (k, deg, size) { return '<div style="display:inline-block;transform:rotate(' + (deg || 0) + 'deg);line-height:0">' + FL.char(k, size || 120) + '</div>'; };
  FL.says = function (k, words, deg) { return '<div style="display:flex;align-items:center;gap:14px;justify-content:center;flex-wrap:wrap">' + (deg ? FL.facing(k, deg, 120) : FL.char(k, 120)) + '<div style="background:#fff;border:3px solid ' + INK + ';border-radius:22px;padding:12px 18px;font-weight:800;font-size:1.25em;max-width:440px;color:' + INK + '">' + words + '</div></div>'; };

  /* little things to count */
  var THING = {
    apple: function (x, y) { return '<circle cx="' + x + '" cy="' + (y + 2) + '" r="13" fill="#e8474a" stroke="' + INK + '" stroke-width="2"/><path d="M' + x + ' ' + (y - 11) + 'q2-6 7-7" stroke="' + INK + '" stroke-width="2" fill="none"/><ellipse cx="' + (x + 6) + '" cy="' + (y - 13) + '" rx="5" ry="3" fill="#5bbf5b"/>'; },
    star: function (x, y) { var p = []; for (var i = 0; i < 10; i++) { var r = i % 2 ? 6 : 14, a = (i * 36 - 90) * Math.PI / 180; p.push((x + r * Math.cos(a)).toFixed(1) + ',' + (y + r * Math.sin(a)).toFixed(1)); } return '<polygon points="' + p.join(' ') + '" fill="#ffd166" stroke="' + INK + '" stroke-width="2" stroke-linejoin="round"/>'; },
    fish: function (x, y) { return '<ellipse cx="' + x + '" cy="' + y + '" rx="13" ry="9" fill="#4aa8ff" stroke="' + INK + '" stroke-width="2"/><path d="M' + (x + 11) + ' ' + y + 'l10-8v16z" fill="#4aa8ff" stroke="' + INK + '" stroke-width="2"/><circle cx="' + (x - 6) + '" cy="' + (y - 2) + '" r="2" fill="' + INK + '"/>'; },
    duck: function (x, y) { return '<ellipse cx="' + x + '" cy="' + (y + 4) + '" rx="13" ry="9" fill="#ffd84d" stroke="' + INK + '" stroke-width="2"/><circle cx="' + (x - 8) + '" cy="' + (y - 6) + '" r="7" fill="#ffd84d" stroke="' + INK + '" stroke-width="2"/><path d="M' + (x - 15) + ' ' + (y - 6) + 'l-7 2 7 2z" fill="#ff9a3c"/><circle cx="' + (x - 9) + '" cy="' + (y - 8) + '" r="1.6" fill="' + INK + '"/>'; },
    balloon: function (x, y) { return '<ellipse cx="' + x + '" cy="' + (y - 3) + '" rx="11" ry="13" fill="' + pick(['#ef5b5b', '#4aa8ff', '#7cc96b', '#c48bf2']) + '" stroke="' + INK + '" stroke-width="2"/><path d="M' + x + ' ' + (y + 10) + 'q-3 6 0 10" stroke="' + INK + '" stroke-width="1.5" fill="none"/>'; },
    car: function (x, y) { return '<rect x="' + (x - 14) + '" y="' + (y - 4) + '" width="28" height="11" rx="4" fill="#ef5b5b" stroke="' + INK + '" stroke-width="2"/><path d="M' + (x - 8) + ' ' + (y - 4) + 'l4-7h9l4 7" fill="#bfe3ff" stroke="' + INK + '" stroke-width="2"/><circle cx="' + (x - 8) + '" cy="' + (y + 8) + '" r="4" fill="' + INK + '"/><circle cx="' + (x + 8) + '" cy="' + (y + 8) + '" r="4" fill="' + INK + '"/>'; },
    flower: function (x, y) { var s = ''; for (var i = 0; i < 5; i++) { var a = i * 72 * Math.PI / 180; s += '<circle cx="' + (x + 7 * Math.cos(a)).toFixed(1) + '" cy="' + (y + 7 * Math.sin(a)).toFixed(1) + '" r="6" fill="#f7a8d8" stroke="' + INK + '" stroke-width="1.5"/>'; } return s + '<circle cx="' + x + '" cy="' + y + '" r="5" fill="#ffd166" stroke="' + INK + '" stroke-width="1.5"/>'; },
    cake: function (x, y) { return '<path d="M' + (x - 13) + ' ' + (y + 4) + 'l3 11h20l3-11z" fill="#ffb3c7" stroke="' + INK + '" stroke-width="2"/><path d="M' + (x - 14) + ' ' + (y + 4) + 'q0-12 14-12t14 12z" fill="#fff1c9" stroke="' + INK + '" stroke-width="2"/><circle cx="' + x + '" cy="' + (y - 10) + '" r="4" fill="#ef5b5b" stroke="' + INK + '" stroke-width="1.5"/>'; },
    sweet: function (x, y) { return '<path d="M' + (x - 18) + ' ' + (y - 7) + 'l8 7-8 7zM' + (x + 18) + ' ' + (y - 7) + 'l-8 7 8 7z" fill="#c48bf2" stroke="' + INK + '" stroke-width="1.5"/><circle cx="' + x + '" cy="' + y + '" r="10" fill="#c48bf2" stroke="' + INK + '" stroke-width="2"/>'; }
  };
  FL.THINGS = Object.keys(THING); FL.THING = THING; FL.CH = CH;
  /* n things in rows of 5 (so they are easy to count), up to 10 a row */
  FL.things = function (n, kind, perRow) {
    kind = THING[kind] ? kind : 'apple'; perRow = perRow || (n > 10 ? 10 : 5);
    var rows = Math.ceil(n / perRow) || 1, w = Math.min(n, perRow) * 36 + (Math.min(n, perRow) > 5 ? 12 : 0) + 16, h = rows * 38 + 10, s = '';
    for (var i = 0; i < n; i++) { var r = Math.floor(i / perRow), c = i % perRow; s += '<g class="fl-it" data-k="' + kind + '">' + THING[kind](24 + c * 36 + (c >= 5 ? 12 : 0), 26 + r * 38) + '</g>'; }
    return svg(Math.max(w, 60), h, n + ' ' + kind + 's', s, Math.max(w, 60) * 1.4);
  };
  /* two groups side by side with a plus sign */
  FL.groups = function (a, b, kind, sign) {
    return '<div style="display:flex;align-items:center;justify-content:center;gap:12px;flex-wrap:wrap"><div style="max-width:220px">' + FL.things(a, kind, 5) + '</div><b style="font-size:2em">' + (sign || '+') + '</b><div style="max-width:220px">' + FL.things(b, kind, 5) + '</div></div>';
  };
  /* a ten-frame with n red counters (and m blue ones after them) */
  FL.frame = function (n, m, cells) {
    cells = cells || 10; var cols = 5, rows = Math.ceil(cells / 5), s = '';
    for (var i = 0; i < cells; i++) {
      var r = Math.floor(i / cols), c = i % cols, x = 10 + c * 46, y = 10 + r * 46;
      s += '<rect x="' + x + '" y="' + y + '" width="44" height="44" fill="#fff" stroke="' + INK + '" stroke-width="2.5"/>';
      if (i < n) s += '<circle cx="' + (x + 22) + '" cy="' + (y + 22) + '" r="15" fill="#ef5b5b" stroke="' + INK + '" stroke-width="2"/>';
      else if (i < n + (m || 0)) s += '<circle cx="' + (x + 22) + '" cy="' + (y + 22) + '" r="15" fill="#4aa8ff" stroke="' + INK + '" stroke-width="2"/>';
    }
    return svg(20 + cols * 46, 20 + rows * 46, 'A ten-frame showing ' + n + (m ? ' and ' + m : ''), s, 300);
  };
  /* a number track from lo to hi; mark: numbers to circle; hops: [from, to] arrows */
  FL.track = function (lo, hi, mark, hops, gap, unit) {
    var n = hi - lo + 1, step = gap || Math.max(30, Math.min(52, 620 / n)), w = n * step + 20, s = '';
    for (var i = 0; i < n; i++) {
      var v = lo + i, x = 10 + i * step, on = (mark || []).indexOf(v) > -1;
      s += '<rect x="' + x + '" y="40" width="' + (step - 4) + '" height="36" rx="7" fill="' + (on ? '#ffd166' : '#fff') + '" stroke="' + INK + '" stroke-width="2"/>' + tx(x + (step - 4) / 2, 64, v + (unit || ''), step > 36 ? (unit ? 15 : 17) : (unit ? 11 : 13));
    }
    (hops || []).forEach(function (hp) {
      var a = 10 + (hp[0] - lo) * step + (step - 4) / 2, b = 10 + (hp[1] - lo) * step + (step - 4) / 2;
      s += '<path d="M' + a + ' 38 Q' + ((a + b) / 2) + ' ' + (hp[2] ? 0 : 6) + ' ' + b + ' 38" fill="none" stroke="#7a1fc2" stroke-width="2.6" marker-end="url(#flA)"/>';
    });
    return svg(w, 84, 'A number track from ' + lo + ' to ' + hi, '<defs><marker id="flA" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0 8 4 0 8z" fill="#7a1fc2"/></marker></defs>' + s, Math.min(w, 680));
  };
  /* the same number track for money: every number shows p, like 15p */
  FL.trackP = function (lo, hi, mark, hops) { return FL.track(lo, hi, mark, hops, null, 'p'); };
  /* tens sticks and ones cubes */
  FL.tensOnes = function (t, o) {
    var s = '', x = 10;
    for (var i = 0; i < t; i++) { for (var j = 0; j < 10; j++) s += '<rect x="' + x + '" y="' + (10 + j * 15) + '" width="15" height="15" fill="#4aa8ff" stroke="' + INK + '" stroke-width="1.5"/>'; x += 24; }
    x += 10;
    for (var k = 0; k < o; k++) s += '<rect x="' + (x + (k % 3) * 20) + '" y="' + (130 - Math.floor(k / 3) * 20) + '" width="15" height="15" fill="#ffd166" stroke="' + INK + '" stroke-width="1.5"/>';
    var w = x + 70; return svg(w, 165, t + ' tens and ' + o + ' ones', s, Math.min(w * 1.3, 520));
  };

  /* coins and notes (UK) */
  var COIN = {
    1: ['1p', '#d98b4a', 18, 0], 2: ['2p', '#d98b4a', 22, 0], 5: ['5p', '#cfd5de', 16, 0], 10: ['10p', '#cfd5de', 22, 0],
    20: ['20p', '#cfd5de', 19, 7], 50: ['50p', '#cfd5de', 24, 7], 100: ['£1', '#f2c94c', 21, 12], 200: ['£2', '#f2c94c', 24, 0]
  };
  function coinSvg(v, cx, cy) {
    var c = COIN[v]; if (!c) {   /* a note */
      var col = { 500: '#7fc7c2', 1000: '#e8956b', 2000: '#b78ad6', 5000: '#ef8a8a', 10000: '#9fb4e8' }[v] || '#b78ad6';   /* £5, £10, £20, £50, £100 notes */
      return '<rect x="' + (cx - 38) + '" y="' + (cy - 21) + '" width="76" height="42" rx="5" fill="' + col + '" stroke="' + INK + '" stroke-width="2"/>' + tx(cx, cy + 6, '£' + v / 100, 14);
    }
    var r = c[2], s;
    if (c[3]) { var p = []; for (var i = 0; i < c[3]; i++) { var a = (i * 360 / c[3] - 90) * Math.PI / 180; p.push((cx + r * Math.cos(a)).toFixed(1) + ',' + (cy + r * Math.sin(a)).toFixed(1)); } s = '<polygon points="' + p.join(' ') + '" fill="' + c[1] + '" stroke="' + INK + '" stroke-width="2"/>'; }
    else s = '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="' + c[1] + '" stroke="' + INK + '" stroke-width="2"/>';
    if (v === 200) s += '<circle cx="' + cx + '" cy="' + cy + '" r="15" fill="#cfd5de" stroke="' + INK + '" stroke-width="1.5"/>';
    return s + tx(cx, cy + 5, c[0], r > 18 ? 14 : 12);
  }
  FL.coins = function (list, max) {
    var x = 10, s = '', h = 60; list.forEach(function (v) { var w = COIN[v] ? COIN[v][2] * 2 + 8 : 84; s += coinSvg(v, x + w / 2, 30); x += w; });
    return svg(x + 10, h, 'Coins: ' + list.map(FL.money).join(', '), s, max || Math.min((x + 10) * 1.5, 620));
  };
  FL.money = function (p) { return p >= 100 ? '£' + (p % 100 ? (p / 100).toFixed(2) : p / 100) : p + 'p'; };

  /* 2D shapes and 3D objects */
  var SH = {
    circle: function (c) { return '<circle cx="50" cy="50" r="38" fill="' + c + '" stroke="' + INK + '" stroke-width="3"/>'; },
    triangle: function (c) { return '<polygon points="50,10 90,86 10,86" fill="' + c + '" stroke="' + INK + '" stroke-width="3" stroke-linejoin="round"/>'; },
    square: function (c) { return '<rect x="14" y="14" width="72" height="72" fill="' + c + '" stroke="' + INK + '" stroke-width="3"/>'; },
    rectangle: function (c) { return '<rect x="4" y="26" width="92" height="50" fill="' + c + '" stroke="' + INK + '" stroke-width="3"/>'; },
    pentagon: function (c) { return poly(5, c); }, hexagon: function (c) { return poly(6, c); }, octagon: function (c) { return poly(8, c); },
    oval: function (c) { return '<ellipse cx="50" cy="50" rx="44" ry="30" fill="' + c + '" stroke="' + INK + '" stroke-width="3"/>'; }
  };
  function poly(n, c) { var p = []; for (var i = 0; i < n; i++) { var a = (i * 360 / n - 90 + (n === 8 ? 22.5 : 0)) * Math.PI / 180; p.push((50 + 40 * Math.cos(a)).toFixed(1) + ',' + (52 + 40 * Math.sin(a)).toFixed(1)); } return '<polygon points="' + p.join(' ') + '" fill="' + c + '" stroke="' + INK + '" stroke-width="3" stroke-linejoin="round"/>'; }
  var SOL = {
    cube: '<path d="M22 38 52 24 82 38 52 52z" fill="#bfe3ff" stroke="' + INK + '" stroke-width="3" stroke-linejoin="round"/><path d="M22 38v36l30 14V52z" fill="#7cc4ff" stroke="' + INK + '" stroke-width="3" stroke-linejoin="round"/><path d="M82 38v36L52 88V52z" fill="#4aa8ff" stroke="' + INK + '" stroke-width="3" stroke-linejoin="round"/>',
    cuboid: '<path d="M8 40 38 28 94 40 64 52z" fill="#ffe08a" stroke="' + INK + '" stroke-width="3" stroke-linejoin="round"/><path d="M8 40v30l56 14V52z" fill="#ffd166" stroke="' + INK + '" stroke-width="3" stroke-linejoin="round"/><path d="M94 40v30L64 84V52z" fill="#f2b33d" stroke="' + INK + '" stroke-width="3" stroke-linejoin="round"/>',
    sphere: '<circle cx="50" cy="52" r="38" fill="#ef7f7f" stroke="' + INK + '" stroke-width="3"/><ellipse cx="38" cy="38" rx="11" ry="7" fill="#ffd2d2"/><path d="M12 52q38 18 76 0" fill="none" stroke="' + INK + '" stroke-width="2" stroke-dasharray="5 4"/>',
    cylinder: '<path d="M22 22v56a28 10 0 0 0 56 0V22" fill="#8fd67d" stroke="' + INK + '" stroke-width="3"/><ellipse cx="50" cy="22" rx="28" ry="10" fill="#c3ecb8" stroke="' + INK + '" stroke-width="3"/>',
    cone: '<path d="M50 8 20 78a30 10 0 0 0 60 0z" fill="#ffb03b" stroke="' + INK + '" stroke-width="3" stroke-linejoin="round"/><path d="M20 78a30 10 0 0 0 60 0" fill="none" stroke="' + INK + '" stroke-width="3"/>',
    pyramid: '<path d="M50 8 14 74 56 88z" fill="#e9cfa9" stroke="' + INK + '" stroke-width="3" stroke-linejoin="round"/><path d="M50 8 56 88 88 66z" fill="#d1ae7e" stroke="' + INK + '" stroke-width="3" stroke-linejoin="round"/>'
  };
  var COLS = ['#ffd166', '#7cc4ff', '#8fd67d', '#f7a8d8', '#c48bf2', '#ffb03b'];
  FL.shape = function (k, col, size) { var c = col || pick(COLS); return '<svg viewBox="0 0 100 100" role="img" aria-label="' + k + '" style="width:' + (size || 110) + 'px;max-width:100%;height:auto">' + (SH[k] ? SH[k](c) : SOL[k] || '') + '</svg>'; };
  FL.shapeRow = function (ks, size) { return '<div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;align-items:flex-end">' + ks.map(function (k, i) { return '<div style="text-align:center;font-weight:800">' + FL.shape(k, COLS[i % COLS.length], size || 90) + '<div>' + k + '</div></div>'; }).join('') + '</div>'; };
  FL.SHAPES2 = Object.keys(SH); FL.SOLIDS = Object.keys(SOL);

  /* tally marks for n */
  FL.tally = function (n) {
    var s = '', x = 10;
    for (var g = 0; g < Math.ceil(n / 5); g++) {
      var k = Math.min(5, n - g * 5);
      for (var i = 0; i < Math.min(k, 4); i++) s += '<line x1="' + (x + i * 12) + '" y1="8" x2="' + (x + i * 12) + '" y2="52" stroke="' + INK + '" stroke-width="4" stroke-linecap="round"/>';
      if (k === 5) s += '<line x1="' + (x - 6) + '" y1="46" x2="' + (x + 42) + '" y2="14" stroke="#d64545" stroke-width="4" stroke-linecap="round"/>';
      x += 66;
    }
    return svg(Math.max(x, 60), 60, n + ' tally marks', s, Math.max(x, 60) * 1.4);
  };
  /* a pictogram: rows of [label, count, thing] */
  FL.picto = function (rows) {
    var s = '', w = 0;
    rows.forEach(function (r, i) { var y = 30 + i * 42; s += tx(70, y + 6, r[0], 16, null, 800, 'end'); for (var k = 0; k < r[1]; k++) s += THING[r[2] || 'apple'](100 + k * 34, y); w = Math.max(w, 100 + r[1] * 34); });
    s += tx(10, rows.length * 42 + 36, 'Key: each picture stands for 1', 13, null, 700, 'start');
    return svg(w + 10, rows.length * 42 + 44, 'A pictogram', s, Math.min((w + 10) * 1.3, 620));
  };

  /* ---------- activities for young children ---------- */
  var CHEER = ['Brilliant!', 'Super!', 'Well done!', 'You did it!', 'Amazing!', 'Great counting!'], TRY = ['Nearly! Try again.', 'Not quite. Have another go.', 'Good try! Look again.'];
  var CSS = document.createElement('style');
  CSS.textContent = '.fl-tbl .tbl{font-size:1rem;margin:0 auto;border-collapse:collapse}.fl-tbl .tbl td,.fl-tbl .tbl th{padding:6px 12px;font-size:1rem}.fl-big{font-size:1.35rem;font-weight:800;text-align:center;margin:8px 0}' +
    '.fl-cells{display:grid;grid-template-columns:repeat(5,minmax(44px,64px));gap:6px;justify-content:center;margin:10px auto}' +
    '.fl-cell{aspect-ratio:1;border:3px solid #2b2340;border-radius:10px;background:#fff;cursor:pointer;display:grid;place-items:center;padding:0}' +
    '.fl-cell.on::after{content:"";width:68%;height:68%;border-radius:50%;background:#ef5b5b;border:2px solid #2b2340}' +
    '.fl-coins{display:flex;flex-wrap:wrap;gap:8px;justify-content:center;margin:10px 0}' +
    '.fl-coins button{border:0;background:transparent;padding:2px;cursor:pointer;min-width:56px;min-height:56px}' +
    '.fl-purse{min-height:76px;border:3px dashed #9c6a45;border-radius:18px;background:#fff6e6;display:flex;flex-wrap:wrap;gap:4px;align-items:center;justify-content:center;padding:6px;margin:8px auto;max-width:560px}' +
    '.fl-purse button{border:0;background:transparent;padding:0;cursor:pointer}' +
    '.fl-row{display:flex;gap:10px;flex-wrap:wrap;justify-content:center;margin:10px 0}' +
    '.fl-stars{font-size:2rem;text-align:center;letter-spacing:4px}';
  document.head.appendChild(CSS);
  function finish(host, ctx, score, n, again) {
    var st = ''; for (var i = 0; i < n; i++) st += i < score ? '⭐' : '☆';
    host.innerHTML = '<div class="fl-stars" aria-label="' + score + ' out of ' + n + '">' + st + '</div><p class="fl-big say">' + (score === n ? 'Amazing! You got them all!' : score >= n - 1 ? 'Super work!' : 'Well done! Have another go to get more stars.') + '</p><div class="fl-row"><button class="btn" type="button" data-again>Play again</button></div>';
    host.querySelector('[data-again]').addEventListener('click', again);
    if (ctx && ctx.complete) ctx.complete();
  }
  /* tap-the-answer rounds: make(round) gives { vis, q, answer, wrong, explain } */
  FL.rounds = function (make, n) { return BT.rounds({ rounds: n || 5, make: make }); };

  /* fill a ten-frame (or two) to make a number */
  FL.fillFrame = function (targets, cells) {
    return function (host, ctx) {
      var i, score, want, on, tries;
      function draw(msg, cls) {
        var c = cells || (want > 10 ? 20 : 10), h = '';
        for (var k = 0; k < c; k++) h += '<button type="button" class="fl-cell' + (on[k] ? ' on' : '') + '" data-c="' + k + '" aria-label="Box ' + (k + 1) + (on[k] ? ', counter' : ', empty') + '"></button>';
        host.innerHTML = '<div class="gm-top"><span class="gm-pill">Round ' + (i + 1) + ' of ' + targets.length + '</span><span class="gm-pill">⭐ ' + score + '</span></div>' +
          '<p class="fl-big say">Tap the boxes to put <b>' + want + '</b> counters in the frame.</p><div class="fl-cells">' + h + '</div>' +
          '<p class="fl-big" aria-live="polite">Counters: ' + on.filter(Boolean).length + '</p><div class="fbk ' + (cls || '') + '" aria-live="polite" style="min-height:2.4em;text-align:center">' + (msg || '') + '</div>' +
          '<div class="fl-row"><button class="btn" type="button" data-chk>Check</button><button class="btn ghost" type="button" data-clr>Clear</button></div>';
        host.querySelectorAll('[data-c]').forEach(function (b) { b.addEventListener('click', function () { var k = +b.getAttribute('data-c'); on[k] = !on[k]; draw(); }); });
        host.querySelector('[data-clr]').addEventListener('click', function () { on = []; draw(); });
        host.querySelector('[data-chk]').addEventListener('click', function () {
          var got = on.filter(Boolean).length;
          if (got === want) { if (!tries) score++; i++; if (i >= targets.length) return finish(host, ctx, score, targets.length, start); setTimeout(function () { next(); }, 900); draw('<b>' + pick(CHEER) + '</b> That is ' + want + '.', 'ok'); }
          else { tries++; draw('<b>' + pick(TRY) + '</b> You have ' + got + '. You need ' + want + '. ' + (got < want ? 'Add ' + (want - got) + ' more.' : 'Take ' + (got - want) + ' away.'), 'no'); }
        });
      }
      function next() { want = targets[i]; on = []; tries = 0; draw(); }
      function start() { i = 0; score = 0; targets = shuffle(targets.slice()); next(); }
      start();
    };
  };

  /* put coins in the purse to make an amount */
  FL.purse = function (amounts, coins) {
    return function (host, ctx) {
      var i, score, want, got, tries, list = amounts.slice();
      function total() { return got.reduce(function (a, b) { return a + b; }, 0); }
      function draw(msg, cls) {
        host.innerHTML = '<div class="gm-top"><span class="gm-pill">Round ' + (i + 1) + ' of ' + list.length + '</span><span class="gm-pill">⭐ ' + score + '</span></div>' +
          FL.says('mouse', 'Please pay me <b>' + FL.money(want) + '</b>!') +
          '<p class="fl-big">Tap coins to put them in the purse.</p><div class="fl-coins">' + coins.map(function (c) { return '<button type="button" data-add="' + c + '" aria-label="Add ' + FL.money(c) + '">' + FL.coins([c], 90) + '</button>'; }).join('') + '</div>' +
          '<div class="fl-purse" aria-label="Purse">' + (got.length ? got.map(function (c, k) { return '<button type="button" data-rm="' + k + '" aria-label="Take out ' + FL.money(c) + '">' + FL.coins([c], 70) + '</button>'; }).join('') : '<span class="note" style="margin:0">The purse is empty</span>') + '</div>' +
          '<p class="fl-big" aria-live="polite">In the purse: ' + FL.money(total()) + '</p><div class="fbk ' + (cls || '') + '" aria-live="polite" style="min-height:2.4em;text-align:center">' + (msg || '') + '</div>' +
          '<div class="fl-row"><button class="btn" type="button" data-chk>Pay</button><button class="btn ghost" type="button" data-clr>Empty the purse</button></div>';
        host.querySelectorAll('[data-add]').forEach(function (b) { b.addEventListener('click', function () { got.push(+b.getAttribute('data-add')); draw(); }); });
        host.querySelectorAll('[data-rm]').forEach(function (b) { b.addEventListener('click', function () { got.splice(+b.getAttribute('data-rm'), 1); draw(); }); });
        host.querySelector('[data-clr]').addEventListener('click', function () { got = []; draw(); });
        host.querySelector('[data-chk]').addEventListener('click', function () {
          var t = total();
          if (t === want) { if (!tries) score++; i++; if (i >= list.length) return finish(host, ctx, score, list.length, start); draw('<b>' + pick(CHEER) + '</b> ' + got.map(FL.money).join(' + ') + ' = ' + FL.money(want) + '.', 'ok'); setTimeout(next, 1100); }
          else { tries++; draw('<b>' + pick(TRY) + '</b> ' + (t < want ? 'You need ' + FL.money(want - t) + ' more.' : 'That is too much. Take a coin out.'), 'no'); }
        });
      }
      function next() { want = list[i]; got = []; tries = 0; draw(); }
      function start() { i = 0; score = 0; list = shuffle(amounts.slice()); next(); }
      start();
    };
  };

  /* move the clock hands to show a time */
  FL.setClock = function (times, step) {
    return function (host, ctx) {
      var i, score, want, h, m, tries;
      function name(hh, mm) { return mm === 0 ? hh + " o’clock" : mm === 30 ? 'half past ' + hh : mm === 15 ? 'quarter past ' + hh : mm === 45 ? 'quarter to ' + (hh % 12 + 1) : mm < 30 ? mm + ' past ' + hh : (60 - mm) + ' to ' + (hh % 12 + 1); }
      function draw(msg, cls) {
        host.innerHTML = '<div class="gm-top"><span class="gm-pill">Round ' + (i + 1) + ' of ' + times.length + '</span><span class="gm-pill">⭐ ' + score + '</span></div>' +
          FL.says('owl', 'Can you make the clock say <b>' + name(want[0], want[1]) + '</b>?') +
          '<div style="max-width:220px;margin:8px auto">' + BT.sv.clock(h, m) + '</div>' +
          '<div class="fl-row"><button class="btn ghost" type="button" data-h="-1">◀ Hour</button><button class="btn ghost" type="button" data-h="1">Hour ▶</button></div>' +
          '<div class="fl-row"><button class="btn ghost" type="button" data-m="-1">◀ Minutes</button><button class="btn ghost" type="button" data-m="1">Minutes ▶</button></div>' +
          '<div class="fbk ' + (cls || '') + '" aria-live="polite" style="min-height:2.4em;text-align:center">' + (msg || '') + '</div><div class="fl-row"><button class="btn" type="button" data-chk>Check</button></div>';
        host.querySelectorAll('[data-h]').forEach(function (b) { b.addEventListener('click', function () { h = ((h - 1 + +b.getAttribute('data-h') + 12) % 12) + 1; draw(); }); });
        host.querySelectorAll('[data-m]').forEach(function (b) { b.addEventListener('click', function () { m = (m + (+b.getAttribute('data-m')) * (step || 30) + 60) % 60; draw(); }); });
        host.querySelector('[data-chk]').addEventListener('click', function () {
          if (h === want[0] && m === want[1]) { if (!tries) score++; i++; if (i >= times.length) return finish(host, ctx, score, times.length, start); draw('<b>' + pick(CHEER) + '</b> The clock says ' + name(h, m) + '.', 'ok'); setTimeout(next, 1100); }
          else { tries++; draw('<b>' + pick(TRY) + '</b> ' + (m !== want[1] ? (want[1] === 0 ? 'For o’clock, the long hand points to 12.' : want[1] === 30 ? 'For half past, the long hand points to 6.' : 'Look at where the long hand should point.') : 'The short hand shows the hour.'), 'no'); }
        });
      }
      function next() { want = times[i]; h = 12; m = 0; tries = 0; draw(); }
      function start() { i = 0; score = 0; times = shuffle(times.slice()); next(); }
      start();
    };
  };

  /* ---------- practice questions (P3 and P4) ---------- */
  FL.Q = function (tag, text, answer, hints, explain, pic) { return { type: 'input', tag: tag, text: text, answer: String(answer), hints: hints || ['Take it one step at a time.'], explain: explain || '', pic: pic || '' }; };
  FL.MC = function (tag, text, answer, wrong, hints, explain, pic, keep) {
    var o = [String(answer)]; (wrong || []).forEach(function (w) { w = String(w); if (o.indexOf(w) < 0 && o.length < 4) o.push(w); });
    return { type: 'mc', tag: tag, text: text, answer: String(answer), options: keep ? BT.orderOpts(o, keep) : shuffle(o), hints: hints || ['Look carefully at each choice.'], explain: explain || '', pic: pic || '' };
  };
  /* gens: { low: [makers], medium: [...], high: [...] }; each set is 20 questions at the chosen level */
  function practiseStep(gens) {
    return { id: 'practise', label: 'Practise', type: 'quiz', best: true, tag: 'Your turn', title: 'Practise', lead: '100 questions in each set at your level. Use the hints one at a time.',
      make: function () {
        var lv = (S.app && S.app.store.settings.difficulty) || 'medium', list = gens[lv] || gens.medium, want = S.__wantCount || 100, out = [], seen = {}, tries = 0;
        while (out.length < want && tries < want * 40) { tries++; var q = pick(list)(), key = q.text + '|' + q.answer; if (seen[key] && tries < want * 30) continue; seen[key] = 1; out.push(q); }
        return out;
      } };
  }
  /* the same workbook question can be taught again in a later year: keep its words, but give it its own
     lesson (and its own "Let's go deeper" note) by adding the year to the internal name only */
  /* P4 follows the P5 format: a 4-question warm-up and 30 real-life problems, all at First level depth */
  function warmStep(gens) { return { id: 'warm', label: 'Warm-up', type: 'quiz', tag: 'Warm-up', title: 'Mental maths warm-up', lead: 'Four quick questions to wake up your number brain.', doneLabel: 'On to the practice',
    make: function () { var fs = shuffle((gens.low || []).slice()), out = []; for (var i = 0; out.length < 4 && i < 12; i++) out.push(fs[i % fs.length]()); return out; } }; }
  function lifeStep(life, lead, n) { return { id: 'practical', label: 'Real-life problem', type: 'quiz', tag: 'Real-life problems', title: 'Real-life problems', lead: '30 situation questions on ' + lead + '. Think about which skill from this topic the problem needs. Low, Medium and High change how many steps each problem has.',
    make: function () { var lv = (S.app && S.app.store.settings.difficulty) || 'medium', list = life[lv] || life.medium, out = [], seen = {}, tries = 0, want = Math.max(30, S.__wantCount || 30);
      while (out.length < 30 && tries < 900) { tries++; var q = pick(list)(), key = q.text + '|' + q.answer; if (seen[key]) continue; seen[key] = 1; out.push(q); }
      if (out.length < want) { var ex = (FL.lifeExtra && FL.lifeExtra[n] && FL.lifeExtra[n][lv]) || [], all = list.concat(ex); tries = 0;
        while (out.length < want && tries < 6000) { tries++; var q2 = pick(all)(), k2 = q2.text + '|' + q2.answer; if (seen[k2]) continue; seen[k2] = 1; out.push(q2); } }
      return out; } }; }
  FL.LS = function (title, year, goal, o) {
    var id = title + ' \u00b7 ' + year; BT.QT = BT.QT || {}; BT.QT[id] = title;
    var ep = BT.L.lesson(id, goal, o);
    (ep.scenes || []).forEach(function (sc) { if (sc.sub === id) sc.sub = title; });
    return ep;
  };

  /* ---------- making a topic ---------- */
  FL.topic = function (o) {
    if (S.topics[o.n]) return;
    FL.GENS = FL.GENS || {}; if (o.gens) FL.GENS[o.n] = o.gens;
    S.addTopic({ n: o.n, base: o.n, year: o.year, short: o.short, title: o.title, blurb: o.blurb, gens: {}, steps: o.gens && o.year !== 'P3' ? (o.life ? [warmStep(o.gens), practiseStep(o.gens), lifeStep(o.life, o.lifeLead || 'this topic', o.n)] : [practiseStep(o.gens)]) : [] });   /* P3 has no practice, only lessons and activities */
    if (o.lessons) BT.L.use(o.n, o.lessons);
    /* First level: the story and story-based lessons play in the Watch player, like P5 to P7 (see fl_story.js) */
    if (o.story) FL.toWatch(o.n, o.story, o.learn);
    (o.acts || []).concat(o.more || []).forEach(function (a, k) { BT.addLab(o.n, 'fl' + (k + 1), a[0], a[1], a[2]); });
  };
  /* turn a question maker (FL.Q or FL.MC) into a hands-on activity of 6 rounds with big answer buttons */
  function wrongFor(ans) {
    var n = Number(ans), out = [];
    if (String(ans).trim() !== '' && !isNaN(n)) { [n + 1, n - 1, n + 10, n - 10, n + 2, n - 2, n * 2].forEach(function (x) { if (x >= 0 && x !== n && out.indexOf(String(x)) < 0) out.push(String(x)); }); return shuffle(out).slice(0, 3); }
    var m = /^(\d+)\/(\d+)$/.exec(ans); if (m) { var a = +m[1], b = +m[2]; return [b + '/' + a, (a + 1 < b ? a + 1 : a - 1) + '/' + b, a + '/' + (b + 1)].filter(function (x) { return x !== ans; }); }
    var p = /^(\d+)p$/.exec(ans); if (p) return wrongFor(+p[1]).map(function (x) { return x + 'p'; });
    var c = /^(\d+) (cm|kg|m|litres|°C)$/.exec(ans); if (c) return wrongFor(+c[1]).map(function (x) { return x + ' ' + c[2]; });
    return [];
  }
  FL.genAct = function (fn, k) {
    return FL.rounds(function () {
      var q = fn(), wrong = q.options ? q.options.filter(function (o) { return String(o) !== String(q.answer); }) : wrongFor(String(q.answer));
      if (!wrong.length) wrong = wrongFor(String(q.answer));
      return { vis: q.pic ? '<div style="text-align:center">' + q.pic + '</div>' + '<p class="fl-big">' + q.text + '</p>' : FL.says(k || 'owl', q.text), q: q.pic ? 'Choose the answer.' : 'Choose the answer.', answer: String(q.answer), wrong: wrong, explain: q.explain || '', keepOrder: q.options && /^(Yes|No)$/.test(q.options[0]) ? true : undefined };
    }, 6);
  };
  FL.r = rnd; FL.pick = pick; FL.shuffle = shuffle;
})();
