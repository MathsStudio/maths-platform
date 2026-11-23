/* uni.js: one fixed shape for every question bank, in every year and topic.
   Practise = 10 sets of 20 questions (200). Real-life problems = 4 sets of 15 (60).
   Strengths Check = 3 rounds of 20 (strengths.js). 10-minute quiz = 18 questions (test10.js).
   Questions are never removed from the banks: a set is only topped up (or, if a bank is small, repeated) to reach the size. */
(function () {
  'use strict';
  var S = Studio, pick = S.h.pick, DEF = { practise: 20, practical: 15 };
  var short = window.__uniShort = [];
  function sig(q) { return String(q && q.text) + '|' + String(q && q.answer); }
  function fit(step, topicN) {
    var orig = step.make; if (!orig || orig.__uni) return;
    step.make = function () {
      var want = S.__wantCount || DEF[step.id] * (step.id === 'practise' ? 1 : 1), out = [], seen = {}, args = arguments, uniq;
      for (var r = 0; r < 40 && out.length < want; r++) {
        (orig.apply(this, args) || []).forEach(function (q) { var k = sig(q); if (out.length < want && !seen[k]) { seen[k] = 1; out.push(q); } });
      }
      var ex = window.__extraQ && window.__extraQ[Number(topicN)], list = ex && ex[step.id];
      if (out.length < want && list && list.length) {
        for (var t2 = 0; t2 < 6000 && out.length < want; t2++) { var q = pick(list)(); if (q && !seen[sig(q)]) { seen[sig(q)] = 1; out.push(q); } }
      }
      uniq = out.length;
      if (uniq < want) short.push([topicN, step.id, uniq, want]);
      for (var i = 0; out.length && out.length < want; i++) out.push(out[i % uniq]);
      return out.length > want ? out.slice(0, want) : out;
    };
    step.make.__uni = 1;
  }
  Object.keys(S.topics).forEach(function (k) {
    (S.topics[k].steps || []).forEach(function (s) {
      if (s.type !== 'quiz') return;
      if (s.id === 'practise') fit(s, k);
      if (s.id === 'practical') {
        s.sets = 4; s.size = 15;
        s.lead = String(s.lead).replace(/^30 situation questions/, '60 situation questions in 4 sets of 15');
        fit(s, k);
      }
    });
  });
})();
