# AVAI Project Context

AVAI is a static Astro landing site for a technical software consulting brand. The site presents operational efficiency, custom software, automation, dashboards, ERP/MES systems, and measurable business outcomes.

## Stack

- Framework: Astro
- Styling: SCSS imported from `src/scss/main.scss`
- Interactions: vanilla JavaScript from `public/js`
- Output: static site
- Deploy target: GitHub Pages with custom domain `avai.cl`

## Structure

- `src/pages`: route entrypoints.
- `src/layouts/BaseLayout.astro`: global document shell, styles and scripts.
- `src/components`: shared UI such as header, footer and WhatsApp widget.
- `src/sections`: page-specific content sections grouped by page.
- `src/scss/base`: fonts, reset, variables and utilities.
- `src/scss/components`: reusable visual systems such as buttons, cards, drawer and tabs.
- `src/scss/layout`: page-level layout styles.
- `public/assets`: images and icons served directly.
- `public/js`: client-side behaviors.

## Working Rules

- Preserve the existing technical, industrial and concise brand tone.
- Keep Astro components static unless client-side interactivity is necessary.
- Prefer small, focused edits over broad rewrites.
- Keep reusable layout or design changes in SCSS instead of inline styles when practical.
- Use `import.meta.env.BASE_URL` or existing path helpers for public assets and internal links.
- Avoid changing generated `dist` files unless the user explicitly asks for production output updates.

## Quality Priorities

- Strong CTA reliability: WhatsApp actions and navigation should work after Astro client navigation.
- SEO basics: page-specific title, description, canonical and social metadata.
- Accessibility: semantic headings, button labels, keyboard support, focus states and meaningful alt text.
- Performance: image dimensions, lazy loading where appropriate, minimal duplicate event listeners.
- Responsive behavior: verify desktop, tablet and mobile layouts.
