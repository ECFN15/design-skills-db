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

const markers = [
  ["DesignPlan", "## Mandatory `<design_plan>`"],
  ["OperatingMode", "## Style Operating Mode"],
  ["SignatureSystem", "## Signature System"],
  ["Differentiation", "## Differentiation"],
  ["Execution", "### Execution Token Contract"],
  ["TailwindMap", "Tailwind to token mapping:"],
  ["CoreKit", "### Core Component Kit"],
  ["PageProtocols", "## Complete Page Protocols"],
  ["ReferenceUse", "references/refero-style-database.md"],
  ["RadiusStd", "--radius-control"],
  ["StatusTokens", "--status-success-bg"],
  ["SkeletonTSX", "```tsx"],
  ["Pairing", "Pairing rules:"],
];

let failures = 0;
for (const slug of targets) {
  const file = path.join(".agents", "skills", slug, "SKILL.md");
  const text = fs.readFileSync(file, "utf8");
  const missing = markers.filter(([, marker]) => !text.includes(marker)).map(([name]) => name);
  if (missing.length) failures += 1;
  console.log(
    JSON.stringify({
      slug,
      chars: text.length,
      lines: text.split(/\r?\n/).length,
      missing,
    })
  );
}

if (failures) {
  process.exitCode = 1;
}
