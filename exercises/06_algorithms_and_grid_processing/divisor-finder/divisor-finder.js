// Exercise: divisor-finder
// Function that finds all positive proper divisors of an integer n (excluding n itself)
function divisors(n) {
  // Create an empty array to hold the divisors
  const res = [];
  // Loop from 1 up to (but not including) the absolute value of n (Math.abs handles negative numbers)
  for (let i = 1; i < Math.abs(n); i++) {
    // The modulo operator (%) gives the remainder of division; if remainder is 0, i divides n evenly
    if (n % i === 0) res.push(i);
  }
  // Return the list of divisors
  return res;
}
