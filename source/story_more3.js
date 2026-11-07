/* story_more3.js: lessons for the remaining new question types (number lines, numbers in words, digit values, coins, perimeter puzzles;
   indices and negatives, speed, polygon angles, bearings, coordinates, best buys and interest). Appended to existing Watch steps. */
(function () {
  'use strict';
  var BT = window.BT; if (!BT || !BT.storyMore || !BT.sv) return;
  var V = BT.sv;
  var SC = function (h, sub, steps) { return { h: h, sub: sub, steps: steps }; };
  var st = function (say, html) { return { say: say, html: html || '' }; };
  var REC = function (say, items) { return SC('Let’s recap', '', [st(say, V.list(items))]); };
  var EP = {
    numline: { title: 'Number lines, words and digit values', goal: 'how to read a number line, write numbers in words and find the value of a digit.', scenes: [
      SC('Read a number line', 'Work out the step first', [
        st("On a number line, first work out what each small step is worth. If the ends are three and four with ten gaps between, each step is one tenth. An arrow four steps along points to three point four.", V.eq('3 → 4 in 10 steps: each step 0.1', 'g')),
        st("Negative numbers sit to the left of zero. On a line from minus five to five, the arrow three steps left of zero points to minus three.", V.eq('−3 is 3 steps left of 0', 'g'))]),
      SC('Words and figures', 'Say the thousands first', [
        st("Sixty-four thousand and forty-eight. Say the thousands first: sixty-four thousand is 64,000. Then forty-eight. So the number is 64,048. A column with nothing in it needs a zero.", V.eq('sixty-four thousand and forty-eight = 64,048', 'g'))]),
      SC('Value of a digit', 'What the column is worth', [
        st("In 472,869, the nine is in the ones column, so its value is nine. The six is in the tens column, so it is worth sixty. The two is in the ten thousands column, so it is worth twenty thousand.", V.eq('472,869:  6 → 60,   2 → 20,000', 'g'))]),
      REC("Find the step size. Say the thousands first. A digit's value is the digit times its column.", ['Step = gap ÷ number of steps', 'Thousands first, zeros for gaps', 'Value = digit × column'])] },
    coins: { title: 'Coins and perimeter puzzles', goal: 'how to count coins and solve perimeter and area puzzles.', scenes: [
      SC('Coins', 'Change to pence', [
        st("How many two pence coins are in four pounds forty-two? Change to pence first: four hundred and forty-two pence. Divide by two to get two hundred and twenty-one coins.", V.eq('442 ÷ 2 = 221', 'g'))]),
      SC('When perimeter equals area', 'Try and check', [
        st("A square has a perimeter that equals its area. Call the side s. Perimeter is four s and area is s times s. Try s equals four: perimeter sixteen, area sixteen. They match.", V.eq('s = 4:  4 × 4 = 16 = 4²', 'g'))]),
      REC("Change to the smallest unit first. For puzzles, write the formulae and try numbers.", ['£ → pence, then divide', 'Perimeter and area formulae', 'Try, check, adjust'])] },
    numS: { title: 'Powers, negatives and BODMAS', goal: 'how to work with powers, negative numbers and the order of operations.', scenes: [
      SC('Powers and laws of indices', 'Add or subtract the powers', [
        st("Three squared is three times three, nine. When you multiply powers of the same letter, add the indices: x to the four times x to the three is x to the seven. When you divide, subtract.", V.eq('x⁴ × x³ = x⁷;   x⁷ ÷ x³ = x⁴', 'g'))]),
      SC('Negative numbers', 'Subtracting a negative adds', [
        st("Nine plus minus four is five. Subtracting a negative is the same as adding, so five minus minus three is eight. A positive times a negative is negative.", V.list(['9 + (−4) = 5', '5 − (−3) = 8', '4 × (−3) = −12']))]),
      SC('BODMAS', 'Brackets, orders, then ×÷, then +−', [
        st("Seven plus four times three, take away five. Do the multiplication first: twelve. Then seven plus twelve is nineteen, take away five is fourteen.", V.eq('7 + 4 × 3 − 5 = 7 + 12 − 5 = 14', 'g'))]),
      REC("Powers: add or subtract the indices. Minus a negative adds. Multiply before you add.", ['Laws of indices', '− (−) → +', 'BODMAS'])] },
    speedL: { title: 'Speed, distance and time', goal: 'how to use speed, distance and time, including average speed.', scenes: [
      SC('The triangle', 'D, S, T', [
        st("Speed is distance divided by time. Distance is speed times time. Time is distance divided by speed. A car goes a hundred and twenty kilometres in two hours: sixty kilometres an hour.", V.eq('S = D ÷ T,  D = S × T,  T = D ÷ S', 'b'))]),
      SC('Average speed', 'Total distance over total time', [
        st("A bus goes ninety kilometres at sixty, then sixty kilometres at thirty. Times are one and a half hours and two hours, which is three and a half hours. Total distance a hundred and fifty. Average speed is about forty-three kilometres an hour.", V.eq('150 ÷ 3.5 ≈ 42.9 km/h', 'g'))]),
      REC("Average speed is total distance divided by total time, not the average of the speeds.", ['S = D ÷ T', 'Minutes → hours first', 'Total D ÷ total T'])] },
    angS: { title: 'Polygon angles, bearings and coordinates', goal: 'how to use polygon angle rules, bearings and coordinates.', scenes: [
      SC('Polygon angles', 'Interior and exterior', [
        st("The interior angles of a polygon with n sides add up to n minus two, times a hundred and eighty. An eight-sided polygon: six times a hundred and eighty is one thousand and eighty degrees. The exterior angles always add to three hundred and sixty.", V.eq('(8 − 2) × 180 = 1080°;   360 ÷ 8 = 45°', 'g'))]),
      SC('Bearings', 'Three figures, clockwise from north', [
        st("A bearing is an angle measured clockwise from north, written with three figures. East is zero nine zero. To get the back bearing, add or subtract one hundred and eighty.", V.eq('East = 090°;  back of 060° = 240°', 'g'))]),
      SC('Coordinates', 'Reflect, midpoint, enlarge', [
        st("Reflecting in the x-axis changes the sign of y. Reflecting in the y-axis changes the sign of x. The midpoint adds the coordinates and halves. Enlarging from the origin multiplies both coordinates.", V.list(['x-axis: (x, −y)', 'y-axis: (−x, y)', 'Midpoint: halve the sums']))]),
      REC("Polygon: (n − 2) × 180. Bearing: clockwise from north. Reflect by changing a sign.", ['(n − 2) × 180', 'Three figures, clockwise', 'Reflect: change a sign'])] },
    buy: { title: 'Best buys, interest and exchange', goal: 'how to compare prices and work out interest and exchange.', scenes: [
      SC('Best buys', 'Price for the same amount', [
        st("Two hundred and fifty grams for one pound fifty, or five hundred grams for two pounds fifty. Compare the price for five hundred grams: three pounds against two pounds fifty. The big pack is better.", V.eq('250 g: £3.00 per 500 g   vs   500 g: £2.50', 'g'))]),
      SC('Simple interest and exchange', 'Same interest every year', [
        st("Simple interest is the same each year. Five hundred pounds at four percent is twenty pounds a year, so sixty pounds in three years. For exchange, multiply by the rate: one pound is one point two euros, so two hundred pounds is two hundred and forty euros.", V.eq('4% of 500 = 20;  ×3 = 60.   200 × 1.2 = 240', 'g'))]),
      REC("Compare the price for the same amount. Simple interest is the same every year.", ['Same amount, compare', 'Interest × years', 'Multiply by the rate'])] }
  };
  var MAP = { numline: [501, 1, 701, 801], coins: [505, 5, 705, 807, 808, 825], numS: [802], speedL: [807, 825, 843], angS: [810, 811, 829, 851], buy: [806, 842] };
  Object.keys(MAP).forEach(function (k) { MAP[k].forEach(function (id) { BT.storyMore(id, [EP[k]]); }); });
})();
