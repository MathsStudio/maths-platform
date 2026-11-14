/* lessons_504_506_509.js: new Watch lessons for P5 Topic 4 (Decimals), Topic 6 (Algebra) and Topic 9 (Reasoning).
   One detailed lesson per question. */
(function () {
  'use strict';
  var BT = window.BT; if (!BT || !BT.lessons || !BT.lk) return;
  var V = BT.sv, LK = BT.lk, NL = BT.NL;
  var SC = function (h, sub, steps) { return { h: h, sub: sub, steps: steps }; };
  var st = function (say, html) { return { say: say, html: html || '' }; };
  var hot = function (t) { return '<span style="color:var(--bad)">' + t + '</span>'; };
  var box = '<span style="display:inline-block;width:1.1em;height:1.1em;border:3px solid var(--accent);border-radius:6px;vertical-align:-0.15em"></span>';

  /* ---------- What are decimals? ---------- */
  var decimals = {
    title: 'What are decimals?', goal: 'how decimals show tenths and hundredths, and how to compare them.',
    scenes: [
      SC('What are decimals?', 'Numbers with a decimal point', [
        st("Sometimes we need numbers between whole numbers. A pencil might be between six and seven centimetres long. Decimals let us show these in-between amounts.", V.big('6.4 cm')),
        st("A decimal number has a decimal point. Digits to the left of the point are whole numbers. Digits to the right are parts of a whole.", V.big('6' + hot('.') + '4') + V.rule('The decimal point separates whole numbers from parts of a whole.'))]),
      SC('Tenths', 'One whole cut into 10 equal parts', [
        st("Take one whole bar and cut it into ten equal parts. Each part is one tenth of the whole.", LK.fbar(1, 10, 460) + V.eq('1 tenth = 1/10 = 0.1', 'b')),
        st("Three of the ten parts is three tenths. As a decimal, we write nought point three.", LK.fbar(3, 10, 460) + V.eq('3/10 = 0.3', 'g')),
        st("Ten tenths make one whole. So after nought point nine comes one.", V.eq('10 tenths = 1 whole', 'r'))]),
      SC('Hundredths', 'Even smaller parts', [
        st("Now cut one whole into one hundred equal parts. Each tiny part is one hundredth.", LK.hsq(1) + V.eq('1 hundredth = 1/100 = 0.01', 'b')),
        st("Forty-seven of the hundred parts is forty-seven hundredths, written nought point four seven.", LK.hsq(47) + V.eq('47/100 = 0.47', 'g')),
        st("Look: forty-seven hundredths is the same as four tenths and seven hundredths. Four full columns and seven more squares.", V.eq('0.47 = 4 tenths + 7 hundredths', 'r'))]),
      SC('The decimal place value chart', 'Meet 3.47', [
        st("Place value continues after the decimal point. To the right of the ones come tenths, then hundredths.", V.tbl([['3', '.', '4', '7']], ['Ones', '', 'Tenths', 'Hundredths'])),
        st("In three point four seven, the 3 is three ones. The 4 is four tenths. The 7 is seven hundredths.", V.eq('3 + 0.4 + 0.07 = 3.47', 'g')),
        st("Each place is still ten times bigger than the place on its right. Ten hundredths make one tenth, and ten tenths make one.", V.rule('10 hundredths = 1 tenth. 10 tenths = 1 one.'))]),
      SC('Decimals in real life', 'Money and measuring', [
        st("You already use decimals with money. Three pounds forty-seven is three whole pounds and forty-seven hundredths of a pound, because there are a hundred pence in a pound.", V.eq('£3.47 = 3 pounds and 47 pence', 'b')),
        st("And with measuring. One point five metres is one metre and five tenths of a metre: one and a half metres.", V.eq('1.5 m = 1 m and a half', 'g'))]),
      SC('Decimals on a number line', 'Between 2 and 3', [
        st("Between two and three there are ten tenths: two point one, two point two, and so on, up to two point nine.", NL(2, 3, { lab: 0.5, tick: 0.1 })),
        st("Two point three is three small steps after two.", NL(2, 3, { lab: 0.5, tick: 0.1, marks: [[2.3, 0]] }) + V.eq('2.3', 'r'))]),
      SC('Which is bigger?', '0.5 or 0.45?', [
        st("Which is bigger: nought point five or nought point four five? Many people think the longer number is bigger. Let's check!", V.cards(['0.5', '0.45'], ['b', 'r'])),
        st("Line them up by the decimal point and compare from the left. Ones: both zero. Tenths: five and four. Five tenths is more than four tenths, so we can stop.",
          V.tbl([['0', '.', '5', ''], ['0', '.', '4', '5']], ['Ones', '', 'Tenths', 'Hundredths'])),
        st("So nought point five is bigger. More digits does not mean bigger!", V.eq('0.5 > 0.45', 'g') + LK.fbar(5, 10, 400, 280, '0.5') + LK.fbar(45, 100, 400, 30, ''))]),
      SC('Fractions and decimals', 'Same amount, different way of writing', [
        st("Some decimals are fractions you already know. Nought point five is one half.", V.eq('0.5 = 1/2', 'b')),
        st("Nought point two five is one quarter. Nought point seven five is three quarters.", V.eq('0.25 = 1/4', 'g') + V.eq('0.75 = 3/4', 'r'))]),
      SC('Your turn', 'Pause, think, then listen', [
        st("Your turn! What is the 7 worth in two point four seven? Pause and think.", V.big('2.4' + hot('7'))),
        st("The 7 is in the hundredths place. It is worth seven hundredths.", V.eq('7 hundredths = 0.07', 'g')),
        st("One more. Which is bigger, one point three or one point two five?", V.cards(['1.3', '1.25'], ['b', 'r'])),
        st("Ones are the same. Tenths: three and two. Three tenths is more, so one point three is bigger.", V.eq('1.3 > 1.25', 'g'))]),
      SC('Let’s recap', 'What are decimals?', [
        st("Excellent! Decimals show parts of a whole. The decimal point separates whole numbers from parts. The first place after the point is tenths, and the next is hundredths. To compare decimals, line up the points and compare from the left. More digits does not mean bigger.",
          V.list(['The decimal point separates wholes from parts', '0.1 is one tenth, 0.01 is one hundredth', '3.47 = 3 + 0.4 + 0.07', 'Compare from the left, digit by digit', 'Longer does not mean bigger: 0.5 > 0.45']))])
    ]
  };

  /* ---------- What is a number sequence? ---------- */
  var sequence = {
    title: 'What is a number sequence?', goal: 'how to find the rule of a sequence and continue it.',
    scenes: [
      SC('What is a number sequence?', 'Numbers that follow a rule', [
        st("A number sequence is a list of numbers that follows a rule. Each number in the list is called a term.", V.cards(['3', '7', '11', '15'], ['b', 'g', 'r', 'y']) + V.rule('A sequence is a list of numbers that follows a rule.')),
        st("If we can find the rule, we can work out what comes next.")]),
      SC('Finding the rule', '3, 7, 11, 15, …', [
        st("Look at the gaps between the terms. From three to seven is plus four. From seven to eleven is plus four. From eleven to fifteen is plus four.",
          NL(0, 24, { lab: 4, tick: 1, jumps: [[3, 7, '+4'], [7, 11, '+4'], [11, 15, '+4']], marks: [[3, 215], [7, 215], [11, 215], [15, 215]] })),
        st("The rule is add four each time. So the next terms are nineteen and twenty-three.", V.eq('Rule: + 4', 'b') + V.eq('3, 7, 11, 15, 19, 23', 'g'))]),
      SC('Going down', '50, 44, 38, 32, …', [
        st("Some sequences get smaller. Fifty, forty-four, thirty-eight, thirty-two. Each time we take away six.", V.cards(['50', '44', '38', '32'], ['b', 'g', 'r', 'y'], true) + V.eq('Rule: − 6', 'r')),
        st("So the next term is thirty-two take away six, which is twenty-six.", V.eq('32 − 6 = 26', 'g'))]),
      SC('Sequences across zero', '10, 7, 4, 1, …', [
        st("Ten, seven, four, one. The rule is take away three. What comes after one?", V.eq('Rule: − 3', 'r')),
        st("One take away three goes past zero, to negative two.", NL(-3, 11, { lab: 1, jumps: [[10, 7, '−3'], [7, 4, '−3'], [4, 1, '−3'], [1, -2, '−3']] }) + V.eq('10, 7, 4, 1, −2', 'g'))]),
      SC('Other kinds of rules', 'Not always adding', [
        st("Some sequences double each time. Two, four, eight, sixteen. The next term is thirty-two.", V.cards(['2', '4', '8', '16', '32'], ['b', 'g', 'r', 'y', 'b'], true) + V.eq('Rule: × 2', 'b')),
        st("So always check the gaps carefully. If the gaps are not the same, try multiplying.", V.note('Same gaps? Add or take away. Growing faster? Try multiplying.'))]),
      SC('Patterns with shapes', 'Matchstick squares', [
        st("Sequences can come from patterns. One square uses four matchsticks. Two squares in a row use seven. Three squares use ten.",
          V.tbl([['1', '4'], ['2', '7'], ['3', '10']], ['Squares', 'Matchsticks'])),
        st("Each new square adds three matchsticks, because it shares one side. So four squares use thirteen matchsticks.", V.eq('4, 7, 10, 13 … Rule: + 3', 'g'))]),
      SC('Finding a missing term', '12, ?, 24, 30', [
        st("Twelve, something, twenty-four, thirty. Find the rule from the terms we know. From twenty-four to thirty is plus six.", V.cards(['12', '?', '24', '30'], ['b', 'r', 'g', 'y'])),
        st("So twelve plus six is eighteen. Check: eighteen plus six is twenty-four. The missing term is eighteen.", V.eq('12, 18, 24, 30', 'g'))]),
      SC('Your turn', 'Pause, think, then listen', [
        st("Your turn! Five, nine, thirteen, seventeen. What is the rule, and what comes next? Pause and think.", V.cards(['5', '9', '13', '17', '?'], ['b', 'g', 'r', 'y', 'b'], true)),
        st("The rule is add four. So the next term is twenty-one.", V.eq('Rule: + 4 → 21', 'g'))]),
      SC('Let’s recap', 'What is a number sequence?', [
        st("Great work! A sequence is a list of numbers that follows a rule. Find the rule by looking at the gaps between the terms. Sequences can go up, go down, cross zero, or even double. Use the rule to find the next term or a missing term.",
          V.list(['A sequence follows a rule', 'Each number is a term', 'Look at the gaps to find the rule', 'Sequences can go up, down or cross zero', 'Use the rule to find missing terms']))])
    ]
  };

  /* ---------- How do you solve missing number problems? ---------- */
  var missing = {
    title: 'How do you solve missing number problems?', goal: 'how to find a missing number using inverse operations.',
    scenes: [
      SC('Missing number problems', 'Find the hidden number', [
        st("In a missing number problem, one number is hidden by a box. Our job is to find the number that makes the number sentence true.", V.big(box + ' + 7 = 15')),
        st("The secret weapon is the inverse, or opposite, operation. Adding and subtracting undo each other. Multiplying and dividing undo each other.",
          V.row(LK.tag('+ undoes −', 'b') + LK.tag('× undoes ÷', 'g')))]),
      SC('Missing number in an addition', '□ + 7 = 15', [
        st("Something plus seven equals fifteen. To find the something, undo the plus seven by taking away seven.", V.eq(box + ' + 7 = 15')),
        st("Fifteen take away seven is eight. So the missing number is eight.", V.eq('15 − 7 = 8', 'g')),
        st("Always check by putting it back in. Eight plus seven is fifteen. It works!", V.eq('8 + 7 = 15 ✓', 'b'))]),
      SC('Missing number in a subtraction', 'Two kinds', [
        st("Something take away nine equals fourteen. Undo the take away by adding nine. Fourteen plus nine is twenty-three.", V.eq(box + ' − 9 = 14', 'b') + V.eq('14 + 9 = 23', 'g')),
        st("Twenty take away something equals twelve. Here, think: how far is it from twelve up to twenty? Eight.", V.eq('20 − ' + box + ' = 12', 'b') + V.eq('20 − 12 = 8', 'g'))]),
      SC('Multiplying and dividing', 'Use your times tables', [
        st("Something times six equals forty-two. Undo times six by dividing by six. Forty-two divided by six is seven.", V.eq(box + ' × 6 = 42', 'b') + V.eq('42 ÷ 6 = 7', 'g')),
        st("Thirty-six divided by something equals four. Think: four times what makes thirty-six? Nine.", V.eq('36 ÷ ' + box + ' = 4', 'b') + V.eq('4 × 9 = 36, so ' + box + ' = 9', 'g'))]),
      SC('Balancing both sides', 'The equals sign means "the same as"', [
        st("The equals sign means both sides are worth the same, like a balanced scale. Eight plus five equals something plus six.", V.eq('8 + 5 = ' + box + ' + 6')),
        st("The left side is thirteen. So the right side must also be thirteen. Thirteen take away six is seven.", V.eq('13 = ' + box + ' + 6', 'b') + V.eq(box + ' = 7', 'g'))]),
      SC('Using a bar model', 'A picture of the problem', [
        st("Forty-five children are in the hall. Eighteen are sitting down. How many are standing? Draw a bar for the whole: forty-five.",
          '<svg viewBox="0 0 420 110" width="420" role="img" aria-label="A bar model: 45 split into 18 and an unknown part"><rect x="10" y="10" width="400" height="36" rx="4" style="fill:#ecdcf8;stroke:var(--fg);stroke-width:2"/><text x="210" y="34" text-anchor="middle" font-size="18" font-weight="700" fill="#221a3a">45</text><rect x="10" y="60" width="160" height="36" rx="4" style="fill:#b98be6;stroke:var(--fg);stroke-width:2"/><text x="90" y="84" text-anchor="middle" font-size="18" font-weight="700" fill="#221a3a">18</text><rect x="170" y="60" width="240" height="36" rx="4" style="fill:#fff;stroke:var(--fg);stroke-width:2"/><text x="290" y="84" text-anchor="middle" font-size="18" font-weight="700" fill="#e2620f">?</text></svg>'),
        st("The whole is split into two parts. One part is eighteen. The missing part is forty-five take away eighteen, which is twenty-seven.", V.eq('45 − 18 = 27', 'g'))]),
      SC('Your turn', 'Pause, think, then listen', [
        st("Your turn! Something times four equals thirty-two. Pause and think.", V.eq(box + ' × 4 = 32')),
        st("Thirty-two divided by four is eight.", V.eq(box + ' = 8', 'g')),
        st("One more. Fifty take away something equals twenty-three.", V.eq('50 − ' + box + ' = 23')),
        st("Count on from twenty-three to fifty: seven to thirty, then twenty to fifty. Seven plus twenty is twenty-seven. Check: fifty take away twenty-seven is twenty-three.", V.eq(box + ' = 27', 'g'))]),
      SC('Let’s recap', 'How do you solve missing number problems?', [
        st("Brilliant! To find a missing number, use the inverse operation: take away to undo adding, add to undo taking away, divide to undo multiplying, and multiply to undo dividing. The equals sign means both sides are the same. Always check your answer by putting it back in.",
          V.list(['Find the number that makes it true', 'Use the inverse to undo', '= means both sides are the same', 'A bar model helps you see it', 'Check by putting it back in']))])
    ]
  };

  /* ---------- How do you solve maths problems? ---------- */
  var solve = {
    title: 'How do you solve maths problems?', goal: 'a step-by-step plan for word problems, and some clever strategies.',
    scenes: [
      SC('How do you solve maths problems?', 'Use a plan', [
        st("Word problems can look tricky, but a plan makes them easier. Here are four steps.",
          V.cols([V.chip('1 Read', 'b'), V.chip('2 Plan', 'g'), V.chip('3 Solve', 'r'), V.chip('4 Check', 'y')])),
        st("Read the problem carefully. Plan which operation to use. Solve it. Then check the answer makes sense.", V.rule('Read. Plan. Solve. Check.'))]),
      SC('Step 1: Read', 'What is the question asking?', [
        st("Read the problem twice. Find the numbers, and find exactly what the question is asking.", V.note('A class has 28 children. 9 are away. How many are in school?')),
        st("Here, the numbers are twenty-eight and nine. The question asks how many children are in school.", V.row(LK.tag('28', 'b') + LK.tag('9', 'b') + LK.tag('How many are in school?', 'g')))]),
      SC('Step 2: Plan', 'Clue words', [
        st("Clue words help you choose the operation. Altogether, total and in all usually mean add. Left, fewer, difference and how many more usually mean take away.",
          V.tbl([['altogether, total, sum', '+'], ['left, fewer, difference', '−'], ['each, groups of, times', '×'], ['share, split, each get', '÷']], ['Clue words', 'Operation'])),
        st("Nine children are away, so fewer are in school. We take away.", V.eq('28 − 9 = 19 children', 'g'))]),
      SC('Draw a bar model', 'Two children share 52 stickers', [
        st("Drawing a picture helps. Amy and Ben share fifty-two stickers. Ben has ten more than Amy. How many does each have?",
          '<svg viewBox="0 0 420 110" width="420" role="img" aria-label="Bar model: Amy one bar, Ben the same bar plus 10"><text x="8" y="34" font-size="15" font-weight="700" fill="#221a3a">Amy</text><rect x="60" y="12" width="150" height="34" rx="4" style="fill:#b98be6;stroke:var(--fg);stroke-width:2"/><text x="8" y="84" font-size="15" font-weight="700" fill="#221a3a">Ben</text><rect x="60" y="62" width="150" height="34" rx="4" style="fill:#b98be6;stroke:var(--fg);stroke-width:2"/><rect x="210" y="62" width="60" height="34" rx="4" style="fill:#f8c99c;stroke:var(--fg);stroke-width:2"/><text x="240" y="85" text-anchor="middle" font-size="15" font-weight="700" fill="#221a3a">10</text><text x="330" y="60" font-size="16" font-weight="700" fill="#221a3a">total 52</text></svg>'),
        st("Take away the extra ten: fifty-two take away ten is forty-two. Now the two bars are equal. Forty-two shared by two is twenty-one.", V.eq('52 − 10 = 42', 'b') + V.eq('42 ÷ 2 = 21', 'g')),
        st("So Amy has twenty-one, and Ben has twenty-one plus ten, which is thirty-one. Check: twenty-one plus thirty-one is fifty-two.", V.eq('Amy 21, Ben 31', 'r'))]),
      SC('Two-step problems', 'Do one step at a time', [
        st("Some problems need two steps. A teacher buys three packs of twenty-four pencils and gives fifteen away. How many are left?", V.note('3 packs of 24 pencils. 15 given away.')),
        st("Step one: three times twenty-four is seventy-two pencils. Step two: seventy-two take away fifteen is fifty-seven.", V.eq('3 × 24 = 72', 'b') + V.eq('72 − 15 = 57 pencils', 'g'))]),
      SC('Working backwards', 'Undo each step', [
        st("I think of a number. I add seven, then double it. The answer is thirty. What was my number? Work backwards, undoing each step.", V.eq('? → + 7 → × 2 → 30')),
        st("Undo double by halving: thirty halved is fifteen. Undo add seven by taking away seven: eight. My number was eight.", V.eq('30 ÷ 2 = 15', 'b') + V.eq('15 − 7 = 8', 'g'))]),
      SC('Guess and check', 'Try, then improve', [
        st("Two numbers add up to twenty. Their difference is four. Make a guess: ten and ten? The difference is zero. Too small.", V.eq('10 + 10 = 20, difference 0 ✗', 'r')),
        st("Try twelve and eight. They add up to twenty, and the difference is four. Got it!", V.eq('12 + 8 = 20, difference 4 ✓', 'g'))]),
      SC('Step 4: Check', 'Does the answer make sense?', [
        st("Always check. Does the answer make sense? Use an estimate, or the inverse operation. Nineteen children in school, plus nine away, makes twenty-eight. Correct!", V.eq('19 + 9 = 28 ✓', 'g'))]),
      SC('Your turn', 'Pause, think, then listen', [
        st("Your turn! A bus has thirty-four people. Twelve get off and nine get on. How many are on the bus now? Pause and plan.", V.note('34 people. 12 get off. 9 get on.')),
        st("Step one: thirty-four take away twelve is twenty-two. Step two: twenty-two plus nine is thirty-one people.", V.eq('34 − 12 = 22', 'b') + V.eq('22 + 9 = 31 people', 'g'))]),
      SC('Let’s recap', 'How do you solve maths problems?', [
        st("Fantastic! Read the problem carefully, plan using clue words, solve it, and check. Draw a bar model to see the problem. Break two-step problems into steps. And try working backwards, or guess and check, for puzzles.",
          V.list(['Read, Plan, Solve, Check', 'Clue words tell you the operation', 'Draw a bar model', 'Two-step problems: one step at a time', 'Work backwards, or guess and check']))])
    ]
  };

  BT.lessons(504, 'Watch lesson', [decimals], ['Percentages', 'Percentages of a set and of a measure']);
  BT.lessons(506, 'Watch lesson', [sequence, missing], ['Expressions from words and shapes']);
  BT.lessons(509, 'Watch lesson', [solve], ['Always true, factors and multiples']);
})();
