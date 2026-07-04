# Git Bundle Usage

The bundle produced for this fork contains the complete `feat/spika-neobrutal-skillkit` branch plus the `upstream-import` tag created from the attached source ZIP.

## Option A: Clone the converted fork from the bundle

```bash
git clone spikalabs-design-kit.bundle spikalabs-design-kit
cd spikalabs-design-kit
git checkout feat/spika-neobrutal-skillkit
```

Use this when you want the converted fork as a standalone repository.

## Option B: Fetch and merge into an existing repository

```bash
cd /path/to/your/repo
git fetch /path/to/spikalabs-design-kit.bundle feat/spika-neobrutal-skillkit:refs/remotes/bundle/spika-neobrutal-skillkit
git checkout -b integrate/spika-neobrutal
```

If your repository was initialized from the same imported ZIP history:

```bash
git merge --no-ff refs/remotes/bundle/spika-neobrutal-skillkit
```

If your repository has different history but the same or similar files, Git may report unrelated histories. In that case, review carefully and use:

```bash
git merge --allow-unrelated-histories --no-ff refs/remotes/bundle/spika-neobrutal-skillkit
```

Resolve conflicts, then run:

```bash
git status
git log --oneline --decorate --graph --max-count=20
```

## Safety notes

- Inspect the diff before merging into production branches.
- The legal MIT copyright notice is preserved in `LICENSE`.
- The active fork name is `spikalabs-design-kit`.
