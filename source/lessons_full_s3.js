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
})();
