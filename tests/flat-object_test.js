export const tests = []
const t = (f) => tests.push(f)

t(({ eq }) => {
  const nestedObj = {
    user: { name: "Alice", address: { city: "Wonderland", zip: 12345 } },
    meta: { roles: ["admin", "editor"], active: true }
  }
  const toUpperCaseStrings = (value) => typeof value === "string" ? value.toUpperCase() : value
  const result = flattenAndMap(nestedObj, toUpperCaseStrings)

  return eq(result.flattened, {
    'user.name': 'ALICE',
    'user.address.city': 'WONDERLAND',
    'user.address.zip': 12345,
    'meta.roles': ['ADMIN', 'EDITOR'],
    'meta.active': true
  }) && eq(result.originalKeysCount, 5) && typeof result.transformedKeysCount === 'number'
})

Object.freeze(tests)
