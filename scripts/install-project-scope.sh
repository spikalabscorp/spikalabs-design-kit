#!/usr/bin/env bash
set -euo pipefail

usage() {
  cat <<'USAGE'
Install spikalabs-design-kit skills into a target project using project-scoped
locations for Codex and Claude Code.

Usage:
  scripts/install-project-scope.sh [options]

Options:
  --target <path>    Target project root. Defaults to the current directory.
  --skill <name>     Install one skill. May be passed multiple times. Defaults to all skills.
  --copy             Copy skill directories into the target project. This is the default.
  --link             Symlink target project skills back to this kit checkout.
  --codex-only       Install only Codex project skills under .agents/skills.
  --claude-only      Install only Claude Code project skills under .claude/skills.
  --force            Replace existing destination skill directories or symlinks.
  -h, --help         Show this help message.

Examples:
  scripts/install-project-scope.sh --target ../my-app
  scripts/install-project-scope.sh --target ../my-app --skill spikalabs-design-kit-frontend
  scripts/install-project-scope.sh --target ../my-app --link --force
USAGE
}

script_dir="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
kit_root="$(cd -- "$script_dir/.." && pwd)"
source_skills_dir="$kit_root/skills"

target_root="$PWD"
mode="copy"
install_codex=1
install_claude=1
force=0
declare -a requested_skills=()

while [[ $# -gt 0 ]]; do
  case "$1" in
    --target)
      [[ $# -ge 2 ]] || { echo "Missing value for --target" >&2; exit 2; }
      target_root="$2"
      shift 2
      ;;
    --skill)
      [[ $# -ge 2 ]] || { echo "Missing value for --skill" >&2; exit 2; }
      requested_skills+=("$2")
      shift 2
      ;;
    --copy)
      mode="copy"
      shift
      ;;
    --link)
      mode="link"
      shift
      ;;
    --codex-only)
      install_codex=1
      install_claude=0
      shift
      ;;
    --claude-only)
      install_codex=0
      install_claude=1
      shift
      ;;
    --force)
      force=1
      shift
      ;;
    -h|--help)
      usage
      exit 0
      ;;
    *)
      echo "Unknown option: $1" >&2
      usage >&2
      exit 2
      ;;
  esac
done

if [[ ! -d "$source_skills_dir" ]]; then
  echo "Cannot find source skills directory: $source_skills_dir" >&2
  exit 1
fi

mkdir -p "$target_root"
target_root="$(cd -- "$target_root" && pwd)"

if [[ $install_codex -eq 0 && $install_claude -eq 0 ]]; then
  echo "Nothing to install: both Codex and Claude Code outputs are disabled." >&2
  exit 2
fi

if [[ ${#requested_skills[@]} -eq 0 ]]; then
  while IFS= read -r -d '' skill_path; do
    requested_skills+=("$(basename "$skill_path")")
  done < <(find "$source_skills_dir" -mindepth 1 -maxdepth 1 -type d -print0 | sort -z)
fi

relative_path() {
  local source_path="$1"
  local dest_dir="$2"

  if command -v python3 >/dev/null 2>&1; then
    python3 - "$source_path" "$dest_dir" <<'PY'
import os
import sys
source_path = os.path.abspath(sys.argv[1])
dest_dir = os.path.abspath(sys.argv[2])
print(os.path.relpath(source_path, dest_dir))
PY
  else
    printf '%s\n' "$source_path"
  fi
}

install_skill() {
  local source_path="$1"
  local dest_path="$2"
  local dest_parent
  dest_parent="$(dirname "$dest_path")"

  mkdir -p "$dest_parent"

  if [[ -e "$dest_path" || -L "$dest_path" ]]; then
    if [[ $force -ne 1 ]]; then
      echo "Destination exists, skipping: $dest_path" >&2
      echo "Use --force to replace it." >&2
      return 1
    fi
    rm -rf "$dest_path"
  fi

  if [[ "$mode" == "copy" ]]; then
    cp -R "$source_path" "$dest_path"
  else
    local relative_source
    relative_source="$(relative_path "$source_path" "$dest_parent")"
    ln -s "$relative_source" "$dest_path"
  fi
}

for skill_name in "${requested_skills[@]}"; do
  source_path="$source_skills_dir/$skill_name"
  if [[ ! -f "$source_path/SKILL.md" ]]; then
    echo "Unknown skill or missing SKILL.md: $skill_name" >&2
    exit 1
  fi

  if [[ $install_codex -eq 1 ]]; then
    install_skill "$source_path" "$target_root/.agents/skills/$skill_name"
  fi

  if [[ $install_claude -eq 1 ]]; then
    install_skill "$source_path" "$target_root/.claude/skills/$skill_name"
  fi

done

cat <<SUMMARY
Installed ${#requested_skills[@]} skill(s) into $target_root using $mode mode.
Codex project scope:  $([[ $install_codex -eq 1 ]] && echo "$target_root/.agents/skills" || echo "disabled")
Claude project scope: $([[ $install_claude -eq 1 ]] && echo "$target_root/.claude/skills" || echo "disabled")
SUMMARY
