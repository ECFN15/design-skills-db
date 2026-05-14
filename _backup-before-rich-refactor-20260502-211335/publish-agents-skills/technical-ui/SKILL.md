---
name: technical-ui
description: "Build precise technical interfaces: SaaS workstations, dashboards, consoles, code/data panels, engineering labs, research tools, AI inputs, modular control systems, and high-trust product UIs with rigorous component behavior. USE FOR: technical interfaces, product dashboards, AI tools, developer consoles, workflow apps, dense control surfaces. DO NOT USE FOR: unrelated backend work, non-visual tasks, or when an existing product design system must be followed exactly."
---

# Technical UI Skill

## Core Directive

You are a senior frontend design engineer specializing in Technical UI. The output must feel precise, operational, structured, intelligent, focused, trustworthy. Do not merely skin default components with a color palette. Build a visual operating system: layout, typography, color roles, component geometry, imagery, motion, interaction states, responsive behavior, and proof content must all point in the same direction.

Use this skill for technical interfaces, product dashboards, AI tools, developer consoles, workflow apps, dense control surfaces.


## Mandatory `<design_plan>`

Before writing code for a substantial UI, output a compact `<design_plan>` block. This is not optional; it prevents lazy default layouts.

Include:

1. **Use case:** product type, audience, primary action, and emotional target.
2. **Style direction:** one Technical UI sub-direction chosen from the archetypes below.
3. **Visual operating mode:** density, motion intensity, decoration budget, contrast mode, radius rule, and asset burden.
4. **First viewport:** nav type, H1 width/line strategy, hero proof object, CTA treatment, next-section hint.
5. **System contracts:** type, color, surface, geometry, evidence, and interaction state rules.
6. **Component plan:** at least four concrete components from the arsenal, with states.
7. **Motion plan:** which elements move, why they move, and reduced-motion fallback.
8. **Anti-slop sweep:** name the top three failure modes for this style and how you will avoid them.

If the request is tiny, do this mentally and keep the final answer concise. If the request asks for a full page/app, include the block.

## Non-Negotiable Principles

- Prioritize workflow ergonomics, state clarity, filters, controls, and information density.
- Technical detail should support decisions, not decorate.
- Repeated controls, tables, panels, and command surfaces must be consistent.


## Style Operating Mode

| Control | Setting |
| --- | --- |
| density | High for apps, medium-high for product pages. |
| motion | Low-medium. State changes, filter transitions, command execution, panel expand/collapse. |
| decoration | Very low. Functional chrome is the design. |
| contrast | Precise contrast tuned for repeated work. |
| radius | 6-10px for dense controls, 12px for major panels. |
| type | Legible sans plus mono for values, logs, code, and coordinates. |
| assets | Tables, charts, logs, controls, workflow diagrams, product screens. |

These controls are binding. If the user's brand or existing codebase conflicts with a setting, preserve the user's constraints but keep the underlying Technical UI behavior.


## Signature System

Use these as executable rules, not inspiration labels:

- Technical Mode Picker: decide if the UI is workstation, lab, CRM/toolkit, command console, or monitoring surface.
- Control Proximity: filters and commands live near the content they affect.
- State Completeness: loading, syncing, stale, failed, empty, selected, and read-only states must be visible.
- Information Density With Breathing: dense panels need exact spacing, separators, and type contrast.

### Source Direction Matrix

The source URLs and full extracts stay in references. The main skill keeps only transferable lessons.

| Reference | Transferable lesson | Use for |
| --- | --- | --- |
| User Interviews - Technical UI Source Notes | Teal-accented architectural blueprint on pristine parchment. | light |
| ChatGPT - Technical UI Source Notes | Frosted glass workstation. | light |
| Attio - Technical UI Source Notes | Precision Digital Toolkit. | light |
| Telepathic Instruments - Technical UI Source Notes | Techno-futurist laboratory. | light |
| ToDesktop - Technical UI Source Notes | Digital engineering lab. | mixed |


## Raw-Derived Technical Signals

These signals are distilled from the large Refero database bundled in `references/`. They prevent the skill from forgetting the concrete values that made the references specific. Use them as a vocabulary, not as a command to use every value.

