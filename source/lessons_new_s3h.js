(function () {
  var BT = window.BT; if (!BT || !BT.L || !BT.sv || !BT.lk) return;
  var L = BT.L, V = BT.sv, E = L.E, S = L.st, SC = L.SC,
    g = function (t) { return E(t, 'g'); }, r = function (t) { return E(t, 'r'); };
  function N(title, goal, scenes) { L.full(title, scenes); return L.ep(title, goal, []); }

  /* ---- scatter graphs ---- */
  N('How do you draw and use scatter graphs and the line of best fit?', 'how to show two sets of data on a scatter graph, describe the correlation, and use a line of best fit to predict.', [
    SC('Scatter graphs', 'Start with the basics', [
      S("A scatter graph shows two sets of numbers at once. Each person or thing is one dot. The across value goes along the bottom, and the up value goes up the side. We use it to see if the two things are linked.", V.note('One dot for each person')),
      S("For example, for each student we could plot the hours they revised, along the bottom, against their test mark, up the side. If students who revise more score higher, the dots will rise from left to right.", E('Hours revised vs test mark', 'b'))
    ]),
    SC('Plotting', 'Example 1: a table of data', [
      S("Here is some data. Six students. Hours of revision, and mark out of twenty. One hour, six marks. Two hours, eight. Three hours, eleven. Four hours, twelve. Five hours, fifteen. Seven hours, nineteen.", V.tbl([['1', '6'], ['2', '8'], ['3', '11'], ['4', '12'], ['5', '15'], ['7', '19']], ['Hours', 'Mark'])),
      S("To plot a point, go along to the hours, then up to the mark. The first point is one across and six up. Put a small cross. Do this for all six. Do not join the points with lines.", V.rule('Crosses, not joined up.'))
    ]),
    SC('Correlation', 'Example 2: describing the pattern', [
      S("Look at the shape of the dots. They go up from left to right. More revision, higher marks. We call this positive correlation. If the dots went down from left to right, it would be negative correlation. If they were scattered with no pattern, there is no correlation.", V.tbl([['Up to the right', 'Positive'], ['Down to the right', 'Negative'], ['No pattern', 'None']], ['Dots', 'Correlation'])),
      S("Strong or weak? If the dots are close to a line, the correlation is strong. If they are spread out, it is weak. Our dots are close to a line. So it is strong positive correlation.", g('Strong positive correlation'))
    ]),
    SC('Line of best fit', 'Example 3: drawing it', [
      S("A line of best fit is a straight line that goes through the middle of the dots. Step one. Use a ruler. Step two. Try to have about the same number of dots above and below the line. Step three. The line does not need to go through any particular dot, and it does not have to start at zero.", V.list(['Ruler, straight line', 'Balance: dots above and below', 'Through the middle of the pattern'])),
      S("For our data, the line passes close to the points one, six, and seven, nineteen. It goes up by about two marks for every extra hour.", E('Gradient ≈ 13 ÷ 6 ≈ 2 marks per hour'))
    ]),
    SC('Predicting', 'Example 4: reading from the line', [
      S("Use the line to estimate the mark for a student who revised six hours. Find six on the bottom axis. Go up to the line. Then go across to the mark axis. We read about seventeen.", g('6 hours → about 17 marks')),
      S("Or the other way. What revision time gives a mark of ten? Find ten on the mark axis. Go across to the line. Then down. About two and a half hours.", g('Mark 10 → about 2.5 hours'))
    ]),
    SC('Equation', 'Example 5: the equation of the line', [
      S("The line of best fit is a straight line, so it has an equation of the form y equals m x plus c. The gradient is about two. The line crosses the mark axis at about four. So the equation is roughly mark equals two times hours plus four.", E('y ≈ 2x + 4', 'g')),
      S("Check. For six hours, two times six plus four is sixteen. That matches our reading of between sixteen and seventeen.", E('2 × 6 + 4 = 16'))
    ]),
    SC('Outliers', 'Example 6: a dot that does not fit', [
      S("Suppose one student revised five hours, but scored only three marks. That dot is far from the pattern. It is called an outlier. It might be a mistake, or the student was ill. We usually ignore outliers when drawing the line of best fit, but we should mention them.", r('Outlier: (5, 3)'))
    ]),
    SC('Reliability', 'Example 7: how far can we trust a prediction?', [
      S("Predictions inside the range of the data are called interpolation. They are fairly reliable. Predictions outside the range are called extrapolation. They are risky. Our data goes up to seven hours. If we use the line to predict twenty hours, we get two times twenty plus four, forty-four. But the test is only out of twenty. The prediction is impossible.", E('Inside the data: reliable', 'g') + r('Outside the data: unreliable'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Joining the dots with a zigzag line, like a line graph. A scatter graph shows the pattern, not a journey. The right way is a single straight line of best fit through the middle.", r('Join dot to dot  ✗') + g('One straight line through the middle  ✓')),
      S("Mistake two. Predicting far outside the data. The data goes up to seven hours of revision. Wrong: use the line to say that forty hours of revision gives a mark of eighty-four out of twenty. The test is only out of twenty. A prediction outside the data may not hold.", r('40 hours → 84 marks  ✗') + g('Only predict inside the range  ✓')),
      S("Mistake three. Thinking correlation means one thing causes the other. Ice cream sales and sunburn cases both rise together in summer. Wrong: ice cream causes sunburn. Both are caused by hot, sunny weather. Correlation shows a link, not a cause.", r('Ice cream causes sunburn  ✗') + g('Both caused by hot weather  ✓'))
    ]),
    SC('In real life', 'Cars and age', [
      S("A scatter graph of a car's age against its price shows negative correlation. The older the car, the lower the price. A garage can use a line of best fit to estimate the price of a seven-year-old car.", V.note('Negative correlation'))
    ]),
    L.turn("Your turn! Number one. As temperature rises, more cold drinks are sold. What type of correlation is this? Pause and think.", E('Temperature vs sales'), "Positive correlation.", g('Positive')),
    L.turn("Your turn! Number two. As the age of a laptop increases, its value goes down. What type of correlation? Pause and think.", E('Age vs value'), "Negative correlation.", g('Negative')),
    L.turn("Your turn! Number three. A line of best fit is y equals two x plus four. Predict y when x is five. Pause and try it.", E('y = 2(5) + 4'), "Ten plus four, fourteen.", g('14')),
    L.rec('How do you draw and use scatter graphs and the line of best fit?', "A scatter graph plots two sets of data as crosses. The correlation can be positive, negative or none, and strong or weak. A line of best fit is a straight line through the middle of the data. Use it to predict values inside the range of the data. Correlation does not mean causation.", ['Plot crosses', 'Positive, negative or none', 'Ruler line through the middle', 'Predict inside the data'])
  ]);

  /* ---- cumulative frequency ---- */
  N('How do you draw and use cumulative frequency graphs?', 'how to build a cumulative frequency table and curve, and read the median and quartiles from it.', [
    SC('Cumulative frequency', 'Start with the basics', [
      S("Cumulative means running total. A cumulative frequency table adds up the frequencies as we go, so each value tells us how many people are in this group or any group before it.", V.rule('Running total.')),
      S("It lets us find the median and the quartiles for grouped data, even when we do not know the exact values.", V.note('For grouped data'))
    ]),
    SC('A table', 'Example 1: heights of 100 people', [
      S("Here are the heights of one hundred people, in groups. From one hundred and forty up to a hundred and fifty, five people. Up to a hundred and sixty, twenty. Up to a hundred and seventy, forty. Up to a hundred and eighty, twenty-five. Up to a hundred and ninety, ten. Five plus twenty plus forty plus twenty-five plus ten is one hundred.", V.tbl([['140 < h ≤ 150', '5'], ['150 < h ≤ 160', '20'], ['160 < h ≤ 170', '40'], ['170 < h ≤ 180', '25'], ['180 < h ≤ 190', '10']], ['Height (cm)', 'Frequency']))
    ]),
    SC('Running total', 'Example 2: the cumulative column', [
      S("Add as you go. First group, five. Second group, five plus twenty, twenty-five. Third group, twenty-five plus forty, sixty-five. Fourth, sixty-five plus twenty-five, ninety. Fifth, ninety plus ten, one hundred. The last running total must equal the total number of people.", V.tbl([['≤ 150', '5'], ['≤ 160', '25'], ['≤ 170', '65'], ['≤ 180', '90'], ['≤ 190', '100']], ['Height up to', 'Cumulative frequency'])),
      S("Check. The last number is one hundred, the total. Good.", V.rule('Last number = total.'))
    ]),
    SC('Plotting', 'Example 3: the curve', [
      S("Plot each cumulative frequency against the upper end of its group. At a hundred and fifty, five. At a hundred and sixty, twenty-five. At a hundred and seventy, sixty-five. At a hundred and eighty, ninety. At a hundred and ninety, a hundred. Also plot zero at a hundred and forty, because nobody is shorter.", V.list(['(140, 0)', '(150, 5)', '(160, 25)', '(170, 65)', '(180, 90)', '(190, 100)'])),
      S("Join the points with a smooth curve, a gentle S shape. The curve always goes up, and never down.", V.rule('Smooth curve, always rising.'))
    ]),
    SC('Median', 'Example 4: the middle value', [
      S("The median is the middle. With a hundred people, the middle is the fiftieth. On the vertical axis, find fifty. Go across to the curve. Then go down to the height axis. We read about a hundred and sixty-six centimetres.", E('Median position: 100 ÷ 2 = 50') + g('Median ≈ 166 cm')),
      S("We can check with the table. Twenty-five people are shorter than a hundred and sixty. Sixty-five are shorter than a hundred and seventy. Fifty is between, so the median is between sixty and seventy. A hundred and sixty-six makes sense.", V.rule('Check it falls in the right group.'))
    ]),
    SC('Quartiles', 'Example 5: lower, upper and interquartile range', [
      S("The lower quartile is a quarter of the way up. Twenty-five out of a hundred. At twenty-five on the axis, the curve is at a hundred and sixty. The upper quartile is three quarters of the way, seventy-five. At seventy-five, the curve gives about a hundred and seventy-four.", E('Lower quartile (25th) ≈ 160') + E('Upper quartile (75th) ≈ 174')),
      S("The interquartile range is the upper quartile minus the lower quartile. A hundred and seventy-four minus a hundred and sixty. Fourteen centimetres. It tells us the spread of the middle half of the people.", g('IQR = 174 − 160 = 14 cm'))
    ]),
    SC('Reading a count', 'Example 6: how many are shorter than 175 cm?', [
      S("Find a hundred and seventy-five on the bottom axis. Go up to the curve. Go across. We read about seventy-eight. So about seventy-eight people are shorter than a hundred and seventy-five. Then twenty-two are taller than that.", g('About 78 shorter'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Plotting at the middle of the group instead of the upper end. The first group is a hundred and forty to a hundred and fifty, with five people. Wrong: plot five at a hundred and forty-five. But the five people are all at most a hundred and fifty. The point is a hundred and fifty, five.", r('(145, 5)  ✗') + g('(150, 5)  ✓')),
      S("Mistake two. Plotting the frequencies instead of the running totals. For the second group, the frequency is twenty. Wrong: plot twenty at a hundred and sixty. But twenty-five people are at most a hundred and sixty. The cumulative frequency is twenty-five.", r('(160, 20)  ✗') + g('(160, 25)  ✓')),
      S("Mistake three. Finding the median at the wrong height. With a hundred people, the median is the fiftieth. Wrong: read the height axis at half of the largest height, ninety-five. The median is half of the number of people, fifty, read from the vertical axis.", r('Half of 190 = 95  ✗') + g('Half of 100 = 50  ✓'))
    ]),
    SC('In real life', 'Exam results', [
      S("Schools use cumulative frequency to find the median mark, and how many pupils are below a pass mark. The steep part of the curve is where most pupils are.", V.note('Steep curve: many values'))
    ]),
    L.turn("Your turn! Number one. Frequencies are four, nine, seven. Write the cumulative frequencies. Pause and try it.", E('4, 9, 7'), "Four, thirteen, twenty.", g('4, 13, 20')),
    L.turn("Your turn! Number two. There are eighty values. At which cumulative frequency do you read the median? Pause and try it.", E('n = 80'), "Half of eighty. Forty.", g('40')),
    L.turn("Your turn! Number three. The upper quartile is forty-two and the lower quartile is thirty. What is the interquartile range? Pause and try it.", E('42 − 30'), "Twelve.", g('12')),
    L.rec('How do you draw and use cumulative frequency graphs?', "Cumulative frequency is a running total. Plot each total at the upper end of its group, and join with a smooth curve. The median is at half of the total, the quartiles at a quarter and three quarters. The interquartile range is the upper quartile minus the lower quartile.", ['Running totals', 'Plot at the upper end', 'Median at n ÷ 2', 'IQR = UQ − LQ'])
  ]);

  /* ---- averages ---- */
  N('How do you find the mean, median, mode and range, including from a frequency table?', 'how to calculate averages from a list and from a table, and how to choose the best one.', [
    SC('Averages', 'Start with the basics', [
      S("An average is a single number that represents a whole set of data. There are three kinds. The mean, the median and the mode. And the range tells us the spread.", V.list(['Mean: add up, divide by how many', 'Median: the middle value', 'Mode: the most common', 'Range: biggest minus smallest']))
    ]),
    SC('From a list', 'Example 1: 3, 5, 5, 8, 9', [
      S("The mean. Add them up. Three plus five plus five plus eight plus nine is thirty. There are five numbers. Thirty divided by five is six.", E('(3 + 5 + 5 + 8 + 9) ÷ 5 = 30 ÷ 5') + g('Mean = 6')),
      S("The median. The numbers are already in order. The middle one is the third. Five. The mode is the number that appears most. Five appears twice. The range is nine minus three. Six.", g('Median = 5') + g('Mode = 5') + g('Range = 9 − 3 = 6'))
    ]),
    SC('Order first', 'Example 2: the median must be in order', [
      S("Find the median of seven, two, nine, four, five. First put them in order. Two, four, five, seven, nine. Now the middle one, the third, is five.", E('2, 4, 5, 7, 9') + g('Median = 5')),
      S("With an even number of values, take the number halfway between the two middle ones. For two, four, six, ten. The middle ones are four and six. Halfway is five.", E('2, 4, 6, 10 → median 5'))
    ]),
    SC('Frequency tables', 'Example 3: the table', [
      S("A table can show how many times each score happened. A score of one, two people. Two, three people. Three, five. Four, four. Five, one. That is fifteen people altogether.", V.tbl([['1', '2'], ['2', '3'], ['3', '5'], ['4', '4'], ['5', '1']], ['Score', 'Frequency']))
    ]),
    SC('Mean from a table', 'Example 4: multiply, then add', [
      S("Step one. Add a column, score times frequency. One times two is two. Two times three is six. Three times five is fifteen. Four times four is sixteen. Five times one is five.", V.tbl([['1', '2', '2'], ['2', '3', '6'], ['3', '5', '15'], ['4', '4', '16'], ['5', '1', '5']], ['Score', 'Freq', 'Score × Freq'])),
      S("Step two. Add up the new column. Two plus six plus fifteen plus sixteen plus five is forty-four. That is the total of all the scores. Step three. Divide by the total frequency, fifteen. Forty-four divided by fifteen is two point nine three.", E('Total of scores = 44') + g('Mean = 44 ÷ 15 ≈ 2.93'))
    ]),
    SC('Median and mode from a table', 'Example 5: the same table', [
      S("The mode is the score with the highest frequency. Three, with a frequency of five. The median is the middle of fifteen values, the eighth. Count along. The first two values are ones. The next three are twos, so that is five values. The next five are threes, so that takes us to ten. The eighth value is a three.", g('Mode = 3') + g('Median = 3')),
      S("The range is the biggest score minus the smallest. Five minus one is four.", g('Range = 4'))
    ]),
    SC('Choosing', 'Example 6: which average is best?', [
      S("Five people earn twenty thousand, twenty-two thousand, twenty-three thousand, twenty-five thousand and two hundred thousand pounds. The mean is fifty-eight thousand, which does not represent most of them. The median is twenty-three thousand, much more typical. When there are extreme values, the median is better. The mean uses every value, which is good for balanced data. The mode is useful for the most popular choice, like a shoe size.", V.list(['Mean: all values, but affected by extremes', 'Median: not affected by extremes', 'Mode: most popular']))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Finding the mean of a frequency table by ignoring the frequencies. Scores one to five with frequencies two, three, five, four and one. Wrong: add the scores, one plus two plus three plus four plus five, fifteen, and divide by five. Three. But there were fifteen people, not five. Multiply each score by its frequency. Forty-four, divided by fifteen. Two point nine three.", r('(1+2+3+4+5) ÷ 5 = 3  ✗') + g('44 ÷ 15 ≈ 2.93  ✓')),
      S("Mistake two. Not putting the numbers in order before finding the median. The data is seven, two, nine, four, five. Wrong: the middle one of the list as written is nine. But we must sort first. Two, four, five, seven, nine. The median is five.", r('7, 2, 9, 4, 5 → 9  ✗') + g('2, 4, 5, 7, 9 → 5  ✓')),
      S("Mistake three. Giving the frequency as the mode. In the table, the score three has a frequency of five. Wrong: the mode is five. The mode is the score that is most common, three, not how many times it happened.", r('Mode = 5  ✗') + g('Mode = 3  ✓'))
    ]),
    L.turn("Your turn! Number one. Find the mean of four, six, six, nine, ten. Pause and try it.", E('4, 6, 6, 9, 10'), "Thirty-five divided by five is seven.", g('7')),
    L.turn("Your turn! Number two. Find the median of eleven, three, eight, five, one. Pause and try it.", E('11, 3, 8, 5, 1'), "Order them. One, three, five, eight, eleven. The middle is five.", g('5')),
    L.turn("Your turn! Number three. A table shows score two with frequency four, and score five with frequency six. Find the mean. Pause and try it.", E('2 × 4 + 5 × 6'), "Eight plus thirty is thirty-eight. Total frequency ten. Three point eight.", g('3.8')),
    L.rec('How do you find the mean, median, mode and range?', "The mean is the total divided by how many values. The median is the middle value of an ordered list. The mode is the most common value. The range is the biggest minus the smallest. For a frequency table, multiply each value by its frequency to find the total, then divide by the total frequency.", ['Mean: total ÷ count', 'Median: order first', 'Mode: most common', 'Table: value × frequency'])
  ]);

  /* ---- Venn / overlapping events ---- */
  N('How do you use Venn diagrams and the or rule for overlapping events?', 'how to count and find probabilities when two events can happen together.', [
    SC('Overlapping', 'Start with the basics', [
      S("Sometimes two events can both happen. A student can play football and play basketball. A card can be a heart and a king. The overlap is the part where both happen. We use a Venn diagram, two overlapping circles, to show this.", V.note('Two overlapping circles')),
      S("The overlap is the part that is in both circles. The probability of one event or the other is not just the two probabilities added, because we would count the overlap twice.", E('P(A or B) = P(A) + P(B) − P(A and B)', 'g'))
    ]),
    SC('A Venn diagram', 'Example 1: building it, step by step', [
      S("In a class of thirty, eighteen play football, twelve play basketball, and five play both. Step one. Draw two overlapping circles. Step two. Fill in the overlap first. Five play both.", E('Both: 5')),
      S("Step three. Football only. Eighteen play football in total, but five of those also play basketball. So football only is eighteen minus five, thirteen. Basketball only is twelve minus five, seven.", E('Football only: 18 − 5 = 13') + E('Basketball only: 12 − 5 = 7')),
      S("Step four. Neither. Add up everything inside the circles. Thirteen plus five plus seven is twenty-five. The class has thirty. So five play neither.", E('13 + 5 + 7 = 25') + g('Neither: 30 − 25 = 5')),
      S("Check. Thirteen plus five plus seven plus five is thirty. All the students are accounted for.", V.rule('Everything adds to the total.'))
    ]),
    SC('Probabilities', 'Example 2: picking a student at random', [
      S("What is the probability that a random student plays football and basketball? Five out of thirty, one sixth. What is the probability that a student plays only basketball? Seven out of thirty.", E('P(both) = 5/30 = 1/6') + E('P(basketball only) = 7/30')),
      S("What is the probability that a student plays neither? Five out of thirty, one sixth.", E('P(neither) = 5/30 = 1/6'))
    ]),
    SC('The or rule', 'Example 3: football or basketball', [
      S("The probability that a student plays football or basketball, or both. Use the rule. Football, eighteen over thirty. Basketball, twelve over thirty. Both, five over thirty. Eighteen plus twelve minus five is twenty-five. So twenty-five over thirty, five sixths.", E('18/30 + 12/30 − 5/30 = 25/30') + g('= 5/6')),
      S("Check with the Venn diagram. Thirteen plus five plus seven is twenty-five. It matches.", V.rule('Check with the diagram.'))
    ]),
    SC('Cards', 'Example 4: a pack of 52', [
      S("A card is picked from a pack of fifty-two. What is the probability it is a heart or a king? Hearts, thirteen. Kings, four. The king of hearts is both, one. Thirteen plus four minus one is sixteen. Sixteen over fifty-two, which is four thirteenths.", E('13 + 4 − 1 = 16') + g('P = 16/52 = 4/13'))
    ]),
    SC('Mutually exclusive', 'Example 5: no overlap', [
      S("If two events cannot happen together, they are called mutually exclusive. A card cannot be a heart and a spade at the same time. Then there is no overlap, and we just add. Heart or spade is thirteen plus thirteen over fifty-two, twenty-six over fifty-two, a half.", E('P(heart or spade) = 26/52 = 1/2', 'g'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Adding the two totals without taking away the overlap. Thirty students, eighteen play football, twelve play basketball, five both. Wrong: football or basketball is eighteen plus twelve, thirty, so all thirty students. But we counted the five twice. Take it away once. Twenty-five.", r('18 + 12 = 30  ✗') + g('18 + 12 − 5 = 25  ✓')),
      S("Mistake two. Writing the total in the circle instead of the only part. Eighteen play football, but five of those are in the overlap. Wrong: write eighteen in the football only part. That would make the football circle total twenty-three. Write thirteen.", r('Football only: 18  ✗') + g('Football only: 13  ✓')),
      S("Mistake three. Forgetting the students outside both circles. Wrong: the numbers inside add to twenty-five, so the answer for neither is zero. There are thirty students in total. The five outside the circles play neither.", r('Neither = 0  ✗') + g('Neither = 30 − 25 = 5  ✓'))
    ]),
    L.turn("Your turn! Number one. Twenty people. Ten like tea, eight like coffee, three like both. How many like only tea? Pause and try it.", E('10 − 3'), "Seven.", g('7')),
    L.turn("Your turn! Number two. In the same group, how many like neither? Pause and try it.", E('20 − (7 + 3 + 5)'), "Tea only seven, both three, coffee only five. Fifteen. Twenty minus fifteen is five.", g('5')),
    L.turn("Your turn! Number three. P of A is zero point four, P of B is zero point five, P of A and B is zero point two. Find P of A or B. Pause and try it.", E('0.4 + 0.5 − 0.2'), "Zero point seven.", g('0.7')),
    L.rec('How do you use Venn diagrams and the or rule?', "A Venn diagram shows overlapping groups. Fill in the overlap first, then the only parts by subtracting, then the outside. The probability of A or B is the probability of A plus the probability of B minus the probability of both. If the events cannot happen together, just add.", ['Fill in the overlap first', 'Only parts: subtract', 'A or B = A + B − both', 'Check totals'])
  ]);

  /* ---- independent events and trees ---- */
  N('How do you use independent events and tree diagrams?', 'how to multiply probabilities along branches and add the routes.', [
    SC('Independent events', 'Start with the basics', [
      S("Two events are independent if one does not affect the other. Tossing a coin and rolling a dice are independent. The coin has no effect on the dice. For independent events, to find the probability of both happening, multiply.", E('P(A and B) = P(A) × P(B)', 'g'))
    ]),
    SC('A coin and a dice', 'Example 1: head and a six', [
      S("The probability of a head is one half. The probability of a six is one sixth. Both, one half times one sixth is one twelfth.", E('1/2 × 1/6') + g('= 1/12'))
    ]),
    SC('A tree diagram', 'Example 2: a spinner twice', [
      S("A spinner lands on red with probability zero point three, and on blue with probability zero point seven. It is spun twice. Draw a tree. The first spin has two branches, red and blue. From each, a second spin has two more branches. Write the probability on every branch.", V.tbl([['Red', '0.3'], ['Blue', '0.7']], ['First spin', 'Probability'])),
      S("To find the probability of a route, multiply along the branches. Red then red is zero point three times zero point three, zero point zero nine. Red then blue is zero point three times zero point seven, zero point two one. Blue then red is the same, zero point two one. Blue then blue is zero point seven times zero point seven, zero point four nine.", V.tbl([['RR', '0.09'], ['RB', '0.21'], ['BR', '0.21'], ['BB', '0.49']], ['Route', 'Probability'])),
      S("Check. The four routes must add to one. Zero point zero nine plus zero point two one plus zero point two one plus zero point four nine is one.", E('0.09 + 0.21 + 0.21 + 0.49 = 1 ✓'))
    ]),
    SC('Adding the routes', 'Example 3: exactly one red', [
      S("What is the probability of exactly one red? That can happen two ways. Red then blue, or blue then red. Each route is multiplied along the branches. We add the routes. Zero point two one plus zero point two one is zero point four two.", E('P(RB) + P(BR) = 0.21 + 0.21') + g('= 0.42')),
      S("The rule is along the branches multiply, between different routes add.", V.rule('Along: multiply.  Between routes: add.'))
    ]),
    SC('Without replacement', 'Example 4: a bag of counters', [
      S("A bag has five red and three blue counters. Two are taken out, one after the other, without putting the first back. Now the events are not independent. The first pick changes what is left. First, the probability of red is five out of eight.", E('P(R first) = 5/8')),
      S("If the first was red, then there are four red and three blue left, seven in all. The probability of red again is four out of seven. So two reds is five eighths times four sevenths. Twenty over fifty-six, which simplifies to five fourteenths.", E('5/8 × 4/7 = 20/56') + g('= 5/14'))
    ]),
    SC('One of each', 'Example 5: red and blue', [
      S("Red then blue. Five eighths times three sevenths, fifteen over fifty-six. Blue then red. Three eighths times five sevenths, fifteen over fifty-six. One of each. Add the routes. Thirty over fifty-six, fifteen over twenty-eight.", E('RB = BR = 15/56') + g('Total = 15/28'))
    ]),
    SC('At least one', 'Example 6: the shortcut', [
      S("What is the probability of at least one blue? It is easier to find the opposite, no blues, which is two reds. That is five fourteenths. Then one minus five fourteenths is nine fourteenths.", E('P(at least one blue) = 1 − 5/14') + g('= 9/14'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Adding along the branches instead of multiplying. The probability of red is zero point three. Wrong: red then red is zero point three plus zero point three, zero point six. That is more than the chance of one red. Multiply. Zero point zero nine.", r('0.3 + 0.3 = 0.6  ✗') + g('0.3 × 0.3 = 0.09  ✓')),
      S("Mistake two. Forgetting that without replacement, the numbers change. Five red and three blue. Wrong: probability of two reds is five eighths times five eighths. But after taking a red, only four reds are left out of seven counters. Five eighths times four sevenths.", r('5/8 × 5/8 = 25/64  ✗') + g('5/8 × 4/7 = 5/14  ✓')),
      S("Mistake three. Forgetting a route. Probability of exactly one red with the spinner. Wrong: only red then blue, zero point two one. There is also blue then red. Add both. Zero point four two.", r('P(RB) only = 0.21  ✗') + g('0.21 + 0.21 = 0.42  ✓'))
    ]),
    L.turn("Your turn! Number one. A fair coin is tossed twice. What is the probability of two heads? Pause and try it.", E('1/2 × 1/2'), "One quarter.", g('1/4')),
    L.turn("Your turn! Number two. The chance of rain is zero point two on each of two days. What is the probability it rains on both? Pause and try it.", E('0.2 × 0.2'), "Zero point zero four.", g('0.04')),
    L.turn("Your turn! Number three. Using the same chance, what is the probability it rains on neither day? Pause and try it.", E('0.8 × 0.8'), "Zero point eight times zero point eight. Zero point six four.", g('0.64')),
    L.rec('How do you use independent events and tree diagrams?', "For independent events, multiply the probabilities to find the chance of both. On a tree diagram, multiply along the branches, and add the routes that give the outcome you want. When items are not replaced, the second probability changes. The probabilities of all routes add up to one.", ['Along: multiply', 'Routes: add', 'Without replacement: numbers change', 'All routes add to 1'])
  ]);

  /* ---- relative frequency ---- */
  N('How do you use relative frequency and expected outcomes?', 'how to estimate probabilities from experiments and predict how many times something should happen.', [
    SC('Relative frequency', 'Start with the basics', [
      S("Sometimes we cannot work out a probability by counting equal outcomes. Think of a biased dice, or whether a drawing pin lands point up. Instead, we do an experiment. The relative frequency is the number of times the event happened, divided by the number of trials.", E('Relative frequency = frequency ÷ number of trials', 'g'))
    ]),
    SC('An experiment', 'Example 1: a spinner', [
      S("A spinner is spun two hundred times. It lands on red fifty-two times. The relative frequency of red is fifty-two over two hundred. Zero point two six.", E('52 ÷ 200') + g('= 0.26'))
    ]),
    SC('More trials', 'Example 2: how reliable?', [
      S("After ten spins, red came up four times, zero point four. After a hundred spins, twenty-seven times, zero point two seven. After a thousand, two hundred and fifty-eight times, zero point two five eight. As the number of trials grows, the relative frequency settles down towards the true probability. More trials means a more reliable estimate.", V.tbl([['10', '0.4'], ['100', '0.27'], ['1000', '0.258']], ['Trials', 'Rel. freq']))
    ]),
    SC('Expected outcomes', 'Example 3: predicting', [
      S("If the probability of an event is p, and we try n times, we expect it to happen n times p. A fair dice, probability of a six is one sixth. Roll it sixty times. Expect sixty times one sixth, ten sixes.", E('Expected = n × p', 'g') + E('60 × 1/6 = 10')),
      S("Expect does not mean it will happen exactly. We might get nine sixes, or twelve. It is the average we would get over many rolls.", V.rule('Expected is not exact.'))
    ]),
    SC('Using relative frequency', 'Example 4: a biased dice', [
      S("A biased dice is rolled one hundred and fifty times. Six comes up forty-five times. The relative frequency is forty-five over one hundred and fifty, zero point three. If it is rolled six hundred times, we expect six hundred times zero point three, one hundred and eighty sixes.", E('45 ÷ 150 = 0.3') + g('600 × 0.3 = 180'))
    ]),
    SC('Fair or not', 'Example 5: testing a coin', [
      S("A coin is tossed one hundred times, and gives sixty-three heads. A fair coin should give about fifty. Sixty-three is a bit far. Maybe the coin is biased. But we cannot be sure. We should do many more trials. After a thousand tosses, if it gives six hundred and twenty heads, we would be much more suspicious.", E('Expected 50, got 63')),
      S("A big difference after many trials is stronger evidence than a small difference after few.", V.rule('More trials, stronger evidence.'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Dividing by the wrong total. A spinner gives red fifty-two times in two hundred spins. Wrong: fifty-two divided by one hundred, zero point five two. We must divide by the number of trials, two hundred. Zero point two six.", r('52 ÷ 100 = 0.52  ✗') + g('52 ÷ 200 = 0.26  ✓')),
      S("Mistake two. Thinking expected means exactly. A fair coin tossed ten times. Wrong: it must give exactly five heads. It might give four, or seven. Five is just the average we expect over many sets of ten.", r('Exactly 5 heads  ✗') + g('About 5 heads on average  ✓')),
      S("Mistake three. Multiplying by the wrong number. The probability of rain is zero point two. For a hundred days, wrong: a hundred divided by zero point two, five hundred days. The expected number of rainy days is a hundred times zero point two. Twenty days.", r('100 ÷ 0.2 = 500  ✗') + g('100 × 0.2 = 20  ✓'))
    ]),
    SC('In real life', 'Quality control', [
      S("A factory tests a sample of five hundred phones and finds ten faulty. The relative frequency of faults is ten over five hundred, zero point zero two. In a batch of twenty thousand, they expect four hundred faulty phones.", g('20 000 × 0.02 = 400'))
    ]),
    L.turn("Your turn! Number one. A pin lands point up eighteen times out of sixty. What is the relative frequency? Pause and try it.", E('18 ÷ 60'), "Zero point three.", g('0.3')),
    L.turn("Your turn! Number two. The probability of winning a game is zero point two five. How many wins do you expect in eighty games? Pause and try it.", E('80 × 0.25'), "Twenty.", g('20')),
    L.turn("Your turn! Number three. Why is a relative frequency from a thousand trials better than from ten? Pause and think.", E('?'), "Because more trials give a more reliable estimate.", g('More trials: more reliable')),
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
      S("A bigger sample is generally more reliable. Asking three people is not good. Asking three hundred is better. But the way we choose matters as much as the size. A huge biased sample is still biased.", V.rule('Fair AND big enough.'))
    ]),
    SC('Stratified sampling', 'Example 3: keeping the proportions', [
      S("A school has six hundred pupils. Two hundred and forty in S1, two hundred in S2, one hundred and sixty in S3. We want a sample of sixty, with the same proportions. This is called stratified sampling.", V.tbl([['S1', '240'], ['S2', '200'], ['S3', '160']], ['Year', 'Pupils'])),
      S("Step one. The sample fraction. Sixty out of six hundred, one tenth. Step two. Take one tenth of each year. S1, twenty-four. S2, twenty. S3, sixteen.", E('60 ÷ 600 = 1/10') + g('S1: 24, S2: 20, S3: 16')),
      S("Check. Twenty-four plus twenty plus sixteen is sixty.", E('24 + 20 + 16 = 60 ✓'))
    ]),
    SC('Good questions', 'Example 4: leading questions', [
      S("A leading question pushes people towards one answer. Compare. Do you agree that the awful new cafeteria food is rubbish? That is leading. A fair question is. How would you rate the new cafeteria food? Very good, good, fair, poor, very poor.", r('Do you agree the food is rubbish?') + g('How would you rate the food?'))
    ]),
    SC('Answer boxes', 'Example 5: no overlaps, no gaps', [
      S("When we give answer boxes, they must not overlap, and must not leave gaps. Ages ten to twenty, twenty to thirty. Someone aged twenty fits in both. Better. Ten to nineteen, twenty to twenty-nine, thirty to thirty-nine. Every whole age fits in exactly one box.", r('10–20, 20–30') + g('10–19, 20–29, 30–39'))
    ]),
    SC('Fair questions', 'Example 6: one thing at a time', [
      S("Ask one thing per question. Do you like football and swimming? If someone likes one but not the other, they cannot answer. Ask two questions. Also, include a choice like none or other, so everyone has an answer that fits.", r('Do you like football and swimming?') + g('Q1: football? Q2: swimming?'))
    ]),
    SC('Watch out!', 'Common mistakes, with examples', [
      S("Mistake one. Asking a convenient group. To find out how often people in a town use the library, a student asks people leaving the library. Wrong: this gives only users. Nearly everyone will say often. Ask people in the high street, chosen randomly.", r('Asking people at the library  ✗') + g('Random people in the high street  ✓')),
      S("Mistake two. Rounding a stratified sample wrongly. A school has two hundred and forty in S1, two hundred in S2, one hundred and sixty in S3, and we want sixty. Wrong: take twenty from each year. S1 is bigger than S3, so it should have more. Twenty-four, twenty, sixteen.", r('20, 20, 20  ✗') + g('24, 20, 16  ✓')),
      S("Mistake three. Overlapping answer boxes. How many hours of sleep? Zero to five, five to ten. Someone who sleeps exactly five hours does not know which box to tick. Make boxes that do not overlap. Zero to less than five, five to less than ten.", r('0–5, 5–10  ✗') + g('0 to <5, 5 to <10  ✓'))
    ]),
    L.turn("Your turn! Number one. Is asking only the members of a football club about their favourite sport a fair sample of a town? Pause and think.", E('?'), "No. It is biased, because football club members probably like football.", g('Biased')),
    L.turn("Your turn! Number two. A school has three hundred boys and two hundred girls. A stratified sample of fifty is taken. How many girls? Pause and try it.", E('200 ÷ 500 × 50'), "Two out of five of fifty, twenty girls.", g('20')),
    L.turn("Your turn! Number three. Fix the answer boxes. Ten to twenty, twenty to thirty. Pause and try it.", E('10–20, 20–30'), "Ten to nineteen, twenty to twenty-nine.", g('10–19, 20–29')),
    L.rec('How do you choose a fair sample and write good survey questions?', "A sample should be random and big enough to represent the population. A biased sample gives misleading results. In a stratified sample, take the same fraction from each group. Questions should be clear, not leading, and ask one thing. Answer boxes must not overlap and must not leave gaps.", ['Random and large enough', 'Avoid bias', 'Stratified: same fraction', 'No overlaps, no gaps'])
  ]);

  L.use(852, ['How do you interpret and describe data?', 'How do you find the mean, median, mode and range, including from a frequency table?', 'How do you draw and use scatter graphs and the line of best fit?', 'How do you draw and use cumulative frequency graphs?', 'Standard deviation', 'Quartiles and box plots', 'Two-way tables, Venn diagrams and pie charts', 'How do you use Venn diagrams and the or rule for overlapping events?', 'How do you use independent events and tree diagrams?', 'How do you use relative frequency and expected outcomes?', 'Quartiles and probability', 'How do you choose a fair sample and write good survey questions?']);
})();
