// Exercise: object-lab
// Function that merges an array of objects (tracking added/overwritten keys) and applies transform functions
function mergeAndTransform(objects, transforms) {
  // Start with a shallow copy of the first object as our base merged object
  let finalObject = { ...objects[0] };
  // Initialize counters for keys added after objects[0] and keys overwritten
  let keysAdded = 0, keysOverwritten = 0;
  // Loop through the remaining objects starting from index 1
  for (const obj of objects.slice(1)) {
    // Loop through each [key, value] pair of the current object
    for (const [k, v] of Object.entries(obj)) {
      // If the key already exists in finalObject, increment keysOverwritten; otherwise increment keysAdded
      k in finalObject ? keysOverwritten++ : keysAdded++;
      // Set or overwrite the key with the new value
      finalObject[k] = v;
    }
  }
  // Apply each transformation function in sequence using .reduce()
  finalObject = transforms.reduce((acc, fn) => fn(acc), finalObject);
  // Return the final transformed object and all statistics
  return {
    finalObject,
    transformationsCount: transforms.length,
    keysAdded,
    keysOverwritten,
  };
}