| Signal | Raw values to keep in mind |
| --- | --- |
| Color tokens | `#ffffff` (30x), `#000000` (10x), `#1c1d1f` (10x), `#05061b` (8x), `#0d0d0d` (8x), `#d3d8df` (8x), `#407ff2` (7x), `#e4e7ec` (7x), `#5d5d5d` (6x), `#f9f9f9` (6x), `#0036ff` (5x), `#156152` (5x) |
| Pixel/rhythm values | `10px` (19x), `24px` (18x), `8px` (17x), `14px` (13x), `16px` (12x), `1px` (12x), `48px` (12x), `12px` (11x), `20px` (9x), `28px` (9x), `64px` (8x), `6px` (7x), `2px` (6x), `999px` (6x) |
| Radius declarations | `border-radius: 10px` (4x), `border-radius: 999px` (3x), `--radius-pill: 999px` (2x), `border-radius: 0` (2x), `border-radius: 24px` (2x), `border-radius: 8px` (2x), `--radius-button: 10px` (1x), `--radius-button: 48px` (1x), `--radius-card: 24px` (1x), `--radius-card: 8px` (1x) |
| Typography declarations | `font-weight: 500` (5x), `font-family: "Geist Mono", ui-monospace, monospace` (2x), `font-size: 13px` (2x), `font-family: Inter, system-ui, sans-serif` (1x), `font-family: ui-monospace, monospace` (1x), `font-size: 12px` (1x), `font-size: 14px` (1x), `font-size: 15px` (1x), `font-weight: 600` (1x), `line-height: 1.6` (1x) |
| Surface/effect declarations | `background: #ffffff` (6x), `border: 0` (5x), `background: transparent` (2x), `border: #e4e7ec` (2x), `border: 1px solid #d3d8df` (2x), `border: 1px solid #e4e7ec` (2x), `background: #0036ff` (1x), `background: #05061b` (1x), `background: #1c1d1f` (1x), `background: #1c5d5f` (1x), `background: #ececec` (1x), `background: #f3f4f6` (1x), `background: #ff6c2f` (1x), `background: var(--tech-bg)` (1x) |
| Motion declarations | `transform: translateY(1px)` (1x) |

### Raw-Derived Token Starter

```css
:root {
  --source-color-1: #ffffff;
  --source-color-2: #000000;
  --source-color-3: #1c1d1f;
  --source-color-4: #05061b;
  --source-color-5: #0d0d0d;
  --source-color-6: #d3d8df;
  --source-color-7: #407ff2;
  --source-color-8: #e4e7ec;
  --source-space-1: 10px;
  --source-space-2: 24px;
  --source-space-3: 8px;
  --source-space-4: 14px;
  --source-space-5: 16px;
  --source-space-6: 1px;
  --source-space-7: 48px;
  --source-space-8: 12px;
  --source-motion-fast: 140ms;
  --source-motion-medium: 420ms;
  --source-ease-out: cubic-bezier(0.16, 1, 0.30, 1);
}
```

How to use this section:

- Start from the repeated raw values, then narrow them to a small project-specific token set.
- If a raw value appears often but fights the user brand, translate its role rather than copying the exact value.
- Preserve the style's distinctive geometry, color budget, typography pressure, and motion behavior before inventing new decoration.
- When building a substantial page, search `references/refero-style-database.md` for the strongest raw signal above and pull the adjacent component or animation rule.


## First Viewport Protocol

The first viewport must instantly say "Technical UI" without needing an explanatory paragraph. Build it from:

- **Navigation:** styled in the same geometry as the rest of the system. It can be sparse, dense, floating, docked, editorial, or tool-like, but it cannot be default.
- **Primary claim:** an H1 with a clear product/client/category noun. Avoid abstract slogans unless the brand is already famous.
- **Hero proof:** show an object, app shell, marketplace grid, workflow, image, material, diagram, or motion stage that proves the page is real.
- **Primary action:** one obvious CTA, one secondary action if needed, both with readable contrast and defined hover/focus states.
- **Next-section hint:** the bottom of the viewport should reveal a sliver of proof, grid, cards, image, table, or chapter continuation.

H1 rule: use a wide container and responsive clamp. For most sites, H1 should be 2-3 lines maximum on desktop. If the style uses poster typography, prove mobile wrapping with 'overflow-wrap:anywhere', 'text-wrap:balance', and a smaller mobile clamp.


## Archetype Picker

Pick one primary archetype per project. Do not average all archetypes into a bland middle.

