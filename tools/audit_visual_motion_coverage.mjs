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

const requiredSections = [
  "Mandatory `<design_plan>`",
  "Style Operating Mode",
  "Signature System",
  "First Viewport Protocol",
  "Archetype Picker",
  "Component Arsenal",
  "Component Blueprints",
  "Technical Recipes",
  "Animation System",
  "Complete Page Protocols",
  "Reference Use",
  "Pre-Output Checklist"
];

const requiredTerms = [
  "radius",
  "typography",
  "color",
  "surface",
  "spacing",
  "hover",
  "focus",
  "active",
  "disabled",
  "loading",
  "empty",
  "error",
  "success",
  "reduced-motion",
  "transform",
  "opacity",
  "responsive",
  "marketplace",
  "hero",
  "footer"
];

const technicalPatterns = {
  cssFence: /```css/g,
  tsxFence: /```tsx/g,
  codeFence: /```/g,
  keyframes: /@keyframes/g,
  gsap: /\bgsap\b|ScrollTrigger|useGSAP/g,
  cssMotion: /transition:|animation:|transform:|will-change|prefers-reduced-motion/g,
  advancedVisual: /clip-path|backdrop-filter|mix-blend-mode|filter:|box-shadow|radial-gradient|linear-gradient/g,
  designTokens: /--[a-z0-9-]+:/gi,
  colorHex: /#[0-9a-fA-F]{3,8}\b/g,
  exactPx: /\b\d+(?:\.\d+)?px\b/g
};

function read(file) {
  return fs.existsSync(file) ? fs.readFileSync(file, "utf8") : "";
}

function count(text, regex) {
  return [...text.matchAll(regex)].length;
}

function uniqMatches(text, regex, limit = 20) {
  const seen = new Map();
  for (const match of text.matchAll(regex)) {
    const value = match[0].toLowerCase();
    seen.set(value, (seen.get(value) || 0) + 1);
  }
  return [...seen.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, limit)
    .map(([value, hits]) => `${value}(${hits})`);
}

function sectionMisses(text) {
  return requiredSections.filter((section) => !text.includes(section));
}

function termMisses(text) {
  const lower = text.toLowerCase();
  return requiredTerms.filter((term) => !lower.includes(term));
}

const rows = [];

for (const slug of slugs) {
  const source = read(path.join(sourceRoot, slug, "SKILL.md"));
  const skill = read(path.join(installRoot, slug, "SKILL.md"));

  const rawMotionSignals = count(source, /@keyframes|gsap|ScrollTrigger|animation:|transition:|transform:|backdrop-filter|clip-path|mix-blend-mode|filter:/g);
  const skillMotionSignals = count(skill, /@keyframes|gsap|ScrollTrigger|animation:|transition:|transform:|backdrop-filter|clip-path|mix-blend-mode|filter:/g);
  const rawColors = uniqMatches(source, technicalPatterns.colorHex, 12);
  const skillColors = uniqMatches(skill, technicalPatterns.colorHex, 12);
  const rawPx = uniqMatches(source, technicalPatterns.exactPx, 12);
  const skillPx = uniqMatches(skill, technicalPatterns.exactPx, 12);

  const metrics = Object.fromEntries(
    Object.entries(technicalPatterns).map(([name, regex]) => [name, count(skill, regex)])
  );

  const misses = [
    ...sectionMisses(skill).map((item) => `section:${item}`),
    ...termMisses(skill).map((item) => `term:${item}`)
  ];

  const warnings = [];
  if (skill.length < 24000) warnings.push("main skill below 24k chars");
  if (metrics.cssFence < 1) warnings.push("no css recipe fence");
  if (metrics.tsxFence < 2) warnings.push("too few tsx recipes");
  if (metrics.designTokens < 6) warnings.push("too few design tokens");
  if (metrics.advancedVisual < 4) warnings.push("too few advanced visual CSS cues");
  if (metrics.cssMotion < 8) warnings.push("too few concrete CSS motion cues");
  if (rawMotionSignals > 30 && skillMotionSignals < 12) warnings.push("raw has rich motion but installable has weak motion extraction");
  if (rawColors.length >= 8 && skillColors.length < 6) warnings.push("raw has richer color tokens than installable");
  if (rawPx.length >= 8 && skillPx.length < 8) warnings.push("raw has richer px/radius/spacing signals than installable");

  rows.push({
    slug,
    chars: skill.length,
    lines: skill.split(/\r?\n/).length,
    rawMotionSignals,
    skillMotionSignals,
    metrics,
    misses,
    warnings,
    rawColors,
    skillColors,
    rawPx,
    skillPx
  });
}

const summary = {
  count: rows.length,
  warnings: rows.reduce((sum, row) => sum + row.warnings.length, 0),
  misses: rows.reduce((sum, row) => sum + row.misses.length, 0),
  weakMotionExtraction: rows.filter((row) => row.warnings.some((warning) => warning.includes("weak motion"))).map((row) => row.slug),
  lowAdvancedVisual: rows.filter((row) => row.warnings.some((warning) => warning.includes("advanced visual"))).map((row) => row.slug)
};

console.log(JSON.stringify({ summary, rows }, null, 2));
