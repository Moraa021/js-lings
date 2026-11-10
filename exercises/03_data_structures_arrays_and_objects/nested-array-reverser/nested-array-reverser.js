// Exercise: nested-array-reverser
// Function that reverses the order of inner arrays, reverses words in each inner array, and joins them with spaces
function nestedArrayReverser(words) {
  // 1. [...words].reverse() copies and reverses the outer array
  // 2. .flatMap(arr => [...arr].reverse()) reverses each inner array and flattens all words into a single 1D array
  // 3. .join(" ") joins all the words into a single space-separated string
  return [...words].reverse().flatMap((arr) => [...arr].reverse()).join(" ");
}
