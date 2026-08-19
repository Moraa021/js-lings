#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { spawn } from 'child_process'
import readline from 'readline'
import { fileURLToPath } from 'url'
import { getAllExercises, getExerciseSolutionPath } from './exercises.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const STATE_FILE = path.join(__dirname, '.jslings-state.json')
const TEST_RUNNER = path.join(__dirname, 'tests', 'test.mjs')

// ANSI Styling Helpers
const styles = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  dim: '\x1b[2m',
  italic: '\x1b[3m',
  underline: '\x1b[4m',
  cyan: '\x1b[36m',
  blue: '\x1b[34m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  magenta: '\x1b[35m',
  bgGreen: '\x1b[42m\x1b[30m',
  bgRed: '\x1b[41m\x1b[37m',
  bgBlue: '\x1b[44m\x1b[37m',
  bgCyan: '\x1b[46m\x1b[30m',
}

function loadState() {
  if (fs.existsSync(STATE_FILE)) {
    try {
      return JSON.parse(fs.readFileSync(STATE_FILE, 'utf8'))
    } catch (e) {
      // Fallback
    }
  }
  return { completed: [], currentIndex: 0 }
}

function saveState(state) {
  fs.writeFileSync(STATE_FILE, JSON.stringify(state, null, 2), 'utf8')
}

function printBanner() {
  console.clear()
  console.log(`${styles.cyan}${styles.bold}
   █  █▀▀ █   ▀█▀ █▄  █ █▀▀ █▀▀ ▀█▀ █▀▀
 █ █  ▀▀█ █    █  █ █ █ █ █ ▀▀█  █  ▀▀█
 ▀▄▀  ▀▀▀ ▀▀▀ ▀▀▀ ▀  ▀▀ ▀▀▀ ▀▀▀ ▀▀▀ ▀▀▀
${styles.reset}${styles.dim}   Interactive JavaScript Practice Environment inspired by Rustlings${styles.reset}\n`)
}

function printProgressBar(completedCount, totalCount) {
  const pct = Math.round((completedCount / totalCount) * 100)
  const barLength = 30
  const filledLength = Math.round((barLength * completedCount) / totalCount)
  const bar = '█'.repeat(filledLength) + '░'.repeat(barLength - filledLength)
  console.log(`${styles.bold}Progress:${styles.reset} [${styles.green}${bar}${styles.reset}] ${styles.bold}${pct}%${styles.reset} (${completedCount}/${totalCount} exercises)\n`)
}

function getReadmeInstructions(exercise) {
  const readmePath = path.join(__dirname, exercise.folder, 'README.md')

  if (fs.existsSync(readmePath)) {
    try {
      const content = fs.readFileSync(readmePath, 'utf8')
      const lines = content.split('\n').slice(0, 25)
      return lines.join('\n')
    } catch (e) {
      return 'Instructions unavailable.'
    }
  }
  return 'Instructions file not found.'
}

function runSingleTest(exercise) {
  return new Promise((resolve) => {
    const solPath = getExerciseSolutionPath(exercise)
    const solDir = path.dirname(solPath)
    const solFile = path.basename(solPath)

    // Run test.mjs solutionDir exerciseName
    const child = spawn('node', [TEST_RUNNER, solDir, exercise.name], {
      cwd: __dirname,
      env: process.env,
    })

    let stdout = ''
    let stderr = ''

    child.stdout.on('data', (d) => { stdout += d.toString() })
    child.stderr.on('data', (d) => { stderr += d.toString() })

    child.on('close', (code) => {
      resolve({
        success: code === 0,
        output: stdout.trim() || stderr.trim(),
        code,
      })
    })
  })
}

