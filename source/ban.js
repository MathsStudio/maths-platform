/* ban.js: keeps every question inside the topic it belongs to (P5 first).
   Practice, warm-ups, Real-time problems, the games (which reuse practice questions) and the
   lesson worked examples all draw from the same makers, and some makers add general reasoning
   puzzles (verbal, cubes, mirror images...). Those only belong to the Reasoning and Spatial topics. */
(function () {
  'use strict';
  var S = Studio, H = S.h, BT = window.BT = window.BT || {};
  function set(a) { var o = {}; a.forEach(function (t) { o[t] = 1; }); return o; }
  var SPATIAL = ['Counting cubes', 'Solid shapes', 'Nets of a cube', 'Turns and bearings', 'Mirror images', 'Turning shapes', 'Shape patterns', 'Position', 'Volume of cubes', 'Surface area of cubes'];
  var VERBAL = ['Verbal reasoning', 'Word meanings', 'Word links', 'Hidden words', 'Letter series', 'Codes', 'Reasoning', 'Odd one out', 'Non-verbal reasoning', 'Logic'];
  var BAN = {};
  [501, 502, 503, 504, 505, 506, 508, 510].forEach(function (n) { BAN[n] = set(SPATIAL.concat(VERBAL)); });
  BAN[507] = set(VERBAL.concat(['Counting cubes', 'Solid shapes', 'Nets of a cube', 'Turns and bearings', 'Shape patterns', 'Position', 'Volume of cubes', 'Surface area of cubes']));
  BAN[509] = set(SPATIAL.filter(function (t) { return t !== 'Shape patterns'; }));
  BAN[513] = set(['Verbal reasoning', 'Word meanings', 'Word links', 'Hidden words', 'Letter series', 'Codes', 'Reasoning', 'Logic']);
  BT.banFor = function (n, tag) { return !!(BAN[Number(n)] && BAN[Number(n)][tag]); };

  var orig = H.buildPracticeSet;
  function sig(q) { return String(q && q.text) + '|' + String(q && q.answer); }
  H.buildPracticeSet = function (makers, count) {
    var n = Number(S.state && S.state.tab), ban = BAN[n];
    var out = orig.apply(this, arguments);
    if (!ban || makers.storyMode) return out;
    var bad = function (q) { return q && ban[q.tag]; };
    for (var round = 0; round < 12 && out.some(bad); round++) {
      var keep = out.filter(function (q) { return !bad(q); }), seen = {}; keep.forEach(function (q) { seen[sig(q)] = 1; });
      var need = count - keep.length, batch = orig.call(this, makers, Math.max(need * 3, 30));
      batch.forEach(function (q) { if (keep.length < count && !bad(q) && !seen[sig(q)]) { seen[sig(q)] = 1; keep.push(q); } });
      out = keep.length >= count ? keep : keep.concat(out.filter(bad).slice(0, count - keep.length));
    }
    var good = out.filter(function (q) { return !bad(q); });
    while (good.length && good.length < count) good.push(good[good.length % good.length ? Math.floor(Math.random() * good.length) : 0]);
    return good.length >= count ? good.slice(0, count) : out;
  };

  /* warm-ups come from their own makers: keep them on topic as well */
  Object.keys(BAN).forEach(function (k) {
    var t = S.topics[k], w = t && t.steps.filter(function (x) { return x.id === 'warm' && x.make; })[0]; if (!w) return;
    var om = w.make, ban = BAN[k];
    w.make = function () {
      var best = null;
      for (var i = 0; i < 25; i++) { var set = om.apply(this, arguments); if (!Array.isArray(set)) return set; if (!set.some(function (q) { return ban[q.tag]; })) return set; best = set; }
      return best ? best.filter(function (q) { return !ban[q.tag]; }) : [];
    };
  });
})();
