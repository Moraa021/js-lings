export const tests = []
const t = (f) => tests.push(f)

t(({ eq }) => {
  const objA = { name: "Alice", age: 25, hobbies: ["reading", "gaming"], address: { city: "Wonderland", zip: 12345 } }
  const objB = { name: "Alice", age: 25, hobbies: ["reading", "gaming"], address: { city: "Wonderland", zip: 12345 } }
  const objC = { name: "Alice", age: 25, hobbies: ["reading", "gaming", "chess"], address: { city: "Wonderland", zip: 12345 } }
  return eq(deepEqual(objA, objB), true) && eq(deepEqual(objA, objC), false)
})

t(({ eq }) => eq(deepEqual(1, 1), true))
t(({ eq }) => eq(deepEqual(1, '1'), false))
t(({ eq }) => eq(deepEqual([1, 2, 3], [1, 2, 3]), true))
t(({ eq }) => eq(deepEqual([1, 2, 3], [1, 3, 2]), false))
t(({ eq }) => eq(deepEqual({ a: 1, b: 2 }, { b: 2, a: 1 }), true))
t(({ eq }) => eq(deepEqual({ a: 1 }, { a: 1, b: undefined }), false))

Object.freeze(tests)
