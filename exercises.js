import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const PISCINE_DIR = '/home/blaq/piscine/public/subjects'

export const ROOT_EXERCISES = [
  { id: 'array-chunk-reversal', name: 'array-chunk-reversal', category: 'Arrays', folder: 'js-array-chunk-reversal', hint: 'Slice array into chunk sizes and reverse each subarray.' },
  { id: 'bubble-sort-analyzer', name: 'bubble-sort-analyzer', category: 'Algorithms', folder: 'js-bubble-sort-analyzer', hint: 'Implement standard bubble sort while keeping count of loop iterations and element swaps.' },
  { id: 'character-maker', name: 'character-maker', category: 'Functional', folder: 'js-character-maker', hint: 'Return a function that accepts object/function arguments recursively until called with no args.' },
  { id: 'deep-clone', name: 'deep-clone', category: 'Objects', folder: 'js-deep-clone', hint: 'Recursively clone arrays and objects. Handle circular references with a WeakMap.' },
  { id: 'deep-equal', name: 'deep-equal', category: 'Objects', folder: 'js-deep-equal', hint: 'Compare primitive values with strict equality (===) and recursively check object/array properties.' },
  { id: 'deep-find', name: 'deep-find', category: 'Objects', folder: 'js-deep-find', hint: 'Split path string by dot (.) and traverse nested properties step by step.' },
  { id: 'deep-freeze', name: 'deep-freeze', category: 'Objects', folder: 'js-deep-freeze', hint: 'Call Object.freeze on the object and recursively on all nested object/array values.' },
  { id: 'divisor-finder', name: 'divisor-finder', category: 'Math', folder: 'js-divisor-finder', hint: 'Iterate from 1 up to Math.abs(n)-1 checking if n % i === 0.' },
  { id: 'election-mix', name: 'election-mix', category: 'Functional', folder: 'js-election-mix', hint: 'Return a curried function taking an object, filtering entries by criteria and transforming values.' },
  { id: 'even-sum', name: 'even-sum', category: 'Math', folder: 'js-even-sum', hint: 'Loop from 0 to n step 2 (or filter evens) and sum them up.' },
  { id: 'exam-grader', name: 'exam-grader', category: 'Async', folder: 'js-exam-grader', hint: 'Execute promise returning functions in sequence while tracking total time against timeout.' },
  { id: 'factorial', name: 'factorial', category: 'Math', folder: 'js-factorial', hint: 'n! = n * (n-1) * ... * 1. 0! = 1.' },
  { id: 'fibonacci', name: 'fibonacci', category: 'Math', folder: 'js-fibonacci', hint: 'Fibonacci numbers start 0, 1, 1, 2, 3, 5, 8... fib(n) = fib(n-1) + fib(n-2).' },
  { id: 'final-attempt', name: 'final-attempt', category: 'Async', folder: 'js-final-attempt', hint: 'Wrap async callback in a retry loop up to count attempts; return "Final Attempt Fail" on exhausted retries.' },
  { id: 'flat-object', name: 'flat-object', category: 'Objects', folder: 'js-flat-object', hint: 'Flatten keys into dot notation paths and apply mapper function to all values.' },
  { id: 'flatten-object', name: 'flatten-object', category: 'Objects', folder: 'js-flatten-object', hint: 'Recursively flatten nested objects and arrays using dot notation (e.g. f.0).' },
  { id: 'grid-word-finder', name: 'grid-word-finder', category: 'Grid/Strings', folder: 'js-grid-word-finder', hint: 'Check grid rows (left to right) and columns (top to bottom) for each candidate word.' },
  { id: 'grid-word-finder2', name: 'grid-word-finder2', category: 'Grid/Strings', folder: 'js-grid-word-finder2', hint: 'Find occurrences of a word horizontally/vertically without using explicit loops (use map/reduce/some).' },
  { id: 'insertion-sort-analyzer', name: 'insertion-sort-analyzer', category: 'Algorithms', folder: 'js-insertion-sort-analyzer', hint: 'Implement insertion sort algorithm while tracking iterations and swaps.' },
  { id: 'nested-array-reverser', name: 'nested-array-reverser', category: 'Arrays', folder: 'js-nested-array-reverser', hint: 'Reverse outer array order, reverse each inner array order, join all words with space.' },
  { id: 'object-lab', name: 'object-lab', category: 'Objects', folder: 'js-object-lab', hint: 'Merge array of objects tracking added/overwritten keys, then apply transform functions in sequence.' },
  { id: 'palindromic-chains', name: 'palindromic-chains', category: 'Algorithms', folder: 'js-palindromic-chains', hint: 'For each number, add to its reverse until it is a palindrome or reaches 100 attempts.' },
  { id: 'perfect-num', name: 'perfect-num', category: 'Math', folder: 'js-perfect-num', hint: 'Sum proper divisors of n (excluding n itself). Return true if sum === n.' },
  { id: 'pipeline', name: 'pipeline', category: 'Functional', folder: 'js-pipeline', hint: 'Pass initialValue through array of functions recording step index, input, and output.' },
  { id: 'sentence-pyramid', name: 'sentence-pyramid', category: 'Strings', folder: 'js-sentence-pyramid', hint: 'Split sentence into words and console.log cumulative word prefixes.' },
  { id: 'sleep-breaker', name: 'sleep-breaker', category: 'Async', folder: 'js-sleep-breaker', hint: 'Race a setTimeout promise against breaker promise resolution.' },
  { id: 'snakepath-validator', name: 'snakepath-validator', category: 'Grid/Algorithms', folder: 'js-snakepath-validator', hint: 'Verify 1s form a single connected path without loops or isolated cells (no loops allowed in code).' },
  { id: 'swappable-object', name: 'swappable-object', category: 'Proxies', folder: 'js-swappable-object', hint: 'Use Proxy get trap to return value for key or key for value.' },
  { id: 'transform-keys', name: 'transform-keys', category: 'Objects', folder: 'js-transform-keys', hint: 'Recursively transform all keys of an object/nested objects using transformFn.' },
  { id: 'trap-object', name: 'trap-object', category: 'Proxies', folder: 'js-trap-object', hint: 'Use Proxy get and set traps to invoke fn with action, key, value, newValue.' },
  { id: 'zoo-race', name: 'zoo-race', category: 'Async', folder: 'js-zoo-race', hint: 'Calculate segment times for each animal based on maxSpeed/midSpeed/speed ranges and use Promise.race.' }
]

