function celsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    console.log(`${celsius}°C is ${fahrenheit}°F`);
}

function fahrenheitToCelsius(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5/9;
    console.log(`${fahrenheit}°F is ${celsius}°C`);
}

// Example usage:
let celsiusTemp = 30;
celsiusToFahrenheit(celsiusTemp);

let fahrenheitTemp = 86;
fahrenheitToCelsius(fahrenheitTemp);
