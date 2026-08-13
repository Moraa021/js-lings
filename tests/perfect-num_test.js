export const tests = []
const t = (f) => tests.push(f)

t(({ eq }) => eq(isPerfectNum(6), true))
t(({ eq }) => eq(isPerfectNum(28), true))
t(({ eq }) => eq(isPerfectNum(496), true))
t(({ eq }) => eq(isPerfectNum(12), false))
t(({ eq }) => eq(isPerfectNum(1), false))
t(({ eq }) => eq(isPerfectNum(-6), false))

Object.freeze(tests)
