#!/usr/bin/env node
import { constants as fsConstants } from 'node:fs';
import { access, cp, mkdir, readdir, readFile, rm, symlink } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const binPath = fileURLToPath(import.meta.url);
const packageRoot = path.resolve(path.dirname(binPath), '..');
const sourceSkillsDir = path.join(packageRoot, 'skills');
const defaultPackageSpec = 'github:spikalabscorp/spikalabs-design-kit';

process.stdout.on('error', (error) => {
  if (error && error.code === 'EPIPE') {
    process.exit(0);
  }
  throw error;
});

function printUsage() {
  console.log(`spikalabs-design-kit

Install spikalabs design-kit skills into project-scoped Codex and Claude Code locations.

Usage:
  spikalabs-design-kit [install-project-scope] [options]
  spikalabs-design-kit list
  spikalabs-design-kit agent-prompt [options]

Options:
  --target <path>       Target project root. Defaults to the current directory.
  --skill <name>        Install one skill. May be passed multiple times or as a comma-separated list.
  --copy                Copy skill directories into the target project. This is the default.
  --link                Symlink target project skills back to this package checkout.
  --codex-only          Install only Codex project skills under .agents/skills.
  --claude-only         Install only Claude Code project skills under .claude/skills.
  --force               Replace existing destination skill directories or symlinks.
  --dry-run             Print planned writes without changing files.
  --package-spec <spec> Package spec to show in the agent prompt. Defaults to ${defaultPackageSpec}.
  -h, --help            Show this help message.

Examples:
  npx -y spikalabs-design-kit --target .
  npx -y ${defaultPackageSpec} --target . --skill spikalabs-design-kit-frontend
  npx -y ${defaultPackageSpec} agent-prompt --skill spikalabs-design-kit-gpt
`);
}

function parseArgs(rawArgs) {
  const args = [...rawArgs];
  let command = 'install-project-scope';

  if (args[0] && !args[0].startsWith('-')) {
    const first = args.shift();
    if (['install', 'install-project-scope', 'list', 'agent-prompt', 'help'].includes(first)) {
      command = first === 'install' ? 'install-project-scope' : first;
    } else {
      throw new Error(`Unknown command: ${first}`);
    }
  }

  const options = {
    command,
    target: '.',
    skills: [],
    mode: 'copy',
    installCodex: true,
    installClaude: true,
    force: false,
    dryRun: false,
    packageSpec: defaultPackageSpec,
  };

  for (let index = 0; index < args.length; index += 1) {
    const arg = args[index];
    const readValue = () => {
      const value = args[index + 1];
      if (!value || value.startsWith('-')) {
        throw new Error(`Missing value for ${arg}`);
      }
      index += 1;
      return value;
    };

    switch (arg) {
      case '--target':
        options.target = readValue();
        break;
      case '--skill':
        options.skills.push(...readValue().split(',').map((skill) => skill.trim()).filter(Boolean));
        break;
      case '--copy':
        options.mode = 'copy';
        break;
      case '--link':
        options.mode = 'link';
        break;
      case '--codex-only':
        options.installCodex = true;
        options.installClaude = false;
        break;
      case '--claude-only':
        options.installCodex = false;
        options.installClaude = true;
        break;
      case '--force':
        options.force = true;
        break;
      case '--dry-run':
        options.dryRun = true;
        break;
      case '--package-spec':
        options.packageSpec = readValue();
        break;
      case '-h':
      case '--help':
        options.command = 'help';
        break;
      default:
        throw new Error(`Unknown option: ${arg}`);
    }
  }

  return options;
}

async function exists(filePath) {
  try {
    await access(filePath, fsConstants.F_OK);
    return true;
  } catch {
    return false;
  }
}

async function assertSourceSkillsDir() {
  if (!(await exists(sourceSkillsDir))) {
    throw new Error(`Cannot find packaged skills directory: ${sourceSkillsDir}`);
  }
}

async function listAvailableSkills() {
  await assertSourceSkillsDir();
  const entries = await readdir(sourceSkillsDir, { withFileTypes: true });
  const skillNames = [];

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const skillPath = path.join(sourceSkillsDir, entry.name, 'SKILL.md');
    if (await exists(skillPath)) {
      skillNames.push(entry.name);
    }
  }

  return skillNames.sort((a, b) => a.localeCompare(b));
}

async function readSkillDescription(skillName) {
  const skillPath = path.join(sourceSkillsDir, skillName, 'SKILL.md');
  const content = await readFile(skillPath, 'utf8');
  const match = content.match(/^description:\s*(.+)$/m);
  return match?.[1]?.trim() ?? '';
}

