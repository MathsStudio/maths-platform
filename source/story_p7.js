/* story_p7.js: teacher story lessons for P7 (topics 701 to 713). A step up from P6: significant figures, indices, fraction multiplication and division, percentage change, nth term, polygons, parallel lines, speed and bearings. */
(function () {
  'use strict';
  var BT = window.BT; if (!BT || !BT.story || !BT.sv || !BT.sv.grid) return;
  var V = BT.sv, NL = BT.NL;
  var SC = function (h, sub, steps) { return { h: h, sub: sub, steps: steps }; };
  var st = function (say, html) { return { say: say, html: html || '' }; };
  var REC = function (say, items) { return SC('Let’s recap', '', [st(say, V.list(items))]); };
  var LN = 'stroke:var(--fg);stroke-width:3.5;stroke-linecap:round;';
  function par(labels) {
    var s = '<line x1="20" y1="60" x2="280" y2="60" style="' + LN + '"/><line x1="20" y1="140" x2="280" y2="140" style="' + LN + '"/><line x1="90" y1="20" x2="210" y2="180" style="stroke:var(--accent);stroke-width:3.5"/>';
    s += '<path d="M60 52 l12 8 l-12 8" style="fill:none;stroke:var(--fg);stroke-width:2"/><path d="M60 132 l12 8 l-12 8" style="fill:none;stroke:var(--fg);stroke-width:2"/>';
    labels.forEach(function (l) { s += V.t(l[0], l[1], l[2], 'middle', l[3] || 'var(--bad)'); });
    return V.svg(300, 200, s, 'Two parallel lines cut by a transversal') + V.note('Not drawn to scale');
  }

  /* 701 PLACE VALUE */
  BT.story(701, 'Watch', [
    { title: 'Decimal places and significant figures', goal: 'how to round to a number of decimal places or significant figures.', scenes: [
      SC('Decimal places', 'Round 3.4785 to 2 d.p.', [
        st("Decimal places count the digits after the decimal point. To round three point four seven eight five to two decimal places, keep two digits after the point, and look at the third.", V.eq('3.4785', 'b') + V.note('2 d.p. means two digits after the point')),
        st("The third digit is an eight. That is five or more, so the second digit goes up from seven to eight. The answer is three point four eight.", V.eq('3.4785 → 3.48', 'g'))]),
      SC('Significant figures', 'The first digit that is not zero', [
        st("Significant figures start counting from the first digit that is not zero. Round forty-eight thousand, six hundred and fifty-three to two significant figures. The first two are four and eight. Next door is a six, so round up.", V.eq('48,653 → 49,000', 'g')),
        st("Now zero point zero zero three seven two to one significant figure. The leading zeros do not count. The first significant figure is the three. Next door is a seven, so it rounds up to four thousandths.", V.eq('0.00372 → 0.004', 'g') + V.rule('Leading zeros are not significant.'))]),
      REC("Decimal places count after the point. Significant figures count from the first non-zero digit. Both: look at the next digit and round.", ['d.p.: digits after the point', 's.f.: from the first non-zero digit', 'Next digit 5 or more: round up'])] },
    { title: 'Negative numbers and powers of ten', goal: 'how to calculate with negatives and write powers of ten.', scenes: [
      SC('Calculating with negatives', 'On the number line', [
        st("On a number line, adding moves right and subtracting moves left. Start at minus three and add eight. Move eight to the right and you land on five.", NL(-5, 6, { lab: 1, tick: 1, jumps: [[-3, 5, '+8']] }) + V.eq('−3 + 8 = 5', 'g')),
        st("Four take away nine. Move nine left from four. You pass zero and land on minus five.", V.eq('4 − 9 = −5', 'g')),
        st("The difference between minus seven degrees and five degrees is twelve degrees. We count the distance between the two.", V.eq('5 − (−7) = 12', 'g'))]),
      SC('Powers of ten', 'Indices make big numbers short', [
        st("Ten squared means ten times ten, a hundred. Ten cubed is a thousand. The small number, the index, counts the zeros. Ten to the six is a million.", V.tbl([['10²', '100'], ['10³', '1,000'], ['10⁶', '1,000,000']], ['Power', 'Value'])),
        st("So two point five times ten to the six is two point five million: two million, five hundred thousand.", V.eq('2.5 × 10⁶ = 2,500,000', 'g'))]),
      REC("On the number line, add moves right, subtract moves left. Powers of ten count zeros.", ['+ right, − left', 'Difference = distance apart', '10ⁿ has n zeros'])] }
  ]);

  /* 702 OPERATIONS */
  BT.story(702, 'Watch', [
    { title: 'Order of operations with indices', goal: 'how to use BIDMAS with powers and brackets.', scenes: [
      SC('BIDMAS', 'Brackets, indices, then × ÷, then + −', [
        st("Let's work out three plus four squared times two. The order is brackets, then indices, then multiplying and dividing, then adding and subtracting. We call it BIDMAS.", V.eq('3 + 4² × 2', 'b') + V.list(['Brackets', 'Indices', 'Divide / Multiply', 'Add / Subtract'])),
        st("Indices first: four squared is sixteen. Then multiply: sixteen times two is thirty-two. Finally add three: thirty-five.", V.eq('4² = 16') + V.eq('16 × 2 = 32') + V.eq('3 + 32 = 35', 'g')),
        st("With brackets, everything changes. Three plus four in brackets is seven. Squared is forty-nine. Times two is ninety-eight.", V.eq('(3 + 4)² × 2 = 49 × 2 = 98', 'g'))]),
      REC("Brackets first, then indices, then multiply and divide, then add and subtract.", ['B: brackets', 'I: indices', 'DM: divide and multiply', 'AS: add and subtract'])] },
    { title: 'Decimal calculations', goal: 'how to multiply and divide with decimals.', scenes: [
      SC('Multiplying decimals', '7.2 × 4', [
        st("To multiply seven point two by four, ignore the point at first. Seventy-two times four is two hundred and eighty-eight. Seven point two has one decimal place, so the answer has one too: twenty-eight point eight.", V.eq('72 × 4 = 288') + V.eq('7.2 × 4 = 28.8', 'g'))]),
      SC('Dividing', '156 ÷ 8 and 2.4 ÷ 0.6', [
        st("A hundred and fifty-six divided by eight. Eight goes into a hundred and fifty-six nineteen times, with four left over. Four divided by eight is a half. So the answer is nineteen point five.", V.eq('156 ÷ 8 = 19.5', 'g')),
        st("Dividing by a decimal? Make it whole by multiplying both numbers by ten. Two point four divided by zero point six becomes twenty-four divided by six, which is four.", V.eq('2.4 ÷ 0.6 = 24 ÷ 6 = 4', 'g'))]),
      REC("Multiply decimals as whole numbers, then put the decimal places back. To divide by a decimal, multiply both numbers to make it whole.", ['Count the decimal places', 'Make the divisor whole', 'Estimate to check'])] }
  ]);

  /* 703 FRACTIONS */
  BT.story(703, 'Watch', [
    { title: 'Multiplying fractions', goal: 'how to multiply fractions and mixed numbers.', scenes: [
      SC('Top times top', '2/3 × 3/4', [
        st("To multiply fractions, multiply the tops and multiply the bottoms. Two thirds times three quarters is six twelfths.", V.eq('2/3 × 3/4 = 6/12', 'b')),
        st("Six twelfths simplifies. Divide top and bottom by six and we get one half. A shortcut is to cancel first: the two and the four, and the three and the three.", V.eq('6/12 = 1/2', 'g') + V.rule('Cancel before you multiply.'))]),
      SC('Mixed numbers', '1 1/2 × 2/3', [
        st("With mixed numbers, change to an improper fraction first. One and a half is three halves. Three halves times two thirds is six sixths, which is one.", V.eq('1 1/2 = 3/2') + V.eq('3/2 × 2/3 = 6/6 = 1', 'g'))]),
      REC("Change mixed numbers to improper fractions, multiply tops and bottoms, then simplify.", ['Improper fractions first', 'Top × top, bottom × bottom', 'Simplify'])] },
    { title: 'Dividing fractions', goal: 'how to divide by a fraction.', scenes: [
      SC('How many fit?', '3/4 ÷ 1/8', [
        st("Dividing by a fraction asks: how many fit inside? How many eighths are there in three quarters? Three quarters is six eighths. So six.", BT.bar(6, 8, 'Six of eight') + V.eq('3/4 ÷ 1/8 = 6', 'g')),
        st("The shortcut is: keep the first fraction, change divide to multiply, and flip the second fraction. Three quarters times eight over one is twenty-four quarters, which is six.", V.eq('3/4 × 8/1 = 24/4 = 6', 'g') + V.rule('Keep, change, flip.'))]),
      SC('Dividing by a whole number', '2/3 ÷ 4', [
        st("Two thirds divided by four. Four is four over one. Flip it to one quarter and multiply. Two thirds times one quarter is two twelfths, one sixth.", V.eq('2/3 × 1/4 = 2/12 = 1/6', 'g'))]),
      REC("To divide by a fraction: keep, change, flip. Then multiply and simplify.", ['Keep the first', 'Change ÷ to ×', 'Flip the second'])] }
  ]);

  /* 704 DECIMALS AND PERCENTAGES */
  BT.story(704, 'Watch', [
    { title: 'Percentage change', goal: 'how to increase and decrease an amount by a percentage.', scenes: [
      SC('Increasing', '£40 plus 15%', [
        st("A price of forty pounds goes up by fifteen per cent. Find ten per cent, four pounds, and five per cent, two pounds. Fifteen per cent is six pounds. The new price is forty-six pounds.", V.eq('10% = £4   5% = £2') + V.eq('£40 + £6 = £46', 'g')),
        st("Value Added Tax works like this. VAT of twenty per cent on fifty pounds: ten per cent is five, so twenty is ten, and the total is sixty pounds.", V.eq('£50 + 20% = £60', 'g'))]),
      SC('Decreasing', '£65 less 20%', [
        st("A coat costs sixty-five pounds with twenty per cent off. Ten per cent is six pounds fifty, so twenty per cent is thirteen. Take that off: the sale price is fifty-two pounds.", V.eq('20% of £65 = £13') + V.eq('£65 − £13 = £52', 'g'))]),
      REC("Find the percentage of the amount. Add it for an increase, take it away for a decrease.", ['Find the percentage', '+ for increase', '− for decrease'])] },
    { title: 'Percentages as fractions and reverse percentages', goal: 'how to write one amount as a percentage of another and work backwards.', scenes: [
      SC('One amount as a percentage', '18 out of 24', [
        st("Eighteen out of twenty-four marks. Write it as a fraction, eighteen over twenty-four, which simplifies to three quarters. Three quarters is seventy-five per cent.", V.eq('18/24 = 3/4 = 75%', 'g') + V.rule('Fraction first, then × 100.'))]),
      SC('Working backwards', '25% of a number is 15', [
        st("Twenty-five per cent of a number is fifteen. What is the number? If twenty-five per cent is fifteen, one quarter is fifteen, so the whole is four times fifteen, sixty.", V.eq('25% → 15') + V.eq('100% → 60', 'g'))]),
      REC("Write a fraction then multiply by a hundred. To go backwards, find one part first, then scale up to a hundred per cent.", ['Part ÷ whole × 100', 'Find 1% or 10% first', 'Scale up to 100%'])] }
  ]);

  /* 705 MONEY, TIME, MEASUREMENT */
  BT.story(705, 'Watch', [
    { title: 'Area of triangles and compound shapes', goal: 'how to find the area of triangles and shapes made from rectangles.', scenes: [
      SC('Triangles', 'Half a rectangle', [
        st("A triangle is half of a rectangle. With base ten centimetres and height six centimetres, the rectangle has area sixty, so the triangle has area thirty square centimetres.", V.poly([[20, 100], [200, 100], [110, 20]], 'var(--surface-2)', 230, 130, 'A triangle', [[110, 120, 'base 10 cm'], [112, 78, 'h 6 cm']]) + V.eq('½ × 10 × 6 = 30 cm²', 'g'))]),
      SC('Compound shapes', 'Take away the corner', [
        st("For an L-shape, we can take a rectangle and remove a corner. A rectangle eight by five has area forty. The missing corner is three by two, which is six. Forty minus six is thirty-four square centimetres.", V.eq('8 × 5 = 40') + V.eq('3 × 2 = 6') + V.eq('40 − 6 = 34 cm²', 'g'))]),
      REC("Triangle area is half base times height. Split compound shapes into rectangles, or take a corner away.", ['Triangle: ½ × base × height', 'Split or subtract', 'Units are squared'])] },
    { title: 'Best buys and profit', goal: 'how to compare prices and work out profit.', scenes: [
      SC('Best buy', '500 g or 750 g?', [
        st("A five hundred gram packet costs one pound twenty, and a seven hundred and fifty gram packet costs one pound sixty-five. Compare the price per hundred grams.", V.tbl([['500 g', '£1.20', '24p'], ['750 g', '£1.65', '22p']], ['Size', 'Price', 'Per 100 g'])),
        st("The bigger packet costs twenty-two pence per hundred grams, which is cheaper. It is the best buy.", V.eq('22p < 24p: best buy 750 g', 'g'))]),
      SC('Profit', 'Buy for £8, sell for £10', [
        st("A shop buys an item for eight pounds and sells it for ten. The profit is two pounds. As a percentage of the cost, two over eight is a quarter, twenty-five per cent profit.", V.eq('profit = £2') + V.eq('2/8 = 25%', 'g'))]),
      REC("To find the best buy, work out the price per unit. Profit is selling price minus cost price.", ['Price per unit', 'Compare', 'Profit % = profit ÷ cost × 100'])] }
  ]);

  /* 706 PATTERNS AND ALGEBRA */
  BT.story(706, 'Watch', [
    { title: 'The nth term', goal: 'how to find the nth term of a linear sequence.', scenes: [
      SC('Finding the nth term', '5, 8, 11, 14', [
        st("The sequence is five, eight, eleven, fourteen. It goes up by three each time, so the rule starts three n. Three n gives three, six, nine, twelve.", V.tbl([['n', '1', '2', '3', '4'], ['3n', '3', '6', '9', '12'], ['term', '5', '8', '11', '14']], [])),
        st("Compare with the real terms. Each is two more, so the nth term is three n plus two.", V.eq('nth term = 3n + 2', 'g')),
        st("Is fifty in the sequence? Solve three n plus two equals fifty. Three n is forty-eight, n is sixteen. It is a whole number, so yes, it is the sixteenth term.", V.eq('3n + 2 = 50 → n = 16 ✓', 'g'))]),
      REC("The number in front of n is the step. Then adjust to match the terms. To test a number, solve the equation for n.", ['Step = number in front of n', 'Adjust with + or −', 'Test with an equation'])] },
    { title: 'Equations with brackets and letters on both sides', goal: 'how to solve harder equations.', scenes: [
      SC('Brackets', '3(x − 2) = 15', [
        st("Three brackets x minus two equals fifteen. Divide both sides by three first: x minus two equals five. Then add two. x is seven.", V.eq('3(x − 2) = 15') + V.eq('x − 2 = 5') + V.eq('x = 7', 'g'))]),
      SC('Letters on both sides', '5x − 4 = 2x + 8', [
        st("When x is on both sides, collect the x terms on one side. Take away two x from both sides: three x minus four equals eight. Add four: three x equals twelve. So x is four.", V.eq('3x − 4 = 8') + V.eq('3x = 12') + V.eq('x = 4', 'g')),
        st("Check both sides. Five times four minus four is sixteen. Two times four plus eight is sixteen. They match.", V.eq('16 = 16 ✓', 'g'))]),
      REC("Do the same to both sides. Collect the letters on one side and the numbers on the other.", ['Expand or divide first', 'Collect x terms', 'Check both sides'])] }
  ]);

  /* 707 SHAPE AND ANGLES */
  BT.story(707, 'Watch', [
    { title: 'Angles in polygons', goal: 'how to find interior angle sums of polygons.', scenes: [
      SC('Splitting into triangles', 'The sum of interior angles', [
        st("Split any polygon into triangles from one corner. Each triangle has angles adding to one hundred and eighty. A pentagon makes three triangles, so its angles add to five hundred and forty degrees.", V.tbl([['Triangle', '1', '180°'], ['Quadrilateral', '2', '360°'], ['Pentagon', '3', '540°'], ['Hexagon', '4', '720°']], ['Shape', 'Triangles', 'Angle sum'])),
        st("The rule is: the number of sides minus two, times one hundred and eighty.", V.eq('(n − 2) × 180', 'g'))]),
      SC('Regular polygons', 'All angles equal', [
        st("In a regular pentagon all five angles are equal. Five hundred and forty divided by five is one hundred and eight degrees each. For a regular hexagon, seven twenty divided by six is one hundred and twenty.", V.eq('540 ÷ 5 = 108°') + V.eq('720 ÷ 6 = 120°', 'g'))]),
      REC("Angle sum is sides minus two, times one hundred and eighty. Divide by the number of sides for a regular polygon.", ['(n − 2) × 180', 'Regular: divide by n'])] },
    { title: 'Angles in parallel lines', goal: 'how to use corresponding, alternate and co-interior angles.', scenes: [
      SC('Corresponding angles', 'The F shape', [
        st("When a line crosses two parallel lines, some angles are equal. Corresponding angles sit in the same position at each crossing. Look for an F shape. They are equal.", par([[155, 72, '65°'], [215, 152, '65°']]))]),
      SC('Alternate angles', 'The Z shape', [
        st("Alternate angles are on opposite sides of the crossing line, between the parallels. Look for a Z shape. They are equal too.", par([[155, 72, '65°'], [138, 130, '65°']]))]),
      SC('Co-interior angles', 'The C shape', [
        st("Co-interior angles are on the same side, between the parallel lines. Look for a C shape. They add up to one hundred and eighty degrees. So if one is sixty-five, the other is one hundred and fifteen.", par([[155, 72, '65°'], [203, 130, '115°']]) + V.eq('180 − 65 = 115°', 'g'))]),
      REC("F: corresponding, equal. Z: alternate, equal. C: co-interior, add to one eighty.", ['F: corresponding, equal', 'Z: alternate, equal', 'C: co-interior, sum 180°'])] }
  ]);

  /* 708 DATA AND CHANCE */
  BT.story(708, 'Watch', [
    { title: 'Mean from a frequency table', goal: 'how to find the mean when data is in a frequency table.', scenes: [
      SC('Frequency table', 'Scores out of 3', [
        st("Ten pupils scored one, two or three. The frequency table shows how many got each score. Two pupils scored one, five scored two, and three scored three.", V.tbl([['1', '2'], ['2', '5'], ['3', '3']], ['Score', 'Frequency'])),
        st("To find the mean, multiply each score by its frequency, and add. Two, ten and nine make twenty-one. Divide by the ten pupils.", V.eq('1×2 + 2×5 + 3×3 = 2 + 10 + 9 = 21') + V.eq('21 ÷ 10 = 2.1', 'g'))]),
      REC("Score times frequency, add them, then divide by the total frequency.", ['Score × frequency', 'Add up', 'Divide by total frequency'])] },
    { title: 'Pie charts and combined probability', goal: 'how to read a pie chart and list outcomes.', scenes: [
      SC('Pie charts', '24 pupils, 360 degrees', [
        st("A whole pie is three hundred and sixty degrees. For twenty-four pupils, each pupil is fifteen degrees. Six pupils is ninety degrees, a quarter. Twelve pupils is one eighty, a half.", V.pie([[90, 'var(--accent)', '6'], [180, 'var(--good)', '12'], [90, 'var(--bad)', '6']]) + V.eq('360 ÷ 24 = 15° each', 'g'))]),
      SC('Two coins', 'Listing outcomes', [
        st("Flip two coins. List all the outcomes: head head, head tail, tail head, tail tail. That is four equally likely outcomes.", V.cards(['HH', 'HT', 'TH', 'TT'], ['g', 'b', 'b', 'r'], true)),
        st("Only one is two heads, so the chance is one quarter. Three of them have at least one head, so that chance is three quarters.", V.eq('P(HH) = 1/4') + V.eq('P(at least one H) = 3/4', 'g'))]),
      REC("Divide three sixty by the total for each degree. List every outcome to find a probability.", ['Angle = share × 360°', 'List all outcomes', 'Favourable ÷ total'])] }
  ]);

  /* 709 MIXED REASONING */
  BT.story(709, 'Watch', [
    { title: 'Algebra in problems', goal: 'how to turn a story into an equation.', scenes: [
      SC('Think of a number', 'Write it as an equation', [
        st("I think of a number, multiply by three, take away four, and get twenty. Call my number n. Write what happens as an equation.", V.eq('3n − 4 = 20', 'b')),
        st("Add four to both sides: three n equals twenty-four. Divide by three: n is eight. Check: three eights are twenty-four, minus four is twenty.", V.eq('3n = 24') + V.eq('n = 8', 'g'))]),
      SC('Sharing with a bar model', '£48 shared so one is 3 times the other', [
        st("Forty-eight pounds is shared between two people. One gets three times as much as the other. That is one part plus three parts, four parts. Forty-eight divided by four is twelve.", V.bm([['A', [[50, '1']]], ['B', [[150, '3']]]]) + V.eq('48 ÷ 4 = £12')),
        st("So one person gets twelve pounds and the other gets thirty-six.", V.eq('£12 and £36', 'g'))]),
      REC("Call the unknown a letter, write an equation, solve it, and check it in the story.", ['Name the unknown', 'Write the equation', 'Solve', 'Check in the story'])] },
    { title: 'Reasoning and counterexamples', goal: 'how to test whether a statement is always true.', scenes: [
      SC('Always, sometimes, never', 'Odd plus odd', [
        st("Is it always true that odd plus odd is even? Try examples: three plus five is eight. Seven plus nine is sixteen. One plus one is two. Each time it is even.", V.eq('3 + 5 = 8   7 + 9 = 16   1 + 1 = 2', 'g')),
        st("Examples build confidence, but one counterexample can break a rule. For a statement like all prime numbers are odd, the number two is a counterexample.", V.rule('One counterexample disproves a statement.') + V.eq('2 is prime and even ✗', 'r'))]),
      REC("Test with examples, look for patterns, and one counterexample is enough to show something is false.", ['Try examples', 'Look for a pattern', 'A counterexample disproves'])] }
  ]);

  /* 710 FACTORS */
  BT.story(710, 'Watch', [
    { title: 'Prime factors, HCF and LCM', goal: 'how to use prime factors to find the HCF and LCM.', scenes: [
      SC('Prime factorisation', '24 and 36', [
        st("Write twenty-four as primes: two times two times two times three, or two cubed times three. Write thirty-six as two squared times three squared.", V.eq('24 = 2³ × 3') + V.eq('36 = 2² × 3²')),
        st("For the highest common factor, take the smaller power of each prime: two squared and three. Four times three is twelve.", V.eq('HCF = 2² × 3 = 12', 'g')),
        st("For the lowest common multiple, take the bigger power of each prime: two cubed and three squared. Eight times nine is seventy-two.", V.eq('LCM = 2³ × 3² = 72', 'g'))]),
      REC("Write both numbers as products of primes. HCF takes the smaller powers. LCM takes the bigger powers.", ['HCF: smaller powers', 'LCM: bigger powers', 'Check by dividing'])] },
    { title: 'Powers and roots', goal: 'squares, cubes and their roots.', scenes: [
      SC('Squares and cubes', 'Indices', [
        st("A square number is a number times itself. Twelve squared is a hundred and forty-four. The square root goes backwards: the square root of one hundred and forty-four is twelve.", V.eq('12² = 144') + V.eq('√144 = 12', 'g')),
        st("A cube is a number multiplied by itself three times. Five cubed is a hundred and twenty-five. The cube root of twenty-seven is three, because three cubed is twenty-seven.", V.eq('5³ = 125') + V.eq('∛27 = 3', 'g'))]),
      REC("Squares and cubes multiply a number by itself. Roots undo them.", ['n² = n × n', 'n³ = n × n × n', 'Roots undo powers'])] }
  ]);

  /* 711 RATIO, PROPORTION, MONEY */
  BT.story(711, 'Watch', [
    { title: 'Ratio problems', goal: 'how to share in a ratio with three parts and use a known share.', scenes: [
      SC('Three-way sharing', '£120 in the ratio 2 : 3 : 7', [
        st("Share a hundred and twenty pounds in the ratio two to three to seven. Add the parts: two plus three plus seven is twelve. A hundred and twenty divided by twelve is ten pounds a part.", V.bm([['A', [[40, '2']]], ['B', [[60, '3']]], ['C', [[140, '7']]]]) + V.eq('120 ÷ 12 = £10')),
        st("So the shares are twenty, thirty and seventy pounds. Twenty plus thirty plus seventy is a hundred and twenty.", V.eq('£20 + £30 + £70 = £120 ✓', 'g'))]),
      SC('Using one known share', 'A gets £30 in the ratio 3 : 4', [
        st("In the ratio three to four, A gets thirty pounds. Three parts are thirty, so one part is ten. B has four parts, which is forty pounds.", V.eq('3 parts = £30 → 1 part = £10') + V.eq('B = 4 × 10 = £40', 'g'))]),
      REC("Add the parts, find one part, multiply. If you are given one share, work out one part from that.", ['Add the parts', 'Find one part', 'Multiply', 'Check the total'])] },
    { title: 'Proportion, exchange and interest', goal: 'direct and inverse proportion, currency and simple interest.', scenes: [
      SC('Exchange rates', '£1 = €1.15', [
        st("If one pound is worth one euro fifteen, then eighty pounds is eighty times one point one five: ninety-two euros. This is direct proportion. Double the pounds, double the euros.", V.eq('80 × 1.15 = €92', 'g'))]),
      SC('Inverse proportion', 'Workers and days', [
        st("Four workers take six days to build a wall. With eight workers, the job takes half the time: three days. More workers, fewer days. That is inverse proportion. The total work is twenty-four worker-days either way.", V.eq('4 × 6 = 24 = 8 × 3', 'g'))]),
      SC('Simple interest', '£500 at 4% for 3 years', [
        st("Simple interest is the same amount each year. Four per cent of five hundred pounds is twenty pounds. For three years that is sixty pounds.", V.eq('4% of £500 = £20') + V.eq('£20 × 3 = £60', 'g'))]),
      REC("Direct: both go up together. Inverse: one goes up, the other goes down. Simple interest is the same each year.", ['Direct: multiply or divide', 'Inverse: product stays the same', 'Interest = % × amount × years'])] }
  ]);

  /* 712 VOLUME, DIRECTION, SCALE, SPEED */
  BT.story(712, 'Watch', [
    { title: 'Volume and scale', goal: 'how to find the volume of a cuboid and use map scales.', scenes: [
      SC('Volume of a cuboid', 'Length × width × height', [
        st("Volume is the space inside a solid. For a cuboid five centimetres by four by three, multiply the three lengths. Five times four is twenty, times three is sixty cubic centimetres.", V.dots(2, 3, 'var(--good)') + V.eq('5 × 4 × 3 = 60 cm³', 'g'))]),
      SC('Map scales', 'Scale 1 : 50,000', [
        st("A map scale of one to fifty thousand means one centimetre on the map is fifty thousand centimetres in real life. So four centimetres is two hundred thousand centimetres.", V.eq('4 × 50,000 = 200,000 cm')),
        st("Change to metres by dividing by a hundred: two thousand metres. That is two kilometres.", V.eq('200,000 cm = 2,000 m = 2 km', 'g'))]),
      REC("Volume is length times width times height. On a map, multiply by the scale and change units.", ['V = l × w × h', 'Map × scale = real', 'Change the units'])] },
    { title: 'Speed, distance, time and bearings', goal: 'how to use the speed formula and read bearings.', scenes: [
      SC('The speed triangle', 'Speed = distance ÷ time', [
        st("Speed is how far you go in one hour. A car goes a hundred and fifty kilometres in two and a half hours. Divide: sixty kilometres per hour.", V.eq('150 ÷ 2.5 = 60 km/h', 'g')),
        st("Rearrange it. Time is distance divided by speed, so ninety kilometres at forty-five an hour takes two hours. Distance is speed times time, so twelve kilometres an hour for one and a half hours is eighteen kilometres.", V.eq('90 ÷ 45 = 2 h') + V.eq('12 × 1.5 = 18 km', 'g'))]),
      SC('Bearings', 'Clockwise from north', [
        st("A bearing is an angle measured clockwise from north, always with three digits. North is zero zero zero. East is zero nine zero. South is one eight zero. West is two seven zero.", V.tbl([['North', '000°'], ['East', '090°'], ['South', '180°'], ['West', '270°']], ['Direction', 'Bearing']))]),
      REC("Speed is distance over time. Bearings go clockwise from north, with three figures.", ['S = D ÷ T', 'D = S × T, T = D ÷ S', 'Bearings: clockwise from north'])] }
  ]);

  /* 713 SPATIAL */
  BT.story(713, 'Watch', [
    { title: 'Surface area and views', goal: 'how to find the surface area of a cuboid.', scenes: [
      SC('Surface area', 'Add all the faces', [
        st("Surface area is the total area of all the faces. A cuboid five by four by three has three pairs of matching faces. The pairs are twenty, fifteen and twelve.", V.tbl([['5 × 4', '20'], ['5 × 3', '15'], ['4 × 3', '12']], ['Pair of faces', 'Area'])),
        st("Add them, forty-seven, and double it, because each face appears twice. Surface area is ninety-four square centimetres.", V.eq('2 × (20 + 15 + 12) = 94 cm²', 'g'))]),
      REC("Find the three different face areas, add them, and double.", ['Three pairs of faces', 'Add the areas', 'Double'])] },
    { title: 'Transformations', goal: 'how to translate, rotate and enlarge shapes.', scenes: [
      SC('Translation', 'Move by (3, −2)', [
        st("A translation slides a shape without turning it. The vector three, minus two means three right and two down. The triangle's corners all move the same way, from one, four to four, two.", V.grid(8, [[[[1, 4], [1, 6], [3, 4]], 'var(--accent)'], [[[4, 2], [4, 4], [6, 2]], 'var(--good)']]) + V.eq('(1, 4) → (4, 2)', 'g'))]),
      SC('Rotation and enlargement', 'Describe fully', [
        st("A rotation needs a centre, an angle and a direction. Turning the point two, one a quarter turn clockwise about the origin sends it to one, minus two.", V.eq('(x, y) → (y, −x)') + V.eq('(2, 1) → (1, −2)', 'g')),
        st("An enlargement needs a centre and a scale factor. Scale factor two from the origin doubles every coordinate. One, two becomes two, four.", V.eq('(1, 2) → (2, 4)', 'g'))]),
      REC("Translation needs a vector. Rotation needs a centre, angle and direction. Enlargement needs a centre and a scale factor.", ['Translation: vector', 'Rotation: centre, angle, direction', 'Enlargement: centre, scale factor'])] }
  ]);
})();