| Archetype | Layout behavior | Best use |
| --- | --- | --- |
| Workstation | sidebar, toolbar, inspector, main canvas/table | workflow apps |
| Monitoring Console | metrics, incidents, logs, alerts | operations |
| AI Control Surface | prompt/input, context, output, evals | AI tools |
| CRM Toolkit | records, filters, pipeline, activity | business tools |

Selection rule:
- If the user asks for a whole website, choose one archetype for the first viewport and one supporting archetype for the proof/conversion section.
- If the user asks for an app/work surface, prioritize workflow clarity over theatrical hero composition.
- If the user asks for a hero only, still define nav, proof object, CTA, and next-section hint so the hero feels connected to a full page.


## Component Arsenal

Use at least four of these for full-page work. Components must have real content and states; do not create empty decorative blocks.

| Component | Purpose | Required states |
| --- | --- | --- |
| workstation-shell | Reusable style-specific module that carries identity and function. | hover/focus/active plus selected |
| dense-data-table | Dense comparison, operational data, or scannable records. | loading/empty/error plus success |
| command-palette | Reusable style-specific module that carries identity and function. | responsive compact/expanded variants |
| filter-builder | Browsing, sorting, narrowing, and marketplace/product discovery. | keyboard focus and reduced-motion behavior |
| log-stream | Reusable style-specific module that carries identity and function. | hover/focus/active plus selected |
| inspector-panel | Reusable style-specific module that carries identity and function. | loading/empty/error plus success |
| alert-timeline | Reusable style-specific module that carries identity and function. | responsive compact/expanded variants |
| stateful-empty-view | Reusable style-specific module that carries identity and function. | keyboard focus and reduced-motion behavior |

Component construction rules:

- Build components with stable dimensions: 'aspect-ratio', explicit grid tracks, 'minmax(0, 1fr)', and responsive 'clamp()' spacing.
- Keep hover states inside the component bounds; hover cannot resize neighboring layout.
- Put icons in icon buttons where appropriate, but do not replace clear labels for destructive or purchasing actions.
- For forms and marketplace/product flows, include validation, disabled, loading, empty, and success behavior.
- For cards, decide whether they are informational, navigational, selectable, draggable, or purchasable before styling them.


## Component Blueprints

Use these blueprints when implementing the arsenal above. They turn the style into buildable UI, not just visual direction.

### workstation-shell

Purpose: Reusable style-specific module that carries identity and function.

Structure:
- Start with real content: title, meaningful body copy or data, primary affordance, and one proof/detail element.
- Use a stable grid or aspect-ratio shell. The component should not change outer dimensions on hover, selection, loading, or error.
- Use Technical UI surface rules instead of default card styling.

States:
- Required: Idle, hover, focus-visible, active/pressed, selected/current, disabled.
- Visual state must be more than opacity. Combine border, fill, type weight, icon/label, or surface change.
- Error and empty states must explain recovery, not merely show a red label or blank box.

Responsive:
- At mobile widths, preserve the style motif but simplify density, reduce huge type, and avoid overlapping controls.
- Touch targets stay usable. Long names, prices, labels, and CTAs must wrap intentionally.

Motion:
- Use transform/opacity only; animate inner media or accent edge, never layout width/height.

Avoid:
- Placeholder-only content.
- Decorative badges that do not add category, state, trust, or action.
- Component-specific styling that breaks the global radius, color, or type contract.

### dense-data-table

Purpose: Dense comparison, operational data, or scannable records.

Structure:
- Start with real content: title, meaningful body copy or data, primary affordance, and one proof/detail element.
- Use consistent padding, radius, border, and typography tokens from the operating mode. Repeat the same geometry elsewhere.
- Use Technical UI surface rules instead of default card styling.

States:
- Required: Loading skeleton, empty state, error message, success confirmation, stale/syncing if data-driven.
- Visual state must be more than opacity. Combine border, fill, type weight, icon/label, or surface change.
- Error and empty states must explain recovery, not merely show a red label or blank box.

Responsive:
- At mobile widths, preserve the style motif but simplify density, reduce huge type, and avoid overlapping controls.
- Touch targets stay usable. Long names, prices, labels, and CTAs must wrap intentionally.

Motion:
- Use a short state transition under 240ms unless this is a cinematic section.

Avoid:
- Placeholder-only content.
- Decorative badges that do not add category, state, trust, or action.
- Component-specific styling that breaks the global radius, color, or type contract.

### command-palette

Purpose: Reusable style-specific module that carries identity and function.

