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
        return L.st(FL._spoken(w), '<div class="flb flb-w"><div class="flb-stage"><div style="text-align:center;padding:10px;color:#2b2340"><div style="font-size:2.6rem" aria-hidden="true">' + (w[2] || '\ud83d\udd24') + '</div><div style="font-size:1.5rem;font-weight:800;margin:6px 0">' + w[0] + '</div><div style="font-size:1.1rem">' + w[1] + '</div></div></div></div>');
      });
      var old = ep.scenes.filter(function (x) { return x.h === 'Key words'; })[0];
      if (old) { old.steps = old.steps.concat(steps); return; }
      var sc = L.SC('Key words', 'Words to know', steps), at = 1;
      for (var j = 0; j < ep.scenes.length; j++) if (ep.scenes[j].h === 'Watch me') { at = j; break; }
      ep.scenes.splice(at, 0, sc);
    });
  });
})();
