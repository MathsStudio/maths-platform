/* fxh.js: short helpers for writing full lessons with L.fx */
(function () {
  'use strict';
  var BT = window.BT; if (!BT || !BT.L || !BT.L.fx) return;
  var H = BT.fxh = {};
  /* H.tbl(head, rows, hi): a small table picture for a slide; hi = row number to highlight (1-based), cells may be '' */
  H.tbl = function (head, rows, hi) {
    var th = 'padding:.35em .7em;text-align:right;border-bottom:2px solid var(--border,#c9d3ea);font-weight:700', td = 'padding:.35em .7em;text-align:right;border-bottom:1px solid var(--border,#dfe5f3)';
    return 'h|<table style="margin:.4em auto;border-collapse:collapse;font-size:.95em;max-width:100%;background:var(--surface,transparent);color:var(--fg,inherit)"><thead><tr>' + head.map(function (h, i) { return '<th style="' + th + (i < 2 ? ';text-align:left' : '') + '">' + h + '</th>'; }).join('') + '</tr></thead><tbody>' +
      rows.map(function (r, k) { return '<tr' + (hi === k + 1 ? ' style="background:var(--surface-2,#e8eefc);font-weight:700"' : '') + '>' + r.map(function (c, i) { return '<td style="' + td + (i < 2 ? ';text-align:left' : '') + '">' + c + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table>';
  };
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
