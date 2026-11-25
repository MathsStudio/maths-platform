/* lessons_full_s1.js: fuller S1 Watch lessons: start from the basics, several worked examples taken slowly, common mistakes, "your turn" pauses. */
(function () {
  'use strict';
  var BT = window.BT; if (!BT || !BT.L || !BT.sv || !BT.lk) return;
  var L = BT.L, V = BT.sv, LK = BT.lk, E = L.E, S = L.st, SC = L.SC, g = function (t) { return E(t, 'g'); }, r = function (t) { return E(t, 'r'); };
  (function () {
    var T = 'What is place value and decimal place value?';
    var HEAD5 = ['TTh', 'Th', 'H', 'T', 'O'];
    L.full(T, [
      SC('Place value', 'Start with the basics', [
        S("Let's start from the very beginning. Every number is made from just 10 digits: nought, 1, 2, 3, 4, 5, 6, 7, 8 and 9. That is all we ever need.", V.cards(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], ['b'], true)),
        S("The clever part is that a digit can be worth different amounts. The digit 5 is worth 5 in the number five, but 50 in the number fifty-3, and 500 in the number five hundred and twelve. The amount a digit is worth depends on where it sits.", E('5   →   50   →   500')),
        S("Each place is called a column. The columns have names. From the right they are ones, tens, hundreds, then thousands and 10 thousands. We call this idea place value: the value of a digit comes from its place.", V.tbl([['4', '7', '3', '0', '6']], ['Ten thousands', 'Thousands', 'Hundreds', 'Tens', 'Ones']))
      ]),
      SC('Whole numbers', 'Example 1: 47,306', [
        S("Let's read the number forty-7 thousand, 306. Put each digit in its column. The 4 is in the 10 thousands column. The 7 is in the thousands column. The 3 is in the hundreds. The 0 is in the tens, and the 6 is in the ones.", V.tbl([['4', '7', '3', '0', '6']], HEAD5)),
        S("Now find what each digit is worth. The 4 is worth 40,000. The 7 is worth 7,000. The 3 is worth 300. The 0 is worth nothing. The 6 is worth 6.", g('40,000 + 7,000 + 300 + 0 + 6')),
        S("Why do we need the zero? It is a placeholder. It holds the tens column open so the 3 stays in the hundreds. Without it we would write 4 7 3 6, and the number would be far smaller.", E('47,306  not  4,736', 'g') + V.rule('A 0 keeps every other digit in the right column.'))
      ]),
      SC('Same digit, different value', 'Example 2: the digit 5', [
        S("Here is a good test. Look at 2 numbers, 2,000, 581, and 5,000, 218. Both use a 5.", E('2,581') + E('5,218')),
        S("In 2,000, 581, the 5 is in the hundreds column, so it is worth 500. In 5,000, 218, the 5 is in the thousands column, so it is worth 5,000. Same digit, but a different place, so a different value.", E('2,581 → 5 is worth 500', 'g') + E('5,218 → 5 is worth 5,000', 'g'))
      ]),
      SC('Ten times bigger', 'How the columns are linked', [
        S("The columns are not random. Each column is 10 times bigger than the column on its right. Ones, then 10 times that is tens, 10 times that is hundreds, and so on.", V.tbl([['1', '10', '100', '1,000']], ['O', 'T', 'H', 'Th'])),
        S("So moving 1 column to the left makes a digit 10 times bigger. Moving 1 column to the right makes it 10 times smaller. Keep that idea in your head. We use it all lesson, and it works on the right of the decimal point too.", V.rule('Left: × 10.   Right: ÷ 10.'))
      ]),
      SC('The decimal point', 'Parts of a whole', [
        S("What if we need less than 1? We use a decimal point. The digits to the left of the point are whole numbers. The digits to the right are parts of 1.", E('3 . 2 5 8')),
        S("The first column after the point is tenths. To make tenths, cut 1 whole into 10 equal parts. 3/10 means 3 of those 10 parts. We write it as 0.3.", V.bar(3, 10) + g('0.3 = 3/10')),
        S("The next column is hundredths. Now cut each tenth into 10 more pieces, so 1 whole is 100 pieces. The column after that is thousandths. Each column is 10 times smaller than the one on its left, exactly as before.", V.tbl([['1', '0.1', '0.01', '0.001']], ['Ones', 'tenths', 'hundredths', 'thousandths']))
      ]),
      SC('Decimal places', 'Example 3: 3.258', [
        S("Take the number 3.258. We say each digit after the point on its own.", V.tbl([['3', '.', '2', '5', '8']], ['O', '', 'tenths', 'hundredths', 'thousandths'])),
        S("The 3 is 3 ones. The 2 is in the tenths column, so it is 2/10, which is 0.2. The 5 is in the hundredths column, so it is 5/100, 0.05. The 8 is in the thousandths column, so it is 8/1000, 0.008.", g('3.258 = 3 + 0.2 + 0.05 + 0.008'))
      ]),
      SC('Comparing decimals', 'Example 4: 0.7 or 0.65?', [
        S("Which is bigger, 0.7 or 0.65? Many people say 0.65, because 65 looks bigger than 7. That is a trap. Let's do it properly.", E('0.7  or  0.65  ?')),
        S("Step one: give both numbers the same number of decimal places. 0.7 can be written 0.70. Adding a 0 on the end does not change its value.", E('0.70') + E('0.65')),
        S("Step two: compare column by column from the left. Both have a 0 in the ones. In the tenths, 7 is bigger than 6. So we can stop. 0.7 is bigger.", g('0.70 > 0.65') + V.rule('Compare from the left. The first difference decides.'))
      ]),
      SC('Comparing decimals', 'Example 5: put in order', [
        S("Put these in order, smallest first: 0.5, 0.45, and 0.405.", E('0.5   0.45   0.405')),
        S("Give them all 3 decimal places so they line up. 0.5 becomes 0.500. 0.45 becomes 0.450.", E('0.500') + E('0.450') + E('0.405')),
        S("Now compare the tenths. 2 of them have 4/10, and 1 has 5/10, so 0.5 is the biggest. For the other 2, look at the hundredths. 0.405 has 0/100 and 0.45 has 5/100. So the smallest is 0.405.", g('0.405 < 0.45 < 0.5'))
      ]),
      SC('Multiplying and dividing by 10, 100, 1,000', 'The digits move', [
        S("Because each column is 10 times the next, multiplying by 10 makes every digit move 1 column to the left. It is the digits that move. The decimal point stays where it is.", E('4.37 × 10 = 43.7')),
        S("Look at 4.37. Times 10: the 4 moves from ones to tens, the 3 moves to ones, and the 7 moves to tenths. We get 43.7.", V.tbl([['4', '.', '3', '7']], ['O', '', 't', 'h']) + V.tbl([['4', '3', '.', '7']], ['T', 'O', '', 't'])),
        S("Times 100 moves the digits 2 places to the left. Sometimes there is nothing to fill the gap, so we use a 0 as a placeholder. 0.5 times 100 is 50.", g('0.5 × 100 = 50')),
        S("Dividing is the opposite. Dividing by 100 moves every digit 2 places to the right. 52.8 divided by 100 is 0.528.", g('52.8 ÷ 100 = 0.528'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake number one: thinking more digits means bigger. 0.65 is not bigger than 0.7. Always compare column by column from the left.", E('0.65 > 0.7  ✗', 'r') + g('0.7 > 0.65  ✓')),
        S("Mistake number two: leaving out the 0 placeholder. 305 is 3, 0, 5. If you leave out the 0 you get 35, which is much smaller.", E('305  not  35', 'g')),
        S("Mistake number three: saying that multiplying by 10 just adds a 0. That works for whole numbers like 7 times 10, but not for decimals. 4.37 times 10 is 43.7, not 4.370.", E('4.37 × 10 = 4.370  ✗', 'r') + g('4.37 × 10 = 43.7  ✓'))
      ]),
      SC('In real life', 'Money and sport', [
        S("Money uses place value all the time. £3.45 is 3 ones, 4/10 and 5/100 of a pound. That is why pence come after the point.", E('£3.45 = 3 + 0.4 + 0.05')),
        S("In sport, races are timed to the hundredth of a second. 9.58 seconds beats 9.63 seconds, because at the tenths column 5 is smaller than 6, and a smaller time is faster.", g('9.58 < 9.63'))
      ]),
      L.turn("Your turn! Number one. What is the value of the 6 in 12.364? Pause and think.", E('12.364'), "The 6 is in the hundredths column, so it is worth 6/100: 0.06.", g('0.06')),
      L.turn("Your turn! Number two. Which is bigger, 0.09 or 0.1? Pause and think.", E('0.09  or  0.1  ?'), "Write 0.1 as 0.10. In the tenths, 0 is smaller than 1, so 0.1 is bigger.", g('0.10 > 0.09')),
      L.turn("Your turn! Number three. What is 6.3 divided by 10? Pause and think.", E('6.3 ÷ 10 = ?'), "Dividing by 10 moves each digit 1 column to the right. The 6 moves to the tenths and the 3 to the hundredths, so the answer is 0.63.", g('6.3 ÷ 10 = 0.63')),
      L.rec(T, "A digit's value depends on its column. Each column is 10 times the one to its right. After the point come tenths, hundredths and thousandths. Compare decimals column by column from the left, and use 0 as a placeholder.", ['Each column × 10 to the left', 'tenths, hundredths, thousandths', 'Zeros hold places', 'Compare from the left', '× or ÷ 10 moves the digits'])
    ]);
  })();
  /* ---- Column addition and subtraction ---- */
  (function () {
    var T = 'How do you use column addition and subtraction?', TH = ['', 'Th', 'H', 'T', 'O'], LN = { line: true };
    L.full(T, [
      SC('Column methods', 'Why we use columns', [
        S("Adding and taking away are things you have done for years. In this lesson we learn a method that works for any size of number. It is called the column method.", V.cards(['+', '−'], ['b'])),
        S("Remember place value. Every digit sits in a column: ones, tens, hundreds, thousands. A digit only means something because of its column.", V.tbl([['5', '6', '7', '8']], ['Thousands', 'Hundreds', 'Tens', 'Ones'])),
        S("So when we add or subtract, we keep the columns lined up. Ones go under ones, tens under tens, and so on. Then we work on 1 column at a time, starting from the right.", V.rule('Line up the digits. Start on the right, with the ones.'))
      ]),
      SC('Adding in columns', 'Example 1: 5,678 + 2,945', [
        S("Let's add 5,000, 678, and 2,000, 945. First we write the numbers 1 under the other, with the columns lined up.", LK.col(TH, [['', 5, 6, 7, 8], ['+', 2, 9, 4, 5], LN])),
        S("Start with the ones. 8 plus 5 is 13. 13 is 1 10 and 3 ones. So we write 3 in the ones column, and we carry the one 10 over to the tens column.", E('8 + 5 = 13', 'b') + V.rule('Write 3. Carry 1 into the tens.')),
        S("Now the tens. 7 plus 4 is 11, and we add the one we carried. That makes 12. Write 2, and carry 100 over to the hundreds column.", E('7 + 4 + 1 = 12', 'b') + V.rule('Write 2. Carry 1 into the hundreds.')),
        S("Next, the hundreds. 6 plus 9 is 15, plus the carried 1 makes 16. Write 6, and carry 1 into the thousands.", E('6 + 9 + 1 = 16', 'b') + V.rule('Write 6. Carry 1 into the thousands.')),
        S("Last, the thousands. 5 plus 2 is 7, plus the carried 1 makes 8. So the answer is 8,000, 623.", LK.col(TH, [['', 5, 6, 7, 8], ['+', 2, 9, 4, 5], LN, ['', 'h:8', 'h:6', 'h:2', 'h:3']]) + g('5,678 + 2,945 = 8,623')),
        S("It is always a good idea to check that your answer is sensible. Round the numbers: about 5,700, plus about 2,900, is about 8,600. Our answer is very close, so it is sensible.", E('5,700 + 2,900 = 8,600') + V.rule('Estimate first or last. It catches big slips.'))
      ]),
      SC('Adding in columns', 'Example 2: 4,908 + 3,596', [
        S("Here is a second 1 with a 0 in it. 4,000, 908, plus 3,000, 596.", E('4,908 + 3,596')),
        S("Ones: 8 plus 6 is 14. Write 4, carry 1. Tens: 0 plus 9 is 9, and the carried 1 makes 10. Write 0, carry 1.", E('8 + 6 = 14  →  write 4, carry 1') + E('0 + 9 + 1 = 10  →  write 0, carry 1')),
        S("Hundreds: 9 plus 5 is 14, plus 1 is 15. Write 5, carry 1. Thousands: 4 plus 3 is 7, plus 1 is 8. The answer is 8,000, 504.", E('9 + 5 + 1 = 15  →  write 5, carry 1') + E('4 + 3 + 1 = 8') + g('4,908 + 3,596 = 8,504'))
      ]),
      SC('Subtracting in columns', 'What subtraction means', [
        S("Subtraction means taking away, or finding the difference. We use columns again, and again we start on the right. The big number always goes on top.", LK.col(TH, [['', 5, 2, 4, 3], ['−', 1, 7, 8, 6], LN])),
        S("Here is the important new idea. Sometimes the digit on top is too small to take the bottom digit away. When that happens, we exchange. We borrow 1 from the next column on the left. 1 in that column is worth 10 in this one.", V.rule('Too small? Exchange: take 1 from the next column, give 10 to this one.'))
      ]),
      SC('Subtracting in columns', 'Example 3: 5,243 − 1,786', [
        S("Let's work out 5,000, 243, take away 1,000, 786.", E('5,243 − 1,786')),
        S("Ones: 3 take away 6 cannot be done. So we exchange. Take 1 10 from the tens column. The 4 tens become 3 tens, and the 3 ones become 13 ones. 13 take away 6 is 7.", E('13 − 6 = 7', 'b') + V.rule('Tens: 4 → 3.  Ones: 3 → 13.')),
        S("Tens: now we have 3 tens, and we want to take away 8. Again that cannot be done. Exchange from the hundreds. 2 hundreds become 100, and the 3 tens become 13 tens. 13 take away 8 is 5.", E('13 − 8 = 5', 'b') + V.rule('Hundreds: 2 → 1.  Tens: 3 → 13.')),
        S("Hundreds: we have 100, and we want to take away 7. Exchange from the thousands. 5 thousands become 4 thousands, and 100 becomes 11 hundreds. 11 take away 7 is 4.", E('11 − 7 = 4', 'b') + V.rule('Thousands: 5 → 4.  Hundreds: 1 → 11.')),
        S("Finally the thousands. We have 4 thousands, and take away 1. That leaves 3. The answer is 3,000, 457.", g('5,243 − 1,786 = 3,457'))
      ]),
      SC('Subtracting in columns', 'Example 4: 7,042 − 3,857, with a 0', [
        S("This one is the tricky kind. 7,042, take away 3,000, 857. Look at the top number. There is a 0 in the hundreds column.", LK.col(TH, [['', 7, 0, 4, 2], ['−', 3, 8, 5, 7], LN])),
        S("Ones: 2 take away 7 cannot be done. Exchange from the tens. 4 tens become 3 tens, and the 2 ones become 12. 12 take away 7 is 5.", E('12 − 7 = 5', 'b')),
        S("Tens: 3 take away 5 cannot be done. We want to exchange from the hundreds, but there are no hundreds to give. So we go one more column. Take 1,000. The 7 thousands become 6 thousands. That 1,000 is 10 hundreds. We give one of those hundreds to the tens, and 9 hundreds are left.", V.rule('Thousands: 7 → 6.  Hundreds: 0 → 9.  Tens: 3 → 13.')),
        S("Now the tens are 13. 13 take away 5 is 8. Hundreds: 9 take away 8 is 1. Thousands: 6 take away 3 is 3. The answer is 3,000, 185.", E('13 − 5 = 8') + E('9 − 8 = 1') + E('6 − 3 = 3') + g('7,042 − 3,857 = 3,185'))
      ]),
      SC('Check with the inverse', 'Add it back', [
        S("Adding and subtracting are opposites. So we can check a subtraction by adding the answer back to the number we took away. If we get the number we started with, we are right.", V.rule('Check a subtraction by adding the answer back.')),
        S("3,000, 185, plus 3,000, 857. That makes 7,042. It matches, so our answer is correct.", g('3,185 + 3,857 = 7,042 ✓'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: not lining up the columns. If you write a number such as 45 under the thousands and hundreds, you will add the wrong digits. Always put the ones under the ones.", r('5,678 + 45: 4 under the thousands  ✗') + g('5,678 + 45: 4 under the tens  ✓')),
        S("Mistake two: forgetting the carried digit. When a column makes 10 or more, the extra 10 must be added into the next column. Do not leave it out.", r('Forgot the carry  ✗') + g('Write the 1 small above the next column  ✓')),
        S("Mistake three: taking the smaller digit away from the bigger 1. In 52 take away 37, the ones column is 2 take away 7. Some people do 7 take away 2 and get 5. That is wrong. You must exchange, and do 12 take away 7.", r('7 − 2 = 5  ✗') + g('12 − 7 = 5  ✓  (after exchanging)'))
      ]),
      SC('In real life', 'Fundraising', [
        S("A school raises 4,000, £860 at a fair. Then it raises 2,000, £575 from a sponsored walk. To find the total we add in columns.", E('£4,860 + £2,575')),
        S("0 plus 5 is 5. 6 plus 7 is 13, write 3, carry 1. 8 plus 5 plus 1 is 14, write 4, carry 1. 4 plus 2 plus 1 is 7. The school has raised 7,000, £435.", g('£4,860 + £2,575 = £7,435'))
      ]),
      L.turn("Your turn! Number one. Work out 6,005, take away 2,000, 318. Pause and try it. Remember the zeros.", E('6,005 − 2,318'), "Exchange across the zeros. The tens and hundreds each become 9, and the ones become 15. The answer is 3,000, 687.", g('6,005 − 2,318 = 3,687')),
      L.turn("Your turn! Number two. Work out 4,000, 785, plus 3,000, 658. Pause and try it.", E('4,785 + 3,658'), "5 plus 8 is 13. 8 plus 5 plus 1 is 14. 7 plus 6 plus 1 is 14. 4 plus 3 plus 1 is 8. The answer is 8,000, 443.", g('4,785 + 3,658 = 8,443')),
      L.turn("Your turn! Number three. A shop has 9,000 tickets. It sells 4,000, 275. How many are left? Pause and try it.", E('9,000 − 4,275'), "Exchange from the thousands, and every 0 becomes 9, with the ones becoming 10. The answer is 4,000, 725. Check: 4,000, 725 plus 4,000, 275 is 9,000.", g('9,000 − 4,275 = 4,725')),
      L.rec(T, "Line up the place values. Start on the right. Carry when a column makes 10 or more. Exchange when the top digit is too small. When there is a 0, go to the next column that has something to give. Always check your answer.", ['Line up the columns', 'Start with the ones', 'Carry when you add', 'Exchange when you subtract', 'Check with the inverse'])
    ]);
  })();

  /* ---- Decimals in columns ---- */
  (function () {
    var T = 'How do you add and subtract to three decimal places?';
    L.full(T, [
      SC('Decimals in columns', 'Start with what you know', [
        S("You already know how to add and subtract whole numbers in columns. The good news is that decimals work in exactly the same way. There is just one extra rule.", V.rule('Line up the decimal points.')),
        S("Why? Because the decimal point is the fixed point of the whole number. The ones column sits just to its left. Tenths, hundredths and thousandths sit to its right. If the points are lined up, then every column lines up too.", V.tbl([['4', '.', '3', '7', '5']], ['Ones', '', 'tenths', 'hundredths', 'thousandths'])),
        S("Sometimes 1 number has fewer decimal places than the other. Then we fill the empty places with zeros. A 0 on the end of a decimal does not change its value. 2.86 is the same as 2.860.", E('2.86 = 2.860', 'g'))
      ]),
      SC('Adding decimals', 'Example 1: 4.375 + 2.86', [
        S("Let's add 4.375, and 2.86. First, write them in columns. Point under point. Then fill the gap in 2.86 with a 0.", E('  4.375') + E('+ 2.860') + V.rule('Points lined up. The extra 0 fills the gap.')),
        S("Start on the right. 5 plus 0 is 5. 7 plus 6 is 13. Write 3, carry 1 into the hundredths.", E('5 + 0 = 5') + E('7 + 6 = 13  →  write 3, carry 1')),
        S("3 plus 8 plus 1 is 12. Write 2, carry 1. 4 plus 2 plus 1 is 7. The decimal point goes straight down into the answer. So the answer is 7.235.", E('3 + 8 + 1 = 12  →  write 2, carry 1') + g('4.375 + 2.860 = 7.235')),
        S("Does that make sense? 4 plus 3 is about 7. Yes, 7.235 is sensible.", V.rule('Estimate: 4 + 3 = 7 ✓'))
      ]),
      SC('Adding decimals', 'Example 2: 3 numbers', [
        S("Now with 3 numbers. 12.4, plus 3.675, plus 0.08. Be careful to line up all 3 points.", E('12.400') + E(' 3.675') + E(' 0.080') + V.rule('Fill every gap with a 0.')),
        S("Thousandths: 0 plus 5 plus 0 is 5. Hundredths: 0 plus 7 plus 8 is 15. Write 5, carry 1. Tenths: 4 plus 6 plus 0 plus the carried 1 is 11. Write 1, carry 1.", E('0 + 5 + 0 = 5') + E('0 + 7 + 8 = 15  →  5, carry 1') + E('4 + 6 + 0 + 1 = 11  →  1, carry 1')),
        S("Ones: 2 plus 3 plus the carried 1 is 6. Tens: 1. So the total is 16.155.", g('12.4 + 3.675 + 0.08 = 16.155'))
      ]),
      SC('Subtracting decimals', 'Example 3: 9.2 − 3.457', [
        S("Now subtraction. 9.2 take away 3.457. The first number has only one decimal place. So we write it as 9.200.", E('9.200') + E('−3.457')),
        S("Thousandths: 0 take away 7 cannot be done, and the hundredths are 0 too. So we exchange from the tenths. 2/10 become 1/10. 1/10 is 10/100. Take 1 of those to give the thousandths. That leaves 9/100, and 10/1000.", V.rule('Tenths: 2 → 1.   Hundredths: 0 → 9.   Thousandths: 0 → 10.')),
        S("10 take away 7 is 3. 9 take away 5 is 4. 1 take away 4 cannot be done, so we exchange from the ones. 11 take away 4 is 7. 8 take away 3 is 5. The answer is 5.743.", E('10 − 7 = 3,   9 − 5 = 4,   11 − 4 = 7,   8 − 3 = 5') + g('9.2 − 3.457 = 5.743')),
        S("Check by adding back. 5.743 plus 3.457 is 9.2. It matches.", g('5.743 + 3.457 = 9.200 ✓'))
      ]),
      SC('Subtracting decimals', 'Example 4: 10 − 2.386', [
        S("A whole number is a decimal too. 10 take away 2.386. Write 10 as 10.000, so the places match.", E('10.000') + E('− 2.386')),
        S("The trick with a lot of zeros is to exchange all the way along. Every 0 becomes a 9, and the last place becomes 10. 10 take away 6 is 4. 9 take away 8 is 1. 9 take away 3 is 6. 9 take away 2 is 7.", E('10 − 6 = 4,   9 − 8 = 1,   9 − 3 = 6,   9 − 2 = 7') + g('10 − 2.386 = 7.614'))
      ]),
      SC('Mental methods', 'Bridging to a whole number', [
        S("Sometimes you can do a decimal sum in your head. One way is to bridge to a whole number. Take 5.98 plus 2.05.", E('5.98 + 2.05')),
        S("5.98 is only 2/100 away from 6. So take 2/100 from the 2.05. That leaves 2.03. Then 6 plus 2.03 is 8.03.", g('5.98 + 2.05 = 6 + 2.03 = 8.03'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: lining up the last digits instead of the decimal points. 4.375 and 2.86 are different lengths. The points must be in a straight line, not the right-hand ends.", r('4.375 + 2.86  with the ends lined up  ✗') + g('Points lined up  ✓')),
        S("Mistake two: not filling the gaps with zeros. A gap is easy to misread. Writing the 0 makes every column complete.", g('2.86 → 2.860')),
        S("Mistake three: forgetting the point in the answer. The point goes straight down from the question into the answer. Always check that your answer is sensible with an estimate.", r('7235  ✗') + g('7.235  ✓'))
      ]),
      SC('In real life', 'Science measurements', [
        S("A beaker holds 1.25 litres of water. A scientist pours out 0.375 litres. How much is left? Write 1.25 as 1.250, and subtract.", E('1.250 − 0.375')),
        S("Exchange along. 10 take away 5 is 5. 14 take away 7 is 7. 11 take away 3 is 8. 0 take away 0 is 0. So 0.875 litres are left.", g('1.250 − 0.375 = 0.875 litres'))
      ]),
      L.turn("Your turn! Number one. Work out 3.7, plus 0.456. Pause and try it. Fill the gaps with zeros first.", E('3.700 + 0.456'), "Line up the points. 0 plus 6 is 6. 0 plus 5 is 5. 7 plus 4 is 11, write 1, carry 1. 3 plus the carried 1 is 4. The answer is 4.156.", g('3.700 + 0.456 = 4.156')),
      L.turn("Your turn! Number two. Work out 8.05, take away 2.378. Pause and try it.", E('8.050 − 2.378'), "Write 8.05 as 8.050. Exchange carefully. The answer is 5.672.", g('8.050 − 2.378 = 5.672')),
      L.turn("Your turn! Number three. A ribbon is 6 metres long. A piece 1.275 metres long is cut off. How much is left? Pause and try it.", E('6.000 − 1.275'), "Write 6 as 6.000 and exchange along. The answer is 4.725.", g('6 − 1.275 = 4.725')),
      L.rec(T, "Line up the decimal points. Fill empty places with zeros. Then add or subtract just as you do with whole numbers, carrying and exchanging as you need. The point drops straight down into the answer. Check with an estimate.", ['Line up the points', 'Fill gaps with zeros', 'Carry and exchange as normal', 'Point drops straight down', 'Estimate to check'])
    ]);
  })();

  /* ---- Common multiples ---- */
  (function () {
    var T = 'What are common multiples?';
    L.full(T, [
      SC('Multiples', 'Start with the times tables', [
        S("Let's start with something you know well: the times tables. Count in sixes. 6, 12, 18, 24, 30. Those numbers are called the multiples of 6.", E('6, 12, 18, 24, 30, 36 …', 'b')),
        S("A multiple of a number is what you get when you multiply it by 1, 2, 3, 4 and so on. Every multiple of 6 can be divided by 6 exactly, with nothing left over.", V.rule('Multiples of a number are in its times table.')),
        S("Multiples go on forever. There is no biggest 1. We can always keep counting.", E('Multiples of 4: 4, 8, 12, 16, 20, 24, 28 …'))
      ]),
      SC('Common multiples', 'Example 1: 4 and 6', [
        S("Now a new idea. Some numbers are in 2 times tables at once. Let's write out the multiples of 4 and the multiples of 6, and see which numbers appear in both.", E('4: 4, 8, 12, 16, 20, 24, 28, 32, 36') + E('6: 6, 12, 18, 24, 30, 36')),
        S("Look carefully. 12 is in both lists. 24 is in both lists. 36 is in both lists too. Numbers that are in both lists are called common multiples.", E('Common multiples: 12, 24, 36 …', 'g')),
        S("The smallest 1 is 12. We call it the lowest common multiple, or LCM for short. The LCM of 4 and 6 is 12.", g('LCM(4, 6) = 12'))
      ]),
      SC('Common multiples', 'Example 2: 8 and 12', [
        S("Let's try 8 and 12. We will list the multiples of the bigger number, 12, and check each one to see if 8 goes into it. This is a quicker way.", E('12, 24, 36 …')),
        S("12: does 8 divide into 12 exactly? No, 8 times 1 is 8, and 8 times 2 is 16. 24: 8 times 3 is 24. Yes! So the LCM of 8 and 12 is 24.", E('12 ÷ 8 ✗') + E('24 ÷ 8 = 3 ✓', 'g') + g('LCM(8, 12) = 24'))
      ]),
      SC('Common multiples', 'Example 3: 6 and 15', [
        S("One more. The numbers are 6 and 15. List the multiples of 15: 15, 30, 45.", E('15, 30, 45 …')),
        S("15 is not in the 6 times table. 30 is. 6 times 5 is 30. So the lowest common multiple of 6 and 15 is 30.", g('LCM(6, 15) = 30'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: mixing up multiples and factors. Multiples are big, they are in the times table, and they get bigger and bigger. Factors are small numbers that divide into a number. The LCM is never smaller than the numbers themselves.", V.cols([E('Multiples: 6, 12, 18 …'), E('Factors of 12: 1, 2, 3, 4, 6, 12')])),
        S("Mistake two: multiplying the 2 numbers and stopping. 4 times 6 is 24. 24 is a common multiple, but it is not the lowest. The lowest is 12.", r('LCM(4, 6) = 24  ✗') + g('LCM(4, 6) = 12  ✓')),
        S("Mistake three: stopping the list too early, and missing a common multiple. Keep writing multiples until you find a number in both lists.", V.rule('Keep listing until the lists meet.'))
      ]),
      SC('In real life', 'Lights and buses', [
        S("A lighthouse light flashes every 6 seconds. A second light flashes every 10 seconds. They both flash together now. When will they next flash together?", E('6, 12, 18, 24, 30') + E('10, 20, 30')),
        S("We want the lowest common multiple of 6 and 10. It is 30. So the lights flash together again after 30 seconds.", g('LCM(6, 10) = 30 seconds')),
        S("Here is another. 1 bus leaves a stop every 12 minutes. Another leaves every 18 minutes. They leave together at 9 o'clock. The LCM of 12 and 18 is 36. So they next leave together 36 minutes later.", g('LCM(12, 18) = 36 minutes'))
      ]),
      L.turn("Your turn! Number one. What is the lowest common multiple of 9 and 15? Pause and try it.", E('LCM(9, 15)'), "List the multiples of 15: 15, 30, 45. 9 goes into 40-5 5 times. So the answer is 45.", g('LCM(9, 15) = 45')),
      L.turn("Your turn! Number two. What is the lowest common multiple of 10 and 25? Pause and try it.", E('LCM(10, 25)'), "Multiples of 25: 25, 50. 10 goes into 55 times. So the answer is 50.", g('LCM(10, 25) = 50')),
      L.turn("Your turn! Number three. 1 train leaves every 8 minutes. Another leaves every 20 minutes. They leave together now. After how many minutes will they next leave together? Pause and try it.", E('LCM(8, 20)'), "Multiples of 20: 20, 40. 8 goes into 45 times. So they leave together again after 40 minutes.", g('LCM(8, 20) = 40 minutes')),
      L.rec(T, "A multiple is in a times table. A common multiple is in both lists. The lowest common multiple is the smallest of them. List the multiples of the bigger number and test each one. Use it when 2 things repeat and you want to know when they meet again.", ['Multiples: times-table answers', 'Common: in both lists', 'LCM: the smallest common 1', 'List the bigger number first', 'Use it for repeating events'])
    ]);
  })();

  /* ---- Common factors ---- */
  (function () {
    var T = 'What are common factors?';
    L.full(T, [
      SC('Factors', 'Numbers that divide exactly', [
        S("Last time we looked at multiples, which are big numbers in the times tables. Today we look at factors, which are the small numbers that fit into a number exactly.", V.rule('A factor divides into a number with nothing left over.')),
        S("Take 12. Can you share 12 sweets equally between 2 people? Yes. Between 3? Yes. 4? Yes. 5? No, there would be some left over. So 2, 3 and 4 are factors of 12, and 5 is not.", E('12 ÷ 2 = 6   12 ÷ 3 = 4   12 ÷ 4 = 3')),
        S("Factors come in pairs. Think of the ways to make 12 by multiplying. 1 times 12. 2 times 6. 3 times 4. So the factors of 12 are 1, 2, 3, 4, 6 and 12.", E('1 × 12,  2 × 6,  3 × 4') + g('Factors of 12: 1, 2, 3, 4, 6, 12'))
      ]),
      SC('Common factors', 'Example 1: 18 and 24', [
        S("Let's find the factors of 18 first. 1 times 18. 2 times 9. 3 times 6. So the factors of 18 are 1, 2, 3, 6, 9 and 18.", E('18: 1, 2, 3, 6, 9, 18')),
        S("Now 24. 1 times 24. 2 times 12. 3 times 8. 4 times 6. So the factors of 24 are 1, 2, 3, 4, 6, 8, 12 and 24.", E('24: 1, 2, 3, 4, 6, 8, 12, 24')),
        S("Which numbers are in both lists? 1, 2, 3 and 6. These are the common factors of 18 and 24.", E('Common factors: 1, 2, 3, 6', 'g')),
        S("The biggest of them is 6. We call it the highest common factor, or HCF for short. The HCF of 18 and 24 is 6.", g('HCF(18, 24) = 6'))
      ]),
      SC('Common factors', 'Example 2: 30 and 45', [
        S("Now 30 and 45. Factors of 30: 1, 2, 3, 5, 6, 10, 15, 30. Factors of 45: 1, 3, 5, 9, 15, 45.", E('30: 1, 2, 3, 5, 6, 10, 15, 30') + E('45: 1, 3, 5, 9, 15, 45')),
        S("The common factors are 1, 3, 5 and 15. The highest is 15. So the HCF of 30 and 45 is 15.", g('HCF(30, 45) = 15'))
      ]),
      SC('When there is only one', 'Example 3: 7 and 12', [
        S("Sometimes the only common factor is 1. 7 has the factors 1 and 7. 12 has the factors 1, 2, 3, 4, 6 and 12. Only one is in both lists.", E('7: 1, 7') + E('12: 1, 2, 3, 4, 6, 12')),
        S("So the highest common factor of 7 and 12 is 1. Numbers like these are called coprime.", g('HCF(7, 12) = 1'))
      ]),
      SC('Using the HCF', 'Simplifying fractions', [
        S("Here is why the HCF is useful. It lets us simplify a fraction in 1 step. Take 18 twenty-fourths. We found that the HCF of 18 and 24 is 6.", E('18/24')),
        S("Divide the top and the bottom by 6. 18 divided by 6 is 3. 24 divided by 6 is 4. So 18 twenty-fourths is the same as 3/4. It cannot be simplified any more.", g('18/24 = 3/4'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: missing factors because you forgot the pairs. Always work through in order. 1 times, 2 times, 3 times, and stop when the pairs meet.", V.rule('Find them in pairs: 1 × 24, 2 × 12, 3 × 8, 4 × 6.')),
        S("Mistake two: mixing up factors and multiples. Factors are smaller than or equal to the number. Multiples are bigger than or equal to the number. The HCF is never bigger than the smaller number.", V.cols([E('Factors of 12: 1, 2, 3, 4, 6, 12'), E('Multiples of 12: 12, 24, 36 …')])),
        S("Mistake three: giving a common factor instead of the highest 1. 3 is a common factor of 18 and 24. But the highest is 6.", r('HCF(18, 24) = 3  ✗') + g('HCF(18, 24) = 6  ✓'))
      ]),
      SC('In real life', 'Packing', [
        S("A teacher has 30 pencils and 45 rubbers. She wants to make identical packs. Every pack must have the same number of pencils and the same number of rubbers, with nothing left over. What is the most packs she can make?", E('30 pencils, 45 rubbers')),
        S("We need the highest common factor of 30 and 45. It is 15. So she can make 15 packs. Each pack has 2 pencils and 3 rubbers.", g('HCF(30, 45) = 15 packs') + E('30 ÷ 15 = 2    45 ÷ 15 = 3'))
      ]),
      L.turn("Your turn! Number one. What is the highest common factor of 20 and 32? Pause and try it.", E('HCF(20, 32)'), "Factors of 20: 1, 2, 4, 5, 10, 20. Which of these divide 32? 1, 2 and 4. The highest is 4.", g('HCF(20, 32) = 4')),
      L.turn("Your turn! Number two. What is the highest common factor of 36 and 54? Pause and try it.", E('HCF(36, 54)'), "Factors of 36 include 18. 18 divides 54 exactly, 3 times. Nothing bigger than 18 divides both. So the answer is 18.", g('HCF(36, 54) = 18')),
      L.turn("Your turn! Number three. Simplify 28 forty-seconds. Pause and try it.", E('28/42'), "The HCF of 28 and 42 is 14. Divide top and bottom by 14. We get 2/3.", g('28/42 = 2/3')),
      L.rec(T, "A factor divides in exactly, and factors come in pairs. Common factors are in both lists. The highest common factor is the biggest 1. Use the HCF to simplify fractions and to share things into equal groups.", ['Factors come in pairs', 'Common: in both lists', 'HCF: the biggest', 'HCF is never above the smaller number', 'Use it to simplify fractions'])
    ]);
  })();
  /* ---- Fractions ---- */
  (function () {
    var T = 'What are fractions?';
    L.full(T, [
      SC('A fraction', 'Start with the basics', [
        S("Imagine a chocolate bar made of 8 equal squares. You eat 3 of them. We can say you ate 3/8 of the bar. That is a fraction.", LK.fbar(3, 8, 300, 280)),
        S("A fraction has 2 numbers. The bottom number is called the denominator. It tells us how many equal parts the whole is split into. The top number is called the numerator. It tells us how many of those parts we are talking about.", E('3/8', 'g') + V.cols([V.card('Denominator: parts in the whole', 'b', true), V.card('Numerator: parts we have', 'g', true)], 2)),
        S("The word equal is very important. A fraction only works when all the parts are the same size. If the pieces are different sizes, we cannot call them eighths.", V.rule('Every part must be the same size.'))
      ]),
      SC('Fractions of shapes', 'Example 1: 2 fifths', [
        S("Here is a circle cut into 5 equal slices. 2 of the slices are shaded. So the fraction shaded is 2/5.", LK.pie(2, 5, { r: 50 }) + E('2/5', 'g')),
        S("How many slices are not shaded? 3. So 3/5 of the circle is not shaded. The 2 fractions together make 5/5, which is the whole circle.", E('2/5 + 3/5 = 5/5 = 1', 'g'))
      ]),
      SC('A fraction of an amount', 'Example 2: 3/8 of 64', [
        S("Now we find a fraction of a number. What is 3/8 of 64? Think of 64 split into 8 equal groups.", E('3/8 of 64')),
        S("Step one. The denominator is 8, so divide by 8 to find 1/8. 64 divided by 8 is 8. 1/8 of 64 is 8.", E('64 ÷ 8 = 8', 'b') + V.rule('Divide by the bottom number.')),
        S("Step two. The numerator is 3, so we want 3 of those groups. Multiply by 3. 8 times 3 is 24.", E('8 × 3 = 24', 'b') + V.rule('Multiply by the top number.')),
        S("So 3/8 of 64 is 24.", g('3/8 of 64 = 24'))
      ]),
      SC('A fraction of an amount', 'Example 3: 5/8 of 72', [
        S("Let's do it again with 5/8 of 72. First divide by the denominator. 72 divided by 8 is 9. Then multiply by the numerator. 9 times 5 is 45.", E('72 ÷ 8 = 9') + E('9 × 5 = 45') + g('5/8 of 72 = 45'))
      ]),
      SC('Fractions are divisions', 'Example 4: 3 ÷ 4', [
        S("Here is a surprising fact. A fraction is also a division. 3/4 means 3 divided by 4. Share 3 pizzas between 4 people. Each person gets 3/4 of a pizza.", E('3/4 = 3 ÷ 4')),
        S("On a calculator, 3 divided by 4 is 0.75. So 3/4 is the same as 0.75. This is how fractions and decimals are connected.", g('3/4 = 0.75')),
        S("1/8 is 1 divided by 8, which is 0.125.", g('1/8 = 0.125'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: parts that are not equal. A rectangle cut into 1 big piece and 2 small pieces is not cut into thirds.", V.rule('Equal parts only.')),
        S("Mistake two: mixing up the numerator and the denominator. The denominator is the down number, and it is the total number of parts. 3/8 is not 8/3.", r('8/3 for 3/8  ✗') + g('3/8  ✓')),
        S("Mistake three: forgetting to multiply by the numerator. To find 3/8 of 64, dividing by 8 only gives 1/8. You still need to multiply by 3.", r('3/8 of 64 = 8  ✗') + g('3/8 of 64 = 24  ✓'))
      ]),
      SC('In real life', 'Recipes and classes', [
        S("A recipe uses 2/3 of a 300 gram bag of oats. 1/3 of 300 is 100. So 2/3 is 200 grams.", E('300 ÷ 3 = 100,  100 × 2 = 200') + g('2/3 of 300 g = 200 g')),
        S("In a class of 28 pupils, 3/4 walk to school. 1/4 of 28 is 7. So 3/4 is 21 pupils.", E('28 ÷ 4 = 7,  7 × 3 = 21') + g('21 pupils walk'))
      ]),
      L.turn("Your turn! Number one. What is 5/6 of 48? Pause and try it.", E('5/6 of 48'), "48 divided by 6 is 8. 8 times 5 is 40.", g('5/6 of 48 = 40')),
      L.turn("Your turn! Number two. What is 3/5 of 35? Pause and try it.", E('3/5 of 35'), "35 divided by 5 is 7. 7 times 3 is 21.", g('3/5 of 35 = 21')),
      L.turn("Your turn! Number three. Write 1/5 as a decimal. Pause and try it.", E('1/5 = 1 ÷ 5'), "1 divided by 5 is 0.2.", g('1/5 = 0.2')),
      L.rec(T, "A fraction is equal parts of a whole. The denominator says how many parts. The numerator says how many we have. To find a fraction of an amount, divide by the denominator, then multiply by the numerator. A fraction is also a division.", ['Equal parts', 'Denominator: how many parts', 'Numerator: how many we have', '÷ bottom, then × top', 'A fraction is a division'])
    ]);
  })();

  /* ---- Equivalent fractions ---- */
  (function () {
    var T = 'What are equivalent fractions?';
    L.full(T, [
      SC('Same amount, different numbers', 'Start with a picture', [
        S("Look at these 3 bars. The first bar is split into 2 parts, and 1 part is shaded. That is 1/2. The second bar is split into 4 parts, and 2 are shaded. The third is split into 8 parts, and 4 are shaded.", LK.fbar(1, 2, 280, 280) + LK.fbar(2, 4, 280, 280) + LK.fbar(4, 8, 280, 280)),
        S("Look closely. The shaded part is exactly the same size in all 3 bars. So 1/2, 2/4 and 4/8 are equal. We call them equivalent fractions. Equivalent means has the same value.", E('1/2 = 2/4 = 4/8', 'g'))
      ]),
      SC('Making equivalent fractions', 'Example 1: multiply top and bottom', [
        S("How can we make equivalent fractions without a picture? Multiply the numerator and the denominator by the same number. Let's start with 3/5 and multiply by 2.", E('3/5')),
        S("3 times 2 is 6. 5 times 2 is 10. So 3/5 is equal to 6/10.", E('3/5 = 6/10', 'g') + V.rule('Do the same to the top and the bottom.')),
        S("We can do it again, multiplying by 3. 3 times 3 is 9. 5 times 3 is 15. So 3/5 is also 9 fifteenths.", E('3/5 = 9/15', 'g')),
        S("Why does this work? Multiplying the top and bottom by the same number is the same as multiplying the fraction by 1, and that never changes its value.", V.rule('× 2 over 2 is × 1, so the value stays the same.'))
      ]),
      SC('Simplifying', 'Example 2: divide top and bottom', [
        S("We can go the other way. We divide the top and the bottom by the same number. This is called simplifying. Take 12 sixteenths.", E('12/16')),
        S("12 and 16 can both be divided by 4. 12 divided by 4 is 3. 16 divided by 4 is 4. So 12 sixteenths is 3/4.", g('12/16 = 3/4')),
        S("Is 3/4 as simple as it can get? 3 and 4 have no common factor, apart from 1. So yes. It is in its simplest form.", V.rule('Simplest form: no more common factors.'))
      ]),
      SC('Simplifying', 'Example 3: 30 forty-fifths', [
        S("Here is a bigger 1. 30 forty-fifths. What is the biggest number that goes into both 30 and 45? It is 15. We divide the top and bottom by 15. 30 divided by 15 is 2. 45 divided by 15 is 3. The answer is 2/3.", E('30/45') + g('30/45 = 2/3'))
      ]),
      SC('Missing numbers', 'Example 4: 2/3 = ?/12', [
        S("Now a missing number. 2/3 equals what over 12? Look at the bottoms first. 3 has become 12. What did we multiply by? 4.", E('2/3 = ?/12')),
        S("We must do the same to the top. 2 times 4 is 8. So 2/3 is equal to 8/12.", g('2/3 = 8/12'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: adding the same number to the top and bottom. 1/2 plus 1 on top and bottom gives 2/3, but 2/3 is not equal to 1/2. We must multiply or divide, never add.", r('1/2 = 2/3  ✗') + g('1/2 = 2/4  ✓')),
        S("Mistake two: doing something to the top but not the bottom. If you multiply the top by 4, you must multiply the bottom by 4 as well.", V.rule('Same number, top and bottom.')),
        S("Mistake three: stopping too soon when simplifying. 8/12 can be divided by 2 to give 4/6. But that is not finished. Divide by 2 again to get 2/3.", r('8/12 = 4/6  (not finished)  ✗') + g('8/12 = 2/3  ✓'))
      ]),
      SC('In real life', 'Pizza', [
        S("A pizza has 8 slices. You eat 4 slices. You have eaten 4/8. But your friend ate half of another pizza. Who ate more? 4/8 is equal to 1/2, so you both ate the same amount.", g('4/8 = 1/2'))
      ]),
      L.turn("Your turn! Number one. Find the missing number. 3/4 equals how many twentieths? Pause and try it.", E('3/4 = ?/20'), "4 times 5 is 20. So 3 times 5 is 15. 3/4 equals 15 twentieths.", g('3/4 = 15/20')),
      L.turn("Your turn! Number two. Simplify 40 sixtieths fully. Pause and try it.", E('40/60'), "Divide top and bottom by 20. 40 divided by 20 is 2. 60 divided by 20 is 3. The answer is 2/3.", g('40/60 = 2/3')),
      L.turn("Your turn! Number three. Fill in the missing number. 4/10 equals what over 5? Pause and try it.", E('4/10 = ?/5'), "10 divided by 2 is 5. So divide the top by 2 as well. 4 divided by 2 is 2. The answer is 2/5.", g('4/10 = 2/5')),
      L.rec(T, "Equivalent fractions show the same amount. Multiply the top and the bottom by the same number to make 1. Divide the top and the bottom by the same number to simplify. Never add or subtract the same number.", ['Same amount, different numbers', '× top and bottom by the same', '÷ to simplify', 'Never add to top and bottom', 'Scale to find missing numbers'])
    ]);
  })();

  /* ---- Mixed numbers and improper fractions ---- */
  (function () {
    var T = 'What are mixed numbers and improper fractions?';
    L.full(T, [
      SC('More than one whole', 'Two ways to write it', [
        S("So far our fractions have been smaller than 1 whole. But what if you have more than 1? Imagine you eat 2 whole pizzas and 3/4 of 1/3 pizza.", E('2 3/4')),
        S("We can write that as a mixed number: 2 and 3/4. It has a whole number part and a fraction part.", E('2 3/4', 'g') + V.rule('Mixed number: wholes and a fraction.')),
        S("We can also count in quarters only. Each pizza has 4/4. 2 pizzas make 8/4. Add 3 more quarters. That makes 11/4.", E('11/4', 'g')),
        S("11/4 is called an improper fraction, because the top is bigger than the bottom. 2 and 3/4, and 11/4, are 2 ways of writing the same amount.", E('2 3/4 = 11/4', 'g'))
      ]),
      SC('Improper to mixed', 'Example 1: 17/5', [
        S("How do we change 17/5 to a mixed number? We ask: how many whole ones are inside? Divide the top by the bottom. 17 divided by 5 is 3, with 2 left over.", E('17 ÷ 5 = 3 remainder 2', 'b')),
        S("The 3 is the number of wholes. The remainder of 2 goes over the same denominator, 5. So 17/5 is 3 and 2/5.", g('17/5 = 3 2/5'))
      ]),
      SC('Mixed to improper', 'Example 2: 4 2/3', [
        S("Now the other way. How do we change 4 and 2/3 into an improper fraction? Each whole has 3/3. So 4 wholes make 4 times 3, which is 12/3.", E('4 × 3 = 12/3', 'b')),
        S("Now add the 2/3 we already had. 12 plus 2 is 14. So 4 and 2/3 is 14/3.", g('4 2/3 = 14/3') + V.rule('Whole × denominator, then add the numerator.'))
      ]),
      SC('Mixed to improper', 'Example 3: 7 1/4', [
        S("One more. 7 and 1/4. 7 times 4 is 28. Add the one. We get 29/4.", E('7 × 4 + 1 = 29') + g('7 1/4 = 29/4'))
      ]),
      SC('On a number line', 'Where does it sit?', [
        S("A number line helps us see mixed numbers. 2 and 3/4 sits between 2 and 3. It is 3/4 of the way along from 2.", V.nl(0, 4, { tick: 0.25, marks: [[2.75, 22]] })),
        S("That is the same place as 11/4. You can count along in quarters, 1, 2, 3, up to 11, and arrive at the same spot.", E('11/4 = 2 3/4', 'g'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: forgetting the remainder. 17 divided by 5 is 3 with 2 left over. The 2 matters. The answer is 3 and 2/5, not just 3.", r('17/5 = 3  ✗') + g('17/5 = 3 2/5  ✓')),
        S("Mistake two: changing the denominator. When we change form, the denominator stays the same. 3 and 2/5 has fifths in it, so the improper fraction must have fifths too.", V.rule('Same denominator. Only the numerator changes.')),
        S("Mistake three: forgetting to add the numerator. For 4 and 2/3, 4 times 3 is 12. We must add the 2, to get 14.", r('4 2/3 = 12/3  ✗') + g('4 2/3 = 14/3  ✓'))
      ]),
      SC('In real life', 'Measuring', [
        S("A carpenter needs 9/2 of a metre of wood. 2/2 make 1 metre, so 9/2 is 4 whole metres and 1/2 left over. That is 4 and 1/2 metres.", g('9/2 = 4 1/2 m'))
      ]),
      L.turn("Your turn! Number one. Write 23/6 as a mixed number. Pause and try it.", E('23/6'), "23 divided by 6 is 3, with 5 left over. The answer is 3 and 5/6.", g('23/6 = 3 5/6')),
      L.turn("Your turn! Number two. Write 5 and 3/8 as an improper fraction. Pause and try it.", E('5 3/8'), "5 times 8 is 40. Add 3 to make 43. The answer is 43/8.", g('5 3/8 = 43/8')),
      L.turn("Your turn! Number three. Write 31/5 as a mixed number. Pause and try it.", E('31/5'), "31 divided by 5 is 6, with 1 left over. The answer is 6 and 1/5.", g('31/5 = 6 1/5')),
      L.rec(T, "An improper fraction has a numerator bigger than its denominator. A mixed number has wholes and a fraction. To change improper to mixed, divide, and put the remainder over the same denominator. To change mixed to improper, multiply the whole by the denominator and add the numerator.", ['Improper → mixed: divide', 'Remainder over the same bottom', 'Mixed → improper: × then +', 'Same amount, 2 ways'])
    ]);
  })();

  /* ---- Percentages ---- */
  (function () {
    var T = 'What are percentages?';
    L.full(T, [
      SC('Per cent', 'Out of one hundred', [
        S("The word per cent means out of 100. A percent sign looks like this. Percent comes from Latin, and it means for every hundred.", E('%', 'b')),
        S("Imagine a square split into 100 small squares. If 45 of them are shaded, then 45% of the square is shaded.", LK.hsq(45)),
        S("So 45% is the same as 45/100. As a fraction, that is 45 over 100. As a decimal, it is 0.45.", E('45% = 45/100 = 0.45', 'g'))
      ]),
      SC('Key percentages', 'Learn these', [
        S("There are a few percentages worth knowing by heart. 50% is 1/2. 25% is 1/4. 75% is 3/4. 10% is 1/10. And 1% is 1/100.", V.tbl([['50%', '½'], ['25%', '¼'], ['75%', '¾'], ['10%', '1/10'], ['1%', '1/100']], ['Percentage', 'Fraction'])),
        S("They are useful because we can find them quickly. To find 50% of a number, halve it. To find 10%, divide by 10. To find 1%, divide by 100.", V.rule('50% ÷ 2.   10% ÷ 10.   1% ÷ 100.'))
      ]),
      SC('Building percentages', 'Example 1: 35% of £60', [
        S("How do we find 35% of £60? We can build it from 10% and 5%.", E('35% of £60')),
        S("10% of 60 is £6. So 30% is 3 lots of 6, which is £18.", E('10% = £6') + E('30% = £18')),
        S("5% is half of 10%, so that is £3. Add it on. 18 plus 3 is £21.", E('5% = £3') + g('35% = £18 + £3 = £21'))
      ]),
      SC('Building percentages', 'Example 2: 15% of 80', [
        S("15% of 80. 10% of 80 is 8. 5% is half of that, 4. 8 plus 4 is 12.", E('10% = 8,  5% = 4') + g('15% of 80 = 12'))
      ]),
      SC('One amount as a percentage', 'Example 3: 18 out of 40', [
        S("Now the other way round. A pupil scores 18 out of 40. What is that as a percentage? Write it as a fraction first: 18 over 40.", E('18/40')),
        S("Divide the top by the bottom. 18 divided by 40 is 0.45. Then multiply by 100 to turn it into a percentage. That gives 45%.", E('18 ÷ 40 = 0.45') + g('0.45 × 100 = 45%')),
        S("Another way. 12 out of 25. Multiply the bottom by 4 to get 100, and the top by 4 as well. 12 times 4 is 48. So 48%.", g('12/25 = 48/100 = 48%'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: thinking 10% means dividing by 100. 10% means dividing by 10. 1% is the one you divide by 100.", r('10% of 50 = 0.5  ✗') + g('10% of 50 = 5  ✓')),
        S("Mistake two: forgetting what the percentage is of. 20% of £45 is £9, but 20% of £90 is £18. A percentage always needs a whole.", V.rule('Always ask: per cent of what?')),
        S("Mistake three: forgetting to multiply by 100 at the end. 18 divided by 40 is 0.45. That is a decimal. To make it a percentage, multiply by 100.", r('18 out of 40 = 0.45%  ✗') + g('18 out of 40 = 45%  ✓'))
      ]),
      SC('In real life', 'A discount', [
        S("A coat costs £45. In the sale it has 20% off. 10% of 45 is £4.50. So 20% is £9.", E('10% = £4.50') + E('20% = £9')),
        S("The saving is £9. So the new price is 45 minus 9, which is £36.", g('£45 − £9 = £36'))
      ]),
      L.turn("Your turn! Number one. What is 5% of 60? Pause and try it.", E('5% of 60'), "10% of 60 is 6. 5% is half of that. The answer is 3.", g('5% of 60 = 3')),
      L.turn("Your turn! Number two. What is 25% of 96? Pause and try it.", E('25% of 96'), "25% is 1/4. 96 divided by 4 is 24.", g('25% of 96 = 24')),
      L.turn("Your turn! Number three. A girl scores 24 out of 30. What percentage is that? Pause and try it.", E('24/30'), "24 divided by 30 is 0.8. Multiply by 100. The answer is 80%.", g('24/30 = 80%')),
      L.rec(T, "Per cent means out of 100. Learn the key percentages. Build other percentages from 10%, 5% and 1%. To write 1 amount as a percentage, divide the part by the whole and multiply by 100.", ['Per cent = out of 100', 'Key: 50%, 25%, 10%, 1%', 'Build from 10% and 1%', 'Part ÷ whole × 100'])
    ]);
  })();
  /* ---- Financial maths ---- */
  (function () {
    var T = 'What is financial maths?';
    L.full(T, [
      SC('Maths with money', 'What is financial maths?', [
        S("Money is all around us. We earn it, spend it, save it and share it. Financial maths is simply the maths we use to look after money sensibly.", V.list(['Earning', 'Spending', 'Saving', 'Comparing prices'])),
        S("The good news is that you do not need new tricks. Most money problems use things you already know: multiplying, dividing, adding, subtracting and percentages. We just use them in real situations.", V.rule('Money problems use the maths you already know.')),
        S("In this lesson we will look at 4 ideas. Earning, saving with interest, finding the best value, and profit and loss.", V.cards(['Earn', 'Save', 'Value', 'Profit'], ['b', 'g', 'b', 'g'], true))
      ]),
      SC('Earning', 'Example 1: hourly pay', [
        S("Ali has a part-time job. He earns £9.50 for every hour he works. Last week he worked 16 hours. How much did he earn?", E('£9.50 per hour, 16 hours')),
        S("Pay is the pay for 1 hour, multiplied by the number of hours. So we work out 16 times £9.50. 10 times £9.50 is £95. 6 times £9.50 is £57. Add them together.", E('10 × £9.50 = £95') + E('6 × £9.50 = £57')),
        S("95 plus 57 is £152. Ali earned £152.", g('16 × £9.50 = £152') + V.rule('Pay = rate per hour × hours.'))
      ]),
      SC('Saving and interest', 'Example 2: money that grows', [
        S("When you put money in a bank, the bank pays you a little extra for keeping it there. This extra is called interest. It is a percentage of the money you saved.", V.rule('Interest = a percentage of your savings.')),
        S("Suppose you save £200. The bank pays 2% interest for a year. What is 2% of 200? 1% is £2. So 2% is £4.", E('1% of £200 = £2') + E('2% of £200 = £4')),
        S("After a year, you have your £200, plus £4 of interest. That makes £204.", g('£200 + £4 = £204'))
      ]),
      SC('Best value', 'Example 3: price for 1', [
        S("Which is the better buy? A 6-pack of juice cartons costs £3.60. A 4-pack costs £2.56. The bigger pack costs more, but it also has more cartons. How do we compare?", E('6 for £3.60   or   4 for £2.56')),
        S("We find the price for 1 carton in each pack. £3.60 divided by 6 is 60p. £2.56 divided by 4 is 64p.", E('£3.60 ÷ 6 = 60p') + E('£2.56 ÷ 4 = 64p')),
        S("60p is less than 64p. So the 6-pack is the better value, because each carton costs less.", g('Best value: the six-pack') + V.rule('Compare the price for 1.'))
      ]),
      SC('Profit and loss', 'Example 4: buying and selling', [
        S("A trader buys a bike for £80 and sells it for £100. He sold it for more than he paid, so he made a profit.", E('Buy £80,  sell £100')),
        S("Profit is the selling price take away the buying price. 100 minus 80 is £20 profit.", g('£100 − £80 = £20 profit')),
        S("If he had sold the bike for £60 instead, he would have sold it for less than he paid. That is called a loss. 80 minus 60 is a loss of £20.", E('£80 − £60 = £20 loss', 'b'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: mixing pounds and pence in the same sum. £3.60 and 60p cannot be added just by writing 3, 60 and 60. Change them all to pounds, or all to pence first.", r('£3.60 + 60  ✗') + g('£3.60 + £0.60 = £4.20  ✓')),
        S("Mistake two: comparing the total prices when the amounts are different. The bigger pack costs more, but that does not mean it is worse value. Always work out the price for 1.", V.rule('Different amounts? Compare the price for 1.')),
        S("Mistake three: mixing up profit and loss. If you sell for more than you paid, it is a profit. If you sell for less, it is a loss.", V.tbl([['Sell > buy', 'Profit'], ['Sell < buy', 'Loss']], ['', '']))
      ]),
      SC('In real life', 'Putting it together', [
        S("Maya earns £12 an hour. She works for 7 hours. That is 7 times 12, £84. She puts 10% into a savings account. 10% of £84 is £8.40.", E('7 × £12 = £84') + E('10% of £84 = £8.40', 'g'))
      ]),
      L.turn("Your turn! Number one. You earn £12 an hour for 7 hours. How much do you earn? Pause and try it.", E('7 × £12'), "7 times 12 is £84.", g('£84')),
      L.turn("Your turn! Number two. You save £300. The bank pays 4% interest for a year. How much interest is that? Pause and try it.", E('4% of £300'), "1% of 300 is £3. 4% is £12.", g('4% of £300 = £12')),
      L.turn("Your turn! Number three. A pack of 5 pens costs £2.50. A pack of 8 pens costs £3.60. Which is better value? Pause and try it.", E('£2.50 ÷ 5   and   £3.60 ÷ 8'), "£2.50 divided by 5 is 50p. £3.60 divided by 8 is 45p. The pack of 8 is better value.", g('45p < 50p: pack of 8')),
      L.rec(T, "Financial maths uses multiplication, division and percentages. Pay is the rate multiplied by the hours. Interest is a percentage of what you save. For best value, work out the price for 1. Profit is the selling price take away the buying price.", ['Pay = rate × hours', 'Interest: a percentage', 'Best value: price for 1', 'Profit = selling − buying'])
    ]);
  })();

  /* ---- Budgeting ---- */
  (function () {
    var T = 'What is budgeting?';
    L.full(T, [
      SC('A budget', 'A plan for money', [
        S("Have you ever spent all your pocket money in 1 go, and then had nothing left? A budget helps you stop that from happening. A budget is a plan for your money.", E('A budget is a plan.', 'b')),
        S("There are 2 things in every budget. Income is the money coming in. Spending is the money going out. A budget compares the two.", V.cols([V.card('Income: money in', 'g', true), V.card('Spending: money out', 'b', true)], 2)),
        S("The important sum is income take away spending. What is left over can be saved. If the answer is below 0, you have spent more than you had.", E('Income − Spending = Left over', 'g'))
      ]),
      SC('A weekly budget', 'Example 1: pocket money', [
        S("Maya gets £15 a week. That is her income. She needs £6 for bus fares and £4 for snacks. Those are her spending.", V.tbl([['Income', '£15'], ['Bus', '−£6'], ['Snacks', '−£4']], ['', 'Amount'])),
        S("Add up the spending first. 6 plus 4 is £10. Then take that from the income. 15 take away 10 leaves £5.", E('£6 + £4 = £10') + E('£15 − £10 = £5', 'g')),
        S("Maya has £5 left over each week. She can save it.", V.tbl([['Income', '£15'], ['Bus', '−£6'], ['Snacks', '−£4'], ['Left', '£5']], ['', 'Amount']))
      ]),
      SC('Saving for something', 'Example 2: how many weeks?', [
        S("Maya wants a jacket. It costs £60. She saves £5 each week. How many weeks will it take? We need to see how many fives fit into 60. That is a division.", E('£60 ÷ £5')),
        S("60 divided by 5 is 12. So she needs 12 weeks.", g('£60 ÷ £5 = 12 weeks'))
      ]),
      SC('Over budget', 'Example 3: spending too much', [
        S("Sometimes spending is bigger than income. A family has an income of £200 for the week. They plan to spend £230.", E('Income £200,  spending £230')),
        S("200 take away 230 is minus £30. The negative number means they are £30 short. They need to spend less, or find more money.", E('£200 − £230 = −£30', 'b') + V.rule('Negative: you have overspent.'))
      ]),
      SC('Planning ahead', 'Example 4: a monthly budget', [
        S("A budget can be for a month too. Sam earns £400 a month from a paper round and a job. He spends £90 on his phone, 120 on food and fun, and 60 on travel.", V.tbl([['Income', '£400'], ['Phone', '−£90'], ['Food and fun', '−£120'], ['Travel', '−£60']], ['', 'Amount'])),
        S("The spending is 90 plus 120 plus 60. That is £270. Take that from 400, and Sam has £130 left to save.", E('£90 + £120 + £60 = £270') + g('£400 − £270 = £130'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: leaving out regular costs. People often remember big things but forget small regular ones, like bus fares or phone bills. They add up quickly.", V.rule('List every regular cost.')),
        S("Mistake two: taking spending away 1 at a time and losing track. It is safer to add up all the spending first, then take the total away once.", V.rule('Total the spending. Then subtract once.')),
        S("Mistake three: mixing weekly and monthly amounts. A bus fare of £6 a week is not £6 a month. Make sure everything is for the same length of time.", V.rule('Same period for every number.'))
      ]),
      SC('In real life', 'A class party', [
        S("A class has £120 to spend on a party. Food costs £75. Decorations cost £28. How much is left for prizes?", E('£120, food £75, decorations £28')),
        S("The spending is 75 plus 28. That is £103. 120 take away 103 leaves £17 for prizes.", E('£75 + £28 = £103') + g('£120 − £103 = £17'))
      ]),
      L.turn("Your turn! Number one. Income is £250. Spending is £185. How much is left? Pause and try it.", E('£250 − £185'), "250 take away 185 is £65.", g('£65')),
      L.turn("Your turn! Number two. You want to buy a game that costs £45. You save £9 a week. How many weeks? Pause and try it.", E('£45 ÷ £9'), "45 divided by 9 is 5 weeks.", g('5 weeks')),
      L.turn("Your turn! Number three. A family has an income of £300. They spend 160 on food, 90 on bills and 65 on travel. How much is left? Pause and try it.", E('£160 + £90 + £65'), "The spending totals £315. 300 take away 315 is minus £15. They are £15 over budget.", g('£300 − £315 = −£15')),
      L.rec(T, "A budget compares income with spending. Add up all the spending first, then take it from the income. Whatever is left can be saved. If the answer is negative, you have overspent and something must change.", ['Income − spending', 'Total the spending first', 'Save the difference', 'Negative means overspent'])
    ]);
  })();

  /* ---- Choosing units ---- */
  (function () {
    var T = 'How do you choose appropriate units of measurement?';
    L.full(T, [
      SC('The right unit', 'Why units matter', [
        S("Imagine telling a friend that your pencil is 0.00015 kilometres long. It is true, but it is a very silly way to say it. A better way is 15 centimetres.", E('15 cm', 'g')),
        S("We choose a unit that suits the size of the thing we are measuring. That way the number is easy to say, easy to picture and easy to use.", V.rule('Choose a unit that fits the size.')),
        S("There are 4 main kinds of measurement in this lesson. Length, mass, capacity and time. Each has small, medium and large units.", V.tbl([['Length', 'mm, cm, m, km'], ['Mass', 'g, kg, tonnes'], ['Capacity', 'ml, l'], ['Time', 's, min, h, days']], ['Measure', 'Units']))
      ]),
      SC('Length', 'Example 1: how long?', [
        S("A grain of rice is only a few millimetres long. A pencil is about 15 centimetres. A door is about 2 metres high. A football pitch is about 100 metres long. And Glasgow to Edinburgh is about 75 kilometres.", E('mm · cm · m · km', 'g')),
        S("A useful trick is to remember one thing for each unit. A fingernail is about a centimetre wide. A big step is about a metre. A kilometre takes about 10 minutes to walk.", V.tbl([['1 cm', 'fingernail'], ['1 m', 'big step'], ['1 km', '10 minute walk']], ['Unit', 'Think of']))
      ]),
      SC('Mass and capacity', 'Example 2: heavy and full', [
        S("Mass is how heavy something is. An apple has a mass of about 150 grams. A bag of sugar is 1 kilogram. A car is about 1 and 1/2 tonnes. A tonne is 1,000 kilograms.", E('g · kg · tonnes', 'g')),
        S("Capacity is how much a container holds. A teaspoon holds about 5 millilitres. A bottle of water holds about half a litre. A bath holds about 150 litres.", E('ml · l', 'g'))
      ]),
      SC('Time', 'Example 3: how long does it take?', [
        S("For time we use seconds, minutes, hours and days. Blinking takes a second. A school lesson lasts about an hour. A holiday might be a week. We choose the unit that gives an easy number.", E('s · min · h · days', 'g'))
      ]),
      SC('Is it sensible?', 'Example 4: spot the mistake', [
        S("Sometimes we are given a measurement and must decide whether it makes sense. A classroom door that is 2 kilometres tall? That cannot be right. It should be about 2 metres.", E('2 km  ✗', 'r') + g('2 m  ✓')),
        S("A mug that holds 3 litres? That is far too big. A mug holds about 300 millilitres.", E('3 l  ✗', 'r') + g('300 ml  ✓')),
        S("Notice that in both cases the number was sensible. It was the unit that was wrong. Always ask, does this unit match what I can picture?", V.rule('Check the unit as well as the number.'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: using a unit that is too big or too small. Weighing an apple in tonnes, or a lorry in grams, gives a number that is awkward to use.", V.rule('Aim for a number that is easy to picture.')),
        S("Mistake two: mixing units from different kinds. A length cannot be in kilograms, and a mass cannot be in litres. Check that the unit belongs to the right measure.", V.rule('Length, mass, capacity, time: match the kind.')),
        S("Mistake three: not checking if the answer is sensible. If you work out that a man's height is 180 metres, then something is wrong. It should be 180 centimetres.", r('180 m  ✗') + g('180 cm  ✓'))
      ]),
      SC('In real life', 'Cooking', [
        S("Recipes use grams for flour and millilitres for milk. If they used kilograms and litres, we would have tiny decimals like 0.25 kilograms. 250 grams is much easier.", E('250 g flour · 300 ml milk', 'g'))
      ]),
      L.turn("Your turn! Number one. What unit would you use to measure the mass of a lorry? Pause and think.", E('?'), "A lorry is very heavy, so we use tonnes.", g('tonnes')),
      L.turn("Your turn! Number two. What unit would you use to measure the width of a classroom? Pause and think.", E('?'), "A classroom is a few metres wide, so we use metres.", g('metres')),
      L.turn("Your turn! Number three. What unit would you use to measure how much medicine is in a spoon? Pause and think.", E('?'), "A spoon holds a very small amount, so we use millilitres.", g('millilitres')),
      L.rec(T, "Pick a unit that matches the size of what you measure. Compare with things you know, like a fingernail for a centimetre and a big step for a metre. Check that the answer is sensible, and that the unit is the right kind.", ['Small: mm, g, ml', 'Medium: cm, m, kg, l', 'Large: km, tonnes', 'Compare to check'])
    ]);
  })();

  /* ---- Converting units ---- */
  (function () {
    var T = 'How do you convert between standard units of measurement?';
    L.full(T, [
      SC('Metric units', 'Why conversion is easy', [
        S("Sometimes we need to change a measurement from 1 unit to another. This is called converting. The good news is that metric units are built on tens, hundreds and thousands, which makes converting easy.", E('Metric = powers of 10', 'b')),
        S("Here are the links to learn. 10 millimetres make 1 centimetre. 100 centimetres make 1 metre. 1,000 metres make 1 kilometre. 1,000 grams make 1 kilogram. And 1,000 millilitres make 1 litre.", V.tbl([['1 cm', '10 mm'], ['1 m', '100 cm'], ['1 km', '1,000 m'], ['1 kg', '1,000 g'], ['1 l', '1,000 ml']], ['Unit', 'Equals'])),
        S("The rule is simple. If you are changing to a smaller unit, you will have more of them, so multiply. If you are changing to a bigger unit, you will have fewer, so divide.", V.cols([V.card('Smaller unit → multiply', 'g', true), V.card('Bigger unit → divide', 'b', true)], 2))
      ]),
      SC('To a smaller unit', 'Example 1: km to m', [
        S("Let's change 3.75 kilometres to metres. A metre is smaller than a kilometre, so we multiply. There are 1,000 metres in a kilometre.", E('3.75 km → m')),
        S("Multiply by 1,000. That moves every digit 3 places to the left. 3.75 becomes 3,000, 750. So 3.75 kilometres is 3,000, 750 metres.", g('3.75 × 1,000 = 3,750 m'))
      ]),
      SC('To a bigger unit', 'Example 2: g to kg', [
        S("Now change 2,000, 400 grams to kilograms. A kilogram is bigger than a gram, so we divide. Divide by 1,000. That moves every digit 3 places to the right.", E('2,400 g → kg')),
        S("2,400 divided by 1,000 is 2.4. So 2,000, 400 grams is 2.4 kilograms.", g('2,400 ÷ 1,000 = 2.4 kg'))
      ]),
      SC('More examples', 'Example 3: centimetres, litres', [
        S("450 centimetres to metres. A metre is bigger, so divide by 100. The answer is 4.5 metres.", g('450 cm ÷ 100 = 4.5 m')),
        S("0.35 litres to millilitres. A millilitre is smaller, so multiply by 1,000. The answer is 350 millilitres.", g('0.35 l × 1,000 = 350 ml'))
      ]),
      SC('Time', 'Example 4: not powers of 10', [
        S("Time is different. It does not use tens. There are 60 seconds in a minute, 60 minutes in an hour and 24 hours in a day.", V.tbl([['1 min', '60 s'], ['1 h', '60 min'], ['1 day', '24 h']], ['Unit', 'Equals'])),
        S("Let's change 2.5 hours to hours and minutes. The point 5 is half an hour, which is 30 minutes. So 2.5 hours is 2 hours 30 minutes. In minutes, that is 150 minutes.", g('2.5 h = 2 h 30 min = 150 min')),
        S("Be careful here. 2.5 hours is not 2 hours and 50 minutes. The point 5 means half of 60, not 50.", r('2.5 h = 2 h 50 min  ✗'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: multiplying when you should divide. Ask yourself whether the answer should be a bigger number or a smaller number. More small units means a bigger number.", V.rule('More small units: a bigger number.')),
        S("Mistake two: using the wrong link. 1 metre is 100 centimetres, not 10. Learn the links well.", r('1 m = 10 cm  ✗') + g('1 m = 100 cm  ✓')),
        S("Mistake three: treating time like metric. Never use 10 or 100 for minutes. Use 60.", V.rule('1 hour = 60 minutes, not 100.'))
      ]),
      SC('In real life', 'A recipe', [
        S("A jug holds 1.2 litres. A glass holds 200 millilitres. How many glasses can the jug fill? First, change the jug to millilitres. 1.2 times 1,000 is 1,000, 200 millilitres.", E('1.2 l = 1,200 ml')),
        S("Now divide by the size of a glass. 1,000, 200 divided by 200 is 6. The jug fills 6 glasses.", g('1,200 ÷ 200 = 6'))
      ]),
      L.turn("Your turn! Number one. How many centimetres are in 4.06 metres? Pause and try it.", E('4.06 m = ? cm'), "Multiply by 100. The answer is 406 centimetres.", g('406 cm')),
      L.turn("Your turn! Number two. Change 3,000, 200 metres to kilometres. Pause and try it.", E('3,200 m = ? km'), "Divide by 1,000. The answer is 3.2 kilometres.", g('3.2 km')),
      L.turn("Your turn! Number three. How many minutes are in 1 and 3/4 hours? Pause and try it.", E('1 3/4 h'), "1 hour is 60 minutes. 3/4 of an hour is 45 minutes. Add them. The answer is 105 minutes.", g('105 minutes')),
      L.rec(T, "Learn the metric links. To change to a smaller unit, multiply. To change to a bigger unit, divide. Check that your answer makes sense. Time uses 60 and 24, not 10.", ['10 mm = 1 cm, 100 cm = 1 m', '1,000 for km, kg, l', 'Smaller unit: ×', 'Bigger unit: ÷', 'Time: 60 and 24'])
    ]);
  })();

  /* ---- Perimeter ---- */
  (function () {
    var T = 'How do you calculate perimeter?';
    L.full(T, [
      SC('Perimeter', 'The distance round the edge', [
        S("Imagine walking all the way around the edge of a football pitch. The distance you walk is called the perimeter. Perimeter is the total distance around the outside of a shape.", V.poly([[20, 20], [200, 20], [200, 110], [20, 110]], 'var(--surface-2)', 220, 130, 'A rectangle')),
        S("To find the perimeter, we add up the lengths of all of the sides. The answer is a length, so we use units like centimetres or metres.", V.rule('Perimeter: add all the sides.'))
      ]),
      SC('Rectangles', 'Example 1: 9 cm by 4 cm', [
        S("A rectangle is 9 centimetres long and 4 centimetres wide. A rectangle has 2 long sides and 2 short sides. The opposite sides are equal.", E('9, 4, 9, 4')),
        S("Add them all. 9 plus 4 plus 9 plus 4. That makes 26 centimetres.", g('9 + 4 + 9 + 4 = 26 cm')),
        S("There is a shortcut. Add the length and the width, then double it. 9 plus 4 is 13. Double 13 is 26.", g('2 × (9 + 4) = 26 cm'))
      ]),
      SC('Regular shapes', 'Example 2: a regular hexagon', [
        S("A regular shape has all its sides equal. A hexagon has 6 sides. Suppose each side is 7 centimetres.", E('6 sides of 7 cm')),
        S("We can add 7 6 times, but it is quicker to multiply. 6 times 7 is 42 centimetres.", g('6 × 7 = 42 cm'))
      ]),
      SC('Missing sides', 'Example 3: an L-shape', [
        S("Now an L-shape. Some of its sides are not labelled. We must work them out before we can add. The shape is 12 centimetres wide and 10 centimetres tall. A corner has been cut away.", V.poly([[10, 110], [130, 110], [130, 70], [60, 70], [60, 10], [10, 10]], 'var(--surface-2)', 150, 120, 'An L-shape')),
        S("The bottom is 12 and the left side is 10. The top short side is 5. The notch goes in 7 across and 6 up. That leaves 4 on the right side, because 10 take away 6 is 4.", E('12, 4, 7, 6, 5, 10')),
        S("Add all 6 sides. 12 plus 4 is 16, plus 7 is 23, plus 6 is 29, plus 5 is 34, plus 10 is 44. The perimeter is 44 centimetres.", g('12 + 4 + 7 + 6 + 5 + 10 = 44 cm')),
        S("Here is something interesting. This is the same as a rectangle 12 by 10. 2 times 12 plus 10 is 44. When a corner is cut away like this, the perimeter does not change.", E('2 × (12 + 10) = 44 cm', 'b'))
      ]),
      SC('Circles', 'Example 4: circumference', [
        S("The perimeter of a circle has a special name. It is called the circumference. It is about 3.14 times the width across the circle. The width across through the centre is the diameter.", E('C = π × d ≈ 3.14 × d', 'g')),
        S("A circle has a diameter of 10 centimetres. The circumference is 3.14 times 10. That is 31.4 centimetres.", g('3.14 × 10 = 31.4 cm'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: adding only the sides you can see. A rectangle has 4 sides. If only 2 are labelled, you must still count the other 2.", V.rule('Count every side.')),
        S("Mistake two: forgetting the missing sides in a compound shape. Work them out first, using the sides you already know.", V.rule('Find missing sides first.')),
        S("Mistake three: using square units. Perimeter is a length, so it is in centimetres or metres. Square centimetres are for area.", r('44 cm²  ✗') + g('44 cm  ✓'))
      ]),
      SC('In real life', 'Fencing', [
        S("A garden is 15 metres long and 8 metres wide. A farmer wants to put a fence all the way round. How much fencing is needed? 15 plus 8 is 23. Double it. 46 metres.", g('2 × (15 + 8) = 46 m'))
      ]),
      L.turn("Your turn! Number one. A square has sides of 11 centimetres. What is its perimeter? Pause and try it.", E('4 × 11'), "4 times 11 is 44 centimetres.", g('44 cm')),
      L.turn("Your turn! Number two. A rectangle is 14 metres long and 9 metres wide. What is the perimeter? Pause and try it.", E('2 × (14 + 9)'), "14 plus 9 is 23. Double it to get 46 metres.", g('46 m')),
      L.turn("Your turn! Number three. A circle has a diameter of 20 centimetres. What is its circumference? Use 3.14. Pause and try it.", E('3.14 × 20'), "3.14 times 20 is 62.8 centimetres.", g('62.8 cm')),
      L.rec(T, "Perimeter is the distance round the outside of a shape. Add all the sides. In compound shapes, find the missing sides first. A rectangle is 2 times length plus width. A circle's perimeter is called the circumference, and it is pi times the diameter.", ['Add all the sides', 'Rectangle: 2 × (l + w)', 'Find missing sides first', 'Circle: C = π × d'])
    ]);
  })();
  /* ---- 2D shapes ---- */
  (function () {
    var T = 'What are two-dimensional shapes?';
    L.full(T, [
      SC('Flat shapes', 'What does two-dimensional mean?', [
        S("Think of a shape drawn on a sheet of paper. It is flat. You can measure how long it is and how wide it is, but it has no thickness. Shapes like this are called 2-dimensional shapes, or 2D shapes for short.", V.cards(['triangle', 'square', 'pentagon', 'hexagon', 'circle'], ['b', 'p', 'g', 'b', 'p'], true)),
        S("2-dimensional means 2 measurements: length and width. A cube, a ball or a box are not flat. They are 3-dimensional, because they also have height.", V.cols([V.card('2D: flat', 'g', true), V.card('3D: solid', 'b', true)], 2))
      ]),
      SC('Polygons', 'Shapes with straight sides', [
        S("Many 2D shapes are made only of straight lines. They are closed, which means there are no gaps. A closed shape with straight sides is called a polygon.", V.rule('Polygon: closed, straight sides, flat.')),
        S("Polygons are named by counting their sides. 3 sides make a triangle. 4 sides make a quadrilateral. 5 sides make a pentagon. 6 sides make a hexagon. 8 sides make an octagon. 10 sides make a decagon.", V.tbl([['3', 'triangle'], ['4', 'quadrilateral'], ['5', 'pentagon'], ['6', 'hexagon'], ['8', 'octagon'], ['10', 'decagon']], ['Sides', 'Name'])),
        S("The names come from Greek. Penta means 5. Hexa means 6. Octa means 8. Deca means 10. Once you know these, the names are easy to remember.", V.rule('penta 5, hexa 6, octa 8, deca 10'))
      ]),
      SC('Regular and irregular', 'Equal or not?', [
        S("A regular polygon has all its sides the same length, and all its angles the same size. A square is regular. A stop sign is a regular octagon.", V.cards(['Regular: all sides and angles equal'], ['g'])),
        S("An irregular polygon does not have all sides and angles equal. A rectangle that is not a square is irregular. A rectangle has equal angles, but its sides are not all equal.", V.cards(['Irregular: not all equal'], ['b'])),
        S("Take care here. A shape can have equal sides but still not be regular. A rhombus has 4 equal sides, but its angles are not all the same, so it is irregular.", V.rule('Both the sides and the angles must be equal.'))
      ]),
      SC('Circles', 'A 2D shape that is not a polygon', [
        S("A circle is a 2D shape, but it is not a polygon. It has a curved edge, and no straight sides.", E('Circle: 2D, but not a polygon', 'b')),
        S("A semicircle, which is half a circle, is also not a polygon, because it has a curved edge.", E('Curved edge: not a polygon'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: calling a shape with a gap a polygon. A polygon must be closed.", V.rule('Closed shapes only.')),
        S("Mistake two: thinking that equal sides always mean regular. A rhombus has equal sides, but not equal angles.", r('Rhombus is regular  ✗')),
        S("Mistake three: mixing up the names. A quadrilateral is any shape with 4 sides. A square, a rectangle and a kite are all quadrilaterals.", V.rule('Quadrilateral = any four-sided polygon.'))
      ]),
      SC('In real life', 'All around us', [
        S("Road signs use 2D shapes. Triangles warn us of danger. Circles give orders, like a speed limit. Rectangles give information. And a stop sign is a regular octagon.", V.cards(['▲ warning', '● order', '■ information'], ['b', 'p', 'g']))
      ]),
      L.turn("Your turn! Number one. What do we call a polygon with 8 sides? Pause and think.", E('?'), "An octagon, like a stop sign.", g('octagon')),
      L.turn("Your turn! Number two. Is a circle a polygon? Pause and think.", E('?'), "No. A circle has a curved edge, and no straight sides.", g('No')),
      L.turn("Your turn! Number three. A shape has 6 sides, all the same length, and all angles equal. What is its full name? Pause and think.", E('?'), "It is a regular hexagon.", g('regular hexagon')),
      L.rec(T, "2D shapes are flat. A polygon is a closed shape with straight sides. Polygons are named by their number of sides. A regular polygon has equal sides and equal angles. A circle is 2D, but it is not a polygon.", ['2D = flat', 'Polygons: closed, straight sides', 'Named by number of sides', 'Regular: all equal', 'Circle: not a polygon'])
    ]);
  })();

  /* ---- Properties of 2D shapes ---- */
  (function () {
    var T = 'What are the properties of 2D shapes?';
    L.full(T, [
      SC('Properties', 'What makes a shape what it is?', [
        S("How do you tell a square from a rectangle? You look at its properties. The properties of a shape are facts about it, such as its sides, its angles, whether it has parallel sides, and its lines of symmetry.", V.list(['Sides', 'Angles', 'Parallel sides', 'Lines of symmetry'])),
        S("Parallel lines are lines that stay the same distance apart, forever. They never meet. We mark them with small arrows. A line of symmetry is a mirror line. Fold the shape along it, and both halves fit exactly.", V.rule('Parallel: never meet.   Symmetry: a mirror line.'))
      ]),
      SC('Triangles', 'Three kinds', [
        S("There are 3 main kinds of triangle. An equilateral triangle has 3 equal sides, and 3 equal angles of 60 degrees.", V.tbl([['Equilateral', '3 equal sides', '3 lines']], ['Triangle', 'Sides', 'Symmetry'])),
        S("An isosceles triangle has 2 equal sides, and 2 equal angles. It has 1 line of symmetry.", V.tbl([['Equilateral', '3 equal sides', '3 lines'], ['Isosceles', '2 equal sides', '1 line']], ['Triangle', 'Sides', 'Symmetry'])),
        S("A scalene triangle has no equal sides and no equal angles. It has no lines of symmetry.", V.tbl([['Equilateral', '3 equal sides', '3 lines'], ['Isosceles', '2 equal sides', '1 line'], ['Scalene', 'none equal', '0 lines']], ['Triangle', 'Sides', 'Symmetry'])),
        S("A right-angled triangle has 1 angle of 90 degrees. It can be isosceles or scalene.", E('Right-angled: 1 90° angle', 'b'))
      ]),
      SC('Quadrilaterals', 'Four-sided shapes', [
        S("A square has 4 equal sides and 4 right angles. It has 4 lines of symmetry. A rectangle has 4 right angles, and opposite sides equal. It has 2 lines of symmetry.", V.tbl([['Square', '4 equal sides, 4 right angles'], ['Rectangle', '4 right angles']], ['Shape', 'Key property'])),
        S("A rhombus has 4 equal sides, but its angles are not right angles. It looks like a squashed square. A parallelogram has 2 pairs of parallel sides, and opposite sides equal.", V.tbl([['Rhombus', '4 equal sides'], ['Parallelogram', '2 pairs parallel']], ['Shape', 'Key property'])),
        S("A trapezium has just one pair of parallel sides. A kite has 2 pairs of equal sides, which are next to each other.", V.tbl([['Trapezium', '1 pair parallel'], ['Kite', '2 pairs equal, next to each other']], ['Shape', 'Key property']))
      ]),
      SC('Diagonals', 'Corner to corner', [
        S("A diagonal is a straight line from 1 corner to the opposite corner. The diagonals of a rectangle are equal in length. The diagonals of a square are equal, and they cross at right angles. The diagonals of a rhombus also cross at right angles.", E('Square: diagonals equal, cross at 90°', 'g'))
      ]),
      SC('Shape families', 'One shape can be two', [
        S("Shapes belong in families. Every square is also a rectangle, because it has 4 right angles. Every square is also a rhombus, because it has 4 equal sides. But a rectangle is not always a square.", V.rule('Every square is a rectangle. Not every rectangle is a square.'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: saying a rectangle has 4 lines of symmetry. It has 2. The diagonals are not mirror lines in a rectangle.", r('Rectangle: 4 lines  ✗') + g('Rectangle: 2 lines  ✓')),
        S("Mistake two: mixing up a rhombus and a square. Both have 4 equal sides. Only a square has 4 right angles.", V.rule('Rhombus: equal sides. Square: equal sides and right angles.')),
        S("Mistake three: forgetting that a trapezium has only one pair of parallel sides. If there are 2 pairs, it is a parallelogram.", V.rule('Trapezium: exactly 1 pair parallel.'))
      ]),
      SC('In real life', 'Design', [
        S("Builders use rectangles for windows and doors because their right angles fit neatly together. They use triangles in bridges and roofs, because triangles are rigid and strong. They do not bend out of shape.", V.cards(['Rectangles fit', 'Triangles are strong'], ['b', 'g']))
      ]),
      L.turn("Your turn! Number one. Which quadrilateral has exactly 1 pair of parallel sides? Pause and think.", E('?'), "A trapezium.", g('trapezium')),
      L.turn("Your turn! Number two. A triangle has 2 equal sides. What is it called? Pause and think.", E('?'), "It is an isosceles triangle.", g('isosceles')),
      L.turn("Your turn! Number three. How many lines of symmetry does a rectangle that is not a square have? Pause and think.", E('?'), "It has 2 lines of symmetry, 1 across the middle each way.", g('2')),
      L.rec(T, "Describe shapes by their sides, angles, parallel lines, diagonals and symmetry. There are 3 kinds of triangle: equilateral, isosceles and scalene. Quadrilaterals include the square, rectangle, rhombus, parallelogram, trapezium and kite. Shapes belong to families, so every square is also a rectangle.", ['Sides and angles', 'Parallel sides', 'Diagonals', 'Lines of symmetry', 'Shape families'])
    ]);
  })();

  /* ---- Angles ---- */
  (function () {
    var T = 'How do you label, draw and measure angles?';
    L.full(T, [
      SC('Angles', 'What is an angle?', [
        S("When 2 straight lines meet at a point, they make an angle. The point where they meet is called the vertex. The angle is the amount of turn between the 2 lines.", V.angle(50, '50°')),
        S("We measure angles in degrees. We write a small circle after the number. 1 full turn all the way round is 360 degrees.", E('Full turn = 360°', 'b'))
      ]),
      SC('Types of angle', 'Names by size', [
        S("Angles have names that depend on their size. An angle smaller than 90 degrees is called acute. An angle of exactly 90 degrees is a right angle. It looks like the corner of a book.", V.tbl([['acute', '< 90°'], ['right', '90°']], ['Name', 'Size'])),
        S("An angle between 90 and 180 degrees is obtuse. An angle of exactly 180 is a straight line. An angle bigger than 180 is called reflex.", V.tbl([['acute', '< 90°'], ['right', '90°'], ['obtuse', '90°–180°'], ['straight', '180°'], ['reflex', '> 180°']], ['Name', 'Size'])),
        S("A trick: acute sounds like a cute little angle, and obtuse is the big, wide 1.", V.rule('Acute: small.  Obtuse: wide.'))
      ]),
      SC('Labelling', 'Naming an angle with three letters', [
        S("We name an angle with 3 capital letters. The letter in the middle is always the vertex. Angle A B C means the angle at B, between the lines B A and B C.", E('∠ABC: the angle at B', 'g')),
        S("Why 3 letters? Because there may be many angles at the same point. The 3 letters tell us exactly which one we mean.", V.rule('Middle letter = vertex.'))
      ]),
      SC('Measuring', 'Using a protractor', [
        S("A protractor is 1/2 circle with a scale from 0 to 180. First, estimate the angle. Is it acute or obtuse? This stops silly mistakes.", V.rule('Estimate first.')),
        S("Put the centre of the protractor on the vertex. Line up the 0 line with 1 arm of the angle. Now look where the other arm crosses the scale.", V.rule('Centre on the vertex. 0 on 1 arm.')),
        S("There are 2 scales. Use the one that starts at 0 on your first arm. If the angle is acute, read the smaller number. If it is obtuse, read the bigger number.", V.rule('Read from zero.'))
      ]),
      SC('Drawing', 'Draw a 65° angle', [
        S("To draw 65 degrees, first draw a straight line. This will be 1 arm. Mark a point on the line for the vertex.", E('Step 1: a straight line')),
        S("Put the protractor's centre on the vertex, with 0 on the line. Count up the scale to 65 and make a small mark. Take off the protractor, and join the mark to the vertex with a ruler.", V.angle(65, '65°')),
        S("Finally, label the angle with its size.", g('65°'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: reading the wrong scale. An acute angle should not give an answer bigger than 90. If it does, read the other scale.", r('Acute angle reads 115°  ✗') + g('Use the other scale: 65°  ✓')),
        S("Mistake two: putting the protractor's centre on the wrong spot. It must sit exactly on the vertex.", V.rule('Centre exactly on the vertex.')),
        S("Mistake three: mixing up acute and obtuse. Acute is smaller than 90. Obtuse is bigger than 90.", V.rule('Acute < 90 < Obtuse.'))
      ]),
      SC('In real life', 'Estimate first', [
        S("Always estimate before you measure. Suppose an angle looks quite small, but your protractor says 115 degrees. Something is wrong. You used the wrong scale. 180 minus 115 is 65 degrees.", E('180° − 115° = 65°', 'g'))
      ]),
      L.turn("Your turn! Number one. What type of angle is 125 degrees? Pause and think.", E('125°'), "It is between 90 and 180, so it is obtuse.", g('obtuse')),
      L.turn("Your turn! Number two. What type of angle is 210 degrees? Pause and think.", E('210°'), "It is bigger than 180, so it is reflex.", g('reflex')),
      L.turn("Your turn! Number three. In angle P Q R, which letter is the vertex? Pause and think.", E('∠PQR'), "The middle letter, Q.", g('Q')),
      L.rec(T, "An angle is the amount of turn between 2 lines that meet at a vertex. We measure it in degrees. Angles can be acute, right, obtuse, straight or reflex. Name an angle with 3 letters, with the vertex in the middle. Estimate first, then measure from 0 with the protractor's centre on the vertex.", ['Acute, right, obtuse, reflex', '∠ABC: vertex B', 'Protractor: centre on vertex', 'Estimate first'])
    ]);
  })();

  /* ---- Data handling ---- */
  (function () {
    var T = 'What is data handling?';
    L.full(T, [
      SC('Data', 'What is data?', [
        S("Data is just information. It might be numbers, like heights or test scores, or it might be words, like favourite colours. Data handling means collecting information, organising it, showing it, and working out what it tells us.", V.list(['Ask a question', 'Collect data', 'Organise and display', 'Interpret and conclude'])),
        S("Data is everywhere. A shop uses data to decide what to stock. A doctor uses data to track your health. A school uses data to plan clubs.", V.cards(['Shops', 'Doctors', 'Schools'], ['b', 'g', 'p'], true))
      ]),
      SC('Types of data', 'Words or numbers?', [
        S("There are different types of data. Categorical data is words or groups. For example, favourite sport, or eye colour. You cannot do sums with it.", V.tbl([['Categorical', 'favourite sport']], ['Type', 'Example'])),
        S("Numerical data is numbers. It comes in 2 kinds. Discrete data is counted, and can only take certain values, like the number of pets. You cannot have 2 and 1/2 pets.", V.tbl([['Categorical', 'favourite sport'], ['Discrete', 'number of pets']], ['Type', 'Example'])),
        S("Continuous data is measured, and can take any value in a range, like height or time. A person can be 1.53 metres tall.", V.tbl([['Categorical', 'favourite sport'], ['Discrete', 'number of pets'], ['Continuous', 'height, time']], ['Type', 'Example'])),
        S("A quick test: if you count it, it is discrete. If you measure it, it is continuous.", V.rule('Count = discrete.   Measure = continuous.'))
      ]),
      SC('A good question', 'Start with a question', [
        S("Every data investigation starts with a clear question. Something you can test. For example, do pupils in Year 1 spend more time on screens than pupils in Year 3?", E('Question → data needed', 'g')),
        S("Once you have the question, decide what data you need, who to ask, and how to record it. Planning first saves a lot of time later.", V.rule('Plan before you collect.'))
      ]),
      SC('Bias', 'Keeping it fair', [
        S("The data must be fair. If you want to find the favourite sport of the whole school, but you only ask members of the football club, you will get a biased answer. Most will say football.", E('Biased sample', 'r')),
        S("To avoid bias, ask a mix of people. Boys and girls, younger and older. And ask enough people. A larger sample is more reliable than a very small 1.", g('Ask a fair, mixed sample'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: asking too few people. 2 or 3 people cannot tell you what a whole school thinks.", V.rule('A bigger sample is more reliable.')),
        S("Mistake two: mixing up discrete and continuous. Shoe size is counted in steps, so it is discrete. Foot length is measured, so it is continuous.", V.tbl([['Shoe size', 'discrete'], ['Foot length', 'continuous']], ['', ''])),
        S("Mistake three: asking leading questions. Don't you agree football is the best? pushes people to say yes. Ask a neutral question.", r('Don\'t you agree football is best?  ✗') + g('What is your favourite sport?  ✓'))
      ]),
      SC('In real life', 'Using data', [
        S("A school canteen counts how many pupils choose each meal. This is data. They use it to decide how much of each meal to cook. Less waste, and fewer disappointed pupils.", E('Data → decision', 'g'))
      ]),
      L.turn("Your turn! Number one. Is the time to run 100 metres discrete or continuous data? Pause and think.", E('?'), "Time is measured, so it is continuous.", g('continuous')),
      L.turn("Your turn! Number two. Is the number of goals in a match discrete or continuous? Pause and think.", E('?'), "Goals are counted, so they are discrete.", g('discrete')),
      L.turn("Your turn! Number three. Is a favourite pet categorical or numerical data? Pause and think.", E('?'), "It is words, so it is categorical.", g('categorical')),
      L.rec(T, "Data handling is a cycle. Ask a question, collect fair data, organise and display it, then interpret it. Data can be categorical or numerical. Numerical data is discrete if it is counted, and continuous if it is measured. Ask enough people, from different groups, to avoid bias.", ['Ask a question', 'Collect fair data', 'Organise and display', 'Interpret and conclude', 'Count = discrete, measure = continuous'])
    ]);
  })();

  /* ---- Collecting and recording data ---- */
  (function () {
    var T = 'How do you collect and record data?';
    L.full(T, [
      SC('Collecting data', 'Three ways', [
        S("There are 3 common ways to collect data. In a survey, you ask people questions. In an observation, you watch and count what happens. In an experiment, you measure something under test.", V.cards(['Survey', 'Observation', 'Experiment'], ['b', 'p', 'g'])),
        S("Which is best? It depends on your question. To find favourite sports, use a survey. To find how many cars pass the school, use observation. To see how fast plants grow in different light, use an experiment.", V.rule('Pick the method that fits the question.'))
      ]),
      SC('Tally charts', 'Counting in fives', [
        S("When you collect data, you need a quick way to record each answer. We use tally marks. Each answer gets a single line.", E('| | | |')),
        S("The fifth mark goes across the first 4, to make a gate. This groups the marks in fives, so they are quick to count. Count in fives, then add the extra ones.", LK.tally(12)),
        S("This tally shows 5, 5 and 2. That is 12.", g('5 + 5 + 2 = 12'))
      ]),
      SC('Frequency tables', 'Turning tallies into numbers', [
        S("Once you have collected the data, you can write it in a frequency table. The frequency is how many times each answer appeared.", V.tbl([['Football', '12'], ['Swimming', '7'], ['Dance', '9']], ['Sport', 'Frequency'])),
        S("Add up the frequencies to get the total. 12 plus 7 plus 9 is 28. This should match the number of people you asked. If it does not, you have missed or double-counted someone.", V.tbl([['Football', '12'], ['Swimming', '7'], ['Dance', '9'], ['Total', '28']], ['Sport', 'Frequency']))
      ]),
      SC('Grouped data', 'Using classes', [
        S("Sometimes there are lots of different numbers, like test scores. Making a row for each would be silly. Instead, group them into classes. 0 to 9, 10 to 19, 20 to 29.", V.tbl([['0–9', '4'], ['10–19', '11'], ['20–29', '6']], ['Score', 'Frequency'])),
        S("The classes must not overlap. If 1 class is 0 to 10, and the next is 10 to 20, where would 10 go? Each value must belong to just one class. And the classes should be the same width.", V.rule('No overlaps. Same width.'))
      ]),
      SC('Good survey questions', 'Clear and fair', [
        S("Good questions are clear. They give answer options that cover every possibility, and that do not overlap. For age, use under 10, 10 to 12, 13 and over. Not under 13 and 10 to 15.", V.rule('Cover everyone. Do not overlap.')),
        S("Avoid leading questions. Don't you agree that football is best? pushes people. Ask a neutral question instead.", r('Leading question  ✗') + g('Neutral question  ✓'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: forgetting to cross the fifth tally mark. If you just draw 5 lines, they are harder to count.", V.rule('4 lines, then cross them.')),
        S("Mistake two: overlapping classes. 10 should belong to exactly 1 class.", V.rule('0–9, 10–19, 20–29.')),
        S("Mistake three: not checking the total. The frequencies should add up to the number of people asked.", V.rule('Check: total = people asked.'))
      ]),
      SC('In real life', 'A traffic survey', [
        S("A class counts the cars, buses and bikes that pass the school for 10 minutes. They make a tally chart, turn it into a frequency table, and then they can see which kind of traffic is most common.", E('tally → frequency table', 'g'))
      ]),
      L.turn("Your turn! Number one. How many tally marks are in 3 full gates and 2 extra marks? Pause and think.", E('3 gates + 2'), "Each gate is 5. 15 plus 2 is 17.", g('17')),
      L.turn("Your turn! Number two. A frequency table shows 9, 14 and 7. What is the total? Pause and think.", E('9 + 14 + 7'), "9 plus 14 is 23. Plus 7 is 30.", g('30')),
      L.turn("Your turn! Number three. Which groups are best? 0 to 10 and 10 to 20, or 0 to 9 and 10 to 19? Pause and think.", E('?'), "0 to 9 and 10 to 19. They do not overlap.", g('0–9 and 10–19')),
      L.rec(T, "Collect data with surveys, observations or experiments. Record it with tally marks grouped in fives. Then make a frequency table. Use groups that do not overlap for lots of different numbers. Ask clear, fair questions, and check the frequencies add up to the total.", ['Survey, observe, measure', 'Tally in fives', 'Frequency table', 'Non-overlapping classes', 'Fair, clear questions'])
    ]);
  })();
})();
