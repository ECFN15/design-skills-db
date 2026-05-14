import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const root = process.cwd();
const installRoot = path.join(root, ".agents", "skills");
const generatorPath = path.join(root, "tools", "prepare_top_tier_agents_skills.mjs");

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

function loadProfiles() {
  const source = fs.readFileSync(generatorPath, "utf8");
  const start = source.indexOf("const profiles = ");
  const end = source.indexOf(";\n\nfunction parseFrontmatter", start);
  if (start === -1 || end === -1) throw new Error("Could not locate profiles object");
  const expr = source.slice(start + "const profiles = ".length, end);
  return vm.runInNewContext(`(${expr})`, {});
}

const profiles = loadProfiles();

function pascal(value) {
  return value
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean)
    .map((part) => part[0].toUpperCase() + part.slice(1))
    .join("");
}

function compact(value) {
  return value.replace(/\s+/g, " ").trim();
}

function themeFor(slug) {
  const base = {
    canvas: "#ffffff",
    surface: "#ffffff",
    surfaceMuted: "#f6f7f8",
    text: "#111111",
    textMuted: "#667085",
    line: "#e5e7eb",
    action: "#155dfc",
    actionStrong: "#0036ff",
    radiusControl: "8px",
    radiusCard: "12px",
    radiusPanel: "16px",
    fontDisplay: "var(--font-sans)",
    fontSans: "Geist, Inter, system-ui, sans-serif",
    fontMono: '"Geist Mono", "JetBrains Mono", ui-monospace, monospace',
    shadowFlat: "none",
    shadowCard: "0 1px 2px rgba(0,0,0,.04), 0 0 0 1px rgba(0,0,0,.04)",
    shadowPanel: "0 8px 32px rgba(15,23,42,.08)",
    shadowHero: "0 32px 90px rgba(15,23,42,.12)",
    shadowModal: "0 24px 80px rgba(15,23,42,.16)",
    shadowAction: "0 6px 18px color-mix(in srgb, var(--action), transparent 72%)",
    status: "light",
    specialTailwind: "",
    proofNoun: "proof object",
    motionNoun: "state transition",
  };

  const overrides = {
    "cyber-neon": {
      canvas: "#000000", surface: "#090911", surfaceMuted: "#121225", text: "#f8f7ff", textMuted: "#a9a3c7", line: "rgba(174,133,255,.22)", action: "#9b5cff", actionStrong: "#00e5ff",
      radiusControl: "999px", radiusCard: "6px", radiusPanel: "8px", fontDisplay: '"Space Grotesk", "Rajdhani", var(--font-sans)', shadowCard: "0 0 18px rgba(155,92,255,.28)", shadowPanel: "0 0 32px rgba(0,229,255,.18)", shadowHero: "0 0 96px rgba(155,92,255,.38)", shadowModal: "0 0 80px rgba(0,0,0,.85), 0 0 32px rgba(155,92,255,.25)", status: "dark", specialTailwind: "| `shadow-*` | glow tokens `--shadow-card/panel/hero`, never gray depth |\n| `bg-slate-*`, `bg-gray-*` | `--canvas`, `--surface`, `--surface-muted`; page stage stays `#000000` |", proofNoun: "luminous proof object", motionNoun: "glow/scanline signal"
    },
    "dark-ui": {
      canvas: "#08090c", surface: "#11131a", surfaceMuted: "#171a23", text: "#f7f8fb", textMuted: "#a7adbb", line: "#2a2f3a", action: "#7c8cff", actionStrong: "#a5b4ff",
      radiusControl: "10px", radiusCard: "12px", radiusPanel: "16px", shadowCard: "0 0 0 1px rgba(255,255,255,.06), 0 12px 32px rgba(0,0,0,.22)", shadowPanel: "0 20px 70px rgba(0,0,0,.34)", shadowHero: "0 40px 110px rgba(0,0,0,.48)", status: "dark", specialTailwind: "| `bg-black` everywhere | stepped surface ladder: `--canvas`, `--surface`, `--surface-muted` |\n| `text-gray-500` on core labels | `--text-muted` only for secondary metadata |", proofNoun: "dark product surface", motionNoun: "panel depth transition"
    },
    "editorial-minimal": { canvas: "#f8f6f1", surface: "#ffffff", surfaceMuted: "#eee9df", text: "#151515", textMuted: "#6f6a62", line: "#d8d2c7", action: "#151515", actionStrong: "#000000", radiusControl: "4px", radiusCard: "6px", radiusPanel: "0px", fontDisplay: '"Tiempos Text", Georgia, serif', shadowCard: "inset 0 -1px 0 var(--line)", shadowPanel: "inset 0 0 0 1px var(--line)", shadowHero: "none", proofNoun: "captioned media or editorial index", motionNoun: "quiet text/image reveal" },
    "editorial-type": { canvas: "#ffffff", surface: "#ffffff", surfaceMuted: "#f4f2ef", text: "#272727", textMuted: "#717171", line: "#d9d5cf", action: "#c52910", actionStrong: "#962921", radiusControl: "0px", radiusCard: "0px", radiusPanel: "0px", fontDisplay: '"Messina Sans", "ABC Diatype", Georgia, serif', shadowCard: "inset 0 -1px 0 var(--line)", shadowPanel: "inset 0 0 0 1px var(--line)", shadowHero: "none", proofNoun: "poster title, issue index, or type-led spread", motionNoun: "line-mask/word reveal" },
    "experimental-type": { canvas: "#f4f1e8", surface: "#ffffff", surfaceMuted: "#101010", text: "#111111", textMuted: "#5d5d5d", line: "#111111", action: "#ff4d00", actionStrong: "#000000", radiusControl: "0px", radiusCard: "0px", radiusPanel: "0px", fontDisplay: '"Obviously", "Space Grotesk", Impact, sans-serif', shadowCard: "inset 0 0 0 1px var(--line)", shadowPanel: "8px 8px 0 var(--text)", shadowHero: "none", specialTailwind: "| `tracking-widest`, `uppercase` | only for specimen labels, never body copy |\n| `w-screen` huge type | clamp + `overflow-wrap:anywhere` safety |", proofNoun: "typographic experiment object", motionNoun: "variable-axis or kinetic type behavior" },
    "expressive-brand": { canvas: "#fff7ed", surface: "#ffffff", surfaceMuted: "#ffe8d6", text: "#171312", textMuted: "#705f58", line: "#f4c7aa", action: "#ff4b7d", actionStrong: "#111111", radiusControl: "999px", radiusCard: "18px", radiusPanel: "28px", fontDisplay: '"Recoleta", "Fraunces", var(--font-sans)', shadowPanel: "0 18px 60px rgba(255,75,125,.18)", shadowHero: "0 40px 110px rgba(255,75,125,.24)", proofNoun: "brand motif plus product proof", motionNoun: "brand behavior loop" },
    "geometric-modern": { canvas: "#f6f4ed", surface: "#ffffff", surfaceMuted: "#e8e2d6", text: "#111111", textMuted: "#625e55", line: "#111111", action: "#111111", actionStrong: "#000000", radiusControl: "0px", radiusCard: "0px", radiusPanel: "0px", fontDisplay: '"Space Grotesk", "Suisse Intl", var(--font-sans)', shadowCard: "inset 0 0 0 1px var(--line)", shadowPanel: "inset 0 0 0 2px var(--line)", shadowHero: "none", proofNoun: "geometric grid or modular proof", motionNoun: "grid/shape transition" },
    "glossy-modern": { canvas: "#f7f8fb", surface: "rgba(255,255,255,.82)", surfaceMuted: "rgba(244,247,252,.72)", text: "#111827", textMuted: "#667085", line: "rgba(15,23,42,.12)", action: "#6d5dfc", actionStrong: "#4f39f6", radiusControl: "999px", radiusCard: "18px", radiusPanel: "28px", shadowCard: "0 1px 0 rgba(255,255,255,.9) inset, 0 12px 30px rgba(15,23,42,.08)", shadowPanel: "0 24px 80px rgba(15,23,42,.14)", shadowHero: "0 42px 120px rgba(109,93,252,.22)", specialTailwind: "| `backdrop-blur-*` | only fixed/sticky/isolated panels; never scrolling body slabs |\n| `shadow-xl` | `--shadow-panel` plus specular inset highlight |", proofNoun: "layered glass product frame", motionNoun: "specular sweep or glass depth transition" },
    "high-contrast": { canvas: "#ffffff", surface: "#ffffff", surfaceMuted: "#000000", text: "#000000", textMuted: "#444444", line: "#000000", action: "#ff4d00", actionStrong: "#000000", radiusControl: "0px", radiusCard: "0px", radiusPanel: "0px", fontDisplay: '"Arial Narrow", "Space Grotesk", var(--font-sans)', shadowCard: "inset 0 0 0 2px var(--line)", shadowPanel: "inset 0 0 0 3px var(--line)", shadowHero: "none", specialTailwind: "| `shadow-*` | border/inversion tiers; shadows are not the main depth tool |\n| `text-gray-*` | only metadata; core text is `--text` or inversion |", proofNoun: "inverted poster, table, or hard-edge proof", motionNoun: "inversion/border transition" },
    "high-end-design": { canvas: "#f8f3ea", surface: "#ffffff", surfaceMuted: "#ece4d8", text: "#17150e", textMuted: "#756d62", line: "#d9cfc0", action: "#17150e", actionStrong: "#000000", radiusControl: "999px", radiusCard: "8px", radiusPanel: "16px", fontDisplay: '"Canela", "Tiempos Text", Georgia, serif', shadowCard: "0 1px 0 rgba(255,255,255,.75) inset, 0 12px 38px rgba(23,21,14,.06)", shadowPanel: "0 28px 90px rgba(23,21,14,.10)", shadowHero: "0 44px 130px rgba(23,21,14,.14)", proofNoun: "material/product/gallery proof", motionNoun: "refined image/material reveal" },
    "light-ui": { canvas: "#fbfcfd", surface: "#ffffff", surfaceMuted: "#f2f5f8", text: "#111827", textMuted: "#667085", line: "#dfe4ea", action: "#2563eb", actionStrong: "#1d4ed8", radiusControl: "10px", radiusCard: "14px", radiusPanel: "18px", proofNoun: "white app shell or data surface", motionNoun: "light state transition" },
    "minimal-design": { canvas: "#faf9f6", surface: "#ffffff", surfaceMuted: "#f1efea", text: "#151515", textMuted: "#6b6760", line: "#ded9cf", action: "#151515", actionStrong: "#000000", radiusControl: "6px", radiusCard: "8px", radiusPanel: "10px", shadowCard: "inset 0 0 0 1px var(--line)", shadowPanel: "inset 0 0 0 1px var(--line)", shadowHero: "none", proofNoun: "object, index, or restrained proof table", motionNoun: "minimal state change" },
    "monochrome-ui": { canvas: "#ffffff", surface: "#f7f7f7", surfaceMuted: "#e9e9e9", text: "#000000", textMuted: "#5f5f5f", line: "#111111", action: "#000000", actionStrong: "#000000", radiusControl: "8px", radiusCard: "10px", radiusPanel: "12px", shadowCard: "inset 0 0 0 1px #cfcfcf", shadowPanel: "inset 0 0 0 1px #111111", shadowHero: "none", specialTailwind: "| `bg-blue-*`, `text-purple-*` | forbidden except critical semantic alerts |\n| `shadow-*` | gray border, inversion, or hatch tier |", proofNoun: "gray-scale table, shell, or editorial object", motionNoun: "inversion/underline transition" },
    "motion": { canvas: "#0b0b10", surface: "#151622", surfaceMuted: "#202236", text: "#f7f7ff", textMuted: "#b8bad0", line: "rgba(255,255,255,.12)", action: "#8b5cf6", actionStrong: "#22d3ee", radiusControl: "999px", radiusCard: "18px", radiusPanel: "28px", shadowCard: "0 18px 50px rgba(0,0,0,.28)", shadowPanel: "0 32px 90px rgba(0,0,0,.38)", shadowHero: "0 60px 150px rgba(139,92,246,.30)", status: "dark", specialTailwind: "| `animate-*` | named motion primitive with purpose, duration, cleanup |\n| `transition-all` | explicit transform/opacity/color only |", proofNoun: "animated product/narrative object", motionNoun: "declared motion primitive" },
    "pastel": { canvas: "#fff8f2", surface: "#ffffff", surfaceMuted: "#ffe8f0", text: "#252018", textMuted: "#746a62", line: "#f2d8c8", action: "#ff7aa2", actionStrong: "#7c5cff", radiusControl: "999px", radiusCard: "24px", radiusPanel: "32px", fontDisplay: '"Nunito Sans", "Recoleta", var(--font-sans)', shadowCard: "0 10px 28px rgba(64,48,36,.08)", shadowPanel: "0 22px 70px rgba(255,122,162,.16)", shadowHero: "0 42px 120px rgba(124,92,255,.18)", proofNoun: "soft guided product card", motionNoun: "gentle buoyant transition" },
    "playful-design": { canvas: "#fff7da", surface: "#ffffff", surfaceMuted: "#ffe9a8", text: "#17120f", textMuted: "#725f52", line: "#1f1712", action: "#ff5a1f", actionStrong: "#111111", radiusControl: "999px", radiusCard: "28px", radiusPanel: "40px", fontDisplay: '"Baloo 2", "Cooper Black", var(--font-sans)', shadowCard: "0 6px 0 #17120f", shadowPanel: "0 10px 0 #17120f", shadowHero: "0 14px 0 #17120f, 0 32px 70px rgba(23,18,15,.16)", specialTailwind: "| `shadow-*` | chunky tactile shadow tier, not soft elevation |\n| `scale-*`, `bounce` | press/progress feedback only, never constant motion |", proofNoun: "tactile progress/product object", motionNoun: "press/bounce/reward transition" },
    "serif-display": { canvas: "#fbf7ef", surface: "#ffffff", surfaceMuted: "#eee5d7", text: "#251b16", textMuted: "#76685e", line: "#d6c7b8", action: "#251b16", actionStrong: "#000000", radiusControl: "999px", radiusCard: "8px", radiusPanel: "12px", fontDisplay: '"Canela", "Cormorant Garamond", Georgia, serif', shadowCard: "0 12px 38px rgba(37,27,22,.06)", shadowPanel: "0 28px 80px rgba(37,27,22,.10)", shadowHero: "none", proofNoun: "serif hero, chapter image, or product spread", motionNoun: "line-mask/image fade" },
    "soft-gradients": { canvas: "#fbfbff", surface: "rgba(255,255,255,.86)", surfaceMuted: "rgba(246,246,255,.72)", text: "#1f2430", textMuted: "#697082", line: "rgba(105,112,130,.18)", action: "#7c5cff", actionStrong: "#4f39f6", radiusControl: "999px", radiusCard: "20px", radiusPanel: "30px", shadowCard: "0 12px 36px rgba(89,80,180,.10)", shadowPanel: "0 28px 90px rgba(89,80,180,.16)", shadowHero: "0 60px 160px rgba(124,92,255,.24)", specialTailwind: "| `from-*`, `via-*`, `to-*` | named gradient role: atmosphere, divider, proof glow, CTA |\n| `blur-*` | protected content surface only, never readability patch |", proofNoun: "protected content panel or calm UI frame", motionNoun: "ambient gradient drift" },
    "technical-sans": { canvas: "#ffffff", surface: "#f7f9fc", surfaceMuted: "#eef3f8", text: "#111827", textMuted: "#617083", line: "#d8e0ea", action: "#155dfc", actionStrong: "#0036ff", radiusControl: "8px", radiusCard: "10px", radiusPanel: "14px", fontDisplay: '"Aeonik", "Suisse Intl", var(--font-sans)', proofNoun: "code/API/diagram proof", motionNoun: "command/deploy transition" },
    "technical-ui": { canvas: "#f7f8fa", surface: "#ffffff", surfaceMuted: "#eef2f4", text: "#101828", textMuted: "#5d6673", line: "#d7dee5", action: "#1c5d5f", actionStrong: "#0e4749", radiusControl: "8px", radiusCard: "10px", radiusPanel: "12px", fontDisplay: "var(--font-sans)", proofNoun: "workstation shell or table state", motionNoun: "state/workflow transition" },
    "utilitarian": { canvas: "#ffffff", surface: "#f8f8f8", surfaceMuted: "#eeeeee", text: "#111111", textMuted: "#555555", line: "#d0d0d0", action: "#111111", actionStrong: "#000000", radiusControl: "4px", radiusCard: "6px", radiusPanel: "8px", shadowCard: "inset 0 0 0 1px var(--line)", shadowPanel: "inset 0 0 0 1px #bdbdbd", shadowHero: "none", proofNoun: "admin table/form/settings surface", motionNoun: "state confirmation" },
    "vibrant-accents": { canvas: "#ffffff", surface: "#ffffff", surfaceMuted: "#f8fafd", text: "#061b31", textMuted: "#50617a", line: "#e5edf5", action: "#533afd", actionStrong: "#3b22d8", radiusControl: "8px", radiusCard: "12px", radiusPanel: "18px", shadowCard: "0 8px 28px rgba(83,58,253,.08)", shadowPanel: "0 22px 70px rgba(83,58,253,.14)", shadowHero: "0 44px 120px rgba(83,58,253,.18)", specialTailwind: "| `bg-purple-*`, `bg-lime-*`, `text-orange-*` | map to action/category/status roles before use |\n| `from-*`, `to-*` | contained gradient role, not page-wide color chaos |", proofNoun: "neutral product proof with vivid accent role", motionNoun: "accent sweep/category transition" },
  };

  return { ...base, ...(overrides[slug] || {}) };
}

