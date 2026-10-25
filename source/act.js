/* act.js: four game-style activities added to every topic.
   Beat the clock, Match-up, Right or wrong?, Steps in order.
   They reuse each topic's own practice questions and worked examples. */
(function () {
  'use strict';
  var S = Studio, H = S.h;
  function $(id) { return document.getElementById(id); }
  function rnd(n) { return Math.floor(Math.random() * n); }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = rnd(i + 1), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function plain(h) { var d = document.createElement('div'); d.innerHTML = String(h); return (d.textContent || '').replace(/\s+/g, ' ').trim(); }
  function numOnly(q) { return q.type !== 'mc' && q.kind !== 'text' && !/[A-Za-z]/.test(String(q.answer)); }
  function pick(a) { return a[rnd(a.length)]; }
  var CHEER = ['Brilliant!', 'Nice one!', 'You got it!', 'Great thinking!', 'Spot on!', 'Superstar!'];
  var TRY = ['Not this time.', 'Close. Keep going!', 'Good try!', 'Nearly. Next one!'];

  var css = document.createElement('style');
  css.textContent =
    '.gm-top{display:flex;flex-wrap:wrap;gap:8px;margin:6px 0 12px}.gm-pill{background:var(--surface-2);border-radius:999px;padding:6px 12px;font-weight:800;font-size:.95rem}' +
    '.gm-cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:10px;margin:10px 0}' +
    '.gm-card{background:var(--surface-2);border:2px solid transparent;border-radius:12px;padding:10px;min-height:64px;font-weight:800;font-size:1rem;text-align:center;color:inherit}' +
    '.gm-card.q{border-color:var(--line)}.gm-card.sel{border-color:#2b5fd9;background:#fff}.gm-card.ok{border-color:var(--good);background:var(--good-bg)}.gm-card.no{border-color:var(--bad);background:var(--bad-bg)}' +
    '.gm-say{font-size:1.15rem;font-weight:800;margin:10px 0}.gm-tf{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:10px 0}' +
    '.gm-tf .btn{min-height:56px;font-size:1.1rem}.gm-claim{background:var(--surface-2);border-radius:12px;padding:12px;font-size:1.1rem;margin:8px 0}' +
    '.gm-steps{display:grid;gap:8px;margin:10px 0}.gm-step{text-align:left;background:var(--surface-2);border:2px solid transparent;border-radius:12px;padding:12px;font-weight:700;color:inherit}' +
    '.gm-bubbles{display:flex;flex-wrap:wrap;gap:12px;justify-content:center;margin:12px 0}.gm-bub{width:84px;height:84px;border-radius:50%;background:#dfe9ff;border:3px solid #7aa2ff;font-weight:900;font-size:1.15rem;color:inherit;padding:4px}.gm-bub.no{background:var(--bad-bg);border-color:var(--bad)}' +
    '.gm-lane{font-size:1.4rem;letter-spacing:.08em;margin:6px 0}.gm-lane b{display:inline-block;min-width:4.5em;font-size:1rem;letter-spacing:0}' +
    '.gm-step.used{border-color:var(--good);background:var(--good-bg)}.gm-list{margin:6px 0 10px;padding-left:1.3em}';
  document.head.appendChild(css);

  function diff(q) { return plain(q.text).length + 4 * String(q.answer).length + (q.type === 'mc' ? 10 : 0); }
  function pool(t, need, mode) {
    var pr = t.steps.filter(function (s) { return s.id === 'practise'; })[0], out = [];
    if (!pr) return out;
    for (var k = 0; k < 5 && out.length < need * 2; k++) { try { out = out.concat(pr.make()); } catch (e) { } }
    if (mode === 'easy' || mode === 'hard') {
      var s = out.slice().sort(function (x, y) { return diff(x) - diff(y); }), cut = Math.ceil(s.length * 0.6);
      out = mode === 'easy' ? s.slice(0, cut) : s.slice(s.length - cut);
    }
    return out;
  }
  function stars(frac) { var n = Math.round(frac * 5), s = ''; for (var i = 0; i < 5; i++) s += i < n ? '★' : '☆'; return '<div class="stars" aria-label="' + n + ' out of 5 stars">' + s + '</div>'; }

  /* ---------- Beat the clock ---------- */
  function mountClock(t, cfg) {
    return function (host, ctx) {
      var SECS = cfg.secs, left, score, streak, best, qs, qi, timer, fb, q, over;
      function nextQ() { if (qi >= qs.length) { qs = shuffle(pool(t, 20, cfg.mode)); qi = 0; } q = qs[qi++]; }
      function start() { left = SECS; score = 0; streak = 0; best = 0; fb = ''; over = false; qs = shuffle(pool(t, 20, cfg.mode)); qi = 0; nextQ(); draw(); clearInterval(timer); timer = setInterval(tick, 1000); }
      function tick() {
        if (!host.isConnected) { clearInterval(timer); return; }
        left--; var el = $('gmTime'); if (el) el.textContent = left + 's';
        if (left <= 0) { clearInterval(timer); over = true; draw(); }
      }
      function top() { return '<div class="gm-top"><span class="gm-pill">⏱ <span id="gmTime">' + left + 's</span></span><span class="gm-pill">Score <span id="gmScore">' + score + '</span></span><span class="gm-pill">🔥 Streak <span id="gmStreak">' + streak + '</span></span></div>'; }
      function draw() {
        if (over) {
          var ok = score >= cfg.need; if (ok) ctx.complete();
          host.innerHTML = '<div class="score">' + stars(Math.min(1, score / 12)) + '<div class="big">' + score + ' correct</div><p class="say">' + (ok ? 'Great run! Your best streak was ' + best + '.' : 'You need ' + cfg.need + ' correct to finish this one. Have another go!') + '</p><div class="row"><button class="btn" id="gmAgain" type="button">Play again</button></div></div>';
          $('gmAgain').addEventListener('click', start); return;
        }
        var body;
        if (q.type === 'mc') body = '<div class="opts">' + shuffle(q.options).map(function (o) { return '<button class="opt say" type="button" data-v="' + String(o).replace(/"/g, '&quot;') + '">' + o + '</button>'; }).join('') + '</div>';
        else body = '<form class="ans" id="gmForm"><input id="gmIn" type="text" inputmode="decimal" autocomplete="off" aria-label="Your answer"><button class="btn" type="submit">Go</button></form>';
        host.innerHTML = top() + (fb ? '<p class="note" style="min-height:0" aria-live="polite">' + fb + '</p>' : '') + (q.pic ? '<div class="visual">' + q.pic + '</div>' : '') + '<div class="gm-say say">' + q.text + '</div>' + body;
        if (q.type === 'mc') host.querySelectorAll('.opt').forEach(function (b) { b.addEventListener('click', function () { grade(b.getAttribute('data-v')); }); });
        else {
          var ai = $('gmIn'); ai.focus();
          if (numOnly(q)) ai.addEventListener('input', function () { var c = ai.value.replace(/[A-Za-z]/g, ''); if (c !== ai.value) ai.value = c; });
          $('gmForm').addEventListener('submit', function (e) { e.preventDefault(); if (ai.value.trim() !== '') grade(ai.value); });
        }
      }
      function grade(val) {
        if (H.matches(q, val)) { score++; streak++; if (streak > best) best = streak; fb = '✔ ' + pick(CHEER); }
        else { streak = 0; fb = '✘ ' + pick(TRY) + ' The answer was <b>' + q.answer + '</b>.'; }
        nextQ(); draw();
      }
      host.innerHTML = '<div class="score"><p class="say">You have ' + cfg.secs + ' seconds. Get ' + cfg.need + ' right to finish.' + (cfg.pen ? ' A wrong answer costs you ' + cfg.pen + ' seconds, so think before you type!' : ' Your streak grows with every correct answer in a row.') + '</p><button class="btn" id="gmGo" type="button">Start the clock</button></div>';
      $('gmGo').addEventListener('click', start);
    };
  }

  /* ---------- Match-up ---------- */
  function mountMatch(t, cfg) {
    return function (host, ctx) {
      function build() {
        var qs = shuffle(pool(t, 60, cfg.mode)), pairs = [];
        [[46, 9, false], [80, 14, false], [120, 22, true]].forEach(function (lim) {
          if (pairs.length >= Math.min(4, cfg.pairs)) return;
          var seen = {}; pairs = [];
          qs.forEach(function (q) {
            if (pairs.length >= cfg.pairs || q.pic || (q.type === 'mc' && !lim[2])) return;
            var tx = plain(q.text), an = plain(q.answer);
            if (tx.length > lim[0] || an.length > lim[1] || seen[an]) return;
            seen[an] = 1; pairs.push({ q: tx, a: an });
          });
        });
        return pairs;
      }
      function start() {
        var pairs = build(), cards = [], sel = null, moves = 0, matched = 0, bad = null;
        if (pairs.length < Math.min(4, cfg.pairs)) { host.innerHTML = '<p class="note">New cards could not be made this time. Press the button to try again.</p><button class="btn" id="gmRe" type="button">Try again</button>'; $('gmRe').addEventListener('click', start); return; }
        pairs.forEach(function (p, i) { cards.push({ p: i, k: 'q', t: p.q }); cards.push({ p: i, k: 'a', t: p.a }); });
        cards = shuffle(cards);
        function draw() {
          var done = matched === pairs.length;
          host.innerHTML = '<div class="gm-top"><span class="gm-pill">Matched ' + matched + ' of ' + pairs.length + '</span><span class="gm-pill">Moves ' + moves + '</span></div>' +
            '<p class="note" style="min-height:0">Tap a question, then tap its answer. Find all the pairs.</p>' +
            '<div class="gm-cards">' + cards.map(function (c, i) { return '<button type="button" class="gm-card ' + (c.k === 'q' ? 'q ' : '') + (c.ok ? 'ok' : (sel === i ? 'sel' : (bad && (bad[0] === i || bad[1] === i) ? 'no' : ''))) + '" data-i="' + i + '" data-p="' + c.p + '"' + (c.ok ? ' disabled' : '') + '>' + c.t + '</button>'; }).join('') + '</div>' +
            (done ? '<div class="score">' + stars(Math.max(0.4, Math.min(1, pairs.length * 1.6 / moves))) + '<p class="say">All matched in ' + moves + ' moves. ' + pick(CHEER) + '</p><button class="btn" id="gmNew" type="button">New cards</button></div>' : '');
          host.querySelectorAll('.gm-card').forEach(function (b) { b.addEventListener('click', function () { tap(Number(b.getAttribute('data-i'))); }); });
          if (done) { ctx.complete(); $('gmNew').addEventListener('click', start); }
        }
        function tap(i) {
          bad = null;
          if (sel === null) { sel = i; draw(); return; }
          if (sel === i) { sel = null; draw(); return; }
          var a = cards[sel], b = cards[i]; moves++;
          if (a.p === b.p && a.k !== b.k) { a.ok = b.ok = true; matched++; sel = null; }
          else { bad = [sel, i]; sel = null; }
          draw();
        }
        draw();
      }
      start();
    };
  }

  /* ---------- Right or wrong? ---------- */
  function wrongFor(q, lvl) {
    var a = String(q.answer).replace(/\u2212/g, '-').replace(/,/g, '');
    if (q.type === 'mc') { var o = (q.options || []).filter(function (x) { return x !== q.answer; }); return o.length ? pick(o) : null; }
    if (q.kind && q.kind !== 'num') return null;
    if (!/^-?\d+(\.\d+)?$/.test(a)) return null;
    var dp = (a.split('.')[1] || '').length, st = Math.pow(10, -dp), v = Number(a), c;
    if (lvl === 'easy') c = [v + 10 * st, v - 10 * st, v + 5 * st, v - 5 * st];
    else if (lvl === 'hard') {
      c = [v + st, v - st, v + 2 * st, v - 2 * st];
      if (dp === 0 && v !== 0) { c.push(v * 10); if (v % 10 === 0) c.push(v / 10); var s = String(Math.abs(v)); if (s.length >= 2 && s[s.length - 1] !== s[s.length - 2]) { var sw = s.slice(0, -2) + s[s.length - 1] + s[s.length - 2]; c.push(v < 0 ? -Number(sw) : Number(sw)); } }
    } else c = [v + st, v - st, v + 10 * st, v - 10 * st, v + 2 * st, v - 2 * st];
    c = c.filter(function (x) { return x !== v && (v < 0 || x >= 0); });
    if (!c.length) return null;
    return pick(c).toFixed(dp);
  }
  function mountTF(t, cfg) {
    return function (host, ctx) {
      var ROUNDS = cfg.rounds;
      function start() {
        var qs = shuffle(pool(t, 40, cfg.mode)).filter(function (q) { return wrongFor(q, cfg.lvl) !== null; }).slice(0, ROUNDS), i = 0, score = 0;
        if (qs.length < 4) { host.innerHTML = '<p class="note">Questions could not be made this time.</p><button class="btn" id="gmRe" type="button">Try again</button>'; $('gmRe').addEventListener('click', start); return; }
        function round() {
          if (i >= qs.length) {
            var ok = score >= Math.ceil(qs.length * cfg.pass); if (ok) ctx.complete();
            host.innerHTML = '<div class="score">' + stars(score / qs.length) + '<div class="big">' + score + ' out of ' + qs.length + '</div><p class="say">' + (ok ? 'Sharp eyes! You spotted the mistakes.' : 'Have another go. Check each answer before you decide.') + '</p><button class="btn" id="gmAgain" type="button">Play again</button></div>';
            $('gmAgain').addEventListener('click', start); return;
          }
          var q = qs[i], truth = Math.random() < 0.5, shown = truth ? String(q.answer) : wrongFor(q, cfg.lvl);
          host.innerHTML = '<div class="gm-top"><span class="gm-pill">Round ' + (i + 1) + ' of ' + qs.length + '</span><span class="gm-pill">Score ' + score + '</span></div>' +
            (q.pic ? '<div class="visual">' + q.pic + '</div>' : '') + '<div class="gm-say say">' + q.text + '</div>' +
            '<div class="gm-claim say">A friend says the answer is <b>' + shown + '</b>.</div><p class="note" style="min-height:0">Work it out. Is your friend right or wrong?</p>' +
            '<div class="gm-tf"><button class="btn" id="gmR" type="button">✔ Right</button><button class="btn ghost" id="gmW" type="button">✘ Wrong</button></div><div id="gmFb" aria-live="polite"></div>';
          function say(guessRight) {
            var good = guessRight === truth; if (good) score++;
            $('gmR').disabled = $('gmW').disabled = true;
            $('gmFb').innerHTML = '<div class="explain say"><b>' + (good ? pick(CHEER) : pick(TRY)) + '</b> ' + (truth ? 'Your friend was right.' : 'Your friend was wrong. The answer is <b>' + q.answer + '</b>.') + (q.explain ? '<br>' + q.explain : '') + '</div><div class="row" style="margin-top:10px"><button class="btn" id="gmNx" type="button">' + (i + 1 >= qs.length ? 'See my score' : 'Next') + '</button></div>';
            $('gmNx').addEventListener('click', function () { i++; round(); }); $('gmNx').focus();
          }
          $('gmR').addEventListener('click', function () { say(true); });
          $('gmW').addEventListener('click', function () { say(false); });
        }
        round();
      }
      start();
    };
  }

  /* ---------- Steps in order ---------- */
  function mountOrder(t, cfg) {
    return function (host, ctx) {
      var exs = [];
      t.steps.forEach(function (s) { if (s.type === 'slides') s.slides.forEach(function (sl) { if (sl.ex && sl.ex.steps && sl.ex.steps.length >= 3) exs.push(sl.ex); }); });
      var solved = 0, last = -1, pref = exs.filter(function (e) { return e.steps.length >= cfg.min && e.steps.length <= cfg.max; });
      if (pref.length >= 2) exs = pref;
      function start() {
        var ex, k = rnd(exs.length); if (exs.length > 1 && k === last) k = (k + 1) % exs.length; last = k; ex = exs[k];
        var steps = ex.steps.map(function (s, i) { return { t: s, i: i }; }), order = shuffle(steps), next = 0, msg = '';
        function draw() {
          var done = next >= steps.length;
          host.innerHTML = '<div class="gm-top"><span class="gm-pill">Solved ' + solved + ' of 2</span></div><div class="gm-say say">' + ex.q + '</div>' +
            '<p class="note" style="min-height:0">Tap the steps in the right order, starting with step 1.</p>' +
            (next ? '<ol class="gm-list say">' + steps.slice(0, next).map(function (s) { return '<li>' + s.t + '</li>'; }).join('') + '</ol>' : '') +
            (done ? '<div class="explain say"><b>' + pick(CHEER) + '</b> ' + (ex.final || '') + '</div><div class="row" style="margin-top:10px"><button class="btn" id="gmMore" type="button">Another example</button></div>' :
              '<div class="gm-steps">' + order.filter(function (s) { return s.i >= next; }).map(function (s) { return '<button type="button" class="gm-step say" data-i="' + s.i + '">' + s.t + '</button>'; }).join('') + '</div><div aria-live="polite" class="note" style="min-height:0">' + msg + '</div>');
          if (done) { $('gmMore').addEventListener('click', start); return; }
          host.querySelectorAll('.gm-step').forEach(function (b) {
            b.addEventListener('click', function () {
              if (Number(b.getAttribute('data-i')) === next) { next++; msg = ''; if (next >= steps.length) { solved++; if (solved >= 2) ctx.complete(); } }
              else msg = 'Not that one yet. Which step comes ' + (next === 0 ? 'first' : 'next') + '?';
              draw();
            });
          });
        }
        draw();
      }
      start();
    };
  }

  /* ---------- Treasure trail (P5) ---------- */
  function mountTrail(t, cfg) {
    return function (host, ctx) {
      var N = cfg.len;
      function start() {
        var qs = shuffle(pool(t, 20, cfg.mode)), qi = 0, pos = 0, tries = 0, fb = '', q = qs[qi];
        function trail() { var s = '🏠 '; for (var i = 0; i < N; i++) s += (i < pos ? '🟢' : (i === pos ? '🚶' : '⚪')) + ' '; return s + (pos >= N ? '🏆' : '💎'); }
        function nextQ() { qi++; if (qi >= qs.length) { qs = shuffle(pool(t, 20, cfg.mode)); qi = 0; } q = qs[qi]; tries = 0; }
        function draw() {
          if (pos >= N) { ctx.complete(); host.innerHTML = '<div class="score"><div class="gm-say">' + trail() + '</div><div class="stars" aria-label="Treasure found">★★★★★</div><p class="say">You followed the trail and found the treasure! ' + pick(CHEER) + '</p><button class="btn" id="gmAgain" type="button">Walk the trail again</button></div>'; $('gmAgain').addEventListener('click', start); return; }
          var body;
          if (q.type === 'mc') body = '<div class="opts">' + shuffle(q.options).map(function (o) { return '<button class="opt say" type="button" data-v="' + String(o).replace(/"/g, '&quot;') + '">' + o + '</button>'; }).join('') + '</div>';
          else body = '<form class="ans" id="gmForm"><input id="gmIn" type="text" inputmode="decimal" autocomplete="off" aria-label="Your answer"><button class="btn" type="submit">Check</button></form>';
          host.innerHTML = '<div class="gm-say" aria-label="Trail progress">' + trail() + '</div><p class="note" style="min-height:0">Answer each question to take a step. Reach the treasure at the end!</p>' + (fb ? '<div class="explain say" aria-live="polite">' + fb + '</div>' : '') + (q.pic ? '<div class="visual">' + q.pic + '</div>' : '') + '<div class="gm-say say">' + q.text + '</div>' + body;
          if (q.type === 'mc') host.querySelectorAll('.opt').forEach(function (b) { b.addEventListener('click', function () { grade(b.getAttribute('data-v')); }); });
          else { var ai = $('gmIn'); ai.focus(); if (numOnly(q)) ai.addEventListener('input', function () { var c = ai.value.replace(/[A-Za-z]/g, ''); if (c !== ai.value) ai.value = c; }); $('gmForm').addEventListener('submit', function (e) { e.preventDefault(); if (ai.value.trim() !== '') grade(ai.value); }); }
        }
        function grade(val) {
          if (H.matches(q, val)) { pos++; fb = '<b>' + pick(CHEER) + '</b> One step closer.'; nextQ(); }
          else { tries++; if (tries >= 2) { fb = 'The answer was <b>' + q.answer + '</b>. ' + (q.explain || '') + ' Here is a new question.'; nextQ(); } else fb = '<b>Missed it.</b> ' + ((q.hints && q.hints[0]) ? 'Hint: ' + q.hints[0] : 'Have another look.') + ' Try once more.'; }
          draw();
        }
        draw();
      }
      start();
    };
  }

  /* ---------- Spot the mistake (P6, P7, S) ---------- */
  function corrupt(step) {
    var parts = String(step).split(/(<[^>]+>)/), idx = [];
    parts.forEach(function (p, i) { if (p.charAt(0) !== '<' && /\d/.test(p)) idx.push(i); });
    if (!idx.length) return null;
    var i = idx[idx.length - 1], p = parts[i], m = p.match(/\d+(\.\d+)?/g), last = m[m.length - 1], v = Number(last);
    var delta = pick([1, -1, 2, 10, -10]); var nv = v + delta; if (nv < 0 || nv === v) nv = v + 1;
    var dp = (last.split('.')[1] || '').length; var rep = dp ? nv.toFixed(dp) : String(nv);
    var k = p.lastIndexOf(last); parts[i] = p.slice(0, k) + rep + p.slice(k + last.length);
    return parts.join('');
  }
  function mountSpot(t, cfg) {
    return function (host, ctx) {
      var exs = [];
      t.steps.forEach(function (s) { if (s.type === 'slides') s.slides.forEach(function (sl) { if (sl.ex && sl.ex.steps && sl.ex.steps.length >= 3) exs.push(sl.ex); }); });
      var solved = 0, last = -1, need = cfg.need;
      function start() {
        var k = rnd(exs.length); if (exs.length > 1 && k === last) k = (k + 1) % exs.length; last = k;
        var ex = exs[k], cand = [];
        ex.steps.forEach(function (s, i) { if (/\d/.test(plain(s))) cand.push(i); });
        var bi = cand.length ? pick(cand) : 0, bad = corrupt(ex.steps[bi]);
        if (bad === null || bad === ex.steps[bi]) { bad = ex.steps[bi] + ' (and so the answer is 0)'; }
        var shown = ex.steps.map(function (s, i) { return i === bi ? bad : s; }), picked = -1;
        function draw() {
          var done = picked >= 0;
          host.innerHTML = '<div class="gm-top"><span class="gm-pill">Found ' + solved + ' of ' + need + '</span></div><div class="gm-say say">' + ex.q + '</div>' +
            '<p class="note" style="min-height:0">A pupil solved this, but made <b>one mistake</b>. Tap the line with the mistake.</p><div class="gm-steps">' +
            shown.map(function (s, i) { return '<button type="button" class="gm-step say' + (done && i === bi ? ' used' : '') + '" data-i="' + i + '"' + (done ? ' disabled' : '') + '>' + (i + 1) + '. ' + s + '</button>'; }).join('') + '</div>' +
            (done ? '<div class="explain say"><b>' + (picked === bi ? pick(CHEER) + ' You found it.' : 'Not that line.') + '</b> The mistake was in line ' + (bi + 1) + '. It should say: ' + ex.steps[bi] + '</div><div class="row" style="margin-top:10px"><button class="btn" id="gmMore" type="button">Another one</button></div>' : '');
          if (done) { $('gmMore').addEventListener('click', start); return; }
          host.querySelectorAll('.gm-step').forEach(function (b) { b.addEventListener('click', function () { picked = Number(b.getAttribute('data-i')); if (picked === bi) { solved++; if (solved >= need) ctx.complete(); } draw(); }); });
        }
        draw();
      }
      start();
    };
  }

  /* ---------- Boss challenge (P7, S) ---------- */
  function mountBoss(t, cfg) {
    return function (host, ctx) {
      function start() {
        var qs = shuffle(pool(t, 20, 'hard')).slice(0, cfg.rounds), i = 0, lives = cfg.lives, fb = '';
        if (qs.length < 3) { host.innerHTML = '<p class="note">Questions could not be made.</p><button class="btn" id="gmRe" type="button">Try again</button>'; $('gmRe').addEventListener('click', start); return; }
        function hearts() { var s = ''; for (var k = 0; k < cfg.lives; k++) s += k < lives ? '❤️' : '🤍'; return s; }
        function draw() {
          if (lives <= 0 || i >= qs.length) {
            var win = lives > 0; if (win) ctx.complete();
            host.innerHTML = '<div class="score">' + stars(win ? 1 : i / qs.length) + '<div class="big">' + (win ? 'Boss beaten!' : 'The boss wins this time') + '</div><p class="say">' + (win ? 'You kept ' + lives + ' ' + (lives === 1 ? 'life' : 'lives') + '. Brilliant problem solving.' : 'Look back at the lessons and try again. Each try gives you new questions.') + '</p><button class="btn" id="gmAgain" type="button">' + (win ? 'Fight again' : 'Try again') + '</button></div>';
            $('gmAgain').addEventListener('click', start); return;
          }
          var q = qs[i], body;
          if (q.type === 'mc') body = '<div class="opts">' + shuffle(q.options).map(function (o) { return '<button class="opt say" type="button" data-v="' + String(o).replace(/"/g, '&quot;') + '">' + o + '</button>'; }).join('') + '</div>';
          else body = '<form class="ans" id="gmForm"><input id="gmIn" type="text" inputmode="decimal" autocomplete="off" aria-label="Your answer"><button class="btn" type="submit">Attack</button></form>';
          host.innerHTML = '<div class="gm-top"><span class="gm-pill">Lives ' + hearts() + '</span><span class="gm-pill">Round ' + (i + 1) + ' of ' + qs.length + '</span></div>' + (fb ? '<div class="explain say" aria-live="polite">' + fb + '</div>' : '') + (q.pic ? '<div class="visual">' + q.pic + '</div>' : '') + '<div class="gm-say say">' + q.text + '</div><p class="note" style="min-height:0">No hints in a boss fight. Think it through.</p>' + body;
          if (q.type === 'mc') host.querySelectorAll('.opt').forEach(function (b) { b.addEventListener('click', function () { grade(q, b.getAttribute('data-v')); }); });
          else { var ai = $('gmIn'); ai.focus(); if (numOnly(q)) ai.addEventListener('input', function () { var c = ai.value.replace(/[A-Za-z]/g, ''); if (c !== ai.value) ai.value = c; }); $('gmForm').addEventListener('submit', function (e) { e.preventDefault(); if (ai.value.trim() !== '') grade(q, ai.value); }); }
        }
        function grade(q, val) {
          if (H.matches(q, val)) fb = '<b>Direct hit!</b> ' + pick(CHEER);
          else { lives--; fb = '<b>Ouch, you lose a life.</b> The answer was <b>' + q.answer + '</b>. ' + (q.explain || ''); }
          i++; draw();
        }
        draw();
      }
      start();
    };
  }

  /* ---------- helpers for the newer games ---------- */
  function shortPairs(t, cfg, anyMode) {
    var qs = shuffle(pool(t, 60, anyMode ? 'mid' : cfg.mode)), pairs = [];
    [[46, 9, false], [80, 14, false], [120, 22, true], [200, 30, true]].forEach(function (lim) {
      if (pairs.length >= Math.min(3, cfg.pairs)) return;
      var seen = {}; pairs = [];
      qs.forEach(function (q) {
        if (pairs.length >= cfg.pairs || q.pic || (q.type === 'mc' && !lim[2])) return;
        var tx = plain(q.text), an = plain(q.answer);
        if (tx.length > lim[0] || an.length > lim[1] || seen[an]) return;
        seen[an] = 1; pairs.push({ q: tx, a: an });
      });
    });
    if (pairs.length < Math.min(3, cfg.pairs) && !anyMode) return shortPairs(t, cfg, true);
    return pairs;
  }
  function choicesFor(q, n, lvl) {
    if (q.type === 'mc') return shuffle(q.options.slice());
    var out = [String(q.answer)], seen = {}, tries = 0; seen[out[0]] = 1;
    while (out.length < n && tries++ < 30) { var w = wrongFor(q, lvl); if (w === null) return null; if (!seen[w]) { seen[w] = 1; out.push(w); } }
    return out.length >= 3 ? shuffle(out) : null;
  }
  function inputBlock(q, label) {
    return '<form class="ans" id="gmForm"><input id="gmIn" type="text" inputmode="decimal" autocomplete="off" aria-label="Your answer"><button class="btn" type="submit">' + (label || 'Check') + '</button></form>';
  }
  function wireInput(q, cb) {
    var ai = $('gmIn'); if (!ai) return; ai.focus();
    if (numOnly(q)) ai.addEventListener('input', function () { var c = ai.value.replace(/[A-Za-z]/g, ''); if (c !== ai.value) ai.value = c; });
    $('gmForm').addEventListener('submit', function (e) { e.preventDefault(); if (ai.value.trim() !== '') cb(ai.value); });
  }
  function optBlock(q) {
    return '<div class="opts">' + shuffle(q.options).map(function (o) { return '<button class="opt say" type="button" data-v="' + String(o).replace(/"/g, '&quot;') + '">' + o + '</button>'; }).join('') + '</div>';
  }

  /* ---------- Memory flip (P5): face-down cards ---------- */
  function mountFlip(t, cfg) {
    return function (host, ctx) {
      function start() {
        var pairs = shortPairs(t, cfg), cards = [], open = [], moves = 0, matched = 0;
        if (pairs.length < 3) { host.innerHTML = '<p class="note">New cards could not be made.</p><button class="btn" id="gmRe" type="button">Try again</button>'; $('gmRe').addEventListener('click', start); return; }
        pairs.forEach(function (p, i) { cards.push({ p: i, k: 'q', t: p.q }); cards.push({ p: i, k: 'a', t: p.a }); });
        cards = shuffle(cards);
        function draw() {
          var done = matched === pairs.length;
          host.innerHTML = '<div class="gm-top"><span class="gm-pill">Pairs ' + matched + ' of ' + pairs.length + '</span><span class="gm-pill">Turns ' + moves + '</span></div>' +
            '<p class="note" style="min-height:0">Flip two cards. A question and its answer make a pair. Remember where things are!</p>' +
            '<div class="gm-cards">' + cards.map(function (c, i) { var up = c.ok || open.indexOf(i) >= 0; return '<button type="button" class="gm-card ' + (c.ok ? 'ok' : (up ? 'sel' : '')) + '" data-i="' + i + '" data-p="' + c.p + '"' + (c.ok ? ' disabled' : '') + ' aria-label="' + (up ? c.t : 'Face-down card') + '">' + (up ? c.t : '❓') + '</button>'; }).join('') + '</div>' +
            (done ? '<div class="score">' + stars(Math.max(0.4, Math.min(1, pairs.length * 2 / moves))) + '<p class="say">All pairs found in ' + moves + ' turns. ' + pick(CHEER) + '</p><button class="btn" id="gmNew" type="button">Play again</button></div>' : '');
          host.querySelectorAll('.gm-card').forEach(function (b) { b.addEventListener('click', function () { tap(Number(b.getAttribute('data-i'))); }); });
          if (done) { ctx.complete(); $('gmNew').addEventListener('click', start); }
        }
        function tap(i) {
          if (open.length === 2) open = [];
          if (open.indexOf(i) >= 0) return;
          open.push(i);
          if (open.length === 2) { moves++; var a = cards[open[0]], b = cards[open[1]]; if (a.p === b.p && a.k !== b.k) { a.ok = b.ok = true; matched++; open = []; } }
          draw();
        }
        draw();
      }
      start();
    };
  }

  /* ---------- Pop the bubble (P5) ---------- */
  function mountBubble(t, cfg) {
    return function (host, ctx) {
      function start() {
        var qs = shuffle(pool(t, 40, cfg.mode)).map(function (q) { return { q: q, c: choicesFor(q, 6, 'easy') }; }).filter(function (x) { return x.c; }).slice(0, cfg.rounds), i = 0, first = 0, wrong = {}, fb = '';
        if (qs.length < 3) { host.innerHTML = '<p class="note">Questions could not be made.</p><button class="btn" id="gmRe" type="button">Try again</button>'; $('gmRe').addEventListener('click', start); return; }
        function draw() {
          if (i >= qs.length) { ctx.complete(); host.innerHTML = '<div class="score">' + stars(first / qs.length) + '<div class="big">' + first + ' popped first time</div><p class="say">' + pick(CHEER) + ' You popped every bubble.</p><button class="btn" id="gmAgain" type="button">Pop more bubbles</button></div>'; $('gmAgain').addEventListener('click', start); return; }
          var x = qs[i];
          host.innerHTML = '<div class="gm-top"><span class="gm-pill">Question ' + (i + 1) + ' of ' + qs.length + '</span><span class="gm-pill">First time ' + first + '</span></div>' + (fb ? '<p class="note" aria-live="polite" style="min-height:0">' + fb + '</p>' : '') + (x.q.pic ? '<div class="visual">' + x.q.pic + '</div>' : '') + '<div class="gm-say say">' + x.q.text + '</div><p class="note" style="min-height:0">Work it out, then pop the bubble with the right answer.</p>' +
            '<div class="gm-bubbles">' + x.c.map(function (c, k) { return '<button type="button" class="gm-bub' + (wrong[c] ? ' no' : '') + '" data-v="' + String(c).replace(/"/g, '&quot;') + '"' + (wrong[c] ? ' disabled' : '') + '>' + (wrong[c] ? '✖' : c) + '</button>'; }).join('') + '</div>';
          host.querySelectorAll('.gm-bub').forEach(function (b) { b.addEventListener('click', function () {
            var v = b.getAttribute('data-v');
            if (H.matches(x.q, v)) { if (!Object.keys(wrong).length) first++; fb = '<b>Pop!</b> ' + pick(CHEER); wrong = {}; i++; }
            else { wrong[v] = 1; fb = 'Not that one. Try another bubble.'; }
            draw();
          }); });
        }
        draw();
      }
      start();
    };
  }

  /* ---------- Race the robot (P6) ---------- */
  function mountRace(t, cfg) {
    return function (host, ctx) {
      var timer;
      function start() {
        var N = cfg.len, qs = shuffle(pool(t, 20, cfg.mode)), qi = 0, me = 0, bot = 0, q = qs[0], fb = '', over = false;
        function nextQ() { qi++; if (qi >= qs.length) { qs = shuffle(pool(t, 20, cfg.mode)); qi = 0; } q = qs[qi]; }
        function lane(n) { var s = ''; for (var k = 0; k < N; k++) s += k < n ? '■' : '□'; return s; }
        function lanes() { return '<div class="gm-lane"><b>You</b> <span id="gmMe" aria-label="You are on ' + me + ' of ' + N + '">' + lane(me) + '</span></div><div class="gm-lane"><b>Robot</b> <span id="gmBot" aria-label="Robot is on ' + bot + ' of ' + N + '">' + lane(bot) + '</span></div>'; }
        function end(win) {
          over = true; clearInterval(timer); if (win) ctx.complete();
          host.innerHTML = lanes() + '<div class="score"><div class="big">' + (win ? 'You win the race!' : 'The robot wins this time') + '</div><p class="say">' + (win ? pick(CHEER) : 'Answer faster, but check your working. Try again!') + '</p><button class="btn" id="gmAgain" type="button">Race again</button></div>';
          $('gmAgain').addEventListener('click', start);
        }
        function draw() {
          host.innerHTML = lanes() + (fb ? '<p class="note" aria-live="polite" style="min-height:0">' + fb + '</p>' : '') + (q.pic ? '<div class="visual">' + q.pic + '</div>' : '') + '<div class="gm-say say">' + q.text + '</div>' + (q.type === 'mc' ? optBlock(q) : inputBlock(q, 'Go'));
          if (q.type === 'mc') host.querySelectorAll('.opt').forEach(function (b) { b.addEventListener('click', function () { grade(b.getAttribute('data-v')); }); });
          else wireInput(q, grade);
        }
        function grade(v) {
          if (over) return;
          if (H.matches(q, v)) { me++; fb = '✔ ' + pick(CHEER); if (me >= N) { end(true); return; } }
          else fb = '✘ The answer was ' + q.answer + '. The robot keeps moving!';
          nextQ(); draw();
        }
        clearInterval(timer);
        timer = setInterval(function () {
          if (!host.isConnected) { clearInterval(timer); return; }
          if (over) return; bot++; var el = $('gmBot'); if (el) { el.textContent = lane(bot); el.setAttribute('aria-label', 'Robot is on ' + bot + ' of ' + N); }
          if (bot >= N) end(false);
        }, cfg.every * 1000);
        draw();
      }
      host.innerHTML = '<div class="score"><p class="say">Race a robot! You both need ' + cfg.len + ' steps to finish. Every correct answer moves you one step. The robot moves one step every ' + cfg.every + ' seconds.</p><button class="btn" id="gmGo" type="button">Ready, steady, go!</button></div>';
      $('gmGo').addEventListener('click', start);
    };
  }

  /* ---------- Bank it (P7, S): push your luck ---------- */
  function mountBank(t, cfg) {
    return function (host, ctx) {
      var LADDER = [1, 2, 3, 5, 8, 13];
      function start() {
        var qs = shuffle(pool(t, 30, 'hard')), qi = 0, q = qs[0], pot = 0, bank = 0, run = 0, fb = '', won = false;
        function nextQ() { qi++; if (qi >= qs.length) { qs = shuffle(pool(t, 30, 'hard')); qi = 0; } q = qs[qi]; }
        function worth() { return LADDER[Math.min(run, LADDER.length - 1)]; }
        function draw() {
          if (won) { ctx.complete(); host.innerHTML = '<div class="score">' + stars(1) + '<div class="big">' + bank + ' points banked</div><p class="say">You reached ' + cfg.goal + '. Smart choices about when to bank!</p><button class="btn" id="gmAgain" type="button">Play again</button></div>'; $('gmAgain').addEventListener('click', start); return; }
          host.innerHTML = '<div class="gm-top"><span class="gm-pill">🏦 Bank ' + bank + ' / ' + cfg.goal + '</span><span class="gm-pill">💰 Pot ' + pot + '</span><span class="gm-pill">Next worth ' + worth() + '</span></div>' +
            '<p class="note" style="min-height:0">Each correct answer in a row is worth more points. Bank your pot to keep it safe, but a wrong answer loses the pot. Reach ' + cfg.goal + ' banked points.</p>' + (fb ? '<div class="explain say" aria-live="polite">' + fb + '</div>' : '') +
            (q.pic ? '<div class="visual">' + q.pic + '</div>' : '') + '<div class="gm-say say">' + q.text + '</div>' + (q.type === 'mc' ? optBlock(q) : inputBlock(q, 'Answer')) +
            '<div class="row" style="margin-top:10px"><button class="btn ghost" id="gmBankBtn" type="button"' + (pot ? '' : ' disabled') + '>Bank ' + pot + ' points</button></div>';
          if (q.type === 'mc') host.querySelectorAll('.opt').forEach(function (b) { b.addEventListener('click', function () { grade(b.getAttribute('data-v')); }); });
          else wireInput(q, grade);
          $('gmBankBtn').addEventListener('click', function () { bank += pot; fb = '<b>Banked ' + pot + ' points.</b> Safe!'; pot = 0; run = 0; if (bank >= cfg.goal) won = true; draw(); });
        }
        function grade(v) {
          if (H.matches(q, v)) { pot += worth(); run++; fb = '<b>' + pick(CHEER) + '</b> The pot is now ' + pot + '.'; }
          else { fb = '<b>Oh no!</b> The answer was ' + q.answer + '. You lost the pot of ' + pot + '.'; pot = 0; run = 0; }
          nextQ(); draw();
        }
        draw();
      }
      start();
    };
  }

  /* ---------- Question detective (P6, P7, S) ---------- */
  function mountDetect(t, cfg) {
    return function (host, ctx) {
      function start() {
        var src = shuffle(pool(t, 60, cfg.mode)), rounds = [];
        [[9, 110, false], [20, 170, true]].forEach(function (lim) {
          if (rounds.length >= 3) return;
          var all = src.filter(function (q) { return (lim[2] || q.type !== 'mc') && !q.pic && plain(q.answer).length <= lim[0] && plain(q.text).length <= lim[1]; }), used = {};
          rounds = [];
          all.forEach(function (q) { if (rounds.length >= cfg.rounds) return; var an = plain(q.answer); if (used[an]) return; var others = all.filter(function (o) { var oa = plain(o.answer); return oa !== an && !used[oa]; }).slice(0, 3); if (others.length < 3) return; used[an] = 1; rounds.push({ q: q, opts: shuffle([q].concat(others)) }); });
        });
        var i = 0, score = 0, fb = '';
        if (rounds.length < 3) { host.innerHTML = '<p class="note">Cases could not be made.</p><button class="btn" id="gmRe" type="button">Try again</button>'; $('gmRe').addEventListener('click', start); return; }
        function draw() {
          if (i >= rounds.length) { var ok = score >= cfg.pass; if (ok) ctx.complete(); host.innerHTML = '<div class="score">' + stars(score / rounds.length) + '<div class="big">' + score + ' out of ' + rounds.length + ' cases solved</div><p class="say">' + (ok ? 'Case closed. Excellent detective work!' : 'Work out each answer carefully. Try a new set of cases.') + '</p><button class="btn" id="gmAgain" type="button">New cases</button></div>'; $('gmAgain').addEventListener('click', start); return; }
          var r = rounds[i];
          host.innerHTML = '<div class="gm-top"><span class="gm-pill">Case ' + (i + 1) + ' of ' + rounds.length + '</span><span class="gm-pill">Solved ' + score + '</span></div>' + (fb ? '<div class="explain say" aria-live="polite">' + fb + '</div>' : '') +
            '<div class="gm-claim say">The answer is <b>' + plain(r.q.answer) + '</b>. Which question has this answer?</div><p class="note" style="min-height:0">Work out each question to find the one that matches.</p>' +
            '<div class="gm-steps">' + r.opts.map(function (o, k) { return '<button type="button" class="gm-step say" data-k="' + k + '">' + o.text + '</button>'; }).join('') + '</div>';
          host.querySelectorAll('.gm-step').forEach(function (b) { b.addEventListener('click', function () {
            var o = r.opts[Number(b.getAttribute('data-k'))];
            if (o === r.q) { score++; fb = '<b>' + pick(CHEER) + '</b> That one equals ' + plain(r.q.answer) + '.'; }
            else fb = '<b>Not that one.</b> ' + plain(o.text) + ' gives ' + plain(o.answer) + '. The case needed: ' + plain(r.q.text);
            i++; draw();
          }); });
        }
        draw();
      }
      start();
    };
  }

  /* With the voice on, read each new screen of a game. Touching an answer pauses the voice (see the page code). */
  function voiced(fn) {
    return function (host, ctx) {
      var tm;
      new MutationObserver(function () {
        if (!host.isConnected) return;
        clearTimeout(tm); tm = setTimeout(function () { if (host.isConnected && S.h.narPlayFn && S.state && S.h.readOn && S.h.readOn()) S.h.narPlayFn(true, host); }, 250);
      }).observe(host, { childList: true });
      fn(host, ctx);
    };
  }

  /* ---------- install: a different line-up for each year ---------- */
  var GAMES = {
    clock: { label: 'Beat the clock', title: 'Beat the clock', lead: 'A maths dash against the clock. How many can you get right?', mk: mountClock },
    match: { label: 'Match-up', title: 'Match-up', lead: 'Pair each question with its answer.', mk: mountMatch },
    tf: { label: 'Right or wrong?', title: 'Right or wrong?', lead: 'A friend gives an answer. Work it out and decide.', mk: mountTF },
    order: { label: 'Steps in order', title: 'Put the steps in order', lead: 'The steps of a worked example have been jumbled up. Put them back in order.', mk: mountOrder },
    trail: { label: 'Treasure trail', title: 'Treasure trail', lead: 'Answer questions to walk along the trail and find the treasure.', mk: mountTrail },
    spot: { label: 'Spot the mistake', title: 'Spot the mistake', lead: 'A pupil has made a mistake in their working. Can you find it?', mk: mountSpot },
    flip: { label: 'Memory flip', title: 'Memory flip', lead: 'Flip the cards and find each question with its answer.', mk: mountFlip },
    bubble: { label: 'Pop the bubble', title: 'Pop the bubble', lead: 'Work out the answer, then pop the right bubble.', mk: mountBubble },
    race: { label: 'Race the robot', title: 'Race the robot', lead: 'Can you reach the finish before the robot?', mk: mountRace },
    bank: { label: 'Bank it', title: 'Bank it', lead: 'Build up points, but know when to bank them.', mk: mountBank },
    detect: { label: 'Question detective', title: 'Question detective', lead: 'You know the answer. Find the question that matches.', mk: mountDetect },
    boss: { label: 'Boss challenge', title: 'Boss challenge', lead: 'Tough problems, three lives and no hints. Can you beat the boss?', mk: mountBoss }
  };
  var LINE = {
    P5: [['trail', { len: 6, mode: 'easy' }], ['flip', { pairs: 4, mode: 'easy' }], ['bubble', { rounds: 6, mode: 'easy' }], ['order', { min: 3, max: 4 }]],
    P6: [['clock', { secs: 60, need: 5, pen: 0, mode: 'mid' }], ['race', { len: 8, every: 9, mode: 'mid' }], ['spot', { need: 2 }], ['match', { pairs: 6, mode: 'mid' }], ['detect', { rounds: 5, pass: 4, mode: 'mid' }]],
    P7: [['clock', { secs: 75, need: 7, pen: 3, mode: 'hard' }], ['bank', { goal: 20 }], ['detect', { rounds: 6, pass: 5, mode: 'hard' }], ['spot', { need: 3 }], ['boss', { rounds: 6, lives: 3 }]],
    S: [['bank', { goal: 25 }], ['boss', { rounds: 8, lives: 3 }], ['tf', { rounds: 10, mode: 'hard', lvl: 'hard', pass: 0.8 }], ['detect', { rounds: 6, pass: 5, mode: 'hard' }], ['order', { min: 5, max: 9 }], ['spot', { need: 3 }]]
  };
  function yearKey(t) { var y = t.year || 'P6'; return y.charAt(0) === 'S' ? 'S' : y; }
  S.order.forEach(function (n) {
    var t = S.topics[n];
    if (!t || t.steps.some(function (s) { return /^a_/.test(s.id); })) return;
    if (!t.steps.some(function (s) { return s.id === 'practise'; })) return;
    var hasEx = false;
    t.steps.forEach(function (s) { if (s.type === 'slides') s.slides.forEach(function (sl) { if (sl.ex && sl.ex.steps && sl.ex.steps.length >= 3) hasEx = true; }); });
    (LINE[yearKey(t)] || LINE.P6).forEach(function (e) {
      var g = GAMES[e[0]];
      if ((e[0] === 'order' || e[0] === 'spot') && !hasEx) return;
      t.steps.push({ id: 'a_' + e[0], label: g.label, type: 'lab', tag: 'Game', title: g.title, lead: g.lead, mount: voiced(g.mk(t, e[1])) });
    });
    S.arrange(t);
  });
})();
