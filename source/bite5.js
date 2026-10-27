/* bite5.js: new games for the Bitesize Second level upgrade.
   Number line jumper (negatives), Coin counter (money), Triangle sorter, Treasure map (grid references),
   Circle labeller, and the Ratio mixer for P7. Each game is a lab step that finishes after a set of rounds. */
(function () {
  'use strict';
  var S = Studio, H = S.h, K = S.kit, V = S.viz, BT = window.BT, rnd = H.rnd, pick = H.pick, shuffle = H.shuffle, sg = BT.sg;
  function $(id) { return document.getElementById(id); }
  var CHEER = ['Brilliant!', 'Nice one!', 'You got it!', 'Great thinking!', 'Spot on!', 'Superstar!'];
  var TRY = ['Not this time.', 'Close. Keep going!', 'Good try!', 'Nearly. Next one!'];
  var css = document.createElement('style');
  css.textContent = '.bg-opts{display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin:12px 0}.bg-opt{min-height:56px;font-size:1.15rem;font-weight:800;background:var(--surface-2);border:2px solid var(--line);border-radius:12px;color:inherit}' +
    '.bg-opt.ok{border-color:var(--good);background:var(--good-bg)}.bg-opt.no{border-color:var(--bad);background:var(--bad-bg)}' +
    '.bg-map{display:grid;grid-template-columns:28px repeat(5,minmax(44px,1fr));gap:4px;max-width:360px;margin:8px auto}.bg-cell{min-height:48px;font-size:1.5rem;border:2px solid var(--line);border-radius:8px;background:var(--surface-2);color:inherit}' +
    '.bg-cell.ok{border-color:var(--good);background:var(--good-bg)}.bg-cell.no{border-color:var(--bad);background:var(--bad-bg)}.bg-lab{display:flex;align-items:center;justify-content:center;font-weight:800}' +
    '.bg-coins{display:flex;flex-wrap:wrap;gap:8px;justify-content:center;margin:10px 0}.bg-coin{width:60px;height:60px;border-radius:50%;font-weight:900;font-size:1rem;border:3px solid var(--fg);background:var(--surface-2);color:inherit}' +
    '.bg-total{font-size:1.6rem;font-weight:900;text-align:center;margin:6px 0}.bg-tray{min-height:40px;text-align:center;font-weight:800}';
  document.head.appendChild(css);

  /* a multiple-choice round game: cfg.make(round) -> { vis, q, options:[strings], answer:string, explain } */
  function roundGame(cfg) {
    return function (host, ctx) {
      var i = 0, score = 0, cur, locked;
      function draw(fb, cls) {
        host.innerHTML = '<div class="gm-top"><span class="gm-pill">Round ' + (i + 1) + ' of ' + cfg.rounds + '</span><span class="gm-pill">Score ' + score + '</span></div>' +
          '<div class="visual">' + cur.vis + '</div><div class="gm-say say">' + cur.q + '</div>' +
          '<div class="bg-opts">' + cur.options.map(function (o, k) { return '<button class="bg-opt" type="button" data-k="' + k + '">' + o + '</button>'; }).join('') + '</div>' +
          '<div class="fbk ' + (cls || '') + '" aria-live="polite" style="min-height:2.4em">' + (fb || '') + '</div><div class="row">' + (locked ? '<button class="btn" id="bgNext" type="button">' + (i + 1 >= cfg.rounds ? 'See my score' : 'Next') + '</button>' : '') + '</div>';
        if (locked) {
          [].forEach.call(host.querySelectorAll('.bg-opt'), function (b) { b.disabled = true; if (cur.options[Number(b.getAttribute('data-k'))] === cur.answer) b.classList.add('ok'); else if (b.getAttribute('data-k') === String(locked - 1)) b.classList.add('no'); });
          $('bgNext').addEventListener('click', function () { i++; if (i >= cfg.rounds) finish(); else { cur = cfg.make(i); locked = 0; draw(); } });
        } else {
          [].forEach.call(host.querySelectorAll('.bg-opt'), function (b) { b.addEventListener('click', function () {
            var k = Number(b.getAttribute('data-k')), ok = cur.options[k] === cur.answer; if (ok) score++; locked = k + 1;
            draw('<b>' + (ok ? CHEER[rnd(0, CHEER.length - 1)] : TRY[rnd(0, TRY.length - 1)]) + '</b> ' + cur.explain, ok ? 'ok' : 'no');
          }); });
        }
      }
      function finish() {
        host.innerHTML = '<div class="gm-top"><span class="gm-pill">Finished!</span></div><p class="gm-say say">You got <b>' + score + ' out of ' + cfg.rounds + '</b>. ' + (score === cfg.rounds ? 'A perfect round!' : score >= cfg.rounds - 2 ? 'Great work!' : 'Have another go to beat your score.') + '</p><div class="row"><button class="btn" id="bgAgain" type="button">Play again</button></div>';
        $('bgAgain').addEventListener('click', function () { i = 0; score = 0; locked = 0; cur = cfg.make(0); draw(); });
        if (ctx && ctx.complete) ctx.complete();
      }
      cur = cfg.make(0); locked = 0; draw();
    };
  }
  function opts4(ans, cands, fmt) {
    fmt = fmt || String; var out = [ans], k = 1;
    shuffle(cands.slice()).forEach(function (c) { if (out.length < 4 && out.indexOf(c) < 0) out.push(c); });
    while (out.length < 4) { if (out.indexOf(ans + k) < 0) out.push(ans + k); if (out.length < 4 && out.indexOf(ans - k) < 0) out.push(ans - k); k++; }
    return shuffle(out.map(fmt));
  }

  /* ---------- Number line jumper ---------- */
  function numLine(level) {
    var lim = level === 1 ? 8 : level === 2 ? 12 : 60, u = level === 3 ? 10 : 1, maxm = level === 1 ? 7 : level === 2 ? 10 : 50;
    return roundGame({ rounds: 6, make: function () {
      var s = rnd(-lim / u + 2, lim / u - 2) * u, m = rnd(2, maxm / u) * u, right = Math.random() < 0.5, end = s + (right ? m : -m);
      if (end < -lim || end > lim) { right = !right; end = s + (right ? m : -m); }
      if (end < -lim || end > lim) { m = u * 2; end = s + (right ? m : -m); if (end < -lim || end > lim) { right = !right; end = s + (right ? m : -m); } }
      var vis = BT.NL(-lim, lim, { lab: level === 1 ? 2 : level === 2 ? 2 : 10, tick: level === 3 ? 10 : 1, marks: [[s, 215]], jumps: [], alt: 'A number line from ' + sg(-lim) + ' to ' + lim + ' with a start point at ' + sg(s) });
      return { vis: vis, q: 'Start at <b>' + sg(s) + '</b>. Move <b>' + m + ' ' + (right ? 'to the right' : 'to the left') + '</b> (' + (right ? 'add' : 'subtract') + '). Where do you land?', options: opts4(end, [end + u, end - u, end + 2 * u, end - 2 * u, s + m, s - m, -end].filter(function (x) { return x >= -lim - 2 * u && x <= lim + 2 * u; }), sg), answer: sg(end),
        explain: sg(s) + (right ? ' + ' : ' − ') + m + ' = ' + sg(end) + '.' };
    } });
  }

  /* ---------- Coin counter ---------- */
  var COINS = [1, 2, 5, 10, 20, 50, 100, 200];
  function money(p) { return p >= 100 ? '£' + (p / 100).toFixed(2) : p + 'p'; }
  function coinName(p) { return p >= 100 ? '£' + p / 100 : p + 'p'; }
  function coinCounter(level) {
    return function (host, ctx) {
      var round = 0, tray = [], target, fewest, rounds = 4;
      function newTarget() {
        var lo = level === 1 ? 31 : 81, hi = level === 1 ? 199 : 499;
        target = rnd(lo, hi); var left = target; fewest = 0; COINS.slice().reverse().forEach(function (c) { while (left >= c) { left -= c; fewest++; } });
        tray = [];
      }
      function total() { return tray.reduce(function (a, b) { return a + b; }, 0); }
      function draw(fb, cls) {
        host.innerHTML = '<div class="gm-top"><span class="gm-pill">Challenge ' + (round + 1) + ' of ' + rounds + '</span></div>' +
          '<p class="gm-say say">Make exactly <b>' + money(target) + '</b>. Tap coins to add them. Try to use the fewest coins you can.</p>' +
          '<div class="bg-coins">' + COINS.map(function (c) { return '<button class="bg-coin" type="button" data-c="' + c + '" aria-label="Add ' + coinName(c) + '">' + coinName(c) + '</button>'; }).join('') + '</div>' +
          '<div class="bg-tray" aria-live="polite">' + (tray.length ? tray.map(coinName).join(' + ') : 'No coins yet') + '</div><div class="bg-total">Total: ' + money(total()) + '</div>' +
          '<div class="row"><button class="btn ghost" id="cUndo" type="button">Undo</button><button class="btn ghost" id="cClear" type="button">Clear</button><button class="btn" id="cDone" type="button">Check</button></div>' +
          '<div class="fbk ' + (cls || '') + '" aria-live="polite" style="min-height:2.4em;margin-top:8px">' + (fb || '') + '</div>';
        [].forEach.call(host.querySelectorAll('.bg-coin'), function (b) { b.addEventListener('click', function () { tray.push(Number(b.getAttribute('data-c'))); draw(); }); });
        $('cUndo').addEventListener('click', function () { tray.pop(); draw(); });
        $('cClear').addEventListener('click', function () { tray = []; draw(); });
        $('cDone').addEventListener('click', function () {
          var t = total();
          if (t === target) {
            var n = tray.length, msg = n === fewest ? '<b>Spot on, and the fewest coins possible!</b>' : '<b>Exactly right!</b> You used ' + n + ' coins. The fewest possible is ' + fewest + '.';
            round++;
            if (round >= rounds) { host.innerHTML = '<div class="gm-top"><span class="gm-pill">Finished!</span></div><p class="gm-say say">' + msg + ' You made all ' + rounds + ' totals.</p><div class="row"><button class="btn" id="cAgain" type="button">Play again</button></div>'; $('cAgain').addEventListener('click', function () { round = 0; newTarget(); draw(); }); if (ctx && ctx.complete) ctx.complete(); }
            else { draw(msg + ' <button class="btn" id="cNext" type="button">Next challenge</button>', 'ok'); $('cNext').addEventListener('click', function () { newTarget(); draw(); }); }
          } else draw(t > target ? '<b>Too much.</b> You have ' + money(t) + ', which is ' + money(t - target) + ' over. Undo a coin.' : '<b>Not enough yet.</b> You need ' + money(target - t) + ' more.', 'no');
        });
      }
      newTarget(); draw();
    };
  }

  /* ---------- Triangle sorter ---------- */
  function triSvg(a, b, c) {
    var cx = (a * a + c * c - b * b) / (2 * c), cy = Math.sqrt(Math.max(0.01, a * a - cx * cx)), k = Math.min(210 / c, 110 / cy, 40), pts = [[0, 0], [c, 0], [cx, cy]].map(function (p) { return [40 + p[0] * k, 130 - p[1] * k]; });
    var s = '<polygon points="' + pts.map(function (p) { return p[0].toFixed(1) + ',' + p[1].toFixed(1); }).join(' ') + '" style="fill:' + V.hsl(215, 'band') + ';stroke:var(--fg);stroke-width:3;stroke-linejoin:round"/>';
    function lab(p, q, v, dx, dy) { return BT.txt((p[0] + q[0]) / 2 + dx, (p[1] + q[1]) / 2 + dy, v + ' cm', 13); }
    s += lab(pts[0], pts[1], c, 0, 20) + lab(pts[1], pts[2], b, 20, 0) + lab(pts[0], pts[2], a, -22, 0);
    return BT.svg(300, 150, 'A triangle with sides ' + a + ', ' + b + ' and ' + c + ' centimetres', s, 320);
  }
  function triGame(level) {
    var T = [[1, 1, 1], [1, 1, 'x'], [1, 'x', 'y']];
    return roundGame({ rounds: 6, make: function () {
      var t = pick(['equilateral', 'isosceles', 'scalene']), a = rnd(3, level === 1 ? 7 : 12), b, c, sides;
      if (t === 'equilateral') sides = [a, a, a];
      else if (t === 'isosceles') { b = rnd(2, a + a - 1); while (b === a) b = rnd(2, a + a - 1); sides = shuffle([a, a, b]); }
      else { var tr = pick([[3, 4, 5], [4, 5, 6], [5, 6, 7], [5, 7, 9], [4, 6, 7], [6, 8, 10], [6, 9, 11], [7, 8, 12]]); sides = shuffle(tr.slice()); }
      return { vis: triSvg(sides[0], sides[1], sides[2]), q: 'What type of triangle has sides of <b>' + sides.join(' cm, ') + ' cm</b>?', options: ['equilateral', 'isosceles', 'scalene'], answer: t,
        explain: t === 'equilateral' ? 'All three sides are equal.' : t === 'isosceles' ? 'Exactly two sides are equal.' : 'No two sides are equal.' };
    } });
  }

  /* ---------- Treasure map (grid references) ---------- */
  function mapGame(level) {
    return function (host, ctx) {
      var ICONS = [['🏠', 'house'], ['🌳', 'tree'], ['⚓', 'anchor'], ['⛰️', 'mountain'], ['🏰', 'castle'], ['⛺', 'tent']];
      var items, i = 0, score = 0, rounds = 6, mode, ask;
      function setup() {
        items = {}; shuffle(ICONS.slice()).slice(0, 5).forEach(function (ic) { var ref; do { ref = pick('ABCDE'.split('')) + rnd(1, 4); } while (items[ref]); items[ref] = ic; });
      }
      function ref(c, r) { return 'ABCDE'.charAt(c) + r; }
      function newRound() { mode = i % 2 === 0 ? 'tap' : 'name'; var keys = Object.keys(items); ask = pick(keys); if (mode === 'tap') { var e; do { e = pick('ABCDE'.split('')) + rnd(1, 4); } while (items[e] && Math.random() < 0.5); ask = e; } }
      function draw(fb, cls, done) {
        var cells = '';
        for (var r = 4; r >= 1; r--) { cells += '<div class="bg-lab">' + r + '</div>'; for (var c = 0; c < 5; c++) { var rf = ref(c, r), it = items[rf]; cells += '<button class="bg-cell" type="button" data-r="' + rf + '" aria-label="Square ' + rf + (it ? ', ' + it[1] : '') + '">' + (it ? it[0] : '') + '</button>'; } }
        cells += '<div></div>' + 'ABCDE'.split('').map(function (l) { return '<div class="bg-lab">' + l + '</div>'; }).join('');
        var q = mode === 'tap' ? 'Tap square <b>' + ask + '</b> on the map.' : 'Which square is the <b>' + items[ask][1] + '</b> in?';
        var optsHtml = '';
        if (mode === 'name') { var near = []; for (var cc = 0; cc < 5; cc++) for (var rr = 1; rr <= 4; rr++) { var q2 = ref(cc, rr); if (q2 !== ask && (q2.charAt(0) === ask.charAt(0) || q2.charAt(1) === ask.charAt(1))) near.push(q2); } var o = shuffle([ask].concat(shuffle(near).slice(0, 3))); optsHtml = '<div class="bg-opts">' + o.map(function (x) { return '<button class="bg-opt" type="button" data-o="' + x + '">' + x + '</button>'; }).join('') + '</div>'; }
        host.innerHTML = '<div class="gm-top"><span class="gm-pill">Round ' + (i + 1) + ' of ' + rounds + '</span><span class="gm-pill">Score ' + score + '</span></div><p class="gm-say say">' + q + '</p><div class="bg-map">' + cells + '</div>' + optsHtml +
          '<div class="fbk ' + (cls || '') + '" aria-live="polite" style="min-height:2.4em">' + (fb || '') + '</div><div class="row">' + (done ? '<button class="btn" id="mNext" type="button">' + (i + 1 >= rounds ? 'See my score' : 'Next') + '</button>' : '') + '</div>';
        if (done) { $('mNext').addEventListener('click', function () { i++; if (i >= rounds) finish(); else { newRound(); draw(); } }); return; }
        function answer(given) {
          var ok = given === ask; if (ok) score++;
          draw('<b>' + (ok ? CHEER[rnd(0, CHEER.length - 1)] : TRY[rnd(0, TRY.length - 1)]) + '</b> ' + (mode === 'tap' ? 'Square ' + ask + ' is column ' + ask.charAt(0) + ', row ' + ask.charAt(1) + '.' : 'The ' + items[ask][1] + ' is in ' + ask + '. Letter first, then number.'), ok ? 'ok' : 'no', true);
          var tgt = host.querySelector('[data-r="' + ask + '"]'); if (tgt) tgt.classList.add('ok');
        }
        if (mode === 'tap') [].forEach.call(host.querySelectorAll('.bg-cell'), function (b) { b.addEventListener('click', function () { answer(b.getAttribute('data-r')); }); });
        else [].forEach.call(host.querySelectorAll('.bg-opt'), function (b) { b.addEventListener('click', function () { answer(b.getAttribute('data-o')); }); });
      }
      function finish() {
        host.innerHTML = '<div class="gm-top"><span class="gm-pill">Finished!</span></div><p class="gm-say say">You got <b>' + score + ' out of ' + rounds + '</b>. ' + (score >= rounds - 1 ? 'You are a grid reference expert!' : 'Have another go.') + '</p><div class="row"><button class="btn" id="mAgain" type="button">Play again</button></div>';
        $('mAgain').addEventListener('click', function () { i = 0; score = 0; setup(); newRound(); draw(); });
        if (ctx && ctx.complete) ctx.complete();
      }
      setup(); newRound(); draw();
    };
  }

  /* ---------- Circle labeller ---------- */
  function circleSvg(part) {
    var cx = 130, cy = 80, r = 62, ang = rnd(10, 80) * Math.PI / 180, a2 = rnd(0, 160) * Math.PI / 180, ink = 'var(--fg)', hl = V.hsl(22);
    var s = '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" style="fill:' + V.hsl(215, 'band') + ';stroke:' + (part === 'circumference' ? hl : ink) + ';stroke-width:' + (part === 'circumference' ? 7 : 3) + '"/>';
    if (part === 'radius') s += '<line x1="' + cx + '" y1="' + cy + '" x2="' + (cx + r * Math.cos(ang)) + '" y2="' + (cy - r * Math.sin(ang)) + '" style="stroke:' + hl + ';stroke-width:5;stroke-linecap:round"/>';
    if (part === 'diameter') s += '<line x1="' + (cx - r * Math.cos(a2)) + '" y1="' + (cy + r * Math.sin(a2)) + '" x2="' + (cx + r * Math.cos(a2)) + '" y2="' + (cy - r * Math.sin(a2)) + '" style="stroke:' + hl + ';stroke-width:5;stroke-linecap:round"/>';
    s += '<circle cx="' + cx + '" cy="' + cy + '" r="' + (part === 'centre' ? 8 : 4) + '" style="fill:' + (part === 'centre' ? hl : ink) + '"/>';
    return BT.svg(260, 160, 'A circle with one part picked out in orange', s, 300);
  }
  function circleGame() {
    var NAMES = ['radius', 'diameter', 'circumference', 'centre'], WHY = { radius: 'The radius goes from the centre to the edge.', diameter: 'The diameter goes straight across through the centre.', circumference: 'The circumference is the distance all the way round.', centre: 'The centre is the middle point of the circle.' };
    return roundGame({ rounds: 6, make: function () { var p = pick(NAMES); return { vis: circleSvg(p), q: 'Which part of the circle is shown in <b>orange</b>?', options: shuffle(NAMES.slice()), answer: p, explain: WHY[p] }; } });
  }

  /* ---------- install ---------- */
  function lab(n, id, label, title, lead, mount) {
    var t = S.topics[n]; if (!t || t.steps.some(function (s) { return s.id === id; })) return;
    t.steps.push({ id: id, label: label, type: 'lab', tag: 'Activity time · Game', title: title, lead: lead, mount: mount }); S.arrange(t);
  }
  lab(501, 'g_numline', 'Number line jumper', 'Number line jumper', 'Start on the number line, make the move and find where you land.', numLine(1));
  lab(1, 'g_numline', 'Number line jumper', 'Number line jumper', 'Start on the number line, make the move and find where you land.', numLine(2));
  lab(701, 'g_numline', 'Number line jumper', 'Number line jumper', 'Jump along the number line in tens, past zero and back again.', numLine(3));
  lab(505, 'g_coins', 'Coin counter', 'Coin counter', 'Make each total with coins. Can you use the fewest coins?', coinCounter(1));
  lab(5, 'g_coins', 'Coin counter', 'Coin counter', 'Make each total with coins. Can you use the fewest coins?', coinCounter(2));
  lab(507, 'g_tri', 'Triangle sorter', 'Triangle sorter', 'Look at the sides and name each triangle.', triGame(1));
  lab(507, 'g_map', 'Treasure map', 'Treasure map', 'Use grid references to find places on the map. Letter first, then number.', mapGame(1));
  lab(7, 'g_tri', 'Triangle sorter', 'Triangle sorter', 'Look at the sides and name each triangle.', triGame(2));
  lab(7, 'g_circle', 'Circle labeller', 'Circle labeller', 'Name the part of the circle that is shown in orange.', circleGame());
  lab(707, 'g_circle', 'Circle labeller', 'Circle labeller', 'Name the part of the circle that is shown in orange.', circleGame());
  if (BT.mixerCfg) { var t7 = S.topics[711]; if (t7 && !t7.steps.some(function (s) { return s.id === 'lab_mixer'; })) { t7.steps.push({ id: 'lab_mixer', label: 'Ratio mixer', type: 'lab', tag: 'Activity time · We do it together', title: BT.mixerCfg.title, lead: BT.mixerCfg.lead, mount: K.explore(BT.mixerCfg) }); S.arrange(t7); } }
})();
