/* fl_mega.js: one definition per Let's learn lesson gives
   - a Learn-it lesson of about 20 slides (the first 11 are the original lesson; this adds a second way to see the idea,
     two more worked examples, a second common mistake, four more checks and a real-life check)
   - the matching Watch lesson (about 14 screens: Watch me, Let's do it together, Your turn)
   - an activity (new lessons) and, for P4, practice questions made by the lesson's own question maker.
   FL.MEGA(n, spec). spec: { id, title (existing lesson) | li (a new lesson, FL.LI array), ch, bg, way:[say,pic], ex:[[q,steps,final,pic]x2],
   mist:[say,pic], real:[text,ans,wrong,explain,pic], qs:[[text,ans,wrong[],explain,pic,tip]x8], gen:function(level), lab:[label,lead], watch:[[say,pic]] } */
(function () {
  'use strict';
  var FL = window.FL, BT = window.BT, S = window.Studio; if (!FL || !FL._w || !FL.growWatch || !BT || !S) return;
  var W = FL._w, shuffle = FL.shuffle, pick = FL.pick, MC = FL.MC, P = FL.panel;
  function strip(h) { return String(h).replace(/<[^>]+>/g, ''); }
  function opts(a, wrong) { var o = [String(a)]; (wrong || []).forEach(function (w) { w = String(w); if (o.indexOf(w) < 0) o.push(w); }); return shuffle(o).slice(0, 4).indexOf(String(a)) < 0 ? shuffle(o.slice(0, 4)) : shuffle(o).slice(0, 4); }
  function qo(r) { var o = [String(r[1])]; (r[2] || []).forEach(function (w) { w = String(w); if (o.indexOf(w) < 0 && o.length < 4) o.push(w); });
    return { q: r[0], pic: r[4] || '', options: shuffle(o), answer: String(r[1]), explain: r[3] || '', tip: r[5] || 'Think about what you learned in this lesson.' }; }
  /* a question maker from the static rows: a new random choice order each time */
  function fromQs(sp) { return function () { var r = pick(sp.qs); return MC(sp.title || (sp.li && sp.li[0]) || 'Practice', r[0], r[1], r[2], [r[5] || 'Think about what you learned in this lesson.'], r[3] || '', r[4] || ''); }; }
  var BG = { 2: 'day', 3: 'sea', 4: 'farm' };
  /* one character and one background for each topic, the same in every lesson of that topic (Ruby, Benny, Molly, Ollie, Finn...) */
  var THEME = { 201: ['rocket', 'space'], 202: ['bear', 'kitchen'], 203: ['mouse', 'shop'], 204: ['owl', 'day'], 205: ['fox', 'day'], 206: ['owl', 'day'],
    301: ['pirate', 'sea'], 302: ['frog', 'pond'], 303: ['bear', 'kitchen'], 304: ['mouse', 'kitchen'], 305: ['fox', 'kitchen'], 306: ['owl', 'day'], 307: ['bear', 'day'], 308: ['rocket', 'space'],
    401: ['owl', 'room'], 402: ['rocket', 'space'], 403: ['fox', 'farm'], 404: ['bear', 'kitchen'], 405: ['mouse', 'shop'], 406: ['owl', 'day'], 407: ['frog', 'pond'], 408: ['pirate', 'sea'], 409: ['owl', 'day'] };
  FL.THEME = THEME;
  FL.MEGA = function (n, sp) {
    var t = S.topics[n]; if (!t) return;
    var title = sp.title || (sp.li && sp.li[1]);
    if (sp.li) FL.LI(n, sp.id, sp.li);
    var st = t.steps.filter(function (s) { return s.id === sp.id; })[0];
    if (!st || !st.slides) return;
    var sl = st.slides, qs = sp.qs || [], guard = st.__mega; if (guard) return; st.__mega = 1;
    title = sl[0].title;
    function at(name) { for (var i = 0; i < sl.length; i++) if (sl[i].title === name) return i; return -1; }
    function mk(o) { o.flLearn = true; o.noMore = true; return o; }
    /* another way to see it, after Write it */
    if (sp.way) { var iw = at('Write it'); sl.splice(iw + 1, 0, mk({ title: 'Another way', say: [sp.way[0]], v: sp.way[1], kind: 'Another way' })); }
    /* worked examples 4 and 5 */
    var ix = at('Watch out!'), k0 = sl.filter(function (x) { return /^Worked example/.test(x.title); }).length;
    (sp.ex || []).forEach(function (e, i) { var w = { q: e[0], steps: e[1], final: e[2], pics: Array.isArray(e[3]) ? e[3] : null, pic: Array.isArray(e[3]) ? null : e[3] };
      sl.splice(ix + i, 0, mk({ title: 'Worked example ' + (k0 + i + 1), say: [], ex: W.worked(w), kind: 'Step by step' })); });
    /* a second common mistake */
    if (sp.mist) { var im = at('Watch out!'); sl.splice(im + 1, 0, mk({ title: 'Watch out again!', say: [sp.mist[0]], v: sp.mist[1], kind: 'A common mistake' })); }
    /* more checks */
    var ic = at('Quick check') + 1, add = [];
    [0, 1].forEach(function (i) { if (qs[i]) add.push(mk({ title: 'Quick check ' + (i + 2), say: ['Now you try. Tap your answer.'], live: W.check(qo(qs[i])), kind: 'Your turn' })); });
    if (sp.real) add.push(mk({ title: 'In real life', say: ['Here is a real-life question. Tap your answer.'], live: W.check(qo(sp.real)), kind: 'In real life' }));
    if (qs[2]) add.push(mk({ title: 'Challenge', say: ['Here is a harder one. Take your time.'], live: W.check(qo(qs[2])), kind: 'Challenge' }));
    if (qs[3]) add.push(mk({ title: 'Quick check 4', say: ['One more. Tap your answer.'], live: W.check(qo(qs[3])), kind: 'Your turn' }));
    sl.splice.apply(sl, [ic, 0].concat(add));
    /* the Watch lesson */
    var th = THEME[n] || [], bg = th[1] || sp.bg || BG[(S.topics[n].year || '').replace('P', '')] || 'day', ch = th[0] || sp.ch || 'owl';
    function pn(h) { return P(bg, '', h || '').replace('<div class="flp ', '<div data-wq="1" class="flp '); }
    var scr = [];
    if (sp.li) { scr.push({ mode: 'watch', say: sp.li[2], pic: pn(sp.li[3]) }); (sp.li[5] || []).forEach(function (s) { scr.push({ mode: 'watch', say: strip(s[0]), pic: pn(s[1]) }); }); }
    if (sp.way) scr.push({ mode: 'watch', say: strip(sp.way[0]), pic: pn(sp.way[1]) });
    (sp.vis || []).forEach(function (w) { scr.push({ mode: 'watch', say: strip(w[0]), pic: pn(typeof w[1] === 'function' ? w[1]() : w[1]) }); });
    (sp.watch || []).forEach(function (w) { scr.push({ mode: 'watch', say: strip(w[0]), pic: pn(w[1]) }); });
    (sp.ex || []).forEach(function (e) {
      var fin = strip(e[2]), qbox = '<div style="font-size:clamp(1.2rem,4.5vw,1.8rem);font-weight:800;color:#2b2340;background:#fff;border:3px solid #2b2340;border-radius:16px;padding:8px 16px;margin:0 auto 10px;max-width:92%;text-align:center;line-height:1.25">' + strip(e[0]) + '</div>', pc = pn(qbox + (Array.isArray(e[3]) ? e[3][e[3].length - 1] : e[3]));
      /* teaching slide: the question is on screen with its answer written just below it */
      var abox = '<div style="font-size:clamp(1.3rem,5vw,2rem);font-weight:800;color:#fff;background:#2e9e4f;border:3px solid #2b2340;border-radius:16px;padding:8px 18px;margin:10px auto 0;max-width:92%;text-align:center;line-height:1.25">Answer: ' + fin + '</div>';
      scr.push({ mode: 'watch', say: strip(e[0]) + ' ' + e[1].map(strip).join(' ') + ' So the answer is ' + fin + '.', pic: pn('<div style="display:flex;flex-direction:column;align-items:center;gap:8px;width:100%">' + qbox + (Array.isArray(e[3]) ? e[3][e[3].length - 1] : e[3]) + abox + '</div>') }); });
    qs.slice(0, 4).forEach(function (r) { var o = qo(r); scr.push({ mode: 'together', say: o.q, pic: pn(o.pic), tip: o.tip === 'Think about what you learned in this lesson.' ? '' : o.tip, options: o.options, answer: o.answer, explain: o.explain }); });
    qs.slice(4, 8).forEach(function (r) { var o = qo(r); scr.push({ mode: 'turn', say: o.q, pic: pn(o.pic), tip: o.tip === 'Think about what you learned in this lesson.' ? '' : o.tip, options: o.options, answer: o.answer, explain: o.explain }); });
    if (sp.li) {
      var first = scr.filter(function (x) { return x.mode === 'watch'; }).slice(0, 7).concat(scr.filter(function (x) { return x.mode !== 'watch'; }));
      var rest = scr.filter(function (x) { return x.mode === 'watch'; }).slice(7);
      FL.addWatch(n, [{ title: title, char: ch, rem: sp.rem || (sp.li && sp.li.length && sp.li[sp.li.length - 1] && sp.li[sp.li.length - 1][0] ? strip(sp.li[sp.li.length - 1][0]) : ''), screens: first.concat(rest) }]);
    } else FL.growWatch(n, title, ch, scr);
    /* the activity for a new lesson */
    (FL._mg = FL._mg || []).push([n, sp.id, sp.gen, qs]);
    var gen = sp.gen ? function () { return sp.gen(pick([0, 1, 2])); } : fromQs(sp);
    if (sp.li) { var lb = sp.lab || [sp.li[0], 'Choose the answer.']; BT.addLab(n, 'flm' + sp.id, lb[0], lb[1], FL.genAct(gen, (THEME[n] || [])[0] || ch)); }
    /* P4: the practice questions cover the lesson as well */
    if (t.year === 'P4' && FL.GENS && FL.GENS[n]) { var g = FL.GENS[n]; [0, 1, 2].forEach(function (lv) { var f = function () { return sp.gen ? sp.gen(lv) : fromQs(sp)(); }; (g[['low', 'medium', 'high'][lv]] = g[['low', 'medium', 'high'][lv]] || []).push(f); });
      (window.__addQ = window.__addQ || {})[n] = (window.__addQ[n] || []).concat([function () { return sp.gen ? sp.gen(pick([0, 1, 2])) : fromQs(sp)(); }]); }
  };
  /* worked examples last in the Let's learn list */
  FL.wexLast = function () { Object.keys(S.topics).forEach(function (k) { var t = S.topics[k]; if (!t || !t.steps) return; var isW = function (x) { return /^wex/.test(x.id || ''); }, w = t.steps.filter(isW); if (!w.length) return; t.steps = t.steps.filter(function (x) { return !isW(x); }).concat(w); if (S.arrange) S.arrange(t); }); };
  FL.opts = opts; FL.qrow = qo;
})();
