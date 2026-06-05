# Full Stack Roadmap

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=fff)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=fff)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE.md)

A curated collection of vanilla frontend projects, exercises, and experiments built while progressing through a full-stack learning path.

---

## Structure

```
fullstackRoadmap/
├── projects/           # Standalone mini-applications
│   ├── tournamentRunner/   # Tournament bracket manager
│   ├── quizApp_v1/         # Quiz app (baseline)
│   ├── quizApp_v2/         # Quiz app (redesigned)
│   ├── ticTacToe/          # Tic-Tac-Toe game
│   ├── TodoList/           # Task manager
│   ├── navigationDashboard/# UI dashboard sidebar
│   ├── imageChanger_proj2/ # Image switcher widget
│   ├── proj1/              # ESLint + Prettier sandbox
│   ├── project1/           # Basic JS app
│   ├── secondproject_may11/# Multi-page layout
│   └── personalweb/        # Placeholder
├── practice/           # Topic-focused drills
│   ├── html/               # Semantic markup, forms, navs
│   ├── css/                # Flexbox, grid, layout, borders
│   ├── javascript/         # Language fundamentals, async, DOM
│   ├── dOM/                # Event listeners, dynamic content
│   ├── freecodeCamp/       # FreeCodeCamp exercises
│   ├── harryDev/           # Tutorial companion files
│   ├── responsiveNav/      # Mobile-friendly nav patterns
│   ├── sudoclass/          # Pseudo-class experiments
│   └── tutRepublic/        # Tutorial Republic drills
├── assets/             # Shared static resources
│   ├── images/
│   └── icons/
├── docs/               # Reference & troubleshooting
│   ├── basics.md           # Tournament Runner architecture guide
│   ├── gitSolver.md        # Git history rewrite post-mortem
│   └── history-memo/       # Personal dev notes
├── scripts/            # Utility scripts
│   └── clean.sh            # Large-file finder
├── LICENSE.md
└── README.md
```

---

## Projects

| Project | Description |
|---|---|
| [**tournamentRunner**](projects/tournamentRunner/) | Full vanilla-JS tournament bracket generator with state management, localStorage persistence, and fixture rendering. |
| [**quizApp_v1**](projects/quizApp_v1/) | Dynamic question handling with score tracking and interactive UI. |
| [**quizApp_v2**](projects/quizApp_v2/) | Redesigned quiz app with improved UX. |
| [**ticTacToe**](projects/ticTacToe/) | Two-player browser-based Tic-Tac-Toe. |
| [**TodoList**](projects/TodoList/) | CRUD task manager. |
| [**navigationDashboard**](projects/navigationDashboard/) | Sidebar navigation UI dashboard. |
| [**imageChanger_proj2**](projects/imageChanger_proj2/) | Image switcher with dynamic DOM updates. |
| [**proj1**](projects/proj1/) | ESLint + Prettier configuration sandbox. |
| [**project1**](projects/project1/) | Entry-level JS project. |
| [**secondproject_may11**](projects/secondproject_may11/) | Multi-page HTML/CSS layout. |

---

## Getting Started

```bash
git clone https://github.com/Thorium234/fullstackRoadMap.git
cd fullstackRoadmap
```

Open any `index.html` in a browser — no build step required.  
For live-reload, use the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) VS Code extension:

```bash
code .
# Right-click index.html → Open with Live Server
```

---

## Tech Stack

- **HTML5** — Semantic markup, accessibility, form validation
- **CSS3** — Flexbox, responsive design, pseudo-classes, transitions
- **JavaScript (Vanilla)** — DOM manipulation, event handling, async/await, Fetch API, localStorage, higher-order functions

---

## Repository History

This repo was previously bloated to ~507 MB by accidental commits of PDF, ZIP, and DOCX files.  
Git history was rewritten using `git filter-repo` to remove all large binaries, reducing the repository to ~460 KB.

See [`docs/gitSolver.md`](docs/gitSolver.md) for a full post-mortem.

---

## License

Distributed under the MIT License. See [`LICENSE.md`](LICENSE.md) for details.

---

## Author

**Thorium234** — [GitHub](https://github.com/Thorium234)
