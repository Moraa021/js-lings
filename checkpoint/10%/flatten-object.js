// Exercise: flatten-object
// Function that flattens any nested object or array into a single-level object with dot-separated keys
function flattenObject(obj, prefix = "", res = {}) {
  // Loop through every [key, value] pair (for arrays, Object.entries gives ["0", val], ["1", val], etc.)
  for (const [k, v] of Object.entries(obj)) {
    // Construct the full key path using a dot if prefix is not empty
    const key = prefix ? `${prefix}.${k}` : k;
    // If value v is a non-null object or array, recursively flatten it into the same result object (res)
    if (v && typeof v === "object") flattenObject(v, key, res);
    // Otherwise, it is a primitive value, so store it directly at the flattened key path
    else res[key] = v;
  }
  // Return the single-level flattened object
  return res;
}
