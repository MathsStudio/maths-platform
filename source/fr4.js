/* fr4.js: extra practice generators that fill coverage gaps (calendar, time zones, unit conversion, volume problems) */
(function () { 'use strict';
var H = Studio.h, K = Studio.kit, Q = K.Q, rnd = H.rnd, pick = H.pick, shuffle = H.shuffle, T = H.trimNum, G = FR.G;
var MON = [['January', 31], ['February', 28], ['March', 31], ['April', 30], ['May', 31], ['June', 30], ['July', 31], ['August', 31], ['September', 30], ['October', 31], ['November', 30], ['December', 31]];
function dayNo(m, d) { var t = 0, i; for (i = 0; i < m; i++) t += MON[i][1]; return t + d; }
G.genCalDays = function genCalDays() {
  var m = rnd(0, 9), d1 = rnd(3, MON[m][1] - 2), m2 = m + pick([1, 1, 2]), d2 = rnd(2, MON[m2][1] - 1), n = dayNo(m2, d2) - dayNo(m, d1);
  return Q({ tag: 'Days and dates', text: 'It is not a leap year. How many days are there from <b>' + d1 + ' ' + MON[m][0] + '</b> to <b>' + d2 + ' ' + MON[m2][0] + '</b>?',
    answer: String(n), hints: ['Count the days left in ' + MON[m][0] + ' first.', 'Then add the days in any whole months between, and then the days in the last month.'],
    explain: MON[m][0] + ' has ' + MON[m][1] + ' days, so there are ' + (MON[m][1] - d1) + ' days left in ' + MON[m][0] + '. ' + (m2 - m === 2 ? MON[m + 1][0] + ' adds ' + MON[m + 1][1] + '. ' : '') + 'Then add ' + d2 + ' days in ' + MON[m2][0] + '. The total is ' + n + ' days.' });
};
var ZONES = [['Paris', 1], ['Athens', 2], ['Dubai', 4], ['Delhi', 5], ['Tokyo', 9], ['New York', -5], ['Chicago', -6], ['Los Angeles', -8]];
function hhmm(h, m) { h = ((h % 24) + 24) % 24; return (h < 10 ? '0' : '') + h + ':' + (m < 10 ? '0' : '') + m; }
G.genTimeZone = function genTimeZone() {
  var z = pick(ZONES), h = rnd(7, 18), m = pick([0, 15, 30, 45]), ans = hhmm(h + z[1], m), a = Math.abs(z[1]);
  var wrong = [hhmm(h - z[1], m), hhmm(h + z[1] + 1, m), hhmm(h + z[1] - 1, m), hhmm(h + z[1] + 2, m)].filter(function (x) { return x !== ans; });
  var opts = [ans]; wrong.forEach(function (w) { if (opts.length < 4 && opts.indexOf(w) < 0) opts.push(w); });
  return Q({ type: 'mc', options: shuffle(opts), tag: 'Time zones', text: 'It is <b>' + hhmm(h, m) + '</b> in London. ' + z[0] + ' is <b>' + a + ' hour' + (a > 1 ? 's' : '') + (z[1] > 0 ? ' ahead of' : ' behind') + '</b> London. What time is it in ' + z[0] + '?',
    answer: ans, hints: [z[1] > 0 ? 'Ahead means later, so add the hours.' : 'Behind means earlier, so take away the hours.'],
    explain: hhmm(h, m) + (z[1] > 0 ? ' + ' : ' − ') + a + ' hour' + (a > 1 ? 's' : '') + ' = ' + ans + '.' });
};
G.genAreaUnit = function genAreaUnit() {
  var k = rnd(0, 3), v, q, a, ex;
  if (k === 0) { v = pick([2, 3, 4, 5, 0.5, 1.5, 2.5]); q = 'Change <b>' + v + ' m²</b> into cm².'; a = v * 10000; ex = '1 m = 100 cm, so 1 m² = 100 × 100 = 10,000 cm². ' + v + ' × 10,000 = ' + T(a) + '.'; }
  else if (k === 1) { v = pick([2, 3, 6, 8, 0.5, 4.5]); q = 'Change <b>' + v + ' cm²</b> into mm².'; a = v * 100; ex = '1 cm = 10 mm, so 1 cm² = 10 × 10 = 100 mm². ' + v + ' × 100 = ' + T(a) + '.'; }
  else if (k === 2) { v = pick([2, 3, 5, 0.5, 1.5]); q = 'Change <b>' + v + ' m³</b> into cm³.'; a = v * 1000000; ex = '1 m = 100 cm, so 1 m³ = 100 × 100 × 100 = 1,000,000 cm³. ' + v + ' × 1,000,000 = ' + T(a) + '.'; }
  else { v = pick([2, 3, 5, 8, 0.5, 2.5]); q = 'Change <b>' + v + ' litres</b> into cm³.'; a = v * 1000; ex = '1 litre = 1,000 cm³. ' + v + ' × 1,000 = ' + T(a) + '.'; }
  return Q({ tag: 'Units of area and volume', text: q, answer: String(a), hints: ['Think about how many of the small unit fit along one side first.', 'For area multiply that number by itself. For volume multiply it three times.'], explain: ex });
};
G.genTankLitres = function genTankLitres() {
  var l, w, h, tries = 0; do { l = pick([20, 25, 40, 50, 100]); w = pick([20, 40, 50]); h = pick([25, 30, 40, 50]); tries++; } while ((l * w * h) % 1000 !== 0 && tries < 60);
  var v = l * w * h; return Q({ tag: 'Units of area and volume', text: 'A tank is a cuboid <b>' + l + ' cm</b> long, <b>' + w + ' cm</b> wide and <b>' + h + ' cm</b> high. How many <b>litres</b> does it hold?',
    answer: String(v / 1000), hints: ['Find the volume in cm³ first.', '1 litre = 1,000 cm³, so divide by 1,000.'], explain: l + ' × ' + w + ' × ' + h + ' = ' + v + ' cm³. ' + v + ' ÷ 1,000 = ' + (v / 1000) + ' litres.' });
};
G.genBackVolume = function genBackVolume() {
  var r = rnd(2, 8), h = rnd(3, 12), v = Math.round(3.14 * r * r * h * 100) / 100;
  return Q({ tag: 'Working backwards', text: 'A cylinder has volume <b>' + T(v) + ' cm³</b> and radius <b>' + r + ' cm</b>. Find its height. Use π = 3.14.', answer: String(h),
    hints: ['The volume of a cylinder is π × r² × h.', 'Divide the volume by π × r² to find h.'], explain: 'π × r² = 3.14 × ' + r + '² = ' + T(Math.round(3.14 * r * r * 100) / 100) + '. h = ' + T(v) + ' ÷ ' + T(Math.round(3.14 * r * r * 100) / 100) + ' = ' + h + ' cm.' });
};
})();
