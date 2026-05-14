import fs from "node:fs";
import path from "node:path";

const targets = [
  "cyber-neon",
  "dark-ui",
  "editorial-minimal",
  "editorial-type",
  "experimental-type",
  "expressive-brand",
  "geometric-modern",
  "glossy-modern",
  "high-contrast",
  "high-end-design",
  "light-ui",
  "minimal-design",
  "monochrome-ui",
  "motion",
  "pastel",
  "playful-design",
  "serif-display",
  "soft-gradients",
  "technical-sans",
  "technical-ui",
  "utilitarian",
  "vibrant-accents",
];

let failures = 0;
for (const slug of targets) {
  const text = fs.readFileSync(path.join(".agents", "skills", slug, "SKILL.md"), "utf8");
  const diff = text.match(/## Differentiation[\s\S]*?(?=\n## [^#]|$)/);
  const contract = text.match(/### Execution Token Contract[\s\S]*?(?=\n## [^#]|\n### [^#]|$)/);
  const mode = text.match(/## Style Operating Mode[\s\S]*?(?=\n## [^#]|$)/);
  const signature = text.match(/## Signature System[\s\S]*?(?=\n## [^#]|$)/);
  const issues = [];
  if (!diff || diff[0].trim().split(/\r?\n/).length < 3) issues.push("short-differentiation");
  if (!contract || !contract[0].includes("```css")) issues.push("bad-contract");
  if (!mode || !mode[0].includes("| Control | Setting |")) issues.push("bad-operating-mode");
  if (!signature || !signature[0].includes("- ")) issues.push("bad-signature-system");
  if (issues.length) failures += 1;
  console.log(JSON.stringify({ slug, issues }));
}

if (failures) process.exitCode = 1;
