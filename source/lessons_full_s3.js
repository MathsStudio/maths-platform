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
        S("Imagine you want to write 2 times 2 times 2 times 2 times 2. It is long. There is a short way to write it. We write 2 to the power 5. This short way is called a power.", E('2 × 2 × 2 × 2 × 2 = 2⁵', 'g')),
        S("A power has 2 parts. The big number at the bottom is called the base. It is the number we multiply. The small raised number is called the index. It tells us how many times the base is written in the multiplication.", E('3⁴') + V.cols([V.card('Base: 3', 'b', true), V.card('Index: 4', 'g', true)], 2)),
        S("So 3 to the power 4 means 4 threes multiplied together. 3 times 3 times 3 times 3.", E('3⁴ = 3 × 3 × 3 × 3', 'b'))
      ]),
      SC('Evaluating powers', 'Example 1: 3⁴', [
        S("Let's work out 3 to the power 4, 1 step at a time. 3 times 3 is 9. 9 times 3 is 27. 27 times 3 is 81.", E('3 × 3 = 9') + E('9 × 3 = 27') + E('27 × 3 = 81')),
        S("So 3 to the power 4 is 81. Notice that we multiplied 4 threes, but we only did 3 multiplications.", g('3⁴ = 81'))
      ]),
      SC('Evaluating powers', 'Example 2: more powers', [
        S("2 to the power 7. Keep doubling. 2, 4, 8, 16, 32, 64, 128. That is 7 twos.", E('2, 4, 8, 16, 32, 64, 128') + g('2⁷ = 128')),
        S("Some powers have special names. Squared means to the power 2. Cubed means to the power 3. 5 cubed is 5 times 5 times 5. That is 125.", g('5³ = 5 × 5 × 5 = 125')),
        S("10 to the power 5 is 10 times itself 5 times. Every time you multiply by 10, you add a 0. So 10 to the power 5 is 100,000.", g('10⁵ = 100,000'))
      ]),
      SC('Writing a number as a power', 'Example 3: 64', [
        S("Now the other way. Can we write 64 as a power? Try the base 2. 2, 4, 8, 16, 32, 64. That took 6 twos. So 64 is 2 to the power 6.", E('64 = 2⁶', 'g')),
        S("But we can use other bases too. 4 times 4 times 4 is 64. So 64 is also 4 cubed. And 8 times 8 is 64, so it is also 8 squared. A number can have several forms.", E('64 = 2⁶ = 4³ = 8²', 'g'))
      ]),
      SC('Powers of ten', 'Place value', [
        S("Powers of 10 are very useful. 10 squared is 100. 10 cubed is 1,000. 10 to the power 6 is 1 million. The index tells you how many zeros follow the one.", E('10² = 100') + E('10³ = 1,000') + E('10⁶ = 1,000,000'))
      ]),
      SC('Using a calculator', 'The power key', [
        S("A calculator has a power key. It might look like x to the y, or a little hat. To work out 1.5 to the power 4, type 1.5, press the power key, type 4, and press equals. The answer is 5.0625.", g('1.5⁴ = 5.0625')),
        S("You can check this by hand. 1.5 squared is 2.25. And 2.25 squared is 5.0625.", E('1.5² = 2.25') + E('2.25² = 5.0625'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: multiplying the base by the index. 2 to the power 7 is not 2 times 7. It is 2 multiplied by itself 7 times.", r('2⁷ = 14  ✗') + g('2⁷ = 128  ✓')),
        S("Mistake two: squaring a number by doubling it. 3 squared is 3 times 3, which is 9. It is not 6.", r('3² = 6  ✗') + g('3² = 9  ✓')),
        S("Mistake three: mixing up the base and the index. 2 to the power 3 is 8. 3 to the power 2 is 9. They are different.", E('2³ = 8') + E('3² = 9'))
      ]),
      SC('In real life', 'Doubling', [
        S("A bacterium splits in 2 every hour. After 1 hour there are 2. After 2 hours there are 4. After 10 hours there are 2 to the power 10, which is 1,024 bacteria. 1 bacterium becomes more than a thousand in just 10 hours.", g('2¹⁰ = 1,024'))
      ]),
      L.turn("Your turn! Number one. Write 243 as a power of 3. Pause and try it.", E('243 = 3^?'), "Keep multiplying by 3. 3, 9, 27, 81, 243. That is 5 threes. So 3 to the power 5.", g('243 = 3⁵')),
      L.turn("Your turn! Number two. What is 4 to the power 3? Pause and try it.", E('4³'), "4 times 4 is 16. 16 times 4 is 64.", g('4³ = 64')),
      L.turn("Your turn! Number three. Write 1,000 as a power of 10. Pause and try it.", E('1,000 = 10^?'), "1,000 has 3 zeros after the one. So 10 to the power 3.", g('10³')),
      L.rec(T, "A power multiplies the base by itself as many times as the index says. To write a number as a power, keep multiplying by the base, and count. Some numbers can be written as a power in more than one way. Take care. The index counts the multiplications, it is not multiplied.", ['Base and index', 'aⁿ: a × a × … n times', 'Divide or multiply repeatedly to find n', 'Some numbers have several forms'])
    ]);
  })();

  /* ---- Prime factors ---- */
  (function () {
    var T = 'How do you write a number as a product of its prime factors?';
    L.full(T, [
      SC('Prime factors', 'Start with the basics', [
        S("First, what is a prime number? A prime number has exactly 2 factors: 1, and itself. 2, 3, 5, 7, 11 and 13 are all prime. 9 is not prime, because 3 goes into it.", E('2, 3, 5, 7, 11, 13, 17, 19 …', 'b')),
        S("The number one is not prime, because it only has 1 factor. And 2 is the only even prime number.", V.rule('Prime: exactly 2 factors.')),
        S("Here is a wonderful fact. Every whole number bigger than 1 can be written as a product of primes, in exactly one way. Primes are the building blocks of all numbers. A product just means a multiplication.", E('90 = 2 × 3 × 3 × 5', 'g'))
      ]),
      SC('The factor tree', 'Example 1: 90', [
        S("A factor tree is one way to find the prime factors. Start with 90. Split it into any 2 factors. 9 times 10 works.", E('90 = 9 × 10')),
        S("Neither 9 nor 10 is prime, so we keep splitting. 9 is 3 times 3. 10 is 2 times 5. Now 3, 3, 2 and 5 are all prime, so we stop.", E('9 = 3 × 3') + E('10 = 2 × 5')),
        S("So 90 is 2 times 3 times 3 times 5. We usually write the primes in order, and use a power for repeats. 3 times 3 is 3 squared.", g('90 = 2 × 3² × 5'))
      ]),
      SC('Repeated division', 'Example 2: 168', [
        S("The other method is repeated division. Divide by the smallest prime that goes in, again and again. 168 divided by 2 is 84. 84 divided by 2 is 42. 42 divided by 2 is 21.", E('168 ÷ 2 = 84') + E('84 ÷ 2 = 42') + E('42 ÷ 2 = 21')),
        S("2 does not go into 21, so try 3. 21 divided by 3 is 7. 7 is prime, so we stop.", E('21 ÷ 3 = 7') + E('7 is prime')),
        S("We divided by 2 3 times, by 3 once, and finished with 7. So 168 is 2 cubed times 3 times 7.", g('168 = 2³ × 3 × 7')),
        S("Check it by multiplying back. 8 times 3 is 24. 24 times 7 is 168. It works.", E('8 × 3 × 7 = 168 ✓'))
      ]),
      SC('HCF from prime factors', 'Example 3: 90 and 168', [
        S("Prime factors give us a neat way to find the highest common factor. Write both numbers as products of primes. 90 is 2 times 3 squared times 5. 168 is 2 cubed times 3 times 7.", E('90 = 2 × 3² × 5') + E('168 = 2³ × 3 × 7')),
        S("The common factors are the primes that appear in both. Both have a 2. Both have a 3. Take the lowest power of each. 1 2, and 1 3. Multiply them. 2 times 3 is 6.", g('HCF = 2 × 3 = 6'))
      ]),
      SC('LCM from prime factors', 'Example 4: 90 and 168', [
        S("For the lowest common multiple, we use every prime that appears in either number, with the highest power of each. The highest power of 2 is 2 cubed. The highest power of 3 is 3 squared. 5 and 7 appear once each.", E('2³ × 3² × 5 × 7')),
        S("Multiply them. 8 times 9 is 72. 72 times 5 is 360. 360 times 7 is 2,000, 520.", g('LCM = 2,520'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: stopping before all the factors are prime. If you write 90 as 9 times 10, you are not finished. 9 and 10 are not prime.", r('90 = 9 × 10  ✗') + g('90 = 2 × 3² × 5  ✓')),
        S("Mistake two: thinking 1 is prime. It is not. It has only one factor. Never put 1 in a list of prime factors.", V.rule('One is not prime.')),
        S("Mistake three: forgetting to use powers. 2 times 2 times 2 should be written as 2 cubed. It saves space, and it makes comparing easier.", E('2 × 2 × 2 × 3 = 2³ × 3', 'g'))
      ]),
      SC('In real life', 'Secret codes', [
        S("When you pay online, your details are protected by codes. These codes use the fact that it is very easy to multiply 2 huge primes, but very hard to find them again from the answer. Prime factors keep your messages safe.", V.note('Big primes keep messages safe'))
      ]),
      L.turn("Your turn! Number one. Write 120 as a product of prime factors. Pause and try it.", E('120 = ?'), "120 divided by 2 is 60, then 30, then 15. 15 is 3 times 5. So 2 cubed times 3 times 5.", g('120 = 2³ × 3 × 5')),
      L.turn("Your turn! Number two. Write 84 as a product of prime factors. Pause and try it.", E('84 = ?'), "84 divided by 2 is 42, then 21. 21 is 3 times 7. So 2 squared times 3 times 7.", g('84 = 2² × 3 × 7')),
      L.turn("Your turn! Number three. Use the prime factors of 90 and 120 to find the highest common factor. Pause and try it.", E('90 = 2 × 3² × 5') + E('120 = 2³ × 3 × 5'), "The lowest powers are 2, 3 and 5. Multiply them. 2 times 3 times 5 is 30.", g('HCF = 30')),
      L.rec(T, "A prime number has exactly 2 factors. Every number can be written as a product of primes in just one way. Use a factor tree or repeated division until every factor is prime. Write repeats as powers. The highest common factor uses the lowest powers of the shared primes. The lowest common multiple uses the highest powers of all the primes.", ['Factor tree or division', 'End with primes only', 'Use index form', 'HCF: shared, lowest powers', 'LCM: all, highest powers'])
    ]);
  })();

  /* ---- Percentage change ---- */
  (function () {
    var T = 'How do you calculate percentage changes?';
    L.full(T, [
      SC('Percentage change', 'Why we need it', [
        S("A shirt goes up by £5. Is that a big change? It depends. For a £10 shirt it is huge. For a £200 coat it is tiny. To judge the size of a change, we compare it to where we started. That gives a percentage change.", V.rule('Compare the change with the original.')),
        S("Here is the rule. Work out the change. Divide it by the original amount. Then multiply by 100.", E('% change = change ÷ original × 100', 'g'))
      ]),
      SC('Percentage increase', 'Example 1: £48 to £54', [
        S("A ticket goes up from £48 to £54. First find the change. 54 take away 48 is £6.", E('54 − 48 = 6')),
        S("Now divide the change by the original. Six divided by forty-eight is zero point one two five. Multiply by one hundred. That is twelve point five per cent. It is a twelve point five per cent increase.", g('6 ÷ 48 × 100 = 12.5%'))
      ]),
      SC('Percentage decrease', 'Example 2: 1,250 to 1,000', [
        S("The number of visitors to a museum falls from 1,000, 250 to 1,000. The change is 250.", E('1,250 − 1,000 = 250')),
        S("Divide by the original, which is the bigger number this time. 250 divided by 1,000, 250 is 0.2. That is 20%. A 20% decrease.", g('250 ÷ 1,250 × 100 = 20%'))
      ]),
      SC('Applying a change', 'Example 3: multipliers', [
        S("Now the other way round. We know the percentage, and we want the new amount. Increase 320 by 15%. There is a quick way. The original is 100%. Add 15. That makes 115%. As a decimal, 1.15.", E('100% + 15% = 115% = 1.15')),
        S("Multiply by the multiplier. 320 times 1.15 is 368.", g('320 × 1.15 = 368')),
        S("For a decrease, take away. 100% minus 15 is 85%, which is 0.85. 320 times 0.85 is 272.", g('320 × 0.85 = 272'))
      ]),
      SC('Profit and loss', 'Example 4: percentage profit', [
        S("A trader buys a bike for £40 and sells it for £52. The profit is £12. What is that as a percentage? Always divide by the cost price, which is where we started.", E('52 − 40 = 12')),
        S("12 divided by 40 is 0.3. Multiply by 100. The profit is 30%.", g('12 ÷ 40 × 100 = 30%'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: dividing by the new value instead of the original. In example one, dividing 6 by 54 would give the wrong answer.", r('6 ÷ 54  ✗') + g('6 ÷ 48  ✓')),
        S("Mistake two: forgetting to multiply by one hundred. Zero point one two five is a decimal. It must be turned into twelve point five per cent.", r('0.125%  ✗') + g('12.5%  ✓')),
        S("Mistake three: using the wrong multiplier. A 15% decrease is times 0.85, not 0.15.", r('× 0.15  ✗') + g('× 0.85  ✓'))
      ]),
      SC('In real life', 'Population', [
        S("A town grows from 18,000 people to 19,000, 800. The change is 1,000, 800. Divide by the original, 18,000. That is 0.1. So the population grew by 10%.", g('1,800 ÷ 18,000 × 100 = 10%'))
      ]),
      L.turn("Your turn! Number one. A price falls from £80 to £68. What is the percentage decrease? Pause and try it.", E('80 → 68'), "The change is £12. 12 divided by 80 is 0.15. That is 15%.", g('12 ÷ 80 × 100 = 15%')),
      L.turn("Your turn! Number two. Increase £250 by 12%. Pause and try it.", E('250 × 1.12'), "The multiplier is 1.12. 250 times 1.12 is £280.", g('£280')),
      L.turn("Your turn! Number three. A phone costs £600. It is reduced by 20%. What is the sale price? Pause and try it.", E('600 × 0.8'), "The multiplier is 0.8. 600 times 0.8 is £480.", g('£480')),
      L.rec(T, "To find a percentage change, work out the change, divide by the original, and multiply by 100. To apply a percentage change, use a multiplier. For an increase, add the percentage to 100. For a decrease, take it away. Always divide by the original amount, not the new 1.", ['Change = new − original', '÷ original × 100', 'Increase: × (1 + r)', 'Decrease: × (1 − r)'])
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
        S("350 times 1 is 350. 350 times 0.16 is 56. Add them. 406 euros.", g('350 × 1.16 = €406')),
        S("A good check: you should get more euros than pounds, because £1 buys more than 1 euro. 406 is bigger than 350. Good.", V.rule('£1 buys more than €1, so expect more euros.'))
      ]),
      SC('Euros to pounds', 'Example 2: divide', [
        S("Now the other way. You have 232 euros. How many pounds is that? We go backwards, so we divide by the rate.", E('€232 ÷ 1.16')),
        S("Two hundred and thirty-two divided by one point one six is two hundred. You get two hundred pounds. Check: two hundred pounds times one point one six is two hundred and thirty-two euros.", g('232 ÷ 1.16 = £200'))
      ]),
      SC('Comparing prices', 'Example 3: where is it cheaper?', [
        S("Trainers cost £75 in Glasgow. In Paris, the same trainers cost 85 euros. Where is it cheaper? We cannot compare pounds with euros directly. Change both to pounds.", E('£75   or   €85 ?')),
        S("85 euros divided by 1.16 is £73.28. That is less than £75. So Paris is slightly cheaper.", g('€85 ÷ 1.16 ≈ £73.28'))
      ]),
      SC('Between two foreign currencies', 'Example 4: via pounds', [
        S("What about dollars to euros? We do not have a direct rate. So we go through pounds. Change the dollars to pounds first. Then change the pounds to euros.", E('$ → £ → €', 'g')),
        S("Take 127 dollars. Divide by 1.27 to get £100. Then multiply by 1.16 to get 116 euros.", E('$127 ÷ 1.27 = £100') + E('£100 × 1.16 = €116', 'g'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: multiplying when you should divide. Ask yourself, am I changing from pounds to another currency, or from another currency back to pounds?", V.cols([V.card('£ → other: ×', 'g', true), V.card('Other → £: ÷', 'b', true)], 2)),
        S("Mistake two: comparing prices in different currencies. Always change them into the same currency first.", V.rule('Same currency before you compare.')),
        S("Mistake three: forgetting fees. Some places charge a fee for changing money. Take the fee off first.", V.rule('Fee first, then exchange.'))
      ]),
      SC('In real life', 'Holiday money', [
        S("You have £500 for a holiday. The bank charges a 2% fee. 2% of 500 is £10. So you change £490. At 1.12 euros to the pound, that is 548 euros 80.", E('£500 − 2% = £490') + g('490 × 1.12 = €548.80'))
      ]),
      L.turn("Your turn! Number one. At £1 to 1 dollar 25, how many pounds is 100 dollars? Pause and try it.", E('100 ÷ 1.25'), "We are going back to pounds, so we divide. 100 divided by 1.25 is £80.", g('£80')),
      L.turn("Your turn! Number two. At one pound to one point one euros, how many euros for two hundred pounds? Pause and try it.", E('200 × 1.1'), "We multiply. 200 times 1.1 is 220 euros.", g('€220')),
      L.turn("Your turn! Number three. A book costs twelve euros. At one pound to one point two euros, what is that in pounds? Pause and try it.", E('12 ÷ 1.2'), "We divide. 12 divided by 1.2 is £10.", g('£10')),
      L.rec(T, "An exchange rate tells you how much of another currency you get for £1. To change from pounds, multiply by the rate. To change back to pounds, divide by the rate. Always compare prices in the same currency. Take off any fees before you exchange.", ['£ → other: × rate', 'Other → £: ÷ rate', 'Compare in one currency', 'Watch for fees'])
    ]);
  })();

  /* ---- nth term ---- */
  (function () {
    var T = 'How do you generate a formula from a sequence?';
    L.full(T, [
      SC('Formula for a sequence', 'Start with the basics', [
        S("A sequence is a list of numbers that follows a pattern. Each number is called a term. Look at this sequence. 7, 11, 15, 19.", V.cards(['7', '11', '15', '19', '…'], ['b'])),
        S("Each term goes up by 4. That is called the common difference. We could keep adding 4 forever. But what if we want the hundredth term? We do not want to write out 100 numbers. A formula lets us jump straight there.", V.rule('Common difference: the step between terms.')),
        S("The formula is called the nth term. The letter n stands for the position. n equals 1 is the first term, n equals 2 is the second term, and so on.", E('n = 1, 2, 3, 4 …', 'b'))
      ]),
      SC('Finding the formula', 'Example 1: 7, 11, 15, 19', [
        S("Step one: find the common difference. 11 take away 7 is 4. So the formula starts with 4 n. That means 4 times the position.", E('d = 4  →  4n')),
        S("Step two: write out 4 n for the first few positions. 4, 8, 12, 16. Compare with our sequence. 7, 11, 15, 19.", E('4n:  4, 8, 12, 16') + E('Seq: 7, 11, 15, 19')),
        S("Our sequence is always 3 more. So we add 3. The nth term is 4 n plus 3.", g('nth term = 4n + 3'))
      ]),
      SC('Decreasing sequence', 'Example 2: 30, 25, 20, 15', [
        S("This sequence goes down. 25 take away 30 is negative 5. The common difference is negative 5. So the formula starts with negative 5 n.", E('d = −5  →  −5n')),
        S("Negative 5 n gives negative 5, negative 10, negative 15. We need 30, 25, 20. We must add 35 each time. Negative 5 plus 35 is 30. So the formula is 35 minus 5 n.", g('nth term = 35 − 5n'))
      ]),
      SC('Using the formula', 'Example 3: any term', [
        S("Now we can find any term. The fiftieth term of 4 n plus 3. Put 50 in place of n. 4 times 50 is 200. Add 3. 203.", g('4 × 50 + 3 = 203')),
        S("We can also check whether a number is in the sequence. Is 111 in it? Solve 4 n plus 3 equals 111. 4 n is 108. So n is 27. It is a whole number, so yes. It is the twenty-seventh term.", E('4n + 3 = 111') + E('n = 27 ✓', 'g'))
      ]),
      SC('Patterns of shapes', 'Example 4: matchsticks', [
        S("Patterns can be made of shapes. 1 triangle uses 3 matchsticks. 2 triangles in a row use 5. 3 triangles use 7.", V.cards(['3', '5', '7'], ['b'], true)),
        S("The difference is 2, so the formula starts with 2 n. 2 n gives 2, 4, 6. We need 3, 5, 7, so add 1. The number of matchsticks is 2 n plus 1.", g('M = 2n + 1'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: using the first term as the formula. The first term is not the nth term. 7 is the first term, but the formula is 4 n plus 3.", V.rule('The formula starts with the common difference.')),
        S("Mistake two: forgetting the adjustment. 4 n alone gives 4, 8, 12. It does not match 7, 11, 15.", r('4n  ✗') + g('4n + 3  ✓')),
        S("Mistake three: mixing up the sign for a decreasing sequence. If the terms go down, the difference is negative.", V.rule('Going down: negative difference.'))
      ]),
      L.turn("Your turn! Number one. Find the nth term of 2, 8, 14, 20. Pause and try it.", E('2, 8, 14, 20'), "The difference is 6. 6 n gives 6, 12, 18. We need 2 less each time. So 6 n minus 4.", g('6n − 4')),
      L.turn("Your turn! Number two. Find the nth term of 5, 8, 11, 14. Pause and try it.", E('5, 8, 11, 14'), "The difference is 3. 3 n gives 3, 6, 9. We need 2 more. So 3 n plus 2.", g('3n + 2')),
      L.turn("Your turn! Number three. Use the formula 6 n minus 4 to find the twentieth term. Pause and try it.", E('6 × 20 − 4'), "6 times 20 is 120. Take away 4. 116.", g('116')),
      L.rec(T, "Find the common difference. It goes in front of n. Compare d times n with the sequence, and adjust with a constant so the first term matches. Then you can use the formula to find any term, and check whether a number is in the sequence.", ['Common difference', 'd × n', 'Adjust to the first term', 'Substitute n for any term'])
    ]);
  })();
  /* ---- Simplify algebraic terms ---- */
  (function () {
    var T = 'How do you simplify algebraic terms?';
    L.full(T, [
      SC('Algebra', 'Start with the basics', [
        S("In algebra we use letters to stand for numbers. A term is 1 piece of an expression, like 3 x, or 5 y, or 7. The number in front of the letter is called the coefficient.", E('3x', 'b') + V.cols([V.card('Coefficient: 3', 'g', true), V.card('Letter: x', 'b', true)], 2)),
        S("Think of the letter as an object. 3 x is 3 apples. 5 x is 5 apples. 3 apples plus 5 apples is 8 apples. So 3 x plus 5 x is 8 x.", E('3x + 5x = 8x', 'g')),
        S("But apples and bananas do not mix. 3 x plus 5 y cannot be made shorter. They are different kinds of thing. Terms that have exactly the same letters and powers are called like terms. Only like terms can be added or subtracted.", E('3x + 5y   stays as it is', 'b'))
      ]),
      SC('Collecting like terms', 'Example 1: a and b', [
        S("Simplify 4 a plus 3 b minus a plus 2 b. First, spot the a terms. 4 a, and minus a. Then the b terms. 3 b and 2 b.", E('4a + 3b − a + 2b')),
        S("4 a minus a is 3 a. Remember, a on its own means 1 a. 3 b plus 2 b is 5 b.", E('4a − a = 3a') + E('3b + 2b = 5b')),
        S("Put them together. 3 a plus 5 b.", g('3a + 5b'))
      ]),
      SC('Different powers', 'Example 2: x and x squared', [
        S("Now simplify 2 x squared plus 3 x plus x squared. Is x squared the same kind of thing as x? No. x squared means x times x. It is a different term. So we only collect the x squared terms together.", E('2x² + 3x + x²')),
        S("2 x squared plus 1 x squared makes 3 x squared. The 3 x stays on its own.", g('3x² + 3x'))
      ]),
      SC('Multiplying terms', 'Example 3: 3 a b times 4 a', [
        S("When we multiply terms, we multiply the numbers first. 3 times 4 is 12. Then we multiply the letters. a times a is a squared. And b stays as b.", E('3ab × 4a')),
        S("So the answer is 12 a squared b.", g('3ab × 4a = 12a²b'))
      ]),
      SC('Dividing terms', 'Example 4: cancelling', [
        S("To divide, write it as a fraction and cancel. 12 x squared y divided by 4 x. 12 divided by 4 is 3. x squared divided by x leaves 1 x. And y stays.", E('12x²y ÷ 4x')),
        S("The answer is 3 x y.", g('12x²y ÷ 4x = 3xy'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: adding unlike terms. 3 x plus 2 y is not 5 x y.", r('3x + 2y = 5xy  ✗') + g('3x + 2y stays  ✓')),
        S("Mistake two: forgetting the invisible 1. x is 1 x. So 5 x minus x is 4 x, not 5.", r('5x − x = 5  ✗') + g('5x − x = 4x  ✓')),
        S("Mistake three: mixing up addition and multiplication. x plus x is 2 x. But x times x is x squared.", E('x + x = 2x') + E('x × x = x²'))
      ]),
      SC('In real life', 'Perimeter', [
        S("A rectangle has sides of length a and b. Its perimeter is a plus b plus a plus b. Collect the like terms. That is 2 a plus 2 b. Algebra gives a short rule for any rectangle.", g('a + b + a + b = 2a + 2b'))
      ]),
      L.turn("Your turn! Number one. Simplify 5 p minus 2 q plus 3 p plus q. Pause and try it.", E('5p − 2q + 3p + q'), "5 p plus 3 p is 8 p. Minus 2 q plus q is minus q. So 8 p minus q.", g('8p − q')),
      L.turn("Your turn! Number two. Simplify 4 x times 3 y. Pause and try it.", E('4x × 3y'), "4 times 3 is 12. x times y is x y. So 12 x y.", g('12xy')),
      L.turn("Your turn! Number three. Simplify 20 a squared divided by 5 a. Pause and try it.", E('20a² ÷ 5a'), "20 divided by 5 is 4. a squared over a is a. So 4 a.", g('4a')),
      L.rec(T, "Like terms have the same letters and powers. Add or subtract their coefficients. When multiplying, multiply the numbers and add the powers of each letter. When dividing, cancel. A letter on its own has a coefficient of 1.", ['Like terms: same letters and powers', 'Add the numbers in front', 'Multiply: numbers, then letters', 'Divide: cancel'])
    ]);
  })();

  /* ---- Substitution ---- */
  (function () {
    var T = 'How do you substitute numbers into an expression?';
    L.full(T, [
      SC('Substitution', 'Start with the basics', [
        S("To substitute means to swap. We swap each letter for its number. Then we work it out. The answer is the value of the expression.", E('5a − 2b, with a = 4, b = 3', 'b')),
        S("The golden rule is that the order of operations still applies. Brackets, then powers, then multiplication and division, then addition and subtraction. And remember, 5 a means 5 times a. There is a hidden multiplication.", V.rule('Hidden multiplication: 5a = 5 × a'))
      ]),
      SC('A simple one', 'Example 1: a = 4, b = 3', [
        S("Find the value of 5 a minus 2 b. Swap the letters. 5 times 4, minus 2 times 3.", E('5 × 4 − 2 × 3')),
        S("Do the multiplications first. 20 minus 6. That is 14.", g('20 − 6 = 14'))
      ]),
      SC('With powers', 'Example 2: x = 3', [
        S("Find the value of 2 x squared when x is 3. Powers come before multiplying. So square the 3 first. 3 squared is 9. Then double it. 18.", E('2x² = 2 × 3² = 2 × 9') + g('= 18')),
        S("A common slip is to double first. 2 times 3 is 6, and 6 squared is 36. That is wrong. The square only applies to the x.", r('(2 × 3)² = 36  ✗'))
      ]),
      SC('With negatives', 'Example 3: x = −2', [
        S("Find x squared plus 3 x when x is negative 2. Put brackets round the negative number. This keeps the sign safe.", E('(−2)² + 3 × (−2)')),
        S("Negative 2 squared is positive 4. 3 times negative 2 is negative 6. 4 plus negative 6 is negative 2.", E('4 + (−6)') + g('= −2'))
      ]),
      SC('Using a formula', 'Example 4: v = u + at', [
        S("Formulae are expressions too. Speed v equals u plus a t. Let u be 10, a be 3, and t be 5. First, a times t. 3 times 5 is 15. Then add 10.", E('v = 10 + 3 × 5') + g('v = 10 + 15 = 25'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: squaring the number in front. 2 x squared with x equal to 3 is 18, not 36.", r('2x² = 6²  ✗') + g('2x² = 2 × 9  ✓')),
        S("Mistake two: losing the sign. Minus 2 squared is plus 4, and you must use brackets to see that.", r('−2² = −4  ✗  (for x = −2)') + g('(−2)² = 4  ✓')),
        S("Mistake three: reading 5 a as 54. The letter is not a digit. 5 a is 5 times a.", r('5a = 54  ✗') + g('5a = 5 × 4 = 20  ✓'))
      ]),
      SC('In real life', 'Temperature', [
        S("To change Celsius to Fahrenheit, we use F equals 1.8 C plus 32. When C is 25, 1.8 times 25 is 45. Add 32. 77 degrees.", g('F = 1.8 × 25 + 32 = 77'))
      ]),
      L.turn("Your turn! Number one. Find 3 p squared minus q, when p is 2 and q is 5. Pause and try it.", E('3p² − q'), "2 squared is 4. 3 times 4 is 12. 12 minus 5 is 7.", g('7')),
      L.turn("Your turn! Number two. Find x squared minus 4 x, when x is negative 3. Pause and try it.", E('x² − 4x, x = −3'), "Negative 3 squared is 9. 4 times negative 3 is negative 12. 9 minus negative 12 is 21.", g('9 + 12 = 21')),
      L.turn("Your turn! Number three. Use A equals half b h with b equal to 10 and h equal to 6. Pause and try it.", E('A = ½bh'), "Half of 10 is 5. 5 times 6 is 30.", g('A = 30')),
      L.rec(T, "Replace each letter with its value, using brackets round negative numbers. Then follow the order of operations. Powers come before multiplying. A number next to a letter means multiply.", ['Replace each letter', 'Brackets round negatives', 'BODMAS', 'Powers before ×'])
    ]);
  })();

  /* ---- Linear equations ---- */
  (function () {
    var T = 'How do you solve linear equations?';
    L.full(T, [
      SC('Linear equations', 'Start with the basics', [
        S("An equation says that 2 things are equal. A linear equation has an unknown letter, with no powers. We want to find the number that makes it true. Think of a pair of balance scales. Both sides weigh the same.", E('3x + 4 = 19', 'b')),
        S("The golden rule is to keep the scales balanced. Whatever you do to 1 side, you must do to the other. We use opposite operations to undo things. The opposite of add is subtract. The opposite of multiply is divide.", V.cols([V.card('+ ↔ −', 'g', true), V.card('× ↔ ÷', 'g', true)], 2))
      ]),
      SC('Two steps', 'Example 1: 3x + 4 = 19', [
        S("We want x on its own. Undo things in the reverse order. The last thing done to x was adding 4. So subtract 4 from both sides. 19 minus 4 is 15.", E('3x + 4 = 19') + E('3x = 15')),
        S("Now x is multiplied by 3. Divide both sides by 3. x equals 5.", g('x = 5')),
        S("Always check. Put 5 back in. 3 times 5 is 15, plus 4 is 19. Correct.", E('3 × 5 + 4 = 19 ✓'))
      ]),
      SC('Brackets', 'Example 2: 2(x − 3) = 14', [
        S("There are 2 ways. 1 is to expand the bracket first. 2 times x is 2 x. 2 times negative 3 is negative 6.", E('2x − 6 = 14')),
        S("Add 6 to both sides. 2 x equals 20. Divide by 2. x equals 10.", E('2x = 20') + g('x = 10'))
      ]),
      SC('Letters on both sides', 'Example 3: 7x − 5 = 3x + 11', [
        S("Now there are x terms on both sides. First move the smaller 1. Subtract 3 x from both sides. 7 x minus 3 x is 4 x.", E('4x − 5 = 11')),
        S("Add 5 to both sides. 4 x equals 16. Divide by 4. x equals 4.", E('4x = 16') + g('x = 4')),
        S("Check both sides. Left: 7 times 4 minus 5 is 23. Right: 3 times 4 plus 11 is 23. They match.", E('23 = 23 ✓'))
      ]),
      SC('Fractions', 'Example 4: x/3 + 2 = 6', [
        S("Subtract 2 from both sides. x over 3 equals 4. Now x is divided by 3. The opposite is multiply. Multiply both sides by 3. x equals 12.", E('x/3 = 4') + g('x = 12'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: only changing 1 side. If you subtract 4 on the left, you must subtract 4 on the right too.", V.rule('Same to both sides.')),
        S("Mistake two: forgetting to multiply everything in a bracket. 2 times x minus 3 is 2 x minus 6, not 2 x minus 3.", r('2(x − 3) = 2x − 3  ✗') + g('2(x − 3) = 2x − 6  ✓')),
        S("Mistake three: moving a term without changing its sign. When a plus 4 crosses the equals sign, it becomes minus 4.", V.rule('Cross the equals: change the sign.'))
      ]),
      SC('In real life', 'Equal cost', [
        S("Plan 1 costs £12 plus £2 a visit. Plan 2 costs £4 a visit. They cost the same when 12 plus 2 v equals 4 v. Subtract 2 v. 12 equals 2 v. So v is 6 visits.", E('12 + 2v = 4v') + g('v = 6'))
      ]),
      L.turn("Your turn! Number one. Solve 5, bracket, x plus 1, equals 3 x plus 17. Pause and try it.", E('5(x + 1) = 3x + 17'), "Expand to get 5 x plus 5. Subtract 3 x. 2 x plus 5 equals 17. 2 x equals 12. x is 6.", g('x = 6')),
      L.turn("Your turn! Number two. Solve 4 x minus 9 equals 23. Pause and try it.", E('4x − 9 = 23'), "Add 9. 4 x equals 32. Divide by 4. x is 8.", g('x = 8')),
      L.turn("Your turn! Number three. Solve x over 5 plus 3 equals 7. Pause and try it.", E('x/5 + 3 = 7'), "Subtract 3. x over 5 equals 4. Multiply by 5. x is 20.", g('x = 20')),
      L.rec(T, "A linear equation is a balance. Do the same to both sides. Expand any brackets. Collect the letters on 1 side. Then undo operations in reverse order, add and subtract first, then multiply and divide. Always check by substituting your answer.", ['Expand brackets', 'Letters to one side', 'Undo + and −, then × and ÷', 'Check by substituting'])
    ]);
  })();

  /* ---- Create and solve equations ---- */
  (function () {
    var T = 'How do you create and solve simple equations?';
    L.full(T, [
      SC('Words to equations', 'Start with the basics', [
        S("Many problems are written in words. We can turn them into an equation and solve it. This is one of the most useful skills in maths. There are 4 steps.", V.list(['Choose a letter for the unknown', 'Write the equation', 'Solve it', 'Answer the question in words'])),
        S("The first step matters most. Write down what your letter stands for, such as, let n be the number. Then every piece of the story becomes a piece of the equation.", E('Let n = the number', 'b'))
      ]),
      SC('Think of a number', 'Example 1', [
        S("I think of a number, multiply it by 5, and subtract 8. The answer is 32. Let n be the number. Multiply by 5 gives 5 n. Subtract 8 gives 5 n minus 8. That equals 32.", E('5n − 8 = 32')),
        S("Add 8. 5 n equals 40. Divide by 5. n is 8.", g('n = 8'))
      ]),
      SC('Angles', 'Example 2: a triangle', [
        S("The angles of a triangle are x, 2 x and 3 x degrees. We know the angles of a triangle add up to 180. So add them up and set them equal to 180.", E('x + 2x + 3x = 180')),
        S("6 x equals 180. x is 30. Now answer the question. The angles are 30, 60 and 90 degrees. Check: 30 plus 60 plus 90 is 180.", E('6x = 180') + g('30°, 60°, 90°'))
      ]),
      SC('Perimeter', 'Example 3: a rectangle', [
        S("A rectangle has a width of w and a length of w plus 5. Its perimeter is 34. The perimeter is 2 widths plus 2 lengths. That is w plus w plus 5, twice. 4 w plus 10.", E('4w + 10 = 34')),
        S("Subtract 10. 4 w equals 24. w is 6. The length is 6 plus 5, which is 11. The rectangle is 6 by 11.", g('6 by 11'))
      ]),
      SC('Money', 'Example 4: 2 items', [
        S("A pen costs p pence. A pad costs 3 times as much. Together they cost £1.20, which is 120p. The pad costs 3 p. So p plus 3 p equals 120.", E('4p = 120')),
        S("p is 30. The pen costs 30p and the pad costs 90p.", g('Pen 30p, pad 90p'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: not saying what the letter means. Always begin with let n be, so you remember what you are finding.", V.rule('Let n be …')),
        S("Mistake two: stopping at the value of the letter. In the rectangle, w is 6, but the question asked for the length too.", V.rule('Answer the question that was asked.')),
        S("Mistake three: skipping the check. Put your answer back into the story. Does it make sense?", V.rule('Check it fits the story.'))
      ]),
      SC('In real life', 'Sharing a bill', [
        S("4 friends share a bill equally, and then each also pays a £3 tip. Each person pays £11 in total. Let b be the bill. b over 4 plus 3 equals 11. Subtract 3. b over 4 is 8. Multiply by 4. The bill is £32.", E('b/4 + 3 = 11') + g('b = £32'))
      ]),
      L.turn("Your turn! Number one. 3 consecutive numbers add up to 48. Write and solve an equation. Pause and try it.", E('n + (n+1) + (n+2) = 48'), "3 n plus 3 equals 48. 3 n equals 45. n is 15. The numbers are 15, 16 and 17.", g('15, 16, 17')),
      L.turn("Your turn! Number two. I think of a number, double it and add 7. The answer is 23. What is the number? Pause and try it.", E('2n + 7 = 23'), "Subtract 7. 2 n equals 16. n is 8.", g('n = 8')),
      L.turn("Your turn! Number three. A mum is 3 times as old as her son. Together they are 40. How old is the son? Pause and try it.", E('s + 3s = 40'), "4 s equals 40. s is 10. The son is 10 and his mum is 30.", g('10 and 30')),
      L.rec(T, "Choose a letter for the unknown and say what it stands for. Write the story as an equation. Solve it. Then answer the question in words and check that the answer fits the story.", ['Define the letter', 'Write the equation', 'Solve', 'Answer in words and check'])
    ]);
  })();

  /* ---- Formulae ---- */
  (function () {
    var T = 'How do you create and use algebraic formulae?';
    L.full(T, [
      SC('Formulae', 'Start with the basics', [
        S("A formula is a rule that connects quantities, using letters. For example, the perimeter of a rectangle is 2 l plus 2 w. Here l is the length and w is the width. You can use it for any rectangle in the world.", E('P = 2l + 2w', 'g')),
        S("Most formulae have 2 parts. A fixed part that never changes, and a changing part that depends on something. Spotting these 2 parts is how you write a formula.", V.cols([V.card('Fixed part', 'b', true), V.card('Changing part', 'g', true)], 2))
      ]),
      SC('Writing a formula', 'Example 1: a taxi', [
        S("A taxi charges £3 to start. Then it charges £1.80 for every mile. Let m be the number of miles and C be the total cost. The fixed part is 3. The changing part is 1.8 times m.", E('Fixed: 3') + E('Changing: 1.8 × m')),
        S("Put them together. C equals 3 plus 1.8 m.", g('C = 3 + 1.8m'))
      ]),
      SC('Using it', 'Example 2: 10 miles', [
        S("How much is a 10 mile journey? Put 10 in place of m. 1.8 times 10 is 18. Plus 3 is £21.", g('C = 3 + 1.8 × 10 = £21'))
      ]),
      SC('Working backwards', 'Example 3: how far?', [
        S("A fare is £30. How far did the taxi go? Put 30 in place of C, and solve. 3 plus 1.8 m equals 30. Subtract 3. 1.8 m equals 27.", E('3 + 1.8m = 30') + E('1.8m = 27')),
        S("Divide by 1.8. m is 15 miles.", g('m = 15'))
      ]),
      SC('Changing the subject', 'Example 4: rearranging', [
        S("Instead of solving each time, we can rearrange the formula so that m is on its own. Start with C equals 3 plus 1.8 m. Subtract 3 from both sides. Then divide by 1.8.", E('C − 3 = 1.8m')),
        S("So m equals C minus 3, all divided by 1.8. Now any fare can be put straight in.", g('m = (C − 3) ÷ 1.8'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: putting the fixed charge on the wrong part. The £3 is paid once. It is not multiplied by the miles.", r('C = 3m + 1.8  ✗') + g('C = 3 + 1.8m  ✓')),
        S("Mistake two: forgetting what the letters mean. Always say what each letter stands for, and its unit.", V.rule('Say what each letter means.')),
        S("Mistake three: mixing units. If the rate is in pounds per mile, the distance must be in miles, not kilometres.", V.rule('Keep the units matching.'))
      ]),
      SC('In real life', 'Mobile phone', [
        S("A phone plan costs £8 a month plus 10p for each extra minute. With m extra minutes, the cost is 8 plus 0.1 m. For 40 extra minutes, that is 8 plus 4, which is £12.", E('C = 8 + 0.1m') + g('m = 40 → £12'))
      ]),
      L.turn("Your turn! Number one. Write a formula for the cost T of n cinema tickets at £7.50 each, plus a £2 booking fee. Pause and try it.", E('T = ?'), "The changing part is 7.5 times n. The fixed part is 2. So T equals 7.5 n plus 2.", g('T = 7.5n + 2')),
      L.turn("Your turn! Number two. Use your formula to find the cost of 4 tickets. Pause and try it.", E('T = 7.5 × 4 + 2'), "7.5 times 4 is 30. Plus 2 is £32.", g('£32')),
      L.turn("Your turn! Number three. The total was £47. How many tickets? Pause and try it.", E('7.5n + 2 = 47'), "Subtract 2. 7.5 n equals 45. Divide by 7.5. n is 6 tickets.", g('n = 6')),
      L.rec(T, "A formula connects quantities with letters. To write 1, find the fixed part and the changing part. To use 1, substitute values. To work backwards, solve an equation. To rearrange, change the subject. Always say what each letter means.", ['Fixed part + changing part', 'Substitute values', 'Solve to work backwards', 'Rearrange to change subject'])
    ]);
  })();
  /* ---- Construct triangles ---- */
  (function () {
    var T = 'How do you construct triangles?';
    L.full(T, [
      SC('Constructing triangles', 'Start with the basics', [
        S("To construct a triangle means to draw it accurately. You need a sharp pencil, a ruler, a protractor and a pair of compasses. What you do depends on the facts you are given.", V.list(['3 sides: use compasses', '2 sides and the angle between: use a protractor', '2 angles and a side: use a protractor'])),
        S("The rule for every method is the same. Draw the base first. Then build the rest of the triangle from the ends of the base. Never rub out your construction lines or arcs. They show that your drawing is accurate.", V.rule('Base first. Keep the arcs.'))
      ]),
      SC('Three sides', 'Example 1: 5 cm, 7 cm, 8 cm', [
        S("Draw the longest side as the base. It is 8 centimetres. Mark the 2 ends.", E('Base: 8 cm')),
        S("Open the compasses to 5 centimetres, using the ruler. Put the point on the left end, and draw an arc above the line.", E('Arc of radius 5 cm from the left end', 'b')),
        S("Now open the compasses to 7 centimetres. Put the point on the right end, and draw a second arc. It must cross the first 1.", E('Arc of radius 7 cm from the right end', 'b')),
        S("Where the arcs cross is the third corner. Join it to both ends of the base with a ruler. You have a triangle with sides 5, 7 and 8.", g('Join to the crossing point'))
      ]),
      SC('Two sides and an angle', 'Example 2: 6 cm, 50°, 9 cm', [
        S("We know 2 sides and the angle between them. Draw the 6 centimetre side as the base. Put the centre of the protractor on the left end. Line up the 0 line with the base.", E('Base: 6 cm')),
        S("Find 50 degrees on the scale and make a small dot. Be careful to read the correct scale, starting from 0 on the base line. Draw a line from the end through the dot, 9 centimetres long.", E('50° at the left end') + E('Line of length 9 cm', 'b')),
        S("Finally join the end of that line to the other end of the base. That completes the triangle.", g('Join the ends'))
      ]),
      SC('Two angles and a side', 'Example 3: 40°, 7 cm, 65°', [
        S("Draw a 7 centimetre base. At the left end, measure 40 degrees and draw a long line. At the right end, measure 65 degrees and draw another long line. Make them cross.", E('40° at one end') + E('65° at the other end', 'b')),
        S("Where the 2 lines meet is the third corner. The third angle is whatever is left. 180 minus 40 minus 65 is 75 degrees. You can measure it to check your drawing.", g('Third angle = 75°'))
      ]),
      SC('Can it be drawn?', 'Example 4: the triangle rule', [
        S("Not every set of 3 lengths makes a triangle. Try sides of 3, 4 and 9. The 2 short sides cannot reach each other. The rule is that the 2 shorter sides must add up to more than the longest side.", E('3 + 4 = 7') + r('7 < 9  →  impossible')),
        S("Now try 4, 5 and 8. 4 plus 5 is 9. That is more than 8. So this triangle can be drawn.", g('4 + 5 = 9 > 8  ✓'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: reading the wrong scale on the protractor. It has 2 scales. Start from the 0 that lies on your base line.", V.rule('0 on the base line.')),
        S("Mistake two: rubbing out the arcs. Keep them. They are the proof of an accurate construction.", V.rule('Keep the arcs.')),
        S("Mistake three: a blunt pencil or a slipping ruler. A thick line can easily be a millimetre out. Use a sharp pencil.", V.rule('Sharp pencil, steady hand.'))
      ]),
      SC('In real life', 'Building frames', [
        S("Builders use triangles because they are rigid. A rectangle can lean sideways, but a triangle cannot change shape. A roof truss is built from triangles. The lengths of the beams are chosen using exactly this triangle rule.", V.note('Triangles are rigid'))
      ]),
      L.turn("Your turn! Number one. Can you construct a triangle with sides 5, 6 and 12? Pause and think.", E('5 + 6 vs 12'), "5 plus 6 is 11. That is less than 12. So no, it is impossible.", g('No')),
      L.turn("Your turn! Number two. Which tool do you use to draw a triangle when you know all 3 sides? Pause and think.", E('SSS → ?'), "Compasses. You draw 2 arcs that cross.", g('Compasses')),
      L.turn("Your turn! Number three. A triangle has angles of 40 and 65 degrees. What is the third angle? Pause and try it.", E('180 − 40 − 65'), "180 minus 105 is 75 degrees.", g('75°')),
      L.rec(T, "Choose the method from the facts you have. Draw the base first. Use compasses when you know 3 sides, and a protractor when you know angles. Keep your construction lines. The 2 shorter sides must always add up to more than the longest.", ['SSS: compasses', 'SAS and ASA: protractor', 'Base first', 'Shorter sides > longest'])
    ]);
  })();

  /* ---- 3D objects ---- */
  (function () {
    var T = 'What are the properties of 3D objects?';
    L.full(T, [
      SC('3D objects', 'Start with the basics', [
        S("A 3D object is a solid. You can hold it. We describe solids using 3 words. Faces, edges and vertices.", V.cols([V.card('Face: a flat surface', 'b', true), V.card('Edge: where 2 faces meet', 'g', true), V.card('Vertex: a corner', 'p', true)], 3)),
        S("Vertices is the plural of vertex. Think of a cube, like a dice. It has 6 faces, 12 edges and 8 vertices.", V.tbl([['Cube', '6', '12', '8']], ['Solid', 'Faces', 'Edges', 'Vertices']))
      ]),
      SC('Counting', 'Example 1: prisms and pyramids', [
        S("A triangular prism looks like a tent. It has 2 triangle ends and 3 rectangles. That is 5 faces. It has 9 edges and 6 vertices.", V.tbl([['Triangular prism', '5', '9', '6']], ['Solid', 'F', 'E', 'V'])),
        S("A square-based pyramid has a square base and 4 triangle sides. That is 5 faces. It has 8 edges and 5 vertices. And a tetrahedron, with 4 triangle faces, has 6 edges and 4 vertices.", V.tbl([['Square pyramid', '5', '8', '5'], ['Tetrahedron', '4', '6', '4']], ['Solid', 'F', 'E', 'V']))
      ]),
      SC('Euler’s formula', 'Example 2: a surprising rule', [
        S("Here is something wonderful. For any solid with flat faces, faces plus vertices minus edges always equals 2. This is called Euler's formula. Euler is said, oi-ler.", E('F + V − E = 2', 'g')),
        S("Try the cube. 6 plus 8 is 14. Take away 12. 2. Try the triangular prism. 5 plus 6 is 11. Take away 9. 2 again.", E('Cube: 6 + 8 − 12 = 2 ✓') + E('Prism: 5 + 6 − 9 = 2 ✓'))
      ]),
      SC('Cross-sections', 'Example 3: slices', [
        S("A cross-section is the shape you see when you slice through a solid. Cut a loaf of bread, and the slice is a cross-section. A prism has the same cross-section all the way along. That is how a prism is defined.", V.rule('Prism: same cross-section throughout.')),
        S("Slice a cylinder across, and you get a circle. Slice a cone across, and you get a circle too, but the circles get smaller towards the point.", V.cards(['Cylinder: circle', 'Cone: shrinking circle'], ['b', 'g']))
      ]),
      SC('Planes of symmetry', 'Example 4: mirror slices', [
        S("A plane of symmetry is a flat slice that cuts a solid into 2 mirror images. A cuboid with a square end has 5. A cube has 9. 3 go through the middle of opposite faces, and 6 go through opposite edges.", E('Cube: 9 planes of symmetry', 'g'))
      ]),
      SC('Nets', 'Example 5: unfolding', [
        S("A net is a solid unfolded flat. A cube has a net made of 6 squares. When you fold it up, the squares make the faces. A net must have the right shapes, and they must fold without overlapping.", V.note('A net folds up into the solid'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: forgetting hidden faces and edges. Count the ones at the back and the bottom too.", V.rule('Count the hidden ones.')),
        S("Mistake two: calling a corner an edge. An edge is a line. A vertex is a point.", V.rule('Edge: line. Vertex: point.')),
        S("Mistake three: calling a cylinder a prism. A prism has flat sides with a polygon cross-section. A cylinder has a curved surface.", V.rule('Prism: polygon cross-section.'))
      ]),
      SC('In real life', 'Packaging', [
        S("Boxes of cereal are cuboids, and sweets often come in triangular prisms, like a chocolate bar box. Designers draw the net first, cut it from a single sheet of card, and fold it into a box.", V.note('Packaging starts as a net'))
      ]),
      L.turn("Your turn! Number one. A solid has 8 faces and 12 vertices. How many edges? Pause and use Euler's formula.", E('8 + 12 − E = 2'), "8 plus 12 is 20. 20 minus E equals 2. So E is 18.", g('18 edges')),
      L.turn("Your turn! Number two. How many faces does a square-based pyramid have? Pause and think.", E('?'), "1 square base, and 4 triangles. 5 faces.", g('5')),
      L.turn("Your turn! Number three. What shape is the cross-section of a cylinder, cut across? Pause and think.", E('?'), "A circle.", g('A circle')),
      L.rec(T, "Describe solids by faces, edges and vertices. A prism has the same cross-section all the way along. A net folds up into a solid. A plane of symmetry slices a solid into mirror halves. For any solid with flat faces, F plus V minus E equals 2.", ['F, E, V', 'Euler: F + V − E = 2', 'Cross-sections', 'Nets and planes of symmetry'])
    ]);
  })();

  /* ---- Angles in triangles and quadrilaterals ---- */
  (function () {
    var T = 'What are angles in triangles and quadrilaterals?';
    L.full(T, [
      SC('Angle sums', 'Start with the basics', [
        S("Angles are measured in degrees. A full turn is 360 degrees. A straight line is 180. A right angle is 90.", V.cards(['Right angle: 90°', 'Straight line: 180°', 'Full turn: 360°'], ['b', 'g', 'p'])),
        S("Here is the big idea. The angles inside any triangle add up to 180 degrees. The angles inside any quadrilateral, that is a 4-sided shape, add up to 360.", V.tbl([['Triangle', '180°'], ['Quadrilateral', '360°']], ['Shape', 'Angles add to']))
      ]),
      SC('Missing angle in a triangle', 'Example 1', [
        S("A triangle has angles of 52 and 79 degrees. Find the third. First add the 2 we know. 52 plus 79 is 131.", E('52 + 79 = 131')),
        S("Now take it from 180. 180 minus 131 is 49.", g('180 − 131 = 49°'))
      ]),
      SC('Isosceles triangles', 'Example 2: equal base angles', [
        S("An isosceles triangle has 2 equal sides, and 2 equal angles at the bottom, called the base angles. Suppose the top angle is 36 degrees. The other 2 share what is left.", E('180 − 36 = 144')),
        S("144 divided by 2 is 72. Each base angle is 72 degrees.", g('144 ÷ 2 = 72°'))
      ]),
      SC('Missing angle in a quadrilateral', 'Example 3', [
        S("A quadrilateral has angles of 90, 115 and 75. Add them. 90 plus 115 is 205. Plus 75 is 280.", E('90 + 115 + 75 = 280')),
        S("The 4 angles must make 360. 360 minus 280 is 80 degrees.", g('360 − 280 = 80°'))
      ]),
      SC('Special quadrilaterals', 'Example 4: parallelogram', [
        S("In a parallelogram, opposite angles are equal. And the angles next to each other add up to 180. If 1 angle is 65, the one opposite is also 65. The neighbours are 180 minus 65, which is 115.", E('65°, 115°, 65°, 115°', 'g')),
        S("Check. 65 plus 115 plus 65 plus 115 is 360.", E('= 360° ✓'))
      ]),
      SC('Exterior angles', 'Example 5: extending a side', [
        S("Extend 1 side of a triangle. The angle outside is called an exterior angle. It is equal to the 2 interior angles opposite it, added together. If those 2 are 40 and 55, the exterior angle is 95.", E('ext = a + b') + g('40 + 55 = 95°'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: using 360 for a triangle. Triangles use 180.", r('Triangle: 360°  ✗') + g('Triangle: 180°  ✓')),
        S("Mistake two: forgetting isosceles angles are equal. If you are told a triangle is isosceles, mark the equal angles straight away.", V.rule('Mark equal angles first.')),
        S("Mistake three: not showing your subtraction. Write 180 minus the angles you know.", V.rule('Show: 180 − …'))
      ]),
      SC('In real life', 'Roof angles', [
        S("A builder cuts a triangular roof gable. The 2 sloping angles are each 35 degrees. The top angle must be 180 minus 70, which is 110 degrees. The saw is set to cut it.", g('180 − 70 = 110°'))
      ]),
      L.turn("Your turn! Number one. A kite has angles of 110, 110 and 60. Find the fourth. Pause and try it.", E('360 − 280'), "110 plus 110 plus 60 is 280. 360 minus 280 is 80 degrees.", g('80°')),
      L.turn("Your turn! Number two. An isosceles triangle has a top angle of 40 degrees. Find each base angle. Pause and try it.", E('(180 − 40) ÷ 2'), "140 divided by 2 is 70 degrees.", g('70°')),
      L.turn("Your turn! Number three. A parallelogram has an angle of 70 degrees. What is the angle next to it? Pause and try it.", E('180 − 70'), "Neighbouring angles add to 180. So 110 degrees.", g('110°')),
      L.rec(T, "Triangle angles add up to 180 degrees. Quadrilateral angles add up to 360. Use properties such as equal base angles in an isosceles triangle, and equal opposite angles in a parallelogram. An exterior angle equals the 2 interior angles opposite it.", ['Triangle: 180°', 'Quadrilateral: 360°', 'Isosceles: equal base angles', 'Parallelogram: opposite angles equal'])
    ]);
  })();

  /* ---- Linear scale factor ---- */
  (function () {
    var T = 'What is a linear scale factor?';
    L.full(T, [
      SC('Scale factor', 'Start with the basics', [
        S("When you enlarge a photo, every length gets longer by the same amount. The number you multiply by is the linear scale factor. It is often called k.", E('new length = old length × k', 'g')),
        S("If k is bigger than 1, the shape gets bigger. That is an enlargement. If k is between 0 and 1, the shape gets smaller. That is a reduction. If k is 1, nothing changes.", V.cols([V.card('k > 1: bigger', 'g', true), V.card('0 < k < 1: smaller', 'b', true)], 2)),
        S("Notice that the shape stays the same. Angles do not change. Only the lengths change. Shapes like this are called similar.", V.rule('Angles stay the same.'))
      ]),
      SC('Enlargement', 'Example 1: k = 3', [
        S("A rectangle is 4 centimetres by 2 centimetres. Enlarge it with a scale factor of 3. Multiply each length by 3.", E('4 × 3 = 12') + E('2 × 3 = 6')),
        S("The new rectangle is 12 centimetres by 6 centimetres.", g('12 cm by 6 cm'))
      ]),
      SC('Reduction', 'Example 2: k = ¼', [
        S("A scale factor of 1 quarter means every length is divided by 4. A line of 20 centimetres becomes 20 divided by 4. That is 5 centimetres.", g('20 × ¼ = 5 cm'))
      ]),
      SC('Finding k', 'Example 3: new divided by old', [
        S("A side of 8 centimetres becomes 14 centimetres. What is the scale factor? Divide the new length by the old length.", E('k = 14 ÷ 8')),
        S("14 divided by 8 is 1.75. It is bigger than 1, so it is an enlargement. Always match the same side in both shapes.", g('k = 1.75'))
      ]),
      SC('Effect on area', 'Example 4: k squared', [
        S("Now the surprise. Areas do not multiply by k. They multiply by k squared. Why? Because area has 2 lengths multiplied together, and both are scaled.", E('area × k²', 'g')),
        S("A shape with area 8 square centimetres is enlarged with scale factor 3. The new area is 8 times 3 squared. 3 squared is 9. 8 times 9 is 72 square centimetres.", g('8 × 9 = 72 cm²'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: multiplying area by k. If k is 3, the area is 9 times bigger, not 3 times.", r('Area × 3  ✗') + g('Area × 9  ✓')),
        S("Mistake two: dividing the wrong way round when finding k. Always do new divided by old.", r('old ÷ new  ✗') + g('new ÷ old  ✓')),
        S("Mistake three: changing the angles. Angles never change in an enlargement.", V.rule('Lengths change. Angles do not.'))
      ]),
      SC('In real life', 'Models and maps', [
        S("A model car is made at a scale of 1 to 43. A real car is 4.3 metres long. That is 430 centimetres. Divide by 43. The model is 10 centimetres long.", g('430 ÷ 43 = 10 cm'))
      ]),
      L.turn("Your turn! Number one. A photo 9 centimetres wide is reduced to 6 centimetres. What is the scale factor? Pause and try it.", E('6 ÷ 9'), "6 divided by 9 simplifies to 2 thirds.", g('k = ⅔')),
      L.turn("Your turn! Number two. A triangle has an area of 5 square centimetres. It is enlarged with scale factor 4. What is the new area? Pause and try it.", E('5 × 4²'), "4 squared is 16. 5 times 16 is 80 square centimetres.", g('80 cm²')),
      L.turn("Your turn! Number three. A line of 15 centimetres is reduced with scale factor 0.4. How long is it now? Pause and try it.", E('15 × 0.4'), "15 times 0.4 is 6 centimetres.", g('6 cm')),
      L.rec(T, "Multiply every length by the linear scale factor. To find the scale factor, divide a new length by the matching old length. A scale factor above 1 enlarges. Below 1 it reduces. Areas multiply by k squared. Angles stay the same.", ['New = old × k', 'k = new ÷ old', 'k > 1 enlarges, k < 1 reduces', 'Area × k²'])
    ]);
  })();

  /* ---- Symmetry ---- */
  (function () {
    var T = 'What is symmetry in 2D shapes?';
    L.full(T, [
      SC('Symmetry', 'Start with the basics', [
        S("Symmetry is when a shape looks the same after something is done to it. There are 2 kinds. Line symmetry, and rotational symmetry.", V.cards(['Line symmetry: fold', 'Rotational symmetry: turn'], ['b', 'g'])),
        S("A shape has line symmetry if you can fold it along a line so that the 2 halves match exactly. The fold line is called a line of symmetry, or a mirror line.", V.rule('Fold it: both halves match.')),
        S("A shape has rotational symmetry if you can turn it round a centre point, less than a full turn, and it fits back onto itself. The number of times it fits during 1 full turn is called the order.", V.rule('Order: fits in 1 full turn.'))
      ]),
      SC('Lines of symmetry', 'Example 1: regular polygons', [
        S("A regular polygon has all sides and angles equal. It has as many lines of symmetry as it has sides. A square has 4. A regular hexagon has 6. An equilateral triangle has 3.", E('Regular n-gon: n lines', 'g'))
      ]),
      SC('Order of rotation', 'Example 2: a table', [
        S("Regular polygons also have rotational symmetry equal to their number of sides. A square has order 4. A rectangle fits onto itself twice in a full turn, so its order is 2. A kite fits only once, so its order is 1, and that means no rotational symmetry.", V.tbl([['Square', '4', '4'], ['Rectangle', '2', '2'], ['Rhombus', '2', '2'], ['Kite', '1', '1'], ['Parallelogram', '0', '2']], ['Shape', 'Lines', 'Order']))
      ]),
      SC('Surprise!', 'Example 3: the parallelogram', [
        S("Look at the parallelogram in the table. It has no lines of symmetry. You cannot fold it to match. But it does have rotational symmetry of order 2. Turn it half a turn, and it fits.", V.rule('No lines, but order 2.')),
        S("So a shape can have 1 kind of symmetry without the other. Always check both.", V.rule('Check both kinds.'))
      ]),
      SC('Completing a shape', 'Example 4: reflecting', [
        S("To complete a symmetrical shape, reflect each point across the mirror line. Each point must be the same distance from the line, on the opposite side. Count the squares from the line to the point, then count the same number on the other side.", V.rule('Same distance, other side.'))
      ]),
      SC('Letters', 'Example 5: symmetry in the alphabet', [
        S("Look at capital letters. The letter H has 2 lines of symmetry and order 2. The letter S has no lines, but order 2. The letter A has 1 line and order 1.", V.cards(['H: 2 lines, order 2', 'S: 0 lines, order 2', 'A: 1 line, order 1'], ['b', 'p', 'g']))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: drawing a diagonal on a rectangle. A rectangle has only 2 lines of symmetry. Neither is a diagonal. A diagonal does not fold it onto itself.", r('Rectangle: 4 lines  ✗') + g('Rectangle: 2 lines  ✓')),
        S("Mistake two: forgetting order 1. Every shape fits onto itself after a full turn. So the order is always at least 1. Order 1 means no rotational symmetry.", V.rule('Order 1 = none.')),
        S("Mistake three: mixing up lines and order. Lines count the folds. Order counts the turns.", V.cols([V.card('Lines: folds', 'b', true), V.card('Order: turns', 'g', true)], 2))
      ]),
      SC('In real life', 'Logos and patterns', [
        S("Many logos, flags and tiling patterns use symmetry. Recycling signs have order 3. Snowflakes have order 6. Spotting symmetry helps designers create balanced patterns.", V.note('Symmetry makes things look balanced'))
      ]),
      L.turn("Your turn! Number one. How many lines of symmetry does an equilateral triangle have, and what is its order? Pause and think.", E('?'), "3 lines, and order 3.", g('3 lines · order 3')),
      L.turn("Your turn! Number two. What is the order of rotational symmetry of a rhombus? Pause and think.", E('?'), "Half a turn makes it fit. So order 2.", g('Order 2')),
      L.turn("Your turn! Number three. Does a regular pentagon have 5 lines of symmetry? Pause and think.", E('?'), "Yes. A regular polygon has as many lines as sides. 5 lines, and order 5.", g('Yes: 5 lines')),
      L.rec(T, "Line symmetry means the shape folds onto itself. Rotational symmetry means it fits onto itself as it turns, and the order counts how many times in a full turn. Regular polygons have as many lines and as high an order as they have sides. To complete a shape, reflect each point the same distance from the mirror line.", ['Line: mirror fold', 'Order: fits in 1 turn', 'Regular n-gon: n and n', 'Complete by reflecting'])
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
      SC('Comparing averages', 'Example 1: 2 classes', [
        S("Class A has a mean score of 64. Class B has a mean of 69. Which did better? On average, Class B did better, because its mean is higher.", E('69 > 64', 'g')),
        S("Notice the wording. We say on average. A few students in Class A may have done better than students in Class B.", V.rule('Say “on average”.'))
      ]),
      SC('Comparing spread', 'Example 2: consistency', [
        S("Class A has a range of 40. Class B has a range of 15. Class B has the smaller range. So its scores are closer together. They are more consistent.", E('15 < 40') + g('B is more consistent'))
      ]),
      SC('Comparing both', 'Example 3: a full comparison', [
        S("Put both together in a sentence, using context. On average, Class B scored higher than Class A, with a mean of 69 compared with 64. Class B was also more consistent, with a range of 15 compared with 40.", V.note('One average + one spread + context'))
      ]),
      SC('Reading charts', 'Example 4: trends', [
        S("A line graph shows how something changes over time. Suppose the temperature rises steadily from January to July, and then falls again to December. We describe this as an upward trend in the first half of the year, and a downward trend in the second half.", V.note('Describe the trend in words'))
      ]),
      SC('Misleading graphs', 'Example 5: be careful', [
        S("Charts can mislead. If a bar chart starts its axis at 90 instead of 0, small differences look enormous. A bar for 95 looks 5 times higher than a bar for 91. Always check where the scale starts.", V.rule('Check the scale starts sensibly.'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: only quoting numbers. A conclusion needs words that match the question.", r('69 > 64  ✗') + g('Class B scored higher on average  ✓')),
        S("Mistake two: comparing with only an average. A comparison needs both an average and a spread.", V.rule('Average and spread.')),
        S("Mistake three: saying a bigger range is better. A bigger range means less consistent.", V.rule('Smaller range = more consistent.'))
      ]),
      SC('In real life', 'Choosing a team player', [
        S("A coach compares 2 goalkeepers. Both save 12 shots per match on average. But 1 has a range of 3, and the other has a range of 9. The coach picks the one with the smaller range, because she can be relied upon every game.", V.note('Reliability needs a small spread'))
      ]),
      L.turn("Your turn! Number one. Team X has a median of 12 goals and a range of 3. Team Y has a median of 12 and a range of 9. Compare them. Pause and think.", E('?'), "They score the same on average. But Team X is more consistent, because its range is smaller.", g('Same average · X more consistent')),
      L.turn("Your turn! Number two. A bar chart axis starts at 50 instead of 0. Why is that a problem? Pause and think.", E('?'), "It makes small differences look much bigger than they really are.", g('Exaggerates differences')),
      L.turn("Your turn! Number three. Class P has a mean of 70 and a range of 20. Class Q has a mean of 75 and a range of 35. Which class scored higher, and which was more consistent? Pause and think.", E('?'), "Class Q scored higher on average, because 75 is bigger than 70. Class P was more consistent, because 20 is smaller than 35.", g('Q higher · P more consistent')),
      L.rec(T, "To compare data, use 1 average and 1 measure of spread, and say what they mean in context. Describe trends in charts in words. Check the scales of graphs for anything misleading. A smaller spread means more consistent data.", ['Average: which is higher?', 'Spread: which is more consistent?', 'Use context words', 'Check the scales'])
    ]);
  })();
  /* ---- Surds ---- */
  (function () {
    var T = 'Surds';
    L.full(T, [
      SC('Surds', 'Start with the basics', [
        S("Some square roots are whole numbers. The square root of 9 is 3. The square root of 16 is 4. But the square root of 2 is not. It goes on forever, 1.414 and so on, without ever repeating.", E('√9 = 3') + E('√2 = 1.41421…', 'b')),
        S("A root like this is called a surd. We keep it as a root, so the answer stays exact. A decimal would only be an approximation.", V.rule('Surd: an exact root that is not a whole number.'))
      ]),
      SC('Simplifying', 'Example 1: √50', [
        S("We can often make a surd simpler. Look for a square number that goes into it. 50 is 25 times 2. And 25 is a square number.", E('√50 = √25 × √2')),
        S("The square root of 25 is 5. So we get 5 root 2.", g('√50 = 5√2'))
      ]),
      SC('Simplifying', 'Example 2: √72', [
        S("Try the square root of 72. Which square number goes into 72? 4 goes in, but 36 goes in too, and it is bigger. 72 is 36 times 2. Always use the biggest square you can find.", E('√72 = √36 × √2')),
        S("The square root of 36 is 6. So the answer is 6 root 2.", g('6√2'))
      ]),
      SC('Adding and subtracting', 'Example 3: like surds', [
        S("We can add surds, but only if the part under the root is the same. 3 root 2 plus 5 root 2. Think of it like 3 apples plus 5 apples. 8 root 2.", g('3√2 + 5√2 = 8√2')),
        S("What about root 2 plus root 3? They are different, so we leave it as it is.", E('√2 + √3   stays', 'b'))
      ]),
      SC('Multiplying', 'Example 4: √3 × √12', [
        S("To multiply surds, multiply the numbers under the root. Root 3 times root 12 is root 36. And the root of 36 is 6.", E('√3 × √12 = √36') + g('= 6'))
      ]),
      SC('Rationalising', 'Example 5: no root on the bottom', [
        S("It is tidy not to leave a surd on the bottom of a fraction. Take 6 over root 3. Multiply the top and bottom by root 3. This does not change the value, because we are multiplying by 1.", E('6/√3 × √3/√3')),
        S("The bottom becomes root 3 times root 3, which is 3. The top is 6 root 3. 6 over 3 is 2. So the answer is 2 root 3.", g('6√3 ÷ 3 = 2√3'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: adding what is under the root. Root 9 plus root 16 is 3 plus 4, which is 7. It is not root 25, which is 5.", r('√9 + √16 = √25  ✗') + g('= 3 + 4 = 7  ✓')),
        S("Mistake two: stopping early. Root 8 is 2 root 2, because 4 goes in. Always check that no square number is left inside.", V.rule('Use the biggest square factor.')),
        S("Mistake three: adding unlike surds. Root 2 plus root 3 is not root 5.", r('√2 + √3 = √5  ✗'))
      ]),
      SC('In real life', 'Diagonals', [
        S("A square tile has sides of 1 metre. The diagonal is root 2 metres, by Pythagoras. A builder keeps it as root 2 to stay exact, and only rounds to 1.41 metres at the end when cutting.", g('Diagonal = √2 ≈ 1.41 m'))
      ]),
      L.turn("Your turn! Number one. Simplify the square root of 45. Pause and try it.", E('√45'), "45 is 9 times 5. The root of 9 is 3. So 3 root 5.", g('3√5')),
      L.turn("Your turn! Number two. Work out 4 root 3 plus 2 root 3. Pause and try it.", E('4√3 + 2√3'), "Six root three.", g('6√3')),
      L.turn("Your turn! Number three. Work out root 5 times root 20. Pause and try it.", E('√5 × √20'), "Root 100, which is 10.", g('10')),
      L.rec(T, "A surd is an exact root that is not a whole number. Simplify by taking out the biggest square factor. Add or subtract only like surds. Multiply by multiplying under the root. Rationalise a denominator by multiplying top and bottom by the surd.", ['Take out square factors', 'Add like surds only', '√a × √b = √ab', 'Rationalise the denominator'])
    ]);
  })();

  /* ---- Compound growth ---- */
  (function () {
    var T = 'Compound growth and depreciation';
    L.full(T, [
      SC('Compound change', 'Start with the basics', [
        S("Some things grow by a percentage each year, like a population or an investment. Others shrink by a percentage, like the value of a car. This is called compound change, because each change is on the new amount.", V.cols([V.card('Growth', 'g', true), V.card('Depreciation: shrinking', 'r', true)], 2)),
        S("The key is the multiplier. Growth of 3% each year means the new amount is 103% of the old. That is a multiplier of 1.03. Shrinking by 18% means keeping 82%, a multiplier of 0.82.", E('+3% → × 1.03') + E('−18% → × 0.82')),
        S("To repeat the change for several years, use a power. Multiply the start by the multiplier, raised to the number of years.", E('value = start × multiplierⁿ', 'g'))
      ]),
      SC('Growth', 'Example 1: a town', [
        S("A town has 20,000 people. It grows by 3% a year. How many people after 5 years? The multiplier is 1.03, and the power is 5.", E('20,000 × 1.03⁵')),
        S("On the calculator, 1.03 to the power 5 is about 1.1619. Times 20,000 is about 23,000, 200. The calculator gives 23,185.", g('≈ 23,185 people'))
      ]),
      SC('Depreciation', 'Example 2: a car', [
        S("A car costs £16,000, and loses 18% of its value each year. What is it worth after 3 years? The multiplier is 0.82. The power is 3.", E('16,000 × 0.82³')),
        S("0.82 cubed is about 0.551. Times 16,000 is about £8,822.", g('≈ £8,822'))
      ]),
      SC('How many years?', 'Example 3: doubling', [
        S("How long does an investment take to double at 7% a year? We try different powers of 1.07. To the power 10, it is 1.97. Not quite 2. To the power 11, it is 2.1. That is over 2.", E('1.07¹⁰ ≈ 1.97') + E('1.07¹¹ ≈ 2.10')),
        S("So it takes 11 years to double. This trying of values is called trial and improvement.", g('11 years'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: adding the percentages. 3 years at 18% off is not 54% off. The amount lost gets smaller each year.", r('3 × 18% = 54%  ✗') + g('× 0.82³  ✓')),
        S("Mistake two: using the rate as the multiplier. For a 3% rise, use 1.03, not 0.03.", r('× 0.03  ✗') + g('× 1.03  ✓')),
        S("Mistake three: multiplying by the number of years. Use a power, not a times.", r('1.03 × 5  ✗') + g('1.03⁵  ✓'))
      ]),
      SC('In real life', 'Savings and cars', [
        S("The same idea shows up in both savings and cars. Money in a savings account grows, so it is compound growth. A new car loses value quickest in its first year. That is why people buy second-hand cars.", V.note('Same idea, different multiplier'))
      ]),
      L.turn("Your turn! Number one. A painting worth £5,000 increases by 10% a year. What is it worth after 2 years? Pause and try it.", E('5,000 × 1.1²'), "1.1 squared is 1.21. 5,000 times 1.21 is £6,050.", g('£6,050')),
      L.turn("Your turn! Number two. What multiplier do you use for a 12% decrease? Pause and think.", E('?'), "100 minus 12 is 88. As a decimal, 0.88.", g('0.88')),
      L.turn("Your turn! Number three. A phone worth £400 loses 20% a year. What is it worth after 2 years? Pause and try it.", E('400 × 0.8²'), "0.8 squared is 0.64. 400 times that is £256.", g('£256')),
      L.rec(T, "For compound growth, multiply by 1 plus the rate for each year. For depreciation, multiply by 1 minus the rate. Use a power for many years. Each change is on the new amount, so you cannot just add the percentages.", ['Growth: × (1 + r)ⁿ', 'Depreciation: × (1 − r)ⁿ', 'Each year on the new value', 'Trial and improvement for years'])
    ]);
  })();

  /* ---- Compound interest ---- */
  (function () {
    var T = 'Compound interest';
    L.full(T, [
      SC('Compound interest', 'Start with the basics', [
        S("When you save money in a bank, it pays you interest. With simple interest, you are paid on the original amount only. With compound interest, the interest is added to your balance, and next year you earn interest on the bigger balance. In other words, interest on interest.", V.cols([V.card('Simple: on the start amount', 'b', true), V.card('Compound: on the growing balance', 'g', true)], 2)),
        S("The amount after n years is the starting amount, which is called the principal, times 1 plus the rate, to the power n.", E('A = P × (1 + r)ⁿ', 'g'))
      ]),
      SC('Year by year', 'Example 1: £2,000 at 5%', [
        S("Let's go year by year. You save £2,000 at 5%. After 1 year, you have 2,000 times 1.05. That is £2,100.", E('2,000 × 1.05 = 2,100')),
        S("In year 2, the interest is on 2,100. That is 2,205. Year 3 is £2,315.25.", V.tbl([['1', '£2,100.00'], ['2', '£2,205.00'], ['3', '£2,315.25']], ['Year', 'Balance']))
      ]),
      SC('Using the formula', 'Example 2: 1 calculation', [
        S("The formula does it all in 1 go. 2,000 times 1.05 to the power 3. That is £2,315.25. The same.", g('2,000 × 1.05³ = £2,315.25')),
        S("The interest earned is the final amount minus the start. 2 thousand 3 hundred and 15 25 minus 2,000 is £315.25.", E('A − P = £315.25'))
      ]),
      SC('Compared with simple', 'Example 3: the difference', [
        S("With simple interest, 5% of 2,000 is £100 a year. In 3 years, that is £300. Compound interest gave 3 hundred and 15 25. That is £15.25 more, and the gap grows every year.", E('Simple: £300') + g('Compound: £315.25'))
      ]),
      SC('Monthly rates', 'Example 4: more often', [
        S("Sometimes interest is added every month. A loan at one per cent a month, for twelve months, uses one point zero one to the power twelve. That is about one point one two seven. So the yearly growth is about twelve point seven per cent, more than twelve.", E('1.01¹² ≈ 1.127') + g('≈ 12.7% a year'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: using the rate as a multiplier. 5% is 1.05, not 0.05.", r('× 0.05  ✗') + g('× 1.05  ✓')),
        S("Mistake two: forgetting to subtract the principal when you want the interest. The formula gives the total, not just the interest.", V.rule('Interest = A − P')),
        S("Mistake three: multiplying by the years. Use a power.", r('2,000 × 1.05 × 3  ✗') + g('2,000 × 1.05³  ✓'))
      ]),
      SC('In real life', 'Starting early', [
        S("Compound interest rewards patience. £1,000 at 5% becomes about 1,630 after 10 years. After 30 years, it is more than 4,300. The longer you leave it, the faster it grows.", V.note('Time is the secret'))
      ]),
      L.turn("Your turn! Number one. Find the value of £1,000 after 2 years at 4% compound interest. Pause and try it.", E('1,000 × 1.04²'), "1.04 squared is 1.0816. So £1,081.60.", g('£1,081.60')),
      L.turn("Your turn! Number two. How much interest was earned? Pause and try it.", E('1,081.60 − 1,000'), "£81.60.", g('£81.60')),
      L.turn("Your turn! Number three. What is the multiplier for three point five per cent interest? Pause and think.", E('?'), "1 plus 0.035 is 1.035.", g('1.035')),
      L.rec(T, "Compound interest is added to the balance each period, so you earn interest on interest. Use the amount, times 1 plus the rate, to the power of the number of periods. Interest earned is the final amount minus the start. It always beats simple interest after the first period.", ['A = P(1 + r)ⁿ', 'Interest on interest', 'More than simple interest', 'Interest = A − P'])
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
        S("Someone earns £55,000. The allowance is 12,500. Take it away. 55,000 minus 12,500 is £42,500. That is the taxable income.", g('55,000 − 12,500 = £42,500'))
      ]),
      SC('Two bands', 'Example 2: basic and higher', [
        S("Suppose the first £37,500 of taxable income is taxed at 20%. The rest is taxed at 40%. How much of the 42,500 is in the higher band? 42,500 minus 37,500 is £5,000.", E('42,500 − 37,500 = 5,000')),
        S("Basic tax is 20% of 37,500. That is 7,500. Higher tax is 40% of 5,000. That is 2,000. Add them. £9,500.", E('20% × 37,500 = 7,500') + E('40% × 5,000 = 2,000') + g('Total tax = £9,500'))
      ]),
      SC('Effective rate', 'Example 3: the overall percentage', [
        S("What percentage of the whole salary is that? 9,500 divided by 55,000 is about 0.17. That is about 17%. This is called the effective rate.", g('9,500 ÷ 55,000 ≈ 17%'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: charging the higher rate on all the income. Only the slice above the limit is taxed at the higher rate.", r('40% × 42,500  ✗') + g('Each band its own rate  ✓')),
        S("Mistake two: forgetting to take away the allowance first.", V.rule('Allowance first.')),
        S("Mistake three: mixing up taxable income with the total. Always say which one you are using.", V.rule('Taxable income ≠ salary'))
      ]),
      SC('In real life', 'Pay rise', [
        S("A pay rise puts a little more income into a higher band. Only that extra slice is taxed at the higher rate. Your take-home pay always goes up when you get a pay rise. A bigger salary never makes you worse off.", V.note('Only the extra slice pays the higher rate'))
      ]),
      L.turn("Your turn! Number one. With a £12,000 allowance and 20% tax, how much tax is due on £32,000? Pause and try it.", E('32,000 − 12,000 = ?'), "Taxable income is 20,000. 20% of 20,000 is £4,000.", g('£4,000')),
      L.turn("Your turn! Number two. What is the taxable income of someone earning 40,000 with a 12,500 allowance? Pause and try it.", E('40,000 − 12,500'), "£27,500.", g('£27,500')),
      L.turn("Your turn! Number three. 20% of the first 10,030% of the next 5,000. How much tax? Pause and try it.", E('20% × 10,000 + 30% × 5,000'), "2,000 plus 1,500. £3,500.", g('£3,500')),
      L.rec(T, "Subtract the allowance first. Then tax each slice of income at its own band's rate, and add the amounts. The effective rate is the total tax divided by the total income. Never apply the highest rate to all the income.", ['Allowance: no tax', 'Each band its own rate', 'Add the tax from each band', 'Effective rate = tax ÷ income'])
    ]);
  })();

  /* ---- Density ---- */
  (function () {
    var T = 'Density and other rates';
    L.full(T, [
      SC('Density', 'Start with the basics', [
        S("Which is heavier, a kilogram of feathers or a kilogram of iron? They are the same, of course. But a kilogram of feathers takes up much more space. Density tells us how much mass is packed into each unit of space.", E('Density = Mass ÷ Volume', 'g')),
        S("We often use grams for mass and cubic centimetres for volume. So density is in grams per cubic centimetre. Water has a density of 1. Things with a density below 1 float on water. Things above 1 sink.", V.cols([V.card('Below 1: floats', 'g', true), V.card('Above 1: sinks', 'b', true)], 2))
      ]),
      SC('Finding density', 'Example 1: a metal block', [
        S("A block has a mass of 1,350 grams. Its volume is 500 cubic centimetres. Divide the mass by the volume.", E('1,350 ÷ 500')),
        S("The answer is 2.7 grams per cubic centimetre. That is the density of aluminium.", g('2.7 g/cm³'))
      ]),
      SC('Finding mass', 'Example 2: gold', [
        S("Gold has a density of 19.3 grams per cubic centimetre. What is the mass of 10 cubic centimetres? Now we multiply. Mass equals density times volume.", E('M = D × V')),
        S("19.3 times 10 is 193 grams.", g('193 g'))
      ]),
      SC('Finding volume', 'Example 3: ice', [
        S("Ice has a density of 0.92. What volume has 460 grams of ice? Volume equals mass divided by density.", E('V = M ÷ D')),
        S("460 divided by 0.92 is 500 cubic centimetres.", g('500 cm³'))
      ]),
      SC('The triangle trick', 'A memory aid', [
        S("Here is a helpful trick. Draw a triangle with mass on top, and density and volume at the bottom. Cover the one you want. If you cover density, you see mass over volume. If you cover mass, you see density times volume.", V.cols([V.card('Mass on top', 'b', true), V.card('Density × Volume below', 'g', true)], 2))
      ]),
      SC('Population density', 'Example 4: people per square kilometre', [
        S("Density does not just mean mass. A city has 600,000 people, and covers 120 square kilometres. The population density is 600,000 divided by 120. That is 5,000 people per square kilometre.", g('600,000 ÷ 120 = 5,000 per km²'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: dividing the wrong way round. Density is mass divided by volume.", r('V ÷ M  ✗') + g('M ÷ V  ✓')),
        S("Mistake two: mixing units. Grams go with cubic centimetres. Kilograms go with cubic metres.", V.rule('Match the units.')),
        S("Mistake three: forgetting the units in the answer. Write grams per cubic centimetre.", V.rule('g/cm³'))
      ]),
      SC('In real life', 'Floating ships', [
        S("A steel ship floats, even though steel is dense. The ship is mostly air inside. Its overall density is less than water. That is how enormous ships can float.", V.note('Overall density decides'))
      ]),
      L.turn("Your turn! Number one. A stone has a mass of 240 grams and a volume of 80 cubic centimetres. What is its density? Pause and try it.", E('240 ÷ 80'), "3 grams per cubic centimetre.", g('3 g/cm³')),
      L.turn("Your turn! Number two. A liquid has a density of 0.8. Find the mass of 500 cubic centimetres. Pause and try it.", E('0.8 × 500'), "Four hundred grams.", g('400 g')),
      L.turn("Your turn! Number three. A town has 12,000 people and covers 4 square kilometres. What is its population density? Pause and try it.", E('12,000 ÷ 4'), "3,000 people per square kilometre.", g('3,000 per km²')),
      L.rec(T, "Density is mass divided by volume. Rearrange it to find mass, which is density times volume, or volume, which is mass divided by density. Other rates, like population density, divide 1 quantity by another. Keep the units matching.", ['D = M ÷ V', 'M = D × V', 'V = M ÷ D', 'Units: g/cm³'])
    ]);
  })();

  /* ---- Speed units ---- */
  (function () {
    var T = 'Changing units of speed';
    L.full(T, [
      SC('Speed units', 'Start with the basics', [
        S("Speed can be measured in different units. Cars use miles per hour in the UK, and kilometres per hour in most of the world. Scientists often use metres per second. To change units, we have to change the distance unit and the time unit.", V.cards(['km/h', 'm/s', 'mph'], ['b', 'p', 'g'])),
        S("It sounds hard, but there is a simple rule. To go from kilometres per hour to metres per second, divide by 3.6. To go the other way, multiply by 3.6.", V.cols([V.card('km/h ÷ 3.6 = m/s', 'g', true), V.card('m/s × 3.6 = km/h', 'b', true)], 2))
      ]),
      SC('Why 3.6?', 'Where the rule comes from', [
        S("Let's see where 3.6 comes from. 1 kilometre is 1,000 metres. 1 hour is 3,600 seconds. So 1 kilometre per hour is 1,000 metres in 3,600 seconds.", E('1 km/h = 1,000 m ÷ 3,600 s')),
        S("That is the same as 1 over 3.6 metres per second. That is why we divide by 3.6.", g('3,600 ÷ 1,000 = 3.6'))
      ]),
      SC('km/h to m/s', 'Example 1: 72 km/h', [
        S("Change 72 kilometres per hour to metres per second. Divide by 3.6. 72 divided by 3.6 is 20.", g('72 ÷ 3.6 = 20 m/s')),
        S("Check by the long way. 72 kilometres is 72,000 metres. 72,000 divided by 3,600 seconds is 20. It matches.", E('72,000 ÷ 3,600 = 20 ✓'))
      ]),
      SC('m/s to km/h', 'Example 2: 15 m/s', [
        S("Now change 15 metres per second to kilometres per hour. Multiply by 3.6. 15 times 3.6 is 54.", g('15 × 3.6 = 54 km/h'))
      ]),
      SC('Miles and kilometres', 'Example 3: mph', [
        S("1 mile is about 1.6 kilometres. A speed limit of 70 miles per hour is about 70 times 1.6. That is 112 kilometres per hour.", g('70 × 1.6 = 112 km/h')),
        S("Going back, 112 divided by 1.6 is 70. Always multiply to go from miles to kilometres, and divide to come back.", E('112 ÷ 1.6 = 70 ✓'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: multiplying when you should divide. Ask yourself, will the answer be a bigger number or a smaller number? A speed in metres per second is a smaller number than in kilometres per hour.", V.rule('m/s numbers are smaller.')),
        S("Mistake two: only changing 1 unit. Both the distance and the time must change. That is the whole reason for 3.6.", V.rule('Change both units.')),
        S("Mistake three: using 60 instead of 3.6. 60 only changes hours to minutes.", r('÷ 60  ✗') + g('÷ 3.6  ✓'))
      ]),
      SC('In real life', 'Sprinters', [
        S("A top sprinter runs at about 10 metres per second. Multiply by 3.6. That is 36 kilometres per hour, faster than a car in a town.", g('10 × 3.6 = 36 km/h'))
      ]),
      L.turn("Your turn! Number one. Convert 36 kilometres per hour to metres per second. Pause and try it.", E('36 ÷ 3.6'), "10 metres per second.", g('10 m/s')),
      L.turn("Your turn! Number two. Convert 20 metres per second to kilometres per hour. Pause and try it.", E('20 × 3.6'), "72 kilometres per hour.", g('72 km/h')),
      L.turn("Your turn! Number three. About how many kilometres per hour is 30 miles per hour? Pause and try it.", E('30 × 1.6'), "48 kilometres per hour.", g('48 km/h')),
      L.rec(T, "Change both the distance unit and the time unit. To go from kilometres per hour to metres per second, divide by 3.6. To go back, multiply. A mile is about 1.6 kilometres. Check that your answer is sensible.", ['km/h ÷ 3.6 = m/s', 'm/s × 3.6 = km/h', 'mph × 1.6 ≈ km/h', 'Check it is sensible'])
    ]);
  })();

  /* ---- Volume of cones and spheres ---- */
  (function () {
    var T = 'Volume of cones and spheres';
    L.full(T, [
      SC('Volume', 'Start with the basics', [
        S("Volume is the amount of space inside a solid. For a prism, we multiply the base area by the height. Cones, pyramids and spheres need their own formulae.", V.tbl([['Cone', '⅓πr²h'], ['Pyramid', '⅓ × base × h'], ['Sphere', '⁴⁄₃πr³']], ['Solid', 'Volume'])),
        S("Here is a nice fact. A cone is exactly 1 third of a cylinder with the same base and the same height. Fill a cone with water 3 times, and you fill the cylinder. A pyramid is also 1 third of a prism.", V.rule('Cone or pyramid = ⅓ of the prism.'))
      ]),
      SC('Cone', 'Example 1: r = 3, h = 10', [
        S("A cone has a radius of 3 centimetres and a height of 10. Use 1 third times pi times r squared times h. The radius squared is 9.", E('⅓ × π × 3² × 10')),
        S("A third of 9 times 10 is 30. So 30 pi. As a decimal, about 94.2 cubic centimetres.", g('30π ≈ 94.2 cm³'))
      ]),
      SC('Pyramid', 'Example 2: square base 6, height 8', [
        S("A pyramid has a square base of side 6, and a height of 8. The base area is 36. 1 third times 36 times 8. 36 times 8 is 288. A third of that is 96.", g('⅓ × 36 × 8 = 96 cm³'))
      ]),
      SC('Sphere', 'Example 3: r = 6', [
        S("For a sphere of radius 6, use 4 thirds pi r cubed. 6 cubed is 216. 4 thirds of 216 is 288. So 288 pi.", E('⁴⁄₃ × π × 6³ = 288π')),
        S("On the calculator, that is about 904.8 cubic centimetres.", g('≈ 904.8 cm³'))
      ]),
      SC('Hemisphere', 'Example 4: half a sphere', [
        S("A hemisphere is half a sphere. Take the sphere's volume and halve it. 904.8, divided by 2, is 452.4 cubic centimetres.", g('≈ 452.4 cm³'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: forgetting the one third on a cone or pyramid.", r('πr²h  ✗') + g('⅓πr²h  ✓')),
        S("Mistake two: using the slant height. Volume needs the straight up height, at right angles to the base.", V.rule('Perpendicular height.')),
        S("Mistake three: cubing wrongly. r cubed means r times r times r, not r times 3.", r('6³ = 18  ✗') + g('6³ = 216  ✓'))
      ]),
      SC('In real life', 'Ice cream', [
        S("An ice cream cone holds its volume of ice cream, plus a half sphere of ice cream on top. A shop works out how much ice cream each portion needs, using exactly these 2 formulae.", V.note('Cone + hemisphere'))
      ]),
      L.turn("Your turn! Number one. Find the volume of a cone with radius 5 and height 12, in terms of pi. Pause and try it.", E('⅓ × π × 25 × 12'), "25 times 12 is 300. A third is 100. So 100 pi.", g('100π ≈ 314')),
      L.turn("Your turn! Number two. Find the volume of a sphere with radius 3, in terms of pi. Pause and try it.", E('⁴⁄₃ × π × 27'), "4 thirds of 27 is 36. So 36 pi.", g('36π')),
      L.turn("Your turn! Number three. A pyramid has a base area of 40 and height 9. Find its volume. Pause and try it.", E('⅓ × 40 × 9'), "40 times 9 is 360. A third is 120.", g('120')),
      L.rec(T, "Cones and pyramids are one third of the matching cylinder or prism. A sphere's volume is 4 thirds pi r cubed. A hemisphere is half of that. Always use the perpendicular height.", ['Cone: ⅓πr²h', 'Pyramid: ⅓ base × h', 'Sphere: ⁴⁄₃πr³', 'Hemisphere: half'])
    ]);
  })();

  /* ---- Surface area of cones and spheres ---- */
  (function () {
    var T = 'Surface area of cones and spheres';
    L.full(T, [
      SC('Surface area', 'Start with the basics', [
        S("Surface area is the total area of the outside of a solid. Think of the paper you would need to wrap it. For a cone, there is a curved part and a flat circle at the bottom. A sphere has 1 curved surface.", V.tbl([['Cone curved', 'πrl'], ['Cone total', 'πrl + πr²'], ['Sphere', '4πr²']], ['Surface', 'Area'])),
        S("In the cone formula, l is the slant height. That is the length from the tip down the sloping side to the edge. It is not the straight up height.", V.rule('l = slant height'))
      ]),
      SC('Slant height', 'Example 1: Pythagoras', [
        S("Often you are given the straight up height, and need to find the slant height. A cone has radius 3 and height 4. The slant height is the longest side of a right-angled triangle. Use Pythagoras.", E('l² = 3² + 4²')),
        S("9 plus 16 is 25. The square root of 25 is 5. The slant height is 5.", g('l = 5'))
      ]),
      SC('Cone surface area', 'Example 2: r = 3, l = 5', [
        S("Now find the total surface area. The curved part is pi times r times l. That is pi times 3 times 5. 15 pi.", E('πrl = 15π')),
        S("The flat circle on the bottom is pi r squared. That is 9 pi. Add them. 24 pi, which is about 75.4 square centimetres.", E('πr² = 9π') + g('24π ≈ 75.4 cm²'))
      ]),
      SC('Sphere', 'Example 3: r = 5', [
        S("For a sphere, use 4 pi r squared. The radius is 5. 5 squared is 25. 4 times 25 is 100. So 100 pi, about 314 square centimetres.", g('4π × 25 = 100π ≈ 314 cm²'))
      ]),
      SC('Hemisphere', 'Example 4: a solid half-ball', [
        S("A solid hemisphere has a curved part and a flat circle. The curved part is half a sphere. For radius 5, that is 50 pi. The flat circle is pi r squared, 25 pi. Add them. 75 pi.", E('50π + 25π') + g('= 75π ≈ 235.6 cm²'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: using the up height instead of the slant height in pi r l.", r('πrh  ✗') + g('πrl  ✓')),
        S("Mistake two: forgetting the flat face on a solid hemisphere or a cone with a base.", V.rule('Add the flat circle.')),
        S("Mistake three: mixing up area and volume. Surface area is in square units. Volume is in cubic units.", V.cols([V.card('Area: cm²', 'b', true), V.card('Volume: cm³', 'g', true)], 2))
      ]),
      SC('In real life', 'Party hats', [
        S("A party hat is a cone with no base. To find how much card is needed, we use only pi r l. A hat with radius 6 and slant height 15 needs 90 pi square centimetres of card, about 283.", g('π × 6 × 15 = 90π ≈ 283 cm²'))
      ]),
      L.turn("Your turn! Number one. Find the surface area of a sphere with radius 2, in terms of pi. Pause and try it.", E('4π × 2²'), "4 times 4 is 16. So 16 pi.", g('16π ≈ 50.3')),
      L.turn("Your turn! Number two. A cone has radius 5 and slant height 13. Find its curved surface area. Pause and try it.", E('π × 5 × 13'), "65 pi, about 204 square centimetres.", g('65π ≈ 204 cm²')),
      L.turn("Your turn! Number three. A cone has radius 5 and height 12. Find the slant height. Pause and try it.", E('√(5² + 12²)'), "25 plus a hundred and 44 is a hundred and 69. The square root is 13.", g('13')),
      L.rec(T, "A cone's curved surface is pi r l, where l is the slant height. Add pi r squared for the base. A sphere's surface area is 4 pi r squared. Use Pythagoras to find a slant height. Do not forget the flat face on a solid hemisphere.", ['Cone curved: πrl', 'Add the base πr²', 'Sphere: 4πr²', 'Slant height by Pythagoras'])
    ]);
  })();
  /* ---- Common factors and difference of two squares ---- */
  (function () {
    var T = 'Common factors and difference of two squares';
    L.full(T, [
      SC('Factorising', 'Start with the basics', [
        S("Expanding means removing brackets. Factorising is the opposite. It means putting the brackets back. It is like finding the factors of a number, but with letters.", E('3(x + 2) = 3x + 6') + E('3x + 6 = 3(x + 2)', 'g')),
        S("There are 2 methods in this lesson. First, always look for a common factor. Second, check for something called a difference of 2 squares.", V.cols([V.card('1. Common factor', 'b', true), V.card('2. Difference of 2 squares', 'g', true)], 2))
      ]),
      SC('Common factor', 'Example 1: 8x² + 12x', [
        S("Look at the numbers, 8 and 12. The highest number that goes into both is 4. Look at the letters. Both terms have at least 1 x. So the highest common factor is 4 x.", E('HCF of 8x² and 12x = 4x')),
        S("Write 4 x outside a bracket. Inside, write what is left. 8 x squared divided by 4 x is 2 x. 12 x divided by 4 x is 3.", g('8x² + 12x = 4x(2x + 3)')),
        S("Check by expanding. 4 x times 2 x is 8 x squared. 4 x times 3 is 12 x. It matches.", E('4x × 2x + 4x × 3 ✓'))
      ]),
      SC('Difference of two squares', 'Example 2: x² − 49', [
        S("Here is a special pattern. Something squared, minus something else squared. We call it a difference of 2 squares. The rule is, a squared minus b squared equals a plus b, times a minus b.", E('a² − b² = (a + b)(a − b)', 'g')),
        S("Look at x squared minus 49. x squared is x squared. And 49 is 7 squared. So a is x and b is 7.", E('x² − 7²')),
        S("The answer is x plus 7, times x minus 7.", g('(x + 7)(x − 7)'))
      ]),
      SC('With coefficients', 'Example 3: 9y² − 25', [
        S("9 y squared is 3 y all squared. 25 is 5 squared. So a is 3 y and b is 5. The answer is 3 y plus 5, times 3 y minus 5.", E('(3y)² − 5²') + g('(3y + 5)(3y − 5)'))
      ]),
      SC('Both methods', 'Example 4: 2x² − 18', [
        S("Always take out a common factor first. Both terms have a 2. 2, bracket, x squared minus 9.", E('2(x² − 9)')),
        S("Now look inside. x squared minus 9 is a difference of 2 squares. 9 is 3 squared. So the full answer is 2, times x plus 3, times x minus 3.", g('2(x + 3)(x − 3)'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: not taking out the highest common factor. If you only take out 2 x, you are not finished.", r('8x² + 12x = 2x(4x + 6)  ✗') + g('= 4x(2x + 3)  ✓')),
        S("Mistake two: using the rule on a sum. x squared plus 49 cannot be factorised this way. It must be a difference, a minus sign.", r('x² + 49  ✗  not (x + 7)(x + 7)')),
        S("Mistake three: forgetting to check. Expand your brackets. You must get back to where you started.", V.rule('Always check by expanding.'))
      ]),
      SC('In real life', 'Mental arithmetic', [
        S("The pattern gives a trick for mental arithmetic. 53 times 47 is 50 plus 3, times 50 minus 3. That is 50 squared minus 3 squared. 2,500 minus 9 is 2,491.", g('53 × 47 = 50² − 3² = 2,491'))
      ]),
      L.turn("Your turn! Number one. Factorise x squared minus 100. Pause and try it.", E('x² − 100'), "100 is 10 squared. So x plus 10, times x minus 10.", g('(x + 10)(x − 10)')),
      L.turn("Your turn! Number two. Factorise 6 x squared plus 9 x. Pause and try it.", E('6x² + 9x'), "The highest common factor is 3 x. 3 x, bracket, 2 x plus 3.", g('3x(2x + 3)')),
      L.turn("Your turn! Number three. Factorise 3 x squared minus 12 completely. Pause and try it.", E('3x² − 12'), "Take out 3. x squared minus 4. That is x plus 2, times x minus 2. So 3, times x plus 2, times x minus 2.", g('3(x + 2)(x − 2)')),
      L.rec(T, "Always take out the highest common factor first. Then look for a difference of 2 squares. a squared minus b squared is a plus b, times a minus b. Check by expanding. A sum of 2 squares cannot be factorised this way.", ['HCF first', 'a² − b²', '= (a + b)(a − b)', 'Check by expanding'])
    ]);
  })();

  /* ---- Factorising quadratics ---- */
  (function () {
    var T = 'Factorising quadratics';
    L.full(T, [
      SC('Quadratics', 'Start with the basics', [
        S("A quadratic expression has an x squared term. For example, x squared plus 7 x plus 12. Factorising it means writing it as 2 brackets multiplied together.", E('x² + 7x + 12', 'b')),
        S("Let's see how brackets expand, to understand the reverse. x plus 3, times x plus 4. x times x is x squared. Then 4 x and 3 x, which makes 7 x. And 3 times 4 is 12.", E('(x + 3)(x + 4) = x² + 7x + 12', 'g')),
        S("Look at the numbers. 3 and 4 multiply to make 12. They add to make 7. That is the secret. To factorise, find 2 numbers that multiply to give the last number, and add to give the middle number.", V.cols([V.card('Multiply → last', 'b', true), V.card('Add → middle', 'g', true)], 2))
      ]),
      SC('Positive terms', 'Example 1: x² + 7x + 12', [
        S("We need 2 numbers that multiply to 12, and add to 7. List the pairs that make 12. 1 and 12, add to 13. 2 and 6, add to 8. 3 and 4, add to 7. That is the pair.", E('3 × 4 = 12') + E('3 + 4 = 7', 'g')),
        S("So the answer is x plus 3, times x plus 4.", g('(x + 3)(x + 4)'))
      ]),
      SC('Negative last number', 'Example 2: x² + 2x − 15', [
        S("Now the last number is negative 15. The 2 numbers must have different signs, 1 positive and 1 negative. They multiply to negative 15, and add to 2. Try 5 and negative 3. 5 times negative 3 is negative 15. 5 plus negative 3 is 2.", E('5 × (−3) = −15') + E('5 + (−3) = 2', 'g')),
        S("So the answer is x plus 5, times x minus 3.", g('(x + 5)(x − 3)'))
      ]),
      SC('Negative middle', 'Example 3: x² − 9x + 20', [
        S("The last number is positive, but the middle is negative. That means both numbers are negative. They multiply to 20 and add to negative 9. Negative 4 and negative 5 work. Negative 4 times negative 5 is 20. Their sum is negative 9.", E('(−4) × (−5) = 20') + E('(−4) + (−5) = −9', 'g')),
        S("The answer is x minus 4, times x minus 5.", g('(x − 4)(x − 5)'))
      ]),
      SC('Solving', 'Example 4: x² + 2x − 15 = 0', [
        S("Factorising helps us solve equations. We have x plus 5, times x minus 3, equals 0. If 2 things multiply to make 0, one of them must be 0.", E('(x + 5)(x − 3) = 0')),
        S("So either x plus 5 is 0, which gives x equals negative 5. Or x minus 3 is 0, which gives x equals 3. There are 2 solutions.", g('x = −5   or   x = 3'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: getting the signs wrong. Check your 2 numbers both multiply and add correctly.", V.rule('× to the last, + to the middle.')),
        S("Mistake two: giving only one solution. A quadratic equation usually has 2.", V.rule('2 brackets, 2 answers.')),
        S("Mistake three: not checking. Expand your brackets and make sure you get the original.", V.rule('Expand to check.'))
      ]),
      SC('In real life', 'Areas', [
        S("A rectangular garden has area x squared plus 7 x plus 12 square metres. Factorising gives x plus 3 by x plus 4. So the sides are x plus 3 and x plus 4 metres. A gardener can then work out the length of fence needed.", g('Sides: (x + 3) and (x + 4)'))
      ]),
      L.turn("Your turn! Number one. Factorise x squared plus x minus 20. Pause and try it.", E('x² + x − 20'), "We need numbers that multiply to negative 20 and add to 1. 5 and negative 4. So x plus 5, times x minus 4.", g('(x + 5)(x − 4)')),
      L.turn("Your turn! Number two. Factorise x squared minus 7 x plus 10. Pause and try it.", E('x² − 7x + 10'), "Multiply to 10, add to negative 7. Negative 2 and negative 5. So x minus 2, times x minus 5.", g('(x − 2)(x − 5)')),
      L.turn("Your turn! Number three. Solve x squared minus 9 x plus 20 equals 0. Pause and try it.", E('(x − 4)(x − 5) = 0'), "x minus 4 is 0, or x minus 5 is 0. So x is 4 or 5.", g('x = 4 or 5')),
      L.rec(T, "To factorise x squared plus b x plus c, find 2 numbers that multiply to c and add to b. If c is negative, the numbers have different signs. If c is positive, they share the sign of b. Check by expanding. To solve, set each bracket to 0.", ['× to c', '+ to b', 'Watch the signs', 'Each bracket = 0 to solve'])
    ]);
  })();

  /* ---- Equations with fractions ---- */
  (function () {
    var T = 'Equations with fractions';
    L.full(T, [
      SC('Fractions in equations', 'Start with the basics', [
        S("Fractions can make equations look scary. But there is a trick. We multiply to get rid of the fractions. This is called clearing the fractions. Then it is an ordinary equation.", V.rule('Multiply every term to clear the fractions.')),
        S("What do we multiply by? The denominator. If there is more than 1 denominator, we multiply by the lowest common multiple. The most important rule is to multiply every term, on both sides.", V.rule('Every term. Both sides.'))
      ]),
      SC('One fraction', 'Example 1: x/4 = 7', [
        S("x over 4 equals 7. Multiply both sides by 4. x equals 28.", E('x/4 = 7') + g('x = 28'))
      ]),
      SC('Fraction plus number', 'Example 2: (x + 3)/5 = 4', [
        S("The whole top is divided by 5. Multiply both sides by 5. That gives x plus 3 equals 20. Subtract 3. x equals 17.", E('x + 3 = 20') + g('x = 17')),
        S("Check. 17 plus 3 is 20. 20 divided by 5 is 4. Correct.", E('20 ÷ 5 = 4 ✓'))
      ]),
      SC('Two fractions', 'Example 3: x/2 + x/3 = 10', [
        S("2 denominators, 2 and 3. The lowest common multiple is 6. Multiply every term by 6.", E('6 × x/2 + 6 × x/3 = 6 × 10')),
        S("6 times x over 2 is 3 x. 6 times x over 3 is 2 x. And 6 times 10 is 60. 3 x plus 2 x equals 60. 5 x equals 60. x is 12.", E('3x + 2x = 60') + g('x = 12'))
      ]),
      SC('Fractions both sides', 'Example 4: (2x − 1)/3 = (x + 4)/2', [
        S("The denominators are 3 and 2. Multiply both sides by 6. On the left, 6 divided by 3 is 2. So 2 times 2 x minus 1. On the right, 6 divided by 2 is 3. So 3 times x plus 4.", E('2(2x − 1) = 3(x + 4)')),
        S("Expand the brackets. 4 x minus 2 equals 3 x plus 12. Subtract 3 x. x minus 2 equals 12. Add 2. x equals 14.", E('4x − 2 = 3x + 12') + g('x = 14'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: not multiplying every term. In x over 3 plus 2, the 2 must also be multiplied by 3.", r('x + 2 = 9 × 3  ✗') + g('x + 6 = 27  ✓')),
        S("Mistake two: forgetting brackets. 2 times 2 x minus 1 needs brackets, so that both parts get multiplied.", V.rule('Use brackets.')),
        S("Mistake three: adding denominators. x over 2 plus x over 3 is not x over 5.", r('x/2 + x/3 = x/5  ✗'))
      ]),
      SC('In real life', 'Sharing costs', [
        S("Half of a prize pot goes to the winner, and a third goes to the runner-up. Together they get £10. How big is the pot? x over 2 plus x over 3 equals 10. Solving gives x equals 12. The pot is £12.", g('x = 12'))
      ]),
      L.turn("Your turn! Number one. Solve x over 3 plus 2 equals 9. Pause and try it.", E('x/3 + 2 = 9'), "Subtract 2. x over 3 equals 7. Multiply by 3. x is 21.", g('x = 21')),
      L.turn("Your turn! Number two. Solve x over 4 plus x over 2 equals 6. Pause and try it.", E('x/4 + x/2 = 6'), "Multiply by 4. x plus 2 x equals 24. 3 x equals 24. x is 8.", g('x = 8')),
      L.turn("Your turn! Number three. Solve x plus 5, over 2, equals 6. Pause and try it.", E('(x + 5)/2 = 6'), "Multiply by 2. x plus 5 equals 12. x is 7.", g('x = 7')),
      L.rec(T, "Multiply every term by the lowest common multiple of the denominators to clear the fractions. Use brackets where needed. Then solve as normal, and check by substituting.", ['Find the LCM of denominators', 'Multiply every term', 'Solve as normal', 'Check'])
    ]);
  })();

  /* ---- Changing the subject and inequations ---- */
  (function () {
    var T = 'Changing the subject and inequations';
    L.full(T, [
      SC('Changing the subject', 'Start with the basics', [
        S("In a formula, the subject is the letter on its own on 1 side. In A equals pi r squared, A is the subject. Changing the subject means rearranging the formula so that a different letter is on its own.", E('A = πr²  →  r = √(A ÷ π)', 'g')),
        S("We use the same method as for solving equations. Do the same to both sides, and undo the operations in reverse order. The only difference is that we are working with letters.", V.rule('Same to both sides. Undo in reverse.'))
      ]),
      SC('One step', 'Example 1: P = 4s', [
        S("The perimeter of a square is 4 times the side. To make s the subject, undo the multiplying by 4. Divide both sides by 4. s equals P over 4.", g('s = P ÷ 4'))
      ]),
      SC('Two steps', 'Example 2: y = 3x + 5', [
        S("Make x the subject of y equals 3 x plus 5. Undo the plus 5 first. Subtract 5. y minus 5 equals 3 x. Then undo the times 3. Divide by 3.", E('y − 5 = 3x') + g('x = (y − 5) ÷ 3'))
      ]),
      SC('With a square', 'Example 3: A = πr²', [
        S("To make r the subject of A equals pi r squared, divide by pi first. A over pi equals r squared. Now undo the square with a square root. r equals the square root of A over pi.", E('A ÷ π = r²') + g('r = √(A ÷ π)'))
      ]),
      SC('Inequations', 'Example 4: 5 − 2x < 11', [
        S("An inequation uses a sign like less than or greater than instead of equals. We solve it in the same way. But there is 1 special rule. If you multiply or divide by a negative number, you must flip the sign.", V.rule('Negative × or ÷: flip the sign.')),
        S("Solve 5 minus 2 x is less than 11. Subtract 5. Negative 2 x is less than 6. Now divide by negative 2. The sign flips. x is greater than negative 3.", E('−2x < 6') + g('x > −3'))
      ]),
      SC('Checking an inequation', 'Why flip?', [
        S("Let's check. Try x equals 0, which is bigger than negative 3. 5 minus 0 is 5. 5 is less than 11. True. Try x equals negative 5, which is smaller than negative 3. 5 plus 10 is 15, which is not less than 11. False. So x greater than negative 3 is right.", E('x = 0: 5 < 11 ✓') + E('x = −5: 15 < 11 ✗', 'r'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: forgetting to flip the sign when dividing by a negative. This is the most common slip.", V.rule('Divide by a negative: flip.')),
        S("Mistake two: undoing in the wrong order. Undo adding and subtracting first. Then undo multiplying and dividing.", V.rule('Add/subtract first.')),
        S("Mistake three: leaving a part out. In y minus 5 over 3, the 5 and the y are both divided by 3.", V.rule('Brackets: (y − 5) ÷ 3'))
      ]),
      SC('In real life', 'Fuel formula', [
        S("A car uses a formula, D equals M times G, where D is distance, M is miles per gallon, and G is gallons. To find how many gallons you need, make G the subject. G equals D over M. For a journey of 300 miles at 50 miles per gallon, that is 6 gallons.", g('G = 300 ÷ 50 = 6'))
      ]),
      L.turn("Your turn! Number one. Make t the subject of v equals u plus a t. Pause and try it.", E('v = u + at'), "Subtract u. v minus u equals a t. Divide by a. t equals v minus u, over a.", g('t = (v − u) ÷ a')),
      L.turn("Your turn! Number two. Solve 3 x plus 2 is less than 20. Pause and try it.", E('3x + 2 < 20'), "Subtract 2. 3 x is less than 18. Divide by 3. x is less than 6.", g('x < 6')),
      L.turn("Your turn! Number three. Solve 10 minus x is greater than 4. Pause and try it.", E('10 − x > 4'), "Subtract 10. Negative x is greater than negative 6. Multiply by negative 1 and flip. x is less than 6.", g('x < 6')),
      L.rec(T, "Rearrange by undoing the operations in reverse order, doing the same to both sides. To undo a square, use a square root. In inequations, flip the sign when you multiply or divide by a negative. Check with a number.", ['Undo in reverse order', 'Same to both sides', 'Inequation: flip for negatives', 'Check with numbers'])
    ]);
  })();

  /* ---- Parallel and perpendicular ---- */
  (function () {
    var T = 'Parallel and perpendicular lines';
    L.full(T, [
      SC('Gradients', 'Start with the basics', [
        S("The gradient of a line tells us how steep it is. It is the rise divided by the run. In y equals m x plus c, m is the gradient and c is where the line crosses the y-axis.", E('y = mx + c', 'g') + V.cols([V.card('m: gradient', 'b', true), V.card('c: y-intercept', 'p', true)], 2)),
        S("2 special relationships matter. Parallel lines never meet, like railway tracks. They have the same gradient. Perpendicular lines meet at a right angle. Their gradients multiply to give negative 1.", V.cards(['Parallel: m₁ = m₂', 'Perpendicular: m₁ × m₂ = −1'], ['b', 'g']))
      ]),
      SC('Parallel', 'Example 1: same gradient', [
        S("y equals 3 x plus 1, and y equals 3 x minus 4. Both have a gradient of 3. So they are parallel. They only differ in where they cross the y-axis.", E('m = 3 for both', 'g'))
      ]),
      SC('Perpendicular', 'Example 2: negative reciprocal', [
        S("A line has gradient 2. What is the gradient of a perpendicular line? Flip the number upside down, and change the sign. 2 is 2 over 1. Flip it. 1 over 2. Change the sign. Negative a half.", E('2 → ½ → −½')),
        S("Check. 2 times negative a half is negative 1. Correct.", g('2 × (−½) = −1 ✓'))
      ]),
      SC('Another one', 'Example 3: gradient −3', [
        S("What is perpendicular to gradient negative 3? Negative 3 is negative 3 over 1. Flip it. 1 over negative 3. Change the sign. Positive one third.", E('−3 → 1/3', 'g'))
      ]),
      SC('Finding an equation', 'Example 4: through a point', [
        S("Find the line parallel to y equals 2 x plus 1 that goes through the point 3, 11. Parallel means the gradient is 2. So y equals 2 x plus c.", E('y = 2x + c')),
        S("Put in the point. x is 3 and y is 11. 11 equals 6 plus c. So c is 5.", E('11 = 6 + c') + g('y = 2x + 5'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: changing only the sign. The perpendicular to gradient 2 is negative a half, not negative 2.", r('−2  ✗') + g('−½  ✓')),
        S("Mistake two: flipping but forgetting the sign change. The perpendicular to a half is negative 2, not 2.", V.rule('Flip AND change the sign.')),
        S("Mistake three: mixing the 2 rules. Parallel means equal. Perpendicular means negative reciprocal.", V.cols([V.card('Parallel: equal', 'b', true), V.card('Perpendicular: −1/m', 'g', true)], 2))
      ]),
      SC('In real life', 'Road layouts', [
        S("City planners use these rules. Streets in a grid are parallel to each other, and cross other streets at right angles. On a map with coordinates, the gradient shows whether a new street will be perpendicular to an existing 1.", V.note('Maps use gradients'))
      ]),
      L.turn("Your turn! Number one. What is the gradient of a line perpendicular to y equals negative 3 x plus 2? Pause and think.", E('?'), "The negative reciprocal of negative 3. One third.", g('⅓')),
      L.turn("Your turn! Number two. Is y equals 4 x minus 1 parallel to y equals 4 x plus 6? Pause and think.", E('?'), "Both have gradient 4. Yes, they are parallel.", g('Yes')),
      L.turn("Your turn! Number three. Find the line parallel to y equals 5 x minus 2 through the point 1, 9. Pause and try it.", E('y = 5x + c'), "Put in 1 and 9. 9 equals 5 plus c. So c is 4. y equals 5 x plus 4.", g('y = 5x + 4')),
      L.rec(T, "Parallel lines share the same gradient. Perpendicular gradients multiply to negative 1. To find 1, flip the gradient upside down and change the sign. To find an equation through a point, find the gradient, then substitute the point to find c.", ['Parallel: same m', 'Perpendicular: −1/m', 'Substitute a point for c', 'Check with a sketch'])
    ]);
  })();

  /* ---- ax + by = c ---- */
  (function () {
    var T = 'Lines in the form ax + by = c';
    L.full(T, [
      SC('Another form', 'Start with the basics', [
        S("So far we have written lines as y equals m x plus c. But lines can be written another way. a x plus b y equals c. For example, 2 x plus 3 y equals 12. Both forms describe straight lines.", E('2x + 3y = 12', 'b')),
        S("To see the gradient, we rearrange into y equals m x plus c. That is just like changing the subject. We make y the subject.", V.rule('Make y the subject.'))
      ]),
      SC('Rearranging', 'Example 1: 2x + 3y = 12', [
        S("Subtract 2 x from both sides. 3 y equals negative 2 x plus 12. Now divide everything by 3.", E('3y = −2x + 12')),
        S("y equals negative 2 thirds x plus 4. So the gradient is negative 2 thirds, and the line crosses the y-axis at 4.", g('y = −⅔x + 4'))
      ]),
      SC('Intercepts', 'Example 2: a quick sketch', [
        S("There is a quicker way to draw it. Find where the line crosses each axis. When x is 0, 2 times 0 is 0, so 3 y equals 12, and y is 4.", E('x = 0 → y = 4')),
        S("When y is 0, 2 x equals 12, so x is 6. Join 0, 4 to 6, 0. That is the line.", E('y = 0 → x = 6') + g('(0, 4) and (6, 0)'))
      ]),
      SC('Is the point on the line?', 'Example 3: substitute', [
        S("Is the point 3, 2 on the line 2 x plus 3 y equals 12? Put in x equals 3 and y equals 2. 2 times 3 is 6. 3 times 2 is 6. 6 plus 6 is 12. Yes. The point is on the line.", E('2(3) + 3(2) = 12 ✓', 'g'))
      ]),
      SC('Another line', 'Example 4: x − 2y = 8', [
        S("Find the gradient of x minus 2 y equals 8. Subtract x. Negative 2 y equals negative x plus 8. Divide by negative 2. y equals a half x minus 4. The gradient is a half. Notice that dividing by a negative changes every sign.", E('−2y = −x + 8') + g('y = ½x − 4'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: forgetting to divide every term. In 3 y equals negative 2 x plus 12, all of the right side is divided by 3.", r('y = −2x + 4  ✗') + g('y = −⅔x + 4  ✓')),
        S("Mistake two: sign errors when moving a term across. Subtracting 2 x gives negative 2 x.", V.rule('Move it: change the sign.')),
        S("Mistake three: mixing up the 2 intercepts. Set x to 0 to get the y-intercept. Set y to 0 to get the x-intercept.", V.cols([V.card('x = 0 → y-intercept', 'b', true), V.card('y = 0 → x-intercept', 'g', true)], 2))
      ]),
      SC('In real life', 'Budget lines', [
        S("A school has £20 to spend. Pencils cost £2 a pack, and pens cost £4 a pack. The equation 2 p plus 4 n equals 20 shows every possible combination. 10 packs of pencils and no pens, or 5 packs of pens and no pencils. And many mixes in between.", g('2p + 4n = 20'))
      ]),
      L.turn("Your turn! Number one. Where does 5 x plus 2 y equals 20 cross the y-axis? Pause and try it.", E('x = 0'), "2 y equals 20. y is 10. At 0, 10.", g('(0, 10)')),
      L.turn("Your turn! Number two. Where does it cross the x-axis? Pause and try it.", E('y = 0'), "5 x equals 20. x is 4. At 4, 0.", g('(4, 0)')),
      L.turn("Your turn! Number three. Rearrange x plus y equals 7 into y equals m x plus c. Pause and try it.", E('x + y = 7'), "Subtract x. y equals negative x plus 7. The gradient is negative 1.", g('y = −x + 7')),
      L.rec(T, "Rearrange a x plus b y equals c into y equals m x plus c to read the gradient. Find the intercepts by setting x to 0, then y to 0. Substitute a point to test whether it is on the line.", ['Rearrange for m', 'x = 0 → y-intercept', 'y = 0 → x-intercept', 'Substitute to test'])
    ]);
  })();

  /* ---- Solving by graph ---- */
  (function () {
    var T = 'Solving by graph';
    L.full(T, [
      SC('Simultaneous equations', 'Start with the basics', [
        S("Sometimes we have 2 equations, with 2 unknowns, x and y. We want values that work in both equations at the same time. These are called simultaneous equations.", V.list(['Two equations', 'Two unknowns', 'One pair of values that fits both'])),
        S("Here is the picture. Each equation is a straight line. A point on a line fits that equation. A point on both lines fits both. So the solution is where the 2 lines cross.", V.note('Crossing point = solution'))
      ]),
      SC('Example', 'Example 1: y = x + 1 and y = 7 − x', [
        S("First draw y equals x plus 1. It crosses the y-axis at 1, and goes up 1 for each one across. Mark a few points. 0, 1. 1, 2. 2, 3. 3, 4.", E('(0,1) (1,2) (2,3) (3,4)')),
        S("Now draw y equals 7 minus x. It crosses the y-axis at 7, and goes down as x goes up. Mark a few points. 0, 7. 1, 6. 2, 5. 3, 4.", E('(0,7) (1,6) (2,5) (3,4)')),
        S("Both tables include the point 3, 4. That is where the lines cross. So x is 3 and y is 4.", g('x = 3, y = 4'))
      ]),
      SC('Check', 'Example 2: substitute', [
        S("Always check in both equations. In y equals x plus 1, 3 plus 1 is 4. True. In y equals 7 minus x, 7 minus 3 is 4. True. Both work.", E('4 = 3 + 1 ✓') + E('4 = 7 − 3 ✓', 'g'))
      ]),
      SC('No solution', 'Example 3: parallel lines', [
        S("Try y equals 2 x plus 1, and y equals 2 x minus 3. Both have gradient 2. They are parallel. They never meet. So there is no solution.", E('Parallel → no solution', 'b'))
      ]),
      SC('Reading carefully', 'Example 4: when it is not neat', [
        S("Sometimes the lines cross between grid lines, so the reading is only approximate. A graph gives a picture, and a good estimate. For an exact answer, we use algebra, which is the next lesson.", V.note('Graphs can be approximate'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: only checking 1 equation. The point must work in both.", V.rule('Check both.')),
        S("Mistake two: reading x and y the wrong way round. The first number is x, the second is y.", V.rule('(x, y)')),
        S("Mistake three: drawing lines carelessly. Use a ruler, and plot at least 3 points to check the line is straight.", V.rule('Ruler, 3 points.'))
      ]),
      SC('In real life', 'Comparing plans', [
        S("2 phone plans. Plan A costs £5 plus £2 per gigabyte. Plan B costs a flat £11. Draw both lines. They cross at 3 gigabytes. Below 3 gigabytes plan A is cheaper. Above it, plan B is cheaper.", g('Cross at 3 GB'))
      ]),
      L.turn("Your turn! Number one. The lines y equals 2 x and y equals x plus 3 cross where? Pause and think.", E('2x = x + 3'), "2 x equals x plus 3, so x is 3. y is 6. They cross at 3, 6.", g('(3, 6)')),
      L.turn("Your turn! Number two. Do y equals x plus 2 and y equals x minus 1 have a solution? Pause and think.", E('?'), "Both have gradient 1. They are parallel. No solution.", g('No solution')),
      L.turn("Your turn! Number three. The lines cross at 2, 5. What are x and y? Pause and think.", E('(2, 5)'), "x is 2 and y is 5.", g('x = 2, y = 5')),
      L.rec(T, "To solve simultaneous equations by graph, draw both lines and read the crossing point. Check it in both equations. Parallel lines have no solution. Graph readings can be approximate, algebra gives exact answers.", ['Draw both lines', 'Read the crossing point', 'Check in both', 'Parallel: none'])
    ]);
  })();

  /* ---- Elimination ---- */
  (function () {
    var T = 'Solving by elimination';
    L.full(T, [
      SC('Elimination', 'Start with the basics', [
        S("Graphs can be slow and inexact. Algebra is quicker. 1 algebra method is elimination. We add or subtract the 2 equations so that one of the letters disappears. Then we solve for the other letter.", E('Add or subtract to remove one letter', 'g')),
        S("The rule is simple. If the matching letters have the same sign, subtract. If they have different signs, add. A helpful memory is, same signs subtract, different signs add.", V.cols([V.card('Same signs: subtract', 'b', true), V.card('Different signs: add', 'g', true)], 2))
      ]),
      SC('Subtracting', 'Example 1: 3x + y = 11 and x + y = 5', [
        S("Both equations have plus y. The same sign, so subtract. 3 x minus x is 2 x. y minus y is nothing. 11 minus 5 is 6.", E('3x + y = 11') + E('x + y = 5') + E('2x = 6')),
        S("So x is 3. Now put x equals 3 into the second equation. 3 plus y equals 5. y is 2.", g('x = 3, y = 2'))
      ]),
      SC('Adding', 'Example 2: 2x + 3y = 13 and 4x − 3y = −1', [
        S("The y terms are plus 3 y and minus 3 y. Different signs, so add. 2 x plus 4 x is 6 x. 3 y minus 3 y is 0. 13 plus negative 1 is 12.", E('6x = 12')),
        S("So x is 2. Put it in the first equation. 4 plus 3 y equals 13. 3 y equals 9. y is 3.", g('x = 2, y = 3'))
      ]),
      SC('Scaling first', 'Example 3: 2x + y = 7 and 3x + 2y = 12', [
        S("Here nothing matches yet. Make the y coefficients the same. Double the first equation, every term. 4 x plus 2 y equals 14.", E('4x + 2y = 14')),
        S("Now both have 2 y. Same signs, so subtract the second equation. 4 x minus 3 x is x. 14 minus 12 is 2. So x is 2.", E('x = 2')),
        S("Put x equals 2 in the first original equation. 4 plus y equals 7. y is 3.", g('x = 2, y = 3'))
      ]),
      SC('Checking', 'Always check', [
        S("Check in the equation you did not use for substitution. 3 times 2 plus 2 times 3 is 12. Correct.", E('3(2) + 2(3) = 12 ✓', 'g'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: adding when you should subtract. Look at the signs of the letter you are eliminating.", V.rule('Same: subtract. Different: add.')),
        S("Mistake two: scaling only some terms. When you double an equation, double every term, including the number on the right.", V.rule('Multiply every term.')),
        S("Mistake three: forgetting to find the second letter. You need both x and y.", V.rule('Find both letters.'))
      ]),
      SC('In real life', 'Shopping', [
        S("2 apples and a pear cost £1.10. An apple and a pear cost 70p. Subtract. 1 apple costs 40p. So a pear costs 30p. Elimination is how shopkeepers work out unknown prices.", g('Apple 40p, pear 30p'))
      ]),
      L.turn("Your turn! Number one. Solve x plus y equals 10 and x minus y equals 4. Pause and try it.", E('x + y = 10') + E('x − y = 4'), "Add them. 2 x equals 14. x is 7. y is 3.", g('x = 7, y = 3')),
      L.turn("Your turn! Number two. Solve 2x + y = 9 and x + y = 5. Pause and try it.", E('2x + y = 9') + E('x + y = 5'), "Subtract. x equals 4. Then y is 1.", g('x = 4, y = 1')),
      L.turn("Your turn! Number three. Solve x + 2y = 8 and 3x − 2y = 4. Pause and try it.", E('x + 2y = 8') + E('3x − 2y = 4'), "The y terms have different signs, so add. 4 x equals 12. x is 3. Then 3 plus 2 y equals 8, so y is 2 and a half.", g('x = 3, y = 2.5')),
      L.rec(T, "Make the coefficients of 1 letter match, by multiplying every term if needed. Subtract if the signs are the same, and add if they differ. Solve for 1 letter, substitute back to find the other, and check in both equations.", ['Match one coefficient', 'Same signs: subtract', 'Different signs: add', 'Substitute and check'])
    ]);
  })();

  /* ---- Simultaneous equations from problems ---- */
  (function () {
    var T = 'Simultaneous equations';
    L.full(T, [
      SC('Real problems', 'Start with the basics', [
        S("Many real problems have 2 unknown numbers. To solve them, we write 2 equations, and solve them together. Here is the plan.", V.list(['Choose two letters', 'Write two equations', 'Eliminate one letter', 'Answer in context'])),
        S("The most important step is the first. Say clearly what each letter stands for, such as let a be the price of an adult ticket in pounds.", E('Let a = adult price (£)', 'b'))
      ]),
      SC('Tickets', 'Example 1: adults and children', [
        S("2 adult tickets and 3 child tickets cost £31. 1 adult ticket and 2 child tickets cost £18. Let a be the adult price and c be the child price. Write the equations.", E('2a + 3c = 31') + E('a + 2c = 18')),
        S("Double the second equation. 2 a plus 4 c equals 36. Now subtract the first equation. 4 c minus 3 c is c. 36 minus 31 is 5.", E('2a + 4c = 36') + g('c = 5')),
        S("Put c equals 5 in the second equation. a plus 10 equals 18. a is 8. So adults cost £8, and children cost £5.", g('a = £8, c = £5'))
      ]),
      SC('Coins', 'Example 2: count and value', [
        S("A purse has 12 coins. Some are 20p, some are 50p. They are worth £3.30, that is 330p. Let x be the number of 20 pences, and y be the number of 50 pences.", E('x + y = 12') + E('20x + 50y = 330')),
        S("Multiply the first by 20. 20 x plus 20 y equals 240. Subtract that from the second. 30 y equals 90. y is 3. Then x is 9.", E('30y = 90') + g('9 × 20p and 3 × 50p'))
      ]),
      SC('Checking', 'Example 3: both equations', [
        S("Check with the coins. 9 20 pences is 180p. 3 50 pences is 150. 180 plus 150 is 330. And 9 plus 3 is 12 coins. Correct.", E('180 + 150 = 330 ✓') + E('9 + 3 = 12 ✓', 'g'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: not defining the letters. Always say what x and y stand for.", V.rule('Define the letters.')),
        S("Mistake two: mixing units. In the coins problem, use pence for everything, or pounds for everything.", V.rule('Same units.')),
        S("Mistake three: not answering the question. If the question asks for the cost of an adult ticket, write the answer in pounds, in a sentence.", V.rule('Answer in context.'))
      ]),
      SC('In real life', 'Two numbers', [
        S("Many puzzles are simultaneous equations in disguise. 2 numbers add up to 20 and differ by 6. Add the equations. 2 x equals 26. x is 13. y is 7.", E('x + y = 20') + E('x − y = 6') + g('13 and 7'))
      ]),
      L.turn("Your turn! Number one. 2 numbers add to 22 and differ by 4. What are they? Pause and try it.", E('x + y = 22, x − y = 4'), "Add. 2 x equals 26. x is 13. y is 9.", g('13 and 9')),
      L.turn("Your turn! Number two. A pen and a pencil cost £1. 2 pens and a pencil cost £1.60. Find the cost of a pen. Pause and try it.", E('p + n = 100') + E('2p + n = 160'), "Subtract. p is 60p. The pencil is 40p.", g('Pen 60p, pencil 40p')),
      L.turn("Your turn! Number three. Why do we need 2 equations for 2 unknowns? Pause and think.", E('?'), "1 equation has many answers. A second equation narrows it down to 1 pair of values.", g('Two unknowns need two equations')),
      L.rec(T, "Define 2 letters. Write 2 equations from the information. Solve by elimination or substitution. Then answer the question in context, and check in both equations. You need as many equations as unknowns.", ['Two letters', 'Two equations', 'Eliminate or substitute', 'Check and answer'])
    ]);
  })();
  /* ---- SOH CAH TOA ---- */
  (function () {
    var T = 'SOH CAH TOA';
    L.full(T, [
      SC('Trigonometry', 'Start with the basics', [
        S("Trigonometry connects the angles and sides of right-angled triangles. It lets us find a side we cannot measure, like the height of a tree. First we must name the 3 sides.", V.cols([V.card('Hypotenuse: longest, opposite the right angle', 'b', true), V.card('Opposite: across from the angle', 'g', true), V.card('Adjacent: next to the angle', 'p', true)], 3)),
        S("The names depend on which angle we are using. The hypotenuse never changes. But the opposite and adjacent swap if you use the other angle. So always mark the angle first.", V.rule('Mark the angle first, then label the sides.')),
        S("There are 3 ratios. Sine is opposite over hypotenuse. Cosine is adjacent over hypotenuse. Tangent is opposite over adjacent. A memory aid is SOH, CAH, TOA.", V.tbl([['SOH', 'sin = O ÷ H'], ['CAH', 'cos = A ÷ H'], ['TOA', 'tan = O ÷ A']], ['', 'Ratio']))
      ]),
      SC('Opposite from hypotenuse', 'Example 1: sin', [
        S("Angle 40 degrees. Hypotenuse 12. Find the opposite side. We have O and H, so we use SOH. Sine of 40 equals opposite over 12.", E('sin 40° = O ÷ 12')),
        S("To get O on its own, multiply both sides by 12. O equals 12 times sine of 40. On the calculator, that is about 7.71.", g('O = 12 × sin 40° ≈ 7.71'))
      ]),
      SC('Adjacent from hypotenuse', 'Example 2: cos', [
        S("Angle 60 degrees. Hypotenuse 10. Find the adjacent side. We have A and H, so we use CAH. A equals 10 times cosine of 60. Cosine of 60 is a half. So 5.", g('A = 10 × cos 60° = 5'))
      ]),
      SC('Opposite from adjacent', 'Example 3: tan', [
        S("Angle 35 degrees. Adjacent 8. Find the opposite. We have O and A, so we use TOA. O equals 8 times tangent of 35. About 5.6.", g('O = 8 × tan 35° ≈ 5.60'))
      ]),
      SC('Finding the hypotenuse', 'Example 4: divide', [
        S("Angle 50 degrees. Opposite 9. Find the hypotenuse. We use SOH. Sine of 50 equals 9 over H. Now the unknown is on the bottom. So we divide. H equals 9 divided by sine of 50. About 11.75.", E('sin 50° = 9 ÷ H') + g('H = 9 ÷ sin 50° ≈ 11.75'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: the calculator is not in degrees. Check for the letter D or DEG on the screen. Radians will give a wrong answer.", V.rule('Calculator in degree mode.')),
        S("Mistake two: labelling the sides from the wrong angle. Always mark the angle you are using.", V.rule('Label from the angle.')),
        S("Mistake three: multiplying when the unknown is on the bottom. If the unknown is the denominator, you divide.", V.cols([V.card('Unknown on top: ×', 'g', true), V.card('Unknown on bottom: ÷', 'b', true)], 2))
      ]),
      SC('In real life', 'Ladders', [
        S("A ladder is 3 metres long and leans at 70 degrees to the ground. How high does it reach? We have the hypotenuse and want the opposite. 3 times sine of 70 is about 2.82 metres.", g('3 × sin 70° ≈ 2.82 m'))
      ]),
      L.turn("Your turn! Number one. Angle 30 degrees, hypotenuse 20. Find the opposite side. Pause and try it.", E('20 × sin 30°'), "Sine of 30 is a half. 20 times a half is 10.", g('10')),
      L.turn("Your turn! Number two. Which ratio links the opposite and the adjacent? Pause and think.", E('?'), "Tangent. T, O, A.", g('tan')),
      L.turn("Your turn! Number three. Angle 45 degrees, adjacent 6. Find the opposite. Pause and try it.", E('6 × tan 45°'), "Tangent of 45 is 1. So 6.", g('6')),
      L.rec(T, "Label the opposite, adjacent and hypotenuse from the angle. Choose the ratio that links the side you know with the side you want. Multiply if the unknown is on top, and divide if it is on the bottom. Check your calculator is in degrees.", ['Label O, A, H', 'Pick SOH, CAH or TOA', 'Unknown on top: ×', 'Unknown on bottom: ÷'])
    ]);
  })();

  /* ---- Finding an angle ---- */
  (function () {
    var T = 'Finding an angle';
    L.full(T, [
      SC('Inverse trigonometry', 'Start with the basics', [
        S("In the last lesson we found sides. Now we find angles. If we know 2 sides of a right-angled triangle, we can find an angle. We use the inverse button on the calculator.", E('θ = sin⁻¹(O ÷ H)', 'g')),
        S("Think of it as undoing. Sine takes an angle and gives a ratio. Inverse sine takes a ratio and gives back the angle. The buttons are written sine to the minus 1, cosine to the minus 1 and tangent to the minus 1.", V.cols([V.card('sin → ratio', 'b', true), V.card('sin⁻¹ → angle', 'g', true)], 2)),
        S("There are 3 steps. Label the sides you know. Choose the ratio. Then use the inverse function.", V.list(['Label O, A, H', 'Choose SOH, CAH or TOA', 'Divide the two sides', 'Use the inverse button']))
      ]),
      SC('Using tan', 'Example 1: O = 5, A = 5', [
        S("Opposite 5, adjacent 5. We know O and A, so we use TOA. Tangent of the angle is 5 over 5, which is 1. The angle is tan to the minus 1 of 1. 45 degrees.", E('tan θ = 5 ÷ 5 = 1') + g('θ = tan⁻¹(1) = 45°'))
      ]),
      SC('Using sin', 'Example 2: O = 7, H = 14', [
        S("Opposite 7, hypotenuse 14. We use SOH. Sine of the angle is 7 over 14, which is a half. The angle is sine to the minus 1 of a half. 30 degrees.", E('sin θ = 7 ÷ 14 = 0.5') + g('θ = 30°'))
      ]),
      SC('Using cos', 'Example 3: A = 4, H = 9', [
        S("Adjacent 4, hypotenuse 9. We use CAH. Cosine of the angle is 4 over 9. That is about 0.444. Press cosine to the minus 1. The angle is about 63.6 degrees.", E('cos θ = 4 ÷ 9') + g('θ ≈ 63.6°'))
      ]),
      SC('Real life', 'Example 4: a ramp', [
        S("A ramp rises 1.2 metres over a horizontal distance of 5 metres. What angle is it? Rise is opposite. Horizontal distance is adjacent. So we use TOA. Tangent of the angle is 1.2 over 5, which is 0.24.", E('tan θ = 1.2 ÷ 5 = 0.24')),
        S("Tan to the minus 1 of 0.24 is about 13.5 degrees.", g('θ ≈ 13.5°'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: using the normal button, not the inverse. To find an angle, you need sine to the minus 1, not sine.", r('sin(0.5)  ✗') + g('sin⁻¹(0.5) = 30°  ✓')),
        S("Mistake two: dividing the sides the wrong way up. For sine, it is opposite divided by hypotenuse.", V.rule('Opposite ÷ hypotenuse, not the other way.')),
        S("Mistake three: not checking if the answer is sensible. In a right-angled triangle, the sine and cosine of an angle are never bigger than 1.", V.rule('sin and cos: between 0 and 1.'))
      ]),
      SC('In real life', 'Safe ladders', [
        S("Ladders should lean at about 75 degrees. A 4 metre ladder with its foot 1 metre from the wall. Adjacent is 1, hypotenuse is 4. Cosine is a quarter. The angle is about 76 degrees. That is safe.", g('cos⁻¹(1 ÷ 4) ≈ 75.5°'))
      ]),
      L.turn("Your turn! Number one. Opposite 8, adjacent 8. What is the angle? Pause and think.", E('tan⁻¹(8 ÷ 8)'), "The ratio is 1. Tan to the minus 1 of 1 is 45 degrees.", g('45°')),
      L.turn("Your turn! Number two. Opposite 3, hypotenuse 6. Find the angle. Pause and try it.", E('sin⁻¹(3 ÷ 6)'), "3 over 6 is a half. Sine to the minus 1 of a half is 30 degrees.", g('30°')),
      L.turn("Your turn! Number three. Adjacent 5, hypotenuse 10. Find the angle. Pause and try it.", E('cos⁻¹(5 ÷ 10)'), "A half again. Cosine to the minus 1 of a half is 60 degrees.", g('60°')),
      L.rec(T, "Label the sides you know. Choose the ratio that uses them. Divide to get a number. Then use the inverse function to find the angle. Sine and cosine ratios are always between 0 and 1 in a right-angled triangle.", ['Label O, A, H', 'Choose the ratio', 'Divide the sides', 'Use sin⁻¹, cos⁻¹ or tan⁻¹'])
    ]);
  })();

  /* ---- Circle theorems ---- */
  (function () {
    var T = 'Circle theorems';
    L.full(T, [
      SC('Circle theorems', 'Start with the basics', [
        S("Circles have some beautiful angle rules. These are called circle theorems. First, some words. The centre is the middle. The radius goes from the centre to the edge. The diameter goes across through the centre. The circumference is the edge itself.", V.cols([V.card('Radius', 'b', true), V.card('Diameter = 2 × radius', 'g', true)], 2)),
        S("A chord is a straight line joining 2 points on the circle. A tangent is a line that just touches the circle at 1 point. An arc is part of the circumference.", V.cols([V.card('Chord', 'p', true), V.card('Tangent', 'g', true), V.card('Arc', 'b', true)], 3))
      ]),
      SC('The four rules', 'The big list', [
        S("Here are the 4 rules for this lesson. We will look at each one in turn.", V.list(['Angle in a semicircle = 90°', 'Tangent meets radius at 90°', 'Angle at centre = 2 × angle at edge', 'Angles on the same arc are equal']))
      ]),
      SC('Semicircle', 'Rule 1: angle in a semicircle', [
        S("Draw a triangle inside a circle, with the diameter as 1 side. The angle at the opposite corner, on the edge, is always 90 degrees. It does not matter where that corner is.", E('Angle in a semicircle = 90°', 'g')),
        S("Example. A triangle in a semicircle has 1 angle of 35 degrees. The angle in the semicircle is 90. So the third angle is 180 minus 90 minus 35. That is 55 degrees.", g('180 − 90 − 35 = 55°'))
      ]),
      SC('Tangent', 'Rule 2: tangent and radius', [
        S("A tangent touches the circle at 1 point. At that point, the radius makes a right angle with the tangent. They are perpendicular.", E('Tangent ⊥ radius', 'g')),
        S("Example. A tangent meets a radius, and the radius makes an angle of 30 degrees with another line from the centre. The angle between the tangent and the radius is 90. This lets us find missing angles in a triangle.", V.note('Tangent and radius: 90°'))
      ]),
      SC('Centre and edge', 'Rule 3: twice the angle', [
        S("Take 2 points on the circle, and look at the angle they make at the centre. Then look at the angle they make at a point on the edge. The angle at the centre is always twice the angle at the edge, as long as they are on the same arc.", E('Centre = 2 × edge', 'g')),
        S("If the angle at the edge is 40 degrees, the angle at the centre is 80 degrees. If the angle at the centre is 100, the angle at the edge is 50.", E('2 × 40° = 80°') + E('100° ÷ 2 = 50°'))
      ]),
      SC('Same arc', 'Rule 4: equal angles', [
        S("Angles made at the edge by the same 2 points are equal, as long as they are on the same side. Imagine a chord, and several angles looking at it from the same side of the circle. They are all the same.", E('Same arc → equal angles', 'g'))
      ]),
      SC('Radii make isosceles triangles', 'A handy fact', [
        S("2 radii are equal. So a triangle made of 2 radii and a chord is isosceles. Its base angles are equal. This fact is used all the time to find missing angles.", V.note('Two radii → isosceles triangle'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: forgetting to give a reason. In these questions, always say which theorem you used.", V.rule('State the theorem.')),
        S("Mistake two: using the centre rule when the angles are on different arcs. Check they stand on the same arc.", V.rule('Same arc.')),
        S("Mistake three: halving and doubling the wrong way. The centre angle is the bigger 1.", r('Edge = 2 × centre  ✗') + g('Centre = 2 × edge  ✓'))
      ]),
      L.turn("Your turn! Number one. A triangle is drawn in a semicircle with 1 angle of 35 degrees. What is the third angle? Pause and think.", E('180 − 90 − 35'), "The angle in a semicircle is 90. So the third is 55 degrees.", g('55°')),
      L.turn("Your turn! Number two. The angle at the centre is 120 degrees. What is the angle at the edge on the same arc? Pause and try it.", E('120 ÷ 2'), "Half of 120. 60 degrees.", g('60°')),
      L.turn("Your turn! Number three. What angle does a tangent make with the radius at the point of contact? Pause and think.", E('?'), "Ninety degrees.", g('90°')),
      L.rec(T, "The angle in a semicircle is 90 degrees. A tangent meets a radius at 90 degrees. The angle at the centre is twice the angle at the edge. Angles on the same arc are equal. 2 radii make an isosceles triangle. Always state the theorem you use.", ['Semicircle: 90°', 'Tangent ⊥ radius', 'Centre = 2 × edge', 'Radii → isosceles'])
    ]);
  })();

  /* ---- Chords and tangent lengths ---- */
  (function () {
    var T = 'Chords and tangent lengths';
    L.full(T, [
      SC('Chords and tangents', 'Start with the basics', [
        S("A chord is a straight line joining 2 points on a circle. Here is a useful fact. If you draw a line from the centre, at right angles to a chord, it cuts the chord exactly in half.", V.rule('Perpendicular from the centre bisects the chord.')),
        S("This gives us a right-angled triangle. The radius is the hypotenuse. Half the chord is 1 short side. The distance from the centre to the chord is the other short side. So we can use Pythagoras.", E('r² = (½ chord)² + d²', 'g'))
      ]),
      SC('Distance to a chord', 'Example 1: radius 10, chord 16', [
        S("A circle has radius 10. A chord is 16 long. Half the chord is 8. The distance d from the centre is a short side. Hypotenuse squared is 100. 8 squared is 64. 100 minus 64 is 36.", E('d² = 10² − 8² = 36')),
        S("The square root of 36 is 6. The chord is 6 units from the centre.", g('d = 6'))
      ]),
      SC('Chord length', 'Example 2: radius 13, distance 5', [
        S("Now find the chord. Radius 13, and the distance from the centre is 5. Half the chord squared is 169 minus 25. That is 144. The root is 12.", E('13² − 5² = 144') + E('half chord = 12')),
        S("Do not stop there. 12 is only half. Double it. The chord is 24.", g('Chord = 24'))
      ]),
      SC('Tangent length', 'Example 3: from an outside point', [
        S("A tangent from an outside point touches the circle at 1 point. The radius to that point is at 90 degrees to the tangent. So we have a right-angled triangle again. The longest side is from the outside point to the centre.", V.note('Radius ⊥ tangent')),
        S("A point is 17 centimetres from the centre of a circle of radius 8. The tangent length squared is 17 squared minus 8 squared. 289 minus 64 is 225. The root is 15.", E('17² − 8² = 225') + g('Tangent = 15 cm'))
      ]),
      SC('Two tangents', 'Example 4: equal lengths', [
        S("From 1 outside point, you can draw 2 tangents to the same circle. They have equal lengths. That is a handy fact to find a missing length.", V.note('Tangents from a point are equal'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: forgetting to double the half-chord. We find half. The question asks for the whole chord.", V.rule('Double the half chord.')),
        S("Mistake two: adding instead of subtracting. When the radius or the longest line is the hypotenuse, we subtract.", V.rule('Hypotenuse² − other²')),
        S("Mistake three: drawing no diagram. Always sketch the right-angled triangle.", V.rule('Sketch the triangle.'))
      ]),
      SC('In real life', 'Bridges', [
        S("The arch of a bridge is part of a circle. Engineers know the width of the arch, which is a chord, and its height. Using these facts, they find the radius of the circle to design the curve.", V.note('Arches use circle geometry'))
      ]),
      L.turn("Your turn! Number one. A chord is 6 centimetres from the centre of a circle of radius 10. How long is the chord? Pause and try it.", E('2 × √(100 − 36)'), "100 minus 36 is 64. The root is 8. Double it. 16 centimetres.", g('16 cm')),
      L.turn("Your turn! Number two. A point is 10 centimetres from the centre of a circle of radius 6. Find the tangent length. Pause and try it.", E('√(100 − 36)'), "64. The root is 8 centimetres.", g('8 cm')),
      L.turn("Your turn! Number three. 2 tangents are drawn from a point. 1 has length 7. How long is the other? Pause and think.", E('?'), "Tangents from a point are equal. 7.", g('7')),
      L.rec(T, "A perpendicular from the centre bisects a chord. A tangent meets a radius at a right angle. Use Pythagoras in the right-angled triangle, taking care over which side is the hypotenuse. Double the half-chord at the end. Tangents from 1 point are equal.", ['Centre ⊥ chord bisects it', 'Tangent ⊥ radius', 'Use Pythagoras', 'Equal tangents from a point'])
    ]);
  })();

  /* ---- Similar triangles ---- */
  (function () {
    var T = 'Similar triangles';
    L.full(T, [
      SC('Similar triangles', 'Start with the basics', [
        S("2 shapes are similar if 1 is an enlargement of the other. They have the same shape but not the same size. For triangles, this means the angles are equal, and the sides are all in the same ratio.", V.note('Equal angles → sides in the same ratio')),
        S("There is a shortcut. If 2 angles in 1 triangle equal 2 angles in another, the triangles are similar. The third angle must be equal too, because angles add up to 180.", V.rule('2 equal angles are enough.'))
      ]),
      SC('Matching sides', 'Example 1: the scale factor', [
        S("2 similar triangles. We match sides that are opposite equal angles. Suppose a side of 6 matches a side of 15. The scale factor is 15 divided by 6. That is 2.5.", E('k = 15 ÷ 6') + g('k = 2.5'))
      ]),
      SC('Finding a side', 'Example 2: multiply', [
        S("Another side in the small triangle is 4. What is the matching side in the big triangle? Multiply by the scale factor. 4 times 2.5 is 10.", g('4 × 2.5 = 10'))
      ]),
      SC('Going down', 'Example 3: divide', [
        S("If we want to go from the big triangle to the small 1, we divide by 2.5. A side of 25 in the big triangle matches a side of 10 in the small 1.", E('25 ÷ 2.5 = 10'))
      ]),
      SC('Nested triangles', 'Example 4: parallel lines', [
        S("Sometimes a smaller triangle sits inside a bigger 1. This happens when a line is drawn parallel to 1 side. The 2 triangles share an angle, and have equal angles from the parallel lines. So they are similar.", V.note('Parallel line → similar triangles')),
        S("Be careful. In the big triangle, use the whole side, not just the bit beyond the parallel line.", V.rule('Use whole side lengths.'))
      ]),
      SC('Shadows', 'Example 5: real life', [
        S("A 1.5 metre post casts a 2 metre shadow. At the same time, a tree casts a 12 metre shadow. The sun makes equal angles, so the triangles are similar. The scale factor is 12 over 2, which is 6. The tree is 1.5 times 6. 9 metres.", g('1.5 × 6 = 9 m'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: matching the wrong sides. Match sides opposite equal angles.", V.rule('Opposite equal angles.')),
        S("Mistake two: adding the same amount to each side. Similar means multiply by the scale factor.", r('+ 4  ✗') + g('× 2.5  ✓')),
        S("Mistake three: nested triangles, using only the small bit. Use the whole side of the big triangle.", V.rule('Whole side.'))
      ]),
      L.turn("Your turn! Number one. A side of 8 in 1 triangle matches a side of 12 in a similar 1. A side of 10 matches what? Pause and try it.", E('10 × 12 ÷ 8'), "The scale factor is 1.5. 10 times 1.5 is 15.", g('15')),
      L.turn("Your turn! Number two. 2 triangles have 2 equal angles. Are they similar? Pause and think.", E('?'), "Yes. 2 equal angles are enough, because the third angle is also equal.", g('Yes')),
      L.turn("Your turn! Number three. A tree casts a 10 metre shadow. A 2 metre pole casts a 4 metre shadow. How tall is the tree? Pause and try it.", E('2 × 10 ÷ 4'), "The scale factor is 2 and a half. 2 times 2 and a half is 5 metres.", g('5 m')),
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
        S("You stand 40 metres from a building. The angle of elevation to the top is 32 degrees. The distance from the building is adjacent. The height is opposite. So we use TOA.", E('tan 32° = h ÷ 40')),
        S("Multiply by 40. h equals 40 times tangent of 32. About 25 metres.", g('h ≈ 25.0 m'))
      ]),
      SC('Angle of depression', 'Example 2: from a cliff', [
        S("From the top of a cliff 60 metres high, a boat is seen at an angle of depression of 20 degrees. How far out is the boat? Draw the horizontal from the top. The angle of depression is below it.", E('Cliff 60 m, depression 20°')),
        S("Here is the key. The angle of depression equals the angle of elevation from the boat looking up. They are alternate angles. So in the triangle, the angle at the boat is 20 degrees. The cliff is opposite. The distance out is adjacent. TOA again.", E('tan 20° = 60 ÷ d')),
        S("Now the unknown is on the bottom, so rearrange. d equals 60 divided by tangent of 20. About 165 metres.", g('d ≈ 165 m'))
      ]),
      SC('Using sine', 'Example 3: a kite', [
        S("A kite string is 50 metres long, at an angle of elevation of 30 degrees. How high is the kite? The string is the hypotenuse. The height is opposite. So we use SOH. 50 times sine of 30. Sine of 30 is a half. 25 metres.", g('50 × sin 30° = 25 m'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: measuring the angle from the vertical. Angles of elevation and depression are always from the horizontal.", V.rule('From the horizontal.')),
        S("Mistake two: forgetting your eye height. If the question says you are 1.6 metres tall, add that to your height answer.", V.rule('Add eye height if given.')),
        S("Mistake three: choosing the wrong ratio. Say which sides you have, then choose.", V.rule('Name the sides first.'))
      ]),
      SC('In real life', 'Lighthouses', [
        S("A lighthouse keeper looks down at a ship at an angle of depression. By measuring this angle and knowing the height of the lighthouse, they can work out exactly how far away the ship is, without leaving the tower.", V.note('Measure an angle, find a distance'))
      ]),
      L.turn("Your turn! Number one. A kite string is 50 metres long at an angle of elevation of 30 degrees. How high is the kite? Pause and try it.", E('50 × sin 30°'), "50 times a half. 25 metres.", g('25 m')),
      L.turn("Your turn! Number two. You are 10 metres from a tree. The angle of elevation to the top is 45 degrees. How tall is the tree? Pause and try it.", E('10 × tan 45°'), "Tangent of 45 is 1. 10 metres.", g('10 m')),
      L.turn("Your turn! Number three. Is the angle of depression from the top of a tower to a boat the same as the angle of elevation from the boat to the top? Pause and think.", E('?'), "Yes. They are alternate angles.", g('Yes')),
      L.rec(T, "Draw the right-angled triangle with the horizontal. Mark the angle of elevation or depression. Label the sides, choose SOH, CAH or TOA, and solve. The angle of depression from above equals the angle of elevation from below.", ['Draw the horizontal', 'Mark the angle', 'Label O, A, H', 'Use trigonometry'])
    ]);
  })();

  /* ---- Standard deviation ---- */
  (function () {
    var T = 'Standard deviation';
    L.full(T, [
      SC('Standard deviation', 'Start with the basics', [
        S("The range tells us how spread out data is, but it only uses 2 values. Standard deviation uses all the data. It measures how far the values are from the mean, on average. A small standard deviation means the data is close to the mean. A big 1 means it is spread out.", V.cards(['Small: consistent', 'Large: spread out'], ['g', 'b'])),
        S("There are 4 steps. Find the mean. Find how far each value is from the mean, and square it. Add up the squares, and divide by n minus 1. Then take the square root.", V.list(['Find the mean', 'Square each distance from the mean', 'Add and divide by n − 1', 'Square root']))
      ]),
      SC('Step 1', 'Example: 4, 6, 8, 10', [
        S("Our data is 4, 6, 8, 10. 4 values. Add them up. That is 28. Divide by 4. The mean is 7.", E('mean = 28 ÷ 4') + g('mean = 7'))
      ]),
      SC('Step 2', 'Squared distances', [
        S("How far is each value from 7? 4 is 3 below, so negative 3. 6 is negative 1. 8 is 1. 10 is 3. Now square each distance. This makes them all positive. 9, 1, 1, 9.", V.tbl([['4', '−3', '9'], ['6', '−1', '1'], ['8', '1', '1'], ['10', '3', '9']], ['Value', 'Distance', 'Squared'])),
        S("Add the squares. 9 plus 1 plus 1 plus 9 is 20.", g('Sum = 20'))
      ]),
      SC('Step 3', 'Divide and root', [
        S("Divide by n minus 1. There are 4 values, so n minus 1 is 3. 20 divided by 3 is 6.67.", E('20 ÷ 3 ≈ 6.67')),
        S("Now square root. The square root of 6.67 is about 2.58. That is the standard deviation. On the calculator, you can enter the data and press the standard deviation button, the one marked s or sigma x minus 1.", g('s ≈ 2.58'))
      ]),
      SC('Comparing', 'Two machines', [
        S("Machine A fills bottles with a mean of 500 millilitres, and a standard deviation of 2. Machine B also has a mean of 500, but its standard deviation is 8. Which is more reliable? Machine A, because its standard deviation is smaller. Its bottles are all close to 500.", E('2 < 8') + g('A is more consistent'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: forgetting to square, or squaring and then forgetting the square root at the end.", V.rule('Square, add, divide, square root.')),
        S("Mistake two: dividing by n instead of n minus 1, when the course asks for the sample standard deviation.", V.rule('Divide by n − 1.')),
        S("Mistake three: comparing only the means. When comparing, say something about both the average and the spread.", V.rule('Mean and standard deviation.'))
      ]),
      SC('In real life', 'Quality control', [
        S("Factories check their products. If a machine makes screws with a mean length of 20 millimetres, the standard deviation tells them how many screws are likely to be too short or too long. A small standard deviation means almost all screws are right.", V.note('Small s means reliable'))
      ]),
      L.turn("Your turn! Number one. 2 classes have the same mean, but standard deviations of 4 and 10. Which is more consistent? Pause and think.", E('?'), "The class with standard deviation 4. It is smaller.", g('s = 4')),
      L.turn("Your turn! Number two. Data: 2, 4, 6. The mean is 4. Find the sum of the squared distances. Pause and try it.", E('(−2)² + 0² + 2²'), "4 plus 0 plus 4 is 8.", g('8')),
      L.turn("Your turn! Number three. Use that to find the standard deviation. Pause and try it.", E('√(8 ÷ 2)'), "8 divided by 2 is 4. The square root is 2.", g('s = 2')),
      L.rec(T, "Find the mean. Find the distance of each value from the mean and square it. Add them up, divide by n minus 1, and take the square root. A smaller standard deviation means more consistent data. Compare means and standard deviations together, in context.", ['Find the mean', 'Square each distance', 'Sum ÷ (n − 1)', 'Square root'])
    ]);
  })();

  /* ---- Quartiles and box plots ---- */
  (function () {
    var T = 'Quartiles and box plots';
    L.full(T, [
      SC('Box plots', 'Start with the basics', [
        S("A box plot is a neat picture of how data is spread. It uses 5 numbers. The smallest value, the lower quartile, the median, the upper quartile, and the largest value.", V.cards(['Min', 'Q1', 'Median', 'Q3', 'Max'], ['b', 'p', 'g', 'p', 'b'], true)),
        S("The median is the middle value. It splits the data in 2 halves. The lower quartile, Q1, is the middle of the lower half. The upper quartile, Q3, is the middle of the upper half. Each quarter of the data lies between these numbers.", V.rule('Quartiles split the data into 4 equal parts.'))
      ]),
      SC('Finding the five numbers', 'Example 1: 2, 4, 5, 7, 9, 11, 14', [
        S("The data is already in order. There are 7 values. The smallest is 2. The largest is 14. The median is the middle, the fourth value. That is 7.", E('Min = 2') + E('Max = 14') + E('Median = 7')),
        S("Now the lower half. These are the numbers below the median. 2, 4, 5. The middle 1 is 4. That is Q1. The upper half is 9, 11, 14. The middle is 11. That is Q3.", E('Q1 = 4') + E('Q3 = 11')),
        S("So the 5 numbers are 2, 4, 7, 11, 14.", g('2, 4, 7, 11, 14'))
      ]),
      SC('Interquartile range', 'Example 2: the spread of the middle half', [
        S("The interquartile range is Q3 minus Q1. 11 minus 4 is 7. It tells us how spread out the middle half of the data is. It is not affected by extreme values.", E('IQR = 11 − 4') + g('IQR = 7'))
      ]),
      SC('Drawing it', 'Example 3: box and whiskers', [
        S("Draw a number line. Draw a box from Q1 to Q3. Draw a line inside the box at the median. Then draw lines, called whiskers, from the box out to the smallest and largest values.", V.note('Box: Q1 to Q3  ·  Whiskers: min and max'))
      ]),
      SC('Comparing', 'Example 4: 2 box plots', [
        S("To compare 2 box plots, compare the medians to see which is typically higher. Then compare the interquartile ranges. A shorter box means more consistent data.", V.cols([V.card('Median: typical value', 'b', true), V.card('IQR: consistency', 'g', true)], 2)),
        S("For example, class A has a median of 60 and an IQR of 10. Class B has a median of 55 and an IQR of 20. Class A scored higher on average, and was more consistent.", g('A: higher and more consistent'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: not ordering the data first. Always put the numbers in order before you find any of the 5 numbers.", V.rule('Order first.')),
        S("Mistake two: including the median in the halves when there is an odd number of values. Leave it out.", V.rule('Odd n: leave the median out.')),
        S("Mistake three: drawing the boxes on different scales. To compare box plots, use the same axis.", V.rule('Same scale.'))
      ]),
      SC('In real life', 'Test results', [
        S("Schools use box plots to compare results between classes. A box plot shows the typical score and the spread in 1 small picture, so teachers can see at a glance how 2 classes compare.", V.note('1 picture, 5 numbers'))
      ]),
      L.turn("Your turn! Number one. Q1 is 12 and Q3 is 20. What is the interquartile range? Pause and try it.", E('20 − 12'), "Eight.", g('8')),
      L.turn("Your turn! Number two. Find the median of 3, 5, 6, 8, 10. Pause and try it.", E('3, 5, 6, 8, 10'), "The middle value is 6.", g('6')),
      L.turn("Your turn! Number three. A box plot has a shorter box than another. What does that tell you? Pause and think.", E('?'), "Its data is more consistent.", g('More consistent')),
      L.rec(T, "Order the data. Find the minimum, Q1, median, Q3 and maximum. Draw the box from Q1 to Q3, and whiskers to the extremes. The interquartile range is Q3 minus Q1. Compare medians for the typical value, and interquartile ranges for consistency.", ['Order the data', 'Five-number summary', 'Box Q1 to Q3', 'Compare median and IQR'])
    ]);
  })();

  /* ---- Vectors as journeys ---- */
  (function () {
    var T = 'Vectors as journeys';
    L.full(T, [
      SC('Vectors', 'Start with the basics', [
        S("A vector describes a movement. It has a size and a direction. We write it as a column of 2 numbers. The top number says how far across, and the bottom number says how far up.", E('(3, 2) means 3 right, 2 up', 'g')),
        S("Negative numbers mean the other way. A negative top number is left. A negative bottom number is down.", V.cols([V.card('Positive across: right', 'g', true), V.card('Negative across: left', 'b', true)], 2))
      ]),
      SC('Reading a vector', 'Example 1', [
        S("The vector 5, negative 1. 5 across is 5 right. Negative 1 up is 1 down. So it is 5 right and 1 down.", g('(5, −1): 5 right, 1 down'))
      ]),
      SC('Adding vectors', 'Example 2: 1 journey after another', [
        S("Walk 3 right and 2 up. Then walk 1 right and 4 up. In total you have gone 4 right and 6 up. To add vectors, add the tops, and add the bottoms.", E('(3, 2) + (1, 4)') + g('= (3 + 1, 2 + 4) = (4, 6)'))
      ]),
      SC('Multiplying by a number', 'Example 3: scaling', [
        S("2 times the vector 3, 2. Multiply both numbers by 2. 6, 4. It is twice as long, and goes in the same direction.", g('2 × (3, 2) = (6, 4)'))
      ]),
      SC('Negative vectors', 'Example 4: going back', [
        S("The negative of 3, 2 is negative 3, negative 2. It is the same size, but goes the opposite way. It takes you back to where you started.", E('(3, 2) + (−3, −2) = (0, 0)', 'g'))
      ]),
      SC('Subtracting', 'Example 5: a take away', [
        S("To subtract, take away both parts. 5, 4 minus 2, 1. 5 minus 2 is 3. 4 minus 1 is 3. The answer is 3, 3.", g('(5, 4) − (2, 1) = (3, 3)'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: writing the numbers the wrong way round. Across is on top, up is on the bottom.", V.rule('Across on top, up below.')),
        S("Mistake two: adding the top of 1 to the bottom of the other. Add tops with tops and bottoms with bottoms.", V.rule('Tops with tops.')),
        S("Mistake three: forgetting the sign of a negative component when you add.", V.rule('Mind the signs.'))
      ]),
      SC('In real life', 'Navigation', [
        S("A boat sails 5 kilometres east and 2 north. Then 3 east and 1 south. The total journey is 5 plus 3, which is 8 east. And 2 minus 1, which is 1 north. Pilots and sailors add vectors like this all the time.", g('(5, 2) + (3, −1) = (8, 1)'))
      ]),
      L.turn("Your turn! Number one. Add the vectors 2, negative 3 and negative 5, 1. Pause and try it.", E('(2, −3) + (−5, 1)'), "2 plus negative 5 is negative 3. Negative 3 plus 1 is negative 2.", g('(−3, −2)')),
      L.turn("Your turn! Number two. Work out 3 times the vector 2, negative 1. Pause and try it.", E('3 × (2, −1)'), "6, negative 3.", g('(6, −3)')),
      L.turn("Your turn! Number three. Describe the vector negative 4, 2 in words. Pause and think.", E('(−4, 2)'), "4 left and 2 up.", g('4 left, 2 up')),
      L.rec(T, "A vector gives movement across and up, written as a column. Add vectors by adding the tops and adding the bottoms. Multiplying by a number scales the vector. A negative vector goes the opposite way.", ['(across, up)', 'Add tops, add bottoms', '× k: k times as long', 'Negative: opposite way'])
    ]);
  })();

  /* ---- Magnitude of a vector ---- */
  (function () {
    var T = 'The magnitude of a vector';
    L.full(T, [
      SC('Magnitude', 'Start with the basics', [
        S("The magnitude of a vector is its length. How long is the movement, in a straight line? The across part and the up part make the 2 short sides of a right-angled triangle. The straight line is the hypotenuse. So we use Pythagoras.", E('|(a, b)| = √(a² + b²)', 'g')),
        S("The magnitude is written with 2 straight lines either side of the vector.", V.rule('|v| means the length of v'))
      ]),
      SC('A 3-4-5 vector', 'Example 1', [
        S("The vector 3, 4. 3 squared is 9. 4 squared is 16. 9 plus 16 is 25. The square root is 5.", E('3² + 4² = 25') + g('|(3, 4)| = 5'))
      ]),
      SC('With negatives', 'Example 2: (−6, 8)', [
        S("The vector negative 6, 8. Negative 6 squared is 36. A negative squared becomes positive. 8 squared is 64. Add. 100. The square root is 10.", E('(−6)² + 8² = 100') + g('Magnitude = 10'))
      ]),
      SC('Not a whole number', 'Example 3: (2, 5)', [
        S("The vector 2, 5. 4 plus 25 is 29. The square root of 29 is not a whole number. We can leave it as root 29, or give about 5.39.", E('√29 ≈ 5.39', 'g'))
      ]),
      SC('Distance between points', 'Example 4: from A to B', [
        S("Point A is at 1, 2. Point B is at 7, 10. The vector from A to B is B minus A. 7 minus 1 is 6. 10 minus 2 is 8. So 6, 8.", E('(7 − 1, 10 − 2) = (6, 8)')),
        S("The distance is the magnitude. 36 plus 64 is 100. The root is 10. A and B are 10 units apart.", g('Distance = 10'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: adding the parts instead of using Pythagoras. The magnitude of 3, 4 is 5, not 7.", r('3 + 4 = 7  ✗') + g('√25 = 5  ✓')),
        S("Mistake two: forgetting the square root at the end.", r('25  ✗') + g('5  ✓')),
        S("Mistake three: squaring a negative wrongly. Negative 6 squared is 36, not negative 36.", V.rule('(−6)² = 36'))
      ]),
      SC('In real life', 'Shortest distance', [
        S("A drone flies 5 metres east and 12 metres north. The straight line back to the start is 13 metres. That is the magnitude. It is the shortest way home.", g('√(25 + 144) = 13 m'))
      ]),
      L.turn("Your turn! Number one. Find the magnitude of 5, 12. Pause and try it.", E('√(25 + 144)'), "25 plus 144 is 169. The root is 13.", g('13')),
      L.turn("Your turn! Number two. Find the magnitude of negative 8, 6. Pause and try it.", E('√(64 + 36)'), "A hundred. The root is 10.", g('10')),
      L.turn("Your turn! Number three. Find the distance from the point 0, 0 to the point 9, 12. Pause and try it.", E('√(81 + 144)'), "225. The root is 15.", g('15')),
      L.rec(T, "Square the components, add them, and take the square root. Negative components give the same magnitude, because squaring removes the sign. The distance between 2 points is the magnitude of the vector between them.", ['Square each part', 'Add', 'Square root', 'Distance between points'])
    ]);
  })();
})();
