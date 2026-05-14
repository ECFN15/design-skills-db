import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const sourceSkillsDir = path.join(root, "skills");
const sourceRawDir = path.join(root, "raw");
const targetRoot = path.join(root, ".agents", "skills");

const sharedBans = [
  "Do not output a moodboard, single hero, or decorative shell when the request implies a complete product surface.",
  "Do not rely on generic centered hero, three-card feature row, vague SaaS copy, or default Inter-only typography unless the existing project requires it.",
  "Do not use effects that make text less readable, controls less discoverable, or mobile layout less stable.",
  "Do not skip hover, focus, active, disabled, loading, empty, error, and success states on interactive components.",
  "Do not hide weak hierarchy behind gradients, blur, shadows, mock terminal text, or random badges."
];

const profiles = {
  "clean-saas": {
    display: "Clean SaaS",
    use: "clean SaaS landing pages, B2B product pages, dashboards, onboarding, pricing, integrations, enterprise trust surfaces",
    mood: "calm, precise, trustworthy, product-led, modern, operational",
    principles: [
      "Product evidence appears in the first viewport: dashboard frame, workflow preview, data table, integration map, or command surface.",
      "The interface is calm but never empty; every section proves a workflow, decision, metric, automation, or trust claim.",
      "Use one action accent, one neutral surface system, and one data/proof rhythm across the whole page."
    ],
    bans: [
      "No oversized generic launch hero without UI proof.",
      "No decorative card farm when a workflow, table, or product shell would communicate better.",
      "No vague copy such as 'unlock your potential' without concrete product nouns."
    ],
    mode: {
      density: "Medium-high. SaaS must show real product complexity without becoming noisy.",
      motion: "Low-medium. Use reveal, focus, tab changes, command activation, and product walkthrough motion.",
      decoration: "Low. Decorative marks must double as product evidence or navigation aids.",
      contrast: "Soft neutral contrast with one crisp action accent.",
      radius: "8px for controls, 12-16px for panels, 999px for pills only.",
      type: "Geist, Satoshi, Avenir-style sans; mono only for data labels and command fragments.",
      assets: "Screenshots, workflow diagrams, app frames, integration icons, metric strips."
    },
    signatures: [
      "SaaS Evidence Stack: hero claim + inspectable UI frame + metric strip + workflow proof before any abstract feature copy.",
      "Trust Rail: compliance, customer logos, uptime, security, and team controls shown as compact utilities, not marketing badges.",
      "Command Surface: a search/input/control bar can become the hero object when the product is workflow-heavy.",
      "Integration Constellation: logos connect to a central product frame through thin rules, not floating sticker clutter."
    ],
    archetypes: [
      ["Product-Led Hero", "wide H1, left copy, right app shell, metric rail below", "best for B2B launches and dashboards"],
      ["Workflow Board", "kanban/table/process columns with live state chips", "best for operational SaaS"],
      ["Integration Matrix", "dense logo grid connected to one command center", "best for automation and platform products"],
      ["Pricing-To-Trust", "pricing cards attached to security, support, and admin proof", "best for conversion pages"]
    ],
    components: [
      "app-shell-hero", "workflow-sequence", "metric-proof-strip", "integration-matrix", "role-permission-table", "pricing-with-usage", "activity-feed", "trust-control-panel"
    ],
    cssRecipe: "cleanSaasRecipe",
    motionRecipe: "productWalkthroughMotion"
  },
  "cyber-neon": {
    display: "Cyber Neon",
    use: "futuristic websites, cyberpunk launches, gaming, AI labs, nightlife brands, luminous dark interfaces, techno editorial pages",
    mood: "electric, nocturnal, luminous, futuristic, sharp, high-energy",
    principles: [
      "Glow has a job: action, live status, edge detection, scanline atmosphere, or active navigation.",
      "Keep one primary neon accent and one secondary signal color; all other surfaces stay black, graphite, smoke, or glass.",
      "Separate luminous layers from readable text layers so the page feels intense but still usable."
    ],
    bans: [
      "No neon glow on every border, word, icon, and card.",
      "No saturated text on saturated backgrounds.",
      "No fake cyber clutter unless it supports product state, navigation, or interaction."
    ],
    mode: {
      density: "Medium. Use concentrated telemetry clusters and large negative voids.",
      motion: "High but controlled. Flicker, scan, parallax, pointer glow, and data pulse are allowed.",
      decoration: "Medium-high, but every decoration must be part of a signal system.",
      contrast: "Deep dark substrate with luminous edges and high-contrast text.",
      radius: "999px for capsule CTAs, 2-6px for panels, 0px for terminal blocks.",
      type: "Sharp grotesk plus mono labels. Avoid cute rounded fonts.",
      assets: "Shader fields, holographic product frames, scanline overlays, rendered devices, nightlife/game imagery."
    },
    signatures: [
      "Neon Role Contract: one accent for CTA/active state, one color for live/success, red/orange only for alerts.",
      "Button/Card Dichotomy: pill CTAs can glow; panels stay sharp and thin with restrained inner light.",
      "Environmental Glow: glow should radiate from hero object, cursor trail, horizon line, or active edge, not from all text.",
      "Terminal Legibility: mono data is small but never faint; use opacity layers only for nonessential telemetry."
    ],
    archetypes: [
      ["Night Lab Launch", "black void, luminous product core, orbital metrics", "AI labs and futuristic SaaS"],
      ["Arcade Control Deck", "glowing nav, panels, leaderboards, animated status", "games, events, culture"],
      ["Holographic Marketplace", "search and product cards as lit glass trays", "digital assets and premium tech commerce"],
      ["Cyber Editorial", "huge condensed type, image slices, scanline chapters", "campaign and brand pages"]
    ],
    components: [
      "neon-command-bar", "hologram-product-card", "scanline-hero-core", "telemetry-chip-rail", "glitch-title-mask", "luminous-pricing-deck", "system-status-map", "cursor-reactive-panel"
    ],
    cssRecipe: "cyberNeonRecipe",
    motionRecipe: "neonPulseMotion"
  },
  "dark-ui": {
    display: "Dark UI",
    use: "dark dashboards, AI tools, premium apps, developer consoles, command centers, immersive product interfaces",
    mood: "focused, immersive, premium, technical, calm, deep",
    principles: [
      "Dark design needs a tonal ladder: background, base panel, raised panel, selected panel, overlay, and focus ring.",
      "Use accent color for action, selection, progress, or status, never as body text decoration.",
      "Make dark UI feel deep through hierarchy and state clarity, not by making everything black."
    ],
    bans: [
      "No muddy gray-on-black for important text.",
      "No indistinguishable panel stack.",
      "No gradient fog to cover weak hierarchy."
    ],
    mode: {
      density: "Medium-high for apps, medium for websites.",
      motion: "Medium. Use depth, panel reveal, smooth state transition, and subtle background drift.",
      decoration: "Low-medium. Use depth, lines, and atmospheric light sparingly.",
      contrast: "Dark substrate with readable text and clearly stepped surfaces.",
      radius: "8-14px for product panels, 999px for segmented controls.",
      type: "Modern sans with mono for code/data only.",
      assets: "Product screenshots, command panels, agent messages, graphs, dark photography."
    },
    signatures: [
      "Surface Ladder: every panel uses a distinct tone or border; active panels receive accent edge or raised contrast.",
      "Command Center Rhythm: large central task panel + side utility rail + bottom status/metadata band.",
      "Premium Darkness: deep navy/charcoal with one cool accent feels more refined than pure black.",
      "Readable Microcopy: metadata can be muted, but core labels and values must pass contrast."
    ],
    archetypes: [
      ["AI Workspace", "chat/input center with context side panels", "AI apps and copilots"],
      ["Ops Command", "metrics, maps, logs, incidents, control rail", "dashboards and monitoring"],
      ["Premium Product Dark", "hero object on dark stage with crisp UI proof", "paid products and launches"],
      ["Developer Console", "docs, code, deploy status, command palette", "tools and infrastructure"]
    ],
    components: [
      "dark-command-input", "stacked-insight-panel", "status-sidebar", "log-console", "metric-glass-card", "agent-thread", "deploy-timeline", "focus-ring-control"
    ],
    cssRecipe: "darkUiRecipe",
    motionRecipe: "panelDepthMotion"
  },
  "editorial-minimal": {
    display: "Editorial Minimal",
    use: "minimal editorial pages, portfolios, cultural sites, calm brand systems, writing-heavy layouts, refined landing pages",
    mood: "quiet, typographic, spacious, authored, restrained, intentional",
    principles: [
      "Type, whitespace, rhythm, and placement carry the identity; every image crop must feel chosen.",
      "Use fewer sections, but make each section compositionally specific and authored.",
      "Minimalism must still contain clear navigation, proof, state, and action."
    ],
    bans: [
      "No default centered stack repeated down the page.",
      "No empty page sold as restraint.",
      "No hiding primary action or navigation for aesthetic quietness."
    ],
    mode: {
      density: "Low-medium. Spacious but not vacant.",
      motion: "Low. Fades, text reveal, image crop shifts, and page transitions only.",
      decoration: "Very low. Rules, captions, margins, and crop choices do the work.",
      contrast: "Warm monochrome or quiet color with strong text contrast.",
      radius: "0-8px. Usually square imagery and small-radius controls.",
      type: "Editorial serif or high-quality grotesk; strong body typography.",
      assets: "Large editorial images, portraits, art objects, case-study stills, captioned media."
    },
    signatures: [
      "Authored Margin: asymmetrical margins and captions create identity without decoration.",
      "One Strong Typographic Move: oversized title, column grid, drop cap, or index system, then restraint.",
      "Quiet Proof: case studies, essays, products, or archive entries are presented as editorial material.",
      "Breathing Navigation: nav can be sparse, but must remain visible and usable."
    ],
    archetypes: [
      ["Magazine Index", "large title with article/product index below", "archives and cultural sites"],
      ["Calm Portfolio", "single-column narrative with strong image rhythm", "studios and artists"],
      ["Editorial Commerce", "product as photographed object with caption logic", "premium stores"],
      ["Essay-Landing Hybrid", "long-form copy with conversion woven into text", "thought-led brands"]
    ],
    components: [
      "captioned-media-block", "editorial-index-row", "quiet-cta-bar", "pull-quote-section", "case-study-list", "margin-note", "image-chapter", "text-led-footer"
    ],
    cssRecipe: "editorialMinimalRecipe",
    motionRecipe: "quietEditorialMotion"
  },
  "editorial-type": {
    display: "Editorial Type",
    use: "typographic websites, magazine-like pages, cultural brands, essays, archives, portfolios, editorial commerce",
    mood: "literary, expressive, composed, sharp, cultural, typographic",
    principles: [
      "Typography is layout: scale, columns, rhythm, pull quotes, indexes, and typographic contrast create the page architecture.",
      "Use display type dramatically but protect reading comfort and mobile wrapping.",
      "Every typographic choice must create hierarchy, not just decoration."
    ],
    bans: [
      "No decorative serif heading without a full type system.",
      "No display type that makes navigation or conversion unclear.",
      "No more than two type families unless there is a strong editorial reason."
    ],
    mode: {
      density: "Medium. Text-rich with deliberate pacing.",
      motion: "Low-medium. Word reveals, column reveals, scroll indexes, image-mask transitions.",
      decoration: "Low. Type contrast and rules are the decoration.",
      contrast: "High type contrast with restrained accents.",
      radius: "0-8px; type-led pages usually favor square frames.",
      type: "Display serif or condensed grotesk plus readable body sans/serif.",
      assets: "Editorial photography, type specimens, covers, article cards, product stills."
    },
    signatures: [
      "Type-Led Layout Recipe: H1 defines the grid, body text obeys column width, captions anchor media.",
      "Scale Shock With Discipline: huge type is acceptable only with compressed line-height and mobile clamps.",
      "Typographic Index: rows, dates, authors, categories, and page numbers become interface structure.",
      "Accent Economy: underline, rule, bullet, or one highlight color replaces decorative graphics."
    ],
    archetypes: [
      ["Poster Hero", "viewport-scale title with tiny metadata and strong crop", "campaign and cultural launch"],
      ["Magazine Grid", "multi-column editorial cards and index rows", "publishing and portfolios"],
      ["Typographic Commerce", "products arranged like spreads with captions", "fashion/culture commerce"],
      ["Archive System", "filters, dates, issues, categories as type hierarchy", "archives and libraries"]
    ],
    components: [
      "poster-title-hero", "issue-index-table", "pullquote-panel", "caption-grid", "article-card-row", "typographic-filter", "spread-gallery", "bibliographic-footer"
    ],
    cssRecipe: "editorialTypeRecipe",
    motionRecipe: "textRevealMotion"
  },
  "experimental-type": {
    display: "Experimental Type",
    use: "experimental typography, creative studios, cultural pages, posters, campaigns, unconventional portfolios",
    mood: "expressive, strange, typographic, art-directed, surprising, controlled",
    principles: [
      "Choose one typographic experiment and make it the interface's structural idea.",
      "Pair radical type with calm utility text, obvious navigation, and accessible controls.",
      "Mobile wrapping is part of the design system; distorted or huge words must remain controlled."
    ],
    bans: [
      "No illegible essential copy.",
      "No multiple competing experiments on the same viewport.",
      "No generic UI cards dumped beneath a radical hero without a transition system."
    ],
    mode: {
      density: "Medium-high. Posters, modules, and indexes can be dense if hierarchy is clear.",
      motion: "Medium-high. Variable-font axes, mask reveals, kinetic type, and scroll transforms.",
      decoration: "Medium. Type is the decoration.",
      contrast: "Usually high contrast with one strange accent or block system.",
      radius: "Often 0px or intentionally exaggerated; pick one geometry and commit.",
      type: "Variable fonts, condensed grotesks, display serif, mono annotations.",
      assets: "Type specimens, poster crops, generated textures, campaign imagery."
    },
    signatures: [
      "Single Experiment Rule: stretch, rotate, slice, compress, outline, or overlap type, but choose one dominant behavior.",
      "Functional Counterweight: nav, body, filters, and CTAs stay plain enough to make the experiment usable.",
      "Specimen Logic: sections can feel like font specimens with labels, glyphs, weights, and modules.",
      "Mobile Safety: use `overflow-wrap:anywhere`, responsive clamps, and alternate line breaks."
    ],
    archetypes: [
      ["Type Specimen Site", "font axes, glyph modules, huge test strings", "type foundries and studios"],
      ["Poster Campaign", "one enormous expressive headline with blocks", "cultural launches"],
      ["Brutal Portfolio", "grid, index rows, distorted titles", "creative studios"],
      ["Interactive Letter Lab", "hover/scroll changes glyphs or masks", "experimental tools"]
    ],
    components: [
      "variable-type-hero", "glyph-grid", "specimen-slider", "poster-card", "distorted-nav", "kinetic-marquee", "type-index", "axis-control-panel"
    ],
    cssRecipe: "experimentalTypeRecipe",
    motionRecipe: "kineticTypeMotion"
  },
  "expressive-brand": {
    display: "Expressive Brand",
    use: "brand-heavy sites, consumer products, creative launches, expressive agencies, campaigns, identity systems",
    mood: "distinctive, memorable, colorful, confident, personality-led, specific",
    principles: [
      "Define one recognizable brand behavior and repeat it across type, layout, color, copy, components, and motion.",
      "Personality must clarify category and product value; it cannot hide vague content.",
      "Use custom visual motifs, not random decorative shapes."
    ],
    bans: [
      "No decoration without brand logic.",
      "No personality that obscures the primary CTA.",
      "No generic playful copy for serious product flows."
    ],
    mode: {
      density: "Medium. Let brand moments breathe, then support with clear product sections.",
      motion: "Medium-high. Brand behaviors can animate if they support memory and navigation.",
      decoration: "Medium-high but systematic.",
      contrast: "Confident color contrast with semantic accents.",
      radius: "Defined by brand: can be sharp, pill, blob, or modular, but consistent.",
      type: "Distinct display face plus readable sans.",
      assets: "Brand motifs, product imagery, campaign art, icon systems, character or object libraries."
    },
    signatures: [
      "Brand Behavior Loop: one motif repeats in hero, cards, transitions, cursor/hover, and footer.",
      "Personality With Product Proof: brand energy surrounds concrete product views or scenarios.",
      "Copy As Interface: button labels, filters, and section titles should carry voice without becoming unclear.",
      "Controlled Variety: colorful sections can differ, but layout logic and geometry stay connected."
    ],
    archetypes: [
      ["Mascot/Object World", "hero object or character drives section motifs", "consumer brands"],
      ["Campaign System", "loud type, color blocks, editorial modules", "launches and agencies"],
      ["Expressive Product", "product UI embedded in branded scenes", "apps and tools"],
      ["Brand Marketplace", "category colors and cards become identity system", "commerce"]
    ],
    components: [
      "brand-motif-hero", "voice-driven-cta", "color-coded-card-system", "campaign-strip", "object-gallery", "animated-logo-grid", "persona-testimonial", "expressive-footer"
    ],
    cssRecipe: "expressiveBrandRecipe",
    motionRecipe: "brandBehaviorMotion"
  },
  "geometric-modern": {
    display: "Geometric Modern",
    use: "geometric brand systems, modern portfolios, architecture, design districts, shape-led SaaS, structured editorial pages",
    mood: "structured, contemporary, rational, bold, rhythmic, architectural",
    principles: [
      "Geometry must structure the page through grids, modules, circles, blocks, diagonals, or repeated shape systems.",
      "Every shape needs a job: grouping, sequencing, framing, revealing, or interaction.",
      "Mobile must preserve the shape logic instead of collapsing into unrelated cards."
    ],
    bans: [
      "No scattered abstract shapes as decoration.",
      "No mixed geometric systems without hierarchy.",
      "No broken shape logic on responsive layouts."
    ],
    mode: {
      density: "Medium. Rhythm matters more than quantity.",
      motion: "Medium. Shape morphs, grid reveal, clip-path wipes, and modular transitions.",
      decoration: "Medium. Shapes are structural decoration.",
      contrast: "Crisp neutrals plus one or two geometric accent fills.",
      radius: "Either strict 0-4px or consistently circular/pill; do not mix randomly.",
      type: "Geometric sans, condensed sans, or precise grotesk.",
      assets: "Architecture, product modules, diagrams, shape masks, map-like grids."
    },
    signatures: [
      "Shape Grammar: choose circle, rectangle, diagonal, capsule, or grid module as the primary motif.",
      "Grid As Brand: visible alignment, repeated track sizes, and shape ratios create identity.",
      "Clip And Mask: imagery can be cropped by geometric rules rather than placed in generic rectangles.",
      "Rhythmic Repetition: repeat dimensions and alignments across hero, cards, sections, and footer."
    ],
    archetypes: [
      ["Modular Grid Brand", "rectangular modules and strict track rhythm", "SaaS and studios"],
      ["Circular System", "orbits, circular crops, radial navigation", "modern brands and apps"],
      ["Architectural Layout", "plans, coordinates, measured whitespace", "architecture/design"],
      ["Shape-Led Commerce", "product cards use consistent masks and modules", "stores and marketplaces"]
    ],
    components: [
      "modular-hero-grid", "shape-mask-card", "radial-nav-cluster", "coordinate-label", "geometric-stat-block", "clip-path-gallery", "plan-view-section", "module-footer"
    ],
    cssRecipe: "geometricModernRecipe",
    motionRecipe: "geometricRevealMotion"
  },
  "glossy-modern": {
    display: "Glossy Modern",
    use: "polished modern SaaS, glassy product pages, premium tech, visual tools, interactive brand systems",
    mood: "polished, luminous, smooth, premium, dimensional, modern",
    principles: [
      "Gloss and glass are accents around key surfaces, not a blanket effect.",
      "Readable text and stable depth hierarchy matter more than blur amount.",
      "Use reflection, highlight, bevel, gradient, and translucency with performance discipline."
    ],
    bans: [
      "No glassmorphism on every card.",
      "No large blurred scrolling regions.",
      "No low-contrast text inside translucent panels."
    ],
    mode: {
      density: "Medium. Polished interfaces need space for light and reflections.",
      motion: "Medium-high. Highlight sweeps, depth shifts, lens transitions, and product reveals.",
      decoration: "Medium. Gloss, reflection, and glow must be localized.",
      contrast: "Luminous mid/high contrast with protected text surfaces.",
      radius: "16-32px for glossy panels, 999px for controls, 8px for dense UI.",
      type: "Clean modern sans with refined weights.",
      assets: "3D product renders, glass panels, UI mockups, luminous gradients, high-quality screenshots."
    },
    signatures: [
      "Glass Hierarchy: background glow, translucent hero object, solid text slab, crisp CTA.",
      "Specular Edge: key cards get a one-pixel highlight and inner shadow, not heavy drop shadow.",
      "Depth Stack: foreground panels have more opacity and sharper borders than background panels.",
      "Performance Glass: isolate blur to small layers and keep scrolling smooth."
    ],
    archetypes: [
      ["Glass Product Stage", "hero product on luminous glass platform", "premium tech"],
      ["Visual Tool UI", "layer panels, canvas, inspector, preview", "creative software"],
      ["Glossy SaaS", "app shell with polished cards and highlight sweeps", "modern SaaS"],
      ["Dimensional Brand", "3D objects and reflective cards define the identity", "launch pages"]
    ],
    components: [
      "glass-hero-panel", "specular-card", "floating-toolbar", "layered-product-frame", "highlight-sweep-button", "depth-pricing-card", "reflection-gallery", "luminous-footer"
    ],
    cssRecipe: "glossyModernRecipe",
    motionRecipe: "glossyDepthMotion"
  },
  "high-contrast": {
    display: "High Contrast",
    use: "stark brand sites, editorial product pages, technical consoles, monochrome pages, bold launch pages",
    mood: "direct, sharp, readable, confident, editorial, precise",
    principles: [
      "Contrast is structure: foreground/background tension, section cuts, state inversion, and action hierarchy.",
      "Use a tiny palette and assign the accent a strict job.",
      "The design should be immediately readable at a distance and still refined up close."
    ],
    bans: [
      "No black-white styling without composition.",
      "No low-opacity gray for important text.",
      "No gradients when flat contrast would be stronger."
    ],
    mode: {
      density: "Medium-high. Poster blocks and dense data sections can coexist.",
      motion: "Medium. Hard cuts, inversion, wipes, and snap reveals.",
      decoration: "Low-medium. Lines, blocks, type scale, and accent marks do the work.",
      contrast: "Maximum. Black/white or near black/near white with one accent.",
      radius: "0-4px generally; pills only if intentionally contrasted.",
      type: "Bold grotesk, condensed sans, mono data, or dramatic editorial serif.",
      assets: "High contrast photography, product silhouettes, technical diagrams, poster crops."
    },
    signatures: [
      "Poster Authority: huge type and hard section boundaries replace decorative art.",
      "Accent Job Lock: accent can mean action, warning, price, or selection, but only one role.",
      "Inversion State System: hover/focus/active often invert foreground and background.",
      "Blueprint Or Fashion Fork: choose data-console precision or editorial drama; do not average them."
    ],
    archetypes: [
      ["Poster Launch", "huge type, image cutout, stark CTA", "brand and product launches"],
      ["Data Console", "black/white grid, mono data, one accent", "technical tools"],
      ["Fashion Editorial", "large photo, extreme whitespace, tight typography", "fashion/culture"],
      ["Stark Marketplace", "filter rail, product grid, bold inversion states", "commerce"]
    ],
    components: [
      "inverted-nav", "poster-hero", "hard-edge-card", "contrast-filter-rail", "mono-data-strip", "split-image-feature", "accent-cta-block", "black-white-footer"
    ],
    cssRecipe: "highContrastRecipe",
    motionRecipe: "contrastCutMotion"
  },
  "high-end-design": {
    display: "High-End Design",
    use: "luxury sites, premium product pages, high-end portfolios, refined commerce, gallery-like brand systems",
    mood: "premium, restrained, confident, tactile, editorial, composed",
    principles: [
      "Restraint must be visible through spacing, material, image quality, type, and pacing.",
      "Show the object, service, craft, or environment clearly; high-end does not mean vague.",
      "Use quiet conversion and refined interaction instead of loud effects."
    ],
    bans: [
      "No gold cliches, fake luxury gradients, excessive blur, or generic black pages.",
      "No hiding product details behind mood imagery.",
      "No illegible tiny type used as fake sophistication."
    ],
    mode: {
      density: "Low-medium. Let objects and typography breathe, then add detail with captions and material specs.",
      motion: "Low-medium. Slow image reveals, gallery pacing, tactile hover, product rotation, smooth chapter transitions.",
      decoration: "Very low. Material, crop, and spacing are the decoration.",
      contrast: "Refined high contrast or warm architectural neutrals.",
      radius: "0-4px for automotive/editorial, 8px for product cards, 32-80px only for soft luxury furniture/wellness.",
      type: "Elegant serif or premium grotesk. Body text must stay readable and calm.",
      assets: "Large product photography, material closeups, gallery frames, architectural images, craft process."
    },
    signatures: [
      "Luxury Geometry Signatures: Ferrari/BMW can be 0px and machined; B&O can use 40px pill CTAs; interiors may use 80px soft corners; Peak uses 4-8px utility precision.",
      "Object As Proof: the product or craft must be inspectable in the first or second section.",
      "Quiet Conversion: CTAs are visible but composed, often text links, small pills, or refined bars.",
      "Material Cue System: leather, metal, glass, fabric, wood, stone, carbon, or paper must influence surfaces and motion."
    ],
    archetypes: [
      ["Gallery Product Stage", "large object image, serif/grotesk type, quiet CTA", "luxury product pages"],
      ["Machined Performance", "black/silver surfaces, red accent, square panels", "automotive and equipment"],
      ["Architectural Warmth", "large photography, warm paper, generous radius", "interiors and hospitality"],
      ["Refined Commerce", "product grid with editorial pacing and material details", "premium shops"]
    ],
    components: [
      "gallery-hero", "material-spec-row", "quiet-purchase-bar", "editorial-product-card", "craft-process-sequence", "large-image-chapter", "concierge-form", "refined-footer"
    ],
    cssRecipe: "highEndRecipe",
    motionRecipe: "luxuryPacingMotion"
  },
  "light-ui": {
    display: "Light UI",
    use: "bright applications, clean dashboards, SaaS pages, productivity tools, documentation, approachable product surfaces",
    mood: "open, clear, bright, lightweight, trustworthy, usable",
    principles: [
      "White and near-white surfaces need enough borders, type contrast, and state definition.",
      "Use structure, not shadow spam, to separate areas.",
      "Keep interactive states visible despite the light palette."
    ],
    bans: [
      "No washed-out pale gray copy.",
      "No all-white page without surface logic.",
      "No relying only on soft shadows for hierarchy."
    ],
    mode: {
      density: "Medium. Light UI can be information-rich if spacing and borders are precise.",
      motion: "Low-medium. Focus, reveal, table update, tab switch, and lightweight hover.",
      decoration: "Low. Use white chrome, thin borders, subtle color, and real product content.",
      contrast: "Bright with crisp dark text and visible borders.",
      radius: "8-16px for app panels, 999px for pills.",
      type: "Readable modern sans; mono only for technical values.",
      assets: "Screens, docs, data, diagrams, product UI, clean photography."
    },
    signatures: [
      "White Chrome: white surfaces are differentiated by borders, elevation, grouping, and spacing.",
      "Visible State Lightness: selected tabs, focus rings, errors, and disabled states remain obvious.",
      "Approachable Product Proof: diagrams and UI previews should feel inviting and uncluttered.",
      "Soft Color Roles: low-saturation colors group paths, not decorate every card."
    ],
    archetypes: [
      ["Bright App Shell", "nav/sidebar/main panel with crisp controls", "apps and dashboards"],
      ["Documentation Product", "docs + examples + preview panels", "developer tools"],
      ["Light SaaS Landing", "hero UI, workflow proof, trust sections", "B2B products"],
      ["Productivity Surface", "task lists, calendars, filters, activity", "tools"]
    ],
    components: [
      "white-app-shell", "light-data-table", "docs-preview-panel", "soft-status-chip", "filter-toolbar", "empty-state-panel", "workflow-card", "light-footer"
    ],
    cssRecipe: "lightUiRecipe",
    motionRecipe: "lightStateMotion"
  },
  "minimal-design": {
    display: "Minimal Design",
    use: "minimal websites, refined portfolios, product pages, calm brand systems, simple tools",
    mood: "essential, restrained, quiet, precise, spacious, intentional",
    principles: [
      "Remove anything that does not help identity, comprehension, or action.",
      "The remaining type, spacing, alignment, and content must be specific enough to carry the design.",
      "Minimal design still needs state, structure, and conversion."
    ],
    bans: [
      "No default typography and whitespace labeled as design.",
      "No empty pages because decisions were avoided.",
      "No hidden controls required for actual use."
    ],
    mode: {
      density: "Low-medium. Sparse but complete.",
      motion: "Low. Quick fades, subtle reveals, precise hover state.",
      decoration: "Very low. Only type, alignment, image, line, and spacing.",
      contrast: "Quiet but accessible.",
      radius: "0-8px, chosen once and repeated.",
      type: "One excellent sans or serif plus disciplined scale.",
      assets: "One or two strong images, product object, simple diagrams, precise icons."
    },
    signatures: [
      "Essential Composition: each section has one dominant idea and one precise supporting rhythm.",
      "Alignment As Ornament: grids, margins, and baselines create the visual interest.",
      "Silence With Proof: product or portfolio evidence appears clearly, not as decorative filler.",
      "Tiny Palette, Big Discipline: neutral base with one accent or no accent."
    ],
    archetypes: [
      ["Single Object Hero", "one product/image with precise type and CTA", "product and portfolio"],
      ["Quiet Index", "rows, captions, and dates carry structure", "archives"],
      ["Minimal Product Flow", "few modules, strong copy, clear action", "landing pages"],
      ["Calm Tool", "simple app surface with obvious controls", "utilities"]
    ],
    components: [
      "single-object-hero", "minimal-index-row", "quiet-feature-line", "simple-control-bar", "restrained-card", "captioned-image", "plain-form", "spare-footer"
    ],
    cssRecipe: "minimalDesignRecipe",
    motionRecipe: "minimalMotion"
  },
  "monochrome-ui": {
    display: "Monochrome UI",
    use: "black-white-gray interfaces, monochrome dashboards, editorial systems, technical products, reduced visual identities",
    mood: "disciplined, stark, systematic, editorial, exact, reduced",
    principles: [
      "Every gray level has a job: background, panel, border, muted text, disabled, hover, selected, overlay.",
      "Use inversion, density, borders, type, and spacing to replace chromatic variety.",
      "Monochrome must feel designed, not like an unstyled wireframe."
    ],
    bans: [
      "No random gray ramp.",
      "No metadata too faint to read.",
      "No missing state design because color is absent."
    ],
    mode: {
      density: "Medium-high. Monochrome supports dense interfaces if hierarchy is exact.",
      motion: "Low-medium. Inversion, underline, slide, and opacity state changes.",
      decoration: "Low. Borders, rows, and type contrast.",
      contrast: "Achromatic only unless semantic color is required for critical alerts.",
      radius: "0px for editorial/system, 10-14px for shadcn-like apps, 999px for pills.",
      type: "Neutral sans, mono for data, optional editorial serif for brand.",
      assets: "Black-white photography, wire diagrams, UI screenshots, table data."
    },
    signatures: [
      "Achromatic State System: hover uses gray lift, active uses inversion, focus uses outline, disabled uses opacity plus cursor.",
      "Gray Job Table: write semantic gray tokens before designing components.",
      "Border Rhythm: hairlines and dividers create organization without color.",
      "Image Treatment: use grayscale, duotone, high contrast crop, or mask; do not introduce random color."
    ],
    archetypes: [
      ["Monochrome Dashboard", "tables, filters, panels, exact gray states", "apps"],
      ["Black/White Editorial", "huge type, grayscale imagery, index rows", "brand sites"],
      ["Reduced Commerce", "product grid with inversion hover", "stores"],
      ["System Utility", "settings, forms, lists with state clarity", "tools"]
    ],
    components: [
      "gray-token-shell", "inversion-button", "monochrome-table", "bordered-filter-rail", "black-white-card", "grayscale-gallery", "mono-status-row", "reduced-footer"
    ],
    cssRecipe: "monochromeUiRecipe",
    motionRecipe: "monochromeStateMotion"
  },
  motion: {
    display: "Motion",
    use: "motion-heavy websites, animated product pages, scroll narratives, cinematic launches, interactive brand experiences",
    mood: "kinetic, cinematic, responsive, tactile, sequenced, alive",
    principles: [
      "Motion is structure: it reveals sequence, transition, feedback, continuity, and story.",
      "Define motion roles before coding and keep nonessential motion out of dense tasks.",
      "Use transform and opacity, respect reduced motion, and avoid layout-triggering animation."
    ],
    bans: [
      "No animating everything.",
      "No motion used to compensate for weak content.",
      "No width/height/top/left animation when transform can do it."
    ],
    mode: {
      density: "Variable. Motion-heavy pages alternate cinematic emptiness with focused interaction.",
      motion: "Very high but choreographed. Scroll, pointer, 3D, reveal, and state transitions.",
      decoration: "Medium. Motion can create graphic identity if the static frame still works.",
      contrast: "Depends on concept, but moving text must remain readable.",
      radius: "Driven by concept; motion components need stable bounds.",
      type: "Large display type with readable body; kinetic type must have fallback.",
      assets: "Video, canvas, 3D objects, animated masks, product frames, shader backgrounds."
    },
    signatures: [
      "Motion Archetypes By Engine: choose GSAP scroll, 3D camera/orbit, shader field, scanline terminal, kinetic type, or physical card stack.",
      "Static Frame Test: every section must still read if animation is disabled.",
      "Reduced Motion Contract: provide a visible but nonmoving equivalent.",
      "Choreography Map: hero, transition, proof, interaction, and footer each get distinct motion roles."
    ],
    archetypes: [
      ["Scroll Narrative", "pinned text, scrubbed media, chapter transitions", "launch storytelling"],
      ["Interactive 3D Stage", "camera, object rotation, pointer parallax", "product and game"],
      ["Kinetic Typography", "words reveal, split, mask, or scrub", "editorial and campaigns"],
      ["Motion Product Demo", "UI states animate as workflow proof", "SaaS and apps"]
    ],
    components: [
      "pinned-scroll-chapter", "scrubbed-gallery", "kinetic-word-reveal", "motion-card-stack", "cursor-parallax-stage", "timeline-control", "animated-product-demo", "reduced-motion-fallback"
    ],
    cssRecipe: "motionRecipe",
    motionRecipe: "cinematicGsapMotion"
  },
  pastel: {
    display: "Pastel",
    use: "soft consumer brands, wellness, friendly SaaS, playful products, approachable commerce, community pages",
    mood: "soft, approachable, friendly, warm, optimistic, gentle",
    principles: [
      "Pastel must be soft but structured: readable text, strong CTAs, and clear layout.",
      "Use color to group paths, reduce anxiety, or create warmth.",
      "Pair gentle palettes with enough contrast and mature typography."
    ],
    bans: [
      "No washed-out low-contrast copy.",
      "No too many candy colors at once.",
      "No childish treatment for serious flows."
    ],
    mode: {
      density: "Medium. Friendly pages need enough content and guidance.",
      motion: "Low-medium. Gentle hover, soft reveal, buoyant product interactions.",
      decoration: "Medium. Soft shapes and color blocks can guide, but keep hierarchy clear.",
      contrast: "Pastel surfaces with dark readable type and strong CTA color.",
      radius: "18-32px for friendly panels, 999px for pills.",
      type: "Rounded sans or warm grotesk, sometimes friendly serif.",
      assets: "Soft product imagery, illustrated objects, lifestyle photos, friendly icons."
    },
    signatures: [
      "Pastel Contrast Discipline: pastel belongs in backgrounds and fills, not long text.",
      "Soft Pathways: each color can represent a step, audience, category, or product family.",
      "Friendly Tactility: rounded modules, soft shadows, and gentle press states create warmth.",
      "Adult Softness: use refined typography and spacing to avoid toy-like outcomes."
    ],
    archetypes: [
      ["Friendly Commerce", "soft product grid, warm CTA, category colors", "consumer stores"],
      ["Wellness Flow", "calm hero, soft sections, guided booking", "wellness/health"],
      ["Approachable SaaS", "gentle UI frames with concrete workflow proof", "friendly apps"],
      ["Community Page", "people, cards, events, soft onboarding", "communities"]
    ],
    components: [
      "pastel-hero-card", "soft-category-pill", "friendly-product-card", "gentle-stepper", "warm-testimonial", "rounded-form", "soft-pricing-card", "community-strip"
    ],
    cssRecipe: "pastelRecipe",
    motionRecipe: "softBuoyancyMotion"
  },
  "playful-design": {
    display: "Playful Design",
    use: "playful brands, education, consumer apps, creative tools, family products, gamified experiences, friendly SaaS",
    mood: "joyful, tactile, friendly, colorful, energetic, approachable",
    principles: [
      "Define one playful metaphor and repeat it across components, copy, motion, and layout.",
      "Playfulness should improve comprehension, progress, or emotional comfort.",
      "Keep serious actions, pricing, safety, and purchasing flows clear."
    ],
    bans: [
      "No childish treatment for adult products.",
      "No random mascot, badge, or confetti without a job.",
      "No playful color that reduces readability."
    ],
    mode: {
      density: "Medium. Use chunky modules and clear steps.",
      motion: "Medium-high. Press, bounce, success, drag, gamified progress.",
      decoration: "High but controlled by one metaphor.",
      contrast: "Bright colors with dark readable text and disciplined neutral support.",
      radius: "24-48px for cards, 999px for pills, tactile shadows.",
      type: "Rounded or bold friendly sans; display type can be large.",
      assets: "Illustrations, product objects, stickers, icons, progress visuals, playful photos."
    },
    signatures: [
      "Playfulness Control Knobs: color intensity, radius, shadow depth, motion bounce, character presence.",
      "Tactile Button System: press states with bottom shadow, slight translate, and clear label.",
      "Gamified Progress: steps, streaks, levels, or rewards must map to real user progress.",
      "Mature Clarity: playful surfaces still need normal forms, readable prices, and accessible focus."
    ],
    archetypes: [
      ["Game-Like Product", "levels, cards, progress, animated actions", "education and apps"],
      ["Joyful Commerce", "chunky cards, playful filters, object-led hero", "consumer stores"],
      ["Creative Tool", "canvas, controls, playful inspector", "creative apps"],
      ["Family/Community", "warm people imagery, friendly onboarding", "family/community products"]
    ],
    components: [
      "tactile-button", "chunky-product-card", "gamified-progress", "playful-filter-chip", "sticker-caption", "reward-toast", "rounded-onboarding", "joyful-footer"
    ],
    cssRecipe: "playfulRecipe",
    motionRecipe: "playfulPressMotion"
  },
  "serif-display": {
    display: "Serif Display",
    use: "serif-led brand sites, luxury, editorial pages, cultural projects, typographic portfolios, premium commerce",
    mood: "editorial, elegant, literary, premium, expressive, composed",
    principles: [
      "Serif display type must act as voice and structure, not garnish.",
      "Pair expressive headings with highly readable body text and controlled line lengths.",
      "Use serif drama to create hierarchy while protecting navigation and conversion."
    ],
    bans: [
      "No ornate heading that collapses on mobile.",
      "No too many typefaces.",
      "No typographic drama that hides actions."
    ],
    mode: {
      density: "Low-medium to medium. Elegant rhythm with strong text hierarchy.",
      motion: "Low-medium. Slow reveals, line masks, image fades, refined hover.",
      decoration: "Low. Serif forms, rules, and imagery carry identity.",
      contrast: "Warm or high contrast editorial palette.",
      radius: "0-8px usually, 24px+ only for soft lifestyle luxury.",
      type: "High-contrast serif display plus modern sans or readable serif body.",
      assets: "Editorial photography, product stills, covers, cultural images, luxury materials."
    },
    signatures: [
      "Serif As Architecture: H1, pullquotes, section titles, and captions define the grid.",
      "Line Discipline: display type uses tight leading, body copy uses comfortable measure.",
      "Luxury Editorial Pace: large image chapters alternate with quiet copy and proof.",
      "Readable Elegance: never use fragile hairline text on low-contrast backgrounds."
    ],
    archetypes: [
      ["Literary Hero", "huge serif headline and quiet supporting copy", "culture and portfolios"],
      ["Elegant Commerce", "serif product storytelling and gallery cards", "premium commerce"],
      ["Cultural Magazine", "pullquotes, essays, image chapters", "editorial sites"],
      ["Boutique Brand", "warm type, restrained palette, concierge CTA", "luxury services"]
    ],
    components: [
      "serif-hero", "pullquote-card", "elegant-product-grid", "chapter-image", "type-led-testimonial", "concierge-cta", "editorial-nav", "serif-footer"
    ],
    cssRecipe: "serifDisplayRecipe",
    motionRecipe: "serifRevealMotion"
  },
  "soft-gradients": {
    display: "Soft Gradients",
    use: "soft gradient websites, AI tools, wellness, calm SaaS, atmospheric brand pages, polished modern interfaces",
    mood: "ambient, smooth, calm, luminous, soft, modern",
    principles: [
      "Gradients provide atmosphere, depth, or section identity; they do not replace product proof.",
      "Text lives on protected surfaces or calm gradient zones with strong contrast.",
      "Gradient direction, stops, opacity, and layering must be intentional."
    ],
    bans: [
      "No long text directly on busy gradients.",
      "No generic purple-blue blob identity.",
      "No gradient fog masking weak hierarchy."
    ],
    mode: {
      density: "Medium. Calm atmosphere plus concrete content.",
      motion: "Low-medium. Slow gradient drift, soft reveal, ambient transitions.",
      decoration: "Medium. Gradients are structural atmosphere.",
      contrast: "Soft luminous backgrounds with protected text contrast.",
      radius: "16-32px for panels; 999px for pills.",
      type: "Clean sans or warm grotesk with spacious rhythm.",
      assets: "Calm product UI, ambient imagery, wellness scenes, AI visualizations."
    },
    signatures: [
      "Gradient Role Map: background atmosphere, section divider, product glow, or CTA emphasis. Choose roles before painting.",
      "Protected Content Slabs: body text and controls sit on solid/blurred surfaces with predictable contrast.",
      "Ambient Depth: use multiple large gradients with low opacity and stable text zones.",
      "No Orb Dependency: avoid isolated blob decoration; make the gradient relate to layout or product."
    ],
    archetypes: [
      ["Ambient SaaS", "soft hero, UI proof, gradient depth", "AI and productivity"],
      ["Wellness Atmosphere", "calm sections, soft images, booking flow", "wellness"],
      ["Gradient Product Story", "chapter bands with subtle color shifts", "launch pages"],
      ["Calm App Surface", "light panels over soft atmospheric field", "apps"]
    ],
    components: [
      "ambient-hero", "gradient-section-band", "protected-content-panel", "soft-glow-button", "calm-ui-frame", "gradient-step-card", "luminous-testimonial", "soft-footer"
    ],
    cssRecipe: "softGradientsRecipe",
    motionRecipe: "ambientGradientMotion"
  },
  "technical-sans": {
    display: "Technical Sans",
    use: "developer tools, AI products, technical SaaS, documentation, infrastructure, precise product interfaces",
    mood: "technical, crisp, rational, precise, engineered, legible",
    principles: [
      "Typography, alignment, density, and real technical evidence communicate trust.",
      "Show code, diagrams, CLI, docs, workflow, or data instead of generic tech gradients.",
      "Mono is a tool for code/data, not the whole brand unless the product demands it."
    ],
    bans: [
      "No generic tech gradient in place of evidence.",
      "No all-monospace page without hierarchy.",
      "No fake terminal details that do not support comprehension."
    ],
    mode: {
      density: "Medium-high. Technical products benefit from inspectable detail.",
      motion: "Low-medium. Command, deploy, tab, code reveal, and graph transitions.",
      decoration: "Low. Lines, syntax, diagrams, and alignment do the work.",
      contrast: "Crisp light or dark with clear code/data zones.",
      radius: "6-12px for panels, 999px for pills.",
      type: "Technical sans plus mono code; avoid overly friendly forms.",
      assets: "Code blocks, API docs, terminal windows, diagrams, product screenshots."
    },
    signatures: [
      "Evidence Before Abstraction: code sample, API response, dashboard, or architecture diagram appears early.",
      "Technical Type Ladder: display sans, UI sans, mono labels, code blocks all have distinct roles.",
      "Precision Grid: alignment and spacing should feel engineered, not decorative.",
      "Syntax As Color: syntax highlighting can be the accent system when used sparingly."
    ],
    archetypes: [
      ["Developer Landing", "CLI/code hero, docs preview, integrations", "dev tools"],
      ["AI Technical Product", "prompt/input, output, workflow proof", "AI products"],
      ["Infra Dashboard", "metrics, logs, deployment controls", "infrastructure"],
      ["Docs-App Hybrid", "navigation, search, examples, live preview", "documentation"]
    ],
    components: [
      "code-hero", "cli-command-bar", "docs-sidebar", "api-response-card", "architecture-diagram", "deploy-timeline", "technical-pricing", "integration-table"
    ],
    cssRecipe: "technicalSansRecipe",
    motionRecipe: "technicalStateMotion"
  },
  "technical-ui": {
    display: "Technical UI",
    use: "technical interfaces, product dashboards, AI tools, developer consoles, workflow apps, dense control surfaces",
    mood: "precise, operational, structured, intelligent, focused, trustworthy",
    principles: [
      "Prioritize workflow ergonomics, state clarity, filters, controls, and information density.",
      "Technical detail should support decisions, not decorate.",
      "Repeated controls, tables, panels, and command surfaces must be consistent."
    ],
    bans: [
      "No fake complexity with meaningless metrics.",
      "No hiding primary workflow behind decorative panels.",
      "No low-contrast microcopy in dense areas."
    ],
    mode: {
      density: "High for apps, medium-high for product pages.",
      motion: "Low-medium. State changes, filter transitions, command execution, panel expand/collapse.",
      decoration: "Very low. Functional chrome is the design.",
      contrast: "Precise contrast tuned for repeated work.",
      radius: "6-10px for dense controls, 12px for major panels.",
      type: "Legible sans plus mono for values, logs, code, and coordinates.",
      assets: "Tables, charts, logs, controls, workflow diagrams, product screens."
    },
    signatures: [
      "Technical Mode Picker: decide if the UI is workstation, lab, CRM/toolkit, command console, or monitoring surface.",
      "Control Proximity: filters and commands live near the content they affect.",
      "State Completeness: loading, syncing, stale, failed, empty, selected, and read-only states must be visible.",
      "Information Density With Breathing: dense panels need exact spacing, separators, and type contrast."
    ],
    archetypes: [
      ["Workstation", "sidebar, toolbar, inspector, main canvas/table", "workflow apps"],
      ["Monitoring Console", "metrics, incidents, logs, alerts", "operations"],
      ["AI Control Surface", "prompt/input, context, output, evals", "AI tools"],
      ["CRM Toolkit", "records, filters, pipeline, activity", "business tools"]
    ],
    components: [
      "workstation-shell", "dense-data-table", "command-palette", "filter-builder", "log-stream", "inspector-panel", "alert-timeline", "stateful-empty-view"
    ],
    cssRecipe: "technicalUiRecipe",
    motionRecipe: "technicalUiMotion"
  },
  utilitarian: {
    display: "Utilitarian",
    use: "admin tools, internal systems, data entry, operational dashboards, documentation utilities, productivity workflows",
    mood: "plain, efficient, robust, direct, legible, work-focused",
    principles: [
      "Optimize for task completion, repeated action, scan speed, and information retrieval.",
      "Controls stay visible and close to the content they affect.",
      "Semantic states and plain language matter more than visual flourish."
    ],
    bans: [
      "No hero theatrics for a work surface.",
      "No hidden controls to make the page look clean.",
      "No decorative illustrations where data or controls are needed."
    ],
    mode: {
      density: "High. Utilitarian interfaces should support repeated use.",
      motion: "Very low. Only state confirmation and panel mechanics.",
      decoration: "None or near-none.",
      contrast: "Accessible, work-focused, predictable.",
      radius: "4-8px for controls, 0px acceptable for tables.",
      type: "Readable system or enterprise sans; mono for IDs and logs.",
      assets: "Tables, forms, filters, settings, reports, documentation blocks."
    },
    signatures: [
      "Task-First Layout: start with the primary action surface, not marketing.",
      "Visible Controls: filters, bulk actions, save/cancel, search, and status are never hidden behind aesthetic minimalism.",
      "Operational State Language: use exact words for draft, pending, failed, synced, archived, locked, overdue.",
      "Dense But Calm: small spacing is fine when alignment, grouping, and contrast are rigorous."
    ],
    archetypes: [
      ["Admin Table", "filters, bulk actions, row states, detail drawer", "internal systems"],
      ["Data Entry Flow", "forms, validation, review, submit", "operations"],
      ["Settings Console", "sections, toggles, permissions, audit trail", "admin tools"],
      ["Documentation Utility", "search, navigation, content, examples", "docs tools"]
    ],
    components: [
      "admin-table", "bulk-action-toolbar", "detail-drawer", "validation-form", "settings-section", "audit-log", "search-filter-bar", "plain-footer"
    ],
    cssRecipe: "utilitarianRecipe",
    motionRecipe: "utilitarianStateMotion"
  },
  "vibrant-accents": {
    display: "Vibrant Accents",
    use: "brands needing restrained layouts with vivid highlights, SaaS, portfolios, consumer pages, launch sites",
    mood: "clean, energetic, vivid, modern, selective, confident",
    principles: [
      "Keep base surfaces restrained so vivid accents stay meaningful.",
      "Assign each accent role before use: action, category, status, emphasis, or brand motif.",
      "Bright color should create energy without destroying hierarchy."
    ],
    bans: [
      "No different color theme in every section.",
      "No vivid accents as body text.",
      "No accent variety that makes states ambiguous."
    ],
    mode: {
      density: "Medium. Clear neutral layout with vivid focal points.",
      motion: "Medium. Accent sweep, hover fill, category transition, chart highlight.",
      decoration: "Medium but role-based.",
      contrast: "Neutral base with high-saturation accents.",
      radius: "8-20px depending on product; 999px for chips.",
      type: "Modern sans with confident display weights.",
      assets: "Product screens, brand visuals, charts, portfolio images, color-coded categories."
    },
    signatures: [
      "Accent Budget: one primary action color, one secondary category color, one semantic alert/success system.",
      "Neutral Field: white, black, gray, or muted substrate lets accent color carry hierarchy.",
      "Vivid Interaction: hover/focus can introduce accent fills, but resting state stays disciplined.",
      "Category Encoding: colors can group marketplace/product categories if the mapping is consistent."
    ],
    archetypes: [
      ["Neutral Launch With Punch", "clean hero, one vivid CTA, highlighted proof", "SaaS/consumer"],
      ["Color-Coded Marketplace", "category accents and filter chips", "marketplaces"],
      ["Portfolio Highlights", "neutral grid with vivid project identifiers", "portfolios"],
      ["Vivid Data Product", "charts and states use accents precisely", "tools"]
    ],
    components: [
      "accent-hero-cta", "color-coded-filter", "vivid-stat-card", "neutral-product-grid", "accent-hover-card", "highlight-marquee", "category-tab-system", "vibrant-footer"
    ],
    cssRecipe: "vibrantAccentsRecipe",
    motionRecipe: "vividAccentMotion"
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
    .replace(/\uFEFF/g, "")
    .replaceAll("Ã¢â‚¬â€", "-")
    .replaceAll("Ã¢Â€Â”", "-")
    .replaceAll("Ã¢Â€Â“", "-")
    .replaceAll("Ã¢Â€Â™", "'")
    .replaceAll("Ã¢Â€Â˜", "'")
    .replaceAll("Ã¢Â€Âœ", "\"")
    .replaceAll("Ã¢Â€Â", "\"")
    .replaceAll("Ã¢Â€Â¢", "-")
    .replaceAll("Ã‚", "")
    .replaceAll("Â®", "(R)")
    .replaceAll("Â©", "(C)")
    .replaceAll("â„¢", "(TM)")
    .replaceAll("â€”", "-")
    .replaceAll("â€“", "-")
    .replaceAll("â€™", "'")
    .replaceAll("â€˜", "'")
    .replaceAll("â€œ", "\"")
    .replaceAll("â€", "\"")
    .replaceAll("â€¢", "-");
}

function asciiText(value) {
  return cleanText(value)
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\x09\x0A\x0D\x20-\x7E]/g, "-");
}

