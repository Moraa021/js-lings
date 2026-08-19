import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const EXERCISES_DIR = path.join(__dirname, 'exercises')
const TESTS_DIR = path.join(__dirname, 'tests')

const CATEGORY_NAMES = {
  '01_primitives_and_types': 'Primitives & Types',
  '02_control_flow_and_loops': 'Control Flow & Loops',
  '03_data_structures_arrays_and_objects': 'Data Structures (Arrays & Objects)',
  '04_functional_programming': 'Functional Programming',
  '05_async_and_promises': 'Async & Promises',
  '06_algorithms_and_grid_processing': 'Algorithms & Grid Processing',
  '07_capstones_and_multi_concept': 'Multi-Concept Capstones'
}

export const ROOT_EXERCISES_HINTS = {
  'array-chunk-reversal': 'Slice array into chunk sizes and reverse each subarray.',
  'bubble-sort-analyzer': 'Implement standard bubble sort while keeping count of loop iterations and element swaps.',
  'character-maker': 'Return a function that accepts object/function arguments recursively until called with no args.',
  'deep-clone': 'Recursively clone arrays and objects. Handle circular references with a WeakMap.',
  'deep-equal': 'Compare primitive values with strict equality (===) and recursively check object/array properties.',
  'deep-find': 'Split path string by dot (.) and traverse nested properties step by step.',
  'deep-freeze': 'Call Object.freeze on the object and recursively on all nested object/array values.',
  'divisor-finder': 'Iterate from 1 up to Math.abs(n)-1 checking if n % i === 0.',
  'election-mix': 'Return a curried function taking an object, filtering entries by criteria and transforming values.',
  'even-sum': 'Loop from 0 to n step 2 (or filter evens) and sum them up.',
  'exam-grader': 'Execute promise returning functions in sequence while tracking total time against timeout.',
  'factorial': 'n! = n * (n-1) * ... * 1. 0! = 1.',
  'fibonacci': 'Fibonacci numbers start 0, 1, 1, 2, 3, 5, 8... fib(n) = fib(n-1) + fib(n-2).',
  'final-attempt': 'Wrap async callback in a retry loop up to count attempts; return "Final Attempt Fail" on exhausted retries.',
  'flat-object': 'Flatten keys into dot notation paths and apply mapper function to all values.',
  'flatten-object': 'Recursively flatten nested objects and arrays using dot notation (e.g. f.0).',
  'grid-word-finder': 'Check grid rows (left to right) and columns (top to bottom) for each candidate word.',
  'grid-word-finder2': 'Find occurrences of a word horizontally/vertically without using explicit loops (use map/reduce/some).',
  'insertion-sort-analyzer': 'Implement insertion sort algorithm while tracking iterations and swaps.',
  'nested-array-reverser': 'Reverse outer array order, reverse each inner array order, join all words with space.',
  'object-lab': 'Merge array of objects tracking added/overwritten keys, then apply transform functions in sequence.',
  'palindromic-chains': 'For each number, add to its reverse until it is a palindrome or reaches 100 attempts.',
  'perfect-num': 'Sum proper divisors of n (excluding n itself). Return true if sum === n.',
  'pipeline': 'Pass initialValue through array of functions recording step index, input, and output.',
  'sentence-pyramid': 'Split sentence into words and console.log cumulative word prefixes.',
  'sleep-breaker': 'Race a setTimeout promise against breaker promise resolution.',
  'snakepath-validator': 'Verify 1s form a single connected path without loops or isolated cells (no loops allowed in code).',
  'swappable-object': 'Use Proxy get trap to return value for key or key for value.',
  'transform-keys': 'Recursively transform all keys of an object/nested objects using transformFn.',
  'trap-object': 'Use Proxy get and set traps to invoke fn with action, key, value, newValue.',
  'zoo-race': 'Calculate segment times for each animal based on maxSpeed/midSpeed/speed ranges and use Promise.race.'
}

export function getAllExercises() {
  const exercises = []

  if (!fs.existsSync(EXERCISES_DIR)) return exercises

  const catDirs = fs.readdirSync(EXERCISES_DIR)
    .filter(d => fs.statSync(path.join(EXERCISES_DIR, d)).isDirectory())
    .sort()

  const testFiles = fs.existsSync(TESTS_DIR) ? fs.readdirSync(TESTS_DIR) : []

  for (const catDir of catDirs) {
    const catPath = path.join(EXERCISES_DIR, catDir)
    const exFolders = fs.readdirSync(catPath)
      .filter(f => fs.statSync(path.join(catPath, f)).isDirectory())
      .sort()

    for (const name of exFolders) {
      let testFile = null
      if (testFiles.includes(`${name}_test.js`)) testFile = `${name}_test.js`
      else if (testFiles.includes(`${name}_test.mjs`)) testFile = `${name}_test.mjs`
      else if (testFiles.includes(`${name}.json`)) testFile = `${name}.json`

      if (testFile) {
        const hint = ROOT_EXERCISES_HINTS[name] || `Read instructions in exercises/${catDir}/${name}/README.md`
        const categoryLabel = CATEGORY_NAMES[catDir] || catDir

        exercises.push({
          id: name,
          name: name,
          category: categoryLabel,
          categoryDir: catDir,
          folder: path.join('exercises', catDir, name),
          hint: hint
        })
      }
    }
  }

  return exercises
}

export function getExerciseSolutionPath(exercise) {
  const dir = path.join(__dirname, exercise.folder)
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
