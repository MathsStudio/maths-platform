/* lesson.js: richer, year-specific lessons.
   Pilot: Fractions for P5 (503), P6 (3), P7 (703) and S1 (803).
   Slide kinds: Hook, Big idea, Explore, Watch and learn, Try it, Spot the slip, Real life, Remember. */
(function () {
  'use strict';
  var S = Studio, H = S.h;
  function $(id) { return document.getElementById(id); }
  function rnd(a, b) { return a + Math.floor(Math.random() * (b - a + 1)); }
  function pick(a) { return a[rnd(0, a.length - 1)]; }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = rnd(0, i), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function gcd(a, b) { a = Math.abs(a); b = Math.abs(b); while (b) { var t = b; b = a % b; a = t; } return a || 1; }
  function lcm(a, b) { return a / gcd(a, b) * b; }
  function red(n, d) { var g = gcd(n, d); return [n / g, d / g]; }
  function fs(n, d) { return n + '/' + d; }
  function fr(n, d) { return '<span class="fr"><b>' + n + '</b><i></i><b>' + d + '</b></span>'; }
  function mx(w, n, d) { return '<span class="mixed">' + w + ' ' + fr(n, d) + '</span>'; }

  var css = document.createElement('style');
  css.textContent =
    '.fr{display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;line-height:1.05;margin:0 .12em;font-weight:900}.fr i{display:block;width:100%;height:2px;background:currentColor;margin:1px 0}.fr b{font-weight:900}' +
    '.tryit{display:flex;flex-direction:column;gap:10px}.tryit .tq{font-size:1.15rem;font-weight:800}.tryit .fbk{background:var(--surface);border-radius:12px;padding:10px 12px;min-height:2.4em}.tryit .fbk.ok{border:2px solid var(--good);background:var(--good-bg)}.tryit .fbk.no{border:2px solid var(--bad);background:var(--bad-bg)}' +
    '.slipgrid{display:grid;grid-template-columns:1fr;gap:10px}.slipcard{border-radius:12px;padding:12px;font-weight:700;border:2px solid var(--line);background:var(--surface)}.slipcard.bad{border-color:var(--bad);background:var(--bad-bg)}.slipcard.good{border-color:var(--good);background:var(--good-bg)}.slipcard b.t{display:block;font-size:.8rem;letter-spacing:.06em;text-transform:uppercase;margin-bottom:4px}' +
    '.bigeq{font-size:1.5rem;font-weight:900;text-align:center;margin:4px 0}.exrow{display:flex;gap:10px;flex-wrap:wrap;align-items:center;margin:6px 0}';
  document.head.appendChild(css);

  /* ---------- pictures ---------- */
  var INK = '#1b2a4a', BLUE = '#3b6be0', ORANGE = '#e08a3b', GREEN = '#2e9a5b';
  function wrap(vb, h, inner, alt) { return '<svg viewBox="0 0 ' + vb + ' ' + h + '" role="img" aria-label="' + (alt || 'Picture') + '" xmlns="http://www.w3.org/2000/svg" font-family="inherit">' + inner + '</svg>'; }
  /* rows: [{n,d,label,col}] */
  function bars(rows, alt) {
    var W = 560, lab = 118, bw = W - lab - 8, h = 40, gap = 14, y = 8, s = '';
    rows.forEach(function (r) {
      var col = r.col || BLUE, pw = bw / r.d;
      if (r.label !== '') s += '<text x="4" y="' + (y + h * 0.72) + '" font-size="28" font-weight="800" fill="' + INK + '">' + (r.label || (r.n + '/' + r.d)) + '</text>';
      for (var i = 0; i < r.d; i++) s += '<rect x="' + (lab + i * pw).toFixed(1) + '" y="' + y + '" width="' + pw.toFixed(1) + '" height="' + h + '" fill="' + (i < r.n ? col : '#ffffff') + '" stroke="' + INK + '" stroke-width="2"/>';
      y += h + gap;
    });
    return wrap(W, y, s, alt || 'Fraction bars');
  }
  /* n/d as whole bars: 7/4 -> one full bar and a second bar with 3 of 4 */
  function wholeBars(n, d, alt) {
    var rows = [], left = n, k = 1;
    while (left > 0) { rows.push({ n: Math.min(d, left), d: d, label: k === 1 ? 'Bar 1' : 'Bar ' + k }); left -= d; k++; }
    return bars(rows, alt || 'Bars showing ' + n + ' parts');
  }
  function piePath(cx, cy, r, i, d) {
    var a0 = -Math.PI / 2 + i * 2 * Math.PI / d, a1 = a0 + 2 * Math.PI / d;
    return 'M' + cx + ' ' + cy + ' L' + (cx + r * Math.cos(a0)).toFixed(1) + ' ' + (cy + r * Math.sin(a0)).toFixed(1) + ' A' + r + ' ' + r + ' 0 0 1 ' + (cx + r * Math.cos(a1)).toFixed(1) + ' ' + (cy + r * Math.sin(a1)).toFixed(1) + ' Z';
  }
  function pies(items, alt) {
    var W = 560, r = 62, s = '', n = items.length, step = W / n;
    items.forEach(function (it, k) {
      var cx = step * k + step / 2, cy = 80;
      for (var i = 0; i < it.d; i++) s += it.d === 1 ? '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="' + (it.n >= 1 ? (it.col || ORANGE) : '#fff') + '" stroke="' + INK + '" stroke-width="2"/>' : '<path d="' + piePath(cx, cy, r, i, it.d) + '" fill="' + (i < it.n ? (it.col || ORANGE) : '#ffffff') + '" stroke="' + INK + '" stroke-width="2"/>';
      s += '<text x="' + cx + '" y="170" text-anchor="middle" font-size="28" font-weight="800" fill="' + INK + '">' + (it.label || it.n + '/' + it.d) + '</text>';
    });
    return wrap(W, 182, s, alt || 'Circles split into equal parts');
  }
  function numLine(d, marks, alt, max) {
    max = max || 1; var x0 = 30, x1 = 530, W = 560, y = 60, s = '<line x1="' + x0 + '" y1="' + y + '" x2="' + x1 + '" y2="' + y + '" stroke="' + INK + '" stroke-width="3"/>';
    for (var i = 0; i <= d * max; i++) { var x = x0 + (x1 - x0) * i / (d * max), big = i % d === 0; s += '<line x1="' + x + '" y1="' + (y - (big ? 14 : 9)) + '" x2="' + x + '" y2="' + (y + (big ? 14 : 9)) + '" stroke="' + INK + '" stroke-width="' + (big ? 3 : 2) + '"/>'; if (big) s += '<text x="' + x + '" y="' + (y + 36) + '" text-anchor="middle" font-size="28" font-weight="800" fill="' + INK + '">' + (i / d) + '</text>'; }
    (marks || []).forEach(function (m) { var x = x0 + (x1 - x0) * m.v / max; s += '<path d="M' + x + ' ' + (y - 8) + ' l-9 -20 h18 z" fill="' + (m.col || ORANGE) + '"/><text x="' + x + '" y="' + (y - 34) + '" text-anchor="middle" font-size="28" font-weight="900" fill="' + INK + '">' + m.label + '</text>'; });
    return wrap(W, 112, s, alt || 'Number line');
  }
  /* total items in `groups` equal groups; first `take` groups highlighted */
  function dots(total, groups, take, alt) {
    var W = 560, per = total / groups, perRow = Math.min(groups, 5), gw = W / perRow - 12, cols = Math.min(per, Math.max(1, Math.floor((gw - 12) / 22))), rowsIn = Math.ceil(per / cols), gh = rowsIn * 22 + 14, s = '', H2 = Math.ceil(groups / perRow) * (gh + 12);
    for (var g = 0; g < groups; g++) {
      var gx = (g % perRow) * (W / perRow) + 6, gy = Math.floor(g / perRow) * (gh + 12) + 4, on = g < take;
      s += '<rect x="' + gx + '" y="' + gy + '" width="' + gw + '" height="' + gh + '" rx="10" fill="' + (on ? '#dce8ff' : '#ffffff') + '" stroke="' + (on ? BLUE : INK) + '" stroke-width="' + (on ? 3 : 1.5) + '"/>';
      for (var i = 0; i < per; i++) s += '<circle cx="' + (gx + 17 + (i % cols) * 22) + '" cy="' + (gy + 17 + Math.floor(i / cols) * 22) + '" r="8" fill="' + (on ? BLUE : '#8a97b5') + '"/>';
    }
    return wrap(W, H2, s, alt || total + ' dots in ' + groups + ' equal groups');
  }
  /* R rows x C columns; a rows shaded blue, b columns shaded orange; overlap is the product */
  function area(R, C, a, b, alt) {
    var cell = Math.min(46, Math.floor(440 / C), Math.floor(260 / R)), W = 560, x0 = 60, y0 = 36, s = '';
    for (var i = 0; i < R; i++) for (var j = 0; j < C; j++) s += '<rect x="' + (x0 + j * cell) + '" y="' + (y0 + i * cell) + '" width="' + cell + '" height="' + cell + '" fill="#fff" stroke="' + INK + '" stroke-width="1.5"/>';
    for (i = 0; i < a; i++) s += '<rect x="' + x0 + '" y="' + (y0 + i * cell) + '" width="' + (C * cell) + '" height="' + cell + '" fill="' + BLUE + '" opacity=".4"/>';
    for (j = 0; j < b; j++) s += '<rect x="' + (x0 + j * cell) + '" y="' + y0 + '" width="' + cell + '" height="' + (R * cell) + '" fill="' + ORANGE + '" opacity=".4"/>';
    s += '<text x="' + (x0 + C * cell + 14) + '" y="' + (y0 + a * cell / 2 + 7) + '" font-size="28" font-weight="800" fill="' + INK + '">' + a + '/' + R + '</text>';
    s += '<text x="' + (x0 + b * cell / 2) + '" y="24" text-anchor="middle" font-size="28" font-weight="800" fill="' + INK + '">' + b + '/' + C + '</text>';
    return wrap(W, y0 + R * cell + 10, s, alt || 'Grid showing ' + a + ' of ' + R + ' rows and ' + b + ' of ' + C + ' columns');
  }
  function hundred(p, alt) {
    var cell = 24, x0 = 150, y0 = 6, s = '';
    for (var i = 0; i < 10; i++) for (var j = 0; j < 10; j++) { var k = i * 10 + j; s += '<rect x="' + (x0 + j * cell) + '" y="' + (y0 + i * cell) + '" width="' + cell + '" height="' + cell + '" fill="' + (k < p ? GREEN : '#fff') + '" stroke="' + INK + '" stroke-width="1"/>'; }
    return wrap(560, 252, s, alt || p + ' out of 100 squares shaded');
  }
  function box(html) { return '<div class="bigeq">' + html + '</div>'; }

  /* ---------- try it ---------- */
  function tryit(gen) {
    return function (host) {
      var q, hi, solved;
      function fresh() { q = gen(); host.__q = q; hi = 0; solved = false; draw('', ''); }
      function draw(fb, cls) {
        var body;
        if (q.options) body = '<div class="opts">' + q.options.map(function (o) { return '<button class="opt say" type="button" data-v="' + String(o).replace(/"/g, '&quot;') + '"' + (solved ? ' disabled' : '') + '>' + o + '</button>'; }).join('') + '</div>';
        else body = '<form class="ans" id="tyF"><input id="tyIn" type="text" inputmode="' + (q.kind === 'frac' ? 'text' : 'decimal') + '" autocomplete="off" aria-label="Your answer"' + (solved ? ' disabled' : '') + '><button class="btn" type="submit"' + (solved ? ' disabled' : '') + '>Check</button></form>' + (q.kind === 'frac' ? '<p class="note" style="min-height:0">Write a fraction like 3/4. For a mixed number write 1 3/4.</p>' : '<p class="note" style="min-height:0">Numbers only.</p>');
        host.innerHTML = '<div class="tryit">' + (q.vis ? '<div class="visual">' + q.vis + '</div>' : '') + '<div class="tq say">' + q.text + '</div>' + body + '<div class="fbk ' + cls + '" id="tyFb" aria-live="polite">' + fb + '</div><div class="row"><button class="btn ghost" id="tyHint" type="button"' + (solved ? ' disabled' : '') + '>Need a hint?</button><button class="btn ' + (solved ? '' : 'ghost') + '" id="tyNew" type="button">Another one</button></div></div>';
        $('tyNew').addEventListener('click', fresh);
        $('tyHint').addEventListener('click', function () {
          if (hi < q.hints.length) { draw('<b>Hint ' + (hi + 1) + ':</b> ' + q.hints[hi++], ''); } else draw('No more hints. The answer is <b>' + q.show + '</b>. ' + q.explain, '');
        });
        if (q.options) host.querySelectorAll('.opt').forEach(function (b) { b.addEventListener('click', function () { check(b.getAttribute('data-v')); }); });
        else {
          var ai = $('tyIn'); if (ai && !solved) { ai.focus(); ai.addEventListener('input', function () { ai.value = ai.value.replace(q.kind === 'frac' ? /[^0-9\/ ]/g : /[^0-9.\-]/g, ''); }); }
          $('tyF').addEventListener('submit', function (e) { e.preventDefault(); if (ai.value.trim() !== '') check(ai.value); });
        }
      }
      function check(v) {
        var ok = q.options ? v === q.answer : H.matches(q, v);
        if (ok) { solved = true; draw('<b>Yes!</b> ' + q.explain, 'ok'); }
        else draw('<b>Not quite.</b> Look at the picture and try again, or press Need a hint.', 'no');
      }
      fresh();
    };
  }

  /* ---------- explorers ---------- */
  function fracExplore(host) {
    var d = 4, n = 3;
    host.innerHTML = '<div id="exVis" class="visual"></div><div class="bigeq" id="exTxt"></div>' +
      '<label class="eyebrow" for="exD">Cut the whole into this many equal parts (bottom number)</label><input class="slider" id="exD" type="range" min="2" max="12" value="4">' +
      '<label class="eyebrow" for="exN">Shade this many parts (top number)</label><input class="slider" id="exN" type="range" min="0" max="4" value="3">';
    function draw() {
      $('exN').max = d; if (n > d) n = d; $('exN').value = n;
      $('exVis').innerHTML = bars([{ n: n, d: d }]) + pies([{ n: n, d: d }]);
      $('exTxt').innerHTML = fr(n, d) + ' &nbsp;= ' + n + ' out of ' + d + ' equal parts';
    }
    $('exD').addEventListener('input', function (e) { d = Number(e.target.value); draw(); });
    $('exN').addEventListener('input', function (e) { n = Number(e.target.value); draw(); });
    draw();
  }
  function equivExplore(n0, d0) {
    return function (host) {
      var k = 1;
      host.innerHTML = '<div id="eqVis" class="visual"></div><div class="bigeq" id="eqTxt"></div><label class="eyebrow" for="eqK">Multiply the top and the bottom by</label><input class="slider" id="eqK" type="range" min="1" max="6" value="1">';
      function draw() {
        $('eqVis').innerHTML = bars([{ n: n0, d: d0 }, { n: n0 * k, d: d0 * k }]);
        $('eqTxt').innerHTML = fr(n0, d0) + ' = ' + fr(n0 + ' × ' + k, d0 + ' × ' + k) + ' = ' + fr(n0 * k, d0 * k);
      }
      $('eqK').addEventListener('input', function (e) { k = Number(e.target.value); draw(); }); draw();
    };
  }

  /* ---------- slide makers ---------- */
  function hook(title, say, v) { return { kind: 'Hook', title: title, v: v, say: say }; }
  function idea(title, v, say, extra) { var o = { kind: 'Big idea', title: title, v: v, say: say }; if (extra) for (var k in extra) o[k] = extra[k]; return o; }
  function explore(title, say, live) { return { kind: 'Explore', title: title, v: '', say: say, live: live }; }
  function watch(title, ex) { return { kind: 'Watch and learn', title: title, ex: ex }; }
  function tryIt(title, intro, gen) { return { kind: 'Try it', title: title, v: '', say: [intro], live: tryit(gen) }; }
  function slip(title, said, wrong, right, why, v) {
    return { kind: 'Spot the slip', title: title, v: v || '', say: [said], live: function (host) {
      host.innerHTML = '<div class="slipgrid"><div class="slipcard bad"><b class="t">✘ The slip</b>' + wrong + '</div><div class="slipcard good"><b class="t">✔ The fix</b>' + right + '</div></div><p class="say" style="margin-top:10px">' + why + '</p>';
    } };
  }
  function real(title, text, v) { return { kind: 'Real life', title: title, v: v || '', say: [], real: text }; }
  function recap(title, points) { return { kind: 'Remember', title: title, v: '', say: points.map(function (p) { return '✔ ' + p; }) }; }
  function wk(q, steps, final, render) { return { q: q, steps: steps, final: final, render: render }; }

  /* ---------- question makers ---------- */
  function Qf(text, ansN, ansD, o) { o = o || {}; return { text: text, answer: fs(ansN, ansD), show: o.show || fs(ansN, ansD), kind: 'frac', simplest: !!o.simplest, form: o.form, hints: o.hints, explain: o.explain, vis: o.vis }; }
  function Qn(text, ans, o) { o = o || {}; return { text: text, answer: String(ans), show: String(ans), hints: o.hints, explain: o.explain, vis: o.vis }; }
  function Qm(text, options, ans, o) { o = o || {}; return { text: text, options: options, answer: ans, show: ans, hints: o.hints, explain: o.explain, vis: o.vis }; }

  /* ================= P5 ================= */
  var P5 = [
    hook('Sharing a chocolate bar', ['Four friends want to share one chocolate bar fairly. How should we cut it?', 'Each friend must get a piece the same size. Cut it into 4 equal parts. Each friend gets one quarter.', 'A fraction tells us about equal parts of a whole.'], bars([{ n: 1, d: 4, label: '1 of 4' }], 'A bar cut into 4 equal parts with 1 shaded')),
    idea('The top and the bottom', bars([{ n: 3, d: 4 }], 'A bar with 4 equal parts and 3 shaded') + pies([{ n: 3, d: 4 }]), ['The <b>bottom</b> number says how many equal parts the whole is cut into. It is called the <b>denominator</b>.', 'The <b>top</b> number says how many parts we are talking about. It is called the <b>numerator</b>.', 'Here the whole is cut into 4 parts and 3 are shaded. That is ' + fr(3, 4) + '. We say "three quarters".', 'The parts must be <b>equal</b>. Unequal parts do not make a fraction.']),
    explore('Make your own fraction', ['Slide to cut the whole into more or fewer parts. Then slide to shade some. Watch the bar and the circle change together.'], fracExplore),
    tryIt('Name the fraction', 'Count all the equal parts first. Then count the shaded ones.', function () { var d = rnd(3, 10), n = rnd(1, d - 1); return Qf('What fraction of the bar is shaded?', n, d, { vis: bars([{ n: n, d: d, label: '' }]), hints: ['Count all the equal parts. That is the bottom number.', 'Now count the shaded parts. That is the top number.'], explain: n + ' of the ' + d + ' equal parts are shaded, so the fraction is ' + n + '/' + d + '.' }); }),
    idea('Same amount, different names', bars([{ n: 1, d: 2 }, { n: 2, d: 4 }, { n: 4, d: 8 }], 'Three bars of the same length with the same amount shaded'), ['Look at the three bars. The shaded part is the same size in each one.', 'So ' + fr(1, 2) + ' = ' + fr(2, 4) + ' = ' + fr(4, 8) + '. These are called <b>equivalent fractions</b>.', 'To make one, multiply the top and the bottom by the same number.']),
    watch('Make an equivalent fraction', wk('Change ' + fr(2, 3) + ' into sixths.', ['We want sixths. The bottom changes from 3 to 6, so we multiplied by 2.', 'Do the same to the top: 2 × 2 = 4.', 'So 2/3 = 4/6. The same amount of bar, cut into smaller pieces.'], '2/3 = 4/6', function (shown) { var rows = [{ n: 2, d: 3 }]; if (shown >= 1) rows.push({ n: shown >= 2 ? 4 : 0, d: 6 }); return bars(rows); })),
    tryIt('Find the missing top number', 'Whatever you do to the bottom, do to the top.', function () { var d = rnd(2, 5), n = rnd(1, d - 1), k = rnd(2, 4); return Qn(n + '/' + d + ' = ?/' + (d * k), n * k, { vis: bars([{ n: n, d: d }, { n: n * k, d: d * k }]), hints: ['The bottom number was multiplied by ' + k + '. Do the same to the top.'], explain: d + ' × ' + k + ' = ' + d * k + ', so ' + n + ' × ' + k + ' = ' + n * k + '.' }); }),
    idea('Which is bigger?', bars([{ n: 3, d: 8 }, { n: 5, d: 8 }], 'Two bars cut into eighths'), ['When the bottom numbers are the same, the pieces are the same size.', 'So the fraction with the bigger top number is bigger. ' + fr(5, 8) + ' is bigger than ' + fr(3, 8) + '.', 'Now think about 1/2 and 1/4. Which piece is bigger?'], { caption: 'Same size pieces: count them!' }),
    slip('A tricky one: halves and quarters', 'A pupil says: "8 is bigger than 4, so 1/8 is bigger than 1/4."', fr(1, 8) + ' &gt; ' + fr(1, 4) + ' because 8 &gt; 4', fr(1, 4) + ' &gt; ' + fr(1, 8), 'The more parts you cut the whole into, the <b>smaller</b> each part gets. A quarter is bigger than an eighth.', bars([{ n: 1, d: 4 }, { n: 1, d: 8 }], '1/4 and 1/8 bars')),
    idea('A fraction of an amount', dots(12, 3, 1, '12 sweets in 3 groups'), ['Here are 12 sweets. To find ' + fr(1, 3) + ' of them, share them into 3 equal groups.', 'Each group has 4 sweets. So ' + fr(1, 3) + ' of 12 = 4.', 'The bottom number tells you how many groups. The top number tells you how many groups to take.']),
    watch('Three quarters of 20', wk('Find ' + fr(3, 4) + ' of 20.', ['The bottom number is 4, so share 20 into 4 equal groups. 20 ÷ 4 = 5.', 'The top number is 3, so take 3 groups. 3 × 5 = 15.', 'So 3/4 of 20 is 15.'], '3/4 of 20 = 15', function (shown) { return dots(20, shown >= 1 ? 4 : 1, shown >= 2 ? 3 : 0); })),
    tryIt('Fraction of an amount', 'Divide by the bottom number. Then multiply by the top number.', function () { var d = pick([2, 3, 4, 5, 10]), n = rnd(1, d - 1), u = rnd(2, d === 10 ? 6 : 10), t = d * u; return Qn('What is ' + n + '/' + d + ' of ' + t + '?', n * u, { vis: dots(t, d, n), hints: ['Share ' + t + ' into ' + d + ' equal groups. What is one group?', 'One group is ' + u + '. Now take ' + n + ' group' + (n > 1 ? 's' : '') + '.'], explain: t + ' ÷ ' + d + ' = ' + u + ', then ' + u + ' × ' + n + ' = ' + n * u + '.' }); }),
    real('Pizza night', 'A pizza is cut into 8 equal slices. You eat 3 slices, so you have eaten 3/8 of the pizza. 5 slices are left, which is 5/8. The two parts always add up to the whole pizza, 8/8.', pies([{ n: 3, d: 8, label: 'eaten 3/8', col: ORANGE }, { n: 5, d: 8, label: 'left 5/8', col: GREEN }])),
    recap('What to remember', ['A fraction is equal parts of a whole.', 'The bottom number is how many equal parts. The top number is how many we have.', 'Equivalent fractions have the same value. Multiply top and bottom by the same number.', 'The more parts, the smaller each part.', 'To find a fraction of an amount: divide by the bottom, then multiply by the top.'])
  ];

  /* ================= P6 ================= */
  var P6 = [
    hook('Who has more pizza?', ['Mia ate 3 slices of a pizza cut into 6. Sam ate 4 slices of the same size pizza cut into 8.', 'Who ate more? The slices are different sizes, so it is not easy to tell.', 'Today we learn how to compare fractions fairly. The secret is equivalent fractions.'], pies([{ n: 3, d: 6, label: 'Mia 3/6' }, { n: 4, d: 8, label: 'Sam 4/8' }], 'Two pizzas, one with 3 of 6 eaten and one with 4 of 8')),
    idea('Equivalent fractions', bars([{ n: 2, d: 3 }, { n: 4, d: 6 }, { n: 6, d: 9 }], 'Bars showing 2/3, 4/6 and 6/9'), ['Equivalent fractions are different names for the <b>same amount</b>.', 'Multiply the top and the bottom by the same number to make one: ' + fr(2, 3) + ' = ' + fr('2 × 2', '3 × 2') + ' = ' + fr(4, 6) + '.', 'Divide the top and the bottom by the same number to go back the other way.', 'So Mia and Sam ate the same amount: 3/6 = 4/8 = 1/2.']),
    explore('Equivalent fraction maker', ['Pick how many times to multiply. The coloured part stays the same size. Only the number of pieces changes.'], equivExplore(2, 5)),
    tryIt('Equivalent fractions', 'Work out what the top and bottom were multiplied (or divided) by.', function () {
      var d = rnd(2, 9), n = rnd(1, d - 1), k = rnd(2, 6);
      if (Math.random() < 0.5) return Qn(n + '/' + d + ' = ?/' + d * k, n * k, { vis: bars([{ n: n, d: d }, { n: n * k, d: d * k }]), hints: ['Find what the bottom was multiplied by: ' + d + ' → ' + d * k + '.', 'Do the same to the top number.'], explain: d + ' × ' + k + ' = ' + d * k + ', so ' + n + ' × ' + k + ' = ' + n * k + '.' });
      return Qn(n * k + '/' + d * k + ' = ' + n + '/?', d, { hints: ['Find what the top was divided by: ' + n * k + ' → ' + n + '.', 'Divide the bottom number by the same amount.'], explain: n * k + ' ÷ ' + k + ' = ' + n + ', so ' + d * k + ' ÷ ' + k + ' = ' + d + '.' });
    }),
    watch('Simplify 18/24', wk('Write ' + fr(18, 24) + ' in its simplest form.', ['Find a number that goes into both 18 and 24. The biggest one is 6. It is called the <b>highest common factor</b>.', 'Divide the top and the bottom by 6. 18 ÷ 6 = 3 and 24 ÷ 6 = 4.', '18/24 = 3/4. Check: 3 and 4 share no factor except 1, so we cannot simplify again.'], '18/24 = 3/4', function (shown) { var rows = [{ n: 18, d: 24 }]; if (shown >= 2) rows.push({ n: 3, d: 4 }); return bars(rows); })),
    tryIt('Simplest form', 'Divide the top and the bottom by the same number until you cannot go any further.', function () { var pr = pick([[1, 2], [1, 3], [2, 3], [3, 4], [1, 4], [2, 5], [3, 5], [5, 6], [3, 8], [5, 8], [7, 10], [4, 9]]), k = rnd(2, 6); return Qf('Write ' + pr[0] * k + '/' + pr[1] * k + ' in its simplest form.', pr[0], pr[1], { simplest: true, hints: ['Find a number that divides into both ' + pr[0] * k + ' and ' + pr[1] * k + '.', 'The biggest number that works is ' + k + '. Divide both by it.'], explain: 'Divide both by ' + k + ': ' + pr[0] * k + ' ÷ ' + k + ' = ' + pr[0] + ' and ' + pr[1] * k + ' ÷ ' + k + ' = ' + pr[1] + '.' }); }),
    idea('Compare unlike fractions', bars([{ n: 3, d: 4, label: '3/4 = 6/8' }, { n: 6, d: 8, label: '' }, { n: 5, d: 8 }], 'Bars comparing 3/4 and 5/8 using eighths'), ['To compare ' + fr(3, 4) + ' and ' + fr(5, 8) + ', give them the <b>same bottom number</b>.', '4 goes into 8, so change ' + fr(3, 4) + ' into eighths: ' + fr(3, 4) + ' = ' + fr(6, 8) + '.', 'Now compare ' + fr(6, 8) + ' and ' + fr(5, 8) + '. 6 is more than 5, so ' + fr(3, 4) + ' &gt; ' + fr(5, 8) + '.']),
    tryIt('Which is bigger?', 'Change them to the same bottom number, then compare the tops.', function () { var d1 = pick([2, 3, 4, 5]), m = rnd(2, 3), d2 = d1 * m, n1 = rnd(1, d1 - 1), n2; do { n2 = rnd(1, d2 - 1); } while (n1 * m === n2); var a = fs(n1, d1), b = fs(n2, d2), big = n1 * m > n2 ? a : b; return Qm('Which fraction is bigger?', shuffle([a, b]), big, { vis: bars([{ n: n1, d: d1 }, { n: n2, d: d2 }]), hints: ['Change ' + a + ' into ' + d2 + 'ths by multiplying top and bottom by ' + m + '.', a + ' = ' + n1 * m + '/' + d2 + '. Now compare ' + n1 * m + '/' + d2 + ' with ' + b + '.'], explain: a + ' = ' + n1 * m + '/' + d2 + ', and ' + b + '. Comparing the tops, ' + big + ' is bigger.' }); }),
    idea('Improper fractions and mixed numbers', wholeBars(7, 4, 'Two bars cut in quarters showing 7 quarters'), ['Seven quarters is more than one whole. Fill one whole bar with 4 quarters. 3 quarters are left over.', 'So ' + fr(7, 4) + ' = ' + mx(1, 3, 4) + '. The top is bigger than the bottom, so it is an <b>improper fraction</b>. ' + mx(1, 3, 4) + ' is a <b>mixed number</b>.', 'To change it: divide the top by the bottom. The answer is the whole number and the remainder goes on top.']),
    tryIt('Improper to mixed', 'Divide the top by the bottom. The remainder goes on top of the fraction.', function () { var d = rnd(2, 8), w = rnd(1, 3), r = rnd(1, d - 1), n = w * d + r; return Qf('Write ' + n + '/' + d + ' as a mixed number.', n, d, { form: 'mixed', show: w + ' ' + r + '/' + d, vis: wholeBars(n, d), hints: ['How many times does ' + d + ' go into ' + n + '?', n + ' ÷ ' + d + ' = ' + w + ' remainder ' + r + '. The remainder is the new top number.'], explain: n + ' ÷ ' + d + ' = ' + w + ' remainder ' + r + ', so ' + n + '/' + d + ' = ' + w + ' ' + r + '/' + d + '.' }) ; }),
    watch('Add fractions with different bottoms', wk('Work out ' + fr(1, 2) + ' + ' + fr(1, 4) + '.', ['The pieces are different sizes. Change halves into quarters: 1/2 = 2/4.', 'Now the pieces match. Add the tops: 2/4 + 1/4 = 3/4. The bottom stays the same.', '1/2 + 1/4 = 3/4.'], '1/2 + 1/4 = 3/4', function (shown) { var rows = [{ n: 1, d: 2 }, { n: 1, d: 4 }]; if (shown >= 1) rows.splice(0, 1, { n: 2, d: 4, label: '1/2 = 2/4' }); if (shown >= 2) rows.push({ n: 3, d: 4, label: 'sum', col: GREEN }); return bars(rows); })),
    slip('Adding the bottoms', 'A pupil says: "1/2 + 1/3 = 2/5. I added the tops and the bottoms."', fr(1, 2) + ' + ' + fr(1, 3) + ' = ' + fr(2, 5), fr(1, 2) + ' + ' + fr(1, 3) + ' = ' + fr(3, 6) + ' + ' + fr(2, 6) + ' = ' + fr(5, 6), 'Never add the bottom numbers. The bottom tells the <b>size</b> of the pieces, so first make the pieces the same size, then add only the tops. Check: 2/5 is less than 1/2, which cannot be right.'),
    real('Sharing a recipe', 'A recipe uses 1/2 a cup of flour for pancakes and 1/4 of a cup for the sauce. Altogether you need 3/4 of a cup. A measuring cup marked in quarters makes this easy: 2 quarters + 1 quarter = 3 quarters.', bars([{ n: 3, d: 4, label: '3/4 cup', col: ORANGE }])),
    recap('What to remember', ['Equivalent fractions: multiply or divide the top and bottom by the same number.', 'Simplest form: divide by the highest common factor until you cannot go further.', 'To compare or add fractions, give them the same bottom number first.', 'Improper fraction: top bigger than bottom. Divide to make a mixed number.', 'Never add the bottom numbers.'])
  ];

  /* ================= P7 ================= */
  var P7 = [
    hook('Half of a half', ['You have half a chocolate bar. You eat half of that. How much of the whole bar did you eat?', 'Draw it: half of a half is a quarter. So ' + fr(1, 2) + ' × ' + fr(1, 2) + ' = ' + fr(1, 4) + '.', 'Today: multiplying and dividing with fractions, and linking fractions to decimals and percentages.'], area(2, 2, 1, 1, 'Half of a half is a quarter')),
    idea('A fraction times a whole number', bars([{ n: 2, d: 5, label: '2/5' }, { n: 2, d: 5, label: '2/5' }, { n: 2, d: 5, label: '2/5' }], 'Three bars each showing 2/5'), ['3 × ' + fr(2, 5) + ' means three lots of two fifths.', 'Add them: 2/5 + 2/5 + 2/5 = 6/5. That is the same as 3 × 2 = 6 fifths.', 'Rule: multiply the top by the whole number. Keep the bottom. 6/5 = ' + mx(1, 1, 5) + '.']),
    tryIt('Fraction times a whole number', 'Multiply the top number. Keep the bottom number the same.', function () { var d = rnd(3, 8), n = rnd(2, d - 1), w = rnd(2, 6); return Qf('Work out ' + w + ' × ' + n + '/' + d + '. Write the answer as a fraction.', n * w, d, { hints: ['Multiply the top number: ' + w + ' × ' + n + '.', 'Keep the bottom number ' + d + '.'], explain: w + ' × ' + n + ' = ' + n * w + ', so the answer is ' + n * w + '/' + d + '.' }); }),
    idea('A fraction times a fraction', area(3, 4, 2, 3, '2/3 of 3/4 on a grid'), ['Take a grid. Shade ' + fr(2, 3) + ' of the rows in blue. Shade ' + fr(3, 4) + ' of the columns in orange.', 'Where the colours overlap is ' + fr(2, 3) + ' × ' + fr(3, 4) + '. The overlap is 6 squares out of 12.', 'Multiply the tops: 2 × 3 = 6. Multiply the bottoms: 3 × 4 = 12. 6/12 = 1/2.']),
    watch('Multiply 3/5 × 2/3', wk('Work out ' + fr(3, 5) + ' × ' + fr(2, 3) + '.', ['Multiply the tops: 3 × 2 = 6.', 'Multiply the bottoms: 5 × 3 = 15. So we have 6/15.', 'Simplify by dividing both by 3: 6/15 = 2/5.'], '3/5 × 2/3 = 2/5', function (shown) { return area(5, 3, 3, shown >= 1 ? 2 : 0) + (shown >= 2 ? box(fr(6, 15) + (shown >= 3 ? ' = ' + fr(2, 5) : '')) : ''); })),
    tryIt('Multiply two fractions', 'Tops times tops, bottoms times bottoms. Then simplify.', function () { var a, b, c, d, p; do { b = rnd(2, 6); a = rnd(1, b - 1); d = rnd(2, 6); c = rnd(1, d - 1); p = red(a * c, b * d); } while (p[1] > 20); return Qf('Work out ' + a + '/' + b + ' × ' + c + '/' + d + '. Give the answer in its simplest form.', p[0], p[1], { simplest: true, hints: ['Multiply the tops: ' + a + ' × ' + c + ' = ' + a * c + '. Multiply the bottoms: ' + b + ' × ' + d + ' = ' + b * d + '.', 'Now simplify ' + a * c + '/' + b * d + ' if you can.'], explain: a + ' × ' + c + ' = ' + a * c + ' and ' + b + ' × ' + d + ' = ' + b * d + '. ' + a * c + '/' + b * d + (p[0] * 1 === a * c ? ' is already simplest.' : ' simplifies to ' + p[0] + '/' + p[1] + '.') }); }),
    idea('Dividing a fraction by a whole number', bars([{ n: 3, d: 4, label: '3/4' }, { n: 1, d: 4, label: '÷ 3 = 1/4' }], 'Three quarters shared into three equal parts'), ['Share ' + fr(3, 4) + ' into 3 equal parts. Each part is 1 quarter. So ' + fr(3, 4) + ' ÷ 3 = ' + fr(1, 4) + '.', 'What about ' + fr(1, 2) + ' \u00f7 3? Cut the half into 3 smaller pieces. Each piece is ' + fr(1, 6) + '.', 'Rule: dividing by a whole number makes the pieces smaller, so multiply the bottom number by it. ' + fr(1, 2) + ' \u00f7 3 = ' + fr(1, 6) + '.']),
    tryIt('Divide a fraction by a whole number', 'Multiply the bottom number by the whole number. Simplify if you can.', function () { var w = rnd(2, 5), n = rnd(1, 5), d = rnd(2, 7), p = red(n, d * w); return Qf('Work out ' + n + '/' + d + ' ÷ ' + w + '. Give the answer in its simplest form.', p[0], p[1], { simplest: true, hints: ['Dividing by ' + w + ' makes each piece ' + w + ' times smaller. Multiply the bottom by ' + w + '.', d + ' × ' + w + ' = ' + d * w + '. Now simplify ' + n + '/' + d * w + '.'], explain: n + '/' + d + ' ÷ ' + w + ' = ' + n + '/' + d * w + (p[0] === n ? '.' : ' = ' + p[0] + '/' + p[1] + '.') }); }),
    slip('Multiplying makes it bigger?', 'A pupil says: "2/3 × 3/4 must be bigger than 2/3 because multiplying makes things bigger."', 'Multiplying always makes the answer bigger.', fr(2, 3) + ' × ' + fr(3, 4) + ' = ' + fr(1, 2) + ', which is <b>smaller</b> than ' + fr(2, 3), 'When you multiply by a fraction less than 1, you take only <b>part</b> of the amount. So the answer gets smaller. Half of a half is a quarter!'),
    idea('Fractions, decimals and percentages', hundred(75), ['Percent means "out of 100". Here 75 of 100 squares are shaded.', fr(3, 4) + ' = 0.75 = 75%. They are three names for the same amount.', 'To change a fraction to a percentage, make the bottom 100: ' + fr(3, 4) + ' = ' + fr(75, 100) + ' = 75%. Or divide: 3 ÷ 4 = 0.75, then × 100.']),
    tryIt('Fraction to percentage', 'Make the bottom number 100, or divide the top by the bottom and multiply by 100.', function () { var d = pick([2, 4, 5, 10, 20, 25, 50]), n = rnd(1, d - 1), pc = n / d * 100; return Qn('Write ' + n + '/' + d + ' as a percentage. Type the number only.', pc, { vis: hundred(Math.round(pc)), hints: ['What do you multiply ' + d + ' by to get 100?', 'Multiply the top number by the same amount: ' + n + ' × ' + 100 / d + '.'], explain: d + ' × ' + 100 / d + ' = 100, so ' + n + ' × ' + 100 / d + ' = ' + pc + '. So ' + n + '/' + d + ' = ' + pc + '%.' }); }),
    watch('A two-step problem', wk('A class of 30 pupils. 2/5 play football. 1/3 of the footballers are girls. How many football-playing girls?', ['First find 2/5 of 30. 30 ÷ 5 = 6, then 6 × 2 = 12 pupils play football.', 'Now find 1/3 of those 12. 12 ÷ 3 = 4.', '4 girls play football.'], '4 girls', function (shown) { return shown < 1 ? dots(30, 5, 0) : (shown < 2 ? dots(30, 5, 2) : dots(12, 3, 1)); })),
    real('Sales and recipes', 'A shop takes 1/4 off a £80 jacket. 1/4 of 80 = 20, so you pay £60. To make a recipe for 6 into a recipe for 9, multiply every amount by 9/6 = 3/2. Fractions help you scale things up and down.', numLine(4, [{ v: 0.75, label: '3/4 = 75%' }], 'A number line from 0 to 1 with 3/4 marked')),
    recap('What to remember', ['Whole number × fraction: multiply the top, keep the bottom.', 'Fraction × fraction: tops times tops, bottoms times bottoms, then simplify.', 'Fraction ÷ whole number: multiply the bottom.', 'Fraction, decimal and percentage are three names for one amount.', 'Multiplying by a fraction less than 1 makes the answer smaller.'])
  ];

  /* ================= S1 ================= */
  var S1 = [
    hook('Scaling a recipe', ['A recipe for 6 people needs 3/4 of a cup of rice. You are cooking for 9 people. How much rice?', 'The scale factor is 9/6 = 3/2. So you need 3/4 × 3/2 = 9/8 = ' + mx(1, 1, 8) + ' cups.', 'In this lesson you will master fractions: simplifying, mixed numbers, and the four operations.'], bars([{ n: 3, d: 4, label: '3/4 cup', col: ORANGE }], 'A cup that is three quarters full')),
    idea('Equivalent fractions and simplest form', bars([{ n: 12, d: 18 }, { n: 6, d: 9 }, { n: 2, d: 3 }], 'Bars showing 12/18, 6/9 and 2/3'), ['Multiply or divide top and bottom by the same number to get an equivalent fraction. The value does not change.', 'To simplify, divide by the <b>highest common factor</b> (HCF). The HCF of 12 and 18 is 6, so 12/18 = 2/3.', 'A fraction is in <b>simplest form</b> when the top and bottom share no common factor except 1.']),
    idea('Mixed numbers and improper fractions', wholeBars(11, 4, 'Bars showing 11 quarters'), ['A mixed number has a whole number and a fraction: ' + mx(2, 3, 4) + '.', 'Mixed to improper: whole × bottom + top. 2 × 4 + 3 = 11, so ' + mx(2, 3, 4) + ' = ' + fr(11, 4) + '.', 'Improper to mixed: divide the top by the bottom. 11 ÷ 4 = 2 remainder 3, so ' + fr(11, 4) + ' = ' + mx(2, 3, 4) + '.']),
    tryIt('Convert between forms', 'Use whole × bottom + top, or divide with a remainder.', function () { var d = rnd(3, 9), w = rnd(1, 5), r = rnd(1, d - 1), n = w * d + r; if (Math.random() < 0.5) return Qf('Write ' + n + '/' + d + ' as a mixed number.', n, d, { form: 'mixed', show: w + ' ' + r + '/' + d, hints: ['Divide ' + n + ' by ' + d + '.', n + ' ÷ ' + d + ' = ' + w + ' remainder ' + r + '.'], explain: n + ' ÷ ' + d + ' = ' + w + ' remainder ' + r + ', so the answer is ' + w + ' ' + r + '/' + d + '.' }); return Qf('Write ' + w + ' ' + r + '/' + d + ' as an improper fraction.', n, d, { form: 'improper', hints: ['Multiply the whole number by the bottom: ' + w + ' × ' + d + '.', 'Add the top: ' + w * d + ' + ' + r + '.'], explain: w + ' × ' + d + ' + ' + r + ' = ' + n + ', so the answer is ' + n + '/' + d + '.' }); }),
    idea('Adding and subtracting', bars([{ n: 1, d: 3, label: '1/3 = 4/12' }, { n: 4, d: 12, label: '' }, { n: 3, d: 4, label: '3/4 = 9/12' }, { n: 9, d: 12, label: '' }], 'Thirds and quarters shown in twelfths'), ['You can only add or subtract fractions with the <b>same bottom number</b>.', 'Find the lowest common multiple (LCM) of the bottoms. For thirds and quarters it is 12.', 'Change both to twelfths, then add or subtract the tops. The bottom stays 12. Simplify at the end.']),
    watch('Add mixed numbers', wk('Work out ' + mx(2, 1, 3) + ' + ' + mx(1, 3, 4) + '.', ['Add the whole numbers: 2 + 1 = 3.', 'Add the fractions: 1/3 + 3/4. The LCM of 3 and 4 is 12. So 4/12 + 9/12 = 13/12.', '13/12 = ' + mx(1, 1, 12) + '. Add this to the whole numbers: 3 + 1 = 4.', 'The answer is ' + mx(4, 1, 12) + '.'], '2 1/3 + 1 3/4 = 4 1/12', function (shown) { return box(mx(2, 1, 3) + ' + ' + mx(1, 3, 4) + (shown >= 1 ? ' = 3 + (' + fr(1, 3) + ' + ' + fr(3, 4) + ')' : '') + (shown >= 2 ? ' = 3 + ' + fr(13, 12) : '') + (shown >= 3 ? ' = ' + mx(4, 1, 12) : '')); })),
    tryIt('Add or subtract fractions', 'Make the bottoms the same first. Then add or subtract the tops.', function () { var d1 = pick([2, 3, 4, 5, 6]), d2 = pick([2, 3, 4, 5, 6, 8, 9]); if (d1 === d2) d2 = d1 + 1; var n1 = rnd(1, d1 - 1), n2 = rnd(1, d2 - 1), L = lcm(d1, d2), a = n1 * L / d1, b = n2 * L / d2, sub = Math.random() < 0.5 && a !== b; if (sub && a < b) { var t = n1; n1 = n2; n2 = t; t = d1; d1 = d2; d2 = t; a = n1 * L / d1; b = n2 * L / d2; } var top = sub ? a - b : a + b, p = red(top, L); return Qf('Work out ' + n1 + '/' + d1 + (sub ? ' − ' : ' + ') + n2 + '/' + d2 + '. Simplest form.', p[0], p[1], { simplest: true, hints: ['The LCM of ' + d1 + ' and ' + d2 + ' is ' + L + '. Change both to ' + L + 'ths.', n1 + '/' + d1 + ' = ' + a + '/' + L + ' and ' + n2 + '/' + d2 + ' = ' + b + '/' + L + '. Now ' + (sub ? 'subtract' : 'add') + ' the tops.'], explain: a + '/' + L + (sub ? ' − ' : ' + ') + b + '/' + L + ' = ' + top + '/' + L + (p[1] === L ? '.' : ' = ' + p[0] + '/' + p[1] + '.') }); }),
    idea('Multiplying fractions', area(3, 4, 2, 3, '2/3 of 3/4 on a grid'), ['Multiply the tops and multiply the bottoms. ' + fr(2, 3) + ' × ' + fr(3, 4) + ' = ' + fr(6, 12) + ' = ' + fr(1, 2) + '.', 'You can cross-simplify first: the 3s cancel. ' + fr(2, 3) + ' × ' + fr(3, 4) + ' = ' + fr(2, 4) + ' = ' + fr(1, 2) + '.', 'With mixed numbers, change them to improper fractions first.']),
    idea('Dividing fractions', bars([{ n: 2, d: 2, label: 'bar 1' }, { n: 2, d: 2, label: 'bar 2' }, { n: 2, d: 2, label: 'bar 3' }], 'Three whole bars each cut into halves'), ['How many halves fit into 3? Each bar has 2 halves, so 3 ÷ ' + fr(1, 2) + ' = 6.', 'That is the same as 3 × 2. Dividing by a half is the same as multiplying by its <b>reciprocal</b>, 2/1.', 'Rule: <b>keep</b> the first fraction, <b>change</b> ÷ to ×, <b>flip</b> the second fraction.']),
    watch('Divide 3/4 by 2/3', wk('Work out ' + fr(3, 4) + ' ÷ ' + fr(2, 3) + '.', ['Keep the first fraction: 3/4.', 'Change ÷ to × and flip the second fraction: 2/3 becomes 3/2.', 'Multiply: 3/4 × 3/2 = 9/8 = ' + mx(1, 1, 8) + '.'], '3/4 ÷ 2/3 = 9/8', function (shown) { return box(fr(3, 4) + (shown >= 1 ? ' ÷ ' + fr(2, 3) : ' ÷ ' + fr(2, 3)) + (shown >= 2 ? ' = ' + fr(3, 4) + ' × ' + fr(3, 2) : '') + (shown >= 3 ? ' = ' + fr(9, 8) : '')); })),
    tryIt('Multiply or divide fractions', 'Multiply across. For division, keep, change, flip.', function () { var a, b, c, d, div = Math.random() < 0.5, p; do { b = rnd(2, 8); a = rnd(1, b - 1); d = rnd(2, 8); c = rnd(1, d - 1); p = div ? red(a * d, b * c) : red(a * c, b * d); } while (p[0] > 40 || p[1] > 40); return Qf('Work out ' + a + '/' + b + (div ? ' ÷ ' : ' × ') + c + '/' + d + '. Simplest form.', p[0], p[1], { simplest: true, hints: div ? ['Keep the first fraction, change ÷ to × and flip ' + c + '/' + d + ' to ' + d + '/' + c + '.', 'Now multiply ' + a + '/' + b + ' × ' + d + '/' + c + '.'] : ['Multiply the tops, then multiply the bottoms.', a + ' × ' + c + ' = ' + a * c + ' and ' + b + ' × ' + d + ' = ' + b * d + '.'], explain: (div ? a + '/' + b + ' × ' + d + '/' + c + ' = ' + a * d + '/' + b * c : a + '/' + b + ' × ' + c + '/' + d + ' = ' + a * c + '/' + b * d) + (' = ' + p[0] + '/' + p[1] + ' in simplest form.') }); }),
    slip('Flip the wrong fraction', 'A pupil works out 1/2 ÷ 1/4 and flips the first fraction: 2/1 × 1/4 = 1/2.', fr(1, 2) + ' ÷ ' + fr(1, 4) + ' = ' + fr(2, 1) + ' × ' + fr(1, 4) + ' = ' + fr(1, 2), fr(1, 2) + ' ÷ ' + fr(1, 4) + ' = ' + fr(1, 2) + ' × ' + fr(4, 1) + ' = 2', 'Only flip the <b>second</b> fraction, the one you are dividing by. Check it makes sense: how many quarters fit into a half? Two.'),
    real('Time, money and measures', 'A job takes 2 1/2 hours and you have done 3/5 of it. 3/5 of 2 1/2 hours = 3/5 × 5/2 = 3/2 = 1 1/2 hours of work done. Fractions with mixed numbers appear in wages, journey times, recipes and DIY measurements.', numLine(4, [{ v: 0.75, label: '3/4' }], 'A number line')),
    recap('What to remember', ['Simplify by dividing top and bottom by the HCF.', 'Mixed to improper: whole × bottom + top. Improper to mixed: divide and keep the remainder.', 'To add or subtract, use the LCM as the common bottom number.', 'To multiply, tops × tops and bottoms × bottoms. Cross-simplify to save work.', 'To divide: keep, change, flip the second fraction.'])
  ];

  /* ---------- install the pilot lessons ---------- */
  var LESSONS = { 503: P5, 3: P6, 703: P7, 803: S1 };
  Object.keys(LESSONS).forEach(function (k) {
    var t = S.topics[k]; if (!t) return;
    var rest = t.steps.filter(function (s) { return s.type !== 'slides'; });
    t.steps.length = 0;
    t.steps.push({ id: 'lesson', label: 'Lesson', type: 'slides', tag: 'Lesson', slides: LESSONS[k] });
    rest.forEach(function (s) { t.steps.push(s); });
    S.arrange(t);
  });
})();
