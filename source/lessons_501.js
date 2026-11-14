/* lessons_501.js: new Watch lessons for P5 Topic 1, Place value and rounding.
   One detailed lesson per question from the second level question list. Replaces the older short Watch lessons. */
(function () {
  'use strict';
  var BT = window.BT; if (!BT || !BT.story) return;
  var V = BT.sv;
  var SC = function (h, sub, steps) { return { h: h, sub: sub, steps: steps }; };
  var st = function (say, html) { return { say: say, html: html || '' }; };
  var H4 = ['Th', 'H', 'T', 'O'];
  var H5 = ['TTh', 'Th', 'H', 'T', 'O'];
  var val = function (t, col) { return '<div class="sv-eq ' + (col || '') + '" style="font-size:clamp(15px,3.8vw,30px)">' + t + '</div>'; };
  var hot = function (t) { return '<span style="color:var(--bad)">' + t + '</span>'; };
  var chart = function (digits, heads, cols) {
    return V.cols(digits.map(function (d, i) { return V.chip(heads[i], cols[i]) + V.card(d, cols[i]); }), digits.length);
  };

  var placeValue = {
    title: 'What is place value?', goal: 'how the place of a digit decides what it is worth.',
    scenes: [
      SC('What is place value?', 'Meet the ten digits', [
        st("Hello! Today we are answering a big question: what is place value? Let's start with the digits. Every number you will ever write is made from just these ten digits.",
          V.cards(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], ['b', 'g', 'r', 'y'], true)),
        st("So how can ten little digits make huge numbers, like seventy-two thousand? The secret is where each digit sits in the number. We call that its place.", V.big('72,000'))]),

      SC('The big idea', 'Place value', [
        st("Here is the big idea. Place value means that the value of a digit depends on its place in the number.", V.rule('The value of a digit depends on its place in the number.')),
        st("Look at the digit 3. On its own, it is worth three. Move it one place to the left, and it is worth thirty.", V.cards(['3', '30'], ['b', 'g'])),
        st("Move it again and it is worth three hundred. Once more, and it is worth three thousand. Same digit, different place, different value.",
          V.cards(['300', '3,000'], ['r', 'y']) + V.note('Same digit. Different place. Different value.'))]),

      SC('Why do places go up in tens?', 'Bundling in groups of ten', [
        st("Why are the places worth ten, a hundred, a thousand? Imagine counting sticks. When you have ten single sticks, you tie them into one bundle. Ten ones make one ten.",
          V.sticks(10, 'var(--accent)', true) + V.eq('10 ones = 1 ten', 'b')),
        st("When you have ten bundles of ten, you tie them into a bigger bundle. Ten tens make one hundred.", V.eq('10 tens = 1 hundred', 'g')),
        st("And ten hundreds make one thousand. Every time we collect ten of something, we move up to the next place. So each place is worth ten times the place on its right.",
          V.eq('10 hundreds = 1 thousand', 'r') + V.cols([V.card('1,000', 'y', true), V.card('100', 'r', true), V.card('10', 'g', true), V.card('1', 'b', true)]))]),

      SC('The place value chart', '4,372 people watch a football match', [
        st("Here is the crowd at a football match: four thousand, three hundred and seventy-two people. A place value chart puts each digit in its own column.",
          chart(['4', '3', '7', '2'], H4, ['y', 'r', 'g', 'b']) + V.note('Th = thousands · H = hundreds · T = tens · O = ones')),
        st("The 4 is in the thousands column, so it is worth four thousand. The 3 is in the hundreds column, so it is worth three hundred.",
          V.cols([V.eq('4,000', 'b'), V.eq('300', 'g'), '', ''])),
        st("The 7 is in the tens column, so it is worth seventy. The 2 is in the ones column, so it is worth just two.",
          V.cols(['', '', V.eq('70', 'r'), V.eq('2', 'b')])),
        st("Add the values together and you get the whole number back. Four thousand, plus three hundred, plus seventy, plus two.", V.eq('4,000 + 300 + 70 + 2 = 4,372', 'g'))]),

      SC('Reading and writing numbers', 'Use the comma to help you', [
        st("To read a big number, look for the comma. Everything before the comma is thousands.", V.big('4' + hot(',') + '372')),
        st("So we read the thousands first, then the rest: four thousand, three hundred and seventy-two.", V.eq('four thousand, three hundred and seventy-two', 'b')),
        st("It works the other way too. To write twenty-six thousand and eighty, write the thousands, a comma, then the hundreds, tens and ones. There are no hundreds and no ones, so we write zeros.",
          V.eq('twenty-six thousand and eighty', 'g') + V.big('26,080'))]),

      SC('Even bigger numbers', 'A stadium holds 25,604 people', [
        st("Numbers can be even bigger. This stadium holds twenty-five thousand, six hundred and four people. We need a new column on the left: ten thousands.",
          chart(['2', '5', '6', '0', '4'], H5, ['b', 'y', 'r', 'g', 'b']) + V.note('TTh = ten thousands')),
        st("The 2 is in the ten thousands column, so it is worth twenty thousand. The 5 is in the thousands column, so it is worth five thousand.",
          V.cols([val('20,000', 'b'), val('5,000', 'g'), '', '', ''], 5)),
        st("The 6 is worth six hundred. There is a zero in the tens column, so there are no tens at all. And the 4 is worth four.",
          V.cols(['', '', val('600', 'r'), val('0', 'r'), val('4', 'b')], 5)),
        st("Altogether: twenty thousand, plus five thousand, plus six hundred, plus four.", V.eq('20,000 + 5,000 + 600 + 4 = 25,604', 'g'))]),

      SC('Zero holds the place', 'Is 4,050 the same as 45?', [
        st("Zero is very important. In four thousand and fifty, the zeros tell us there are no hundreds and no ones. They keep the 4 and the 5 in the right columns.",
          V.tbl([['4', '0', '5', '0']], H4) + V.eq('4,050', 'b')),
        st("Take the zeros away and the digits slide to the right. Now we have forty-five, a much smaller number!",
          V.tbl([['', '', '4', '5']], H4) + V.eq('45', 'r')),
        st("Put one zero in the middle and we get four hundred and five. Where the zero goes changes the number.",
          V.tbl([['', '4', '0', '5']], H4) + V.eq('405', 'g') + V.rule('Zero holds an empty place.'))]),

      SC('Multiplying and dividing by 10', 'Every digit moves one place', [
        st("Place value also explains what happens when we multiply by ten. Every digit moves one place to the left, and a zero fills the empty ones column.",
          V.tbl([['', '', '3', '6'], ['', '3', '6', '0']], H4) + V.eq('36 × 10 = 360', 'b')),
        st("Multiply by ten again, and the digits move one more place to the left. Three hundred and sixty becomes three thousand, six hundred.", V.eq('360 × 10 = 3,600', 'g')),
        st("Dividing by ten does the opposite. Every digit moves one place to the right.", V.eq('3,600 ÷ 10 = 360', 'r') + V.note('× 10 moves digits left. ÷ 10 moves digits right.'))]),

      SC('Which number is bigger?', '4,372 or 4,327?', [
        st("Place value helps us compare numbers. Line them up in a place value chart, then compare digit by digit, starting from the left.",
          V.tbl([['4', '3', '7', '2'], ['4', '3', '2', '7']], H4)),
        st("Thousands: both have 4. Hundreds: both have 3. Tens: one has 7 and the other has 2. Seven tens is more than two tens, so we can stop here.", V.eq('7 tens is more than 2 tens', 'g')),
        st("So four thousand, three hundred and seventy-two is the bigger number. We use this sign to show it.", V.eq('4,372 > 4,327', 'b') + V.note('The wide end of > faces the bigger number.'))]),

      SC('Putting numbers in order', 'Smallest to biggest', [
        st("Let's put these four numbers in order, from smallest to biggest. They all have 3 thousands, so we look at the hundreds next.",
          V.cards(['3,509', '3,095', '3,950', '3,590'], ['b', 'g', 'r', 'y'], true)),
        st("3,095 has no hundreds, so it is the smallest. 3,509 and 3,590 both have 5 hundreds, so we compare their tens. Zero tens is less than nine tens.",
          V.eq('3,095 → 3,509 → 3,590', 'g')),
        st("3,950 has 9 hundreds, so it is the biggest of all.", V.eq('3,095 < 3,509 < 3,590 < 3,950', 'b'))]),

      SC('Your turn', 'Pause, think, then listen', [
        st("Your turn! What is the 6 worth in sixteen thousand, four hundred and fifty-two? Pause the lesson and think.", V.big('1' + hot('6') + ',452')),
        st("The 6 is in the thousands column, so it is worth six thousand.", V.eq('The 6 is worth 6,000', 'g')),
        st("One more. Write thirty thousand, plus four hundred, plus five, as one number. Think about the empty places.", V.eq('30,000 + 400 + 5 = ?')),
        st("There are no thousands and no tens, so we put zeros there to hold the places. The answer is thirty thousand, four hundred and five.",
          V.tbl([['3', '0', '4', '0', '5']], H5) + V.eq('30,405', 'g'))]),

      SC('Let’s recap', 'What is place value?', [
        st("Brilliant work! Let's remember what we learned. The place of a digit decides its value. Each place is worth ten times the place on its right. Zero holds an empty place. To compare numbers, start from the biggest place on the left. And when you multiply by ten, the digits move one place to the left.",
          V.list(['The place of a digit decides its value', 'Each place is 10 times the place on its right', 'Zero holds an empty place', 'Compare numbers from the left', '× 10 moves digits left, ÷ 10 moves them right']))])
    ]
  };

  var LK = BT.lk, NL = BT.NL;

  /* ---------- What are negative numbers? ---------- */
  var negative = {
    title: 'What are negative numbers?', goal: 'what negative numbers are, where we use them, and how to order them.',
    scenes: [
      SC('What are negative numbers?', 'Numbers below zero', [
        st("Can a number be smaller than zero? Yes! Numbers smaller than zero are called negative numbers.", V.rule('A negative number is a number less than zero.')),
        st("We write a negative number with a minus sign in front of it. This is negative five. We say it as negative five, or minus five.", V.big('−5') + V.note('We say: negative five')),
        st("Numbers bigger than zero, like 3 or 10, are called positive numbers. Zero itself is neither positive nor negative.", V.cards(['−3', '0', '+3'], ['r', 'y', 'g']))]),

      SC('Where do we see them?', 'Negative numbers in real life', [
        st("We see negative numbers on a thermometer. On a freezing winter night in Scotland, the temperature can drop below zero degrees, to negative three degrees.", V.cards(['5°C', '0°C', '−3°C'], ['g', 'y', 'r']) + V.note('Below zero means very cold')),
        st("Lifts use them too. The ground floor is zero. The car park under the building is floor negative one, and the floor under that is negative two.", V.cards(['2', '1', '0', '−1', '−2'], ['g', 'g', 'y', 'r', 'r'], true)),
        st("And in a bank account, if you spend more money than you have, your balance can go below zero.")]),

      SC('The number line', 'Zero is in the middle', [
        st("A number line helps us see negative numbers. Zero sits in the middle.", NL(-6, 6, { lab: 1, marks: [[0, 50]] })),
        st("Positive numbers go to the right of zero. Negative numbers go to the left of zero.", V.row(LK.tag('← negative', 'r') + LK.tag('positive →', 'g'))),
        st("The further left you go, the smaller the number. So negative five is smaller than negative one, even though five looks like a bigger digit.", NL(-6, 6, { lab: 1, marks: [[-5, 0], [-1, 215]] }) + V.eq('−5 < −1', 'b'))]),

      SC('Which is colder?', '−2°C or −6°C?', [
        st("One town is negative two degrees. Another town is negative six degrees. Which town is colder?", V.cards(['−2°C', '−6°C'], ['b', 'r'])),
        st("Put them on the number line. Negative six is further to the left, so it is smaller. Negative six degrees is colder.", NL(-8, 2, { lab: 1, marks: [[-6, 0], [-2, 215]] }) + V.eq('−6 < −2', 'r')),
        st("Be careful! With negative numbers, the bigger the digit after the minus sign, the smaller the number.", V.rule('−10 is smaller than −1'))]),

      SC('Putting numbers in order', 'Smallest to biggest', [
        st("Let's put these numbers in order, from smallest to biggest: four, negative three, zero, negative seven and two.", V.cards(['4', '−3', '0', '−7', '2'], ['g', 'r', 'y', 'r', 'g'], true)),
        st("Mark them on a number line. Then read them from left to right.", NL(-8, 5, { lab: 1, marks: [[-7, 0], [-3, 20], [0, 50], [2, 140], [4, 215]] })),
        st("So the order is negative seven, negative three, zero, two, four.", V.eq('−7, −3, 0, 2, 4', 'g'))]),

      SC('Counting across zero', 'When the temperature falls', [
        st("In the afternoon it is three degrees. By night, the temperature falls by five degrees. What is the temperature at night?", V.eq('3°C, then 5 degrees colder')),
        st("Count back five steps on the number line: two, one, zero, negative one, negative two.", NL(-4, 4, { lab: 1, jumps: [[3, -2, '− 5']], marks: [[3, 215], [-2, 0]] })),
        st("So the night-time temperature is negative two degrees.", V.eq('3 − 5 = −2', 'b')),
        st("It works going up too. It is negative four degrees in the morning, and it warms up by six degrees. Count on six steps: negative three, negative two, negative one, zero, one, two. It is now two degrees.",
          NL(-5, 3, { lab: 1, jumps: [[-4, 2, '+ 6']], marks: [[-4, 0], [2, 140]] }) + V.eq('−4 + 6 = 2', 'g'))]),

      SC('The difference across zero', 'From −3°C to 4°C', [
        st("How many degrees warmer is four degrees than negative three degrees? Count the steps between them.", NL(-4, 5, { lab: 1, marks: [[-3, 0], [4, 215]] })),
        st("From negative three up to zero is three steps. From zero up to four is four more steps.", NL(-4, 5, { lab: 1, jumps: [[-3, 0, '3'], [0, 4, '4']] })),
        st("Three plus four is seven. So it is seven degrees warmer.", V.eq('3 + 4 = 7 degrees', 'g'))]),

      SC('Your turn', 'Pause, think, then listen', [
        st("Your turn! Which is warmer: negative eight degrees, or negative five degrees? Pause and think.", V.cards(['−8°C', '−5°C'], ['b', 'r'])),
        st("Negative five is further right on the number line, so it is bigger. Negative five degrees is warmer.", V.eq('−5 > −8', 'g')),
        st("One more. The temperature is negative one degree, and it falls by three more degrees. What is it now?", V.eq('−1, then 3 degrees colder')),
        st("Count back three: negative two, negative three, negative four. It is now negative four degrees.", NL(-6, 2, { lab: 1, jumps: [[-1, -4, '− 3']] }) + V.eq('−1 − 3 = −4', 'g'))]),

      SC('Let’s recap', 'What are negative numbers?', [
        st("Great work! Negative numbers are less than zero, and we write them with a minus sign. We use them for cold temperatures, floors below ground, and money owed. On a number line, negatives are to the left of zero, and the further left, the smaller the number. When you count across zero, count every step.",
          V.list(['Negative numbers are less than zero', 'They have a minus sign: −5', 'Further left on the number line = smaller', '−6 is colder than −2', 'Count every step across zero']))])
    ]
  };

  /* ---------- How do you partition a number? ---------- */
  var partition = {
    title: 'How do you partition a number?', goal: 'how to split a number into parts, by place value and in other useful ways.',
    scenes: [
      SC('How do you partition a number?', 'Splitting numbers into parts', [
        st("To partition a number means to split it into smaller parts. When you put the parts back together, you get the same number.", V.rule('Partition = split a number into parts that add up to the number.')),
        st("Think of a pizza cut into slices. The slices are the parts, and together they make the whole pizza. Numbers can be split in the same way.")]),

      SC('Partitioning by place value', '365', [
        st("The most common way is to partition by place value. Here is three hundred and sixty-five in a place value chart.", chart(['3', '6', '5'], ['H', 'T', 'O'], ['r', 'g', 'b'])),
        st("The 3 is worth three hundred. The 6 is worth sixty. The 5 is worth five.", V.cards(['300', '60', '5'], ['r', 'g', 'b'])),
        st("So three hundred and sixty-five partitions into three hundred, plus sixty, plus five.", V.eq('365 = 300 + 60 + 5', 'g'))]),

      SC('Bigger numbers', '7,284', [
        st("It works for bigger numbers too. Seven thousand, two hundred and eighty-four.", chart(['7', '2', '8', '4'], H4, ['y', 'r', 'g', 'b'])),
        st("Seven thousand, plus two hundred, plus eighty, plus four.", V.eq('7,284 = 7,000 + 200 + 80 + 4', 'g')),
        st("We call this writing the number in expanded form, because we stretch it out into its parts.", V.note('Expanded form shows the value of every digit.'))]),

      SC('When there is a zero', '5,036', [
        st("What about five thousand and thirty-six? There is a zero in the hundreds column.", chart(['5', '0', '3', '6'], H4, ['y', 'r', 'g', 'b'])),
        st("A zero means there are no hundreds, so we leave that part out.", V.eq('5,036 = 5,000 + 30 + 6', 'g')),
        st("Be careful not to write the zero as a part. Five thousand, plus zero, plus thirty, plus six is still right, but we usually skip the zero.", V.note('No hundreds, so no hundreds part'))]),

      SC('Other ways to partition', 'The same number, split differently', [
        st("Partitioning by place value is not the only way. Here is forty-six as four tens and six ones.", V.eq('46 = 40 + 6', 'b')),
        st("We could swap one ten for ten ones. Then forty-six is three tens and sixteen ones.", V.eq('46 = 30 + 16', 'g')),
        st("Or twenty plus twenty-six. All of these are correct, because each pair adds up to forty-six.", V.eq('46 = 20 + 26', 'r') + V.note('Every way is right if the parts add up to the number.')),
        st("This is called flexible partitioning. It is very useful when you subtract, because sometimes you need more ones.", V.rule('Flexible partitioning: move a ten into the ones.'))]),

      SC('Why partition?', 'It makes adding easier', [
        st("Partitioning makes adding in your head easier. Let's add forty-six and thirty-eight.", V.eq('46 + 38 = ?')),
        st("Partition both numbers. Add the tens: forty plus thirty is seventy. Add the ones: six plus eight is fourteen.", V.eq('40 + 30 = 70', 'b') + V.eq('6 + 8 = 14', 'g')),
        st("Then put the parts back together. Seventy plus fourteen is eighty-four.", V.eq('70 + 14 = 84', 'r'))]),

      SC('Your turn', 'Pause, think, then listen', [
        st("Your turn! Partition four thousand, seven hundred and nine. Pause and think about the zero.", V.big('4,709')),
        st("Four thousand, plus seven hundred, plus nine. There are no tens.", V.eq('4,709 = 4,000 + 700 + 9', 'g')),
        st("One more. What is the missing part? Six thousand, plus something, plus fifty, plus two, equals six thousand, three hundred and fifty-two.", V.eq('6,000 + ? + 50 + 2 = 6,352')),
        st("The 3 is in the hundreds column, so the missing part is three hundred.", V.eq('? = 300', 'g'))]),

      SC('Let’s recap', 'How do you partition a number?', [
        st("Well done! Partitioning means splitting a number into parts that add up to the number. The usual way is by place value, like seven thousand, plus two hundred, plus eighty, plus four. Leave out parts for zeros. You can also partition flexibly, like thirty plus sixteen. And partitioning helps you add in your head.",
          V.list(['Partition = split into parts', 'By place value: 365 = 300 + 60 + 5', 'A zero means that part is missing', 'Flexible: 46 = 30 + 16', 'It helps with adding in your head']))])
    ]
  };

  /* ---------- How do you round numbers? ---------- */
  var rounding = {
    title: 'How do you round numbers?', goal: 'how to round to the nearest 10, 100 and 1,000.',
    scenes: [
      SC('How do you round numbers?', 'Why we round', [
        st("Rounding means changing a number to a nearby number that is easier to use. Rounded numbers usually end in zeros.", V.rule('Rounding: change a number to a nearby, simpler number.')),
        st("A newspaper says that about four thousand people watched a football match. The real number was four thousand, three hundred and seventy-two. The newspaper rounded it.", V.eq('4,372 ≈ 4,000', 'b') + V.note('≈ means approximately equal to')),
        st("We round when we don't need the exact number: to estimate, to check an answer, or to make a number easier to remember.")]),

      SC('Rounding to the nearest 10', 'Round 47', [
        st("Let's round forty-seven to the nearest ten. Forty-seven is between two tens: forty and fifty.", NL(40, 50, { lab: 10, marks: [[47, 0]] })),
        st("Which ten is it closer to? Forty-seven is three steps from fifty, but seven steps from forty.", NL(40, 50, { lab: 5, jumps: [[47, 50, '3']], marks: [[47, 0]] })),
        st("It is closer to fifty, so forty-seven rounded to the nearest ten is fifty.", V.eq('47 → 50', 'g'))]),

      SC('The halfway rule', 'Look at the digit next door', [
        st("What if a number is exactly halfway, like forty-five? The rule is: if it is halfway or more, we round up.", NL(40, 50, { lab: 5, marks: [[45, 0]] }) + V.eq('45 → 50', 'g')),
        st("Here is a quick way. To round to the nearest ten, look at the ones digit. If it is 5, 6, 7, 8 or 9, round up. If it is 0, 1, 2, 3 or 4, round down.",
          V.row(LK.tag('5, 6, 7, 8, 9 → round up', 'g') + LK.tag('0, 1, 2, 3, 4 → round down', 'r'))),
        st("So eighty-three rounds down to eighty, because the ones digit is three.", V.eq('83 → 80', 'r'))]),

      SC('More rounding to the nearest 10', 'Bigger numbers', [
        st("For bigger numbers, we still look at the ones digit. Two thousand, three hundred and sixty-four. The ones digit is four, so we round down.", V.eq('2,364 → 2,360', 'r')),
        st("One hundred and ninety-six. The ones digit is six, so we round up. Ninety goes up to one hundred, so the answer is two hundred.", NL(190, 200, { lab: 10, marks: [[196, 0]] }) + V.eq('196 → 200', 'g'))]),

      SC('Rounding to the nearest 100', 'Round 4,372', [
        st("Now let's round four thousand, three hundred and seventy-two to the nearest hundred. It is between four thousand three hundred, and four thousand four hundred.", NL(4300, 4400, { lab: 100, tick: 10, marks: [[4372, 0]] })),
        st("To round to the nearest hundred, look at the tens digit. The tens digit is seven, which is five or more, so we round up.", V.big('4,3' + hot('7') + '2')),
        st("So four thousand, three hundred and seventy-two rounds up to four thousand, four hundred.", V.eq('4,372 → 4,400', 'g'))]),

      SC('Rounding to the nearest 1,000', 'Round 4,372 again', [
        st("To round to the nearest thousand, look at the hundreds digit. In four thousand, three hundred and seventy-two, the hundreds digit is three.", V.big('4,' + hot('3') + '72')),
        st("Three is less than five, so we round down to four thousand.", NL(4000, 5000, { lab: 1000, tick: 100, marks: [[4372, 0]] }) + V.eq('4,372 → 4,000', 'r'))]),

      SC('One number, three answers', 'It depends what you round to', [
        st("So the same number can round in different ways. It depends whether you round to the nearest ten, hundred or thousand.",
          V.tbl([['nearest 10', '4,370'], ['nearest 100', '4,400'], ['nearest 1,000', '4,000']], ['Round 4,372 to the…', 'Answer'])),
        st("Always look at the digit just to the right of the place you are rounding to. That digit decides up or down.", V.rule('Look at the digit to the right. 5 or more: round up.'))]),

      SC('Your turn', 'Pause, think, then listen', [
        st("Your turn! Round six thousand, eight hundred and fifty to the nearest hundred. Pause and think.", V.big('6,850')),
        st("Look at the tens digit. It is five, so we round up. Six thousand, eight hundred, goes up to six thousand, nine hundred.", V.eq('6,850 → 6,900', 'g')),
        st("Now round it to the nearest thousand.", V.big('6,850')),
        st("Look at the hundreds digit. It is eight, so we round up to seven thousand.", V.eq('6,850 → 7,000', 'g'))]),

      SC('Let’s recap', 'How do you round numbers?', [
        st("Fantastic! Rounding changes a number to a nearby, simpler number. To round, find the two numbers it sits between, then look at the digit to the right of the place you are rounding to. Five or more, round up. Four or less, round down.",
          V.list(['Rounding makes numbers simpler', 'Nearest 10: look at the ones digit', 'Nearest 100: look at the tens digit', 'Nearest 1,000: look at the hundreds digit', '5 or more rounds up, 4 or less rounds down']))])
    ]
  };

  BT.lessons(501, 'Watch lesson', [placeValue, negative, partition, rounding]);
})();
