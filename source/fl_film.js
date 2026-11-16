/* fl_film.js: First level Story time as a cartoon film.
   One continuous scene (no slides): the background, the characters and the things in the story stay on screen
   and move, change their faces, talk and react while the storyteller reads. Play, pause, back, forward, full screen.
   A film is a list of beats: { s: words, who: 'n' (storyteller) or a character, act: [actions before], then: [actions after],
   count: [ids lit one by one as the numbers are said], wait: ms of quiet after }.
   Actions: ['bg', name] · ['move', id, x, y, scale, ms] · ['face', id, mood] · ['show', id] · ['hide', id] · ['fill', n]
   · ['fly', starId, slot] · ['smoke'] · ['flame', on] · ['big', text] · ['tilt', id, deg] · ['hop', id] */
(function () {
  'use strict';
  var FL = window.FL, S = window.Studio, H = S && S.h; if (!FL || !H) return;
  var INK = '#2b2340';
  FL.FILM = FL.FILM || {};

  var css = document.createElement('style');
  css.textContent = [
    '.flf{position:relative;width:100%;aspect-ratio:16/9;border-radius:16px;overflow:hidden;background:#1b1b4b;box-shadow:0 6px 24px rgba(34,26,58,.2);user-select:none}',
    '.flf svg.flf-sv{position:absolute;inset:0;width:100%;height:100%;display:block}',
    '.flf .mv{transition-property:transform,opacity;transition-timing-function:cubic-bezier(.45,.05,.3,1)}',
    '.flf .bgl{transition:opacity 1.2s ease}',
    '.flf .tw{animation:ffTw 2.4s ease-in-out infinite}@keyframes ffTw{0%,100%{opacity:.35}50%{opacity:1}}',
    '.flf .bob{animation:ffBob 2.2s ease-in-out infinite}@keyframes ffBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}',
    '.flf .flame{transform-box:fill-box;transform-origin:50% 0;animation:ffFl .18s ease-in-out infinite alternate}@keyframes ffFl{from{transform:scaleY(.8)}to{transform:scaleY(1.2)}}',
    '.flf .eye{transform-box:fill-box;transform-origin:center;animation:ffBlink 4.2s infinite}@keyframes ffBlink{0%,94%,100%{transform:scaleY(1)}96%{transform:scaleY(.1)}}',
    '.flf .puff{animation:ffPuff 1.4s ease-out forwards}@keyframes ffPuff{0%{opacity:.9;transform:translate(0,0) scale(.4)}100%{opacity:0;transform:translate(-40px,30px) scale(1.8)}}',
    '.flf .lit{filter:drop-shadow(0 0 8px #ffe14d) drop-shadow(0 0 3px #fff)}',
    '.flf .pop{animation:ffPop .5s cubic-bezier(.3,1.6,.6,1) both}@keyframes ffPop{0%{transform:scale(0)}100%{transform:scale(1)}}',
    '.flf .bigt{font-weight:900;fill:#fff;stroke:' + INK + ';stroke-width:6px;paint-order:stroke;font-family:inherit}',
    '.flf-num{font-weight:900;fill:#ffe14d;stroke:' + INK + ';stroke-width:5px;paint-order:stroke;font-family:inherit}',
    '.flf .bub{transition:opacity .3s,transform .3s;transform-box:fill-box;transform-origin:0 100%}',
    '.flf-play{position:absolute;left:50%;top:50%;width:96px;height:96px;margin:-48px 0 0 -48px;border-radius:50%;border:0;background:rgba(255,255,255,.92);box-shadow:0 8px 26px rgba(0,0,0,.35);cursor:pointer;display:flex;align-items:center;justify-content:center;transition:opacity .3s,transform .2s}',
    '.flf-play:hover{transform:scale(1.06)}.flf-play svg{width:44px;height:44px;margin-left:6px}.flf.on .flf-play{opacity:0;pointer-events:none}',
    '.flf-bar{position:absolute;left:0;right:0;bottom:0;display:flex;align-items:center;gap:8px;padding:8px 10px;background:linear-gradient(transparent,rgba(0,0,0,.55));opacity:1;transition:opacity .4s}',
    '.flf.on .flf-bar{opacity:0}.flf.on:hover .flf-bar,.flf.on:focus-within .flf-bar{opacity:1}',
    '.flf-bar button{min-width:44px;min-height:40px;border:0;border-radius:10px;background:rgba(255,255,255,.9);color:' + INK + ';font-weight:800;font-size:16px;cursor:pointer}',
    '.flf-prog{flex:1;height:8px;border-radius:99px;background:rgba(255,255,255,.35);overflow:hidden;cursor:pointer}.flf-prog i{display:block;height:100%;width:0;background:#ffd166;transition:width .4s}',
    '.flf:fullscreen,.flf.full{border-radius:0;width:100vw;height:100vh;aspect-ratio:auto;position:fixed;inset:0;z-index:9999}',
    '.flf-opts{display:flex;flex-wrap:wrap;gap:8px 16px;align-items:center;margin-top:10px}.flf-opts label{display:flex;gap:6px;align-items:center;font-weight:700;font-size:15px}',
    '.flf-opts select{min-height:40px;max-width:min(280px,64vw);font:inherit;font-weight:600;border:2px solid var(--line);border-radius:10px;padding:4px 8px;background:var(--surface);color:var(--fg)}',
    '@media(prefers-reduced-motion:reduce){.flf *{animation:none!important;transition:none!important}}'
  ].join('\n');
  document.head.appendChild(css);

  /* ---------- drawings (800 x 450) ---------- */
  function sky() { var s = '<defs><linearGradient id="ffSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#141443"/><stop offset="1" stop-color="#3d2f7a"/></linearGradient><radialGradient id="ffGlow"><stop offset="0" stop-color="#fff7c2"/><stop offset="1" stop-color="#fff7c2" stop-opacity="0"/></radialGradient></defs><rect width="800" height="450" fill="url(#ffSky)"/>';
    for (var i = 0; i < 38; i++) { var x = (i * 137) % 800, y = (i * 71) % 300 + 8; s += '<circle class="tw" style="animation-delay:' + ((i * 0.37) % 2.4).toFixed(2) + 's" cx="' + x + '" cy="' + y + '" r="' + (i % 3 ? 1.6 : 2.6) + '" fill="#fff"/>'; }
    return s + '<circle cx="680" cy="80" r="70" fill="url(#ffGlow)"/><circle cx="680" cy="80" r="38" fill="#fff4c2"/><circle cx="667" cy="70" r="7" fill="#eadb9a"/><circle cx="694" cy="94" r="5" fill="#eadb9a"/>'; }
  var BGS = {
    space: function () { return ''; },
    garden: function () { return '<path d="M0 330q200-70 400-20t400-30V450H0z" fill="#3c8f5a"/><path d="M0 380q240-40 480 0t320-14V450H0z" fill="#4fae6c"/>' + [[90, 395], [250, 410], [560, 400], [720, 415]].map(function (p) { return '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="6" fill="#ffb3c7"/><circle cx="' + (p[0] + 14) + '" cy="' + (p[1] + 6) + '" r="5" fill="#fff"/>'; }).join(''); },
    pond: function () { return '<path d="M0 300q200-40 400-10t400-20V450H0z" fill="#4fae6c"/><ellipse cx="420" cy="380" rx="430" ry="70" fill="#3fa2d8"/><path d="M60 372q60-10 120 0M300 392q60-10 120 0M560 370q60-10 120 0" stroke="#9bd7f3" stroke-width="5" fill="none" stroke-linecap="round"/>'; }
  };
  function starPath(r) { var p = []; for (var i = 0; i < 10; i++) { var rr = i % 2 ? r * 0.45 : r, a = (i * 36 - 90) * Math.PI / 180; p.push((rr * Math.cos(a)).toFixed(1) + ',' + (rr * Math.sin(a)).toFixed(1)); } return '<polygon points="' + p.join(' ') + '" fill="#ffd166" stroke="' + INK + '" stroke-width="3" stroke-linejoin="round"/>'; }
  var MOUTH = { happy: 'M-11 -4q11 10 22 0', big: 'M-12 -6q12 16 24 0z', worried: 'M-10 2q10-8 20 0', o: 'M-5 -3a5 6 0 1 0 10 0a5 6 0 1 0 -10 0', talk: 'M-9 -6q9 12 18 0z' };
  function rocket() {
    return '<g class="bob"><g class="rk-tilt mv" style="transition-duration:.6s">' +
      '<g class="rk-flame" style="opacity:0;transition:opacity .4s"><path class="flame" d="M-20 62Q0 130 20 62Z" fill="#ff9f1c"/><path class="flame" d="M-10 62Q0 104 10 62Z" fill="#fff2a8"/></g>' +
      '<path d="M-36 18 L-70 74 L-30 64Z" fill="#ffd166" stroke="' + INK + '" stroke-width="5" stroke-linejoin="round"/><path d="M36 18 L70 74 L30 64Z" fill="#ffd166" stroke="' + INK + '" stroke-width="5" stroke-linejoin="round"/>' +
      '<path d="M0 -92 C44 -60 48 20 36 64 L-36 64 C-48 20 -44 -60 0 -92Z" fill="#ef5b5b" stroke="' + INK + '" stroke-width="5" stroke-linejoin="round"/>' +
      '<path d="M-36 64 L36 64 L30 76 L-30 76Z" fill="#c9c3d6" stroke="' + INK + '" stroke-width="4" stroke-linejoin="round"/>' +
      '<circle cx="0" cy="-16" r="28" fill="#cfe9ff" stroke="' + INK + '" stroke-width="5"/>' +
      '<g transform="translate(0 -14)"><g class="rk-brow" style="opacity:0;transition:opacity .3s"><path d="M-17 -14l9 -5M17 -14l-9 -5" stroke="' + INK + '" stroke-width="3" stroke-linecap="round"/></g>' +
      '<ellipse class="eye" cx="-9" cy="-8" rx="4" ry="5" fill="' + INK + '"/><ellipse class="eye" cx="9" cy="-8" rx="4" ry="5" fill="' + INK + '"/>' +
      '<circle cx="-17" cy="3" r="4" fill="#ff9bb5" opacity=".8"/><circle cx="17" cy="3" r="4" fill="#ff9bb5" opacity=".8"/>' +
      '<path class="rk-mouth" d="' + MOUTH.happy + '" fill="#7a1f3a" stroke="' + INK + '" stroke-width="3" stroke-linecap="round"/></g></g></g>';
  }
  function tank() { var s = '<rect x="-6" y="-6" width="292" height="132" rx="18" fill="#fff" stroke="' + INK + '" stroke-width="4"/>';
    for (var i = 0; i < 10; i++) { var c = i % 5, r = Math.floor(i / 5); s += '<rect x="' + (6 + c * 56) + '" y="' + (6 + r * 58) + '" width="48" height="48" rx="8" fill="#f3efff" stroke="#b9acd8" stroke-width="2.5"/>'; }
    return s; }
  function slotXY(i) { return [600 - 140 + (i % 5) * 56 + 30, 190 - 60 + Math.floor(i / 5) * 58 + 30]; }

  function build() {
    var s = '<svg class="flf-sv" viewBox="0 0 800 450" role="img" aria-label="Story picture">' + sky();
    Object.keys(BGS).forEach(function (k) { s += '<g class="bgl" data-bg="' + k + '" style="opacity:' + (k === 'space' ? 1 : 0) + '">' + BGS[k]() + '</g>'; });
    s += '<g id="ff-tank" class="mv" style="opacity:0;transform:translate(460px,130px);transition-duration:.6s">' + tank() + '</g>';
    s += '<g id="ff-stones" class="mv" style="opacity:0;transition-duration:.6s">' + [2, 4, 6, 8].map(function (v, i) { var x = 300 + i * 120; return '<g class="ff-st" data-i="' + i + '"><ellipse cx="' + x + '" cy="372" rx="46" ry="20" fill="' + (i === 3 ? '#ffd166' : '#c9c3d6') + '" stroke="' + INK + '" stroke-width="4"/><text x="' + x + '" y="382" font-size="30" font-weight="900" text-anchor="middle" fill="' + INK + '" class="ff-sv">' + (i === 3 ? '?' : v) + '</text></g>'; }).join('') + '</g>';
    for (var i = 1; i <= 11; i++) s += '<g id="ff-s' + i + '" class="mv" style="opacity:0;transition-duration:1s"><g class="ff-sin">' + starPath(26) + '</g></g>';
    s += '<g id="ff-ruby" class="mv" style="transform:translate(-160px,240px) scale(1);transition-duration:2s">' + rocket() + '<g class="ff-puffs"></g></g>';
    s += '<g id="ff-bub" class="bub" style="opacity:0"><rect x="0" y="0" width="10" height="56" rx="20" fill="#fff" stroke="' + INK + '" stroke-width="4"/><path d="M26 54 l-8 22 l26 -22z" fill="#fff" stroke="' + INK + '" stroke-width="4" stroke-linejoin="round"/><rect x="18" y="49" width="30" height="8" fill="#fff"/><text x="20" y="37" font-size="26" font-weight="800" fill="' + INK + '" class="ff-bt"></text></g>';
    s += '<text id="ff-big" class="bigt" x="400" y="170" font-size="110" text-anchor="middle" style="opacity:0"></text>';
    return s + '</svg>';
  }

  /* ---------- the player ---------- */
  H.flFilm = function (host, ep, meta) {
    var F = FL.FILM[ep.film]; if (!F) return null;
    var beats = F.beats, okVoice = H.voiceOk && H.voiceOk();
    host.innerHTML = '<div class="flf" tabindex="-1">' + build() + '<button class="flf-play" type="button" aria-label="Play the story"><svg viewBox="0 0 40 40"><path d="M8 4 36 20 8 36Z" fill="#2b5fd9"/></svg></button>' +
      '<div class="flf-bar"><button type="button" data-pp aria-label="Play">▶</button><button type="button" data-bk aria-label="Back">⏮</button><div class="flf-prog" aria-hidden="true"><i></i></div><button type="button" data-fw aria-label="Forward">⏭</button><button type="button" data-fs aria-label="Full screen">⛶</button></div></div>' +
      '<div class="flf-opts"><label>Voice <select data-vv></select></label><label>Reading speed <select data-vr><option value="0.8">Slower</option><option value="1">Normal</option><option value="1.2">Faster</option></select></label></div>' +
      '<p class="note" style="margin:6px 0 0">' + (okVoice ? '🔊 Turn the sound on: the story is read aloud.' : '🔇 This story needs to be heard. Please open MathsStudio in Chrome, Safari or Edge and turn the sound on.') + '</p>';
    var box = host.querySelector('.flf'), sv = box.querySelector('svg'), pp = box.querySelector('[data-pp]'), big = box.querySelector('.flf-play'), prog = box.querySelector('.flf-prog i');
    function $(id) { return sv.querySelector('#ff-' + id); }
    var st = {}, at = 0, playing = false, token = 0, timers = [], talkT = null;
    function later(fn, ms) { var t = setTimeout(fn, ms); timers.push(t); return t; }
    function clearAll() { timers.forEach(clearTimeout); timers = []; clearInterval(talkT); talkT = null; try { speechSynthesis.cancel(); } catch (e) { /* ignore */ } }

    /* voice and speed: the same choices as Settings */
    var vv = host.querySelector('[data-vv]'), vr = host.querySelector('[data-vr]');
    function fillV() { var src = document.getElementById('setVoice'); if (src) { vv.innerHTML = src.innerHTML; vv.value = src.value; } }
    fillV(); setTimeout(fillV, 900);
    var r0 = H.rateCur ? H.rateCur() : 1; vr.value = r0 <= 0.85 ? '0.8' : r0 >= 1.15 ? '1.2' : '1';
    vv.addEventListener('change', function () { if (H.setVoice) H.setVoice(vv.value); var src = document.getElementById('setVoice'); if (src) src.value = vv.value; if (playing) run(at); });
    vr.addEventListener('change', function () { if (H.setRate) H.setRate(Number(vr.value)); var src = document.getElementById('setRate'); if (src) src.value = vr.value; if (playing) run(at); });

    /* ---- actions ---- */
    function tf(el, x, y, sc, ms, inst) { el.style.transitionDuration = inst ? '0s' : (ms || 900) + 'ms'; el.style.transform = 'translate(' + x + 'px,' + y + 'px) scale(' + (sc || 1) + ')'; }
    function face(mood) {
      var m = sv.querySelector('#ff-ruby .rk-mouth'), b = sv.querySelector('#ff-ruby .rk-brow'); st.mood = mood;
      m.setAttribute('d', MOUTH[mood] || MOUTH.happy); b.style.opacity = mood === 'worried' ? 1 : 0;
    }
    function fill(n, inst) {
      for (var i = 1; i <= 10; i++) { var e = $('s' + i); if (i <= n) { var p = slotXY(i - 1); tf(e, p[0], p[1], 0.85, 700, inst); e.style.opacity = 1; } }
    }
    function act(a, inst) {
      var k = a[0];
      if (k === 'bg') { st.bg = a[1]; sv.querySelectorAll('.bgl').forEach(function (g) { g.style.transitionDuration = inst ? '0s' : ''; g.style.opacity = (g.getAttribute('data-bg') === a[1] || g.getAttribute('data-bg') === 'space' && a[1] === 'space') ? 1 : 0; }); }
      else if (k === 'move') { tf($(a[1]), a[2], a[3], a[4], a[5], inst); }
      else if (k === 'face') face(a[2]);
      else if (k === 'show') { var e = $(a[1]); e.style.transitionDuration = inst ? '0s' : ''; e.style.opacity = 1; }
      else if (k === 'hide') { var h = $(a[1]); h.style.transitionDuration = inst ? '0s' : ''; h.style.opacity = 0; }
      else if (k === 'fill') fill(a[1], inst);
      else if (k === 'fly') { var s1 = $(a[1]), p = slotXY(a[2]); s1.style.opacity = 1; tf(s1, p[0], p[1], 0.85, a[3] || 1100, inst); }
      else if (k === 'flame') sv.querySelector('#ff-ruby .rk-flame').style.opacity = a[1] ? 1 : 0;
      else if (k === 'tilt') { var t = sv.querySelector('#ff-ruby .rk-tilt'); t.style.transitionDuration = inst ? '0s' : ''; t.style.transform = 'rotate(' + a[2] + 'deg)'; }
      else if (k === 'smoke') { if (inst) return; var pf = sv.querySelector('#ff-ruby .ff-puffs'); [0, 300, 650].forEach(function (d) { later(function () { var c = document.createElementNS('http://www.w3.org/2000/svg', 'circle'); c.setAttribute('cx', '-6'); c.setAttribute('cy', '80'); c.setAttribute('r', '16'); c.setAttribute('fill', '#c9c3d6'); c.setAttribute('class', 'puff'); pf.appendChild(c); setTimeout(function () { c.remove(); }, 1500); }, d); }); }
      else if (k === 'big') { var b = $('big'); b.textContent = a[1] || ''; b.style.transition = inst ? 'none' : 'opacity .3s'; b.style.opacity = a[1] ? 1 : 0; }
      else if (k === 'place') { var e2 = $(a[1]); tf(e2, a[2], a[3], a[4] || 1, 0, true); e2.style.opacity = a[5] == null ? 1 : a[5]; }
    }
    /* put the whole scene as it is at the start of beat b, with no animation (for back, forward and resume) */
    function setTo(b) {
      sv.querySelectorAll('.mv').forEach(function (e) { e.style.transitionDuration = '0s'; });
      act(['bg', 'space'], true); act(['hide', 'tank'], true); act(['hide', 'stones'], true); act(['big', ''], true); for (var i = 1; i <= 11; i++) act(['hide', 's' + i], true);
      act(['move', 'ruby', -160, 240, 1], true); act(['face', 'ruby', 'happy']); act(['flame', 0]); act(['tilt', 'ruby', 0], true); act(['big', ''], true); bubble('');
      sv.querySelectorAll('.lit').forEach(function (e) { e.classList.remove('lit'); }); sv.querySelectorAll('.flf-num').forEach(function (e) { e.remove(); });
      for (var j = 0; j < b; j++) { (beats[j].act || []).concat(beats[j].then || []).forEach(function (a) { act(a, true); }); }
      void sv.getBoundingClientRect();
    }
    function bubble(t) {
      var g = $('bub'), tx = g.querySelector('.ff-bt'), r = g.querySelector('rect');
      if (!t) { g.style.opacity = 0; return; }
      tx.textContent = t; var w = Math.min(420, tx.getComputedTextLength() + 40); r.setAttribute('width', w);
      var rb = $('ruby').style.transform, m = /translate\(([-\d.]+)px,\s*([-\d.]+)px\)/.exec(rb) || [0, 300, 240];
      var x = Math.max(10, Math.min(790 - w, Number(m[1]) + 40)), y = Math.max(10, Number(m[2]) - 190);
      g.setAttribute('transform', 'translate(' + x + ' ' + y + ')'); g.style.opacity = 1;
    }
    function light(id, n) {
      var e = $(id); if (!e) return; e.classList.add('lit');
      var t = document.createElementNS('http://www.w3.org/2000/svg', 'text'); t.setAttribute('class', 'flf-num'); t.setAttribute('x', 0); t.setAttribute('y', -34); t.setAttribute('font-size', 34); t.setAttribute('text-anchor', 'middle'); t.textContent = n; e.appendChild(t);
    }
    function talk(on) {
      clearInterval(talkT); talkT = null; var m = sv.querySelector('#ff-ruby .rk-mouth'), open = false;
      if (!on) { m.setAttribute('d', MOUTH[st.mood] || MOUTH.happy); return; }
      talkT = setInterval(function () { open = !open; m.setAttribute('d', open ? MOUTH.talk : MOUTH[st.mood] || MOUTH.happy); }, 150);
    }

    /* ---- speaking: the storyteller, or a character in a brighter voice ---- */
    function speak(text, who, onCount, done) {
      var my = token, ps = H.flPlan ? H.flPlan(text) : [{ t: text }], k = 0, base = Math.max(0.6, Math.min(1.25, ((S.app && S.app.store.settings.rate) || 1) * 0.88));
      function step() {
        if (my !== token) return;
        if (k >= ps.length) { done(); return; }
        var p = ps[k]; if (p.count != null && onCount) onCount(p.count, p.n);
        var fin = function () { if (my !== token) return; k++; later(step, H.flPause ? H.flPause(p) : 400); };
        if (!okVoice) { later(fin, p.count != null ? 450 : p.t.split(' ').length * 340 + 250); return; }
        var u = new SpeechSynthesisUtterance(S.speakable ? S.speakable(p.t.replace(/[“”]/g, '')) : p.t), v = H.pickVoice && H.pickVoice();
        if (v) { u.voice = v; u.lang = v.lang; } else u.lang = 'en-GB';
        var ch = who !== 'n' || p.q, bang = /!/.test(p.t), ask = /\?/.test(p.t);
        u.rate = Math.max(0.55, base * (ch ? 1.06 : p.count != null ? 0.95 : 1)); u.pitch = ch ? 1.5 : ask ? 1.15 : bang ? 1.12 : 1.0;
        if (ch) talk(true);
        var ended = false; u.onend = u.onerror = function () { if (ended) return; ended = true; talk(false); fin(); };
        try { speechSynthesis.speak(u); } catch (e) { ended = true; fin(); }
      }
      step();
    }
    function run(b) {
      clearAll(); token++; var my = token; at = b;
      if (b >= beats.length) { stopUI(); at = 0; prog.style.width = '100%'; return; }
      prog.style.width = (b / beats.length * 100) + '%';
      var B = beats[b];
      sv.querySelectorAll('.lit').forEach(function (e) { e.classList.remove('lit'); }); sv.querySelectorAll('.flf-num,.puff').forEach(function (e) { e.remove(); });
      (B.act || []).forEach(function (a) { act(a); });
      later(function () {
        if (my !== token) return;
        if (B.who && B.who !== 'n') bubble(B.bubble || B.s); else if (B.bubble) bubble(B.bubble);
        speak(B.s, B.who || 'n', function (j, n) { var id = (B.count || [])[j]; if (id) light(id, n); }, function () {
          if (my !== token) return; bubble('');
          (B.then || []).forEach(function (a) { act(a); });
          later(function () { if (my === token && playing) run(b + 1); }, B.wait != null ? B.wait : 700);
        });
      }, B.delay != null ? B.delay : 350);
    }
    function startUI() { playing = true; box.classList.add('on'); pp.textContent = '❚❚'; pp.setAttribute('aria-label', 'Pause'); }
    function stopUI() { playing = false; box.classList.remove('on'); pp.textContent = '▶'; pp.setAttribute('aria-label', 'Play'); }
    function pause() { token++; clearAll(); stopUI(); }
    function play() { startUI(); setTo(at); run(at); }
    big.addEventListener('click', play);
    pp.addEventListener('click', function () { if (playing) pause(); else play(); });
    box.querySelector('[data-bk]').addEventListener('click', function () { var was = playing; pause(); at = Math.max(0, at - 1); setTo(at); prog.style.width = (at / beats.length * 100) + '%'; if (was) play(); });
    box.querySelector('[data-fw]').addEventListener('click', function () { var was = playing; pause(); at = Math.min(beats.length - 1, at + 1); setTo(at); prog.style.width = (at / beats.length * 100) + '%'; if (was) play(); });
    box.querySelector('.flf-prog').addEventListener('click', function (e) { var r = this.getBoundingClientRect(), b = Math.floor((e.clientX - r.left) / r.width * beats.length); var was = playing; pause(); at = Math.max(0, Math.min(beats.length - 1, b)); setTo(at); prog.style.width = (at / beats.length * 100) + '%'; if (was) play(); });
    box.querySelector('[data-fs]').addEventListener('click', function () {
      if (document.fullscreenElement) { document.exitFullscreen().catch(function () {}); return; }
      if (box.requestFullscreen) box.requestFullscreen().then(function () { try { screen.orientation.lock('landscape').catch(function () {}); } catch (e) { /* ignore */ } }).catch(function () { box.classList.toggle('full'); });
      else box.classList.toggle('full');
    });
    setTo(0);
    var _run = run; run = function (b) { if (b >= beats.length && meta && meta.n && H.markDone && !(H.isDone && H.isDone(meta.n, 'w' + meta.q))) H.markDone(meta.n, 'w' + meta.q); _run(b); };
    return pause;
  };

  /* ========================= P2 · Ruby and the Star Garden ========================= */
  var GS = [[230, 300], [330, 250], [430, 310], [540, 245], [640, 300]];   /* stars in the garden */
  FL.FILM.ruby = { beats: [
    { s: 'This is the story of Ruby and the Star Garden.', act: [['flame', 1]], delay: 600 },
    { s: 'Once upon a time, high up in the night sky, there lived a little red rocket called Ruby.', act: [['move', 'ruby', 400, 230, 1, 2600]], delay: 900 },
    { s: 'Ruby loved to zoom. Whoosh, round the moon! Whoosh, past the clouds!', act: [['face', 'ruby', 'happy'], ['tilt', 'ruby', 25], ['move', 'ruby', 620, 160, 0.8, 1800]], then: [['tilt', 'ruby', -20], ['move', 'ruby', 240, 210, 1, 1800]] },
    { s: 'Wheee! I love flying!', who: 'ruby', act: [['tilt', 'ruby', 0], ['move', 'ruby', 300, 230, 1, 900], ['face', 'ruby', 'big']] },
    { s: 'But one night, Ruby’s engine went splutter… splutter… pop!', act: [['face', 'ruby', 'o'], ['smoke'], ['flame', 0]], then: [['smoke']] },
    { s: 'Oh no!', act: [['tilt', 'ruby', -10], ['face', 'ruby', 'worried']], wait: 400 },
    { s: 'Ruby looked inside her fuel tank. It was empty.', act: [['move', 'ruby', 230, 240, 1, 900], ['show', 'tank'], ['tilt', 'ruby', 0]] },
    { s: 'Oh dear. Rockets like me run on star power. I need ten stars to fly home.', who: 'ruby', bubble: 'I need ten stars!', act: [['face', 'ruby', 'worried']] },
    { s: 'Down, down, down floated Ruby, until she landed softly in a magical place called the Star Garden.', act: [['hide', 'tank'], ['bg', 'garden'], ['move', 'ruby', 110, 270, 0.85, 2600], ['face', 'ruby', 'o']].concat(GS.map(function (p, i) { return ['place', 's' + (i + 1), p[0], p[1], 1, 0]; })), delay: 300 },
    { s: 'And look! Shiny stars, twinkling in the grass!', act: [['face', 'ruby', 'big']].concat(GS.map(function (p, i) { return ['show', 's' + (i + 1)]; })) },
    { s: 'Let’s count them with Ruby. Point to each star with your finger. One, two, three, four, five.', count: ['s1', 's2', 's3', 's4', 's5'], act: [['face', 'ruby', 'happy']], wait: 900 },
    { s: 'Five stars!', who: 'ruby', bubble: 'Five stars!', act: [['face', 'ruby', 'big']] },
    { s: 'Carefully, Ruby popped them into her tank, one at a time. Plink, plink, plink, plink, plink!', act: [['bg', 'space'], ['move', 'ruby', 230, 240, 1, 1200], ['show', 'tank']], then: [['fly', 's1', 0, 700], ['fly', 's2', 1, 900], ['fly', 's3', 2, 1100], ['fly', 's4', 3, 1300], ['fly', 's5', 4, 1500]], wait: 1600 },
    { s: 'Ruby peeked at her tank. It has ten spaces, in two rows of five. The top row is full, but the bottom row is empty.', act: [['face', 'ruby', 'o']] },
    { s: 'Hmm. How many more stars do I need?', who: 'ruby', bubble: 'How many more?', act: [['face', 'ruby', 'worried']], wait: 3200 },
    { s: 'Five and five make ten. Ruby needs five more stars.', act: [['face', 'ruby', 'happy']] },
    { s: 'Over the pond, Ruby could see more stars glowing. But how could she get across without getting wet?', act: [['hide', 'tank'], ['hide', 's1'], ['hide', 's2'], ['hide', 's3'], ['hide', 's4'], ['hide', 's5'], ['bg', 'pond'], ['move', 'ruby', 120, 250, 0.8, 1600], ['show', 'stones']].concat([6, 7, 8, 9, 10].map(function (i, k) { return ['place', 's' + i, 560 + k * 45, 120 + (k % 2) * 40, 0.8, 0]; })) },
    { s: 'Stepping stones!', who: 'ruby', bubble: 'Stepping stones!', act: [['face', 'ruby', 'big']] },
    { s: 'Ruby hopped. Two, four, six. Every hop jumps on two.', act: [['move', 'ruby', 300, 250, 0.7, 700]], then: [], count: [] , wait: 400 },
    { s: 'What number comes next? Two, four, six…', act: [['face', 'ruby', 'o']], wait: 3200 },
    { s: 'Eight! Two, four, six, eight. We jump on two each time.', act: [['move', 'ruby', 660, 250, 0.7, 1800], ['face', 'ruby', 'big']] },
    { s: 'And there were five more stars, waiting just for her!', act: [['hide', 'stones'], ['bg', 'space'], ['move', 'ruby', 230, 240, 1, 1400], ['show', 'tank'], ['fill', 5]].concat([6, 7, 8, 9, 10].map(function (i) { return ['show', 's' + i]; })) },
    { s: 'Into the tank they went. Let’s keep counting. Six, seven, eight, nine, ten!', count: ['s6', 's7', 's8', 's9', 's10'], act: [['fly', 's6', 5, 900], ['fly', 's7', 6, 1100], ['fly', 's8', 7, 1300], ['fly', 's9', 8, 1500], ['fly', 's10', 9, 1700]], delay: 1200 },
    { s: 'Ten stars! Ten ones make one whole ten!', who: 'ruby', bubble: 'Ten stars!', act: [['face', 'ruby', 'big'], ['flame', 1]] },
    { s: 'But then… wibble, wobble… whoops! One little star rolled right out of the tank!', act: [['tilt', 'ruby', 12], ['face', 'ruby', 'o'], ['move', 's10', 760, 420, 0.8, 1600]] },
    { s: 'Ten stars, take away one. Now there are only nine. One less than ten is nine.', act: [['tilt', 'ruby', 0], ['face', 'ruby', 'worried']] },
    { s: 'Ruby stretched, and stretched, as far as she could… and caught it!', act: [['move', 'ruby', 520, 300, 1, 1600]], then: [['fly', 's10', 9, 900], ['move', 'ruby', 230, 240, 1, 1200]] },
    { s: 'Got you, little star!', who: 'ruby', bubble: 'Got you!', act: [['face', 'ruby', 'big']] },
    { s: 'Nine stars, and one more. One more than nine is ten. The tank was full again.', act: [['face', 'ruby', 'happy']] },
    { s: 'Ruby’s engine began to rumble. Rumble, rumble, rumble! Let’s count down together, nice and loud.', act: [['hide', 'tank'], ['move', 'ruby', 400, 250, 1.1, 1200], ['flame', 1]].concat([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(function (i) { return ['hide', 's' + i]; })) },
    { s: 'Three…', act: [['big', '3']], wait: 300 },
    { s: 'two…', act: [['big', '2']], wait: 300 },
    { s: 'one…', act: [['big', '1']], wait: 300 },
    { s: 'Blast off!', act: [['big', ''], ['face', 'ruby', 'big'], ['move', 'ruby', 400, -260, 1, 2600]], wait: 400 },
    { s: 'Thank you for counting with me! Goodnight!', who: 'ruby', bubble: 'Goodnight!', act: [['move', 'ruby', 400, 200, 0.6, 1600]] },
    { s: 'And that is the end of our story.', act: [['move', 'ruby', 400, -260, 0.6, 2400], ['big', 'The end']], wait: 1500 }
  ] };
})();
