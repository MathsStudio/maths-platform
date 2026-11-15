/* fl_p3.js: Primary 3 (First level). Eight topics, each with four story lessons, three hands-on
   activities and practice questions at Low, Medium and High (so P3 also has the Strengths Check). */
(function () {
  'use strict';
  var FL = window.FL, BT = window.BT; if (!FL || !BT || !BT.L) return;
  var L = BT.L, E = L.E, LS = L.lesson, V = BT.sv, r = FL.r, pick = FL.pick, shuffle = FL.shuffle, Q = FL.Q, MC = FL.MC;
  function nums(a, w) { var o = [String(a)]; w.forEach(function (x) { if (x >= 0 && o.indexOf(String(x)) < 0) o.push(String(x)); }); return o.slice(1); }
  function clk(h, m, w) { return '<div style="max-width:' + (w || 190) + 'px;margin:0 auto">' + V.clock(h, m) + '</div>'; }
  function tname(h, m) { return m === 0 ? h + ' o’clock' : m === 30 ? 'half past ' + h : m === 15 ? 'quarter past ' + h : 'quarter to ' + (h % 12 + 1); }

  /* ================= 1. Numbers: Captain Pip's treasure ================= */
  var g1 = {
    seq: function (big) { var j = pick(big ? [2, 5, 10, 100] : [2, 5, 10]), s = j * r(0, big ? 8 : 5), down = r(0, 1), a = []; for (var i = 0; i < 4; i++) a.push(down ? s + (4 - i) * j : s + i * j); var nx = down ? s : s + 4 * j; return Q('Number patterns', 'What comes next? <b>' + a.join(', ') + ', …</b>', nx, ['What is the jump between the numbers?', 'Jump ' + (down ? 'back ' : 'on ') + j + ' from the last number.'], 'The jump is ' + j + (down ? ' back' : '') + '. Next: ' + nx + '.'); },
    hto: function (big) { var h = big ? r(1, 9) : r(1, 3), t = r(0, 9), o = r(0, 9), n = h * 100 + t * 10 + o, part = pick(['hundreds', 'tens', 'ones']), ans = part === 'hundreds' ? h : part === 'tens' ? t : o; return Q('Hundreds, tens, ones', 'How many <b>' + part + '</b> are in <b>' + n + '</b>?', ans, ['Write the number in a place value chart: H T O.', 'Read the digit in the ' + part + ' column.'], n + ' = ' + h + ' hundreds, ' + t + ' tens and ' + o + ' ones.'); },
    cmp: function (big) { var a = r(10, big ? 999 : 100), b = r(10, big ? 999 : 100); if (a === b) b++; return MC('Comparing numbers', 'Which number is <b>bigger</b>?', Math.max(a, b), [Math.min(a, b)], ['Compare the hundreds first, then the tens.', 'The number further along the number line is bigger.'], Math.max(a, b) + ' is bigger than ' + Math.min(a, b) + '.'); },
    rnd10: function (big) { var n = r(11, big ? 199 : 99); if (n % 10 === 5) n++; var a = Math.round(n / 10) * 10; return Q('Rounding', 'Round <b>' + n + '</b> to the nearest 10.', a, ['Which two tens is it between?', 'Look at the ones: 5 or more rounds up.'], n + ' is between ' + Math.floor(n / 10) * 10 + ' and ' + (Math.floor(n / 10) + 1) * 10 + '. It rounds to ' + a + '.'); }
  };
  FL.topic({ n: 301, year: 'P3', short: 'Numbers', title: 'Numbers to 100 and beyond', blurb: 'Hunt for treasure with Captain Pip: number patterns, hundreds, tens and ones, comparing and rounding.',
    lessons: [
      FL.LS('How can I use number patterns to work out a sequence?', 'P3', 'how to find the rule in a pattern and use it to fill in missing numbers.', {
        intro: ['Captain Pip', 'Treasure numbers', "Ahoy! I'm Captain Pip. My treasure map has number patterns. Find the jump and you will find the treasure!", FL.says('pirate', '5, 10, 15, 20 … what next?')],
        ex: [['Counting in fives', 'Up by 5', [["Five, ten, fifteen, twenty. Each jump is five. Next is twenty-five.", E('5, 10, 15, 20, 25', 'g')]]],
          ['Counting back', 'Down by 10', [["Ninety, eighty, seventy. Each jump is ten back. Next is sixty.", E('90, 80, 70, 60', 'g')]]],
          ['A missing number', 'Fill the gap', [["Two, four, blank, eight. The jump is two, so the gap is six.", E('2, 4, 6, 8', 'g')]]]],
        real: ['Gold coins', "Captain Pip stacks gold coins in tens: ten, twenty, thirty, forty coins.", E('10, 20, 30, 40', 'b')],
        turn: ["Your turn! What is the missing number: ten, fifteen, blank, twenty-five? Pause and try it.", E('10, 15, ?, 25'), "The jump is five. The missing number is twenty.", E('20', 'g')],
        rec: ["Find the jump, check it works every time, then use it to fill in or continue the pattern.", ['Find the jump', 'Up or down?', 'Check every pair', 'Fill gaps and continue']],
        deep: ['Patterns of 2, 5 and 10 are the start of the times tables.', 'A pattern can go down as well as up.']
      }),
      LS('What are hundreds, tens and ones?', 'how a three-digit number is made of hundreds, tens and ones.', {
        intro: ['Bigger numbers', 'Hundreds', "Ten tens make one hundred! Big numbers have three digits: hundreds, tens and ones.", E('10 tens = 100', 'b')],
        ex: [['One hundred and twenty-three', '1 hundred, 2 tens, 3 ones', [["One hundred, two tens and three ones make one hundred and twenty-three.", E('100 + 20 + 3 = 123', 'g')]]],
          ['Two hundred and forty', 'A zero', [["Two hundreds, four tens and no ones: two hundred and forty.", E('200 + 40 + 0 = 240', 'g')]]],
          ['Digit values', 'Where is it?', [["In three hundred and fifty-seven, the five is in the tens. It is worth fifty.", E('357: the 5 is worth 50', 'g')]]]],
        real: ['Treasure chest', "Captain Pip has one bag of a hundred coins, three bags of ten and six single coins: one hundred and thirty-six coins.", E('136', 'b')],
        turn: ["Your turn! What is two hundreds, five tens and one one? Pause and try it.", E('200 + 50 + 1'), "Two hundred and fifty-one.", E('251', 'g')],
        rec: ["A three-digit number has hundreds, tens and ones.", ['10 ones = 1 ten', '10 tens = 1 hundred', 'H, T, O', 'Zero holds a place']],
        deep: ['Each place is ten times the place to its right.', '204 is not 24: the zero keeps the 2 in the hundreds.']
      }),
      LS('How do I compare and order numbers to 1000?', 'how to tell which number is bigger and put numbers in order.', {
        intro: ['Bigger or smaller?', 'Compare from the left', "To compare numbers, look at the biggest place first: the hundreds. If they match, look at the tens.", FL.says('pirate', 'Which chest has more?')],
        ex: [['Hundreds first', '312 or 298?', [["Three hundred is more than two hundred, so three hundred and twelve is bigger.", E('312 > 298', 'g')]]],
          ['Tens next', '145 or 152?', [["Both have one hundred. Look at the tens: five tens beats four tens. One hundred and fifty-two is bigger.", E('152 > 145', 'g')]]],
          ['In order', 'Smallest first', [["Order sixty-three, thirty-six and one hundred and three: thirty-six, sixty-three, one hundred and three.", E('36, 63, 103', 'g')]]]],
        real: ['Race times', "The smallest number of seconds wins a race. Forty-eight seconds beats fifty-two seconds.", E('48 < 52', 'b')],
        turn: ["Your turn! Which is bigger: four hundred and nine or four hundred and ninety? Pause and try it.", E('409 or 490'), "Both have four hundred. Nine tens beats zero tens: four hundred and ninety.", E('490', 'g')],
        rec: ["Compare the hundreds, then the tens, then the ones.", ['Biggest place first', 'Then the next place', '> means bigger than', '< means smaller than']],
        deep: ['A number with more digits is bigger (when there are no decimals).', 'Do not just look at the last digit.']
      }),
      LS('How do I round numbers to the nearest 10?', 'how to round a number to the nearest ten.', {
        intro: ['Rounding', 'Nearest ten', "Rounding means finding the nearest ten. Think of the number line: which ten is closer?", FL.track(20, 30, [23])],
        ex: [['Twenty-three', 'Closer to 20', [["Twenty-three is between twenty and thirty. It is closer to twenty. It rounds to twenty.", FL.track(20, 30, [20, 23])]]],
          ['Twenty-seven', 'Closer to 30', [["Twenty-seven is closer to thirty. It rounds to thirty.", FL.track(20, 30, [27, 30])]]],
          ['Exactly halfway', 'Twenty-five', [["Twenty-five is exactly in the middle. We round up: thirty.", E('25 → 30', 'g')]]]],
        real: ['About how many?', "There are thirty-eight children in the hall. That is about forty.", E('38 → 40', 'b')],
        turn: ["Your turn! Round sixty-two to the nearest ten. Pause and try it.", E('62 → ?'), "Sixty-two is closer to sixty.", E('60', 'g')],
        rec: ["Look at the ones digit. 0 to 4 rounds down. 5 to 9 rounds up.", ['Find the two tens', 'Which is closer?', 'Ones 5 or more: round up', 'Ones 4 or less: round down']],
        deep: ['Rounding helps us estimate quickly.', 'Halfway (a 5) always rounds up.']
      })
    ],
    acts: [
      ['Treasure patterns', 'Find the missing number.', FL.rounds(function () { var j = pick([2, 5, 10]), s = j * r(0, 6), gap = r(1, 3), a = []; for (var i = 0; i < 5; i++) a.push(i === gap ? '?' : s + i * j); var ans = s + gap * j; return { vis: FL.says('pirate', a.join(', ')), q: 'What is the missing number?', answer: String(ans), wrong: nums(ans, [ans + j, ans - j, ans + 1]), explain: 'The jump is ' + j + '. The missing number is ' + ans + '.' }; }, 6)],
      ['Build the number', 'How many hundreds, tens and ones?', FL.rounds(function () { var t = r(1, 9), o = r(0, 9), n = t * 10 + o; return { vis: FL.tensOnes(t, o), q: 'What number is shown?', answer: String(n), wrong: nums(n, [o * 10 + t, n + 10, n - 1, n + 1]), explain: t + ' tens and ' + o + ' ones make ' + n + '.' }; }, 6)],
      ['Round it!', 'Round to the nearest 10.', FL.rounds(function () { var n = r(11, 98); if (n % 10 === 0) n++; var a = Math.round(n / 10) * 10, lo = Math.floor(n / 10) * 10; return { vis: FL.track(lo, lo + 10, [n]), q: 'Round ' + n + ' to the nearest 10.', answer: String(a), wrong: nums(a, [a === lo ? lo + 10 : lo, n, a + 10]), explain: n + ' rounds to ' + a + '.' }; }, 6)]
    ],
    gens: { low: [function () { return g1.seq(false); }, function () { return g1.hto(false); }, function () { return g1.cmp(false); }],
      medium: [function () { return g1.seq(false); }, function () { return g1.hto(true); }, function () { return g1.cmp(true); }, function () { return g1.rnd10(false); }],
      high: [function () { return g1.seq(true); }, function () { return g1.hto(true); }, function () { return g1.cmp(true); }, function () { return g1.rnd10(true); }] }
  });

  /* ================= 2. Adding and subtracting: Frankie the frog's lily pads ================= */
  var g2 = {
    add: function (a, b) { return Q('Adding', 'What is <b>' + a + ' + ' + b + '</b>?', a + b, ['Start with the bigger number.', 'Make the next ten, then add the rest.'], a + ' + ' + b + ' = ' + (a + b) + '.'); },
    sub: function (a, b) { return Q('Subtracting', 'What is <b>' + a + ' − ' + b + '</b>?', a - b, ['Count back, or count on from ' + b + ' to ' + a + '.', 'Jump back to the ten first.'], a + ' − ' + b + ' = ' + (a - b) + '.'); },
    three: function () { var a = r(1, 9), b = 10 - a, c = r(1, 9); return Q('Reordering', 'What is <b>' + a + ' + ' + c + ' + ' + b + '</b>?', a + b + c, ['Look for two numbers that make 10.', a + ' + ' + b + ' = 10.'], a + ' + ' + b + ' = 10, and 10 + ' + c + ' = ' + (10 + c) + '.'); },
    word: function (big) { var a = r(big ? 25 : 12, big ? 68 : 40), b = r(5, big ? 29 : 15); return Q('Word problems', 'Frankie has <b>' + a + '</b> flies. He catches <b>' + b + '</b> more. How many does he have now?', a + b, ['Is this adding or taking away?', 'Add the tens, then the ones.'], a + ' + ' + b + ' = ' + (a + b) + '.'); }
  };
  FL.topic({ n: 302, year: 'P3', short: 'Adding', title: 'Adding and subtracting', blurb: 'Hop along with Frankie the frog: reordering, bridging through 10, counting on and partitioning.',
    lessons: [
      LS('How can reordering numbers help me add them?', 'how changing the order of numbers can make adding easier.', {
        intro: ['Frankie the frog', 'Easy order', "Ribbit! I'm Frankie. When I add lots of numbers, I change the order to make it easier. The answer stays the same!", FL.says('frog', '3 + 8 + 7 = ?')],
        ex: [['Make ten', '3 + 8 + 7', [["Three and seven make ten. Ten plus eight is eighteen.", E('3 + 7 = 10, 10 + 8 = 18', 'g')]]],
          ['Doubles', '6 + 5 + 6', [["Six and six is twelve. Twelve plus five is seventeen.", E('6 + 6 + 5 = 17', 'g')]]],
          ['Bigger first', '4 + 23', [["Start with the bigger number: twenty-three plus four is twenty-seven.", E('23 + 4 = 27', 'g')]]]],
        real: ['Shopping', "A pen for 4p, a rubber for 9p and a sticker for 6p. Four and six make ten, plus nine is nineteen pence.", E('4 + 6 + 9 = 19p', 'b')],
        turn: ["Your turn! What is five plus seven plus five? Pause and try it.", E('5 + 7 + 5'), "Five and five make ten. Plus seven is seventeen.", E('17', 'g')],
        rec: ["You can add in any order. Look for pairs that make ten, and doubles.", ['Any order, same answer', 'Find pairs that make 10', 'Spot doubles', 'Start big, count on small']],
        deep: ['Reordering works for adding, not for taking away.', 'Pairs to ten: 1 and 9, 2 and 8, 3 and 7, 4 and 6, 5 and 5.']
      }),
      LS('How can bridging through 10 help me to add and subtract?', 'how to jump to the next ten first, then add or take away the rest.', {
        intro: ['Bridging', 'Hop to the ten', "Frankie hops on lily pads. To add eight to seven, he hops to ten first, then adds the rest.", FL.track(7, 15, [7, 10, 15], [[7, 10], [10, 15]])],
        ex: [['Adding', '7 + 8', [["Seven plus three is ten. Eight is three and five. Ten plus five is fifteen.", E('7 + 3 + 5 = 15', 'g')]]],
          ['Subtracting', '13 − 5', [["Thirteen take away three is ten. Take away two more: eight.", E('13 − 3 − 2 = 8', 'g')]]],
          ['Bigger numbers', '28 + 6', [["Twenty-eight plus two is thirty. Plus four more is thirty-four.", E('28 + 2 + 4 = 34', 'g')]]]],
        real: ['Sweets', "Frankie has nine sweets and gets four more. Nine plus one is ten, plus three is thirteen.", E('9 + 4 = 13', 'b')],
        turn: ["Your turn! What is eight plus six? Pause and try it.", E('8 + 6'), "Eight plus two is ten. Plus four is fourteen.", E('14', 'g')],
        rec: ["Jump to the next ten first, then add or take away what is left.", ['Find the next ten', 'Split the number', 'Jump to ten', 'Then the rest']],
        deep: ['Tens are easy to work with, so we aim for them.', 'Know your pairs to ten so you can split numbers quickly.']
      }),
      LS('How can counting on help me add two-digit numbers?', 'how to add two-digit numbers by counting on in tens, then ones.', {
        intro: ['Counting on', 'Tens, then ones', "To add twenty-four to thirty-five, Frankie starts at thirty-five, jumps on two tens, then four ones.", FL.says('frog', '35 + 24 = ?')],
        ex: [['Tens first', '35 + 24', [["Start at thirty-five. Jump ten: forty-five. Jump ten: fifty-five. Then four ones: fifty-nine.", E('35 → 45 → 55 → 59', 'g')]]],
          ['Another one', '42 + 13', [["Forty-two, jump ten: fifty-two. Then three ones: fifty-five.", E('42 → 52 → 55', 'g')]]],
          ['Across a ten', '47 + 15', [["Forty-seven, jump ten: fifty-seven. Then five: fifty-eight, fifty-nine, sixty, sixty-one, sixty-two.", E('47 → 57 → 62', 'g')]]]],
        real: ['Stickers', "Frankie has thirty-one stickers and gets twenty-six more. Thirty-one, forty-one, fifty-one, then six more: fifty-seven.", E('31 + 26 = 57', 'b')],
        turn: ["Your turn! What is fifty-three plus twenty-one? Pause and try it.", E('53 + 21'), "Fifty-three, sixty-three, seventy-three, then one more: seventy-four.", E('74', 'g')],
        rec: ["Start at the bigger number. Count on the tens, then the ones.", ['Start with the bigger number', 'Jump the tens', 'Then the ones', 'Check with a number line']],
        deep: ['Jumping in tens is much quicker than counting in ones.', 'Remember to add the ones after the tens.']
      }),
      LS('How can partitioning help me add two-digit numbers?', 'how to split numbers into tens and ones to add them.', {
        intro: ['Partitioning', 'Split it up', "Partitioning means splitting a number into tens and ones. Add the tens together, add the ones together, then put them back.", E('34 = 30 + 4', 'b')],
        ex: [['34 + 25', 'Tens and ones', [["Thirty plus twenty is fifty. Four plus five is nine. Fifty plus nine is fifty-nine.", E('50 + 9 = 59', 'g')]]],
          ['41 + 36', 'Again', [["Forty plus thirty is seventy. One plus six is seven. Seventy-seven.", E('70 + 7 = 77', 'g')]]],
          ['26 + 38', 'Ones over ten', [["Twenty plus thirty is fifty. Six plus eight is fourteen. Fifty plus fourteen is sixty-four.", E('50 + 14 = 64', 'g')]]]],
        real: ['Points', "In a quiz, Frankie scores twenty-three and then forty-five points. Sixty plus eight: sixty-eight.", E('23 + 45 = 68', 'b')],
        turn: ["Your turn! What is thirty-two plus fifteen? Pause and try it.", E('32 + 15'), "Thirty plus ten is forty. Two plus five is seven. Forty-seven.", E('47', 'g')],
        rec: ["Split into tens and ones, add each part, then put them together.", ['Split into tens and ones', 'Add the tens', 'Add the ones', 'Put them together']],
        deep: ['Partitioning is how column adding works later on.', 'If the ones make more than ten, carry the extra ten.']
      })
    ],
    acts: [
      ['Lily pad hops', 'Bridge through 10 to add.', FL.rounds(function () { var a = r(5, 9), b = r(3, 9); while (a + b <= 10) b++; return { vis: FL.track(a, a + b, [a, 10, a + b], [[a, 10], [10, a + b]]), q: a + ' + ' + b + ' = ?', answer: String(a + b), wrong: nums(a + b, [a + b - 1, a + b + 1, a + b + 10]), explain: a + ' + ' + (10 - a) + ' = 10, then + ' + (a + b - 10) + ' = ' + (a + b) + '.' }; }, 6)],
      ['Make ten first', 'Find the pair that makes 10.', FL.rounds(function () { var a = r(1, 9), b = 10 - a, c = r(2, 9), list = shuffle([a, b, c]); return { vis: FL.says('frog', list.join(' + ')), q: 'What is ' + list.join(' + ') + '?', answer: String(a + b + c), wrong: nums(a + b + c, [a + b + c + 1, a + b + c - 1, 20]), explain: a + ' + ' + b + ' = 10, then 10 + ' + c + ' = ' + (10 + c) + '.' }; }, 6)],
      ['Tens and ones adding', 'Add two-digit numbers.', FL.rounds(function (k) { var a = r(11, 49), b = r(11, 39); if (k < 3) { while ((a % 10) + (b % 10) > 9) b--; } return { vis: FL.says('frog', a + ' + ' + b + ' = ?'), q: 'What is ' + a + ' + ' + b + '?', answer: String(a + b), wrong: nums(a + b, [a + b + 10, a + b - 10, a + b + 1]), explain: 'Tens: ' + Math.floor(a / 10) * 10 + ' + ' + Math.floor(b / 10) * 10 + ' = ' + (Math.floor(a / 10) + Math.floor(b / 10)) * 10 + '. Ones: ' + a % 10 + ' + ' + b % 10 + ' = ' + (a % 10 + b % 10) + '. Total ' + (a + b) + '.' }; }, 6)]
    ],
    gens: { low: [function () { return g2.add(r(2, 9), r(2, 9)); }, function () { var a = r(11, 18); return g2.sub(a, r(2, a - 10 + 2)); }, g2.three],
      medium: [function () { return g2.add(r(11, 49), r(5, 9)); }, function () { return g2.add(r(11, 40), r(11, 40)); }, function () { var a = r(21, 60); return g2.sub(a, r(3, 9)); }, g2.three, function () { return g2.word(false); }],
      high: [function () { return g2.add(r(25, 69), r(15, 29)); }, function () { var a = r(41, 99); return g2.sub(a, r(11, 39)); }, function () { return g2.word(true); }] }
  });

  /* ================= 3. Multiplication: Benny's bakery ================= */
  var g3 = {
    fact: function (tables, hi) { var t = pick(tables), n = r(1, hi || 10); return Q('Times tables', 'What is <b>' + n + ' × ' + t + '</b>?', n * t, ['Count in ' + t + 's, ' + n + ' times.', 'Use a fact you know.'], n + ' × ' + t + ' = ' + n * t + '.'); },
    groups: function (tables) { var t = pick(tables), n = r(2, 6), kind = pick(['apple', 'star', 'fish']); return Q('Equal groups', 'There are <b>' + n + '</b> plates with <b>' + t + '</b> cakes on each. How many cakes altogether?', n * t, ['Add ' + t + ' again and again.', 'That is ' + n + ' × ' + t + '.'], n + ' × ' + t + ' = ' + n * t + '.'); },
    array: function () { var a = r(2, 5), b = pick([2, 5, 10]); return Q('Arrays', 'How many dots? (' + a + ' rows of ' + b + ')', a * b, ['Count one row.', 'Add the rows: ' + a + ' × ' + b + '.'], a + ' × ' + b + ' = ' + a * b + '.', V.dots(a, b, 'var(--accent)')); },
    turn: function () { var a = pick([2, 5, 10]), b = r(2, 9); return MC('Turnaround facts', '<b>' + b + ' × ' + a + ' = ' + a * b + '</b>. What is <b>' + a + ' × ' + b + '</b>?', a * b, [a * b + a, a + b, a * b - b], ['Multiplying works either way round.', 'The answer is the same.'], a + ' × ' + b + ' = ' + b + ' × ' + a + ' = ' + a * b + '.'); }
  };
  FL.topic({ n: 303, year: 'P3', short: 'Multiply', title: 'Multiplication', blurb: 'Bake with Benny the bear: equal groups, arrays, turnaround facts and the 2, 5 and 10 times tables.',
    lessons: [
      LS('How can adding help me multiply?', 'how adding the same number again and again is multiplying.', {
        intro: ['Benny’s bakery', 'Equal groups', "Benny bakes buns in trays. Each tray has the same number. Adding the same number again and again is called multiplying!", FL.says('bear', '3 trays of 5 buns')],
        ex: [['Three trays of five', '5 + 5 + 5', [["Five plus five plus five is fifteen. That is three lots of five: three times five.", E('5 + 5 + 5 = 3 × 5 = 15', 'g')]]],
          ['Four pairs', '2 + 2 + 2 + 2', [["Four pairs of socks: two, four, six, eight. Four times two is eight.", E('4 × 2 = 8', 'g')]]],
          ['Two tens', '10 + 10', [["Two bags of ten sweets: twenty. Two times ten is twenty.", E('2 × 10 = 20', 'g')]]]],
        real: ['Party bags', "Five party bags with two sweets in each: two, four, six, eight, ten sweets.", E('5 × 2 = 10', 'b')],
        turn: ["Your turn! What is three lots of ten? Pause and try it.", E('10 + 10 + 10'), "Thirty.", E('3 × 10 = 30', 'g')],
        rec: ["Multiplying is adding equal groups. The × sign means lots of.", ['Equal groups', 'Repeated adding', '× means lots of', '3 × 5 = 5 + 5 + 5']],
        deep: ['Multiplying is a quick way to add the same number many times.', 'The groups must be equal for multiplying to work.']
      }),
      LS('How can an array help me multiply?', 'how rows and columns show a multiplication.', {
        intro: ['Arrays', 'Rows and columns', "An array puts things in neat rows. Benny lines up cupcakes: three rows of four.", V.dots(3, 4, 'var(--accent)')],
        ex: [['3 rows of 4', '3 × 4', [["Three rows with four in each row. Four, eight, twelve. Three times four is twelve.", V.dots(3, 4, 'var(--accent)')]]],
          ['2 rows of 5', '2 × 5', [["Two rows of five: ten.", V.dots(2, 5, 'var(--accent)')]]],
          ['5 rows of 2', 'Turn it round', [["Turn it round: five rows of two. Still ten!", V.dots(5, 2, 'var(--accent)')]]]],
        real: ['Egg box', "An egg box has two rows of six eggs: twelve eggs.", V.dots(2, 6, '#ffd166')],
        turn: ["Your turn! How many in four rows of five? Pause and try it.", V.dots(4, 5, 'var(--accent)'), "Five, ten, fifteen, twenty.", E('4 × 5 = 20', 'g')],
        rec: ["Count one row, then count in that number for each row.", ['Rows go across', 'Columns go down', 'Rows × in each row', 'Turn it, same total']],
        deep: ['Arrays show why multiplying works either way round.', 'Every row must have the same number.']
      }),
      LS('Which way round should I multiply two numbers?', 'that you can multiply two numbers either way round.', {
        intro: ['Either way', 'Same answer', "Two times five or five times two? It does not matter. The answer is the same: ten. Choose the way that is easier!", E('2 × 5 = 5 × 2 = 10', 'b')],
        ex: [['Easy way', '7 × 2', [["Seven times two? Think two times seven: double seven, fourteen.", E('7 × 2 = 2 × 7 = 14', 'g')]]],
          ['Counting in tens', '6 × 10', [["Six times ten is the same as ten times six: sixty.", E('6 × 10 = 60', 'g')]]],
          ['An array', 'Turn it round', [["Three rows of five, or five rows of three: fifteen either way.", V.dots(3, 5, 'var(--accent)')]]]],
        real: ['Shoes', "Eight children each have two shoes. Two times eight: sixteen shoes.", E('8 × 2 = 16', 'b')],
        turn: ["Your turn! Five times nine is forty-five. What is nine times five? Pause and try it.", E('9 × 5'), "The same: forty-five.", E('45', 'g')],
        rec: ["Multiplying two numbers gives the same answer either way round.", ['2 × 5 = 5 × 2', 'Choose the easier way', 'Arrays prove it', 'Halves the facts to learn']],
        deep: ['Knowing 3 × 5 means you also know 5 × 3.', 'This works for multiplying, not dividing.']
      }),
      LS('How can counting in 2s, 5s and 10s help me learn times tables?', 'how counting in steps gives the 2, 5 and 10 times tables.', {
        intro: ['Times tables', 'Count in steps', "Counting in twos gives the two times table. Fives give the five times table. Tens give the ten times table!", E('2, 4, 6, 8, 10 …', 'b')],
        ex: [['The 2 times table', 'Even numbers', [["Two, four, six, eight, ten. These are all even.", E('5 × 2 = 10', 'g')]]],
          ['The 5 times table', 'Ends in 5 or 0', [["Five, ten, fifteen, twenty. They end in five or zero.", E('4 × 5 = 20', 'g')]]],
          ['The 10 times table', 'Ends in 0', [["Ten, twenty, thirty. They all end in zero.", E('7 × 10 = 70', 'g')]]]],
        real: ['Clock', "The minute numbers on a clock go up in fives: five, ten, fifteen…", clk(12, 15, 160)],
        turn: ["Your turn! What is six times five? Pause and try it.", E('6 × 5'), "Count six fives: thirty.", E('30', 'g')],
        rec: ["Count in steps to find any fact in the 2, 5 and 10 times tables.", ['2s: all even', '5s: end in 5 or 0', '10s: end in 0', 'Count to the fact']],
        deep: ['The 10 times table is double the 5 times table.', 'Count the steps carefully: 6 × 5 is six jumps of five.']
      })
    ],
    acts: [
      ['Bun trays', 'How many buns altogether?', FL.rounds(function () { var t = pick([2, 5, 10]), n = r(2, 5); return { vis: '<div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center">' + Array.apply(null, Array(n)).map(function () { return '<div style="max-width:' + (t === 10 ? 220 : 130) + 'px;border:2px solid var(--line);border-radius:10px;padding:2px">' + FL.things(t, 'sweet', 5) + '</div>'; }).join('') + '</div>', q: n + ' trays of ' + t + '. How many?', answer: String(n * t), wrong: nums(n * t, [n * t + t, n + t, n * t - t]), explain: n + ' × ' + t + ' = ' + n * t + '.' }; }, 6)],
      ['Array maker', 'How many dots in the array?', FL.rounds(function () { var a = r(2, 5), b = pick([2, 3, 4, 5]); return { vis: V.dots(a, b, 'var(--accent)'), q: a + ' rows of ' + b + '. How many?', answer: String(a * b), wrong: nums(a * b, [a * b + b, a + b, a * b - 1]), explain: a + ' × ' + b + ' = ' + a * b + '.' }; }, 6)],
      ['Times table bingo', 'Find the answer.', FL.rounds(function () { var t = pick([2, 5, 10]), n = r(1, 10); return { vis: FL.says('bear', n + ' × ' + t + ' = ?'), q: 'What is ' + n + ' × ' + t + '?', answer: String(n * t), wrong: nums(n * t, [n * t + t, n * t - t, n + t]), explain: 'Count ' + n + ' ' + t + 's: ' + n * t + '.' }; }, 6)]
    ],
    gens: { low: [function () { return g3.fact([2, 10], 5); }, function () { return g3.groups([2, 10]); }, g3.array],
      medium: [function () { return g3.fact([2, 5, 10]); }, function () { return g3.groups([2, 5, 10]); }, g3.array, g3.turn],
      high: [function () { return g3.fact([2, 5, 10], 12); }, function () { return g3.groups([5, 10]); }, g3.turn, function () { var t = pick([2, 5, 10]), n = r(2, 10); return Q('Missing numbers', '<b>? × ' + t + ' = ' + n * t + '</b>. What is the missing number?', n, ['Count in ' + t + 's until you reach ' + n * t + '.', 'How many jumps?'], n + ' × ' + t + ' = ' + n * t + '.'); }] }
  });

  /* ================= 4. Division: the picnic ================= */
  var g4 = {
    share: function (tables) { var t = pick(tables), n = r(2, 10), kind = pick(['sweets', 'stickers', 'cards']); return Q('Sharing', '<b>' + n * t + '</b> ' + kind + ' are shared equally between <b>' + t + '</b> friends. How many does each get?', n, ['Give one each, again and again.', 'Or think: ' + t + ' × ? = ' + n * t + '.'], n * t + ' ÷ ' + t + ' = ' + n + '.'); },
    groups: function (tables) { var t = pick(tables), n = r(2, 10); return Q('Grouping', 'How many groups of <b>' + t + '</b> can you make from <b>' + n * t + '</b>?', n, ['Take away ' + t + ' again and again.', 'Count how many times.'], n * t + ' ÷ ' + t + ' = ' + n + '.'); },
    half: function (big) { var n = 2 * r(1, big ? 25 : 10); return Q('Halving', 'What is half of <b>' + n + '</b>?', n / 2, ['Halving means sharing into 2 equal groups.', 'Half of the tens, then half of the ones.'], 'Half of ' + n + ' is ' + n / 2 + '.'); },
    div: function (tables) { var t = pick(tables), n = r(1, 10); return Q('Dividing', 'What is <b>' + n * t + ' ÷ ' + t + '</b>?', n, ['How many ' + t + 's make ' + n * t + '?', 'Use your ' + t + ' times table.'], n * t + ' ÷ ' + t + ' = ' + n + ', because ' + n + ' × ' + t + ' = ' + n * t + '.'); }
  };
  FL.topic({ n: 304, year: 'P3', short: 'Divide', title: 'Division', blurb: 'Share a picnic fairly with Molly the mouse: sharing, grouping, arrays and halving.',
    lessons: [
      LS('How can sharing equally help me divide?', 'how dividing means sharing into equal groups.', {
        intro: ['The picnic', 'Fair shares', "Molly has twelve strawberries for three friends. Dividing means sharing them equally, so everyone gets the same.", FL.says('mouse', '12 strawberries, 3 friends')],
        ex: [['One each', 'Share them out', [["Give one to each friend, again and again, until they are all gone. Each friend gets four.", E('12 ÷ 3 = 4', 'g')]]],
          ['Ten sweets', 'Between two', [["Ten sweets shared between two: five each.", E('10 ÷ 2 = 5', 'g')]]],
          ['Twenty stickers', 'Between five', [["Twenty stickers shared between five friends: four each.", E('20 ÷ 5 = 4', 'g')]]]],
        real: ['Pizza party', "Eight slices for four children: two slices each.", E('8 ÷ 4 = 2', 'b')],
        turn: ["Your turn! Share fifteen grapes between five friends. Pause and try it.", E('15 ÷ 5'), "Three each.", E('3', 'g')],
        rec: ["Dividing means sharing into equal groups. ÷ means shared between.", ['Share one at a time', 'Everyone gets the same', '÷ means shared between', 'Check by multiplying']],
        deep: ['Sharing fairly means every group is equal.', 'Check: 3 friends × 4 each = 12.']
      }),
      LS('How can subtracting help me with division?', 'how taking away equal groups again and again is dividing.', {
        intro: ['Taking away groups', 'How many groups?', "How many bags of five can Molly fill from fifteen apples? Take away five again and again, and count!", FL.says('mouse', '15 apples, 5 in a bag')],
        ex: [['Fifteen in fives', '15 − 5 − 5 − 5', [["Fifteen take away five is ten, take away five is five, take away five is zero. Three bags!", E('15 ÷ 5 = 3', 'g')]]],
          ['Twenty in tens', '20 − 10 − 10', [["Twenty take away ten, take away ten: zero. Two groups.", E('20 ÷ 10 = 2', 'g')]]],
          ['Twelve in twos', 'Count the jumps', [["Jump back two from twelve until zero: six jumps.", FL.track(0, 12, [0, 12])]]]],
        real: ['Boats', "Twelve children, four in each boat. Twelve, eight, four, zero: three boats.", E('12 ÷ 4 = 3', 'b')],
        turn: ["Your turn! How many groups of two in ten? Pause and try it.", E('10 ÷ 2'), "Ten, eight, six, four, two, zero: five groups.", E('5', 'g')],
        rec: ["Take away the group size again and again. Count how many times.", ['Take away the group', 'Again and again', 'Count the groups', 'Stop at zero']],
        deep: ['Dividing is repeated subtraction, like multiplying is repeated adding.', 'Count the jumps, not the numbers you land on.']
      }),
      LS('How can an array help me with division?', 'how an array shows a division.', {
        intro: ['Arrays again', 'Rows show sharing', "An array of twelve dots in three rows has four in each row. So twelve divided by three is four!", V.dots(3, 4, 'var(--accent)')],
        ex: [['12 ÷ 3', 'Three rows', [["Twelve dots in three rows: four in each row.", E('12 ÷ 3 = 4', 'g')]]],
          ['12 ÷ 4', 'Four in a row', [["The same array: four in each row makes three rows. Twelve divided by four is three.", E('12 ÷ 4 = 3', 'g')]]],
          ['Fact family', 'Multiply and divide', [["Three times four is twelve, so twelve divided by three is four, and twelve divided by four is three.", V.list(['3 × 4 = 12', '4 × 3 = 12', '12 ÷ 3 = 4', '12 ÷ 4 = 3'])]]]],
        real: ['Chairs', "Twenty chairs in rows of five: four rows.", V.dots(4, 5, '#ffd166')],
        turn: ["Your turn! An array has ten dots in two rows. How many in each row? Pause and try it.", V.dots(2, 5, 'var(--accent)'), "Five in each row.", E('10 ÷ 2 = 5', 'g')],
        rec: ["The rows and columns of an array show a multiplication and two divisions.", ['Count the rows', 'Count one row', 'Multiply or divide', 'Fact families']],
        deep: ['Division undoes multiplication.', 'An array must have the same number in every row.']
      }),
      LS('How can halving help me divide?', 'how halving is dividing by two.', {
        intro: ['Halving', 'Two equal parts', "Halving means splitting into two equal parts. It is the same as dividing by two!", E('half of 8 = 8 ÷ 2 = 4', 'b')],
        ex: [['Half of 10', 'Five and five', [["Half of ten is five.", E('10 ÷ 2 = 5', 'g')]]],
          ['Half of 30', 'Half the tens', [["Thirty is three tens. Half is fifteen.", E('30 ÷ 2 = 15', 'g')]]],
          ['Half of 48', 'Tens and ones', [["Half of forty is twenty. Half of eight is four. Twenty-four.", E('48 ÷ 2 = 24', 'g')]]]],
        real: ['Sharing a cake', "Molly and Frankie share a cake cut into twelve pieces: six each.", E('12 ÷ 2 = 6', 'b')],
        turn: ["Your turn! What is half of sixteen? Pause and try it.", E('16 ÷ 2'), "Eight.", E('8', 'g')],
        rec: ["Halving is dividing by two. Halve the tens, then the ones.", ['Half = ÷ 2', 'Two equal parts', 'Halve tens, then ones', 'Doubling undoes halving']],
        deep: ['Halving and doubling are opposites.', 'Only even numbers halve into whole numbers.']
      })
    ],
    acts: [
      ['Fair shares', 'Share the treats equally.', FL.rounds(function () { var t = pick([2, 3, 4, 5]), n = r(2, 5); return { vis: FL.things(n * t, pick(['sweet', 'apple', 'star'])), q: 'Share ' + n * t + ' between ' + t + ' friends. How many each?', answer: String(n), wrong: nums(n, [n + 1, n - 1, t]), explain: n * t + ' ÷ ' + t + ' = ' + n + '.' }; }, 6)],
      ['Halve it!', 'What is half?', FL.rounds(function () { var n = 2 * r(1, 15); return { vis: FL.says('mouse', 'Half of ' + n + '?'), q: 'What is half of ' + n + '?', answer: String(n / 2), wrong: nums(n / 2, [n / 2 + 1, n / 2 - 1, n * 2]), explain: n + ' ÷ 2 = ' + n / 2 + '.' }; }, 6)],
      ['Boat groups', 'How many boats?', FL.rounds(function () { var t = pick([2, 5, 10]), n = r(2, 6); return { vis: FL.things(n * t, 'duck'), q: n * t + ' ducks, ' + t + ' in each boat. How many boats?', answer: String(n), wrong: nums(n, [n + 1, n - 1, t]), explain: n * t + ' ÷ ' + t + ' = ' + n + '.' }; }, 6)]
    ],
    gens: { low: [function () { return g4.share([2]); }, function () { return g4.half(false); }, function () { return g4.groups([10]); }],
      medium: [function () { return g4.share([2, 5, 10]); }, function () { return g4.groups([2, 5, 10]); }, function () { return g4.half(false); }, function () { return g4.div([2, 5, 10]); }],
      high: [function () { return g4.div([2, 5, 10]); }, function () { return g4.half(true); }, function () { return g4.share([3, 4, 5]); }] }
  });

  /* ================= 5. Fractions: the pizza party ================= */
  function pie(parts, shaded, col) { var s = '', cx = 60, cy = 60, R = 50; for (var i = 0; i < parts; i++) { var a0 = (i / parts) * 2 * Math.PI - Math.PI / 2, a1 = ((i + 1) / parts) * 2 * Math.PI - Math.PI / 2, la = parts === 1 ? 1 : 0; s += '<path d="M' + cx + ' ' + cy + ' L' + (cx + R * Math.cos(a0)).toFixed(1) + ' ' + (cy + R * Math.sin(a0)).toFixed(1) + ' A' + R + ' ' + R + ' 0 ' + la + ' 1 ' + (cx + R * Math.cos(a1)).toFixed(1) + ' ' + (cy + R * Math.sin(a1)).toFixed(1) + 'Z" fill="' + (i < shaded ? (col || '#ffb03b') : '#fff3d6') + '" stroke="#2b2340" stroke-width="2.5"/>'; } return FL.svg(120, 120, shaded + ' of ' + parts + ' parts', s, 200); }
  FL.pie = pie;
  var g5 = {
    name: function () { var d = pick([2, 3, 4]), nm = { 2: 'half', 3: 'third', 4: 'quarter' }[d]; return MC('Fractions', 'What fraction is shaded?', '1/' + d, ['1/2', '1/3', '1/4', '2/4'].filter(function (x) { return x !== '1/' + d; }), ['Count the equal parts.', 'One part is shaded.'], '1 of ' + d + ' equal parts: one ' + nm + '.', pie(d, 1)); },
    of: function (big) { var d = pick(big ? [2, 4, 3] : [2, 4]), k = r(1, big ? 10 : 8), n = d * k; return Q('Fraction of an amount', 'What is <b>1/' + d + '</b> of <b>' + n + '</b>?', k, ['Share ' + n + ' into ' + d + ' equal groups.', 'Divide by ' + d + '.'], n + ' ÷ ' + d + ' = ' + k + '.'); },
    parts: function () { var d = r(2, 6), nm = { 2: 'halves', 3: 'thirds', 4: 'quarters', 5: 'fifths', 6: 'sixths' }; return MC('Fractions', 'A cake is cut into <b>' + d + '</b> equal pieces. What are the pieces called?', nm[d], Object.keys(nm).filter(function (x) { return +x !== d; }).map(function (x) { return nm[x]; }).slice(0, 3), ['Count the equal pieces.', '2: halves, 3: thirds, 4: quarters.'], d + ' equal pieces are ' + nm[d] + '.', pie(d, 0)); },
    equal: function () { var eq = r(0, 1); return MC('Equal parts', 'Is this shape cut into <b>equal</b> parts?', eq ? 'Yes' : 'No', [eq ? 'No' : 'Yes'], ['Are all the parts the same size?', 'Fractions need equal parts.'], eq ? 'All the parts are the same size.' : 'The parts are different sizes.', eq ? pie(4, 0) : FL.svg(120, 120, 'unequal parts', '<rect x="10" y="10" width="100" height="100" fill="#fff3d6" stroke="#2b2340" stroke-width="2.5"/><line x1="40" y1="10" x2="40" y2="110" stroke="#2b2340" stroke-width="2.5"/><line x1="40" y1="70" x2="110" y2="70" stroke="#2b2340" stroke-width="2.5"/>', 200), true); },
    write: function () { var d = pick([2, 3, 4, 5, 6, 8]), n = r(1, d - 1); return Q('Writing fractions', 'A pizza has <b>' + d + '</b> equal slices. <b>' + n + '</b> are eaten. Write the fraction eaten (like 1/4).', n + '/' + d, ['The bottom number is how many equal parts.', 'The top number is how many are eaten.'], n + ' out of ' + d + ' slices: ' + n + '/' + d + '.', pie(d, n)); }
  };
  g5.write = (function (f) { return function () { var q = f(); q.kind = 'frac'; return q; }; })(g5.write);
  FL.topic({ n: 305, year: 'P3', short: 'Fractions', title: 'Fractions', blurb: 'Share pizzas and cakes with Finn the fox: what a fraction is, writing fractions, halves and quarters.',
    lessons: [
      LS('What is a fraction?', 'that a fraction is an equal part of a whole.', {
        intro: ['Finn’s pizza party', 'Equal parts', "Hi! It's Finn. I'm sharing a pizza. A fraction is an equal part of something whole. The parts must be exactly the same size!", pie(4, 0)],
        ex: [['Half', '2 equal parts', [["Cut a pizza into two equal parts. Each part is one half.", pie(2, 1)]]],
          ['Quarter', '4 equal parts', [["Cut it into four equal parts. Each part is one quarter.", pie(4, 1)]]],
          ['Not equal', 'Not a fraction', [["If the pieces are different sizes, they are not halves or quarters. Fractions need equal parts.", FL.svg(120, 120, 'unequal parts', '<rect x="10" y="10" width="100" height="100" fill="#fff3d6" stroke="#2b2340" stroke-width="2.5"/><line x1="35" y1="10" x2="35" y2="110" stroke="#2b2340" stroke-width="2.5"/>', 180)]]]],
        real: ['A chocolate bar', "Finn breaks a chocolate bar into three equal pieces. Each piece is one third.", pie(3, 1, '#a86b3c')],
        turn: ["Your turn! A cake is cut into four equal pieces. What is one piece called? Pause and try it.", pie(4, 1), "One quarter.", E('1/4', 'g')],
        rec: ["A fraction is an equal part of a whole.", ['Equal parts', '2 parts: halves', '3 parts: thirds', '4 parts: quarters']],
        deep: ['The more equal parts, the smaller each part is.', 'Two unequal pieces are not halves.']
      }),
      LS('How to write fractions', 'how to write a fraction with a top and bottom number.', {
        intro: ['Writing fractions', 'Two numbers', "We write a fraction with two numbers. The bottom number says how many equal parts. The top number says how many we are talking about.", E('1/4', 'b')],
        ex: [['One quarter', '1/4', [["One part out of four equal parts: one over four.", pie(4, 1)]]],
          ['Three quarters', '3/4', [["Three parts out of four: three over four.", pie(4, 3)]]],
          ['Two thirds', '2/3', [["Two parts out of three: two over three.", pie(3, 2, '#7cc4ff')]]]],
        real: ['Eaten pizza', "Finn's pizza has eight slices. He eats three. He ate three eighths.", pie(8, 3)],
        turn: ["Your turn! Write the fraction: two parts shaded out of five. Pause and try it.", pie(5, 2, '#8fd67d'), "Two over five.", E('2/5', 'g')],
        rec: ["Bottom number: how many equal parts. Top number: how many we count.", ['Bottom: equal parts', 'Top: parts we count', 'Say it: two fifths', 'Line in the middle']],
        deep: ['The bottom number is the denominator; the top is the numerator.', 'Do not swap them: 1/4 is not 4/1.']
      }),
      LS('How can halving help me find a half or a quarter of a number?', 'how to find a half or a quarter of an amount.', {
        intro: ['Half and quarter', 'Of a number', "To find half of a number, share it into two equal groups. For a quarter, halve it, then halve again!", E('half of 8 = 4, quarter of 8 = 2', 'b')],
        ex: [['Half of 12', 'Two groups', [["Twelve shared into two groups: six.", E('1/2 of 12 = 6', 'g')]]],
          ['Quarter of 12', 'Halve and halve', [["Half of twelve is six. Half of six is three. A quarter of twelve is three.", E('1/4 of 12 = 3', 'g')]]],
          ['Quarter of 20', 'Halve twice', [["Half of twenty is ten. Half of ten is five.", E('1/4 of 20 = 5', 'g')]]]],
        real: ['Strawberries', "Finn has sixteen strawberries and eats a quarter. Half of sixteen is eight, half of eight is four. He eats four.", E('1/4 of 16 = 4', 'b')],
        turn: ["Your turn! What is a quarter of eight? Pause and try it.", E('1/4 of 8'), "Half of eight is four. Half of four is two.", E('2', 'g')],
        rec: ["Half: share into 2. Quarter: halve, then halve again.", ['Half = ÷ 2', 'Quarter = ÷ 4', 'Quarter: halve twice', 'Check: 4 quarters make the whole']],
        deep: ['Two quarters make a half.', 'A quarter is smaller than a half, even though 4 is bigger than 2.']
      }),
      LS('How can I find a fraction of a shape?', 'how to find and shade fractions of shapes.', {
        intro: ['Shapes', 'Shade a fraction', "To show a fraction of a shape, split it into equal parts and shade some of them.", pie(4, 2)],
        ex: [['Half a square', 'Fold it', [["Fold a square in half. Shade one side: one half.", FL.svg(120, 120, 'half a square', '<rect x="10" y="10" width="50" height="100" fill="#ffb03b" stroke="#2b2340" stroke-width="2.5"/><rect x="60" y="10" width="50" height="100" fill="#fff3d6" stroke="#2b2340" stroke-width="2.5"/>', 170)]]],
          ['A quarter of a rectangle', '4 equal parts', [["Split a rectangle into four equal strips. Shade one: a quarter.", FL.svg(160, 80, 'a quarter of a rectangle', '<rect x="10" y="10" width="35" height="60" fill="#7cc4ff" stroke="#2b2340" stroke-width="2.5"/><rect x="45" y="10" width="35" height="60" fill="#fff" stroke="#2b2340" stroke-width="2.5"/><rect x="80" y="10" width="35" height="60" fill="#fff" stroke="#2b2340" stroke-width="2.5"/><rect x="115" y="10" width="35" height="60" fill="#fff" stroke="#2b2340" stroke-width="2.5"/>', 220)]]],
          ['Two quarters', 'Same as a half', [["Shade two quarters. That is the same as one half!", pie(4, 2)]]]],
        real: ['A flag', "A flag split into three equal stripes has one third red.", FL.svg(150, 90, 'a flag in thirds', '<rect x="10" y="10" width="43" height="70" fill="#ef5b5b" stroke="#2b2340" stroke-width="2"/><rect x="53" y="10" width="43" height="70" fill="#fff" stroke="#2b2340" stroke-width="2"/><rect x="96" y="10" width="43" height="70" fill="#4aa8ff" stroke="#2b2340" stroke-width="2"/>', 220)],
        turn: ["Your turn! How many quarters make a whole? Pause and try it.", pie(4, 4), "Four quarters.", E('4', 'g')],
        rec: ["Split into equal parts, then shade the fraction.", ['Equal parts first', 'Shade the top number', '2 quarters = 1 half', '4 quarters = 1 whole']],
        deep: ['There are many ways to cut a shape into equal parts.', 'Check the parts are really equal before shading.']
      })
    ],
    acts: [
      ['Pizza fractions', 'What fraction is shaded?', FL.rounds(function () { var d = pick([2, 3, 4, 5, 6, 8]), n = r(1, d - 1); return { vis: pie(d, n), q: 'What fraction of the pizza is eaten?', answer: n + '/' + d, wrong: [d + '/' + n, (d - n) + '/' + d, n + '/' + (d + 1)], explain: n + ' out of ' + d + ' equal slices: ' + n + '/' + d + '.' }; }, 6)],
      ['Halves and quarters', 'Find a fraction of a number.', FL.rounds(function () { var d = pick([2, 4]), k = r(1, 6), n = d * k; return { vis: FL.things(n, 'apple'), q: 'What is 1/' + d + ' of ' + n + '?', answer: String(k), wrong: nums(k, [k + 1, k * 2, n]), explain: n + ' ÷ ' + d + ' = ' + k + '.' }; }, 6)],
      ['Fair or not?', 'Are the parts equal?', FL.rounds(function () { var eq = r(0, 1), d = pick([2, 3, 4]); return { vis: eq ? pie(d, 0) : FL.svg(120, 120, 'unequal parts', '<rect x="10" y="10" width="100" height="100" fill="#fff3d6" stroke="#2b2340" stroke-width="2.5"/><line x1="' + pick([30, 40, 70]) + '" y1="10" x2="' + pick([30, 40, 70]) + '" y2="110" stroke="#2b2340" stroke-width="2.5"/>', 180), q: 'Is it cut into equal parts?', answer: eq ? 'Yes' : 'No', wrong: [eq ? 'No' : 'Yes'], keepOrder: true, explain: eq ? 'Every part is the same size.' : 'The parts are different sizes, so they are not equal.' }; }, 6)]
    ],
    gens: { low: [g5.name, function () { return g5.of(false); }, g5.equal, g5.parts], medium: [g5.name, function () { return g5.of(false); }, g5.write, g5.equal, g5.parts], high: [function () { return g5.of(true); }, g5.write, g5.name] }
  });

  /* ================= 6. Money and time: Ollie's shop and clock ================= */
  var g6 = {
    change: function (big) { var pay = big ? pick([50, 100]) : pick([10, 20]), cost = r(1, pay - 1); return Q('Change', 'You pay with <b>' + FL.money(pay) + '</b> for something that costs <b>' + FL.money(cost) + '</b>. How much change, in pence?', pay - cost, ['Count on from ' + cost + 'p to ' + pay + 'p.', 'Jump to the next ten first.'], cost + 'p + ' + (pay - cost) + 'p = ' + pay + 'p.'); },
    total: function (big) { var cs = shuffle(big ? [1, 2, 5, 10, 20, 50] : [1, 2, 5, 10]).slice(0, r(2, 4)), t = cs.reduce(function (a, b) { return a + b; }, 0); return Q('Money', 'How much money is this, in pence?', t, ['Start with the biggest coin.', 'Count on each coin.'], cs.sort(function (a, b) { return b - a; }).map(FL.money).join(' + ') + ' = ' + t + 'p.', FL.coins(cs)); },
    time: function (quarters) { var h = r(1, 12), m = pick(quarters ? [0, 15, 30, 45] : [0, 30]), ans = tname(h, m); return MC('Telling the time', 'What time does the clock show?', ans, [tname(h, (m + 30) % 60), tname(h % 12 + 1, m), tname(h, (m + 15) % 60)], ['Look at the long hand first.', '12: o’clock, 3: quarter past, 6: half past, 9: quarter to.'], 'It is ' + ans + '.', clk(h, m)); },
    later: function () { var h = r(1, 10), add = pick([1, 2, 3]); return MC('How long', 'It is <b>' + h + ' o’clock</b>. What time will it be in <b>' + add + ' hour' + (add > 1 ? 's' : '') + '</b>?', (h + add) + ' o’clock', [(h + add + 1) + ' o’clock', (h + add - 1) + ' o’clock', 'half past ' + (h + add)], ['Move the short hand on.', 'Count on ' + add + '.'], h + ' + ' + add + ' = ' + (h + add) + ' o’clock.'); }
  };
  FL.topic({ n: 306, year: 'P3', short: 'Money, time', title: 'Money and time', blurb: 'Shop and tell the time with Ollie the owl: change, making totals, quarter past and quarter to, and how long things take.',
    lessons: [
      LS('How can I use adding and subtracting to work out change?', 'how to count on or take away to find change.', {
        intro: ['Ollie’s shop', 'Change', "Ollie runs a little shop. When you pay with too much money, he gives change. Count on from the price to what you paid!", FL.says('owl', 'Here is your change!')],
        ex: [['From 20p', 'A 14p comic', [["Count on from fourteen: fifteen, sixteen … twenty. Six pence change.", E('14p + 6p = 20p', 'g')]]],
          ['From 50p', 'A 35p toy', [["From thirty-five to forty is five. Forty to fifty is ten. Fifteen pence change.", E('35p + 5p + 10p = 50p', 'g')]]],
          ['Take away', '£1 − 70p', [["One pound is one hundred pence. One hundred take away seventy is thirty pence.", E('100p − 70p = 30p', 'g')]]]],
        real: ['Lunch', "A sandwich costs 80p. Ollie pays with a pound. Eighty to one hundred: twenty pence change.", E('80p + 20p = £1', 'b')],
        turn: ["Your turn! You pay 50p for a 42p pencil. How much change? Pause and try it.", E('50p − 42p'), "Count on from forty-two to fifty: eight pence.", E('8p', 'g')],
        rec: ["Count on from the price to the money paid, or take the price away.", ['Start at the price', 'Count on to what you paid', 'Jump to tens', 'Or take away']],
        deep: ['Shopkeepers count on to give change.', 'Remember £1 = 100p.']
      }),
      FL.LS('How can different coins and notes make the same total?', 'P3', 'how to make the same total with different coins, up to £1.', {
        intro: ['Many ways', 'Same amount', "Ollie can make fifty pence in lots of ways. One 50p coin, or two 20p coins and a 10p, or five 10p coins!", FL.coins([50])],
        ex: [['Fifty pence', '20p + 20p + 10p', [["Twenty, forty, fifty.", FL.coins([20, 20, 10])]]],
          ['One pound', '50p + 20p + 20p + 10p', [["Fifty, seventy, ninety, one hundred pence: one pound.", FL.coins([50, 20, 20, 10])]]],
          ['Fewest coins', 'Biggest first', [["To make thirty-five pence with the fewest coins: twenty, ten and five.", FL.coins([20, 10, 5])]]]],
        real: ['Pocket money', "Ollie gets one pound pocket money in different coins each week, but it is always worth the same.", FL.coins([50, 20, 10, 10, 5, 5])],
        turn: ["Your turn! Do two 20p coins and a 5p make 45p? Pause and try it.", FL.coins([20, 20, 5]), "Twenty, forty, forty-five. Yes!", E('45p', 'g')],
        rec: ["The same total can be made with different coins. Use the biggest coins first for the fewest coins.", ['Count on from the biggest', 'Many ways to make a total', 'Fewest coins: biggest first', '£1 = 100p']],
        deep: ['Knowing coin combinations helps when paying and giving change.', 'Count values, not the number of coins.']
      }),
      FL.LS('How to tell the time', 'P3', 'how to tell quarter past and quarter to.', {
        intro: ['Quarters', 'Quarter past and quarter to', "The clock face can be split into four quarters. When the long hand points to three, it is quarter past. When it points to nine, it is quarter to.", clk(3, 15)],
        ex: [['Quarter past', 'Long hand on 3', [["The long hand is on three. The short hand is just past two. It is quarter past two.", clk(2, 15)]]],
          ['Quarter to', 'Long hand on 9', [["The long hand is on nine. The short hand is nearly at five. It is quarter to five.", clk(4, 45)]]],
          ['Half past', 'Long hand on 6', [["The long hand is on six: half past seven.", clk(7, 30)]]]],
        real: ['Swimming', "Ollie's swimming lesson starts at quarter past four.", clk(4, 15)],
        turn: ["Your turn! The long hand is on three and the short hand is just past nine. What time is it? Pause and try it.", clk(9, 15, 170), "Quarter past nine.", E('quarter past 9', 'g')],
        rec: ["Long hand on 12: o'clock. On 3: quarter past. On 6: half past. On 9: quarter to.", ['12: o’clock', '3: quarter past', '6: half past', '9: quarter to']],
        deep: ['Quarter to means a quarter of an hour before the next hour.', 'At quarter to, the short hand is nearly at the next number.']
      }),
      LS('How long does something take?', 'how to work out how long something takes in hours and half hours.', {
        intro: ['How long?', 'Start and finish', "To find how long something takes, look at when it starts and when it ends, then count the time between.", FL.says('owl', 'Start at 2, finish at 4')],
        ex: [['Whole hours', '2 o’clock to 4 o’clock', [["From two to three is one hour. Three to four is another. Two hours.", E('2 hours', 'g')]]],
          ['Half an hour', '3 o’clock to half past 3', [["From three o'clock to half past three is half an hour: thirty minutes.", E('30 minutes', 'g')]]],
          ['An hour and a half', '1 o’clock to half past 2', [["One to two is an hour. Two to half past two is half an hour. One and a half hours.", E('1½ hours', 'g')]]]],
        real: ['A film', "A film starts at four o'clock and ends at six o'clock. It lasts two hours.", E('4 → 6 = 2 hours', 'b')],
        turn: ["Your turn! A party starts at three o'clock and ends at five o'clock. How long is it? Pause and try it.", E('3 o’clock → 5 o’clock'), "Two hours.", E('2 hours', 'g')],
        rec: ["Count on from the start time to the finish time.", ['Find the start', 'Find the finish', 'Count the hours', 'Then the half hours']],
        deep: ['Half an hour is 30 minutes; an hour is 60 minutes.', 'Count on from the start, not from 12.']
      })
    ],
    acts: [
      ['Fill the purse', 'Pay Molly the right amount.', FL.purse([12, 18, 25, 35, 47, 60], [1, 2, 5, 10, 20, 50])],
      ['Quarter clocks', 'Set the clock.', FL.setClock([[2, 15], [4, 45], [6, 30], [9, 15], [11, 45], [3, 0]], 15)],
      ['How much change?', 'Count on to find the change.', FL.rounds(function () { var pay = pick([10, 20, 50]), cost = r(1, pay - 1); return { vis: FL.coins([pay]) + FL.says('owl', 'It costs ' + cost + 'p'), q: 'How much change from ' + pay + 'p?', answer: (pay - cost) + 'p', wrong: [(pay - cost + 1) + 'p', (pay - cost - 1 > 0 ? pay - cost - 1 : pay - cost + 2) + 'p', cost + 'p'], explain: 'Count on from ' + cost + 'p to ' + pay + 'p: ' + (pay - cost) + 'p.' }; }, 6)]
    ],
    gens: { low: [function () { return g6.total(false); }, function () { return g6.time(false); }, function () { return g6.change(false); }],
      medium: [function () { return g6.total(true); }, function () { return g6.time(true); }, function () { return g6.change(false); }, g6.later],
      high: [function () { return g6.change(true); }, function () { return g6.time(true); }, g6.later, function () { return g6.total(true); }] }
  });

  /* ================= 7. Measurement: the giant's garden ================= */
  function ruler(len) { var s = '<rect x="10" y="40" width="' + (len * 30 + 20) + '" height="36" rx="4" fill="#ffe08a" stroke="#2b2340" stroke-width="2"/>'; for (var i = 0; i <= len; i++) s += '<line x1="' + (20 + i * 30) + '" y1="40" x2="' + (20 + i * 30) + '" y2="56" stroke="#2b2340" stroke-width="2"/>' + FL.tx(20 + i * 30, 72, i, 12); return s; }
  FL.rulerPic = function (len) { var L0 = len; return FL.svg(L0 * 30 + 50, 84, 'a ruler', ruler(L0) + '<rect x="20" y="16" width="' + L0 * 30 + '" height="16" rx="8" fill="#ef5b5b" stroke="#2b2340" stroke-width="2"/>', 520); };
  var g7 = {
    len: function () { var n = r(2, 12); return Q('Measuring length', 'How long is the red pencil, in cm?', n, ['Start at 0 on the ruler.', 'Read the number at the end.'], 'It reaches ' + n + ' cm.', FL.rulerPic(n)); },
    longer: function () { var a = r(5, 30), b = r(5, 30); if (a === b) b++; return MC('Comparing length', 'A ribbon is <b>' + a + ' cm</b>. A string is <b>' + b + ' cm</b>. Which is longer?', a > b ? 'the ribbon' : 'the string', [a > b ? 'the string' : 'the ribbon'], ['Compare the numbers.', 'More cm means longer.'], (a > b ? 'The ribbon' : 'The string') + ' is longer: ' + Math.max(a, b) + ' cm.'); },
    heavy: function () { var it = shuffle([['an elephant', 'a mouse'], ['a car', 'a bike'], ['a melon', 'a grape'], ['a dog', 'a cat']])[0]; return MC('Mass', 'Which is <b>heavier</b>?', it[0], [it[1]], ['Think about lifting each one.', 'Heavier things push the balance down.'], it[0].replace(/^a(n)? /, 'The ') + ' is heavier.'); },
    unit: function () { var it = pick([['the length of a pencil', 'cm'], ['the length of a football pitch', 'm'], ['the mass of a bag of apples', 'kg'], ['how much water a bath holds', 'litres']]); return MC('Units', 'Which unit would you use to measure <b>' + it[0] + '</b>?', it[1], ['cm', 'm', 'kg', 'litres'].filter(function (x) { return x !== it[1]; }), ['Is it length, mass or how much it holds?', 'cm and m measure length.'], it[1] + '.'); }
  };
  FL.topic({ n: 307, year: 'P3', short: 'Measure', title: 'Measurement', blurb: 'Measure things in the giant’s garden with Benny the bear: length, rulers, mass and capacity.',
    lessons: [
      LS('How can I work out the length of an object?', 'how to measure length by comparing and using units.', {
        intro: ['The giant’s garden', 'How long?', "Benny is visiting a giant's garden! Everything is huge. To find how long something is, we measure its length.", FL.says('bear', 'How long is that carrot?')],
        ex: [['Compare', 'Longer or shorter', [["Put two things side by side, starting at the same place. The one that sticks out further is longer.", FL.svg(240, 90, 'two ribbons', '<rect x="10" y="15" width="200" height="20" rx="8" fill="#ef5b5b" stroke="#2b2340" stroke-width="2"/><rect x="10" y="55" width="130" height="20" rx="8" fill="#4aa8ff" stroke="#2b2340" stroke-width="2"/>', 300)]]],
          ['Count units', 'Paper clips', [["Lay paper clips end to end along a pencil. It is six paper clips long.", FL.things(6, 'star', 6)]]],
          ['Centimetres', 'A ruler', [["A ruler measures in centimetres. This pencil is eight centimetres long.", FL.rulerPic(8)]]]],
        real: ['A giant carrot', "The giant's carrot is fifty centimetres long! Benny's carrot is only fifteen.", E('50 cm > 15 cm', 'b')],
        turn: ["Your turn! How long is this pencil? Pause and try it.", FL.rulerPic(5), "Five centimetres.", E('5 cm', 'g')],
        rec: ["Line things up to compare. Use units, like cm, to measure.", ['Start at the same place', 'Longer, shorter', 'Units: cm and m', 'Start at 0 on a ruler']],
        deep: ['Using the same unit lets us compare fairly.', 'Start at 0, not at the end of the ruler.']
      }),
      LS('How do I use a ruler to measure in centimetres?', 'how to use a ruler to measure in centimetres.', {
        intro: ['Using a ruler', 'Start at zero', "Line up the end of the object with the zero on the ruler. Then read the number at the other end.", FL.rulerPic(7)],
        ex: [['Line up', 'At 0', [["Put the start of the pencil on zero. It ends at seven. It is seven centimetres.", FL.rulerPic(7)]]],
          ['Draw a line', '10 cm', [["To draw a ten centimetre line, start at zero and draw to ten.", FL.rulerPic(10)]]],
          ['Compare', 'Which is longer?', [["A nine centimetre crayon is longer than a six centimetre crayon.", E('9 cm > 6 cm', 'g')]]]],
        real: ['Worms', "Benny measures a worm: twelve centimetres long!", FL.rulerPic(12)],
        turn: ["Your turn! A pencil starts at zero and ends at eleven. How long is it? Pause and try it.", FL.rulerPic(11), "Eleven centimetres.", E('11 cm', 'g')],
        rec: ["Start at zero, read the number at the end, and write cm.", ['Start at 0', 'Keep it straight', 'Read the end number', 'Write the unit: cm']],
        deep: ['100 cm make 1 metre.', 'Do not start measuring from the end of the ruler.']
      }),
      LS('How can I compare mass with a balance?', 'how a balance shows which is heavier.', {
        intro: ['Heavy or light?', 'The balance', "A balance tells us which is heavier. The heavier side goes down. The lighter side goes up.", FL.svg(240, 140, 'a balance', '<path d="M120 20v90" stroke="#2b2340" stroke-width="4"/><path d="M40 40 200 70" stroke="#2b2340" stroke-width="5"/><path d="M20 40h40l-6 18H26z" fill="#ffd166" stroke="#2b2340" stroke-width="2"/><path d="M180 70h40l-6 18h-28z" fill="#ffd166" stroke="#2b2340" stroke-width="2"/><path d="M90 120h60" stroke="#2b2340" stroke-width="6"/>', 300)],
        ex: [['Down is heavier', 'Apple and feather', [["An apple and a feather on the balance. The apple side goes down. The apple is heavier.", E('apple heavier than feather', 'g')]]],
          ['Balanced', 'The same', [["If the balance is level, both sides weigh the same.", E('level = the same mass', 'g')]]],
          ['Kilograms', 'kg', [["We measure mass in kilograms. A bag of sugar is about one kilogram.", E('1 kg', 'g')]]]],
        real: ['The giant’s pumpkin', "The giant's pumpkin is so heavy it weighs fifty kilograms!", E('50 kg', 'b')],
        turn: ["Your turn! Which is heavier: a book or a balloon? Pause and try it.", E('book or balloon?'), "The book.", E('book', 'g')],
        rec: ["On a balance, the heavier side goes down. We measure mass in kilograms.", ['Heavier side goes down', 'Level means the same', 'Mass in kg', 'Big is not always heavy']],
        deep: ['A big balloon is light; a small stone can be heavy.', 'Look at the balance, not at the size.']
      }),
      LS('How can I compare how much containers hold?', 'how to compare capacity: how much a container holds.', {
        intro: ['Full or empty?', 'Capacity', "Capacity is how much a container can hold. A bath holds more water than a cup!", FL.says('bear', 'Which holds more?')],
        ex: [['Fill and pour', 'Compare', [["Fill the jug and pour it into the bottle. If it overflows, the jug holds more.", E('jug holds more', 'g')]]],
          ['Full, half full, empty', 'How much is in it?', [["A glass can be full, half full or empty.", V.list(['Full', 'Half full', 'Empty'])]]],
          ['Litres', 'l', [["We measure capacity in litres. A big bottle of juice holds about one litre.", E('1 litre', 'g')]]]],
        real: ['Watering can', "The giant's watering can holds ten litres. Benny's holds two litres.", E('10 litres > 2 litres', 'b')],
        turn: ["Your turn! Which holds more: a bucket or a spoon? Pause and try it.", E('bucket or spoon?'), "The bucket.", E('bucket', 'g')],
        rec: ["Capacity is how much a container holds. We measure it in litres.", ['Capacity: how much it holds', 'Full, half full, empty', 'Litres', 'Pour to compare']],
        deep: ['A tall thin glass may hold less than a short wide one.', 'Pour from one into the other to compare fairly.']
      })
    ],
    acts: [
      ['Ruler reader', 'How long is it?', FL.rounds(function () { var n = r(2, 14); return { vis: FL.rulerPic(n), q: 'How long is the pencil?', answer: n + ' cm', wrong: [(n + 1) + ' cm', (n - 1) + ' cm', (n + 2) + ' cm'], explain: 'Start at 0. It ends at ' + n + ': ' + n + ' cm.' }; }, 6)],
      ['Heavier or lighter?', 'Which is heavier?', FL.rounds(function () { var it = shuffle([['a whale', 'a fish'], ['a bike', 'a pencil'], ['a watermelon', 'a strawberry'], ['a horse', 'a rabbit'], ['a schoolbag', 'a feather'], ['a tractor', 'a football']])[0], s = r(0, 1); return { vis: FL.says('bear', it[s] + ' or ' + it[1 - s] + '?'), q: 'Which is heavier?', answer: it[0], wrong: [it[1]], explain: it[0] + ' is heavier.' }; }, 6)],
      ['Pick the unit', 'Which unit would you use?', FL.rounds(function () { var it = pick([['a pencil', 'cm'], ['a garden', 'm'], ['a bag of potatoes', 'kg'], ['a fish tank', 'litres'], ['a finger', 'cm'], ['a swimming pool', 'litres'], ['a dog', 'kg']]); return { vis: FL.says('bear', 'Measuring ' + it[0]), q: 'Which unit is best?', answer: it[1], wrong: ['cm', 'm', 'kg', 'litres'].filter(function (x) { return x !== it[1]; }), explain: it[1] + ' is best for ' + it[0] + '.' }; }, 6)]
    ],
    gens: { low: [g7.longer, g7.heavy, g7.len], medium: [g7.len, g7.longer, g7.unit, g7.heavy], high: [g7.len, g7.unit, function () { var a = r(20, 80), b = r(5, 19); return Q('Length', 'A rope is <b>' + a + ' cm</b>. ' + b + ' cm is cut off. How long is it now, in cm?', a - b, ['This is taking away.', 'Count back ' + b + '.'], a + ' − ' + b + ' = ' + (a - b) + ' cm.'); }] }
  });

  /* ================= 8. Shape, movement and data: Ruby's space maze ================= */
  var g8 = {
    solid: function () { var k = pick([['cube', 6, 8, 12, 'cube'], ['cuboid', 6, 8, 12, 'cuboid'], ['square-based pyramid', 5, 5, 8, 'pyramid'], ['cylinder', 3, 0, 2, 'cylinder'], ['triangular prism', 5, 6, 9, 'prism']]), w = pick(['faces', 'corners', 'edges']), ans = w === 'faces' ? k[1] : w === 'corners' ? k[2] : k[3]; return Q('3D shapes', 'How many <b>' + w + '</b> does a <b>' + k[0] + '</b> have?', ans, ['Faces are flat or curved surfaces. Corners are points. Edges are where faces meet.', 'Count carefully, including the ones you cannot see.'], 'A ' + k[0] + ' has ' + k[1] + ' faces, ' + k[2] + ' corners and ' + k[3] + ' edges.', FL.SOLIDS.indexOf(k[4]) >= 0 ? FL.shape(k[4], null, 120) : ''); },
    roll: function () { var rolls = pick(['sphere', 'cylinder', 'cone']), no = shuffle(['cube', 'cuboid', 'pyramid']).slice(0, 2); return MC('3D shapes', 'Which of these shapes can <b>roll</b>?', rolls, no, ['Which one has a curved face?', 'Flat faces stop a shape rolling.'], 'A ' + rolls + ' has a curved face, so it can roll.'); },
    sym: function () { var k = pick([['a square', 'Yes'], ['a circle', 'Yes'], ['a heart', 'Yes'], ['a rectangle', 'Yes'], ['the letter A', 'Yes'], ['the letter H', 'Yes'], ['the letter T', 'Yes'], ['the letter M', 'Yes'], ['the letter F', 'No'], ['the letter G', 'No'], ['the letter J', 'No'], ['the letter R', 'No'], ['the letter L', 'No']]); return MC('Symmetry', 'Does <b>' + k[0] + '</b> have a line of symmetry?', k[1], [k[1] === 'Yes' ? 'No' : 'Yes'], ['Can you fold it so both halves match?', 'Try folding down the middle.'], k[1] === 'Yes' ? 'Yes: fold it down the middle and the halves match.' : 'No: there is no fold where both halves match.', '', true); },
    turn: function () { var D = ['up', 'right', 'down', 'left'], s = r(0, 3), t = pick([1, 2, 3, 4]), rt = r(0, 1), e = rt ? (s + t) % 4 : (s - t + 8) % 4, nm = ['', 'a quarter turn', 'a half turn', 'three quarter turns', 'a full turn'][t]; return MC('Turns', 'Ruby faces <b>' + D[s] + '</b>. She makes <b>' + nm + '</b> to the ' + (rt ? 'right' : 'left') + '. Which way does she face now?', D[e], D.filter(function (x) { return x !== D[e]; }), ['A quarter turn moves one step round: up, right, down, left.', 'Right goes the way clock hands go.'], 'She ends up facing ' + D[e] + '.'); },
    bar: function () { var set = pick([['Cats', 'Dogs', 'Fish', 'Rabbits'], ['Red', 'Blue', 'Green', 'Yellow'], ['Apples', 'Bananas', 'Grapes', 'Pears'], ['Football', 'Swimming', 'Dance', 'Tennis']]), it = set.slice(0, r(3, 4)).map(function (c) { return [c, r(1, 9)]; }), kind = r(0, 2);
      if (kind === 2) { var k = r(0, it.length - 1); return Q('Bar charts', 'How many chose <b>' + it[k][0] + '</b>?', it[k][1], ['Find the ' + it[k][0] + ' bar.', 'Read across to the scale.'], 'The ' + it[k][0] + ' bar reaches ' + it[k][1] + '.', V.bars(it, 10)); }
      var srt = it.slice().sort(function (a, b) { return kind ? a[1] - b[1] : b[1] - a[1]; }); if (srt[0][1] === srt[1][1]) { if (kind) srt[0][1] = Math.max(0, srt[0][1] - 1); else srt[0][1]++; } if (srt[0][1] === srt[1][1]) srt[0][1] += kind ? 0 : 1; var w = srt[0][0];
      return MC('Bar charts', 'Which is the <b>' + (kind ? 'least' : 'most') + '</b> popular?', w, it.map(function (x) { return x[0]; }).filter(function (x) { return x !== w; }), ['Find the ' + (kind ? 'shortest' : 'tallest') + ' bar.', 'Read its label.'], w + ' has the ' + (kind ? 'shortest' : 'tallest') + ' bar.', V.bars(it, 10)); }
  };
  FL.topic({ n: 308, year: 'P3', short: 'Shape, data', title: 'Shape, movement and data', blurb: 'Help Ruby the rocket through a space maze: 3D shapes, symmetry, directions and turns, and bar charts.',
    lessons: [
      LS('What are the properties of 3D shapes?', 'how to describe 3D shapes by their faces, edges and corners.', {
        intro: ['Ruby’s blocks', 'Faces, edges, corners', "Ruby the rocket builds with 3D shapes. We describe them by their faces, edges and corners.", FL.shapeRow(['cube', 'cylinder', 'pyramid'], 90)],
        ex: [['Cube', '6 square faces', [["A cube has six square faces, twelve edges and eight corners.", FL.shape('cube', null, 130)]]],
          ['Cylinder', 'Curved', [["A cylinder has two flat circle faces and one curved face. It can roll!", FL.shape('cylinder', null, 130)]]],
          ['Sphere', 'All curved', [["A sphere has one curved face and no edges or corners. It rolls in every direction.", FL.shape('sphere', null, 130)]]]],
        real: ['At home', "A tin is a cylinder, a dice is a cube, and a tent can be a pyramid.", FL.shapeRow(['cylinder', 'cube', 'pyramid'], 80)],
        turn: ["Your turn! How many faces does a cube have? Pause and try it.", FL.shape('cube', null, 120), "Six faces.", E('6', 'g')],
        rec: ["Faces are flat or curved surfaces. Edges are where faces meet. Corners are points.", ['Faces', 'Edges', 'Corners (vertices)', 'Curved shapes roll']],
        deep: ['Shapes with flat faces stack well; curved ones roll.', 'Count the hidden faces at the back too.']
      }),
      LS('What makes a shape symmetrical?', 'how to find a line of symmetry.', {
        intro: ['Mirror halves', 'Symmetry', "A shape is symmetrical if you can fold it so the two halves match exactly. The fold is called a line of symmetry.", FL.svg(160, 140, 'a heart with a line of symmetry', '<path d="M80 128 18 60a30 30 0 0 1 62-34 30 30 0 0 1 62 34z" fill="#f7a8b8" stroke="#2b2340" stroke-width="3"/><line x1="80" y1="8" x2="80" y2="136" stroke="#7a1fc2" stroke-width="3" stroke-dasharray="8 6"/>', 200)],
        ex: [['A butterfly', 'Both wings match', [["A butterfly's wings match on both sides. It is symmetrical.", E('symmetrical', 'g')]]],
          ['A square', '4 lines', [["A square can be folded four ways and still match: four lines of symmetry.", FL.shape('square', null, 120)]]],
          ['Not symmetrical', 'Halves do not match', [["The letter F cannot be folded to match. It is not symmetrical.", E('F: no line of symmetry', 'g')]]]],
        real: ['Faces', "Ruby the rocket is symmetrical: a window in the middle and a fin on each side.", FL.char('rocket', 110)],
        turn: ["Your turn! Is a heart shape symmetrical? Pause and try it.", E('heart'), "Yes: fold it down the middle.", E('Yes', 'g')],
        rec: ["Fold the shape. If both halves match exactly, it is symmetrical.", ['Fold it', 'Halves match', 'Line of symmetry', 'Some shapes have many']],
        deep: ['Mirrors show symmetry: the reflection matches.', 'The halves must match in shape and size.']
      }),
      LS('How to use directions and turns', 'how to give directions using forwards, left, right and turns.', {
        intro: ['Ruby’s maze', 'Directions', "Ruby needs directions to get through the maze: forwards, backwards, turn left, turn right.", FL.says('rocket', 'Forward 2, turn right!')],
        ex: [['Left and right', 'Turn', [["Turning right is turning the way the clock hands go. Turning left is the other way.", E('right = clockwise', 'g')]]],
          ['Quarter turn', '90 degrees', [["A quarter turn is a quarter of the way round. Two quarter turns make a half turn.", E('2 quarter turns = 1 half turn', 'g')]]],
          ['Full turn', 'All the way round', [["Four quarter turns make a full turn. You end up facing the same way!", E('4 quarter turns = 1 full turn', 'g')]]]],
        real: ['A treasure map', "Walk forward three steps, turn left, walk two steps: there's the treasure!", E('F3, L, F2', 'b')],
        turn: ["Your turn! How many quarter turns make a half turn? Pause and try it.", E('? quarter turns = half turn'), "Two.", E('2', 'g')],
        rec: ["Use forward, back, left, right and quarter, half and full turns.", ['Forward and back', 'Left and right', 'Quarter turn', 'Half and full turns']],
        deep: ['Left and right depend on which way you are facing.', 'A full turn brings you back to where you started facing.']
      }),
      FL.LS('How do I record and display data?', 'P3', 'how to show data in a bar chart and read it.', {
        intro: ['Ruby’s survey', 'Bar charts', "Ruby asked her friends about their favourite pets. He shows the answers in a bar chart. The taller the bar, the more votes!", V.bars([['Cats', 6], ['Dogs', 8], ['Fish', 3]])],
        ex: [['Tally first', 'Count the votes', [["Ruby counts the votes with tally marks: cats six, dogs eight, fish three.", FL.tally(8)]]],
          ['Draw the bars', 'One bar each', [["Each pet gets a bar. The height shows the number of votes.", V.bars([['Cats', 6], ['Dogs', 8], ['Fish', 3]])]]],
          ['Read it', 'Most and least', [["Dogs have the tallest bar: the most votes. Fish have the shortest: the fewest.", E('Dogs 8, fish 3', 'g')]]]],
        real: ['Lunch choices', "The kitchen uses a bar chart to see which lunches are most popular.", V.bars([['Pasta', 9], ['Soup', 4], ['Salad', 5]])],
        turn: ["Your turn! How many more votes did dogs get than cats? Pause and try it.", V.bars([['Cats', 6], ['Dogs', 8]]), "Eight take away six: two more.", E('2', 'g')],
        rec: ["Count with tallies, then draw a bar for each group. Read the heights to answer questions.", ['Collect and tally', 'One bar for each group', 'Read the height', 'Compare bars']],
        deep: ['Bar charts let us compare groups at a glance.', 'Read the scale carefully: each line may not be 1.']
      })
    ],
    acts: [
      ['3D detective', 'Name the 3D shape.', FL.rounds(function () { var k = pick(FL.SOLIDS); return { vis: '<div style="text-align:center">' + FL.shape(k, null, 150) + '</div>', q: 'What is this 3D shape?', answer: k, wrong: shuffle(FL.SOLIDS.filter(function (x) { return x !== k; })).slice(0, 3), explain: 'This is a ' + k + '.' }; }, 6)],
      ['Rocket turns', 'Which way is Ruby facing?', FL.rounds(function () { var D = ['up', 'right', 'down', 'left'], s = r(0, 3), turns = pick([1, 2, 3]), right = r(0, 1), e = right ? (s + turns) % 4 : (s - turns + 8) % 4, nm = turns === 1 ? 'a quarter turn' : turns === 2 ? 'a half turn' : 'three quarter turns'; return { vis: FL.says('rocket', 'Ruby faces <b>' + D[s] + '</b>.'), q: 'Ruby makes ' + nm + ' to the ' + (right ? 'right' : 'left') + '. Which way does she face?', answer: D[e], wrong: D.filter(function (x) { return x !== D[e]; }), explain: 'Turning ' + (right ? 'right' : 'left') + ' ' + turns + ' quarter turn' + (turns > 1 ? 's' : '') + ' from ' + D[s] + ': ' + D[e] + '.' }; }, 6)],
      ['Chart reader', 'Read the bar chart.', FL.rounds(function () { var it = [['Red', r(1, 9)], ['Blue', r(1, 9)], ['Green', r(1, 9)]], k = r(0, 2); return { vis: V.bars(it, 10), q: 'How many chose ' + it[k][0] + '?', answer: String(it[k][1]), wrong: nums(it[k][1], [it[k][1] + 1, it[k][1] - 1, it[(k + 1) % 3][1]]), explain: 'The ' + it[k][0] + ' bar reaches ' + it[k][1] + '.' }; }, 6)]
    ],
    gens: { low: [g8.roll, g8.sym, g8.bar], medium: [g8.solid, g8.roll, g8.sym, g8.turn, g8.bar], high: [g8.solid, g8.turn, g8.bar, g8.sym, function () { var a = r(3, 9), b = r(1, a - 1); return Q('Bar charts', 'How many more chose Dogs than Cats?', a - b, ['Read both bars.', 'Take away the smaller number.'], a + ' − ' + b + ' = ' + (a - b) + '.', V.bars([['Dogs', a], ['Cats', b]], 10)); }] }
  });
})();
