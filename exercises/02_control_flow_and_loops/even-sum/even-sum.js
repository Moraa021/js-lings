// Exercise: even-sum
// Function that calculates the sum of all even numbers from 0 up to n (inclusive)
function evenSum(n) {
  // Initialize the running total to 0
  let sum = 0;
  // Start at 0 and loop up to n, adding 2 to i each step so we only visit even numbers (0, 2, 4, ...)
  for (let i = 0; i <= n; i += 2) sum += i;
  // Return the final sum
  return sum;
}
