import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const skillRoot = path.join(root, ".agents", "skills");

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

const display = {
  "cyber-neon": "Cyber Neon",
  "dark-ui": "Dark UI",
  "editorial-minimal": "Editorial Minimal",
  "editorial-type": "Editorial Type",
  "experimental-type": "Experimental Type",
  "expressive-brand": "Expressive Brand",
  "geometric-modern": "Geometric Modern",
  "glossy-modern": "Glossy Modern",
  "high-contrast": "High Contrast",
  "high-end-design": "High-End Design",
  "light-ui": "Light UI",
  "minimal-design": "Minimal Design",
  "monochrome-ui": "Monochrome UI",
  motion: "Motion",
  pastel: "Pastel",
  "playful-design": "Playful Design",
  "serif-display": "Serif Display",
  "soft-gradients": "Soft Gradients",
  "technical-sans": "Technical Sans",
  "technical-ui": "Technical UI",
  utilitarian: "Utilitarian",
  "vibrant-accents": "Vibrant Accents",
};

const proof = {
  "cyber-neon": "luminous terminal, map, shader, or holographic product object",
  "dark-ui": "dark product surface with logs, panels, command input, or metrics",
  "editorial-minimal": "captioned media block, index row, archive, or quiet proof object",
  "editorial-type": "poster title, issue index, typographic spread, or editorial commerce proof",
  "experimental-type": "type specimen, variable axis control, glyph grid, or poster system",
  "expressive-brand": "brand motif plus product, campaign, character, or object proof",
  "geometric-modern": "modular grid, radial system, plan-view section, or shape-led product proof",
  "glossy-modern": "layered glass product frame, specular card, or glossy tool surface",
  "high-contrast": "inverted poster, hard-edge product proof, data table, or polarity surface",
  "high-end-design": "material/product/gallery proof with inspectable detail",
  "light-ui": "bright app shell, docs preview, data table, or approachable product surface",
  "minimal-design": "single object, quiet index, restrained table, or plain useful form",
  "monochrome-ui": "gray-scale table, control shell, editorial object, or bordered dashboard",
  motion: "animated product/narrative object with a static fallback",
  pastel: "soft guided product card, friendly form, category path, or community proof",
  "playful-design": "tactile progress, chunky product card, reward state, or playful onboarding proof",
  "serif-display": "serif hero, chapter image, pullquote, or elegant commerce proof",
  "soft-gradients": "protected content panel, calm UI frame, or atmospheric product proof",
  "technical-sans": "code/API/docs/architecture proof",
  "technical-ui": "workstation shell, table state, log stream, prompt, or inspector panel",
  utilitarian: "admin table, form, drawer, settings section, audit log, or bulk action surface",
  "vibrant-accents": "neutral product proof with a governed vivid action/category accent",
};

const motionNoun = {
  "cyber-neon": "glow, scanline, shader, or pointer signal",
  "dark-ui": "panel depth, reveal, or focus transition",
  "editorial-minimal": "quiet text/image reveal",
  "editorial-type": "line-mask, issue transition, or type reveal",
  "experimental-type": "variable-axis, kinetic type, or mask transition",
  "expressive-brand": "brand behavior loop",
  "geometric-modern": "grid, shape, radial, or mask transition",
  "glossy-modern": "specular sweep or glass depth transition",
  "high-contrast": "inversion, border, or polarity transition",
  "high-end-design": "refined image, material, or product reveal",
  "light-ui": "light state transition",
  "minimal-design": "minimal state change",
  "monochrome-ui": "inversion, underline, border, or density transition",
  motion: "declared motion primitive",
  pastel: "gentle buoyant transition",
  "playful-design": "press, bounce, progress, or reward transition",
  "serif-display": "line-mask, serif reveal, or image fade",
  "soft-gradients": "ambient gradient drift",
  "technical-sans": "command, deploy, docs, or code transition",
  "technical-ui": "state/workflow transition",
  utilitarian: "state confirmation",
  "vibrant-accents": "accent sweep or category transition",
};

