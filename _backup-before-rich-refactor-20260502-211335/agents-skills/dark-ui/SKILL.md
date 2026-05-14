---
name: dark-ui
description: "Use this skill to create Dark UI visual design systems that feel focused, immersive, premium, technical, calm, deep. USE FOR: dark dashboards, AI tools, premium apps, developer consoles, command centers, immersive product interfaces. DO NOT USE FOR: unrelated backend work, non-visual tasks, or when an existing product design system must be followed exactly."
---

# Dark UI Skill

## Core Directive

You are a senior frontend design engineer specializing in Dark UI. The output must feel focused, immersive, premium, technical, calm, deep. Do not merely skin default components with a color palette. Build a visual operating system: layout, typography, color roles, component geometry, imagery, motion, interaction states, responsive behavior, and proof content must all point in the same direction.

Use this skill for dark dashboards, AI tools, premium apps, developer consoles, command centers, immersive product interfaces.


## Mandatory `<design_plan>`

Before writing code for a substantial UI, output a compact `<design_plan>` block. This is not optional; it prevents lazy default layouts.

Include:

1. **Use case:** product type, audience, primary action, and emotional target.
2. **Style direction:** one Dark UI sub-direction chosen from the archetypes below.
3. **Visual operating mode:** density, motion intensity, decoration budget, contrast mode, radius rule, and asset burden.
4. **First viewport:** nav type, H1 width/line strategy, hero proof object, CTA treatment, next-section hint.
5. **System contracts:** type, color, surface, geometry, evidence, and interaction state rules.
6. **Component plan:** at least four concrete components from the arsenal, with states.
7. **Motion plan:** which elements move, why they move, and reduced-motion fallback.
8. **Anti-slop sweep:** name the top three failure modes for this style and how you will avoid them.

If the request is tiny, do this mentally and keep the final answer concise. If the request asks for a full page/app, include the block.

## Non-Negotiable Principles

- Dark design needs a tonal ladder: background, base panel, raised panel, selected panel, overlay, and focus ring.
- Use accent color for action, selection, progress, or status, never as body text decoration.
- Make dark UI feel deep through hierarchy and state clarity, not by making everything black.


## Style Operating Mode

| Control | Setting |
| --- | --- |
| density | Medium-high for apps, medium for websites. |
| motion | Medium. Use depth, panel reveal, smooth state transition, and subtle background drift. |
| decoration | Low-medium. Use depth, lines, and atmospheric light sparingly. |
| contrast | Dark substrate with readable text and clearly stepped surfaces. |
| radius | 8-14px for product panels, 999px for segmented controls. |
| type | Modern sans with mono for code/data only. |
| assets | Product screenshots, command panels, agent messages, graphs, dark photography. |

These controls are binding. If the user's brand or existing codebase conflicts with a setting, preserve the user's constraints but keep the underlying Dark UI behavior.


## Signature System

Use these as executable rules, not inspiration labels:

- Surface Ladder: every panel uses a distinct tone or border; active panels receive accent edge or raised contrast.
- Command Center Rhythm: large central task panel + side utility rail + bottom status/metadata band.
- Premium Darkness: deep navy/charcoal with one cool accent feels more refined than pure black.
- Readable Microcopy: metadata can be muted, but core labels and values must pass contrast.

### Source Direction Matrix

The source URLs and full extracts stay in references. The main skill keeps only transferable lessons.

| Reference | Transferable lesson | Use for |
| --- | --- | --- |
| beehiiv - Style Reference | Source-specific layout, color, type, component, and motion lessons. | Extract transferable visual rules, not a clone. |
| Fey - Style Reference | Source-specific layout, color, type, component, and motion lessons. | Extract transferable visual rules, not a clone. |
| Bun - Style Reference | Source-specific layout, color, type, component, and motion lessons. | Extract transferable visual rules, not a clone. |
| Circle - Style Reference | Source-specific layout, color, type, component, and motion lessons. | Extract transferable visual rules, not a clone. |
| Superwhisper - Style Reference | Source-specific layout, color, type, component, and motion lessons. | Extract transferable visual rules, not a clone. |


