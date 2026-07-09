---
name: spikalabs-design-kit-image-to-code
description: Image-first workflow for spikalabs-design-kit Neo-brutal websites. Derive a design result, generate or analyze reference images including $imagegen mockups produced before frontend work, extract tokens and component primitives, then implement code that matches the hard-border, offset-shadow, mono-UI system.
---

# spikalabs-design-kit Neo-brutal Image-to-Code Skill

Use this when the user asks to generate a visual reference first, convert a reference image to code, match an existing visual to the spikalabs-design-kit Neo-brutalist system, or when a frontend/design skill needs to internally create a visual reference before implementation.

## 1. Workflow

1. Identify the target surface: landing page, portfolio, update list, detail article, contact page, or component set.
2. If no user-provided reference exists, create one with `$imagegen` in its default built-in mode from the design brief before writing code. Use `spikalabs-design-kit-imagegen-web` for web surfaces and `spikalabs-design-kit-imagegen-mobile` for phone-first screens.
3. Create, locate, or inspect the visual reference.
4. Extract: colors, fonts, borders, shadows, spacing, layout grid, component states, responsive behavior.
5. Map extracted details to spikalabs-design-kit tokens.
6. Implement code with shared primitives.
7. Compare implementation against the reference.
8. Fix drift before final output.

For generated references, the image controls visual hierarchy, density, composition, and accent placement. The user's brief controls exact copy, links, semantics, real data, and behavior. Do not implement generated misspellings, fake rows, fake testimonials, or distorted brand marks.

## 2. Required extraction checklist

From every image or screenshot, capture:

- Canvas color.
- Ink color.
- Accent surfaces.
- Border thickness.
- Shadow direction and offset.
- Font personality and role split.
- Button shape and state behavior.
- Card and frame construction.
- Section separators.
- Grid or background texture.
- Mobile implications.
- Brand mark anatomy when a spikalabs logo or symbol is visible.

## 3. spikalabs mapping

If the image has a similar but not exact value, map it to the closest spikalabs role:

| Image observation | spikalabs role |
| --- | --- |
| Off-white page | `#edeff1` paper |
| Near-black border | `#1c1c1e` ink |
| Bright purple emphasis | `#6200ea` primary |
| Loud warm highlight | `#ffe566` yellow |
| Blue information card | `#7ee8fa` cyan |
| Pink alert or creative card | `#ff8fab` pink |
| Green success or empty state | `#b8f397` lime |
| Unblurred black shadow | hard shadow token |

Do not invent a new color scale unless the user provides a brand palette. If the reference includes the spikalabs symbol, preserve the purple angular core, black counter-shape, and pixel squares instead of simplifying it into a generic lightning icon.

## 4. Code rules

- Add tokens before components.
- Implement button, card, frame, label, nav, and focus primitives.
- Preserve image aspect ratios, symbol proportions, and alt text.
- Use CSS grid and flex intentionally.
- Use real text from the user's brief when available.
- Do not create fake dashboards from meaningless rows.
- Do not approximate hard shadows with blurred box shadows.

## 5. Anti-drift rules

The implementation is wrong if:

- Shadows are blurred.
- Borders are gray or 1px everywhere.
- Buttons do not move on hover and active.
- The page uses a gradient mesh instead of paper plus grid.
- Cards are rounded soft SaaS cards.
- Accent colors appear randomly without hierarchy.
- The spikalabs symbol is replaced by a generic icon or recolored with UI accent colors.
- The image's strong mono voice is replaced by default sans-only UI.

## 6. Final comparison

Before finishing, compare the code to the reference in prose:

- Matching: tokens, layout, components, motion.
- Intentional deviations: explain only if needed.
- Remaining risk: responsive or asset uncertainty.

Then provide the files or patch requested by the user.