const protocolMap = {
  "cyber-neon": [
    ["Night Lab Launch", [
      '<CyberNeonNav mode="black-stage" primaryAction="Enter system" />',
      '<ScanlineHeroCoreContract state="selected" />',
      '<TelemetryChipRailContract items={["LIVE NODE", "GPU 91%", "SYNC 04"]} />',
      '<SystemStatusMapContract zones={["core", "edge", "offline"]} />',
      '<LuminousPricingDeckContract plans={["Solo", "Crew", "Lab"]} />',
    ]],
    ["Spatial Map Overlay", [
      '<HologramProductCardContract title="Sector 7" meta="18 active signals" state="selected" />',
      '<NeonCommandBarContract command="scan --district=west" />',
      '<CursorReactivePanelContract state="loading" />',
      '<CyberNeonStatusPill role="warning">Signal drift</CyberNeonStatusPill>',
    ]],
  ],
  "dark-ui": [
    ["AI Workspace", [
      '<DarkUINav mode="compact" primaryAction="Run task" />',
      '<DarkCommandInputContract state="selected" />',
      '<AgentThreadContract messages={conversationWithSources} />',
      '<StackedInsightPanelContract title="Context" meta="12 files indexed" />',
      '<StatusSidebarContract items={["Ready", "Queued", "Blocked"]} />',
    ]],
    ["Ops Command", [
      '<MetricGlassCardContract title="Incidents" meta="2 open" state="warning" />',
      '<LogConsoleContract stream={deployEvents} />',
      '<DeployTimelineContract state="loading" />',
      '<DarkUIStatusPill role="danger">Escalated</DarkUIStatusPill>',
    ]],
  ],
  "editorial-minimal": [
    ["Research Landing", [
      '<EditorialMinimalNav mode="quiet" />',
      '<CaptionedMediaBlockContract title="Model behavior notes" meta="Research / 2026" />',
      '<EditorialIndexRowContract title="Methods, traces, artifacts" meta="12 entries" />',
      '<MarginNoteContract>Primary evidence stays captioned and inspectable.</MarginNoteContract>',
    ]],
    ["Calm Portfolio Archive", [
      '<ImageChapterContract title="Selected work" meta="2019-2026" />',
      '<CaseStudyListContract items={["Identity", "Interface", "Publication"]} />',
      '<QuietCTABarContract action="Discuss a project" />',
    ]],
  ],
  "editorial-type": [
    ["Magazine Issue", [
      '<PosterTitleHeroContract title="The Shape of Work" deck="Issue 04 / Systems" />',
      '<IssueIndexTableContract rows={articlesWithAuthorsAndDates} />',
      '<PullquotePanelContract quote="Type carries the hierarchy." />',
      '<CaptionGridContract images={editorialCrops} />',
    ]],
    ["Editorial Commerce", [
      '<SpreadGalleryContract products={limitedEditions} />',
      '<TypographicFilterContract items={["Objects", "Prints", "Books"]} />',
      '<ArticleCardRowContract title="Provenance and process" meta="Materials / care / shipping" />',
    ]],
  ],
  "experimental-type": [
    ["Type Specimen", [
      '<VariableTypeHeroContract axes={["wdth", "wght", "slnt"]} />',
      '<AxisControlPanelContract state="selected" />',
      '<GlyphGridContract sample="A-Z / 0-9 / symbols" />',
      '<SpecimenSliderContract labels={["Narrow", "Regular", "Ultra"]} />',
    ]],
    ["Poster Campaign", [
      '<PosterCardContract title="NO STATIC DEFAULTS" meta="Campaign 01" />',
      '<KineticMarqueeContract items={["WIDTH", "WEIGHT", "RHYTHM"]} />',
      '<TypeIndexContract items={["Posters", "Tickets", "Archive"]} />',
    ]],
  ],
  "expressive-brand": [
    ["Consumer Brand World", [
      '<BrandMotifHeroContract state="selected" />',
      '<VoiceDrivenCtaContract title="Start the ritual" meta="plain action, brand voice" />',
      '<ObjectGalleryContract items={productCharactersOrProps} />',
      '<PersonaTestimonialContract persona="Owner" quote="Concrete product proof in brand language." />',
    ]],
    ["Campaign System", [
      '<CampaignStripContract items={["Signal", "Proof", "Offer"]} />',
      '<ColorCodedCardSystemContract items={["Audience", "Benefit", "Moment"]} />',
      '<ExpressiveFooterContract motif="repeat, do not decorate randomly" />',
    ]],
  ],
  "geometric-modern": [
    ["Modular Grid Brand", [
      '<ModularHeroGridContract state="selected" />',
      '<CoordinateLabelContract value="A/04" />',
      '<GeometricStatBlockContract title="48 modules" meta="grid proof" />',
      '<ModuleFooterContract tracks={["Work", "System", "Contact"]} />',
    ]],
    ["Shape-Led Product", [
      '<ShapeMaskCardContract title="Catalog" meta="consistent crop geometry" />',
      '<RadialNavClusterContract items={["Plan", "Build", "Ship"]} />',
      '<ClipPathGalleryContract images={productOrArchitectureCrops} />',
    ]],
  ],
  "glossy-modern": [
    ["Glass Product Stage", [
      '<GlassHeroPanelContract state="selected" />',
      '<LayeredProductFrameContract title="Canvas" meta="toolbar, inspector, preview" />',
      '<FloatingToolbarContract items={["Move", "Mask", "Export"]} />',
      '<HighlightSweepButtonContract state="default">Create scene</HighlightSweepButtonContract>',
    ]],
    ["Premium Tool Surface", [
      '<SpecularCardContract title="Depth layer" meta="blur budget respected" />',
      '<DepthPricingCardContract plan="Studio" state="selected" />',
      '<ReflectionGalleryContract items={productRenders} />',
    ]],
  ],
  "high-contrast": [
    ["Poster Authority", [
      '<PosterHeroBlockContract title="NO SOFT DEFAULTS" />',
      '<InvertedNavContract items={["Index", "Proof", "Buy"]} />',
      '<SplitProofPanelContract left="claim" right="artifact" />',
      '<AccentCtaBlockContract action="Start now" />',
    ]],
    ["Utility Console", [
      '<ContrastDataTableContract rows={criticalRecords} />',
      '<MonochromeFilterBarContract items={["All", "Open", "Closed"]} />',
      '<AccessibleStatusRowContract role="danger">Blocked by missing approval</AccessibleStatusRowContract>',
    ]],
  ],
  "high-end-design": [
    ["Luxury Product Page", [
      '<GalleryHeroContract product="inspectable object" />',
      '<MaterialSpecRowContract specs={["origin", "finish", "care"]} />',
      '<QuietPurchaseBarContract price="$1,280" action="Reserve" />',
      '<CraftProcessSequenceContract steps={["Source", "Shape", "Finish"]} />',
    ]],
    ["Premium Service Narrative", [
      '<EditorialProductCardContract title="Private consultation" meta="duration, location, outcome" />',
      '<ConciergeFormContract fields={["date", "budget", "project"]} />',
      '<ChapterImageContract caption="material proof, not mood filler" />',
    ]],
  ],
  "light-ui": [
    ["Bright App Shell", [
      '<WhiteAppShellContract state="selected" />',
      '<FilterToolbarContract items={["Active", "Pending", "Archived"]} />',
      '<LightDataTableContract rows={recordsWithStatusAndOwners} />',
      '<EmptyStatePanelContract action="Create first record" />',
    ]],
    ["Documentation Product", [
      '<DocsPreviewPanelContract title="API request" meta="copyable example" />',
      '<WorkflowCardContract title="Install, connect, verify" />',
      '<SoftStatusChipContract role="success">Synced</SoftStatusChipContract>',
    ]],
  ],
  "minimal-design": [
    ["Single Object Landing", [
      '<SingleObjectHeroContract title="One clear product" />',
      '<QuietFeatureLineContract title="What changes" meta="one sentence" />',
      '<CaptionedImageContract src={productImage} />',
      '<PlainFormContract fields={["email", "message"]} />',
    ]],
    ["Quiet Index Tool", [
      '<MinimalIndexRowContract title="Entry 001" meta="date / owner / state" />',
      '<SimpleControlBarContract items={["Sort", "Filter", "Export"]} />',
      '<RestrainedCardContract title="Decision" meta="useful proof, not filler" />',
    ]],
  ],
  "monochrome-ui": [
    ["Monochrome Dashboard", [
      '<GrayTokenShellContract state="selected" />',
      '<BorderedFilterRailContract items={["All", "Open", "Flagged"]} />',
      '<MonochromeTableContract rows={recordsWithGrayStates} />',
      '<MonoStatusRowContract role="warning">Delayed, needs review</MonoStatusRowContract>',
    ]],
    ["Black White Editorial", [
      '<BlackWhiteCardContract title="Field notes" meta="Index / 04" />',
      '<GrayscaleGalleryContract images={highContrastCrops} />',
      '<InversionButtonContract state="default">Read archive</InversionButtonContract>',
    ]],
  ],
  motion: [
    ["Pinned Product Narrative", [
      '<PinnedScrollChapterContract chapter="01" media={<AnimatedProductDemoContract />} />',
      '<ScrubbedGalleryContract frames={productStates} fallback="static storyboard" />',
      '<TimelineControlContract items={["Intro", "Proof", "Action"]} />',
      '<ReducedMotionFallbackContract mode="visible-static-sequence" />',
    ]],
    ["Kinetic Launch", [
      '<KineticWordRevealContract text="Motion explains state" />',
      '<CursorParallaxStageContract state="selected" />',
      '<MotionCardStackContract cards={featureCards} />',
    ]],
  ],
  pastel: [
    ["Friendly Commerce", [
      '<PastelHeroCardContract product="starter kit" />',
      '<SoftCategoryPillContract items={["Skin", "Home", "Gifts"]} />',
      '<FriendlyProductCardContract state="selected" />',
      '<SoftPricingCardContract plan="Family" />',
    ]],
    ["Wellness Flow", [
      '<GentleStepperContract steps={["Choose", "Book", "Prepare"]} />',
      '<RoundedFormContract fields={["name", "time", "need"]} />',
      '<WarmTestimonialContract quote="soft tone with concrete outcome" />',
    ]],
  ],
  "playful-design": [
    ["Learning Product", [
      '<RoundedOnboardingContract step={2} total={5} />',
      '<GamifiedProgressContract value={64} label="lesson complete" />',
      '<RewardToastContract role="success">Badge unlocked</RewardToastContract>',
      '<TactileButtonContract state="default">Continue</TactileButtonContract>',
    ]],
    ["Joyful Commerce", [
      '<ChunkyProductCardContract title="Starter box" meta="ships Friday" />',
      '<PlayfulFilterChipContract items={["New", "Popular", "Bundles"]} />',
      '<StickerCaptionContract label="limited run" />',
    ]],
  ],
  "serif-display": [
    ["Literary Brand", [
      '<SerifHeroContract title="A composed first sentence" />',
      '<PullquoteCardContract quote="Serif type is the voice and the structure." />',
      '<ChapterImageContract caption="image proof with editorial pacing" />',
      '<EditorialNavContract items={["Essay", "Objects", "Visit"]} />',
    ]],
    ["Elegant Commerce", [
      '<ElegantProductGridContract products={curatedProducts} />',
      '<TypeLedTestimonialContract quote="quiet proof, not hype" />',
      '<ConciergeCTAContract action="Request appointment" />',
    ]],
  ],
  "soft-gradients": [
    ["Ambient SaaS", [
      '<AmbientHeroContract gradientRole="atmosphere" />',
      '<ProtectedContentPanelContract title="Readable product proof" />',
      '<CalmUiFrameContract state="selected" />',
      '<GradientStepCardContract steps={["Connect", "Analyze", "Act"]} />',
    ]],
    ["Wellness Atmosphere", [
      '<GradientSectionBandContract tone="warm-calm" />',
      '<SoftGlowButtonContract state="default">Book session</SoftGlowButtonContract>',
      '<LuminousTestimonialContract quote="soft, readable, concrete" />',
    ]],
  ],
  "technical-sans": [
    ["Developer Landing", [
      '<CodeHeroContract command="npx product init" />',
      '<APIResponseCardContract status={200} />',
      '<ArchitectureDiagramContract nodes={["client", "edge", "db"]} />',
      '<DeployTimelineContract state="success" />',
    ]],
    ["Documentation Surface", [
      '<DocsSidebarContract sections={["Start", "API", "Examples"]} />',
      '<CLICommandBarContract command="deploy --prod" />',
      '<TechnicalPricingContract plans={["Build", "Scale", "Enterprise"]} />',
    ]],
  ],
  "technical-ui": [
    ["Workstation Console", [
      '<WorkstationShellContract state="selected" />',
      '<FilterBuilderContract clauses={["status:running", "owner:me"]} />',
      '<LogStreamContract events={runtimeEvents} />',
      '<InspectorPanelContract record={selectedRecord} />',
    ]],
    ["AI Control Surface", [
      '<CommandPaletteContract query="summarize incident" />',
      '<AITracePanelContract steps={traceSteps} />',
      '<TechnicalUIStatusPill role="warning">Needs review</TechnicalUIStatusPill>',
    ]],
  ],
  utilitarian: [
    ["Admin Workflow", [
      '<AdminTableContract rows={recordsWithOwnersDatesAndStatus} />',
      '<BulkActionToolbarContract selectedCount={12} actions={["Approve", "Export", "Archive"]} />',
      '<DetailDrawerContract record={selectedRecord} />',
      '<AuditLogContract events={changesWithTimestamps} />',
    ]],
    ["Data Entry Flow", [
      '<ValidationFormContract fields={["invoice", "amount", "due date"]} />',
      '<SettingsSectionContract title="Rules" />',
      '<SearchFilterBarContract query="pending vendor" />',
    ]],
  ],
  "vibrant-accents": [
    ["Fintech Product", [
      '<AccentHeroCTAContract action="Create wallet" accentRole="primary-action" />',
      '<VividStatCardContract title="Revenue" meta="+18%" />',
      '<ColorCodedFilterContract items={["Cards", "Transfers", "Risk"]} />',
      '<NeutralProductGridContract accentMap={{risk:"warning", growth:"success"}} />',
    ]],
    ["Campaign Or Marketplace", [
      '<CategoryTabsContract items={["Studio", "Teams", "Enterprise"]} />',
      '<HighlightMarqueeContract items={["Launch", "Proof", "Offer"]} />',
      '<AccentHoverCardContract state="selected" />',
    ]],
  ],
};

