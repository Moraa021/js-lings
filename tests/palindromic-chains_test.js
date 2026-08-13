export const tests = []
const t = (f) => tests.push(f)

t(({ eq }) => eq(palindromicChain([87, 33, 123, 196]), [4884, 33, 444, 0]))
t(({ eq }) => eq(palindromicChain([12]), [33]))
t(({ eq }) => eq(palindromicChain([]), []))

Object.freeze(tests)
