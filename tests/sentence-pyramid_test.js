export const tests = []
const t = (f) => tests.push(f)

t(({ eq }) => {
  const logs = []
  const origLog = console.log
  console.log = (...args) => logs.push(args.join(" "))
  try {
    sentencePyramid("This is a simple sentence pyramid")
  } finally {
    console.log = origLog
  }
  return eq(logs, [
    "This",
    "This is",
    "This is a",
    "This is a simple",
    "This is a simple sentence",
    "This is a simple sentence pyramid"
  ])
})

Object.freeze(tests)
