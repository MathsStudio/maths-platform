/* fl_s2.js: P2 stories and story-based lessons (Let's learn) for topics 202 to 205.
   Topic 201 (Ruby the rocket) is written inside fl_p2.js. Every lesson keeps the workbook question as its title. */
(function () {
  'use strict';
  var FL = window.FL, BT = window.BT; if (!FL || !FL.addStory || !BT) return;
  var V = BT.sv, P = FL.panel, T = FL.things, G = FL.groups, C = FL.coins, SH = FL.shape, ROW = FL.shapeRow;
  function clk(h, m) { return '<div style="width:170px;max-width:100%">' + V.clock(h, m) + '</div>'; }
  function big(t, col) { return '<div style="font-size:2.4rem;font-weight:800;color:' + (col || '#2b2340') + ';background:#fff;border:3px solid #2b2340;border-radius:16px;padding:6px 18px">' + t + '</div>'; }
  function cards(list) { return '<div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center">' + list.map(function (t) { return '<span style="background:#fff;border:3px solid #2b2340;border-radius:14px;padding:6px 12px;font-weight:800;color:#2b2340">' + t + '</span>'; }).join('') + '</div>'; }
  /* facts: [[words in the story, the fact written on the board]], shown when the story says those words */
  function W(say, pic, facts) { return { mode: 'watch', say: say, pic: pic, facts: facts }; }
  function TG(say, pic, options, answer, tip, explain) { return { mode: 'together', say: say, pic: pic, options: options, answer: answer, tip: tip, explain: explain }; }
  function Y(say, pic, options, answer, tip, explain) { return { mode: 'turn', say: say, pic: pic, options: options, answer: answer, tip: tip, explain: explain }; }
  function pg(pic, text, ask, facts) { return { pic: pic, text: text, ask: ask, facts: facts }; }
  function Q(q, options, answer, explain) { return { q: q, options: options, answer: answer, explain: explain }; }

  /* ================= 202 Adding and taking away: Benny's picnic ================= */
  FL.addStory(202, {
    story: { title: 'Benny’s Picnic', endPic: P('day', 'bear', T(10, 'apple', 5), 'Yum!'), endText: 'Benny and his friends ate every apple and every cake. Thank you for helping Benny add!',
      pages: [
        pg(P('day', 'bear', '', 'Hello!'), 'It is a sunny day. Benny the bear is going on a picnic!'),
        pg(P('day', 'bear', G(3, 2, 'apple')), 'Benny puts three red apples in his basket. Then he adds two more.', Q('How many apples are in the basket now?', [4, 5, 6], 5, 'Three and two make five.')),
        pg(P('pond', 'frog', G(2, 3, 'apple')), 'Frankie the frog hops over. He says: two and three makes five too! You can add in any order.'),
        pg(P('day', 'bear', G(4, 4, 'sweet')), 'Benny lays out the cakes. Four on one plate and four on the other. Double four is eight!'),
        pg(P('day', 'bear', G(4, 5, 'sweet')), 'Then Frankie brings five more cakes for a new plate. Benny has four. Four and five is double four and one more.', Q('What is <b>4 + 5</b>?', [8, 9, 10], 9, 'Double four is eight, and one more is nine.')),
        pg(P('day', 'bear', '<div style="width:230px">' + FL.frame(6, 4) + '</div>'), 'Benny counts the strawberries. Six red and four blue make ten!'),
        pg(P('day', 'bear', T(7, 'apple', 7) + '<div style="width:100%"></div>' + T(3, 'duck', 3), 'Oh no!'), 'Oh no! Three hungry ducks waddle over. Each duck takes one apple from the seven apples.', Q('How many apples are left?', [3, 4, 5], 4, 'Seven take away three is four.')),
        pg(P('day', 'bear', big('4 + 3 = 7<br>7 − 3 = 4')), 'Benny smiles. Four and three make seven, so seven take away three is four. Adding helps me take away!')
      ] },
    learn: [
      { title: 'Which way round should I add two numbers?', char: 'bear', screens: [
        W('I have three apples and five apples. Three and five make eight.', P('day', '', G(3, 5, 'apple'))),
        W('Now I swap them round. Five and three still make eight! The answer is the same.', P('day', '', G(5, 3, 'apple'))),
        W('Top tip: start with the bigger number and count on. Five … six, seven, eight.', P('day', '', big('5 + 3 = 8'))),
        TG('Two apples and six apples. How many altogether?', P('day', '', G(2, 6, 'apple')), [7, 8, 9], 8, 'Start with six, the bigger number, and count on two: seven, eight.', 'Six and two make eight.'),
        TG('Four and one make five. So what is one and four?', P('day', '', G(1, 4, 'apple')), [3, 5, 6], 5, 'Swapping the numbers does not change the answer.', 'One and four make five too.'),
        Y('One apple and seven apples. How many?', P('day', '', G(1, 7, 'apple')), [6, 8, 9], 8, 'Start with seven and count on one.', 'Seven and one make eight.'),
        Y('Seven and two make nine. So what is two and seven?', P('day', '', big('2 + 7 = ?')), [5, 9, 10], 9, 'Same numbers, any order.', 'Two and seven make nine.')
      ] },
      { title: 'Which order should I add numbers in?', char: 'bear', screens: [
        W('I have three plates of strawberries: six, three and four. That is a lot to add!', P('day', '', big('6 + 3 + 4'))),
        W('I look for two numbers that make ten. Six and four make ten! Then ten and three make thirteen.', P('day', '', '<div style="width:220px">' + FL.frame(6, 4) + '</div>' + T(3, 'apple', 3))),
        W('Pairs that make ten are my friends: one and nine, two and eight, three and seven, four and six, five and five.', P('day', '', cards(['1 + 9', '2 + 8', '3 + 7', '4 + 6', '5 + 5']))),
        TG('Seven, two and three. How many altogether?', P('day', '', big('7 + 2 + 3')), [11, 12, 13], 12, 'Seven and three make ten. Then add two.', 'Ten and two make twelve.'),
        TG('Five, eight and five. How many?', P('day', '', big('5 + 8 + 5')), [17, 18, 19], 18, 'Five and five make ten. Then add eight.', 'Ten and eight make eighteen.'),
        Y('One, six and nine. How many?', P('day', '', big('1 + 6 + 9')), [15, 16, 17], 16, 'Which two numbers make ten?', 'One and nine make ten, and six more is sixteen.'),
        Y('Four, three and six. How many?', P('day', '', big('4 + 3 + 6')), [12, 13, 14], 13, 'Four and six make ten.', 'Ten and three make thirteen.')
      ] },
      { title: 'How can using near doubles help me add numbers?', char: 'bear', screens: [
        W('A double is two of the same number. Double three is six.', P('day', '', G(3, 3, 'sweet'))),
        W('Three and four is nearly a double! Double three is six, and one more is seven.', P('day', '', G(3, 4, 'sweet'))),
        W('Five and six: double five is ten, and one more is eleven.', P('day', '', G(5, 6, 'sweet'))),
        TG('What is double four?', P('day', '', G(4, 4, 'sweet')), [6, 8, 9], 8, 'Count four, then four more.', 'Four and four make eight.'),
        TG('Five cakes and six cakes. How many?', P('day', '', G(5, 6, 'sweet')), [10, 11, 12], 11, 'Double five is ten. Then one more.', 'Five and six make eleven.'),
        Y('Six cakes and seven cakes. How many?', P('day', '', G(6, 7, 'sweet')), [12, 13, 14], 13, 'Double six is twelve. Then one more.', 'Six and seven make thirteen.'),
        Y('Two cakes and three cakes. How many?', P('day', '', G(2, 3, 'sweet')), [4, 5, 6], 5, 'Double two is four. Then one more.', 'Two and three make five.')
      ] },
      { title: 'How can adding help me with subtracting?', char: 'bear', screens: [
        W('Three and two make five. So if I have five apples and take two away, three are left.', P('day', '', big('3 + 2 = 5<br>5 − 2 = 3'))),
        W('Eight apples. Three ducks take one each. I think: three and what make eight? Three and five! So five are left.', P('day', '', T(8, 'apple', 4) + T(3, 'duck', 3))),
        W('Adding and taking away are a family. They use the same three numbers.', P('day', '', cards(['3 + 5 = 8', '5 + 3 = 8', '8 − 3 = 5', '8 − 5 = 3']))),
        TG('Six apples. Two ducks take one each. How many are left?', P('day', '', T(6, 'apple', 6) + T(2, 'duck', 2)), [3, 4, 5], 4, 'Think: two and what make six?', 'Two and four make six, so four are left.'),
        TG('What is nine take away four?', P('day', '', big('9 − 4')), [4, 5, 6], 5, 'Four and what make nine?', 'Four and five make nine, so nine take away four is five.'),
        Y('Ten apples. Three ducks take one each. How many are left?', P('day', '', T(10, 'apple', 5) + T(3, 'duck', 3)), [6, 7, 8], 7, 'Three and what make ten?', 'Three and seven make ten, so seven are left.'),
        Y('What is seven take away five?', P('day', '', big('7 − 5')), [1, 2, 3], 2, 'Five and what make seven?', 'Five and two make seven, so the answer is two.')
      ] }
    ]
  });

  /* ================= 203 Money: Molly's toy shop ================= */
  FL.addStory(203, {
    story: { title: 'Molly’s Toy Shop', endPic: P('shop', 'mouse', C([1, 2, 5, 10, 20, 50]), 'Bye!'), endText: 'Molly closed her shop with a happy smile. Thank you for helping with the money!',
      pages: [
        pg(P('shop', 'mouse', '', 'Hello!'), 'Molly the mouse has a little toy shop. Let’s help her today!'),
        pg(P('shop', 'mouse', C([1, 2, 5, 10, 20, 50, 100, 200], 8)), 'These are our coins: one penny, two pence, five pence, ten pence, twenty pence, fifty pence, one pound and two pounds.'),
        pg(P('shop', 'mouse', C([500, 1000, 2000, 5000, 10000])), 'Notes are paper money for bigger amounts. Here are the notes: five pounds, ten pounds, twenty pounds, fifty pounds and one hundred pounds.', null, [['here are the notes', 'Notes: £5, £10, £20, £50, £100']]),
        pg(P('shop', 'owl', C([2, 2, 1])), 'Ollie the owl wants a ball for five pence. He pays with two pence, two pence and one penny.', Q('Do 2p, 2p and 1p make <b>5p</b>?', ['Yes', 'No'], 'Yes', 'Two, four, five. Yes!')),
        pg(P('shop', 'owl', C([5, 2, 1])), 'Next Ollie wants a toy car. He pays with five pence, two pence and one penny.', Q('How much does Ollie pay?', ['7p', '8p', '9p'], '8p', 'Five, seven, eight. Eight pence.')),
        pg(P('shop', 'frog', C([20])), 'Frankie the frog wants a kite for fifteen pence. He only has a twenty pence coin.', null, [['fifteen pence', 'Kite: 15p'], ['twenty pence', 'Frankie has 20p']]),
        pg(P('shop', 'mouse', FL.trackP(15, 20, [15, 20], [[15, 16], [16, 17], [17, 18], [18, 19], [19, 20]])), 'Molly counts on from fifteen to twenty: sixteen, seventeen, eighteen, nineteen, twenty.', Q('How much change does Frankie get?', ['4p', '5p', '6p'], '5p', 'Five jumps, so five pence change.'))
      ] },
    learn: [
      { title: 'What coins and notes do we use?', char: 'mouse', screens: [
        W('These are the small coins: one penny, two pence and five pence.', P('shop', '', C([1, 2, 5])), [['small coins', 'Small coins: 1p, 2p, 5p']]),
        W('These are worth more: ten pence, twenty pence and fifty pence. Look at their shapes!', P('shop', '', C([10, 20, 50])), [['worth more', 'Bigger coins: 10p, 20p, 50p']]),
        W('These are pound coins: one pound and two pounds. And these are notes: five, ten, twenty, fifty and one hundred pounds.', P('shop', '', C([100, 200, 500, 1000, 2000, 5000, 10000])), [['pound coins', 'Pound coins: £1 and £2'], ['these are notes', 'Notes: £5, £10, £20, £50, £100']]),
        TG('What is this coin?', P('shop', '', C([10])), ['1p', '10p', '50p'], '10p', 'Read the number on the coin.', 'It is ten pence.'),
        TG('What is this coin? It has seven sides.', P('shop', '', C([50])), ['5p', '20p', '50p'], '50p', 'The big coin with seven sides is fifty pence.', 'It is fifty pence.'),
        Y('What is this coin?', P('shop', '', C([200])), ['£1', '£2', '20p'], '£2', 'It is gold and silver, with a £ sign.', 'It is two pounds.'),
        Y('Is this money a coin or a note?', P('shop', '', C([500])), ['coin', 'note'], 'note', 'Notes are made of paper and are flat and long.', 'It is a five pound note.')
      ] },
      { title: 'How can different coins and notes make the same total?', char: 'mouse', screens: [
        W('Ten pence can be one ten pence coin …', P('shop', '', C([10]))),
        W('… or two five pence coins. Five, ten. Still ten pence!', P('shop', '', C([5, 5])), [['still ten', '5p + 5p = 10p']]),
        W('… or five pence, two pence, two pence and one penny. Five, seven, nine, ten!', P('shop', '', C([5, 2, 2, 1])), [['one penny', '5p + 2p + 2p + 1p = 10p']]),
        TG('Do these coins make ten pence?', P('shop', '', C([5, 5])), ['Yes', 'No'], 'Yes', 'Count them: five, ten.', 'Five and five make ten pence.'),
        TG('How much money is this?', P('shop', '', C([2, 2, 2])), ['4p', '6p', '8p'], '6p', 'Count in twos: two, four, six.', 'Six pence.'),
        Y('How much money is this?', P('shop', '', C([10, 5, 1])), ['15p', '16p', '17p'], '16p', 'Start with the biggest coin: ten, then fifteen, then …', 'Ten, fifteen, sixteen. Sixteen pence.'),
        Y('Which coins make twenty pence?', P('shop', '', C([20])), ['10p + 10p', '10p + 5p', '5p + 2p'], '10p + 10p', 'Add each pair. Which one makes twenty?', 'Ten and ten make twenty pence.')
      ] },
      { title: 'How can adding coins help me pay for something?', char: 'mouse', screens: [
        W('A lolly costs twelve pence. I pay with ten pence and two pence. Ten, twelve!', P('shop', '', C([10, 2])), [['ten pence and two pence', '10p + 2p = 12p']]),
        W('Start with the biggest coin, then count on. Twenty, twenty-five, twenty-six. Twenty-six pence.', P('shop', '', C([20, 5, 1])), [['twenty-six pence', '20p + 5p + 1p = 26p']]),
        W('Counting on is quicker than counting in ones!', P('shop', '', big('20 → 25 → 26'))),
        TG('How much money is this?', P('shop', '', C([10, 5])), ['14p', '15p', '16p'], '15p', 'Start at ten and count on five.', 'Ten and five make fifteen pence.'),
        TG('How much money is this?', P('shop', '', C([5, 2, 1])), ['7p', '8p', '9p'], '8p', 'Five, then seven, then …', 'Five, seven, eight. Eight pence.'),
        Y('A book costs this much. How much is it?', P('shop', '', C([20, 10, 2])), ['30p', '32p', '34p'], '32p', 'Twenty, then thirty, then …', 'Twenty, thirty, thirty-two. Thirty-two pence.'),
        Y('How much money is this?', P('shop', '', C([10, 10, 5])), ['20p', '25p', '30p'], '25p', 'Ten, twenty, then five more.', 'Twenty-five pence.')
      ] },
      { title: 'How can counting on help me find change from 20p?', char: 'mouse', screens: [
        W('A ball costs fifteen pence. I pay with twenty pence. I count on from fifteen to twenty: five jumps. Five pence change!', P('shop', '', FL.trackP(15, 20, [15, 20], [[15, 16], [16, 17], [17, 18], [18, 19], [19, 20]])), [['five pence change', 'Change: 20p − 15p = 5p']]),
        W('A pen costs twelve pence. From twelve to twenty is eight jumps. Eight pence change.', P('shop', '', FL.trackP(12, 20, [12, 20])), [['eight pence change', 'Change: 20p − 12p = 8p']]),
        W('Change is the money you get back when you pay too much.', P('shop', 'mouse', C([20]) + C([5])), [['change is', 'Change: the money you get back']]),
        TG('A sticker costs seventeen pence. You pay twenty pence. How much change?', P('shop', '', FL.trackP(17, 20, [17, 20])), ['2p', '3p', '4p'], '3p', 'Count on: eighteen, nineteen, twenty.', 'Three jumps, so three pence change.'),
        TG('A cookie costs ten pence. You pay twenty pence. How much change?', P('shop', '', C([20])), ['5p', '10p', '15p'], '10p', 'Ten and what make twenty?', 'Ten pence change.'),
        Y('A toy costs fourteen pence. You pay twenty pence. How much change?', P('shop', '', FL.trackP(14, 20, [14, 20])), ['5p', '6p', '7p'], '6p', 'Count on from fourteen to twenty.', 'Six pence change.'),
        Y('A sweet costs nineteen pence. You pay twenty pence. How much change?', P('shop', '', C([20])), ['1p', '2p', '9p'], '1p', 'What comes after nineteen?', 'One penny change.')
      ] }
    ]
  });

  /* ================= 204 Time: Ollie's busy day ================= */
  var DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  FL.addStory(204, {
    story: { title: 'Ollie’s Busy Day', endPic: P('night', 'owl', clk(8, 30), 'Night night!'), endText: 'At half past eight Ollie goes to sleep. What a busy day! Thank you for helping Ollie with the time.',
      pages: [
        pg(P('room', 'owl', clk(7, 0), 'Good morning!'), 'Ollie the owl wakes up. The short hand points to seven and the long hand points to twelve. It is seven o’clock.', null, [['wakes up', 'Wake up: 7 o’clock']]),
        pg(P('room', 'owl', '<span style="font-size:3rem">🪥</span>'), 'Next, Ollie brushes his teeth. A minute is short. Ollie can clap twenty times in a minute. An hour is long. One hour is sixty minutes.', Q('What takes about a minute?', ['brushing your teeth', 'a night’s sleep', 'a school day'], 'brushing your teeth', 'Brushing your teeth takes about two minutes.'), [['brushes', 'Brush teeth'], ['sixty minutes', '1 hour = 60 minutes']]),
        pg(P('kitchen', 'owl', clk(7, 30)), 'Then Ollie eats his breakfast. Now the long hand points to six. It is half past seven.', null, [['half past seven', 'Breakfast: half past 7']]),
        pg(P('room', 'owl', cards(DAYS)), 'Today is Monday. Monday to Friday are school days. Saturday and Sunday are the weekend, with no school. There are seven days in a week.', Q('What day comes after Tuesday?', ['Monday', 'Wednesday', 'Sunday'], 'Wednesday', 'Monday, Tuesday, Wednesday.'), [['school days', 'School days: Monday to Friday'], ['weekend', 'Weekend: Saturday and Sunday, no school'], ['seven days', '7 days in a week']]),
        pg(P('day', 'owl', clk(9, 0)), 'Ollie flies to school. Look at the clock!', Q('What time does Ollie get to school?', ['9 o’clock', 'half past 9', '3 o’clock'], '9 o’clock', 'The short hand is on nine and the long hand is on twelve.')),
        pg(P('kitchen', 'owl', clk(12, 15)), 'Lunchtime! Ollie has his lunch from a quarter past twelve until one o’clock.', null, [['lunch', 'Lunchtime: quarter past 12 to 1 o’clock']]),
        pg(P('day', 'owl', clk(3, 0)), 'At three o’clock school finishes and Ollie flies home.', null, [['three o’clock', 'Home time: 3 o’clock']]),
        pg(P('room', 'owl', clk(4, 0)), 'At four o’clock Ollie does his homework.', null, [['homework', 'Homework: 4 o’clock']]),
        pg(P('day', 'owl', clk(5, 0)), 'Playtime! Ollie plays outside from five o’clock until six o’clock. That is one hour of play.', null, [['playtime', 'Playtime: 5 o’clock to 6 o’clock']]),
        pg(P('kitchen', 'owl', clk(7, 0)), 'At seven o’clock in the evening Ollie eats his dinner.', Q('Which meal does Ollie eat last?', ['breakfast', 'lunch', 'dinner'], 'dinner', 'Breakfast in the morning, lunch at midday, dinner in the evening.'), [['dinner', 'Dinner: 7 o’clock']]),
        pg(P('night', 'owl', clk(8, 0)), 'At eight o’clock Ollie has a bath and a story.', null, [['bath', 'Bath time: 8 o’clock']]),
        pg(P('night', 'owl', clk(8, 30)), 'At half past eight it is bedtime. Night night, Ollie!', null, [['bedtime', 'Bedtime: half past 8']])
      ] },
    learn: [
      { title: 'How to tell the time', char: 'owl', screens: [
        W('A clock has two hands. The short hand shows the hour. The long hand shows the minutes.', P('room', '', clk(3, 0)), [['short hand', 'Short hand: the hour'], ['long hand', 'Long hand: the minutes']]),
        W('When the long hand points to twelve, it is something o’clock. The short hand is on five: five o’clock.', P('room', '', clk(5, 0)), [['twelve', 'Long hand on 12: o’clock'], ['five o’clock', 'It is 5 o’clock']]),
        W('When the long hand points to six, it is half past. The short hand is just after two: half past two.', P('room', '', clk(2, 30)), [['six', 'Long hand on 6: half past'], ['half past two', 'It is half past 2']]),
        TG('What time is it?', P('room', '', clk(4, 0)), ['4 o’clock', '12 o’clock', 'half past 4'], '4 o’clock', 'The long hand is on twelve, so it is o’clock. Look at the short hand.', 'Four o’clock.'),
        TG('What time is it?', P('room', '', clk(6, 30)), ['6 o’clock', 'half past 6', 'half past 12'], 'half past 6', 'The long hand is on six, so it is half past.', 'Half past six.'),
        Y('What time is it?', P('room', '', clk(11, 0)), ['11 o’clock', '12 o’clock', 'half past 11'], '11 o’clock', 'Long hand on twelve: o’clock.', 'Eleven o’clock.'),
        Y('What time is it?', P('room', '', clk(1, 30)), ['1 o’clock', 'half past 1', 'half past 6'], 'half past 1', 'Long hand on six: half past.', 'Half past one.')
      ] },
      { title: 'What are the days of the week and the months of the year?', char: 'owl', screens: [
        W('There are seven days in a week: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday and Sunday.', P('room', '', cards(DAYS)), [['seven days', '7 days in a week']]),
        W('Monday to Friday are school days. Saturday and Sunday are the weekend. No school!', P('day', '', cards(['Saturday', 'Sunday'])), [['school days', 'School days: Monday to Friday'], ['weekend', 'Weekend: Saturday and Sunday'], ['no school', 'No school at the weekend']]),
        W('There are twelve months in a year. January is first and December is last.', P('room', '', cards(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'])), [['twelve months', '12 months in a year'], ['january', 'First month: January'], ['december', 'Last month: December']]),
        TG('What day comes after Monday?', P('room', '', cards(DAYS)), ['Sunday', 'Tuesday', 'Friday'], 'Tuesday', 'Say the days: Monday, …', 'Monday, Tuesday.'),
        TG('What day comes before Sunday?', P('room', '', cards(DAYS)), ['Saturday', 'Monday', 'Friday'], 'Saturday', 'Sunday is the last day. What comes just before it?', 'Saturday, Sunday.'),
        Y('What month comes after January?', P('room', '', cards(['January', '?'])), ['December', 'February', 'March'], 'February', 'Say the months: January, …', 'January, February.'),
        Y('How many days are in a week?', P('room', '', '<span style="font-size:3rem">📅</span>'), [5, 7, 12], 7, 'Count Monday to Sunday.', 'Seven days.')
      ] },
      { title: 'How can I put the events of a day in order?', char: 'owl', screens: [
        W('In the morning I wake up and eat breakfast.', P('kitchen', '', clk(7, 0)), [['morning', 'Morning: wake up and breakfast']]),
        W('In the afternoon I play and have a snack.', P('day', '', clk(3, 0)), [['afternoon', 'Afternoon: play and a snack']]),
        W('At night I go to bed. Morning, afternoon, night!', P('night', '', clk(8, 0)), [['night', 'Night: go to bed'], ['morning, afternoon', 'Morning → afternoon → night']]),
        TG('What do we do first: go to bed or wake up?', P('room', '', '<span style="font-size:3rem">🌅 🌙</span>'), ['wake up', 'go to bed'], 'wake up', 'The day starts in the morning.', 'First we wake up.'),
        TG('Which meal comes last in the day?', P('kitchen', '', cards(['breakfast', 'lunch', 'dinner'])), ['breakfast', 'lunch', 'dinner'], 'dinner', 'Dinner is in the evening.', 'Dinner comes last.'),
        Y('Which is in the right order?', P('day', '', '<span style="font-size:3rem">⏰ 🏫 🛏️</span>'), ['wake up, school, bed', 'bed, school, wake up', 'school, wake up, bed'], 'wake up, school, bed', 'What happens first in the day?', 'Wake up, then school, then bed.'),
        Y('Ollie has lunch, then plays. What came first?', P('day', '', cards(['lunch', 'play'])), ['lunch', 'play'], 'lunch', 'Listen for the word then.', 'Lunch came first.')
      ] },
      { title: 'How long is a minute, an hour and a day?', char: 'owl', screens: [
        W('A minute is short. I can clap twenty times or sing a short song.', P('day', '', cards(['👏 clap', '🎵 sing'])), [['clap', '1 minute: clap 20 times']]),
        W('An hour is longer. One hour is sixty minutes. A lesson at school or a film for children takes about an hour.', P('room', '', clk(10, 0)), [['sixty minutes', '1 hour = 60 minutes']]),
        W('A day is very long: from one morning to the next morning. There are twenty-four hours in a day!', P('day', '', '<span style="font-size:3rem">🌅 ☀️ 🌙</span>'), [['twenty-four hours', '24 hours in a day']]),
        TG('How long does it take to brush your teeth?', P('room', '', '<span style="font-size:3rem">🪥</span>'), ['2 minutes', '2 hours', '2 days'], '2 minutes', 'Is it short or long?', 'About two minutes.'),
        TG('How long is a night’s sleep?', P('night', '', '<span style="font-size:3rem">😴</span>'), ['10 minutes', '10 hours', '10 days'], '10 hours', 'It is all night long.', 'About ten hours.'),
        Y('How long does it take to eat an apple?', P('day', '', T(1, 'apple')), ['5 minutes', '5 hours', '5 days'], '5 minutes', 'Is it quick?', 'About five minutes.'),
        Y('How long is a birthday party?', P('room', '', '<span style="font-size:3rem">🎂 🎈</span>'), ['2 minutes', '2 hours', '2 days'], '2 hours', 'Longer than a minute, shorter than a day.', 'About two hours.')
      ] }
    ]
  });

  /* ================= 205 Shapes and data: Finn's shape hunt ================= */
  FL.addStory(205, {
    story: { title: 'Finn’s Shape Hunt', endPic: P('day', 'fox', ROW(['circle', 'square', 'triangle', 'rectangle'], 60), 'Found them!'), endText: 'Finn found shapes everywhere! Thank you for hunting with Finn.',
      pages: [
        pg(P('day', 'fox', '', 'Let’s go!'), 'Finn the fox is going on a shape hunt in the park!'),
        pg(P('day', 'fox', SH('circle', '#ffd84d', 120)), 'Finn looks up. The sun is a circle. It is round and has no corners.'),
        pg(P('room', 'fox', SH('square', '#7cc4ff', 120)), 'The window is a square. It has four straight sides and four corners.'),
        pg(P('day', 'fox', SH('triangle', '#ef5b5b', 120)), 'The roof of the hut is a triangle.', Q('How many sides does a triangle have?', [3, 4, 5], 3, 'One, two, three sides.')),
        pg(P('day', 'fox', ROW(['sphere', 'cube'], 90)), 'Finn finds a ball and a box. They are not flat. They are solid 3D objects: a sphere and a cube.', Q('Is a ball flat or solid?', ['flat', 'solid'], 'solid', 'You can hold a ball in your hands. It is solid.')),
        pg(P('day', 'fox', cards(['corners: ◼ ▲', 'no corners: ● ⬭'])), 'Finn sorts his shapes: shapes with corners and shapes with no corners.'),
        pg(P('day', 'fox', FL.tally(7)), 'Finn counts his circles with tally marks. Every fifth mark goes across the others. Five, six, seven.'),
        pg(P('day', 'fox', FL.picto([['circles', 7, 'balloon'], ['squares', 4, 'star'], ['triangles', 2, 'flower']])), 'Finn makes a picture chart of his shapes.', Q('Which shape did Finn find the most?', ['circles', 'squares', 'triangles'], 'circles', 'Look for the longest row.'))
      ] },
    learn: [
      { title: 'What are 2D shapes?', char: 'fox', screens: [
        W('A 2D shape is flat. A circle is round and has no corners.', P('day', '', SH('circle', '#ffd84d', 110))),
        W('A square has four sides the same length and four corners. A rectangle has two long sides and two short sides.', P('day', '', ROW(['square', 'rectangle'], 100))),
        W('A triangle has three sides and three corners.', P('day', '', SH('triangle', '#ef5b5b', 110))),
        TG('Which shape has three sides?', P('day', '', ROW(['circle', 'square', 'triangle'], 80)), ['circle', 'square', 'triangle'], 'triangle', 'Count the sides of each one.', 'A triangle has three sides.'),
        TG('How many corners does a square have?', P('day', '', SH('square', '#7cc4ff', 110)), [3, 4, 5], 4, 'Touch each corner and count.', 'A square has four corners.'),
        Y('What is this shape?', P('day', '', SH('rectangle', '#8fd67d', 130)), ['square', 'rectangle', 'triangle'], 'rectangle', 'Two long sides and two short sides.', 'It is a rectangle.'),
        Y('How many corners does a circle have?', P('day', '', SH('circle', '#c48bf2', 110)), [0, 1, 4], 0, 'Is any part pointy?', 'A circle has no corners.')
      ] },
      { title: 'What is the difference between a 2D shape and a 3D object?', char: 'fox', screens: [
        W('A 2D shape is flat, like a drawing on paper. A 3D object is solid. You can pick it up.', P('day', '', ROW(['square', 'cube'], 100))),
        W('A circle is flat. A ball is a sphere: it is round all over and solid.', P('day', '', ROW(['circle', 'sphere'], 100))),
        W('A tin of beans is a cylinder. An ice-cream cone is a cone.', P('day', '', ROW(['cylinder', 'cone'], 100))),
        TG('Is a dice flat or solid?', P('day', '', SH('cube', null, 110)), ['flat', 'solid'], 'solid', 'Can you hold it?', 'A dice is solid. It is a cube.'),
        TG('Is a drawing of a circle flat or solid?', P('day', '', SH('circle', null, 110)), ['flat', 'solid'], 'flat', 'A drawing is on paper.', 'It is flat. It is a 2D shape.'),
        Y('Which one is a 3D object?', P('day', '', ROW(['circle', 'cone', 'square'], 80)), ['circle', 'cone', 'square'], 'cone', 'Which one could you hold?', 'The cone is a 3D object.'),
        Y('A tin of beans is a …', P('kitchen', '', SH('cylinder', null, 110)), ['cylinder', 'circle', 'triangle'], 'cylinder', 'It is solid and has two flat round ends.', 'A cylinder.')
      ] },
      { title: 'How can I sort shapes?', char: 'fox', screens: [
        W('I can sort shapes by colour: red shapes here, blue shapes there.', P('day', '', ROW(['circle', 'square', 'triangle'], 70))),
        W('I can sort by sides: three sides, four sides.', P('day', '', ROW(['triangle', 'square', 'rectangle'], 70))),
        W('I can sort by corners: shapes with corners and shapes with no corners.', P('day', '', ROW(['circle', 'oval', 'square'], 70))),
        TG('Which shape does not belong? Two have corners and one does not.', P('day', '', ROW(['square', 'triangle', 'circle'], 70)), ['square', 'triangle', 'circle'], 'circle', 'Look for the one with no corners.', 'The circle has no corners.'),
        TG('An oval goes in which group?', P('day', '', SH('oval', null, 110)), ['corners', 'no corners'], 'no corners', 'Is any part of an oval pointy?', 'An oval has no corners.'),
        Y('A triangle goes in which group?', P('day', '', SH('triangle', null, 100)), ['3 sides', '4 sides'], '3 sides', 'Count the sides.', 'Three sides.'),
        Y('Which of these can roll?', P('day', '', ROW(['cube', 'sphere', 'pyramid'], 70)), ['cube', 'sphere', 'pyramid'], 'sphere', 'It must be round.', 'A sphere can roll.')
      ] },
      { title: 'How do I record and display data?', char: 'fox', screens: [
        W('I use tally marks to count. Four marks, then the fifth goes across. That makes a bundle of five.', P('day', '', FL.tally(5))),
        W('Eight shapes: one bundle of five and three more. Five, six, seven, eight.', P('day', '', FL.tally(8))),
        W('A picture chart shows the data. The longest row is the most.', P('day', '', FL.picto([['red', 5, 'balloon'], ['blue', 3, 'balloon'], ['green', 2, 'balloon']]))),
        TG('How many tally marks?', P('day', '', FL.tally(7)), [6, 7, 8], 7, 'Count the bundle of five, then the rest.', 'Five, six, seven.'),
        TG('Which colour has the most balloons?', P('day', '', FL.picto([['red', 3, 'balloon'], ['blue', 6, 'balloon'], ['green', 4, 'balloon']])), ['red', 'blue', 'green'], 'blue', 'Look for the longest row.', 'Blue has the most.'),
        Y('How many tally marks?', P('day', '', FL.tally(12)), [10, 12, 13], 12, 'Two bundles of five make ten.', 'Ten, eleven, twelve.'),
        Y('Which row has the fewest?', P('day', '', FL.picto([['apples', 6, 'apple'], ['flowers', 2, 'flower'], ['stars', 4, 'star']])), ['apples', 'flowers', 'stars'], 'flowers', 'Look for the shortest row.', 'Flowers have the fewest.')
      ] }
    ]
  });
  FL.KS2 = { clk: clk };
})();
