// Exercise: deep-find
// Function that retrieves a deeply nested value from an object using a dot-separated path string
function deepFind(obj, path) {
  // Split the path by "." into an array of keys, then use .reduce() to step deeper into the object one key at a time
  // Optional chaining (acc?.[key]) safely returns undefined if an intermediate property does not exist
  return path.split(".").reduce((acc, key) => acc?.[key], obj);
}
