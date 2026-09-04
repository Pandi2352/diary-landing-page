# Diary Company Platform

A modern web application scaffolded with **Vite**, configured with the official **Tailwind CSS v4** plugin (`@tailwindcss/vite`), and powered by **Three.js** interactive 3D graphics.

---

## 🛠️ Tech Stack & Dependencies

- **Framework**: [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Dev Server**: [Vite](https://vite.dev)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) with `@tailwindcss/vite`
- **3D Graphics Engine**: [Three.js](https://threejs.org/) + `@types/three`
- **Icons**: [lucide-react](https://lucide.dev)

---

## 🚀 Setup & Commands Run

### 1. Project Scaffolding
```bash
npm create vite@latest . -- --template react-ts
npm install
```

### 2. Tailwind CSS v4 Installation
```bash
npm install tailwindcss @tailwindcss/vite
```

### 3. Three.js & Icons Installation
```bash
npm install three @types/three lucide-react
```

### 4. Vite Configuration (`vite.config.ts`)
```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
```

### 5. Tailwind CSS Import (`src/index.css`)
```css
@import "tailwindcss";
```

---

## 💻 Available Scripts

- `npm run dev`: Start local development server with instant HMR.
- `npm run build`: Type-check with TypeScript and create production bundle in `dist/`.
- `npm run preview`: Locally preview the production build.
- `npm run lint`: Run code linter.
