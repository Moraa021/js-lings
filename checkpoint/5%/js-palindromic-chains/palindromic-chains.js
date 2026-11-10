// Exercise: palindromic-chains
// Function that repeatedly adds each number to its digit-reversed value until it becomes a palindrome (max 100 tries)
function palindromicChain(numbers) {
  // Helper to reverse the digits of a number: convert to string, split into chars, reverse, join, and convert back to Number
  const rev = (n) => Number(String(n).split("").reverse().join(""));
  // Transform each input number n into its resulting palindrome (or 0 if not found within 100 attempts)
  return numbers.map((n) => {
    // Loop up to 100 attempts
    for (let i = 0; i <= 100; i++) {
      // Check if n is already a palindrome (equals its own reverse)
      if (n === rev(n)) return n;
      // If we have not reached 100 additions yet, add the reverse of n to n
      if (i < 100) n += rev(n);
    }
    // If 100 attempts were made and it is still not a palindrome, return 0
    return 0;
  });
}
