---
name: spikalabs-design-kit-imagegen-mobile
description: Image-generation-only skill for mobile app screens and flows in the spikalabs-design-kit Neo-brutalist style, including prompt direction for UI mockups generated before mobile frontend implementation. Uses hard borders, tactile cards, mono labels, bright accent surfaces, and mobile-safe contrast.
---

# spikalabs-design-kit Neo-brutal Mobile Image Generation Skill

This skill generates images only. It does not write code. In image-first frontend workflows, use it as the mobile reference prompt layer before `spikalabs-design-kit-image-to-code` extracts implementation details.

## 1. Default output

Generate 3-5 mobile screens inside simple phone frames. The app UI should use the spikalabs-design-kit Neo-brutal language, not generic mobile minimalism.

When this skill is called from a frontend implementation workflow, generate the screens as an implementation reference, not a mood board. Make navigation, state hierarchy, component boundaries, spacing rhythm, accent placement, and safe-area behavior clear enough for `spikalabs-design-kit-image-to-code` extraction.

## 2. Mobile style DNA

- Paper app background.
- Ink borders around cards, nav bars, inputs, and buttons.
- Hard offset shadows scaled down for mobile.
- Purple primary actions.
- Yellow, cyan, pink, and lime cards for categories or states.
- Space Mono-style labels, tabs, chips, and metadata.
- Large readable headings.
- Square or lightly squared frames, not pill-only UI.
- spikalabs symbol mark on onboarding, profile, splash, or app-icon moments when the product is spikalabs-branded.

## 3. Screen types

Choose screens that make sense for the product:

- Onboarding or splash screen with symbol-led brand tile.
- Home dashboard with real hierarchy.
- List or feed.
- Detail page.
- Form or contact screen.
- Empty state.
- Settings or profile.

## 4. Mobile constraints

- Keep text readable.
- Respect safe areas.
- Avoid tiny bordered controls.
- Use fewer shadows than desktop but keep the tactile block feeling.
- Do not place gray text on saturated accent cards.
- Bottom navigation can be bordered and mono, but should remain finger-friendly.
- Preserve exact user-provided headings, labels, and CTA text when supplied. If exact copy is unknown, use short structural labels instead of fake data or lorem ipsum.

## 5. Banned mobile patterns

- Frosted glass tab bars.
- iOS clone gradients.
- Overly soft pastel cards.
- Tiny data-dense dashboards.
- Unreadable fake text.
- Excessive stickers or random 3D blobs.
- Alternate app icons that replace the spikalabs symbol with generic lightning or sparkle marks.
