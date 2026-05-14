import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const targets = ["motion", "pastel", "playful-design"];

function normalizeProtocols(segment) {
  const blocks = [...segment.matchAll(/```tsx\n[\s\S]*?\n```/g)].map((match) => match[0].trim());
  const unique = [];
  for (const block of blocks) {
    if (!unique.includes(block)) unique.push(block);
  }
  return `## Complete Page Protocols\n\n${unique.join("\n\n")}\n`;
}

for (const slug of targets) {
  const file = path.join(root, ".agents", "skills", slug, "SKILL.md");
  let text = fs.readFileSync(file, "utf8");
  const marker = "### Core Component Kit\n\n";
  const start = text.indexOf(marker + "## Complete Page Protocols\n\n");
  if (start === -1) {
    console.log(JSON.stringify({ slug, changed: false, reason: "pattern not found" }));
    continue;
  }

  const useStart = text.indexOf("Use these components before inventing new surfaces.", start);
  if (useStart === -1) throw new Error(`Could not find component intro for ${slug}`);

  const protocolsSegment = text.slice(start + marker.length, useStart);
  const protocols = normalizeProtocols(protocolsSegment);

  text = text.slice(0, start + marker.length) + text.slice(useStart);

  const componentStart = start + marker.length;
  const nextMajorMatch = text.slice(componentStart).match(/\n## [^\n]+\n/);
  if (!nextMajorMatch || nextMajorMatch.index === undefined) {
    throw new Error(`Could not find insertion point after component kit for ${slug}`);
  }
  const insertionPoint = componentStart + nextMajorMatch.index;
  text = text.slice(0, insertionPoint) + `\n${protocols}` + text.slice(insertionPoint);

  fs.writeFileSync(file, text, "utf8");
  console.log(JSON.stringify({ slug, changed: true }));
}
