// Exercise: final-attempt
// Function that wraps an async callback and retries it up to count times before failing
function FinalAttempt(callback, count) {
  // Return an async function that takes any arguments (...args) to forward to callback
  return async (...args) => {
    // Loop from 0 up to count (giving the callback count total attempts)
    for (let i = 0; i < count; i++) {
      try {
        // Try executing and awaiting the callback with the given arguments; if it succeeds, return the result immediately
        return await callback(...args);
      } catch {
        // If an error is thrown, ignore it and let the loop continue to the next retry attempt
      }
    }
    // If all attempts failed without returning, return "Final Attempt Fail"
    return "Final Attempt Fail";
  };
}
