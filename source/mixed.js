/* mixed.js: improper fractions and mixed numbers, both directions of conversion.
   Adds, to the Fractions topic of P5 (503), P6 (3), P7 (703) and S1 (803):
   - a clearer lesson sequence (improper, mixed, convert each way, try it)
   - a Mixed number maker activity and a Convert it game
   - one conversion question in every warm-up */
(function () {
  'use strict';
  var S = Studio, H = S.h;
  function $(id) { return document.getElementById(id); }
  function rnd(a, b) { return a + Math.floor(Math.random() * (b - a + 1)); }
  function pick(a) { return a[rnd(0, a.length - 1)]; }
  function fr(n, d) { return '<span class="fr"><b>' + n + '</b><i></i><b>' + d + '</b></span>'; }
  function mx(w, n, d) { return '<span class="mixed">' + w + ' ' + fr(n, d) + '</span>'; }
  var INK = '#1b2a4a', BLUE = '#3b6be0', ORANGE = '#e08a3b';
  var css = document.createElement('style');
  css.textContent = '.fr{display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;line-height:1.05;margin:0 .12em;font-weight:900}.fr i{display:block;width:100%;height:2px;background:currentColor;margin:1px 0}' +
    '.tryit{display:flex;flex-direction:column;gap:10px}.tryit .tq{font-size:1.15rem;font-weight:800}.tryit .fbk{background:var(--surface);border-radius:12px;padding:10px 12px;min-height:2.4em}.tryit .fbk.ok{border:2px solid var(--good);background:var(--good-bg)}.tryit .fbk.no{border:2px solid var(--bad);background:var(--bad-bg)}.bigeq{font-size:1.4rem;font-weight:900;text-align:center;margin:6px 0}';
  document.head.appendChild(css);

  /* ---------- pictures ---------- */
  function wrap(h, inner, alt) { return '<svg viewBox="0 0 560 ' + h + '" role="img" aria-label="' + alt + '" xmlns="http://www.w3.org/2000/svg" font-family="inherit">' + inner + '</svg>'; }
  /* n parts in bars of d parts each; the last bar is partly shaded */
  function wholeBars(n, d, alt) {
    var bw = 440, lab = 108, h = 40, gap = 14, y = 8, s = '', left = n, k = 1, pw = bw / d;
    while (left > 0) {
      var sh = Math.min(d, left);
      s += '<text x="4" y="' + (y + h * 0.72) + '" font-size="26" font-weight="800" fill="' + INK + '">' + (sh === d ? '1 whole' : sh + '/' + d) + '</text>';
      for (var i = 0; i < d; i++) s += '<rect x="' + (lab + i * pw).toFixed(1) + '" y="' + y + '" width="' + pw.toFixed(1) + '" height="' + h + '" fill="' + (i < sh ? (sh === d ? BLUE : ORANGE) : '#fff') + '" stroke="' + INK + '" stroke-width="2"/>';
      y += h + gap; left -= d; k++;
    }
    return wrap(y, s, alt || n + ' parts of size 1/' + d);
  }
  function panel(html) { return '<div class="bigeq">' + html + '</div>'; }

  /* ---------- "try it" widget (also used by the Convert it game) ---------- */
  function Qf(text, n, d, form, show, hints, explain, vis) { return { text: text, answer: n + '/' + d, show: show || n + '/' + d, kind: 'frac', form: form, hints: hints, explain: explain, vis: vis }; }
  function makeQ(cfg) {
    var d = rnd(cfg.dmin, cfg.dmax), w = rnd(1, cfg.wmax), r = rnd(1, d - 1), n = w * d + r, toMixed = Math.random() < 0.5;
    if (toMixed) return Qf('Write ' + n + '/' + d + ' as a mixed number.', n, d, 'mixed', w + ' ' + r + '/' + d,
      ['How many wholes? Divide ' + n + ' by ' + d + '.', n + ' ÷ ' + d + ' = ' + w + ' remainder ' + r + '. The remainder goes on top of the ' + d + '.'],
      n + ' ÷ ' + d + ' = ' + w + ' remainder ' + r + ', so ' + n + '/' + d + ' = ' + w + ' ' + r + '/' + d + '.', wholeBars(n, d, n + '/' + d + ' drawn as bars'));
    return Qf('Write ' + w + ' ' + r + '/' + d + ' as an improper fraction.', n, d, 'improper', n + '/' + d,
      ['Each whole is ' + d + '/' + d + '. How many parts are in ' + w + ' wholes? ' + w + ' × ' + d + '.', 'Now add the extra ' + r + ' parts: ' + w * d + ' + ' + r + '.'],
      w + ' × ' + d + ' + ' + r + ' = ' + n + ', so ' + w + ' ' + r + '/' + d + ' = ' + n + '/' + d + '.', wholeBars(n, d, w + ' ' + r + '/' + d + ' drawn as bars'));
  }
  function tryit(cfg, need, onGoal) {
    return function (host) {
      var q, hi, solved, count = 0;
      function fresh() { q = makeQ(cfg); host.__q = q; hi = 0; solved = false; draw('', ''); }
      function draw(fb, cls) {
        host.innerHTML = '<div class="tryit">' + (need ? '<div class="gm-top"><span class="gm-pill">Converted ' + count + ' of ' + need + '</span></div>' : '') + '<div class="visual">' + q.vis + '</div><div class="tq say">' + q.text + '</div>' +
          '<form class="ans" id="tyF"><input id="tyIn" type="text" inputmode="text" autocomplete="off" aria-label="Your answer"' + (solved ? ' disabled' : '') + '><button class="btn" type="submit"' + (solved ? ' disabled' : '') + '>Check</button></form><p class="note" style="min-height:0">Write a fraction like 7/4. For a mixed number write 1 3/4.</p>' +
          '<div class="fbk ' + cls + '" id="tyFb" aria-live="polite">' + fb + '</div><div class="row"><button class="btn ghost" id="tyHint" type="button"' + (solved ? ' disabled' : '') + '>Need a hint?</button><button class="btn ' + (solved ? '' : 'ghost') + '" id="tyNew" type="button">Another one</button></div></div>';
        $('tyNew').addEventListener('click', fresh);
        $('tyHint').addEventListener('click', function () { if (hi < q.hints.length) draw('<b>Hint ' + (hi + 1) + ':</b> ' + q.hints[hi++], ''); else draw('The answer is <b>' + q.show + '</b>. ' + q.explain, ''); });
        var ai = $('tyIn'); if (!solved) { ai.focus(); ai.addEventListener('input', function () { ai.value = ai.value.replace(/[^0-9\/ ]/g, ''); }); }
        $('tyF').addEventListener('submit', function (e) {
          e.preventDefault(); if (ai.value.trim() === '') return;
          if (H.matches(q, ai.value)) { solved = true; count++; var done = need && count >= need; draw('<b>Yes!</b> ' + q.explain + (done ? ' <b>You have finished the game!</b>' : ''), 'ok'); if (done && onGoal) onGoal(); }
          else draw('<b>Missed it.</b> ' + (q.form === 'mixed' ? 'Write it as a mixed number, for example 2 3/4.' : q.form === 'improper' ? 'Write it as one fraction, for example 11/4.' : '') + ' Look at the bars or press Need a hint.', 'no');
        });
      }
      fresh();
    };
  }

  /* ---------- the Mixed number maker ---------- */
  function maker(cfg) {
    return function (host, ctx) {
      var mode = 'im', d = 4, n = 11, w = 2, r = 3, moves = 0;
      host.innerHTML = '<div class="modes" role="group" aria-label="Choose direction"><button class="mode" id="mxA" aria-pressed="true" type="button">Improper → mixed</button><button class="mode" id="mxB" aria-pressed="false" type="button">Mixed → improper</button></div>' +
        '<div class="visual" id="mxVis"></div><div class="bigeq" id="mxTxt"></div><div class="explain say" id="mxWork"></div>' +
        '<label class="eyebrow" for="mxD">Size of each part (the bottom number)</label><input class="slider" id="mxD" type="range" min="2" max="' + cfg.dmax + '" value="4">' +
        '<div id="mxIm"><label class="eyebrow" for="mxN">Number of parts (the top number)</label><input class="slider" id="mxN" type="range" min="5" max="12" value="11"></div>' +
        '<div id="mxMi" style="display:none"><label class="eyebrow" for="mxW">Whole numbers</label><input class="slider" id="mxW" type="range" min="1" max="' + cfg.wmax + '" value="2"><label class="eyebrow" for="mxR">Parts left over</label><input class="slider" id="mxR" type="range" min="1" max="3" value="3"></div>';
      function draw() {
        $('mxA').setAttribute('aria-pressed', mode === 'im'); $('mxB').setAttribute('aria-pressed', mode === 'mi');
        $('mxIm').style.display = mode === 'im' ? '' : 'none'; $('mxMi').style.display = mode === 'mi' ? '' : 'none';
        var nn;
        if (mode === 'im') { $('mxN').min = d + 1; $('mxN').max = d * cfg.wmax + d - 1; if (n < d + 1) n = d + 1; if (n > d * cfg.wmax + d - 1) n = d * cfg.wmax + d - 1; $('mxN').value = n; nn = n; w = Math.floor(n / d); r = n % d; }
        else { $('mxR').max = d - 1; if (r > d - 1) r = d - 1; $('mxR').value = r; nn = w * d + r; }
        $('mxVis').innerHTML = wholeBars(nn, d);
        if (mode === 'im') {
          $('mxTxt').innerHTML = fr(nn, d) + ' = ' + (r ? mx(w, r, d) : w);
          $('mxWork').innerHTML = nn + ' ÷ ' + d + ' = ' + w + ' remainder ' + r + '. ' + (r ? 'The ' + w + ' is the whole number. The remainder ' + r + ' goes on top of the ' + d + '.' : 'It divides exactly, so it is just ' + w + ' wholes.');
        } else {
          $('mxTxt').innerHTML = mx(w, r, d) + ' = ' + fr(nn, d);
          $('mxWork').innerHTML = w + ' × ' + d + ' = ' + w * d + ' parts in the whole numbers. Add the ' + r + ' extra parts: ' + w * d + ' + ' + r + ' = ' + nn + '. So the top number is ' + nn + '.';
        }
        moves++; if (moves >= 8) ctx.complete();
      }
      $('mxA').addEventListener('click', function () { mode = 'im'; draw(); });
      $('mxB').addEventListener('click', function () { mode = 'mi'; draw(); });
      $('mxD').addEventListener('input', function (e) { d = Number(e.target.value); draw(); });
      $('mxN').addEventListener('input', function (e) { n = Number(e.target.value); draw(); });
      $('mxW').addEventListener('input', function (e) { w = Number(e.target.value); draw(); });
      $('mxR').addEventListener('input', function (e) { r = Number(e.target.value); draw(); });
      draw(); moves = 0;
    };
  }

  /* ---------- lesson slides ---------- */
  var YEAR = {
    P5: { dmin: 2, dmax: 5, wmax: 3, impN: 7, impD: 4, miW: 1, miR: 2, miD: 3 },
    P6: { dmin: 2, dmax: 8, wmax: 4, impN: 11, impD: 4, miW: 2, miR: 3, miD: 4 },
    P7: { dmin: 2, dmax: 10, wmax: 6, impN: 23, impD: 5, miW: 4, miR: 3, miD: 5 },
    S1: { dmin: 3, dmax: 12, wmax: 8, impN: 38, impD: 7, miW: 5, miR: 3, miD: 7 },
    S2: { dmin: 3, dmax: 12, wmax: 9, impN: 47, impD: 8, miW: 6, miR: 5, miD: 8 }
  };
  function introSlides(y) {
    var c = YEAR[y], iw = Math.floor(c.impN / c.impD), ir = c.impN % c.impD, mn = c.miW * c.miD + c.miR;
    return [
      { title: 'Improper fractions: more than one whole', v: wholeBars(c.impD + 3, c.impD, c.impD + 3 + ' parts of size 1/' + c.impD), say: [
        'When the top number is <b>bigger than</b> (or equal to) the bottom number, the fraction is worth <b>one whole or more</b>. It is called an <b>improper fraction</b>.',
        'Here every bar is cut into ' + c.impD + ' equal parts. ' + fr(c.impD, c.impD) + ' fills one whole bar. ' + fr(c.impD + 3, c.impD) + ' fills one whole bar and 3 more parts.',
        'A <b>proper</b> fraction like ' + fr(3, c.impD) + ' has a top number smaller than the bottom. It is less than one whole.'] },
      { title: 'Mixed numbers: wholes and a part', v: wholeBars(c.miW * c.miD + c.miR, c.miD, c.miW + ' ' + c.miR + '/' + c.miD + ' as bars'), say: [
        'A <b>mixed number</b> shows the whole bars and the part-bar separately. Here: ' + c.miW + ' whole' + (c.miW > 1 ? 's' : '') + ' and ' + fr(c.miR, c.miD) + '.',
        'We write it as ' + mx(c.miW, c.miR, c.miD) + '. It means ' + c.miW + ' + ' + fr(c.miR, c.miD) + '.',
        'A mixed number and an improper fraction can be the same amount. ' + mx(c.miW, c.miR, c.miD) + ' = ' + fr(mn, c.miD) + '.'] },
      { title: 'Improper to mixed', ex: {
        q: 'Write ' + fr(c.impN, c.impD) + ' as a mixed number.',
        steps: ['Ask: how many whole bars? Each whole is ' + c.impD + ' parts. Divide: ' + c.impN + ' ÷ ' + c.impD + ' = ' + iw + ' remainder ' + ir + '.', 'The answer ' + iw + ' is the number of wholes.', 'The remainder ' + ir + ' is the number of parts left over. It goes on top of the ' + c.impD + '.', 'So ' + fr(c.impN, c.impD) + ' = ' + mx(iw, ir, c.impD) + '.'],
        final: c.impN + '/' + c.impD + ' = ' + iw + ' ' + ir + '/' + c.impD,
        render: function (shown) { return wholeBars(c.impN, c.impD); } } },
      { title: 'Mixed to improper', ex: {
        q: 'Write ' + mx(c.miW, c.miR, c.miD) + ' as an improper fraction.',
        steps: ['Each whole is ' + c.miD + '/' + c.miD + '. So ' + c.miW + ' whole' + (c.miW > 1 ? 's are ' : ' is ') + c.miW + ' × ' + c.miD + ' = ' + c.miW * c.miD + ' parts.', 'Add the ' + c.miR + ' extra parts: ' + c.miW * c.miD + ' + ' + c.miR + ' = ' + mn + '.', 'Keep the bottom number the same. The top number is ' + mn + '.', 'So ' + mx(c.miW, c.miR, c.miD) + ' = ' + fr(mn, c.miD) + '.'],
        final: c.miW + ' ' + c.miR + '/' + c.miD + ' = ' + mn + '/' + c.miD,
        render: function (shown) { return wholeBars(mn, c.miD); } } },
      { title: 'Remember the two rules', v: panel('Improper → mixed: <b>divide</b>, remainder on top') + panel('Mixed → improper: <b>whole × bottom + top</b>'), say: [
        'Going to a mixed number: divide the top by the bottom. The answer is the wholes. The remainder is the new top number.',
        'Going to an improper fraction: multiply the whole number by the bottom number, then add the top number. The bottom number does not change.',
        'You can always check by drawing the bars!'] },
      { title: 'Try it yourself', v: '', say: ['Convert these. You will get both kinds: improper to mixed, and mixed to improper. Use the bars and hints if you need them.'], live: tryit(c) }
    ];
  }

  /* worked example helper: question, steps, final line, and a picture or sum panel */
  function wex(q, steps, final, vis) { return { q: q, steps: steps, final: final, render: function () { return vis; } }; }
  function slidesFor(y) {
    var c = YEAR[y];
    if (y === 'P5') return introSlides('P5');
    var ty = function (txt) { return { title: 'Try it yourself', v: '', say: [txt], live: tryit(c) }; };
    if (y === 'P6') return [
      { title: 'Fractions bigger than one: a quick recap', v: wholeBars(11, 4, '11 quarters drawn as bars'), say: [
        'In Primary 5 you met fractions that are worth more than one whole. Here ' + fr(11, 4) + ' fills 2 whole bars and 3 more quarters.',
        'Written as a mixed number it is ' + mx(2, 3, 4) + '. Both forms show exactly the same amount.',
        'Today you will change between the two forms with bigger numbers, and then compare them.'] },
      { title: 'Improper to mixed using division', ex: wex('Write ' + fr(43, 6) + ' as a mixed number.', [
        'The bottom number 6 tells you how many parts make one whole.', 'Divide the top by the bottom: 43 ÷ 6 = 7 remainder 1. There are 7 wholes.', 'The remainder 1 is the parts left over, so it goes on top of the 6.', 'So ' + fr(43, 6) + ' = ' + mx(7, 1, 6) + '.'], '43/6 = 7 1/6', wholeBars(43, 6)) },
      { title: 'Mixed to improper by multiplying', ex: wex('Write ' + mx(5, 3, 8) + ' as an improper fraction.', [
        'Each whole is ' + fr(8, 8) + '. Five wholes make 5 × 8 = 40 eighths.', 'Add the 3 extra eighths: 40 + 3 = 43.', 'The bottom number stays 8. So ' + mx(5, 3, 8) + ' = ' + fr(43, 8) + '.'], '5 3/8 = 43/8', wholeBars(43, 8)) },
      { title: 'Which is bigger?', v: panel(mx(2, 3, 4) + ' or ' + mx(2, 5, 8) + ' ?'), say: [
        'To compare two mixed numbers, look at the whole numbers first. If they are different, the bigger whole number wins.',
        'If the wholes are the same, compare the fraction parts. Make the bottom numbers match: ' + fr(3, 4) + ' = ' + fr(6, 8) + '.',
        'Since ' + fr(6, 8) + ' is more than ' + fr(5, 8) + ', ' + mx(2, 3, 4) + ' is bigger than ' + mx(2, 5, 8) + '.'] },
      ty('Convert these in both directions. The numbers are bigger than before, so write your division or multiplication down.')
    ];
    if (y === 'P7') return [
      { title: 'Why change a mixed number?', v: panel(mx(2, 1, 2) + ' + ' + mx(1, 3, 4)), say: [
        'You can already move between improper fractions and mixed numbers. Now you will use that to calculate.',
        'Mixed numbers are easy to read, but improper fractions are easier to add, subtract and multiply, because there is only one fraction to deal with.',
        'The plan is: convert, calculate, then change the answer back to a mixed number.'] },
      { title: 'Adding mixed numbers', ex: wex('Work out ' + mx(2, 1, 2) + ' + ' + mx(1, 3, 4) + '.', [
        'Add the whole numbers: 2 + 1 = 3.', 'Add the fractions. Make the bottom numbers match: ' + fr(1, 2) + ' = ' + fr(2, 4) + '. Then ' + fr(2, 4) + ' + ' + fr(3, 4) + ' = ' + fr(5, 4) + '.', 'That is more than one whole: ' + fr(5, 4) + ' = ' + mx(1, 1, 4) + '.', 'Put it together: 3 + ' + mx(1, 1, 4) + ' = ' + mx(4, 1, 4) + '.'], '2 1/2 + 1 3/4 = 4 1/4', wholeBars(17, 4)) },
      { title: 'Subtracting by converting', ex: wex('Work out ' + mx(3, 1, 5) + ' − ' + mx(1, 3, 5) + '.', [
        'Convert both to improper fractions: ' + mx(3, 1, 5) + ' = ' + fr(16, 5) + ' and ' + mx(1, 3, 5) + ' = ' + fr(8, 5) + '.', 'The bottom numbers match, so subtract the tops: 16 − 8 = 8.', 'That gives ' + fr(8, 5) + '. Change it back: 8 ÷ 5 = 1 remainder 3, so ' + mx(1, 3, 5) + '.'], '3 1/5 − 1 3/5 = 1 3/5', wholeBars(8, 5)) },
      { title: 'A mixed number times a whole number', ex: wex('A bottle holds ' + mx(2, 1, 4) + ' litres. How much do 3 bottles hold?', [
        'Convert: ' + mx(2, 1, 4) + ' = ' + fr(9, 4) + '.', 'Multiply the top by 3: 3 × 9 = 27. The bottom stays 4.', 'Change back: 27 ÷ 4 = 6 remainder 3, so ' + mx(6, 3, 4) + ' litres.'], '3 × 2 1/4 = 6 3/4', wholeBars(27, 4)) },
      ty('Convert these first. You will need this skill every time you calculate with mixed numbers.')
    ];
    if (y === 'S1') return [
      { title: 'A fraction is a division', v: panel(fr(38, 7) + ' = 38 ÷ 7'), say: [
        'The line in a fraction means divide. ' + fr(38, 7) + ' is the same as 38 ÷ 7.',
        '38 ÷ 7 = 5 remainder 3, so ' + fr(38, 7) + ' = ' + mx(5, 3, 7) + '. As a decimal it is about 5.43.',
        'Seeing a fraction as a division links improper fractions, mixed numbers and decimals.'] },
      { title: 'Multiplying mixed numbers', ex: wex('Work out ' + mx(1, 1, 2) + ' × ' + mx(2, 2, 3) + '.', [
        'Convert both to improper fractions: ' + mx(1, 1, 2) + ' = ' + fr(3, 2) + ' and ' + mx(2, 2, 3) + ' = ' + fr(8, 3) + '.', 'Cancel before multiplying: the 3 on top cancels with the 3 on the bottom.', 'That leaves 1 × 8 over 2 × 1, which is ' + fr(8, 2) + ' = 4.'], '1 1/2 × 2 2/3 = 4', panel(fr(3, 2) + ' × ' + fr(8, 3) + ' = 4')) },
      { title: 'Dividing mixed numbers', ex: wex('Work out ' + mx(2, 1, 4) + ' ÷ ' + mx(1, 1, 2) + '.', [
        'Convert: ' + mx(2, 1, 4) + ' = ' + fr(9, 4) + ' and ' + mx(1, 1, 2) + ' = ' + fr(3, 2) + '.', 'To divide, flip the second fraction and multiply: ' + fr(9, 4) + ' × ' + fr(2, 3) + '.', 'Cancel: 9 and 3 share a factor 3, and 2 and 4 share a factor 2. That gives ' + fr(3, 2) + '.', 'Change back: ' + fr(3, 2) + ' = ' + mx(1, 1, 2) + '.'], '2 1/4 ÷ 1 1/2 = 1 1/2', panel(fr(9, 4) + ' ÷ ' + fr(3, 2) + ' = ' + mx(1, 1, 2))) },
      { title: 'Fraction problems with mixed numbers', ex: wex('A recipe needs ' + mx(2, 3, 4) + ' cups of flour. How much flour is needed for 3 batches?', [
        'Each batch uses ' + mx(2, 3, 4) + ' = ' + fr(11, 4) + ' cups.', 'For 3 batches multiply: 3 × 11 = 33, so ' + fr(33, 4) + ' cups.', 'Change back: 33 ÷ 4 = 8 remainder 1, so ' + mx(8, 1, 4) + ' cups.'], '3 × 2 3/4 = 8 1/4', wholeBars(33, 4)) },
      ty('Convert these between improper fractions and mixed numbers. The denominators are larger now, so check each answer by dividing.')
    ];
    return [
      { title: 'Terminating and recurring decimals', v: panel(fr(5, 6) + ' = 0.8333…'), say: [
        'Every fraction can be written as a decimal by dividing the top by the bottom.',
        'Some stop, like ' + fr(3, 8) + ' = 0.375. Others repeat for ever, like ' + fr(5, 6) + ' = 0.8333…',
        'A fraction in its simplest form stops only when its bottom number has no prime factors except 2 and 5.'] },
      { title: 'Subtracting mixed numbers with different denominators', ex: wex('Work out ' + mx(3, 2, 3) + ' − ' + mx(1, 3, 4) + '.', [
        'Convert: ' + mx(3, 2, 3) + ' = ' + fr(11, 3) + ' and ' + mx(1, 3, 4) + ' = ' + fr(7, 4) + '.', 'The lowest common denominator of 3 and 4 is 12: ' + fr(11, 3) + ' = ' + fr(44, 12) + ' and ' + fr(7, 4) + ' = ' + fr(21, 12) + '.', 'Subtract: 44 − 21 = 23, so ' + fr(23, 12) + '.', 'Change back: ' + mx(1, 11, 12) + '.'], '3 2/3 − 1 3/4 = 1 11/12', wholeBars(23, 12)) },
      { title: 'Reverse fraction problems', ex: wex(fr(3, 5) + ' of a number is 45. What is the number?', [
        'Three fifths is 45, so one fifth is 45 ÷ 3 = 15.', 'The whole is five fifths: 5 × 15 = 75.', 'Check: ' + fr(3, 5) + ' of 75 = 45. ✓'], 'The number is 75', panel('3 parts = 45, so 5 parts = 75')) },
      ty('Convert these. Then try to explain each answer in your own words, as you would in an exam.')
    ];
  }

  function warmQ(c) {
    var q = makeQ(c);
    return { tag: 'Mental maths', text: q.text, answer: q.answer, kind: 'frac', form: q.form, type: 'input', hints: q.hints, explain: q.explain };
  }

  /* ---------- install ---------- */
  var MAP = { 503: 'P5', 3: 'P6', 703: 'P7', 803: 'S1', 821: 'S2' };
  Object.keys(MAP).forEach(function (k) {
    var t = S.topics[k]; if (!t) return;
    var c = YEAR[MAP[k]], replaced = false;
    t.steps.filter(function (s) { return s.type === 'slides'; }).forEach(function (st) {
      if (replaced) return;
      var i = -1, del = 1; st.slides.forEach(function (sl, j) { if (i < 0 && /mixed|improper/i.test(sl.title)) i = j; });
      if (i < 0) { st.slides.forEach(function (sl, j) { if (i < 0 && /fractions/i.test(sl.title)) i = j; }); if (i < 0) return; i += 1; del = 0; }
      var news = slidesFor(MAP[k]), key = k + '.' + st.id, meta = H.slideMeta || { goals: {}, more: {} };
      [meta.goals, meta.more].forEach(function (m) {
        if (!m[key]) return; var a = m[key].slice(); a.splice(i, del, ...news.map(function () { return undefined; })); m[key] = a;
      });
      st.slides.splice.apply(st.slides, [i, del].concat(news));
      replaced = true;
    });
    if (!replaced) return;
    t.steps.push({ id: 'mixmaker', label: 'Mixed number maker', type: 'lab', tag: 'Activity', title: 'Mixed number maker', lead: 'Change between improper fractions and mixed numbers. Move the sliders and watch the bars and the working.', mount: maker(c) });
    t.steps.push({ id: 'convert', label: 'Convert it', type: 'lab', tag: 'Game', title: 'Convert it', lead: 'Convert six fractions, in both directions, to finish the game.', mount: function (host, ctx) { tryit(c, 6, function () { ctx.complete(); })(host); } });
    var wm = t.steps.filter(function (s) { return s.id === 'warm'; })[0];
    if (wm) { var orig = wm.make; wm.make = function () { var b = orig(); if (!Array.isArray(b)) b = [b]; b = b.slice(); b.splice(1, 0, warmQ(c)); return b; }; }
    S.arrange(t);
  });
})();
