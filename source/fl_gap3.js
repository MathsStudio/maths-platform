/* fl_gap3.js: Watch lessons (Watch me, Let's do it together, Your turn) for the new Let's learn lessons in fl_gap.js,
   so every Let's learn lesson has a Watch lesson. Also the Measuring topic (P2) with its own story, and the order of the
   steps: Let's learn lessons first, worked examples last. */
(function () {
  'use strict';
  var FL = window.FL, BT = window.BT, S = window.Studio; if (!FL || !FL.addWatch || !BT || !S) return;
  var P = FL.panel, TH = FL.things, B = FL.big, C = FL.cards, shuffle = FL.shuffle;
  var INK = '#2b2340';
  function box(inner) { return '<div style="border:3px dashed ' + INK + ';border-radius:14px;padding:6px;background:#fff;max-width:170px">' + inner + '</div>'; }
  function grp(k, n, kind) { var o = []; for (var i = 0; i < k; i++) o.push(box(TH(n, kind, 5))); return '<div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">' + o.join('') + '</div>'; }
  function bar(n, col) { var s = ''; for (var i = 0; i < n; i++) s += '<span style="display:inline-block;width:26px;height:26px;background:' + (col || '#ffb703') + ';border:2px solid ' + INK + ';margin-right:-2px"></span>'; return '<div style="display:flex;justify-content:center;flex-wrap:wrap">' + s + '</div>'; }
  function rowBars(items) { return '<div style="display:grid;gap:8px;justify-items:center">' + items.map(function (x) { return '<div style="display:flex;align-items:center;gap:10px"><b style="min-width:80px;text-align:right;color:#fff">' + x[0] + '</b>' + bar(x[1], x[2]) + '</div>'; }).join('') + '</div>'; }
  function pies(list) { return '<div style="display:flex;gap:14px;justify-content:center;flex-wrap:wrap;align-items:center">' + list.map(function (p, i) { return (i ? '<b style="font-size:2em;color:#fff">=</b>' : '') + '<div style="text-align:center;font-weight:800;max-width:120px;color:#fff">' + FL.pie(p[0], p[1]) + '<div>' + p[1] + '/' + p[0] + '</div></div>'; }).join('') + '</div>'; }
  function sym(kind) { var lines = { square: ['<line x1="50" y1="14" x2="50" y2="86"/>', '<line x1="14" y1="50" x2="86" y2="50"/>', '<line x1="14" y1="14" x2="86" y2="86"/>', '<line x1="86" y1="14" x2="14" y2="86"/>'], rectangle: ['<line x1="50" y1="14" x2="50" y2="86"/>', '<line x1="12" y1="50" x2="88" y2="50"/>'], triangle: ['<line x1="50" y1="14" x2="50" y2="90"/>'] }, body = { square: '<rect x="24" y="24" width="52" height="52" fill="#ffd166" stroke="' + INK + '" stroke-width="3"/>', rectangle: '<rect x="14" y="30" width="72" height="40" fill="#ffd166" stroke="' + INK + '" stroke-width="3"/>', triangle: '<polygon points="50,22 18,78 82,78" fill="#ffd166" stroke="' + INK + '" stroke-width="3"/>', lshape: '<polygon points="24,22 50,22 50,56 78,56 78,78 24,78" fill="#ffd166" stroke="' + INK + '" stroke-width="3"/>' };
    return '<svg viewBox="0 0 100 100" role="img" aria-label="' + kind + (lines[kind] ? ' with ' + lines[kind].length + ' lines of symmetry' : ' with no line of symmetry') + '" style="width:110px;max-width:100%;height:auto">' + body[kind] + '<g stroke="#e63946" stroke-width="3" stroke-dasharray="6 4">' + (lines[kind] || []).join('') + '</g></svg>'; }
  function symRow(ks) { return '<div style="display:flex;gap:14px;justify-content:center;flex-wrap:wrap">' + ks.map(function (k) { return '<div style="text-align:center;font-weight:800;color:#fff">' + sym(k[0]) + '<div>' + k[1] + '</div></div>'; }).join('') + '</div>'; }
  /* rows: ['w', say, pic] watch; ['t'|'u', say, pic, tip, options, answer, explain] together or your turn */
  function WL(title, char, bg, rows) {
    return { title: title, char: char, screens: rows.map(function (r) { var o = { mode: r[0] === 'w' ? 'watch' : r[0] === 't' ? 'together' : 'turn', say: r[1], pic: P(bg, '', r[2]) }; if (r[0] !== 'w') { o.tip = r[3]; o.options = r[4]; o.answer = r[5]; o.explain = r[6]; } return o; }) };
  }
  function QP(q, options, answer, explain) { return { q: q, options: options, answer: answer, explain: explain }; }

  /* ---------- P2 · 206 Measuring (new topic, with a story) ---------- */
  var STORY206 = (function () {
    var PG = function (pic, text, ask, askPic) { return { pic: pic, text: text, ask: ask, askPic: askPic }; };
    return { title: 'Ollie’s Nest', intro: 'Ollie’s Nest.',
        endPic: P('day', 'owl', B('A strong, safe nest!')),
        endText: 'Ollie’s nest is finished. It is long enough, strong enough and full of water for the chicks. Well done for measuring with Ollie!',
        pages: [
          PG(P('day', 'owl', ''), 'This is Ollie the owl. Ollie is building a nest for her chicks. She needs to measure lots of things.'),
          PG(P('day', 'owl', rowBars([['red stick', 8, '#e76f51'], ['green stick', 5, '#2a9d8f']])), 'Ollie finds two sticks. She lines them up at one end and measures them with cubes.', QP('Which stick is longer?', ['the red stick', 'the green stick'], 'the red stick', 'The red stick is 8 cubes and the green stick is 5 cubes. Eight is more than five.')),
          PG(P('day', 'owl', rowBars([['red stick', 8, '#e76f51'], ['green stick', 5, '#2a9d8f']])), 'The red stick is 8 cubes long. The green stick is 5 cubes long.', QP('How many more cubes is the red stick?', [2, 3, 4], 3, 'Count on from five to eight: six, seven, eight. That is three more.')),
          PG(P('day', 'owl', C(['a stone', 'a feather'])), 'Ollie lifts a stone in one wing and a feather in the other.', QP('Which is heavier?', ['the stone', 'the feather'], 'the stone', 'The stone is hard to lift, so it is heavier. The feather is lighter.')),
          PG(P('day', 'owl', C(['feather', 'twig', 'stone'])), 'Ollie puts her things in order, from lightest to heaviest.', QP('Which is the heaviest?', ['feather', 'twig', 'stone'], 'stone', 'The stone is the heaviest. The feather is the lightest.')),
          PG(P('day', 'owl', C(['🪣 bucket', '🥤 cup'])), 'The chicks are thirsty. Ollie has a bucket and a cup to fetch water.', QP('Which holds more water?', ['the bucket', 'the cup'], 'the bucket', 'The bucket is bigger, so it holds more.')),
          PG(P('day', 'owl', C(['🪣 full', '🪣 empty'])), 'Ollie fills the bucket to the top. Now it cannot hold any more.', QP('The bucket holds as much as it can. Is it full or empty?', ['full', 'empty'], 'full', 'Full means it holds as much as it can.'))
        ] };
  })();

  var W = {};
  W[201] = [WL('What are odd and even numbers?', 'rocket', 'space', [
    ['w', 'Ruby puts six stars into pairs. Every star has a partner. Six is an even number.', TH(6, 'star', 2)],
    ['w', 'Now seven stars. Three pairs, and one star has no partner. Seven is an odd number.', TH(7, 'star', 2)],
    ['w', 'Even numbers: two, four, six, eight, ten. Odd numbers: one, three, five, seven, nine.', C(['2', '4', '6', '8', '10']) + '<div style="height:8px"></div>' + C(['1', '3', '5', '7', '9'])],
    ['t', 'Ruby has eight stars. Make pairs. Is eight odd or even?', TH(8, 'star', 2), 'Put the stars in pairs. Is one left over?', ['odd', 'even'], 'even', 'Four pairs and none left over, so eight is even.'],
    ['t', 'Ruby has nine stars. Odd or even?', TH(9, 'star', 2), 'Make pairs. Look for a star with no partner.', ['odd', 'even'], 'odd', 'Four pairs and one left over, so nine is odd.'],
    ['u', 'Is twelve odd or even? Look at the last digit.', B('12'), 'The last digit is 2.', ['odd', 'even'], 'even', 'The last digit is 2, an even digit, so twelve is even.'],
    ['u', 'Is fifteen odd or even?', B('15'), 'Look at the last digit, 5.', ['odd', 'even'], 'odd', 'The last digit is 5, an odd digit, so fifteen is odd.']])];
  W[202] = [WL('How can equal groups help me add?', 'bear', 'kitchen', [
    ['w', 'Benny puts two buns on each of three plates. Every plate has the same, so they are equal groups.', grp(3, 2, 'apple')],
    ['w', 'Count them: two, four, six. There are six buns altogether.', C(['2', '4', '6'])],
    ['w', 'We can write it as an adding sum: two plus two plus two makes six.', B('2 + 2 + 2 = 6')],
    ['t', 'Three bags with five sweets in each bag. How many sweets altogether?', grp(3, 5, 'sweet'), 'Count in fives: five, ten, fifteen.', [10, 15, 20], 15, 'Five and five and five make fifteen.'],
    ['t', 'Two plates with four apples on each plate. How many apples?', grp(2, 4, 'apple'), 'Add four and four.', [6, 8, 10], 8, 'Four and four make eight.'],
    ['u', 'Four pots with two flowers in each pot. How many flowers?', grp(4, 2, 'flower'), 'Count in twos.', [6, 8, 10], 8, 'Two, four, six, eight.'],
    ['u', 'Three boxes with two pens in each box. How many pens?', grp(3, 2, 'star'), 'Add two three times.', [5, 6, 8], 6, 'Two and two and two make six.']])];
  W[301] = [WL('How can I tell if a number is odd or even?', 'pirate', 'sea', [
    ['w', 'Captain Pip counts his coins. If he can share them into two equal piles with none left, the number is even.', TH(8, 'apple', 4)],
    ['w', 'If one coin is left over, the number is odd.', TH(7, 'apple', 4)],
    ['w', 'Look at the last digit. If it is 0, 2, 4, 6 or 8 the number is even. If it is 1, 3, 5, 7 or 9 the number is odd.', C(['even: 0 2 4 6 8', 'odd: 1 3 5 7 9'])],
    ['t', 'Is forty-seven odd or even?', B('47'), 'Look at the ones digit, 7.', ['odd', 'even'], 'odd', 'The last digit is 7, so forty-seven is odd.'],
    ['t', 'Is sixty odd or even?', B('60'), 'The ones digit is 0.', ['odd', 'even'], 'even', 'The last digit is 0, so sixty is even.'],
    ['u', 'Is eighty-five odd or even?', B('85'), 'Look at the last digit.', ['odd', 'even'], 'odd', 'The last digit is 5, so eighty-five is odd.'],
    ['u', 'Is seventy-two odd or even?', B('72'), 'Only the last digit matters.', ['odd', 'even'], 'even', 'The last digit is 2, so seventy-two is even.']]),
    WL('What do first, second and third mean?', 'pirate', 'sea', [
    ['w', 'Four pirates line up. The one at the front is first. Then second, third and fourth.', C(['1st', '2nd', '3rd', '4th'])],
    ['w', 'In a race, first is the winner. Then second and third.', C(['🥇 1st', '🥈 2nd', '🥉 3rd'])],
    ['w', 'Say them: first, second, third, fourth, fifth, sixth, seventh, eighth, ninth, tenth.', C(['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th'])],
    ['t', 'Ella is fifth in the queue. How many people are in front of her?', C(['1st', '2nd', '3rd', '4th', '5th: Ella']), 'Count the places before fifth.', [3, 4, 5], 4, 'Places one to four are in front of her: four people.'],
    ['t', 'What comes after eighth?', C(['7th', '8th', '?']), 'Count on one more.', ['7th', '9th', '10th'], '9th', 'After eighth comes ninth.'],
    ['u', 'Ben is third. Dev is one place behind. What is Dev’s place?', C(['3rd: Ben', '?: Dev']), 'Behind means one more.', ['2nd', '4th', '5th'], '4th', 'Three and one more is four, so Dev is fourth.'],
    ['u', 'What comes after sixth?', C(['5th', '6th', '?']), 'Count on one.', ['5th', '7th', '8th'], '7th', 'After sixth comes seventh.']])];
  W[403] = [WL('What if a division does not come out exactly?', 'fox', 'farm', [
    ['w', 'Finn shares fourteen apples between four baskets. He puts three in each basket.', grp(4, 3, 'apple')],
    ['w', 'Four baskets of three is twelve apples. Two apples are left over.', C(['4 × 3 = 12', '14 − 12 = 2'])],
    ['w', 'We write: fourteen divided by four is three remainder two.', B('14 ÷ 4 = 3 r 2')],
    ['t', 'Seventeen divided by five. Five times three is fifteen. What is left over?', B('17 ÷ 5'), 'Take fifteen away from seventeen.', [1, 2, 3], 2, 'Seventeen take away fifteen is two. 17 ÷ 5 = 3 r 2.'],
    ['t', 'Eleven divided by two. Two times five is ten. What is the remainder?', B('11 ÷ 2'), 'Eleven take away ten.', [0, 1, 2], 1, 'Eleven take away ten is one. 11 ÷ 2 = 5 r 1.'],
    ['u', 'What is twenty-three divided by ten?', B('23 ÷ 10'), 'Ten times two is twenty. What is left?', ['2 r 3', '3 r 2', '2 r 13'], '2 r 3', 'Ten times two is twenty and three is left over: 2 r 3.'],
    ['u', 'What is thirteen divided by four?', B('13 ÷ 4'), 'Four times three is twelve.', ['3 r 1', '4 r 1', '3 r 2'], '3 r 1', 'Four times three is twelve, and one is left over: 3 r 1.']])];
  W[404] = [WL('How can different fractions be the same amount?', 'bear', 'kitchen', [
    ['w', 'Benny cuts a cake in two and takes one piece. He cuts the same cake in four and takes two pieces. It is the same amount.', pies([[2, 1], [4, 2]])],
    ['w', 'One half is the same as five tenths.', pies([[2, 1], [10, 5]])],
    ['w', 'Multiply the top and the bottom by the same number: one times two is two, and two times two is four.', B('1/2 = 2/4')],
    ['t', 'Is one quarter the same as two eighths?', pies([[4, 1], [8, 2]]), 'Double the top and the bottom of one quarter.', ['yes', 'no'], 'yes', 'One times two is two and four times two is eight, so 1/4 = 2/8.'],
    ['t', 'What is one third as sixths?', pies([[3, 1], [6, 2]]), 'Multiply the top and bottom by two.', ['1/6', '2/6', '3/6'], '2/6', 'One times two is two and three times two is six.'],
    ['u', 'One half is the same as which fraction?', pies([[2, 1]]), 'Multiply the top and bottom by two.', ['2/3', '2/4', '1/4'], '2/4', 'One times two is two and two times two is four.'],
    ['u', 'Three quarters is the same as how many eighths?', pies([[4, 3], [8, 6]]), 'Double the top and the bottom.', ['5/8', '6/8', '7/8'], '6/8', 'Three times two is six and four times two is eight.']])];
  W[407] = [WL('How do I measure how heavy and how much it holds?', 'frog', 'pond', [
    ['w', 'Frankie weighs a bag of flour. It is one kilogram, the same as one thousand grams.', C(['1 kg', '=', '1000 g'])],
    ['w', 'A bottle of water holds one litre, the same as one thousand millilitres.', C(['1 litre', '=', '1000 ml'])],
    ['w', 'Half a kilogram is five hundred grams. Half a litre is five hundred millilitres.', C(['1/2 kg = 500 g', '1/2 litre = 500 ml'])],
    ['t', 'How many grams are in three kilograms?', B('3 kg = ? g'), 'One kilogram is one thousand grams.', [300, 3000, 30], 3000, 'Three times one thousand is three thousand grams.'],
    ['t', 'How many litres are in four thousand millilitres?', B('4000 ml = ? litres'), 'One thousand millilitres is one litre.', [4, 40, 400], 4, 'Four thousand divided by one thousand is four litres.'],
    ['u', 'Which is heavier: eight hundred grams or one kilogram?', C(['800 g', '1 kg']), 'Change one kilogram to grams.', ['800 g', '1 kg'], '1 kg', 'One kilogram is one thousand grams, and that is more than eight hundred.'],
    ['u', 'How many millilitres are in two litres?', B('2 litres = ? ml'), 'One litre is one thousand millilitres.', [200, 2000, 20], 2000, 'Two times one thousand is two thousand millilitres.']])];
  W[408] = [WL('How do I describe 2D and 3D shapes?', 'pirate', 'sea', [
    ['w', 'A 2D shape is flat. A triangle has three sides and three corners.', FL.shapeRow(['triangle'], 100)],
    ['w', 'A cube is a 3D shape. It has six flat faces.', FL.shapeRow(['cube'], 110)],
    ['w', 'A cube has six faces, twelve edges and eight corners.', C(['6 faces', '12 edges', '8 corners'])],
    ['t', 'How many sides and corners has a rectangle?', FL.shapeRow(['rectangle'], 100), 'Count the straight sides.', ['3', '4', '5'], '4', 'A rectangle has four sides and four corners.'],
    ['t', 'How many faces has a cuboid, like a box?', FL.shapeRow(['cuboid'], 110), 'A box has a top, a bottom and four sides.', [4, 6, 8], 6, 'A cuboid has six faces.'],
    ['u', 'A square-based pyramid has one square face and triangle sides. How many faces?', FL.shapeRow(['pyramid'], 110), 'One square and four triangles.', [4, 5, 6], 5, 'One square and four triangles make five faces.'],
    ['u', 'How many faces has a cube?', FL.shapeRow(['cube'], 100), 'Count the flat sides.', [4, 6, 8], 6, 'A cube has six square faces.']]),
    WL('What is a line of symmetry?', 'pirate', 'sea', [
    ['w', 'A line of symmetry cuts a shape into two halves that match exactly. Fold along it and the halves fit.', symRow([['square', 'square']])],
    ['w', 'A rectangle has two lines of symmetry: up and down, and side to side.', symRow([['rectangle', 'rectangle: 2 lines']])],
    ['w', 'A triangle with two equal sides has one line of symmetry.', symRow([['triangle', 'triangle: 1 line']])],
    ['t', 'How many lines of symmetry does a rectangle have?', symRow([['rectangle', '']]), 'Fold it up and down, then side to side.', [1, 2, 4], 2, 'A rectangle has two lines of symmetry.'],
    ['t', 'Does this L shape have a line of symmetry?', symRow([['lshape', 'L shape']]), 'Try folding it each way.', ['yes', 'no'], 'no', 'The two halves never match, so an L shape has no line of symmetry.'],
    ['u', 'How many lines of symmetry does a square have?', symRow([['square', '']]), 'Up and down, side to side, and two corner to corner.', [2, 4, 8], 4, 'A square has four lines of symmetry.'],
    ['u', 'How many lines of symmetry does this triangle have?', symRow([['triangle', '']]), 'Two sides are equal.', [0, 1, 3], 1, 'It has one line of symmetry, down the middle.']])];
  W[206] = [
    WL('How do I find out which is longer?', 'owl', 'day', [
      ['w', 'Ollie has a pencil and a crayon. She lines up the ends. The pencil sticks out, so it is longer.', rowBars([['pencil', 8, '#e76f51'], ['crayon', 5, '#2a9d8f']])],
      ['w', 'We can measure with cubes put end to end. The pencil is eight cubes long and the crayon is five.', C(['pencil: 8 cubes', 'crayon: 5 cubes'])],
      ['w', 'Longer means more length. Shorter means less length.', C(['longer', 'shorter'])],
      ['t', 'A rope is seven cubes long. A ribbon is four cubes long. Which is longer?', rowBars([['rope', 7, '#e76f51'], ['ribbon', 4, '#2a9d8f']]), 'Compare seven and four.', ['the rope', 'the ribbon'], 'the rope', 'Seven is more than four.'],
      ['t', 'A straw is three cubes. A stick is six cubes. Which is shorter?', rowBars([['straw', 3, '#e76f51'], ['stick', 6, '#2a9d8f']]), 'Shorter means less.', ['the straw', 'the stick'], 'the straw', 'Three is less than six.'],
      ['u', 'A snake is nine cubes long and a worm is six. Which is longer?', rowBars([['snake', 9, '#e76f51'], ['worm', 6, '#2a9d8f']]), 'Compare the numbers.', ['the snake', 'the worm'], 'the snake', 'Nine is more than six.'],
      ['u', 'A leaf is five cubes and a string is nine cubes. How many more cubes is the string?', rowBars([['leaf', 5, '#e76f51'], ['string', 9, '#2a9d8f']]), 'Count on from five to nine.', [3, 4, 5], 4, 'Six, seven, eight, nine. That is four more.']]),
    WL('How do I find out which is heavier?', 'owl', 'day', [
      ['w', 'Ollie holds a brick in one wing and a feather in the other. The brick is hard to lift.', C(['brick: heavy', 'feather: light'])],
      ['w', 'On a balance the heavier side goes down. The brick goes down.', C(['⬇️ brick (heavier)', '⬆️ feather (lighter)'])],
      ['w', 'Heavier means more mass. Lighter means less mass.', C(['heavier', 'lighter'])],
      ['t', 'Which is heavier: a car or a pencil?', C(['car', 'pencil']), 'Which is harder to lift?', ['the car', 'the pencil'], 'the car', 'A car is very heavy.'],
      ['t', 'Which is lighter: a mouse or an elephant?', C(['mouse', 'elephant']), 'Which is easier to lift?', ['the mouse', 'the elephant'], 'the mouse', 'A mouse is much lighter than an elephant.'],
      ['u', 'Which is heavier: a bag of potatoes or a feather?', C(['bag of potatoes', 'feather']), 'Think about lifting each one.', ['the bag of potatoes', 'the feather'], 'the bag of potatoes', 'A bag of potatoes is hard to lift.'],
      ['u', 'Which is the lightest: a feather, a book or a chair?', C(['feather', 'book', 'chair']), 'Which is easiest to lift?', ['feather', 'book', 'chair'], 'feather', 'The feather is the lightest.']]),
    WL('How do I find out which holds more?', 'owl', 'day', [
      ['w', 'Ollie has a bucket and a cup. Which holds more water? We can fill the cup again and again to fill the bucket.', C(['🪣 bucket', '🥤 cup'])],
      ['w', 'The bucket takes many cups, so the bucket holds more. The cup holds less.', C(['bucket: holds more', 'cup: holds less'])],
      ['w', 'Full means it holds as much as it can. Empty means nothing is inside.', C(['full', 'empty'])],
      ['t', 'Which holds more: a bath or a cup?', C(['bath', 'cup']), 'Which is bigger?', ['the bath', 'the cup'], 'the bath', 'A bath holds much more than a cup.'],
      ['t', 'Which holds less: a jug or an egg cup?', C(['jug', 'egg cup']), 'Which is tiny?', ['the jug', 'the egg cup'], 'the egg cup', 'An egg cup is very small, so it holds less.'],
      ['u', 'A jug fills four cups. A bottle fills two cups. Which holds more?', C(['jug: 4 cups', 'bottle: 2 cups']), 'Compare four and two.', ['the jug', 'the bottle'], 'the jug', 'Four is more than two.'],
      ['u', 'Which holds more: a swimming pool or a bottle?', C(['swimming pool', 'bottle']), 'Picture filling each one.', ['the swimming pool', 'the bottle'], 'the swimming pool', 'A swimming pool holds far more.']])
  ];
  (function () { var t = S.topics[206]; if (!t) return; var keep = t.steps.filter(function (x) { return x.type === 'slides' || x.fgroup; });
    FL.toWatch(206, STORY206, W[206]);
    keep.forEach(function (x) { if (t.steps.indexOf(x) < 0) t.steps.push(x); }); if (S.arrange) S.arrange(t); })();
  [201, 202, 301, 403, 404, 407, 408].forEach(function (n) { FL.addWatch(n, W[n]); });
  /* worked examples last in the Let's learn list */
  Object.keys(S.topics).forEach(function (k) {
    var t = S.topics[k]; if (!t || !t.steps) return;
    var isWex = function (x) { return /^wex/.test(x.id || ''); };
    var w = t.steps.filter(isWex); if (!w.length) return;
    t.steps = t.steps.filter(function (x) { return !isWex(x); }).concat(w);
    if (S.arrange) S.arrange(t);
  });
})();
