// Exercise: insertion-sort-analyzer
// Function that sorts an array using Insertion Sort and tracks iterations & swaps
function insertionSortAnalyzer(arr, comparator) {
  // Clone the input array so we do not modify the original
  const sortedArray = [...arr];
  // Initialize counters for iterations and swaps
  let iterations = 0, swaps = 0;
  // Loop from the second element (index 1) to the end of the array
  for (let i = 1; i < sortedArray.length; i++) {
    // Start at the current index i and move left (j--) to insert the element into its sorted position
    for (let j = i; j > 0; j--) {
      // Count this comparison step as an iteration
      iterations++;
      // If the element to the left (j - 1) is greater than the current element (j) according to comparator
      if (comparator(sortedArray[j - 1], sortedArray[j]) > 0) {
        // Swap the two elements
        [sortedArray[j - 1], sortedArray[j]] = [sortedArray[j], sortedArray[j - 1]];
        // Increment the swap counter
        swaps++;
      } else {
        // Since the left side is already sorted, we can stop moving left as soon as it is in order
        break;
      }
    }
  }
  // Return the sorted array along with the iteration and swap counts
  return { sortedArray, iterations, swaps };
}
