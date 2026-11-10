// Exercise: exam-grader
// Async function that runs exercise promises in sequence and sums their notes within the timeout
async function examGrader(timeout, exercises) {
  // Track the total accumulated grade (total) and total time spent so far (elapsed)
  let total = 0, elapsed = 0;
  // Loop through each exercise function (ex) in the exercises array one by one
  for (const ex of exercises) {
    // Call ex() and await its Promise to get the result object { time, note }
    const { time, note } = await ex();
    // Add this exercise time to the total elapsed time
    elapsed += time;
    // If total elapsed time exceeds the allowed timeout, stop grading immediately
    if (elapsed > timeout) break;
    // Otherwise, add the exercise note (score) to the total grade
    total += note;
  }
  // Return the final grade
  return total;
}
