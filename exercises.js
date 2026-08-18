import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const EXERCISES_DIR = path.join(__dirname, 'exercises')
const TESTS_DIR = path.join(__dirname, 'tests')

export const ROOT_EXERCISES_META = {
  'array-chunk-reversal': { category: 'Arrays', hint: 'Slice array into chunk sizes and reverse each subarray.' },
  'bubble-sort-analyzer': { category: 'Algorithms', hint: 'Implement standard bubble sort while keeping count of loop iterations and element swaps.' },
  'character-maker': { category: 'Functional', hint: 'Return a function that accepts object/function arguments recursively until called with no args.' },
  'deep-clone': { category: 'Objects', hint: 'Recursively clone arrays and objects. Handle circular references with a WeakMap.' },
  'deep-equal': { category: 'Objects', hint: 'Compare primitive values with strict equality (===) and recursively check object/array properties.' },
  'deep-find': { category: 'Objects', hint: 'Split path string by dot (.) and traverse nested properties step by step.' },
  'deep-freeze': { category: 'Objects', hint: 'Call Object.freeze on the object and recursively on all nested object/array values.' },
  'divisor-finder': { category: 'Math', hint: 'Iterate from 1 up to Math.abs(n)-1 checking if n % i === 0.' },
  'election-mix': { category: 'Functional', hint: 'Return a curried function taking an object, filtering entries by criteria and transforming values.' },
  'even-sum': { category: 'Math', hint: 'Loop from 0 to n step 2 (or filter evens) and sum them up.' },
  'exam-grader': { category: 'Async', hint: 'Execute promise returning functions in sequence while tracking total time against timeout.' },
  'factorial': { category: 'Math', hint: 'n! = n * (n-1) * ... * 1. 0! = 1.' },
  'fibonacci': { category: 'Math', hint: 'Fibonacci numbers start 0, 1, 1, 2, 3, 5, 8... fib(n) = fib(n-1) + fib(n-2).' },
  'final-attempt': { category: 'Async', hint: 'Wrap async callback in a retry loop up to count attempts; return "Final Attempt Fail" on exhausted retries.' },
  'flat-object': { category: 'Objects', hint: 'Flatten keys into dot notation paths and apply mapper function to all values.' },
  'flatten-object': { category: 'Objects', hint: 'Recursively flatten nested objects and arrays using dot notation (e.g. f.0).' },
  'grid-word-finder': { category: 'Grid/Strings', hint: 'Check grid rows (left to right) and columns (top to bottom) for each candidate word.' },
  'grid-word-finder2': { category: 'Grid/Strings', hint: 'Find occurrences of a word horizontally/vertically without using explicit loops (use map/reduce/some).' },
  'insertion-sort-analyzer': { category: 'Algorithms', hint: 'Implement insertion sort algorithm while tracking iterations and swaps.' },
  'nested-array-reverser': { category: 'Arrays', hint: 'Reverse outer array order, reverse each inner array order, join all words with space.' },
  'object-lab': { category: 'Objects', hint: 'Merge array of objects tracking added/overwritten keys, then apply transform functions in sequence.' },
  'palindromic-chains': { category: 'Algorithms', hint: 'For each number, add to its reverse until it is a palindrome or reaches 100 attempts.' },
  'perfect-num': { category: 'Math', hint: 'Sum proper divisors of n (excluding n itself). Return true if sum === n.' },
  'pipeline': { category: 'Functional', hint: 'Pass initialValue through array of functions recording step index, input, and output.' },
  'sentence-pyramid': { category: 'Strings', hint: 'Split sentence into words and console.log cumulative word prefixes.' },
  'sleep-breaker': { category: 'Async', hint: 'Race a setTimeout promise against breaker promise resolution.' },
  'snakepath-validator': { category: 'Grid/Algorithms', hint: 'Verify 1s form a single connected path without loops or isolated cells (no loops allowed in code).' },
  'swappable-object': { category: 'Proxies', hint: 'Use Proxy get trap to return value for key or key for value.' },
  'transform-keys': { category: 'Objects', hint: 'Recursively transform all keys of an object/nested objects using transformFn.' },
  'trap-object': { category: 'Proxies', hint: 'Use Proxy get and set traps to invoke fn with action, key, value, newValue.' },
  'zoo-race': { category: 'Async', hint: 'Calculate segment times for each animal based on maxSpeed/midSpeed/speed ranges and use Promise.race.' }
}

export function getAllExercises() {
  const exercises = []

  if (fs.existsSync(EXERCISES_DIR)) {
    const exerciseFolders = fs.readdirSync(EXERCISES_DIR)
    const testFiles = fs.existsSync(TESTS_DIR) ? fs.readdirSync(TESTS_DIR) : []

    // Sort so core practice exercises come first, followed by remaining subjects
    const rootNames = Object.keys(ROOT_EXERCISES_META)
    const sortedFolders = [
      ...rootNames.filter(name => exerciseFolders.includes(name)),
      ...exerciseFolders.filter(name => !rootNames.includes(name)).sort()
    ]

    for (const name of sortedFolders) {
      let testFile = null
      if (testFiles.includes(`${name}_test.js`)) testFile = `${name}_test.js`
      else if (testFiles.includes(`${name}_test.mjs`)) testFile = `${name}_test.mjs`
      else if (testFiles.includes(`${name}.json`)) testFile = `${name}.json`

      if (testFile) {
        const meta = ROOT_EXERCISES_META[name]
        exercises.push({
          id: name,
          name: name,
          category: meta ? meta.category : 'Piscine Subjects',
          folder: path.join('exercises', name),
          hint: meta ? meta.hint : `Read instructions in exercises/${name}/README.md`
        })
      }
    }
  }

  return exercises
}

export function getExerciseSolutionPath(exercise) {
  const dir = path.join(__dirname, 'exercises', exercise.name)
  const possibleFiles = [
    path.join(dir, `${exercise.name}.js`),
    path.join(dir, `${exercise.name}.mjs`),
    path.join(dir, 'index.js'),
    path.join(dir, 'solution.js')
  ]

  for (const f of possibleFiles) {
    if (fs.existsSync(f)) return f
  }

  const defaultSolPath = path.join(dir, `${exercise.name}.js`)
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
  if (!fs.existsSync(defaultSolPath)) {
    fs.writeFileSync(defaultSolPath, `// Exercise: ${exercise.name}\n// Write your solution here\n`, 'utf8')
  }
  return defaultSolPath
}