function planBlock(slug) {
  const name = display[slug];
  return `## Mandatory \`<design_plan>\`

Before substantial UI code, output a compact \`<design_plan>\` block. Include:

1. **Use case:** page/app type, audience, primary action, emotional target.
2. **Style direction:** one ${name} archetype below.
3. **Operating mode:** density, motion, decoration, contrast, radius, and asset burden.
4. **First viewport:** nav type, H1 width/line strategy, ${proof[slug]}, CTA treatment, next-section hint.
5. **System contracts:** type, color, surface, radius, spacing, depth, state, and motion tokens.
6. **Component plan:** at least four concrete ${name} components with states.
7. **Motion plan:** ${motionNoun[slug]}, timing, performance guardrail, and reduced-motion fallback.
8. **Anti-slop sweep:** top three failure modes for this style and how you will avoid them.

If the request is tiny, do this mentally and keep the final answer concise.`;
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function sectionRegex(heading) {
  return new RegExp(`\\n${escapeRegExp(heading)}[\\s\\S]*?(?=\\n## |\\n# |$)`, "m");
}

function extractSection(text, heading) {
  const match = text.match(sectionRegex(heading));
  if (!match) return { text, section: "" };
  return {
    text: text.slice(0, match.index) + text.slice(match.index + match[0].length),
    section: match[0].trim(),
  };
}

function insertAfterHeading(text, section, headingPattern) {
  const match = text.match(headingPattern);
  if (!match) return `${text.trim()}\n\n${section}\n`;
  const idx = match.index + match[0].length;
  return `${text.slice(0, idx).trimEnd()}\n\n${section}\n${text.slice(idx).trimStart()}`;
}

function cleanPlan(text, slug) {
  text = text.replace(
    /^## Mandatory `<design_plan>`[\s\S]*?(?=\n## Core Directive|\n## Source Archetypes|\n## Motion Principles|\n## Brand Equation|\n## Non-Negotiable|\n## Core Principles|\n## Style Operating Mode|\n## Operating Mode|\n## Differentiation|$)/m,
    `${planBlock(slug)}\n`
  );

  const duplicateBlock = /Before substantial UI code, output a compact `<design_plan>` block\. Include:[\s\S]*?If the request is tiny, do this mentally and keep the final answer concise\.\n*/g;
  let seen = false;
  text = text.replace(duplicateBlock, (match) => {
    if (!seen && text.indexOf(match) < 1200) {
      seen = true;
      return match;
    }
    return "";
  });

  const oldPlanPatterns = [
    /\nBefore a substantial UI, output a compact `<design_plan>` block with:[\s\S]*?For tiny edits, do this mentally\. For full pages, apps, games, or visual redesigns, include it before code\.\n/g,
    /\nFor substantial UI work, start with a compact `<design_plan>`:[\s\S]*?For small tasks, keep the plan internal\.\n/g,
    /\nFor substantial UI work, make these decisions before writing code:[\s\S]*?If building a whole site or app, include a compact design plan with the chosen archetype, first viewport, component set, token pack, and motion grammar\.\n/g,
    /\nBefore writing code for a substantial UI, decide:[\s\S]*?If building a full page\/app, include a compact design plan\. If the task is small, keep the plan internal but still apply the gray\/state contract\.\n/g,
    /\nBefore a significant UI build, output a compact `<design_plan>`:[\s\S]*?For tiny component edits, keep this internal\.\n/g,
    /\nFor substantial UI work, output a compact `<design_plan>`:[\s\S]*?For small tasks, keep the plan internal\.\n/g,
    /\nBefore writing substantial UI code, decide:[\s\S]*?For small edits, keep this internal\.\n/g,
    /\nBefore writing code for a substantial UI, decide:[\s\S]*?If the task is small, keep the plan internal but still apply the minimal contract\.\n/g,
    /\nBefore writing code for a substantial UI, decide:[\s\S]*?If building a full page\/app, include a compact design plan\. If the request is tiny, keep the plan internal and still apply the decisions\.\n/g,
    /\nFor substantial UI work, start with a compact `<design_plan>`:[\s\S]*?For tiny component edits, keep this internal\.\n/g,
    /\nFor substantial UI work, start with a compact `<design_plan>`:[\s\S]*?For smaller tasks, keep the plan internal\.\n/g,
  ];
  for (const pattern of oldPlanPatterns) {
    text = text.replace(pattern, "\n");
  }
  return text;
}

function removeLegacyOperatingMode(text) {
  return text.replace(/\n## Operating Mode\n[\s\S]*?(?=\n## |\n# |$)/g, "\n");
}

function removePlaceholderCodeFences(text) {
  return text.replace(/\n```tsx\n([\s\S]*?)```\n/g, (block, inner) => {
    if (/Concrete proof module|Stateful module|Offer, plan, product, story, or record/.test(inner)) {
      return "\n";
    }
    return block;
  });
}

function moveCoreSections(text) {
  const headings = ["## Style Operating Mode", "## Signature System", "### Execution Token Contract"];
  const sections = [];
  for (const heading of headings) {
    const out = extractSection(text, heading);
    text = out.text;
    if (out.section) sections.push(out.section);
  }
  const anchor = /## Differentiation[\s\S]*?(?=\n## |\n# |$)/m;
  const match = text.match(anchor);
  if (match) {
    const idx = match.index + match[0].length;
    return `${text.slice(0, idx).trimEnd()}\n\n${sections.join("\n\n")}\n${text.slice(idx).trimStart()}`;
  }
  return insertAfterHeading(text, sections.join("\n\n"), /^# .+$/m);
}

function aliasValue(name, slug) {
  const n = name.toLowerCase();
  if (n.includes("font-display")) return "var(--font-display)";
  if (n.includes("font-body") || n.includes("font-sans")) return "var(--font-sans)";
  if (n.includes("font-mono")) return "var(--font-mono)";
  if (n.includes("dur-fast")) return "160ms";
  if (n.includes("dur-ui") || n.includes("motion-base")) return "260ms";
  if (n.includes("dur-reveal")) return "760ms";
  if (n.includes("dur-chapter")) return "1200ms";
  if (n.includes("ease-out-expo")) return "cubic-bezier(.16,1,.3,1)";
  if (n.includes("ease-emphasized") || n.includes("ease-soft") || n.includes("ease")) return "var(--ease-product)";
  if (n.includes("radius-control") || n.includes("radius-button") || n.includes("radius-chip") || n.includes("radius-pill") || n.includes("radius-input") || n.includes("radius-nav")) return "var(--radius-control)";
  if (n.includes("radius-card")) return "var(--radius-card)";
  if (n.includes("radius-panel") || n.includes("radius-stage") || n.includes("radius-frame") || n.includes("radius-container") || n.includes("radius-dark-card")) return "var(--radius-panel)";
  if (n.includes("shadow-panel") || n.includes("shadow-hero") || n.includes("shadow-xl")) return "var(--shadow-panel)";
  if (n.includes("shadow") || n.includes("depth")) return "var(--shadow-card)";
  if (n.includes("focus")) return "var(--state-focus-ring)";
  if (n.includes("selected") || n.includes("current") || n.includes("active")) return "var(--state-selected-bg)";
  if (n.includes("hover")) return "var(--state-hover-bg)";
  if (n.includes("success") || n.includes("confirm") || n.includes("live")) return n.includes("surface") || n.includes("bg") ? "var(--status-success-bg)" : "var(--status-success-fg)";
  if (n.includes("warning") || n.includes("alert") || n.includes("attention") || n.includes("note")) return n.includes("surface") || n.includes("bg") ? "var(--status-warning-bg)" : "var(--status-warning-fg)";
  if (n.includes("danger") || n.includes("error") || n.includes("destructive")) return n.includes("surface") || n.includes("bg") ? "var(--status-danger-bg)" : "var(--status-danger-fg)";
  if (n.includes("info")) return n.includes("surface") || n.includes("bg") ? "var(--status-info-bg)" : "var(--status-info-fg)";
  if (n.includes("line") || n.includes("border") || n.includes("stroke") || n.includes("rule")) return "var(--line)";
  if (n.includes("canvas") || n.includes("bg") || n.includes("background")) return "var(--canvas)";
  if (n.includes("surface") || n.includes("card") || n.includes("panel") || n.includes("raised") || n.includes("frame") || n.includes("popover") || n.includes("stage")) return "var(--surface)";
  if (n.includes("muted") || n.includes("secondary") || n.includes("body")) return "var(--text-muted)";
  if (n.includes("ink") || n.includes("text") || n.includes("fg") || n.includes("display")) return "var(--text)";
  if (n.includes("accent") || n.includes("action") || n.includes("cta") || n.includes("primary") || n.includes("material") || n.includes("shape")) return "var(--action)";
  if (n.includes("neutral")) return slug === "monochrome-ui" ? "#d9d9d9" : "var(--surface-muted)";
  if (n.includes("step-0")) return "var(--s-1)";
  if (n.includes("step-1")) return "var(--s-2)";
  if (n.includes("step-2") || n.includes("space-tight")) return "var(--s-3)";
  if (n.includes("step-3") || n.includes("space-field")) return "var(--s-4)";
  if (n.includes("step-4") || n.includes("space-module")) return "var(--s-6)";
  if (n.includes("step-5")) return "var(--s-8)";
  if (n.includes("step-6") || n.includes("space-section")) return "var(--s-10)";
  if (n.includes("step-7")) return "var(--s-11)";
  return "var(--surface-muted)";
}

function addCompatibilityAliases(text, slug) {
  const declared = new Set([...text.matchAll(/--([a-z0-9_-]+)\s*:/gi)].map((m) => `--${m[1]}`));
  const used = new Set([...text.matchAll(/var\(\s*(--[a-z0-9_-]+)/gi)].map((m) => m[1]));
  const missing = [...used].filter((name) => !declared.has(name)).sort();
  if (!missing.length) return text;

  const block = [
    "  /* Compatibility aliases for legacy source recipes. Prefer the generic tokens above in new code. */",
    ...missing.map((name) => `  ${name}: ${aliasValue(name, slug)};`),
  ].join("\n");

  return text.replace(/(  --ease-product: [^;]+;\n)(}\n```)/, `$1${block}\n$2`);
}

function monochromeStatusFix(text) {
  if (!text.includes("name: monochrome-ui")) return text;
  const replacements = {
    "--status-success-bg: #ecfdf5;": "--status-success-bg: #f1f1f1;",
    "--status-success-fg: #047857;": "--status-success-fg: #111111;",
    "--status-info-bg: #eef4ff;": "--status-info-bg: #e9e9e9;",
    "--status-info-fg: #3152d4;": "--status-info-fg: #242424;",
    "--status-warning-bg: #fffbeb;": "--status-warning-bg: #dedede;",
    "--status-warning-fg: #b45309;": "--status-warning-fg: #000000;",
    "--status-danger-bg: #fff1f2;": "--status-danger-bg: #000000;",
    "--status-danger-fg: #b91c1c;": "--status-danger-fg: #ffffff;",
    "--status-neutral-bg: #f3f4f6;": "--status-neutral-bg: #f3f3f3;",
  };
  for (const [from, to] of Object.entries(replacements)) {
    text = text.replaceAll(from, to);
  }
  return text;
}

function pageProtocols(slug) {
  const groups = protocolMap[slug] || [];
  const chunks = groups.map(([title, lines]) => {
    return `// ${title}\n<main data-skill="${slug}" data-archetype="${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}">\n  ${lines.join("\n  ")}\n</main>`;
  });
  return `## Complete Page Protocols

\`\`\`tsx
${chunks.join("\n\n")}
\`\`\``;
}

function replaceProtocols(text, slug) {
  const out = extractSection(text, "## Complete Page Protocols");
  text = out.text;
  const anchor = /## Motion System[\s\S]*?(?=\n## |\n# |$)|## Motion Grammar[\s\S]*?(?=\n## |\n# |$)|## Motion Rules[\s\S]*?(?=\n## |\n# |$)|## Motion Patterns[\s\S]*?(?=\n## |\n# |$)/m;
  const match = text.match(anchor);
  if (match) {
    const idx = match.index + match[0].length;
    return `${text.slice(0, idx).trimEnd()}\n\n${pageProtocols(slug)}\n${text.slice(idx).trimStart()}`;
  }
  return insertAfterHeading(text, pageProtocols(slug), /### Core Component Kit[\s\S]*?(?=\n## |\n# |$)/m);
}

function patchFrontmatter(text, slug) {
  if (slug === "expressive-brand") {
    return text.replace(
      /^description: .+$/m,
      'description: "Use this skill to create expressive brand systems for distinctive websites, product pages, SaaS launches, consumer products, fintech, AI tools, developer platforms, campaigns, portfolios, and identity-led interfaces where typography, color, motif, copy voice, components, motion, and product proof form a repeatable brand language. USE FOR: brand-heavy launches, consumer products, expressive SaaS, campaign pages, identity-led interfaces, product proof with voice/motif. DO NOT USE FOR: unrelated backend work, non-visual tasks, or when an existing product design system must be followed exactly."'
    );
  }
  if (slug === "vibrant-accents") {
    return text.replace(
      /^description: .+$/m,
      'description: "Use this skill to create modern interfaces, SaaS pages, fintech products, AI tools, campaigns, portfolios, marketplaces, and enterprise product sites with restrained neutral foundations plus vivid, governed accent color for action, focus, category, process, gradient atmosphere, and interaction without rainbow chaos or inaccessible text. USE FOR: vivid accent SaaS, fintech, AI/product launches, marketplaces, portfolios, campaign pages, category color systems. DO NOT USE FOR: unrelated backend work, non-visual tasks, or when an existing product design system must be followed exactly."'
    );
  }
  return text;
}

const changed = [];
for (const slug of targets) {
  const file = path.join(skillRoot, slug, "SKILL.md");
  const before = fs.readFileSync(file, "utf8").replace(/\r\n/g, "\n");
  let after = before;
  after = patchFrontmatter(after, slug);
  after = cleanPlan(after, slug);
  after = removeLegacyOperatingMode(after);
  after = replaceProtocols(after, slug);
  after = removePlaceholderCodeFences(after);
  after = monochromeStatusFix(after);
  after = addCompatibilityAliases(after, slug);
  after = after.replace(/\n{4,}/g, "\n\n\n").trimEnd() + "\n";
  if (after !== before) {
    fs.writeFileSync(file, after, "utf8");
    changed.push({ slug, before: before.length, after: after.length });
  }
}

console.log(JSON.stringify({ changed }, null, 2));
