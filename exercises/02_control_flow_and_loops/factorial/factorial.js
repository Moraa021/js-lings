// Exercise: factorial
// Function that calculates the factorial of n (n! = n * (n - 1) * ... * 1)
function factorial(n) {
  // Base case: if n is 0 or 1, its factorial is 1.
  // Recursive step: multiply n by the factorial of (n - 1).
  return n <= 1 ? 1 : n * factorial(n - 1);
}
