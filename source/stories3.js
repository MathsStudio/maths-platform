(function () { 'use strict';
var S = Studio, H = S.h, FAM = S.storyFam;
function F(name, fn) { Object.defineProperty(fn, 'name', { value: name }); return fn; }
var M = {
  801: [['roundStory', 'primeHouse', 'packBoxes'], ['multiStep', 'estimateBill', 'packBoxes']],
  802: [['fracStory', 'pctOfAmount', 'fracOfAmount'], ['pctStory', 'fracAdd', 'convertFDP']],
  803: [['thinkNumber', 'orderRace'], ['algStory', 'multiStep']],
  804: [['ratioStory', 'cakeScale'], ['groupStory', 'profitStory']],
  805: [['thinkNumber', 'taxiFare', 'tilePattern'], ['algStory', 'savingsGrow']],
  806: [['algStory', 'thinkNumber'], ['shopMissing', 'taxiFare', 'savingsGrow']],
  807: [['clockAngle', 'angleRamp', 'symmetryLogo'], ['angleRamp', 'compassTurn']],
  808: [['perimStory', 'areaStory'], ['volumeStory', 'cuboidBox']],
  809: [['chartRead', 'meanStory'], ['medianRange', 'meanStory']],
  810: [['chanceBag'], ['chanceBag', 'multiStep']],
  811: [['shopTotal', 'unitStory', 'speedStory'], ['profitStory', 'savingsGrow', 'speedStory']],
  812: [['tilePattern', 'taxiFare', 'coordTreasure'], ['savingsGrow', 'tilePattern']]
};
var LEAD = { 801: 'place value, rounding, estimating, primes and factors in everyday settings', 802: 'fractions, decimals and percentages of amounts', 803: 'temperatures, number puzzles and order of operations', 804: 'sharing in ratios, recipes and profit', 805: 'formulae, number puzzles and patterns', 806: 'equations and formulae in real situations', 807: 'clock angles, ramps, symmetry and turns', 808: 'fencing, carpets, tanks and boxes', 809: 'surveys, charts, averages and chance', 810: 'chance and fair games', 811: 'best buys, profit, savings and journeys', 812: 'patterns, taxi fares, savings and map coordinates' };
var orig = S.storyFor, cache = {};
S.storyFor = function (n) {
  n = Number(n);
  if (n < 801 || n > 812) return orig(n);
  if (cache[n]) return cache[n];
  var m = M[n], mk = function (list) { return list.filter(function (f) { return FAM[f]; }).map(function (f) { return F('story_' + f + '_s1', FAM[f](2)); }); };
  return (cache[n] = { easy: mk(m[0]), hard: mk(m[1]) });
};
Object.keys(S.topics).forEach(function (k) {
  var n = Number(k); if (n < 801 || n > 812) return;
  var t = S.topics[k]; if (!S.storyFor(n) || t.steps.some(function (s) { return s.id === 'practical'; })) return;
  t.steps.push({ id: 'practical', label: 'Real-time problem', type: 'quiz', tag: 'Step ' + (t.steps.length + 1) + ' · Real-time problems', title: 'Real-time problems', lead: '30 situation questions on ' + LEAD[n] + '. Think about which skill from this topic the problem needs. Low, Medium and High change how many steps each problem has.',
    make: function () { var m = []; m.storyMode = true; return H.buildPracticeSet(m, 30); } });
});
})();
