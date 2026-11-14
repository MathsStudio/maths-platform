/* stories_s.js: extra Real-life problem families for S1 to S3 topics whose real-life sets were thin
   (Pythagoras, trigonometry, circles, solids, similarity, rates, ratio). Adds to the families each topic
   already has; nothing is removed. */
(function () { 'use strict';
var S = Studio, H = S.h, Q = S.kit.Q, rnd = H.rnd, pick = H.pick, shuffle = H.shuffle, T = H.trimNum, FAM = S.storyFam;
if (!FAM || !S.storyFor) return;
var NM = ['Maya', 'Ben', 'Ali', 'Priya', 'Sam', 'Kira', 'Leo', 'Zara', 'Omar', 'Isla'];
function QS(o) { o.tag = o.tag || 'Real-life problem'; return Q(o); }
function d1(x) { return T(Math.round(x * 10) / 10); }
function uniq(a) { return a.filter(function (x, i) { return a.indexOf(x) === i; }); }
function MC(o, answer, wrongs) { var w = uniq(wrongs.map(String)).filter(function (x) { return x !== String(answer); }); o.type = 'mc'; o.answer = String(answer); o.options = shuffle(w.slice(0, 3).concat([String(answer)])); return QS(o); }
var TR = [[3, 4, 5], [5, 12, 13], [8, 15, 17], [7, 24, 25], [6, 8, 10], [9, 12, 15], [20, 21, 29]];

FAM.pythagStory = function () { return function () {
  var t = pick(TR), k = pick([1, 1, 2]), a = t[0] * k / (k === 2 ? 1 : 1), b = t[1] * k, c = t[2] * k, s = rnd(0, 3), nm = pick(NM);
  a = t[0] * k;
  if (s === 0) return QS({ text: 'A ladder <b>' + c + ' m</b> long leans against a wall. Its foot is <b>' + a + ' m</b> from the wall. How high up the wall does it reach? (m)', answer: String(b), hints: ['The ladder is the hypotenuse.', 'Height² = ' + c + '² − ' + a + '².'], explain: c * c + ' − ' + a * a + ' = ' + b * b + ', and √' + b * b + ' = ' + b + ' m.' });
  if (s === 1) return QS({ text: 'A rectangular field is <b>' + a * 10 + ' m</b> by <b>' + b * 10 + ' m</b>. ' + nm + ' walks straight across the diagonal. How far is that? (m)', answer: String(c * 10), hints: ['The diagonal is the hypotenuse.', 'd² = ' + a * 10 + '² + ' + b * 10 + '².'], explain: (a * 10) * (a * 10) + ' + ' + (b * 10) * (b * 10) + ' = ' + (c * 10) * (c * 10) + ', and √' + (c * 10) * (c * 10) + ' = ' + c * 10 + ' m.' });
  if (s === 2) return QS({ text: 'A ship sails <b>' + a + ' km</b> north, then <b>' + b + ' km</b> east. How far is it from where it started, in a straight line? (km)', answer: String(c), hints: ['North and east meet at a right angle.', 'd² = ' + a + '² + ' + b + '².'], explain: a * a + ' + ' + b * b + ' = ' + c * c + ', so the distance is ' + c + ' km.' });
  var w = rnd(6, 14), h = rnd(4, 9), d = Math.sqrt(w * w + h * h);
  return QS({ text: 'A TV screen is <b>' + w * 10 + ' cm</b> wide and <b>' + h * 10 + ' cm</b> tall. Screens are sold by the diagonal. How long is the diagonal, to 1 decimal place? (cm)', answer: d1(d * 10), hints: ['Use Pythagoras: d² = w² + h².', 'Square root at the end, then round.'], explain: (w * 10) * (w * 10) + ' + ' + (h * 10) * (h * 10) + ' = ' + (w * w + h * h) * 100 + ', and √' + (w * w + h * h) * 100 + ' ≈ ' + d1(d * 10) + ' cm.' });
}; };

FAM.trigStory = function () { return function () {
  var s = rnd(0, 2), R = Math.PI / 180;
  if (s === 0) { var L = rnd(20, 60), a = pick([25, 30, 35, 40, 50, 55, 60]); return QS({ text: 'A kite string is <b>' + L + ' m</b> long and makes an angle of <b>' + a + '°</b> with the flat ground. How high is the kite, to 1 decimal place? (m)', answer: d1(L * Math.sin(a * R)), hints: ['The string is the hypotenuse; the height is opposite the angle.', 'Use SOH: opp = hyp × sin ' + a + '°.'], explain: L + ' × sin ' + a + '° = ' + d1(L * Math.sin(a * R)) + ' m.' }); }
  if (s === 1) { var d = rnd(20, 80), e = pick([20, 25, 30, 35, 40, 45]); return QS({ text: 'Standing <b>' + d + ' m</b> from a tower, the angle of elevation to the top is <b>' + e + '°</b>. How tall is the tower, to 1 decimal place? (m)', answer: d1(d * Math.tan(e * R)), hints: ['The ' + d + ' m is adjacent to the angle; the height is opposite.', 'Use TOA: opp = adj × tan ' + e + '°.'], explain: d + ' × tan ' + e + '° = ' + d1(d * Math.tan(e * R)) + ' m.' }); }
  var h = rnd(1, 4) * 0.25 + 0.25, run = rnd(3, 10), ang = Math.round(Math.atan(h / run) / R);
  return QS({ text: 'A wheelchair ramp rises <b>' + T(h) + ' m</b> over a horizontal distance of <b>' + run + ' m</b>. What angle does it make with the ground, to the nearest degree?', answer: String(ang), hints: ['You know the opposite and the adjacent sides.', 'Use tan⁻¹(' + T(h) + ' ÷ ' + run + ').'], explain: 'tan⁻¹(' + T(h) + ' ÷ ' + run + ') ≈ ' + ang + '°.' });
}; };

FAM.circleStory = function () { return function () {
  var s = rnd(0, 3), nm = pick(NM);
  if (s === 0) { var d = pick([50, 60, 64, 70, 72]), c = 3.14 * d; return QS({ text: nm + '’s bike wheel has a diameter of <b>' + d + ' cm</b>. How far does the bike move in one full turn of the wheel? Use π = 3.14. (cm)', answer: d1(c), hints: ['One turn rolls out the circumference.', 'C = πd.'], explain: '3.14 × ' + d + ' = ' + d1(c) + ' cm.' }); }
  if (s === 1) { var r = rnd(2, 9) * 10, A = 3.14 * r * r; return QS({ text: 'A round rug has a radius of <b>' + r + ' cm</b>. What is its area? Use π = 3.14. (cm²)', answer: d1(A), hints: ['A = πr².', 'Square the radius first.'], explain: '3.14 × ' + r + '² = 3.14 × ' + r * r + ' = ' + d1(A) + ' cm².' }); }
  if (s === 2) { var R2 = rnd(3, 8), runs = rnd(2, 5), C = 2 * 3.14 * R2 * runs; return QS({ text: 'A circular running track has a radius of <b>' + R2 * 10 + ' m</b>. ' + nm + ' runs <b>' + runs + ' laps</b>. How far is that? Use π = 3.14. (m)', answer: d1(C * 10), hints: ['One lap is the circumference, C = 2πr.', 'Multiply by the number of laps.'], explain: '2 × 3.14 × ' + R2 * 10 + ' = ' + d1(2 * 3.14 * R2 * 10) + ' m per lap; × ' + runs + ' = ' + d1(C * 10) + ' m.' }); }
  var rr = rnd(10, 18), ang = pick([45, 60, 72, 90, 120]), sec = ang / 360 * 3.14 * rr * rr;
  return QS({ text: 'A pizza with radius <b>' + rr + ' cm</b> is cut into equal slices. One slice has an angle of <b>' + ang + '°</b> at the centre. What is the area of one slice, to 1 decimal place? Use π = 3.14. (cm²)', answer: d1(sec), hints: ['A slice is a sector: a fraction ' + ang + '/360 of the whole circle.', 'Sector area = ' + ang + '/360 × πr².'], explain: ang + '/360 × 3.14 × ' + rr * rr + ' = ' + d1(sec) + ' cm².' });
}; };

FAM.chordStory = function () { return function () {
  var t = pick([[5, 3, 4], [13, 5, 12], [10, 6, 8], [17, 8, 15], [25, 7, 24]]), s = rnd(0, 1);
  if (s === 0) return QS({ text: 'A round table top has a radius of <b>' + t[0] + ' dm</b>. A straight edge is cut off it, <b>' + t[1] + ' dm</b> from the centre. How long is the cut edge (the chord)? (dm)', answer: String(2 * t[2]), hints: ['A line from the centre at right angles to a chord cuts it in half.', 'Half-chord² = ' + t[0] + '² − ' + t[1] + '².'], explain: t[0] * t[0] + ' − ' + t[1] * t[1] + ' = ' + t[2] * t[2] + ', so half the chord is ' + t[2] + ' dm and the chord is ' + 2 * t[2] + ' dm.' });
  return QS({ text: 'A tunnel has a circular cross-section of radius <b>' + t[0] + ' m</b>. The flat road across it is <b>' + 2 * t[2] + ' m</b> wide. How far is the road below the centre of the circle? (m)', answer: String(t[1]), hints: ['The road is a chord. Half of it is ' + t[2] + ' m.', 'distance² = ' + t[0] + '² − ' + t[2] + '².'], explain: t[0] * t[0] + ' − ' + t[2] * t[2] + ' = ' + t[1] * t[1] + ', so the distance is ' + t[1] + ' m.' });
}; };

FAM.solidStory = function () { return function () {
  var s = rnd(0, 3);
  if (s === 0) { var r = rnd(3, 8) * 5, h = rnd(4, 12) * 10, V = 3.14 * r * r * h; return QS({ text: 'A cylindrical water tank has radius <b>' + r + ' cm</b> and height <b>' + h + ' cm</b>. How many litres does it hold, to the nearest litre? Use π = 3.14 and 1 litre = 1,000 cm³.', answer: String(Math.round(V / 1000)), hints: ['V = πr²h.', 'Then divide by 1,000 to change cm³ to litres.'], explain: '3.14 × ' + r * r + ' × ' + h + ' = ' + d1(V) + ' cm³ ≈ ' + Math.round(V / 1000) + ' litres.' }); }
  if (s === 1) { var r1 = rnd(2, 4), h1 = rnd(8, 14), V1 = 3.14 * r1 * r1 * h1 / 3; return QS({ text: 'An ice-cream cone is <b>' + h1 + ' cm</b> deep with a top radius of <b>' + r1 + ' cm</b>. What is its volume, to 1 decimal place? Use π = 3.14. (cm³)', answer: d1(V1), hints: ['A cone is one third of a cylinder with the same base and height.', 'V = ⅓πr²h.'], explain: '⅓ × 3.14 × ' + r1 * r1 + ' × ' + h1 + ' = ' + d1(V1) + ' cm³.' }); }
  if (s === 2) { var r2 = pick([3, 6, 9, 11, 12]), V2 = 4 / 3 * 3.14 * r2 * r2 * r2; return QS({ text: 'A ball has a radius of <b>' + r2 + ' cm</b>. What is its volume, to the nearest cm³? Use π = 3.14.', answer: String(Math.round(V2)), hints: ['V = ⁴⁄₃πr³.', 'Cube the radius first.'], explain: '⁴⁄₃ × 3.14 × ' + r2 * r2 * r2 + ' ≈ ' + Math.round(V2) + ' cm³.' }); }
  var a = rnd(3, 9), b = rnd(3, 9), c = rnd(2, 6), SA = 2 * (a * b + a * c + b * c);
  return QS({ text: 'A gift box is a cuboid <b>' + a + ' dm</b> by <b>' + b + ' dm</b> by <b>' + c + ' dm</b>. How much wrapping paper covers it exactly, with no overlap? (dm²)', answer: String(SA), hints: ['A cuboid has three pairs of matching faces.', 'SA = 2(lb + lh + bh).'], explain: '2 × (' + a * b + ' + ' + a * c + ' + ' + b * c + ') = ' + SA + ' dm².' });
}; };

FAM.unitsAreaStory = function () { return function () {
  var s = rnd(0, 2);
  if (s === 0) { var m = rnd(2, 9); return QS({ text: 'A wall is <b>' + m + ' m²</b>. The paint chart gives coverage in cm². How many cm² is the wall?', answer: String(m * 10000), hints: ['1 m = 100 cm, so 1 m² = 100 × 100 cm².', '1 m² = 10,000 cm².'], explain: m + ' × 10,000 = ' + m * 10000 + ' cm².' }); }
  if (s === 1) { var L = rnd(2, 12) * 500; return QS({ text: 'A fish tank holds <b>' + (H.fmtInt ? H.fmtInt(L * 10) : String(L * 10)) + ' cm³</b> of water. How many litres is that?', answer: T(L / 100), hints: ['1 litre = 1,000 cm³.', 'Divide by 1,000.'], explain: L * 10 + ' ÷ 1,000 = ' + T(L / 100) + ' litres.' }); }
  var m3 = rnd(2, 6); return QS({ text: 'A skip holds <b>' + m3 + ' m³</b> of rubble. How many litres is that?', answer: String(m3 * 1000), hints: ['1 m³ = 1,000 litres.', 'A cube 1 m on each side holds 1,000 litres.'], explain: m3 + ' × 1,000 = ' + m3 * 1000 + ' litres.' });
}; };

FAM.similarStory = function () { return function () {
  var s = rnd(0, 2), nm = pick(NM);
  if (s === 0) { var w = pick([6, 8, 10, 12, 15]), h = pick([4, 5, 6, 9, 10]), k = pick([1.5, 2, 2.5, 3]); return QS({ text: 'A photo is <b>' + w + ' cm</b> wide and <b>' + h + ' cm</b> tall. It is enlarged so the width becomes <b>' + T(w * k) + ' cm</b>. How tall is the enlarged photo? (cm)', answer: T(h * k), hints: ['Find the scale factor: ' + T(w * k) + ' ÷ ' + w + '.', 'Multiply the height by the same factor.'], explain: 'k = ' + T(k) + ', so ' + h + ' × ' + T(k) + ' = ' + T(h * k) + ' cm.' }); }
  if (s === 1) { var p = rnd(2, 4), sh = rnd(2, 5), tsh = sh * rnd(3, 6); return QS({ text: 'At the same time of day, a <b>' + p + ' m</b> post casts a <b>' + sh + ' m</b> shadow. A tree casts a <b>' + tsh + ' m</b> shadow. How tall is the tree? (m)', answer: T(p * tsh / sh), hints: ['The post and tree make similar triangles with their shadows.', 'Scale factor = ' + tsh + ' ÷ ' + sh + '.'], explain: 'k = ' + T(tsh / sh) + ', so ' + p + ' × ' + T(tsh / sh) + ' = ' + T(p * tsh / sh) + ' m.' }); }
  var sc = pick([20, 25, 40, 50]), real = rnd(3, 9) * sc / 10; return QS({ text: nm + ' builds a model car at a scale of <b>1 : ' + sc + '</b>. The real car is <b>' + T(real) + ' m</b> long. How long is the model, in cm?', answer: T(real * 100 / sc), hints: ['Change the real length to cm first: ' + T(real * 100) + ' cm.', 'Then divide by ' + sc + '.'], explain: T(real * 100) + ' ÷ ' + sc + ' = ' + T(real * 100 / sc) + ' cm.' });
}; };

FAM.rateStory = function () { return function () {
  var s = rnd(0, 3);
  if (s === 0) { var dn = pick([[2.7, 'aluminium'], [7.9, 'steel'], [0.9, 'ice'], [11.3, 'lead']]), v = rnd(5, 40); return QS({ text: 'A block of ' + dn[1] + ' has a volume of <b>' + v + ' cm³</b>. Its density is <b>' + dn[0] + ' g/cm³</b>. What is its mass? (g)', answer: T(Math.round(dn[0] * v * 10) / 10), hints: ['Mass = density × volume.', T(dn[0]) + ' × ' + v + '.'], explain: T(dn[0]) + ' × ' + v + ' = ' + T(Math.round(dn[0] * v * 10) / 10) + ' g.' }); }
  if (s === 1) { var ms = pick([5, 10, 15, 20, 25, 30]); return QS({ text: 'A cyclist travels at <b>' + ms + ' m/s</b>. What is that in km/h?', answer: T(ms * 3.6), hints: ['In one hour there are 3,600 seconds: ' + ms + ' × 3,600 m.', 'Then ÷ 1,000 for km. Together: × 3.6.'], explain: ms + ' × 3.6 = ' + T(ms * 3.6) + ' km/h.' }); }
  if (s === 2) { var kmh = pick([36, 54, 72, 90, 108]); return QS({ text: 'A train travels at <b>' + kmh + ' km/h</b>. What is that in metres per second?', answer: T(kmh / 3.6), hints: ['× 1,000 for metres, ÷ 3,600 for seconds.', 'Together: ÷ 3.6.'], explain: kmh + ' ÷ 3.6 = ' + T(kmh / 3.6) + ' m/s.' }); }
  var lpm = rnd(6, 15), mins = rnd(3, 9) * 5; return QS({ text: 'A tap fills a bath at <b>' + lpm + ' litres per minute</b>. How many litres are in the bath after <b>' + mins + ' minutes</b>?', answer: String(lpm * mins), hints: ['Rate × time.', lpm + ' × ' + mins + '.'], explain: lpm + ' × ' + mins + ' = ' + lpm * mins + ' litres.' });
}; };

FAM.proportionStory = function () { return function () {
  var s = rnd(0, 2);
  if (s === 0) { var w = rnd(2, 6), d = rnd(3, 12), w2 = w * pick([2, 3]); if ((w * d) % w2) d = w2; return QS({ text: '<b>' + w + ' painters</b> take <b>' + d + ' days</b> to paint a school. How long would <b>' + w2 + ' painters</b> take, working at the same rate? (days)', answer: T(w * d / w2), hints: ['More painters means fewer days: this is inverse proportion.', 'Total work = ' + w + ' × ' + d + ' painter-days.'], explain: w * d + ' painter-days ÷ ' + w2 + ' = ' + T(w * d / w2) + ' days.' }); }
  if (s === 1) { var a = rnd(1, 4), b = rnd(2, 5), c = rnd(2, 6); return MC({ text: 'In a club, the ratio of juniors to seniors is <b>' + a + ' : ' + b + '</b>, and seniors to coaches is <b>' + b + ' : ' + c + '</b>. What is juniors : seniors : coaches?', hints: ['The seniors number is ' + b + ' in both ratios.', 'Put them together through the middle term.'], explain: 'Both use ' + b + ' for seniors, so the ratio is ' + a + ' : ' + b + ' : ' + c + '.' }, a + ' : ' + b + ' : ' + c, [a + ' : ' + c + ' : ' + b, b + ' : ' + a + ' : ' + c, (a + b) + ' : ' + b + ' : ' + c, a + ' : ' + (b * 2) + ' : ' + c]); }
  var n = rnd(3, 8), cost = n * rnd(3, 9) * 0.5, m = n + rnd(2, 6); return QS({ text: '<b>' + n + ' tickets</b> cost <b>£' + cost.toFixed(2) + '</b>. How much would <b>' + m + ' tickets</b> cost, in £?', answer: (cost / n * m).toFixed(2), hints: ['Find the cost of one ticket first.', 'Then multiply by ' + m + '.'], explain: '£' + cost.toFixed(2) + ' ÷ ' + n + ' = £' + (cost / n).toFixed(2) + ' each; × ' + m + ' = £' + (cost / n * m).toFixed(2) + '.' });
}; };

var ADD = {
  808: [['triangleGarden', 'squareTiles'], ['boxVolume', 'unitsAreaStory']],
  823: [['proportionStory'], ['proportionStory', 'rateStory']],
  826: [['unitsAreaStory', 'circleStory'], ['solidStory', 'unitsAreaStory', 'circleStory']],
  830: [['pythagStory', 'circleStory'], ['pythagStory', 'circleStory', 'trigStory']],
  831: [['similarStory', 'scaleModel'], ['similarStory']],
  843: [['rateStory', 'proportionStory'], ['rateStory', 'proportionStory']],
  844: [['solidStory'], ['solidStory', 'unitsAreaStory']],
  849: [['pythagStory', 'trigStory'], ['trigStory', 'pythagStory']],
  850: [['circleStory', 'chordStory'], ['chordStory', 'circleStory']],
  851: [['similarStory'], ['similarStory', 'trigStory']]
};
function F(name, fn) { Object.defineProperty(fn, 'name', { value: name }); return fn; }
var orig = S.storyFor, cache = {};
S.storyFor = function (n) {
  n = Number(n); var base = orig(n);
  if (!ADD[n] || !base) return base;
  if (cache[n]) return cache[n];
  var mk = function (list) { return list.filter(function (f) { return FAM[f]; }).map(function (f) { return F('story_' + f + '_sx', FAM[f](2)); }); };
  return (cache[n] = { easy: base.easy.concat(mk(ADD[n][0])), hard: base.hard.concat(mk(ADD[n][1])) });
};
})();
