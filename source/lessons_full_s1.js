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
        S("Let's start from the very beginning. Every number is made from just ten digits: nought, one, two, three, four, five, six, seven, eight and nine. That is all we ever need.", V.cards(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], ['b'], true)),
        S("The clever part is that a digit can be worth different amounts. The digit five is worth five in the number five, but fifty in the number fifty-three, and five hundred in the number five hundred and twelve. The amount a digit is worth depends on where it sits.", E('5   →   50   →   500')),
        S("Each place is called a column. The columns have names. From the right they are ones, tens, hundreds, then thousands and ten thousands. We call this idea place value: the value of a digit comes from its place.", V.tbl([['4', '7', '3', '0', '6']], ['Ten thousands', 'Thousands', 'Hundreds', 'Tens', 'Ones']))
      ]),
      SC('Whole numbers', 'Example 1: 47,306', [
        S("Let's read the number forty-seven thousand, three hundred and six. Put each digit in its column. The four is in the ten thousands column. The seven is in the thousands column. The three is in the hundreds. The zero is in the tens, and the six is in the ones.", V.tbl([['4', '7', '3', '0', '6']], HEAD5)),
        S("Now find what each digit is worth. The four is worth forty thousand. The seven is worth seven thousand. The three is worth three hundred. The zero is worth nothing. The six is worth six.", g('40,000 + 7,000 + 300 + 0 + 6')),
        S("Why do we need the zero? It is a placeholder. It holds the tens column open so the three stays in the hundreds. Without it we would write four seven three six, and the number would be far smaller.", E('47,306  not  4,736', 'g') + V.rule('A zero keeps every other digit in the right column.'))
      ]),
      SC('Same digit, different value', 'Example 2: the digit 5', [
        S("Here is a good test. Look at two numbers, two thousand, five hundred and eighty-one, and five thousand, two hundred and eighteen. Both use a five.", E('2,581') + E('5,218')),
        S("In two thousand, five hundred and eighty-one, the five is in the hundreds column, so it is worth five hundred. In five thousand, two hundred and eighteen, the five is in the thousands column, so it is worth five thousand. Same digit, but a different place, so a different value.", E('2,581 → 5 is worth 500', 'g') + E('5,218 → 5 is worth 5,000', 'g'))
      ]),
      SC('Ten times bigger', 'How the columns are linked', [
        S("The columns are not random. Each column is ten times bigger than the column on its right. Ones, then ten times that is tens, ten times that is hundreds, and so on.", V.tbl([['1', '10', '100', '1,000']], ['O', 'T', 'H', 'Th'])),
        S("So moving one column to the left makes a digit ten times bigger. Moving one column to the right makes it ten times smaller. Keep that idea in your head. We use it all lesson, and it works on the right of the decimal point too.", V.rule('Left: × 10.   Right: ÷ 10.'))
      ]),
      SC('The decimal point', 'Parts of a whole', [
        S("What if we need less than one? We use a decimal point. The digits to the left of the point are whole numbers. The digits to the right are parts of one.", E('3 . 2 5 8')),
        S("The first column after the point is tenths. To make tenths, cut one whole into ten equal parts. Three tenths means three of those ten parts. We write it as zero point three.", V.bar(3, 10) + g('0.3 = 3 tenths')),
        S("The next column is hundredths. Now cut each tenth into ten more pieces, so one whole is a hundred pieces. The column after that is thousandths. Each column is ten times smaller than the one on its left, exactly as before.", V.tbl([['1', '0.1', '0.01', '0.001']], ['Ones', 'tenths', 'hundredths', 'thousandths']))
      ]),
      SC('Decimal places', 'Example 3: 3.258', [
        S("Take the number three point two five eight. We say each digit after the point on its own.", V.tbl([['3', '.', '2', '5', '8']], ['O', '', 'tenths', 'hundredths', 'thousandths'])),
        S("The three is three ones. The two is in the tenths column, so it is two tenths, which is zero point two. The five is in the hundredths column, so it is five hundredths, zero point zero five. The eight is in the thousandths column, so it is eight thousandths, zero point zero zero eight.", g('3.258 = 3 + 0.2 + 0.05 + 0.008'))
      ]),
      SC('Comparing decimals', 'Example 4: 0.7 or 0.65?', [
        S("Which is bigger, zero point seven or zero point six five? Many people say zero point six five, because sixty-five looks bigger than seven. That is a trap. Let's do it properly.", E('0.7  or  0.65  ?')),
        S("Step one: give both numbers the same number of decimal places. Zero point seven can be written zero point seven zero. Adding a zero on the end does not change its value.", E('0.70') + E('0.65')),
        S("Step two: compare column by column from the left. Both have a zero in the ones. In the tenths, seven is bigger than six. So we can stop. Zero point seven is bigger.", g('0.70 > 0.65') + V.rule('Compare from the left. The first difference decides.'))
      ]),
      SC('Comparing decimals', 'Example 5: put in order', [
        S("Put these in order, smallest first: zero point five, zero point four five, and zero point four zero five.", E('0.5   0.45   0.405')),
        S("Give them all three decimal places so they line up. Zero point five becomes zero point five zero zero. Zero point four five becomes zero point four five zero.", E('0.500') + E('0.450') + E('0.405')),
        S("Now compare the tenths. Two of them have four tenths, and one has five tenths, so zero point five is the biggest. For the other two, look at the hundredths. Zero point four zero five has zero hundredths and zero point four five has five hundredths. So the smallest is zero point four zero five.", g('0.405 < 0.45 < 0.5'))
      ]),
      SC('Multiplying and dividing by 10, 100, 1,000', 'The digits move', [
        S("Because each column is ten times the next, multiplying by ten makes every digit move one column to the left. It is the digits that move. The decimal point stays where it is.", E('4.37 × 10 = 43.7')),
        S("Look at four point three seven. Times ten: the four moves from ones to tens, the three moves to ones, and the seven moves to tenths. We get forty-three point seven.", V.tbl([['4', '.', '3', '7']], ['O', '', 't', 'h']) + V.tbl([['4', '3', '.', '7']], ['T', 'O', '', 't'])),
        S("Times one hundred moves the digits two places to the left. Sometimes there is nothing to fill the gap, so we use a zero as a placeholder. Zero point five times one hundred is fifty.", g('0.5 × 100 = 50')),
        S("Dividing is the opposite. Dividing by one hundred moves every digit two places to the right. Fifty-two point eight divided by one hundred is zero point five two eight.", g('52.8 ÷ 100 = 0.528'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake number one: thinking more digits means bigger. Zero point six five is not bigger than zero point seven. Always compare column by column from the left.", E('0.65 > 0.7  ✗', 'r') + g('0.7 > 0.65  ✓')),
        S("Mistake number two: leaving out the zero placeholder. Three hundred and five is three, zero, five. If you leave out the zero you get thirty-five, which is much smaller.", E('305  not  35', 'g')),
        S("Mistake number three: saying that multiplying by ten just adds a zero. That works for whole numbers like seven times ten, but not for decimals. Four point three seven times ten is forty-three point seven, not four point three seven zero.", E('4.37 × 10 = 4.370  ✗', 'r') + g('4.37 × 10 = 43.7  ✓'))
      ]),
      SC('In real life', 'Money and sport', [
        S("Money uses place value all the time. Three pounds forty-five is three ones, four tenths and five hundredths of a pound. That is why pence come after the point.", E('£3.45 = 3 + 0.4 + 0.05')),
        S("In sport, races are timed to the hundredth of a second. Nine point five eight seconds beats nine point six three seconds, because at the tenths column five is smaller than six, and a smaller time is faster.", g('9.58 < 9.63'))
      ]),
      L.turn("Your turn! Number one. What is the value of the six in twelve point three six four? Pause and think.", E('12.364'), "The six is in the hundredths column, so it is worth six hundredths: zero point zero six.", g('0.06')),
      L.turn("Your turn! Number two. Which is bigger, zero point zero nine or zero point one? Pause and think.", E('0.09  or  0.1  ?'), "Write zero point one as zero point one zero. In the tenths, zero is smaller than one, so zero point one is bigger.", g('0.10 > 0.09')),
      L.turn("Your turn! Number three. What is six point three divided by ten? Pause and think.", E('6.3 ÷ 10 = ?'), "Dividing by ten moves each digit one column to the right. The six moves to the tenths and the three to the hundredths, so the answer is zero point six three.", g('6.3 ÷ 10 = 0.63')),
      L.rec(T, "A digit's value depends on its column. Each column is ten times the one to its right. After the point come tenths, hundredths and thousandths. Compare decimals column by column from the left, and use zero as a placeholder.", ['Each column × 10 to the left', 'tenths, hundredths, thousandths', 'Zeros hold places', 'Compare from the left', '× or ÷ 10 moves the digits'])
    ]);
  })();
  /* ---- Column addition and subtraction ---- */
  (function () {
    var T = 'How do you use column addition and subtraction?', TH = ['', 'Th', 'H', 'T', 'O'], LN = { line: true };
    L.full(T, [
      SC('Column methods', 'Why we use columns', [
        S("Adding and taking away are things you have done for years. In this lesson we learn a method that works for any size of number. It is called the column method.", V.cards(['+', '−'], ['b'])),
        S("Remember place value. Every digit sits in a column: ones, tens, hundreds, thousands. A digit only means something because of its column.", V.tbl([['5', '6', '7', '8']], ['Thousands', 'Hundreds', 'Tens', 'Ones'])),
        S("So when we add or subtract, we keep the columns lined up. Ones go under ones, tens under tens, and so on. Then we work on one column at a time, starting from the right.", V.rule('Line up the digits. Start on the right, with the ones.'))
      ]),
      SC('Adding in columns', 'Example 1: 5,678 + 2,945', [
        S("Let's add five thousand, six hundred and seventy-eight, and two thousand, nine hundred and forty-five. First we write the numbers one under the other, with the columns lined up.", LK.col(TH, [['', 5, 6, 7, 8], ['+', 2, 9, 4, 5], LN])),
        S("Start with the ones. Eight plus five is thirteen. Thirteen is one ten and three ones. So we write three in the ones column, and we carry the one ten over to the tens column.", E('8 + 5 = 13', 'b') + V.rule('Write 3. Carry 1 into the tens.')),
        S("Now the tens. Seven plus four is eleven, and we add the one we carried. That makes twelve. Write two, and carry one hundred over to the hundreds column.", E('7 + 4 + 1 = 12', 'b') + V.rule('Write 2. Carry 1 into the hundreds.')),
        S("Next, the hundreds. Six plus nine is fifteen, plus the carried one makes sixteen. Write six, and carry one into the thousands.", E('6 + 9 + 1 = 16', 'b') + V.rule('Write 6. Carry 1 into the thousands.')),
        S("Last, the thousands. Five plus two is seven, plus the carried one makes eight. So the answer is eight thousand, six hundred and twenty-three.", LK.col(TH, [['', 5, 6, 7, 8], ['+', 2, 9, 4, 5], LN, ['', 'h:8', 'h:6', 'h:2', 'h:3']]) + g('5,678 + 2,945 = 8,623')),
        S("It is always a good idea to check that your answer is sensible. Round the numbers: about five thousand seven hundred, plus about two thousand nine hundred, is about eight thousand six hundred. Our answer is very close, so it is sensible.", E('5,700 + 2,900 = 8,600') + V.rule('Estimate first or last. It catches big slips.'))
      ]),
      SC('Adding in columns', 'Example 2: 4,908 + 3,596', [
        S("Here is a second one with a zero in it. Four thousand, nine hundred and eight, plus three thousand, five hundred and ninety-six.", E('4,908 + 3,596')),
        S("Ones: eight plus six is fourteen. Write four, carry one. Tens: zero plus nine is nine, and the carried one makes ten. Write zero, carry one.", E('8 + 6 = 14  →  write 4, carry 1') + E('0 + 9 + 1 = 10  →  write 0, carry 1')),
        S("Hundreds: nine plus five is fourteen, plus one is fifteen. Write five, carry one. Thousands: four plus three is seven, plus one is eight. The answer is eight thousand, five hundred and four.", E('9 + 5 + 1 = 15  →  write 5, carry 1') + E('4 + 3 + 1 = 8') + g('4,908 + 3,596 = 8,504'))
      ]),
      SC('Subtracting in columns', 'What subtraction means', [
        S("Subtraction means taking away, or finding the difference. We use columns again, and again we start on the right. The big number always goes on top.", LK.col(TH, [['', 5, 2, 4, 3], ['−', 1, 7, 8, 6], LN])),
        S("Here is the important new idea. Sometimes the digit on top is too small to take the bottom digit away. When that happens, we exchange. We borrow one from the next column on the left. One in that column is worth ten in this one.", V.rule('Too small? Exchange: take 1 from the next column, give 10 to this one.'))
      ]),
      SC('Subtracting in columns', 'Example 3: 5,243 − 1,786', [
        S("Let's work out five thousand, two hundred and forty-three, take away one thousand, seven hundred and eighty-six.", E('5,243 − 1,786')),
        S("Ones: three take away six cannot be done. So we exchange. Take one ten from the tens column. The four tens become three tens, and the three ones become thirteen ones. Thirteen take away six is seven.", E('13 − 6 = 7', 'b') + V.rule('Tens: 4 → 3.  Ones: 3 → 13.')),
        S("Tens: now we have three tens, and we want to take away eight. Again that cannot be done. Exchange from the hundreds. Two hundreds become one hundred, and the three tens become thirteen tens. Thirteen take away eight is five.", E('13 − 8 = 5', 'b') + V.rule('Hundreds: 2 → 1.  Tens: 3 → 13.')),
        S("Hundreds: we have one hundred, and we want to take away seven. Exchange from the thousands. Five thousands become four thousands, and one hundred becomes eleven hundreds. Eleven take away seven is four.", E('11 − 7 = 4', 'b') + V.rule('Thousands: 5 → 4.  Hundreds: 1 → 11.')),
        S("Finally the thousands. We have four thousands, and take away one. That leaves three. The answer is three thousand, four hundred and fifty-seven.", g('5,243 − 1,786 = 3,457'))
      ]),
      SC('Subtracting in columns', 'Example 4: 7,042 − 3,857, with a zero', [
        S("This one is the tricky kind. Seven thousand and forty-two, take away three thousand, eight hundred and fifty-seven. Look at the top number. There is a zero in the hundreds column.", LK.col(TH, [['', 7, 0, 4, 2], ['−', 3, 8, 5, 7], LN])),
        S("Ones: two take away seven cannot be done. Exchange from the tens. Four tens become three tens, and the two ones become twelve. Twelve take away seven is five.", E('12 − 7 = 5', 'b')),
        S("Tens: three take away five cannot be done. We want to exchange from the hundreds, but there are no hundreds to give. So we go one more column. Take one thousand. The seven thousands become six thousands. That one thousand is ten hundreds. We give one of those hundreds to the tens, and nine hundreds are left.", V.rule('Thousands: 7 → 6.  Hundreds: 0 → 9.  Tens: 3 → 13.')),
        S("Now the tens are thirteen. Thirteen take away five is eight. Hundreds: nine take away eight is one. Thousands: six take away three is three. The answer is three thousand, one hundred and eighty-five.", E('13 − 5 = 8') + E('9 − 8 = 1') + E('6 − 3 = 3') + g('7,042 − 3,857 = 3,185'))
      ]),
      SC('Check with the inverse', 'Add it back', [
        S("Adding and subtracting are opposites. So we can check a subtraction by adding the answer back to the number we took away. If we get the number we started with, we are right.", V.rule('Check a subtraction by adding the answer back.')),
        S("Three thousand, one hundred and eighty-five, plus three thousand, eight hundred and fifty-seven. That makes seven thousand and forty-two. It matches, so our answer is correct.", g('3,185 + 3,857 = 7,042 ✓'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: not lining up the columns. If you write a number such as forty-five under the thousands and hundreds, you will add the wrong digits. Always put the ones under the ones.", r('5,678 + 45: 4 under the thousands  ✗') + g('5,678 + 45: 4 under the tens  ✓')),
        S("Mistake two: forgetting the carried digit. When a column makes ten or more, the extra ten must be added into the next column. Do not leave it out.", r('Forgot the carry  ✗') + g('Write the 1 small above the next column  ✓')),
        S("Mistake three: taking the smaller digit away from the bigger one. In fifty-two take away thirty-seven, the ones column is two take away seven. Some people do seven take away two and get five. That is wrong. You must exchange, and do twelve take away seven.", r('7 − 2 = 5  ✗') + g('12 − 7 = 5  ✓  (after exchanging)'))
      ]),
      SC('In real life', 'Fundraising', [
        S("A school raises four thousand, eight hundred and sixty pounds at a fair. Then it raises two thousand, five hundred and seventy-five pounds from a sponsored walk. To find the total we add in columns.", E('£4,860 + £2,575')),
        S("Zero plus five is five. Six plus seven is thirteen, write three, carry one. Eight plus five plus one is fourteen, write four, carry one. Four plus two plus one is seven. The school has raised seven thousand, four hundred and thirty-five pounds.", g('£4,860 + £2,575 = £7,435'))
      ]),
      L.turn("Your turn! Number one. Work out six thousand and five, take away two thousand, three hundred and eighteen. Pause and try it. Remember the zeros.", E('6,005 − 2,318'), "Exchange across the zeros. The tens and hundreds each become nine, and the ones become fifteen. The answer is three thousand, six hundred and eighty-seven.", g('6,005 − 2,318 = 3,687')),
      L.turn("Your turn! Number two. Work out four thousand, seven hundred and eighty-five, plus three thousand, six hundred and fifty-eight. Pause and try it.", E('4,785 + 3,658'), "Five plus eight is thirteen. Eight plus five plus one is fourteen. Seven plus six plus one is fourteen. Four plus three plus one is eight. The answer is eight thousand, four hundred and forty-three.", g('4,785 + 3,658 = 8,443')),
      L.turn("Your turn! Number three. A shop has nine thousand tickets. It sells four thousand, two hundred and seventy-five. How many are left? Pause and try it.", E('9,000 − 4,275'), "Exchange from the thousands, and every zero becomes nine, with the ones becoming ten. The answer is four thousand, seven hundred and twenty-five. Check: four thousand, seven hundred and twenty-five plus four thousand, two hundred and seventy-five is nine thousand.", g('9,000 − 4,275 = 4,725')),
      L.rec(T, "Line up the place values. Start on the right. Carry when a column makes ten or more. Exchange when the top digit is too small. When there is a zero, go to the next column that has something to give. Always check your answer.", ['Line up the columns', 'Start with the ones', 'Carry when you add', 'Exchange when you subtract', 'Check with the inverse'])
    ]);
  })();

  /* ---- Decimals in columns ---- */
  (function () {
    var T = 'How do you add and subtract to three decimal places?';
    L.full(T, [
      SC('Decimals in columns', 'Start with what you know', [
        S("You already know how to add and subtract whole numbers in columns. The good news is that decimals work in exactly the same way. There is just one extra rule.", V.rule('Line up the decimal points.')),
        S("Why? Because the decimal point is the fixed point of the whole number. The ones column sits just to its left. Tenths, hundredths and thousandths sit to its right. If the points are lined up, then every column lines up too.", V.tbl([['4', '.', '3', '7', '5']], ['Ones', '', 'tenths', 'hundredths', 'thousandths'])),
        S("Sometimes one number has fewer decimal places than the other. Then we fill the empty places with zeros. A zero on the end of a decimal does not change its value. Two point eight six is the same as two point eight six zero.", E('2.86 = 2.860', 'g'))
      ]),
      SC('Adding decimals', 'Example 1: 4.375 + 2.86', [
        S("Let's add four point three seven five, and two point eight six. First, write them in columns. Point under point. Then fill the gap in two point eight six with a zero.", E('  4.375') + E('+ 2.860') + V.rule('Points lined up. The extra zero fills the gap.')),
        S("Start on the right. Five plus zero is five. Seven plus six is thirteen. Write three, carry one into the hundredths.", E('5 + 0 = 5') + E('7 + 6 = 13  →  write 3, carry 1')),
        S("Three plus eight plus one is twelve. Write two, carry one. Four plus two plus one is seven. The decimal point goes straight down into the answer. So the answer is seven point two three five.", E('3 + 8 + 1 = 12  →  write 2, carry 1') + g('4.375 + 2.860 = 7.235')),
        S("Does that make sense? Four plus three is about seven. Yes, seven point two three five is sensible.", V.rule('Estimate: 4 + 3 = 7 ✓'))
      ]),
      SC('Adding decimals', 'Example 2: three numbers', [
        S("Now with three numbers. Twelve point four, plus three point six seven five, plus zero point zero eight. Be careful to line up all three points.", E('12.400') + E(' 3.675') + E(' 0.080') + V.rule('Fill every gap with a zero.')),
        S("Thousandths: zero plus five plus zero is five. Hundredths: zero plus seven plus eight is fifteen. Write five, carry one. Tenths: four plus six plus zero plus the carried one is eleven. Write one, carry one.", E('0 + 5 + 0 = 5') + E('0 + 7 + 8 = 15  →  5, carry 1') + E('4 + 6 + 0 + 1 = 11  →  1, carry 1')),
        S("Ones: two plus three plus the carried one is six. Tens: one. So the total is sixteen point one five five.", g('12.4 + 3.675 + 0.08 = 16.155'))
      ]),
      SC('Subtracting decimals', 'Example 3: 9.2 − 3.457', [
        S("Now subtraction. Nine point two take away three point four five seven. The first number has only one decimal place. So we write it as nine point two zero zero.", E('9.200') + E('−3.457')),
        S("Thousandths: zero take away seven cannot be done, and the hundredths are zero too. So we exchange from the tenths. Two tenths become one tenth. One tenth is ten hundredths. Take one of those to give the thousandths. That leaves nine hundredths, and ten thousandths.", V.rule('Tenths: 2 → 1.   Hundredths: 0 → 9.   Thousandths: 0 → 10.')),
        S("Ten take away seven is three. Nine take away five is four. One take away four cannot be done, so we exchange from the ones. Eleven take away four is seven. Eight take away three is five. The answer is five point seven four three.", E('10 − 7 = 3,   9 − 5 = 4,   11 − 4 = 7,   8 − 3 = 5') + g('9.2 − 3.457 = 5.743')),
        S("Check by adding back. Five point seven four three plus three point four five seven is nine point two. It matches.", g('5.743 + 3.457 = 9.200 ✓'))
      ]),
      SC('Subtracting decimals', 'Example 4: 10 − 2.386', [
        S("A whole number is a decimal too. Ten take away two point three eight six. Write ten as ten point zero zero zero, so the places match.", E('10.000') + E('− 2.386')),
        S("The trick with a lot of zeros is to exchange all the way along. Every zero becomes a nine, and the last place becomes ten. Ten take away six is four. Nine take away eight is one. Nine take away three is six. Nine take away two is seven.", E('10 − 6 = 4,   9 − 8 = 1,   9 − 3 = 6,   9 − 2 = 7') + g('10 − 2.386 = 7.614'))
      ]),
      SC('Mental methods', 'Bridging to a whole number', [
        S("Sometimes you can do a decimal sum in your head. One way is to bridge to a whole number. Take five point nine eight plus two point zero five.", E('5.98 + 2.05')),
        S("Five point nine eight is only two hundredths away from six. So take two hundredths from the two point zero five. That leaves two point zero three. Then six plus two point zero three is eight point zero three.", g('5.98 + 2.05 = 6 + 2.03 = 8.03'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: lining up the last digits instead of the decimal points. Four point three seven five and two point eight six are different lengths. The points must be in a straight line, not the right-hand ends.", r('4.375 + 2.86  with the ends lined up  ✗') + g('Points lined up  ✓')),
        S("Mistake two: not filling the gaps with zeros. A gap is easy to misread. Writing the zero makes every column complete.", g('2.86 → 2.860')),
        S("Mistake three: forgetting the point in the answer. The point goes straight down from the question into the answer. Always check that your answer is sensible with an estimate.", r('7235  ✗') + g('7.235  ✓'))
      ]),
      SC('In real life', 'Science measurements', [
        S("A beaker holds one point two five litres of water. A scientist pours out zero point three seven five litres. How much is left? Write one point two five as one point two five zero, and subtract.", E('1.250 − 0.375')),
        S("Exchange along. Ten take away five is five. Fourteen take away seven is seven. Eleven take away three is eight. Zero take away zero is zero. So zero point eight seven five litres are left.", g('1.250 − 0.375 = 0.875 litres'))
      ]),
      L.turn("Your turn! Number one. Work out three point seven, plus zero point four five six. Pause and try it. Fill the gaps with zeros first.", E('3.700 + 0.456'), "Line up the points. Zero plus six is six. Zero plus five is five. Seven plus four is eleven, write one, carry one. Three plus the carried one is four. The answer is four point one five six.", g('3.700 + 0.456 = 4.156')),
      L.turn("Your turn! Number two. Work out eight point zero five, take away two point three seven eight. Pause and try it.", E('8.050 − 2.378'), "Write eight point zero five as eight point zero five zero. Exchange carefully. The answer is five point six seven two.", g('8.050 − 2.378 = 5.672')),
      L.turn("Your turn! Number three. A ribbon is six metres long. A piece one point two seven five metres long is cut off. How much is left? Pause and try it.", E('6.000 − 1.275'), "Write six as six point zero zero zero and exchange along. The answer is four point seven two five.", g('6 − 1.275 = 4.725')),
      L.rec(T, "Line up the decimal points. Fill empty places with zeros. Then add or subtract just as you do with whole numbers, carrying and exchanging as you need. The point drops straight down into the answer. Check with an estimate.", ['Line up the points', 'Fill gaps with zeros', 'Carry and exchange as normal', 'Point drops straight down', 'Estimate to check'])
    ]);
  })();

  /* ---- Common multiples ---- */
  (function () {
    var T = 'What are common multiples?';
    L.full(T, [
      SC('Multiples', 'Start with the times tables', [
        S("Let's start with something you know well: the times tables. Count in sixes. Six, twelve, eighteen, twenty-four, thirty. Those numbers are called the multiples of six.", E('6, 12, 18, 24, 30, 36 …', 'b')),
        S("A multiple of a number is what you get when you multiply it by one, two, three, four and so on. Every multiple of six can be divided by six exactly, with nothing left over.", V.rule('Multiples of a number are in its times table.')),
        S("Multiples go on forever. There is no biggest one. We can always keep counting.", E('Multiples of 4: 4, 8, 12, 16, 20, 24, 28 …'))
      ]),
      SC('Common multiples', 'Example 1: 4 and 6', [
        S("Now a new idea. Some numbers are in two times tables at once. Let's write out the multiples of four and the multiples of six, and see which numbers appear in both.", E('4: 4, 8, 12, 16, 20, 24, 28, 32, 36') + E('6: 6, 12, 18, 24, 30, 36')),
        S("Look carefully. Twelve is in both lists. Twenty-four is in both lists. Thirty-six is in both lists too. Numbers that are in both lists are called common multiples.", E('Common multiples: 12, 24, 36 …', 'g')),
        S("The smallest one is twelve. We call it the lowest common multiple, or LCM for short. The LCM of four and six is twelve.", g('LCM(4, 6) = 12'))
      ]),
      SC('Common multiples', 'Example 2: 8 and 12', [
        S("Let's try eight and twelve. We will list the multiples of the bigger number, twelve, and check each one to see if eight goes into it. This is a quicker way.", E('12, 24, 36 …')),
        S("Twelve: does eight divide into twelve exactly? No, eight times one is eight, and eight times two is sixteen. Twenty-four: eight times three is twenty-four. Yes! So the LCM of eight and twelve is twenty-four.", E('12 ÷ 8 ✗') + E('24 ÷ 8 = 3 ✓', 'g') + g('LCM(8, 12) = 24'))
      ]),
      SC('Common multiples', 'Example 3: 6 and 15', [
        S("One more. The numbers are six and fifteen. List the multiples of fifteen: fifteen, thirty, forty-five.", E('15, 30, 45 …')),
        S("Fifteen is not in the six times table. Thirty is. Six times five is thirty. So the lowest common multiple of six and fifteen is thirty.", g('LCM(6, 15) = 30'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: mixing up multiples and factors. Multiples are big, they are in the times table, and they get bigger and bigger. Factors are small numbers that divide into a number. The LCM is never smaller than the numbers themselves.", V.cols([E('Multiples: 6, 12, 18 …'), E('Factors of 12: 1, 2, 3, 4, 6, 12')])),
        S("Mistake two: multiplying the two numbers and stopping. Four times six is twenty-four. Twenty-four is a common multiple, but it is not the lowest. The lowest is twelve.", r('LCM(4, 6) = 24  ✗') + g('LCM(4, 6) = 12  ✓')),
        S("Mistake three: stopping the list too early, and missing a common multiple. Keep writing multiples until you find a number in both lists.", V.rule('Keep listing until the lists meet.'))
      ]),
      SC('In real life', 'Lights and buses', [
        S("A lighthouse light flashes every six seconds. A second light flashes every ten seconds. They both flash together now. When will they next flash together?", E('6, 12, 18, 24, 30') + E('10, 20, 30')),
        S("We want the lowest common multiple of six and ten. It is thirty. So the lights flash together again after thirty seconds.", g('LCM(6, 10) = 30 seconds')),
        S("Here is another. One bus leaves a stop every twelve minutes. Another leaves every eighteen minutes. They leave together at nine o'clock. The LCM of twelve and eighteen is thirty-six. So they next leave together thirty-six minutes later.", g('LCM(12, 18) = 36 minutes'))
      ]),
      L.turn("Your turn! Number one. What is the lowest common multiple of nine and fifteen? Pause and try it.", E('LCM(9, 15)'), "List the multiples of fifteen: fifteen, thirty, forty-five. Nine goes into forty-five five times. So the answer is forty-five.", g('LCM(9, 15) = 45')),
      L.turn("Your turn! Number two. What is the lowest common multiple of ten and twenty-five? Pause and try it.", E('LCM(10, 25)'), "Multiples of twenty-five: twenty-five, fifty. Ten goes into fifty five times. So the answer is fifty.", g('LCM(10, 25) = 50')),
      L.turn("Your turn! Number three. One train leaves every eight minutes. Another leaves every twenty minutes. They leave together now. After how many minutes will they next leave together? Pause and try it.", E('LCM(8, 20)'), "Multiples of twenty: twenty, forty. Eight goes into forty five times. So they leave together again after forty minutes.", g('LCM(8, 20) = 40 minutes')),
      L.rec(T, "A multiple is in a times table. A common multiple is in both lists. The lowest common multiple is the smallest of them. List the multiples of the bigger number and test each one. Use it when two things repeat and you want to know when they meet again.", ['Multiples: times-table answers', 'Common: in both lists', 'LCM: the smallest common one', 'List the bigger number first', 'Use it for repeating events'])
    ]);
  })();

  /* ---- Common factors ---- */
  (function () {
    var T = 'What are common factors?';
    L.full(T, [
      SC('Factors', 'Numbers that divide exactly', [
        S("Last time we looked at multiples, which are big numbers in the times tables. Today we look at factors, which are the small numbers that fit into a number exactly.", V.rule('A factor divides into a number with nothing left over.')),
        S("Take twelve. Can you share twelve sweets equally between two people? Yes. Between three? Yes. Four? Yes. Five? No, there would be some left over. So two, three and four are factors of twelve, and five is not.", E('12 ÷ 2 = 6   12 ÷ 3 = 4   12 ÷ 4 = 3')),
        S("Factors come in pairs. Think of the ways to make twelve by multiplying. One times twelve. Two times six. Three times four. So the factors of twelve are one, two, three, four, six and twelve.", E('1 × 12,  2 × 6,  3 × 4') + g('Factors of 12: 1, 2, 3, 4, 6, 12'))
      ]),
      SC('Common factors', 'Example 1: 18 and 24', [
        S("Let's find the factors of eighteen first. One times eighteen. Two times nine. Three times six. So the factors of eighteen are one, two, three, six, nine and eighteen.", E('18: 1, 2, 3, 6, 9, 18')),
        S("Now twenty-four. One times twenty-four. Two times twelve. Three times eight. Four times six. So the factors of twenty-four are one, two, three, four, six, eight, twelve and twenty-four.", E('24: 1, 2, 3, 4, 6, 8, 12, 24')),
        S("Which numbers are in both lists? One, two, three and six. These are the common factors of eighteen and twenty-four.", E('Common factors: 1, 2, 3, 6', 'g')),
        S("The biggest of them is six. We call it the highest common factor, or HCF for short. The HCF of eighteen and twenty-four is six.", g('HCF(18, 24) = 6'))
      ]),
      SC('Common factors', 'Example 2: 30 and 45', [
        S("Now thirty and forty-five. Factors of thirty: one, two, three, five, six, ten, fifteen, thirty. Factors of forty-five: one, three, five, nine, fifteen, forty-five.", E('30: 1, 2, 3, 5, 6, 10, 15, 30') + E('45: 1, 3, 5, 9, 15, 45')),
        S("The common factors are one, three, five and fifteen. The highest is fifteen. So the HCF of thirty and forty-five is fifteen.", g('HCF(30, 45) = 15'))
      ]),
      SC('When there is only one', 'Example 3: 7 and 12', [
        S("Sometimes the only common factor is one. Seven has the factors one and seven. Twelve has the factors one, two, three, four, six and twelve. Only one is in both lists.", E('7: 1, 7') + E('12: 1, 2, 3, 4, 6, 12')),
        S("So the highest common factor of seven and twelve is one. Numbers like these are called coprime.", g('HCF(7, 12) = 1'))
      ]),
      SC('Using the HCF', 'Simplifying fractions', [
        S("Here is why the HCF is useful. It lets us simplify a fraction in one step. Take eighteen twenty-fourths. We found that the HCF of eighteen and twenty-four is six.", E('18/24')),
        S("Divide the top and the bottom by six. Eighteen divided by six is three. Twenty-four divided by six is four. So eighteen twenty-fourths is the same as three quarters. It cannot be simplified any more.", g('18/24 = 3/4'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: missing factors because you forgot the pairs. Always work through in order. One times, two times, three times, and stop when the pairs meet.", V.rule('Find them in pairs: 1 × 24, 2 × 12, 3 × 8, 4 × 6.')),
        S("Mistake two: mixing up factors and multiples. Factors are smaller than or equal to the number. Multiples are bigger than or equal to the number. The HCF is never bigger than the smaller number.", V.cols([E('Factors of 12: 1, 2, 3, 4, 6, 12'), E('Multiples of 12: 12, 24, 36 …')])),
        S("Mistake three: giving a common factor instead of the highest one. Three is a common factor of eighteen and twenty-four. But the highest is six.", r('HCF(18, 24) = 3  ✗') + g('HCF(18, 24) = 6  ✓'))
      ]),
      SC('In real life', 'Packing', [
        S("A teacher has thirty pencils and forty-five rubbers. She wants to make identical packs. Every pack must have the same number of pencils and the same number of rubbers, with nothing left over. What is the most packs she can make?", E('30 pencils, 45 rubbers')),
        S("We need the highest common factor of thirty and forty-five. It is fifteen. So she can make fifteen packs. Each pack has two pencils and three rubbers.", g('HCF(30, 45) = 15 packs') + E('30 ÷ 15 = 2    45 ÷ 15 = 3'))
      ]),
      L.turn("Your turn! Number one. What is the highest common factor of twenty and thirty-two? Pause and try it.", E('HCF(20, 32)'), "Factors of twenty: one, two, four, five, ten, twenty. Which of these divide thirty-two? One, two and four. The highest is four.", g('HCF(20, 32) = 4')),
      L.turn("Your turn! Number two. What is the highest common factor of thirty-six and fifty-four? Pause and try it.", E('HCF(36, 54)'), "Factors of thirty-six include eighteen. Eighteen divides fifty-four exactly, three times. Nothing bigger than eighteen divides both. So the answer is eighteen.", g('HCF(36, 54) = 18')),
      L.turn("Your turn! Number three. Simplify twenty-eight forty-seconds. Pause and try it.", E('28/42'), "The HCF of twenty-eight and forty-two is fourteen. Divide top and bottom by fourteen. We get two thirds.", g('28/42 = 2/3')),
      L.rec(T, "A factor divides in exactly, and factors come in pairs. Common factors are in both lists. The highest common factor is the biggest one. Use the HCF to simplify fractions and to share things into equal groups.", ['Factors come in pairs', 'Common: in both lists', 'HCF: the biggest', 'HCF is never above the smaller number', 'Use it to simplify fractions'])
    ]);
  })();
  /* ---- Fractions ---- */
  (function () {
    var T = 'What are fractions?';
    L.full(T, [
      SC('A fraction', 'Start with the basics', [
        S("Imagine a chocolate bar made of eight equal squares. You eat three of them. We can say you ate three eighths of the bar. That is a fraction.", LK.fbar(3, 8, 300, 280)),
        S("A fraction has two numbers. The bottom number is called the denominator. It tells us how many equal parts the whole is split into. The top number is called the numerator. It tells us how many of those parts we are talking about.", E('3/8', 'g') + V.cols([V.card('Denominator: parts in the whole', 'b', true), V.card('Numerator: parts we have', 'g', true)], 2)),
        S("The word equal is very important. A fraction only works when all the parts are the same size. If the pieces are different sizes, we cannot call them eighths.", V.rule('Every part must be the same size.'))
      ]),
      SC('Fractions of shapes', 'Example 1: two fifths', [
        S("Here is a circle cut into five equal slices. Two of the slices are shaded. So the fraction shaded is two fifths.", LK.pie(2, 5, { r: 50 }) + E('2/5', 'g')),
        S("How many slices are not shaded? Three. So three fifths of the circle is not shaded. The two fractions together make five fifths, which is the whole circle.", E('2/5 + 3/5 = 5/5 = 1', 'g'))
      ]),
      SC('A fraction of an amount', 'Example 2: 3/8 of 64', [
        S("Now we find a fraction of a number. What is three eighths of sixty-four? Think of sixty-four split into eight equal groups.", E('3/8 of 64')),
        S("Step one. The denominator is eight, so divide by eight to find one eighth. Sixty-four divided by eight is eight. One eighth of sixty-four is eight.", E('64 ÷ 8 = 8', 'b') + V.rule('Divide by the bottom number.')),
        S("Step two. The numerator is three, so we want three of those groups. Multiply by three. Eight times three is twenty-four.", E('8 × 3 = 24', 'b') + V.rule('Multiply by the top number.')),
        S("So three eighths of sixty-four is twenty-four.", g('3/8 of 64 = 24'))
      ]),
      SC('A fraction of an amount', 'Example 3: 5/8 of 72', [
        S("Let's do it again with five eighths of seventy-two. First divide by the denominator. Seventy-two divided by eight is nine. Then multiply by the numerator. Nine times five is forty-five.", E('72 ÷ 8 = 9') + E('9 × 5 = 45') + g('5/8 of 72 = 45'))
      ]),
      SC('Fractions are divisions', 'Example 4: 3 ÷ 4', [
        S("Here is a surprising fact. A fraction is also a division. Three quarters means three divided by four. Share three pizzas between four people. Each person gets three quarters of a pizza.", E('3/4 = 3 ÷ 4')),
        S("On a calculator, three divided by four is zero point seven five. So three quarters is the same as zero point seven five. This is how fractions and decimals are connected.", g('3/4 = 0.75')),
        S("One eighth is one divided by eight, which is zero point one two five.", g('1/8 = 0.125'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: parts that are not equal. A rectangle cut into one big piece and two small pieces is not cut into thirds.", V.rule('Equal parts only.')),
        S("Mistake two: mixing up the numerator and the denominator. The denominator is the down number, and it is the total number of parts. Three eighths is not eight thirds.", r('8/3 for three eighths  ✗') + g('3/8  ✓')),
        S("Mistake three: forgetting to multiply by the numerator. To find three eighths of sixty-four, dividing by eight only gives one eighth. You still need to multiply by three.", r('3/8 of 64 = 8  ✗') + g('3/8 of 64 = 24  ✓'))
      ]),
      SC('In real life', 'Recipes and classes', [
        S("A recipe uses two thirds of a three hundred gram bag of oats. One third of three hundred is one hundred. So two thirds is two hundred grams.", E('300 ÷ 3 = 100,  100 × 2 = 200') + g('2/3 of 300 g = 200 g')),
        S("In a class of twenty-eight pupils, three quarters walk to school. One quarter of twenty-eight is seven. So three quarters is twenty-one pupils.", E('28 ÷ 4 = 7,  7 × 3 = 21') + g('21 pupils walk'))
      ]),
      L.turn("Your turn! Number one. What is five sixths of forty-eight? Pause and try it.", E('5/6 of 48'), "Forty-eight divided by six is eight. Eight times five is forty.", g('5/6 of 48 = 40')),
      L.turn("Your turn! Number two. What is three fifths of thirty-five? Pause and try it.", E('3/5 of 35'), "Thirty-five divided by five is seven. Seven times three is twenty-one.", g('3/5 of 35 = 21')),
      L.turn("Your turn! Number three. Write one fifth as a decimal. Pause and try it.", E('1/5 = 1 ÷ 5'), "One divided by five is zero point two.", g('1/5 = 0.2')),
      L.rec(T, "A fraction is equal parts of a whole. The denominator says how many parts. The numerator says how many we have. To find a fraction of an amount, divide by the denominator, then multiply by the numerator. A fraction is also a division.", ['Equal parts', 'Denominator: how many parts', 'Numerator: how many we have', '÷ bottom, then × top', 'A fraction is a division'])
    ]);
  })();

  /* ---- Equivalent fractions ---- */
  (function () {
    var T = 'What are equivalent fractions?';
    L.full(T, [
      SC('Same amount, different numbers', 'Start with a picture', [
        S("Look at these three bars. The first bar is split into two parts, and one part is shaded. That is one half. The second bar is split into four parts, and two are shaded. The third is split into eight parts, and four are shaded.", LK.fbar(1, 2, 280, 280) + LK.fbar(2, 4, 280, 280) + LK.fbar(4, 8, 280, 280)),
        S("Look closely. The shaded part is exactly the same size in all three bars. So one half, two quarters and four eighths are equal. We call them equivalent fractions. Equivalent means has the same value.", E('1/2 = 2/4 = 4/8', 'g'))
      ]),
      SC('Making equivalent fractions', 'Example 1: multiply top and bottom', [
        S("How can we make equivalent fractions without a picture? Multiply the numerator and the denominator by the same number. Let's start with three fifths and multiply by two.", E('3/5')),
        S("Three times two is six. Five times two is ten. So three fifths is equal to six tenths.", E('3/5 = 6/10', 'g') + V.rule('Do the same to the top and the bottom.')),
        S("We can do it again, multiplying by three. Three times three is nine. Five times three is fifteen. So three fifths is also nine fifteenths.", E('3/5 = 9/15', 'g')),
        S("Why does this work? Multiplying the top and bottom by the same number is the same as multiplying the fraction by one, and that never changes its value.", V.rule('× 2 over 2 is × 1, so the value stays the same.'))
      ]),
      SC('Simplifying', 'Example 2: divide top and bottom', [
        S("We can go the other way. We divide the top and the bottom by the same number. This is called simplifying. Take twelve sixteenths.", E('12/16')),
        S("Twelve and sixteen can both be divided by four. Twelve divided by four is three. Sixteen divided by four is four. So twelve sixteenths is three quarters.", g('12/16 = 3/4')),
        S("Is three quarters as simple as it can get? Three and four have no common factor, apart from one. So yes. It is in its simplest form.", V.rule('Simplest form: no more common factors.'))
      ]),
      SC('Simplifying', 'Example 3: thirty forty-fifths', [
        S("Here is a bigger one. Thirty forty-fifths. What is the biggest number that goes into both thirty and forty-five? It is fifteen. We divide the top and bottom by fifteen. Thirty divided by fifteen is two. Forty-five divided by fifteen is three. The answer is two thirds.", E('30/45') + g('30/45 = 2/3'))
      ]),
      SC('Missing numbers', 'Example 4: 2/3 = ?/12', [
        S("Now a missing number. Two thirds equals what over twelve? Look at the bottoms first. Three has become twelve. What did we multiply by? Four.", E('2/3 = ?/12')),
        S("We must do the same to the top. Two times four is eight. So two thirds is equal to eight twelfths.", g('2/3 = 8/12'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: adding the same number to the top and bottom. One half plus one on top and bottom gives two thirds, but two thirds is not equal to one half. We must multiply or divide, never add.", r('1/2 = 2/3  ✗') + g('1/2 = 2/4  ✓')),
        S("Mistake two: doing something to the top but not the bottom. If you multiply the top by four, you must multiply the bottom by four as well.", V.rule('Same number, top and bottom.')),
        S("Mistake three: stopping too soon when simplifying. Eight twelfths can be divided by two to give four sixths. But that is not finished. Divide by two again to get two thirds.", r('8/12 = 4/6  (not finished)  ✗') + g('8/12 = 2/3  ✓'))
      ]),
      SC('In real life', 'Pizza', [
        S("A pizza has eight slices. You eat four slices. You have eaten four eighths. But your friend ate half of another pizza. Who ate more? Four eighths is equal to a half, so you both ate the same amount.", g('4/8 = 1/2'))
      ]),
      L.turn("Your turn! Number one. Find the missing number. Three quarters equals how many twentieths? Pause and try it.", E('3/4 = ?/20'), "Four times five is twenty. So three times five is fifteen. Three quarters equals fifteen twentieths.", g('3/4 = 15/20')),
      L.turn("Your turn! Number two. Simplify forty sixtieths fully. Pause and try it.", E('40/60'), "Divide top and bottom by twenty. Forty divided by twenty is two. Sixty divided by twenty is three. The answer is two thirds.", g('40/60 = 2/3')),
      L.turn("Your turn! Number three. Fill in the missing number. Four tenths equals what over five? Pause and try it.", E('4/10 = ?/5'), "Ten divided by two is five. So divide the top by two as well. Four divided by two is two. The answer is two fifths.", g('4/10 = 2/5')),
      L.rec(T, "Equivalent fractions show the same amount. Multiply the top and the bottom by the same number to make one. Divide the top and the bottom by the same number to simplify. Never add or subtract the same number.", ['Same amount, different numbers', '× top and bottom by the same', '÷ to simplify', 'Never add to top and bottom', 'Scale to find missing numbers'])
    ]);
  })();

  /* ---- Mixed numbers and improper fractions ---- */
  (function () {
    var T = 'What are mixed numbers and improper fractions?';
    L.full(T, [
      SC('More than one whole', 'Two ways to write it', [
        S("So far our fractions have been smaller than one whole. But what if you have more than one? Imagine you eat two whole pizzas and three quarters of a third pizza.", E('2 3/4')),
        S("We can write that as a mixed number: two and three quarters. It has a whole number part and a fraction part.", E('2 3/4', 'g') + V.rule('Mixed number: wholes and a fraction.')),
        S("We can also count in quarters only. Each pizza has four quarters. Two pizzas make eight quarters. Add three more quarters. That makes eleven quarters.", E('11/4', 'g')),
        S("Eleven quarters is called an improper fraction, because the top is bigger than the bottom. Two and three quarters, and eleven quarters, are two ways of writing the same amount.", E('2 3/4 = 11/4', 'g'))
      ]),
      SC('Improper to mixed', 'Example 1: 17/5', [
        S("How do we change seventeen fifths to a mixed number? We ask: how many whole ones are inside? Divide the top by the bottom. Seventeen divided by five is three, with two left over.", E('17 ÷ 5 = 3 remainder 2', 'b')),
        S("The three is the number of wholes. The remainder of two goes over the same denominator, five. So seventeen fifths is three and two fifths.", g('17/5 = 3 2/5'))
      ]),
      SC('Mixed to improper', 'Example 2: 4 2/3', [
        S("Now the other way. How do we change four and two thirds into an improper fraction? Each whole has three thirds. So four wholes make four times three, which is twelve thirds.", E('4 × 3 = 12 thirds', 'b')),
        S("Now add the two thirds we already had. Twelve plus two is fourteen. So four and two thirds is fourteen thirds.", g('4 2/3 = 14/3') + V.rule('Whole × denominator, then add the numerator.'))
      ]),
      SC('Mixed to improper', 'Example 3: 7 1/4', [
        S("One more. Seven and one quarter. Seven times four is twenty-eight. Add the one. We get twenty-nine quarters.", E('7 × 4 + 1 = 29') + g('7 1/4 = 29/4'))
      ]),
      SC('On a number line', 'Where does it sit?', [
        S("A number line helps us see mixed numbers. Two and three quarters sits between two and three. It is three quarters of the way along from two.", V.nl(0, 4, { tick: 0.25, marks: [[2.75, 22]] })),
        S("That is the same place as eleven quarters. You can count along in quarters, one, two, three, up to eleven, and arrive at the same spot.", E('11/4 = 2 3/4', 'g'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: forgetting the remainder. Seventeen divided by five is three with two left over. The two matters. The answer is three and two fifths, not just three.", r('17/5 = 3  ✗') + g('17/5 = 3 2/5  ✓')),
        S("Mistake two: changing the denominator. When we change form, the denominator stays the same. Three and two fifths has fifths in it, so the improper fraction must have fifths too.", V.rule('Same denominator. Only the numerator changes.')),
        S("Mistake three: forgetting to add the numerator. For four and two thirds, four times three is twelve. We must add the two, to get fourteen.", r('4 2/3 = 12/3  ✗') + g('4 2/3 = 14/3  ✓'))
      ]),
      SC('In real life', 'Measuring', [
        S("A carpenter needs nine halves of a metre of wood. Two halves make one metre, so nine halves is four whole metres and one half left over. That is four and a half metres.", g('9/2 = 4 1/2 m'))
      ]),
      L.turn("Your turn! Number one. Write twenty-three sixths as a mixed number. Pause and try it.", E('23/6'), "Twenty-three divided by six is three, with five left over. The answer is three and five sixths.", g('23/6 = 3 5/6')),
      L.turn("Your turn! Number two. Write five and three eighths as an improper fraction. Pause and try it.", E('5 3/8'), "Five times eight is forty. Add three to make forty-three. The answer is forty-three eighths.", g('5 3/8 = 43/8')),
      L.turn("Your turn! Number three. Write thirty-one fifths as a mixed number. Pause and try it.", E('31/5'), "Thirty-one divided by five is six, with one left over. The answer is six and one fifth.", g('31/5 = 6 1/5')),
      L.rec(T, "An improper fraction has a numerator bigger than its denominator. A mixed number has wholes and a fraction. To change improper to mixed, divide, and put the remainder over the same denominator. To change mixed to improper, multiply the whole by the denominator and add the numerator.", ['Improper → mixed: divide', 'Remainder over the same bottom', 'Mixed → improper: × then +', 'Same amount, two ways'])
    ]);
  })();

  /* ---- Percentages ---- */
  (function () {
    var T = 'What are percentages?';
    L.full(T, [
      SC('Per cent', 'Out of one hundred', [
        S("The word per cent means out of one hundred. A percent sign looks like this. Percent comes from Latin, and it means for every hundred.", E('%', 'b')),
        S("Imagine a square split into one hundred small squares. If forty-five of them are shaded, then forty-five per cent of the square is shaded.", LK.hsq(45)),
        S("So forty-five per cent is the same as forty-five hundredths. As a fraction, that is forty-five over one hundred. As a decimal, it is zero point four five.", E('45% = 45/100 = 0.45', 'g'))
      ]),
      SC('Key percentages', 'Learn these', [
        S("There are a few percentages worth knowing by heart. Fifty per cent is a half. Twenty-five per cent is a quarter. Seventy-five per cent is three quarters. Ten per cent is a tenth. And one per cent is one hundredth.", V.tbl([['50%', '½'], ['25%', '¼'], ['75%', '¾'], ['10%', '1/10'], ['1%', '1/100']], ['Percentage', 'Fraction'])),
        S("They are useful because we can find them quickly. To find fifty per cent of a number, halve it. To find ten per cent, divide by ten. To find one per cent, divide by one hundred.", V.rule('50% ÷ 2.   10% ÷ 10.   1% ÷ 100.'))
      ]),
      SC('Building percentages', 'Example 1: 35% of £60', [
        S("How do we find thirty-five per cent of sixty pounds? We can build it from ten per cent and five per cent.", E('35% of £60')),
        S("Ten per cent of sixty is six pounds. So thirty per cent is three lots of six, which is eighteen pounds.", E('10% = £6') + E('30% = £18')),
        S("Five per cent is half of ten per cent, so that is three pounds. Add it on. Eighteen plus three is twenty-one pounds.", E('5% = £3') + g('35% = £18 + £3 = £21'))
      ]),
      SC('Building percentages', 'Example 2: 15% of 80', [
        S("Fifteen per cent of eighty. Ten per cent of eighty is eight. Five per cent is half of that, four. Eight plus four is twelve.", E('10% = 8,  5% = 4') + g('15% of 80 = 12'))
      ]),
      SC('One amount as a percentage', 'Example 3: 18 out of 40', [
        S("Now the other way round. A pupil scores eighteen out of forty. What is that as a percentage? Write it as a fraction first: eighteen over forty.", E('18/40')),
        S("Divide the top by the bottom. Eighteen divided by forty is zero point four five. Then multiply by one hundred to turn it into a percentage. That gives forty-five per cent.", E('18 ÷ 40 = 0.45') + g('0.45 × 100 = 45%')),
        S("Another way. Twelve out of twenty-five. Multiply the bottom by four to get one hundred, and the top by four as well. Twelve times four is forty-eight. So forty-eight per cent.", g('12/25 = 48/100 = 48%'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: thinking ten per cent means dividing by one hundred. Ten per cent means dividing by ten. One per cent is the one you divide by one hundred.", r('10% of 50 = 0.5  ✗') + g('10% of 50 = 5  ✓')),
        S("Mistake two: forgetting what the percentage is of. Twenty per cent of forty-five pounds is nine pounds, but twenty per cent of ninety pounds is eighteen pounds. A percentage always needs a whole.", V.rule('Always ask: per cent of what?')),
        S("Mistake three: forgetting to multiply by one hundred at the end. Eighteen divided by forty is zero point four five. That is a decimal. To make it a percentage, multiply by one hundred.", r('18 out of 40 = 0.45%  ✗') + g('18 out of 40 = 45%  ✓'))
      ]),
      SC('In real life', 'A discount', [
        S("A coat costs forty-five pounds. In the sale it has twenty per cent off. Ten per cent of forty-five is four pounds fifty. So twenty per cent is nine pounds.", E('10% = £4.50') + E('20% = £9')),
        S("The saving is nine pounds. So the new price is forty-five minus nine, which is thirty-six pounds.", g('£45 − £9 = £36'))
      ]),
      L.turn("Your turn! Number one. What is five per cent of sixty? Pause and try it.", E('5% of 60'), "Ten per cent of sixty is six. Five per cent is half of that. The answer is three.", g('5% of 60 = 3')),
      L.turn("Your turn! Number two. What is twenty-five per cent of ninety-six? Pause and try it.", E('25% of 96'), "Twenty-five per cent is a quarter. Ninety-six divided by four is twenty-four.", g('25% of 96 = 24')),
      L.turn("Your turn! Number three. A girl scores twenty-four out of thirty. What percentage is that? Pause and try it.", E('24/30'), "Twenty-four divided by thirty is zero point eight. Multiply by one hundred. The answer is eighty per cent.", g('24/30 = 80%')),
      L.rec(T, "Per cent means out of one hundred. Learn the key percentages. Build other percentages from ten per cent, five per cent and one per cent. To write one amount as a percentage, divide the part by the whole and multiply by one hundred.", ['Per cent = out of 100', 'Key: 50%, 25%, 10%, 1%', 'Build from 10% and 1%', 'Part ÷ whole × 100'])
    ]);
  })();
  /* ---- Financial maths ---- */
  (function () {
    var T = 'What is financial maths?';
    L.full(T, [
      SC('Maths with money', 'What is financial maths?', [
        S("Money is all around us. We earn it, spend it, save it and share it. Financial maths is simply the maths we use to look after money sensibly.", V.list(['Earning', 'Spending', 'Saving', 'Comparing prices'])),
        S("The good news is that you do not need new tricks. Most money problems use things you already know: multiplying, dividing, adding, subtracting and percentages. We just use them in real situations.", V.rule('Money problems use the maths you already know.')),
        S("In this lesson we will look at four ideas. Earning, saving with interest, finding the best value, and profit and loss.", V.cards(['Earn', 'Save', 'Value', 'Profit'], ['b', 'g', 'b', 'g'], true))
      ]),
      SC('Earning', 'Example 1: hourly pay', [
        S("Ali has a part-time job. He earns nine pounds fifty for every hour he works. Last week he worked sixteen hours. How much did he earn?", E('£9.50 per hour, 16 hours')),
        S("Pay is the pay for one hour, multiplied by the number of hours. So we work out sixteen times nine pounds fifty. Ten times nine pounds fifty is ninety-five pounds. Six times nine pounds fifty is fifty-seven pounds. Add them together.", E('10 × £9.50 = £95') + E('6 × £9.50 = £57')),
        S("Ninety-five plus fifty-seven is one hundred and fifty-two pounds. Ali earned one hundred and fifty-two pounds.", g('16 × £9.50 = £152') + V.rule('Pay = rate per hour × hours.'))
      ]),
      SC('Saving and interest', 'Example 2: money that grows', [
        S("When you put money in a bank, the bank pays you a little extra for keeping it there. This extra is called interest. It is a percentage of the money you saved.", V.rule('Interest = a percentage of your savings.')),
        S("Suppose you save two hundred pounds. The bank pays two per cent interest for a year. What is two per cent of two hundred? One per cent is two pounds. So two per cent is four pounds.", E('1% of £200 = £2') + E('2% of £200 = £4')),
        S("After a year, you have your two hundred pounds, plus four pounds of interest. That makes two hundred and four pounds.", g('£200 + £4 = £204'))
      ]),
      SC('Best value', 'Example 3: price for one', [
        S("Which is the better buy? A six-pack of juice cartons costs three pounds sixty. A four-pack costs two pounds fifty-six. The bigger pack costs more, but it also has more cartons. How do we compare?", E('6 for £3.60   or   4 for £2.56')),
        S("We find the price for one carton in each pack. Three pounds sixty divided by six is sixty pence. Two pounds fifty-six divided by four is sixty-four pence.", E('£3.60 ÷ 6 = 60p') + E('£2.56 ÷ 4 = 64p')),
        S("Sixty pence is less than sixty-four pence. So the six-pack is the better value, because each carton costs less.", g('Best value: the six-pack') + V.rule('Compare the price for one.'))
      ]),
      SC('Profit and loss', 'Example 4: buying and selling', [
        S("A trader buys a bike for eighty pounds and sells it for one hundred pounds. He sold it for more than he paid, so he made a profit.", E('Buy £80,  sell £100')),
        S("Profit is the selling price take away the buying price. One hundred minus eighty is twenty pounds profit.", g('£100 − £80 = £20 profit')),
        S("If he had sold the bike for sixty pounds instead, he would have sold it for less than he paid. That is called a loss. Eighty minus sixty is a loss of twenty pounds.", E('£80 − £60 = £20 loss', 'b'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: mixing pounds and pence in the same sum. Three pounds sixty and sixty pence cannot be added just by writing three, sixty and sixty. Change them all to pounds, or all to pence first.", r('£3.60 + 60  ✗') + g('£3.60 + £0.60 = £4.20  ✓')),
        S("Mistake two: comparing the total prices when the amounts are different. The bigger pack costs more, but that does not mean it is worse value. Always work out the price for one.", V.rule('Different amounts? Compare the price for one.')),
        S("Mistake three: mixing up profit and loss. If you sell for more than you paid, it is a profit. If you sell for less, it is a loss.", V.tbl([['Sell > buy', 'Profit'], ['Sell < buy', 'Loss']], ['', '']))
      ]),
      SC('In real life', 'Putting it together', [
        S("Maya earns twelve pounds an hour. She works for seven hours. That is seven times twelve, eighty-four pounds. She puts ten per cent into a savings account. Ten per cent of eighty-four pounds is eight pounds forty.", E('7 × £12 = £84') + E('10% of £84 = £8.40', 'g'))
      ]),
      L.turn("Your turn! Number one. You earn twelve pounds an hour for seven hours. How much do you earn? Pause and try it.", E('7 × £12'), "Seven times twelve is eighty-four pounds.", g('£84')),
      L.turn("Your turn! Number two. You save three hundred pounds. The bank pays four per cent interest for a year. How much interest is that? Pause and try it.", E('4% of £300'), "One per cent of three hundred is three pounds. Four per cent is twelve pounds.", g('4% of £300 = £12')),
      L.turn("Your turn! Number three. A pack of five pens costs two pounds fifty. A pack of eight pens costs three pounds sixty. Which is better value? Pause and try it.", E('£2.50 ÷ 5   and   £3.60 ÷ 8'), "Two pounds fifty divided by five is fifty pence. Three pounds sixty divided by eight is forty-five pence. The pack of eight is better value.", g('45p < 50p: pack of 8')),
      L.rec(T, "Financial maths uses multiplication, division and percentages. Pay is the rate multiplied by the hours. Interest is a percentage of what you save. For best value, work out the price for one. Profit is the selling price take away the buying price.", ['Pay = rate × hours', 'Interest: a percentage', 'Best value: price for one', 'Profit = selling − buying'])
    ]);
  })();

  /* ---- Budgeting ---- */
  (function () {
    var T = 'What is budgeting?';
    L.full(T, [
      SC('A budget', 'A plan for money', [
        S("Have you ever spent all your pocket money in one go, and then had nothing left? A budget helps you stop that from happening. A budget is a plan for your money.", E('A budget is a plan.', 'b')),
        S("There are two things in every budget. Income is the money coming in. Spending is the money going out. A budget compares the two.", V.cols([V.card('Income: money in', 'g', true), V.card('Spending: money out', 'b', true)], 2)),
        S("The important sum is income take away spending. What is left over can be saved. If the answer is below zero, you have spent more than you had.", E('Income − Spending = Left over', 'g'))
      ]),
      SC('A weekly budget', 'Example 1: pocket money', [
        S("Maya gets fifteen pounds a week. That is her income. She needs six pounds for bus fares and four pounds for snacks. Those are her spending.", V.tbl([['Income', '£15'], ['Bus', '−£6'], ['Snacks', '−£4']], ['', 'Amount'])),
        S("Add up the spending first. Six plus four is ten pounds. Then take that from the income. Fifteen take away ten leaves five pounds.", E('£6 + £4 = £10') + E('£15 − £10 = £5', 'g')),
        S("Maya has five pounds left over each week. She can save it.", V.tbl([['Income', '£15'], ['Bus', '−£6'], ['Snacks', '−£4'], ['Left', '£5']], ['', 'Amount']))
      ]),
      SC('Saving for something', 'Example 2: how many weeks?', [
        S("Maya wants a jacket. It costs sixty pounds. She saves five pounds each week. How many weeks will it take? We need to see how many fives fit into sixty. That is a division.", E('£60 ÷ £5')),
        S("Sixty divided by five is twelve. So she needs twelve weeks.", g('£60 ÷ £5 = 12 weeks'))
      ]),
      SC('Over budget', 'Example 3: spending too much', [
        S("Sometimes spending is bigger than income. A family has an income of two hundred pounds for the week. They plan to spend two hundred and thirty pounds.", E('Income £200,  spending £230')),
        S("Two hundred take away two hundred and thirty is minus thirty pounds. The negative number means they are thirty pounds short. They need to spend less, or find more money.", E('£200 − £230 = −£30', 'b') + V.rule('Negative: you have overspent.'))
      ]),
      SC('Planning ahead', 'Example 4: a monthly budget', [
        S("A budget can be for a month too. Sam earns four hundred pounds a month from a paper round and a job. He spends ninety pounds on his phone, one hundred and twenty on food and fun, and sixty on travel.", V.tbl([['Income', '£400'], ['Phone', '−£90'], ['Food and fun', '−£120'], ['Travel', '−£60']], ['', 'Amount'])),
        S("The spending is ninety plus one hundred and twenty plus sixty. That is two hundred and seventy pounds. Take that from four hundred, and Sam has one hundred and thirty pounds left to save.", E('£90 + £120 + £60 = £270') + g('£400 − £270 = £130'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: leaving out regular costs. People often remember big things but forget small regular ones, like bus fares or phone bills. They add up quickly.", V.rule('List every regular cost.')),
        S("Mistake two: taking spending away one at a time and losing track. It is safer to add up all the spending first, then take the total away once.", V.rule('Total the spending. Then subtract once.')),
        S("Mistake three: mixing weekly and monthly amounts. A bus fare of six pounds a week is not six pounds a month. Make sure everything is for the same length of time.", V.rule('Same period for every number.'))
      ]),
      SC('In real life', 'A class party', [
        S("A class has one hundred and twenty pounds to spend on a party. Food costs seventy-five pounds. Decorations cost twenty-eight pounds. How much is left for prizes?", E('£120, food £75, decorations £28')),
        S("The spending is seventy-five plus twenty-eight. That is one hundred and three pounds. One hundred and twenty take away one hundred and three leaves seventeen pounds for prizes.", E('£75 + £28 = £103') + g('£120 − £103 = £17'))
      ]),
      L.turn("Your turn! Number one. Income is two hundred and fifty pounds. Spending is one hundred and eighty-five pounds. How much is left? Pause and try it.", E('£250 − £185'), "Two hundred and fifty take away one hundred and eighty-five is sixty-five pounds.", g('£65')),
      L.turn("Your turn! Number two. You want to buy a game that costs forty-five pounds. You save nine pounds a week. How many weeks? Pause and try it.", E('£45 ÷ £9'), "Forty-five divided by nine is five weeks.", g('5 weeks')),
      L.turn("Your turn! Number three. A family has an income of three hundred pounds. They spend one hundred and sixty on food, ninety on bills and sixty-five on travel. How much is left? Pause and try it.", E('£160 + £90 + £65'), "The spending totals three hundred and fifteen pounds. Three hundred take away three hundred and fifteen is minus fifteen pounds. They are fifteen pounds over budget.", g('£300 − £315 = −£15')),
      L.rec(T, "A budget compares income with spending. Add up all the spending first, then take it from the income. Whatever is left can be saved. If the answer is negative, you have overspent and something must change.", ['Income − spending', 'Total the spending first', 'Save the difference', 'Negative means overspent'])
    ]);
  })();

  /* ---- Choosing units ---- */
  (function () {
    var T = 'How do you choose appropriate units of measurement?';
    L.full(T, [
      SC('The right unit', 'Why units matter', [
        S("Imagine telling a friend that your pencil is zero point zero zero zero one five kilometres long. It is true, but it is a very silly way to say it. A better way is fifteen centimetres.", E('15 cm', 'g')),
        S("We choose a unit that suits the size of the thing we are measuring. That way the number is easy to say, easy to picture and easy to use.", V.rule('Choose a unit that fits the size.')),
        S("There are four main kinds of measurement in this lesson. Length, mass, capacity and time. Each has small, medium and large units.", V.tbl([['Length', 'mm, cm, m, km'], ['Mass', 'g, kg, tonnes'], ['Capacity', 'ml, l'], ['Time', 's, min, h, days']], ['Measure', 'Units']))
      ]),
      SC('Length', 'Example 1: how long?', [
        S("A grain of rice is only a few millimetres long. A pencil is about fifteen centimetres. A door is about two metres high. A football pitch is about one hundred metres long. And Glasgow to Edinburgh is about seventy-five kilometres.", E('mm · cm · m · km', 'g')),
        S("A useful trick is to remember one thing for each unit. A fingernail is about a centimetre wide. A big step is about a metre. A kilometre takes about ten minutes to walk.", V.tbl([['1 cm', 'fingernail'], ['1 m', 'big step'], ['1 km', '10 minute walk']], ['Unit', 'Think of']))
      ]),
      SC('Mass and capacity', 'Example 2: heavy and full', [
        S("Mass is how heavy something is. An apple has a mass of about one hundred and fifty grams. A bag of sugar is one kilogram. A car is about one and a half tonnes. A tonne is one thousand kilograms.", E('g · kg · tonnes', 'g')),
        S("Capacity is how much a container holds. A teaspoon holds about five millilitres. A bottle of water holds about half a litre. A bath holds about one hundred and fifty litres.", E('ml · l', 'g'))
      ]),
      SC('Time', 'Example 3: how long does it take?', [
        S("For time we use seconds, minutes, hours and days. Blinking takes a second. A school lesson lasts about an hour. A holiday might be a week. We choose the unit that gives an easy number.", E('s · min · h · days', 'g'))
      ]),
      SC('Is it sensible?', 'Example 4: spot the mistake', [
        S("Sometimes we are given a measurement and must decide whether it makes sense. A classroom door that is two kilometres tall? That cannot be right. It should be about two metres.", E('2 km  ✗', 'r') + g('2 m  ✓')),
        S("A mug that holds three litres? That is far too big. A mug holds about three hundred millilitres.", E('3 l  ✗', 'r') + g('300 ml  ✓')),
        S("Notice that in both cases the number was sensible. It was the unit that was wrong. Always ask, does this unit match what I can picture?", V.rule('Check the unit as well as the number.'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: using a unit that is too big or too small. Weighing an apple in tonnes, or a lorry in grams, gives a number that is awkward to use.", V.rule('Aim for a number that is easy to picture.')),
        S("Mistake two: mixing units from different kinds. A length cannot be in kilograms, and a mass cannot be in litres. Check that the unit belongs to the right measure.", V.rule('Length, mass, capacity, time: match the kind.')),
        S("Mistake three: not checking if the answer is sensible. If you work out that a man's height is one hundred and eighty metres, then something is wrong. It should be one hundred and eighty centimetres.", r('180 m  ✗') + g('180 cm  ✓'))
      ]),
      SC('In real life', 'Cooking', [
        S("Recipes use grams for flour and millilitres for milk. If they used kilograms and litres, we would have tiny decimals like zero point two five kilograms. Two hundred and fifty grams is much easier.", E('250 g flour · 300 ml milk', 'g'))
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
        S("Sometimes we need to change a measurement from one unit to another. This is called converting. The good news is that metric units are built on tens, hundreds and thousands, which makes converting easy.", E('Metric = powers of ten', 'b')),
        S("Here are the links to learn. Ten millimetres make one centimetre. One hundred centimetres make one metre. One thousand metres make one kilometre. One thousand grams make one kilogram. And one thousand millilitres make one litre.", V.tbl([['1 cm', '10 mm'], ['1 m', '100 cm'], ['1 km', '1,000 m'], ['1 kg', '1,000 g'], ['1 l', '1,000 ml']], ['Unit', 'Equals'])),
        S("The rule is simple. If you are changing to a smaller unit, you will have more of them, so multiply. If you are changing to a bigger unit, you will have fewer, so divide.", V.cols([V.card('Smaller unit → multiply', 'g', true), V.card('Bigger unit → divide', 'b', true)], 2))
      ]),
      SC('To a smaller unit', 'Example 1: km to m', [
        S("Let's change three point seven five kilometres to metres. A metre is smaller than a kilometre, so we multiply. There are one thousand metres in a kilometre.", E('3.75 km → m')),
        S("Multiply by one thousand. That moves every digit three places to the left. Three point seven five becomes three thousand, seven hundred and fifty. So three point seven five kilometres is three thousand, seven hundred and fifty metres.", g('3.75 × 1,000 = 3,750 m'))
      ]),
      SC('To a bigger unit', 'Example 2: g to kg', [
        S("Now change two thousand, four hundred grams to kilograms. A kilogram is bigger than a gram, so we divide. Divide by one thousand. That moves every digit three places to the right.", E('2,400 g → kg')),
        S("Two thousand four hundred divided by one thousand is two point four. So two thousand, four hundred grams is two point four kilograms.", g('2,400 ÷ 1,000 = 2.4 kg'))
      ]),
      SC('More examples', 'Example 3: centimetres, litres', [
        S("Four hundred and fifty centimetres to metres. A metre is bigger, so divide by one hundred. The answer is four point five metres.", g('450 cm ÷ 100 = 4.5 m')),
        S("Zero point three five litres to millilitres. A millilitre is smaller, so multiply by one thousand. The answer is three hundred and fifty millilitres.", g('0.35 l × 1,000 = 350 ml'))
      ]),
      SC('Time', 'Example 4: not powers of ten', [
        S("Time is different. It does not use tens. There are sixty seconds in a minute, sixty minutes in an hour and twenty-four hours in a day.", V.tbl([['1 min', '60 s'], ['1 h', '60 min'], ['1 day', '24 h']], ['Unit', 'Equals'])),
        S("Let's change two point five hours to hours and minutes. The point five is half an hour, which is thirty minutes. So two point five hours is two hours thirty minutes. In minutes, that is one hundred and fifty minutes.", g('2.5 h = 2 h 30 min = 150 min')),
        S("Be careful here. Two point five hours is not two hours and fifty minutes. The point five means half of sixty, not fifty.", r('2.5 h = 2 h 50 min  ✗'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: multiplying when you should divide. Ask yourself whether the answer should be a bigger number or a smaller number. More small units means a bigger number.", V.rule('More small units: a bigger number.')),
        S("Mistake two: using the wrong link. One metre is one hundred centimetres, not ten. Learn the links well.", r('1 m = 10 cm  ✗') + g('1 m = 100 cm  ✓')),
        S("Mistake three: treating time like metric. Never use ten or one hundred for minutes. Use sixty.", V.rule('1 hour = 60 minutes, not 100.'))
      ]),
      SC('In real life', 'A recipe', [
        S("A jug holds one point two litres. A glass holds two hundred millilitres. How many glasses can the jug fill? First, change the jug to millilitres. One point two times one thousand is one thousand, two hundred millilitres.", E('1.2 l = 1,200 ml')),
        S("Now divide by the size of a glass. One thousand, two hundred divided by two hundred is six. The jug fills six glasses.", g('1,200 ÷ 200 = 6'))
      ]),
      L.turn("Your turn! Number one. How many centimetres are in four point zero six metres? Pause and try it.", E('4.06 m = ? cm'), "Multiply by one hundred. The answer is four hundred and six centimetres.", g('406 cm')),
      L.turn("Your turn! Number two. Change three thousand, two hundred metres to kilometres. Pause and try it.", E('3,200 m = ? km'), "Divide by one thousand. The answer is three point two kilometres.", g('3.2 km')),
      L.turn("Your turn! Number three. How many minutes are in one and three quarter hours? Pause and try it.", E('1 3/4 h'), "One hour is sixty minutes. Three quarters of an hour is forty-five minutes. Add them. The answer is one hundred and five minutes.", g('105 minutes')),
      L.rec(T, "Learn the metric links. To change to a smaller unit, multiply. To change to a bigger unit, divide. Check that your answer makes sense. Time uses sixty and twenty-four, not ten.", ['10 mm = 1 cm, 100 cm = 1 m', '1,000 for km, kg, l', 'Smaller unit: ×', 'Bigger unit: ÷', 'Time: 60 and 24'])
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
        S("A rectangle is nine centimetres long and four centimetres wide. A rectangle has two long sides and two short sides. The opposite sides are equal.", E('9, 4, 9, 4')),
        S("Add them all. Nine plus four plus nine plus four. That makes twenty-six centimetres.", g('9 + 4 + 9 + 4 = 26 cm')),
        S("There is a shortcut. Add the length and the width, then double it. Nine plus four is thirteen. Double thirteen is twenty-six.", g('2 × (9 + 4) = 26 cm'))
      ]),
      SC('Regular shapes', 'Example 2: a regular hexagon', [
        S("A regular shape has all its sides equal. A hexagon has six sides. Suppose each side is seven centimetres.", E('6 sides of 7 cm')),
        S("We can add seven six times, but it is quicker to multiply. Six times seven is forty-two centimetres.", g('6 × 7 = 42 cm'))
      ]),
      SC('Missing sides', 'Example 3: an L-shape', [
        S("Now an L-shape. Some of its sides are not labelled. We must work them out before we can add. The shape is twelve centimetres wide and ten centimetres tall. A corner has been cut away.", V.poly([[10, 110], [130, 110], [130, 70], [60, 70], [60, 10], [10, 10]], 'var(--surface-2)', 150, 120, 'An L-shape')),
        S("The bottom is twelve and the left side is ten. The top short side is five. The notch goes in seven across and six up. That leaves four on the right side, because ten take away six is four.", E('12, 4, 7, 6, 5, 10')),
        S("Add all six sides. Twelve plus four is sixteen, plus seven is twenty-three, plus six is twenty-nine, plus five is thirty-four, plus ten is forty-four. The perimeter is forty-four centimetres.", g('12 + 4 + 7 + 6 + 5 + 10 = 44 cm')),
        S("Here is something interesting. This is the same as a rectangle twelve by ten. Two times twelve plus ten is forty-four. When a corner is cut away like this, the perimeter does not change.", E('2 × (12 + 10) = 44 cm', 'b'))
      ]),
      SC('Circles', 'Example 4: circumference', [
        S("The perimeter of a circle has a special name. It is called the circumference. It is about three point one four times the width across the circle. The width across through the centre is the diameter.", E('C = π × d ≈ 3.14 × d', 'g')),
        S("A circle has a diameter of ten centimetres. The circumference is three point one four times ten. That is thirty-one point four centimetres.", g('3.14 × 10 = 31.4 cm'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: adding only the sides you can see. A rectangle has four sides. If only two are labelled, you must still count the other two.", V.rule('Count every side.')),
        S("Mistake two: forgetting the missing sides in a compound shape. Work them out first, using the sides you already know.", V.rule('Find missing sides first.')),
        S("Mistake three: using square units. Perimeter is a length, so it is in centimetres or metres. Square centimetres are for area.", r('44 cm²  ✗') + g('44 cm  ✓'))
      ]),
      SC('In real life', 'Fencing', [
        S("A garden is fifteen metres long and eight metres wide. A farmer wants to put a fence all the way round. How much fencing is needed? Fifteen plus eight is twenty-three. Double it. Forty-six metres.", g('2 × (15 + 8) = 46 m'))
      ]),
      L.turn("Your turn! Number one. A square has sides of eleven centimetres. What is its perimeter? Pause and try it.", E('4 × 11'), "Four times eleven is forty-four centimetres.", g('44 cm')),
      L.turn("Your turn! Number two. A rectangle is fourteen metres long and nine metres wide. What is the perimeter? Pause and try it.", E('2 × (14 + 9)'), "Fourteen plus nine is twenty-three. Double it to get forty-six metres.", g('46 m')),
      L.turn("Your turn! Number three. A circle has a diameter of twenty centimetres. What is its circumference? Use three point one four. Pause and try it.", E('3.14 × 20'), "Three point one four times twenty is sixty-two point eight centimetres.", g('62.8 cm')),
      L.rec(T, "Perimeter is the distance round the outside of a shape. Add all the sides. In compound shapes, find the missing sides first. A rectangle is two times length plus width. A circle's perimeter is called the circumference, and it is pi times the diameter.", ['Add all the sides', 'Rectangle: 2 × (l + w)', 'Find missing sides first', 'Circle: C = π × d'])
    ]);
  })();
  /* ---- 2D shapes ---- */
  (function () {
    var T = 'What are two-dimensional shapes?';
    L.full(T, [
      SC('Flat shapes', 'What does two-dimensional mean?', [
        S("Think of a shape drawn on a sheet of paper. It is flat. You can measure how long it is and how wide it is, but it has no thickness. Shapes like this are called two-dimensional shapes, or 2D shapes for short.", V.cards(['triangle', 'square', 'pentagon', 'hexagon', 'circle'], ['b', 'p', 'g', 'b', 'p'], true)),
        S("Two-dimensional means two measurements: length and width. A cube, a ball or a box are not flat. They are three-dimensional, because they also have height.", V.cols([V.card('2D: flat', 'g', true), V.card('3D: solid', 'b', true)], 2))
      ]),
      SC('Polygons', 'Shapes with straight sides', [
        S("Many 2D shapes are made only of straight lines. They are closed, which means there are no gaps. A closed shape with straight sides is called a polygon.", V.rule('Polygon: closed, straight sides, flat.')),
        S("Polygons are named by counting their sides. Three sides make a triangle. Four sides make a quadrilateral. Five sides make a pentagon. Six sides make a hexagon. Eight sides make an octagon. Ten sides make a decagon.", V.tbl([['3', 'triangle'], ['4', 'quadrilateral'], ['5', 'pentagon'], ['6', 'hexagon'], ['8', 'octagon'], ['10', 'decagon']], ['Sides', 'Name'])),
        S("The names come from Greek. Penta means five. Hexa means six. Octa means eight. Deca means ten. Once you know these, the names are easy to remember.", V.rule('penta 5, hexa 6, octa 8, deca 10'))
      ]),
      SC('Regular and irregular', 'Equal or not?', [
        S("A regular polygon has all its sides the same length, and all its angles the same size. A square is regular. A stop sign is a regular octagon.", V.cards(['Regular: all sides and angles equal'], ['g'])),
        S("An irregular polygon does not have all sides and angles equal. A rectangle that is not a square is irregular. A rectangle has equal angles, but its sides are not all equal.", V.cards(['Irregular: not all equal'], ['b'])),
        S("Take care here. A shape can have equal sides but still not be regular. A rhombus has four equal sides, but its angles are not all the same, so it is irregular.", V.rule('Both the sides and the angles must be equal.'))
      ]),
      SC('Circles', 'A 2D shape that is not a polygon', [
        S("A circle is a 2D shape, but it is not a polygon. It has a curved edge, and no straight sides.", E('Circle: 2D, but not a polygon', 'b')),
        S("A semicircle, which is half a circle, is also not a polygon, because it has a curved edge.", E('Curved edge: not a polygon'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: calling a shape with a gap a polygon. A polygon must be closed.", V.rule('Closed shapes only.')),
        S("Mistake two: thinking that equal sides always mean regular. A rhombus has equal sides, but not equal angles.", r('Rhombus is regular  ✗')),
        S("Mistake three: mixing up the names. A quadrilateral is any shape with four sides. A square, a rectangle and a kite are all quadrilaterals.", V.rule('Quadrilateral = any four-sided polygon.'))
      ]),
      SC('In real life', 'All around us', [
        S("Road signs use 2D shapes. Triangles warn us of danger. Circles give orders, like a speed limit. Rectangles give information. And a stop sign is a regular octagon.", V.cards(['▲ warning', '● order', '■ information'], ['b', 'p', 'g']))
      ]),
      L.turn("Your turn! Number one. What do we call a polygon with eight sides? Pause and think.", E('?'), "An octagon, like a stop sign.", g('octagon')),
      L.turn("Your turn! Number two. Is a circle a polygon? Pause and think.", E('?'), "No. A circle has a curved edge, and no straight sides.", g('No')),
      L.turn("Your turn! Number three. A shape has six sides, all the same length, and all angles equal. What is its full name? Pause and think.", E('?'), "It is a regular hexagon.", g('regular hexagon')),
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
        S("There are three main kinds of triangle. An equilateral triangle has three equal sides, and three equal angles of sixty degrees.", V.tbl([['Equilateral', '3 equal sides', '3 lines']], ['Triangle', 'Sides', 'Symmetry'])),
        S("An isosceles triangle has two equal sides, and two equal angles. It has one line of symmetry.", V.tbl([['Equilateral', '3 equal sides', '3 lines'], ['Isosceles', '2 equal sides', '1 line']], ['Triangle', 'Sides', 'Symmetry'])),
        S("A scalene triangle has no equal sides and no equal angles. It has no lines of symmetry.", V.tbl([['Equilateral', '3 equal sides', '3 lines'], ['Isosceles', '2 equal sides', '1 line'], ['Scalene', 'none equal', '0 lines']], ['Triangle', 'Sides', 'Symmetry'])),
        S("A right-angled triangle has one angle of ninety degrees. It can be isosceles or scalene.", E('Right-angled: one 90° angle', 'b'))
      ]),
      SC('Quadrilaterals', 'Four-sided shapes', [
        S("A square has four equal sides and four right angles. It has four lines of symmetry. A rectangle has four right angles, and opposite sides equal. It has two lines of symmetry.", V.tbl([['Square', '4 equal sides, 4 right angles'], ['Rectangle', '4 right angles']], ['Shape', 'Key property'])),
        S("A rhombus has four equal sides, but its angles are not right angles. It looks like a squashed square. A parallelogram has two pairs of parallel sides, and opposite sides equal.", V.tbl([['Rhombus', '4 equal sides'], ['Parallelogram', '2 pairs parallel']], ['Shape', 'Key property'])),
        S("A trapezium has just one pair of parallel sides. A kite has two pairs of equal sides, which are next to each other.", V.tbl([['Trapezium', '1 pair parallel'], ['Kite', '2 pairs equal, next to each other']], ['Shape', 'Key property']))
      ]),
      SC('Diagonals', 'Corner to corner', [
        S("A diagonal is a straight line from one corner to the opposite corner. The diagonals of a rectangle are equal in length. The diagonals of a square are equal, and they cross at right angles. The diagonals of a rhombus also cross at right angles.", E('Square: diagonals equal, cross at 90°', 'g'))
      ]),
      SC('Shape families', 'One shape can be two', [
        S("Shapes belong in families. Every square is also a rectangle, because it has four right angles. Every square is also a rhombus, because it has four equal sides. But a rectangle is not always a square.", V.rule('Every square is a rectangle. Not every rectangle is a square.'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: saying a rectangle has four lines of symmetry. It has two. The diagonals are not mirror lines in a rectangle.", r('Rectangle: 4 lines  ✗') + g('Rectangle: 2 lines  ✓')),
        S("Mistake two: mixing up a rhombus and a square. Both have four equal sides. Only a square has four right angles.", V.rule('Rhombus: equal sides. Square: equal sides and right angles.')),
        S("Mistake three: forgetting that a trapezium has only one pair of parallel sides. If there are two pairs, it is a parallelogram.", V.rule('Trapezium: exactly one pair parallel.'))
      ]),
      SC('In real life', 'Design', [
        S("Builders use rectangles for windows and doors because their right angles fit neatly together. They use triangles in bridges and roofs, because triangles are rigid and strong. They do not bend out of shape.", V.cards(['Rectangles fit', 'Triangles are strong'], ['b', 'g']))
      ]),
      L.turn("Your turn! Number one. Which quadrilateral has exactly one pair of parallel sides? Pause and think.", E('?'), "A trapezium.", g('trapezium')),
      L.turn("Your turn! Number two. A triangle has two equal sides. What is it called? Pause and think.", E('?'), "It is an isosceles triangle.", g('isosceles')),
      L.turn("Your turn! Number three. How many lines of symmetry does a rectangle that is not a square have? Pause and think.", E('?'), "It has two lines of symmetry, one across the middle each way.", g('2')),
      L.rec(T, "Describe shapes by their sides, angles, parallel lines, diagonals and symmetry. There are three kinds of triangle: equilateral, isosceles and scalene. Quadrilaterals include the square, rectangle, rhombus, parallelogram, trapezium and kite. Shapes belong to families, so every square is also a rectangle.", ['Sides and angles', 'Parallel sides', 'Diagonals', 'Lines of symmetry', 'Shape families'])
    ]);
  })();

  /* ---- Angles ---- */
  (function () {
    var T = 'How do you label, draw and measure angles?';
    L.full(T, [
      SC('Angles', 'What is an angle?', [
        S("When two straight lines meet at a point, they make an angle. The point where they meet is called the vertex. The angle is the amount of turn between the two lines.", V.angle(50, '50°')),
        S("We measure angles in degrees. We write a small circle after the number. One full turn all the way round is three hundred and sixty degrees.", E('Full turn = 360°', 'b'))
      ]),
      SC('Types of angle', 'Names by size', [
        S("Angles have names that depend on their size. An angle smaller than ninety degrees is called acute. An angle of exactly ninety degrees is a right angle. It looks like the corner of a book.", V.tbl([['acute', '< 90°'], ['right', '90°']], ['Name', 'Size'])),
        S("An angle between ninety and one hundred and eighty degrees is obtuse. An angle of exactly one hundred and eighty is a straight line. An angle bigger than one hundred and eighty is called reflex.", V.tbl([['acute', '< 90°'], ['right', '90°'], ['obtuse', '90°–180°'], ['straight', '180°'], ['reflex', '> 180°']], ['Name', 'Size'])),
        S("A trick: acute sounds like a cute little angle, and obtuse is the big, wide one.", V.rule('Acute: small.  Obtuse: wide.'))
      ]),
      SC('Labelling', 'Naming an angle with three letters', [
        S("We name an angle with three capital letters. The letter in the middle is always the vertex. Angle A B C means the angle at B, between the lines B A and B C.", E('∠ABC: the angle at B', 'g')),
        S("Why three letters? Because there may be many angles at the same point. The three letters tell us exactly which one we mean.", V.rule('Middle letter = vertex.'))
      ]),
      SC('Measuring', 'Using a protractor', [
        S("A protractor is a half circle with a scale from zero to one hundred and eighty. First, estimate the angle. Is it acute or obtuse? This stops silly mistakes.", V.rule('Estimate first.')),
        S("Put the centre of the protractor on the vertex. Line up the zero line with one arm of the angle. Now look where the other arm crosses the scale.", V.rule('Centre on the vertex. Zero on one arm.')),
        S("There are two scales. Use the one that starts at zero on your first arm. If the angle is acute, read the smaller number. If it is obtuse, read the bigger number.", V.rule('Read from zero.'))
      ]),
      SC('Drawing', 'Draw a 65° angle', [
        S("To draw sixty-five degrees, first draw a straight line. This will be one arm. Mark a point on the line for the vertex.", E('Step 1: a straight line')),
        S("Put the protractor's centre on the vertex, with zero on the line. Count up the scale to sixty-five and make a small mark. Take off the protractor, and join the mark to the vertex with a ruler.", V.angle(65, '65°')),
        S("Finally, label the angle with its size.", g('65°'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: reading the wrong scale. An acute angle should not give an answer bigger than ninety. If it does, read the other scale.", r('Acute angle reads 115°  ✗') + g('Use the other scale: 65°  ✓')),
        S("Mistake two: putting the protractor's centre on the wrong spot. It must sit exactly on the vertex.", V.rule('Centre exactly on the vertex.')),
        S("Mistake three: mixing up acute and obtuse. Acute is smaller than ninety. Obtuse is bigger than ninety.", V.rule('Acute < 90 < Obtuse.'))
      ]),
      SC('In real life', 'Estimate first', [
        S("Always estimate before you measure. Suppose an angle looks quite small, but your protractor says one hundred and fifteen degrees. Something is wrong. You used the wrong scale. One hundred and eighty minus one hundred and fifteen is sixty-five degrees.", E('180° − 115° = 65°', 'g'))
      ]),
      L.turn("Your turn! Number one. What type of angle is one hundred and twenty-five degrees? Pause and think.", E('125°'), "It is between ninety and one hundred and eighty, so it is obtuse.", g('obtuse')),
      L.turn("Your turn! Number two. What type of angle is two hundred and ten degrees? Pause and think.", E('210°'), "It is bigger than one hundred and eighty, so it is reflex.", g('reflex')),
      L.turn("Your turn! Number three. In angle P Q R, which letter is the vertex? Pause and think.", E('∠PQR'), "The middle letter, Q.", g('Q')),
      L.rec(T, "An angle is the amount of turn between two lines that meet at a vertex. We measure it in degrees. Angles can be acute, right, obtuse, straight or reflex. Name an angle with three letters, with the vertex in the middle. Estimate first, then measure from zero with the protractor's centre on the vertex.", ['Acute, right, obtuse, reflex', '∠ABC: vertex B', 'Protractor: centre on vertex', 'Estimate first'])
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
        S("Numerical data is numbers. It comes in two kinds. Discrete data is counted, and can only take certain values, like the number of pets. You cannot have two and a half pets.", V.tbl([['Categorical', 'favourite sport'], ['Discrete', 'number of pets']], ['Type', 'Example'])),
        S("Continuous data is measured, and can take any value in a range, like height or time. A person can be one point five three metres tall.", V.tbl([['Categorical', 'favourite sport'], ['Discrete', 'number of pets'], ['Continuous', 'height, time']], ['Type', 'Example'])),
        S("A quick test: if you count it, it is discrete. If you measure it, it is continuous.", V.rule('Count = discrete.   Measure = continuous.'))
      ]),
      SC('A good question', 'Start with a question', [
        S("Every data investigation starts with a clear question. Something you can test. For example, do pupils in Year 1 spend more time on screens than pupils in Year 3?", E('Question → data needed', 'g')),
        S("Once you have the question, decide what data you need, who to ask, and how to record it. Planning first saves a lot of time later.", V.rule('Plan before you collect.'))
      ]),
      SC('Bias', 'Keeping it fair', [
        S("The data must be fair. If you want to find the favourite sport of the whole school, but you only ask members of the football club, you will get a biased answer. Most will say football.", E('Biased sample', 'r')),
        S("To avoid bias, ask a mix of people. Boys and girls, younger and older. And ask enough people. A larger sample is more reliable than a very small one.", g('Ask a fair, mixed sample'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: asking too few people. Two or three people cannot tell you what a whole school thinks.", V.rule('A bigger sample is more reliable.')),
        S("Mistake two: mixing up discrete and continuous. Shoe size is counted in steps, so it is discrete. Foot length is measured, so it is continuous.", V.tbl([['Shoe size', 'discrete'], ['Foot length', 'continuous']], ['', ''])),
        S("Mistake three: asking leading questions. Don't you agree football is the best? pushes people to say yes. Ask a neutral question.", r('Don\'t you agree football is best?  ✗') + g('What is your favourite sport?  ✓'))
      ]),
      SC('In real life', 'Using data', [
        S("A school canteen counts how many pupils choose each meal. This is data. They use it to decide how much of each meal to cook. Less waste, and fewer disappointed pupils.", E('Data → decision', 'g'))
      ]),
      L.turn("Your turn! Number one. Is the time to run one hundred metres discrete or continuous data? Pause and think.", E('?'), "Time is measured, so it is continuous.", g('continuous')),
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
        S("There are three common ways to collect data. In a survey, you ask people questions. In an observation, you watch and count what happens. In an experiment, you measure something under test.", V.cards(['Survey', 'Observation', 'Experiment'], ['b', 'p', 'g'])),
        S("Which is best? It depends on your question. To find favourite sports, use a survey. To find how many cars pass the school, use observation. To see how fast plants grow in different light, use an experiment.", V.rule('Pick the method that fits the question.'))
      ]),
      SC('Tally charts', 'Counting in fives', [
        S("When you collect data, you need a quick way to record each answer. We use tally marks. Each answer gets a single line.", E('| | | |')),
        S("The fifth mark goes across the first four, to make a gate. This groups the marks in fives, so they are quick to count. Count in fives, then add the extra ones.", LK.tally(12)),
        S("This tally shows five, five and two. That is twelve.", g('5 + 5 + 2 = 12'))
      ]),
      SC('Frequency tables', 'Turning tallies into numbers', [
        S("Once you have collected the data, you can write it in a frequency table. The frequency is how many times each answer appeared.", V.tbl([['Football', '12'], ['Swimming', '7'], ['Dance', '9']], ['Sport', 'Frequency'])),
        S("Add up the frequencies to get the total. Twelve plus seven plus nine is twenty-eight. This should match the number of people you asked. If it does not, you have missed or double-counted someone.", V.tbl([['Football', '12'], ['Swimming', '7'], ['Dance', '9'], ['Total', '28']], ['Sport', 'Frequency']))
      ]),
      SC('Grouped data', 'Using classes', [
        S("Sometimes there are lots of different numbers, like test scores. Making a row for each would be silly. Instead, group them into classes. Zero to nine, ten to nineteen, twenty to twenty-nine.", V.tbl([['0–9', '4'], ['10–19', '11'], ['20–29', '6']], ['Score', 'Frequency'])),
        S("The classes must not overlap. If one class is zero to ten, and the next is ten to twenty, where would ten go? Each value must belong to just one class. And the classes should be the same width.", V.rule('No overlaps. Same width.'))
      ]),
      SC('Good survey questions', 'Clear and fair', [
        S("Good questions are clear. They give answer options that cover every possibility, and that do not overlap. For age, use under ten, ten to twelve, thirteen and over. Not under thirteen and ten to fifteen.", V.rule('Cover everyone. Do not overlap.')),
        S("Avoid leading questions. Don't you agree that football is best? pushes people. Ask a neutral question instead.", r('Leading question  ✗') + g('Neutral question  ✓'))
      ]),
      SC('Watch out!', 'Three common mistakes', [
        S("Mistake one: forgetting to cross the fifth tally mark. If you just draw five lines, they are harder to count.", V.rule('Four lines, then cross them.')),
        S("Mistake two: overlapping classes. Ten should belong to exactly one class.", V.rule('0–9, 10–19, 20–29.')),
        S("Mistake three: not checking the total. The frequencies should add up to the number of people asked.", V.rule('Check: total = people asked.'))
      ]),
      SC('In real life', 'A traffic survey', [
        S("A class counts the cars, buses and bikes that pass the school for ten minutes. They make a tally chart, turn it into a frequency table, and then they can see which kind of traffic is most common.", E('tally → frequency table', 'g'))
      ]),
      L.turn("Your turn! Number one. How many tally marks are in three full gates and two extra marks? Pause and think.", E('3 gates + 2'), "Each gate is five. Fifteen plus two is seventeen.", g('17')),
      L.turn("Your turn! Number two. A frequency table shows nine, fourteen and seven. What is the total? Pause and think.", E('9 + 14 + 7'), "Nine plus fourteen is twenty-three. Plus seven is thirty.", g('30')),
      L.turn("Your turn! Number three. Which groups are best? Zero to ten and ten to twenty, or zero to nine and ten to nineteen? Pause and think.", E('?'), "Zero to nine and ten to nineteen. They do not overlap.", g('0–9 and 10–19')),
      L.rec(T, "Collect data with surveys, observations or experiments. Record it with tally marks grouped in fives. Then make a frequency table. Use groups that do not overlap for lots of different numbers. Ask clear, fair questions, and check the frequencies add up to the total.", ['Survey, observe, measure', 'Tally in fives', 'Frequency table', 'Non-overlapping classes', 'Fair, clear questions'])
    ]);
  })();
})();
