(function () { 'use strict';
var S = Studio, H = S.h, FAM = S.storyFam;
function F(name, fn) { Object.defineProperty(fn, 'name', { value: name }); return fn; }
var M = {
  801: [['roundStory', 'shopTotal', 'packBoxes'], ['estimateBill', 'multiStep', 'changeFrom']],
  802: [['thinkNumber', 'orderRace', 'primeHouse'], ['multiStep', 'packBoxes', 'primeHouse']],
  803: [['fracStory', 'fracOfAmount', 'shareGroups'], ['fracStory', 'fracAdd', 'cakeLeft']],
  804: [['pctOfAmount', 'pctStory', 'convertFDP'], ['pctStory', 'profitStory']],
  805: [['ratioStory', 'cakeScale'], ['ratioStory', 'groupStory']],
  806: [['shopTotal', 'changeFrom', 'unitStory', 'savings'], ['profitStory', 'savingsGrow', 'unitStory']],
  807: [['timeStory', 'speedStory'], ['speedStory', 'timeStory']],
  808: [['perimStory', 'areaStory'], ['volumeStory', 'cuboidBox', 'areaStory']],
  809: [['tilePattern', 'algStory', 'thinkNumber'], ['algStory', 'taxiFare', 'shopMissing']],
  810: [['clockAngle', 'angleRamp', 'compassTurn'], ['angleRamp', 'compassTurn']],
  811: [['symmetryLogo', 'coordTreasure'], ['coordTreasure', 'mapStory']],
  812: [['chartRead', 'chanceBag'], ['chartRead', 'chanceBag', 'meanStory']],
  821: [['multiStep', 'roundStory'], ['multiStep', 'fracAdd']],
  822: [['pctStory', 'savingsGrow', 'profitStory'], ['savingsGrow', 'profitStory']],
  823: [['ratioStory', 'cakeScale', 'speedStory'], ['ratioStory', 'unitStory', 'speedStory']],
  824: [['profitStory', 'savings', 'shopTotal'], ['savingsGrow', 'profitStory', 'multiStep']],
  825: [['timeStory', 'speedStory'], ['speedStory', 'timeStory', 'multiStep']],
  826: [['areaStory', 'perimStory'], ['volumeStory', 'cuboidBox']],
  827: [['algStory', 'thinkNumber', 'shopMissing'], ['algStory', 'taxiFare', 'shopMissing']],
  828: [['taxiFare', 'tilePattern'], ['taxiFare', 'tilePattern', 'savingsGrow']],
  829: [['compassTurn', 'angleRamp'], ['compassTurn', 'mapStory']],
  830: [['areaStory', 'mapStory'], ['areaStory', 'volumeStory']],
  831: [['mapStory', 'ratioStory'], ['mapStory', 'volumeStory']],
  832: [['chartRead', 'meanStory'], ['medianRange', 'meanStory', 'chanceBag']],
  841: [['multiStep', 'pctStory'], ['savingsGrow', 'multiStep']],
  842: [['savingsGrow', 'profitStory'], ['savingsGrow', 'pctStory', 'profitStory']],
  843: [['ratioStory', 'speedStory'], ['unitStory', 'speedStory', 'ratioStory']],
  844: [['volumeStory', 'cuboidBox'], ['volumeStory', 'areaStory']],
  845: [['areaStory', 'algStory'], ['algStory', 'multiStep']],
  846: [['algStory', 'thinkNumber', 'shopMissing'], ['algStory', 'speedStory']],
  847: [['taxiFare', 'coordTreasure'], ['taxiFare', 'savingsGrow']],
  848: [['shopMissing', 'algStory'], ['shopMissing', 'taxiFare', 'algStory']],
  849: [['angleRamp', 'areaStory'], ['angleRamp', 'mapStory']],
  850: [['areaStory', 'perimStory'], ['areaStory', 'volumeStory']],
  851: [['mapStory', 'compassTurn'], ['mapStory', 'volumeStory', 'angleRamp']],
  852: [['medianRange', 'chanceBag'], ['chartRead', 'meanStory', 'chanceBag']]
};
var LEAD = { 801: 'place value, rounding and calculating with whole numbers and decimals', 802: 'negative numbers, order of operations, factors, primes and roots', 803: 'fractions of amounts, mixed numbers and sharing', 804: 'percentages of amounts and fractions, decimals and percentages', 805: 'sharing in ratios and recipes', 806: 'prices, profit and loss, banking and exchange', 807: 'clock times, journeys and speed', 808: 'fencing, carpets, tanks and boxes', 809: 'patterns, formulae and simple equations', 810: 'angles, ramps and compass directions', 811: 'symmetry, shapes, coordinates and maps', 812: 'charts, tables and chance', 821: 'roots, standard form, fractions and tolerance', 822: 'percentage change and interest', 823: 'ratio and proportion', 824: 'pay, tax, insurance, bills and credit', 825: 'timetables, speed and journey graphs', 826: 'areas and volumes of everyday objects', 827: 'algebra, equations and inequalities', 828: 'straight-line costs and sequences', 829: 'bearings, scale and angles', 830: 'right-angled triangles and circles', 831: 'scale factors, models and enlargements', 832: 'surveys, scatter graphs and chance', 841: 'standard form, percentages and growth', 842: 'compound interest, tax and credit', 843: 'proportion, rates and speed', 844: 'solids, cylinders, cones and spheres', 845: 'brackets and factorising in areas', 846: 'equations, inequations and formulae', 847: 'straight-line graphs', 848: 'two unknowns and simultaneous equations', 849: 'Pythagoras and trigonometry in real settings', 850: 'circles, chords and sectors', 851: 'similar shapes, scale and bearings', 852: 'quartiles, box plots, standard deviation and probability' };
var orig = S.storyFor, cache = {};
function inR(n) { return (n >= 801 && n <= 812) || (n >= 821 && n <= 832) || (n >= 841 && n <= 852); }
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
  if (S.arrange) S.arrange(t);
});
})();
