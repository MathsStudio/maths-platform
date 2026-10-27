/* graphs.js: reading information from graphs, and drawing graphs.
   1. Question makers that show a line graph, conversion graph, distance-time graph, straight-line
      graph, scatter graph or a grid with labelled points, and ask about it.
   2. A "Plot it" activity: tap a grid to draw a bar chart, plot points, a line graph or a straight line.
   Both are added only to the topics where they fit (data, algebra and lines, shape and coordinates, measures and speed). */
(function () {
  'use strict';
  var S = Studio, H = S.h;
  function $(id) { return document.getElementById(id); }
  function rnd(a, b) { return a + Math.floor(Math.random() * (b - a + 1)); }
  function pick(a) { return a[rnd(0, a.length - 1)]; }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = rnd(0, i), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function sg(n) { return n < 0 ? '−' + Math.abs(n) : String(n); }
  function Q(o) { o.type = o.type || 'input'; return o; }

  /* ---------- drawing ---------- */
  var W = 360, HT = 310, L = 40, R = 14, T = 14, B = 36;
  function geo(c) {
    var pw = W - L - R, ph = HT - T - B;
    return {
      px: function (x) { return L + (x - c.x0) / (c.x1 - c.x0) * pw; },
      py: function (y) { return T + (1 - (y - c.y0) / (c.y1 - c.y0)) * ph; },
      pw: pw, ph: ph
    };
  }
  /* cfg: x0 x1 y0 y1 xs ys xlabels[] pts[{x,y,label,color,ring}] line[[x,y]..] bars[{x,h,color}] xt yt (axis titles) */
  function gridSvg(c) {
    var g = geo(c), s = '<svg viewBox="0 0 ' + W + ' ' + HT + '" role="img" aria-label="' + (c.aria || 'Graph') + '" style="display:block;width:100%;max-width:420px;margin:0 auto;touch-action:manipulation" id="' + (c.id || 'gSvg') + '">';
    var xs = c.xs || 1, ys = c.ys || 1, x, y, lab;
    for (x = c.x0; x <= c.x1 + 1e-9; x += xs) { s += '<line x1="' + g.px(x) + '" x2="' + g.px(x) + '" y1="' + T + '" y2="' + (HT - B) + '" style="stroke:var(--line);stroke-width:' + (x === 0 ? 0 : 1) + '"/>'; }
    for (y = c.y0; y <= c.y1 + 1e-9; y += ys) { s += '<line x1="' + L + '" x2="' + (W - R) + '" y1="' + g.py(y) + '" y2="' + g.py(y) + '" style="stroke:var(--line);stroke-width:' + (y === 0 ? 0 : 1) + '"/>'; }
    if (c.y0 < 0 && c.y1 > 0) s += '<line x1="' + L + '" x2="' + (W - R) + '" y1="' + g.py(0) + '" y2="' + g.py(0) + '" style="stroke:var(--fg);stroke-width:2"/>';
    if (c.x0 < 0 && c.x1 > 0) s += '<line x1="' + g.px(0) + '" x2="' + g.px(0) + '" y1="' + T + '" y2="' + (HT - B) + '" style="stroke:var(--fg);stroke-width:2"/>';
    s += '<rect x="' + L + '" y="' + T + '" width="' + g.pw + '" height="' + g.ph + '" style="fill:none;stroke:var(--fg);stroke-width:1.5"/>';
    var step = Math.max(1, Math.ceil((c.x1 - c.x0) / 12 / xs)) * xs, ystep = Math.max(1, Math.ceil((c.y1 - c.y0) / 12 / ys)) * ys;
    for (x = c.x0; x <= c.x1 + 1e-9; x += step) { lab = c.xlabels && c.xlabels[Math.round(x - c.x0)] !== undefined ? c.xlabels[Math.round(x - c.x0)] : sg(Math.round(x * 100) / 100); s += '<text x="' + g.px(x) + '" y="' + (HT - B + 15) + '" text-anchor="middle" style="font-size:11px;fill:var(--fg)">' + lab + '</text>'; }
    for (y = c.y0; y <= c.y1 + 1e-9; y += ystep) s += '<text x="' + (L - 5) + '" y="' + (g.py(y) + 4) + '" text-anchor="end" style="font-size:11px;fill:var(--fg)">' + sg(Math.round(y * 100) / 100) + '</text>';
    if (c.xt) s += '<text x="' + (L + g.pw / 2) + '" y="' + (HT - 5) + '" text-anchor="middle" style="font-size:12px;font-weight:700;fill:var(--fg)">' + c.xt + '</text>';
    if (c.yt) s += '<text transform="translate(11 ' + (T + g.ph / 2) + ') rotate(-90)" text-anchor="middle" style="font-size:12px;font-weight:700;fill:var(--fg)">' + c.yt + '</text>';
    (c.bars || []).forEach(function (b) { var bw = g.pw / (c.x1 - c.x0) * 0.6; s += '<rect x="' + (g.px(b.x) - bw / 2) + '" y="' + g.py(b.h) + '" width="' + bw + '" height="' + (g.py(c.y0) - g.py(b.h)) + '" rx="3" style="fill:' + (b.color || '#2b62d9') + ';opacity:.9"/>'; });
    if (c.line && c.line.length > 1) s += '<polyline points="' + c.line.map(function (p) { return g.px(p[0]) + ',' + g.py(p[1]); }).join(' ') + '" style="fill:none;stroke:' + (c.lineColor || '#2b62d9') + ';stroke-width:2.5"/>';
    (c.pts || []).forEach(function (p) {
      s += '<circle cx="' + g.px(p.x) + '" cy="' + g.py(p.y) + '" r="' + (p.ring ? 7 : 5) + '" style="fill:' + (p.ring ? 'none' : (p.color || '#d62d2d')) + ';stroke:' + (p.color || '#d62d2d') + ';stroke-width:2"/>';
      if (p.label) { var right = g.px(p.x) > W - R - 28; s += '<text x="' + (g.px(p.x) + (right ? -8 : 8)) + '" y="' + (g.py(p.y) - 7) + '" text-anchor="' + (right ? 'end' : 'start') + '" style="font-size:13px;font-weight:800;fill:var(--fg)">' + p.label + '</text>'; }
    });
    return s + '</svg>';
  }
  function liveTag(a) { return a; }

  /* ---------- reading makers ---------- */
  function lvl(l) { return l === 'low' ? 0 : l === 'high' ? 2 : 1; }
  var DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

  function rdLine(l) {
    var lv = lvl(l), labels = pick([DAYS, MONTHS]), n = lv ? 6 : 5, ymax = lv === 2 ? 30 : lv === 1 ? 20 : 10, ys = lv === 2 ? 5 : lv === 1 ? 2 : 1;
    var unit = pick([['temperature', '°C', 'Temperature (°C)'], ['plants sold', '', 'Plants sold'], ['visitors', '', 'Visitors']]), vals = [], i;
    for (i = 0; i < n; i++) vals.push(rnd(1, ymax - 1) - (lv === 2 ? rnd(0, 0) : 0));
    var line = vals.map(function (v, k) { return [k, v]; }), pts = vals.map(function (v, k) { return { x: k, y: v, color: '#2b62d9' }; });
    var pic = gridSvg({ x0: 0, x1: n - 1, y0: 0, y1: ymax, xs: 1, ys: ys, xlabels: labels, pts: pts, line: line, yt: unit[2], aria: 'Line graph of ' + unit[0] + ': ' + vals.map(function (v, k) { return labels[k] + ' ' + v; }).join(', ') });
    var data = 'Line graph of ' + unit[0] + ': ' + vals.map(function (v, k) { return labels[k] + ' ' + v; }).join(', ') + '.', k = rnd(0, 2), a = rnd(0, n - 1);
    var u = unit[1] ? ' ' + unit[1] : '';
    if (k === 0) return Q({ tag: 'Reading a line graph', pic: pic, data: data, text: 'What is the value for <b>' + labels[a] + '</b> on the line graph?', answer: String(vals[a]), hints: ['Find ' + labels[a] + ' along the bottom.', 'Go straight up to the dot, then look across to the scale on the left.'], explain: 'The dot above ' + labels[a] + ' is level with ' + vals[a] + u + '.' });
    if (k === 1) { var mx = Math.max.apply(null, vals); if (vals.filter(function (v) { return v === mx; }).length > 1) return rdLine(l); var at = vals.indexOf(mx); return Q({ tag: 'Reading a line graph', pic: pic, data: data, kind: 'text', text: 'On which label is the value <b>highest</b>?', answer: labels[at], hints: ['Look for the highest dot on the graph.', 'Then read the label under it.'], explain: 'The highest point is ' + mx + u + ', above ' + labels[at] + '.' }); }
    var b = a === n - 1 ? a - 1 : a + 1, lo = Math.min(a, b), diff = Math.abs(vals[lo + 1] - vals[lo]);
    return Q({ tag: 'Reading a line graph', pic: pic, data: data, text: 'By how much does the value change between <b>' + labels[lo] + '</b> and <b>' + labels[lo + 1] + '</b>? Give the size of the change.', answer: String(diff), hints: ['Read both dots first and write the two values down.', 'Subtract the smaller from the larger.'], explain: labels[lo] + ' is ' + vals[lo] + ' and ' + labels[lo + 1] + ' is ' + vals[lo + 1] + '. The change is ' + diff + u + '.' });
  }

  function rdConv(l) {
    var lv = lvl(l), k = pick(lv === 0 ? [2, 3, 4, 5] : lv === 1 ? [3, 4, 5, 6] : [4, 6, 7, 8]), items = pick([['pizzas', '£'], ['tickets', '£'], ['notebooks', '£'], ['bags of crisps', 'p']]), xmax = 8, ymax = k * xmax;
    var ys = ymax > 40 ? 10 : ymax > 20 ? 5 : 2, line = [[0, 0], [xmax, ymax]], x = rnd(2, 7), pts = [0, 1, 2, 3, 4, 5, 6, 7, 8].map(function (v) { return { x: v, y: k * v, color: '#2b62d9' }; });
    var pic = gridSvg({ x0: 0, x1: xmax, y0: 0, y1: ymax, xs: 1, ys: ys, line: line, pts: pts, xt: 'Number of ' + items[0], yt: 'Cost (' + items[1] + ')', aria: 'Conversion graph: ' + k + ' for each one' });
    var data = 'A straight line graph from zero. Each ' + items[0].replace(/s$/, '') + ' costs ' + items[1] + k + '. Points: ' + pts.slice(0, 5).map(function (p) { return p.x + ' → ' + p.y; }).join(', ') + '.';
    if (rnd(0, 1)) return Q({ tag: 'Reading a conversion graph', pic: pic, data: data, text: 'Use the graph. What is the cost of <b>' + x + ' ' + items[0] + '</b>?', answer: String(k * x), hints: ['Find ' + x + ' along the bottom, then go up to the line.', 'Go across to the cost scale.'], explain: 'Above ' + x + ' the line is at ' + items[1] + k * x + '.' });
    return Q({ tag: 'Reading a conversion graph', pic: pic, data: data, text: 'Use the graph. How many <b>' + items[0] + '</b> can you buy for <b>' + items[1] + k * x + '</b>?', answer: String(x), hints: ['Find ' + items[1] + k * x + ' on the cost scale on the left.', 'Go across to the line, then straight down to the bottom scale.'], explain: 'At ' + items[1] + k * x + ' the line is above ' + x + ', so you can buy ' + x + '.' });
  }

  function rdDist(l) {
    var lv = lvl(l), s1 = pick([2, 3, 4, 5, 6]), t1 = pick([1, 2]), rest = pick([1, 2]), s3 = pick([2, 3, 4, 5]), t3 = pick([1, 2]);
    var d1 = s1 * t1, d2 = d1, d3 = d2 + s3 * t3, T1 = t1, T2 = t1 + rest, T3 = T2 + t3, ymax = Math.ceil(d3 / 5) * 5 + (d3 % 5 ? 0 : 0), xmax = T3 + 1, ys = ymax > 20 ? 5 : ymax > 10 ? 2 : 1;
    ymax = Math.max(ymax, 5);
    var pts = [[0, 0], [T1, d1], [T2, d2], [T3, d3]], pic = gridSvg({ x0: 0, x1: xmax, y0: 0, y1: ymax, xs: 1, ys: ys, line: pts, pts: pts.map(function (p) { return { x: p[0], y: p[1], color: '#2b62d9' }; }), xt: 'Time (hours)', yt: 'Distance (km)', aria: 'Distance-time graph' });
    var data = 'Distance-time graph. Points: ' + pts.map(function (p) { return 'at ' + p[0] + ' hours, ' + p[1] + ' km'; }).join('; ') + '.', k = rnd(0, lv ? 2 : 1);
    if (k === 0) { var t = pick([T1, T2, T3]), d = t === T1 ? d1 : t === T2 ? d2 : d3; return Q({ tag: 'Reading a distance–time graph', pic: pic, data: data, text: 'How far has the traveller gone after <b>' + t + (t === 1 ? ' hour' : ' hours') + '</b>? (km)', answer: String(d), hints: ['Find ' + t + (t === 1 ? ' hour' : ' hours') + ' on the time scale.', 'Go up to the line and across to the distance scale.'], explain: 'After ' + t + (t === 1 ? ' hour' : ' hours') + ' the line is at ' + d + ' km.' }); }
    if (k === 1) return Q({ tag: 'Reading a distance–time graph', pic: pic, data: data, text: 'For how many <b>hours</b> does the traveller stop? (The flat part of the line.)', answer: String(rest), hints: ['A flat line means the distance is not changing.', 'Find where the line goes flat and read the time at its start and end.'], explain: 'The line is flat from ' + T1 + ' hours to ' + T2 + ' hours, so the stop lasts ' + rest + ' hour' + (rest > 1 ? 's' : '') + '.' });
    return Q({ tag: 'Reading a distance–time graph', pic: pic, data: data, text: 'What is the <b>speed</b> during the first ' + t1 + ' hour' + (t1 > 1 ? 's' : '') + '? (km/h)', answer: String(s1), hints: ['Speed = distance ÷ time.', 'In the first part the traveller goes ' + d1 + ' km.'], explain: d1 + ' ÷ ' + t1 + ' = ' + s1 + ' km/h.' });
  }

  function rdStraight(l) {
    var lv = lvl(l), m = pick(lv === 0 ? [1, 2] : lv === 1 ? [1, 2, 3, -1] : [2, 3, -1, -2, 1]), c = pick(lv === 0 ? [0, 1, 2] : [-2, -1, 0, 1, 2, 3]), x0 = lv === 0 ? 0 : -3, x1 = lv === 0 ? 5 : 4;
    var ymin = Math.min(m * x0 + c, m * x1 + c), ymax = Math.max(m * x0 + c, m * x1 + c), y0 = lv === 0 ? 0 : Math.floor((ymin - 1) / 2) * 2, y1 = Math.ceil((ymax + 1) / 2) * 2, ys = (y1 - y0) > 12 ? 2 : 1;
    var pts = []; for (var x = x0; x <= x1; x++) pts.push({ x: x, y: m * x + c, color: '#2b62d9' });
    var pic = gridSvg({ x0: x0, x1: x1, y0: y0, y1: y1, xs: 1, ys: ys, line: [[x0, m * x0 + c], [x1, m * x1 + c]], pts: pts, xt: 'x', yt: 'y', aria: 'Straight line graph' });
    var data = 'A straight line graph through the points ' + pts.slice(0, 4).map(function (p) { return '(' + sg(p.x) + ', ' + sg(p.y) + ')'; }).join(', ') + '.', k = rnd(0, lv === 2 ? 2 : 1), xv = pick(pts.filter(function (p) { return p.x !== 0; })).x;
    if (k === 0) return Q({ tag: 'Reading a straight-line graph', pic: pic, data: data, text: 'Use the graph. What is the value of <b>y</b> when <b>x = ' + sg(xv) + '</b>?', answer: String(m * xv + c), hints: ['Find x = ' + sg(xv) + ' along the bottom.', 'Go up or down to the line, then across to the y scale.'], explain: 'When x = ' + sg(xv) + ' the line is at y = ' + sg(m * xv + c) + '.' });
    if (k === 1) return Q({ tag: 'Reading a straight-line graph', pic: pic, data: data, text: 'Where does the line cross the <b>y-axis</b>? Give the y value.', answer: String(c), hints: ['The y-axis is the vertical line where x = 0.', 'Look at the line where it meets x = 0.'], explain: 'At x = 0 the line is at y = ' + sg(c) + '.' });
    return Q({ tag: 'Reading a straight-line graph', pic: pic, data: data, text: 'What is the <b>gradient</b> of the line? (How much does y change when x goes up by 1?)', answer: String(m), hints: ['Read two neighbouring dots on the line.', 'Go one step right, then see how far up or down the line goes.'], explain: 'Each step right changes y by ' + sg(m) + ', so the gradient is ' + sg(m) + '.' });
  }

  function rdCoords(l) {
    var lv = lvl(l), pos = lv === 0, x0 = pos ? 0 : -6, x1 = pos ? 8 : 6, y0 = x0, y1 = x1, n = pos ? 3 : 4, used = {}, pts = [], L2 = ['A', 'B', 'C', 'D'];
    while (pts.length < n) { var x = rnd(x0 + (pos ? 1 : 0), x1), y = rnd(y0 + (pos ? 1 : 0), y1), key = x + ',' + y; if (!used[key] && (pos || (x !== 0 && y !== 0))) { used[key] = 1; pts.push({ x: x, y: y, label: L2[pts.length], color: '#d62d2d' }); } }
    var pic = gridSvg({ x0: x0, x1: x1, y0: y0, y1: y1, xs: 1, ys: 1, pts: pts, aria: 'Grid with points ' + pts.map(function (p) { return p.label; }).join(', ') });
    var data = 'A coordinate grid with points ' + pts.map(function (p) { return p.label + ' at (' + sg(p.x) + ', ' + sg(p.y) + ')'; }).join(', ') + '.', p = pick(pts);
    return Q({ tag: 'Reading coordinates', kind: 'coord', pic: pic, data: data, text: 'What are the coordinates of point <b>' + p.label + '</b>? Write them as x, y.', placeholder: 'for example 3, 4', answer: '(' + sg(p.x) + ',' + sg(p.y) + ')', show: '(' + sg(p.x) + ', ' + sg(p.y) + ')', hints: ['Always go along first (x), then up or down (y).', 'Read the x value on the bottom scale, then the y value on the side scale.'], explain: 'Point ' + p.label + ' is ' + sg(p.x) + ' across and ' + sg(p.y) + ' up, so it is (' + sg(p.x) + ', ' + sg(p.y) + ').' });
  }

  function rdScatter(l) {
    var lv = lvl(l), kind = pick(['Positive', 'Negative', 'No correlation']), n = 9, pts = [], i;
    for (i = 0; i < n; i++) { var x = rnd(1, 9), y; if (kind === 'Positive') y = Math.max(1, Math.min(9, x + rnd(-1, 1))); else if (kind === 'Negative') y = Math.max(1, Math.min(9, 10 - x + rnd(-1, 1))); else y = rnd(1, 9); pts.push({ x: x, y: y, color: '#2b62d9' }); }
    var ctxs = { Positive: ['Hours of revision', 'Test score', 'test score against hours of revision'], Negative: ['Age of car (years)', 'Value (£000)', 'value of a car against its age'], 'No correlation': ['Shoe size', 'Maths score', 'maths score against shoe size'] }[kind];
    var pic = gridSvg({ x0: 0, x1: 10, y0: 0, y1: 10, xs: 1, ys: 1, pts: pts, xt: ctxs[0], yt: ctxs[1], aria: 'Scatter graph' });
    var data = 'Scatter graph of ' + ctxs[2] + '. ' + (kind === 'Positive' ? 'The points rise from bottom left to top right.' : kind === 'Negative' ? 'The points fall from top left to bottom right.' : 'The points are scattered with no pattern.');
    var op = ['Positive', 'Negative', 'No correlation'];
    return Q({ tag: 'Reading a scatter graph', type: 'mc', options: op, answer: kind, pic: pic, data: data, text: 'What kind of <b>correlation</b> does the scatter graph show?', hints: ['Look at the overall direction of the points.', 'Going up from left to right is positive, going down is negative, and no pattern means none.'], explain: kind === 'Positive' ? 'The points rise as you go right, so it is positive correlation: more revision, higher score.' : kind === 'Negative' ? 'The points fall as you go right, so it is negative correlation.' : 'The points have no pattern, so there is no correlation.' });
  }

  var MK = { line: rdLine, conv: rdConv, dist: rdDist, straight: rdStraight, coords: rdCoords, scatter: rdScatter };
  /* which topics get which reading makers (kept to topics where the skill belongs) */
  var READ = {
    8: ['line'], 508: ['line'], 708: ['line', 'scatter'], 812: ['line', 'scatter'], 832: ['line', 'scatter'], 852: ['line', 'scatter'],
    6: ['coords'], 506: ['coords'], 706: ['coords', 'straight'], 809: ['coords', 'straight'], 828: ['straight', 'coords'], 847: ['straight', 'coords'], 846: ['straight'],
    7: ['coords'], 507: ['coords'], 707: ['coords'], 811: ['coords'], 829: ['coords'],
    5: ['conv'], 505: ['conv'], 705: ['conv', 'dist'], 712: ['dist'], 807: ['dist'], 825: ['dist'], 843: ['dist', 'conv'], 823: ['conv'], 805: ['conv'], 711: ['conv'], 11: ['conv'], 804: [], 4: []
  };
  var origExtra = S.extraMakers;
  S.extraMakers = function (n, level) {
    var base = origExtra ? (origExtra.apply(this, arguments) || []) : [], add = READ[Number(n)];
    if (!add || !add.length) return base;
    var mk = [];
    add.forEach(function (k) { var f = MK[k]; var m = function () { return f(level); }; mk.push(m, m); });
    return base.concat(mk);
  };

  /* ---------- the Plot it activity ---------- */
  var BARS = [['Cat', 'Dog', 'Fish', 'Bird'], ['Red', 'Blue', 'Green', 'Pink'], ['Pizza', 'Pasta', 'Curry', 'Fish'], ['Run', 'Swim', 'Cycle', 'Walk']];
  function mkRound(kind, yr) {
    var old = yr !== 'P5' && yr !== 'P6';
    if (kind === 'bar') {
      var cats = pick(BARS), top = old ? 10 : 8, vals = cats.map(function () { return rnd(1, top); });
      return { mode: 'bars', text: 'Draw a bar chart for this table. Tap the grid to set the top of each bar.', table: cats.map(function (c, i) { return [c, vals[i]]; }), cats: cats, bars: vals, x0: 0, x1: cats.length + 1, y0: 0, y1: top + 1, xlabels: [''].concat(cats, ['']), xt: '', yt: 'Number', xs: 1, ys: 1 };
    }
    if (kind === 'line') {
      var labels = pick([DAYS, MONTHS]).slice(0, 5), v = labels.map(function () { return rnd(2, 9); });
      return { mode: 'points', text: 'Plot each value on the line graph. Tap the grid where each dot goes. The line joins up when you are right.', table: labels.map(function (c, i) { return [c, v[i]]; }), targets: v.map(function (y, i) { return { x: i, y: y }; }), x0: 0, x1: 4, y0: 0, y1: 10, xlabels: labels, xt: '', yt: 'Value', xs: 1, ys: 1, join: true };
    }
    if (kind === 'dist') {
      var sp = pick([2, 3, 4]), tm = [0, 1, 2, 3, 4], hasStop = old && rnd(0, 1), dd = tm.map(function (t) { return sp * t; });
      if (hasStop) { dd = [0, sp, sp * 2, sp * 2, sp * 3]; }
      return { mode: 'points', text: 'A traveller’s journey is in the table. Plot each point on the distance–time graph, then the line joins up.', table: tm.map(function (t, i) { return ['Time ' + t + ' h', dd[i] + ' km']; }), targets: tm.map(function (t, i) { return { x: t, y: dd[i] }; }), x0: 0, x1: 4, y0: 0, y1: Math.max(12, sp * 4 + 2), xs: 1, ys: sp * 4 > 12 ? 2 : 1, xt: 'Time (hours)', yt: 'Distance (km)', join: true };
    }
    if (kind === 'coords') {
      var pos = !old, lo = pos ? 0 : -5, hi = pos ? 8 : 5, a = rnd(lo + 1, hi - 4), b = rnd(lo + 1, hi - 3), wd = rnd(2, 4), ht = rnd(2, 3);
      var four = { x: a + wd, y: b + ht };
      return { mode: 'points', text: 'Plot the points A(' + sg(a) + ', ' + sg(b) + '), B(' + sg(a + wd) + ', ' + sg(b) + ') and C(' + sg(a + wd) + ', ' + sg(b + ht) + '). Then plot D so that ABCD is a rectangle.', targets: [{ x: a, y: b }, { x: a + wd, y: b }, { x: a + wd, y: b + ht }, { x: a, y: b + ht }], x0: lo, x1: hi, y0: lo, y1: hi, xs: 1, ys: 1, xt: 'x', yt: 'y', shape: true, labels: ['A', 'B', 'C', 'D'] };
    }
    if (kind === 'xy') {
      var m = pick(old ? [1, 2, 3, -1, -2] : [1, 2, 3]), c = pick(old ? [-2, -1, 0, 1, 2] : [0, 1, 2]), xs = old ? [-2, -1, 0, 1, 2] : [0, 1, 2, 3, 4], ys = xs.map(function (x) { return m * x + c; });
      var mn = Math.min.apply(null, ys), mx = Math.max.apply(null, ys), y0 = old ? Math.floor(mn - 1) : 0, y1 = Math.ceil(mx + 1);
      return { mode: 'points', text: 'Complete the points for y = ' + (m === 1 ? '' : m === -1 ? '−' : sg(m)) + 'x' + (c ? (c > 0 ? ' + ' + c : ' − ' + Math.abs(c)) : '') + ' from the table, then plot them. They make a straight line.', table: xs.map(function (x, i) { return ['x = ' + sg(x), 'y = ' + sg(ys[i])]; }), targets: xs.map(function (x, i) { return { x: x, y: ys[i] }; }), x0: xs[0], x1: xs[xs.length - 1], y0: y0, y1: y1, xs: 1, ys: (y1 - y0) > 12 ? 2 : 1, xt: 'x', yt: 'y', join: true };
    }
    return mkRound('line', yr);
  }
  function mountPlot(kinds, yr) {
    return function (host, ctx) {
      var round = 0, wins = 0, cur, placed, hs;
      function fresh() { cur = mkRound(kinds[round % kinds.length], yr); placed = []; hs = cur.mode === 'bars' ? cur.cats.map(function () { return 0; }) : []; }
      fresh();
      function svgCfg(showAns) {
        var c = { x0: cur.x0, x1: cur.x1, y0: cur.y0, y1: cur.y1, xs: cur.xs, ys: cur.ys, xlabels: cur.xlabels, xt: cur.xt, yt: cur.yt, id: 'plotSvg', aria: 'Tap grid to plot' };
        if (cur.mode === 'bars') { c.bars = hs.map(function (h, i) { return h ? { x: i + 1, h: h, color: showAns ? (h === cur.bars[i] ? '#168a4a' : '#d62d2d') : '#2b62d9' } : null; }).filter(Boolean); }
        else { c.pts = placed.map(function (p) { var ok = cur.targets.some(function (t) { return t.x === p.x && t.y === p.y; }); return { x: p.x, y: p.y, color: showAns ? (ok ? '#168a4a' : '#d62d2d') : '#2b62d9', label: cur.labels && showAns === 'done' ? '' : '' }; }); if (showAns === 'show') { cur.targets.forEach(function (t, i) { c.pts.push({ x: t.x, y: t.y, ring: true, color: '#168a4a', label: cur.labels ? cur.labels[i] : '' }); }); } if (cur.join && showAns === 'done') c.line = cur.targets.map(function (t) { return [t.x, t.y]; }); if (cur.shape && showAns === 'done') c.line = cur.targets.concat([cur.targets[0]]).map(function (t) { return [t.x, t.y]; }); }
        return c;
      }
      function draw(state, msg) {
        var tbl = cur.table ? '<table class="tbl" aria-label="Data table"><tr>' + cur.table.map(function (r) { return '<th>' + r[0] + '</th>'; }).join('') + '</tr><tr>' + cur.table.map(function (r) { return '<td>' + r[1] + '</td>'; }).join('') + '</tr></table>' : '';
        host.innerHTML = '<p class="say wq">' + cur.text + '</p>' + tbl + '<div class="visual" id="plotWrap">' + gridSvg(svgCfg(state)) + '</div>' +
          '<div class="lab-out say" aria-live="polite">' + (msg || (cur.mode === 'bars' ? 'Tap a column at the height you want.' : 'Tap a spot on the grid to place a point. Tap it again to take it away.')) + '</div>' +
          '<div class="row" style="gap:8px;margin-top:10px"><button class="btn" type="button" data-check' + (state === 'done' ? ' disabled' : '') + '>Check</button><button class="btn ghost" type="button" data-undo' + (state === 'done' ? ' disabled' : '') + '>Start again</button>' + (state === 'show' || state === 'done' ? '' : '<button class="btn ghost" type="button" data-show>Show me</button>') + '<button class="btn" type="button" data-new style="margin-left:auto">' + (state === 'done' ? 'Next one' : 'Try a different one') + '</button></div>' +
          '<p class="note" style="min-height:0">Correct so far: ' + wins + ' of 3</p>';
        var svg = host.querySelector('#plotSvg');
        if (svg && state !== 'done') svg.addEventListener('click', function (e) {
          var r = svg.getBoundingClientRect(), sx = (e.clientX - r.left) / r.width * W, sy = (e.clientY - r.top) / r.height * HT, g = geo(cur);
          var x = Math.round(cur.x0 + (sx - L) / g.pw * (cur.x1 - cur.x0)), y = Math.round(cur.y0 + (1 - (sy - T) / g.ph) * (cur.y1 - cur.y0));
          x = Math.max(cur.x0, Math.min(cur.x1, x)); y = Math.max(cur.y0, Math.min(cur.y1, y));
          if (cur.mode === 'bars') { var i = x - 1; if (i < 0 || i >= cur.cats.length) return; hs[i] = hs[i] === y ? 0 : Math.max(0, y); draw(); return; }
          var at = placed.findIndex(function (p) { return p.x === x && p.y === y; });
          if (at > -1) placed.splice(at, 1); else placed.push({ x: x, y: y });
          draw();
        });
        host.querySelector('[data-undo]').addEventListener('click', function () { placed = []; hs = cur.mode === 'bars' ? cur.cats.map(function () { return 0; }) : []; draw(); });
        var sh = host.querySelector('[data-show]'); if (sh) sh.addEventListener('click', function () { if (cur.mode === 'bars') { hs = cur.bars.slice(); draw('done', 'Here is the finished bar chart. Compare it with the table.'); } else draw('show', 'The rings show where the points belong.'); });
        host.querySelector('[data-new]').addEventListener('click', function () { round++; fresh(); draw(); });
        host.querySelector('[data-check]').addEventListener('click', function () {
          var ok;
          if (cur.mode === 'bars') ok = hs.every(function (h, i) { return h === cur.bars[i]; });
          else ok = placed.length === cur.targets.length && cur.targets.every(function (t) { return placed.some(function (p) { return p.x === t.x && p.y === t.y; }); });
          if (ok) { wins++; if (wins >= 3) ctx.complete(); draw('done', 'Right! Well done. ' + (wins >= 3 ? 'You have finished this activity.' : 'Press Next one for another.')); }
          else draw('wrong', cur.mode === 'bars' ? 'Not quite. Read each value in the table and check the height of each bar.' : (placed.length !== cur.targets.length ? 'Not quite. You need ' + cur.targets.length + ' points and you have placed ' + placed.length + '.' : 'Not quite. Some points are in the wrong place (shown in red). Move them, or press Show me.'));
        });
        if (H.readActive && H.readActive() && H.narPlayFn && msg) { var lo = host.querySelector('.lab-out'); if (lo) H.narPlayFn(true, lo); }
      }
      draw();
    };
  }
  /* topics that get the activity and which kinds of plot they use */
  var PLOT = {
    8: ['bar', 'line', 'bar'], 508: ['bar', 'line', 'bar'], 708: ['bar', 'line', 'bar'], 812: ['bar', 'line', 'bar'], 832: ['line', 'bar', 'line'], 852: ['line', 'bar', 'line'],
    6: ['xy', 'coords', 'xy'], 506: ['xy', 'coords', 'xy'], 706: ['xy', 'coords', 'xy'], 809: ['xy', 'coords', 'xy'], 828: ['xy', 'xy', 'xy'], 847: ['xy', 'xy', 'xy'],
    7: ['coords', 'coords', 'coords'], 507: ['coords', 'coords', 'coords'], 707: ['coords', 'coords', 'coords'], 811: ['coords', 'coords', 'coords'],
    5: ['line', 'dist', 'line'], 505: ['line', 'dist', 'line'], 705: ['dist', 'line', 'dist'], 712: ['dist', 'dist', 'dist'], 807: ['dist', 'dist', 'dist'], 825: ['dist', 'dist', 'dist'], 843: ['dist', 'dist', 'dist']
  };
  Object.keys(PLOT).forEach(function (k) {
    var t = S.topics[k]; if (!t || t.steps.some(function (s) { return s.id === 'plot'; })) return;
    var kinds = PLOT[k], coordsOnly = kinds.every(function (x) { return x === 'coords'; });
    t.steps.push({ id: 'plot', label: 'Plot it', type: 'lab', tag: 'Graphs', title: coordsOnly ? 'Plot the points' : 'Draw the graph', lead: coordsOnly ? 'Plot points on a coordinate grid. Tap where each point belongs.' : 'Draw graphs from tables. Tap the grid to plot points or set the height of bars.', mount: mountPlot(kinds, t.year || 'P6') });
    if (S.arrange) S.arrange(t);
  });

  /* P6 Ratio is registered late, so it missed the Real-time problem step the other topics have */
  (function () {
    var t = S.topics[11];
    if (!t || t.steps.some(function (x) { return x.id === 'practical'; }) || !S.storyFor || !S.storyFor(11)) return;
    t.steps.push({ id: 'practical', label: 'Real-time problem', type: 'quiz', tag: 'Step ' + (t.steps.length + 1) + ' \u00B7 Real-time problems', title: 'Real-time problems', lead: '30 situation questions on ratio, sharing, recipes and unit prices. Think about which skill from this topic the problem needs. Low, Medium and High change how many steps each problem has.',
      make: function () { var m = []; m.storyMode = true; return H.buildPracticeSet(m, 30); } });
    if (S.arrange) S.arrange(t);
  })();
})();
