/* test10.js: "10-minute mental maths test". 18 mixed questions from the year's own topics, 10:00 countdown, score out of 18 and a review of mistakes.
   Adds one card to the year page and opens a full-screen test panel. It does not change any existing button, topic or progress. */
(function () {
  'use strict';
  var S = window.Studio; if (!S) return;
  var H = S.h, NQ = 18, SECS = 600, timer = null, T;
  function esc(x) { return String(x == null ? '' : x); }
  function plain(h) { return String(h).replace(/<svg[\s\S]*?<\/svg>/g, ' [picture] ').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim(); }
  function fmtT(s) { s = Math.max(0, s); return (s < 600 ? '0' : '') + Math.floor(s / 60) + ':' + (s % 60 < 10 ? '0' : '') + (s % 60); }

  function build() {
    var topics = S.yearTopics().filter(function (t) { return t && t.steps; }), qs = [], per = {}, saved = S.state.tab, order = H.shuffle(topics.slice()), guard = 0;
    var packs = [];
    order.forEach(function (t) {
      var st = t.steps.filter(function (x) { return x.id === 'practise' && typeof x.make === 'function'; })[0]; if (!st) return;
      try { S.state.tab = t.n; var arr = st.make(); if (Array.isArray(arr) && arr.length) packs.push({ t: t, arr: H.shuffle(arr.slice()) }); } catch (e) {}
    });
    S.state.tab = saved;
    while (qs.length < NQ && packs.length && guard++ < 400) {
      packs.forEach(function (p) { if (qs.length >= NQ || !p.arr.length) return; var q = p.arr.pop(); if (q) { q.__topic = p.t.title; qs.push(q); } });
    }
    return H.shuffle(qs).slice(0, NQ);
  }

  function open() {
    if (!S.yearTopics) return;
    var qs = build(); if (!qs.length) return;
    T = { qs: qs, ans: qs.map(function () { return null; }), i: 0, left: SECS, start: Date.now(), done: false };
    var host = document.getElementById('tenOverlay'); if (host) host.remove();
    host = document.createElement('div'); host.id = 'tenOverlay'; host.setAttribute('role', 'dialog'); host.setAttribute('aria-modal', 'true'); host.setAttribute('aria-label', '10-minute mental maths test');
    host.style.cssText = 'position:fixed;inset:0;z-index:9999;overflow:auto;background:var(--bg,#fff);color:var(--fg,#111);padding:max(16px,env(safe-area-inset-top,0px)) max(16px,env(safe-area-inset-right,0px)) 40px max(16px,env(safe-area-inset-left,0px));';
    document.body.appendChild(host); document.body.style.overflow = 'hidden';
    tick(); clearInterval(timer); timer = setInterval(tick, 1000);
    draw();
  }
  function close() { clearInterval(timer); var h = document.getElementById('tenOverlay'); if (h) h.remove(); document.body.style.overflow = ''; }
  function tick() { if (!T || T.done) return; T.left = SECS - Math.floor((Date.now() - T.start) / 1000); var el = document.getElementById('tenClock'); if (el) { el.textContent = '⏱ ' + fmtT(T.left); el.style.background = T.left <= 60 ? 'var(--bad,#b3261e)' : 'var(--fg,#111)'; } if (T.left <= 0) finish(); }
  function save() { var inp = document.getElementById('tenIn'); if (inp) T.ans[T.i] = inp.value.trim() === '' ? null : inp.value.trim(); }

  function draw() {
    var host = document.getElementById('tenOverlay'); if (!host || !T) return;
    var q = T.qs[T.i], a = T.ans[T.i], dots = T.qs.map(function (x, k) {
      return '<button type="button" data-go="' + k + '" aria-label="Question ' + (k + 1) + (T.ans[k] != null ? ', answered' : '') + '" style="width:30px;height:30px;border-radius:50%;border:2px solid var(--accent,#1f7a52);margin:2px;font:700 13px system-ui;cursor:pointer;color:var(--fg,#111);background:' + (k === T.i ? 'var(--accent,#1f7a52);color:#fff' : T.ans[k] != null ? 'rgba(31,122,82,.25)' : 'transparent') + '">' + (k + 1) + '</button>';
    }).join('');
    var body;
    if (q.type === 'mc') body = '<div role="radiogroup" aria-label="Answers" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-top:12px">' + (q.options || []).map(function (o, k) {
      var on = a === o; return '<button type="button" role="radio" aria-checked="' + on + '" data-opt="' + k + '" style="text-align:left;min-height:48px;padding:10px 14px;border-radius:12px;border:2px solid ' + (on ? 'var(--accent,#1f7a52)' : 'var(--line,#b9cfc6)') + ';background:' + (on ? 'rgba(31,122,82,.18)' : 'transparent') + ';color:var(--fg,#111);font:600 16px system-ui;cursor:pointer"><b>' + 'ABCDEF'.charAt(k) + '.</b> ' + o + '</button>';
    }).join('') + '</div>';
    else body = '<label style="display:block;margin-top:12px;font-weight:700">Your answer<br><input id="tenIn" type="text" inputmode="text" autocomplete="off" value="' + esc(a).replace(/"/g, '&quot;') + '" style="margin-top:6px;width:100%;max-width:340px;font:600 20px system-ui;padding:10px 12px;border-radius:10px;border:2px solid var(--line,#b9cfc6);background:transparent;color:var(--fg,#111)"></label>';
    var last = T.i === T.qs.length - 1;
    host.innerHTML = '<div style="max-width:760px;margin:0 auto"><div style="display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap"><b>Question ' + (T.i + 1) + ' of ' + T.qs.length + '</b><span id="tenClock" style="color:#fff;background:var(--fg,#111);border-radius:20px;padding:6px 14px;font-weight:700">⏱ ' + fmtT(T.left) + '</span></div>' +
      '<div style="margin:8px 0">' + dots + '</div><div style="border:2px solid var(--line,#b9cfc6);border-radius:16px;padding:16px"><div style="font-size:1.15rem;line-height:1.5">' + q.text + '</div>' + (q.pic ? '<div style="margin-top:10px">' + q.pic + '</div>' : '') + body + '</div>' +
      '<div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:14px"><button class="btn ghost" type="button" id="tenPrev"' + (T.i ? '' : ' disabled') + '>← Back</button><button class="btn" type="button" id="tenNext">' + (last ? 'Finish test' : 'Next →') + '</button><button class="btn ghost" type="button" id="tenQuit" style="margin-left:auto">Leave test</button></div>' +
      '<p class="note" style="margin-top:10px">No calculator. You can go back and change an answer before you finish.</p></div>';
    host.querySelectorAll('[data-go]').forEach(function (b) { b.addEventListener('click', function () { save(); T.i = Number(b.dataset.go); draw(); }); });
    host.querySelectorAll('[data-opt]').forEach(function (b) { b.addEventListener('click', function () { T.ans[T.i] = q.options[Number(b.dataset.opt)]; draw(); }); });
    document.getElementById('tenPrev').addEventListener('click', function () { save(); if (T.i) { T.i--; draw(); } });
    document.getElementById('tenNext').addEventListener('click', function () { save(); if (last) finish(); else { T.i++; draw(); } });
    document.getElementById('tenQuit').addEventListener('click', function () { if (window.confirm === undefined || true) { var h = document.getElementById('tenOverlay'); h.querySelector('#tenQuit').outerHTML = '<span><button class="btn" type="button" id="tenYes">Yes, leave</button> <button class="btn ghost" type="button" id="tenNo">Keep going</button></span>'; document.getElementById('tenYes').addEventListener('click', close); document.getElementById('tenNo').addEventListener('click', function () { save(); draw(); }); } });
    var inp = document.getElementById('tenIn'); if (inp) { inp.addEventListener('keydown', function (e) { if (e.key === 'Enter') { document.getElementById('tenNext').click(); } }); inp.focus(); }
  }

  function finish() {
    if (!T || T.done) return; var used = Math.min(SECS, Math.floor((Date.now() - T.start) / 1000)); save(); T.done = true; clearInterval(timer);
    var score = 0, rev = [];
    T.qs.forEach(function (q, k) { var v = T.ans[k], ok = false; if (v != null) { try { ok = H.matches(q, v); } catch (e) { ok = false; } } if (ok) score++; else rev.push({ k: k, q: q, v: v }); });
    var host = document.getElementById('tenOverlay'); if (!host) return;
    var pct = Math.round(score / T.qs.length * 100), msg = pct >= 90 ? 'Brilliant mental maths!' : pct >= 70 ? 'Well done, a strong score.' : pct >= 50 ? 'Good effort. Look at the review below and try again.' : 'A good start. Work through the review and try another test.';
    host.innerHTML = '<div style="max-width:760px;margin:0 auto"><div style="border:2px solid var(--accent,#1f7a52);border-radius:16px;padding:18px"><h2 style="margin:0 0 6px">Your score: ' + score + ' / ' + T.qs.length + '</h2><p style="margin:0">Time used: ' + Math.floor(used / 60) + ' min ' + (used % 60) + ' s. ' + msg + '</p></div>' +
      (rev.length ? '<h3>Review (' + rev.length + ')</h3>' + rev.map(function (r) {
        return '<div style="border:2px solid var(--line,#b9cfc6);border-radius:14px;padding:12px;margin:10px 0"><b>Question ' + (r.k + 1) + '</b> <span class="note">' + esc(r.q.__topic) + '</span><div style="margin:6px 0">' + r.q.text + '</div>' + (r.q.pic ? r.q.pic : '') +
          '<p style="margin:6px 0">Your answer: <b>' + (r.v == null ? 'no answer' : esc(r.v)) + '</b><br>Correct answer: <b>' + esc(r.q.answer) + '</b></p>' + (r.q.explain ? '<p class="note" style="margin:0">' + r.q.explain + '</p>' : '') + '</div>';
      }).join('') : '<p><b>Every answer was correct.</b></p>') +
      '<div style="display:flex;gap:10px;flex-wrap:wrap;margin:14px 0 30px"><button class="btn" type="button" id="tenAgain">Try another test</button><button class="btn ghost" type="button" id="tenClose">Back to topics</button></div></div>';
    document.getElementById('tenAgain').addEventListener('click', open); document.getElementById('tenClose').addEventListener('click', close);
    host.scrollTop = 0;
  }

  function addCard() {
    var v = document.getElementById('view'); if (!v || document.getElementById('tenCard')) return;
    var anchor = document.getElementById('myprog'); if (!anchor) return;
    var c = document.createElement('section'); c.className = 'card'; c.id = 'tenCard'; c.setAttribute('aria-labelledby', 'tenH');
    c.innerHTML = '<h2 id="tenH" style="margin:0 0 6px">⏱ 10-minute mental maths test</h2><p class="note" style="margin:0 0 10px">18 mixed questions from this year\'s topics, no calculator. A timer counts down from 10:00. At the end you get a score out of 18 and a review of every mistake.</p><button class="btn" type="button" id="tenStart">Start the test</button>';
    anchor.parentNode.insertBefore(c, anchor.nextSibling);
    document.getElementById('tenStart').addEventListener('click', open);
  }
  var v0 = document.getElementById('view');
  if (v0) { new MutationObserver(function () { addCard(); }).observe(v0, { childList: true }); addCard(); }
})();
