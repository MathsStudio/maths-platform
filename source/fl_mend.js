(function () {
  if (window.FL && FL.wexLast) FL.wexLast();
  /* every Key word on a Let's Learn lesson is also said in its Watch lesson */
  var S = window.Studio, BT = window.BT; if (!S || !BT || !BT.L || !FL._spoken) return;
  var L = BT.L;
  Object.keys(S.topics).forEach(function (k) {
    var t = S.topics[k]; if (!/^P[234]$/.test(t.year || '')) return;
    var eps = ((BT.EP_BY_TOPIC && BT.EP_BY_TOPIC[k]) || []).map(function (x) { return typeof x === 'string' ? BT.EP[x] : x; }).filter(Boolean).slice(1);
    t.steps.filter(function (s) { return /^learn/.test(s.id); }).forEach(function (s, i) {
      var ti = String(s.slides[0].title || '').toLowerCase(), ep = eps.filter(function (e) { return String(e.title || '').toLowerCase() === ti; })[0] || eps[i], kw = s.slides && s.slides[1] && s.slides[1].wl; if (!ep || !kw || !kw.length) return;
      var have = ep._kw = ep._kw || {}, fresh = kw.filter(function (w) { return !have[String(w[0]).toLowerCase()]; });
      if (!fresh.length) return;
      var steps = fresh.map(function (w) {
        have[String(w[0]).toLowerCase()] = 1;
        return L.st(FL._spoken(w), '<div style="text-align:center;line-height:1.25"><div style="font-size:3rem" aria-hidden="true">' + (w[2] || '\ud83d\udd24') + '</div><div style="font-size:2rem;font-weight:800;margin:10px 0 6px">' + w[0] + '</div><div style="font-size:1.4rem">' + w[1] + '</div></div>');
      });
      var old = ep.scenes.filter(function (x) { return x.h === 'Key words'; })[0];
      if (old) { old.steps = old.steps.concat(steps); return; }
      var sc = L.SC('Key words', 'Words to know', steps), at = 1;
      for (var j = 0; j < ep.scenes.length; j++) if (ep.scenes[j].h === 'Watch me') { at = j; break; }
      ep.scenes.splice(at, 0, sc);
    });
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
