// Define the calculateAge function
function calculateAge(birthYear, currentYear) {
    const age1 = currentYear - birthYear;
    const age2 = age1 - 1;
    console.log(`You are either ${age1} or ${age2}`);
  }
  
  // Get the current year in JavaScript
  const currentYear = new Date().getFullYear();
  
  // Call the function 3 times with different values
  calculateAge(1990, currentYear);
  calculateAge(1985, currentYear);
  calculateAge(2000, currentYear);
  