async function watchMode() {
  const exercises = getAllExercises()
  const state = loadState()
  let currentIndex = state.currentIndex || 0

  if (currentIndex < 0 || currentIndex >= exercises.length) {
    currentIndex = 0
  }

  let isTesting = false
  let currentWatcher = null

  async function renderCurrentExercise() {
    printBanner()
    const exercise = exercises[currentIndex]
    const completedSet = new Set(state.completed)
    printProgressBar(completedSet.size, exercises.length)

    const isDone = completedSet.has(exercise.id)
    const statusBadge = isDone
      ? `${styles.bgGreen} DONE ${styles.reset}`
      : `${styles.bgRed} TODO ${styles.reset}`

    console.log(`${styles.bold}Exercise [${currentIndex + 1}/${exercises.length}]:${styles.reset} ${styles.cyan}${styles.bold}${exercise.name}${styles.reset}  ${statusBadge}`)
    console.log(`${styles.dim}Category: ${exercise.category} | Solution: ${getExerciseSolutionPath(exercise)}${styles.reset}\n`)

    console.log(`${styles.bold}--- Instructions Preview ---${styles.reset}`)
    console.log(`${styles.dim}${getReadmeInstructions(exercise)}${styles.reset}\n`)

    console.log(`${styles.bold}--- Test Status ---${styles.reset}`)
    console.log(`${styles.yellow}Running tests...${styles.reset}`)

    isTesting = true
    const result = await runSingleTest(exercise)
    isTesting = false

    if (result.success) {
      console.log(`${styles.green}${styles.bold}[PASS]:${styles.reset} All tests passed for ${exercise.name}!`)
      if (!completedSet.has(exercise.id)) {
        completedSet.add(exercise.id)
        state.completed = Array.from(completedSet)
        saveState(state)
        console.log(`${styles.green}[SUCCESS] Exercise completed! Progress saved.${styles.reset}`)
      }
    } else {
      console.log(`${styles.red}${styles.bold}[FAIL]:${styles.reset} Tests failing for ${exercise.name}:`)
      console.log(`${styles.red}${result.output}${styles.reset}`)
    }

    console.log(`\n${styles.bold}Commands:${styles.reset} [${styles.cyan}n${styles.reset}]ext | [${styles.cyan}p${styles.reset}]rev | [${styles.cyan}h${styles.reset}]int | [${styles.cyan}r${styles.reset}]erun | [${styles.cyan}l${styles.reset}]ist | [${styles.cyan}q${styles.reset}]uit`)

    setupWatcher(exercise)
  }

  function setupWatcher(exercise) {
    if (currentWatcher) {
      currentWatcher.close()
      currentWatcher = null
    }

    const solPath = getExerciseSolutionPath(exercise)
    if (fs.existsSync(solPath)) {
      let debounceTimeout = null
      currentWatcher = fs.watch(solPath, (eventType) => {
        if (debounceTimeout) clearTimeout(debounceTimeout)
        debounceTimeout = setTimeout(() => {
          if (!isTesting) {
            renderCurrentExercise()
          }
        }, 300)
      })
    }
  }

  // Keypress listener
  readline.emitKeypressEvents(process.stdin)
  if (process.stdin.isTTY) {
    process.stdin.setRawMode(true)
  }

  process.stdin.on('keypress', (str, key) => {
    if (key.ctrl && key.name === 'c') {
      process.exit()
    }

    const char = str.toLowerCase()
    if (char === 'n') {
      if (currentIndex < exercises.length - 1) {
        currentIndex++
        state.currentIndex = currentIndex
        saveState(state)
        renderCurrentExercise()
      }
    } else if (char === 'p') {
      if (currentIndex > 0) {
        currentIndex--
        state.currentIndex = currentIndex
        saveState(state)
        renderCurrentExercise()
      }
    } else if (char === 'r') {
      renderCurrentExercise()
    } else if (char === 'h') {
      const ex = exercises[currentIndex]
      console.log(`\n${styles.yellow}${styles.bold}HINT:${styles.reset} ${ex.hint || 'No specific hint available.'}`)
    } else if (char === 'l') {
      listExercises()
    } else if (char === 'q') {
      console.log('\nGoodbye! Happy coding!')
      process.exit(0)
    }
  })

  await renderCurrentExercise()
}

