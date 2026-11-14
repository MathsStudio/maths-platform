/* topic501.js: P5 Place value and rounding, brought in line with its questions
   (place value, negative numbers, partitioning, rounding).
   - Let's Learn: a Partitioning lesson of its own (the partitioning slide moves here from Negative numbers)
   - Activity Time: a Partition puzzle */
(function () {
  'use strict';
  var S = Studio, H = S.h, K = S.kit, BT = window.BT; if (!BT || !BT.add) return;
  var t = S.topics[501]; if (!t) return;
  var X = BT.X, sl = BT.sl, rnd = H.rnd, pick = H.pick, shuffle = H.shuffle, fmtInt = H.fmtInt;

  /* ---- Let's Learn: Partitioning ---- */
  var neg = t.steps.filter(function (s) { return s.id === 'learn3'; })[0], moved = [];
  if (neg) {
    moved = neg.slides.filter(function (s) { return s.title === 'Partitioning a number'; });
    neg.slides = neg.slides.filter(function (s) { return s.title !== 'Partitioning a number'; });
    var m = H.slideMeta;
    m.goals['501.learn3'] = neg.slides.map(function (s) { return s.goal; });
    m.more['501.learn3'] = neg.slides.map(function (s) { return s.noMore ? null : { more: s.more || [], eg: s.eg || [] }; });
  }
  var part = moved.concat([
    X('Partitioning with a zero', 'Partition 5,036 by place value.',
      ['Put each digit in its column: 5 thousands, 0 hundreds, 3 tens, 6 ones.', 'Write the value of each digit: 5,000, 0, 30 and 6.', 'There are no hundreds, so that part is 0. We can leave it out.', 'So 5,036 = 5,000 + 30 + 6.'],
      ['5,036', '5,000 · 0 · 30 · 6', 'no hundreds', '5,000 + 30 + 6'], '5,036 = 5,000 + 30 + 6',
      'A cheque for £5,036 is five thousand pounds and thirty-six pounds.',
      'how to partition a number that has a zero in it.',
      ['A zero holds an empty place, so that place gives no part.', 'Check by adding the parts back together.'],
      ['Example 1: 708 = 700 + 8.', 'Example 2: 4,090 = 4,000 + 90.', 'Example 3: 30,405 = 30,000 + 400 + 5.']),
    X('Flexible partitioning', 'Show 46 split in three different ways.',
      ['By place value: 46 = 40 + 6.', 'Swap one ten for ten ones: 46 = 30 + 16.', 'Swap another ten: 46 = 20 + 26.', 'Every way is right, because the parts always add up to 46.'],
      ['40 + 6', '30 + 16', '20 + 26', 'all make 46'], '46 = 40 + 6 = 30 + 16 = 20 + 26',
      'Paying 46p with three 10p coins and sixteen 1p coins still makes 46p.',
      'how to split a number in more than one way.',
      ['Flexible partitioning is very useful in subtraction when you need more ones.', 'You can swap a hundred for ten tens in the same way.'],
      ['Example 1: 73 = 60 + 13.', 'Example 2: 352 = 300 + 40 + 12.', 'Example 3: 520 = 400 + 120.']),
    X('Partitioning to add in your head', 'Work out 245 + 132 by partitioning.',
      ['Partition both numbers: 200 + 40 + 5 and 100 + 30 + 2.', 'Add the hundreds: 200 + 100 = 300.', 'Add the tens and the ones: 40 + 30 = 70 and 5 + 2 = 7.', 'Recombine: 300 + 70 + 7 = 377.'],
      ['245 + 132', '200 + 100 = 300', '70 and 7', '377'], '245 + 132 = 377',
      'Adding two shopping bills in your head, like £245 and £132.',
      'how partitioning makes adding easier.',
      ['Add each place value separately, then put the answers back together.', 'If a column adds to 10 or more, it makes one of the next place.'],
      ['Example 1: 36 + 41 = 70 + 7 = 77.', 'Example 2: 128 + 51 = 100 + 70 + 9 = 179.', 'Example 3: 57 + 26 = 70 + 13 = 83.'])
  ]);
  if (!t.steps.some(function (s) { return s.id === 'learn4'; })) {
    BT.add(501, 'learn4', 'Partitioning', part);
    var st4 = t.steps.filter(function (s) { return s.id === 'learn4'; })[0], i4 = t.steps.indexOf(st4), i3 = t.steps.indexOf(neg);
    if (st4 && i3 > -1) { t.steps.splice(i4, 1); t.steps.splice(i3 + 1, 0, st4); S.arrange(t); }
  }

  /* "Let's go deeper" for the partitioning slides */
  var PART_INS = ['Partitioning means splitting a number into parts that are easier to work with. Splitting by place value gives one part for each digit, such as 4,352 = 4,000 + 300 + 50 + 2. The parts can also be split in other ways, because one ten is the same as ten ones and one hundred is the same as ten tens.', 'Check by adding the parts back together: they must make the number you started with. A zero gives no part, so 5,036 is 5,000 + 30 + 6, with no hundreds.'];
  var pickIns = BT.pickInsight;
  if (pickIns) BT.pickInsight = function (n, title, goal) { return /partition/i.test(String(title || '')) ? PART_INS : pickIns(n, title, goal); };

  /* ---- Activity Time: Partition puzzle ---- */
  var css = document.createElement('style');
  css.textContent = '.pp-big{font-family:var(--font-display,inherit);font-size:clamp(32px,8vw,48px);font-weight:900;text-align:center;margin:6px 0}' +
    '.pp-tiles{display:grid;grid-template-columns:repeat(auto-fit,minmax(96px,1fr));gap:10px;margin:12px 0}.pp-tile{min-height:56px;font-size:1.15rem;font-weight:800;background:var(--surface-2);border:2px solid var(--line);border-radius:12px;color:inherit}' +
    '.pp-tile[aria-pressed="true"]{border-color:var(--accent);box-shadow:inset 0 0 0 2px var(--accent)}.pp-tile.ok{border-color:var(--good);background:var(--good-bg)}.pp-tile.no{border-color:var(--bad);background:var(--bad-bg)}' +
    '.pp-sum{font-size:1.2rem;font-weight:800;text-align:center;margin:4px 0 10px}';
  document.head.appendChild(css);
  var CHEER = ['Brilliant!', 'Nice one!', 'You got it!', 'Spot on!'], TRY = ['Not this time.', 'Good try!', 'Nearly. Next one!'];
  function mountPartition(host, ctx) {
    var ROUNDS = 6, i, score, cur;
    function makeBuild(r) {
      var len = r < 2 ? 4 : 5, n = rnd(Math.pow(10, len - 1), Math.pow(10, len) - 1), d = String(n).split('').map(Number);
      if (r % 4 === 2) { d[rnd(1, len - 2)] = 0; n = Number(d.join('')); }
      var parts = [], wrong = [];
      d.forEach(function (x, k) { var p = len - 1 - k; if (!x) return; parts.push(x * Math.pow(10, p)); var alt = x * Math.pow(10, p ? p - 1 : 1); if (wrong.indexOf(alt) < 0) wrong.push(alt); });
      wrong = wrong.filter(function (w) { return parts.indexOf(w) < 0; }).slice(0, 3);
      return { kind: 'build', n: n, parts: parts, tiles: shuffle(parts.concat(wrong)), chosen: [] };
    }
    function makeFlex(r) {
      var n = r < 4 ? rnd(31, 98) : rnd(121, 489), take = Math.floor(n / 10) * 10 - 10 * rnd(1, 2), rest = n - take, seen = {};
      var opts = shuffle([rest, rest - 10, rest + 10, n % 10 || rest + 1]).filter(function (x) { if (x <= 0 || seen[x]) return false; seen[x] = 1; return true; });
      return { kind: 'flex', n: n, take: take, rest: rest, tiles: opts };
    }
    function make(r) { return r % 2 ? makeFlex(r) : makeBuild(r); }
    function draw(fb, cls, locked) {
      var c = cur, head = '<div class="gm-top"><span class="gm-pill">Round ' + (i + 1) + ' of ' + ROUNDS + '</span><span class="gm-pill">Score ' + score + '</span></div>';
      var q = c.kind === 'build' ? '<div class="gm-say say">Tap the parts that make this number. Use one part for each digit that is not zero.</div><div class="pp-big">' + fmtInt(c.n) + '</div>'
        : '<div class="gm-say say">Split the number a different way. Which part is missing?</div><div class="pp-big">' + fmtInt(c.n) + ' = ' + fmtInt(c.take) + ' + ?</div>';
      var tiles = '<div class="pp-tiles">' + c.tiles.map(function (v) {
        var on = c.kind === 'build' && c.chosen.indexOf(v) > -1, mark = '';
        if (locked) { var right = c.kind === 'build' ? c.parts.indexOf(v) > -1 : v === c.rest; if (right) mark = ' ok'; else if (on || v === locked) mark = ' no'; }
        return '<button class="pp-tile' + mark + '" type="button" data-v="' + v + '" aria-pressed="' + on + '"' + (locked ? ' disabled' : '') + '>' + fmtInt(v) + '</button>';
      }).join('') + '</div>';
      var sum = c.kind === 'build' ? '<div class="pp-sum" aria-live="polite">Your parts make ' + fmtInt(c.chosen.reduce(function (a, x) { return a + x; }, 0)) + '</div>' : '';
      var btns = locked ? '<button class="btn" type="button" data-act="next">' + (i + 1 >= ROUNDS ? 'See my score' : 'Next') + '</button>' : (c.kind === 'build' ? '<button class="btn" type="button" data-act="check">Check</button>' : '');
      host.innerHTML = head + q + tiles + sum + '<div class="fbk ' + (cls || '') + '" aria-live="polite" style="min-height:2.4em">' + (fb || '') + '</div><div class="row">' + btns + '</div>';
      host.querySelectorAll('.pp-tile:not([disabled])').forEach(function (b) { b.addEventListener('click', function () {
        var v = Number(b.dataset.v);
        if (c.kind === 'build') { var k = c.chosen.indexOf(v); if (k > -1) c.chosen.splice(k, 1); else c.chosen.push(v); draw(); }
        else answer(v === c.rest, fmtInt(c.n) + ' − ' + fmtInt(c.take) + ' = ' + fmtInt(c.rest) + ', so ' + fmtInt(c.n) + ' = ' + fmtInt(c.take) + ' + ' + fmtInt(c.rest) + '.', v);
      }); });
      var chk = host.querySelector('[data-act="check"]');
      if (chk) chk.addEventListener('click', function () {
        var ok = c.chosen.length === c.parts.length && c.parts.every(function (p) { return c.chosen.indexOf(p) > -1; });
        answer(ok, fmtInt(c.n) + ' = ' + c.parts.map(fmtInt).join(' + ') + '.', -1);
      });
      var nx = host.querySelector('[data-act="next"]');
      if (nx) nx.addEventListener('click', function () { i++; if (i >= ROUNDS) finish(); else { cur = make(i); draw(); } });
    }
    function answer(ok, why, v) { if (ok) score++; draw('<b>' + (ok ? pick(CHEER) : pick(TRY)) + '</b> ' + why, ok ? 'ok' : 'no', v); }
    function finish() {
      host.innerHTML = '<div class="gm-top"><span class="gm-pill">Finished!</span></div><p class="gm-say say">You got <b>' + score + ' out of ' + ROUNDS + '</b>. ' + (score >= ROUNDS - 1 ? 'Brilliant partitioning!' : 'Remember: each digit gives one part, and a zero gives no part.') + '</p><div class="row"><button class="btn" type="button" data-act="again">Play again</button></div>';
      host.querySelector('[data-act="again"]').addEventListener('click', start);
      if (ctx && ctx.complete) ctx.complete();
    }
    function start() { i = 0; score = 0; cur = make(0); draw(); }
    start();
  }
  if (!t.steps.some(function (s) { return s.id === 'lab_part'; })) {
    var labs = t.steps.filter(function (s) { return s.type === 'lab'; }), after = labs[1] || labs[0];
    var step = { id: 'lab_part', label: 'Partition puzzle', type: 'lab', tag: 'Activity time · Hands-on activity', title: 'Partition puzzle', lead: 'Build each number from its parts, then split numbers in different ways. Six rounds.', mount: mountPartition };
    t.steps.splice(after ? t.steps.indexOf(after) + 1 : t.steps.length, 0, step); S.arrange(t);
  }
})();
