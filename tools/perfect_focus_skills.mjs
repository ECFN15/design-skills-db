import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const skillRoot = path.join(root, ".agents", "skills");

const principles = {
  "editorial-minimal": [
    "Type, whitespace, rhythm, image crop, and caption placement carry the identity.",
    "The page must feel edited, not empty: every quiet section needs proof, structure, or authorship.",
    "Use one strong editorial move, then repeat it with restraint instead of adding decoration."
  ],
  "minimal-design": [
    "Remove decoration only after the product, portfolio, or workflow remains clear.",
    "Alignment, measure, rhythm, and evidence replace cards, gradients, and ornamental UI.",
    "A minimal page still needs visible navigation, states, actions, and mobile hierarchy."
  ],
  "monochrome-ui": [
    "Black, white, gray, inversion, border weight, and density must carry all hierarchy.",
    "State cannot rely on random chromatic color; use labels, contrast, icons, outlines, and pattern.",
    "Every panel needs a clear gray job: canvas, surface, raised, selected, disabled, or overlay."
  ],
  "serif-display": [
    "The serif display face is the identity object, not a decorative heading pasted on default layout.",
    "Display type uses tight leading; body copy keeps a readable measure and comfortable rhythm.",
    "Premium editorial pace comes from type, image sequence, material cues, and quiet conversion."
  ]
};

function read(slug) {
  return fs.readFileSync(path.join(skillRoot, slug, "SKILL.md"), "utf8");
}

function write(slug, text) {
  fs.writeFileSync(path.join(skillRoot, slug, "SKILL.md"), text.replace(/\n{4,}/g, "\n\n\n"), "utf8");
}

function range(text, startMarker, endPattern = /\n## /g) {
  const start = text.indexOf(startMarker);
  if (start === -1) return null;
  endPattern.lastIndex = start + startMarker.length;
  const next = endPattern.exec(text);
  return { start, end: next ? next.index : text.length };
}

