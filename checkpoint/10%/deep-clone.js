// Exercise: deep-clone
// Function that creates a deep copy of any value/object/array, handling circular references with a WeakMap
function deepClone(obj, seen = new WeakMap()) {
  // Base case: if obj is null or a primitive (number, string, boolean, undefined, function), return it directly
  if (obj === null || typeof obj !== "object") return obj;
  // Circular reference check: if we have already cloned this object, return the stored clone
  if (seen.has(obj)) return seen.get(obj);
  // Create a new empty Array if obj is an array, or a new empty Object {} otherwise
  const clone = Array.isArray(obj) ? [] : {};
  // Save the new clone in our WeakMap BEFORE recursing so circular references point to this clone
  seen.set(obj, clone);
  // Recursively clone every property/element and assign it to the clone
  for (const [k, v] of Object.entries(obj)) clone[k] = deepClone(v, seen);
  // Return the finished deep clone
  return clone;
}
