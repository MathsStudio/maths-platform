(function () {
  var BT = window.BT; if (!BT || !BT.L || !BT.sv || !BT.lk) return;
  var L = BT.L, V = BT.sv, E = L.E, S = L.st, SC = L.SC,
    g = function (t) { return E(t, 'g'); }, r = function (t) { return E(t, 'r'); };
  function N(title, goal, scenes) { L.full(title, scenes); return L.ep(title, goal, []); }

  N('How do you expand brackets, including negatives?', 'how to multiply every term inside a bracket and handle minus signs.', [
    SC('Brackets', 'Start with the basics', [
      S("A bracket groups terms together. The number outside tells us to multiply everything inside. Three bracket x plus four means three times x, and three times four. We say we expand the bracket.", E('3(x + 4)', 'b')),
      S("The rule is simple. Multiply the outside by every term inside, one at a time.", V.rule('Outside × every term inside.'))
    ]),
    SC('Positive', 'Example 1: 3(x + 4)', [
      S("Three times x is three x. Three times four is twelve. So three bracket x plus four equals three x plus twelve.", E('3(x + 4)') + g('= 3x + 12'))
    ]),
    SC('With a letter', 'Example 2: 2x(x + 5)', [
      S("Two x times x is two x squared. Two x times five is ten x. So the answer is two x squared plus ten x.", E('2x(x + 5)') + g('= 2x² + 10x'))
    ]),
    SC('Subtraction', 'Example 3: 4(x − 3)', [
      S("Four times x is four x. Four times minus three is minus twelve. The minus sign stays with the three.", E('4(x − 3)') + g('= 4x − 12'))
    ]),
    SC('A negative outside', 'Example 4: −2(x + 6)', [
      S("Now the number outside is negative. Minus two times x is minus two x. Minus two times plus six is minus twelve. Remember, a negative times a positive is negative.", E('−2(x + 6)') + g('= −2x − 12'))
    ]),
    SC('Negative times negative', 'Example 5: −3(x − 5)', [
      S("Minus three times x is minus three x. Minus three times minus five is plus fifteen, because two negatives make a positive.", E('−3(x − 5)') + g('= −3x + 15')),
      S("This is the step where most mistakes happen. Take your time with the signs.", V.rule('− × − = +'))
    ]),
    SC('Expand and simplify', 'Example 6: collecting terms', [
      S("Expand and simplify two bracket x plus three, plus four bracket x minus one. First expand. Two x plus six, plus four x minus four. Now collect like terms. Six x plus two.", E('2(x + 3) + 4(x − 1)') + E('= 2x + 6 + 4x − 4') + g('= 6x + 2'))
    ]),
    SC('A minus in front', 'Example 7: subtracting a bracket', [
      S("Simplify five x plus six, minus bracket two x plus one. The minus in front multiplies the whole bracket by minus one. So minus two x and minus one. Five x minus two x is three x. Six minus one is five.", E('5x + 6 − (2x + 1)') + E('= 5x + 6 − 2x − 1') + g('= 3x + 5'))
    ]),
    SC('Watch out!', 'Three common mistakes', [
      S("Mistake one: multiplying only the first term. Three bracket x plus four is not three x plus four.", r('3x + 4  ✗') + g('3x + 12  ✓')),
      S("Mistake two: getting signs wrong with a negative outside.", r('−2(x + 6) = −2x + 12  ✗') + g('= −2x − 12  ✓')),
      S("Mistake three: a minus in front of a bracket only changing the first sign.", V.rule('Change every sign.'))
    ]),
    SC('In real life', 'Shopping', [
      S("Three friends each buy a ticket costing x pounds and a drink costing four pounds. The total is three bracket x plus four. Expanding gives three x plus twelve, the tickets and all the drinks.", g('3(x + 4) = 3x + 12'))
    ]),
    L.turn("Your turn! Number one. Expand five bracket x plus two. Pause and try it.", E('5(x + 2)'), "Five x plus ten.", g('5x + 10')),
    L.turn("Your turn! Number two. Expand minus four bracket x minus three. Pause and try it.", E('−4(x − 3)'), "Minus four x, plus twelve.", g('−4x + 12')),
    L.turn("Your turn! Number three. Expand and simplify three bracket x plus one, minus bracket x plus five. Pause and try it.", E('3(x + 1) − (x + 5)'), "Three x plus three, minus x minus five. Two x minus two.", g('2x − 2')),
    L.rec('How do you expand brackets, including negatives?', "Multiply the number outside by every term inside the bracket. Take care with signs. A negative times a negative is positive. A minus in front of a bracket changes every sign inside. After expanding, collect like terms.", ['Multiply every term', 'Watch the signs', '− × − = +', 'Collect like terms'])
  ]);

  N('How do you expand two brackets?', 'how to multiply two brackets, using FOIL or a grid.', [
    SC('Two brackets', 'Start with the basics', [
      S("Now we multiply two brackets together. For example, x plus two, times x plus three. Every term in the first bracket must multiply every term in the second.", E('(x + 2)(x + 3)', 'b')),
      S("There are four multiplications. A handy memory aid is FOIL. First, Outside, Inside, Last.", V.list(['First × First', 'Outside × Outside', 'Inside × Inside', 'Last × Last']))
    ]),
    SC('FOIL', 'Example 1: (x + 2)(x + 3)', [
      S("First, x times x is x squared. Outside, x times three is three x. Inside, two times x is two x. Last, two times three is six.", E('x² + 3x + 2x + 6')),
      S("Collect the middle terms. Three x plus two x is five x. The answer is x squared plus five x plus six.", g('x² + 5x + 6'))
    ]),
    SC('A grid', 'Example 2: the same in a grid', [
      S("A grid does the same job. Write one bracket across the top and the other down the side. Multiply each pair. Then add up everything inside.", V.tbl([['x', 'x²', '3x'], ['2', '2x', '6']], ['×', 'x', '3'])),
      S("Same answer. Use whichever you prefer, but be consistent.", g('x² + 5x + 6'))
    ]),
    SC('With a minus', 'Example 3: (x − 4)(x + 5)', [
      S("First, x squared. Outside, five x. Inside, minus four x. Last, minus twenty. Five x minus four x is x. So x squared plus x minus twenty.", E('x² + 5x − 4x − 20') + g('= x² + x − 20'))
    ]),
    SC('Two minuses', 'Example 4: (x − 3)(x − 2)', [
      S("First, x squared. Outside, minus two x. Inside, minus three x. Last, minus three times minus two, which is plus six. Collect. Minus five x. So x squared minus five x plus six.", E('x² − 2x − 3x + 6') + g('= x² − 5x + 6'))
    ]),
    SC('Squaring a bracket', 'Example 5: (x + 4)²', [
      S("A squared bracket means the bracket times itself. Write it out. x plus four, times x plus four. First, x squared. Outside and inside, four x each, eight x. Last, sixteen. So x squared plus eight x plus sixteen.", E('(x + 4)(x + 4)') + g('= x² + 8x + 16')),
      S("Notice the middle is eight x, not zero. It is not just x squared plus sixteen.", r('x² + 16  ✗'))
    ]),
    SC('With a number in front', 'Example 6: (2x + 1)(x + 3)', [
      S("First, two x squared. Outside, six x. Inside, one x. Last, three. Seven x in the middle. So two x squared plus seven x plus three.", E('2x² + 6x + x + 3') + g('= 2x² + 7x + 3'))
    ]),
    SC('Watch out!', 'Three common mistakes', [
      S("Mistake one: squaring each term. x plus four squared is not x squared plus sixteen.", r('(x + 4)² = x² + 16  ✗') + g('= x² + 8x + 16  ✓')),
      S("Mistake two: forgetting one of the four products.", V.rule('Four products, always.')),
      S("Mistake three: sign errors, especially minus times minus.", V.rule('Check each sign.'))
    ]),
    SC('In real life', 'Areas', [
      S("A rectangular garden is x plus two metres by x plus three metres. Its area is the product of the two. Expanding gives x squared plus five x plus six square metres.", g('Area = x² + 5x + 6'))
    ]),
    L.turn("Your turn! Number one. Expand x plus one, times x plus six. Pause and try it.", E('(x + 1)(x + 6)'), "x squared plus seven x plus six.", g('x² + 7x + 6')),
    L.turn("Your turn! Number two. Expand x minus five, times x plus two. Pause and try it.", E('(x − 5)(x + 2)'), "x squared minus three x minus ten.", g('x² − 3x − 10')),
    L.turn("Your turn! Number three. Expand x plus three, all squared. Pause and try it.", E('(x + 3)²'), "x squared plus six x plus nine.", g('x² + 6x + 9')),
    L.rec('How do you expand two brackets?', "Multiply every term in the first bracket by every term in the second. Use FOIL, or a grid. Then collect like terms. A squared bracket means the bracket times itself, so x plus four squared is x squared plus eight x plus sixteen.", ['Four products', 'FOIL or grid', 'Collect middle terms', '(x + a)² = x² + 2ax + a²'])
  ]);

  N('How do you factorise fully, including by taking out common factors?', 'how to take out the highest common factor from an expression.', [
    SC('Factorising', 'Start with the basics', [
      S("Factorising is the reverse of expanding. Expanding removes brackets. Factorising puts them back. We look for something that all the terms share, and take it outside.", V.cols([V.card('Expand: remove brackets', 'b', true), V.card('Factorise: add brackets', 'g', true)], 2)),
      S("That shared thing is called a common factor.", V.rule('Find what all terms share.'))
    ]),
    SC('Numbers', 'Example 1: 6x + 12', [
      S("Six and twelve both divide by six. Take six outside. Six x divided by six is x. Twelve divided by six is two. So six bracket x plus two.", E('6x + 12') + g('= 6(x + 2)')),
      S("Check by expanding. Six x plus twelve. Correct.", V.rule('Check by expanding.'))
    ]),
    SC('Letters', 'Example 2: x² + 5x', [
      S("Both terms have an x. Take x outside. x squared divided by x is x. Five x divided by x is five. So x bracket x plus five.", E('x² + 5x') + g('= x(x + 5)'))
    ]),
    SC('Fully', 'Example 3: 6x² + 9x', [
      S("Factorise fully. Six and nine share three. The terms also share x. So the highest common factor is three x. Six x squared divided by three x is two x. Nine x divided by three x is three.", E('6x² + 9x') + g('= 3x(2x + 3)')),
      S("Fully means we must take out the highest common factor, not just part of it.", r('3(2x² + 3x)  ✗ not fully') + g('3x(2x + 3)  ✓'))
    ]),
    SC('Three terms', 'Example 4: 4x² − 8x + 12', [
      S("Four, eight and twelve share four. There is no x in twelve, so we cannot take out x. Take out four. x squared minus two x plus three.", E('4x² − 8x + 12') + g('= 4(x² − 2x + 3)'))
    ]),
    SC('Negative terms', 'Example 5: 10y − 15', [
      S("Ten and fifteen share five. Ten y divided by five is two y. Fifteen divided by five is three. So five bracket two y minus three.", E('10y − 15') + g('= 5(2y − 3)'))
    ]),
    SC('Difference of two squares', 'Example 6: x² − 25', [
      S("There is a special pattern. A square minus a square factorises into two brackets. x squared minus twenty-five is x squared minus five squared. So x minus five, times x plus five.", E('x² − 25') + g('= (x − 5)(x + 5)'))
    ]),
    SC('Watch out!', 'Three common mistakes', [
      S("Mistake one: not taking out the highest common factor.", V.rule('Highest common factor.')),
      S("Mistake two: forgetting the one. Factorising x squared plus x gives x bracket x plus one.", r('x(x)  ✗') + g('x(x + 1)  ✓')),
      S("Mistake three: not checking. Always expand your answer to see if you get back to the start.", V.rule('Expand to check.'))
    ]),
    SC('In real life', 'Splitting a bill', [
      S("A bill is six x plus twelve pounds. Written as six bracket x plus two, it shows that six people each pay x plus two.", g('6(x + 2)'))
    ]),
    L.turn("Your turn! Number one. Factorise eight x plus twelve. Pause and try it.", E('8x + 12'), "Four bracket two x plus three.", g('4(2x + 3)')),
    L.turn("Your turn! Number two. Factorise x squared minus seven x. Pause and try it.", E('x² − 7x'), "x bracket x minus seven.", g('x(x − 7)')),
    L.turn("Your turn! Number three. Factorise fully ten x squared plus fifteen x. Pause and try it.", E('10x² + 15x'), "Five x bracket two x plus three.", g('5x(2x + 3)')),
    L.rec('How do you factorise fully?', "Factorising is the reverse of expanding. Find the highest common factor of all the terms, numbers and letters, and take it outside the bracket. Divide each term by it. Check by expanding. A square minus a square factorises into two brackets.", ['Find the HCF', 'Divide each term', 'Check by expanding', 'a² − b² = (a − b)(a + b)'])
  ]);

  N('How do you find the highest common factor and the lowest common multiple?', 'how to find HCF and LCM using prime factors.', [
    SC('Factors and multiples', 'Start with the basics', [
      S("A factor divides exactly into a number. The factors of twelve are one, two, three, four, six and twelve. A multiple is in the times table. Multiples of twelve are twelve, twenty-four, thirty-six, and so on.", V.cols([V.card('Factors: go into it', 'b', true), V.card('Multiples: times table', 'g', true)], 2))
    ]),
    SC('HCF', 'Example 1: the highest common factor of 12 and 18', [
      S("The highest common factor is the biggest number that divides into both. Factors of twelve: one, two, three, four, six, twelve. Factors of eighteen: one, two, three, six, nine, eighteen. The biggest in both lists is six.", E('HCF(12, 18) = 6', 'g'))
    ]),
    SC('LCM', 'Example 2: the lowest common multiple of 4 and 6', [
      S("The lowest common multiple is the smallest number in both times tables. Multiples of four: four, eight, twelve, sixteen. Multiples of six: six, twelve, eighteen. The first match is twelve.", E('LCM(4, 6) = 12', 'g'))
    ]),
    SC('Prime factors', 'Example 3: a better method', [
      S("For bigger numbers, use prime factors. Write each number as a product of primes. Twelve is two times two times three. Eighteen is two times three times three.", E('12 = 2 × 2 × 3') + E('18 = 2 × 3 × 3'))
    ]),
    SC('HCF from primes', 'Example 4: multiply the shared primes', [
      S("For the highest common factor, take the primes that are in both. Both have a two. Both have a three. Multiply. Two times three is six.", g('HCF = 2 × 3 = 6'))
    ]),
    SC('LCM from primes', 'Example 5: take the most of each', [
      S("For the lowest common multiple, take the most times each prime appears. Two appears twice in twelve. Three appears twice in eighteen. So two times two times three times three. Thirty-six.", g('LCM = 2 × 2 × 3 × 3 = 36'))
    ]),
    SC('Problems', 'Example 6: buses', [
      S("One bus comes every twelve minutes and another every eighteen. They leave together at nine o'clock. When do they next leave together? The lowest common multiple of twelve and eighteen is thirty-six. Thirty-six minutes later, at nine thirty-six.", g('9:36'))
    ]),
    SC('Sharing', 'Example 7: tiles', [
      S("A room is twelve metres by eighteen metres. What is the biggest square tile that fits exactly? That is the highest common factor. Six metres.", g('6 m'))
    ]),
    SC('Watch out!', 'Three common mistakes', [
      S("Mistake one: mixing up HCF and LCM. HCF is never bigger than the smaller number. LCM is never smaller than the bigger number.", V.rule('HCF small. LCM big.')),
      S("Mistake two: just multiplying the two numbers. That gives a common multiple, but not always the lowest.", V.rule('Not always the lowest.')),
      S("Mistake three: missing a prime when using prime factors. Write them all out.", V.rule('List all the primes.'))
    ]),
    L.turn("Your turn! Number one. Find the HCF of eight and twelve. Pause and try it.", E('HCF(8, 12)'), "Four.", g('4')),
    L.turn("Your turn! Number two. Find the LCM of six and eight. Pause and try it.", E('LCM(6, 8)'), "Twenty-four.", g('24')),
    L.turn("Your turn! Number three. Two lights flash every ten seconds and every fifteen seconds. When do they flash together? Pause and try it.", E('LCM(10, 15)'), "Thirty seconds.", g('30 s')),
    L.rec('How do you find the HCF and LCM?', "The highest common factor is the biggest number that divides both. The lowest common multiple is the smallest number in both times tables. Write each number as a product of primes. For HCF, multiply the primes they share. For LCM, take the most of each prime.", ['HCF: shared primes', 'LCM: most of each prime', 'HCF ≤ smaller number', 'LCM ≥ bigger number'])
  ]);

  L.use(845, ['How do you generate a formula from a sequence?', 'How do you simplify algebraic terms?', 'How do you substitute numbers into an expression?', 'How do you expand brackets, including negatives?', 'How do you expand two brackets?', 'How do you factorise fully, including by taking out common factors?', 'Common factors and difference of two squares', 'Factorising quadratics', 'How do you find the highest common factor and the lowest common multiple?', 'How do you create and use algebraic formulae?', 'Brackets, factorising and equations']);
})();
