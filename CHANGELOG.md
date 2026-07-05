# Changelog

All notable changes to spikalabs-design-kit live here.

## [Unreleased]

## [0.2.0]

### Added

- Added `docs/REFERENCE_WEBSITE_AUDIT.md` summarizing the attached reference website source style.
- Added `docs/spikalabs-design-kit-style-guide.md` with reusable tokens, primitives, layout rules, and banned patterns.
- Added `docs/PATCH_USAGE.md` with incremental patch application instructions.
- Added `docs/PROJECT_SCOPE_SKILLS.md` with Codex and Claude Code project-scope usage guidance.
- Added `docs/LICENSE_POLICY.md` documenting upstream attribution and spikalabs modification ownership.
- Added a Neo-brutalist SVG banner for the design kit.
- Added `assets/brand/spikalabs-symbol.png`, `assets/brand/spikalabs-symbol.svg`, and `docs/spikalabs-brand-symbol.md` to anchor branding in the provided spikalabs symbol logo.
- Added focused skills: `spikalabs-design-kit-frontend`, `spikalabs-design-kit-redesign`, `spikalabs-design-kit-gpt`, `spikalabs-design-kit-image-to-code`, `spikalabs-design-kit-imagegen-web`, `spikalabs-design-kit-imagegen-mobile`, `spikalabs-design-kit-brandkit`, `spikalabs-design-kit-stitch`, and `spikalabs-design-kit-output-enforcement`.
- Added an npx-compatible project-scope installer package entry point and agent prompt generator for Codex CLI and Claude Code handoff.
- Added pipe-safe output handling to the npm executable for list and prompt workflows.
- Added Codex and Claude Code plugin marketplace metadata for remote plugin-style distribution.
- Added `.agents/skills` and `.claude/skills` project-scope adapters for Codex and Claude Code.
- Added `scripts/install-project-scope.sh` to install skills into another project without using global skill scope.
- Added a GitHub Actions release workflow for npm publishing through Trusted Publishing.

### Changed

- Renamed the project shell to **spikalabs-design-kit**.
- Updated Claude plugin metadata for the design kit.
- Updated project-scope documentation with npx, `npx skills add`, agent-assisted, and plugin marketplace installation routes.
- Replaced broad README guidance with the design kit's install names, internal audience, and style rules.
- Updated `skill.sh`, `skills/llms.txt`, Claude plugin metadata, and Copilot instructions for the design kit.
