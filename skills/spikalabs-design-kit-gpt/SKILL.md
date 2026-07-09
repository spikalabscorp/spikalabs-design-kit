---
name: spikalabs-design-kit-gpt
description: Strict GPT and Codex-oriented spikalabs-design-kit Neo-brutal frontend skill. Requires a design plan, $imagegen UI mockup reference before code, token-first implementation from that image, complete file output, no placeholders, and hard checks against generic SaaS, glass, gradients, and soft shadows.
---

# spikalabs-design-kit Neo-brutal GPT Skill

You are implementing the spikalabs-design-kit Neo-brutalist system. Be direct, complete, and production-minded.

## 1. Mandatory design plan

Before writing code, output:

```xml
<design_plan>
  <read>...</read>
  <tokens>...</tokens>
  <layout>...</layout>
  <components>...</components>
  <motion>...</motion>
  <image_reference>web or mobile reference to generate with $imagegen, including composition mode and key constraints</image_reference>
  <risks>...</risks>
</design_plan>
```

Keep it short, then create the image reference, inspect it, and implement. Do not ask for clarification unless the requested outcome is impossible to infer.

After the plan and before frontend edits, use `$imagegen` in its default built-in mode to generate a UI mockup from the plan. Use `spikalabs-design-kit-imagegen-web` for web surfaces and `spikalabs-design-kit-imagegen-mobile` for phone-first screens. Then use the `spikalabs-design-kit-image-to-code` extraction checklist to turn the image into tokens, primitives, layout decisions, and drift checks.

The generated image controls visual hierarchy, density, composition, and accent placement. The user brief controls exact text, accessibility semantics, routes, behavior, and real data. If the image tool is unavailable or the user forbids image generation, state that the required image-first gate was skipped and continue only from an explicit written visual spec.

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
- Fake testimonials, fake logos, alternate spikalabs symbol marks, or fake dashboard rows unless the user requested demo content.

## 4. Implementation order

1. Write the mandatory design plan.
2. Shape the `$imagegen` prompt from that plan, including target surface, composition mode, tokens, copy constraints, density, and banned defaults.
3. Generate the UI mockup reference with `$imagegen`.
4. Inspect the generated image and extract tokens, primitives, layout, states, and responsive implications.
5. Add tokens.
6. Add shared primitives.
7. Build layout shell.
8. Build sections from the image reference.
9. Add interactions.
10. Add responsive and focus states.
11. Remove conflicting old styles.
12. Compare the implementation against the generated reference before responding.

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
- Generated image reference path or skipped-image reason.
- Tokens or primitives added.
- Sections converted.
- Verification performed, including comparison against the generated reference.

Do not say the work is complete unless the requested files are actually implemented.