function linkTarget(sourcePath, destinationParent) {
  if (process.platform === 'win32') {
    return sourcePath;
  }
  return path.relative(destinationParent, sourcePath) || '.';
}

async function installSkill({ sourcePath, destinationPath, mode, force, dryRun }) {
  const destinationParent = path.dirname(destinationPath);

  if (await exists(destinationPath)) {
    if (!force) {
      throw new Error(`Destination exists: ${destinationPath}. Use --force to replace it.`);
    }

    if (!dryRun) {
      await rm(destinationPath, { recursive: true, force: true });
    }
  }

  if (dryRun) {
    console.log(`[dry-run] ${mode} ${sourcePath} -> ${destinationPath}`);
    return;
  }

  await mkdir(destinationParent, { recursive: true });

  if (mode === 'copy') {
    await cp(sourcePath, destinationPath, { recursive: true, force: false, errorOnExist: true });
    return;
  }

  await symlink(linkTarget(sourcePath, destinationParent), destinationPath, process.platform === 'win32' ? 'junction' : 'dir');
}

async function installProjectScope(options) {
  if (!options.installCodex && !options.installClaude) {
    throw new Error('Nothing to install: both Codex and Claude Code outputs are disabled.');
  }

  const availableSkills = await listAvailableSkills();
  const requestedSkills = options.skills.length > 0 ? [...new Set(options.skills)] : availableSkills;
  const missingSkills = requestedSkills.filter((skillName) => !availableSkills.includes(skillName));

  if (missingSkills.length > 0) {
    throw new Error(`Unknown skill(s): ${missingSkills.join(', ')}\nAvailable skills: ${availableSkills.join(', ')}`);
  }

  const targetRoot = path.resolve(options.target);
  if (!options.dryRun) {
    await mkdir(targetRoot, { recursive: true });
  }

  for (const skillName of requestedSkills) {
    const sourcePath = path.join(sourceSkillsDir, skillName);

    if (options.installCodex) {
      await installSkill({
        sourcePath,
        destinationPath: path.join(targetRoot, '.agents', 'skills', skillName),
        mode: options.mode,
        force: options.force,
        dryRun: options.dryRun,
      });
    }

    if (options.installClaude) {
      await installSkill({
        sourcePath,
        destinationPath: path.join(targetRoot, '.claude', 'skills', skillName),
        mode: options.mode,
        force: options.force,
        dryRun: options.dryRun,
      });
    }
  }

  const action = options.dryRun ? 'Planned' : 'Installed';
  console.log(`${action} ${requestedSkills.length} skill(s) into ${targetRoot} using ${options.mode} mode.`);
  console.log(`Codex project scope:  ${options.installCodex ? path.join(targetRoot, '.agents', 'skills') : 'disabled'}`);
  console.log(`Claude project scope: ${options.installClaude ? path.join(targetRoot, '.claude', 'skills') : 'disabled'}`);
  console.log('Next: review the generated project-scope skill folders and commit them with your project if they should travel with the repository.');
}

async function printSkillList() {
  const skills = await listAvailableSkills();
  for (const skill of skills) {
    const description = await readSkillDescription(skill);
    console.log(description ? `${skill}\t${description}` : skill);
  }
}

function buildInstallCommand(options) {
  const parts = ['npx', '-y', options.packageSpec, '--target', options.target || '.'];

  for (const skill of options.skills) {
    parts.push('--skill', skill);
  }
  if (options.mode === 'link') parts.push('--link');
  if (options.installCodex && !options.installClaude) parts.push('--codex-only');
  if (!options.installCodex && options.installClaude) parts.push('--claude-only');
  if (options.force) parts.push('--force');

  return parts.map((part) => (/[\s"'\\]/.test(part) ? JSON.stringify(part) : part)).join(' ');
}

function printAgentPrompt(options) {
  const command = buildInstallCommand(options);
  console.log(`Copy this prompt into Codex CLI or Claude Code from the target repository root:\n\nInstall the spikalabs-design-kit skills as project-scoped skills for this repository only. Run:\n\n${command}\n\nThen verify that SKILL.md files exist under .agents/skills for Codex and .claude/skills for Claude Code, unless I asked for only one agent surface. Review the generated files, keep copy mode unless I explicitly asked for symlinks, and commit the changes with a Conventional Commits message.`);
}

async function main() {
  const options = parseArgs(process.argv.slice(2));

  if (options.command === 'help') {
    printUsage();
    return;
  }

  if (options.command === 'list') {
    await printSkillList();
    return;
  }

  if (options.command === 'agent-prompt') {
    printAgentPrompt(options);
    return;
  }

  await installProjectScope(options);
}

main().catch((error) => {
  console.error(`spikalabs-design-kit: ${error.message}`);
  process.exitCode = 1;
});
