/* lessons_new_s2c.js: S2 topic 821, primes, factors, sets, powers and roots */
(function () {
  'use strict';
  var BT = window.BT; if (!BT || !BT.L || !BT.L.fx) return;
  var L = BT.L, F = BT.F, fx = L.fx;

  fx('What are prime numbers?', 'what prime numbers are, how to test for them, and how to write a number as a product of prime factors.', {
    head: 'Prime numbers',
    basics: [['What is a prime number?', [
      ["A prime number has exactly 2 factors: 1, and itself. 7 is prime, because only one and 7 divide into it exactly. 9 is not prime, because 3 divides into it as well.", ['7: factors 1, 7', '9: factors 1, 3, 9', 'n|Prime = exactly two factors']],
      ["The number one is not prime, because it has only one factor. 2 is the only even prime number, because every other even number can be divided by 2. The first primes are 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29.", ['n|1 is not prime', 'n|2 is the only even prime', '2, 3, 5, 7, 11, 13, 17, 19, 23, 29']]]]],
    ex: [
      ['Is 29 prime?', [
        ["To test a number, try dividing it by the small primes. 2 does not go into 29, because it is odd. 3 does not, because the digits 2 and 9 add to 11. 5 does not, because it does not end in 0 or 5.", ['29 ÷ 2: odd, no', '2 + 9 = 11: not in the 3 times table', '29 does not end in 0 or 5']],
        ["We can stop here. The next prime is 7, and 7 times 7 is 49, which is bigger than 29. So 29 has no factors except 1 and itself. It is prime.", ['7 × 7 = 49 > 29: stop', 'g|29 is prime']]]],
      ['Is fifty-one prime?', [
        ["Try 3. The digits 5 and 1 add to 6, and 6 is in the 3 times table. So 51 divides by 3.", ['5 + 1 = 6', '51 ÷ 3 = 17']],
        ["51 is 3 times 17. It has a factor other than 1 and itself, so it is not prime. It only looks prime because it is odd.", ['51 = 3 × 17', 'g|51 is not prime']]]],
      ['60 as a product of prime factors', [
        ["We can break a number down with a factor tree. 60 is 6 times 10. 6 is 2 times 3. 10 is 2 times 5.", ['60 = 6 × 10', '6 = 2 × 3', '10 = 2 × 5']],
        ["The numbers at the ends of the branches are all prime. So 60 is 2 times 2 times 3 times 5. We write repeated factors with a power.", ['60 = 2 × 2 × 3 × 5', 'g|60 = 2² × 3 × 5']]]]],
    mist: [
      ['One is prime', "Mistake one: saying 1 is a prime number. Prime numbers have exactly 2 factors. 1 has only one factor, itself. So 1 is not prime.", ['r|1 is prime ✗', 'g|1 has 1 factor: not prime ✓']],
      ['All odd numbers are prime', "Mistake two: thinking every odd number is prime. 9 is odd, but 9 is 3 times 3. 21 is 3 times 7. Always test.", ['r|9 is prime ✗', 'g|9 = 3 × 3: not prime ✓']]],
    real: ['In real life', "Prime numbers protect your information online. Banking and messaging apps use huge prime numbers. It is easy to multiply 2 big primes, but extremely hard to work out which 2 primes were multiplied together.", ['7 × 13 = 91', '91 = ? × ?  (hard to reverse for huge numbers)']],
    turns: [
      { q: 'Is 37 a prime number?', say: "37 is odd, so 2 does not go in. 3 plus 7 is 10, which is not in the 3 times table. It does not end in 5 or 0. The next prime is 7, and 7 times 7 is 49, bigger than 37. So we can stop. 37 is prime.", work: ['37 is odd: not ÷ 2', '3 + 7 = 10: not ÷ 3', 'Does not end in 0 or 5', '7 × 7 = 49 > 37: stop'], ans: ['g|Yes, 37 is prime'] },
      { q: 'List all the prime numbers between 20 and 40.', say: "Check each number from 21 to 39. 23 is prime. 29 is prime. 31 is prime. 37 is prime. The others are divisible by 2, 3 or 5, or are 7 times something. 21 is 3 times 7, 27 is 3 times 9, 33 is 3 times 11, and 35 is 5 times 7.", work: ['23, 29, 31, 37 are prime', '21 = 3 × 7', '27 = 3 × 9', '33 = 3 × 11', '35 = 5 × 7'], ans: ['g|23, 29, 31, 37'] },
      { q: 'Write 84 as a product of prime factors.', say: "84 is 2 times 42. 42 is 2 times 21. 21 is 3 times 7. All of these are prime. So 84 is 2 times 2 times 3 times 7. We write the 2 twice as 2 squared.", work: ['84 = 2 × 42', '42 = 2 × 21', '21 = 3 × 7', '84 = 2 × 2 × 3 × 7'], ans: ['g|84 = 2² × 3 × 7'] }],
    rec: ["A prime number has exactly 2 factors.", ['Prime: only 1 and itself divide in', '1 is not prime; 2 is the only even prime', 'Test with small primes, and stop when p × p is too big', 'Break numbers down with a factor tree', 'Write repeats using powers']]
  });

  fx('How do you solve problems using multiples and factors?', 'how to use the highest common factor and the lowest common multiple to solve problems.', {
    head: 'Multiples and factors',
    basics: [['HCF and LCM', [
      ["A factor divides into a number exactly. The highest common factor, or HCF, is the biggest number that divides into both numbers. A multiple is in the times table. The lowest common multiple, or LCM, is the smallest number that both numbers divide into.", ['HCF: biggest number that goes INTO both', 'LCM: smallest number that BOTH go into']],
      ["Use HCF for splitting things into equal groups or cutting into the biggest pieces. Use LCM for things that repeat and meet again. The HCF is never bigger than the numbers. The LCM is never smaller.", ['HCF: sharing, cutting, grouping', 'LCM: repeating, meeting again']]]]],
    ex: [
      ['HCF and LCM of 12 and 18', [
        ["Write each number as a product of prime factors. 12 is 2 times 2 times 3. 18 is 2 times 3 times 3.", ['12 = 2² × 3', '18 = 2 × 3²']],
        ["For the HCF, take only what they share: 1 2 and 1 3. That is 6. For the LCM, take the most of each prime: 2 squared and 3 squared. 4 times 9 is 36.", ['HCF = 2 × 3 = 6', 'LCM = 2² × 3² = 4 × 9 = 36']]]],
      ['Two flashing lights', [
        ["A red light flashes every 12 seconds and a blue light every 20 seconds. They flash together now. When will they flash together again? Things that repeat and meet again use the LCM.", ['Multiples of 12: 12, 24, 36, 48, 60', 'Multiples of 20: 20, 40, 60']],
        ["The first multiple in both lists is 60. So the lights flash together again after 60 seconds.", ['g|LCM = 60', 'g|After 60 seconds']]]],
      ['Square tiles', [
        ["A floor is 48 centimetres by 36 centimetres. What is the biggest square tile that fits exactly? Cutting into the biggest equal pieces uses the HCF. The factors of 48 include 12, and the factors of 36 include 12.", ['Factors of 48: 1, 2, 3, 4, 6, 8, 12, 16, 24, 48', 'Factors of 36: 1, 2, 3, 4, 6, 9, 12, 18, 36']],
        ["The highest number in both lists is 12. The tiles are 12 by 12. There are 4 rows of 3: 12 tiles in all.", ['HCF = 12', '48 ÷ 12 = 4', '36 ÷ 12 = 3', 'g|12 cm tiles, 4 × 3 = 12 tiles']]]]],
    mist: [
      ['Mixing them up', "Mistake one: using the HCF when the question needs the LCM. 2 buses leave at 9, every 10 minutes and every 15 minutes. When do they leave together again? Wrong: the HCF, 5, so 5 minutes later. They cannot leave together after 5 minutes. Use the LCM: 30 minutes.", ['r|HCF = 5: after 5 min ✗', 'g|LCM = 30: after 30 min ✓']],
      ['An LCM smaller than a number', "Mistake two: not checking the answer. The LCM must be at least as big as the biggest number. If you get an LCM of 6 for 8 and 12, something is wrong. The LCM of 8 and 12 is 24.", ['r|LCM of 8 and 12 = 4 ✗', 'g|LCM of 8 and 12 = 24 ✓']]],
    real: ['In real life', "Bus timetables use the LCM. If 1 bus comes every 20 minutes and another every 30, they arrive together every 60 minutes. Builders use the HCF to cut a long board into equal pieces with nothing left over.", ['LCM(20, 30) = 60 min', 'HCF(48, 36) = 12 cm']],
    turns: [
      { q: 'Find the highest common factor of 24 and 36.', say: "Write the factors of each. 24 has 1, 2, 3, 4, 6, 8, 12 and 24. 36 has 1, 2, 3, 4, 6, 9, 12, 18 and 36. The biggest number in both lists is 12.", work: ['24: 1, 2, 3, 4, 6, 8, 12, 24', '36: 1, 2, 3, 4, 6, 9, 12, 18, 36', 'Common: 1, 2, 3, 4, 6, 12'], ans: ['g|HCF = 12'] },
      { q: 'Find the lowest common multiple of 8 and 12.', say: "List the multiples of each. 8: 8, 16, 24, 32. 12: 12, 24, 36. The first number in both lists is 24.", work: ['8: 8, 16, 24, 32', '12: 12, 24, 36'], ans: ['g|LCM = 24'] },
      { q: 'Two buses leave the station at nine o\'clock. One leaves every ten minutes and the other every twenty-five minutes. When do they next leave together?', say: "Things that repeat and meet again use the lowest common multiple. The multiples of 10 are 10, 20, 30, 40, 50. The multiples of 25 are 25, 50. The first multiple they share is 50. 50 minutes after 9 o'clock is 10 minutes to 10.", work: ['10: 10, 20, 30, 40, 50', '25: 25, 50', 'LCM = 50 minutes', '9:00 + 50 minutes = 9:50'], ans: ['g|At 9:50'] }],
    rec: ["HCF is for sharing and cutting. LCM is for repeating and meeting.", ['HCF: biggest number that goes into both', 'LCM: smallest number both go into', 'Prime factors: HCF = shared, LCM = most of each', 'HCF ≤ the numbers, LCM ≥ the numbers']]
  });

  fx('Sets of numbers', 'the names of the main sets of numbers, and how to write and use a set.', {
    head: 'Sets of numbers',
    basics: [['What is a set?', [
      ["A set is a collection of things, written inside curly brackets. The things in the set are called its members. We write the members separated by commas. The set of even numbers up to 10 is 2, 4, 6, 8, 10.", ['{2, 4, 6, 8, 10}', 'n|A set: members inside { }']],
      ["The symbol that looks like a curved E means is a member of. 4 belongs to the set of even numbers, so we write 4 is a member of the set. 7 is not a member, so we cross out the symbol.", ['4 ∈ {2, 4, 6, 8, 10}', '7 ∉ {2, 4, 6, 8, 10}']]]],
      ['Important sets of numbers', [
      ["Whole numbers start at 0 and go up: 0, 1, 2, 3 and so on. Integers include the negatives as well: minus 2, minus 1, 0, 1, 2. Rational numbers are numbers that can be written as a fraction, like 1/2 or 0.75.", ['Whole: 0, 1, 2, 3, …', 'Integers: …, −2, −1, 0, 1, 2, …', 'Rational: fractions and decimals that end or repeat']],
      ["Some sets have special rules. Square numbers are 1, 4, 9, 16 and so on. Cube numbers are 1, 8, 27, 64. Prime numbers have exactly 2 factors. Multiples of 3 are 3, 6, 9.", ['Squares: 1, 4, 9, 16, 25', 'Cubes: 1, 8, 27, 64, 125', 'Primes: 2, 3, 5, 7, 11']]]]],
    ex: [
      ['Listing members', [
        ["List the set of square numbers between 10 and 50. Squares are 1, 4, 9, 16, 25, 36, 49, 64. Only those bigger than 10 and less than 50 count.", ['Squares: 1, 4, 9, 16, 25, 36, 49, 64', '16, 25, 36, 49']],
        ["So the set is 16, 25, 36, 49.", ['g|{16, 25, 36, 49}']]]],
      ['Which set does it belong to?', [
        ["Is minus 3 a whole number? No, whole numbers start at 0. Is it an integer? Yes. Is it rational? Yes, because minus 3 is minus 3 over 1.", ['−3: not whole', '−3: integer ✓', '−3 = −3/1: rational ✓']],
        ["What about 0.4? It is not an integer, because it lies between 0 and 1. It is rational, because it is 4/10, or 2/5.", ['0.4: not an integer', '0.4 = 2/5: rational ✓']]]],
      ['Two sets together', [
        ["Let set A be the primes less than 10: 2, 3, 5, 7. Let set B be the odd numbers less than 10: 1, 3, 5, 7, 9. The numbers in both sets are 3, 5 and 7.", ['A = {2, 3, 5, 7}', 'B = {1, 3, 5, 7, 9}', 'In both: {3, 5, 7}']],
        ["The numbers in A or B or both are 1, 2, 3, 5, 7, 9. Note that 2 is the only member of A that is not in B.", ['In A or B: {1, 2, 3, 5, 7, 9}']]]]],
    mist: [
      ['Forgetting zero and negatives', "Mistake one: thinking 0 is not a whole number, or leaving out negatives from the integers. Whole numbers start at 0. Integers go on both sides of 0.", ['r|Integers: 1, 2, 3 ✗', 'g|Integers: …, −1, 0, 1, 2, … ✓']],
      ['Listing too many', "Mistake two: not reading the limits. Multiples of 4 between 10 and 20. Wrong: 4, 8, 12, 16, 20. 4 and 8 are below 10. The set is 12 and 16. Whether 20 is included depends on the wording.", ['r|{4, 8, 12, 16, 20} ✗', 'g|{12, 16} ✓']]],
    real: ['In real life', "Sets help us sort things. A shop has a set of products on sale and a set of products in stock. The products in both sets are the ones you can buy at the sale price.", ['On sale ∩ in stock = can buy now']],
    turns: [
      { q: 'List the set of prime numbers less than 20.', say: "Go through the numbers. 2, 3, 5, 7. Then 11, 13, 17, 19. The others are divisible by something. That gives 8 primes.", work: ['2, 3, 5, 7', '11, 13, 17, 19'], ans: ['g|{2, 3, 5, 7, 11, 13, 17, 19}'] },
      { q: 'Is minus 5 a member of the whole numbers? Is it a member of the integers?', say: "Whole numbers start at 0, so minus 5 is not a whole number. Integers include the negative numbers, so minus 5 is an integer.", work: ['Whole numbers: 0, 1, 2, … so −5 ∉ whole numbers', 'Integers: …, −2, −1, 0, 1, … so −5 ∈ integers'], ans: ['g|Not whole; it is an integer'] },
      { q: 'Set A is the even numbers less than 10. Set B is the multiples of 3 less than 10. List the numbers in both sets.', say: "Set A is 2, 4, 6, 8. Set B is 3, 6, 9. The only number in both lists is 6.", work: ['A = {2, 4, 6, 8}', 'B = {3, 6, 9}', 'Both: 6'], ans: ['g|{6}'] }],
    rec: ["A set is a collection, listed in curly brackets.", ['{ } hold the members', '∈ means is a member of', 'Whole numbers start at 0; integers include negatives', 'Rational numbers can be written as fractions', 'Squares, cubes and primes are special sets']]
  });

  fx('What are powers and roots?', 'what powers and roots mean and how to work with squares, cubes and their roots.', {
    head: 'Powers and roots',
    basics: [['Powers', [
      ["A power is a short way to write repeated multiplication. 3 to the power 4 means 4 threes multiplied together. The 3 is the base and the 4 is the index, or power.", ['3⁴ = 3 × 3 × 3 × 3', '3 × 3 = 9', '9 × 3 = 27', '27 × 3 = 81']],
      ["A power of 2 is a square and a power of 3 is a cube. 5 squared is 25. 4 cubed is 64. These are used for the area of a square and the volume of a cube.", ['5² = 5 × 5 = 25', '4³ = 4 × 4 × 4 = 64']]]],
      ['Roots', [
      ["A root undoes a power. The square root of 25 is 5, because 5 squared is 25. The cube root of 27 is 3, because 3 cubed is 27. We write them with this sign.", ['√25 = 5, because 5² = 25', '∛27 = 3, because 3³ = 27']],
      ["Learn the square numbers up to 15 squared, and the first few cubes. They help you spot roots quickly.", ['1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225', '1, 8, 27, 64, 125']]]]],
    ex: [
      ['Evaluating powers', [
        ["2 to the power 5. Multiply 5 twos. 2 times 2 is 4, times 2 is 8, times 2 is 16, times 2 is 32.", ['2⁵ = 2 × 2 × 2 × 2 × 2', '2 × 2 = 4, × 2 = 8, × 2 = 16, × 2 = 32', 'g|2⁵ = 32']],
        ["The power only applies to the number next to it. 2 times 3 squared is 2 times 9, which is 18. It is not 6 squared.", ['2 × 3² = 2 × 9', 'g|= 18']]]],
      ['Square root with a calculation inside', [
        ["The square root of 9 plus 16. First work out the sum under the root. 9 plus 16 is 25. The square root of 25 is 5.", ['√(9 + 16)', '= √25', 'g|= 5']],
        ["Now compare. The square root of 9 plus the square root of 16 is 3 plus 4, which is 7. These 2 are not the same. We cannot split a square root over an addition.", ['√9 + √16 = 3 + 4 = 7', 'n|√(9 + 16) ≠ √9 + √16']]]],
      ['Real life: a square and a cube', [
        ["A square patio has an area of 144 square metres. The side is the square root of 144. 12 times 12 is 144. So the side is 12 metres.", ['Area = side²', '√144 = 12', 'g|Side = 12 m']],
        ["A cube has sides of 4 centimetres. Its volume is 4 cubed. 4 times 4 is 16. 16 times 4 is 64 cubic centimetres.", ['4³ = 4 × 4 × 4', '16 × 4 = 64', 'g|Volume = 64 cm³']]]]],
    mist: [
      ['Multiplying the index', "Mistake one: multiplying the base by the power. 2 cubed is not 2 times 3, which is 6. It is 2 times 2 times 2, which is 8.", ['r|2³ = 2 × 3 = 6 ✗', 'g|2³ = 2 × 2 × 2 = 8 ✓']],
      ['Splitting a root over a sum', "Mistake two: splitting a square root over an addition. The square root of 16 plus 9 is the square root of 25, which is 5. It is not 4 plus 3.", ['r|√(16 + 9) = 4 + 3 = 7 ✗', 'g|√(16 + 9) = √25 = 5 ✓']]],
    real: ['In real life', "Floor tiles are measured in squares. A square room has an area of 81 square metres, so each wall is 9 metres. A storage cube with an edge of 5 metres holds 125 cubic metres.", ['√81 = 9 m', '5³ = 125 m³']],
    turns: [
      { q: 'Work out 5 cubed.', task: '5³', say: "5 cubed means 5 times 5 times 5. 5 times 5 is 25. 25 times 5 is 125.", work: ['5³ = 5 × 5 × 5', '5 × 5 = 25', '25 × 5 = 125'], ans: ['g|125'] },
      { q: 'Work out the cube root of 64.', task: '∛64', say: "We need a number that, multiplied by itself 3 times, makes 64. Try 3: 3 cubed is 27, too small. Try 4: 4 times 4 is 16, times 4 is 64. So the cube root is 4.", work: ['3³ = 27: too small', '4³ = 4 × 4 × 4 = 16 × 4 = 64 ✓'], ans: ['g|∛64 = 4'] },
      { q: 'A square garden has an area of 169 square metres. How long is each side?', say: "The area of a square is the side times the side. So the side is the square root of 169. 12 times 12 is 144, too small. 13 times 13 is 169. Each side is 13 metres.", work: ['Area = side × side = 169', '12 × 12 = 144: too small', '13 × 13 = 169 ✓'], ans: ['g|Side = 13 m'] }],
    rec: ["A power is repeated multiplication. A root undoes a power.", ['3⁴ = 3 × 3 × 3 × 3', 'Squares and cubes: know the first ones', '√25 = 5 and ∛27 = 3', 'Work out the sum under a root first', '√(a + b) is not √a + √b']]
  });
})();
