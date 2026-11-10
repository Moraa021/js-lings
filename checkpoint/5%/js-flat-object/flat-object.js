// Exercise: flat-object
// Function that flattens a nested object into dot-separated keys and maps its leaf/array values
function flattenAndMap(obj, mapper) {
  // Store the flattened result object and count how many leaf keys we process
  const flattened = {};
  let count = 0;
  // Helper function that recursively walks the current object (cur) building the dot-separated key path (prefix)
  const walk = (cur, prefix = "") => {
    // Loop over each [key, value] in the current object
    for (const [k, v] of Object.entries(cur)) {
      // Build the dot-notation path (e.g., "user" + "." + "name" -> "user.name")
      const path = prefix ? `${prefix}.${k}` : k;
      // If value v is a nested plain object (not null and not an array), keep walking deeper
      if (v && typeof v === "object" && !Array.isArray(v)) {
        walk(v, path);
      } else {
        // It is a primitive or an array: increment the key counter
        count++;
        // If v is an array, apply mapper to every item inside the array; otherwise apply mapper directly to v
        flattened[path] = Array.isArray(v) ? v.map(mapper) : mapper(v);
      }
    }
  };
  // Start walking from the root object
  walk(obj);
  // Return the flattened object and the counts
  return { flattened, originalKeysCount: count, transformedKeysCount: count };
}