function listExercises() {
  printBanner()
  const exercises = getAllExercises()
  const state = loadState()
  const completedSet = new Set(state.completed)

  printProgressBar(completedSet.size, exercises.length)

  console.log(`${styles.bold}Available Exercises:${styles.reset}\n`)
  exercises.forEach((ex, idx) => {
    const isDone = completedSet.has(ex.id)
    const icon = isDone ? `${styles.green}[X]${styles.reset}` : `${styles.red}[ ]${styles.reset}`
    const isCurrent = idx === state.currentIndex ? `${styles.cyan}> ${styles.reset}` : '  '
    console.log(`${isCurrent}${icon} ${String(idx + 1).padStart(3, ' ')}. ${styles.bold}${ex.name.padEnd(28, ' ')}${styles.reset} (${ex.category})`)
  })

  console.log(`\nRun ${styles.cyan}jslings watch${styles.reset} to begin practicing!`)
}

async function verifyAll() {
  printBanner()
  const exercises = getAllExercises()
  const state = loadState()
  const completedSet = new Set(state.completed)

  console.log(`${styles.bold}Verifying all exercises...${styles.reset}\n`)

  let passedCount = 0
  for (const [idx, ex] of exercises.entries()) {
    process.stdout.write(`Checking [${idx + 1}/${exercises.length}] ${ex.name.padEnd(30, ' ')} `)
    const res = await runSingleTest(ex)
    if (res.success) {
      console.log(`${styles.green}PASS${styles.reset}`)
      completedSet.add(ex.id)
      passedCount++
    } else {
      console.log(`${styles.red}FAIL${styles.reset}`)
    }
  }

  state.completed = Array.from(completedSet)
  saveState(state)

  console.log(`\n${styles.bold}Summary:${styles.reset} ${passedCount}/${exercises.length} passed.`)
}

function showHint(name) {
  const exercises = getAllExercises()
  const state = loadState()
  let target = exercises[state.currentIndex || 0]

  if (name) {
    const found = exercises.find(e => e.name === name || e.id === name)
    if (found) target = found
  }

  console.log(`\n${styles.yellow}${styles.bold}HINT for ${target.name}:${styles.reset} ${target.hint}\n`)
}

function resetExercise(name) {
  const exercises = getAllExercises()
  const state = loadState()
  let target = exercises[state.currentIndex || 0]

  if (name) {
    const found = exercises.find(e => e.name === name || e.id === name)
    if (found) target = found
  }

  const solPath = getExerciseSolutionPath(target)
  const content = `// Exercise: ${target.name}\n// Complete the function below to satisfy the tests!\n\n`
  fs.writeFileSync(solPath, content, 'utf8')
  console.log(`${styles.green}Reset solution for ${target.name} at ${solPath}${styles.reset}`)
}

async function main() {
  const args = process.argv.slice(2)
  const command = args[0] || 'watch'

  switch (command) {
    case 'watch':
      await watchMode()
      break
    case 'list':
      listExercises()
      break
    case 'verify':
      await verifyAll()
      break
    case 'hint':
      showHint(args[1])
      break
    case 'reset':
      resetExercise(args[1])
      break
    case 'test':
    case 'run':
      if (args[1]) {
        const exercises = getAllExercises()
        const ex = exercises.find(e => e.name === args[1] || e.id === args[1])
        if (ex) {
          const res = await runSingleTest(ex)
          console.log(res.output)
          process.exit(res.success ? 0 : 1)
        } else {
          console.error(`Exercise ${args[1]} not found.`)
          process.exit(1)
        }
      } else {
        await watchMode()
      }
      break
    default:
      console.log(`Unknown command: ${command}`)
      console.log('Usage: jslings [watch|list|verify|hint|reset|run <name>]')
  }
}

main()
