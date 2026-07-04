# Changelog

All notable changes to spikalabs-design-kit live here.

## [Unreleased]

### Added

- Added `docs/REFERENCE_WEBSITE_AUDIT.md` summarizing the attached reference website source style.
- Added `docs/spikalabs-design-kit-style-guide.md` with reusable tokens, primitives, layout rules, and banned patterns.
- Added `docs/PATCH_USAGE.md` with incremental patch application instructions.
- Added `docs/PROJECT_SCOPE_SKILLS.md` with Codex and Claude Code project-scope usage guidance.
- Added `docs/LICENSE_POLICY.md` documenting upstream `taste-skill` attribution and spikalabs modification ownership.
- Added a Neo-brutalist SVG banner for the design kit.
- Added `assets/brand/spikalabs-symbol.png`, `assets/brand/spikalabs-symbol.svg`, and `docs/spikalabs-brand-symbol.md` to anchor branding in the provided spikalabs symbol logo.
- Added focused skills: `spikalabs-design-kit-frontend`, `spikalabs-design-kit-redesign`, `spikalabs-design-kit-gpt`, `spikalabs-design-kit-image-to-code`, `spikalabs-design-kit-imagegen-web`, `spikalabs-design-kit-imagegen-mobile`, `spikalabs-design-kit-brandkit`, `spikalabs-design-kit-stitch`, and `spikalabs-design-kit-output-enforcement`.
- Added `.agents/skills` and `.claude/skills` project-scope adapters for Codex and Claude Code.
- Added `scripts/install-project-scope.sh` to install skills into another project without using global skill scope.

### Changed

- Renamed the project shell to **spikalabs-design-kit**.
- Reoriented the repository toward a focused internal spikalabs Neo-brutal design kit.
- Clarified that the kit is primarily for spikalabs internal workflows, while remaining externally visible for collaborators and compatible tooling.
- Updated Claude plugin metadata for the design kit.
- Replaced broad README guidance with the design kit's install names, internal audience, and style rules.
- Updated `skill.sh`, `skills/llms.txt`, Claude plugin metadata, and Copilot instructions for the design kit.
- Updated README usage guidance to prefer project-scoped installation for repository-specific spikalabs UI work.
- Updated brand, image-generation, Stitch, frontend, redesign, and GPT skills to preserve the spikalabs symbol instead of inventing alternate brand marks.
- Updated license notices to retain the original `taste-skill` copyright and add spikalabs ownership for fork-specific modifications.

### Removed

- Removed upstream sponsor and marketing references from the active documentation path.
- Removed unused upstream marketing assets, example images, asset-processing scripts, and research notes to keep the design kit focused.