## Raw-Derived Technical Signals

These signals are distilled from the large Refero database bundled in `references/`. They prevent the skill from forgetting the concrete values that made the references specific. Use them as a vocabulary, not as a command to use every value.

| Signal | Raw values to keep in mind |
| --- | --- |
| Color tokens | `#ffffff` (46x), `#2f39ba` (18x), `#060419` (16x), `#000000` (14x), `#0d0e11` (13x), `#0b0b0b` (12x), `#ff5ec4` (12x), `#c4c2d6` (11x), `#282a36` (10x), `#e5e7eb` (10x), `#ec4899` (10x), `#000` (9x) |
| Pixel/rhythm values | `9999px` (72x), `24px` (71x), `16px` (56x), `0px` (50x), `4px` (35x), `8px` (35x), `6px` (29x), `1px` (26x), `12px` (24x), `10px` (20x), `32px` (19x), `20px` (15x), `72px` (13x), `7px` (13x) |
| Radius declarations | `border-radius: 9999px` (12x), `--radius-buttons: 9999px` (6x), `border-radius: 16px` (5x), `border-radius: var(--radius-buttons)` (5x), `border-radius: 8px` (4x), `--radius-cards: 6px` (3x), `--radius-pill: 9999px` (3x), `border-radius: var(--radius-pill)` (3x), `--radius-button: 4px` (2x), `--radius-buttons-pill: 99px` (2x) |
| Typography declarations | `font-weight: 500` (16x), `font-family: var(--font-primary)` (8x), `font-size: 12px` (4x), `font-size: 14px` (4x), `font-family: 'JetBrains Mono', monospace` (3x), `font-family: inherit` (3x), `font-size: 16px` (3x), `font-weight: 600` (3x), `font-family: 'Satoshi', Inter, sans-serif` (2x), `font-family: 'Satoshi', sans-serif` (2x), `font-family: Inter, sans-serif` (2x), `font-weight: 700` (2x), `line-height: 1.5` (2x), `font-family: 'calibre', Inter, sans-serif` (1x) |
| Surface/effect declarations | `border: none` (14x), `background: var(--bg)` (9x), `background: #ffffff` (7x), `background: transparent` (6x), `background: var(--surface-2)` (6x), `background: linear-gradient(to right,` (4x), `background: linear-gradient(` (3x), `background: linear-gradient(90deg, #2f39ba 0%, #ff5ec4 100%)` (3x), `background: var(--surface-1)` (3x), `border: 1px solid rgba(255, 255, 255, 0.06)` (3x), `box-shadow: rgba(0, 0, 0, 0.8) 0px 0px 44px 0px` (3x), `opacity: 0.5` (3x), `backdrop-filter: blur(12px)` (2x), `background: #000` (2x) |
| Motion declarations | `duration: 0.01ms !important;` (4x), `@keyframes bar-grow` (2x), `@keyframes gradient-drift` (2x), `animation: bar-grow 1.2s cubic-bezier(0.16, 1, 0.30, 1) forwards` (2x), `transform: scaleX(0)` (2x), `transform: scaleX(1)` (2x), `transform: translateX(-30%)` (2x), `transform: translateX(30%)` (2x), `transition: filter 200ms ease` (2x), `@keyframes pulse-shift` (1x), `@keyframes pulse-sweep` (1x), `animation: gradient-drift 15s ease-in-out infinite` (1x), `animation: gradient-drift 20s ease-in-out infinite` (1x), `animation: none` (1x) |

### Raw-Derived Token Starter

