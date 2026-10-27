/* bite7.js: SAMPLE of the new three-slide lesson format, on P5 Topic 1 "Every digit has a place".
   Slide 1  Learn it: spoken in a teacher's voice, with a table and three worked examples
   Slide 2  Real life: a short story, a picture and something to tap
   Slide 3  Let's go deeper: a new insight, the usual mistake, more examples and a quick check
   Everything on the screen is the same text that Read aloud speaks, so it is written the way a teacher talks. */
(function () {
  'use strict';
  var S = Studio, H = S.h, BT = window.BT;
  if (!S.topics[501] || !BT) return;
  function rnd(a, b) { return a + Math.floor(Math.random() * (b - a + 1)); }
  function pick(a) { return a[rnd(0, a.length - 1)]; }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = rnd(0, i), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function fmt(n) { return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ','); }
  var COLS = ['ten thousands', 'thousands', 'hundreds', 'tens', 'ones'];
  var ONES = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  var TENS = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  function below100(n) { return n < 20 ? ONES[n] : TENS[Math.floor(n / 10)] + (n % 10 ? '-' + ONES[n % 10] : ''); }
  function words(n) {
    if (n === 0) return 'zero';
    var out = [], th = Math.floor(n / 1000), r = n % 1000, h = Math.floor(r / 100), t = r % 100;
    if (th) out.push(below100(th) + ' thousand');
    if (h) out.push(ONES[h] + ' hundred');
    if (t) out.push((th || h ? 'and ' : '') + below100(t));
    return out.join(' ');
  }
  function digitsOf(n) { var s = String(n); while (s.length < 5) s = '0' + s; return s.split('').map(Number); }
  function valueAt(n, i) { return digitsOf(n)[i] * Math.pow(10, 4 - i); }
  function table(n, hi) {
    var d = digitsOf(n);
    return '<table class="tbl" aria-label="Place value table for ' + fmt(n) + '"><tr>' + COLS.map(function (c) { return '<th>' + c + '</th>'; }).join('') + '</tr><tr>' +
      d.map(function (x, i) { return '<td' + (i === hi ? ' style="background:var(--accent-bg,#dfe9ff);font-size:1.4rem"' : ' style="font-size:1.3rem"') + '>' + x + '</td>'; }).join('') + '</tr></table>';
  }
  /* A worked question. The pupil types an answer (or taps a choice) and presses Check; Show step is their choice.
     gen() gives { q, pic, steps, answer, options?, correct?, accept? (a quiz question for H.matches), test? (fn) } */
  function esc2(x) { return String(x).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;'); }
  function workedCard(host, gen, canTry, tryLabel) {
    var ex = gen(); if (!ex) { host.style.display = 'none'; return; }
    var shown = 0, fb = '', typed = '', done = false;
    function grade(val) {
      var ok = false;
      try { ok = ex.test ? !!ex.test(val) : H.matches(ex.accept, val); } catch (e) { ok = false; }
      done = ok; typed = val;
      fb = ok ? '<div class="fb ok say" style="margin-top:10px"><strong>Right!</strong> Well done. Press Show step if you would like to see how it works.</div>'
               : '<div class="fb no say" style="margin-top:10px"><strong>Not quite.</strong> Have another go, or press Show step for some help.</div>';
      draw(true); speakBack('[data-fb]');
    }
    function speakBack(sel) { try { if (H.readActive && H.readActive() && H.narPlayFn) { var r = host.querySelector(sel); if (r && (r.matches('.say') || r.querySelector('.say'))) H.narPlayFn(true, r); } } catch (e) { } }
    function draw(keepFb) {
      var canAnswer = ex.options || ex.test || ex.accept, acc = ex.accept || {}, mc = !!ex.options;
      var inputHtml = '';
      if (canAnswer && mc) inputHtml = '<div class="row" style="gap:8px;margin-top:10px">' + ex.options.map(function (o, i) { return '<button class="btn ghost" type="button" data-o="' + i + '"' + (done ? ' disabled' : '') + '>' + o + '</button>'; }).join('') + '</div>';
      else if (canAnswer) inputHtml = '<form class="ans" data-f style="margin-top:10px"><label class="eyebrow" for="wIn" style="width:100%">Your answer' + (acc.unit ? ' (' + esc2(acc.unit) + ')' : '') + '</label><input id="wIn" type="text" inputmode="' + (ex.text || acc.kind === 'text' || acc.kind === 'time' || acc.kind === 'frac' ? 'text' : 'decimal') + '" autocomplete="off" value="' + esc2(typed) + '"' + (done ? ' disabled' : '') + ' placeholder="' + esc2(ex.placeholder || acc.placeholder || 'Type your answer') + '"><button class="btn" type="submit"' + (done ? ' disabled' : '') + '>Check</button></form>';
      host.innerHTML = '<div class="worked">' + (ex.pic ? '<div class="wvis">' + ex.pic + '</div>' : '') + '<p class="wq say">' + ex.q + '</p>' + inputHtml + '<div data-fb aria-live="polite">' + (keepFb ? fb : '') + '</div>' +
        (shown ? '<ol class="wsteps" style="min-height:0">' + ex.steps.slice(0, shown).map(function (t) { return '<li><span class="say">' + t + '</span></li>'; }).join('') + '</ol>' : '') +
        (shown >= ex.steps.length ? '<p class="wres say">' + ex.answer + '</p>' : '') +
        '<div class="row" style="align-items:center;margin-top:10px"><button class="btn" type="button" data-s>' + (shown >= ex.steps.length ? 'Hide steps' : 'Show step ' + (shown + 1)) + '</button>' +
        (canTry ? '<button class="btn" type="button" data-t style="margin-left:auto">' + (tryLabel || 'Try a different question') + '</button>' : '') + '</div></div>';
      host.querySelector('[data-s]').addEventListener('click', function () { var el = host.querySelector('#wIn'); if (el) typed = el.value; shown = shown >= ex.steps.length ? 0 : shown + 1; draw(true); if (shown) speakBack('.wsteps li:last-child, .wres'); });
      var t = host.querySelector('[data-t]'); if (t) t.addEventListener('click', function () { var e2 = gen(); if (e2) { ex = e2; shown = 0; fb = ''; typed = ''; done = false; draw(); speakBack('.wq'); } });
      var f = host.querySelector('[data-f]'); if (f) f.addEventListener('submit', function (e) { e.preventDefault(); var v = host.querySelector('#wIn').value.trim(); if (v) grade(v); });
      host.querySelectorAll('[data-o]').forEach(function (b) { b.addEventListener('click', function () { var o = ex.options[Number(b.getAttribute('data-o'))]; var ok = o === ex.correct; done = ok; fb = ok ? '<div class="fb ok say" style="margin-top:10px"><strong>Right!</strong> Well done. Press Show step if you would like to see how it works.</div>' : '<div class="fb no say" style="margin-top:10px"><strong>Not quite.</strong> Have another go, or press Show step for some help.</div>'; draw(true); speakBack('[data-fb]'); }); });
    }
    draw();
  }
  H.workedCard = workedCard;
  var worked = workedCard;
  function box(html) { return '<div class="card" style="background:var(--surface-2);margin:10px 0">' + html + '</div>'; }
  function tag(t) { return '<span class="step-tag say" style="margin-top:8px">' + t + '</span>'; }
  function say(t) { return '<p class="say" style="margin:0">' + t + '</p>'; }

  /* each press gives a different kind of question: starts with `first`, then moves round the list */
  function mix(list, first) {
    var last = first, used = false;
    return function () {
      if (!used) { used = true; return first(); }
      var c = list.filter(function (g) { return g !== last; }); last = c[Math.floor(Math.random() * c.length)] || first; return last();
    };
  }
  /* worked-example makers, each written as a teacher would say it */
  function genValue() {
    var ds = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]).slice(0, 5), n = Number(ds.join('')), i = rnd(0, 4), d = ds[i];
    return { q: 'In ' + fmt(n) + ', what is the ' + d + ' worth?', accept: { answer: String(valueAt(n, i)) }, answer: 'The ' + d + ' is worth ' + fmt(valueAt(n, i)) + '.',
      steps: ['First, spot the ' + d + ' in the number.',
        'Now ask: which column is it sitting in? Count from the right: ones, tens, hundreds, thousands, ten thousands. Your ' + d + ' is in the ' + COLS[i] + ' column.',
        'So we have ' + d + ' ' + COLS[i] + '. That is ' + fmt(valueAt(n, i)) + '.'] };
  }
  function genWords() {
    var ds = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]).slice(0, 5), n = Number(ds.join(''));
    return { q: 'Say the number ' + fmt(n) + ' in words.', accept: { kind: 'text', answer: words(n) }, text: true, placeholder: 'Type it in words', answer: words(n) + '.',
      steps: ['Start with the thousands part. Everything before the comma is read first: ' + words(Math.floor(n / 1000)) + ' thousand.',
        'Now read the last three digits as a number on their own: ' + words(n % 1000) + '.',
        'Put them together and you get ' + words(n) + '.'] };
  }
  function genZero() {
    var a = rnd(1, 9), b = rnd(1, 9), c = rnd(1, 9), pat = pick([[1, 0, 1, 0, 0], [1, 0, 0, 1, 0], [1, 0, 0, 0, 1], [1, 1, 0, 0, 1]]), mult = [a, b, c], k = 0,
      ds = pat.map(function (p) { return p ? mult[k++ % 3] : 0; }), n = Number(ds.join(''));
    var parts = []; ds.forEach(function (d, i) { if (d) parts.push(fmt(d * Math.pow(10, 4 - i))); });
    return { q: 'Write ' + fmt(n) + ' as a sum of its parts. (Expanded form)', text: true, placeholder: 'For example 20,000 + 300', test: function (v) { var a = String(v).replace(/,/g, '').match(/\\d+/g) || [], b = parts.map(function (x) { return x.replace(/,/g, ''); }); return a.length === b.length && a.slice().sort().join() === b.slice().sort().join(); }, answer: parts.join(' + ') + '.',
      steps: ['Look for the digits that are not zero. The zeros do not add anything, they just hold the places open.',
        'Now say what each of those digits is worth: ' + parts.join(', ') + '.',
        'Join them with plus signs: ' + parts.join(' + ') + '.'] };
  }
  function genWhole() {
    var ds = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]).slice(0, 5), n = Number(ds.join('')), i = rnd(0, 3), j = i + 1, d = ds[i];
    var ok = rnd(0, 1);
    return { q: 'Sam says: "In ' + fmt(n) + ', the ' + d + ' is worth ' + (ok ? fmt(valueAt(n, i)) : String(d)) + '." Is she right?',
      options: ['Yes', 'No'], correct: ok ? 'Yes' : 'No',
      answer: ok ? 'Yes, Sam is right.' : 'No. The ' + d + ' is worth ' + fmt(valueAt(n, i)) + '.',
      steps: ['Let’s check by finding the ' + d + ' in the table. It is in the ' + COLS[i] + ' column.',
        ok ? 'A ' + d + ' in the ' + COLS[i] + ' column is worth ' + fmt(valueAt(n, i)) + ', which is what Sam said.' : 'A ' + d + ' in the ' + COLS[i] + ' column is worth ' + fmt(valueAt(n, i)) + ', not just ' + d + '. Sam forgot the column.',
        ok ? 'So Sam is right.' : 'Remember: the digit tells you how many, and the column tells you of what.'] };
  }

  /* ---------- slide 1: Learn it ---------- */
  var slide1 = {
    title: 'Every digit has a place', v: '', say: [], real: null, noMore: true,
    goal: 'how the place of a digit tells us its value, up to 100,000.',
    live: function (host) {
      host.style.cssText = 'display:flex;flex-direction:column;gap:14px';
      host.innerHTML = '<div class="visual">' + table(34527, 1) + '<div class="caption">34,527: the 4 is in the thousands column</div></div>' +
        say('Let’s start with a big idea. We write every number using just ten digits: zero to nine. So how can ten little digits make a number as big as thirty-four thousand, five hundred and twenty-seven?') +
        say('The secret is where each digit sits. Have a look at the table. Every column has a name: ones, tens, hundreds, thousands and ten thousands. We always count the columns from the right.') +
        say('See the 4? It is sitting in the thousands column, so it is not worth four. It is worth four thousand!') +
        tag('Let’s work some out together') + say('Press <b>Show step</b> and I will take you through it one step at a time.') +
        '<div id="w1" class="card" style="background:var(--surface-2)"></div>';
      worked(host.querySelector('#w1'), mix([genValue, genWords, genWhole], genValue), true);
    }
  };

  /* ---------- slide 2: real life ---------- */
  var slide2 = {
    title: 'Every digit has a place: at the football match', v: '', say: [], real: null, noMore: true,
    goal: 'why the place of a digit matters when you meet big numbers in real life.',
    live: function (host) {
      host.style.cssText = 'display:flex;flex-direction:column;gap:14px';
      var n = 34527, d = digitsOf(n);
      var scene = '<svg viewBox="0 0 340 170" role="img" aria-label="A football stadium scoreboard showing 34,527 fans" style="width:100%;max-width:420px;height:auto">' +
        '<rect x="0" y="100" width="340" height="70" fill="#3f9b5a"/><ellipse cx="170" cy="138" rx="120" ry="24" fill="none" stroke="#fff" stroke-width="3"/><line x1="170" y1="114" x2="170" y2="162" stroke="#fff" stroke-width="3"/>' +
        '<rect x="40" y="10" width="260" height="74" rx="10" fill="#14213d"/><text x="170" y="34" text-anchor="middle" fill="#ffd166" style="font-size:14px;font-weight:700">TODAY’S CROWD</text>' +
        '<text x="170" y="72" text-anchor="middle" fill="#fff" style="font-size:34px;font-weight:800;letter-spacing:2px">' + fmt(n) + '</text>' +
        '<rect x="70" y="84" width="8" height="18" fill="#14213d"/><rect x="262" y="84" width="8" height="18" fill="#14213d"/></svg>';
      host.innerHTML = '<div class="visual">' + scene + '</div>' +
        say('Let’s meet Sam. Sam is at the football stadium with her dad, and she spots the big screen. It says that thirty-four thousand, five hundred and twenty-seven fans have come to watch today.') +
        say('Sam looks at the first digit. "That’s a three," she says. "So three fans?" Hmm, that does not sound right, does it? There are fans everywhere!') +
        tag('Try it: tap a digit') + say('Tap each digit on the scoreboard and I will tell you what it is really worth.') +
        '<div class="row" id="dg" style="justify-content:center;gap:10px">' + d.map(function (x, i) { return '<button class="btn" type="button" data-i="' + i + '" style="min-width:56px;font-size:1.5rem">' + x + '</button>'; }).join('') + '</div>' +
        '<div id="dgOut" class="card" style="background:var(--surface-2);min-height:5.2em;margin-top:10px"><p class="note" style="margin:0">Tap a digit above.</p></div>' +
        tag('What do you think?') + say('Sam says: "The 3 on the screen means three fans." Is Sam right?') +
        '<div class="row"><button class="btn" type="button" id="ans">Show the answer</button></div><div id="ansOut"></div>';
      var out = host.querySelector('#dgOut');
      host.querySelector('#dg').addEventListener('click', function (e) {
        var b = e.target.closest('button[data-i]'); if (!b) return; var i = Number(b.getAttribute('data-i'));
        out.innerHTML = '<p class="say" style="margin:0">This is a <b>' + d[i] + '</b> in the <b>' + COLS[i] + '</b> column. It is worth <b>' + fmt(valueAt(n, i)) + '</b>: ' + words(valueAt(n, i)) + '. That is ' + (i === 0 ? 'thirty thousand fans, nearly a full stadium on its own!' : i === 1 ? 'a big block of the crowd.' : i === 2 ? 'a few rows of seats.' : i === 3 ? 'a small group of friends.' : 'just a few more people.') + '</p>';
      });
      host.querySelector('#ans').addEventListener('click', function () {
        host.querySelector('#ansOut').innerHTML = box('<p class="say" style="margin:0"><b>Not quite!</b> The 3 sits in the ten thousands column, so it is worth thirty thousand. The same digit can mean three or thirty thousand. The place decides. That is why we have to look at the column every time.</p>');
      });
    }
  };

  /* ---------- slide 3: go deeper ---------- */
  var slide3 = {
    title: 'Every digit has a place: let’s go deeper', v: '', say: [], real: null, noMore: true,
    goal: 'how the same digit changes its worth, and what zero is doing.',
    live: function (host) {
      host.style.cssText = 'display:flex;flex-direction:column;gap:14px';
      host.innerHTML = say('Now for the clever part. The same digit can be worth very different amounts. Pick a column and watch what happens to a 5.') +
        '<div class="row" id="slide5" style="justify-content:center;gap:8px">' + COLS.map(function (c, i) { return '<button class="btn" type="button" data-i="' + i + '">' + c + '</button>'; }).join('') + '</div>' +
        '<div id="s5Out" class="card" style="background:var(--surface-2);text-align:center;margin:10px 0"><p class="note" style="margin:0">Pick a column.</p></div>' +
        tag('Zero is a place holder') +
        say('Now meet the zero. A zero is worth nothing by itself, but it has a very important job. It holds a place open. Compare <b>325</b> with <b>3,025</b>. The zero in 3,025 keeps the 3 in the thousands column. Take the zero away and the number shrinks to 325!') +
        tag('A mistake to watch for') +
        say('Many people read a digit as if it was on its own. They see the 7 in 70,402 and say "seven". But it is in the ten thousands column, so it is worth seventy thousand. Always ask: which column is it in?') +
        tag('Let’s work one out together') + say('Press <b>Show step</b>, then try a different question.') + '<div id="d1" class="card" style="background:var(--surface-2)"></div>' +
        tag('Check yourself') + say('In 56,031, which digit is worth six thousand?') +
        '<div class="row" id="ck" style="gap:8px"></div><div id="ckOut"></div>';
      var out = host.querySelector('#s5Out');
      host.querySelector('#slide5').addEventListener('click', function (e) {
        var b = e.target.closest('button[data-i]'); if (!b) return; var i = Number(b.getAttribute('data-i')), v = 5 * Math.pow(10, 4 - i);
        out.innerHTML = '<div style="font-size:2.2rem;font-weight:800">' + fmt(v) + '</div><p class="say" style="margin:0">A 5 in the <b>' + COLS[i] + '</b> column is worth <b>' + words(v) + '</b>.</p>';
      });
      worked(host.querySelector('#d1'), mix([genZero, genValue, genWords, genWhole], genZero), true);
      var opts = shuffle(['5', '6', '3', '1']), ck = host.querySelector('#ck');
      opts.forEach(function (o) { var b = document.createElement('button'); b.type = 'button'; b.className = 'btn'; b.textContent = o; b.style.minWidth = '64px'; ck.appendChild(b); });
      ck.addEventListener('click', function (e) {
        var b = e.target.closest('button'); if (!b) return;
        host.querySelector('#ckOut').innerHTML = b.textContent === '6' ? box('<p class="say" style="margin:0"><b>Yes, well done!</b> The 6 is in the thousands column, so it is worth 6,000.</p>') : box('<p class="say" style="margin:0"><b>Not this time.</b> Find the thousands column in 56,031: it holds the 6. So the 6 is worth 6,000. Have another go!</p>');
      });
    }
  };

  BT.hand = BT.hand || {}; BT.hand['501.learn1.0'] = [slide1, slide2, slide3];
})();
