---
name: technical-sans
description: "Use this skill to create Technical Sans visual design systems that feel technical, crisp, rational, precise, engineered, legible. USE FOR: developer tools, AI products, technical SaaS, documentation, infrastructure, precise product interfaces. DO NOT USE FOR: unrelated backend work, non-visual tasks, or when an existing product design system must be followed exactly."
---

# Technical Sans Skill

## Core Directive

You are a senior frontend design engineer specializing in Technical Sans. The output must feel technical, crisp, rational, precise, engineered, legible. Do not merely skin default components with a color palette. Build a visual operating system: layout, typography, color roles, component geometry, imagery, motion, interaction states, responsive behavior, and proof content must all point in the same direction.

Use this skill for developer tools, AI products, technical SaaS, documentation, infrastructure, precise product interfaces.


## Mandatory `<design_plan>`

Before writing code for a substantial UI, output a compact `<design_plan>` block. This is not optional; it prevents lazy default layouts.

Include:

1. **Use case:** product type, audience, primary action, and emotional target.
2. **Style direction:** one Technical Sans sub-direction chosen from the archetypes below.
3. **Visual operating mode:** density, motion intensity, decoration budget, contrast mode, radius rule, and asset burden.
4. **First viewport:** nav type, H1 width/line strategy, hero proof object, CTA treatment, next-section hint.
5. **System contracts:** type, color, surface, geometry, evidence, and interaction state rules.
6. **Component plan:** at least four concrete components from the arsenal, with states.
7. **Motion plan:** which elements move, why they move, and reduced-motion fallback.
8. **Anti-slop sweep:** name the top three failure modes for this style and how you will avoid them.

If the request is tiny, do this mentally and keep the final answer concise. If the request asks for a full page/app, include the block.

## Non-Negotiable Principles

- Typography, alignment, density, and real technical evidence communicate trust.
- Show code, diagrams, CLI, docs, workflow, or data instead of generic tech gradients.
- Mono is a tool for code/data, not the whole brand unless the product demands it.


## Style Operating Mode

| Control | Setting |
| --- | --- |
| density | Medium-high. Technical products benefit from inspectable detail. |
| motion | Low-medium. Command, deploy, tab, code reveal, and graph transitions. |
| decoration | Low. Lines, syntax, diagrams, and alignment do the work. |
| contrast | Crisp light or dark with clear code/data zones. |
| radius | 6-12px for panels, 999px for pills. |
| type | Technical sans plus mono code; avoid overly friendly forms. |
| assets | Code blocks, API docs, terminal windows, diagrams, product screenshots. |

These controls are binding. If the user's brand or existing codebase conflicts with a setting, preserve the user's constraints but keep the underlying Technical Sans behavior.


## Signature System

Use these as executable rules, not inspiration labels:

- Evidence Before Abstraction: code sample, API response, dashboard, or architecture diagram appears early.
- Technical Type Ladder: display sans, UI sans, mono labels, code blocks all have distinct roles.
- Precision Grid: alignment and spacing should feel engineered, not decorative.
- Syntax As Color: syntax highlighting can be the accent system when used sparingly.

### Source Direction Matrix

The source URLs and full extracts stay in references. The main skill keeps only transferable lessons.

| Reference | Transferable lesson | Use for |
| --- | --- | --- |
| Antimetal - Technical Sans Source Notes | Source-specific layout, color, type, component, and motion lessons. | mixed |
| Plain - Technical Sans Source Notes | Source-specific layout, color, type, component, and motion lessons. | light |
| Cursor - Technical Sans Source Notes | Source-specific layout, color, type, component, and motion lessons. | light |
| Linear - Technical Sans Source Notes | Source-specific layout, color, type, component, and motion lessons. | dark |
| Mercury - Technical Sans Source Notes | Source-specific layout, color, type, component, and motion lessons. | dark |


## Raw-Derived Technical Signals

These signals are distilled from the large Refero database bundled in `references/`. They prevent the skill from forgetting the concrete values that made the references specific. Use them as a vocabulary, not as a command to use every value.

