import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const sourceSkillsDir = path.join(root, "skills");
const sourceRawDir = path.join(root, "raw");
const targetRoot = path.join(root, ".agents", "skills");

const styleMeta = {
  "clean-saas": {
    display: "Clean SaaS",
    use: "clean SaaS landing pages, B2B product pages, dashboards, onboarding, pricing, integrations, enterprise trust surfaces",
    mood: "calm, precise, trustworthy, product-led, modern, operational",
    must: [
      "Show real product evidence early: dashboard, workflow, integration, metric, or before/after.",
      "Use restrained surfaces, clear hierarchy, and one disciplined action accent.",
      "Prioritize scannability, trust, and repeated-use ergonomics over decorative marketing energy."
    ],
    bans: [
      "Do not create oversized generic hero marketing with no product proof.",
      "Do not build card-heavy decorative sections where a workflow view would be clearer.",
      "Do not use vague SaaS copy like 'unlock your potential' without concrete product nouns."
    ]
  },
  "cyber-neon": {
    display: "Cyber Neon",
    use: "futuristic websites, cyberpunk launches, gaming, AI labs, nightlife brands, luminous dark interfaces, techno editorial pages",
    mood: "electric, nocturnal, luminous, futuristic, sharp, high-energy",
    must: [
      "Use glow as structure: active states, edges, CTAs, scanlines, or data highlights.",
      "Keep text readable on dark backgrounds by separating glow layers from copy layers.",
      "Limit neon colors to a tight palette with clear semantic roles."
    ],
    bans: [
      "Do not put neon glow on every border, icon, and heading.",
      "Do not use saturated text on saturated backgrounds.",
      "Do not create fake terminal clutter that does not support the product."
    ]
  },
  "dark-ui": {
    display: "Dark UI",
    use: "dark dashboards, AI tools, premium apps, developer consoles, command centers, immersive product interfaces",
    mood: "focused, immersive, premium, technical, calm, deep",
    must: [
      "Separate surfaces through tone, borders, and state, not just black fills.",
      "Use readable body text and visible focus states on every dark surface.",
      "Reserve accent color for action, selection, status, or progress."
    ],
    bans: [
      "Do not use muddy gray-on-black for important text.",
      "Do not make panels indistinguishable from the background.",
      "Do not use gradients to hide weak hierarchy."
    ]
  },
  "editorial-minimal": {
    display: "Editorial Minimal",
    use: "minimal editorial pages, portfolios, cultural sites, calm brand systems, writing-heavy layouts, refined landing pages",
    mood: "quiet, typographic, spacious, authored, restrained, intentional",
    must: [
      "Let type, whitespace, rhythm, and image placement carry the identity.",
      "Use fewer sections but make each one compositionally specific.",
      "Maintain reading comfort and strong line-length discipline."
    ],
    bans: [
      "Do not make minimalism feel like missing design.",
      "Do not use generic centered sections for every block.",
      "Do not bury navigation or action under aesthetic quietness."
    ]
  },
  "editorial-type": {
    display: "Editorial Type",
    use: "typographic websites, magazine-like pages, cultural brands, essays, archives, portfolios, editorial commerce",
    mood: "literary, expressive, composed, sharp, cultural, typographic",
    must: [
      "Use typography as architecture: scale, columns, rhythm, pull quotes, indexes, and contrast.",
      "Create an authored page structure rather than a generic landing layout.",
      "Pair expressive display type with readable body copy."
    ],
    bans: [
      "Do not use decorative serif headings without a real typographic system.",
      "Do not let display type make navigation or action unclear.",
      "Do not use too many typefaces."
    ]
  },
  "experimental-type": {
    display: "Experimental Type",
    use: "experimental typography, creative studios, cultural pages, posters, campaigns, unconventional portfolios",
    mood: "expressive, strange, typographic, art-directed, surprising, controlled",
    must: [
      "Make the typographic experiment serve hierarchy, not just visual novelty.",
      "Use one strong experimental move and support it with calm functional text.",
      "Verify mobile wrapping for every large word or distorted title."
    ],
    bans: [
      "Do not sacrifice legibility for style in essential copy.",
      "Do not combine multiple experiments that compete.",
      "Do not use generic UI cards under a radical hero without a transition system."
    ]
  },
  "expressive-brand": {
    display: "Expressive Brand",
    use: "brand-heavy sites, consumer products, creative launches, expressive agencies, campaigns, identity systems",
    mood: "distinctive, memorable, colorful, confident, personality-led, specific",
    must: [
      "Define one recognizable brand behavior and repeat it across layout, type, color, and interaction.",
      "Use imagery, copy, and components that feel specific to the product category.",
      "Make personality support comprehension rather than masking vague content."
    ],
    bans: [
      "Do not add random expressive decoration without a brand logic.",
      "Do not let visual personality obscure the primary CTA.",
      "Do not use generic playful copy for serious product flows."
    ]
  },
  "geometric-modern": {
    display: "Geometric Modern",
    use: "geometric brand systems, modern portfolios, architecture, design districts, shape-led SaaS, structured editorial pages",
    mood: "structured, contemporary, rational, bold, rhythmic, architectural",
    must: [
      "Use geometry as layout structure: grids, modules, circles, blocks, diagonals, or repeated shape systems.",
      "Assign every shape a job: grouping, sequencing, framing, revealing, or interaction.",
      "Keep radii, alignment, and grid rhythm consistent."
    ],
    bans: [
      "Do not scatter abstract shapes as decoration.",
      "Do not mix geometric systems without a hierarchy.",
      "Do not let mobile collapse destroy the shape logic."
    ]
  },
  "glossy-modern": {
    display: "Glossy Modern",
    use: "polished modern SaaS, glassy product pages, premium tech, visual tools, interactive brand systems",
    mood: "polished, luminous, smooth, premium, dimensional, modern",
    must: [
      "Use gloss, glass, reflection, and depth selectively around key surfaces.",
      "Keep blur and transparency performant and readable.",
      "Pair glossy effects with strong layout discipline and stable components."
    ],
    bans: [
      "Do not apply glassmorphism to every card.",
      "Do not blur large scrolling areas.",
      "Do not reduce text contrast through translucent layers."
    ]
  },
  "high-contrast": {
    display: "High Contrast",
    use: "stark brand sites, editorial product pages, technical consoles, monochrome pages, bold launch pages",
    mood: "direct, sharp, readable, confident, editorial, precise",
    must: [
      "Use contrast as hierarchy: foreground, action, section breaks, and state separation.",
      "Keep palette small and assign accent colors clear jobs.",
      "Verify readability on every black, white, image, or saturated surface."
    ],
    bans: [
      "Do not confuse black-white styling with actual composition.",
      "Do not use low-opacity gray for important text.",
      "Do not add gradients when flat contrast would be stronger."
    ]
  },
  "high-end-design": {
    display: "High-End Design",
    use: "luxury sites, premium product pages, high-end portfolios, refined commerce, gallery-like brand systems",
    mood: "premium, restrained, confident, tactile, editorial, composed",
    must: [
      "Make restraint visible through spacing, material, imagery, and typography.",
      "Show the object, service, or craft clearly; high-end does not mean vague.",
      "Use quiet conversion paths and refined interaction instead of loud effects."
    ],
    bans: [
      "Do not use gold cliches, fake luxury, excessive blur, or generic black pages.",
      "Do not hide product details behind mood.",
      "Do not use illegible tiny type to imitate sophistication."
    ]
  },
  "light-ui": {
    display: "Light UI",
    use: "bright applications, clean dashboards, SaaS pages, productivity tools, documentation, approachable product surfaces",
    mood: "open, clear, bright, lightweight, trustworthy, usable",
    must: [
      "Use white and near-white surfaces with enough border and text contrast.",
      "Make hierarchy through spacing, weight, and surface grouping.",
      "Keep interactions and states highly visible despite the light palette."
    ],
    bans: [
      "Do not create washed-out interfaces with pale gray text.",
      "Do not rely only on shadows for separation.",
      "Do not make everything white without structure."
    ]
  },
  "minimal-design": {
    display: "Minimal Design",
    use: "minimal websites, refined portfolios, product pages, calm brand systems, simple tools",
    mood: "essential, restrained, quiet, precise, spacious, intentional",
    must: [
      "Remove anything that does not help identity, comprehension, or action.",
      "Use spacing, type, and alignment as the primary visual system.",
      "Make the remaining content highly specific."
    ],
    bans: [
      "Do not make the page feel empty because it lacks decisions.",
      "Do not use generic default typography and call it minimal.",
      "Do not hide necessary controls for aesthetic purity."
    ]
  },
  "monochrome-ui": {
    display: "Monochrome UI",
    use: "black-white-gray interfaces, monochrome dashboards, editorial systems, technical products, reduced visual identities",
    mood: "disciplined, stark, systematic, editorial, exact, reduced",
    must: [
      "Assign every gray level a specific job.",
      "Use inversion, borders, density, and type to replace chromatic variety.",
      "Keep state design explicit even without color."
    ],
    bans: [
      "Do not create random gray ramps.",
      "Do not make metadata too faint.",
      "Do not let monochrome become an unstyled wireframe."
    ]
  },
  motion: {
    display: "Motion",
    use: "motion-heavy websites, animated product pages, scroll narratives, cinematic launches, interactive brand experiences",
    mood: "kinetic, cinematic, responsive, tactile, sequenced, alive",
    must: [
      "Define motion roles before coding: reveal, transition, feedback, continuity, or storytelling.",
      "Use scroll and hover motion to clarify structure, not distract from it.",
      "Respect reduced motion and avoid layout-triggering animation properties."
    ],
    bans: [
      "Do not animate everything.",
      "Do not use motion to compensate for weak content.",
      "Do not animate width, height, top, or left when transform can do it."
    ]
  },
  pastel: {
    display: "Pastel",
    use: "soft consumer brands, wellness, friendly SaaS, playful products, approachable commerce, community pages",
    mood: "soft, approachable, friendly, warm, optimistic, gentle",
    must: [
      "Use pastel colors with strong structure and readable text.",
      "Pair softness with clear CTAs and concrete hierarchy.",
      "Use color to group pathways, reduce anxiety, or create warmth."
    ],
    bans: [
      "Do not create washed-out low-contrast copy.",
      "Do not use too many candy colors at once.",
      "Do not make serious flows feel childish."
    ]
  },
  "playful-design": {
    display: "Playful Design",
    use: "playful brands, education, consumer apps, creative tools, family products, gamified experiences, friendly SaaS",
    mood: "joyful, tactile, friendly, colorful, energetic, approachable",
    must: [
      "Define one playful metaphor and repeat it across components, copy, motion, and layout.",
      "Make playfulness help comprehension, progress, or emotional comfort.",
      "Keep serious actions and purchasing flows clear."
    ],
    bans: [
      "Do not make adult products feel childish.",
      "Do not add random mascots, badges, or confetti without a job.",
      "Do not let playful color reduce readability."
    ]
  },
  "serif-display": {
    display: "Serif Display",
    use: "serif-led brand sites, luxury, editorial pages, cultural projects, typographic portfolios, premium commerce",
    mood: "editorial, elegant, literary, premium, expressive, composed",
    must: [
      "Use serif display type as structure and voice, not decoration.",
      "Pair expressive headings with highly readable body text.",
      "Control line-height, line length, and whitespace with editorial discipline."
    ],
    bans: [
      "Do not use ornate headings that collapse on mobile.",
      "Do not use too many typefaces.",
      "Do not let typographic drama hide navigation or conversion."
    ]
  },
  "soft-gradients": {
    display: "Soft Gradients",
    use: "soft gradient websites, AI tools, wellness, calm SaaS, atmospheric brand pages, polished modern interfaces",
    mood: "ambient, smooth, calm, luminous, soft, modern",
    must: [
      "Use gradients as atmosphere, depth, or section identity, not as a readability hazard.",
      "Keep content surfaces stable and text contrast strong.",
      "Control gradient direction, color stops, and opacity intentionally."
    ],
    bans: [
      "Do not place long text directly on busy gradients.",
      "Do not use generic purple-blue blobs as the whole identity.",
      "Do not let gradients replace product proof."
    ]
  },
  "technical-sans": {
    display: "Technical Sans",
    use: "developer tools, AI products, technical SaaS, documentation, infrastructure, precise product interfaces",
    mood: "technical, crisp, rational, precise, engineered, legible",
    must: [
      "Use typography, alignment, and density to communicate technical trust.",
      "Show real controls, code, data, diagrams, or workflow evidence.",
      "Keep surfaces clean and repeated components consistent."
    ],
    bans: [
      "Do not use generic tech gradients instead of product evidence.",
      "Do not make all text monospace.",
      "Do not overload the interface with fake terminal details."
    ]
  },
  "technical-ui": {
    display: "Technical UI",
    use: "technical interfaces, product dashboards, AI tools, developer consoles, workflow apps, dense control surfaces",
    mood: "precise, operational, structured, intelligent, focused, trustworthy",
    must: [
      "Prioritize real workflow ergonomics and state clarity.",
      "Use technical detail to support user decisions, not to decorate.",
      "Make repeated controls, tables, cards, and filters consistent."
    ],
    bans: [
      "Do not fake complexity with meaningless metrics.",
      "Do not hide primary workflow behind decorative panels.",
      "Do not use low-contrast microcopy in dense areas."
    ]
  },
  utilitarian: {
    display: "Utilitarian",
    use: "admin tools, internal systems, data entry, operational dashboards, documentation utilities, productivity workflows",
    mood: "plain, efficient, robust, direct, legible, work-focused",
    must: [
      "Optimize for task completion, repeated action, and information retrieval.",
      "Keep controls visible and close to the content they affect.",
      "Use semantic state color and plain language."
    ],
    bans: [
      "Do not add hero theatrics to a work surface.",
      "Do not hide controls to make the page look clean.",
      "Do not use decorative illustrations where data or controls are needed."
    ]
  },
  "vibrant-accents": {
    display: "Vibrant Accents",
    use: "brands needing restrained layouts with vivid highlights, SaaS, portfolios, consumer pages, launch sites",
    mood: "clean, energetic, vivid, modern, selective, confident",
    must: [
      "Keep base surfaces controlled and let accents mark action, category, or emphasis.",
      "Use vivid color sparingly enough that it remains meaningful.",
      "Pair bright accents with strong neutral typography."
    ],
    bans: [
      "Do not turn every section into a different color theme.",
      "Do not use vivid accents for body text.",
      "Do not let accent variety destroy hierarchy."
    ]
  }
};

