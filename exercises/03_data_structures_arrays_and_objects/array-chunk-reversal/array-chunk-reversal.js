// Exercise: array-chunk-reversal
// Function that takes an array (arr) and a chunk size (chunkSize)
function reverseChunks(arr, chunkSize) {
  // Create a new empty array to store our final result
  const res = [];
  // Loop through the input array, jumping forward by chunkSize each time (0, chunkSize, 2 * chunkSize, ...)
  for (let i = 0; i < arr.length; i += chunkSize) {
    // 1. arr.slice(i, i + chunkSize) cuts out a piece (chunk) of the array from index i up to i + chunkSize
    // 2. .reverse() reverses the order of elements inside that chunk
    // 3. res.push(...chunk) unpacks the reversed chunk and adds each item to the result array
    res.push(...arr.slice(i, i + chunkSize).reverse());
  }
  // Return the final array with all chunks reversed
  return res;
}