Structure:
- Start with real content: title, meaningful body copy or data, primary affordance, and one proof/detail element.
- Use an explicit compact/mobile variant and a spacious desktop variant. Do not rely on browser wrapping to solve layout.
- Use Technical UI surface rules instead of default card styling.

States:
- Required: Expanded/collapsed, compact/comfortable, keyboard focus, touch target at least 40px.
- Visual state must be more than opacity. Combine border, fill, type weight, icon/label, or surface change.
- Error and empty states must explain recovery, not merely show a red label or blank box.

Responsive:
- At mobile widths, preserve the style motif but simplify density, reduce huge type, and avoid overlapping controls.
- Touch targets stay usable. Long names, prices, labels, and CTAs must wrap intentionally.

Motion:
- If scroll-triggered, final state must be readable without replaying the animation.

Avoid:
- Placeholder-only content.
- Decorative badges that do not add category, state, trust, or action.
- Component-specific styling that breaks the global radius, color, or type contract.

### filter-builder

Purpose: Browsing, sorting, narrowing, and marketplace/product discovery.

Structure:
- Start with real content: title, meaningful body copy or data, primary affordance, and one proof/detail element.
- Use a stable grid or aspect-ratio shell. The component should not change outer dimensions on hover, selection, loading, or error.
- Use Technical UI surface rules instead of default card styling.

States:
- Required: Default, emphasized, muted, unavailable, reduced-motion, high-contrast fallback.
- Visual state must be more than opacity. Combine border, fill, type weight, icon/label, or surface change.
- Error and empty states must explain recovery, not merely show a red label or blank box.

Responsive:
- At mobile widths, preserve the style motif but simplify density, reduce huge type, and avoid overlapping controls.
- Touch targets stay usable. Long names, prices, labels, and CTAs must wrap intentionally.

Motion:
- If hover-reactive, keep the effect clipped inside the component and provide keyboard parity.

Avoid:
- Placeholder-only content.
- Decorative badges that do not add category, state, trust, or action.
- Component-specific styling that breaks the global radius, color, or type contract.

### log-stream

Purpose: Reusable style-specific module that carries identity and function.

Structure:
- Start with real content: title, meaningful body copy or data, primary affordance, and one proof/detail element.
- Use consistent padding, radius, border, and typography tokens from the operating mode. Repeat the same geometry elsewhere.
- Use Technical UI surface rules instead of default card styling.

States:
- Required: Idle, hover, focus-visible, active/pressed, selected/current, disabled.
- Visual state must be more than opacity. Combine border, fill, type weight, icon/label, or surface change.
- Error and empty states must explain recovery, not merely show a red label or blank box.

Responsive:
- At mobile widths, preserve the style motif but simplify density, reduce huge type, and avoid overlapping controls.
- Touch targets stay usable. Long names, prices, labels, and CTAs must wrap intentionally.

Motion:
- Use reduced-motion fallback with static emphasis and no missing content.

Avoid:
- Placeholder-only content.
- Decorative badges that do not add category, state, trust, or action.
- Component-specific styling that breaks the global radius, color, or type contract.

### inspector-panel

Purpose: Reusable style-specific module that carries identity and function.

Structure:
- Start with real content: title, meaningful body copy or data, primary affordance, and one proof/detail element.
- Use an explicit compact/mobile variant and a spacious desktop variant. Do not rely on browser wrapping to solve layout.
- Use Technical UI surface rules instead of default card styling.

States:
- Required: Loading skeleton, empty state, error message, success confirmation, stale/syncing if data-driven.
- Visual state must be more than opacity. Combine border, fill, type weight, icon/label, or surface change.
- Error and empty states must explain recovery, not merely show a red label or blank box.

Responsive:
- At mobile widths, preserve the style motif but simplify density, reduce huge type, and avoid overlapping controls.
- Touch targets stay usable. Long names, prices, labels, and CTAs must wrap intentionally.

Motion:
- Use transform/opacity only; animate inner media or accent edge, never layout width/height.

Avoid:
- Placeholder-only content.
- Decorative badges that do not add category, state, trust, or action.
- Component-specific styling that breaks the global radius, color, or type contract.

### alert-timeline

Purpose: Reusable style-specific module that carries identity and function.

Structure:
- Start with real content: title, meaningful body copy or data, primary affordance, and one proof/detail element.
- Use a stable grid or aspect-ratio shell. The component should not change outer dimensions on hover, selection, loading, or error.
- Use Technical UI surface rules instead of default card styling.

