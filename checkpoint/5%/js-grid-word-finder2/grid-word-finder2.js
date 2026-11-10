// Exercise: grid-word-finder2
// Function that finds all occurrences of a word horizontally or vertically without using any loops
function gridWordFinder2(grid, word) {
  // Use .flatMap() on rows (y is row index) and columns (x is column index) to check every cell (x, y)
  return grid.flatMap((row, y) =>
    row.flatMap((_, x) => {
      // Slice the horizontal characters starting at x in the current row and join them into a string
      const h = row.slice(x, x + word.length).join("");
      // Slice the vertical rows starting at y, pick column x from each row, and join them into a string
      const v = grid.slice(y, y + word.length).map((r) => r[x]).join("");
      // Collect matching directions ("horizontal" and/or "vertical") for this starting coordinate (x, y)
      return [
        ...(h === word ? [{ x, y, direction: "horizontal" }] : []),
        ...(v === word ? [{ x, y, direction: "vertical" }] : []),
      ];
    })
  );
}
