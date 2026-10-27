/* stories4.js: short real-life stories in a teacher's voice, chosen by what each slide is about.
   BT.pickStory(topic, slideTitle, goal, k) returns one story; slide 2 of every lesson uses it. */
(function () {
  'use strict';
  var S = Studio, BT = window.BT = window.BT || {};
  var T = [
    ['place', /place value|digit|column|zero holds|saying big|expanded form|partition|ten times|10 times/,
      ['Think about the crowd at Hampden Park. If the scoreboard says 51,684 fans, the 1 is not worth one person. It is worth one thousand people, because of the column it sits in. Same digit, very different crowd!',
       'Picture a cash machine. Typing 500 gets you five hundred pounds, and typing 50 only gets you fifty. The digits are the same but the places are different, and that is why banks care about place value so much.',
       'When you save up for a games console, the price tag 2,045 hides a zero. That zero holds the hundreds place open. Without it you would read 245, and the console would suddenly cost a lot less!']],
    ['round', /round|estimat|nearest|approximat/,
      ['The newsreader says that about 40,000 people were at the concert. Nobody counted every single person. They rounded the exact number so it is quick to say and easy to remember.',
       'You are at the shop with a basket of £1.95, £2.10 and £3.90. Round each to the nearest pound and you can add 2 + 2 + 4 in your head. You know you need about £8 before you even reach the till.',
       'A builder rounds the length of a plank to the nearest ten centimetres before ordering. Rounding to estimate stops you ordering far too much, or far too little.']],
    ['neg', /negative|below zero|integers|number line.*neg|temperature/,
      ['It is a cold winter morning in Aviemore and the thermometer says minus 4. By lunchtime it has warmed up by 6 degrees. Counting up the number line from minus 4 shows it is now 2 degrees, just above freezing.',
       'A bank balance can go below zero when you spend more than you have. Owing £15 is a negative number. If someone gives you £20, you climb up the number line and you are £5 in the green.',
       'In a lift, the buttons in a big car park go down to minus 1 and minus 2. Going from floor 3 down to floor minus 2 is a journey of 5 floors. Negative numbers are everywhere once you look.']],
    ['dec', /decimal place|comparing decimals|ordering|tenths|hundredths|thousandths/,
      ['Three sprinters finish a race in 11.62, 11.6 and 11.58 seconds. Who wins? Lining the decimals up by place value tells us 11.58 is the smallest time, so that runner wins by a hundredth of a second.',
       'At the petrol station the price is shown as 142.9 pence per litre. That 0.9 is nine tenths of a penny. Decimals let shops charge tiny differences that really add up.',
       'In the school sports day, jumps are measured to the nearest centimetre, like 2.45 metres. The 4 is tenths of a metre and the 5 is hundredths. Reading decimals correctly decides who gets the medal.']],
    ['addsub', /\\badd|subtract|inverse|take away|\\btotal\\b|difference/,
      ['You are saving pocket money. You had £247 in your account and you pay in £86. Adding in columns, with carrying, tells you exactly what you have now. You can check by subtracting £86 again, which is the inverse.',
       'A ferry to Arran carries 348 passengers on the morning sailing and 275 in the afternoon. Adding the two numbers gives the day’s total. Then take away the number of seats to find how many were empty.',
       'Football fans love differences. If one team has 72 points and another has 58, subtracting tells us the gap is 14 points. That one little subtraction decides who is top of the league.']],
    ['mult', /multipl|array|area method|times table|doubl|halv|product|lots of/,
      ['A baker puts buns on trays in 6 rows of 8. You do not need to count them one at a time. 6 times 8 gives 48 buns, and an array shows you exactly why.',
       'Tickets for the school show cost £7 each and 24 families buy one. Multiplying 24 by 7 tells the school how much money it has raised. Splitting 24 into 20 and 4 makes it easy to do in your head.',
       'Doubling is a superpower in the kitchen. A recipe for 4 people uses 150 grams of pasta. For 8 people, double it. For 2 people, halve it. Doubling and halving is multiplication in disguise.']],
    ['div', /divi|chunk|remainder|sharing|grouping|short division/,
      ['You have 50 stickers to share equally between 6 friends. Each friend gets 8, and 2 are left over. That remainder is a real thing, and you have to decide what to do with it. Perhaps you keep them for yourself!',
       'A minibus holds 15 people and 100 pupils are going on a trip. 100 divided by 15 is 6 remainder 10, so you need 7 minibuses, not 6. The remainder changes the answer.',
       'You are planning a long trip and each leg takes 4 hours. If the whole journey is 26 hours, dividing tells you how many full legs you make, and what is left at the end.']],
    ['bidmas', /order of operations|bidmas|bodmas|brackets first/,
      ['At the shop, you buy 2 packs of pencils at £3 each and a £4 rubber. You write 4 + 2 × 3. If you add first you get 18, but the right bill is £10. Multiplication goes before addition, and that is why the order of operations matters.',
       'A phone calculator and your teacher agree for a reason. Everybody follows the same order: brackets, then powers, then multiplying and dividing, then adding and subtracting. Without agreement, the same sum would have different answers.',
       'A game gives you 10 points, then 3 bonus rounds of 5 points each. 10 + 3 × 5 is 25. If someone says 65, they added first, and that is the classic mistake.']],
    ['frac', /parts of a whole|fraction ideas|equivalent|simplif|numerator|denominator|fraction words|what is a fraction/,
      ['A pizza is cut into 8 equal slices and you eat 2. You have eaten two eighths. If the pizza had been cut into 4 slices, one slice would be the same amount. That is what equivalent fractions mean.',
       'Look at a bar of chocolate with 12 squares. If you give 3 squares to your friend, she gets three twelfths, and that simplifies to one quarter. Same amount, simpler words.',
       'Fractions only work when the parts are equal. A cake cut into one huge slice and one tiny slice is not cut in halves. Fair sharing is the whole point of a fraction.']],
    ['fracamt', /fraction of an amount|fractions of amounts|fractions in real life|of an amount|sale/,
      ['A jacket costs £60 and the sale sign says one third off. To find a third, divide by 3 to get £20 off. The jacket now costs £40. Fractions of amounts help you spot a good deal.',
       'You have 24 sweets and give a quarter to your brother. A quarter of 24 is 6, so you have 18 left. Dividing by the bottom number and then multiplying by the top is the trick.',
       'A football team plays 30 games and wins two thirds of them. Find a third by dividing by 3, which is 10, then double it. They won 20 games.']],
    ['fracadd', /adding and subtracting fractions|common denominator|different denominators|mixed number|improper|multiplying fractions|dividing fractions|fraction of a fraction/,
      ['You drink three eighths of a bottle at break and two eighths after lunch. Because the pieces are the same size, you just add the tops: five eighths. If the sizes were different, you would first change them to the same denominator.',
       'A recipe needs one and a half cups of flour, and you want to make it twice. Two lots of one and a half is 3 cups. Mixed numbers and improper fractions are two ways of writing the same amount.',
       'You eat half of the three quarters of a cake that was left. Half of three quarters is three eighths. A fraction of a fraction is just multiplication.']],
    ['percent', /percent|per cent|%|discount|\\bvat\\b|interest|profit|\\bloss\\b|\\btax\\b|multiplier|increase|decrease/,
      ['In the shops, a sign says 25% off a £40 coat. 25% is a quarter, so you take £10 off and pay £30. Percentages help you work out a bargain in a few seconds.',
       'A phone battery shows 80%. That means 80 out of every 100 parts are full. Percent just means out of 100, and it is how we compare things fairly, even when the totals are different.',
       'Your savings account pays interest, say 3% a year. On £200 that is £6. Percentages are how banks, shops and governments talk about money every day.']],
    ['fdp', /fractions, decimals|three ways|equivalent forms|convert/,
      ['One half, 0.5 and 50% are three ways of saying the same thing. On a football screen they show possession as a percentage. A commentator says half. A calculator shows 0.5. They all mean the same amount.',
       'A test score of 18 out of 20 can be written as nine tenths, 0.9 or 90%. Choosing the form that suits the situation makes it easy to compare with a friend’s result.',
       'At the shop, a quarter of a litre is 0.25 litres and it is also 25% of a litre. Switching between forms is a skill that you will use for the rest of your life.']],
    ['units', /units|metric|imperial|convert|length|mass|weight|capacity|measure/,
      ['A recipe says 500 grams of flour but your scales show kilograms. 500 grams is half a kilogram, so you measure 0.5 kg. Knowing how units link makes cooking, building and sport easier.',
       'A road sign in Scotland shows miles, but a map for a school trip uses kilometres. About 8 kilometres is 5 miles. Imperial and metric live side by side in real life.',
       'A water bottle holds 750 millilitres. Four bottles hold 3 litres. Changing between millilitres and litres is just multiplying or dividing by 1,000.']],
    ['area', /perimeter|area|rectangle|compound|l-shaped|garden/,
      ['You want to put a fence around a garden that is 12 metres long and 8 metres wide. The fence goes around the edge, so you need the perimeter: 12 + 8 + 12 + 8 = 40 metres. To buy grass seed you need the area instead.',
       'A classroom floor is 9 metres by 7 metres. To work out how much carpet to buy, you multiply to find the area, 63 square metres. Perimeter is the distance round, area is the space inside.',
       'A pitch for five-a-side football is a rectangle. The perimeter tells you how long the touchline markings are, and the area tells you how much grass there is to look after.']],
    ['volume', /volume|capacity|prism|cylinder|cone|sphere|pyramid|surface area/,
      ['You fill a fish tank that is 50 centimetres long, 30 wide and 40 high. Volume tells you how much water it holds: 50 × 30 × 40 = 60,000 cubic centimetres, which is 60 litres.',
       'A can of juice is a cylinder. The volume tells the factory how much juice goes inside, and the surface area tells them how much metal they need to make the can.',
       'A delivery driver packs boxes into a van. The volume of each box and the volume of the van decide how many will fit. Maths saves a lot of wasted trips.']],
    ['time', /time|clock|24-hour|timetable|duration|calendar|\\bam\\b|\\bpm\\b/,
      ['Your train leaves Glasgow at 14:25 and the journey takes 1 hour 50 minutes. Adding on gives an arrival time of 16:15. The 24-hour clock avoids any confusion between morning and afternoon.',
       'The film starts at 6:45 pm and lasts 2 hours 10 minutes. Finishing at 8:55 pm helps you tell your parents when to collect you. Time problems are counting on, a bit at a time.',
       'On a bus timetable, one bus leaves at 07:40 and the next at 08:05. The gap between them is 25 minutes. Working out intervals like this helps you decide when to leave the house.']],
    ['money', /money|budget|change|spend|saving|bank|currency|exchange|wage|pay|price|cost|finance/,
      ['You go to the shop with £10 and buy a sandwich for £3.45 and a drink for £1.20. Add them up, then take them from £10. The change is £5.35. You do this kind of sum every time you buy lunch.',
       'On holiday, £1 is worth about 1.15 euros. A souvenir costs 23 euros. Dividing by the exchange rate tells you what it costs in pounds. Currency exchange is multiplication and division.',
       'Saving £5 a week for 12 weeks gives £60. A budget helps you plan what to spend and what to keep. Simple adding and multiplying keep your money under control.']],
    ['speed', /speed|distance|rate|journey|km\/h|mph/,
      ['A car goes 120 kilometres on the motorway in 2 hours. Its speed is 120 divided by 2, which is 60 km/h. Speed, distance and time are linked, and if you know two of them you can find the third.',
       'You walk to school at 4 kilometres an hour and it takes you half an hour. The distance is 2 kilometres. Runners, cyclists and pilots all use this link every day.',
       'A ferry crossing is 18 miles and sails at 12 miles per hour. Dividing distance by speed gives 1.5 hours. That is how a timetable is made.']],
    ['pattern', /pattern|sequence|nth|term|rule/,
      ['Stand a row of tables together for a party. One table seats 4 and each extra table adds 2 more. The pattern is 4, 6, 8, 10, and once you spot the rule, you can find the number of seats for any number of tables.',
       'Matchstick houses in a row use 5, 9, 13 and so on. Each new house adds 4. A rule saves you building them all, and lets you predict the 20th house without drawing it.',
       'Taxis often charge a start fee plus a rate per mile. The costs follow a pattern, and the rule lets you find the fare for any distance.']],
    ['algebra', /algebra|equation|solve|letter|formula|expression|substitut|inequal|bracket|factoris|expand|subject|simultaneous|unknown/,
      ['I am thinking of a number. I double it and add 3 and get 11. Writing that as 2n + 3 = 11 lets us undo each step and find n = 4. Algebra is a neat way to solve number puzzles.',
       'A plumber charges £30 to arrive plus £20 for each hour of work. The cost is C = 30 + 20h. For a 3-hour job, you put h = 3 into the formula and get £90. Formulas are rules that always work.',
       'Two friends buy snacks and one buys 2 bags of crisps and 1 drink for £3. Letters can stand for the prices, and equations help you find out the cost of each item.']],
    ['lines', /straight line|gradient|y = mx|intercept|coordinate|graph|plot|axes|axis/,
      ['A taxi charges £3 to start plus £2 a mile. Plot the cost against the miles and you get a straight line. The gradient is the £2 a mile, and the point where it crosses the axis is the £3 start fee.',
       'When you play a map game, A4 on the grid and (4, 3) are both ways to say exactly where something is. Coordinates give every point on a grid its own address.',
       'A phone plan has a fixed fee plus a price per gigabyte. A straight line graph shows the total cost at a glance, and the steeper the line, the more each extra gigabyte costs.']],
    ['angles', /angle|triangle|polygon|parallel|perpendicular|quadrilateral|bearing/,
      ['A skateboarder lands a ramp that is tilted at 30 degrees. The angle tells us how steep it is. Angles inside a triangle always add up to 180 degrees, so you can find a missing one with a quick sum.',
       'The hands of a clock at 3 o’clock make a right angle, 90 degrees. At half past six the hands make a straight line, 180 degrees. Angles are all around us.',
       'A pilot is told to fly on a bearing of 090 degrees, which is east. Bearings are angles measured clockwise from north, and they keep ships and aeroplanes on course.']],
    ['symmetry', /symmetry|reflect|rotat|translat|enlarge|similar|scale|transformation|mirror/,
      ['Look in the mirror at a butterfly picture. The left and right halves match exactly. The mirror line is a line of symmetry, and each point on one side is the same distance from the line as its twin.',
       'A Scottish flag, the Saltire, has line symmetry. If you fold it along the middle, the two halves match. Designers use symmetry in flags, logos and patterns because it looks balanced.',
       'On a map, 1 centimetre might stand for 5 kilometres. The map is an enlargement or reduction of the real place. Scale factors keep every shape in proportion.']],
    ['shape', /shape|3d|face|edge|vertices|net|2d|quadrilateral|prism/,
      ['A cereal box is a cuboid. It has 6 faces, 12 edges and 8 vertices. The flat card it was made from, before folding, is called a net.',
       'Honeycomb is made from hexagons. Bees choose them because hexagons fit together with no gaps, and they use the least wax. Knowing the properties of shapes explains why nature uses them.',
       'Road signs are different shapes for a reason. A triangle warns you, a circle gives an order, and a square gives information. Shapes carry meaning.']],
    ['circle', /circle|circumference|radius|diameter|\\barc\\b|sector|\\bpi\\b/,
      ['A bike wheel has a diameter of 60 centimetres. Each full turn takes the bike forward by the circumference, about 188 centimetres. That is pi times the diameter.',
       'A round pizza with radius 15 centimetres has an area of about 707 square centimetres. Bigger pizzas have much more pizza, because area depends on the radius squared.',
       'A roundabout is a circle. Cars travelling around the outside travel further than cars at the inside, because the circumference grows with the radius.']],
    ['pyth', /pythag|trigon|\\b(sin|cos|tan)\\b|hypotenuse|right-angled|elevation|depression/,
      ['A ladder leans against a wall. The ladder, the wall and the ground make a right-angled triangle. If the ladder is 5 metres long and the foot is 3 metres from the wall, Pythagoras says it reaches 4 metres up.',
       'A surveyor cannot climb a tower to measure it, so they measure the distance along the ground and the angle to the top. Trigonometry then gives the height without leaving the ground.',
       'Your phone’s GPS uses triangles to find where you are. Tall buildings, mountains and ships are all measured with the same right-angled triangle ideas.']],
    ['data', /bar chart|pictogram|line graph|pie chart|tally|chart|collect|frequency|data|table|venn|carroll|stem/,
      ['The class votes for their favourite snack. You collect the votes in a tally chart and draw a bar chart. At a glance you can see that pizza wins, and that is much quicker than reading a list.',
       'A weather forecast uses a line graph to show temperatures through the week. You can see the trend at a glance, and spot the warmest day, without reading every number.',
       'A pie chart shows how a family spends its day, for example sleep, school and play. Each slice is a fraction of the whole, so comparing slices is easy.']],
    ['avg', /mean|median|mode|range|average|quartile|box plot|spread|correlation|scatter|cumulative/,
      ['Five friends score 6, 7, 7, 9 and 11 in a quiz. The mode is 7 because it appears most. The mean is 8, found by sharing the total equally. The range is 5. Each average tells a different story.',
       'A football manager wants to know how many goals a team scores in a typical game. The mean smooths out one huge win, so it gives a fair idea of normal.',
       'A scatter graph of hours of revision against test score shows a pattern going upwards. That is positive correlation, and it suggests more revision tends to mean better marks.']],
    ['prob', /probab|chance|likel|dice|outcome|tree diagram|spinner|fair|random|expected/,
      ['You roll a dice in a board game. There are 6 equally likely outcomes, so the chance of rolling a 6 is one in six. Probability puts a number on how likely something is.',
       'The weather forecast says a 30% chance of rain. That means on 3 days out of 10 like this, it will rain. Probability helps you decide whether to take an umbrella.',
       'A raffle sells 200 tickets and you buy 5. Your chance of winning is 5 out of 200, or one in forty. Knowing your chances helps you make sensible choices.']],
    ['ratio', /ratio|proportion|recipe|sharing in|scale|unit price|best buy|inverse|direct/,
      ['A smoothie recipe uses 2 parts banana to 3 parts milk. Keep the same ratio and you can make a jug as large as you like, and it will taste the same. Ratio keeps things fair and consistent.',
       'You mix paint with 1 part blue to 4 parts white. Using 3 cups of blue you need 12 cups of white. Proportion lets us scale a recipe, a paint mix or a plan.',
       'Two shops sell juice. One has 2 litres for £3 and the other has 3 litres for £4. Finding the price per litre shows which is the best buy.']],
    ['factors', /factor|multiple|prime|square number|cube number|hcf|lcm|divisib|power|root|index|indices|standard form|triangular/,
      ['You are arranging 24 chairs in equal rows. You could have 2 rows of 12, 3 rows of 8, 4 rows of 6, and so on. Those numbers are the factors of 24, and they tell you every way to make equal rows.',
       'Two buses leave the station, one every 6 minutes and one every 8 minutes. They leave together at 24 minutes. The lowest common multiple tells you when the buses leave together again.',
       'Computer codes rely on prime numbers, which have only two factors. Banks use huge primes to keep your card details secret. Primes are small ideas with big jobs.']],
    ['reason', /reason|problem|puzzle|logic|guess|work backwards|bar model|code|odd one|multi-step|strategy/,
      ['A detective looks at clues one at a time and rules things out. Reasoning in maths works the same way. You read carefully, pick out what you know, and decide which step comes next.',
       'You are told the total, one of two parts and want the other part. Drawing a bar model shows the whole and the parts clearly. A good picture can turn a confusing problem into a simple sum.',
       'When a problem is stuck, you can guess, check and improve. A smart guess, a test and a better guess is exactly how scientists and engineers work.']],
    ['spatial', /spatial|cube|view|mirror|turn|map|direction|net|pattern grid|rotation|position/,
      ['A builder looks at a plan and imagines the finished house from every side. Spatial thinking means picturing shapes and turning them in your head, which engineers, designers and gamers do every day.',
       'When you follow a map, you picture yourself turning left or right. Giving directions is an exercise in spatial thinking, and it helps if you imagine standing where the map is.',
       'A packed suitcase is a puzzle of shapes. Spotting how pieces fit and turn is exactly the skill these questions practise.']]
  ];
  var FALL = {
    1: 'place', 2: 'addsub', 3: 'frac', 4: 'percent', 5: 'units', 6: 'pattern', 7: 'angles', 8: 'data', 9: 'reason', 10: 'factors', 11: 'ratio', 12: 'speed', 13: 'spatial'
  };
  var ORDER = ['bidmas','fracadd','fracamt','frac','fdp','percent','neg','round','dec','place','mult','div','addsub','area','volume','units','time','money','speed','circle','pyth','lines','algebra','pattern','symmetry','angles','shape','avg','prob','data','ratio','factors','reason','spatial'];
  T.sort(function (a, b) { return ORDER.indexOf(a[0]) - ORDER.indexOf(b[0]); });
  var byKey = {}; T.forEach(function (t) { byKey[t[0]] = t; });
  function base(n) { var t = S.topics[n]; n = Number(n); if (n >= 800) return n % 100; if (n >= 700) return n - 700; if (n >= 500) return n - 500; return n; }
  var TITLE_KEY = [[/spatial/i, 'spatial'], [/reasoning/i, 'reason'], [/fraction/i, 'frac'], [/percent|decimal/i, 'percent'], [/ratio/i, 'ratio'], [/factor|prime|power|root|number:/i, 'factors'], [/money|finance/i, 'money'], [/time|speed/i, 'speed'], [/volume|area|perimeter/i, 'area'], [/algebra|equation|sequence/i, 'algebra'], [/straight line/i, 'lines'], [/angle|polygon|bearing/i, 'angles'], [/shape|symmetry|similar/i, 'symmetry'], [/pythag|trigon/i, 'pyth'], [/circle/i, 'circle'], [/data|statistic|probab|information/i, 'data'], [/place value|whole numbers|round/i, 'place'], [/four operations|integers/i, 'addsub'], [/measure/i, 'units']];
  function hash(s) { var h = 0; for (var i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0; return Math.abs(h); }
  BT.pickStory = function (n, title, goal, k) {
    var tl = String(title || '').toLowerCase(), text = tl + ' ' + String(goal || '').toLowerCase(), hit = null, i;
    for (i = 0; i < T.length; i++) if (T[i][1].test(tl)) { hit = T[i]; break; }
    if (!hit) for (i = 0; i < T.length; i++) if (T[i][1].test(text)) { hit = T[i]; break; }
    if (!hit) {
      var tt = (S.topics[n] && S.topics[n].title) || '';
      for (i = 0; i < TITLE_KEY.length; i++) if (TITLE_KEY[i][0].test(tt)) { hit = byKey[TITLE_KEY[i][1]]; break; }
    }
    if (!hit) hit = byKey[FALL[base(n)] || 'reason'];
    var pool = hit[2];
    return pool[(hash(String(n) + title) + k) % pool.length];
  };

  /* Deeper insight for "Let's go deeper": why the idea works, then the mistake to watch for. Chosen the same way as the stories. */
  var INS = {
    place: ['Our number system is built on tens. Each column is worth ten times the column to its right, so moving one place left makes a digit ten times bigger, and moving one place right makes it ten times smaller. That single rule explains why we can write any number, however big, with only ten digits.', 'Watch out for zeros. A zero is worth nothing on its own, but it keeps the other digits in their correct columns. Writing 305 when you mean 3,050 changes the number completely.'],
    round: ['Rounding replaces a number with a nearby one that is easier to use. To decide which way to go, look only at the digit just to the right of the place you are rounding to. If it is 5 or more, round up. If it is 4 or less, keep the digit the same. Everything to the right then becomes zero.', 'The classic slip is looking at the wrong digit. Do not look at the whole number, only the next digit along. Also remember that rounding up from 9 carries over: 3,960 to the nearest hundred is 4,000, not 3,900.'],
    neg: ['Negative numbers are the numbers to the left of zero on the number line. The further left you go, the smaller the number is, so −8 is smaller than −3 even though 8 is bigger than 3. Adding moves you right and subtracting moves you left.', 'The usual mistake is thinking that a bigger digit means a bigger number. With negatives it is the other way round. Draw a quick number line if you are ever unsure which is bigger.'],
    dec: ['A decimal point separates whole numbers from parts of a whole. Each place after the point is ten times smaller than the one before it: tenths, then hundredths, then thousandths. To compare decimals, line up the decimal points and compare place by place from the left.', 'Do not think that more digits means a bigger number. 0.45 is bigger than 0.4 because it has 5 hundredths extra, but 0.5 is bigger than 0.45. Adding a zero on the end, 0.50, makes the comparison clear.'],
    addsub: ['Column methods work because every digit stays in its own place. When a column adds to ten or more, you carry one to the next column. When you subtract and the top digit is too small, you exchange one from the next column. Estimating first gives you a quick check that the answer is sensible.', 'Check using the inverse. If 247 + 86 = 333 then 333 − 86 must give back 247. Most errors come from a misplaced digit, a forgotten carry or an exchange that is not crossed out properly.'],
    mult: ['Multiplication is repeated addition, and an array or area model shows why. When numbers are large, split one of them into friendly parts, such as 24 × 7 = 20 × 7 + 4 × 7, then add the results. Doubling and halving can turn a hard sum into an easy one.', 'The common mistake is forgetting a part when you split a number, or lining up digits wrongly in the column method. Estimate first: 24 × 7 is a bit more than 20 × 7 = 140, so an answer of 16 or 1,680 would be clearly wrong.'],
    div: ['Division asks two kinds of question: how many are in each group, or how many groups can we make. Chunking takes away easy multiples of the divisor until nothing, or only a remainder, is left. Division is the inverse of multiplication, so you can always check by multiplying back and adding the remainder.', 'Think about what the remainder means in the story. 100 pupils in minibuses of 15 gives 6 remainder 10, but you still need a seventh minibus. Sometimes you round the answer up, sometimes you keep the remainder, and sometimes you write it as a fraction or decimal.'],
    bidmas: ['The order of operations is a shared agreement so everybody gets the same answer: brackets first, then powers, then multiplication and division from left to right, then addition and subtraction from left to right. Multiplication and division share the same rank, and so do addition and subtraction.', 'The most common mistake is working strictly from left to right. In 4 + 2 × 3 the multiplication comes first, giving 4 + 6 = 10, not 18. Use brackets, such as (4 + 2) × 3, when you really do want the addition to come first.'],
    frac: ['A fraction describes equal parts of a whole. The bottom number, the denominator, says how many equal parts the whole is cut into. The top number, the numerator, says how many of those parts we have. Multiplying or dividing the top and bottom by the same number gives an equivalent fraction, the same amount written differently.', 'The parts must be equal. Also, a bigger denominator means smaller pieces, so one eighth is smaller than one quarter. When you simplify, divide top and bottom by the same number until no number divides both.'],
    fracamt: ['To find a fraction of an amount, divide by the denominator to find one part, then multiply by the numerator to find the parts you want. Three fifths of 40 is: 40 ÷ 5 = 8, then 8 × 3 = 24. This also works backwards if you know the fraction and need the whole.', 'Do not mix up the order. Dividing by the top number instead of the bottom is the usual slip. A quick check: a fraction less than one whole must give an answer smaller than the amount you started with.'],
    fracadd: ['You can only add or subtract fractions when the pieces are the same size. If the denominators differ, change them to a common denominator first, then add or subtract the numerators and keep the denominator the same. Mixed numbers and improper fractions are two forms of the same amount.', 'Never add the denominators. One half plus one half is one whole, not two quarters. Always simplify your answer at the end, and turn an improper fraction into a mixed number if the question asks for it.'],
    fdp: ['Fractions, decimals and percentages are three ways to write the same amount. A percentage is a fraction out of 100, and a decimal is a fraction written in tenths and hundredths. Learn the key links: one half is 0.5 and 50%, one quarter is 0.25 and 25%, one tenth is 0.1 and 10%.', 'Be careful moving the decimal point. To change a decimal to a percentage multiply by 100, so 0.07 is 7% and not 70%. Check with a benchmark: 7 out of 100 is small, so 7% makes sense.'],
    percent: ['Percent means out of 100. To find 10%, divide by 10. Then build other percentages from it: 5% is half of 10%, and 20% is double. For an increase or decrease, find the change first, then add it on or take it off. A multiplier does this in one step.', 'The most common error is finding the percentage but forgetting to add or subtract it. A 20% discount on £50 takes off £10, so you pay £40, not £10. Always ask whether the question wants the amount of change or the new total.'],
    units: ['Units are the language of measure. Metric units are linked by multiples of 10, 100 and 1,000, so changing between them means multiplying or dividing by those numbers. Going to a smaller unit gives a bigger number, and going to a bigger unit gives a smaller number.', 'Always make the units match before you calculate. Adding 2 metres to 30 centimetres means changing to the same unit first. Also write the unit in your answer, because 5 is not the same as 5 kilometres.'],
    area: ['Perimeter is the distance around the edge of a shape, so you add the side lengths. Area is the amount of flat space inside, and for a rectangle it is length times width. Area is measured in square units, such as square centimetres, because it counts squares.', 'The big confusion is mixing the two up. Perimeter uses plain units like cm. Area uses squares, cm². For compound shapes, split them into rectangles, find each area, then add them up, being careful about missing side lengths.'],
    volume: ['Volume is the space inside a solid. For a cuboid it is length × width × height, and for a prism it is the area of the cross-section times the length. Volume is measured in cubic units, and 1 litre equals 1,000 cubic centimetres.', 'Make sure all lengths use the same unit before you multiply. Surface area and volume are different: surface area covers the outside, volume fills the inside, so one uses square units and the other uses cubic units.'],
    time: ['Time does not use tens, so it needs care. An hour has 60 minutes, and a day has 24 hours. To work out a duration, count on in steps: first to the next hour, then the whole hours, then the remaining minutes. The 24-hour clock avoids a.m. and p.m. confusion.', 'A common mistake is treating minutes like decimals. 1 hour 30 minutes is not 1.30 hours, it is 1.5 hours. When you cross past 60 minutes, remember to carry into the hours.'],
    money: ['Money problems use the same skills as other numbers, with the decimal point separating pounds and pence. Always line up the decimal points when you add and subtract, and write two digits after the point for pence. A budget adds up what you spend and compares it with what you have.', 'Watch your units. £1.50 and 150p are the same, but £1.50 and 150 pounds are not. For exchange rates, multiply to change to the other currency and divide to change back.'],
    speed: ['Speed, distance and time are linked by one relationship: distance = speed × time. Cover the one you want in the triangle: speed is distance ÷ time, time is distance ÷ speed. If you know two of them you can always find the third.', 'Check the units match. If the speed is in kilometres per hour, the time must be in hours, so 30 minutes must be written as 0.5 hours. On a graph, a steeper line means a faster speed and a flat line means stopped.'],
    pattern: ['A pattern follows a rule. To find a rule, look at how the numbers change from one term to the next. If it goes up by the same amount each time, that amount is the common difference, and it tells you the number to multiply the position by.', 'Do not just describe the pattern, find a rule that works for any term. Test it on a term you already know. If the rule is 3n + 1, the first term should be 4, the second 7, and so on.'],
    algebra: ['Algebra uses letters to stand for unknown numbers. To solve an equation, undo each operation in reverse order, doing the same thing to both sides so the equation stays balanced. Substitution means replacing a letter with a number and working out the answer.', 'Always do the same to both sides. Take care with signs, and check your answer by substituting it back into the original equation. If both sides do not match, go back and find the slip.'],
    lines: ['A straight line graph shows a relationship that changes at a steady rate. The gradient measures the steepness, found by the rise divided by the run, and the y-intercept is where the line crosses the y-axis. Together they give the equation y = mx + c.', 'Read coordinates in the right order: along first, then up or down. A negative gradient means the line goes downhill from left to right. Check a point from the line in the equation to see if it fits.'],
    angles: ['Angles are measured in degrees. Angles on a straight line add up to 180°, angles around a point add up to 360°, and the angles in a triangle add up to 180°. A quadrilateral’s angles add up to 360°. These facts let you find missing angles without a protractor.', 'Give reasons when you can. Say which rule you used. Do not trust a sketch to be exact unless it says it is drawn to scale. Remember that vertically opposite angles are equal.'],
    symmetry: ['A shape has line symmetry if a mirror line splits it into two halves that match exactly. Rotational symmetry means the shape looks the same after turning part of a full turn. In a reflection every point is the same distance from the mirror line, on the opposite side.', 'Check the distances, not just the direction. For a reflection, count squares from each point to the mirror line. For enlargement, multiply every length by the scale factor, and the angles stay the same.'],
    shape: ['Shapes are described by their properties: number of sides, equal sides, parallel sides, angles and symmetry. Knowing the properties lets you tell shapes apart, such as a square from a rhombus. For 3D shapes we count faces, edges and vertices.', 'Do not rely on how a shape looks. A rectangle turned on a corner is still a rectangle. Check the properties instead. Euler’s rule can help you check counts: faces + vertices − edges = 2.'],
    circle: ['A circle has a radius from the centre to the edge, and a diameter across the centre, which is twice the radius. The circumference is the distance around, found with π × diameter. The area is π × radius × radius.', 'Do not mix up radius and diameter. If you are given the diameter, halve it before you use the area formula. Circumference is a length so it uses plain units, and area uses square units.'],
    pyth: ['In a right-angled triangle, the longest side, opposite the right angle, is the hypotenuse. Pythagoras says that the square of the hypotenuse equals the sum of the squares of the other two sides. Trigonometry links the angles to the sides using sine, cosine and tangent.', 'Always label the sides first. To find the hypotenuse you add the squares and take the square root. To find a shorter side you subtract. For trigonometry choose the ratio from the sides you have: opposite, adjacent or hypotenuse.'],
    data: ['Data is information, and a good graph shows it clearly. A bar chart compares categories. A line graph shows how something changes over time. A pie chart shows fractions of a whole. Always read the title, the labels and the scale before you answer.', 'The scale is the usual trap. Check what each square or gridline is worth, as it is not always 1. A graph with a broken or unusual scale can mislead, so always read the numbers rather than judging by the look.'],
    avg: ['An average describes a typical value. The mean is the total shared out equally, the median is the middle value when the numbers are in order, and the mode is the most common value. The range is the largest minus the smallest, and it shows how spread out the data is.', 'Put the numbers in order before finding the median. If there are two middle numbers, the median is halfway between them. A single very large or small value can pull the mean away from what is typical.'],
    prob: ['Probability measures how likely an event is, on a scale from 0 (impossible) to 1 (certain). For equally likely outcomes it is the number of ways the event can happen divided by the total number of outcomes. All the probabilities of the outcomes add up to 1.', 'Probabilities are never bigger than 1 and never negative. Give an answer as a fraction, decimal or percentage. If something has not happened yet, the earlier results do not change the chances, so a coin has no memory.'],
    ratio: ['A ratio compares amounts of different things, like 2 parts banana to 3 parts milk. To share an amount in a ratio, add the parts to find the total number of parts, find the value of one part, then multiply. Simplify a ratio by dividing every number by the same factor.', 'Keep the order, because 2 : 3 is not the same as 3 : 2. Check by adding your shares to see if they equal the total. For best buys, compare the price per unit or the amount per pound.'],
    factors: ['A factor divides exactly into a number, and a multiple is in its times table. Prime numbers have exactly two factors, one and themselves. Every number can be built from primes. The highest common factor and the lowest common multiple help with fractions and timetables.', 'Remember that 1 is not prime, and 2 is the only even prime. Work through factors in pairs to be sure you have found them all. Powers tell you how many times a number is multiplied by itself, so 2³ is 8, not 6.'],
    reason: ['Good problem solving is a routine: read carefully, find what you know and what you need, choose a method, try it, and check the answer makes sense. Drawing a picture or a bar model, working backwards, or trying small numbers first are strategies that help when you are stuck.', 'Do not rush to calculate. Underline the question and the key numbers first. At the end, read the question again and check you have answered what was asked, with the right units.'],
    spatial: ['Spatial reasoning means picturing shapes in your mind and moving them: turning, flipping, folding and viewing from another side. To solve these puzzles, focus on one feature at a time, such as the position of one corner or one marked face, and follow it through the change.', 'Take it in small steps rather than trying to rotate the whole shape at once. Count cubes in layers, and remember that a mirror image is flipped while a rotation is only turned. Sketching or turning the page can help.']
  };
  BT.pickInsight = function (n, title, goal) {
    var tl = String(title || '').toLowerCase(), text = tl + ' ' + String(goal || '').toLowerCase(), hit = null, i;
    for (i = 0; i < T.length; i++) if (T[i][1].test(tl)) { hit = T[i]; break; }
    if (!hit) for (i = 0; i < T.length; i++) if (T[i][1].test(text)) { hit = T[i]; break; }
    if (!hit) {
      var tt = (S.topics[n] && S.topics[n].title) || '';
      for (i = 0; i < TITLE_KEY.length; i++) if (TITLE_KEY[i][0].test(tt)) { hit = byKey[TITLE_KEY[i][1]]; break; }
    }
    if (!hit) hit = byKey[FALL[base(n)] || 'reason'];
    return INS[hit[0]] || [];
  };
})();
