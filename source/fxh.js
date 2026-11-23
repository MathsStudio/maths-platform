/* fxh.js: short helpers for writing full lessons with L.fx */
(function () {
  'use strict';
  var BT = window.BT; if (!BT || !BT.L || !BT.L.fx) return;
  var H = BT.fxh = {};
  /* E(sub, [say, lines], [say, lines], ...) */
  H.E = function (sub) { var a = [].slice.call(arguments, 1); return [sub, a]; };
  /* M(sub, say, wrongLine, rightLine) */
  H.M = function (sub, say, wrong, right) { return [sub, say, ['r|' + wrong, 'g|' + right]]; };
  /* T(question, say, workLines, answer, figure) */
  H.T = function (q, say, work, ans, fig) { var t = { q: q, say: say, work: work, ans: ['g|' + ans] }; if (fig) t.fig = fig; return t; };
  /* LS(title, goal, head, basics, examples, mistakes, real, turns, recap) */
  H.LS = function (title, goal, head, basics, ex, mist, real, turns, rec) {
    BT.L.fx(title, goal, { head: head, basics: [basics], ex: ex, mist: mist, real: ['In real life', real[0], real[1]], turns: turns, rec: rec });
  };
})();
