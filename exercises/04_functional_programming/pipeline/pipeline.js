// Exercise: pipeline
// Function that passes an initialValue through a sequence of functions and records every step
function pipeline(initialValue, functions) {
  // Array to store the history of each step { index, input, output }
  const steps = [];
  // Use .reduce() to pass the running value (val) through each function (fn) at index (index)
  const finalValue = functions.reduce((val, fn, index) => {
    // Compute the output of calling the current function with the current value
    const output = fn(val);
    // Record the step index, input value, and output value
    steps.push({ index, input: val, output });
    // Return output so it becomes the input (val) for the next function in the pipeline
    return output;
  }, initialValue);
  // Return both the final computed value and the array of recorded steps
  return { finalValue, steps };
}
