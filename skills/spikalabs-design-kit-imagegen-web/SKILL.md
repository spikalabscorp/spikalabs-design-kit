---
name: spikalabs-design-kit-imagegen-web
description: Image-generation-only skill for web references in the spikalabs-design-kit Neo-brutalist style, including prompt direction for UI mockups generated before frontend implementation. Produces horizontal website comps with paper backgrounds, black borders, offset shadows, mono labels, bright accents, and tactile interface primitives.
---

# spikalabs-design-kit Neo-brutal Web Image Generation Skill

This skill generates images only. It does not write code. In image-first frontend workflows, use it as the web reference prompt layer before `spikalabs-design-kit-image-to-code` extracts implementation details.

## 1. Default image direction

Create a high-resolution horizontal website comp using the spikalabs-design-kit Neo-brutal style:

- Off-white paper canvas.
- Thick black structural borders.
- Hard offset black shadows.
- Purple hierarchy and bright accent blocks.
- Space Mono-style labels and buttons.
- Split hero or poster-like layout.
- Subtle grid background.
- Square media frames.
- Bracketed nav labels.
- spikalabs symbol mark when the comp represents spikalabs or this design kit.

When this skill is called from a frontend implementation workflow, create a single coherent UI reference image for implementation, not a mood board. Make layout hierarchy, component boundaries, spacing rhythm, accent placement, and responsive intent visually clear enough for `spikalabs-design-kit-image-to-code` extraction.

## 2. Required visual elements

Include at least five:

- Sticky paper header with black bottom border.
- spikalabs symbol tile or symbol-plus-wordmark lockup.
- Bracketed nav labels like `[updates]`.
- Purple filled section label.
- Large mono headline with one purple phrase.
- Framed hero visual with hard shadow.
- Accent card grid using yellow, cyan, pink, and lime.
- Tactile CTA buttons with offset shadows.
- Update cards with date and category chips.
- Brutalist table or code frame.
- Contact card with bordered social buttons.

## 3. Composition modes

Pick one per image:

1. Split hero with framed visual.
2. Poster hero with oversized mono type.
3. Content index with update cards and filters.
4. Service grid with accent cards.
5. Editorial article detail with brutal prose styling.
6. Contact page with large bordered message card.

Do not mix all modes into one cluttered board.

## 4. Text guidance

Text should be readable and sparse. Use short phrases like:

- `researching what's next.`
- `building what's needed.`
- `[ lab status ]`
- `what we do`
- `dispatches from the lab`

Do not fill the comp with fake lorem ipsum blocks. When branding appears, use the spikalabs symbol anatomy: purple angular core, black counter-shape, and pixel squares.

For implementation references, preserve exact user-provided headings, labels, and CTA text when supplied. If exact body copy is unknown, show short structural labels rather than invented testimonials, fake customer logos, fake metrics, or lorem ipsum.

## 5. Banned image styles

- Glassmorphism.
- Soft shadows.
- Neon cyberpunk glow.
- Gradient mesh hero.
- Rounded dashboard cards.
- Random collage elements unrelated to UI.
- Generic replacement logos for spikalabs branding.
- Tiny unreadable UI text.
