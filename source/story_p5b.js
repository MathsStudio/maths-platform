/* story_p5b.js: teacher story lessons for P5, part B: 502 operations, 503 fractions, 504 decimals and percentages, 505 measure, 506 patterns and algebra. */
(function () {
  'use strict';
  var BT = window.BT; if (!BT || !BT.story || !BT.sv) return;
  var V = BT.sv, NL = BT.NL;
  var SC = function (h, sub, steps) { return { h: h, sub: sub, steps: steps }; };
  var st = function (say, html) { return { say: say, html: html || '' }; };
  var H4 = ['Hundreds', 'Tens', 'Ones'], H3 = ['Tens', 'Ones'];

  /* ======================= 502 THE FOUR OPERATIONS ======================= */
  var addsub = {
    title: 'Adding and subtracting in columns', goal: 'how to add and take away big numbers in columns.',
    scenes: [
      SC('Adding with carrying', 'A school collects 346 and then 275 cans', [
        st("A school collects three hundred and forty-six cans in the morning, and two hundred and seventy-five in the afternoon. How many in total? We add, using columns.", V.eq('346 + 275 = ?', 'b')),
        st("Always start with the ones. Six plus five is eleven. That is too big for one column, so we write one and carry one ten over to the tens column.", V.tbl([['3', '4', '6'], ['2', '7', '5'], ['', '', '1']], H4) + V.note('Ones: 6 + 5 = 11. Write 1, carry 1 ten.')),
        st("Now the tens. Four plus seven plus the carried one makes twelve. Write two, and carry one hundred.", V.tbl([['3', '4', '6'], ['2', '7', '5'], ['', '2', '1']], H4) + V.note('Tens: 4 + 7 + 1 = 12. Write 2, carry 1 hundred.')),
        st("Last, the hundreds. Three plus two plus the carried one is six. So the school collected six hundred and twenty-one cans.", V.tbl([['3', '4', '6'], ['2', '7', '5'], ['6', '2', '1']], H4) + V.eq('346 + 275 = 621', 'g'))]),
      SC('Subtracting with exchanging', 'Take away 28 from 63', [
        st("Now subtraction. Sixty-three children are on a bus and twenty-eight get off. How many are left? Start with the ones again. Three take away eight? We can't do that.", V.tbl([['6', '3'], ['2', '8']], H3) + V.eq('63 − 28 = ?', 'b')),
        st("So we exchange. Take one ten from the six tens, and break it into ten ones. Now we have five tens and thirteen ones.", V.tbl([['5', '13'], ['2', '8']], H3) + V.note('Exchange 1 ten for 10 ones.')),
        st("Thirteen take away eight is five. Five tens take away two tens is three tens. So thirty-five children are left.", V.tbl([['5', '13'], ['2', '8'], ['3', '5']], H3) + V.eq('63 − 28 = 35', 'g')),
        st("Here is a clever check. Subtraction and addition are opposites. Add the answer back: thirty-five plus twenty-eight makes sixty-three. It works!", V.eq('35 + 28 = 63 ✓', 'g'))]),
      SC('Let’s recap', '', [
        st("Brilliant. Line up the columns, start with the ones, carry when adding, exchange when subtracting, and check using the opposite operation.", V.list(['Start with the ones', 'Adding: carry when 10 or more', 'Subtracting: exchange a ten', 'Check with the opposite']))])
    ]
  };

  var muldiv = {
    title: 'Multiplying and dividing', goal: 'what multiplying and dividing really mean, and how to use them.',
    scenes: [
      SC('Multiplying is equal groups', '3 rows of 4 stickers', [
        st("Multiplying is a quick way to add equal groups. Here are three rows of four stickers. Counting in fours: four, eight, twelve.", V.dots(3, 4, 'var(--accent)')),
        st("So three groups of four is twelve. We write three times four equals twelve. And it works the other way round too: four times three is also twelve.", V.eq('3 × 4 = 12', 'b') + V.eq('4 × 3 = 12', 'g'))]),
      SC('Multiplying a bigger number', '24 × 3', [
        st("What about twenty-four times three? Split the twenty-four into twenty and four. They are easier to multiply.", V.cards(['24', '=', '20', '+', '4'], ['b', 'r', 'g', 'r', 'y'], true)),
        st("Twenty times three is sixty. Four times three is twelve. Now add them together: sixty plus twelve is seventy-two.", V.eq('20 × 3 = 60') + V.eq('4 × 3 = 12') + V.eq('60 + 12 = 72', 'g'))]),
      SC('Dividing is sharing', '17 sweets shared between 5 friends', [
        st("Dividing means sharing equally. Seventeen sweets are shared between five friends. Each friend gets three sweets.", V.dots(5, 3, 'var(--good)')),
        st("Five groups of three is fifteen. That leaves two sweets that cannot be shared fairly. Those are called the remainder.", V.eq('17 ÷ 5 = 3 remainder 2', 'b')),
        st("We can check by multiplying. Three times five is fifteen, and fifteen plus the remainder two is seventeen. Perfect.", V.eq('3 × 5 + 2 = 17 ✓', 'g'))]),
      SC('Let’s recap', '', [
        st("Multiplying is adding equal groups. Dividing is sharing equally. A remainder is what is left over, and we can always check using the opposite operation.", V.list(['Multiply: equal groups', 'Divide: share equally', 'Remainder is what is left', 'Check with the opposite']))])
    ]
  };

  var order = {
    title: 'Order of operations and word problems', goal: 'which sum to do first, and how to turn words into number sentences.',
    scenes: [
      SC('Which comes first?', 'Two plus three times four', [
        st("Here is a puzzle: two plus three times four. Is the answer twenty, or fourteen? Both sound sensible, but only one is right.", V.eq('2 + 3 × 4 = ?', 'b')),
        st("The rule is: multiply and divide before you add and subtract. So three times four is twelve first, and then add two. The answer is fourteen.", V.eq('3 × 4 = 12') + V.eq('2 + 12 = 14', 'g')),
        st("But brackets are the boss. If I write two plus three in brackets, we must do the brackets first. Five times four is twenty.", V.eq('(2 + 3) × 4 = 5 × 4 = 20', 'b') + V.rule('Brackets first, then × and ÷, then + and −.'))]),
      SC('Word problems', 'Turn the words into a sum', [
        st("Now a word problem. A pack has six pencils. Maya buys four packs and gives away five pencils. How many does she have left? First work out what the story is asking.", V.eq('4 packs of 6, then give away 5', 'b')),
        st("Four packs of six is twenty-four pencils. Then take away five, and Maya has nineteen pencils left.", V.eq('4 × 6 = 24') + V.eq('24 − 5 = 19', 'g')),
        st("Always read it, pick out the numbers, decide the operations, solve it, and ask yourself: does my answer make sense?", V.list(['Read the story', 'Pick out the numbers', 'Choose the operations', 'Check it makes sense']))])
    ]
  };
  BT.story(502, 'Watch', [addsub, muldiv, order]);

  /* ======================= 503 FRACTIONS ======================= */
  var fwhat = {
    title: 'What is a fraction?', goal: 'what the top and bottom of a fraction mean, and what equivalent fractions are.',
    scenes: [
      SC('Equal parts of a whole', 'A pizza cut into 4 equal slices', [
        st("Let's start with a pizza cut into four equal slices. If you eat one slice, you have eaten one quarter of the pizza.", BT.bar(1, 4, 'One of four equal parts shaded') + V.eq('1/4', 'b')),
        st("The bottom number is the denominator. It tells us how many equal parts the whole is cut into. The top number is the numerator. It tells us how many parts we have.", V.cards(['3', '4'], ['g', 'b']) + V.note('numerator on top, denominator underneath')),
        st("Here three of the four equal parts are shaded. That is three quarters. The parts must be equal, or it isn't a fraction!", BT.bar(3, 4, 'Three of four equal parts shaded') + V.eq('3/4', 'g'))]),
      SC('Equivalent fractions', 'Different fractions, same amount', [
        st("Now look at one half. If we cut the same bar into four pieces, two of them are shaded. Two quarters is exactly the same amount as one half.", BT.bar(1, 2, 'One of two equal parts shaded') + BT.bar(2, 4, 'Two of four equal parts shaded') + V.eq('1/2 = 2/4', 'g')),
        st("Cut it into eight, and four eighths is also the same. These are called equivalent fractions. To make them, multiply the top and the bottom by the same number.", BT.bar(4, 8, 'Four of eight equal parts shaded') + V.eq('1/2 = 2/4 = 4/8', 'g') + V.rule('Same number on top and bottom.'))]),
      SC('Let’s recap', '', [
        st("A fraction is equal parts of a whole. The denominator says how many parts, and the numerator says how many we have. Equivalent fractions look different but mean the same amount.", V.list(['Parts must be equal', 'Denominator: parts in the whole', 'Numerator: parts we have', 'Equivalent = same amount']))])
    ]
  };

  var fmixed = {
    title: 'Improper fractions and mixed numbers', goal: 'what happens when there is more than one whole.',
    scenes: [
      SC('More than one whole', 'Seven quarters of pizza', [
        st("What if you have more than one whole pizza? Seven quarters means seven slices, and every pizza has four slices. So that is more than one whole.", BT.bar(4, 4, 'Four of four parts shaded') + BT.bar(3, 4, 'Three of four parts shaded')),
        st("When the top is bigger than the bottom, it is called an improper fraction. Seven quarters is one whole pizza and three quarters. We write one and three quarters, and that is a mixed number.", V.eq('7/4 = 1 3/4', 'g')),
        st("To change it, ask how many fours fit into seven. One four fits, with three left over. The one is the whole number, and the three is the leftover quarters.", V.eq('7 ÷ 4 = 1 remainder 3') + V.rule('Whole number first, remainder on top.'))]),
      SC('Let’s recap', '', [
        st("An improper fraction has the top bigger than the bottom. A mixed number has a whole number and a fraction. They are two ways of writing the same amount.", V.list(['Improper: top bigger than bottom', 'Mixed: whole number + fraction', 'Divide to change one to the other']))])
    ]
  };

  var fops = {
    title: 'Comparing, adding and finding a fraction of an amount', goal: 'how to compare fractions, add them, and find a fraction of a number.',
    scenes: [
      SC('Adding fractions', 'Same denominator', [
        st("Adding fractions with the same bottom number is easy. Three eighths plus two eighths. The pieces are the same size, so we just add the tops and keep the bottom.", BT.bar(3, 8, 'Three of eight shaded') + BT.bar(2, 8, 'Two of eight shaded')),
        st("Three plus two is five. So the answer is five eighths. We never add the denominators!", V.eq('3/8 + 2/8 = 5/8', 'g') + V.rule('Add the tops. Keep the bottom.'))]),
      SC('Comparing fractions', 'Which is bigger: one half or one third?', [
        st("Which is bigger, one half or one third? Think of sharing a cake. If you share it between two people you get more than if you share it between three.", BT.bar(1, 2, 'One of two shaded') + BT.bar(1, 3, 'One of three shaded')),
        st("When the top numbers are the same, the bigger the denominator, the smaller each piece. So one half is bigger than one third.", V.eq('1/2 > 1/3', 'g'))]),
      SC('A fraction of an amount', 'Three quarters of 20 sweets', [
        st("Now, what is three quarters of twenty sweets? First, find one quarter. That means dividing by the denominator: twenty divided by four is five.", V.dots(4, 5, 'var(--accent)', 5) + V.eq('1/4 of 20 = 20 ÷ 4 = 5', 'b')),
        st("Three quarters is three of those groups. Three times five is fifteen. So three quarters of twenty is fifteen.", V.dots(4, 5, 'var(--accent)', 15) + V.eq('3/4 of 20 = 3 × 5 = 15', 'g')),
        st("Remember the two steps. Divide by the bottom, then multiply by the top.", V.rule('÷ the bottom, × the top.'))])
    ]
  };
  BT.story(503, 'Watch', [fwhat, fmixed, fops]);

  /* ======================= 504 DECIMALS AND PERCENTAGES ======================= */
  var ddec = {
    title: 'Using decimals', goal: 'how to place, add and subtract decimals.',
    scenes: [
      SC('Decimals on a number line', 'Between 2 and 3', [
        st("Decimals live in the gaps between whole numbers. Between two and three, there are ten steps of one tenth. Here is two point four.", NL(2, 3, { lab: 0.5, tick: 0.1, marks: [[2.4, 2]] })),
        st("And exactly halfway is two point five. Half a whole is five tenths.", NL(2, 3, { lab: 0.5, tick: 0.1, marks: [[2.5, 2]] }) + V.eq('2.5 = 2 and 5 tenths', 'b'))]),
      SC('Adding decimals', '2.5 + 1.75', [
        st("To add decimals, line up the decimal points. Two point five plus one point seven five. Fill the empty place with a zero, so two point five becomes two point five zero.", V.tbl([['2', '.', '5', '0'], ['1', '.', '7', '5']], ['Ones', '.', 'Tenths', 'Hundredths'])),
        st("Add the hundredths: zero plus five is five. The tenths: five plus seven is twelve, so write two and carry one. The ones: two plus one plus one is four. The answer is four point two five.", V.eq('2.50 + 1.75 = 4.25', 'g') + V.rule('Line up the decimal points!'))])
    ]
  };

  var pct = {
    title: 'Percentages', goal: 'what per cent means and how to find a percentage of an amount.',
    scenes: [
      SC('Out of one hundred', 'What does per cent mean?', [
        st("Per cent means out of one hundred. Here are one hundred circles, and twenty-five are shaded. That is twenty-five per cent.", V.dots(10, 10, 'var(--accent)', 25) + V.eq('25% = 25/100', 'b')),
        st("Twenty-five out of one hundred is the same as one quarter, and the same as zero point two five. A percentage, a fraction and a decimal are three ways to say the same thing.", V.cards(['25%', '1/4', '0.25'], ['b', 'g', 'r']))]),
      SC('Famous percentages', 'Learn these by heart', [
        st("Learn these friends. Fifty per cent is one half. Twenty-five per cent is one quarter. Seventy-five per cent is three quarters. Ten per cent is one tenth.", V.tbl([['50%', '1/2', '0.5'], ['25%', '1/4', '0.25'], ['75%', '3/4', '0.75'], ['10%', '1/10', '0.1']], ['Percent', 'Fraction', 'Decimal']))]),
      SC('Finding a percentage', '10% and 25% of 80', [
        st("To find ten per cent of eighty, divide by ten. Eighty divided by ten is eight.", V.eq('10% of 80 = 80 ÷ 10 = 8', 'b')),
        st("To find twenty-five per cent, divide by four, since it is one quarter. Eighty divided by four is twenty.", V.eq('25% of 80 = 80 ÷ 4 = 20', 'g')),
        st("For fifty per cent, halve it. You can use these to build lots of others. Twenty per cent is double ten per cent, so sixteen.", V.eq('20% of 80 = 8 × 2 = 16', 'g'))])
    ]
  };
  BT.story(504, 'Watch', [ddec, pct]);

  /* ======================= 505 MONEY, TIME AND MEASUREMENT ======================= */
  var units = {
    title: 'Units and changing between them', goal: 'how to change between metric units.',
    scenes: [
      SC('Why different units?', 'Measure the right size', [
        st("We measure small things in small units, and big things in big units. A pencil is measured in centimetres, but a journey is measured in kilometres.", V.cards(['pencil: cm', 'room: m', 'journey: km'], ['b', 'g', 'r'], true)),
        st("The metric system is built on tens, hundreds and thousands. One metre is one hundred centimetres. One kilometre is one thousand metres.", V.tbl([['1 m', '100 cm'], ['1 km', '1,000 m'], ['1 kg', '1,000 g'], ['1 l', '1,000 ml']], ['Big unit', 'Small unit']))]),
      SC('Changing units', '2.5 km to metres', [
        st("To change to a smaller unit, multiply. Two point five kilometres to metres. One kilometre is one thousand metres, so multiply by one thousand.", V.eq('2.5 × 1,000 = 2,500 m', 'g')),
        st("To change to a bigger unit, divide. Three thousand grams to kilograms. Divide by one thousand to get three kilograms.", V.eq('3,000 ÷ 1,000 = 3 kg', 'g') + V.rule('Smaller unit: × . Bigger unit: ÷ .'))])
    ]
  };

  var timem = {
    title: 'Telling the time', goal: 'how to read clocks, 24-hour times and time intervals.',
    scenes: [
      SC('Reading a clock', 'Quarter to four', [
        st("Let's read this clock. The short hand is just before four, and the long hand points at nine. That means forty-five minutes past three, or quarter to four.", V.clock(3, 45) + V.eq('3:45 = quarter to 4', 'b')),
        st("In the 24-hour clock, times after midday carry on counting past twelve. So three forty-five in the afternoon is fifteen forty-five. Just add twelve.", V.eq('3:45 pm = 15:45', 'g'))]),
      SC('Time intervals', 'How long is the film?', [
        st("A film starts at half past two and ends at four fifteen. How long is it? Count on in steps. From two thirty to three o'clock is thirty minutes.", V.eq('2:30 → 3:00 = 30 min', 'b')),
        st("From three to four is one hour, and then fifteen more minutes. Add them: thirty minutes, plus an hour, plus fifteen minutes is one hour forty-five minutes.", V.eq('30 min + 1 h + 15 min = 1 h 45 min', 'g'))])
    ]
  };

  var perim = {
    title: 'Perimeter and area', goal: 'the difference between the distance around a shape and the space inside it.',
    scenes: [
      SC('Perimeter', 'The distance around', [
        st("Imagine walking all the way around the edge of a garden. The distance you walk is the perimeter. This rectangle is six metres long and four metres wide.", V.poly([[20, 20], [200, 20], [200, 110], [20, 110]], 'var(--surface-2)', 260, 130, 'A rectangle', [[110, 14, '6 m'], [226, 70, '4 m']])),
        st("Add all four sides: six, four, six, four. That is twenty metres. So the perimeter is twenty metres.", V.eq('6 + 4 + 6 + 4 = 20 m', 'g'))]),
      SC('Area', 'The space inside', [
        st("Area is the space inside the shape, measured in square units. We can cover the rectangle in squares, six in each row, with four rows.", V.dots(4, 6, 'var(--good)')),
        st("Six times four is twenty-four. The area is twenty-four square metres. Perimeter adds the sides, area multiplies length by width.", V.eq('6 × 4 = 24 m²', 'g') + V.rule('Perimeter: add the sides. Area: length × width.'))])
    ]
  };
  BT.story(505, 'Watch', [units, timem, perim]);

  /* ======================= 506 PATTERNS AND ALGEBRA ======================= */
  var seq = {
    title: 'Number patterns and rules', goal: 'how to find the rule of a pattern and continue it.',
    scenes: [
      SC('Spotting the rule', 'What comes next?', [
        st("Patterns are everywhere. Look at this: five, nine, thirteen, seventeen. What comes next? Find how much it goes up each time.", V.cards(['5', '9', '13', '17', '?'], ['b', 'b', 'b', 'b', 'y'], true)),
        st("Nine minus five is four. Thirteen minus nine is four. It adds four every time. This is the rule. So the next number is seventeen plus four, which is twenty-one.", NL(4, 24, { lab: 4, tick: 1, jumps: [[5, 9, '+4'], [9, 13, '+4'], [13, 17, '+4'], [17, 21, '+4']] }) + V.eq('Rule: add 4, so next = 21', 'g'))]),
      SC('Pattern that gets smaller', 'Counting down', [
        st("Patterns can go down too. Fifty, forty-five, forty, thirty-five. The rule is take away five. Check each pair to be sure the rule is the same.", V.cards(['50', '45', '40', '35'], ['b', 'g', 'r', 'y'], true) + V.eq('Rule: subtract 5', 'b'))])
    ]
  };

  var func = {
    title: 'Function machines and equations', goal: 'how a machine applies a rule, and how to find a missing number.',
    scenes: [
      SC('A function machine', 'In, rule, out', [
        st("A function machine takes a number in, applies a rule, and gives a number out. Let's say the rule is multiply by two, then add one. Put three in.", V.cards(['3', '× 2', '+ 1', '?'], ['b', 'g', 'g', 'y'], true)),
        st("Three times two is six, and six plus one is seven. So seven comes out. Put in five and you get eleven.", V.eq('3 → 7', 'g') + V.eq('5 → 11', 'g'))]),
      SC('Missing numbers', 'Solve the puzzle', [
        st("Now a missing number puzzle. Something plus seven equals fifteen. What is the something? Do the opposite: fifteen take away seven is eight.", V.eq('n + 7 = 15', 'b') + V.eq('n = 15 − 7 = 8', 'g')),
        st("Another one: three times n equals eighteen. The opposite of multiplying is dividing. Eighteen divided by three is six, so n is six.", V.eq('3 × n = 18', 'b') + V.eq('n = 18 ÷ 3 = 6', 'g') + V.rule('Use the opposite operation.'))])
    ]
  };
  BT.story(506, 'Watch', [seq, func]);
})();
