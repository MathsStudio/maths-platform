/* lessons_503.js: new Watch lessons for P5 Topic 3, Fractions. One detailed lesson per question. */
(function () {
  'use strict';
  var BT = window.BT; if (!BT || !BT.lessons || !BT.lk) return;
  var V = BT.sv, LK = BT.lk;
  var SC = function (h, sub, steps) { return { h: h, sub: sub, steps: steps }; };
  var st = function (say, html) { return { say: say, html: html || '' }; };
  var SW = '<!--swap-->';
  var F = function (n, d, col) { return '<span style="display:inline-flex;flex-direction:column;align-items:center;line-height:1;font-weight:700;color:' + (col || 'inherit') + '"><span>' + n + '</span><span style="border-top:3px solid currentColor;padding-top:2px;min-width:1.2em;text-align:center">' + d + '</span></span>'; };
  var BIG = function (inner) { return '<div style="font-size:40px;display:flex;align-items:center;gap:14px;justify-content:center;flex-wrap:wrap">' + inner + '</div>'; };
  var P = 'var(--accent)', O = 'var(--bad)', G = 'var(--good)';

  /* ---------- What is a fraction? ---------- */
  var what = {
    title: 'What is a fraction?', goal: 'what a fraction is, and why the parts must be equal.',
    scenes: [
      SC('What is a fraction?', 'A part of a whole', [
        st("Here is a whole pizza. In maths, one complete thing is called a whole.", LK.pie(1, 1) + V.note('1 whole')),
        st("A fraction is a part of a whole. To make fractions, we cut the whole into equal parts.", V.rule('A fraction is part of a whole, cut into equal parts.'))]),
      SC('Cutting into equal parts', 'Quarters', [
        st("Let's cut the pizza into four equal parts. Equal means every part is exactly the same size.", LK.pie(0, 4) + V.note('4 equal parts')),
        st("Now take one of the four parts. We have one part out of four. We write this as one quarter.", SW + LK.pair(LK.pie(1, 4), BIG(F(1, 4, P) + '<span style="font-size:22px;color:var(--accent)">= one quarter</span>')))]),
      SC('A chocolate bar', 'Eighths', [
        st("Here is a chocolate bar with eight equal squares.", LK.fbar(0, 8, 400)),
        st("Sam eats three squares. Sam has eaten three out of eight equal parts: three eighths.", SW + LK.fbar(3, 8, 400) + BIG(F(3, 8, P) + '<span style="font-size:22px;color:var(--accent)">= three eighths</span>')),
        st("What is left? Five squares. That is five eighths.", LK.fbar(3, 8, 400, 30) + BIG(F(5, 8, O) + '<span style="font-size:22px;color:var(--bad)">left</span>')),
        st("Three eighths plus five eighths makes eight eighths. Eight eighths is the whole bar.", BIG(F(3, 8, P) + '+' + F(5, 8, O) + '=' + F(8, 8) + '= 1 whole'))]),
      SC('The parts must be equal', 'Is it a fraction?', [
        st("Fractions need equal parts. This bar is cut into four equal parts, so one part is one quarter.", LK.fbar(1, 4, 300) + V.eq('✓ equal parts: one part is ¼', 'g')),
        st("This bar is cut into four parts too, but they are not equal. The shaded part is not one quarter, because the parts are different sizes.",
          '<svg viewBox="0 0 304 42" width="304" role="img" aria-label="A bar cut into 4 unequal parts"><rect x="2" y="4" width="34" height="34" style="fill:var(--accent);stroke:var(--fg);stroke-width:2"/><rect x="36" y="4" width="120" height="34" style="fill:#fff;stroke:var(--fg);stroke-width:2"/><rect x="156" y="4" width="70" height="34" style="fill:#fff;stroke:var(--fg);stroke-width:2"/><rect x="226" y="4" width="76" height="34" style="fill:#fff;stroke:var(--fg);stroke-width:2"/></svg>' + V.eq('✗ unequal parts: not ¼', 'r'))]),
      SC('Fractions of a group', 'Not just shapes', [
        st("Fractions can also be part of a group. Here are five balloons. Three of them are red.", V.dots(1, 5, 'var(--bad)', 3)),
        st("So three out of five balloons are red. Three fifths of the balloons are red.", BIG(F(3, 5, O) + '<span style="font-size:22px;color:var(--bad)">are red</span>'))]),
      SC('Fractions are everywhere', 'In real life', [
        st("We use fractions every day. Half a sandwich. A quarter of an hour. Three quarters of a cake.", V.row(LK.pie(1, 2, { r: 40 }) + LK.pie(1, 4, { r: 40, hue: 140 }) + LK.pie(3, 4, { r: 40, hue: 40 }))),
        st("Whenever something is shared or cut into equal parts, there are fractions.")]),
      SC('Your turn', 'Pause, think, then listen', [
        st("Your turn! This shape is cut into six equal parts. Two are shaded. What fraction is shaded? Pause and think.", LK.fbar(2, 6, 360)),
        st("Two out of six equal parts are shaded. That is two sixths.", BIG(F(2, 6, P) + '<span style="font-size:22px;color:var(--accent)">= two sixths</span>'))]),
      SC('Let’s recap', 'What is a fraction?', [
        st("Great work! A fraction is part of a whole. The whole must be cut into equal parts. A fraction can be part of a shape, or part of a group.",
          V.list(['A fraction is part of a whole', 'The parts must be equal', 'Part of a shape: 3 out of 8 squares', 'Part of a group: 3 out of 5 balloons', 'All the parts together make 1 whole']))])
    ]
  };

  /* ---------- How do you write fractions? ---------- */
  var write = {
    title: 'How do you write fractions?', goal: 'what the top and bottom numbers of a fraction mean, and how to say fractions.',
    scenes: [
      SC('How do you write fractions?', 'Two numbers and a line', [
        st("A fraction is written with two numbers, one on top of the other, with a line in between.", BIG(F(3, 5))),
        st("The line is called the fraction bar. It means out of. So this fraction means three out of five.", V.rule('The fraction bar means "out of".'))]),
      SC('The numerator', 'The top number', [
        st("The top number is called the numerator. It tells us how many parts we have.", LK.pair(BIG(F('<span style="color:var(--accent)">3</span>', 5)), V.eq('numerator', 'b') + V.note('how many parts we have'))),
        st("Here, three parts are shaded, so the numerator is three.", LK.fbar(3, 5, 300))]),
      SC('The denominator', 'The bottom number', [
        st("The bottom number is called the denominator. It tells us how many equal parts the whole is cut into.", LK.pair(BIG(F(3, '<span style="color:var(--bad)">5</span>')), V.eq('denominator', 'r') + V.note('equal parts in the whole'))),
        st("Here the bar has five equal parts, so the denominator is five. A trick to remember: D for denominator, D for down.", LK.fbar(3, 5, 300) + V.rule('D for Denominator, D for Down'))]),
      SC('Special names', 'How we say fractions', [
        st("Some fractions have special names. Two parts: halves. Three parts: thirds. Four parts: quarters.",
          V.row(V.card('½ half', 'b', true) + V.card('⅓ third', 'g', true) + V.card('¼ quarter', 'r', true))),
        st("After that, we usually add t h: fifths, sixths, eighths, tenths.", V.row(V.card('⅕ fifth', 'y', true) + V.card('⅛ eighth', 'b', true) + V.card('1/10 tenth', 'g', true))),
        st("To say a fraction, say the top number, then the name of the bottom number. Three fifths. Two thirds. Seven tenths.",
          V.row(BIG(F(3, 5)) + V.note('three fifths') + BIG(F(2, 3)) + V.note('two thirds') + BIG(F(7, 10)) + V.note('seven tenths')))]),
      SC('What fraction is shaded?', 'Count, then write', [
        st("What fraction of this bar is shaded? First count the shaded parts. There are four. That is the numerator.", LK.fbar(4, 7, 420) + V.eq('shaded parts: 4 → numerator', 'b')),
        st("Then count all the equal parts. There are seven. That is the denominator. So four sevenths are shaded.", V.eq('all parts: 7 → denominator', 'r') + BIG(F(4, 7, P) + '<span style="font-size:22px">= four sevenths</span>'))]),
      SC('Unit fractions', 'One part', [
        st("A fraction with one on top is called a unit fraction. It means just one part.", V.row(BIG(F(1, 2) + F(1, 3) + F(1, 4) + F(1, 10)))),
        st("Watch out: a bigger denominator means the whole is cut into more parts, so each part is smaller. One tenth is smaller than one half.", LK.fbar(1, 2, 300, 280, '½') + LK.fbar(1, 10, 300, 140, '1/10'))]),
      SC('Writing words as fractions', 'From words to numbers', [
        st("Five eighths: five on top, eight on the bottom.", BIG(F(5, 8))),
        st("When the top and bottom are the same, like four quarters, we have every part. That is one whole.", LK.fbar(4, 4, 300) + V.eq('4/4 = 1 whole', 'g'))]),
      SC('Your turn', 'Pause, think, then listen', [
        st("Your turn! Three parts out of ten are shaded. Write the fraction and say it. Pause and think.", LK.fbar(3, 10, 420)),
        st("Three on top, ten on the bottom. Three tenths.", BIG(F(3, 10, P) + '<span style="font-size:22px">= three tenths</span>'))]),
      SC('Let’s recap', 'How do you write fractions?', [
        st("Well done! The numerator, on top, is how many parts we have. The denominator, on the bottom, is how many equal parts are in the whole. The line means out of. To say a fraction, say the top number, then the name of the bottom number.",
          V.list(['Numerator (top) = parts we have', 'Denominator (bottom) = equal parts in the whole', 'The line means "out of"', 'Say it: three fifths, seven tenths', 'Same top and bottom = 1 whole']))])
    ]
  };

  /* ---------- How do you compare different fractions? ---------- */
  var compare = {
    title: 'How do you compare different fractions?', goal: 'how to tell which fraction is bigger.',
    scenes: [
      SC('How do you compare fractions?', 'Bigger, smaller or equal?', [
        st("Comparing fractions means finding out which one is bigger. We use three signs.", V.row(V.card('>', 'b') + V.card('<', 'g') + V.card('=', 'r'))),
        st("Greater than, less than, and equal to. The wide, open end of the sign always faces the bigger number.", V.row(V.note('> greater than') + V.note('< less than') + V.note('= equal to')) + BIG(F(1, 2) + '<span style="color:var(--accent)">&gt;</span>' + F(1, 4)))]),
      SC('Same denominator', 'Compare the numerators', [
        st("Which is bigger, three eighths or five eighths? Both are cut into eighths, so every piece is the same size.", LK.fbar(3, 8, 400, 280, '3/8') + LK.fbar(5, 8, 400, 280, '5/8')),
        st("When the denominators are the same, just compare the numerators. Five pieces is more than three pieces. So five eighths is bigger.", V.eq('5 > 3, so 5/8 > 3/8', 'g') + V.rule('Same denominator: bigger numerator = bigger fraction'))]),
      SC('Same numerator', 'Compare the denominators', [
        st("Which is bigger, one third or one fifth? Both have one piece. But how big is each piece?", LK.fbar(1, 3, 400, 280, '1/3') + LK.fbar(1, 5, 400, 280, '1/5')),
        st("A third is cut into three pieces. A fifth is cut into five pieces, so each piece is smaller. One third is bigger.", V.eq('1/3 > 1/5', 'g') + V.rule('Bigger denominator = smaller pieces'))]),
      SC('Compare with a half', 'A useful landmark', [
        st("Another trick is to compare with one half. Half of eight is four, so four eighths is one half.", LK.fbar(4, 8, 400, 140, '4/8 = ½')),
        st("Three eighths is less than a half. Five eighths is more than a half.", LK.fbar(3, 8, 400, 280, '3/8') + LK.fbar(5, 8, 400, 30, '5/8') + V.eq('3/8 < ½ < 5/8', 'b'))]),
      SC('Different denominators', 'Use bars of the same length', [
        st("Which is bigger, two thirds or three quarters? Draw two bars of the same length. Cut one into thirds and the other into quarters.", LK.fbar(2, 3, 420, 280, '2/3') + LK.fbar(3, 4, 420, 30, '3/4')),
        st("Line them up. The shaded part of three quarters goes further. So three quarters is bigger.", V.eq('3/4 > 2/3', 'g') + V.note('The bars must be the same length to compare fairly.'))]),
      SC('Equal fractions', 'Different numbers, same amount', [
        st("Sometimes two fractions are the same size. One half, two quarters and four eighths all cover exactly the same amount.", LK.fbar(1, 2, 400, 280, '1/2') + LK.fbar(2, 4, 400, 140, '2/4') + LK.fbar(4, 8, 400, 30, '4/8')),
        st("Fractions that are the same size are called equivalent fractions.", V.eq('1/2 = 2/4 = 4/8', 'b'))]),
      SC('Your turn', 'Pause, think, then listen', [
        st("Your turn! Which is bigger, two fifths or four fifths? Pause and think.", BIG(F(2, 5) + '<span>?</span>' + F(4, 5))),
        st("The denominators are the same, so compare the numerators. Four is more than two. Four fifths is bigger.", V.eq('4/5 > 2/5', 'g')),
        st("One more. Which is bigger, one quarter or one sixth?", BIG(F(1, 4) + '<span>?</span>' + F(1, 6))),
        st("The numerators are the same. Sixths are smaller pieces than quarters, so one quarter is bigger.", V.eq('1/4 > 1/6', 'g'))]),
      SC('Let’s recap', 'How do you compare different fractions?', [
        st("Brilliant! If the denominators are the same, compare the numerators. If the numerators are the same, the bigger denominator means smaller pieces. Use one half as a landmark, or draw bars of the same length.",
          V.list(['> greater than, < less than, = equal to', 'Same denominator: compare the numerators', 'Same numerator: bigger denominator = smaller', 'Compare with one half', 'Equal amounts are equivalent fractions']))])
    ]
  };

  BT.lessons(503, 'Watch lesson', [what, write, compare], ['Improper fractions and mixed numbers', 'Counting parts and fractions as decimals']);
})();
