---
name: avai-quality-review
description: Use when reviewing AVAI pages for bugs, accessibility, responsive behavior, SEO gaps, performance issues, event listener problems, or production readiness.
---

# AVAI Quality Review Skill

Use this skill for audits and code reviews of the AVAI landing site.

## Review Priorities

- Functional regressions in navigation, drawer, tabs and WhatsApp CTAs.
- Duplicate event listeners caused by Astro client navigation.
- Broken links, placeholder links and incorrect `BASE_URL` handling.
- Missing SEO metadata or repeated page titles.
- Accessibility issues: unlabeled buttons, weak focus handling, heading order, alt text and keyboard support.
- Performance issues: missing image dimensions, eager loading of non-critical images, oversized assets.
- Mobile layout issues around header, hero, cards, drawers and CTA sections.

## Review Style

- Report findings first, ordered by severity.
- Include file paths and line references when possible.
- Separate confirmed issues from recommendations.
- Keep summaries short and actionable.

## Common Checks

- Footer links should not stay as `href="#"` in production.
- Buttons with JavaScript actions need reliable event binding and accessible labels.
- Images used as decoration can have empty alt text; informative images need meaningful alt text.
- Client-side initializers should be idempotent.
- Generated `dist` output should not be treated as source unless requested.
