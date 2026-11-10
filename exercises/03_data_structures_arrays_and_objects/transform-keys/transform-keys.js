// Exercise: transform-keys
// Function that recursively transforms all keys of an object (and nested objects) using transformFn
function transformKeys(obj, transformFn) {
  // If obj is not a plain object (e.g., primitive, null, or array), return it as-is
  if (!obj || typeof obj !== "object" || Array.isArray(obj)) return obj;
  // Convert object to [key, value] entries, transform each key with transformFn(k) and recursively transform nested values,
  // then convert the entries back into a new object with Object.fromEntries()
  return Object.fromEntries(
    Object.entries(obj).map(([k, v]) => [transformFn(k), transformKeys(v, transformFn)])
  );
}
