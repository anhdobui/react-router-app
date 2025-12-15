#Set up prettier eslint

```bash
npm i prettier @eslint/js globals eslint-plugin-react-hooks eslint-plugin-react-refresh typescript-eslint eslint -D
```

.editorconfig

```
[*]
indent_size = 2
indent_style = space
```

.prettierrc

```
{
  "arrowParens": "always",
  "semi": false,
  "trailingComma": "none",
  "tabWidth": 2,
  "endOfLine": "auto",
  "useTabs": false,
  "singleQuote": true,
  "printWidth": 120,
  "jsxSingleQuote": true
}
```

.prettierignore

```
node_modules/
dist/
build/
.react-router/
```

eslint.config.js

```
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist', 'node_modules', 'build', '.react-router']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser
    }
  }
])
```

package.json
"scripts": {
...
"start:csr": "vite preview",
"prettier": "prettier --check .",
"prettier:fix": "prettier --write .",
"lint": "eslint . --ext .ts,.tsx",
"lint:fix": "eslint . --ext .ts,.tsx --fix"
},

vite.config.ts
export default defineConfig({
css: {
devSourcemap: true
},
preview: {
port: 3000
},
server: {
port: 3000
},
plugins: [tailwindcss(), reactRouter(), tsconfigPaths()]
})
set up rule eslint:
export default defineConfig([
globalIgnores(['dist']),
{
...
rules: {
'react-refresh/only-export-components': 'off',
'no-empty-pattern': 'off'
}
}
])

Extentions:
ESLint
Prettier - Code formatter

Setting:
Format On Save:true
JavaScript › Preferences: Import Module Specifier : non-relative
TypeScript › Preferences: Import Module Specifier : non-relative

Note:
file react-router.config.ts
ssr : true -> script : npm run start
ssr : false -> script : npm run start:csr

# Welcome to React Router!

A modern, production-ready template for building full-stack React applications using React Router.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/remix-run/react-router-templates/tree/main/default)

## Features

- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 📖 [React Router docs](https://reactrouter.com/)

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ using React Router.
