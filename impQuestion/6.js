// Define the calculateSupply function
function calculateSupply(age, amountPerDay) {
    const maxAge = 100; // Define a constant for the maximum age
    const yearsRemaining = maxAge - age;
    const amountPerYear = amountPerDay * 365.25; // Using 365.25 to account for leap years
    const totalAmount = Math.round(amountPerYear * yearsRemaining);
  
    console.log(`You will need ${totalAmount} to last you until the ripe old age of ${maxAge}`);
  }
  
  // Call the function 3 times with different values
  calculateSupply(25, 2.5);
  calculateSupply(40, 1.75);
  calculateSupply(60, 3.2);
  