/* lessons_lib.js: shared helpers for writing Watch lessons, so every lesson file is written the same way.
   BT.L.use(n, titles, extra) builds a topic's Watch lesson from lessons already written (by title) plus new ones. */
(function () {
  'use strict';
  var BT = window.BT; if (!BT || !BT.lessons) return;
  var L = BT.L = {};
  L.SC = function (h, sub, steps) { return { h: h, sub: sub, steps: steps }; };
  L.st = function (say, html) { return { say: say, html: html || '' }; };
  L.SW = '<!--swap-->';
  L.F = function (n, d, col) { return '<span style="display:inline-flex;flex-direction:column;align-items:center;line-height:1;font-weight:700;color:' + (col || 'inherit') + '"><span>' + n + '</span><span style="border-top:3px solid currentColor;padding-top:2px;min-width:1.2em;text-align:center">' + d + '</span></span>'; };
  L.BIG = function (inner) { return '<div style="font-size:40px;display:flex;align-items:center;gap:14px;justify-content:center;flex-wrap:wrap">' + inner + '</div>'; };
  L.rec = function (title, say, points) { return L.SC('Let’s recap', title, [L.st(say, BT.sv.list(points))]); };
  /* the spoken working, turned back into calculations: "twelve divided by three is four" becomes 12 ÷ 3 = 4 */
  var UN = { zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, eleven: 11, twelve: 12, thirteen: 13, fourteen: 14, fifteen: 15, sixteen: 16, seventeen: 17, eighteen: 18, nineteen: 19 };
  var TN = { twenty: 20, thirty: 30, forty: 40, fifty: 50, sixty: 60, seventy: 70, eighty: 80, ninety: 90 };
  var OPS = { plus: '+', minus: '−', times: '×', 'divided by': '÷', 'multiplied by': '×', 'take away': '−', 'subtract': '−', 'add': '+', 'to the power of': '^' };
  var EQ = { is: 1, equals: 1, makes: 1, gives: 1, leaves: 1, are: 1 };
  var SKIP = { pounds: 1, pound: 1, pence: 1, euros: 1, euro: 1, dollars: 1, dollar: 1, metres: 1, metre: 1, centimetres: 1, kilometres: 1, grams: 1, kilograms: 1, litres: 1, the: 1, so: 1, then: 1, we: 1, get: 1, answer: 1, total: 1, and: 1, a: 1, in: 1, all: 1, altogether: 1, degrees: 1, units: 1, square: 1, cubic: 1, minutes: 1, hours: 1, seconds: 1, miles: 1, mph: 1 };
  function fmt(n) { var s = String(n); if (Math.abs(n) >= 1000 && /^\d+$/.test(s)) s = s.replace(/\B(?=(\d{3})+$)/g, ','); return s; }
  function parseCalc(sent) {
    var t = sent.toLowerCase().replace(/[,;:!?.]/g, ' ').replace(/-/g, ' ').replace(/per cent/g, 'percent').replace(/divided by|multiplied by|take away|to the power of/g, function (m) { return m.replace(/ /g, '_'); }).replace(/\s+/g, ' ').trim().split(' ');
    var out = [], i = 0, nums = 0, ops = 0, eqs = 0;
    function num() {
      var v = null, cur = 0, got = false, tot = 0;
      while (i < t.length) {
        var w = t[i];
        if (UN[w] !== undefined) { cur += UN[w]; got = true; i++; }
        else if (TN[w] !== undefined) { cur += TN[w]; got = true; i++; }
        else if (w === 'hundred' && got) { cur *= 100; i++; }
        else if (w === 'thousand' && got) { tot += cur * 1000; cur = 0; i++; }
        else if (w === 'million' && got) { tot += cur * 1000000; cur = 0; i++; }
        else if (w === 'and' && got && t[i + 1] && (UN[t[i + 1]] !== undefined || TN[t[i + 1]] !== undefined)) { i++; }
        else break;
      }
      if (!got) return null;
      v = tot + cur;
      if (t[i] === 'point') { var d = ''; i++; while (i < t.length && UN[t[i]] !== undefined && UN[t[i]] < 10) { d += UN[t[i]]; i++; } if (!d) return null; v = v + '.' + d; }
      else v = fmt(v);
      if (t[i] === 'percent') { v += '%'; i++; }
      return v;
    }
    while (i < t.length) {
      var w = t[i], two = t[i] + ' ' + (t[i + 1] || '');
      if (SKIP[w]) { i++; continue; }
      if (EQ[w]) { out.push('='); eqs++; i++; continue; }
      if (OPS[w]) { out.push(OPS[w]); ops++; i++; continue; }
      if (w === 'divided_by' || w === 'multiplied_by' || w === 'take_away' || w === 'to_the_power_of') { out.push(OPS[w.replace(/_/g, ' ')]); ops++; i++; continue; }
      if (w === 'of') { out.push('of'); ops++; i++; continue; }
      if (w === 'squared') { out.push('²'); ops++; i++; continue; }
      if (w === 'cubed') { out.push('³'); ops++; i++; continue; }
      var n = num(); if (n === null) return ''; out.push(n); nums++;
    }
    if (eqs !== 1 || ops < 1 || nums < 2 || out[0] === '=' || out[out.length - 1] === '=') return '';
    for (var j = 1; j < out.length; j++) if (/^[\d.,%]+$/.test(out[j]) && /^[\d.,%]+$/.test(out[j - 1])) return '';
    var ex = out.join(' ').split(' = ');
    if (ex.length === 2) {
      var js = function (z) { return z.replace(/(\d[\d,.]*)%\s*of\s*(\d[\d,.]*)/g, function (_, p, q) { return '(' + p + '/100*' + q + ')'; }).replace(/,/g, '').replace(/(\d[\d.]*)\s*²/g, '($1*$1)').replace(/(\d[\d.]*)\s*³/g, '($1*$1*$1)').replace(/×/g, '*').replace(/÷/g, '/').replace(/−/g, '-'); };
      var lv, rv;
      if (!/[%^]|of/.test(js(ex[0]) + js(ex[1]))) {
        try { lv = Function('return (' + js(ex[0]) + ')')(); rv = Function('return (' + js(ex[1]) + ')')(); } catch (e) { return ''; }
        if (!isFinite(lv) || !isFinite(rv) || Math.abs(lv - rv) > 1e-6 * Math.max(1, Math.abs(rv))) return '';
      }
    }
    var s = out.join(' ').replace(/ ²/g, '²').replace(/ ³/g, '³').replace(/ ?\^ ?/g, '^');
    var m = s.split(' = '); if (m.length !== 2 || !/\d/.test(m[0]) || !/\d/.test(m[1]) || /[+−×÷]$|^[+−×÷]| of$/.test(m[0])) return '';
    return s;
  }
  L.calc = function (x) { return calcLines(x); };
  function calcLines(say) { var r = []; (String(say || '').replace(/\s+/g, ' ').match(/[^.?!]+[.?!]+/g) || []).forEach(function (x) { var c = parseCalc(x); if (c && r.indexOf(c) < 0) r.push(c); }); return r; }
  function reaches(lines, ansHtml) {
    if (!lines.length) return false;
    var rhs = lines[lines.length - 1].split(' = ')[1] || '', nums = (String(ansHtml || '').replace(/<[^>]*>/g, ' ').match(/\d[\d,.]*/g) || []).map(function (x) { return x.replace(/,/g, ''); });
    return /^[\d.,%]+$/.test(rhs) && nums.indexOf(rhs.replace(/[,%]/g, '')) >= 0;
  }
  /* only a calculation that really reaches the answer is shown; a longer working (trees, algebra, fractions) is not half-shown */
  function working(say, exprHtml, ansHtml) {
    var lines = calcLines(say).slice(0, 4), h = '';
    if (reaches(lines, ansHtml)) { lines.forEach(function (c) { h += BT.sv.eq(c); }); return h; }
    var ex = (String(exprHtml || '').match(/<div class="sv-eq[\s\S]*?<\/div>/g) || []).filter(function (x) { return /[÷×+−]/.test(x.replace(/<[^>]*>/g, '')); });
    return ex.join('');
  }
  L.turn = function (q, qhtml, a, ahtml) {
    /* when the picture is only a question mark, show the question itself so it can be read on screen */
    var qt = q.replace(/^Your turn!\s*/, '').replace(/\s*Pause[^.]*\.\s*$/, ''); qt = qt.replace(/^Number [a-z]+\.\s*/i, ''); qhtml = (!qhtml || qhtml === BT.sv.eq('?')) ? BT.sv.note('<b>' + qt + '</b>') : (onScreen(qhtml, qt) ? qhtml : BT.sv.note('<b>' + qt + '</b>') + qhtml);
    return L.SC('Your turn', 'Pause, think, then listen', [L.st(q, qhtml), L.st(a, ahtml)]);
  };
  /* the fuller question-by-question lessons (lessons_full_*.js) are stored by title and replace the shorter first versions */
  BT.FULL = BT.FULL || {};
  /* a slide has room for about 300px of pictures. A step that would not fit replaces the block before it (swap) instead of being stacked under it. */
  function est(h) {
    if (!h) return 0;
    var n = 0, c = function (re) { return (h.match(re) || []).length; };
    h.split('class="sv-eq').slice(1).forEach(function (seg) { var t = seg.split('</div>')[0].replace(/<[^>]*>/g, ''); n += (/\d+\s*\/\s*\d+/.test(t) ? 110 : t.length > 30 ? 92 : 56); });
    n += c(/class="sv-rule/g) * 64 + c(/class="sv-note/g) * 64 + c(/class="sv-row/g) * 84 + c(/class="sv-cols/g) * 90 + c(/class="sv-list"/g) * 110 + 0 + c(/class="sv-big/g) * 60;
    n += c(/<tr/g) * 34 + c(/class="lk-col/g) * 150;
    var svgs = c(/<svg/g); n += svgs * 150;
    return n || 50;
  }
  function fit(scenes) {
    scenes.forEach(function (sc) {
      var groups = [], total = 0;
      sc.steps.forEach(function (st, k) {
        if (!st.html) return;
        var e = est(st.html), raw = st.html.replace('<!--swap-->', '');
        if (!groups.length) { groups.push([e]); total = e; st.html = raw; return; }
        var last = groups[groups.length - 1], lastMax = Math.max.apply(null, last);
        if (st.html.indexOf('<!--swap-->') === 0 || total + e > 270) { last.push(e); total = total - lastMax + Math.max(lastMax, e); st.html = '<!--swap-->' + raw; }
        else { groups.push([e]); total += e; st.html = raw; }
      });
    });
    return scenes;
  }
  L.full = function (title, scenes) { BT.FULL[title] = fit(scenes); };
  L.ep = function (title, goal, scenes) { if (BT.FULL[title]) scenes = BT.FULL[title]; var e = { title: title, goal: goal, scenes: scenes }; BT.EP = BT.EP || {}; BT.EP[title] = e; return e; };
  L.get = function (title) { var e = BT.EP && BT.EP[title]; if (!e && window.console) console.warn('lesson not found: ' + title); return e; };
  /* everything asked or stated in the narration must also be readable on the picture: questions, and rule/definition sentences */
  function plain(h) { return String(h || '').replace(/<[^>]*>/g, ' ').replace(/&[a-z#0-9]+;/gi, ' ').toLowerCase().replace(/[^a-z0-9]+/g, ''); }
  function onScreen(html, sent) {
    var t = plain(html), w = sent.toLowerCase().replace(/[^a-z0-9 ]+/g, ' ').split(/\s+/).filter(Boolean);
    if (w.length < 3) return true;
    var key = w.slice(0, 4).join('');
    return t.indexOf(key) >= 0;
  }
  function answerOnly(h) {
    var c = function (re) { return (h.match(re) || []).length; };
    return c(/class="sv-eq|class="sv-big/g) <= 1 && !/<svg|<table|<tr|sv-list|sv-rule|sv-cols|sv-note|sv-row|lk-col|sv-card/.test(h) && c(/class="sv-eq|class="sv-big/g) === 1;
  }
  var FACT = /^(remember|always|never|the rule|the key|notice|careful|be careful|a rule|the trick|so the rule|this means|that means)\b|\bis called\b|\bwe call\b|\bis the same as\b|\bmeans that\b/i;
  function showWords(scenes) {
    scenes.forEach(function (sc) {
      if (sc._words) return; sc._words = 1;
      var turn = sc.h === 'Your turn', recap = /^Let/.test(sc.h || '');
      sc.steps.forEach(function (st, k) {
        if (!st || !st.say || recap) return;
        var sents = st.say.replace(/\s+/g, ' ').match(/[^.?!]+[.?!]+/g) || [], add = [];
        sents.forEach(function (x) {
          x = x.trim(); var isQ = /\?$/.test(x);
          if (turn) return;
          if ((isQ || (x.length < 150 && FACT.test(x))) && !onScreen(st.html, x)) add.push(x);
        });
        if (!turn && !add.length && st.html && st.html.indexOf('sv-work') < 0 && answerOnly(st.html)) {
          var cl = calcLines(st.say).slice(0, 3), w = (reaches(cl, st.html) ? cl.filter(function (c) { return plain(st.html).indexOf(plain(c)) < 0; }).map(function (c) { return BT.sv.eq(c); }).join('') : ''), r0 = String(st.html), sw = r0.indexOf('<!--swap-->') === 0; if (sw) r0 = r0.replace('<!--swap-->', '');
          if (w) st.html = (sw ? '<!--swap-->' : '') + w + r0;
          return;
        }
        if (!add.length) return;
        var raw = String(st.html || ''), swap = raw.indexOf('<!--swap-->') === 0; if (swap) raw = raw.replace('<!--swap-->', '');
        st.html = (swap ? '<!--swap-->' : '') + add.slice(0, 2).map(function (x) { return BT.sv.note('<b>' + x + '</b>'); }).join('') + raw;
      });
    });
  }
  /* a Your turn question gets its own slide; the solution then has a slide of its own: the question again, the numbered working, then the answer */
  BT.WORK = BT.WORK || {};
  /* BT.W3(title, [ [lines of turn 1], [lines of turn 2], ... ]): the written step-by-step working of each Your turn, in order */
  BT.W3 = function (title, turns) { BT.WORK[title] = turns; };
  function sentences(say) { return (String(say || '').replace(/^Your turn!\s*/, '').replace(/\s+/g, ' ').match(/[^.?!]+[.?!]+/g) || [String(say || '')]).map(function (x) { return x.trim(); }).filter(Boolean); }
  /* the lines of working are spread over the spoken sentences in order; more than three lines go onto a further slide */
  function workScenes(lines0, say, qt, ansHtml) {
    var S = sentences(say), lines = [], figs = [], cur = '', hasFig = false, N, scenes = [], i, per;
    lines0.forEach(function (x) { if (x && typeof x === 'object') { if (x[1]) { cur = x[1]; hasFig = true; } lines.push(x[0]); } else lines.push(x); figs.push(cur); });
    N = lines.length; per = hasFig ? 2 : 3;
    for (i = 0; i < N; i += (hasFig && i === 0 ? 1 : per)) {
      var per0 = (hasFig && i === 0 ? 1 : per), chunk = lines.slice(i, i + per0), steps = [], pend = '', fg = figs[Math.min(N - 1, i + per0 - 1)];
      chunk.forEach(function (ln, j) {
        var li = i + j, a = Math.floor(li * S.length / N), b = Math.floor((li + 1) * S.length / N), h = BT.sv.eq(ln);
        if (j === 0) h = (li === 0 ? BT.sv.note('<b>' + qt + '</b>') : '') + (fg || '') + h;
        if (a >= b) { pend += h; return; }
        steps.push(L.st(S.slice(a, b).join(' '), pend + h)); pend = '';
      });
      if (pend) { if (steps.length) steps[steps.length - 1].html += pend; else steps.push(L.st(S.join(' '), pend)); }
      if (i + per0 >= N) steps[steps.length - 1].html += String(ansHtml || '').replace('<!--swap-->', '');
      scenes.push(L.SC('Your turn', i ? 'Let us see how we get it (continued)' : 'Let us see how we get it', steps));
    }
    return scenes;
  }
  /* a Your turn question gets its own slide; the answer is then shown on a slide of its own; the working follows, calculation by calculation */
  function splitTurns(ep) {
    if (ep._split) return; ep._split = 1; var out = [], ord = 0;
    ep.scenes.forEach(function (sc) {
      if (sc.h === 'Your turn' && sc.steps.length === 2 && sc.steps[0] && sc.steps[1]) {
        ord++;
        var q = sc.steps[0], a = sc.steps[1], qt = q.say.replace(/^Your turn!\s*/, '').replace(/\s*Pause[^.]*\.\s*$/, '').replace(/^Number [a-z]+\.\s*/i, ''), wk = (BT.WORK[ep.title] || [])[ord - 1], w = wk ? '' : working(a.say, q.html, a.html);
        /* a word problem shows only its question (the sum would give the method away); a task such as "Simplify ..." keeps the expression, which is the task itself */
        var qh = String(q.html || ''), rest = qh.replace(/<div class="sv-note"[\s\S]*?<\/div>/g, '').replace(/<div class="sv-eq[\s\S]*?<\/div>/g, '').replace(/\s+/g, ''),
            eqs = (qh.match(/<div class="sv-eq[\s\S]*?<\/div>/g) || []).join(''), onlyEq = !rest && eqs, keep = (onlyEq && !/\?\s*$/.test(qt)) ? eqs : '';
        if (onlyEq) q = L.st(q.say, BT.sv.note('<b>' + qt + '</b>') + keep);
        var qs = L.SC('Your turn', 'Pause, think, then listen', [q]); qs.asks = 1; out.push(qs);
        out.push(L.SC('Your turn', 'Is your answer the same?', [L.st('Here is the answer. Did you get the same? Then let us find out how we get it.', BT.sv.note('<b>' + qt + '</b>') + keep + String(a.html || '').replace('<!--swap-->', ''))]));
        if (wk && wk.length) workScenes(wk, a.say, qt, a.html).forEach(function (x) { out.push(x); });
        else out.push(L.SC('Your turn', 'Let us see how we get it', [L.st(a.say, BT.sv.note('<b>' + qt + '</b>') + w + String(a.html || '').replace('<!--swap-->', ''))]));
      } else out.push(sc);
    });
    ep.scenes = out;
  }
  L.use = function (n, items) {
    var list = items.map(function (x) { return typeof x === 'string' ? L.get(x) : x; });
    if (n >= 841 && n <= 853) list.forEach(function (it) { if (it && it.scenes) { splitTurns(it); showWords(it.scenes); fit(it.scenes); } });
    BT.lessons(n, 'Watch lesson', list);
  };

  /* a compact way to write a full lesson:
     o.intro [h, sub, say, html], o.ex [[h, sub, [[say, html], ...]], ...], o.real [sub, say, html],
     o.turn [q, qhtml, a, ahtml], o.rec [say, points], o.deep [why, mistake] */
  L.lesson = function (title, goal, o) {
    var sc = [];
    if (o.intro) sc.push(L.SC(o.intro[0], o.intro[1], [L.st(o.intro[2], o.intro[3])]));
    (o.ex || []).forEach(function (e) { sc.push(L.SC(e[0], e[1], e[2].map(function (x) { return L.st(x[0], x[1]); }))); });
    if (o.real) sc.push(L.SC('In real life', o.real[0], [L.st(o.real[1], o.real[2])]));
    if (o.turn) sc.push(L.turn(o.turn[0], o.turn[1], o.turn[2], o.turn[3]));
    if (o.rec) sc.push(L.rec(title, o.rec[0], o.rec[1]));
    if (o.deep) { BT.DEEP = BT.DEEP || {}; BT.DEEP[title] = o.deep; }
    return L.ep(title, goal, sc);
  };
  L.E = function (t, c) { return BT.sv.eq(t, c); };
})();
