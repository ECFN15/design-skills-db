import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const publishRoot = path.join(root, "publish", "refero-design-skills");
const publishSkills = path.join(publishRoot, ".agents", "skills");
const sourceStyleRoot = path.join(root, "skills");
const installableRoot = path.join(root, ".agents", "skills");

function copyDir(source, target) {
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.cpSync(source, target, { recursive: true, force: true });
}

const slugs = fs
  .readdirSync(sourceStyleRoot, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort();

fs.mkdirSync(publishSkills, { recursive: true });

for (const slug of slugs) {
  const source = path.join(installableRoot, slug);
  if (!fs.existsSync(path.join(source, "SKILL.md"))) {
    throw new Error(`Missing installable skill: ${slug}`);
  }
  copyDir(source, path.join(publishSkills, slug));
}

const sharedProtocol = path.join(installableRoot, "_shared");
if (fs.existsSync(sharedProtocol)) {
  copyDir(sharedProtocol, path.join(publishSkills, "_shared"));
}

const list = slugs.map((slug) => `- \`${slug}\``).join("\n");

const readme = `# Refero Design Skills

Installable visual-design skill pack generated from Refero style references.

## Install

After this folder is published as a GitHub repository:

\`\`\`powershell
npx skills add <owner>/<repo>
\`\`\`

Install one specific skill:

\`\`\`powershell
npx skills add <owner>/<repo> --skill high-end-design
\`\`\`

Test locally from the parent workspace:

\`\`\`powershell
npx skills add .\\publish\\refero-design-skills --list
\`\`\`

## Skills

${list}

## Structure

Each skill follows the universal Agent Skills layout:

\`\`\`
.agents/skills/<skill-name>/SKILL.md
.agents/skills/<skill-name>/references/refero-style-database.md
.agents/skills/<skill-name>/references/sources/*.md
\`\`\`

The main \`SKILL.md\` is intentionally concise and directive. The large Refero-derived database is loaded only when needed through \`references/\`.
`;

fs.writeFileSync(path.join(publishRoot, "README.md"), readme, "utf8");

const changelog = path.join(root, "CHANGELOG.md");
if (fs.existsSync(changelog)) {
  fs.copyFileSync(changelog, path.join(publishRoot, "CHANGELOG.md"));
}

console.log(JSON.stringify({ publishRoot, skills: slugs.length }, null, 2));