function statusVars(t) {
  if (t.status === "dark") {
    return {
      successBg: "rgba(52,211,153,.14)", successFg: "#34d399",
      infoBg: "rgba(96,165,250,.14)", infoFg: "#60a5fa",
      warningBg: "rgba(251,191,36,.16)", warningFg: "#fbbf24",
      dangerBg: "rgba(248,113,113,.16)", dangerFg: "#f87171",
      neutralBg: "rgba(255,255,255,.08)", neutralFg: t.textMuted,
    };
  }
  return {
    successBg: "#ecfdf5", successFg: "#047857",
    infoBg: "#eef4ff", infoFg: "#3152d4",
    warningBg: "#fffbeb", warningFg: "#b45309",
    dangerBg: "#fff1f2", dangerFg: "#b91c1c",
    neutralBg: "#f3f4f6", neutralFg: t.textMuted,
  };
}

function designPlan(profile, theme) {
  return `## Mandatory \`<design_plan>\`

Before substantial UI code, output a compact \`<design_plan>\` block. Include:

1. **Use case:** page/app type, audience, primary action, emotional target.
2. **Style direction:** one ${profile.display} archetype below.
3. **Operating mode:** density, motion, decoration, contrast, radius, and asset burden.
4. **First viewport:** nav type, H1 width/line strategy, ${theme.proofNoun}, CTA treatment, next-section hint.
5. **System contracts:** type, color, surface, radius, spacing, depth, state, and motion tokens.
6. **Component plan:** at least four concrete ${profile.display} components with states.
7. **Motion plan:** ${theme.motionNoun}, timing, performance guardrail, and reduced-motion fallback.
8. **Anti-slop sweep:** top three failure modes for this style and how you will avoid them.

If the request is tiny, do this mentally and keep the final answer concise.`;
}

