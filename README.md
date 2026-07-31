# Portfolio - Aguinaldo

Developer portfolio built with React and Vite, featuring a dark, code editor inspired design.

## Tech Stack

**Core**
- React 18
- Vite 5 (build tool and dev server)
- JavaScript (ES modules)

**Styling**
- Plain CSS with custom properties (design tokens for color, type and spacing)
- No CSS framework, fully custom component styles
- Responsive layout, from mobile up to desktop
- Fonts: JetBrains Mono (headings and code UI) and Inter (body text), loaded via Google Fonts

**Structure and patterns**
- Component based architecture (Header, Hero, ProjectsSection, ProjectCard, Footer)
- Content driven by a single data file (`src/data/projects.js`), so projects can be added or updated without touching component code
- Conditional rendering for empty states (a project card without a link or image automatically shows a placeholder state)

**Tooling**
- ESM based Vite config
- `npm run build` produces a static `dist/` folder, deployable to any static host (Vercel, Netlify, GitHub Pages)

## Live demo

Add your deploy link here once published.

## Screenshot

Add a screenshot or GIF of the site here.

## Getting started

```bash
npm install
npm run dev
```

Open the link shown in the terminal (usually `http://localhost:5173`).

## Where to edit

- **`src/data/projects.js`** is the only file you will likely touch on a regular basis.
  Fill in `deployUrl`, `githubUrl` and `image` for each project. Leave a field as `""` (empty)
  until it is ready: the card automatically falls back to a "add link" / "add image" placeholder state.
- **Project images**: place files in `public/projects/` and reference them in `image` as
  `/projects/file-name.png`.
- **`profile`** (same `projects.js` file) holds your name, bio, tech stack and contact links
  (GitHub, LinkedIn, email).
- **Colors and fonts**: centralized as design tokens in `src/index.css` (`--accent-cyan`,
  `--accent-blue`, `--font-mono`, `--font-sans`, and so on).

## Project structure

```
src/
  components/     Header, Hero (animated code editor), ProjectsSection, ProjectCard, Footer
  data/
    projects.js   your projects and profile info live here
  index.css        design tokens (colors, fonts, spacing)
  App.jsx
```

## Production build

```bash
npm run build
```

Outputs a static `dist/` folder, ready to deploy to Vercel, Netlify or GitHub Pages.

## Suggested next steps

- [ ] Fill in `deployUrl` and `githubUrl` for each project in `src/data/projects.js`
- [ ] Add screenshots to `public/projects/`
- [ ] Fill in `profile.links` (GitHub, LinkedIn, email)
- [ ] Replace the "New project" slots with upcoming real projects, or remove them
- [ ] Deploy (Vercel is the fastest path: `npx vercel`)
