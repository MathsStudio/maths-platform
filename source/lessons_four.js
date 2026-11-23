/* lessons_four.js: every topic's Watch lesson has at least four questions. These lessons are added
   to the topics that had fewer, in the same format as the others: an explanation, worked examples,
   a real-life example, a question to try, a recap and a "let's go deeper" note. */
(function () {
  'use strict';
  var BT = window.BT; if (!BT || !BT.L || !BT.L.lesson || !BT.EP_BY_TOPIC) return;
  var L = BT.L, V = BT.sv, E = L.E, LS = L.lesson;
  var ADD = {};
  function add(n, ep) { (ADD[n] = ADD[n] || []).push(ep); }

  /* ---------- P5 509: mixed reasoning ---------- */
  add(509, LS('How do you work backwards to solve a problem?', 'how to start from the answer and undo each step to find the starting number.', {
    intro: ['Working backwards', 'Undo each step', "Sometimes a problem tells you the end and asks for the start. Work backwards: begin with the answer and do the opposite of each step, in reverse order.", E('+ ↔ −    × ↔ ÷', 'b')],
    ex: [['A number puzzle', 'I think of a number', [["I think of a number, add five, and get twelve. Undo adding five by taking away five. Twelve take away five is seven.", E('? + 5 = 12 → 12 − 5 = 7', 'g')]]],
      ['Two steps', 'Undo in reverse order', [["I think of a number, double it, then add three. The answer is seventeen. Undo the last step first: seventeen take away three is fourteen. Then undo doubling: fourteen halved is seven.", E('17 − 3 = 14 → 14 ÷ 2 = 7', 'g')]]],
      ['Money left', 'Start from the end', [["Ali spends four pounds on lunch and then six pounds on a book. He has five pounds left. Add the spending back on: five plus six plus four is fifteen pounds at the start.", E('£5 + £6 + £4 = £15', 'g')]]]],
    real: ['Planning a time', "To be at school at eight forty-five, and the walk takes twenty minutes, work backwards: leave at eight twenty-five. Getting ready takes thirty minutes, so get up at seven fifty-five.", E('8:45 − 20 min = 8:25 → 8:25 − 30 min = 7:55', 'g')],
    turn: ["Your turn! I think of a number, multiply it by three, then take away four. The answer is twenty. What was my number? Pause and try it.", E('? × 3 − 4 = 20'), "Undo the take away: twenty plus four is twenty-four. Undo the times three: twenty-four divided by three is eight.", E('8', 'g')],
    rec: ["To work backwards, start with the answer, do the opposite operation, and undo the steps in reverse order. Check by going forwards again.", ['Start at the end', 'Use the opposite operation', 'Undo the last step first', 'Check by going forwards']],
    deep: ['Every step has an opposite: adding and subtracting undo each other, and so do multiplying and dividing.', 'Undoing the steps in the wrong order gives the wrong start: always undo the last step first.']
  }));
  add(509, LS('How do you spot and use a pattern to solve a problem?', 'how to find a pattern in a problem, continue it, and use it to answer the question.', {
    intro: ['Spotting patterns', 'Look for what repeats or grows', "Many problems hide a pattern. Write the first few cases in a table, see how they change, then continue the pattern instead of counting everything.", E('1, 3, 5, 7, … (+2 each time)', 'b')],
    ex: [['Growing squares', 'Matchsticks', [["One square uses four matchsticks. Two squares in a row use seven. Three squares use ten. Each new square adds three matchsticks.", E('4, 7, 10, 13, …', 'g')]]],
      ['Continue it', 'How many for 6 squares?', [["Keep adding three: four squares thirteen, five squares sixteen, six squares nineteen matchsticks.", E('13 → 16 → 19', 'g')]]],
      ['Handshakes', 'Count in a table', [["Two people make one handshake. Three people make three. Four people make six. The extra handshakes go up by one more each time: plus two, plus three, so five people make ten.", E('1, 3, 6, 10, …', 'g')]]]],
    real: ['Seats at tables', "One square table seats four people. Two tables pushed together seat six. Each extra table adds two seats, so five tables in a row seat twelve.", E('4, 6, 8, 10, 12', 'g')],
    turn: ["Your turn! A pattern goes three, seven, eleven, fifteen. What is the next number? Pause and try it.", E('3, 7, 11, 15, ?'), "It goes up by four each time, so the next number is nineteen.", E('19', 'g')],
    rec: ["Write the first cases in a table, find how they change, then continue the pattern to answer the question.", ['Try small cases first', 'Put them in a table', 'Find the change', 'Continue the pattern']],
    deep: ['A table makes a pattern easier to see than a list of drawings.', 'Check the pattern works for every case you have, not just the first two.']
  }));

  /* ---------- P5 504: decimals and percentages ---------- */
  add(504, LS('How do you change between fractions, decimals and percentages?', 'how one amount can be written as a fraction, a decimal and a percentage.', {
    intro: ['Three ways to write it', 'Out of one hundred', "Fractions, decimals and percentages are three ways to write the same amount. Per cent means out of one hundred, so fifty per cent is fifty hundredths: one half.", E('½ = 0.5 = 50%', 'b')],
    ex: [['Percentage to decimal', 'Divide by 100', [["Twenty-five per cent is twenty-five hundredths. As a decimal that is zero point two five.", E('25% = 25/100 = 0.25', 'g')]]],
      ['Fraction to percentage', 'Make it out of 100', [["Three tenths: multiply top and bottom by ten to get thirty hundredths. That is thirty per cent.", E('3/10 = 30/100 = 30%', 'g')]]],
      ['Decimal to fraction', 'Read the place value', [["Zero point seven five is seventy-five hundredths. That is the same as three quarters.", E('0.75 = 75/100 = ¾', 'g')]]]],
    real: ['Sale signs', "A sign says a quarter off. That is the same as twenty-five per cent off, or zero point two five of the price.", E('¼ off = 25% off', 'g')],
    turn: ["Your turn! Write one fifth as a decimal and as a percentage. Pause and try it.", E('1/5 = ? = ?'), "One fifth is two tenths: zero point two, or twenty per cent.", E('1/5 = 0.2 = 20%', 'g')],
    rec: ["Per cent means out of one hundred. Change a fraction to hundredths to find the percentage, and read a decimal's place value to find the fraction.", ['% means out of 100', '½ = 0.5 = 50%', '¼ = 0.25 = 25%', '1/10 = 0.1 = 10%']],
    deep: ['Learning the key facts, like a half, a quarter and a tenth, lets you change most amounts quickly.', '0.5 is fifty per cent, not five per cent: the 5 is in the tenths place.']
  }));

  /* ---------- P5 506: patterns and algebra ---------- */
  add(506, LS('How do you find and use the rule for a pattern?', 'how to find the rule that makes a pattern and use it to find later numbers.', {
    intro: ['The rule', 'What happens each time', "A pattern follows a rule. Look at how each number changes to the next. The rule might be add, take away, multiply or something else.", E('5, 10, 15, 20 → add 5', 'b')],
    ex: [['Adding', 'Find the step', [["Two, six, ten, fourteen. Each number is four more than the one before, so the rule is add four. The next number is eighteen.", E('2, 6, 10, 14, 18', 'g')]]],
      ['Taking away', 'Going down', [["Fifty, forty-three, thirty-six, twenty-nine. Each time it goes down by seven, so the rule is take away seven. Next is twenty-two.", E('50, 43, 36, 29, 22', 'g')]]],
      ['Doubling', 'Multiplying each time', [["One, two, four, eight, sixteen. Each number is double the one before. The next number is thirty-two.", E('1, 2, 4, 8, 16, 32', 'g')]]]],
    real: ['Saving money', "Maya saves three pounds every week. After one week she has three pounds, then six, nine, twelve. The rule is add three, so after ten weeks she has thirty pounds.", E('3 × 10 = £30', 'g')],
    turn: ["Your turn! What is the rule, and what comes next: nine, fourteen, nineteen, twenty-four? Pause and try it.", E('9, 14, 19, 24, ?'), "The rule is add five, so the next number is twenty-nine.", E('add 5 → 29', 'g')],
    rec: ["Find the rule by looking at how each number changes. Say the rule, then use it to find the next numbers.", ['Look at the change', 'Say the rule', 'Check it works every time', 'Use it to continue']],
    deep: ['When you know the rule you can jump ahead: add five ten times is the same as adding fifty.', 'Some patterns are not adding: check whether the gaps change, as in doubling.']
  }));

  /* ---------- P5 508: data and chance ---------- */
  add(508, LS('How do you find the mean?', 'how to find the mean average of a set of numbers.', {
    intro: ['The mean', 'Share it out evenly', "The mean is a kind of average. Add up all the values, then share the total equally by dividing by how many values there are.", E('mean = total ÷ how many', 'b')],
    ex: [['Four numbers', 'Add, then divide', [["Find the mean of three, five, six and ten. The total is twenty-four. There are four numbers, so twenty-four divided by four is six.", E('24 ÷ 4 = 6', 'g')]]],
      ['Goals scored', 'Five matches', [["A team scores two, zero, three, one and four goals. The total is ten goals in five matches. The mean is two goals a match.", E('10 ÷ 5 = 2', 'g')]]],
      ['Check it', 'Evening out', [["Think of towers of cubes four, six and eight tall. Move cubes until they are all the same: each tower is six tall. That is the mean.", E('(4 + 6 + 8) ÷ 3 = 6', 'g')]]]],
    real: ['Reading time', "Sam reads for twenty, thirty, twenty-five and twenty-five minutes on four days. That is one hundred minutes in total, so on average twenty-five minutes a day.", E('100 ÷ 4 = 25 min', 'g')],
    turn: ["Your turn! Find the mean of seven, nine and eleven. Pause and try it.", E('7, 9, 11'), "The total is twenty-seven, and there are three numbers, so the mean is nine.", E('27 ÷ 3 = 9', 'g')],
    rec: ["To find the mean, add all the values and divide by how many values there are.", ['Add all the values', 'Count how many', 'Divide the total', 'Check it is sensible']],
    deep: ['The mean shares the total out equally, so it is always between the smallest and largest values.', 'Remember to count values of zero: they still count as values.']
  }));

  /* ---------- P5 510: factors, multiples and primes ---------- */
  add(510, LS('What are multiples and common multiples?', 'what multiples are and how to find a multiple two numbers share.', {
    intro: ['Multiples', 'The times table answers', "The multiples of a number are the answers in its times table. They go on for ever. A common multiple is a number in both lists.", E('Multiples of 4: 4, 8, 12, 16, 20, …', 'b')],
    ex: [['Listing multiples', 'Count in steps', [["The multiples of six are six, twelve, eighteen, twenty-four, thirty, and so on.", E('6, 12, 18, 24, 30', 'g')]]],
      ['Common multiples', 'In both lists', [["Multiples of three: three, six, nine, twelve. Multiples of four: four, eight, twelve. Twelve is in both, so it is a common multiple.", E('12 is a multiple of 3 and of 4', 'g')]]],
      ['Lowest common multiple', 'The first match', [["For two and five, the first number in both lists is ten. Ten is the lowest common multiple.", E('LCM of 2 and 5 = 10', 'g')]]]],
    real: ['Buses', "One bus comes every four minutes and another every six minutes. They both leave at nine o'clock. They leave together again after twelve minutes, the lowest common multiple of four and six.", E('LCM of 4 and 6 = 12 min', 'g')],
    turn: ["Your turn! What is the lowest common multiple of three and five? Pause and try it.", E('LCM of 3 and 5'), "Multiples of five: five, ten, fifteen. Fifteen is the first one that is also a multiple of three.", E('15', 'g')],
    rec: ["Multiples are the answers in a times table. A common multiple is in both lists, and the lowest common multiple is the first one.", ['Multiples = times table answers', 'They go on for ever', 'Common: in both lists', 'LCM: the first match']],
    deep: ['Multiplying two numbers always gives a common multiple, but not always the lowest: 4 × 6 = 24, but the LCM is 12.', 'Do not mix up factors and multiples: factors divide into a number, multiples are in its times table.']
  }));

  /* ---------- P6 11: ratio and proportion ---------- */
  add(11, LS('How do you use unit prices to find the best buy?', 'how to compare offers by finding the cost of one item or one unit.', {
    intro: ['Best buy', 'Compare like with like', "Shops sell the same thing in different sizes. To find the better value, work out the price of one item, or of one gram or one millilitre, for each offer. The lower unit price is the best buy.", E('unit price = price ÷ amount', 'b')],
    ex: [['Packs of pens', '4 for £2 or 6 for £2.70', [["Four pens for two pounds is fifty pence each. Six pens for two pounds seventy is forty-five pence each. The pack of six is the better buy.", E('£2 ÷ 4 = 50p, £2.70 ÷ 6 = 45p', 'g')]]],
      ['Bottles of juice', '1 litre or 1.5 litres', [["One litre costs one pound twenty, so one hundred millilitres cost twelve pence. One and a half litres cost one pound sixty-five, so one hundred millilitres cost eleven pence. The big bottle is better value.", E('120p ÷ 10 = 12p, 165p ÷ 15 = 11p', 'g')]]],
      ['Same amount', 'Scale up instead', [["Three cans for one pound fifty, or nine cans for four pounds. Three lots of the small offer give nine cans for four pounds fifty, so nine for four pounds is better.", E('3 × £1.50 = £4.50 > £4', 'g')]]]],
    real: ['Shopping for a party', "Crisps come in a pack of six for one pound eighty or a pack of ten for two pounds ninety. Six for one eighty is thirty pence a bag; ten for two ninety is twenty-nine pence a bag. The pack of ten wins, just.", E('30p vs 29p a bag', 'g')],
    turn: ["Your turn! Which is better value: five apples for one pound or eight apples for one pound sixty? Pause and try it.", E('5 for £1 or 8 for £1.60'), "Five for one pound is twenty pence each. Eight for one sixty is also twenty pence each. They are the same value.", E('both 20p each', 'g')],
    rec: ["Find the price of one item or one unit for each offer and compare. The lowest unit price is the best buy.", ['Price ÷ amount', 'Use the same units', 'Lowest unit price wins', 'Or scale to the same amount']],
    deep: ['Comparing unit prices is a ratio: price to amount, made into price for one.', 'The bigger pack is not always cheaper per item: always check the unit price.']
  }));

  /* ---------- P7 712: volume, direction, scale and speed ---------- */
  add(712, LS('How do you use a scale on a map or plan?', 'how to use a scale to change between map distances and real distances.', {
    intro: ['Scale', 'Small on paper, big in real life', "A map or plan is a smaller copy of real life. The scale tells you how much smaller. One centimetre to five kilometres means each centimetre on the map is five kilometres in real life.", E('1 cm : 5 km', 'b')],
    ex: [['Map to real', 'Multiply', [["On a map with scale one centimetre to five kilometres, two towns are six centimetres apart. Six times five is thirty kilometres.", E('6 × 5 = 30 km', 'g')]]],
      ['Real to map', 'Divide', [["A road is twenty kilometres long. Twenty divided by five is four, so it is four centimetres on the map.", E('20 ÷ 5 = 4 cm', 'g')]]],
      ['Ratio scale', '1 : 50', [["A plan has scale one to fifty. A room is eight centimetres long on the plan, so in real life it is eight times fifty, four hundred centimetres: four metres.", E('8 × 50 = 400 cm = 4 m', 'g')]]]],
    real: ['Planning a walk', "On a walking map, one centimetre is half a kilometre. A route measures nine centimetres, so the walk is four and a half kilometres.", E('9 × 0.5 = 4.5 km', 'g')],
    turn: ["Your turn! The scale is one centimetre to two kilometres. Two places are seven and a half centimetres apart. How far is that? Pause and try it.", E('7.5 cm, 1 cm : 2 km'), "Seven and a half times two is fifteen kilometres.", E('15 km', 'g')],
    rec: ["Multiply by the scale to go from the map to real life, and divide to go from real life to the map. Watch the units.", ['Map → real: multiply', 'Real → map: divide', '1 : 50 means 50 times bigger', 'Check the units']],
    deep: ['A scale works like a ratio: every length is multiplied by the same number.', 'Change units before you finish: 400 cm is 4 m, not 400 m.']
  }));

  /* ---------- S1 805: ratio ---------- */
  add(805, LS('How do you scale a recipe using ratio?', 'how to use ratio and proportion to make more or less of a recipe.', {
    intro: ['Scaling a recipe', 'Keep the ratio the same', "A recipe is a ratio of ingredients. To make more or less, multiply every amount by the same scale factor so the ratio stays the same.", E('new amount = old amount × scale factor', 'b')],
    ex: [['Doubling', 'Scale factor 2', [["Pancakes for four need two hundred grams of flour and three hundred millilitres of milk. For eight people, double both: four hundred grams and six hundred millilitres.", E('200 g × 2 = 400 g, 300 ml × 2 = 600 ml', 'g')]]],
      ['Through one', 'Find one portion first', [["A recipe for six uses four hundred and fifty grams of pasta. For one person that is seventy-five grams. For four people, three hundred grams.", E('450 ÷ 6 = 75 → 75 × 4 = 300 g', 'g')]]],
      ['Scale factor', 'New ÷ old', [["A recipe for four, to be made for ten: the scale factor is ten divided by four, two point five. One hundred and twenty grams of butter becomes three hundred grams.", E('10 ÷ 4 = 2.5 → 120 × 2.5 = 300 g', 'g')]]]],
    real: ['Cooking for a party', "A smoothie for two uses three bananas. For a party of fourteen, the scale factor is seven, so you need twenty-one bananas.", E('14 ÷ 2 = 7 → 3 × 7 = 21', 'g')],
    turn: ["Your turn! A recipe for five people uses two hundred and fifty grams of rice. How much for three people? Pause and try it.", E('250 g for 5 → ? for 3'), "One person needs fifty grams, so three people need one hundred and fifty grams.", E('150 g', 'g')],
    rec: ["Find the scale factor by dividing the new number of people by the old, or find the amount for one first. Multiply every ingredient by the same factor.", ['Scale factor = new ÷ old', 'Or find one portion first', 'Multiply every ingredient', 'The ratio stays the same']],
    deep: ['Scaling a recipe is direct proportion: twice the people, twice of everything.', 'Do not add the same amount to each ingredient: it changes the ratio and the taste.']
  }));

  /* ---------- S1 809: sequences, formulae and algebra ---------- */
  add(809, LS('How do you substitute numbers into a formula?', 'how to replace the letters in a formula with numbers and work out the answer.', {
    intro: ['Substitution', 'Swap letters for numbers', "A formula uses letters for quantities. To use it, substitute: replace each letter with its number, then work it out using the order of operations.", E('P = 2l + 2w', 'b')],
    ex: [['A rectangle', 'Perimeter formula', [["P equals two l plus two w. For l equals seven and w equals three: two times seven plus two times three, fourteen plus six, twenty.", E('P = 2(7) + 2(3) = 14 + 6 = 20', 'g')]]],
      ['With a power', 'Powers first', [["A equals three x squared. For x equals four: four squared is sixteen, times three is forty-eight.", E('A = 3 × 4² = 3 × 16 = 48', 'g')]]],
      ['With a negative', 'Use brackets', [["y equals five minus two x. For x equals minus three: five minus two times minus three is five plus six, eleven.", E('y = 5 − 2(−3) = 5 + 6 = 11', 'g')]]]],
    real: ['A taxi fare', "A taxi charges C equals three plus two m pounds, where m is the miles. For eight miles: three plus sixteen is nineteen pounds.", E('C = 3 + 2(8) = £19', 'g')],
    turn: ["Your turn! Find V equals l w h when l is five, w is four and h is two. Pause and try it.", E('V = lwh, l = 5, w = 4, h = 2'), "Five times four times two is forty.", E('V = 40', 'g')],
    rec: ["Swap each letter for its number, using brackets, then follow the order of operations.", ['Write the formula', 'Substitute in brackets', 'Powers before × and ÷', '× and ÷ before + and −']],
    deep: ['Writing each number in brackets keeps the signs right, especially with negatives.', '3x² means 3 × x², not (3x)²: for x = 4 it is 48, not 144.']
  }));

  /* ---------- S1 813: spatial awareness ---------- */
  add(813, LS('How do you find lines of symmetry and rotational symmetry?', 'how to find the lines of symmetry of a shape and its order of rotational symmetry.', {
    intro: ['Symmetry', 'Two kinds', "A line of symmetry splits a shape into two halves that are mirror images. Rotational symmetry is how many times a shape looks the same in one full turn.", E('lines of symmetry · order of rotation', 'b')],
    ex: [['A rectangle', 'Fold it', [["A rectangle has two lines of symmetry, across and down the middle. The diagonals are not lines of symmetry. It looks the same twice in a full turn: order two.", E('2 lines, order 2', 'g')]]],
      ['A square', 'More symmetry', [["A square has four lines of symmetry: two through the middles of the sides and two along the diagonals. It has rotational symmetry of order four.", E('4 lines, order 4', 'g')]]],
      ['Regular shapes', 'A rule', [["A regular polygon with n sides has n lines of symmetry and rotational symmetry of order n. A regular hexagon: six and six.", E('regular hexagon: 6 lines, order 6', 'g')]]]],
    real: ['Logos and wheels', "Many car wheels have five spokes. They look the same five times in a full turn, so they have rotational symmetry of order five.", E('5 spokes → order 5', 'g')],
    turn: ["Your turn! How many lines of symmetry does an equilateral triangle have, and what is its order of rotational symmetry? Pause and try it.", E('equilateral triangle'), "It has three lines of symmetry and rotational symmetry of order three.", E('3 lines, order 3', 'g')],
    rec: ["A line of symmetry gives two mirror halves. The order of rotational symmetry is how many times the shape fits onto itself in one full turn.", ['Mirror halves = line of symmetry', 'Count fits in a full turn', 'Order 1 = no rotational symmetry', 'Regular n-gon: n and n']],
    deep: ['Tracing paper helps: trace the shape, turn it and count how many times it fits.', 'The diagonal of a rectangle is not a line of symmetry: fold along it and the halves do not match.']
  }));

  /* ---------- S2 831: similarity and enlargement ---------- */
  add(831, LS('How do area and volume change when a shape is enlarged?', 'how a scale factor changes lengths, areas and volumes.', {
    intro: ['Scale factors', 'Length, area, volume', "When a shape is enlarged by a scale factor k, every length is multiplied by k. Areas are multiplied by k squared and volumes by k cubed.", E('lengths × k, areas × k², volumes × k³', 'b')],
    ex: [['Lengths', 'Scale factor 3', [["A two centimetre side enlarged by scale factor three becomes six centimetres.", E('2 × 3 = 6 cm', 'g')]]],
      ['Area', 'Multiply by k²', [["A square of area five square centimetres is enlarged by scale factor three. The new area is five times nine, forty-five square centimetres.", E('5 × 3² = 45 cm²', 'g')]]],
      ['Volume', 'Multiply by k³', [["A box holds eight cubic centimetres. Enlarged by scale factor two, the volume is eight times eight, sixty-four cubic centimetres.", E('8 × 2³ = 64 cm³', 'g')]]]],
    real: ['Model and real', "A model car is built at a scale of one to twenty. Real paint covers twenty squared, four hundred, times the model's area.", E('area × 20² = × 400', 'g')],
    turn: ["Your turn! A shape of area twelve square centimetres is enlarged by scale factor two. What is the new area? Pause and try it.", E('12 cm², k = 2'), "Areas are multiplied by two squared, four. The new area is forty-eight square centimetres.", E('48 cm²', 'g')],
    rec: ["Lengths multiply by the scale factor, areas by its square and volumes by its cube.", ['Length × k', 'Area × k²', 'Volume × k³', 'Find k from matching lengths']],
    deep: ['Area has two dimensions, so it is scaled twice; volume has three, so it is scaled three times.', 'Doubling the sides does not double the area: it multiplies it by four.']
  }));

  /* ---------- S2 833: spatial awareness ---------- */
  add(833, LS('How do you use bearings and back bearings?', 'how to measure a bearing and find the bearing for the return journey.', {
    intro: ['Bearings', 'From north, clockwise', "A bearing is an angle measured clockwise from north, written with three figures. The back bearing is the direction for the return journey.", E('back bearing = bearing ± 180°', 'b')],
    ex: [['Reading a bearing', 'Three figures', [["East is a quarter turn clockwise from north, so it is zero nine zero degrees. South-west is two two five degrees.", E('E = 090°, SW = 225°', 'g')]]],
      ['Back bearing', 'Add 180°', [["A ship sails on a bearing of zero six zero degrees. To come back, add one hundred and eighty: two four zero degrees.", E('060° + 180° = 240°', 'g')]]],
      ['Back bearing', 'Subtract 180°', [["If the bearing is more than one hundred and eighty, subtract instead. Three hundred degrees take away one hundred and eighty is one hundred and twenty: one two zero degrees.", E('300° − 180° = 120°', 'g')]]]],
    real: ['Walking home', "A hiker walks from the car park on a bearing of one one five degrees. To get back, she walks on two nine five degrees.", E('115° + 180° = 295°', 'g')],
    turn: ["Your turn! The bearing of B from A is zero three five degrees. What is the bearing of A from B? Pause and try it.", E('035° → ?'), "Add one hundred and eighty degrees: two one five degrees.", E('215°', 'g')],
    rec: ["Measure bearings clockwise from north and write three figures. For a back bearing, add one hundred and eighty if the bearing is under one hundred and eighty, otherwise subtract.", ['Start at north', 'Turn clockwise', 'Always three figures', 'Back bearing: ± 180°']],
    deep: ['Going back means facing the opposite way, which is half a turn: 180°.', 'Write 35° as 035°: bearings always have three figures.']
  }));

  /* ---------- S3 847: straight lines ---------- */
  add(847, LS('How do you find the midpoint and length of a line segment?', 'how to find the middle of a line between two points and how long it is.', {
    intro: ['Midpoint and length', 'Two points', "The midpoint is halfway between two points: average the x-coordinates and average the y-coordinates. The length uses Pythagoras on the horizontal and vertical distances.", E('M = ((x₁ + x₂)/2, (y₁ + y₂)/2)', 'b')],
    ex: [['Midpoint', '(2, 3) and (8, 7)', [["Add the x-coordinates and halve: two plus eight is ten, half is five. Do the same for y: three plus seven is ten, half is five. The midpoint is five, five.", E('M = (5, 5)', 'g')]]],
      ['Length', '(1, 2) and (4, 6)', [["Across three, up four. By Pythagoras the length is the square root of nine plus sixteen, root twenty-five: five units.", E('√(3² + 4²) = √25 = 5', 'g')]]],
      ['With negatives', '(−2, 1) and (4, −7)', [["Midpoint: minus two plus four is two, halved one; one plus minus seven is minus six, halved minus three. Length: across six, down eight, so ten.", E('M = (1, −3), length = √(36 + 64) = 10', 'g')]]]],
    real: ['Meeting halfway', "On a grid map, two friends live at one, two and nine, eight. They meet at the midpoint, five, five.", E('((1 + 9)/2, (2 + 8)/2) = (5, 5)', 'g')],
    turn: ["Your turn! Find the midpoint of zero, four and six, ten. Pause and try it.", E('(0, 4) and (6, 10)'), "Zero plus six halved is three. Four plus ten halved is seven. The midpoint is three, seven.", E('(3, 7)', 'g')],
    rec: ["For the midpoint, average the x-coordinates and the y-coordinates. For the length, find the change in x and in y and use Pythagoras.", ['Midpoint: average x and y', 'Length: change in x and y', 'Square, add, square root', 'Check signs with negatives']],
    deep: ['The midpoint is just the mean of the two points, coordinate by coordinate.', 'Squaring makes a negative change positive, so the direction does not matter for length.']
  }));

  /* ---------- S3 848: simultaneous equations ---------- */
  add(848, LS('How do you solve simultaneous equations by substitution?', 'how to solve a pair of equations by putting one into the other.', {
    intro: ['Substitution', 'Replace one letter', "If one equation tells you what a letter equals, substitute that into the other equation. This leaves one equation with one letter to solve.", E('y = … → put it into the other', 'b')],
    ex: [['A simple pair', 'y = 2x', [["y equals two x and x plus y equals twelve. Substitute: x plus two x equals twelve, so three x is twelve and x is four. Then y is eight.", E('x + 2x = 12 → x = 4, y = 8', 'g')]]],
      ['Rearrange first', 'Make a letter the subject', [["x plus y equals ten and two x plus three y equals twenty-four. From the first, x equals ten minus y. Substitute: twenty minus two y plus three y is twenty-four, so y is four and x is six.", E('2(10 − y) + 3y = 24 → y = 4, x = 6', 'g')]]],
      ['Check', 'Both equations', [["Check x six, y four: six plus four is ten, and twelve plus twelve is twenty-four. Both work.", E('6 + 4 = 10 ✓, 12 + 12 = 24 ✓', 'g')]]]],
    real: ['Tickets', "Adult tickets cost twice a child's ticket. One adult and one child cost fifteen pounds. Let a equal two c: two c plus c is fifteen, so a child ticket is five pounds and an adult ticket ten pounds.", E('3c = 15 → c = £5, a = £10', 'g')],
    turn: ["Your turn! Solve y equals x plus three and two x plus y equals eighteen. Pause and try it.", E('y = x + 3, 2x + y = 18'), "Substitute: two x plus x plus three is eighteen, so three x is fifteen and x is five. Then y is eight.", E('x = 5, y = 8', 'g')],
    rec: ["Make one letter the subject, substitute it into the other equation, solve, then find the other letter and check both equations.", ['Get one letter on its own', 'Substitute into the other', 'Solve for one letter', 'Find the other and check']],
    deep: ['Substitution is best when one equation already says y = … or x = ….', 'Use brackets when you substitute: 2(10 − y), not 2 × 10 − y.']
  }));

  /* ---------- S3 849: Pythagoras and trigonometry ---------- */
  add(849, LS('How do you use Pythagoras to find the distance between two points?', 'how to find the straight-line distance between two coordinates.', {
    intro: ['Distance between points', 'Make a right-angled triangle', "Draw the horizontal and vertical distances between two points. They make a right-angled triangle, and the distance is the hypotenuse.", E('d = √((x₂ − x₁)² + (y₂ − y₁)²)', 'b')],
    ex: [['Simple case', '(1, 1) to (7, 9)', [["Across six, up eight. Six squared plus eight squared is thirty-six plus sixty-four, one hundred. The distance is ten.", E('√(6² + 8²) = √100 = 10', 'g')]]],
      ['Going down', '(2, 5) to (5, 1)', [["Across three, down four. Nine plus sixteen is twenty-five, so the distance is five.", E('√(3² + 4²) = 5', 'g')]]],
      ['Round the answer', '(0, 0) to (3, 5)', [["Nine plus twenty-five is thirty-four. The square root of thirty-four is about five point eight three.", E('√34 ≈ 5.83', 'g')]]]],
    real: ['As the crow flies', "On a map grid in kilometres, a drone flies from two, three to eight, eleven. Across six, up eight: ten kilometres in a straight line.", E('√(36 + 64) = 10 km', 'g')],
    turn: ["Your turn! Find the distance from one, two to four, six. Pause and try it.", E('(1, 2) to (4, 6)'), "Across three, up four, so the distance is five.", E('5', 'g')],
    rec: ["Find the change in x and the change in y, square them, add, and take the square root.", ['Change in x', 'Change in y', 'Square and add', 'Square root']],
    deep: ['The distance formula is Pythagoras written with coordinates.', 'Find the differences before squaring: (7 − 1)² = 36, not 7² − 1² = 48.']
  }));

  /* ---------- S3 850: the circle ---------- */
  add(850, LS('How do you find a missing radius or angle from an arc or sector?', 'how to work backwards from an arc length or sector area.', {
    intro: ['Working backwards', 'Arcs and sectors', "Arc length is the angle over three hundred and sixty times the circumference. Sector area is the angle over three hundred and sixty times the area. If you know the answer, rearrange to find the angle or radius.", E('arc = θ/360 × πd    sector = θ/360 × πr²', 'b')],
    ex: [['Find the angle', 'From an arc', [["A circle has radius ten centimetres, so the circumference is about sixty-two point eight. An arc is fifteen point seven centimetres, a quarter of the circle, so the angle is ninety degrees.", E('15.7 ÷ 62.8 = ¼ → θ = 90°', 'g')]]],
      ['Find the radius', 'From a sector area', [["A ninety degree sector has area seventy-eight point five square centimetres. The whole circle is four times that, three hundred and fourteen. So r squared is one hundred and r is ten centimetres.", E('πr² = 314 → r² = 100 → r = 10 cm', 'g')]]],
      ['Find the angle', 'From a sector area', [["A circle of radius six has area about one hundred and thirteen point one. A sector of thirty-seven point seven is one third, so the angle is one hundred and twenty degrees.", E('37.7 ÷ 113.1 = ⅓ → θ = 120°', 'g')]]]],
    real: ['Garden sprinkler', "A sprinkler waters a sector of radius five metres with an area of about thirty-nine point three square metres. The full circle is seventy-eight point five, so it turns through one hundred and eighty degrees.", E('39.3 ÷ 78.5 = ½ → 180°', 'g')],
    turn: ["Your turn! A sector of a circle of radius four centimetres has area about twelve point six square centimetres. What is its angle? Pause and try it.", E('r = 4, sector ≈ 12.6 cm²'), "The full circle is about fifty point three. Twelve point six is a quarter of it, so the angle is ninety degrees.", E('90°', 'g')],
    rec: ["Find what fraction of the whole circle the arc or sector is. That fraction times three hundred and sixty gives the angle; or work back from the whole area to the radius.", ['Find the whole circle', 'Find the fraction', 'Fraction × 360° = angle', 'Area ÷ π, then √ for r']],
    deep: ['An arc or sector is always a fraction of the whole circle; the angle tells you which fraction.', 'Use the diameter for circumference and the radius for area.']
  }));

  /* add each new lesson after the topic's existing questions */
  Object.keys(ADD).forEach(function (k) {
    var n = Number(k); if ((n >= 501 && n <= 513) || (n >= 401 && n <= 409)) return; /* rebuilt topics already have full lessons */
    var had = (BT.EP_BY_TOPIC[n] || []).map(function (t) { return BT.EP && BT.EP[t]; }).filter(Boolean);
    if (had.length !== (BT.EP_BY_TOPIC[n] || []).length && window.console) console.warn('lessons_four: a lesson in topic ' + n + ' was not found');
    L.use(n, had.concat(ADD[n]));
  });
})();
