(function () { var BT = window.BT; if (!BT || !BT.W3) return; var W = BT.W3, F = BT.F;
W('What are simultaneous equations and what does the solution mean?', [
 ['x + y: 4 + 1 = 5 ✓', 'x − y: 4 − 1 = 3 ✓', 'Both are true, so yes'],
 ['Try x = 5 and y = 3', 'x + y = 5 + 3 = 8 ✓', 'x − y = 5 − 3 = 2 ✓'],
 [['x = 2 and y = 7', F.grid([[2,7,'(2, 7)',1]],[[0,3,4,11],[0,9,4,5]])], 'The graphs meet at (x, y) = (2, 7)']]);
W('Solving by graph', [
 [['y = 2x and y = x + 3', F.grid([[3,6,'(3, 6)',1]],[[0,0,4,8],[0,3,5,8]])], 'Same y: 2x = x + 3', 'Subtract x: x = 3', 'y = 2 × 3 = 6'],
 [['y = x + 2 has gradient 1', F.grid([],[[0,2,4,6],[0,-1,4,3]])], 'y = x − 1 has gradient 1', 'Parallel lines never meet'],
 [['They cross at (2, 5)', F.grid([[2,5,'(2, 5)',1]],[[0,1,4,9],[0,7,4,3]])], 'x = 2 and y = 5']]);
W('How do you solve simultaneous equations by substitution?', [
 ['Put y = x + 3 into x + y = 9', 'x + (x + 3) = 9', '2x + 3 = 9, so 2x = 6', 'x = 3', 'y = 3 + 3 = 6'],
 ['Put x = 2y into x + y = 12', '2y + y = 12', '3y = 12', 'y = 4', 'x = 2 × 4 = 8'],
 ['Both equal y: 3x − 1 = x + 5', 'Subtract x: 2x − 1 = 5', 'Add 1: 2x = 6, so x = 3', 'y = 3 + 5 = 8']]);
W('Solving by elimination', [
 ['x + y = 10 and x − y = 4', 'Add: 2x = 14', 'x = 7', '7 + y = 10, so y = 3'],
 ['2x + y = 9 and x + y = 5', 'Subtract: x = 4', '4 + y = 5, so y = 1'],
 ['x + 2y = 8 and 3x − 2y = 4', 'Different signs on y: add', '4x = 12, so x = 3', '3 + 2y = 8, so 2y = 5', 'y = 2.5']]);
W('Simultaneous equations', [
 ['x + y = 22 and x − y = 4', 'Add: 2x = 26', 'x = 13', '13 + y = 22, so y = 9'],
 ['p + n = 100 and 2p + n = 160', 'Subtract: p = 60', '60 + n = 100', 'n = 40'],
 ['One equation: many pairs fit', 'x + y = 5: (1, 4), (2, 3), (3, 2) ...', 'A second equation picks one pair']]);
})();
