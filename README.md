<p align="center">
  <img src="assets/brand/spikalabs-design-kit.svg" alt="spikalabs-design-kit banner with the spikalabs symbol logo" width="100%" />
</p>

# spikalabs-design-kit

Internal spikalabs design kit for agent-assisted implementation and redesign of interfaces in the Neo-brutalist visual language extracted from the spikalabs reference website.

This repository may be externally visible for collaborators, audits, and agent-skill tooling, but the primary audience is spikalabs teams. Treat it as a house design kit rather than a general-purpose distribution package.

The scope is intentionally narrow: it teaches agents to produce visible structure, hard black borders, offset shadows, Space Mono UI, spikalabs accent colors, tactile hover states, and high-contrast layouts instead of generic SaaS templates.

## Name

`spikalabs-design-kit` is the canonical repository and package name for this internal spikalabs design kit.

## What changed

- The project shell, metadata, install names, and docs were renamed around the `spikalabs-design-kit` identity.
- The visual rules now target the reference website's spikalabs-style Neo-brutalism.
- A source-backed style audit and design guide were added under `docs/`.
- The broad aesthetic variants were replaced with focused internal spikalabs Neo-brutal implementation, redesign, image-generation, brand, and Stitch skills.
- Upstream marketing assets and sponsor material were removed from the active documentation path.

## Style source

Start here before changing the skills:

- [`docs/REFERENCE_WEBSITE_AUDIT.md`](docs/REFERENCE_WEBSITE_AUDIT.md)
- [`docs/spikalabs-design-kit-style-guide.md`](docs/spikalabs-design-kit-style-guide.md)
- [`docs/spikalabs-brand-symbol.md`](docs/spikalabs-brand-symbol.md)

Core extracted tokens:

| Role | Value |
| --- | --- |
| Primary purple | `#6200ea` |
| Symbol purple range | `#6A00FF` / `#6200EA` / `#5200D8` |
| Symbol black | `#050505` |
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

## Brand assets

- `assets/brand/spikalabs-symbol.png` is the provided raster source reference for the spikalabs symbol.
- `assets/brand/spikalabs-symbol.svg` is the canonical vector spikalabs symbol mark for kit branding.
- `assets/brand/spikalabs-design-kit.svg` is the repository banner lockup using that symbol inside the Neo-brutal frame system.
- Use the symbol for brand moments in headers, hero visuals, brand-board covers, app icons, favicons, and internal documentation. Do not invent substitute spikalabs marks unless a task explicitly asks for exploratory logo work.

## Using the kit

For internal workflows, load individual skills locally or install from the externally visible repository when that access path is available. The `npx skills add` CLI scans the `skills/` folder.

```bash
npx skills add https://github.com/spikalabscorp/spikalabs-design-kit
```

Install one skill by its install name:

```bash
npx skills add https://github.com/spikalabscorp/spikalabs-design-kit --skill "spika-neobrutal-frontend"
```

Local usage:

```bash
source ./skill.sh spika-neobrutal-frontend
```

## Skills

| Folder | Install name | Purpose |
| --- | --- | --- |
| `spika-neobrutal-frontend` | `spika-neobrutal-frontend` | Default implementation skill for landing pages, marketing pages, portfolios, and editorial pages in the spikalabs Neo-brutal style. |
| `spika-neobrutal-redesign` | `spika-neobrutal-redesign` | Audit-first transformation of existing projects into the spikalabs Neo-brutal system. |
| `spika-neobrutal-gpt` | `spika-neobrutal-gpt` | Stricter GPT/Codex-oriented variant with mandatory design plan and complete output rules. |
| `spika-neobrutal-image-to-code` | `spika-neobrutal-image-to-code` | Image-first workflow for generating references, analyzing them, then implementing matching code. |
| `spika-neobrutal-imagegen-web` | `spika-neobrutal-imagegen-web` | Image-generation-only web reference skill. |
| `spika-neobrutal-imagegen-mobile` | `spika-neobrutal-imagegen-mobile` | Image-generation-only mobile screen and flow skill. |
| `spika-neobrutal-brandkit` | `spika-neobrutal-brandkit` | Image-generation-only symbol-led brand board skill using the provided spikalabs mark and hard-border style. |
| `spika-neobrutal-stitch` | `spika-neobrutal-stitch` | Google Stitch-compatible semantic design-system generator. |
| `complete-output-enforcement` | `complete-output-enforcement` | Utility skill that prevents placeholder or truncated code output. |

## Design rules in one screen

- Build visible structure: bordered sections, grid backgrounds, framed media, bracketed nav labels.
- Use Space Mono for UI voice: labels, buttons, chips, metadata, and high-impact headings.
- Use hard shadows only: no blur radius, no glass panels, no soft gray cards.
- Keep accent color purposeful: purple for hierarchy, yellow/cyan/pink/lime for surfaces and categories.
- Use the spikalabs symbol as the brand anchor; do not invent replacement marks.
- Make interactions tactile: hover moves up-left, active moves down-right and removes shadow.
- Preserve accessibility: visible focus rings, high contrast, reduced-motion fallbacks.

## Repository structure

```text
.
├── docs/
│   ├── REFERENCE_WEBSITE_AUDIT.md
│   ├── spikalabs-design-kit-style-guide.md
│   ├── spikalabs-brand-symbol.md
│   └── PATCH_USAGE.md
├── assets/
│   └── brand/
│       ├── spikalabs-symbol.png
│       ├── spikalabs-symbol.svg
│       └── spikalabs-design-kit.svg
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
