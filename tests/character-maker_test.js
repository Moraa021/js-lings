export const tests = []
const t = (f) => tests.push(f)

t(({ eq }) => {
  const initial = { name: "Aria", stats: { strength: 5, intelligence: 10 } }
  const builder = createCurriedCharacterCreator(initial)
  const result = builder(
    { class: "Wizard", stats: { strength: 7, mana: 50 }, equipment: { weapon: "Staff" } },
    (char) => ({ ...char, stats: { ...char.stats, strength: char.stats.strength + 3 } })
  )()
  return eq(result, {
    name: "Aria",
    class: "Wizard",
    stats: { strength: 10, intelligence: 10, mana: 50 },
    equipment: { weapon: "Staff" }
  })
})

t(({ eq }) => {
  const builder = createCurriedCharacterCreator({ hp: 100 })
  const result = builder({ maxHp: 100 })({ level: 1 })()
  return eq(result, { hp: 100, maxHp: 100, level: 1 })
})

Object.freeze(tests)
