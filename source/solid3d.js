/* solid3d.js: "Fold the net" 3D activity (three.js, loaded only when the activity opens). */
(function () {
  'use strict';
  var S = Studio;
  function $(id) { return document.getElementById(id); }
  function rnd(n) { return Math.floor(Math.random() * n); }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = rnd(i + 1), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }

  var css = document.createElement('style');
  css.textContent = '.s3-cv{width:100%;height:320px;display:block;border-radius:14px;background:#f3f7ff;touch-action:pan-y;margin:8px 0}' +
    '@media (min-width:760px){.s3-cv{height:500px}}' +
    '.s3-shapes{display:flex;flex-wrap:wrap;gap:8px;margin:6px 0}.s3-shapes .btn{width:auto;flex:0 0 auto;min-height:44px;padding:8px 14px}.s3-shapes .btn.on{background:#14213d;color:#fff}' +
    '.s3-sl{width:100%;height:44px;accent-color:#2b5fd9}.s3-row{display:block;margin:6px 0;font-weight:700}.s3-facts{background:var(--surface-2);border-radius:12px;padding:10px 12px;margin:8px 0;font-weight:700}' +
    '.s3-q{background:#fff7e0;border-radius:12px;padding:10px 12px;margin:8px 0}.s3-q .row{display:flex;gap:8px;flex-wrap:wrap;margin-top:8px}';
  document.head.appendChild(css);

  var R3 = Math.sqrt(3);
  function tri(a, b, apexDist) { /* isosceles triangle on edge a-b, apex outward at apexDist; returns poly + outward normal not needed */
    return null;
  }
  function sub(p, q) { return [p[0] - q[0], p[1] - q[1]]; }
  function norm(v) { var l = Math.hypot(v[0], v[1]); return [v[0] / l, v[1] / l]; }
  function mid(p, q) { return [(p[0] + q[0]) / 2, (p[1] + q[1]) / 2]; }
  function cen(poly) { var x = 0, y = 0; poly.forEach(function (p) { x += p[0]; y += p[1]; }); return [x / poly.length, y / poly.length]; }
  /* triangle sitting outside edge a-b, away from point 'away' */
  function tOut(a, b, h, away) {
    var m = mid(a, b), d = norm(sub(b, a)), n = [-d[1], d[0]], w = sub(away, m);
    if (n[0] * w[0] + n[1] * w[1] > 0) n = [-n[0], -n[1]];
    return [a, b, [m[0] + n[0] * h, m[1] + n[1] * h]];
  }

  /* each net: faces = [{poly, parent, a, b, fold}], counts, scale */
  var D = Math.PI / 180;
  function boxNet(w, d, h) {
    var x = w / 2, z = d / 2;
    var f = [
      { poly: [[-x, -z], [x, -z], [x, z], [-x, z]] },
      { poly: [[x, -z], [x + h, -z], [x + h, z], [x, z]], parent: 0, a: [x, -z], b: [x, z], fold: 90 },
      { poly: [[-x - h, -z], [-x, -z], [-x, z], [-x - h, z]], parent: 0, a: [-x, -z], b: [-x, z], fold: 90 },
      { poly: [[-x, z], [x, z], [x, z + h], [-x, z + h]], parent: 0, a: [-x, z], b: [x, z], fold: 90 },
      { poly: [[-x, -z - h], [x, -z - h], [x, -z], [-x, -z]], parent: 0, a: [-x, -z], b: [x, -z], fold: 90 },
      { poly: [[-x, -z - h - d], [x, -z - h - d], [x, -z - h], [-x, -z - h]], parent: 4, a: [-x, -z - h], b: [x, -z - h], fold: 90 }
    ];
    return f;
  }
  function prismNet() {
    var s = 2, L = 3, x = s / 2, z = L / 2, hT = s * R3 / 2;
    return [
      { poly: [[-x, -z], [x, -z], [x, z], [-x, z]] },
      { poly: [[x, -z], [x + s, -z], [x + s, z], [x, z]], parent: 0, a: [x, -z], b: [x, z], fold: 120 },
      { poly: [[-x - s, -z], [-x, -z], [-x, z], [-x - s, z]], parent: 0, a: [-x, -z], b: [-x, z], fold: 120 },
      { poly: [[-x, z], [x, z], [0, z + hT]], parent: 0, a: [-x, z], b: [x, z], fold: 90 },
      { poly: [[-x, -z], [x, -z], [0, -z - hT]], parent: 0, a: [-x, -z], b: [x, -z], fold: 90 }
    ];
  }
  function pyramidNet() {
    var h = 1.6, sl = Math.sqrt(h * h + 1), fold = 180 - Math.atan2(h, 1) / D, b = [[-1, -1], [1, -1], [1, 1], [-1, 1]];
    var f = [{ poly: b }];
    for (var i = 0; i < 4; i++) { var p = b[i], q = b[(i + 1) % 4]; f.push({ poly: tOut(p, q, sl, [0, 0]), parent: 0, a: p, b: q, fold: fold }); }
    return f;
  }
  function tetraNet() {
    var r = 2 / (2 * R3), A = [-1, -r], B = [1, -r], C = [0, R3 - r], base = [A, B, C], fold = 180 - Math.acos(1 / 3) / D;
    var f = [{ poly: base }];
    [[A, B], [B, C], [C, A]].forEach(function (e) { f.push({ poly: tOut(e[0], e[1], R3, [0, 0]), parent: 0, a: e[0], b: e[1], fold: fold }); });
    return f;
  }
  var SHAPES = [
    { name: 'Cube', net: function () { return boxNet(2, 2, 2); }, fev: [6, 12, 8], rest: 'It has 6 square faces.' },
    { name: 'Cuboid', net: function () { return boxNet(3.2, 2, 1.4); }, fev: [6, 12, 8], rest: 'It has 6 rectangular faces. Opposite faces match.' },
    { name: 'Triangular prism', net: prismNet, fev: [5, 9, 6], rest: 'It has 2 triangles and 3 rectangles.' },
    { name: 'Square-based pyramid', net: pyramidNet, fev: [5, 8, 5], rest: 'It has 1 square and 4 triangles.' },
    { name: 'Tetrahedron', net: tetraNet, fev: [4, 6, 4], rest: 'It has 4 triangles. It is a triangular-based pyramid.' }
  ];
  var WORD = ['faces', 'edges', 'vertices'];
  var NEED = 3;

  function mount(host, ctx) {
    var cur = 0, v = 0.45, T = null, st = null, right = 0, qk = -1, answered = false, folded = {}, alive = true;
    host.innerHTML =
      '<p class="note" style="min-height:0">Pick a solid. Slide to fold its net into the 3D shape. Drag the picture to look from any side. Answer ' + NEED + ' questions to finish.</p>' +
      '<div class="s3-shapes" id="s3sh"></div><canvas class="s3-cv" id="s3cv" aria-label="3D picture of a net folding into a solid"></canvas>' +
      '<input class="s3-sl" id="s3sl" type="range" min="0" max="100" value="45" aria-label="How folded the net is">' +
      '<div class="row"><button class="btn" id="s3f" type="button">Fold it</button><button class="btn ghost" id="s3u" type="button">Unfold</button></div>' +
      '<div class="s3-facts" id="s3t" aria-live="polite"></div><div id="s3q"></div>';
    SHAPES.forEach(function (s, i) { var b = document.createElement('button'); b.type = 'button'; b.className = 'btn ghost'; b.textContent = s.name; b.addEventListener('click', function () { pick(i); }); $('s3sh').appendChild(b); });

    function facts() {
      var s = SHAPES[cur], el = $('s3t');
      if (v < 0.02) el.innerHTML = '<b>Flat net of a ' + s.name.toLowerCase() + '.</b> ' + s.fev[0] + ' flat shapes joined along their edges. Slide to fold.';
      else if (v > 0.98) el.innerHTML = '<b>Folded!</b> A ' + s.name.toLowerCase() + ' has ' + s.fev[0] + ' faces, ' + s.fev[1] + ' edges and ' + s.fev[2] + ' vertices. ' + s.rest;
      else el.innerHTML = '<b>Folding…</b> Keep going until the edges meet.';
      $('s3sl').value = Math.round(v * 100);
    }
    function question() {
      var box = $('s3q'); if (!box) return;
      if (v <= 0.98) { box.innerHTML = ''; return; }
      if (right >= NEED) { box.innerHTML = '<div class="s3-q"><b>Brilliant!</b> You got ' + NEED + ' right. Try the other solids too.</div>'; return; }
      var s = SHAPES[cur];
      if (qk < 0) qk = rnd(3);
      var ans = s.fev[qk], opts = shuffle([ans, ans + 1 + rnd(2), Math.max(2, ans - 1 - rnd(2))].filter(function (x, i, a) { return a.indexOf(x) === i; }));
      while (opts.length < 3) { var x = ans + 2 + rnd(3); if (opts.indexOf(x) < 0) opts.push(x); }
      box.innerHTML = '<div class="s3-q"><b>How many ' + WORD[qk] + ' does a ' + s.name.toLowerCase() + ' have?</b> (' + right + ' of ' + NEED + ' right so far)<div class="row" id="s3o">' +
        opts.map(function (o) { return '<button type="button" class="btn ghost" data-v="' + o + '">' + o + '</button>'; }).join('') + '</div><div id="s3fb" aria-live="polite" style="margin-top:6px"></div></div>';
      box.querySelectorAll('[data-v]').forEach(function (b) { b.addEventListener('click', function () {
        if (Number(b.getAttribute('data-v')) === ans) { right++; qk = -1; if (right >= NEED) ctx.complete(); question(); }
        else $('s3fb').innerHTML = 'Not quite. Look at the folded solid and count again.';
      }); });
    }
    function setFold(x) { v = Math.max(0, Math.min(1, x)); if (T) st.apply(v); facts(); question(); if (v > 0.98) folded[cur] = 1; }
    function go(to) {
      var from = v, t0 = performance.now(), rm = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (rm) { setFold(to); return; }
      (function stp(t) { if (!alive) return; var k = Math.min(1, (t - t0) / 1000), e = k < .5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2; setFold(from + (to - from) * e); if (k < 1) requestAnimationFrame(stp); })(t0);
    }
    function pick(i) {
      cur = i; qk = -1; $('s3sh').querySelectorAll('.btn').forEach(function (b, k) { b.classList.toggle('on', k === i); });
      if (T) st.build(SHAPES[i].net());
      setFold(0.0); go(1);
    }
    $('s3sl').addEventListener('input', function (e) { setFold(Number(e.target.value) / 100); });
    $('s3f').addEventListener('click', function () { go(1); });
    $('s3u').addEventListener('click', function () { go(0); });

    import('/vendor/three/three.module.min.js').then(function (M) {
      T = M; var cv = $('s3cv'); if (!cv || !host.isConnected) return;
      var r = new T.WebGLRenderer({ canvas: cv, antialias: true }); r.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      var sc = new T.Scene(); sc.background = new T.Color(0xf3f7ff);
      var cam = new T.PerspectiveCamera(38, 2, 0.1, 100); cam.position.set(0, 7.5, 9); cam.lookAt(0, 0.9, 0);
      sc.add(new T.AmbientLight(0xffffff, 1.7)); var dl = new T.DirectionalLight(0xffffff, 1.8); dl.position.set(3, 8, 4); sc.add(dl);
      var COL = [0xef476f, 0xffd166, 0x06d6a0, 0x4f86f7, 0x9b5de5, 0xff9f1c], root = new T.Group(), faces = [], spec = [];
      sc.add(root); root.rotation.y = 0.5;
      st = {
        build: function (net) {
          faces.forEach(function (f) { root.remove(f.node); f.node.traverse(function (o) { if (o.geometry) o.geometry.dispose(); if (o.material) o.material.dispose(); }); });
          faces = []; spec = net;
          var rad = 0; net.forEach(function (f) { f.poly.forEach(function (p) { rad = Math.max(rad, Math.hypot(p[0], p[1])); }); });
          root.scale.setScalar(Math.min(1.7, 4.6 / rad));
          net.forEach(function (f, i) {
            var pos = []; for (var k = 1; k < f.poly.length - 1; k++) [f.poly[0], f.poly[k], f.poly[k + 1]].forEach(function (p) { pos.push(p[0], 0, p[1]); });
            var g = new T.BufferGeometry(); g.setAttribute('position', new T.Float32BufferAttribute(pos, 3)); g.computeVertexNormals();
            var node = new T.Group(); node.matrixAutoUpdate = false;
            node.add(new T.Mesh(g, new T.MeshStandardMaterial({ color: COL[i % COL.length], side: T.DoubleSide, roughness: 0.6 })));
            var lp = []; f.poly.forEach(function (p, k) { var q = f.poly[(k + 1) % f.poly.length]; lp.push(p[0], 0.001, p[1], q[0], 0.001, q[1]); });
            var lg = new T.BufferGeometry(); lg.setAttribute('position', new T.Float32BufferAttribute(lp, 3));
            node.add(new T.LineSegments(lg, new T.LineBasicMaterial({ color: 0x14213d })));
            root.add(node); faces.push({ node: node });
          });
        },
        apply: function (t) {
          var M = [];
          spec.forEach(function (f, i) {
            var m = new T.Matrix4();
            if (f.parent === undefined) { M[i] = m; }
            else {
              var d = new T.Vector3(f.b[0] - f.a[0], 0, f.b[1] - f.a[1]).normalize(), c = cen(f.poly), n = new T.Vector3(c[0] - f.a[0], 0, c[1] - f.a[1]);
              n.sub(d.clone().multiplyScalar(n.dot(d))).normalize();
              var sgn = d.clone().cross(n).y >= 0 ? 1 : -1, ang = sgn * f.fold * D * t;
              m.makeTranslation(f.a[0], 0, f.a[1]).multiply(new T.Matrix4().makeRotationAxis(d, ang)).multiply(new T.Matrix4().makeTranslation(-f.a[0], 0, -f.a[1]));
              M[i] = new T.Matrix4().multiplyMatrices(M[f.parent], m);
            }
            faces[i].node.matrix.copy(M[i]); faces[i].node.matrixWorldNeedsUpdate = true;
          });
        }
      };
      var drag = false, px = 0; cv.addEventListener('pointerdown', function (e) { drag = true; px = e.clientX; try { cv.setPointerCapture(e.pointerId); } catch (x) { } });
      cv.addEventListener('pointerup', function () { drag = false; });
      cv.addEventListener('pointermove', function (e) { if (drag) { root.rotation.y += (e.clientX - px) * 0.012; px = e.clientX; } });
      function size() { var w = cv.clientWidth, h = cv.clientHeight; if (!w) return; r.setSize(w, h, false); cam.aspect = w / h; cam.updateProjectionMatrix(); }
      window.addEventListener('resize', size); size();
      st.build(SHAPES[cur].net()); st.apply(v);
      (function loop() { if (!host.isConnected || !$('s3cv')) { alive = false; window.removeEventListener('resize', size); r.dispose(); return; } r.render(sc, cam); requestAnimationFrame(loop); })();
    }).catch(function () {
      var c = $('s3cv'); if (c) c.outerHTML = '<p class="note">The 3D picture could not load on this device. You can still answer the questions below.</p>';
      v = 1; facts(); question();
    });
    $('s3sh').querySelectorAll('.btn')[0].classList.add('on'); facts();
  }


  /* ---------- shared 3D helpers for the other activities ---------- */
  function load(host, fail) {
    return import('/vendor/three/three.module.min.js').catch(function () {
      var c = host.querySelector('canvas'); if (c) c.outerHTML = '<p class="note">The 3D picture could not load on this device.</p>'; if (fail) fail(); throw 0;
    });
  }
  function scene(T, cv, host, o) {
    var r = new T.WebGLRenderer({ canvas: cv, antialias: true }); r.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    var sc = new T.Scene(); sc.background = new T.Color(0xf3f7ff);
    var cam = new T.PerspectiveCamera(38, 2, 0.1, 100); sc.add(new T.AmbientLight(0xffffff, 1.7));
    var dl = new T.DirectionalLight(0xffffff, 1.8); dl.position.set(3, 8, 5); sc.add(dl);
    var root = new T.Group(); sc.add(root); root.rotation.set(o.pitch || 0.3, o.yaw || 0.6, 0);
    var drag = false, moved = 0, px = 0, py = 0, tapFn = null;
    cv.addEventListener('pointerdown', function (e) { drag = true; moved = 0; px = e.clientX; py = e.clientY; try { cv.setPointerCapture(e.pointerId); } catch (x) { } });
    cv.addEventListener('pointermove', function (e) { if (!drag) return; var dx = e.clientX - px, dy = e.clientY - py; moved += Math.abs(dx) + Math.abs(dy); px = e.clientX; py = e.clientY; root.rotation.y += dx * 0.012; root.rotation.x = Math.max(-1.3, Math.min(1.3, root.rotation.x + dy * 0.01)); });
    cv.addEventListener('pointerup', function (e) { if (drag && moved < 8 && tapFn) tapFn(e); drag = false; });
    function size() {
      var w = cv.clientWidth, h = cv.clientHeight; if (!w) return; r.setSize(w, h, false); cam.aspect = w / h;
      var d = o.fitX ? Math.max(o.minDist || 8, (o.fitX / 2) / (Math.tan(19 * Math.PI / 180) * cam.aspect)) : o.dist;
      cam.position.set(0, d * (o.up || 0.35), d); cam.lookAt(0, o.lookY || 0, 0); cam.updateProjectionMatrix();
    }
    window.addEventListener('resize', size); size();
    (function loop() { if (!host.isConnected || !cv.isConnected) { window.removeEventListener('resize', size); r.dispose(); return; } r.render(sc, cam); requestAnimationFrame(loop); })();
    return { r: r, sc: sc, cam: cam, root: root, onTap: function (fn) { tapFn = fn; }, size: size };
  }
  function disposeKids(g, T) { while (g.children.length) { var c = g.children.pop(); c.traverse(function (o) { if (o.geometry) o.geometry.dispose(); if (o.material) { (Array.isArray(o.material) ? o.material : [o.material]).forEach(function (m) { if (m.map) m.map.dispose(); m.dispose(); }); } }); } }

  /* ---------- Turn and count: tap faces, edges and vertices (P5, P7) ---------- */
  function boxS(a, b, c) { var v = []; for (var i = 0; i < 8; i++) v.push([(i & 4 ? 1 : -1) * a, (i & 2 ? 1 : -1) * b, (i & 1 ? 1 : -1) * c]); return { v: v, f: [[0, 1, 3, 2], [4, 5, 7, 6], [0, 4, 5, 1], [2, 3, 7, 6], [0, 2, 6, 4], [1, 5, 7, 3]] }; }
  function hexS() { var v = [], f = [[0, 1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11]]; for (var i = 0; i < 6; i++) { var a = i * Math.PI / 3; v.push([Math.cos(a), Math.sin(a), -0.9]); } for (i = 0; i < 6; i++) { a = i * Math.PI / 3; v.push([Math.cos(a), Math.sin(a), 0.9]); } for (i = 0; i < 6; i++) f.push([i, (i + 1) % 6, 6 + (i + 1) % 6, 6 + i]); return { v: v, f: f }; }
  var CS = {
    'Cube': function () { return boxS(1, 1, 1); },
    'Cuboid': function () { return boxS(1.5, 0.9, 0.7); },
    'Triangular prism': function () { return { v: [[-1, -0.58, -1.4], [1, -0.58, -1.4], [0, 1.15, -1.4], [-1, -0.58, 1.4], [1, -0.58, 1.4], [0, 1.15, 1.4]], f: [[0, 2, 1], [3, 4, 5], [0, 1, 4, 3], [1, 2, 5, 4], [2, 0, 3, 5]] }; },
    'Square-based pyramid': function () { return { v: [[-1, -0.8, -1], [1, -0.8, -1], [1, -0.8, 1], [-1, -0.8, 1], [0, 1, 0]], f: [[0, 1, 2, 3], [0, 1, 4], [1, 2, 4], [2, 3, 4], [3, 0, 4]] }; },
    'Tetrahedron': function () { return { v: [[1, 1, 1], [1, -1, -1], [-1, 1, -1], [-1, -1, 1]], f: [[0, 1, 2], [0, 1, 3], [0, 2, 3], [1, 2, 3]] }; },
    'Hexagonal prism': hexS
  };
  function mountTurn(names) {
    return function (host, ctx) {
      var cur = 0, mode = 'faces', marks = { faces: {}, edges: {}, verts: {} }, done = {}, nDone = 0, G = null, X = null, sol = null, edges = [];
      host.innerHTML = '<p class="note" style="min-height:0">Pick a solid. Turn it with your finger. Choose faces, edges or vertices, then tap each one to mark it. Count every part on two different solids to finish.</p>' +
        '<div class="s3-shapes" id="s3sh"></div><div class="s3-shapes" id="s3md"></div><canvas class="s3-cv" id="s3cv" aria-label="3D solid to turn and tap"></canvas><div class="s3-facts" id="s3t" aria-live="polite"></div>';
      var MODES = [['faces', 'Faces'], ['edges', 'Edges'], ['verts', 'Vertices']];
      names.forEach(function (n, i) { var b = document.createElement('button'); b.type = 'button'; b.className = 'btn ghost' + (i ? '' : ' on'); b.textContent = n; b.addEventListener('click', function () { cur = i; sel($('s3sh'), i); build(); }); $('s3sh').appendChild(b); });
      MODES.forEach(function (m, i) { var b = document.createElement('button'); b.type = 'button'; b.className = 'btn ghost' + (i ? '' : ' on'); b.textContent = m[1]; b.addEventListener('click', function () { mode = m[0]; sel($('s3md'), i); paint(); }); $('s3md').appendChild(b); });
      function sel(box, i) { box.querySelectorAll('.btn').forEach(function (b, k) { b.classList.toggle('on', k === i); }); }
      function total(m) { return m === 'faces' ? sol.f.length : m === 'edges' ? edges.length : sol.v.length; }
      function count(m) { return Object.keys(marks[m]).length; }
      function say() {
        var el = $('s3t'), nm = names[cur].toLowerCase(), m = mode, w = { faces: 'face', edges: 'edge', verts: 'vertex' }[m], pl = { faces: 'faces', edges: 'edges', verts: 'vertices' }[m];
        var tip = m === 'faces' ? 'A face is a flat surface.' : m === 'edges' ? 'An edge is where two faces meet.' : 'A vertex is a corner.';
        var all = count(m) === total(m);
        el.innerHTML = '<b>' + tip + '</b> Tap every ' + w + '. Marked ' + count(m) + (all ? '. <b>That is all ' + total(m) + ' ' + pl + '!</b>' : ' so far. Turn the solid to find the hidden ones.') + (nDone ? '<br>Solids fully counted: ' + nDone + ' of 2.' : '');
        if (all && !marks.__w) { }
        var every = ['faces', 'edges', 'verts'].every(function (k) { return count(k) === total(k); });
        if (every && !done[cur]) { done[cur] = 1; nDone++; el.innerHTML += '<br><b>Well done!</b> A ' + nm + ' has ' + total('faces') + ' faces, ' + total('edges') + ' edges and ' + total('verts') + ' vertices.'; if (nDone >= 2) ctx.complete(); }
      }
      function paint() {
        if (!X) return;
        X.faces.forEach(function (m, i) { m.material.color.setHex(marks.faces[i] ? 0xffa94d : 0x8fb4ff); m.material.opacity = mode === 'faces' ? 1 : 0.28; m.material.transparent = mode !== 'faces'; m.material.depthWrite = mode === 'faces'; m.material.needsUpdate = true; });
        X.edges.forEach(function (m, i) { m.material.color.setHex(marks.edges[i] ? 0xff7a00 : 0x14213d); m.visible = true; m.scale.set(mode === 'edges' ? 1.5 : 1, 1, mode === 'edges' ? 1.5 : 1); });
        X.verts.forEach(function (m, i) { m.material.color.setHex(marks.verts[i] ? 0xff7a00 : 0x14213d); m.visible = !!(mode === 'verts' || marks.verts[i]); });
        say();
      }
      function build() {
        marks = { faces: {}, edges: {}, verts: {} }; if (!G) return; var T = G.T;
        disposeKids(G.root, T); sol = CS[names[cur]](); var V = sol.v.map(function (p) { return new T.Vector3(p[0], p[1], p[2]); }); var seen = {}; edges = [];
        sol.f.forEach(function (f) { for (var k = 0; k < f.length; k++) { var a = f[k], b = f[(k + 1) % f.length], key = Math.min(a, b) + '-' + Math.max(a, b); if (!seen[key]) { seen[key] = 1; edges.push([a, b]); } } });
        X = { faces: [], edges: [], verts: [], hit: { faces: [], edges: [], verts: [] } };
        sol.f.forEach(function (f, i) {
          var pos = []; for (var k = 1; k < f.length - 1; k++) [f[0], f[k], f[k + 1]].forEach(function (j) { pos.push(V[j].x, V[j].y, V[j].z); });
          var g = new T.BufferGeometry(); g.setAttribute('position', new T.Float32BufferAttribute(pos, 3)); g.computeVertexNormals();
          var m = new T.Mesh(g, new T.MeshStandardMaterial({ color: 0x8fb4ff, side: T.DoubleSide, roughness: 0.6 })); m.userData.i = i; G.root.add(m); X.faces.push(m);
        });
        var up = new T.Vector3(0, 1, 0);
        edges.forEach(function (e, i) {
          var a = V[e[0]], b = V[e[1]], d = b.clone().sub(a), len = d.length(), mid = a.clone().add(b).multiplyScalar(0.5), q = new T.Quaternion().setFromUnitVectors(up, d.normalize());
          var m = new T.Mesh(new T.CylinderGeometry(0.05, 0.05, len, 8), new T.MeshBasicMaterial({ color: 0x14213d })); m.position.copy(mid); m.quaternion.copy(q); G.root.add(m); X.edges.push(m);
          var h = new T.Mesh(new T.CylinderGeometry(0.2, 0.2, len, 6), new T.MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false })); h.position.copy(mid); h.quaternion.copy(q); h.userData.i = i; G.root.add(h); X.hit.edges.push(h);
        });
        V.forEach(function (p, i) {
          var m = new T.Mesh(new T.SphereGeometry(0.11, 14, 10), new T.MeshBasicMaterial({ color: 0x14213d })); m.position.copy(p); G.root.add(m); X.verts.push(m);
          var h = new T.Mesh(new T.SphereGeometry(0.3, 8, 6), new T.MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false })); h.position.copy(p); h.userData.i = i; G.root.add(h); X.hit.verts.push(h);
        });
        X.hit.faces = X.faces; G.root.scale.setScalar(1.55); paint();
      }
      load(host).then(function (T) {
        var cv = $('s3cv'); if (!cv || !host.isConnected) return; var sc = scene(T, cv, host, { dist: 11, up: 0.25, yaw: 0.6, pitch: 0.35 }); G = { T: T, root: sc.root };
        var rc = new T.Raycaster(), p2 = new T.Vector2();
        sc.onTap(function (e) { var r = cv.getBoundingClientRect(); p2.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1); rc.setFromCamera(p2, sc.cam);
          var hit = rc.intersectObjects(X.hit[mode], false)[0]; if (!hit) return; var i = hit.object.userData.i; if (marks[mode][i]) delete marks[mode][i]; else marks[mode][i] = 1; paint(); });
        build();
      }).catch(function () { });
    };
  }

  /* ---------- Cuboid builder: volume from unit cubes (S1) ---------- */
  function mountBuilder(host, ctx) {
    var d = { l: 3, w: 2, h: 2 }, target = 0, right = 0, G = null, inst = null, box = null;
    function newTarget() { var a = 2 + rnd(4), b = 2 + rnd(3), c = 1 + rnd(4); target = a * b * c; }
    newTarget();
    function vol() { return d.l * d.w * d.h; }
    function sa() { return 2 * (d.l * d.w + d.l * d.h + d.w * d.h); }
    host.innerHTML = '<p class="note" style="min-height:0">Change the length, width and height. The cuboid is made of 1 cm cubes. Drag the picture to turn it. Then build cuboids to match 3 volumes.</p>' +
      '<canvas class="s3-cv" id="s3cv" aria-label="Cuboid made of unit cubes"></canvas>' +
      ['l:Length', 'w:Width', 'h:Height'].map(function (x) { var k = x.split(':'); return '<label class="s3-row"><span>' + k[1] + ': <b id="s3v_' + k[0] + '">' + d[k[0]] + '</b> cm</span><input class="s3-sl" type="range" min="1" max="6" value="' + d[k[0]] + '" data-k="' + k[0] + '" aria-label="' + k[1] + '"></label>'; }).join('') +
      '<div class="s3-facts" id="s3t" aria-live="polite"></div><div class="s3-q"><b id="s3tg"></b><div class="row"><button class="btn" id="s3ck" type="button">Check my cuboid</button></div><div id="s3fb" aria-live="polite" style="margin-top:6px"></div></div>';
    function say() {
      $('s3t').innerHTML = '<b>Volume</b> = length × width × height = ' + d.l + ' × ' + d.w + ' × ' + d.h + ' = <b>' + vol() + ' cm³</b><br><b>Surface area</b> = 2 × (lw + lh + wh) = <b>' + sa() + ' cm²</b>';
      $('s3tg').innerHTML = right >= 3 ? 'Brilliant! You matched 3 volumes.' : 'Build a cuboid with a volume of ' + target + ' cm³. (' + right + ' of 3 right so far)';
    }
    function draw() {
      if (!G) { say(); return; } var T = G.T; disposeKids(G.root, T);
      var n = vol(), g = new T.BoxGeometry(0.92, 0.92, 0.92), m = new T.MeshStandardMaterial({ color: 0x4f86f7, roughness: 0.5 }); inst = new T.InstancedMesh(g, m, n); var k = 0, mat = new T.Matrix4();
      for (var x = 0; x < d.l; x++) for (var y = 0; y < d.h; y++) for (var z = 0; z < d.w; z++) { mat.makeTranslation(x - (d.l - 1) / 2, y - (d.h - 1) / 2, z - (d.w - 1) / 2); inst.setMatrixAt(k++, mat); }
      G.root.add(inst);
      var ob = new T.LineSegments(new T.EdgesGeometry(new T.BoxGeometry(d.l, d.h, d.w)), new T.LineBasicMaterial({ color: 0x14213d })); G.root.add(ob);
      G.root.scale.setScalar(4.2 / Math.max(d.l, d.h, d.w, 3)); say();
    }
    host.querySelectorAll('[data-k]').forEach(function (s) { s.addEventListener('input', function () { d[s.getAttribute('data-k')] = Number(s.value); $('s3v_' + s.getAttribute('data-k')).textContent = s.value; $('s3fb').textContent = ''; draw(); }); });
    $('s3ck').addEventListener('click', function () {
      if (right >= 3) return;
      if (vol() === target) { right++; $('s3fb').innerHTML = '<b>Yes!</b> ' + d.l + ' × ' + d.w + ' × ' + d.h + ' = ' + target + '.'; if (right >= 3) ctx.complete(); else newTarget(); say(); }
      else $('s3fb').innerHTML = 'Not yet. Your cuboid has a volume of ' + vol() + ' cm³. Multiply length × width × height to reach ' + target + '.';
    });
    say();
    load(host).then(function (T) { var cv = $('s3cv'); if (!cv || !host.isConnected) return; var sc = scene(T, cv, host, { dist: 10, up: 0.3, yaw: 0.6, pitch: 0.35 }); G = { T: T, root: sc.root }; draw(); }).catch(function () { });
  }

  /* ---------- Wrap the solid: add the faces of a net (S2) ---------- */
  function mountWrap(host, ctx) {
    var d = null, right = 0, v = 0.0, G = null, rig = null;
    function newDims() { d = { l: 2 + rnd(4), w: 2 + rnd(3), h: 2 + rnd(3) }; }
    newDims();
    function sa() { return 2 * (d.l * d.w + d.l * d.h + d.w * d.h); }
    host.innerHTML = '<p class="note" style="min-height:0">Every face of the box is flat when the net is open. Find the area of each face, then add them all to get the surface area. Get 3 right to finish.</p>' +
      '<canvas class="s3-cv" id="s3cv" aria-label="Net of a cuboid with the area of each face"></canvas>' +
      '<input class="s3-sl" id="s3sl" type="range" min="0" max="100" value="0" aria-label="How folded the net is"><div class="row"><button class="btn ghost" id="s3f" type="button">Fold it</button><button class="btn ghost" id="s3u" type="button">Open it flat</button></div>' +
      '<div class="s3-q"><b id="s3tg"></b><div class="row"><input id="s3in" class="inp" type="number" inputmode="numeric" aria-label="Total surface area in square centimetres" style="max-width:140px"><button class="btn" id="s3ck" type="button">Check</button></div><div id="s3fb" aria-live="polite" style="margin-top:6px"></div></div>';
    function say() { $('s3tg').innerHTML = right >= 3 ? 'Brilliant! 3 surface areas found.' : 'The box is ' + d.l + ' cm long, ' + d.w + ' cm wide and ' + d.h + ' cm high. What is its total surface area in cm²? (' + right + ' of 3 right so far)'; }
    function texture(T, txt, hex) {
      var c = document.createElement('canvas'); c.width = c.height = 128; var x = c.getContext('2d'); x.fillStyle = hex; x.fillRect(0, 0, 128, 128);
      x.fillStyle = '#14213d'; x.font = '700 34px system-ui,sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText(txt[0], 64, 52); x.font = '700 26px system-ui,sans-serif'; x.fillText(txt[1], 64, 92);
      var t = new T.CanvasTexture(c); t.colorSpace = T.SRGBColorSpace; return t;
    }
    function build() {
      if (!G) return; var T = G.T; disposeKids(G.root, T); var net = boxNet(d.l, d.w, d.h), x = d.l / 2, z = d.w / 2;
      var areas = [d.l * d.w, d.h * d.w, d.h * d.w, d.l * d.h, d.l * d.h, d.l * d.w], dims = [[d.l, d.w], [d.h, d.w], [d.h, d.w], [d.l, d.h], [d.l, d.h], [d.l, d.w]];
      var hexes = ['#ef8aa0', '#ffe08a', '#7de3c2', '#8fb4ff', '#c4a3f2', '#ffc27a'], faces = [];
      net.forEach(function (f, i) {
        var xs = f.poly.map(function (p) { return p[0]; }), zs = f.poly.map(function (p) { return p[1]; }), x0 = Math.min.apply(0, xs), x1 = Math.max.apply(0, xs), z0 = Math.min.apply(0, zs), z1 = Math.max.apply(0, zs);
        var pos = [], uv = []; [[0, 1, 2], [0, 2, 3]].forEach(function (tr) { tr.forEach(function (k) { var p = f.poly[k]; pos.push(p[0], 0, p[1]); uv.push((p[0] - x0) / (x1 - x0), 1 - (p[1] - z0) / (z1 - z0)); }); });
        var g = new T.BufferGeometry(); g.setAttribute('position', new T.Float32BufferAttribute(pos, 3)); g.setAttribute('uv', new T.Float32BufferAttribute(uv, 2)); g.computeVertexNormals();
        var node = new T.Group(); node.matrixAutoUpdate = false;
        node.add(new T.Mesh(g, new T.MeshBasicMaterial({ map: texture(T, [dims[i][0] + ' × ' + dims[i][1], '= ' + areas[i] + ' cm²'], hexes[i]), side: T.DoubleSide })));
        var lp = []; f.poly.forEach(function (p, k) { var q = f.poly[(k + 1) % f.poly.length]; lp.push(p[0], 0.002, p[1], q[0], 0.002, q[1]); });
        var lg = new T.BufferGeometry(); lg.setAttribute('position', new T.Float32BufferAttribute(lp, 3)); node.add(new T.LineSegments(lg, new T.LineBasicMaterial({ color: 0x14213d })));
        G.root.add(node); faces.push(node);
      });
      var rad = 0; net.forEach(function (f) { f.poly.forEach(function (p) { rad = Math.max(rad, Math.hypot(p[0], p[1])); }); }); G.root.scale.setScalar(Math.min(2, 6.6 / rad));
      rig = { net: net, faces: faces }; apply();
    }
    function apply() {
      if (!rig) return; var T = G.T, M = [];
      rig.net.forEach(function (f, i) {
        var m = new T.Matrix4();
        if (f.parent !== undefined) {
          var dd = new T.Vector3(f.b[0] - f.a[0], 0, f.b[1] - f.a[1]).normalize(), c = cen(f.poly), n = new T.Vector3(c[0] - f.a[0], 0, c[1] - f.a[1]); n.sub(dd.clone().multiplyScalar(n.dot(dd))).normalize();
          var sg = dd.clone().cross(n).y >= 0 ? 1 : -1;
          m.makeTranslation(f.a[0], 0, f.a[1]).multiply(new T.Matrix4().makeRotationAxis(dd, sg * f.fold * D * v)).multiply(new T.Matrix4().makeTranslation(-f.a[0], 0, -f.a[1]));
          M[i] = new T.Matrix4().multiplyMatrices(M[f.parent], m);
        } else M[i] = m;
        rig.faces[i].matrix.copy(M[i]); rig.faces[i].matrixWorldNeedsUpdate = true;
      });
      $('s3sl').value = Math.round(v * 100);
    }
    function go(to) { var from = v, t0 = performance.now(); (function st(t) { var k = Math.min(1, (t - t0) / 1000), e = k < .5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2; v = from + (to - from) * e; apply(); if (k < 1 && host.isConnected) requestAnimationFrame(st); })(t0); }
    $('s3sl').addEventListener('input', function (e) { v = Number(e.target.value) / 100; apply(); });
    $('s3f').addEventListener('click', function () { go(1); }); $('s3u').addEventListener('click', function () { go(0); });
    function check() {
      if (right >= 3) return; var val = Number($('s3in').value);
      if ($('s3in').value !== '' && val === sa()) { right++; $('s3fb').innerHTML = '<b>Yes!</b> 2 × (' + d.l * d.w + ' + ' + d.h * d.w + ' + ' + d.l * d.h + ') = ' + sa() + ' cm².'; $('s3in').value = ''; if (right >= 3) ctx.complete(); else { newDims(); v = 0; build(); } say(); }
      else $('s3fb').innerHTML = 'Not yet. Opposite faces have the same area, so add the three different faces and double the total.';
    }
    $('s3ck').addEventListener('click', check); $('s3in').addEventListener('keydown', function (e) { if (e.key === 'Enter') check(); });
    say();
    load(host).then(function (T) { var cv = $('s3cv'); if (!cv || !host.isConnected) return; var sc = scene(T, cv, host, { dist: 12.5, up: 0.85, yaw: 0, pitch: 0 }); G = { T: T, root: sc.root }; build(); }).catch(function () { });
  }

  /* ---------- Cylinders, cones and spheres (S3) ---------- */
  function mountRound(host, ctx) {
    var d = { r: 2, h: 4 }, target = 0, tgDims = null, right = 0, G = null, PI = 3.14;
    function newTarget() { var r = 2 + rnd(3), h = 2 + rnd(6); tgDims = [r, h]; target = Math.round(PI * r * r * h); }
    newTarget();
    function cyl() { return PI * d.r * d.r * d.h; }
    host.innerHTML = '<p class="note" style="min-height:0">Change the radius and height. The cone has the same base and height as the cylinder. Drag to turn the solids. Then match 3 cylinder volumes.</p>' +
      '<canvas class="s3-cv" id="s3cv" aria-label="A cylinder, a cone and a sphere"></canvas>' +
      '<label class="s3-row"><span>Radius: <b id="s3v_r">' + d.r + '</b> cm</span><input class="s3-sl" type="range" min="1" max="5" value="' + d.r + '" data-k="r" aria-label="Radius"></label>' +
      '<label class="s3-row"><span>Height: <b id="s3v_h">' + d.h + '</b> cm</span><input class="s3-sl" type="range" min="1" max="8" value="' + d.h + '" data-k="h" aria-label="Height"></label>' +
      '<div class="s3-facts" id="s3t" aria-live="polite"></div><div class="s3-q"><b id="s3tg"></b><div class="row"><button class="btn" id="s3ck" type="button">Check my cylinder</button></div><div id="s3fb" aria-live="polite" style="margin-top:6px"></div></div>';
    function say() {
      var c = cyl(), f = function (x) { return (Math.round(x * 10) / 10); };
      $('s3t').innerHTML = '<b>Cylinder</b> V = π × r² × h = 3.14 × ' + d.r + '² × ' + d.h + ' = <b>' + f(c) + ' cm³</b><br><b>Cone</b> V = ⅓ of the cylinder = <b>' + f(c / 3) + ' cm³</b><br><b>Sphere</b> V = 4⁄3 × π × r³ = <b>' + f(4 / 3 * PI * d.r * d.r * d.r) + ' cm³</b>';
      $('s3tg').innerHTML = right >= 3 ? 'Brilliant! You matched 3 volumes.' : 'Make a cylinder with a volume of ' + target + ' cm³ (to the nearest whole number). (' + right + ' of 3 right so far)';
    }
    function draw() {
      if (!G) { say(); return; } var T = G.T; disposeKids(G.root, T); var s = 3 / Math.max(d.r * 2, d.h);
      function add(geo, x, col) { var m = new T.Mesh(geo, new T.MeshStandardMaterial({ color: col, roughness: 0.5, flatShading: false })); m.position.x = x; G.root.add(m); var ln = new T.LineSegments(new T.EdgesGeometry(geo, 40), new T.LineBasicMaterial({ color: 0x14213d })); ln.position.copy(m.position); G.root.add(ln); return m; }
      add(new T.CylinderGeometry(d.r * s, d.r * s, d.h * s, 40), -3.6, 0x4f86f7);
      add(new T.ConeGeometry(d.r * s, d.h * s, 40), 0, 0xffa94d);
      add(new T.SphereGeometry(d.r * s, 32, 20), 3.6, 0x06d6a0);
      say();
    }
    host.querySelectorAll('[data-k]').forEach(function (e) { e.addEventListener('input', function () { d[e.getAttribute('data-k')] = Number(e.value); $('s3v_' + e.getAttribute('data-k')).textContent = e.value; $('s3fb').textContent = ''; draw(); }); });
    $('s3ck').addEventListener('click', function () {
      if (right >= 3) return;
      if (Math.round(cyl()) === target) { right++; $('s3fb').innerHTML = '<b>Yes!</b> 3.14 × ' + d.r + '² × ' + d.h + ' = ' + Math.round(cyl()) + '.'; if (right >= 3) ctx.complete(); else newTarget(); say(); }
      else $('s3fb').innerHTML = 'Not yet. Your cylinder has a volume of ' + Math.round(cyl()) + ' cm³. Try other radius and height values: V = 3.14 × r² × h.';
    });
    say();
    load(host).then(function (T) { var cv = $('s3cv'); if (!cv || !host.isConnected) return; var sc = scene(T, cv, host, { fitX: 14.5, minDist: 10, up: 0.2, yaw: 0.35, pitch: 0.2 }); G = { T: T, root: sc.root }; draw(); }).catch(function () { });
  }

  var TOPICS = [
    { n: 811, id: 'a_fold', label: 'Fold the net', title: 'Fold the net', lead: 'Fold flat nets into 3D solids and count their faces, edges and vertices.', mount: mount },
    { n: 507, id: 'a_turn', label: 'Turn and count', title: 'Turn and count', lead: 'Turn 3D solids and tap their faces, edges and vertices to count them.', mount: mountTurn(['Cube', 'Cuboid', 'Triangular prism', 'Square-based pyramid']) },
    { n: 707, id: 'a_turn', label: 'Turn and count', title: 'Turn and count', lead: 'Turn 3D solids and tap their faces, edges and vertices to count them.', mount: mountTurn(['Cube', 'Cuboid', 'Triangular prism', 'Square-based pyramid', 'Tetrahedron', 'Hexagonal prism']) },
    { n: 808, id: 'a_build', label: 'Cuboid builder', title: 'Cuboid builder', lead: 'Build cuboids from unit cubes and see how the volume grows.', mount: mountBuilder },
    { n: 826, id: 'a_wrap', label: 'Wrap the solid', title: 'Wrap the solid', lead: 'Open a box into a net and add the areas of its faces.', mount: mountWrap },
    { n: 844, id: 'a_round', label: 'Cylinders and cones', title: 'Cylinders, cones and spheres', lead: 'Change the radius and height and compare the volumes.', mount: mountRound }
  ];
  TOPICS.forEach(function (c) {
    var t = S.topics[c.n]; if (!t || t.steps.some(function (s) { return s.id === c.id; })) return;
    var step = { id: c.id, label: c.label, type: 'lab', tag: 'Lab', title: c.title, lead: c.lead, mount: c.mount };
    var at = -1; t.steps.forEach(function (s, i) { if (at < 0 && /^a_/.test(s.id)) at = i; });
    if (at < 0) t.steps.push(step); else t.steps.splice(at, 0, step);
    S.arrange(t);
  });
})();
