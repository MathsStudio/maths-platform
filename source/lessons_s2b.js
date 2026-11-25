/* lessons_s2b.js: the older S2 Watch lessons rebuilt in full with more worked examples,
   then each S2 topic's Watch lesson put together. */
(function () {
  'use strict';
  var BT = window.BT; if (!BT || !BT.L || !BT.L.lesson) return;
  var L = BT.L, V = BT.sv, LK = BT.lk, E = L.E, LS = L.lesson;
  var SPA = window.SPA, cubes = function (h) { return SPA && SPA.cubes ? SPA.cubes(h, 215, null, true) : ''; };

  /* ---------- 821 ---------- */
  LS('Standard form', 'how to write very large and very small numbers in standard form.', {
    intro: ['Standard form', 'a × 10ⁿ', "Standard form writes a number as a number between 1 and 10, times a power of 10. It makes very big and very small numbers easy to read.", E('a × 10ⁿ, where 1 ≤ a < 10', 'g')],
    ex: [['Large numbers', '4,500,000', [["Move the point to make 4.5: 6 places. So 4.5 times 10 to the power 6.", E('4,500,000 = 4.5 × 10⁶', 'g')]]],
      ['Small numbers', '0.00072', [["Move the point to make 7.2: 4 places right, so the power is negative 4.", E('0.00072 = 7.2 × 10⁻⁴', 'g')]]],
      ['Back to ordinary form', '3.08 × 10⁵', [["Move the point 5 places right: 308,000.", E('3.08 × 10⁵ = 308,000', 'g')]]],
      ['Multiplying', 'Multiply the numbers, add the powers', [["2 times 10 cubed times 4 times 10 to the 5 is 8 times 10 to the eight.", E('(2 × 10³)(4 × 10⁵) = 8 × 10⁸', 'g')]]]],
    real: ['Science', "The Sun is about 150 million kilometres away: 1.5 times 10 to the eight. A red blood cell is about 7 times 10 to the minus 6 metres wide.", E('1.5 × 10⁸ km · 7 × 10⁻⁶ m', 'g')],
    turn: ["Your turn! Write 62,000 in standard form. Pause and try it.", E('62,000'), "6.2 times 10 to the four.", E('6.2 × 10⁴', 'g')],
    rec: ["Write a number between 1 and 10, times a power of 10. Big numbers have positive powers; small numbers have negative powers.", ['1 ≤ a < 10', 'Count the moves of the point', 'Big: positive power', 'Small: negative power']],
    deep: ['The power of 10 tells you how many places the decimal point moved.', '45 × 10⁵ is not standard form: the first number must be less than 10.']
  });

  LS('Index laws and negative indices', 'the laws for multiplying and dividing powers, and what negative and 0 powers mean.', {
    intro: ['Index laws', 'Shortcuts for powers', "When the base is the same, there are quick rules for multiplying, dividing and raising powers.", V.tbl([['aᵐ × aⁿ', 'aᵐ⁺ⁿ'], ['aᵐ ÷ aⁿ', 'aᵐ⁻ⁿ'], ['(aᵐ)ⁿ', 'aᵐⁿ']], ['Rule', 'Result'])],
    ex: [['Multiplying', 'Add the powers', [["3 to the 4 times 3 to the 2 is 3 to the six.", E('3⁴ × 3² = 3⁶', 'g')]]],
      ['Dividing', 'Subtract the powers', [["5 to the 7 divided by 5 to the 3 is 5 to the four.", E('5⁷ ÷ 5³ = 5⁴', 'g')]]],
      ['Power of a power', 'Multiply the powers', [["2 squared, all cubed, is 2 to the six.", E('(2²)³ = 2⁶', 'g')]]],
      ['Zero and negative powers', 'a⁰ = 1, a⁻ⁿ = 1/aⁿ', [["Anything to the power 0 is 1. 2 to the minus 3 is 1 over 2 cubed: 1 eighth.", E('7⁰ = 1 · 2⁻³ = 1/8', 'g')]]]],
    turn: ["Your turn! Simplify x to the 5 times x to the minus 2. Pause and try it.", E('x⁵ × x⁻²'), "Add the powers: x cubed.", E('x³', 'g')],
    rec: ["With the same base: multiply means add powers, divide means subtract powers, a power of a power means multiply. a to the 0 is 1; a negative power is 1 over the positive power.", ['× : add powers', '÷ : subtract powers', '( )ⁿ: multiply powers', 'a⁰ = 1, a⁻ⁿ = 1/aⁿ']],
    deep: ['a⁰ = 1 because aⁿ ÷ aⁿ is 1, and the rule gives aⁿ⁻ⁿ = a⁰.', 'The laws only work with the same base: 2³ × 3² cannot be combined.']
  });

  /* ---------- 822 / 824 ---------- */
  LS('Compound percentage change', 'how to apply a percentage change repeatedly, like compound interest.', {
    intro: ['Compound change', 'Change on the new amount', "In compound change, each percentage is applied to the new amount, not the original. We use a multiplier and a power.", E('Amount × multiplierⁿ', 'g')],
    ex: [['Compound interest', '£500 at 4% for 3 years', [["The multiplier is 1.04. 500 times 1.04 cubed is £562.43.", E('500 × 1.04³ = £562.43', 'g')]]],
      ['Year by year', 'See it grow', [["Year 1: 520. Year 2: 540.80. Year 3: 562.43. Each year earns a little more.", V.tbl([['1', '£520.00'], ['2', '£540.80'], ['3', '£562.43']], ['Year', 'Amount'])]]],
      ['Depreciation', 'A car loses value', [["A car worth £12,000 loses 15% a year. The multiplier is 0.85. After 2 years: £8,670.", E('12,000 × 0.85² = £8,670', 'g')]]]],
    turn: ["Your turn! What is £1,000 after 2 years at 10% compound interest? Pause and try it.", E('1000 × 1.1²'), "1,000 times 1.21: £1,210.", E('£1,210', 'g')],
    rec: ["Compound change applies the percentage to the new amount each time. Multiply by the multiplier to the power of the number of years.", ['Multiplier: 1 ± rate', 'Raise to the number of years', 'Interest grows each year', 'Depreciation shrinks each year']],
    deep: ['Compound growth speeds up because each year’s change is on a bigger amount.', 'Don’t multiply the percentage by the years: 3 years at 4% is not 12%.']
  });

  LS('Percentage change and reverse percentages', 'how to find a percentage change and work back to an original amount.', {
    intro: ['Two skills', 'Change and reverse', "Percentage change compares a change with the original. Reverse percentages work back from a new amount to the original.", V.cards(['Change ÷ original × 100', 'New ÷ multiplier'], ['b', 'g'])],
    ex: [['Percentage increase', '£40 to £46', [["The change is £6. 6 divided by 40 times 100 is 15%.", E('6 ÷ 40 × 100 = 15%', 'g')]]],
      ['Percentage decrease', '250 to 210', [["The change is 40. 40 divided by 250 is 16%.", E('40 ÷ 250 × 100 = 16%', 'g')]]],
      ['Reverse percentage', 'After a 20% rise, £72', [["The new amount is 120% of the original. 72 divided by 1.2 is £60.", E('£72 ÷ 1.2 = £60', 'g')]]],
      ['After a discount', '30% off, now £56', [["£56 is 70% of the original. 56 divided by 0.7 is £80.", E('£56 ÷ 0.7 = £80', 'g')]]]],
    turn: ["Your turn! After a 10% rise, a price is £110. What was it before? Pause and try it.", E('£110 ÷ 1.1'), "One hundred pounds.", E('£100', 'g')],
    rec: ["Percentage change is change over original times 100. For reverse percentages, divide the new amount by the multiplier.", ['Change ÷ original × 100', 'Find the multiplier', 'Original = new ÷ multiplier', 'Check by working forwards']],
    deep: ['Reverse percentages divide because the original was multiplied to get the new amount.', 'Don’t take 20% off the new price to undo a 20% rise: £72 − 20% is £57.60, not £60.']
  });

  LS('Percentage change and wages', 'how pay rises, deductions and percentage changes affect wages.', {
    intro: ['Pay and percentages', 'Rises and deductions', "Pay rises are usually given as a percentage. Deductions like tax and pension are taken off. Percentages help us compare.", E('New pay = old pay × (1 + rise)', 'g')],
    ex: [['A pay rise', '3% on £24,000', [["3% of 24,000 is £720. The new salary is £24,720.", E('24,000 × 1.03 = £24,720', 'g')]]],
      ['Hourly rate', 'A 5% rise on £11.40', [["Eleven pounds forty times one point zero five is eleven pounds ninety-seven.", E('£11.40 × 1.05 = £11.97', 'g')]]],
      ['Deductions', 'Net pay', [["Gross pay is £2,000. Deductions of £340 leave net pay of £1,660.", E('£2,000 − £340 = £1,660', 'g')]]],
      ['Comparing rises', 'Which is better?', [["A 4% rise on £20,000, or a flat £700? 4% is £800, so the percentage is better.", E('£800 > £700', 'g')]]]],
    turn: ["Your turn! A wage rises from £400 to £420 a week. What percentage rise is that? Pause and try it.", E('20 ÷ 400 × 100'), "Five per cent.", E('5%', 'g')],
    rec: ["Use multipliers for pay rises. Net pay is gross pay minus deductions. Percentage change is change over original.", ['Rise: × (1 + rate)', 'Net = gross − deductions', 'Compare in pounds', 'Change ÷ original × 100']],
    deep: ['A percentage rise is fairer for big and small earners alike, but gives more pounds to higher earners.', 'Always calculate the rise on the old pay, not the new.']
  });

  LS('Income tax', 'how income tax is calculated using a tax-free allowance and tax bands.', {
    intro: ['Income tax', 'Tax on earnings', "Most people pay income tax on what they earn. The first part of income, the personal allowance, is tax free. Tax is then charged at different rates in bands.", V.note('Rates and bands change each year; we use simple example rates here.')],
    ex: [['Taxable income', 'Subtract the allowance', [["With a £12,500 allowance, someone earning £30,000 pays tax on £17,500.", E('30,000 − 12,500 = £17,500', 'g')]]],
      ['Basic rate', '20% example', [["At 20%, tax on £17,500 is £3,500.", E('20% of 17,500 = £3,500', 'g')]]],
      ['Two bands', 'Part at each rate', [["If the first 5,000 of taxable income is taxed at 10% and the rest at 20%: 500 plus 2,500: £3,000.", E('10% of 5,000 + 20% of 12,500 = £3,000', 'g')]]],
      ['Monthly', 'Divide by 12', [["£3,000 a year is £250 a month.", E('£3,000 ÷ 12 = £250', 'g')]]]],
    turn: ["Your turn! With a £12,000 allowance and 20% tax, how much tax is paid on £22,000? Pause and try it.", E('20% of (22,000 − 12,000)'), "20% of 10,000 is £2,000.", E('£2,000', 'g')],
    rec: ["Subtract the tax-free allowance to find taxable income, then apply each band's rate to the part in that band.", ['Gross − allowance = taxable', 'Apply each band’s rate', 'Add the tax from each band', 'Net = gross − tax']],
    deep: ['Moving into a higher band only taxes the extra money at the higher rate, not all of it.', 'Remember to take the allowance off before applying the rate.']
  });

  LS('Hire purchase and exchange rates', 'how hire purchase and currency exchange work.', {
    intro: ['Hire purchase', 'Paying in instalments', "Hire purchase means paying a deposit, then monthly instalments. It usually costs more than paying cash.", E('Total = deposit + instalments', 'g')],
    ex: [['Hire purchase total', 'A sofa', [["A sofa costs £900 cash, or a £100 deposit plus 12 payments of £75. HP total: £1,000, 100 more than cash.", E('100 + 12 × 75 = £1,000', 'g')]]],
      ['Exchange rates', 'Pounds to euros', [["At £1 to 1 euro 15, £240 is 276 euros.", E('240 × 1.15 = €276', 'g')]]],
      ['Back to pounds', 'Divide', [["86 euros 25 is 86.25 divided by 1.15: £75.", E('86.25 ÷ 1.15 = £75', 'g')]]],
      ['Commission', 'A fee', [["Some exchanges charge commission. 2% of £300 is £6, so only £294 is exchanged.", E('300 − 6 = £294', 'g')]]]],
    turn: ["Your turn! A laptop costs a £50 deposit and 10 payments of £45. What is the total? Pause and try it.", E('50 + 10 × 45'), "50 plus 450: £500.", E('£500', 'g')],
    rec: ["Hire purchase total is deposit plus all instalments; compare it with the cash price. Multiply by the exchange rate to change pounds and divide to change back.", ['HP = deposit + payments', 'Compare with cash', 'Pounds → other: ×', 'Other → pounds: ÷']],
    deep: ['The extra cost of hire purchase is the price of borrowing.', 'Check exchange answers make sense: if £1 buys €1.15, you should get more euros than pounds.']
  });

  /* ---------- 823 ---------- */
  LS('Combining ratios', 'how to combine 2 ratios that share a quantity.', {
    intro: ['Linking ratios', 'A shared part', "If A to B and B to C are given, we can combine them into A to B to C by making the B parts match.", E('A : B and B : C → A : B : C', 'g')],
    ex: [['Matching the middle', '2 : 3 and 4 : 5', [["A to B is 2 to 3, B to C is 4 to 5. Make B the same: the LCM of 3 and 4 is 12. 8 to 12 and 12 to 15.", E('A : B : C = 8 : 12 : 15', 'g')]]],
      ['Using it', 'Find C', [["If A is 40, then 1 part is 5, and C is 15 times 5: 75.", E('8 parts = 40 → C = 15 × 5 = 75', 'g')]]],
      ['Fruit bowl', 'Apples, pears, plums', [["Apples to pears is 3 to 1, pears to plums is 2 to 5. Make pears match: 6 to 2 to 5.", E('apples : pears : plums = 6 : 2 : 5', 'g')]]]],
    turn: ["Your turn! Combine A to B equals 1 to 2 with B to C equals 3 to 1. Pause and try it.", E('1 : 2 and 3 : 1'), "Make B equal 6: 3 to 6, 6 to 2. So 3 to 6 to 2.", E('3 : 6 : 2', 'g')],
    rec: ["Find the shared quantity, make its parts equal using the LCM, then write the combined ratio.", ['Find the shared part', 'Make it equal (LCM)', 'Scale both ratios', 'Write A : B : C']],
    deep: ['Scaling a ratio by multiplying both parts doesn’t change it, so we can match the shared part safely.', 'Scale every part of each ratio, not just the shared 1.']
  });

  LS('Direct and inverse proportion', 'how to tell direct and inverse proportion apart and solve problems with each.', {
    intro: ['Two kinds of proportion', 'Together or opposite', "In direct proportion, both quantities go up together. In inverse proportion, 1 goes up as the other goes down.", V.cards(['Direct: more → more', 'Inverse: more → less'], ['g', 'b'])],
    ex: [['Direct', 'Petrol', [["30 litres of petrol cost £42. 1 litre costs £1.40, so 50 litres cost £70.", E('42 ÷ 30 × 50 = £70', 'g')]]],
      ['Inverse', 'Builders', [["4 builders take 6 days. 24 builder-days are needed. 3 builders take 8 days.", E('4 × 6 = 24 → 24 ÷ 3 = 8 days', 'g')]]],
      ['Speed and time', 'Inverse', [["At 60 miles per hour a trip takes 2 hours. At 40 miles per hour it takes 3 hours, because the distance, 120, stays the same.", E('60 × 2 = 120 → 120 ÷ 40 = 3 h', 'g')]]]],
    turn: ["Your turn! 6 taps fill a tank in 10 minutes. How long do 4 taps take? Pause and think.", E('6 × 10 = 60 tap-minutes'), "60 divided by 4 is 15 minutes.", E('15 min', 'g')],
    rec: ["Direct proportion: find 1, then multiply. Inverse proportion: find the total that stays the same, then divide.", ['Direct: ÷ then ×', 'Inverse: product stays fixed', 'Decide which first', 'Check it makes sense']],
    deep: ['In inverse proportion, the product of the 2 quantities stays constant.', 'More workers mean less time: if your answer goes the wrong way, check which type it is.']
  });

  /* ---------- 825 ---------- */
  LS('Average speed', 'how to work out average speed for a journey with different parts.', {
    intro: ['Average speed', 'Total distance ÷ total time', "On a real journey, speed changes. The average speed is the total distance divided by the total time.", E('Average speed = total distance ÷ total time', 'g')],
    ex: [['Two parts', 'A drive', [["60 kilometres in 1 hour, then 100 kilometres in 2 hours. Total: 160 kilometres in 3 hours. Average speed: 53.3 kilometres per hour.", E('160 ÷ 3 ≈ 53.3 km/h', 'g')]]],
      ['With a stop', 'Include the break', [["A cyclist rides 30 kilometres in 1 and a half hours, stops for half an hour, then rides 20 kilometres in 1 hour. 50 kilometres in 3 hours: 16.7 kilometres per hour.", E('50 ÷ 3 ≈ 16.7 km/h', 'g')]]],
      ['Not the mean of speeds', 'A trap', [["Driving there at 60 and back at 40 does not average 50. For 120 kilometres each way: 2 hours plus 3 hours, 240 kilometres in 5 hours: 48.", E('240 ÷ 5 = 48 km/h', 'g')]]]],
    turn: ["Your turn! A walk of 12 kilometres takes 3 hours, including a 1-hour lunch. What is the average speed? Pause and try it.", E('12 ÷ 3'), "4 kilometres per hour, using the total time.", E('4 km/h', 'g')],
    rec: ["Add up all the distances and all the times, including stops, then divide. Don't just average the speeds.", ['Total distance', 'Total time (with stops)', 'Divide', 'Not the mean of speeds']],
    deep: ['Average speed weights each part by how long it takes, so slow parts count for more.', 'Averaging 60 and 40 to get 50 is wrong when the times are different.']
  });

  LS('Distance–time graphs with a return', 'how to read and draw distance–time graphs for journeys that go out and come back.', {
    intro: ['Out and back', 'The line comes down', "On a distance–time graph, going away makes the line rise. Coming back makes it fall towards 0.", V.cards(['Rising: going away', 'Flat: stopped', 'Falling: coming back'], ['b', 'p', 'g'])],
    ex: [['Reading speeds', 'Each section', [["10 kilometres out in 1 hour is 10 kilometres per hour. Back in 30 minutes is 20 kilometres per hour: faster on the way home, so steeper.", E('10 ÷ 1 = 10 · 10 ÷ 0.5 = 20 km/h', 'g')]]],
      ['A stop', 'Flat line', [["A flat section from 11 to 11 30 means a half-hour stop.", E('30 min stop', 'g')]]],
      ['Two people', 'Where lines cross', [["When 2 journey lines cross, the people are at the same place at the same time.", V.note('Crossing lines: same place, same time')]]]],
    turn: ["Your turn! A line goes from 12 kilometres back to 0 in 45 minutes. What is the speed? Pause and try it.", E('12 ÷ 0.75'), "16 kilometres per hour.", E('16 km/h', 'g')],
    rec: ["Rising lines go away, flat lines are stops, falling lines come back. Speed is distance over time for each section; steeper means faster.", ['Rising: away', 'Flat: stopped', 'Falling: returning', 'Steeper = faster']],
    deep: ['The steepness of the line shows speed in either direction.', 'Change minutes to hours: 45 minutes is 0.75 hours.']
  });

  /* ---------- 826 ---------- */
  LS('Circles', 'how to find the circumference and area of a circle.', {
    intro: ['Pi', 'A special number', "In every circle, the circumference divided by the diameter is the same number, pi, about 3.14.", E('π ≈ 3.14', 'g')],
    ex: [['Circumference', 'C = πd', [["A wheel with diameter 60 centimetres has a circumference of pi times 60: about 188.5 centimetres.", E('C = π × 60 ≈ 188.5 cm', 'g')]]],
      ['Area', 'A = πr²', [["A circle with radius 5 centimetres has area pi times 25: about 78.5 square centimetres.", E('A = π × 5² ≈ 78.5 cm²', 'g')]]],
      ['Radius or diameter?', 'Check which you have', [["If you're given a diameter of 12, the radius is 6. Area is pi times 36: about 113 square centimetres.", E('d = 12 → r = 6 → A ≈ 113 cm²', 'g')]]],
      ['Semicircles', 'Half a circle', [["A semicircle with radius 4 has area half of pi times 16: about 25.1 square centimetres.", E('½ × π × 16 ≈ 25.1 cm²', 'g')]]]],
    turn: ["Your turn! Find the circumference of a circle with radius 10 centimetres. Pause and try it.", E('C = π × 20'), "The diameter is 20: about 62.8 centimetres.", E('≈ 62.8 cm', 'g')],
    rec: ["Circumference is pi times the diameter. Area is pi times radius squared. Check whether you've been given the radius or the diameter.", ['C = πd = 2πr', 'A = πr²', 'r = d ÷ 2', 'Area in square units']],
    deep: ['π is the same for every circle because all circles are enlargements of each other.', 'Square the radius before multiplying by π: π × 5² is not (π × 5)².']
  });

  LS('Cylinders', 'how to find the volume and surface area of a cylinder.', {
    intro: ['Cylinders', 'A circular prism', "A cylinder is like a prism with a circle as its cross-section.", E('V = πr²h', 'g')],
    ex: [['Volume', 'A tin', [["A tin has radius 4 centimetres and height 10. The circle's area is pi times 16, about 50.3. Times 10: about 503 cubic centimetres.", E('V = π × 4² × 10 ≈ 503 cm³', 'g')]]],
      ['Capacity', 'In litres', [["503 cubic centimetres is about half a litre.", E('503 cm³ ≈ 0.5 l', 'g')]]],
      ['Surface area', 'Two circles and a rectangle', [["Unroll the curved surface: a rectangle with length the circumference and width the height. Add the 2 circles. 2 pi r squared plus 2 pi r h.", E('SA = 2πr² + 2πrh', 'g')]]],
      ['Surface area example', 'Radius 3, height 8', [["2 circles: 2 times pi times 9, about 56.5. Curved: 2 times pi times 3 times 8, about 150.8. Total about 207 square centimetres.", E('≈ 56.5 + 150.8 = 207.3 cm²', 'g')]]]],
    turn: ["Your turn! What is the volume of a cylinder with radius 2 and height 5? Leave it in terms of pi. Pause and try it.", E('π × 2² × 5'), "20 pi cubic units, about 62.8.", E('20π ≈ 62.8', 'g')],
    rec: ["Volume is the circle area times the height. Surface area is 2 circles plus the curved rectangle.", ['V = πr²h', 'Curved area = 2πrh', 'SA = 2πr² + 2πrh', '1,000 cm³ = 1 l']],
    deep: ['The curved surface unrolls into a rectangle as long as the circumference.', 'Use the radius, not the diameter, in πr².']
  });

  LS('Circles, similarity and solids', 'how circles, similar shapes and solids connect through scale and formulas.', {
    intro: ['Three ideas together', 'Circles, similar shapes, solids', "This lesson links circle formulas, similar shapes, which are enlargements, and the volumes of solids.", V.list(['Circle: C and A', 'Similar shapes: scale factor', 'Solids: V and SA'])],
    ex: [['Similar shapes', 'Same shape, different size', [["2 similar rectangles: 1 is 3 by 5, the other 6 by 10. Every length is doubled: scale factor 2.", E('scale factor = 6 ÷ 3 = 2', 'g')]]],
      ['Area scale factor', 'Square it', [["If lengths double, areas get 4 times bigger, because 2 squared is 4.", E('length × 2 → area × 4', 'g')]]],
      ['Volume scale factor', 'Cube it', [["If lengths double, volumes get 8 times bigger, because 2 cubed is 8.", E('length × 2 → volume × 8', 'g')]]],
      ['Circles are all similar', 'Scale by the radius', [["Doubling a circle's radius doubles its circumference but makes its area 4 times bigger.", E('r × 2 → C × 2, A × 4', 'g')]]]],
    turn: ["Your turn! A model is enlarged with scale factor 3. How many times bigger is its volume? Pause and think.", E('3³'), "3 cubed: 27 times.", E('× 27', 'g')],
    rec: ["Similar shapes have the same angles and lengths in the same ratio. Lengths scale by k, areas by k squared and volumes by k cubed.", ['Similar: same shape', 'Lengths × k', 'Areas × k²', 'Volumes × k³']],
    deep: ['Area has 2 dimensions and volume 3, which is why the scale factor is squared or cubed.', 'Doubling every length does not double the area.']
  });

  /* ---------- 827 ---------- */
  LS('Expanding two brackets', 'how to multiply out 2 brackets, like (x + 3)(x + 5).', {
    intro: ['Two brackets', 'Every term times every term', "To expand 2 brackets, multiply each term in the first bracket by each term in the second, then collect like terms.", E('(a + b)(c + d) = ac + ad + bc + bd', 'g')],
    ex: [['A grid', '(x + 3)(x + 5)', [["Use a grid: x times x is x squared, x times 5 is 5 x, 3 times x is 3 x, 3 times 5 is 15. Collect: x squared plus 8 x plus 15.", V.tbl([['x', 'x²', '5x'], ['+3', '3x', '15']], ['×', 'x', '+5']) + E('x² + 8x + 15', 'g')]]],
      ['With negatives', '(x − 4)(x + 2)', [["x squared, plus 2 x, minus 4 x, minus 8. Collect: x squared minus 2 x minus 8.", E('x² − 2x − 8', 'g')]]],
      ['Squaring a bracket', '(x + 6)²', [["Write it as 2 brackets: x plus 6 times x plus 6. x squared plus 12 x plus 36.", E('(x + 6)² = x² + 12x + 36', 'g')]]]],
    turn: ["Your turn! Expand x plus 1 times x plus 7. Pause and try it.", E('(x + 1)(x + 7)'), "x squared plus 8 x plus 7.", E('x² + 8x + 7', 'g')],
    rec: ["Multiply every term in the first bracket by every term in the second, using a grid if it helps, then collect like terms.", ['Four multiplications', 'Use a grid', 'Watch the signs', 'Collect like terms']],
    deep: ['The grid works like the area of a rectangle split into 4 parts.', '(x + 6)² is not x² + 36: the middle term 12x is often forgotten.']
  });

  LS('Equations, inequalities and formulae', 'how to solve equations and inequalities, and rearrange formulae.', {
    intro: ['Three tools', 'Equations, inequalities, formulae', "Equations have an equals sign. Inequalities use less than or greater than. Formulae connect quantities and can be rearranged.", V.cards(['=', '<, >, ≤, ≥', 'formula'], ['b', 'p', 'g'])],
    ex: [['Equation', '5x − 3 = 2x + 9', [["Take 2 x from both sides: 3 x minus 3 equals 9. Add 3: 3 x equals 12. x equals 4.", E('x = 4', 'g')]]],
      ['Inequality', '3x + 2 > 14', [["Solve like an equation: 3 x greater than 12, so x greater than 4.", E('x > 4', 'g')]]],
      ['Flipping the sign', 'Dividing by a negative', [["Negative 2 x less than 10: dividing by negative 2 flips the sign. x greater than negative 5.", E('−2x < 10 → x > −5', 'g')]]],
      ['Rearranging', 'v = u + at, for a', [["Take u from both sides: v minus u equals a t. Divide by t: a equals v minus u over t.", E('a = (v − u) ÷ t', 'g')]]]],
    turn: ["Your turn! Solve 4 x take away 7 is less than or equal to 13. Pause and try it.", E('4x − 7 ≤ 13'), "4 x is less than or equal to 20, so x is less than or equal to 5.", E('x ≤ 5', 'g')],
    rec: ["Solve equations and inequalities by doing the same to both sides. Flip an inequality sign if you multiply or divide by a negative. Rearrange formulae using inverse operations.", ['Same to both sides', 'Inequality: flip if × or ÷ by negative', 'Rearrange: undo in reverse order', 'Check your answer']],
    deep: ['Inequalities have many answers: x > 4 includes 4.1, 5, 100 and more.', 'Multiplying or dividing an inequality by a negative number reverses it.']
  });

  LS('Brackets, factorising and equations', 'how to factorise expressions and use brackets to solve equations.', {
    intro: ['Factorising', 'The reverse of expanding', "Factorising puts an expression back into brackets by taking out a common factor.", E('6x + 9 = 3(2x + 3)', 'g')],
    ex: [['Common factor', '10a − 15b', [["The highest common factor of 10 and 15 is 5. 5, bracket, 2 a minus 3 b.", E('10a − 15b = 5(2a − 3b)', 'g')]]],
      ['Letters too', 'x² + 7x', [["Both terms have x: x, bracket, x plus 7.", E('x² + 7x = x(x + 7)', 'g')]]],
      ['Quadratics', 'x² + 5x + 6', [["Find 2 numbers that multiply to 6 and add to 5: 2 and 3. So x plus 2 times x plus 3.", E('x² + 5x + 6 = (x + 2)(x + 3)', 'g')]]],
      ['Equations with brackets', '4(x − 2) = 3(x + 1)', [["Expand: 4 x minus 8 equals 3 x plus 3. Take 3 x: x minus 8 equals 3. x equals 11.", E('x = 11', 'g')]]]],
    turn: ["Your turn! Factorise x squared plus 7 x plus 12. Pause and try it.", E('x² + 7x + 12'), "3 and 4 multiply to 12 and add to 7: x plus 3 times x plus 4.", E('(x + 3)(x + 4)', 'g')],
    rec: ["Factorise by taking out the highest common factor. For x squared plus b x plus c, find 2 numbers that multiply to c and add to b. Expand brackets to solve equations.", ['Take out the HCF', 'Quadratic: × to c, + to b', 'Check by expanding', 'Expand to solve']],
    deep: ['Factorising and expanding are inverses: always check by expanding back.', 'Take out the highest common factor, not just any factor: 6x + 9 = 3(2x + 3), not 1(6x + 9).']
  });

  /* ---------- 828 ---------- */
  LS('The equation y = mx + c', 'what the gradient and the y-intercept are, and how to draw lines from y = mx + c.', {
    intro: ['Straight lines', 'y = mx + c', "Every straight line can be written as y equals m x plus c. m is the gradient, how steep it is. c is where it crosses the y-axis.", E('y = mx + c', 'g')],
    ex: [['Reading m and c', 'y = 3x − 2', [["The gradient is 3: up 3 for every one across. The line crosses the y-axis at negative 2.", E('m = 3 · c = −2', 'g')]]],
      ['Drawing a line', 'A table of values', [["For y equals 2 x plus 1: when x is 0, y is 1; x is 1, y is 3; x is 2, y is 5. Plot and join.", V.tbl([['0', '1'], ['1', '3'], ['2', '5']], ['x', 'y'])]]],
      ['Negative gradient', 'Going down', [["y equals negative x plus 4 slopes down from left to right, crossing the y-axis at 4.", E('m = −1 → slopes down', 'g')]]],
      ['Parallel lines', 'Same gradient', [["y equals 2 x plus 1 and y equals 2 x minus 5 are parallel: both have gradient 2.", E('same m → parallel', 'g')]]]],
    turn: ["Your turn! What are the gradient and y-intercept of y equals negative 4 x plus 7? Pause and think.", E('y = −4x + 7'), "Gradient negative 4, y-intercept 7.", E('m = −4 · c = 7', 'g')],
    rec: ["In y = mx + c, m is the gradient and c is the y-intercept. Make a table of values to draw the line. Lines with the same gradient are parallel.", ['m: gradient', 'c: y-intercept', 'Table of values', 'Same m: parallel']],
    deep: ['The gradient is the change in y for each step of 1 in x.', 'In y = 4 − 2x, the gradient is −2, not 4: rewrite it as y = −2x + 4.']
  });

  LS('Finding a line from two points', 'how to find the equation of a line through 2 given points.', {
    intro: ['Two points', 'Gradient then intercept', "2 points are enough to fix a straight line. Find the gradient first, then the y-intercept.", E('m = (y₂ − y₁) ÷ (x₂ − x₁)', 'g')],
    ex: [['The gradient', '(1, 4) and (3, 10)', [["The change in y is 6; the change in x is 2. Gradient: 3.", E('m = (10 − 4) ÷ (3 − 1) = 3', 'g')]]],
      ['The intercept', 'Substitute a point', [["y equals 3 x plus c. Using 1, 4: 4 equals 3 plus c, so c is 1. The line is y equals 3 x plus 1.", E('y = 3x + 1', 'g')]]],
      ['Negative gradient', '(0, 6) and (2, 2)', [["The change in y is negative 4 over 2: gradient negative 2. It crosses at 6. y equals negative 2 x plus 6.", E('y = −2x + 6', 'g')]]]],
    turn: ["Your turn! Find the gradient of the line through 2, 1 and 5, 10. Pause and try it.", E('(10 − 1) ÷ (5 − 2)'), "9 divided by 3 is 3.", E('m = 3', 'g')],
    rec: ["Find the gradient using change in y over change in x. Substitute 1 point into y = mx + c to find c. Check with the other point.", ['m = Δy ÷ Δx', 'Substitute a point', 'Find c', 'Check with the other point']],
    deep: ['It doesn’t matter which point you call first, as long as you use the same order for y and x.', 'Subtract in the same order top and bottom, or the sign of the gradient will be wrong.']
  });

  LS('Gradient and straight lines', 'how to find and interpret gradients of lines and real-life graphs.', {
    intro: ['Gradient', 'Steepness', "The gradient measures steepness: how much a line goes up for each step across. Up is positive; down is negative.", E('gradient = vertical ÷ horizontal', 'g')],
    ex: [['From a graph', 'Rise over run', [["A line rises 6 squares while going across 3. Gradient: 2.", E('6 ÷ 3 = 2', 'g')]]],
      ['Horizontal and vertical', 'Special cases', [["A horizontal line has gradient 0. A vertical line's gradient is undefined.", V.cards(['Horizontal: 0', 'Vertical: undefined'], ['b', 'p'])]]],
      ['Real life', 'Rate of change', [["On a graph of cost against hours for a plumber, the gradient is the hourly rate. If the cost rises by £120 over 3 hours, that's £40 an hour.", E('120 ÷ 3 = £40 per hour', 'g')]]]],
    turn: ["Your turn! A line falls 8 while going across 2. What is its gradient? Pause and try it.", E('−8 ÷ 2'), "Negative four.", E('−4', 'g')],
    rec: ["Gradient is vertical change over horizontal change. Positive slopes up, negative slopes down. In real graphs, the gradient is a rate.", ['Rise ÷ run', 'Up: positive, down: negative', 'Horizontal: 0', 'Real life: a rate']],
    deep: ['On real-life graphs, the gradient has units, like £ per hour or km per hour.', 'Count squares using the scale on each axis, not just the grid.']
  });

  /* ---------- 829 ---------- */
  LS('Interior and exterior angles', 'how to find interior and exterior angles of polygons.', {
    intro: ['Polygon angles', 'Inside and outside', "Interior angles are inside a polygon. An exterior angle is between 1 side and the next side extended. Interior plus exterior is 180.", E('interior + exterior = 180°', 'g')],
    ex: [['Sum of interior angles', '(n − 2) × 180°', [["A heptagon has 7 sides: 5 times 180 is 900 degrees.", E('(7 − 2) × 180° = 900°', 'g')]]],
      ['Exterior angles', 'Always 360°', [["The exterior angles of any polygon add to 360. Each exterior angle of a regular decagon is 36 degrees.", E('360° ÷ 10 = 36°', 'g')]]],
      ['Interior from exterior', 'Regular polygon', [["The interior angle of a regular decagon is 180 minus 36: 144 degrees.", E('180° − 36° = 144°', 'g')]]],
      ['How many sides?', 'Working backwards', [["A regular polygon has exterior angles of 24 degrees. 360 divided by 24 is 15 sides.", E('360 ÷ 24 = 15', 'g')]]]],
    turn: ["Your turn! What is each interior angle of a regular hexagon? Pause and try it.", E('180° − 360° ÷ 6'), "The exterior is 60, so the interior is 120 degrees.", E('120°', 'g')],
    rec: ["Interior angles add to n minus 2 times 180. Exterior angles add to 360. Interior plus exterior is 180.", ['Interior sum: (n − 2) × 180°', 'Exterior sum: 360°', 'Int + ext = 180°', 'Regular: divide equally']],
    deep: ['Walking all the way round a polygon is 1 full turn, which is why exterior angles add to 360°.', 'Only divide by n for regular polygons.']
  });

  LS('Bearings', 'how to measure, draw and calculate three-figure bearings.', {
    intro: ['Bearings', 'Directions as angles', "A bearing is a direction measured clockwise from north, written with 3 figures.", V.tbl([['N', '000°'], ['E', '090°'], ['S', '180°'], ['W', '270°'], ['NE', '045°'], ['SW', '225°']], ['Direction', 'Bearing'])],
    ex: [['Measuring', 'From the north line', [["Draw a north line at the starting point. Measure clockwise to the line joining the points. If it's 70 degrees, write 0 7 0.", E('070°', 'g')]]],
      ['Back bearings', 'The return journey', [["The back bearing is the bearing plus or minus 180. The back bearing of 0 7 0 is 2 5 0.", E('070° + 180° = 250°', 'g')]]],
      ['Scale drawings', 'Bearing and distance', [["A ship sails 8 kilometres on a bearing of 1 2 0. On a 1 to 100,000 scale, draw a line 8 centimetres long at 120 degrees from north.", E('8 km → 8 cm at 120°', 'g')]]]],
    turn: ["Your turn! The bearing of B from A is 3 1 0 degrees. What is the bearing of A from B? Pause and try it.", E('310° − 180°'), "1 3 0 degrees.", E('130°', 'g')],
    rec: ["Measure bearings clockwise from north and use 3 figures. Back bearings differ by 180 degrees. Combine with scale for maps.", ['Start at north', 'Measure clockwise', 'Three figures', 'Back bearing: ± 180°']],
    deep: ['Bearings are used by pilots and sailors because they describe any direction exactly.', 'Always start from north at the point you are measuring from.']
  });

  /* ---------- 830 ---------- */
  LS('Pythagoras’ theorem', 'how to use Pythagoras’ theorem to find a side of a right-angled triangle.', {
    intro: ['Pythagoras', 'Right-angled triangles', "In a right-angled triangle, the square of the longest side, the hypotenuse, equals the sum of the squares of the other 2 sides.", E('a² + b² = c²', 'g')],
    ex: [['Finding the hypotenuse', '6 and 8', [["6 squared plus 8 squared is 36 plus 64: 100. The square root is 10.", E('c = √(36 + 64) = 10', 'g')]]],
      ['Finding a shorter side', 'Hypotenuse 13, side 5', [["13 squared take away 5 squared: 169 take away 25 is 144. Square root: 12.", E('b = √(169 − 25) = 12', 'g') + V.rule('Longest side: add. Shorter side: subtract.')]]],
      ['Real life', 'A ladder', [["A 5 metre ladder leans with its foot 1.5 metres from a wall. How high does it reach? 5 squared take away 1.5 squared is 22.75. Square root: about 4.77 metres.", E('√(25 − 2.25) ≈ 4.77 m', 'g')]]],
      ['Is it right-angled?', 'Test the sides', [["Sides 7, 24, 25: 49 plus 576 is 625, which is 25 squared. Yes.", E('7² + 24² = 25² ✓', 'g')]]]],
    turn: ["Your turn! Find the hypotenuse when the other sides are 9 and 12. Pause and try it.", E('√(81 + 144)'), "The square root of 225 is 15.", E('15', 'g')],
    rec: ["In a right-angled triangle, a squared plus b squared equals c squared, where c is the hypotenuse. Add squares for the longest side; subtract for a shorter side.", ['Only right-angled triangles', 'c is the hypotenuse', 'Longest: add squares', 'Shorter: subtract squares']],
    deep: ['The hypotenuse is always opposite the right angle and is always the longest side.', 'Check your answer: the hypotenuse must be longer than both other sides.']
  });

  LS('Arcs and sectors', 'how to find the length of an arc and the area of a sector.', {
    intro: ['Parts of a circle', 'Arc and sector', "An arc is part of the circumference. A sector is a slice of the circle, like a slice of pizza. Both are a fraction of the whole circle.", E('fraction = angle ÷ 360°', 'g')],
    ex: [['Arc length', 'Angle 60°, radius 9', [["60 degrees is a sixth of the circle. The circumference is pi times 18. A sixth of it is 3 pi: about 9.42.", E('60/360 × π × 18 ≈ 9.42', 'g')]]],
      ['Sector area', 'Angle 90°, radius 10', [["90 degrees is a quarter. The circle's area is 100 pi. A quarter is 25 pi: about 78.5.", E('90/360 × π × 10² ≈ 78.5', 'g')]]],
      ['Perimeter of a sector', 'Arc plus two radii', [["The perimeter of a sector is the arc length plus 2 radii. For the 60 degree sector of radius 9: 9.42 plus 18, 27.42.", E('9.42 + 2 × 9 = 27.42', 'g')]]]],
    turn: ["Your turn! What is the area of a semicircle with radius 4? Leave it in terms of pi. Pause and try it.", E('180/360 × π × 16'), "Half of 16 pi is 8 pi.", E('8π ≈ 25.1', 'g')],
    rec: ["The fraction of the circle is the angle over 360. Arc length is that fraction of the circumference; sector area is that fraction of the area.", ['Fraction = angle ÷ 360', 'Arc = fraction × πd', 'Sector = fraction × πr²', 'Perimeter: arc + 2r']],
    deep: ['Arcs and sectors are just fractions of the whole circle formulas.', 'For the perimeter of a sector, remember the 2 straight radii.']
  });

  LS('Pythagoras and trigonometry', 'how to choose between Pythagoras and trigonometry in right-angled triangles.', {
    intro: ['Two tools', 'Sides or angles?', "Pythagoras links 3 sides. Trigonometry, SOH CAH TOA, links 2 sides and an angle.", V.cards(['3 sides → Pythagoras', 'Sides and an angle → trig'], ['b', 'g'])],
    ex: [['Pythagoras', 'Two sides known, find the third', [["Sides 5 and 12, find the hypotenuse: 13.", E('√(25 + 144) = 13', 'g')]]],
      ['SOH CAH TOA', 'Label the sides', [["Opposite is across from the angle, adjacent is next to it, hypotenuse is the longest. Sine is opposite over hypotenuse, cosine adjacent over hypotenuse, tangent opposite over adjacent.", V.tbl([['sin', 'O ÷ H'], ['cos', 'A ÷ H'], ['tan', 'O ÷ A']], ['Ratio', 'Sides'])]]],
      ['Finding a side', 'With an angle', [["Angle 30 degrees, hypotenuse 10, find the opposite: 10 times sine 30 is 5.", E('O = 10 × sin 30° = 5', 'g')]]],
      ['Finding an angle', 'Inverse', [["Opposite 4, adjacent 4: tangent is 1, so the angle is 45 degrees.", E('tan⁻¹(4 ÷ 4) = 45°', 'g')]]]],
    turn: ["Your turn! Opposite 6, hypotenuse 12. Find the angle. Pause and try it.", E('sin⁻¹(6 ÷ 12)'), "Sine is a half, so the angle is 30 degrees.", E('30°', 'g')],
    rec: ["Use Pythagoras for 3 sides. Use SOH CAH TOA when an angle is involved: label the sides, pick the ratio, then solve.", ['3 sides: Pythagoras', 'Angle: SOH CAH TOA', 'Label O, A, H', 'Inverse for angles']],
    deep: ['Trigonometric ratios are fixed for each angle because all right-angled triangles with that angle are similar.', 'Check your calculator is in degrees.']
  });

  /* ---------- 831 ---------- */
  LS('Similar shapes and scale factors', 'how to recognise similar shapes and use scale factors to find missing lengths.', {
    intro: ['Similar shapes', 'Same shape, different size', "Similar shapes have equal angles and corresponding sides in the same ratio. 1 is an enlargement of the other.", E('scale factor = new ÷ original', 'g')],
    ex: [['Finding the scale factor', 'Matching sides', [["A side of 4 becomes 10. The scale factor is 10 divided by 4: 2 and a half.", E('10 ÷ 4 = 2.5', 'g')]]],
      ['Missing length', 'Multiply', [["Another side of 6 on the small shape becomes 6 times 2 and a half: 15.", E('6 × 2.5 = 15', 'g')]]],
      ['Going back', 'Divide', [["A side of 20 on the large shape is 20 divided by 2 and a half on the small shape: 8.", E('20 ÷ 2.5 = 8', 'g')]]],
      ['Similar triangles', 'Equal angles', [["If 2 triangles have the same angles, they are similar, even if they are different sizes or turned around.", V.note('Same angles → similar')]]]],
    turn: ["Your turn! A photo 6 centimetres wide is enlarged to 15 centimetres wide. Its height was 4. What is the new height? Pause and try it.", E('4 × 15 ÷ 6'), "The scale factor is 2.5, so 10 centimetres.", E('10 cm', 'g')],
    rec: ["Similar shapes have equal angles and sides in the same ratio. Find the scale factor from matching sides, multiply to enlarge, divide to reduce.", ['Equal angles', 'Sides in the same ratio', 'k = new ÷ original', '× k or ÷ k']],
    deep: ['A scale factor less than 1 makes a shape smaller.', 'Match corresponding sides carefully, especially when 1 shape is rotated.']
  });

  LS('Enlargement', 'how to enlarge a shape from a centre of enlargement by a scale factor.', {
    intro: ['Enlargement', 'Scale factor and centre', "An enlargement changes a shape's size. Every length is multiplied by the scale factor, measured from a centre of enlargement.", E('distance from centre × k', 'g')],
    ex: [['Scale factor 2', 'From the origin', [["A corner at 2, 1 moves to 4, 2: twice as far from the origin.", E('(2, 1) → (4, 2)', 'g')]]],
      ['Scale factor ½', 'Smaller', [["A scale factor of a half moves each point halfway to the centre, making the shape smaller.", E('(6, 4) → (3, 2)', 'g')]]],
      ['Another centre', 'Count from the centre', [["Centre 1, 1, scale factor 3. The point 2, 2 is 1 across and 1 up from the centre, so it moves 3 across and 3 up: 4, 4.", E('(2, 2) → (4, 4)', 'g')]]],
      ['Finding the centre', 'Ray lines', [["Join each corner to its image and extend the lines. They meet at the centre of enlargement.", V.note('Rays meet at the centre')]]]],
    turn: ["Your turn! Enlarge the point 3, 2 by scale factor 3 from the origin. Pause and try it.", E('(3, 2) × 3'), "Nine, six.", E('(9, 6)', 'g')],
    rec: ["Multiply each point's distance from the centre by the scale factor. Scale factors bigger than 1 enlarge, between 0 and 1 shrink. Rays find the centre.", ['Measure from the centre', 'Multiply distances by k', 'k > 1 bigger, k < 1 smaller', 'Rays meet at the centre']],
    deep: ['An enlargement keeps angles the same, so the image is similar to the original.', 'Measure from the centre, not from the shape.']
  });

  /* ---------- 832 ---------- */
  LS('Scatter graphs', 'how to draw scatter graphs, describe correlation and use a line of best fit.', {
    intro: ['Scatter graphs', 'Is there a link?', "A scatter graph plots pairs of data, like hours revised and test score, to see if there is a link, called correlation.", V.cards(['Positive', 'Negative', 'None'], ['g', 'b', 'p'])],
    ex: [['Positive correlation', 'Both go up', [["As revision hours increase, scores tend to increase. The points slope upwards.", V.note('Positive: up together')]]],
      ['Negative correlation', 'One goes down', [["As a car's age increases, its value tends to go down. The points slope downwards.", V.note('Negative: 1 up, 1 down')]]],
      ['Line of best fit', 'Estimating', [["Draw a straight line through the middle of the points. Use it to estimate: if 8 hours fits a score of 70, a student revising 8 hours might score about 70.", E('8 h → ≈ 70%', 'g')]]],
      ['Outliers', 'Points that don’t fit', [["A point far from the pattern is an outlier. Ignore it when drawing the line of best fit.", V.note('Outlier: far from the rest')]]]],
    turn: ["Your turn! Ice cream sales go up as temperature goes up. What type of correlation is that? Pause and think.", E('?'), "Positive correlation.", E('positive', 'g')],
    rec: ["Scatter graphs show whether 2 sets of data are linked. Describe the correlation, draw a line of best fit, and use it to estimate within the data range.", ['Plot pairs', 'Positive, negative or none', 'Line of best fit', 'Estimate within the range']],
    deep: ['Correlation does not prove one thing causes the other.', 'Estimates outside the range of the data can be unreliable.']
  });

  LS('Tree diagrams', 'how to use tree diagrams to find probabilities of combined events.', {
    intro: ['Tree diagrams', 'Two events', "A tree diagram shows all outcomes of 2 or more events. Each branch has a probability.", E('Multiply along, add between', 'g')],
    ex: [['Two coin flips', 'Branches', [["Each flip has 2 branches: heads and tails, each a half. 2 flips give 4 paths.", V.tbl([['H then H', '¼'], ['H then T', '¼'], ['T then H', '¼'], ['T then T', '¼']], ['Path', 'Probability'])]]],
      ['Multiply along', 'One path', [["The probability of rain and then rain, if each day has a chance of 0.3, is 0.3 times 0.3: 0.09.", E('0.3 × 0.3 = 0.09', 'g')]]],
      ['Add between', 'More than one path', [["Rain on exactly one of 2 days: 0.3 times 0.7, plus 0.7 times 0.3: 0.42.", E('0.21 + 0.21 = 0.42', 'g')]]],
      ['Without replacement', 'Probabilities change', [["A bag has 3 red and 2 blue. Take 1, don't put it back. Red then red: 3 fifths times 2 quarters: 3 tenths.", E('3/5 × 2/4 = 3/10', 'g')]]]],
    turn: ["Your turn! A spinner lands on green with probability 0.4. Spin twice. What is the probability of 2 greens? Pause and try it.", E('0.4 × 0.4'), "Zero point one six.", E('0.16', 'g')],
    rec: ["Draw branches for each outcome with probabilities that add to 1. Multiply along a path, add between paths. Change the second probabilities if there is no replacement.", ['Branches add to 1', 'Multiply along', 'Add between paths', 'No replacement: probabilities change']],
    deep: ['Multiplying along branches works because each event is a fraction of the one before.', 'Check all the final probabilities add up to 1.']
  });

  LS('Quartiles and probability', 'how to find quartiles and the interquartile range, and connect data with probability.', {
    intro: ['Quartiles', 'Splitting data into four', "Quartiles split ordered data into 4 equal parts. The median is the middle; the lower and upper quartiles are the middles of each half.", V.cards(['Q1 lower', 'Q2 median', 'Q3 upper'], ['b', 'p', 'g'])],
    ex: [['Finding quartiles', '3, 5, 7, 8, 10, 12, 15', [["The median is 8. The lower half is 3, 5, 7: Q1 is 5. The upper half is 10, 12, 15: Q3 is 12.", E('Q1 = 5 · Q2 = 8 · Q3 = 12', 'g')]]],
      ['Interquartile range', 'The middle half', [["The interquartile range is Q3 minus Q1: 12 take away 5 is 7. It measures the spread of the middle half and ignores extreme values.", E('IQR = 12 − 5 = 7', 'g')]]],
      ['Data and probability', 'Relative frequency', [["If 18 of 60 days were rainy, the estimated probability of rain is 18 sixtieths: 0.3.", E('18 ÷ 60 = 0.3', 'g')]]]],
    turn: ["Your turn! Q1 is 20 and Q3 is 35. What is the interquartile range? Pause and try it.", E('35 − 20'), "Fifteen.", E('15', 'g')],
    rec: ["Order the data, find the median, then the middle of each half for the quartiles. The interquartile range is Q3 minus Q1. Relative frequency estimates probability.", ['Order the data', 'Median, then each half', 'IQR = Q3 − Q1', 'Relative frequency ≈ probability']],
    deep: ['The IQR isn’t affected by outliers, so it is often a fairer measure of spread than the range.', 'Always order the data first.']
  });

  /* ---------- 833 ---------- */
  LS('Rotation on a grid', 'how to rotate shapes on a grid about a centre by 90° or 180°.', {
    intro: ['Rotation', 'Turning about a point', "A rotation turns a shape about a centre by an angle in a direction. The shape stays the same size.", V.note('Centre, angle, direction')],
    ex: [['90° clockwise about the origin', 'A rule', [["Rotating 90 degrees clockwise about the origin sends x, y to y, negative x. 3, 1 goes to 1, negative 3.", E('(3, 1) → (1, −3)', 'g')]]],
      ['180° about the origin', 'Both signs change', [["A half turn sends x, y to negative x, negative y. 2, 5 goes to negative 2, negative 5.", E('(2, 5) → (−2, −5)', 'g')]]],
      ['Using tracing paper', 'Any centre', [["Trace the shape, hold the centre with a pencil, turn the paper, and mark the new position.", V.note('Trace, pin, turn')]]],
      ['Describing a rotation', 'Full description', [["To describe a rotation, give all 3: centre, angle and direction, like 90 degrees anticlockwise about 1, 2.", E('90° anticlockwise about (1, 2)', 'g')]]]],
    turn: ["Your turn! Rotate the point 4, negative 1 by 180 degrees about the origin. Pause and try it.", E('(4, −1)'), "Both signs change: negative 4, 1.", E('(−4, 1)', 'g')],
    rec: ["Rotate about a centre by an angle in a direction. For half turns about the origin, both coordinates change sign. Describe rotations fully.", ['Centre', 'Angle', 'Direction', '180°: both signs change']],
    deep: ['A rotation keeps every point the same distance from the centre.', 'A 90° clockwise turn is the same as a 270° anticlockwise turn.']
  });

  LS('Views of solids', 'how to draw plans and elevations of solids made from cubes.', {
    intro: ['Three views', 'Plan, front, side', "To describe a 3D solid on paper, we draw it from 3 directions: above, front and side.", cubes([[3, 2, 1], [1, 1, 0]])],
    ex: [['The plan', 'From above', [["The plan shows each column of cubes as 1 square, wherever there is at least 1 cube.", V.note('Plan: the footprint')]]],
      ['Front elevation', 'From the front', [["Look from the front. Each column in the view is as tall as its tallest stack.", V.note('Front: tallest in each column')]]],
      ['Side elevation', 'From the side', [["Look from the side. Again, each column shows its tallest stack in that direction.", V.note('Side: tallest from the side')]]],
      ['Counting cubes', 'From views', [["From a plan with numbers showing the height of each stack, add the numbers to count the cubes.", E('3 + 2 + 1 + 1 + 1 = 8 cubes', 'g')]]]],
    turn: ["Your turn! A plan shows 4 squares, with heights 2, 1, 3 and 1. How many cubes? Pause and try it.", E('2 + 1 + 3 + 1'), "Seven cubes.", E('7', 'g')],
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
