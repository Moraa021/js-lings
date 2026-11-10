// Exercise: perfect-num
// Function that checks if a number n is a "perfect number" (equal to the sum of its proper positive divisors)
function isPerfectNum(n) {
  // Numbers <= 1 cannot be perfect numbers
  if (n <= 1) return false;
  // Initialize sum of divisors to 0
  let sum = 0;
  // Loop through all numbers from 1 up to n - 1
  for (let i = 1; i < n; i++) {
    // If i divides n evenly (remainder is 0), add i to sum
    if (n % i === 0) sum += i;
  }
  // Return true if the sum of proper divisors equals n, otherwise false
  return sum === n;
}
