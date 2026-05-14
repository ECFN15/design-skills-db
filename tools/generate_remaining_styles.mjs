import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

const styles = [
  {
    slug: "clean-saas",
    query: "Clean SaaS",
    name: "Clean SaaS",
    description:
      "Use this skill to create clean SaaS interfaces and websites with calm hierarchy, trustworthy product evidence, precise workflows, legible data, polished enterprise surfaces, and restrained modern visual identity.",
    thesis:
      "Clean SaaS design is not blank minimalism. It is a discipline of making product value obvious, repeated workflows effortless, and trust signals quiet but visible.",
    mood: "calm, precise, useful, trustworthy, modern, operational",
    accent: "one focused brand accent used for action, selection, and progress",
    avoid:
      "avoid oversized marketing sections, decorative card piles, fake dashboards, meaningless gradients, tiny gray body text, and generic B2B copy",
    archetypes: [
      "Product Evidence Landing",
      "Workflow Dashboard",
      "Enterprise Trust Surface",
      "Metrics And Reporting Console",
      "Integration Ecosystem Page"
    ]
  },
  {
    slug: "monochrome-ui",
    query: "Monochrome UI",
    name: "Monochrome UI",
    description:
      "Use this skill to create monochrome interfaces built from black, white, gray, inversion, borders, typography, density, and disciplined state design without relying on chromatic decoration.",
    thesis:
      "Monochrome UI succeeds when every shade has a job. The absence of color should make hierarchy sharper, not make the interface vague.",
    mood: "disciplined, stark, systematic, editorial, exact, reduced",
    accent: "no accent by default; if needed, one emergency or link color with a defined semantic job",
    avoid:
      "avoid random gray ramps, low-contrast metadata, decorative black cards, overuse of outlines, and monochrome pages that feel like unstyled wireframes",
    archetypes: [
      "Inverted Command Surface",
      "Gray-Layered Dashboard",
      "Editorial Index",
      "Monochrome Commerce",
      "Technical Control Panel"
    ]
  },
  {
    slug: "high-end-design",
    query: "High-end Design",
    name: "High-End Design",
    description:
      "Use this skill to create premium high-end websites and product experiences using restraint, refined type, strong imagery, material cues, luxury pacing, and quiet conversion paths.",
    thesis:
      "High-end design is defined by what it refuses: clutter, fake luxury, over-explaining, busy components, and cheap ornamental effects.",
    mood: "premium, restrained, confident, tactile, editorial, composed",
    accent: "material or photographic accent first; chromatic UI accent only if the brand owns it",
    avoid:
      "avoid gold cliches, generic black luxury pages, excessive blur, fake scarcity, illegible tiny type, and product pages where the object cannot be inspected",
    archetypes: [
      "Luxury Object Showcase",
      "Editorial Brand World",
      "Boutique Commerce",
      "Gallery-Like Portfolio",
      "Premium Service Narrative"
    ]
  },
  {
    slug: "geometric-modern",
    query: "Geometric Modern",
    name: "Geometric Modern",
    description:
      "Use this skill to create modern geometric identities with strong grids, repeated shapes, modular composition, crisp rhythm, precise spacing, and layout systems where geometry explains the brand.",
    thesis:
      "Geometric modern design works when shape is structural. Circles, blocks, diagonal cuts, grids, and modules should organize content, not sit on top as decoration.",
    mood: "structured, contemporary, rational, bold, rhythmic, architectural",
    accent: "shape-linked accent color used to group, sequence, or mark interaction",
    avoid:
      "avoid random abstract shapes, decorative blobs, inconsistent radii, shape clutter, and grids that collapse into generic cards on mobile",
    archetypes: [
      "Modular Grid Brand",
      "Shape-Led Product Page",
      "Architectural Portfolio",
      "Diagrammatic SaaS",
      "Geometric Editorial System"
    ]
  },
  {
    slug: "utilitarian",
    query: "Utilitarian",
    name: "Utilitarian",
    description:
      "Use this skill to create utilitarian interfaces that prioritize function, speed, legibility, controls, repeated action, information density, and operational trust without decorative noise.",
    thesis:
      "Utilitarian design is not ugly; it is respectful. It removes visual performance so users can complete real work quickly and confidently.",
    mood: "plain, efficient, robust, direct, legible, work-focused",
    accent: "semantic action color only, with clear state meaning",
    avoid:
      "avoid hero theatrics, empty marketing sections, decorative illustrations, low-density cards, hidden controls, and copy that explains instead of enabling action",
    archetypes: [
      "Operational Dashboard",
      "Admin Console",
      "Data Entry Workflow",
      "Documentation Utility",
      "Internal Tool Surface"
    ]
  },
  {
    slug: "editorial-type",
    query: "Editorial Type",
    name: "Editorial Type",
    description:
      "Use this skill to create editorial typographic websites and interfaces where type carries identity through scale, rhythm, contrast, columns, pull quotes, indexes, and magazine-like hierarchy.",
    thesis:
      "Editorial type design treats typography as structure, image, and voice. The page should feel authored, not merely styled.",
    mood: "literary, expressive, composed, sharp, cultural, typographic",
    accent: "typographic contrast first; color accent only for annotation, issue markers, links, or section identity",
    avoid:
      "avoid illegible display text, fake magazine layouts, too many fonts, low-contrast long reading, and typographic drama that hides navigation or action",
    archetypes: [
      "Magazine Feature",
      "Typographic Portfolio",
      "Cultural Landing Page",
      "Essay Archive",
      "Editorial Commerce"
    ]
  }
];

