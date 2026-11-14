/* lessons_s2b.js: the older S2 Watch lessons rebuilt in full with more worked examples,
   then each S2 topic's Watch lesson put together. */
(function () {
  'use strict';
  var BT = window.BT; if (!BT || !BT.L || !BT.L.lesson) return;
  var L = BT.L, V = BT.sv, LK = BT.lk, E = L.E, LS = L.lesson;
  var SPA = window.SPA, cubes = function (h) { return SPA && SPA.cubes ? SPA.cubes(h, 215, null, true) : ''; };

  /* ---------- 821 ---------- */
  LS('Standard form', 'how to write very large and very small numbers in standard form.', {
    intro: ['Standard form', 'a × 10ⁿ', "Standard form writes a number as a number between one and ten, times a power of ten. It makes very big and very small numbers easy to read.", E('a × 10ⁿ, where 1 ≤ a < 10', 'g')],
    ex: [['Large numbers', '4,500,000', [["Move the point to make four point five: six places. So four point five times ten to the power six.", E('4,500,000 = 4.5 × 10⁶', 'g')]]],
      ['Small numbers', '0.00072', [["Move the point to make seven point two: four places right, so the power is negative four.", E('0.00072 = 7.2 × 10⁻⁴', 'g')]]],
      ['Back to ordinary form', '3.08 × 10⁵', [["Move the point five places right: three hundred and eight thousand.", E('3.08 × 10⁵ = 308,000', 'g')]]],
      ['Multiplying', 'Multiply the numbers, add the powers', [["Two times ten cubed times four times ten to the five is eight times ten to the eight.", E('(2 × 10³)(4 × 10⁵) = 8 × 10⁸', 'g')]]]],
    real: ['Science', "The Sun is about one hundred and fifty million kilometres away: one point five times ten to the eight. A red blood cell is about seven times ten to the minus six metres wide.", E('1.5 × 10⁸ km · 7 × 10⁻⁶ m', 'g')],
    turn: ["Your turn! Write sixty-two thousand in standard form. Pause and try it.", E('62,000'), "Six point two times ten to the four.", E('6.2 × 10⁴', 'g')],
    rec: ["Write a number between one and ten, times a power of ten. Big numbers have positive powers; small numbers have negative powers.", ['1 ≤ a < 10', 'Count the moves of the point', 'Big: positive power', 'Small: negative power']],
    deep: ['The power of ten tells you how many places the decimal point moved.', '45 × 10⁵ is not standard form: the first number must be less than 10.']
  });

  LS('Index laws and negative indices', 'the laws for multiplying and dividing powers, and what negative and zero powers mean.', {
    intro: ['Index laws', 'Shortcuts for powers', "When the base is the same, there are quick rules for multiplying, dividing and raising powers.", V.tbl([['aᵐ × aⁿ', 'aᵐ⁺ⁿ'], ['aᵐ ÷ aⁿ', 'aᵐ⁻ⁿ'], ['(aᵐ)ⁿ', 'aᵐⁿ']], ['Rule', 'Result'])],
    ex: [['Multiplying', 'Add the powers', [["Three to the four times three to the two is three to the six.", E('3⁴ × 3² = 3⁶', 'g')]]],
      ['Dividing', 'Subtract the powers', [["Five to the seven divided by five to the three is five to the four.", E('5⁷ ÷ 5³ = 5⁴', 'g')]]],
      ['Power of a power', 'Multiply the powers', [["Two squared, all cubed, is two to the six.", E('(2²)³ = 2⁶', 'g')]]],
      ['Zero and negative powers', 'a⁰ = 1, a⁻ⁿ = 1/aⁿ', [["Anything to the power zero is one. Two to the minus three is one over two cubed: one eighth.", E('7⁰ = 1 · 2⁻³ = 1/8', 'g')]]]],
    turn: ["Your turn! Simplify x to the five times x to the minus two. Pause and try it.", E('x⁵ × x⁻²'), "Add the powers: x cubed.", E('x³', 'g')],
    rec: ["With the same base: multiply means add powers, divide means subtract powers, a power of a power means multiply. a to the zero is one; a negative power is one over the positive power.", ['× : add powers', '÷ : subtract powers', '( )ⁿ: multiply powers', 'a⁰ = 1, a⁻ⁿ = 1/aⁿ']],
    deep: ['a⁰ = 1 because aⁿ ÷ aⁿ is 1, and the rule gives aⁿ⁻ⁿ = a⁰.', 'The laws only work with the same base: 2³ × 3² cannot be combined.']
  });

  /* ---------- 822 / 824 ---------- */
  LS('Compound percentage change', 'how to apply a percentage change repeatedly, like compound interest.', {
    intro: ['Compound change', 'Change on the new amount', "In compound change, each percentage is applied to the new amount, not the original. We use a multiplier and a power.", E('Amount × multiplierⁿ', 'g')],
    ex: [['Compound interest', '£500 at 4% for 3 years', [["The multiplier is one point zero four. Five hundred times one point zero four cubed is five hundred and sixty-two pounds forty-three.", E('500 × 1.04³ = £562.43', 'g')]]],
      ['Year by year', 'See it grow', [["Year one: five hundred and twenty. Year two: five hundred and forty point eight zero. Year three: five hundred and sixty-two point four three. Each year earns a little more.", V.tbl([['1', '£520.00'], ['2', '£540.80'], ['3', '£562.43']], ['Year', 'Amount'])]]],
      ['Depreciation', 'A car loses value', [["A car worth twelve thousand pounds loses fifteen per cent a year. The multiplier is zero point eight five. After two years: eight thousand six hundred and seventy pounds.", E('12,000 × 0.85² = £8,670', 'g')]]]],
    turn: ["Your turn! What is one thousand pounds after two years at ten per cent compound interest? Pause and try it.", E('1000 × 1.1²'), "One thousand times one point two one: one thousand two hundred and ten pounds.", E('£1,210', 'g')],
    rec: ["Compound change applies the percentage to the new amount each time. Multiply by the multiplier to the power of the number of years.", ['Multiplier: 1 ± rate', 'Raise to the number of years', 'Interest grows each year', 'Depreciation shrinks each year']],
    deep: ['Compound growth speeds up because each year’s change is on a bigger amount.', 'Don’t multiply the percentage by the years: 3 years at 4% is not 12%.']
  });

  LS('Percentage change and reverse percentages', 'how to find a percentage change and work back to an original amount.', {
    intro: ['Two skills', 'Change and reverse', "Percentage change compares a change with the original. Reverse percentages work back from a new amount to the original.", V.cards(['Change ÷ original × 100', 'New ÷ multiplier'], ['b', 'g'])],
    ex: [['Percentage increase', '£40 to £46', [["The change is six pounds. Six divided by forty times one hundred is fifteen per cent.", E('6 ÷ 40 × 100 = 15%', 'g')]]],
      ['Percentage decrease', '250 to 210', [["The change is forty. Forty divided by two hundred and fifty is sixteen per cent.", E('40 ÷ 250 × 100 = 16%', 'g')]]],
      ['Reverse percentage', 'After a 20% rise, £72', [["The new amount is one hundred and twenty per cent of the original. Seventy-two divided by one point two is sixty pounds.", E('£72 ÷ 1.2 = £60', 'g')]]],
      ['After a discount', '30% off, now £56', [["Fifty-six pounds is seventy per cent of the original. Fifty-six divided by zero point seven is eighty pounds.", E('£56 ÷ 0.7 = £80', 'g')]]]],
    turn: ["Your turn! After a ten per cent rise, a price is one hundred and ten pounds. What was it before? Pause and try it.", E('£110 ÷ 1.1'), "One hundred pounds.", E('£100', 'g')],
    rec: ["Percentage change is change over original times one hundred. For reverse percentages, divide the new amount by the multiplier.", ['Change ÷ original × 100', 'Find the multiplier', 'Original = new ÷ multiplier', 'Check by working forwards']],
    deep: ['Reverse percentages divide because the original was multiplied to get the new amount.', 'Don’t take 20% off the new price to undo a 20% rise: £72 − 20% is £57.60, not £60.']
  });

  LS('Percentage change and wages', 'how pay rises, deductions and percentage changes affect wages.', {
    intro: ['Pay and percentages', 'Rises and deductions', "Pay rises are usually given as a percentage. Deductions like tax and pension are taken off. Percentages help us compare.", E('New pay = old pay × (1 + rise)', 'g')],
    ex: [['A pay rise', '3% on £24,000', [["Three per cent of twenty-four thousand is seven hundred and twenty pounds. The new salary is twenty-four thousand seven hundred and twenty pounds.", E('24,000 × 1.03 = £24,720', 'g')]]],
      ['Hourly rate', 'A 5% rise on £11.40', [["Eleven pounds forty times one point zero five is eleven pounds ninety-seven.", E('£11.40 × 1.05 = £11.97', 'g')]]],
      ['Deductions', 'Net pay', [["Gross pay is two thousand pounds. Deductions of three hundred and forty pounds leave net pay of one thousand six hundred and sixty pounds.", E('£2,000 − £340 = £1,660', 'g')]]],
      ['Comparing rises', 'Which is better?', [["A four per cent rise on twenty thousand pounds, or a flat seven hundred pounds? Four per cent is eight hundred pounds, so the percentage is better.", E('£800 > £700', 'g')]]]],
    turn: ["Your turn! A wage rises from four hundred pounds to four hundred and twenty pounds a week. What percentage rise is that? Pause and try it.", E('20 ÷ 400 × 100'), "Five per cent.", E('5%', 'g')],
    rec: ["Use multipliers for pay rises. Net pay is gross pay minus deductions. Percentage change is change over original.", ['Rise: × (1 + rate)', 'Net = gross − deductions', 'Compare in pounds', 'Change ÷ original × 100']],
    deep: ['A percentage rise is fairer for big and small earners alike, but gives more pounds to higher earners.', 'Always calculate the rise on the old pay, not the new.']
  });

  LS('Income tax', 'how income tax is calculated using a tax-free allowance and tax bands.', {
    intro: ['Income tax', 'Tax on earnings', "Most people pay income tax on what they earn. The first part of income, the personal allowance, is tax free. Tax is then charged at different rates in bands.", V.note('Rates and bands change each year; we use simple example rates here.')],
    ex: [['Taxable income', 'Subtract the allowance', [["With a twelve thousand five hundred pound allowance, someone earning thirty thousand pounds pays tax on seventeen thousand five hundred pounds.", E('30,000 − 12,500 = £17,500', 'g')]]],
      ['Basic rate', '20% example', [["At twenty per cent, tax on seventeen thousand five hundred pounds is three thousand five hundred pounds.", E('20% of 17,500 = £3,500', 'g')]]],
      ['Two bands', 'Part at each rate', [["If the first five thousand of taxable income is taxed at ten per cent and the rest at twenty per cent: five hundred plus two thousand five hundred: three thousand pounds.", E('10% of 5,000 + 20% of 12,500 = £3,000', 'g')]]],
      ['Monthly', 'Divide by 12', [["Three thousand pounds a year is two hundred and fifty pounds a month.", E('£3,000 ÷ 12 = £250', 'g')]]]],
    turn: ["Your turn! With a twelve thousand pound allowance and twenty per cent tax, how much tax is paid on twenty-two thousand pounds? Pause and try it.", E('20% of (22,000 − 12,000)'), "Twenty per cent of ten thousand is two thousand pounds.", E('£2,000', 'g')],
    rec: ["Subtract the tax-free allowance to find taxable income, then apply each band's rate to the part in that band.", ['Gross − allowance = taxable', 'Apply each band’s rate', 'Add the tax from each band', 'Net = gross − tax']],
    deep: ['Moving into a higher band only taxes the extra money at the higher rate, not all of it.', 'Remember to take the allowance off before applying the rate.']
  });

  LS('Hire purchase and exchange rates', 'how hire purchase and currency exchange work.', {
    intro: ['Hire purchase', 'Paying in instalments', "Hire purchase means paying a deposit, then monthly instalments. It usually costs more than paying cash.", E('Total = deposit + instalments', 'g')],
    ex: [['Hire purchase total', 'A sofa', [["A sofa costs nine hundred pounds cash, or a one hundred pound deposit plus twelve payments of seventy-five pounds. HP total: one thousand pounds, one hundred more than cash.", E('100 + 12 × 75 = £1,000', 'g')]]],
      ['Exchange rates', 'Pounds to euros', [["At one pound to one euro fifteen, two hundred and forty pounds is two hundred and seventy-six euros.", E('240 × 1.15 = €276', 'g')]]],
      ['Back to pounds', 'Divide', [["Eighty-six euros twenty-five is eighty-six point two five divided by one point one five: seventy-five pounds.", E('86.25 ÷ 1.15 = £75', 'g')]]],
      ['Commission', 'A fee', [["Some exchanges charge commission. Two per cent of three hundred pounds is six pounds, so only two hundred and ninety-four pounds is exchanged.", E('300 − 6 = £294', 'g')]]]],
    turn: ["Your turn! A laptop costs a fifty pound deposit and ten payments of forty-five pounds. What is the total? Pause and try it.", E('50 + 10 × 45'), "Fifty plus four hundred and fifty: five hundred pounds.", E('£500', 'g')],
    rec: ["Hire purchase total is deposit plus all instalments; compare it with the cash price. Multiply by the exchange rate to change pounds and divide to change back.", ['HP = deposit + payments', 'Compare with cash', 'Pounds → other: ×', 'Other → pounds: ÷']],
    deep: ['The extra cost of hire purchase is the price of borrowing.', 'Check exchange answers make sense: if £1 buys €1.15, you should get more euros than pounds.']
  });

  /* ---------- 823 ---------- */
  LS('Combining ratios', 'how to combine two ratios that share a quantity.', {
    intro: ['Linking ratios', 'A shared part', "If A to B and B to C are given, we can combine them into A to B to C by making the B parts match.", E('A : B and B : C → A : B : C', 'g')],
    ex: [['Matching the middle', '2 : 3 and 4 : 5', [["A to B is two to three, B to C is four to five. Make B the same: the LCM of three and four is twelve. Eight to twelve and twelve to fifteen.", E('A : B : C = 8 : 12 : 15', 'g')]]],
      ['Using it', 'Find C', [["If A is forty, then one part is five, and C is fifteen times five: seventy-five.", E('8 parts = 40 → C = 15 × 5 = 75', 'g')]]],
      ['Fruit bowl', 'Apples, pears, plums', [["Apples to pears is three to one, pears to plums is two to five. Make pears match: six to two to five.", E('apples : pears : plums = 6 : 2 : 5', 'g')]]]],
    turn: ["Your turn! Combine A to B equals one to two with B to C equals three to one. Pause and try it.", E('1 : 2 and 3 : 1'), "Make B equal six: three to six, six to two. So three to six to two.", E('3 : 6 : 2', 'g')],
    rec: ["Find the shared quantity, make its parts equal using the LCM, then write the combined ratio.", ['Find the shared part', 'Make it equal (LCM)', 'Scale both ratios', 'Write A : B : C']],
    deep: ['Scaling a ratio by multiplying both parts doesn’t change it, so we can match the shared part safely.', 'Scale every part of each ratio, not just the shared one.']
  });

  LS('Direct and inverse proportion', 'how to tell direct and inverse proportion apart and solve problems with each.', {
    intro: ['Two kinds of proportion', 'Together or opposite', "In direct proportion, both quantities go up together. In inverse proportion, one goes up as the other goes down.", V.cards(['Direct: more → more', 'Inverse: more → less'], ['g', 'b'])],
    ex: [['Direct', 'Petrol', [["Thirty litres of petrol cost forty-two pounds. One litre costs one pound forty, so fifty litres cost seventy pounds.", E('42 ÷ 30 × 50 = £70', 'g')]]],
      ['Inverse', 'Builders', [["Four builders take six days. Twenty-four builder-days are needed. Three builders take eight days.", E('4 × 6 = 24 → 24 ÷ 3 = 8 days', 'g')]]],
      ['Speed and time', 'Inverse', [["At sixty miles per hour a trip takes two hours. At forty miles per hour it takes three hours, because the distance, one hundred and twenty, stays the same.", E('60 × 2 = 120 → 120 ÷ 40 = 3 h', 'g')]]]],
    turn: ["Your turn! Six taps fill a tank in ten minutes. How long do four taps take? Pause and think.", E('6 × 10 = 60 tap-minutes'), "Sixty divided by four is fifteen minutes.", E('15 min', 'g')],
    rec: ["Direct proportion: find one, then multiply. Inverse proportion: find the total that stays the same, then divide.", ['Direct: ÷ then ×', 'Inverse: product stays fixed', 'Decide which first', 'Check it makes sense']],
    deep: ['In inverse proportion, the product of the two quantities stays constant.', 'More workers mean less time: if your answer goes the wrong way, check which type it is.']
  });

  /* ---------- 825 ---------- */
  LS('Average speed', 'how to work out average speed for a journey with different parts.', {
    intro: ['Average speed', 'Total distance ÷ total time', "On a real journey, speed changes. The average speed is the total distance divided by the total time.", E('Average speed = total distance ÷ total time', 'g')],
    ex: [['Two parts', 'A drive', [["Sixty kilometres in one hour, then one hundred kilometres in two hours. Total: one hundred and sixty kilometres in three hours. Average speed: fifty-three point three kilometres per hour.", E('160 ÷ 3 ≈ 53.3 km/h', 'g')]]],
      ['With a stop', 'Include the break', [["A cyclist rides thirty kilometres in one and a half hours, stops for half an hour, then rides twenty kilometres in one hour. Fifty kilometres in three hours: sixteen point seven kilometres per hour.", E('50 ÷ 3 ≈ 16.7 km/h', 'g')]]],
      ['Not the mean of speeds', 'A trap', [["Driving there at sixty and back at forty does not average fifty. For one hundred and twenty kilometres each way: two hours plus three hours, two hundred and forty kilometres in five hours: forty-eight.", E('240 ÷ 5 = 48 km/h', 'g')]]]],
    turn: ["Your turn! A walk of twelve kilometres takes three hours, including a one-hour lunch. What is the average speed? Pause and try it.", E('12 ÷ 3'), "Four kilometres per hour, using the total time.", E('4 km/h', 'g')],
    rec: ["Add up all the distances and all the times, including stops, then divide. Don't just average the speeds.", ['Total distance', 'Total time (with stops)', 'Divide', 'Not the mean of speeds']],
    deep: ['Average speed weights each part by how long it takes, so slow parts count for more.', 'Averaging 60 and 40 to get 50 is wrong when the times are different.']
  });

  LS('Distance–time graphs with a return', 'how to read and draw distance–time graphs for journeys that go out and come back.', {
    intro: ['Out and back', 'The line comes down', "On a distance–time graph, going away makes the line rise. Coming back makes it fall towards zero.", V.cards(['Rising: going away', 'Flat: stopped', 'Falling: coming back'], ['b', 'p', 'g'])],
    ex: [['Reading speeds', 'Each section', [["Ten kilometres out in one hour is ten kilometres per hour. Back in thirty minutes is twenty kilometres per hour: faster on the way home, so steeper.", E('10 ÷ 1 = 10 · 10 ÷ 0.5 = 20 km/h', 'g')]]],
      ['A stop', 'Flat line', [["A flat section from eleven to eleven thirty means a half-hour stop.", E('30 min stop', 'g')]]],
      ['Two people', 'Where lines cross', [["When two journey lines cross, the people are at the same place at the same time.", V.note('Crossing lines: same place, same time')]]]],
    turn: ["Your turn! A line goes from twelve kilometres back to zero in forty-five minutes. What is the speed? Pause and try it.", E('12 ÷ 0.75'), "Sixteen kilometres per hour.", E('16 km/h', 'g')],
    rec: ["Rising lines go away, flat lines are stops, falling lines come back. Speed is distance over time for each section; steeper means faster.", ['Rising: away', 'Flat: stopped', 'Falling: returning', 'Steeper = faster']],
    deep: ['The steepness of the line shows speed in either direction.', 'Change minutes to hours: 45 minutes is 0.75 hours.']
  });

  /* ---------- 826 ---------- */
  LS('Circles', 'how to find the circumference and area of a circle.', {
    intro: ['Pi', 'A special number', "In every circle, the circumference divided by the diameter is the same number, pi, about three point one four.", E('π ≈ 3.14', 'g')],
    ex: [['Circumference', 'C = πd', [["A wheel with diameter sixty centimetres has a circumference of pi times sixty: about one hundred and eighty-eight point five centimetres.", E('C = π × 60 ≈ 188.5 cm', 'g')]]],
      ['Area', 'A = πr²', [["A circle with radius five centimetres has area pi times twenty-five: about seventy-eight point five square centimetres.", E('A = π × 5² ≈ 78.5 cm²', 'g')]]],
      ['Radius or diameter?', 'Check which you have', [["If you're given a diameter of twelve, the radius is six. Area is pi times thirty-six: about one hundred and thirteen square centimetres.", E('d = 12 → r = 6 → A ≈ 113 cm²', 'g')]]],
      ['Semicircles', 'Half a circle', [["A semicircle with radius four has area half of pi times sixteen: about twenty-five point one square centimetres.", E('½ × π × 16 ≈ 25.1 cm²', 'g')]]]],
    turn: ["Your turn! Find the circumference of a circle with radius ten centimetres. Pause and try it.", E('C = π × 20'), "The diameter is twenty: about sixty-two point eight centimetres.", E('≈ 62.8 cm', 'g')],
    rec: ["Circumference is pi times the diameter. Area is pi times radius squared. Check whether you've been given the radius or the diameter.", ['C = πd = 2πr', 'A = πr²', 'r = d ÷ 2', 'Area in square units']],
    deep: ['π is the same for every circle because all circles are enlargements of each other.', 'Square the radius before multiplying by π: π × 5² is not (π × 5)².']
  });

  LS('Cylinders', 'how to find the volume and surface area of a cylinder.', {
    intro: ['Cylinders', 'A circular prism', "A cylinder is like a prism with a circle as its cross-section.", E('V = πr²h', 'g')],
    ex: [['Volume', 'A tin', [["A tin has radius four centimetres and height ten. The circle's area is pi times sixteen, about fifty point three. Times ten: about five hundred and three cubic centimetres.", E('V = π × 4² × 10 ≈ 503 cm³', 'g')]]],
      ['Capacity', 'In litres', [["Five hundred and three cubic centimetres is about half a litre.", E('503 cm³ ≈ 0.5 l', 'g')]]],
      ['Surface area', 'Two circles and a rectangle', [["Unroll the curved surface: a rectangle with length the circumference and width the height. Add the two circles. Two pi r squared plus two pi r h.", E('SA = 2πr² + 2πrh', 'g')]]],
      ['Surface area example', 'Radius 3, height 8', [["Two circles: two times pi times nine, about fifty-six point five. Curved: two times pi times three times eight, about one hundred and fifty point eight. Total about two hundred and seven square centimetres.", E('≈ 56.5 + 150.8 = 207.3 cm²', 'g')]]]],
    turn: ["Your turn! What is the volume of a cylinder with radius two and height five? Leave it in terms of pi. Pause and try it.", E('π × 2² × 5'), "Twenty pi cubic units, about sixty-two point eight.", E('20π ≈ 62.8', 'g')],
    rec: ["Volume is the circle area times the height. Surface area is two circles plus the curved rectangle.", ['V = πr²h', 'Curved area = 2πrh', 'SA = 2πr² + 2πrh', '1,000 cm³ = 1 l']],
    deep: ['The curved surface unrolls into a rectangle as long as the circumference.', 'Use the radius, not the diameter, in πr².']
  });

  LS('Circles, similarity and solids', 'how circles, similar shapes and solids connect through scale and formulas.', {
    intro: ['Three ideas together', 'Circles, similar shapes, solids', "This lesson links circle formulas, similar shapes, which are enlargements, and the volumes of solids.", V.list(['Circle: C and A', 'Similar shapes: scale factor', 'Solids: V and SA'])],
    ex: [['Similar shapes', 'Same shape, different size', [["Two similar rectangles: one is three by five, the other six by ten. Every length is doubled: scale factor two.", E('scale factor = 6 ÷ 3 = 2', 'g')]]],
      ['Area scale factor', 'Square it', [["If lengths double, areas get four times bigger, because two squared is four.", E('length × 2 → area × 4', 'g')]]],
      ['Volume scale factor', 'Cube it', [["If lengths double, volumes get eight times bigger, because two cubed is eight.", E('length × 2 → volume × 8', 'g')]]],
      ['Circles are all similar', 'Scale by the radius', [["Doubling a circle's radius doubles its circumference but makes its area four times bigger.", E('r × 2 → C × 2, A × 4', 'g')]]]],
    turn: ["Your turn! A model is enlarged with scale factor three. How many times bigger is its volume? Pause and think.", E('3³'), "Three cubed: twenty-seven times.", E('× 27', 'g')],
    rec: ["Similar shapes have the same angles and lengths in the same ratio. Lengths scale by k, areas by k squared and volumes by k cubed.", ['Similar: same shape', 'Lengths × k', 'Areas × k²', 'Volumes × k³']],
    deep: ['Area has two dimensions and volume three, which is why the scale factor is squared or cubed.', 'Doubling every length does not double the area.']
  });

  /* ---------- 827 ---------- */
  LS('Expanding two brackets', 'how to multiply out two brackets, like (x + 3)(x + 5).', {
    intro: ['Two brackets', 'Every term times every term', "To expand two brackets, multiply each term in the first bracket by each term in the second, then collect like terms.", E('(a + b)(c + d) = ac + ad + bc + bd', 'g')],
    ex: [['A grid', '(x + 3)(x + 5)', [["Use a grid: x times x is x squared, x times five is five x, three times x is three x, three times five is fifteen. Collect: x squared plus eight x plus fifteen.", V.tbl([['x', 'x²', '5x'], ['+3', '3x', '15']], ['×', 'x', '+5']) + E('x² + 8x + 15', 'g')]]],
      ['With negatives', '(x − 4)(x + 2)', [["x squared, plus two x, minus four x, minus eight. Collect: x squared minus two x minus eight.", E('x² − 2x − 8', 'g')]]],
      ['Squaring a bracket', '(x + 6)²', [["Write it as two brackets: x plus six times x plus six. x squared plus twelve x plus thirty-six.", E('(x + 6)² = x² + 12x + 36', 'g')]]]],
    turn: ["Your turn! Expand x plus one times x plus seven. Pause and try it.", E('(x + 1)(x + 7)'), "x squared plus eight x plus seven.", E('x² + 8x + 7', 'g')],
    rec: ["Multiply every term in the first bracket by every term in the second, using a grid if it helps, then collect like terms.", ['Four multiplications', 'Use a grid', 'Watch the signs', 'Collect like terms']],
    deep: ['The grid works like the area of a rectangle split into four parts.', '(x + 6)² is not x² + 36: the middle term 12x is often forgotten.']
  });

  LS('Equations, inequalities and formulae', 'how to solve equations and inequalities, and rearrange formulae.', {
    intro: ['Three tools', 'Equations, inequalities, formulae', "Equations have an equals sign. Inequalities use less than or greater than. Formulae connect quantities and can be rearranged.", V.cards(['=', '<, >, ≤, ≥', 'formula'], ['b', 'p', 'g'])],
    ex: [['Equation', '5x − 3 = 2x + 9', [["Take two x from both sides: three x minus three equals nine. Add three: three x equals twelve. x equals four.", E('x = 4', 'g')]]],
      ['Inequality', '3x + 2 > 14', [["Solve like an equation: three x greater than twelve, so x greater than four.", E('x > 4', 'g')]]],
      ['Flipping the sign', 'Dividing by a negative', [["Negative two x less than ten: dividing by negative two flips the sign. x greater than negative five.", E('−2x < 10 → x > −5', 'g')]]],
      ['Rearranging', 'v = u + at, for a', [["Take u from both sides: v minus u equals a t. Divide by t: a equals v minus u over t.", E('a = (v − u) ÷ t', 'g')]]]],
    turn: ["Your turn! Solve four x take away seven is less than or equal to thirteen. Pause and try it.", E('4x − 7 ≤ 13'), "Four x is less than or equal to twenty, so x is less than or equal to five.", E('x ≤ 5', 'g')],
    rec: ["Solve equations and inequalities by doing the same to both sides. Flip an inequality sign if you multiply or divide by a negative. Rearrange formulae using inverse operations.", ['Same to both sides', 'Inequality: flip if × or ÷ by negative', 'Rearrange: undo in reverse order', 'Check your answer']],
    deep: ['Inequalities have many answers: x > 4 includes 4.1, 5, 100 and more.', 'Multiplying or dividing an inequality by a negative number reverses it.']
  });

  LS('Brackets, factorising and equations', 'how to factorise expressions and use brackets to solve equations.', {
    intro: ['Factorising', 'The reverse of expanding', "Factorising puts an expression back into brackets by taking out a common factor.", E('6x + 9 = 3(2x + 3)', 'g')],
    ex: [['Common factor', '10a − 15b', [["The highest common factor of ten and fifteen is five. Five, bracket, two a minus three b.", E('10a − 15b = 5(2a − 3b)', 'g')]]],
      ['Letters too', 'x² + 7x', [["Both terms have x: x, bracket, x plus seven.", E('x² + 7x = x(x + 7)', 'g')]]],
      ['Quadratics', 'x² + 5x + 6', [["Find two numbers that multiply to six and add to five: two and three. So x plus two times x plus three.", E('x² + 5x + 6 = (x + 2)(x + 3)', 'g')]]],
      ['Equations with brackets', '4(x − 2) = 3(x + 1)', [["Expand: four x minus eight equals three x plus three. Take three x: x minus eight equals three. x equals eleven.", E('x = 11', 'g')]]]],
    turn: ["Your turn! Factorise x squared plus seven x plus twelve. Pause and try it.", E('x² + 7x + 12'), "Three and four multiply to twelve and add to seven: x plus three times x plus four.", E('(x + 3)(x + 4)', 'g')],
    rec: ["Factorise by taking out the highest common factor. For x squared plus b x plus c, find two numbers that multiply to c and add to b. Expand brackets to solve equations.", ['Take out the HCF', 'Quadratic: × to c, + to b', 'Check by expanding', 'Expand to solve']],
    deep: ['Factorising and expanding are inverses: always check by expanding back.', 'Take out the highest common factor, not just any factor: 6x + 9 = 3(2x + 3), not 1(6x + 9).']
  });

  /* ---------- 828 ---------- */
  LS('The equation y = mx + c', 'what the gradient and the y-intercept are, and how to draw lines from y = mx + c.', {
    intro: ['Straight lines', 'y = mx + c', "Every straight line can be written as y equals m x plus c. m is the gradient, how steep it is. c is where it crosses the y-axis.", E('y = mx + c', 'g')],
    ex: [['Reading m and c', 'y = 3x − 2', [["The gradient is three: up three for every one across. The line crosses the y-axis at negative two.", E('m = 3 · c = −2', 'g')]]],
      ['Drawing a line', 'A table of values', [["For y equals two x plus one: when x is zero, y is one; x is one, y is three; x is two, y is five. Plot and join.", V.tbl([['0', '1'], ['1', '3'], ['2', '5']], ['x', 'y'])]]],
      ['Negative gradient', 'Going down', [["y equals negative x plus four slopes down from left to right, crossing the y-axis at four.", E('m = −1 → slopes down', 'g')]]],
      ['Parallel lines', 'Same gradient', [["y equals two x plus one and y equals two x minus five are parallel: both have gradient two.", E('same m → parallel', 'g')]]]],
    turn: ["Your turn! What are the gradient and y-intercept of y equals negative four x plus seven? Pause and think.", E('y = −4x + 7'), "Gradient negative four, y-intercept seven.", E('m = −4 · c = 7', 'g')],
    rec: ["In y = mx + c, m is the gradient and c is the y-intercept. Make a table of values to draw the line. Lines with the same gradient are parallel.", ['m: gradient', 'c: y-intercept', 'Table of values', 'Same m: parallel']],
    deep: ['The gradient is the change in y for each step of 1 in x.', 'In y = 4 − 2x, the gradient is −2, not 4: rewrite it as y = −2x + 4.']
  });

  LS('Finding a line from two points', 'how to find the equation of a line through two given points.', {
    intro: ['Two points', 'Gradient then intercept', "Two points are enough to fix a straight line. Find the gradient first, then the y-intercept.", E('m = (y₂ − y₁) ÷ (x₂ − x₁)', 'g')],
    ex: [['The gradient', '(1, 4) and (3, 10)', [["The change in y is six; the change in x is two. Gradient: three.", E('m = (10 − 4) ÷ (3 − 1) = 3', 'g')]]],
      ['The intercept', 'Substitute a point', [["y equals three x plus c. Using one, four: four equals three plus c, so c is one. The line is y equals three x plus one.", E('y = 3x + 1', 'g')]]],
      ['Negative gradient', '(0, 6) and (2, 2)', [["The change in y is negative four over two: gradient negative two. It crosses at six. y equals negative two x plus six.", E('y = −2x + 6', 'g')]]]],
    turn: ["Your turn! Find the gradient of the line through two, one and five, ten. Pause and try it.", E('(10 − 1) ÷ (5 − 2)'), "Nine divided by three is three.", E('m = 3', 'g')],
    rec: ["Find the gradient using change in y over change in x. Substitute one point into y = mx + c to find c. Check with the other point.", ['m = Δy ÷ Δx', 'Substitute a point', 'Find c', 'Check with the other point']],
    deep: ['It doesn’t matter which point you call first, as long as you use the same order for y and x.', 'Subtract in the same order top and bottom, or the sign of the gradient will be wrong.']
  });

  LS('Gradient and straight lines', 'how to find and interpret gradients of lines and real-life graphs.', {
    intro: ['Gradient', 'Steepness', "The gradient measures steepness: how much a line goes up for each step across. Up is positive; down is negative.", E('gradient = vertical ÷ horizontal', 'g')],
    ex: [['From a graph', 'Rise over run', [["A line rises six squares while going across three. Gradient: two.", E('6 ÷ 3 = 2', 'g')]]],
      ['Horizontal and vertical', 'Special cases', [["A horizontal line has gradient zero. A vertical line's gradient is undefined.", V.cards(['Horizontal: 0', 'Vertical: undefined'], ['b', 'p'])]]],
      ['Real life', 'Rate of change', [["On a graph of cost against hours for a plumber, the gradient is the hourly rate. If the cost rises by one hundred and twenty pounds over three hours, that's forty pounds an hour.", E('120 ÷ 3 = £40 per hour', 'g')]]]],
    turn: ["Your turn! A line falls eight while going across two. What is its gradient? Pause and try it.", E('−8 ÷ 2'), "Negative four.", E('−4', 'g')],
    rec: ["Gradient is vertical change over horizontal change. Positive slopes up, negative slopes down. In real graphs, the gradient is a rate.", ['Rise ÷ run', 'Up: positive, down: negative', 'Horizontal: 0', 'Real life: a rate']],
    deep: ['On real-life graphs, the gradient has units, like £ per hour or km per hour.', 'Count squares using the scale on each axis, not just the grid.']
  });

  /* ---------- 829 ---------- */
  LS('Interior and exterior angles', 'how to find interior and exterior angles of polygons.', {
    intro: ['Polygon angles', 'Inside and outside', "Interior angles are inside a polygon. An exterior angle is between one side and the next side extended. Interior plus exterior is one hundred and eighty.", E('interior + exterior = 180°', 'g')],
    ex: [['Sum of interior angles', '(n − 2) × 180°', [["A heptagon has seven sides: five times one hundred and eighty is nine hundred degrees.", E('(7 − 2) × 180° = 900°', 'g')]]],
      ['Exterior angles', 'Always 360°', [["The exterior angles of any polygon add to three hundred and sixty. Each exterior angle of a regular decagon is thirty-six degrees.", E('360° ÷ 10 = 36°', 'g')]]],
      ['Interior from exterior', 'Regular polygon', [["The interior angle of a regular decagon is one hundred and eighty minus thirty-six: one hundred and forty-four degrees.", E('180° − 36° = 144°', 'g')]]],
      ['How many sides?', 'Working backwards', [["A regular polygon has exterior angles of twenty-four degrees. Three hundred and sixty divided by twenty-four is fifteen sides.", E('360 ÷ 24 = 15', 'g')]]]],
    turn: ["Your turn! What is each interior angle of a regular hexagon? Pause and try it.", E('180° − 360° ÷ 6'), "The exterior is sixty, so the interior is one hundred and twenty degrees.", E('120°', 'g')],
    rec: ["Interior angles add to n minus two times one hundred and eighty. Exterior angles add to three hundred and sixty. Interior plus exterior is one hundred and eighty.", ['Interior sum: (n − 2) × 180°', 'Exterior sum: 360°', 'Int + ext = 180°', 'Regular: divide equally']],
    deep: ['Walking all the way round a polygon is one full turn, which is why exterior angles add to 360°.', 'Only divide by n for regular polygons.']
  });

  LS('Bearings', 'how to measure, draw and calculate three-figure bearings.', {
    intro: ['Bearings', 'Directions as angles', "A bearing is a direction measured clockwise from north, written with three figures.", V.tbl([['N', '000°'], ['E', '090°'], ['S', '180°'], ['W', '270°'], ['NE', '045°'], ['SW', '225°']], ['Direction', 'Bearing'])],
    ex: [['Measuring', 'From the north line', [["Draw a north line at the starting point. Measure clockwise to the line joining the points. If it's seventy degrees, write zero seven zero.", E('070°', 'g')]]],
      ['Back bearings', 'The return journey', [["The back bearing is the bearing plus or minus one hundred and eighty. The back bearing of zero seven zero is two five zero.", E('070° + 180° = 250°', 'g')]]],
      ['Scale drawings', 'Bearing and distance', [["A ship sails eight kilometres on a bearing of one two zero. On a one to one hundred thousand scale, draw a line eight centimetres long at one hundred and twenty degrees from north.", E('8 km → 8 cm at 120°', 'g')]]]],
    turn: ["Your turn! The bearing of B from A is three one zero degrees. What is the bearing of A from B? Pause and try it.", E('310° − 180°'), "One three zero degrees.", E('130°', 'g')],
    rec: ["Measure bearings clockwise from north and use three figures. Back bearings differ by one hundred and eighty degrees. Combine with scale for maps.", ['Start at north', 'Measure clockwise', 'Three figures', 'Back bearing: ± 180°']],
    deep: ['Bearings are used by pilots and sailors because they describe any direction exactly.', 'Always start from north at the point you are measuring from.']
  });

  /* ---------- 830 ---------- */
  LS('Pythagoras’ theorem', 'how to use Pythagoras’ theorem to find a side of a right-angled triangle.', {
    intro: ['Pythagoras', 'Right-angled triangles', "In a right-angled triangle, the square of the longest side, the hypotenuse, equals the sum of the squares of the other two sides.", E('a² + b² = c²', 'g')],
    ex: [['Finding the hypotenuse', '6 and 8', [["Six squared plus eight squared is thirty-six plus sixty-four: one hundred. The square root is ten.", E('c = √(36 + 64) = 10', 'g')]]],
      ['Finding a shorter side', 'Hypotenuse 13, side 5', [["Thirteen squared take away five squared: one hundred and sixty-nine take away twenty-five is one hundred and forty-four. Square root: twelve.", E('b = √(169 − 25) = 12', 'g') + V.rule('Longest side: add. Shorter side: subtract.')]]],
      ['Real life', 'A ladder', [["A five metre ladder leans with its foot one point five metres from a wall. How high does it reach? Five squared take away one point five squared is twenty-two point seven five. Square root: about four point seven seven metres.", E('√(25 − 2.25) ≈ 4.77 m', 'g')]]],
      ['Is it right-angled?', 'Test the sides', [["Sides seven, twenty-four, twenty-five: forty-nine plus five hundred and seventy-six is six hundred and twenty-five, which is twenty-five squared. Yes.", E('7² + 24² = 25² ✓', 'g')]]]],
    turn: ["Your turn! Find the hypotenuse when the other sides are nine and twelve. Pause and try it.", E('√(81 + 144)'), "The square root of two hundred and twenty-five is fifteen.", E('15', 'g')],
    rec: ["In a right-angled triangle, a squared plus b squared equals c squared, where c is the hypotenuse. Add squares for the longest side; subtract for a shorter side.", ['Only right-angled triangles', 'c is the hypotenuse', 'Longest: add squares', 'Shorter: subtract squares']],
    deep: ['The hypotenuse is always opposite the right angle and is always the longest side.', 'Check your answer: the hypotenuse must be longer than both other sides.']
  });

  LS('Arcs and sectors', 'how to find the length of an arc and the area of a sector.', {
    intro: ['Parts of a circle', 'Arc and sector', "An arc is part of the circumference. A sector is a slice of the circle, like a slice of pizza. Both are a fraction of the whole circle.", E('fraction = angle ÷ 360°', 'g')],
    ex: [['Arc length', 'Angle 60°, radius 9', [["Sixty degrees is a sixth of the circle. The circumference is pi times eighteen. A sixth of it is three pi: about nine point four two.", E('60/360 × π × 18 ≈ 9.42', 'g')]]],
      ['Sector area', 'Angle 90°, radius 10', [["Ninety degrees is a quarter. The circle's area is one hundred pi. A quarter is twenty-five pi: about seventy-eight point five.", E('90/360 × π × 10² ≈ 78.5', 'g')]]],
      ['Perimeter of a sector', 'Arc plus two radii', [["The perimeter of a sector is the arc length plus two radii. For the sixty degree sector of radius nine: nine point four two plus eighteen, twenty-seven point four two.", E('9.42 + 2 × 9 = 27.42', 'g')]]]],
    turn: ["Your turn! What is the area of a semicircle with radius four? Leave it in terms of pi. Pause and try it.", E('180/360 × π × 16'), "Half of sixteen pi is eight pi.", E('8π ≈ 25.1', 'g')],
    rec: ["The fraction of the circle is the angle over three hundred and sixty. Arc length is that fraction of the circumference; sector area is that fraction of the area.", ['Fraction = angle ÷ 360', 'Arc = fraction × πd', 'Sector = fraction × πr²', 'Perimeter: arc + 2r']],
    deep: ['Arcs and sectors are just fractions of the whole circle formulas.', 'For the perimeter of a sector, remember the two straight radii.']
  });

  LS('Pythagoras and trigonometry', 'how to choose between Pythagoras and trigonometry in right-angled triangles.', {
    intro: ['Two tools', 'Sides or angles?', "Pythagoras links three sides. Trigonometry, SOH CAH TOA, links two sides and an angle.", V.cards(['3 sides → Pythagoras', 'Sides and an angle → trig'], ['b', 'g'])],
    ex: [['Pythagoras', 'Two sides known, find the third', [["Sides five and twelve, find the hypotenuse: thirteen.", E('√(25 + 144) = 13', 'g')]]],
      ['SOH CAH TOA', 'Label the sides', [["Opposite is across from the angle, adjacent is next to it, hypotenuse is the longest. Sine is opposite over hypotenuse, cosine adjacent over hypotenuse, tangent opposite over adjacent.", V.tbl([['sin', 'O ÷ H'], ['cos', 'A ÷ H'], ['tan', 'O ÷ A']], ['Ratio', 'Sides'])]]],
      ['Finding a side', 'With an angle', [["Angle thirty degrees, hypotenuse ten, find the opposite: ten times sine thirty is five.", E('O = 10 × sin 30° = 5', 'g')]]],
      ['Finding an angle', 'Inverse', [["Opposite four, adjacent four: tangent is one, so the angle is forty-five degrees.", E('tan⁻¹(4 ÷ 4) = 45°', 'g')]]]],
    turn: ["Your turn! Opposite six, hypotenuse twelve. Find the angle. Pause and try it.", E('sin⁻¹(6 ÷ 12)'), "Sine is a half, so the angle is thirty degrees.", E('30°', 'g')],
    rec: ["Use Pythagoras for three sides. Use SOH CAH TOA when an angle is involved: label the sides, pick the ratio, then solve.", ['3 sides: Pythagoras', 'Angle: SOH CAH TOA', 'Label O, A, H', 'Inverse for angles']],
    deep: ['Trigonometric ratios are fixed for each angle because all right-angled triangles with that angle are similar.', 'Check your calculator is in degrees.']
  });

  /* ---------- 831 ---------- */
  LS('Similar shapes and scale factors', 'how to recognise similar shapes and use scale factors to find missing lengths.', {
    intro: ['Similar shapes', 'Same shape, different size', "Similar shapes have equal angles and corresponding sides in the same ratio. One is an enlargement of the other.", E('scale factor = new ÷ original', 'g')],
    ex: [['Finding the scale factor', 'Matching sides', [["A side of four becomes ten. The scale factor is ten divided by four: two and a half.", E('10 ÷ 4 = 2.5', 'g')]]],
      ['Missing length', 'Multiply', [["Another side of six on the small shape becomes six times two and a half: fifteen.", E('6 × 2.5 = 15', 'g')]]],
      ['Going back', 'Divide', [["A side of twenty on the large shape is twenty divided by two and a half on the small shape: eight.", E('20 ÷ 2.5 = 8', 'g')]]],
      ['Similar triangles', 'Equal angles', [["If two triangles have the same angles, they are similar, even if they are different sizes or turned around.", V.note('Same angles → similar')]]]],
    turn: ["Your turn! A photo six centimetres wide is enlarged to fifteen centimetres wide. Its height was four. What is the new height? Pause and try it.", E('4 × 15 ÷ 6'), "The scale factor is two point five, so ten centimetres.", E('10 cm', 'g')],
    rec: ["Similar shapes have equal angles and sides in the same ratio. Find the scale factor from matching sides, multiply to enlarge, divide to reduce.", ['Equal angles', 'Sides in the same ratio', 'k = new ÷ original', '× k or ÷ k']],
    deep: ['A scale factor less than 1 makes a shape smaller.', 'Match corresponding sides carefully, especially when one shape is rotated.']
  });

  LS('Enlargement', 'how to enlarge a shape from a centre of enlargement by a scale factor.', {
    intro: ['Enlargement', 'Scale factor and centre', "An enlargement changes a shape's size. Every length is multiplied by the scale factor, measured from a centre of enlargement.", E('distance from centre × k', 'g')],
    ex: [['Scale factor 2', 'From the origin', [["A corner at two, one moves to four, two: twice as far from the origin.", E('(2, 1) → (4, 2)', 'g')]]],
      ['Scale factor ½', 'Smaller', [["A scale factor of a half moves each point halfway to the centre, making the shape smaller.", E('(6, 4) → (3, 2)', 'g')]]],
      ['Another centre', 'Count from the centre', [["Centre one, one, scale factor three. The point two, two is one across and one up from the centre, so it moves three across and three up: four, four.", E('(2, 2) → (4, 4)', 'g')]]],
      ['Finding the centre', 'Ray lines', [["Join each corner to its image and extend the lines. They meet at the centre of enlargement.", V.note('Rays meet at the centre')]]]],
    turn: ["Your turn! Enlarge the point three, two by scale factor three from the origin. Pause and try it.", E('(3, 2) × 3'), "Nine, six.", E('(9, 6)', 'g')],
    rec: ["Multiply each point's distance from the centre by the scale factor. Scale factors bigger than one enlarge, between zero and one shrink. Rays find the centre.", ['Measure from the centre', 'Multiply distances by k', 'k > 1 bigger, k < 1 smaller', 'Rays meet at the centre']],
    deep: ['An enlargement keeps angles the same, so the image is similar to the original.', 'Measure from the centre, not from the shape.']
  });

  /* ---------- 832 ---------- */
  LS('Scatter graphs', 'how to draw scatter graphs, describe correlation and use a line of best fit.', {
    intro: ['Scatter graphs', 'Is there a link?', "A scatter graph plots pairs of data, like hours revised and test score, to see if there is a link, called correlation.", V.cards(['Positive', 'Negative', 'None'], ['g', 'b', 'p'])],
    ex: [['Positive correlation', 'Both go up', [["As revision hours increase, scores tend to increase. The points slope upwards.", V.note('Positive: up together')]]],
      ['Negative correlation', 'One goes down', [["As a car's age increases, its value tends to go down. The points slope downwards.", V.note('Negative: one up, one down')]]],
      ['Line of best fit', 'Estimating', [["Draw a straight line through the middle of the points. Use it to estimate: if eight hours fits a score of seventy, a student revising eight hours might score about seventy.", E('8 h → ≈ 70%', 'g')]]],
      ['Outliers', 'Points that don’t fit', [["A point far from the pattern is an outlier. Ignore it when drawing the line of best fit.", V.note('Outlier: far from the rest')]]]],
    turn: ["Your turn! Ice cream sales go up as temperature goes up. What type of correlation is that? Pause and think.", E('?'), "Positive correlation.", E('positive', 'g')],
    rec: ["Scatter graphs show whether two sets of data are linked. Describe the correlation, draw a line of best fit, and use it to estimate within the data range.", ['Plot pairs', 'Positive, negative or none', 'Line of best fit', 'Estimate within the range']],
    deep: ['Correlation does not prove one thing causes the other.', 'Estimates outside the range of the data can be unreliable.']
  });

  LS('Tree diagrams', 'how to use tree diagrams to find probabilities of combined events.', {
    intro: ['Tree diagrams', 'Two events', "A tree diagram shows all outcomes of two or more events. Each branch has a probability.", E('Multiply along, add between', 'g')],
    ex: [['Two coin flips', 'Branches', [["Each flip has two branches: heads and tails, each a half. Two flips give four paths.", V.tbl([['H then H', '¼'], ['H then T', '¼'], ['T then H', '¼'], ['T then T', '¼']], ['Path', 'Probability'])]]],
      ['Multiply along', 'One path', [["The probability of rain and then rain, if each day has a chance of zero point three, is zero point three times zero point three: zero point zero nine.", E('0.3 × 0.3 = 0.09', 'g')]]],
      ['Add between', 'More than one path', [["Rain on exactly one of two days: zero point three times zero point seven, plus zero point seven times zero point three: zero point four two.", E('0.21 + 0.21 = 0.42', 'g')]]],
      ['Without replacement', 'Probabilities change', [["A bag has three red and two blue. Take one, don't put it back. Red then red: three fifths times two quarters: three tenths.", E('3/5 × 2/4 = 3/10', 'g')]]]],
    turn: ["Your turn! A spinner lands on green with probability zero point four. Spin twice. What is the probability of two greens? Pause and try it.", E('0.4 × 0.4'), "Zero point one six.", E('0.16', 'g')],
    rec: ["Draw branches for each outcome with probabilities that add to one. Multiply along a path, add between paths. Change the second probabilities if there is no replacement.", ['Branches add to 1', 'Multiply along', 'Add between paths', 'No replacement: probabilities change']],
    deep: ['Multiplying along branches works because each event is a fraction of the one before.', 'Check all the final probabilities add up to 1.']
  });

  LS('Quartiles and probability', 'how to find quartiles and the interquartile range, and connect data with probability.', {
    intro: ['Quartiles', 'Splitting data into four', "Quartiles split ordered data into four equal parts. The median is the middle; the lower and upper quartiles are the middles of each half.", V.cards(['Q1 lower', 'Q2 median', 'Q3 upper'], ['b', 'p', 'g'])],
    ex: [['Finding quartiles', '3, 5, 7, 8, 10, 12, 15', [["The median is eight. The lower half is three, five, seven: Q1 is five. The upper half is ten, twelve, fifteen: Q3 is twelve.", E('Q1 = 5 · Q2 = 8 · Q3 = 12', 'g')]]],
      ['Interquartile range', 'The middle half', [["The interquartile range is Q3 minus Q1: twelve take away five is seven. It measures the spread of the middle half and ignores extreme values.", E('IQR = 12 − 5 = 7', 'g')]]],
      ['Data and probability', 'Relative frequency', [["If eighteen of sixty days were rainy, the estimated probability of rain is eighteen sixtieths: zero point three.", E('18 ÷ 60 = 0.3', 'g')]]]],
    turn: ["Your turn! Q1 is twenty and Q3 is thirty-five. What is the interquartile range? Pause and try it.", E('35 − 20'), "Fifteen.", E('15', 'g')],
    rec: ["Order the data, find the median, then the middle of each half for the quartiles. The interquartile range is Q3 minus Q1. Relative frequency estimates probability.", ['Order the data', 'Median, then each half', 'IQR = Q3 − Q1', 'Relative frequency ≈ probability']],
    deep: ['The IQR isn’t affected by outliers, so it is often a fairer measure of spread than the range.', 'Always order the data first.']
  });

  /* ---------- 833 ---------- */
  LS('Rotation on a grid', 'how to rotate shapes on a grid about a centre by 90° or 180°.', {
    intro: ['Rotation', 'Turning about a point', "A rotation turns a shape about a centre by an angle in a direction. The shape stays the same size.", V.note('Centre, angle, direction')],
    ex: [['90° clockwise about the origin', 'A rule', [["Rotating ninety degrees clockwise about the origin sends x, y to y, negative x. Three, one goes to one, negative three.", E('(3, 1) → (1, −3)', 'g')]]],
      ['180° about the origin', 'Both signs change', [["A half turn sends x, y to negative x, negative y. Two, five goes to negative two, negative five.", E('(2, 5) → (−2, −5)', 'g')]]],
      ['Using tracing paper', 'Any centre', [["Trace the shape, hold the centre with a pencil, turn the paper, and mark the new position.", V.note('Trace, pin, turn')]]],
      ['Describing a rotation', 'Full description', [["To describe a rotation, give all three: centre, angle and direction, like ninety degrees anticlockwise about one, two.", E('90° anticlockwise about (1, 2)', 'g')]]]],
    turn: ["Your turn! Rotate the point four, negative one by one hundred and eighty degrees about the origin. Pause and try it.", E('(4, −1)'), "Both signs change: negative four, one.", E('(−4, 1)', 'g')],
    rec: ["Rotate about a centre by an angle in a direction. For half turns about the origin, both coordinates change sign. Describe rotations fully.", ['Centre', 'Angle', 'Direction', '180°: both signs change']],
    deep: ['A rotation keeps every point the same distance from the centre.', 'A 90° clockwise turn is the same as a 270° anticlockwise turn.']
  });

  LS('Views of solids', 'how to draw plans and elevations of solids made from cubes.', {
    intro: ['Three views', 'Plan, front, side', "To describe a 3D solid on paper, we draw it from three directions: above, front and side.", cubes([[3, 2, 1], [1, 1, 0]])],
    ex: [['The plan', 'From above', [["The plan shows each column of cubes as one square, wherever there is at least one cube.", V.note('Plan: the footprint')]]],
      ['Front elevation', 'From the front', [["Look from the front. Each column in the view is as tall as its tallest stack.", V.note('Front: tallest in each column')]]],
      ['Side elevation', 'From the side', [["Look from the side. Again, each column shows its tallest stack in that direction.", V.note('Side: tallest from the side')]]],
      ['Counting cubes', 'From views', [["From a plan with numbers showing the height of each stack, add the numbers to count the cubes.", E('3 + 2 + 1 + 1 + 1 = 8 cubes', 'g')]]]],
    turn: ["Your turn! A plan shows four squares, with heights two, one, three and one. How many cubes? Pause and try it.", E('2 + 1 + 3 + 1'), "Seven cubes.", E('7', 'g')],
    rec: ["The plan is the view from above. Elevations are from the front and side, showing the tallest stack in each column. Numbers on a plan give heights.", ['Plan: above', 'Front elevation', 'Side elevation', 'Add heights to count cubes']],
    deep: ['Plans and elevations together let builders make a 3D object from flat drawings.', 'Hidden cubes don’t appear in views, so views can miss cubes behind others.']
  });

  /* ===================== put the S2 topics together ===================== */
  L.use(821, ['How do you round to three decimal places?', 'How do you add and subtract positive and negative numbers?', 'How do you multiply and divide positive and negative numbers?', 'How do you multiply to three decimal places?', 'How do you divide to three decimal places?', 'What are prime numbers?', 'How do you solve problems using multiples and factors?', 'What are powers and roots?', 'How do you add and subtract fractions?', 'Standard form', 'Index laws and negative indices']);
  L.use(822, ['How do you calculate fractions and percentages?', 'Compound percentage change', 'Percentage change and reverse percentages', 'Percentage change and wages']);
  L.use(823, ['What are ratios?', 'Combining ratios', 'Direct and inverse proportion', 'Ratio with different units']);
  L.use(824, ['How do you find the best value for money?', 'Income tax', 'Hire purchase and exchange rates', 'Percentage change and wages']);
  L.use(825, ['How do you calculate distance, speed and time?', 'How do you calculate time across hours and days?', 'Average speed', 'Distance–time graphs with a return', 'Speed, distance and time', 'Calendars and time zones', 'Coins and perimeter puzzles']);
  L.use(826, ['How do you convert units of area and volume?', 'What are three-dimensional objects?', 'Circles', 'Cylinders', 'Circles, similarity and solids']);
  L.use(827, ['What is algebra?', 'Expanding two brackets', 'Equations, inequalities and formulae', 'Expressions from words and shapes', 'Brackets, factorising and equations']);
  L.use(828, ['How do you generate a rule from a pattern?', 'The equation y = mx + c', 'Finding a line from two points', 'Gradient and straight lines']);
  L.use(829, ['How do you find angles between lines?', 'Interior and exterior angles', 'Bearings', 'Polygon angles, bearings and coordinates']);
  L.use(830, ['Pythagoras’ theorem', 'Arcs and sectors', 'Pythagoras and trigonometry', 'Circles, similarity and solids']);
  L.use(831, ['Similar shapes and scale factors', 'Enlargement', 'Circles, similarity and solids']);
  L.use(832, ['How do you present data using graphs, charts and diagrams?', 'Scatter graphs', 'Tree diagrams', 'Two-way tables, Venn diagrams and pie charts', 'Quartiles and probability']);
  L.use(833, ['Rotation on a grid', 'Views of solids', 'Painted cubes and stacks']);
})();
