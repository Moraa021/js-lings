export const tests = []
const t = (f) => tests.push(f)

t(({ eq }) => {
  const isNumberValue = (key, value) => typeof value === "number"
  const increment = (val) => (typeof val === "number" ? val + 1 : val)
  const filterAndIncrementNumbers = createCurriedFilterAndMap(isNumberValue, increment)

  const inputObject = { name: "Alice", age: 25, score: 99, active: true }
  const result = filterAndIncrementNumbers(inputObject)

  return eq(result, {
    filteredObject: { age: 26, score: 100 },
    keysKept: 2,
    keysFilteredOut: 2
  })
})

t(({ eq }) => {
  const isVowelKey = (key) => /^[aeiou]/i.test(key)
  const upperVal = (val) => String(val).toUpperCase()
  const fn = createCurriedFilterAndMap(isVowelKey, upperVal)
  const res = fn({ apple: "red", banana: "yellow", orange: "orange" })
  return eq(res, {
    filteredObject: { apple: "RED", orange: "ORANGE" },
    keysKept: 2,
    keysFilteredOut: 1
  })
})

Object.freeze(tests)
