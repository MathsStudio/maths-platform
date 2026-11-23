(function () { var BT = window.BT; if (!BT || !BT.W3) return; var W = BT.W3, F = BT.F;
W('What is symmetry in 2D shapes?', [
 ['Equilateral triangle: 3 equal sides', '3 lines of symmetry', 'Order of rotational symmetry: 3'],
 ['A rhombus fits after a half turn (180°)', '360 ÷ 180 = 2', 'Order 2'],
 ['Regular pentagon: 5 sides', '5 lines of symmetry', 'Order 5']]);
W('How do you reflect shapes and decide whether shapes are congruent?', [
 [['Reflect in the x-axis: y changes sign', F.grid([[4,2,'(4, 2)'],[4,-2,'(4, −2)',1]],[[4,2,4,-2,0,1]])], '(4, 2) → (4, −2)'],
 [['Reflect in y = x: swap x and y', F.grid([[2,5,'(2, 5)'],[5,2,'(5, 2)',1]],[[0,0,6,6,0,1],[2,5,5,2,0,1]])], '(2, 5) → (5, 2)'],
 ['P: 3, 4, 5', 'Q: 3, 4, 5', 'All 3 sides equal: SSS, so congruent']]);
W('How do you carry out combined transformations?', [
 [['(3, 5) + (−1, 2)', F.grid([[3,5,'(3, 5)'],[2,7,'(2, 7)',1]],[[3,5,2,7,1]])], 'x: 3 + (−1) = 2', 'y: 5 + 2 = 7', '(2, 7)'],
 ['90° clockwise: (x, y) → (y, −x)', '(2, 1) → (1, −2)'],
 [['Scale factor ½: halve each coordinate', F.grid([[4,6,'(4, 6)'],[2,3,'(2, 3)',1]],[[0,0,4,6,0,1]])], '4 × ½ = 2', '6 × ½ = 3', '(2, 3)']]);
W('Vectors as journeys', [
 ['(2, −3) + (−5, 1)', 'x: 2 + (−5) = −3', 'y: −3 + 1 = −2', '(−3, −2)'],
 ['3 × (2, −1)', '3 × 2 = 6', '3 × (−1) = −3', '(6, −3)'],
 ['x = −4: 4 left', 'y = 2: 2 up']]);
W('The magnitude of a vector', [
 [['|(5, 12)| = √(5² + 12²)', F.rt({a:'12', b:'5', c:'?', hi:'c', ratio:2.4})], '25 + 144 = 169', '√169 = 13'],
 ['|(−8, 6)| = √((−8)² + 6²)', '64 + 36 = 100', '√100 = 10'],
 [['Across 9, up 12', F.rt({a:'12', b:'9', c:'d', hi:'c', ratio:1.33})], 'd = √(9² + 12²)', '81 + 144 = 225', '√225 = 15']]);
W('How do linear, quadratic and exponential patterns grow?', [
 ['9 − 4 = 5', '14 − 9 = 5', '19 − 14 = 5', 'Same difference each time: linear'],
 ['3 ÷ 1 = 3', '9 ÷ 3 = 3', '27 ÷ 9 = 3', 'Next term: 27 × 3 = 81'],
 ['First differences: 4, 6, 8', 'Second differences: 2, 2', 'Constant second difference: quadratic']]);
W('How do you work with nets, views and stacks of cubes?', [
 ['A cube has 6 faces', 'Each face is 1 square', 'Its net has 6 squares'],
 ['Add the numbers in the plan view', '2 + 3 + 1 + 1 = 7'],
 ['Cube 3 × 3 × 3', 'One face painted: the middle of each face', '6 faces × 1 = 6']]);
W('Painted cubes and stacks', [
 ['Sides: 4 cubes × 4 sides = 16', 'Top: 1 face', '16 + 1 = 17']]);
W('How do you solve ordering and logic puzzles?', [
 ['P is older than Q', 'Q is older than R', 'So P, then Q, then R: R is the youngest'],
 ['3, 5 and 7 are prime', '9 = 3 × 3 is not prime', 'The odd one out is 9'],
 ['All birds have feathers', 'A penguin is a bird', 'So a penguin has feathers']]);
})();