function parseFrontmatter(text) {
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
  if (!match) return {};
  const meta = {};
  for (const line of match[1].split(/\r?\n/)) {
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    const value = line.slice(idx + 1).trim().replace(/^['"]|['"]$/g, "");
    meta[key] = value;
  }
  return meta;
}

function cleanText(value) {
  return value
    .replaceAll("â€”", "-")
    .replaceAll("â", "-")
    .replaceAll("â", "-")
    .replaceAll("â", "'")
    .replaceAll("â", "'")
    .replaceAll("â", "\"")
    .replaceAll("â", "\"")
    .replaceAll("â¢", "-")
    .replaceAll("Â", "")
    .replaceAll("Ã©", "e")
    .replaceAll("Ã¨", "e")
    .replaceAll("Ãª", "e")
    .replaceAll("Ã¡", "a")
    .replaceAll("Ã³", "o")
    .replaceAll("Ã­", "i")
    .replaceAll("Ãº", "u")
    .replaceAll("Ã±", "n")
    .replaceAll("Ã§", "c");
}

function sourceList(slug) {
  const rawDir = path.join(sourceRawDir, slug);
  if (!fs.existsSync(rawDir)) return [];
  return fs
    .readdirSync(rawDir)
    .filter((name) => name.endsWith(".md"))
    .sort()
    .map((name) => {
      const raw = fs.readFileSync(path.join(rawDir, name), "utf8");
      const title = raw.match(/^#\s+(.+)$/m)?.[1]?.trim() || name.replace(/\.md$/, "");
      const source = raw.match(/^Source:\s+(.+)$/m)?.[1]?.trim() || "";
      const site = raw.match(/^Site:\s+(.+)$/m)?.[1]?.trim() || "";
      const northStar = raw.match(/^North star:\s+(.+)$/mi)?.[1]?.trim() || "";
      const theme = raw.match(/^Theme:\s+(.+)$/mi)?.[1]?.trim() || "";
      return { name, title, source, site, northStar, theme };
    });
}

function bulletList(items) {
  return items.map((item) => `- ${item}`).join("\n");
}

function sourceMatrix(sources) {
  if (!sources.length) return "| Source | What To Extract | Use It For |\n| --- | --- | --- |\n| No source notes found | - | - |";
  return [
    "| Source | What To Extract | Use It For |",
    "| --- | --- | --- |",
    ...sources.map((source) => {
      const title = source.title.replace(/\|/g, "/");
      const northStar = (source.northStar || "Visual system reference").replace(/\|/g, "/");
      const use = source.theme ? `${source.theme} expression, layout rhythm, component behavior` : "layout rhythm, component behavior, palette discipline";
      return `| ${title} | ${northStar} | ${use} |`;
    })
  ].join("\n");
}

function designEngine(meta) {
  return `## Design Engine

### Direction Selection

When using this skill, choose one clear direction before designing. Do not average all references into a bland middle. The direction should be described in one sentence using this shape:

\`This interface is a ${meta.display} system for [audience] that feels ${meta.mood} and uses [layout move], [type move], [color move], and [component move] to make [primary action] obvious.\`

If you cannot fill that sentence, stop and inspect the reference database before producing UI.

### Required Design Plan

Before code, include a compact design plan with:

1. Product type and audience.
2. Chosen ${meta.display} sub-direction.
3. First viewport composition.
4. Typography strategy.
5. Color and accent policy.
6. Component geometry rule.
7. Motion rule.
8. Anti-slop risks specific to this style.

The plan should be short but decisive. It should prevent generic defaults before they appear.

### Visual System Contract

The final design must define these contracts:

- **Surface contract:** what backgrounds, panels, cards, overlays, and modals look like.
- **Type contract:** how hero, section, body, label, metadata, and CTA typography differ.
- **Color contract:** what each accent means and where it is forbidden.
- **Geometry contract:** radius, border, shadow, spacing, and alignment rules.
- **Evidence contract:** what proves the product, brand, object, or workflow is real.
- **Interaction contract:** hover, focus, active, loading, empty, error, and success behavior.

### Quality Bar

The output should feel intentionally art-directed but production-aware. It must not be a moodboard, a generic landing page, or a style pasted on top of default components.`;
}

function stylePatterns(meta) {
  return `## Pattern Arsenal

Use these patterns as starting points. Pick only the ones that match the user request.

### Pattern A: Signature Hero

Purpose: make the style visible immediately.

Rules:

- The H1 must carry a clear product or brand promise.
- The hero visual must show a real object, interface, workflow, scene, or material cue.
- The primary CTA must be readable and visually dominant.
- Avoid small decorative badges unless they support trust, status, or category.
- On mobile, preserve the style but reduce typographic risk.

### Pattern B: Evidence Section

Purpose: prevent the design from becoming pure mood.

Use one of:

- product screenshot
- workflow sequence
- feature grid with concrete examples
- material/product gallery
- customer proof
- data readout
- case-study index

Rules:

- Evidence should be inspectable.
- Do not blur, darken, crop, or decorate evidence until it stops being useful.
- Pair evidence with concise explanatory copy.

### Pattern C: System Section

Purpose: show that the visual identity can repeat.

Include:

- 3 to 5 reusable modules
- consistent spacing
- consistent component geometry
- real headings and body text
- visible interaction affordances

Rules:

- Do not use cards if rows, bands, or split sections are more appropriate.
- Do not vary every card color or radius.
- Let the style repeat through rules, not randomness.

### Pattern D: Conversion Or Action Section

Purpose: make the page usable.

Rules:

- Repeat the primary action language.
- Keep forms, pricing, checkout, booking, or signup calmer than decorative sections.
- Maintain strong contrast and clear focus states.
- Do not hide commitment details in tiny text.

### Pattern E: Final Closure

Purpose: end the page with brand confidence.

Use:

- strong footer typography
- compact navigation
- repeated visual motif
- final CTA
- source-aware color or material cue

Avoid a generic footer dump. The ending should feel designed.`;
}

function implementationGuardrails(meta) {
  return `## Implementation Guardrails

### Layout Guardrails

- Use stable responsive constraints: max-widths, aspect ratios, grid tracks, and spacing tokens.
- Do not let hover states resize cards or shift adjacent content.
- Avoid nested card-in-card layouts unless the inner card is a true control or modal.
- Prefer full-width sections or unframed layouts for major page bands.
- Keep text within containers on mobile; reduce scale before allowing awkward wrapping.

### Typography Guardrails

- Do not default to Inter unless the existing project already uses it and the style still needs it.
- Use display type for identity, not for long reading.
- Keep body copy readable on the actual background.
- Avoid all-caps paragraphs.
- Do not use tiny text to imitate sophistication.

### Color Guardrails

- Assign every color a role before using it.
- Do not use accent color for body text.
- Keep disabled, placeholder, and metadata text accessible.
- Ensure semantic colors are not confused with brand decoration.
- Test light, dark, image, and gradient surfaces separately.

### Motion Guardrails

- Use transform and opacity for motion.
- Respect reduced motion.
- Avoid constant decorative loops.
- Keep hover feedback fast and clear.
- Use scroll motion only when it explains sequence or creates real narrative.

### Asset Guardrails

- Use real or generated visual assets that reveal the product, place, object, state, or gameplay.
- Avoid purely atmospheric stock imagery when users need to inspect the subject.
- Do not use SVG hero illustrations when a real/generated bitmap image would better carry the category.
- Keep image crops intentional across desktop and mobile.`;
}

function promptPack(meta) {
  return `## Prompt Pack

### General Prompt

Design a ${meta.display} interface that feels ${meta.mood}. Build a coherent system, not a skin: define layout, type, color, component geometry, imagery, motion, states, and responsive behavior. Use the reference database only to extract transferable rules, not to clone a source.

### Website Prompt

Create a complete ${meta.display} website with navigation, a first viewport that states the product clearly, product or brand evidence, reusable sections, a clear conversion path, and a designed footer. The style must be visible in the first viewport and must remain usable on mobile.

### App Prompt

Create a ${meta.display} app interface for repeated use. Prioritize the main workflow, control placement, information density, readable state design, and keyboard-accessible interactions. Preserve the style through surfaces, typography, spacing, and component behavior rather than decorative effects.

### Redesign Prompt

Redesign the existing interface in a ${meta.display} direction. Preserve functionality and information architecture unless the user asks otherwise. Remove generic AI design patterns, assign tokens, improve hierarchy, define states, and make the first screen feel specific.

### Critique Prompt

Audit this design against ${meta.display}. Identify generic defaults, weak hierarchy, misuse of color, bad typography, missing states, poor mobile behavior, and places where the style is decorative instead of structural.`;
}

function makeSkillMarkdown(slug, originalMeta) {
  const meta = styleMeta[slug];
  if (!meta) throw new Error(`Missing style metadata for ${slug}`);
  const sources = sourceList(slug);
  const sourceLines = sources
    .map((s) => `- ${s.title}: ${s.source}${s.site ? ` (${s.site})` : ""}`)
    .join("\n");
  const parsedDescription = originalMeta.description || "";
  const description =
    parsedDescription && parsedDescription !== "|" && parsedDescription !== ">"
      ? parsedDescription
      : `Use this skill to create ${meta.display} visual design systems that feel ${meta.mood}.`;
  const yamlDescription = JSON.stringify(
    `${description} USE FOR: ${meta.use}. DO NOT USE FOR: unrelated backend work, non-visual tasks, or when an existing product design system must be followed exactly.`
  );

  return `---
name: ${slug}
description: ${yamlDescription}
---

# ${meta.display}

## Core Directive

You are designing in the ${meta.display} style. The output must feel ${meta.mood}. Do not merely apply a color theme; build a coherent visual system across layout, typography, color, component geometry, imagery, motion, and interaction states.

Use this skill when the user asks for ${meta.use}.

## Mandatory Workflow

Before writing UI code or final visual instructions:

1. Identify the product type, audience, primary action, and emotional target.
2. Choose one layout archetype from the reference database.
3. Choose one typography strategy, one color strategy, one component geometry rule, and one motion rule.
4. State the anti-slop risks for this style.
5. Build the interface with real sections, real states, and responsive behavior.
6. Run the pre-output checklist at the end.

If the task is substantial, load [references/refero-style-database.md](references/refero-style-database.md) before designing. If the user asks for source-specific inspiration, inspect [references/sources/](references/sources/).

## Non-Negotiable Style Rules

${bulletList(meta.must)}

## Absolute Bans

${bulletList(meta.bans)}

## Reference Database

The detailed Refero-derived analysis lives outside this main skill file to keep runtime context lean:

- Full consolidated database: [references/refero-style-database.md](references/refero-style-database.md)
- Raw source notes: [references/sources/](references/sources/)

Primary sources used:

${sourceLines || "- No raw source notes found."}

## Source Direction Matrix

Use this matrix to choose a source direction quickly, then load the full reference only if the task needs deeper specificity.

${sourceMatrix(sources)}

${designEngine(meta)}

${stylePatterns(meta)}

${implementationGuardrails(meta)}

## Execution Protocol

### 1. Select A Direction

Pick one dominant direction. Do not blend every source at once. The chosen direction should answer:

- What should the first viewport feel like?
- What should the user understand first?
- What should be visually repeated across the page or app?
- What should be deliberately avoided?

### 2. Build The System

Define:

- color tokens and semantic roles
- typography scale and pairings
- section rhythm and page density
- component radius, border, shadow, and surface rules
- imagery style and crop logic
- hover, focus, loading, empty, error, and success states

### 3. Create Real Screens

Do not stop at moodboards or generic sections. Create complete screens with:

- navigation
- hero or primary task area
- proof or product evidence
- reusable feature/workflow modules
- conversion/action area
- footer or closure
- responsive behavior

### 4. Apply Motion Carefully

Use motion only for:

- reveal
- transition
- feedback
- continuity
- attention routing

Avoid motion that delays comprehension, hides controls, harms accessibility, or exists only as decoration.

## Pre-Output Checklist

Before delivering, verify:

- The first viewport clearly expresses ${meta.display}.
- The primary action is obvious.
- Typography is readable and intentionally scaled.
- Color roles are semantic and consistent.
- Components share a coherent geometry.
- The design avoids every ban listed above.
- Mobile layout preserves the style without overflow or cramped text.
- Focus, hover, active, disabled, loading, empty, error, and success states are accounted for.
- Any referenced imagery is concrete and useful.
- The final result would not be mistaken for a generic template.

## Last-Mile Correction Rules

If the result feels generic, strengthen typography, section rhythm, and source-specific visual decisions. If it feels noisy, remove colors, effects, and components until the primary hierarchy becomes obvious. If it feels pretty but unusable, make controls, states, and content structure more conventional while preserving the style's identity.

${promptPack(meta)}
`;
}

function copyRawSources(slug, targetSourcesDir) {
  const rawDir = path.join(sourceRawDir, slug);
  if (!fs.existsSync(rawDir)) return;
  fs.mkdirSync(targetSourcesDir, { recursive: true });
  for (const name of fs.readdirSync(rawDir).filter((n) => n.endsWith(".md")).sort()) {
    const content = cleanText(fs.readFileSync(path.join(rawDir, name), "utf8"));
    fs.writeFileSync(path.join(targetSourcesDir, name), content, "utf8");
  }
}

const slugs = fs
  .readdirSync(sourceSkillsDir, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort();

const results = [];

for (const slug of slugs) {
  const sourceSkillFile = path.join(sourceSkillsDir, slug, "SKILL.md");
  if (!fs.existsSync(sourceSkillFile)) continue;

  const original = cleanText(fs.readFileSync(sourceSkillFile, "utf8"));
  const originalMeta = parseFrontmatter(original);
  const targetDir = path.join(targetRoot, slug);
  const referencesDir = path.join(targetDir, "references");
  const sourcesDir = path.join(referencesDir, "sources");

  fs.mkdirSync(referencesDir, { recursive: true });
  fs.writeFileSync(path.join(targetDir, "SKILL.md"), makeSkillMarkdown(slug, originalMeta), "utf8");
  fs.writeFileSync(path.join(referencesDir, "refero-style-database.md"), original, "utf8");
  copyRawSources(slug, sourcesDir);

  const mainChars = fs.readFileSync(path.join(targetDir, "SKILL.md"), "utf8").length;
  const refChars = original.length;
  const sourceCount = fs.existsSync(sourcesDir)
    ? fs.readdirSync(sourcesDir).filter((n) => n.endsWith(".md")).length
    : 0;
  results.push({ slug, mainChars, refChars, sourceCount });
}

console.log(JSON.stringify(results, null, 2));
