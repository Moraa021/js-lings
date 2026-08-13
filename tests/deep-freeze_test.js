export const tests = []
const t = (f) => tests.push(f)

t(({ eq, fail }) => {
  const data = { user: "Alice", stats: { score: 100, achievements: ["gold", "silver"] } }
  deepFreeze(data)
  
  fail(() => { data.user = "Bob" })
  fail(() => { data.stats.score = 200 })
  fail(() => { data.stats.achievements.push("bronze") })

  return Object.isFrozen(data) && Object.isFrozen(data.stats) && Object.isFrozen(data.stats.achievements)
})

t(({ eq }) => {
  const obj = { a: 1, b: { c: 2 } }
  const frozen = deepFreeze(obj)
  return eq(frozen, obj) && Object.isFrozen(obj.b)
})

Object.freeze(tests)
