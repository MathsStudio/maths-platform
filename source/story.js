/* story.js: the teacher story lessons.
   Each episode is a short animated lesson that is read aloud (the pupil's own voice and speed from Settings),
   with pictures that appear as the teacher speaks. An episode is { title, scenes: [ { h, sub, steps: [ { say, html } ] } ] }.
   BT.story(n, label, episodes) puts the episodes in a first step called "Watch" at the front of a topic. */
(function () {
  'use strict';
  var S = Studio, H = S.h, K = S.kit, BT = window.BT;
  if (!BT) return;
  var svg = BT.svg, txt = BT.txt;

  var css = document.createElement('style');
  css.textContent = [
    '.story{display:flex;flex-direction:column;gap:12px;margin:6px auto 14px;max-width:980px;width:100%}',
    '.story .st-stage{background:var(--surface);border:2px solid var(--line);border-radius:20px;min-height:340px;padding:18px 16px;overflow:hidden}',
    '.story .st-scene{display:flex;flex-direction:column;align-items:center;gap:12px;animation:stfade .45s ease}',
    '@keyframes stfade{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}',
    '.story .st-scene h3{font-family:var(--font-display);font-weight:600;font-size:clamp(22px,4.4vw,30px);margin:0;text-align:center;text-wrap:balance}',
    '.story .st-sub{color:var(--muted);margin:-6px 0 2px;text-align:center;font-weight:700}',
    '.story [data-sb]{opacity:0;transform:translateY(10px);transition:opacity .55s ease,transform .55s ease;width:100%;display:flex;flex-direction:column;align-items:center;gap:10px}',
    '.story [data-sb].on{opacity:1;transform:none}',
    '.story .sv-row{display:flex;flex-wrap:wrap;gap:10px 14px;justify-content:center;align-items:center;width:100%}',
    '.story .sv-card{border:4px solid;border-radius:16px;min-width:clamp(48px,11vw,84px);padding:4px 10px;text-align:center;font-family:var(--font-display);font-weight:700;font-size:clamp(30px,7vw,54px);line-height:1.25;background:var(--surface)}',
    '.story .sv-card.sm{font-size:clamp(20px,4.6vw,32px);min-width:0;padding:4px 12px;border-width:3px}',
    '.story .b{color:var(--accent);border-color:var(--accent)}.story .g{color:var(--good);border-color:var(--good)}.story .r{color:var(--bad);border-color:var(--bad)}.story .y{color:#a66d00;border-color:#a66d00}',
    '.story .sv-big{font-family:var(--font-display);font-weight:700;font-size:clamp(40px,9vw,76px);line-height:1.05;text-align:center}',
    '.story .sv-eq{font-family:var(--font-display);font-weight:600;font-size:clamp(22px,4.8vw,36px);text-align:center}',
    '.story .sv-eq.g{color:var(--good);border:0}.story .sv-eq.r{color:var(--bad);border:0}.story .sv-eq.b{color:var(--accent);border:0}',
    '.story .sv-rule{background:var(--hl);color:#17233F;border:3px solid var(--fg);border-radius:16px;padding:10px 18px;font-weight:800;text-align:center;max-width:560px}',
    '.story .sv-note{color:var(--muted);font-weight:700;text-align:center;font-size:15px}',
    '.story .sv-cols{display:grid;grid-template-columns:repeat(var(--n,4),minmax(0,1fr));gap:clamp(6px,1.6vw,14px);width:100%}',
    '.story .sv-cols>div{display:flex;flex-direction:column;align-items:center;gap:6px;min-width:0;text-align:center}',
    '.story .sv-chip{width:100%;text-align:center;border-radius:12px;padding:5px 3px;font-family:var(--font-display);font-weight:600;color:#fff;font-size:clamp(12px,2.4vw,19px)}',
    '.story .sv-chip.b{background:var(--accent);color:var(--accent-fg)}.story .sv-chip.g{background:var(--good);color:#fff}.story .sv-chip.r{background:var(--bad);color:#fff}.story .sv-chip.y{background:#a66d00;color:#fff}',
    '.story .sv-stick{display:inline-block;width:12px;height:56px;border-radius:6px;border:2px solid var(--fg)}',
    '.story .sv-list{display:flex;flex-direction:column;gap:10px;width:100%;max-width:620px}',
    '.story .sv-list div{display:flex;gap:12px;align-items:center;font-weight:700;font-size:clamp(15px,3.2vw,20px)}',
    '.story .sv-list b{flex:0 0 30px;height:30px;border-radius:50%;background:var(--good);color:#fff;display:flex;align-items:center;justify-content:center;font-size:18px}',
    '.story .st-bar{height:7px;border-radius:4px;background:var(--line);overflow:hidden}.story .st-bar i{display:block;height:100%;width:0;background:var(--accent);transition:width .4s}',
    '.story .st-teacher{display:flex;gap:12px;align-items:flex-start}',
    '.story .st-teacher svg{flex:0 0 48px;width:48px;height:48px}',
    '.story .st-bubble{position:relative;flex:1;min-width:0;background:var(--surface);border:2px solid var(--fg);border-radius:16px;padding:8px 14px;font-size:clamp(14px,1.9vw,16.5px);line-height:1.45;min-height:56px;display:flex;align-items:center}',
    '.story .st-bubble::before{content:"";position:absolute;left:-9px;top:16px;width:14px;height:14px;background:var(--surface);border-left:2px solid var(--fg);border-bottom:2px solid var(--fg);transform:rotate(45deg)}',
    '.story .st-talk .st-mouth{animation:stalk .32s infinite alternate}',
    '@keyframes stalk{from{transform:scaleY(1)}to{transform:scaleY(.4)}}',
    '.story .st-ctl{display:flex;flex-wrap:wrap;gap:10px;align-items:center}',
    '@media(prefers-reduced-motion:reduce){.story *{animation:none!important;transition:none!important}.story [data-sb]{opacity:1;transform:none}}'
  ].join('\n');
  document.head.appendChild(css);

  var current = null;
  H.storyStop = function () { if (current) { current.stop(); } };

  var FACE = '<svg viewBox="0 0 100 100" role="img" aria-label="Your teacher"><circle cx="50" cy="50" r="44" fill="#ffd166" stroke="#17233F" stroke-width="4"/><circle cx="35" cy="42" r="14" fill="none" stroke="#17233F" stroke-width="3"/><circle cx="65" cy="42" r="14" fill="none" stroke="#17233F" stroke-width="3"/><line x1="49" y1="42" x2="51" y2="42" stroke="#17233F" stroke-width="3"/><circle cx="35" cy="44" r="5" fill="#17233F"/><circle cx="65" cy="44" r="5" fill="#17233F"/><g class="st-mouth" style="transform-origin:50px 68px"><path d="M32 64 Q50 84 68 64" fill="none" stroke="#17233F" stroke-width="4" stroke-linecap="round"/></g></svg>';

  H.storyPlayer = function (host, ep) {
    var chunks = [];
    ep.scenes.forEach(function (sc, si) { sc.steps.forEach(function (st, k) { chunks.push({ si: si, k: k, say: st.say, html: st.html || '' }); }); });
    host.innerHTML = '<div class="story"><div class="st-stage"></div><div class="st-bar" aria-hidden="true"><i></i></div>' +
      '<div class="st-teacher">' + FACE + '<div class="st-bubble" aria-live="polite"></div></div>' +
      '<div class="st-ctl"><button class="btn" type="button" data-p>Play the lesson</button><button class="btn ghost" type="button" data-r>Start again</button>' +
      '<label class="note" style="display:flex;gap:6px;align-items:center;margin:0">Voice <select data-v style="max-width:200px;min-height:40px"></select></label>' +
      '<label class="note" style="display:flex;gap:6px;align-items:center;margin:0">Speed <input type="range" data-s min="0.7" max="1.3" step="0.05" style="width:110px"></label></div>' +
      '<p class="note" style="margin:0" data-n></p></div>';
    var root = host.querySelector('.story'), stage = root.querySelector('.st-stage'), bubble = root.querySelector('.st-bubble'), bar = root.querySelector('.st-bar i'), pb = root.querySelector('[data-p]'), rb = root.querySelector('[data-r]'), note = root.querySelector('[data-n]');
    var idx = 0, playing = false, token = 0, timer = null, shownScene = -1;
    var vs = root.querySelector('[data-v]'), sp = root.querySelector('[data-s]');
    function fillVoices() { var l = H.voiceList ? H.voiceList() : []; if (!l.length) { vs.parentNode.style.display = 'none'; return; } vs.innerHTML = l.map(function (n) { return '<option>' + n + '</option>'; }).join(''); vs.value = H.voiceCur(); }
    fillVoices(); setTimeout(fillVoices, 900); sp.value = H.rateCur ? H.rateCur() : 1;
    vs.addEventListener('change', function () { H.setVoice(vs.value); if (playing) { stop(); playing = true; pb.textContent = 'Pause'; say(idx); } });
    sp.addEventListener('change', function () { H.setRate(Number(sp.value)); if (playing) { stop(); playing = true; pb.textContent = 'Pause'; say(idx); } });
    var okVoice = H.voiceOk && H.voiceOk();
    note.textContent = okVoice ? 'Your device reads this aloud. You can change the voice and speed in Settings.' : 'The voice is not available here, so the lesson plays with words only.';

    function show(i) {
      var c = chunks[i], sc = ep.scenes[c.si];
      if (shownScene !== c.si) {
        shownScene = c.si;
        var h = '<div class="st-scene"><h3>' + sc.h + '</h3>' + (sc.sub ? '<p class="st-sub">' + sc.sub + '</p>' : '');
        sc.steps.forEach(function (st, k) { if (st.html) h += '<div data-sb="' + k + '">' + st.html + '</div>'; });
        stage.innerHTML = h + '</div>';
      }
      stage.querySelectorAll('[data-sb]').forEach(function (e) { if (Number(e.getAttribute('data-sb')) <= c.k) e.classList.add('on'); });
      bubble.textContent = c.say; bar.style.width = ((i + 1) / chunks.length * 100) + '%';
    }
    function talk(on) { root.classList.toggle('st-talk', on); }
    function say(i) {
      show(i); var my = ++token; clearTimeout(timer);
      function next() {
        if (my !== token || !playing || !root.isConnected) return;
        talk(false);
        if (i + 1 < chunks.length) { idx = i + 1; timer = setTimeout(function () { if (my === token && playing && root.isConnected) say(idx); }, 450); }
        else { playing = false; idx = 0; pb.textContent = 'Watch again'; }
      }
      var ok = okVoice && H.speakStory(chunks[i].say, function () { next(); }, function () { talk(true); });
      if (!ok) { talk(true); timer = setTimeout(next, chunks[i].say.split(' ').length * 360 + 700); }
    }
    function stop() { token++; clearTimeout(timer); talk(false); playing = false; try { if (okVoice) speechSynthesis.cancel(); } catch (e) { /* ignore */ } pb.textContent = idx > 0 ? 'Keep watching' : 'Play the lesson'; }
    pb.addEventListener('click', function () {
      if (playing) { stop(); return; }
      current = { stop: stop }; playing = true; pb.textContent = 'Pause'; say(idx);
    });
    rb.addEventListener('click', function () { stop(); idx = 0; shownScene = -1; current = { stop: stop }; playing = true; pb.textContent = 'Pause'; say(0); });
    current = { stop: stop }; show(0); host.__storyShow = show; host.__storyN = chunks.length;
  };

  /* ---------- picture helpers for the episodes ---------- */
  var V = BT.sv = {};
  V.row = function (inner) { return '<div class="sv-row">' + inner + '</div>'; };
  V.card = function (t, col, small) { return '<div class="sv-card ' + (col || 'b') + (small ? ' sm' : '') + '">' + t + '</div>'; };
  V.cards = function (arr, cols, small) { return V.row(arr.map(function (t, i) { return V.card(t, cols ? cols[i % cols.length] : 'b', small); }).join('')); };
  V.big = function (t) { return '<div class="sv-big">' + t + '</div>'; };
  V.eq = function (t, col) { return '<div class="sv-eq ' + (col || '') + '">' + t + '</div>'; };
  V.rule = function (t) { return '<div class="sv-rule">' + t + '</div>'; };
  V.note = function (t) { return '<div class="sv-note">' + t + '</div>'; };
  V.list = function (arr) { return '<div class="sv-list">' + arr.map(function (t) { return '<div><b>✓</b>' + t + '</div>'; }).join('') + '</div>'; };
  V.tbl = function (rows, heads) { return K.table(rows, heads); };
  V.nl = function (lo, hi, o) { return BT.NL(lo, hi, o); };
  V.bar = function (n, d, alt) { return BT.bar(n, d, alt); };
  V.cols = function (items, n) { return '<div class="sv-cols" style="--n:' + (n || items.length) + '">' + items.map(function (x) { return '<div>' + x + '</div>'; }).join('') + '</div>'; };
  V.chip = function (t, col) { return '<div class="sv-chip ' + col + '">' + t + '</div>'; };
  V.sticks = function (n, col, band) {
    var s = '<div style="position:relative;display:inline-flex;gap:clamp(8px,2.6vw,24px);padding:6px 14px">';
    for (var i = 0; i < n; i++) s += '<span class="sv-stick" style="background:' + col + '"></span>';
    if (band) s += '<span style="position:absolute;left:0;right:0;top:50%;height:12px;margin-top:-6px;border-radius:6px;background:var(--hl);border:3px solid var(--fg)"></span>';
    return s + '</div>';
  };
  /* a rows x cols array of dots, the first "lit" shaded */
  V.dots = function (r, c, color, lit) {
    var w = 24 + c * 26, h = 12 + r * 26, s = '', k = 0;
    for (var i = 0; i < r; i++) for (var j = 0; j < c; j++) { s += '<circle cx="' + (22 + j * 26) + '" cy="' + (18 + i * 26) + '" r="9" style="fill:' + (lit === undefined || k < lit ? color : 'var(--surface-2)') + ';stroke:var(--fg);stroke-width:1.5"/>'; k++; }
    return svg(w + 10, h + 6, r + ' rows of ' + c + ' dots', s, Math.min(w + 10, 360));
  };
  V.clock = function (h, m) {
    var cx = 90, cy = 90, s = '<circle cx="90" cy="90" r="80" style="fill:var(--surface);stroke:var(--fg);stroke-width:4"/>';
    for (var i = 1; i <= 12; i++) { var a = (i * 30 - 90) * Math.PI / 180; s += txt((cx + 63 * Math.cos(a)).toFixed(1), (cy + 63 * Math.sin(a) + 6).toFixed(1), i, 17); }
    for (var t = 0; t < 60; t++) { var b = (t * 6 - 90) * Math.PI / 180, r1 = t % 5 ? 74 : 70; s += '<line x1="' + (cx + r1 * Math.cos(b)).toFixed(1) + '" y1="' + (cy + r1 * Math.sin(b)).toFixed(1) + '" x2="' + (cx + 78 * Math.cos(b)).toFixed(1) + '" y2="' + (cy + 78 * Math.sin(b)).toFixed(1) + '" style="stroke:var(--fg);stroke-width:' + (t % 5 ? 1 : 2.5) + '"/>'; }
    var ha = ((h % 12) * 30 + m * 0.5 - 90) * Math.PI / 180, ma = (m * 6 - 90) * Math.PI / 180;
    s += '<line x1="90" y1="90" x2="' + (cx + 42 * Math.cos(ha)).toFixed(1) + '" y2="' + (cy + 42 * Math.sin(ha)).toFixed(1) + '" style="stroke:var(--fg);stroke-width:6;stroke-linecap:round"/>';
    s += '<line x1="90" y1="90" x2="' + (cx + 62 * Math.cos(ma)).toFixed(1) + '" y2="' + (cy + 62 * Math.sin(ma)).toFixed(1) + '" style="stroke:var(--accent);stroke-width:4;stroke-linecap:round"/><circle cx="90" cy="90" r="5" style="fill:var(--fg)"/>';
    return svg(180, 180, 'A clock showing ' + h + ':' + (m < 10 ? '0' : '') + m, s, 190);
  };
  /* simple bar chart: items [[label,value],...] */
  V.bars = function (items, max, unit) {
    var w = 330, h = 190, x0 = 34, bw = Math.min(46, (w - x0 - 10) / items.length - 10), s = '', mx = max || Math.max.apply(null, items.map(function (x) { return x[1]; }));
    var step = mx <= 10 ? 2 : mx <= 20 ? 5 : mx <= 50 ? 10 : 20;
    for (var v = 0; v <= mx; v += step) { var y = 150 - v / mx * 130; s += '<line x1="' + x0 + '" y1="' + y + '" x2="' + (w - 6) + '" y2="' + y + '" style="stroke:var(--line);stroke-width:1"/>' + txt(x0 - 6, y + 4, v, 11, 'end'); }
    items.forEach(function (it, i) { var x = x0 + 12 + i * ((w - x0 - 10) / items.length), bh = it[1] / mx * 130; s += '<rect x="' + x + '" y="' + (150 - bh) + '" width="' + bw + '" height="' + bh + '" rx="4" style="fill:var(--accent)"/>' + txt(x + bw / 2, 168, it[0], 12) + txt(x + bw / 2, 144 - bh, it[1], 12); });
    return svg(w, h, 'A bar chart', s, 360);
  };
  V.poly = function (pts, fill, w, h, alt, labels) {
    var s = '<polygon points="' + pts.map(function (p) { return p.join(','); }).join(' ') + '" style="fill:' + (fill || 'var(--surface-2)') + ';stroke:var(--fg);stroke-width:3.5;stroke-linejoin:round"/>';
    (labels || []).forEach(function (l) { s += txt(l[0], l[1], l[2], 14); });
    return svg(w || 200, h || 150, alt || 'A shape', s, Math.min(w || 200, 300));
  };
  /* an angle drawn from a corner, arms of length 80, first arm along the base */
  V.angle = function (deg, label, flip) {
    var cx = 40, cy = 118, L = 120, a = deg * Math.PI / 180, ex = cx + L * Math.cos(a), ey = cy - L * Math.sin(a), s = '<line x1="' + cx + '" y1="' + cy + '" x2="' + (cx + L) + '" y2="' + cy + '" style="stroke:var(--fg);stroke-width:4"/><line x1="' + cx + '" y1="' + cy + '" x2="' + ex.toFixed(1) + '" y2="' + ey.toFixed(1) + '" style="stroke:var(--fg);stroke-width:4"/>';
    var r = 30; s += '<path d="M' + (cx + r) + ' ' + cy + ' A' + r + ' ' + r + ' 0 0 0 ' + (cx + r * Math.cos(a)).toFixed(1) + ' ' + (cy - r * Math.sin(a)).toFixed(1) + '" style="fill:none;stroke:var(--accent);stroke-width:4"/>';
    if (deg === 90) s += '<path d="M' + (cx + 16) + ' ' + cy + ' l0 -16 l-16 0" style="fill:none;stroke:var(--accent);stroke-width:3" transform="translate(0 0)"/>';
    if (label) s += txt(cx + 52, cy - 14 - Math.min(20, deg / 10), label, 16, 'start', ';fill:var(--accent);font-weight:700');
    return svg(190, 140, 'An angle of ' + deg + ' degrees', s, 220);
  };

  /* ---------- putting episodes at the front of a topic ---------- */
  BT.story = function (n, label, episodes) {
    var t = S.topics[n]; if (!t) { if (window.console) console.warn('story: no topic ' + n); return; }
    if (t.steps.some(function (s) { return s.id === 'watch'; })) return;
    var slides = episodes.map(function (ep) {
      return { title: ep.title, say: [ep.intro || 'Press play and your teacher will explain this step by step.'], goal: ep.goal || ep.title.toLowerCase() + '.', noMore: true, kind: 'Watch', live: function (host) { H.storyPlayer(host, ep); } };
    });
    BT.add(n, 'watch', label || 'Watch', slides);
    var st = t.steps.filter(function (s) { return s.id === 'watch'; })[0], i = t.steps.indexOf(st);
    if (i > 0) { t.steps.splice(i, 1); t.steps.unshift(st); }
    S.arrange(t);
  };
  /* append extra lessons to a topic's existing Watch step (skips titles already there) */
  BT.storyMore = function (n, episodes) {
    var t = S.topics[n]; if (!t) return;
    var st = t.steps.filter(function (s) { return s.id === 'watch'; })[0];
    if (!st) { BT.story(n, 'Watch', episodes); return; }
    var have = {}; (st.slides || []).forEach(function (sl) { have[sl.title] = 1; });
    var add = episodes.filter(function (ep) { return !have[ep.title]; }).map(function (ep) {
      return { title: ep.title, say: [ep.intro || 'Press play and your teacher will explain this step by step.'], goal: ep.goal || ep.title.toLowerCase() + '.', noMore: true, kind: 'Watch', live: function (host) { H.storyPlayer(host, ep); } };
    });
    if (!add.length) return;
    var key = n + '.watch', m = H.slideMeta;
    m.goals[key] = (m.goals[key] || []).concat(add.map(function (x) { return x.goal; }));
    m.more[key] = (m.more[key] || []).concat(add.map(function () { return null; }));
    st.slides = (st.slides || []).concat(add);
    S.arrange(t);
  };
})();
