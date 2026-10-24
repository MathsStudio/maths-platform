(function () { 'use strict';
var H = Studio.h, K = Studio.kit, Q = K.Q, rnd = H.rnd, pick = H.pick, shuffle = H.shuffle, gcd = H.gcd, T = H.trimNum;
function fs(n, d) { var g = gcd(Math.abs(n), Math.abs(d)); n /= g; d /= g; if (d < 0) { n = -n; d = -d; } return d === 1 ? String(n) : n + '/' + d; }
function ss(n) { return n < 0 ? SK.sg(String(n)) : String(n); }
function r2(x) { return Math.round(x * 100) / 100; }
function mcq(tag, text, ans, wrongs, hints, explain) { var w = wrongs.map(String).filter(function (x, i, a) { return x !== String(ans) && a.indexOf(x) === i; }).slice(0, 3); return K.Q({ tag: tag, type: 'mc', text: text, options: shuffle(w.concat([String(ans)])), answer: String(ans), hints: hints, explain: explain }); }
function warm() { return K.warmFrom([
 function () { var a = rnd(3, 12), b = rnd(3, 12); return Q({ tag: 'Mental maths', text: 'What is <b>' + a + ' × ' + b + '</b>?', answer: String(a * b), hints: ['Use your times tables.', 'Break one number into parts.'], explain: a + ' × ' + b + ' = ' + a * b + '.' }); },
 function () { var a = rnd(2, 9) * 10; return Q({ tag: 'Mental maths', text: 'What is <b>10% of ' + a * 5 + '</b>?', answer: T(a / 2), hints: ['Divide by 10.', 'Move the digits one place.'], explain: a * 5 + ' ÷ 10 = ' + T(a / 2) + '.' }); },
 function () { var a = rnd(2, 9), b = rnd(2, 9); return Q({ tag: 'Mental maths', text: 'What is <b>' + ss(-a) + ' + ' + b + '</b>?', answer: String(b - a), hints: ['Think of a number line.', 'Start at the first number and move.'], explain: ss(-a) + ' + ' + b + ' = ' + ss(b - a) + '.' }); },
 function () { var a = rnd(2, 12); return Q({ tag: 'Mental maths', text: 'What is <b>' + a + '²</b>?', answer: String(a * a), hints: ['Multiply the number by itself.', 'Use your times tables.'], explain: a + ' × ' + a + ' = ' + a * a + '.' }); }]); }
function esc(t) { return typeof t === 'string' ? t.replace(/ < /g, ' &lt; ').replace(/ > /g, ' &gt; ').replace(/ <= /g, ' &le; ') : t; }
function deep(v) { return Array.isArray(v) ? v.map(deep) : typeof v === 'string' ? esc(v) : v; }
var Q0 = K.Q; K.Q = function (o) { if (o.type !== 'mc') { } o.text = esc(o.text); o.explain = esc(o.explain); if (o.hints) o.hints = o.hints.map(esc); return Q0(o); };
['X', 'XV'].forEach(function (n) { var f = SK[n]; SK[n] = function () { var a = [].slice.call(arguments).map(function (x) { return typeof x === 'function' ? x : deep(x); }); return f.apply(this, a); }; });
window.SK2 = { fs: fs, ss: ss, r2: r2, mcq: mcq, warm: warm };
})();
