export const tests = []
const t = (f) => tests.push(f)

const cmpAsc = (a, b) => a - b
const cmpDesc = (a, b) => b - a

t(({ eq }) => {
  const res = bubbleSortAnalyzer([4, 2, 7, 1, 3], cmpAsc)
  return eq(res.sortedArray, [1, 2, 3, 4, 7]) && typeof res.iterations === 'number' && typeof res.swaps === 'number' && res.swaps > 0
})

t(({ eq }) => {
  const res = bubbleSortAnalyzer([5, 4, 3, 2, 1], cmpAsc)
  return eq(res.sortedArray, [1, 2, 3, 4, 5])
})

t(({ eq }) => {
  const res = bubbleSortAnalyzer([1, 2, 3, 4, 5], cmpAsc)
  return eq(res.sortedArray, [1, 2, 3, 4, 5]) && res.swaps === 0
})

t(({ eq }) => {
  const res = bubbleSortAnalyzer([3, 1, 4, 1, 5, 9, 2, 6], cmpDesc)
  return eq(res.sortedArray, [9, 6, 5, 4, 3, 2, 1, 1])
})

Object.freeze(tests)
