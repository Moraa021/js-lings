// Exercise: character-maker
// Helper function to deeply merge two objects (target a and source b)
const merge = (a, b) => {
  // Start with a shallow copy of object a
  const res = { ...a };
  // Loop through every [key, value] pair in object b
  for (const [k, v] of Object.entries(b)) {
    // If the new value is a plain object (not null and not an array) and the existing value is also an object,
    // recursively merge them together; otherwise, overwrite with the new value v
    res[k] = v && typeof v === "object" && !Array.isArray(v) ? merge(res[k] || {}, v) : v;
  }
  // Return the newly merged object
  return res;
};

// Main function that creates a curried character builder starting from initialCharacter
function createCurriedCharacterCreator(initialCharacter) {
  // Return a function that accepts any number of arguments (...args)
  return (...args) =>
    // If no arguments were passed to this call, finalize and return the current character object
    args.length === 0
      ? initialCharacter
      // Otherwise, process all passed arguments one by one using .reduce() and return a new curried creator
      : createCurriedCharacterCreator(
          args.reduce(
            // If the argument (arg) is a function, call it with the current character (char);
            // if it is an object, deeply merge it into the current character
            (char, arg) => (typeof arg === "function" ? arg(char) : merge(char, arg)),
            initialCharacter
          )
        );
}
