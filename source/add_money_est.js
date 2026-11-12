/* New lessons and questions for S2 and S3 (added 12 Nov 2026):
   budgeting, savings and credit cards (Finance topics) and estimating by rounding (Number topics).
   Nothing here replaces an existing lesson or question. */
(function () { 'use strict';
var H = Studio.h, K = Studio.kit, Q = K.Q, rnd = H.rnd, pick = H.pick, T = H.trimNum, X = SK.X, mcq = SK2.mcq;
var S = FR.S, G = FR.G;
function pm(x) { return '£' + (Math.abs(x % 1) < 1e-9 ? String(Math.round(x)) : x.toFixed(2)); }
function r2(x) { return Math.round(x * 100) / 100; }
function sf1(x) { return Number(Number(x).toPrecision(1)); }
function clean(x) { return Math.round(x * 1000) / 1000; }
/* true when the second significant figure is 5, which makes 1 s.f. rounding ambiguous: we avoid those numbers */
function edge(x) { var d = Number(x).toPrecision(2).replace(/[.\-]/g, '').replace(/^0+/, ''); return d.charAt(1) === '5'; }
function nice(n) { return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' '); }

/* ---------------- slides ---------------- */
S.s2budget = X('Budgeting: income and spending',
  'Jo earns £1 800 a month. Rent is £650, bills £210, food £320 and travel £90. Jo saves what is left. How much does Jo save, and what percentage of income is that?',
  ['Add up the spending: 650 + 210 + 320 + 90 = £1 270.', 'Money left = income − spending: 1 800 − 1 270 = £530.', 'As a percentage of income: 530 ÷ 1 800 × 100 ≈ 29.4%.', 'Jo saves £530 a month, about 29.4% of income.'],
  ['spending = £1 270', '1 800 − 1 270 = 530', '530 ÷ 1 800 ≈ 29.4%', '£530 saved'],
  '£530, about 29.4%', 'A budget shows where money goes before it is spent, so there are no nasty surprises.',
  'how to plan a budget: add up the spending, then compare it with the income.',
  ['Money left = income − total spending. A negative answer is a shortfall.', 'Fixed costs (rent) stay the same each month; variable costs (food) change.'],
  ['Example 1: income £900 and spending £740 leaves £160.', 'Example 2: £45 out of a £300 budget is 15%.', 'Example 3: £35 a week × 52 weeks = £1 820 a year.']);

S.s3budget = X('Budgets with percentages and a yearly plan',
  'A household has £2 400 a month after tax. Rent is 35% of this, food is £420 and everything else is £580. How much is left each month, and how much is saved in a year if the same amount is saved every month?',
  ['Rent = 35% of 2 400 = 0.35 × 2 400 = £840.', 'Total spending = 840 + 420 + 580 = £1 840.', 'Left each month = 2 400 − 1 840 = £560.', 'In a year: 560 × 12 = £6 720.'],
  ['rent = £840', 'spending = £1 840', 'left = £560', '560 × 12 = £6 720'],
  '£560 a month, £6 720 a year', 'Banks, councils and charities all use budgets to plan how much they can spend.',
  'how to build a budget from percentages and fixed amounts, then scale it up to a year.',
  ['Turn each percentage into an amount of money first.', 'Check the parts: spending + savings must equal income.'],
  ['Example 1: 20% of £1 500 is £300 for bills.', 'Example 2: a £35 a month subscription costs £420 a year.', 'Example 3: if costs rise 4%, a £1 840 budget becomes 1.04 × 1 840 = £1 913.60.']);

S.s2save = X('Savings accounts and credit cards',
  'Mia puts £800 in a savings account paying 3% interest a year. Her friend owes £800 on a credit card that charges 2% interest a month and pays nothing for a month. Work out Mia’s interest after one year and the card interest after one month.',
  ['Savings: 3% of 800 = 0.03 × 800 = £24 in a year.', 'Credit card: 2% of 800 = 0.02 × 800 = £16 in one month.', 'Over 12 months the card would add about 16 × 12 = £192 if nothing is paid.', 'Mia earns £24 a year. The card charges £16 every month.'],
  ['0.03 × 800 = 24', '0.02 × 800 = 16', '16 × 12 = 192', '£24 earned, £16 owed'],
  '£24 earned, £16 owed', 'Savings pay you interest. Borrowing on a credit card costs you interest, so it is cheaper to pay a card off quickly.',
  'how to compare interest earned on savings with interest charged on a credit card.',
  ['Savings interest is earned. Card interest is owed.', 'Check whether the rate is per year or per month before you calculate.'],
  ['Example 1: £500 at 4% a year earns £20 simple interest.', 'Example 2: £300 at 1.5% a month costs £4.50 in interest.', 'Example 3: paying £60 a month for 10 months on a £540 purchase costs £60 extra.']);

S.s3save = X('Compound savings and credit card balances',
  'Ravi saves £2 000 at 4% compound interest a year. A credit card balance of £2 000 grows by 1.5% each month if nothing is paid. Find the savings after 2 years and the card balance after 2 months.',
  ['Savings: multiplier 1.04, so 2 000 × 1.04² = 2 000 × 1.0816 = £2 163.20.', 'Credit card: multiplier 1.015, so 2 000 × 1.015² = 2 000 × 1.030225 = £2 060.45.', 'Savings grew by £163.20 in 2 years.', 'The card grew by £60.45 in only 2 months.'],
  ['savings £2 163.20', 'card £2 060.45', 'savings grew £163.20', 'card grew £60.45'],
  '£2 163.20 and £2 060.45', 'Compound interest works for you on savings and against you on unpaid debt.',
  'how to use a multiplier for compound interest on savings and on credit card balances.',
  ['Percentage increase r% has multiplier 1 + r ÷ 100.', 'Use the power for the number of periods, then round to the nearest penny.'],
  ['Example 1: £1 000 at 3% for 2 years is 1 000 × 1.03² = £1 060.90.', 'Example 2: £500 at 2% a month for 3 months owes 500 × 1.02³ = £530.60.', 'Example 3: the same rate over more periods grows faster each time.']);

S.s2est = X('Estimating by rounding',
  'Estimate 48.7 × 6.2 by rounding each number to 1 significant figure, then check it against the exact answer.',
  ['Round 48.7 to 1 significant figure: 50.', 'Round 6.2 to 1 significant figure: 6.', 'Estimate: 50 × 6 = 300.', 'The exact answer is 301.94, so the estimate is close and the calculation looks sensible.'],
  ['48.7 ≈ 50', '6.2 ≈ 6', '50 × 6 = 300', 'exact 301.94'],
  '≈ 300', 'An estimate spots slips, such as a missing decimal point on a calculator.',
  'how to estimate by rounding to 1 significant figure and use it to check an answer.',
  ['Round every number to 1 significant figure before you calculate.', 'An estimate should be close to the exact answer, not the same.'],
  ['Example 1: 603 ÷ 19.8 ≈ 600 ÷ 20 = 30.', 'Example 2: £4.95 + £11.20 + £2.10 ≈ £5 + £11 + £2 = £18.', 'Example 3: if a calculator gives 3 019 for 48.7 × 6.2, the estimate 300 shows a slip.']);

S.s3est = X('Estimating with powers and division',
  'Estimate (3.9² × 21) ÷ 0.52 by rounding each number to 1 significant figure.',
  ['Round 3.9 to 4, 21 to 20 and 0.52 to 0.5.', 'The estimate is (4² × 20) ÷ 0.5.', '4² = 16, then 16 × 20 = 320.', '320 ÷ 0.5 = 640. The exact answer is about 614, so the estimate is close.'],
  ['3.9 ≈ 4, 21 ≈ 20, 0.52 ≈ 0.5', '(4² × 20) ÷ 0.5', '16 × 20 = 320', '320 ÷ 0.5 = 640'],
  '≈ 640', 'Engineers estimate first so they know roughly what answer to expect before they use exact values.',
  'how to estimate a calculation with powers and division, and judge whether an estimate is too big or too small.',
  ['Dividing by a smaller number (0.5 instead of 0.52) makes the answer larger.', 'Rounding the top up and the bottom down always gives an overestimate.'],
  ['Example 1: 48 ÷ 0.21 ≈ 50 ÷ 0.2 = 250, an overestimate.', 'Example 2: 2.1² × 31 ≈ 4 × 30 = 120.', 'Example 3: round money to the nearest £ before adding a shopping bill.']);

/* ---------------- generators: budgeting ---------------- */
G.genBudgetLeft = function genBudgetLeft() {
  var inc, rent, bills, food, trav, tot;
  do { inc = pick([900, 1200, 1500, 1800, 2100, 2400]); rent = rnd(6, Math.floor(inc * 0.45 / 50)) * 50; bills = rnd(8, 22) * 10; food = rnd(15, 35) * 10; trav = rnd(4, 12) * 10; tot = rent + bills + food + trav; } while (tot >= inc);
  var nm = pick(['Dana', 'Kai', 'Priya', 'Omar', 'Leah', 'Callum']);
  return Q({ tag: 'Budgeting', text: nm + ' earns <b>' + pm(inc) + '</b> a month. Rent is <b>' + pm(rent) + '</b>, bills <b>' + pm(bills) + '</b>, food <b>' + pm(food) + '</b> and travel <b>' + pm(trav) + '</b>. How much is left each month? (£)', answer: String(inc - tot), hints: ['Add up all the spending first.', 'Money left = income − total spending.'], explain: rent + ' + ' + bills + ' + ' + food + ' + ' + trav + ' = ' + tot + '. ' + inc + ' − ' + tot + ' = ' + (inc - tot) + '.' });
};
G.genBudgetShort = function genBudgetShort() {
  var inc = pick([700, 800, 900, 1000, 1100]), a = rnd(30, 50) * 10, b = rnd(10, 25) * 10, c = rnd(8, 20) * 10, tot = a + b + c;
  while (tot <= inc) { a += 50; tot = a + b + c; }
  var nm = pick(['Sam', 'Ana', 'Rory', 'Zara']);
  return Q({ tag: 'Budgeting', text: nm + ' has <b>' + pm(inc) + '</b> a month to spend. Rent is <b>' + pm(a) + '</b>, food <b>' + pm(b) + '</b> and other costs <b>' + pm(c) + '</b>. How much more money does ' + nm + ' need each month to cover the costs? (£)', answer: String(tot - inc), hints: ['Add up the costs.', 'The shortfall is the costs minus the income.'], explain: a + ' + ' + b + ' + ' + c + ' = ' + tot + '. ' + tot + ' − ' + inc + ' = ' + (tot - inc) + '.' });
};
G.genBudgetPct = function genBudgetPct() {
  var inc = pick([400, 600, 800, 1000, 1200, 1600]), p = pick([25, 30, 35, 40]), q = pick([10, 15, 20, 25]);
  var left = inc * (100 - p - q) / 100;
  return Q({ tag: 'Budgeting', text: 'A budget is <b>' + pm(inc) + '</b> a month. <b>' + p + '%</b> goes on rent and <b>' + q + '%</b> on food. How much money is left? (£)', answer: T(left), hints: ['Find what percentage is left: 100% − ' + p + '% − ' + q + '%.', 'Then find that percentage of ' + pm(inc) + '.'], explain: '100 − ' + p + ' − ' + q + ' = ' + (100 - p - q) + '%. ' + (100 - p - q) + '% of ' + inc + ' = ' + T(left) + '.' });
};
G.genBudgetYear = function genBudgetYear() {
  var m = rnd(8, 30), n = rnd(5, 15), k = rnd(10, 40), tot = (m + n + k) * 12;
  return Q({ tag: 'Budgeting', text: 'Each month a gym costs <b>' + pm(m) + '</b>, a streaming service <b>' + pm(n) + '</b> and a phone plan <b>' + pm(k) + '</b>. How much do the three cost in a year? (£)', answer: String(tot), hints: ['Add the monthly costs.', 'Multiply by 12 months.'], explain: m + ' + ' + n + ' + ' + k + ' = ' + (m + n + k) + ' a month. ' + (m + n + k) + ' × 12 = ' + tot + '.' });
};
G.genBudgetPlan = function genBudgetPlan() {
  var inc, p, f, o, rent, left;
  do { inc = pick([1800, 2000, 2200, 2400, 2600, 2800, 3000]); p = pick([25, 30, 35, 40]); f = rnd(30, 50) * 10; o = rnd(30, 70) * 10; rent = inc * p / 100; left = inc - rent - f - o; } while (left <= 0);
  return Q({ tag: 'Budgeting', text: 'A family has <b>' + pm(inc) + '</b> a month after tax. Rent is <b>' + p + '%</b> of this, food is <b>' + pm(f) + '</b> and other costs are <b>' + pm(o) + '</b>. How much is left each month? (£)', answer: T(left), hints: ['Find the rent: ' + p + '% of ' + pm(inc) + '.', 'Subtract rent, food and other costs from the income.'], explain: 'Rent = ' + p + '% × ' + inc + ' = ' + T(rent) + '. ' + inc + ' − ' + T(rent) + ' − ' + f + ' − ' + o + ' = ' + T(left) + '.' });
};
G.genBudgetSaveYear = function genBudgetSaveYear() {
  var inc = pick([1500, 1800, 2000, 2200, 2500, 3000]), p = pick([10, 12, 15, 18, 20]), m = inc * p / 100;
  return Q({ tag: 'Budgeting', text: 'Sam saves <b>' + p + '%</b> of a monthly income of <b>' + pm(inc) + '</b>. How much does Sam save in one year? (£)', answer: T(m * 12), hints: ['Find ' + p + '% of the monthly income.', 'Multiply by 12.'], explain: p + '% of ' + inc + ' = ' + T(m) + '. ' + T(m) + ' × 12 = ' + T(m * 12) + '.' });
};
G.genBudgetRise = function genBudgetRise() {
  var b = pick([400, 600, 800, 1000, 1200, 1500]), p = pick([3, 4, 5, 6, 8]), nb = r2(b * (100 + p) / 100);
  return Q({ tag: 'Budgeting', text: 'A monthly budget of <b>' + pm(b) + '</b> has to rise by <b>' + p + '%</b> because prices go up. What is the new monthly budget? (£)', answer: T(nb), hints: ['Percentage increase: the multiplier is 1 + ' + p + ' ÷ 100 = ' + T(1 + p / 100) + '.', 'Multiply the budget by the multiplier.'], explain: T(1 + p / 100) + ' × ' + b + ' = ' + T(nb) + '.' });
};

/* ---------------- generators: savings and credit ---------------- */
G.genSaveInt = function genSaveInt() {
  var P = rnd(2, 20) * 100, r = pick([2, 3, 4, 5]), n = pick([1, 2, 3]), i = P * r * n / 100;
  return Q({ tag: 'Savings and credit', text: 'Ella saves <b>' + pm(P) + '</b> at <b>' + r + '%</b> simple interest a year. How much interest does she earn in <b>' + n + '</b> year' + (n > 1 ? 's' : '') + '? (£)', answer: String(i), hints: ['Simple interest is the same amount every year.', 'Find ' + r + '% of ' + pm(P) + ', then multiply by ' + n + '.'], explain: r + '% of ' + P + ' = ' + (P * r / 100) + '. × ' + n + ' = ' + i + '.' });
};
G.genSaveCompare = function genSaveCompare() {
  var P = pick([1000, 1500, 2000, 2500]), r = pick([2, 3, 4]), a = P * r / 100, f, A;
  do { f = a + pick([-1, 1]) * rnd(4, 15); } while (f < 5);
  A = a > f;
  return mcq('Savings and credit', 'Account A pays <b>' + r + '%</b> a year on <b>' + pm(P) + '</b>. Account B pays a fixed <b>' + pm(f) + '</b> a year on the same amount. Which earns more in one year?', A ? 'Account A' : 'Account B', [A ? 'Account B' : 'Account A', 'They earn the same', 'It cannot be worked out'], ['Work out the interest from Account A in pounds.', 'Compare it with ' + pm(f) + '.'], r + '% of ' + P + ' = ' + pm(a) + '. Account B pays ' + pm(f) + ', so ' + (A ? 'Account A' : 'Account B') + ' earns more.');
};
G.genCardMonth = function genCardMonth() {
  var B = rnd(2, 15) * 100, r = pick([1, 1.5, 2, 2.5]), i = r2(B * r / 100);
  return Q({ tag: 'Savings and credit', text: 'A credit card balance is <b>' + pm(B) + '</b>. The card charges <b>' + r + '%</b> interest a month and nothing is paid. How much interest is added after one month? (£)', answer: T(i), hints: ['Interest = the percentage of the balance.', 'Find ' + r + '% of ' + pm(B) + '.'], explain: r + '% of ' + B + ' = ' + T(i) + '.' });
};
G.genCardRepay = function genCardRepay() {
  var P = rnd(4, 16) * 50, n = pick([6, 8, 10, 12]), m = Math.ceil(P / n) + rnd(1, 4), tot = n * m;
  return Q({ tag: 'Savings and credit', text: 'A <b>' + pm(P) + '</b> purchase on a credit card is paid off in <b>' + n + '</b> monthly payments of <b>' + pm(m) + '</b>. How much extra is paid compared with the price? (£)', answer: String(tot - P), hints: ['Total paid = payments × number of months.', 'Extra = total paid − price.'], explain: n + ' × ' + m + ' = ' + tot + '. ' + tot + ' − ' + P + ' = ' + (tot - P) + '.' });
};
G.genSaveCompound = function genSaveCompound() {
  var P, r, n, v;
  do { P = pick([500, 1000, 1500, 2000, 2500, 5000]); r = pick([2, 3, 4, 5]); n = pick([2, 3]); v = P * Math.pow(1 + r / 100, n); } while (Math.abs((v * 100) % 1 - 0.5) < 1e-6);
  var ans = r2(v);
  return Q({ tag: 'Savings and credit', text: 'Mo saves <b>' + pm(P) + '</b> at <b>' + r + '%</b> compound interest a year. How much is in the account after <b>' + n + '</b> years? Give the answer to the nearest penny. (£)', answer: T(ans), hints: ['The multiplier is 1 + ' + r + ' ÷ 100 = ' + T(1 + r / 100) + '.', 'Use the multiplier to the power ' + n + ', then multiply by ' + P + '.'], explain: P + ' × ' + T(1 + r / 100) + '^' + n + ' = ' + T(ans) + '.' });
};
G.genCardCompound = function genCardCompound() {
  var B, m, n, v;
  do { B = pick([500, 1000, 2000, 2500]); m = pick([1, 1.5, 2]); n = pick([2, 3]); v = B * Math.pow(1 + m / 100, n); } while (Math.abs((v * 100) % 1 - 0.5) < 1e-6);
  var ans = r2(v);
  return Q({ tag: 'Savings and credit', text: 'A credit card balance of <b>' + pm(B) + '</b> grows by <b>' + m + '%</b> a month when nothing is paid. How much is owed after <b>' + n + '</b> months? Give the answer to the nearest penny. (£)', answer: T(ans), hints: ['The multiplier is 1 + ' + m + ' ÷ 100 = ' + T(1 + m / 100) + '.', 'Use the multiplier to the power ' + n + '.'], explain: B + ' × ' + T(1 + m / 100) + '^' + n + ' = ' + T(ans) + '.' });
};

/* ---------------- generators: estimating ---------------- */
G.genEstMul = function genEstMul() {
  var a, b;
  do { a = rnd(130, 980) / 10; b = rnd(21, 89) / (pick([1, 10])); } while (edge(a) || edge(b) || a === sf1(a) || b === sf1(b));
  var est = clean(sf1(a) * sf1(b));
  return Q({ tag: 'Estimating', text: 'Estimate <b>' + T(a) + ' × ' + T(b) + '</b> by rounding each number to 1 significant figure.', answer: T(est), hints: ['Round ' + T(a) + ' and ' + T(b) + ' to 1 significant figure.', 'Then multiply the rounded numbers.'], explain: T(a) + ' ≈ ' + T(sf1(a)) + ' and ' + T(b) + ' ≈ ' + T(sf1(b)) + '. ' + T(sf1(a)) + ' × ' + T(sf1(b)) + ' = ' + T(est) + '.' });
};
G.genEstDiv = function genEstDiv() {
  var pr = pick([[600, 20], [800, 40], [900, 30], [400, 50], [3000, 60], [2000, 40], [900, 300], [4000, 80], [600, 300]]), ap = pr[0], bp = pr[1], a, b;
  do { a = Math.round(ap * (1 + pick([-1, 1]) * rnd(1, 4) / 100)); b = Math.round(bp * (1 + pick([-1, 1]) * rnd(1, 4) / 100) * 10) / 10; } while (sf1(a) !== ap || sf1(b) !== bp || a === ap);
  var est = ap / bp;
  return Q({ tag: 'Estimating', text: 'Estimate <b>' + nice(a) + ' ÷ ' + T(b) + '</b> by rounding each number to 1 significant figure.', answer: T(est), hints: ['Round both numbers to 1 significant figure.', 'Then divide the rounded numbers.'], explain: nice(a) + ' ≈ ' + nice(ap) + ' and ' + T(b) + ' ≈ ' + T(bp) + '. ' + nice(ap) + ' ÷ ' + T(bp) + ' = ' + T(est) + '.' });
};
G.genEstMoney = function genEstMoney() {
  var p = [], i, pence;
  for (i = 0; i < 3; i++) { do { pence = rnd(5, 95); } while (pence === 50 || pence % 50 === 0); p.push(rnd(1, 14) + pence / 100); }
  var est = p.reduce(function (s, x) { return s + Math.round(x); }, 0);
  return Q({ tag: 'Estimating', text: 'A shop sells three items for <b>' + pm(p[0]) + '</b>, <b>' + pm(p[1]) + '</b> and <b>' + pm(p[2]) + '</b>. Estimate the total by rounding each price to the nearest pound. (£)', answer: String(est), hints: ['Round each price to the nearest £.', 'Add the rounded prices.'], explain: pm(p[0]) + ' ≈ £' + Math.round(p[0]) + ', ' + pm(p[1]) + ' ≈ £' + Math.round(p[1]) + ', ' + pm(p[2]) + ' ≈ £' + Math.round(p[2]) + '. The total is about £' + est + '.' });
};
G.genEstCheck = function genEstCheck() {
  var a, b;
  do { a = rnd(21, 99) / 10; b = rnd(11, 89); } while (edge(a) || edge(b) || a === sf1(a) || b === sf1(b));
  var ex = Math.round(a * b * 10) / 10, est = clean(sf1(a) * sf1(b));
  return mcq('Estimating', 'Use an estimate to decide which is the correct answer to <b>' + T(a) + ' × ' + b + '</b>.', T(ex), [T(clean(ex / 10)), T(clean(ex * 10)), T(clean(ex * 100))], ['Round both numbers to 1 significant figure and multiply.', 'Pick the answer closest to your estimate.'], 'The estimate is ' + T(sf1(a)) + ' × ' + T(sf1(b)) + ' = ' + T(est) + ', so the answer must be close to ' + T(est) + '. The exact answer is ' + T(ex) + '.');
};
G.genEstExpr = function genEstExpr() {
  var ap = pick([2, 3, 4, 5, 6]), bp = pick([20, 30, 40, 50, 60, 80]), cp = pick([0.5, 0.2, 2, 4, 5]);
  var a = Math.round((ap + pick([-1, 1]) * rnd(1, 4) / 10) * 10) / 10, b = bp + pick([-1, 1]) * rnd(1, 4), c = Math.round(cp * (1 + pick([-1, 1]) * rnd(2, 8) / 100) * 100) / 100;
  var est = Math.round(ap * ap * bp / cp * 100) / 100;
  return Q({ tag: 'Estimating', text: 'Estimate <b>(' + T(a) + '² × ' + b + ') ÷ ' + T(c) + '</b> by rounding each number to 1 significant figure.', answer: T(est), hints: ['Round ' + T(a) + ', ' + b + ' and ' + T(c) + ' to 1 significant figure.', 'Square first, then multiply, then divide.'], explain: T(a) + ' ≈ ' + ap + ', ' + b + ' ≈ ' + bp + ', ' + T(c) + ' ≈ ' + T(cp) + '. (' + ap + '² × ' + bp + ') ÷ ' + T(cp) + ' = ' + T(ap * ap * bp) + ' ÷ ' + T(cp) + ' = ' + T(est) + '.' });
};
G.genEstDirection = function genEstDirection() {
  /* a ÷ b with the top rounded up or down and the bottom rounded up or down */
  var ap = pick([40, 50, 60, 80, 90]), bp = pick([0.2, 0.3, 0.4, 0.5]), up1 = Math.random() < 0.5, up2 = Math.random() < 0.5;
  var a = up1 ? ap - rnd(1, 3) : ap + rnd(1, 3), b = Math.round((up2 ? bp - rnd(1, 3) / 100 : bp + rnd(1, 3) / 100) * 100) / 100;
  var ans = (up1 && !up2) ? 'bigger than the exact answer' : (!up1 && up2) ? 'smaller than the exact answer' : 'impossible to tell without working out the exact answer';
  var all = ['bigger than the exact answer', 'smaller than the exact answer', 'impossible to tell without working out the exact answer'];
  return mcq('Estimating', 'To estimate <b>' + a + ' ÷ ' + T(b) + '</b>, Kim works out <b>' + ap + ' ÷ ' + T(bp) + '</b>. Kim’s estimate is…', ans, all.filter(function (x) { return x !== ans; }), ['Did the top number go up or down when it was rounded?', 'Did the bottom number go up or down? A bigger top makes the answer bigger; a bigger bottom makes it smaller.'], (up1 === up2 ? 'The top was rounded ' + (up1 ? 'up' : 'down') + ' and the bottom was rounded ' + (up2 ? 'up' : 'down') + '. Those two changes pull the estimate in opposite directions, so you cannot tell without working out the exact answer.' : 'The top was rounded ' + (up1 ? 'up' : 'down') + ' and the bottom was rounded ' + (up2 ? 'up' : 'down') + ', so the estimate is ' + ans + '.'));
};
})();
