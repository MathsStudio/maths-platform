/* story_p6.js: teacher story lessons for P6 (topics 1 to 11 and 13). A step up from P5: bigger numbers, unlike fractions, angle facts, equations. */
(function () {
  'use strict';
  var BT = window.BT; if (!BT || !BT.story || !BT.sv || !BT.sv.grid) return;
  var V = BT.sv, NL = BT.NL;
  var SC = function (h, sub, steps) { return { h: h, sub: sub, steps: steps }; };
  var st = function (say, html) { return { say: say, html: html || '' }; };
  var REC = function (say, items) { return SC('Let’s recap', '', [st(say, V.list(items))]); };
  var PV = ['Millions', 'Hundred thousands', 'Ten thousands', 'Thousands', 'Hundreds', 'Tens', 'Ones'];

  /* 1 PLACE VALUE */
  BT.story(1, 'Watch', [
    { title: 'Numbers up to millions', goal: 'how to read, write and scale big numbers.', scenes: [
      SC('Reading a big number', '3,406,215', [
        st("Welcome back! This year our numbers get much bigger. Look at three million, four hundred and six thousand, two hundred and fifteen. Let's put each digit in its own column.", V.tbl([['3', '4', '0', '6', '2', '1', '5']], PV)),
        st("The columns come in groups of three: millions, thousands, and then hundreds, tens and ones. The commas show the groups. The zero in the ten thousands column says there are none of those.", V.eq('3 million + 406 thousand + 215', 'b') + V.rule('Zero holds the place.'))]),
      SC('Multiplying by 10, 100, 1000', 'The digits slide along', [
        st("When we multiply by ten, every digit moves one column to the left, and a zero fills the gap. So three million, four hundred and six thousand, two hundred and fifteen times ten becomes thirty-four million, sixty-two thousand, one hundred and fifty.", V.eq('3,406,215 × 10 = 34,062,150', 'g')),
        st("Dividing is the reverse. Every digit moves right. Divide by one hundred, and the digits move two places, giving thirty-four thousand, sixty-two and fifteen hundredths.", V.eq('3,406,215 ÷ 100 = 34,062.15', 'g') + V.rule('The digits move. The decimal point stays put.'))]),
      REC("Excellent. Read big numbers in groups of three. Zero holds the place. Multiplying by ten, a hundred or a thousand slides the digits left. Dividing slides them right.", ['Groups of three', 'Zero holds the place', '× slides digits left', '÷ slides digits right'])] },
    { title: 'Rounding and estimating', goal: 'how to round big numbers and use estimates to check.', scenes: [
      SC('Rounding big numbers', 'Round 3,406,215', [
        st("To round to the nearest thousand, look at the hundreds digit next door. It is a two, which is less than five, so we stay the same: three million, four hundred and six thousand.", V.eq('3,406,215 → 3,406,000', 'g') + V.rule('Next door 5 or more: round up. Less: stay.')),
        st("To the nearest ten thousand, the digit next door is the thousands digit. It is a six, so we round up. The zero becomes a one: three million, four hundred and ten thousand.", V.eq('3,406,215 → 3,410,000', 'g'))]),
      SC('Estimating to check', '4,872 + 3,129', [
        st("Estimating means rounding first so the sum is quick. Round four thousand, eight hundred and seventy-two to five thousand. Round three thousand, one hundred and twenty-nine to three thousand.", V.eq('4,872 ≈ 5,000') + V.eq('3,129 ≈ 3,000')),
        st("Five thousand plus three thousand is eight thousand. If your exact answer is nowhere near eight thousand, you know to check it again. The exact answer is eight thousand and one.", V.eq('5,000 + 3,000 = 8,000', 'g') + V.eq('exact: 8,001 ✓', 'g'))]),
      REC("Great. Round by looking at the digit next door, and always estimate to check your answer makes sense.", ['Look at the digit next door', 'Round, then calculate', 'Estimate to check'])] }
  ]);

  /* 2 OPERATIONS */
  BT.story(2, 'Watch', [
    { title: 'Long multiplication', goal: 'how to multiply two-digit numbers by splitting them up.', scenes: [
      SC('Splitting the numbers', '36 × 24', [
        st("Let's work out thirty-six times twenty-four. A good way is to split twenty-four into twenty and four, and multiply thirty-six by each part.", V.eq('36 × 24', 'b') + V.cards(['36 × 20', '36 × 4'], ['g', 'r'], true)),
        st("Thirty-six times twenty. Do thirty-six times two, which is seventy-two, then times ten, seven hundred and twenty. Then thirty-six times four is one hundred and forty-four.", V.eq('36 × 20 = 720') + V.eq('36 × 4 = 144')),
        st("Add the two parts together. Seven hundred and twenty plus one hundred and forty-four is eight hundred and sixty-four.", V.eq('720 + 144 = 864', 'g')),
        st("Now estimate to check. Thirty-six is about forty, and twenty-four is about twenty-five. Forty times twenty-five is one thousand, so eight hundred and sixty-four is sensible.", V.eq('40 × 25 = 1,000 ≈ 864 ✓'))]),
      REC("Split one number into tens and ones, multiply each part, then add. Estimate first so you can spot mistakes.", ['Split into tens and ones', 'Multiply each part', 'Add the parts', 'Estimate to check'])] },
    { title: 'Dividing with remainders', goal: 'how to divide with the bus stop method and deal with remainders.', scenes: [
      SC('The bus stop method', '432 ÷ 6', [
        st("Dividing a bigger number is done digit by digit, from the left. We write it in a bus stop shape. Four hundred and thirty-two shared into six equal groups.", V.eq('6 ) 4 3 2', 'b')),
        st("Six into forty-three goes seven times, since six sevens are forty-two. That leaves one. Carry the one to make twelve. Six into twelve goes twice.", V.eq('43 ÷ 6 = 7 r 1') + V.eq('12 ÷ 6 = 2') + V.eq('432 ÷ 6 = 72', 'g'))]),
      SC('Remainders', '475 ÷ 4', [
        st("Sometimes it does not divide exactly. Four hundred and seventy-five divided by four. Four into four is one. Four into seven is one, remainder three. Four into thirty-five is eight, remainder three.", V.eq('475 ÷ 4 = 118 remainder 3', 'g')),
        st("What the remainder means depends on the story. If four friends share seventy-five pounds, the remainder is three pounds that could be shared as pennies. If we need minibuses holding four, we need one more bus.", V.rule('Read the story: round up, round down, or share it out.')),
        st("Always check by multiplying. One hundred and eighteen times four is four hundred and seventy-two, plus three is four hundred and seventy-five.", V.eq('118 × 4 + 3 = 475 ✓', 'g'))]),
      REC("Divide digit by digit from the left, write the remainder, and check by multiplying back.", ['Start from the left', 'Carry the remainder', 'Use the story for the remainder', 'Check by multiplying'])] }
  ]);

  /* 3 FRACTIONS */
  BT.story(3, 'Watch', [
    { title: 'Adding and subtracting fractions', goal: 'how to add and subtract fractions with different denominators.', scenes: [
      SC('Same-size pieces first', '1/2 + 1/3', [
        st("What is one half plus one third? The pieces are different sizes, so we cannot just add. First we need to cut them into pieces of the same size.", BT.bar(1, 2, 'One half') + BT.bar(1, 3, 'One third')),
        st("The smallest number that both two and three go into is six. So we use sixths. One half is three sixths, and one third is two sixths.", BT.bar(3, 6, 'Three sixths') + BT.bar(2, 6, 'Two sixths') + V.eq('1/2 = 3/6   1/3 = 2/6')),
        st("Now they are the same size, so add the tops: three plus two is five. The answer is five sixths.", V.eq('3/6 + 2/6 = 5/6', 'g'))]),
      SC('Subtracting', '3/4 − 1/6', [
        st("Subtracting works the same way. Three quarters take away one sixth. The smallest number both four and six go into is twelve.", V.eq('3/4 = 9/12') + V.eq('1/6 = 2/12')),
        st("Nine twelfths take away two twelfths is seven twelfths.", V.eq('9/12 − 2/12 = 7/12', 'g') + V.rule('Make the denominators the same first.'))]),
      REC("To add or subtract fractions, find a common denominator, change both fractions, then add or subtract the tops.", ['Find a common denominator', 'Change both fractions', 'Add or subtract the tops'])] },
    { title: 'Fractions of amounts and multiplying', goal: 'how to find a fraction of an amount and multiply a fraction by a whole number.', scenes: [
      SC('A fraction of an amount', '2/3 of 36', [
        st("Two thirds of thirty-six. Divide by the denominator to find one third: thirty-six divided by three is twelve. Then multiply by the numerator: two twelves is twenty-four.", V.eq('36 ÷ 3 = 12') + V.eq('12 × 2 = 24', 'g') + V.rule('÷ the bottom, × the top.'))]),
      SC('Whole number times a fraction', '3 × 2/5', [
        st("Three times two fifths means two fifths, three times. Two fifths plus two fifths plus two fifths is six fifths.", V.eq('3 × 2/5 = 6/5', 'b')),
        st("Six fifths is more than one whole. It is one whole and one fifth. So three times two fifths is one and one fifth.", V.eq('6/5 = 1 1/5', 'g'))]),
      SC('A fraction of a fraction', 'Half of a quarter', [
        st("What is half of a quarter? Cut a quarter in half and you get an eighth. So a half times a quarter is one eighth. We multiply the tops and multiply the bottoms.", BT.bar(1, 8, 'One eighth') + V.eq('1/2 × 1/4 = 1/8', 'g'))]),
      REC("Divide by the bottom and multiply by the top to find a fraction of an amount. To multiply fractions, multiply the tops and the bottoms.", ['÷ bottom, × top', 'Whole × fraction: repeated adding', 'Top × top, bottom × bottom'])] }
  ]);

  /* 4 DECIMALS AND PERCENTAGES */
  BT.story(4, 'Watch', [
    { title: 'Fractions, decimals and percentages', goal: 'how to change between fractions, decimals and percentages.', scenes: [
      SC('Three names for one amount', '3/5', [
        st("A fraction, a decimal and a percentage can all describe the same amount. Take three fifths. To make a percentage, we need a denominator of one hundred. Multiply top and bottom by twenty.", V.eq('3/5 = 60/100', 'b')),
        st("Sixty out of one hundred is sixty per cent, and as a decimal it is zero point six. A fraction is also a division, so three divided by five is zero point six.", V.cards(['3/5', '0.6', '60%'], ['b', 'g', 'r']))]),
      SC('Another example', '7/20', [
        st("Seven twentieths. Multiply top and bottom by five to get thirty-five hundredths. That is zero point three five, which is thirty-five per cent.", V.eq('7/20 = 35/100 = 0.35 = 35%', 'g')),
        st("Keep these friends in your head: a half is fifty per cent, a quarter is twenty-five, a tenth is ten, and a fifth is twenty.", V.tbl([['1/2', '0.5', '50%'], ['1/4', '0.25', '25%'], ['1/5', '0.2', '20%'], ['1/10', '0.1', '10%']], ['Fraction', 'Decimal', 'Percent']))]),
      REC("Make the denominator one hundred to get a percentage. Divide the top by the bottom to get a decimal.", ['Denominator 100 → percent', 'Top ÷ bottom → decimal', 'Learn the common ones'])] },
    { title: 'Percentages of amounts', goal: 'how to find percentages of amounts quickly.', scenes: [
      SC('Building from 10 per cent', 'Percentages of 250', [
        st("To find ten per cent, divide by ten. Ten per cent of two hundred and fifty is twenty-five. Five per cent is half of that, twelve point five.", V.eq('10% of 250 = 25') + V.eq('5% of 250 = 12.5')),
        st("Fifteen per cent is ten per cent plus five per cent: twenty-five plus twelve point five, which is thirty-seven point five. One per cent would be two point five.", V.eq('15% = 25 + 12.5 = 37.5', 'g'))]),
      SC('A sale', 'A £80 jacket with 25% off', [
        st("A jacket costs eighty pounds. There is twenty-five per cent off. Twenty-five per cent is a quarter, so divide by four: twenty pounds off.", V.eq('25% of £80 = £20')),
        st("Now take that away. Eighty take away twenty is sixty pounds. The sale price is sixty pounds.", V.eq('£80 − £20 = £60', 'g'))]),
      REC("Find ten per cent by dividing by ten, then build up other percentages. A quarter off means divide by four.", ['10% = ÷ 10', '5% = half of 10%', 'Build other percentages', 'Subtract for a sale'])] }
  ]);

  /* 5 MONEY, TIME AND MEASUREMENT */
  BT.story(5, 'Watch', [
    { title: 'Converting units', goal: 'how to change between units, including decimals.', scenes: [
      SC('Smaller or bigger?', '3.4 m to centimetres', [
        st("Changing to a smaller unit means multiplying. There are one hundred centimetres in a metre. So three point four metres is three point four times one hundred: three hundred and forty centimetres.", V.eq('3.4 × 100 = 340 cm', 'g')),
        st("Changing to a bigger unit means dividing. Four hundred and fifty centimetres is four point five metres.", V.eq('450 ÷ 100 = 4.5 m', 'g'))]),
      SC('Mass and capacity', 'Kilograms and litres', [
        st("A kilogram is one thousand grams, and a litre is one thousand millilitres. Two point five kilograms is two thousand, five hundred grams. One point five litres is one thousand, five hundred millilitres.", V.eq('2.5 kg = 2,500 g') + V.eq('1.5 l = 1,500 ml') + V.rule('Smaller unit: ×. Bigger unit: ÷.'))]),
      REC("To go to a smaller unit multiply, to go to a bigger unit divide. Know your facts: one hundred centimetres in a metre, one thousand in a kilometre, kilogram or litre.", ['Smaller unit: multiply', 'Bigger unit: divide', '100, 1,000 facts'])] },
    { title: 'Timetables and durations', goal: 'how to read timetables and work out how long things take.', scenes: [
      SC('How long is the journey?', '08:45 to 10:20', [
        st("A train leaves at eight forty-five and arrives at ten twenty. How long is the journey? Count on to the next whole hour: from eight forty-five to nine o'clock is fifteen minutes.", V.eq('08:45 → 09:00 = 15 min', 'b')),
        st("Nine to ten is sixty minutes, and ten to ten twenty is twenty minutes. Fifteen plus sixty plus twenty is ninety-five minutes, which is one hour and thirty-five minutes.", V.eq('15 + 60 + 20 = 95 min = 1 h 35 min', 'g'))]),
      SC('24-hour time', 'Reading a timetable', [
        st("Timetables use the twenty-four hour clock. Eighteen thirty means thirty minutes past six in the evening. After noon, subtract twelve to get the pm time.", V.eq('18:30 = 6:30 pm', 'g') + V.clock(6, 30))]),
      REC("Count on in chunks to find a duration, and subtract twelve from afternoon times in the twenty-four hour clock.", ['Count on to the next hour', 'Add the chunks', 'After 12:00 subtract 12'])] }
  ]);

  /* 6 PATTERNS AND ALGEBRA */
  BT.story(6, 'Watch', [
    { title: 'Finding the rule', goal: 'how to describe a sequence with a rule using n.', scenes: [
      SC('The term-to-term rule', '3, 7, 11, 15', [
        st("Look at this sequence: three, seven, eleven, fifteen. Each term is four more than the one before. That is the term-to-term rule: add four.", V.cards(['3', '7', '11', '15'], ['b'], true) + V.eq('+4 each time', 'g')),
        st("But what is the hundredth term? Counting on would take forever. We need a rule that uses the position, called n.", V.eq('position n = 1, 2, 3, 4', 'b'))]),
      SC('The position-to-term rule', 'The rule is 4n − 1', [
        st("The numbers go up by four, so the rule has four times n in it. When n is one, four times one is four, but we need three. So we take away one.", V.tbl([['1', '2', '3', '4'], ['3', '7', '11', '15']], ['n', '', '', '']) + V.eq('4n − 1', 'g')),
        st("Test it. When n is two, four times two is eight, minus one is seven. It works. Now the tenth term is four times ten, minus one, which is thirty-nine.", V.eq('n = 10: 4 × 10 − 1 = 39', 'g'))]),
      REC("Find how much it goes up by. Use that as the number in front of n. Then adjust, and test your rule.", ['Find the step', 'Number × n', 'Adjust to fit', 'Test the rule'])] },
    { title: 'Equations', goal: 'how to solve equations by balancing.', scenes: [
      SC('Balancing', '2x + 3 = 11', [
        st("An equation is like a balanced seesaw. Two x plus three equals eleven. What is x? Whatever we do to one side, we do to the other, so it stays balanced.", V.eq('2x + 3 = 11', 'b')),
        st("First take away three from both sides. That leaves two x equals eight. Then divide both sides by two. So x equals four.", V.eq('2x = 8') + V.eq('x = 4', 'g')),
        st("Check by putting four back in. Two times four is eight, plus three is eleven. Perfect.", V.eq('2 × 4 + 3 = 11 ✓', 'g'))]),
      SC('Substitution', 'Put a number in', [
        st("Substitution means replacing a letter with a number. If a is five, then three a minus two is three times five, minus two, which is thirteen.", V.eq('a = 5: 3a − 2 = 15 − 2 = 13', 'g'))]),
      REC("Do the same to both sides to keep the equation balanced. Undo adding or subtracting first, then undo multiplying.", ['Same to both sides', 'Undo + and − first', 'Then undo × and ÷', 'Check by substituting'])] }
  ]);

  /* 7 SHAPE, ANGLES */
  BT.story(7, 'Watch', [
    { title: 'Angle facts', goal: 'the angle facts for straight lines, points, triangles and quadrilaterals.', scenes: [
      SC('Straight line and full turn', 'Angles on a line add to 180', [
        st("Angles on a straight line add up to one hundred and eighty degrees. If one angle is one hundred and thirty, the other is one hundred and eighty take away one hundred and thirty, which is fifty.", V.angle(130, '130°') + V.eq('180 − 130 = 50°', 'g')),
        st("Angles around a point add up to three hundred and sixty. If three angles are ninety, one hundred and twenty and an unknown, the unknown is three sixty take away two ten, a hundred and fifty.", V.eq('90 + 120 + x = 360') + V.eq('x = 150°', 'g'))]),
      SC('Triangles and quadrilaterals', 'Interior angles', [
        st("The three angles in any triangle add up to one hundred and eighty. With fifty and sixty, the third angle is one eighty minus a hundred and ten: seventy degrees.", V.poly([[20, 120], [110, 20], [200, 120]], 'var(--surface-2)', 220, 140, 'A triangle', [[40, 112, '50°'], [168, 112, '60°'], [110, 50, '?']]) + V.eq('180 − 110 = 70°', 'g')),
        st("The four angles in any quadrilateral add up to three hundred and sixty. With ninety, eighty and one hundred, the last is three sixty minus two seventy, ninety degrees.", V.eq('90 + 80 + 100 + x = 360') + V.eq('x = 90°', 'g'))]),
      REC("Straight line, one eighty. Round a point, three sixty. Triangle, one eighty. Quadrilateral, three sixty. Always subtract from the total.", ['Straight line: 180°', 'Around a point: 360°', 'Triangle: 180°', 'Quadrilateral: 360°'])] },
    { title: 'Circles', goal: 'the parts of a circle and how circumference is linked to diameter.', scenes: [
      SC('Parts of a circle', 'Radius and diameter', [
        st("A circle has a centre. The radius goes from the centre to the edge. The diameter goes right across, through the centre. So the diameter is always twice the radius.", V.circle() + V.eq('diameter = 2 × radius', 'b')),
        st("The distance around a circle is called the circumference. It is always a little more than three times the diameter. That magic number is called pi, about three point one four.", V.eq('circumference ≈ 3.14 × diameter', 'g')),
        st("So a circle with diameter ten centimetres has a circumference of about thirty-one point four centimetres.", V.eq('3.14 × 10 = 31.4 cm', 'g'))]),
      REC("The diameter is twice the radius. The circumference is about three point one four times the diameter.", ['Diameter = 2 × radius', 'Circumference ≈ 3.14 × diameter'])] }
  ]);

  /* 8 DATA AND CHANCE */
  BT.story(8, 'Watch', [
    { title: 'Averages', goal: 'mean, median, mode and range.', scenes: [
      SC('Four ways to summarise', '3, 5, 5, 7, 10', [
        st("We have five numbers: three, five, five, seven, ten. The mean is the fair share. Add them up to get thirty, then divide by how many there are, five. The mean is six.", V.cards(['3', '5', '5', '7', '10'], ['b'], true) + V.eq('30 ÷ 5 = 6', 'g')),
        st("The median is the middle number when they are in order. The middle of five numbers is the third, which is five. The mode is the most common, also five. The range is biggest minus smallest, ten minus three, which is seven.", V.tbl([['mean', '6'], ['median', '5'], ['mode', '5'], ['range', '7']], ['Average', 'Value']))]),
      REC("Mean is the fair share. Median is the middle. Mode is the most common. Range is the spread.", ['Mean: add up, divide by how many', 'Median: the middle', 'Mode: most common', 'Range: biggest − smallest'])] },
    { title: 'Chance as a fraction', goal: 'how to write the probability of an event as a fraction.', scenes: [
      SC('The probability scale', 'From impossible to certain', [
        st("Probability measures chance on a scale from zero to one. Zero means impossible. One means certain. A half means even chance.", NL(0, 1, { lab: 0.5, tick: 0.1, marks: [[0.5, 2]] }) + V.cards(['0 impossible', '1/2 even', '1 certain'], ['r', 'b', 'g'], true))]),
      SC('Counters in a bag', 'Ten counters', [
        st("A bag has ten counters: three red, five blue and two green. The chance of picking red is three out of ten, written three tenths.", V.cards(['3 red', '5 blue', '2 green'], ['r', 'b', 'g'], true) + V.eq('P(red) = 3/10', 'g')),
        st("What is the chance of not green? Eight of the ten are not green. That is eight tenths, which simplifies to four fifths.", V.eq('P(not green) = 8/10 = 4/5', 'g'))]),
      REC("Probability is a fraction from zero to one: the number of ways it can happen, over the total number of outcomes.", ['Favourable ÷ total', '0 impossible, 1 certain', 'Simplify the fraction'])] }
  ]);

  /* 9 MIXED REASONING */
  BT.story(9, 'Watch', [
    { title: 'Multi-step problems', goal: 'how to plan and solve problems that need several steps.', scenes: [
      SC('Plan before you calculate', 'Theatre tickets', [
        st("Adult tickets cost twelve pounds and child tickets seven pounds. A family buys three adult and two child tickets and pays with a sixty pound note. How much change? Break it into steps.", V.list(['Cost of adult tickets', 'Cost of child tickets', 'Total cost', 'Change from £60'])),
        st("Three adults at twelve pounds is thirty-six. Two children at seven pounds is fourteen. The total is fifty pounds.", V.eq('3 × 12 = 36') + V.eq('2 × 7 = 14') + V.eq('36 + 14 = 50', 'b')),
        st("Sixty take away fifty leaves ten pounds change. Does that make sense? We spent less than sixty, so yes.", V.eq('60 − 50 = £10', 'g'))]),
      REC("Read, plan the steps, calculate one step at a time, and check the answer makes sense.", ['Read carefully', 'List the steps', 'One step at a time', 'Does it make sense?'])] },
    { title: 'Bar models for sums and differences', goal: 'how to use a bar model when you know a total and a difference.', scenes: [
      SC('Total and difference', 'Two numbers add to 15, differ by 3', [
        st("Two numbers add up to fifteen, and one is three bigger than the other. Draw the smaller bar, and the bigger bar with three extra.", V.bm([['small', [[100, '?']]], ['big', [[100, '?'], [40, '3', 'var(--hl)']]]])),
        st("Take away the extra three. Fifteen minus three is twelve, shared between two equal bars. Each is six. So the numbers are six and nine.", V.eq('15 − 3 = 12') + V.eq('12 ÷ 2 = 6') + V.eq('6 and 9', 'g')),
        st("Check: six plus nine is fifteen, and nine minus six is three. Both facts are true.", V.eq('6 + 9 = 15 ✓   9 − 6 = 3 ✓', 'g'))]),
      REC("When you know a total and a difference, take away the difference, share what is left equally, then add the difference to the bigger one.", ['Draw the bars', '− the difference', '÷ 2', 'Check both facts'])] }
  ]);

  /* 10 FACTORS, MULTIPLES, PRIMES */
  function tree() {
    var s = '<g style="' + 'stroke:var(--fg);stroke-width:3;fill:none"><line x1="150" y1="40" x2="90" y2="85"/><line x1="150" y1="40" x2="210" y2="85"/><line x1="90" y1="115" x2="60" y2="150"/><line x1="90" y1="115" x2="120" y2="150"/><line x1="210" y1="115" x2="180" y2="150"/><line x1="210" y1="115" x2="240" y2="150"/></g>';
    [[150, 'var(--fg)', 36], [90, 'var(--accent)', 6], [210, 'var(--accent)', 6]].forEach(function (n, i) { s += '<circle cx="' + n[0] + '" cy="' + (i ? 100 : 28) + '" r="19" style="fill:var(--surface);stroke:var(--fg);stroke-width:3"/>' + V.t(n[0], (i ? 107 : 35), n[2]); });
    [60, 120, 180, 240].forEach(function (x, i) { s += '<circle cx="' + x + '" cy="165" r="17" style="fill:var(--good);stroke:var(--fg);stroke-width:3"/>' + V.t(x, 172, [2, 3, 2, 3][i], 'middle', '#fff'); });
    return V.svg(300, 190, s, 'A factor tree for 36');
  }
  BT.story(10, 'Watch', [
    { title: 'Common factors and multiples', goal: 'how to find the highest common factor and lowest common multiple.', scenes: [
      SC('Common factors', '12 and 18', [
        st("Factors are numbers that divide exactly. The factors of twelve are one, two, three, four, six and twelve. The factors of eighteen are one, two, three, six, nine and eighteen.", V.tbl([['1, 2, 3, 4, 6, 12'], ['1, 2, 3, 6, 9, 18']], ['Factors of 12 and 18'])),
        st("The common factors are the ones in both lists: one, two, three and six. The biggest is six. That is the highest common factor.", V.eq('HCF of 12 and 18 = 6', 'g'))]),
      SC('Common multiples', '4 and 6', [
        st("Multiples are times table answers. Multiples of four: four, eight, twelve, sixteen, twenty, twenty-four. Multiples of six: six, twelve, eighteen, twenty-four.", V.tbl([['4, 8, 12, 16, 20, 24'], ['6, 12, 18, 24']], ['Multiples of 4 and 6'])),
        st("The first number in both lists is twelve. That is the lowest common multiple. Use it to find a common denominator!", V.eq('LCM of 4 and 6 = 12', 'g'))]),
      REC("List the factors or multiples. The biggest shared factor is the HCF. The smallest shared multiple is the LCM.", ['HCF: highest common factor', 'LCM: lowest common multiple', 'List and compare'])] },
    { title: 'Prime factors', goal: 'how to break a number into prime factors.', scenes: [
      SC('A factor tree', '36', [
        st("Every number is built from primes. Break thirty-six into two factors, six times six. Then break each six into two times three.", tree()),
        st("The ends of the branches are all prime: two, three, two, three. So thirty-six is two times two times three times three. With powers: two squared times three squared.", V.eq('36 = 2 × 2 × 3 × 3 = 2² × 3²', 'g'))]),
      SC('Divisibility tests', 'Is 252 divisible by 3?', [
        st("A quick trick: a number divides by three if its digits add to a multiple of three. Two plus five plus two is nine, so two hundred and fifty-two divides by three. Divisibility by nine works the same way.", V.eq('2 + 5 + 2 = 9 ✓', 'g'))]),
      REC("Split a number into a factor tree until every branch is prime. Multiply the primes to check.", ['Split into two factors', 'Keep going until prime', 'Multiply to check'])] }
  ]);

  /* 11 RATIO AND PROPORTION */
  BT.story(11, 'Watch', [
    { title: 'What a ratio says', goal: 'what a ratio means and how to simplify it.', scenes: [
      SC('Comparing parts', '2 red to 3 blue', [
        st("A ratio compares parts. In a bag, there are two red beads for every three blue beads. We write two to three.", V.dots(1, 2, 'var(--bad)') + V.dots(1, 3, 'var(--accent)') + V.eq('red : blue = 2 : 3', 'b')),
        st("If there are four red and six blue, the ratio is four to six. But it describes the same mix. Divide both numbers by two and we get two to three. That is simplifying.", V.eq('4 : 6 = 2 : 3', 'g') + V.rule('Divide both parts by the same number.'))]),
      REC("A ratio compares parts. Simplify by dividing both parts by the same number.", ['Parts, not the whole', 'Same mix, bigger or smaller', 'Divide both by the same number'])] },
    { title: 'Sharing and scaling', goal: 'how to share an amount in a ratio and scale a recipe.', scenes: [
      SC('Sharing in a ratio', 'Share £40 in the ratio 3 : 5', [
        st("Share forty pounds between two people in the ratio three to five. First add the parts: three plus five is eight parts.", V.bm([['A', [[60, '3'], [0, '']]], ['B', [[100, '5']]]]) + V.eq('3 + 5 = 8 parts')),
        st("Forty pounds shared into eight parts is five pounds a part. So the first person gets three parts, fifteen pounds, and the second gets five parts, twenty-five.", V.eq('40 ÷ 8 = £5') + V.eq('3 × 5 = £15    5 × 5 = £25', 'g')),
        st("Check: fifteen plus twenty-five is forty.", V.eq('15 + 25 = 40 ✓', 'g'))]),
      SC('The unit method', 'A recipe for 4 people', [
        st("A recipe for four people uses two hundred grams of flour. For six people, first find the amount for one person: two hundred divided by four is fifty grams. Then multiply by six: three hundred grams.", V.eq('200 ÷ 4 = 50 g') + V.eq('50 × 6 = 300 g', 'g'))]),
      REC("To share in a ratio: add the parts, find one part, multiply. To scale, find the amount for one, then multiply.", ['Add the parts', 'Find one part', 'Multiply', 'Check the total'])] }
  ]);

  /* 13 SPATIAL */
  BT.story(13, 'Watch', [
    { title: 'Nets and views', goal: 'how to picture a 3D shape from its net.', scenes: [
      SC('Nets of a cuboid', 'Flat pattern, six faces', [
        st("A cuboid has six rectangular faces. Opposite faces are exactly the same size. A net shows all six faces folded out flat.", V.svg(300, 200, '<g style="fill:var(--surface-2);' + 'stroke:var(--fg);stroke-width:3.5;stroke-linejoin:round"><rect x="100" y="10" width="60" height="50"/><rect x="40" y="60" width="60" height="80"/><rect x="100" y="60" width="60" height="80"/><rect x="160" y="60" width="60" height="80"/><rect x="100" y="140" width="60" height="50"/><rect x="220" y="60" width="60" height="80" style="fill:var(--hl)"/></g>', 'A net of a cuboid')),
        st("To check a net, picture folding it. The four faces in the middle row wrap round like a belt. The top and bottom faces fold over as lids. If two faces would land on top of each other, it is not a net.", V.list(['Six faces', 'Opposite faces match', 'No overlapping']))]),
      REC("A net folds into a solid. Count the faces, check opposite faces match, and picture the folds.", ['Count the faces', 'Opposite faces match', 'Picture the folds'])] },
    { title: 'Reflecting on a grid', goal: 'how to reflect a shape in a mirror line on a coordinate grid.', scenes: [
      SC('The mirror line', 'Reflect in the line x = 4', [
        st("Here is a triangle on a grid, and a mirror line at four. To reflect it, take each corner and find how far it is from the mirror.", V.grid(8, [[[[1, 1], [1, 3], [2, 1]], 'var(--accent)']], 4)),
        st("The corner at one, one is three squares from the mirror. So its mirror image is three squares on the other side, at seven, one. Do this for every corner.", V.grid(8, [[[[1, 1], [1, 3], [2, 1]], 'var(--accent)'], [[[7, 1], [7, 3], [6, 1]], 'var(--good)']], 4) + V.eq('(1, 1) → (7, 1)', 'g'))]),
      REC("Every point is the same distance from the mirror line, on the other side. The shape flips, but stays the same size.", ['Count the distance to the mirror', 'Same distance the other side', 'Join the new corners'])] }
  ]);
})();
