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
  812: [['tilePattern', 'taxiFare', 'coordTreasure'], ['savingsGrow', 'tilePattern']],
  821: [['pctStory', 'savingsGrow', 'profitStory'], ['savingsGrow', 'profitStory']],
  822: [['multiStep', 'roundStory'], ['multiStep', 'estimateBill']],
  823: [['algStory', 'areaStory'], ['algStory', 'perimStory']],
  824: [['algStory', 'thinkNumber', 'shopMissing'], ['algStory', 'taxiFare', 'shopMissing']],
  825: [['ratioStory', 'cakeScale', 'speedStory'], ['ratioStory', 'unitStory', 'speedStory']],
  826: [['areaStory', 'perimStory'], ['mapStory', 'areaStory']],
  827: [['areaStory', 'perimStory'], ['areaStory', 'volumeStory']],
  828: [['symmetryLogo', 'coordTreasure'], ['coordTreasure', 'compassTurn']],
  829: [['chartRead', 'meanStory'], ['medianRange', 'meanStory']],
  830: [['chanceBag'], ['chanceBag', 'multiStep']],
  831: [['tilePattern', 'taxiFare'], ['tilePattern', 'savingsGrow']],
  832: [['taxiFare', 'coordTreasure'], ['taxiFare', 'savingsGrow']],
  841: [['areaStory', 'multiStep'], ['multiStep', 'algStory']],
  842: [['shopMissing', 'algStory'], ['shopMissing', 'taxiFare', 'algStory']],
  843: [['areaStory', 'algStory'], ['algStory', 'multiStep']],
  844: [['angleRamp', 'mapStory'], ['angleRamp', 'compassTurn']],
  845: [['mapStory', 'ratioStory'], ['mapStory', 'volumeStory']],
  846: [['volumeStory', 'cuboidBox'], ['volumeStory', 'multiStep']],
  847: [['medianRange', 'meanStory'], ['chartRead', 'medianRange']],
  848: [['chanceBag'], ['chanceBag', 'multiStep']],
  849: [['taxiFare', 'tilePattern'], ['savingsGrow', 'taxiFare']],
  850: [['algStory', 'speedStory'], ['algStory', 'taxiFare']],
  851: [['savingsGrow', 'profitStory'], ['savingsGrow', 'pctStory', 'profitStory']],
  852: [['compassTurn', 'mapStory'], ['mapStory', 'speedStory']]
};
function inR(n) { return (n >= 801 && n <= 812) || (n >= 821 && n <= 832) || (n >= 841 && n <= 852); }
var LEAD = { 801: 'place value, rounding, estimating, primes and factors in everyday settings', 802: 'fractions, decimals and percentages of amounts', 803: 'temperatures, number puzzles and order of operations', 804: 'sharing in ratios, recipes and profit', 805: 'formulae, number puzzles and patterns', 806: 'equations and formulae in real situations', 807: 'clock angles, ramps, symmetry and turns', 808: 'fencing, carpets, tanks and boxes', 809: 'surveys, charts, averages and chance', 810: 'chance and fair games', 811: 'best buys, profit, savings and journeys', 812: 'patterns, taxi fares, savings and map coordinates', 821: 'percentage change, interest and best buys', 822: 'powers, roots and big and small numbers', 823: 'algebra in areas and perimeters', 824: 'equations and inequalities in real situations', 825: 'ratio, proportion and rates', 826: 'right-angled triangles and distances', 827: 'circles, wheels and round objects', 828: 'symmetry, reflections and positions', 829: 'surveys, scatter graphs and averages', 830: 'chance and combined events', 831: 'patterns and nth terms', 832: 'straight-line graphs and costs', 841: 'surds, indices and exact answers', 842: 'two unknowns and simultaneous equations', 843: 'quadratics and areas', 844: 'angles of elevation and triangles', 845: 'scale, similarity and models', 846: 'volumes and surface areas of solids', 847: 'quartiles and box plots', 848: 'relative frequency and chance', 849: 'functions and graphs', 850: 'rearranging formulae', 851: 'interest, depreciation, tax and credit', 852: 'vectors, bearings and navigation' };
var orig = S.storyFor, cache = {};
S.storyFor = function (n) {
  n = Number(n);
  if (!inR(n)) return orig(n);
  if (cache[n]) return cache[n];
  var m = M[n], mk = function (list) { return list.filter(function (f) { return FAM[f]; }).map(function (f) { return F('story_' + f + '_sx', FAM[f](2)); }); };
  return (cache[n] = { easy: mk(m[0]), hard: mk(m[1]) });
};
Object.keys(S.topics).forEach(function (k) {
  var n = Number(k); if (!inR(n)) return;
  var t = S.topics[k]; if (!S.storyFor(n) || t.steps.some(function (s) { return s.id === 'practical'; })) return;
  t.steps.push({ id: 'practical', label: 'Real-time problem', type: 'quiz', tag: 'Step ' + (t.steps.length + 1) + ' · Real-time problems', title: 'Real-time problems', lead: '30 situation questions on ' + LEAD[n] + '. Think about which skill from this topic the problem needs. Low, Medium and High change how many steps each problem has.',
    make: function () { var m = []; m.storyMode = true; return H.buildPracticeSet(m, 30); } });
});
})();
