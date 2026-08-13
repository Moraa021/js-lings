export const tests = []
const t = (f) => tests.push(f)

t(async ({ eq }) => {
  const start = Date.now()
  const breaker = async () => {
    await new Promise((res) => setTimeout(res, 50))
    return true
  }
  await sleepBreaker(1000, breaker)
  const elapsed = Date.now() - start
  return elapsed < 500
})

t(async ({ eq }) => {
  const start = Date.now()
  const breaker = async () => {
    await new Promise((res) => setTimeout(res, 300))
    return true
  }
  await sleepBreaker(50, breaker)
  const elapsed = Date.now() - start
  return elapsed >= 40 && elapsed < 250
})

Object.freeze(tests)
