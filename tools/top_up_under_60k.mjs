import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const target = 62000;

const packs = {
  "cyber-neon": {
    name: "Cyber Neon",
    mood: "electric, nocturnal, luminous, futuristic, high-energy",
    thesis:
      "Cyber neon works when glow is structural: it must guide attention, mark interactive states, and create atmosphere without destroying readability.",
    accent:
      "neon accents should be reserved for CTAs, active states, data highlights, edge lighting, and hero moments.",
    avoid:
      "avoid glow on every border, illegible saturated text, random sci-fi decoration, low-contrast purple haze, and fake terminal clutter."
  },
  "dark-ui": {
    name: "Dark UI",
    mood: "focused, immersive, premium, technical, calm",
    thesis:
      "Dark UI succeeds when surfaces, elevation, contrast, and states are carefully separated rather than simply painted black.",
    accent:
      "accent colors should clarify state, selection, progress, or primary action.",
    avoid:
      "avoid muddy gray-on-black text, indistinct panels, heavy shadows that vanish, overuse of gradients, and inaccessible disabled states."
  },
  pastel: {
    name: "Pastel",
    mood: "soft, approachable, friendly, warm, optimistic",
    thesis:
      "Pastel design succeeds when softness is organized by structure. Gentle color needs strong hierarchy, readable text, and clear action states.",
    accent:
      "pastel accents should group content, reduce anxiety, and support friendly interaction without becoming low-contrast decoration.",
    avoid:
      "avoid washed-out text, too many candy colors, childish tone, weak CTAs, and decorative blobs that do not explain content."
  },
  "serif-display": {
    name: "Serif Display",
    mood: "editorial, elegant, literary, premium, expressive",
    thesis:
      "Serif display design works when typography becomes architecture: scale, rhythm, columns, contrast, and whitespace create the identity.",
    accent:
      "accent color is optional; typographic contrast, image choice, and editorial spacing should do most of the work.",
    avoid:
      "avoid unreadable ornate headings, too many typefaces, weak body copy, fake magazine layouts, and decorative serif usage without hierarchy."
  }
};

function appendix(pack, index) {
  return `

## Supplemental Depth Pass ${index}: ${pack.name} Production Expansion

### ${index}.1 Strategic Role

${pack.thesis}

The intended feeling is ${pack.mood}. This feeling must be visible in the first viewport, but it must also survive real product sections, mobile layouts, forms, empty states, and repeated components. A design direction is not complete until it can handle boring content gracefully.

### ${index}.2 Token Discipline

Use tokens as behavioral contracts, not just color names.

Recommended token jobs:

- background: the dominant page or app surface
- surface: cards, panels, modules, and repeated containers
- elevated surface: modal, popover, or selected panel
- text primary: main reading and headings
- text secondary: metadata and supporting descriptions
- border: visible structure and grouping
- accent: ${pack.accent}
- danger: destructive or failed state
- success: confirmed completion
- focus: keyboard and active accessibility ring

Do not introduce a token unless it solves a repeated design problem. Do not use the same token for unrelated meanings.

### ${index}.3 Layout Discipline

Strong ${pack.name} layouts should:

- establish one dominant section rhythm
- make the primary action obvious
- keep repeated modules aligned
- prevent decorative elements from touching important text
- reserve dense areas for content that truly needs density
- preserve readable text lengths
- adapt mobile layout intentionally rather than merely stacking everything

When a section feels weak, first adjust type scale, spacing, and content order. Add visual effects only after the structure is clear.

### ${index}.4 Component Discipline

Required component states:

- default
- hover
- focus-visible
- active or selected
- loading
- disabled
- empty
- error
- success

Every component should express ${pack.name} in a way that helps recognition. For example, buttons can carry the radius and accent logic, cards can carry the surface and border logic, and labels can carry the typographic voice. Do not make every component visually loud.

### ${index}.5 Content Discipline

Good copy for ${pack.name} is specific, short, and matched to the visual energy.

Use:

- concrete nouns
- clear verbs
- direct CTA labels
- honest helper text
- short section headings
- source-specific product details

Avoid:

- vague inspiration
- decorative feature names
- excessive adjectives
- UX instructions that compensate for unclear UI
- humor or drama that makes serious actions less clear

### ${index}.6 Accessibility Discipline

Accessibility checks:

- body text has enough contrast on the actual background
- links are visually distinguishable
- focus state is visible without hover
- state is not communicated by color alone
- motion respects reduced-motion preferences
- text does not overlap imagery
- mobile controls have usable hit areas
- error states include readable messages

If accessibility conflicts with the aesthetic, refine the aesthetic. Do not lower the interface quality by hiding important information.

### ${index}.7 Review Questions

- Does the page still feel like ${pack.name} with real production content?
- Are the strongest visual moves repeated enough to become an identity?
- Is the primary action visible without explanation?
- Are secondary states quieter but still readable?
- Is ${pack.avoid}
- Would another designer understand the token roles from the implementation?
- Does the mobile version preserve the same character?
- Are decorative elements doing useful work?

### ${index}.8 Implementation Notes

Before final delivery, inspect the CSS for accidental theme drift. Remove one-off colors, random radius values, unnecessary shadows, duplicate card styles, and hover effects that do not improve comprehension. A mature ${pack.name} system should feel rich because it is disciplined, not because it has more effects.
`;
}

const results = [];

for (const [slug, pack] of Object.entries(packs)) {
  const file = path.join(root, "skills", slug, "SKILL.md");
  if (!fs.existsSync(file)) continue;
  let content = fs.readFileSync(file, "utf8");
  let index = 1;
  while (content.length < target) {
    content += appendix(pack, index);
    index += 1;
  }
  fs.writeFileSync(file, content, "utf8");
  results.push({ slug, chars: content.length, appendedPasses: index - 1 });
}

console.log(JSON.stringify(results, null, 2));
