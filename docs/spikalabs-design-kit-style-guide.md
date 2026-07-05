# spikalabs-design-kit Neo-brutal Style Guide

A practical internal design system for AI agents implementing the visual language extracted from the attached spikalabs reference website.

## Design principles

1. **Structure is visible**: show edges, grids, frames, and separations instead of hiding them behind soft surfaces.
2. **Everything has weight**: components should feel physical through hard black borders and offset shadows.
3. **Accent color is functional**: purple, yellow, cyan, pink, and lime communicate hierarchy and category, not decoration.
4. **Mono is the voice of the interface**: use Space Mono for labels, buttons, metadata, chips, and high-impact headlines.
5. **Motion is mechanical**: hover and active states move like pressable blocks, not like floating glass.
6. **Readable before loud**: preserve contrast, tap targets, line length, and reduced-motion fallbacks.
7. **Symbol leads branding**: use the provided spikalabs symbol as the brand anchor, then apply Neo-brutal framing around it instead of redesigning the mark.

## spikalabs symbol logo

Branding work should use the provided spikalabs symbol: keep `assets/brand/spikalabs-symbol.png` as the raster source reference and use `assets/brand/spikalabs-symbol.svg` as the reusable vector mark. Treat this mark as canonical for the design kit. The symbol combines a purple angular lightning/lab-energy core, a black right-facing counter-shape, and small square pixel satellites.

Rules for applying the symbol:

- Use the symbol in headers, hero visuals, brand-board covers, app icons, favicons, and design-kit documentation.
- Keep the mark flat and recognizable; apply borders, hard shadows, and accent tiles to the container, not to the symbol paths.
- Keep clear space around the mark equal to at least one pixel-square width or roughly 12.5% of mark height.
- Use full color on paper or white backgrounds. Use one-color black or paper/white only for constrained production contexts.
- Pair with lowercase mono text such as `spikalabs`, `design-kit`, or `spikalabs-design-kit`.
- Do not invent generic lightning, sparkle, mascot, badge, crest, or blob substitutes for spikalabs branding.

See `docs/spikalabs-brand-symbol.md` for the full symbol usage guide.

## CSS token contract

```css
:root {
  --spikalabs-primary: #6200ea;
  --spikalabs-paper: #edeff1;
  --spikalabs-ink: #1c1c1e;
  --spikalabs-gray: #3a3a3c;
  --spikalabs-lightgray: #a0a8aa;
  --spikalabs-yellow: #ffe566;
  --spikalabs-cyan: #7ee8fa;
  --spikalabs-pink: #ff8fab;
  --spikalabs-lime: #b8f397;
  --spikalabs-symbol-purple-high: #6A00FF;
  --spikalabs-symbol-purple-core: #6200EA;
  --spikalabs-symbol-purple-deep: #5200D8;
  --spikalabs-symbol-black: #050505;

  --spikalabs-border: 2px solid var(--spikalabs-ink);
  --spikalabs-shadow: 3px 3px 0 0 var(--spikalabs-ink);
  --spikalabs-shadow-hover: 5px 5px 0 0 var(--spikalabs-ink);
  --spikalabs-shadow-lg: 6px 6px 0 0 var(--spikalabs-ink);
  --spikalabs-duration: 250ms;
  --spikalabs-ease: ease;
}
```

## Tailwind v4 theme contract

```css
@theme {
  --font-sans: "Inter", "Pretendard Variable", ui-sans-serif, system-ui, sans-serif;
  --font-mono: "Space Mono", "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
  --color-spikalabs-primary: #6200ea;
  --color-spikalabs-white: #edeff1;
  --color-spikalabs-black: #1c1c1e;
  --color-spikalabs-gray: #3a3a3c;
  --color-spikalabs-lightgray: #a0a8aa;
  --color-spikalabs-accent-yellow: #ffe566;
  --color-spikalabs-accent-cyan: #7ee8fa;
  --color-spikalabs-accent-pink: #ff8fab;
  --color-spikalabs-accent-lime: #b8f397;
  --color-spikalabs-symbol-purple-high: #6A00FF;
  --color-spikalabs-symbol-purple-core: #6200EA;
  --color-spikalabs-symbol-purple-deep: #5200D8;
  --color-spikalabs-symbol-black: #050505;
  --shadow-brutal: 3px 3px 0 0 var(--color-spikalabs-black);
  --shadow-brutal-hover: 5px 5px 0 0 var(--color-spikalabs-black);
  --shadow-brutal-lg: 6px 6px 0 0 var(--color-spikalabs-black);
  --duration-brutal: 250ms;
}
```

## Required primitives

### Button

- `inline-flex`, centered, gap `0.5rem`.
- Padding around `0.5rem 1rem`.
- Border: `2px solid ink`.
- Background: paper by default.
- Shadow: standard hard shadow.
- Font: mono, `700`, compact.
- Hover: translate `-2px -2px`, purple fill, paper text, hover shadow.
- Active: translate `2px 2px`, shadow removed.
- Focus: visible primary outline.

### Section label

- Inline block, lowercase, mono bold.
- Purple fill, paper text, black border, hard shadow.
- Use for section eyebrows instead of numbered labels.

### Card

- Hard border and shadow.
- Paper fill by default, accents for categories or feature groups.
- Hoverable cards lift up-left and increase hard shadow.
- No inner card nesting unless the inner element is a media frame or chip row.

### Media frame

- Hard border, paper background, large hard shadow.
- Images fill the frame, no rounded corners.
- Avoid soft masks, blended overlays, and glass panels.

### Article content

- Links are purple, bold, underlined with 2px thickness.
- Tables live inside a bordered scroll wrapper with hard shadow.
- Code blocks use paper background, black border, hard shadow, mono type.
- Blockquotes use dashed black border and hard shadow.

## Layout rules

- Use section separators: `border-b-2 border-spikalabs-black`.
- Use responsive section padding: `p-6 sm:p-10 lg:p-16`.
- Hero uses subtle grid background plus split copy/media composition by default.
- Grids should feel poster-like, not default SaaS card rows.
- Accent color distribution should be planned: purple for hierarchy, yellow/cyan/pink/lime for category surfaces.

## Motion rules

- Motion should be tactile and short.
- Prefer transform and opacity only.
- Do not animate layout properties like width, height, top, left, margin, or padding.
- Respect `prefers-reduced-motion` for all entrance and page-transition effects.
- Do not use springy luxury motion, glass hover blur, or slow cinematic fades unless the user explicitly overrides the style.

## Accessibility rules

- Maintain high contrast between text and background.
- Never put small gray text on accent colors.
- Focus rings must be visible and not hidden by shadows.
- Interactive targets should remain at least 44px tall where possible.
- Provide solid fallbacks for decorative grid backgrounds.

## Banned patterns

- Soft gray shadow cards.
- Glassmorphism and blurred translucent panels.
- AI-purple gradient mesh heroes.
- Over-rounded pill everything.
- Random accent colors beyond the token set.
- Alternate spikalabs logos that ignore the provided symbol mark.
- Thin gray borders instead of black structural borders.
- Generic three-card SaaS section repeated across the page.
- Decorative fake dashboards made from meaningless divs.
- Hidden focus states.
