/* fxlib.js: L.fx writes a full Watch lesson from plain data, in the same fuller style as the S3 lessons:
   basics, slow worked examples, "Your turn" (question, pause, answer, step-by-step working, optional figure), common mistakes, real life, recap.
   Line codes: "text" = calculation, "g|text" green, "r|text" red, "n|text" a sentence on screen, "h|<html>" a picture, "f|..." is not used. */
(function () {
  'use strict';
  var BT = window.BT; if (!BT || !BT.L || !BT.sv) return;
  var L = BT.L, V = BT.sv, E = function (t, c) { return V.eq(t, c); };
  function html(spec) {
    if (spec == null) return '';
    if (typeof spec === 'string') spec = [spec];
    return spec.map(function (x) {
      if (typeof x !== 'string') return '';
      var m = /^([grnbh])\|/.exec(x), t = m ? x.slice(2) : x, c = m ? m[1] : '';
      if (c === 'g') return E(t, 'g'); if (c === 'r') return E(t, 'r'); if (c === 'b') return E(t, 'b'); if (c === 'n') return V.note('<b>' + t + '</b>'); if (c === 'h') return t;
      return E(t);
    }).join('');
  }
  function steps(list) { return list.map(function (s) { return L.st(s[0], html(s[1])); }); }
  L.fx = function (title, goal, o) {
    var sc = [], H = o.head || 'Let us learn', k;
    (o.basics || []).forEach(function (b) { sc.push(L.SC(H, b[0], steps(b[1]))); });
    var turns = o.turns || [], used = 0;
    function turn(i) {
      var t = turns[i], qs = 'Your turn! ' + t.q + ' Pause and try it.';
      return L.turn(qs, t.task ? E(t.task) : '', t.say, html(t.ans));
    }
    (o.ex || []).forEach(function (e, i) {
      sc.push(L.SC('Example ' + (i + 1), e[0], steps(e[1])));
      if (i >= 1 && used < turns.length && (i - 1) % 1 === 0 && i < (o.ex || []).length) { sc.push(turn(used++)); }
    });
    (o.mist || []).forEach(function (m) { sc.push(L.SC('Watch out!', m[0], [L.st(m[1], html(m[2]))])); });
    if (o.real) sc.push(L.SC('In real life', o.real[0], [L.st(o.real[1], html(o.real[2]))]));
    while (used < turns.length) sc.push(turn(used++));
    if (o.rec) sc.push(L.rec(title, o.rec[0], o.rec[1]));
    /* the written step-by-step working of each Your turn */
    BT.W3(title, turns.map(function (t) { var w = (t.work || []).slice(); if (t.fig && w.length) w[0] = [w[0], String(t.fig).replace(/^h\|/, '')]; return w; }));
    if (o.deep) { BT.DEEP = BT.DEEP || {}; BT.DEEP[title] = o.deep; }
    L.full(title, sc);
    return L.ep(title, goal, []);
  };
})();
