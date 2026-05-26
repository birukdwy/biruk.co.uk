# biruk.co.uk — One-Page Professional Site

**Date:** 2026-05-27
**Status:** Approved

## Goal

A fast, single-page professional presence for Biruk Dawit in a terminal-dark
aesthetic. Static files, no build step, deployable to any static host.

## Constraints & Decisions

- **Purpose:** Professional presence / CV.
- **Build:** Plain static `HTML` / `CSS` / `JS`. No build step, no framework, no
  dependencies beyond one web font.
- **Visual direction:** "Terminal Dark" — dark background, monospace, green/blue
  accents, terminal-inspired hero.
- **Font:** JetBrains Mono via Google Fonts, with a system-monospace fallback.
  This is the only external dependency.
- **Contact:** email only (`hello@biruk.co.uk`) — no social links for now.
- **Responsive & accessible:** mobile-first, good contrast, honours
  `prefers-reduced-motion`.

## Files

```
index.html      semantic markup, all content
styles.css      terminal-dark design system
script.js       small touches (blinking cursor, smooth-scroll, current year)
favicon.svg     simple terminal-prompt glyph
README.md       how to run & deploy
```

## Design System

- Background `#0d1117`, surface `#161b22`, text `#e6edf3`, muted `#8b949e`.
- Accents: green `#7ee787`, blue `#58a6ff`.
- Max content width ~720px, generous whitespace.
- Section dividers styled as code comments (e.g. `// about`).

## Page Sections (single scrolling page, anchor nav)

1. **Hero** — `$ whoami` prompt → `Biruk Dawit`, `> Software Engineer`, tagline
   "Builder of software — from backend systems to the browser.", blinking
   cursor, primary email CTA.
2. **About** — 1–2 honest, editable lines expanding "builder of software";
   notes current role at Syndigo (formerly Taggstar).
3. **Experience** — vertical timeline: Syndigo (formerly Taggstar) then
   Barclays. Title "Software Engineer". Dates left as clearly-marked
   placeholders for the owner to fill.
4. **Skills** — tag grid grouped: Languages (Java, Python), Frontend (HTML, CSS,
   JavaScript), Cloud (AWS).
5. **Projects** — 2–3 styled placeholder cards, ready to hold real projects.
6. **Contact** — `hello@biruk.co.uk`.

## Interactions

Minimal and tasteful: blinking hero cursor, smooth-scroll anchor nav,
auto-updating copyright year. No frameworks, no heavy JS. All motion disabled
under `prefers-reduced-motion`.

## Testing / Verification

The page is presentational static markup with no business logic, so unit tests
do not apply (per the "say so explicitly" rule). Verification instead:

- Page renders with no browser console errors.
- Layout holds at mobile (~375px) and desktop (~1280px) widths.
- All anchor links resolve to their sections.
- Colour contrast meets WCAG AA for body text.

## Out of Scope (YAGNI)

- Blog / multiple pages, CMS, analytics, contact form backend, social links.
  These can be added later if the site grows.
