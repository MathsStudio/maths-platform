/* bite6.js: long runs of worked-example slides for every P5 to S3 topic.
   Each topic gets three extra lesson parts (easy, building up, challenge) of 8 slides each,
   made from the topic's own question makers, so every slide teaches a real worked question
   with the thinking shown step by step. */
(function () {
  'use strict';
  var S = Studio, H = S.h, K = S.kit, SK = window.SK, BT = window.BT;
  function plain(h) { return String(h == null ? '' : h).replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim(); }
  function sentences(t) {
    var out = [], parts = String(t || '').split(/(?<=[.!?])\s+(?=[A-Z0-9£−(])/);
    parts.forEach(function (p) { p = p.trim(); if (p) out.push(p); });
    return out;
  }
  var BAN = null;
  function banned(tag) {
    if (!BAN) {
      BAN = { 'Verbal reasoning': 1, 'Volume of cubes': 1, 'Surface area of cubes': 1, 'Non-verbal reasoning': 1 };
      [501, 1, 701, 2, 801, 821, 841].forEach(function (n) { ['low', 'medium', 'high', 'wide'].forEach(function (lv) {
        var ms = []; try { ms = S.spatialExtra(n, lv) || []; } catch (e) { }
        ms.forEach(function (m) { for (var k = 0; k < 12; k++) { try { BAN[m().tag] = 1; } catch (e) { } } });
      }); });
    }
    return !!BAN[tag];
  }
  function pull(n, lv, extra) {
    var ms = [], out = [], seen = {};
    try { ms = (S.extraMakers ? S.extraMakers(n, lv) : []) || []; } catch (e) { }
    for (var k = 0; k < 60 && ms.length; k++) {
      try {
        var q = ms[k % ms.length]();
        if (!q || !q.text || !q.hints || !q.explain || q.answer == null || q.answer === '' || banned(q.tag)) continue;
        var key = plain(q.text); if (seen[key]) continue; seen[key] = 1; out.push(q);
      } catch (e) { }
    }
    (extra || []).forEach(function (q) {
      if (!q || !q.text || !q.hints || !q.explain || banned(q.tag)) return;
      var key = plain(q.text); if (seen[key]) return; seen[key] = 1; out.push(q);
    });
    return out;
  }
  function diff(q) { return plain(q.text).length + 4 * String(q.answer).length + (q.type === 'mc' ? 10 : 0); }
  function pick(list, need, used) {
    var out = [], tags = {};
    list.forEach(function (q) { if (out.length < need && !tags[q.tag] && !used[plain(q.text)]) { tags[q.tag] = 1; out.push(q); } });
    list.forEach(function (q) { if (out.length < need && out.indexOf(q) < 0 && !used[plain(q.text)]) out.push(q); });
    out.forEach(function (q) { used[plain(q.text)] = 1; });
    return out;
  }
  function slideFor(q, ix, lead) {
    var steps = [];
    (q.hints || []).forEach(function (h) { steps.push('Think: ' + h); });
    sentences(q.explain).forEach(function (s) { steps.push(s); });
    if (!steps.length) steps.push(q.explain);
    var ans = q.type === 'mc' && typeof q.answer === 'number' && q.options ? q.options[q.answer] : q.answer;
    var vis = q.pic || '';
    return SK.XV((lead || 'Worked example') + ' ' + ix + ': ' + q.tag, q.text, steps, 'Answer: ' + plain(ans),
      function () { return vis; }, null,
      'how to answer a question about ' + String(q.tag).toLowerCase() + ', one step at a time.',
      [(q.hints || []).join(' ') || 'Take it one step at a time.'], ['Check your answer by putting it back into the question.']);
  }
  var PARTS = [['learn5', 'Worked examples: getting started', 'low', 'Getting started'],
               ['learn6', 'Worked examples: building up', 'medium', 'Building up'],
               ['learn7', 'Worked examples: challenge', 'high', 'Challenge']];
  function yearOf(t) { return t.year || 'P6'; }
  var OWN = { 13: 1, 513: 1, 713: 1, 813: 1, 833: 1, 853: 1 };
  S.order.slice().forEach(function (n) {
    var t = S.topics[n]; if (!t || ['P5', 'P6', 'P7', 'S1', 'S2', 'S3'].indexOf(yearOf(t)) < 0) return;
    var pr = t.steps.filter(function (s) { return s.id === 'practise'; })[0], pool = [], seen = {};
    function add(q) {
      if (!q || !q.text || !q.hints || !q.explain || q.answer == null || q.answer === '') return;
      if (!OWN[n] && banned(q.tag)) return;
      var key = plain(q.text); if (seen[key]) return; seen[key] = 1; pool.push(q);
    }
    ['low', 'medium', 'high'].forEach(function (lv) { pull(n, lv, []).forEach(add); });
    for (var r = 0; r < 4 && pr; r++) { try { (pr.make() || []).forEach(add); } catch (e) { } }
    pool.sort(function (x, y) { return diff(x) - diff(y); });
    var by = {}, tagOrder = [];
    pool.forEach(function (q) { if (!by[q.tag]) { by[q.tag] = []; tagOrder.push(q.tag); } by[q.tag].push(q); });
    tagOrder.sort(function (a, c) { return avg(by[a]) - avg(by[c]); });
    function avg(l) { var s = 0; l.forEach(function (q) { s += diff(q); }); return s / l.length; }
    var T = tagOrder.length, used = {};
    PARTS.forEach(function (p, i) {
      var from = Math.floor(i * T / 3), to = Math.max(from + 1, Math.floor((i + 1) * T / 3)), grp = tagOrder.slice(from, to);
      if (grp.length < 3) grp = tagOrder.slice(Math.max(0, Math.min(from, T - 4)), Math.max(0, Math.min(from, T - 4)) + 4);
      var chosen = [], round = 0;
      while (chosen.length < 8 && round < 8) {
        grp.forEach(function (tg) {
          if (chosen.length >= 8) return;
          var l = by[tg], q = l.filter(function (x) { return !used[plain(x.text)]; })[Math.min(round, 0)];
          if (q) { used[plain(q.text)] = 1; chosen.push(q); }
        });
        round++;
      }
      if (chosen.length < 4) return;
      chosen.sort(function (x, y) { return diff(x) - diff(y); });
      BT.add(n, p[0], p[1], chosen.map(function (q, ix) { return slideFor(q, ix + 1, p[3]); }));
    });
  });
})();
