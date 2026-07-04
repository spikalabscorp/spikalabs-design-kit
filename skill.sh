#!/usr/bin/env bash

# Local skill registry for the internal spikalabs-design-kit
declare -A SKILLS=(
  [spikalabs-design-kit-frontend]="skills/spikalabs-design-kit-frontend/SKILL.md"
  [spikalabs-design-kit-redesign]="skills/spikalabs-design-kit-redesign/SKILL.md"
  [spikalabs-design-kit-gpt]="skills/spikalabs-design-kit-gpt/SKILL.md"
  [spikalabs-design-kit-image-to-code]="skills/spikalabs-design-kit-image-to-code/SKILL.md"
  [spikalabs-design-kit-imagegen-web]="skills/spikalabs-design-kit-imagegen-web/SKILL.md"
  [spikalabs-design-kit-imagegen-mobile]="skills/spikalabs-design-kit-imagegen-mobile/SKILL.md"
  [spikalabs-design-kit-brandkit]="skills/spikalabs-design-kit-brandkit/SKILL.md"
  [spikalabs-design-kit-stitch]="skills/spikalabs-design-kit-stitch/SKILL.md"
  [spikalabs-design-kit-output-enforcement]="skills/spikalabs-design-kit-output-enforcement/SKILL.md"
)

if [[ $# -eq 0 ]]; then
  echo "Usage: source ./skill.sh <skill-name>"
  echo "Available skills: ${!SKILLS[@]}"
  return 0 2>/dev/null || exit 0
fi

if [[ -z "${SKILLS[$1]}" ]]; then
  echo "Unknown skill: $1" >&2
  echo "Available skills: ${!SKILLS[@]}" >&2
  return 1 2>/dev/null || exit 1
fi

echo "${SKILLS[$1]}"
