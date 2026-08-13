export const tests = []
const t = (f) => tests.push(f)

t(({ eq }) => {
  const original = {
    name: "Alice",
    age: 25,
    hobbies: ["reading", "gaming"],
    address: { city: "Wonderland", zip: 12345 }
  }
  const cloned = deepClone(original)
  cloned.name = "Bob"
  cloned.hobbies.push("chess")
  cloned.address.city = "Nowhere"

  return eq(original.name, "Alice") &&
         eq(original.hobbies, ["reading", "gaming"]) &&
         eq(original.address.city, "Wonderland") &&
         eq(cloned.name, "Bob") &&
         eq(cloned.hobbies, ["reading", "gaming", "chess"]) &&
         eq(cloned.address.city, "Nowhere")
})

t(({ eq }) => {
  const arr = [1, [2, 3], { a: 4 }]
  const clonedArr = deepClone(arr)
  clonedArr[1].push(99)
  return eq(arr[1], [2, 3]) && eq(clonedArr[1], [2, 3, 99])
})

t(({ eq }) => {
  const circular = { a: 1 }
  circular.self = circular
  const clonedCircular = deepClone(circular)
  return clonedCircular !== circular && clonedCircular.self === clonedCircular
})

Object.freeze(tests)
