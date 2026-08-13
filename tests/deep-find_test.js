export const tests = []
const t = (f) => tests.push(f)

const obj = {
  user: {
    profile: {
      name: "Alice",
      details: {
        age: 25,
        hobbies: ["reading", "gaming"]
      }
    }
  }
}

t(({ eq }) => eq(deepFind(obj, "user.profile.name"), "Alice"))
t(({ eq }) => eq(deepFind(obj, "user.profile.details.age"), 25))
t(({ eq }) => eq(deepFind(obj, "user.profile.details.hobbies.1"), "gaming"))
t(({ eq }) => eq(deepFind(obj, "user.profile.address.city"), undefined))
t(({ eq }) => eq(deepFind(obj, "nonexistent"), undefined))
t(({ eq }) => eq(deepFind(obj, ""), undefined))

Object.freeze(tests)