function operatingMode(profile) {
  if (!profile.mode) return "";
  return `## Style Operating Mode

| Control | Setting |
| --- | --- |
| density | ${profile.mode.density} |
| motion | ${profile.mode.motion} |
| decoration | ${profile.mode.decoration} |
| contrast | ${profile.mode.contrast} |
| radius | ${profile.mode.radius} |
| type | ${profile.mode.type} |
| assets | ${profile.mode.assets} |`;
}

function signatureSystem(profile) {
  return `## Signature System

${profile.signatures.map((item) => `- ${item}`).join("\n")}`;
}

function differentiation(slug, profile, theme) {
  const neighbors = {
    "cyber-neon": "Use `dark-ui` for calmer dark products; use `technical-ui` for dense tools where glow would hurt repeated work.",
    "dark-ui": "Use `cyber-neon` when emitted light and kinetic signal are the identity; use `technical-ui` when workflow density matters more than atmosphere.",
    "editorial-minimal": "Use `minimal-design` when restraint is not editorial; use `editorial-type` when type should be louder and structural.",
    "editorial-type": "Use `editorial-minimal` for quieter authored pages; use `serif-display` when one refined serif voice is the luxury object.",
    "experimental-type": "Use `editorial-type` for readable magazine systems; use this only when a controlled typographic experiment is the identity.",
    "expressive-brand": "Use `vibrant-accents` when color is the main system; use `playful-design` when tactility, reward, or game logic drives behavior.",
    "geometric-modern": "Use `minimal-design` for quieter restraint; use this when geometry actively structures navigation, grouping, sequencing, or brand memory.",
    "glossy-modern": "Use `light-ui` for bright clarity without material depth; use this when gloss, glass, highlights, or layered product frames define the surface.",
    "high-contrast": "Use `monochrome-ui` for reduced operational systems; use this when stark poster tension and inversion are the identity.",
    "high-end-design": "Use `serif-display` for type-led elegance; use this when material proof, product object, imagery, and luxury pacing must work together.",
    "light-ui": "Use `clean-saas` when SaaS proof economics dominate; use this when bright tactility, docs, or approachable app surfaces are the main challenge.",
    "minimal-design": "Use `editorial-minimal` for authored publication rhythm; use this when essential structure, object proof, and quiet utility are the identity.",
    "monochrome-ui": "Use `high-contrast` for poster impact; use this when grayscale systems, tables, controls, and achromatic states must stay operational.",
    "motion": "Use a static visual skill when motion is decorative only; use this when movement is part of the information architecture.",
    "pastel": "Use `playful-design` for tactile game-like surfaces; use this when softness, reassurance, and friendly color paths are the emotional target.",
    "playful-design": "Use `pastel` for calmer softness; use this when progress, tactile controls, and playful feedback improve comprehension.",
    "serif-display": "Use `editorial-type` for magazine systems; use this when serif display type is the premium brand voice.",
    "soft-gradients": "Use `glossy-modern` for material glass; use this when gradients create atmosphere, section rhythm, or soft product depth.",
    "technical-sans": "Use `technical-ui` for operational work surfaces; use this for technical marketing, docs, code proof, and developer product identity.",
    "technical-ui": "Use `technical-sans` for technical landing/docs; use this when users operate filters, tables, logs, prompts, and inspectors.",
    "utilitarian": "Use `technical-ui` when richer technical chrome helps; use this when task completion and visible controls matter more than visual identity.",
    "vibrant-accents": "Use `expressive-brand` when voice/motif is the identity; use this when governed vivid color is the main differentiator.",
  };
  return `## Differentiation

Use ${profile.display} when ${profile.use}. If removing the ${theme.proofNoun}, token rules, or signature components leaves a generic page, this skill is the right lens and the signature object must stay. ${neighbors[slug] || ""}`;
}

