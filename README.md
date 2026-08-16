# ⚡ JSLings - Interactive JavaScript Practice Environment

Welcome to **JSLings**, an interactive, Rustlings-inspired practice environment designed for mastering JavaScript directly inside VS Code and your terminal!

---

## 🚀 Quick Start

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

## 🎯 Features

- 🔄 **Live File Watcher**: Automatically re-runs tests instantly whenever you save your solution file.
- 📊 **Progress Bar & Tracker**: Visual completion progress bar saved in real-time.
- 💡 **Interactive Hints & Reset**: Get instant hints with `h` or reset exercises with `r`.
- 📁 **230+ Exercises**: Covers 31 core practice tasks (arrays, objects, algorithms, async, functional programming) + 200+ Piscine subjects!
- 💻 **VS Code Integration**: Built-in `.vscode/tasks.json` and `.vscode/settings.json` for seamless developer experience.

---

## 📜 Commands Reference

| Command | Action |
| --- | --- |
| `npm start` / `npm run watch` | Launch interactive watcher mode |
| `npm run list` | List all exercises with completion status (`[✓]` / `[ ]`) |
| `npm run verify` | Run tests on all exercises and output a full report |
| `npm run test -- <name>` | Test a specific exercise (e.g. `npm run test -- factorial`) |
| `npm run hint -- <name>` | View hint for an exercise |
| `npm run reset -- <name>` | Reset an exercise's solution file to its starter template |

---

## 🎹 Interactive Watcher Controls

While `jslings watch` is running in your terminal:

- **`n`**: Move to the **Next** exercise
- **`p`**: Move to the **Previous** exercise
- **`h`**: Display **Hint** for the current exercise
- **`r`**: **Re-run** current tests
- **`l`**: **List** all exercises
- **`q`**: **Quit** watching

---

## 🛠️ Root Practice Exercises Overview

1. **`js-array-chunk-reversal`**: Reverse elements within array chunks.
2. **`js-bubble-sort-analyzer`**: Bubble sort algorithm with swap & iteration analysis.
3. **`js-character-maker`**: Curried builder for game character attributes.
4. **`js-deep-clone`**: Recursive deep cloning with circular reference safety.
5. **`js-deep-equal`**: Deep structural object & array comparison.
6. **`js-deep-find`**: Dot-notation nested object property retriever.
7. **`js-deep-freeze`**: Deep object immutability.
8. **`js-divisor-finder`**: Find positive divisors of a number.
9. **`js-election-mix`**: Curried filter and map for key-value objects.
10. **`js-even-sum`**: Sum of even numbers up to $n$.
11. **`js-exam-grader`**: Async exam timer and grade accumulator.
12. **`js-factorial`**: Factorial calculation ($n!$).
13. **`js-fibonacci`**: $N$-th Fibonacci number.
14. **`js-final-attempt`**: Async retry wrapper with max attempts limit.
15. **`js-flat-object`**: Flatten object and map values with key transformation counters.
16. **`js-flatten-object`**: Single-level object flattener with array index key paths.
17. **`js-grid-word-finder`**: 2D grid horizontal and vertical word search.
18. **`js-grid-word-finder2`**: Loopless 2D grid word finder returning coordinates.
19. **`js-insertion-sort-analyzer`**: Insertion sort algorithm with step metrics.
20. **`js-nested-array-reverser`**: Reverse inner and outer 2D word arrays.
21. **`js-object-lab`**: Object merger with transform pipeline and conflict tracking.
22. **`js-palindromic-chains`**: Palindromic additive chain finder.
23. **`js-perfect-num`**: Proper divisor sum equality check.
24. **`js-pipeline`**: Pure functional pipeline step recorder.
25. **`js-sentence-pyramid`**: Cumulative word pyramid printer.
26. **`js-sleep-breaker`**: Interruptible sleep promise with async breaker.
27. **`js-snakepath-validator`**: Loopless 2D grid single connected path validator.
28. **`js-swappable-object`**: Dynamic proxy with swappable key-value access.
29. **`js-transform-keys`**: Recursive key transformation function.
30. **`js-trap-object`**: Object proxy logger for get and set operations.
31. **`js-zoo-race`**: Multi-speed animal race simulator using Promise.race.

---

Happy practicing! 🚀
