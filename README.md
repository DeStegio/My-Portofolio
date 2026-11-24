# My Portfolio

The personal site of George&#8209;Paraskevas Stefanopoulos, a web developer based in
Chalkida, Greece. Editorial layout, four sections, no UI library — plain React and
hand-written CSS.

**Live:** https://gstefanopoulos.com/

## What is in it

| Section | What it holds |
| --- | --- |
| Home | Intro, a typing line, a scrolling list of the stack and a live clock |
| Resume | Timeline of roles, stack, education, training and languages |
| Projects | One unified list of applications, professional and academic work, with descriptions, technologies and available project links |
| Contact | A form that emails me through Web3Forms, the email address and the profile links |

A few things worth knowing about the build:

- **The accent colour is a CSS variable.** The picker in the sidebar sets `--accent`
  on the root container, and the whole page repaints from there — see
  [`src/App.jsx`](src/App.jsx) and [`src/data/accents.js`](src/data/accents.js).
- **Phones get a different shell.** Under 700px the sidebar splits into a sticky
  header and a fixed bottom bar, so the menu stays under a thumb. It is all in the
  media queries at the end of [`src/index.css`](src/index.css) — no separate
  components.
- **Projects share one data source.** [`projects.js`](src/data/projects.js) holds
  descriptions, technologies, features and optional live/source links. Set
  Projects appear together in data order using the same
  [`ProjectCard`](src/components/ProjectCard.jsx) presentation.
  External actions open new tabs with `noopener noreferrer`; apps are never embedded.
- **The home glow follows the mouse** by writing a transform straight to the
  element. Going through state re-rendered the section on every mouse move, which
  made it stutter.

## Running it

Requires Node.js 20.19+ (20.x) or 22.12+. Built with React 19 and Vite.

```bash
npm install
npm start      # http://localhost:3000/
npm run build  # production build into build/
npm run preview # preview the production build locally
```

Content lives in [`src/data/`](src/data/) — the links and email in `profiles.js`,
the technologies in `stack.js`, projects in `projects.js`, and the accent options
in `accents.js`. Resume entries live in the Resume component.

Projects use a text-only presentation without image previews. Betit's database
is no longer supported, so its card explicitly identifies database-dependent
features as unavailable and describes the original implementation. Its source
repository is private, so no public source link is shown. Oddly Alive links to
its public GitHub repository.

## Structure

```
src/
  index.jsx            React entry point
  App.jsx               section switching and the accent state
  index.css            every style in the project
  components/
    NavigationPanel.jsx sidebar on desktop, header + bottom bar on phones
    Home.jsx            hero, marquee, mouse-following glow
    TypingEffect.jsx    the line under the title
    Clock.jsx           live clock, pinned to Athens time
    Resume.jsx          timeline, stack, education, training, languages
    Projects.jsx        unified project list and contact action
    ProjectCard.jsx     shared presentation for every project
    Contact.jsx         form, email copy button, profile links
  data/                projects, profiles, stack, accent colours
```

## Hosting

Production is hosted on Vercel at the root of the custom domain. The existing
Vite configuration keeps `base: '/'` and `build.outDir: 'build'`; Vercel should
use `npm run build` with output directory `build`. No extra router rewrites or
deployment configuration are needed for the existing section-based navigation.

The legacy `deploy` / `predeploy` scripts are retained for compatibility with the
old GitHub Pages workflow; they publish to GitHub Pages, not Vercel.

## Validation

`npm run build` is the configured production check. There are currently no lint
or test scripts. Browser regression checks should cover all four sections at
desktop, tablet and phone widths, keyboard focus after navigation, accent
selection, the CV download, project status notices, and the project destinations.
Mock the Web3Forms endpoint when checking contact success and error states so
validation does not send real email.