function section(text, marker) {
  const found = range(text, marker, /\n## /g);
  if (!found) return null;
  return { ...found, content: text.slice(found.start, found.end).trim() + "\n" };
}

function removeRange(text, found) {
  return text.slice(0, found.start).replace(/\s+$/, "\n\n") + text.slice(found.end).replace(/^\s+/, "");
}

function insertBefore(text, marker, content) {
  const index = text.indexOf(marker);
  if (index === -1) throw new Error(`Missing insert marker ${marker}`);
  return text.slice(0, index).replace(/\s+$/, "\n\n") + content.trim() + "\n\n" + text.slice(index).replace(/^\s+/, "");
}

function insertAfterSection(text, marker, content) {
  const found = range(text, marker, /\n## /g);
  if (!found) throw new Error(`Missing section ${marker}`);
  return text.slice(0, found.end).replace(/\s+$/, "\n\n") + content.trim() + "\n\n" + text.slice(found.end).replace(/^\s+/, "");
}

function appendReference(slug, title, blocks) {
  const referencesDir = path.join(skillRoot, slug, "references");
  fs.mkdirSync(referencesDir, { recursive: true });
  const file = path.join(referencesDir, "advanced-implementation-notes.md");
  const cleanBlocks = blocks.filter(Boolean).map((block) => block.trim()).filter(Boolean);
  if (!cleanBlocks.length) return;
  const body = `# ${title} - Advanced Implementation Notes

These sections were moved out of SKILL.md to keep the runtime skill closer to the Clean SaaS structure while preserving detailed implementation examples for deeper work.

Load this file only after choosing the archetype and only when the compact component kit in SKILL.md is not enough.

${cleanBlocks.join("\n\n---\n\n")}
`;
  fs.writeFileSync(file, body, "utf8");
}

function updateReferenceUse(text) {
  const ref = section(text, "## Reference Use");
  if (!ref) return text;
  const replacement = `## Reference Use

For deeper source extraction, load \`references/refero-style-database.md\`. For source-specific inspiration, load only the selected file under \`references/sources/\`. For expanded implementation examples, load \`references/advanced-implementation-notes.md\` only after the archetype and token pack are chosen.
`;
  return text.slice(0, ref.start) + replacement + text.slice(ref.end);
}

function polishEditorialFamily(slug, tokenAnchor, extraExtract = []) {
  let text = read(slug);
  const notes = [];

  const token = section(text, "### Execution Token Contract");
  const style = section(text, "## Style Operating Mode");
  const signature = section(text, "## Signature System");

  if (!token || !style || !signature) throw new Error(`Missing movable block in ${slug}`);

  text = removeRange(text, token);
  text = removeRange(text, style);
  text = removeRange(text, signature);

  if (!text.includes("## Core Directive")) {
    const sourceMarker = "\n## Source Archetypes";
    const sourceIndex = text.indexOf(sourceMarker);
    const tiny = "If the request is tiny, do this mentally and keep the final answer concise.";
    const tinyIndex = text.indexOf(tiny);
    if (sourceIndex === -1 || tinyIndex === -1) throw new Error(`Could not wrap directive for ${slug}`);
    const directiveStart = tinyIndex + tiny.length;
    const directive = text.slice(directiveStart, sourceIndex).trim();
    const nonNegotiable = `## Non-Negotiable Principles\n\n${principles[slug].map((item) => `- ${item}`).join("\n")}`;
    const replacement = `\n\n## Core Directive\n\n${directive}\n\n${nonNegotiable}\n\n${style.content}\n\n${signature.content}\n`;
    text = text.slice(0, directiveStart) + replacement + text.slice(sourceIndex);
  } else {
    text = insertBefore(text, "\n## Source Archetypes", `${style.content}\n\n${signature.content}`);
  }

  text = insertAfterSection(text, tokenAnchor, token.content);

  const recipes = section(text, "## Implementation Recipes");
  if (recipes) {
    notes.push(recipes.content);
    text = removeRange(text, recipes);
  }
  for (const heading of extraExtract) {
    const found = section(text, heading);
    if (found) {
      notes.push(found.content);
      text = removeRange(text, found);
    }
  }

  text = updateReferenceUse(text);
  appendReference(slug, slug, notes);
  write(slug, text);
}

function polishMotion() {
  const slug = "motion";
  let text = read(slug);
  const notes = [];

  const contractsStart = text.indexOf("## Component Contracts");
  const coreStart = text.indexOf("### Core Component Kit");
  const protocolsStart = text.indexOf("## Complete Page Protocols");
  const layoutStart = text.indexOf("## Layout And Type Rules");
  if ([contractsStart, coreStart, protocolsStart, layoutStart].some((index) => index === -1)) {
    throw new Error("Missing motion section markers");
  }

  notes.push(text.slice(contractsStart, coreStart).trim());
  const core = text.slice(coreStart, protocolsStart).trim();
  const protocols = text.slice(protocolsStart, layoutStart).trim();
  text = text.slice(0, contractsStart).replace(/\s+$/, "\n\n") + text.slice(layoutStart);
  text = insertBefore(text, "\n## Copyable Recipes", `${core}\n\n${protocols}`);
  text = updateReferenceUse(text);
  appendReference(slug, slug, notes);
  write(slug, text);
}

function polishVibrantAccents() {
  const slug = "vibrant-accents";
  let text = read(slug);
  const notes = [];

  const signature = section(text, "## Signature Components");
  const protocols = section(text, "## Complete Page Protocols");
  if (!signature || !protocols) throw new Error("Missing vibrant section markers");

  notes.push(signature.content);
  text = removeRange(text, protocols);
  text = removeRange(text, signature);

  const compactSignature = `## Signature Components

Use the Core Component Kit as the primary implementation path. Keep one vivid color budget, one neutral field, and one semantic state language.

- AccentHeroCTA: first viewport action and proof object.
- ColorCodedFilter: category mapping and active filter state.
- VividStatCard: metric proof with governed accent.
- NeutralProductGrid: product/content cards on quiet surface.
- CategoryTabs: persistent category color system.
`;

  text = insertBefore(text, "\n## Motion System", `${compactSignature}\n\n${protocols.content}`);
  text = updateReferenceUse(text);
  appendReference(slug, slug, notes);
  write(slug, text);
}

polishEditorialFamily("editorial-minimal", "## Semantic Token Model");
polishEditorialFamily("minimal-design", "## Semantic Token Model");
polishEditorialFamily("monochrome-ui", "## Gray Job Table");
polishEditorialFamily("serif-display", "## Semantic Token Model", ["## Layout Patterns"]);
polishMotion();
polishVibrantAccents();

console.log(JSON.stringify({ polished: ["editorial-minimal", "minimal-design", "monochrome-ui", "serif-display", "motion", "vibrant-accents"] }, null, 2));
