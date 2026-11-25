/* fl_m4a.js: P4 Place value (401), Adding and subtracting (402), Multiplication and division (403) */
(function () {
  'use strict';
  var FL = window.FL; if (!FL || !FL.P4) return;
  var P = FL.P4, r = FL.r, pick = FL.pick, mc = FL.mcq, T = FL.track;
  function nm(n) { return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ','); }

  /* ===== 401 Place value and number ===== */
  P(401, 'learn1', { ch: 'owl', bg: 'day',
    way: 'Find the rule. Look at how much each number goes up or down by, then keep going.|2,5,8,11,+3 each time',
    ex: ['What comes next? 5, 10, 15, 20, ?|Each step is +5.;20 + 5 = 25.|25|+5,+5,+5', 'What comes next? 50, 45, 40, 35, ?|Each step is -5.;35 - 5 = 30.|30|-5,-5,-5'],
    mist: 'Check every gap, not just the first. 2, 4, 7 is not a +2 pattern.|2→4 is +2,4→7 is +3',
    real: 'A bus fare goes 20p, 40p, 60p, 80p. What next?|£1|90p,100p,£10|It goes up by 20p each time.|+20p',
    qs: ['3, 6, 9, 12, ?|15|14,16,18|+3.', '10, 20, 30, 40, ?|50|45,60,41|+10.', '100, 90, 80, 70, ?|60|50,65,71|-10.', '4, 8, 12, 16, ?|20|18,24,19|+4.', '25, 50, 75, ?|100|85,90,80|+25.', '30, 27, 24, 21, ?|18|19,17,20|-3.', '7, 14, 21, 28, ?|35|32,36,29|+7.', 'What is the rule? 6, 12, 18, 24|add 6|add 3,add 12,add 4|Each gap is 6.'],
    gen: function g(lv) { var s = pick(lv ? [3, 4, 6, 7, 8, 25, 50] : [2, 3, 5, 10]), a = r(1, 20), up = lv === 2 && r(0, 1) ? 0 : 1, st = up ? a : a + s * 5, seq = [0, 1, 2, 3].map(function (i) { return up ? a + s * i : st - s * i; }), nx = up ? a + s * 4 : st - s * 4; if (nx < 0) return g(lv); return mc('Number patterns', 'What comes next? <b>' + seq.join(', ') + ', ?</b>', nx, [nx + 1, nx - 1, nx + s], 'Find the rule between the numbers.', 'The rule is ' + (up ? '+' : '-') + s + ', so the next number is ' + nx + '.'); } });

  P(401, 'learn2', { ch: 'owl', bg: 'day',
    way: 'Each digit has a value. In 536 the 5 is 5 hundreds, the 3 is 3 tens and the 6 is 6 ones.|536 = 500 + 30 + 6',
    ex: ['What is the value of the 4 in 346?|The 4 is in the tens place.;4 tens = 40.|40|3 hundreds,4 tens,6 ones', 'What is the value of the 7 in 724?|The 7 is in the hundreds place.;7 hundreds = 700.|700|7 hundreds,2 tens,4 ones'],
    mist: 'The digit 4 in 346 is worth 40, not 4. Where it sits changes its value.|4 tens = 40',
    real: 'A football crowd was 852. What is the 5 worth?|50|5,500,5000|It is in the tens place.|8 hundreds,5 tens,2 ones',
    qs: ['What is the value of the 3 in 438?|30|3,300,38|Tens place.', 'What is the value of the 6 in 645?|600|6,60,64|Hundreds place.', 'What is the value of the 9 in 209?|9|90,900,20|Ones place.', 'What is 400 + 50 + 7?|457|547,745,4,507|4 hundreds, 5 tens, 7 ones.', 'What is 300 + 8?|308|38,380,3008|No tens.', 'How many tens in 270?|27|2,7,270|27 tens.', 'Which digit is in the tens place of 913?|1|9,3,13|The middle digit.', 'What is the value of the 2 in 825?|20|2,200,25|Tens place.'],
    gen: function g(lv) { var h = r(1, 9), t = r(1, 9), o = r(0, 9), n = h * 100 + t * 10 + o, k = r(0, 2), v = [h * 100, t * 10, o][k], d = [h, t, o][k]; if (k === 2 && o === 0) return g(lv); return mc('Place value', 'What is the value of the <b>' + d + '</b> in <b>' + n + '</b>?', v, [d, d * 10, d * 100, d * 1000].filter(function (x) { return x !== v; }), 'Look at which place the digit is in.', 'The ' + d + ' is worth ' + v + '.'); } });

  P(401, 'learn3', { ch: 'owl', bg: 'day',
    way: 'Look at the digit to the right. 5 or more: round up. 4 or less: stay the same.|43 → 40,47 → 50',
    ex: ['Round 63 to the nearest 10.|Look at the ones digit: 3.;3 is less than 5, so stay.|60|60,63,70', 'Round 350 to the nearest 100.|Look at the tens digit: 5.;5 means round up.|400|300,350,400'],
    mist: '5 rounds up. 45 goes to 50, not 40.|45 → 50',
    real: 'A shop has 78 sweets. About how many tens?|80|70,100,75|Round 78 up.|78 → 80',
    qs: ['Round 24 to the nearest 10.|20|30,25,24|4 is small.', 'Round 36 to the nearest 10.|40|30,35,36|6 rounds up.', 'Round 85 to the nearest 10.|90|80,85,100|5 rounds up.', 'Round 140 to the nearest 100.|100|200,150,140|Tens digit 4.', 'Round 460 to the nearest 100.|500|400,460,600|Tens digit 6.', 'Round 249 to the nearest 100.|200|300,250,240|Tens digit 4.', 'Round 805 to the nearest 10.|810|800,805,820|Ones digit 5.', 'Round 551 to the nearest 100.|600|500,550,650|Tens digit 5.'],
    gen: function g(lv) { var h = lv ? 100 : 10, n = lv ? r(101, 899) : r(11, 99), down = Math.floor(n / h) * h, a = n % h >= h / 2 ? down + h : down; if (n % h === 0) return g(lv); return mc('Rounding', 'Round <b>' + n + '</b> to the nearest <b>' + h + '</b>.', a, [a === down ? down + h : down, n, down + h * 2, down - h], 'Look at the digit to the right.', n + ' rounds to ' + a + '.'); } });

  P(401, 'learn4', { ch: 'owl', bg: 'day',
    way: 'Negative numbers are below zero. On a thermometer, going down past 0 gives -1, -2, -3.|0, -1, -2, -3',
    ex: ['It is 3 °C and gets 5 degrees colder. What is it now?|3 - 3 = 0, then 2 more down.;0 - 2 = -2.|-2 °C|3,0,-2', 'Which is colder: -4 °C or -1 °C?|-4 is further below zero.|-4 °C|-4,-1,0'],
    mist: '-9 is less than -2. The bigger the number after the minus, the colder.|-9 < -2',
    real: 'The freezer is -18 °C. The fridge is 4 °C. Which is colder?|the freezer|the fridge|-18 is far below zero.|-18, 4',
    qs: ['Which is colder: -3 °C or -7 °C?|-7 °C|-3 °C|Further below zero.', 'What is 2 - 5?|-3|3,-7,7|Past zero.', 'Count back: 3, 2, 1, 0, ?|-1|1,-2,0|Below zero.', 'Which is smallest: 4, -2, 0, -5?|-5|4,-2,0|Most negative.', 'It is -2 °C. It warms by 3. New temperature?|1 °C|-5 °C,5 °C,-1 °C|-2 + 3.', 'It is 1 °C. It drops by 4. New temperature?|-3 °C|3 °C,-5 °C,5 °C|1 - 4.', 'Which is the coldest: 2 °C, -1 °C or -4 °C?|-4 °C|2 °C,-1 °C,0 °C|Coldest is furthest below zero.', 'What number is just below 0?|-1|1,0,-10|One less.'],
    gen: function g(lv) { var a = r(1, lv ? 9 : 5), d = r(a + 1, a + (lv ? 8 : 5)), res = a - d; return mc('Negative numbers', 'It is <b>' + a + ' °C</b> and the temperature drops by <b>' + d + ' degrees</b>. What is it now?', res + ' °C', [(-res) + ' °C', (res - 1) + ' °C', (res + 1) + ' °C'], 'Count down on a thermometer, passing zero.', a + ' - ' + d + ' = ' + res + '.'); } });

  P(401, 'learnm1', { ch: 'owl', bg: 'day',
    t: 'Reading 3-digit numbers|How do I read and write 3-digit numbers?|We say a 3-digit number by its hundreds, tens and ones. 253 is two hundred and fifty-three.|' + FL.pv(2, 5, 3),
    words: 'hundreds=a group of 100=💯;tens=a group of 10=🔟;ones=single units=1️⃣;digit=a number symbol 0 to 9=🔢',
    see: ['253 is 2 hundreds, 5 tens and 3 ones.|' + FL.pv(2, 5, 3), 'We say two hundred and fifty-three.|' + FL.pv(2, 5, 3), 'A zero holds a place. 305 has no tens.|' + FL.pv(3, 0, 5)],
    ex3: ['Write four hundred and six in digits.|4 hundreds, no tens, 6 ones.|406|' + FL.pv(4, 0, 6), 'Write 580 in words.|5 hundreds and 8 tens.|five hundred and eighty|' + FL.pv(5, 8, 0), 'What is 7 hundreds + 2 tens + 9 ones?|Put the digits side by side.|729|' + FL.pv(7, 2, 9)],
    mist: 'Do not leave out the zero. Two hundred and five is 205, not 25.|205 not 25',
    chk: 'Write three hundred and forty-two in digits.|342|324,432|Hundreds first, then tens, then ones.|' + FL.pv(3, 4, 2),
    rem: 'Say the hundreds, then the tens, then the ones. Use 0 for an empty place.|hundreds, tens, ones',
    way: 'Make the number with place value counters: 100s, 10s and 1s.|' + FL.pv(3, 5, 2),
    ex: ['Write 600 + 40 + 5.|6 hundreds, 4 tens, 5 ones.|645|' + FL.pv(6, 4, 5), 'Write 900 + 3.|No tens, so use a zero.|903|' + FL.pv(9, 0, 3)],
    real: 'A page number is two hundred and nine. Write it.|209|29,290,2009|Zero tens.|' + FL.pv(2, 0, 9),
    qs: ['Write seven hundred and twenty-one.|721|712,127,7021|7 hundreds, 2 tens, 1 one.', 'Write 400 + 50 + 6.|456|465,546,4056|Place values.', 'Write nine hundred and four.|904|94,940,9004|Zero tens.', 'Say 618 in words.|six hundred and eighteen|six hundred and eight,sixty-eight|Hundreds, tens, ones.', 'How many tens in 350?|35|3,5,350|35 tens.', 'What is 200 + 7?|207|27,270,2007|No tens.', 'Write 3 hundreds, 0 tens, 8 ones.|308|38,380,3008|Zero tens.', 'Write one hundred and thirty.|130|103,1030,13|1 hundred, 3 tens.'],
    gen: function g(lv) { var h = r(1, 9), t = r(0, 9), o = r(0, 9), n = h * 100 + t * 10 + o; return mc('Reading numbers', 'Write <b>' + h + ' hundreds, ' + t + ' tens and ' + o + ' ones</b> as a number.', n, [h * 100 + o * 10 + t, t * 100 + h * 10 + o, h * 10 + t + o, n + 10], 'Hundreds, then tens, then ones.', n + '.'); } });

  P(401, 'learnm2', { ch: 'owl', bg: 'day',
    t: 'Comparing numbers|How do I tell which number is bigger?|Compare the hundreds first. If they match, compare the tens, then the ones. Use < for less than and > for greater than.|345 > 298',
    words: 'greater than=more than (>)=➕;less than=smaller than (<)=➖;equal=the same (=)=🟰;order=put in sequence=📋',
    see: ['Compare 345 and 298. Hundreds: 3 is more than 2. So 345 is bigger.|345 > 298', 'If the hundreds match, check the tens. 463 and 427: 6 tens is more than 2 tens.|463 > 427', 'The sign opens its mouth to the bigger number.|8 > 5,5 < 8'],
    ex3: ['Which is bigger: 482 or 512?|Hundreds: 5 is more than 4.|512|482,512', 'Fill in: 637 __ 631|Hundreds and tens match. Ones: 7 is more than 1.|>|637 > 631', 'Put in order smallest first: 305, 350, 53|53 is smallest. 305 < 350.|53, 305, 350|53,305,350'],
    mist: 'A number with more digits is bigger. 53 is not bigger than 305.|305 > 53',
    chk: 'Which is the biggest: 407, 470, 74?|470|407,74|Compare the hundreds first.|3 numbers to compare',
    rem: 'Compare hundreds, then tens, then ones. Smallest first means going up.|H, T, O',
    way: 'Put the numbers on a number line. The one further right is bigger.|smaller ← → bigger',
    ex: ['Which is smaller: 215 or 251?|Tens: 1 is less than 5.|215|215,251', 'Put in order largest first: 120, 102, 210|210 is largest.|210, 120, 102|210,120,102'],
    real: 'Anna has 365 stickers. Ben has 356. Who has more?|Anna|Ben,the same|365 > 356.|365, 356',
    qs: ['Which is bigger: 623 or 632?|632|623,same|Tens 3 vs 2.', 'Which is smaller: 150 or 105?|105|150,same|Tens 0 vs 5.', 'Which sign: 480 __ 408|>|<,=|Tens 8 vs 0.', 'Which sign: 219 __ 291|<|>,=|Tens 1 vs 9.', 'Smallest of 340, 304, 430?|304|340,430|Compare tens.', 'Biggest of 99, 101, 100?|101|99,100|3 digits beats 2.', 'Which is in the middle when ordered: 52, 250, 205?|205|52,250,520|Order: 52, 205, 250.', 'Which sign: 500 __ 500|=|<,>|Same.'],
    gen: function g(lv) { var a = r(100, 899), b = a + pick([-1, 1]) * pick(lv ? [1, 9, 10, 90] : [10, 40, 100, 200]); if (b < 100 || b > 999 || a === b) return g(lv); var big = a > b ? a : b; return mc('Comparing numbers', 'Which number is <b>bigger</b>: <b>' + a + '</b> or <b>' + b + '</b>?', big, [a > b ? b : a, big + 100, big - 1], 'Compare hundreds, then tens, then ones.', big + ' is bigger.'); } });

  P(401, 'learnm3', { ch: 'owl', bg: 'day',
    t: '10 or 100 more or less|How do I find 10 or 100 more or less?|Adding 10 changes the tens digit. Adding 100 changes the hundreds digit. The other digits stay the same.|10 more, 100 more',
    words: 'more=add=➕;less=take away=➖;digit=a number symbol=🔢;pattern=a rule that repeats=🔁',
    see: ['10 more than 346 is 356. Only the tens digit changes.|346 → 356', '100 more than 346 is 446. Only the hundreds digit changes.|346 → 446', '10 less than 346 is 336. 100 less is 246.|346 → 336,346 → 246'],
    ex3: ['What is 10 more than 275?|Tens digit 7 becomes 8.|285|275 → 285', 'What is 100 less than 640?|Hundreds digit 6 becomes 5.|540|640 → 540', 'What is 10 more than 390?|9 tens + 1 ten = 10 tens, so carry.|400|390 → 400'],
    mist: 'Watch for 9s. 10 more than 290 is 300, not 2100.|290 → 300',
    chk: 'What is 100 more than 527?|627|537,517,528|Change the hundreds.|100 more',
    rem: '10 more changes the tens. 100 more changes the hundreds. Take care with 9s.|+10 tens,+100 hundreds',
    way: 'Hop 10 at a time on a number line.|340,350,360,370',
    ex: ['What is 10 less than 405?|Tens digit is 0, so exchange.|395|405 → 395', 'What is 100 more than 850?|8 hundreds + 1 = 9 hundreds.|950|850 → 950'],
    real: 'A jar has 235 beads. 10 more are added. How many now?|245|335,236,225|Tens go up by 1.|235 → 245',
    qs: ['10 more than 120?|130|220,121,110|Tens +1.', '100 more than 120?|220|130,121,20|Hundreds +1.', '10 less than 350?|340|250,351,360|Tens -1.', '100 less than 350?|250|340,450,300|Hundreds -1.', '10 more than 495?|505|595,496,500|Carry.', '10 less than 500?|490|400,510,499|Exchange.', '100 more than 905?|1005|1000,915,995|9 + 1 = 10 hundreds.', '100 less than 308?|208|298,108,318|Hundreds -1.'],
    gen: function g(lv) { var n = r(110, lv ? 890 : 490), up = r(0, 1), d = pick([10, 100]), a = up ? n + d : n - d; return mc('10 or 100 more or less', 'What is <b>' + d + ' ' + (up ? 'more' : 'less') + '</b> than <b>' + n + '</b>?', a, [up ? n - d : n + d, a + (d === 10 ? 100 : 10), n + 1, a - 1], 'Change only the ' + (d === 10 ? 'tens' : 'hundreds') + ' digit.', n + (up ? ' + ' : ' - ') + d + ' = ' + a + '.'); } });
})();
