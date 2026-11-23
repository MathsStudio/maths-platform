/* fl_learn.js: First level "Learn it" lessons and worked examples for Let's learn, in the same slide format as P5 to P7.
   Each workbook question gets its own slide lesson: the big question, key words, see it / draw it / write it,
   three worked examples shown step by step, a common mistake, a quick check and a recap.
   Each topic also gets three sets of worked examples (getting started, building up, challenge) of 8 slides each. */
(function () {
  'use strict';
  var FL = window.FL, BT = window.BT, S = window.Studio; if (!FL || !BT || !BT.add || !S) return;
  var V = BT.sv, INK = '#2b2340', r = FL.r, pick = FL.pick, shuffle = FL.shuffle;

  function big(t) { return '<div style="font-size:clamp(1.6rem,6vw,2.4rem);font-weight:800;color:' + INK + ';background:#fff;border:3px solid ' + INK + ';border-radius:16px;padding:6px 18px;text-align:center;display:inline-block">' + t + '</div>'; }
  function cards(list) { return '<div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center">' + list.map(function (t) { return '<span style="background:#fff;border:3px solid ' + INK + ';border-radius:14px;padding:6px 12px;font-weight:800;color:' + INK + '">' + t + '</span>'; }).join('') + '</div>'; }
  /* each key word is read and explained in turn: "Bigger means more." */
  function spoken(w) { var raw = String(w[0]), pm = /\(([^)]*)\)/.exec(raw), word = raw.replace(/\s*\([^)]*\)/g, '').trim(), m = String(w[1]).trim();
    if (pm && (word.length <= 2 || !/[a-z]{3}/i.test(word))) word = pm[1];   /* p (pence) is read as pence */
    return /^\d/.test(m) ? word.charAt(0).toUpperCase() + word.slice(1) + '. For example, ' + m + '.' : word.charAt(0).toUpperCase() + word.slice(1) + ' means ' + m + '.'; }
  function words(list) { return '<div style="display:grid;gap:8px;max-width:520px;margin:0 auto"><p class="say" style="margin:0 0 4px;font-weight:700;text-align:center">Here are the key words for this lesson.</p>' + list.map(function (w) { return '<div class="say" data-say="' + spoken(w).replace(/"/g, '&quot;') + '" style="display:flex;gap:12px;align-items:center;background:#fff;border:2px solid #dcd3f0;border-radius:14px;padding:8px 12px;color:' + INK + '"><span style="font-size:1.6rem" aria-hidden="true">' + (w[2] || '🔤') + '</span><span><b>' + w[0] + '</b><br>' + w[1] + '</span></div>'; }).join('') + '</div>'; }
  function row3(list, kind) { return '<div style="display:flex;align-items:center;justify-content:center;gap:8px;flex-wrap:wrap">' + list.map(function (n) { return '<div style="max-width:200px">' + FL.things(n, kind, 5) + '</div>'; }).join('<b style="font-size:1.8em">+</b>') + '</div>'; }
  FL.big = big; FL.cards = cards; FL.row3 = row3;

  /* a quick check: one question answered by tapping, then the explanation */
  function check(c) {
    return function (host) {
      host.innerHTML = '<div class="flb">' + (c.pic ? '<div class="flb-pic">' + c.pic + '</div>' : '') + '<div class="flb-q">' + c.q + '</div><div class="flb-opts' + (function () { var L = Math.max.apply(null, c.options.map(function (o) { return String(o).length; })); return L > 12 ? ' col' : L > 4 ? ' long' : ''; })() + '">' + c.options.map(function (o) { return '<button type="button" data-o="' + String(o).replace(/"/g, '&quot;') + '">' + o + '</button>'; }).join('') + '</div><p class="flb-fb" aria-live="polite"></p></div>';
      var fb = host.querySelector('.flb-fb');
      host.querySelectorAll('[data-o]').forEach(function (b) { b.addEventListener('click', function () {
        if (String(b.getAttribute('data-o')) === String(c.answer)) { b.classList.add('ok'); host.querySelectorAll('[data-o]').forEach(function (x) { x.disabled = true; }); fb.className = 'flb-fb ok'; fb.textContent = 'Well done! ' + c.explain; }
        else { b.classList.add('no'); b.disabled = true; fb.className = 'flb-fb no'; fb.textContent = 'Not quite. ' + (c.tip || 'Have another go.'); }
      }); });
    };
  }
  /* a worked example slide: the question, a picture for each step, and the steps shown one at a time */
  /* what the child should answer, worked out from the example: tap choices when the question gives them, a number box when the answer is a number */
  var NUMA = /^\(?[£−-]?\d[\d.,:/]*\)?(\s*(p|cm|m|km|kg|g|ml|l|°C|mm|minutes|hours))?(,\s*[£−-]?\d[\d.,:/]*(\s*(p|cm|m|kg|g))?)*\)?$/i;
  function plain(t) { return String(t).replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim(); }
  function answerOf(w) {
    if (w.ans !== undefined && w.options && w.options.length > 1) return { kind: 'tap', answer: String(w.ans), options: w.options.map(String) };
    var f = plain(w.final).replace(/[.!]$/, ''), a = f;
    if (/which coins|coins could|with (two|three) coins|different ways|^make /i.test(plain(w.q))) return null;   /* many right answers: steps only */
    if (/=/.test(f)) a = f.split('=').pop().trim();
    else if (/^The answer is /i.test(f)) a = f.replace(/^The answer is /i, '');
    else if (/ is /.test(f) && f.split(' ').length > 3) a = f.split(' is ').pop().trim();
    var q = plain(w.q), or = /(?:^|[:?] |, )([^:?,]+?) or ([^:?,]+?)\?$/.exec(q);
    if (/^(Do|Does|Is|Are|Can|Will|Has|Have)\b/.test(q) && !or && /^(Yes|No)\b/.test(f)) return { kind: 'tap', answer: /^Yes/.test(f) ? 'Yes' : 'No', options: ['Yes', 'No'] };
    if (or) { var B = or[2].trim(), A = (B.split(' ').length === 1 ? or[1].split(' ').pop() : or[1].replace(/^(Which (is|comes|has|one)[^:]*:?|Is it|Is that) /i, '')).trim(), lf = f.toLowerCase();
      var hasA = lf.indexOf(A.toLowerCase()) > -1, hasB = lf.indexOf(B.toLowerCase()) > -1;
      if (A.length < 30 && B.length < 30 && hasA !== hasB) return { kind: 'tap', answer: hasA ? A : B, options: [A, B] }; }
    a = a.replace(/^(about|it should be about) /i, '');
    if (NUMA.test(a) && /\d/.test(a)) return { kind: 'num', answer: a };
    if (/^[A-H]\d{1,2}$/.test(a)) return { kind: 'num', answer: a };   /* a grid reference such as B4 */
    /* one number in the answer, for a question that asks for a number: "3 more apples", "It makes 6p", "£2.25 left" */
    var nums = f.match(/[£−-]?\d+(?:[.:/]\d+)?\s*(?:p\b|cm\b|m\b|kg\b|g\b|ml\b|l\b|°C)?/g) || [];
    if (nums.length === 1 && /\b(how many|how much|how long|what is|what number|change|worth|when|value|left|round|altogether|total)\b/i.test(q)) return { kind: 'num', answer: nums[0].trim() };
    return null;
  }
  function worked(w) {
    var p = w.pics || (w.pic ? [w.pic] : []), chk = answerOf(w);
    if (chk && chk.kind === 'tap' && w.optCards) p = p.map(function (x) { return String(x).replace(w.optCards, ''); });   /* the choices become buttons, so they are not shown twice */
    return { q: w.q, steps: w.steps, final: w.final, check: chk, render: function (k) { return p[Math.min(k, p.length - 1)] || ''; } };
  }

  /* Draw it: the child draws something NEW, not a copy of the picture already on screen.
     Number lines with jumps: the pad shows the same line without the jumps, and the child draws the jumps.
     Tens and ones: the child builds a new number by tapping ten sticks and ones. */
  var DRAWT = {
    'Find them on the number line.': 'Your turn: draw a number line from 0 to 10. Circle 3 and 8.',
    'Turn it round: 5 apples and 3 apples. Still 8.': 'Your turn: draw 2 apples and 6 apples. Then turn it round: 6 and 2. Still 8.',
    '4 + 4 is 8. The 5 is one more.': 'Your turn: draw 3 dots and 3 dots. Then draw 3 dots and 4 dots. That is one more.',
    '3 and 4 make 7, so 3 are left.': 'Your turn: draw 6 dots. Cross out 2. How many are left?',
    'Pound coins too: £1 and £2.': 'Your turn: draw a £2 coin and a £1 coin. How much is that?',
    '5p and 5p make 10p.': 'Your turn: draw two 10p coins. They make 20p.',
    'Use a 5p, a 2p and a 1p.': 'Your turn: draw coins that make 7p.',
    'The long hand points to 12. The short hand points to 7.': 'Your turn: draw a clock that shows 3 o’clock.',
    'Then the weekend: Saturday and Sunday.': 'Your turn: draw something you do at the weekend.',
    'Wake up in the morning. Lunch in the afternoon. Bed at night.': 'Your turn: draw something you do in the morning, and something you do at night.',
    'A swimming lesson takes about 1 hour.': 'Your turn: draw something that takes about 1 minute, like washing your hands.',
    'A triangle has 3 sides and 3 corners.': 'Your turn: draw a square. Count its 4 sides and 4 corners.',
    'The ball is 3D. The circle is flat: 2D.': 'Your turn: draw a flat shape, like a square or a triangle.',
    'He sorts them: circles here, squares there, triangles there.': 'Your turn: draw 3 circles and 2 triangles. Put them in two groups.',
    'He makes a tally: one mark for each.': 'Your turn: draw a tally for 4.',
    'In a place value chart: 1 hundred, 3 tens and 6 ones.': 'Your turn: draw a place value chart for 254.',
    'The hundreds are the same. Look at the tens: 2 tens and 4 tens.': 'Your turn: draw 3 tens and 5 tens. Which is more?',
    'Three and seven fill a ten-frame. Then 8 more.': 'Your turn: draw a ten-frame. Fill it with 6 and 4.',
    'Start at 35. Jump ten to 45, ten to 55, then 4 ones to 59.': 'Your turn: draw a number line. Start at 24 and jump ten to 34, then ten to 44.',
    'Draw 3 rows of 5 dots.': 'Your turn: draw 2 rows of 4 dots.',
    'Draw it as dots: 2 rows, 5 in each row.': 'Your turn: draw 3 rows with 3 dots in each row.',
    'Turn an array round and it has the same number of dots.': 'Your turn: draw 2 rows of 3 dots. Then draw 3 rows of 2 dots.',
    'Give one to each friend in turn. Each friend gets 4.': 'Your turn: share 6 dots between 2 friends. Draw them.',
    'As an array: 3 rows, 5 in each row.': 'Your turn: draw 2 rows with 6 in each row.',
    '8 split into 2 equal parts is 4 and 4.': 'Your turn: draw 10 dots split into 2 equal parts.',
    'Draw a bar and split it into 2 equal parts. Shade 1. That is one half.': 'Your turn: draw a bar in 4 equal parts. Shade 1. That is one quarter.',
    'Shade 3 of the 4 equal parts.': 'Your turn: draw a square in 4 equal parts. Shade 2 of them.',
    'Now share 8 between 4 bowls: 2 each. That is a quarter.': 'Your turn: draw 12 dots in 4 equal groups.',
    'This circle has 4 equal parts with 2 shaded.': 'Your turn: draw a circle in 2 equal parts. Shade 1.',
    'More ways to make 20p.': 'Your turn: draw coins that make 15p.',
    'From 12 to 3 is a quarter of the way round the clock: a quarter of an hour.': 'Your turn: draw a clock that shows half past 2.',
    'Start at one end. Put the cubes in a line with no gaps.': 'Your turn: draw a pencil, with cubes under it in a line and no gaps.',
    'Line up 0 with the start of the object.': 'Your turn: draw a ruler and a stick 4 centimetres long.',
    'The side that goes down is heavier. The side that goes up is lighter.': 'Your turn: draw a balance with an apple and a feather. Which side goes down?',
    'The higher the water, the more it holds.': 'Your turn: draw two jugs. Make one hold more water.',
    'A cube has 6 square faces.': 'Your turn: draw a square, then a cube.',
    'Fold a square down the middle. The halves match.': 'Your turn: draw a heart with a line down the middle.',
    'Two quarter turns make a half turn. Now she faces down.': 'Your turn: draw an arrow facing up. Then draw it after a half turn.',
    'She keeps a tally: 6 is one group of 5 and 1 more.': 'Your turn: draw a tally for 8.',
    'In a place value chart: 4 hundreds, 7 tens and 3 ones.': 'Your turn: draw a place value chart for 625.',
    '362 is past the halfway point, 350. It is nearer 400.': 'Your turn: draw a number line from 200 to 300. Mark 280. Is it nearer 200 or 300?',
    'On a number line, −3 is 3 steps to the left of 0.': 'Your turn: draw a number line from −5 to 5. Mark −2.',
    'Line them up in columns, ones under ones.': 'Your turn: write 145 + 32 in columns, ones under ones.',
    'Ones: 2 take away 7 does not work. Exchange 1 ten: now 12 ones and 4 tens.': 'Your turn: write 63 − 28 in columns and exchange a ten.',
    'Round: 298 is about 300, and 403 is about 400.': 'Your turn: draw a number line and round 512 to the nearest hundred.',
    'Double 12 on a bar: 12 and 12 makes 24.': 'Your turn: draw a bar for double 15.',
    'Each crate is 2 tens. 3 crates is 6 tens.': 'Your turn: draw 4 crates with 2 tens in each. How many tens?',
    'Split 14 into 10 and 4. Three 10s is 30, three 4s is 12.': 'Your turn: draw a grid to work out 13 × 4.',
    'Turn the field round: 4 rows of 3. Still 12.': 'Your turn: draw 2 rows of 5. Then draw 5 rows of 2.',
    'A bar in 3 parts and a bar in 5 parts: the thirds are bigger.': 'Your turn: draw a bar in 2 parts and a bar in 4 parts. Which parts are bigger?',
    'Half of a bar is shaded. Half of 100 is 50, so half is 50%.': 'Your turn: draw a bar in 4 equal parts. Shade 1. That is 25%.',
    'One step is 1/4. Three steps is 3/4.': 'Your turn: draw a number line from 0 to 1 in quarters. Mark 2/4.',
    'Share 20 into 4 equal groups: 5 in each.': 'Your turn: share 12 into 3 equal groups.',
    'Count on: £3.40 to £4 is 60p. £4 to £5 is £1.': 'Your turn: draw a number line from £2.70 to £4. Count on.',
    '£2.50 could be £2 + 50p, or £1 + £1 + 50p.': 'Your turn: draw coins that make £1.20.',
    '2 for 60p: halve it. That is 30p for one.': 'Your turn: draw 2 apples for 80p. How much is one?',
    'Add: £1.50 + £2.20 = £3.70. Then + 90p = £4.60.': 'Your turn: write £1.30 + £2.40.',
    '9:45 to 10:00 is 15 minutes. 10:00 to 10:15 is 15 more.': 'Your turn: draw a time line from 2:30 to 3:00.',
    'Count in 5s from 12 to 4: 5, 10, 15, 20.': 'Your turn: draw a clock that shows 20 past 3.',
    'A day goes from midnight, through midday, back to midnight.': 'Your turn: draw a sun for am and a moon for pm.',
    'Find Perth in the rows and Train 1 in the columns.': 'Your turn: draw a table with 2 rows and 2 columns.',
    'There are 3 rows of 4 squares.': 'Your turn: draw 2 rows of 5 squares. Count them.',
    'A metre stick has 100 centimetres marked on it.': 'Your turn: draw a line about 10 centimetres long.',
    'A rectangle has 4 sides: two 5 m sides and two 3 m sides.': 'Your turn: draw a rectangle with sides of 4 m and 2 m. Add all four sides.',
    'The numbers go up in 10s, with a mark halfway. Each step is 5.': 'Your turn: draw a scale from 0 to 20 going up in 5s.',
    'Squares fit side by side with no gaps.': 'Your turn: draw 4 triangles that fit together with no gaps.',
    'Go along to column C, then up to row 4.': 'Your turn: draw a grid and put a star at B3.',
    'A quarter turn makes a right angle.': 'Your turn: draw a right angle.',
    'Clockwise from North: North, East, South, West.': 'Your turn: draw a compass with N, E, S and W.',
    'Rainy: 8 is one group of 5 and 3 more.': 'Your turn: draw a tally for 12.',
    'Each day has its own column.': 'Your turn: draw a table with a column for each day.',
    '4 is even only. 15 is more than 10 only. 12 is both.': 'Your turn: draw two circles that overlap. Put 6 in the even circle.',
    'On a line from impossible to certain, it is near the impossible end.': 'Your turn: draw a line from impossible to certain. Mark where “It will snow today” goes.'
  };
  /* tens and ones: build a new number by tapping */
  var BUILD = { 'Draw it: 2 sticks of ten and 3 ones.': [3, 5], 'Tens together: 5 tens. Ones together: 9 ones.': [4, 6] };
  function build(host, t0, o0) {
    var t = 0, o = 0, want = t0 * 10 + o0, box = document.createElement('div');
    box.className = 'flbuild';
    box.innerHTML = '<div class="flbuild-in"><div class="flbuild-tray"><button type="button" data-a="t" aria-label="Add a ten stick">' + '<svg viewBox="0 0 14 54" width="14" height="44" aria-hidden="true">' + [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(function (j) { return '<rect x="1" y="' + (1 + j * 5.2) + '" width="12" height="5.2" fill="#4aa8ff" stroke="#2b2340" stroke-width="1"/>'; }).join('') + '</svg>' + '<span>Add a ten</span></button><button type="button" data-a="o" aria-label="Add a one">' + '<svg viewBox="0 0 20 20" width="22" height="22" aria-hidden="true"><rect x="2" y="2" width="16" height="16" fill="#ffd166" stroke="#2b2340" stroke-width="2"/></svg>' + '<span>Add a one</span></button><button type="button" data-a="x" class="flbuild-clear">Start again</button></div>' +
      '<div class="flbuild-mat" aria-live="polite"></div><p class="flbuild-fb"></p></div>';
    host.appendChild(box);
    var mat = box.querySelector('.flbuild-mat'), fb = box.querySelector('.flbuild-fb');
    function draw() {
      mat.innerHTML = t || o ? FL.tensOnes(t, o) : '<span class="flbuild-hint">Tap to add tens and ones here.</span>';
      var n = t * 10 + o;
      if (n === want && t === t0) { fb.className = 'flbuild-fb ok'; fb.textContent = 'Well done! ' + t0 + ' tens and ' + o0 + ' ones make ' + want + '.'; }
      else if (t > t0 || o > o0) { fb.className = 'flbuild-fb no'; fb.textContent = 'Too many. ' + want + ' is ' + t0 + ' tens and ' + o0 + ' ones. Tap Start again.'; }
      else { fb.className = 'flbuild-fb'; fb.textContent = 'Tens: ' + t + '   Ones: ' + o; }
    }
    box.addEventListener('click', function (e) { var b = e.target.closest('[data-a]'); if (!b) return; var a = b.getAttribute('data-a'); if (a === 't') t++; else if (a === 'o') o++; else { t = 0; o = 0; } draw(); });
    draw();
  }
  if (!document.getElementById('flbuild-css')) { var bc = document.createElement('style'); bc.id = 'flbuild-css';
    bc.textContent = '.flbuild{margin:10px 0}.flbuild-in{display:grid;gap:10px;background:var(--panel,#eef2fb);border-radius:16px;padding:12px}.flbuild-tray{display:flex;flex-wrap:wrap;gap:8px;justify-content:center}' +
      '.flbuild-tray button{display:flex;align-items:center;gap:6px;min-height:52px;padding:6px 12px;border-radius:14px;border:3px solid #2b2340;background:#fff;color:#2b2340;font:inherit;font-weight:800;cursor:pointer}.flbuild-tray button svg{flex:none}.flbuild-tray .flbuild-clear{background:#f3eefc}' +
      '.flbuild-mat{min-height:150px;display:flex;align-items:center;justify-content:center;background:#fff;border:3px dashed #9a8fc0;border-radius:14px;padding:8px;overflow:hidden}.flbuild-mat svg{max-width:100%;height:auto;max-height:200px}.flbuild-hint{color:#6b6390;font-weight:700}' +
      '.flbuild-fb{margin:0;text-align:center;font-weight:800;color:var(--ink,#2b2340);white-space:pre-wrap}.flbuild-fb.ok{color:#137a3a}.flbuild-fb.no{color:#b3261e}';
    document.head.appendChild(bc); }
  function noHops(v) { return String(v).replace(/<path[^>]*marker-end="url\(#flA\)"[^>]*\/>/g, ''); }
  /* The big question: the picture's example is explained in words too, with its numbers in bold */
  var BQX = {
    '201|How can I use number patterns to work out a sequence?': 'Look at <b>2, 4, 6</b>. Each jump is <b>2</b>. So the next number is 6 and 2 more: <b>8</b>. The pattern is <b>2, 4, 6, 8</b>.',
    '201|What are tens and ones?': 'In the picture there are <b>2</b> sticks of ten and <b>3</b> ones. That makes <b>23</b>.',
    '201|How do I order numbers on a number line?': 'Look at the number line from <b>0</b> to <b>10</b>. <b>3</b> is to the left of <b>7</b>, so 3 is smaller than 7.',
    '201|What is one more and one less?': 'Start at <b>6</b>. One more is <b>7</b>. One less is <b>5</b>.',
    '202|Which way round should I add two numbers?': '<b>3</b> apples and <b>5</b> apples make <b>8</b>. <b>5</b> and <b>3</b> also make <b>8</b>.',
    '202|Which order should I add numbers in?': 'For <b>2 + 9</b>, start at the bigger number, <b>9</b>. Count on 2: <b>10, 11</b>. So 2 + 9 = <b>11</b>.',
    '202|How can using near doubles help me add numbers?': 'Look at <b>4 + 5</b>. Double 4 is <b>8</b>. 5 is one more than 4, so 4 + 5 is 8 and 1 more: <b>9</b>.',
    '203|What coins and notes do we use?': 'Here are the coins: <b>1p, 2p, 5p, 10p, 20p</b> and <b>50p</b>.',
    '203|How can adding coins help me pay for something?': 'The lolly costs <b>8p</b>. A <b>5p</b> coin and a <b>2p</b> coin make 7p. Add a <b>1p</b> coin to make <b>8p</b>. Now we can pay.',
    '203|How can counting on help me find change from 20p?': 'Something costs <b>15p</b> and we pay <b>20p</b>. Count on from 15p: <b>16p, 17p, 18p, 19p, 20p</b>. That is 5 jumps, so the change is <b>5p</b>.',
    '204|How to tell the time': 'Look at the clock. The long hand points to <b>12</b> and the short hand points to <b>3</b>. It is <b>3 o’clock</b>.',
    '204|What are the days of the week and the months of the year?': 'The days go <b>Monday, Tuesday, Wednesday, Thursday, Friday, Saturday</b> and <b>Sunday</b>.',
    '205|What are 2D shapes?': 'Here are a <b>circle</b>, a <b>triangle</b>, a <b>square</b> and a <b>rectangle</b>. A triangle has <b>3</b> sides. A square has <b>4</b> sides.',
    '205|What is the difference between a 2D shape and a 3D object?': 'A <b>square</b> is flat, so it is 2D. A <b>cube</b> is solid, so it is 3D.',
    '205|How can I sort shapes?': 'Look: circle, square, triangle, square. The two <b>squares</b> go together in one group.',
    '205|How do I record and display data?': 'The tally shows <b>7</b>: one group of <b>5</b> and <b>2</b> more.',
    '301|How can I use number patterns to work out a sequence?': 'Look at <b>5, 10, 15, 20</b>. The rule is add <b>5</b>. So the next number is 20 and 5 more: <b>25</b>.',
    '301|How do I compare and order numbers to 1000?': 'Look at <b>324</b> and <b>342</b>. The hundreds are both <b>3</b>. Compare the tens: <b>2</b> tens and <b>4</b> tens. 4 tens is more, so <b>342</b> is bigger.',
    '301|How do I round numbers to the nearest 10?': 'Look at <b>34</b>. The ones digit is <b>4</b>, so it rounds down. 34 rounds to <b>30</b>.',
    '302|How can reordering numbers help me add them?': '<b>3</b> and <b>7</b> make 10. Then add <b>8</b>: 10 + 8 = <b>18</b>. So 3 + 8 + 7 = <b>18</b>.',
    '302|How can bridging through 10 help me to add and subtract?': 'For <b>7 + 8</b>, jump 3 to <b>10</b>, then jump 5 more to <b>15</b>. So 7 + 8 = <b>15</b>.',
    '302|How can counting on help me add two-digit numbers?': 'Start at <b>35</b>. Count on 2 tens: <b>45, 55</b>. Then 4 ones: <b>56, 57, 58, 59</b>. So 35 + 24 = <b>59</b>.',
    '302|How can partitioning help me add two-digit numbers?': 'Split: <b>30 + 4</b> and <b>20 + 5</b>. Tens: 30 + 20 = <b>50</b>. Ones: 4 + 5 = <b>9</b>. Put them together: 34 + 25 = <b>59</b>.',
    '303|How can an array help me multiply?': 'This array has <b>3</b> rows with <b>4</b> in each row. 3 × 4 = <b>12</b>.',
    '304|How can sharing equally help me divide?': 'Share <b>12</b> between <b>3</b> groups, one at a time. Each group gets <b>4</b>. So 12 ÷ 3 = <b>4</b>.',
    '304|How can subtracting help me with division?': 'Start at <b>12</b>. Take away 4 each time: <b>8</b>, <b>4</b>, <b>0</b>. That is 3 jumps, so 12 ÷ 4 = <b>3</b>.',
    '304|How can halving help me divide?': 'The circle is split into <b>2</b> equal parts. One part is <b>one half</b>. Half of 8 is <b>4</b>, the same as 8 ÷ 2.',
    '305|What is a fraction?': 'This circle has <b>4</b> equal parts and <b>1</b> is shaded. That is <b>one quarter</b>, 1/4.',
    '305|How to write fractions': 'In <b>3/4</b>, the bottom number <b>4</b> says there are 4 equal parts. The top number <b>3</b> says we have 3 of them.',
    '305|How can halving help me find a half or a quarter of a number?': 'Here are <b>8</b> sweets. Half of 8 is <b>4</b>. Halve again: a quarter of 8 is <b>2</b>.',
    '305|How can I find a fraction of a shape?': 'This shape has <b>3</b> equal parts and <b>1</b> is shaded. That is <b>one third</b>, 1/3.',
    '306|How can I use adding and subtracting to work out change?': 'Count on from <b>35p</b> to <b>40p</b>: that is 5p. Then from 40p to <b>50p</b>: 10p more. 5p and 10p make <b>15p</b> change.',
    '306|How to tell the time': 'Look at the clock. The short hand is just past <b>3</b>. The long hand points to <b>3</b>. It is <b>quarter past 3</b>.',
    '306|How long does something take?': 'Start at <b>2 o’clock</b>. Count on: <b>3 o’clock</b> is 1 hour, <b>4 o’clock</b> is 2 hours. It takes <b>2 hours</b>.',
    '307|How can I work out the length of an object?': 'This is <b>8</b> cubes long.',
    '307|How do I use a ruler to measure in centimetres?': 'The 0 is at one end. The other end is at <b>4</b>. So it is <b>4 cm</b> long.',
    '307|How can I compare mass with a balance?': 'The <b>pumpkin</b> side goes down, so the pumpkin is heavier. The <b>apple</b> is lighter.',
    '307|How can I compare how much containers hold?': 'There is more water in the <b>big</b> jug than in the <b>small</b> jug.',
    '308|What are the properties of 3D shapes?': 'A <b>cube</b> has <b>6</b> faces, <b>12</b> edges and <b>8</b> corners.',
    '308|What makes a shape symmetrical?': 'The mirror line goes down the middle of the <b>square</b>. Both halves match, so it is symmetrical.',
    '308|How to use directions and turns': 'The arrow starts facing up. After a <b>quarter turn</b> clockwise it faces right.',
    '308|How do I record and display data?': 'The <b>Cubes</b> bar is the tallest: <b>6</b>. The <b>Spheres</b> bar is the shortest: <b>3</b>.',
    '401|How can I use number patterns to work out a sequence?': 'Look at <b>3, 7, 11, 15</b>. Each gap is <b>4</b>, so the rule is add 4. The next number is 15 and 4 more: <b>19</b>.',
    '401|How do I round to the nearest 10 and 100?': 'Look at <b>362</b>. To the nearest 10, the ones digit is <b>2</b>, so it rounds down to <b>360</b>. To the nearest 100, the tens digit is <b>6</b>, so it rounds up to <b>400</b>.',
    '401|How can a thermometer help me understand negative numbers?': 'The thermometer shows <b>−3</b>. That is 3 below zero, so it is very cold.',
    '402|How can compensating help me add and subtract?': 'For <b>46 + 9</b>, add 10: <b>56</b>. That is 1 too many, so take 1 away: <b>55</b>.',
    '402|How do I add using columns?': 'Ones: 7 + 5 = <b>12</b>. Write 2 and carry 1 ten. Tens: 4 + 3 + 1 = <b>8</b>. Hundreds: 2 + 1 = <b>3</b>. So 247 + 135 = <b>382</b>.',
    '402|How do I subtract using columns?': 'Ones: 2 take away 7 does not work, so exchange a ten. Now 12 − 7 = <b>5</b>. Tens: 4 − 2 = <b>2</b>. Hundreds: 3 − 1 = <b>2</b>. So 352 − 127 = <b>225</b>.',
    '402|How can estimating help me check my answer?': 'For <b>298 + 403</b>, round to <b>300 + 400 = 700</b>. The answer should be about 700.',
    '403|How can doubling and halving help me multiply and divide?': '<b>2 × 6 = 12</b>. Double it: <b>4 × 6 = 24</b>.',
    '403|How can I multiply a two-digit number?': 'For <b>14 × 3</b>, split 14 into 10 and 4. 10 × 3 = <b>30</b> and 4 × 3 = <b>12</b>. 30 + 12 = <b>42</b>.',
    '404|How can I compare fractions?': 'Look at <b>1/3</b> and <b>1/5</b>. Thirds are bigger pieces than fifths, so <b>1/3</b> is bigger.',
    '404|How can I order fractions on a number line?': 'The line from 0 to 1 has <b>4</b> equal steps. One step is <b>1/4</b>. Three steps is <b>3/4</b>.',
    '404|How do I find a fraction of an amount?': 'For <b>1/4 of 20</b>, divide 20 by 4: <b>5</b>.',
    '405|How can I use adding and subtracting to work out change?': 'Count on from <b>£3.40</b> to <b>£4</b>: 60p. Then from £4 to <b>£5</b>: £1. The change is <b>£1.60</b>.',
    '405|How can different coins and notes make the same total?': 'Here <b>£2</b> and <b>50p</b> make <b>£2.50</b>.',
    '405|How do I compare prices to find the best buy?': '<b>2 for 60p</b> is 30p for one. <b>35p each</b> costs more. So 2 for 60p is the better buy.',
    '405|How can I plan what to spend?': 'You have <b>£5</b> to spend. Add up the prices, and check the total is not more than £5.',
    '406|How can bridging through the hour help me work out time?': 'From <b>9:45</b> to <b>10:00</b> is 15 minutes. From 10:00 to <b>10:15</b> is 15 more. That is <b>30 minutes</b>.',
    '406|How to tell the time': 'The long hand points to <b>4</b>. Count in 5s: <b>5, 10, 15, 20</b>. The short hand is just past 4. It is <b>20 past 4</b>.',
    '406|What do am and pm mean?': '<b>8 am</b> is in the morning. <b>8 pm</b> is in the evening.',
    '406|How do I read a timetable?': 'Find <b>Perth</b> in the rows and <b>Train 1</b> in the columns. They meet at <b>10:20</b>.',
    '407|How can I find the area of a shape?': 'This shape covers <b>3</b> rows of <b>4</b> squares. That is <b>12</b> squares.',
    '407|How do I find the perimeter of a shape?': 'This rectangle has two sides of <b>5 m</b> and two sides of <b>3 m</b>. 5 + 3 + 5 + 3 = <b>16 m</b>.',
    '407|How do I read a scale?': 'The numbers go up in 10s, and each small step is <b>5</b>. The pointer is at <b>35</b>.',
    '408|What is tessellation?': 'These <b>hexagons</b> fit together with no gaps, so they tessellate.',
    '408|How can I use grid references?': 'Go along to <b>C</b>, then up to <b>4</b>. The 💎 is at <b>C4</b>.',
    '408|What is a right angle?': 'The corner of a <b>square</b> is a right angle.',
    '409|How do I record and display data?': 'The <b>Rainy</b> bar is the tallest: <b>8</b> days. <b>Cloudy</b> is the shortest: <b>4</b> days.',
    '409|How do I read and make tables?': 'Find <b>Tue</b>. Under it is <b>11</b>.',
    '409|How can I sort data with Venn and Carroll diagrams?': '<b>4</b> is even, so it goes in the Even circle. <b>15</b> is more than 10, so it goes in that circle. <b>12</b> is both, so it goes in the overlap.'
  };
  /* d = { short, title, what, words: [[word, meaning, emoji]], see: [[say, pic] x3], ex: [w x3], mistake: [say, pic], check: {q, pic, options, answer, explain, tip}, remember: [say, pic] } */
  FL._w = { worked: worked, check: check };
  FL.learnIt = function (n, id, d) {
    var sl = [];
    sl.push({ title: d.title, say: [d.what].concat(BQX[n + '|' + d.title] ? [BQX[n + '|' + d.title]] : []), v: d.pic || '', kind: 'The big question', noMore: true });
    sl.push({ title: 'Key words', say: [], v: words(d.words), kind: 'Key words', noMore: true });
    [['See it', 'Real things'], ['Draw it', 'A picture'], ['Write it', 'Numbers']].forEach(function (k, i) { var s = d.see[i]; if (!s) return;
      var o = { title: k[0], say: [s[0]], v: s[1], kind: k[1], noMore: true };
      /* Draw it and Write it: the child copies the example on a scribble pad, open and ready */
      if (i === 1 && BUILD[s[0]]) { var bt = BUILD[s[0]]; o.say = [s[0], 'Your turn: make ' + (bt[0] * 10 + bt[1]) + '. Tap to add ten sticks and ones.']; o.live = function (host) { build(host, bt[0], bt[1]); }; }
      else if (i > 0) { var hops = i === 1 && /marker-end="url\(#flA\)"/.test(s[1]);
        /* Draw it: a number line with jumps goes on the pad without its jumps, so the child draws them; anything else gets a new thing to draw */
        var pad = { open: true, bg: hops ? noHops(s[1]) : '' };
        o.say = [s[0], i === 1 ? (hops ? 'Your turn: draw the jumps on the number line.' : DRAWT[s[0]] || 'Your turn: draw your own on the scribble pad.') : 'Your turn: write it on the scribble pad.']; o.live = function (host) { var H = S.h; if (H && H.scribble) H.scribble(host, pad); }; }
      sl.push(o); });
    d.ex.forEach(function (w, i) { sl.push({ title: 'Worked example ' + (i + 1), say: [], ex: worked(w), kind: 'Step by step', noMore: true }); });
    sl.push({ title: 'Watch out!', say: [d.mistake[0]], v: d.mistake[1], kind: 'A common mistake', noMore: true });
    sl.push({ title: 'Quick check', say: ['Now you try. Tap your answer.'], live: check(d.check), kind: 'Your turn', noMore: true });
    sl.push({ title: 'Remember', say: [d.remember[0]], v: d.remember[1], kind: 'Let’s recap', noMore: true });
    sl.forEach(function (x) { x.flLearn = true; });
    BT.add(n, id, d.short, sl);
  };

  /* compact form: FL.LI(n, id, [short, title, what, pic, words, see, ex, mistake, check, remember])
     ex: [q, steps, final, pic or [pics]]; check: [q, pic, options, answer, explain, tip] */
  FL.LI = function (n, id, a) {
    FL.learnIt(n, id, { short: a[0], title: a[1], what: a[2], pic: a[3], words: a[4], see: a[5],
      ex: a[6].map(function (e) { return { q: e[0], steps: e[1], final: e[2], pics: Array.isArray(e[3]) ? e[3] : null, pic: Array.isArray(e[3]) ? null : e[3] }; }),
      mistake: a[7], check: { q: a[8][0], pic: a[8][1], options: a[8][2], answer: a[8][3], explain: a[8][4], tip: a[8][5] }, remember: a[9] });
  };
  /* worked examples made from the topic's question makers: the hints become the steps */
  FL.wexGens = function (n, gens) {
    function conv(fn) { return function () { var q = fn(), st = [];
      (q.hints || []).forEach(function (h) { if (st.indexOf(h) < 0 && !/one step at a time|look carefully at each/i.test(h)) st.push(h); });
      if (q.explain) st.push(q.explain);
      if (!st.length) st.push('Think about what the question asks.');
      var oc = q.options ? '<div style="margin-top:8px">' + cards(q.options) + '</div>' : '';
      return { q: q.text, steps: st, final: 'The answer is ' + q.answer + '.', pic: (q.pic || '') + oc, ans: q.answer, options: q.options, optCards: oc }; }; }
    var m = {}; ['low', 'medium', 'high'].forEach(function (l) { m[l] = (gens[l] || gens.medium || []).map(conv); });
    FL.workedSets(n, m);
  };

  /* three sets of worked examples, 8 slides each, made from worked-example makers for each level */
  FL.workedSets = function (n, makers) {
    [['wex1', 'Worked examples: getting started', 'low'], ['wex2', 'Worked examples: building up', 'medium'], ['wex3', 'Worked examples: challenge', 'high']].forEach(function (p) {
      var list = makers[p[2]] || [], sl = [], seen = {};
      for (var k = 0; sl.length < 8 && k < 200 && list.length; k++) {
        var w = list[k % list.length](); var key = w.q + '|' + w.final; if (seen[key]) continue; seen[key] = 1;
        sl.push({ flLearn: true, title: 'Worked example ' + (sl.length + 1), say: [], ex: worked(w), kind: p[1].split(': ')[1].replace(/^./, function (c) { return c.toUpperCase(); }), noMore: true });
      }
      if (sl.length) BT.add(n, p[0], p[1], sl);
    });
  };

  /* ========================= P3 · 302 Adding and subtracting ========================= */
  var T = FL.track;
  FL.learnIt(302, 'learn1', { short: 'Reordering', title: 'How can reordering numbers help me add them?',
    what: 'When we add, we can change the order of the numbers and the answer stays the same. Choosing a good order makes adding easier.',
    pic: FL.says('frog', '3 + 8 + 7 = ?'),
    words: [['add (+)', 'put numbers together', '➕'], ['total', 'how many altogether', '🧮'], ['pair', 'two numbers that go together', '👯'], ['make ten', 'two numbers that add up to 10, like 3 and 7', '🔟']],
    see: [['Frankie catches 3 flies, then 8, then 7. He puts the 3 and the 7 together first.', row3([3, 8, 7], 'star')],
      ['Three and seven fill a ten-frame. Then 8 more.', '<div style="max-width:240px;margin:0 auto">' + FL.frame(3, 7) + '</div>'],
      ['We write it like this: 3 + 7 = 10, and 10 + 8 = 18.', big('3 + 8 + 7<br>= 10 + 8 = 18')]],
    ex: [{ q: 'What is 4 + 9 + 6?', steps: ['Look for two numbers that make 10.', '4 and 6 make 10.', 'Now add the 9: 10 + 9 = 19.'], final: '4 + 9 + 6 = 19', pics: [big('4 + 9 + 6'), big('4 + 6 + 9'), big('10 + 9'), big('19')] },
      { q: 'What is 5 + 8 + 5?', steps: ['Look for a pair that makes 10.', '5 and 5 make 10.', '10 + 8 = 18.'], final: '5 + 8 + 5 = 18', pics: [big('5 + 8 + 5'), big('5 + 5 + 8'), big('10 + 8'), big('18')] },
      { q: 'What is 2 + 7 + 8?', steps: ['Which two numbers make 10?', '2 and 8 make 10.', '10 + 7 = 17.'], final: '2 + 7 + 8 = 17', pics: [big('2 + 7 + 8'), big('2 + 8 + 7'), big('10 + 7'), big('17')] }],
    mistake: ['Reordering works for adding, but not for taking away. 9 take away 4 is 5, but 4 take away 9 does not work with whole numbers.', cards(['9 − 4 = 5 ✓', '4 − 9 ✗'])],
    check: { q: 'What is <b>6 + 3 + 4</b>?', options: [12, 13, 14], answer: 13, explain: '6 and 4 make 10, and 3 more is 13.', tip: 'Find the pair that makes 10.' },
    remember: ['Any order gives the same answer. Look for pairs that make 10 and add them first.', cards(['1 + 9', '2 + 8', '3 + 7', '4 + 6', '5 + 5'])] });

  FL.learnIt(302, 'learn2', { short: 'Bridging through 10', title: 'How can bridging through 10 help me to add and subtract?',
    what: 'To add or take away across 10, jump to 10 first, then jump the rest.',
    pic: T(7, 15, [7, 10, 15], [[7, 10], [10, 15]]),
    words: [['bridge', 'go across a ten', '🌉'], ['jump', 'a hop along the number line', '🐸'], ['split', 'break a number into two parts, like 5 = 2 + 3', '✂️'], ['number line', 'numbers in order on a line', '📏']],
    see: [['Frankie has 8 flies in a box of 10. He adds 5 more: 2 fill the box, and 3 go in a new box.', '<div style="max-width:240px;margin:0 auto">' + FL.frame(8, 2) + '</div>' + FL.things(3, 'star', 3)],
      ['On a number line: 8, jump 2 to 10, then jump 3 to 13.', T(8, 13, [8, 10, 13], [[8, 10], [10, 13]])],
      ['We write: 8 + 5 = 8 + 2 + 3 = 13.', big('8 + 5 = 8 + 2 + 3 = 13')]],
    ex: [{ q: 'What is 7 + 6?', steps: ['How far is 7 from 10? 3.', 'Split 6 into 3 and 3.', '7 + 3 = 10, then 10 + 3 = 13.'], final: '7 + 6 = 13', pics: [T(7, 13, [7]), T(7, 13, [7, 10]), T(7, 13, [7, 10], [[7, 10]]), T(7, 13, [7, 10, 13], [[7, 10], [10, 13]])] },
      { q: 'What is 14 − 6?', steps: ['How far is 14 from 10? 4.', 'Split 6 into 4 and 2.', '14 − 4 = 10, then 10 − 2 = 8.'], final: '14 − 6 = 8', pics: [T(8, 14, [14]), T(8, 14, [14, 10]), T(8, 14, [14, 10], [[14, 10]]), T(8, 14, [8, 10, 14], [[14, 10], [10, 8]])] },
      { q: 'What is 9 + 8?', steps: ['9 needs 1 to make 10.', 'Split 8 into 1 and 7.', '9 + 1 = 10, then 10 + 7 = 17.'], final: '9 + 8 = 17', pics: [T(9, 17, [9]), T(9, 17, [9, 10]), T(9, 17, [9, 10], [[9, 10]]), T(9, 17, [9, 10, 17], [[9, 10], [10, 17]])] }],
    mistake: ['Split the second number, not the first. For 8 + 5, keep the 8 and split the 5 into 2 and 3.', cards(['8 + 5', '8 + 2 + 3 ✓'])],
    check: { q: 'What is <b>6 + 7</b>?', pic: T(6, 13, [6, 10]), options: [12, 13, 14], answer: 13, explain: '6 + 4 = 10, then 3 more is 13.', tip: 'Jump to 10 first.' },
    remember: ['Jump to 10 first, then jump the rest.', T(7, 15, [7, 10, 15], [[7, 10], [10, 15]])] });

  FL.learnIt(302, 'learn3', { short: 'Counting on', title: 'How can counting on help me add two-digit numbers?',
    what: 'Start at the bigger number. Count on the tens first, then the ones.',
    pic: FL.says('frog', '35 + 24 = ?'),
    words: [['tens', 'groups of ten', '🔟'], ['ones', 'single things', '1️⃣'], ['count on', 'start at a number and keep going', '➡️'], ['bigger number', 'start here to save time', '⬆️']],
    see: [['Frankie has 35 flies. He catches 2 tens and 4 ones more.', FL.tensOnes(3, 5) + FL.tensOnes(2, 4)],
      ['Start at 35. Jump ten to 45, ten to 55, then 4 ones to 59.', cards(['35', '→ 45', '→ 55', '→ 59'])],
      ['We write: 35 + 24 = 59.', big('35 + 24 = 59')]],
    ex: [{ q: 'What is 42 + 13?', steps: ['Start at 42.', 'Count on 1 ten: 52.', 'Count on 3 ones: 53, 54, 55.'], final: '42 + 13 = 55', pics: [cards(['42']), cards(['42', '→ 52']), cards(['42', '→ 52', '→ 55'])] },
      { q: 'What is 26 + 31?', steps: ['Start at 31, the bigger number.', 'Count on 2 tens: 41, 51.', 'Count on 6 ones: 57.'], final: '26 + 31 = 57', pics: [cards(['31']), cards(['31', '→ 41', '→ 51']), cards(['31', '→ 41', '→ 51', '→ 57'])] },
      { q: 'What is 47 + 15?', steps: ['Start at 47.', 'Count on 1 ten: 57.', 'Count on 5 ones: 58, 59, 60, 61, 62.'], final: '47 + 15 = 62', pics: [cards(['47']), cards(['47', '→ 57']), cards(['47', '→ 57', '→ 62'])] }],
    mistake: ['Remember the ones! 35 + 24 is not 55. After the tens, count on the 4 ones too.', cards(['35 + 24 = 55 ✗', '35 + 24 = 59 ✓'])],
    check: { q: 'What is <b>53 + 21</b>?', options: [73, 74, 84], answer: 74, explain: '53, 63, 73, then 1 more is 74.', tip: 'Count on the tens first.' },
    remember: ['Start at the bigger number. Count on the tens, then the ones.', cards(['bigger number', '+ tens', '+ ones'])] });

  FL.learnIt(302, 'learn4', { short: 'Partitioning', title: 'How can partitioning help me add two-digit numbers?',
    what: 'Split each number into tens and ones. Add the tens, add the ones, then put them back together.',
    pic: FL.says('frog', '34 + 25 = ?'),
    words: [['partition', 'split a number into tens and ones', '✂️'], ['tens', '30 is 3 tens', '🔟'], ['ones', '4 is 4 ones', '1️⃣'], ['put together', 'add the parts to get the answer', '🧩']],
    see: [['34 is 3 tens and 4 ones. 25 is 2 tens and 5 ones.', FL.tensOnes(3, 4) + FL.tensOnes(2, 5)],
      ['Tens together: 5 tens. Ones together: 9 ones.', FL.tensOnes(5, 9)],
      ['We write: 30 + 20 = 50, 4 + 5 = 9, so 59.', big('30 + 20 = 50<br>4 + 5 = 9<br>50 + 9 = 59')]],
    ex: [{ q: 'What is 41 + 36?', steps: ['Split: 40 and 1, 30 and 6.', 'Tens: 40 + 30 = 70.', 'Ones: 1 + 6 = 7.', 'Put together: 70 + 7 = 77.'], final: '41 + 36 = 77', pics: [big('41 + 36'), cards(['40 + 1', '30 + 6']), big('40 + 30 = 70'), big('1 + 6 = 7'), big('77')] },
      { q: 'What is 23 + 45?', steps: ['Split: 20 and 3, 40 and 5.', 'Tens: 20 + 40 = 60.', 'Ones: 3 + 5 = 8.', 'Put together: 60 + 8 = 68.'], final: '23 + 45 = 68', pics: [big('23 + 45'), cards(['20 + 3', '40 + 5']), big('20 + 40 = 60'), big('3 + 5 = 8'), big('68')] },
      { q: 'What is 26 + 38?', steps: ['Split: 20 and 6, 30 and 8.', 'Tens: 20 + 30 = 50.', 'Ones: 6 + 8 = 14. That is another ten!', 'Put together: 50 + 14 = 64.'], final: '26 + 38 = 64', pics: [big('26 + 38'), cards(['20 + 6', '30 + 8']), big('20 + 30 = 50'), big('6 + 8 = 14'), big('64')] }],
    mistake: ['3 tens is thirty, not three. In 34 + 25, add 30 and 20, not 3 and 2.', cards(['3 + 2 = 5 ✗', '30 + 20 = 50 ✓'])],
    check: { q: 'What is <b>32 + 15</b>?', options: [37, 47, 57], answer: 47, explain: '30 + 10 = 40, 2 + 5 = 7, so 47.', tip: 'Add the tens, then the ones.' },
    remember: ['Split into tens and ones, add each part, then put them together.', cards(['split', 'add tens', 'add ones', 'put together'])] });

  /* worked-example makers for 302, a level each */
  var W2 = {
    low: [function () { var a = r(6, 9), b = r(11 - a, 9), need = 10 - a; return { q: 'What is ' + a + ' + ' + b + '?', steps: [a + ' needs ' + need + ' to make 10.', 'Split ' + b + ' into ' + need + ' and ' + (b - need) + '.', a + ' + ' + need + ' = 10, then 10 + ' + (b - need) + ' = ' + (a + b) + '.'], final: a + ' + ' + b + ' = ' + (a + b), pics: [T(a, a + b, [a]), T(a, a + b, [a, 10]), T(a, a + b, [a, 10, a + b], [[a, 10], [10, a + b]])] }; },
      function () { var a = r(1, 9), b = 10 - a, c = r(2, 9); return { q: 'What is ' + a + ' + ' + c + ' + ' + b + '?', steps: ['Look for two numbers that make 10.', a + ' and ' + b + ' make 10.', '10 + ' + c + ' = ' + (10 + c) + '.'], final: a + ' + ' + c + ' + ' + b + ' = ' + (10 + c), pics: [big(a + ' + ' + c + ' + ' + b), big(a + ' + ' + b + ' + ' + c), big('10 + ' + c)] }; }],
    medium: [function () { var a = r(11, 18), b = r(a - 9, 9), down = a - 10; return { q: 'What is ' + a + ' − ' + b + '?', steps: [a + ' take away ' + down + ' is 10.', 'Split ' + b + ' into ' + down + ' and ' + (b - down) + '.', '10 − ' + (b - down) + ' = ' + (a - b) + '.'], final: a + ' − ' + b + ' = ' + (a - b), pics: [T(a - b, a, [a]), T(a - b, a, [a, 10], [[a, 10]]), T(a - b, a, [a - b, 10, a], [[a, 10], [10, a - b]])] }; },
      function () { var a = r(21, 59), t = r(1, 3), o = r(1, 8 - a % 10 > 0 ? Math.min(8, 9 - a % 10) : 1); var b = 10 * t + o, steps = ['Start at ' + a + '.'], pics = [cards([a])], cur = a, ch = [String(a)];
        for (var i = 0; i < t; i++) { cur += 10; ch.push('→ ' + cur); } steps.push('Count on ' + t + ' ten' + (t > 1 ? 's' : '') + ': ' + ch.slice(1).join(' ').replace(/→ /g, '') + '.'); pics.push(cards(ch.slice()));
        cur += o; ch.push('→ ' + cur); steps.push('Count on ' + o + ' one' + (o > 1 ? 's' : '') + ': ' + cur + '.'); pics.push(cards(ch.slice()));
        return { q: 'What is ' + a + ' + ' + b + '?', steps: steps, final: a + ' + ' + b + ' = ' + (a + b), pics: pics }; }],
    high: [function () { var a = 10 * r(1, 4) + r(3, 9), b = 10 * r(1, 4) + r(3, 9), ta = Math.floor(a / 10) * 10, tb = Math.floor(b / 10) * 10, oa = a % 10, ob = b % 10;
        return { q: 'What is ' + a + ' + ' + b + '?', steps: ['Split: ' + ta + ' and ' + oa + ', ' + tb + ' and ' + ob + '.', 'Tens: ' + ta + ' + ' + tb + ' = ' + (ta + tb) + '.', 'Ones: ' + oa + ' + ' + ob + ' = ' + (oa + ob) + (oa + ob >= 10 ? '. That is another ten!' : '.'), 'Put together: ' + (ta + tb) + ' + ' + (oa + ob) + ' = ' + (a + b) + '.'], final: a + ' + ' + b + ' = ' + (a + b), pics: [big(a + ' + ' + b), cards([ta + ' + ' + oa, tb + ' + ' + ob]), big(ta + ' + ' + tb + ' = ' + (ta + tb)), big(oa + ' + ' + ob + ' = ' + (oa + ob)), big(a + b)] }; },
      function () { var a = 10 * r(3, 9) + r(1, 4), b = r(5, 9), down = a % 10; return { q: 'What is ' + a + ' − ' + b + '?', steps: [a + ' take away ' + down + ' is ' + (a - down) + '.', 'Split ' + b + ' into ' + down + ' and ' + (b - down) + '.', (a - down) + ' − ' + (b - down) + ' = ' + (a - b) + '.'], final: a + ' − ' + b + ' = ' + (a - b), pics: [big(a + ' − ' + b), cards([a + ' − ' + down + ' = ' + (a - down)]), big((a - down) + ' − ' + (b - down) + ' = ' + (a - b))] }; }]
  };
  FL.workedSets(302, W2);
})();
