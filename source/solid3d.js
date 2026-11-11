/* solid3d.js: "Fold the net" 3D activity (three.js, loaded only when the activity opens). */
(function () {
  'use strict';
  var S = Studio;
  function $(id) { return document.getElementById(id); }
  function rnd(n) { return Math.floor(Math.random() * n); }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = rnd(i + 1), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }

  var css = document.createElement('style');
  css.textContent = '.s3-cv{width:100%;height:320px;display:block;border-radius:14px;background:#f3f7ff;touch-action:pan-y;margin:8px 0}' +
    '.s3-shapes{display:flex;flex-wrap:wrap;gap:8px;margin:6px 0}.s3-shapes .btn{width:auto;flex:0 0 auto;min-height:44px;padding:8px 14px}.s3-shapes .btn.on{background:#14213d;color:#fff}' +
    '.s3-sl{width:100%;height:44px;accent-color:#2b5fd9}.s3-facts{background:var(--surface-2);border-radius:12px;padding:10px 12px;margin:8px 0;font-weight:700}' +
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

  var TOPICS = [811];
  TOPICS.forEach(function (n) {
    var t = S.topics[n]; if (!t || t.steps.some(function (s) { return s.id === 'a_fold'; })) return;
    var step = { id: 'a_fold', label: 'Fold the net', type: 'lab', tag: 'Lab', title: 'Fold the net', lead: 'Fold flat nets into 3D solids and count their faces, edges and vertices.', mount: mount };
    var at = -1; t.steps.forEach(function (s, i) { if (at < 0 && /^a_/.test(s.id)) at = i; });
    if (at < 0) t.steps.push(step); else t.steps.splice(at, 0, step);
    S.arrange(t);
  });
})();
