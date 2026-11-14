/* lessons_p5_more.js: the older P5 Watch lessons, rebuilt in full to match the new ones
   (a clear definition, worked examples step by step, real-life uses, a "Your turn" and a recap).
   Each topic's Watch lesson is then put together: the question lessons first, these after them. */
(function () {
  'use strict';
  var BT = window.BT; if (!BT || !BT.L || !BT.lk) return;
  var L = BT.L, V = BT.sv, LK = BT.lk, SC = L.SC, st = L.st, SW = L.SW, F = L.F, BIG = L.BIG, ep = L.ep, rec = L.rec, turn = L.turn;
  var SPA = window.SPA, P = 'var(--accent)', G = 'var(--good)';
  var cubes = function (h, hl) { return SPA && SPA.cubes ? SPA.cubes(h, 215, hl, true) : ''; };

  /* ===================== 503 Fractions ===================== */
  ep('Improper fractions and mixed numbers', 'what happens when a fraction is more than one whole, and how to write it two ways.', [
    SC('More than one whole', 'Seven quarters of pizza', [
      st("Some fractions are bigger than one whole. Imagine pizzas cut into quarters. Seven quarters means seven slices, but each pizza only has four.", LK.fbar(4, 4, 260, 280) + LK.fbar(3, 4, 260, 280)),
      st("So seven quarters fills one whole pizza and three quarters of another.", V.eq('7/4 = one whole and 3/4', 'g'))]),
    SC('Improper fractions', 'The top is bigger than the bottom', [
      st("When the numerator, the top number, is bigger than the denominator, the bottom number, we call it an improper fraction.", BIG(F(7, 4, P) + ' ' + F(5, 3, P) + ' ' + F(9, 2, P))),
      st("If the top and bottom are the same, like four quarters, the fraction is exactly one whole.", BIG(F(4, 4) + ' = 1'))]),
    SC('Mixed numbers', 'A whole number and a fraction', [
      st("A mixed number has a whole number part and a fraction part, like one and three quarters. It is another way to write the same amount.", V.eq('7/4 = 1 3/4', 'g')),
      st("Mixed numbers are easier to picture. One and three quarters is a bit less than two.", V.nl(0, 2, { tick: 0.25, marks: [[1.75, 22]], alt: 'A number line from 0 to 2 with 1 and 3 quarters marked' }) + V.note('1¾ is just before 2'))]),
    SC('Improper to mixed', 'Divide the top by the bottom', [
      st("To change eleven thirds into a mixed number, ask: how many threes fit into eleven? Three threes make nine, with two left over.", V.eq('11 ÷ 3 = 3 remainder 2', 'b')),
      st("The three is the whole number. The remainder, two, goes on top of the fraction. So eleven thirds is three and two thirds.", V.eq('11/3 = 3 2/3', 'g') + V.rule('Whole number = how many times it fits. Remainder goes on top.'))]),
    SC('Mixed to improper', 'Multiply, then add', [
      st("Now go the other way. Two and three fifths. Each whole has five fifths, so two wholes are ten fifths.", V.eq('2 × 5 = 10 fifths', 'b')),
      st("Add the three extra fifths: thirteen fifths.", V.eq('2 3/5 = 13/5', 'g') + V.rule('Wholes × bottom, then add the top.'))]),
    SC('In real life', 'Cups of flour', [
      st("A recipe needs five halves of a cup of flour. That sounds strange! Five halves is two and a half cups, which is much easier to measure.", V.eq('5/2 = 2 1/2 cups', 'g'))]),
    turn("Your turn! Write nine quarters as a mixed number. Pause and try it.", V.eq('9/4 = ?'),
      "How many fours in nine? Two, with one left over. So nine quarters is two and one quarter.", V.eq('9 ÷ 4 = 2 r 1', 'b') + V.eq('9/4 = 2 1/4', 'g')),
    rec('Improper fractions and mixed numbers', "An improper fraction has a top bigger than its bottom. A mixed number has a whole number and a fraction. Divide to change improper to mixed. Multiply and add to change mixed to improper.",
      ['Improper: top bigger than bottom', 'Mixed: whole number and a fraction', 'Improper → mixed: divide, remainder on top', 'Mixed → improper: wholes × bottom + top'])
  ]);

  ep('Counting parts and fractions as decimals', 'how to count the parts in a number and write simple fractions as decimals.', [
    SC('How many parts?', 'Halves in a number', [
      st("How many halves are there in three? Each whole has two halves, so three wholes have six halves.", LK.fbar(2, 2, 120, 280) + LK.fbar(2, 2, 120, 280) + LK.fbar(2, 2, 120, 280)),
      st("Three times two is six halves.", V.eq('3 × 2 = 6 halves', 'g'))]),
    SC('Wholes and some more', 'Quarters in 6¾', [
      st("How many quarters are in six and three quarters? Each whole has four quarters. Six wholes make twenty-four quarters.", V.eq('6 × 4 = 24 quarters', 'b')),
      st("Then add the three extra quarters. Twenty-four plus three is twenty-seven quarters.", V.eq('24 + 3 = 27 quarters', 'g') + V.rule('Wholes × parts in a whole, then add the extra parts.'))]),
    SC('Tenths are decimals', 'One tenth = 0.1', [
      st("When a whole is cut into ten equal parts, each part is one tenth. We can write one tenth as zero point one.", LK.fbar(1, 10, 300, 215) + V.eq('1/10 = 0.1', 'g')),
      st("Seven tenths is zero point seven. The first digit after the point counts tenths.", LK.fbar(7, 10, 300, 215) + V.eq('7/10 = 0.7', 'g'))]),
    SC('Hundredths', 'Out of one hundred', [
      st("If a whole is cut into one hundred parts, each part is one hundredth: zero point zero one. Thirty-five hundredths is zero point three five.", LK.hsq(35) + V.eq('35/100 = 0.35', 'g'))]),
    SC('Halves and quarters', 'Fractions you should know', [
      st("Some fractions are worth learning by heart. One half is five tenths, which is zero point five.", LK.fbar(1, 2, 300, 280) + V.eq('1/2 = 5/10 = 0.5', 'g')),
      st("One quarter is twenty-five hundredths, zero point two five. Three quarters is zero point seven five.", V.tbl([['1/2', '0.5'], ['1/4', '0.25'], ['3/4', '0.75'], ['1/10', '0.1']], ['Fraction', 'Decimal']))]),
    SC('Make the bottom 10 or 100', 'Three fifths', [
      st("To change three fifths into a decimal, make the bottom ten. Five times two is ten, so multiply the top by two as well.", V.eq('3/5 = 6/10', 'b')),
      st("Six tenths is zero point six.", V.eq('3/5 = 6/10 = 0.6', 'g') + V.rule('Do the same to the top and the bottom.'))]),
    SC('In real life', 'Money', [
      st("Money uses hundredths. One penny is one hundredth of a pound. So a quarter of a pound is twenty-five pence, or zero point two five pounds.", V.eq('¼ of £1 = £0.25 = 25p', 'g'))]),
    turn("Your turn! How many thirds are there in four and two thirds? Pause and try it.", V.eq('4 2/3 = ? thirds'),
      "Four wholes make twelve thirds, plus two more makes fourteen thirds.", V.eq('4 × 3 + 2 = 14 thirds', 'g')),
    rec('Counting parts and fractions as decimals', "To count parts, multiply the wholes by the parts in one whole, then add the extra. Tenths and hundredths can be written as decimals. Make the bottom ten or one hundred to change other fractions.",
      ['Wholes × parts + extra parts', '1/10 = 0.1 and 1/100 = 0.01', '½ = 0.5, ¼ = 0.25, ¾ = 0.75', 'Make the bottom 10 or 100'])
  ]);

  /* ===================== 504 Decimals and percentages ===================== */
  ep('Percentages', 'what per cent means, and how to find simple percentages of an amount.', [
    SC('Out of one hundred', 'Per cent', [
      st("Per cent means out of one hundred. The sign looks like this. Here are one hundred squares, and twenty-five are shaded. That is twenty-five per cent.", LK.hsq(25) + V.eq('25 out of 100 = 25%', 'g')),
      st("One hundred per cent means the whole thing. Zero per cent means none of it.", V.cards(['0% = none', '50% = half', '100% = all'], ['b', 'p', 'g']))]),
    SC('Three ways to say it', 'Percentages, fractions and decimals', [
      st("Twenty-five per cent is the same as one quarter, and the same as zero point two five. They are three ways to say the same amount.", V.eq('25% = 1/4 = 0.25', 'g'))]),
    SC('Famous percentages', 'Learn these by heart', [
      st("These are worth knowing. Fifty per cent is one half. Twenty-five per cent is one quarter. Seventy-five per cent is three quarters. Ten per cent is one tenth.",
        V.tbl([['50%', '1/2', '0.5'], ['25%', '1/4', '0.25'], ['75%', '3/4', '0.75'], ['10%', '1/10', '0.1']], ['Per cent', 'Fraction', 'Decimal']))]),
    SC('50% and 25%', 'Of £80', [
      st("To find fifty per cent, find half. Half of eighty pounds is forty pounds.", V.eq('50% of £80 = £80 ÷ 2 = £40', 'g')),
      st("To find twenty-five per cent, find a quarter: divide by four. Eighty divided by four is twenty pounds.", V.eq('25% of £80 = £80 ÷ 4 = £20', 'g'))]),
    SC('10%', 'Divide by ten', [
      st("To find ten per cent, divide by ten. Ten per cent of eighty pounds is eight pounds.", V.eq('10% of £80 = £8', 'g')),
      st("Ten per cent is a building block. Twenty per cent is double: sixteen pounds. Thirty per cent is three lots: twenty-four pounds.", V.eq('20% = 2 × £8 = £16') + V.eq('30% = 3 × £8 = £24', 'g'))]),
    SC('75%', 'Three quarters', [
      st("Seventy-five per cent is three quarters. Find one quarter, then times by three. A quarter of sixty is fifteen, so seventy-five per cent is forty-five.", V.eq('60 ÷ 4 = 15') + V.eq('75% of 60 = 3 × 15 = 45', 'g'))]),
    SC('In real life', 'A sale', [
      st("A jacket costs forty pounds. The shop takes twenty-five per cent off. A quarter of forty is ten pounds, so the jacket now costs thirty pounds.", V.eq('25% of £40 = £10') + V.eq('£40 − £10 = £30', 'g'))]),
    turn("Your turn! Find ten per cent and then fifty per cent of one hundred and twenty. Pause and try it.", V.eq('10% and 50% of 120 = ?'),
      "Ten per cent: divide by ten, twelve. Fifty per cent: halve it, sixty.", V.eq('10% of 120 = 12') + V.eq('50% of 120 = 60', 'g')),
    rec('Percentages', "Per cent means out of one hundred. Learn the famous ones: fifty per cent is a half, twenty-five per cent is a quarter, ten per cent is a tenth. Build other percentages from ten per cent.",
      ['Per cent = out of 100', '50% → halve', '25% → divide by 4', '10% → divide by 10', 'Build others from 10%'])
  ]);

  ep('Percentages of a set and of a measure', 'how to write part of a group as a percentage, and find a percentage of a measurement.', [
    SC('Part of a group', 'Out of 100', [
      st("Sometimes we want to say what percentage of a group has something. If forty-three out of one hundred children walk to school, that is forty-three per cent.", LK.hsq(43) + V.eq('43 out of 100 = 43%', 'g'))]),
    SC('Groups that are not 100', 'Scale it up', [
      st("Most groups are not one hundred. In a class of twenty-five, ten children have a pet. Ten out of twenty-five.", V.eq('10 out of 25 = 10/25', 'b')),
      st("Make the bottom one hundred. Twenty-five times four is one hundred, so multiply the top by four too. Forty out of one hundred is forty per cent.", V.eq('10/25 = 40/100 = 40%', 'g') + V.rule('Make the bottom 100. Do the same to the top.'))]),
    SC('Out of 20 and out of 50', 'Two more examples', [
      st("Eight out of twenty: twenty times five is one hundred, so eight times five is forty. Forty per cent.", V.eq('8/20 = 40/100 = 40%', 'g')),
      st("Thirty-five out of fifty: double both. Seventy out of one hundred is seventy per cent.", V.eq('35/50 = 70/100 = 70%', 'g'))]),
    SC('A set of numbers', 'Primes from 1 to 20', [
      st("What percentage of the numbers from one to twenty are prime? The primes are two, three, five, seven, eleven, thirteen, seventeen and nineteen. That is eight out of twenty.", V.cards(['2', '3', '5', '7', '11', '13', '17', '19'], ['g'])),
      st("Eight out of twenty is forty out of one hundred, so forty per cent.", V.eq('8/20 = 40%', 'g'))]),
    SC('A percentage of a measure', 'A water tank', [
      st("A tank holds eight hundred litres and is twenty-five per cent full. Twenty-five per cent is a quarter, so there are two hundred litres.", V.eq('25% of 800 l = 800 ÷ 4 = 200 l', 'g'))]),
    SC('Change the units first', 'A bag of 1.2 kg', [
      st("A one point two kilogram bag of mince is fifty per cent beef. Change to grams first: one point two kilograms is one thousand two hundred grams.", V.eq('1.2 kg = 1,200 g', 'b')),
      st("Fifty per cent is half. Half of one thousand two hundred grams is six hundred grams.", V.eq('50% of 1,200 g = 600 g', 'g'))]),
    SC('10% of a length', 'A 3 m ribbon', [
      st("Ten per cent of a three metre ribbon. Three metres is three hundred centimetres. Divide by ten: thirty centimetres.", V.eq('10% of 300 cm = 30 cm', 'g'))]),
    turn("Your turn! Fifteen out of twenty-five children like football. What percentage is that? Pause and try it.", V.eq('15/25 = ?%'),
      "Multiply top and bottom by four. Sixty out of one hundred, so sixty per cent.", V.eq('15/25 = 60/100 = 60%', 'g')),
    rec('Percentages of a set and of a measure', "For part of a group, write a fraction and make the bottom one hundred. For a measure, use the percentage you know, and change units first if you need to.",
      ['Count the part, write it over the total', 'Make the bottom 100', 'For measures, change units first', 'Then use ½, ¼ or ÷10'])
  ]);

  /* ===================== 505 Money, time and measurement ===================== */
  ep('Calendars and time zones', 'how to read a calendar, count days between dates, and work out times in other countries.', [
    SC('Days, weeks and months', 'How a calendar works', [
      st("A calendar shows the days of the year. There are seven days in a week, twelve months in a year and three hundred and sixty-five days in most years.", V.cards(['7 days = 1 week', '12 months = 1 year', '365 days = 1 year'], ['b', 'p', 'g'])),
      st("Every four years there is a leap year with three hundred and sixty-six days. February gets an extra day, the twenty-ninth.", V.note('Leap year: 29 February'))]),
    SC('How many days in each month?', 'A rhyme helps', [
      st("Thirty days has September, April, June and November. All the rest have thirty-one, except February, which has twenty-eight, or twenty-nine in a leap year.",
        V.tbl([['30 days', 'Apr, Jun, Sep, Nov'], ['31 days', 'Jan, Mar, May, Jul, Aug, Oct, Dec'], ['28 or 29', 'Feb']], ['Days', 'Months']))]),
    SC('Counting days', 'From 25 March to 6 April', [
      st("How many days from the twenty-fifth of March to the sixth of April? March has thirty-one days, so count from the twenty-fifth to the thirty-first: six days.", V.eq('25 Mar → 31 Mar = 6 days', 'b')),
      st("Then six more days into April. Six plus six is twelve days.", V.eq('6 + 6 = 12 days', 'g'))]),
    SC('Weeks and days', 'What day will it be?', [
      st("If today is Monday, what day is it in fifteen days? Fifteen days is two weeks and one day. Two weeks later is Monday again, then one more day: Tuesday.", V.eq('15 = 2 weeks + 1 day → Tuesday', 'g'))]),
    SC('Time zones', 'Different clocks around the world', [
      st("When it is midday in Scotland, it is night in Australia. The world is split into time zones, so clocks show different times in different countries.", V.cols([V.clock(12, 0), V.clock(11, 0)], 2)),
      st("New York is five hours behind the UK. Paris is one hour ahead.", V.tbl([['Paris', '1 hour ahead'], ['Dubai', '4 hours ahead'], ['New York', '5 hours behind']], ['City', 'Compared with UK']))]),
    SC('Working out the time', 'Ahead means add, behind means subtract', [
      st("It is three pm in Glasgow. New York is five hours behind, so take away five hours. It is ten am in New York.", V.eq('3 pm − 5 hours = 10 am', 'g')),
      st("Dubai is four hours ahead, so add four hours: seven pm.", V.eq('3 pm + 4 hours = 7 pm', 'g') + V.rule('Ahead: add hours. Behind: subtract hours.'))]),
    turn("Your turn! It is eight am in Edinburgh. Paris is one hour ahead. What time is it in Paris? Pause and try it.", V.eq('8 am + 1 hour = ?'),
      "Add one hour. It is nine am in Paris.", V.eq('9 am', 'g')),
    rec('Calendars and time zones', "Learn the days in each month. To count days between dates, count to the end of the month first, then into the next. For time zones, add hours when a place is ahead and subtract when it is behind.",
      ['7 days a week, 12 months, 365 days', '30 days has September…', 'Count to the end of the month first', 'Ahead: add. Behind: subtract.'])
  ]);

  /* ===================== 506 Algebra ===================== */
  ep('Expressions from words and shapes', 'how to use a letter or a shape to stand for a number, and write expressions from words.', [
    SC('A shape for a number', 'The mystery box', [
      st("Sometimes we don't know a number yet. We can use a shape, like a box, to stand for it. Box plus three equals ten.", V.eq('□ + 3 = 10', 'b')),
      st("The box must be seven, because seven plus three is ten.", V.eq('□ = 7', 'g'))]),
    SC('A letter for a number', 'Using n', [
      st("Mathematicians often use a letter instead of a shape. The letter n can stand for any number. n plus three means a number with three added.", V.eq('n + 3', 'b')),
      st("If n is five, then n plus three is eight. If n is ten, n plus three is thirteen.", V.tbl([['5', '8'], ['10', '13'], ['20', '23']], ['n', 'n + 3']))]),
    SC('Words into expressions', 'Say it, then write it', [
      st("Five more than a number becomes n plus five. Six less than a number becomes n take away six.", V.tbl([['5 more than a number', 'n + 5'], ['6 less than a number', 'n − 6'], ['double a number', '2n'], ['a number shared by 4', 'n ÷ 4']], ['Words', 'Expression'])),
      st("Two n means two times n. We leave out the times sign when a number sits next to a letter.", V.eq('2n = 2 × n', 'g'))]),
    SC('Shapes with values', 'A shape puzzle', [
      st("A triangle and a triangle make twelve. So each triangle is worth six.", V.eq('▲ + ▲ = 12 → ▲ = 6', 'g')),
      st("Now a triangle plus a circle makes ten. The triangle is six, so the circle is four.", V.eq('▲ + ● = 10 → 6 + ● = 10 → ● = 4', 'g'))]),
    SC('In real life', 'Bags of sweets', [
      st("Each bag has the same number of sweets, n. Three bags and two loose sweets make three n plus two.", V.eq('3 bags + 2 = 3n + 2', 'b')),
      st("If each bag has ten sweets, that is thirty-two sweets.", V.eq('3 × 10 + 2 = 32', 'g'))]),
    turn("Your turn! Write 'four more than double a number' as an expression. Pause and try it.", V.eq('?'),
      "Double the number is two n. Four more makes two n plus four.", V.eq('2n + 4', 'g')),
    rec('Expressions from words and shapes', "A shape or a letter can stand for a number we don't know yet. Turn words into expressions: more means add, less means subtract, double means two times.",
      ['A shape or letter stands for a number', 'more → +, less → −', 'double → 2n', 'Use what you know to find the unknown'])
  ]);

  /* ===================== 507 Shape ===================== */
  ep('3D shapes', 'how to describe 3D shapes by their faces, edges and vertices.', [
    SC('2D and 3D', 'Flat or solid?', [
      st("A 2D shape is flat, like a drawing of a square. A 3D shape is solid. You can hold it, like a dice or a tin of beans.", V.cards(['2D: flat', '3D: solid'], ['b', 'g']))]),
    SC('Faces, edges and vertices', 'The parts of a 3D shape', [
      st("A face is a flat surface. An edge is where two faces meet. A vertex is a corner, where edges meet. More than one vertex are called vertices.", cubes([[1]]) + V.cards(['Face: flat surface', 'Edge: where faces meet', 'Vertex: a corner'], ['b', 'p', 'g']))]),
    SC('The cube', 'A dice', [
      st("A cube has six square faces, twelve edges and eight vertices. A dice is a cube.", cubes([[1]]) + V.eq('6 faces · 12 edges · 8 vertices', 'g'))]),
    SC('The cuboid', 'A cereal box', [
      st("A cuboid looks like a stretched cube, like a cereal box. Its faces are rectangles. It has the same numbers as a cube: six faces, twelve edges, eight vertices.", cubes([[1, 1, 1]]) + V.eq('6 faces · 12 edges · 8 vertices', 'g'))]),
    SC('Prisms and pyramids', 'Two families', [
      st("A prism has the same shape all the way through, like a Toblerone box, which is a triangular prism. A pyramid comes to a point at the top.",
        V.tbl([['Triangular prism', '5', '9', '6'], ['Square-based pyramid', '5', '8', '5'], ['Triangular pyramid', '4', '6', '4']], ['Shape', 'Faces', 'Edges', 'Vertices']))]),
    SC('Curved shapes', 'Cylinder, cone, sphere', [
      st("Some 3D shapes have curved surfaces. A cylinder is like a tin. A cone is like an ice-cream cone. A sphere is like a ball, with one curved surface and no edges.", V.cards(['Cylinder: tin', 'Cone: ice cream', 'Sphere: ball'], ['b', 'p', 'g']))]),
    turn("Your turn! How many faces, edges and vertices does a square-based pyramid have? Pause and count.", V.eq('Faces? Edges? Vertices?'),
      "A square base plus four triangles makes five faces. Four edges round the base and four up to the point make eight edges. Four corners at the bottom and one at the top make five vertices.", V.eq('5 faces · 8 edges · 5 vertices', 'g')),
    rec('3D shapes', "3D shapes are solid. Describe them by faces, edges and vertices. Cubes and cuboids have six faces, twelve edges and eight vertices. Prisms are the same all the way through. Pyramids come to a point.",
      ['Face = flat surface', 'Edge = where two faces meet', 'Vertex = corner', 'Cube and cuboid: 6, 12, 8'])
  ]);

  ep('Solid shapes and reflections', 'how nets fold into solids, and how to reflect a shape in a mirror line.', [
    SC('Nets', 'A solid opened out flat', [
      st("If you cut open a cardboard box and lay it flat, you get its net. A net is a flat shape that folds up into a solid.", LK.grid(4, 3, function (i, j) { return (j === 1 || i === 1) ? true : 'skip'; }, { u: 40, alt: 'A cross-shaped net of six squares' })),
      st("This cross of six squares folds into a cube. Each square becomes one face.", V.eq('6 squares → a cube', 'g'))]),
    SC('Does it fold?', 'Check for overlaps', [
      st("Not every group of six squares makes a cube. If two squares would land on the same face when folded, it does not work. Picture folding it one square at a time.", V.rule('A net must fold with no gaps and no overlaps.'))]),
    SC('Other nets', 'Prisms and pyramids', [
      st("A square-based pyramid's net is a square with four triangles around it. A triangular prism's net has two triangles and three rectangles.", V.cards(['Pyramid: 1 square + 4 triangles', 'Prism: 2 triangles + 3 rectangles'], ['b', 'g']))]),
    SC('Reflections', 'Mirror images', [
      st("A reflection is a mirror image. Each point moves to the other side of the mirror line, the same distance away.", LK.grid(8, 4, function (i, j) { return (i === 2 && j === 1) || (i === 5 && j === 1); }, { u: 32, mirror: 4, alt: 'Two squares reflected in a mirror line' })),
      st("Left and right swap over, but up and down stay the same.", V.rule('Same distance from the mirror, on the other side.'))]),
    SC('Reflecting a shape', 'Square by square', [
      st("To reflect a shape, reflect each square or corner one at a time. Count how far it is from the line, then count the same on the other side.", LK.grid(8, 4, function (i, j) { return (i >= 1 && i <= 3 && j === 2) || (i === 3 && j === 1) || (i >= 4 && i <= 6 && j === 2) || (i === 4 && j === 1); }, { u: 32, mirror: 4, alt: 'An L shape and its reflection' }))]),
    turn("Your turn! A square is two squares to the left of the mirror line. Where will its reflection be? Pause and think.", V.eq('2 squares left → ?'),
      "Two squares to the right of the mirror line.", V.eq('2 squares right', 'g')),
    rec('Solid shapes and reflections', "A net is a flat shape that folds into a solid, with no gaps and no overlaps. A reflection puts each point the same distance away on the other side of the mirror line.",
      ['Net = a solid opened out', 'Fold it in your head, one face at a time', 'Reflection: same distance, other side', 'Left and right swap'])
  ]);

  /* ===================== 508 Data ===================== */
  ep('Mode, range and chance', 'how to find the mode and range of a set of data, and describe how likely something is.', [
    SC('A set of data', 'Spelling scores', [
      st("Here are six spelling scores: four, seven, four, nine, four, six. We can describe them with the mode and the range.", V.cards(['4', '7', '4', '9', '4', '6'], ['b']))]),
    SC('The mode', 'The most common', [
      st("The mode is the value that appears most often. Four appears three times, more than any other score, so the mode is four.", V.cards(['4', '7', '4', '9', '4', '6'], ['g', 'b', 'g', 'b', 'g', 'b']) + V.eq('Mode = 4', 'g')),
      st("Tip: mode sounds like most.", V.note('Mode = most common'))]),
    SC('The range', 'How spread out', [
      st("The range tells us how spread out the data is. Take the smallest value from the largest. Nine take away four is five.", V.eq('Range = 9 − 4 = 5', 'g')),
      st("A big range means the scores are very different. A small range means they are close together.", V.rule('Range = largest − smallest'))]),
    SC('Chance', 'How likely is it?', [
      st("Chance tells us how likely something is to happen. We use words like impossible, unlikely, even chance, likely and certain.", V.cards(['impossible', 'unlikely', 'even chance', 'likely', 'certain'], ['b', 'b', 'p', 'g', 'g'], true))]),
    SC('Examples of chance', 'Place each one on the line', [
      st("Rolling a seven on a normal dice is impossible. Getting heads when you flip a coin is even chance. The sun rising tomorrow is certain.", V.tbl([['Roll a 7 on a dice', 'impossible'], ['Heads on a coin', 'even chance'], ['Rain in Scotland this year', 'certain']], ['Event', 'Chance'])),
      st("Picking a red sweet from a bag of nine red and one blue is likely.", V.eq('9 red, 1 blue → red is likely', 'g'))]),
    turn("Your turn! Find the mode and range of three, eight, five, eight, two. Pause and try it.", V.eq('3, 8, 5, 8, 2'),
      "Eight appears twice, so the mode is eight. The range is eight take away two, which is six.", V.eq('Mode = 8 · Range = 6', 'g')),
    rec('Mode, range and chance', "The mode is the most common value. The range is the largest take away the smallest. Chance goes from impossible, through even chance, to certain.",
      ['Mode = most common', 'Range = largest − smallest', 'Chance: impossible → certain', 'Even chance = 1 in 2'])
  ]);

  ep('Two-way tables, Venn diagrams and pie charts', 'how to read and fill in two-way tables, Venn diagrams and pie charts.', [
    SC('Two-way tables', 'Two questions at once', [
      st("A two-way table sorts data in two ways at once. This one shows boys and girls, and whether they have a pet.", V.tbl([['Boys', '8', '5', '13'], ['Girls', '9', '3', '12'], ['Total', '17', '8', '25']], ['', 'Pet', 'No pet', 'Total'])),
      st("Read across and down. Nine girls have a pet. Altogether, seventeen children have a pet.", V.eq('Girls with a pet = 9', 'g'))]),
    SC('Filling in a missing number', 'Use the totals', [
      st("If thirteen boys took part and eight have a pet, how many have no pet? Thirteen take away eight is five.", V.eq('13 − 8 = 5', 'g') + V.rule('Each row and column adds up to its total.'))]),
    SC('Venn diagrams', 'Overlapping circles', [
      st("A Venn diagram sorts things into circles. Here one circle is even numbers and the other is multiples of three. Numbers in both go in the middle, where the circles overlap.", V.cols([V.card('Even: 2, 4, 8, 10', 'b'), V.card('Both: 6, 12', 'p'), V.card('Multiples of 3: 3, 9', 'g')], 3)),
      st("Numbers that are in neither circle go outside, like one, five and seven.", V.note('Outside: 1, 5, 7, 11'))]),
    SC('Pie charts', 'Parts of a whole', [
      st("A pie chart shows how a whole is split into parts. Here, half the class walk to school, a quarter come by car and a quarter come by bus.", LK.pie(2, 4, { r: 60, hue: 150 }) + V.tbl([['Walk', '½'], ['Car', '¼'], ['Bus', '¼']], ['Way to school', 'Fraction']))]),
    SC('Reading a pie chart', 'Use fractions of the total', [
      st("If twenty-eight children were asked, half walk: fourteen children. A quarter come by car: seven children.", V.eq('½ of 28 = 14') + V.eq('¼ of 28 = 7', 'g'))]),
    turn("Your turn! In a pie chart of forty children, a quarter chose football. How many is that? Pause and try it.", V.eq('¼ of 40 = ?'),
      "Divide forty by four. Ten children chose football.", V.eq('¼ of 40 = 10', 'g')),
    rec('Two-way tables, Venn diagrams and pie charts', "Two-way tables sort data in two ways, and rows and columns add to their totals. Venn diagrams put things that belong to both groups in the overlap. Pie charts show fractions of a whole.",
      ['Two-way table: read across and down', 'Totals help find missing numbers', 'Venn: both groups in the overlap', 'Pie chart: fraction of the total'])
  ]);

  /* ===================== 509 / 510 ===================== */
  ep('Always true, factors and multiples', 'how to test whether a statement is always, sometimes or never true, using factors and multiples.', [
    SC('Always, sometimes or never?', 'Testing statements', [
      st("A statement in maths can be always true, sometimes true or never true. We test it with examples.", V.cards(['Always true', 'Sometimes true', 'Never true'], ['g', 'p', 'b']))]),
    SC('Factors and multiples', 'A reminder', [
      st("A factor divides exactly into a number. The factors of twelve are one, two, three, four, six and twelve. A multiple is in a number's times table: twelve, twenty-four, thirty-six are multiples of twelve.", V.eq('Factors of 12: 1, 2, 3, 4, 6, 12', 'b') + V.eq('Multiples of 12: 12, 24, 36…', 'g'))]),
    SC('Always true', 'Even plus even', [
      st("'Even plus even is even.' Try some: two plus four is six, ten plus eight is eighteen. Every even number is made of pairs, so adding pairs always gives pairs. Always true.", V.eq('2 + 4 = 6 · 10 + 8 = 18', 'g') + V.note('Always true'))]),
    SC('Sometimes true', 'Multiples of 4 and 6', [
      st("'A multiple of four is also a multiple of six.' Twelve is a multiple of both. But eight is a multiple of four and not six. So it is sometimes true.", V.eq('12 ✓ · 8 ✗', 'p') + V.note('Sometimes true'))]),
    SC('Never true', 'Odd times odd', [
      st("'Odd times odd makes an even number.' Three times five is fifteen, odd. Seven times nine is sixty-three, odd. An odd number of odd groups is always odd, so the statement is never true.", V.eq('3 × 5 = 15 · 7 × 9 = 63', 'b') + V.note('Never true'))]),
    SC('One counterexample', 'Is enough to say not always', [
      st("To show a statement is not always true, you only need one example where it fails. This is called a counterexample. 'All factors of twenty are even.' One is a factor and it's odd, so it's not always true.", V.eq('1 is a factor of 20 and odd', 'g') + V.rule('One counterexample proves it is not always true.'))]),
    turn("Your turn! 'A number with a factor of ten also has a factor of five.' Always, sometimes or never? Pause and think.", V.eq('Always, sometimes or never?'),
      "Always true. Ten is five times two, so anything that divides by ten also divides by five.", V.eq('Always true', 'g')),
    rec('Always true, factors and multiples', "Test statements with examples. One counterexample shows something is not always true. Use what you know about factors, multiples, odds and evens to explain why.",
      ['Try several examples', 'One counterexample breaks "always"', 'Explain why with factors and multiples', 'Even + even is always even'])
  ]);

  ep('Prime numbers and square numbers', 'what prime numbers and square numbers are, and how to spot them.', [
    SC('Prime numbers', 'Exactly two factors', [
      st("A prime number has exactly two factors: one and itself. Seven can only be made as one times seven, so seven is prime.", V.dots(1, 7, P) + V.eq('7 = 1 × 7 only', 'g')),
      st("Nine can be made as three times three as well, so nine is not prime.", V.dots(3, 3, P) + V.eq('9 = 3 × 3 → not prime', 'b'))]),
    SC('Primes up to 20', 'Learn them', [
      st("Here are the primes up to twenty: two, three, five, seven, eleven, thirteen, seventeen and nineteen.", V.cards(['2', '3', '5', '7', '11', '13', '17', '19'], ['g'])),
      st("Two is the only even prime. One is not prime, because it has only one factor.", V.note('2 is the only even prime. 1 is not prime.'))]),
    SC('Is it prime?', 'Testing 21', [
      st("Is twenty-one prime? Try dividing by small numbers. It is odd, so not two. Two plus one is three, so it divides by three: three times seven.", V.eq('21 = 3 × 7 → not prime', 'b'))]),
    SC('Square numbers', 'A number times itself', [
      st("A square number is a number multiplied by itself. Four rows of four dots make a square. Four times four is sixteen.", V.dots(4, 4, 'var(--good)') + V.eq('4 × 4 = 16', 'g')),
      st("We write four squared with a small two: four squared equals sixteen.", V.eq('4² = 16', 'g'))]),
    SC('The first square numbers', 'Learn these too', [
      st("The first square numbers are one, four, nine, sixteen, twenty-five, thirty-six, forty-nine, sixty-four, eighty-one and one hundred.", V.tbl([['1²', '1'], ['2²', '4'], ['3²', '9'], ['4²', '16'], ['5²', '25'], ['10²', '100']], ['Square', 'Value']))]),
    turn("Your turn! Is fifteen prime? Is it a square number? Pause and think.", V.eq('15'),
      "Fifteen is three times five, so it is not prime. It is not a number times itself, so it is not square either.", V.eq('15 = 3 × 5 → neither', 'g')),
    rec('Prime numbers and square numbers', "A prime number has exactly two factors. Two is the only even prime and one is not prime. A square number is a number times itself and makes a square of dots.",
      ['Prime: exactly two factors', 'Primes to 20: 2, 3, 5, 7, 11, 13, 17, 19', 'Square: a number times itself', '1, 4, 9, 16, 25, 36…'])
  ]);

  /* ===================== 513 Spatial ===================== */
  ep('Turns and mirror images', 'how to describe turns, and how shapes look in a mirror.', [
    SC('Full, half and quarter turns', 'How far round?', [
      st("A full turn takes you all the way round, back to where you started. That is three hundred and sixty degrees. A half turn makes you face the opposite way: one hundred and eighty degrees.", V.tbl([['Full turn', '360°'], ['Half turn', '180°'], ['Quarter turn', '90°']], ['Turn', 'Degrees'])),
      st("A quarter turn is a right angle, ninety degrees.", V.angle(90, '90°'))]),
    SC('Clockwise and anticlockwise', 'Which way?', [
      st("Clockwise means the same way as the hands on a clock. Anticlockwise is the opposite way. Always say which way you turn.", V.clock(3, 0))]),
    SC('Turning to face', 'Using the compass', [
      st("If you face north and make a quarter turn clockwise, you face east. Another quarter turn clockwise and you face south.", V.cards(['North', '→ East', '→ South', '→ West'], ['b', 'p', 'g', 'b'])),
      st("A half turn from north, either way, takes you to south.", V.eq('North + half turn = South', 'g'))]),
    SC('Mirror images', 'Left and right swap', [
      st("In a mirror, left and right swap, but up and down stay the same. If you raise your right hand, your reflection raises the hand on the left.", LK.grid(8, 3, function (i, j) { return (i === 1 && j === 0) || (i === 2 && j <= 1) || (i === 6 && j === 0) || (i === 5 && j <= 1); }, { u: 34, mirror: 4, alt: 'A shape and its mirror image' }))]),
    SC('Letters in a mirror', 'Some stay the same', [
      st("Some capital letters look the same in a vertical mirror, like A, H, M, O, T, U, V, W, X and Y. Others, like B and R, look back to front.", V.cards(['A', 'H', 'M', 'O', 'T'], ['g']) + V.cards(['B', 'R', 'S', 'N'], ['b']))]),
    turn("Your turn! You face east and make a half turn. Which way are you facing now? Pause and think.", V.eq('East + half turn = ?'),
      "A half turn faces you the opposite way. You face west.", V.eq('West', 'g')),
    rec('Turns and mirror images', "A full turn is three hundred and sixty degrees, a half turn is one hundred and eighty, and a quarter turn is ninety. Say clockwise or anticlockwise. In a mirror, left and right swap.",
      ['Full 360°, half 180°, quarter 90°', 'Clockwise = the way clock hands go', 'Quarter turn clockwise: N → E', 'Mirror: left and right swap'])
  ]);

  ep('Building with cubes and nets', 'how to count cubes in a model, and which nets fold into a cube.', [
    SC('Counting cubes', 'A block of cubes', [
      st("Here is a block made from cubes, two long, two wide and two high. How many cubes is it made from?", cubes([[2, 2], [2, 2]]))]),
    SC('Count in layers', 'Hidden cubes count too', [
      st("Some cubes are hidden behind others. So count in layers. The bottom layer has two times two, four cubes. The top layer has four more.", V.eq('4 + 4 = 8 cubes', 'g') + V.rule('Count layer by layer, not just what you see.'))]),
    SC('Towers', 'Count each tower', [
      st("This model is made of towers. Count each tower: three, one, two and two. Add them up: eight cubes.", cubes([[3, 1], [2, 2]]) + V.eq('3 + 1 + 2 + 2 = 8', 'g'))]),
    SC('Nets of a cube', 'Six squares', [
      st("A net of a cube is six squares joined edge to edge that fold into a cube. Here is one, shaped like a cross.", LK.grid(4, 3, function (i, j) { return (j === 1 || i === 1) ? true : 'skip'; }, { u: 40, alt: 'A cross-shaped net of six squares' }))]),
    SC('Not every six squares', 'Watch for overlaps', [
      st("Six squares in a long line won't work: when you fold them, faces overlap and two faces are missing. There are exactly eleven different nets of a cube.", LK.grid(6, 1, 6, { u: 40, alt: 'Six squares in a row' }) + V.eq('6 in a row → not a cube', 'b'))]),
    SC('Opposite faces', 'On a dice', [
      st("On a net, faces with one square between them in a straight line end up opposite each other. On a dice, opposite faces always add to seven.", V.eq('1 + 6 = 7 · 2 + 5 = 7 · 3 + 4 = 7', 'g'))]),
    turn("Your turn! A model has a bottom layer of six cubes and a top layer of three. How many cubes? Pause and try it.", V.eq('6 + 3 = ?'),
      "Six plus three is nine cubes.", V.eq('9 cubes', 'g')),
    rec('Building with cubes and nets', "Count cubes layer by layer, remembering the hidden ones. A net of a cube has six squares that fold with no overlaps. Squares one apart in a line become opposite faces.",
      ['Count in layers or towers', 'Hidden cubes count', 'Cube net: 6 squares, no overlaps', 'Dice: opposite faces add to 7'])
  ]);

  ep('Painted cubes and stacks', 'how to count faces you can see, and how many cubes have paint on them.', [
    SC('A stack of cubes', 'What can you see?', [
      st("Here is a stack of cubes. We can count the cubes, but we can also count the faces you can see.", cubes([[2, 1], [1, 1]]))]),
    SC('Painting a big cube', 'Made of small cubes', [
      st("Imagine a big cube made of twenty-seven small cubes, three by three by three. We dip it in paint. How many small cubes have paint on them?", cubes([[3, 3, 3], [3, 3, 3], [3, 3, 3]]))]),
    SC('Three painted faces', 'The corners', [
      st("The corner cubes have three painted faces. A cube has eight corners, so eight small cubes have three faces painted.", V.eq('Corners: 8 cubes with 3 faces painted', 'g'))]),
    SC('Two painted faces', 'Along the edges', [
      st("Cubes along an edge, but not at a corner, have two painted faces. Each of the twelve edges has one such cube in the middle.", V.eq('Edges: 12 cubes with 2 faces painted', 'g'))]),
    SC('One painted face', 'Middle of each face', [
      st("The cube in the middle of each face has one painted face. There are six faces, so six of these cubes.", V.eq('Face centres: 6 cubes with 1 face painted', 'g')),
      st("And one cube, right in the centre, has no paint at all.", V.eq('Centre: 1 cube with no paint', 'b'))]),
    SC('Check the total', 'Everything adds up', [
      st("Eight plus twelve plus six plus one is twenty-seven. That matches, so we have counted every cube.", V.eq('8 + 12 + 6 + 1 = 27 ✓', 'g'))]),
    turn("Your turn! A tower of four cubes stands on a table and is painted, but not underneath. How many faces are painted? Pause and think.", V.eq('A tower of 4 cubes'),
      "Each cube shows four sides: sixteen faces. Add one on the top. Seventeen painted faces.", V.eq('4 × 4 + 1 = 17', 'g')),
    rec('Painted cubes and stacks', "Corners have three painted faces, edges have two, the middle of each face has one, and hidden cubes have none. Always check that your groups add up to the total.",
      ['Corners: 3 painted faces', 'Edges: 2 painted faces', 'Face middles: 1 painted face', 'Inside: none. Check the total.'])
  ]);

  /* ===================== put each P5 topic together ===================== */
  var Q = function (n) { return (BT.EP_BY_TOPIC && BT.EP_BY_TOPIC[n]) || []; };
  function add(n, extra) {
    var have = Q(n).filter(function (t) { return extra.indexOf(t) < 0 && BT.EP[t]; });
    L.use(n, have.concat(extra));
  }
  add(503, ['Improper fractions and mixed numbers', 'Counting parts and fractions as decimals']);
  add(504, ['Percentages', 'Percentages of a set and of a measure']);
  add(505, ['Calendars and time zones']);
  add(506, ['Expressions from words and shapes']);
  add(507, ['3D shapes', 'Solid shapes and reflections']);
  add(508, ['Mode, range and chance', 'Two-way tables, Venn diagrams and pie charts']);
  add(509, ['Always true, factors and multiples']);
  add(510, ['Prime numbers and square numbers', 'Always true, factors and multiples']);
  add(513, ['Turns and mirror images', 'Building with cubes and nets', 'Painted cubes and stacks']);
})();
