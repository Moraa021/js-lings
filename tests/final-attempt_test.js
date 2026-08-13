export const tests = []
const t = (f) => tests.push(f)

t(async ({ eq }) => {
  let count = 0
  const cb = async (val) => {
    count++
    if (count < 3) throw Error("fail")
    return "ok " + val
  }
  const runner = FinalAttempt(cb, 3)
  const res = await runner("test")
  return eq(res, "ok test") && eq(count, 3)
})

t(async ({ eq }) => {
  const cb = async () => { throw Error("fail") }
  const runner = FinalAttempt(cb, 3)
  const res = await runner()
  return eq(res, "Final Attempt Fail")
})

Object.freeze(tests)
