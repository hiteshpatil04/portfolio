# Hitesh Patil — Portfolio

A modern, responsive, dark-themed personal portfolio built with React + Vite.

## Stack
React.js (Vite), Bootstrap 5 / React Bootstrap, React Router, Framer Motion, React Icons, Typed.js.

## Run locally
```bash
npm install
npm run dev
```

## Build for production
```bash
npm run build
```
Output goes to `dist/` — deploy directly to Vercel, Netlify, or GitHub Pages.

## Notes
- Fully frontend-only: the contact form does not call a backend; it shows a success
  notification on submit (see `src/components/Contact.jsx`).
- Replace `public/resume.pdf` with the real resume file for the "Download Resume" button.
- Portfolio content (skills, projects, achievements, certificates, education, socials)
  lives in `src/data/` — edit those files to update content without touching components.
- Includes the "Multi-Agent VC Analyst" project as the featured first project in
  `src/data/projects.js`.
