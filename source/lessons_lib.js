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
  L.turn = function (q, qhtml, a, ahtml) { return L.SC('Your turn', 'Pause, think, then listen', [L.st(q, qhtml), L.st(a, ahtml)]); };
  L.ep = function (title, goal, scenes) { var e = { title: title, goal: goal, scenes: scenes }; BT.EP = BT.EP || {}; BT.EP[title] = e; return e; };
  L.get = function (title) { var e = BT.EP && BT.EP[title]; if (!e && window.console) console.warn('lesson not found: ' + title); return e; };
  L.use = function (n, items) { BT.lessons(n, 'Watch lesson', items.map(function (x) { return typeof x === 'string' ? L.get(x) : x; })); };
})();
