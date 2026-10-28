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
  var YEARS = { all: S.order.slice() };
  var STEPS = ['learn1', 'learn2', 'learn3', 'learn4', 'learn8'];

  function rnd(a, b) { return a + Math.floor(Math.random() * (b - a + 1)); }
  function pick(a) { return a[rnd(0, a.length - 1)]; }
  function plain(h) { return String(h == null ? '' : h).replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim(); }
  function sentences(t) { return String(t || '').split(/(?<=[.!?])\s+(?=[A-Z0-9£−(])/).map(function (x) { return x.trim(); }).filter(Boolean); }
  function say(t) { return '<p class="say" style="margin:0">' + t + '</p>'; }
  function tag(t) { return '<span class="step-tag say" style="margin-top:8px">' + t + '</span>'; }
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
          return { q: q.text, pic: q.pic || '', steps: steps, accept: q.type === 'mc' ? null : q, placeholder: q.placeholder, answer: 'The answer is ' + plain(answerOf(q)) + '.', options: q.type === 'mc' && q.options ? q.options.map(function (o) { return plain(o); }) : null, correct: plain(answerOf(q)), explain: q.explain };
        } catch (e) { }
      }
      return null;
    };
  }
  /* a generator that moves between the topic's different kinds of question each time */
  function mixFor(n, tagList, first) {
    var gens = tagList.map(function (t) { return genFor(n, t); }), i = -1, used = false;
    return function () {
      if (first && !used) { used = true; return first; }
      if (!gens.length) return null;
      for (var k = 0; k < gens.length; k++) { i = (i + 1 + (k === 0 ? rnd(0, gens.length - 1) : 0)) % gens.length; var e = gens[i](); if (e) return e; }
      return null;
    };
  }
  function worked(host, gen, canTry) { H.workedCard(host, gen, canTry); }
  function check(host, gen) { H.workedCard(host, gen, true, 'Try another one'); }

  /* ----- build the three slides from one old slide ----- */
  function threeFrom(n, stepId, k, s, goal, m, offset) {
    var title = s.title, vis = visualOf(s), blob = [s.title, goal, (s.say || []).join(' '), s.ex ? s.ex.q : '', m && m.more ? m.more.join(' ') : ''].join(' ');
    var tags = tagsFor(n, blob, offset), own = (s.tags || []).filter(function (t) { return (BT.tagMk[n] || {})[t]; });
    if (own.length) tags = own;
    var tA = tags[0], tB = tags[1] || tags[0], tC = tags[2] || tags[0];
    var real = s.story || (BT.pickStory && BT.pickStory(n, title, goal, k)) || (s.real && typeof s.real === 'string' ? s.real : '');
    var A = s.live ? s : {
      title: title, v: '', say: [], real: null, goal: goal || 'the key idea of this lesson.',
      live: function (host) {
        host.style.cssText = 'display:flex;flex-direction:column;gap:14px';
        host.innerHTML = (vis ? '<div class="visual" style="max-width:340px;margin:0 auto;width:100%">' + vis + '</div>' : '') + say(OPEN_A[(offset + k) % OPEN_A.length]) +
          (s.say || []).map(say).join('') + tag('Let’s work some out together') + say('Press <b>Show step</b> and I will take you through it one step at a time.') +
          card('', 'w0');
        var fin = s.ex ? plain(s.ex.final).replace(/\.$/, '') : '', firstEx = s.ex ? { q: s.ex.q, pic: '', steps: s.ex.steps, answer: 'The answer is ' + plain(s.ex.final) + '.', accept: /^[\d,.\s−-]+$/.test(fin) ? { answer: fin.replace(/,/g, '').replace(/−/g, '-') } : null } : null;
        worked(host.querySelector('#w0'), mixFor(n, tags.slice(0, 4), firstEx), true);
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
      title: title + ': let’s go deeper', v: '', say: [], real: null, goal: 'a deeper look at why this works, a worked example with explanation, and a quick check.',
      live: function (host) {
        host.style.cssText = 'display:flex;flex-direction:column;gap:14px';
        host.innerHTML = say(OPEN_C[(offset + k) % OPEN_C.length]) +
          (s.insight ? s.insight.map(say).join('') : BT.pickInsight ? BT.pickInsight(n, title, goal).map(say).join('') : (more.length ? more.map(say).join('') : '')) +
          tag('Let’s see the idea in action') + say('Try this one yourself, then press <b>Show step</b> and I will explain why each step works. You can try a different question too.') + card('', 'd1') + tag('Check yourself') + say('One more for luck. Choose your answer.') + card('', 'e1');
        worked(host.querySelector('#d1'), mixFor(n, tags.slice(0, 4)), true);
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
