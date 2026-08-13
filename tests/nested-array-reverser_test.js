export const tests = []
const t = (f) => tests.push(f)

t(({ eq }) => eq(nestedArrayReverser([
  ["hello", "world"],
  ["this", "is"],
  ["a", "test"],
]), "test a is this world hello"))

t(({ eq }) => eq(nestedArrayReverser([]), ""))
t(({ eq }) => eq(nestedArrayReverser([["a"], ["b"]]), "b a"))

Object.freeze(tests)
