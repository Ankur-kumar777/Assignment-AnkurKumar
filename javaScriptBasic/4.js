function calculateTriangleArea(a, b, c) {
    let s = (a + b + c) / 2;
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area;
}

let a = 5, b = 6, c = 7;
let area = calculateTriangleArea(a, b, c);
console.log("The area of the triangle is: " + area);
