/* fl_recap.js: every Watch lesson ends with "Let's recap": the heading is spoken first, then each bullet appears and is explained
   in its own sentence. A thin recap (fewer than 4 bullets) is topped up from the lesson itself: its rule, its examples and its mistakes. */
(function () {
  'use strict';
  var BT = window.BT; if (!BT || !BT.EP || !BT.L) return;
  var L = BT.L;
  function txt(h) { return String(h || '').replace(/<[^>]*>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/\s+/g, ' ').trim(); }
  function sents(s) { return (String(s || '').replace(/\s+/g, ' ').replace(/(\d)\.(?=\d)/g, '$1\u0001').match(/[^.?!]+[.?!]+/g) || (s ? [String(s)] : [])).map(function (x) { return x.replace(/\u0001/g, '.').trim(); }).filter(Boolean); }
  function eqs(html) { var r = [], m, re = /<div class="sv-eq[^"]*"[^>]*>([\s\S]*?)<\/div>/g; while ((m = re.exec(String(html || '')))) { var t = txt(m[1]); if (t && t !== '?') r.push(t); } return r; }
  function note(html) { var m = /<div class="sv-note[^"]*"[^>]*>([\s\S]*?)<\/div>/.exec(String(html || '')); return m ? txt(m[1]) : ''; }
  /* working out: an equation or a sum or product written out, e.g. 2 + 2 = 4 or 3.4 × 2.6 = 8.84. Important facts with numbers (10 times, 2 decimal places) are fine. */
  function isWork(x) { return /=/.test(x) || /\d\s*[×÷+−*]\s*\d/.test(x) || /\d\s*(times|divided by|plus|take away)\s+\d/i.test(x); }
  function low1(s) { return /^[A-Z]{2,}/.test(s) ? s : s.charAt(0).toLowerCase() + s.slice(1); }
  function cap1(s) { return s.charAt(0).toUpperCase() + s.slice(1); }
  function clip(s, n) { return s.length <= n ? s : ''; }
  function norm(s) { return txt(s).toLowerCase().replace(/[^a-z0-9]+/g, ''); }
  function build(title, e) {
    var sc = e.scenes, ri = -1, i;
    for (i = sc.length - 1; i >= 0; i--) if (/recap/i.test(sc[i].h)) { ri = i; break; }
    var old = ri >= 0 ? sc[ri] : null, oldBul = [], oldSay = '';
    if (old) { old.steps.forEach(function (st) { oldSay += (oldSay ? ' ' : '') + (st.say || ''); var m, re = /<div[^>]*>\s*<b>[^<]*<\/b>([\s\S]*?)<\/div>/g; while ((m = re.exec(st.html || ''))) oldBul.push(txt(m[1])); }); }
    var ex = [], mist = [], rule = null, pool = [];
    sc.forEach(function (s, k) {
      if (k === ri) return;
      if (/Watch out/i.test(s.h)) { mist.push(s); }
      else if (/^Your turn|In real life/i.test(s.h)) { /* questions are not recap material */ }
      else if (k === 0) { if (s.steps[0] && s.steps[0].say) rule = s; }
      else if (s.steps.some(function (st) { return eqs(st.html).length; })) ex.push(s);
      if (!/^Your turn/i.test(s.h)) s.steps.forEach(function (st) { sents(st.say).forEach(function (x) { pool.push(x); }); });
    });
    function toks(x) { var r = {}; (norm2(x).match(/[a-z0-9²³√π%]{3,}|\d+/g) || []).forEach(function (w) { r[w] = 1; }); return r; }
    function norm2(x) { return txt(x).toLowerCase().replace(/[^a-z0-9²³√π%\s]/g, ' '); }
    /* the sentence of the lesson that explains a bullet best; if none does, the bullet is spoken as a reminder */
    function narr(b, from) { var used = narr.used || (narr.used = {});
      var tb = toks(b), nb = Object.keys(tb).length, best = '', bs = 0; used = used || {};
      (from || pool).forEach(function (x) { var tx = toks(x), n = 0; Object.keys(tb).forEach(function (w) { if (tx[w]) n++; }); var sc2 = nb ? n / nb : 0; if (n >= 2 && sc2 > bs && !used[x] && !/^(Brilliant|Well done|Great|Let.s remember|Here is|Did you)/i.test(x)) { bs = sc2; best = x; } });
      if (bs >= 0.5) { used[best] = 1; return best; } return 'Remember: ' + low1(b).replace(/[.]$/, '') + '.';
    }
    narr.used = {};
    var items = [];   /* {b: bullet, say: spoken} */
    var spoken = sents(oldSay).filter(function (x) { return !/^(Brilliant|Well done|Great|Let.s remember|Let.s recap|Fantastic|Excellent|Good job)/i.test(x); });
    if (oldBul.length >= 4) {
      oldBul.forEach(function (b) { items.push({ b: b, say: narr(b, spoken.length ? spoken.concat(pool) : pool) }); });
    } else {
      var terse = function (x) { return x.length < 14 || /^\S+ [×÷+−]\s*\S*$/.test(x); };
      if (rule) { var rs = sents(rule.steps[0].say), ok = function (x) { return x && x.length <= 95 && x.split(' ').length >= 5 && !/^(Look|Here|Let|Imagine|Watch|Say|Listen|Think|Today|Welcome|Hello|Can you|Which|What|How|Why)\b/i.test(x) && !/\?$/.test(x); }; if (ok(rs[0])) { items.push({ b: rs[0].replace(/[.]$/, ''), say: rs[0] }); if (ok(rs[1])) items.push({ b: rs[1].replace(/[.]$/, '').replace(/^(Then|Next|Now|So|And)\s+/i, function (w) { return ''; }).replace(/^./, function (c) { return c.toUpperCase(); }), say: rs[1] }); } }
      /* worked examples are not recap material: a recap names the ideas, not the problems */
      if (false && ex.length) {
        var pick = ex.length > 2 ? [ex[0], ex[ex.length - 1]] : ex;
        pick.forEach(function (s) {
          var lines = [], q = '', say = [];
          s.steps.forEach(function (st) { lines = lines.concat(eqs(st.html)); q = q || note(st.html); say = say.concat(sents(st.say)); });
          if (!lines.length) return;
          var last = lines[lines.length - 1], ans = last.split('=').pop().trim(), isQ = /\?$/.test(q) && q.length <= 50 && q.indexOf('. ') < 0, qq = q.replace(/^(Work out|Find|Calculate|Check|Simplify|Solve|Write|Use)\s+/i, '').replace(/[.?]$/, '').trim();
          if (/^[✓✗✔✘]$/.test(ans)) return;
          var calc = qq && qq.length <= 34 && /\d/.test(qq) && /[+−×÷\/<>≈]/.test(qq) && !/\s(in|of|to|is|the)\s/i.test(qq);
          var b = calc ? qq + ' = ' + ans : (isQ ? q + ' → ' + ans : (s.sub ? s.sub + ': ' + last : last));
          if (b.length > 70) b = s.sub ? s.sub + ': ' + ans : ans;
          items.push({ b: b, say: (s.sub ? s.sub + (/[.?!]$/.test(s.sub) ? ' ' : '. ') : '') + say.slice(0, 3).join(' ') });
        });
      }
      mist.slice(0, 1).forEach(function (s) {
        var st = s.steps[0], ss = sents(st.say), m = (ss[0] || '').replace(/^Mistake (one|two|three|four|1|2|3|4):\s*/i, '').replace(/[.]$/, '');
        var sb = String(s.sub || '').replace(/[.]$/, ''); if (/[=×÷+−]/.test(m) && sb) { items.push({ b: 'Avoid: ' + low1(sb), say: ('Watch out for this one: ' + low1(sb) + '. ' + ss.join(' ').replace(/^Mistake (one|two|three|four):\s*/i, '')).trim() }); } else if (m && m.length <= 90 && m.split(' ').length >= 3) items.push({ b: 'Avoid: ' + low1(m), say: ('A common mistake is ' + low1(m) + '. ' + (ss[1] || '')).trim() });
      });
      oldBul.forEach(function (b) { if (!terse(b) && !items.some(function (x) { return norm(x.b) === norm(b); })) items.push({ b: b, say: narr(b, spoken.concat(pool)) }); });
      if (items.length < 3) oldBul.forEach(function (b) { if (!items.some(function (x) { return norm(x.b) === norm(b); })) items.push({ b: b, say: narr(b, spoken.concat(pool)) }); });
    }
    /* the recap names the ideas only: no numbers, no working, no answers. A bullet that needs a number is dropped,
       and what is spoken for a bullet is its idea in words, never a worked line from the lesson. */
    items = items.filter(function (x) { return !isWork(x.b) && !/\?/.test(x.b) && x.b.split(' ').length >= 3 && !/:\s*[A-Z][a-z]+$/.test(x.b); });
    items.forEach(function (x) { if (isWork(x.say)) x.say = 'Remember: ' + low1(x.b.replace(/^Avoid: /, 'avoid ')).replace(/[.]$/, '') + '.'; });
    if (items.length < 3) {
      /* a thin lesson is topped up with its own number-free sentences: the rules it teaches, not the working */
      pool.forEach(function (x) {
        if (items.length >= 3 || isWork(x) || /[?!]/.test(x) || x.length < 25 || x.length > 90 || !/^[A-Z]/.test(x)) return;
        if (/^(Brilliant|Well done|Great|Let.s|Here|Did you|Your turn|Pause|Think|Look|Now|Imagine|Watch|Say|Remember)/i.test(x)) return;
        var c = x.replace(/[.]$/, '');
        if (!items.some(function (y) { return norm(y.b) === norm(c); })) items.push({ b: c, say: 'Remember: ' + low1(c) + '.' });
      });
    }
    /* no duplicates, five at most */
    var seen = {}; items = items.filter(function (x) { var k = norm(x.b); if (!k || seen[k]) return false; seen[k] = 1; return true; }).slice(0, 5);
    if (items.length < 2) return;
    var steps = [L.st('Let’s recap what we have done in this lesson.', '')];
    /* the narration says the fact that was learned, one point at a time; the bullet on screen is the same fact */
    items.forEach(function (x) {
      var imp = /^(Put|Check|Use|Write|Count|Multiply|Divide|Look|Find|Draw|Add|Take|Round|Compare|Keep|Start|Test|Make|Read|Choose|Line|Get|Learn|Say|Mark|Label|Measure|Estimate|Sort|Make)\b/;
      var fact = /^Avoid: /.test(x.b) ? 'Remember to avoid ' + low1(x.b.replace(/^Avoid: /, '')).replace(/[.]$/, '') + '.'
        : imp.test(x.b) ? 'Remember to ' + low1(x.b).replace(/[.]$/, '') + '.'
        : 'We have learned that ' + low1(x.b).replace(/[.]$/, '') + '.';
      steps.push(L.st(fact, '<div class="sv-list"><div><b>✓</b>' + x.b + '</div></div>'));
    });
    var scene = L.SC('Let’s recap', old ? old.sub : title, steps);
    if (ri >= 0) sc[ri] = scene; else sc.push(scene);
    e._recap = items;
  }
  var all = Object.keys(BT.EP).map(function (t) { return [t, BT.EP[t]]; }).concat((BT.ALLEP || []).map(function (e) { return [e.title, e]; }));
  all.forEach(function (pair) { var t = pair[0], e = pair[1]; if (!e || !e.scenes || e._recap) return; try { build(t, e); } catch (x) { if (window.console) console.warn('recap', t, x); } });
  BT.recapBuilt = true;
})();
