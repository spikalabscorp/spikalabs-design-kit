---
name: spika-neobrutal-frontend
description: Default implementation skill for landing pages, marketing pages, portfolios, and editorial pages in the Spika-style Neo-brutalist language. Uses hard black borders, offset shadows, Space Mono UI, Spika accent colors, visible grid structure, tactile hover states, and accessibility-first contrast.
---

# Spika Neo-Brutal Frontend Skill

Use this skill when the user asks for a website, landing page, portfolio, redesign, campaign page, article surface, or static product marketing UI that should feel like the SpikaLabs reference website.

The desired result is friendly Neo-brutalism: visible structure, black ink borders, paper backgrounds, purple hierarchy, bright accent blocks, hard offset shadows, and mono UI labels. It must feel deliberate, usable, and engineered, not like a generic SaaS template.

## 0. Design read

Before code, state one line:

`Reading this as: <page kind> for <audience>, using Spika Neo-brutalism with <density>, <motion>, and <accent strategy>.`

If the user's brief conflicts with this style, still preserve the core Spika primitives unless they explicitly ask for a different style.

## 1. Core dials

Set these internally before designing:

| Dial | Default | Range | Meaning |
| --- | --- | --- | --- |
| `STRUCTURE_VISIBILITY` | 9 | 1-10 | How visible borders, grids, dividers, and frames are |
| `CHROMA` | 7 | 1-10 | How often accent surfaces appear |
| `MOTION_TACTILITY` | 5 | 1-10 | How much hover, active, page-transition, and reveal motion is used |
| `DENSITY` | 5 | 1-10 | How compact the layout feels |

Default to `9 / 7 / 5 / 5`. Lower `CHROMA` for serious B2B. Lower `MOTION_TACTILITY` for regulated, accessibility-critical, or content-heavy work. Raise `DENSITY` for resource indexes, docs, and update lists.

## 2. Token contract

Use these tokens before adding custom colors.

```css
:root {
  --spika-primary: #6200ea;
  --spika-paper: #edeff1;
  --spika-ink: #1c1c1e;
  --spika-gray: #3a3a3c;
  --spika-lightgray: #a0a8aa;
  --spika-yellow: #ffe566;
  --spika-cyan: #7ee8fa;
  --spika-pink: #ff8fab;
  --spika-lime: #b8f397;
  --spika-symbol-purple-high: #6A00FF;
  --spika-symbol-purple-core: #6200EA;
  --spika-symbol-purple-deep: #5200D8;
  --spika-symbol-black: #050505;

  --spika-border: 2px solid var(--spika-ink);
  --spika-shadow: 3px 3px 0 0 var(--spika-ink);
  --spika-shadow-hover: 5px 5px 0 0 var(--spika-ink);
  --spika-shadow-lg: 6px 6px 0 0 var(--spika-ink);
  --spika-duration: 250ms;
}
```

### Tailwind v4 theme

```css
@theme {
  --font-sans: "Inter", "Pretendard Variable", ui-sans-serif, system-ui, sans-serif;
  --font-mono: "Space Mono", "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
  --color-spika-primary: #6200ea;
  --color-spika-white: #edeff1;
  --color-spika-black: #1c1c1e;
  --color-spika-gray: #3a3a3c;
  --color-spika-lightgray: #a0a8aa;
  --color-spika-accent-yellow: #ffe566;
  --color-spika-accent-cyan: #7ee8fa;
  --color-spika-accent-pink: #ff8fab;
  --color-spika-accent-lime: #b8f397;
  --color-spika-symbol-purple-high: #6A00FF;
  --color-spika-symbol-purple-core: #6200EA;
  --color-spika-symbol-purple-deep: #5200D8;
  --color-spika-symbol-black: #050505;
  --shadow-brutal: 3px 3px 0 0 var(--color-spika-black);
  --shadow-brutal-hover: 5px 5px 0 0 var(--color-spika-black);
  --shadow-brutal-lg: 6px 6px 0 0 var(--color-spika-black);
  --duration-brutal: 250ms;
}
```

