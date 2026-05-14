import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const root = process.cwd();
const activeRoot = path.join(root, ".agents", "skills");
const publishRoot = path.join(root, "publish", "refero-design-skills", ".agents", "skills");

const slugs = fs
  .readdirSync(activeRoot)
  .filter((slug) => fs.existsSync(path.join(activeRoot, slug, "references", "refero-style-database.md")))
  .sort();

const conceptMarkers = {
  designPlan: ["## Mandatory `<design_plan>`"],
  operatingMode: ["## Style Operating Mode"],
  signatureSystem: ["## Signature System"],
  differentiation: ["## Differentiation"],
  executionContract: ["### Execution Token Contract"],
  tailwindMap: ["Tailwind to token mapping:"],
  coreKit: ["### Core Component Kit"],
  pageProtocols: ["## Complete Page Protocols"],
  absoluteBans: ["## Absolute Bans"],
  referenceUse: ["## Reference Use"],
  checklist: ["## Pre-Output Checklist"],
};

const standardTokens = [
  "--canvas",
  "--surface",
  "--text",
  "--text-muted",
  "--line",
  "--action",
  "--radius-control",
  "--radius-card",
  "--radius-panel",
  "--ease-product",
  "--font-sans",
  "--font-mono",
  "--type-mono-xs",
  "--type-mono-sm",
  "--type-meta",
  "--type-body-sm",
  "--type-body",
  "--type-ui",
  "--type-card",
  "--type-section-sm",
  "--type-section",
  "--type-display",
  "--s-1",
  "--s-2",
  "--s-3",
  "--s-4",
  "--s-5",
  "--s-6",
  "--s-7",
  "--s-8",
  "--s-9",
  "--s-10",
  "--s-11",
  "--shadow-flat",
  "--shadow-card",
  "--shadow-panel",
  "--shadow-hero",
  "--shadow-modal",
  "--shadow-action",
  "--status-success-bg",
  "--status-success-fg",
  "--status-info-bg",
  "--status-info-fg",
  "--status-warning-bg",
  "--status-warning-fg",
  "--status-danger-bg",
  "--status-danger-fg",
  "--status-neutral-bg",
  "--status-neutral-fg",
];

const tailwindTokens = [
  "`text-xs`, `text-sm`",
  "`text-6xl`, `text-7xl`",
  "`p-3`, `p-4`, `p-5`",
  "`gap-3`, `gap-4`, `gap-6`",
  "`shadow-sm`, `shadow-md`",
  "`shadow-2xl`",
];

const stateWords = ["success", "info", "warning", "danger", "neutral", "hover", "focus-visible", "selected", "loading", "empty", "error", "disabled"];

function hash(file) {
  return crypto.createHash("sha256").update(fs.readFileSync(file)).digest("hex");
}

function lineNumber(lines, needle) {
  const index = lines.findIndex((line) => line.includes(needle));
  return index === -1 ? null : index + 1;
}

function blockFrom(text, heading, next = /^## /m) {
  const start = text.indexOf(heading);
  if (start === -1) return "";
  const rest = text.slice(start);
  const nextMatch = rest.slice(heading.length).search(next);
  return nextMatch === -1 ? rest : rest.slice(0, heading.length + nextMatch);
}

function frontmatter(text) {
  return text.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? "";
}

const rows = slugs.map((slug) => {
  const activeFile = path.join(activeRoot, slug, "SKILL.md");
  const publishFile = path.join(publishRoot, slug, "SKILL.md");
  const text = fs.readFileSync(activeFile, "utf8");
  const lines = text.split(/\r?\n/);
  const fm = frontmatter(text);
  const referencesFile = path.join(activeRoot, slug, "references", "design-use-cases.md");

  const missingConcepts = Object.entries(conceptMarkers)
    .filter(([, markers]) => !markers.some((marker) => text.includes(marker)))
    .map(([key]) => key);

  const designPlan = blockFrom(text, "## Mandatory `<design_plan>`");
  const planPoints = [...designPlan.matchAll(/^\d+\.\s+\*\*/gm)].length;
  const missingTokens = standardTokens.filter((token) => !text.includes(token));
  const missingTailwind = tailwindTokens.filter((token) => !text.includes(token));
  const missingStates = stateWords.filter((word) => !new RegExp(`\\b${word}\\b`, "i").test(text));

  const coreKit = blockFrom(text, "### Core Component Kit", /^## /m);
  const componentExports = [...coreKit.matchAll(/export function\s+\w+/g)].length;
  const hasStateContract = /data-state=|\[data-state|data-role=|\[data-role/i.test(coreKit);

  const protocols = blockFrom(text, "## Complete Page Protocols", /^## /m);
  const protocolFences = [...protocols.matchAll(/```tsx/g)].length;

  const issues = [];
  const cautions = [];

  if (missingConcepts.length) issues.push(`missing concepts: ${missingConcepts.join(", ")}`);
  if (planPoints < 8) issues.push(`design_plan only has ${planPoints}/8 points`);
  if (missingTokens.length) issues.push(`missing standard tokens: ${missingTokens.join(", ")}`);
  if (missingTailwind.length) issues.push(`missing Tailwind mappings: ${missingTailwind.join(", ")}`);
  if (componentExports < 4) issues.push(`core kit only has ${componentExports}/4 exported components`);
  if (!hasStateContract) issues.push("core kit lacks data-state/data-role contract");
  if (!protocolFences) issues.push("page protocols lack TSX skeleton");
  if (!fs.existsSync(referencesFile)) issues.push("missing references/design-use-cases.md");
  if (fs.existsSync(referencesFile) && /[^\x00-\x7F]/.test(fs.readFileSync(referencesFile, "utf8"))) {
    issues.push("design-use-cases.md contains non-ASCII");
  }
  if (fm && !fm.includes("USE FOR:")) issues.push("frontmatter description lacks USE FOR");
  if (fm && !fm.includes("DO NOT USE FOR:")) issues.push("frontmatter description lacks DO NOT USE FOR");
  if (!fs.existsSync(publishFile) || hash(activeFile) !== hash(publishFile)) issues.push("publish mirror mismatch");

  if (missingStates.length) cautions.push(`weak state vocabulary: ${missingStates.join(", ")}`);
  if (lines.length > 1000) cautions.push("over 1000 lines; consider future reference split if context pressure appears");

  const tokenLine = lineNumber(lines, "### Execution Token Contract");
  const coreKitLine = lineNumber(lines, "### Core Component Kit");
  const protocolLine = lineNumber(lines, "## Complete Page Protocols");
  if (tokenLine && tokenLine > 700) cautions.push(`execution contract appears late at line ${tokenLine}`);
  if (coreKitLine && coreKitLine > 700) cautions.push(`core component kit appears late at line ${coreKitLine}`);
  if (protocolLine && protocolLine > 900) cautions.push(`page protocols appear late at line ${protocolLine}`);

  return {
    slug,
    lines: lines.length,
    chars: text.length,
    planPoints,
    componentExports,
    protocolFences,
    tokenLine,
    coreKitLine,
    protocolLine,
    issues,
    cautions,
  };
});

const summary = {
  skills: rows.length,
  issues: rows.filter((row) => row.issues.length).length,
  cautions: rows.filter((row) => row.cautions.length).length,
  cleanSaas: rows.find((row) => row.slug === "clean-saas"),
  passAllHardGates: rows.every((row) => row.issues.length === 0),
};

console.log(JSON.stringify({ summary, rows }, null, 2));
if (!summary.passAllHardGates) process.exitCode = 1;