export function getAllExercises() {
  const exercises = [...ROOT_EXERCISES]

  // Add piscine exercises if available
  if (fs.existsSync(PISCINE_DIR)) {
    const piscineSubjects = fs.readdirSync(PISCINE_DIR)
    const testFiles = fs.existsSync(path.join(__dirname, 'tests')) ? fs.readdirSync(path.join(__dirname, 'tests')) : []

    for (const subject of piscineSubjects) {
      if (exercises.some(e => e.id === subject || e.name === subject)) continue

      let testFile = null
      if (testFiles.includes(`${subject}_test.js`)) testFile = `${subject}_test.js`
      else if (testFiles.includes(`${subject}_test.mjs`)) testFile = `${subject}_test.mjs`
      else if (testFiles.includes(`${subject}.json`)) testFile = `${subject}.json`

      if (testFile) {
        exercises.push({
          id: subject,
          name: subject,
          category: 'Piscine Subjects',
          folder: path.join(PISCINE_DIR, subject),
          isPiscine: true,
          hint: `Read instructions in ${path.join(PISCINE_DIR, subject, 'README.md')}`
        })
      }
    }
  }

  return exercises
}

export function getExerciseSolutionPath(exercise) {
  if (!exercise.isPiscine) {
    const dir = path.join(__dirname, exercise.folder)
    const possibleFiles = [
      path.join(dir, `${exercise.name}.js`),
      path.join(dir, 'index.js'),
      path.join(dir, 'solution.js')
    ]
    for (const f of possibleFiles) {
      if (fs.existsSync(f)) return f
    }
    return path.join(dir, `${exercise.name}.js`)
  } else {
    // For piscine exercises, look in working dir or piscine subject dir
    const localDir = path.join(__dirname, 'piscine-solutions', exercise.name)
    if (!fs.existsSync(localDir)) {
      fs.mkdirSync(localDir, { recursive: true })
    }
    const ext = exercise.name.endsWith('-dom') ? 'js' : 'js'
    const solFile = path.join(localDir, `${exercise.name}.${ext}`)
    if (!fs.existsSync(solFile)) {
      fs.writeFileSync(solFile, `// Exercise: ${exercise.name}\n// Write your solution here\n`, 'utf8')
    }
    return solFile
  }
}