```css
:root {
  --source-color-1: #ffffff;
  --source-color-2: #2f39ba;
  --source-color-3: #060419;
  --source-color-4: #000000;
  --source-color-5: #0d0e11;
  --source-color-6: #0b0b0b;
  --source-color-7: #ff5ec4;
  --source-color-8: #c4c2d6;
  --source-space-1: 9999px;
  --source-space-2: 24px;
  --source-space-3: 16px;
  --source-space-4: 0px;
  --source-space-5: 4px;
  --source-space-6: 8px;
  --source-space-7: 6px;
  --source-space-8: 1px;
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

The first viewport must instantly say "Dark UI" without needing an explanatory paragraph. Build it from:

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
| AI Workspace | chat/input center with context side panels | AI apps and copilots |
| Ops Command | metrics, maps, logs, incidents, control rail | dashboards and monitoring |
| Premium Product Dark | hero object on dark stage with crisp UI proof | paid products and launches |
| Developer Console | docs, code, deploy status, command palette | tools and infrastructure |

Selection rule:
- If the user asks for a whole website, choose one archetype for the first viewport and one supporting archetype for the proof/conversion section.
- If the user asks for an app/work surface, prioritize workflow clarity over theatrical hero composition.
- If the user asks for a hero only, still define nav, proof object, CTA, and next-section hint so the hero feels connected to a full page.


## Component Arsenal

Use at least four of these for full-page work. Components must have real content and states; do not create empty decorative blocks.

| Component | Purpose | Required states |
| --- | --- | --- |
| dark-command-input | Reusable style-specific module that carries identity and function. | hover/focus/active plus selected |
| stacked-insight-panel | Reusable style-specific module that carries identity and function. | loading/empty/error plus success |
| status-sidebar | Reusable style-specific module that carries identity and function. | responsive compact/expanded variants |
| log-console | Reusable style-specific module that carries identity and function. | keyboard focus and reduced-motion behavior |
| metric-glass-card | Reusable style-specific module that carries identity and function. | hover/focus/active plus selected |
| agent-thread | Reusable style-specific module that carries identity and function. | loading/empty/error plus success |
| deploy-timeline | Reusable style-specific module that carries identity and function. | responsive compact/expanded variants |
| focus-ring-control | Reusable style-specific module that carries identity and function. | keyboard focus and reduced-motion behavior |

Component construction rules:

- Build components with stable dimensions: 'aspect-ratio', explicit grid tracks, 'minmax(0, 1fr)', and responsive 'clamp()' spacing.
- Keep hover states inside the component bounds; hover cannot resize neighboring layout.
- Put icons in icon buttons where appropriate, but do not replace clear labels for destructive or purchasing actions.
- For forms and marketplace/product flows, include validation, disabled, loading, empty, and success behavior.
- For cards, decide whether they are informational, navigational, selectable, draggable, or purchasable before styling them.


## Component Blueprints

Use these blueprints when implementing the arsenal above. They turn the style into buildable UI, not just visual direction.

### dark-command-input

Purpose: Reusable style-specific module that carries identity and function.

Structure:
- Start with real content: title, meaningful body copy or data, primary affordance, and one proof/detail element.
- Use a stable grid or aspect-ratio shell. The component should not change outer dimensions on hover, selection, loading, or error.
- Use Dark UI surface rules instead of default card styling.

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

### stacked-insight-panel

Purpose: Reusable style-specific module that carries identity and function.

Structure:
- Start with real content: title, meaningful body copy or data, primary affordance, and one proof/detail element.
- Use consistent padding, radius, border, and typography tokens from the operating mode. Repeat the same geometry elsewhere.
- Use Dark UI surface rules instead of default card styling.

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

### status-sidebar

Purpose: Reusable style-specific module that carries identity and function.

Structure:
- Start with real content: title, meaningful body copy or data, primary affordance, and one proof/detail element.
- Use an explicit compact/mobile variant and a spacious desktop variant. Do not rely on browser wrapping to solve layout.
- Use Dark UI surface rules instead of default card styling.

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

### log-console

Purpose: Reusable style-specific module that carries identity and function.

Structure:
- Start with real content: title, meaningful body copy or data, primary affordance, and one proof/detail element.
- Use a stable grid or aspect-ratio shell. The component should not change outer dimensions on hover, selection, loading, or error.
- Use Dark UI surface rules instead of default card styling.

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

### metric-glass-card

Purpose: Reusable style-specific module that carries identity and function.

Structure:
- Start with real content: title, meaningful body copy or data, primary affordance, and one proof/detail element.
- Use consistent padding, radius, border, and typography tokens from the operating mode. Repeat the same geometry elsewhere.
- Use Dark UI surface rules instead of default card styling.

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

### agent-thread

Purpose: Reusable style-specific module that carries identity and function.

Structure:
- Start with real content: title, meaningful body copy or data, primary affordance, and one proof/detail element.
- Use an explicit compact/mobile variant and a spacious desktop variant. Do not rely on browser wrapping to solve layout.
- Use Dark UI surface rules instead of default card styling.

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

### deploy-timeline

Purpose: Reusable style-specific module that carries identity and function.

Structure:
- Start with real content: title, meaningful body copy or data, primary affordance, and one proof/detail element.
- Use a stable grid or aspect-ratio shell. The component should not change outer dimensions on hover, selection, loading, or error.
- Use Dark UI surface rules instead of default card styling.

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

### focus-ring-control

Purpose: Reusable style-specific module that carries identity and function.

Structure:
- Start with real content: title, meaningful body copy or data, primary affordance, and one proof/detail element.
- Use consistent padding, radius, border, and typography tokens from the operating mode. Repeat the same geometry elsewhere.
- Use Dark UI surface rules instead of default card styling.

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
```

