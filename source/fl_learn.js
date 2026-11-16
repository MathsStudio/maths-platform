/* fl_learn.js: First level "Learn it" lessons and worked examples for Let's learn, in the same slide format as P5 to P7.
   Each workbook question gets its own slide lesson: the big question, key words, see it / draw it / write it,
   three worked examples shown step by step, a common mistake, a quick check and a recap.
   Each topic also gets three sets of worked examples (getting started, building up, challenge) of 8 slides each. */
(function () {
  'use strict';
  var FL = window.FL, BT = window.BT, S = window.Studio; if (!FL || !BT || !BT.add || !S) return;
  var V = BT.sv, INK = '#2b2340', r = FL.r, pick = FL.pick, shuffle = FL.shuffle;

  function big(t) { return '<div style="font-size:clamp(1.6rem,6vw,2.4rem);font-weight:800;color:' + INK + ';background:#fff;border:3px solid ' + INK + ';border-radius:16px;padding:6px 18px;text-align:center;display:inline-block">' + t + '</div>'; }
  function cards(list) { return '<div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center">' + list.map(function (t) { return '<span style="background:#fff;border:3px solid ' + INK + ';border-radius:14px;padding:6px 12px;font-weight:800;color:' + INK + '">' + t + '</span>'; }).join('') + '</div>'; }
  /* each key word is read and explained in turn: "Bigger means more." */
  function spoken(w) { var raw = String(w[0]), pm = /\(([^)]*)\)/.exec(raw), word = raw.replace(/\s*\([^)]*\)/g, '').trim(), m = String(w[1]).trim();
    if (pm && (word.length <= 2 || !/[a-z]{3}/i.test(word))) word = pm[1];   /* p (pence) is read as pence */
    return /^\d/.test(m) ? word.charAt(0).toUpperCase() + word.slice(1) + '. For example, ' + m + '.' : word.charAt(0).toUpperCase() + word.slice(1) + ' means ' + m + '.'; }
  function words(list) { return '<div style="display:grid;gap:8px;max-width:520px;margin:0 auto"><p class="say" style="margin:0 0 4px;font-weight:700;text-align:center">Here are the key words for this lesson.</p>' + list.map(function (w) { return '<div class="say" data-say="' + spoken(w).replace(/"/g, '&quot;') + '" style="display:flex;gap:12px;align-items:center;background:#fff;border:2px solid #dcd3f0;border-radius:14px;padding:8px 12px;color:' + INK + '"><span style="font-size:1.6rem" aria-hidden="true">' + (w[2] || '🔤') + '</span><span><b>' + w[0] + '</b><br>' + w[1] + '</span></div>'; }).join('') + '</div>'; }
  function row3(list, kind) { return '<div style="display:flex;align-items:center;justify-content:center;gap:8px;flex-wrap:wrap">' + list.map(function (n) { return '<div style="max-width:200px">' + FL.things(n, kind, 5) + '</div>'; }).join('<b style="font-size:1.8em">+</b>') + '</div>'; }
  FL.big = big; FL.cards = cards; FL.row3 = row3;

  /* a quick check: one question answered by tapping, then the explanation */
  function check(c) {
    return function (host) {
      host.innerHTML = '<div class="flb">' + (c.pic ? '<div class="flb-pic">' + c.pic + '</div>' : '') + '<div class="flb-q">' + c.q + '</div><div class="flb-opts' + (function () { var L = Math.max.apply(null, c.options.map(function (o) { return String(o).length; })); return L > 12 ? ' col' : L > 4 ? ' long' : ''; })() + '">' + c.options.map(function (o) { return '<button type="button" data-o="' + String(o).replace(/"/g, '&quot;') + '">' + o + '</button>'; }).join('') + '</div><p class="flb-fb" aria-live="polite"></p></div>';
      var fb = host.querySelector('.flb-fb');
      host.querySelectorAll('[data-o]').forEach(function (b) { b.addEventListener('click', function () {
        if (String(b.getAttribute('data-o')) === String(c.answer)) { b.classList.add('ok'); host.querySelectorAll('[data-o]').forEach(function (x) { x.disabled = true; }); fb.className = 'flb-fb ok'; fb.textContent = 'Well done! ' + c.explain; }
        else { b.classList.add('no'); b.disabled = true; fb.className = 'flb-fb no'; fb.textContent = 'Not quite. ' + (c.tip || 'Have another go.'); }
      }); });
    };
  }
  /* a worked example slide: the question, a picture for each step, and the steps shown one at a time */
  function worked(w) {
    return { q: w.q, steps: w.steps, final: w.final, render: function (k) { var p = w.pics || (w.pic ? [w.pic] : []); return p[Math.min(k, p.length - 1)] || ''; } };
  }

  /* d = { short, title, what, words: [[word, meaning, emoji]], see: [[say, pic] x3], ex: [w x3], mistake: [say, pic], check: {q, pic, options, answer, explain, tip}, remember: [say, pic] } */
  FL.learnIt = function (n, id, d) {
    var sl = [];
    sl.push({ title: d.title, say: [d.what], v: d.pic || '', kind: 'The big question', noMore: true });
    sl.push({ title: 'Key words', say: [], v: words(d.words), kind: 'Key words', noMore: true });
    [['See it', 'Real things'], ['Draw it', 'A picture'], ['Write it', 'Numbers']].forEach(function (k, i) { var s = d.see[i]; if (!s) return;
      var o = { title: k[0], say: [s[0]], v: s[1], kind: k[1], noMore: true };
      /* Draw it and Write it: the child copies the example on a scribble pad, open and ready */
      if (i > 0) { var pad = { open: true, bg: i === 1 ? s[1] : '' };   /* Draw it: the same picture is already on the pad, so the child only adds to it */ o.say = [s[0], i === 1 ? 'Your turn: draw it on the scribble pad.' : 'Your turn: write it on the scribble pad.']; o.live = function (host) { var H = S.h; if (H && H.scribble) H.scribble(host, pad); }; }
      sl.push(o); });
    d.ex.forEach(function (w, i) { sl.push({ title: 'Worked example ' + (i + 1), say: [], ex: worked(w), kind: 'Step by step', noMore: true }); });
    sl.push({ title: 'Watch out!', say: [d.mistake[0]], v: d.mistake[1], kind: 'A common mistake', noMore: true });
    sl.push({ title: 'Quick check', say: ['Now you try. Tap your answer.'], live: check(d.check), kind: 'Your turn', noMore: true });
    sl.push({ title: 'Remember', say: [d.remember[0]], v: d.remember[1], kind: 'Let’s recap', noMore: true });
    sl.forEach(function (x) { x.flLearn = true; });
    BT.add(n, id, d.short, sl);
  };

  /* compact form: FL.LI(n, id, [short, title, what, pic, words, see, ex, mistake, check, remember])
     ex: [q, steps, final, pic or [pics]]; check: [q, pic, options, answer, explain, tip] */
  FL.LI = function (n, id, a) {
    FL.learnIt(n, id, { short: a[0], title: a[1], what: a[2], pic: a[3], words: a[4], see: a[5],
      ex: a[6].map(function (e) { return { q: e[0], steps: e[1], final: e[2], pics: Array.isArray(e[3]) ? e[3] : null, pic: Array.isArray(e[3]) ? null : e[3] }; }),
      mistake: a[7], check: { q: a[8][0], pic: a[8][1], options: a[8][2], answer: a[8][3], explain: a[8][4], tip: a[8][5] }, remember: a[9] });
  };
  /* worked examples made from the topic's question makers: the hints become the steps */
  FL.wexGens = function (n, gens) {
    function conv(fn) { return function () { var q = fn(), st = [];
      (q.hints || []).forEach(function (h) { if (st.indexOf(h) < 0 && !/one step at a time|look carefully at each/i.test(h)) st.push(h); });
      if (q.explain) st.push(q.explain);
      if (!st.length) st.push('Think about what the question asks.');
      return { q: q.text, steps: st, final: 'The answer is ' + q.answer + '.', pic: (q.pic || '') + (q.options ? '<div style="margin-top:8px">' + cards(q.options) + '</div>' : '') }; }; }
    var m = {}; ['low', 'medium', 'high'].forEach(function (l) { m[l] = (gens[l] || gens.medium || []).map(conv); });
    FL.workedSets(n, m);
  };

  /* three sets of worked examples, 8 slides each, made from worked-example makers for each level */
  FL.workedSets = function (n, makers) {
    [['wex1', 'Worked examples: getting started', 'low'], ['wex2', 'Worked examples: building up', 'medium'], ['wex3', 'Worked examples: challenge', 'high']].forEach(function (p) {
      var list = makers[p[2]] || [], sl = [], seen = {};
      for (var k = 0; sl.length < 8 && k < 200 && list.length; k++) {
        var w = list[k % list.length](); var key = w.q + '|' + w.final; if (seen[key]) continue; seen[key] = 1;
        sl.push({ flLearn: true, title: 'Worked example ' + (sl.length + 1), say: [], ex: worked(w), kind: p[1].split(': ')[1].replace(/^./, function (c) { return c.toUpperCase(); }), noMore: true });
      }
      if (sl.length) BT.add(n, p[0], p[1], sl);
    });
  };

  /* ========================= P3 · 302 Adding and subtracting ========================= */
  var T = FL.track;
  FL.learnIt(302, 'learn1', { short: 'Reordering', title: 'How can reordering numbers help me add them?',
    what: 'When we add, we can change the order of the numbers and the answer stays the same. Choosing a good order makes adding easier.',
    pic: FL.says('frog', '3 + 8 + 7 = ?'),
    words: [['add (+)', 'put numbers together', '➕'], ['total', 'how many altogether', '🧮'], ['pair', 'two numbers that go together', '👯'], ['make ten', 'two numbers that add up to 10, like 3 and 7', '🔟']],
    see: [['Frankie catches 3 flies, then 8, then 7. He puts the 3 and the 7 together first.', row3([3, 8, 7], 'star')],
      ['Three and seven fill a ten-frame. Then 8 more.', '<div style="max-width:240px;margin:0 auto">' + FL.frame(3, 7) + '</div>'],
      ['We write it like this: 3 + 7 = 10, and 10 + 8 = 18.', big('3 + 8 + 7<br>= 10 + 8 = 18')]],
    ex: [{ q: 'What is 4 + 9 + 6?', steps: ['Look for two numbers that make 10.', '4 and 6 make 10.', 'Now add the 9: 10 + 9 = 19.'], final: '4 + 9 + 6 = 19', pics: [big('4 + 9 + 6'), big('4 + 6 + 9'), big('10 + 9'), big('19')] },
      { q: 'What is 5 + 8 + 5?', steps: ['Look for a pair that makes 10.', '5 and 5 make 10.', '10 + 8 = 18.'], final: '5 + 8 + 5 = 18', pics: [big('5 + 8 + 5'), big('5 + 5 + 8'), big('10 + 8'), big('18')] },
      { q: 'What is 2 + 7 + 8?', steps: ['Which two numbers make 10?', '2 and 8 make 10.', '10 + 7 = 17.'], final: '2 + 7 + 8 = 17', pics: [big('2 + 7 + 8'), big('2 + 8 + 7'), big('10 + 7'), big('17')] }],
    mistake: ['Reordering works for adding, but not for taking away. 9 take away 4 is 5, but 4 take away 9 does not work with whole numbers.', cards(['9 − 4 = 5 ✓', '4 − 9 ✗'])],
    check: { q: 'What is <b>6 + 3 + 4</b>?', options: [12, 13, 14], answer: 13, explain: '6 and 4 make 10, and 3 more is 13.', tip: 'Find the pair that makes 10.' },
    remember: ['Any order gives the same answer. Look for pairs that make 10 and add them first.', cards(['1 + 9', '2 + 8', '3 + 7', '4 + 6', '5 + 5'])] });

  FL.learnIt(302, 'learn2', { short: 'Bridging through 10', title: 'How can bridging through 10 help me to add and subtract?',
    what: 'To add or take away across 10, jump to 10 first, then jump the rest.',
    pic: T(7, 15, [7, 10, 15], [[7, 10], [10, 15]]),
    words: [['bridge', 'go across a ten', '🌉'], ['jump', 'a hop along the number line', '🐸'], ['split', 'break a number into two parts, like 5 = 2 + 3', '✂️'], ['number line', 'numbers in order on a line', '📏']],
    see: [['Frankie has 8 flies in a box of 10. He adds 5 more: 2 fill the box, and 3 go in a new box.', '<div style="max-width:240px;margin:0 auto">' + FL.frame(8, 2) + '</div>' + FL.things(3, 'star', 3)],
      ['On a number line: 8, jump 2 to 10, then jump 3 to 13.', T(8, 13, [8, 10, 13], [[8, 10], [10, 13]])],
      ['We write: 8 + 5 = 8 + 2 + 3 = 13.', big('8 + 5 = 8 + 2 + 3 = 13')]],
    ex: [{ q: 'What is 7 + 6?', steps: ['How far is 7 from 10? 3.', 'Split 6 into 3 and 3.', '7 + 3 = 10, then 10 + 3 = 13.'], final: '7 + 6 = 13', pics: [T(7, 13, [7]), T(7, 13, [7, 10]), T(7, 13, [7, 10], [[7, 10]]), T(7, 13, [7, 10, 13], [[7, 10], [10, 13]])] },
      { q: 'What is 14 − 6?', steps: ['How far is 14 from 10? 4.', 'Split 6 into 4 and 2.', '14 − 4 = 10, then 10 − 2 = 8.'], final: '14 − 6 = 8', pics: [T(8, 14, [14]), T(8, 14, [14, 10]), T(8, 14, [14, 10], [[14, 10]]), T(8, 14, [8, 10, 14], [[14, 10], [10, 8]])] },
      { q: 'What is 9 + 8?', steps: ['9 needs 1 to make 10.', 'Split 8 into 1 and 7.', '9 + 1 = 10, then 10 + 7 = 17.'], final: '9 + 8 = 17', pics: [T(9, 17, [9]), T(9, 17, [9, 10]), T(9, 17, [9, 10], [[9, 10]]), T(9, 17, [9, 10, 17], [[9, 10], [10, 17]])] }],
    mistake: ['Split the second number, not the first. For 8 + 5, keep the 8 and split the 5 into 2 and 3.', cards(['8 + 5', '8 + 2 + 3 ✓'])],
    check: { q: 'What is <b>6 + 7</b>?', pic: T(6, 13, [6, 10]), options: [12, 13, 14], answer: 13, explain: '6 + 4 = 10, then 3 more is 13.', tip: 'Jump to 10 first.' },
    remember: ['Jump to 10 first, then jump the rest.', T(7, 15, [7, 10, 15], [[7, 10], [10, 15]])] });

  FL.learnIt(302, 'learn3', { short: 'Counting on', title: 'How can counting on help me add two-digit numbers?',
    what: 'Start at the bigger number. Count on the tens first, then the ones.',
    pic: FL.says('frog', '35 + 24 = ?'),
    words: [['tens', 'groups of ten', '🔟'], ['ones', 'single things', '1️⃣'], ['count on', 'start at a number and keep going', '➡️'], ['bigger number', 'start here to save time', '⬆️']],
    see: [['Frankie has 35 flies. He catches 2 tens and 4 ones more.', FL.tensOnes(3, 5) + FL.tensOnes(2, 4)],
      ['Start at 35. Jump ten to 45, ten to 55, then 4 ones to 59.', cards(['35', '→ 45', '→ 55', '→ 59'])],
      ['We write: 35 + 24 = 59.', big('35 + 24 = 59')]],
    ex: [{ q: 'What is 42 + 13?', steps: ['Start at 42.', 'Count on 1 ten: 52.', 'Count on 3 ones: 53, 54, 55.'], final: '42 + 13 = 55', pics: [cards(['42']), cards(['42', '→ 52']), cards(['42', '→ 52', '→ 55'])] },
      { q: 'What is 26 + 31?', steps: ['Start at 31, the bigger number.', 'Count on 2 tens: 41, 51.', 'Count on 6 ones: 57.'], final: '26 + 31 = 57', pics: [cards(['31']), cards(['31', '→ 41', '→ 51']), cards(['31', '→ 41', '→ 51', '→ 57'])] },
      { q: 'What is 47 + 15?', steps: ['Start at 47.', 'Count on 1 ten: 57.', 'Count on 5 ones: 58, 59, 60, 61, 62.'], final: '47 + 15 = 62', pics: [cards(['47']), cards(['47', '→ 57']), cards(['47', '→ 57', '→ 62'])] }],
    mistake: ['Remember the ones! 35 + 24 is not 55. After the tens, count on the 4 ones too.', cards(['35 + 24 = 55 ✗', '35 + 24 = 59 ✓'])],
    check: { q: 'What is <b>53 + 21</b>?', options: [73, 74, 84], answer: 74, explain: '53, 63, 73, then 1 more is 74.', tip: 'Count on the tens first.' },
    remember: ['Start at the bigger number. Count on the tens, then the ones.', cards(['bigger number', '+ tens', '+ ones'])] });

  FL.learnIt(302, 'learn4', { short: 'Partitioning', title: 'How can partitioning help me add two-digit numbers?',
    what: 'Split each number into tens and ones. Add the tens, add the ones, then put them back together.',
    pic: FL.says('frog', '34 + 25 = ?'),
    words: [['partition', 'split a number into tens and ones', '✂️'], ['tens', '30 is 3 tens', '🔟'], ['ones', '4 is 4 ones', '1️⃣'], ['put together', 'add the parts to get the answer', '🧩']],
    see: [['34 is 3 tens and 4 ones. 25 is 2 tens and 5 ones.', FL.tensOnes(3, 4) + FL.tensOnes(2, 5)],
      ['Tens together: 5 tens. Ones together: 9 ones.', FL.tensOnes(5, 9)],
      ['We write: 30 + 20 = 50, 4 + 5 = 9, so 59.', big('30 + 20 = 50<br>4 + 5 = 9<br>50 + 9 = 59')]],
    ex: [{ q: 'What is 41 + 36?', steps: ['Split: 40 and 1, 30 and 6.', 'Tens: 40 + 30 = 70.', 'Ones: 1 + 6 = 7.', 'Put together: 70 + 7 = 77.'], final: '41 + 36 = 77', pics: [big('41 + 36'), cards(['40 + 1', '30 + 6']), big('40 + 30 = 70'), big('1 + 6 = 7'), big('77')] },
      { q: 'What is 23 + 45?', steps: ['Split: 20 and 3, 40 and 5.', 'Tens: 20 + 40 = 60.', 'Ones: 3 + 5 = 8.', 'Put together: 60 + 8 = 68.'], final: '23 + 45 = 68', pics: [big('23 + 45'), cards(['20 + 3', '40 + 5']), big('20 + 40 = 60'), big('3 + 5 = 8'), big('68')] },
      { q: 'What is 26 + 38?', steps: ['Split: 20 and 6, 30 and 8.', 'Tens: 20 + 30 = 50.', 'Ones: 6 + 8 = 14. That is another ten!', 'Put together: 50 + 14 = 64.'], final: '26 + 38 = 64', pics: [big('26 + 38'), cards(['20 + 6', '30 + 8']), big('20 + 30 = 50'), big('6 + 8 = 14'), big('64')] }],
    mistake: ['3 tens is thirty, not three. In 34 + 25, add 30 and 20, not 3 and 2.', cards(['3 + 2 = 5 ✗', '30 + 20 = 50 ✓'])],
    check: { q: 'What is <b>32 + 15</b>?', options: [37, 47, 57], answer: 47, explain: '30 + 10 = 40, 2 + 5 = 7, so 47.', tip: 'Add the tens, then the ones.' },
    remember: ['Split into tens and ones, add each part, then put them together.', cards(['split', 'add tens', 'add ones', 'put together'])] });

  /* worked-example makers for 302, a level each */
  var W2 = {
    low: [function () { var a = r(6, 9), b = r(11 - a, 9), need = 10 - a; return { q: 'What is ' + a + ' + ' + b + '?', steps: [a + ' needs ' + need + ' to make 10.', 'Split ' + b + ' into ' + need + ' and ' + (b - need) + '.', a + ' + ' + need + ' = 10, then 10 + ' + (b - need) + ' = ' + (a + b) + '.'], final: a + ' + ' + b + ' = ' + (a + b), pics: [T(a, a + b, [a]), T(a, a + b, [a, 10]), T(a, a + b, [a, 10, a + b], [[a, 10], [10, a + b]])] }; },
      function () { var a = r(1, 9), b = 10 - a, c = r(2, 9); return { q: 'What is ' + a + ' + ' + c + ' + ' + b + '?', steps: ['Look for two numbers that make 10.', a + ' and ' + b + ' make 10.', '10 + ' + c + ' = ' + (10 + c) + '.'], final: a + ' + ' + c + ' + ' + b + ' = ' + (10 + c), pics: [big(a + ' + ' + c + ' + ' + b), big(a + ' + ' + b + ' + ' + c), big('10 + ' + c)] }; }],
    medium: [function () { var a = r(11, 18), b = r(a - 9, 9), down = a - 10; return { q: 'What is ' + a + ' − ' + b + '?', steps: [a + ' take away ' + down + ' is 10.', 'Split ' + b + ' into ' + down + ' and ' + (b - down) + '.', '10 − ' + (b - down) + ' = ' + (a - b) + '.'], final: a + ' − ' + b + ' = ' + (a - b), pics: [T(a - b, a, [a]), T(a - b, a, [a, 10], [[a, 10]]), T(a - b, a, [a - b, 10, a], [[a, 10], [10, a - b]])] }; },
      function () { var a = r(21, 59), t = r(1, 3), o = r(1, 8 - a % 10 > 0 ? Math.min(8, 9 - a % 10) : 1); var b = 10 * t + o, steps = ['Start at ' + a + '.'], pics = [cards([a])], cur = a, ch = [String(a)];
        for (var i = 0; i < t; i++) { cur += 10; ch.push('→ ' + cur); } steps.push('Count on ' + t + ' ten' + (t > 1 ? 's' : '') + ': ' + ch.slice(1).join(' ').replace(/→ /g, '') + '.'); pics.push(cards(ch.slice()));
        cur += o; ch.push('→ ' + cur); steps.push('Count on ' + o + ' one' + (o > 1 ? 's' : '') + ': ' + cur + '.'); pics.push(cards(ch.slice()));
        return { q: 'What is ' + a + ' + ' + b + '?', steps: steps, final: a + ' + ' + b + ' = ' + (a + b), pics: pics }; }],
    high: [function () { var a = 10 * r(1, 4) + r(3, 9), b = 10 * r(1, 4) + r(3, 9), ta = Math.floor(a / 10) * 10, tb = Math.floor(b / 10) * 10, oa = a % 10, ob = b % 10;
        return { q: 'What is ' + a + ' + ' + b + '?', steps: ['Split: ' + ta + ' and ' + oa + ', ' + tb + ' and ' + ob + '.', 'Tens: ' + ta + ' + ' + tb + ' = ' + (ta + tb) + '.', 'Ones: ' + oa + ' + ' + ob + ' = ' + (oa + ob) + (oa + ob >= 10 ? '. That is another ten!' : '.'), 'Put together: ' + (ta + tb) + ' + ' + (oa + ob) + ' = ' + (a + b) + '.'], final: a + ' + ' + b + ' = ' + (a + b), pics: [big(a + ' + ' + b), cards([ta + ' + ' + oa, tb + ' + ' + ob]), big(ta + ' + ' + tb + ' = ' + (ta + tb)), big(oa + ' + ' + ob + ' = ' + (oa + ob)), big(a + b)] }; },
      function () { var a = 10 * r(3, 9) + r(1, 4), b = r(5, 9), down = a % 10; return { q: 'What is ' + a + ' − ' + b + '?', steps: [a + ' take away ' + down + ' is ' + (a - down) + '.', 'Split ' + b + ' into ' + down + ' and ' + (b - down) + '.', (a - down) + ' − ' + (b - down) + ' = ' + (a - b) + '.'], final: a + ' − ' + b + ' = ' + (a - b), pics: [big(a + ' − ' + b), cards([a + ' − ' + down + ' = ' + (a - down)]), big((a - down) + ' − ' + (b - down) + ' = ' + (a - b))] }; }]
  };
  FL.workedSets(302, W2);
})();
