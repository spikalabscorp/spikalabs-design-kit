#!/usr/bin/env bash

# Local skill registry for the internal spikalabs-design-kit
declare -A SKILLS=(
  [spika-neobrutal-frontend]="skills/spika-neobrutal-frontend/SKILL.md"
  [spika-neobrutal-redesign]="skills/spika-neobrutal-redesign/SKILL.md"
  [spika-neobrutal-gpt]="skills/spika-neobrutal-gpt/SKILL.md"
  [spika-neobrutal-image-to-code]="skills/spika-neobrutal-image-to-code/SKILL.md"
  [spika-neobrutal-imagegen-web]="skills/spika-neobrutal-imagegen-web/SKILL.md"
  [spika-neobrutal-imagegen-mobile]="skills/spika-neobrutal-imagegen-mobile/SKILL.md"
  [spika-neobrutal-brandkit]="skills/spika-neobrutal-brandkit/SKILL.md"
  [spika-neobrutal-stitch]="skills/spika-neobrutal-stitch/SKILL.md"
  [complete-output-enforcement]="skills/complete-output-enforcement/SKILL.md"
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
