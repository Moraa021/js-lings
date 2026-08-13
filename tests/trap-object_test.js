export const tests = []
const t = (f) => tests.push(f)

t(({ eq }) => {
  const events = []
  const logger = (action, key, value, newValue) => {
    events.push({ action, key, value, newValue })
  }
  const obj = trapObject({ name: "Alice", age: 25 }, logger)

  const nameVal = obj.name
  obj.age = 30
  const ageVal = obj.age

  return eq(nameVal, "Alice") &&
         eq(ageVal, 30) &&
         eq(events, [
           { action: "get", key: "name", value: "Alice", newValue: undefined },
           { action: "set", key: "age", value: 25, newValue: 30 },
           { action: "get", key: "age", value: 30, newValue: undefined }
         ])
})

Object.freeze(tests)
