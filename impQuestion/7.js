function calcCircumference(radius) {
    let circumference = 2 * Math.PI * radius;
    console.log(`The circumference is ${circumference}`);
}

function calcArea(radius) {
    let area = Math.PI * radius * radius;
    console.log(`The area is ${area}`);
}

// Example usage:
let radius = 5;
calcCircumference(radius);
calcArea(radius);
