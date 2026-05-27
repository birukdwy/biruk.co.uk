# biruk.co.uk

Personal one-page site for Biruk Dawit. Plain static `HTML` / `CSS` / `JS` —
no build step, no dependencies (other than the JetBrains Mono web font).

## Run locally

It's a static page — just open the file:

```sh
open index.html
```

…or serve it (handy for testing relative paths / mobile on your network):

```sh
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Edit

All content lives in `index.html`. The About, Experience, Skills and Projects
sections are filled in. One `TODO(biruk)` remains:

- **Contact** — swap the placeholder LinkedIn URL (`linkedin.com/in/REPLACE-ME`)
  for your real profile.

Styling is in `styles.css` (CSS variables for the colour palette live at the
top under `:root`).

## Deploy

Any static host works. Point it at this directory:

- **Cloudflare Pages / Netlify / Vercel** — connect the repo, no build command,
  output directory is the repo root.
- **GitHub Pages** — push to GitHub and enable Pages on the default branch.

Then point the `biruk.co.uk` DNS at your host.

## Design

See `docs/superpowers/specs/2026-05-27-biruk-co-uk-design.md` for the approved
design spec.
