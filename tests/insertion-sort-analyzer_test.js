export const tests = []
const t = (f) => tests.push(f)

const cmpAsc = (a, b) => a - b
const cmpDesc = (a, b) => b - a

t(({ eq }) => {
  const result = insertionSortAnalyzer([5, 2, 4, 6, 1, 3], cmpAsc)
  return eq(result.sortedArray, [1, 2, 3, 4, 5, 6]) &&
         typeof result.iterations === 'number' &&
         typeof result.swaps === 'number'
})

t(({ eq }) => {
  const result = insertionSortAnalyzer([1, 2, 3], cmpAsc)
  return eq(result.sortedArray, [1, 2, 3])
})

t(({ eq }) => {
  const result = insertionSortAnalyzer([3, 2, 1], cmpDesc)
  return eq(result.sortedArray, [3, 2, 1])
})

Object.freeze(tests)
