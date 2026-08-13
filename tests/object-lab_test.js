export const tests = []
const t = (f) => tests.push(f)

t(({ eq }) => {
  const objArray = [{ a: 1, b: 2 }, { b: 3, c: 4 }, { d: 5 }]
  const transforms = [
    (obj) => ({ ...obj, a: obj.a * 10 }),
    (obj) => {
      const { b, ...rest } = obj
      return rest
    },
    (obj) => (obj.e ? obj : { ...obj, e: "newKey" }),
  ]
  const result = mergeAndTransform(objArray, transforms)
  return eq(result, {
    finalObject: { a: 10, c: 4, d: 5, e: 'newKey' },
    transformationsCount: 3,
    keysAdded: 2,
    keysOverwritten: 1
  })
})

Object.freeze(tests)