function executionContract(slug, profile, theme) {
  const st = statusVars(theme);
  const displayFamily = theme.fontDisplay === "var(--font-sans)" ? "var(--font-sans)" : `${theme.fontDisplay}`;
  const prefix = slug.split("-").map((p) => p[0]).join("");
  const special = theme.specialTailwind ? `\n${theme.specialTailwind}` : "";
  return `### Execution Token Contract

Every ${profile.display} build must declare these tokens before component styling. Source packs can tune values, but components must use this vocabulary.

\`\`\`css
:root {
  --canvas: ${theme.canvas};
  --surface: ${theme.surface};
  --surface-muted: ${theme.surfaceMuted};
  --text: ${theme.text};
  --text-muted: ${theme.textMuted};
  --line: ${theme.line};
  --action: ${theme.action};
  --action-strong: ${theme.actionStrong};
  --radius-control: ${theme.radiusControl};
  --radius-card: ${theme.radiusCard};
  --radius-panel: ${theme.radiusPanel};
  --font-sans: ${theme.fontSans};
  --font-display: ${displayFamily};
  --font-mono: ${theme.fontMono};
  --type-mono-xs: 500 10px/1.4 var(--font-mono);
  --type-mono-sm: 500 11px/1.4 var(--font-mono);
  --type-meta: 500 12px/1.45 var(--font-sans);
  --type-body-sm: 400 13px/1.55 var(--font-sans);
  --type-body: 400 15px/1.62 var(--font-sans);
  --type-ui: 600 14px/1.4 var(--font-sans);
  --type-card: 600 20px/1.18 var(--font-sans);
  --type-section-sm: 600 28px/1.08 var(--font-display);
  --type-section: 600 42px/1.02 var(--font-display);
  --type-display: 600 clamp(46px, 8vw, 82px)/.92 var(--font-display);
  --track-mono-xs: .16em;
  --track-mono-sm: .10em;
  --track-section: -.025em;
  --track-display: -.04em;
  --s-1: 4px;
  --s-2: 8px;
  --s-3: 12px;
  --s-4: 16px;
  --s-5: 20px;
  --s-6: 24px;
  --s-7: 32px;
  --s-8: 48px;
  --s-9: 64px;
  --s-10: 80px;
  --s-11: 96px;
  --shadow-flat: ${theme.shadowFlat};
  --shadow-card: ${theme.shadowCard};
  --shadow-panel: ${theme.shadowPanel};
  --shadow-hero: ${theme.shadowHero};
  --shadow-modal: ${theme.shadowModal};
  --shadow-action: ${theme.shadowAction};
  --status-success-bg: ${st.successBg};
  --status-success-fg: ${st.successFg};
  --status-info-bg: ${st.infoBg};
  --status-info-fg: ${st.infoFg};
  --status-warning-bg: ${st.warningBg};
  --status-warning-fg: ${st.warningFg};
  --status-danger-bg: ${st.dangerBg};
  --status-danger-fg: ${st.dangerFg};
  --status-neutral-bg: ${st.neutralBg};
  --status-neutral-fg: ${st.neutralFg};
  --state-hover-bg: color-mix(in srgb, var(--action), var(--surface) 90%);
  --state-selected-bg: color-mix(in srgb, var(--action), var(--surface) 84%);
  --state-focus-ring: 0 0 0 3px color-mix(in srgb, var(--action), transparent 72%);
  --ease-product: cubic-bezier(.2,.8,.2,1);
}
\`\`\`

Pairing rules:

- \`hero-block\`: \`font: var(--type-display)\`, \`letter-spacing: var(--track-display)\`, \`text-wrap: balance\`, \`max-width: 22ch\`.
- \`section-head\`: \`font: var(--type-section)\`, \`letter-spacing: var(--track-section)\`, \`max-width: 18ch\`.
- \`card-block\`: title uses \`--type-card\`, body uses \`--type-body\`, metadata uses \`--type-meta\`.
- \`data-label\`: use \`--type-mono-sm\`, uppercase only for tags, code, coordinates, IDs, or status.
- \`status-pill\`: always uses one \`--status-{role}-bg/fg\` pair plus text, never color alone.

Tailwind to token mapping:

| Tailwind default | ${profile.display} token |
| --- | --- |
| \`text-xs\`, \`text-sm\` | \`--type-body-sm\` or \`--type-meta\` |
| \`text-base\`, \`text-lg\` | \`--type-body\` or \`--type-card\` |
| \`text-2xl\`, \`text-3xl\` | \`--type-card\` or \`--type-section-sm\` |
| \`text-4xl\`, \`text-5xl\` | \`--type-section\` |
| \`text-6xl\`, \`text-7xl\` | \`--type-display\` |
| \`p-3\`, \`p-4\`, \`p-5\` | \`var(--s-3)\`, \`var(--s-4)\`, \`var(--s-5)\` |
| \`gap-3\`, \`gap-4\`, \`gap-6\` | \`var(--s-3)\`, \`var(--s-4)\`, \`var(--s-6)\` |
| \`rounded-md\`, \`rounded-xl\`, \`rounded-2xl\` | \`--radius-control\`, \`--radius-card\`, \`--radius-panel\` |
| \`shadow-sm\`, \`shadow-md\` | \`var(--shadow-card)\` |
| \`shadow-lg\`, \`shadow-xl\` | \`var(--shadow-panel)\` or \`var(--shadow-hero)\` |
| \`shadow-2xl\` | \`var(--shadow-modal)\` |${special}

Status words:

| Role | Words |
| --- | --- |
| \`success\` | Approved, Synced, Live, Paid, Complete, Stable |
| \`info\` | Active, In review, Processing, Current, Draft |
| \`warning\` | Pending, Stale, Slow, Watch, Needs review |
| \`danger\` | Failed, Blocked, Critical, Error, Escalate |
| \`neutral\` | Empty, Disabled, Skipped, Archived, Ready passive |

Token rule: if a value can be expressed by \`${prefix}\`/style tokens, do not invent raw Tailwind scale, arbitrary rgba shadows, or new status hex.`;
}

