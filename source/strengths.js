/* strengths.js: the Strengths Check. Three rounds of questions (20 each) that mix every topic of the year and
   all three levels, a score and a colour for each topic, a short plan built from the site's own lessons,
   quick re-checks, a progress page and a report to save as PDF or print. Subscribers only: it opens for
   the years an account has paid for. Results are saved with the child's progress (key "sc"); everyday
   practice answers add up per skill (key "sk") to point each plan at the right lesson. */
(function () {
  'use strict';
  var S = window.Studio, A = S && S.app, H = S && S.h, BT = window.BT;
  if (!A || !H) return;
  var LV = ['low', 'medium', 'high'], LVN = ['Low', 'Medium', 'High'], WT = [1, 1.5, 2], ROUNDS = 3, PER = 20, KEEP = 10;
  /* younger children get shorter rounds: every year has 20 questions per round */
  function per() { var y = S.app && S.app.yearOf ? S.app.yearOf() : ''; return y === 'P3' ? 12 : y === 'P4' ? 20 : 20; }
  function mins() { var p = per(); return p <= 12 ? 10 : p <= 15 ? 12 : 15; }
  var view = null, review = [], roundAns = [];

  /* ---------- styles ---------- */
  var css = document.createElement('style');
  css.textContent = [
    ':root{--sc-amb:#8a5a00;--sc-amb-bg:#fff0c7;--sc-pur:#7a1fc2;--sc-pur-bg:#f1e6fb}',
    '@media (prefers-color-scheme: dark){:root{--sc-amb:#f2b33d;--sc-amb-bg:#3b2f12;--sc-pur:#c48bf2;--sc-pur-bg:#2c1b42}}',
    '.sc-card{background:var(--sc-pur-bg);border:0}',
    '.sc-card h2{margin:0 0 4px}',
    '.sc-row{display:flex;flex-wrap:wrap;gap:10px;align-items:center}',
    '.sc-big{font-family:var(--font-display);font-size:2.6rem;font-weight:700;line-height:1}',
    '.sc-chip{display:inline-flex;align-items:center;gap:6px;border-radius:999px;padding:3px 12px;font-weight:800;font-size:.9rem}',
    '.sc-g{background:var(--good-bg);color:var(--good)}.sc-a{background:var(--sc-amb-bg);color:var(--sc-amb)}.sc-r{background:var(--bad-bg);color:var(--bad)}',
    '.sc-dot{width:11px;height:11px;border-radius:50%;display:inline-block;flex:none}',
    '.sc-dot.g{background:var(--good)}.sc-dot.a{background:var(--sc-amb)}.sc-dot.r{background:var(--bad)}',
    '.sc-list{display:grid;gap:8px;margin:10px 0}',
    '.sc-tr{display:grid;grid-template-columns:minmax(0,1fr) minmax(90px,40%) 3.2em;gap:10px;align-items:center}',
    '.sc-tr>span:first-child{min-width:0;font-weight:700}',
    '.sc-meter{height:12px;border-radius:7px;background:var(--surface-2);overflow:hidden}',
    '.sc-meter i{display:block;height:100%}',
    '.sc-meter.g i{background:var(--good)}.sc-meter.a i{background:var(--sc-amb)}.sc-meter.r i{background:var(--bad)}',
    '.sc-pct{font-weight:800;text-align:right;font-variant-numeric:tabular-nums}',
    '.sc-two{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:14px}',
    '.sc-item{display:flex;gap:10px;align-items:flex-start;padding:9px 0;border-bottom:1px solid var(--line)}',
    '.sc-item:last-child{border-bottom:0}',
    '.sc-tick{width:22px;height:22px;border-radius:50%;border:2px solid var(--line);flex:none;display:grid;place-items:center;font-size:13px;font-weight:900;color:#fff;margin-top:2px}',
    '.sc-tick.on{background:var(--good);border-color:var(--good)}',
    '.sc-item .grow{flex:1;min-width:0}',
    '.sc-item .btn{flex:none;min-height:40px;padding:6px 12px}',
    '.sc-chart{display:flex;align-items:flex-end;gap:10px;height:150px;padding-top:22px;border-bottom:2px solid var(--line)}',
    '.sc-chart div{flex:1;max-width:70px;background:var(--sc-pur);border-radius:8px 8px 0 0;position:relative;min-height:4px}',
    '.sc-chart div span{position:absolute;top:-22px;left:0;right:0;text-align:center;font-weight:800;font-size:.85rem}',
    '.sc-clab{display:flex;gap:10px;font-size:.78rem;color:var(--muted);font-weight:700}.sc-clab span{flex:1;max-width:70px;text-align:center}',
    '.sc-map{display:grid;grid-template-columns:repeat(auto-fill,minmax(130px,1fr));gap:8px}',
    '.sc-map div{border-radius:12px;padding:10px;font-weight:800;font-size:.9rem;line-height:1.25}',
    '.sc-map small{display:block;font-weight:700;opacity:.85;margin-top:3px}',
    '.progress .pd.dn{background:var(--sc-pur)}',
    '.sc-rev{display:grid;gap:10px}.sc-rev .fb{margin:0}',
    '.sc-rev .qx{font-weight:700}',
    '#scQuiz .visual svg{max-height:240px}#scQuiz .visual img{max-height:240px;width:auto;max-width:100%}',
    '#scReport{background:#fff;color:#14213d;border-radius:14px;padding:22px;max-width:820px}',
    '#scReport h1{font-family:var(--font-display);margin:0 0 4px;font-size:1.8rem}',
    '#scReport h2{font-family:var(--font-display);font-size:1.2rem;margin:18px 0 6px}',
    '#scReport table{border-collapse:collapse;width:100%;font-size:.95rem}',
    '#scReport th,#scReport td{text-align:left;padding:6px 8px;border-bottom:1px solid #dbe3f7;vertical-align:top}',
    '#scReport .muted{color:#4a587a}',
    '#scReport .tw{overflow-x:auto}',
    '@media print{body.sc-printing *{visibility:hidden!important}body.sc-printing #scReport,body.sc-printing #scReport *{visibility:visible!important}body.sc-printing #scReport{position:absolute;left:0;top:0;width:100%;max-width:none;padding:0}}'
  ].join('');
  document.head.appendChild(css);

  /* ---------- data ---------- */
  function data() { var p = A.store.progress; if (!p.sc || typeof p.sc !== 'object') p.sc = { u: 0, checks: [] }; if (!p.sc.checks) p.sc.checks = []; if (!p.sc.rc) p.sc.rc = {}; return p.sc; }
  function touch() { data().u = Date.now(); A.save(); }
  function yr() { var y = A.yearOf(); return y === 'all' ? 'P6' : y; }
  function locked() { return S.testLocked ? S.testLocked() : false; }
  function esc(t) { return String(t == null ? '' : t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function strip(h) { var d = document.createElement('div'); d.innerHTML = String(h || ''); return (d.textContent || '').replace(/\s+/g, ' ').trim(); }
  function topics() { return A.visibleOrder().map(function (n) { return A.openTopicFor(n); }).filter(function (t) { return t && t.steps.some(function (s) { return s.id === 'practise'; }); }); }
  function topicN(n) { return S.topics[n]; }
  function myChecks() { var y = yr(); return data().checks.filter(function (c) { return c.y === y; }); }
  function lastCheck() { var c = myChecks(); return c[c.length - 1] || null; }
  function cur() { var c = data().cur; return c && c.y === yr() ? c : null; }
  function band(p) { return p >= 80 ? 'g' : p >= 50 ? 'a' : 'r'; }
  var BAND = { g: 'Strong', a: 'Getting there', r: 'Focus area' };
  function fmtDate(ms) { try { return new Date(ms).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }); } catch (e) { return ''; } }
  function shortDate(ms) { try { return new Date(ms).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' }); } catch (e) { return ''; } }
  function who() { var l = A.learner; return l && l.name ? String(l.name) : ''; }

  /* score each topic from its answers: harder questions count a little more */
  function scoreOf(ans) {
    var by = {}, sw = 0, ss = 0;
    (ans || []).forEach(function (a) {
      var o = by[a[0]] = by[a[0]] || { w: 0, s: 0, c: 0, k: 0, miss: {} }, w = WT[a[1]] || 1;
      o.w += w; o.c++; sw += w; if (a[2]) { o.s += w; o.k++; ss += w; } else if (a[3]) o.miss[a[3]] = (o.miss[a[3]] || 0) + 1;
    });
    Object.keys(by).forEach(function (n) { by[n].pct = Math.round(by[n].s / by[n].w * 100); });
    return { by: by, pct: sw ? Math.round(ss / sw * 100) : 0 };
  }
  /* a topic's latest score: a re-check taken after the last full check replaces it */
  function effective(check) {
    var r = scoreOf(check.a), rc = data().rc, out = {};
    Object.keys(r.by).forEach(function (n) { var x = rc[n]; out[n] = x && x[1] > check.at ? x[0] : r.by[n].pct; });
    return out;
  }

  /* ---------- questions ---------- */
  var bank = {};
  function pool(t, l) {
    var k = t.n + '|' + l; if (bank[k] && bank[k].length) return bank[k];
    var st = t.steps.filter(function (s) { return s.id === 'practise'; })[0], set = A.store.settings, keep = set.difficulty;
    set.difficulty = LV[l]; S.__wantCount = 20;
    try { bank[k] = H.shuffle(st.make().slice()); } catch (e) { bank[k] = []; } finally { S.__wantCount = 0; set.difficulty = keep; }
    return bank[k];
  }
  function take(t, l, seen) {
    for (var tries = 0; tries < 2; tries++) {
      var p = pool(t, l);
      for (var i = 0; i < p.length; i++) { var q = p[i], key = strip(q.text) + '|' + q.answer; if (!seen[key]) { seen[key] = 1; p.splice(i, 1); return q; } }
      bank[t.n + '|' + l] = null;
    }
    return null;
  }
  /* one round: every topic once, then extra topics to reach 20; about 7 low, 7 medium and 6 high, shuffled */
  function buildRound(r, onlyTopic, count) { return qsFrom(planRound(r, onlyTopic, count)); }
  /* the round's plan: [topic, level] for each question, saved so a round can be continued later */
  function planRound(r, onlyTopic, count) {
    var ts = onlyTopic ? [onlyTopic] : topics(), slots = [], need = onlyTopic ? [2, 2, 2] : (function (p) { var a = Math.ceil(p / 3), b = Math.ceil((p - a) / 2); return [a, b, p - a - b]; })(per());
    if (!onlyTopic) ts.forEach(function (t, i) { var l = (i + r) % 3; slots.push({ t: t, l: l }); need[l]--; });
    var extra = [], used = {}, c = cur();
    if (!onlyTopic && c) c.a.forEach(function (a) { used[a[0]] = (used[a[0]] || 0) + 1; });
    while (slots.length + extra.length < (count || per())) {
      /* the extra questions go to the topics asked least so far, so every topic ends with 4 or 5 */
      var order = H.shuffle(ts.slice()).sort(function (x, y) { return (used[x.n] || 0) - (used[y.n] || 0); });
      order.forEach(function (t) { used[t.n] = (used[t.n] || 0) + 1; });
      extra = extra.concat(order);
    }
    extra.slice(0, (count || per()) - slots.length).forEach(function (t) {
      var l = [0, 1, 2].sort(function (a, b) { return need[b] - need[a]; })[0]; need[l]--; slots.push({ t: t, l: l });
    });
    return H.shuffle(slots).map(function (s) { return [s.t.n, s.l]; });
  }
  function qsFrom(slots) {
    var seen = {};
    return slots.map(function (s) {
      var t = topicN(s[0]), q = t && take(t, s[1], seen); if (!q) return null;
      q = Object.assign({}, q); q._sc = { n: s[0], l: s[1] }; return q;
    }).filter(Boolean);
  }

  /* ---------- answers: from the check, and from everyday practice ---------- */
  S.sc = S.sc || {};
  S.sc.onAnswer = function (q, ok, val, cfg) {
    if (cfg && cfg.scRound) {
      var row = [q._sc.n, q._sc.l, ok ? 1 : 0, String(q.tag || '').slice(0, 60)], c = cur();
      review.push({ q: q, val: val, ok: ok });
      if (view && view.name === 'round' && c) { c.ra = (c.ra || []).concat([row]); touch(); }   /* saved after every answer */
      else roundAns.push(row);
      return;
    }
    if (cfg && cfg.exam) return;
    var p = A.store.progress, tag = String(q.tag || '').slice(0, 60);
    if (tag) { p.sk = p.sk || {}; var x = p.sk[tag] || [0, 0]; if (Object.keys(p.sk).length < 400 || p.sk[tag]) p.sk[tag] = [x[0] + (ok ? 1 : 0), x[1] + 1]; }
    var n = A.state.tab, pl = data().plan;
    if (typeof n === 'number' && pl && pl.y === yr()) pl.it.forEach(function (it) { if (it.n === n && !it.p) { it.pc = (it.pc || 0) + 1; if (it.pc >= 10) it.p = 1; } });
    touch();
  };

  /* ---------- the plan ---------- */
  function watchSlides(t) { var w = t.steps.filter(function (s) { return s.id === 'watch'; })[0]; return w && w.slides ? w.slides.map(function (s) { return s.title || ''; }) : []; }
  function words(s) { return String(s).toLowerCase().replace(/[^a-z0-9 ]/g, ' ').split(/\s+/).filter(function (w) { return w.length > 3 && ['what', 'with', 'from', 'your', 'this', 'that', 'into', 'does'].indexOf(w) < 0; }); }
  function bestLesson(t, tag) {
    var ts = watchSlides(t); if (!ts.length) return { j: 0, title: '' };
    var want = words(tag), best = 0, bj = 0;
    ts.forEach(function (title, j) { var tw = words(title), sc = 0; want.forEach(function (w) { if (tw.some(function (x) { return x.indexOf(w.slice(0, 5)) === 0 || w.indexOf(x.slice(0, 5)) === 0; })) sc++; }); if (sc > best) { best = sc; bj = j; } });
    return { j: bj, title: ts[bj] };
  }
  function weakTag(n, by) {
    var miss = (by[n] && by[n].miss) || {}, sk = A.store.progress.sk || {}, tags = Object.keys(miss).filter(function (g) { return !/reasoning|real-life|mixed|practice|challenge/i.test(g); });
    tags.sort(function (a, b) { if (miss[b] !== miss[a]) return miss[b] - miss[a]; var ra = sk[a] ? sk[a][0] / Math.max(1, sk[a][1]) : 1, rb = sk[b] ? sk[b][0] / Math.max(1, sk[b][1]) : 1; return ra - rb; });
    return tags[0] || '';
  }
  function makePlan(check) {
    var r = scoreOf(check.a), eff = effective(check), ns = Object.keys(eff).map(Number);
    ns.sort(function (a, b) { return eff[a] - eff[b]; });
    var focus = ns.filter(function (n) { return eff[n] < 50; }).slice(0, 3);
    if (focus.length < 2) ns.filter(function (n) { return eff[n] < 80 && focus.indexOf(n) < 0; }).slice(0, 2 - focus.length).forEach(function (n) { focus.push(n); });
    if (!focus.length) focus = ns.slice(0, 2);
    data().plan = { y: check.y, at: Date.now(), it: focus.map(function (n) { return { n: n, g: weakTag(n, r.by), w: 0, l: 0, p: 0, r: 0, pc: 0 }; }) };
  }
  function planDone(pl) { var d = 0, t = 0; (pl ? pl.it : []).forEach(function (it) { t += 4; d += (it.w ? 1 : 0) + (it.l ? 1 : 0) + (it.p ? 1 : 0) + (it.r ? 1 : 0); }); return [d, t]; }
  function myPlan() { var pl = data().plan; return pl && pl.y === yr() ? pl : null; }

  /* ---------- opening lessons from the plan ---------- */
  function openStep(t, pick, slide) {
    A.arrange(t); var steps = A.allSteps(t), i = -1;
    steps.some(function (s, k) { if (pick(s)) { i = k; return true; } return false; });
    if (i < 0) i = 0;
    view = null; document.body.classList.remove('sc-printing');
    var st = A.state; st.tab = t.n; st.part = steps[i].group; st.step = i; st.slide = slide || 0;
    A.render(); window.scrollTo(0, 0);
  }

  /* ---------- screens ---------- */
  function show(name, extra) { view = Object.assign({ name: name, key: name + ':' + Date.now() }, extra || {}); document.body.classList.toggle('sc-printing', name === 'report'); A.state.tab = 'home'; A.render(); window.scrollTo(0, 0); }
  function home() { view = null; document.body.classList.remove('sc-printing'); A.render(); var e = document.getElementById('scCard'); if (e && e.scrollIntoView) e.scrollIntoView({ block: 'start' }); }
  /* leaving through the top bar, the tabs or a year button closes these screens */
  document.addEventListener('click', function (e) {
    if (!view) return; var el = e.target && e.target.closest && e.target.closest('#tabs, #tbHome, #brandMark, [data-year], #chgYear');
    if (el) { view = null; document.body.classList.remove('sc-printing'); }
  }, true);

  S.sc.view = function (v) {
    if (!view) return false;
    if (locked()) { view = null; return false; }
    var root = v.querySelector('#scRoot');
    if (root && root.getAttribute('data-k') === view.key) return true;   /* already on screen: do not lose a round in progress */
    v.innerHTML = '<div id="scRoot" data-k="' + view.key + '"></div>';
    root = v.querySelector('#scRoot');
    ({ intro: drawIntro, round: drawRound, between: drawBetween, results: drawResults, plan: drawPlan, progress: drawProgress, report: drawReport, recheck: drawRecheck, rcdone: drawRcDone })[view.name](root);
    return true;
  };
  function back(label) { return '<div class="partbar"><button class="btn ghost" type="button" data-sc="home">← ' + (label || 'Back to home') + '</button><b class="sglab">Strengths Check</b></div>'; }
  function wire(root) {
    root.querySelectorAll('[data-sc]').forEach(function (b) {
      b.addEventListener('click', function () {
        var a = b.getAttribute('data-sc');
        if (a === 'home') home();
        else if (a === 'start') startRound();
        else if (a === 'new') { delete data().cur; touch(); show('intro'); }
        else if (a === 'results') show('results');
        else if (a === 'plan') show('plan');
        else if (a === 'progress') show('progress');
        else if (a === 'report') show('report');
        else if (a === 'print') { document.body.classList.add('sc-printing'); window.print(); }
        else if (a === 'unlock') { if (S.askUnlock) S.askUnlock('The Strengths Check'); }
      });
    });
  }

  /* the card on the home page */
  S.sc.card = function () {
    if (/^P[23]$/.test(S.app.yearOf())) return '';   /* P2 and P3 have no Strengths Check (P4 does) */
    var y = yr(), name = who(), h = '<section class="card sc-card" id="scCard"><h2>Check my strengths</h2>';
    if (locked()) return h + '<p class="say">Find out which topics ' + (name ? esc(name) + ' is' : 'you are') + ' strong in, and which to work on next, with a plan made from the lessons on this site. Three rounds of ' + per() + ' questions that cover every ' + y + ' topic.</p><p class="note" style="min-height:0">Part of a subscription.</p><button class="btn" type="button" data-sc="unlock">🔒 Unlock with a subscription</button></section>';
    var c = cur(), last = lastCheck(), pl = myPlan();
    var mid = c && c.ra && c.ra.length;
    if (c) return h + '<p class="say">' + (mid ? 'Round ' + (c.r + 1) + ' of 3: ' + c.ra.length + ' of ' + per() + ' answered. Carry on where you left off.' : 'Round ' + (c.r + 1) + ' of 3 is next. Each round has ' + per() + ' questions and takes about ' + mins() + ' minutes.') + '</p><div class="sc-row"><button class="btn" type="button" data-sc="start">' + (mid ? 'Continue round ' : 'Start round ') + (c.r + 1) + '</button>' + (last ? '<button class="btn ghost" type="button" data-sc="results">Last results</button>' : '') + '</div></section>';
    if (!last) return h + '<p class="say">Three rounds of ' + per() + ' questions mix every ' + y + ' topic at every level. At the end you will see your strengths, your focus areas and a plan to work on them.</p><p class="note" style="min-height:0">About ' + mins() + ' minutes a round. You can stop at any time and carry on later.</p><button class="btn" type="button" data-sc="start">Start round 1</button></section>';
    var eff = effective(last), ns = Object.keys(eff), g = ns.filter(function (n) { return eff[n] >= 80; }).length, r = ns.filter(function (n) { return eff[n] < 50; }).length, pd = planDone(pl);
    return h + '<div class="sc-row" style="margin:6px 0 10px"><span class="sc-big">' + scoreOf(last.a).pct + '%</span><span class="note" style="min-height:0;margin:0">Last check ' + shortDate(last.at) + ' · ' + g + ' strong · ' + r + ' to focus on</span></div>' +
      (pl ? '<p class="say" style="margin:0 0 8px">My plan: ' + pd[0] + ' of ' + pd[1] + ' steps done.</p>' : '') +
      '<div class="sc-row"><button class="btn" type="button" data-sc="plan">My plan</button><button class="btn ghost" type="button" data-sc="results">My results</button><button class="btn ghost" type="button" data-sc="progress">My progress</button><button class="btn ghost" type="button" data-sc="new">Take a new check</button></div></section>';
  };
  S.sc.bind = function (v) { var c = v.querySelector('#scCard'); if (c) wire(c); };

  function drawIntro(root) {
    var c = cur(), r = c ? c.r : 0;
    root.innerHTML = back() + '<section class="card"><h1 class="say" style="margin:0 0 6px">Check my strengths</h1>' +
      '<p class="lead say">Three rounds of ' + per() + ' questions. Each round mixes every ' + yr() + ' topic at low, medium and high level.</p>' +
      '<ul class="say"><li>There are no hints in the check. Do your best on each one.</li><li>Pick an answer, or type it and press Next. The next question comes straight away.</li><li>You can stop at any time. Your answers are saved, and you carry on from the same question.</li><li>You will see every answer, with the working, at the end of the round.</li></ul>' +
      '<button class="btn" type="button" data-sc="start">' + (c && c.ra && c.ra.length ? 'Continue round ' : 'Start round ') + (r + 1) + '</button></section>';
    wire(root);
  }
  function startRound() {
    var d = data(), c = cur();
    if (!c) { c = d.cur = { y: yr(), at: Date.now(), r: 0, a: [] }; }
    if (!c.s || !c.s.length) { c.s = planRound(c.r); c.ra = []; }
    c.ra = c.ra || []; touch();
    review = []; roundAns = [];
    show('round', { qs: qsFrom(c.s.slice(c.ra.length)), off: c.ra.length });
  }
  function drawRound(root) {
    var c = cur(); if (!c) { drawIntro(root); return; }
    root.innerHTML = '<div class="partbar"><button class="btn ghost" type="button" id="scStop">Save and stop</button><b class="sglab">Round ' + (c.r + 1) + ' of 3</b></div>' +
      '<p class="note" style="min-height:0;margin:0 0 8px">Your answers are saved as you go. Stop at any time and carry on later from the same question.</p>' +
      '<section class="card"><div id="scQuiz"></div></section>';
    root.querySelector('#scStop').addEventListener('click', function () { review = []; home(); });
    A.mountQuiz(root.querySelector('#scQuiz'), view.qs, { exam: true, scRound: true, off: view.off || 0, make: function () { return view.qs; }, onDone: function () { }, onFinish: function () { finishRound(); } });
  }
  function finishRound() {
    var d = data(), c = cur(); if (!c) return;
    c.a = c.a.concat(c.ra || []); c.r++; c.ra = []; delete c.s; roundAns = [];
    if (c.r >= ROUNDS) {
      var check = { y: c.y, at: Date.now(), a: c.a };
      d.checks.push(check); while (d.checks.length > KEEP) d.checks.shift();
      delete d.cur; makePlan(check); touch(); show('results', { fresh: true });
    } else { touch(); show('between'); }
  }
  function reviewHtml() {
    if (!review.length) return '';
    return '<details class="card"><summary>Check your answers (' + review.filter(function (x) { return x.ok; }).length + ' of ' + review.length + ' right in this round)</summary><div class="sc-rev" style="margin-top:10px">' +
      review.map(function (x, i) {
        var q = x.q, shown = q.show || q.answer;
        return '<div class="fb ' + (x.ok ? 'ok' : 'no') + '"><div class="qx">' + (i + 1) + '. ' + q.text + '</div>' + (x.ok ? '<strong>Right: ' + esc(shown) + '</strong>' : '<strong>Your answer: ' + esc(x.val) + '. The answer is ' + esc(shown) + '.</strong>') + (q.explain ? '<div>' + q.explain + '</div>' : '') + '</div>';
      }).join('') + '</div></details>';
  }
  function drawBetween(root) {
    var c = cur(); if (!c) { drawResults(root); return; }
    root.innerHTML = back() + '<section class="card"><h1 class="say" style="margin:0 0 6px">Round ' + c.r + ' done</h1><p class="lead say">' + (3 - c.r) + ' round' + (3 - c.r > 1 ? 's' : '') + ' to go. Start the next one now, or come back later: your finished rounds are saved.</p>' +
      '<div class="sc-row"><button class="btn" type="button" data-sc="start">Start round ' + (c.r + 1) + '</button><button class="btn ghost" type="button" data-sc="home">Later</button></div></section>' + reviewHtml();
    wire(root);
  }

  function topicRows(eff, prev) {
    var ns = Object.keys(eff).map(Number).sort(function (a, b) { return eff[b] - eff[a]; });
    return '<div class="sc-list">' + ns.map(function (n) {
      var t = topicN(n), p = eff[n], b = band(p), ch = prev && prev[n] != null ? p - prev[n] : null;
      return '<div class="sc-tr"><span>' + esc(t ? t.title : n) + (ch ? ' <span class="note" style="font-weight:700">' + (ch > 0 ? '+' : '') + ch + '</span>' : '') + '</span><span class="sc-meter ' + b + '" role="img" aria-label="' + p + '%, ' + BAND[b] + '"><i style="width:' + Math.max(3, p) + '%"></i></span><span class="sc-pct">' + p + '%</span></div>';
    }).join('') + '</div>';
  }
  function drawResults(root) {
    var last = lastCheck();
    if (!last) { drawIntro(root); return; }
    var all = myChecks(), prevC = all.length > 1 ? all[all.length - 2] : null, r = scoreOf(last.a), eff = effective(last), prevEff = prevC ? effective(prevC) : null;
    var ns = Object.keys(eff).map(Number), g = ns.filter(function (n) { return eff[n] >= 80; }), a = ns.filter(function (n) { return eff[n] >= 50 && eff[n] < 80; }), rr = ns.filter(function (n) { return eff[n] < 50; });
    var strong = ns.slice().sort(function (x, y) { return eff[y] - eff[x]; }).slice(0, 3).filter(function (n) { return eff[n] >= 50; });
    var pl = myPlan(), diff = prevC ? r.pct - scoreOf(prevC.a).pct : null;
    root.innerHTML = back() + '<section class="card"><div class="eyebrow">' + yr() + ' · ' + fmtDate(last.at) + '</div><h1 class="say" style="margin:.1em 0 10px">' + (who() ? esc(who()) + '’s results' : 'Your results') + '</h1>' +
      '<div class="sc-row"><span class="sc-big">' + r.pct + '%</span><span class="say">' + (diff == null ? 'Your first Strengths Check. ' : (diff >= 0 ? 'Up ' + diff + '% since your last check. ' : 'Down ' + (-diff) + '% since your last check. ')) + g.length + ' strong, ' + a.length + ' getting there, ' + rr.length + ' to focus on.</span></div>' +
      '<div class="sc-row" style="margin-top:10px"><span class="sc-chip sc-g"><span class="sc-dot g"></span>Strong 80%+</span><span class="sc-chip sc-a"><span class="sc-dot a"></span>Getting there 50–79%</span><span class="sc-chip sc-r"><span class="sc-dot r"></span>Focus area under 50%</span></div>' +
      topicRows(eff, prevEff) + '</section>' +
      '<div class="sc-two"><section class="card"><h2>My strengths</h2>' + (strong.length ? '<ul>' + strong.map(function (n) { return '<li>' + esc(topicN(n).title) + '</li>'; }).join('') + '</ul>' : '<p class="say">Keep going: strengths will show here.</p>') + '</section>' +
      '<section class="card"><h2>Focus next</h2>' + (pl ? '<ul>' + pl.it.map(function (it) { return '<li>' + esc(topicN(it.n).title) + (it.g ? ' <span class="note">(' + esc(it.g) + ')</span>' : '') + '</li>'; }).join('') + '</ul>' : '') + '<button class="btn" type="button" data-sc="plan">See my plan</button></section></div>' +
      '<div class="sc-row" style="margin:6px 0 14px"><button class="btn ghost" type="button" data-sc="progress">My progress</button><button class="btn ghost" type="button" data-sc="report">Download report</button></div>' + (view.fresh ? reviewHtml() : '');
    wire(root);
  }

  function drawPlan(root) {
    var pl = myPlan();
    if (!pl) { drawResults(root); return; }
    var pd = planDone(pl);
    root.innerHTML = back() + '<section class="card"><h1 class="say" style="margin:0 0 6px">My plan</h1><p class="lead say">About ' + (per() < 20 ? '10' : '20') + ' minutes a day. Work down each topic: watch, learn, practise, then a quick re-check. Pass the re-check and the topic moves up.</p>' +
      '<div class="bar" style="margin:6px 0" role="progressbar" aria-valuemin="0" aria-valuemax="' + pd[1] + '" aria-valuenow="' + pd[0] + '"><i style="width:' + Math.round(pd[0] / Math.max(1, pd[1]) * 100) + '%"></i></div><p class="note" style="min-height:0">' + pd[0] + ' of ' + pd[1] + ' steps done</p></section>' +
      pl.it.map(function (it, k) {
        var t = topicN(it.n); if (!t) return '';
        var L = bestLesson(t, it.g), rc = data().rc[it.n], eff = effective(lastCheck())[it.n];
        function row(key, label, text, btn) { return '<div class="sc-item"><span class="sc-tick' + (it[key] ? ' on' : '') + '">' + (it[key] ? '✓' : '') + '</span><div class="grow"><b>' + label + '</b><div class="note" style="min-height:0;margin:0">' + text + '</div></div><button class="btn' + (it[key] ? ' ghost' : '') + '" type="button" data-pl="' + k + ':' + key + '">' + btn + '</button></div>'; }
        return '<section class="card"><h2 style="margin:0 0 2px"><span class="sc-dot ' + band(eff) + '"></span> ' + esc(t.title) + ' <span class="note">' + eff + '%</span></h2>' + (it.g ? '<p class="note" style="min-height:0;margin:0 0 6px">Skill to work on: ' + esc(it.g) + '</p>' : '') +
          row('w', 'Watch', esc(L.title || 'The Watch lesson'), it.w ? 'Watch again' : 'Watch') +
          row('l', 'Let’s Learn', 'The lessons with worked examples', it.l ? 'Open again' : 'Open') +
          row('p', 'Practise', it.p ? 'Done' : 'Answer 10 practice questions in this topic (' + Math.min(10, it.pc || 0) + ' of 10)', 'Practise') +
          row('r', 'Re-check', it.r ? 'Last re-check: ' + (it.rs != null ? it.rs : (rc ? rc[0] : '')) + '%' : '6 questions on this topic only', it.r ? 'Re-check again' : 'Re-check') + '</section>';
      }).join('') +
      '<div class="sc-row" style="margin-bottom:14px"><button class="btn ghost" type="button" data-sc="results">My results</button><button class="btn ghost" type="button" data-sc="new">Take a new full check</button></div>';
    wire(root);
    root.querySelectorAll('[data-pl]').forEach(function (b) {
      b.addEventListener('click', function () {
        var p = b.getAttribute('data-pl').split(':'), it = pl.it[Number(p[0])], t = topicN(it.n); if (!t) return;
        if (p[1] === 'w') { it.w = 1; touch(); openStep(t, function (s) { return s.id === 'watch'; }, bestLesson(t, it.g).j); }
        else if (p[1] === 'l') { it.l = 1; touch(); openStep(t, function (s) { return s.group === 'learn' && s.id !== 'watch'; }); }
        else if (p[1] === 'p') { openStep(t, function (s) { return s.id === 'practise'; }); }
        else if (p[1] === 'r') { review = []; roundAns = []; show('recheck', { n: it.n, k: Number(p[0]), qs: buildRound(0, t, 6) }); }
      });
    });
  }
  function drawRecheck(root) {
    var t = topicN(view.n);
    root.innerHTML = '<div class="partbar"><button class="btn ghost" type="button" data-sc="plan">← Back to my plan</button><b class="sglab">Re-check: ' + esc(t.title) + '</b></div><section class="card"><div id="scQuiz"></div></section>';
    wire(root);
    A.mountQuiz(root.querySelector('#scQuiz'), view.qs, { exam: true, scRound: true, make: function () { return view.qs; }, onDone: function () { }, onFinish: function () {
      var r = scoreOf(roundAns), p = r.pct, pl = myPlan(), it = pl && pl.it[view.k];
      data().rc[view.n] = [p, Date.now()]; if (it) { it.r = 1; it.rs = p; }
      roundAns = []; touch(); show('rcdone', { n: view.n, p: p });
    } });
  }
  function drawRcDone(root) {
    var t = topicN(view.n), b = band(view.p);
    root.innerHTML = back('Back to home') + '<section class="card"><h1 class="say" style="margin:0 0 6px">' + esc(t.title) + ': ' + view.p + '%</h1>' +
      '<p class="lead say">' + (b === 'g' ? 'Brilliant. This topic is now strong.' : b === 'a' ? 'Good progress. This topic is getting there. Practise a little more and re-check again.' : 'Keep going. Watch the lesson again, practise, then try another re-check.') + '</p>' +
      '<span class="sc-chip sc-' + b + '"><span class="sc-dot ' + b + '"></span>' + BAND[b] + '</span><div class="sc-row" style="margin-top:12px"><button class="btn" type="button" data-sc="plan">Back to my plan</button></div></section>' + reviewHtml();
    wire(root);
  }

  function drawProgress(root) {
    var all = myChecks(), last = lastCheck();
    if (!last) { drawIntro(root); return; }
    var eff = effective(last), ns = topics().map(function (t) { return t.n; });
    root.innerHTML = back() + '<section class="card"><h1 class="say" style="margin:0 0 6px">' + (who() ? esc(who()) + '’s progress' : 'My progress') + '</h1><p class="lead say">Each Strengths Check, and every topic from the latest one. A re-check updates its topic.</p>' +
      '<h2>Strengths Check scores</h2><div class="sc-chart">' + all.map(function (c) { var p = scoreOf(c.a).pct; return '<div style="height:' + Math.max(3, p) + '%"><span>' + p + '%</span></div>'; }).join('') + '</div>' +
      '<div class="sc-clab">' + all.map(function (c) { return '<span>' + shortDate(c.at) + '</span>'; }).join('') + '</div>' +
      '<h2 style="margin-top:18px">Topic map</h2><div class="sc-map">' + ns.map(function (n) { var p = eff[n], b = p == null ? '' : band(p); return '<div class="' + (b ? 'sc-' + b : '') + '" style="' + (b ? '' : 'background:var(--surface-2)') + '">' + esc(topicN(n).title) + '<small>' + (p == null ? 'Not checked' : p + '% · ' + BAND[b]) + '</small></div>'; }).join('') + '</div></section>' +
      '<div class="sc-row" style="margin-bottom:14px"><button class="btn" type="button" data-sc="report">Download report</button><button class="btn ghost" type="button" data-sc="plan">My plan</button></div>';
    wire(root);
  }

  /* one or two everyday ideas for helping at home, by topic */
  var HOME = [
    [/fraction/i, 'Share a pizza or a bar of chocolate and ask what fraction each person gets, or what ¾ of 12 slices is.'],
    [/ratio|proportion/i, 'Mix a drink in a ratio such as 1 : 4, or scale a recipe for more people.'],
    [/percent/i, 'Look at sale signs together and work out the new price after 10% or 25% off.'],
    [/decimal/i, 'Compare prices in pounds and pence, or measure heights in metres to 2 decimal places.'],
    [/money|finance/i, 'Plan a small shopping budget and work out the change from a £20 note.'],
    [/time|speed/i, 'Use a bus or train timetable to work out how long a journey takes.'],
    [/measure|area|volume|perimeter|solid/i, 'Measure a room or a box and work out its area, perimeter or volume.'],
    [/angle|shape|polygon|symmetry|circle|pythag|trig|similar/i, 'Spot shapes, angles and symmetry in buildings, signs and patterns on a walk.'],
    [/data|statistic|probab|chance/i, 'Keep a tally of something for a week, such as the weather, then find the mean and draw a chart.'],
    [/algebra|equation|sequence|pattern|formula|line/i, 'Make up “I think of a number” puzzles for each other and solve them.'],
    [/place value|number|integer|power|root/i, 'Read big numbers from the news aloud and round them, for example to the nearest thousand.'],
    [/spatial|reason|problem/i, 'Try a puzzle together each day and talk about the steps used to solve it.']
  ];
  function homeIdea(title) { for (var i = 0; i < HOME.length; i++) if (HOME[i][0].test(title)) return HOME[i][1]; return 'Practise a few questions together and ask your child to explain each step.'; }

  function drawReport(root) {
    var all = myChecks(), last = lastCheck();
    if (!last) { document.body.classList.remove('sc-printing'); drawIntro(root); return; }
    var eff = effective(last), prevC = all.length > 1 ? all[all.length - 2] : null, prevEff = prevC ? effective(prevC) : null, pl = myPlan(), pd = planDone(pl);
    var ns = Object.keys(eff).map(Number).sort(function (a, b) { return eff[b] - eff[a]; });
    var strong = ns.filter(function (n) { return eff[n] >= 80; }).slice(0, 4);
    root.innerHTML = back() + '<div class="sc-row" style="margin-bottom:12px"><button class="btn" type="button" data-sc="print">Save as PDF or print</button><span class="note" style="min-height:0;margin:0">Choose “Save as PDF” in the print window to keep a copy.</span></div>' +
      '<div id="scReport"><div class="muted" style="font-weight:800">MathsStudio · Strengths Check report</div><h1>' + (who() ? esc(who()) : 'Progress report') + ' · ' + yr() + '</h1><div class="muted">Report made on ' + fmtDate(Date.now()) + '. Latest check: ' + fmtDate(last.at) + '.</div>' +
      '<h2>Scores</h2><div class="tw"><table><thead><tr><th>Check</th><th>Score</th></tr></thead><tbody>' + all.map(function (c, i) { return '<tr><td>' + (i + 1) + '. ' + fmtDate(c.at) + '</td><td>' + scoreOf(c.a).pct + '%</td></tr>'; }).join('') + '</tbody></table></div>' +
      '<h2>Topics</h2><div class="tw"><table><thead><tr><th>Topic</th><th>Score</th><th>Level</th><th>Change</th></tr></thead><tbody>' + ns.map(function (n) { var p = eff[n], ch = prevEff && prevEff[n] != null ? p - prevEff[n] : null; return '<tr><td>' + esc(topicN(n).title) + '</td><td>' + p + '%</td><td>' + BAND[band(p)] + '</td><td>' + (ch == null ? '–' : (ch > 0 ? '+' : '') + ch) + '</td></tr>'; }).join('') + '</tbody></table></div>' +
      '<h2>Strengths</h2><p>' + (strong.length ? strong.map(function (n) { return esc(topicN(n).title); }).join(', ') + '.' : 'Strengths will show here as topics reach 80%.') + '</p>' +
      (pl ? '<h2>Focus areas and plan</h2><p class="muted">' + pd[0] + ' of ' + pd[1] + ' plan steps done.</p><div class="tw"><table><thead><tr><th>Topic</th><th>Skill to work on</th><th>Done</th><th>At home</th></tr></thead><tbody>' + pl.it.map(function (it) {
        var t = topicN(it.n), dn = ['w', 'l', 'p', 'r'].filter(function (k) { return it[k]; }).length;
        return '<tr><td>' + esc(t.title) + ' (' + eff[it.n] + '%)</td><td>' + esc(it.g || '–') + '</td><td>' + dn + ' of 4' + (it.r ? '<br>Re-check ' + it.rs + '%' : '') + '</td><td>' + esc(homeIdea(t.title)) + '</td></tr>'; }).join('') + '</tbody></table></div>' : '') +
      '<p class="muted" style="margin-top:16px">Strong: 80% or more. Getting there: 50 to 79%. Focus area: under 50%. Harder questions count a little more. mathsstudio.co.uk</p></div>';
    wire(root);
  }
})();
