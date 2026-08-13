export const tests = []
const t = (f) => tests.push(f)

t(({ eq }) => {
  const functions = [
    (val) => val + 1,
    (val) => val * 2,
    (val) => `Result: ${val}`,
  ]
  const result = pipeline(0, functions)
  return eq(result, {
    finalValue: 'Result: 2',
    steps: [
      { index: 0, input: 0, output: 1 },
      { index: 1, input: 1, output: 2 },
      { index: 2, input: 2, output: 'Result: 2' }
    ]
  })
})

t(({ eq }) => {
  const result = pipeline(10, [])
  return eq(result, { finalValue: 10, steps: [] })
})

Object.freeze(tests)
