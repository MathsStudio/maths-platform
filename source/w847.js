(function () { var BT = window.BT; if (!BT || !BT.W3) return; var W = BT.W3, F = BT.F;
W('How do you find the gradient of a line from two points?', [
 [['Rise: 8 − 2 = 6', F.grid([[0,2,'(0, 2)'],[3,8,'(3, 8)',1]],[[0,2,3,2,0,1],[3,2,3,8,1],[0,2,3,8]])], 'Run: 3 − 0 = 3', 'Gradient = 6 ÷ 3 = 2'],
 [['Rise: 2 − 5 = −3', F.grid([[1,5,'(1, 5)'],[4,2,'(4, 2)',1]],[[1,5,4,5,0,1],[4,5,4,2,1],[1,5,4,2]])], 'Run: 4 − 1 = 3', 'Gradient = −3 ÷ 3 = −1'],
 ['Horizontal line: rise = 0', 'Gradient = 0 ÷ run = 0']]);
W('Gradient and straight lines', [
 ['Falls 8: rise = −8', 'Run = 2', 'Gradient = −8 ÷ 2 = −4']]);
W('How do you read y = mx + c from a graph and from real life?', [
 ['y = mx + c', 'm = 5 (the number of x)', 'c = −2 (the number on its own)'],
 ['m = ½ and c = 4', 'y = mx + c', 'y = ½x + 4'],
 ['2y = 8x + 6', 'Divide everything by 2', 'y = 4x + 3', 'Gradient m = 4']]);
W('How do you find the equation of a line from a point and a gradient, or from two points?', [
 ['y = 2x + c', 'Point (1, 5): 5 = 2 × 1 + c', '5 = 2 + c', 'c = 5 − 2 = 3'],
 [['Points (0, 1) and (2, 7)', F.grid([[0,1,'(0, 1)'],[2,7,'(2, 7)',1]],[[0,1,2,1,0,1],[2,1,2,7,1],[0,1,2,7]])], 'Gradient: (7 − 1) ÷ (2 − 0) = 6 ÷ 2 = 3', 'c = 1 (y when x = 0)', 'y = 3x + 1'],
 ['y = 3x + 1 with x = 2', '3 × 2 = 6', '6 + 1 = 7', 'y = 7 matches the point ✓']]);
W('How do you draw a straight line graph from a table of values?', [
 ['y = 2x − 1 with x = 3', '2 × 3 = 6', '6 − 1 = 5'],
 ['y = x + 4 with x = −2', '−2 + 4 = 2'],
 ['It crosses the y axis when x = 0', 'y = 3 × 0 − 2', 'y = −2']]);
W('Parallel and perpendicular lines', [
 ['Gradient = −3 = −3/1', 'Reciprocal: 1/3', 'Change the sign: +1/3'],
 ['y = 4x − 1 has gradient 4', 'y = 4x + 6 has gradient 4', 'Same gradient, so parallel'],
 ['Parallel: gradient 5, so y = 5x + c', 'Point (1, 9): 9 = 5 × 1 + c', 'c = 9 − 5 = 4', 'y = 5x + 4']]);
W('Lines in the form ax + by = c', [
 ['y-axis: x = 0', '5 × 0 + 2y = 20', '2y = 20', 'y = 10'],
 ['x-axis: y = 0', '5x + 2 × 0 = 20', '5x = 20', 'x = 4'],
 ['x + y = 7', 'Subtract x: y = 7 − x', 'y = −x + 7', 'Gradient m = −1']]);
W('How do you find the midpoint and length of a line segment?', [
 [['x: (0 + 6) ÷ 2 = 3', F.grid([[0,4,'A'],[6,10,'B'],[3,7,'M',1]],[[0,4,6,10]])], 'y: (4 + 10) ÷ 2 = 7']]);
})();