function componentKit(slug, profile) {
  const prefix = pascal(slug);
  const css = slug.replace(/[^a-z0-9]+/g, "-");
  const components = profile.components || [];
  const hero = pascal(components[0] || `${slug}-hero`);
  const card = pascal(components[1] || `${slug}-card`);
  const rail = pascal(components[2] || `${slug}-rail`);
  return `### Core Component Kit

Use these components before inventing new surfaces. Rename in implementation if needed, but preserve the props, states, and token usage.

\`\`\`tsx
type ${prefix}State = "default" | "hover" | "selected" | "loading" | "empty" | "error" | "success";
type ${prefix}Status = "success" | "info" | "warning" | "danger" | "neutral";

export function ${prefix}StatusPill({ role, children }: { role: ${prefix}Status; children: React.ReactNode }) {
  return <span className="${css}-status-pill" data-role={role}>{children}</span>;
}

export function ${hero}Contract({ state = "default" }: { state?: ${prefix}State }) {
  return <section className="${css}-hero-object" data-state={state} aria-label="${profile.display} proof object" />;
}

export function ${card}Contract({ title, meta, state = "default" }: { title: string; meta: string; state?: ${prefix}State }) {
  return <article className="${css}-card" data-state={state}><span>{meta}</span><strong>{title}</strong></article>;
}

export function ${rail}Contract({ items }: { items: string[] }) {
  return <nav className="${css}-rail">{items.map((item, index) => <button data-active={index === 0} key={item}>{item}</button>)}</nav>;
}

export function ${prefix}SectionHeader({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) {
  return <header className="${css}-section-head"><span>{eyebrow}</span><h2>{title}</h2><p>{children}</p></header>;
}
\`\`\`

\`\`\`css
.${css}-status-pill {
  display: inline-flex;
  width: max-content;
  align-items: center;
  padding: var(--s-1) 10px;
  border-radius: 999px;
  font: var(--type-mono-sm);
  letter-spacing: var(--track-mono-sm);
  background: var(--status-neutral-bg);
  color: var(--status-neutral-fg);
}
.${css}-status-pill[data-role="success"] { background: var(--status-success-bg); color: var(--status-success-fg); }
.${css}-status-pill[data-role="info"] { background: var(--status-info-bg); color: var(--status-info-fg); }
.${css}-status-pill[data-role="warning"] { background: var(--status-warning-bg); color: var(--status-warning-fg); }
.${css}-status-pill[data-role="danger"] { background: var(--status-danger-bg); color: var(--status-danger-fg); }
.${css}-hero-object {
  min-height: clamp(320px, 48vw, 620px);
  border: 1px solid var(--line);
  border-radius: var(--radius-panel);
  background: var(--surface);
  box-shadow: var(--shadow-hero);
  overflow: hidden;
}
.${css}-card {
  display: grid;
  gap: var(--s-2);
  padding: var(--s-6);
  border: 1px solid var(--line);
  border-radius: var(--radius-card);
  background: var(--surface);
  box-shadow: var(--shadow-card);
  transition: background 180ms var(--ease-product), box-shadow 180ms var(--ease-product), transform 180ms var(--ease-product);
}
.${css}-card[data-state="selected"] { background: var(--state-selected-bg); box-shadow: var(--shadow-panel); }
.${css}-card[data-state="loading"] { opacity: .62; pointer-events: none; }
.${css}-card[data-state="error"] { border-color: var(--status-danger-fg); }
.${css}-card > span { font: var(--type-meta); color: var(--text-muted); }
.${css}-card > strong { font: var(--type-card); color: var(--text); }
.${css}-rail { display: flex; flex-wrap: wrap; gap: var(--s-2); }
.${css}-rail button { padding: var(--s-2) var(--s-4); border: 1px solid var(--line); border-radius: var(--radius-control); background: var(--surface); font: var(--type-ui); color: var(--text-muted); }
.${css}-rail button[data-active="true"] { background: var(--state-selected-bg); color: var(--text); box-shadow: var(--state-focus-ring); }
.${css}-section-head { display: grid; gap: var(--s-3); max-width: 760px; }
.${css}-section-head > span { font: var(--type-mono-xs); letter-spacing: var(--track-mono-xs); text-transform: uppercase; color: var(--text-muted); }
.${css}-section-head h2 { margin: 0; font: var(--type-section); letter-spacing: var(--track-section); text-wrap: balance; color: var(--text); }
.${css}-section-head p { margin: 0; font: var(--type-body); color: var(--text-muted); }
@media (max-width: 760px) {
  .${css}-hero-object { min-height: 280px; }
  .${css}-rail { overflow-x: auto; flex-wrap: nowrap; }
}
\`\`\``;
}

