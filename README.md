# 🎮 Tic Tac Toe Game (React)

A modern and interactive Tic Tac Toe game built with **React.js** and **Tailwind CSS**, featuring move history tracking and winner/draw detection.

---

## 🚀 Live Demo
> (https://fahadfive.vercel.app/)

---

## 🛠 Tech Stack
- React.js (Functional Components)
- JavaScript (ES6+)
- Tailwind CSS
- React Hooks (`useState`)
- Component-based Architecture

---

## ✨ Features
- Interactive Tic Tac Toe gameplay
- Player turn indicator (X / O)
- Automatic winner detection
- Draw match detection
- Match history with time-travel functionality
- Jump to any previous move
- Reset and replay game option
- Clean, modern, and responsive UI
- Smooth hover and click animations

---

## 📁 Component Structure
```
└── 📁tic-tac-toe
    └── 📁public
        ├── vite.svg
    └── 📁src
        └── 📁assets
            ├── react.svg
        ├── App.css
        ├── App.jsx
        ├── Game.jsx
        ├── index.css
        ├── main.jsx
    ├── .gitignore
    ├── eslint.config.js
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── README.md
    └── vite.config.js
```
## 🏗 Architecture Diagram

<details>
<summary>Click to expand architecture diagram</summary>

```mermaid
flowchart TD
  %% =========================
  %% Dev / Build
  %% =========================
  Dev["Developer Workstation"]:::external
  Browser["User Browser"]:::external
  StaticHost["Static Web Host<br>(Vercel / Netlify / Cloudflare)"]:::external

  subgraph "Build & Dev Tooling"
    direction TB
    Repo["GitHub Repo"]:::group
    Pkg["package.json"]:::config
    ViteCfg["vite.config.js"]:::config
    Main["src/main.jsx"]:::source
    App["src/App.jsx"]:::source
    Game["src/Game.jsx"]:::source
  end

  Dev -->|"edit code"| Repo
  Repo -->|"npm run dev"| DevServer["Vite Dev Server"]:::tool
  DevServer ==>|"serve"| Browser
  Repo -->|"npm run build"| BuildStep["vite build"]:::tool
  BuildStep -->|"emits"| Dist["Built Static"]:::artifact
  Dist -->|"deploy"| StaticHost
  StaticHost ==>|"HTTP GET"| Browser

  Browser -->|"loads_bundle"| Main
  Main -->|"renders"| App

  %% =========================
  %% UX Flow
  %% =========================
  App -->|"contains"| Game
  Game -->|"board state"| BoardState[("state: squares[], history[], xIsNext")]:::state
  Game -->|"renders UI"| BoardUI["Tic Tac Toe Board"]:::ui
  BoardUI -.->|"user click"| Game
  Game -->|"updates state"| BoardState

  classDef external fill:#f3f4f6,stroke:#6b7280,color:#111827
  classDef group fill:#eef2ff,stroke:#4f46e5,color:#111827
  classDef config fill:#fef3c7,stroke:#b45309,color:#111827
  classDef tool fill:#e5e7eb,stroke:#374151,color:#111827
  classDef source fill:#dbdffe,stroke:#1d4ed8,color:#0b1220
  classDef state fill:#dcfce7,stroke:#166534,color:#0b1220
  classDef ui fill:#cffafe,stroke:#0891b2,color:#0b1220
  classDef artifact fill:#e0f2fe,stroke:#0369a1,color:#0b1220
```

</details>
