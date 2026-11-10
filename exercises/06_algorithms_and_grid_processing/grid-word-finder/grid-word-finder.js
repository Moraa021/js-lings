// Exercise: grid-word-finder
// Function that finds which words from the words list appear horizontally or vertically in a 2D grid
function gridWordsFinder(grid, words) {
  // Join each row into a single horizontal string (left-to-right)
  const rows = grid.map((r) => r.join(""));
  // Build vertical strings (top-to-bottom) for each column index c by taking row[c] from every row
  const cols = (grid[0] || []).map((_, c) => grid.map((r) => r[c]).join(""));
  // Combine all horizontal row strings and vertical column strings into one list of lines
  const lines = [...rows, ...cols];
  // Filter the input words array: keep only words that are included as a substring in at least one line
  return words.filter((w) => lines.some((line) => line.includes(w)));
}
