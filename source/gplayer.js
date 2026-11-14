/* gplayer.js: the animated lesson player for the Watch step.
   Looks like the MathsStudio lesson films: a 16:9 stage, a title card for each question, progress dashes,
   and pictures that animate in as the teacher speaks. Uses the same episode format as story.js:
   { title, goal, scenes: [ { h, sub, steps: [ { say, html } ] } ] }.
   BT.lessons(n, label, episodes) puts the episodes in a first step called "Watch" at the front of a topic. */
(function () {
  'use strict';
  var S = Studio, H = S.h, BT = window.BT;
  if (!BT || !BT.sv) return;
  var W = 800, HH = 450;

  var css = document.createElement('style');
  css.textContent = [
    '.gp{display:flex;flex-direction:column;gap:10px;margin:6px auto 14px;max-width:1000px;width:100%}',
    '.gp-frame{position:relative;width:100%;aspect-ratio:16/9;border-radius:16px;overflow:hidden;background:#f4f4f4;box-shadow:0 6px 24px rgba(34,26,58,.16)}',
    '.gp-stage{position:absolute;left:0;top:0;width:' + W + 'px;height:' + HH + 'px;transform-origin:0 0;overflow:hidden;background:#f4f4f4;color:#221a3a;',
    '  font-family:"DejaVu Sans",Verdana,"Segoe UI",system-ui,sans-serif;font-weight:700;',
    '  --accent:#881cd6;--accent-fg:#fff;--good:#1e9e60;--bad:#e2620f;--fg:#221a3a;--muted:#6b6480;--surface:#ffffff;--surface-2:#efe4f8;--line:#ddd0ea;--hl:#ecdcf8;--font-display:"DejaVu Sans",Verdana,"Segoe UI",system-ui,sans-serif}',
    '.gp-bar{position:absolute;left:0;top:0;width:100%;height:11px;background:#d8aaf0}',
    '.gp-bar:before{content:"";position:absolute;left:0;top:0;width:13px;height:11px;background:#881cd6}',
    '.gp-lab{position:absolute;left:20px;top:22px;right:20px;font-size:13px;display:flex;align-items:center;gap:9px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}',
    '.gp-lab:before{content:"";flex:none;width:10px;height:10px;border-radius:2px;background:#881cd6}',
    '.gp-dash{position:absolute;left:0;right:0;bottom:15px;display:flex;justify-content:center;gap:4px}',
    '.gp-dash i{display:block;width:32px;height:3px;border-radius:2px;background:#e3cdf3}.gp-dash i.on{background:#881cd6}',
    '.gp-body{position:absolute;left:24px;right:24px;top:44px;bottom:30px;display:flex;align-items:center;justify-content:center}',
    '.gp-fit{width:100%;display:flex;flex-direction:column;align-items:center;gap:10px;transform-origin:50% 50%}',
    '.gp-h{font-size:21px;text-align:center;margin:0;line-height:1.25;text-wrap:balance}',
    '.gp-sub{font-size:13px;color:#6b6480;text-align:center;margin:-4px 0 2px}',
    '.gp-title{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;text-align:center;padding:0 50px}',
    '.gp-title .t1{font-size:15px;color:#6b6480}.gp-title .t2{font-size:30px;line-height:1.25;text-wrap:balance}.gp-title .t3{font-size:44px;color:#881cd6;line-height:1.1}',
    '.gp-ico{width:56px;height:56px}',
    /* blocks build in */
    '.gp-stage [data-sb]{width:100%;display:flex;flex-direction:column;align-items:center;gap:8px;opacity:0;transform:translateY(14px);transition:opacity .5s ease,transform .5s ease}',
    '.gp-stage [data-sb].on{opacity:1;transform:none}',
    '.gp-swap{display:grid;width:100%;justify-items:center}.gp-swap>[data-sb]{grid-area:1/1}',
    '.gp-stage [data-sb].on .sv-card,.gp-stage [data-sb].on .sv-chip,.gp-stage [data-sb].on .lk-tag{animation:gppop .45s cubic-bezier(.3,1.5,.6,1) both}',
    '.gp-stage [data-sb].on svg rect,.gp-stage [data-sb].on svg polygon{animation:gpgrow .6s ease both;transform-box:fill-box;transform-origin:left center}',
    '.gp-stage [data-sb].on svg circle{animation:gppop .5s cubic-bezier(.3,1.5,.6,1) both;transform-box:fill-box;transform-origin:center}',
    '.gp-stage [data-sb].on .sv-list>div{animation:gpin .45s ease both}',
    '@keyframes gppop{from{opacity:0;transform:scale(.6)}to{opacity:1;transform:none}}',
    '@keyframes gpgrow{from{opacity:0;transform:scaleX(.2)}to{opacity:1;transform:none}}',
    '@keyframes gpin{from{opacity:0;transform:translateX(-16px)}to{opacity:1;transform:none}}',
    /* fixed sizes for the picture helpers inside the stage */
    '.gp-stage .sv-row{display:flex;flex-wrap:wrap;gap:8px 12px;justify-content:center;align-items:center;width:100%}',
    '.gp-stage .sv-card{border:4px solid;border-radius:14px;min-width:58px;padding:2px 10px;text-align:center;font-weight:700;font-size:38px;line-height:1.25;background:#fff}',
    '.gp-stage .sv-card.sm{font-size:22px;min-width:0;padding:3px 10px;border-width:3px}',
    '.gp-stage .b{color:var(--accent);border-color:var(--accent)}.gp-stage .g{color:var(--good);border-color:var(--good)}.gp-stage .r{color:var(--bad);border-color:var(--bad)}.gp-stage .y{color:#2a7fb0;border-color:#2a7fb0}',
    '.gp-stage .sv-big{font-weight:700;font-size:60px;line-height:1.05;text-align:center}',
    '.gp-stage .sv-eq{font-weight:700;font-size:26px;text-align:center;line-height:1.3}',
    '.gp-stage .sv-eq.g{color:var(--good)}.gp-stage .sv-eq.r{color:var(--bad)}.gp-stage .sv-eq.b{color:var(--accent)}',
    '.gp-stage .sv-rule{background:var(--hl);color:#221a3a;border:0;border-radius:10px;padding:8px 18px;font-size:16px;text-align:center;max-width:620px}',
    '.gp-stage .sv-note{color:#6b6480;font-size:13px;text-align:center}',
    '.gp-stage .sv-cols{display:grid;grid-template-columns:repeat(var(--n,4),minmax(0,1fr));gap:10px;width:100%;max-width:640px}',
    '.gp-stage .sv-cols>div{display:flex;flex-direction:column;align-items:center;gap:6px;min-width:0;text-align:center}',
    '.gp-stage .sv-chip{width:100%;text-align:center;border-radius:8px;padding:4px 3px;font-weight:700;color:#fff;font-size:14px}',
    '.gp-stage .sv-chip.b{background:var(--accent)}.gp-stage .sv-chip.g{background:var(--good)}.gp-stage .sv-chip.r{background:var(--bad)}.gp-stage .sv-chip.y{background:#2a7fb0}',
    '.gp-stage .sv-stick{display:inline-block;width:11px;height:50px;border-radius:6px;border:2px solid var(--fg)}',
    '.gp-stage .sv-list{display:flex;flex-direction:column;gap:9px;width:100%;max-width:640px}',
    '.gp-stage .sv-list div{display:flex;gap:12px;align-items:center;font-size:17px}',
    '.gp-stage .sv-list b{flex:0 0 12px;height:12px;border-radius:50%;background:var(--accent);color:transparent;overflow:hidden;font-size:0}',
    '.gp-stage .tbl{border-collapse:collapse;font-size:16px;background:#fff;width:auto;margin:0 auto}.gp-stage .tbl th{background:#881cd6;color:#fff;padding:5px 12px}.gp-stage .tbl td{padding:5px 12px;border:1px solid #e3cdf3;text-align:center}',
    '.gp-stage .lk-col{grid-template-columns:repeat(var(--n),46px);font-size:34px;font-family:inherit}',
    '.gp-stage .lk-col .hd{font-size:14px}.gp-stage .lk-col .cy{font-size:16px}',
    '.gp-stage .lk-tag{font-size:14px;border-radius:8px}.gp-stage .lk-step{font-size:18px}',
    '.gp-stage .gp-fit svg{zoom:1.45;max-width:100%;height:auto}',
    '.gp-stage svg text{font-family:inherit}',
    /* controls */
    '.gp-list{margin:4px auto 12px;max-width:1000px;width:100%;background:var(--surface);border:1px solid var(--line);border-radius:14px;padding:10px 12px}',
    '.gp-list-h{font-weight:800;font-size:14px;color:var(--muted);margin:0 0 6px 4px;cursor:pointer;min-height:32px;display:flex;align-items:center;gap:6px}',
    '.gp-list:not([open]) .gp-list-h{margin:0}',
    '.gp-list-h{list-style:none}.gp-list-h::-webkit-details-marker{display:none}.gp-list-h::after{content:"▾";margin-left:auto;font-size:16px;color:#881cd6}.gp-list[open] .gp-list-h::after{content:"▴"}',
    '.gp-list ul{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:4px 10px}',
    '.gp-q{display:flex;align-items:flex-start;gap:8px;width:100%;min-height:44px;text-align:left;border:0;border-radius:10px;background:transparent;color:var(--fg);font:inherit;font-weight:700;font-size:15px;line-height:1.3;padding:8px 10px;cursor:pointer}',
    '.gp-q:hover{background:var(--surface-2)}',
    '.gp-q.on{background:#ecdcf8;color:#5a1291}',
    '.gp-q:focus-visible{outline:3px solid #881cd6;outline-offset:1px}',
    '.gp-dot{flex:none;width:18px;height:18px;margin-top:1px;border-radius:50%;border:2px solid #b98be6;color:#881cd6;font-size:9px;display:flex;align-items:center;justify-content:center}',
    '.gp-q.on .gp-dot{border-color:#881cd6}',
    '.gp-cap{min-height:48px;font-size:16px;line-height:1.45;padding:2px 4px}',
    '.gp-ctl{display:flex;align-items:center;gap:8px;flex-wrap:wrap}',
    '.gp-ctl .btn{min-height:44px}',
    '.gp-prog{flex:1 1 140px;min-width:0;height:8px;background:var(--line);border-radius:99px;overflow:hidden}.gp-prog i{display:block;height:100%;width:0;background:#881cd6;transition:width .3s}',
    '.gp.full .gp-frame{position:fixed;inset:0;z-index:9999;border-radius:0;aspect-ratio:auto;background:#111}',
    '.gp.full .gp-close{display:flex}.gp-close{display:none;position:absolute;right:max(12px,env(safe-area-inset-right));top:max(12px,env(safe-area-inset-top));z-index:2;width:44px;height:44px;border-radius:50%;border:0;background:#fff;color:#221a3a;font-size:22px;align-items:center;justify-content:center;box-shadow:0 2px 10px rgba(0,0,0,.3)}',
    '.gp-cnt{font-size:13px;color:var(--muted);font-variant-numeric:tabular-nums}',
    '@media(prefers-reduced-motion:reduce){.gp-stage *{animation:none!important;transition:none!important}.gp-stage [data-sb]{opacity:1;transform:none}}'
  ].join('\n');
  document.head.appendChild(css);

  var current = null, oldStop = H.storyStop;
  H.storyStop = function () { if (oldStop) oldStop(); if (current) current.stop(); };

  var ICON = '<svg class="gp-ico" viewBox="0 0 56 56" aria-hidden="true"><circle cx="28" cy="28" r="25" fill="#ead6f8"/><path d="M28 28 L28 3 A25 25 0 0 1 53 28 Z" fill="#881cd6"/><path d="M3 28 H53 M28 3 V53" stroke="#fff" stroke-width="2"/></svg>';

  /* draw-on animation for lines and arcs when a block appears */
  function drawIn(block) {
    if (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    block.querySelectorAll('svg path, svg line, svg polyline').forEach(function (p, i) {
      var len = 0; try { len = p.getTotalLength(); } catch (e) { return; }
      if (!len || len > 3000) return;
      p.style.strokeDasharray = len; p.style.strokeDashoffset = len;
      p.getBoundingClientRect();
      p.style.transition = 'stroke-dashoffset .9s ease ' + Math.min(i * 0.04, 0.6) + 's';
      p.style.strokeDashoffset = 0;
    });
  }

  H.gifPlayer = function (host, ep, meta) {
    meta = meta || { q: 0, of: 1 };
    var slides = [{ title: true, steps: [{ say: ep.title + ' In this lesson, we will learn ' + (ep.goal || '') }] }];
    ep.scenes.forEach(function (sc) { slides.push(sc); });
    var chunks = [];
    slides.forEach(function (sl, si) { sl.steps.forEach(function (st, k) { chunks.push({ si: si, k: k, say: st.say }); }); });
    var dashes = ''; for (var d = 0; d < meta.of; d++) dashes += '<i class="' + (d <= meta.q ? 'on' : '') + '"></i>';
    var short = ep.title.replace(/\?$/, '');

    var list = (meta.titles && meta.titles.length > 1) ? '<details class="gp-list"' + (window.innerWidth > 700 ? ' open' : '') + '><summary class="gp-list-h">Questions in this Watch lesson</summary><ul>' +
      meta.titles.map(function (tt, j) { return '<li><button type="button" class="gp-q' + (j === meta.q ? ' on' : '') + '" data-q="' + j + '"' + (j === meta.q ? ' aria-current="true"' : '') + '><span class="gp-dot" aria-hidden="true">' + (j === meta.q ? '▶' : '') + '</span>' + tt + '</button></li>'; }).join('') + '</ul></details>' : '';
    host.innerHTML = list + '<div class="gp"><div class="gp-frame"><div class="gp-stage"></div><button class="gp-close" type="button" aria-label="Close full screen">✕</button></div>' +
      '<div class="gp-cap" aria-live="polite"></div>' +
      '<div class="gp-ctl"><button class="btn" type="button" data-p>Play the lesson</button>' +
      '<button class="btn ghost" type="button" data-b aria-label="Back one step">◀ Back</button>' +
      '<button class="btn ghost" type="button" data-n aria-label="Next step">Next ▶</button>' +
      '<button class="btn ghost" type="button" data-r>Start again</button>' +
      '<button class="btn ghost" type="button" data-f>Full screen</button>' +
      '<div class="gp-prog" aria-hidden="true"><i></i></div><span class="gp-cnt"></span></div>' +
      '<p class="note" style="margin:0" data-note></p></div>';
    var root = host.querySelector('.gp'), frame = root.querySelector('.gp-frame'), stage = root.querySelector('.gp-stage'), cap = root.querySelector('.gp-cap');
    var pb = root.querySelector('[data-p]'), bar = root.querySelector('.gp-prog i'), cnt = root.querySelector('.gp-cnt'), note = root.querySelector('[data-note]');
    var idx = 0, playing = false, token = 0, timer = null, shown = -1;
    var okVoice = H.voiceOk && H.voiceOk();
    note.textContent = okVoice ? 'Your device reads this aloud. You can change the voice and speed in Settings.' : 'The voice is not available here, so the lesson plays with words only.';

    function fit() {
      var full = root.classList.contains('full'), fw = frame.clientWidth, fh = frame.clientHeight;
      var s = full ? Math.min(fw / W, fh / HH) : fw / W;
      stage.style.transform = 'translate(' + (full ? (fw - W * s) / 2 : 0) + 'px,' + (full ? (fh - HH * s) / 2 : 0) + 'px) scale(' + s + ')';
    }
    function setFull(on) {
      root.classList.toggle('full', on);
      try {
        if (on && frame.requestFullscreen) frame.requestFullscreen().then(function () { if (screen.orientation && screen.orientation.lock) screen.orientation.lock('landscape').catch(function () {}); }).catch(function () {});
        if (!on && document.fullscreenElement) document.exitFullscreen().catch(function () {});
      } catch (e) { /* not supported: the fixed overlay still works */ }
      setTimeout(fit, 60); setTimeout(fit, 400);
    }
    root.querySelector('[data-f]').addEventListener('click', function () { setFull(true); });
    root.querySelector('.gp-close').addEventListener('click', function () { setFull(false); });
    document.addEventListener('fullscreenchange', function () { if (!document.fullscreenElement && root.classList.contains('full')) { root.classList.remove('full'); setTimeout(fit, 60); } });
    window.addEventListener('resize', fit);
    if (window.ResizeObserver) new ResizeObserver(fit).observe(frame); fit();

    function chrome(inner, isTitle) {
      return '<div class="gp-bar"></div>' + (isTitle ? '' : '<div class="gp-lab">' + (/^Let’s recap/.test(inner.h || '') ? 'Remember!' : short) + '</div>') +
        '<div class="gp-dash">' + dashes + '</div>';
    }
    function build(si) {
      var sl = slides[si], h;
      if (sl.title) {
        h = chrome({}, true) + '<div class="gp-title">' + ICON + '<div class="t2">' + ep.title + '</div></div>';
        stage.innerHTML = h; return;
      }
      h = chrome(sl) + '<div class="gp-body"><div class="gp-fit"><h3 class="gp-h">' + sl.h + '</h3>' + (sl.sub ? '<p class="gp-sub">' + sl.sub + '</p>' : '');
      /* a step whose html starts with <!--swap--> replaces the block before it, in the same place */
      var groups = [];
      sl.steps.forEach(function (st, k) {
        if (!st.html) return;
        var blk = '<div data-sb="' + k + '">' + st.html + '</div>';
        if (st.html.indexOf('<!--swap-->') === 0 && groups.length) groups[groups.length - 1].push(blk); else groups.push([blk]);
      });
      groups.forEach(function (g) { h += g.length > 1 ? '<div class="gp-swap">' + g.join('') + '</div>' : g[0]; });
      stage.innerHTML = h + '</div></div>';
      /* shrink to fit if the finished slide is taller than the stage */
      var body = stage.querySelector('.gp-body'), f = stage.querySelector('.gp-fit');
      var need = f.scrollHeight, room = body.clientHeight, needW = f.scrollWidth, roomW = body.clientWidth;
      var k2 = Math.min(1, room / need, roomW / needW);
      if (k2 < 1) f.style.transform = 'scale(' + k2.toFixed(3) + ')';
    }
    function show(i) {
      var c = chunks[i];
      if (shown !== c.si) { shown = c.si; build(c.si); }
      stage.querySelectorAll('[data-sb]').forEach(function (e) {
        var k = Number(e.getAttribute('data-sb')), on = k <= c.k;
        if (on && e.parentNode.classList.contains('gp-swap')) {
          var later = [].some.call(e.parentNode.children, function (o) { var j = Number(o.getAttribute('data-sb')); return j > k && j <= c.k; });
          if (later) on = false;
        }
        if (on && !e.classList.contains('on')) { e.classList.add('on'); drawIn(e); }
        else if (!on) e.classList.remove('on');
      });
      cap.textContent = c.say; bar.style.width = ((i + 1) / chunks.length * 100) + '%';
      cnt.textContent = 'Slide ' + (c.si + 1) + ' of ' + slides.length;
    }
    function say(i) {
      show(i); var my = ++token; clearTimeout(timer);
      function next() {
        if (my !== token || !playing || !root.isConnected) return;
        if (i + 1 < chunks.length) { idx = i + 1; timer = setTimeout(function () { if (my === token && playing && root.isConnected) say(idx); }, 600); }
        else { playing = false; idx = 0; pb.textContent = 'Watch again'; }
      }
      var ok = okVoice && H.speakStory(chunks[i].say, function () { next(); });
      if (!ok) timer = setTimeout(next, chunks[i].say.split(' ').length * 380 + 1200);
    }
    function stop() { token++; clearTimeout(timer); playing = false; try { if (okVoice) speechSynthesis.cancel(); } catch (e) { /* ignore */ } pb.textContent = idx > 0 ? 'Keep watching' : 'Play the lesson'; }
    function go(i) { var was = playing; stop(); idx = Math.max(0, Math.min(chunks.length - 1, i)); if (was) { playing = true; pb.textContent = 'Pause'; current = { stop: stop }; say(idx); } else show(idx); }
    pb.addEventListener('click', function () { if (playing) { stop(); return; } current = { stop: stop }; playing = true; pb.textContent = 'Pause'; say(idx); });
    root.querySelector('[data-b]').addEventListener('click', function () { go(idx - 1); });
    root.querySelector('[data-n]').addEventListener('click', function () { go(idx + 1); });
    root.querySelector('[data-r]').addEventListener('click', function () { stop(); idx = 0; shown = -1; current = { stop: stop }; playing = true; pb.textContent = 'Pause'; say(0); });
    host.querySelectorAll('[data-q]').forEach(function (bt) { bt.addEventListener('click', function () {
      var j = Number(bt.getAttribute('data-q')); if (j === meta.q) { if (!playing) pb.click(); return; }
      stop(); H.__gpAutoplay = true; if (H.slideJump) H.slideJump(j);
    }); });
    current = { stop: stop }; show(0); host.__storyShow = show; host.__storyN = chunks.length;
    if (H.__gpAutoplay) { H.__gpAutoplay = false; setTimeout(function () { if (root.isConnected && !playing) pb.click(); }, 350); }
  };

  function toSlides(episodes) {
    return episodes.map(function (ep, i) {
      return { title: ep.title, say: ['Press play and your teacher will explain this step by step.'], goal: ep.goal || ep.title.toLowerCase(), noMore: true, kind: 'Watch lesson',
        live: function (host) { H.gifPlayer(host, ep, { q: i, of: episodes.length, titles: episodes.map(function (e) { return e.title; }) }); } };
    });
  }
  /* put the episodes in a Watch step at the front of a topic. Older Watch lessons are removed,
     except those whose titles are listed in keep: they stay, after the new ones, in the new style. */
  BT.lessons = function (n, label, episodes, keep) {
    var t = S.topics[n]; if (!t) { if (window.console) console.warn('lessons: no topic ' + n); return; }
    var old = t.steps.filter(function (s) { return s.id === 'watch'; })[0], kept = [];
    if (old && keep) (old.slides || []).forEach(function (sl) { if (sl.ep && keep.indexOf(sl.title) >= 0) kept.push(sl.ep); });
    t.steps = t.steps.filter(function (s) { return s.id !== 'watch'; });
    var m = H.slideMeta; if (m) { delete m.goals[n + '.watch']; delete m.more[n + '.watch']; }
    BT.add(n, 'watch', label || 'Watch lesson', toSlides(episodes.concat(kept)));
    var st = t.steps.filter(function (s) { return s.id === 'watch'; })[0], i = t.steps.indexOf(st);
    if (i > 0) { t.steps.splice(i, 1); t.steps.unshift(st); }
    S.arrange(t);
  };
})();
