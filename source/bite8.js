/* bite8.js: turns every lesson slide of the chosen year into the three-slide format.
     Slide 1  Learn it: the picture and the key idea in a teacher's voice, then worked examples
     Slide 2  In real life: a short story, the picture again, and a question to think about
     Slide 3  Let's go deeper: more insight, more examples, a quick check
   The worked examples and questions come from each topic's own question makers, so
   "Try different numbers" always gives a fresh one. Everything on screen is what Read aloud speaks. */
(function () {
  'use strict';
  var S = Studio, H = S.h, BT = window.BT;
  if (!BT || !BT.tagMk) return;
  var YEARS = { P5: [501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 513] };
  var STEPS = ['learn1', 'learn2', 'learn3', 'learn4'];

  function rnd(a, b) { return a + Math.floor(Math.random() * (b - a + 1)); }
  function pick(a) { return a[rnd(0, a.length - 1)]; }
  function plain(h) { return String(h == null ? '' : h).replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim(); }
  function sentences(t) { return String(t || '').split(/(?<=[.!?])\s+(?=[A-Z0-9£−(])/).map(function (x) { return x.trim(); }).filter(Boolean); }
  function say(t) { return '<p class="say" style="margin:0">' + t + '</p>'; }
  function tag(t) { return '<span class="step-tag" style="margin-top:8px">' + t + '</span>'; }
  function card(inner, id) { return '<div' + (id ? ' id="' + id + '"' : '') + ' class="card" style="background:var(--surface-2)">' + inner + '</div>'; }
  function box(html) { return '<div class="card" style="background:var(--surface-2);margin:10px 0"><p class="say" style="margin:0">' + html + '</p></div>'; }
  function visualOf(s) { return s.ex ? (s.ex.render ? s.ex.render(s.ex.steps.length) : '') : (typeof s.v === 'function' ? s.v() : (s.v || '')); }

  var OPEN_A = ['Let’s take this one step at a time.', 'Here comes the big idea.', 'Have a look at the picture first, then I’ll explain.', 'Ready? Let’s dive in.', 'This is a really useful one, so let’s go slowly.'];
  var OPEN_B = ['Now let’s see where this turns up in real life.', 'You might be surprised how often you meet this.', 'Let’s step outside the classroom for a moment.'];
  var OPEN_C = ['Now for the clever part.', 'Let’s dig a little deeper.', 'Here is something that will help you spot the tricky ones.'];

  /* ----- questions from the topic's own makers ----- */
  function words(s) { return String(s).toLowerCase().replace(/[^a-z0-9 ]/g, ' ').split(/\s+/).filter(function (w) { return w.length >= 4; }); }
  function tagsFor(n, text, offset) {
    var map = BT.tagMk[n] || {}, tags = Object.keys(map); if (!tags.length) return [];
    var tok = {}; words(text).forEach(function (w) { tok[w.slice(0, 5)] = 1; });
    var scored = tags.map(function (t, i) { var sc = 0; words(t).forEach(function (w) { if (tok[w.slice(0, 5)]) sc++; }); return { t: t, sc: sc, i: i }; });
    var hit = scored.filter(function (x) { return x.sc > 0; }).sort(function (a, b) { return b.sc - a.sc || a.i - b.i; }).map(function (x) { return x.t; });
    var rest = tags.slice(offset % tags.length).concat(tags.slice(0, offset % tags.length)).filter(function (t) { return hit.indexOf(t) < 0; });
    return hit.concat(rest);
  }
  function answerOf(q) { return q.type === 'mc' && typeof q.answer === 'number' && q.options ? q.options[q.answer] : q.answer; }
  /* a function that makes a fresh question (as steps, answer, options) from the makers of a tag */
  function genFor(n, tagName) {
    var mks = (BT.tagMk[n] || {})[tagName] || [], last = '';
    return function () {
      for (var k = 0; k < 30; k++) {
        try {
          var q = pick(mks)(); if (!q || !q.hints || !q.explain) continue;
          var sig = plain(q.text) + (q.pic || ''); if (sig === last && k < 25) continue; last = sig;
          var steps = (q.hints || []).map(function (h) { return 'Here’s a clue: ' + h; }).concat(sentences(q.explain));
          return { q: q.text, pic: q.pic || '', steps: steps, answer: 'The answer is ' + plain(answerOf(q)) + '.', options: q.type === 'mc' && q.options ? q.options.map(function (o) { return plain(o); }) : null, correct: plain(answerOf(q)), explain: q.explain };
        } catch (e) { }
      }
      return null;
    };
  }
  function worked(host, gen, canTry) {
    var ex = gen(); if (!ex) { host.style.display = 'none'; return; }
    var shown = 0;
    host.style.userSelect = 'none'; host.style.caretColor = 'transparent';
    function draw() {
      host.innerHTML = '<div class="worked">' + (ex.pic ? '<div class="wvis">' + ex.pic + '</div>' : '') + '<p class="wq say">' + ex.q + '</p>' +
        (ex.options ? '<p class="note say" style="min-height:0">Choices: ' + ex.options.map(function (o) { return '<b>' + o + '</b>'; }).join(', ') + '</p>' : '') +
        (shown ? '<ol class="wsteps" style="min-height:0">' + ex.steps.slice(0, shown).map(function (s) { return '<li><span class="say">' + s + '</span></li>'; }).join('') + '</ol>' : '') +
        (shown >= ex.steps.length ? '<p class="wres">' + ex.answer + '</p>' : '') +
        '<div class="row" style="align-items:center"><button class="btn" type="button" data-s>' + (shown >= ex.steps.length ? 'Start again' : 'Show step ' + (shown + 1)) + '</button>' +
        (canTry ? '<button class="btn" type="button" data-t style="margin-left:auto">Try different numbers</button>' : '') + '</div></div>';
      host.querySelector('[data-s]').addEventListener('click', function () { shown = shown >= ex.steps.length ? 0 : shown + 1; draw(); });
      var t = host.querySelector('[data-t]'); if (t) t.addEventListener('click', function () { var e2 = gen(); if (e2) { ex = e2; shown = 0; draw(); } });
    }
    draw();
  }
  /* a question the pupil answers: tap a choice, or press to see the answer */
  function check(host, gen) {
    var ex = gen(); if (!ex) { host.style.display = 'none'; return; }
    host.style.userSelect = 'none'; host.style.caretColor = 'transparent';
    function draw() {
      var opts = ex.options ? '<div class="row" style="gap:8px">' + ex.options.map(function (o, i) { return '<button class="btn" type="button" data-o="' + i + '">' + o + '</button>'; }).join('') + '</div>'
        : '<div class="row"><button class="btn" type="button" data-r>Show the answer</button></div>';
      host.innerHTML = '<div class="worked">' + (ex.pic ? '<div class="wvis">' + ex.pic + '</div>' : '') + '<p class="wq say">' + ex.q + '</p>' + opts + '<div data-out></div>' +
        '<div class="row"><button class="btn" type="button" data-n style="margin-left:auto">Try another one</button></div></div>';
      var out = host.querySelector('[data-out]');
      host.querySelectorAll('[data-o]').forEach(function (b) {
        b.addEventListener('click', function () {
          var ok = ex.options[Number(b.getAttribute('data-o'))] === ex.correct;
          out.innerHTML = box(ok ? '<b>Yes, well done!</b> ' + ex.explain : '<b>Not quite.</b> ' + ex.explain + ' Have another go!');
        });
      });
      var r = host.querySelector('[data-r]'); if (r) r.addEventListener('click', function () { out.innerHTML = box('<b>' + ex.answer + '</b> ' + ex.explain); });
      host.querySelector('[data-n]').addEventListener('click', function () { var e2 = gen(); if (e2) { ex = e2; draw(); } });
    }
    draw();
  }

  /* ----- build the three slides from one old slide ----- */
  function threeFrom(n, stepId, k, s, goal, m, offset) {
    var title = s.title, vis = visualOf(s), blob = [s.title, goal, (s.say || []).join(' '), s.ex ? s.ex.q : '', m && m.more ? m.more.join(' ') : ''].join(' ');
    var tags = tagsFor(n, blob, offset), tA = tags[0], tB = tags[1] || tags[0], tC = tags[2] || tags[0];
    var real = s.real && typeof s.real === 'string' ? s.real : '';
    var A = s.live ? s : {
      title: title, v: '', say: [], real: null, goal: goal || 'the key idea of this lesson.',
      live: function (host) {
        host.style.cssText = 'display:flex;flex-direction:column;gap:14px';
        host.innerHTML = (vis ? '<div class="visual" style="max-width:460px;margin:0 auto;width:100%">' + vis + '</div>' : '') + say(OPEN_A[(offset + k) % OPEN_A.length]) +
          (s.say || []).map(say).join('') + tag('Let’s work some out together') + say('Press <b>Show step</b> and I will take you through it one step at a time.') +
          (s.ex ? card('', 'w0') : '') + (tA ? card('', 'w1') : '') + (tA && tB !== tA ? card('', 'w2') : '');
        if (s.ex) worked(host.querySelector('#w0'), function () { return { q: s.ex.q, pic: '', steps: s.ex.steps, answer: s.ex.final }; }, false);
        if (tA) worked(host.querySelector('#w1'), genFor(n, tA), true);
        if (tA && tB !== tA) worked(host.querySelector('#w2'), genFor(n, tB), true);
      }
    };
    var B = {
      title: title + ': in real life', v: '', say: [], real: null, goal: 'where this idea turns up in everyday life.',
      live: function (host) {
        host.style.cssText = 'display:flex;flex-direction:column;gap:14px';
        host.innerHTML = (vis ? '<div class="visual" style="max-width:300px;margin:0 auto;width:100%">' + vis + '</div>' : '') + say(OPEN_B[(offset + k) % OPEN_B.length]) +
          say(real || 'You will use this idea more often than you think, at school, at the shops and at home. Let’s see it in action.') +
          tag('What do you think?') + say('Have a go at this one. Take your time, and press the button if you want to check.') + card('', 'c1');
        check(host.querySelector('#c1'), genFor(n, tB));
      }
    };
    var more = (m && m.more) || [], eg = (m && m.eg) || [];
    var C = {
      title: title + ': let’s go deeper', v: '', say: [], real: null, goal: 'more about this idea, with extra examples and a quick check.',
      live: function (host) {
        host.style.cssText = 'display:flex;flex-direction:column;gap:14px';
        host.innerHTML = say(OPEN_C[(offset + k) % OPEN_C.length]) +
          (more.length ? more.map(say).join('') : say('Let’s look at one more way to think about it.')) +
          (eg.length ? tag('More examples') + '<ul class="say" style="margin:0;padding-left:1.3rem;display:grid;gap:6px">' + eg.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul>' : '') +
          tag('A few more to try') + card('', 'd1') + card('', 'd2') + tag('Check yourself') + say('One more for luck. Choose your answer.') + card('', 'e1');
        worked(host.querySelector('#d1'), genFor(n, tC), true);
        worked(host.querySelector('#d2'), genFor(n, tA || tC), true);
        check(host.querySelector('#e1'), genFor(n, tB));
      }
    };
    return [A, B, C];
  }

  function convert(n) {
    var t = S.topics[n]; if (!t) return;
    var offset = n % 7;
    STEPS.forEach(function (id) {
      var st = t.steps.filter(function (x) { return x.id === id && x.slides; })[0]; if (!st) return;
      var key = n + '.' + id, goals = H.slideMeta.goals[key] || [], mores = H.slideMeta.more[key] || [], out = [];
      st.slides.forEach(function (s, k) {
        var hand = BT.hand && BT.hand[key + '.' + k];
        out = out.concat(hand || threeFrom(n, id, k, s, goals[k], mores[k], offset + k));
      });
      st.slides = out;
      H.slideMeta.goals[key] = out.map(function (x) { return x.goal; });
      H.slideMeta.more[key] = out.map(function () { return null; });
    });
  }
  Object.keys(YEARS).forEach(function (y) { YEARS[y].forEach(convert); });
})();
