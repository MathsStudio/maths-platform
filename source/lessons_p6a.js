/* lessons_p6a.js: P6 Watch lessons, topics 1 to 4. New lessons for the questions P6 adds,
   and the older P6 lessons rebuilt in full. The P5 lessons for shared questions are reused. */
(function () {
  'use strict';
  var BT = window.BT; if (!BT || !BT.L || !BT.lk) return;
  var L = BT.L, V = BT.sv, LK = BT.lk, SC = L.SC, st = L.st, SW = L.SW, F = L.F, BIG = L.BIG, ep = L.ep, rec = L.rec, turn = L.turn;
  var P = 'var(--accent)', G = 'var(--good)';
  var TH = ['', 'Th', 'H', 'T', 'O'], HTO = ['', 'H', 'T', 'O'], LN = { line: true };

  /* ===================== Topic 1: place value ===================== */
  ep('How do you round decimal numbers?', 'how to round decimals to the nearest whole number and to one or two decimal places.', [
    SC('Rounding decimals', 'Making numbers simpler', [
      st("Rounding makes a number simpler while keeping it close to its real size. Decimals can be rounded too: to the nearest whole number, to one decimal place, or to two.", V.cards(['3.68 → 4', '3.68 → 3.7'], ['b', 'g']))]),
    SC('The rounding rule', 'Look at the next digit', [
      st("Find the digit in the place you are rounding to. Then look at the very next digit to its right. If it is five or more, round up. If it is four or less, keep the digit the same.", V.rule('Next digit 5 or more: round up. 4 or less: stay the same.'))]),
    SC('To the nearest whole number', '7.6 kg', [
      st("A parcel weighs seven point six kilograms. Is that nearer seven or eight? The digit after the point is six. Six is five or more, so round up to eight.", V.nl(7, 8, { tick: 0.1, marks: [[7.6, 22]] }) + V.eq('7.6 → 8 kg', 'g')),
      st("Four point three rounds down to four, because three is four or less.", V.eq('4.3 → 4', 'g'))]),
    SC('To one decimal place', '12.47', [
      st("Round twelve point four seven to one decimal place. Keep the tenths digit, four, and look at the next digit, seven.", V.eq('12.4|7', 'b')),
      st("Seven is five or more, so the four goes up to five. The answer is twelve point five.", V.eq('12.47 → 12.5', 'g'))]),
    SC('To two decimal places', '3.14159', [
      st("Round three point one four one five nine to two decimal places. Keep three point one four, then look at the next digit, one.", V.eq('3.14|159', 'b')),
      st("One is four or less, so we keep three point one four.", V.eq('3.14159 → 3.14', 'g'))]),
    SC('Watch out for nines', 'Rounding up past 9', [
      st("Round five point nine six to one decimal place. The tenths digit is nine, and the next digit is six, so the nine must go up. Nine tenths and one more tenth is a whole one, so we get six point zero.", V.eq('5.96 → 6.0', 'g')),
      st("Keep the zero to show you rounded to one decimal place.", V.note('6.0 means rounded to 1 decimal place'))]),
    SC('In real life', 'Money and measures', [
      st("Prices are rounded to two decimal places, the nearest penny. If three people share ten pounds, each gets three point three three three pounds, which we round to three pounds thirty-three.", V.eq('£10 ÷ 3 = £3.333… → £3.33', 'g'))]),
    turn("Your turn! Round eight point four five to one decimal place. Pause and try it.", V.eq('8.45 → ?'),
      "Keep the four tenths. The next digit is five, so round up. Eight point five.", V.eq('8.45 → 8.5', 'g')),
    rec('How do you round decimal numbers?', "Find the digit in the place you are rounding to, then look at the next digit. Five or more rounds up, four or less stays the same. Keep any zero that shows how accurate the answer is.",
      ['Find the place you are rounding to', 'Look at the next digit', '5 or more: round up', '4 or less: stay the same'])
  ]);

  ep('How do you use estimation to check your answers?', 'how to estimate an answer by rounding, and use it to check a calculation.', [
    SC('What is an estimate?', 'A sensible guess', [
      st("An estimate is a sensible, rough answer. We round the numbers so they are easy to work with, then calculate in our heads. It tells us roughly how big the real answer should be.", V.rule('Round the numbers, then calculate.'))]),
    SC('Estimating a sum', '389 + 512', [
      st("Estimate three hundred and eighty-nine plus five hundred and twelve. Round each to the nearest hundred: four hundred and five hundred.", V.eq('389 + 512 ≈ 400 + 500', 'b')),
      st("Four hundred plus five hundred is nine hundred. The exact answer, nine hundred and one, is very close, so it makes sense.", V.eq('≈ 900 · exact 901 ✓', 'g'))]),
    SC('Estimating a product', '48 × 21', [
      st("Estimate forty-eight times twenty-one. Round to fifty times twenty, which is one thousand.", V.eq('48 × 21 ≈ 50 × 20 = 1,000', 'b')),
      st("The exact answer is one thousand and eight, so an answer like ten thousand or one hundred would be clearly wrong.", V.eq('exact 1,008 ✓', 'g'))]),
    SC('Spot a mistake', 'Is it sensible?', [
      st("Sam works out six hundred and twelve take away one hundred and ninety-eight and gets five hundred and fourteen. Estimate: six hundred take away two hundred is four hundred.", V.eq('612 − 198 ≈ 600 − 200 = 400', 'b')),
      st("Five hundred and fourteen is far from four hundred, so Sam should check. The correct answer is four hundred and fourteen.", V.eq('612 − 198 = 414', 'g') + V.note('A big gap from the estimate means: check again'))]),
    SC('Estimating with decimals', 'At the shop', [
      st("Three items cost two pounds ninety-nine, four pounds five and one pound ninety-five. Round to three pounds, four pounds and two pounds: about nine pounds.", V.eq('£2.99 + £4.05 + £1.95 ≈ £3 + £4 + £2 = £9', 'g'))]),
    turn("Your turn! Estimate thirty-nine times eleven. Pause and try it.", V.eq('39 × 11 ≈ ?'),
      "Round to forty times ten, which is four hundred. The exact answer is four hundred and twenty-nine.", V.eq('40 × 10 = 400', 'g')),
    rec('How do you use estimation to check your answers?', "Round each number to make it easy, then calculate. Compare the estimate with your exact answer. If they are far apart, check your working.",
      ['Round to easy numbers', 'Work out the estimate in your head', 'Compare with your exact answer', 'Far apart? Check again'])
  ]);

  ep('Numbers up to millions', 'how to read, write and compare numbers up to ten million.', [
    SC('Bigger numbers', 'Past one hundred thousand', [
      st("After nine hundred and ninety-nine thousand, nine hundred and ninety-nine comes one million. A million is one thousand thousands.", V.eq('999,999 + 1 = 1,000,000', 'g')),
      st("Big numbers are grouped in threes with commas, to make them easier to read.", V.note('1,000,000 = one million'))]),
    SC('The place value columns', 'Millions, thousands and ones', [
      st("Each column is ten times bigger than the one on its right. Here is four million, three hundred and twenty-six thousand, five hundred and eighteen.", V.tbl([['4', '3', '2', '6', '5', '1', '8']], ['M', 'HTh', 'TTh', 'Th', 'H', 'T', 'O'])),
      st("The four is worth four million. The three is worth three hundred thousand.", V.eq('4,326,518', 'b'))]),
    SC('Reading big numbers', 'One group at a time', [
      st("Read the millions group, then say million. Read the thousands group, then say thousand. Then read the last three digits. Two million, four hundred and five thousand and sixty.", V.eq('2,405,060', 'b') + V.eq('2 million · 405 thousand · 60', 'g'))]),
    SC('Writing big numbers', 'Use zeros as place holders', [
      st("Write three million, seventy thousand and nine in digits. Three in the millions, then zero hundred thousands, seven ten thousands, and zeros until the ones.", V.eq('3,070,009', 'g') + V.rule('Zeros hold empty places.'))]),
    SC('Comparing big numbers', 'Which is bigger?', [
      st("To compare, line up the digits and compare from the left. Two million, three hundred and forty thousand against two million, four hundred and three thousand. The millions are the same, so look at the hundred thousands: three is less than four.", V.eq('2,340,000 < 2,403,000', 'g'))]),
    SC('In real life', 'Population', [
      st("Scotland has about five million, four hundred thousand people. Glasgow has about six hundred and thirty thousand. Big numbers help us compare places.", V.eq('≈ 5,400,000 people', 'b'))]),
    turn("Your turn! What is the value of the seven in one million, seven hundred and twenty thousand? Pause and think.", V.eq('1,720,000'),
      "The seven is in the hundred thousands column, so it is worth seven hundred thousand.", V.eq('700,000', 'g')),
    rec('Numbers up to millions', "A million is a thousand thousands. Group digits in threes, read each group, and say million or thousand. Compare digits from the left. Zeros hold empty places.",
      ['1 million = 1,000,000', 'Group digits in threes', 'Compare from the left', 'Zeros hold places'])
  ]);

  ep('Sensible estimates and rounding with units', 'how to choose a sensible size for a measurement and round measurements.', [
    SC('A sensible size', 'Does it make sense?', [
      st("When we estimate a measurement, we compare it with something we know. A door is about two metres tall. A bag of sugar is one kilogram. A can of juice is about three hundred and thirty millilitres.", V.cards(['Door ≈ 2 m', 'Sugar = 1 kg', 'Can ≈ 330 ml'], ['b', 'p', 'g']))]),
    SC('Choose the best unit', 'Small or large?', [
      st("Use millimetres or centimetres for small lengths, metres for rooms and gardens, and kilometres for journeys. A pencil is about fifteen centimetres, not fifteen metres.", V.tbl([['pencil', '15 cm'], ['classroom', '8 m'], ['Glasgow to Edinburgh', '75 km']], ['Object', 'Sensible size']))]),
    SC('Rounding measurements', '4.68 m', [
      st("A plank is four point six eight metres long. To the nearest metre, look at the tenths: six, so round up. About five metres.", V.eq('4.68 m → 5 m', 'g')),
      st("To the nearest tenth of a metre, look at the hundredths: eight, so round up to four point seven metres.", V.eq('4.68 m → 4.7 m', 'g'))]),
    SC('Rounding with different units', '2,350 g', [
      st("Two thousand three hundred and fifty grams to the nearest kilogram. That is two point three five kilograms, so round to two kilograms.", V.eq('2,350 g = 2.35 kg → 2 kg', 'g'))]),
    SC('Remainders in real life', 'Round up or down?', [
      st("Thirty children go on a trip and each minibus takes eight. Thirty divided by eight is three remainder six. Nobody can be left behind, so we round up to four minibuses.", V.eq('30 ÷ 8 = 3 r 6 → 4 minibuses', 'g')),
      st("Twenty eggs go in boxes of six. Only full boxes can be sold, so we round down: three boxes.", V.eq('20 ÷ 6 = 3 r 2 → 3 full boxes', 'g'))]),
    turn("Your turn! Round six point two five kilograms to the nearest kilogram. Pause and try it.", V.eq('6.25 kg → ?'),
      "The tenths digit is two, which is four or less, so it rounds down to six kilograms.", V.eq('6 kg', 'g')),
    rec('Sensible estimates and rounding with units', "Compare with things you know to judge a sensible size. Pick a unit that suits the size. Round measurements using the next digit, and decide whether real life needs rounding up or down.",
      ['Compare with known things', 'Choose a sensible unit', 'Round using the next digit', 'Real life: round up or down?'])
  ]);

  ep('Number lines, words and digit values', 'how to read number lines, write numbers in words and find the value of a digit.', [
    SC('Reading a number line', 'Work out each step', [
      st("On a number line, first work out what each small step is worth. This line goes from zero to one hundred in ten steps, so each step is ten.", V.nl(0, 100, { tick: 10, lab: 50, marks: [[70, 22]] })),
      st("The marked point is seven steps along: seventy.", V.eq('7 × 10 = 70', 'g'))]),
    SC('Lines with decimals', 'Steps of 0.1', [
      st("This line goes from two to three in ten steps. Each step is one tenth, zero point one. The point is at two point four.", V.nl(2, 3, { tick: 0.1, lab: 1, marks: [[2.4, 22]] }) + V.eq('2.4', 'g'))]),
    SC('Numbers in words', 'Say it, then write it', [
      st("Forty-five thousand, three hundred and eight is written four five three zero eight. The zero shows there are no tens.", V.eq('forty-five thousand, three hundred and eight = 45,308', 'g')),
      st("Going the other way, sixty thousand and forty is six zero zero four zero.", V.eq('60,040 = sixty thousand and forty', 'g'))]),
    SC('Value of a digit', 'Which column?', [
      st("In three hundred and seventy-two thousand, six hundred and fifty, the seven is in the ten thousands column, so its value is seventy thousand.", V.tbl([['3', '7', '2', '6', '5', '0']], ['HTh', 'TTh', 'Th', 'H', 'T', 'O']) + V.eq('7 → 70,000', 'g'))]),
    SC('Digits after the point', 'Tenths and hundredths', [
      st("In four point three eight, the three is worth three tenths, and the eight is worth eight hundredths.", V.eq('4.38 = 4 + 0.3 + 0.08', 'g'))]),
    turn("Your turn! What is the value of the five in two hundred and fifty-one thousand? Pause and think.", V.eq('251,000'),
      "The five is in the ten thousands column. It is worth fifty thousand.", V.eq('50,000', 'g')),
    rec('Number lines, words and digit values', "Work out what each step on a number line is worth. Write numbers in words group by group, with zeros as place holders. A digit's value depends on its column.",
      ['Find the size of one step', 'Zeros hold empty places', 'Value = digit × its column', 'After the point: tenths, hundredths'])
  ]);

  /* ===================== Topic 2: four operations ===================== */
  ep('How do you multiply in your head?', 'quick mental methods for multiplying: partitioning, doubling and rounding.', [
    SC('Mental multiplication', 'No paper needed', [
      st("Many multiplications can be done in your head by breaking them into easier steps. Here are four tricks: use known facts, partition, double, and round then adjust.", V.list(['Known facts', 'Partition', 'Double and double again', 'Round and adjust']))]),
    SC('Use what you know', 'Times tables and tens', [
      st("If you know six times seven is forty-two, then sixty times seven is four hundred and twenty, because sixty is ten times six.", V.eq('6 × 7 = 42') + V.eq('60 × 7 = 420', 'g'))]),
    SC('Partitioning', '34 × 6', [
      st("Split thirty-four into thirty and four. Thirty times six is one hundred and eighty. Four times six is twenty-four.", V.eq('30 × 6 = 180') + V.eq('4 × 6 = 24')),
      st("Add the parts: one hundred and eighty plus twenty-four is two hundred and four.", V.eq('34 × 6 = 204', 'g'))]),
    SC('Doubling', '× 4 and × 8', [
      st("To multiply by four, double twice. Twenty-three times four: double is forty-six, double again is ninety-two.", V.eq('23 → 46 → 92', 'g')),
      st("To multiply by eight, double three times. Fifteen times eight: thirty, sixty, one hundred and twenty.", V.eq('15 → 30 → 60 → 120', 'g'))]),
    SC('Round and adjust', '7 × 49', [
      st("Forty-nine is nearly fifty. Seven times fifty is three hundred and fifty. But we used one seven too many, so take seven away.", V.eq('7 × 50 = 350') + V.eq('350 − 7 = 343', 'g'))]),
    SC('Multiply by 5', 'Times 10, then halve', [
      st("To multiply by five, multiply by ten, then halve. Thirty-six times five: three hundred and sixty, halved is one hundred and eighty.", V.eq('36 × 10 = 360 → ÷ 2 = 180', 'g'))]),
    turn("Your turn! Work out twenty-five times eight in your head. Pause and try it.", V.eq('25 × 8 = ?'),
      "Double three times: fifty, one hundred, two hundred. The answer is two hundred.", V.eq('25 → 50 → 100 → 200', 'g')),
    rec('How do you multiply in your head?', "Use facts you know, partition into tens and ones, double for times four and eight, multiply by ten and halve for times five, or round and adjust.",
      ['Use known facts × 10', 'Partition: tens and ones', '× 4 double twice, × 8 three times', '× 5: × 10 then halve', 'Round and adjust'])
  ]);

  ep('How do you use written methods for short division?', 'how to divide a large number by a single digit with the bus stop method.', [
    SC('Short division', 'The bus stop method', [
      st("Short division is a written way to divide a big number by a small one. We write it like a bus stop: the number we divide, the dividend, goes inside, and the divisor, the number we divide by, waits outside. The answer on top is the quotient.", V.eq('4 ) 852', 'b') + V.list(['852 is the dividend (inside)', '4 is the divisor (outside)', 'The answer on top is the quotient']))]),
    SC('Step 1: the hundreds', '852 ÷ 4', [
      st("Start on the left. How many fours in eight? Two. Write two on top, above the eight.", V.eq('8 ÷ 4 = 2', 'g'))]),
    SC('Step 2: the tens', 'Five tens', [
      st("How many fours in five? One, with one left over. Write one on top, and carry the remainder, one, to the next digit. The two becomes twelve.", V.eq('5 ÷ 4 = 1 r 1 → carry 1', 'b'))]),
    SC('Step 3: the ones', 'Twelve ones', [
      st("How many fours in twelve? Three. Write three on top. So eight hundred and fifty-two divided by four is two hundred and thirteen.", V.eq('12 ÷ 4 = 3', 'b') + V.eq('852 ÷ 4 = 213', 'g'))]),
    SC('With a remainder', '527 ÷ 6', [
      st("Six into five won't go, so carry five to the next digit: fifty-two. Six into fifty-two is eight, remainder four. Carry four: forty-seven.", V.eq('52 ÷ 6 = 8 r 4') + V.eq('47 ÷ 6 = 7 r 5')),
      st("The answer is eighty-seven, remainder five.", V.eq('527 ÷ 6 = 87 r 5', 'g'))]),
    SC('Check by multiplying', 'Inverse operations', [
      st("Check: eighty-seven times six is five hundred and twenty-two. Add the remainder, five, to get five hundred and twenty-seven. Correct!", V.eq('87 × 6 + 5 = 527 ✓', 'g'))]),
    turn("Your turn! Work out six hundred and ninety-three divided by three. Pause and try it.", V.eq('693 ÷ 3 = ?'),
      "Six divided by three is two, nine divided by three is three, three divided by three is one. Two hundred and thirty-one.", V.eq('693 ÷ 3 = 231', 'g')),
    rec('How do you use written methods for short division?', "Divide one digit at a time from the left. Write each answer on top and carry any remainder to the next digit. Check by multiplying back and adding the remainder.",
      ['Work from the left', 'Write each answer on top', 'Carry the remainder', 'Check: multiply back'])
  ]);

  ep('Long multiplication', 'how to multiply a number by a two-digit number using the column method.', [
    SC('Long multiplication', 'Two rows, then add', [
      st("Long multiplication helps when both numbers are big, like forty-seven times twenty-three. We multiply by the ones, then by the tens, then add the two rows.", V.eq('47 × 23', 'b'))]),
    SC('Multiply by the ones', '47 × 3', [
      st("First, forty-seven times three. Seven times three is twenty-one: write one, carry two. Four times three is twelve, plus two is fourteen. The first row is one hundred and forty-one.", V.eq('47 × 3 = 141', 'g'))]),
    SC('Multiply by the tens', '47 × 20', [
      st("Next, forty-seven times twenty. Put a zero in the ones column first, because we are multiplying by tens. Then forty-seven times two is ninety-four, so the row is nine hundred and forty.", V.eq('47 × 20 = 940', 'g') + V.rule('Put a zero in the ones when you multiply by the tens.'))]),
    SC('Add the rows', '141 + 940', [
      st("Finally, add the two rows: one hundred and forty-one plus nine hundred and forty is one thousand and eighty-one.", LK.col(TH, [['', '', 1, 4, 1], ['+', '', 9, 4, 0], LN, ['', 'h:1', 'h:0', 'h:8', 'h:1']]) + V.eq('47 × 23 = 1,081', 'g'))]),
    SC('Check with an estimate', 'Is it sensible?', [
      st("Estimate: fifty times twenty is one thousand. One thousand and eighty-one is close, so the answer is sensible.", V.eq('50 × 20 = 1,000 ✓', 'g'))]),
    SC('Another example', '126 × 14', [
      st("One hundred and twenty-six times four is five hundred and four. One hundred and twenty-six times ten is one thousand, two hundred and sixty. Add: one thousand, seven hundred and sixty-four.", V.eq('126 × 4 = 504') + V.eq('126 × 10 = 1,260') + V.eq('504 + 1,260 = 1,764', 'g'))]),
    turn("Your turn! Work out thirty-two times fifteen. Pause and try it.", V.eq('32 × 15 = ?'),
      "Thirty-two times five is one hundred and sixty. Thirty-two times ten is three hundred and twenty. Add them: four hundred and eighty.", V.eq('160 + 320 = 480', 'g')),
    rec('Long multiplication', "Multiply by the ones digit, then by the tens digit with a zero in the ones column, then add the rows. Check with an estimate.",
      ['Row 1: × the ones', 'Row 2: × the tens (zero first)', 'Add the rows', 'Estimate to check'])
  ]);

  /* ===================== Topic 3: fractions ===================== */
  ep('How do you add and subtract fractions?', 'how to add and subtract fractions with the same or related denominators.', [
    SC('Same denominators', 'The pieces are the same size', [
      st("When fractions have the same denominator, the pieces are the same size. Just add the numerators and keep the denominator. Two fifths plus one fifth is three fifths.", LK.fbar(2, 5, 260, 280) + LK.fbar(1, 5, 260, 150) + V.eq('2/5 + 1/5 = 3/5', 'g')),
      st("Never add the denominators. The size of the pieces doesn't change.", V.rule('Add the tops. Keep the bottom.'))]),
    SC('Subtracting', 'Same idea', [
      st("Seven eighths take away three eighths is four eighths. Then simplify: four eighths is one half.", V.eq('7/8 − 3/8 = 4/8 = 1/2', 'g'))]),
    SC('Different denominators', 'Make them the same', [
      st("One half plus one quarter. The pieces are different sizes, so we can't add them yet. Change the half into quarters: one half is two quarters.", LK.fbar(1, 2, 260, 280) + LK.fbar(2, 4, 260, 280) + V.eq('1/2 = 2/4', 'b')),
      st("Now two quarters plus one quarter is three quarters.", V.eq('2/4 + 1/4 = 3/4', 'g'))]),
    SC('Find a common denominator', '2/3 + 1/6', [
      st("Three goes into six, so use sixths. Two thirds is four sixths. Four sixths plus one sixth is five sixths.", V.eq('2/3 = 4/6') + V.eq('4/6 + 1/6 = 5/6', 'g'))]),
    SC('Answers bigger than one', '3/4 + 1/2', [
      st("Three quarters plus two quarters is five quarters. That is more than one, so write it as a mixed number: one and one quarter.", V.eq('3/4 + 2/4 = 5/4 = 1 1/4', 'g'))]),
    SC('In real life', 'A pizza', [
      st("Sam eats three eighths of a pizza and Ben eats one quarter. One quarter is two eighths, so together they eat five eighths. Three eighths is left.", V.eq('3/8 + 2/8 = 5/8') + V.eq('1 − 5/8 = 3/8 left', 'g'))]),
    turn("Your turn! Work out five sixths take away one third. Pause and try it.", V.eq('5/6 − 1/3 = ?'),
      "One third is two sixths. Five sixths take away two sixths is three sixths, which is one half.", V.eq('5/6 − 2/6 = 3/6 = 1/2', 'g')),
    rec('How do you add and subtract fractions?', "With the same denominator, add or subtract the numerators and keep the denominator. If the denominators are different, make them the same first. Then simplify.",
      ['Same bottom: add or subtract the tops', 'Never add the bottoms', 'Different bottoms: make them the same', 'Simplify the answer'])
  ]);

  ep('What are unit and mixed fractions?', 'what unit fractions, non-unit fractions and mixed numbers are.', [
    SC('Unit fractions', 'One part', [
      st("A unit fraction has a one on top. It is one equal part of a whole: one half, one third, one quarter, one fifth.", V.cards(['1/2', '1/3', '1/4', '1/5'], ['g'])),
      st("The bigger the denominator, the smaller the piece. One tenth is smaller than one half.", LK.fbar(1, 2, 260, 280) + LK.fbar(1, 10, 260, 280))]),
    SC('Non-unit fractions', 'More than one part', [
      st("A non-unit fraction has more than one part, like three quarters. It is three of the one-quarter pieces.", LK.fbar(3, 4, 260, 280) + V.eq('3/4 = 1/4 + 1/4 + 1/4', 'g'))]),
    SC('Mixed numbers', 'Wholes and a part', [
      st("A mixed number has a whole number and a fraction. Two and one third means two whole ones and one third more.", LK.fbar(3, 3, 120, 150) + LK.fbar(3, 3, 120, 150) + LK.fbar(1, 3, 120, 150) + V.eq('2 1/3', 'g'))]),
    SC('Changing forms', 'Mixed and improper', [
      st("Two and one third is the same as seven thirds. Two wholes make six thirds, plus one more third.", V.eq('2 1/3 = 7/3', 'g')),
      st("To change back, divide: seven divided by three is two remainder one.", V.eq('7 ÷ 3 = 2 r 1 → 2 1/3', 'g'))]),
    SC('Mixed numbers on a line', 'Between whole numbers', [
      st("One and a half sits halfway between one and two on a number line.", V.nl(0, 3, { tick: 0.5, marks: [[1.5, 22]] }))]),
    turn("Your turn! Is two fifths a unit fraction? Pause and think.", V.eq('2/5'),
      "No. It has two on top, so it is a non-unit fraction: two of the one-fifth pieces.", V.eq('2/5 = 1/5 + 1/5', 'g')),
    rec('What are unit and mixed fractions?', "A unit fraction has one on top. A non-unit fraction has more than one part. A mixed number has a whole number and a fraction, and can be written as an improper fraction.",
      ['Unit: 1 on top', 'Bigger bottom → smaller piece', 'Mixed: wholes and a fraction', 'Mixed ↔ improper'])
  ]);

  ep('How do you simplify fractions?', 'how to write a fraction in its simplest form.', [
    SC('Simplest form', 'Same amount, smaller numbers', [
      st("Six eighths and three quarters are the same amount. Three quarters uses smaller numbers, so it is the simplest form.", LK.fbar(6, 8, 280, 280) + LK.fbar(3, 4, 280, 280) + V.eq('6/8 = 3/4', 'g'))]),
    SC('Divide top and bottom', 'By the same number', [
      st("To simplify, divide the numerator and the denominator by the same number. Six and eight can both be divided by two.", V.eq('6 ÷ 2 = 3 · 8 ÷ 2 = 4', 'g') + V.rule('Divide the top and the bottom by the same number.'))]),
    SC('Keep going', '12/18', [
      st("Twelve eighteenths. Divide both by two: six ninths. Both can still be divided by three: two thirds.", V.eq('12/18 → 6/9 → 2/3', 'g'))]),
    SC('Use the highest common factor', 'One step', [
      st("The quickest way is to divide by the highest common factor. The biggest number that divides twelve and eighteen is six. Twelve divided by six is two; eighteen divided by six is three.", V.eq('HCF of 12 and 18 = 6') + V.eq('12/18 = 2/3', 'g'))]),
    SC('When is it finished?', 'No common factor left', [
      st("A fraction is in its simplest form when the only number that divides both top and bottom is one. Five sevenths can't be simplified.", V.eq('5/7 is already simplest', 'g'))]),
    SC('In real life', 'Test scores', [
      st("Maya scored fifteen out of twenty. Divide both by five: three quarters of the questions were right.", V.eq('15/20 = 3/4', 'g'))]),
    turn("Your turn! Simplify twenty-four thirty-sixths. Pause and try it.", V.eq('24/36 = ?'),
      "The highest common factor is twelve. Twenty-four divided by twelve is two; thirty-six divided by twelve is three. Two thirds.", V.eq('24/36 = 2/3', 'g')),
    rec('How do you simplify fractions?', "Divide the numerator and denominator by the same number. Keep going until only one divides both, or use the highest common factor in one step.",
      ['Divide top and bottom by the same number', 'Repeat until you can’t', 'Or divide by the HCF', 'The amount stays the same'])
  ]);

  ep('Fractions of amounts and multiplying', 'how to find a fraction of an amount and multiply a fraction by a whole number.', [
    SC('A fraction of an amount', 'Divide, then multiply', [
      st("To find one quarter of twenty, divide by four. Twenty divided by four is five.", V.eq('1/4 of 20 = 20 ÷ 4 = 5', 'g')),
      st("To find three quarters, find one quarter, then multiply by three: fifteen.", V.eq('3/4 of 20 = 5 × 3 = 15', 'g') + V.rule('Divide by the bottom, multiply by the top.'))]),
    SC('A bar model', '2/5 of 35', [
      st("Draw a bar for thirty-five and split it into five equal parts. Each part is seven. Two parts are fourteen.", LK.fbar(2, 5, 300, 150) + V.eq('35 ÷ 5 = 7 → 2 × 7 = 14', 'g'))]),
    SC('With money', '3/8 of £48', [
      st("Forty-eight divided by eight is six pounds. Three lots of six pounds is eighteen pounds.", V.eq('3/8 of £48 = £18', 'g'))]),
    SC('Multiplying by a whole number', '2/5 × 3', [
      st("Two fifths times three means three lots of two fifths. Multiply the numerator by three and keep the denominator: six fifths.", V.eq('2/5 × 3 = 6/5 = 1 1/5', 'g'))]),
    SC('In real life', 'A recipe', [
      st("A recipe needs three quarters of a cup of milk. To make four batches, multiply by four: twelve quarters, which is three cups.", V.eq('3/4 × 4 = 12/4 = 3 cups', 'g'))]),
    turn("Your turn! Find five sixths of forty-two. Pause and try it.", V.eq('5/6 of 42 = ?'),
      "Forty-two divided by six is seven. Seven times five is thirty-five.", V.eq('5/6 of 42 = 35', 'g')),
    rec('Fractions of amounts and multiplying', "To find a fraction of an amount, divide by the denominator and multiply by the numerator. To multiply a fraction by a whole number, multiply the numerator.",
      ['Divide by the bottom', 'Multiply by the top', 'Fraction × whole: multiply the top', 'Change to a mixed number if needed'])
  ]);

  /* ===================== Topic 4: decimals and percentages ===================== */
  ep('How do you compare fractions, decimals and percentages?', 'how to change between fractions, decimals and percentages so you can compare them.', [
    SC('Three ways to show an amount', 'They can be equal', [
      st("A half can be written as a fraction, one half, as a decimal, zero point five, or as a percentage, fifty per cent. They are the same amount.", LK.hsq(50) + V.eq('1/2 = 0.5 = 50%', 'g'))]),
    SC('Useful facts', 'Learn these', [
      st("These are worth knowing by heart.", V.tbl([['1/2', '0.5', '50%'], ['1/4', '0.25', '25%'], ['3/4', '0.75', '75%'], ['1/5', '0.2', '20%'], ['1/10', '0.1', '10%']], ['Fraction', 'Decimal', 'Percentage']))]),
    SC('Fraction to percentage', 'Make the bottom 100', [
      st("To change three twentieths into a percentage, make the bottom one hundred. Twenty times five is one hundred, so multiply the top by five too: fifteen hundredths, fifteen per cent.", V.eq('3/20 = 15/100 = 15%', 'g'))]),
    SC('Decimal to percentage', 'Times by 100', [
      st("To change a decimal into a percentage, multiply by one hundred. Zero point three seven is thirty-seven per cent. Zero point four is forty per cent.", V.eq('0.37 = 37% · 0.4 = 40%', 'g'))]),
    SC('Comparing', 'Change them all to the same form', [
      st("Which is biggest: three fifths, zero point five five, or fifty-eight per cent? Change them all to percentages: sixty per cent, fifty-five per cent, fifty-eight per cent.", V.eq('3/5 = 60% · 0.55 = 55% · 58%', 'b')),
      st("So three fifths is the biggest.", V.eq('3/5 is biggest', 'g') + V.rule('Change everything to the same form, then compare.'))]),
    SC('Ordering', 'Smallest to biggest', [
      st("Order zero point three, one quarter and thirty-five per cent. As percentages: thirty, twenty-five and thirty-five. So the order is one quarter, zero point three, thirty-five per cent.", V.eq('1/4 < 0.3 < 35%', 'g'))]),
    turn("Your turn! Which is bigger, seven tenths or sixty-five per cent? Pause and think.", V.eq('7/10 or 65%?'),
      "Seven tenths is seventy per cent, which is bigger than sixty-five per cent.", V.eq('7/10 = 70% > 65%', 'g')),
    rec('How do you compare fractions, decimals and percentages?', "Fractions, decimals and percentages can show the same amount. To compare them, change them all to the same form, often percentages, then compare.",
      ['½ = 0.5 = 50%', 'Fraction → make the bottom 100', 'Decimal → × 100 for a percentage', 'Same form, then compare'])
  ]);

  ep('What is a percentage?', 'what a percentage means and how to find simple percentages of amounts.', [
    SC('Per cent', 'Out of one hundred', [
      st("Per cent means out of one hundred. Thirty-seven per cent means thirty-seven out of every hundred. It is written with this sign.", LK.hsq(37) + V.eq('37% = 37 out of 100', 'g'))]),
    SC('The whole is 100%', 'All of it', [
      st("One hundred per cent is the whole amount. If sixty per cent of a class are girls, then forty per cent are boys, because the two parts make one hundred per cent.", V.eq('60% + 40% = 100%', 'g'))]),
    SC('Percentages as fractions', 'Simplify', [
      st("Forty per cent is forty hundredths, which simplifies to two fifths.", V.eq('40% = 40/100 = 2/5', 'g'))]),
    SC('Finding 10% and 1%', 'Building blocks', [
      st("Ten per cent of an amount is a tenth: divide by ten. One per cent is a hundredth: divide by one hundred. Ten per cent of two hundred and forty is twenty-four. One per cent is two point four.", V.eq('10% of 240 = 24') + V.eq('1% of 240 = 2.4', 'g'))]),
    SC('Building other percentages', '35% of 240', [
      st("Thirty-five per cent is thirty per cent plus five per cent. Thirty per cent is three lots of twenty-four: seventy-two. Five per cent is half of ten per cent: twelve. Add them: eighty-four.", V.eq('30% = 72 · 5% = 12', 'b') + V.eq('35% of 240 = 84', 'g'))]),
    SC('In real life', 'A discount', [
      st("A scooter costs forty pounds with twenty per cent off. Ten per cent is four pounds, so twenty per cent is eight pounds. The new price is thirty-two pounds.", V.eq('£40 − £8 = £32', 'g'))]),
    turn("Your turn! What is fifteen per cent of sixty pounds? Pause and try it.", V.eq('15% of £60 = ?'),
      "Ten per cent is six pounds, five per cent is three pounds. Together, nine pounds.", V.eq('£6 + £3 = £9', 'g')),
    rec('What is a percentage?', "A percentage is a number out of one hundred, and one hundred per cent is the whole. Find ten per cent by dividing by ten, and build other percentages from ten per cent, five per cent and one per cent.",
      ['Per cent = out of 100', '100% = the whole', '10% → ÷ 10, 1% → ÷ 100', 'Build others from these'])
  ]);

  /* ===================== put topics 1 to 4 together ===================== */
  L.use(1, ['What is place value?', 'What are negative numbers?', 'How do you partition a number?', 'How do you round numbers?', 'How do you round decimal numbers?', 'How do you use estimation to check your answers?', 'Numbers up to millions', 'Sensible estimates and rounding with units', 'Number lines, words and digit values']);
  L.use(2, ['What is column addition?', 'How do you use column subtraction?', 'How do you add and subtract in your head?', 'How do you multiply in your head?', 'How do you multiply and divide by 0, 1, 10 and 100?', 'How do you work out division with remainders?', 'How do you use written methods for short division?', 'How can counting on help me add two-digit numbers?', 'How can partitioning help me add two-digit numbers?', 'Long multiplication', 'Order of operations and word problems', 'Use a fact you know']);
  L.use(3, ['What is a fraction?', 'How do you write fractions?', 'How do you compare different fractions?', 'How do you add and subtract fractions?', 'What are unit and mixed fractions?', 'How do you simplify fractions?', 'Fractions of amounts and multiplying', 'Counting parts and fractions as decimals']);
  L.use(4, ['What are decimals?', 'How do you compare fractions, decimals and percentages?', 'What is a percentage?', 'Percentages of a set and of a measure']);
})();
