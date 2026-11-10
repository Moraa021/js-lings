// Exercise: deep-freeze
// Function that recursively freezes an object and all of its nested objects/arrays
function deepFreeze(obj) {
  // Freeze the current object/array so its properties cannot be added, removed, or changed
  Object.freeze(obj);
  // Loop over all property values; if a value is an object (and not null), recursively freeze it too
  Object.values(obj).forEach((v) => v && typeof v === "object" && deepFreeze(v));
  // Return the frozen object
  return obj;
}