function titleFromSlug(slug) {
  return slug
    .split("-")
    .map((part) => part[0].toUpperCase() + part.slice(1))
    .join(" ");
}

function sourceList(slug) {
  const rawDir = path.join(sourceRawDir, slug);
  if (!fs.existsSync(rawDir)) return [];
  return fs
    .readdirSync(rawDir)
    .filter((name) => name.endsWith(".md"))
    .sort()
    .map((name) => {
      const raw = cleanText(fs.readFileSync(path.join(rawDir, name), "utf8"));
      const title = raw.match(/^#\s+(.+)$/m)?.[1]?.trim() || name.replace(/\.md$/, "");
      const site = raw.match(/^Site:\s+(.+)$/m)?.[1]?.trim() || "";
      const northStar = raw.match(/^North star:\s+(.+)$/mi)?.[1]?.trim() || "";
      const theme = raw.match(/^Theme:\s+(.+)$/mi)?.[1]?.trim() || "";
      return { name, title, site, northStar, theme };
    });
}

function bullet(items) {
  return items.map((item) => `- ${item}`).join("\n");
}

function ordered(items) {
  return items.map((item, index) => `${index + 1}. ${item}`).join("\n");
}

function table(rows, headers) {
  const head = `| ${headers.join(" | ")} |`;
  const sep = `| ${headers.map(() => "---").join(" | ")} |`;
  return [head, sep, ...rows.map((row) => `| ${row.map((cell) => String(cell).replace(/\|/g, "/")).join(" | ")} |`)].join("\n");
}

function readRawBundle(slug) {
  const rawDir = path.join(sourceRawDir, slug);
  if (!fs.existsSync(rawDir)) return "";
  return fs
    .readdirSync(rawDir)
    .filter((name) => name.endsWith(".md"))
    .sort()
    .map((name) => fs.readFileSync(path.join(rawDir, name), "utf8"))
    .join("\n\n");
}

function topMatches(text, regex, limit = 12) {
  const hits = new Map();
  for (const match of text.matchAll(regex)) {
    const value = match[0].trim().replace(/\s+/g, " ");
    if (value.length > 120) continue;
    hits.set(value, (hits.get(value) || 0) + 1);
  }
  return [...hits.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, limit)
    .map(([value, count]) => ({ value, count }));
}

function declarationMatches(text, propertyRegex, limit = 10) {
  const regex = new RegExp(`(?:${propertyRegex})\\s*:\\s*[^;{}\\n|]+`, "gi");
  return topMatches(text, regex, limit);
}

function extractTechnicalSignals(text) {
  return {
    colors: topMatches(text, /#[0-9a-fA-F]{3,8}\b/g, 12),
    px: topMatches(text, /\b\d+(?:\.\d+)?px\b/g, 14),
    radius: declarationMatches(text, "border-radius|--[a-z0-9-]*radius[a-z0-9-]*", 10),
    typography: declarationMatches(text, "font-family|font-size|font-weight|letter-spacing|line-height|text-transform|font-variation-settings", 14),
    surface: declarationMatches(text, "background|box-shadow|border|backdrop-filter|filter|mix-blend-mode|clip-path|opacity", 14),
    motion: topMatches(text, /@keyframes\s+[A-Za-z0-9_-]+|animation\s*:\s*[^;{}\n|]+|transition\s*:\s*[^;{}\n|]+|transform\s*:\s*[^;{}\n|]+|ScrollTrigger|scrollTrigger\s*:\s*\{|gsap\.[A-Za-z]+|duration\s*:\s*[^,{}\n|]+|ease\s*:\s*["'][^"']+["']/g, 14)
  };
}

function valueList(items, fallback = "No strong repeated signal found in the raw bundle.") {
  if (!items.length) return fallback;
  return items.map((item) => `\`${item.value}\` (${item.count}x)`).join(", ");
}

function tokenVarName(prefix, index) {
  return `--source-${prefix}-${index + 1}`;
}

function rawTechnicalSignalsSection(profile, signals) {
  const colors = signals.colors.map((item) => item.value);
  const spaces = signals.px.map((item) => item.value);
  const safeColors = colors.length ? colors : ["#111111", "#ffffff", "#e5e5e5"];
  const safeSpaces = spaces.length ? spaces : ["4px", "8px", "16px", "24px"];
  const tokenLines = [
    ...safeColors.slice(0, 8).map((value, index) => `  ${tokenVarName("color", index)}: ${value};`),
    ...safeSpaces.slice(0, 8).map((value, index) => `  ${tokenVarName("space", index)}: ${value};`),
    `  --source-motion-fast: 140ms;`,
    `  --source-motion-medium: 420ms;`,
    `  --source-ease-out: cubic-bezier(0.16, 1, 0.30, 1);`
  ].join("\n");

  return `
## Raw-Derived Technical Signals

These signals are distilled from the large Refero database bundled in \`references/\`. They prevent the skill from forgetting the concrete values that made the references specific. Use them as a vocabulary, not as a command to use every value.

| Signal | Raw values to keep in mind |
| --- | --- |
| Color tokens | ${valueList(signals.colors)} |
| Pixel/rhythm values | ${valueList(signals.px)} |
| Radius declarations | ${valueList(signals.radius)} |
| Typography declarations | ${valueList(signals.typography)} |
| Surface/effect declarations | ${valueList(signals.surface)} |
| Motion declarations | ${valueList(signals.motion)} |

### Raw-Derived Token Starter

\`\`\`css
:root {
${tokenLines}
}
\`\`\`

How to use this section:

- Start from the repeated raw values, then narrow them to a small project-specific token set.
- If a raw value appears often but fights the user brand, translate its role rather than copying the exact value.
- Preserve the style's distinctive geometry, color budget, typography pressure, and motion behavior before inventing new decoration.
- When building a substantial page, search \`references/refero-style-database.md\` for the strongest raw signal above and pull the adjacent component or animation rule.`;
}

function getRecipe(profile) {
  const recipes = {
    cleanSaasRecipe: `
\`\`\`css
:root {
  --bg: #f7f8fb;
  --surface: #ffffff;
  --surface-raised: #fefefe;
  --text: #10131a;
  --muted: #6b7280;
  --line: #e5e7eb;
  --accent: #315cf6;
  --accent-ink: #ffffff;
  --success: #16a34a;
  --radius-panel: 16px;
  --radius-control: 10px;
}
.app-shell-hero {
  display: grid;
  grid-template-columns: minmax(0, .86fr) minmax(520px, 1.14fr);
  gap: clamp(32px, 5vw, 76px);
  align-items: center;
  max-width: 1280px;
  margin-inline: auto;
  padding: clamp(96px, 12vw, 164px) 24px 72px;
}
.product-frame {
  border: 1px solid var(--line);
  border-radius: var(--radius-panel);
  background: linear-gradient(#fff, #f9fafb);
  box-shadow: 0 24px 80px rgba(15, 23, 42, .10);
  overflow: hidden;
}
.workflow-row {
  display: grid;
  grid-template-columns: 40px 1fr auto;
  gap: 14px;
  align-items: center;
  padding: 14px 16px;
  border-top: 1px solid var(--line);
}
\`\`\``,
    cyberNeonRecipe: `
\`\`\`css
:root {
  --bg: #05060a;
  --panel: #0d1018;
  --panel-2: #111827;
  --text: #f5f7ff;
  --muted: #8e9ab8;
  --line: rgba(157, 176, 255, .18);
  --neon: #cdfb52;
  --live: #34d59a;
  --danger: #ff3b5c;
}
.cyber-stage {
  position: relative;
  isolation: isolate;
  min-height: 100svh;
  background:
    radial-gradient(circle at 68% 18%, rgba(205,251,82,.18), transparent 28rem),
    linear-gradient(180deg, #05060a 0%, #090c14 100%);
  overflow: hidden;
}
.cyber-stage::after {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: repeating-linear-gradient(0deg, rgba(255,255,255,.04) 0 1px, transparent 1px 5px);
  mix-blend-mode: screen;
  opacity: .24;
}
.neon-cta {
  color: #05060a;
  background: var(--neon);
  border-radius: 999px;
  box-shadow: 0 0 22px rgba(205,251,82,.35), inset 0 -2px 0 rgba(0,0,0,.28);
}
\`\`\``,
    darkUiRecipe: `
\`\`\`css
:root {
  --bg: #090b10;
  --surface-1: #0f121a;
  --surface-2: #151a24;
  --surface-3: #1c2430;
  --line: rgba(255,255,255,.09);
  --text: #f4f7fb;
  --muted: #99a3b3;
  --accent: #70a7ff;
}
.dark-workspace {
  min-height: 100svh;
  background: radial-gradient(circle at 72% 0%, rgba(112,167,255,.16), transparent 32rem), var(--bg);
  color: var(--text);
}
.surface-ladder {
  background: var(--surface-1);
  border: 1px solid var(--line);
  border-radius: 14px;
}
.surface-ladder[data-active="true"] {
  background: var(--surface-2);
  border-color: rgba(112,167,255,.44);
  box-shadow: inset 0 1px 0 rgba(255,255,255,.06);
}
\`\`\``,
    editorialMinimalRecipe: `
\`\`\`css
:root {
  --paper: #f5f1ea;
  --ink: #171512;
  --muted: #706a61;
  --rule: rgba(23,21,18,.18);
}
.editorial-page {
  background: var(--paper);
  color: var(--ink);
  font-feature-settings: "kern", "liga", "ss01";
}
.authored-grid {
  display: grid;
  grid-template-columns: minmax(20px, 1fr) minmax(0, 740px) minmax(120px, 280px) minmax(20px, 1fr);
  column-gap: clamp(20px, 3vw, 44px);
}
.captioned-media {
  grid-column: 2 / 4;
  display: grid;
  grid-template-columns: 1fr 180px;
  gap: 18px;
  border-top: 1px solid var(--rule);
  padding-top: 18px;
}
\`\`\``,
    editorialTypeRecipe: `
\`\`\`css
:root {
  --paper: #f7f2e8;
  --ink: #11100e;
  --accent: #c83e2c;
  --rule: rgba(17,16,14,.24);
}
.poster-title {
  font-family: "Fraunces", "Canela", "Georgia", serif;
  font-size: clamp(4.4rem, 15vw, 15rem);
  line-height: .82;
  letter-spacing: -0.045em;
  text-wrap: balance;
}
.magazine-grid {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 1px;
  background: var(--rule);
}
.magazine-grid > * { background: var(--paper); padding: clamp(18px, 3vw, 42px); }
\`\`\``,
    experimentalTypeRecipe: `
\`\`\`css
:root {
  --ink: #080808;
  --paper: #f3f0e8;
  --acid: #ccff00;
}
.variable-type-hero {
  font-family: "Roboto Flex", "Archivo Black", system-ui, sans-serif;
  font-size: clamp(4rem, 18vw, 18rem);
  line-height: .78;
  letter-spacing: -0.07em;
  font-variation-settings: "wdth" 128, "wght" 900;
  overflow-wrap: anywhere;
}
.type-slice {
  clip-path: inset(0 0 0 0);
  transform: skewX(-7deg);
  background: var(--acid);
  color: var(--ink);
}
\`\`\``,
    expressiveBrandRecipe: `
\`\`\`css
:root {
  --brand-bg: #fff7ea;
  --brand-ink: #17120f;
  --brand-1: #ff5a2f;
  --brand-2: #2f7dff;
  --brand-3: #ffe45c;
  --line: rgba(23,18,15,.18);
}
.brand-motif-card {
  border: 2px solid var(--brand-ink);
  border-radius: 22px;
  background: var(--brand-bg);
  box-shadow: 8px 8px 0 var(--brand-ink);
  transform: rotate(var(--tilt, -1deg));
}
.brand-motif-card:nth-child(2n) { --tilt: 1deg; background: var(--brand-3); }
\`\`\``,
    geometricModernRecipe: `
\`\`\`css
:root {
  --bg: #f4f4f1;
  --ink: #111;
  --shape: #d8ff3e;
  --line: rgba(17,17,17,.18);
}
.modular-grid {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  grid-auto-rows: minmax(72px, auto);
  gap: 12px;
}
.shape-mask {
  aspect-ratio: 1 / 1;
  clip-path: polygon(0 0, 100% 0, 100% 72%, 72% 100%, 0 100%);
  background: var(--shape);
}
\`\`\``,
    glossyModernRecipe: `
\`\`\`css
:root {
  --bg: #eef4ff;
  --glass: rgba(255,255,255,.62);
  --line: rgba(255,255,255,.72);
  --ink: #101828;
  --accent: #6d5dfc;
}
.glass-panel {
  background: linear-gradient(135deg, rgba(255,255,255,.74), rgba(255,255,255,.42));
  border: 1px solid var(--line);
  border-radius: 28px;
  box-shadow: 0 28px 80px rgba(55, 74, 120, .18), inset 0 1px 0 rgba(255,255,255,.88);
  backdrop-filter: blur(18px);
}
.specular-edge::before {
  content: "";
  position: absolute;
  inset: 1px;
  border-radius: inherit;
  background: linear-gradient(120deg, rgba(255,255,255,.72), transparent 34%);
  pointer-events: none;
}
\`\`\``,
    highContrastRecipe: `
\`\`\`css
:root {
  --black: #050505;
  --white: #f7f7f2;
  --accent: #ff3b30;
  --line: currentColor;
}
.contrast-section {
  background: var(--white);
  color: var(--black);
  border-block: 2px solid currentColor;
}
.contrast-section[data-invert="true"] {
  background: var(--black);
  color: var(--white);
}
.inversion-button {
  border: 1px solid currentColor;
  background: transparent;
  color: currentColor;
}
.inversion-button:hover,
.inversion-button:focus-visible {
  background: currentColor;
  color: var(--white);
}
\`\`\``,
    highEndRecipe: `
\`\`\`css
:root {
  --paper: #f3efe7;
  --ink: #11100d;
  --charcoal: #090908;
  --bone: #e6ded0;
  --line: rgba(17,16,13,.16);
  --accent: #8c1d18;
}
.gallery-hero {
  min-height: 92svh;
  display: grid;
  grid-template-columns: minmax(0, .82fr) minmax(520px, 1.18fr);
  gap: clamp(36px, 6vw, 96px);
  align-items: end;
  padding: clamp(88px, 10vw, 156px) 24px 48px;
}
.luxury-object-frame {
  aspect-ratio: 4 / 5;
  overflow: hidden;
  border-radius: var(--object-radius, 4px);
  background: var(--charcoal);
}
.quiet-cta {
  border: 1px solid currentColor;
  border-radius: var(--cta-radius, 999px);
  padding: 13px 20px;
  letter-spacing: .02em;
}
\`\`\``,
    lightUiRecipe: `
\`\`\`css
:root {
  --bg: #fbfcff;
  --surface: #fff;
  --surface-2: #f4f7fb;
  --text: #141923;
  --muted: #647084;
  --line: #dfe5ee;
  --accent: #2563eb;
}
.light-shell {
  background: var(--bg);
  color: var(--text);
}
.light-panel {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 14px;
}
.light-control:focus-visible {
  outline: 3px solid color-mix(in srgb, var(--accent), transparent 72%);
  outline-offset: 2px;
}
\`\`\``,
    minimalDesignRecipe: `
\`\`\`css
:root {
  --bg: #fbfaf7;
  --ink: #141311;
  --muted: #6f6a61;
  --line: rgba(20,19,17,.16);
}
.minimal-page {
  background: var(--bg);
  color: var(--ink);
}
.single-object-hero {
  min-height: 86svh;
  display: grid;
  grid-template-columns: minmax(0, .7fr) minmax(360px, .9fr);
  gap: clamp(40px, 8vw, 112px);
  align-items: center;
}
.minimal-rule { border-top: 1px solid var(--line); }
\`\`\``,
    monochromeUiRecipe: `
\`\`\`css
:root {
  --gray-0: #ffffff;
  --gray-50: #f6f6f6;
  --gray-100: #e8e8e8;
  --gray-300: #b8b8b8;
  --gray-600: #666;
  --gray-900: #111;
  --gray-950: #050505;
}
.mono-button {
  border: 1px solid var(--gray-900);
  background: var(--gray-0);
  color: var(--gray-900);
}
.mono-button:hover,
.mono-button:focus-visible,
.mono-button[aria-pressed="true"] {
  background: var(--gray-900);
  color: var(--gray-0);
}
.mono-row { border-bottom: 1px solid var(--gray-100); }
\`\`\``,
    motionRecipe: `
\`\`\`css
.motion-stage {
  min-height: 100svh;
  overflow-x: clip;
  perspective: 1200px;
}
.motion-card {
  will-change: transform, opacity;
  transform-origin: center center;
}
@media (prefers-reduced-motion: reduce) {
  .motion-card,
  [data-motion] {
    animation: none !important;
    transform: none !important;
    transition-duration: .01ms !important;
  }
}
\`\`\``,
    pastelRecipe: `
\`\`\`css
:root {
  --cream: #fff8eb;
  --ink: #202024;
  --lavender: #ddd2ff;
  --mint: #c9f4df;
  --peach: #ffd6bd;
  --sky: #cfe8ff;
  --cta: #2e2bff;
}
.pastel-card {
  background: var(--card-bg, var(--mint));
  color: var(--ink);
  border: 1px solid rgba(32,32,36,.12);
  border-radius: 28px;
  box-shadow: 0 18px 44px rgba(60, 49, 95, .10);
}
.pastel-card:nth-child(2n) { --card-bg: var(--lavender); }
.pastel-card:nth-child(3n) { --card-bg: var(--peach); }
\`\`\``,
    playfulRecipe: `
\`\`\`css
:root {
  --ink: #171717;
  --paper: #fff9e9;
  --pop: #ff5a36;
  --sun: #ffdc3d;
  --blue: #42a5ff;
}
.tactile-button {
  border: 2px solid var(--ink);
  border-radius: 999px;
  background: var(--sun);
  color: var(--ink);
  box-shadow: 0 7px 0 var(--ink);
  transform: translateY(0);
  transition: transform .16s ease, box-shadow .16s ease;
}
.tactile-button:active {
  transform: translateY(6px);
  box-shadow: 0 1px 0 var(--ink);
}
\`\`\``,
    serifDisplayRecipe: `
\`\`\`css
:root {
  --paper: #f4eadc;
  --ink: #17100c;
  --muted: #76695d;
  --line: rgba(23,16,12,.18);
}
.serif-hero-title {
  font-family: "Canela", "Cormorant Garamond", Georgia, serif;
  font-size: clamp(4rem, 12vw, 12rem);
  line-height: .88;
  letter-spacing: -0.045em;
}
.serif-pullquote {
  border-block: 1px solid var(--line);
  padding-block: clamp(32px, 6vw, 80px);
  font-size: clamp(2rem, 6vw, 6rem);
  line-height: .95;
}
\`\`\``,
    softGradientsRecipe: `
\`\`\`css
:root {
  --bg: #fbfbff;
  --ink: #141827;
  --panel: rgba(255,255,255,.82);
  --line: rgba(20,24,39,.10);
}
.ambient-field {
  background:
    radial-gradient(circle at 18% 12%, rgba(255, 177, 210, .38), transparent 28rem),
    radial-gradient(circle at 80% 18%, rgba(146, 190, 255, .42), transparent 30rem),
    linear-gradient(180deg, #fbfbff, #f8f3ff);
}
.protected-panel {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 26px;
  backdrop-filter: blur(14px);
}
\`\`\``,
    technicalSansRecipe: `
\`\`\`css
:root {
  --bg: #f8fafc;
  --ink: #111827;
  --mono: #0f172a;
  --line: #d7dde8;
  --code-bg: #0b1020;
  --code-ink: #dbeafe;
  --accent: #2563eb;
}
.code-hero {
  display: grid;
  grid-template-columns: minmax(0, .86fr) minmax(480px, 1.1fr);
  gap: clamp(28px, 5vw, 80px);
  align-items: center;
}
.code-window {
  background: var(--code-bg);
  color: var(--code-ink);
  border-radius: 12px;
  font-family: "JetBrains Mono", ui-monospace, monospace;
  overflow: hidden;
}
\`\`\``,
    technicalUiRecipe: `
\`\`\`css
:root {
  --bg: #f4f6f9;
  --panel: #ffffff;
  --line: #d8dee8;
  --ink: #111827;
  --muted: #697386;
  --accent: #1d4ed8;
  --danger: #b91c1c;
  --success: #15803d;
}
.workstation-shell {
  display: grid;
  grid-template-columns: 248px minmax(0, 1fr) 320px;
  min-height: 100svh;
  background: var(--bg);
}
.dense-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
}
.dense-table th,
.dense-table td {
  border-bottom: 1px solid var(--line);
  padding: 10px 12px;
  text-align: left;
}
\`\`\``,
    utilitarianRecipe: `
\`\`\`css
:root {
  --bg: #f5f5f5;
  --panel: #fff;
  --ink: #111;
  --muted: #555;
  --line: #d0d0d0;
  --focus: #005fcc;
}
.admin-shell {
  display: grid;
  grid-template-columns: 220px minmax(0, 1fr);
  min-height: 100svh;
  background: var(--bg);
  color: var(--ink);
}
.bulk-action-toolbar {
  position: sticky;
  top: 0;
  z-index: 5;
  display: flex;
  gap: 8px;
  align-items: center;
  border-bottom: 1px solid var(--line);
  background: var(--panel);
  padding: 10px 12px;
}
\`\`\``,
    vibrantAccentsRecipe: `
\`\`\`css
:root {
  --bg: #fbfbfb;
  --ink: #111;
  --line: #e4e4e4;
  --accent: #ff4d00;
  --accent-2: #6c5ce7;
  --success: #12b76a;
}
.accent-card {
  border: 1px solid var(--line);
  border-radius: 18px;
  background: #fff;
}
.accent-card:hover {
  border-color: color-mix(in srgb, var(--accent), #fff 30%);
  box-shadow: inset 0 -4px 0 var(--accent);
}
.category-chip[data-category="primary"] { background: var(--accent); color: #fff; }
\`\`\``
  };
  return recipes[profile.cssRecipe] || recipes.cleanSaasRecipe;
}

function getMotion(profile) {
  const common = `
\`\`\`tsx
// React + GSAP pattern. Use only when the project already has GSAP or the task asks for rich motion.
useGSAP(() => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
    gsap.fromTo(el, { y: 28, opacity: 0 }, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 82%", once: true }
    });
  });
}, []);
\`\`\``;
  const recipes = {
    productWalkthroughMotion: [
      "Use staggered reveal for workflow rows, with selected row activation after the shell appears.",
      "For tabbed product demos, animate opacity and `x` only; keep shell dimensions stable.",
      "Metrics can count up only when numbers are meaningful and readable after animation.",
      common
    ],
    neonPulseMotion: [
      "Use glow pulse only on active CTA, live status, or hero energy core.",
      "Use scanline drift at very low opacity; never animate readable text with constant flicker.",
      "Pointer glow can follow cards if it is clipped inside the panel and does not affect layout.",
      common
    ],
    panelDepthMotion: [
      "Animate panel depth with opacity, translateY, and subtle scale; avoid distracting loops.",
      "Side panels can slide 16-24px with background dimming for focus.",
      "Use fast state transitions for filters and command inputs so the UI feels responsive.",
      common
    ],
    quietEditorialMotion: [
      "Use slow image reveals, text fade, caption slide, and page transitions.",
      "Motion should feel like turning a page, not a product demo.",
      "Avoid looped animation unless it is a subtle media/caption behavior.",
      common
    ],
    textRevealMotion: [
      "Use word or line reveals for display headings; body text should appear normally.",
      "Pinned indexes can track scroll progress if they improve orientation.",
      "Use image mask transitions between editorial chapters.",
      common
    ],
    kineticTypeMotion: [
      "Animate variable font axes, clip masks, or letter transforms on hero text only.",
      "Never animate essential body copy continuously.",
      "Provide a static fallback for variable font or clip-path effects.",
      common
    ],
    brandBehaviorMotion: [
      "Animate the chosen brand motif consistently: bounce, slide, stamp, orbit, wipe, or tilt.",
      "Use micro-interactions to reinforce voice on cards, CTA, and navigation.",
      "Avoid random animation styles that make the brand feel inconsistent.",
      common
    ],
    geometricRevealMotion: [
      "Reveal content through the same geometry used in the layout: grid, circle, diagonal, or mask.",
      "Use `clip-path` and transform carefully; keep text on nonmoving layers when needed.",
      "Shapes can rotate or slide if their final alignment is mathematically clean.",
      common
    ],
    glossyDepthMotion: [
      "Animate highlight sweeps, depth shifts, panel scale, and product reveal.",
      "Keep blur layers static or slow; avoid animating large backdrop-filter areas.",
      "Use hover tilt only for visual cards, not forms or dense controls.",
      common
    ],
    contrastCutMotion: [
      "Use hard wipes, inversion hover, snap reveals, and section cuts.",
      "Avoid soft easing that weakens the high-contrast attitude.",
      "Keep the final state perfectly readable after every transition.",
      common
    ],
    luxuryPacingMotion: [
      "Use slow, confident reveals: image crop, material closeup, product scale from 0.96 to 1.",
      "Hover states should feel tactile and quiet: underline, image zoom, border refinement.",
      "Avoid constant loops; luxury motion is paced, not restless.",
      common
    ],
    lightStateMotion: [
      "Use quick state transitions for filters, tabs, table updates, and focus.",
      "Avoid heavy parallax in productivity contexts.",
      "Small elevation changes are acceptable if they do not shift layout.",
      common
    ],
    minimalMotion: [
      "Use minimal fade/translate reveals and precise hover underlines.",
      "Motion duration should be short and unobtrusive.",
      "Never make the motion more memorable than the content.",
      common
    ],
    monochromeStateMotion: [
      "Use inversion, underline expansion, row highlight, and drawer slide.",
      "No color flashes unless semantic alerts require them.",
      "Motion should clarify state transitions in a reduced palette.",
      common
    ],
    cinematicGsapMotion: [
      "Map motion before coding: hero entrance, chapter transition, proof animation, interaction feedback, closure.",
      "Use pinned sections and scrub only when they create a readable sequence.",
      "Every animated section needs a reduced-motion equivalent.",
      common
    ],
    softBuoyancyMotion: [
      "Use gentle y movement, soft scale, and color transitions.",
      "Keep bounces small; avoid cartoon physics unless the brand is clearly playful.",
      "Inputs and CTAs should feel responsive, not slippery.",
      common
    ],
    playfulPressMotion: [
      "Use tactile press, small bounce, reward toast, drag/slide, or progress fill.",
      "Motion should map to user action and completion.",
      "Respect reduced motion while keeping clear state feedback.",
      common
    ],
    serifRevealMotion: [
      "Use line masks for serif display headings and slow image reveal.",
      "Hover can underline, shift image crop, or reveal caption detail.",
      "Avoid flashy kinetic effects that fight elegance.",
      common
    ],
    ambientGradientMotion: [
      "Gradients can drift slowly behind stable content surfaces.",
      "Do not animate text backgrounds or make contrast fluctuate.",
      "Use reduced-motion fallback with static gradient positions.",
      common
    ],
    technicalStateMotion: [
      "Use tab, command, code reveal, deploy progress, and graph transitions.",
      "Keep motion mechanical and fast; do not add decorative bounce.",
      "Logs and code should not flicker or constantly scroll unless live state matters.",
      common
    ],
    technicalUiMotion: [
      "Use panel expand/collapse, filter transition, row selection, and command execution motion.",
      "Animations must preserve information density and never delay repeated tasks.",
      "Loading and stale states should be explicit.",
      common
    ],
    utilitarianStateMotion: [
      "Motion is limited to panel mechanics, validation, save confirmation, and loading.",
      "Prefer instant state changes over decorative easing.",
      "Use reduced motion by default if unsure.",
      common
    ],
    vividAccentMotion: [
      "Use accent sweeps, fill transitions, category color changes, and chart highlight animation.",
      "Resting state should remain calm; color motion marks interaction or selection.",
      "Avoid rainbow transitions that destroy semantic color mapping.",
      common
    ]
  };
  return recipes[profile.motionRecipe] || recipes.productWalkthroughMotion;
}

function styleMotionCss(profile) {
  const base = {
    "Cyber Neon": {
      name: "cyber-neon-signal",
      hover: "filter: brightness(1.18) drop-shadow(0 0 14px var(--neon));",
      keyframes: `
@keyframes neon-scanline-roll {
  to { transform: translateY(8px); }
}
@keyframes neon-glitch-shift {
  0%, 100% { clip-path: inset(0 0 0 0); transform: translate(0, 0); }
  33% { clip-path: inset(12% 0 58% 0); transform: translate(-2px, 1px); }
  66% { clip-path: inset(62% 0 10% 0); transform: translate(2px, -1px); }
}`
    },
    "Motion": {
      name: "motion-chapter",
      hover: "filter: contrast(1.06); transform: translateY(-2px) scale(1.01);",
      keyframes: `
@keyframes motion-band-reveal {
  from { opacity: 0; transform: translateY(44px) scale(.96); clip-path: inset(12% 0 12% 0); }
  to { opacity: 1; transform: translateY(0) scale(1); clip-path: inset(0 0 0 0); }
}
@keyframes motion-marquee-x {
  to { transform: translateX(-50%); }
}`
    },
    "Dark UI": {
      name: "dark-depth-panel",
      hover: "filter: brightness(1.06); transform: translateY(-2px);",
      keyframes: `
@keyframes dark-gradient-drift {
  0%, 100% { transform: translate3d(-4%, -2%, 0) scale(1); opacity: .72; }
  50% { transform: translate3d(4%, 3%, 0) scale(1.06); opacity: 1; }
}
@keyframes dark-status-grow {
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
}`
    },
    "Glossy Modern": {
      name: "glossy-specular",
      hover: "filter: brightness(1.04); transform: translateY(-3px) rotateX(1deg);",
      keyframes: `
@keyframes glossy-highlight-sweep {
  from { transform: translateX(-70%); opacity: 0; }
  40% { opacity: .85; }
  to { transform: translateX(70%); opacity: 0; }
}`
    },
    "Soft Gradients": {
      name: "soft-gradient-field",
      hover: "filter: saturate(1.04) brightness(1.02); transform: translateY(-1px);",
      keyframes: `
@keyframes ambient-gradient-drift {
  0%, 100% { background-position: 0% 40%, 100% 10%, 50% 50%; }
  50% { background-position: 18% 54%, 82% 22%, 50% 50%; }
}`
    },
    "Playful Design": {
      name: "playful-press",
      hover: "transform: translateY(-2px) rotate(-.4deg); filter: saturate(1.04);",
      keyframes: `
@keyframes playful-success-pop {
  0% { transform: scale(.92) rotate(-2deg); opacity: 0; }
  70% { transform: scale(1.04) rotate(1deg); opacity: 1; }
  100% { transform: scale(1) rotate(0); opacity: 1; }
}`
    },
    "Expressive Brand": {
      name: "brand-motif",
      hover: "transform: translateY(-3px) rotate(var(--brand-tilt, -1deg)); filter: saturate(1.06);",
      keyframes: `
@keyframes brand-motif-float {
  0%, 100% { transform: translateY(0) rotate(-1deg); }
  50% { transform: translateY(-8px) rotate(1deg); }
}`
    },
    "Experimental Type": {
      name: "experimental-type-mask",
      hover: "font-variation-settings: 'wdth' 118, 'wght' 900; transform: skewX(-2deg);",
      keyframes: `
@keyframes experimental-type-rise {
  from { transform: translateY(110%) skewY(2deg); clip-path: inset(0 0 100% 0); }
  to { transform: translateY(0) skewY(0); clip-path: inset(0 0 0 0); }
}`
    },
    "Geometric Modern": {
      name: "geometric-reveal",
      hover: "transform: translateY(-2px); clip-path: polygon(0 0, 100% 0, 100% 82%, 82% 100%, 0 100%);",
      keyframes: `
@keyframes geometric-grid-wipe {
  from { clip-path: inset(0 100% 0 0); transform: translateX(-12px); }
  to { clip-path: inset(0 0 0 0); transform: translateX(0); }
}`
    },
    "High Contrast": {
      name: "contrast-cut",
      hover: "filter: invert(1); transform: translateY(-1px);",
      keyframes: `
@keyframes contrast-hard-cut {
  from { clip-path: inset(0 100% 0 0); }
  to { clip-path: inset(0 0 0 0); }
}`
    },
    "High-End Design": {
      name: "luxury-crop",
      hover: "filter: brightness(1.03) contrast(1.02); transform: scale(1.015);",
      keyframes: `
@keyframes luxury-crop-reveal {
  from { opacity: 0; transform: scale(.96); clip-path: inset(10% 8% 10% 8%); }
  to { opacity: 1; transform: scale(1); clip-path: inset(0 0 0 0); }
}`
    }
  };
  const fallback = {
    name: profile.display.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
    hover: "filter: brightness(1.03); transform: translateY(-1px);",
    keyframes: `
@keyframes style-reveal {
  from { opacity: 0; transform: translateY(22px); clip-path: inset(8% 0 8% 0); }
  to { opacity: 1; transform: translateY(0); clip-path: inset(0 0 0 0); }
}`
  };
  const item = base[profile.display] || fallback;
  return `
\`\`\`css
[data-style-motion="${item.name}"] {
  transition:
    transform var(--source-motion-medium, 420ms) var(--source-ease-out, cubic-bezier(0.16, 1, 0.30, 1)),
    opacity var(--source-motion-medium, 420ms) var(--source-ease-out, cubic-bezier(0.16, 1, 0.30, 1)),
    filter 220ms ease,
    clip-path 520ms var(--source-ease-out, cubic-bezier(0.16, 1, 0.30, 1));
  will-change: transform, opacity, filter, clip-path;
}
[data-style-motion="${item.name}"]:is(:hover, :focus-visible, [data-active="true"]) {
  ${item.hover}
}
${item.keyframes}
@media (prefers-reduced-motion: reduce) {
  [data-style-motion="${item.name}"] {
    animation: none !important;
    transition-duration: .01ms !important;
    transform: none !important;
    clip-path: none !important;
    filter: none !important;
  }
}
\`\`\``;
}

function sourceMatrix(sources) {
  if (!sources.length) {
    return "No local raw source notes were found. Use the consolidated reference database if deeper inspiration is needed.";
  }
  const rows = sources.map((source) => [
    source.title,
    source.northStar || "Source-specific layout, color, type, component, and motion lessons.",
    source.theme || "Extract transferable visual rules, not a clone."
  ]);
  return table(rows, ["Reference", "Transferable lesson", "Use for"]);
}

function firstViewportProtocol(profile) {
  return `
## First Viewport Protocol

The first viewport must instantly say "${profile.display}" without needing an explanatory paragraph. Build it from:

- **Navigation:** styled in the same geometry as the rest of the system. It can be sparse, dense, floating, docked, editorial, or tool-like, but it cannot be default.
- **Primary claim:** an H1 with a clear product/client/category noun. Avoid abstract slogans unless the brand is already famous.
- **Hero proof:** show an object, app shell, marketplace grid, workflow, image, material, diagram, or motion stage that proves the page is real.
- **Primary action:** one obvious CTA, one secondary action if needed, both with readable contrast and defined hover/focus states.
- **Next-section hint:** the bottom of the viewport should reveal a sliver of proof, grid, cards, image, table, or chapter continuation.

H1 rule: use a wide container and responsive clamp. For most sites, H1 should be 2-3 lines maximum on desktop. If the style uses poster typography, prove mobile wrapping with 'overflow-wrap:anywhere', 'text-wrap:balance', and a smaller mobile clamp.`;
}

function designPlanProtocol(profile) {
  return `
## Mandatory \`<design_plan>\`

Before writing code for a substantial UI, output a compact \`<design_plan>\` block. This is not optional; it prevents lazy default layouts.

Include:

1. **Use case:** product type, audience, primary action, and emotional target.
2. **Style direction:** one ${profile.display} sub-direction chosen from the archetypes below.
3. **Visual operating mode:** density, motion intensity, decoration budget, contrast mode, radius rule, and asset burden.
4. **First viewport:** nav type, H1 width/line strategy, hero proof object, CTA treatment, next-section hint.
5. **System contracts:** type, color, surface, geometry, evidence, and interaction state rules.
6. **Component plan:** at least four concrete components from the arsenal, with states.
7. **Motion plan:** which elements move, why they move, and reduced-motion fallback.
8. **Anti-slop sweep:** name the top three failure modes for this style and how you will avoid them.

If the request is tiny, do this mentally and keep the final answer concise. If the request asks for a full page/app, include the block.`;
}

function operatingMode(profile) {
  const rows = Object.entries(profile.mode).map(([key, value]) => [key, value]);
  return `
## Style Operating Mode

${table(rows, ["Control", "Setting"])}

These controls are binding. If the user's brand or existing codebase conflicts with a setting, preserve the user's constraints but keep the underlying ${profile.display} behavior.`;
}

function signatureSystem(profile) {
  return `
## Signature System

Use these as executable rules, not inspiration labels:

${bullet(profile.signatures)}

### Source Direction Matrix

The source URLs and full extracts stay in references. The main skill keeps only transferable lessons.

${sourceMatrix(sourceListByProfile.get(profile.display) || [])}`;
}

const sourceListByProfile = new Map();

function archetypeSection(profile) {
  return `
## Archetype Picker

Pick one primary archetype per project. Do not average all archetypes into a bland middle.

${table(profile.archetypes, ["Archetype", "Layout behavior", "Best use"])}

Selection rule:
- If the user asks for a whole website, choose one archetype for the first viewport and one supporting archetype for the proof/conversion section.
- If the user asks for an app/work surface, prioritize workflow clarity over theatrical hero composition.
- If the user asks for a hero only, still define nav, proof object, CTA, and next-section hint so the hero feels connected to a full page.`;
}

function componentArsenal(profile) {
  const rows = profile.components.map((name, index) => {
    const state = index % 4 === 0
      ? "hover/focus/active plus selected"
      : index % 4 === 1
        ? "loading/empty/error plus success"
        : index % 4 === 2
          ? "responsive compact/expanded variants"
          : "keyboard focus and reduced-motion behavior";
    return [name, componentPurpose(name), state];
  });
  return `
## Component Arsenal

Use at least four of these for full-page work. Components must have real content and states; do not create empty decorative blocks.

${table(rows, ["Component", "Purpose", "Required states"])}

Component construction rules:

- Build components with stable dimensions: 'aspect-ratio', explicit grid tracks, 'minmax(0, 1fr)', and responsive 'clamp()' spacing.
- Keep hover states inside the component bounds; hover cannot resize neighboring layout.
- Put icons in icon buttons where appropriate, but do not replace clear labels for destructive or purchasing actions.
- For forms and marketplace/product flows, include validation, disabled, loading, empty, and success behavior.
- For cards, decide whether they are informational, navigational, selectable, draggable, or purchasable before styling them.`;
}

function componentBlueprints(profile) {
  const items = profile.components.map((name, index) => {
    const purpose = componentPurpose(name);
    const geometry = index % 3 === 0
      ? "Use a stable grid or aspect-ratio shell. The component should not change outer dimensions on hover, selection, loading, or error."
      : index % 3 === 1
        ? "Use consistent padding, radius, border, and typography tokens from the operating mode. Repeat the same geometry elsewhere."
        : "Use an explicit compact/mobile variant and a spacious desktop variant. Do not rely on browser wrapping to solve layout.";
    const state = index % 4 === 0
      ? "Idle, hover, focus-visible, active/pressed, selected/current, disabled."
      : index % 4 === 1
        ? "Loading skeleton, empty state, error message, success confirmation, stale/syncing if data-driven."
        : index % 4 === 2
          ? "Expanded/collapsed, compact/comfortable, keyboard focus, touch target at least 40px."
          : "Default, emphasized, muted, unavailable, reduced-motion, high-contrast fallback.";
    const motion = index % 5 === 0
      ? "Use transform/opacity only; animate inner media or accent edge, never layout width/height."
      : index % 5 === 1
        ? "Use a short state transition under 240ms unless this is a cinematic section."
        : index % 5 === 2
          ? "If scroll-triggered, final state must be readable without replaying the animation."
          : index % 5 === 3
            ? "If hover-reactive, keep the effect clipped inside the component and provide keyboard parity."
            : "Use reduced-motion fallback with static emphasis and no missing content.";
    return `### ${name}

Purpose: ${purpose}

Structure:
- Start with real content: title, meaningful body copy or data, primary affordance, and one proof/detail element.
- ${geometry}
- Use ${profile.display} surface rules instead of default card styling.

States:
- Required: ${state}
- Visual state must be more than opacity. Combine border, fill, type weight, icon/label, or surface change.
- Error and empty states must explain recovery, not merely show a red label or blank box.

Responsive:
- At mobile widths, preserve the style motif but simplify density, reduce huge type, and avoid overlapping controls.
- Touch targets stay usable. Long names, prices, labels, and CTAs must wrap intentionally.

Motion:
- ${motion}

Avoid:
- Placeholder-only content.
- Decorative badges that do not add category, state, trust, or action.
- Component-specific styling that breaks the global radius, color, or type contract.`;
  });
  return `
## Component Blueprints

Use these blueprints when implementing the arsenal above. They turn the style into buildable UI, not just visual direction.

${items.join("\n\n")}`;
}

function componentPurpose(name) {
  if (name.includes("hero")) return "First-viewport identity and proof object.";
  if (name.includes("table") || name.includes("data")) return "Dense comparison, operational data, or scannable records.";
  if (name.includes("filter") || name.includes("search")) return "Browsing, sorting, narrowing, and marketplace/product discovery.";
  if (name.includes("pricing") || name.includes("purchase")) return "Conversion, checkout, plan choice, or purchasing confidence.";
  if (name.includes("footer")) return "Designed closure with nav, CTA, and repeated motif.";
  if (name.includes("form")) return "Input, validation, submission, and trust.";
  if (name.includes("gallery") || name.includes("image")) return "Proof, product visibility, atmosphere, or editorial pacing.";
  if (name.includes("motion") || name.includes("animated") || name.includes("kinetic")) return "Structured animation or sequence.";
  return "Reusable style-specific module that carries identity and function.";
}

function codeRecipes(profile) {
  return `
## Technical Recipes

Use code-level decisions like these before adding polish. The exact values may adapt to an existing codebase, but the roles should remain.

### CSS Tokens And Signature Structure

${getRecipe(profile)}

### Tailwind/React Section Skeleton

\`\`\`tsx
export function ${profile.display.replace(/[^A-Za-z0-9]/g, "")}Section() {
  return (
    <section className="relative overflow-hidden px-6 py-28 md:py-40">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 md:grid-cols-12 md:gap-6">
        <div className="md:col-span-5">
          <p className="mb-4 text-sm font-medium tracking-[0.08em] text-muted-foreground">Specific category label</p>
          <h2 className="text-balance text-4xl font-semibold leading-[0.95] tracking-tight md:text-7xl">
            A concrete promise with ${profile.display} identity.
          </h2>
        </div>
        <div className="md:col-span-7">
          <div className="style-surface" data-reveal>
            {/* Replace with real product proof: UI, product, gallery, table, marketplace cards, or workflow. */}
          </div>
        </div>
      </div>
    </section>
  );
}
\`\`\`

### State Pattern

\`\`\`tsx
const stateClasses = {
  idle: "opacity-100",
  hover: "transition-transform duration-300 ease-out group-hover:-translate-y-0.5",
  selected: "ring-2 ring-offset-2",
  loading: "pointer-events-none opacity-70",
  disabled: "pointer-events-none opacity-40",
  error: "border-destructive text-destructive",
  success: "border-emerald-500 text-emerald-700"
};
\`\`\``;
}

function motionSection(profile) {
  const motionParts = getMotion(profile);
  const notes = motionParts.filter((item) => !item.includes("```"));
  const snippets = motionParts.filter((item) => item.includes("```"));
  return `
## Animation System

Motion must be specific to ${profile.display}. It should never be generic scroll-fade spam.

${bullet(notes)}

${snippets.join("\n\n")}

### Style-Specific CSS Motion Primitive

This primitive is intentionally small and concrete. Adapt class names to the project, but preserve the motion role, reduced-motion behavior, and allowed properties.

${styleMotionCss(profile)}

Motion rules:

- Use transform, opacity, clip-path, filter, or shader/canvas properties when appropriate; avoid layout-triggering properties.
- Give every motion a role: reveal, transition, feedback, continuity, attention routing, or storytelling.
- Add 'prefers-reduced-motion' fallbacks for all nontrivial motion.
- Keep controls usable before, during, and after animation.
- For GSAP ScrollTrigger, clean up triggers and avoid pinning huge sections on mobile unless tested.`;
}

function pageProtocols(profile) {
  return `
## Complete Page Protocols

### Marketplace Or Commerce

If the user asks for a marketplace, store, product catalog, booking system, or client commerce page, build the whole surface:

- Header with brand, category navigation, search, account/cart or primary action.
- Hero or discovery area that makes the ${profile.display} identity obvious.
- Filter rail with categories, sort, price/status/location/tags as relevant.
- Product/service grid with real card states: hover, selected/favorited, unavailable, loading, empty.
- Detail preview or featured product section with concrete specs, images, trust, and action.
- Trust/conversion section: reviews, guarantees, delivery, security, booking/checkout steps.
- Footer with useful links, not a generic dump.

Style-specific application: use ${profile.components.slice(0, 4).join(", ")} as the first component candidates. Use the accent/radius/surface rules from the operating mode.

### Client Website

If the user asks for a site for a client, include:

- Brand-first header and first viewport.
- Service/product proof with concrete nouns and examples.
- Process or methodology section.
- Case studies/testimonials/results.
- Conversion route: quote, booking, call, purchase, waitlist, or demo.
- Designed footer with repeated motif and contact clarity.

### App Or Dashboard

If the user asks for an app, dashboard, CRM, AI tool, admin, or internal surface:

- Start with the primary work area, not a marketing hero.
- Include navigation, filters/search, data/content area, details/inspector, empty/loading/error states.
- Use density appropriate to ${profile.display}: ${profile.mode.density}
- Preserve the style through surface, type, state, and component geometry rather than decorative extras.

### Iconic Hero

If the user asks only for a hero, still deliver a hero that implies a complete site:

- Designed nav.
- Strong H1 with line-length strategy.
- Concrete proof object.
- CTA pair or single decisive action.
- Style-specific background/surface system.
- Bottom reveal of the next section.
- Mobile version with no text overflow, no overlapping CTAs, and preserved identity.`;
}

function antiSlop(profile) {
  return `
## Absolute Bans

${bullet([...profile.bans, ...sharedBans])}

## Failure Corrections

- If it looks generic, strengthen the chosen archetype, change the component geometry, and make the proof object more concrete.
- If it looks like a theme pasted on default UI, rebuild the surface, type scale, spacing, and state system first.
- If it looks pretty but lazy, add missing real sections: navigation, proof, workflow, conversion, states, and footer.
- If it looks noisy, reduce accent count, effects, and component variety until hierarchy is obvious.
- If animation feels unrelated, remove it or tie it to sequence, state, or interaction.`;
}

function referenceUse() {
  return `
## Reference Use

The detailed Refero-derived material is bundled but not dumped into this main file:

- Full consolidated database: [references/refero-style-database.md](references/refero-style-database.md)
- Raw source notes: [references/sources/](references/sources/)

When to load references:

- Load the full database when the user asks for a substantial site/app, when the style direction feels under-specified, or when you need more component/palette/motion examples.
- Search the database for terms such as 'Tokens', 'Components', 'Animations', 'Layout', 'Typography', 'Radius', 'Gradient', 'Hover', 'Button', 'Hero', 'Card', 'Navigation'.
- Inspect raw sources only when the user names a source or asks for a narrower source-specific interpretation.

Do not paste source URLs into final UI work. Extract rules, tokens, patterns, and interaction behavior.`;
}

function checklist(profile) {
  return `
## Pre-Output Checklist

Before delivering code or design instructions, verify:

- First viewport unmistakably expresses ${profile.display}.
- The design includes real structure beyond a hero when the request implies a page or product.
- Typography has a defined display/body/metadata/control system.
- H1 line length and mobile wrapping are controlled.
- Color roles are semantic and accents are budgeted.
- Components share radius, border, shadow, spacing, and state behavior.
- Product/client evidence is concrete and inspectable.
- At least hover, focus, active, disabled, loading, empty, error, and success states are considered.
- Motion has a role and a reduced-motion fallback.
- No ban listed above is violated.
- The final result would not be mistaken for a generic template.`;
}

function makeSkillMarkdown(slug, originalMeta, originalText) {
  const profile = profiles[slug];
  if (!profile) throw new Error(`Missing profile for ${slug}`);
  const parsedDescription = originalMeta.description && !["|", ">"].includes(originalMeta.description)
    ? originalMeta.description
    : `Use this skill to create ${profile.display} visual design systems that feel ${profile.mood}.`;
  const description = JSON.stringify(
    `${parsedDescription} USE FOR: ${profile.use}. DO NOT USE FOR: unrelated backend work, non-visual tasks, or when an existing product design system must be followed exactly.`
  );
  const sources = sourceList(slug);
  sourceListByProfile.set(profile.display, sources);
  const signals = extractTechnicalSignals(`${originalText}\n\n${readRawBundle(slug)}`);

  return `---
name: ${slug}
description: ${description}
---

# ${profile.display} Skill

## Core Directive

You are a senior frontend design engineer specializing in ${profile.display}. The output must feel ${profile.mood}. Do not merely skin default components with a color palette. Build a visual operating system: layout, typography, color roles, component geometry, imagery, motion, interaction states, responsive behavior, and proof content must all point in the same direction.

Use this skill for ${profile.use}.

${designPlanProtocol(profile)}

## Non-Negotiable Principles

${bullet(profile.principles)}

${operatingMode(profile)}

${signatureSystem(profile)}

${rawTechnicalSignalsSection(profile, signals)}

${firstViewportProtocol(profile)}

${archetypeSection(profile)}

${componentArsenal(profile)}

${componentBlueprints(profile)}

${codeRecipes(profile)}

${motionSection(profile)}

${pageProtocols(profile)}

${antiSlop(profile)}

${referenceUse()}

${checklist(profile)}
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

const missing = slugs.filter((slug) => !profiles[slug]);
if (missing.length) {
  throw new Error(`Missing top-tier profiles: ${missing.join(", ")}`);
}

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
  const skillMarkdown = asciiText(makeSkillMarkdown(slug, originalMeta, original));
  fs.writeFileSync(path.join(targetDir, "SKILL.md"), skillMarkdown, "utf8");
  fs.writeFileSync(path.join(referencesDir, "refero-style-database.md"), original, "utf8");
  copyRawSources(slug, sourcesDir);

  const sourceCount = fs.existsSync(sourcesDir)
    ? fs.readdirSync(sourcesDir).filter((name) => name.endsWith(".md")).length
    : 0;
  results.push({
    slug,
    mainChars: skillMarkdown.length,
    refChars: original.length,
    sourceCount
  });
}

const min = Math.min(...results.map((r) => r.mainChars));
const max = Math.max(...results.map((r) => r.mainChars));
const avg = Math.round(results.reduce((sum, r) => sum + r.mainChars, 0) / results.length);

console.log(JSON.stringify({ count: results.length, min, max, avg, results }, null, 2));
