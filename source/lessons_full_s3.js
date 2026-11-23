/* lessons_full_s3.js: fuller S3 Watch lessons: basics first, several worked examples taken slowly, common mistakes, "your turn" pauses. */
(function () {
  'use strict';
  var BT = window.BT; if (!BT || !BT.L || !BT.sv || !BT.lk) return;
  var L = BT.L, V = BT.sv, LK = BT.lk, E = L.E, S = L.st, SC = L.SC, g = function (t) { return E(t, 'g'); }, r = function (t) { return E(t, 'r'); };
  /* ---- Powers ---- */
  (function () {
    var T = 'How do you evaluate powers and express whole numbers as powers?';
    L.full(T, [
      SC('Powers', 'Start with the basics', [
        S("Imagine you want to write two times two times two times two times two. It is long. There is a short way to write it. We write two to the power five. This short way is called a power.", E('2 × 2 × 2 × 2 × 2 = 2⁵', 'g')),
        S("A power has two parts. The big number at the bottom is called the base. It is the number we multiply. The small raised number is called the index. It tells us how many times the base is written in the multiplication.", E('3⁴') + V.cols([V.card('Base: 3', 'b', true), V.card('Index: 4', 'g', true)], 2)),
        S("So three to the power four means four threes multiplied together. Three times three times three times three.", E('3⁴ = 3 × 3 × 3 × 3', 'b'))
      ]),
      SC('Evaluating powers', 'Example 1: 3⁴', [
        S("Let's work out three to the power four, one step at a time. Three times three is nine. Nine times three is twenty-seven. Twenty-seven times three is eighty-one.", E('3 × 3 = 9') + E('9 × 3 = 27') + E('27 × 3 = 81')),
        S("So three to the power four is eighty-one. Notice that we multiplied four threes, but we only did three multiplications.", g('3⁴ = 81'))
      ]),
      SC('Evaluating powers', 'Example 2: more powers', [
        S("Two to the power seven. Keep doubling. Two, four, eight, sixteen, thirty-two, sixty-four, one hundred and twenty-eight. That is seven twos.", E('2, 4, 8, 16, 32, 64, 128') + g('2⁷ = 128')),
        S("Some powers have special names. Squared means to the power two. Cubed means to the power three. Five cubed is five times five times five. That is one hundred and twenty-five.", g('5³ = 5 × 5 × 5 = 125')),
        S("Ten to the power five is ten times itself five times. Every time you multiply by ten, you add a zero. So ten to the power five is one hundred thousand.", g('10⁵ = 100,000'))
      ]),
      SC('Writing a number as a power', 'Example 3: 64', [
        S("Now the other way. Can we write sixty-four as a power? Try the base two. Two, four, eight, sixteen, thirty-two, sixty-four. That took six twos. So sixty-four is two to the power six.", E('64 = 2⁶', 'g')),
        S("But we can use other bases too. Four times four times four is sixty-four. So sixty-four is also four cubed. And eight times eight is sixty-four, so it is also eight squared. A number can have several forms.", E('64 = 2⁶ = 4³ = 8²', 'g'))
      ]),
      SC('Powers of ten', 'Place value', [
        S("Powers of ten are very useful. Ten squared is one hundred. Ten cubed is one thousand. Ten to the power six is one million. The index tells you how many zeros follow the one.", E('10² = 100') + E('10³ = 1,000') + E('10⁶ = 1,000,000'))
      ]),
      SC('Using a calculator', 'The power key', [
        S("A calculator has a power key. It might look like x to the y, or a little hat. To work out one point five to the power four, type one point five, press the power key, type four, and press equals. The answer is five point zero six two five.", g('1.5⁴ = 5.0625')),
        S("You can check this by hand. One point five squared is two point two five. And two point two five squared is five point zero six two five.", E('1.5² = 2.25') + E('2.25² = 5.0625'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: multiplying the base by the index. Two to the power seven is not two times seven. It is two multiplied by itself seven times.", r('2⁷ = 14  ✗') + g('2⁷ = 128  ✓')),
        S("Mistake two: squaring a number by doubling it. Three squared is three times three, which is nine. It is not six.", r('3² = 6  ✗') + g('3² = 9  ✓')),
        S("Mistake three: mixing up the base and the index. Two to the power three is eight. Three to the power two is nine. They are different.", E('2³ = 8') + E('3² = 9'))
      ]),
      SC('In real life', 'Doubling', [
        S("A bacterium splits in two every hour. After one hour there are two. After two hours there are four. After ten hours there are two to the power ten, which is one thousand and twenty-four bacteria. One bacterium becomes more than a thousand in just ten hours.", g('2¹⁰ = 1,024'))
      ]),
      L.turn("Your turn! Number one. Write two hundred and forty-three as a power of three. Pause and try it.", E('243 = 3^?'), "Keep multiplying by three. Three, nine, twenty-seven, eighty-one, two hundred and forty-three. That is five threes. So three to the power five.", g('243 = 3⁵')),
      L.turn("Your turn! Number two. What is four to the power three? Pause and try it.", E('4³'), "Four times four is sixteen. Sixteen times four is sixty-four.", g('4³ = 64')),
      L.turn("Your turn! Number three. Write one thousand as a power of ten. Pause and try it.", E('1,000 = 10^?'), "One thousand has three zeros after the one. So ten to the power three.", g('10³')),
      L.rec(T, "A power multiplies the base by itself as many times as the index says. To write a number as a power, keep multiplying by the base, and count. Some numbers can be written as a power in more than one way. Take care. The index counts the multiplications, it is not multiplied.", ['Base and index', 'aⁿ: a × a × … n times', 'Divide or multiply repeatedly to find n', 'Some numbers have several forms'])
    ]);
  })();

  /* ---- Prime factors ---- */
  (function () {
    var T = 'How do you write a number as a product of its prime factors?';
    L.full(T, [
      SC('Prime factors', 'Start with the basics', [
        S("First, what is a prime number? A prime number has exactly two factors: one, and itself. Two, three, five, seven, eleven and thirteen are all prime. Nine is not prime, because three goes into it.", E('2, 3, 5, 7, 11, 13, 17, 19 …', 'b')),
        S("The number one is not prime, because it only has one factor. And two is the only even prime number.", V.rule('Prime: exactly two factors.')),
        S("Here is a wonderful fact. Every whole number bigger than one can be written as a product of primes, in exactly one way. Primes are the building blocks of all numbers. A product just means a multiplication.", E('90 = 2 × 3 × 3 × 5', 'g'))
      ]),
      SC('The factor tree', 'Example 1: 90', [
        S("A factor tree is one way to find the prime factors. Start with ninety. Split it into any two factors. Nine times ten works.", E('90 = 9 × 10')),
        S("Neither nine nor ten is prime, so we keep splitting. Nine is three times three. Ten is two times five. Now three, three, two and five are all prime, so we stop.", E('9 = 3 × 3') + E('10 = 2 × 5')),
        S("So ninety is two times three times three times five. We usually write the primes in order, and use a power for repeats. Three times three is three squared.", g('90 = 2 × 3² × 5'))
      ]),
      SC('Repeated division', 'Example 2: 168', [
        S("The other method is repeated division. Divide by the smallest prime that goes in, again and again. One hundred and sixty-eight divided by two is eighty-four. Eighty-four divided by two is forty-two. Forty-two divided by two is twenty-one.", E('168 ÷ 2 = 84') + E('84 ÷ 2 = 42') + E('42 ÷ 2 = 21')),
        S("Two does not go into twenty-one, so try three. Twenty-one divided by three is seven. Seven is prime, so we stop.", E('21 ÷ 3 = 7') + E('7 is prime')),
        S("We divided by two three times, by three once, and finished with seven. So one hundred and sixty-eight is two cubed times three times seven.", g('168 = 2³ × 3 × 7')),
        S("Check it by multiplying back. Eight times three is twenty-four. Twenty-four times seven is one hundred and sixty-eight. It works.", E('8 × 3 × 7 = 168 ✓'))
      ]),
      SC('HCF from prime factors', 'Example 3: 90 and 168', [
        S("Prime factors give us a neat way to find the highest common factor. Write both numbers as products of primes. Ninety is two times three squared times five. One hundred and sixty-eight is two cubed times three times seven.", E('90 = 2 × 3² × 5') + E('168 = 2³ × 3 × 7')),
        S("The common factors are the primes that appear in both. Both have a two. Both have a three. Take the lowest power of each. One two, and one three. Multiply them. Two times three is six.", g('HCF = 2 × 3 = 6'))
      ]),
      SC('LCM from prime factors', 'Example 4: 90 and 168', [
        S("For the lowest common multiple, we use every prime that appears in either number, with the highest power of each. The highest power of two is two cubed. The highest power of three is three squared. Five and seven appear once each.", E('2³ × 3² × 5 × 7')),
        S("Multiply them. Eight times nine is seventy-two. Seventy-two times five is three hundred and sixty. Three hundred and sixty times seven is two thousand, five hundred and twenty.", g('LCM = 2,520'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: stopping before all the factors are prime. If you write ninety as nine times ten, you are not finished. Nine and ten are not prime.", r('90 = 9 × 10  ✗') + g('90 = 2 × 3² × 5  ✓')),
        S("Mistake two: thinking one is prime. It is not. It has only one factor. Never put one in a list of prime factors.", V.rule('One is not prime.')),
        S("Mistake three: forgetting to use powers. Two times two times two should be written as two cubed. It saves space, and it makes comparing easier.", E('2 × 2 × 2 × 3 = 2³ × 3', 'g'))
      ]),
      SC('In real life', 'Secret codes', [
        S("When you pay online, your details are protected by codes. These codes use the fact that it is very easy to multiply two huge primes, but very hard to find them again from the answer. Prime factors keep your messages safe.", V.note('Big primes keep messages safe'))
      ]),
      L.turn("Your turn! Number one. Write one hundred and twenty as a product of prime factors. Pause and try it.", E('120 = ?'), "One hundred and twenty divided by two is sixty, then thirty, then fifteen. Fifteen is three times five. So two cubed times three times five.", g('120 = 2³ × 3 × 5')),
      L.turn("Your turn! Number two. Write eighty-four as a product of prime factors. Pause and try it.", E('84 = ?'), "Eighty-four divided by two is forty-two, then twenty-one. Twenty-one is three times seven. So two squared times three times seven.", g('84 = 2² × 3 × 7')),
      L.turn("Your turn! Number three. Use the prime factors of ninety and one hundred and twenty to find the highest common factor. Pause and try it.", E('90 = 2 × 3² × 5') + E('120 = 2³ × 3 × 5'), "The lowest powers are two, three and five. Multiply them. Two times three times five is thirty.", g('HCF = 30')),
      L.rec(T, "A prime number has exactly two factors. Every number can be written as a product of primes in just one way. Use a factor tree or repeated division until every factor is prime. Write repeats as powers. The highest common factor uses the lowest powers of the shared primes. The lowest common multiple uses the highest powers of all the primes.", ['Factor tree or division', 'End with primes only', 'Use index form', 'HCF: shared, lowest powers', 'LCM: all, highest powers'])
    ]);
  })();

  /* ---- Percentage change ---- */
  (function () {
    var T = 'How do you calculate percentage changes?';
    L.full(T, [
      SC('Percentage change', 'Why we need it', [
        S("A shirt goes up by five pounds. Is that a big change? It depends. For a ten pound shirt it is huge. For a two hundred pound coat it is tiny. To judge the size of a change, we compare it to where we started. That gives a percentage change.", V.rule('Compare the change with the original.')),
        S("Here is the rule. Work out the change. Divide it by the original amount. Then multiply by one hundred.", E('% change = change ÷ original × 100', 'g'))
      ]),
      SC('Percentage increase', 'Example 1: £48 to £54', [
        S("A ticket goes up from forty-eight pounds to fifty-four pounds. First find the change. Fifty-four take away forty-eight is six pounds.", E('54 − 48 = 6')),
        S("Now divide the change by the original. Six divided by forty-eight is zero point one two five. Multiply by one hundred. That is twelve point five per cent. It is a twelve point five per cent increase.", g('6 ÷ 48 × 100 = 12.5%'))
      ]),
      SC('Percentage decrease', 'Example 2: 1,250 to 1,000', [
        S("The number of visitors to a museum falls from one thousand, two hundred and fifty to one thousand. The change is two hundred and fifty.", E('1,250 − 1,000 = 250')),
        S("Divide by the original, which is the bigger number this time. Two hundred and fifty divided by one thousand, two hundred and fifty is zero point two. That is twenty per cent. A twenty per cent decrease.", g('250 ÷ 1,250 × 100 = 20%'))
      ]),
      SC('Applying a change', 'Example 3: multipliers', [
        S("Now the other way round. We know the percentage, and we want the new amount. Increase three hundred and twenty by fifteen per cent. There is a quick way. The original is one hundred per cent. Add fifteen. That makes one hundred and fifteen per cent. As a decimal, one point one five.", E('100% + 15% = 115% = 1.15')),
        S("Multiply by the multiplier. Three hundred and twenty times one point one five is three hundred and sixty-eight.", g('320 × 1.15 = 368')),
        S("For a decrease, take away. One hundred per cent minus fifteen is eighty-five per cent, which is zero point eight five. Three hundred and twenty times zero point eight five is two hundred and seventy-two.", g('320 × 0.85 = 272'))
      ]),
      SC('Profit and loss', 'Example 4: percentage profit', [
        S("A trader buys a bike for forty pounds and sells it for fifty-two pounds. The profit is twelve pounds. What is that as a percentage? Always divide by the cost price, which is where we started.", E('52 − 40 = 12')),
        S("Twelve divided by forty is zero point three. Multiply by one hundred. The profit is thirty per cent.", g('12 ÷ 40 × 100 = 30%'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: dividing by the new value instead of the original. In example one, dividing six by fifty-four would give the wrong answer.", r('6 ÷ 54  ✗') + g('6 ÷ 48  ✓')),
        S("Mistake two: forgetting to multiply by one hundred. Zero point one two five is a decimal. It must be turned into twelve point five per cent.", r('0.125%  ✗') + g('12.5%  ✓')),
        S("Mistake three: using the wrong multiplier. A fifteen per cent decrease is times zero point eight five, not zero point one five.", r('× 0.15  ✗') + g('× 0.85  ✓'))
      ]),
      SC('In real life', 'Population', [
        S("A town grows from eighteen thousand people to nineteen thousand, eight hundred. The change is one thousand, eight hundred. Divide by the original, eighteen thousand. That is zero point one. So the population grew by ten per cent.", g('1,800 ÷ 18,000 × 100 = 10%'))
      ]),
      L.turn("Your turn! Number one. A price falls from eighty pounds to sixty-eight pounds. What is the percentage decrease? Pause and try it.", E('80 → 68'), "The change is twelve pounds. Twelve divided by eighty is zero point one five. That is fifteen per cent.", g('12 ÷ 80 × 100 = 15%')),
      L.turn("Your turn! Number two. Increase two hundred and fifty pounds by twelve per cent. Pause and try it.", E('250 × 1.12'), "The multiplier is one point one two. Two hundred and fifty times one point one two is two hundred and eighty pounds.", g('£280')),
      L.turn("Your turn! Number three. A phone costs six hundred pounds. It is reduced by twenty per cent. What is the sale price? Pause and try it.", E('600 × 0.8'), "The multiplier is zero point eight. Six hundred times zero point eight is four hundred and eighty pounds.", g('£480')),
      L.rec(T, "To find a percentage change, work out the change, divide by the original, and multiply by one hundred. To apply a percentage change, use a multiplier. For an increase, add the percentage to one hundred. For a decrease, take it away. Always divide by the original amount, not the new one.", ['Change = new − original', '÷ original × 100', 'Increase: × (1 + r)', 'Decrease: × (1 − r)'])
    ]);
  })();

  /* ---- Currency ---- */
  (function () {
    var T = 'How do you convert currencies?';
    L.full(T, [
      SC('Exchange rates', 'Different countries, different money', [
        S("In the United Kingdom we use pounds. In France they use euros. In America they use dollars. When you travel, you swap your money for the local money. The exchange rate tells you how much you get.", E('£1 = €1.16', 'g')),
        S("This rate says that one pound buys one point one six euros. The rate changes from day to day, so we are always told it in the question. Here is another. One pound buys one dollar twenty-seven.", E('£1 = €1.16') + E('£1 = $1.27'))
      ]),
      SC('Pounds to euros', 'Example 1: multiply', [
        S("How many euros do you get for three hundred and fifty pounds? One pound gives one point one six euros. So three hundred and fifty pounds gives three hundred and fifty times one point one six.", E('£350 × 1.16')),
        S("Three hundred and fifty times one is three hundred and fifty. Three hundred and fifty times zero point one six is fifty-six. Add them. Four hundred and six euros.", g('350 × 1.16 = €406')),
        S("A good check: you should get more euros than pounds, because one pound buys more than one euro. Four hundred and six is bigger than three hundred and fifty. Good.", V.rule('£1 buys more than €1, so expect more euros.'))
      ]),
      SC('Euros to pounds', 'Example 2: divide', [
        S("Now the other way. You have two hundred and thirty-two euros. How many pounds is that? We go backwards, so we divide by the rate.", E('€232 ÷ 1.16')),
        S("Two hundred and thirty-two divided by one point one six is two hundred. You get two hundred pounds. Check: two hundred pounds times one point one six is two hundred and thirty-two euros.", g('232 ÷ 1.16 = £200'))
      ]),
      SC('Comparing prices', 'Example 3: where is it cheaper?', [
        S("Trainers cost seventy-five pounds in Glasgow. In Paris, the same trainers cost eighty-five euros. Where is it cheaper? We cannot compare pounds with euros directly. Change both to pounds.", E('£75   or   €85 ?')),
        S("Eighty-five euros divided by one point one six is seventy-three pounds twenty-eight. That is less than seventy-five pounds. So Paris is slightly cheaper.", g('€85 ÷ 1.16 ≈ £73.28'))
      ]),
      SC('Between two foreign currencies', 'Example 4: via pounds', [
        S("What about dollars to euros? We do not have a direct rate. So we go through pounds. Change the dollars to pounds first. Then change the pounds to euros.", E('$ → £ → €', 'g')),
        S("Take one hundred and twenty-seven dollars. Divide by one point two seven to get one hundred pounds. Then multiply by one point one six to get one hundred and sixteen euros.", E('$127 ÷ 1.27 = £100') + E('£100 × 1.16 = €116', 'g'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: multiplying when you should divide. Ask yourself, am I changing from pounds to another currency, or from another currency back to pounds?", V.cols([V.card('£ → other: ×', 'g', true), V.card('Other → £: ÷', 'b', true)], 2)),
        S("Mistake two: comparing prices in different currencies. Always change them into the same currency first.", V.rule('Same currency before you compare.')),
        S("Mistake three: forgetting fees. Some places charge a fee for changing money. Take the fee off first.", V.rule('Fee first, then exchange.'))
      ]),
      SC('In real life', 'Holiday money', [
        S("You have five hundred pounds for a holiday. The bank charges a two per cent fee. Two per cent of five hundred is ten pounds. So you change four hundred and ninety pounds. At one point one two euros to the pound, that is five hundred and forty-eight euros eighty.", E('£500 − 2% = £490') + g('490 × 1.12 = €548.80'))
      ]),
      L.turn("Your turn! Number one. At one pound to one dollar twenty-five, how many pounds is one hundred dollars? Pause and try it.", E('100 ÷ 1.25'), "We are going back to pounds, so we divide. One hundred divided by one point two five is eighty pounds.", g('£80')),
      L.turn("Your turn! Number two. At one pound to one point one euros, how many euros for two hundred pounds? Pause and try it.", E('200 × 1.1'), "We multiply. Two hundred times one point one is two hundred and twenty euros.", g('€220')),
      L.turn("Your turn! Number three. A book costs twelve euros. At one pound to one point two euros, what is that in pounds? Pause and try it.", E('12 ÷ 1.2'), "We divide. Twelve divided by one point two is ten pounds.", g('£10')),
      L.rec(T, "An exchange rate tells you how much of another currency you get for one pound. To change from pounds, multiply by the rate. To change back to pounds, divide by the rate. Always compare prices in the same currency. Take off any fees before you exchange.", ['£ → other: × rate', 'Other → £: ÷ rate', 'Compare in one currency', 'Watch for fees'])
    ]);
  })();

  /* ---- nth term ---- */
  (function () {
    var T = 'How do you generate a formula from a sequence?';
    L.full(T, [
      SC('Formula for a sequence', 'Start with the basics', [
        S("A sequence is a list of numbers that follows a pattern. Each number is called a term. Look at this sequence. Seven, eleven, fifteen, nineteen.", V.cards(['7', '11', '15', '19', '…'], ['b'])),
        S("Each term goes up by four. That is called the common difference. We could keep adding four forever. But what if we want the hundredth term? We do not want to write out one hundred numbers. A formula lets us jump straight there.", V.rule('Common difference: the step between terms.')),
        S("The formula is called the nth term. The letter n stands for the position. n equals one is the first term, n equals two is the second term, and so on.", E('n = 1, 2, 3, 4 …', 'b'))
      ]),
      SC('Finding the formula', 'Example 1: 7, 11, 15, 19', [
        S("Step one: find the common difference. Eleven take away seven is four. So the formula starts with four n. That means four times the position.", E('d = 4  →  4n')),
        S("Step two: write out four n for the first few positions. Four, eight, twelve, sixteen. Compare with our sequence. Seven, eleven, fifteen, nineteen.", E('4n:  4, 8, 12, 16') + E('Seq: 7, 11, 15, 19')),
        S("Our sequence is always three more. So we add three. The nth term is four n plus three.", g('nth term = 4n + 3'))
      ]),
      SC('Decreasing sequence', 'Example 2: 30, 25, 20, 15', [
        S("This sequence goes down. Twenty-five take away thirty is negative five. The common difference is negative five. So the formula starts with negative five n.", E('d = −5  →  −5n')),
        S("Negative five n gives negative five, negative ten, negative fifteen. We need thirty, twenty-five, twenty. We must add thirty-five each time. Negative five plus thirty-five is thirty. So the formula is thirty-five minus five n.", g('nth term = 35 − 5n'))
      ]),
      SC('Using the formula', 'Example 3: any term', [
        S("Now we can find any term. The fiftieth term of four n plus three. Put fifty in place of n. Four times fifty is two hundred. Add three. Two hundred and three.", g('4 × 50 + 3 = 203')),
        S("We can also check whether a number is in the sequence. Is one hundred and eleven in it? Solve four n plus three equals one hundred and eleven. Four n is one hundred and eight. So n is twenty-seven. It is a whole number, so yes. It is the twenty-seventh term.", E('4n + 3 = 111') + E('n = 27 ✓', 'g'))
      ]),
      SC('Patterns of shapes', 'Example 4: matchsticks', [
        S("Patterns can be made of shapes. One triangle uses three matchsticks. Two triangles in a row use five. Three triangles use seven.", V.cards(['3', '5', '7'], ['b'], true)),
        S("The difference is two, so the formula starts with two n. Two n gives two, four, six. We need three, five, seven, so add one. The number of matchsticks is two n plus one.", g('M = 2n + 1'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: using the first term as the formula. The first term is not the nth term. Seven is the first term, but the formula is four n plus three.", V.rule('The formula starts with the common difference.')),
        S("Mistake two: forgetting the adjustment. Four n alone gives four, eight, twelve. It does not match seven, eleven, fifteen.", r('4n  ✗') + g('4n + 3  ✓')),
        S("Mistake three: mixing up the sign for a decreasing sequence. If the terms go down, the difference is negative.", V.rule('Going down: negative difference.'))
      ]),
      L.turn("Your turn! Number one. Find the nth term of two, eight, fourteen, twenty. Pause and try it.", E('2, 8, 14, 20'), "The difference is six. Six n gives six, twelve, eighteen. We need two less each time. So six n minus four.", g('6n − 4')),
      L.turn("Your turn! Number two. Find the nth term of five, eight, eleven, fourteen. Pause and try it.", E('5, 8, 11, 14'), "The difference is three. Three n gives three, six, nine. We need two more. So three n plus two.", g('3n + 2')),
      L.turn("Your turn! Number three. Use the formula six n minus four to find the twentieth term. Pause and try it.", E('6 × 20 − 4'), "Six times twenty is one hundred and twenty. Take away four. One hundred and sixteen.", g('116')),
      L.rec(T, "Find the common difference. It goes in front of n. Compare d times n with the sequence, and adjust with a constant so the first term matches. Then you can use the formula to find any term, and check whether a number is in the sequence.", ['Common difference', 'd × n', 'Adjust to the first term', 'Substitute n for any term'])
    ]);
  })();
  /* ---- Simplify algebraic terms ---- */
  (function () {
    var T = 'How do you simplify algebraic terms?';
    L.full(T, [
      SC('Algebra', 'Start with the basics', [
        S("In algebra we use letters to stand for numbers. A term is one piece of an expression, like three x, or five y, or seven. The number in front of the letter is called the coefficient.", E('3x', 'b') + V.cols([V.card('Coefficient: 3', 'g', true), V.card('Letter: x', 'b', true)], 2)),
        S("Think of the letter as an object. Three x is three apples. Five x is five apples. Three apples plus five apples is eight apples. So three x plus five x is eight x.", E('3x + 5x = 8x', 'g')),
        S("But apples and bananas do not mix. Three x plus five y cannot be made shorter. They are different kinds of thing. Terms that have exactly the same letters and powers are called like terms. Only like terms can be added or subtracted.", E('3x + 5y   stays as it is', 'b'))
      ]),
      SC('Collecting like terms', 'Example 1: a and b', [
        S("Simplify four a plus three b minus a plus two b. First, spot the a terms. Four a, and minus a. Then the b terms. Three b and two b.", E('4a + 3b − a + 2b')),
        S("Four a minus a is three a. Remember, a on its own means one a. Three b plus two b is five b.", E('4a − a = 3a') + E('3b + 2b = 5b')),
        S("Put them together. Three a plus five b.", g('3a + 5b'))
      ]),
      SC('Different powers', 'Example 2: x and x squared', [
        S("Now simplify two x squared plus three x plus x squared. Is x squared the same kind of thing as x? No. x squared means x times x. It is a different term. So we only collect the x squared terms together.", E('2x² + 3x + x²')),
        S("Two x squared plus one x squared makes three x squared. The three x stays on its own.", g('3x² + 3x'))
      ]),
      SC('Multiplying terms', 'Example 3: three a b times four a', [
        S("When we multiply terms, we multiply the numbers first. Three times four is twelve. Then we multiply the letters. a times a is a squared. And b stays as b.", E('3ab × 4a')),
        S("So the answer is twelve a squared b.", g('3ab × 4a = 12a²b'))
      ]),
      SC('Dividing terms', 'Example 4: cancelling', [
        S("To divide, write it as a fraction and cancel. Twelve x squared y divided by four x. Twelve divided by four is three. x squared divided by x leaves one x. And y stays.", E('12x²y ÷ 4x')),
        S("The answer is three x y.", g('12x²y ÷ 4x = 3xy'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: adding unlike terms. Three x plus two y is not five x y.", r('3x + 2y = 5xy  ✗') + g('3x + 2y stays  ✓')),
        S("Mistake two: forgetting the invisible one. x is one x. So five x minus x is four x, not five.", r('5x − x = 5  ✗') + g('5x − x = 4x  ✓')),
        S("Mistake three: mixing up addition and multiplication. x plus x is two x. But x times x is x squared.", E('x + x = 2x') + E('x × x = x²'))
      ]),
      SC('In real life', 'Perimeter', [
        S("A rectangle has sides of length a and b. Its perimeter is a plus b plus a plus b. Collect the like terms. That is two a plus two b. Algebra gives a short rule for any rectangle.", g('a + b + a + b = 2a + 2b'))
      ]),
      L.turn("Your turn! Number one. Simplify five p minus two q plus three p plus q. Pause and try it.", E('5p − 2q + 3p + q'), "Five p plus three p is eight p. Minus two q plus q is minus q. So eight p minus q.", g('8p − q')),
      L.turn("Your turn! Number two. Simplify four x times three y. Pause and try it.", E('4x × 3y'), "Four times three is twelve. x times y is x y. So twelve x y.", g('12xy')),
      L.turn("Your turn! Number three. Simplify twenty a squared divided by five a. Pause and try it.", E('20a² ÷ 5a'), "Twenty divided by five is four. a squared over a is a. So four a.", g('4a')),
      L.rec(T, "Like terms have the same letters and powers. Add or subtract their coefficients. When multiplying, multiply the numbers and add the powers of each letter. When dividing, cancel. A letter on its own has a coefficient of one.", ['Like terms: same letters and powers', 'Add the numbers in front', 'Multiply: numbers, then letters', 'Divide: cancel'])
    ]);
  })();

  /* ---- Substitution ---- */
  (function () {
    var T = 'How do you substitute numbers into an expression?';
    L.full(T, [
      SC('Substitution', 'Start with the basics', [
        S("To substitute means to swap. We swap each letter for its number. Then we work it out. The answer is the value of the expression.", E('5a − 2b, with a = 4, b = 3', 'b')),
        S("The golden rule is that the order of operations still applies. Brackets, then powers, then multiplication and division, then addition and subtraction. And remember, five a means five times a. There is a hidden multiplication.", V.rule('Hidden multiplication: 5a = 5 × a'))
      ]),
      SC('A simple one', 'Example 1: a = 4, b = 3', [
        S("Find the value of five a minus two b. Swap the letters. Five times four, minus two times three.", E('5 × 4 − 2 × 3')),
        S("Do the multiplications first. Twenty minus six. That is fourteen.", g('20 − 6 = 14'))
      ]),
      SC('With powers', 'Example 2: x = 3', [
        S("Find the value of two x squared when x is three. Powers come before multiplying. So square the three first. Three squared is nine. Then double it. Eighteen.", E('2x² = 2 × 3² = 2 × 9') + g('= 18')),
        S("A common slip is to double first. Two times three is six, and six squared is thirty-six. That is wrong. The square only applies to the x.", r('(2 × 3)² = 36  ✗'))
      ]),
      SC('With negatives', 'Example 3: x = −2', [
        S("Find x squared plus three x when x is negative two. Put brackets round the negative number. This keeps the sign safe.", E('(−2)² + 3 × (−2)')),
        S("Negative two squared is positive four. Three times negative two is negative six. Four plus negative six is negative two.", E('4 + (−6)') + g('= −2'))
      ]),
      SC('Using a formula', 'Example 4: v = u + at', [
        S("Formulae are expressions too. Speed v equals u plus a t. Let u be ten, a be three, and t be five. First, a times t. Three times five is fifteen. Then add ten.", E('v = 10 + 3 × 5') + g('v = 10 + 15 = 25'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: squaring the number in front. Two x squared with x equal to three is eighteen, not thirty-six.", r('2x² = 6²  ✗') + g('2x² = 2 × 9  ✓')),
        S("Mistake two: losing the sign. Minus two squared is plus four, and you must use brackets to see that.", r('−2² = −4  ✗  (for x = −2)') + g('(−2)² = 4  ✓')),
        S("Mistake three: reading five a as fifty-four. The letter is not a digit. Five a is five times a.", r('5a = 54  ✗') + g('5a = 5 × 4 = 20  ✓'))
      ]),
      SC('In real life', 'Temperature', [
        S("To change Celsius to Fahrenheit, we use F equals one point eight C plus thirty-two. When C is twenty-five, one point eight times twenty-five is forty-five. Add thirty-two. Seventy-seven degrees.", g('F = 1.8 × 25 + 32 = 77'))
      ]),
      L.turn("Your turn! Number one. Find three p squared minus q, when p is two and q is five. Pause and try it.", E('3p² − q'), "Two squared is four. Three times four is twelve. Twelve minus five is seven.", g('7')),
      L.turn("Your turn! Number two. Find x squared minus four x, when x is negative three. Pause and try it.", E('x² − 4x, x = −3'), "Negative three squared is nine. Four times negative three is negative twelve. Nine minus negative twelve is twenty-one.", g('9 + 12 = 21')),
      L.turn("Your turn! Number three. Use A equals half b h with b equal to ten and h equal to six. Pause and try it.", E('A = ½bh'), "Half of ten is five. Five times six is thirty.", g('A = 30')),
      L.rec(T, "Replace each letter with its value, using brackets round negative numbers. Then follow the order of operations. Powers come before multiplying. A number next to a letter means multiply.", ['Replace each letter', 'Brackets round negatives', 'BODMAS', 'Powers before ×'])
    ]);
  })();

  /* ---- Linear equations ---- */
  (function () {
    var T = 'How do you solve linear equations?';
    L.full(T, [
      SC('Linear equations', 'Start with the basics', [
        S("An equation says that two things are equal. A linear equation has an unknown letter, with no powers. We want to find the number that makes it true. Think of a pair of balance scales. Both sides weigh the same.", E('3x + 4 = 19', 'b')),
        S("The golden rule is to keep the scales balanced. Whatever you do to one side, you must do to the other. We use opposite operations to undo things. The opposite of add is subtract. The opposite of multiply is divide.", V.cols([V.card('+ ↔ −', 'g', true), V.card('× ↔ ÷', 'g', true)], 2))
      ]),
      SC('Two steps', 'Example 1: 3x + 4 = 19', [
        S("We want x on its own. Undo things in the reverse order. The last thing done to x was adding four. So subtract four from both sides. Nineteen minus four is fifteen.", E('3x + 4 = 19') + E('3x = 15')),
        S("Now x is multiplied by three. Divide both sides by three. x equals five.", g('x = 5')),
        S("Always check. Put five back in. Three times five is fifteen, plus four is nineteen. Correct.", E('3 × 5 + 4 = 19 ✓'))
      ]),
      SC('Brackets', 'Example 2: 2(x − 3) = 14', [
        S("There are two ways. One is to expand the bracket first. Two times x is two x. Two times negative three is negative six.", E('2x − 6 = 14')),
        S("Add six to both sides. Two x equals twenty. Divide by two. x equals ten.", E('2x = 20') + g('x = 10'))
      ]),
      SC('Letters on both sides', 'Example 3: 7x − 5 = 3x + 11', [
        S("Now there are x terms on both sides. First move the smaller one. Subtract three x from both sides. Seven x minus three x is four x.", E('4x − 5 = 11')),
        S("Add five to both sides. Four x equals sixteen. Divide by four. x equals four.", E('4x = 16') + g('x = 4')),
        S("Check both sides. Left: seven times four minus five is twenty-three. Right: three times four plus eleven is twenty-three. They match.", E('23 = 23 ✓'))
      ]),
      SC('Fractions', 'Example 4: x/3 + 2 = 6', [
        S("Subtract two from both sides. x over three equals four. Now x is divided by three. The opposite is multiply. Multiply both sides by three. x equals twelve.", E('x/3 = 4') + g('x = 12'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: only changing one side. If you subtract four on the left, you must subtract four on the right too.", V.rule('Same to both sides.')),
        S("Mistake two: forgetting to multiply everything in a bracket. Two times x minus three is two x minus six, not two x minus three.", r('2(x − 3) = 2x − 3  ✗') + g('2(x − 3) = 2x − 6  ✓')),
        S("Mistake three: moving a term without changing its sign. When a plus four crosses the equals sign, it becomes minus four.", V.rule('Cross the equals: change the sign.'))
      ]),
      SC('In real life', 'Equal cost', [
        S("Plan one costs twelve pounds plus two pounds a visit. Plan two costs four pounds a visit. They cost the same when twelve plus two v equals four v. Subtract two v. Twelve equals two v. So v is six visits.", E('12 + 2v = 4v') + g('v = 6'))
      ]),
      L.turn("Your turn! Number one. Solve five, bracket, x plus one, equals three x plus seventeen. Pause and try it.", E('5(x + 1) = 3x + 17'), "Expand to get five x plus five. Subtract three x. Two x plus five equals seventeen. Two x equals twelve. x is six.", g('x = 6')),
      L.turn("Your turn! Number two. Solve four x minus nine equals twenty-three. Pause and try it.", E('4x − 9 = 23'), "Add nine. Four x equals thirty-two. Divide by four. x is eight.", g('x = 8')),
      L.turn("Your turn! Number three. Solve x over five plus three equals seven. Pause and try it.", E('x/5 + 3 = 7'), "Subtract three. x over five equals four. Multiply by five. x is twenty.", g('x = 20')),
      L.rec(T, "A linear equation is a balance. Do the same to both sides. Expand any brackets. Collect the letters on one side. Then undo operations in reverse order, add and subtract first, then multiply and divide. Always check by substituting your answer.", ['Expand brackets', 'Letters to one side', 'Undo + and −, then × and ÷', 'Check by substituting'])
    ]);
  })();

  /* ---- Create and solve equations ---- */
  (function () {
    var T = 'How do you create and solve simple equations?';
    L.full(T, [
      SC('Words to equations', 'Start with the basics', [
        S("Many problems are written in words. We can turn them into an equation and solve it. This is one of the most useful skills in maths. There are four steps.", V.list(['Choose a letter for the unknown', 'Write the equation', 'Solve it', 'Answer the question in words'])),
        S("The first step matters most. Write down what your letter stands for, such as, let n be the number. Then every piece of the story becomes a piece of the equation.", E('Let n = the number', 'b'))
      ]),
      SC('Think of a number', 'Example 1', [
        S("I think of a number, multiply it by five, and subtract eight. The answer is thirty-two. Let n be the number. Multiply by five gives five n. Subtract eight gives five n minus eight. That equals thirty-two.", E('5n − 8 = 32')),
        S("Add eight. Five n equals forty. Divide by five. n is eight.", g('n = 8'))
      ]),
      SC('Angles', 'Example 2: a triangle', [
        S("The angles of a triangle are x, two x and three x degrees. We know the angles of a triangle add up to one hundred and eighty. So add them up and set them equal to one hundred and eighty.", E('x + 2x + 3x = 180')),
        S("Six x equals one hundred and eighty. x is thirty. Now answer the question. The angles are thirty, sixty and ninety degrees. Check: thirty plus sixty plus ninety is one hundred and eighty.", E('6x = 180') + g('30°, 60°, 90°'))
      ]),
      SC('Perimeter', 'Example 3: a rectangle', [
        S("A rectangle has a width of w and a length of w plus five. Its perimeter is thirty-four. The perimeter is two widths plus two lengths. That is w plus w plus five, twice. Four w plus ten.", E('4w + 10 = 34')),
        S("Subtract ten. Four w equals twenty-four. w is six. The length is six plus five, which is eleven. The rectangle is six by eleven.", g('6 by 11'))
      ]),
      SC('Money', 'Example 4: two items', [
        S("A pen costs p pence. A pad costs three times as much. Together they cost one pound twenty, which is one hundred and twenty pence. The pad costs three p. So p plus three p equals one hundred and twenty.", E('4p = 120')),
        S("p is thirty. The pen costs thirty pence and the pad costs ninety pence.", g('Pen 30p, pad 90p'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: not saying what the letter means. Always begin with let n be, so you remember what you are finding.", V.rule('Let n be …')),
        S("Mistake two: stopping at the value of the letter. In the rectangle, w is six, but the question asked for the length too.", V.rule('Answer the question that was asked.')),
        S("Mistake three: skipping the check. Put your answer back into the story. Does it make sense?", V.rule('Check it fits the story.'))
      ]),
      SC('In real life', 'Sharing a bill', [
        S("Four friends share a bill equally, and then each also pays a three pound tip. Each person pays eleven pounds in total. Let b be the bill. b over four plus three equals eleven. Subtract three. b over four is eight. Multiply by four. The bill is thirty-two pounds.", E('b/4 + 3 = 11') + g('b = £32'))
      ]),
      L.turn("Your turn! Number one. Three consecutive numbers add up to forty-eight. Write and solve an equation. Pause and try it.", E('n + (n+1) + (n+2) = 48'), "Three n plus three equals forty-eight. Three n equals forty-five. n is fifteen. The numbers are fifteen, sixteen and seventeen.", g('15, 16, 17')),
      L.turn("Your turn! Number two. I think of a number, double it and add seven. The answer is twenty-three. What is the number? Pause and try it.", E('2n + 7 = 23'), "Subtract seven. Two n equals sixteen. n is eight.", g('n = 8')),
      L.turn("Your turn! Number three. A mum is three times as old as her son. Together they are forty. How old is the son? Pause and try it.", E('s + 3s = 40'), "Four s equals forty. s is ten. The son is ten and his mum is thirty.", g('10 and 30')),
      L.rec(T, "Choose a letter for the unknown and say what it stands for. Write the story as an equation. Solve it. Then answer the question in words and check that the answer fits the story.", ['Define the letter', 'Write the equation', 'Solve', 'Answer in words and check'])
    ]);
  })();

  /* ---- Formulae ---- */
  (function () {
    var T = 'How do you create and use algebraic formulae?';
    L.full(T, [
      SC('Formulae', 'Start with the basics', [
        S("A formula is a rule that connects quantities, using letters. For example, the perimeter of a rectangle is two l plus two w. Here l is the length and w is the width. You can use it for any rectangle in the world.", E('P = 2l + 2w', 'g')),
        S("Most formulae have two parts. A fixed part that never changes, and a changing part that depends on something. Spotting these two parts is how you write a formula.", V.cols([V.card('Fixed part', 'b', true), V.card('Changing part', 'g', true)], 2))
      ]),
      SC('Writing a formula', 'Example 1: a taxi', [
        S("A taxi charges three pounds to start. Then it charges one pound eighty for every mile. Let m be the number of miles and C be the total cost. The fixed part is three. The changing part is one point eight times m.", E('Fixed: 3') + E('Changing: 1.8 × m')),
        S("Put them together. C equals three plus one point eight m.", g('C = 3 + 1.8m'))
      ]),
      SC('Using it', 'Example 2: ten miles', [
        S("How much is a ten mile journey? Put ten in place of m. One point eight times ten is eighteen. Plus three is twenty-one pounds.", g('C = 3 + 1.8 × 10 = £21'))
      ]),
      SC('Working backwards', 'Example 3: how far?', [
        S("A fare is thirty pounds. How far did the taxi go? Put thirty in place of C, and solve. Three plus one point eight m equals thirty. Subtract three. One point eight m equals twenty-seven.", E('3 + 1.8m = 30') + E('1.8m = 27')),
        S("Divide by one point eight. m is fifteen miles.", g('m = 15'))
      ]),
      SC('Changing the subject', 'Example 4: rearranging', [
        S("Instead of solving each time, we can rearrange the formula so that m is on its own. Start with C equals three plus one point eight m. Subtract three from both sides. Then divide by one point eight.", E('C − 3 = 1.8m')),
        S("So m equals C minus three, all divided by one point eight. Now any fare can be put straight in.", g('m = (C − 3) ÷ 1.8'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: putting the fixed charge on the wrong part. The three pounds is paid once. It is not multiplied by the miles.", r('C = 3m + 1.8  ✗') + g('C = 3 + 1.8m  ✓')),
        S("Mistake two: forgetting what the letters mean. Always say what each letter stands for, and its unit.", V.rule('Say what each letter means.')),
        S("Mistake three: mixing units. If the rate is in pounds per mile, the distance must be in miles, not kilometres.", V.rule('Keep the units matching.'))
      ]),
      SC('In real life', 'Mobile phone', [
        S("A phone plan costs eight pounds a month plus ten pence for each extra minute. With m extra minutes, the cost is eight plus zero point one m. For forty extra minutes, that is eight plus four, which is twelve pounds.", E('C = 8 + 0.1m') + g('m = 40 → £12'))
      ]),
      L.turn("Your turn! Number one. Write a formula for the cost T of n cinema tickets at seven pounds fifty each, plus a two pound booking fee. Pause and try it.", E('T = ?'), "The changing part is seven point five times n. The fixed part is two. So T equals seven point five n plus two.", g('T = 7.5n + 2')),
      L.turn("Your turn! Number two. Use your formula to find the cost of four tickets. Pause and try it.", E('T = 7.5 × 4 + 2'), "Seven point five times four is thirty. Plus two is thirty-two pounds.", g('£32')),
      L.turn("Your turn! Number three. The total was forty-seven pounds. How many tickets? Pause and try it.", E('7.5n + 2 = 47'), "Subtract two. Seven point five n equals forty-five. Divide by seven point five. n is six tickets.", g('n = 6')),
      L.rec(T, "A formula connects quantities with letters. To write one, find the fixed part and the changing part. To use one, substitute values. To work backwards, solve an equation. To rearrange, change the subject. Always say what each letter means.", ['Fixed part + changing part', 'Substitute values', 'Solve to work backwards', 'Rearrange to change subject'])
    ]);
  })();
  /* ---- Construct triangles ---- */
  (function () {
    var T = 'How do you construct triangles?';
    L.full(T, [
      SC('Constructing triangles', 'Start with the basics', [
        S("To construct a triangle means to draw it accurately. You need a sharp pencil, a ruler, a protractor and a pair of compasses. What you do depends on the facts you are given.", V.list(['Three sides: use compasses', 'Two sides and the angle between: use a protractor', 'Two angles and a side: use a protractor'])),
        S("The rule for every method is the same. Draw the base first. Then build the rest of the triangle from the ends of the base. Never rub out your construction lines or arcs. They show that your drawing is accurate.", V.rule('Base first. Keep the arcs.'))
      ]),
      SC('Three sides', 'Example 1: 5 cm, 7 cm, 8 cm', [
        S("Draw the longest side as the base. It is eight centimetres. Mark the two ends.", E('Base: 8 cm')),
        S("Open the compasses to five centimetres, using the ruler. Put the point on the left end, and draw an arc above the line.", E('Arc of radius 5 cm from the left end', 'b')),
        S("Now open the compasses to seven centimetres. Put the point on the right end, and draw a second arc. It must cross the first one.", E('Arc of radius 7 cm from the right end', 'b')),
        S("Where the arcs cross is the third corner. Join it to both ends of the base with a ruler. You have a triangle with sides five, seven and eight.", g('Join to the crossing point'))
      ]),
      SC('Two sides and an angle', 'Example 2: 6 cm, 50°, 9 cm', [
        S("We know two sides and the angle between them. Draw the six centimetre side as the base. Put the centre of the protractor on the left end. Line up the zero line with the base.", E('Base: 6 cm')),
        S("Find fifty degrees on the scale and make a small dot. Be careful to read the correct scale, starting from zero on the base line. Draw a line from the end through the dot, nine centimetres long.", E('50° at the left end') + E('Line of length 9 cm', 'b')),
        S("Finally join the end of that line to the other end of the base. That completes the triangle.", g('Join the ends'))
      ]),
      SC('Two angles and a side', 'Example 3: 40°, 7 cm, 65°', [
        S("Draw a seven centimetre base. At the left end, measure forty degrees and draw a long line. At the right end, measure sixty-five degrees and draw another long line. Make them cross.", E('40° at one end') + E('65° at the other end', 'b')),
        S("Where the two lines meet is the third corner. The third angle is whatever is left. One hundred and eighty minus forty minus sixty-five is seventy-five degrees. You can measure it to check your drawing.", g('Third angle = 75°'))
      ]),
      SC('Can it be drawn?', 'Example 4: the triangle rule', [
        S("Not every set of three lengths makes a triangle. Try sides of three, four and nine. The two short sides cannot reach each other. The rule is that the two shorter sides must add up to more than the longest side.", E('3 + 4 = 7') + r('7 < 9  →  impossible')),
        S("Now try four, five and eight. Four plus five is nine. That is more than eight. So this triangle can be drawn.", g('4 + 5 = 9 > 8  ✓'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: reading the wrong scale on the protractor. It has two scales. Start from the zero that lies on your base line.", V.rule('Zero on the base line.')),
        S("Mistake two: rubbing out the arcs. Keep them. They are the proof of an accurate construction.", V.rule('Keep the arcs.')),
        S("Mistake three: a blunt pencil or a slipping ruler. A thick line can easily be a millimetre out. Use a sharp pencil.", V.rule('Sharp pencil, steady hand.'))
      ]),
      SC('In real life', 'Building frames', [
        S("Builders use triangles because they are rigid. A rectangle can lean sideways, but a triangle cannot change shape. A roof truss is built from triangles. The lengths of the beams are chosen using exactly this triangle rule.", V.note('Triangles are rigid'))
      ]),
      L.turn("Your turn! Number one. Can you construct a triangle with sides five, six and twelve? Pause and think.", E('5 + 6 vs 12'), "Five plus six is eleven. That is less than twelve. So no, it is impossible.", g('No')),
      L.turn("Your turn! Number two. Which tool do you use to draw a triangle when you know all three sides? Pause and think.", E('SSS → ?'), "Compasses. You draw two arcs that cross.", g('Compasses')),
      L.turn("Your turn! Number three. A triangle has angles of forty and sixty-five degrees. What is the third angle? Pause and try it.", E('180 − 40 − 65'), "One hundred and eighty minus one hundred and five is seventy-five degrees.", g('75°')),
      L.rec(T, "Choose the method from the facts you have. Draw the base first. Use compasses when you know three sides, and a protractor when you know angles. Keep your construction lines. The two shorter sides must always add up to more than the longest.", ['SSS: compasses', 'SAS and ASA: protractor', 'Base first', 'Shorter sides > longest'])
    ]);
  })();

  /* ---- 3D objects ---- */
  (function () {
    var T = 'What are the properties of 3D objects?';
    L.full(T, [
      SC('3D objects', 'Start with the basics', [
        S("A 3D object is a solid. You can hold it. We describe solids using three words. Faces, edges and vertices.", V.cols([V.card('Face: a flat surface', 'b', true), V.card('Edge: where two faces meet', 'g', true), V.card('Vertex: a corner', 'p', true)], 3)),
        S("Vertices is the plural of vertex. Think of a cube, like a dice. It has six faces, twelve edges and eight vertices.", V.tbl([['Cube', '6', '12', '8']], ['Solid', 'Faces', 'Edges', 'Vertices']))
      ]),
      SC('Counting', 'Example 1: prisms and pyramids', [
        S("A triangular prism looks like a tent. It has two triangle ends and three rectangles. That is five faces. It has nine edges and six vertices.", V.tbl([['Triangular prism', '5', '9', '6']], ['Solid', 'F', 'E', 'V'])),
        S("A square-based pyramid has a square base and four triangle sides. That is five faces. It has eight edges and five vertices. And a tetrahedron, with four triangle faces, has six edges and four vertices.", V.tbl([['Square pyramid', '5', '8', '5'], ['Tetrahedron', '4', '6', '4']], ['Solid', 'F', 'E', 'V']))
      ]),
      SC('Euler’s formula', 'Example 2: a surprising rule', [
        S("Here is something wonderful. For any solid with flat faces, faces plus vertices minus edges always equals two. This is called Euler's formula. Euler is said, oi-ler.", E('F + V − E = 2', 'g')),
        S("Try the cube. Six plus eight is fourteen. Take away twelve. Two. Try the triangular prism. Five plus six is eleven. Take away nine. Two again.", E('Cube: 6 + 8 − 12 = 2 ✓') + E('Prism: 5 + 6 − 9 = 2 ✓'))
      ]),
      SC('Cross-sections', 'Example 3: slices', [
        S("A cross-section is the shape you see when you slice through a solid. Cut a loaf of bread, and the slice is a cross-section. A prism has the same cross-section all the way along. That is how a prism is defined.", V.rule('Prism: same cross-section throughout.')),
        S("Slice a cylinder across, and you get a circle. Slice a cone across, and you get a circle too, but the circles get smaller towards the point.", V.cards(['Cylinder: circle', 'Cone: shrinking circle'], ['b', 'g']))
      ]),
      SC('Planes of symmetry', 'Example 4: mirror slices', [
        S("A plane of symmetry is a flat slice that cuts a solid into two mirror images. A cuboid with a square end has five. A cube has nine. Three go through the middle of opposite faces, and six go through opposite edges.", E('Cube: 9 planes of symmetry', 'g'))
      ]),
      SC('Nets', 'Example 5: unfolding', [
        S("A net is a solid unfolded flat. A cube has a net made of six squares. When you fold it up, the squares make the faces. A net must have the right shapes, and they must fold without overlapping.", V.note('A net folds up into the solid'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: forgetting hidden faces and edges. Count the ones at the back and the bottom too.", V.rule('Count the hidden ones.')),
        S("Mistake two: calling a corner an edge. An edge is a line. A vertex is a point.", V.rule('Edge: line. Vertex: point.')),
        S("Mistake three: calling a cylinder a prism. A prism has flat sides with a polygon cross-section. A cylinder has a curved surface.", V.rule('Prism: polygon cross-section.'))
      ]),
      SC('In real life', 'Packaging', [
        S("Boxes of cereal are cuboids, and sweets often come in triangular prisms, like a chocolate bar box. Designers draw the net first, cut it from a single sheet of card, and fold it into a box.", V.note('Packaging starts as a net'))
      ]),
      L.turn("Your turn! Number one. A solid has eight faces and twelve vertices. How many edges? Pause and use Euler's formula.", E('8 + 12 − E = 2'), "Eight plus twelve is twenty. Twenty minus E equals two. So E is eighteen.", g('18 edges')),
      L.turn("Your turn! Number two. How many faces does a square-based pyramid have? Pause and think.", E('?'), "One square base, and four triangles. Five faces.", g('5')),
      L.turn("Your turn! Number three. What shape is the cross-section of a cylinder, cut across? Pause and think.", E('?'), "A circle.", g('A circle')),
      L.rec(T, "Describe solids by faces, edges and vertices. A prism has the same cross-section all the way along. A net folds up into a solid. A plane of symmetry slices a solid into mirror halves. For any solid with flat faces, F plus V minus E equals two.", ['F, E, V', 'Euler: F + V − E = 2', 'Cross-sections', 'Nets and planes of symmetry'])
    ]);
  })();

  /* ---- Angles in triangles and quadrilaterals ---- */
  (function () {
    var T = 'What are angles in triangles and quadrilaterals?';
    L.full(T, [
      SC('Angle sums', 'Start with the basics', [
        S("Angles are measured in degrees. A full turn is three hundred and sixty degrees. A straight line is one hundred and eighty. A right angle is ninety.", V.cards(['Right angle: 90°', 'Straight line: 180°', 'Full turn: 360°'], ['b', 'g', 'p'])),
        S("Here is the big idea. The angles inside any triangle add up to one hundred and eighty degrees. The angles inside any quadrilateral, that is a four-sided shape, add up to three hundred and sixty.", V.tbl([['Triangle', '180°'], ['Quadrilateral', '360°']], ['Shape', 'Angles add to']))
      ]),
      SC('Missing angle in a triangle', 'Example 1', [
        S("A triangle has angles of fifty-two and seventy-nine degrees. Find the third. First add the two we know. Fifty-two plus seventy-nine is one hundred and thirty-one.", E('52 + 79 = 131')),
        S("Now take it from one hundred and eighty. One hundred and eighty minus one hundred and thirty-one is forty-nine.", g('180 − 131 = 49°'))
      ]),
      SC('Isosceles triangles', 'Example 2: equal base angles', [
        S("An isosceles triangle has two equal sides, and two equal angles at the bottom, called the base angles. Suppose the top angle is thirty-six degrees. The other two share what is left.", E('180 − 36 = 144')),
        S("One hundred and forty-four divided by two is seventy-two. Each base angle is seventy-two degrees.", g('144 ÷ 2 = 72°'))
      ]),
      SC('Missing angle in a quadrilateral', 'Example 3', [
        S("A quadrilateral has angles of ninety, one hundred and fifteen and seventy-five. Add them. Ninety plus one hundred and fifteen is two hundred and five. Plus seventy-five is two hundred and eighty.", E('90 + 115 + 75 = 280')),
        S("The four angles must make three hundred and sixty. Three hundred and sixty minus two hundred and eighty is eighty degrees.", g('360 − 280 = 80°'))
      ]),
      SC('Special quadrilaterals', 'Example 4: parallelogram', [
        S("In a parallelogram, opposite angles are equal. And the angles next to each other add up to one hundred and eighty. If one angle is sixty-five, the one opposite is also sixty-five. The neighbours are one hundred and eighty minus sixty-five, which is one hundred and fifteen.", E('65°, 115°, 65°, 115°', 'g')),
        S("Check. Sixty-five plus one hundred and fifteen plus sixty-five plus one hundred and fifteen is three hundred and sixty.", E('= 360° ✓'))
      ]),
      SC('Exterior angles', 'Example 5: extending a side', [
        S("Extend one side of a triangle. The angle outside is called an exterior angle. It is equal to the two interior angles opposite it, added together. If those two are forty and fifty-five, the exterior angle is ninety-five.", E('ext = a + b') + g('40 + 55 = 95°'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: using three hundred and sixty for a triangle. Triangles use one hundred and eighty.", r('Triangle: 360°  ✗') + g('Triangle: 180°  ✓')),
        S("Mistake two: forgetting isosceles angles are equal. If you are told a triangle is isosceles, mark the equal angles straight away.", V.rule('Mark equal angles first.')),
        S("Mistake three: not showing your subtraction. Write one hundred and eighty minus the angles you know.", V.rule('Show: 180 − …'))
      ]),
      SC('In real life', 'Roof angles', [
        S("A builder cuts a triangular roof gable. The two sloping angles are each thirty-five degrees. The top angle must be one hundred and eighty minus seventy, which is one hundred and ten degrees. The saw is set to cut it.", g('180 − 70 = 110°'))
      ]),
      L.turn("Your turn! Number one. A kite has angles of one hundred and ten, one hundred and ten and sixty. Find the fourth. Pause and try it.", E('360 − 280'), "One hundred and ten plus one hundred and ten plus sixty is two hundred and eighty. Three hundred and sixty minus two hundred and eighty is eighty degrees.", g('80°')),
      L.turn("Your turn! Number two. An isosceles triangle has a top angle of forty degrees. Find each base angle. Pause and try it.", E('(180 − 40) ÷ 2'), "One hundred and forty divided by two is seventy degrees.", g('70°')),
      L.turn("Your turn! Number three. A parallelogram has an angle of seventy degrees. What is the angle next to it? Pause and try it.", E('180 − 70'), "Neighbouring angles add to one hundred and eighty. So one hundred and ten degrees.", g('110°')),
      L.rec(T, "Triangle angles add up to one hundred and eighty degrees. Quadrilateral angles add up to three hundred and sixty. Use properties such as equal base angles in an isosceles triangle, and equal opposite angles in a parallelogram. An exterior angle equals the two interior angles opposite it.", ['Triangle: 180°', 'Quadrilateral: 360°', 'Isosceles: equal base angles', 'Parallelogram: opposite angles equal'])
    ]);
  })();

  /* ---- Linear scale factor ---- */
  (function () {
    var T = 'What is a linear scale factor?';
    L.full(T, [
      SC('Scale factor', 'Start with the basics', [
        S("When you enlarge a photo, every length gets longer by the same amount. The number you multiply by is the linear scale factor. It is often called k.", E('new length = old length × k', 'g')),
        S("If k is bigger than one, the shape gets bigger. That is an enlargement. If k is between zero and one, the shape gets smaller. That is a reduction. If k is one, nothing changes.", V.cols([V.card('k > 1: bigger', 'g', true), V.card('0 < k < 1: smaller', 'b', true)], 2)),
        S("Notice that the shape stays the same. Angles do not change. Only the lengths change. Shapes like this are called similar.", V.rule('Angles stay the same.'))
      ]),
      SC('Enlargement', 'Example 1: k = 3', [
        S("A rectangle is four centimetres by two centimetres. Enlarge it with a scale factor of three. Multiply each length by three.", E('4 × 3 = 12') + E('2 × 3 = 6')),
        S("The new rectangle is twelve centimetres by six centimetres.", g('12 cm by 6 cm'))
      ]),
      SC('Reduction', 'Example 2: k = ¼', [
        S("A scale factor of one quarter means every length is divided by four. A line of twenty centimetres becomes twenty divided by four. That is five centimetres.", g('20 × ¼ = 5 cm'))
      ]),
      SC('Finding k', 'Example 3: new divided by old', [
        S("A side of eight centimetres becomes fourteen centimetres. What is the scale factor? Divide the new length by the old length.", E('k = 14 ÷ 8')),
        S("Fourteen divided by eight is one point seven five. It is bigger than one, so it is an enlargement. Always match the same side in both shapes.", g('k = 1.75'))
      ]),
      SC('Effect on area', 'Example 4: k squared', [
        S("Now the surprise. Areas do not multiply by k. They multiply by k squared. Why? Because area has two lengths multiplied together, and both are scaled.", E('area × k²', 'g')),
        S("A shape with area eight square centimetres is enlarged with scale factor three. The new area is eight times three squared. Three squared is nine. Eight times nine is seventy-two square centimetres.", g('8 × 9 = 72 cm²'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: multiplying area by k. If k is three, the area is nine times bigger, not three times.", r('Area × 3  ✗') + g('Area × 9  ✓')),
        S("Mistake two: dividing the wrong way round when finding k. Always do new divided by old.", r('old ÷ new  ✗') + g('new ÷ old  ✓')),
        S("Mistake three: changing the angles. Angles never change in an enlargement.", V.rule('Lengths change. Angles do not.'))
      ]),
      SC('In real life', 'Models and maps', [
        S("A model car is made at a scale of one to forty-three. A real car is four point three metres long. That is four hundred and thirty centimetres. Divide by forty-three. The model is ten centimetres long.", g('430 ÷ 43 = 10 cm'))
      ]),
      L.turn("Your turn! Number one. A photo nine centimetres wide is reduced to six centimetres. What is the scale factor? Pause and try it.", E('6 ÷ 9'), "Six divided by nine simplifies to two thirds.", g('k = ⅔')),
      L.turn("Your turn! Number two. A triangle has an area of five square centimetres. It is enlarged with scale factor four. What is the new area? Pause and try it.", E('5 × 4²'), "Four squared is sixteen. Five times sixteen is eighty square centimetres.", g('80 cm²')),
      L.turn("Your turn! Number three. A line of fifteen centimetres is reduced with scale factor zero point four. How long is it now? Pause and try it.", E('15 × 0.4'), "Fifteen times zero point four is six centimetres.", g('6 cm')),
      L.rec(T, "Multiply every length by the linear scale factor. To find the scale factor, divide a new length by the matching old length. A scale factor above one enlarges. Below one it reduces. Areas multiply by k squared. Angles stay the same.", ['New = old × k', 'k = new ÷ old', 'k > 1 enlarges, k < 1 reduces', 'Area × k²'])
    ]);
  })();

  /* ---- Symmetry ---- */
  (function () {
    var T = 'What is symmetry in 2D shapes?';
    L.full(T, [
      SC('Symmetry', 'Start with the basics', [
        S("Symmetry is when a shape looks the same after something is done to it. There are two kinds. Line symmetry, and rotational symmetry.", V.cards(['Line symmetry: fold', 'Rotational symmetry: turn'], ['b', 'g'])),
        S("A shape has line symmetry if you can fold it along a line so that the two halves match exactly. The fold line is called a line of symmetry, or a mirror line.", V.rule('Fold it: both halves match.')),
        S("A shape has rotational symmetry if you can turn it round a centre point, less than a full turn, and it fits back onto itself. The number of times it fits during one full turn is called the order.", V.rule('Order: fits in one full turn.'))
      ]),
      SC('Lines of symmetry', 'Example 1: regular polygons', [
        S("A regular polygon has all sides and angles equal. It has as many lines of symmetry as it has sides. A square has four. A regular hexagon has six. An equilateral triangle has three.", E('Regular n-gon: n lines', 'g'))
      ]),
      SC('Order of rotation', 'Example 2: a table', [
        S("Regular polygons also have rotational symmetry equal to their number of sides. A square has order four. A rectangle fits onto itself twice in a full turn, so its order is two. A kite fits only once, so its order is one, and that means no rotational symmetry.", V.tbl([['Square', '4', '4'], ['Rectangle', '2', '2'], ['Rhombus', '2', '2'], ['Kite', '1', '1'], ['Parallelogram', '0', '2']], ['Shape', 'Lines', 'Order']))
      ]),
      SC('Surprise!', 'Example 3: the parallelogram', [
        S("Look at the parallelogram in the table. It has no lines of symmetry. You cannot fold it to match. But it does have rotational symmetry of order two. Turn it half a turn, and it fits.", V.rule('No lines, but order 2.')),
        S("So a shape can have one kind of symmetry without the other. Always check both.", V.rule('Check both kinds.'))
      ]),
      SC('Completing a shape', 'Example 4: reflecting', [
        S("To complete a symmetrical shape, reflect each point across the mirror line. Each point must be the same distance from the line, on the opposite side. Count the squares from the line to the point, then count the same number on the other side.", V.rule('Same distance, other side.'))
      ]),
      SC('Letters', 'Example 5: symmetry in the alphabet', [
        S("Look at capital letters. The letter H has two lines of symmetry and order two. The letter S has no lines, but order two. The letter A has one line and order one.", V.cards(['H: 2 lines, order 2', 'S: 0 lines, order 2', 'A: 1 line, order 1'], ['b', 'p', 'g']))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: drawing a diagonal on a rectangle. A rectangle has only two lines of symmetry. Neither is a diagonal. A diagonal does not fold it onto itself.", r('Rectangle: 4 lines  ✗') + g('Rectangle: 2 lines  ✓')),
        S("Mistake two: forgetting order one. Every shape fits onto itself after a full turn. So the order is always at least one. Order one means no rotational symmetry.", V.rule('Order 1 = none.')),
        S("Mistake three: mixing up lines and order. Lines count the folds. Order counts the turns.", V.cols([V.card('Lines: folds', 'b', true), V.card('Order: turns', 'g', true)], 2))
      ]),
      SC('In real life', 'Logos and patterns', [
        S("Many logos, flags and tiling patterns use symmetry. Recycling signs have order three. Snowflakes have order six. Spotting symmetry helps designers create balanced patterns.", V.note('Symmetry makes things look balanced'))
      ]),
      L.turn("Your turn! Number one. How many lines of symmetry does an equilateral triangle have, and what is its order? Pause and think.", E('?'), "Three lines, and order three.", g('3 lines · order 3')),
      L.turn("Your turn! Number two. What is the order of rotational symmetry of a rhombus? Pause and think.", E('?'), "Half a turn makes it fit. So order two.", g('Order 2')),
      L.turn("Your turn! Number three. Does a regular pentagon have five lines of symmetry? Pause and think.", E('?'), "Yes. A regular polygon has as many lines as sides. Five lines, and order five.", g('Yes: 5 lines')),
      L.rec(T, "Line symmetry means the shape folds onto itself. Rotational symmetry means it fits onto itself as it turns, and the order counts how many times in a full turn. Regular polygons have as many lines and as high an order as they have sides. To complete a shape, reflect each point the same distance from the mirror line.", ['Line: mirror fold', 'Order: fits in one turn', 'Regular n-gon: n and n', 'Complete by reflecting'])
    ]);
  })();

  /* ---- Interpret and describe data ---- */
  (function () {
    var T = 'How do you interpret and describe data?';
    L.full(T, [
      SC('Interpreting data', 'Start with the basics', [
        S("Data is information, like test scores or temperatures. To interpret data means to describe what it shows, compare groups, and draw a conclusion. It is not enough to just give numbers. We say what they mean.", V.list(['Describe the pattern', 'Use an average', 'Use a measure of spread', 'Make a conclusion'])),
        S("An average tells you what is typical. The mean, median and mode are averages. A measure of spread tells you how far the data is stretched out. The range is the highest take away the lowest. A small spread means the data is consistent.", V.cols([V.card('Average: typical value', 'b', true), V.card('Spread: how varied', 'g', true)], 2))
      ]),
      SC('Comparing averages', 'Example 1: two classes', [
        S("Class A has a mean score of sixty-four. Class B has a mean of sixty-nine. Which did better? On average, Class B did better, because its mean is higher.", E('69 > 64', 'g')),
        S("Notice the wording. We say on average. A few students in Class A may have done better than students in Class B.", V.rule('Say “on average”.'))
      ]),
      SC('Comparing spread', 'Example 2: consistency', [
        S("Class A has a range of forty. Class B has a range of fifteen. Class B has the smaller range. So its scores are closer together. They are more consistent.", E('15 < 40') + g('B is more consistent'))
      ]),
      SC('Comparing both', 'Example 3: a full comparison', [
        S("Put both together in a sentence, using context. On average, Class B scored higher than Class A, with a mean of sixty-nine compared with sixty-four. Class B was also more consistent, with a range of fifteen compared with forty.", V.note('One average + one spread + context'))
      ]),
      SC('Reading charts', 'Example 4: trends', [
        S("A line graph shows how something changes over time. Suppose the temperature rises steadily from January to July, and then falls again to December. We describe this as an upward trend in the first half of the year, and a downward trend in the second half.", V.note('Describe the trend in words'))
      ]),
      SC('Misleading graphs', 'Example 5: be careful', [
        S("Charts can mislead. If a bar chart starts its axis at ninety instead of zero, small differences look enormous. A bar for ninety-five looks five times higher than a bar for ninety-one. Always check where the scale starts.", V.rule('Check the scale starts sensibly.'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: only quoting numbers. A conclusion needs words that match the question.", r('69 > 64  ✗') + g('Class B scored higher on average  ✓')),
        S("Mistake two: comparing with only an average. A comparison needs both an average and a spread.", V.rule('Average and spread.')),
        S("Mistake three: saying a bigger range is better. A bigger range means less consistent.", V.rule('Smaller range = more consistent.'))
      ]),
      SC('In real life', 'Choosing a team player', [
        S("A coach compares two goalkeepers. Both save twelve shots per match on average. But one has a range of three, and the other has a range of nine. The coach picks the one with the smaller range, because she can be relied upon every game.", V.note('Reliability needs a small spread'))
      ]),
      L.turn("Your turn! Number one. Team X has a median of twelve goals and a range of three. Team Y has a median of twelve and a range of nine. Compare them. Pause and think.", E('?'), "They score the same on average. But Team X is more consistent, because its range is smaller.", g('Same average · X more consistent')),
      L.turn("Your turn! Number two. A bar chart axis starts at fifty instead of zero. Why is that a problem? Pause and think.", E('?'), "It makes small differences look much bigger than they really are.", g('Exaggerates differences')),
      L.turn("Your turn! Number three. Class P has a mean of seventy and a range of twenty. Class Q has a mean of seventy-five and a range of thirty-five. Which class scored higher, and which was more consistent? Pause and think.", E('?'), "Class Q scored higher on average, because seventy-five is bigger than seventy. Class P was more consistent, because twenty is smaller than thirty-five.", g('Q higher · P more consistent')),
      L.rec(T, "To compare data, use one average and one measure of spread, and say what they mean in context. Describe trends in charts in words. Check the scales of graphs for anything misleading. A smaller spread means more consistent data.", ['Average: which is higher?', 'Spread: which is more consistent?', 'Use context words', 'Check the scales'])
    ]);
  })();
  /* ---- Surds ---- */
  (function () {
    var T = 'Surds';
    L.full(T, [
      SC('Surds', 'Start with the basics', [
        S("Some square roots are whole numbers. The square root of nine is three. The square root of sixteen is four. But the square root of two is not. It goes on forever, one point four one four and so on, without ever repeating.", E('√9 = 3') + E('√2 = 1.41421…', 'b')),
        S("A root like this is called a surd. We keep it as a root, so the answer stays exact. A decimal would only be an approximation.", V.rule('Surd: an exact root that is not a whole number.'))
      ]),
      SC('Simplifying', 'Example 1: √50', [
        S("We can often make a surd simpler. Look for a square number that goes into it. Fifty is twenty-five times two. And twenty-five is a square number.", E('√50 = √25 × √2')),
        S("The square root of twenty-five is five. So we get five root two.", g('√50 = 5√2'))
      ]),
      SC('Simplifying', 'Example 2: √72', [
        S("Try the square root of seventy-two. Which square number goes into seventy-two? Four goes in, but thirty-six goes in too, and it is bigger. Seventy-two is thirty-six times two. Always use the biggest square you can find.", E('√72 = √36 × √2')),
        S("The square root of thirty-six is six. So the answer is six root two.", g('6√2'))
      ]),
      SC('Adding and subtracting', 'Example 3: like surds', [
        S("We can add surds, but only if the part under the root is the same. Three root two plus five root two. Think of it like three apples plus five apples. Eight root two.", g('3√2 + 5√2 = 8√2')),
        S("What about root two plus root three? They are different, so we leave it as it is.", E('√2 + √3   stays', 'b'))
      ]),
      SC('Multiplying', 'Example 4: √3 × √12', [
        S("To multiply surds, multiply the numbers under the root. Root three times root twelve is root thirty-six. And the root of thirty-six is six.", E('√3 × √12 = √36') + g('= 6'))
      ]),
      SC('Rationalising', 'Example 5: no root on the bottom', [
        S("It is tidy not to leave a surd on the bottom of a fraction. Take six over root three. Multiply the top and bottom by root three. This does not change the value, because we are multiplying by one.", E('6/√3 × √3/√3')),
        S("The bottom becomes root three times root three, which is three. The top is six root three. Six over three is two. So the answer is two root three.", g('6√3 ÷ 3 = 2√3'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: adding what is under the root. Root nine plus root sixteen is three plus four, which is seven. It is not root twenty-five, which is five.", r('√9 + √16 = √25  ✗') + g('= 3 + 4 = 7  ✓')),
        S("Mistake two: stopping early. Root eight is two root two, because four goes in. Always check that no square number is left inside.", V.rule('Use the biggest square factor.')),
        S("Mistake three: adding unlike surds. Root two plus root three is not root five.", r('√2 + √3 = √5  ✗'))
      ]),
      SC('In real life', 'Diagonals', [
        S("A square tile has sides of one metre. The diagonal is root two metres, by Pythagoras. A builder keeps it as root two to stay exact, and only rounds to one point four one metres at the end when cutting.", g('Diagonal = √2 ≈ 1.41 m'))
      ]),
      L.turn("Your turn! Number one. Simplify the square root of forty-five. Pause and try it.", E('√45'), "Forty-five is nine times five. The root of nine is three. So three root five.", g('3√5')),
      L.turn("Your turn! Number two. Work out four root three plus two root three. Pause and try it.", E('4√3 + 2√3'), "Six root three.", g('6√3')),
      L.turn("Your turn! Number three. Work out root five times root twenty. Pause and try it.", E('√5 × √20'), "Root one hundred, which is ten.", g('10')),
      L.rec(T, "A surd is an exact root that is not a whole number. Simplify by taking out the biggest square factor. Add or subtract only like surds. Multiply by multiplying under the root. Rationalise a denominator by multiplying top and bottom by the surd.", ['Take out square factors', 'Add like surds only', '√a × √b = √ab', 'Rationalise the denominator'])
    ]);
  })();

  /* ---- Compound growth ---- */
  (function () {
    var T = 'Compound growth and depreciation';
    L.full(T, [
      SC('Compound change', 'Start with the basics', [
        S("Some things grow by a percentage each year, like a population or an investment. Others shrink by a percentage, like the value of a car. This is called compound change, because each change is on the new amount.", V.cols([V.card('Growth', 'g', true), V.card('Depreciation: shrinking', 'r', true)], 2)),
        S("The key is the multiplier. Growth of three per cent each year means the new amount is one hundred and three per cent of the old. That is a multiplier of one point zero three. Shrinking by eighteen per cent means keeping eighty-two per cent, a multiplier of zero point eight two.", E('+3% → × 1.03') + E('−18% → × 0.82')),
        S("To repeat the change for several years, use a power. Multiply the start by the multiplier, raised to the number of years.", E('value = start × multiplierⁿ', 'g'))
      ]),
      SC('Growth', 'Example 1: a town', [
        S("A town has twenty thousand people. It grows by three per cent a year. How many people after five years? The multiplier is one point zero three, and the power is five.", E('20,000 × 1.03⁵')),
        S("On the calculator, one point zero three to the power five is about one point one six one nine. Times twenty thousand is about twenty-three thousand, two hundred. The calculator gives twenty-three thousand one hundred and eighty-five.", g('≈ 23,185 people'))
      ]),
      SC('Depreciation', 'Example 2: a car', [
        S("A car costs sixteen thousand pounds, and loses eighteen per cent of its value each year. What is it worth after three years? The multiplier is zero point eight two. The power is three.", E('16,000 × 0.82³')),
        S("Zero point eight two cubed is about zero point five five one. Times sixteen thousand is about eight thousand eight hundred and twenty-two pounds.", g('≈ £8,822'))
      ]),
      SC('How many years?', 'Example 3: doubling', [
        S("How long does an investment take to double at seven per cent a year? We try different powers of one point zero seven. To the power ten, it is one point nine seven. Not quite two. To the power eleven, it is two point one. That is over two.", E('1.07¹⁰ ≈ 1.97') + E('1.07¹¹ ≈ 2.10')),
        S("So it takes eleven years to double. This trying of values is called trial and improvement.", g('11 years'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: adding the percentages. Three years at eighteen per cent off is not fifty-four per cent off. The amount lost gets smaller each year.", r('3 × 18% = 54%  ✗') + g('× 0.82³  ✓')),
        S("Mistake two: using the rate as the multiplier. For a three per cent rise, use one point zero three, not zero point zero three.", r('× 0.03  ✗') + g('× 1.03  ✓')),
        S("Mistake three: multiplying by the number of years. Use a power, not a times.", r('1.03 × 5  ✗') + g('1.03⁵  ✓'))
      ]),
      SC('In real life', 'Savings and cars', [
        S("The same idea shows up in both savings and cars. Money in a savings account grows, so it is compound growth. A new car loses value quickest in its first year. That is why people buy second-hand cars.", V.note('Same idea, different multiplier'))
      ]),
      L.turn("Your turn! Number one. A painting worth five thousand pounds increases by ten per cent a year. What is it worth after two years? Pause and try it.", E('5,000 × 1.1²'), "One point one squared is one point two one. Five thousand times one point two one is six thousand and fifty pounds.", g('£6,050')),
      L.turn("Your turn! Number two. What multiplier do you use for a twelve per cent decrease? Pause and think.", E('?'), "One hundred minus twelve is eighty-eight. As a decimal, zero point eight eight.", g('0.88')),
      L.turn("Your turn! Number three. A phone worth four hundred pounds loses twenty per cent a year. What is it worth after two years? Pause and try it.", E('400 × 0.8²'), "Zero point eight squared is zero point six four. Four hundred times that is two hundred and fifty-six pounds.", g('£256')),
      L.rec(T, "For compound growth, multiply by one plus the rate for each year. For depreciation, multiply by one minus the rate. Use a power for many years. Each change is on the new amount, so you cannot just add the percentages.", ['Growth: × (1 + r)ⁿ', 'Depreciation: × (1 − r)ⁿ', 'Each year on the new value', 'Trial and improvement for years'])
    ]);
  })();

  /* ---- Compound interest ---- */
  (function () {
    var T = 'Compound interest';
    L.full(T, [
      SC('Compound interest', 'Start with the basics', [
        S("When you save money in a bank, it pays you interest. With simple interest, you are paid on the original amount only. With compound interest, the interest is added to your balance, and next year you earn interest on the bigger balance. In other words, interest on interest.", V.cols([V.card('Simple: on the start amount', 'b', true), V.card('Compound: on the growing balance', 'g', true)], 2)),
        S("The amount after n years is the starting amount, which is called the principal, times one plus the rate, to the power n.", E('A = P × (1 + r)ⁿ', 'g'))
      ]),
      SC('Year by year', 'Example 1: £2,000 at 5%', [
        S("Let's go year by year. You save two thousand pounds at five per cent. After one year, you have two thousand times one point zero five. That is two thousand one hundred pounds.", E('2,000 × 1.05 = 2,100')),
        S("In year two, the interest is on two thousand one hundred. That is two thousand two hundred and five. Year three is two thousand three hundred and fifteen pounds twenty-five.", V.tbl([['1', '£2,100.00'], ['2', '£2,205.00'], ['3', '£2,315.25']], ['Year', 'Balance']))
      ]),
      SC('Using the formula', 'Example 2: one calculation', [
        S("The formula does it all in one go. Two thousand times one point zero five to the power three. That is two thousand three hundred and fifteen pounds twenty-five. The same.", g('2,000 × 1.05³ = £2,315.25')),
        S("The interest earned is the final amount minus the start. Two thousand three hundred and fifteen twenty-five minus two thousand is three hundred and fifteen pounds twenty-five.", E('A − P = £315.25'))
      ]),
      SC('Compared with simple', 'Example 3: the difference', [
        S("With simple interest, five per cent of two thousand is one hundred pounds a year. In three years, that is three hundred pounds. Compound interest gave three hundred and fifteen twenty-five. That is fifteen pounds twenty-five more, and the gap grows every year.", E('Simple: £300') + g('Compound: £315.25'))
      ]),
      SC('Monthly rates', 'Example 4: more often', [
        S("Sometimes interest is added every month. A loan at one per cent a month, for twelve months, uses one point zero one to the power twelve. That is about one point one two seven. So the yearly growth is about twelve point seven per cent, more than twelve.", E('1.01¹² ≈ 1.127') + g('≈ 12.7% a year'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: using the rate as a multiplier. Five per cent is one point zero five, not zero point zero five.", r('× 0.05  ✗') + g('× 1.05  ✓')),
        S("Mistake two: forgetting to subtract the principal when you want the interest. The formula gives the total, not just the interest.", V.rule('Interest = A − P')),
        S("Mistake three: multiplying by the years. Use a power.", r('2,000 × 1.05 × 3  ✗') + g('2,000 × 1.05³  ✓'))
      ]),
      SC('In real life', 'Starting early', [
        S("Compound interest rewards patience. One thousand pounds at five per cent becomes about one thousand six hundred and thirty after ten years. After thirty years, it is more than four thousand three hundred. The longer you leave it, the faster it grows.", V.note('Time is the secret'))
      ]),
      L.turn("Your turn! Number one. Find the value of one thousand pounds after two years at four per cent compound interest. Pause and try it.", E('1,000 × 1.04²'), "One point zero four squared is one point zero eight one six. So one thousand and eighty-one pounds sixty.", g('£1,081.60')),
      L.turn("Your turn! Number two. How much interest was earned? Pause and try it.", E('1,081.60 − 1,000'), "Eighty-one pounds sixty.", g('£81.60')),
      L.turn("Your turn! Number three. What is the multiplier for three point five per cent interest? Pause and think.", E('?'), "One plus zero point zero three five is one point zero three five.", g('1.035')),
      L.rec(T, "Compound interest is added to the balance each period, so you earn interest on interest. Use the amount, times one plus the rate, to the power of the number of periods. Interest earned is the final amount minus the start. It always beats simple interest after the first period.", ['A = P(1 + r)ⁿ', 'Interest on interest', 'More than simple interest', 'Interest = A − P'])
    ]);
  })();

  /* ---- Tax bands ---- */
  (function () {
    var T = 'Tax bands';
    L.full(T, [
      SC('Income tax', 'Start with the basics', [
        S("When people earn money, they pay some of it as income tax. The tax pays for schools, hospitals and roads. The tax is worked out in bands. Each band is a slice of your income, and each slice has its own rate.", V.note('The rates change each year, so these are example figures.')),
        S("The first slice is called the personal allowance. There is no tax on it. Then there is a basic rate band. Then a higher rate band, for income above a limit.", V.cols([V.card('Allowance: 0%', 'g', true), V.card('Basic: 20%', 'b', true), V.card('Higher: 40%', 'p', true)], 3))
      ]),
      SC('Taxable income', 'Example 1: above the allowance', [
        S("Someone earns fifty-five thousand pounds. The allowance is twelve thousand five hundred. Take it away. Fifty-five thousand minus twelve thousand five hundred is forty-two thousand five hundred pounds. That is the taxable income.", g('55,000 − 12,500 = £42,500'))
      ]),
      SC('Two bands', 'Example 2: basic and higher', [
        S("Suppose the first thirty-seven thousand five hundred pounds of taxable income is taxed at twenty per cent. The rest is taxed at forty per cent. How much of the forty-two thousand five hundred is in the higher band? Forty-two thousand five hundred minus thirty-seven thousand five hundred is five thousand pounds.", E('42,500 − 37,500 = 5,000')),
        S("Basic tax is twenty per cent of thirty-seven thousand five hundred. That is seven thousand five hundred. Higher tax is forty per cent of five thousand. That is two thousand. Add them. Nine thousand five hundred pounds.", E('20% × 37,500 = 7,500') + E('40% × 5,000 = 2,000') + g('Total tax = £9,500'))
      ]),
      SC('Effective rate', 'Example 3: the overall percentage', [
        S("What percentage of the whole salary is that? Nine thousand five hundred divided by fifty-five thousand is about zero point one seven. That is about seventeen per cent. This is called the effective rate.", g('9,500 ÷ 55,000 ≈ 17%'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: charging the higher rate on all the income. Only the slice above the limit is taxed at the higher rate.", r('40% × 42,500  ✗') + g('Each band its own rate  ✓')),
        S("Mistake two: forgetting to take away the allowance first.", V.rule('Allowance first.')),
        S("Mistake three: mixing up taxable income with the total. Always say which one you are using.", V.rule('Taxable income ≠ salary'))
      ]),
      SC('In real life', 'Pay rise', [
        S("A pay rise puts a little more income into a higher band. Only that extra slice is taxed at the higher rate. Your take-home pay always goes up when you get a pay rise. A bigger salary never makes you worse off.", V.note('Only the extra slice pays the higher rate'))
      ]),
      L.turn("Your turn! Number one. With a twelve thousand pound allowance and twenty per cent tax, how much tax is due on thirty-two thousand pounds? Pause and try it.", E('32,000 − 12,000 = ?'), "Taxable income is twenty thousand. Twenty per cent of twenty thousand is four thousand pounds.", g('£4,000')),
      L.turn("Your turn! Number two. What is the taxable income of someone earning forty thousand with a twelve thousand five hundred allowance? Pause and try it.", E('40,000 − 12,500'), "Twenty-seven thousand five hundred pounds.", g('£27,500')),
      L.turn("Your turn! Number three. Twenty per cent of the first ten thousand and thirty per cent of the next five thousand. How much tax? Pause and try it.", E('20% × 10,000 + 30% × 5,000'), "Two thousand plus one thousand five hundred. Three thousand five hundred pounds.", g('£3,500')),
      L.rec(T, "Subtract the allowance first. Then tax each slice of income at its own band's rate, and add the amounts. The effective rate is the total tax divided by the total income. Never apply the highest rate to all the income.", ['Allowance: no tax', 'Each band its own rate', 'Add the tax from each band', 'Effective rate = tax ÷ income'])
    ]);
  })();

  /* ---- Density ---- */
  (function () {
    var T = 'Density and other rates';
    L.full(T, [
      SC('Density', 'Start with the basics', [
        S("Which is heavier, a kilogram of feathers or a kilogram of iron? They are the same, of course. But a kilogram of feathers takes up much more space. Density tells us how much mass is packed into each unit of space.", E('Density = Mass ÷ Volume', 'g')),
        S("We often use grams for mass and cubic centimetres for volume. So density is in grams per cubic centimetre. Water has a density of one. Things with a density below one float on water. Things above one sink.", V.cols([V.card('Below 1: floats', 'g', true), V.card('Above 1: sinks', 'b', true)], 2))
      ]),
      SC('Finding density', 'Example 1: a metal block', [
        S("A block has a mass of one thousand three hundred and fifty grams. Its volume is five hundred cubic centimetres. Divide the mass by the volume.", E('1,350 ÷ 500')),
        S("The answer is two point seven grams per cubic centimetre. That is the density of aluminium.", g('2.7 g/cm³'))
      ]),
      SC('Finding mass', 'Example 2: gold', [
        S("Gold has a density of nineteen point three grams per cubic centimetre. What is the mass of ten cubic centimetres? Now we multiply. Mass equals density times volume.", E('M = D × V')),
        S("Nineteen point three times ten is one hundred and ninety-three grams.", g('193 g'))
      ]),
      SC('Finding volume', 'Example 3: ice', [
        S("Ice has a density of zero point nine two. What volume has four hundred and sixty grams of ice? Volume equals mass divided by density.", E('V = M ÷ D')),
        S("Four hundred and sixty divided by zero point nine two is five hundred cubic centimetres.", g('500 cm³'))
      ]),
      SC('The triangle trick', 'A memory aid', [
        S("Here is a helpful trick. Draw a triangle with mass on top, and density and volume at the bottom. Cover the one you want. If you cover density, you see mass over volume. If you cover mass, you see density times volume.", V.cols([V.card('Mass on top', 'b', true), V.card('Density × Volume below', 'g', true)], 2))
      ]),
      SC('Population density', 'Example 4: people per square kilometre', [
        S("Density does not just mean mass. A city has six hundred thousand people, and covers one hundred and twenty square kilometres. The population density is six hundred thousand divided by one hundred and twenty. That is five thousand people per square kilometre.", g('600,000 ÷ 120 = 5,000 per km²'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: dividing the wrong way round. Density is mass divided by volume.", r('V ÷ M  ✗') + g('M ÷ V  ✓')),
        S("Mistake two: mixing units. Grams go with cubic centimetres. Kilograms go with cubic metres.", V.rule('Match the units.')),
        S("Mistake three: forgetting the units in the answer. Write grams per cubic centimetre.", V.rule('g/cm³'))
      ]),
      SC('In real life', 'Floating ships', [
        S("A steel ship floats, even though steel is dense. The ship is mostly air inside. Its overall density is less than water. That is how enormous ships can float.", V.note('Overall density decides'))
      ]),
      L.turn("Your turn! Number one. A stone has a mass of two hundred and forty grams and a volume of eighty cubic centimetres. What is its density? Pause and try it.", E('240 ÷ 80'), "Three grams per cubic centimetre.", g('3 g/cm³')),
      L.turn("Your turn! Number two. A liquid has a density of zero point eight. Find the mass of five hundred cubic centimetres. Pause and try it.", E('0.8 × 500'), "Four hundred grams.", g('400 g')),
      L.turn("Your turn! Number three. A town has twelve thousand people and covers four square kilometres. What is its population density? Pause and try it.", E('12,000 ÷ 4'), "Three thousand people per square kilometre.", g('3,000 per km²')),
      L.rec(T, "Density is mass divided by volume. Rearrange it to find mass, which is density times volume, or volume, which is mass divided by density. Other rates, like population density, divide one quantity by another. Keep the units matching.", ['D = M ÷ V', 'M = D × V', 'V = M ÷ D', 'Units: g/cm³'])
    ]);
  })();

  /* ---- Speed units ---- */
  (function () {
    var T = 'Changing units of speed';
    L.full(T, [
      SC('Speed units', 'Start with the basics', [
        S("Speed can be measured in different units. Cars use miles per hour in the UK, and kilometres per hour in most of the world. Scientists often use metres per second. To change units, we have to change the distance unit and the time unit.", V.cards(['km/h', 'm/s', 'mph'], ['b', 'p', 'g'])),
        S("It sounds hard, but there is a simple rule. To go from kilometres per hour to metres per second, divide by three point six. To go the other way, multiply by three point six.", V.cols([V.card('km/h ÷ 3.6 = m/s', 'g', true), V.card('m/s × 3.6 = km/h', 'b', true)], 2))
      ]),
      SC('Why 3.6?', 'Where the rule comes from', [
        S("Let's see where three point six comes from. One kilometre is one thousand metres. One hour is three thousand six hundred seconds. So one kilometre per hour is one thousand metres in three thousand six hundred seconds.", E('1 km/h = 1,000 m ÷ 3,600 s')),
        S("That is the same as one over three point six metres per second. That is why we divide by three point six.", g('3,600 ÷ 1,000 = 3.6'))
      ]),
      SC('km/h to m/s', 'Example 1: 72 km/h', [
        S("Change seventy-two kilometres per hour to metres per second. Divide by three point six. Seventy-two divided by three point six is twenty.", g('72 ÷ 3.6 = 20 m/s')),
        S("Check by the long way. Seventy-two kilometres is seventy-two thousand metres. Seventy-two thousand divided by three thousand six hundred seconds is twenty. It matches.", E('72,000 ÷ 3,600 = 20 ✓'))
      ]),
      SC('m/s to km/h', 'Example 2: 15 m/s', [
        S("Now change fifteen metres per second to kilometres per hour. Multiply by three point six. Fifteen times three point six is fifty-four.", g('15 × 3.6 = 54 km/h'))
      ]),
      SC('Miles and kilometres', 'Example 3: mph', [
        S("One mile is about one point six kilometres. A speed limit of seventy miles per hour is about seventy times one point six. That is one hundred and twelve kilometres per hour.", g('70 × 1.6 = 112 km/h')),
        S("Going back, one hundred and twelve divided by one point six is seventy. Always multiply to go from miles to kilometres, and divide to come back.", E('112 ÷ 1.6 = 70 ✓'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: multiplying when you should divide. Ask yourself, will the answer be a bigger number or a smaller number? A speed in metres per second is a smaller number than in kilometres per hour.", V.rule('m/s numbers are smaller.')),
        S("Mistake two: only changing one unit. Both the distance and the time must change. That is the whole reason for three point six.", V.rule('Change both units.')),
        S("Mistake three: using sixty instead of three point six. Sixty only changes hours to minutes.", r('÷ 60  ✗') + g('÷ 3.6  ✓'))
      ]),
      SC('In real life', 'Sprinters', [
        S("A top sprinter runs at about ten metres per second. Multiply by three point six. That is thirty-six kilometres per hour, faster than a car in a town.", g('10 × 3.6 = 36 km/h'))
      ]),
      L.turn("Your turn! Number one. Convert thirty-six kilometres per hour to metres per second. Pause and try it.", E('36 ÷ 3.6'), "Ten metres per second.", g('10 m/s')),
      L.turn("Your turn! Number two. Convert twenty metres per second to kilometres per hour. Pause and try it.", E('20 × 3.6'), "Seventy-two kilometres per hour.", g('72 km/h')),
      L.turn("Your turn! Number three. About how many kilometres per hour is thirty miles per hour? Pause and try it.", E('30 × 1.6'), "Forty-eight kilometres per hour.", g('48 km/h')),
      L.rec(T, "Change both the distance unit and the time unit. To go from kilometres per hour to metres per second, divide by three point six. To go back, multiply. A mile is about one point six kilometres. Check that your answer is sensible.", ['km/h ÷ 3.6 = m/s', 'm/s × 3.6 = km/h', 'mph × 1.6 ≈ km/h', 'Check it is sensible'])
    ]);
  })();

  /* ---- Volume of cones and spheres ---- */
  (function () {
    var T = 'Volume of cones and spheres';
    L.full(T, [
      SC('Volume', 'Start with the basics', [
        S("Volume is the amount of space inside a solid. For a prism, we multiply the base area by the height. Cones, pyramids and spheres need their own formulae.", V.tbl([['Cone', '⅓πr²h'], ['Pyramid', '⅓ × base × h'], ['Sphere', '⁴⁄₃πr³']], ['Solid', 'Volume'])),
        S("Here is a nice fact. A cone is exactly one third of a cylinder with the same base and the same height. Fill a cone with water three times, and you fill the cylinder. A pyramid is also one third of a prism.", V.rule('Cone or pyramid = ⅓ of the prism.'))
      ]),
      SC('Cone', 'Example 1: r = 3, h = 10', [
        S("A cone has a radius of three centimetres and a height of ten. Use one third times pi times r squared times h. The radius squared is nine.", E('⅓ × π × 3² × 10')),
        S("A third of nine times ten is thirty. So thirty pi. As a decimal, about ninety-four point two cubic centimetres.", g('30π ≈ 94.2 cm³'))
      ]),
      SC('Pyramid', 'Example 2: square base 6, height 8', [
        S("A pyramid has a square base of side six, and a height of eight. The base area is thirty-six. One third times thirty-six times eight. Thirty-six times eight is two hundred and eighty-eight. A third of that is ninety-six.", g('⅓ × 36 × 8 = 96 cm³'))
      ]),
      SC('Sphere', 'Example 3: r = 6', [
        S("For a sphere of radius six, use four thirds pi r cubed. Six cubed is two hundred and sixteen. Four thirds of two hundred and sixteen is two hundred and eighty-eight. So two hundred and eighty-eight pi.", E('⁴⁄₃ × π × 6³ = 288π')),
        S("On the calculator, that is about nine hundred and four point eight cubic centimetres.", g('≈ 904.8 cm³'))
      ]),
      SC('Hemisphere', 'Example 4: half a sphere', [
        S("A hemisphere is half a sphere. Take the sphere's volume and halve it. Nine hundred and four point eight, divided by two, is four hundred and fifty-two point four cubic centimetres.", g('≈ 452.4 cm³'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: forgetting the one third on a cone or pyramid.", r('πr²h  ✗') + g('⅓πr²h  ✓')),
        S("Mistake two: using the slant height. Volume needs the straight up height, at right angles to the base.", V.rule('Perpendicular height.')),
        S("Mistake three: cubing wrongly. r cubed means r times r times r, not r times three.", r('6³ = 18  ✗') + g('6³ = 216  ✓'))
      ]),
      SC('In real life', 'Ice cream', [
        S("An ice cream cone holds its volume of ice cream, plus a half sphere of ice cream on top. A shop works out how much ice cream each portion needs, using exactly these two formulae.", V.note('Cone + hemisphere'))
      ]),
      L.turn("Your turn! Number one. Find the volume of a cone with radius five and height twelve, in terms of pi. Pause and try it.", E('⅓ × π × 25 × 12'), "Twenty-five times twelve is three hundred. A third is one hundred. So one hundred pi.", g('100π ≈ 314')),
      L.turn("Your turn! Number two. Find the volume of a sphere with radius three, in terms of pi. Pause and try it.", E('⁴⁄₃ × π × 27'), "Four thirds of twenty-seven is thirty-six. So thirty-six pi.", g('36π')),
      L.turn("Your turn! Number three. A pyramid has a base area of forty and height nine. Find its volume. Pause and try it.", E('⅓ × 40 × 9'), "Forty times nine is three hundred and sixty. A third is one hundred and twenty.", g('120')),
      L.rec(T, "Cones and pyramids are one third of the matching cylinder or prism. A sphere's volume is four thirds pi r cubed. A hemisphere is half of that. Always use the perpendicular height.", ['Cone: ⅓πr²h', 'Pyramid: ⅓ base × h', 'Sphere: ⁴⁄₃πr³', 'Hemisphere: half'])
    ]);
  })();

  /* ---- Surface area of cones and spheres ---- */
  (function () {
    var T = 'Surface area of cones and spheres';
    L.full(T, [
      SC('Surface area', 'Start with the basics', [
        S("Surface area is the total area of the outside of a solid. Think of the paper you would need to wrap it. For a cone, there is a curved part and a flat circle at the bottom. A sphere has one curved surface.", V.tbl([['Cone curved', 'πrl'], ['Cone total', 'πrl + πr²'], ['Sphere', '4πr²']], ['Surface', 'Area'])),
        S("In the cone formula, l is the slant height. That is the length from the tip down the sloping side to the edge. It is not the straight up height.", V.rule('l = slant height'))
      ]),
      SC('Slant height', 'Example 1: Pythagoras', [
        S("Often you are given the straight up height, and need to find the slant height. A cone has radius three and height four. The slant height is the longest side of a right-angled triangle. Use Pythagoras.", E('l² = 3² + 4²')),
        S("Nine plus sixteen is twenty-five. The square root of twenty-five is five. The slant height is five.", g('l = 5'))
      ]),
      SC('Cone surface area', 'Example 2: r = 3, l = 5', [
        S("Now find the total surface area. The curved part is pi times r times l. That is pi times three times five. Fifteen pi.", E('πrl = 15π')),
        S("The flat circle on the bottom is pi r squared. That is nine pi. Add them. Twenty-four pi, which is about seventy-five point four square centimetres.", E('πr² = 9π') + g('24π ≈ 75.4 cm²'))
      ]),
      SC('Sphere', 'Example 3: r = 5', [
        S("For a sphere, use four pi r squared. The radius is five. Five squared is twenty-five. Four times twenty-five is one hundred. So one hundred pi, about three hundred and fourteen square centimetres.", g('4π × 25 = 100π ≈ 314 cm²'))
      ]),
      SC('Hemisphere', 'Example 4: a solid half-ball', [
        S("A solid hemisphere has a curved part and a flat circle. The curved part is half a sphere. For radius five, that is fifty pi. The flat circle is pi r squared, twenty-five pi. Add them. Seventy-five pi.", E('50π + 25π') + g('= 75π ≈ 235.6 cm²'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: using the up height instead of the slant height in pi r l.", r('πrh  ✗') + g('πrl  ✓')),
        S("Mistake two: forgetting the flat face on a solid hemisphere or a cone with a base.", V.rule('Add the flat circle.')),
        S("Mistake three: mixing up area and volume. Surface area is in square units. Volume is in cubic units.", V.cols([V.card('Area: cm²', 'b', true), V.card('Volume: cm³', 'g', true)], 2))
      ]),
      SC('In real life', 'Party hats', [
        S("A party hat is a cone with no base. To find how much card is needed, we use only pi r l. A hat with radius six and slant height fifteen needs ninety pi square centimetres of card, about two hundred and eighty-three.", g('π × 6 × 15 = 90π ≈ 283 cm²'))
      ]),
      L.turn("Your turn! Number one. Find the surface area of a sphere with radius two, in terms of pi. Pause and try it.", E('4π × 2²'), "Four times four is sixteen. So sixteen pi.", g('16π ≈ 50.3')),
      L.turn("Your turn! Number two. A cone has radius five and slant height thirteen. Find its curved surface area. Pause and try it.", E('π × 5 × 13'), "Sixty-five pi, about two hundred and four square centimetres.", g('65π ≈ 204 cm²')),
      L.turn("Your turn! Number three. A cone has radius five and height twelve. Find the slant height. Pause and try it.", E('√(5² + 12²)'), "Twenty-five plus a hundred and forty-four is a hundred and sixty-nine. The square root is thirteen.", g('13')),
      L.rec(T, "A cone's curved surface is pi r l, where l is the slant height. Add pi r squared for the base. A sphere's surface area is four pi r squared. Use Pythagoras to find a slant height. Do not forget the flat face on a solid hemisphere.", ['Cone curved: πrl', 'Add the base πr²', 'Sphere: 4πr²', 'Slant height by Pythagoras'])
    ]);
  })();
  /* ---- Common factors and difference of two squares ---- */
  (function () {
    var T = 'Common factors and difference of two squares';
    L.full(T, [
      SC('Factorising', 'Start with the basics', [
        S("Expanding means removing brackets. Factorising is the opposite. It means putting the brackets back. It is like finding the factors of a number, but with letters.", E('3(x + 2) = 3x + 6') + E('3x + 6 = 3(x + 2)', 'g')),
        S("There are two methods in this lesson. First, always look for a common factor. Second, check for something called a difference of two squares.", V.cols([V.card('1. Common factor', 'b', true), V.card('2. Difference of two squares', 'g', true)], 2))
      ]),
      SC('Common factor', 'Example 1: 8x² + 12x', [
        S("Look at the numbers, eight and twelve. The highest number that goes into both is four. Look at the letters. Both terms have at least one x. So the highest common factor is four x.", E('HCF of 8x² and 12x = 4x')),
        S("Write four x outside a bracket. Inside, write what is left. Eight x squared divided by four x is two x. Twelve x divided by four x is three.", g('8x² + 12x = 4x(2x + 3)')),
        S("Check by expanding. Four x times two x is eight x squared. Four x times three is twelve x. It matches.", E('4x × 2x + 4x × 3 ✓'))
      ]),
      SC('Difference of two squares', 'Example 2: x² − 49', [
        S("Here is a special pattern. Something squared, minus something else squared. We call it a difference of two squares. The rule is, a squared minus b squared equals a plus b, times a minus b.", E('a² − b² = (a + b)(a − b)', 'g')),
        S("Look at x squared minus forty-nine. x squared is x squared. And forty-nine is seven squared. So a is x and b is seven.", E('x² − 7²')),
        S("The answer is x plus seven, times x minus seven.", g('(x + 7)(x − 7)'))
      ]),
      SC('With coefficients', 'Example 3: 9y² − 25', [
        S("Nine y squared is three y all squared. Twenty-five is five squared. So a is three y and b is five. The answer is three y plus five, times three y minus five.", E('(3y)² − 5²') + g('(3y + 5)(3y − 5)'))
      ]),
      SC('Both methods', 'Example 4: 2x² − 18', [
        S("Always take out a common factor first. Both terms have a two. Two, bracket, x squared minus nine.", E('2(x² − 9)')),
        S("Now look inside. x squared minus nine is a difference of two squares. Nine is three squared. So the full answer is two, times x plus three, times x minus three.", g('2(x + 3)(x − 3)'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: not taking out the highest common factor. If you only take out two x, you are not finished.", r('8x² + 12x = 2x(4x + 6)  ✗') + g('= 4x(2x + 3)  ✓')),
        S("Mistake two: using the rule on a sum. x squared plus forty-nine cannot be factorised this way. It must be a difference, a minus sign.", r('x² + 49  ✗  not (x + 7)(x + 7)')),
        S("Mistake three: forgetting to check. Expand your brackets. You must get back to where you started.", V.rule('Always check by expanding.'))
      ]),
      SC('In real life', 'Mental arithmetic', [
        S("The pattern gives a trick for mental arithmetic. Fifty-three times forty-seven is fifty plus three, times fifty minus three. That is fifty squared minus three squared. Two thousand five hundred minus nine is two thousand four hundred and ninety-one.", g('53 × 47 = 50² − 3² = 2,491'))
      ]),
      L.turn("Your turn! Number one. Factorise x squared minus one hundred. Pause and try it.", E('x² − 100'), "One hundred is ten squared. So x plus ten, times x minus ten.", g('(x + 10)(x − 10)')),
      L.turn("Your turn! Number two. Factorise six x squared plus nine x. Pause and try it.", E('6x² + 9x'), "The highest common factor is three x. Three x, bracket, two x plus three.", g('3x(2x + 3)')),
      L.turn("Your turn! Number three. Factorise three x squared minus twelve completely. Pause and try it.", E('3x² − 12'), "Take out three. x squared minus four. That is x plus two, times x minus two. So three, times x plus two, times x minus two.", g('3(x + 2)(x − 2)')),
      L.rec(T, "Always take out the highest common factor first. Then look for a difference of two squares. a squared minus b squared is a plus b, times a minus b. Check by expanding. A sum of two squares cannot be factorised this way.", ['HCF first', 'a² − b²', '= (a + b)(a − b)', 'Check by expanding'])
    ]);
  })();

  /* ---- Factorising quadratics ---- */
  (function () {
    var T = 'Factorising quadratics';
    L.full(T, [
      SC('Quadratics', 'Start with the basics', [
        S("A quadratic expression has an x squared term. For example, x squared plus seven x plus twelve. Factorising it means writing it as two brackets multiplied together.", E('x² + 7x + 12', 'b')),
        S("Let's see how brackets expand, to understand the reverse. x plus three, times x plus four. x times x is x squared. Then four x and three x, which makes seven x. And three times four is twelve.", E('(x + 3)(x + 4) = x² + 7x + 12', 'g')),
        S("Look at the numbers. Three and four multiply to make twelve. They add to make seven. That is the secret. To factorise, find two numbers that multiply to give the last number, and add to give the middle number.", V.cols([V.card('Multiply → last', 'b', true), V.card('Add → middle', 'g', true)], 2))
      ]),
      SC('Positive terms', 'Example 1: x² + 7x + 12', [
        S("We need two numbers that multiply to twelve, and add to seven. List the pairs that make twelve. One and twelve, add to thirteen. Two and six, add to eight. Three and four, add to seven. That is the pair.", E('3 × 4 = 12') + E('3 + 4 = 7', 'g')),
        S("So the answer is x plus three, times x plus four.", g('(x + 3)(x + 4)'))
      ]),
      SC('Negative last number', 'Example 2: x² + 2x − 15', [
        S("Now the last number is negative fifteen. The two numbers must have different signs, one positive and one negative. They multiply to negative fifteen, and add to two. Try five and negative three. Five times negative three is negative fifteen. Five plus negative three is two.", E('5 × (−3) = −15') + E('5 + (−3) = 2', 'g')),
        S("So the answer is x plus five, times x minus three.", g('(x + 5)(x − 3)'))
      ]),
      SC('Negative middle', 'Example 3: x² − 9x + 20', [
        S("The last number is positive, but the middle is negative. That means both numbers are negative. They multiply to twenty and add to negative nine. Negative four and negative five work. Negative four times negative five is twenty. Their sum is negative nine.", E('(−4) × (−5) = 20') + E('(−4) + (−5) = −9', 'g')),
        S("The answer is x minus four, times x minus five.", g('(x − 4)(x − 5)'))
      ]),
      SC('Solving', 'Example 4: x² + 2x − 15 = 0', [
        S("Factorising helps us solve equations. We have x plus five, times x minus three, equals zero. If two things multiply to make zero, one of them must be zero.", E('(x + 5)(x − 3) = 0')),
        S("So either x plus five is zero, which gives x equals negative five. Or x minus three is zero, which gives x equals three. There are two solutions.", g('x = −5   or   x = 3'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: getting the signs wrong. Check your two numbers both multiply and add correctly.", V.rule('× to the last, + to the middle.')),
        S("Mistake two: giving only one solution. A quadratic equation usually has two.", V.rule('Two brackets, two answers.')),
        S("Mistake three: not checking. Expand your brackets and make sure you get the original.", V.rule('Expand to check.'))
      ]),
      SC('In real life', 'Areas', [
        S("A rectangular garden has area x squared plus seven x plus twelve square metres. Factorising gives x plus three by x plus four. So the sides are x plus three and x plus four metres. A gardener can then work out the length of fence needed.", g('Sides: (x + 3) and (x + 4)'))
      ]),
      L.turn("Your turn! Number one. Factorise x squared plus x minus twenty. Pause and try it.", E('x² + x − 20'), "We need numbers that multiply to negative twenty and add to one. Five and negative four. So x plus five, times x minus four.", g('(x + 5)(x − 4)')),
      L.turn("Your turn! Number two. Factorise x squared minus seven x plus ten. Pause and try it.", E('x² − 7x + 10'), "Multiply to ten, add to negative seven. Negative two and negative five. So x minus two, times x minus five.", g('(x − 2)(x − 5)')),
      L.turn("Your turn! Number three. Solve x squared minus nine x plus twenty equals zero. Pause and try it.", E('(x − 4)(x − 5) = 0'), "x minus four is zero, or x minus five is zero. So x is four or five.", g('x = 4 or 5')),
      L.rec(T, "To factorise x squared plus b x plus c, find two numbers that multiply to c and add to b. If c is negative, the numbers have different signs. If c is positive, they share the sign of b. Check by expanding. To solve, set each bracket to zero.", ['× to c', '+ to b', 'Watch the signs', 'Each bracket = 0 to solve'])
    ]);
  })();

  /* ---- Equations with fractions ---- */
  (function () {
    var T = 'Equations with fractions';
    L.full(T, [
      SC('Fractions in equations', 'Start with the basics', [
        S("Fractions can make equations look scary. But there is a trick. We multiply to get rid of the fractions. This is called clearing the fractions. Then it is an ordinary equation.", V.rule('Multiply every term to clear the fractions.')),
        S("What do we multiply by? The denominator. If there is more than one denominator, we multiply by the lowest common multiple. The most important rule is to multiply every term, on both sides.", V.rule('Every term. Both sides.'))
      ]),
      SC('One fraction', 'Example 1: x/4 = 7', [
        S("x over four equals seven. Multiply both sides by four. x equals twenty-eight.", E('x/4 = 7') + g('x = 28'))
      ]),
      SC('Fraction plus number', 'Example 2: (x + 3)/5 = 4', [
        S("The whole top is divided by five. Multiply both sides by five. That gives x plus three equals twenty. Subtract three. x equals seventeen.", E('x + 3 = 20') + g('x = 17')),
        S("Check. Seventeen plus three is twenty. Twenty divided by five is four. Correct.", E('20 ÷ 5 = 4 ✓'))
      ]),
      SC('Two fractions', 'Example 3: x/2 + x/3 = 10', [
        S("Two denominators, two and three. The lowest common multiple is six. Multiply every term by six.", E('6 × x/2 + 6 × x/3 = 6 × 10')),
        S("Six times x over two is three x. Six times x over three is two x. And six times ten is sixty. Three x plus two x equals sixty. Five x equals sixty. x is twelve.", E('3x + 2x = 60') + g('x = 12'))
      ]),
      SC('Fractions both sides', 'Example 4: (2x − 1)/3 = (x + 4)/2', [
        S("The denominators are three and two. Multiply both sides by six. On the left, six divided by three is two. So two times two x minus one. On the right, six divided by two is three. So three times x plus four.", E('2(2x − 1) = 3(x + 4)')),
        S("Expand the brackets. Four x minus two equals three x plus twelve. Subtract three x. x minus two equals twelve. Add two. x equals fourteen.", E('4x − 2 = 3x + 12') + g('x = 14'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: not multiplying every term. In x over three plus two, the two must also be multiplied by three.", r('x + 2 = 9 × 3  ✗') + g('x + 6 = 27  ✓')),
        S("Mistake two: forgetting brackets. Two times two x minus one needs brackets, so that both parts get multiplied.", V.rule('Use brackets.')),
        S("Mistake three: adding denominators. x over two plus x over three is not x over five.", r('x/2 + x/3 = x/5  ✗'))
      ]),
      SC('In real life', 'Sharing costs', [
        S("Half of a prize pot goes to the winner, and a third goes to the runner-up. Together they get ten pounds. How big is the pot? x over two plus x over three equals ten. Solving gives x equals twelve. The pot is twelve pounds.", g('x = 12'))
      ]),
      L.turn("Your turn! Number one. Solve x over three plus two equals nine. Pause and try it.", E('x/3 + 2 = 9'), "Subtract two. x over three equals seven. Multiply by three. x is twenty-one.", g('x = 21')),
      L.turn("Your turn! Number two. Solve x over four plus x over two equals six. Pause and try it.", E('x/4 + x/2 = 6'), "Multiply by four. x plus two x equals twenty-four. Three x equals twenty-four. x is eight.", g('x = 8')),
      L.turn("Your turn! Number three. Solve x plus five, over two, equals six. Pause and try it.", E('(x + 5)/2 = 6'), "Multiply by two. x plus five equals twelve. x is seven.", g('x = 7')),
      L.rec(T, "Multiply every term by the lowest common multiple of the denominators to clear the fractions. Use brackets where needed. Then solve as normal, and check by substituting.", ['Find the LCM of denominators', 'Multiply every term', 'Solve as normal', 'Check'])
    ]);
  })();

  /* ---- Changing the subject and inequations ---- */
  (function () {
    var T = 'Changing the subject and inequations';
    L.full(T, [
      SC('Changing the subject', 'Start with the basics', [
        S("In a formula, the subject is the letter on its own on one side. In A equals pi r squared, A is the subject. Changing the subject means rearranging the formula so that a different letter is on its own.", E('A = πr²  →  r = √(A ÷ π)', 'g')),
        S("We use the same method as for solving equations. Do the same to both sides, and undo the operations in reverse order. The only difference is that we are working with letters.", V.rule('Same to both sides. Undo in reverse.'))
      ]),
      SC('One step', 'Example 1: P = 4s', [
        S("The perimeter of a square is four times the side. To make s the subject, undo the multiplying by four. Divide both sides by four. s equals P over four.", g('s = P ÷ 4'))
      ]),
      SC('Two steps', 'Example 2: y = 3x + 5', [
        S("Make x the subject of y equals three x plus five. Undo the plus five first. Subtract five. y minus five equals three x. Then undo the times three. Divide by three.", E('y − 5 = 3x') + g('x = (y − 5) ÷ 3'))
      ]),
      SC('With a square', 'Example 3: A = πr²', [
        S("To make r the subject of A equals pi r squared, divide by pi first. A over pi equals r squared. Now undo the square with a square root. r equals the square root of A over pi.", E('A ÷ π = r²') + g('r = √(A ÷ π)'))
      ]),
      SC('Inequations', 'Example 4: 5 − 2x < 11', [
        S("An inequation uses a sign like less than or greater than instead of equals. We solve it in the same way. But there is one special rule. If you multiply or divide by a negative number, you must flip the sign.", V.rule('Negative × or ÷: flip the sign.')),
        S("Solve five minus two x is less than eleven. Subtract five. Negative two x is less than six. Now divide by negative two. The sign flips. x is greater than negative three.", E('−2x < 6') + g('x > −3'))
      ]),
      SC('Checking an inequation', 'Why flip?', [
        S("Let's check. Try x equals zero, which is bigger than negative three. Five minus zero is five. Five is less than eleven. True. Try x equals negative five, which is smaller than negative three. Five plus ten is fifteen, which is not less than eleven. False. So x greater than negative three is right.", E('x = 0: 5 < 11 ✓') + E('x = −5: 15 < 11 ✗', 'r'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: forgetting to flip the sign when dividing by a negative. This is the most common slip.", V.rule('Divide by a negative: flip.')),
        S("Mistake two: undoing in the wrong order. Undo adding and subtracting first. Then undo multiplying and dividing.", V.rule('Add/subtract first.')),
        S("Mistake three: leaving a part out. In y minus five over three, the five and the y are both divided by three.", V.rule('Brackets: (y − 5) ÷ 3'))
      ]),
      SC('In real life', 'Fuel formula', [
        S("A car uses a formula, D equals M times G, where D is distance, M is miles per gallon, and G is gallons. To find how many gallons you need, make G the subject. G equals D over M. For a journey of three hundred miles at fifty miles per gallon, that is six gallons.", g('G = 300 ÷ 50 = 6'))
      ]),
      L.turn("Your turn! Number one. Make t the subject of v equals u plus a t. Pause and try it.", E('v = u + at'), "Subtract u. v minus u equals a t. Divide by a. t equals v minus u, over a.", g('t = (v − u) ÷ a')),
      L.turn("Your turn! Number two. Solve three x plus two is less than twenty. Pause and try it.", E('3x + 2 < 20'), "Subtract two. Three x is less than eighteen. Divide by three. x is less than six.", g('x < 6')),
      L.turn("Your turn! Number three. Solve ten minus x is greater than four. Pause and try it.", E('10 − x > 4'), "Subtract ten. Negative x is greater than negative six. Multiply by negative one and flip. x is less than six.", g('x < 6')),
      L.rec(T, "Rearrange by undoing the operations in reverse order, doing the same to both sides. To undo a square, use a square root. In inequations, flip the sign when you multiply or divide by a negative. Check with a number.", ['Undo in reverse order', 'Same to both sides', 'Inequation: flip for negatives', 'Check with numbers'])
    ]);
  })();

  /* ---- Parallel and perpendicular ---- */
  (function () {
    var T = 'Parallel and perpendicular lines';
    L.full(T, [
      SC('Gradients', 'Start with the basics', [
        S("The gradient of a line tells us how steep it is. It is the rise divided by the run. In y equals m x plus c, m is the gradient and c is where the line crosses the y-axis.", E('y = mx + c', 'g') + V.cols([V.card('m: gradient', 'b', true), V.card('c: y-intercept', 'p', true)], 2)),
        S("Two special relationships matter. Parallel lines never meet, like railway tracks. They have the same gradient. Perpendicular lines meet at a right angle. Their gradients multiply to give negative one.", V.cards(['Parallel: m₁ = m₂', 'Perpendicular: m₁ × m₂ = −1'], ['b', 'g']))
      ]),
      SC('Parallel', 'Example 1: same gradient', [
        S("y equals three x plus one, and y equals three x minus four. Both have a gradient of three. So they are parallel. They only differ in where they cross the y-axis.", E('m = 3 for both', 'g'))
      ]),
      SC('Perpendicular', 'Example 2: negative reciprocal', [
        S("A line has gradient two. What is the gradient of a perpendicular line? Flip the number upside down, and change the sign. Two is two over one. Flip it. One over two. Change the sign. Negative a half.", E('2 → ½ → −½')),
        S("Check. Two times negative a half is negative one. Correct.", g('2 × (−½) = −1 ✓'))
      ]),
      SC('Another one', 'Example 3: gradient −3', [
        S("What is perpendicular to gradient negative three? Negative three is negative three over one. Flip it. One over negative three. Change the sign. Positive one third.", E('−3 → 1/3', 'g'))
      ]),
      SC('Finding an equation', 'Example 4: through a point', [
        S("Find the line parallel to y equals two x plus one that goes through the point three, eleven. Parallel means the gradient is two. So y equals two x plus c.", E('y = 2x + c')),
        S("Put in the point. x is three and y is eleven. Eleven equals six plus c. So c is five.", E('11 = 6 + c') + g('y = 2x + 5'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: changing only the sign. The perpendicular to gradient two is negative a half, not negative two.", r('−2  ✗') + g('−½  ✓')),
        S("Mistake two: flipping but forgetting the sign change. The perpendicular to a half is negative two, not two.", V.rule('Flip AND change the sign.')),
        S("Mistake three: mixing the two rules. Parallel means equal. Perpendicular means negative reciprocal.", V.cols([V.card('Parallel: equal', 'b', true), V.card('Perpendicular: −1/m', 'g', true)], 2))
      ]),
      SC('In real life', 'Road layouts', [
        S("City planners use these rules. Streets in a grid are parallel to each other, and cross other streets at right angles. On a map with coordinates, the gradient shows whether a new street will be perpendicular to an existing one.", V.note('Maps use gradients'))
      ]),
      L.turn("Your turn! Number one. What is the gradient of a line perpendicular to y equals negative three x plus two? Pause and think.", E('?'), "The negative reciprocal of negative three. One third.", g('⅓')),
      L.turn("Your turn! Number two. Is y equals four x minus one parallel to y equals four x plus six? Pause and think.", E('?'), "Both have gradient four. Yes, they are parallel.", g('Yes')),
      L.turn("Your turn! Number three. Find the line parallel to y equals five x minus two through the point one, nine. Pause and try it.", E('y = 5x + c'), "Put in one and nine. Nine equals five plus c. So c is four. y equals five x plus four.", g('y = 5x + 4')),
      L.rec(T, "Parallel lines share the same gradient. Perpendicular gradients multiply to negative one. To find one, flip the gradient upside down and change the sign. To find an equation through a point, find the gradient, then substitute the point to find c.", ['Parallel: same m', 'Perpendicular: −1/m', 'Substitute a point for c', 'Check with a sketch'])
    ]);
  })();

  /* ---- ax + by = c ---- */
  (function () {
    var T = 'Lines in the form ax + by = c';
    L.full(T, [
      SC('Another form', 'Start with the basics', [
        S("So far we have written lines as y equals m x plus c. But lines can be written another way. a x plus b y equals c. For example, two x plus three y equals twelve. Both forms describe straight lines.", E('2x + 3y = 12', 'b')),
        S("To see the gradient, we rearrange into y equals m x plus c. That is just like changing the subject. We make y the subject.", V.rule('Make y the subject.'))
      ]),
      SC('Rearranging', 'Example 1: 2x + 3y = 12', [
        S("Subtract two x from both sides. Three y equals negative two x plus twelve. Now divide everything by three.", E('3y = −2x + 12')),
        S("y equals negative two thirds x plus four. So the gradient is negative two thirds, and the line crosses the y-axis at four.", g('y = −⅔x + 4'))
      ]),
      SC('Intercepts', 'Example 2: a quick sketch', [
        S("There is a quicker way to draw it. Find where the line crosses each axis. When x is zero, two times zero is zero, so three y equals twelve, and y is four.", E('x = 0 → y = 4')),
        S("When y is zero, two x equals twelve, so x is six. Join zero, four to six, zero. That is the line.", E('y = 0 → x = 6') + g('(0, 4) and (6, 0)'))
      ]),
      SC('Is the point on the line?', 'Example 3: substitute', [
        S("Is the point three, two on the line two x plus three y equals twelve? Put in x equals three and y equals two. Two times three is six. Three times two is six. Six plus six is twelve. Yes. The point is on the line.", E('2(3) + 3(2) = 12 ✓', 'g'))
      ]),
      SC('Another line', 'Example 4: x − 2y = 8', [
        S("Find the gradient of x minus two y equals eight. Subtract x. Negative two y equals negative x plus eight. Divide by negative two. y equals a half x minus four. The gradient is a half. Notice that dividing by a negative changes every sign.", E('−2y = −x + 8') + g('y = ½x − 4'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: forgetting to divide every term. In three y equals negative two x plus twelve, all of the right side is divided by three.", r('y = −2x + 4  ✗') + g('y = −⅔x + 4  ✓')),
        S("Mistake two: sign errors when moving a term across. Subtracting two x gives negative two x.", V.rule('Move it: change the sign.')),
        S("Mistake three: mixing up the two intercepts. Set x to zero to get the y-intercept. Set y to zero to get the x-intercept.", V.cols([V.card('x = 0 → y-intercept', 'b', true), V.card('y = 0 → x-intercept', 'g', true)], 2))
      ]),
      SC('In real life', 'Budget lines', [
        S("A school has twenty pounds to spend. Pencils cost two pounds a pack, and pens cost four pounds a pack. The equation two p plus four n equals twenty shows every possible combination. Ten packs of pencils and no pens, or five packs of pens and no pencils. And many mixes in between.", g('2p + 4n = 20'))
      ]),
      L.turn("Your turn! Number one. Where does five x plus two y equals twenty cross the y-axis? Pause and try it.", E('x = 0'), "Two y equals twenty. y is ten. At zero, ten.", g('(0, 10)')),
      L.turn("Your turn! Number two. Where does it cross the x-axis? Pause and try it.", E('y = 0'), "Five x equals twenty. x is four. At four, zero.", g('(4, 0)')),
      L.turn("Your turn! Number three. Rearrange x plus y equals seven into y equals m x plus c. Pause and try it.", E('x + y = 7'), "Subtract x. y equals negative x plus seven. The gradient is negative one.", g('y = −x + 7')),
      L.rec(T, "Rearrange a x plus b y equals c into y equals m x plus c to read the gradient. Find the intercepts by setting x to zero, then y to zero. Substitute a point to test whether it is on the line.", ['Rearrange for m', 'x = 0 → y-intercept', 'y = 0 → x-intercept', 'Substitute to test'])
    ]);
  })();

  /* ---- Solving by graph ---- */
  (function () {
    var T = 'Solving by graph';
    L.full(T, [
      SC('Simultaneous equations', 'Start with the basics', [
        S("Sometimes we have two equations, with two unknowns, x and y. We want values that work in both equations at the same time. These are called simultaneous equations.", V.list(['Two equations', 'Two unknowns', 'One pair of values that fits both'])),
        S("Here is the picture. Each equation is a straight line. A point on a line fits that equation. A point on both lines fits both. So the solution is where the two lines cross.", V.note('Crossing point = solution'))
      ]),
      SC('Example', 'Example 1: y = x + 1 and y = 7 − x', [
        S("First draw y equals x plus one. It crosses the y-axis at one, and goes up one for each one across. Mark a few points. Zero, one. One, two. Two, three. Three, four.", E('(0,1) (1,2) (2,3) (3,4)')),
        S("Now draw y equals seven minus x. It crosses the y-axis at seven, and goes down as x goes up. Mark a few points. Zero, seven. One, six. Two, five. Three, four.", E('(0,7) (1,6) (2,5) (3,4)')),
        S("Both tables include the point three, four. That is where the lines cross. So x is three and y is four.", g('x = 3, y = 4'))
      ]),
      SC('Check', 'Example 2: substitute', [
        S("Always check in both equations. In y equals x plus one, three plus one is four. True. In y equals seven minus x, seven minus three is four. True. Both work.", E('4 = 3 + 1 ✓') + E('4 = 7 − 3 ✓', 'g'))
      ]),
      SC('No solution', 'Example 3: parallel lines', [
        S("Try y equals two x plus one, and y equals two x minus three. Both have gradient two. They are parallel. They never meet. So there is no solution.", E('Parallel → no solution', 'b'))
      ]),
      SC('Reading carefully', 'Example 4: when it is not neat', [
        S("Sometimes the lines cross between grid lines, so the reading is only approximate. A graph gives a picture, and a good estimate. For an exact answer, we use algebra, which is the next lesson.", V.note('Graphs can be approximate'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: only checking one equation. The point must work in both.", V.rule('Check both.')),
        S("Mistake two: reading x and y the wrong way round. The first number is x, the second is y.", V.rule('(x, y)')),
        S("Mistake three: drawing lines carelessly. Use a ruler, and plot at least three points to check the line is straight.", V.rule('Ruler, three points.'))
      ]),
      SC('In real life', 'Comparing plans', [
        S("Two phone plans. Plan A costs five pounds plus two pounds per gigabyte. Plan B costs a flat eleven pounds. Draw both lines. They cross at three gigabytes. Below three gigabytes plan A is cheaper. Above it, plan B is cheaper.", g('Cross at 3 GB'))
      ]),
      L.turn("Your turn! Number one. The lines y equals two x and y equals x plus three cross where? Pause and think.", E('2x = x + 3'), "Two x equals x plus three, so x is three. y is six. They cross at three, six.", g('(3, 6)')),
      L.turn("Your turn! Number two. Do y equals x plus two and y equals x minus one have a solution? Pause and think.", E('?'), "Both have gradient one. They are parallel. No solution.", g('No solution')),
      L.turn("Your turn! Number three. The lines cross at two, five. What are x and y? Pause and think.", E('(2, 5)'), "x is two and y is five.", g('x = 2, y = 5')),
      L.rec(T, "To solve simultaneous equations by graph, draw both lines and read the crossing point. Check it in both equations. Parallel lines have no solution. Graph readings can be approximate, algebra gives exact answers.", ['Draw both lines', 'Read the crossing point', 'Check in both', 'Parallel: none'])
    ]);
  })();

  /* ---- Elimination ---- */
  (function () {
    var T = 'Solving by elimination';
    L.full(T, [
      SC('Elimination', 'Start with the basics', [
        S("Graphs can be slow and inexact. Algebra is quicker. One algebra method is elimination. We add or subtract the two equations so that one of the letters disappears. Then we solve for the other letter.", E('Add or subtract to remove one letter', 'g')),
        S("The rule is simple. If the matching letters have the same sign, subtract. If they have different signs, add. A helpful memory is, same signs subtract, different signs add.", V.cols([V.card('Same signs: subtract', 'b', true), V.card('Different signs: add', 'g', true)], 2))
      ]),
      SC('Subtracting', 'Example 1: 3x + y = 11 and x + y = 5', [
        S("Both equations have plus y. The same sign, so subtract. Three x minus x is two x. y minus y is nothing. Eleven minus five is six.", E('3x + y = 11') + E('x + y = 5') + E('2x = 6')),
        S("So x is three. Now put x equals three into the second equation. Three plus y equals five. y is two.", g('x = 3, y = 2'))
      ]),
      SC('Adding', 'Example 2: 2x + 3y = 13 and 4x − 3y = −1', [
        S("The y terms are plus three y and minus three y. Different signs, so add. Two x plus four x is six x. Three y minus three y is zero. Thirteen plus negative one is twelve.", E('6x = 12')),
        S("So x is two. Put it in the first equation. Four plus three y equals thirteen. Three y equals nine. y is three.", g('x = 2, y = 3'))
      ]),
      SC('Scaling first', 'Example 3: 2x + y = 7 and 3x + 2y = 12', [
        S("Here nothing matches yet. Make the y coefficients the same. Double the first equation, every term. Four x plus two y equals fourteen.", E('4x + 2y = 14')),
        S("Now both have two y. Same signs, so subtract the second equation. Four x minus three x is x. Fourteen minus twelve is two. So x is two.", E('x = 2')),
        S("Put x equals two in the first original equation. Four plus y equals seven. y is three.", g('x = 2, y = 3'))
      ]),
      SC('Checking', 'Always check', [
        S("Check in the equation you did not use for substitution. Three times two plus two times three is twelve. Correct.", E('3(2) + 2(3) = 12 ✓', 'g'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: adding when you should subtract. Look at the signs of the letter you are eliminating.", V.rule('Same: subtract. Different: add.')),
        S("Mistake two: scaling only some terms. When you double an equation, double every term, including the number on the right.", V.rule('Multiply every term.')),
        S("Mistake three: forgetting to find the second letter. You need both x and y.", V.rule('Find both letters.'))
      ]),
      SC('In real life', 'Shopping', [
        S("Two apples and a pear cost one pound ten. An apple and a pear cost seventy pence. Subtract. One apple costs forty pence. So a pear costs thirty pence. Elimination is how shopkeepers work out unknown prices.", g('Apple 40p, pear 30p'))
      ]),
      L.turn("Your turn! Number one. Solve x plus y equals ten and x minus y equals four. Pause and try it.", E('x + y = 10') + E('x − y = 4'), "Add them. Two x equals fourteen. x is seven. y is three.", g('x = 7, y = 3')),
      L.turn("Your turn! Number two. Solve 2x + y = 9 and x + y = 5. Pause and try it.", E('2x + y = 9') + E('x + y = 5'), "Subtract. x equals four. Then y is one.", g('x = 4, y = 1')),
      L.turn("Your turn! Number three. Solve x + 2y = 8 and 3x − 2y = 4. Pause and try it.", E('x + 2y = 8') + E('3x − 2y = 4'), "The y terms have different signs, so add. Four x equals twelve. x is three. Then three plus two y equals eight, so y is two and a half.", g('x = 3, y = 2.5')),
      L.rec(T, "Make the coefficients of one letter match, by multiplying every term if needed. Subtract if the signs are the same, and add if they differ. Solve for one letter, substitute back to find the other, and check in both equations.", ['Match one coefficient', 'Same signs: subtract', 'Different signs: add', 'Substitute and check'])
    ]);
  })();

  /* ---- Simultaneous equations from problems ---- */
  (function () {
    var T = 'Simultaneous equations';
    L.full(T, [
      SC('Real problems', 'Start with the basics', [
        S("Many real problems have two unknown numbers. To solve them, we write two equations, and solve them together. Here is the plan.", V.list(['Choose two letters', 'Write two equations', 'Eliminate one letter', 'Answer in context'])),
        S("The most important step is the first. Say clearly what each letter stands for, such as let a be the price of an adult ticket in pounds.", E('Let a = adult price (£)', 'b'))
      ]),
      SC('Tickets', 'Example 1: adults and children', [
        S("Two adult tickets and three child tickets cost thirty-one pounds. One adult ticket and two child tickets cost eighteen pounds. Let a be the adult price and c be the child price. Write the equations.", E('2a + 3c = 31') + E('a + 2c = 18')),
        S("Double the second equation. Two a plus four c equals thirty-six. Now subtract the first equation. Four c minus three c is c. Thirty-six minus thirty-one is five.", E('2a + 4c = 36') + g('c = 5')),
        S("Put c equals five in the second equation. a plus ten equals eighteen. a is eight. So adults cost eight pounds, and children cost five pounds.", g('a = £8, c = £5'))
      ]),
      SC('Coins', 'Example 2: count and value', [
        S("A purse has twelve coins. Some are twenty pence, some are fifty pence. They are worth three pounds thirty, that is three hundred and thirty pence. Let x be the number of twenty pences, and y be the number of fifty pences.", E('x + y = 12') + E('20x + 50y = 330')),
        S("Multiply the first by twenty. Twenty x plus twenty y equals two hundred and forty. Subtract that from the second. Thirty y equals ninety. y is three. Then x is nine.", E('30y = 90') + g('9 × 20p and 3 × 50p'))
      ]),
      SC('Checking', 'Example 3: both equations', [
        S("Check with the coins. Nine twenty pences is one hundred and eighty pence. Three fifty pences is one hundred and fifty. One hundred and eighty plus one hundred and fifty is three hundred and thirty. And nine plus three is twelve coins. Correct.", E('180 + 150 = 330 ✓') + E('9 + 3 = 12 ✓', 'g'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: not defining the letters. Always say what x and y stand for.", V.rule('Define the letters.')),
        S("Mistake two: mixing units. In the coins problem, use pence for everything, or pounds for everything.", V.rule('Same units.')),
        S("Mistake three: not answering the question. If the question asks for the cost of an adult ticket, write the answer in pounds, in a sentence.", V.rule('Answer in context.'))
      ]),
      SC('In real life', 'Two numbers', [
        S("Many puzzles are simultaneous equations in disguise. Two numbers add up to twenty and differ by six. Add the equations. Two x equals twenty-six. x is thirteen. y is seven.", E('x + y = 20') + E('x − y = 6') + g('13 and 7'))
      ]),
      L.turn("Your turn! Number one. Two numbers add to twenty-two and differ by four. What are they? Pause and try it.", E('x + y = 22, x − y = 4'), "Add. Two x equals twenty-six. x is thirteen. y is nine.", g('13 and 9')),
      L.turn("Your turn! Number two. A pen and a pencil cost one pound. Two pens and a pencil cost one pound sixty. Find the cost of a pen. Pause and try it.", E('p + n = 100') + E('2p + n = 160'), "Subtract. p is sixty pence. The pencil is forty pence.", g('Pen 60p, pencil 40p')),
      L.turn("Your turn! Number three. Why do we need two equations for two unknowns? Pause and think.", E('?'), "One equation has many answers. A second equation narrows it down to one pair of values.", g('Two unknowns need two equations')),
      L.rec(T, "Define two letters. Write two equations from the information. Solve by elimination or substitution. Then answer the question in context, and check in both equations. You need as many equations as unknowns.", ['Two letters', 'Two equations', 'Eliminate or substitute', 'Check and answer'])
    ]);
  })();
  /* ---- SOH CAH TOA ---- */
  (function () {
    var T = 'SOH CAH TOA';
    L.full(T, [
      SC('Trigonometry', 'Start with the basics', [
        S("Trigonometry connects the angles and sides of right-angled triangles. It lets us find a side we cannot measure, like the height of a tree. First we must name the three sides.", V.cols([V.card('Hypotenuse: longest, opposite the right angle', 'b', true), V.card('Opposite: across from the angle', 'g', true), V.card('Adjacent: next to the angle', 'p', true)], 3)),
        S("The names depend on which angle we are using. The hypotenuse never changes. But the opposite and adjacent swap if you use the other angle. So always mark the angle first.", V.rule('Mark the angle first, then label the sides.')),
        S("There are three ratios. Sine is opposite over hypotenuse. Cosine is adjacent over hypotenuse. Tangent is opposite over adjacent. A memory aid is SOH, CAH, TOA.", V.tbl([['SOH', 'sin = O ÷ H'], ['CAH', 'cos = A ÷ H'], ['TOA', 'tan = O ÷ A']], ['', 'Ratio']))
      ]),
      SC('Opposite from hypotenuse', 'Example 1: sin', [
        S("Angle forty degrees. Hypotenuse twelve. Find the opposite side. We have O and H, so we use SOH. Sine of forty equals opposite over twelve.", E('sin 40° = O ÷ 12')),
        S("To get O on its own, multiply both sides by twelve. O equals twelve times sine of forty. On the calculator, that is about seven point seven one.", g('O = 12 × sin 40° ≈ 7.71'))
      ]),
      SC('Adjacent from hypotenuse', 'Example 2: cos', [
        S("Angle sixty degrees. Hypotenuse ten. Find the adjacent side. We have A and H, so we use CAH. A equals ten times cosine of sixty. Cosine of sixty is a half. So five.", g('A = 10 × cos 60° = 5'))
      ]),
      SC('Opposite from adjacent', 'Example 3: tan', [
        S("Angle thirty-five degrees. Adjacent eight. Find the opposite. We have O and A, so we use TOA. O equals eight times tangent of thirty-five. About five point six.", g('O = 8 × tan 35° ≈ 5.60'))
      ]),
      SC('Finding the hypotenuse', 'Example 4: divide', [
        S("Angle fifty degrees. Opposite nine. Find the hypotenuse. We use SOH. Sine of fifty equals nine over H. Now the unknown is on the bottom. So we divide. H equals nine divided by sine of fifty. About eleven point seven five.", E('sin 50° = 9 ÷ H') + g('H = 9 ÷ sin 50° ≈ 11.75'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: the calculator is not in degrees. Check for the letter D or DEG on the screen. Radians will give a wrong answer.", V.rule('Calculator in degree mode.')),
        S("Mistake two: labelling the sides from the wrong angle. Always mark the angle you are using.", V.rule('Label from the angle.')),
        S("Mistake three: multiplying when the unknown is on the bottom. If the unknown is the denominator, you divide.", V.cols([V.card('Unknown on top: ×', 'g', true), V.card('Unknown on bottom: ÷', 'b', true)], 2))
      ]),
      SC('In real life', 'Ladders', [
        S("A ladder is three metres long and leans at seventy degrees to the ground. How high does it reach? We have the hypotenuse and want the opposite. Three times sine of seventy is about two point eight two metres.", g('3 × sin 70° ≈ 2.82 m'))
      ]),
      L.turn("Your turn! Number one. Angle thirty degrees, hypotenuse twenty. Find the opposite side. Pause and try it.", E('20 × sin 30°'), "Sine of thirty is a half. Twenty times a half is ten.", g('10')),
      L.turn("Your turn! Number two. Which ratio links the opposite and the adjacent? Pause and think.", E('?'), "Tangent. T, O, A.", g('tan')),
      L.turn("Your turn! Number three. Angle forty-five degrees, adjacent six. Find the opposite. Pause and try it.", E('6 × tan 45°'), "Tangent of forty-five is one. So six.", g('6')),
      L.rec(T, "Label the opposite, adjacent and hypotenuse from the angle. Choose the ratio that links the side you know with the side you want. Multiply if the unknown is on top, and divide if it is on the bottom. Check your calculator is in degrees.", ['Label O, A, H', 'Pick SOH, CAH or TOA', 'Unknown on top: ×', 'Unknown on bottom: ÷'])
    ]);
  })();

  /* ---- Finding an angle ---- */
  (function () {
    var T = 'Finding an angle';
    L.full(T, [
      SC('Inverse trigonometry', 'Start with the basics', [
        S("In the last lesson we found sides. Now we find angles. If we know two sides of a right-angled triangle, we can find an angle. We use the inverse button on the calculator.", E('θ = sin⁻¹(O ÷ H)', 'g')),
        S("Think of it as undoing. Sine takes an angle and gives a ratio. Inverse sine takes a ratio and gives back the angle. The buttons are written sine to the minus one, cosine to the minus one and tangent to the minus one.", V.cols([V.card('sin → ratio', 'b', true), V.card('sin⁻¹ → angle', 'g', true)], 2)),
        S("There are three steps. Label the sides you know. Choose the ratio. Then use the inverse function.", V.list(['Label O, A, H', 'Choose SOH, CAH or TOA', 'Divide the two sides', 'Use the inverse button']))
      ]),
      SC('Using tan', 'Example 1: O = 5, A = 5', [
        S("Opposite five, adjacent five. We know O and A, so we use TOA. Tangent of the angle is five over five, which is one. The angle is tan to the minus one of one. Forty-five degrees.", E('tan θ = 5 ÷ 5 = 1') + g('θ = tan⁻¹(1) = 45°'))
      ]),
      SC('Using sin', 'Example 2: O = 7, H = 14', [
        S("Opposite seven, hypotenuse fourteen. We use SOH. Sine of the angle is seven over fourteen, which is a half. The angle is sine to the minus one of a half. Thirty degrees.", E('sin θ = 7 ÷ 14 = 0.5') + g('θ = 30°'))
      ]),
      SC('Using cos', 'Example 3: A = 4, H = 9', [
        S("Adjacent four, hypotenuse nine. We use CAH. Cosine of the angle is four over nine. That is about zero point four four four. Press cosine to the minus one. The angle is about sixty-three point six degrees.", E('cos θ = 4 ÷ 9') + g('θ ≈ 63.6°'))
      ]),
      SC('Real life', 'Example 4: a ramp', [
        S("A ramp rises one point two metres over a horizontal distance of five metres. What angle is it? Rise is opposite. Horizontal distance is adjacent. So we use TOA. Tangent of the angle is one point two over five, which is zero point two four.", E('tan θ = 1.2 ÷ 5 = 0.24')),
        S("Tan to the minus one of zero point two four is about thirteen point five degrees.", g('θ ≈ 13.5°'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: using the normal button, not the inverse. To find an angle, you need sine to the minus one, not sine.", r('sin(0.5)  ✗') + g('sin⁻¹(0.5) = 30°  ✓')),
        S("Mistake two: dividing the sides the wrong way up. For sine, it is opposite divided by hypotenuse.", V.rule('Opposite ÷ hypotenuse, not the other way.')),
        S("Mistake three: not checking if the answer is sensible. In a right-angled triangle, the sine and cosine of an angle are never bigger than one.", V.rule('sin and cos: between 0 and 1.'))
      ]),
      SC('In real life', 'Safe ladders', [
        S("Ladders should lean at about seventy-five degrees. A four metre ladder with its foot one metre from the wall. Adjacent is one, hypotenuse is four. Cosine is a quarter. The angle is about seventy-six degrees. That is safe.", g('cos⁻¹(1 ÷ 4) ≈ 75.5°'))
      ]),
      L.turn("Your turn! Number one. Opposite eight, adjacent eight. What is the angle? Pause and think.", E('tan⁻¹(8 ÷ 8)'), "The ratio is one. Tan to the minus one of one is forty-five degrees.", g('45°')),
      L.turn("Your turn! Number two. Opposite three, hypotenuse six. Find the angle. Pause and try it.", E('sin⁻¹(3 ÷ 6)'), "Three over six is a half. Sine to the minus one of a half is thirty degrees.", g('30°')),
      L.turn("Your turn! Number three. Adjacent five, hypotenuse ten. Find the angle. Pause and try it.", E('cos⁻¹(5 ÷ 10)'), "A half again. Cosine to the minus one of a half is sixty degrees.", g('60°')),
      L.rec(T, "Label the sides you know. Choose the ratio that uses them. Divide to get a number. Then use the inverse function to find the angle. Sine and cosine ratios are always between zero and one in a right-angled triangle.", ['Label O, A, H', 'Choose the ratio', 'Divide the sides', 'Use sin⁻¹, cos⁻¹ or tan⁻¹'])
    ]);
  })();

  /* ---- Circle theorems ---- */
  (function () {
    var T = 'Circle theorems';
    L.full(T, [
      SC('Circle theorems', 'Start with the basics', [
        S("Circles have some beautiful angle rules. These are called circle theorems. First, some words. The centre is the middle. The radius goes from the centre to the edge. The diameter goes across through the centre. The circumference is the edge itself.", V.cols([V.card('Radius', 'b', true), V.card('Diameter = 2 × radius', 'g', true)], 2)),
        S("A chord is a straight line joining two points on the circle. A tangent is a line that just touches the circle at one point. An arc is part of the circumference.", V.cols([V.card('Chord', 'p', true), V.card('Tangent', 'g', true), V.card('Arc', 'b', true)], 3))
      ]),
      SC('The four rules', 'The big list', [
        S("Here are the four rules for this lesson. We will look at each one in turn.", V.list(['Angle in a semicircle = 90°', 'Tangent meets radius at 90°', 'Angle at centre = 2 × angle at edge', 'Angles on the same arc are equal']))
      ]),
      SC('Semicircle', 'Rule 1: angle in a semicircle', [
        S("Draw a triangle inside a circle, with the diameter as one side. The angle at the opposite corner, on the edge, is always ninety degrees. It does not matter where that corner is.", E('Angle in a semicircle = 90°', 'g')),
        S("Example. A triangle in a semicircle has one angle of thirty-five degrees. The angle in the semicircle is ninety. So the third angle is one hundred and eighty minus ninety minus thirty-five. That is fifty-five degrees.", g('180 − 90 − 35 = 55°'))
      ]),
      SC('Tangent', 'Rule 2: tangent and radius', [
        S("A tangent touches the circle at one point. At that point, the radius makes a right angle with the tangent. They are perpendicular.", E('Tangent ⊥ radius', 'g')),
        S("Example. A tangent meets a radius, and the radius makes an angle of thirty degrees with another line from the centre. The angle between the tangent and the radius is ninety. This lets us find missing angles in a triangle.", V.note('Tangent and radius: 90°'))
      ]),
      SC('Centre and edge', 'Rule 3: twice the angle', [
        S("Take two points on the circle, and look at the angle they make at the centre. Then look at the angle they make at a point on the edge. The angle at the centre is always twice the angle at the edge, as long as they are on the same arc.", E('Centre = 2 × edge', 'g')),
        S("If the angle at the edge is forty degrees, the angle at the centre is eighty degrees. If the angle at the centre is one hundred, the angle at the edge is fifty.", E('2 × 40° = 80°') + E('100° ÷ 2 = 50°'))
      ]),
      SC('Same arc', 'Rule 4: equal angles', [
        S("Angles made at the edge by the same two points are equal, as long as they are on the same side. Imagine a chord, and several angles looking at it from the same side of the circle. They are all the same.", E('Same arc → equal angles', 'g'))
      ]),
      SC('Radii make isosceles triangles', 'A handy fact', [
        S("Two radii are equal. So a triangle made of two radii and a chord is isosceles. Its base angles are equal. This fact is used all the time to find missing angles.", V.note('Two radii → isosceles triangle'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: forgetting to give a reason. In these questions, always say which theorem you used.", V.rule('State the theorem.')),
        S("Mistake two: using the centre rule when the angles are on different arcs. Check they stand on the same arc.", V.rule('Same arc.')),
        S("Mistake three: halving and doubling the wrong way. The centre angle is the bigger one.", r('Edge = 2 × centre  ✗') + g('Centre = 2 × edge  ✓'))
      ]),
      L.turn("Your turn! Number one. A triangle is drawn in a semicircle with one angle of thirty-five degrees. What is the third angle? Pause and think.", E('180 − 90 − 35'), "The angle in a semicircle is ninety. So the third is fifty-five degrees.", g('55°')),
      L.turn("Your turn! Number two. The angle at the centre is one hundred and twenty degrees. What is the angle at the edge on the same arc? Pause and try it.", E('120 ÷ 2'), "Half of one hundred and twenty. Sixty degrees.", g('60°')),
      L.turn("Your turn! Number three. What angle does a tangent make with the radius at the point of contact? Pause and think.", E('?'), "Ninety degrees.", g('90°')),
      L.rec(T, "The angle in a semicircle is ninety degrees. A tangent meets a radius at ninety degrees. The angle at the centre is twice the angle at the edge. Angles on the same arc are equal. Two radii make an isosceles triangle. Always state the theorem you use.", ['Semicircle: 90°', 'Tangent ⊥ radius', 'Centre = 2 × edge', 'Radii → isosceles'])
    ]);
  })();

  /* ---- Chords and tangent lengths ---- */
  (function () {
    var T = 'Chords and tangent lengths';
    L.full(T, [
      SC('Chords and tangents', 'Start with the basics', [
        S("A chord is a straight line joining two points on a circle. Here is a useful fact. If you draw a line from the centre, at right angles to a chord, it cuts the chord exactly in half.", V.rule('Perpendicular from the centre bisects the chord.')),
        S("This gives us a right-angled triangle. The radius is the hypotenuse. Half the chord is one short side. The distance from the centre to the chord is the other short side. So we can use Pythagoras.", E('r² = (½ chord)² + d²', 'g'))
      ]),
      SC('Distance to a chord', 'Example 1: radius 10, chord 16', [
        S("A circle has radius ten. A chord is sixteen long. Half the chord is eight. The distance d from the centre is a short side. Hypotenuse squared is one hundred. Eight squared is sixty-four. One hundred minus sixty-four is thirty-six.", E('d² = 10² − 8² = 36')),
        S("The square root of thirty-six is six. The chord is six units from the centre.", g('d = 6'))
      ]),
      SC('Chord length', 'Example 2: radius 13, distance 5', [
        S("Now find the chord. Radius thirteen, and the distance from the centre is five. Half the chord squared is one hundred and sixty-nine minus twenty-five. That is one hundred and forty-four. The root is twelve.", E('13² − 5² = 144') + E('half chord = 12')),
        S("Do not stop there. Twelve is only half. Double it. The chord is twenty-four.", g('Chord = 24'))
      ]),
      SC('Tangent length', 'Example 3: from an outside point', [
        S("A tangent from an outside point touches the circle at one point. The radius to that point is at ninety degrees to the tangent. So we have a right-angled triangle again. The longest side is from the outside point to the centre.", V.note('Radius ⊥ tangent')),
        S("A point is seventeen centimetres from the centre of a circle of radius eight. The tangent length squared is seventeen squared minus eight squared. Two hundred and eighty-nine minus sixty-four is two hundred and twenty-five. The root is fifteen.", E('17² − 8² = 225') + g('Tangent = 15 cm'))
      ]),
      SC('Two tangents', 'Example 4: equal lengths', [
        S("From one outside point, you can draw two tangents to the same circle. They have equal lengths. That is a handy fact to find a missing length.", V.note('Tangents from a point are equal'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: forgetting to double the half-chord. We find half. The question asks for the whole chord.", V.rule('Double the half chord.')),
        S("Mistake two: adding instead of subtracting. When the radius or the longest line is the hypotenuse, we subtract.", V.rule('Hypotenuse² − other²')),
        S("Mistake three: drawing no diagram. Always sketch the right-angled triangle.", V.rule('Sketch the triangle.'))
      ]),
      SC('In real life', 'Bridges', [
        S("The arch of a bridge is part of a circle. Engineers know the width of the arch, which is a chord, and its height. Using these facts, they find the radius of the circle to design the curve.", V.note('Arches use circle geometry'))
      ]),
      L.turn("Your turn! Number one. A chord is six centimetres from the centre of a circle of radius ten. How long is the chord? Pause and try it.", E('2 × √(100 − 36)'), "One hundred minus thirty-six is sixty-four. The root is eight. Double it. Sixteen centimetres.", g('16 cm')),
      L.turn("Your turn! Number two. A point is ten centimetres from the centre of a circle of radius six. Find the tangent length. Pause and try it.", E('√(100 − 36)'), "Sixty-four. The root is eight centimetres.", g('8 cm')),
      L.turn("Your turn! Number three. Two tangents are drawn from a point. One has length seven. How long is the other? Pause and think.", E('?'), "Tangents from a point are equal. Seven.", g('7')),
      L.rec(T, "A perpendicular from the centre bisects a chord. A tangent meets a radius at a right angle. Use Pythagoras in the right-angled triangle, taking care over which side is the hypotenuse. Double the half-chord at the end. Tangents from one point are equal.", ['Centre ⊥ chord bisects it', 'Tangent ⊥ radius', 'Use Pythagoras', 'Equal tangents from a point'])
    ]);
  })();

  /* ---- Similar triangles ---- */
  (function () {
    var T = 'Similar triangles';
    L.full(T, [
      SC('Similar triangles', 'Start with the basics', [
        S("Two shapes are similar if one is an enlargement of the other. They have the same shape but not the same size. For triangles, this means the angles are equal, and the sides are all in the same ratio.", V.note('Equal angles → sides in the same ratio')),
        S("There is a shortcut. If two angles in one triangle equal two angles in another, the triangles are similar. The third angle must be equal too, because angles add up to one hundred and eighty.", V.rule('Two equal angles are enough.'))
      ]),
      SC('Matching sides', 'Example 1: the scale factor', [
        S("Two similar triangles. We match sides that are opposite equal angles. Suppose a side of six matches a side of fifteen. The scale factor is fifteen divided by six. That is two point five.", E('k = 15 ÷ 6') + g('k = 2.5'))
      ]),
      SC('Finding a side', 'Example 2: multiply', [
        S("Another side in the small triangle is four. What is the matching side in the big triangle? Multiply by the scale factor. Four times two point five is ten.", g('4 × 2.5 = 10'))
      ]),
      SC('Going down', 'Example 3: divide', [
        S("If we want to go from the big triangle to the small one, we divide by two point five. A side of twenty-five in the big triangle matches a side of ten in the small one.", E('25 ÷ 2.5 = 10'))
      ]),
      SC('Nested triangles', 'Example 4: parallel lines', [
        S("Sometimes a smaller triangle sits inside a bigger one. This happens when a line is drawn parallel to one side. The two triangles share an angle, and have equal angles from the parallel lines. So they are similar.", V.note('Parallel line → similar triangles')),
        S("Be careful. In the big triangle, use the whole side, not just the bit beyond the parallel line.", V.rule('Use whole side lengths.'))
      ]),
      SC('Shadows', 'Example 5: real life', [
        S("A one point five metre post casts a two metre shadow. At the same time, a tree casts a twelve metre shadow. The sun makes equal angles, so the triangles are similar. The scale factor is twelve over two, which is six. The tree is one point five times six. Nine metres.", g('1.5 × 6 = 9 m'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: matching the wrong sides. Match sides opposite equal angles.", V.rule('Opposite equal angles.')),
        S("Mistake two: adding the same amount to each side. Similar means multiply by the scale factor.", r('+ 4  ✗') + g('× 2.5  ✓')),
        S("Mistake three: nested triangles, using only the small bit. Use the whole side of the big triangle.", V.rule('Whole side.'))
      ]),
      L.turn("Your turn! Number one. A side of eight in one triangle matches a side of twelve in a similar one. A side of ten matches what? Pause and try it.", E('10 × 12 ÷ 8'), "The scale factor is one point five. Ten times one point five is fifteen.", g('15')),
      L.turn("Your turn! Number two. Two triangles have two equal angles. Are they similar? Pause and think.", E('?'), "Yes. Two equal angles are enough, because the third angle is also equal.", g('Yes')),
      L.turn("Your turn! Number three. A tree casts a ten metre shadow. A two metre pole casts a four metre shadow. How tall is the tree? Pause and try it.", E('2 × 10 ÷ 4'), "The scale factor is two and a half. Two times two and a half is five metres.", g('5 m')),
      L.rec(T, "Show that the angles are equal. Match corresponding sides, opposite equal angles. Find the scale factor, which is new divided by old. Then multiply or divide. In nested triangles, use the full side lengths.", ['Equal angles', 'Match corresponding sides', 'k = new ÷ old', '× or ÷ by k'])
    ]);
  })();

  /* ---- Angles of elevation ---- */
  (function () {
    var T = 'Angles of elevation';
    L.full(T, [
      SC('Elevation and depression', 'Start with the basics', [
        S("When you look up at something, the angle your eyes make with the horizontal is called the angle of elevation. When you look down at something, it is called the angle of depression. Both angles are measured from the horizontal line.", V.cards(['Elevation: looking up', 'Depression: looking down'], ['g', 'b'])),
        S("The method is always the same. Draw a right-angled triangle. Mark the horizontal. Mark the angle. Then use SOH CAH TOA.", V.rule('Draw, mark, label, then SOH CAH TOA.'))
      ]),
      SC('Height of a building', 'Example 1: tan', [
        S("You stand forty metres from a building. The angle of elevation to the top is thirty-two degrees. The distance from the building is adjacent. The height is opposite. So we use TOA.", E('tan 32° = h ÷ 40')),
        S("Multiply by forty. h equals forty times tangent of thirty-two. About twenty-five metres.", g('h ≈ 25.0 m'))
      ]),
      SC('Angle of depression', 'Example 2: from a cliff', [
        S("From the top of a cliff sixty metres high, a boat is seen at an angle of depression of twenty degrees. How far out is the boat? Draw the horizontal from the top. The angle of depression is below it.", E('Cliff 60 m, depression 20°')),
        S("Here is the key. The angle of depression equals the angle of elevation from the boat looking up. They are alternate angles. So in the triangle, the angle at the boat is twenty degrees. The cliff is opposite. The distance out is adjacent. TOA again.", E('tan 20° = 60 ÷ d')),
        S("Now the unknown is on the bottom, so rearrange. d equals sixty divided by tangent of twenty. About one hundred and sixty-five metres.", g('d ≈ 165 m'))
      ]),
      SC('Using sine', 'Example 3: a kite', [
        S("A kite string is fifty metres long, at an angle of elevation of thirty degrees. How high is the kite? The string is the hypotenuse. The height is opposite. So we use SOH. Fifty times sine of thirty. Sine of thirty is a half. Twenty-five metres.", g('50 × sin 30° = 25 m'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: measuring the angle from the vertical. Angles of elevation and depression are always from the horizontal.", V.rule('From the horizontal.')),
        S("Mistake two: forgetting your eye height. If the question says you are one point six metres tall, add that to your height answer.", V.rule('Add eye height if given.')),
        S("Mistake three: choosing the wrong ratio. Say which sides you have, then choose.", V.rule('Name the sides first.'))
      ]),
      SC('In real life', 'Lighthouses', [
        S("A lighthouse keeper looks down at a ship at an angle of depression. By measuring this angle and knowing the height of the lighthouse, they can work out exactly how far away the ship is, without leaving the tower.", V.note('Measure an angle, find a distance'))
      ]),
      L.turn("Your turn! Number one. A kite string is fifty metres long at an angle of elevation of thirty degrees. How high is the kite? Pause and try it.", E('50 × sin 30°'), "Fifty times a half. Twenty-five metres.", g('25 m')),
      L.turn("Your turn! Number two. You are ten metres from a tree. The angle of elevation to the top is forty-five degrees. How tall is the tree? Pause and try it.", E('10 × tan 45°'), "Tangent of forty-five is one. Ten metres.", g('10 m')),
      L.turn("Your turn! Number three. Is the angle of depression from the top of a tower to a boat the same as the angle of elevation from the boat to the top? Pause and think.", E('?'), "Yes. They are alternate angles.", g('Yes')),
      L.rec(T, "Draw the right-angled triangle with the horizontal. Mark the angle of elevation or depression. Label the sides, choose SOH, CAH or TOA, and solve. The angle of depression from above equals the angle of elevation from below.", ['Draw the horizontal', 'Mark the angle', 'Label O, A, H', 'Use trigonometry'])
    ]);
  })();

  /* ---- Standard deviation ---- */
  (function () {
    var T = 'Standard deviation';
    L.full(T, [
      SC('Standard deviation', 'Start with the basics', [
        S("The range tells us how spread out data is, but it only uses two values. Standard deviation uses all the data. It measures how far the values are from the mean, on average. A small standard deviation means the data is close to the mean. A big one means it is spread out.", V.cards(['Small: consistent', 'Large: spread out'], ['g', 'b'])),
        S("There are four steps. Find the mean. Find how far each value is from the mean, and square it. Add up the squares, and divide by n minus one. Then take the square root.", V.list(['Find the mean', 'Square each distance from the mean', 'Add and divide by n − 1', 'Square root']))
      ]),
      SC('Step 1', 'Example: 4, 6, 8, 10', [
        S("Our data is four, six, eight, ten. Four values. Add them up. That is twenty-eight. Divide by four. The mean is seven.", E('mean = 28 ÷ 4') + g('mean = 7'))
      ]),
      SC('Step 2', 'Squared distances', [
        S("How far is each value from seven? Four is three below, so negative three. Six is negative one. Eight is one. Ten is three. Now square each distance. This makes them all positive. Nine, one, one, nine.", V.tbl([['4', '−3', '9'], ['6', '−1', '1'], ['8', '1', '1'], ['10', '3', '9']], ['Value', 'Distance', 'Squared'])),
        S("Add the squares. Nine plus one plus one plus nine is twenty.", g('Sum = 20'))
      ]),
      SC('Step 3', 'Divide and root', [
        S("Divide by n minus one. There are four values, so n minus one is three. Twenty divided by three is six point six seven.", E('20 ÷ 3 ≈ 6.67')),
        S("Now square root. The square root of six point six seven is about two point five eight. That is the standard deviation. On the calculator, you can enter the data and press the standard deviation button, the one marked s or sigma x minus one.", g('s ≈ 2.58'))
      ]),
      SC('Comparing', 'Two machines', [
        S("Machine A fills bottles with a mean of five hundred millilitres, and a standard deviation of two. Machine B also has a mean of five hundred, but its standard deviation is eight. Which is more reliable? Machine A, because its standard deviation is smaller. Its bottles are all close to five hundred.", E('2 < 8') + g('A is more consistent'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: forgetting to square, or squaring and then forgetting the square root at the end.", V.rule('Square, add, divide, square root.')),
        S("Mistake two: dividing by n instead of n minus one, when the course asks for the sample standard deviation.", V.rule('Divide by n − 1.')),
        S("Mistake three: comparing only the means. When comparing, say something about both the average and the spread.", V.rule('Mean and standard deviation.'))
      ]),
      SC('In real life', 'Quality control', [
        S("Factories check their products. If a machine makes screws with a mean length of twenty millimetres, the standard deviation tells them how many screws are likely to be too short or too long. A small standard deviation means almost all screws are right.", V.note('Small s means reliable'))
      ]),
      L.turn("Your turn! Number one. Two classes have the same mean, but standard deviations of four and ten. Which is more consistent? Pause and think.", E('?'), "The class with standard deviation four. It is smaller.", g('s = 4')),
      L.turn("Your turn! Number two. Data: two, four, six. The mean is four. Find the sum of the squared distances. Pause and try it.", E('(−2)² + 0² + 2²'), "Four plus zero plus four is eight.", g('8')),
      L.turn("Your turn! Number three. Use that to find the standard deviation. Pause and try it.", E('√(8 ÷ 2)'), "Eight divided by two is four. The square root is two.", g('s = 2')),
      L.rec(T, "Find the mean. Find the distance of each value from the mean and square it. Add them up, divide by n minus one, and take the square root. A smaller standard deviation means more consistent data. Compare means and standard deviations together, in context.", ['Find the mean', 'Square each distance', 'Sum ÷ (n − 1)', 'Square root'])
    ]);
  })();

  /* ---- Quartiles and box plots ---- */
  (function () {
    var T = 'Quartiles and box plots';
    L.full(T, [
      SC('Box plots', 'Start with the basics', [
        S("A box plot is a neat picture of how data is spread. It uses five numbers. The smallest value, the lower quartile, the median, the upper quartile, and the largest value.", V.cards(['Min', 'Q1', 'Median', 'Q3', 'Max'], ['b', 'p', 'g', 'p', 'b'], true)),
        S("The median is the middle value. It splits the data in two halves. The lower quartile, Q1, is the middle of the lower half. The upper quartile, Q3, is the middle of the upper half. Each quarter of the data lies between these numbers.", V.rule('Quartiles split the data into four equal parts.'))
      ]),
      SC('Finding the five numbers', 'Example 1: 2, 4, 5, 7, 9, 11, 14', [
        S("The data is already in order. There are seven values. The smallest is two. The largest is fourteen. The median is the middle, the fourth value. That is seven.", E('Min = 2') + E('Max = 14') + E('Median = 7')),
        S("Now the lower half. These are the numbers below the median. Two, four, five. The middle one is four. That is Q1. The upper half is nine, eleven, fourteen. The middle is eleven. That is Q3.", E('Q1 = 4') + E('Q3 = 11')),
        S("So the five numbers are two, four, seven, eleven, fourteen.", g('2, 4, 7, 11, 14'))
      ]),
      SC('Interquartile range', 'Example 2: the spread of the middle half', [
        S("The interquartile range is Q3 minus Q1. Eleven minus four is seven. It tells us how spread out the middle half of the data is. It is not affected by extreme values.", E('IQR = 11 − 4') + g('IQR = 7'))
      ]),
      SC('Drawing it', 'Example 3: box and whiskers', [
        S("Draw a number line. Draw a box from Q1 to Q3. Draw a line inside the box at the median. Then draw lines, called whiskers, from the box out to the smallest and largest values.", V.note('Box: Q1 to Q3  ·  Whiskers: min and max'))
      ]),
      SC('Comparing', 'Example 4: two box plots', [
        S("To compare two box plots, compare the medians to see which is typically higher. Then compare the interquartile ranges. A shorter box means more consistent data.", V.cols([V.card('Median: typical value', 'b', true), V.card('IQR: consistency', 'g', true)], 2)),
        S("For example, class A has a median of sixty and an IQR of ten. Class B has a median of fifty-five and an IQR of twenty. Class A scored higher on average, and was more consistent.", g('A: higher and more consistent'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: not ordering the data first. Always put the numbers in order before you find any of the five numbers.", V.rule('Order first.')),
        S("Mistake two: including the median in the halves when there is an odd number of values. Leave it out.", V.rule('Odd n: leave the median out.')),
        S("Mistake three: drawing the boxes on different scales. To compare box plots, use the same axis.", V.rule('Same scale.'))
      ]),
      SC('In real life', 'Test results', [
        S("Schools use box plots to compare results between classes. A box plot shows the typical score and the spread in one small picture, so teachers can see at a glance how two classes compare.", V.note('One picture, five numbers'))
      ]),
      L.turn("Your turn! Number one. Q1 is twelve and Q3 is twenty. What is the interquartile range? Pause and try it.", E('20 − 12'), "Eight.", g('8')),
      L.turn("Your turn! Number two. Find the median of three, five, six, eight, ten. Pause and try it.", E('3, 5, 6, 8, 10'), "The middle value is six.", g('6')),
      L.turn("Your turn! Number three. A box plot has a shorter box than another. What does that tell you? Pause and think.", E('?'), "Its data is more consistent.", g('More consistent')),
      L.rec(T, "Order the data. Find the minimum, Q1, median, Q3 and maximum. Draw the box from Q1 to Q3, and whiskers to the extremes. The interquartile range is Q3 minus Q1. Compare medians for the typical value, and interquartile ranges for consistency.", ['Order the data', 'Five-number summary', 'Box Q1 to Q3', 'Compare median and IQR'])
    ]);
  })();

  /* ---- Vectors as journeys ---- */
  (function () {
    var T = 'Vectors as journeys';
    L.full(T, [
      SC('Vectors', 'Start with the basics', [
        S("A vector describes a movement. It has a size and a direction. We write it as a column of two numbers. The top number says how far across, and the bottom number says how far up.", E('(3, 2) means 3 right, 2 up', 'g')),
        S("Negative numbers mean the other way. A negative top number is left. A negative bottom number is down.", V.cols([V.card('Positive across: right', 'g', true), V.card('Negative across: left', 'b', true)], 2))
      ]),
      SC('Reading a vector', 'Example 1', [
        S("The vector five, negative one. Five across is five right. Negative one up is one down. So it is five right and one down.", g('(5, −1): 5 right, 1 down'))
      ]),
      SC('Adding vectors', 'Example 2: one journey after another', [
        S("Walk three right and two up. Then walk one right and four up. In total you have gone four right and six up. To add vectors, add the tops, and add the bottoms.", E('(3, 2) + (1, 4)') + g('= (3 + 1, 2 + 4) = (4, 6)'))
      ]),
      SC('Multiplying by a number', 'Example 3: scaling', [
        S("Two times the vector three, two. Multiply both numbers by two. Six, four. It is twice as long, and goes in the same direction.", g('2 × (3, 2) = (6, 4)'))
      ]),
      SC('Negative vectors', 'Example 4: going back', [
        S("The negative of three, two is negative three, negative two. It is the same size, but goes the opposite way. It takes you back to where you started.", E('(3, 2) + (−3, −2) = (0, 0)', 'g'))
      ]),
      SC('Subtracting', 'Example 5: a take away', [
        S("To subtract, take away both parts. Five, four minus two, one. Five minus two is three. Four minus one is three. The answer is three, three.", g('(5, 4) − (2, 1) = (3, 3)'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: writing the numbers the wrong way round. Across is on top, up is on the bottom.", V.rule('Across on top, up below.')),
        S("Mistake two: adding the top of one to the bottom of the other. Add tops with tops and bottoms with bottoms.", V.rule('Tops with tops.')),
        S("Mistake three: forgetting the sign of a negative component when you add.", V.rule('Mind the signs.'))
      ]),
      SC('In real life', 'Navigation', [
        S("A boat sails five kilometres east and two north. Then three east and one south. The total journey is five plus three, which is eight east. And two minus one, which is one north. Pilots and sailors add vectors like this all the time.", g('(5, 2) + (3, −1) = (8, 1)'))
      ]),
      L.turn("Your turn! Number one. Add the vectors two, negative three and negative five, one. Pause and try it.", E('(2, −3) + (−5, 1)'), "Two plus negative five is negative three. Negative three plus one is negative two.", g('(−3, −2)')),
      L.turn("Your turn! Number two. Work out three times the vector two, negative one. Pause and try it.", E('3 × (2, −1)'), "Six, negative three.", g('(6, −3)')),
      L.turn("Your turn! Number three. Describe the vector negative four, two in words. Pause and think.", E('(−4, 2)'), "Four left and two up.", g('4 left, 2 up')),
      L.rec(T, "A vector gives movement across and up, written as a column. Add vectors by adding the tops and adding the bottoms. Multiplying by a number scales the vector. A negative vector goes the opposite way.", ['(across, up)', 'Add tops, add bottoms', '× k: k times as long', 'Negative: opposite way'])
    ]);
  })();

  /* ---- Magnitude of a vector ---- */
  (function () {
    var T = 'The magnitude of a vector';
    L.full(T, [
      SC('Magnitude', 'Start with the basics', [
        S("The magnitude of a vector is its length. How long is the movement, in a straight line? The across part and the up part make the two short sides of a right-angled triangle. The straight line is the hypotenuse. So we use Pythagoras.", E('|(a, b)| = √(a² + b²)', 'g')),
        S("The magnitude is written with two straight lines either side of the vector.", V.rule('|v| means the length of v'))
      ]),
      SC('A 3-4-5 vector', 'Example 1', [
        S("The vector three, four. Three squared is nine. Four squared is sixteen. Nine plus sixteen is twenty-five. The square root is five.", E('3² + 4² = 25') + g('|(3, 4)| = 5'))
      ]),
      SC('With negatives', 'Example 2: (−6, 8)', [
        S("The vector negative six, eight. Negative six squared is thirty-six. A negative squared becomes positive. Eight squared is sixty-four. Add. One hundred. The square root is ten.", E('(−6)² + 8² = 100') + g('Magnitude = 10'))
      ]),
      SC('Not a whole number', 'Example 3: (2, 5)', [
        S("The vector two, five. Four plus twenty-five is twenty-nine. The square root of twenty-nine is not a whole number. We can leave it as root twenty-nine, or give about five point three nine.", E('√29 ≈ 5.39', 'g'))
      ]),
      SC('Distance between points', 'Example 4: from A to B', [
        S("Point A is at one, two. Point B is at seven, ten. The vector from A to B is B minus A. Seven minus one is six. Ten minus two is eight. So six, eight.", E('(7 − 1, 10 − 2) = (6, 8)')),
        S("The distance is the magnitude. Thirty-six plus sixty-four is one hundred. The root is ten. A and B are ten units apart.", g('Distance = 10'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: adding the parts instead of using Pythagoras. The magnitude of three, four is five, not seven.", r('3 + 4 = 7  ✗') + g('√25 = 5  ✓')),
        S("Mistake two: forgetting the square root at the end.", r('25  ✗') + g('5  ✓')),
        S("Mistake three: squaring a negative wrongly. Negative six squared is thirty-six, not negative thirty-six.", V.rule('(−6)² = 36'))
      ]),
      SC('In real life', 'Shortest distance', [
        S("A drone flies five metres east and twelve metres north. The straight line back to the start is thirteen metres. That is the magnitude. It is the shortest way home.", g('√(25 + 144) = 13 m'))
      ]),
      L.turn("Your turn! Number one. Find the magnitude of five, twelve. Pause and try it.", E('√(25 + 144)'), "Twenty-five plus one hundred and forty-four is one hundred and sixty-nine. The root is thirteen.", g('13')),
      L.turn("Your turn! Number two. Find the magnitude of negative eight, six. Pause and try it.", E('√(64 + 36)'), "A hundred. The root is ten.", g('10')),
      L.turn("Your turn! Number three. Find the distance from the point zero, zero to the point nine, twelve. Pause and try it.", E('√(81 + 144)'), "Two hundred and twenty-five. The root is fifteen.", g('15')),
      L.rec(T, "Square the components, add them, and take the square root. Negative components give the same magnitude, because squaring removes the sign. The distance between two points is the magnitude of the vector between them.", ['Square each part', 'Add', 'Square root', 'Distance between points'])
    ]);
  })();
})();
