/* take out lessons that do not belong in the main topic (counting forwards and back, counting in steps, carrying on a pattern) */
(function () {
  var S = window.Studio, BT = window.BT; if (!S || !BT) return;
  var DROP = { 201: ['learnm1', 'learnm2'], 301: ['learnm1'], 205: ['learnm3'] };
  Object.keys(DROP).forEach(function (n) {
    var t = S.topics[n]; if (!t) return;
    DROP[n].forEach(function (id) {
      var st = t.steps.filter(function (x) { return x.id === id; })[0]; if (!st) return;
      var title = st.slides && st.slides[0] && st.slides[0].title;
      t.steps = t.steps.filter(function (x) { return x.id !== id && x.id !== 'flm' + id; });
      if (BT.EP_BY_TOPIC && BT.EP_BY_TOPIC[n]) BT.EP_BY_TOPIC[n] = BT.EP_BY_TOPIC[n].filter(function (x) { return (typeof x === 'string' ? x : x.title) !== title; });
      if (window.FL && FL._mg) FL._mg = FL._mg.filter(function (m) { return !(String(m[0]) === String(n) && m[1] === id); });
    });
    if (S.arrange) S.arrange(t);
  });
})();
(function () {
  if (window.FL && FL.wexLast) FL.wexLast();
  /* no word-and-meaning cards in First level lessons: ideas are explained through examples instead */
  var S = window.Studio; if (!S) return;
  Object.keys(S.topics).forEach(function (k) {
    var t = S.topics[k]; if (!/^P[234]$/.test(t.year || '')) return;
    t.steps.forEach(function (s) { if (s.slides) s.slides = s.slides.filter(function (x) { return x.kind !== 'Key words'; }); });
  });
})();
/* worked examples: add examples from every Learn lesson of the topic, so none is left out */
(function () {
  var S = window.Studio, BT = window.BT; if (!S || !BT || !FL._mg || !FL._w) return;
  var worked = FL._w.worked, cards = FL.cards;
  function conv(q) { var st = [];
    (q.hints || []).forEach(function (h) { if (st.indexOf(h) < 0 && !/one step at a time|look carefully at each/i.test(h)) st.push(h); });
    if (q.explain) st.push(q.explain); if (!st.length) st.push('Think about what the question asks.');
    var oc = q.options ? '<div style="margin-top:8px">' + cards(q.options) + '</div>' : '';
    return { q: q.text, steps: st, final: 'The answer is ' + q.answer + '.', pic: (q.pic || '') + oc }; }
  var SETS = [['wex1', 'Worked examples: getting started', 0, 'Getting started'], ['wex2', 'Worked examples: building up', 1, 'Building up'], ['wex3', 'Worked examples: challenge', 2, 'Challenge']];
  Object.keys(S.topics).forEach(function (k) {
    var t = S.topics[k]; if (!/^P[234]$/.test(t.year || '')) return;
    var mg = FL._mg.filter(function (m) { return String(m[0]) === String(k); }); if (!mg.length) return;
    var added = false;
    SETS.forEach(function (p) {
      var step = t.steps.filter(function (s) { return s.id === p[0]; })[0], sl = step ? step.slides : [], seen = {};
      sl.forEach(function (x) { try { seen[x.ex && x.ex.q] = 1; } catch (e) {} });
      var target = step ? sl.length + mg.length : 12, n0 = sl.length;
      for (var round = 0; round < 6 && sl.length < target; round++) mg.forEach(function (m) {
        if (sl.length >= target) return;
        for (var tr = 0; tr < 8; tr++) { var q; try { q = m[2](p[2]); } catch (e) { q = null; } if (!q || !q.text) continue; var w = conv(q), key = w.q; if (seen[key]) continue; seen[key] = 1;
          sl.push({ flLearn: true, title: 'Worked example ' + (sl.length + 1), say: [], ex: worked(w), kind: p[3], noMore: true }); break; } });
      if (!step && sl.length) { BT.add(k, p[0], p[1], sl); added = true; }
    });
    if (added && S.arrange) { S.arrange(t); }
  });
  if (FL.wexLast) FL.wexLast();
})();
/* one story per topic: every Watch lesson of a topic uses that topic's own character and background, even a lesson that several topics share */
(function () {
  var S = window.Studio, BT = window.BT, FL = window.FL; if (!S || !BT || !FL || !FL.THEME || !BT.EP_BY_TOPIC) return;
  var NAME = { rocket: 'Ruby', bear: 'Benny', mouse: 'Molly', owl: 'Ollie', fox: 'Finn', frog: 'Frankie', pirate: 'Pip' };
  var KIND = { rocket: 'rocket', bear: 'bear', mouse: 'mouse', owl: 'owl', fox: 'fox', frog: 'frog', pirate: 'pirate' };
  var ANIM = /(Ruby|Benny|Molly|Ollie|Finn|Frankie|Captain Pip|Pip)( the (rocket|bear|mouse|owl|fox|frog|pirate))?/g;
  function re(html, th) {
    if (typeof html !== 'string') return html;
    html = html.replace(/flp-(day|farm|kitchen|night|pond|room|sea|shop|space)\b/g, 'flp-' + th[1]);
    return html.replace(/<svg viewBox="0 0 100 100" role="img" aria-label="(rocket|bear|mouse|owl|fox|frog|pirate)" style="width:(\d+)px[^>]*>[\s\S]*?<\/svg>/g, function (m, c, w) { return FL.char(th[0], +w); });
  }
  function say(t, th) {
    if (typeof t !== 'string') return t;
    return t.replace(ANIM, function (m, nm, rest, an) { var pip = th[0] === 'pirate' ? 'Captain Pip' : NAME[th[0]]; if (NAME[th[0]] && (m.indexOf(NAME[th[0]]) === 0 || (th[0] === 'pirate' && /Pip/.test(m)))) return m; return pip + (rest ? ' the ' + th[0] : ''); });
  }
  Object.keys(FL.THEME).forEach(function (k) {
    var th = FL.THEME[k], t = S.topics[k]; if (!t) return;
    var titles = BT.EP_BY_TOPIC[k]; if (!titles || !titles.length) return;
    var eps = titles.map(function (x) { return BT.EP[x]; }).filter(Boolean).map(function (ep) {
      var c = Object.assign({}, ep);
      c.scenes = ep.scenes.map(function (sc) { var s2 = Object.assign({}, sc);
        s2.steps = (sc.steps || []).map(function (st) { var x = Object.assign({}, st); if (x.html) x.html = re(x.html, th); if (typeof x.say === 'string') x.say = say(x.say, th); return x; }); return s2; });
      return c; });
    BT.lessons(k, 'Watch lesson', eps);
    BT.EP_BY_TOPIC[k] = eps;
    t.steps.forEach(function (s) { (s.slides || []).forEach(function (sl) { if (typeof sl.v === 'string') sl.v = re(sl.v, th); }); });
  });
  if (FL.wexLast) FL.wexLast();
})();
