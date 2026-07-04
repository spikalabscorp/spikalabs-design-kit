<p align="center">
  <img src="assets/brand/spika-brutal-skillkit.svg" alt="Spika Brutal Skillkit" width="100%" />
</p>

# Spika Brutal Skillkit

Portable agent skills for building and redesigning interfaces in the Neo-brutalist visual language extracted from the SpikaLabs reference website.

The fork is intentionally narrow: it teaches agents to produce visible structure, hard black borders, offset shadows, Space Mono UI, Spika accent colors, tactile hover states, and high-contrast layouts instead of generic SaaS templates.

## Selected name

**Spika Brutal Skillkit** is the name used in this fork.

Other name ideas that also fit the direction:

- **Borderline Agent Skills**
- **Hardline UI Skills**
- **Brutal Lab Kit**

## What changed

- The project shell, metadata, install names, and docs were renamed for the fork.
- The visual rules now target the reference website's Spika-style Neo-brutalism.
- A source-backed style audit and design guide were added under `docs/`.
- The broad aesthetic variants were replaced with focused Spika Neo-brutal implementation, redesign, image-generation, brand, and Stitch skills.
- Upstream marketing assets and sponsor material were removed from the active documentation path.

## Style source

Start here before changing the skills:

- [`docs/REFERENCE_WEBSITE_AUDIT.md`](docs/REFERENCE_WEBSITE_AUDIT.md)
- [`docs/SPIKA_NEO_BRUTAL_STYLE_GUIDE.md`](docs/SPIKA_NEO_BRUTAL_STYLE_GUIDE.md)

Core extracted tokens:

| Role | Value |
| --- | --- |
| Primary purple | `#6200ea` |
| Paper | `#edeff1` |
| Ink | `#1c1c1e` |
| Gray | `#3a3a3c` |
| Light gray | `#a0a8aa` |
| Yellow | `#ffe566` |
| Cyan | `#7ee8fa` |
| Pink | `#ff8fab` |
| Lime | `#b8f397` |
| Border | `2px solid #1c1c1e` |
| Shadow | `3px 3px 0 0 #1c1c1e` |
| Hover shadow | `5px 5px 0 0 #1c1c1e` |
| Large frame shadow | `6px 6px 0 0 #1c1c1e` |

## Installing

The `npx skills add` CLI scans the `skills/` folder.

```bash
npx skills add https://github.com/spikalabscorp/spika-brutal-skillkit
```

Install one skill by its install name:

```bash
npx skills add https://github.com/spikalabscorp/spika-brutal-skillkit --skill "spika-neobrutal-frontend"
```

Local usage:

```bash
source ./skill.sh spika-neobrutal-frontend
```

## Skills

| Folder | Install name | Purpose |
| --- | --- | --- |
| `spika-neobrutal-frontend` | `spika-neobrutal-frontend` | Default implementation skill for landing pages, marketing pages, portfolios, and editorial pages in the Spika Neo-brutal style. |
| `spika-neobrutal-redesign` | `spika-neobrutal-redesign` | Audit-first transformation of existing projects into the Spika Neo-brutal system. |
| `spika-neobrutal-gpt` | `spika-neobrutal-gpt` | Stricter GPT/Codex-oriented variant with mandatory design plan and complete output rules. |
| `spika-neobrutal-image-to-code` | `spika-neobrutal-image-to-code` | Image-first workflow for generating references, analyzing them, then implementing matching code. |
| `spika-neobrutal-imagegen-web` | `spika-neobrutal-imagegen-web` | Image-generation-only web reference skill. |
| `spika-neobrutal-imagegen-mobile` | `spika-neobrutal-imagegen-mobile` | Image-generation-only mobile screen and flow skill. |
| `spika-neobrutal-brandkit` | `spika-neobrutal-brandkit` | Image-generation-only brand board skill using the same hard-border style. |
| `spika-neobrutal-stitch` | `spika-neobrutal-stitch` | Google Stitch-compatible semantic design-system generator. |
| `complete-output-enforcement` | `complete-output-enforcement` | Utility skill that prevents placeholder or truncated code output. |

## Design rules in one screen

- Build visible structure: bordered sections, grid backgrounds, framed media, bracketed nav labels.
- Use Space Mono for UI voice: labels, buttons, chips, metadata, and high-impact headings.
- Use hard shadows only: no blur radius, no glass panels, no soft gray cards.
- Keep accent color purposeful: purple for hierarchy, yellow/cyan/pink/lime for surfaces and categories.
- Make interactions tactile: hover moves up-left, active moves down-right and removes shadow.
- Preserve accessibility: visible focus rings, high contrast, reduced-motion fallbacks.

## Repository structure

```text
.
├── docs/
│   ├── REFERENCE_WEBSITE_AUDIT.md
│   └── SPIKA_NEO_BRUTAL_STYLE_GUIDE.md
├── skills/
│   ├── spika-neobrutal-frontend/
│   ├── spika-neobrutal-redesign/
│   ├── spika-neobrutal-gpt/
│   ├── spika-neobrutal-image-to-code/
│   ├── spika-neobrutal-imagegen-web/
│   ├── spika-neobrutal-imagegen-mobile/
│   ├── spika-neobrutal-brandkit/
│   ├── spika-neobrutal-stitch/
│   └── complete-output-enforcement/
├── skill.sh
└── CHANGELOG.md
```

## License

MIT. See [`LICENSE`](LICENSE) and [`NOTICE.md`](NOTICE.md).
