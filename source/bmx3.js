/* bmx3.js: lesson parts ("learn8") for the S1, S2 and S3 gaps filled by bmx2.js. */
(function () {
  'use strict';
  var S = Studio, K = S.kit, BT = window.BT;
  if (!BT || !BT.add || !BT.bmx2) return;
  var sl = BT.sl, XV = BT.XV, P = BT.bmx2.pics, hs = BT.hs, svg = BT.svg, txt = BT.txt;
  function table(rows, heads) { return K.table(rows, heads); }
  var pw = P.pw;

  function L_pow() {
    return [
      XV('Writing numbers as powers', 'Write 81 as a power of 3.', ['Keep multiplying 3 by itself: 3 × 3 = 9, 9 × 3 = 27, 27 × 3 = 81.', 'You used four 3s.', 'So 81 = 3 × 3 × 3 × 3 = ' + pw(3, 4) + '.'], '81 = ' + pw(3, 4),
        function () { return table([[pw(3, 1), '3'], [pw(3, 2), '9'], [pw(3, 3), '27'], [pw(3, 4), '81']], ['Power', 'Value']); },
        'Computer memory doubles each time: 2, 4, 8, 16, 32 … These are the powers of 2.', 'how to write a number as a power and how to work a power out.',
        ['The base is the number being multiplied. The index tells you how many of them to multiply.', 'To write a number as a power, divide by the base again and again and count the steps.'],
        ['Example 1: ' + pw(2, 5) + ' = 2 × 2 × 2 × 2 × 2 = 32.', 'Example 2: 125 = 5 × 5 × 5 = ' + pw(5, 3) + '.', 'Example 3: 10,000 = ' + pw(10, 4) + '.'])
    ];
  }
  function L_index() {
    return [
      XV('Laws of indices', 'Simplify ' + pw(2, 5) + ' × ' + pw(2, 3) + '.', ['Both powers have the same base, 2.', 'When you multiply powers with the same base, add the indices: 5 + 3 = 8.', 'So ' + pw(2, 5) + ' × ' + pw(2, 3) + ' = ' + pw(2, 8) + '.'], pw(2, 8),
        function () { return table([['Multiply', 'add the indices'], ['Divide', 'subtract the indices'], [pw('a', 0), '1'], [pw('a', -1), '1 ÷ a']], ['Rule', 'What to do']); },
        'Scientists write huge and tiny numbers as powers, so they can multiply them without writing every zero.', 'the rules for multiplying and dividing powers.',
        ['The rules only work when the bases are the same.', 'Any non-zero number to the power 0 is 1. A negative index means “one over”.'],
        ['Example 1: ' + pw(3, 4) + ' × ' + pw(3, 2) + ' = ' + pw(3, 6) + '.', 'Example 2: ' + pw(5, 7) + ' ÷ ' + pw(5, 3) + ' = ' + pw(5, 4) + '.', 'Example 3: ' + pw(2, -3) + ' = 1/8.'])
    ];
  }
  function L_mf() {
    return [
      XV('Multiples and factors in context', 'A bus leaves every 6 minutes and a tram every 8 minutes. They leave together at 9:00. When do they leave together again?', ['“Together again” means a common multiple of 6 and 8.', 'Multiples of 6: 6, 12, 18, 24 …', 'Multiples of 8: 8, 16, 24 …', 'The lowest common multiple is 24, so they leave together again after 24 minutes, at 9:24.'], '9:24',
        function () { return table([['6', '6, 12, 18, 24'], ['8', '8, 16, 24']], ['Number', 'Multiples']); },
        'Timetables, flashing lights and gear teeth all repeat on a cycle, which is a multiple problem.', 'how to decide between LCM and HCF in a word problem.',
        ['Meeting again later → lowest common multiple (LCM).', 'Cutting or sharing into equal pieces → highest common factor (HCF).'],
        ['Example 1: Lights flash every 4 s and 6 s. Together every 12 s.', 'Example 2: Planks 12 cm and 18 cm cut into equal pieces: the longest piece is 6 cm.', 'Example 3: 20 pens and 30 rubbers shared into identical packs: 10 packs.'])
    ];
  }
  function L_improper() {
    return [
      XV('Improper fractions and mixed numbers', 'Write 17/5 as a mixed number.', ['Divide the numerator by the denominator: 17 ÷ 5 = 3 remainder 2.', 'The whole number is 3.', 'The remainder 2 goes over the denominator 5.', 'So 17/5 = 3 2/5.'], '17/5 = 3 2/5',
        function () { return table([['17/5', '3 whole ones and 2/5'], ['3 2/5', '3 × 5 + 2 = 17, so 17/5']], ['Form', 'Meaning']); },
        'Three and two fifths of a pizza is more than one pizza, so it is a mixed number.', 'how to change between improper fractions and mixed numbers.',
        ['An improper fraction has a numerator bigger than its denominator.', 'To go back: whole × denominator + numerator, over the same denominator.'],
        ['Example 1: 7/2 = 3 1/2.', 'Example 2: 2 3/4 = 11/4.', 'Example 3: 13/3 = 4 1/3.'])
    ];
  }
  function L_pctchg() {
    return [
      XV('Percentage increase and decrease', 'A £60 jacket is reduced by 25%. What is the sale price?', ['Find 25% of £60. 25% is a quarter: £60 ÷ 4 = £15.', 'It is a reduction, so subtract: £60 − £15.', 'The sale price is £45.'], '£45',
        function () { return table([['10%', '÷ 10'], ['25%', '÷ 4'], ['50%', '÷ 2'], ['1%', '÷ 100']], ['Percentage', 'Quick method']); },
        'Shops show sales as a percentage off the original price.', 'how to increase or decrease an amount by a percentage.',
        ['Increase: add the percentage on. Decrease: take it off.', 'You can also use a multiplier: a 25% decrease is × 0.75.'],
        ['Example 1: £80 increased by 10% = £88.', 'Example 2: £200 reduced by 30% = £140.', 'Example 3: 50 kg increased by 20% = 60 kg.'])
    ];
  }
  function L_wage() {
    return [
      XV('Wages and VAT', 'Ria earns £12 an hour. She works 30 normal hours and 4 hours of overtime at time and a half. What does she earn?', ['Normal pay: 30 × £12 = £360.', 'Overtime rate: £12 × 1.5 = £18 an hour.', 'Overtime pay: 4 × £18 = £72.', 'Total: £360 + £72 = £432.'], '£432',
        function () { return table([['Normal', '30 × £12', '£360'], ['Overtime', '4 × £18', '£72'], ['Total', '', '£432']], ['Type', 'Working', 'Pay']); },
        'Many jobs pay extra for overtime and weekend hours.', 'how to work out pay with overtime, and prices with VAT.',
        ['VAT is a tax on goods and services. It is 20% in the UK.', 'To add VAT: price × 1.2. To remove it: divide by 1.2.'],
        ['Example 1: £50 + 20% VAT = £60.', 'Example 2: A price including VAT of £144 is £120 before VAT.', 'Example 3: 8 hours at £11 = £88.'])
    ];
  }
  function L_stmt() {
    return [
      XV('Reading a bank statement', 'The opening balance is £90. £450 wages goes in, then £30 and £200 go out. What is the final balance?', ['Start at £90.', 'Money in: £90 + £450 = £540.', 'Money out: £540 − £30 = £510.', 'Money out again: £510 − £200 = £310.'], '£310',
        function () { return P.stmtPic(90, [{ d: '3 Mar', t: 'Wages', inn: 450 }, { d: '5 Mar', t: 'Phone bill', out: 30 }, { d: '9 Mar', t: 'Rent', out: 200 }]); },
        'A bank statement lists every payment in and out, so you can check your money.', 'how to read a bank statement and find the balance.',
        ['“In” adds to the balance. “Out” takes away from it.', 'Check: opening balance + total in − total out = final balance.'],
        ['Example 1: £100 + £50 in − £30 out = £120.', 'Example 2: A negative balance means you are overdrawn.', 'Example 3: Total out of £30 + £200 = £230.'])
    ];
  }
  function L_budget() {
    return [
      XV('Budgeting with a monthly income', 'Jo earns £2,400 a month. Rent £900, bills £150, food £300, travel £100. How much is left to save?', ['Add the spending: £900 + £150 + £300 + £100 = £1,450.', 'Subtract from the income: £2,400 − £1,450 = £950.', 'Jo can save £950 a month.'], '£950',
        function () { return table([['Income', '£2,400'], ['Rent', '£900'], ['Bills', '£150'], ['Food', '£300'], ['Travel', '£100'], ['Left to save', '£950']], ['Item', 'Amount']); },
        'A budget lets you plan to save for something big, like a holiday.', 'how to plan income against spending.',
        ['A percentage of income spent on rent: £900 ÷ £2,400 × 100 = 37.5%.', 'Compare needs (rent, food) with wants.'],
        ['Example 1: Income £1,800, spending £1,500: £300 left.', 'Example 2: £400 ÷ £2,000 = 20% on food.', 'Example 3: Saving £950 a month for 12 months = £11,400.'])
    ];
  }
  function L_days() {
    return [
      XV('Days and dates', 'How many days are there from 20 March to 8 April?', ['March has 31 days. Days left in March after the 20th: 31 − 20 = 11.', 'Then count the days into April: 8.', '11 + 8 = 19 days.'], '19 days',
        function () { return table([['January', '31', 'July', '31'], ['February', '28', 'August', '31'], ['March', '31', 'September', '30'], ['April', '30', 'October', '31'], ['May', '31', 'November', '30'], ['June', '30', 'December', '31']], ['Month', 'Days', 'Month', 'Days']); },
        'Delivery dates and holiday lengths are all counted in days.', 'how to count days across months.',
        ['“30 days has September, April, June and November.”', 'To find an end date, count the days left in the month and carry on.'],
        ['Example 1: 25 Jan to 3 Feb = 6 + 3 = 9 days.', 'Example 2: 10 days after 25 June is 5 July.', 'Example 3: February has 28 days (29 in a leap year).'])
    ];
  }
  function L_zone() {
    return [
      XV('Time zones', 'Tokyo is 9 hours ahead of London. It is 15:00 in London. What time is it in Tokyo?', ['Ahead means later, so add 9 hours.', '15:00 + 9 hours = 24:00, which is 00:00.', 'It is midnight in Tokyo, the start of the next day.'], '00:00 the next day',
        function () { return table([['Paris', '+1'], ['Dubai', '+4'], ['Tokyo', '+9'], ['New York', '−5']], ['City', 'Hours from London']); },
        'A video call between London and Tokyo has to fit into both working days.', 'how to change the time between places.',
        ['Ahead of London: add hours. Behind London: subtract hours.', 'If you pass 24:00, move to the next day.'],
        ['Example 1: 10:00 in London is 14:00 in Dubai (add 4).', 'Example 2: 18:00 London = 13:00 in New York.', 'Example 3: 22:00 London = 07:00 the next day in Tokyo.'])
    ];
  }
  function L_angname() {
    return [
      sl('Naming angles with three letters', ['An angle is named with three letters. The middle letter is the corner, where the two lines meet.', 'The angle at corner R between points P and Z is ∠PRZ. You can also write it ∠ZRP.', 'A small curved arc shows which angle you mean.'],
        BT.hs ? svg(260, 140, 'An angle at point R between points P and Z', '<line x1="130" y1="118" x2="190" y2="68" style="stroke:var(--fg);stroke-width:2.5"/><line x1="130" y1="118" x2="208" y2="118" style="stroke:var(--fg);stroke-width:2.5"/><path d="M152 118 A22 22 0 0 0 146 102" style="fill:none;stroke:var(--accent);stroke-width:3"/>' + txt(122, 136, 'R', 15, 'middle', ';font-weight:700') + txt(196, 62, 'P', 15, 'middle', ';font-weight:700') + txt(220, 123, 'Z', 15, 'middle', ';font-weight:700'), 260) : '',
        'Maps and diagrams use letters so everybody knows exactly which angle is meant.', 'how to name an angle with three letters.',
        ['The middle letter is always the corner.', 'Both ∠PRZ and ∠ZRP name the same angle.'], ['Example 1: Lines meeting at B between A and C: ∠ABC.', 'Example 2: The angle at corner Q between P and R is ∠PQR.', 'Example 3: ∠XYZ has its corner at Y.'])
    ];
  }
  function L_prot() {
    return [
      XV('Measuring with a protractor', 'Measure the angle between the thick arm and the red line.', ['Put the centre of the protractor on the corner of the angle.', 'Line the base line up with the arm.', 'Find the 0 on the arm and use the scale that starts there.', 'Read where the red line crosses that scale: 40°.'], '40°',
        function () { return P.protPic(40, false); },
        'Builders and designers use a protractor to measure and draw exact angles.', 'how to read the correct scale on a protractor.',
        ['Two scales run in opposite directions. Use the one that starts at 0 on the arm.', 'Check: an acute angle is under 90°, an obtuse angle is between 90° and 180°.'],
        ['Example 1: A small angle reads about 30°.', 'Example 2: An obtuse angle reads about 120°.', 'Example 3: A straight line is 180°.'])
    ];
  }
  function L_compsupp() {
    return [
      XV('Complementary and supplementary angles', 'Find the angle that is complementary to 35°, and the angle that is supplementary to 35°.', ['Complementary angles add up to 90°: 90° − 35° = 55°.', 'Supplementary angles add up to 180°: 180° − 35° = 145°.'], '55° and 145°',
        function () { return table([['Complementary', '90°', '90° − 35° = 55°'], ['Supplementary', '180°', '180° − 35° = 145°']], ['Pair', 'Total', 'Example']); },
        'A set square makes a right angle, which splits into two complementary angles.', 'what complementary and supplementary mean.',
        ['Complementary: forms a right angle. Supplementary: forms a straight line.', 'With algebra: x + 2x = 90 gives 3x = 90, so x = 30.'],
        ['Example 1: 90° − 20° = 70°.', 'Example 2: 180° − 120° = 60°.', 'Example 3: x and 2x supplementary: 3x = 180, x = 60.'])
    ];
  }
  function L_construct() {
    return [
      XV('Constructing a triangle with a compass', 'Construct a triangle with sides 6 cm, 4 cm and 5 cm.', ['Draw the 6 cm base AB with a ruler.', 'Set the compass to 4 cm. Put the point on A and draw an arc.', 'Set the compass to 5 cm. Put the point on B and draw a second arc.', 'Where the arcs cross is the third corner. Join it to A and B.'], 'A triangle with sides 6, 4 and 5',
        function () { return P.arcPic(6, 4, 5); },
        'Architects and engineers draw accurate triangles for roof frames and bridges.', 'how to construct a triangle from three sides.',
        ['The two shorter sides must add up to more than the longest, or the arcs will not meet.', 'Two sides and the angle between them (SAS), or two angles and a side (ASA), also fix one exact triangle.'],
        ['Example 1: 3, 4, 5 works because 3 + 4 > 5.', 'Example 2: 2, 3, 7 does not work because 2 + 3 < 7.', 'Example 3: Three angles only give the shape, not the size.'])
    ];
  }
  function L_solid() {
    return [
      sl('Prisms and pyramids', ['A prism has the same cross-section all the way along. A pyramid has a flat base and tapers to a point.', 'A triangular prism: 5 faces, 6 vertices, 9 edges. A square-based pyramid: 5 faces, 5 vertices, 8 edges.', 'Euler’s check: faces + vertices − edges = 2.'],
        table([['Triangular prism', '5', '6', '9'], ['Cuboid', '6', '8', '12'], ['Square-based pyramid', '5', '5', '8'], ['Hexagonal prism', '8', '12', '18']], ['Solid', 'Faces', 'Vertices', 'Edges']),
        'Tents are prisms, and the Egyptian pyramids are square-based pyramids.', 'the properties of prisms and pyramids.', ['For an n-sided prism: n + 2 faces, 2n vertices, 3n edges.', 'For an n-sided pyramid: n + 1 faces, n + 1 vertices, 2n edges.'],
        ['Example 1: A pentagonal prism has 7 faces.', 'Example 2: A hexagonal pyramid has 7 vertices.', 'Example 3: 7 + 10 − 15 = 2 for a pentagonal prism.'])
    ];
  }
  function L_sample() {
    return [
      sl('Fair samples and survey questions', ['We usually ask a sample, not everybody. A fair sample is chosen at random and is large enough.', 'Asking only your friends, or only one group, gives a biased sample.', 'A fair question is neutral. A leading question pushes people towards one answer.'],
        table([['Random, large, mixed', 'Fair'], ['Only friends or one team', 'Biased'], ['Too few people', 'Unreliable'], ['“Don’t you agree it’s awful?”', 'Leading']], ['Sample or question', 'Verdict']),
        'Polls before an election ask a few thousand people chosen to represent everyone.', 'how to tell a fair sample and a fair question from a biased one.',
        ['A bigger random sample is more reliable.', 'Always think about who was left out.'],
        ['Example 1: 30 random pupils is fairer than 3 friends.', 'Example 2: “How would you rate the lunches?” is fair.', 'Example 3: A survey outside a sports shop is biased towards sport fans.'])
    ];
  }
  function L_tally() {
    return [
      sl('Tally charts and two-way tables', ['A tally chart records data as it is collected. Four lines with a fifth across them make a group of 5.', 'A two-way table sorts people by two features at once, with totals for each row and column.', 'Use the totals to find a missing number.'],
        table([['Boys', '14', '6', '20'], ['Girls', '10', '?', '17'], ['Total', '24', '', '37']], ['', 'Walk', 'Bus', 'Total']),
        'A school survey on travel can be recorded with tallies and then sorted by year group in a two-way table.', 'how to count a tally and use a two-way table.',
        ['Count the groups of 5 first, then the single lines.', 'Each row and column adds up to its total.'], ['Example 1: one group of five plus three single lines is 5 + 3 = 8.', 'Example 2: 17 − 10 = 7 girls take the bus.', 'Example 3: Add the column totals to check the grand total.'])
    ];
  }
  function L_trend() {
    return [
      sl('Describing trends and spotting misleading graphs', ['A trend is the overall pattern in data over time: rising, falling, steady, or changing direction.', 'Describe a trend in words and say when it changes.', 'A graph can mislead if the axis does not start at 0, has no labels, or has an uneven scale.'],
        table([['Line goes up', 'Rising trend'], ['Line goes down', 'Falling trend'], ['Up then down', 'A peak'], ['Axis starts at 80', 'Differences look bigger']], ['What you see', 'What it means']),
        'News graphs sometimes start the axis high to make a small change look dramatic.', 'how to describe a trend and check a graph is fair.',
        ['Read the axes before you read the line.', 'A fair graph has a title, labels and an even scale.'], ['Example 1: Sales rise each month: a rising trend.', 'Example 2: Rises to June then falls: a peak in June.', 'Example 3: A bar chart axis starting at 80 exaggerates small differences.'])
    ];
  }
  function L_relfreq() {
    return [
      XV('Relative frequency and expected outcomes', 'A spinner lands on blue 30 times in 50 spins. What is the relative frequency of blue? How many blues would you expect in 200 spins?', ['Relative frequency = 30 ÷ 50 = 0.6.', 'Expected number = probability × number of trials.', '0.6 × 200 = 120.'], '0.6 and 120',
        function () { return table([['Relative frequency', 'times it happens ÷ number of trials'], ['Expected number', 'probability × number of trials']], ['Idea', 'Rule']); },
        'Weather forecasters use past results to say how likely rain is.', 'how to use results to estimate probability and predict outcomes.',
        ['More trials make relative frequency closer to the true probability.', 'Expected is an average, not a promise.'], ['Example 1: 18 heads in 40 tosses: 0.45.', 'Example 2: P = 0.25, 400 trials: expect 100.', 'Example 3: 6 sixes in 60 rolls: 0.1.'])
    ];
  }
  function L_est() {
    return [
      XV('Estimating by rounding to 1 significant figure', 'Estimate 48.7 × 5.2.', ['Round each number to 1 significant figure: 48.7 → 50 and 5.2 → 5.', 'Multiply the rounded numbers: 50 × 5 = 250.', 'So 48.7 × 5.2 is about 250. (The exact answer is 253.24.)'], '≈ 250',
        function () { return table([['48.7', '50'], ['5.2', '5'], ['50 × 5', '250']], ['Number', 'Rounded to 1 s.f.']); },
        'Checking a bill in your head uses estimating to spot big mistakes.', 'how to estimate a calculation quickly.',
        ['The first non-zero digit is the 1st significant figure.', 'An estimate is a check, not an exact answer.'], ['Example 1: 612 ÷ 29 ≈ 600 ÷ 30 = 20.', 'Example 2: 0.48 × 19.6 ≈ 0.5 × 20 = 10.', 'Example 3: 3,980 + 5,120 ≈ 4,000 + 5,000 = 9,000.'])
    ];
  }
  function L_areaconv() {
    return [
      XV('Converting units of area and volume', 'Convert 3 m² to cm².', ['1 m = 100 cm.', 'For area, square the scale factor: 100 × 100 = 10,000.', '3 × 10,000 = 30,000 cm².'], '30,000 cm²',
        function () { return table([['Length', '1 m = 100 cm'], ['Area', '1 m² = 10,000 cm²'], ['Volume', '1 m³ = 1,000,000 cm³'], ['Capacity', '1 litre = 1,000 cm³']], ['Type', 'Conversion']); },
        'A carpet sold in m² but a floor measured in cm needs the conversion.', 'how to convert units of area and volume.',
        ['Area: square the length factor. Volume: cube it.', 'Do not use 100 for area. It is 100 × 100.'], ['Example 1: 1 cm² = 100 mm².', 'Example 2: 2 litres = 2,000 cm³.', 'Example 3: 5 m³ = 5,000,000 cm³.'])
    ];
  }
  function L_fq() {
    return [
      XV('Factorising quadratics', 'Factorise x² + 7x + 12.', ['Find two numbers that multiply to 12 and add to 7.', '3 × 4 = 12 and 3 + 4 = 7.', 'So x² + 7x + 12 = (x + 3)(x + 4).', 'Check by expanding: x² + 4x + 3x + 12 = x² + 7x + 12.'], '(x + 3)(x + 4)',
        function () { return table([['Multiply to', '12 (the number)'], ['Add to', '7 (the x term)'], ['Numbers', '3 and 4']], ['Clue', 'Value']); },
        'Quadratics describe the path of a ball and the area of a rectangle.', 'how to factorise x² + bx + c.',
        ['If the number term is negative, the two numbers have different signs.', 'Always check by expanding the brackets.'], ['Example 1: x² + 5x + 6 = (x + 2)(x + 3).', 'Example 2: x² − 2x − 8 = (x − 4)(x + 2).', 'Example 3: x² − 9x + 20 = (x − 4)(x − 5).'])
    ];
  }
  function L_sq() {
    return [
      XV('Solving quadratics by factorising', 'Solve x² − 5x + 6 = 0.', ['Factorise: (x − 2)(x − 3) = 0.', 'If two things multiply to 0, one of them is 0.', 'x − 2 = 0 gives x = 2. x − 3 = 0 gives x = 3.'], 'x = 2 or x = 3',
        function () { return table([['(x − 2)(x − 3) = 0', 'x − 2 = 0 or x − 3 = 0'], ['Solutions', 'x = 2 or x = 3']], ['Step', 'Working']); },
        'Finding when a thrown ball lands is a quadratic equation.', 'how to solve a quadratic equation by factorising.',
        ['The equation must equal 0 first.', 'A quadratic can have two solutions.'], ['Example 1: (x + 1)(x − 4) = 0 gives x = −1 or x = 4.', 'Example 2: x² = 49 gives x = 7 or x = −7.', 'Example 3: Check by substituting back.'])
    ];
  }

  var META = {
    'Writing numbers as powers': { tags: ['Writing numbers as powers'], story: 'A video file doubles in size each time it is copied with extra detail: 2, 4, 8, 16, 32. Those numbers are the powers of 2, and computer memory is built on them.',
      insight: ['A power is a short way to write repeated multiplication. The base is the number you multiply and the index counts how many times, so 3⁴ means four 3s multiplied together.', 'To write a number as a power, divide by the base again and again and count the steps. Watch out for 2³, which is 8, not 6.'] },
    'Laws of indices': { tags: ['Laws of indices'], story: 'Scientists write the distance to the Sun as a power of 10 so they can multiply and divide huge numbers without writing every zero.',
      insight: ['When you multiply powers with the same base, you add the indices. When you divide, you subtract. This works because each index counts how many copies of the base there are.', 'The rules only work for the same base. Any non-zero number to the power 0 equals 1, and a negative index means one over the positive power.'] },
    'Multiples and factors in context': { tags: ['Multiples and factors in context'], story: 'Two buses leave a station at the same moment. One returns every 6 minutes and the other every 8 minutes. Working out when they next leave together is a multiples problem.',
      insight: ['Ask what the problem wants. If things repeat and meet again, you want the lowest common multiple. If you cut or share into equal pieces, you want the highest common factor.', 'List multiples or factors of both numbers and find the first or biggest one they have in common.'] },
    'Improper fractions and mixed numbers': { tags: ['Improper fractions and mixed numbers'], story: 'You eat 3 whole pizzas and 2 fifths of another. As a mixed number that is 3 2/5, and as an improper fraction it is 17/5.',
      insight: ['A mixed number and an improper fraction are two ways of writing the same amount. Dividing the numerator by the denominator gives the whole number, and the remainder is the new numerator.', 'To go back, multiply the whole number by the denominator and add the numerator.'] },
    'Percentage increase and decrease': { tags: ['Percentage increase and decrease'], story: 'A jacket costs £60 and the shop takes 25% off. A quarter of £60 is £15, so you pay £45.',
      insight: ['To change an amount by a percentage, work out the percentage first, then add it on for an increase or take it off for a decrease.', 'Quick percentages help: 10% is a tenth, 25% is a quarter and 50% is a half.'] },
    'Wages and VAT': { tags: ['Wages and VAT'], story: 'A cafe worker earns £12 an hour. For extra hours on a Sunday she gets time and a half. When she buys a phone, 20% VAT is already in the price.',
      insight: ['Pay is hours multiplied by the rate. Overtime has its own higher rate, so work it out separately and then add.', 'VAT is a tax on goods and services. Multiply by 1.2 to add 20% VAT, and divide by 1.2 to remove it.'] },
    'Reading a bank statement': { tags: ['Bank statements'], story: 'A bank statement is a list of every payment in and out of your account, with the balance after each one. It helps you spot mistakes and plan.',
      insight: ['Money in adds to the balance and money out takes away from it. Start at the opening balance and work down the rows.', 'To check, add all the money in, subtract all the money out, and see if you reach the final balance.'] },
    'Budgeting with a monthly income': { tags: ['Budgeting'], story: 'Jo wants to save for a holiday. She lists her income, takes off rent, bills, food and travel, and sees how much is left to save.',
      insight: ['A budget compares income with spending. Add the spending first, then subtract from the income.', 'Percentages show how much of your income goes on each item, which helps you decide where to cut back.'] },
    'Days and dates': { tags: ['Days and dates'], story: 'A parcel is posted on 20 March and arrives on 8 April. Counting the days across two months is a dates problem.',
      insight: ['Count the days left in the first month, then add the days into the next. Remember how many days each month has.', 'To find an end date, keep subtracting the month lengths until you are within one month.'] },
    'Time zones': { tags: ['Time zones'], story: 'A video call between London and Tokyo has to fit in both working days, because Tokyo is nine hours ahead.',
      insight: ['Places east of London are ahead, so add hours. Places west are behind, so subtract hours.', 'If you pass 24:00, the date moves on by one day. Write times on the 24-hour clock to avoid mixing up am and pm.'] },
    'Naming angles with three letters': { tags: ['Naming angles'], story: 'On a diagram with many lines, saying “the angle” is not enough. Mathematicians name an angle with three letters, like ∠PRZ, so everybody knows which one is meant.',
      insight: ['The middle letter is the corner where the two lines meet. The other two letters are points on each line.', 'Both ∠PRZ and ∠ZRP describe the same angle, but ∠RPZ would be a different angle at P.'] },
    'Measuring with a protractor': { tags: ['Measuring angles with a protractor'], story: 'A carpenter cutting a roof timber uses a protractor to check that the angle is exactly right before the saw touches the wood.',
      insight: ['A protractor has two scales running in opposite directions. Use the scale that starts at 0 on the arm of the angle.', 'Check that your answer makes sense: an acute angle is under 90° and an obtuse angle is between 90° and 180°.'] },
    'Complementary and supplementary angles': { tags: ['Complementary and supplementary angles'], story: 'A set square has a right angle. If you draw a line from the corner into the square, you split the right angle into two complementary angles.',
      insight: ['Complementary angles add up to 90°, so they make a right angle. Supplementary angles add up to 180°, so they make a straight line.', 'With algebra, add the angles and set them equal to 90 or 180, then solve.'] },
    'Constructing a triangle with a compass': { tags: ['Constructing triangles'], story: 'A roof frame builder draws a full-size triangle on the floor with a long ruler and a string compass to make sure every beam fits.',
      insight: ['To construct a triangle from three sides, draw one side as the base, then draw arcs from each end with the other two lengths. The arcs cross at the third corner.', 'If the two shorter sides do not add up to more than the longest, the arcs never meet and no triangle exists.'] },
    'Prisms and pyramids': { tags: ['Prisms and pyramids'], story: 'A tent is a triangular prism and the pyramids of Giza are square-based pyramids. Counting faces, vertices and edges tells you which solid you have.',
      insight: ['A prism has the same cross-section all the way along. A pyramid has a base and tapers to a point.', 'Check your counts with Euler’s rule: faces plus vertices minus edges equals 2.'] },
    'Fair samples and survey questions': { tags: ['Fair samples', 'Sample size', 'Survey questions'], story: 'Before an election, pollsters ask a few thousand people chosen to represent the whole country, not just the people who walk past one office.',
      insight: ['A fair sample is chosen at random, is big enough, and includes different kinds of people. Asking only friends gives a biased sample.', 'A fair question is neutral. A leading question pushes people towards an answer, so it gives unreliable data.'] },
    'Tally charts and two-way tables': { tags: ['Tally charts', 'Two-way tables'], story: 'A school survey counts how pupils travel. Tallies record the answers as they come in, and a two-way table sorts them by boys and girls.',
      insight: ['A tally uses groups of five so counting is quick. A two-way table has totals for every row and column.', 'Because totals must agree, a missing number can always be found by subtracting from a total.'] },
    'Describing trends and spotting misleading graphs': { tags: ['Trends in graphs', 'Misleading graphs'], story: 'A newspaper graph starts its axis at 80 so a small rise looks huge. A careful reader checks the axis before believing the picture.',
      insight: ['A trend is the overall pattern over time. Say whether it rises, falls, stays steady or changes direction.', 'A fair graph has a title, labelled axes and an even scale that starts at 0.'] },
    'Relative frequency and expected outcomes': { tags: ['Relative frequency', 'Expected outcomes'], story: 'A factory tests 200 bulbs and 6 fail. The relative frequency of a faulty bulb is 0.03, which helps the factory predict how many will fail in a batch of 10,000.',
      insight: ['Relative frequency is the number of times something happens divided by the number of trials. More trials give a better estimate of probability.', 'Expected number is probability multiplied by the number of trials. It is an average, not a promise.'] },
    'Estimating by rounding to 1 significant figure': { tags: ['Estimating by rounding'], story: 'Before paying a bill of 48.7 × 5.2, you can estimate 50 × 5 = 250 in your head to check it is about right.',
      insight: ['Round each number to 1 significant figure, then do the easy calculation. The first non-zero digit is the first significant figure.', 'An estimate is a check on the size of an answer. If your calculator gives 2,532 you know something went wrong.'] },
    'Converting units of area and volume': { tags: ['Converting units of area and volume'], story: 'A carpet is sold by the square metre, but the room is measured in centimetres. Converting units of area correctly avoids buying the wrong amount.',
      insight: ['For area, the length factor is squared. 1 m = 100 cm, so 1 m² = 100 × 100 = 10,000 cm². For volume it is cubed.', 'The common mistake is to use 100 for area. Draw a 1 m square made of 100 by 100 small squares to see why.'] },
    'Factorising quadratics': { tags: ['Factorising quadratics'], story: 'The area of a rectangular garden is x² + 7x + 12. Factorising gives the side lengths (x + 3) and (x + 4).',
      insight: ['To factorise x² + bx + c, find two numbers that multiply to c and add to b. Then write them in two brackets.', 'Check by expanding the brackets. If the signs are wrong, the middle term will not match.'] },
    'Solving quadratics by factorising': { tags: ['Solving quadratics'], story: 'When a ball is thrown up and comes down, the times when it is at ground level are the solutions of a quadratic equation.',
      insight: ['Rearrange so the equation equals 0, factorise, then use the fact that if two things multiply to 0, one of them must be 0.', 'A quadratic can have two solutions, so give both.'] }
  };

  var LESS = [
    [802, 'Powers and problems', function () { return L_pow().concat(L_mf()); }],
    [803, 'Mixed numbers', function () { return L_improper(); }],
    [804, 'Percentage change', function () { return L_pctchg(); }],
    [806, 'Wages, VAT and statements', function () { return L_wage().concat(L_stmt()); }],
    [807, 'Dates and time zones', function () { return L_days().concat(L_zone()); }],
    [810, 'Naming and measuring angles', function () { return L_angname().concat(L_prot(), L_compsupp(), L_construct()); }],
    [811, 'Prisms and pyramids', function () { return L_solid(); }],
    [812, 'Fair data and trends', function () { return L_sample().concat(L_tally(), L_trend()); }],
    [821, 'Powers and estimating', function () { return L_pow().concat(L_index(), L_est()); }],
    [824, 'Wages, VAT and budgets', function () { return L_wage().concat(L_stmt(), L_budget()); }],
    [825, 'Dates and time zones', function () { return L_days().concat(L_zone()); }],
    [826, 'Converting area and volume', function () { return L_areaconv(); }],
    [829, 'Angles and constructions', function () { return L_compsupp().concat(L_construct()); }],
    [832, 'Fair data, trends and chance', function () { return L_sample().concat(L_trend(), L_relfreq()); }],
    [841, 'Estimating and indices', function () { return L_est().concat(L_index()); }],
    [842, 'Budgeting', function () { return L_budget(); }],
    [844, 'Converting area and volume', function () { return L_areaconv(); }],
    [845, 'Factorising quadratics', function () { return L_fq(); }],
    [846, 'Solving quadratics', function () { return L_sq(); }],
    [852, 'Fair data and chance', function () { return L_sample().concat(L_relfreq()); }]
  ];
  LESS.forEach(function (e) { try { var ss = e[2](); ss.forEach(function (x) { var m = META[x.title]; if (m) { x.tags = m.tags; x.story = m.story; x.insight = m.insight; } }); BT.add(e[0], 'learn8', e[1], ss); } catch (err) { if (window.console) console.warn('bmx3 lesson ' + e[0], err); } });
})();
