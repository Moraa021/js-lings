export const tests = []
const t = (f) => tests.push(f)

t(({ eq }) => {
  const obj = {
    a: 1,
    b: { c: 2, d: { e: 3 } },
    f: [4, 5, { g: 6 }]
  }
  const flattened = flattenObject(obj)
  return eq(flattened, {
    "a": 1,
    "b.c": 2,
    "b.d.e": 3,
    "f.0": 4,
    "f.1": 5,
    "f.2.g": 6
  })
})

t(({ eq }) => eq(flattenObject({ x: 10 }), { "x": 10 }))

Object.freeze(tests)
