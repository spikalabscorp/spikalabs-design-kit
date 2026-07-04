# Design System: Spika Neo-Brutal

**Skill:** spika-neobrutal-stitch

## 1. Visual Theme & Atmosphere

Friendly Neo-brutalism with visible structure, off-white paper surfaces, black ink borders, hard offset shadows, mono UI labels, and bright accent blocks. The interface should feel like a precise lab poster turned into usable software.

## 2. Color Palette & Roles

| Role | Value | Usage |
| --- | --- | --- |
| Primary | `#6200ea` | CTA hover, highlighted words, labels, focus rings |
| Paper | `#edeff1` | Body, cards, controls |
| Ink | `#1c1c1e` | Text, borders, shadows |
| Gray | `#3a3a3c` | Body copy, metadata |
| Light gray | `#a0a8aa` | Subtle stripes and utility text |
| Yellow | `#ffe566` | Feature accents, table headers |
| Cyan | `#7ee8fa` | Research or information accents |
| Pink | `#ff8fab` | Creative, alert, or campaign accents |
| Lime | `#b8f397` | Success, empty state, notice accents |

## 3. Typography Rules

Use Space Mono for interface voice: buttons, nav, labels, chips, metadata, and high-impact headings. Use Inter with Pretendard Variable fallback for body copy. Keep headings bold and direct. Use lowercase section labels.

## 4. Component Styling

Buttons, cards, frames, nav links, chips, tables, and inputs use 2px black borders and hard shadows. Hoverable components move up-left by 2px and increase shadow. Active components move down-right and remove shadow. Focus states use a visible purple outline.

## 5. Layout Principles

Use bordered page sections with responsive padding. Hero sections use subtle grid backgrounds and split copy with a hard-shadow media frame. Feature sections use accent cards. Article and update pages use bordered metadata chips, brutal tables, and code frames.

## 6. Motion & Interaction

Motion is short and tactile. Use 250ms transitions for transform, shadow, background, and color. Avoid cinematic scroll effects. Respect reduced-motion preferences.

## 7. Responsive Rules

On mobile, reduce card density, keep text readable, and avoid tiny controls. Preserve 44px interactive targets when possible. Stack split heroes vertically while keeping the media frame and label hierarchy.

## 8. Accessibility Rules

Maintain contrast, visible focus rings, semantic heading order, descriptive link text, and safe reduced-motion fallbacks. Do not place gray body text on saturated accents.

## 9. Anti-Patterns

Do not use glassmorphism, soft gray cards, gradient mesh backgrounds, over-rounded pill-only UI, random pastel colors, hidden focus, or fake dashboard filler.
