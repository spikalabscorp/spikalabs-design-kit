---
name: spika-neobrutal-image-to-code
description: Image-first workflow for Spika Neo-brutal websites. Generate or analyze reference images, extract tokens and component primitives, then implement code that matches the hard-border, offset-shadow, mono-UI system.
---

# Spika Neo-Brutal Image-to-Code Skill

Use this when the user asks to generate a visual reference first, convert a reference image to code, or match an existing visual to the Spika Neo-brutalist system.

## 1. Workflow

1. Identify the target surface: landing page, portfolio, update list, detail article, contact page, or component set.
2. Create or inspect the visual reference.
3. Extract: colors, fonts, borders, shadows, spacing, layout grid, component states, responsive behavior.
4. Map extracted details to Spika tokens.
5. Implement code with shared primitives.
6. Compare implementation against the reference.
7. Fix drift before final output.

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

## 3. Spika mapping

If the image has a similar but not exact value, map it to the closest Spika role:

| Image observation | Spika role |
| --- | --- |
| Off-white page | `#edeff1` paper |
| Near-black border | `#1c1c1e` ink |
| Bright purple emphasis | `#6200ea` primary |
| Loud warm highlight | `#ffe566` yellow |
| Blue information card | `#7ee8fa` cyan |
| Pink alert or creative card | `#ff8fab` pink |
| Green success or empty state | `#b8f397` lime |
| Unblurred black shadow | hard shadow token |

Do not invent a new color scale unless the user provides a brand palette.

## 4. Code rules

- Add tokens before components.
- Implement button, card, frame, label, nav, and focus primitives.
- Preserve image aspect ratios and alt text.
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
- The image's strong mono voice is replaced by default sans-only UI.

## 6. Final comparison

Before finishing, compare the code to the reference in prose:

- Matching: tokens, layout, components, motion.
- Intentional deviations: explain only if needed.
- Remaining risk: responsive or asset uncertainty.

Then provide the files or patch requested by the user.
