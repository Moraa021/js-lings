export const tests = []
const t = (f) => tests.push(f)

t(({ eq }) => {
  const obj = {
    FirstName: "Alice",
    LastName: "Doe",
    Address: { StreetName: "Main St", ZipCode: 12345 }
  }
  const toSnakeCase = (key) => key.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`).replace(/^_/, "")
  const transformed = transformKeys(obj, toSnakeCase)
  return eq(transformed, {
    "first_name": "Alice",
    "last_name": "Doe",
    "address": {
      "street_name": "Main St",
      "zip_code": 12345
    }
  })
})

t(({ eq }) => {
  const obj = { a: 1 }
  return eq(transformKeys(obj, (k) => k.toUpperCase()), { A: 1 })
})

Object.freeze(tests)
