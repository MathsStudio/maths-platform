/* Missing-number sums and long addition sums for the practice sets of P6, P7 and S1 */
(function () { 'use strict';
var S = Studio, H = S.h, K = S.kit, rnd = H.rnd, fmt = H.fmtInt;
var TOPICS = { 2: 2, 702: 3, 801: 4 }; /* topic number -> year level */
function range(lv, level) {
  var lo = lv === 2 ? 12 : lv === 3 ? 120 : 1200, hi = lv === 2 ? 99 : lv === 3 ? 999 : 9999;
  if (level === 'low') hi = Math.round(hi / 3); if (level === 'high') lo = Math.round(lo * 2);
  return [lo, Math.max(hi, lo + 20)];
}
function nm(f, name) { Object.defineProperty(f, 'name', { value: name }); return f; }
function mk(kind, lv, level) {
  return nm(function () {
    var r = range(lv, level), a = rnd(r[0], r[1]), b = rnd(r[0], r[1]), c = rnd(r[0], r[1]), d = rnd(r[0], r[1]), t, q;
    if (kind === 'sumR') { t = a + b;
      return K.Q({ tag: 'Missing number', text: 'Find the missing number: <b>' + fmt(a) + ' + ? = ' + fmt(t) + '</b>', answer: b,
        hints: ['Adding and taking away undo each other.', 'Take ' + fmt(a) + ' away from ' + fmt(t) + ' to find the missing part.'],
        explain: fmt(t) + ' − ' + fmt(a) + ' = ' + fmt(b) + '. Check: ' + fmt(a) + ' + ' + fmt(b) + ' = ' + fmt(t) + '.' }); }
    if (kind === 'sumL') { t = a + b;
      return K.Q({ tag: 'Missing number', text: 'Find the missing number: <b>? + ' + fmt(b) + ' = ' + fmt(t) + '</b>', answer: a,
        hints: ['The missing number is a part of the total.', 'Take ' + fmt(b) + ' away from ' + fmt(t) + '.'],
        explain: fmt(t) + ' − ' + fmt(b) + ' = ' + fmt(a) + '. Check: ' + fmt(a) + ' + ' + fmt(b) + ' = ' + fmt(t) + '.' }); }
    if (kind === 'sumM') { t = a + b + c;
      return K.Q({ tag: 'Missing number', text: 'Find the missing number: <b>' + fmt(a) + ' + ? + ' + fmt(c) + ' = ' + fmt(t) + '</b>', answer: b,
        hints: ['First add the two numbers you can see: ' + fmt(a) + ' + ' + fmt(c) + '.', 'Then take that away from ' + fmt(t) + '.'],
        explain: fmt(a) + ' + ' + fmt(c) + ' = ' + fmt(a + c) + '. Then ' + fmt(t) + ' − ' + fmt(a + c) + ' = ' + fmt(b) + '.' }); }
    if (kind === 'sum3') { t = a + b + c;
      return K.Q({ tag: 'Adding three numbers', text: 'Work out <b>' + fmt(a) + ' + ' + fmt(b) + ' + ' + fmt(c) + '</b>', answer: t,
        hints: ['Add the first two numbers, then add the third.', 'Look for numbers that are easy to join, such as ones that make a round number.'],
        explain: fmt(a) + ' + ' + fmt(b) + ' = ' + fmt(a + b) + '. Then ' + fmt(a + b) + ' + ' + fmt(c) + ' = ' + fmt(t) + '.' }); }
    t = a + b + c + d;
    return K.Q({ tag: 'Adding four numbers', text: 'Work out <b>' + fmt(a) + ' + ' + fmt(b) + ' + ' + fmt(c) + ' + ' + fmt(d) + '</b>', answer: t,
      hints: ['Add two numbers at a time. Do the first pair and the second pair.', 'Then add the two answers together.'],
      explain: fmt(a) + ' + ' + fmt(b) + ' = ' + fmt(a + b) + ' and ' + fmt(c) + ' + ' + fmt(d) + ' = ' + fmt(c + d) + '. Then ' + fmt(a + b) + ' + ' + fmt(c + d) + ' = ' + fmt(t) + '.' });
  }, kind);
}
var prev = S.extraMakers;
S.extraMakers = function (n, level) {
  var base = prev ? (prev(n, level) || []) : [], lv = TOPICS[Number(n)];
  if (!lv) return base;
  return ['sumR', 'sumL', 'sumM', 'sum3', 'sum4'].map(function (k) { return mk(k, lv, level); }).concat(base);
};
})();
