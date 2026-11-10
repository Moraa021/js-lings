// Exercise: swappable-object
// Function that wraps an object in a Proxy so looking up a key returns its value, and looking up a value returns its key
function swappableObject(obj) {
  // Create and return a new Proxy around obj with a custom "get" trap (intercepts property reads like obj.x)
  return new Proxy(obj, {
    // target is the original object, prop is the property name being accessed
    get: (target, prop) =>
      // If prop exists as a key in target, return target[prop];
      // otherwise search Object.entries(target) for a pair whose value equals prop, and return its key ([0])
      prop in target ? target[prop] : Object.entries(target).find(([, v]) => v === prop)?.[0],
  });
}
