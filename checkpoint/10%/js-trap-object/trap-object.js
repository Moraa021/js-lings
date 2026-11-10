// Exercise: trap-object
// Function that wraps an object in a Proxy and logs every property "get" and "set" operation via fn
function trapObject(obj, fn) {
  // Create a Proxy around obj to intercept property reads (get) and writes (set)
  return new Proxy(obj, {
    // Intercept reading a property (e.g., obj.name)
    get(target, key) {
      // Call the logger fn with action "get", the key, current value, and undefined for newValue
      fn("get", key, target[key], undefined);
      // Return the actual property value from the target object
      return target[key];
    },
    // Intercept setting a property (e.g., obj.age = 30)
    set(target, key, newValue) {
      // Call the logger fn with action "set", the key, old value (target[key]), and the newValue
      fn("set", key, target[key], newValue);
      // Update the property on the target object
      target[key] = newValue;
      // Return true to indicate that the property assignment succeeded
      return true;
    },
  });
}
