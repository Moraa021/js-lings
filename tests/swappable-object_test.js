export const tests = []
const t = (f) => tests.push(f)

t(({ eq }) => {
  const obj = swappableObject({ a: "apple", b: "banana" })
  return eq(obj.a, "apple") &&
         eq(obj.apple, "a") &&
         eq(obj.b, "banana") &&
         eq(obj.banana, "b")
})

t(({ eq }) => {
  const obj = swappableObject({ key: "val" })
  return eq(obj.key, "val") && eq(obj.val, "key")
})

Object.freeze(tests)
