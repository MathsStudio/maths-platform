(function () {
  var BT = window.BT; if (!BT || !BT.L || !BT.sv || !BT.lk) return;
  var L = BT.L, V = BT.sv, E = L.E, S = L.st, SC = L.SC,
    g = function (t) { return E(t, 'g'); }, r = function (t) { return E(t, 'r'); };
  function N(title, goal, scenes) { L.full(title, scenes); return L.ep(title, goal, []); }

  /* ---- scatter graphs ---- */
  N('How do you draw and use scatter graphs and the line of best fit?', 'how to show 2 sets of data on a scatter graph, describe the correlation, and use a line of best fit to predict.', [
    SC('Scatter graphs', 'Start with the basics', [
      S("A scatter graph shows 2 sets of numbers at once. Each person or thing is 1 dot. The across value goes along the bottom, and the up value goes up the side. We use it to see if the 2 things are linked.", V.note('One dot for each person')),
      S("For example, for each student we could plot the hours they revised, along the bottom, against their test mark, up the side. If students who revise more score higher, the dots will rise from left to right.", E('Hours revised vs test mark', 'b'))
    ]),
    SC('Plotting', 'Example 1: a table of data', [
      S("Here is some data. 6 students. Hours of revision, and mark out of 20. 1 hour, 6 marks. 2 hours, 8. 3 hours, 11. 4 hours, 12. 5 hours, 15. 7 hours, 19.", V.tbl([['1', '6'], ['2', '8'], ['3', '11'], ['4', '12'], ['5', '15'], ['7', '19']], ['Hours', 'Mark'])),
      S("To plot a point, go along to the hours, then up to the mark. The first point is 1 across and 6 up. Put a small cross. Do this for all 6. Do not join the points with lines.", V.rule('Crosses, not joined up.'))
    ]),
    SC('Correlation', 'Example 2: describing the pattern', [
      S("Look at the shape of the dots. They go up from left to right. More revision, higher marks. We call this positive correlation. If the dots went down from left to right, it would be negative correlation. If they were scattered with no pattern, there is no correlation.", V.tbl([['Up to the right', 'Positive'], ['Down to the right', 'Negative'], ['No pattern', 'None']], ['Dots', 'Correlation'])),
      S("Strong or weak? If the dots are close to a line, the correlation is strong. If they are spread out, it is weak. Our dots are close to a line. So it is strong positive correlation.", g('Strong positive correlation'))
    ]),
    SC('Line of best fit', 'Example 3: drawing it', [
      S("A line of best fit is a straight line that goes through the middle of the dots. Step one. Use a ruler. Step two. Try to have about the same number of dots above and below the line. Step three. The line does not need to go through any particular dot, and it does not have to start at 0.", V.list(['Ruler, straight line', 'Balance: dots above and below', 'Through the middle of the pattern'])),
      S("For our data, the line passes close to the points 1, 6, and 7, 19. It goes up by about 2 marks for every extra hour.", E('Gradient ≈ 13 ÷ 6 ≈ 2 marks per hour'))
    ]),
    SC('Predicting', 'Example 4: reading from the line', [
      S("Use the line to estimate the mark for a student who revised 6 hours. Find 6 on the bottom axis. Go up to the line. Then go across to the mark axis. We read about 17.", g('6 hours → about 17 marks')),
      S("Or the other way. What revision time gives a mark of 10? Find 10 on the mark axis. Go across to the line. Then down. About 2 and 1/2 hours.", g('Mark 10 → about 2.5 hours'))
    ]),
    SC('Equation', 'Example 5: the equation of the line', [
      S("The line of best fit is a straight line, so it has an equation of the form y equals m x plus c. The gradient is about 2. The line crosses the mark axis at about 4. So the equation is roughly mark equals 2 times hours plus 4.", E('y ≈ 2x + 4', 'g')),
      S("Check. For 6 hours, 2 times 6 plus 4 is 16. That matches our reading of between 16 and 17.", E('2 × 6 + 4 = 16'))
    ]),
    SC('Outliers', 'Example 6: a dot that does not fit', [
      S("Suppose 1 student revised 5 hours, but scored only 3 marks. That dot is far from the pattern. It is called an outlier. It might be a mistake, or the student was ill. We usually ignore outliers when drawing the line of best fit, but we should mention them.", r('Outlier: (5, 3)'))
    ]),
    SC('Reliability', 'Example 7: how far can we trust a prediction?', [
      S("Predictions inside the range of the data are called interpolation. They are fairly reliable. Predictions outside the range are called extrapolation. They are risky. Our data goes up to 7 hours. If we use the line to predict 20 hours, we get 2 times 20 plus 4, 44. But the test is only out of 20. The prediction is impossible.", E('Inside the data: reliable', 'g') + r('Outside the data: unreliable'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Joining the dots with a zigzag line, like a line graph. A scatter graph shows the pattern, not a journey. The right way is a single straight line of best fit through the middle.", r('Join dot to dot  ✗') + g('One straight line through the middle  ✓')),
      S("Mistake two. Predicting far outside the data. The data goes up to 7 hours of revision. Wrong: use the line to say that 40 hours of revision gives a mark of 84 out of 20. The test is only out of 20. A prediction outside the data may not hold.", r('40 hours → 84 marks  ✗') + g('Only predict inside the range  ✓')),
      S("Mistake three. Thinking correlation means one thing causes the other. Ice cream sales and sunburn cases both rise together in summer. Wrong: ice cream causes sunburn. Both are caused by hot, sunny weather. Correlation shows a link, not a cause.", r('Ice cream causes sunburn  ✗') + g('Both caused by hot weather  ✓'))
    ]),
    SC('In real life', 'Cars and age', [
      S("A scatter graph of a car's age against its price shows negative correlation. The older the car, the lower the price. A garage can use a line of best fit to estimate the price of a seven-year-old car.", V.note('Negative correlation'))
    ]),
    L.turn("Your turn! Number one. As temperature rises, more cold drinks are sold. What type of correlation is this? Pause and think.", E('Temperature vs sales'), "Positive correlation.", g('Positive')),
    L.turn("Your turn! Number two. As the age of a laptop increases, its value goes down. What type of correlation? Pause and think.", E('Age vs value'), "Negative correlation.", g('Negative')),
    L.turn("Your turn! Number three. A line of best fit is y equals 2 x plus 4. Predict y when x is 5. Pause and try it.", E('y = 2(5) + 4'), "10 plus 4, 14.", g('14')),
    L.rec('How do you draw and use scatter graphs and the line of best fit?', "A scatter graph plots 2 sets of data as crosses. The correlation can be positive, negative or none, and strong or weak. A line of best fit is a straight line through the middle of the data. Use it to predict values inside the range of the data. Correlation does not mean causation.", ['Plot crosses', 'Positive, negative or none', 'Ruler line through the middle', 'Predict inside the data'])
  ]);

  /* ---- cumulative frequency ---- */
  N('How do you draw and use cumulative frequency graphs?', 'how to build a cumulative frequency table and curve, and read the median and quartiles from it.', [
    SC('Cumulative frequency', 'Start with the basics', [
      S("Cumulative means running total. A cumulative frequency table adds up the frequencies as we go, so each value tells us how many people are in this group or any group before it.", V.rule('Running total.')),
      S("It lets us find the median and the quartiles for grouped data, even when we do not know the exact values.", V.note('For grouped data'))
    ]),
    SC('A table', 'Example 1: heights of 100 people', [
      S("Here are the heights of 100 people, in groups. From 140 up to 150, 5 people. Up to 160, 20. Up to 170, 40. Up to 180, 25. Up to 190, 10. 5 plus 20 plus 40 plus 25 plus 10 is 100.", V.tbl([['140 < h ≤ 150', '5'], ['150 < h ≤ 160', '20'], ['160 < h ≤ 170', '40'], ['170 < h ≤ 180', '25'], ['180 < h ≤ 190', '10']], ['Height (cm)', 'Frequency']))
    ]),
    SC('Running total', 'Example 2: the cumulative column', [
      S("Add as you go. First group, 5. Second group, 5 plus 20, 25. Third group, 25 plus 40, 65. Fourth, 65 plus 25, 90. Fifth, 90 plus 10, 100. The last running total must equal the total number of people.", V.tbl([['≤ 150', '5'], ['≤ 160', '25'], ['≤ 170', '65'], ['≤ 180', '90'], ['≤ 190', '100']], ['Height up to', 'Cumulative frequency'])),
      S("Check. The last number is 100, the total. Good.", V.rule('Last number = total.'))
    ]),
    SC('Plotting', 'Example 3: the curve', [
      S("Plot each cumulative frequency against the upper end of its group. At 150, 5. At 160, 25. At 170, 65. At 180, 90. At 190, 100. Also plot 0 at 140, because nobody is shorter.", V.list(['(140, 0)', '(150, 5)', '(160, 25)', '(170, 65)', '(180, 90)', '(190, 100)'])),
      S("Join the points with a smooth curve, a gentle S shape. The curve always goes up, and never down.", V.rule('Smooth curve, always rising.'))
    ]),
    SC('Median', 'Example 4: the middle value', [
      S("The median is the middle. With 100 people, the middle is the fiftieth. On the vertical axis, find 50. Go across to the curve. Then go down to the height axis. We read about 166 centimetres.", E('Median position: 100 ÷ 2 = 50') + g('Median ≈ 166 cm')),
      S("We can check with the table. 25 people are shorter than 160. 65 are shorter than 170. 50 is between, so the median is between 60 and 70. 166 makes sense.", V.rule('Check it falls in the right group.'))
    ]),
    SC('Quartiles', 'Example 5: lower, upper and interquartile range', [
      S("The lower quartile is 1/4 of the way up. 25 out of 100. At 25 on the axis, the curve is at 160. The upper quartile is 3/4 of the way, 75. At 75, the curve gives about 174.", E('Lower quartile (25th) ≈ 160') + E('Upper quartile (75th) ≈ 174')),
      S("The interquartile range is the upper quartile minus the lower quartile. 174 minus 160. 14 centimetres. It tells us the spread of the middle half of the people.", g('IQR = 174 − 160 = 14 cm'))
    ]),
    SC('Reading a count', 'Example 6: how many are shorter than 175 cm?', [
      S("Find 175 on the bottom axis. Go up to the curve. Go across. We read about 78. So about 78 people are shorter than 175. Then 22 are taller than that.", g('About 78 shorter'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Plotting at the middle of the group instead of the upper end. The first group is 140 to 150, with 5 people. Wrong: plot 5 at 145. But the 5 people are all at most 150. The point is 150, 5.", r('(145, 5)  ✗') + g('(150, 5)  ✓')),
      S("Mistake two. Plotting the frequencies instead of the running totals. For the second group, the frequency is 20. Wrong: plot 20 at 160. But 25 people are at most 160. The cumulative frequency is 25.", r('(160, 20)  ✗') + g('(160, 25)  ✓')),
      S("Mistake three. Finding the median at the wrong height. With 100 people, the median is the fiftieth. Wrong: read the height axis at half of the largest height, 95. The median is half of the number of people, 50, read from the vertical axis.", r('Half of 190 = 95  ✗') + g('Half of 100 = 50  ✓'))
    ]),
    SC('In real life', 'Exam results', [
      S("Schools use cumulative frequency to find the median mark, and how many pupils are below a pass mark. The steep part of the curve is where most pupils are.", V.note('Steep curve: many values'))
    ]),
    L.turn("Your turn! Number one. Frequencies are 4, 9, 7. Write the cumulative frequencies. Pause and try it.", E('4, 9, 7'), "4, 13, 20.", g('4, 13, 20')),
    L.turn("Your turn! Number two. There are 80 values. At which cumulative frequency do you read the median? Pause and try it.", E('n = 80'), "Half of 80. 40.", g('40')),
    L.turn("Your turn! Number three. The upper quartile is 42 and the lower quartile is 30. What is the interquartile range? Pause and try it.", E('42 − 30'), "Twelve.", g('12')),
    L.rec('How do you draw and use cumulative frequency graphs?', "Cumulative frequency is a running total. Plot each total at the upper end of its group, and join with a smooth curve. The median is at half of the total, the quartiles at 1/4 and 3/4. The interquartile range is the upper quartile minus the lower quartile.", ['Running totals', 'Plot at the upper end', 'Median at n ÷ 2', 'IQR = UQ − LQ'])
  ]);

  /* ---- averages ---- */
  N('How do you find the mean, median, mode and range, including from a frequency table?', 'how to calculate averages from a list and from a table, and how to choose the best 1.', [
    SC('Averages', 'Start with the basics', [
      S("An average is a single number that represents a whole set of data. There are 3 kinds. The mean, the median and the mode. And the range tells us the spread.", V.list(['Mean: add up, divide by how many', 'Median: the middle value', 'Mode: the most common', 'Range: biggest minus smallest']))
    ]),
    SC('From a list', 'Example 1: 3, 5, 5, 8, 9', [
      S("The mean. Add them up. 3 plus 5 plus 5 plus 8 plus 9 is 30. There are 5 numbers. 30 divided by 5 is 6.", E('(3 + 5 + 5 + 8 + 9) ÷ 5 = 30 ÷ 5') + g('Mean = 6')),
      S("The median. The numbers are already in order. The middle 1 is the third. 5. The mode is the number that appears most. 5 appears twice. The range is 9 minus 3. 6.", g('Median = 5') + g('Mode = 5') + g('Range = 9 − 3 = 6'))
    ]),
    SC('Order first', 'Example 2: the median must be in order', [
      S("Find the median of 7, 2, 9, 4, 5. First put them in order. 2, 4, 5, 7, 9. Now the middle 1, the third, is 5.", E('2, 4, 5, 7, 9') + g('Median = 5')),
      S("With an even number of values, take the number halfway between the 2 middle ones. For 2, 4, 6, 10. The middle ones are 4 and 6. Halfway is 5.", E('2, 4, 6, 10 → median 5'))
    ]),
    SC('Frequency tables', 'Example 3: the table', [
      S("A table can show how many times each score happened. A score of 1, 2 people. 2, 3 people. 3, 5. 4, 4. 5, 1. That is 15 people altogether.", V.tbl([['1', '2'], ['2', '3'], ['3', '5'], ['4', '4'], ['5', '1']], ['Score', 'Frequency']))
    ]),
    SC('Mean from a table', 'Example 4: multiply, then add', [
      S("Step one. Add a column, score times frequency. 1 times 2 is 2. 2 times 3 is 6. 3 times 5 is 15. 4 times 4 is 16. 5 times 1 is 5.", V.tbl([['1', '2', '2'], ['2', '3', '6'], ['3', '5', '15'], ['4', '4', '16'], ['5', '1', '5']], ['Score', 'Freq', 'Score × Freq'])),
      S("Step two. Add up the new column. 2 plus 6 plus 15 plus 16 plus 5 is 44. That is the total of all the scores. Step three. Divide by the total frequency, 15. 44 divided by 15 is 2.93.", E('Total of scores = 44') + g('Mean = 44 ÷ 15 ≈ 2.93'))
    ]),
    SC('Median and mode from a table', 'Example 5: the same table', [
      S("The mode is the score with the highest frequency. 3, with a frequency of 5. The median is the middle of 15 values, the eighth. Count along. The first 2 values are ones. The next 3 are twos, so that is 5 values. The next 5 are threes, so that takes us to 10. The eighth value is a 3.", g('Mode = 3') + g('Median = 3')),
      S("The range is the biggest score minus the smallest. 5 minus 1 is 4.", g('Range = 4'))
    ]),
    SC('Choosing', 'Example 6: which average is best?', [
      S("Five people earn twenty thousand, twenty-two thousand, twenty-three thousand, twenty-five thousand and two hundred thousand pounds. The mean is fifty-eight thousand, which does not represent most of them. The median is twenty-three thousand, much more typical. When there are extreme values, the median is better. The mean uses every value, which is good for balanced data. The mode is useful for the most popular choice, like a shoe size.", V.list(['Mean: all values, but affected by extremes', 'Median: not affected by extremes', 'Mode: most popular']))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Finding the mean of a frequency table by ignoring the frequencies. Scores 1 to 5 with frequencies 2, 3, 5, 4 and 1. Wrong: add the scores, 1 plus 2 plus 3 plus 4 plus 5, 15, and divide by 5. 3. But there were 15 people, not 5. Multiply each score by its frequency. 44, divided by 15. 2.93.", r('(1+2+3+4+5) ÷ 5 = 3  ✗') + g('44 ÷ 15 ≈ 2.93  ✓')),
      S("Mistake two. Not putting the numbers in order before finding the median. The data is 7, 2, 9, 4, 5. Wrong: the middle one of the list as written is 9. But we must sort first. 2, 4, 5, 7, 9. The median is 5.", r('7, 2, 9, 4, 5 → 9  ✗') + g('2, 4, 5, 7, 9 → 5  ✓')),
      S("Mistake three. Giving the frequency as the mode. In the table, the score 3 has a frequency of 5. Wrong: the mode is 5. The mode is the score that is most common, 3, not how many times it happened.", r('Mode = 5  ✗') + g('Mode = 3  ✓'))
    ]),
    L.turn("Your turn! Number one. Find the mean of 4, 6, 6, 9, 10. Pause and try it.", E('4, 6, 6, 9, 10'), "35 divided by 5 is 7.", g('7')),
    L.turn("Your turn! Number two. Find the median of 11, 3, 8, 5, 1. Pause and try it.", E('11, 3, 8, 5, 1'), "Order them. 1, 3, 5, 8, 11. The middle is 5.", g('5')),
    L.turn("Your turn! Number three. A table shows score 2 with frequency 4, and score 5 with frequency 6. Find the mean. Pause and try it.", E('2 × 4 + 5 × 6'), "8 plus 30 is 38. Total frequency 10. 3.8.", g('3.8')),
    L.rec('How do you find the mean, median, mode and range?', "The mean is the total divided by how many values. The median is the middle value of an ordered list. The mode is the most common value. The range is the biggest minus the smallest. For a frequency table, multiply each value by its frequency to find the total, then divide by the total frequency.", ['Mean: total ÷ count', 'Median: order first', 'Mode: most common', 'Table: value × frequency'])
  ]);

  /* ---- Venn / overlapping events ---- */
  N('How do you use Venn diagrams and the or rule for overlapping events?', 'how to count and find probabilities when 2 events can happen together.', [
    SC('Overlapping', 'Start with the basics', [
      S("Sometimes 2 events can both happen. A student can play football and play basketball. A card can be a heart and a king. The overlap is the part where both happen. We use a Venn diagram, 2 overlapping circles, to show this.", V.note('Two overlapping circles')),
      S("The overlap is the part that is in both circles. The probability of 1 event or the other is not just the 2 probabilities added, because we would count the overlap twice.", E('P(A or B) = P(A) + P(B) − P(A and B)', 'g'))
    ]),
    SC('A Venn diagram', 'Example 1: building it, step by step', [
      S("In a class of 30, 18 play football, 12 play basketball, and 5 play both. Step one. Draw 2 overlapping circles. Step two. Fill in the overlap first. 5 play both.", E('Both: 5')),
      S("Step three. Football only. 18 play football in total, but 5 of those also play basketball. So football only is 18 minus 5, 13. Basketball only is 12 minus 5, 7.", E('Football only: 18 − 5 = 13') + E('Basketball only: 12 − 5 = 7')),
      S("Step four. Neither. Add up everything inside the circles. 13 plus 5 plus 7 is 25. The class has 30. So 5 play neither.", E('13 + 5 + 7 = 25') + g('Neither: 30 − 25 = 5')),
      S("Check. 13 plus 5 plus 7 plus 5 is 30. All the students are accounted for.", V.rule('Everything adds to the total.'))
    ]),
    SC('Probabilities', 'Example 2: picking a student at random', [
      S("What is the probability that a random student plays football and basketball? 5 out of 30, 1/6. What is the probability that a student plays only basketball? 7 out of 30.", E('P(both) = 5/30 = 1/6') + E('P(basketball only) = 7/30')),
      S("What is the probability that a student plays neither? 5 out of 30, 1/6.", E('P(neither) = 5/30 = 1/6'))
    ]),
    SC('The or rule', 'Example 3: football or basketball', [
      S("The probability that a student plays football or basketball, or both. Use the rule. Football, 18 over 30. Basketball, 12 over 30. Both, 5 over 30. 18 plus 12 minus 5 is 25. So 25 over 30, 5/6.", E('18/30 + 12/30 − 5/30 = 25/30') + g('= 5/6')),
      S("Check with the Venn diagram. 13 plus 5 plus 7 is 25. It matches.", V.rule('Check with the diagram.'))
    ]),
    SC('Cards', 'Example 4: a pack of 52', [
      S("A card is picked from a pack of 52. What is the probability it is a heart or a king? Hearts, 13. Kings, 4. The king of hearts is both, 1. 13 plus 4 minus 1 is 16. 16 over 52, which is 4 thirteenths.", E('13 + 4 − 1 = 16') + g('P = 16/52 = 4/13'))
    ]),
    SC('Mutually exclusive', 'Example 5: no overlap', [
      S("If 2 events cannot happen together, they are called mutually exclusive. A card cannot be a heart and a spade at the same time. Then there is no overlap, and we just add. Heart or spade is 13 plus 13 over 52, 26 over 52, 1/2.", E('P(heart or spade) = 26/52 = 1/2', 'g'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Adding the 2 totals without taking away the overlap. 30 students, 18 play football, 12 play basketball, 5 both. Wrong: football or basketball is 18 plus 12, 30, so all 30 students. But we counted the 5 twice. Take it away once. 25.", r('18 + 12 = 30  ✗') + g('18 + 12 − 5 = 25  ✓')),
      S("Mistake two. Writing the total in the circle instead of the only part. 18 play football, but 5 of those are in the overlap. Wrong: write 18 in the football only part. That would make the football circle total 23. Write 13.", r('Football only: 18  ✗') + g('Football only: 13  ✓')),
      S("Mistake three. Forgetting the students outside both circles. Wrong: the numbers inside add to 25, so the answer for neither is 0. There are 30 students in total. The 5 outside the circles play neither.", r('Neither = 0  ✗') + g('Neither = 30 − 25 = 5  ✓'))
    ]),
    L.turn("Your turn! Number one. 20 people. 10 like tea, 8 like coffee, 3 like both. How many like only tea? Pause and try it.", E('10 − 3'), "Seven.", g('7')),
    L.turn("Your turn! Number two. In the same group, how many like neither? Pause and try it.", E('20 − (7 + 3 + 5)'), "Tea only 7, both 3, coffee only 5. 15. 20 minus 15 is 5.", g('5')),
    L.turn("Your turn! Number three. P of A is 0.4, P of B is 0.5, P of A and B is 0.2. Find P of A or B. Pause and try it.", E('0.4 + 0.5 − 0.2'), "Zero point seven.", g('0.7')),
    L.rec('How do you use Venn diagrams and the or rule?', "A Venn diagram shows overlapping groups. Fill in the overlap first, then the only parts by subtracting, then the outside. The probability of A or B is the probability of A plus the probability of B minus the probability of both. If the events cannot happen together, just add.", ['Fill in the overlap first', 'Only parts: subtract', 'A or B = A + B − both', 'Check totals'])
  ]);

  /* ---- independent events and trees ---- */
  N('How do you use independent events and tree diagrams?', 'how to multiply probabilities along branches and add the routes.', [
    SC('Independent events', 'Start with the basics', [
      S("2 events are independent if 1 does not affect the other. Tossing a coin and rolling a dice are independent. The coin has no effect on the dice. For independent events, to find the probability of both happening, multiply.", E('P(A and B) = P(A) × P(B)', 'g'))
    ]),
    SC('A coin and a dice', 'Example 1: head and a 6', [
      S("The probability of a head is 1/2. The probability of a 6 is 1/6. Both, 1/2 times 1/6 is 1/12.", E('1/2 × 1/6') + g('= 1/12'))
    ]),
    SC('A tree diagram', 'Example 2: a spinner twice', [
      S("A spinner lands on red with probability 0.3, and on blue with probability 0.7. It is spun twice. Draw a tree. The first spin has 2 branches, red and blue. From each, a second spin has 2 more branches. Write the probability on every branch.", V.tbl([['Red', '0.3'], ['Blue', '0.7']], ['First spin', 'Probability'])),
      S("To find the probability of a route, multiply along the branches. Red then red is 0.3 times 0.3, 0.09. Red then blue is 0.3 times 0.7, 0.21. Blue then red is the same, 0.21. Blue then blue is 0.7 times 0.7, 0.49.", V.tbl([['RR', '0.09'], ['RB', '0.21'], ['BR', '0.21'], ['BB', '0.49']], ['Route', 'Probability'])),
      S("Check. The 4 routes must add to 1. 0.09 plus 0.21 plus 0.21 plus 0.49 is 1.", E('0.09 + 0.21 + 0.21 + 0.49 = 1 ✓'))
    ]),
    SC('Adding the routes', 'Example 3: exactly 1 red', [
      S("What is the probability of exactly 1 red? That can happen 2 ways. Red then blue, or blue then red. Each route is multiplied along the branches. We add the routes. 0.21 plus 0.21 is 0.42.", E('P(RB) + P(BR) = 0.21 + 0.21') + g('= 0.42')),
      S("The rule is along the branches multiply, between different routes add.", V.rule('Along: multiply.  Between routes: add.'))
    ]),
    SC('Without replacement', 'Example 4: a bag of counters', [
      S("A bag has 5 red and 3 blue counters. 2 are taken out, 1 after the other, without putting the first back. Now the events are not independent. The first pick changes what is left. First, the probability of red is 5 out of 8.", E('P(R first) = 5/8')),
      S("If the first was red, then there are 4 red and 3 blue left, 7 in all. The probability of red again is 4 out of 7. So 2 reds is 5/8 times 4/7. 20 over 56, which simplifies to 5 fourteenths.", E('5/8 × 4/7 = 20/56') + g('= 5/14'))
    ]),
    SC('One of each', 'Example 5: red and blue', [
      S("Red then blue. 5/8 times 3/7, 15 over 56. Blue then red. 3/8 times 5/7, 15 over 56. One of each. Add the routes. 30 over 56, 15 over 28.", E('RB = BR = 15/56') + g('Total = 15/28'))
    ]),
    SC('At least one', 'Example 6: the shortcut', [
      S("What is the probability of at least 1 blue? It is easier to find the opposite, no blues, which is 2 reds. That is 5 fourteenths. Then 1 minus 5 fourteenths is 9 fourteenths.", E('P(at least 1 blue) = 1 − 5/14') + g('= 9/14'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Adding along the branches instead of multiplying. The probability of red is 0.3. Wrong: red then red is 0.3 plus 0.3, 0.6. That is more than the chance of 1 red. Multiply. 0.09.", r('0.3 + 0.3 = 0.6  ✗') + g('0.3 × 0.3 = 0.09  ✓')),
      S("Mistake two. Forgetting that without replacement, the numbers change. 5 red and 3 blue. Wrong: probability of 2 reds is 5/8 times 5/8. But after taking a red, only 4 reds are left out of 7 counters. 5/8 times 4/7.", r('5/8 × 5/8 = 25/64  ✗') + g('5/8 × 4/7 = 5/14  ✓')),
      S("Mistake three. Forgetting a route. Probability of exactly 1 red with the spinner. Wrong: only red then blue, 0.21. There is also blue then red. Add both. 0.42.", r('P(RB) only = 0.21  ✗') + g('0.21 + 0.21 = 0.42  ✓'))
    ]),
    L.turn("Your turn! Number one. A fair coin is tossed twice. What is the probability of 2 heads? Pause and try it.", E('1/2 × 1/2'), "1/4.", g('1/4')),
    L.turn("Your turn! Number two. The chance of rain is 0.2 on each of 2 days. What is the probability it rains on both? Pause and try it.", E('0.2 × 0.2'), "0.04.", g('0.04')),
    L.turn("Your turn! Number three. Using the same chance, what is the probability it rains on neither day? Pause and try it.", E('0.8 × 0.8'), "0.8 times 0.8. 0.64.", g('0.64')),
    L.rec('How do you use independent events and tree diagrams?', "For independent events, multiply the probabilities to find the chance of both. On a tree diagram, multiply along the branches, and add the routes that give the outcome you want. When items are not replaced, the second probability changes. The probabilities of all routes add up to 1.", ['Along: multiply', 'Routes: add', 'Without replacement: numbers change', 'All routes add to 1'])
  ]);

  /* ---- relative frequency ---- */
  N('How do you use relative frequency and expected outcomes?', 'how to estimate probabilities from experiments and predict how many times something should happen.', [
    SC('Relative frequency', 'Start with the basics', [
      S("Sometimes we cannot work out a probability by counting equal outcomes. Think of a biased dice, or whether a drawing pin lands point up. Instead, we do an experiment. The relative frequency is the number of times the event happened, divided by the number of trials.", E('Relative frequency = frequency ÷ number of trials', 'g'))
    ]),
    SC('An experiment', 'Example 1: a spinner', [
      S("A spinner is spun 200 times. It lands on red 52 times. The relative frequency of red is 52 over 200. 0.26.", E('52 ÷ 200') + g('= 0.26'))
    ]),
    SC('More trials', 'Example 2: how reliable?', [
      S("After 10 spins, red came up 4 times, 0.4. After 100 spins, 27 times, 0.27. After 1,000, 258 times, 0.258. As the number of trials grows, the relative frequency settles down towards the true probability. More trials means a more reliable estimate.", V.tbl([['10', '0.4'], ['100', '0.27'], ['1000', '0.258']], ['Trials', 'Rel. freq']))
    ]),
    SC('Expected outcomes', 'Example 3: predicting', [
      S("If the probability of an event is p, and we try n times, we expect it to happen n times p. A fair dice, probability of a 6 is 1/6. Roll it 60 times. Expect 60 times 1/6, 10 sixes.", E('Expected = n × p', 'g') + E('60 × 1/6 = 10')),
      S("Expect does not mean it will happen exactly. We might get 9 sixes, or 12. It is the average we would get over many rolls.", V.rule('Expected is not exact.'))
    ]),
    SC('Using relative frequency', 'Example 4: a biased dice', [
      S("A biased dice is rolled 150 times. 6 comes up 45 times. The relative frequency is 45 over 150, 0.3. If it is rolled 600 times, we expect 600 times 0.3, 180 sixes.", E('45 ÷ 150 = 0.3') + g('600 × 0.3 = 180'))
    ]),
    SC('Fair or not', 'Example 5: testing a coin', [
      S("A coin is tossed 100 times, and gives 63 heads. A fair coin should give about 50. 63 is a bit far. Maybe the coin is biased. But we cannot be sure. We should do many more trials. After 1,000 tosses, if it gives 620 heads, we would be much more suspicious.", E('Expected 50, got 63')),
      S("A big difference after many trials is stronger evidence than a small difference after few.", V.rule('More trials, stronger evidence.'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Dividing by the wrong total. A spinner gives red 52 times in 200 spins. Wrong: 52 divided by 100, 0.52. We must divide by the number of trials, 200. 0.26.", r('52 ÷ 100 = 0.52  ✗') + g('52 ÷ 200 = 0.26  ✓')),
      S("Mistake two. Thinking expected means exactly. A fair coin tossed 10 times. Wrong: it must give exactly 5 heads. It might give 4, or 7. 5 is just the average we expect over many sets of 10.", r('Exactly 5 heads  ✗') + g('About 5 heads on average  ✓')),
      S("Mistake three. Multiplying by the wrong number. The probability of rain is 0.2. For 100 days, wrong: 100 divided by 0.2, 500 days. The expected number of rainy days is 100 times 0.2. 20 days.", r('100 ÷ 0.2 = 500  ✗') + g('100 × 0.2 = 20  ✓'))
    ]),
    SC('In real life', 'Quality control', [
      S("A factory tests a sample of 500 phones and finds 10 faulty. The relative frequency of faults is 10 over 500, 0.02. In a batch of 20,000, they expect 400 faulty phones.", g('20 000 × 0.02 = 400'))
    ]),
    L.turn("Your turn! Number one. A pin lands point up 18 times out of 60. What is the relative frequency? Pause and try it.", E('18 ÷ 60'), "Zero point three.", g('0.3')),
    L.turn("Your turn! Number two. The probability of winning a game is 0.25. How many wins do you expect in 80 games? Pause and try it.", E('80 × 0.25'), "Twenty.", g('20')),
    L.turn("Your turn! Number three. Why is a relative frequency from 1,000 trials better than from 10? Pause and think.", E('?'), "Because more trials give a more reliable estimate.", g('More trials: more reliable')),
    L.rec('How do you use relative frequency and expected outcomes?', "Relative frequency is the number of times an event happened divided by the number of trials. More trials give a more reliable estimate of the probability. The expected number of times an event happens is the number of trials times the probability. Expected means on average, not exact.", ['Rel. freq = f ÷ n', 'More trials: more reliable', 'Expected = n × p', 'Expected is not exact'])
  ]);

  /* ---- sampling ---- */
  N('How do you choose a fair sample and write good survey questions?', 'how to avoid bias, take a stratified sample, and write clear questions and answer boxes.', [
    SC('Samples', 'Start with the basics', [
      S("Often we cannot ask everyone. The whole group we are interested in is called the population. A smaller group that we actually ask is called a sample. We want the sample to represent the population fairly.", V.list(['Population: everyone', 'Sample: the people asked']))
    ]),
    SC('Bias', 'Example 1: an unfair sample', [
      S("A school wants to find the favourite lunch. If they only ask pupils in the canteen queue, they miss pupils who bring packed lunches. This is biased. A biased sample does not represent the population.", r('Only the canteen queue: biased')),
      S("A better way is a random sample. Every pupil has an equal chance of being chosen. For example, draw names from a hat, or use a random number generator on the school list.", g('Random: equal chance for everyone'))
    ]),
    SC('Size', 'Example 2: how big?', [
      S("A bigger sample is generally more reliable. Asking 3 people is not good. Asking 300 is better. But the way we choose matters as much as the size. A huge biased sample is still biased.", V.rule('Fair AND big enough.'))
    ]),
    SC('Stratified sampling', 'Example 3: keeping the proportions', [
      S("A school has 600 pupils. 240 in S1, 200 in S2, 160 in S3. We want a sample of 60, with the same proportions. This is called stratified sampling.", V.tbl([['S1', '240'], ['S2', '200'], ['S3', '160']], ['Year', 'Pupils'])),
      S("Step one. The sample fraction. 60 out of 600, 1/10. Step two. Take 1/10 of each year. S1, 24. S2, 20. S3, 16.", E('60 ÷ 600 = 1/10') + g('S1: 24, S2: 20, S3: 16')),
      S("Check. 24 plus 20 plus 16 is 60.", E('24 + 20 + 16 = 60 ✓'))
    ]),
    SC('Good questions', 'Example 4: leading questions', [
      S("A leading question pushes people towards 1 answer. Compare. Do you agree that the awful new cafeteria food is rubbish? That is leading. A fair question is. How would you rate the new cafeteria food? Very good, good, fair, poor, very poor.", r('Do you agree the food is rubbish?') + g('How would you rate the food?'))
    ]),
    SC('Answer boxes', 'Example 5: no overlaps, no gaps', [
      S("When we give answer boxes, they must not overlap, and must not leave gaps. Ages 10 to 20, 20 to 30. Someone aged 20 fits in both. Better. 10 to 19, 20 to 29, 30 to 39. Every whole age fits in exactly 1 box.", r('10–20, 20–30') + g('10–19, 20–29, 30–39'))
    ]),
    SC('Fair questions', 'Example 6: one thing at a time', [
      S("Ask one thing per question. Do you like football and swimming? If someone likes 1 but not the other, they cannot answer. Ask 2 questions. Also, include a choice like none or other, so everyone has an answer that fits.", r('Do you like football and swimming?') + g('Q1: football? Q2: swimming?'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Asking a convenient group. To find out how often people in a town use the library, a student asks people leaving the library. Wrong: this gives only users. Nearly everyone will say often. Ask people in the high street, chosen randomly.", r('Asking people at the library  ✗') + g('Random people in the high street  ✓')),
      S("Mistake two. Rounding a stratified sample wrongly. A school has 240 in S1, 200 in S2, 160 in S3, and we want 60. Wrong: take 20 from each year. S1 is bigger than S3, so it should have more. 24, 20, 16.", r('20, 20, 20  ✗') + g('24, 20, 16  ✓')),
      S("Mistake three. Overlapping answer boxes. How many hours of sleep? 0 to 5, 5 to 10. Someone who sleeps exactly 5 hours does not know which box to tick. Make boxes that do not overlap. 0 to less than 5, 5 to less than 10.", r('0–5, 5–10  ✗') + g('0 to <5, 5 to <10  ✓'))
    ]),
    L.turn("Your turn! Number one. Is asking only the members of a football club about their favourite sport a fair sample of a town? Pause and think.", E('?'), "No. It is biased, because football club members probably like football.", g('Biased')),
    L.turn("Your turn! Number two. A school has 300 boys and 200 girls. A stratified sample of 50 is taken. How many girls? Pause and try it.", E('200 ÷ 500 × 50'), "2 out of 5 of 50, 20 girls.", g('20')),
    L.turn("Your turn! Number three. Fix the answer boxes. 10 to 20, 20 to 30. Pause and try it.", E('10–20, 20–30'), "10 to 19, 20 to 29.", g('10–19, 20–29')),
    L.rec('How do you choose a fair sample and write good survey questions?', "A sample should be random and big enough to represent the population. A biased sample gives misleading results. In a stratified sample, take the same fraction from each group. Questions should be clear, not leading, and ask one thing. Answer boxes must not overlap and must not leave gaps.", ['Random and large enough', 'Avoid bias', 'Stratified: same fraction', 'No overlaps, no gaps'])
  ]);

  L.use(852, ['How do you interpret and describe data?', 'How do you find the mean, median, mode and range, including from a frequency table?', 'How do you draw and use scatter graphs and the line of best fit?', 'How do you draw and use cumulative frequency graphs?', 'Standard deviation', 'Quartiles and box plots', 'Two-way tables, Venn diagrams and pie charts', 'How do you use Venn diagrams and the or rule for overlapping events?', 'How do you use independent events and tree diagrams?', 'How do you use relative frequency and expected outcomes?', 'Quartiles and probability', 'How do you choose a fair sample and write good survey questions?']);
})();
