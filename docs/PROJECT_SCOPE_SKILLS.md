# Project-Scoped Skills

`spikalabs-design-kit` keeps the canonical skill definitions under `skills/` and
exposes them through project-scoped discovery locations for Codex and Claude
Code.

## Checked-in project locations

The repository includes these project-scope adapters:

```text
.agents/skills/<skill-name> -> ../../skills/<skill-name>
.claude/skills/<skill-name> -> ../../skills/<skill-name>
```

Use these locations when the kit itself is opened as a project, or when the
same layout is copied into another repository.

## Install into another project

From this kit checkout, install every skill into a target project:

```bash
./scripts/install-project-scope.sh --target /path/to/project
```

Install only one skill:

```bash
./scripts/install-project-scope.sh \
  --target /path/to/project \
  --skill spikalabs-design-kit-frontend
```

By default, the script copies skill folders into the target project so the
result is self-contained and commit-friendly.

For active kit development, use symlink mode instead:

```bash
./scripts/install-project-scope.sh --target /path/to/project --link --force
```

Use `--codex-only` or `--claude-only` when a project should support just one
agent surface.

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
When installing by copy into another project, rerun the installer with `--force`
after canonical skill updates.

## When not to use project scope

Use global or personal installation only when the same skills should apply to
every project on a machine. For repository-specific spikalabs UI work, prefer
project scope so the behavior travels with the target repository and does not
leak into unrelated Codex or Claude Code sessions.
