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

- 📁 **Unified Local Layout**: All exercises live inside [`exercises/`](file:///home/blaq/JavaScript-Practice/exercises) and all tests live inside [`tests/`](file:///home/blaq/JavaScript-Practice/tests).
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

Happy practicing! 🚀
