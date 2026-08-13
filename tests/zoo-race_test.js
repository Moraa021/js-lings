export const tests = []
const t = (f) => tests.push(f)

t(async ({ eq }) => {
  const rabbit = animal("Rabbit", 20, 50, 10, 100, 5, 200)
  const turtle = animal("Turtle", 5, 20, 3, 50, 1, 200)
  const cheetah = animal("Cheetah", 30, 80, 15, 100, 10, 200)

  const winner = await zooRace([rabbit, turtle, cheetah])
  return eq(winner, "Cheetah")
})

t(async ({ eq }) => {
  const slowCheetah = animal("Cheetah", 10, 10, 5, 10, 1, 100)
  const fastRabbit = animal("Rabbit", 50, 100, 40, 100, 30, 100)
  const winner = await zooRace([slowCheetah, fastRabbit])
  return eq(winner, "Rabbit")
})

Object.freeze(tests)