| Signal | Raw values to keep in mind |
| --- | --- |
| Color tokens | `#ffffff` (20x), `#08090a` (10x), `#0f1011` (9x), `#e6e5e0` (8x), `#323334` (7x), `#f7f7f4` (7x), `#f7f8f8` (7x), `#0a2414` (6x), `#262510` (6x), `#cdcdc9` (6x), `#141414` (5x), `#161718` (5x) |
| Pixel/rhythm values | `1px` (28x), `6px` (28x), `32px` (27x), `12px` (22x), `16px` (20x), `4px` (20x), `24px` (17x), `8px` (16x), `20px` (15x), `40px` (14x), `80px` (13x), `48px` (11x), `14px` (9x), `10px` (8x) |
| Radius declarations | `border-radius: 6px` (4x), `border-radius: 4px` (3x), `border-radius: 8px` (3x), `border-radius: var(--radius)` (2x), `--radius-button-lg: 40px` (1x), `--radius-button: 32px` (1x), `--radius-button: 9999px` (1x), `--radius-card-lg: 20px` (1x), `--radius-card: 16px` (1x), `--radius-container: 4px` (1x) |
| Typography declarations | `font-size: 12px` (6x), `font-family: var(--ts-font-mono)` (4x), `font-family: var(--font-mono)` (2x), `font-weight: 510` (2x), `letter-spacing: 0.015em` (2x), `line-height: 1` (2x), `font-family: var(--ts-font-sans)` (1x), `font-size: 16px` (1x), `font-size: 32px` (1x), `font-size: clamp(48px, 8vw, 72px)` (1x), `font-size: clamp(48px, 8vw, var(--ts-text-display))` (1x), `font-size: var(--ts-text-body)` (1x), `letter-spacing: -0.005em` (1x), `letter-spacing: -0.006em` (1x) |
| Surface/effect declarations | `background: transparent` (4x), `border: #cdcdc9` (3x), `border: 1px solid var(--border-subtle)` (3x), `border: 1px solid var(--border)` (3x), `border: 1px solid var(--ts-border)` (3x), `background: #08090a` (2x), `background: #0f1011` (2x), `background: var(--surface-1)` (2x), `background: #161718` (1x), `background: #1e1e2a` (1x), `background: #f3fbe9` (1x), `background: #f7f7f4` (1x), `background: #f8f9fc` (1x), `background: #fffefa` (1x) |
| Motion declarations | `transform: uppercase` (1x), `transition: crisp product proof` (1x) |

### Raw-Derived Token Starter

```css
:root {
  --source-color-1: #ffffff;
  --source-color-2: #08090a;
  --source-color-3: #0f1011;
  --source-color-4: #e6e5e0;
  --source-color-5: #323334;
  --source-color-6: #f7f7f4;
  --source-color-7: #f7f8f8;
  --source-color-8: #0a2414;
  --source-space-1: 1px;
  --source-space-2: 6px;
  --source-space-3: 32px;
  --source-space-4: 12px;
  --source-space-5: 16px;
  --source-space-6: 4px;
  --source-space-7: 24px;
  --source-space-8: 8px;
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

The first viewport must instantly say "Technical Sans" without needing an explanatory paragraph. Build it from:

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
| Developer Landing | CLI/code hero, docs preview, integrations | dev tools |
| AI Technical Product | prompt/input, output, workflow proof | AI products |
| Infra Dashboard | metrics, logs, deployment controls | infrastructure |
| Docs-App Hybrid | navigation, search, examples, live preview | documentation |

Selection rule:
- If the user asks for a whole website, choose one archetype for the first viewport and one supporting archetype for the proof/conversion section.
- If the user asks for an app/work surface, prioritize workflow clarity over theatrical hero composition.
- If the user asks for a hero only, still define nav, proof object, CTA, and next-section hint so the hero feels connected to a full page.


## Component Arsenal

Use at least four of these for full-page work. Components must have real content and states; do not create empty decorative blocks.

| Component | Purpose | Required states |
| --- | --- | --- |
| code-hero | First-viewport identity and proof object. | hover/focus/active plus selected |
| cli-command-bar | Reusable style-specific module that carries identity and function. | loading/empty/error plus success |
| docs-sidebar | Reusable style-specific module that carries identity and function. | responsive compact/expanded variants |
| api-response-card | Reusable style-specific module that carries identity and function. | keyboard focus and reduced-motion behavior |
| architecture-diagram | Reusable style-specific module that carries identity and function. | hover/focus/active plus selected |
| deploy-timeline | Reusable style-specific module that carries identity and function. | loading/empty/error plus success |
| technical-pricing | Conversion, checkout, plan choice, or purchasing confidence. | responsive compact/expanded variants |
| integration-table | Dense comparison, operational data, or scannable records. | keyboard focus and reduced-motion behavior |

Component construction rules:

- Build components with stable dimensions: 'aspect-ratio', explicit grid tracks, 'minmax(0, 1fr)', and responsive 'clamp()' spacing.
- Keep hover states inside the component bounds; hover cannot resize neighboring layout.
- Put icons in icon buttons where appropriate, but do not replace clear labels for destructive or purchasing actions.
- For forms and marketplace/product flows, include validation, disabled, loading, empty, and success behavior.
- For cards, decide whether they are informational, navigational, selectable, draggable, or purchasable before styling them.


## Component Blueprints

Use these blueprints when implementing the arsenal above. They turn the style into buildable UI, not just visual direction.

### code-hero

Purpose: First-viewport identity and proof object.

Structure:
- Start with real content: title, meaningful body copy or data, primary affordance, and one proof/detail element.
- Use a stable grid or aspect-ratio shell. The component should not change outer dimensions on hover, selection, loading, or error.
- Use Technical Sans surface rules instead of default card styling.

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

### cli-command-bar

Purpose: Reusable style-specific module that carries identity and function.

Structure:
- Start with real content: title, meaningful body copy or data, primary affordance, and one proof/detail element.
- Use consistent padding, radius, border, and typography tokens from the operating mode. Repeat the same geometry elsewhere.
- Use Technical Sans surface rules instead of default card styling.

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

### docs-sidebar

Purpose: Reusable style-specific module that carries identity and function.

Structure:
- Start with real content: title, meaningful body copy or data, primary affordance, and one proof/detail element.
- Use an explicit compact/mobile variant and a spacious desktop variant. Do not rely on browser wrapping to solve layout.
- Use Technical Sans surface rules instead of default card styling.

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

### api-response-card

Purpose: Reusable style-specific module that carries identity and function.

Structure:
- Start with real content: title, meaningful body copy or data, primary affordance, and one proof/detail element.
- Use a stable grid or aspect-ratio shell. The component should not change outer dimensions on hover, selection, loading, or error.
- Use Technical Sans surface rules instead of default card styling.

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

### architecture-diagram

Purpose: Reusable style-specific module that carries identity and function.

Structure:
- Start with real content: title, meaningful body copy or data, primary affordance, and one proof/detail element.
- Use consistent padding, radius, border, and typography tokens from the operating mode. Repeat the same geometry elsewhere.
- Use Technical Sans surface rules instead of default card styling.

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

### deploy-timeline

Purpose: Reusable style-specific module that carries identity and function.

Structure:
- Start with real content: title, meaningful body copy or data, primary affordance, and one proof/detail element.
- Use an explicit compact/mobile variant and a spacious desktop variant. Do not rely on browser wrapping to solve layout.
- Use Technical Sans surface rules instead of default card styling.

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

### technical-pricing

Purpose: Conversion, checkout, plan choice, or purchasing confidence.

Structure:
- Start with real content: title, meaningful body copy or data, primary affordance, and one proof/detail element.
- Use a stable grid or aspect-ratio shell. The component should not change outer dimensions on hover, selection, loading, or error.
- Use Technical Sans surface rules instead of default card styling.

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

### integration-table

Purpose: Dense comparison, operational data, or scannable records.

Structure:
- Start with real content: title, meaningful body copy or data, primary affordance, and one proof/detail element.
- Use consistent padding, radius, border, and typography tokens from the operating mode. Repeat the same geometry elsewhere.
- Use Technical Sans surface rules instead of default card styling.

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
```