Do not introduce extra brand colors unless the user gives them. The only symbol-specific extension is the SpikaLabs mark range above; use it for the provided symbol only, not random UI accents. If custom brand color is mandatory, map it to one role and keep the Spika ink, paper, borders, and hard-shadow mechanics.

## 3. Typography

### Font roles

- Sans body: Inter with Pretendard Variable fallback for Korean and mixed-language UI.
- Mono voice: Space Mono for buttons, nav, labels, metadata, chips, tables, code, and many headings.
- Use `font-display: swap` when self-hosting fonts.
- Do not hotlink Google Fonts in production code. Use framework font loading or self-hosted files.

### Headline rules

- Hero headline should be large, bold, and direct.
- Use purple spans for 1-2 meaningful words, not every keyword.
- Keep line breaks intentional. Avoid six-line mobile headlines caused by tiny containers.
- Prefer lowercase section labels, not numbered eyebrows.

### Body rules

- Body text uses `spika-gray` on paper, with line height around `1.6`.
- Do not put small gray text on cyan, yellow, pink, or lime surfaces.
- Metadata should be mono, bold, and compact.

## 4. Layout grammar

### Page shell

- Body background: paper.
- Text color: ink.
- Header: sticky, paper fill, bottom black border.
- Footer: top black border and mono statement.
- Section padding: `p-6 sm:p-10 lg:p-16` or CSS equivalent.
- Section separation: `border-b-2 border-spika-black`.

### Hero

Default hero architecture:

1. Subtle grid background.
2. Split layout: copy column plus framed visual.
3. Section label above the main headline.
4. CTA button using the brutal button primitive.
5. Hero visual inside `.brutal-frame` with large hard shadow.

Alternative hero patterns:

- Poster hero: giant mono headline with accent blocks behind selected words.
- Directory hero: compact label, headline, filters, and update-card grid.
- Editorial hero: bordered intro card with strong headline and mono metadata.

### Grid background

```css
.hero-grid {
  background-image:
    linear-gradient(rgba(28, 28, 30, 0.045) 1px, transparent 1px),
    linear-gradient(90deg, rgba(28, 28, 30, 0.045) 1px, transparent 1px);
  background-position: -1px -1px;
  background-size: 32px 32px;
}
```

Use grid backgrounds sparingly. Do not cover every section with a grid.

## 5. Component primitives

### Button

```css
.btn-brutal {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border: 2px solid var(--spika-ink);
  background: var(--spika-paper);
  box-shadow: var(--spika-shadow);
  color: var(--spika-ink);
  font-family: var(--font-mono, "Space Mono", monospace);
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1;
  transition: transform var(--spika-duration) ease,
    box-shadow var(--spika-duration) ease,
    background var(--spika-duration) ease,
    color var(--spika-duration) ease;
}

.btn-brutal:hover {
  transform: translate(-2px, -2px);
  background: var(--spika-primary);
  color: var(--spika-paper);
  box-shadow: var(--spika-shadow-hover);
}

.btn-brutal:active {
  transform: translate(2px, 2px);
  box-shadow: none;
}

.btn-brutal:focus-visible {
  outline: 2px solid var(--spika-primary);
  outline-offset: 3px;
}
```

### Section label

- Inline block or inline-flex.
- Padding around `0.375rem 0.75rem`.
- Border: 2px ink.
- Background: primary purple.
- Text: paper.
- Font: mono, bold, lowercase.
- Shadow: standard hard shadow.

### Card

- Border: 2px ink.
- Background: paper or one accent token.
- Shadow: standard hard shadow.
- Hoverable cards translate `-2px -2px` and use hover shadow.
- Media area uses a bottom border.
- Do not nest card inside card unless the inner card is a specific framed media or code block.

### Frame

- Use for images, browser mockups, diagrams, and feature visuals.
- Border: 2px ink.
- Background: paper.
- Shadow: large hard shadow.
- No rounded corners by default.

### Brand mark

- Use `assets/brand/spikalabs-symbol.svg` as the SpikaLabs logo source when a page needs a brand mark, favicon, app icon, header logo, or hero brand tile.
- Keep the symbol paths clean; apply borders, accent backing tiles, and hard shadows to the surrounding container rather than modifying the mark itself.
- Default lockup: symbol tile plus lowercase mono text, such as `spikalabs` or `spikalabs-design-kit`.
- Use `alt="SpikaLabs symbol logo"` for informative image usage, or empty alt only when adjacent text already names the brand.
- Never substitute generic lightning, sparkle, mascot, crest, or blob icons for the SpikaLabs mark.

