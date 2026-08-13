export const tests = []
const t = (f) => tests.push(f)

t(({ eq }) => {
  const grid = [
    ["c", "a", "t"],
    ["d", "o", "g"],
    ["r", "a", "t"],
  ]
  const res = gridWordFinder2(grid, "cat")
  return eq(res, [{ x: 0, y: 0, direction: "horizontal" }])
})

t(({ eq }) => {
  const grid = [
    ["c", "a"],
    ["a", "b"],
    ["t", "c"]
  ]
  const res = gridWordFinder2(grid, "cat")
  return eq(res, [{ x: 0, y: 0, direction: "vertical" }])
})

Object.freeze(tests)
