export const tests = []
const t = (f) => tests.push(f)

t(({ eq }) => eq(evenSum(5), 6))
t(({ eq }) => eq(evenSum(1), 0))
t(({ eq }) => eq(evenSum(10), 30))
t(({ eq }) => eq(evenSum(0), 0))
t(({ eq }) => eq(evenSum(6), 12))

Object.freeze(tests)
