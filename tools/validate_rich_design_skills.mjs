import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const sourceRoot = path.join(root, "skills");
const installRoot = path.join(root, ".agents", "skills");

const slugs = fs
  .readdirSync(sourceRoot, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort();

const forbidden = [
  "Reusable style-specific module",
  "Source-specific layout, color, type, component, and motion lessons",
  "A concrete promise with",
  "--source-color-",
  "Raw-Derived Technical Signals",
  "Raw-Derived Token Starter",
  "border-emerald-500",
  "text-emerald-700",
  "#3c422",
];

const requiredConcepts = [
  ["core", /\bCore Directive\b|\bNorth Star\b|\bOperating Mode\b|\bWorking Contract\b|\bDesign Plan\b|\bNon-Negotiable Principles\b/i],
  ["differentiation", /\bDifferentiation\b|\bUse .* instead of\b|\bvs\.?\b|\bversus\b|\binstead of\b|\bsharper than\b|\brather than\b|\bAvoid when\b|\bDo not make\b|\bnot a\b/i],
  ["tokens", /\bTokens\b|\bHex\b|--[a-z0-9-]+:/i],
  ["archetypes", /\bArchetype/i],
  ["components", /\bComponent/i],
  ["motion", /\bMotion\b|\bAnimation\b|@keyframes|prefers-reduced-motion/i],
  ["states", /\bhover\b[\s\S]{0,600}\bfocus\b|\bfocus(?:-visible)?\b[\s\S]{0,600}\bhover\b|\bRequired states\b|\bState contract\b|\bstates are designed\b/i],
  ["checklist", /\bChecklist\b|\bPre-Output\b|\bPreflight\b/i],
];

function read(file) {
  return fs.existsSync(file) ? fs.readFileSync(file, "utf8") : "";
}

function parseFrontmatter(text) {
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
  if (!match) return { ok: false, keys: [] };
  const keys = [];
  for (const line of match[1].split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const idx = trimmed.indexOf(":");
    if (idx !== -1) keys.push(trimmed.slice(0, idx).trim());
  }
  return { ok: true, keys };
}

function countMatches(text, pattern) {
  if (typeof pattern === "string") return text.split(pattern).length - 1;
  return [...text.matchAll(pattern)].length;
}

function invalidHexes(text) {
  const matches = [...text.matchAll(/#[0-9a-fA-F]{1,8}\b/g)].map((m) => m[0]);
  return [...new Set(matches.filter((hex) => !/^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/.test(hex)))];
}

const rows = [];

for (const slug of slugs) {
  const file = path.join(installRoot, slug, "SKILL.md");
  const text = read(file);
  const frontmatter = parseFrontmatter(text);
  const errors = [];
  const warnings = [];

  if (!text) {
    errors.push("missing SKILL.md");
  }

  if (!frontmatter.ok) {
    errors.push("missing YAML frontmatter");
  } else {
    const extraKeys = frontmatter.keys.filter((key) => !["name", "description"].includes(key));
    if (!frontmatter.keys.includes("name")) errors.push("frontmatter missing name");
    if (!frontmatter.keys.includes("description")) errors.push("frontmatter missing description");
    if (extraKeys.length) warnings.push(`frontmatter extra keys: ${extraKeys.join(", ")}`);
  }

  if (text.length < 20000) warnings.push("below rich target: <20k chars");
  if (text.length > 48000) warnings.push("very large: >48k chars; verify it is not duplicated boilerplate");

  for (const needle of forbidden) {
    const hits = countMatches(text, needle);
    if (hits) errors.push(`forbidden '${needle}' (${hits})`);
  }

  const brokenTransformHits = countMatches(text, /\btransform:\s*uppercase\s*\(/gi);
  if (brokenTransformHits) errors.push(`forbidden broken transform uppercase parse (${brokenTransformHits})`);

  const badHexes = invalidHexes(text);
  if (badHexes.length) errors.push(`invalid hex tokens: ${badHexes.join(", ")}`);

  for (const [label, regex] of requiredConcepts) {
    if (!regex.test(text)) warnings.push(`missing/weak concept: ${label}`);
  }

  const codeFences = countMatches(text, /```/g);
  if (codeFences < 4) warnings.push("few code fences; skill may lack concrete recipes");
  if (!/prefers-reduced-motion/i.test(text)) warnings.push("missing prefers-reduced-motion fallback");
  if (!/@keyframes|ScrollTrigger|transition:|animation:/i.test(text)) warnings.push("missing concrete motion primitive");
  if (!/```(?:tsx|jsx|css|js|ts)/i.test(text)) warnings.push("missing typed code recipe fence");

  rows.push({
    slug,
    chars: text.length,
    lines: text.split(/\r?\n/).length,
    errors,
    warnings,
  });
}

const summary = {
  skills: rows.length,
  errors: rows.reduce((sum, row) => sum + row.errors.length, 0),
  warnings: rows.reduce((sum, row) => sum + row.warnings.length, 0),
  minChars: Math.min(...rows.map((row) => row.chars)),
  maxChars: Math.max(...rows.map((row) => row.chars)),
  avgChars: Math.round(rows.reduce((sum, row) => sum + row.chars, 0) / rows.length),
};

console.log(JSON.stringify({ summary, rows }, null, 2));

if (summary.errors > 0) process.exitCode = 1;
