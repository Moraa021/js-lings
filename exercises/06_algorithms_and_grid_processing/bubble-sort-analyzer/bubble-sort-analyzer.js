// Exercise: bubble-sort-analyzer
// Function that sorts an array using Bubble Sort and counts iterations & swaps
function bubbleSortAnalyzer(arr, comparator) {
  // Make a shallow copy of the array using spread syntax [...arr] so we do not mutate the original array
  const sortedArray = [...arr];
  // Initialize counters for the number of comparisons (iterations) and element swaps
  let iterations = 0, swaps = 0;
  // Outer loop: controls the number of passes through the array
  for (let i = 0; i < sortedArray.length - 1; i++) {
    // Inner loop: compares adjacent elements; after each pass i, the last i elements are already in place
    for (let j = 0; j < sortedArray.length - 1 - i; j++) {
      // Count every comparison step as 1 iteration
      iterations++;
      // Use the comparator function: if > 0, the left element is considered greater than the right element
      if (comparator(sortedArray[j], sortedArray[j + 1]) > 0) {
        // Swap the two adjacent elements using array destructuring assignment
        [sortedArray[j], sortedArray[j + 1]] = [sortedArray[j + 1], sortedArray[j]];
        // Increment the swap counter
        swaps++;
      }
    }
  }
  // Return an object containing the sorted array, total iterations, and total swaps
  return { sortedArray, iterations, swaps };
}
