/* fl_p2.js: Primary 2 (First level). Five topics, each with four short story lessons and three
   hands-on activities. Numbers stay small: to 20 for adding and taking away, to 100 for counting. */
(function () {
  'use strict';
  var FL = window.FL, BT = window.BT; if (!FL || !BT || !BT.L) return;
  var L = BT.L, E = L.E, LS = L.lesson, V = BT.sv, r = FL.r, pick = FL.pick, shuffle = FL.shuffle;
  var WORD = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
  function nums(a, w) { var o = [String(a)]; w.forEach(function (x) { if (x >= 0 && o.indexOf(String(x)) < 0) o.push(String(x)); }); return o.slice(1); }

  /* ================= 1. Counting and numbers: Ruby the rocket ================= */
  FL.topic({ n: 201, year: 'P2', short: 'Counting', title: 'Counting and numbers', blurb: 'Count with Ruby the rocket: number patterns, tens and ones, number lines, one more and one less.',
    /* Story time: Ruby needs 10 stars to fly home (counting, a pattern, ten, one more and one less) */
    story: { title: 'Ruby and the Star Garden',
      intro: 'Story time! Get cosy, sit back, and listen carefully. This is the story of Ruby and the Star Garden.',
      endPic: FL.scene('space', FL.who('rocket', 130, 40, 150, 'up') + FL.label(200, 230, 'Blast off!', 26)),
      endText: 'Blast off! Whoosh! Up, up, up went Ruby, all the way home to the twinkly sky. “Thank you for helping me count,” she called. “Goodnight, my clever friend!” And that is the end of our story.',
      pages: [
        { pic: function () { return FL.scene('space', FL.who('rocket', 115, 30, 170, 'bob')); },
          text: 'Once upon a time, high up in the night sky, there lived a little red rocket called Ruby. Ruby loved to zoom. Whoosh, round the moon! Whoosh, past the clouds! “Wheee!” giggled Ruby. “I love flying!”' },
        { pic: function () { return FL.scene('space', FL.who('rocket', 4, 55, 140, 'wig') + FL.tank(150, 80, 0)); },
          text: 'But one night, Ruby’s engine went splutter… splutter… pop! Oh no! Ruby looked inside her fuel tank. It was empty. “Oh dear,” said Ruby in a tiny, worried voice. “Rockets like me run on star power. I need ten stars to fly home.”' },
        { pic: function () { return FL.scene('garden', FL.who('rocket', -5, 85, 125, 'bob') + [[160, 70], [225, 135], [285, 55], [335, 140], [385, 80]].map(function (p, k) { return FL.bit('star', p[0] - 20, p[1], 'tw', k * .2, k, 2); }).join('')); },
          text: 'Down, down, down floated Ruby, until she landed softly in a magical place called the Star Garden. And look! Shiny stars, twinkling in the grass. Shall we count them with Ruby? Point to each star with your finger. Tap each star!', tap: 5 },
        { pic: function () { return FL.scene('space', FL.who('rocket', 4, 55, 140, 'bob') + FL.tank(150, 80, 5, 0)); },
          text: '“Five stars!” Ruby smiled a big smile. Carefully, she popped them into her tank, one at a time. Let’s count them going in. One, two, three, four, five. Plink, plink, plink, plink, plink!' },
        { pic: function () { return FL.scene('space', FL.who('rocket', 4, 55, 140) + FL.tank(150, 80, 5)); },
          text: 'Ruby peeked at her tank. It has ten spaces, in two rows of five. The top row is full, but the bottom row is empty. “Hmm,” Ruby wondered, tapping her nose. “How many more stars do I need?”',
          ask: { q: 'How many more stars does Ruby need to make <b>10</b>?', options: [4, 5, 6], answer: 5, explain: 'Five and five make ten. Ruby needs five more stars.' } },
        { pic: function () { return FL.scene('pond', FL.who('rocket', 10, 10, 120, 'bob') + FL.stones([2, 4, 6, '?'], 190)); },
          text: 'Over the pond, Ruby could see more stars glowing. But how could she get across without getting wet? “Stepping stones!” she cheered. Ruby hopped. Two, four, six. Every hop jumps on two.',
          ask: { q: 'What number is on the next stone?', options: [7, 8, 10], answer: 8, explain: 'Two, four, six, eight. We jump on two each time.' } },
        { pic: function () { return FL.scene('space', FL.who('rocket', 4, 55, 140, 'bob') + FL.tank(150, 80, 10, 5)); },
          text: 'Hop, hop, hop! Ruby made it to the other side, and there were five more stars, waiting just for her. Into the tank they went. Let’s keep counting. Six, seven, eight, nine, ten! “Ten stars!” cheered Ruby. “Ten ones make one whole ten!”' },
        { pic: function () { return FL.scene('space', FL.who('rocket', 4, 55, 140, 'wig') + FL.tank(150, 80, 10, 10, true)); },
          text: 'But then… wibble, wobble… whoops! One little star rolled right out of the tank! Ruby gasped. Ten stars, take away one star. Now there are only nine. One less than ten is nine.' },
        { pic: function () { return FL.scene('space', FL.who('rocket', 4, 55, 140, 'bob') + FL.tank(150, 80, 9) + FL.bit('star', 352, 125, 'fly', 0, null, 1)); },
          text: 'Ruby stretched, and stretched, as far as she could… and caught it! “Got you, little star!” she laughed. Nine stars, and one more. One more than nine is ten. The tank was full again.',
          ask: { q: 'What is one more than <b>9</b>?', options: [8, 10, 11], answer: 10, explain: 'Nine, then ten. One more than nine is ten.' } },
        { pic: function () { return FL.scene('space', FL.who('rocket', 125, 20, 160, 'bob') + FL.label(200, 232, '3 … 2 … 1 …', 32)); },
          text: 'Ruby’s engine began to rumble. Rumble, rumble, rumble! She was ready to fly home. Will you help her blast off? Let’s count down together, nice and loud. Three… two… one…' }
      ] },
    /* Let's learn: short lessons that carry on Ruby's story, one small idea at a time */
    learn: [
      { title: 'How can I use number patterns to work out a sequence?', char: 'rocket', screens: [
        { mode: 'watch', say: 'Back at the pond, I hop on the stepping stones. One, two, three, four. Each stone is one more.', pic: function () { return FL.scene('pond', FL.who('rocket', 290, 25, 95, 'bob') + FL.stones([1, 2, 3, 4], 195)); } },
        { mode: 'watch', say: 'Now the stones go up in twos. Two, four, six, eight. I jump two each time.', pic: function () { return FL.scene('pond', FL.who('rocket', 290, 25, 95, 'bob') + FL.stones([2, 4, 6, 8], 195)); } },
        { mode: 'watch', say: 'I pack my stars in boxes of ten. Ten, twenty, thirty, forty stars!', pic: function () { return FL.scene('space', [0, 1, 2, 3].map(function (k) { return '<g class="a-pop" style="animation-delay:' + (k * .5 + .2) + 's"><rect x="' + (22 + k * 92) + '" y="80" width="80" height="80" rx="10" fill="#fff" stroke="#2b2340" stroke-width="3"/>' + FL.tx(62 + k * 92, 132, (k + 1) * 10, 28, '#2b2340') + '</g>'; }).join('')); } },
        { mode: 'together', say: 'Help me hop! Five, six, seven … what number is on the next stone?', pic: function () { return FL.scene('pond', FL.who('rocket', 290, 25, 95, 'bob') + FL.stones([5, 6, 7, '?'], 195)); }, tip: 'Each stone is one more. Count on one from seven.', options: [6, 8, 9], answer: 8, explain: 'Seven, eight. I can hop on!' },
        { mode: 'together', say: 'These stones go two, four, six … what comes next?', pic: function () { return FL.scene('pond', FL.who('rocket', 290, 25, 95, 'bob') + FL.stones([2, 4, 6, '?'], 195)); }, tip: 'Jump in twos: whisper seven, say eight out loud!', options: [7, 8, 9], answer: 8, explain: 'Six, then eight.' },
        { mode: 'turn', say: 'One box of stars has lost its number. Ten, twenty, blank, forty. What is missing?', pic: function () { return FL.scene('space', [10, 20, '?', 40].map(function (v, k) { return '<rect x="' + (22 + k * 92) + '" y="80" width="80" height="80" rx="10" fill="' + (v === '?' ? '#ffd166' : '#fff') + '" stroke="#2b2340" stroke-width="3"/>' + FL.tx(62 + k * 92, 132, v, 28, '#2b2340'); }).join('')); }, tip: 'The boxes go up in tens.', options: [25, 30, 50], answer: 30, explain: 'Ten, twenty, thirty, forty.' },
        { mode: 'turn', say: 'Blast-off countdown! Nine, eight, seven … what comes next?', pic: function () { return FL.scene('space', FL.who('rocket', 150, 40, 120, 'wig') + FL.label(200, 232, '9 … 8 … 7 … ?', 30)); }, tip: 'Count back one from seven.', options: [6, 8, 10], answer: 6, explain: 'Seven, then six.' }
      ] },
      { title: 'What are tens and ones?', char: 'rocket', screens: [
        { mode: 'watch', say: 'My fuel tank holds ten stars. A full tank is one ten.', pic: function () { return FL.starTens(1, 0); } },
        { mode: 'watch', say: 'One full tank and three loose stars. Ten and three make thirteen.', pic: function () { return FL.starTens(1, 3); } },
        { mode: 'watch', say: 'Two full tanks and five loose stars. Twenty and five make twenty-five.', pic: function () { return FL.starTens(2, 5); } },
        { mode: 'together', say: 'One full tank and six loose stars. How many stars do I have?', pic: function () { return FL.starTens(1, 6); }, tip: 'Say ten for the tank, then count on the loose stars: eleven, twelve …', options: [16, 61, 7], answer: 16, explain: 'Ten and six make sixteen.' },
        { mode: 'together', say: 'One full tank and four loose stars. How many?', pic: function () { return FL.starTens(1, 4); }, tip: 'A full tank is ten. Count on four.', options: [14, 10, 4], answer: 14, explain: 'Ten and four make fourteen.' },
        { mode: 'turn', say: 'Three full tanks and no loose stars. How many stars?', pic: function () { return FL.starTens(3, 0); }, tip: 'Count the tanks in tens: ten, twenty, thirty.', options: [3, 30, 13], answer: 30, explain: 'Three tens are thirty.' },
        { mode: 'turn', say: 'Two full tanks and seven loose stars. How many stars?', pic: function () { return FL.starTens(2, 7); }, tip: 'Twenty, then count on seven.', options: [27, 72, 9], answer: 27, explain: 'Twenty and seven make twenty-seven.' }
      ] },
      { title: 'How do I order numbers on a number line?', char: 'rocket', screens: [
        { mode: 'watch', say: 'My flight path is a number line. The numbers get bigger as I fly along.', pic: function () { return FL.scene('space', FL.who('rocket', 0, 30, 90, 'in') + FL.stones([1, 2, 3, 4, 5, 6], 200, true)); } },
        { mode: 'watch', say: 'Planet three comes before planet seven, so three is smaller than seven.', pic: function () { return FL.scene('space', FL.stones([3, 4, 5, 6, 7], 200, true) + FL.label(70, 120, '◀ smaller', 18) + FL.label(330, 120, 'bigger ▶', 18)); } },
        { mode: 'watch', say: 'Planet twelve comes after planet nine, so twelve is bigger than nine.', pic: function () { return FL.scene('space', FL.stones([9, 10, 11, 12], 200, true)); } },
        { mode: 'together', say: 'Which planet is further along my path, four or nine?', pic: function () { return FL.scene('space', FL.who('rocket', 0, 30, 90, 'bob') + FL.stones([2, 4, 6, 9], 200, true)); }, tip: 'The bigger number is further along the path.', options: [4, 9], answer: 9, explain: 'Nine is further along, so nine is bigger.' },
        { mode: 'together', say: 'A planet has lost its number. Five, blank, seven. What is it?', pic: function () { return FL.scene('space', FL.stones([5, '?', 7], 200, true)); }, tip: 'What comes just after five?', options: [4, 6, 8], answer: 6, explain: 'Five, six, seven.' },
        { mode: 'turn', say: 'Put my planets in order, smallest first.', pic: function () { return FL.scene('space', FL.stones([8, 2, 5], 200, true)); }, options: ['2, 5, 8', '8, 5, 2', '5, 2, 8'], answer: '2, 5, 8', tip: 'Start with the number nearest the start of the path.', explain: 'Two, five, eight.' },
        { mode: 'turn', say: 'Which planet comes first, fifteen or twelve?', pic: function () { return FL.scene('space', FL.stones([15, 12], 200, true)); }, tip: 'The smaller number comes first on the path.', options: [12, 15], answer: 12, explain: 'Twelve comes before fifteen.' }
      ] },
      { title: 'What is one more and one less?', char: 'rocket', screens: [
        { mode: 'watch', say: 'I have four stars. One more star flies in. Now I have five! One more than four is five.', pic: function () { return FL.scene('space', [0, 1, 2, 3].map(function (k) { return FL.bit('star', 70 + k * 60, 130, '', 0, null, 1.6); }).join('') + FL.bit('star', 315, 130, 'fly', .4, null, 1.6)); } },
        { mode: 'watch', say: 'I have six stars. One star rolls away. Now I have five. One less than six is five.', pic: function () { return FL.scene('space', [0, 1, 2, 3, 4].map(function (k) { return FL.bit('star', 60 + k * 55, 130, '', 0, null, 1.5); }).join('') + FL.bit('star', 335, 130, 'roll', .6, null, 1.5)); } },
        { mode: 'watch', say: 'On my flight path, one more is one hop forward. One less is one hop back.', pic: FL.track(5, 9, [6, 7, 8], [[7, 8], [7, 6, 1]]) },
        { mode: 'together', say: 'I have eight stars. One more flies in. How many now?', pic: function () { return FL.scene('space', [0, 1, 2, 3, 4, 5, 6, 7].map(function (k) { return FL.bit('star', 50 + (k % 4) * 60, 80 + Math.floor(k / 4) * 70, '', 0, null, 1.4); }).join('') + FL.bit('star', 330, 115, 'fly', .4, null, 1.4)); }, tip: 'One more than eight: count on one.', options: [7, 9, 10], answer: 9, explain: 'One more than eight is nine.' },
        { mode: 'together', say: 'My tank has ten stars. One rolls away. How many are left?', pic: function () { return FL.scene('space', FL.tank(85, 75, 10, 10, true)); }, tip: 'One less than ten: count back one.', options: [9, 11, 8], answer: 9, explain: 'One less than ten is nine.' },
        { mode: 'turn', say: 'I have fourteen stars and find one more. How many now?', pic: function () { return FL.starTens(1, 4); }, options: [13, 15, 16], answer: 15, tip: 'Count on one: fourteen, fifteen.', explain: 'One more than fourteen is fifteen.' },
        { mode: 'turn', say: 'I have twenty stars and one rolls away. How many are left?', pic: function () { return FL.starTens(2, 0); }, options: [19, 21, 10], answer: 19, tip: 'Count back one from twenty.', explain: 'One less than twenty is nineteen.' }
      ] }
    ],
    acts: [
      ['Count them!', 'Count the pictures. Tap the right number.', FL.rounds(function (k) { var n = r(3, k > 2 ? 20 : 10), kind = pick(['star', 'apple', 'fish', 'duck', 'balloon', 'car']); return { vis: FL.things(n, kind), q: 'How many ' + kind + 's?', answer: String(n), wrong: nums(n, [n - 1, n + 1, n + 2, n - 2]), explain: 'Count them in fives: there are ' + n + '.' }; }, 6)],
      ['Fill the ten-frame', 'Tap the boxes to show a number.', FL.fillFrame([3, 5, 7, 9, 10, 12, 15])],
      ['What comes next?', 'Find the jump, then the next number.', FL.rounds(function () { var j = pick([1, 2, 5, 10]), s = j === 10 ? 10 * r(0, 4) : j === 5 ? 5 * r(0, 6) : r(0, 12), down = j === 1 && r(0, 1), seq = []; for (var i = 0; i < 4; i++) seq.push(down ? s + 8 - i : s + i * j); var nx = down ? s + 4 : s + 4 * j; return { vis: FL.says('rocket', seq.join(', ') + ', ?'), q: 'What comes next?', answer: String(nx), wrong: nums(nx, [nx + 1, nx - 1, nx + j, nx + 2]), explain: (down ? 'It goes down by one each time.' : 'It goes up by ' + j + ' each time.') + ' Next is ' + nx + '.' }; }, 6)]
    ],
    more: [
      ['Star count', 'How many stars?', FL.rounds(function () { var n = r(6, 20); return { vis: FL.things(n, 'star', 10), q: 'How many stars?', answer: String(n), wrong: nums(n, [n + 1, n - 1, n + 2]), explain: 'Count in fives and then ones: ' + n + '.' }; }, 6)],
      ['Tens and ones', 'What number is it?', FL.rounds(function () { var t = r(1, 4), o = r(0, 9), n = 10 * t + o; return { vis: FL.tensOnes(t, o), q: t + ' tens and ' + o + ' ones. What number is it?', answer: String(n), wrong: nums(n, [10 * o + t, n + 10, n + 1]), explain: t + ' tens and ' + o + ' ones make ' + n + '.' }; }, 6)],
      ['One more, one less', 'Step forward or back.', FL.rounds(function () { var n = r(2, 29), up = r(0, 1), a = up ? n + 1 : n - 1; return { vis: FL.says('rocket', 'One ' + (up ? 'more' : 'less') + ' than <b>' + n + '</b>?'), q: 'What is one ' + (up ? 'more' : 'less') + ' than ' + n + '?', answer: String(a), wrong: nums(a, [up ? n - 1 : n + 1, n, a + 10]), explain: 'One ' + (up ? 'more' : 'less') + ' than ' + n + ' is ' + a + '.' }; }, 6)],
      ['Bigger or smaller?', 'Compare two numbers.', FL.rounds(function () { var a = r(1, 30), b = r(1, 30); if (a === b) b++; var big = r(0, 1); return { vis: FL.says('rocket', a + ' or ' + b + '?'), q: 'Which number is ' + (big ? 'bigger' : 'smaller') + '?', answer: String(big ? Math.max(a, b) : Math.min(a, b)), wrong: [String(big ? Math.min(a, b) : Math.max(a, b))], keepOrder: true, explain: (big ? Math.max(a, b) : Math.min(a, b)) + ' is ' + (big ? 'bigger' : 'smaller') + '.' }; }, 6)],
      ['Missing number', 'Fill the gap on the track.', FL.rounds(function () { var s = r(1, 15), gap = s + r(1, 4), lst = []; for (var i = s; i < s + 6; i++) lst.push(i); return { vis: FL.track(s, s + 5, lst.filter(function (x) { return x !== gap; })).replace('>' + gap + '<', '>?<'), q: 'Which number is missing?', answer: String(gap), wrong: nums(gap, [gap + 1, gap - 1, gap + 10]), explain: 'The missing number is ' + gap + '.' }; }, 6)]
    ]
  });

  /* ================= 2. Adding and taking away: Benny the bear's apple tree ================= */
  FL.topic({ n: 202, year: 'P2', short: 'Adding', title: 'Adding and taking away', blurb: 'Help Benny the bear add and take away apples, up to 20.',
    lessons: [
      LS('Which way round should I add two numbers?', 'that you can add two numbers either way round and get the same answer.', {
        intro: ['Benny the bear', 'Apples in two baskets', "Hello! I'm Benny the bear. I have apples in two baskets. I can add them either way round. The answer is the same!", FL.says('bear', '3 + 5 or 5 + 3?')],
        ex: [['Three and five', 'Count them all', [["Three apples and five apples. Count them all: eight.", FL.groups(3, 5, 'apple')]]],
          ['Turn it round', 'Five and three', [["Now five apples and three apples. Count them all: still eight!", FL.groups(5, 3, 'apple')]]],
          ['A turnaround fact', 'Both ways', [["Three plus five is eight. Five plus three is eight. They are turnaround facts.", E('3 + 5 = 8 = 5 + 3', 'g')]]]],
        real: ['Sharing a snack', "Two biscuits on one plate and six on another: eight. Six and two: still eight.", E('2 + 6 = 6 + 2 = 8', 'b')],
        turn: ["Your turn! Four plus seven is eleven. What is seven plus four? Pause and try it.", E('7 + 4 = ?'), "It is the same: eleven.", E('11', 'g')],
        rec: ["Adding two numbers gives the same answer either way round.", ['3 + 5 = 5 + 3', 'Same answer', 'Use the fact you know', 'Works for adding only']],
        deep: ['Knowing one fact gives you its turnaround fact for free.', 'This works for adding, not for taking away: 5 − 3 is not 3 − 5.']
      }),
      LS('Which order should I add numbers in?', 'to start with the bigger number and count on.', {
        intro: ['Start big', 'Fewer steps', "Benny has a clever trick. Put the bigger number first, then count on the smaller one. It is much quicker!", FL.says('bear', 'Start with the big number!')],
        ex: [['Two plus nine', 'Swap them', [["Two plus nine: start at nine and count on two. Ten, eleven. The answer is eleven.", FL.track(8, 12, [9, 11], [[9, 10], [10, 11]])]]],
          ['Make ten first', 'Three numbers', [["Six plus three plus four. Look for numbers that make ten: six and four. Ten plus three is thirteen.", E('6 + 4 = 10, 10 + 3 = 13', 'g')]]],
          ['Doubles first', 'Spot a double', [["Five plus two plus five. Five and five is ten. Add two: twelve.", E('5 + 5 + 2 = 12', 'g')]]]],
        real: ['Picking apples', "Benny picks one apple, then eight more. Start at eight and count on one: nine apples.", E('8 + 1 = 9', 'b')],
        turn: ["Your turn! What is three plus eight? Pause and try it.", E('3 + 8 = ?'), "Start at eight and count on three: nine, ten, eleven.", E('11', 'g')],
        rec: ["Start with the bigger number. Look for pairs that make ten.", ['Biggest number first', 'Count on the small one', 'Find pairs that make 10', 'Then add the rest']],
        deep: ['Counting on two is quicker than counting on nine.', 'Start counting from the next number: from 9, count 10, 11.']
      }),
      LS('How can using near doubles help me add numbers?', 'how a double you know helps you add numbers that are next to each other.', {
        intro: ['Doubles', 'The same number twice', "A double is the same number added twice, like four and four. Benny knows his doubles. They help him add numbers that are nearly the same!", FL.groups(4, 4, 'apple')],
        ex: [['Double four', 'Four and four', [["Four plus four is eight. That is double four.", E('4 + 4 = 8', 'g')]]],
          ['Near double', 'Four plus five', [["Four plus five is one more than four plus four. Eight and one more: nine.", FL.groups(4, 5, 'apple')]]],
          ['Another one', 'Six plus seven', [["Six plus six is twelve. Six plus seven is one more: thirteen.", E('6 + 6 = 12, so 6 + 7 = 13', 'g')]]]],
        real: ['Wheels', "A bike has two wheels. Two bikes: double two, four wheels. Add a trike's three wheels to two? Two plus three is one more than double two: five.", E('2 + 3 = 5', 'b')],
        turn: ["Your turn! Five plus five is ten. What is five plus six? Pause and try it.", E('5 + 6 = ?'), "One more than ten: eleven.", E('11', 'g')],
        rec: ["Use a double you know, then add or take away one.", ['Learn your doubles', 'Spot numbers next to each other', 'Double, then one more', 'Or double, then one less']],
        deep: ['Doubles are easy to remember, so near doubles become easy too.', 'For 7 + 6 you can double 6 and add 1, or double 7 and take 1.']
      }),
      LS('How can adding help me with subtracting?', 'how an adding fact helps you take away.', {
        intro: ['Fact families', 'Adding and taking away', "Adding and taking away are friends. If Benny knows three plus four is seven, he also knows seven take away four is three!", FL.says('bear', '3 + 4 = 7, so 7 − 4 = 3')],
        ex: [['Birds fly away', 'Seven birds', [["Seven birds sit on a branch. Four fly away. Three plus four is seven, so three are left.", E('7 − 4 = 3', 'g')]]],
          ['The family', 'Four facts', [["Three, four and seven make a fact family. Three plus four is seven. Four plus three is seven. Seven take away four is three. Seven take away three is four.", V.list(['3 + 4 = 7', '4 + 3 = 7', '7 − 4 = 3', '7 − 3 = 4'])]]],
          ['Count on to subtract', 'Ten take away eight', [["Ten take away eight: what goes with eight to make ten? Two!", E('8 + 2 = 10, so 10 − 8 = 2', 'g')]]]],
        real: ['Eating apples', "Benny has nine apples. He eats five. Five and four make nine, so four are left.", E('9 − 5 = 4', 'b')],
        turn: ["Your turn! Six plus two is eight. What is eight take away two? Pause and try it.", E('8 − 2 = ?'), "Six!", E('6', 'g')],
        rec: ["If you know an adding fact, you know two taking-away facts.", ['3 + 4 = 7', '7 − 4 = 3', '7 − 3 = 4', 'Count on to take away']],
        deep: ['Taking away undoes adding.', 'In a take away, the biggest number comes first: 7 − 4, not 4 − 7.']
      })
    ],
    acts: [
      ['Adding baskets', 'How many are there altogether?', FL.rounds(function (k) { var a = r(1, k > 2 ? 9 : 5), b = r(1, k > 2 ? 9 : 5); return { vis: FL.groups(a, b, pick(['apple', 'sweet', 'flower'])), q: a + ' + ' + b + ' = ?', answer: String(a + b), wrong: nums(a + b, [a + b + 1, a + b - 1, a + b + 2]), explain: 'Start with ' + Math.max(a, b) + ' and count on ' + Math.min(a, b) + ': ' + (a + b) + '.' }; }, 6)],
      ['Make ten', 'How many more counters fill the frame?', FL.rounds(function () { var n = r(1, 9); return { vis: FL.frame(n), q: 'How many more make 10?', answer: String(10 - n), wrong: nums(10 - n, [11 - n, 9 - n, n]), explain: n + ' and ' + (10 - n) + ' make 10.' }; }, 6)],
      ['Birds fly away', 'Some birds fly away. How many are left?', FL.rounds(function () { var a = r(4, 12), b = r(1, a - 1); return { vis: FL.things(a, 'duck') + '<p class="fl-big">' + b + ' fly away!</p>', q: a + ' − ' + b + ' = ?', answer: String(a - b), wrong: nums(a - b, [a - b + 1, a - b - 1, a + b]), explain: b + ' + ' + (a - b) + ' = ' + a + ', so ' + (a - b) + ' are left.' }; }, 6)]
    ],
    more: [
      ['Apple adding', 'Add two groups.', FL.rounds(function () { var a = r(1, 6), b = r(1, 4); return { vis: FL.groups(a, b, 'apple'), q: a + ' + ' + b + ' = ?', answer: String(a + b), wrong: nums(a + b, [a + b + 1, a + b - 1, a + b + 2]), explain: a + ' and ' + b + ' make ' + (a + b) + '.' }; }, 6)],
      ['Double it!', 'Doubles.', FL.rounds(function () { var a = r(1, 10); return { vis: FL.groups(a, a, 'sweet'), q: 'What is double ' + a + '?', answer: String(2 * a), wrong: nums(2 * a, [2 * a + 1, 2 * a - 1, a + 1]), explain: a + ' and ' + a + ' make ' + 2 * a + '.' }; }, 6)],
      ['Near doubles', 'Double, then one more.', FL.rounds(function () { var a = r(2, 9); return { vis: FL.groups(a, a + 1, 'sweet'), q: a + ' + ' + (a + 1) + ' = ?', answer: String(2 * a + 1), wrong: nums(2 * a + 1, [2 * a, 2 * a + 2, a + 1]), explain: 'Double ' + a + ' is ' + 2 * a + ', and one more is ' + (2 * a + 1) + '.' }; }, 6)],
      ['Ducks take apples', 'Take away.', FL.rounds(function () { var a = r(4, 10), b = r(1, a - 1); return { vis: FL.things(a, 'apple', 5) + FL.things(b, 'duck', 5), q: a + ' apples. ' + b + ' ducks take one each. How many are left?', answer: String(a - b), wrong: nums(a - b, [a - b + 1, a - b - 1, a + b]), explain: a + ' − ' + b + ' = ' + (a - b) + '.' }; }, 6)],
      ['Adding to 20', 'Bigger adding.', FL.rounds(function () { var a = r(8, 13), b = r(2, 7); return { vis: FL.says('bear', a + ' + ' + b + ' = ?'), q: 'What is ' + a + ' + ' + b + '?', answer: String(a + b), wrong: nums(a + b, [a + b + 1, a + b - 1, a + b + 10]), explain: 'Start at ' + a + ' and count on ' + b + ': ' + (a + b) + '.' }; }, 6)]
    ]
  });

  /* ================= 3. Money: Molly the mouse's toy shop ================= */
  FL.topic({ n: 203, year: 'P2', short: 'Money', title: 'Money', blurb: 'Shop at Molly the mouse’s toy shop: coins and notes, making amounts, paying and change.',
    lessons: [
      LS('What coins and notes do we use?', 'the coins and notes we use and what each is worth.', {
        intro: ['Molly’s toy shop', 'Coins and notes', "Hello! I'm Molly the mouse and this is my toy shop. We pay with coins and notes. Each one is worth a different amount.", FL.says('mouse', 'Welcome to my shop!')],
        ex: [['Copper coins', '1p and 2p', [["The brown coins are one penny and two pence.", FL.coins([1, 2])]]],
          ['Silver coins', '5p, 10p, 20p, 50p', [["The silver coins are five pence, ten pence, twenty pence and fifty pence. Twenty and fifty pence have flat sides.", FL.coins([5, 10, 20, 50])]]],
          ['Pounds', '£1, £2 and notes', [["The gold coins are one pound and two pounds. Notes are worth even more: five pounds and ten pounds.", FL.coins([100, 200, 500, 1000])]]]],
        real: ['Piggy bank', "Molly's piggy bank has all sorts of coins. She sorts them so she can count them.", FL.coins([1, 2, 5, 10, 20, 50])],
        turn: ["Your turn! Which is worth more: a ten pence coin or a two pence coin? Pause and try it.", FL.coins([10, 2]), "Ten pence is worth more.", E('10p', 'g')],
        rec: ["Each coin and note has its own value.", ['1p, 2p: brown', '5p, 10p, 20p, 50p: silver', '£1, £2: gold', '£5, £10: notes']],
        deep: ['A bigger coin is not always worth more: 5p is smaller than 2p but worth more.', 'Always read the number on the coin.']
      }),
      LS('How can different coins and notes make the same total?', 'that you can make the same amount in different ways.', {
        intro: ['Same total', 'Different coins', "Molly sells a ball for ten pence. You can pay with one ten pence coin, or with smaller coins that add up to ten pence!", FL.coins([10])],
        ex: [['Two fives', '5p + 5p', [["Five pence and five pence make ten pence.", FL.coins([5, 5])]]],
          ['Lots of coins', '5p + 2p + 2p + 1p', [["Five, seven, nine, ten. These coins make ten pence too.", FL.coins([5, 2, 2, 1])]]],
          ['Twenty pence', 'Different ways', [["Twenty pence can be one 20p coin, two 10p coins, or a 10p and two 5p coins.", FL.coins([10, 5, 5])]]]],
        real: ['Paying for a toy', "A toy car costs fifteen pence. Molly's friend pays with a ten pence and a five pence coin.", FL.coins([10, 5])],
        turn: ["Your turn! Can a five pence and two two pence coins make nine pence? Pause and try it.", FL.coins([5, 2, 2]), "Five, seven, nine. Yes!", E('5p + 2p + 2p = 9p', 'g')],
        rec: ["The same total can be made with different coins. Count on from the biggest coin.", ['Start with the biggest coin', 'Count on the others', 'Many ways to make a total', 'Fewer coins is easier to carry']],
        deep: ['Shops give change in different coins, but the total is what matters.', 'Count the value of each coin, not the number of coins.']
      }),
      LS('How can adding coins help me pay for something?', 'how to add coins to pay the right amount.', {
        intro: ['Paying', 'Add the coins', "To pay, add the coins until you reach the price. Start with the biggest coin, then count on.", FL.says('mouse', 'That will be 8p, please!')],
        ex: [['Eight pence', '5p + 2p + 1p', [["Start with five. Add two: seven. Add one: eight. Paid!", FL.coins([5, 2, 1])]]],
          ['Twelve pence', '10p + 2p', [["Ten and two make twelve pence.", FL.coins([10, 2])]]],
          ['Seventeen pence', '10p + 5p + 2p', [["Ten, fifteen, seventeen pence.", FL.coins([10, 5, 2])]]]],
        real: ['Ice lolly', "An ice lolly costs twenty pence. A ten, a five and a five pence coin make twenty.", FL.coins([10, 5, 5])],
        turn: ["Your turn! What do a ten pence and a five pence coin make? Pause and try it.", FL.coins([10, 5]), "Fifteen pence.", E('15p', 'g')],
        rec: ["Start with the biggest coin and count on to the price.", ['Biggest coin first', 'Count on each coin', 'Stop at the price', 'Check the total']],
        deep: ['Counting on from the biggest coin is quickest.', 'If you go past the price, you have paid too much.']
      }),
      LS('How can counting on help me find change from 20p?', 'how to count on to find the change.', {
        intro: ['Change', 'Money back', "If you pay with a coin worth more than the price, the shop gives you change. Count on from the price to find it.", FL.says('mouse', 'Here is your change!')],
        ex: [['From 10p', 'A 6p sweet', [["A sweet costs six pence. You pay ten pence. Count on from six: seven, eight, nine, ten. Four pence change.", FL.track(6, 10, [6, 10], [[6, 7], [7, 8], [8, 9], [9, 10]])]]],
          ['From 20p', 'A 15p pencil', [["A pencil costs fifteen pence. You pay twenty pence. From fifteen to twenty is five. Five pence change.", E('15p + 5p = 20p', 'g')]]],
          ['From 20p', 'An 18p ball', [["A ball costs eighteen pence. Count on: nineteen, twenty. Two pence change.", E('18p + 2p = 20p', 'g')]]]],
        real: ['At the shop', "Molly's comic costs twelve pence. She pays twenty pence. From twelve to twenty is eight pence change.", E('12p + 8p = 20p', 'b')],
        turn: ["Your turn! A toy costs seven pence. You pay ten pence. How much change? Pause and try it.", E('10p − 7p = ?'), "Count on from seven: eight, nine, ten. Three pence.", E('3p', 'g')],
        rec: ["Count on from the price to the money you paid.", ['Start at the price', 'Count on to what you paid', 'The jumps are the change', 'Check by adding']],
        deep: ['Shopkeepers count on to give change, just like this.', 'Change is what is left over, so it is always less than what you paid.']
      })
    ],
    acts: [
      ['Coin spotter', 'Which coin is this?', FL.rounds(function () { var c = pick([1, 2, 5, 10, 20, 50, 100, 200]), all = [1, 2, 5, 10, 20, 50, 100, 200].map(FL.money); return { vis: '<div style="max-width:160px;margin:0 auto">' + FL.coins([c], 150) + '</div>', q: 'How much is this coin worth?', answer: FL.money(c), wrong: shuffle(all.filter(function (x) { return x !== FL.money(c); })).slice(0, 3), explain: 'This is ' + FL.money(c) + '.' }; }, 6)],
      ['Fill the purse', 'Put coins in the purse to pay Molly.', FL.purse([3, 6, 8, 11, 15, 20], [1, 2, 5, 10])],
      ['Can I buy it?', 'Count the coins. Do you have enough?', FL.rounds(function () { var cs = shuffle([1, 2, 5, 10]).slice(0, r(2, 3)), t = cs.reduce(function (a, b) { return a + b; }, 0), price = t + pick([-3, -1, 0, 2, 4]); if (price < 1) price = t; var yes = t >= price; return { vis: FL.coins(cs) + FL.says('mouse', 'This toy costs <b>' + price + 'p</b>'), q: 'You have ' + cs.map(FL.money).join(' + ') + '. Can you buy it?', answer: yes ? 'Yes' : 'No', wrong: [yes ? 'No' : 'Yes'], keepOrder: true, explain: 'The coins make ' + t + 'p. ' + (yes ? 'That is enough.' : 'You need ' + (price - t) + 'p more.') }; }, 6)]
    ],
    more: [
      ['How much money?', 'Add the coins.', FL.rounds(function () { var cs = shuffle([1, 2, 5, 10]).slice(0, r(2, 3)), t = cs.reduce(function (x, y) { return x + y; }, 0); return { vis: FL.coins(cs), q: 'How much money is this?', answer: t + 'p', wrong: [t + 1, t - 1, t + 2].filter(function (x) { return x > 0; }).map(function (x) { return x + 'p'; }), explain: 'Start with the biggest coin: ' + t + 'p.' }; }, 6)],
      ['Which is worth more?', 'Compare two coins.', FL.rounds(function () { var cs = shuffle([1, 2, 5, 10, 20, 50, 100, 200]).slice(0, 2), hi = Math.max(cs[0], cs[1]); return { vis: FL.coins(cs), q: 'Which coin is worth more?', answer: FL.money(hi), wrong: [FL.money(Math.min(cs[0], cs[1]))], explain: FL.money(hi) + ' is worth more.' }; }, 6)],
      ['Name the coin', 'What is this coin?', FL.rounds(function () { var c = pick([1, 2, 5, 10, 20, 50, 100, 200]), all = [1, 2, 5, 10, 20, 50, 100, 200]; return { vis: FL.coins([c]), q: 'What is this coin?', answer: FL.money(c), wrong: shuffle(all.filter(function (x) { return x !== c; })).slice(0, 2).map(FL.money), explain: 'It is ' + FL.money(c) + '.' }; }, 6)],
      ['Change from 10p', 'Count on to 10p.', FL.rounds(function () { var c = r(1, 9); return { vis: FL.coins([10]) + FL.says('mouse', 'It costs ' + c + 'p'), q: 'You pay 10p. How much change?', answer: (10 - c) + 'p', wrong: [10 - c + 1, Math.max(1, 10 - c - 1) === 10 - c ? 10 - c + 2 : Math.max(1, 10 - c - 1), c].filter(function (x) { return x !== 10 - c; }).map(function (x) { return x + 'p'; }), explain: 'Count on from ' + c + 'p to 10p: ' + (10 - c) + 'p.' }; }, 6)],
      ['Which costs more?', 'Compare prices.', FL.rounds(function () { var a = r(1, 19), b = r(1, 19); if (a === b) b++; var k = shuffle([['a ball', a], ['a kite', b]]); return { vis: FL.says('mouse', k[0][0] + ': ' + k[0][1] + 'p<br>' + k[1][0] + ': ' + k[1][1] + 'p'), q: 'Which costs more?', answer: (a > b ? 'a ball' : 'a kite'), wrong: [a > b ? 'a kite' : 'a ball'], keepOrder: true, explain: Math.max(a, b) + 'p is more.' }; }, 6)]
    ]
  });

  /* ================= 4. Time: Ollie the owl's busy day ================= */
  FL.topic({ n: 204, year: 'P2', short: 'Time', title: 'Time', blurb: 'Spend a busy day with Ollie the owl: o’clock and half past, days and months, and how long things take.',
    lessons: [
      LS('How to tell the time', 'how to read o’clock and half past on a clock.', {
        intro: ['Ollie the owl', 'The clock', "Hoo! I'm Ollie the owl. A clock has two hands. The short hand shows the hour. The long hand shows the minutes.", FL.says('owl', 'Short hand: hour. Long hand: minutes.')],
        ex: [['O’clock', 'Long hand on 12', [["When the long hand points to twelve, it is o'clock. The short hand points to three. It is three o'clock.", '<div style="max-width:200px;margin:0 auto">' + V.clock(3, 0) + '</div>']]],
          ['Half past', 'Long hand on 6', [["When the long hand points to six, it is half past. The short hand is just past four. It is half past four.", '<div style="max-width:200px;margin:0 auto">' + V.clock(4, 30) + '</div>']]],
          ['Another one', 'Seven o’clock', [["Long hand on twelve, short hand on seven. Seven o'clock: time for breakfast!", '<div style="max-width:200px;margin:0 auto">' + V.clock(7, 0) + '</div>']]]],
        real: ['Bedtime', "Ollie wakes up at eight o'clock in the evening. Owls sleep in the day!", '<div style="max-width:200px;margin:0 auto">' + V.clock(8, 0) + '</div>'],
        turn: ["Your turn! The long hand is on twelve and the short hand is on five. What time is it? Pause and try it.", '<div style="max-width:180px;margin:0 auto">' + V.clock(5, 0) + '</div>', "Five o'clock.", E('5 o’clock', 'g')],
        rec: ["The short hand shows the hour. Long hand on 12: o'clock. Long hand on 6: half past.", ['Short hand: hour', 'Long hand: minutes', 'Long hand on 12: o’clock', 'Long hand on 6: half past']],
        deep: ['At half past, the short hand sits halfway between two numbers.', 'Read the short hand first, then the long hand.']
      }),
      LS('What are the days of the week and the months of the year?', 'the order of the days of the week and the months of the year.', {
        intro: ['Days and months', 'A week and a year', "There are seven days in a week and twelve months in a year. They always come in the same order.", V.list(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'])],
        ex: [['The week', 'Seven days', [["Monday, Tuesday, Wednesday, Thursday, Friday are school days. Saturday and Sunday are the weekend.", E('7 days in a week', 'g')]]],
          ['What comes next?', 'After Tuesday', [["The day after Tuesday is Wednesday. The day before Tuesday is Monday.", E('Monday → Tuesday → Wednesday', 'g')]]],
          ['The months', 'Twelve months', [["January, February, March, April, May, June, July, August, September, October, November, December. Then it starts again!", E('12 months in a year', 'g')]]]],
        real: ['Birthdays', "Ollie's birthday is in May. Molly's is in June, the month after.", E('May → June', 'b')],
        turn: ["Your turn! What day comes after Friday? Pause and try it.", E('Friday → ?'), "Saturday!", E('Saturday', 'g')],
        rec: ["Seven days in a week, twelve months in a year, always in the same order.", ['7 days in a week', 'Weekend: Saturday, Sunday', '12 months in a year', 'After December comes January']],
        deep: ['The days and months go round in a circle and start again.', 'Days have capital letters: Monday, not monday.']
      }),
      LS('How can I put the events of a day in order?', 'how to order events using before, after, morning, afternoon and evening.', {
        intro: ['Ollie’s day', 'First, next, last', "Things happen in order. We use words like first, next, before, after, morning, afternoon and evening.", FL.says('owl', 'First, next, then, last!')],
        ex: [['Morning', 'Getting ready', [["In the morning you wake up, get dressed, then eat breakfast.", V.list(['Wake up', 'Get dressed', 'Eat breakfast'])]]],
          ['Before and after', 'Lunch time', [["We eat lunch after morning playtime and before afternoon lessons.", E('playtime → lunch → lessons', 'g')]]],
          ['Evening', 'Bedtime', [["In the evening you have a bath, read a story, then go to sleep.", V.list(['Bath', 'Story', 'Sleep'])]]]],
        real: ['A trip', "First Ollie packs his bag, next he catches the bus, then he visits the zoo, and last he comes home.", V.list(['Pack the bag', 'Catch the bus', 'Visit the zoo', 'Come home'])],
        turn: ["Your turn! What comes first: brushing your teeth or going to bed? Pause and try it.", E('teeth or bed?'), "Brush your teeth first, then go to bed.", E('Brush teeth first', 'g')],
        rec: ["Put events in order with first, next, then and last.", ['Morning, afternoon, evening', 'Before and after', 'First, next, then, last', 'Some things must come first']],
        deep: ['Ordering events helps us plan our day.', 'Afternoon comes after lunch, not before.']
      }),
      LS('How long is a minute, an hour and a day?', 'how long a minute, an hour and a day are, and which things take each.', {
        intro: ['How long?', 'Minutes, hours, days', "Some things are quick and take minutes. Some take hours. Some take days! Ollie thinks about how long things take.", FL.says('owl', 'Quick or slow?')],
        ex: [['A minute', 'Quick things', [["Washing your hands takes about one minute.", E('about 1 minute', 'g')]]],
          ['An hour', 'Longer things', [["Watching a film takes about two hours. One hour is sixty minutes.", E('1 hour = 60 minutes', 'g')]]],
          ['A day', 'Very long', [["A day is twenty-four hours. It includes the night when we sleep!", E('1 day = 24 hours', 'g')]]]],
        real: ['Growing seeds', "A bean seed takes about a week to sprout. That is seven days!", E('about 7 days', 'b')],
        turn: ["Your turn! Does eating an apple take about a minute or about a day? Pause and try it.", E('eating an apple'), "About a minute, or a few minutes.", E('minutes', 'g')],
        rec: ["Choose minutes for quick things, hours for longer things and days for very long things.", ['60 seconds = 1 minute', '60 minutes = 1 hour', '24 hours = 1 day', '7 days = 1 week']],
        deep: ['Estimating time helps us plan.', 'A minute is quicker than an hour, even though both start with numbers.']
      })
    ],
    acts: [
      ['Set the clock', 'Move the hands to show the time.', FL.setClock([[3, 0], [7, 0], [11, 0], [2, 30], [6, 30], [9, 30]])],
      ['What time is it?', 'Read the clock.', FL.rounds(function () { var h = r(1, 12), half = r(0, 1), nm = half ? 'half past ' + h : h + ' o’clock', w = [half ? h + ' o’clock' : 'half past ' + h, (h % 12 + 1) + ' o’clock', 'half past ' + (h % 12 + 1)]; return { vis: '<div style="max-width:200px;margin:0 auto">' + V.clock(h, half ? 30 : 0) + '</div>', q: 'What time does the clock show?', answer: nm, wrong: w, explain: half ? 'The long hand is on 6: half past ' + h + '.' : 'The long hand is on 12: ' + h + ' o’clock.' }; }, 6)],
      ['Day by day', 'Which day comes before or after?', FL.rounds(function () { var D = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], i = r(0, 6), after = r(0, 1), ans = after ? D[(i + 1) % 7] : D[(i + 6) % 7]; return { vis: FL.says('owl', 'Today is <b>' + D[i] + '</b>'), q: 'What day comes ' + (after ? 'after' : 'before') + ' ' + D[i] + '?', answer: ans, wrong: shuffle(D.filter(function (x) { return x !== ans && x !== D[i]; })).slice(0, 3), explain: (after ? D[i] + ', then ' + ans : ans + ', then ' + D[i]) + '.' }; }, 6)]
    ],
    more: [
      ['O’clock or half past?', 'Read the clock.', FL.rounds(function () { var h = r(1, 12), m = pick([0, 30]); return { vis: '<div style="max-width:180px;margin:0 auto">' + V.clock(h, m) + '</div>', q: 'What time is it?', answer: m ? 'half past ' + h : h + ' o’clock', wrong: [m ? h + ' o’clock' : 'half past ' + h, (h % 12 + 1) + ' o’clock'], explain: 'The long hand is on ' + (m ? 'six: half past.' : 'twelve: o’clock.') }; }, 6)],
      ['One hour later', 'Move the short hand on.', FL.rounds(function () { var h = r(1, 11); return { vis: '<div style="max-width:180px;margin:0 auto">' + V.clock(h, 0) + '</div>', q: 'It is ' + h + ' o’clock. What time will it be in one hour?', answer: (h + 1) + ' o’clock', wrong: [(h - 1 || 12) + ' o’clock', (h + 2) + ' o’clock'], explain: 'One hour after ' + h + ' is ' + (h + 1) + ' o’clock.' }; }, 6)],
      ['Days of the week', 'Before and after.', FL.rounds(function () { var D = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], i = r(0, 6), af = r(0, 1), a = D[(i + (af ? 1 : 6)) % 7]; return { vis: FL.says('owl', 'Today is <b>' + D[i] + '</b>.'), q: 'What day comes ' + (af ? 'after' : 'before') + ' ' + D[i] + '?', answer: a, wrong: shuffle(D.filter(function (x) { return x !== a && x !== D[i]; })).slice(0, 2), explain: a + '.' }; }, 6)],
      ['Months of the year', 'What comes next?', FL.rounds(function () { var M = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'], i = r(0, 10); return { vis: FL.says('owl', M[i] + ' …'), q: 'Which month comes after ' + M[i] + '?', answer: M[i + 1], wrong: shuffle(M.filter(function (x, k) { return k !== i + 1 && k !== i; })).slice(0, 2), explain: M[i] + ', then ' + M[i + 1] + '.' }; }, 6)],
      ['Minutes, hours or days?', 'How long does it take?', FL.rounds(function () { var e = pick([['brush your teeth', 'minutes'], ['eat an apple', 'minutes'], ['sleep at night', 'hours'], ['a school day', 'hours'], ['a holiday', 'days'], ['grow a sunflower', 'days'], ['tie your shoes', 'minutes'], ['watch a film', 'hours']]); return { vis: FL.says('owl', 'How long does it take to <b>' + e[0] + '</b>?'), q: 'Is it about a few minutes, hours or days?', answer: e[1], wrong: ['minutes', 'hours', 'days'].filter(function (x) { return x !== e[1]; }), keepOrder: ['minutes', 'hours', 'days'], explain: 'About a few ' + e[1] + '.' }; }, 6)]
    ]
  });

  /* ================= 5. Shapes and data: Finn the fox's shape park ================= */
  FL.topic({ n: 205, year: 'P2', short: 'Shapes, data', title: 'Shapes and data', blurb: 'Explore Finn the fox’s shape park: flat shapes, solid shapes, sorting, tally charts and pictograms.',
    lessons: [
      LS('What are 2D shapes?', 'how to name flat shapes by their sides and corners.', {
        intro: ['Finn the fox', 'Flat shapes', "Hi! I'm Finn the fox. In my park there are lots of flat shapes. We call them 2D shapes. We name them by counting their sides and corners.", FL.shapeRow(['circle', 'triangle', 'square', 'rectangle'])],
        ex: [['Triangle', '3 sides', [["A triangle has three straight sides and three corners.", FL.shape('triangle', '#ffd166', 140)]]],
          ['Square and rectangle', '4 sides', [["A square has four sides all the same length. A rectangle has four sides too: two long and two short.", FL.shapeRow(['square', 'rectangle'], 110)]]],
          ['Circle', 'Round', [["A circle is round. It has one curved side and no corners.", FL.shape('circle', '#7cc4ff', 140)]]]],
        real: ['In the playground', "The hopscotch squares are squares. The roundabout is a circle. The slide ladder has rectangles.", FL.shapeRow(['square', 'circle', 'rectangle'], 90)],
        turn: ["Your turn! How many sides does a triangle have? Pause and try it.", FL.shape('triangle', '#f7a8d8', 120), "Three sides.", E('3', 'g')],
        rec: ["Name a 2D shape by counting its sides and corners.", ['Triangle: 3 sides', 'Square: 4 equal sides', 'Rectangle: 4 sides, 2 long, 2 short', 'Circle: round, no corners']],
        deep: ['A square is a special rectangle with all sides the same.', 'A triangle is still a triangle if it is turned round.']
      }),
      LS('What is the difference between a 2D shape and a 3D object?', 'that 2D shapes are flat and 3D objects are solid.', {
        intro: ['Flat or solid?', '2D and 3D', "A 2D shape is flat, like a drawing. A 3D object is solid: you can pick it up and hold it!", FL.shapeRow(['square', 'cube'], 110)],
        ex: [['Square and cube', 'Flat and solid', [["A square is flat. A cube is solid. Each face of a cube is a square!", FL.shapeRow(['square', 'cube'], 110)]]],
          ['Circle and sphere', 'Round things', [["A circle is flat. A sphere is a solid ball.", FL.shapeRow(['circle', 'sphere'], 110)]]],
          ['More solids', 'Cylinder and cone', [["A tin of beans is a cylinder. An ice cream cone is a cone.", FL.shapeRow(['cylinder', 'cone'], 110)]]]],
        real: ['At home', "A dice is a cube. A ball is a sphere. A cereal box is a cuboid.", FL.shapeRow(['cube', 'sphere', 'cuboid'], 90)],
        turn: ["Your turn! Is a football 2D or 3D? Pause and try it.", FL.shape('sphere', null, 110), "3D. It is a solid sphere.", E('3D', 'g')],
        rec: ["2D shapes are flat. 3D objects are solid.", ['2D: flat', '3D: solid', 'Cube faces are squares', 'A ball is a sphere']],
        deep: ['You can draw a 2D shape. You can hold a 3D object.', 'A picture of a cube is still showing a 3D object.']
      }),
      LS('How can I sort shapes?', 'how to sort shapes into groups by their sides, corners or colour.', {
        intro: ['Sorting', 'Put them in groups', "Finn tidies his park by sorting shapes into groups. We can sort by number of sides, by straight or curved, or by colour.", FL.shapeRow(['triangle', 'square', 'circle', 'oval'], 80)],
        ex: [['Straight or curved', 'Two groups', [["Triangles, squares and rectangles have straight sides. Circles and ovals are curved.", FL.shapeRow(['triangle', 'circle'], 100)]]],
          ['By sides', 'Three or four?', [["Triangles have three sides. Squares and rectangles have four.", FL.shapeRow(['triangle', 'square', 'rectangle'], 90)]]],
          ['The odd one out', 'Which one is different?', [["Square, rectangle, circle, square. The circle is the odd one out: it has no straight sides.", FL.shapeRow(['square', 'rectangle', 'circle', 'square'], 70)]]]],
        real: ['Toy box', "Finn sorts his blocks: all the cubes in one box, all the balls in another.", FL.shapeRow(['cube', 'sphere'], 100)],
        turn: ["Your turn! Which is the odd one out: triangle, triangle, square? Pause and try it.", FL.shapeRow(['triangle', 'triangle', 'square'], 80), "The square: it has four sides.", E('square', 'g')],
        rec: ["Choose a rule, then put each shape in the right group.", ['Choose a rule', 'Straight or curved', 'Count the sides', 'Find the odd one out']],
        deep: ['The same shapes can be sorted in different ways.', 'Size does not change the shape: a big triangle is still a triangle.']
      }),
      LS('How do I record and display data?', 'how to count things with tally marks and show them in a pictogram.', {
        intro: ['Counting with tally marks', 'Finn’s fruit survey', "Finn asks his friends their favourite fruit. To keep count, he makes a tally mark for each answer. Every fifth mark goes across the other four.", FL.tally(7)],
        ex: [['Tally marks', 'Groups of five', [["Four marks, then a line across makes five. This tally shows seven: five and two more.", FL.tally(7)]]],
          ['Pictogram', 'Pictures for counting', [["A pictogram uses a picture for each answer. Apples: four. Fish: two. Stars: three.", FL.picto([['Apple', 4, 'apple'], ['Fish', 2, 'fish'], ['Star', 3, 'star']])]]],
          ['Reading it', 'Which is most?', [["The longest row shows the favourite. Apples have the most: four.", E('Apples: 4', 'g')]]]],
        real: ['Class pets', "Finn's class votes for a class pet. Five want a fish, three want a rabbit. The fish wins!", FL.picto([['Fish', 5, 'fish'], ['Rabbit', 3, 'flower']])],
        turn: ["Your turn! How many does this tally show? Pause and try it.", FL.tally(6), "Five and one more: six.", E('6', 'g')],
        rec: ["Tally marks help us count. Pictograms help us see the answer.", ['One mark for each', 'Fifth mark goes across', 'Pictogram: a picture each', 'Longest row is most']],
        deep: ['Counting tally marks in fives is quick.', 'Each picture in a pictogram must be the same size, so the rows are fair.']
      })
    ],
    acts: [
      ['Shape spotter', 'Name the shape.', FL.rounds(function () { var k = pick(['circle', 'triangle', 'square', 'rectangle', 'pentagon', 'hexagon']), all = ['circle', 'triangle', 'square', 'rectangle', 'pentagon', 'hexagon']; return { vis: '<div style="text-align:center">' + FL.shape(k, null, 150) + '</div>', q: 'What is this shape called?', answer: k, wrong: shuffle(all.filter(function (x) { return x !== k; })).slice(0, 3), explain: { circle: 'Round with no corners: a circle.', triangle: '3 sides: a triangle.', square: '4 equal sides: a square.', rectangle: '4 sides, 2 long and 2 short: a rectangle.', pentagon: '5 sides: a pentagon.', hexagon: '6 sides: a hexagon.' }[k] }; }, 6)],
      ['Flat or solid?', 'Is it a 2D shape or a 3D object?', FL.rounds(function () { var solid = r(0, 1), k = solid ? pick(FL.SOLIDS) : pick(['circle', 'triangle', 'square', 'rectangle', 'hexagon']); return { vis: '<div style="text-align:center">' + FL.shape(k, null, 150) + '</div>', q: 'Is this flat (2D) or solid (3D)?', answer: solid ? '3D solid' : '2D flat', wrong: [solid ? '2D flat' : '3D solid'], keepOrder: true, explain: 'This is a ' + k + '. ' + (solid ? 'It is solid: 3D.' : 'It is flat: 2D.') }; }, 6)],
      ['Tally counter', 'How many does the tally show?', FL.rounds(function () { var n = r(2, 15); return { vis: '<div style="max-width:420px;margin:0 auto">' + FL.tally(n) + '</div>', q: 'How many tally marks?', answer: String(n), wrong: nums(n, [n + 1, n - 1, n + 5, n - 5]), explain: 'Count the fives first, then the ones: ' + n + '.' }; }, 6)]
    ],
    more: [
      ['Name the shape', 'What is it called?', FL.rounds(function () { var k = pick(['circle', 'triangle', 'square', 'rectangle', 'oval']); return { vis: '<div style="text-align:center">' + FL.shape(k, null, 140) + '</div>', q: 'What is this shape?', answer: k, wrong: shuffle(['circle', 'triangle', 'square', 'rectangle', 'oval'].filter(function (x) { return x !== k; })).slice(0, 2), explain: 'It is a ' + k + '.' }; }, 6)],
      ['Count the sides', 'How many sides?', FL.rounds(function () { var k = pick([['triangle', 3], ['square', 4], ['rectangle', 4], ['pentagon', 5], ['hexagon', 6], ['circle', 0]]); return { vis: '<div style="text-align:center">' + FL.shape(k[0], null, 140) + '</div>', q: 'How many straight sides does it have?', answer: String(k[1]), wrong: nums(k[1], [k[1] + 1, k[1] - 1, k[1] + 2]), explain: 'A ' + k[0] + ' has ' + k[1] + ' straight sides.' }; }, 6)],
      ['Count the corners', 'How many corners?', FL.rounds(function () { var k = pick([['triangle', 3], ['square', 4], ['rectangle', 4], ['hexagon', 6], ['oval', 0], ['circle', 0]]); return { vis: '<div style="text-align:center">' + FL.shape(k[0], null, 140) + '</div>', q: 'How many corners does it have?', answer: String(k[1]), wrong: nums(k[1], [k[1] + 1, k[1] - 1, k[1] + 2]), explain: 'A ' + k[0] + ' has ' + k[1] + ' corners.' }; }, 6)],
      ['Read the tally', 'Count the tally marks.', FL.rounds(function () { var n = r(3, 15); return { vis: '<div style="text-align:center">' + FL.tally(n) + '</div>', q: 'How many?', answer: String(n), wrong: nums(n, [n + 1, n - 1, n + 5]), explain: 'Count the fives, then the ones: ' + n + '.' }; }, 6)],
      ['Picture chart', 'Most or fewest?', FL.rounds(function () { var it = [['apples', 'apple'], ['stars', 'star'], ['fish', 'fish']].map(function (x) { return [x[0], r(1, 7), x[1]]; }); if (it[0][1] === it[1][1]) it[0][1]++; if (it[1][1] === it[2][1]) it[2][1] = it[2][1] > 1 ? it[2][1] - 1 : it[2][1] + 2; if (it[0][1] === it[2][1]) it[0][1] = Math.min(8, it[0][1] + 1); var most = r(0, 1), s = it.slice().sort(function (a, b) { return most ? b[1] - a[1] : a[1] - b[1]; }); return { vis: FL.picto(it), q: 'Which has the ' + (most ? 'most' : 'fewest') + '?', answer: s[0][0], wrong: [s[1][0], s[2][0]], explain: s[0][0] + ' has the ' + (most ? 'longest' : 'shortest') + ' row.' }; }, 6)]
    ]
  });
})();