const API = "https://styles.refero.design/api/styles";

function slugify(value) {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function safe(value, fallback = "") {
  if (value === null || value === undefined) return fallback;
  if (Array.isArray(value)) return value.filter(Boolean).join(", ");
  if (typeof value === "object") return JSON.stringify(value);
  return String(value);
}

function tableRow(values) {
  return `| ${values.map((v) => safe(v).replace(/\|/g, "\\|").replace(/\n/g, " ")).join(" | ")} |`;
}

function colorRows(colors = []) {
  if (!Array.isArray(colors) || colors.length === 0) return "| no extracted colors | | | |";
  return colors
    .slice(0, 14)
    .map((c) => tableRow([c.name || "Token", c.hex || "", c.group || "", c.role || ""]))
    .join("\n");
}

function componentRows(components = []) {
  if (!Array.isArray(components) || components.length === 0) return "| no extracted components | | |";
  return components
    .slice(0, 12)
    .map((c) => tableRow([c.name || "Component", c.role || "", c.description || c.html || ""]))
    .join("\n");
}

function list(items = [], limit = 12) {
  if (!Array.isArray(items) || items.length === 0) return "- No explicit entries extracted.";
  return items.slice(0, limit).map((item) => `- ${safe(item)}`).join("\n");
}

function typographyText(typography) {
  if (!typography) return "No explicit typography object extracted.";
  if (Array.isArray(typography)) {
    return typography
      .map((t, index) => {
        return [
          `#### Typeface ${index + 1}: ${safe(t.family, "Unknown")}`,
          "",
          `- Role: ${safe(t.role, "not specified")}`,
          `- Fallback: ${safe(t.substitute, "not specified")}`,
          `- Weights: ${safe(t.weights || t.weight, "not specified")}`,
          `- Sizes: ${safe(t.sizes, "not specified")}`,
          `- Line height: ${safe(t.lineHeight, "not specified")}`,
          `- Letter spacing: ${safe(t.letterSpacing, "not specified")}`
        ].join("\n");
      })
      .join("\n\n");
  }
  return [
    `- Family: ${safe(typography.family, "not specified")}`,
    `- Role: ${safe(typography.role, "not specified")}`,
    `- Fallback: ${safe(typography.substitute, "not specified")}`,
    `- Weights: ${safe(typography.weights || typography.weight, "not specified")}`,
    `- Sizes: ${safe(typography.sizes, "not specified")}`,
    `- Line height: ${safe(typography.lineHeight, "not specified")}`,
    `- Letter spacing: ${safe(typography.letterSpacing, "not specified")}`
  ].join("\n");
}

function spacingText(spacing) {
  if (!spacing) return "- No explicit spacing object extracted.";
  return [
    `- Section gap: ${safe(spacing.sectionGap, "not specified")}`,
    `- Element gap: ${safe(spacing.elementGap, "not specified")}`,
    `- Card padding: ${safe(spacing.cardPadding, "not specified")}`,
    `- Page max width: ${safe(spacing.pageMaxWidth, "not specified")}`,
    `- Radius: ${safe(spacing.radius, "not specified")}`
  ].join("\n");
}

async function fetchJson(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${response.status} ${response.statusText}: ${url}`);
  return response.json();
}

async function getSearch(query) {
  const json = await fetchJson(`${API}/search?q=${encodeURIComponent(query)}`);
  return (json.styles || []).filter((item) => item && item.id);
}

async function getDetail(id) {
  const json = await fetchJson(`${API}/${id}?includeSimilar=0`);
  return json.style;
}

function sourceStyleUrl(id) {
  return `https://styles.refero.design/style/${id}`;
}

function buildRaw(style, index, pack) {
  const d = style.fullResult?.designSystem || {};
  return `# ${style.siteName} - ${pack.name} Source Notes

Source: ${sourceStyleUrl(style.id)}
Site: ${style.url}
North star: ${safe(d.northStar || style.northStar)}
Theme: ${safe(d.theme || style.colorScheme)}

## Extracted Color Tokens

| Name | Hex | Group | Role |
| --- | --- | --- | --- |
${colorRows(d.colors)}

## Typography

${typographyText(d.typography)}

## Layout

${safe(d.layout, "No explicit layout field extracted.")}

## Spacing

${spacingText(d.spacing)}

## Components

| Component | Role | Treatment |
| --- | --- | --- |
${componentRows(d.components)}

## Dos

${list(d.dos)}

## Donts

${list(d.donts)}

## Transferable Lessons

- Read this source through the lens of ${pack.name}: ${pack.thesis}
- Preserve the reference's strongest structural move rather than copying surface style.
- Use the source to expand the pattern library only when it adds a capability not already covered.
- Translate colors into semantic jobs before using them in a new project.
- Treat typography, spacing, component geometry, and interaction states as equal parts of the identity.
`;
}

function buildSourceDeepDive(sources, pack) {
  return sources
    .map((style, index) => {
      const d = style.fullResult?.designSystem || {};
      return `### ${index + 1}. ${style.siteName}

Source: ${sourceStyleUrl(style.id)}  
Site: ${style.url}  
North star: ${safe(d.northStar || style.northStar)}  
Theme: ${safe(d.theme || style.colorScheme)}

#### What This Source Adds

This reference expands the ${pack.name} skill by showing how ${safe(d.northStar || style.northStar || "the visual system")} can be translated into concrete interface decisions. Do not clone it literally. Extract the underlying decisions: palette constraints, hierarchy, spacing, type personality, component geometry, and interaction restraint.

#### Colors

| Name | Hex | Group | Role |
| --- | --- | --- | --- |
${colorRows(d.colors)}

#### Typography

${typographyText(d.typography)}

#### Layout Reading

${safe(d.layout, "No explicit layout field extracted.")}

#### Spacing Reading

${spacingText(d.spacing)}

#### Component Reading

| Component | Role | Treatment |
| --- | --- | --- |
${componentRows(d.components)}

#### Carry Forward

${list(d.dos, 8)}

#### Avoid

${list(d.donts, 8)}
`;
    })
    .join("\n\n");
}

function buildArchetypes(pack) {
  return pack.archetypes
    .map((name, index) => {
      return `### ${index + 1}. ${name}

Use this archetype when the project needs a ${pack.mood} feeling and the content naturally supports the ${name.toLowerCase()} pattern.

Core moves:

- Start with a clear content job before choosing decoration.
- Establish one dominant hierarchy pattern and repeat it.
- Use ${pack.accent}.
- Keep supporting components quieter than the primary workflow.
- Make responsive behavior part of the identity, not an afterthought.
- Preserve the style's point of view while still making the interface easy to use.

Recommended structure:

1. A first viewport that makes the product, story, or action obvious.
2. A supporting proof or context section.
3. A modular body section where the style becomes repeatable.
4. A concrete interaction or conversion path.
5. A final section that closes with the same visual logic as the opening.

Design checks:

- Does the layout explain the content faster than a paragraph would?
- Are color, type, and spacing assigned to real jobs?
- Would the page still feel specific if the images were temporarily removed?
- Are interactive elements easy to identify without instructions?
- Does mobile preserve the same character without overcrowding?

Common failure:

The ${name.toLowerCase()} version of ${pack.name} often fails when visual attitude is added after the layout is already generic. Fix this by rebuilding the section rhythm, component geometry, and type scale as a system instead of sprinkling style on top.`;
    })
    .join("\n\n");
}

function buildSkill(pack, sources) {
  const sourceRows = sources
    .map((s) => tableRow([s.siteName, sourceStyleUrl(s.id), s.url, s.fullResult?.designSystem?.northStar || s.northStar || ""]))
    .join("\n");

  const allColors = sources.flatMap((s) => s.fullResult?.designSystem?.colors || []);
  const uniqueColors = [];
  const seenColors = new Set();
  for (const c of allColors) {
    const key = `${c.hex}-${c.name}`;
    if (!seenColors.has(key)) {
      seenColors.add(key);
      uniqueColors.push(c);
    }
  }

  let text = `---
name: ${pack.slug}
description: ${pack.description}
---

# ${pack.name} Design Skill

## 1. Source Basis

This skill consolidates five Refero references for the "${pack.name}" suggested category.

| Reference | Refero Source | Site | North Star |
| --- | --- | --- | --- |
${sourceRows}

## 2. North Star

${pack.thesis}

The desired feeling is: ${pack.mood}.

The accent policy is: ${pack.accent}.

Primary warning: ${pack.avoid}.

Use this skill as a practical design system brief. It should help an agent create a visually specific site or app, not just describe the mood. Every recommendation should translate into concrete choices: tokens, layout, typography, components, interaction, imagery, and QA.

## 3. When To Use This Skill

Use ${pack.name} when:

- the user asks for a visual direction matching ${pack.mood}
- the product needs a strong identity without sacrificing usability
- the interface needs repeatable components rather than a one-off artboard
- the page should feel intentionally designed, not theme-swapped
- the brand benefits from a recognizable point of view

Avoid this skill when:

- the user needs a totally different emotional register
- accessibility would be compromised by the requested visual treatment
- the project is mostly backend, infrastructure, or non-visual
- the existing design system clearly points to a different category

## 4. Source Deep Dives

${buildSourceDeepDive(sources, pack)}

## 5. Archetype Library

${buildArchetypes(pack)}

## 6. Consolidated Color System

The palette below merges tokens observed across the five sources. Do not use every color. Treat it as a vocabulary for building a smaller project-specific system.

| Name | Hex | Group | Role |
| --- | --- | --- | --- |
${colorRows(uniqueColors)}

### 6.1 Color Rules

- Start with the smallest palette that can express the product.
- Assign every color a semantic job before implementing it.
- Keep primary actions visually consistent across the whole experience.
- Use neutral surfaces to give the brand accents room to work.
- Never use color as decoration when spacing, type, or hierarchy would be stronger.
- Test actual text/background pairs, not just theoretical palette values.

### 6.2 Token Model

\`\`\`css
:root {
  --style-bg: #ffffff;
  --style-fg: #111111;
  --style-muted: #6b7280;
  --style-border: #e5e7eb;
  --style-surface: #f8f8f8;
  --style-accent: #155dfc;
  --style-danger: #ff3939;
  --style-radius: 8px;
  --style-gap: 16px;
}
\`\`\`

Adapt these defaults to the source palette. The important part is not the exact values; it is that every token has a job and repeated use.

## 7. Typography System

### 7.1 Typography Jobs

| Job | Purpose | Guidance |
| --- | --- | --- |
| Hero | creates first identity signal | expressive but readable |
| Section Heading | organizes the page | strong hierarchy, consistent rhythm |
| Body | explains value | comfortable line length and line height |
| Label | supports scanning | compact, clear, often medium weight |
| Metadata | lowers priority | muted but accessible |
| CTA | drives action | short, direct, high contrast |
| Technical | code/data distinction | mono only when it clarifies |

### 7.2 Type Rules

- Choose type before decoration.
- Use no more than two families unless the source references clearly support more.
- Keep body copy calmer than display type.
- Use weight, size, spacing, and case deliberately.
- Do not use tiny text to create sophistication if the user needs to act.
- Preserve readable line-height on all long text.
- Test mobile wrapping for the longest real words.

### 7.3 Scale Template

| Level | Desktop | Mobile | Notes |
| --- | --- | --- | --- |
| hero | 64-112px | 42-64px | adjust for longest word |
| h1 | 48-80px | 36-48px | one primary page title |
| h2 | 32-56px | 28-36px | section entry |
| h3 | 22-32px | 20-26px | card or module title |
| body | 16-20px | 16-18px | never sacrifice readability |
| label | 12-14px | 12-14px | maintain tap targets |
| metadata | 12-14px | 12-14px | muted but accessible |

## 8. Layout System

### 8.1 Composition Principles

- Let the first viewport establish the style immediately.
- Do not wrap the entire page in decorative cards.
- Use full-width bands or clean layout shifts for major section changes.
- Preserve strong alignment edges.
- Give repeated modules stable dimensions.
- Make spacing rhythm visible and intentional.
- Keep controls near the content they affect.

### 8.2 Section Rhythm

| Section Type | Recommended Gap | Notes |
| --- | --- | --- |
| hero to proof | 32-80px | depends on density |
| major narrative section | 72-140px | use for brand and landing pages |
| dashboard modules | 12-32px | keep operational density |
| card grid | 16-32px | match content complexity |
| footer | 64-120px | should feel like a deliberate ending |

### 8.3 Responsive Rules

- Reduce columns before reducing readability.
- Do not keep desktop hero scale on mobile.
- Preserve component jobs across breakpoints.
- Keep tap targets at usable sizes.
- Avoid text over images on mobile unless contrast is guaranteed.
- Keep sticky or fixed controls from covering content.

## 9. Component System

### 9.1 Core Components

| Component | Purpose | Style Guidance |
| --- | --- | --- |
| Hero | first identity and value signal | strong type, clear action, specific visual |
| Navigation | orientation | quieter than hero, always readable |
| CTA Button | conversion | stable treatment, visible states |
| Card | repeated information | only use when grouping is real |
| Form Field | input | clear label, border, focus, error |
| Badge | state/category | small and semantic |
| Tab | mode switch | obvious active state |
| Table/List | comparison | alignment and density matter |
| Empty State | recovery | useful next action |
| Footer | closure | repeat brand logic, do not become junk drawer |

### 9.2 Button Rules

- Primary button must be visually unique.
- Secondary buttons should be quieter, not confusing.
- Hover states should increase clarity.
- Focus states must be visible.
- Disabled states need readable labels.
- Icon-only buttons need accessible labels and recognizable icons.

### 9.3 Card Rules

- Cards should not nest inside cards.
- Cards need consistent padding, border, and radius.
- Do not use cards for every section.
- Use cards for repeated items, product modules, content summaries, or controls.
- Avoid decorative shadows unless the style supports depth.

### 9.4 Form Rules

- Use labels.
- Keep error messages near fields.
- Preserve contrast in placeholder and disabled states.
- Do not rely on color alone.
- Keep submission result clear.

## 10. Interaction And Motion

Motion should make the style easier to use.

Good uses:

- hover confirmation
- tab indicator movement
- panel reveal
- card focus
- progress state
- loading feedback
- image transition

Bad uses:

- decorative loops that compete with content
- motion that delays form completion
- hover states that reduce contrast
- large parallax on text-heavy pages
- animations without reduced-motion handling

Recommended timings:

- hover: 100-180ms
- panel reveal: 180-280ms
- page transition: 240-420ms
- loading skeleton: subtle, not theatrical

## 11. Imagery And Media

Imagery must carry information or brand character.

Use imagery for:

- product evidence
- material detail
- interface proof
- human context
- editorial atmosphere
- diagrammatic explanation

Avoid imagery that is:

- generic stock
- too dark to inspect
- purely atmospheric when users need product clarity
- unrelated to the claim beside it
- cropped so tightly that the object cannot be understood

## 12. Implementation Recipes

### 12.1 Hero Recipe

\`\`\`html
<section class="style-hero">
  <nav class="style-nav">
    <a href="/" class="style-logo">Brand</a>
    <div class="style-links">
      <a href="/work">Work</a>
      <a href="/pricing">Pricing</a>
      <a href="/contact">Contact</a>
    </div>
  </nav>
  <div class="style-hero-grid">
    <div class="style-copy">
      <p class="style-kicker">Focused system</p>
      <h1>Build a visual identity with a point of view.</h1>
      <p>The interface should be specific, usable, and repeatable across real screens.</p>
      <a class="style-primary" href="/start">Start</a>
    </div>
    <div class="style-visual" aria-label="Product preview"></div>
  </div>
</section>
\`\`\`

### 12.2 Component CSS

\`\`\`css
.style-hero {
  background: var(--style-bg);
  color: var(--style-fg);
}

.style-nav {
  min-height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 clamp(20px, 4vw, 64px);
  border-bottom: 1px solid var(--style-border);
}

.style-hero-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(320px, 0.8fr);
  gap: clamp(32px, 6vw, 96px);
  align-items: center;
  padding: clamp(56px, 8vw, 128px) clamp(20px, 6vw, 96px);
}

.style-copy h1 {
  margin: 0;
  max-width: 12ch;
  font-size: clamp(44px, 7vw, 96px);
  line-height: 0.98;
}

.style-copy p {
  max-width: 58ch;
  font-size: 18px;
  line-height: 1.5;
}

.style-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 0 18px;
  background: var(--style-accent);
  color: #fff;
  border-radius: var(--style-radius);
  text-decoration: none;
  font-weight: 700;
}

@media (max-width: 760px) {
  .style-hero-grid {
    grid-template-columns: 1fr;
  }
}
\`\`\`

## 13. Page Blueprints

### 13.1 Brand Homepage

1. Hero with specific promise.
2. Proof row.
3. Three capability sections.
4. Product or work evidence.
5. Process section.
6. CTA.

Checks:

- Does the hero state what the brand does?
- Does the visual direction appear in the first viewport?
- Is there one obvious next action?
- Are proof points concrete?

### 13.2 Product Page

1. Product hero.
2. Feature evidence.
3. Workflow or use-case sequence.
4. Details/specs.
5. Social proof.
6. CTA or purchase path.

Checks:

- Is the product visible?
- Can the user understand the core workflow?
- Are details easy to find?
- Is conversion visually obvious?

### 13.3 App Dashboard

1. Navigation shell.
2. Primary task area.
3. Secondary panels.
4. Filters/actions.
5. Data display.
6. Empty/error/loading states.

Checks:

- Can users repeat the main task quickly?
- Are controls close to affected content?
- Are states visually distinct?
- Is density appropriate?

## 14. QA Checklist

### Identity

- Is there one recognizable visual idea?
- Does the style match ${pack.mood}?
- Are tokens consistent?
- Does the design avoid the warning: ${pack.avoid}?

### Usability

- Is the primary action obvious?
- Is body text readable?
- Are controls discoverable?
- Are mobile states complete?
- Are focus states visible?

### Craft

- Are spacing values consistent?
- Are repeated modules stable?
- Are images meaningful?
- Are cards used only when useful?
- Is motion restrained?

### Accessibility

- Are contrast ratios acceptable?
- Is information not conveyed by color alone?
- Are labels present?
- Is keyboard navigation supported?
- Does reduced motion work?

## 15. Prompt Templates

### 15.1 General Build Prompt

Create a ${pack.name} interface that feels ${pack.mood}. ${pack.thesis} Use ${pack.accent}. Build a complete, usable experience with clear hierarchy, real content structure, responsive behavior, accessible states, and a repeatable component system. ${pack.avoid}.

### 15.2 Landing Page Prompt

Design a ${pack.name} landing page with a strong first viewport, specific product or brand promise, credible proof, clear section rhythm, and a focused conversion path. The visual identity should come from typography, spacing, color roles, imagery, and component geometry rather than generic decoration.

### 15.3 App Interface Prompt

Design a ${pack.name} application screen for repeated use. Prioritize the main workflow, controls, state clarity, information density, and accessible interaction. Make the interface visually distinctive but keep operational surfaces calm enough for daily work.

## 16. Last-Mile Corrections

If the result feels generic:

- strengthen the type hierarchy
- reduce unrelated decoration
- define a stricter token system
- add one layout move tied to the content
- replace vague copy with concrete nouns and verbs

If the result feels too noisy:

- reduce accent color use
- simplify shadows and borders
- remove unnecessary cards
- increase alignment consistency
- limit motion to useful state changes

If the result feels too empty:

- add proof, product evidence, or richer content modules
- improve section rhythm
- add meaningful imagery
- use typography scale more decisively
- introduce one structural pattern from the sources

If the result feels hard to use:

- increase body size and contrast
- make controls more conventional
- add labels and helper text
- bring actions closer to content
- clarify active, hover, focus, empty, and error states

## 17. Acceptance Standard

A finished ${pack.name} design should:

- feel visually specific within the first viewport
- support real content and real workflows
- have consistent tokens
- have clear interaction states
- be responsive without losing character
- be accessible enough for production use
- translate the five source references into a broader reusable skill
`;

  let appendix = 1;
  while (text.length < 61000) {
    text += `

## Appendix ${appendix}: ${pack.name} Production Pattern Expansion

### A${appendix}.1 Layout Decisions

For ${pack.name}, layout should begin with content priority. Decide what the user must understand first, what they must do next, and what can wait. Then make the visual style serve that sequence. A strong ${pack.name} layout does not merely look ${pack.mood}; it makes that feeling useful.

Practical rules:

- Choose one dominant layout mode for each page.
- Use repeated alignment to make the system feel intentional.
- Give the main action a stable location.
- Keep secondary information visually lower but still readable.
- Use section breaks to reset attention.
- Avoid decorative containers when a simple band, row, or grid would be clearer.

### A${appendix}.2 Component Decisions

Every component should answer three questions:

1. What content does it contain?
2. What action or decision does it support?
3. How does it express ${pack.name} without harming usability?

Good ${pack.name} components are consistent but not lifeless. They use token discipline, clear spacing, and state design. They do not depend on novelty for every module.

### A${appendix}.3 Content Decisions

Copy should be concrete and matched to the visual intensity. If the design is restrained, the writing can carry more attitude. If the design is expressive, the writing should become simpler and more direct.

Useful copy checks:

- Remove vague adjectives.
- Name the product, object, audience, or workflow.
- Prefer one clear verb per CTA.
- Keep helper text close to the thing it explains.
- Make error and empty states human but precise.

### A${appendix}.4 QA Decisions

Before shipping, review the page at desktop, tablet, and mobile widths. Verify text wrapping, image crops, focus states, scroll rhythm, empty states, and real content density. A ${pack.name} design only works when the style survives real constraints.

`;
    appendix += 1;
  }

  return text;
}

async function generate(pack) {
  const search = await getSearch(pack.query);
  const selected = search.slice(0, 5);
  if (selected.length < 5) throw new Error(`Not enough results for ${pack.name}`);
  const details = [];
  for (const item of selected) {
    details.push(await getDetail(item.id));
  }

  const rawDir = path.join(root, "raw", pack.slug);
  const skillDir = path.join(root, "skills", pack.slug);
  ensureDir(rawDir);
  ensureDir(skillDir);

  details.forEach((style, index) => {
    const file = `${String(index + 1).padStart(2, "0")}-${slugify(style.siteName || `source-${index + 1}`)}.md`;
    fs.writeFileSync(path.join(rawDir, file), buildRaw(style, index, pack), "utf8");
  });

  const skill = buildSkill(pack, details);
  fs.writeFileSync(path.join(skillDir, "SKILL.md"), skill, "utf8");

  return {
    slug: pack.slug,
    chars: skill.length,
    sources: details.map((s) => ({
      name: s.siteName,
      source: sourceStyleUrl(s.id),
      site: s.url
    }))
  };
}

const results = [];
for (const pack of styles) {
  console.log(`Generating ${pack.slug}...`);
  results.push(await generate(pack));
}

console.log(JSON.stringify(results, null, 2));
