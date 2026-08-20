---
name: astro-avai
description: Use when editing AVAI Astro files, SCSS modules, public assets, routes, components, sections, or vanilla JS interactions in this landing site.
---

# AVAI Astro Skill

Use this skill for implementation work inside the AVAI Astro project.

## Project Patterns

- Routes live in `src/pages/*.astro` and compose shared layout, header, sections, footer and WhatsApp widget.
- Page content is split under `src/sections/<PageName>/*.astro`.
- Global styles are imported once from `src/layouts/BaseLayout.astro` through `src/scss/main.scss`.
- Public assets are served from `public/assets` and scripts from `public/js`.
- Use `import.meta.env.BASE_URL` when building public asset URLs.

## Implementation Guidance

- Prefer Astro components and static markup for content sections.
- Keep new JavaScript small and colocated in `public/js` if it controls global page behavior.
- Guard client-side initializers against duplicate event binding because the site uses `ClientRouter`.
- Prefer semantic links for navigation and buttons only for actions.
- Avoid broad utility sprawl. If a style is repeated, move it to an existing SCSS module.
- Do not edit `dist` unless explicitly requested.

## Verification

- Run `npm run build` after code or markup changes when feasible.
- Check that navigation, drawer, tabs and WhatsApp interactions still work after route transitions.
