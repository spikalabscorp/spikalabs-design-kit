# Reference Website Style Audit

This audit summarizes the Neo-brutalism language extracted from the attached `website-main` Astro project. It is the source style for `spikalabs-design-kit`.

## Source files inspected

- `src/styles/global.css`
- `src/styles/article.css`
- `src/styles/reset.css`
- `src/components/Button.astro`
- `src/components/BaseLayout/Header.astro`
- `src/components/BaseLayout/footer.astro`
- `src/components/Updates/UpdateCard.astro`
- `src/components/Updates/UpdatesEmptyState.astro`
- `src/pages/index.astro`
- `src/pages/contact.astro`
- `src/pages/updates/index.astro`
- `src/pages/updates/[slug].astro`

## Extracted style DNA

### 1. Visual thesis

The site uses a friendly Neo-brutalist system: raw structure, thick black lines, bright accent blocks, monospace emphasis, and physical hard shadows. It is not industrial dark brutalism. It is playful, legible, and product-ready.

### 2. Color tokens

| Role | Token | Value | Usage |
| --- | --- | --- | --- |
| Primary | `--color-spika-primary` | `#6200ea` | Hover fills, highlighted words, section labels, focus rings |
| Paper | `--color-spika-white` | `#edeff1` | Body background, card fills, button base |
| Ink | `--color-spika-black` | `#1c1c1e` | Borders, text, hard shadows |
| Secondary text | `--color-spika-gray` | `#3a3a3c` | Paragraphs, metadata, muted labels |
| Muted utility | `--color-spika-lightgray` | `#a0a8aa` | Table stripes, subdued separators |
| Yellow accent | `--color-spika-accent-yellow` | `#ffe566` | Card accents, table headers, hover highlights |
| Cyan accent | `--color-spika-accent-cyan` | `#7ee8fa` | Card accents, category chips |
| Pink accent | `--color-spika-accent-pink` | `#ff8fab` | Card accents, energetic blocks |
| Lime accent | `--color-spika-accent-lime` | `#b8f397` | Empty states, notice surfaces |

### 3. Typography

- Primary sans: `Inter`, with `Pretendard Variable` fallback for Korean glyphs.
- Display and UI mono: `Space Mono`.
- Headline behavior: bold, direct, often lowercase or sentence-case, with `text-spika-primary` used for highlighted words.
- UI labels: lowercase, monospace, bold, compact.
- Article body: sans-serif for readability, with mono reserved for code, tables, metadata, chips, and labels.

### 4. Border and shadow physics

| Pattern | Value |
| --- | --- |
| Standard border | `2px solid var(--color-spika-black)` |
| Standard shadow | `3px 3px 0 0 var(--color-spika-black)` |
| Hover shadow | `5px 5px 0 0 var(--color-spika-black)` |
| Large frame shadow | `6px 6px 0 0 var(--color-spika-black)` |
| Active state | translate down-right and remove shadow |

The shadows are unblurred and offset. No soft drop shadows, glows, glass, or heavy gradients.

### 5. Interaction grammar

- Default transition duration: `250ms`.
- Hover: move the element `translate(-2px, -2px)`, increase hard shadow, usually fill with primary purple.
- Active: move `translate(2px, 2px)`, remove shadow.
- Focus: visible `2px` primary outline with `3px` offset.
- Reduced motion: respect `prefers-reduced-motion` and remove view-transition animation.

### 6. Layout grammar

- Page sections are separated by `border-b-2 border-spika-black`.
- Main padding scales as `p-6 sm:p-10 lg:p-16`.
- Hero sections use a subtle grid background.
- Hero composition often uses a copy block plus a bordered visual frame.
- Cards use hard borders, hard shadows, and accent backgrounds instead of gradients.
- Header is sticky, paper-filled, and bordered at the bottom.
- Navigation uses bracketed mono labels like `[updates]`.

### 7. Component recipes

- `.btn-brutal`: mono bold button, 2px border, paper background, 3px hard shadow, purple hover fill.
- `.section-label-brutal`: compact mono label, purple fill, white text, black border, hard shadow, lowercase.
- `.card-brutal`: bordered paper or accent surface with hard shadow and optional hover lift.
- `.brutal-frame`: image or media frame with 2px border and 6px hard shadow.
- `.hero-grid`: subtle 32px grid using low-opacity ink lines.
- `.article-table-wrap`: bordered scroll container with hard shadow.

### 8. Implementation implications for the design kit

`spikalabs-design-kit` should teach agents to build with explicit tokens first, then compose UI from repeatable brutal primitives. It should ban generic SaaS defaults that conflict with the reference: soft cards, glass panels, pastel gradients, subtle gray borders, over-rounded pill interfaces, default Lucide-only icon rows, and dark mesh hero sections.


## Branding addendum: spikalabs symbol

The attached spikalabs symbol image is an additional brand source beyond the reference website code. The design kit should therefore keep the website-derived Neo-brutal interface system while using the provided symbol as the primary brand mark in banners, brand boards, logo slots, app icons, favicons, and header lockups.

The symbol introduces a sharper brand anchor: purple angular lightning/lab-energy geometry, a black right-facing counter-shape, and small pixel squares. Preserve those features instead of asking agents to invent generic logo concepts.
