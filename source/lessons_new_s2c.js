/* lessons_new_s2c.js: S2 topic 821, primes, factors, sets, powers and roots */
(function () {
  'use strict';
  var BT = window.BT; if (!BT || !BT.L || !BT.L.fx) return;
  var L = BT.L, F = BT.F, fx = L.fx;

  fx('What are prime numbers?', 'what prime numbers are, how to test for them, and how to write a number as a product of prime factors.', {
    head: 'Prime numbers',
    basics: [['What is a prime number?', [
      ["A prime number has exactly two factors: one, and itself. Seven is prime, because only one and seven divide into it exactly. Nine is not prime, because three divides into it as well.", ['7: factors 1, 7', '9: factors 1, 3, 9', 'n|Prime = exactly two factors']],
      ["The number one is not prime, because it has only one factor. Two is the only even prime number, because every other even number can be divided by two. The first primes are two, three, five, seven, eleven, thirteen, seventeen, nineteen, twenty-three and twenty-nine.", ['n|1 is not prime', 'n|2 is the only even prime', '2, 3, 5, 7, 11, 13, 17, 19, 23, 29']]]]],
    ex: [
      ['Is twenty-nine prime?', [
        ["To test a number, try dividing it by the small primes. Two does not go into twenty-nine, because it is odd. Three does not, because the digits two and nine add to eleven. Five does not, because it does not end in zero or five.", ['29 ÷ 2: odd, no', '2 + 9 = 11: not in the 3 times table', '29 does not end in 0 or 5']],
        ["We can stop here. The next prime is seven, and seven times seven is forty-nine, which is bigger than twenty-nine. So twenty-nine has no factors except one and itself. It is prime.", ['7 × 7 = 49 > 29: stop', 'g|29 is prime']]]],
      ['Is fifty-one prime?', [
        ["Try three. The digits five and one add to six, and six is in the three times table. So fifty-one divides by three.", ['5 + 1 = 6', '51 ÷ 3 = 17']],
        ["Fifty-one is three times seventeen. It has a factor other than one and itself, so it is not prime. It only looks prime because it is odd.", ['51 = 3 × 17', 'g|51 is not prime']]]],
      ['Sixty as a product of prime factors', [
        ["We can break a number down with a factor tree. Sixty is six times ten. Six is two times three. Ten is two times five.", ['60 = 6 × 10', '6 = 2 × 3', '10 = 2 × 5']],
        ["The numbers at the ends of the branches are all prime. So sixty is two times two times three times five. We write repeated factors with a power.", ['60 = 2 × 2 × 3 × 5', 'g|60 = 2² × 3 × 5']]]]],
    mist: [
      ['One is prime', "Mistake one: saying one is a prime number. Prime numbers have exactly two factors. One has only one factor, itself. So one is not prime.", ['r|1 is prime ✗', 'g|1 has one factor: not prime ✓']],
      ['All odd numbers are prime', "Mistake two: thinking every odd number is prime. Nine is odd, but nine is three times three. Twenty-one is three times seven. Always test.", ['r|9 is prime ✗', 'g|9 = 3 × 3: not prime ✓']]],
    real: ['In real life', "Prime numbers protect your information online. Banking and messaging apps use huge prime numbers. It is easy to multiply two big primes, but extremely hard to work out which two primes were multiplied together.", ['7 × 13 = 91', '91 = ? × ?  (hard to reverse for huge numbers)']],
    turns: [
      { q: 'Is thirty-seven a prime number?', say: "Thirty-seven is odd, so two does not go in. Three plus seven is ten, which is not in the three times table. It does not end in five or zero. The next prime is seven, and seven times seven is forty-nine, bigger than thirty-seven. So we can stop. Thirty-seven is prime.", work: ['37 is odd: not ÷ 2', '3 + 7 = 10: not ÷ 3', 'Does not end in 0 or 5', '7 × 7 = 49 > 37: stop'], ans: ['g|Yes, 37 is prime'] },
      { q: 'List all the prime numbers between twenty and forty.', say: "Check each number from twenty-one to thirty-nine. Twenty-three is prime. Twenty-nine is prime. Thirty-one is prime. Thirty-seven is prime. The others are divisible by two, three or five, or are seven times something. Twenty-one is three times seven, twenty-seven is three times nine, thirty-three is three times eleven, and thirty-five is five times seven.", work: ['23, 29, 31, 37 are prime', '21 = 3 × 7', '27 = 3 × 9', '33 = 3 × 11', '35 = 5 × 7'], ans: ['g|23, 29, 31, 37'] },
      { q: 'Write eighty-four as a product of prime factors.', say: "Eighty-four is two times forty-two. Forty-two is two times twenty-one. Twenty-one is three times seven. All of these are prime. So eighty-four is two times two times three times seven. We write the two twice as two squared.", work: ['84 = 2 × 42', '42 = 2 × 21', '21 = 3 × 7', '84 = 2 × 2 × 3 × 7'], ans: ['g|84 = 2² × 3 × 7'] }],
    rec: ["A prime number has exactly two factors.", ['Prime: only 1 and itself divide in', '1 is not prime; 2 is the only even prime', 'Test with small primes, and stop when p × p is too big', 'Break numbers down with a factor tree', 'Write repeats using powers']]
  });

  fx('How do you solve problems using multiples and factors?', 'how to use the highest common factor and the lowest common multiple to solve problems.', {
    head: 'Multiples and factors',
    basics: [['HCF and LCM', [
      ["A factor divides into a number exactly. The highest common factor, or HCF, is the biggest number that divides into both numbers. A multiple is in the times table. The lowest common multiple, or LCM, is the smallest number that both numbers divide into.", ['HCF: biggest number that goes INTO both', 'LCM: smallest number that BOTH go into']],
      ["Use HCF for splitting things into equal groups or cutting into the biggest pieces. Use LCM for things that repeat and meet again. The HCF is never bigger than the numbers. The LCM is never smaller.", ['HCF: sharing, cutting, grouping', 'LCM: repeating, meeting again']]]]],
    ex: [
      ['HCF and LCM of twelve and eighteen', [
        ["Write each number as a product of prime factors. Twelve is two times two times three. Eighteen is two times three times three.", ['12 = 2² × 3', '18 = 2 × 3²']],
        ["For the HCF, take only what they share: one two and one three. That is six. For the LCM, take the most of each prime: two squared and three squared. Four times nine is thirty-six.", ['HCF = 2 × 3 = 6', 'LCM = 2² × 3² = 4 × 9 = 36']]]],
      ['Two flashing lights', [
        ["A red light flashes every twelve seconds and a blue light every twenty seconds. They flash together now. When will they flash together again? Things that repeat and meet again use the LCM.", ['Multiples of 12: 12, 24, 36, 48, 60', 'Multiples of 20: 20, 40, 60']],
        ["The first multiple in both lists is sixty. So the lights flash together again after sixty seconds.", ['g|LCM = 60', 'g|After 60 seconds']]]],
      ['Square tiles', [
        ["A floor is forty-eight centimetres by thirty-six centimetres. What is the biggest square tile that fits exactly? Cutting into the biggest equal pieces uses the HCF. The factors of forty-eight include twelve, and the factors of thirty-six include twelve.", ['Factors of 48: 1, 2, 3, 4, 6, 8, 12, 16, 24, 48', 'Factors of 36: 1, 2, 3, 4, 6, 9, 12, 18, 36']],
        ["The highest number in both lists is twelve. The tiles are twelve by twelve. There are four rows of three: twelve tiles in all.", ['HCF = 12', '48 ÷ 12 = 4', '36 ÷ 12 = 3', 'g|12 cm tiles, 4 × 3 = 12 tiles']]]]],
    mist: [
      ['Mixing them up', "Mistake one: using the HCF when the question needs the LCM. Two buses leave at nine, every ten minutes and every fifteen minutes. When do they leave together again? Wrong: the HCF, five, so five minutes later. They cannot leave together after five minutes. Use the LCM: thirty minutes.", ['r|HCF = 5: after 5 min ✗', 'g|LCM = 30: after 30 min ✓']],
      ['An LCM smaller than a number', "Mistake two: not checking the answer. The LCM must be at least as big as the biggest number. If you get an LCM of six for eight and twelve, something is wrong. The LCM of eight and twelve is twenty-four.", ['r|LCM of 8 and 12 = 4 ✗', 'g|LCM of 8 and 12 = 24 ✓']]],
    real: ['In real life', "Bus timetables use the LCM. If one bus comes every twenty minutes and another every thirty, they arrive together every sixty minutes. Builders use the HCF to cut a long board into equal pieces with nothing left over.", ['LCM(20, 30) = 60 min', 'HCF(48, 36) = 12 cm']],
    turns: [
      { q: 'Find the highest common factor of twenty-four and thirty-six.', say: "Write the factors of each. Twenty-four has one, two, three, four, six, eight, twelve and twenty-four. Thirty-six has one, two, three, four, six, nine, twelve, eighteen and thirty-six. The biggest number in both lists is twelve.", work: ['24: 1, 2, 3, 4, 6, 8, 12, 24', '36: 1, 2, 3, 4, 6, 9, 12, 18, 36', 'Common: 1, 2, 3, 4, 6, 12'], ans: ['g|HCF = 12'] },
      { q: 'Find the lowest common multiple of eight and twelve.', say: "List the multiples of each. Eight: eight, sixteen, twenty-four, thirty-two. Twelve: twelve, twenty-four, thirty-six. The first number in both lists is twenty-four.", work: ['8: 8, 16, 24, 32', '12: 12, 24, 36'], ans: ['g|LCM = 24'] },
      { q: 'Two buses leave the station at nine o\'clock. One leaves every ten minutes and the other every twenty-five minutes. When do they next leave together?', say: "Things that repeat and meet again use the lowest common multiple. The multiples of ten are ten, twenty, thirty, forty, fifty. The multiples of twenty-five are twenty-five, fifty. The first multiple they share is fifty. Fifty minutes after nine o'clock is ten minutes to ten.", work: ['10: 10, 20, 30, 40, 50', '25: 25, 50', 'LCM = 50 minutes', '9:00 + 50 minutes = 9:50'], ans: ['g|At 9:50'] }],
    rec: ["HCF is for sharing and cutting. LCM is for repeating and meeting.", ['HCF: biggest number that goes into both', 'LCM: smallest number both go into', 'Prime factors: HCF = shared, LCM = most of each', 'HCF ≤ the numbers, LCM ≥ the numbers']]
  });

  fx('Sets of numbers', 'the names of the main sets of numbers, and how to write and use a set.', {
    head: 'Sets of numbers',
    basics: [['What is a set?', [
      ["A set is a collection of things, written inside curly brackets. The things in the set are called its members. We write the members separated by commas. The set of even numbers up to ten is two, four, six, eight, ten.", ['{2, 4, 6, 8, 10}', 'n|A set: members inside { }']],
      ["The symbol that looks like a curved E means is a member of. Four belongs to the set of even numbers, so we write four is a member of the set. Seven is not a member, so we cross out the symbol.", ['4 ∈ {2, 4, 6, 8, 10}', '7 ∉ {2, 4, 6, 8, 10}']]]],
      ['Important sets of numbers', [
      ["Whole numbers start at zero and go up: zero, one, two, three and so on. Integers include the negatives as well: minus two, minus one, zero, one, two. Rational numbers are numbers that can be written as a fraction, like a half or zero point seven five.", ['Whole: 0, 1, 2, 3, …', 'Integers: …, −2, −1, 0, 1, 2, …', 'Rational: fractions and decimals that end or repeat']],
      ["Some sets have special rules. Square numbers are one, four, nine, sixteen and so on. Cube numbers are one, eight, twenty-seven, sixty-four. Prime numbers have exactly two factors. Multiples of three are three, six, nine.", ['Squares: 1, 4, 9, 16, 25', 'Cubes: 1, 8, 27, 64, 125', 'Primes: 2, 3, 5, 7, 11']]]]],
    ex: [
      ['Listing members', [
        ["List the set of square numbers between ten and fifty. Squares are one, four, nine, sixteen, twenty-five, thirty-six, forty-nine, sixty-four. Only those bigger than ten and less than fifty count.", ['Squares: 1, 4, 9, 16, 25, 36, 49, 64', '16, 25, 36, 49']],
        ["So the set is sixteen, twenty-five, thirty-six, forty-nine.", ['g|{16, 25, 36, 49}']]]],
      ['Which set does it belong to?', [
        ["Is minus three a whole number? No, whole numbers start at zero. Is it an integer? Yes. Is it rational? Yes, because minus three is minus three over one.", ['−3: not whole', '−3: integer ✓', '−3 = −3/1: rational ✓']],
        ["What about zero point four? It is not an integer, because it lies between zero and one. It is rational, because it is four tenths, or two fifths.", ['0.4: not an integer', '0.4 = 2/5: rational ✓']]]],
      ['Two sets together', [
        ["Let set A be the primes less than ten: two, three, five, seven. Let set B be the odd numbers less than ten: one, three, five, seven, nine. The numbers in both sets are three, five and seven.", ['A = {2, 3, 5, 7}', 'B = {1, 3, 5, 7, 9}', 'In both: {3, 5, 7}']],
        ["The numbers in A or B or both are one, two, three, five, seven, nine. Note that two is the only member of A that is not in B.", ['In A or B: {1, 2, 3, 5, 7, 9}']]]]],
    mist: [
      ['Forgetting zero and negatives', "Mistake one: thinking zero is not a whole number, or leaving out negatives from the integers. Whole numbers start at zero. Integers go on both sides of zero.", ['r|Integers: 1, 2, 3 ✗', 'g|Integers: …, −1, 0, 1, 2, … ✓']],
      ['Listing too many', "Mistake two: not reading the limits. Multiples of four between ten and twenty. Wrong: four, eight, twelve, sixteen, twenty. Four and eight are below ten. The set is twelve and sixteen. Whether twenty is included depends on the wording.", ['r|{4, 8, 12, 16, 20} ✗', 'g|{12, 16} ✓']]],
    real: ['In real life', "Sets help us sort things. A shop has a set of products on sale and a set of products in stock. The products in both sets are the ones you can buy at the sale price.", ['On sale ∩ in stock = can buy now']],
    turns: [
      { q: 'List the set of prime numbers less than twenty.', say: "Go through the numbers. Two, three, five, seven. Then eleven, thirteen, seventeen, nineteen. The others are divisible by something. That gives eight primes.", work: ['2, 3, 5, 7', '11, 13, 17, 19'], ans: ['g|{2, 3, 5, 7, 11, 13, 17, 19}'] },
      { q: 'Is minus five a member of the whole numbers? Is it a member of the integers?', say: "Whole numbers start at zero, so minus five is not a whole number. Integers include the negative numbers, so minus five is an integer.", work: ['Whole numbers: 0, 1, 2, … so −5 ∉ whole numbers', 'Integers: …, −2, −1, 0, 1, … so −5 ∈ integers'], ans: ['g|Not whole; it is an integer'] },
      { q: 'Set A is the even numbers less than ten. Set B is the multiples of three less than ten. List the numbers in both sets.', say: "Set A is two, four, six, eight. Set B is three, six, nine. The only number in both lists is six.", work: ['A = {2, 4, 6, 8}', 'B = {3, 6, 9}', 'Both: 6'], ans: ['g|{6}'] }],
    rec: ["A set is a collection, listed in curly brackets.", ['{ } hold the members', '∈ means is a member of', 'Whole numbers start at 0; integers include negatives', 'Rational numbers can be written as fractions', 'Squares, cubes and primes are special sets']]
  });

  fx('What are powers and roots?', 'what powers and roots mean and how to work with squares, cubes and their roots.', {
    head: 'Powers and roots',
    basics: [['Powers', [
      ["A power is a short way to write repeated multiplication. Three to the power four means four threes multiplied together. The three is the base and the four is the index, or power.", ['3⁴ = 3 × 3 × 3 × 3', '3 × 3 = 9', '9 × 3 = 27', '27 × 3 = 81']],
      ["A power of two is a square and a power of three is a cube. Five squared is twenty-five. Four cubed is sixty-four. These are used for the area of a square and the volume of a cube.", ['5² = 5 × 5 = 25', '4³ = 4 × 4 × 4 = 64']]]],
      ['Roots', [
      ["A root undoes a power. The square root of twenty-five is five, because five squared is twenty-five. The cube root of twenty-seven is three, because three cubed is twenty-seven. We write them with this sign.", ['√25 = 5, because 5² = 25', '∛27 = 3, because 3³ = 27']],
      ["Learn the square numbers up to fifteen squared, and the first few cubes. They help you spot roots quickly.", ['1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225', '1, 8, 27, 64, 125']]]]],
    ex: [
      ['Evaluating powers', [
        ["Two to the power five. Multiply five twos. Two times two is four, times two is eight, times two is sixteen, times two is thirty-two.", ['2⁵ = 2 × 2 × 2 × 2 × 2', '2 × 2 = 4, × 2 = 8, × 2 = 16, × 2 = 32', 'g|2⁵ = 32']],
        ["The power only applies to the number next to it. Two times three squared is two times nine, which is eighteen. It is not six squared.", ['2 × 3² = 2 × 9', 'g|= 18']]]],
      ['Square root with a calculation inside', [
        ["The square root of nine plus sixteen. First work out the sum under the root. Nine plus sixteen is twenty-five. The square root of twenty-five is five.", ['√(9 + 16)', '= √25', 'g|= 5']],
        ["Now compare. The square root of nine plus the square root of sixteen is three plus four, which is seven. These two are not the same. We cannot split a square root over an addition.", ['√9 + √16 = 3 + 4 = 7', 'n|√(9 + 16) ≠ √9 + √16']]]],
      ['Real life: a square and a cube', [
        ["A square patio has an area of one hundred and forty-four square metres. The side is the square root of one hundred and forty-four. Twelve times twelve is one hundred and forty-four. So the side is twelve metres.", ['Area = side²', '√144 = 12', 'g|Side = 12 m']],
        ["A cube has sides of four centimetres. Its volume is four cubed. Four times four is sixteen. Sixteen times four is sixty-four cubic centimetres.", ['4³ = 4 × 4 × 4', '16 × 4 = 64', 'g|Volume = 64 cm³']]]]],
    mist: [
      ['Multiplying the index', "Mistake one: multiplying the base by the power. Two cubed is not two times three, which is six. It is two times two times two, which is eight.", ['r|2³ = 2 × 3 = 6 ✗', 'g|2³ = 2 × 2 × 2 = 8 ✓']],
      ['Splitting a root over a sum', "Mistake two: splitting a square root over an addition. The square root of sixteen plus nine is the square root of twenty-five, which is five. It is not four plus three.", ['r|√(16 + 9) = 4 + 3 = 7 ✗', 'g|√(16 + 9) = √25 = 5 ✓']]],
    real: ['In real life', "Floor tiles are measured in squares. A square room has an area of eighty-one square metres, so each wall is nine metres. A storage cube with an edge of five metres holds one hundred and twenty-five cubic metres.", ['√81 = 9 m', '5³ = 125 m³']],
    turns: [
      { q: 'Work out five cubed.', task: '5³', say: "Five cubed means five times five times five. Five times five is twenty-five. Twenty-five times five is one hundred and twenty-five.", work: ['5³ = 5 × 5 × 5', '5 × 5 = 25', '25 × 5 = 125'], ans: ['g|125'] },
      { q: 'Work out the cube root of sixty-four.', task: '∛64', say: "We need a number that, multiplied by itself three times, makes sixty-four. Try three: three cubed is twenty-seven, too small. Try four: four times four is sixteen, times four is sixty-four. So the cube root is four.", work: ['3³ = 27: too small', '4³ = 4 × 4 × 4 = 16 × 4 = 64 ✓'], ans: ['g|∛64 = 4'] },
      { q: 'A square garden has an area of one hundred and sixty-nine square metres. How long is each side?', say: "The area of a square is the side times the side. So the side is the square root of one hundred and sixty-nine. Twelve times twelve is one hundred and forty-four, too small. Thirteen times thirteen is one hundred and sixty-nine. Each side is thirteen metres.", work: ['Area = side × side = 169', '12 × 12 = 144: too small', '13 × 13 = 169 ✓'], ans: ['g|Side = 13 m'] }],
    rec: ["A power is repeated multiplication. A root undoes a power.", ['3⁴ = 3 × 3 × 3 × 3', 'Squares and cubes: know the first ones', '√25 = 5 and ∛27 = 3', 'Work out the sum under a root first', '√(a + b) is not √a + √b']]
  });
})();
