/* fl_m4h.js: shorthand helpers for the P4 lesson specs */
(function () {
  'use strict';
  var FL = window.FL; if (!FL || !FL.MEGA) return;
  var C = FL.cards;
  function pic(s) { if (s && s.charAt(0) === '<') return s; return s ? C(s.split(',').map(function (x) { return x.trim(); })) : ''; }
  function ex(s) { var p = s.split('|'); return [p[0], p[1].split(';'), p[2], pic(p[3])]; }
  function rl(s) { var p = s.split('|'); return [p[0], p[1], p[2].split(','), p[3], pic(p[4])]; }
  function fin(q) { return /…\s*$/.test(q) ? 'Finish the sentence: ' + q : q; }
  function qq(s) { var p = s.split('|'); return [fin(p[0]), p[1], p[2].split(','), p[3] || 'Check each step.', pic(p[4]), '']; }
  function two(s) { var p = s.split('|'); return [p[0], pic(p[1])]; }
  function uniq(a, ans) { var o = [], seen = {}; seen[String(ans)] = 1; a.forEach(function (x) { x = String(x); if (!seen[x] && !/NaN|undefined/.test(x)) { seen[x] = 1; o.push(x); } }); return o.slice(0, 3); }
  FL.mcq = function (tag, q, a, ws, h, e, p) { return FL.MC(tag, q, String(a), uniq(ws, a), [h], e, p || ''); };
  FL.P4 = function (n, id, o) {
    var spec = { id: id, ch: o.ch || 'owl', bg: o.bg || 'day', way: two(o.way), ex: o.ex.map(ex), mist: two(o.mist), real: rl(o.real), qs: o.qs.map(qq), gen: o.gen, vis: o.vis, rem: o.rem && !o.t ? o.rem : undefined };
    if (o.t) {
      var t = o.t.split('|'), ch = o.chk.split('|'), opts = [ch[1]].concat(ch[2].split(',')), k = opts.length > 1 ? 1 : 0;
      opts = opts.slice(k).concat(opts.slice(0, k));
      spec.li = [t[0], t[1], t[2], pic(t[3]),
        o.words.split(';').map(function (w) { var x = w.split('='); return [x[0], x[1], x[2] || '⭐']; }),
        o.see.map(two), o.ex3.map(ex), two(o.mist), [ch[0], pic(ch[4] || ''), opts, ch[1], ch[3], ch[5] || 'Take your time.'], two(o.rem)];
    }
    FL.MEGA(n, spec);
  };
})();
