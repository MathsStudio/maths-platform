(function () { var BT = window.BT; if (!BT || !BT.W3) return; var W = BT.W3, F = BT.F;
W('What are the properties of 3D objects?', [
 ['Euler: F + V − E = 2', '8 + 12 − E = 2', '20 − E = 2', 'E = 20 − 2 = 18'],
 ['Base: 1 square', 'Sides: 4 triangles', '1 + 4 = 5 faces'],
 ['Cut across a cylinder', 'The cut goes through a circle', 'Cross-section: circle']]);
W('How do you find the area and perimeter of compound shapes, including semicircles and trapezia?', [
 [['Area = ½(a + b) × h', F.trap('4','8','5')], '½ × (4 + 8) = ½ × 12 = 6', '6 × 5 = 30'],
 [['Radius = 8 ÷ 2 = 4', F.semiarea('8')], 'Circle area: π × 4² = 16π', 'Half: 16π ÷ 2 = 8π', '8π = 25.1 (1 d.p.)'],
 [['Rectangle 1: 7 × 2 = 14', F.lshape('7 × 2','4 × 3')], 'Rectangle 2: 4 × 3 = 12', '14 + 12 = 26']]);
W('How do you find the volume of prisms and cylinders?', [
 [['Volume = length × width × height', F.solid('cuboid',{l:'4',w:'5',h:'6'})], '4 × 5 = 20', '20 × 6 = 120'],
 [['Volume = π r² h', F.solid('cyl',{r:'2',h:'7',top:1})], 'π × 2² × 7 = π × 4 × 7', '= 28π', '28π = 87.8 (1 d.p.)'],
 ['Volume = area of end × length', '8 × 9 = 72']]);
W('How do you find the surface area of a cylinder and other solids?', [
 ['One face: 5 × 5 = 25', '6 faces: 6 × 25 = 150'],
 [['Curved area = 2π r h', F.solid('cyl',{r:'2',h:'5',hiH:1})], '2π × 2 × 5 = 20π', '20π = 62.8 (1 d.p.)'],
 ['Unroll the curved surface', 'It flattens to a rectangle']]);
W('Volume of cones and spheres', [
 [['Cone: V = ⅓ π r² h', F.solid('cone',{r:'5',h:'12'})], 'r² = 5 × 5 = 25', '25 × 12 = 300', '⅓ × 300 = 100, so 100π'],
 [['Sphere: V = ⁴⁄₃ π r³', F.solid('sphere',{r:'3'})], 'r³ = 3 × 3 × 3 = 27', '⁴⁄₃ × 27 = 36', 'So 36π'],
 ['Pyramid: V = ⅓ × base × height', '40 × 9 = 360', '⅓ × 360 = 120']]);
W('Surface area of cones and spheres', [
 [['Sphere: A = 4π r²', F.solid('sphere',{r:'2'})], 'r² = 2 × 2 = 4', '4 × 4 = 16, so 16π', '16π = 50.3 (1 d.p.)'],
 [['Cone curved area = π r l', F.solid('cone',{r:'5',l:'13',hiL:1})], 'π × 5 × 13 = 65π', '65π = 204 cm² (3 s.f.)'],
 [['Pythagoras: l² = r² + h²', F.rt({a:'12', b:'5', c:'l', hi:'c', ratio:2.4})], 'l² = 5² + 12² = 25 + 144 = 169', 'l = √169 = 13']]);
W('How do you find the volume and surface area of compound solids?', [
 ['Add the two volumes', '60 + 20 = 80'],
 [['Hemisphere = half a sphere', F.solid('sphere',{r:'3'})], '½ × ⁴⁄₃ π r³ = ⅔ π r³', '⅔ × π × 27 = 18π', '18π = 56.5 (1 d.p.)'],
 ['Where they join, the circle is hidden', 'It is not on the outside', 'So it is not counted']]);
W('How do you convert units of area and volume?', [
 ['1 m = 100 cm, so 1 m² = 100 × 100 cm²', '1 m² = 10,000 cm²', '2 × 10,000 = 20,000 cm²'],
 ['1 cm = 10 mm, so 1 cm² = 100 mm²', 'Divide by 100', '300 ÷ 100 = 3 cm²'],
 ['1 litre = 1,000 cm³', '5,000 ÷ 1,000 = 5 litres']]);
W('How do you work backwards from a volume or area to find a missing length?', [
 ['V = l × w × h', '60 = 5 × 3 × h', '60 = 15 × h', 'h = 60 ÷ 15 = 4'],
 ['A = π r²', '28.3 = 3.14 × r²', 'r² = 28.3 ÷ 3.14 = 9.01', 'r² ≈ 9'],
 ['r² = 9', 'r = √9 = 3']]);
W('Circles, similarity and solids', [
 ['Volume scale factor = (length scale factor)³', '3³ = 3 × 3 × 3 = 27']]);
})();
