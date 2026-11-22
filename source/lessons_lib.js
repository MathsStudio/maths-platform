/* lessons_lib.js: shared helpers for writing Watch lessons, so every lesson file is written the same way.
   BT.L.use(n, titles, extra) builds a topic's Watch lesson from lessons already written (by title) plus new ones. */
(function () {
  'use strict';
  var BT = window.BT; if (!BT || !BT.lessons) return;
  var L = BT.L = {};
  L.SC = function (h, sub, steps) { return { h: h, sub: sub, steps: steps }; };
  L.st = function (say, html) { return { say: say, html: html || '' }; };
  L.SW = '<!--swap-->';
  L.F = function (n, d, col) { return '<span style="display:inline-flex;flex-direction:column;align-items:center;line-height:1;font-weight:700;color:' + (col || 'inherit') + '"><span>' + n + '</span><span style="border-top:3px solid currentColor;padding-top:2px;min-width:1.2em;text-align:center">' + d + '</span></span>'; };
  L.BIG = function (inner) { return '<div style="font-size:40px;display:flex;align-items:center;gap:14px;justify-content:center;flex-wrap:wrap">' + inner + '</div>'; };
  L.rec = function (title, say, points) { return L.SC('Let’s recap', title, [L.st(say, BT.sv.list(points))]); };
  L.turn = function (q, qhtml, a, ahtml) {
    /* when the picture is only a question mark, show the question itself so it can be read on screen */
    if (!qhtml || qhtml === BT.sv.eq('?')) qhtml = BT.sv.note(q.replace(/^Your turn!\s*/, '').replace(/\s*Pause[^.]*\.\s*$/, ''));
    return L.SC('Your turn', 'Pause, think, then listen', [L.st(q, qhtml), L.st(a, ahtml)]);
  };
  /* the fuller question-by-question lessons (lessons_full_*.js) are stored by title and replace the shorter first versions */
  BT.FULL = BT.FULL || {};
  L.full = function (title, scenes) { BT.FULL[title] = scenes; };
  L.ep = function (title, goal, scenes) { if (BT.FULL[title]) scenes = BT.FULL[title]; var e = { title: title, goal: goal, scenes: scenes }; BT.EP = BT.EP || {}; BT.EP[title] = e; return e; };
  L.get = function (title) { var e = BT.EP && BT.EP[title]; if (!e && window.console) console.warn('lesson not found: ' + title); return e; };
  L.use = function (n, items) { BT.lessons(n, 'Watch lesson', items.map(function (x) { return typeof x === 'string' ? L.get(x) : x; })); };

  /* a compact way to write a full lesson:
     o.intro [h, sub, say, html], o.ex [[h, sub, [[say, html], ...]], ...], o.real [sub, say, html],
     o.turn [q, qhtml, a, ahtml], o.rec [say, points], o.deep [why, mistake] */
  L.lesson = function (title, goal, o) {
    var sc = [];
    if (o.intro) sc.push(L.SC(o.intro[0], o.intro[1], [L.st(o.intro[2], o.intro[3])]));
    (o.ex || []).forEach(function (e) { sc.push(L.SC(e[0], e[1], e[2].map(function (x) { return L.st(x[0], x[1]); }))); });
    if (o.real) sc.push(L.SC('In real life', o.real[0], [L.st(o.real[1], o.real[2])]));
    if (o.turn) sc.push(L.turn(o.turn[0], o.turn[1], o.turn[2], o.turn[3]));
    if (o.rec) sc.push(L.rec(title, o.rec[0], o.rec[1]));
    if (o.deep) { BT.DEEP = BT.DEEP || {}; BT.DEEP[title] = o.deep; }
    return L.ep(title, goal, sc);
  };
  L.E = function (t, c) { return BT.sv.eq(t, c); };
})();
