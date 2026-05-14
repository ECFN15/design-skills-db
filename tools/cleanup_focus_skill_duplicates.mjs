import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const skillRoot = path.join(root, ".agents", "skills");
const targets = ["editorial-minimal", "minimal-design", "monochrome-ui", "serif-display"];

function range(text, start, nextRegex = /\n## /g) {
  nextRegex.lastIndex = start + 1;
  const next = nextRegex.exec(text);
  return { start, end: next ? next.index : text.length };
}

function removeRange(text, found) {
  return text.slice(0, found.start).replace(/\s+$/, "\n\n") + text.slice(found.end).replace(/^\s+/, "");
}

for (const slug of targets) {
  const file = path.join(skillRoot, slug, "SKILL.md");
  let text = fs.readFileSync(file, "utf8");

  const sourceStart = text.indexOf("\n## Source Archetypes");
  const firstToken = text.indexOf("\n### Execution Token Contract");
  if (firstToken !== -1 && sourceStart !== -1 && firstToken < sourceStart) {
    text = removeRange(text, range(text, firstToken, /\n## /g));
  }

  const firstSignature = text.indexOf("\n## Signature System");
  let nextSignature = text.indexOf("\n## Signature System", firstSignature + 1);
  while (nextSignature !== -1) {
    text = removeRange(text, range(text, nextSignature, /\n## /g));
    nextSignature = text.indexOf("\n## Signature System", firstSignature + 1);
  }

  fs.writeFileSync(file, text.replace(/\n{4,}/g, "\n\n\n"), "utf8");
  console.log(JSON.stringify({ slug, cleaned: true }));
}