function pageProtocols(slug, profile) {
  const prefix = pascal(slug);
  const css = slug.replace(/[^a-z0-9]+/g, "-");
  const comps = (profile.components || []).map(pascal);
  const archetypes = profile.archetypes || [];
  const a0 = archetypes[0]?.[0] || `${profile.display} Landing`;
  const a1 = archetypes[1]?.[0] || `${profile.display} Work Surface`;
  const a2 = archetypes[2]?.[0] || `${profile.display} Conversion`;
  const c0 = comps[0] || `${prefix}HeroObject`;
  const c1 = comps[1] || `${prefix}Card`;
  const c2 = comps[2] || `${prefix}Rail`;
  const c3 = comps[3] || `${prefix}Panel`;
  return `## Complete Page Protocols

\`\`\`tsx
// ${a0}
<main className="${css}-page">
  <${prefix}Nav mode="primary" />
  <${prefix}Hero h1="${profile.display} with a specific point of view" proof={<${c0}Contract state="selected" />} cta="Primary action" />
  <${prefix}SectionHeader eyebrow="Proof" title="${a0} system" />
  <${c1}Contract title="Concrete proof module" meta="real content, not decoration" />
  <${c2}Contract items={["Overview", "Proof", "Details", "Action"]} />
</main>

// ${a1}
<main className="${css}-surface">
  <${prefix}Toolbar filters actions status="active" />
  <${c2}Contract items={["One", "Two", "Three"]} />
  <${c1}Contract title="Stateful module" meta="selected / loading / empty / error" state="selected" />
  <${c3}Contract state="empty" />
</main>

// ${a2}
<main className="${css}-conversion">
  <${prefix}SectionHeader eyebrow="Decision" title="${a2} path" />
  <${c1}Contract title="Offer, plan, product, story, or record" meta="price, date, owner, category, or source" />
  <${prefix}StatusPill role="info">In review</${prefix}StatusPill>
  <${prefix}CTA state="default">Continue</${prefix}CTA>
</main>
\`\`\``;
}

