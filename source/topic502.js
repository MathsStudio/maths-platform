/* topic502.js: P5 The four operations, brought in line with its questions
   (column addition and subtraction, mental strategies, counting on, partitioning,
   multiplying and dividing by 0, 1, 10 and 100, division with remainders).
   Activity Time gets three hands-on activities: Column workshop, Remainder sharer, Times 10 machine. */
(function () {
  'use strict';
  var S = Studio, H = S.h, BT = window.BT; if (!BT) return;
  var t = S.topics[502]; if (!t) return;
  var rnd = H.rnd, pick = H.pick, shuffle = H.shuffle, fmtInt = H.fmtInt;
  var CHEER = ['Brilliant!', 'Nice one!', 'You got it!', 'Spot on!'], TRY = ['Not this time.', 'Good try!', 'Nearly. Next one!'];

  /* the array activity was labelled just "Activity" */
  t.steps.forEach(function (s) { if (s.id === 'lab1' && s.label === 'Activity') s.label = 'Multiplication array'; });

  var css = document.createElement('style');
  css.textContent =
    '.cw-wrap{display:flex;justify-content:center;margin:10px 0;overflow-x:auto}.cw{border-collapse:separate;border-spacing:6px 4px;font-weight:900;font-size:clamp(22px,6vw,32px);font-variant-numeric:tabular-nums}' +
    '.cw td{width:1.4em;height:1.5em;text-align:center;border-radius:8px}.cw .cw-c{font-size:.5em;color:var(--accent);height:1em}.cw .cw-op{color:var(--muted)}.cw .cw-ans td.cw-d{border:2px solid var(--line);background:var(--surface-2)}' +
    '.cw .cw-ans td.cw-cur{border-color:var(--accent);box-shadow:0 0 0 3px var(--accent)}.cw .cw-ans td.cw-ok{background:var(--good-bg);border-color:var(--good)}.cw .cw-line td{border-top:3px solid var(--fg);height:0;padding:0}' +
    '.cw .cw-x{text-decoration:line-through;color:var(--muted)}.cw .cw-ex{display:block;font-size:.45em;color:var(--accent);line-height:1}.cw-col{background:color-mix(in srgb,var(--accent) 12%,transparent)}' +
    '.cw-pad{display:grid;grid-template-columns:repeat(5,1fr);gap:8px;max-width:360px;margin:10px auto}.cw-pad button{min-height:52px;font-size:1.3rem;font-weight:800;background:var(--surface-2);border:2px solid var(--line);border-radius:12px;color:inherit}' +
    '.rs-pile{display:flex;flex-wrap:wrap;gap:5px;justify-content:center;min-height:28px;margin:8px 0}.rs-dot{width:20px;height:20px;border-radius:50%;background:var(--accent)}' +
    '.rs-bags{display:grid;grid-template-columns:repeat(auto-fit,minmax(78px,1fr));gap:8px;margin:10px 0}.rs-bag{border:2px solid var(--line);border-radius:14px;padding:8px 6px;min-height:70px;background:var(--surface-2);text-align:center}' +
    '.rs-bag b{display:block;font-size:.85rem;color:var(--muted)}.rs-bag .rs-pile{min-height:20px;margin:4px 0}.rs-bag .rs-dot{width:14px;height:14px}' +
    '.tm-chart{display:grid;gap:4px;max-width:420px;margin:10px auto}.tm-row{display:grid;grid-template-columns:repeat(6,1fr);gap:4px}.tm-row span{text-align:center;border-radius:8px;padding:6px 0;font-weight:900;font-size:clamp(18px,5vw,26px);background:var(--surface-2);border:2px solid var(--line);min-height:1.6em;transition:transform .5s}' +
    '.tm-head span{font-size:.75rem;background:none;border:0;color:var(--muted);font-weight:800}.tm-row.tm-out span{border-color:var(--good)}.tm-mach{text-align:center;font-weight:900;font-size:1.4rem;margin:6px 0}';
  document.head.appendChild(css);

  function lab(id, label, title, lead, mount, after) {
    if (t.steps.some(function (s) { return s.id === id; })) return;
    var labs = t.steps.filter(function (s) { return s.type === 'lab'; }), at = after ? t.steps.indexOf(after) + 1 : (labs.length ? t.steps.indexOf(labs[labs.length - 1]) + 1 : t.steps.length);
    var step = { id: id, label: label, type: 'lab', tag: 'Activity time · Hands-on activity', title: title, lead: lead, mount: mount };
    t.steps.splice(at, 0, step); S.arrange(t); return step;
  }
  function top(i, n, score) { return '<div class="gm-top"><span class="gm-pill">Round ' + (i + 1) + ' of ' + n + '</span><span class="gm-pill">Score ' + score + '</span></div>'; }
  function finish(host, ctx, score, n, good, again) {
    host.innerHTML = '<div class="gm-top"><span class="gm-pill">Finished!</span></div><p class="gm-say say">You got <b>' + score + ' out of ' + n + '</b>. ' + (score >= n - 1 ? good : 'Have another go to beat your score.') + '</p><div class="row"><button class="btn" type="button" data-act="again">Play again</button></div>';
    host.querySelector('[data-act="again"]').addEventListener('click', again);
    if (ctx && ctx.complete) ctx.complete();
  }

  /* ---- Column workshop: fill the answer one column at a time ---- */
  function mountColumns(host, ctx) {
    var N = 4, i, score, c;
    var PL = ['ones', 'tens', 'hundreds', 'thousands', 'ten thousands'];
    function make(r) {
      var add = r % 2 === 0, len = r < 2 ? 3 : 4, a, b;
      for (var tries = 0; tries < 50; tries++) {
        a = rnd(Math.pow(10, len - 1), Math.pow(10, len) - 1); b = rnd(Math.pow(10, len - 2), a - 1);
        if (add) { if (a + b < Math.pow(10, len) && (a % 10 + b % 10 >= 10)) break; }
        else if (a % 10 < b % 10 && b < a) break;
      }
      var res = add ? a + b : a - b, w = len, da = digits(a, w), db = digits(b, w), dr = digits(res, w);
      var carry = [], borrow = [], top = da.slice(), cin = 0;
      for (var k = w - 1; k >= 0; k--) {
        if (add) { var sum = da[k] + db[k] + cin; cin = sum >= 10 ? 1 : 0; carry[k - 1] = cin ? 1 : 0; }
        else if (top[k] < db[k]) { top[k] += 10; borrow[k] = true; var j = k - 1; while (top[j] === 0) { top[j] = 9; borrow[j] = 'x'; j--; } top[j] -= 1; borrow[j] = borrow[j] || 'x'; }
      }
      return { add: add, a: a, b: b, res: res, w: w, da: da, db: db, dr: dr, carry: carry, top: top, borrow: borrow, col: w - 1, filled: [], miss: 0 };
    }
    function digits(n, w) { var s = String(n); while (s.length < w) s = ' ' + s; return s.split('').map(function (x) { return x === ' ' ? null : Number(x); }); }
    function draw(fb, cls) {
      var cell = function (d, k, extra) { return '<td class="' + (k === c.col ? 'cw-col ' : '') + (extra || '') + '">' + (d === null || d === undefined ? '' : d) + '</td>'; };
      var crow = '<tr><td></td>' + c.da.map(function (d, k) { var show = c.add && c.carry[k] && c.filled[k + 1] !== undefined; return '<td class="cw-c">' + (show ? '1' : '') + '</td>'; }).join('') + '</tr>';
      var arow = '<tr><td></td>' + c.da.map(function (d, k) {
        var show = !c.add && ((c.borrow[k] === true && c.col <= k) || (c.borrow[k] === 'x' && c.col <= k + 1));
        if (show) return '<td class="' + (k === c.col ? 'cw-col' : '') + '"><span class="cw-ex">' + c.top[k] + '</span><span class="cw-x">' + d + '</span></td>';
        return cell(d, k);
      }).join('') + '</tr>';
      var brow = '<tr><td class="cw-op">' + (c.add ? '+' : '−') + '</td>' + c.db.map(function (d, k) { return cell(d, k); }).join('') + '</tr>';
      var line = '<tr class="cw-line"><td></td>' + c.da.map(function () { return '<td></td>'; }).join('') + '</tr>';
      var ans = '<tr class="cw-ans"><td></td>' + c.dr.map(function (d, k) { var f = c.filled[k]; return '<td class="cw-d' + (k === c.col ? ' cw-cur' : '') + (f !== undefined ? ' cw-ok' : '') + '">' + (f !== undefined ? f : '') + '</td>'; }).join('') + '</tr>';
      var done = c.col < 0 || (c.dr[c.col] === null);
      host.innerHTML = top(i, N, score) + '<div class="gm-say say">' + (done ? (c.add ? 'Added!' : 'Subtracted!') + ' ' + fmtInt(c.a) + (c.add ? ' + ' : ' − ') + fmtInt(c.b) + ' = <b>' + fmtInt(c.res) + '</b>' : 'Work out the <b>' + PL[c.w - 1 - c.col] + '</b> column. Tap the digit that goes in the box.') + '</div>' +
        '<div class="cw-wrap"><table class="cw" role="img" aria-label="' + fmtInt(c.a) + (c.add ? ' plus ' : ' minus ') + fmtInt(c.b) + ' set out in columns">' + (c.add ? crow : '') + arow + brow + line + ans + '</table></div>' +
        (done ? '' : '<div class="cw-pad">' + [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(function (d) { return '<button type="button" data-d="' + d + '">' + d + '</button>'; }).join('') + '</div>') +
        '<div class="fbk ' + (cls || '') + '" aria-live="polite" style="min-height:2.4em">' + (fb || '') + '</div><div class="row">' + (done ? '<button class="btn" type="button" data-act="next">' + (i + 1 >= N ? 'See my score' : 'Next sum') + '</button>' : '') + '</div>';
      host.querySelectorAll('.cw-pad button').forEach(function (b) { b.addEventListener('click', function () { press(Number(b.dataset.d)); }); });
      var nx = host.querySelector('[data-act="next"]'); if (nx) nx.addEventListener('click', function () { i++; if (i >= N) finish(host, ctx, score, N, 'You are a column expert!', start); else { c = make(i); draw(); } });
    }
    function why(k) {
      if (c.add) { var carried = c.carry[k] ? 1 : 0, tot = (c.da[k] || 0) + (c.db[k] || 0) + carried; return (c.da[k] || 0) + ' + ' + (c.db[k] || 0) + (carried ? ' + 1 carried' : '') + ' = ' + tot + (tot >= 10 ? '. Write ' + (tot % 10) + ' and carry 1.' : '.'); }
      var tp = c.top[k], bt = c.db[k] || 0; return (c.borrow[k] === true ? 'Exchange 1 from the next column: ' : '') + tp + ' − ' + bt + ' = ' + (tp - bt) + '.';
    }
    function press(d) {
      var k = c.col, right = c.dr[k];
      if (d === right) {
        c.filled[k] = d; var msg = '<b>' + pick(CHEER) + '</b> ' + why(k); c.col--;
        if (c.col >= 0 && c.dr[c.col] === null) c.col = -1;
        if (c.col < 0 && c.miss === 0) score++;
        draw(msg, 'ok');
      } else { c.miss++; draw('<b>' + pick(TRY) + '</b> Try again. ' + (c.add ? 'Add the digits in this column' + (c.carry[k] ? ', and remember the 1 you carried.' : '.') : (c.borrow[k] === true ? 'The top digit is too small, so exchange 1 from the next column first.' : 'Take the bottom digit away from the top digit.')), 'no'); }
    }
    function start() { i = 0; score = 0; c = make(0); draw(); }
    start();
  }

  /* ---- Remainder sharer: deal counters into bags ---- */
  function mountSharer(host, ctx) {
    var N = 5, i, score, c;
    var ITEMS = [['sweets', 'bags'], ['marbles', 'friends'], ['stickers', 'pages'], ['cards', 'players'], ['apples', 'baskets']];
    function make() { var d = rnd(3, 6), q = rnd(2, 7), r = rnd(0, d - 1), it = pick(ITEMS); return { d: d, q: q, r: r, n: d * q + r, it: it, bags: [], left: d * q + r, dealt: 0, answered: false }; }
    function dots(k) { var s = ''; for (var x = 0; x < k; x++) s += '<span class="rs-dot"></span>'; return s; }
    function draw(fb, cls) {
      var canDeal = c.left >= c.d, ready = !canDeal;
      var bags = ''; for (var b = 0; b < c.d; b++) bags += '<div class="rs-bag"><b>' + c.it[1].charAt(0).toUpperCase() + c.it[1].slice(1).replace(/s$/, '') + ' ' + (b + 1) + '</b><div class="rs-pile">' + dots(c.dealt) + '</div></div>';
      var opts = '';
      if (ready && !c.answered) { var right = c.q + ' each, ' + c.r + ' left over', set = [right, (c.q + 1) + ' each, ' + c.r + ' left over', c.q + ' each, ' + (c.r + 1) + ' left over', (c.q - 1) + ' each, ' + (c.r + c.d) + ' left over']; c.opts = c.opts || shuffle(set); opts = '<div class="bg-opts">' + c.opts.map(function (o) { return '<button class="bg-opt" type="button" data-o="' + o + '">' + o + '</button>'; }).join('') + '</div>'; }
      host.innerHTML = top(i, N, score) + '<div class="gm-say say">Share <b>' + c.n + ' ' + c.it[0] + '</b> equally between <b>' + c.d + ' ' + c.it[1] + '</b>. ' + (canDeal ? 'Tap <b>Deal</b> to give one to each.' : c.answered ? '' : 'You cannot deal another round. How many does each get, and how many are left over?') + '</div>' +
        '<div class="rs-pile" aria-label="' + c.left + ' left to share">' + dots(c.left) + '</div><div class="rs-bags">' + bags + '</div>' + opts +
        '<div class="fbk ' + (cls || '') + '" aria-live="polite" style="min-height:2.4em">' + (fb || '') + '</div><div class="row">' +
        (canDeal ? '<button class="btn" type="button" data-act="deal">Deal one each</button>' : c.answered ? '<button class="btn" type="button" data-act="next">' + (i + 1 >= N ? 'See my score' : 'Next') + '</button>' : '') + '</div>';
      var dl = host.querySelector('[data-act="deal"]'); if (dl) dl.addEventListener('click', function () { c.left -= c.d; c.dealt++; draw(); });
      host.querySelectorAll('.bg-opt').forEach(function (b) { b.addEventListener('click', function () {
        var ok = b.dataset.o === c.q + ' each, ' + c.r + ' left over'; if (ok) score++; c.answered = true;
        draw('<b>' + (ok ? pick(CHEER) : pick(TRY)) + '</b> ' + c.n + ' ÷ ' + c.d + ' = ' + c.q + (c.r ? ' remainder ' + c.r : '') + '. Each gets ' + c.q + (c.r ? ' and ' + c.r + ' ' + (c.r === 1 ? 'is' : 'are') + ' left over.' : ' with none left over.'), ok ? 'ok' : 'no');
      }); });
      var nx = host.querySelector('[data-act="next"]'); if (nx) nx.addEventListener('click', function () { i++; if (i >= N) finish(host, ctx, score, N, 'Super sharing!', start); else { c = make(); draw(); } });
    }
    function start() { i = 0; score = 0; c = make(); draw(); }
    start();
  }

  /* ---- Times 10 machine: multiply and divide by 0, 1, 10, 100 and 1,000 ---- */
  function mountMachine(host, ctx) {
    var N = 6, i, score, c, HEAD = ['HTh', 'TTh', 'Th', 'H', 'T', 'O'];
    var OPS = [['× 10', function (n) { return n * 10; }], ['× 100', function (n) { return n * 100; }], ['÷ 10', function (n) { return n / 10; }], ['÷ 100', function (n) { return n / 100; }], ['× 1', function (n) { return n; }], ['× 0', function () { return 0; }], ['÷ 1', function (n) { return n; }], ['× 1,000', function (n) { return n * 1000; }]];
    function make(r) {
      var op = r < 4 ? OPS[rnd(0, 3)] : pick(OPS.slice(4)), n;
      if (/÷ 100/.test(op[0])) n = rnd(2, 99) * 100; else if (/÷ 10/.test(op[0])) n = rnd(2, 999) * 10; else if (/1,000/.test(op[0])) n = rnd(2, 99); else n = rnd(2, 999);
      var ans = op[1](n), w = shuffle([n * 10, n * 100, Math.round(n / 10) || n + 1, n, 0, ans * 10, ans / 10].filter(function (x) { return x !== ans && x === Math.floor(x) && x < 1e6; })).slice(0, 3);
      return { n: n, op: op[0], ans: ans, opts: shuffle(w.concat([ans]).filter(function (x, k, a) { return a.indexOf(x) === k; })), done: false };
    }
    function chart(n, cls) { var s = String(n), cells = []; for (var k = 0; k < 6; k++) { var j = s.length - 6 + k; cells.push('<span>' + (j >= 0 ? s[j] : '') + '</span>'); } return '<div class="tm-row ' + (cls || '') + '">' + cells.join('') + '</div>'; }
    function draw(fb, cls) {
      host.innerHTML = top(i, N, score) + '<div class="gm-say say">The number goes into the machine. What comes out?</div>' +
        '<div class="tm-chart"><div class="tm-row tm-head">' + HEAD.map(function (h) { return '<span>' + h + '</span>'; }).join('') + '</div>' + chart(c.n) + '<div class="tm-mach">' + fmtInt(c.n) + ' ' + c.op + ' = ' + (c.done ? fmtInt(c.ans) : '?') + '</div>' + (c.done ? chart(c.ans, 'tm-out') : '') + '</div>' +
        (c.done ? '' : '<div class="bg-opts">' + c.opts.map(function (o) { return '<button class="bg-opt" type="button" data-o="' + o + '">' + fmtInt(o) + '</button>'; }).join('') + '</div>') +
        '<div class="fbk ' + (cls || '') + '" aria-live="polite" style="min-height:2.4em">' + (fb || '') + '</div><div class="row">' + (c.done ? '<button class="btn" type="button" data-act="next">' + (i + 1 >= N ? 'See my score' : 'Next') + '</button>' : '') + '</div>';
      host.querySelectorAll('.bg-opt').forEach(function (b) { b.addEventListener('click', function () {
        var ok = Number(b.dataset.o) === c.ans; if (ok) score++; c.done = true; draw('<b>' + (ok ? pick(CHEER) : pick(TRY)) + '</b> ' + rule(c.op), ok ? 'ok' : 'no');
      }); });
      var nx = host.querySelector('[data-act="next"]'); if (nx) nx.addEventListener('click', function () { i++; if (i >= N) finish(host, ctx, score, N, 'Your machine skills are brilliant!', start); else { c = make(i); draw(); } });
    }
    function rule(op) {
      return { '× 10': 'Multiplying by 10 moves every digit one place to the left.', '× 100': 'Multiplying by 100 moves every digit two places to the left.', '× 1,000': 'Multiplying by 1,000 moves every digit three places to the left.', '÷ 10': 'Dividing by 10 moves every digit one place to the right.', '÷ 100': 'Dividing by 100 moves every digit two places to the right.', '× 1': 'Multiplying by 1 leaves the number the same.', '÷ 1': 'Dividing by 1 leaves the number the same.', '× 0': 'Any number multiplied by 0 is 0.' }[op];
    }
    function start() { i = 0; score = 0; c = make(0); draw(); }
    start();
  }

  var first = t.steps.filter(function (s) { return s.id === 'lab1'; })[0];
  var s1 = lab('lab_cols', 'Column workshop', 'Column workshop', 'Add and subtract in columns, one column at a time. Watch the carries and exchanges.', mountColumns, first);
  var s2 = lab('lab_share', 'Remainder sharer', 'Remainder sharer', 'Deal the counters out equally, then say how many each gets and how many are left over.', mountSharer, s1);
  lab('lab_machine', 'Times 10 machine', 'Times 10 machine', 'Multiply and divide by 0, 1, 10, 100 and 1,000. Watch the digits move on the place value chart.', mountMachine, s2);
})();
