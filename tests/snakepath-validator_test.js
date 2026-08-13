export const tests = []
const t = (f) => tests.push(f)

t(({ eq }) => {
  const grid1 = [
    [1, 0, 0, 0],
    [1, 1, 0, 0],
    [0, 1, 1, 0],
    [0, 0, 1, 0],
  ]
  return eq(isSnakePath(grid1), true)
})

t(({ eq }) => {
  const grid2 = [
    [1, 0, 0, 0],
    [1, 0, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 1, 0],
  ]
  return eq(isSnakePath(grid2), false)
})

t(({ eq }) => {
  const grid3 = [[1]]
  return eq(isSnakePath(grid3), true)
})

Object.freeze(tests)
