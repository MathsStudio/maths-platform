/* P5 501 Place value and rounding, 502 The four operations */
(function () {
  'use strict';
  var BT = window.BT; if (!BT || !BT.px) return;
  var X = BT.px.X, tbl = BT.px.tbl, nl = BT.px.nl, L = BT.L;

  X('Place value up to millions', 'what each digit in a big number is worth, and how to read, write and order big numbers.', 'Place value in big numbers',
    ['Columns', "Every digit has a place, and the place tells us what the digit is worth. Each column is ten times bigger than the column on its right. In 3,462,185 the 3 is in the millions column, the 4 is in the hundred thousands, the 6 in the ten thousands, the 2 in the thousands, the 1 in the hundreds, the 8 in the tens and the 5 in the ones.", [tbl([['M', 'HTh', 'TTh', 'Th', 'H', 'T', 'O'], ['3', '4', '6', '2', '1', '8', '5']])]],
    [['Value of a digit', "What is the value of the 6 in 3,462,185? The 6 is in the ten thousands column, so it is worth 6 × 10,000, which is 60,000.", ['6 in the ten thousands', '6 × 10,000', 'g|60,000']],
     ['Write in words', "Write 245,300 in words. Say the thousands part, then the rest: two hundred and forty-five thousand, three hundred.", ['245 thousand and 300', 'g|Two hundred and forty-five thousand, three hundred']],
     ['Zero as a place holder', "Write three hundred and five thousand and forty in digits. 305 thousand, then 0 hundreds, 4 tens, 0 ones. It is 305,040.", ['305 | 040', 'g|305,040']],
     ['Ordering', "Put 45,210, 45,120 and 4,521 in order, biggest first. 4,521 has fewer digits so it is smallest. The other two start 45, so compare the hundreds: 2 is more than 1. 45,210, 45,120, 4,521.", ['4,521 is smallest', '45,210 > 45,120', 'g|45,210, 45,120, 4,521']]],
    [['Digit value', "Mistake one: giving the digit itself instead of its value.", 'The 6 in 3,462,185 is worth 6 ✗', 'The 6 is worth 60,000 ✓'],
     ['Ordering', "Mistake two: thinking a number is bigger because its first digit is bigger, even when it has fewer digits.", '9,500 > 12,000 ✗', '12,000 > 9,500 ✓']],
    ["The attendance at a big stadium is 82,450. The 8 is worth 80,000, so we know there are about eighty thousand fans.", ['8 × 10,000 = 80,000']],
    [['What is the value of the 5 in 2,540,000?', "The 5 is in the hundred thousands column. 5 × 100,000.", ['5 × 100,000'], '500,000'],
     ['Write 706,020 in words.', "Seven hundred and six thousand, and twenty.", ['706 thousand 020'], 'Seven hundred and six thousand and twenty'],
     ['Put these in order, smallest first: 8,900, 890, 8,090.', "890 has the fewest digits. Then 8,090, then 8,900.", ['890 < 8,090 < 8,900'], '890, 8,090, 8,900']],
    ["Columns tell the value.", ['Each column is 10 times bigger', 'Zero holds the place']]);

  X('Tenths and hundredths', 'how decimal digits work and how to compare decimals.', 'Decimal place value',
    ['Columns after the point', "A decimal point separates the whole numbers from the parts. The first digit after the point is tenths. The second is hundredths. In 3.47 the 3 is ones, the 4 is four tenths and the 7 is seven hundredths.", [tbl([['O', '.', 'Tenths', 'Hundredths'], ['3', '.', '4', '7']])]],
    [['Value of a digit', "What is the 7 worth in 3.47? It is in the hundredths column, so it is 7 hundredths, or 0.07.", ['7 hundredths', 'g|0.07']],
     ['Comparing', "Which is bigger, 0.6 or 0.58? Write 0.6 as 0.60. Compare the tenths: 6 is more than 5. So 0.6 is bigger.", ['0.60 and 0.58', '6 tenths > 5 tenths', 'g|0.6']],
     ['Ordering', "Put 0.5, 0.45 and 0.54 in order, smallest first. Same number of places: 0.50, 0.45, 0.54. 0.45 then 0.50 then 0.54.", ['0.45 < 0.50 < 0.54', 'g|0.45, 0.5, 0.54']],
     ['Money', "£4.05 means 4 pounds, 0 tens of pence and 5 pence. The 0 holds the place.", ['£4.05']]],
    [['Longer is bigger', "Mistake one: thinking a decimal with more digits is bigger.", '0.45 > 0.5 because 45 > 5 ✗', '0.5 = 0.50 > 0.45 ✓'],
     ['Dropping the zero', "Mistake two: dropping the zero that holds the place.", '£4.05 = £4.5 ✗', '£4.05 = four pounds five pence ✓']],
    ["Two runners finish a race in 12.4 seconds and 12.38 seconds. 12.4 is 12.40, which is more than 12.38. The second runner is faster by 0.02 seconds.", ['12.40 > 12.38']],
    [['What is the 8 worth in 5.28?', "It is in the hundredths column. 0.08.", ['8 hundredths'], '0.08'],
     ['Which is bigger, 0.7 or 0.65?', "0.7 is 0.70. Seven tenths beats six tenths.", ['0.70 > 0.65'], '0.7'],
     ['Put in order, smallest first: 2.3, 2.03, 2.33.', "2.03 then 2.30 then 2.33.", ['2.03 < 2.30 < 2.33'], '2.03, 2.3, 2.33']],
    ["Line up the places.", ['Tenths, hundredths', 'Add zeros to compare']]);

  X('Partitioning big numbers', 'how to split numbers into thousands, hundreds, tens and ones and use this to add.', 'Partitioning',
    ['Splitting by value', "To partition a number, split it into the value of each digit. 4,825 is 4,000 and 800 and 20 and 5. Partitioning helps us add in our head.", ['4,825 = 4,000 + 800 + 20 + 5']],
    [['Partition', "Partition 6,090. There are no hundreds. 6,000 and 90.", ['6,000 + 0 + 90 + 0', 'g|6,000 + 90']],
     ['Add by partitioning', "Work out 348 + 256. Add the hundreds: 300 and 200 is 500. Add the tens: 40 and 50 is 90. Add the ones: 8 and 6 is 14. Then 500 and 90 and 14 is 604.", ['500 + 90 + 14', 'g|604']],
     ['Flexible', "3,450 can be 3,000 + 400 + 50, or 2,000 + 1,400 + 50. Both make 3,450.", ['2,000 + 1,400 + 50 = 3,450']],
     ['Subtract by partitioning', "Work out 725 − 300. Take away the hundreds only: 725 − 300 = 425.", ['700 − 300 = 400', 'g|425']]],
    [['Missing the zero', "Mistake one: forgetting a zero when partitioning.", '6,090 = 6,000 + 900 ✗', '6,090 = 6,000 + 90 ✓'],
     ['Adding wrong columns', "Mistake two: adding digits from different columns.", '348 + 256: 3 + 2 + 4 + 5 ✗', 'Add hundreds with hundreds ✓']],
    ["A shop sold 348 apples on Monday and 256 on Tuesday. Partitioning gives 604 apples altogether.", ['348 + 256 = 604']],
    [['Partition 5,372.', "5,000 and 300 and 70 and 2.", ['5,000 + 300 + 70 + 2'], '5,000 + 300 + 70 + 2'],
     ['Partition 2,704.', "There are no tens. 2,000 and 700 and 4.", ['2,000 + 700 + 4'], '2,000 + 700 + 4'],
     ['Work out 435 + 267 by partitioning.', "Hundreds 600, tens 90, ones 12. 702.", ['600 + 90 + 12'], '702']],
    ["Split by value, then add.", ['Hundreds, tens, ones']]);

  X('Rounding whole numbers', 'how to round to the nearest 10, 100 and 1,000, including the 5 rule.', 'Rounding whole numbers',
    ['Look next door', "To round, find the digit you are rounding to. Then look at the digit to its right. If it is 5 or more, round up. If it is 4 or less, round down. This is the 5 rule.", ['0 to 4: round down', '5 to 9: round up'], ],
    [['Nearest 10', "Round 463 to the nearest 10. The tens digit is 6. Look at the ones digit: 3. Three is less than five, so round down. 460.", ['463 → 460', 'g|460']],
     ['The 5 rule', "Round 465 to the nearest 10. The ones digit is 5, so round up. 470.", ['5 rounds up', 'g|470']],
     ['Nearest 100', "Round 463 to the nearest 100. Look at the tens digit: 6. Six is 5 or more, so round up. 500.", ['463 → 500', 'g|500']],
     ['Nearest 1,000', "Round 3,847 to the nearest 1,000. Look at the hundreds digit: 8. Round up. 4,000.", ['3,847 → 4,000', 'g|4,000']]],
    [['Wrong digit', "Mistake one: looking at the wrong digit.", '2,951 to nearest 100: 2,900 ✗', '2,951 to nearest 100: 3,000 ✓'],
     ['Rounding down a 5', "Mistake two: rounding a 5 down.", '65 to nearest 10: 60 ✗', '65 to nearest 10: 70 ✓']],
    ["A newspaper says 4,386 people came to the fair. Rounded to the nearest 100, it is about 4,400 people.", ['4,386 ≈ 4,400']],
    [['Round 78 to the nearest 10.', "The ones digit is 8, so round up.", ['78 → 80'], '80'],
     ['Round 4,386 to the nearest 100.', "The tens digit is 8, so round up.", ['4,386 → 4,400'], '4,400'],
     ['Round 7,500 to the nearest 1,000.', "The hundreds digit is 5, so round up.", ['7,500 → 8,000'], '8,000']],
    ["Look right. 5 or more, up.", ['Next digit', 'The 5 rule']]);

  X('Rounding decimals', 'how to round decimals to a whole number and to one decimal place.', 'Rounding decimals',
    ['Same rule', "The same 5 rule works for decimals. To round to a whole number, look at the tenths digit. To round to one decimal place, look at the hundredths digit.", ['Whole number: look at tenths', '1 decimal place: look at hundredths']],
    [['Nearest whole number', "Round 4.63 to the nearest whole number. The tenths digit is 6, which is 5 or more. Round up. 5.", ['4.63 → 5', 'g|5']],
     ['Round down', "Round 4.36 to the nearest whole number. The tenths digit is 3. Round down. 4.", ['4.36 → 4', 'g|4']],
     ['One decimal place', "Round 7.45 to one decimal place. The hundredths digit is 5, so round up. 7.5.", ['7.45 → 7.5', 'g|7.5']],
     ['Carrying over', "Round 2.96 to one decimal place. The hundredths digit is 6, so the 9 goes up to 10. We write 3.0.", ['2.96 → 3.0', 'g|3.0']]],
    [['Chopping off', "Mistake one: just deleting the digits.", '4.63 → 4 ✗', '4.63 → 5 ✓'],
     ['Looking at the wrong place', "Mistake two: looking at the wrong digit.", '3.76 to 1 d.p. using the 3: 3.7 ✗', '3.76 to 1 d.p. using the 6: 3.8 ✓']],
    ["A baby weighs 3.46 kilograms. Rounded to one decimal place, that is 3.5 kilograms.", ['3.46 ≈ 3.5']],
    [['Round 8.4 to the nearest whole number.', "The tenths digit is 4, so round down.", ['8.4 → 8'], '8'],
     ['Round 3.76 to one decimal place.', "The hundredths digit is 6, so round up.", ['3.76 → 3.8'], '3.8'],
     ['Round 5.5 to the nearest whole number.', "The tenths digit is 5, so round up.", ['5.5 → 6'], '6']],
    ["Check the next digit.", ['Whole: tenths', '1 d.p.: hundredths']]);

  X('Negative numbers and temperature', 'how to read, order and calculate with numbers below zero.', 'Negative numbers',
    ['Below zero', "Negative numbers are numbers below zero. Think of a thermometer. Zero is freezing. Minus 3 degrees is three degrees below zero. On a number line, the further left, the smaller the number.", [nl(-5, 5, 1, [{ v: -3, l: '-3' }], 'Number line from -5 to 5')]],
    [['Temperature rise', "The temperature is −3 °C and it rises by 5 degrees. Count up 5 from −3: −2, −1, 0, 1, 2. It is 2 °C.", ['−3 + 5 = 2', 'g|2 °C']],
     ['Colder', "Which is colder, −2 °C or −7 °C? −7 is further below zero, so it is colder.", ['−7 < −2', 'g|−7 °C']],
     ['Ordering', "Put −5, 2, −1 and 0 in order, smallest first. −5, −1, 0, 2.", ['−5 < −1 < 0 < 2', 'g|−5, −1, 0, 2']],
     ['Counting back', "3 − 5: count back 5 from 3. 2, 1, 0, −1, −2. The answer is −2.", ['3 − 5', 'g|−2']]],
    [['Bigger digit means bigger', "Mistake one: thinking −7 is bigger than −2.", '−7 > −2 ✗', '−7 < −2 ✓'],
     ['Stopping at zero', "Mistake two: stopping at zero when counting back.", '3 − 5 = 0 ✗', '3 − 5 = −2 ✓']],
    ["In Scotland on a winter night the temperature may fall from 2 °C to −4 °C. It has dropped 6 degrees.", ['2 − 6 = −4']],
    [['What is 2 − 6?', "Count back 6 from 2: −4.", ['2 − 6'], '−4'],
     ['Which is colder, −4 °C or −9 °C?', "−9 is further below zero.", ['−9 < −4'], '−9 °C'],
     ['Put in order, smallest first: −3, 1, −6.', "−6, −3, 1.", ['−6 < −3 < 1'], '−6, −3, 1']],
    ["Left is smaller.", ['Zero is not the end', 'Count on or back']]);

  X('Estimating by rounding', 'how to round numbers to make a quick estimate and check an answer.', 'Estimating',
    ['Round, then calculate', "An estimate is a sensible guess. Round each number to one big digit, then calculate. The symbol ≈ means about equal to.", ['Round → calculate → ≈']],
    [['Adding', "Estimate 389 + 612. Round to the nearest 100: 400 + 600 = 1,000. So 389 + 612 ≈ 1,000.", ['400 + 600', 'g|≈ 1,000']],
     ['Multiplying', "Estimate 28 × 19. Round to the nearest 10: 30 × 20 = 600. The exact answer is 532, which is close.", ['30 × 20', 'g|≈ 600']],
     ['Checking', "A child works out 4,872 − 2,115 = 2,857. Estimate: 5,000 − 2,000 = 3,000. 2,857 is close to 3,000, so it is sensible.", ['5,000 − 2,000 = 3,000', 'g|✓']],
     ['A real problem', "A bus holds 52 passengers. About how many passengers can 19 buses hold? 50 × 20 = 1,000.", ['50 × 20', 'g|≈ 1,000 passengers']]],
    [['Rounding only one number', "Mistake one: rounding only one of the numbers.", '389 + 612 ≈ 400 + 612 ✗', '≈ 400 + 600 ✓'],
     ['Treating an estimate as exact', "Mistake two: expecting the estimate to be exact.", '28 × 19 = 600 exactly ✗', '28 × 19 ≈ 600 ✓']],
    ["Before you buy 3 items at £4.95, £9.90 and £5.10, round to £5, £10 and £5. You need about £20.", ['5 + 10 + 5 = 20']],
    [['Estimate 198 + 305.', "200 + 300.", ['200 + 300'], '≈ 500'],
     ['Estimate 61 × 9.', "60 × 10.", ['60 × 10'], '≈ 600'],
     ['Estimate 8,105 − 3,892.', "8,000 − 4,000.", ['8,000 − 4,000'], '≈ 4,000']],
    ["Round both, then calculate.", ['≈ means about']]);

  L.usePri(501, ['Place value up to millions', 'Tenths and hundredths', 'Partitioning big numbers', 'Rounding whole numbers', 'Rounding decimals', 'Negative numbers and temperature', 'Estimating by rounding']);
})();
