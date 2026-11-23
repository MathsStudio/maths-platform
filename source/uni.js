/* uni.js: one fixed size for every question set, in every year and topic.
   Practise = 100, Real-life problems = 30 (the Strengths Check is 3 rounds of 20, the 10-minute quiz is 18: see strengths.js and test10.js).
   Questions are never removed from the banks. Each set is only trimmed to size, or topped up from the same maker. */
(function () {
  'use strict';
  var S = Studio, SIZE = { practise: 100, practical: 30 };
  function sig(q) { return String(q && q.text) + '|' + String(q && q.answer); }
  function fit(step, want) {
    var orig = step.make; if (!orig || orig.__uni) return;
    step.make = function () {
      var out = orig.apply(this, arguments) || [], seen = {}, uniq = [];
      out.forEach(function (q) { var k = sig(q); if (!seen[k]) { seen[k] = 1; uniq.push(q); } });
      out = uniq;
      for (var r = 0; r < 12 && out.length < want; r++) {
        (orig.apply(this, arguments) || []).forEach(function (q) { var k = sig(q); if (out.length < want && !seen[k]) { seen[k] = 1; out.push(q); } });
      }
      /* a few small banks have fewer distinct questions than the set size: repeat the earlier ones so the count is still exact */
      for (var i = 0; out.length && out.length < want; i++) out.push(out[i % uniq.length]);
      return out.length > want ? out.slice(0, want) : out;
    };
    step.make.__uni = 1;
  }
  Object.keys(S.topics).forEach(function (k) {
    (S.topics[k].steps || []).forEach(function (s) { if (SIZE[s.id] && s.type === 'quiz') fit(s, SIZE[s.id]); });
  });
})();
