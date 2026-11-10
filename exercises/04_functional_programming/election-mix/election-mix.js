// Exercise: election-mix
// Function that returns a curried function to filter an object by criteria and transform its values with mapper
function createCurriedFilterAndMap(criteria, mapper) {
  // Return a new function that accepts the target object (obj)
  return (obj) => {
    // Create an empty object for keys that pass the filter, and counters for kept vs filtered-out keys
    const filteredObject = {};
    let keysKept = 0, keysFilteredOut = 0;
    // Object.entries(obj) converts { key: val } into an array of [key, val] pairs so we can loop over them
    for (const [k, v] of Object.entries(obj)) {
      // Check if the current key and value pass the criteria function
      if (criteria(k, v)) {
        // Transform the value using mapper(v) and save it in filteredObject
        filteredObject[k] = mapper(v);
        // Increment the counter for kept keys
        keysKept++;
      } else {
        // Increment the counter for keys that did not pass the filter
        keysFilteredOut++;
      }
    }
    // Return the result summary object
    return { filteredObject, keysKept, keysFilteredOut };
  };
}