### Tailwind/React Section Skeleton

```tsx
export function DarkUISection() {
  return (
    <section className="relative overflow-hidden px-6 py-28 md:py-40">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 md:grid-cols-12 md:gap-6">
        <div className="md:col-span-5">
          <p className="mb-4 text-sm font-medium tracking-[0.08em] text-muted-foreground">Specific category label</p>
          <h2 className="text-balance text-4xl font-semibold leading-[0.95] tracking-tight md:text-7xl">
            A concrete promise with Dark UI identity.
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

Motion must be specific to Dark UI. It should never be generic scroll-fade spam.

- Animate panel depth with opacity, translateY, and subtle scale; avoid distracting loops.
- Side panels can slide 16-24px with background dimming for focus.
- Use fast state transitions for filters and command inputs so the UI feels responsive.


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
[data-style-motion="dark-depth-panel"] {
  transition:
    transform var(--source-motion-medium, 420ms) var(--source-ease-out, cubic-bezier(0.16, 1, 0.30, 1)),
    opacity var(--source-motion-medium, 420ms) var(--source-ease-out, cubic-bezier(0.16, 1, 0.30, 1)),
    filter 220ms ease,
    clip-path 520ms var(--source-ease-out, cubic-bezier(0.16, 1, 0.30, 1));
  will-change: transform, opacity, filter, clip-path;
}
[data-style-motion="dark-depth-panel"]:is(:hover, :focus-visible, [data-active="true"]) {
  filter: brightness(1.06); transform: translateY(-2px);
}

@keyframes dark-gradient-drift {
  0%, 100% { transform: translate3d(-4%, -2%, 0) scale(1); opacity: .72; }
  50% { transform: translate3d(4%, 3%, 0) scale(1.06); opacity: 1; }
}
@keyframes dark-status-grow {
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
}
@media (prefers-reduced-motion: reduce) {
  [data-style-motion="dark-depth-panel"] {
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
- Hero or discovery area that makes the Dark UI identity obvious.
- Filter rail with categories, sort, price/status/location/tags as relevant.
- Product/service grid with real card states: hover, selected/favorited, unavailable, loading, empty.
- Detail preview or featured product section with concrete specs, images, trust, and action.
- Trust/conversion section: reviews, guarantees, delivery, security, booking/checkout steps.
- Footer with useful links, not a generic dump.

Style-specific application: use dark-command-input, stacked-insight-panel, status-sidebar, log-console as the first component candidates. Use the accent/radius/surface rules from the operating mode.

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
- Use density appropriate to Dark UI: Medium-high for apps, medium for websites.
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

- No muddy gray-on-black for important text.
- No indistinguishable panel stack.
- No gradient fog to cover weak hierarchy.
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

- First viewport unmistakably expresses Dark UI.
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
