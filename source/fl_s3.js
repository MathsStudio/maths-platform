/* fl_s3.js: P3 stories and story-based lessons (Let's learn) for topics 301 to 308.
   Each lesson keeps the workbook question as its title, and every example and question stays inside the story. */
(function () {
  'use strict';
  var FL = window.FL, BT = window.BT; if (!FL || !FL.addStory || !BT) return;
  var V = BT.sv, P = FL.panel, T = FL.things, G = FL.groups, C = FL.coins, SH = FL.shape, ROW = FL.shapeRow, PIE = FL.pie, INK = '#2b2340';
  function clk(h, m) { return '<div style="width:170px;max-width:100%">' + V.clock(h, m) + '</div>'; }
  function big(t) { return '<div style="font-size:2.2rem;font-weight:800;color:' + INK + ';background:#fff;border:3px solid ' + INK + ';border-radius:16px;padding:6px 18px;text-align:center">' + t + '</div>'; }
  function cards(list) { return '<div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center">' + list.map(function (t) { return '<span style="background:#fff;border:3px solid ' + INK + ';border-radius:14px;padding:6px 12px;font-weight:800;color:' + INK + '">' + t + '</span>'; }).join('') + '</div>'; }
  function hto(h, t, o) { var c = function (v, col) { return '<td style="border:3px solid ' + INK + ';padding:6px 14px;font-size:1.8rem;font-weight:800;background:' + col + '">' + v + '</td>'; };
    return '<table style="border-collapse:collapse;color:' + INK + ';text-align:center"><tr><th style="padding:2px 10px">H</th><th>T</th><th>O</th></tr><tr>' + c(h, '#ffe2ec') + c(t, '#e3f4ff') + c(o, '#fff1c9') + '</tr></table>'; }
  function coinsBox(n) { return '<div style="display:flex;gap:6px;flex-wrap:wrap;justify-content:center">' + Array.apply(null, Array(n)).map(function () { return '<span style="background:#f2c94c;border:3px solid ' + INK + ';border-radius:10px;padding:4px 8px;font-weight:800;color:' + INK + '">100</span>'; }).join('') + '</div>'; }
  function dots(r, c) { return '<div style="width:' + Math.min(260, c * 40) + 'px;max-width:100%">' + V.dots(r, c, '#e0457b') + '</div>'; }
  function trays(n, t) { return '<div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center">' + Array.apply(null, Array(n)).map(function () { return '<div style="background:#fff;border:3px solid ' + INK + ';border-radius:12px;padding:2px;max-width:' + (t > 5 ? 200 : 120) + 'px">' + T(t, 'sweet', 5) + '</div>'; }).join('') + '</div>'; }
  function balance(left, right, heavyLeft) { var tilt = heavyLeft === null ? 0 : heavyLeft ? -12 : 12;
    return FL.svg(260, 170, 'a balance', '<path d="M130 40v110M90 160h80" stroke="' + INK + '" stroke-width="6"/><g transform="rotate(' + tilt + ' 130 40)"><path d="M30 40h200" stroke="' + INK + '" stroke-width="6"/><path d="M10 40h60l-8 22H18z" fill="#ffd166" stroke="' + INK + '" stroke-width="2"/><path d="M190 40h60l-8 22h-44z" fill="#ffd166" stroke="' + INK + '" stroke-width="2"/>' + FL.tx(40, 30, left, 16, INK) + FL.tx(220, 30, right, 16, INK) + '</g>', 300); }
  function jug(fill, label) { return FL.svg(90, 130, 'a jug', '<path d="M15 20h55v95a8 8 0 0 1-8 8H23a8 8 0 0 1-8-8z" fill="#fff" stroke="' + INK + '" stroke-width="3"/><rect x="18" y="' + (120 - fill) + '" width="49" height="' + fill + '" fill="#6cc0e8"/>' + (label ? FL.tx(42, 15, label, 14, INK) : ''), 100); }
  function W(say, pic) { return { mode: 'watch', say: say, pic: pic }; }
  function TG(say, pic, options, answer, tip, explain) { return { mode: 'together', say: say, pic: pic, options: options, answer: answer, tip: tip, explain: explain }; }
  function Y(say, pic, options, answer, tip, explain) { return { mode: 'turn', say: say, pic: pic, options: options, answer: answer, tip: tip, explain: explain }; }
  function pg(pic, text, ask) { return { pic: pic, text: text, ask: ask }; }
  function Q(q, options, answer, explain) { return { q: q, options: options, answer: answer, explain: explain }; }

  /* ================= 301 Numbers: Captain Pip's treasure ================= */
  FL.addStory(301, {
    story: { title: 'Captain Pip’s Treasure Map', endPic: P('sea', 'pirate', big('300 + 5 = 305') + T(5, 'star', 5), 'Treasure!'), endText: 'Captain Pip found the treasure: three hundred and five gold coins! Thank you, shipmate.',
      pages: [
        pg(P('sea', 'pirate', '', 'Ahoy!'), 'Ahoy! I’m Captain Pip. My treasure map is full of number puzzles. Will you help me?'),
        pg(P('sea', 'pirate', big('5, 10, 15, 20, ?')), 'The first clue is a pattern. Five, ten, fifteen, twenty …', Q('What number comes next?', [21, 25, 30], 25, 'The jump is five. Twenty and five make twenty-five.')),
        pg(P('sea', 'pirate', big('200 + 3 = 203') + T(3, 'star', 3)), 'We find two bags of one hundred coins and three loose coins.'),
        pg(P('sea', 'pirate', hto(2, 0, 3)), 'Two hundreds, no tens and three ones make two hundred and three. The zero keeps the tens place.', Q('How many hundreds are in 203?', [0, 2, 3], 2, 'The 2 is in the hundreds column.')),
        pg(P('sea', 'pirate', cards(['Island A: 145', 'Island B: 152'])), 'Two islands. The treasure is on the island with the bigger number.', Q('Which number is bigger?', [145, 152], 152, 'Both have one hundred. Five tens beats four tens.')),
        pg(P('sea', 'pirate', FL.track(30, 40, [38])), 'The treasure is about thirty-eight steps away. Thirty-eight is nearly forty.', Q('Round 38 to the nearest ten.', [30, 40], 40, 'Eight is five or more, so we round up to forty.')),
        pg(P('sea', 'pirate', big('300 + 5 = 305') + T(5, 'star', 5)), 'We dig and find it! Three hundreds and five ones: three hundred and five gold coins.')
      ] },
    learn: [
      { title: 'How can I use number patterns to work out a sequence?', char: 'pirate', screens: [
        W('My map has stepping stones: two, four, six, eight. The jump is two each time.', P('sea', '', FL.track(1, 9, [2, 4, 6, 8], [[2, 4], [4, 6], [6, 8]]))),
        W('Another pattern goes down: ninety, eighty, seventy. The jump is ten back each time.', P('sea', '', big('90, 80, 70, 60'))),
        TG('Find the missing number: ten, fifteen, blank, twenty-five.', P('sea', '', big('10, 15, ?, 25')), [16, 20, 30], 20, 'The jump is five.', 'Ten, fifteen, twenty, twenty-five.'),
        TG('What comes next? Three hundred, four hundred, five hundred …', P('sea', '', big('300, 400, 500, ?')), [501, 550, 600], 600, 'The jump is one hundred.', 'Five hundred and one hundred make six hundred.'),
        Y('What comes next? Fifty, forty, thirty …', P('sea', '', big('50, 40, 30, ?')), [10, 20, 25], 20, 'The numbers go down by ten.', 'Thirty take away ten is twenty.'),
        Y('Find the missing number: two, four, blank, eight.', P('sea', '', big('2, 4, ?, 8')), [5, 6, 7], 6, 'Count in twos.', 'Two, four, six, eight.')
      ] },
      { title: 'What are hundreds, tens and ones?', char: 'pirate', screens: [
        W('A bag of gold holds one hundred coins. Ten tens make one hundred.', P('sea', '', coinsBox(1) + big('10 tens = 100'))),
        W('One bag, two tens and three ones: one hundred and twenty-three.', P('sea', '', hto(1, 2, 3))),
        TG('Two hundreds, four tens and no ones. What number is it?', P('sea', '', hto(2, 4, 0)), [24, 240, 204], 240, 'Two hundred, then forty, then nothing more.', 'Two hundred and forty.'),
        TG('In 357, what is the 5 worth?', P('sea', '', hto(3, 5, 7)), [5, 50, 500], 50, 'The 5 is in the tens column.', 'Five tens are fifty.'),
        Y('Three hundreds, one ten and six ones. What number is it?', P('sea', '', hto(3, 1, 6)), [316, 361, 136], 316, 'Read the columns: H, T, O.', 'Three hundred and sixteen.'),
        Y('How many tens are in 482?', P('sea', '', hto(4, 8, 2)), [2, 4, 8], 8, 'Look in the tens column.', 'There are eight tens.')
      ] },
      { title: 'How do I compare and order numbers to 1000?', char: 'pirate', screens: [
        W('To compare, look at the hundreds first. Three hundred and twelve beats two hundred and ninety-eight.', P('sea', '', cards(['312', '>', '298']))),
        W('If the hundreds match, look at the tens. One hundred and fifty-two beats one hundred and forty-five.', P('sea', '', cards(['152', '>', '145']))),
        TG('Which treasure chest has more coins: 409 or 490?', P('sea', '', cards(['409', '490'])), [409, 490], 490, 'Same hundreds. Compare the tens.', 'Nine tens beats zero tens.'),
        TG('Put the islands in order, smallest first: 63, 36, 103.', P('sea', '', cards(['63', '36', '103'])), ['36, 63, 103', '103, 63, 36', '63, 36, 103'], '36, 63, 103', 'Start with the smallest number.', 'Thirty-six, sixty-three, one hundred and three.'),
        Y('Which number is smaller: 728 or 782?', P('sea', '', cards(['728', '782'])), [728, 782], 728, 'Same hundreds. Compare the tens.', 'Two tens is less than eight tens.'),
        Y('Which number is the biggest?', P('sea', '', cards(['199', '201', '99'])), [199, 201, 99], 201, 'Look at the hundreds first.', 'Two hundred and one is the biggest.')
      ] },
      { title: 'How do I round numbers to the nearest 10?', char: 'pirate', screens: [
        W('Twenty-three is between twenty and thirty. It is closer to twenty, so it rounds to twenty.', P('sea', '', FL.track(20, 30, [20, 23]))),
        W('Twenty-seven is closer to thirty, so it rounds to thirty. Five or more rounds up.', P('sea', '', FL.track(20, 30, [27, 30]))),
        TG('Round 62 to the nearest ten.', P('sea', '', FL.track(60, 70, [62])), [60, 70], 60, 'Look at the ones: two is less than five.', 'Sixty-two rounds down to sixty.'),
        TG('Round 45 to the nearest ten.', P('sea', '', FL.track(40, 50, [45])), [40, 50], 50, 'Exactly in the middle rounds up.', 'Forty-five rounds up to fifty.'),
        Y('Round 89 to the nearest ten.', P('sea', '', FL.track(80, 90, [89])), [80, 90], 90, 'Nine is five or more.', 'Eighty-nine rounds up to ninety.'),
        Y('Round 34 to the nearest ten.', P('sea', '', FL.track(30, 40, [34])), [30, 40], 30, 'Four is less than five.', 'Thirty-four rounds down to thirty.')
      ] }
    ]
  });

  /* ================= 302 Adding and subtracting: Frankie's lily pads ================= */
  FL.addStory(302, {
    story: { title: 'Frankie’s Fly Feast', endPic: P('pond', 'frog', '<div style="background:#fff;border:4px solid #221a3a;border-radius:20px;padding:12px 22px;color:#221a3a;font-weight:800;text-align:left"><div style="font-size:1.5rem;margin-bottom:6px">Frankie’s day</div><div style="display:grid;grid-template-columns:auto auto;column-gap:18px;font-size:1.25rem;line-height:1.7;white-space:nowrap">' + [['Breakfast', '3 + 8 + 7 = 18'], ['Snack', '7 + 8 = 15'], ['Lunch', '35 + 24 = 59'], ['Dinner', '13 − 5 = 8']].map(function (r) { return '<span style="color:#7a1fc2">' + r[0] + '</span><span>' + r[1] + '</span>'; }).join('') + '</div></div>', 'Yum!'), endText: 'What a busy day! Frankie added at breakfast, snack time and lunch, and took away at dinner. Thank you for helping him!',
      pages: [
        pg(P('pond', 'frog', '', 'Ribbit!'), 'Good morning! Frankie the frog wakes up very hungry. Today he will catch flies for every meal.'),
        pg(P('pond', 'frog', big('3 + 8 + 7')), 'Breakfast time! On three lily pads Frankie catches three, eight and seven flies. He adds three and seven first, because they make ten.', Q('How many flies is that?', [17, 18, 19], 18, 'Three and seven make ten. Ten and eight make eighteen.')),
        pg(P('pond', 'frog', FL.track(7, 15, [7, 10, 15], [[7, 10], [10, 15]])), 'Snack time! Frankie’s snack box has seven flies and he catches eight more. He hops to ten first: seven and three. Then five more to fifteen.'),
        pg(P('pond', 'frog', big('35 + 24')), 'Lunchtime! Frankie has thirty-five flies and catches twenty-four more. He counts on in tens: forty-five, fifty-five. Then four ones.', Q('What is 35 + 24?', [55, 59, 69], 59, 'Fifty-five and four more is fifty-nine.')),
        pg(P('pond', 'frog', cards(['30 + 20 = 50', '4 + 5 = 9', '50 + 9 = 59'])), 'Frankie checks another way. He splits the numbers into tens and ones and adds them separately. Fifty-nine again!'),
        pg(P('pond', 'frog', big('13 − 5')), 'Dinner time! Frankie puts thirteen flies on his plate. Oh no, five buzz away! He counts back three to get to ten, then two more back to get to eight.', Q('What is 13 − 5?', [7, 8, 9], 8, 'Thirteen take away three is ten, take away two more is eight.'))
      ] },
    learn: [
      { title: 'How can reordering numbers help me add them?', char: 'frog', screens: [
        W('Three, eight and seven flies. I add three and seven first because they make ten. Ten and eight make eighteen.', P('pond', '', big('3 + 7 = 10<br>10 + 8 = 18'))),
        W('Six, five and six flies. Double six is twelve, then five more is seventeen.', P('pond', '', big('6 + 6 + 5 = 17'))),
        TG('Five, seven and five flies. How many?', P('pond', '', big('5 + 7 + 5')), [15, 17, 18], 17, 'Five and five make ten.', 'Ten and seven make seventeen.'),
        TG('Four, nine and six flies. How many?', P('pond', '', big('4 + 9 + 6')), [18, 19, 20], 19, 'Four and six make ten.', 'Ten and nine make nineteen.'),
        Y('Two, five and eight flies. How many?', P('pond', '', big('2 + 5 + 8')), [14, 15, 16], 15, 'Which pair makes ten?', 'Two and eight make ten, and five more is fifteen.'),
        Y('Seven, seven and three flies. How many?', P('pond', '', big('7 + 7 + 3')), [16, 17, 18], 17, 'Seven and three make ten.', 'Ten and seven make seventeen.')
      ] },
      { title: 'How can bridging through 10 help me to add and subtract?', char: 'frog', screens: [
        W('Seven add eight. I hop to ten first: seven and three. Eight is three and five, so five more: fifteen.', P('pond', '', FL.track(7, 15, [7, 10, 15], [[7, 10], [10, 15]]))),
        W('Thirteen take away five. I hop back to ten: that is three. Then two more back: eight.', P('pond', '', FL.track(8, 13, [8, 10, 13], [[13, 10], [10, 8]]))),
        TG('What is 8 + 6?', P('pond', '', FL.track(8, 14, [8, 10, 14], [[8, 10], [10, 14]])), [13, 14, 15], 14, 'Eight and two make ten. Then four more.', 'Fourteen.'),
        TG('What is 12 − 4?', P('pond', '', FL.track(8, 12, [8, 10, 12], [[12, 10], [10, 8]])), [7, 8, 9], 8, 'Twelve back to ten is two. Then two more.', 'Eight.'),
        Y('What is 9 + 5?', P('pond', '', big('9 + 5')), [13, 14, 15], 14, 'Nine and one make ten.', 'Ten and four make fourteen.'),
        Y('What is 15 − 7?', P('pond', '', big('15 − 7')), [7, 8, 9], 8, 'Fifteen back to ten is five. Then two more.', 'Eight.')
      ] },
      { title: 'How can counting on help me add two-digit numbers?', char: 'frog', screens: [
        W('Thirty-five add twenty-four. I start at thirty-five and hop on two tens: forty-five, fifty-five. Then four ones: fifty-nine.', P('pond', '', cards(['35', '45', '55', '59']))),
        W('Forty-two add thirteen: fifty-two, then three ones, fifty-five.', P('pond', '', cards(['42', '52', '55']))),
        TG('What is 31 + 26?', P('pond', '', big('31 + 26')), [47, 57, 67], 57, 'Thirty-one, forty-one, fifty-one, then six more.', 'Fifty-seven.'),
        TG('What is 53 + 21?', P('pond', '', big('53 + 21')), [73, 74, 84], 74, 'Hop on two tens, then one.', 'Seventy-four.'),
        Y('What is 24 + 35?', P('pond', '', big('24 + 35')), [49, 59, 69], 59, 'Start at thirty-five, the bigger number.', 'Fifty-nine.'),
        Y('What is 46 + 12?', P('pond', '', big('46 + 12')), [56, 58, 68], 58, 'One ten, then two ones.', 'Fifty-eight.')
      ] },
      { title: 'How can partitioning help me add two-digit numbers?', char: 'frog', screens: [
        W('Thirty-four add twenty-five. I split them: thirty and twenty make fifty, four and five make nine. Fifty-nine.', P('pond', '', cards(['30 + 20 = 50', '4 + 5 = 9', '59']))),
        W('Twenty-six add thirty-eight. Twenty and thirty make fifty, six and eight make fourteen. Fifty and fourteen: sixty-four.', P('pond', '', cards(['50', '14', '64']))),
        TG('What is 32 + 15?', P('pond', '', big('32 + 15')), [37, 47, 57], 47, 'Thirty and ten, then two and five.', 'Forty and seven: forty-seven.'),
        TG('What is 41 + 36?', P('pond', '', big('41 + 36')), [67, 77, 87], 77, 'Forty and thirty, then one and six.', 'Seventy and seven: seventy-seven.'),
        Y('What is 23 + 45?', P('pond', '', big('23 + 45')), [58, 68, 78], 68, 'Tens first, then ones.', 'Sixty and eight: sixty-eight.'),
        Y('What is 27 + 35?', P('pond', '', big('27 + 35')), [52, 62, 63], 62, 'Seven and five make twelve.', 'Fifty and twelve: sixty-two.')
      ] }
    ]
  });

  /* ================= 303 Multiplication: Benny's bakery ================= */
  FL.addStory(303, {
    story: { title: 'Benny’s Bakery', endPic: P('kitchen', 'bear', trays(4, 5), 'Buns!'), endText: 'Benny sold every bun in the bakery. Thank you for helping him multiply!',
      pages: [
        pg(P('kitchen', 'bear', '', 'Fresh buns!'), 'Benny the bear has a bakery. Every tray has the same number of buns.'),
        pg(P('kitchen', 'bear', trays(3, 5)), 'Benny bakes three trays with five buns on each. Five, ten, fifteen.', Q('How many buns altogether?', [8, 15, 20], 15, 'Three lots of five is fifteen.')),
        pg(P('kitchen', 'bear', big('5 + 5 + 5 = 3 × 5')), 'Adding the same number again and again is called multiplying. Three times five is fifteen.'),
        pg(P('kitchen', 'bear', dots(3, 4)), 'Benny lines up cupcakes in rows. Three rows of four. That is called an array.', Q('How many cupcakes?', [7, 12, 16], 12, 'Four, eight, twelve.')),
        pg(P('kitchen', 'bear', dots(4, 3)), 'He turns the tray round: four rows of three. Still twelve! You can multiply either way round.'),
        pg(P('kitchen', 'bear', big('2, 4, 6, 8, 10')), 'Pairs of cookies go into bags. Counting in twos helps Benny with the two times table.', Q('How many cookies in 5 bags of 2?', [7, 10, 12], 10, 'Two, four, six, eight, ten.'))
      ] },
    learn: [
      { title: 'How can adding help me multiply?', char: 'bear', screens: [
        W('Three trays of five buns. Five and five and five make fifteen. That is three times five.', P('kitchen', '', trays(3, 5))),
        W('Four bags of two cookies. Two, four, six, eight. Four times two is eight.', P('kitchen', '', trays(4, 2))),
        TG('Two trays of ten buns. How many?', P('kitchen', '', trays(2, 10)), [12, 20, 22], 20, 'Ten and ten.', 'Two times ten is twenty.'),
        TG('Five bags of two. How many cookies?', P('kitchen', '', trays(5, 2)), [7, 10, 12], 10, 'Count in twos five times.', 'Five times two is ten.'),
        Y('Three trays of ten. How many buns?', P('kitchen', '', trays(3, 10)), [13, 30, 33], 30, 'Ten, twenty, …', 'Three times ten is thirty.'),
        Y('Four trays of five. How many buns?', P('kitchen', '', trays(4, 5)), [9, 20, 25], 20, 'Five, ten, fifteen, …', 'Four times five is twenty.')
      ] },
      { title: 'How can an array help me multiply?', char: 'bear', screens: [
        W('Cupcakes in an array: two rows of five. Five, ten. Two times five is ten.', P('kitchen', '', dots(2, 5))),
        W('Three rows of four: four, eight, twelve. Three times four is twelve.', P('kitchen', '', dots(3, 4))),
        TG('How many cupcakes in four rows of five?', P('kitchen', '', dots(4, 5)), [9, 20, 25], 20, 'Count in fives, four times.', 'Four times five is twenty.'),
        TG('How many in two rows of six?', P('kitchen', '', dots(2, 6)), [8, 12, 14], 12, 'Six and six.', 'Two times six is twelve.'),
        Y('How many in five rows of two?', P('kitchen', '', dots(5, 2)), [7, 10, 12], 10, 'Count in twos.', 'Five times two is ten.'),
        Y('How many in three rows of three?', P('kitchen', '', dots(3, 3)), [6, 9, 12], 9, 'Three, six, …', 'Three times three is nine.')
      ] },
      { title: 'Which way round should I multiply two numbers?', char: 'bear', screens: [
        W('Two rows of five, or five rows of two? Both make ten! Multiplying works either way round.', P('kitchen', '', dots(2, 5) + dots(5, 2))),
        W('Seven times two is hard to count. Two times seven is double seven: fourteen. Same answer!', P('kitchen', '', big('7 × 2 = 2 × 7 = 14'))),
        TG('Five times nine is forty-five. What is nine times five?', P('kitchen', '', big('9 × 5 = ?')), [14, 45, 54], 45, 'Same numbers, either way round.', 'Forty-five.'),
        TG('What is 8 × 2?', P('kitchen', '', big('8 × 2')), [10, 16, 18], 16, 'Think two times eight: double eight.', 'Sixteen.'),
        Y('Six times ten is sixty. What is ten times six?', P('kitchen', '', big('10 × 6 = ?')), [16, 60, 66], 60, 'Either way round.', 'Sixty.'),
        Y('What is 6 × 5?', P('kitchen', '', big('6 × 5')), [11, 30, 35], 30, 'Count six fives: five, ten, fifteen …', 'Thirty.')
      ] },
      { title: 'How can counting in 2s, 5s and 10s help me learn times tables?', char: 'bear', screens: [
        W('Counting in twos: two, four, six, eight, ten. These numbers are all even.', P('kitchen', '', big('2, 4, 6, 8, 10'))),
        W('Counting in fives: five, ten, fifteen, twenty. They end in five or zero. Tens end in zero.', P('kitchen', '', big('5, 10, 15, 20'))),
        TG('What is 4 × 5?', P('kitchen', '', big('4 × 5')), [9, 20, 25], 20, 'Count four fives.', 'Twenty.'),
        TG('What is 6 × 2?', P('kitchen', '', big('6 × 2')), [8, 12, 14], 12, 'Count six twos.', 'Twelve.'),
        Y('What is 7 × 10?', P('kitchen', '', big('7 × 10')), [17, 70, 77], 70, 'Count seven tens.', 'Seventy.'),
        Y('What is 3 × 5?', P('kitchen', '', big('3 × 5')), [8, 15, 35], 15, 'Five, ten, …', 'Fifteen.')
      ] }
    ]
  });

  /* ================= 304 Division: Molly's picnic ================= */
  FL.addStory(304, {
    story: { title: 'Molly’s Fair Picnic', endPic: P('day', 'mouse', big('Fair shares!'), 'Hooray!'), endText: 'Everyone at Molly’s picnic had a fair share. Thank you for helping her divide!',
      pages: [
        pg(P('day', 'mouse', '', 'Picnic time!'), 'Molly the mouse is having a picnic with her friends. Everyone must get a fair share.'),
        pg(P('day', 'mouse', T(12, 'apple', 6)), 'Molly has twelve strawberries for three friends. She gives one each, again and again.', Q('How many does each friend get?', [3, 4, 6], 4, 'Twelve shared between three is four each.')),
        pg(P('day', 'mouse', big('15 − 5 − 5 − 5 = 0')), 'Fifteen apples go in bags of five. Molly takes away five, then five, then five. Three bags!'),
        pg(P('day', 'mouse', dots(4, 5)), 'Twenty chairs are set out in rows of five. Molly counts the rows.', Q('How many rows of five?', [4, 5, 20], 4, 'Twenty divided by five is four.')),
        pg(P('day', 'mouse', T(10, 'sweet', 5)), 'Molly and Frankie share ten sweets. Halving means sharing between two.', Q('What is half of 10?', [2, 5, 20], 5, 'Five and five make ten.')),
        pg(P('day', 'mouse', big('12 ÷ 3 = 4')), 'Dividing means sharing into equal groups. Molly checks: three friends with four each makes twelve.')
      ] },
    learn: [
      { title: 'How can sharing equally help me divide?', char: 'mouse', screens: [
        W('Twelve strawberries shared between three friends: one each, again and again. Each gets four.', P('day', '', T(12, 'apple', 4))),
        W('Ten sweets shared between two: five each. We write ten divided by two is five.', P('day', '', T(10, 'sweet', 5))),
        TG('Share fifteen grapes between five friends. How many each?', P('day', '', T(15, 'flower', 5)), [3, 5, 10], 3, 'Give one each until they are all gone.', 'Three each.'),
        TG('Share eight cakes between two friends. How many each?', P('day', '', T(8, 'sweet', 4)), [2, 4, 6], 4, 'Half of eight.', 'Four each.'),
        Y('Share twenty stickers between five friends. How many each?', P('day', '', T(20, 'star', 5)), [4, 5, 15], 4, 'Five times what makes twenty?', 'Four each.'),
        Y('Share six apples between three friends. How many each?', P('day', '', T(6, 'apple', 3)), [2, 3, 6], 2, 'Give one each, twice.', 'Two each.')
      ] },
      { title: 'How can subtracting help me with division?', char: 'mouse', screens: [
        W('Fifteen apples in bags of five. Take away five, five, five: three bags.', P('day', '', big('15 − 5 − 5 − 5 = 0'))),
        W('Twelve children, four in each boat. Twelve, eight, four, zero: three boats.', P('pond', '', big('12 − 4 − 4 − 4 = 0'))),
        TG('How many groups of two in ten?', P('day', '', T(10, 'duck', 5)), [2, 5, 8], 5, 'Take away two again and again. Count the jumps.', 'Five groups.'),
        TG('How many bags of ten in thirty?', P('day', '', big('30 − 10 − 10 − 10')), [3, 10, 20], 3, 'Count how many tens you take away.', 'Three bags.'),
        Y('How many groups of five in twenty?', P('day', '', big('20 − 5 − …')), [4, 5, 15], 4, 'Twenty, fifteen, ten, five, zero.', 'Four groups.'),
        Y('How many pairs in eight?', P('day', '', T(8, 'apple', 4)), [2, 4, 6], 4, 'Take away two each time.', 'Four pairs.')
      ] },
      { title: 'How can an array help me with division?', char: 'mouse', screens: [
        W('Twelve chairs in three rows: four in each row. Twelve divided by three is four.', P('day', '', dots(3, 4))),
        W('The same array shows twelve divided by four is three. Three times four is twelve.', P('day', '', cards(['3 × 4 = 12', '12 ÷ 3 = 4', '12 ÷ 4 = 3']))),
        TG('Ten chairs in two rows. How many in each row?', P('day', '', dots(2, 5)), [2, 5, 10], 5, 'Count one row.', 'Five in each row.'),
        TG('Twenty chairs in rows of five. How many rows?', P('day', '', dots(4, 5)), [4, 5, 15], 4, 'Count the rows.', 'Four rows.'),
        Y('Fifteen chairs in three rows. How many in each row?', P('day', '', dots(3, 5)), [3, 5, 12], 5, 'Count one row.', 'Five in each row.'),
        Y('What is 6 ÷ 2?', P('day', '', dots(2, 3)), [2, 3, 4], 3, 'Two rows. How many in each?', 'Three.')
      ] },
      { title: 'How can halving help me divide?', char: 'mouse', screens: [
        W('Halving means sharing into two equal parts. Half of eight is four.', P('day', '', T(8, 'sweet', 4))),
        W('Half of thirty: thirty is three tens. Half is fifteen.', P('day', '', big('30 ÷ 2 = 15'))),
        TG('What is half of sixteen?', P('day', '', T(16, 'apple', 8)), [6, 8, 10], 8, 'Share into two equal groups.', 'Eight.'),
        TG('What is half of forty?', P('day', '', big('40 ÷ 2')), [20, 24, 80], 20, 'Half of four tens.', 'Twenty.'),
        Y('What is half of twelve?', P('day', '', T(12, 'sweet', 6)), [4, 6, 8], 6, 'Six and six.', 'Six.'),
        Y('What is half of fifty?', P('day', '', big('50 ÷ 2')), [20, 25, 30], 25, 'Half of forty, and half of ten.', 'Twenty-five.')
      ] }
    ]
  });

  /* ================= 305 Fractions: Finn's pizza party ================= */
  FL.addStory(305, {
    story: { title: 'Finn’s Pizza Party', endPic: P('room', 'fox', PIE(4, 4), 'All gone!'), endText: 'Every slice was shared fairly. Thank you for helping Finn with fractions!',
      pages: [
        pg(P('room', 'fox', PIE(4, 0), 'Pizza!'), 'Finn the fox is having a pizza party! Fair shares mean equal parts.'),
        pg(P('room', 'fox', PIE(2, 1)), 'Finn cuts a pizza into two equal parts. Each part is one half.'),
        pg(P('room', 'fox', PIE(4, 1)), 'He cuts another pizza into four equal parts. Each part is one quarter. We write one over four.', Q('How many equal parts does this pizza have?', [2, 3, 4], 4, 'Four parts: quarters.')),
        pg(P('room', 'fox', PIE(8, 3)), 'Eight slices. Ollie eats three. He ate three eighths.'),
        pg(P('room', 'fox', T(12, 'apple', 6)), 'There are twelve strawberries. Finn eats half. Half of twelve is six.', Q('What is a quarter of 12?', [3, 4, 6], 3, 'Half of twelve is six, half of six is three.')),
        pg(P('room', 'fox', PIE(4, 2)), 'Two quarters are the same as one half. Fractions are fun!')
      ] },
    learn: [
      { title: 'What is a fraction?', char: 'fox', screens: [
        W('A fraction is an equal part of something whole. Two equal parts are halves.', P('room', '', PIE(2, 1))),
        W('Four equal parts are quarters. Three equal parts are thirds.', P('room', '', PIE(4, 1) + PIE(3, 1))),
        TG('This pizza has four equal parts. What is one part called?', P('room', '', PIE(4, 1)), ['a half', 'a third', 'a quarter'], 'a quarter', 'Four equal parts are quarters.', 'A quarter.'),
        TG('This pizza has two equal parts. What is one part called?', P('room', '', PIE(2, 1)), ['a half', 'a third', 'a quarter'], 'a half', 'Two equal parts.', 'A half.'),
        Y('This pizza has three equal parts. What is one part called?', P('room', '', PIE(3, 1)), ['a half', 'a third', 'a quarter'], 'a third', 'Three equal parts.', 'A third.'),
        Y('Are these parts equal?', P('room', '', FL.svg(120, 120, 'unequal parts', '<rect x="10" y="10" width="100" height="100" fill="#fff3d6" stroke="' + INK + '" stroke-width="3"/><line x1="35" y1="10" x2="35" y2="110" stroke="' + INK + '" stroke-width="3"/>', 160)), ['Yes', 'No'], 'No', 'Is one part bigger?', 'No. One part is bigger, so they are not halves.')
      ] },
      { title: 'How to write fractions', char: 'fox', screens: [
        W('The bottom number says how many equal parts. The top number says how many we are talking about. One part out of four: one over four.', P('room', '', PIE(4, 1) + big('1/4'))),
        W('Three parts out of four are shaded: three quarters, three over four.', P('room', '', PIE(4, 3) + big('3/4'))),
        TG('Two parts out of three are eaten. Which fraction is it?', P('room', '', PIE(3, 2)), ['2/3', '3/2', '1/3'], '2/3', 'Bottom: how many parts. Top: how many eaten.', 'Two thirds.'),
        TG('Three slices out of eight are eaten. Which fraction?', P('room', '', PIE(8, 3)), ['3/8', '8/3', '5/8'], '3/8', 'Count all the slices for the bottom number.', 'Three eighths.'),
        Y('Two parts out of five are shaded. Which fraction?', P('room', '', PIE(5, 2)), ['2/5', '5/2', '3/5'], '2/5', 'Bottom number: five parts.', 'Two fifths.'),
        Y('One part out of two is shaded. Which fraction?', P('room', '', PIE(2, 1)), ['1/2', '2/1', '1/4'], '1/2', 'Two equal parts.', 'One half.')
      ] },
      { title: 'How can halving help me find a half or a quarter of a number?', char: 'fox', screens: [
        W('Half of twelve: share into two groups. Six each.', P('room', '', T(12, 'apple', 6))),
        W('A quarter: halve, then halve again. Half of twelve is six, half of six is three.', P('room', '', big('12 → 6 → 3'))),
        TG('What is half of 8?', P('room', '', T(8, 'apple', 4)), [2, 4, 6], 4, 'Share into two groups.', 'Four.'),
        TG('What is a quarter of 8?', P('room', '', T(8, 'apple', 4)), [2, 4, 6], 2, 'Halve, then halve again.', 'Eight, four, two.'),
        Y('What is a quarter of 20?', P('room', '', big('20 → ? → ?')), [4, 5, 10], 5, 'Half of twenty is ten.', 'Ten, then five.'),
        Y('What is half of 16?', P('room', '', T(16, 'star', 8)), [6, 8, 10], 8, 'Eight and eight.', 'Eight.')
      ] },
      { title: 'How can I find a fraction of a shape?', char: 'fox', screens: [
        W('Fold a square in half and shade one side: one half.', P('room', '', FL.svg(120, 120, 'half a square', '<rect x="10" y="10" width="50" height="100" fill="#ffb03b" stroke="' + INK + '" stroke-width="3"/><rect x="60" y="10" width="50" height="100" fill="#fff3d6" stroke="' + INK + '" stroke-width="3"/>', 150))),
        W('Two quarters are the same as one half!', P('room', '', PIE(4, 2) + PIE(2, 1))),
        TG('What fraction of the pizza is shaded?', P('room', '', PIE(4, 3)), ['1/4', '3/4', '4/3'], '3/4', 'Count shaded parts, then all parts.', 'Three quarters.'),
        TG('How many quarters make a whole?', P('room', '', PIE(4, 4)), [2, 3, 4], 4, 'Count the quarters.', 'Four quarters.'),
        Y('What fraction is shaded?', P('room', '', PIE(3, 1)), ['1/3', '1/2', '3/1'], '1/3', 'Three equal parts, one shaded.', 'One third.'),
        Y('How many halves make a whole?', P('room', '', PIE(2, 2)), [1, 2, 4], 2, 'Count the halves.', 'Two halves.')
      ] }
    ]
  });

  /* ================= 306 Money and time: Ollie's shop day ================= */
  FL.addStory(306, {
    story: { title: 'Ollie’s Shop Day', endPic: P('shop', 'owl', clk(5, 0), 'Closed!'), endText: 'At five o’clock Ollie closed his shop. Thank you for helping with money and time!',
      pages: [
        pg(P('shop', 'owl', clk(9, 15), 'Open!'), 'Ollie the owl opens his shop at quarter past nine. The long hand points to three.'),
        pg(P('shop', 'owl', C([20, 20, 10])), 'Benny buys a comic. He pays with twenty pence, twenty pence and ten pence.', Q('How much does Benny pay?', ['40p', '50p', '60p'], '50p', 'Twenty, forty, fifty.')),
        pg(P('shop', 'owl', FL.trackP(14, 20, [14, 20])), 'Molly buys a pencil for fourteen pence and pays with twenty pence. Ollie counts on to twenty.', Q('How much change?', ['4p', '6p', '14p'], '6p', 'Fourteen to twenty is six jumps.')),
        pg(P('shop', 'owl', clk(12, 30)), 'At half past twelve Ollie has lunch.'),
        pg(P('shop', 'owl', clk(3, 45)), 'The long hand points to nine. It is quarter to four. Nearly home time!', Q('What time is it?', ['quarter past 3', 'quarter to 4', 'half past 3'], 'quarter to 4', 'Long hand on nine: quarter to.')),
        pg(P('shop', 'owl', cards(['9 o’clock → 5 o’clock', '8 hours'])), 'The shop is open from nine o’clock to five o’clock. That is eight hours.')
      ] },
    learn: [
      { title: 'How can I use adding and subtracting to work out change?', char: 'owl', screens: [
        W('A comic costs fourteen pence. Benny pays twenty pence. I count on: fifteen, sixteen … twenty. Six pence change.', P('shop', '', FL.trackP(14, 20, [14, 20]))),
        W('A toy costs thirty-five pence. Molly pays fifty pence. Thirty-five to forty is five, forty to fifty is ten. Fifteen pence change.', P('shop', '', cards(['35p', '40p', '50p']))),
        TG('A pencil costs 42p. You pay 50p. How much change?', P('shop', '', C([50])), ['7p', '8p', '18p'], '8p', 'Count on from forty-two to fifty.', 'Eight pence.'),
        TG('A sandwich costs 80p. You pay £1. How much change?', P('shop', '', C([100])), ['10p', '20p', '30p'], '20p', 'One pound is one hundred pence.', 'Twenty pence.'),
        Y('A ball costs 15p. You pay 20p. How much change?', P('shop', '', C([20])), ['5p', '10p', '15p'], '5p', 'Fifteen to twenty.', 'Five pence.'),
        Y('A drink costs 65p. You pay £1. How much change?', P('shop', '', C([100])), ['25p', '35p', '45p'], '35p', 'Sixty-five to seventy, then to one hundred.', 'Thirty-five pence.')
      ] },
      { title: 'How can different coins and notes make the same total?', char: 'owl', screens: [
        W('Fifty pence can be one fifty pence coin, or twenty, twenty and ten.', P('shop', '', C([50]) + C([20, 20, 10]))),
        W('One pound can be fifty, twenty, twenty and ten. Fifty, seventy, ninety, one hundred!', P('shop', '', C([50, 20, 20, 10]))),
        TG('Do 20p, 20p and 5p make 45p?', P('shop', '', C([20, 20, 5])), ['Yes', 'No'], 'Yes', 'Twenty, forty, forty-five.', 'Yes!'),
        TG('How much is this?', P('shop', '', C([50, 20, 5])), ['65p', '75p', '85p'], '75p', 'Start with the biggest coin.', 'Fifty, seventy, seventy-five.'),
        Y('Which makes 30p?', P('shop', '', C([20, 10])), ['20p + 10p', '20p + 5p', '10p + 5p'], '20p + 10p', 'Add each pair.', 'Twenty and ten make thirty.'),
        Y('How much is this?', P('shop', '', C([100, 50, 10])), ['£1.50', '£1.60', '£1.70'], '£1.60', 'One pound, then fifty, then ten.', 'One pound sixty.')
      ] },
      { title: 'How to tell the time', char: 'owl', screens: [
        W('When the long hand points to three, it is quarter past. Quarter past two.', P('shop', '', clk(2, 15))),
        W('When the long hand points to nine, it is quarter to. The short hand is nearly at five: quarter to five.', P('shop', '', clk(4, 45))),
        TG('What time is it?', P('shop', '', clk(9, 15)), ['quarter past 9', 'quarter to 9', 'half past 9'], 'quarter past 9', 'Long hand on three.', 'Quarter past nine.'),
        TG('What time is it?', P('shop', '', clk(6, 45)), ['quarter past 6', 'quarter to 7', 'quarter to 6'], 'quarter to 7', 'Long hand on nine: quarter to the next hour.', 'Quarter to seven.'),
        Y('What time is it?', P('shop', '', clk(7, 30)), ['half past 7', 'quarter past 7', '7 o’clock'], 'half past 7', 'Long hand on six.', 'Half past seven.'),
        Y('What time is it?', P('shop', '', clk(11, 15)), ['quarter past 11', 'quarter to 11', 'quarter past 3'], 'quarter past 11', 'Long hand on three.', 'Quarter past eleven.')
      ] },
      { title: 'How long does something take?', char: 'owl', screens: [
        W('A film starts at two o’clock and ends at four o’clock. Two to three, three to four: two hours.', P('shop', '', clk(2, 0) + clk(4, 0))),
        W('From three o’clock to half past three is half an hour: thirty minutes.', P('shop', '', clk(3, 0) + clk(3, 30))),
        TG('A party starts at 3 o’clock and ends at 5 o’clock. How long is it?', P('shop', '', clk(3, 0) + clk(5, 0)), ['1 hour', '2 hours', '3 hours'], '2 hours', 'Count the hours from three.', 'Two hours.'),
        TG('Lunch starts at 12 o’clock and ends at half past 12. How long?', P('shop', '', clk(12, 0) + clk(12, 30)), ['30 minutes', '1 hour', '12 minutes'], '30 minutes', 'O’clock to half past is half an hour.', 'Thirty minutes.'),
        Y('It is 6 o’clock. What time will it be in 2 hours?', P('shop', '', clk(6, 0)), ['7 o’clock', '8 o’clock', '9 o’clock'], '8 o’clock', 'Move the short hand on two.', 'Eight o’clock.'),
        Y('Swimming is from 1 o’clock to half past 2. How long?', P('shop', '', clk(1, 0) + clk(2, 30)), ['1 hour', '1½ hours', '2 hours'], '1½ hours', 'One to two is an hour, then half an hour more.', 'An hour and a half.')
      ] }
    ]
  });

  /* ================= 307 Measurement: the giant's garden ================= */
  FL.addStory(307, {
    story: { title: 'Benny in the Giant’s Garden', endPic: P('farm', 'bear', big('Thank you!'), 'Bye, giant!'), endText: 'Benny measured everything in the giant’s garden. Thank you for helping him measure!',
      pages: [
        pg(P('farm', 'bear', '', 'Wow!'), 'Benny the bear visits a giant’s garden. Everything is enormous!'),
        pg(P('farm', 'bear', FL.svg(240, 90, 'two carrots', '<rect x="10" y="15" width="210" height="22" rx="10" fill="#ff9a3c" stroke="' + INK + '" stroke-width="3"/><rect x="10" y="55" width="70" height="22" rx="10" fill="#ff9a3c" stroke="' + INK + '" stroke-width="3"/>', 300)), 'The giant’s carrot is much longer than Benny’s carrot. Line them up at the same end to compare.'),
        pg(P('farm', 'bear', FL.rulerPic(9)), 'Benny measures a worm with his ruler. He starts at zero.', Q('How long is the worm?', ['8 cm', '9 cm', '10 cm'], '9 cm', 'Start at zero and read the end.')),
        pg(P('farm', 'bear', balance('pumpkin', 'apple', true)), 'Benny puts a pumpkin and an apple on a balance. The pumpkin side goes down.', Q('Which is heavier?', ['pumpkin', 'apple'], 'pumpkin', 'The heavier side goes down.')),
        pg(P('farm', 'bear', jug(90, 'big') + jug(30, 'small')), 'The giant’s watering can holds much more water than Benny’s little cup.'),
        pg(P('farm', 'bear', cards(['cm: length', 'kg: mass', 'litres: capacity'])), 'Benny learns: centimetres for length, kilograms for mass, and litres for how much a container holds.')
      ] },
    learn: [
      { title: 'How can I work out the length of an object?', char: 'bear', screens: [
        W('To compare length, line things up at the same end. The one that sticks out further is longer.', P('farm', '', FL.svg(240, 90, 'two ribbons', '<rect x="10" y="15" width="200" height="20" rx="8" fill="#ef5b5b" stroke="' + INK + '" stroke-width="2"/><rect x="10" y="55" width="130" height="20" rx="8" fill="#4aa8ff" stroke="' + INK + '" stroke-width="2"/>', 300))),
        W('We can measure in units, like paper clips. This pencil is six paper clips long.', P('farm', '', T(6, 'star', 6))),
        TG('Which ribbon is longer: red or blue?', P('farm', '', FL.svg(240, 90, 'two ribbons', '<rect x="10" y="15" width="120" height="20" rx="8" fill="#ef5b5b" stroke="' + INK + '" stroke-width="2"/><rect x="10" y="55" width="210" height="20" rx="8" fill="#4aa8ff" stroke="' + INK + '" stroke-width="2"/>', 300)), ['red', 'blue'], 'blue', 'Which sticks out further?', 'The blue ribbon is longer.'),
        TG('A ribbon is 25 cm. A string is 18 cm. Which is longer?', P('farm', '', cards(['ribbon 25 cm', 'string 18 cm'])), ['ribbon', 'string'], 'ribbon', 'More centimetres means longer.', 'The ribbon.'),
        Y('A carrot is 50 cm. Another is 15 cm. Which is shorter?', P('farm', '', cards(['50 cm', '15 cm'])), ['50 cm', '15 cm'], '15 cm', 'Fewer centimetres means shorter.', 'Fifteen centimetres is shorter.'),
        Y('Which unit measures length?', P('farm', '', FL.rulerPic(5)), ['cm', 'kg', 'litres'], 'cm', 'Rulers show centimetres.', 'Centimetres.')
      ] },
      { title: 'How do I use a ruler to measure in centimetres?', char: 'bear', screens: [
        W('Put the end of the pencil on zero. Read the number at the other end. Seven centimetres.', P('farm', '', FL.rulerPic(7))),
        W('Always start at zero, not at the end of the ruler!', P('farm', '', FL.rulerPic(4))),
        TG('How long is the pencil?', P('farm', '', FL.rulerPic(5)), ['4 cm', '5 cm', '6 cm'], '5 cm', 'Read the number at the end.', 'Five centimetres.'),
        TG('How long is the pencil?', P('farm', '', FL.rulerPic(11)), ['10 cm', '11 cm', '12 cm'], '11 cm', 'Start at zero.', 'Eleven centimetres.'),
        Y('How long is the worm?', P('farm', '', FL.rulerPic(8)), ['7 cm', '8 cm', '9 cm'], '8 cm', 'Read the end.', 'Eight centimetres.'),
        Y('How long is the crayon?', P('farm', '', FL.rulerPic(12)), ['11 cm', '12 cm', '13 cm'], '12 cm', 'Read the end.', 'Twelve centimetres.')
      ] },
      { title: 'How can I compare mass with a balance?', char: 'bear', screens: [
        W('The heavier side of a balance goes down. The pumpkin is heavier than the apple.', P('farm', '', balance('pumpkin', 'apple', true))),
        W('If the balance is level, both sides weigh the same.', P('farm', '', balance('apple', 'apple', null))),
        TG('Which is heavier?', P('farm', '', balance('feather', 'book', false)), ['feather', 'book'], 'book', 'Which side went down?', 'The book is heavier.'),
        TG('The balance is level. What does that mean?', P('farm', '', balance('2 kg', '2 kg', null)), ['same mass', 'left is heavier', 'right is heavier'], 'same mass', 'Level means equal.', 'They have the same mass.'),
        Y('Which is heavier?', P('farm', '', balance('melon', 'grape', true)), ['melon', 'grape'], 'melon', 'Which side went down?', 'The melon.'),
        Y('Which unit measures mass?', P('farm', '', '<span style="font-size:3rem">⚖️</span>'), ['kg', 'cm', 'litres'], 'kg', 'Mass is how heavy something is.', 'Kilograms.')
      ] },
      { title: 'How can I compare how much containers hold?', char: 'bear', screens: [
        W('Capacity is how much a container can hold. The big watering can holds more than the cup.', P('farm', '', jug(90, 'can') + jug(30, 'cup'))),
        W('A container can be full, half full or empty.', P('farm', '', jug(100, 'full') + jug(50, 'half') + jug(0, 'empty'))),
        TG('Which holds more: a bucket or a spoon?', P('farm', '', cards(['🪣 bucket', '🥄 spoon'])), ['bucket', 'spoon'], 'bucket', 'Which is bigger inside?', 'The bucket.'),
        TG('Is this jug full, half full or empty?', P('farm', '', jug(50)), ['full', 'half full', 'empty'], 'half full', 'The water reaches the middle.', 'Half full.'),
        Y('Which unit measures capacity?', P('farm', '', jug(80)), ['litres', 'cm', 'kg'], 'litres', 'Capacity is how much it holds.', 'Litres.'),
        Y('Which holds more: a bath or a cup?', P('farm', '', cards(['🛁 bath', '☕ cup'])), ['bath', 'cup'], 'bath', 'Think about filling them.', 'The bath.')
      ] }
    ]
  });

  /* ================= 308 Shape, movement and data: Ruby's space maze ================= */
  var D4 = ['up', 'right', 'down', 'left'];
  FL.addStory(308, {
    story: { title: 'Ruby’s Space Maze', endPic: P('space', 'rocket', V.bars([['Cubes', 6], ['Spheres', 3], ['Cones', 4]], 8), 'Home!'), endText: 'Ruby got through the maze and counted every shape. Thank you for guiding her!',
      pages: [
        pg(P('space', 'rocket', '', 'Let’s go!'), 'Ruby the rocket is flying through a space maze full of floating shapes.'),
        pg(P('space', 'rocket', ROW(['cube', 'sphere', 'cylinder'], 80)), 'She sees a cube, a sphere and a cylinder. The sphere and cylinder can roll!'),
        pg(P('space', 'rocket', SH('cube', null, 120)), 'A cube has six square faces.', Q('How many faces does a cube have?', [4, 6, 8], 6, 'Top, bottom and four sides: six.')),
        pg(P('space', 'rocket', FL.svg(160, 140, 'a heart with a line of symmetry', '<path d="M80 128 18 60a30 30 0 0 1 62-34 30 30 0 0 1 62 34z" fill="#f7a8b8" stroke="' + INK + '" stroke-width="3"/><line x1="80" y1="8" x2="80" y2="136" stroke="#7a1fc2" stroke-width="3" stroke-dasharray="8 6"/>', 170)), 'A heart-shaped planet is symmetrical. Fold it down the middle and both halves match.'),
        pg(P('space', 'rocket', big('Ruby faces up ↑')), 'Ruby faces up. To get through the maze she makes a quarter turn to the right.', Q('Which way does Ruby face now?', ['right', 'down', 'left'], 'right', 'A quarter turn right from up is right.')),
        pg(P('space', 'rocket', V.bars([['Cubes', 6], ['Spheres', 3], ['Cones', 4]], 8)), 'Ruby counts the shapes she passed and draws a bar chart.', Q('Which shape did she see most?', ['Cubes', 'Spheres', 'Cones'], 'Cubes', 'The tallest bar.'))
      ] },
    learn: [
      { title: 'What are the properties of 3D shapes?', char: 'rocket', screens: [
        W('A cube has six square faces, twelve edges and eight corners.', P('space', '', SH('cube', null, 130))),
        W('A cylinder has two flat circle faces and one curved face. A sphere is curved all over. They roll!', P('space', '', ROW(['cylinder', 'sphere'], 100))),
        TG('How many faces does a cube have?', P('space', '', SH('cube', null, 120)), [4, 6, 8], 6, 'Count top, bottom and the four sides.', 'Six faces.'),
        TG('Which shape can roll?', P('space', '', ROW(['cube', 'sphere', 'pyramid'], 80)), ['cube', 'sphere', 'pyramid'], 'sphere', 'Which one is curved?', 'The sphere.'),
        Y('How many corners does a cube have?', P('space', '', SH('cube', null, 120)), [6, 8, 12], 8, 'Four on top and four on the bottom.', 'Eight corners.'),
        Y('What is this shape?', P('space', '', SH('cone', null, 120)), ['cone', 'cylinder', 'cube'], 'cone', 'It has a point and a circle base.', 'A cone.')
      ] },
      { title: 'What makes a shape symmetrical?', char: 'rocket', screens: [
        W('A shape is symmetrical if you can fold it so both halves match exactly.', P('space', '', FL.svg(160, 140, 'a heart with a line of symmetry', '<path d="M80 128 18 60a30 30 0 0 1 62-34 30 30 0 0 1 62 34z" fill="#f7a8b8" stroke="' + INK + '" stroke-width="3"/><line x1="80" y1="8" x2="80" y2="136" stroke="#7a1fc2" stroke-width="3" stroke-dasharray="8 6"/>', 170))),
        W('A square can be folded four ways and still match. The letter F cannot.', P('space', '', SH('square', null, 100) + big('F'))),
        TG('Does a circle have a line of symmetry?', P('space', '', SH('circle', null, 110)), ['Yes', 'No'], 'Yes', 'Fold it through the middle.', 'Yes.'),
        TG('Is the letter A symmetrical?', P('space', '', big('A')), ['Yes', 'No'], 'Yes', 'Fold it down the middle.', 'Yes, both halves match.'),
        Y('Is the letter R symmetrical?', P('space', '', big('R')), ['Yes', 'No'], 'No', 'Try folding it.', 'No, the halves do not match.'),
        Y('Is a rectangle symmetrical?', P('space', '', SH('rectangle', null, 120)), ['Yes', 'No'], 'Yes', 'Fold it in half.', 'Yes.')
      ] },
      { title: 'How to use directions and turns', char: 'rocket', screens: [
        W('A quarter turn is a quarter of the way round. Two quarter turns make a half turn.', P('space', '', big('↑ → ↓'))),
        W('Turning right goes the same way as clock hands. Four quarter turns make a full turn.', P('space', '', clk(12, 15))),
        TG('Ruby faces up. She makes a half turn. Which way does she face?', P('space', '', big('↑')), D4, 'down', 'A half turn is two quarter turns.', 'Down.'),
        TG('How many quarter turns make a full turn?', P('space', '', big('↻')), [2, 3, 4], 4, 'Up, right, down, left, up.', 'Four.'),
        Y('Ruby faces right. She makes a quarter turn to the right. Which way now?', P('space', '', big('→')), D4, 'down', 'Up, right, down, left.', 'Down.'),
        Y('Ruby faces left. She makes a quarter turn to the left. Which way now?', P('space', '', big('←')), D4, 'down', 'Left turns go the other way: up, left, down.', 'Down.')
      ] },
      { title: 'How do I record and display data?', char: 'rocket', screens: [
        W('Ruby counts shapes with tally marks, then draws a bar for each shape.', P('space', '', FL.tally(6) + V.bars([['Cubes', 6], ['Cones', 4]], 8))),
        W('The taller the bar, the more there are.', P('space', '', V.bars([['Cats', 6], ['Dogs', 8], ['Fish', 3]], 10))),
        TG('Which pet is the most popular?', P('space', '', V.bars([['Cats', 6], ['Dogs', 8], ['Fish', 3]], 10)), ['Cats', 'Dogs', 'Fish'], 'Dogs', 'Find the tallest bar.', 'Dogs.'),
        TG('How many more dogs than cats?', P('space', '', V.bars([['Cats', 6], ['Dogs', 8]], 10)), [2, 6, 8], 2, 'Eight take away six.', 'Two more.'),
        Y('How many chose Fish?', P('space', '', V.bars([['Cats', 6], ['Dogs', 8], ['Fish', 3]], 10)), [3, 6, 8], 3, 'Read the Fish bar.', 'Three.'),
        Y('Which is the least popular?', P('space', '', V.bars([['Red', 5], ['Blue', 2], ['Green', 7]], 8)), ['Red', 'Blue', 'Green'], 'Blue', 'Find the shortest bar.', 'Blue.')
      ] }
    ]
  });
  FL.KS3 = { clk: clk, hto: hto, coinsBox: coinsBox, dots: dots, trays: trays, balance: balance, jug: jug };
})();
