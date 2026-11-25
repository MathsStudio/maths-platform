/* fl_m3c.js: P3 Money and time (306), Measurement (307), Shape, movement and data (308) */
(function () {
  'use strict';
  var FL = window.FL, BT = window.BT, S = window.Studio; if (!FL || !FL.MEGA) return;
  var B = FL.big, C = FL.cards, TH = FL.things, M = FL.MEGA, r = FL.r, pick = FL.pick, T = FL.track, SH = FL.shapeRow, MN = FL.money;
  function mc(tag, q, a, w, h, e, p) { return FL.MC(tag, q, a, w, [h], e, p || ''); }
  function CK(h, m) { return '<div style="max-width:190px;margin:auto">' + BT.sv.clock(h, m || 0) + '</div>'; }
  function bars(items) { return '<div style="display:grid;gap:6px;justify-items:start;margin:auto;max-width:320px">' + items.map(function (x) { var s = ''; for (var i = 0; i < x[1]; i++) s += '<span style="display:inline-block;width:22px;height:22px;background:' + (x[2] || '#ffb703') + ';border:2px solid #2b2340;margin-right:-2px"></span>'; return '<div style="display:flex;align-items:center;gap:8px"><b style="min-width:62px;text-align:right">' + x[0] + '</b><span>' + s + '</span></div>'; }).join('') + '</div>'; }
  function rule(lo, hi, at) { var w = 300, s = '', n = hi - lo; for (var i = 0; i <= n; i++) { var x = 10 + i * (w - 20) / n; s += '<line x1="' + x + '" y1="20" x2="' + x + '" y2="' + (i % 5 === 0 ? 40 : 32) + '" stroke="#2b2340" stroke-width="2"/>' + (i % 5 === 0 ? '<text x="' + x + '" y="56" font-size="12" font-weight="800" text-anchor="middle" fill="#2b2340">' + (lo + i) + '</text>' : ''); } var ax = 10 + (at - lo) * (w - 20) / n;
    return '<svg viewBox="0 0 300 70" role="img" aria-label="A ruler pointing at ' + at + '" style="width:300px;max-width:100%;height:auto"><rect x="6" y="14" width="288" height="30" rx="4" fill="#ffe08a" stroke="#2b2340" stroke-width="2"/>' + s + '<path d="M' + ax + ' 4 l-6 -4 h12z" fill="#e63946"/><rect x="' + (ax - 1.5) + '" y="0" width="3" height="14" fill="#e63946"/></svg>'; }

  /* ---------- 306 Money and time ---------- */
  M(306, { id: 'learn1', ch: 'owl', bg: 'day',
    way: ['Change is what you get back. Pay with a bigger coin and count on from the price.', FL.coins([100])],
    ex: [['A comic costs 45p. You pay with £1. What is the change?', ['Count on from 45p to 50p: 5p.', '50p to £1: 50p.', '5p + 50p = 55p.'], '55p', FL.coins([100])], ['A toy costs 72p. You pay 80p. What is the change?', ['72p to 80p is 8p.'], '8p', FL.coins([50, 20, 10])]],
    mist: ['Change is not the price. £1 − 45p is 55p, not 45p.', FL.coins([100])],
    real: ['A drink costs 65p. You pay with £1. How much change?', '35p', ['45p', '65p', '165p'], '65 to 100.', FL.coins([100])],
    qs: [['Pay 50p for 35p. Change?', '15p', ['25p', '85p', '5p'], '35 + 15 = 50.', ''], ['Pay £1 for 60p. Change?', '40p', ['60p', '160p', '50p'], '60 + 40.', ''], ['Pay £1 for 85p. Change?', '15p', ['25p', '185p', '5p'], '85 + 15.', ''], ['Pay 20p for 13p. Change?', '7p', ['17p', '33p', '6p'], '13 + 7.', ''],
         ['Pay £1 for 29p. Change?', '71p', ['61p', '129p', '81p'], '29 + 71.', ''], ['Pay 50p for 28p. Change?', '22p', ['32p', '78p', '12p'], '28 + 22.', ''], ['Pay £2 for £1.50. Change?', '50p', ['£1', '£3.50', '30p'], '£1.50 + 50p.', ''], ['Pay £5 for £3.20. Change?', '£1.80', ['£2.80', '£1.20', '£8.20'], '£3.20 + £1.80.', '']],
    gen: function (lv) { var pay = pick(lv ? [50, 100, 200] : [20, 50, 100]), p = r(2, pay - 1); if (pay >= 100 && p < 10) p += 11; return mc('Working out change', 'You pay <b>' + MN(pay) + '</b> for something that costs <b>' + MN(p) + '</b>. How much change?', MN(pay - p), [MN(pay - p + 10), MN(pay - p - 1 < 1 ? pay - p + 2 : pay - p - 1), MN(p)], 'Count on from the price to what you paid.', MN(p) + ' + ' + MN(pay - p) + ' = ' + MN(pay) + '.', FL.coins([pay >= 100 ? 100 : pay])); } });

  M(306, { id: 'learn2', ch: 'owl', bg: 'day',
    way: ['Add the coins starting with the biggest. Group the 10s and 5s then add the 1s.', FL.coins([50, 20, 10, 5])],
    ex: [['How much is 50p + 20p + 5p?', ['50 + 20 = 70.', '70 + 5 = 75.'], '75p', FL.coins([50, 20, 5])], ['How much is £1 + 50p + 20p?', ['£1 + 50p = £1.50.', '+ 20p = £1.70.'], '£1.70', FL.coins([100, 50, 20])]],
    mist: ['Write pounds and pence carefully. £1.05 is not £1.5.', C(['£1.05', '£1.50'])],
    real: ['You have a 50p, a 20p and a 10p coin. Can you buy a 75p toy?', 'Yes, with 5p to spare', ['No', 'Yes, with 10p to spare'], '80p is more than 75p.', FL.coins([50, 20, 10])],
    qs: [['50p + 20p = ?', '70p', ['5p', '700p', '60p'], '5 + 2 = 7 tens.', ''], ['20p + 20p + 10p = ?', '50p', ['40p', '60p', '30p'], '20 + 20 + 10.', ''], ['£1 + 50p = ?', '£1.50', ['£1.05', '£5', '£15'], '£1 and 50p.', ''], ['50p + 50p = ?', '£1', ['50p', '100', '£10'], '100p.', ''],
         ['20p + 5p + 2p = ?', '27p', ['25p', '29p', '7p'], '20 + 5 + 2.', ''], ['£2 + 20p = ?', '£2.20', ['£2.02', '£22', '£2.2'], 'Pounds and pence.', ''], ['10p + 10p + 5p = ?', '25p', ['20p', '30p', '15p'], '10 + 10 + 5.', ''], ['How many 10p coins make £1?', '10', ['5', '100', '20'], '10 × 10p = 100p.', '']],
    gen: function (lv) { var cs = [50, 20, 10, 5, 2, 1].slice(0, lv ? 6 : 4), a = pick(cs), b = pick(cs), c = pick(cs); return mc('Making totals', 'How much is <b>' + [a, b, c].map(function (v) { return v + 'p'; }).join(' + ') + '</b>?', MN(a + b + c), [MN(a + b + c + 5), MN(a + b + c - 1), MN(a + b)], 'Add the biggest first.', [a, b, c].join(' + ') + ' = ' + (a + b + c) + '.', FL.coins([a, b, c])); } });

  M(306, { id: 'learn3', ch: 'owl', bg: 'day',
    way: ['Count minutes round the clock in fives: 5, 10, 15, 20 … each number is 5 more minutes.', CK(4, 20)],
    ex: [['What time is it?', ['Long hand at 4 is 20 minutes.', 'Short hand just past 3.'], '20 past 3', CK(3, 20)], ['What time is it?', ['Long hand at 8 is 40, which is 20 to.', 'Next hour is 7.'], '20 to 7', CK(6, 40)]],
    mist: ['After half past, say “to” the next hour. 6:40 is 20 to 7.', CK(6, 40)],
    real: ['Your class starts at 10 past 9. Where is the long hand?', 'on 2', ['on 10', 'on 9', 'on 3'], '2 × 5 = 10.', ''],
    qs: [['The long hand is on 2. How many minutes past?', '10', ['2', '20', '5'], '2 × 5.', ''], ['The long hand is on 4. How many minutes past?', '20', ['4', '40', '10'], '4 × 5.', ''], ['The long hand is on 7. How many minutes past?', '35', ['7', '70', '25'], '7 × 5.', ''], ['The long hand is on 10. How many minutes to the next hour?', '10', ['50', '5', '20'], '60 − 50.', ''],
         ['What time? Long hand on 5, short hand just past 2.', '25 past 2', ['5 past 2', '25 to 2', '25 to 3'], '5 × 5.', CK(2, 25)], ['What time? Long hand on 10, short hand almost at 5.', '10 to 5', ['10 past 4', '50 past 4', '10 past 5'], '10 × 5 = 50 = 10 to.', CK(4, 50)], ['What time is it?', '5 past 8', ['5 to 8', '25 past 8', '8 o’clock'], 'Long hand on 1.', CK(8, 5)], ['What time is it?', '5 to 11', ['5 past 11', '55 past 12', '11 o’clock'], 'Long hand on 11.', CK(10, 55)]],
    gen: function (lv) { var h = r(1, 12), m = pick(lv ? [5, 10, 20, 25, 35, 40, 50, 55] : [5, 10, 20, 25]), nx = h % 12 + 1, to = m > 30, nm = to ? (60 - m) + ' to ' + nx : m + ' past ' + h; return mc('Telling the time', 'What time does the clock show?', nm, [to ? (60 - m) + ' past ' + h : (60 - m) + ' to ' + nx, (to ? m + ' past ' + h : m + ' to ' + nx), h + ' o’clock'], 'Count in 5s from 12 to the long hand.', 'It is ' + nm + '.', CK(h, m)); } });

  M(306, { id: 'learn4', ch: 'owl', bg: 'day',
    way: ['To find how long something takes, count on from the start time to the end time, hour by hour then minutes.', C(['3:00', '→ 1 h →', '4:00', '→ 20 min →', '4:20'])],
    ex: [['A film starts at 2:00 and ends at 4:00. How long?', ['2:00 to 3:00 is 1 hour.', '3:00 to 4:00 is 1 hour.'], '2 hours', C(['2:00', '3:00', '4:00'])], ['A walk starts at 3:15 and ends at 3:45. How long?', ['15 to 45 is 30 minutes.'], '30 minutes', C(['3:15', '3:45'])]],
    mist: ['Minutes go up to 60, not 100. 3:50 to 4:10 is 20 minutes.', C(['3:50 → 4:00 = 10', '4:00 → 4:10 = 10'])],
    real: ['School starts at 9:00 and lunch is at 12:00. How many hours?', '3 hours', ['2 hours', '4 hours', '12 hours'], '9, 10, 11, 12.', C(['9:00', '12:00'])],
    qs: [['From 1:00 to 4:00 is how many hours?', '3', ['4', '2', '5'], 'Count on.', ''], ['From 5:15 to 5:45 is how many minutes?', '30', ['3', '45', '15'], '15 to 45.', ''], ['From 7:30 to 8:30 is…', '1 hour', ['30 minutes', '2 hours'], 'Same minutes.', ''], ['From 10:00 to 10:20 is…', '20 minutes', ['2 hours', '10 minutes'], 'Count on.', ''],
         ['A bus leaves at 2:10 and arrives at 2:40. How long?', '30 minutes', ['40 minutes', '10 minutes'], '10 to 40.', ''], ['A game starts at 3:00 and ends at 5:00. How long?', '2 hours', ['5 hours', '3 hours'], '3 to 5.', ''], ['From 8:45 to 9:15 is…', '30 minutes', ['1 hour', '15 minutes'], '15 + 15.', ''], ['How many minutes in half an hour?', '30', ['15', '60', '45'], 'Half of 60.', '']],
    gen: function (lv) { var h = r(1, 9), d = r(1, lv ? 4 : 3), mn = pick([0, 15, 30]); return r(0, 1) ? mc('How long', 'A film starts at <b>' + h + ':00</b> and ends at <b>' + (h + d) + ':00</b>. How many hours long is it?', d, [d + 1, d - 1 || 5, h + d], 'Count the hours from start to end.', (h + d) + ' − ' + h + ' = ' + d + ' hours.') : mc('How long', 'A walk starts at <b>' + h + ':' + (mn || '00') + '</b> and ends at <b>' + h + ':' + (mn + 15 < 60 ? mn + 15 : '00') + '</b>. How many minutes?', 15, [10, 30, 45], 'Count on in minutes.', 'It takes 15 minutes.'); } });

  M(306, { id: 'learnm1', ch: 'owl', bg: 'day',
    li: ['Pounds and pence', 'How do I write pounds and pence?', 'We write pounds with a £ sign and pence with a p. £1 is the same as 100p. £2.45 is 2 pounds and 45 pence.', FL.coins([100, 20, 20, 5]),
      [['pound', '£1 = 100p', '💷'], ['pence', 'the small money unit', '🪙'], ['decimal point', 'the dot between pounds and pence', '⚫'], ['£', 'the pound sign', '£']],
      [['£1 = 100p. £2 = 200p.', C(['£1 = 100p', '£2 = 200p'])], ['£3.45 is 3 pounds and 45p. The dot separates them.', C(['£3', '.', '45p'])], ['Write 65p as £0.65. Write 5p as £0.05.', C(['65p = £0.65', '5p = £0.05'])]],
      [['Write 250p in pounds.', ['100p = £1.', '250p = £2.50.'], '£2.50', FL.coins([100, 100, 50])], ['Write £1.35 in pence.', ['£1 = 100p.', '100p + 35p = 135p.'], '135p', C(['£1.35', '135p'])], ['Which is more: £1.20 or 95p?', ['£1.20 = 120p.', '120p is more than 95p.'], '£1.20', C(['£1.20', '95p'])]],
      ['Always use the same unit to compare. £1.20 and 95p: change one so they match.', C(['120p vs 95p'])],
      ['Write 175p in pounds.', C(['175p']), ['£17.5', '£1.75', '£175'], '£1.75', '100p + 75p = £1.75.', 'Pounds first, then pence.'],
      ['£1 = 100p. Pounds and pence are separated by a dot.', C(['£1.50 = 150p'])]],
    ex: [['Write £0.40 in pence.', ['£0.40 = 40p.'], '40p', C(['£0.40 = 40p'])], ['Write 305p in pounds.', ['300p = £3, then 5p.', '£3.05.'], '£3.05', C(['305p = £3.05'])]],
    way: ['Think of 100 pennies in a pound. Show £1.35 as one pound coin and 35p.', FL.coins([100, 20, 10, 5])],
    mist: ['£1.05 is not £1.5. The pence has two digits: 05.', C(['£1.05 = 105p', '£1.50 = 150p'])],
    real: ['A drink costs £1.25. How many pence is that?', '125p', ['25p', '1250p', '12.5p'], '100 + 25.', FL.coins([100, 20, 5])],
    qs: [['£2 = ?p', '200p', ['20p', '2p', '2000p'], '2 × 100.', ''], ['£1.50 = ?p', '150p', ['15p', '1.5p', '1500p'], '100 + 50.', ''], ['350p = £?', '£3.50', ['£35', '£3.05', '£350'], '300 + 50.', ''], ['£0.75 = ?p', '75p', ['7.5p', '750p', '0.75p'], 'Pence only.', ''],
         ['Which is more: £1.50 or 120p?', '£1.50', ['120p'], '150p > 120p.', ''], ['£4.05 = ?p', '405p', ['45p', '450p', '40.5p'], '400 + 5.', ''], ['205p = £?', '£2.05', ['£2.50', '£20.5', '£205'], '200 + 5.', ''], ['How many pence in £5?', '500', ['50', '5', '5000'], '5 × 100.', '']],
    gen: function (lv) { var p = r(1, lv ? 9 : 4) * 100 + pick([0, 5, 10, 20, 25, 30, 45, 50, 75]), toP = r(0, 1); return toP ? mc('Pounds and pence', 'How many pence is <b>' + MN(p) + '</b>?', p + 'p', [(p + 100) + 'p', Math.round(p / 10) + 'p', (p * 10) + 'p'], '£1 = 100p.', MN(p) + ' = ' + p + 'p.') : mc('Pounds and pence', 'Write <b>' + p + 'p</b> in pounds.', MN(p), [MN(p + 50), '£' + p, MN(p - 5)], '100p = £1.', p + 'p = ' + MN(p) + '.'); } });

  M(306, { id: 'learnm2', ch: 'owl', bg: 'day',
    li: ['am and pm', 'What do am and pm mean?', 'The clock goes round twice a day. am is from midnight to noon. pm is from noon to midnight.', C(['am: morning', 'pm: afternoon and night']),
      [['am', 'from midnight to noon', '🌅'], ['pm', 'from noon to midnight', '🌆'], ['noon', '12 o’clock in the day', '☀️'], ['midnight', '12 o’clock at night', '🌙']],
      [['7:30 am is in the morning, when you eat breakfast.', '<div style="text-align:center;font-weight:800">' + FL.p4.clk(7, 30, 150) + '7:30 am: breakfast 🥣</div>'], ['3:00 pm is in the afternoon, when school finishes.', '<div style="text-align:center;font-weight:800">' + FL.p4.clk(3, 0, 150) + '3:00 pm: school ends 🏫</div>'], ['9:00 pm is at night, near bedtime.', '<div style="text-align:center;font-weight:800">' + FL.p4.clk(9, 0, 150) + '9:00 pm: bedtime 🛏️</div>']],
      [['You wake up at 7:00. Is it am or pm?', ['Morning.'], 'am', C(['7:00 am'])], ['You have dinner at 6:00. Is it am or pm?', ['Evening.'], 'pm', C(['6:00 pm'])], ['What time is noon?', ['Middle of the day.'], '12:00 pm', C(['12:00'])]],
      ['12 pm is noon, 12 am is midnight. The twelve is the tricky one.', C(['12 pm noon', '12 am midnight'])],
      ['School starts at 9:00 in the morning. Is it am or pm?', C(['9:00']), ['am', 'pm'], 'am', 'Morning is am.', 'Think of the sun.'],
      ['am: morning. pm: afternoon and evening.', C(['am', 'pm'])]],
    ex: [['Your lunch is at 12:30. Is it am or pm?', ['Just after noon.'], 'pm', C(['12:30 pm'])], ['You go to bed at 8:00 at night. am or pm?', ['Evening.'], 'pm', C(['8:00 pm'])]],
    way: ['A day has 24 hours. The clock face shows 12, so we need am and pm to say which half.', '<div style="display:flex;gap:10px;justify-content:center;font-weight:800;text-align:center"><div>' + FL.p4.clk(6, 0, 130) + 'am: midnight to noon (12 hours)</div><div>' + FL.p4.clk(6, 0, 130) + 'pm: noon to midnight (12 hours)</div></div>'],
    mist: ['Do not say am for the afternoon. 3:00 in the afternoon is pm.', C(['3:00 pm'])],
    real: ['The film starts at 7:00 in the evening. Is that am or pm?', 'pm', ['am'], 'Evening is pm.', C(['7:00'])],
    qs: [['Breakfast at 8:00. am or pm?', 'am', ['pm'], 'Morning.', ''], ['Dinner at 6:00. am or pm?', 'pm', ['am'], 'Evening.', ''], ['Bedtime at 8:30. am or pm?', 'pm', ['am'], 'Night.', ''], ['Wake up at 6:30. am or pm?', 'am', ['pm'], 'Morning.', ''],
         ['School ends at 3:15. am or pm?', 'pm', ['am'], 'Afternoon.', ''], ['Which is later: 10:00 am or 10:00 pm?', '10:00 pm', ['10:00 am'], 'pm is later in the day.', ''], ['What time is noon?', '12:00 pm', ['12:00 am', '1:00 pm'], 'Middle of the day.', ''], ['What time is midnight?', '12:00 am', ['12:00 pm', '1:00 am'], 'Middle of the night.', '']],
    gen: function () { var P = [['wake up', 'am', 7], ['eat breakfast', 'am', 8], ['go to school', 'am', 9], ['eat lunch', 'pm', 12], ['finish school', 'pm', 3], ['eat dinner', 'pm', 6], ['go to bed', 'pm', 8]], p = pick(P); return mc('am and pm', 'You ' + p[0] + ' at <b>' + p[2] + ':00</b>. Is that <b>am</b> or <b>pm</b>?', p[1], [p[1] === 'am' ? 'pm' : 'am'], 'Morning is am, afternoon and evening are pm.', 'It is ' + p[2] + ':00 ' + p[1] + '.'); } });

  M(306, { id: 'learnm3', ch: 'owl', bg: 'day',
    li: ['Calendars and dates', 'How do I read a calendar?', 'A calendar shows the days of each month in weeks. We write a date with the day, month and year.', C(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']),
      [['date', 'the day, month and year', '🗓️'], ['month', 'one of the 12 parts of a year', '📆'], ['week', '7 days', '7️⃣'], ['leap year', 'a year with 366 days', '🐸']],
      [['A week has 7 days: Mon, Tue, Wed, Thu, Fri, Sat, Sun.', C(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'])], ['Months have 30 or 31 days. February has 28 (29 in a leap year).', C(['30: Apr Jun Sep Nov', '31: the rest', '28: Feb'])], ['A date: 14 March 2027.', C(['14', 'March', '2027'])]],
      [['How many days in April?', ['April has 30.'], '30', C(['April 30'])], ['What is the 3rd month?', ['Jan, Feb, Mar.'], 'March', C(['1 Jan', '2 Feb', '3 Mar'])], ['Today is Monday 5th. What is the date next Monday?', ['Add 7 days.'], '12th', C(['5', '12'])]],
      ['Thirty days hath September, April, June and November. All the rest have 31, except February.', C(['30 days: Sep Apr Jun Nov'])],
      ['How many days are in a week?', C(['Mon ... Sun']), ['5', '7', '10'], '7', '7 days.', 'Say them in order.'],
      ['A calendar shows weeks, months and dates.', C(['7 days', '12 months'])]],
    ex: [['It is 3rd May. What is the date in 1 week?', ['3 + 7 = 10.'], '10th May', C(['3 May', '10 May'])], ['How many months are in a year?', ['Jan to Dec.'], '12', C(['12 months'])]],
    way: ['Make your own calendar: write the days across and put the dates in rows of 7.', C(['1 2 3 4 5 6 7', '8 9 10 11 12 13 14'])],
    mist: ['A week is always 7 days. Months can have 30 or 31 days; February is different.', C(['7 days', '30/31 days'])],
    real: ['Your birthday is 18th June. Today is 11th June. How many days to wait?', '7', ['6', '8', '18'], '18 − 11.', C(['11 June', '18 June'])],
    qs: [['How many days in a week?', '7', ['5', '6', '10'], '7.', ''], ['How many months in a year?', '12', ['10', '11', '13'], '12.', ''], ['Which month has 28 days?', 'February', ['April', 'July', 'June'], 'Feb.', ''], ['Which has 30 days?', 'April', ['January', 'March', 'August'], 'Apr.', ''],
         ['Which has 31 days?', 'July', ['April', 'June', 'September'], 'Jul.', ''], ['What month comes after September?', 'October', ['November', 'August', 'December'], 'Oct.', ''], ['4 weeks is how many days?', '28', ['24', '30', '14'], '4 × 7.', ''], ['It is the 9th. What is the date in 1 week?', '16th', ['10th', '15th', '17th'], '9 + 7.', '']],
    gen: function () { var Mo = [['January', 31], ['February', 28], ['March', 31], ['April', 30], ['May', 31], ['June', 30], ['July', 31], ['August', 31], ['September', 30], ['October', 31], ['November', 30], ['December', 31]], m = pick(Mo); return mc('Calendars', 'How many days are in <b>' + m[0] + '</b>? (not a leap year)', m[1], [m[1] === 31 ? 30 : 31, m[1] === 28 ? 29 : 28, 29].filter(function (x) { return x !== m[1]; }), 'Remember the rhyme: 30 days hath September.', m[0] + ' has ' + m[1] + ' days.'); } });

  /* ---------- 307 Measurement ---------- */
  M(307, { id: 'learn1', ch: 'frog', bg: 'pond',
    way: ['Length tells how long something is. Longer means more length. Use cm for small things and m for big things.', rule(0, 10, 7)],
    ex: [['A ribbon is 12 cm and a string is 20 cm. Which is longer?', ['20 is more than 12.'], 'The string.', C(['12 cm', '20 cm'])], ['How much longer is the string?', ['20 − 12 = 8.'], '8 cm', C(['20 − 12 = 8'])]],
    mist: ['Measure from 0, not from the end of the ruler.', rule(0, 10, 5)],
    real: ['A pencil is 15 cm. A pen is 12 cm. How much shorter is the pen?', '3 cm', ['27 cm', '2 cm', '4 cm'], '15 − 12.', C(['15 cm', '12 cm'])],
    qs: [['A is 8 cm and B is 14 cm. Which is longer?', 'B', ['A'], '14 > 8.', ''], ['A snake is 30 cm. A worm is 12 cm. How much longer is the snake?', '18 cm', ['42 cm', '12 cm', '17 cm'], '30 − 12.', ''], ['Which unit measures a classroom: cm or m?', 'm', ['cm'], 'Big.', ''], ['Which unit measures a pencil: cm or m?', 'cm', ['m'], 'Small.', ''],
         ['Order shortest first: 12 cm, 8 cm, 20 cm', '8, 12, 20', ['20, 12, 8', '12, 8, 20'], 'Smallest first.', ''], ['A rope is 50 cm. 15 cm is cut off. How long now?', '35 cm', ['65 cm', '45 cm', '15 cm'], '50 − 15.', ''], ['Two ropes: 20 cm and 20 cm. Which is longer?', 'neither', ['the first'], 'Same.', ''], ['How long is 2 ropes of 10 cm joined?', '20 cm', ['12 cm', '10 cm'], '10 + 10.', '']],
    gen: function (lv) { var a = r(5, lv ? 60 : 30), d = r(2, lv ? 30 : 15); return mc('Length', 'A string is <b>' + (a + d) + ' cm</b> and a ribbon is <b>' + a + ' cm</b>. How much longer is the string?', d + ' cm', [d + 1 + ' cm', d - 1 + ' cm', a + d + a + ' cm'], 'Subtract the lengths.', (a + d) + ' − ' + a + ' = ' + d + '.'); } });

  M(307, { id: 'learn2', ch: 'frog', bg: 'pond',
    way: ['Put the 0 at the start of the object. Read the number at the other end.', rule(0, 15, 9)],
    ex: [['What does the ruler show?', ['Start at 0.', 'The pencil ends at 12.'], '12 cm', rule(0, 15, 12)], ['A line starts at 3 and ends at 11. How long?', ['11 − 3 = 8.'], '8 cm', rule(0, 15, 11)]],
    mist: ['Start at 0. If an object starts at 2, take that away from the end number.', rule(0, 15, 8)],
    real: ['A bean plant is 7 cm tall. It grows 4 cm. How tall?', '11 cm', ['3 cm', '10 cm', '74 cm'], '7 + 4.', rule(0, 15, 11)],
    qs: [['The pencil ends at 8. How long?', '8 cm', ['7 cm', '9 cm', '80 cm'], 'Read the end.', rule(0, 15, 8)], ['The line ends at 13. How long?', '13 cm', ['12 cm', '14 cm', '3 cm'], 'Read the end.', rule(0, 15, 13)], ['A line starts at 2 and ends at 9. How long?', '7 cm', ['9 cm', '11 cm', '2 cm'], '9 − 2.', ''], ['A leaf from 5 to 12. How long?', '7 cm', ['12 cm', '5 cm', '17 cm'], '12 − 5.', ''],
         ['What does each small mark mean on a 1 cm ruler?', '1 cm', ['5 cm', '10 cm'], 'Each mark is 1.', ''], ['Which is longer: 9 cm or 11 cm?', '11 cm', ['9 cm'], 'Bigger.', ''], ['A stick is 14 cm. A pencil is 9 cm. Difference?', '5 cm', ['23 cm', '4 cm', '6 cm'], '14 − 9.', ''], ['Where do you put the ruler?', 'at 0', ['at 5', 'at the end'], 'Start at 0.', '']],
    gen: function (lv) { var n = r(3, lv ? 18 : 12); return mc('Using a ruler', 'The pencil ends at <b>' + n + '</b> on the ruler. How long is it?', n + ' cm', [n + 1 + ' cm', n - 1 + ' cm', n + 5 + ' cm'], 'Read the number at the end.', 'It is ' + n + ' cm long.', rule(0, 20, n)); } });

  M(307, { id: 'learn3', ch: 'frog', bg: 'pond',
    way: ['A balance scale compares mass. The heavier side goes down. We measure in grams (g) and kilograms (kg).', C(['⬇️ heavier', '⬆️ lighter'])],
    ex: [['Which is heavier: 500 g or 2 kg?', ['2 kg = 2000 g.', '2000 > 500.'], '2 kg', C(['500 g', '2 kg'])], ['A bag of flour is 1 kg. 3 bags is how many kg?', ['1 + 1 + 1.'], '3 kg', C(['3 kg'])]],
    mist: ['Use the same unit. 1 kg = 1000 g, so 1 kg is more than 500 g.', C(['1 kg = 1000 g'])],
    real: ['A bag of sugar is 1 kg. Is a cat nearer 4 g or 4 kg?', '4 kg', ['4 g'], 'A cat is heavy.', C(['🐱'])],
    qs: [['Which unit would you use for a feather?', 'grams', ['kilograms'], 'Light.', ''], ['Which unit would you use for a car?', 'kilograms', ['grams'], 'Heavy.', ''], ['1 kg = ? g', '1000 g', ['100 g', '10 g', '10000 g'], 'Kilo = 1000.', ''], ['Which is heavier: 2 kg or 1500 g?', '2 kg', ['1500 g'], '2000 g.', ''],
         ['A parcel is 3 kg. Another is 5 kg. Total?', '8 kg', ['2 kg', '15 kg'], '3 + 5.', ''], ['Half a kilogram is…', '500 g', ['50 g', '5 g', '5000 g'], 'Half of 1000.', ''], ['An apple is about…', '100 g', ['100 kg', '10 kg'], 'Light.', ''], ['Which is lightest: 5 kg, 500 g or 5 g?', '5 g', ['500 g', '5 kg'], '5 g.', '']],
    gen: function (lv) { var k = r(1, lv ? 9 : 5); return r(0, 1) ? mc('Mass', '<b>' + k + ' kg</b> = how many grams?', k * 1000 + ' g', [k * 100 + ' g', k * 10 + ' g', k * 10000 + ' g'], '1 kg = 1000 g.', k + ' kg = ' + k * 1000 + ' g.') : mc('Mass', 'Which is heavier: <b>' + k + ' kg</b> or <b>' + (k * 1000 - 100) + ' g</b>?', k + ' kg', [k * 1000 - 100 + ' g'], 'Change to the same unit.', k + ' kg is ' + k * 1000 + ' g.'); } });

  M(307, { id: 'learn4', ch: 'frog', bg: 'pond',
    way: ['Capacity is how much a container holds. We use millilitres (ml) and litres (l). 1 litre = 1000 ml.', C(['1 litre', '= 1000 ml'])],
    ex: [['Which holds more: 200 ml or 1 litre?', ['1 litre = 1000 ml.', '1000 > 200.'], '1 litre', C(['200 ml', '1 litre'])], ['How many 250 ml cups fill 1 litre?', ['4 quarters.', '250 × 4 = 1000.'], '4 cups', C(['250 × 4 = 1000'])]],
    mist: ['ml and l are different sizes. 1 l = 1000 ml, so 500 ml is only half a litre.', C(['500 ml = ½ l'])],
    real: ['A bottle holds 2 litres. How many ml?', '2000 ml', ['200 ml', '20 ml', '20000 ml'], '2 × 1000.', C(['2 l = 2000 ml'])],
    qs: [['Which holds more: a mug or a bath?', 'a bath', ['a mug'], 'Bath.', ''], ['1 litre = ? ml', '1000 ml', ['100 ml', '10 ml'], 'Kilo style.', ''], ['3 litres = ? ml', '3000 ml', ['300 ml', '30 ml'], '3 × 1000.', ''], ['Half a litre = ? ml', '500 ml', ['50 ml', '5 ml'], 'Half of 1000.', ''],
         ['Which unit for a teaspoon: ml or l?', 'ml', ['l'], 'Small.', ''], ['Which unit for a swimming pool: ml or l?', 'l', ['ml'], 'Big.', ''], ['Which is more: 750 ml or 1 l?', '1 l', ['750 ml'], '1000 > 750.', ''], ['2 jugs of 500 ml make…', '1 litre', ['500 ml', '2 litres'], '500 + 500.', '']],
    gen: function (lv) { var k = r(1, lv ? 9 : 5); return mc('Capacity', '<b>' + k + ' litres</b> = how many millilitres?', k * 1000 + ' ml', [k * 100 + ' ml', k * 10 + ' ml', k * 10000 + ' ml'], '1 litre = 1000 ml.', k + ' l = ' + k * 1000 + ' ml.'); } });

  M(307, { id: 'learnm1', ch: 'frog', bg: 'pond',
    li: ['Choosing the right unit', 'How do I choose the right unit?', 'Choose a unit that fits the size. cm and m for length, g and kg for mass, ml and l for capacity.', C(['length: cm, m', 'mass: g, kg', 'capacity: ml, l']),
      [['unit', 'what we measure in', '📐'], ['length', 'how long', '📏'], ['mass', 'how heavy', '⚖️'], ['capacity', 'how much it holds', '🥛']],
      [['A pencil is measured in cm. A classroom in m.', C(['pencil: cm', 'room: m'])], ['A feather is measured in g. A person in kg.', C(['feather: g', 'person: kg'])], ['A spoon holds ml. A bath holds l.', C(['spoon: ml', 'bath: l'])]],
      [['What unit for the height of a door: cm or m?', ['About 2 big steps.'], 'm', C(['door: m'])], ['What unit for the mass of an apple: g or kg?', ['Light.'], 'g', C(['apple: g'])], ['What unit for juice in a cup: ml or l?', ['Small amount.'], 'ml', C(['cup: ml'])]],
      ['Pick the unit that gives a sensible number. 200 cm is better said as 2 m.', C(['200 cm = 2 m'])],
      ['Which unit measures the mass of a bag of sweets?', C(['🍬']), ['cm', 'g', 'ml'], 'g', 'Mass is in grams.', 'Think how heavy.'],
      ['Right unit: cm, m for length; g, kg for mass; ml, l for capacity.', C(['cm m', 'g kg', 'ml l'])]],
    ex: [['Unit for the length of a football pitch: cm or m?', ['Very long.'], 'm', C(['pitch: m'])], ['Unit for water in a bath: ml or l?', ['A lot.'], 'l', C(['bath: l'])]],
    way: ['Make a table: three columns for length, mass and capacity and list things in each.', C(['length', 'mass', 'capacity'])],
    mist: ['Do not use a length unit for mass. A bag is not “5 cm” heavy.', C(['mass: g, kg'])],
    real: ['The recipe needs 250 ___ of milk. Which unit fits: ml or m?', 'ml', ['m', 'kg'], 'Milk is capacity.', C(['milk'])],
    qs: [['A swimming pool holds…', 'litres', ['grams', 'centimetres'], 'Capacity.', ''], ['A tall tree is measured in…', 'metres', ['grams', 'ml'], 'Length.', ''], ['A bag of flour is measured in…', 'kilograms', ['litres', 'metres'], 'Mass.', ''], ['A teaspoon holds…', 'millilitres', ['litres', 'kg'], 'Small.', ''],
         ['A fingernail is measured in…', 'centimetres', ['metres', 'litres'], 'Small length.', ''], ['A lorry is measured in…', 'tonnes or kg', ['grams', 'ml'], 'Heavy.', ''], ['A pencil is…', '15 cm', ['15 m', '15 kg'], 'Short.', ''], ['A bucket holds…', '10 l', ['10 cm', '10 g'], 'Capacity.', '']],
    gen: function () { var P = [['a pencil', 'cm'], ['a classroom', 'm'], ['a feather', 'g'], ['a child', 'kg'], ['a cup of water', 'ml'], ['a bath of water', 'l'], ['a football pitch', 'm'], ['a bag of sugar', 'kg']], p = pick(P), all = ['cm', 'm', 'g', 'kg', 'ml', 'l']; return mc('Choosing units', 'Which unit would you use to measure <b>' + p[0] + '</b>?', p[1], all.filter(function (x) { return x !== p[1]; }).sort(function (a, b) { return (a.charAt(0) === p[1].charAt(0) ? -1 : 0) - (b.charAt(0) === p[1].charAt(0) ? -1 : 0); }).slice(0, 3), 'Think: length, mass or capacity?', p[0] + ' is measured in ' + p[1] + '.'); } });

  M(307, { id: 'learnm2', ch: 'frog', bg: 'pond',
    li: ['Metres and centimetres', 'How are metres and centimetres linked?', '1 metre is 100 centimetres. To change metres to centimetres, multiply by 100.', rule(0, 10, 10),
      [['metre', '100 cm', '📏'], ['centimetre', '1/100 of a metre', '🔹'], ['convert', 'change units', '🔄'], ['half a metre', '50 cm', '½']],
      [['1 m = 100 cm. A metre stick is 100 cm long.', C(['1 m', '= 100 cm'])], ['2 m = 200 cm. 3 m = 300 cm.', C(['2 m = 200 cm', '3 m = 300 cm'])], ['Half a metre is 50 cm. A quarter of a metre is 25 cm.', C(['½ m = 50 cm', '¼ m = 25 cm'])]],
      [['How many cm in 4 m?', ['4 × 100.'], '400 cm', C(['4 m = 400 cm'])], ['How many m in 300 cm?', ['300 ÷ 100.'], '3 m', C(['300 cm = 3 m'])], ['1 m 20 cm is how many cm?', ['100 + 20.'], '120 cm', C(['1 m 20 cm = 120 cm'])]],
      ['Multiply by 100 to go from m to cm. Divide by 100 to go from cm to m.', C(['m → cm: × 100', 'cm → m: ÷ 100'])],
      ['How many cm in 5 m?', B('5 m = ? cm'), ['50 cm', '500 cm', '5000 cm'], '500 cm', '5 × 100 = 500.', 'Multiply by 100.'],
      ['1 m = 100 cm. Multiply by 100 for m to cm.', C(['1 m = 100 cm'])]],
    ex: [['How many cm in 6 m?', ['6 × 100.'], '600 cm', C(['6 m = 600 cm'])], ['How many m in 800 cm?', ['800 ÷ 100.'], '8 m', C(['800 cm = 8 m'])]],
    way: ['Lay a metre stick next to a 10 cm ruler: it takes 10 rulers to match one metre.', C(['10 × 10 cm = 1 m'])],
    mist: ['1 m is 100 cm, not 10 cm. A metre stick is much longer than a ruler.', C(['1 m = 100 cm'])],
    real: ['A table is 2 m long. How many cm?', '200 cm', ['20 cm', '2000 cm', '102 cm'], '2 × 100.', C(['2 m = 200 cm'])],
    qs: [['1 m = ? cm', '100 cm', ['10 cm', '1000 cm', '1 cm'], '100.', ''], ['3 m = ? cm', '300 cm', ['30 cm', '3000 cm', '103 cm'], '3 × 100.', ''], ['500 cm = ? m', '5 m', ['50 m', '0.5 m', '500 m'], '500 ÷ 100.', ''], ['Half a metre = ? cm', '50 cm', ['5 cm', '500 cm', '25 cm'], 'Half of 100.', ''],
         ['1 m 50 cm = ? cm', '150 cm', ['15 cm', '1050 cm', '501 cm'], '100 + 50.', ''], ['250 cm = ? m cm', '2 m 50 cm', ['25 m', '2 m 5 cm', '20 m 50 cm'], '200 + 50.', ''], ['Which is longer: 1 m or 90 cm?', '1 m', ['90 cm'], '100 > 90.', ''], ['A quarter of a metre = ? cm', '25 cm', ['4 cm', '75 cm', '250 cm'], '100 ÷ 4.', '']],
    gen: function (lv) { var m = r(1, lv ? 9 : 5), c = pick([0, 25, 50]); return c && lv ? mc('Metres and centimetres', '<b>' + m + ' m ' + c + ' cm</b> = how many cm?', m * 100 + c + ' cm', [m * 10 + c + ' cm', m * 100 + c * 10 + ' cm', m + c + ' cm'], '1 m = 100 cm.', m * 100 + c + ' cm.') : mc('Metres and centimetres', '<b>' + m + ' m</b> = how many centimetres?', m * 100 + ' cm', [m * 10 + ' cm', m * 1000 + ' cm', m + 100 + ' cm'], '1 m = 100 cm.', m + ' m = ' + m * 100 + ' cm.'); } });

  M(307, { id: 'learnm3', ch: 'frog', bg: 'pond',
    li: ['Reading scales', 'How do I read a scale?', 'A scale has marks with numbers. Work out how much each small mark is worth, then count on from the last number.', rule(0, 20, 14),
      [['scale', 'marks with numbers', '📏'], ['interval', 'the gap between marks', '↔️'], ['pointer', 'the arrow that points', '👆'], ['reading', 'the number we find', '🔍']],
      [['Look at the numbers: 0, 5, 10, 15, 20. The big steps are 5.', rule(0, 20, 10)], ['Between 10 and 15 there are 5 small marks, so each is 1.', rule(0, 20, 12)], ['The pointer is 2 marks after 10, so it reads 12.', rule(0, 20, 12)]],
      [['What does the pointer show?', ['Big steps of 5.', 'Pointer is 3 marks after 10.'], '13', rule(0, 20, 13)], ['A jug scale goes 0, 100, 200, 300 ml. The water is halfway between 100 and 200. What is it?', ['Halfway is 50 more.'], '150 ml', C(['100', '150', '200'])], ['A kitchen scale points to the mark between 2 kg and 3 kg. Halfway.', ['2 and a half.'], '2.5 kg', C(['2', '2.5', '3'])]],
      ['Work out the size of each step first. Do not just read the nearest number.', C(['count the marks'])],
      ['What does the ruler show?', rule(0, 20, 17), ['15', '17', '18'], '17', 'Read the pointer: 2 after 15.', 'Count on from 15.'],
      ['To read a scale: find the step size, then count on.', C(['step size', 'count on'])]],
    ex: [['A thermometer goes up in 2s: 0, 2, 4 … The line is at 8. What is the temperature?', ['Count in 2s.'], '8 °C', C(['0', '2', '4', '6', '8'])], ['A scale goes 0, 10, 20, 30. The pointer is halfway between 10 and 20.', ['Halfway is 15.'], '15', C(['10', '15', '20'])]],
    way: ['Mark the middle of a scale to get half-values like 5, 15, 25.', FL.p4.scale(0, 30, 5, 15, '')],
    mist: ['Check what each mark is worth before you read. Sometimes the marks are 2, not 1.', C(['marks go up in 2s'])],
    real: ['A jug marked 0, 250, 500 ml has water at 250 ml and a bit more. What is a good reading?', 'about 300 ml', ['about 100 ml', 'about 500 ml'], 'A bit more than 250.', C(['250', '?', '500'])],
    qs: [['A ruler pointer is 3 marks after 10. Reading?', '13', ['3', '30', '103'], '10 + 3.', rule(0, 20, 13)], ['A scale steps by 5: 0, 5, 10, 15. Pointer on the third mark. Reading?', '15', ['10', '5', '20'], '3 × 5.', ''], ['The scale steps by 10: 0, 10, 20. Halfway between 10 and 20 is…', '15', ['12', '14', '25'], 'Half of 10.', ''], ['A scale steps by 2. Pointer after 6 (1 mark). Reading?', '8', ['7', '6', '10'], '6 + 2.', ''],
         ['Steps of 100: 0, 100, 200. Halfway between 100 and 200?', '150', ['110', '120', '250'], 'Half of 100.', ''], ['Steps of 20: 0, 20, 40. The reading is 60. What are the next steps?', '80', ['62', '70', '100'], '+20.', ''], ['The pointer is exactly on 30. Reading?', '30', ['3', '33', '300'], 'On the mark.', ''], ['A thermometer shows 25 °C. 5 more?', '30 °C', ['20 °C', '35 °C'], '25 + 5.', '']],
    gen: function (lv) { var n = r(1, 19); return mc('Reading scales', 'The pointer is at <b>' + n + '</b> on the scale. What is the reading?', n, [n + 1, n - 1 || 3, n + 10], 'Count on from the nearest number.', 'The reading is ' + n + '.', rule(0, 20, n)); } });

  /* ---------- 308 Shape, movement and data ---------- */
  M(308, { id: 'learn1', ch: 'rocket', bg: 'space',
    way: ['3D shapes have faces (flat sides), edges (where faces meet) and vertices (corners).', SH(['cube', 'cuboid', 'cylinder'], 80)],
    ex: [['How many faces has a cuboid?', ['A box: top, bottom and 4 sides.'], '6', SH(['cuboid'], 100)], ['How many corners has a cube?', ['4 on the top and 4 on the bottom.'], '8', SH(['cube'], 100)]],
    mist: ['A cube has 12 edges. Faces and edges are different things.', SH(['cube'], 90)],
    real: ['A dice is a cube. How many faces have numbers?', '6', ['4', '8', '12'], '6 faces.', SH(['cube'], 90)],
    qs: [['How many faces has a cube?', '6', ['4', '8', '12'], '6.', SH(['cube'], 80)], ['How many edges has a cube?', '12', ['6', '8', '10'], '12.', ''], ['How many corners has a cube?', '8', ['6', '12', '4'], '8.', ''], ['Which can roll: cube or sphere?', 'sphere', ['cube'], 'Curved.', SH(['cube', 'sphere'], 70)],
         ['Which shape has a flat circle on each end?', 'cylinder', ['cone', 'sphere'], 'Cylinder.', SH(['cylinder'], 80)], ['How many faces has a cylinder?', '3', ['2', '6', '1'], '2 circles + 1 curved.', ''], ['Which has a point at the top?', 'cone', ['cylinder', 'cube'], 'Cone.', SH(['cone'], 80)], ['How many faces has a sphere?', '1', ['0', '2', '6'], '1 curved surface.', '']],
    gen: function (lv) { var P = [['cube', 6, 12, 8], ['cuboid', 6, 12, 8], ['pyramid', 5, 8, 5]], p = pick(P), k = r(1, 3); return mc('3D shapes', 'How many <b>' + ['faces', 'edges', 'corners'][k - 1] + '</b> has a <b>' + (p[0] === 'pyramid' ? 'square-based pyramid' : p[0]) + '</b>?', p[k], [p[k] + 1, p[k] - 1, p[k] + 2], 'Count carefully.', 'A ' + p[0] + ' has ' + p[k] + ' ' + ['faces', 'edges', 'corners'][k - 1] + '.', SH([p[0]], 90)); } });

  M(308, { id: 'learn2', ch: 'rocket', bg: 'space',
    way: ['A line of symmetry is where you fold a shape so the two halves match exactly.', C(['fold along the line', 'halves match'])],
    ex: [['How many lines of symmetry has a square?', ['4 ways to fold it.'], '4', SH(['square'], 100)], ['Does the letter A have a line of symmetry?', ['Fold down the middle.'], 'Yes', C(['A'])]],
    mist: ['The two halves must match exactly. A rectangle has 2 lines, not 4.', SH(['rectangle'], 100)],
    real: ['A butterfly has matching wings. How many lines of symmetry?', '1', ['2', '4'], 'Down the middle.', C(['🦋'])],
    qs: [['Does a circle have lines of symmetry?', 'Yes, lots', ['No', 'Only 1'], 'Any diameter.', SH(['circle'], 80)], ['How many lines of symmetry has a rectangle?', '2', ['1', '4'], '2.', SH(['rectangle'], 90)], ['How many lines of symmetry has an equilateral triangle?', '3', ['1', '2'], '3.', SH(['triangle'], 90)], ['Does the letter F have a line of symmetry?', 'No', ['Yes'], 'No match.', C(['F'])],
         ['Does the letter H have a line of symmetry?', 'Yes', ['No'], 'Yes.', C(['H'])], ['Which letter has a line of symmetry: M or R?', 'M', ['R'], 'M.', ''], ['How many lines of symmetry has a square?', '4', ['2', '1'], '4.', SH(['square'], 90)], ['A heart has how many lines of symmetry?', '1', ['2', '0'], '1.', C(['❤️'])]],
    gen: function () { var P = [['square', 4], ['rectangle', 2], ['circle', 'lots'], ['triangle', 3]], p = pick(P.slice(0, 3)); return p[1] === 'lots' ? mc('Symmetry', 'Does a circle have lines of symmetry?', 'Yes, lots', ['No', 'Only 1'], 'Think about folding.', 'A circle has lots.', SH(['circle'], 80)) : mc('Symmetry', 'How many lines of symmetry has a <b>' + p[0] + '</b>?', p[1], [p[1] + 1, p[1] - 1 || 3, 0], 'Fold it every way.', 'A ' + p[0] + ' has ' + p[1] + ' lines.', SH([p[0]], 90)); } });

  M(308, { id: 'learn3', ch: 'rocket', bg: 'space',
    way: ['A quarter turn is 90°, a half turn is 180° and a full turn is 360°. Clockwise goes like a clock.', C(['¼ turn', '½ turn', 'full turn'])],
    ex: [['Face north. Turn a quarter turn clockwise. Which way?', ['Clockwise from north is east.'], 'East', C(['N', 'E', 'S', 'W'])], ['Face east. Turn a half turn. Which way?', ['Half turn is the opposite.'], 'West', C(['E → W'])]],
    mist: ['Clockwise and anticlockwise are opposite directions. Check which way the clock goes.', C(['⟳ clockwise', '⟲ anticlockwise'])],
    real: ['You face the door and turn a half turn. What are you facing now?', 'the back', ['the door', 'the side'], 'Half turn.', C(['½'])],
    qs: [['How many quarter turns make a full turn?', '4', ['2', '3', '8'], '4 × 90 = 360.', ''], ['How many half turns make a full turn?', '2', ['1', '4'], '2.', ''], ['Face north. Half turn. Which way?', 'South', ['East', 'West'], 'Opposite.', ''], ['Face south. Quarter turn clockwise. Which way?', 'West', ['East', 'North'], 'Clockwise.', ''],
         ['Face east. Quarter turn anticlockwise. Which way?', 'North', ['South', 'West'], 'Anticlockwise.', ''], ['How many degrees is a quarter turn?', '90', ['45', '180', '360'], '90.', ''], ['A full turn brings you…', 'back to the start', ['to the side', 'to the back'], '360°.', ''], ['Face west. Half turn. Which way?', 'East', ['North', 'South'], 'Opposite.', '']],
    gen: function () { var D = ['North', 'East', 'South', 'West'], i = r(0, 3), t = pick([1, 2, 3]), cw = r(0, 1), nm = { 1: 'quarter turn', 2: 'half turn', 3: 'three quarter turn' }, to = D[(i + (cw ? t : 4 - t)) % 4]; return mc('Directions and turns', 'You face <b>' + D[i] + '</b> and make a <b>' + nm[t] + ' ' + (cw ? 'clockwise' : 'anticlockwise') + '</b>. Which way do you face?', to, D.filter(function (x) { return x !== to; }), 'Turn step by step.', 'You face ' + to + '.'); } });

  M(308, { id: 'learn4', ch: 'rocket', bg: 'space',
    way: ['A bar chart uses bars. The height tells how many. Look at the scale on the side.', bars([['red', 5], ['blue', 8, '#4aa8ff'], ['green', 3, '#7cc96b']])],
    ex: [['Red 5, blue 8. How many more blue?', ['8 − 5.'], '3 more', bars([['red', 5], ['blue', 8, '#4aa8ff']])], ['Red 5, blue 8, green 3. How many altogether?', ['5 + 8 + 3.'], '16', bars([['red', 5], ['blue', 8, '#4aa8ff'], ['green', 3, '#7cc96b']])]],
    mist: ['Read the scale. If each step is 2, a bar at 3 steps is 6.', C(['scale: 2s'])],
    real: ['A bar chart shows favourite fruit. Apples 12, bananas 9. Which is more popular?', 'apples', ['bananas'], '12 > 9.', bars([['apples', 12], ['bananas', 9, '#4aa8ff']])],
    qs: [['Which bar is tallest? red 4, blue 7, green 2', 'blue', ['red', 'green'], '7.', bars([['red', 4], ['blue', 7, '#4aa8ff'], ['green', 2, '#7cc96b']])], ['How many altogether? 4, 7 and 2', '13', ['11', '9', '12'], '4 + 7 + 2.', ''], ['How many more blue than green? 7 and 2', '5', ['9', '4', '14'], '7 − 2.', ''], ['Which is the least popular? red 4, blue 7, green 2', 'green', ['red', 'blue'], '2.', ''],
         ['If each square is 2 children, a bar of 5 squares is…', '10', ['5', '7', '25'], '5 × 2.', ''], ['What do the bars show?', 'how many', ['colours', 'days'], 'Their height.', ''], ['How many chose red? red 6, blue 4', '6', ['4', '10'], 'Read the bar.', ''], ['Dogs 9, cats 6. Difference?', '3', ['15', '4'], '9 − 6.', '']],
    gen: function (lv) { var a = r(2, lv ? 12 : 9), b = r(2, lv ? 12 : 9), c = r(2, lv ? 12 : 9); var tot = a + b + c; return mc('Bar charts', 'The chart shows red <b>' + a + '</b>, blue <b>' + b + '</b>, green <b>' + c + '</b>. How many <b>altogether</b>?', tot, [tot + 1, tot - 1, Math.max(a, b, c)], 'Add all the bars.', a + ' + ' + b + ' + ' + c + ' = ' + tot + '.', bars([['red', a], ['blue', b, '#4aa8ff'], ['green', c, '#7cc96b']])); } });

  M(308, { id: 'learnm1', ch: 'rocket', bg: 'space',
    li: ['2D shapes and their sides', 'How do I name 2D shapes by their sides?', 'We name flat shapes by how many sides they have: 3 is a triangle, 4 is a quadrilateral, 5 is a pentagon, 6 is a hexagon, 8 is an octagon.', SH(['triangle', 'square', 'pentagon', 'hexagon', 'octagon'], 60),
      [['polygon', 'a flat shape with straight sides', '🔷'], ['vertex', 'a corner', '📐'], ['regular', 'all sides and angles equal', '✅'], ['quadrilateral', 'a shape with 4 sides', '4️⃣']],
      [['Triangle: 3 sides, 3 vertices.', SH(['triangle'], 90)], ['Quadrilaterals have 4 sides: squares and rectangles.', SH(['square', 'rectangle'], 80)], ['Pentagon 5, hexagon 6, octagon 8.', SH(['pentagon', 'hexagon', 'octagon'], 70)]],
      [['What is the name for a 6-sided shape?', ['6 sides.'], 'hexagon', SH(['hexagon'], 100)], ['How many vertices has a pentagon?', ['5 sides, 5 vertices.'], '5', SH(['pentagon'], 100)], ['A stop sign has 8 sides. Name it.', ['8 sides.'], 'octagon', SH(['octagon'], 100)]],
      ['A square is a special rectangle, and both are quadrilaterals.', SH(['square', 'rectangle'], 70)],
      ['How many sides has a hexagon?', SH(['hexagon'], 90), ['5', '6', '8'], '6', 'Hexa means 6.', 'Count the sides.'],
      ['Name a flat shape from its sides: 3, 4, 5, 6, 8.', C(['triangle', 'quadrilateral', 'pentagon', 'hexagon', 'octagon'])]],
    ex: [['Which shape has 5 sides?', ['Five sides.'], 'pentagon', SH(['pentagon'], 100)], ['How many sides has an octagon?', ['Eight.'], '8', SH(['octagon'], 100)]],
    way: ['Trace around each shape with your finger and count the sides as you go.', SH(['triangle', 'hexagon'], 70)],
    mist: ['Hexagon is 6 and octagon is 8. Do not mix them up.', SH(['hexagon', 'octagon'], 70)],
    real: ['A honeycomb cell has 6 sides. What shape is it?', 'hexagon', ['pentagon', 'octagon'], '6 sides.', SH(['hexagon'], 90)],
    qs: [['How many sides has a pentagon?', '5', ['4', '6'], '5.', ''], ['How many sides has an octagon?', '8', ['6', '10'], '8.', ''], ['Which has 3 sides?', 'triangle', ['square', 'hexagon'], '3.', ''], ['Which has 6 sides?', 'hexagon', ['pentagon', 'octagon'], '6.', ''],
         ['Which has 4 equal sides?', 'square', ['rectangle', 'triangle'], 'Square.', ''], ['How many vertices has a hexagon?', '6', ['5', '8'], '6.', ''], ['Which is a quadrilateral?', 'rectangle', ['triangle', 'hexagon'], '4 sides.', ''], ['How many sides has a circle?', '1 curved side', ['0', '4'], 'Round.', '']],
    gen: function (lv) { var P = [['triangle', 3], ['square', 4], ['rectangle', 4], ['pentagon', 5], ['hexagon', 6], ['octagon', 8]], p = pick(P.slice(0, lv ? 6 : 4)); return r(0, 1) ? mc('2D shapes', 'How many sides has a <b>' + p[0] + '</b>?', p[1], [p[1] + 1, p[1] - 1, p[1] + 2], 'Count them.', p[1] + ' sides.', SH([p[0]], 90)) : mc('2D shapes', 'Which shape has <b>' + p[1] + ' sides</b>?', p[0], P.filter(function (x) { return x[1] !== p[1]; }).slice(0, 3).map(function (x) { return x[0]; }), 'Match the number of sides.', p[0] + ' has ' + p[1] + ' sides.'); } });

  M(308, { id: 'learnm2', ch: 'rocket', bg: 'space',
    li: ['Finding places on a grid', 'How do I find a place on a grid?', 'A grid uses a letter for the column and a number for the row. Go along first, then up.', C(['A', 'B', 'C', '1', '2', '3']),
      [['grid', 'squares in rows and columns', '🔳'], ['column', 'goes up and down', '↕️'], ['row', 'goes across', '↔️'], ['reference', 'letter and number address', '📍']],
      [['Go along to B, then up to 3: the reference is B3.', C(['B3'])], ['Start at A1. Move right 2 and up 1: you reach C2.', C(['A1 → C2'])], ['A treasure map uses grid references to find the gold.', C(['💎 C4'])]],
      [['What is at C2? Go along to C, then up 2.', ['Along first, then up.'], 'the star', C(['C2'])], ['Write the reference for 3 along, 1 up if A=1.', ['C1.'], 'C1', C(['C1'])], ['Move from B2 up 2 squares. Where are you?', ['B4.'], 'B4', C(['B2 → B4'])]],
      ['Letter first, then number. B3 is not 3B.', C(['B3 ✓'])],
      ['Where is D1? Which letter comes after C?', C(['A B C D']), ['3', 'D', 'E'], 'D', 'D comes after C.', 'Letters go along.'],
      ['Grid reference: along, then up.', C(['letter', 'number'])]],
    ex: [['A castle is at D3. Is it on row 3?', ['The number is the row.'], 'Yes', C(['D3'])], ['Move from A1 right 3. Where?', ['A, B, C, D → D1.'], 'D1', C(['A1 → D1'])]],
    way: ['Make a grid of 4 × 4 squares and hide a treasure. Say its reference.', C(['hide at C3'])],
    mist: ['Along (letter) before up (number). “Along the corridor, then up the stairs.”', C(['A–D along', '1–4 up'])],
    real: ['The map says ‘fountain at B2’. Which letter do you use first?', 'B', ['2'], 'The letter.', C(['B2'])],
    qs: [['Which square is the reference C3?', 'C across, 3 up', ['3 across, C up'], 'Letter first.', ''], ['Start at A1. Move right 3. Where?', 'D1', ['A4', 'C3'], 'Along.', ''], ['Start at B2. Move up 1. Where?', 'B3', ['C2', 'B1'], 'Up.', ''], ['Start at D4. Move left 2. Where?', 'B4', ['D2', 'D6'], 'Left.', ''],
         ['Which is further right: A3 or D3?', 'D3', ['A3'], 'D is further along.', ''], ['Which is higher: B1 or B4?', 'B4', ['B1'], '4 is higher.', ''], ['How many squares from A1 to C1?', '2', ['3', '1'], 'Two moves.', ''], ['Which is the 4th letter?', 'D', ['C', 'E'], 'A B C D.', '']],
    gen: function (lv) { var L = ['A', 'B', 'C', 'D', 'E', 'F'], c = r(0, lv ? 4 : 3), rw = r(1, lv ? 6 : 4), d = r(0, 1); return d ? mc('Grid references', 'Start at <b>' + L[c] + rw + '</b>. Move <b>up 1</b>. Where are you?', L[c] + (rw + 1), [L[c] + (rw - 1 || 3), L[(c + 1) % 6] + rw, rw + L[c]], 'Up changes the number.', L[c] + (rw + 1) + '.') : mc('Grid references', 'Start at <b>' + L[c] + rw + '</b>. Move <b>right 1</b>. Where are you?', L[c + 1] + rw, [L[c] + (rw + 1), L[Math.max(c - 1, 0) === c ? c + 2 : c - 1] + rw, rw + L[c + 1]], 'Right changes the letter.', L[c + 1] + rw + '.'); } });

  M(308, { id: 'learnm3', ch: 'rocket', bg: 'space',
    li: ['Pictograms', 'How do I read a pictogram?', 'A pictogram uses pictures to show data. Each picture stands for a number, given in the key.', FL.picto([['cats', 3, 'star'], ['dogs', 5, 'star']]),
      [['pictogram', 'a chart using pictures', '🖼️'], ['key', 'tells what each picture is worth', '🔑'], ['symbol', 'a picture used for counting', '⭐'], ['data', 'information we collect', '📊']],
      [['Each ⭐ is 1 child. Cats: 3 stars means 3 children.', FL.picto([['cats', 3, 'star']])], ['Dogs: 5 stars, so 5 children chose dogs.', FL.picto([['dogs', 5, 'star']])], ['If the key says ⭐ = 2, then 3 stars is 6.', C(['⭐ = 2', '3 ⭐ = 6'])]],
      [['Cats 3, dogs 5. Which is more popular?', ['5 > 3.'], 'dogs', FL.picto([['cats', 3, 'star'], ['dogs', 5, 'star']])], ['How many altogether? cats 3, dogs 5', ['3 + 5.'], '8', FL.picto([['cats', 3, 'star'], ['dogs', 5, 'star']])], ['The key says ⭐ = 2. A row has 4 stars. How many?', ['4 × 2.'], '8', C(['⭐ = 2', '4 stars'])]],
      ['Always read the key first. One symbol may mean more than 1.', C(['⭐ = 2'])],
      ['Each ⭐ = 2. Mia has 3 stars. How many?', C(['⭐⭐⭐']), ['3', '5', '6'], '6', '3 × 2 = 6.', 'Use the key.'],
      ['Pictogram: read the key, then count the pictures.', C(['key', 'count'])]],
    ex: [['Each ⭐ = 5. A row has 3 stars. How many?', ['3 × 5.'], '15', C(['⭐ = 5'])], ['Apples 4, pears 6. How many more pears?', ['6 − 4.'], '2', FL.picto([['apples', 4, 'apple'], ['pears', 6, 'fish']])]],
    way: ['Draw your own pictogram of how you come to school: walk, car, bus.', C(['walk', 'car', 'bus'])],
    mist: ['Do not count the pictures if the key is not 1. Multiply by the key.', C(['key ≠ 1'])],
    real: ['A pictogram shows each 🍎 = 2 apples. 5 pictures. How many apples?', '10', ['5', '7', '25'], '5 × 2.', C(['🍎 = 2'])],
    qs: [['Each ⭐ = 1. 7 stars means…', '7', ['1', '70'], 'Count.', ''], ['Each ⭐ = 2. 4 stars means…', '8', ['4', '6', '24'], '4 × 2.', ''], ['Each ⭐ = 5. 3 stars means…', '15', ['8', '53', '35'], '3 × 5.', ''], ['Each ⭐ = 10. 6 stars means…', '60', ['16', '600', '6'], '6 × 10.', ''],
         ['Cats 8, dogs 5. How many more cats?', '3', ['13', '4'], '8 − 5.', ''], ['Cats 8, dogs 5. Altogether?', '13', ['3', '15'], '8 + 5.', ''], ['What does the key tell you?', 'what each picture is worth', ['the title', 'the colour'], 'Key.', ''], ['Each ⭐ = 2. A row shows 10. How many stars?', '5', ['12', '20', '8'], '10 ÷ 2.', '']],
    gen: function (lv) { var k = pick(lv ? [2, 5, 10] : [1, 2, 5]), n = r(2, 7); return mc('Pictograms', 'In a pictogram each picture is worth <b>' + k + '</b>. There are <b>' + n + '</b> pictures. How many in all?', n * k, [n + k, n * k + k, n * k - k < 1 ? n * k + 2 : n * k - k], 'Multiply the pictures by the key.', n + ' × ' + k + ' = ' + n * k + '.', FL.picto([['row', n, 'star']])); } });

  M(308, { id: 'learnm4', ch: 'rocket', bg: 'space',
    li: ['Sorting with Venn and Carroll diagrams', 'How do I sort things in a Venn or Carroll diagram?', 'A Venn diagram uses circles. Things in both groups go where the circles overlap. A Carroll diagram uses a grid with yes and no.', C(['Venn: circles', 'Carroll: yes / no grid']),
      [['Venn diagram', 'overlapping circles for sorting', '⭕'], ['Carroll diagram', 'a table with yes / no', '🔳'], ['overlap', 'the part in both circles', '🎯'], ['rule', 'what we sort by', '📋']],
      [['Circle A: even numbers. Circle B: more than 10. 12 is even and more than 10, so it goes in the overlap.', C(['even', '>10', '12 overlap'])], ['A Carroll diagram has yes and no boxes: even / not even.', C(['even', 'not even'])], ['A number not in either circle goes outside both.', C(['outside: 7'])]],
      [['Where does 8 go? Even circle, more-than-10 circle.', ['8 is even and not more than 10.'], 'in the even circle only', C(['8'])], ['Where does 15? Even circle, more-than-10 circle.', ['15 is odd and more than 10.'], 'in the more-than-10 circle only', C(['15'])], ['Where does 4? Even and >10.', ['Even, not >10: even only.'], 'in the even circle only', C(['4'])]],
      ['Check both rules for every item.', C(['rule 1', 'rule 2'])],
      ['Where does 20 go? Even circle, >10 circle.', C(['20']), ['even only', '>10 only', 'overlap'], 'overlap', '20 is even and more than 10.', 'Check both rules.'],
      ['Venn: overlap = both rules. Carroll: yes/no for each rule.', C(['both', 'neither'])]],
    ex: [['Where does 5 go: Even, >10?', ['5 is odd and less than 10.'], 'outside both circles', C(['5'])], ['In a Carroll diagram of Even / Odd, where does 9 go?', ['9 is odd.'], 'odd', C(['9'])]],
    way: ['Make a Venn diagram on the floor with hoops and sort toys or numbers.', C(['hoop 1', 'hoop 2', 'overlap'])],
    mist: ['Things in both groups go in the overlap, not in one circle.', C(['overlap = both'])],
    real: ['Sort animals: legs / wings. A bird has 2 legs and wings. Where does it go?', 'overlap', ['legs only', 'wings only'], 'Both.', C(['🐦'])],
    qs: [['Venn: even / >10. Where is 14?', 'overlap', ['even only', '>10 only'], 'Both.', ''], ['Venn: even / >10. Where is 3?', 'outside both', ['even only', 'overlap'], 'Neither.', ''], ['Venn: even / >10. Where is 12?', 'overlap', ['even only', '>10 only'], 'Both.', ''], ['Venn: even / >10. Where is 17?', '>10 only', ['even only', 'overlap'], 'Odd, more than 10.', ''],
         ['Carroll: odd or even. Where is 21?', 'odd', ['even'], 'Ends in 1.', ''], ['Carroll: odd or even. Where is 38?', 'even', ['odd'], 'Ends in 8.', ''], ['Venn: 2-D / has corners. Where is a square?', 'overlap', ['neither'], '2-D and corners.', ''], ['Venn: 2-D / has corners. Where is a circle?', '2-D only', ['overlap', 'corners only'], 'No corners.', '']],
    gen: function (lv) { var n = r(1, lv ? 30 : 20), ev = n % 2 === 0, big = n > 10, ans = ev && big ? 'overlap' : ev ? 'even only' : big ? '>10 only' : 'outside both'; return mc('Venn diagrams', 'A Venn diagram has circles for <b>even</b> and <b>more than 10</b>. Where does <b>' + n + '</b> go?', ans, ['even only', '>10 only', 'overlap', 'outside both'].filter(function (x) { return x !== ans; }), 'Check both rules.', n + ' is ' + (ev ? 'even' : 'odd') + ' and ' + (big ? '' : 'not ') + 'more than 10.'); } });

  M(308, { id: 'learnm5', ch: 'rocket', bg: 'space',
    li: ['Likely and unlikely', 'How likely is it?', 'Chance tells how likely something is: impossible, unlikely, even chance, likely or certain.', C(['impossible', 'unlikely', 'even chance', 'likely', 'certain']),
      [['chance', 'how likely it is', '🎲'], ['certain', 'will definitely happen', '✅'], ['impossible', 'cannot happen', '🚫'], ['even chance', 'as likely as not', '⚖️']],
      [['The sun will rise tomorrow: certain.', C(['certain ✅'])], ['A coin lands on heads: even chance (50-50).', C(['even chance ⚖️'])], ['You will fly to the moon today: impossible.', C(['impossible 🚫'])]],
      [['A dice will roll a 7. How likely?', ['Dice go to 6.'], 'impossible', C(['🎲 1–6'])], ['You will have lunch today. How likely?', ['Most days.'], 'likely', C(['🍽️'])], ['A coin lands on tails. How likely?', ['2 sides, 1 tail.'], 'even chance', C(['🪙'])]],
      ['Unlikely is not impossible. Unlikely can still happen.', C(['unlikely ≠ impossible'])],
      ['It will snow in the desert today. How likely?', C(['🏜️']), ['certain', 'likely', 'unlikely'], 'unlikely', 'Very rare.', 'Think about the desert.'],
      ['Chance words: impossible, unlikely, even chance, likely, certain.', C(['0 → 1'])]],
    ex: [['A dice rolls a number from 1 to 6. How likely?', ['It must be one of them.'], 'certain', C(['1–6'])], ['A bag has 1 red and 9 blue counters. How likely is red?', ['Only 1 in 10.'], 'unlikely', C(['1 red', '9 blue'])]],
    way: ['Put events on a chance line from impossible to certain.', C(['impossible', 'unlikely', 'even', 'likely', 'certain'])],
    mist: ['A chance is not a promise. “Likely” does not mean it will happen.', C(['likely ≠ certain'])],
    real: ['A bag has 5 red and 5 blue counters. How likely is picking red?', 'even chance', ['likely', 'unlikely'], '5 of 10.', C(['5 red', '5 blue'])],
    qs: [['The sun will set today. How likely?', 'certain', ['likely', 'unlikely'], 'Always.', ''], ['A pig will fly. How likely?', 'impossible', ['unlikely', 'certain'], 'Cannot.', ''], ['A coin lands heads. How likely?', 'even chance', ['likely', 'certain'], '50-50.', ''], ['A dice shows 7. How likely?', 'impossible', ['unlikely', 'certain'], 'Only to 6.', ''],
         ['A bag has 9 red, 1 blue. Pick red. How likely?', 'likely', ['unlikely', 'impossible'], 'Most are red.', ''], ['A bag has 1 red, 9 blue. Pick red. How likely?', 'unlikely', ['likely', 'certain'], 'Few red.', ''], ['It will rain somewhere in Scotland this month. How likely?', 'likely', ['impossible', 'unlikely'], 'Often.', ''], ['A dice shows a number below 7. How likely?', 'certain', ['likely', 'even chance'], 'All of 1-6.', '']],
    gen: function () { var R = r(0, 10), B2 = 10 - R, ans = R === 0 ? 'impossible' : R === 10 ? 'certain' : R === 5 ? 'even chance' : R > 5 ? 'likely' : 'unlikely'; return mc('Chance', 'A bag has <b>' + R + ' red</b> and <b>' + B2 + ' blue</b> counters. You pick one without looking. How likely is red?', ans, ['impossible', 'unlikely', 'even chance', 'likely', 'certain'].filter(function (x) { return x !== ans; }).slice(0, 3), 'Compare red with all the counters.', R + ' of 10 are red: ' + ans + '.'); } });
})();
