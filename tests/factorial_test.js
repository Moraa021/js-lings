export const tests = []
const t = (f) => tests.push(f)

t(({ eq }) => eq(factorial(5), 120))
t(({ eq }) => eq(factorial(0), 1))
t(({ eq }) => eq(factorial(1), 1))
t(({ eq }) => eq(factorial(7), 5040))

Object.freeze(tests)
