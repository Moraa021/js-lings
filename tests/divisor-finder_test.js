export const tests = []
const t = (f) => tests.push(f)

t(({ eq }) => eq(divisors(15), [1, 3, 5]))
t(({ eq }) => eq(divisors(28), [1, 2, 4, 7, 14]))
t(({ eq }) => eq(divisors(1), []))
t(({ eq }) => eq(divisors(-15), [1, 3, 5]))
t(({ eq }) => eq(divisors(7), [1]))
t(({ eq }) => eq(divisors(12), [1, 2, 3, 4, 6]))

Object.freeze(tests)
