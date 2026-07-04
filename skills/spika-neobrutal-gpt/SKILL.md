---
name: spika-neobrutal-gpt
description: Strict GPT and Codex-oriented spikalabs Neo-brutal frontend skill. Requires a design plan, token-first implementation, complete file output, no placeholders, and hard checks against generic SaaS, glass, gradients, and soft shadows.
---

# spikalabs Neo-brutal GPT Skill

You are implementing the spikalabs Neo-brutalist system. Be direct, complete, and production-minded.

## 1. Mandatory design plan

Before writing code, output:

```xml
<design_plan>
  <read>...</read>
  <tokens>...</tokens>
  <layout>...</layout>
  <components>...</components>
  <motion>...</motion>
  <risks>...</risks>
</design_plan>
```

Keep it short, then implement. Do not ask for clarification unless the requested outcome is impossible to infer.

## 2. Non-negotiable style

Use the spikalabs reference language:

- Paper background: `#edeff1`.
- Ink text, borders, and shadows: `#1c1c1e`.
- Primary purple: `#6200ea`.
- Accent surfaces: yellow `#ffe566`, cyan `#7ee8fa`, pink `#ff8fab`, lime `#b8f397`.
- spikalabs symbol: use `assets/brand/spikalabs-symbol.svg` for brand marks; preserve the purple angular core, black counter-shape, and pixel squares.
- 2px black borders.
- Hard shadows: 3px, 5px hover, 6px large frame.
- Space Mono for UI voice.
- Tactile hover and active states.

## 3. Output discipline

Never produce:

- Placeholder code.
- TODO comments.
- `...` standing in for omitted implementation.
- Skeleton-only files when the user asked for complete files.
- Partial component sets.
- Fake testimonials, fake logos, alternate spikalabs marks, or fake dashboard rows unless the user requested demo content.

## 4. Implementation order

1. Add tokens.
2. Add shared primitives.
3. Build layout shell.
4. Build sections.
5. Add interactions.
6. Add responsive and focus states.
7. Remove conflicting old styles.
8. Verify final diff mentally before responding.

## 5. Required primitives

Implement or map these in every project:

- `btn-brutal`.
- `card-brutal`.
- `section-label-brutal`.
- `brutal-frame`.
- `hero-grid`.
- `nav-link-brutal` or equivalent.
- `brand-mark` or equivalent symbol tile when a spikalabs logo is needed.
- Focus visible ring.
- Reduced-motion guard.

## 6. Hero rules

The hero must not look like a default template.

Use at least three of these:

- Grid background.
- Section label with purple fill.
- Split copy and framed visual.
- Bracketed mono metadata.
- Accent block behind or beside one key phrase.
- CTA cluster with tactile buttons.
- Bordered proof or update strip below the hero.

## 7. Banned visual defaults

- Gradient mesh hero.
- Glass panels.
- Soft gray shadow cards.
- Border-gray-200 structural borders.
- Rounded pill everything.
- Lucide icon row as the main design idea.
- Three identical feature cards repeated section after section.
- Decorative status dots.
- Scroll-down cues.
- Alternate spikalabs logos that ignore the provided symbol.

## 8. Accessibility checks

- Every interactive element has visible focus.
- Text contrast is high on all accent backgrounds.
- Tap targets are comfortable.
- Reduced-motion path exists.
- Heading order is semantic.
- Buttons, links, and informative logo images have accessible names.

## 9. Final response checklist

When finishing, include a concise summary of:

- Files changed.
- Tokens or primitives added.
- Sections converted.
- Verification performed.

Do not say the work is complete unless the requested files are actually implemented.
