‎day_10/src/main.jsx‎
+12Lines changed: 12 additions & 0 deletions
Original file line number	Diff line number	Diff line change
@@ -0,0 +1,12 @@
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ImageSlider from './ImageSlider.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <ImageSlider/>
  </StrictMode>,
)
‎day_10/vite.config.js‎
+7Lines changed: 7 additions & 0 deletions
Original file line number	Diff line number	Diff line change
@@ -0,0 +1,7 @@
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
‎day_11/.gitignore‎
+24Lines changed: 24 additions & 0 deletions
Original file line number	Diff line number	Diff line change
@@ -0,0 +1,24 @@
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*
node_modules
dist
dist-ssr
*.local
# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
‎day_11/README.md‎
+16Lines changed: 16 additions & 0 deletions

Original file line number	Diff line number	Diff line change
@@ -0,0 +1,16 @@
# React + Vite
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
Currently, two official plugins are available:
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)
## React Compiler
The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).
## Expanding the ESLint configuration
If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project