/* story_more2.js: extra teacher lessons for S1 to S3 question types added in gap3.js. Appended to existing Watch steps. */
(function () {
  'use strict';
  var BT = window.BT; if (!BT || !BT.storyMore || !BT.sv) return;
  var V = BT.sv;
  var SC = function (h, sub, steps) { return { h: h, sub: sub, steps: steps }; };
  var st = function (say, html) { return { say: say, html: html || '' }; };
  var REC = function (say, items) { return SC('Let’s recap', '', [st(say, V.list(items))]); };
  var EP = {
    std: { title: 'Standard form', goal: 'how to write very big and very small numbers in standard form.', scenes: [
      SC('Big numbers', 'A number between 1 and 10 times a power of 10', [
        st("Standard form writes a number as a number between one and ten, times a power of ten. Take eighty-nine thousand. Put the decimal point after the first digit, to get eight point nine. The point moved four places, so the power is four.", V.eq('89 000 = 8.9 × 10⁴', 'g'))]),
      SC('Small numbers', 'Negative powers', [
        st("For a small number, such as zero point zero zero four five, the point moves to the right, so the power is negative. It moves three places: four point five times ten to the minus three.", V.eq('0.0045 = 4.5 × 10⁻³', 'g'))]),
      REC("One digit before the point. Big number: positive power. Small number: negative power.", ['1 ≤ number < 10', 'Big → positive power', 'Small → negative power'])] },
    pct: { title: 'Percentage change and wages', goal: 'how to work out percentage change, reverse percentages and pay.', scenes: [
      SC('Percentage change', 'Change over original', [
        st("A price goes from fifty pounds to sixty-five pounds. The change is fifteen. Fifteen divided by fifty is zero point three, which is thirty percent increase.", V.eq('change ÷ original × 100 = 15 ÷ 50 × 100 = 30%', 'g'))]),
      SC('Reverse percentages', 'Work back to one hundred percent', [
        st("After a twenty percent increase a price is sixty pounds. Sixty is a hundred and twenty percent of the original. Divide by a hundred and twenty to find one percent, then multiply by a hundred. The original was fifty pounds.", V.eq('60 ÷ 120 × 100 = 50', 'g'))]),
      SC('Overtime and tax', 'Pay the basic first', [
        st("Overtime at time and a half. Basic rate twelve pounds. Overtime rate is eighteen pounds an hour. For income tax, take off the tax-free allowance first, then find the percentage of what is left.", V.list(['Time and a half = × 1.5', 'Tax: take off the allowance first', 'Then find the percentage']))]),
      REC("Change over original times a hundred. For reverse percentages, divide by the percentage then times a hundred.", ['change ÷ original × 100', 'Reverse: ÷ percentage × 100', 'Overtime: higher rate for extra hours'])] },
    line: { title: 'Gradient and straight lines', goal: 'how to find a gradient and use y = mx + c.', scenes: [
      SC('Gradient', 'Change in y over change in x', [
        st("The gradient measures how steep a line is. Take two points, three, two and seven, ten. Up is eight, along is four. Eight over four is two.", V.eq('(10 − 2) ÷ (7 − 3) = 2', 'g'))]),
      SC('y = mx + c', 'Gradient and y-intercept', [
        st("In y equals m x plus c, m is the gradient and c is where the line crosses the y-axis. For y equals minus four x plus two, the gradient is minus four and the intercept is two.", V.eq('y = −4x + 2:  m = −4, c = 2', 'g'))]),
      REC("Gradient is up over along. In y = mx + c, m is the gradient and c the intercept.", ['m = Δy ÷ Δx', 'c = y-intercept'])] },
    simul: { title: 'Simultaneous equations', goal: 'how to solve two equations together.', scenes: [
      SC('Eliminate a letter', 'Make one letter match', [
        st("Two x plus three y equals twenty-seven, and x plus three y equals twenty-one. The y terms match, so subtract the equations. That leaves x equals six.", V.eq('(2x + 3y) − (x + 3y) = 27 − 21 → x = 6', 'g')),
        st("Put x equals six into the second equation. Six plus three y equals twenty-one, so three y is fifteen, and y equals five.", V.eq('x = 6, y = 5', 'g'))]),
      REC("Make one letter match, subtract or add, then substitute back.", ['Match one letter', 'Subtract or add', 'Substitute back'])] },
    pyth: { title: 'Pythagoras and trigonometry', goal: 'how to find sides with Pythagoras and ratios with sin, cos and tan.', scenes: [
      SC('Pythagoras', 'Square, add, root', [
        st("In a right-angled triangle, the square of the longest side equals the sum of the squares of the other two. Sides five and twelve: twenty-five plus a hundred and forty-four is a hundred and sixty-nine. The square root is thirteen.", V.eq('5² + 12² = 169, √169 = 13', 'g')),
        st("To find a short side, subtract instead. Hypotenuse thirteen, one side five. A hundred and sixty-nine take away twenty-five is a hundred and forty-four. The root is twelve.", V.eq('13² − 5² = 144, √144 = 12', 'g'))]),
      SC('SOH CAH TOA', 'Opposite, adjacent, hypotenuse', [
        st("Sine is opposite over hypotenuse. Cosine is adjacent over hypotenuse. Tangent is opposite over adjacent. In a three, four, five triangle, tan of the angle opposite the three is three quarters.", V.list(['SOH: sin = O ÷ H', 'CAH: cos = A ÷ H', 'TOA: tan = O ÷ A']))]),
      REC("Square, add and root for the longest side. Subtract for a short side.", ['Longest side: add squares', 'Short side: subtract', 'SOH CAH TOA'])] },
    circ: { title: 'Circles, similarity and solids', goal: 'how to use circle formulae, scale factors and volume formulae.', scenes: [
      SC('Circles', 'Circumference and area', [
        st("Circumference is two pi r, or pi times diameter. Area is pi r squared. With radius ten and pi three point one four, circumference is sixty-two point eight.", V.eq('C = 2πr = 62.8;  A = πr² = 314', 'g'))]),
      SC('Scale factors', 'Lengths, areas and volumes', [
        st("When a shape is enlarged by a scale factor k, lengths multiply by k, areas by k squared and volumes by k cubed. Scale factor three: areas are nine times bigger, volumes twenty-seven times bigger.", V.eq('length × k   area × k²   volume × k³', 'g'))]),
      SC('Volumes', 'Area of the end times length', [
        st("A prism has a volume equal to the area of its end times its length. A cylinder is pi r squared times height. A cone is a third of that.", V.list(['Prism: end area × length', 'Cylinder: πr²h', 'Cone: ⅓ πr²h']))]),
      REC("Check which formula, then put the numbers in carefully.", ['Circle: 2πr and πr²', 'Scale: k, k², k³', 'Solids: end area × length'])] },
    alg: { title: 'Brackets, factorising and equations', goal: 'how to expand, factorise and solve.', scenes: [
      SC('Expand', 'Multiply everything inside', [
        st("Three times x plus five is three x plus fifteen. For two brackets, multiply each term by each term: x plus two times x plus three is x squared plus five x plus six.", V.eq('(x + 2)(x + 3) = x² + 5x + 6', 'g'))]),
      SC('Factorise', 'Common factor and difference of two squares', [
        st("To factorise twelve x plus eighteen, the biggest number in both is six. That gives six, bracket, two x plus three. And x squared minus sixteen is x plus four times x minus four.", V.eq('12x + 18 = 6(2x + 3);  x² − 16 = (x + 4)(x − 4)', 'g'))]),
      SC('Equations', 'Do the same to both sides', [
        st("Solve five x minus eight equals two x plus ten. Take two x from both sides, add eight, then divide by three. x equals six.", V.eq('5x − 8 = 2x + 10 → 3x = 18 → x = 6', 'g'))]),
      REC("Expand by multiplying, factorise by finding what is common, and keep equations balanced.", ['Expand: multiply each term', 'Factorise: common factor', 'Balance both sides'])] },
    stats: { title: 'Quartiles and probability', goal: 'how to find quartiles and use probability rules.', scenes: [
      SC('Quartiles', 'Median of each half', [
        st("Put the numbers in order. The median splits them in half. The lower quartile is the median of the lower half, and the upper quartile is the median of the upper half. The interquartile range is the upper minus the lower.", V.eq('IQR = Q3 − Q1', 'g'))]),
      SC('Probability', 'Not, or, and expected', [
        st("The probability of not happening is one minus the probability of happening. Expected number is probability times the number of trials. For two separate outcomes joined by or, add their probabilities.", V.list(['P(not) = 1 − P', 'Expected = P × n', 'Or: add']))]),
      REC("Order first for quartiles. All probabilities add to one.", ['Order the data', 'IQR = Q3 − Q1', 'P(not) = 1 − P'])] }
  };
  var MAP = { std: [821, 841], pct: [822, 824, 841, 842], line: [828, 847], simul: [848], pyth: [830, 849], circ: [826, 830, 831, 844, 850, 851], alg: [827, 845, 846], stats: [832, 852] };
  Object.keys(MAP).forEach(function (k) { MAP[k].forEach(function (id) { BT.storyMore(id, [EP[k]]); }); });
})();
