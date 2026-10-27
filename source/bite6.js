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
        var mk = ms[k % ms.length], q = mk(); if (q) q._mk = mk;
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
  function esc(x) { return String(x == null ? '' : x); }
  function answerOf(q) { return q.type === 'mc' && typeof q.answer === 'number' && q.options ? q.options[q.answer] : q.answer; }
  function showQ(host, q, regen, lead) {
    var steps = [];
    (q.hints || []).forEach(function (h) { steps.push('Think: ' + esc(h)); });
    sentences(q.explain).forEach(function (s) { steps.push(s); });
    var shown = 0, ans = 'Answer: ' + plain(answerOf(q));
    var opts = q.options && q.options.length ? '<p class="note say" style="min-height:0">Choices: ' + q.options.map(function (o) { return '<b>' + esc(plain(o)) + '</b>'; }).join(', ') + '</p>' : '';
    host.style.userSelect = 'none'; host.style.webkitUserSelect = 'none'; host.style.caretColor = 'transparent';
    function draw() {
      var list = steps.slice(0, shown).map(function (s) { return '<li><span class="say">' + s + '</span></li>'; }).join('');
      host.innerHTML = '<div class="worked">' + (q.pic ? '<div class="wvis">' + q.pic + '</div>' : '') +
        '<p class="wq say">' + q.text + '</p>' + opts +
        (shown ? '<ol class="wsteps" style="min-height:0">' + list + '</ol>' : '') +
        (shown >= steps.length ? '<p class="wres">' + ans + '</p>' : '') +
        '<div class="row" style="align-items:center"><button class="btn" type="button" data-step>' + (shown >= steps.length ? 'Start again' : 'Show step ' + (shown + 1)) + '</button>' +
        '<button class="btn ghost" type="button" data-try style="margin-left:auto">Try different numbers</button></div></div>';
      host.querySelector('[data-step]').addEventListener('click', function () { shown = shown >= steps.length ? 0 : shown + 1; draw(); });
      host.querySelector('[data-try]').addEventListener('click', function () { showQ(host, regen(q), regen, lead); });
    }
    draw();
  }
  function slideFor(q, ix, lead, regen) {
    return {
      title: (lead || 'Worked example') + ' ' + ix + ': ' + q.tag, v: '', say: [], real: null,
      goal: 'how to answer a question about ' + String(q.tag).toLowerCase() + ', one step at a time. You can also try new numbers.',
      more: [(q.hints || []).join(' ') || 'Take it one step at a time.'], eg: ['Check your answer by putting it back into the question.'],
      live: function (host) { showQ(host, q, regen, lead); }
    };
  }
  var PARTS = [['learn5', 'Worked examples: getting started', 'low', 'Getting started'],
               ['learn6', 'Worked examples: building up', 'medium', 'Building up'],
               ['learn7', 'Worked examples: challenge', 'high', 'Challenge']];
  function yearOf(t) { return t.year || 'P6'; }
  function regenFor(pr) {
    return function (q) {
      var key = plain(q.text), cand = [], k;
      if (q._mk) { for (k = 0; k < 12; k++) { try { var nq = q._mk(); if (nq && plain(nq.text) !== key) { nq._mk = q._mk; return nq; } } catch (e) { } } }
      if (pr) { for (k = 0; k < 3; k++) { try { (pr.make() || []).forEach(function (x) { if (x && x.tag === q.tag && x.hints && x.explain && plain(x.text) !== key) cand.push(x); }); } catch (e) { } } }
      return cand.length ? cand[Math.floor(Math.random() * cand.length)] : q;
    };
  }
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
      BT.add(n, p[0], p[1], chosen.map(function (q, ix) { return slideFor(q, ix + 1, p[3], regenFor(pr)); }));
    });
  });
})();
