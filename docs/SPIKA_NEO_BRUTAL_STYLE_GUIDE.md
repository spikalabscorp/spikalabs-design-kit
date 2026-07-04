# Spika Neo-Brutal Style Guide

A practical design system for AI agents implementing the visual language extracted from the attached SpikaLabs reference website.

## Name

**Spika Brutal Skillkit** is the selected fork name. It keeps the source website's Spika connection and clearly signals a Neo-brutalist, agent-oriented skill pack.

Other viable names:

- **Borderline Agent Skills**: memorable and border-forward, less company-specific.
- **Hardline UI Skills**: emphasizes strict geometry and hard-shadow UI.
- **Brutal Lab Kit**: playful and experimental, good for internal tools.

## Design principles

1. **Structure is visible**: show edges, grids, frames, and separations instead of hiding them behind soft surfaces.
2. **Everything has weight**: components should feel physical through hard black borders and offset shadows.
3. **Accent color is functional**: purple, yellow, cyan, pink, and lime communicate hierarchy and category, not decoration.
4. **Mono is the voice of the interface**: use Space Mono for labels, buttons, metadata, chips, and high-impact headlines.
5. **Motion is mechanical**: hover and active states move like pressable blocks, not like floating glass.
6. **Readable before loud**: preserve contrast, tap targets, line length, and reduced-motion fallbacks.

## CSS token contract

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

  --spika-border: 2px solid var(--spika-ink);
  --spika-shadow: 3px 3px 0 0 var(--spika-ink);
  --spika-shadow-hover: 5px 5px 0 0 var(--spika-ink);
  --spika-shadow-lg: 6px 6px 0 0 var(--spika-ink);
  --spika-duration: 250ms;
  --spika-ease: ease;
}
```

## Tailwind v4 theme contract

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
  --shadow-brutal: 3px 3px 0 0 var(--color-spika-black);
  --shadow-brutal-hover: 5px 5px 0 0 var(--color-spika-black);
  --shadow-brutal-lg: 6px 6px 0 0 var(--color-spika-black);
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

- Use section separators: `border-b-2 border-spika-black`.
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
- Thin gray borders instead of black structural borders.
- Generic three-card SaaS section repeated across the page.
- Decorative fake dashboards made from meaningless divs.
- Hidden focus states.
