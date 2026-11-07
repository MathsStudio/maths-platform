/* story_more.js: extra teacher lessons for the question types added in gap1.js and gap2.js (mental arithmetic gaps).
   Each lesson is appended to the Watch step of the topics it belongs to. Nothing is removed. */
(function () {
  'use strict';
  var BT = window.BT; if (!BT || !BT.storyMore || !BT.sv) return;
  var V = BT.sv;
  var SC = function (h, sub, steps) { return { h: h, sub: sub, steps: steps }; };
  var st = function (say, html) { return { say: say, html: html || '' }; };
  var REC = function (say, items) { return SC('Let’s recap', '', [st(say, V.list(items))]); };

  var EP = {
    given: { title: 'Use a fact you know', goal: 'how to use one known answer to find others.', scenes: [
      SC('Change the numbers the same way', 'If 24 × 3 = 72', [
        st("Suppose you know that twenty-four times three is seventy-two. You can use it to answer lots of other questions. Look at how the numbers change.", V.eq('24 × 3 = 72', 'b')),
        st("What is two hundred and forty times three? The twenty-four became ten times bigger, so the answer becomes ten times bigger too. Seven hundred and twenty.", V.eq('240 × 3 = 720', 'g')),
        st("What about twenty-four times zero point three? The three became ten times smaller, so the answer is ten times smaller. Seven point two.", V.eq('24 × 0.3 = 7.2', 'g'))]),
      SC('Clever shortcuts', 'Groups of the same number', [
        st("Sometimes you can group. Fifteen times sixty-six, take away fifteen times sixty-three. Both have fifteen, so you only need fifteen times the difference, which is three. Forty-five.", V.eq('15 × 66 − 15 × 63 = 15 × 3 = 45', 'g')),
        st("To multiply by ninety-nine, multiply by one hundred and take away one lot of the number. Thirty-four times ninety-nine is three thousand four hundred, take away thirty-four, which is three thousand three hundred and sixty-six.", V.eq('34 × 99 = 3400 − 34 = 3366', 'g'))]),
      REC("Look at how each number changed, then change the answer in the same way. And look for the same number appearing twice.", ['Ten times bigger → answer ten times bigger', 'Same factor twice → group them', '× 99 → × 100 then take one away'])] },
    estimate: { title: 'Sensible estimates and rounding with units', goal: 'how to pick a sensible size and round measurements.', scenes: [
      SC('Pick a sensible size', 'Compare with something you know', [
        st("To estimate, compare with something you know. A bag of sugar is one kilogram. An apple is about one hundred grams. A big family car is about one thousand two hundred kilograms.", V.cards(['bag of sugar 1 kg', 'apple 100 g', 'car 1200 kg'], ['b', 'g', 'o'])),
        st("A bath holds about one hundred and fifty litres. A cup of tea is about two hundred and fifty millilitres. Always check the unit as well as the number.", V.cards(['bath 150 litres', 'cup 250 ml'], ['b', 'g']))]),
      SC('Round with units', 'Change the unit first', [
        st("A rope is five hundred and eighty-two centimetres long. To the nearest metre? One hundred centimetres make a metre, so that is five point eight two metres, which rounds to six metres.", V.eq('582 cm = 5.82 m ≈ 6 m', 'g')),
        st("A book costs three pounds seventy-four. To the nearest ten pence? The units digit is four, so round down to three pounds seventy.", V.eq('£3.74 ≈ £3.70', 'g'))]),
      REC("Think of something you know, then check the unit. To round with units, change the unit first.", ['Compare with a known size', 'Check the unit', 'Change the unit, then round'])] },
    calendar: { title: 'Calendars and time zones', goal: 'how to work with months, leap years and time zones.', scenes: [
      SC('Days in months', 'Thirty days has September', [
        st("Thirty days has September, April, June and November. All the rest have thirty-one, except February, which has twenty-eight, or twenty-nine in a leap year.", V.list(['30 days: Sep, Apr, Jun, Nov', '31 days: the rest', 'February: 28 or 29'])),
        st("A leap year is a year that divides exactly by four. Two thousand and twenty-four is a leap year. Twenty twenty-five is not.", V.eq('2024 ÷ 4 = 506 → leap year', 'g'))]),
      SC('Time zones', 'Ahead means later', [
        st("Paris is one hour ahead of London. Ahead means the clock shows a later time. If it is noon in London, it is one pm in Paris.", V.eq('London 12:00 → Paris 13:00', 'g')),
        st("New York is five hours behind London. Behind means earlier. If it is three pm in London, it is ten am in New York. Going the other way, you do the opposite.", V.eq('London 15:00 → New York 10:00', 'g'))]),
      REC("Learn the month rhyme. Ahead means add, behind means subtract.", ['Leap year: divides by 4', 'Ahead → add hours', 'Behind → take away hours'])] },
    fractions: { title: 'Counting parts and fractions as decimals', goal: 'how to count fractions in a number and change fractions to decimals.', scenes: [
      SC('How many parts?', 'Fractions in a whole number', [
        st("How many quarters are in six and three quarters? Each whole has four quarters. Six wholes make twenty-four quarters, plus three more makes twenty-seven.", V.eq('6 × 4 + 3 = 27', 'g'))]),
      SC('Fractions to decimals', 'Make the bottom 100', [
        st("To change three twentieths to a decimal, make the bottom one hundred by multiplying top and bottom by five. That gives fifteen hundredths, which is zero point one five.", V.eq('3/20 = 15/100 = 0.15', 'g')),
        st("To multiply a fraction by a whole number, multiply the top. Three eighths times four is twelve eighths, which simplifies to one and a half.", V.eq('3/8 × 4 = 12/8 = 1½', 'g'))]),
      REC("Count wholes times parts, then add the extra parts. Make the bottom 100 for decimals.", ['Wholes × parts + extra', 'Bottom 100 → decimal', 'Multiply the top by a whole number'])] },
    pctset: { title: 'Percentages of a set and of a measure', goal: 'how to find a percentage of a group or an amount.', scenes: [
      SC('Percentage of a set', 'Count, then scale to 100', [
        st("What percentage of the numbers from one to twenty are prime? The primes are two, three, five, seven, eleven, thirteen, seventeen and nineteen. That is eight out of twenty.", V.eq('8 out of 20 = 40/100 = 40%', 'g'))]),
      SC('Percentage of an amount', 'Fifteen percent full', [
        st("A tank holds eight hundred litres and is twenty-five percent full. Twenty-five percent is a quarter, so two hundred litres.", V.eq('25% of 800 = 200', 'g')),
        st("For a bag of one point two kilograms with fifty percent meat, change to grams first: one thousand two hundred grams, then half is six hundred.", V.eq('50% of 1200 g = 600 g', 'g'))]),
      REC("Count how many fit, write it out of the total, then scale to 100.", ['Count the ones that fit', 'Fraction out of the total', 'Scale to 100 for the percentage'])] },
    algebra: { title: 'Expressions from words and shapes', goal: 'how to write algebra from words, machines and shapes.', scenes: [
      SC('Expressions from words', 'Order matters', [
        st("I think of a number n, multiply by three, then add four. That is three n plus four. But if I add four first and then multiply by three, I need brackets: three times n plus four.", V.eq('3n + 4   vs   3(n + 4)', 'b'))]),
      SC('Perimeter with algebra', 'Add all the sides', [
        st("A rectangle is n plus two long and five wide. Its perimeter is two lengths plus two widths. Two n plus four, plus ten. That is two n plus fourteen.", V.eq('2(n + 2) + 2 × 5 = 2n + 14', 'g'))]),
      REC("Follow the words in order. Brackets show what is done first.", ['Steps in order', 'Brackets for add-then-multiply', 'Perimeter: add every side'])] },
    shapes: { title: 'Solid shapes and reflections', goal: 'how to tell prisms apart and name reflected shapes.', scenes: [
      SC('Prisms', 'The same shape all the way along', [
        st("A prism has the same cross-section all the way along. A cube, a cuboid and a triangular prism are prisms. A pyramid comes to a point, so it is not a prism.", V.cards(['cube ✓', 'triangular prism ✓', 'pyramid ✗'], ['g', 'g', 'o']))]),
      SC('Reflect and join', 'Mirror image', [
        st("Reflect a right-angled triangle across its longest side and join the two. You get a kite. Reflect it across a short side and you get an isosceles triangle.", V.list(['Across the longest side → kite', 'Across a short side → isosceles triangle'])),
        st("A circle that just fits inside a square touches all four sides. So the side of the square is the same as the diameter of the circle.", V.eq('side = diameter', 'g'))]),
      REC("Sketch it. Prisms have a constant cross-section.", ['Prism: same cross-section', 'Reflect, join, name', 'Circle in a square: side = diameter'])] },
    data: { title: 'Two-way tables, Venn diagrams and pie charts', goal: 'how to complete tables, read Venn diagrams and use pie chart angles.', scenes: [
      SC('Two-way tables', 'Rows and columns add up', [
        st("In a two-way table, every row and every column adds to its total. Find a row or column with only one number missing, and use subtraction.", V.eq('total − known = missing', 'g'))]),
      SC('Pie chart angles', 'The whole circle is 360', [
        st("Out of thirty children, six chose swimming. One child is three hundred and sixty divided by thirty, which is twelve degrees. Six children make seventy-two degrees.", V.eq('360 ÷ 30 = 12°;  6 × 12° = 72°', 'g')),
        st("A graph can mislead if its vertical axis does not start at zero. Small differences then look huge. Always check the axis.", V.note('Check where the axis starts'))]),
      REC("Rows and columns add to totals. A whole pie is 360 degrees. Check the axis.", ['Totals help you find missing numbers', '360 ÷ total = angle for one', 'Axis should start at 0'])] },
    reason: { title: 'Always true, factors and multiples', goal: 'how to decide what must be true about multiples and factors.', scenes: [
      SC('Must be true', 'Try examples', [
        st("If x is a multiple of six and y is a multiple of five, then x times y is always a multiple of thirty. Because x is six times something and y is five times something.", V.eq('x × y = 6a × 5b = 30ab', 'g')),
        st("To check a statement is always true, try a few examples, and try to find one that breaks it.", V.note('One example that breaks it is enough to show it is not always true'))]),
      SC('Highest common factor', 'The biggest number that goes into both', [
        st("List the factors of eighteen and thirty. The biggest in both lists is six. That is the highest common factor.", V.eq('HCF(18, 30) = 6', 'g'))]),
      REC("Write numbers as multiples to see what must be true.", ['Try examples', 'Write x = pa, y = qb', 'HCF: biggest shared factor'])] },
    ratio: { title: 'Ratio with different units', goal: 'how to write a ratio when the units are different.', scenes: [
      SC('Same units first', 'Kilograms and grams', [
        st("Four kilograms to two thousand grams. Change the kilograms to grams first: four thousand to two thousand. Divide both by two thousand, to get two to one.", V.eq('4 kg : 2000 g = 4000 : 2000 = 2 : 1', 'g')),
        st("In every nine cars, eight are silver. In a car park of one hundred and eight cars, there are twelve groups of nine, so ninety-six silver cars.", V.eq('108 ÷ 9 = 12;  12 × 8 = 96', 'g'))]),
      REC("Use the same unit before you write a ratio.", ['Change to the same unit', 'Simplify', '“in every” → groups'])] },
    cubes: { title: 'Painted cubes and stacks', goal: 'how to count cubes in a stack and painted faces.', scenes: [
      SC('Painted faces', 'Count the outside', [
        st("A three by three by three cube is made of twenty-seven small cubes. It has six faces and each shows nine small faces. So fifty-four are painted.", V.eq('6 × 3 × 3 = 54', 'g')),
        st("Peel off the outer layer. The unpainted cubes make a smaller cube two fewer on each side. For three by three by three, that is just one cube in the middle.", V.eq('(3 − 2)³ = 1', 'g'))]),
      REC("Outside faces: six times side times side. Hidden cubes: take two off each side.", ['6 × side × side', '(side − 2)³ hidden', 'Count each stack and add'])] }
  };

  var MAP = {
    given: [502, 2, 702, 802], estimate: [501, 1, 701, 801, 807, 808], calendar: [505, 5, 705, 807, 825],
    fractions: [503, 3, 703, 803], pctset: [504, 4, 704, 804], algebra: [506, 6, 706, 809, 827],
    shapes: [507, 7, 707, 810, 811], data: [508, 8, 708, 812, 832, 852], reason: [509, 9, 709, 510, 10, 710, 802],
    ratio: [11, 711, 805, 823, 843], cubes: [513, 13, 713, 813, 833, 853]
  };
  BT.storyMoreEp = EP;
  Object.keys(MAP).forEach(function (k) { MAP[k].forEach(function (id) { BT.storyMore(id, [EP[k]]); }); });
})();
