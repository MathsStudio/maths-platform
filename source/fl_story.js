/* fl_story.js: First level Story time (an animated, read-aloud picture book) and Let's learn
   (Watch me, Let's do it together, Your turn). Pictures are drawn and animated in the page, so
   they stay sharp on phones, load fast, and the child can tap, go back and hear a page again. */
(function () {
  'use strict';
  var FL = window.FL, S = window.Studio; if (!FL || !S) return;
  var INK = '#2b2340', pick = FL.pick, svg = FL.svg, tx = FL.tx;

  /* ---------- styles ---------- */
  var css = document.createElement('style');
  css.textContent =
    '.flb{max-width:760px;margin:0 auto}' +
    '.flb-top{display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap;margin:0 0 10px}' +
    '.flb-dots{display:flex;gap:6px;flex-wrap:wrap}.flb-dots i{width:12px;height:12px;border-radius:50%;background:#d9d3ea;display:block}.flb-dots i.on{background:#7a1fc2}.flb-dots i.dn{background:#b48be0}' +
    '.flb-stage{border-radius:22px;overflow:hidden;border:3px solid ' + INK + ';background:#fff;line-height:0}' +
    '.flb-stage svg{width:100%;height:auto;display:block}' +
    '.flb-text{font-size:1.45rem;line-height:1.55;font-weight:700;margin:14px 2px;color:var(--fg,' + INK + ')}' +
    '.flb-text .w{border-radius:6px;transition:background .15s}.flb-text .w.on{background:#ffe066;color:' + INK + '}' +
    '.flb-row{display:flex;gap:10px;flex-wrap:wrap;align-items:center;justify-content:space-between;margin-top:8px}' +
    '.flb-btn{min-height:56px;min-width:104px;font-size:1.15rem;border-radius:16px}' +
    '.flb-read{background:#ffd166!important;color:' + INK + '!important;border-color:' + INK + '!important}' +
    '.flb-opts{display:flex;gap:10px;flex-wrap:nowrap;justify-content:center;margin:12px 0}' +
    '.flb-opts button{flex:1 1 0;min-width:0;max-width:150px;min-height:72px;padding:6px 4px;font-size:1.6rem;font-weight:800;border-radius:18px;border:3px solid ' + INK + ';background:#fff;color:' + INK + ';cursor:pointer}' +
    '.flb-show .o{flex:1 1 0;min-width:0;max-width:150px;display:flex;align-items:center;justify-content:center;min-height:56px;padding:6px 4px;font-size:1.3rem;font-weight:800;border-radius:16px;border:3px solid ' + INK + ';background:#fff;color:' + INK + ';text-align:center;line-height:1.15}.flb-show .o.ok{background:#8fd67d}' +
    '.flb-q{font-weight:800;font-size:1.2rem;line-height:1.35;text-align:center;margin:8px 0 0;max-width:560px}.flb-w{width:100%;max-width:560px}.flb-w .flp-pic>svg{min-width:min(260px,100%)!important;flex:1 1 260px!important}.flb-w .flp-ch svg{width:76px!important}.flb-w .flb-tip{font-size:1rem;line-height:1.35;margin:8px 0 0;text-align:left}.flb-w+.flb-opts,.gp-stage .flb-opts{margin:8px 0 0}' +
    '.flb-opts.long button{font-size:1.15rem;min-height:64px}.flb-opts.col{flex-direction:column;align-items:center}.flb-opts.col button{font-size:1.15rem;min-height:56px;width:100%;max-width:420px;flex:0 0 auto}' +
    '.flb-opts button.ok{background:#8fd67d}.flb-opts button.no{background:#ffd0d0;opacity:.75}' +
    '.flb-fb{min-height:2.2em;text-align:center;font-weight:800;font-size:1.25rem;margin:4px 0}' +
    '.flb-fb.ok{color:#1f7a3a}.flb-fb.no{color:#b3261e}' +
    '.flb-mode{display:inline-flex;align-items:center;gap:8px;font-weight:800;font-size:1.05rem;padding:8px 14px;border-radius:999px;background:#efe6ff;color:#4b1c86}' +
    '.flb-mode.t{background:#e3f4ff;color:#14507a}.flb-mode.y{background:#fff1c9;color:#7a4b00}' +
    '.flb-tip{background:#fff8e1;border:2px dashed #e0a800;border-radius:16px;padding:10px 14px;font-weight:700;font-size:1.1rem;margin:8px 0;color:' + INK + '}' +
    '.flb-say{display:flex;align-items:center;gap:12px;margin:10px 0}.flb-say .bub{flex:1;background:#fff;border:3px solid ' + INK + ';border-radius:20px;padding:12px 16px;font-weight:800;font-size:1.3rem;line-height:1.45;color:' + INK + '}' +
    '.flb-pic{text-align:center;margin:8px 0}.flb-pic svg{max-width:100%}' +
    '.flb [data-tap]{cursor:pointer}' +
    '.flb-end{text-align:center;padding:10px}.flb-end .big{font-size:2rem;font-weight:800;margin:8px 0}' +
    /* animations (transform-box keeps each shape turning or growing about its own centre) */
    '.flb .a-bob,.flb .a-pop,.flb .a-tw,.flb .a-drop,.flb .a-fly,.flb .a-roll,.flb .a-up,.flb .a-wig,.flb .a-in{transform-box:fill-box;transform-origin:center}' +
    '.flb .a-bob{animation:flBob 2.6s ease-in-out infinite}' +
    '.flb .a-pop{animation:flPop .55s cubic-bezier(.3,1.6,.6,1) both}' +
    '.flb .a-tw{animation:flTw 1.8s ease-in-out infinite}' +
    '.flb .a-drop{animation:flDrop .8s cubic-bezier(.3,1.4,.6,1) both}' +
    '.flb .a-fly{animation:flFly 1.1s ease-out both}' +
    '.flb .a-roll{animation:flRoll 1.6s ease-in both}' +
    '.flb .a-up{animation:flUp 2.6s ease-in both}' +
    '.flb .a-wig{animation:flWig 1.2s ease-in-out infinite}' +
    '.flb .a-in{animation:flIn .7s ease-out both}' +
    '.flp{position:relative;display:flex;align-items:center;justify-content:center;gap:10px;flex-wrap:wrap;padding:14px 12px;min-height:220px;line-height:1.3}' +
    '.flp-ch{flex:0 0 auto;animation:flBob 2.6s ease-in-out infinite}.flp-ch svg{width:110px;height:auto}' +
    '.flp-pic>svg{flex:1 1 150px}.flp-pic{flex:1 1 200px;min-width:0;display:flex;flex-wrap:wrap;gap:8px;justify-content:center;align-items:center;animation:flPop .6s cubic-bezier(.3,1.6,.6,1) both;animation-delay:.25s}.flp-pic>*{max-width:100%}' +
    '.flp-pic .card,.flp-pic .sv-card{color:#2b2340}' +
    '.flp-space{background:linear-gradient(#1b1b4b,#3d2f7a);color:#fff}.flp-day{background:linear-gradient(#bfe6ff 70%,#7cc96b 70%)}.flp-pond{background:linear-gradient(#bfe6ff 55%,#6cc0e8 55%)}' +
    '.flp-room{background:linear-gradient(#fff3d6 78%,#e7c49a 78%)}.flp-shop{background:repeating-linear-gradient(90deg,#ffe2ec 0 30px,#fff 30px 60px)}.flp-farm{background:linear-gradient(#cfeaff 60%,#9ad27a 60%)}' +
    '.flp-sea{background:linear-gradient(#bfe6ff 50%,#4aa8ff 50%)}.flp-kitchen{background:linear-gradient(#fff8e1 75%,#d9b38c 75%)}.flp-night{background:linear-gradient(#24305e,#4b3f8f);color:#fff}' +
    '.flp-say{position:absolute;left:10px;top:10px;background:#fff;border:3px solid #2b2340;border-radius:16px;padding:4px 10px;font-weight:800;font-size:1rem;color:#2b2340}' +
    '@keyframes flBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}' +
    '@keyframes flPop{0%{transform:scale(0)}100%{transform:scale(1)}}' +
    '@keyframes flTw{0%,100%{transform:scale(1);opacity:1}50%{transform:scale(.8);opacity:.7}}' +
    '@keyframes flDrop{0%{transform:translateY(-140px);opacity:0}100%{transform:translateY(0);opacity:1}}' +
    '@keyframes flFly{0%{transform:translate(-160px,-60px) scale(.4);opacity:0}100%{transform:translate(0,0) scale(1);opacity:1}}' +
    '@keyframes flRoll{0%{transform:translate(0,0) rotate(0)}100%{transform:translate(170px,40px) rotate(540deg);opacity:.2}}' +
    '@keyframes flUp{0%{transform:translateY(0)}20%{transform:translateY(4px)}100%{transform:translateY(-320px)}}' +
    '@keyframes flWig{0%,100%{transform:rotate(0)}25%{transform:rotate(-6deg)}75%{transform:rotate(6deg)}}' +
    '@keyframes flIn{0%{transform:translateX(-60px);opacity:0}100%{transform:translateX(0);opacity:1}}' +
    '@media (prefers-reduced-motion:reduce){.flb [class*="a-"]{animation:none!important}}';
  document.head.appendChild(css);

  /* ---------- scene drawing (400 x 250) ---------- */
  var BG = {
    space: function () { var s = '<defs><linearGradient id="flSp" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1b1b4b"/><stop offset="1" stop-color="#3d2f7a"/></linearGradient></defs><rect width="400" height="250" fill="url(#flSp)"/>';
      [[30, 30], [90, 70], [150, 22], [230, 50], [300, 28], [370, 80], [60, 140], [340, 160], [200, 110], [120, 200], [280, 210]].forEach(function (p, i) { s += '<circle class="a-tw" style="animation-delay:' + (i * .23).toFixed(2) + 's" cx="' + p[0] + '" cy="' + p[1] + '" r="2" fill="#fff"/>'; });
      return s + '<circle cx="345" cy="45" r="22" fill="#fff4c2"/><circle cx="337" cy="40" r="4" fill="#eadb9a"/><circle cx="352" cy="52" r="3" fill="#eadb9a"/>'; },
    garden: function () { return '<rect width="400" height="250" fill="#2e2a6b"/><path d="M0 190q100-40 200-10t200-20V250H0z" fill="#3c8f5a"/><path d="M0 215q120-25 240 0t160-8V250H0z" fill="#4fae6c"/>'; },
    day: function () { return '<rect width="400" height="250" fill="#bfe6ff"/><circle cx="350" cy="45" r="26" fill="#ffd84d"/><path d="M0 195q100-30 200-5t200-15V250H0z" fill="#7cc96b"/>'; },
    pond: function () { return '<rect width="400" height="250" fill="#bfe6ff"/><circle cx="60" cy="40" r="22" fill="#ffd84d"/><path d="M0 150h400v100H0z" fill="#6cc0e8"/><path d="M0 150q100-14 200 0t200 0" fill="#9bd7f3"/>'; },
    room: function () { return '<rect width="400" height="250" fill="#fff3d6"/><rect y="190" width="400" height="60" fill="#e7c49a"/><rect x="290" y="40" width="80" height="70" fill="#bfe6ff" stroke="' + INK + '" stroke-width="3"/><path d="M330 40v70M290 75h80" stroke="' + INK + '" stroke-width="2"/>'; }
  };
  function scene(bg, inner, alt) { return svg(400, 250, alt || 'A story picture', (BG[bg] || BG.day)() + inner, 760); }
  /* a character at (x, y), size in px, with an animation class */
  function who(k, x, y, size, anim, delay) { var sc = (size || 100) / 100; return '<g transform="translate(' + x + ' ' + y + ') scale(' + sc + ')"><g class="' + (anim ? 'a-' + anim : '') + '" style="animation-delay:' + (delay || 0) + 's">' + FL.CH[k] + '</g></g>'; }
  /* a small thing (star, apple...) at (x, y), animated, with optional tap target */
  function bit(kind, x, y, anim, delay, tapIx, scale) {
    var t = FL.THING[kind](0, 0), sc = scale || 1;
    return '<g transform="translate(' + x + ' ' + y + ') scale(' + sc + ')"' + (tapIx != null ? ' data-tap="' + tapIx + '" role="button" tabindex="0" aria-label="' + kind + ' ' + (tapIx + 1) + '"' : '') + '><g class="' + (anim ? 'a-' + anim : '') + '" style="animation-delay:' + (delay || 0) + 's">' + (tapIx != null ? '<circle r="24" fill="transparent"/>' : '') + t + '</g></g>';
  }
  /* a fuel tank shaped like a ten-frame, n stars inside (the newest ones pop in) */
  function tank(x, y, n, from, rollLast) {
    var s = '<g transform="translate(' + x + ' ' + y + ')"><rect x="-6" y="-6" width="232" height="104" rx="14" fill="#fff" stroke="' + INK + '" stroke-width="3"/>';
    for (var i = 0; i < 10; i++) { var c = i % 5, r = Math.floor(i / 5), cx = 22 + c * 44, cy = 22 + r * 46; s += '<rect x="' + (cx - 20) + '" y="' + (cy - 20) + '" width="40" height="40" rx="6" fill="#f3efff" stroke="#b9acd8" stroke-width="2"/>';
      if (i < n) s += '<g transform="translate(' + cx + ' ' + cy + ')"><g class="' + (rollLast && i === n - 1 ? 'a-roll' : i >= (from || 0) ? 'a-pop' : '') + '" style="animation-delay:' + (i >= (from || 0) ? ((i - (from || 0)) * .35 + .3).toFixed(2) : 0) + 's">' + FL.THING.star(0, 0) + '</g></g>'; }
    return s + '</g>';
  }
  function label(x, y, t, size, fill) { return tx(x, y, t, size || 22, fill || '#fff'); }
  function stones(list, y, planet) {   /* stepping stones (or planets) with numbers */
    var s = '', gap = 400 / (list.length + 1), r = Math.min(34, gap / 2 - 4), PC = ['#ffb3c7', '#9fd7ff', '#b8f0a8', '#ffd9a0', '#d7c2ff', '#a8eee4'];
    list.forEach(function (v, i) { var x = gap * (i + 1), f = v === '?' ? '#ffd166' : planet ? PC[i % PC.length] : '#c9c3d6';
      s += '<g class="a-pop" style="animation-delay:' + (i * .4 + .2).toFixed(2) + 's">' + (planet ? '<circle cx="' + x + '" cy="' + (y - 14) + '" r="' + r + '" fill="' + f + '" stroke="' + INK + '" stroke-width="3"/>' + tx(x, y - 5, v, 24, INK) : '<ellipse cx="' + x + '" cy="' + y + '" rx="' + r + '" ry="18" fill="' + f + '" stroke="' + INK + '" stroke-width="3"/>' + tx(x, y + 8, v, 24, INK)) + '</g>'; });
    return s;
  }
  /* star tens: full fuel tanks (ten stars each) and loose stars, for tens and ones */
  function starTens(t, o) {
    var s = '';
    for (var k = 0; k < t; k++) s += '<g transform="translate(14 ' + (14 + k * 74) + ') scale(.62)">' + tank(0, 0, 10) + '</g>';
    for (var j = 0; j < o; j++) s += FL.bit('star', 200 + (j % 5) * 40, 50 + Math.floor(j / 5) * 50, 'pop', .3 + j * .15, null, 1.25);
    return scene('space', s, t + ' full tanks of ten and ' + o + ' loose stars');
  }
  FL.starTens = starTens;
  /* a story panel: coloured background, a bobbing character and any picture (coins, clocks, shapes, charts) */
  FL.panel = function (bg, k, pic, bubble) { return '<div class="flp flp-' + (bg || 'day') + '">' + (bubble ? '<span class="flp-say">' + bubble + '</span>' : '') + (k ? '<div class="flp-ch">' + FL.char(k, 110) + '</div>' : '') + '<div class="flp-pic">' + (pic || '') + '</div></div>'; };
  /* swap a topic's old Watch lesson for a story and story-based lessons (First level) */
  /* First level lessons use the same Watch player as P5 to P7: the story is one Watch lesson and each
     story-based lesson is another, with Watch me, Let's do it together, Your turn and a recap. */
  var NUMW = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
  function strip(h) { return String(h).replace(/<[^>]+>/g, ''); }
  function pic(p, ch) { var h = typeof p === 'function' ? p() : (p || '');
    if (ch && h.indexOf('class="flp ') >= 0 && h.indexOf('flp-ch') < 0) h = h.replace('<div class="flp-pic">', '<div class="flp-ch">' + FL.char(ch, 110) + '</div><div class="flp-pic">');
    return h ? '<div class="flb flb-w"><div class="flb-stage">' + h + '</div></div>' : ''; }
  function chips(options, answer, show) { return '<div class="flb-opts flb-show">' + options.map(function (o) { return '<span class="o' + (show && String(o) === String(answer) ? ' ok' : '') + '">' + o + '</span>'; }).join('') + '</div>'; }
  function askSteps(q, p, options, answer, explain, tip) {
    var qh = '<div class="flb-q">' + q + '</div>';
    return [L.st(strip(q) + (tip ? ' Here is a tip: ' + strip(tip) : '') + ' Pause, think, then listen.', p + qh + (tip ? '<div class="flb-tip">💡 ' + tip + '</div>' : '') + chips(options, answer, false)),
      L.st('The answer is ' + strip(answer) + '. ' + strip(explain || ''), p + qh + chips(options, answer, true))];
  }
  var L = null;
  /* in the Watch player each new picture replaces the one before it, so the picture stays big */
  function sw(steps) { return steps.map(function (st, i) { if (i > 0 && st.html) st.html = L.SW + st.html; return st; }); }
  FL.toWatch = function (n, story, learn) {
    L = BT.L; if (!L) return;
    var t = S.topics[n]; if (!t) return;
    for (var k = t.steps.length - 1; k >= 0; k--) if (t.steps[k].type === 'slides' || t.steps[k].fgroup) t.steps.splice(k, 1);
    var eps = [];
    if (story) {
      var sc = [];
      story.pages.forEach(function (pg, i) {
        var p = pic(pg.pic), say = pg.text;
        if (pg.tap) { var c = []; for (var j = 1; j <= pg.tap; j++) c.push(NUMW[j]); say = say.replace(/ Tap each [a-z]+!?/i, '') + ' Count with me: ' + c.join(', ') + '.'; }
        sc.push(L.SC(story.title, 'Page ' + (i + 1), [L.st(say, p)]));
        if (pg.ask) sc.push(L.SC('Your turn', 'Help with the story', sw(askSteps(pg.ask.q, p, pg.ask.options, pg.ask.answer, pg.ask.explain))));
      });
      sc.push(L.SC('The end', story.title, [L.st(story.endText || 'The end.', pic(story.endPic))]));
      eps.push(L.ep('📖 ' + story.title, 'a picture-book story that uses the maths in this topic.', sc));
    }
    (learn || []).forEach(function (l) {
      var sc = [], watch = [], tog = [], turn = [], tips = [];
      l.screens.forEach(function (x) {
        var p = pic(x.pic, l.char);
        if (x.mode === 'watch') watch.push(L.st(x.say, p));
        else { if (x.tip && tips.length < 4) tips.push(x.tip); (x.mode === 'together' ? tog : turn).push.apply(x.mode === 'together' ? tog : turn, askSteps(x.say, p, x.options, x.answer, x.explain, x.mode === 'together' ? x.tip : '')); }
      });
      if (watch.length) sc.push(L.SC('Watch me', l.title, sw(watch)));
      if (tog.length) sc.push(L.SC('Let’s do it together', 'Try it with me', sw(tog)));
      if (turn.length) sc.push(L.SC('Your turn', 'Pause, think, then listen', sw(turn)));
      if (tips.length) sc.push(L.rec(l.title, 'Let’s remember the tips from this lesson.', tips.map(strip)));
      eps.push(L.ep(l.title, strip(l.title).replace(/\?$/, '').toLowerCase() + '.', sc));
    });
    BT.L.use(n, eps);
  };
  FL.addStory = function (n, o) { FL.toWatch(n, o.story, o.learn); };
  FL.scene = scene; FL.who = who; FL.bit = bit; FL.tank = tank; FL.stones = stones; FL.label = label;

  /* ---------- reading aloud, word by word ---------- */
  var reading = false;   /* once a child taps Read to me, the next pages are read too */
  function voice() { try { var vs = speechSynthesis.getVoices().filter(function (v) { return /^en/i.test(v.lang); }), name = S.app && S.app.store.settings.voice; return vs.filter(function (v) { return v.name === name; })[0] || vs.filter(function (v) { return /en[-_]GB/i.test(v.lang); })[0] || vs[0] || null; } catch (e) { return null; } }
  function stop() { try { speechSynthesis.cancel(); } catch (e) {} }
  function speak(text, box, done) {
    stop(); if (!('speechSynthesis' in window)) { if (done) done(); return; }
    var spans = box ? [].slice.call(box.querySelectorAll('.w')) : [], starts = [], at = 0;
    spans.forEach(function (sp) { starts.push(at); at += sp.textContent.length + 1; });
    var plain = spans.length ? spans.map(function (sp) { return sp.textContent; }).join(' ') : text;
    var u = new SpeechSynthesisUtterance(S.speakable ? S.speakable(plain) : plain), v = voice();
    if (v) { u.voice = v; u.lang = v.lang; }
    u.rate = Math.max(.6, Math.min(1, ((S.app && S.app.store.settings.rate) || 1) * .9));
    if (spans.length && S.speakable && S.speakable(plain) === plain) u.onboundary = function (e) { if (e.name && e.name !== 'word') return; var k = 0; while (k + 1 < starts.length && starts[k + 1] <= e.charIndex) k++; spans.forEach(function (sp, j) { sp.classList.toggle('on', j === k); }); };
    u.onend = function () { spans.forEach(function (sp) { sp.classList.remove('on'); }); if (done) done(); };
    try { speechSynthesis.speak(u); } catch (e) { if (done) done(); }
  }
  function words(t) { return t.split(/\s+/).map(function (w) { return '<span class="w">' + w + '</span>'; }).join(' '); }
  function cheer() { return pick(['Brilliant!', 'Super!', 'Well done!', 'You did it!', 'Amazing!', 'Great thinking!']); }
  function nudge() { return pick(['Nearly! Have another go.', 'Good try! Look again.', 'Not quite. Try again.']); }
  function opts(list) { var L = Math.max.apply(null, list.map(function (o) { return String(o).length; })); return '<div class="flb-opts' + (L > 12 ? ' col' : L > 4 ? ' long' : '') + '">' + list.map(function (o) { return '<button type="button" data-o="' + String(o).replace(/"/g, '&quot;') + '">' + o + '</button>'; }).join('') + '</div>'; }
  function wireOpts(root, answer, onRight, onWrong) {
    root.querySelectorAll('[data-o]').forEach(function (b) { b.addEventListener('click', function () {
      if (b.classList.contains('ok')) return;
      if (String(b.getAttribute('data-o')) === String(answer)) { b.classList.add('ok'); root.querySelectorAll('[data-o]').forEach(function (x) { x.disabled = true; }); onRight(); }
      else { b.classList.add('no'); b.disabled = true; onWrong(); }
    }); });
  }

  /* ---------- Story time ---------- */
  /* story = { title, pages: [ { pic, text, tap: n, ask: { q, options, answer, explain } } ] } */
  FL.storyMount = function (story) {
    return function (host, ctx) {
      var i = 0, tapped = {}, answered = {};
      function draw() {
        var pg = story.pages[i], last = i === story.pages.length - 1, needTap = pg.tap && Object.keys(tapped).length < pg.tap, needAns = pg.ask && !answered[i];
        host.innerHTML = '<div class="flb"><div class="flb-top"><div class="flb-dots" aria-label="Page ' + (i + 1) + ' of ' + story.pages.length + '">' + story.pages.map(function (_, k) { return '<i class="' + (k === i ? 'on' : k < i ? 'dn' : '') + '"></i>'; }).join('') + '</div><button class="btn flb-read" type="button" data-read>🔊 Read to me</button></div>' +
          '<div class="flb-stage">' + (typeof pg.pic === 'function' ? pg.pic() : pg.pic) + '</div>' +
          '<p class="flb-text" data-words>' + words(pg.text) + '</p>' +
          (pg.tap ? '<p class="flb-fb" data-tapmsg aria-live="polite">' + (needTap ? 'Tap each one to count it!' : 'You counted ' + pg.tap + '!') + '</p>' : '') +
          (pg.ask ? '<div class="flb-tip" style="background:#efe6ff;border-color:#7a1fc2">' + pg.ask.q + '</div>' + opts(pg.ask.options) + '<p class="flb-fb" data-fb aria-live="polite">' + (answered[i] ? '<span class="ok">' + pg.ask.explain + '</span>' : '') + '</p>' : '') +
          '<div class="flb-row"><button class="btn ghost flb-btn" type="button" data-back' + (i === 0 ? ' disabled' : '') + '>◀ Back</button>' +
          '<button class="btn flb-btn" type="button" data-next' + (needTap || needAns ? ' disabled' : '') + '>' + (last ? 'The end ⭐' : 'Next ▶') + '</button></div></div>';
        var box = host.querySelector('[data-words]');
        host.querySelector('[data-read]').addEventListener('click', function () { reading = true; speak(pg.text + (pg.ask ? '. ' + pg.ask.q.replace(/<[^>]+>/g, '') : ''), box); });
        host.querySelector('[data-back]').addEventListener('click', function () { stop(); i--; tapped = {}; draw(); });
        host.querySelector('[data-next]').addEventListener('click', function () { stop(); if (last) return end(); i++; tapped = {}; draw(); });
        host.querySelectorAll('[data-tap]').forEach(function (g) {
          function hit() { var k = g.getAttribute('data-tap'); if (tapped[k]) return; tapped[k] = 1; var n = Object.keys(tapped).length;
            var bb = g.getBBox ? g.getBBox() : null, tr = g.getAttribute('transform') || '', m = /translate\(([-\d.]+) ([-\d.]+)\)/.exec(tr);
            if (m) g.parentNode.insertAdjacentHTML('beforeend', '<g class="a-pop" style="transform-box:fill-box;transform-origin:center"><circle cx="' + m[1] + '" cy="' + (m[2] - 34) + '" r="15" fill="#fff" stroke="' + INK + '" stroke-width="2.5"/>' + tx(+m[1], +m[2] - 27, n, 18, INK) + '</g>');
            g.style.opacity = '.55'; speak(String(n));
            if (n >= pg.tap) { var msg = host.querySelector('[data-tapmsg]'); if (msg) msg.textContent = 'You counted ' + pg.tap + '! ' + cheer(); host.querySelector('[data-next]').disabled = false; } }
          g.addEventListener('click', hit); g.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); hit(); } });
        });
        if (pg.ask) wireOpts(host, pg.ask.answer, function () { answered[i] = 1; var fb = host.querySelector('[data-fb]'); fb.className = 'flb-fb ok'; fb.textContent = cheer() + ' ' + pg.ask.explain; speak(cheer() + ' ' + pg.ask.explain); host.querySelector('[data-next]').disabled = false; },
          function () { var fb = host.querySelector('[data-fb]'); fb.className = 'flb-fb no'; fb.textContent = nudge(); speak(nudge()); });
        if (reading || (S.app && S.app.store.settings.auto)) setTimeout(function () { if (host.isConnected) speak(pg.text + (pg.ask && !answered[i] ? '. ' + pg.ask.q.replace(/<[^>]+>/g, '') : ''), box); }, 450);
      }
      function end() {
        host.innerHTML = '<div class="flb flb-end"><div class="flb-stage">' + (story.endPic || '') + '</div><div class="big">⭐ The end ⭐</div><p class="flb-text" style="text-align:center">' + (story.endText || 'Thank you for helping!') + '</p><div class="flb-row" style="justify-content:center"><button class="btn ghost flb-btn" type="button" data-again>Read it again</button></div></div>';
        host.querySelector('[data-again]').addEventListener('click', function () { i = 0; answered = {}; tapped = {}; draw(); });
        if (reading || (S.app && S.app.store.settings.auto)) speak('The end. ' + (story.endText || ''));
        ctx.complete();
      }
      draw();
    };
  };

  /* ---------- Let's learn: Watch me, Let's do it together, Your turn ---------- */
  /* lesson = { title, char, screens: [ { mode: 'watch'|'together'|'turn', say, pic, q, options, answer, tip, explain } ] } */
  var MODE = { watch: ['👀', 'Watch me', ''], together: ['🤝', 'Let’s do it together', ' t'], turn: ['⭐', 'Your turn', ' y'] };
  FL.learnMount = function (lesson) {
    return function (host, ctx) {
      var i = 0, stars = 0;
      function draw() {
        var sc = lesson.screens[i], m = MODE[sc.mode] || MODE.watch, ask = sc.mode !== 'watch', tries = 0, last = i === lesson.screens.length - 1;
        host.innerHTML = '<div class="flb"><div class="flb-top"><span class="flb-mode' + m[2] + '">' + m[0] + ' ' + m[1] + '</span><div class="flb-dots" aria-label="Screen ' + (i + 1) + ' of ' + lesson.screens.length + '">' + lesson.screens.map(function (_, k) { return '<i class="' + (k === i ? 'on' : k < i ? 'dn' : '') + '"></i>'; }).join('') + '</div></div>' +
          '<div class="flb-say">' + FL.char(lesson.char || 'rocket', 84) + '<div class="bub" data-words>' + words(sc.say) + '</div></div>' +
          (sc.pic ? '<div class="flb-pic">' + (typeof sc.pic === 'function' ? sc.pic() : sc.pic) + '</div>' : '') +
          (sc.mode === 'together' && sc.tip ? '<div class="flb-tip">💡 ' + sc.tip + '</div>' : '') +
          (ask ? opts(sc.options) + '<p class="flb-fb" data-fb aria-live="polite"></p>' + (sc.mode === 'turn' && sc.tip ? '<div class="flb-tip" data-tip hidden>💡 ' + sc.tip + '</div>' : '') : '') +
          '<div class="flb-row"><button class="btn ghost flb-btn" type="button" data-back' + (i === 0 ? ' disabled' : '') + '>◀ Back</button><button class="btn flb-read" type="button" data-read aria-label="Hear it" style="min-width:56px;min-height:56px;font-size:1.4rem;padding:0 12px">🔊</button>' +
          '<button class="btn flb-btn" type="button" data-next' + (ask ? ' disabled' : '') + '>' + (last ? 'Finish ⭐' : 'Next ▶') + '</button></div></div>';
        var box = host.querySelector('[data-words]');
        host.querySelector('[data-read]').addEventListener('click', function () { reading = true; speak(sc.say, box); });
        host.querySelector('[data-back]').addEventListener('click', function () { stop(); i--; draw(); });
        host.querySelector('[data-next]').addEventListener('click', function () { stop(); if (last) return end(); i++; draw(); });
        if (ask) wireOpts(host, sc.answer, function () { if (!tries) stars++; var fb = host.querySelector('[data-fb]'); fb.className = 'flb-fb ok'; fb.textContent = cheer() + (sc.explain ? ' ' + sc.explain : ''); speak(fb.textContent); host.querySelector('[data-next]').disabled = false; },
          function () { tries++; var fb = host.querySelector('[data-fb]'), tp = host.querySelector('[data-tip]'); fb.className = 'flb-fb no'; fb.textContent = nudge(); if (tp) tp.hidden = false; speak(nudge() + (tp ? ' ' + sc.tip : '')); });
        if (reading || (S.app && S.app.store.settings.auto)) setTimeout(function () { if (host.isConnected) speak(sc.say, box); }, 400);
      }
      function end() {
        var asks = lesson.screens.filter(function (x) { return x.mode !== 'watch'; }).length;
        host.innerHTML = '<div class="flb flb-end">' + FL.char(lesson.char || 'rocket', 130) + '<div class="big">' + '⭐'.repeat(Math.max(1, Math.round(3 * stars / Math.max(1, asks)))) + '</div><p class="flb-text" style="text-align:center">You finished <b>' + lesson.title + '</b>! You got ' + stars + ' of ' + asks + ' right first time.</p>' +
          '<div class="flb-row" style="justify-content:center"><button class="btn ghost flb-btn" type="button" data-again>Do it again</button></div></div>';
        host.querySelector('[data-again]').addEventListener('click', function () { i = 0; stars = 0; draw(); });
        if (reading) speak('Well done! You finished the lesson.');
        ctx.complete();
      }
      draw();
    };
  };
  FL.speak = speak; FL.stopSpeak = stop;
})();
