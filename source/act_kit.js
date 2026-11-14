/* act_kit.js: a shared way to make hands-on activities, so every topic can get activities for its
   newly assigned questions. BT.rounds(cfg) makes a round-by-round activity: a picture, a question,
   answer buttons, feedback with the working, a score and "Play again". BT.addLab adds it to a topic.
   Also: any activity still labelled just "Activity" gets its own title as its label. */
(function () {
  'use strict';
  var S = Studio, H = S.h, BT = window.BT; if (!BT) return;
  var rnd = H.rnd, pick = H.pick, shuffle = H.shuffle;
  var CHEER = ['Brilliant!', 'Nice one!', 'You got it!', 'Spot on!', 'Great thinking!'], TRY = ['Not this time.', 'Good try!', 'Nearly. Next one!'];

  BT.rounds = function (cfg) {
    return function (host, ctx) {
      var n = cfg.rounds || 6, i, score, cur, picked;
      function make(r) {
        for (var t = 0; t < 20; t++) {
          var q = cfg.make(r), opts = [], seen = {};
          [q.answer].concat(q.wrong || []).forEach(function (o) { o = String(o); if (!seen[o] && opts.length < 4) { seen[o] = 1; opts.push(o); } });
          if (opts.length >= 2) { q.options = q.keepOrder ? opts : shuffle(opts); q.answer = String(q.answer); return q; }
        }
        return q;
      }
      function draw(fb, cls) {
        var done = picked !== null;
        host.innerHTML = '<div class="gm-top"><span class="gm-pill">Round ' + (i + 1) + ' of ' + n + '</span><span class="gm-pill">Score ' + score + '</span></div>' +
          (cur.vis ? '<div class="visual" style="text-align:center;overflow-x:auto">' + cur.vis + '</div>' : '') + '<div class="gm-say say">' + cur.q + '</div>' +
          '<div class="bg-opts">' + cur.options.map(function (o, k) {
            var c = done ? (o === cur.answer ? ' ok' : k === picked ? ' no' : '') : '';
            return '<button class="bg-opt' + c + '" type="button" data-k="' + k + '"' + (done ? ' disabled' : '') + '>' + o + '</button>'; }).join('') + '</div>' +
          '<div class="fbk ' + (cls || '') + '" aria-live="polite" style="min-height:2.4em">' + (fb || '') + '</div>' +
          '<div class="row">' + (done ? '<button class="btn" type="button" data-act="next">' + (i + 1 >= n ? 'See my score' : 'Next') + '</button>' : '') + '</div>';
        host.querySelectorAll('.bg-opt:not([disabled])').forEach(function (b) { b.addEventListener('click', function () {
          picked = Number(b.getAttribute('data-k')); var ok = cur.options[picked] === cur.answer; if (ok) score++;
          draw('<b>' + (ok ? pick(CHEER) : pick(TRY)) + '</b> ' + cur.explain, ok ? 'ok' : 'no');
        }); });
        var nx = host.querySelector('[data-act="next"]'); if (nx) nx.addEventListener('click', function () { i++; if (i >= n) finish(); else { cur = make(i); picked = null; draw(); } });
      }
      function finish() {
        host.innerHTML = '<div class="gm-top"><span class="gm-pill">Finished!</span></div><p class="gm-say say">You got <b>' + score + ' out of ' + n + '</b>. ' + (score === n ? 'A perfect round!' : score >= n - 2 ? 'Great work!' : 'Have another go to beat your score.') + '</p><div class="row"><button class="btn" type="button" data-act="again">Play again</button></div>';
        host.querySelector('[data-act="again"]').addEventListener('click', start);
        if (ctx && ctx.complete) ctx.complete();
      }
      function start() { i = 0; score = 0; picked = null; cur = make(0); draw(); }
      start();
    };
  };

  /* add a hands-on activity to topic n, after the topic's own activities (before the general ones) */
  BT.addLab = function (n, id, label, lead, mount) {
    var t = S.topics[n]; if (!t || t.steps.some(function (s) { return s.id === id; })) return;
    var labs = t.steps.filter(function (s) { return s.type === 'lab' && !/^a_/.test(s.id) && s.id !== 'plot'; });
    var after = labs[labs.length - 1], at = after ? t.steps.indexOf(after) + 1 : t.steps.length;
    t.steps.splice(at, 0, { id: id, label: label, type: 'lab', tag: 'Activity time · Hands-on activity', title: label, lead: lead, mount: mount });
    S.arrange(t);
  };

  BT.relabelActivities = function () {
    Object.keys(S.topics).forEach(function (k) { (S.topics[k].steps || []).forEach(function (s) { if (s.type === 'lab' && s.label === 'Activity' && s.title) s.label = s.title; }); });
  };
})();
