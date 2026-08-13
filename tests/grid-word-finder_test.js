export const tests = []
const t = (f) => tests.push(f)

t(({ eq }) => {
  const grid = [
    ["c", "a", "t"],
    ["a", "a", "t"],
    ["r", "a", "t"],
    ["d", "o", "g"],
  ]
  return eq(gridWordsFinder(grid, ["cat", "dog", "rat", "tar", "car", "rac", "g"]), ["cat", "dog", "rat", "car", "g"])
})

t(({ eq }) => {
  const grid = [["a", "b"]]
  return eq(gridWordsFinder(grid, []), [])
})

Object.freeze(tests)
