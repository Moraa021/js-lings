export const tests = []
const t = (f) => tests.push(f)

t(({ eq }) => eq(fibonacci(0), 0))
t(({ eq }) => eq(fibonacci(1), 1))
t(({ eq }) => eq(fibonacci(6), 8))
t(({ eq }) => eq(fibonacci(10), 55))
t(({ eq }) => eq(fibonacci(12), 144))

Object.freeze(tests)