function absoluteBans(profile) {
  const bans = profile.bans || [];
  return `## Absolute Bans

${[
  ...bans,
  "No raw Tailwind typography, spacing, radius, color, or shadow defaults when a style token exists.",
  "No generic centered hero without the style's required proof/media/type object.",
  "No status colors without semantic role mapping and visible text.",
  "No component states left implicit: include hover, focus-visible, selected, loading, empty, error, success where relevant.",
].map((item) => `- ${item}`).join("\n")}`;
}

function referenceUse() {
  return `## Reference Use

For deeper source extraction, load \`references/refero-style-database.md\`. For source-specific inspiration, load only the selected file under \`references/sources/\`.`;
}

function checklist(profile, theme) {
  return `## Pre-Output Checklist

- First viewport contains a real ${theme.proofNoun}.
- One ${profile.display} archetype is clearly dominant.
- Execution tokens are declared and component CSS uses them.
- Typography uses named pairings, not raw Tailwind defaults.
- Spacing uses \`--s-*\` or style tokens, not mixed arbitrary padding.
- Radius, depth, and state colors use the token contract.
- Status labels use role mapping plus \`--status-{role}-bg/fg\`.
- Components include hover, focus-visible, selected, loading, empty, error, and success where relevant.
- Motion maps to ${theme.motionNoun} and has a reduced-motion fallback.
- Mobile layout preserves the style without overflow, unreadable text, or hidden controls.`;
}

function removeSection(text, headingRegex) {
  return text.replace(new RegExp(`\\n## ${headingRegex}[\\s\\S]*?(?=\\n## |\\n# |$)`, "i"), "");
}

function replaceOrInsertAfter(text, section, anchorRegex) {
  const anchor = text.match(anchorRegex);
  if (!anchor) return `${text.trim()}\n\n${section}\n`;
  const idx = anchor.index + anchor[0].length;
  return `${text.slice(0, idx).trimEnd()}\n\n${section}\n${text.slice(idx).trimStart()}`;
}

