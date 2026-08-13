export const tests = []
const t = (f) => tests.push(f)

const makeEx = (delay, note) => () => new Promise(res => setTimeout(() => res({ time: delay, note }), delay))

t(async ({ eq }) => {
  const exercises = [makeEx(100, 15), makeEx(200, 18), makeEx(50, 12)]
  const grade = await examGrader(300, exercises)
  return eq(grade, 33)
})

t(async ({ eq }) => {
  const exercises = [makeEx(100, 10), makeEx(100, 10), makeEx(100, 10)]
  const grade = await examGrader(150, exercises)
  return eq(grade, 10)
})

t(async ({ eq }) => {
  const exercises = []
  const grade = await examGrader(100, exercises)
  return eq(grade, 0)
})

Object.freeze(tests)
