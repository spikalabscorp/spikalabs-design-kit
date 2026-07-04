# Project-Scoped Skills

`spikalabs-design-kit` keeps the canonical skill definitions under `skills/` and
exposes them through project-scoped discovery locations for Codex and Claude
Code.

## Supported project locations

The repository includes these project-scope adapters for the kit repository
itself:

```text
.agents/skills/<skill-name> -> ../../skills/<skill-name>
.claude/skills/<skill-name> -> ../../skills/<skill-name>
```

Use these locations when the kit itself is opened as a project, or when the
same layout is copied into another repository.

Codex reads repository skills from `.agents/skills` folders between the current
working directory and repository root, and Claude Code reads project skills from
`.claude/skills/<skill-name>/SKILL.md`. Both tools support symlinked skill
folders, but copied folders are the recommended install output for projects that
should carry the skills in version control.

## Install without cloning this kit

Use the npm package entry point when you want a global-install-like workflow.
The package exposes a `bin` command, so npm/npx can download the repository or
published package into npm's cache and execute the installer without requiring a
local clone of `spikalabs-design-kit`.

Before the package is published to npm, run it directly from GitHub:

```bash
npx -y github:spikalabscorp/spikalabs-design-kit --target .
```

After the package is published to npm, the shorter package-name form is enough:

```bash
npx -y spikalabs-design-kit --target .
```

Install a single skill into the current project:

```bash
npx -y github:spikalabscorp/spikalabs-design-kit \
  --target . \
  --skill spikalabs-design-kit-frontend
```

Pin the installer to a tag, branch, or commit when reproducibility matters:

```bash
npx -y github:spikalabscorp/spikalabs-design-kit#<tag-or-commit> --target .
```

By default, the installer copies skills into the target repository so the result
is self-contained and commit-friendly:

```text
.agents/skills/<skill-name>/SKILL.md
.claude/skills/<skill-name>/SKILL.md
```

Use `--codex-only` or `--claude-only` when a project should support just one
agent surface. Use `--force` to replace an existing project-scope install.

## Ask an agent to install it

From the target repository root, ask Codex CLI or Claude Code to run the npx
installer and commit the generated project-scope folders:

```text
Install the spikalabs-design-kit skills as project-scoped skills for this
repository only. Run:

npx -y github:spikalabscorp/spikalabs-design-kit --target .

Then verify that SKILL.md files exist under .agents/skills for Codex and
.claude/skills for Claude Code, review the generated files, and commit the
changes with a Conventional Commits message.
```

The package can generate the prompt for a narrower install:

```bash
npx -y github:spikalabscorp/spikalabs-design-kit \
  agent-prompt \
  --skill spikalabs-design-kit-gpt
```

## Local checkout install

When you are already working from a local checkout of this kit, the shell
installer remains available:

```bash
./scripts/install-project-scope.sh --target /path/to/project
```

Install only one skill:

```bash
./scripts/install-project-scope.sh \
  --target /path/to/project \
  --skill spikalabs-design-kit-frontend
```

For active kit development, use symlink mode instead:

```bash
./scripts/install-project-scope.sh --target /path/to/project --link --force
```

## Verify the target project

From the target project root:

```bash
find -L .agents/skills .claude/skills -maxdepth 2 -name SKILL.md -print
```

Expected examples:

```text
.agents/skills/spikalabs-design-kit-frontend/SKILL.md
.claude/skills/spikalabs-design-kit-frontend/SKILL.md
```

## Maintenance rule

Edit canonical skills only under `skills/`. The checked-in `.agents/skills` and
`.claude/skills` entries point back to those canonical folders to avoid drift.
When installing by copy into another project, rerun the npx or local installer
with `--force` after canonical skill updates.

## Distribution decision notes

The project-scope feature should remain folder-based because Codex and Claude
Code both discover repository-local skills from project directories. For remote
installation, package the repository as an npm executable rather than requiring
users to clone the kit first:

- Codex project-scope target: `.agents/skills`.
- Claude Code project-scope target: `.claude/skills`.
- npm executable target: `package.json` `bin` command backed by
  `bin/spikalabs-design-kit.mjs`.

This keeps direct folder discovery as the source of truth while adding a
one-command remote installer for projects and agents.

## When not to use project scope

Use global or personal installation only when the same skills should apply to
every project on a machine. For repository-specific spikalabs UI work, prefer
project scope so the behavior travels with the target repository and does not
leak into unrelated Codex or Claude Code sessions.
