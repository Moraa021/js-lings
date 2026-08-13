export const tests = []
const t = (f) => tests.push(f)

t(({ eq }) => eq(reverseChunks([1, 2, 3, 4, 5, 6, 7], 3), [3, 2, 1, 6, 5, 4, 7]))
t(({ eq }) => eq(reverseChunks([10, 20, 30, 40, 50], 2), [20, 10, 40, 30, 50]))
t(({ eq }) => eq(reverseChunks([1, 2, 3, 4, 5], 4), [4, 3, 2, 1, 5]))
t(({ eq }) => eq(reverseChunks([1, 2, 3], 5), [3, 2, 1]))
t(({ eq }) => eq(reverseChunks([], 2), []))
t(({ eq }) => eq(reverseChunks(['a', 'b', 'c', 'd'], 2), ['b', 'a', 'd', 'c']))

Object.freeze(tests)