### Nav link

- Bracketed label: `[updates]`, `[contact]`, `[work]`.
- Mono, bold, lowercase.
- Border, hard shadow, purple hover fill.
- Do not use a default floating glass navbar.

### Form fields

- Border: 2px ink.
- Background: paper.
- Focus ring: primary outline plus optional hard shadow increase.
- Error surfaces: pink accent with ink text.
- Success surfaces: lime accent with ink text.

### Tables

- Table wrapper has 2px ink border and hard shadow.
- Header cells use cyan or yellow accent.
- Body rows alternate paper and mixed lightgray.
- Font: mono, compact, readable.

## 6. Motion and interaction

Use tactile motion instead of cinematic motion.

Allowed:

- Hover lift: `translate(-2px, -2px)` plus stronger hard shadow.
- Active press: `translate(2px, 2px)` plus no shadow.
- Short page region fades using opacity and `translateY(6px)`.
- Mobile menu open with grid-template rows only when implemented cleanly.

Banned by default:

- Soft hover glow.
- Blurred floating shadows.
- Slow luxury parallax.
- Scroll hijacking.
- React state for continuous scroll or mouse position.
- Animating width, height, top, left, margin, or padding.

Reduced motion is mandatory:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }
}
```

## 7. Implementation stack defaults

Use the existing stack if the project already has one.

For greenfield work:

- Astro with Tailwind v4 for content-heavy marketing sites.
- Next.js or React with Tailwind v4 for product-marketing surfaces that need components or light interactivity.
- Native CSS modules are acceptable when Tailwind is absent.
- Icons: use a maintained library, or simple text symbols when the design benefits from rawness.
- Do not import a heavy animation library for simple button and card motion.

## 8. Section patterns

Use at least four different section structures across a long page:

1. Split hero with framed visual.
2. Four-card accent grid.
3. Bordered article or manifesto block.
4. Update-card list with metadata chips.
5. Comparison table in brutal table frame.
6. Symbol-led brand strip or partner strip with bordered cells.
7. Contact card with hard-shadow CTA cluster.
8. FAQ as bordered accordion rows.

Avoid repeating the same `three cards in a row` pattern.

## 9. Anti-patterns

Never ship these unless the user explicitly requests them:

- AI-purple gradient mesh hero.
- Glassmorphism panels.
- Soft gray shadows.
- Subtle `border-gray-200` as the main structure.
- Over-rounded pill interfaces.
- Random pastel palette beyond the Spika tokens.
- Alternate SpikaLabs logos that replace the provided symbol mark.
- Section numbers as decorative eyebrows.
- Fake dashboards made from generic div rows.
- Invisible focus states.
- Tiny low-contrast labels on accent backgrounds.
- Decorative scroll cues.
- TODO comments, placeholder cards, or fake testimonial names.

## 10. Redesign protocol

When modifying an existing project:

1. Inventory the stack, global styles, component library, font loading, and route structure.
2. Add tokens first.
3. Convert shared primitives next: buttons, links, cards, inputs, nav, section wrappers.
4. Convert one page section at a time.
5. Preserve content, routes, semantics, form names, analytics hooks, and accessibility attributes.
6. Test responsive breakpoints and keyboard focus.
7. Remove dead soft-style utilities after migration.

Do not jump directly to page-by-page restyling before tokens and primitives exist.

## 11. Final pre-flight check

Before final output, verify:

- The Spika token contract is present or mapped to the existing theme.
- Buttons, cards, frames, nav links, section labels, and any brand-mark containers use hard-border primitives.
- The page uses paper background, ink borders, and planned accent surfaces.
- Hover and active states feel tactile.
- Focus states are visible.
- Motion respects reduced-motion settings.
- No generic SaaS, glass, or soft-shadow patterns remain.
- No placeholders or TODO comments are present.
- The implementation works at mobile, tablet, and desktop widths.
