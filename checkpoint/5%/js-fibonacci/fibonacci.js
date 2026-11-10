// Exercise: fibonacci
// Function that returns the nth number in the Fibonacci sequence (0, 1, 1, 2, 3, 5, 8, ...)
function fibonacci(n) {
  // Start with the first two Fibonacci numbers: a = 0 (fib(0)) and b = 1 (fib(1))
  let a = 0, b = 1;
  // Repeat n times: advance a to b, and b to the sum of old a + b
  while (n-- > 0) [a, b] = [b, a + b];
  // Return a, which now holds the nth Fibonacci number
  return a;
}
