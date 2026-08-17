# My Portfolio

The personal site of George&#8209;Paraskevas Stefanopoulos, a web developer based in
Chalkida, Greece. Editorial layout, four sections, no UI library — plain React and
hand-written CSS.

**Live:** https://destegio.github.io/My-Portofolio/

## What is in it

| Section | What it holds |
| --- | --- |
| Home | Intro, a typing line, a scrolling list of the stack and a live clock |
| Resume | Timeline of roles, stack, education, training and languages |
| Projects | Filterable list of the work, tagged by technology |
| Contact | A front-end only form, the email address and the profile links |

A few things worth knowing about the build:

- **The accent colour is a CSS variable.** The picker in the sidebar sets `--accent`
  on the root container, and the whole page repaints from there — see
  [`src/App.js`](src/App.js) and [`src/data/accents.js`](src/data/accents.js).
- **Phones get a different shell.** Under 700px the sidebar splits into a sticky
  header and a fixed bottom bar, so the menu stays under a thumb. It is all in the
  media queries at the end of [`src/index.css`](src/index.css) — no separate
  components.
- **Projects can be link-less.** Work built for someone else has no public
  repository, so [`ProjectCard`](src/components/ProjectCard.js) renders a plain card
  instead of a link and marks it as not public. The filter list is derived from the
  projects themselves, so it can never offer a filter that matches nothing.
- **The home glow follows the mouse** by writing a transform straight to the
  element. Going through state re-rendered the section on every mouse move, which
  made it stutter.

## Running it

```bash
npm install
npm start      # http://localhost:3000/My-Portofolio
npm run build  # production build into build/
```

Content lives in [`src/data/`](src/data/) — the links and email in `profiles.js`,
the technologies in `stack.js`, the accent options in `accents.js`. The resume
entries and the project list are constants at the top of their own components.

## Structure

```
src/
  App.js               section switching and the accent state
  index.css            every style in the project
  components/
    NavigationPanel.js sidebar on desktop, header + bottom bar on phones
    Home.js            hero, marquee, mouse-following glow
    TypingEffect.js    the line under the title
    Clock.js           live clock, pinned to Athens time
    Resume.js          timeline, stack, education, training, languages
    Projects.js        project list and the technology filters
    ProjectCard.js     one project, linked or not
    Contact.js         form, email copy button, profile links
  data/                profiles, stack, accent colours
```

## Deploying

```bash
npm run deploy
```

That builds the site and pushes the `build/` folder to the `gh-pages` branch with
the [gh-pages](https://www.npmjs.com/package/gh-pages) package. GitHub Pages has to
be pointed at that branch — Settings → Pages → Source: **Deploy from a branch** →
`gh-pages` → `/ (root)`. The `homepage` field in `package.json` is what makes the
asset paths work from the `/My-Portofolio/` subfolder.

## Still to do

- [ ] Add the CV as `public/george-stefanopoulos-cv.pdf`, which is where the
      download button already points
- [ ] Replace the striped placeholders with real project screenshots
- [ ] Wire the contact form to something that actually sends mail
