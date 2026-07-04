---
name: spika-neobrutal-redesign
description: Audit-first redesign skill for converting existing websites and apps into the spikalabs-style Neo-brutalist system. Adds tokens and primitives first, then migrates sections safely while preserving behavior, semantics, routes, and accessibility.
---

# spikalabs Neo-brutal Redesign Skill

Use this skill when the user gives an existing project and asks to restyle, fork, modernize, or convert it into the spikalabs reference website style.

The redesign goal is not a surface repaint. It is a controlled migration to a tokenized Neo-brutal system: paper backgrounds, ink borders, hard shadows, Space Mono UI labels, purple hierarchy, accent surfaces, and tactile interactions.

## 1. Required first response

Before changing files, provide a concise audit:

```text
Redesign read: <preserve/overhaul> mode, <stack>, <main risks>, <first migration target>.
```

Use `preserve` when the current IA, copy, or brand must remain. Use `overhaul` only when the user asks for a deeper redesign.

## 2. Audit checklist

Inspect these before editing:

- Framework and routing.
- CSS system: Tailwind, CSS modules, global CSS, design tokens, component library.
- Existing fonts and font loading.
- Existing logo assets and brand-mark usage, including whether `assets/brand/spikalabs-symbol.svg` should be introduced or mapped.
- Shared components: button, card, nav, form, table, modal, layout shell.
- Repeated page patterns.
- Accessibility hooks: labels, aria attributes, focus styles, skip links.
- Behavior hooks: form field names, analytics attributes, tests, data attributes.
- Responsive breakpoints.
- Dead code and stale style utilities.

Do not modify behavior until the styling seams are clear.

## 3. Migration order

### Step 1: Token layer

Add or map the spikalabs token contract:

- `#6200ea` primary purple.
- spikalabs symbol colors when brand assets are used: `#6A00FF`, `#6200EA`, `#5200D8`, and `#050505`.
- `#edeff1` paper.
- `#1c1c1e` ink.
- `#3a3a3c` gray.
- `#a0a8aa` light gray.
- `#ffe566`, `#7ee8fa`, `#ff8fab`, `#b8f397` accent surfaces.
- 2px ink border.
- 3px, 5px, and 6px hard shadows.
- 250ms brutal interaction duration.

### Step 2: Primitive layer

Migrate the shared primitives before pages:

- Button.
- Link.
- Header/nav.
- Card.
- Frame/media shell.
- Section wrapper.
- Label/chip.
- Input/select/textarea.
- Table/code/prose if content-heavy.

### Step 3: Page sections

Transform one section at a time:

1. Hero.
2. Main feature or service grid.
3. Update/list/index sections.
4. Article/detail surface.
5. Contact or CTA.
6. Footer.

### Step 4: Cleanup

Remove unused gradient, glass, soft-shadow, rounded-card, and gray-border utilities after equivalent spikalabs primitives exist.

## 4. Preservation rules

Never silently change:

- URLs and route names.
- Public copy and legal text.
- Form field names.
- API request behavior.
- Analytics and tracking attributes.
- Semantic heading order.
- Alt text meaning.
- Recognizable spikalabs symbol proportions and color roles when replacing or adding logo assets.
- Keyboard interaction behavior.

When a visual change requires structural markup changes, preserve semantics first.

## 5. Component transformations

| Existing pattern | Convert to |
| --- | --- |
| Soft card with gray shadow | `card-brutal` with ink border and hard shadow |
| Default primary button | `btn-brutal` with purple hover fill |
| Thin divider section | 2px ink section border |
| Floating glass navbar | Sticky paper header with bottom ink border |
| Default badge or pill | Lowercase mono chip with ink border |
| Screenshot in rounded mask | `brutal-frame` with square corners and large hard shadow |
| Generic logo placeholder | spikalabs symbol tile using `assets/brand/spikalabs-symbol.svg` when the project is spikalabs-branded |
| Table with subtle lines | Bordered scroll wrapper, mono table, accent header |
| Accordion row with gray border | Ink-bordered row with purple focus and tactile hover |

## 6. CSS insertion strategy

Prefer the smallest safe layer:

- Tailwind v4 project: add tokens in `@theme` and shared utilities in global CSS.
- Tailwind v3 project: add colors, shadows, and fonts to `tailwind.config.*`.
- CSS modules: create `styles/spika-brutal.css` or local module primitives.
- Component library: wrap or theme shared components instead of editing every callsite.

Do not scatter raw hex values across files.

## 7. Motion conversion

Replace soft transitions with tactile motion:

- Hover: translate `-2px, -2px`, increase hard shadow.
- Active: translate `2px, 2px`, remove shadow.
- Focus: primary outline, 3px offset.
- Mobile nav: short mechanical open/close animation.
- Reduced motion: disable non-essential motion.

Do not add scroll hijacking or heavy animation libraries for a restyle.

## 8. Quality gate

A redesign is complete only when:

- At least the shared primitives use tokens.
- No primary CTA uses soft shadow or generic gradient styling.
- Header, hero, cards, and form states match the spikalabs primitives.
- Focus states are visible.
- Responsive layout is checked at mobile, tablet, and desktop widths.
- The final diff does not contain placeholders, TODO comments, decorative fake data, or invented spikalabs logo variants.
