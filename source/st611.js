/* st611.js: P6 Topic 11, Ratio and proportion (new). Bitesize Second level: what is a ratio,
   convert between ratios, fractions and percentages, ratio in everyday situations.
   P7 builds on it in topic 711. */
(function () {
  'use strict';
  var H = Studio.h, K = Studio.kit, Q = K.Q, rnd = H.rnd, pick = H.pick, shuffle = H.shuffle, gcd = H.gcd, V = Studio.viz, T = H.trimNum, BT = window.BT;
  var sl = BT.sl, X = BT.X, fr = BT.fr;

  function dots(a, b, ca, cb) {
    var s = '', n = a + b, per = 10, i;
    for (i = 0; i < n; i++) {
      var cx = 22 + (i % per) * 30, cy = 22 + Math.floor(i / per) * 30;
      s += '<circle cx="' + cx + '" cy="' + cy + '" r="11" style="fill:' + V.hsl(i < a ? (ca || 215) : (cb || 22)) + ';stroke:var(--fg);stroke-width:2"/>';
    }
    var rows = Math.ceil(n / per);
    return '<svg viewBox="0 0 322 ' + (rows * 30 + 14) + '" role="img" aria-label="' + a + ' blue counters and ' + b + ' orange counters" style="width:100%;max-width:340px;height:auto">' + s + '</svg>';
  }
  function two(a, b, k) { return dots(a, b) + K.cap(a + ' : ' + b); }

  var LEARN1 = [
    { title: 'What is a ratio?', v: function () { return dots(2, 3) + K.cap('2 blue to 3 orange, written 2 : 3'); },
      say: ['A ratio compares two amounts. We write it with a colon.', 'For every 2 blue counters there are 3 orange counters. The ratio of blue to orange is 2 : 3.', 'Order matters. The ratio of orange to blue is 3 : 2.'],
      real: 'A fruit drink uses 2 cups of juice for every 3 cups of lemonade. The ratio of juice to lemonade is 2 : 3.',
      goal: 'what a ratio is and how to write one.', more: ['A ratio does not tell you how many there are in total. It tells you how the amounts compare.', 'Read 2 : 3 as “2 to 3”.'], eg: ['Example 1: 1 boy for every 2 girls is the ratio 1 : 2.', 'Example 2: 4 red and 1 green is 4 : 1.', 'Example 3: A bag with 3 apples and 5 pears has apples to pears 3 : 5.'] },
    { title: 'Equivalent ratios', v: function () { return K.table([['2 : 3', 'one group of each'], ['4 : 6', 'two groups'], ['6 : 9', 'three groups'], ['10 : 15', 'five groups']], ['Ratio', 'Made by']); },
      say: ['Equivalent ratios show the same comparison. We multiply both parts by the same number.', '2 : 3 = 4 : 6 = 6 : 9. Each time we multiply both numbers by the same amount.', 'It is like making a bigger batch of the same recipe.'],
      real: 'Doubling a recipe keeps the ratio of the ingredients the same.',
      goal: 'how to make equivalent ratios.', more: ['Always multiply or divide both parts by the same number.', 'Equivalent ratios have the same simplest form.'], eg: ['Example 1: 1 : 4 = 3 : 12.', 'Example 2: 3 : 5 = 9 : 15.', 'Example 3: 2 : 7 = 8 : 28.'] },
    X('Simplifying ratios', 'Simplify the ratio 12 : 18.',
      ['Find a number that divides into both parts. The biggest is 6.', '12 ÷ 6 = 2.', '18 ÷ 6 = 3.', 'So 12 : 18 = 2 : 3 in its simplest form.'],
      ['12 : 18', '÷ 6', '2 and 3', '2 : 3'], '12 : 18 = 2 : 3',
      'A team with 12 wins and 18 losses has a win to loss ratio of 2 : 3.',
      'how to simplify a ratio.',
      ['Divide both parts by the highest common factor.', 'A ratio is simplest when the only number that divides both parts is 1.'],
      ['Example 1: 10 : 15 = 2 : 3.', 'Example 2: 8 : 20 = 2 : 5.', 'Example 3: 30 : 6 = 5 : 1.']),
    X('Ratio and fractions', 'In a class the ratio of boys to girls is 2 : 3. What fraction of the class are boys?',
      ['Add the parts to find the total number of parts: 2 + 3 = 5.', 'Boys are 2 parts out of 5, so the fraction is ' + fr(2, 5) + '.', 'Girls are 3 parts out of 5, so ' + fr(3, 5) + '.', 'Check: ' + fr(2, 5) + ' + ' + fr(3, 5) + ' = 1 whole.'],
      ['2 : 3', '2 + 3 = 5 parts', 'boys ' + fr(2, 5) + ', girls ' + fr(3, 5), 'total 1 whole'], 'Boys are ' + fr(2, 5),
      'In a pizza topping ratio of 1 : 3 for peppers to cheese, one quarter is peppers.',
      'how to turn a ratio into fractions of the whole.',
      ['The denominator is the sum of the parts, not the second number in the ratio.', 'The fractions of all the parts add up to 1.'],
      ['Example 1: 1 : 3 gives ' + fr(1, 4) + ' and ' + fr(3, 4) + '.', 'Example 2: 3 : 2 gives ' + fr(3, 5) + ' and ' + fr(2, 5) + '.', 'Example 3: 1 : 1 gives ' + fr(1, 2) + ' each.']),
    X('Ratio and percentages', 'Paint is mixed in the ratio 1 : 3 (blue : white). What percentage of the paint is blue?',
      ['Add the parts: 1 + 3 = 4.', 'Blue is ' + fr(1, 4) + ' of the paint.', fr(1, 4) + ' = 25%.', 'So 25% of the paint is blue and 75% is white.'],
      ['1 : 3', '1 + 3 = 4', fr(1, 4) + ' = 25%', '25% blue, 75% white'], '25% blue',
      'A phone battery at 25% is a quarter full, the same as a 1 : 3 ratio of full to empty.',
      'how to change a ratio into percentages.',
      ['Turn the ratio into a fraction first, then into a percentage.', 'The percentages of all the parts add up to 100%.'],
      ['Example 1: 1 : 1 is 50% each.', 'Example 2: 2 : 3 is 40% and 60%.', 'Example 3: 1 : 4 is 20% and 80%.'])
  ];
  var LEARN2 = [
    X('Sharing in a ratio', 'Share £40 in the ratio 3 : 5.',
      ['Add the parts: 3 + 5 = 8 parts.', 'Find one part: 40 ÷ 8 = £5.', 'Find each share: 3 × 5 = £15 and 5 × 5 = £25.', 'Check: 15 + 25 = 40.'],
      ['3 + 5 = 8 parts', '40 ÷ 8 = £5 a part', '£15 and £25', '15 + 25 = 40'], '£15 and £25',
      'Two friends who put in different amounts can share a prize in the ratio of what they paid.',
      'how to share an amount in a given ratio.',
      ['Add the parts, divide the total to find one part, then multiply.', 'Check that the shares add up to the total.'],
      ['Example 1: Share 20 sweets 1 : 4 gives 4 and 16.', 'Example 2: Share £60 in the ratio 2 : 3 gives £24 and £36.', 'Example 3: Share 36 cards 1 : 2 gives 12 and 24.']),
    X('Finding a missing amount', 'Paint is mixed 2 parts blue to 3 parts white. A painter uses 12 tins of blue. How many tins of white are needed?',
      ['2 parts of blue is 12 tins, so 1 part is 12 ÷ 2 = 6 tins.', 'White is 3 parts: 3 × 6 = 18.', 'The painter needs 18 tins of white.', 'Check: 12 : 18 = 2 : 3.'],
      ['2 parts = 12', '1 part = 6', '3 parts = 18', '12 : 18 = 2 : 3'], '18 tins of white',
      'Scaling a recipe up for a party uses the same idea.',
      'how to find the other amount when one amount in a ratio is known.',
      ['Find the value of one part first. Then multiply by the other part.', 'You can also multiply both parts by the same number.'],
      ['Example 1: 1 : 3 with 5 of the first needs 15 of the second.', 'Example 2: 3 : 4 with 9 of the first needs 12 of the second.', 'Example 3: 2 : 5 with 8 of the first needs 20 of the second.']),
    X('Direct proportion', '5 pens cost £3.50. How much do 8 pens cost?',
      ['Find the cost of 1 pen: 3.50 ÷ 5 = £0.70.', 'Multiply by the number of pens you want: 8 × 0.70.', '8 × 0.70 = £5.60.', 'So 8 pens cost £5.60.'],
      ['5 pens = £3.50', '1 pen = £0.70', '8 × £0.70', '£5.60'], '£5.60',
      'When you buy more of the same thing, the cost goes up in proportion.',
      'how to find the cost of any number of items from the cost of some.',
      ['This is called the unitary method: find the value of one, then scale up.', 'Twice as many items cost twice as much.'],
      ['Example 1: 3 apples cost 90p, so 7 cost 210p.', 'Example 2: 4 books cost £12, so 6 cost £18.', 'Example 3: 10 stickers cost £1.50, so 4 cost 60p.']),
    X('Recipes and scaling', 'A recipe for 4 people uses 200 g of flour. How much flour is needed for 10 people?',
      ['Find the flour for 1 person: 200 ÷ 4 = 50 g.', 'Multiply by 10 people: 10 × 50.', '10 × 50 = 500 g.', 'So 10 people need 500 g of flour.'],
      ['4 people: 200 g', '1 person: 50 g', '10 × 50', '500 g'], '500 g',
      'Cooks scale recipes up and down for different numbers of people.',
      'how to scale a recipe up or down using ratio.',
      ['Find the amount for one person, then multiply.', 'Every ingredient is scaled by the same amount.'],
      ['Example 1: 2 people need 100 g of rice, so 6 people need 300 g.', 'Example 2: 4 people need 3 eggs, so 8 people need 6 eggs.', 'Example 3: 6 people need 300 ml of milk, so 3 people need 150 ml.']),
    X('Ratio in football', 'A team scored 12 goals and let in 8 goals this season. What is the ratio of goals scored to goals let in, in its simplest form?',
      ['Write the ratio in the order of the question: 12 : 8.', 'Find the highest common factor of 12 and 8, which is 4.', '12 ÷ 4 = 3 and 8 ÷ 4 = 2.', 'The ratio is 3 : 2.'],
      ['12 : 8', '÷ 4', '3 and 2', '3 : 2'], '3 : 2',
      'Football leagues use goals scored and goals against to compare teams.',
      'how to use ratio in everyday situations like sport.',
      ['Always keep the numbers in the order the question gives.', 'Write the ratio in its simplest form.'],
      ['Example 1: 10 wins and 5 losses is 2 : 1.', 'Example 2: 9 goals and 6 goals is 3 : 2.', 'Example 3: 20 shots and 4 goals is 5 : 1.'])
  ];

  function genWriteRatio() {
    var a = rnd(2, 9), b = rnd(2, 9); while (b === a) b = rnd(2, 9);
    var it = pick([['red', 'blue', 'counters'], ['boys', 'girls', 'pupils'], ['apples', 'pears', 'pieces of fruit']]), ans = a + ' : ' + b;
    var wr = [b + ' : ' + a, a + ' : ' + (a + b), (a + b) + ' : ' + a].filter(function (v, i, r) { return v !== ans && r.indexOf(v) === i; });
    return Q({ tag: 'Writing a ratio', type: 'mc', text: 'A group has <b>' + a + ' ' + it[0] + '</b> and <b>' + b + ' ' + it[1] + '</b>. What is the ratio of ' + it[0] + ' to ' + it[1] + '?', options: shuffle(wr.slice(0, 3).concat([ans])), answer: ans, hints: ['Write the first group first.', 'Put a colon between the two numbers.'], explain: 'The ratio of ' + it[0] + ' to ' + it[1] + ' is ' + ans + '.' });
  }
  function genEquivRatio() {
    var a = rnd(1, 6), b = rnd(a + 1, 9), k = rnd(2, 6);
    return Q({ tag: 'Equivalent ratios', text: 'Complete the equivalent ratio: <b>' + a + ' : ' + b + ' = ' + a * k + ' : ?</b>', answer: String(b * k), hints: ['What was ' + a + ' multiplied by to get ' + a * k + '?', 'Multiply the second number by the same amount.'], explain: 'Multiply both by ' + k + ': ' + b + ' × ' + k + ' = ' + b * k + '.' });
  }
  function genSimplifyR() {
    var a = rnd(1, 5), b = rnd(a + 1, 8); while (gcd(a, b) !== 1) b = rnd(a + 1, 9);
    var k = rnd(2, 8), ans = a + ' : ' + b;
    var wr = [(a + 1) + ' : ' + b, a + ' : ' + (b + 1), (a * 2) + ' : ' + b, b + ' : ' + a].filter(function (v, i, r) { return v !== ans && r.indexOf(v) === i; });
    return Q({ tag: 'Simplifying', type: 'mc', text: 'Simplify the ratio <b>' + a * k + ' : ' + b * k + '</b>.', options: shuffle(wr.slice(0, 3).concat([ans])), answer: ans, hints: ['Divide both numbers by the same number.', 'Keep going until no common factor is left.'], explain: 'Divide both by ' + k + ': ' + ans + '.' });
  }
  function genShareR() {
    var a = rnd(1, 4), b = rnd(a + 1, 6), k = rnd(2, 9), tot = (a + b) * k, w = pick(['first', 'second']);
    return Q({ tag: 'Sharing in a ratio', text: 'Share <b>£' + tot + '</b> in the ratio <b>' + a + ' : ' + b + '</b>. How much is the <b>' + w + '</b> share? (£)', answer: String(w === 'first' ? a * k : b * k), hints: ['Add the parts of the ratio.', 'Find one part, then multiply by the share you need.'], explain: tot + ' ÷ ' + (a + b) + ' = ' + k + ' for one part. The shares are £' + a * k + ' and £' + b * k + '.' });
  }
  function genRatioFindR() {
    var a = rnd(1, 5), b = rnd(a + 1, 8), k = rnd(2, 9), t = pick(['paint', 'squash']);
    return Q({ tag: 'Ratio', text: 'A mix uses <b>' + a + '</b> parts ' + (t === 'paint' ? 'red' : 'juice') + ' to <b>' + b + '</b> parts ' + (t === 'paint' ? 'white paint' : 'water') + '. With <b>' + a * k + ' ml</b> of ' + (t === 'paint' ? 'red' : 'juice') + ', how many ml of ' + (t === 'paint' ? 'white paint' : 'water') + ' are needed?', answer: String(b * k), hints: ['Find how many times the first amount was multiplied.', 'Multiply the second part by the same number.'], explain: a * k + ' ÷ ' + a + ' = ' + k + ', so ' + b + ' × ' + k + ' = ' + b * k + ' ml.' });
  }
  function genUnitaryR() {
    var n1 = rnd(2, 6), u = pick([0.5, 1.5, 2, 2.5, 3, 4]), n2 = n1 + rnd(2, 5), c = Math.round(n1 * u * 100) / 100, ans = Math.round(n2 * u * 100) / 100, it = pick(['pens', 'apples', 'tickets', 'books']);
    return Q({ tag: 'Proportion', text: '<b>' + n1 + '</b> ' + it + ' cost <b>£' + c.toFixed(2) + '</b>. How much do <b>' + n2 + '</b> ' + it + ' cost? (£)', answer: T(ans), hints: ['Find the cost of one.', 'Multiply by the number you want.'], explain: '£' + c.toFixed(2) + ' ÷ ' + n1 + ' = £' + u.toFixed(2) + ' each, × ' + n2 + ' = £' + ans.toFixed(2) + '.' });
  }
  function genRecipeR() {
    var p = pick([25, 30, 40, 50, 60]), a = pick([2, 3, 4, 5]), b = pick([6, 8, 10, 12]);
    return Q({ tag: 'Scaling a recipe', text: 'A recipe for <b>' + a + '</b> people uses <b>' + p * a + ' g</b> of pasta. How much pasta for <b>' + b + '</b> people? (g)', answer: String(p * b), hints: ['Find the pasta for one person.', 'Multiply by the number of people.'], explain: p * a + ' ÷ ' + a + ' = ' + p + ' g each, × ' + b + ' = ' + p * b + ' g.' });
  }
  function genRatioFraction() {
    var a = rnd(1, 5), b = rnd(1, 6); while (b === a) b = rnd(1, 6);
    var t = a + b, ans = a + '/' + t, f = pick([['boys', 'girls'], ['red', 'blue'], ['cats', 'dogs']]);
    var wr = [b + '/' + t, a + '/' + b, a + '/' + (t + 1), (a + 1) + '/' + t].filter(function (v, i, r) { return v !== ans && r.indexOf(v) === i; });
    return Q({ tag: 'Ratio and fractions', type: 'mc', text: 'The ratio of <b>' + f[0] + '</b> to <b>' + f[1] + '</b> is <b>' + a + ' : ' + b + '</b>. What fraction are ' + f[0] + '?', options: shuffle(wr.slice(0, 3).concat([ans])), answer: ans, hints: ['Add the parts to find the total.', 'The first part goes over the total.'], explain: a + ' + ' + b + ' = ' + t + ' parts, so ' + f[0] + ' are ' + ans + '.' });
  }
  function genRatioPercent() {
    var c = pick([[1, 1, 50], [1, 3, 25], [1, 4, 20], [3, 7, 30], [2, 3, 40], [3, 2, 60], [9, 1, 90], [1, 9, 10]]);
    return Q({ tag: 'Ratio and percentages', text: 'Squash and water are mixed in the ratio <b>' + c[0] + ' : ' + c[1] + '</b>. What percentage of the drink is squash?', answer: String(c[2]), hints: ['Add the parts to find the total.', 'Write the squash part as a fraction and change it to a percentage.'], explain: c[0] + ' + ' + c[1] + ' = ' + (c[0] + c[1]) + ' parts. Squash is ' + c[0] + '/' + (c[0] + c[1]) + ' = ' + c[2] + '%.' });
  }
  function genFootballRatio() {
    var g = rnd(2, 6), k = rnd(2, 5), a = rnd(1, 5), b = rnd(1, 5); while (b === a || gcd(a, b) !== 1) b = rnd(1, 6);
    var ans = a + ' : ' + b, tp = pick(['goals scored to goals let in', 'wins to losses']);
    var wr = [b + ' : ' + a, (a * k) + ' : ' + (b * k), a + ' : ' + (b + 1)].filter(function (v, i, r) { return v !== ans && r.indexOf(v) === i; });
    return Q({ tag: 'Ratio in sport', type: 'mc', text: 'A team has a ratio of ' + tp + ' of <b>' + a * k + ' : ' + b * k + '</b>. What is this in its simplest form?', options: shuffle(wr.slice(0, 3).concat([ans])), answer: ans, hints: ['Divide both numbers by the same number.', 'Keep the order the same.'], explain: 'Divide both by ' + k + ': ' + ans + '.' });
  }
  function genDifference() {
    var a = rnd(1, 4), b = rnd(a + 1, 7), k = rnd(2, 8), d = (b - a) * k, tot = (a + b) * k;
    return Q({ tag: 'Ratio problems', text: 'Ali and Bea share sweets in the ratio <b>' + a + ' : ' + b + '</b>. Bea gets <b>' + d + '</b> more than Ali. How many sweets are there in total?', answer: String(tot), hints: ['The difference in the ratio is ' + (b - a) + ' parts. Find the value of one part.', 'Multiply one part by the total number of parts.'], explain: (b - a) + ' parts = ' + d + ', so 1 part = ' + k + '. Total parts ' + (a + b) + ', so ' + (a + b) + ' × ' + k + ' = ' + tot + '.' });
  }
  var VERBAL = [
    { text: 'Which is the <b>odd one out</b>? <b>2 : 3, 4 : 6, 6 : 9, 8 : 10</b>', options: ['2 : 3', '4 : 6', '6 : 9', '8 : 10'], answer: '8 : 10', hints: ['Simplify each ratio.', 'Three simplify to 2 : 3.'], explain: '8 : 10 simplifies to 4 : 5, the others simplify to 2 : 3.' },
    { text: 'Which drink is <b>stronger</b>: squash to water in the ratio <b>1 : 4</b> or <b>1 : 5</b>?', options: ['1 : 4', '1 : 5', 'They are the same', 'You cannot tell'], answer: '1 : 4', hints: ['Find the fraction of the drink that is squash in each.', '1 part in 5 is more than 1 part in 6.'], explain: 'In 1 : 4 squash is 1/5 of the drink. In 1 : 5 it is only 1/6, so 1 : 4 is stronger.' },
    { text: 'Which ratio is <b>equivalent</b> to <b>3 : 4</b>?', options: ['6 : 8', '4 : 3', '3 : 8', '6 : 7'], answer: '6 : 8', hints: ['Multiply both parts by the same number.', 'Try doubling.'], explain: 'Doubling both parts of 3 : 4 gives 6 : 8.' }
  ];

  (K.realStage||K.stage)({ n: 11, base: 11, year: 'P6', short: 'Ratio', title: 'Ratio and proportion', blurb: 'What a ratio is, equivalent and simplest ratios, ratio as fractions and percentages, sharing in a ratio, finding missing amounts, direct proportion, recipes and everyday ratios.',
    l1label: 'Ratio', l1tag: 'Ratio', l2label: 'Sharing and proportion', l2tag: 'Sharing and proportion',
    warm: K.warmFrom([
      function () { var a = rnd(2, 9), b = rnd(2, 9); return Q({ tag: 'Mental maths', text: 'What is <b>' + a + ' × ' + b + '</b>?', answer: String(a * b), hints: ['Use your times tables.', 'Count in ' + a + 's.'], explain: a + ' × ' + b + ' = ' + a * b + '.' }); },
      function () { var a = rnd(2, 9), k = rnd(2, 5); return Q({ tag: 'Mental maths', text: 'What is <b>' + a * k + ' ÷ ' + k + '</b>?', answer: String(a), hints: ['Think of the times table.', k + ' times what makes ' + a * k + '?'], explain: a * k + ' ÷ ' + k + ' = ' + a + '.' }); },
      function () { var a = rnd(1, 4), b = rnd(a + 1, 7); return Q({ tag: 'Mental maths', text: 'How many parts in total in the ratio <b>' + a + ' : ' + b + '</b>?', answer: String(a + b), hints: ['Add the two parts.', 'Parts are the numbers in the ratio.'], explain: a + ' + ' + b + ' = ' + (a + b) + ' parts.' }); },
      genEquivRatio, genRatioFindR
    ]),
    learn1: LEARN1, learn2: LEARN2,
    lab: BT.mixerCfg = { title: 'Ratio mixer', lead: 'Change the two amounts. Watch the counters, the simplest ratio, the fractions and the percentages.', need: 6,
      params: [{ id: 'a', label: 'Blue counters', min: 1, max: 8, val: 2 }, { id: 'b', label: 'Orange counters', min: 1, max: 8, val: 3 }],
      render: function (v) {
        var g = gcd(v.a, v.b), sa = v.a / g, sb = v.b / g, t = v.a + v.b, pa = Math.round(v.a / t * 1000) / 10;
        return { vis: dots(v.a, v.b), out: 'Ratio ' + v.a + ' : ' + v.b + (g > 1 ? ', simplest form ' + sa + ' : ' + sb : ', already in its simplest form'),
          explain: 'Total ' + t + ' counters. Blue is ' + v.a + '/' + t + ' = ' + pa + '% and orange is ' + v.b + '/' + t + ' = ' + Math.round((100 - pa) * 10) / 10 + '%.' };
      } },
    gens: [genWriteRatio, genEquivRatio, genSimplifyR, genShareR, genRatioFindR, genUnitaryR, genRecipeR, genRatioFraction, genRatioPercent, genFootballRatio, genDifference, K.verbal(VERBAL)],
    easy: [genWriteRatio, genEquivRatio, genSimplifyR, genShareR, genRecipeR], hard: [genRatioFindR, genUnitaryR, genRatioFraction, genRatioPercent, genDifference, genFootballRatio] });

  BT.add(11, 'learn3', 'Comparing ratios and scale', [
    X('Comparing ratios', 'Which squash is stronger: 1 part squash to 4 parts water, or 1 part squash to 5 parts water?',
      ['Find the fraction of the drink that is squash in each mix.', '1 : 4 has 5 parts in all, so squash is ' + fr(1, 5) + ' = 20%.', '1 : 5 has 6 parts in all, so squash is ' + fr(1, 6) + ', about 17%.', '20% is more than 17%, so 1 : 4 is the stronger squash.'],
      ['1 : 4 or 1 : 5', fr(1, 5) + ' = 20%', fr(1, 6) + ' ≈ 17%', '1 : 4 is stronger'], '1 : 4 is stronger',
      'Less water for the same squash makes a stronger drink.',
      'how to compare two ratios using fractions or percentages.',
      ['Turn both ratios into the same form, like percentages, to compare fairly.', 'Remember that the total number of parts is the sum of the parts.'],
      ['Example 1: 1 : 1 is 50% squash, which is stronger than 1 : 3 at 25%.', 'Example 2: 3 : 2 gives 60% and 2 : 1 gives about 67%.', 'Example 3: 1 : 9 gives 10% and 1 : 4 gives 20%.']),
    X('Scale on a map', 'A map scale says 1 cm : 5 km. Two towns are 4 cm apart on the map. How far apart are they in real life?',
      ['The scale says 1 cm on the map is 5 km in real life.', 'Multiply the map distance by 5: 4 × 5.', '4 × 5 = 20.', 'The towns are 20 km apart.'],
      ['1 cm : 5 km', '4 × 5', '= 20', '20 km'], '20 km',
      'Maps use a ratio called a scale so a whole country can fit on a page.',
      'how a scale is a ratio between a map and real life.',
      ['Multiply to go from the map to real life, and divide to go the other way.', 'The scale 1 : 100 means 1 cm on the drawing is 100 cm in real life.'],
      ['Example 1: 3 cm on a 1 cm : 2 km map is 6 km.', 'Example 2: 30 km on a 1 cm : 10 km map is 3 cm.', 'Example 3: 5 cm on a 1 : 100 plan is 500 cm = 5 m.']),
    X('A ratio problem with a difference', 'Ali and Bea share sweets in the ratio 3 : 5. Bea gets 12 more than Ali. How many sweets are there altogether?',
      ['Bea has 5 − 3 = 2 more parts than Ali.', '2 parts = 12 sweets, so 1 part = 6.', 'There are 3 + 5 = 8 parts altogether.', '8 × 6 = 48 sweets in total.'],
      ['5 − 3 = 2 parts', '2 parts = 12, so 1 part = 6', '3 + 5 = 8 parts', '8 × 6 = 48'], '48 sweets',
      'A bar model helps you see the difference between the shares.',
      'how to use the difference between two shares to find one part.',
      ['Draw a bar model: Ali has 3 blocks and Bea has 5 blocks.', 'The extra 2 blocks are the 12 sweets.'],
      ['Example 1: 2 : 5, difference 9, gives 1 part = 3 and total 21.', 'Example 2: 1 : 4, difference 15, gives 1 part = 5 and total 25.', 'Example 3: 3 : 4, difference 8, gives 1 part = 8 and total 56.'])
  ]);
})();