States:
- Required: Expanded/collapsed, compact/comfortable, keyboard focus, touch target at least 40px.
- Visual state must be more than opacity. Combine border, fill, type weight, icon/label, or surface change.
- Error and empty states must explain recovery, not merely show a red label or blank box.

Responsive:
- At mobile widths, preserve the style motif but simplify density, reduce huge type, and avoid overlapping controls.
- Touch targets stay usable. Long names, prices, labels, and CTAs must wrap intentionally.

Motion:
- Use a short state transition under 240ms unless this is a cinematic section.

Avoid:
- Placeholder-only content.
- Decorative badges that do not add category, state, trust, or action.
- Component-specific styling that breaks the global radius, color, or type contract.

### stateful-empty-view

Purpose: Reusable style-specific module that carries identity and function.

Structure:
- Start with real content: title, meaningful body copy or data, primary affordance, and one proof/detail element.
- Use consistent padding, radius, border, and typography tokens from the operating mode. Repeat the same geometry elsewhere.
- Use Technical UI surface rules instead of default card styling.

States:
- Required: Default, emphasized, muted, unavailable, reduced-motion, high-contrast fallback.
- Visual state must be more than opacity. Combine border, fill, type weight, icon/label, or surface change.
- Error and empty states must explain recovery, not merely show a red label or blank box.

Responsive:
- At mobile widths, preserve the style motif but simplify density, reduce huge type, and avoid overlapping controls.
- Touch targets stay usable. Long names, prices, labels, and CTAs must wrap intentionally.

Motion:
- If scroll-triggered, final state must be readable without replaying the animation.

Avoid:
- Placeholder-only content.
- Decorative badges that do not add category, state, trust, or action.
- Component-specific styling that breaks the global radius, color, or type contract.


## Technical Recipes

Use code-level decisions like these before adding polish. The exact values may adapt to an existing codebase, but the roles should remain.

### CSS Tokens And Signature Structure


```css
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
```

### Tailwind/React Section Skeleton

```tsx
export function TechnicalUISection() {
  return (
    <section className="relative overflow-hidden px-6 py-28 md:py-40">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 md:grid-cols-12 md:gap-6">
        <div className="md:col-span-5">
          <p className="mb-4 text-sm font-medium tracking-[0.08em] text-muted-foreground">Specific category label</p>
          <h2 className="text-balance text-4xl font-semibold leading-[0.95] tracking-tight md:text-7xl">
            A concrete promise with Technical UI identity.
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
```

### State Pattern

```tsx
const stateClasses = {
  idle: "opacity-100",
  hover: "transition-transform duration-300 ease-out group-hover:-translate-y-0.5",
  selected: "ring-2 ring-offset-2",
  loading: "pointer-events-none opacity-70",
  disabled: "pointer-events-none opacity-40",
  error: "border-destructive text-destructive",
  success: "border-emerald-500 text-emerald-700"
};
```


## Animation System

Motion must be specific to Technical UI. It should never be generic scroll-fade spam.

- Use panel expand/collapse, filter transition, row selection, and command execution motion.
- Animations must preserve information density and never delay repeated tasks.
- Loading and stale states should be explicit.


```tsx
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
```

### Style-Specific CSS Motion Primitive

This primitive is intentionally small and concrete. Adapt class names to the project, but preserve the motion role, reduced-motion behavior, and allowed properties.


```css
[data-style-motion="technical-ui"] {
  transition:
    transform var(--source-motion-medium, 420ms) var(--source-ease-out, cubic-bezier(0.16, 1, 0.30, 1)),
    opacity var(--source-motion-medium, 420ms) var(--source-ease-out, cubic-bezier(0.16, 1, 0.30, 1)),
    filter 220ms ease,
    clip-path 520ms var(--source-ease-out, cubic-bezier(0.16, 1, 0.30, 1));
  will-change: transform, opacity, filter, clip-path;
}
[data-style-motion="technical-ui"]:is(:hover, :focus-visible, [data-active="true"]) {
  filter: brightness(1.03); transform: translateY(-1px);
}

@keyframes style-reveal {
  from { opacity: 0; transform: translateY(22px); clip-path: inset(8% 0 8% 0); }
  to { opacity: 1; transform: translateY(0); clip-path: inset(0 0 0 0); }
}
@media (prefers-reduced-motion: reduce) {
  [data-style-motion="technical-ui"] {
    animation: none !important;
    transition-duration: .01ms !important;
    transform: none !important;
    clip-path: none !important;
    filter: none !important;
  }
}
```

