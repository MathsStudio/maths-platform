/* practice_extra.js: Let's Practise questions for skills a topic now teaches in its Watch lessons but its
   question bank did not ask about yet (mainly S1 to S3). The topic's own questions all stay: every fourth
   question in a set is one of the new kinds, so each set still holds 20. */
(function () {
  'use strict';
  var S = Studio, BT = window.BT; if (!BT || !BT.ACTGEN) return;
  var G = BT.ACTGEN;
  var TAG = { x_neg: 'Negative numbers', x_decx: 'Decimals to three places', x_prime: 'Prime numbers', x_factors: 'Factors and multiples', x_subst: 'Substitution', x_nth: 'nth term', x_terms: 'Simplifying terms', x_poly: 'Polygons', x_scale: 'Linear scale factor', x_symm: 'Symmetry', x_faces: '3D objects', x_areaunits: 'Units of area and volume', x_speed: 'Speed, distance and time', x_sqcube: 'Powers and roots', x_rounddec: 'Rounding to decimal places', x_datatype: 'Types of data', x_perim: 'Perimeter', x_pctchange: 'Percentage change' };
  var MAP = {
    801: [['x_rounddec', 2]], 807: [['x_speed', 0]], 809: [['x_nth', 0], ['x_terms', 0]], 811: [['x_poly', 1], ['x_symm', 0]], 812: [['x_datatype', 0]], 813: [['x_faces', 0]],
    821: [['x_neg', 0], ['x_decx', 0], ['x_prime', 2], ['x_factors', 2]], 826: [['x_faces', 0], ['x_areaunits', 0]],
    841: [['x_sqcube', 2], ['x_pctchange', 0]], 845: [['x_subst', 0], ['x_nth', 0], ['x_terms', 0]], 851: [['x_poly', 2], ['x_scale', 0]], 853: [['x_symm', 0]]
  };
  function toQ(id, r) {
    var opts = [r.answer].concat(r.wrong || []).map(String).filter(function (x, i, a) { return a.indexOf(x) === i; }).slice(0, 4);
    var first = String(r.explain).split('. ')[0];
    return { type: 'mc', tag: TAG[id] || 'Practice', text: r.q, pic: r.vis || '', answer: String(r.answer), options: r.keepOrder ? BT.orderOpts(opts, r.keepOrder) : S.h.shuffle(opts),
      hints: [first.length < 120 ? 'Think about this: ' + first.replace(/\.$/, '') + '.' : 'Look back at the Watch lesson for this idea.', 'Work it out step by step, then check your answer makes sense.'], explain: r.explain };
  }
  Object.keys(MAP).forEach(function (k) {
    var n = Number(k), t = S.topics[n]; if (!t) return;
    var st = t.steps.filter(function (s) { return s.id === 'practise'; })[0]; if (!st || st.__extra) return;
    var orig = st.make, list = MAP[k].filter(function (m) { return G[m[0]]; }); if (!list.length) return;
    st.__extra = true;
    st.make = function () {
      var a = orig.apply(this, arguments), j = 0;
      for (var i = 3; i < a.length; i += 4) { var m = list[j % list.length]; j++; try { a[i] = toQ(m[0], G[m[0]].mk(m[1])(i)); } catch (e) { /* keep the original question */ } }
      return a;
    };
  });
})();
