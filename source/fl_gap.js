/* fl_gap.js: First level lessons that the curriculum asks for and were missing.
   P2: odd and even, equal groups, and a new topic Measuring (length, mass, capacity).
   P3: odd and even numbers, ordinal numbers.
   P4: division with remainders, equivalent fractions, mass and capacity, properties of shapes, symmetry.
   Each is an "11-slide" Let's learn lesson in the same format as the others, with an activity and question makers. */
(function () {
  'use strict';
  var FL = window.FL, BT = window.BT, S = window.Studio; if (!FL || !FL.LI || !BT || !S) return;
  var B = FL.big, C = FL.cards, SAY = FL.says, TH = FL.things, LI = FL.LI, r = FL.r, pick = FL.pick, shuffle = FL.shuffle, Q = FL.Q, MC = FL.MC;
  var INK = '#2b2340';
  function box(inner) { return '<div style="border:3px dashed ' + INK + ';border-radius:14px;padding:6px;background:#fff;max-width:170px">' + inner + '</div>'; }
  function grp(k, n, kind) { var o = []; for (var i = 0; i < k; i++) o.push(box(TH(n, kind, 5))); return '<div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">' + o.join('') + '</div>'; }
  function bar(n, col) { var s = ''; for (var i = 0; i < n; i++) s += '<span style="display:inline-block;width:26px;height:26px;background:' + (col || '#ffb703') + ';border:2px solid ' + INK + ';margin-right:-2px"></span>'; return '<div style="display:flex;justify-content:center;flex-wrap:wrap">' + s + '</div>'; }
  function rowBars(items) { return '<div style="display:grid;gap:8px;justify-items:center">' + items.map(function (x) { return '<div style="display:flex;align-items:center;gap:10px"><b style="min-width:80px;text-align:right">' + x[0] + '</b>' + bar(x[1], x[2]) + '</div>'; }).join('') + '</div>'; }
  function pies(list) { return '<div style="display:flex;gap:18px;justify-content:center;flex-wrap:wrap;align-items:center">' + list.map(function (p, i) { return (i ? '<b style="font-size:3rem;color:#2b2340;background:#fff;border-radius:12px;padding:0 10px">=</b>' : '') + '<div style="text-align:center;max-width:190px;color:#2b2340">' + FL.pie(p[0], p[1]) + '<div style="margin-top:6px">'+ '<div style="display:inline-flex;flex-direction:column;align-items:center;font-size:2rem;line-height:1.05;font-weight:800;color:#2b2340;background:#fff;border:3px solid #2b2340;border-radius:12px;padding:4px 14px"><span>' + p[1] + '</span><span style="border-top:4px solid #2b2340;width:100%;text-align:center">' + p[0] + '</span></div>' + '</div></div>'; }).join('') + '</div>'; }
  var ORD = ['', '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th', '13th', '14th', '15th', '16th', '17th', '18th', '19th', '20th'];
  var ORDW = ['', 'first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth'];
  var NAMES = ['Ava', 'Ben', 'Cara', 'Dev', 'Ella', 'Finn', 'Gus', 'Hana'];
  var more = window.__addQ = window.__addQ || {};
  function addQ(n, f) { (more[n] = more[n] || []).push(f); }
  function lab(n, id, label, lead, fn, who) { BT.addLab(n, id, label, lead, FL.genAct(fn, who || 'owl')); }

  /* ======================= P2 · 201 Odd and even ======================= */
  function qOdd2() { var n = r(2, 20), ev = n % 2 === 0; return MC('Odd and even', 'Is <b>' + n + '</b> an odd number or an even number?', ev ? 'even' : 'odd', [ev ? 'odd' : 'even'], ['Make pairs. Is one left over?', 'Look at the last digit: 0, 2, 4, 6, 8 are even.'], n + ' ' + (ev ? 'makes pairs with none left over, so it is even.' : 'has one left over, so it is odd.')); }
  LI(201, 'learn5', ['Odd and even', 'What are odd and even numbers?',
    'An even number makes pairs with none left over. An odd number has one left over.', SAY('owl', '6 is even. 7 is odd.'),
    [['even', 'makes pairs with none left over', '👯'], ['odd', 'has one left over', '☝️'], ['pair', 'two things together', '✌️'], ['left over', 'the one with no partner', '🧩']],
    [['Owl puts 6 stars into pairs. Every star has a partner.', TH(6, 'star', 2)],
      ['Owl puts 7 stars into pairs. One star has no partner.', TH(7, 'star', 2)],
      ['Even numbers: 2, 4, 6, 8, 10. Odd numbers: 1, 3, 5, 7, 9.', C(['2', '4', '6', '8', '10']) + '<div style="height:8px"></div>' + C(['1', '3', '5', '7', '9'])]],
    [['Is 8 odd or even?', ['Make pairs of 8 things.', '4 pairs, and none are left over.'], '8 is an even number.', TH(8, 'apple', 2)],
      ['Is 9 odd or even?', ['Make pairs of 9 things.', '4 pairs, and 1 is left over.'], '9 is an odd number.', TH(9, 'apple', 2)],
      ['Is 12 odd or even?', ['Look at the last digit, 2.', '2 is an even digit, so 12 makes pairs.'], '12 is an even number.', B('12 → even')]],
    ['Odd and even numbers take turns when you count: 1 odd, 2 even, 3 odd, 4 even.', C(['1 odd', '2 even', '3 odd', '4 even'])],
    ['Is <b>15</b> odd or even?', '', ['odd', 'even'], 'odd', '15 makes 7 pairs and 1 is left over, so it is odd.', 'Look at the last digit.'],
    ['Even numbers make pairs. Odd numbers have one left over.', C(['even: pairs', 'odd: 1 left over'])]]);
  addQ(201, qOdd2); lab(201, 'fl9', 'Odd or even', 'Say if each number is odd or even.', qOdd2);

  /* ======================= P2 · 202 Equal groups ======================= */
  function qGroups2() { var g = r(2, 5), n = pick([2, 3, 5]), t = g * n; return Q('Equal groups', 'There are <b>' + g + '</b> bags with <b>' + n + '</b> apples in each bag. How many apples are there altogether?', t, ['Add ' + n + ' again and again, ' + g + ' times.'], Array(g).fill(n).join(' + ') + ' = ' + t + '.'); }
  LI(202, 'learn5', ['Equal groups', 'How can equal groups help me add?',
    'Equal groups have the same number in each group. We can add the groups to find how many altogether.', SAY('bear', '3 plates with 2 buns on each'),
    [['group', 'a set of things together', '🧺'], ['equal', 'the same amount', '🟰'], ['altogether', 'all of them added up', '➕'], ['each', 'every one', '👉']],
    [['Benny puts 2 buns on each of 3 plates.', grp(3, 2, 'apple')],
      ['Count them: 2, 4, 6. There are 6 buns.', C(['2', '4', '6'])],
      ['We write it as an adding sum: 2 + 2 + 2 = 6.', B('2 + 2 + 2 = 6')]],
    [['3 bags have 5 sweets in each bag. How many sweets?', ['Each bag has 5.', '5 + 5 + 5.', '5, 10, 15.'], '3 groups of 5 is 15.', grp(3, 5, 'sweet')],
      ['2 plates have 4 apples on each plate. How many apples?', ['Each plate has 4.', '4 + 4 = 8.'], '2 groups of 4 is 8.', grp(2, 4, 'apple')],
      ['4 pots have 2 flowers in each pot. How many flowers?', ['Each pot has 2.', '2 + 2 + 2 + 2.', '2, 4, 6, 8.'], '4 groups of 2 is 8.', grp(4, 2, 'flower')]],
    ['The groups must be equal. 2, 3 and 2 is not equal groups.', C(['2 + 2 + 2 ✓', '2 + 3 + 2 ✗'])],
    ['<b>3</b> boxes have <b>2</b> pens in each box. How many pens?', grp(3, 2, 'star'), [5, 6, 8], 6, '2 + 2 + 2 = 6.', 'Add 2 three times.'],
    ['Equal groups: add the same number again and again.', C(['same in each group', 'add them up'])]]);
  addQ(202, qGroups2); lab(202, 'fl9', 'Equal groups', 'How many altogether?', qGroups2, 'bear');

  /* ======================= P2 · 206 Measuring (new topic) ======================= */
  if (!S.topics[206]) FL.topic({ n: 206, year: 'P2', short: 'Measure', title: 'Measuring', blurb: 'Find out which is longer, heavier or holds more, and measure with cubes, with Ollie the owl.' });
  function qLen2() { var a = r(2, 8), b = r(2, 8); if (a === b) b++; var n1 = pick(['pencil', 'ribbon', 'rope', 'stick']), n2 = pick(['crayon', 'string', 'straw', 'leaf']); return MC('Length', 'A ' + n1 + ' is <b>' + a + '</b> cubes long. A ' + n2 + ' is <b>' + b + '</b> cubes long. Which is longer?', a > b ? 'the ' + n1 : 'the ' + n2, [a > b ? 'the ' + n2 : 'the ' + n1], ['Which number of cubes is bigger?'], (a > b ? a : b) + ' is bigger than ' + (a > b ? b : a) + ', so ' + (a > b ? 'the ' + n1 : 'the ' + n2) + ' is longer.'); }
  function qMass2() { var P = [['an elephant', 'a mouse'], ['a bag of potatoes', 'a feather'], ['a car', 'a pencil'], ['a brick', 'a balloon']], p = pick(P), flip = Math.random() < 0.5; return MC('Mass', 'Which is <b>' + (flip ? 'heavier' : 'lighter') + '</b>: ' + p[0] + ' or ' + p[1] + '?', flip ? p[0] : p[1], [flip ? p[1] : p[0]], ['Think about which one is hard to lift.'], p[0] + ' is heavier than ' + p[1] + '.'); }
  function qCap2() { var P = [['a bath', 'a cup'], ['a bucket', 'a spoon'], ['a swimming pool', 'a bottle'], ['a jug', 'an egg cup']], p = pick(P), flip = Math.random() < 0.5; return MC('Capacity', 'Which holds <b>' + (flip ? 'more' : 'less') + '</b> water: ' + p[0] + ' or ' + p[1] + '?', flip ? p[0] : p[1], [flip ? p[1] : p[0]], ['Picture filling each one with water.'], p[0] + ' holds more than ' + p[1] + '.'); }
  LI(206, 'learn1', ['Length', 'How do I find out which is longer?',
    'Longer means more length. Shorter means less. We can measure length with cubes: put them end to end with no gaps.', SAY('owl', 'Which is longer?'),
    [['long', 'a big distance from end to end', '📏'], ['short', 'a small distance from end to end', '🐜'], ['longer', 'more length than another', '➡️'], ['shorter', 'less length than another', '⬅️']],
    [['Owl has a pencil and a crayon. Which is longer?', rowBars([['pencil', 8, '#e76f51'], ['crayon', 5, '#2a9d8f']])],
      ['Line the ends up. The pencil sticks out. The pencil is longer.', rowBars([['pencil', 8, '#e76f51'], ['crayon', 5, '#2a9d8f']])],
      ['Count the cubes: the pencil is 8 cubes long. The crayon is 5 cubes long.', C(['pencil: 8 cubes', 'crayon: 5 cubes'])]],
    [['A rope is 7 cubes long. A ribbon is 4 cubes long. Which is longer?', ['Compare 7 and 4.', '7 is more than 4.'], 'The rope is longer.', rowBars([['rope', 7, '#e76f51'], ['ribbon', 4, '#2a9d8f']])],
      ['A straw is 3 cubes long. A stick is 6 cubes long. Which is shorter?', ['Compare 3 and 6.', '3 is less than 6.'], 'The straw is shorter.', rowBars([['straw', 3, '#e76f51'], ['stick', 6, '#2a9d8f']])],
      ['A leaf is 5 cubes long. A string is 9 cubes long. How much longer is the string?', ['Count on from 5 to 9: 6, 7, 8, 9.', 'That is 4 more cubes.'], 'The string is 4 cubes longer.', rowBars([['leaf', 5, '#e76f51'], ['string', 9, '#2a9d8f']])]],
    ['Start at the same place. Put the cubes end to end with no gaps.', C(['same start ✓', 'gaps ✗'])],
    ['A snake is <b>9</b> cubes long. A worm is <b>6</b> cubes long. Which is longer?', rowBars([['snake', 9, '#e76f51'], ['worm', 6, '#2a9d8f']]), ['the snake', 'the worm'], 'the snake', '9 cubes is more than 6 cubes.', 'Compare the numbers.'],
    ['Longer means more length. Measure with cubes end to end.', C(['longer', 'shorter', 'cubes end to end'])]]);
  LI(206, 'learn2', ['Mass', 'How do I find out which is heavier?',
    'Heavier means more mass. Lighter means less. A balance tips down on the heavier side.', SAY('owl', 'Which is heavier?'),
    [['heavy', 'hard to lift', '🏋️'], ['light', 'easy to lift', '🪶'], ['heavier', 'more mass than another', '⬇️'], ['lighter', 'less mass than another', '⬆️']],
    [['Owl holds a brick in one hand and a feather in the other.', C(['brick: heavy', 'feather: light'])],
      ['On a balance the heavier side goes down. The brick goes down.', C(['⬇️ brick (heavier)', '⬆️ feather (lighter)'])],
      ['The brick is heavier than the feather. The feather is lighter than the brick.', C(['heavier', 'lighter'])]],
    [['Which is heavier: a car or a pencil?', ['A car is very hard to lift.', 'A pencil is easy to lift.'], 'The car is heavier.', C(['car: heavier', 'pencil: lighter'])],
      ['Which is lighter: a mouse or an elephant?', ['An elephant is very big and hard to lift.', 'A mouse is small.'], 'The mouse is lighter.', C(['mouse: lighter', 'elephant: heavier'])],
      ['Put these in order, lightest first: a feather, a book, a chair.', ['The feather is the lightest.', 'The book is heavier than the feather.', 'The chair is the heaviest.'], 'feather, book, chair', C(['feather', 'book', 'chair'])]],
    ['Big does not always mean heavy. A big balloon is light.', C(['big balloon: light', 'small stone: heavy'])],
    ['Which is <b>heavier</b>?', '', ['a bag of potatoes', 'a feather'], 'a bag of potatoes', 'A bag of potatoes is hard to lift. A feather is very light.', 'Think about lifting each one.'],
    ['Heavier means more mass. Lighter means less.', C(['heavier', 'lighter', 'balance'])]]);
  LI(206, 'learn3', ['Capacity', 'How do I find out which holds more?',
    'Capacity is how much a container can hold. Full means it is holding as much as it can. Empty means nothing is inside.', SAY('owl', 'Which holds more?'),
    [['full', 'holds as much as it can', '🥛'], ['empty', 'nothing inside', '🫙'], ['holds more', 'has more room inside', '➕'], ['holds less', 'has less room inside', '➖']],
    [['Owl has a bucket and a cup. Which holds more water?', C(['🪣 bucket', '🥤 cup'])],
      ['Fill the cup and pour it into the bucket again and again. It takes many cups to fill the bucket.', C(['1 bucket = lots of cups'])],
      ['The bucket holds more. The cup holds less.', C(['bucket: holds more', 'cup: holds less'])]],
    [['Which holds more: a bath or a cup?', ['A bath is very big.', 'A cup is small.'], 'The bath holds more.', C(['bath: more', 'cup: less'])],
      ['Which holds less: a jug or an egg cup?', ['An egg cup is tiny.', 'A jug is bigger.'], 'The egg cup holds less.', C(['egg cup: less', 'jug: more'])],
      ['A jug fills 4 cups. A bottle fills 2 cups. Which holds more?', ['Compare 4 and 2.', '4 is more than 2.'], 'The jug holds more.', C(['jug: 4 cups', 'bottle: 2 cups'])]],
    ['A tall thin bottle can hold less than a short wide one. Count how many cups fill each.', C(['count the cups ✓', 'just look ✗'])],
    ['Which holds <b>more</b>?', '', ['a swimming pool', 'a bottle'], 'a swimming pool', 'A swimming pool is much bigger than a bottle.', 'Picture filling each one.'],
    ['Capacity is how much a container holds.', C(['full', 'empty', 'holds more', 'holds less'])]]);
  [['fl1', 'Longer or shorter', 'Which is longer?', qLen2], ['fl2', 'Heavier or lighter', 'Which is heavier?', qMass2], ['fl3', 'Holds more or less', 'Which holds more?', qCap2]].forEach(function (a) { lab(206, a[0], a[1], a[2], a[3]); });
  FL.GENS = FL.GENS || {}; FL.GENS[206] = { low: [qLen2, qMass2, qCap2], medium: [qLen2, qMass2, qCap2], high: [qLen2, qMass2, qCap2] };

  /* ======================= P3 · 301 Odd and even, ordinal numbers ======================= */
  function qOdd3() { var n = r(10, 99), ev = n % 2 === 0; return MC('Odd and even', 'Is <b>' + n + '</b> odd or even?', ev ? 'even' : 'odd', [ev ? 'odd' : 'even'], ['Look at the last digit (the ones).', '0, 2, 4, 6, 8 mean even. 1, 3, 5, 7, 9 mean odd.'], 'The last digit of ' + n + ' is ' + (n % 10) + ', so it is ' + (ev ? 'even' : 'odd') + '.'); }
  LI(301, 'learn5', ['Odd and even numbers', 'How can I tell if a number is odd or even?',
    'Look at the last digit. If it is 0, 2, 4, 6 or 8 the number is even. If it is 1, 3, 5, 7 or 9 the number is odd.', SAY('fox', '36 is even. 37 is odd.'),
    [['even', 'ends in 0, 2, 4, 6 or 8', '✌️'], ['odd', 'ends in 1, 3, 5, 7 or 9', '☝️'], ['digit', 'one of 0 to 9', '🔢'], ['ones digit', 'the last digit', '👉']],
    [['An even number can be shared into 2 equal groups with none left.', TH(8, 'apple', 4)],
      ['An odd number leaves 1 over when shared into 2.', TH(7, 'apple', 4)],
      ['Odd and even numbers take turns: 20, 21, 22, 23, 24.', C(['20 even', '21 odd', '22 even', '23 odd', '24 even'])]],
    [['Is 47 odd or even?', ['Look at the ones digit: 7.', '7 is an odd digit.'], '47 is an odd number.', B('47 → odd')],
      ['Is 60 odd or even?', ['The ones digit is 0.', '0 is an even digit.'], '60 is an even number.', B('60 → even')],
      ['Is 85 odd or even?', ['The ones digit is 5.', '5 is an odd digit.'], '85 is an odd number.', B('85 → odd')]],
    ['Only the last digit matters. 28 is even because of the 8, not the 2.', C(['28 → look at 8 ✓', '28 → look at 2 ✗'])],
    ['Is <b>73</b> odd or even?', '', ['odd', 'even'], 'odd', 'The last digit is 3, so 73 is odd.', 'Look at the ones digit.'],
    ['Last digit 0, 2, 4, 6, 8: even. 1, 3, 5, 7, 9: odd.', C(['even: 0 2 4 6 8', 'odd: 1 3 5 7 9'])]]);
  function qOrd() { var k = r(2, 9), nm = shuffle(NAMES.slice()).slice(0, 2); var t = r(0, 2); if (t === 0) return Q('Ordinal numbers', 'In a race, ' + nm[0] + ' finishes <b>' + ORDW[k] + '</b>. How many runners finish before ' + nm[0] + '?', k - 1, ['First means 1 runner is ahead of no one.', 'Count the runners ahead.'], k - 1 + ' runners finish before ' + nm[0] + '.'); if (t === 1) return MC('Ordinal numbers', 'Which position comes <b>after ' + ORD[k] + '</b>?', ORD[k + 1], [ORD[k - 1], ORD[k + 2] || ORD[k]], ['Count on one more.'], 'After ' + ORDW[k] + ' comes ' + (ORDW[k + 1] || ORD[k + 1]) + '.'); return Q('Ordinal numbers', nm[0] + ' is <b>' + ORD[k] + '</b> in the queue. ' + nm[1] + ' is right behind. What position is ' + nm[1] + '? Write it like 4th.', ORD[k + 1], ['Behind means one more.'], k + ' + 1 = ' + (k + 1) + ', so ' + nm[1] + ' is ' + ORD[k + 1] + '.'); }
  LI(301, 'learn6', ['Ordinal numbers', 'What do first, second and third mean?',
    'Ordinal numbers tell us the position or order of something: 1st, 2nd, 3rd, 4th and so on.', SAY('pirate', '1st, 2nd, 3rd'),
    [['first (1st)', 'at the front', '🥇'], ['second (2nd)', 'next after first', '🥈'], ['third (3rd)', 'next after second', '🥉'], ['position', 'where something is in order', '📍']],
    [['Four pirates line up. The one at the front is 1st.', C(['1st', '2nd', '3rd', '4th'])],
      ['In a race, 1st is the winner, then 2nd, then 3rd.', C(['🥇 1st', '🥈 2nd', '🥉 3rd'])],
      ['Say them: first, second, third, fourth, fifth, sixth, seventh, eighth, ninth, tenth.', C(['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th'])]],
    [['Ella is 5th in a queue. How many people are in front of her?', ['5th means 5 places from the front.', 'The 4 places before her are in front.'], '4 people are in front of Ella.', C(['1st', '2nd', '3rd', '4th', '5th: Ella'])],
      ['What comes after 8th?', ['Count on one.', 'After eighth comes ninth.'], '9th', C(['7th', '8th', '9th'])],
      ['The race ends: Ben is 3rd. Dev is one place behind Ben. What is Dev’s place?', ['Behind means one more.', '3 + 1 = 4.'], 'Dev is 4th.', C(['3rd: Ben', '4th: Dev'])]],
    ['Ordinals are for order. 3 is a number. 3rd is a place.', C(['3 apples', '3rd place'])],
    ['What position comes after <b>6th</b>?', '', ['5th', '7th', '8th'], '7th', 'After 6th comes 7th.', 'Count on one more.'],
    ['Ordinal numbers show position: 1st, 2nd, 3rd...', C(['1st', '2nd', '3rd', '4th'])]]);
  addQ(301, qOdd3); addQ(301, qOrd);
  lab(301, 'fl9', 'Odd or even', 'Say if each number is odd or even.', qOdd3, 'fox'); lab(301, 'fl10', 'What place?', 'Use first, second, third and more.', qOrd, 'pirate');

  /* ======================= P4 · 403 Division with remainders ======================= */
  function qRem() { var d = pick([2, 3, 4, 5, 10]), q = r(2, 9), rem = r(1, d - 1), n = d * q + rem, t = r(0, 1); if (t === 0) return Q('Remainders', '<b>' + n + ' ÷ ' + d + '</b>. Write the answer like 4 r 2 (with a space).', q + ' r ' + rem, ['Find the biggest ' + d + ' times table fact that fits.', d + ' × ' + q + ' = ' + d * q + '.'], d + ' × ' + q + ' = ' + d * q + ' and ' + n + ' − ' + d * q + ' = ' + rem + ', so ' + n + ' ÷ ' + d + ' = ' + q + ' r ' + rem + '.'); return Q('Remainders', 'Share <b>' + n + '</b> sweets equally between <b>' + d + '</b> children. How many are left over?', rem, ['Find ' + d + ' × something that is just under ' + n + '.', d + ' × ' + q + ' = ' + d * q + '.'], d + ' × ' + q + ' = ' + d * q + ', so ' + n + ' − ' + d * q + ' = ' + rem + ' are left over.'); }
  LI(403, 'learn5', ['Division with remainders', 'What if a division does not come out exactly?',
    'Sometimes we cannot share equally. What is left over is called the remainder. 14 ÷ 4 = 3 remainder 2.', SAY('fox', '14 ÷ 4 = 3 r 2'),
    [['remainder', 'what is left over', '🧩'], ['divide', 'share into equal groups', '➗'], ['equal groups', 'the same amount in each', '🟰'], ['r', 'short for remainder', '✍️']],
    [['Finn shares 14 apples between 4 baskets. He puts 3 in each basket.', grp(4, 3, 'apple')],
      ['4 baskets of 3 is 12 apples. 2 apples are left over.', C(['4 × 3 = 12', '14 − 12 = 2'])],
      ['We write: 14 ÷ 4 = 3 remainder 2.', B('14 ÷ 4 = 3 r 2')]],
    [['What is 17 ÷ 5?', ['5 × 3 = 15 is just under 17.', '17 − 15 = 2.'], '17 ÷ 5 = 3 r 2', B('17 ÷ 5 = 3 r 2')],
      ['What is 11 ÷ 2?', ['2 × 5 = 10 is just under 11.', '11 − 10 = 1.'], '11 ÷ 2 = 5 r 1', B('11 ÷ 2 = 5 r 1')],
      ['What is 23 ÷ 10?', ['10 × 2 = 20 is just under 23.', '23 − 20 = 3.'], '23 ÷ 10 = 2 r 3', B('23 ÷ 10 = 2 r 3')]],
    ['The remainder must be smaller than the number you divide by. 14 ÷ 4 = 2 r 6 is wrong. Try a bigger answer: 3 r 2.', C(['3 r 2 ✓', '2 r 6 ✗'])],
    ['What is <b>13 ÷ 4</b>?', '', ['3 r 1', '4 r 1', '3 r 2'], '3 r 1', '4 × 3 = 12 and 13 − 12 = 1.', 'Find the biggest 4 times table fact that fits.'],
    ['Divide, then see what is left over. The remainder is smaller than the divisor.', C(['find the table fact', 'subtract', 'remainder'])]]);
  addQ(403, qRem); lab(403, 'fl9', 'Left over', 'Find the remainder.', qRem, 'fox');

  /* ======================= P4 · 404 Equivalent fractions ======================= */
  function qEq() { var T = [[1, 2], [1, 4], [1, 3], [3, 4], [2, 3], [1, 5]], b = pick(T), k = pick([2, 3, 4, 5]), a = b[0], d = b[1], t = r(0, 1); if (t === 0) return Q('Equivalent fractions', a + '/' + d + ' = ?/' + d * k + '. What is the missing top number?', a * k, ['The bottom number was multiplied by ' + k + '.', 'Do the same to the top number.'], a + ' × ' + k + ' = ' + a * k + ', so ' + a + '/' + d + ' = ' + a * k + '/' + d * k + '.'); return MC('Equivalent fractions', 'Which fraction is the same as <b>' + a + '/' + d + '</b>?', a * k + '/' + d * k, [(a * k + 1) + '/' + d * k, a * k + '/' + (d * k + 1), (a + 1) + '/' + d * k], ['Multiply the top and the bottom by the same number.'], a + '/' + d + ' = ' + a * k + '/' + d * k + ' (top and bottom × ' + k + ').'); }
  LI(404, 'learn5', ['Equivalent fractions', 'How can different fractions be the same amount?',
    'Equivalent fractions are different fractions that name the same amount. One half is the same as two quarters.', SAY('bear', '1/2 = 2/4'),
    [['equivalent', 'equal in amount', '🟰'], ['numerator', 'the top number', '⬆️'], ['denominator', 'the bottom number', '⬇️'], ['the same amount', 'the same part of the whole', '🍰']],
    [['Benny cuts a cake in 2 and takes 1 piece. Then he cuts the same cake in 4 and takes 2 pieces. It is the same amount.', pies([[2, 1], [4, 2]])],
      ['One half is the same as five tenths.', pies([[2, 1], [10, 5]])],
      ['Multiply the top and bottom by the same number: 1 × 2 = 2 and 2 × 2 = 4.', B('1/2 = 2/4')]],
    [['Is 1/4 the same as 2/8?', ['Multiply the top and the bottom of 1/4 by 2.', '1 × 2 = 2 and 4 × 2 = 8.'], 'Yes, 1/4 = 2/8.', pies([[4, 1], [8, 2]])],
      ['What is 1/3 as sixths?', ['Multiply the top and bottom by 2.', '1 × 2 = 2 and 3 × 2 = 6.'], '1/3 = 2/6', pies([[3, 1], [6, 2]])],
      ['What is 3/4 as eighths?', ['Multiply the top and bottom by 2.', '3 × 2 = 6 and 4 × 2 = 8.'], '3/4 = 6/8', pies([[4, 3], [8, 6]])]],
    ['Change the top and the bottom. Only changing one of them changes the amount.', C(['1/2 = 2/4 ✓', '1/2 = 1/4 ✗'])],
    ['<b>1/2</b> is the same as which fraction?', pies([[2, 1]]), ['2/3', '2/4', '1/4'], '2/4', '1 × 2 = 2 and 2 × 2 = 4, so 1/2 = 2/4.', 'Multiply the top and bottom by 2.'],
    ['Multiply (or divide) the top and bottom by the same number to find an equivalent fraction.', C(['same number', 'top and bottom'])]]);
  addQ(404, qEq); lab(404, 'fl9', 'Same amount', 'Find the equivalent fraction.', qEq, 'bear');

  /* ======================= P4 · 407 Mass and capacity ======================= */
  function qMC4() { var t = r(0, 3), n = r(2, 9); if (t === 0) return Q('Mass', 'How many grams are in <b>' + n + ' kg</b>?', n * 1000, ['1 kg is 1000 g.'], n + ' × 1000 = ' + n * 1000 + ' g.'); if (t === 1) return Q('Capacity', 'How many millilitres are in <b>' + n + ' litres</b>?', n * 1000, ['1 litre is 1000 ml.'], n + ' × 1000 = ' + n * 1000 + ' ml.'); if (t === 2) return Q('Mass', '<b>' + n * 1000 + ' g</b> is how many kg?', n, ['1000 g is 1 kg.'], n * 1000 + ' ÷ 1000 = ' + n + ' kg.'); return MC('Capacity', 'Which unit would you use to measure the water in a <b>' + pick(['bath', 'swimming pool', 'bucket']) + '</b>?', 'litres', ['millilitres', 'grams'], ['A large amount of water is measured in litres.'], 'Big amounts of liquid are measured in litres.'); }
  LI(407, 'learn5', ['Mass and capacity', 'How do I measure how heavy and how much it holds?',
    'We measure mass in grams (g) and kilograms (kg). We measure capacity in millilitres (ml) and litres (l). 1 kg = 1000 g and 1 litre = 1000 ml.', SAY('frog', '1 kg = 1000 g'),
    [['gram (g)', 'a small unit of mass', '🪶'], ['kilogram (kg)', '1000 grams', '🏋️'], ['millilitre (ml)', 'a small unit of capacity', '💧'], ['litre (l)', '1000 millilitres', '🥛']],
    [['Frankie weighs a bag of flour. It is 1 kilogram, the same as 1000 grams.', C(['1 kg', '=', '1000 g'])],
      ['A bottle of water holds 1 litre, the same as 1000 millilitres.', C(['1 litre', '=', '1000 ml'])],
      ['Half a kilogram is 500 g. Half a litre is 500 ml.', C(['1/2 kg = 500 g', '1/2 litre = 500 ml'])]],
    [['How many grams are in 3 kg?', ['1 kg is 1000 g.', '3 × 1000 = 3000.'], '3 kg = 3000 g', B('3 kg = 3000 g')],
      ['How many litres are in 4000 ml?', ['1000 ml is 1 litre.', '4000 ÷ 1000 = 4.'], '4000 ml = 4 litres', B('4000 ml = 4 litres')],
      ['Which is heavier: 800 g or 1 kg?', ['Change 1 kg to grams: 1000 g.', '1000 is more than 800.'], '1 kg is heavier.', C(['800 g', '1 kg = 1000 g'])]],
    ['Check the units first. 500 g is not 500 kg.', C(['500 g ✓ a bag of sugar', '500 kg ✗ too heavy'])],
    ['How many millilitres are in <b>2 litres</b>?', '', [200, 2000, 20], 2000, '1 litre is 1000 ml, so 2 litres is 2000 ml.', '1 litre = 1000 ml.'],
    ['1 kg = 1000 g. 1 litre = 1000 ml.', C(['kg → g', 'litres → ml', '× 1000'])]]);
  addQ(407, qMC4); lab(407, 'fl9', 'Grams and litres', 'Change between units.', qMC4, 'frog');

  /* ======================= P4 · 408 Properties of shapes, symmetry ======================= */
  var SOLID = [['cube', 6, 12, 8], ['cuboid', 6, 12, 8], ['square-based pyramid', 5, 8, 5], ['triangular prism', 5, 9, 6]];
  function qProp() { var s = pick(SOLID), t = r(0, 2), w = ['faces', 'edges', 'corners'][t], ans = s[t + 1]; return Q('Properties of 3D shapes', 'How many <b>' + w + '</b> does a <b>' + s[0] + '</b> have?', ans, ['Picture the shape and count ' + w + ' one at a time.', 'Faces are flat sides. Edges are where two faces meet. Corners are where edges meet.'], 'A ' + s[0] + ' has ' + ans + ' ' + w + '.'); }
  LI(408, 'learn5', ['Properties of shapes', 'How do I describe 2D and 3D shapes?',
    'We describe shapes by counting. A 2D shape has sides and corners. A 3D shape has faces, edges and corners.', FL.shapeRow(['cube', 'cylinder', 'cone'], 84),
    [['face', 'a flat side of a 3D shape', '🟦'], ['edge', 'where two faces meet', '〰️'], ['corner', 'where edges meet (vertex)', '📍'], ['side', 'a straight edge of a 2D shape', '📏']],
    [['A 2D shape: a triangle has 3 sides and 3 corners.', FL.shapeRow(['triangle'], 100)],
      ['A cube is a 3D shape. It has 6 flat faces.', FL.shapeRow(['cube'], 110)],
      ['A cube has 6 faces, 12 edges and 8 corners.', C(['6 faces', '12 edges', '8 corners'])]],
    [['How many sides and corners has a rectangle?', ['Count the straight sides: 4.', 'Count the corners: 4.'], 'A rectangle has 4 sides and 4 corners.', FL.shapeRow(['rectangle'], 100)],
      ['How many faces has a cuboid?', ['A cuboid is like a box.', 'It has a top, a bottom and 4 sides.'], 'A cuboid has 6 faces.', FL.shapeRow(['cuboid'], 110)],
      ['A square-based pyramid has a square base and triangle sides. How many faces?', ['1 square base.', '4 triangle faces.', '1 + 4 = 5.'], 'It has 5 faces.', FL.shapeRow(['pyramid'], 110)]],
    ['Faces, edges and corners are different. A face is flat. An edge is a line.', C(['face: flat side', 'edge: a line', 'corner: a point'])],
    ['How many faces has a <b>cube</b>?', FL.shapeRow(['cube'], 90), [4, 6, 8], 6, 'A cube has 6 square faces: top, bottom and 4 sides.', 'Count the flat sides.'],
    ['Count the sides and corners of 2D shapes. Count the faces, edges and corners of 3D shapes.', C(['2D: sides, corners', '3D: faces, edges, corners'])]]);
  function sym(kind) { var lines = { square: ['<line x1="50" y1="14" x2="50" y2="86"/>', '<line x1="14" y1="50" x2="86" y2="50"/>', '<line x1="14" y1="14" x2="86" y2="86"/>', '<line x1="86" y1="14" x2="14" y2="86"/>'], rectangle: ['<line x1="50" y1="14" x2="50" y2="86"/>', '<line x1="12" y1="50" x2="88" y2="50"/>'], triangle: ['<line x1="50" y1="14" x2="50" y2="90"/>'] }, body = { square: '<rect x="24" y="24" width="52" height="52" fill="#ffd166" stroke="' + INK + '" stroke-width="3"/>', rectangle: '<rect x="14" y="30" width="72" height="40" fill="#ffd166" stroke="' + INK + '" stroke-width="3"/>', triangle: '<polygon points="50,22 18,78 82,78" fill="#ffd166" stroke="' + INK + '" stroke-width="3"/>', lshape: '<polygon points="24,22 50,22 50,56 78,56 78,78 24,78" fill="#ffd166" stroke="' + INK + '" stroke-width="3"/>' };
    return '<svg viewBox="0 0 100 100" role="img" aria-label="' + kind + (lines[kind] ? ' with ' + lines[kind].length + ' lines of symmetry' : ' with no line of symmetry') + '" style="width:110px;max-width:100%;height:auto">' + body[kind] + '<g stroke="#e63946" stroke-width="3" stroke-dasharray="6 4">' + (lines[kind] || []).join('') + '</g></svg>'; }
  function symRow(ks) { return '<div style="display:flex;gap:14px;justify-content:center;flex-wrap:wrap">' + ks.map(function (k) { return '<div style="text-align:center;font-weight:800">' + sym(k[0]) + '<div>' + k[1] + '</div></div>'; }).join('') + '</div>'; }
  function qSym() { var P = [['square', 4], ['rectangle', 2], ['equilateral triangle', 3], ['circle', 'lots']], t = r(0, 1); if (t === 0) { var p = pick([['square', 4], ['rectangle', 2]]); return Q('Symmetry', 'How many lines of symmetry does a <b>' + p[0] + '</b> have?', p[1], ['A line of symmetry folds the shape into two matching halves.', 'Try folding it up and down, side to side and corner to corner.'], 'A ' + p[0] + ' has ' + p[1] + ' lines of symmetry.'); } var x = pick(['A', 'B', 'C', 'H', 'M', 'T']), up = ['A', 'H', 'M', 'T'].indexOf(x) > -1; return MC('Symmetry', 'Does the capital letter <b>' + x + '</b> have a line of symmetry up and down?', up ? 'yes' : 'no', [up ? 'no' : 'yes'], ['Imagine a mirror line down the middle.'], x + (up ? ' looks the same on each side of the middle line.' : ' does not match on both sides of an up-and-down line.')); }
  LI(408, 'learn6', ['Symmetry', 'What is a line of symmetry?',
    'A line of symmetry cuts a shape into two halves that match exactly. Fold along it and the two halves fit on top of each other.', symRow([['square', 'square']]),
    [['symmetry', 'both halves match', '🦋'], ['line of symmetry', 'a fold line that makes matching halves', '📐'], ['mirror line', 'the same as a line of symmetry', '🪞'], ['fold', 'bend along a line', '📄']],
    [['Fold a rectangle in half the long way. The two halves match.', symRow([['rectangle', 'rectangle']])],
      ['A square has 4 lines of symmetry: up and down, across, and 2 corner to corner.', symRow([['square', 'square: 4 lines']])],
      ['A triangle with 2 equal sides has 1 line of symmetry.', symRow([['triangle', 'triangle: 1 line']])]],
    [['How many lines of symmetry does a rectangle have?', ['Fold it up and down: it matches.', 'Fold it side to side: it matches.', 'Corner to corner does not match.'], 'A rectangle has 2 lines of symmetry.', symRow([['rectangle', 'rectangle']])],
      ['Does this L shape have a line of symmetry?', ['Try folding it in each way.', 'The two halves never match.'], 'No, an L shape has no line of symmetry.', symRow([['lshape', 'L shape']])],
      ['How many lines of symmetry does a square have?', ['Up and down, side to side.', 'Plus 2 corner to corner.', '2 + 2 = 4.'], 'A square has 4 lines of symmetry.', symRow([['square', 'square']])]],
    ['Both halves must match exactly. A line that just cuts the shape in two is not always a line of symmetry.', C(['halves match ✓', 'halves different ✗'])],
    ['How many lines of symmetry does a <b>rectangle</b> have?', symRow([['rectangle', '']]), [1, 2, 4], 2, 'A rectangle has 2 lines of symmetry: up and down, and side to side.', 'Try folding each way.'],
    ['A line of symmetry makes two halves that match.', C(['fold', 'halves match'])]]);
  addQ(408, qProp); addQ(408, qSym); lab(408, 'fl9', 'Faces and corners', 'Count the faces, edges and corners.', qProp, 'pirate'); lab(408, 'fl10', 'Lines of symmetry', 'Find the lines of symmetry.', qSym, 'pirate');
  qRem.life = true;
})();