Motion rules:

- Use transform, opacity, clip-path, filter, or shader/canvas properties when appropriate; avoid layout-triggering properties.
- Give every motion a role: reveal, transition, feedback, continuity, attention routing, or storytelling.
- Add 'prefers-reduced-motion' fallbacks for all nontrivial motion.
- Keep controls usable before, during, and after animation.
- For GSAP ScrollTrigger, clean up triggers and avoid pinning huge sections on mobile unless tested.


## Complete Page Protocols

### Marketplace Or Commerce

If the user asks for a marketplace, store, product catalog, booking system, or client commerce page, build the whole surface:

- Header with brand, category navigation, search, account/cart or primary action.
- Hero or discovery area that makes the Technical UI identity obvious.
- Filter rail with categories, sort, price/status/location/tags as relevant.
- Product/service grid with real card states: hover, selected/favorited, unavailable, loading, empty.
- Detail preview or featured product section with concrete specs, images, trust, and action.
- Trust/conversion section: reviews, guarantees, delivery, security, booking/checkout steps.
- Footer with useful links, not a generic dump.

Style-specific application: use workstation-shell, dense-data-table, command-palette, filter-builder as the first component candidates. Use the accent/radius/surface rules from the operating mode.

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
- Use density appropriate to Technical UI: High for apps, medium-high for product pages.
- Preserve the style through surface, type, state, and component geometry rather than decorative extras.

### Iconic Hero

If the user asks only for a hero, still deliver a hero that implies a complete site:

- Designed nav.
- Strong H1 with line-length strategy.
- Concrete proof object.
- CTA pair or single decisive action.
- Style-specific background/surface system.
- Bottom reveal of the next section.
- Mobile version with no text overflow, no overlapping CTAs, and preserved identity.


## Absolute Bans

- No fake complexity with meaningless metrics.
- No hiding primary workflow behind decorative panels.
- No low-contrast microcopy in dense areas.
- Do not output a moodboard, single hero, or decorative shell when the request implies a complete product surface.
- Do not rely on generic centered hero, three-card feature row, vague SaaS copy, or default Inter-only typography unless the existing project requires it.
- Do not use effects that make text less readable, controls less discoverable, or mobile layout less stable.
- Do not skip hover, focus, active, disabled, loading, empty, error, and success states on interactive components.
- Do not hide weak hierarchy behind gradients, blur, shadows, mock terminal text, or random badges.

## Failure Corrections

- If it looks generic, strengthen the chosen archetype, change the component geometry, and make the proof object more concrete.
- If it looks like a theme pasted on default UI, rebuild the surface, type scale, spacing, and state system first.
- If it looks pretty but lazy, add missing real sections: navigation, proof, workflow, conversion, states, and footer.
- If it looks noisy, reduce accent count, effects, and component variety until hierarchy is obvious.
- If animation feels unrelated, remove it or tie it to sequence, state, or interaction.


## Reference Use

The detailed Refero-derived material is bundled but not dumped into this main file:

- Full consolidated database: [references/refero-style-database.md](references/refero-style-database.md)
- Raw source notes: [references/sources/](references/sources/)

When to load references:

- Load the full database when the user asks for a substantial site/app, when the style direction feels under-specified, or when you need more component/palette/motion examples.
- Search the database for terms such as 'Tokens', 'Components', 'Animations', 'Layout', 'Typography', 'Radius', 'Gradient', 'Hover', 'Button', 'Hero', 'Card', 'Navigation'.
- Inspect raw sources only when the user names a source or asks for a narrower source-specific interpretation.

Do not paste source URLs into final UI work. Extract rules, tokens, patterns, and interaction behavior.


## Pre-Output Checklist

Before delivering code or design instructions, verify:

- First viewport unmistakably expresses Technical UI.
- The design includes real structure beyond a hero when the request implies a page or product.
- Typography has a defined display/body/metadata/control system.
- H1 line length and mobile wrapping are controlled.
- Color roles are semantic and accents are budgeted.
- Components share radius, border, shadow, spacing, and state behavior.
- Product/client evidence is concrete and inspectable.
- At least hover, focus, active, disabled, loading, empty, error, and success states are considered.
- Motion has a role and a reduced-motion fallback.
- No ban listed above is violated.
- The final result would not be mistaken for a generic template.
