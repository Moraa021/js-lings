// Exercise: snakepath-validator
// Function that validates whether all 1s in a 2D grid form a single connected path (without using any loops!)
function isSnakePath(grid) {
  // Find the coordinates [r, c] of every cell that contains a 1, using flatMap instead of loops
  const ones = grid.flatMap((row, r) =>
    row.flatMap((val, c) => (val === 1 ? [[r, c]] : []))
  );
  // If there are no 1s at all, it is not a valid snake path; if 1 or more, start flood-fill (DFS) from the first 1
  if (!ones.length) return false;
  // Set to keep track of visited "row,col" coordinates during our connectivity search
  const visited = new Set();
  // Recursive function (dfs) to visit all 1s connected horizontally or vertically
  const dfs = ([r, c]) => {
    const key = `${r},${c}`;
    // Stop if out of bounds, cell is not 1, or cell was already visited
    if (!grid[r] || grid[r][c] !== 1 || visited.has(key)) return;
    // Mark current cell as visited
    visited.add(key);
    // Recursively visit the 4 neighbors (up, down, left, right) using .forEach() instead of a loop
    [
      [r - 1, c],
      [r + 1, c],
      [r, c - 1],
      [r, c + 1],
    ].forEach(dfs);
  };
  // Start traversal from the first 1 found in the grid
  dfs(ones[0]);
  // All 1s are connected in a single path if and only if the number of visited 1s equals the total number of 1s
  return visited.size === ones.length;
}
