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
  const designPlanHeadings = (text.match(/^## Mandatory `<design_plan>`$/gm) || []).length;
  const oldPlanFragments = [
    "For substantial UI work, start with a compact `<design_plan>`",
    "Before a substantial UI, output a compact `<design_plan>` block with",
    "Before writing code for a substantial UI, decide:",
    "For substantial UI work, make these decisions before writing code:",
  ].filter((fragment) => text.includes(fragment));
  const protocolHasPlaceholder = /Concrete proof module|Stateful module|Offer, plan, product, story, or record/.test(text);
  const monochromeChroma =
    slug === "monochrome-ui" &&
    /#ecfdf5|#047857|#eef4ff|#3152d4|#fffbeb|#b45309|#fff1f2|#b91c1c/.test(text);
  const result = {
    slug,
    designPlanHeadings,
    oldPlanFragments,
    protocolHasPlaceholder,
    monochromeChroma,
  };
  if (designPlanHeadings !== 1 || oldPlanFragments.length || protocolHasPlaceholder || monochromeChroma) {
    failures += 1;
  }
  console.log(JSON.stringify(result));
}

if (failures) process.exitCode = 1;
