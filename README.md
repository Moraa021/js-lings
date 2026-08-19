# JSLings - Interactive JavaScript Practice Environment

Welcome to **JSLings**, an interactive, Rustlings-inspired practice environment designed for mastering JavaScript directly inside VS Code and your terminal!

---

## Quick Start

To launch the interactive exercise watcher:

```bash
npm start
# or
npm run watch
# or
npx jslings
```

Or run the default VS Code test task with **`Ctrl+Shift+B`** (Cmd+Shift+B on macOS)!

---

## Exercise Progression & Concept Categories

Exercises are organized in concept subdirectories within [`exercises/`](file:///home/blaq/JavaScript-Practice/exercises). Solving exercises follows a progressive order, building from foundational concepts up to multi-concept capstones:

1. **`01_primitives_and_types`**: Fundamental types, booleans, numbers, strings, primitive checks, and type conversions.
2. **`02_control_flow_and_loops`**: Conditionals, loops (`for`, `while`), iterations, and elementary math recursion.
3. **`03_data_structures_arrays_and_objects`**: Array transformations, object property manipulation, nested structures, and deep access.
4. **`04_functional_programming`**: Higher-order functions, `map`, `filter`, `reduce`, currying, and pure pipeline composition.
5. **`05_async_and_promises`**: Promises, `async`/`await`, timers, retries, and race conditions.
6. **`06_algorithms_and_grid_processing`**: Sorting algorithms, grid searching, matrix validation, regex, and string parsing.
7. **`07_capstones_and_multi_concept`**: Advanced multi-concept capstones combining objects, functional pipelines, async loops, proxies, and DOM interactions.

---

## Features

- **Progressive Concept Order**: Exercises are structured sequentially by difficulty and target concept.
- **Dedicated Capstone Category**: Multi-concept exercises are isolated in `07_capstones_and_multi_concept`.
- **Live File Watcher**: Automatically re-runs tests instantly whenever you save your solution file.
- **Progress Tracker**: Visual completion progress bar saved in real-time.
- **Interactive Hints & Reset**: Get instant hints with `h` or reset exercises with `r`.
- **VS Code Integration**: Built-in `.vscode/tasks.json` and `.vscode/settings.json` for seamless developer experience.

---

## Commands Reference

| Command | Action |
| --- | --- |
| `npm start` / `npm run watch` | Launch interactive watcher mode |
| `npm run list` | List all exercises with completion status (`[X]` / `[ ]`) |
| `npm run verify` | Run tests on all exercises and output a full report |
| `npm run test -- <name>` | Test a specific exercise (e.g. `npm run test -- factorial`) |
| `npm run hint -- <name>` | View hint for an exercise |
| `npm run reset -- <name>` | Reset an exercise's solution file to its starter template |

---

## Interactive Watcher Controls

While `jslings watch` is running in your terminal:

- **`n`**: Move to the **Next** exercise
- **`p`**: Move to the **Previous** exercise
- **`h`**: Display **Hint** for the current exercise
- **`r`**: **Re-run** current tests
- **`l`**: **List** all exercises
- **`q`**: **Quit** watching

---

Happy practicing!