### Tailwind/React Section Skeleton

```tsx
export function TechnicalSansSection() {
  return (
    <section className="relative overflow-hidden px-6 py-28 md:py-40">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 md:grid-cols-12 md:gap-6">
        <div className="md:col-span-5">
          <p className="mb-4 text-sm font-medium tracking-[0.08em] text-muted-foreground">Specific category label</p>
          <h2 className="text-balance text-4xl font-semibold leading-[0.95] tracking-tight md:text-7xl">
            A concrete promise with Technical Sans identity.
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

Motion must be specific to Technical Sans. It should never be generic scroll-fade spam.

- Use tab, command, code reveal, deploy progress, and graph transitions.
- Keep motion mechanical and fast; do not add decorative bounce.
- Logs and code should not flicker or constantly scroll unless live state matters.


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
[data-style-motion="technical-sans"] {
  transition:
    transform var(--source-motion-medium, 420ms) var(--source-ease-out, cubic-bezier(0.16, 1, 0.30, 1)),
    opacity var(--source-motion-medium, 420ms) var(--source-ease-out, cubic-bezier(0.16, 1, 0.30, 1)),
    filter 220ms ease,
    clip-path 520ms var(--source-ease-out, cubic-bezier(0.16, 1, 0.30, 1));
  will-change: transform, opacity, filter, clip-path;
}
[data-style-motion="technical-sans"]:is(:hover, :focus-visible, [data-active="true"]) {
  filter: brightness(1.03); transform: translateY(-1px);
}

@keyframes style-reveal {
  from { opacity: 0; transform: translateY(22px); clip-path: inset(8% 0 8% 0); }
  to { opacity: 1; transform: translateY(0); clip-path: inset(0 0 0 0); }
}
@media (prefers-reduced-motion: reduce) {
  [data-style-motion="technical-sans"] {
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
- Hero or discovery area that makes the Technical Sans identity obvious.
- Filter rail with categories, sort, price/status/location/tags as relevant.
- Product/service grid with real card states: hover, selected/favorited, unavailable, loading, empty.
- Detail preview or featured product section with concrete specs, images, trust, and action.
- Trust/conversion section: reviews, guarantees, delivery, security, booking/checkout steps.
- Footer with useful links, not a generic dump.

Style-specific application: use code-hero, cli-command-bar, docs-sidebar, api-response-card as the first component candidates. Use the accent/radius/surface rules from the operating mode.

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
- Use density appropriate to Technical Sans: Medium-high. Technical products benefit from inspectable detail.
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

- No generic tech gradient in place of evidence.
- No all-monospace page without hierarchy.
- No fake terminal details that do not support comprehension.
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

- First viewport unmistakably expresses Technical Sans.
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
