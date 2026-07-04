# Patch Usage

`spikalabs-design-kit` changes are delivered as Git patch files for reviewable, incremental application.

## Apply the latest patch

From the target repository root:

```bash
git checkout -b integrate/spikalabs-design-kit
git am /path/to/spikalabs-design-kit-update.patch
```

## Review before merging

```bash
git log --oneline --decorate --max-count=10
git diff main...HEAD --stat
git diff main...HEAD
```

Adjust `main` if your integration base branch uses a different name.

## Conflict handling

If `git am` reports a conflict:

```bash
git status
# edit the conflicted files
git add <resolved-files>
git am --continue
```

To abandon the patch application:

```bash
git am --abort
```

## Notes

- Patch commits should remain small, reviewable, and reversible.
- Commit messages should follow Conventional Commits.
- The kit is primarily for SpikaLabs internal design workflows, even when the repository is externally visible.