function upgrade(text, slug) {
  const profile = profiles[slug];
  if (!profile) throw new Error(`Missing profile for ${slug}`);
  const theme = themeFor(slug);

  text = text
    .replace(/\r\n/g, "\n")
    .replace(/^## Mandatory `?<design_plan>`?[\s\S]*?(?=\n## |$)/m, "")
    .replace(/^## Mandatory Design Plan[\s\S]*?(?=\n## |$)/m, "")
    .replace(/^## Design Plan[\s\S]*?(?=\n## |$)/m, "")
    .replace(/^## Working Contract[\s\S]*?(?=\n## |$)/m, "")
    .replace(/^## Operating Protocol[\s\S]*?(?=\n## |$)/m, "");

  text = replaceOrInsertAfter(text, designPlan(profile, theme), /^# .+$/m);

  if (!/## Style Operating Mode/.test(text)) {
    text = replaceOrInsertAfter(text, operatingMode(profile), /## Non-Negotiable Principles[\s\S]*?(?=\n## |$)|## Core Principles[\s\S]*?(?=\n## |$)|## Core Directive[\s\S]*?(?=\n## |$)/);
  }

  if (!/## Signature System/.test(text)) {
    text = replaceOrInsertAfter(text, signatureSystem(profile), /## Style Operating Mode[\s\S]*?(?=\n## |$)|## Operating Mode[\s\S]*?(?=\n## |$)/);
  }

  text = removeSection(text, "Differentiation");
  text = replaceOrInsertAfter(text, differentiation(slug, profile, theme), /## Signature System[\s\S]*?(?=\n## |$)|### Raw Archetype Packs[\s\S]*?(?=\n## |$)|## Source Archetypes[\s\S]*?(?=\n## |$)/);

  if (!/### Execution Token Contract/.test(text)) {
    const contract = executionContract(slug, profile, theme);
    text = replaceOrInsertAfter(text, contract, /## Semantic Token Packs[\s\S]*?(?=\n## |$)|## Semantic Palette And Tokens[\s\S]*?(?=\n## |$)|## Semantic Tokens[\s\S]*?(?=\n## |$)|## Named Palettes[\s\S]*?(?=\n## |$)|## Color Governance[\s\S]*?(?=\n## |$)/);
  }

  if (!/### Core Component Kit/.test(text)) {
    text = replaceOrInsertAfter(text, componentKit(slug, profile), /## Signature Components[\s\S]*?(?=\n### |## |$)|## Component Arsenal[\s\S]*?(?=\n### |## |$)|## Component Signatures[\s\S]*?(?=\n### |## |$)/);
  }

  text = removeSection(text, "Complete Page Protocols");
  text = removeSection(text, "Page Protocols");
  text = removeSection(text, "Page Patterns");
  text = removeSection(text, "Complete Page Patterns");
  text = removeSection(text, "Product Types");
  text = replaceOrInsertAfter(text, pageProtocols(slug, profile), /## Motion System[\s\S]*?(?=\n## |$)|## Motion Grammar[\s\S]*?(?=\n## |$)|## Motion Rules[\s\S]*?(?=\n## |$)|## Motion Patterns[\s\S]*?(?=\n## |$)/);

  if (!/## Absolute Bans/.test(text)) {
    text = replaceOrInsertAfter(text, absoluteBans(profile), /## Complete Page Protocols[\s\S]*?(?=\n## |$)/);
  }

  text = removeSection(text, "Reference Use");
  text = replaceOrInsertAfter(text, referenceUse(), /## Absolute Bans[\s\S]*?(?=\n## |$)|## Anti-Slop[\s\S]*?(?=\n## |$)|## Anti-Slop Rules[\s\S]*?(?=\n## |$)|## Anti-Patterns[\s\S]*?(?=\n## |$)/);

  text = removeSection(text, "Pre-Output Checklist");
  text = removeSection(text, "Implementation Checklist");
  text = removeSection(text, "QA Checklist");
  text = `${text.trim()}\n\n${checklist(profile, theme)}\n`;

  return text.replace(/\n{4,}/g, "\n\n\n");
}

const changed = [];
for (const slug of targets) {
  const file = path.join(installRoot, slug, "SKILL.md");
  const before = fs.readFileSync(file, "utf8");
  const after = upgrade(before, slug);
  if (after !== before) {
    fs.writeFileSync(file, after, "utf8");
    changed.push({ slug, before: before.length, after: after.length });
  }
}

const ensured = [];
for (const slug of targets) {
  const profile = profiles[slug];
  const theme = themeFor(slug);
  const file = path.join(installRoot, slug, "SKILL.md");
  const before = fs.readFileSync(file, "utf8");
  let after = before;

  if (!after.includes("### Execution Token Contract")) {
    after = replaceOrInsertAfter(
      after,
      executionContract(slug, profile, theme),
      /## Differentiation[\s\S]*?(?=\n## |$)|## Color And Surface Contracts[\s\S]*?(?=\n## |$)|## Palette Pairings And Contrast[\s\S]*?(?=\n## |$)|## Semantic Token Starter[\s\S]*?(?=\n## |$)/
    );
  }

  if (!after.includes("### Core Component Kit")) {
    after = replaceOrInsertAfter(
      after,
      componentKit(slug, profile),
      /## Component Contracts[\s\S]*?(?=\n## |$)|## Signature Components[\s\S]*?(?=\n## |$)|## Component Arsenal[\s\S]*?(?=\n## |$)|## Component Signatures[\s\S]*?(?=\n## |$)/
    );
  }

  if (after !== before) {
    fs.writeFileSync(file, after, "utf8");
    ensured.push({ slug, before: before.length, after: after.length });
  }
}

console.log(JSON.stringify({ changed, ensured }, null, 2));
