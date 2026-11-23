/* qp5.js: median practice for P5 (topic 508), added through extraMakers; existing questions are kept */
(function () { 'use strict';
var S = Studio, H = S.h, K = S.kit, Q = K.Q, rnd = H.rnd, pick = H.pick, shuffle = H.shuffle, T = H.trimNum;
function gMedian() {
  var even = Math.random() < 0.35, n = even ? pick([4, 6]) : pick([5, 7]), vals = [], i;
  if (even) { var a0 = rnd(5, 18), b0 = a0 + 2 * rnd(0, 4); for (i = 0; i < n / 2 - 1; i++) vals.push(rnd(1, a0)); vals.push(a0, b0); for (i = 0; i < n / 2 - 1; i++) vals.push(rnd(b0, b0 + 10)); }
  else for (i = 0; i < n; i++) vals.push(rnd(2, 30));
  vals.sort(function (x, y) { return x - y; });
  var sorted = vals.slice(), shown = shuffle(vals.slice()), ans = even ? (sorted[n / 2 - 1] + sorted[n / 2]) / 2 : sorted[(n - 1) / 2];
  return Q({ tag: 'Median', text: 'Find the <b>median</b> of these numbers: <b>' + shown.join(', ') + '</b>.', answer: T(ans),
    hints: ['Put the numbers in order from smallest to largest.', even ? 'There are two middle numbers. The median is halfway between them.' : 'The median is the middle number.'],
    explain: 'In order: ' + sorted.join(', ') + '. ' + (even ? 'The two middle numbers are ' + sorted[n / 2 - 1] + ' and ' + sorted[n / 2] + '. Halfway between them is ' + T(ans) + '.' : 'The middle number is ' + T(ans) + '.') });
}
function gPlanElev() {
  var L = [['a cylinder standing on its circular base', 'a circle', 'a rectangle'], ['a cone standing on its circular base', 'a circle', 'a triangle'], ['a cuboid standing on its largest face', 'a rectangle', 'a rectangle'], ['a square-based pyramid', 'a square', 'a triangle'], ['a cube', 'a square', 'a square'], ['a sphere', 'a circle', 'a circle']], r = pick(L), askPlan = Math.random() < 0.5, view = askPlan ? 'plan (the view from above)' : 'front elevation (the view from the front)', ans = askPlan ? r[1] : r[2];
  var opts = ['a circle', 'a rectangle', 'a triangle', 'a square'].filter(function (x) { return x !== ans; }); opts = shuffle(opts).slice(0, 3); opts.push(ans);
  return Q({ type: 'mc', options: shuffle(opts), tag: 'Plans and elevations', text: 'What is the <b>' + view + '</b> of <b>' + r[0] + '</b>?', answer: ans,
    hints: ['Imagine looking at the solid from that direction.', askPlan ? 'The plan is what you see looking straight down from above.' : 'The front elevation is what you see looking straight at the front.'],
    explain: 'Looking ' + (askPlan ? 'down from above' : 'from the front') + ' at ' + r[0] + ' you see ' + ans + '.' });
}
function cap(ref) { var p = ref.split(':'); return function () { var src = S.kit.CAP[p[0]], g = ((src && src.gens) || []).filter(function (x) { return x.name === p[1]; })[0]; return g(); }; }
var MAP = { 508: [gMedian],
  704: ['821:genReverse', '802:genAsPct', '802:genPctChange', '811:genVat'].map(cap),
  706: ['805:genExpand', '806:genBrackets', '806:genBothSides'].map(cap),
  707: ['807:genParallel'].map(cap),
  708: ['809:genFreqMean', '848:genFair', '810:genCoins'].map(cap),
  710: ['801:genSquare', '801:genCube', '801:genSqrt', '822:genLaw', '822:genIndexNum'].map(cap),
  713: ['808:genCuboidSA', '812:genQuad'].map(cap).concat([gPlanElev]) };
var prev = S.extraMakers;
S.extraMakers = function (n, level) {
  var base = prev ? (prev(n, level) || []) : [], list = MAP[Number(n)];
  return list ? list.concat(base) : base;
};
})();
