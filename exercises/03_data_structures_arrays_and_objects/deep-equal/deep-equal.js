// Exercise: deep-equal
// Function that recursively checks if two values, arrays, or objects are deeply equal
function deepEqual(obj1, obj2) {
  // If both values are strictly equal (e.g., 1 === 1, "a" === "a", or same object reference), return true
  if (obj1 === obj2) return true;
  // If either is null, or not an object, or one is an Array and the other is not, they are not equal
  if (
    obj1 === null || obj2 === null ||
    typeof obj1 !== "object" || typeof obj2 !== "object" ||
    Array.isArray(obj1) !== Array.isArray(obj2)
  ) return false;
  // Get the list of own property keys for both objects
  const keys1 = Object.keys(obj1), keys2 = Object.keys(obj2);
  // If they have a different number of keys, they cannot be equal
  if (keys1.length !== keys2.length) return false;
  // Check that every key in obj1 also exists in obj2 and their values are deeply equal
  return keys1.every((k) => Object.prototype.hasOwnProperty.call(obj2, k) && deepEqual(obj1[k], obj2[k]));
}
