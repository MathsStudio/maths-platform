/* challenges.js: "Maths Week challenges" in Activity Time for S1, S2 and S3, 14 per year, in the order of the
   third level plan. The puzzles and solutions are written for MathsStudio, using the plan's titles as themes;
   a link points to the official Maths Week Scotland challenges. */
(function () {
  'use strict';
  var S = Studio, H = S.h, BT = window.BT; if (!BT || !BT.addLab) return;
  var shuffle = H.shuffle;
  /* [item number, title, question, answer, [wrong answers], hint, explanation] */
  var C = {
    801: [
      [2, 'Different dollars', 'You have $1 coins and $5 notes, 11 items in all, worth $35. How many $5 notes do you have?', '6', ['5', '7', '4'], 'If all 11 were $1 coins, that would be $11. Each swap to a $5 note adds $4.', '$35 − $11 = $24 extra. $24 ÷ $4 = 6 notes. Check: 6 × $5 + 5 × $1 = $35.'],
      [3, 'Teachers’ pet', 'In a staffroom, 3/5 of the teachers have a pet. 12 teachers have a pet. How many teachers are there?', '20', ['15', '18', '24'], '3/5 is 12, so find 1/5 first.', '1/5 is 12 ÷ 3 = 4, so 5/5 is 4 × 5 = 20 teachers.'],
      [4, 'Rectangles', 'How many different rectangles with whole-number sides have an area of 36 cm²? (A 4 × 9 and a 9 × 4 count as the same.)', '5', ['4', '6', '9'], 'List the factor pairs of 36.', '1 × 36, 2 × 18, 3 × 12, 4 × 9, 6 × 6: 5 rectangles.'],
      [5, 'Last Wednesday', 'The 1st of a 31-day month is a Wednesday. What date is the last Wednesday of that month?', '29th', ['28th', '30th', '22nd'], 'Wednesdays come every 7 days after the 1st.', '1, 8, 15, 22, 29: the last Wednesday is the 29th.'],
      [6, 'Painting flats', 'A painter takes 3 hours to paint a flat. How many hours do 2 painters take to paint 8 flats, working together at the same rate?', '12', ['24', '16', '6'], 'How many flats can 2 painters do in 3 hours?', '8 flats need 8 × 3 = 24 painter-hours. 2 painters share it: 24 ÷ 2 = 12 hours.'],
      [7, 'Knotted net', 'A square net is made of string: 5 strings across and 5 strings down, knotted wherever they cross. How many knots are there?', '25', ['10', '20', '16'], 'Each across string crosses every down string.', 'Every one of the 5 across strings crosses all 5 down strings: 5 × 5 = 25 knots.'],
      [8, 'Sequence', 'What is the next number? 2, 6, 12, 20, 30, …', '42', ['40', '36', '44'], 'Look at the differences.', 'The differences are 4, 6, 8, 10, so the next is +12: 30 + 12 = 42.'],
      [9, 'Broken squares', 'A 4 × 4 square of tiles has its border removed. How many tiles are left?', '4', ['8', '12', '6'], 'The border is the outside ring of tiles.', 'Removing the outer ring leaves a 2 × 2 square: 4 tiles. (The border had 12.)'],
      [10, 'Cabin bags', 'An airline allows a cabin bag of 7 kg. Your bag weighs 2.35 kg and you pack a 1.8 kg laptop and a 950 g coat. How much more can you pack?', '1.9 kg', ['2.1 kg', '1.2 kg', '2.85 kg'], 'Change 950 g into kilograms first.', '2.35 + 1.8 + 0.95 = 5.1 kg. 7 − 5.1 = 1.9 kg.'],
      [11, 'Desert island', '4 sailors have water for 12 days. After 4 days, 2 more sailors join them. How many full days does the remaining water last for all 6?', '5', ['6', '8', '4'], 'How many sailor-days of water are left after 4 days?', 'At the start: 4 × 12 = 48 sailor-days. After 4 days, 48 − 16 = 32 are left. 32 ÷ 6 = 5.3, so it lasts 5 full days.'],
      [12, 'Racing swifts', 'A swift flies at 30 m/s. How many kilometres does it fly in 10 minutes?', '18 km', ['3 km', '30 km', '1.8 km'], 'Find the metres first: 10 minutes is 600 seconds.', '30 × 600 = 18,000 m = 18 km.'],
      [13, 'Mystery angle', '2 angles on a straight line are 3x and 2x. What is x?', '36°', ['30°', '45°', '60°'], 'Angles on a straight line add up to 180°.', '3x + 2x = 5x = 180°, so x = 36°.'],
      [14, 'Television deal', 'A TV costs £480. Shop A gives 25% off. Shop B gives £100 off. How much cheaper is the better deal?', '£20', ['£25', '£100', '£120'], 'Work out 25% of £480.', '25% of £480 is £120, so A costs £360 and B costs £380. A is £20 cheaper.'],
      [15, 'Nuts', 'A bag of nuts is shared: Ali takes half, Bea takes 1/3 of what is left, leaving 20 nuts. How many were in the bag?', '60', ['40', '80', '120'], 'Work backwards: 20 is 2/3 of what Bea saw.', 'Before Bea: 20 ÷ 2/3 = 30. Before Ali: 30 × 2 = 60 nuts.']
    ],
    821: [
      [16, 'Dominoes', 'A full set of dominoes runs from 0–0 to 6–6. How many dominoes are in the set?', '28', ['21', '36', '49'], 'Count the dominoes with 0, then those with 1 but not 0, and so on.', '7 + 6 + 5 + 4 + 3 + 2 + 1 = 28.'],
      [17, 'Tortoise and hare', 'A hare runs at 10 m/s and a tortoise at 0.1 m/s. The tortoise has a 99 m head start. After how many seconds does the hare draw level?', '10 s', ['9.9 s', '11 s', '99 s'], 'The hare gains 9.9 m every second.', '99 ÷ 9.9 = 10 seconds.'],
      [18, 'Wall', 'A wall is built from bricks 20 cm long. Each row is 3 m long. How many bricks are in each row?', '15', ['150', '12', '6'], 'Change 3 m to centimetres.', '300 cm ÷ 20 cm = 15 bricks.'],
      [19, 'Test scores', 'The mean of 4 test scores is 72. 1/5 test makes the mean 75. What was the fifth score?', '87', ['75', '78', '90'], 'Find the totals before and after.', 'Before: 4 × 72 = 288. After: 5 × 75 = 375. Fifth score: 375 − 288 = 87.'],
      [20, 'Sculpture', 'A cube sculpture of side 3 m is made of 1 m cubes. How many 1 m cubes can’t be seen from outside at all?', '1', ['0', '8', '27'], 'Think about the cube right in the middle.', 'Only the centre cube is hidden on every side: 3 × 3 × 3 = 27, minus 26 on the outside, leaves 1.'],
      [21, 'Deli(cious) sandwiches', 'A deli offers 4 breads, 5 fillings and 3 sauces. How many different sandwiches can be made with one of each?', '60', ['12', '20', '45'], 'Multiply the choices.', '4 × 5 × 3 = 60 sandwiches.'],
      [22, 'All the ones', 'What is 1111 × 11?', '12221', ['11111', '12321', '1221'], 'Multiply by 10 and add 1 more lot.', '1111 × 10 = 11110, plus 1111 = 12221.'],
      [23, 'Books and magazines', 'A book costs £6 more than a magazine. Together they cost £10. How much is the magazine?', '£2', ['£4', '£3', '£1'], 'Take the extra £6 away first, then share.', '£10 − £6 = £4, shared equally is £2. The book is £8.'],
      [24, 'The farmer’s weight', 'A farmer and his dog weigh 96 kg. The farmer weighs 5 times as much as the dog. What does the dog weigh?', '16 kg', ['19.2 kg', '20 kg', '12 kg'], 'Together they are 6 dog-weights.', '96 ÷ 6 = 16 kg. The farmer weighs 80 kg.'],
      [25, 'Dice', '2 normal dice are rolled. What is the probability that the total is 7?', '1/6', ['1/12', '7/36', '1/36'], 'List the pairs that make 7.', '(1,6), (2,5), (3,4), (4,3), (5,2), (6,1): 6 out of 36 = 1/6.'],
      [26, 'Shopping spree', 'You spend 1/4 of your money, then 1/3 of what is left, and have £30 left. How much did you start with?', '£60', ['£45', '£90', '£120'], 'Work backwards. £30 is 2/3 of the amount after the first spend.', 'After the first spend: £30 ÷ 2/3 = £45. Start: £45 ÷ 3/4 = £60.'],
      [27, 'Triangle', 'A triangle has sides 7 cm and 10 cm. Which of these can’t be the third side?', '18 cm', ['4 cm', '12 cm', '16 cm'], 'The 2 shorter sides must add up to more than the longest.', '7 + 10 = 17, so the third side must be less than 17 cm. 18 cm is impossible.'],
      [28, 'Sequences', 'In the sequence 5, 8, 11, 14, …, what is the 40th term?', '122', ['120', '125', '117'], 'The rule is 3n + 2.', '3 × 40 + 2 = 122.'],
      [29, 'Traffic calming', 'A road has a speed limit of 20 mph. A car takes 3 minutes to drive 1.5 miles. Was it speeding, and at what speed?', 'Yes, 30 mph', ['No, 20 mph', 'No, 15 mph', 'Yes, 45 mph'], '3 minutes is 1/20 of an hour.', '1.5 ÷ (3/60) = 30 mph, which is over 20 mph.']
    ],
    841: [
      [30, 'Counting cubes', 'How many cubes of any size are in a 2 × 2 × 2 cube made of small cubes?', '9', ['8', '10', '16'], 'Count the small cubes, then the big ones.', '8 small cubes plus 1 big 2 × 2 × 2 cube: 9.'],
      [31, 'Fruit cocktail', 'Juice is mixed orange : pineapple : mango = 5 : 3 : 2. How much orange is in 1.5 litres?', '750 ml', ['500 ml', '450 ml', '300 ml'], 'There are 10 parts.', '1.5 l = 1,500 ml. 1,500 ÷ 10 = 150 ml per part. Orange: 5 × 150 = 750 ml.'],
      [32, 'Edging the path', 'A 6 m by 4 m lawn has a 1 m wide path all round it. What is the area of the path?', '24 m²', ['20 m²', '48 m²', '28 m²'], 'Find the big rectangle area and subtract the lawn.', 'Outside: 8 × 6 = 48 m². Lawn: 24 m². Path: 48 − 24 = 24 m².'],
      [33, 'Ways and means', '5 numbers have a mean of 10. 4 of them are 6, 8, 12 and 15. What is the fifth?', '9', ['10', '11', '8'], 'Find the total first.', 'Total: 5 × 10 = 50. 50 − (6 + 8 + 12 + 15) = 50 − 41 = 9.'],
      [34, 'Dominoes', 'In a full double-six set, how many spots are there altogether?', '168', ['84', '147', '196'], 'Each number 0–6 appears 8 times.', 'Each number appears 8 times: 8 × (0 + 1 + … + 6) = 8 × 21 = 168.'],
      [35, 'Teachers’ meeting', 'At a meeting, each of the 8 teachers shakes hands once with every other teacher. How many handshakes?', '28', ['56', '64', '16'], 'Each teacher shakes 7 hands, but each handshake involves 2 people.', '8 × 7 ÷ 2 = 28 handshakes.'],
      [36, 'Missing lines', 'A line passes through (0, 3) and (2, 7). What is its equation?', 'y = 2x + 3', ['y = 3x + 2', 'y = 2x + 7', 'y = 4x + 3'], 'Find the gradient: change in y ÷ change in x.', 'Gradient: (7 − 3) ÷ 2 = 2. It crosses the y-axis at 3: y = 2x + 3.'],
      [37, 'Palindromic sales', 'A shop’s takings were £1,991, a palindrome. What is the next palindromic number of pounds?', '£2,002', ['£1,999', '£2,112', '£2,020'], 'It must read the same forwards and backwards.', 'After 1991 the next palindrome is 2002.'],
      [38, 'A very long walk', 'You walk 5 km/h for 6 hours a day. How many days to walk 900 km?', '30', ['36', '25', '180'], 'How far do you walk each day?', '5 × 6 = 30 km a day. 900 ÷ 30 = 30 days.'],
      [39, 'Triangle areas', 'A right-angled triangle has shorter sides 9 cm and 12 cm. What is its area, and how long is the longest side?', '54 cm², 15 cm', ['108 cm², 15 cm', '54 cm², 21 cm', '27 cm², 15 cm'], 'Area: ½ × base × height. Longest side: Pythagoras.', 'Area: ½ × 9 × 12 = 54 cm². Hypotenuse: √(81 + 144) = √225 = 15 cm.'],
      [40, 'Rods', 'You have lots of 4 cm rods and lots of 6 cm rods. What is the shortest length you can make both from 4 cm rods only and from 6 cm rods only?', '12 cm', ['10 cm', '24 cm', '2 cm'], 'The length must be a multiple of 4 and of 6.', 'The lowest common multiple of 4 and 6 is 12: 3 4 cm rods or 2 6 cm rods.'],
      [41, 'Powerful pyramid', 'A square-based pyramid has a base of 6 m by 6 m and a height of 10 m. What is its volume?', '120 m³', ['360 m³', '60 m³', '180 m³'], 'Volume of a pyramid = ⅓ × base area × height.', '⅓ × 36 × 10 = 120 m³.'],
      [42, 'Filling the tank', 'A tank holds 240 litres. 1 tap fills it in 12 minutes, another in 24 minutes. How long do both taps take together?', '8 min', ['18 min', '6 min', '36 min'], 'How many litres does each tap add per minute?', 'Tap A: 20 l/min, tap B: 10 l/min. Together 30 l/min. 240 ÷ 30 = 8 minutes.'],
      [43, 'Number puzzle', 'I think of a number, square it and subtract 5. The answer is 44. What positive number did I think of?', '7', ['6', '8', '49'], 'Undo the steps: add 5, then square root.', '44 + 5 = 49, √49 = 7.']
    ]
  };
  var css = document.createElement('style');
  css.textContent = '.ch-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:8px;margin:10px 0}.ch-tile{min-height:56px;text-align:left;padding:8px 10px;border:2px solid var(--line);border-radius:12px;background:var(--surface-2);color:inherit;font:inherit;font-weight:700;cursor:pointer}' +
    '.ch-tile small{display:block;font-weight:600;color:var(--muted);font-size:.8rem}.ch-tile.ok{border-color:var(--good);background:var(--good-bg)}.ch-q{font-size:1.1rem;font-weight:700;margin:8px 0}.ch-link{font-size:.9rem;color:var(--muted)}';
  document.head.appendChild(css);

  function mount(list, label) {
    return function (host, ctx) {
      var solved = {}, count = 0;
      function menu() {
        host.innerHTML = '<p class="say">Pick a challenge. Read it carefully, try it on paper, then choose your answer. Solve 5 to finish the activity.</p>' +
          '<div class="ch-grid">' + list.map(function (c, i) { return '<button type="button" class="ch-tile' + (solved[i] ? ' ok' : '') + '" data-i="' + i + '"><small>Challenge ' + (i + 1) + (solved[i] ? ' ✓' : '') + '</small>' + c[1] + '</button>'; }).join('') + '</div>' +
          '<p class="ch-link">These puzzles are written by MathsStudio on the themes of the ' + label + '.</p>';
        host.querySelectorAll('.ch-tile').forEach(function (b) { b.addEventListener('click', function () { open(Number(b.getAttribute('data-i'))); }); });
      }
      function open(i) {
        var c = list[i], opts = shuffle([c[3]].concat(c[4])), hinted = false;
        function draw(fb, cls, done) {
          host.innerHTML = '<div class="gm-top"><span class="gm-pill">Challenge ' + (i + 1) + ' of ' + list.length + '</span><span class="gm-pill">Solved ' + count + '</span></div>' +
            '<h3 style="margin:6px 0">' + c[1] + '</h3><div class="ch-q say">' + c[2] + '</div>' +
            '<div class="bg-opts">' + opts.map(function (o, k) { var cl = done ? (o === c[3] ? ' ok' : '') : ''; return '<button class="bg-opt' + cl + '" type="button" data-k="' + k + '"' + (done ? ' disabled' : '') + '>' + o + '</button>'; }).join('') + '</div>' +
            '<div class="fbk ' + (cls || '') + '" aria-live="polite" style="min-height:2.4em">' + (fb || '') + '</div>' +
            '<div class="row">' + (!done && !hinted ? '<button class="btn ghost" type="button" data-act="hint">Need a hint?</button>' : '') + '<button class="btn" type="button" data-act="menu">All challenges</button></div>';
          host.querySelectorAll('.bg-opt:not([disabled])').forEach(function (b) { b.addEventListener('click', function () {
            var ok = opts[Number(b.getAttribute('data-k'))] === c[3];
            if (ok) { if (!solved[i]) { solved[i] = true; count++; } draw('<b>Solved!</b> ' + c[6], 'ok', true); if (count >= 5 && ctx && ctx.complete) ctx.complete(); }
            else { b.disabled = true; b.classList.add('no'); var f = host.querySelector('.fbk'); f.className = 'fbk no'; f.innerHTML = '<b>Not quite.</b> Have another look' + (hinted ? '.' : ', or take a hint.'); }
          }); });
          var hb = host.querySelector('[data-act="hint"]'); if (hb) hb.addEventListener('click', function () { hinted = true; draw('<b>Hint:</b> ' + c[5], ''); });
          host.querySelector('[data-act="menu"]').addEventListener('click', menu);
        }
        draw();
      }
      menu();
    };
  }
  [[801, 'S1 challenges (items 2 to 15)'], [821, 'S2 challenges (items 16 to 29)'], [841, 'S3 challenges (items 30 to 43)']].forEach(function (y) {
    var n = y[0], first = { 801: [801, 802, 803, 804, 805, 806, 807, 808, 809, 810, 811, 812, 813], 821: [821, 822, 823, 824, 825, 826, 827, 828, 829, 830, 831, 832, 833], 841: [841, 842, 843, 844, 845, 846, 847, 848, 849, 850, 851, 852, 853] }[n];
    /* the challenges sit in every topic of that year, so pupils meet them wherever they are */
    first.forEach(function (t) { BT.addLab(t, 'x_mws', 'Maths Week challenges', '14 puzzle challenges. Pick any one, try it on paper, then choose your answer. Solve 5 to finish.', mount(C[n], 'Maths Week Scotland third level list')); });
  });
})();
