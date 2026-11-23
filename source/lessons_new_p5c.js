/* P5 504 Decimals and percentages, 505 Money time and measurement, 506 Patterns and algebra */
(function () {
  'use strict';
  var BT = window.BT; if (!BT || !BT.px) return;
  var X = BT.px.X, tbl = BT.px.tbl, bar = BT.px.bar, nl = BT.px.nl, rect = BT.px.rect, L = BT.L;

  X('Adding and subtracting decimals', 'how to add and subtract decimals by lining up the decimal points.', 'Decimal calculations',
    ['Line up the points', "Write the numbers so the decimal points are in a straight line. Fill any gaps with zeros. Then add or subtract as with whole numbers and put the point in the answer straight below.", [tbl([['', '3', '.', '4', '5'], ['+', '2', '.', '7', '0']])]],
    [['Adding', "Work out 3.45 + 2.7. Write 2.7 as 2.70. Hundredths: 5 + 0 = 5. Tenths: 4 + 7 = 11, write 1 carry 1. Ones: 3 + 2 + 1 = 6. 6.15.", ['3.45 + 2.70', 'g|6.15']],
     ['Subtracting', "Work out 8.2 − 3.65. Write 8.2 as 8.20. 8.20 − 3.65 = 4.55.", ['8.20 − 3.65', 'g|4.55']],
     ['Money', "A book costs £6.45 and a pen costs £1.80. 6.45 + 1.80 = £8.25.", ['6.45 + 1.80', 'g|£8.25']],
     ['Change', "You pay with £10 for something that costs £7.35. 10.00 − 7.35 = £2.65.", ['10.00 − 7.35', 'g|£2.65']]],
    [['Points not lined up', "Mistake one: not lining up the decimal points.", '3.45 + 2.7 = 3.45 + 27 ✗', 'Line up the points ✓'],
     ['Forgetting the zero', "Mistake two: forgetting that 2.7 is 2.70.", '8.2 − 3.65 = 5.55 ✗', '8.20 − 3.65 = 4.55 ✓']],
    ["Athletes add their times in decimals. 12.4 seconds and 11.85 seconds make 24.25 seconds.", ['12.40 + 11.85 = 24.25']],
    [['Work out 4.6 + 3.75.', "4.60 + 3.75.", ['4.60 + 3.75'], '8.35'],
     ['Work out 9 − 2.45.', "9.00 − 2.45.", ['9.00 − 2.45'], '6.55'],
     ['Work out 5.08 + 1.9.', "5.08 + 1.90.", ['5.08 + 1.90'], '6.98']],
    ["Points in a line. Add zeros.", ['Check with an estimate']]);

  X('Multiplying and dividing decimals by 10 and 100', 'how decimal digits move when multiplying or dividing by 10 and 100.', 'Decimals and powers of ten',
    ['Digits move', "Multiplying by 10 moves each digit one place left. By 100, two places. Dividing moves digits right. The decimal point does not move, the digits do.", ['0.34 × 10 = 3.4', '0.34 × 100 = 34']],
    [['Multiply by 10', "Work out 3.4 × 10. 34.", ['3.4 × 10', 'g|34']],
     ['Multiply by 100', "Work out 0.27 × 100. 27.", ['0.27 × 100', 'g|27']],
     ['Divide by 10', "Work out 56 ÷ 10. 5.6.", ['56 ÷ 10', 'g|5.6']],
     ['Divide by 100', "Work out 7 ÷ 100. 0.07.", ['7 ÷ 100', 'g|0.07']]],
    [['Adding a zero', "Mistake one: just adding a zero.", '3.4 × 10 = 3.40 ✗', '3.4 × 10 = 34 ✓'],
     ['Wrong direction', "Mistake two: moving digits the wrong way.", '56 ÷ 10 = 560 ✗', '56 ÷ 10 = 5.6 ✓']],
    ["A metre is 100 centimetres, so 2.5 metres is 250 centimetres.", ['2.5 × 100 = 250']],
    [['Work out 4.5 × 100.', "Two places left.", ['4.5 × 100'], '450'],
     ['Work out 82 ÷ 10.', "One place right.", ['82 ÷ 10'], '8.2'],
     ['Work out 9 ÷ 100.', "Two places right.", ['9 ÷ 100'], '0.09']],
    ["Digits move, not the point.", ['× left', '÷ right']]);

  X('What is a percentage?', 'what percent means and how to find 10%, 50% and other percentages of an amount.', 'Percentages',
    ['Out of one hundred', "Percent means out of 100. 25% is 25 out of 100. 50% is a half. 25% is a quarter. 10% is a tenth. 100% is the whole amount.", [tbl([['Percent', 'Fraction'], ['50%', '1/2'], ['25%', '1/4'], ['10%', '1/10'], ['100%', 'whole']])]],
    [['50%', "Find 50% of 60. 50% is half. 60 ÷ 2 = 30.", ['60 ÷ 2', 'g|30']],
     ['10%', "Find 10% of 80. 10% is a tenth. 80 ÷ 10 = 8.", ['80 ÷ 10', 'g|8']],
     ['Building up', "Find 30% of 80. 10% is 8. 30% is 3 × 8 = 24.", ['3 × 8', 'g|24']],
     ['A sale', "A game costs £40. It has 25% off. 25% is a quarter: 40 ÷ 4 = 10. You save £10 and pay £30.", ['40 − 10', 'g|£30']]],
    [['Dividing by the percent', "Mistake one: dividing by the percent number.", '50% of 60 = 60 ÷ 50 ✗', '50% = half: 60 ÷ 2 ✓'],
     ['Forgetting to subtract', "Mistake two: giving the discount as the new price.", 'Price after 25% off = £10 ✗', 'Price = £40 − £10 = £30 ✓']],
    ["Phone batteries show percentages. 50% means half full.", ['50% = half']],
    [['Find 10% of 70.', "70 ÷ 10.", ['70 ÷ 10'], '7'],
     ['Find 25% of 48.', "A quarter.", ['48 ÷ 4'], '12'],
     ['Find 20% of 90.', "10% is 9, so 20% is 18.", ['9 × 2'], '18']],
    ["Use 10% and 50% as building blocks.", ['50% half', '25% quarter', '10% tenth']]);

  X('One amount, three names', 'how to change between fractions, decimals and percentages.', 'Fractions, decimals and percentages',
    ['Same amount', "A fraction, a decimal and a percentage can name the same amount. To change a decimal to a percentage multiply by 100. To change a percentage to a decimal divide by 100.", [tbl([['Fraction', 'Decimal', 'Percent'], ['1/2', '0.5', '50%'], ['1/4', '0.25', '25%'], ['3/4', '0.75', '75%'], ['1/5', '0.2', '20%'], ['1/10', '0.1', '10%']])]],
    [['Decimal to percent', "Write 0.35 as a percentage. 0.35 × 100 = 35%.", ['0.35 × 100', 'g|35%']],
     ['Percent to fraction', "Write 40% as a fraction. 40/100 simplifies to 2/5.", ['40/100 ÷ 20', 'g|2/5']],
     ['Fraction to percent', "Write 3/5 as a percentage. 3/5 = 60/100, which is 60%.", ['3 × 20 = 60', 'g|60%']],
     ['Which is bigger?', "Which is bigger, 0.6 or 55%? 55% is 0.55. 0.6 is bigger.", ['55% = 0.55', 'g|0.6']]],
    [['Forgetting to divide', "Mistake one: writing 25% as 25.", '25% = 25 ✗', '25% = 0.25 ✓'],
     ['Wrong fraction', "Mistake two: writing 20% as 1/20.", '20% = 1/20 ✗', '20% = 1/5 ✓']],
    ["A test score of 17 out of 20 is 85/100, which is 85%.", ['17/20 = 85%']],
    [['Write 0.8 as a percentage.', "0.8 × 100.", ['0.8 × 100'], '80%'],
     ['Write 75% as a fraction in its simplest form.', "75/100 ÷ 25.", ['75/100'], '3/4'],
     ['Write 9/10 as a decimal and a percentage.', "0.9 and 90%.", ['9/10'], '0.9 and 90%']],
    ["× 100 for percent, ÷ 100 for decimal.", ['Three names, one amount']]);

  L.usePri(504, ['Adding and subtracting decimals', 'Multiplying and dividing decimals by 10 and 100', 'What is a percentage?', 'One amount, three names']);

  X('Money problems and change', 'how to add, subtract and give change with money, including best buys.', 'Money problems',
    ['Pounds and pence', "There are 100 pence in a pound. Add and subtract money like decimals, lining up the points. For change, take the cost from the amount paid. To find the best buy, compare the price of the same amount.", ['100p = £1', 'Change = paid − cost']],
    [['Adding', "A sandwich costs £2.85 and a drink costs £1.35. 2.85 + 1.35 = £4.20.", ['2.85 + 1.35', 'g|£4.20']],
     ['Change', "You pay £20 for items costing £13.65. Count up from 13.65: to £14 is 35p, then to £20 is £6. 35p and £6 make £6.35.", ['20.00 − 13.65', 'g|£6.35']],
     ['Best buy', "6 apples cost £1.80 and 10 apples cost £2.80. One apple is 30p in the first pack and 28p in the second. The 10 pack is the best buy.", ['180 ÷ 6 = 30p', '280 ÷ 10 = 28p', 'g|10 pack']],
     ['Fewest coins', "Give 87p using the fewest coins: 50p, 20p, 10p, 5p, 2p. That is 5 coins.", ['50 + 20 + 10 + 5 + 2 = 87', 'g|5 coins']]],
    [['Pence as pounds', "Mistake one: mixing pence and pounds.", '£2.85 + 35 = £37.85 ✗', '£2.85 + £0.35 = £3.20 ✓'],
     ['Cheapest price only', "Mistake two: choosing the lowest price without comparing amounts.", '£1.80 < £2.80 so cheaper ✗', 'Compare the price of one: 28p < 30p ✓']],
    ["A pupil has £10 for a school trip. A ticket is £4.50 and lunch is £3.25. Total £7.75, so £2.25 left.", ['10 − 7.75 = 2.25']],
    [['Add £3.40, £1.95 and £2.10.', "3.40 + 1.95 + 2.10.", ['3.40 + 1.95 + 2.10'], '£7.45'],
     ['Change from £5 for £3.65?', "5.00 − 3.65.", ['5.00 − 3.65'], '£1.35'],
     ['4 pens cost £2.00. 6 pens cost £2.76. Which is the better buy?', "50p each against 46p each.", ['200 ÷ 4 = 50p', '276 ÷ 6 = 46p'], '6 pens']],
    ["Line up, count up, compare price of one.", ['Check with estimate']]);

  X('Time on analogue and digital clocks', 'how to read and write times on clocks, in 12-hour and 24-hour time, and find how long things take.', 'Time',
    ['12-hour and 24-hour', "Times can be written with am or pm, or on the 24-hour clock. For afternoon times add 12 to the hour. So 3:30 pm is 15:30. There are 60 minutes in an hour. To find how long something takes, count up to the next hour, then add the rest.", ['3 pm = 15:00', '60 min = 1 h']],
    [['Reading a clock', "The minute hand is on 7 and the hour hand is just past 4. 7 × 5 = 35 minutes past 4, which is 4:35 or twenty-five to five.", ['7 × 5 = 35', 'g|4:35']],
     ['24-hour time', "Write 7:45 pm in 24-hour time. 7 + 12 = 19. 19:45.", ['7 + 12', 'g|19:45']],
     ['How long?', "How long from 2:40 pm to 4:15 pm? 2:40 to 3:00 is 20 minutes. 3:00 to 4:00 is 1 hour. 4:00 to 4:15 is 15 minutes. 1 hour 35 minutes.", ['20 + 60 + 15', 'g|1 h 35 min']],
     ['Finding the end', "A film starts at 6:50 pm and lasts 1 hour 40 minutes. 6:50 + 1 h = 7:50. 7:50 + 40 min = 8:30. It ends at 8:30 pm.", ['7:50 + 40', 'g|8:30 pm']]],
    [['100 minutes in an hour', "Mistake one: using 100 minutes in an hour.", '2:40 to 4:15: 4.15 − 2.40 = 1.75 ✗', 'Count up through the hour ✓'],
     ['am and pm', "Mistake two: forgetting to add 12.", '9 pm = 09:00 ✗', '9 pm = 21:00 ✓']],
    ["Train timetables use the 24-hour clock to avoid am and pm mix-ups.", ['17:15 = 5:15 pm']],
    [['Write 15:20 as an am or pm time.', "15 − 12 = 3.", ['15 − 12'], '3:20 pm'],
     ['How long from 10:35 to 11:20?', "25 + 20.", ['25 + 20'], '45 minutes'],
     ['A lesson starts at 1:45 pm and lasts 50 minutes. When does it end?', "1:45 + 15 = 2:00, then 35 more.", ['2:00 + 35'], '2:35 pm']],
    ["Count to the hour, then the rest.", ['60 minutes', '24-hour: add 12']]);

  X('Metric units and changing units', 'how to convert between millimetres, centimetres, metres and kilometres, grams and kilograms, millilitres and litres.', 'Metric measurement',
    ['Conversion facts', "10 mm = 1 cm. 100 cm = 1 m. 1,000 m = 1 km. 1,000 g = 1 kg. 1,000 ml = 1 l. To change to a smaller unit, multiply. To change to a bigger unit, divide.", [tbl([['Length', 'Mass', 'Capacity'], ['10 mm = 1 cm', '1,000 g = 1 kg', '1,000 ml = 1 l'], ['100 cm = 1 m', '', ''], ['1,000 m = 1 km', '', '']])]],
    [['Metres to centimetres', "Change 3.5 m to centimetres. 3.5 × 100 = 350 cm.", ['3.5 × 100', 'g|350 cm']],
     ['Grams to kilograms', "Change 2,400 g to kilograms. 2,400 ÷ 1,000 = 2.4 kg.", ['2,400 ÷ 1,000', 'g|2.4 kg']],
     ['Millilitres', "A jug holds 1.5 l. How many 250 ml cups can it fill? 1.5 l = 1,500 ml. 1,500 ÷ 250 = 6 cups.", ['1,500 ÷ 250', 'g|6 cups']],
     ['Comparing', "Which is longer, 2.4 m or 230 cm? 2.4 m = 240 cm. 240 is more than 230. 2.4 m is longer.", ['240 > 230', 'g|2.4 m']]],
    [['Wrong operation', "Mistake one: dividing when you should multiply.", '3.5 m = 3.5 ÷ 100 cm ✗', '3.5 m = 350 cm ✓'],
     ['Comparing different units', "Mistake two: comparing numbers without changing units.", '230 > 2.4, so 230 cm is longer ✗', 'Same units first ✓']],
    ["Recipes use grams and millilitres. A bag of 1.5 kg of flour is 1,500 g.", ['1.5 × 1,000']],
    [['Change 4.2 km to metres.', "Multiply by 1,000.", ['4.2 × 1,000'], '4,200 m'],
     ['Change 750 ml to litres.', "Divide by 1,000.", ['750 ÷ 1,000'], '0.75 l'],
     ['Which is heavier, 1.8 kg or 1,750 g?', "1.8 kg is 1,800 g.", ['1,800 > 1,750'], '1.8 kg']],
    ["Big to small: multiply. Small to big: divide.", ['Same unit to compare']]);

  X('Perimeter and area of rectangles', 'how to find the perimeter and the area of rectangles and shapes made from rectangles.', 'Perimeter and area',
    ['Round and inside', "Perimeter is the distance around a shape. Area is the space inside, in square units. For a rectangle, perimeter = 2 × (length + width). Area = length × width.", ['P = 2 × (l + w)', 'A = l × w']],
    [['Perimeter', "A rectangle is 9 cm long and 4 cm wide. 9 + 4 = 13, and 2 × 13 = 26 cm.", [rect(9, 4, '9 cm', '4 cm'), 'g|26 cm']],
     ['Area', "The same rectangle has area 9 × 4 = 36 cm².", ['9 × 4', 'g|36 cm²']],
     ['Missing side', "A rectangle has area 40 cm² and length 8 cm. The width is 40 ÷ 8 = 5 cm.", ['40 ÷ 8', 'g|5 cm']],
     ['L shape', "An L-shape is made of a 6 by 3 rectangle and a 2 by 2 rectangle. Area 18 + 4 = 22 cm².", ['6 × 3 + 2 × 2', 'g|22 cm²']]],
    [['Area with the wrong unit', "Mistake one: writing area in cm.", 'Area = 36 cm ✗', 'Area = 36 cm² ✓'],
     ['Mixing them up', "Mistake two: adding instead of multiplying for area.", '9 + 4 = 13 cm² ✗', '9 × 4 = 36 cm² ✓']],
    ["Fencing a garden uses perimeter. Turf for the lawn uses area.", ['Fence: perimeter', 'Turf: area']],
    [['A rectangle is 12 cm by 5 cm. Find the perimeter.', "2 × (12 + 5).", ['2 × 17'], '34 cm'],
     ['A rectangle is 12 cm by 5 cm. Find the area.', "12 × 5.", ['12 × 5'], '60 cm²'],
     ['A field has area 72 m² and width 6 m. How long is it?', "72 ÷ 6.", ['72 ÷ 6'], '12 m']],
    ["Perimeter goes round. Area covers.", ['cm vs cm²']]);

  X('Calendars and time zones', 'how to use calendars and work out the time in different places.', 'Calendars and time zones',
    ['Days and zones', "There are 7 days in a week, 12 months in a year and 365 days in a year (366 in a leap year). The Earth is split into time zones. Places east of us are ahead in time. Places west of us are behind.", ['30 days: Sep Apr Jun Nov', 'Feb: 28 or 29']],
    [['Days between', "How many days from 12 March to 2 April? 12 March to 31 March is 19 days. Then 2 more days. 21 days.", ['19 + 2', 'g|21 days']],
     ['Weeks', "How many weeks are in 35 days? 35 ÷ 7 = 5 weeks.", ['35 ÷ 7', 'g|5 weeks']],
     ['Time zones', "Dubai is 4 hours ahead of Glasgow in winter. When it is 3 pm in Glasgow, add 4 hours. It is 7 pm in Dubai.", ['+ 4 hours', 'g|7 pm in Dubai']],
     ['Flight', "A flight leaves at 9:00 am and takes 7 hours. It lands at 4:00 pm Glasgow time.", ['9 + 7 = 16', 'g|4:00 pm']]],
    [['Counting the start day', "Mistake one: miscounting days.", '12 March to 2 April: 22 days ✗', '21 days ✓'],
     ['Wrong direction', "Mistake two: subtracting hours for a place that is ahead.", 'Dubai is 4 hours ahead: 3 − 4 ✗', '3 + 4 = 7 ✓']],
    ["Video calls between countries need time zones so that nobody is called in the middle of the night.", ['Time zones']],
    [['How many days are in 6 weeks?', "6 × 7.", ['6 × 7'], '42 days'],
     ['A place is 5 hours behind Glasgow. When it is 2 pm in Glasgow, what time is it there?', "2 − 5 = −3, so 9 am.", ['14:00 − 5'], '9 am'],
     ['How many days from 25 June to 3 July?', "5 days to 30 June, plus 3.", ['5 + 3'], '8 days']],
    ["East ahead, west behind.", ['Count in sections']]);

  L.usePri(505, ['Money problems and change', 'Time on analogue and digital clocks', 'Metric units and changing units', 'Perimeter and area of rectangles', 'Calendars and time zones']);
})();
