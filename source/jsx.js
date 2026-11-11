/* jsx.js: "Slide the line" graph activity (JSXGraph, self-hosted, loaded only when the activity opens).
   Students change the gradient m and the y-intercept c of y = mx + c to cover a dashed target line. */
(function () {
  'use strict';
  var S = Studio;
  function $(id) { return document.getElementById(id); }
  function rnd(a, b) { return a + Math.floor(Math.random() * (b - a + 1)); }
  function sg(n) { return n < 0 ? '−' + Math.abs(n) : String(n); }

  var css = document.createElement('style');
  css.textContent = '.jx-box{width:100%;aspect-ratio:1/1;max-height:520px;margin:8px auto;touch-action:none}' +
    '@media (min-width:760px){.jx-box{max-width:520px}}' +
    '.jx-eq{font-size:1.5rem;font-weight:800;text-align:center;margin:6px 0}.jx-sl{width:100%;height:44px;accent-color:#2b5fd9}' +
    '.jx-row{display:block;margin:6px 0;font-weight:700}.jx-fb{min-height:1.4em;font-weight:700;margin:6px 0}' +
    '.jx-t{background:#fff7e0;border-radius:12px;padding:10px 12px;margin:8px 0;font-weight:700}';
  document.head.appendChild(css);

  var loading = null;
  function load() {
    if (window.JXG && JXG.JSXGraph) return Promise.resolve(window.JXG);
    if (loading) return loading;
    loading = new Promise(function (res, rej) {
      var l = document.createElement('link'); l.rel = 'stylesheet'; l.href = '/vendor/jsxgraph/jsxgraph.min.css'; document.head.appendChild(l);
      var s = document.createElement('script'); s.src = '/vendor/jsxgraph/jsxgraphcore.min.js';
      s.onload = function () { res(window.JXG); }; s.onerror = function () { loading = null; rej(); };
      document.head.appendChild(s);
    });
    return loading;
  }
  function eq(m, c) {
    var a = m === 0 ? '' : (m === 1 ? 'x' : m === -1 ? '−x' : sg(m) + 'x');
    if (m === 0) return 'y = ' + sg(c);
    if (c === 0) return 'y = ' + a;
    return 'y = ' + a + (c < 0 ? ' − ' + Math.abs(c) : ' + ' + c);
  }

  function mount(host, ctx) {
    var m = 1, c = 0, tm = 2, tc = -1, right = 0, NEED = 3, board = null, lineObj = null, tri = [];
    function newTarget() {
      var om = tm, oc = tc;
      do { tm = rnd(-3, 3); tc = rnd(-4, 4); } while ((tm === om && tc === oc) || (tm === 0 && tc === 0));
      if (board) drawTarget();
    }
    newTarget();
    host.innerHTML =
      '<div class="jx-t" id="jxt"></div>' +
      '<div id="jxbox" class="jxgbox jx-box" aria-label="Graph of the line you are changing and the dashed target line"></div>' +
      '<div class="jx-eq" id="jxeq" aria-live="polite"></div>' +
      '<label class="jx-row">Gradient m: <b id="jxmv">1</b><input class="jx-sl" id="jxm" type="range" min="-5" max="5" step="1" value="1" aria-label="Gradient m"></label>' +
      '<label class="jx-row">y-intercept c: <b id="jxcv">0</b><input class="jx-sl" id="jxc" type="range" min="-5" max="5" step="1" value="0" aria-label="y-intercept c"></label>' +
      '<div class="jx-fb" id="jxfb" aria-live="polite"></div>' +
      '<button class="btn primary" id="jxck">Check my line</button>';
    function say() {
      $('jxt').innerHTML = 'Slide <b>m</b> and <b>c</b> until your blue line covers the dashed orange line. Matched <b>' + right + '</b> of ' + NEED + '.';
      $('jxeq').textContent = eq(m, c); $('jxt').setAttribute('data-target', tm + ',' + tc);
      $('jxmv').textContent = sg(m); $('jxcv').textContent = sg(c);
    }
    function drawLine() {
      if (!board) return;
      lineObj.setAttribute({}); board.update();
      tri.forEach(function (o) { try { board.removeObject(o); } catch (e) { } }); tri = [];
      if (Math.abs(m) <= 5) {
        var p0 = board.create('point', [0, c], { name: '', size: 3, fixed: true, strokeColor: '#2b5fd9', fillColor: '#2b5fd9', withLabel: false });
        var p1 = board.create('point', [1, c], { name: '', size: 1, fixed: true, visible: false, withLabel: false });
        var p2 = board.create('point', [1, c + m], { name: '', size: 3, fixed: true, strokeColor: '#2b5fd9', fillColor: '#2b5fd9', withLabel: false });
        var run = board.create('segment', [p0, p1], { strokeColor: '#16a34a', strokeWidth: 2, dash: 2, fixed: true });
        var rise = board.create('segment', [p1, p2], { strokeColor: '#dc2626', strokeWidth: 2, dash: 2, fixed: true });
        var t1 = board.create('text', [0.4, c - 0.45, 'run 1'], { fontSize: 13, strokeColor: '#16a34a', fixed: true });
        var t2 = board.create('text', [1.12, c + m / 2, 'rise ' + sg(m)], { fontSize: 13, strokeColor: '#dc2626', fixed: true });
        tri = [p0, p1, p2, run, rise, t1, t2];
      }
    }
    var tgt = null;
    function drawTarget() { if (tgt) board.removeObject(tgt); tgt = board.create('functiongraph', [function (x) { return tm * x + tc; }], { strokeColor: '#f59e0b', strokeWidth: 4, dash: 3, fixed: true, highlight: false }); board.update(); }
    function upd() { say(); drawLine(); $('jxfb').textContent = ''; }
    $('jxm').addEventListener('input', function (e) { m = Number(e.target.value); upd(); });
    $('jxc').addEventListener('input', function (e) { c = Number(e.target.value); upd(); });
    $('jxck').addEventListener('click', function () {
      if (right >= NEED) return;
      if (m === tm && c === tc) {
        right++;
        $('jxfb').innerHTML = '<b>Yes!</b> The line is ' + eq(tm, tc) + '. The gradient is ' + sg(tm) + ' and it crosses the y-axis at ' + sg(tc) + '.';
        if (right >= NEED) ctx.complete(); else newTarget();
      } else {
        var hint = m !== tm ? (m < tm ? 'Your line is not steep enough. Try a bigger m.' : 'Your line is too steep. Try a smaller m.') : (c < tc ? 'The gradient is right. Move the line up: make c bigger.' : 'The gradient is right. Move the line down: make c smaller.');
        $('jxfb').textContent = 'Not yet. ' + hint;
      }
      say();
    });
    say();
    load().then(function (J) {
      if (!host.isConnected || !$('jxbox')) return;
      board = J.JSXGraph.initBoard('jxbox', { boundingbox: [-6.5, 6.5, 6.5, -6.5], axis: true, grid: true, showCopyright: false, showNavigation: false, pan: { enabled: false }, zoom: { enabled: false }, keepAspectRatio: true });
      drawTarget();
      lineObj = board.create('functiongraph', [function (x) { return m * x + c; }], { strokeColor: '#2b5fd9', strokeWidth: 4, fixed: true, highlight: false });
      drawLine();
    }).catch(function () { var b = $('jxbox'); if (b) b.outerHTML = '<p class="note">The graph could not load on this device.</p>'; });
  }

  var TOPICS = [
    { n: 828, id: 'a_slide', label: 'Slide the line', title: 'Slide the line', lead: 'Change the gradient and the y-intercept to match a line.', mount: mount },
    { n: 847, id: 'a_slide', label: 'Slide the line', title: 'Slide the line', lead: 'Change the gradient and the y-intercept to match a line.', mount: mount }
  ];
  TOPICS.forEach(function (cfg) {
    var t = S.topics[cfg.n]; if (!t || t.steps.some(function (s) { return s.id === cfg.id; })) return;
    var step = { id: cfg.id, label: cfg.label, type: 'lab', tag: 'Lab', title: cfg.title, lead: cfg.lead, mount: cfg.mount };
    var at = -1; t.steps.forEach(function (s, i) { if (at < 0 && /^a_/.test(s.id)) at = i; });
    if (at < 0) t.steps.push(step); else t.steps.splice(at, 0, step);
    S.arrange(t);
  });
})();
