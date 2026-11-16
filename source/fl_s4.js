/* fl_s4.js: P4 stories and story-based lessons (Let's learn) for topics 401 to 409.
   Each lesson keeps the workbook question as its title. Numbers stay within First level (to 1000). */
(function () {
  'use strict';
  var FL = window.FL, BT = window.BT; if (!FL || !FL.addStory || !BT || !FL.p4) return;
  var V = BT.sv, P = FL.panel, T = FL.things, C = FL.coins, SH = FL.shape, ROW = FL.shapeRow, PIE = FL.pie, K = FL.p4, INK = '#2b2340';
  function clk(h, m) { return '<div style="width:170px;max-width:100%">' + V.clock(h, m) + '</div>'; }
  function big(t) { return '<div style="font-size:2.1rem;font-weight:800;color:' + INK + ';background:#fff;border:3px solid ' + INK + ';border-radius:16px;padding:6px 18px;text-align:center">' + t + '</div>'; }
  function cards(list) { return '<div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center">' + list.map(function (t) { return '<span style="background:#fff;border:3px solid ' + INK + ';border-radius:14px;padding:6px 12px;font-weight:800;color:' + INK + '">' + t + '</span>'; }).join('') + '</div>'; }
  function col(a, b, sign) { return '<pre style="font:800 1.8rem/1.3 ui-monospace,monospace;text-align:right;margin:0;padding:8px 18px;border-radius:12px;background:#fff;color:' + INK + ';border:3px solid ' + INK + '">  ' + a + '\n' + sign + ' ' + b + '\n─────</pre>'; }
  function hto(h, t, o) { var c = function (v, bg) { return '<td style="border:3px solid ' + INK + ';padding:6px 14px;font-size:1.8rem;font-weight:800;background:' + bg + '">' + v + '</td>'; };
    return '<table style="border-collapse:collapse;color:' + INK + ';text-align:center;background:#fff"><tr><th style="padding:2px 10px">H</th><th>T</th><th>O</th></tr><tr>' + c(h, '#ffe2ec') + c(t, '#e3f4ff') + c(o, '#fff1c9') + '</tr></table>'; }
  function W(say, pic, facts) { return { mode: 'watch', say: say, pic: pic, facts: facts }; }
  function TG(say, pic, options, answer, tip, explain) { return { mode: 'together', say: say, pic: pic, options: options, answer: answer, tip: tip, explain: explain }; }
  function Y(say, pic, options, answer, tip, explain) { return { mode: 'turn', say: say, pic: pic, options: options, answer: answer, tip: tip, explain: explain }; }
  function pg(pic, text, ask) { return { pic: pic, text: text, ask: ask }; }
  function Q(q, options, answer, explain) { return { q: q, options: options, answer: answer, explain: explain }; }
  var TT = [['Glasgow', '9:15', '10:05'], ['Stirling', '9:45', '10:35'], ['Perth', '10:20', '11:10'], ['Dundee', '10:55', '11:45']];

  /* ================= 401 Place value: Professor Owl's number lab ================= */
  FL.addStory(401, {
    story: { title: 'Professor Owl’s Number Lab', endPic: P('room', 'owl', big('Puzzle solved!'), 'Hoo-ray!'), endText: 'Professor Owl solved every puzzle in the lab. Thank you for your help, young scientist!',
      pages: [
        pg(P('room', 'owl', '', 'Hoo!'), 'Welcome to my number lab! I am Professor Owl, and today we will solve number puzzles.'),
        pg(P('room', 'owl', big('25, 50, 75, ?')), 'My first test tube has a pattern: twenty-five, fifty, seventy-five …', Q('What comes next?', [80, 100, 125], 100, 'The jump is twenty-five.')),
        pg(P('room', 'owl', hto(4, 5, 2)), 'My machine prints four hundred and fifty-two. Four hundreds, five tens and two ones.', Q('What is the 5 worth?', [5, 50, 500], 50, 'The 5 is in the tens column.')),
        pg(P('room', 'owl', K.scale(300, 400, 10, 362, '')), 'Three hundred and sixty-two beetles crawled into the lab! About how many is that?', Q('Round 362 to the nearest 100.', [300, 360, 400], 400, 'Look at the tens: six, so round up.')),
        pg(P('night', 'owl', FL.thermo(-3)), 'Brrr! The freezer in my lab is three degrees below zero: minus three.'),
        pg(P('night', 'owl', FL.thermo(2)), 'I warm it up by five degrees. Minus three, minus two, minus one, zero, one, two.', Q('What temperature is it now?', ['−8°C', '2°C', '5°C'], '2°C', 'Count up five from minus three.'))
      ] },
    learn: [
      { title: 'How can I use number patterns to work out a sequence?', char: 'owl', screens: [
        W('Counting in twenty-fives: twenty-five, fifty, seventy-five, one hundred. Each jump is twenty-five.', P('room', '', big('25, 50, 75, 100'))),
        W('Counting back in hundreds: nine hundred, eight hundred, seven hundred. Each jump is one hundred back.', P('room', '', big('900, 800, 700, 600'))),
        TG('What comes next? Forty, eighty, one hundred and twenty …', P('room', '', big('40, 80, 120, ?')), [140, 160, 200], 160, 'Find the jump between the numbers.', 'The jump is forty: one hundred and sixty.'),
        TG('Find the missing number: three, six, blank, twelve.', P('room', '', big('3, 6, ?, 12')), [8, 9, 10], 9, 'Count in threes.', 'Three, six, nine, twelve.'),
        Y('What comes next? Fifty, one hundred, one hundred and fifty …', P('room', '', big('50, 100, 150, ?')), [175, 200, 250], 200, 'The jump is fifty.', 'Two hundred.'),
        Y('Find the missing number: twelve, sixteen, blank, twenty-four.', P('room', '', big('12, 16, ?, 24')), [18, 20, 22], 20, 'The jump is four.', 'Twenty.')
      ] },
      { title: 'What is the value of each digit in a 3-digit number?', char: 'owl', screens: [
        W('Four hundred and fifty-two: four hundreds, five tens and two ones.', P('room', '', hto(4, 5, 2))),
        W('Six hundred and eight: the zero holds the tens place.', P('room', '', hto(6, 0, 8))),
        TG('What is the 7 worth in 716?', P('room', '', hto(7, 1, 6)), [7, 70, 700], 700, 'Which column is the 7 in?', 'Seven hundred.'),
        TG('What is the 3 worth in 531?', P('room', '', hto(5, 3, 1)), [3, 30, 300], 30, 'The 3 is in the tens column.', 'Thirty.'),
        Y('Which number has 2 hundreds, 0 tens and 9 ones?', P('room', '', hto(2, 0, 9)), [29, 209, 290], 209, 'Read the columns in order.', 'Two hundred and nine.'),
        Y('What is the 9 worth in 925?', P('room', '', hto(9, 2, 5)), [9, 90, 900], 900, 'The 9 is in the hundreds.', 'Nine hundred.')
      ] },
      { title: 'How do I round to the nearest 10 and 100?', char: 'owl', screens: [
        W('Four hundred and sixty-seven to the nearest ten: it is between four hundred and sixty and four hundred and seventy. Seven rounds up: four hundred and seventy.', P('room', '', K.scale(460, 470, 1, 467, ''))),
        W('Three hundred and sixty-two to the nearest hundred: look at the tens digit, six. Round up to four hundred.', P('room', '', K.scale(300, 400, 10, 362, ''))),
        TG('Round 749 to the nearest hundred.', P('room', '', K.scale(700, 800, 10, 749, '')), [700, 750, 800], 700, 'Look at the tens: four.', 'Seven hundred.'),
        TG('Round 83 to the nearest ten.', P('room', '', K.scale(80, 90, 1, 83, '')), [80, 90], 80, 'Three is less than five.', 'Eighty.'),
        Y('Round 650 to the nearest hundred.', P('room', '', K.scale(600, 700, 10, 650, '')), [600, 700], 700, 'Exactly halfway rounds up.', 'Seven hundred.'),
        Y('Round 238 to the nearest ten.', P('room', '', big('238')), [230, 240, 200], 240, 'Look at the ones: eight.', 'Two hundred and forty.')
      ] },
      { title: 'How can a thermometer help me understand negative numbers?', char: 'owl', screens: [
        W('On a cold day the temperature drops below zero. Numbers below zero are negative: minus four.', P('night', '', FL.thermo(-4))),
        W('From minus two, warm up by five: minus one, zero, one, two, three.', P('night', '', FL.thermo(3))),
        TG('It is 2 degrees. It falls by 5 degrees. What is it now?', P('night', '', FL.thermo(2)), ['−3°C', '3°C', '−7°C'], '−3°C', 'Count down through zero.', 'Minus three.'),
        TG('Which is colder: −5°C or −2°C?', P('night', '', FL.thermo(-5)), ['−5°C', '−2°C'], '−5°C', 'Further below zero is colder.', 'Minus five is colder.'),
        Y('It is −6°C. It rises by 4 degrees. What is it now?', P('night', '', FL.thermo(-6)), ['−2°C', '2°C', '−10°C'], '−2°C', 'Count up four.', 'Minus two.'),
        Y('What temperature does the thermometer show?', P('night', '', FL.thermo(-8)), ['8°C', '−8°C', '−2°C'], '−8°C', 'It is below zero.', 'Minus eight.')
      ] }
    ]
  });

  /* ================= 402 Adding and subtracting: Ruby's space station ================= */
  FL.addStory(402, {
    story: { title: 'Ruby’s Space Station', endPic: P('space', 'rocket', big('Mission complete!'), '3, 2, 1 …'), endText: 'Ruby’s mission went perfectly. Thank you, mission controller!',
      pages: [
        pg(P('space', 'rocket', '', 'Mission start!'), 'Ruby the rocket is flying supplies to the space station.'),
        pg(P('space', 'rocket', big('46 + 9')), 'Ruby has forty-six boxes and loads nine more. Adding nine is tricky, so she adds ten and takes one away.', Q('What is 46 + 9?', [54, 55, 56], 55, 'Forty-six and ten is fifty-six, take one: fifty-five.')),
        pg(P('space', 'rocket', col(268, 125, '+')), 'On Monday she flies two hundred and sixty-eight kilometres, on Tuesday one hundred and twenty-five. She adds in columns.', Q('How far altogether?', [383, 393, 493], 393, 'Ones: thirteen, carry one. Tens: nine. Hundreds: three.')),
        pg(P('space', 'rocket', col(460, 135, '−')), 'The station had four hundred and sixty oxygen tanks. One hundred and thirty-five are used.', Q('How many are left?', [325, 335, 395], 325, 'Exchange a ten for the ones column.')),
        pg(P('space', 'rocket', big('298 + 403 ≈ 300 + 400')), 'Ruby checks with an estimate: about three hundred and four hundred is about seven hundred.'),
        pg(P('space', 'rocket', big('701 ✓')), 'The real answer is seven hundred and one. Close to the estimate, so it makes sense!')
      ] },
    learn: [
      { title: 'How can compensating help me add and subtract?', char: 'rocket', screens: [
        W('Forty-six add nine: forty-six add ten is fifty-six, then take one away. Fifty-five.', P('space', '', big('46 + 10 − 1 = 55'))),
        W('Eighty-five take away twenty-nine: take away thirty is fifty-five, then add one back. Fifty-six.', P('space', '', big('85 − 30 + 1 = 56'))),
        TG('What is 57 + 19?', P('space', '', big('57 + 19')), [75, 76, 86], 76, 'Add twenty, then take one away.', 'Seventy-six.'),
        TG('What is 63 − 9?', P('space', '', big('63 − 9')), [53, 54, 64], 54, 'Take away ten, then add one back.', 'Fifty-four.'),
        Y('What is 123 + 99?', P('space', '', big('123 + 99')), [212, 222, 223], 222, 'Add one hundred, then take one away.', 'Two hundred and twenty-two.'),
        Y('What is 74 − 29?', P('space', '', big('74 − 29')), [45, 46, 55], 45, 'Take away thirty, then add one back.', 'Forty-five.')
      ] },
      { title: 'How do I add using columns?', char: 'rocket', screens: [
        W('Two hundred and forty-three add one hundred and fifty-two. Ones: five. Tens: nine. Hundreds: three. Three hundred and ninety-five.', P('space', '', col(243, 152, '+'))),
        W('Two hundred and sixty-eight add one hundred and twenty-five. Ones: thirteen, write three and carry one ten. Tens: nine. Hundreds: three.', P('space', '', col(268, 125, '+'))),
        TG('What is 156 + 227?', P('space', '', col(156, 227, '+')), [373, 383, 483], 383, 'Ones: six and seven make thirteen. Carry one.', 'Three hundred and eighty-three.'),
        TG('What is 314 + 245?', P('space', '', col(314, 245, '+')), [559, 569, 659], 559, 'No carrying needed.', 'Five hundred and fifty-nine.'),
        Y('What is 476 + 258?', P('space', '', col(476, 258, '+')), [624, 724, 734], 734, 'Carry twice.', 'Seven hundred and thirty-four.'),
        Y('What is 345 + 280?', P('space', '', col(345, 280, '+')), [525, 615, 625], 625, 'Tens: four and eight make twelve.', 'Six hundred and twenty-five.')
      ] },
      { title: 'How do I subtract using columns?', char: 'rocket', screens: [
        W('Five hundred and eighty-seven take away two hundred and forty-three. Ones: four. Tens: four. Hundreds: three. Three hundred and forty-four.', P('space', '', col(587, 243, '−'))),
        W('Three hundred and fifty-two take away one hundred and twenty-seven. Two take away seven? Exchange a ten: twelve take away seven is five.', P('space', '', col(352, 127, '−'))),
        TG('What is 473 − 258?', P('space', '', col(473, 258, '−')), [215, 225, 235], 215, 'Exchange a ten for the ones.', 'Two hundred and fifteen.'),
        TG('What is 698 − 345?', P('space', '', col(698, 345, '−')), [343, 353, 453], 353, 'No exchange needed.', 'Three hundred and fifty-three.'),
        Y('What is 562 − 138?', P('space', '', col(562, 138, '−')), [424, 434, 436], 424, 'Two take away eight? Exchange.', 'Four hundred and twenty-four.'),
        Y('What is 800 − 350?', P('space', '', col(800, 350, '−')), [450, 550, 500], 450, 'Count on from three hundred and fifty.', 'Four hundred and fifty.')
      ] },
      { title: 'How can estimating help me check my answer?', char: 'rocket', screens: [
        W('Two hundred and ninety-eight is about three hundred. Four hundred and three is about four hundred. So the answer is about seven hundred.', P('space', '', big('298 + 403 ≈ 700'))),
        W('If an answer is far from the estimate, check again!', P('space', '', big('512 − 189 ≈ 300'))),
        TG('Estimate 612 + 195.', P('space', '', big('612 + 195')), [700, 800, 900], 800, 'Round each to the nearest hundred.', 'About six hundred and two hundred: eight hundred.'),
        TG('Estimate 489 − 210.', P('space', '', big('489 − 210')), [200, 300, 400], 300, 'About five hundred take away two hundred.', 'About three hundred.'),
        Y('Estimate 381 + 407.', P('space', '', big('381 + 407')), [700, 800, 900], 800, 'Four hundred and four hundred.', 'About eight hundred.'),
        Y('Lisa worked out 512 − 189 = 523. Is that sensible?', P('space', '', big('512 − 189 = 523?')), ['Yes', 'No'], 'No', 'Estimate: five hundred take away two hundred.', 'No. It should be about three hundred.')
      ] }
    ]
  });

  /* ================= 403 Multiplication and division: Finn's farm ================= */
  FL.addStory(403, {
    story: { title: 'Finn’s Farm Day', endPic: P('farm', 'fox', T(10, 'duck', 5), 'All fed!'), endText: 'Every animal on Finn’s farm was fed and counted. Thank you for helping Finn multiply and divide!',
      pages: [
        pg(P('farm', 'fox', '', 'Morning!'), 'Finn the fox runs a farm. Today he must count eggs, plant carrots and fill fences.'),
        pg(P('farm', 'fox', T(9, 'apple', 9)), 'Each hen lays four eggs. There are nine hens. Finn doubles nine to get eighteen, then doubles again.', Q('How many eggs is 9 × 4?', [27, 36, 40], 36, 'Double nine is eighteen. Double eighteen is thirty-six.')),
        pg(P('farm', 'fox', big('6 × 40')), 'Finn plants six rows of forty carrots. Six times four is twenty-four, so six times forty is ten times bigger.', Q('How many carrots?', [24, 64, 240], 240, 'Two hundred and forty.')),
        pg(P('farm', 'fox', K.tbl([['× 3', '60', '18']], ['', '20', '6'])), 'Each field needs twenty-six fence posts. Three fields: twenty times three is sixty, six times three is eighteen.', Q('How many posts?', [68, 78, 88], 78, 'Sixty and eighteen make seventy-eight.')),
        pg(P('farm', 'fox', big('4 × 5 = 20<br>20 ÷ 4 = 5')), 'Finn knows four times five is twenty. So twenty eggs in boxes of four make five boxes!'),
        pg(P('farm', 'fox', big('5 × 2 × 7')), 'Five pens, two buckets each, seven scoops in each bucket. Five times two is ten, ten times seven is seventy scoops.')
      ] },
    learn: [
      { title: 'How can doubling and halving help me multiply and divide?', char: 'fox', screens: [
        W('Doubling the two times table gives the four times table. Seven times four: double seven is fourteen, double again is twenty-eight.', P('farm', '', big('7 × 4 = 28'))),
        W('Dividing by four: halve, then halve again. Thirty-six divided by four: eighteen, then nine.', P('farm', '', big('36 ÷ 4 = 9'))),
        TG('What is 8 × 4?', P('farm', '', big('8 × 4')), [24, 32, 36], 32, 'Double eight, then double again.', 'Sixteen, then thirty-two.'),
        TG('What is half of 46?', P('farm', '', big('½ of 46')), [22, 23, 26], 23, 'Half of forty, half of six.', 'Twenty and three: twenty-three.'),
        Y('What is 12 × 4?', P('farm', '', big('12 × 4')), [24, 44, 48], 48, 'Double twelve, double again.', 'Forty-eight.'),
        Y('What is 40 ÷ 4?', P('farm', '', big('40 ÷ 4')), [8, 10, 20], 10, 'Halve forty, then halve again.', 'Twenty, then ten.')
      ] },
      { title: 'How do I multiply by multiples of ten?', char: 'fox', screens: [
        W('Multiplying by ten makes a number ten times bigger: the digits move one place left. Twenty-three times ten is two hundred and thirty.', P('farm', '', big('23 × 10 = 230'))),
        W('Four times thirty: four times three is twelve, ten times bigger is one hundred and twenty.', P('farm', '', big('4 × 30 = 120'))),
        TG('What is 3 × 70?', P('farm', '', big('3 × 70')), [21, 210, 370], 210, 'Three times seven, then ten times bigger.', 'Two hundred and ten.'),
        TG('What is 6 × 50?', P('farm', '', big('6 × 50')), [30, 300, 650], 300, 'Six times five is thirty.', 'Three hundred.'),
        Y('What is 5 × 40?', P('farm', '', big('5 × 40')), [20, 200, 450], 200, 'Five times four is twenty.', 'Two hundred.'),
        Y('What is 14 × 10?', P('farm', '', big('14 × 10')), [114, 140, 1400], 140, 'The digits move one place.', 'One hundred and forty.')
      ] },
      { title: 'How can I multiply a two-digit number?', char: 'fox', screens: [
        W('Twenty-three times four: split it. Twenty times four is eighty, three times four is twelve. Ninety-two.', P('farm', '', K.tbl([['× 4', '80', '12']], ['', '20', '3']))),
        W('Fifteen times three: ten times three is thirty, five times three is fifteen. Forty-five.', P('farm', '', K.tbl([['× 3', '30', '15']], ['', '10', '5']))),
        TG('What is 21 × 4?', P('farm', '', K.tbl([['× 4', '?', '?']], ['', '20', '1'])), [80, 84, 88], 84, 'Twenty times four, one times four.', 'Eighty-four.'),
        TG('What is 32 × 3?', P('farm', '', big('32 × 3')), [92, 96, 99], 96, 'Thirty times three, two times three.', 'Ninety-six.'),
        Y('What is 26 × 3?', P('farm', '', big('26 × 3')), [68, 78, 88], 78, 'Sixty and eighteen.', 'Seventy-eight.'),
        Y('What is 34 × 5?', P('farm', '', big('34 × 5')), [150, 170, 175], 170, 'Thirty times five is one hundred and fifty.', 'One hundred and seventy.')
      ] },
      { title: 'How can known facts help me find new facts?', char: 'fox', screens: [
        W('If I know three times four is twelve, I know four times three, twelve divided by three and twelve divided by four.', P('farm', '', cards(['3 × 4 = 12', '4 × 3 = 12', '12 ÷ 3 = 4', '12 ÷ 4 = 3']))),
        W('Multiply in an easy order: five times seven times two. Five times two is ten, ten times seven is seventy.', P('farm', '', big('5 × 2 × 7 = 70'))),
        TG('4 × 5 = 20. What is 20 ÷ 4?', P('farm', '', big('20 ÷ 4')), [4, 5, 6], 5, 'Use the fact you know.', 'Five.'),
        TG('What is 2 × 9 × 5?', P('farm', '', big('2 × 9 × 5')), [45, 90, 100], 90, 'Two times five is ten first.', 'Ninety.'),
        Y('3 × 5 = 15. What is 3 × 50?', P('farm', '', big('3 × 50')), [15, 150, 350], 150, 'Ten times bigger.', 'One hundred and fifty.'),
        Y('10 × 4 = 40. What is 40 ÷ 10?', P('farm', '', big('40 ÷ 10')), [4, 10, 30], 4, 'Use the fact you know.', 'Four.')
      ] }
    ]
  });

  /* ================= 404 Fractions: Benny's cake contest ================= */
  FL.addStory(404, {
    story: { title: 'Benny’s Cake Contest', endPic: P('kitchen', 'bear', PIE(4, 3), 'Winner!'), endText: 'Benny judged every cake fairly. Thank you for helping with fractions!',
      pages: [
        pg(P('kitchen', 'bear', '', 'Contest time!'), 'Benny the bear is the judge at the cake contest!'),
        pg(P('kitchen', 'bear', PIE(2, 1) + PIE(4, 1)), 'Would you rather have one half or one quarter of a cake?', Q('Which is bigger?', ['1/2', '1/4'], '1/2', 'Fewer pieces means bigger pieces.')),
        pg(P('kitchen', 'bear', PIE(8, 3) + PIE(8, 5)), 'Three eighths of one cake or five eighths of another? The pieces are the same size, so five eighths is more.'),
        pg(P('kitchen', 'bear', big('1/2 = 0.5 = 50%')), 'The oven is fifty percent full. That means half full: one half, nought point five, fifty percent.'),
        pg(P('kitchen', 'bear', K.fline(4, [[0.75, 'Benny']])), 'Benny walks along the cake table. He is three quarters of the way to the end.'),
        pg(P('kitchen', 'bear', T(12, 'sweet', 6)), 'The winner gets one third of twelve cupcakes.', Q('What is 1/3 of 12?', [3, 4, 6], 4, 'Twelve divided by three is four.'))
      ] },
    learn: [
      { title: 'How can I compare fractions?', char: 'bear', screens: [
        W('Same top number: the smaller bottom number wins. One half is bigger than one quarter.', P('kitchen', '', PIE(2, 1) + PIE(4, 1))),
        W('Same bottom number: the bigger top number wins. Five eighths is bigger than three eighths.', P('kitchen', '', PIE(8, 5) + PIE(8, 3))),
        TG('Which is bigger: 1/3 or 1/5?', P('kitchen', '', PIE(3, 1) + PIE(5, 1)), ['1/3', '1/5'], '1/3', 'Fewer pieces means bigger pieces.', 'One third.'),
        TG('Which is bigger: 7/10 or 3/10?', P('kitchen', '', PIE(10, 7) + PIE(10, 3)), ['7/10', '3/10'], '7/10', 'Same size pieces. Compare the tops.', 'Seven tenths.'),
        Y('Which is smaller: 1/6 or 1/2?', P('kitchen', '', PIE(6, 1) + PIE(2, 1)), ['1/6', '1/2'], '1/6', 'More pieces means smaller pieces.', 'One sixth.'),
        Y('Which is bigger: 2/5 or 4/5?', P('kitchen', '', PIE(5, 2) + PIE(5, 4)), ['2/5', '4/5'], '4/5', 'Compare the tops.', 'Four fifths.')
      ] },
      { title: 'How can I compare fractions, decimals and percentages?', char: 'bear', screens: [
        W('One half can be written three ways: one half, nought point five, fifty percent.', P('kitchen', '', PIE(2, 1) + big('½ = 0.5 = 50%'))),
        W('One quarter is nought point two five or twenty-five percent. One tenth is nought point one or ten percent.', P('kitchen', '', cards(['1/4 = 0.25 = 25%', '1/10 = 0.1 = 10%']))),
        TG('Which is the same as 1/2?', P('kitchen', '', PIE(2, 1)), ['0.5', '0.2', '0.12'], '0.5', 'Half of one is nought point five.', 'Nought point five.'),
        TG('What percentage is three quarters?', P('kitchen', '', PIE(4, 3)), ['34%', '75%', '43%'], '75%', 'A quarter is twenty-five percent.', 'Seventy-five percent.'),
        Y('Which is the same as 10%?', P('kitchen', '', big('10%')), ['1/10', '1/2', '1/4'], '1/10', 'Ten out of a hundred.', 'One tenth.'),
        Y('Which is the same as 0.25?', P('kitchen', '', big('0.25')), ['1/4', '1/2', '2/5'], '1/4', 'Twenty-five percent.', 'One quarter.')
      ] },
      { title: 'How can I order fractions on a number line?', char: 'bear', screens: [
        W('Split zero to one into four equal steps: one quarter, two quarters, three quarters.', P('kitchen', '', K.fline(4, [[0.25, '1/4'], [0.75, '3/4']]))),
        W('Two quarters is halfway, the same as one half.', P('kitchen', '', K.fline(4, [[0.5, '1/2']]))),
        TG('What fraction is at the dot?', P('kitchen', '', K.fline(5, [[0.6, '?']])), ['2/5', '3/5', '4/5'], '3/5', 'Count the steps from zero.', 'Three fifths.'),
        TG('Which is closer to 1: 2/5 or 4/5?', P('kitchen', '', K.fline(5, [[0.4, ''], [0.8, '']])), ['2/5', '4/5'], '4/5', 'Further right is bigger.', 'Four fifths.'),
        Y('What fraction is at the dot?', P('kitchen', '', K.fline(8, [[0.375, '?']])), ['3/8', '5/8', '3/5'], '3/8', 'Count the eighths.', 'Three eighths.'),
        Y('Put in order, smallest first: 7/10, 2/10, 5/10.', P('kitchen', '', K.fline(10, [[0.7, ''], [0.2, ''], [0.5, '']])), ['2/10, 5/10, 7/10', '7/10, 5/10, 2/10', '5/10, 2/10, 7/10'], '2/10, 5/10, 7/10', 'Same bottom number: compare tops.', 'Two tenths, five tenths, seven tenths.')
      ] },
      { title: 'How do I find a fraction of an amount?', char: 'bear', screens: [
        W('One third of twelve cupcakes: share into three groups. Four each.', P('kitchen', '', T(12, 'sweet', 4))),
        W('One fifth of twenty: twenty divided by five is four.', P('kitchen', '', big('1/5 of 20 = 4'))),
        TG('What is 1/4 of 20?', P('kitchen', '', T(20, 'sweet', 5)), [4, 5, 10], 5, 'Divide by four.', 'Five.'),
        TG('What is 1/10 of 50?', P('kitchen', '', big('1/10 of 50')), [5, 10, 40], 5, 'Divide by ten.', 'Five.'),
        Y('What is 1/3 of 18?', P('kitchen', '', big('1/3 of 18')), [3, 6, 9], 6, 'Divide by three.', 'Six.'),
        Y('What is 1/2 of 30?', P('kitchen', '', big('1/2 of 30')), [10, 15, 60], 15, 'Halve it.', 'Fifteen.')
      ] }
    ]
  });

  /* ================= 405 Money: Molly's school fair stall ================= */
  FL.addStory(405, {
    story: { title: 'Molly’s Fair Stall', endPic: P('shop', 'mouse', C([500, 200, 100, 50]), 'Sold out!'), endText: 'Molly sold everything at the school fair. Thank you for helping with the money!',
      pages: [
        pg(P('shop', 'mouse', '', 'Roll up!'), 'Molly the mouse has a stall at the school fair. She sells cakes, badges and toys.'),
        pg(P('shop', 'mouse', C([500])), 'A mug costs three pounds forty. A customer pays with a five pound note. Molly counts on: sixty pence to four pounds, then one pound to five.', Q('How much change?', ['£1.60', '£2.60', '£1.40'], '£1.60', 'Sixty pence and one pound.')),
        pg(P('shop', 'mouse', C([200, 100, 50, 20, 5])), 'Molly makes three pounds seventy-five with the fewest coins: two pounds, one pound, fifty, twenty and five.'),
        pg(P('shop', 'mouse', cards(['Stall A: £2.45', 'Stall B: £2.54'])), 'Another stall sells the same toy. Which is cheaper?', Q('Which is cheaper?', ['Stall A', 'Stall B'], 'Stall A', 'Same pounds. Forty-five pence is less.')),
        pg(P('shop', 'mouse', cards(['book £2.50', 'yo-yo £1.75'])), 'Ollie has five pounds. He wants a book and a yo-yo: four pounds twenty-five. That is less than five pounds, so he can buy both!'),
        pg(P('shop', 'mouse', big('£5 − £4.25 = 75p')), 'Ollie has seventy-five pence left for a cookie.')
      ] },
    learn: [
      { title: 'How can I use adding and subtracting to work out change?', char: 'mouse', screens: [
        W('Something costs three pounds forty. You pay five pounds. Count on: sixty pence makes four pounds, one more pound makes five. One pound sixty change.', P('shop', '', big('£3.40 + 60p + £1 = £5'))),
        W('From two pounds: one pound twenty-five plus seventy-five pence makes two pounds.', P('shop', '', big('£1.25 + 75p = £2'))),
        TG('It costs £2.30. You pay £5. How much change?', P('shop', '', C([500])), ['£2.70', '£3.70', '£2.30'], '£2.70', 'Seventy pence to three pounds, then two pounds.', 'Two pounds seventy.'),
        TG('It costs 85p. You pay £1. How much change?', P('shop', '', C([100])), ['5p', '15p', '25p'], '15p', 'Eighty-five to one hundred.', 'Fifteen pence.'),
        Y('It costs £6.50. You pay £10. How much change?', P('shop', '', C([1000])), ['£3.50', '£4.50', '£3.00'], '£3.50', 'Fifty pence to seven pounds, then three.', 'Three pounds fifty.'),
        Y('It costs £1.20. You pay £2. How much change?', P('shop', '', C([200])), ['80p', '90p', '£1.80'], '80p', 'One twenty to two pounds.', 'Eighty pence.')
      ] },
      { title: 'How can different coins and notes make the same total?', char: 'mouse', screens: [
        W('Ten pounds: one ten pound note, two five pound notes, or five two pound coins.', P('shop', '', C([1000]) + C([500, 500]))),
        W('Seven pounds twenty: five pound note, two pound coin and twenty pence.', P('shop', '', C([500, 200, 20]))),
        TG('How much is this?', P('shop', '', C([500, 200, 50])), ['£7.05', '£7.50', '£2.55'], '£7.50', 'Start with the note.', 'Seven pounds fifty.'),
        TG('Which makes £3?', P('shop', '', C([200, 100])), ['£2 + £1', '£2 + 50p', '£1 + 50p'], '£2 + £1', 'Add each pair.', 'Two pounds and one pound.'),
        Y('How much is this?', P('shop', '', C([1000, 500, 100])), ['£15', '£16', '£17'], '£16', 'Ten, fifteen, sixteen.', 'Sixteen pounds.'),
        Y('How much is this?', P('shop', '', C([200, 50, 20, 5])), ['£2.65', '£2.75', '£2.80'], '£2.75', 'Two pounds, then fifty, twenty, five.', 'Two pounds seventy-five.')
      ] },
      { title: 'How do I compare prices to find the best buy?', char: 'mouse', screens: [
        W('Compare pounds first. Two pounds ninety-five is less than three pounds ten.', P('shop', '', cards(['£2.95', '<', '£3.10']))),
        W('Same pounds? Compare pence. Two pounds forty-five is less than two pounds fifty-four: nine pence cheaper.', P('shop', '', cards(['£2.45', '<', '£2.54']))),
        TG('Which is cheaper: £1.19 or 99p?', P('shop', '', cards(['£1.19', '99p'])), ['£1.19', '99p'], '99p', 'Ninety-nine pence is less than one pound.', 'Ninety-nine pence.'),
        TG('How much cheaper is 65p than 70p?', P('shop', '', cards(['65p', '70p'])), ['5p', '15p', '35p'], '5p', 'Take away.', 'Five pence.'),
        Y('Which is cheaper: £4.30 or £3.40?', P('shop', '', cards(['£4.30', '£3.40'])), ['£4.30', '£3.40'], '£3.40', 'Compare pounds first.', 'Three pounds forty.'),
        Y('Which costs more: £2.08 or £2.80?', P('shop', '', cards(['£2.08', '£2.80'])), ['£2.08', '£2.80'], '£2.80', 'Same pounds. Compare the pence.', 'Two pounds eighty.')
      ] },
      { title: 'How can I plan what to spend?', char: 'mouse', screens: [
        W('A cake is eighty-five pence and a drink is sixty-five pence. Together: one pound fifty.', P('shop', '', big('85p + 65p = £1.50'))),
        W('I have five pounds. A book and a yo-yo cost four pounds twenty-five. I can buy both, with seventy-five pence left.', P('shop', '', big('£5 − £4.25 = 75p'))),
        TG('You have £2. Can you buy a 40p cookie and a £3.40 mug?', P('shop', '', cards(['cookie 40p', 'mug £3.40'])), ['Yes', 'No'], 'No', 'Add them first.', 'No, that is £3.80.'),
        TG('A badge is 45p and a balloon is 35p. How much for both?', P('shop', '', cards(['badge 45p', 'balloon 35p'])), ['70p', '80p', '90p'], '80p', 'Add the pence.', 'Eighty pence.'),
        Y('You have £5. You spend £3.20. How much is left?', P('shop', '', C([500])), ['£1.80', '£2.20', '£1.20'], '£1.80', 'Count on from three twenty.', 'One pound eighty.'),
        Y('You have £3. Can you buy two £1.40 books?', P('shop', '', cards(['book £1.40', 'book £1.40'])), ['Yes', 'No'], 'Yes', 'Double one pound forty.', 'Yes, they cost £2.80.')
      ] }
    ]
  });

  /* ================= 406 Time: Ollie's train journey ================= */
  FL.addStory(406, {
    story: { title: 'Ollie’s Train Journey', endPic: P('day', 'owl', K.tbl(TT, ['Station', 'Train 1', 'Train 2']), 'Arrived!'), endText: 'Ollie reached Dundee in time for lunch. Thank you for helping with the time!',
      pages: [
        pg(P('day', 'owl', '', 'All aboard!'), 'Ollie the owl is going on a train journey to see his gran.'),
        pg(P('day', 'owl', clk(9, 10)), 'The train leaves at ten past nine. The long hand points to two: ten minutes past.', Q('What time is it?', ['10 past 9', '2 past 9', '10 to 9'], '10 past 9', 'Each number is five minutes.')),
        pg(P('day', 'owl', K.tbl(TT, ['Station', 'Train 1', 'Train 2'])), 'Ollie reads the timetable. Train one leaves Glasgow at nine fifteen and reaches Perth at ten twenty.'),
        pg(P('day', 'owl', clk(2, 50)), 'Ollie’s next train leaves at ten to three and takes twenty-five minutes. Ten minutes gets to three o’clock, then fifteen more.', Q('When does it arrive?', ['3:15', '3:25', '2:75'], '3:15', 'Bridge through the hour.')),
        pg(P('night', 'owl', cards(['7 am ☀️', '7 pm 🌙'])), 'Ollie’s gran says: we eat breakfast at seven am and dinner at seven pm.'),
        pg(P('night', 'owl', clk(9, 0)), 'At nine pm Ollie is tucked up in bed after a long day.')
      ] },
    learn: [
      { title: 'How can bridging through the hour help me work out time?', char: 'owl', screens: [
        W('The train leaves at two fifty and takes twenty-five minutes. Ten minutes to three o’clock, then fifteen more: three fifteen.', P('day', '', clk(2, 50) + clk(3, 15))),
        W('From eight forty to nine twenty: twenty minutes to nine o’clock, twenty more. Forty minutes.', P('day', '', big('20 + 20 = 40 min'))),
        TG('It is 6:35. What time will it be in 40 minutes?', P('day', '', clk(6, 35)), ['7:05', '7:15', '6:75'], '7:15', 'Twenty-five minutes gets to seven o’clock.', 'Seven fifteen.'),
        TG('A film starts at 4:45 and lasts 30 minutes. When does it end?', P('day', '', clk(4, 45)), ['5:05', '5:15', '4:75'], '5:15', 'Fifteen minutes to five, then fifteen more.', 'Five fifteen.'),
        Y('How long from 8:50 to 9:10?', P('day', '', clk(8, 50) + clk(9, 10)), ['20 minutes', '40 minutes', '60 minutes'], '20 minutes', 'Ten to nine, then ten more.', 'Twenty minutes.'),
        Y('It is 11:40. What time will it be in 30 minutes?', P('day', '', clk(11, 40)), ['12:10', '11:70', '12:20'], '12:10', 'Twenty minutes to twelve, then ten.', 'Twelve ten.')
      ] },
      { title: 'How to tell the time', char: 'owl', screens: [
        W('Each number on the clock is five minutes for the long hand. Long hand on four: twenty past. Twenty past three.', P('day', '', clk(3, 20))),
        W('After the six, we say to. Long hand on eight: twenty to the next hour. Twenty to six.', P('day', '', clk(5, 40))),
        W('A quarter of an hour is fifteen minutes. When the long hand is on three, it is quarter past. Quarter past two.', P('day', '', clk(2, 15)), [['quarter of an hour', 'A quarter of an hour = 15 minutes'], ['quarter past two', 'Long hand on 3: quarter past 2']]),
        W('When the long hand is on nine, it is quarter to the next hour. Quarter to five.', P('day', '', clk(4, 45)), [['quarter to five', 'Long hand on 9: quarter to 5']]),
        TG('What time is it?', P('day', '', clk(2, 35)), ['25 to 3', '35 past 3', '25 past 2'], '25 to 3', 'The long hand is past the six.', 'Twenty-five to three.'),
        TG('What time is it?', P('day', '', clk(11, 10)), ['10 past 11', '10 to 11', '2 past 11'], '10 past 11', 'Long hand on two: ten minutes.', 'Ten past eleven.'),
        Y('What time is it?', P('day', '', clk(7, 55)), ['5 to 8', '5 past 7', '11 past 7'], '5 to 8', 'Long hand on eleven.', 'Five to eight.'),
        Y('What time is it?', P('day', '', clk(4, 25)), ['25 past 4', '25 to 4', '5 past 4'], '25 past 4', 'Long hand on five.', 'Twenty-five past four.'),
        TG('What time is it?', P('day', '', clk(8, 15)), ['quarter past 8', 'quarter to 8', '3 past 8'], 'quarter past 8', 'The long hand is on three.', 'Quarter past eight.'),
        Y('What time is it?', P('day', '', clk(10, 45)), ['quarter to 11', 'quarter past 10', 'quarter to 10'], 'quarter to 11', 'Long hand on nine: quarter to the next hour.', 'Quarter to eleven.')
      ] },
      { title: 'What do am and pm mean?', char: 'owl', screens: [
        W('am means from midnight to midday: the morning. Ollie wakes up at seven am.', P('day', '', cards(['7 am ☀️ wake up']))),
        W('pm means from midday to midnight: afternoon and evening. School ends at three pm.', P('night', '', cards(['3 pm 🏫 home time', '8 pm 🌙 bed']))),
        TG('You eat breakfast at 8. Is it 8 am or 8 pm?', P('day', '', '<span style="font-size:3rem">🥣</span>'), ['8 am', '8 pm'], '8 am', 'Breakfast is in the morning.', 'Eight am.'),
        TG('You go to bed at 7. Is it 7 am or 7 pm?', P('night', '', '<span style="font-size:3rem">🛏️</span>'), ['7 am', '7 pm'], '7 pm', 'Bedtime is in the evening.', 'Seven pm.'),
        Y('Lunch is at 12:30. Is it am or pm?', P('day', '', '<span style="font-size:3rem">🥪</span>'), ['am', 'pm'], 'pm', 'It is after midday.', 'pm.'),
        Y('You walk to school at 8:30. Is it am or pm?', P('day', '', '<span style="font-size:3rem">🎒</span>'), ['am', 'pm'], 'am', 'It is the morning.', 'am.')
      ] },
      { title: 'How do I read a timetable?', char: 'owl', screens: [
        W('A timetable shows when trains arrive. Find the row for the station and the column for the train.', P('day', '', K.tbl(TT, ['Station', 'Train 1', 'Train 2']))),
        W('Train one leaves Glasgow at nine fifteen and reaches Perth at ten twenty: one hour and five minutes.', P('day', '', big('9:15 → 10:20'))),
        TG('When is train 2 at Dundee?', P('day', '', K.tbl(TT, ['Station', 'Train 1', 'Train 2'])), ['10:55', '11:10', '11:45'], '11:45', 'Read across Dundee to train 2.', 'Eleven forty-five.'),
        TG('When is train 1 at Stirling?', P('day', '', K.tbl(TT, ['Station', 'Train 1', 'Train 2'])), ['9:15', '9:45', '10:35'], '9:45', 'Read across Stirling to train 1.', 'Nine forty-five.'),
        Y('Which train reaches Perth before 11:00?', P('day', '', K.tbl(TT, ['Station', 'Train 1', 'Train 2'])), ['Train 1', 'Train 2'], 'Train 1', 'Look at the Perth row.', 'Train 1, at ten twenty.'),
        Y('How long does train 1 take from Glasgow to Stirling?', P('day', '', K.tbl(TT, ['Station', 'Train 1', 'Train 2'])), ['20 minutes', '30 minutes', '45 minutes'], '30 minutes', 'Nine fifteen to nine forty-five.', 'Thirty minutes.')
      ] }
    ]
  });

  /* ================= 407 Measurement: Frankie's garden ================= */
  FL.addStory(407, {
    story: { title: 'Frankie’s Pond Garden', endPic: P('pond', 'frog', K.gridShape(K.rectCells(5, 4), 7, 6), 'Ribbit!'), endText: 'Frankie’s pond garden is finished. Thank you for helping him measure!',
      pages: [
        pg(P('pond', 'frog', '', 'Ribbit!'), 'Frankie the frog is building a pond garden. He needs to measure everything.'),
        pg(P('pond', 'frog', K.gridShape(K.rectCells(4, 3), 6, 5)), 'The lawn covers three rows of four squares. Area is the space inside.', Q('What is the area?', ['7 squares', '12 squares', '14 squares'], '12 squares', 'Three rows of four.')),
        pg(P('pond', 'frog', big('4 m 20 cm = 420 cm')), 'The fence is four metres twenty long. One metre is one hundred centimetres, so that is four hundred and twenty centimetres.'),
        pg(P('pond', 'frog', K.rectPic(6, 4, 'm')), 'The fence goes all the way round the garden. That distance is the perimeter.', Q('What is the perimeter?', ['10 m', '20 m', '24 m'], '20 m', 'Six, four, six and four.')),
        pg(P('pond', 'frog', K.scale(0, 20, 2, 16, 'kg')), 'Frankie weighs his bag of compost. The scale goes up in twos.', Q('How heavy is it?', ['8 kg', '15 kg', '16 kg'], '16 kg', 'Count the twos to the arrow.'))
      ] },
    learn: [
      { title: 'How can I find the area of a shape?', char: 'frog', screens: [
        W('Area is how much space a shape covers. Count the squares: twelve squares.', P('pond', '', K.gridShape(K.rectCells(4, 3), 6, 5))),
        W('Quicker: three rows of four. Three times four is twelve squares.', P('pond', '', big('3 × 4 = 12'))),
        TG('What is the area?', P('pond', '', K.gridShape(K.rectCells(5, 2), 7, 4)), ['7 squares', '10 squares', '14 squares'], '10 squares', 'Two rows of five.', 'Ten squares.'),
        TG('What is the area of the L-shape?', P('pond', '', K.gridShape(['1,1', '1,2', '1,3', '2,3', '3,3'], 5, 5)), ['5 squares', '6 squares', '9 squares'], '5 squares', 'Count every square.', 'Five squares.'),
        Y('What is the area?', P('pond', '', K.gridShape(K.rectCells(3, 3), 5, 5)), ['6 squares', '9 squares', '12 squares'], '9 squares', 'Three rows of three.', 'Nine squares.'),
        Y('What is the area?', P('pond', '', K.gridShape(K.rectCells(6, 2), 8, 4)), ['8 squares', '12 squares', '16 squares'], '12 squares', 'Two rows of six.', 'Twelve squares.')
      ] },
      { title: 'How can I work out the length of an object?', char: 'frog', screens: [
        W('One metre is one hundred centimetres. Three metres is three hundred centimetres.', P('pond', '', big('1 m = 100 cm'))),
        W('One metre forty-five is one hundred and forty-five centimetres.', P('pond', '', big('1 m 45 cm = 145 cm'))),
        TG('How many cm in 2 m 50 cm?', P('pond', '', big('2 m 50 cm')), ['250 cm', '205 cm', '2050 cm'], '250 cm', 'Two metres is two hundred centimetres.', 'Two hundred and fifty.'),
        TG('Which is longer: 2 m or 180 cm?', P('pond', '', cards(['2 m', '180 cm'])), ['2 m', '180 cm'], '2 m', 'Two metres is two hundred centimetres.', 'Two metres.'),
        Y('How many cm in 4 m?', P('pond', '', big('4 m')), ['40 cm', '400 cm', '4000 cm'], '400 cm', 'Four lots of one hundred.', 'Four hundred.'),
        Y('How many cm in 3 m 20 cm?', P('pond', '', big('3 m 20 cm')), ['320 cm', '302 cm', '3200 cm'], '320 cm', 'Three hundred and twenty.', 'Three hundred and twenty.')
      ] },
      { title: 'How do I find the perimeter of a shape?', char: 'frog', screens: [
        W('Perimeter is the distance all the way round. Six, four, six, four: twenty metres.', P('pond', '', K.rectPic(6, 4, 'm'))),
        W('A square with five centimetre sides: four sides of five, twenty centimetres.', P('pond', '', K.rectPic(5, 5, 'cm'))),
        TG('What is the perimeter?', P('pond', '', K.rectPic(7, 3, 'cm')), ['10 cm', '20 cm', '21 cm'], '20 cm', 'Add all four sides.', 'Twenty centimetres.'),
        TG('What is the perimeter of a 4 m square?', P('pond', '', K.rectPic(4, 4, 'm')), ['8 m', '16 m', '20 m'], '16 m', 'Four sides of four.', 'Sixteen metres.'),
        Y('What is the perimeter?', P('pond', '', K.rectPic(10, 8, 'cm')), ['18 cm', '36 cm', '80 cm'], '36 cm', 'Ten, eight, ten, eight.', 'Thirty-six centimetres.'),
        Y('What is the perimeter?', P('pond', '', K.rectPic(5, 2, 'm')), ['7 m', '10 m', '14 m'], '14 m', 'Five, two, five, two.', 'Fourteen metres.')
      ] },
      { title: 'How do I read a scale?', char: 'frog', screens: [
        W('First find what each step is worth. This scale goes up in tens. The arrow is on seventy.', P('pond', '', K.scale(0, 100, 10, 70, 'cm'))),
        W('This scale goes up in fives. The arrow is on thirty-five kilograms.', P('pond', '', K.scale(0, 50, 5, 35, 'kg'))),
        TG('What does the arrow show?', P('pond', '', K.scale(0, 20, 2, 14, 'kg')), ['12 kg', '14 kg', '16 kg'], '14 kg', 'Each step is two.', 'Fourteen kilograms.'),
        TG('What does the arrow show?', P('pond', '', K.scale(0, 1000, 100, 600, 'ml')), ['60 ml', '600 ml', '700 ml'], '600 ml', 'Each step is one hundred.', 'Six hundred millilitres.'),
        Y('What does the arrow show?', P('pond', '', K.scale(0, 100, 10, 30, 'cm')), ['3 cm', '30 cm', '40 cm'], '30 cm', 'Each step is ten.', 'Thirty centimetres.'),
        Y('What does the arrow show?', P('pond', '', K.scale(0, 50, 5, 45, 'kg')), ['40 kg', '45 kg', '50 kg'], '45 kg', 'Each step is five.', 'Forty-five kilograms.')
      ] }
    ]
  });

  /* ================= 408 Shape, position and movement: Captain Pip's island ================= */
  FL.addStory(408, {
    story: { title: 'Captain Pip’s Treasure Island', endPic: P('sea', 'pirate', FL.grid(2, 3, '💎'), 'Found it!'), endText: 'Captain Pip found the diamond at C4. Thank you, shipmate!',
      pages: [
        pg(P('sea', 'pirate', '', 'Ahoy!'), 'Captain Pip has landed on Treasure Island. The map has a grid, a compass and lots of shapes.'),
        pg(P('sea', 'pirate', ROW(['hexagon', 'hexagon', 'hexagon'], 60)), 'The cave floor is tiled with hexagons. They fit together with no gaps: they tessellate.'),
        pg(P('sea', 'pirate', FL.grid(2, 3, '💎')), 'The map says the diamond is along the bottom, then up.', Q('What is the grid reference of the diamond?', ['C4', '4C', 'D3'], 'C4', 'Along to C, up to 4.')),
        pg(P('sea', 'pirate', FL.compass('N')), 'Pip faces North. She turns a quarter turn clockwise.', Q('Which way does she face now?', ['East', 'South', 'West'], 'East', 'Clockwise: North, East, South, West.')),
        pg(P('sea', 'pirate', SH('square', null, 110)), 'The treasure chest has square corners. Each corner is a right angle.')
      ] },
    learn: [
      { title: 'What is tessellation?', char: 'pirate', screens: [
        W('A tessellation covers a floor with shapes: no gaps and no overlaps. Squares tessellate.', P('sea', '', ROW(['square', 'square', 'square'], 60))),
        W('Circles leave gaps between them, so they do not tessellate.', P('sea', '', ROW(['circle', 'circle', 'circle'], 60))),
        TG('Do rectangles tessellate?', P('sea', '', SH('rectangle', null, 110)), ['Yes', 'No'], 'Yes', 'Think of a brick wall.', 'Yes.'),
        TG('Do regular hexagons tessellate?', P('sea', '', SH('hexagon', null, 110)), ['Yes', 'No'], 'Yes', 'Think of a honeycomb.', 'Yes.'),
        Y('Do circles tessellate?', P('sea', '', SH('circle', null, 110)), ['Yes', 'No'], 'No', 'Are there gaps?', 'No, they leave gaps.'),
        Y('Do regular pentagons tessellate?', P('sea', '', SH('pentagon', null, 110)), ['Yes', 'No'], 'No', 'They leave gaps.', 'No.')
      ] },
      { title: 'How can I use grid references?', char: 'pirate', screens: [
        W('Along the corridor, then up the stairs! Letter first, then number. The diamond is at C4.', P('sea', '', FL.grid(2, 3, '💎'))),
        W('The anchor is along to A, up to 2: A2.', P('sea', '', FL.grid(0, 1, '⚓'))),
        TG('Where is the parrot?', P('sea', '', FL.grid(3, 2, '🦜')), ['D3', '3D', 'C3'], 'D3', 'Along first, then up.', 'D3.'),
        TG('Where is the key?', P('sea', '', FL.grid(1, 4, '🗝️')), ['B5', 'E2', 'B4'], 'B5', 'Along to B, up to 5.', 'B5.'),
        Y('Where is the island?', P('sea', '', FL.grid(4, 0, '🏝️')), ['E1', 'A5', 'D1'], 'E1', 'Along to E, up to 1.', 'E1.'),
        Y('Where is the anchor?', P('sea', '', FL.grid(2, 2, '⚓')), ['C3', 'B3', 'C2'], 'C3', 'Along, then up.', 'C3.')
      ] },
      { title: 'What is a right angle?', char: 'pirate', screens: [
        W('A right angle is a square corner, like the corner of a book. It is a quarter turn.', P('sea', '', FL.svg(160, 140, 'a right angle', '<path d="M30 120 V20 M30 120 H140" stroke="' + INK + '" stroke-width="5" fill="none"/><rect x="30" y="96" width="24" height="24" fill="none" stroke="#e0457b" stroke-width="3"/>', 180))),
        W('Every corner of a square is a right angle. A triangle like this one has none.', P('sea', '', ROW(['square', 'triangle'], 90))),
        TG('How many right angles does a rectangle have?', P('sea', '', SH('rectangle', null, 120)), [0, 2, 4], 4, 'Check every corner.', 'Four.'),
        TG('How many right angles in a half turn?', P('sea', '', big('½ turn')), [1, 2, 4], 2, 'A quarter turn is one right angle.', 'Two.'),
        Y('How many right angles in a full turn?', P('sea', '', big('full turn')), [2, 3, 4], 4, 'Four quarter turns.', 'Four.'),
        Y('How many right angles does a square have?', P('sea', '', SH('square', null, 110)), [2, 3, 4], 4, 'Count the corners.', 'Four.')
      ] },
      { title: 'How do I use compass points?', char: 'pirate', screens: [
        W('North, East, South, West go clockwise round the compass. Never Eat Shredded Wheat!', P('sea', '', FL.compass('N'))),
        W('Facing North, a quarter turn clockwise makes you face East. A half turn makes you face South.', P('sea', '', FL.compass('E'))),
        TG('Facing West, make a half turn. Which way now?', P('sea', '', FL.compass('W')), ['North', 'East', 'South'], 'East', 'A half turn faces the opposite way.', 'East.'),
        TG('Facing South, a quarter turn clockwise. Which way now?', P('sea', '', FL.compass('S')), ['East', 'West', 'North'], 'West', 'Clockwise: South, then West.', 'West.'),
        Y('Facing East, a quarter turn anticlockwise. Which way now?', P('sea', '', FL.compass('E')), ['North', 'South', 'West'], 'North', 'Anticlockwise goes back: East, North.', 'North.'),
        Y('Which direction is opposite North?', P('sea', '', FL.compass('N')), ['East', 'South', 'West'], 'South', 'Look across the compass.', 'South.')
      ] }
    ]
  });

  /* ================= 409 Data and chance: Ollie's weather station ================= */
  FL.addStory(409, {
    story: { title: 'Ollie’s Weather Station', endPic: P('day', 'owl', V.bars([['Sunny', 7], ['Rainy', 12], ['Cloudy', 9], ['Snowy', 2]], 14), 'Report done!'), endText: 'Ollie’s weather report was a big success. Thank you, weather helper!',
      pages: [
        pg(P('day', 'owl', '', 'Weather time!'), 'Ollie the owl runs a weather station. Every day he records the weather.'),
        pg(P('day', 'owl', FL.tally(12)), 'He makes a tally mark for every rainy day. Two bundles of five and two more.', Q('How many rainy days?', [10, 12, 14], 12, 'Ten and two.')),
        pg(P('day', 'owl', V.bars([['Sunny', 7], ['Rainy', 12], ['Cloudy', 9], ['Snowy', 2]], 14)), 'Ollie draws a bar chart. The tallest bar shows the most common weather.', Q('How many more rainy days than sunny days?', [3, 5, 7], 5, 'Twelve take away seven.')),
        pg(P('day', 'owl', K.tbl([['8', '11', '6', '14']], ['Mon', 'Tue', 'Wed', 'Thu'])), 'He writes the temperatures in a table. Thursday was warmest at fourteen degrees.'),
        pg(P('day', 'owl', K.venn('Even', 'More than 10')), 'Ollie sorts his numbers with a Venn diagram: even numbers in one circle, numbers more than ten in the other.'),
        pg(P('night', 'owl', cards(['impossible', 'unlikely', 'even chance', 'likely', 'certain'])), 'Finally the forecast. In winter in Scotland, rain is likely!', Q('How likely is snow in August?', ['certain', 'likely', 'unlikely'], 'unlikely', 'August is summer.'))
      ] },
    learn: [
      { title: 'How do I record and display data?', char: 'owl', screens: [
        W('I collect data with tally marks. Every fifth mark goes across.', P('day', '', FL.tally(12))),
        W('Then I draw a bar chart. Read the scale carefully: this one goes up in twos.', P('day', '', V.bars([['Sunny', 7], ['Rainy', 12], ['Cloudy', 9], ['Snowy', 2]], 14))),
        TG('How many cloudy days?', P('day', '', V.bars([['Sunny', 7], ['Rainy', 12], ['Cloudy', 9], ['Snowy', 2]], 14)), [7, 9, 12], 9, 'Read the Cloudy bar.', 'Nine.'),
        TG('How many days were not rainy?', P('day', '', V.bars([['Sunny', 7], ['Rainy', 12], ['Cloudy', 9], ['Snowy', 2]], 14)), [16, 18, 30], 18, 'Add sunny, cloudy and snowy.', 'Seven, nine and two make eighteen.'),
        Y('How many tally marks?', P('day', '', FL.tally(17)), [15, 17, 19], 17, 'Three fives and two.', 'Seventeen.'),
        Y('Which weather was least common?', P('day', '', V.bars([['Sunny', 7], ['Rainy', 12], ['Cloudy', 9], ['Snowy', 2]], 14)), ['Sunny', 'Cloudy', 'Snowy'], 'Snowy', 'The shortest bar.', 'Snowy.')
      ] },
      { title: 'How do I read and make tables?', char: 'owl', screens: [
        W('A table has headings. Find the day, then read the temperature below it.', P('day', '', K.tbl([['8', '11', '6', '14']], ['Mon', 'Tue', 'Wed', 'Thu']))),
        W('Thursday was warmest at fourteen, Wednesday coldest at six: a difference of eight degrees.', P('day', '', big('14 − 6 = 8'))),
        TG('What was the temperature on Tuesday?', P('day', '', K.tbl([['8', '11', '6', '14']], ['Mon', 'Tue', 'Wed', 'Thu'])), [8, 11, 14], 11, 'Find Tue.', 'Eleven degrees.'),
        TG('Which day was coldest?', P('day', '', K.tbl([['8', '11', '6', '14']], ['Mon', 'Tue', 'Wed', 'Thu'])), ['Mon', 'Wed', 'Thu'], 'Wed', 'Find the smallest number.', 'Wednesday.'),
        Y('How much rain fell in week 2?', P('day', '', K.tbl([['Week 1', '12 mm'], ['Week 2', '30 mm'], ['Week 3', '5 mm']], ['Week', 'Rain'])), ['12 mm', '30 mm', '5 mm'], '30 mm', 'Find the Week 2 row.', 'Thirty millimetres.'),
        Y('How much warmer was Thursday than Monday?', P('day', '', K.tbl([['8', '11', '6', '14']], ['Mon', 'Tue', 'Wed', 'Thu'])), [4, 6, 8], 6, 'Fourteen take away eight.', 'Six degrees.')
      ] },
      { title: 'How can I sort data with Venn and Carroll diagrams?', char: 'owl', screens: [
        W('A Venn diagram has a circle for each rule. Twelve is even and more than ten, so it goes in the overlap.', P('day', '', K.venn('Even', 'More than 10', [['12', 145, 95]]))),
        W('Seven is not even and not more than ten, so it goes outside both circles.', P('day', '', K.venn('Even', 'More than 10', [['7', 145, 170]]))),
        TG('Where does 18 go?', P('day', '', K.venn('Even', 'More than 10')), ['Both', 'Even only', 'Neither'], 'Both', 'Is it even? Is it more than ten?', 'Both circles: the overlap.'),
        TG('Where does 4 go?', P('day', '', K.venn('Even', 'More than 10')), ['Both', 'Even only', 'Neither'], 'Even only', 'It is even, but not more than ten.', 'Only the Even circle.'),
        Y('Where does 15 go?', P('day', '', K.venn('Even', 'More than 10')), ['Even only', 'More than 10 only', 'Neither'], 'More than 10 only', 'Fifteen is odd.', 'Only the More than 10 circle.'),
        Y('Where does 3 go?', P('day', '', K.venn('Even', 'More than 10')), ['Both', 'Even only', 'Neither'], 'Neither', 'Three is odd and small.', 'Outside both circles.')
      ] },
      { title: 'How likely is it?', char: 'owl', screens: [
        W('We describe chance with words: impossible, unlikely, even chance, likely, certain.', P('night', '', cards(['impossible', 'unlikely', 'even chance', 'likely', 'certain']))),
        W('A coin landing on heads is even chance. A dice landing on seven is impossible.', P('night', '', cards(['🪙 even chance', '🎲 7: impossible']))),
        TG('How likely is it that the sun will rise tomorrow?', P('day', '', '<span style="font-size:3rem">🌅</span>'), ['certain', 'likely', 'unlikely'], 'certain', 'Does it happen every day?', 'Certain.'),
        TG('How likely is it to rain in Scotland this week?', P('day', '', '<span style="font-size:3rem">🌧️</span>'), ['impossible', 'likely', 'certain'], 'likely', 'It often rains in Scotland!', 'Likely.'),
        Y('How likely is a cat learning to talk?', P('night', '', '<span style="font-size:3rem">🐱</span>'), ['impossible', 'unlikely', 'certain'], 'impossible', 'Can it ever happen?', 'Impossible.'),
        Y('How likely is a dice landing on 1?', P('night', '', '<span style="font-size:3rem">🎲</span>'), ['unlikely', 'even chance', 'certain'], 'unlikely', 'It is one of six numbers.', 'Unlikely.')
      ] }
    ]
  });
  FL.KS4 = { clk: clk, col: col, hto: hto, TT: TT };
})();
