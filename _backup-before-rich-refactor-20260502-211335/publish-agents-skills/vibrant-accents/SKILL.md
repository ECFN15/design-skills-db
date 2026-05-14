---
name: vibrant-accents
description: "Use this skill to create Vibrant Accents visual design systems that feel clean, energetic, vivid, modern, selective, confident. USE FOR: brands needing restrained layouts with vivid highlights, SaaS, portfolios, consumer pages, launch sites. DO NOT USE FOR: unrelated backend work, non-visual tasks, or when an existing product design system must be followed exactly."
---

# Vibrant Accents Skill

## Core Directive

You are a senior frontend design engineer specializing in Vibrant Accents. The output must feel clean, energetic, vivid, modern, selective, confident. Do not merely skin default components with a color palette. Build a visual operating system: layout, typography, color roles, component geometry, imagery, motion, interaction states, responsive behavior, and proof content must all point in the same direction.

Use this skill for brands needing restrained layouts with vivid highlights, SaaS, portfolios, consumer pages, launch sites.


## Mandatory `<design_plan>`

Before writing code for a substantial UI, output a compact `<design_plan>` block. This is not optional; it prevents lazy default layouts.

Include:

1. **Use case:** product type, audience, primary action, and emotional target.
2. **Style direction:** one Vibrant Accents sub-direction chosen from the archetypes below.
3. **Visual operating mode:** density, motion intensity, decoration budget, contrast mode, radius rule, and asset burden.
4. **First viewport:** nav type, H1 width/line strategy, hero proof object, CTA treatment, next-section hint.
5. **System contracts:** type, color, surface, geometry, evidence, and interaction state rules.
6. **Component plan:** at least four concrete components from the arsenal, with states.
7. **Motion plan:** which elements move, why they move, and reduced-motion fallback.
8. **Anti-slop sweep:** name the top three failure modes for this style and how you will avoid them.

If the request is tiny, do this mentally and keep the final answer concise. If the request asks for a full page/app, include the block.

## Non-Negotiable Principles

- Keep base surfaces restrained so vivid accents stay meaningful.
- Assign each accent role before use: action, category, status, emphasis, or brand motif.
- Bright color should create energy without destroying hierarchy.


## Style Operating Mode

| Control | Setting |
| --- | --- |
| density | Medium. Clear neutral layout with vivid focal points. |
| motion | Medium. Accent sweep, hover fill, category transition, chart highlight. |
| decoration | Medium but role-based. |
| contrast | Neutral base with high-saturation accents. |
| radius | 8-20px depending on product; 999px for chips. |
| type | Modern sans with confident display weights. |
| assets | Product screens, brand visuals, charts, portfolio images, color-coded categories. |

These controls are binding. If the user's brand or existing codebase conflicts with a setting, preserve the user's constraints but keep the underlying Vibrant Accents behavior.


## Signature System

Use these as executable rules, not inspiration labels:

- Accent Budget: one primary action color, one secondary category color, one semantic alert/success system.
- Neutral Field: white, black, gray, or muted substrate lets accent color carry hierarchy.
- Vivid Interaction: hover/focus can introduce accent fills, but resting state stays disciplined.
- Category Encoding: colors can group marketplace/product categories if the mapping is consistent.

### Source Direction Matrix

The source URLs and full extracts stay in references. The main skill keeps only transferable lessons.

| Reference | Transferable lesson | Use for |
| --- | --- | --- |
| Stripe - Vibrant Accents Source Notes | Source-specific layout, color, type, component, and motion lessons. | light |
| SquadEasy - Vibrant Accents Source Notes | Source-specific layout, color, type, component, and motion lessons. | light |
| Base44 - Vibrant Accents Source Notes | Source-specific layout, color, type, component, and motion lessons. | light |
| Empower - Vibrant Accents Source Notes | Source-specific layout, color, type, component, and motion lessons. | mixed |
| Copy - Vibrant Accents Source Notes | Source-specific layout, color, type, component, and motion lessons. | light |


## Raw-Derived Technical Signals

These signals are distilled from the large Refero database bundled in `references/`. They prevent the skill from forgetting the concrete values that made the references specific. Use them as a vocabulary, not as a command to use every value.

| Signal | Raw values to keep in mind |
| --- | --- |
| Color tokens | `#ffffff` (25x), `#000000` (19x), `#e5edf5` (14x), `#061b31` (13x), `#100f0f` (10x), `#533afd` (10x), `#f6fafb` (9x), `#fffdf6` (9x), `#171717` (8x), `#693edf` (8x), `#e4edf1` (8x), `#e4ff60` (8x) |
| Pixel/rhythm values | `4px` (33x), `24px` (27x), `16px` (17x), `6px` (15x), `100px` (14x), `18px` (12x), `14px` (10x), `32px` (10x), `1px` (9x), `44px` (9x), `48px` (9x), `56px` (8x), `8px` (8x), `96px` (8x) |
| Radius declarations | `border-radius: 4px` (4x), `border-radius: 6px` (3x), `--radius-card: 6px` (2x), `--radius-control: 4px` (2x), `--va-radius-control: 4px` (2x), `border-radius: 0` (2x), `border-radius: 10px` (2x), `border-radius: 999px` (2x), `--radius-button: 100px` (1x), `--radius-card: 0px` (1x) |
| Typography declarations | `font-weight: 300` (2x), `font-weight: 900` (2x), `line-height: 1` (2x), `line-height: 1.2` (2x), `font-family: var(--va-font-display)` (1x), `font-family: var(--va-font-sans)` (1x), `font-size: 10px` (1x), `font-size: 12px` (1x), `font-size: 22px` (1x), `font-size: clamp(42px, 7vw, 63px)` (1x), `font-size: clamp(44px, 7vw, 56px)` (1x), `font-size: clamp(44px, 7vw, var(--va-text-display))` (1x), `font-size: clamp(48px, 8vw, 96px)` (1x), `font-size: clamp(56px, 10vw, 96px)` (1x) |
| Surface/effect declarations | `background: #ffffff` (5x), `border: #d8d6df` (4x), `border: 0` (4x), `background: #f6fafb` (3x), `border: #e4edf1` (3x), `border: 1px solid #cfcfcf` (3x), `background: #100f0f` (2x), `background: #e1c19e` (2x), `border: #cfcfcf` (2x), `border: 1px solid #e4edf1` (2x), `border: 1px solid var(--va-border)` (2x), `background: #262525` (1x), `background: #533afd` (1x), `background: #693edf` (1x) |
| Motion declarations | `transform: rotate(-8deg)` (1x), `transform: rotate(7deg)` (1x) |

### Raw-Derived Token Starter

```css
:root {
  --source-color-1: #ffffff;
  --source-color-2: #000000;
  --source-color-3: #e5edf5;
  --source-color-4: #061b31;
  --source-color-5: #100f0f;
  --source-color-6: #533afd;
  --source-color-7: #f6fafb;
  --source-color-8: #fffdf6;
  --source-space-1: 4px;
  --source-space-2: 24px;
  --source-space-3: 16px;
  --source-space-4: 6px;
  --source-space-5: 100px;
  --source-space-6: 18px;
  --source-space-7: 14px;
  --source-space-8: 32px;
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

The first viewport must instantly say "Vibrant Accents" without needing an explanatory paragraph. Build it from:

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
| Neutral Launch With Punch | clean hero, one vivid CTA, highlighted proof | SaaS/consumer |
| Color-Coded Marketplace | category accents and filter chips | marketplaces |
| Portfolio Highlights | neutral grid with vivid project identifiers | portfolios |
| Vivid Data Product | charts and states use accents precisely | tools |

Selection rule:
- If the user asks for a whole website, choose one archetype for the first viewport and one supporting archetype for the proof/conversion section.
- If the user asks for an app/work surface, prioritize workflow clarity over theatrical hero composition.
- If the user asks for a hero only, still define nav, proof object, CTA, and next-section hint so the hero feels connected to a full page.


## Component Arsenal

Use at least four of these for full-page work. Components must have real content and states; do not create empty decorative blocks.

| Component | Purpose | Required states |
| --- | --- | --- |
| accent-hero-cta | First-viewport identity and proof object. | hover/focus/active plus selected |
| color-coded-filter | Browsing, sorting, narrowing, and marketplace/product discovery. | loading/empty/error plus success |
| vivid-stat-card | Reusable style-specific module that carries identity and function. | responsive compact/expanded variants |
| neutral-product-grid | Reusable style-specific module that carries identity and function. | keyboard focus and reduced-motion behavior |
| accent-hover-card | Reusable style-specific module that carries identity and function. | hover/focus/active plus selected |
| highlight-marquee | Reusable style-specific module that carries identity and function. | loading/empty/error plus success |
| category-tab-system | Reusable style-specific module that carries identity and function. | responsive compact/expanded variants |
| vibrant-footer | Designed closure with nav, CTA, and repeated motif. | keyboard focus and reduced-motion behavior |

Component construction rules:

- Build components with stable dimensions: 'aspect-ratio', explicit grid tracks, 'minmax(0, 1fr)', and responsive 'clamp()' spacing.
- Keep hover states inside the component bounds; hover cannot resize neighboring layout.
- Put icons in icon buttons where appropriate, but do not replace clear labels for destructive or purchasing actions.
- For forms and marketplace/product flows, include validation, disabled, loading, empty, and success behavior.
- For cards, decide whether they are informational, navigational, selectable, draggable, or purchasable before styling them.


## Component Blueprints

Use these blueprints when implementing the arsenal above. They turn the style into buildable UI, not just visual direction.

### accent-hero-cta

Purpose: First-viewport identity and proof object.

Structure:
- Start with real content: title, meaningful body copy or data, primary affordance, and one proof/detail element.
- Use a stable grid or aspect-ratio shell. The component should not change outer dimensions on hover, selection, loading, or error.
- Use Vibrant Accents surface rules instead of default card styling.

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

### color-coded-filter

Purpose: Browsing, sorting, narrowing, and marketplace/product discovery.

Structure:
- Start with real content: title, meaningful body copy or data, primary affordance, and one proof/detail element.
- Use consistent padding, radius, border, and typography tokens from the operating mode. Repeat the same geometry elsewhere.
- Use Vibrant Accents surface rules instead of default card styling.

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

### vivid-stat-card

Purpose: Reusable style-specific module that carries identity and function.

Structure:
- Start with real content: title, meaningful body copy or data, primary affordance, and one proof/detail element.
- Use an explicit compact/mobile variant and a spacious desktop variant. Do not rely on browser wrapping to solve layout.
- Use Vibrant Accents surface rules instead of default card styling.

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

### neutral-product-grid

Purpose: Reusable style-specific module that carries identity and function.

Structure:
- Start with real content: title, meaningful body copy or data, primary affordance, and one proof/detail element.
- Use a stable grid or aspect-ratio shell. The component should not change outer dimensions on hover, selection, loading, or error.
- Use Vibrant Accents surface rules instead of default card styling.

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

### accent-hover-card

Purpose: Reusable style-specific module that carries identity and function.

Structure:
- Start with real content: title, meaningful body copy or data, primary affordance, and one proof/detail element.
- Use consistent padding, radius, border, and typography tokens from the operating mode. Repeat the same geometry elsewhere.
- Use Vibrant Accents surface rules instead of default card styling.

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

### highlight-marquee

Purpose: Reusable style-specific module that carries identity and function.

Structure:
- Start with real content: title, meaningful body copy or data, primary affordance, and one proof/detail element.
- Use an explicit compact/mobile variant and a spacious desktop variant. Do not rely on browser wrapping to solve layout.
- Use Vibrant Accents surface rules instead of default card styling.

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

### category-tab-system

Purpose: Reusable style-specific module that carries identity and function.

Structure:
- Start with real content: title, meaningful body copy or data, primary affordance, and one proof/detail element.
- Use a stable grid or aspect-ratio shell. The component should not change outer dimensions on hover, selection, loading, or error.
- Use Vibrant Accents surface rules instead of default card styling.

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

### vibrant-footer

Purpose: Designed closure with nav, CTA, and repeated motif.

Structure:
- Start with real content: title, meaningful body copy or data, primary affordance, and one proof/detail element.
- Use consistent padding, radius, border, and typography tokens from the operating mode. Repeat the same geometry elsewhere.
- Use Vibrant Accents surface rules instead of default card styling.

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
```

### Tailwind/React Section Skeleton

```tsx
export function VibrantAccentsSection() {
  return (
    <section className="relative overflow-hidden px-6 py-28 md:py-40">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 md:grid-cols-12 md:gap-6">
        <div className="md:col-span-5">
          <p className="mb-4 text-sm font-medium tracking-[0.08em] text-muted-foreground">Specific category label</p>
          <h2 className="text-balance text-4xl font-semibold leading-[0.95] tracking-tight md:text-7xl">
            A concrete promise with Vibrant Accents identity.
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

Motion must be specific to Vibrant Accents. It should never be generic scroll-fade spam.

- Use accent sweeps, fill transitions, category color changes, and chart highlight animation.
- Resting state should remain calm; color motion marks interaction or selection.
- Avoid rainbow transitions that destroy semantic color mapping.


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
[data-style-motion="vibrant-accents"] {
  transition:
    transform var(--source-motion-medium, 420ms) var(--source-ease-out, cubic-bezier(0.16, 1, 0.30, 1)),
    opacity var(--source-motion-medium, 420ms) var(--source-ease-out, cubic-bezier(0.16, 1, 0.30, 1)),
    filter 220ms ease,
    clip-path 520ms var(--source-ease-out, cubic-bezier(0.16, 1, 0.30, 1));
  will-change: transform, opacity, filter, clip-path;
}
[data-style-motion="vibrant-accents"]:is(:hover, :focus-visible, [data-active="true"]) {
  filter: brightness(1.03); transform: translateY(-1px);
}

@keyframes style-reveal {
  from { opacity: 0; transform: translateY(22px); clip-path: inset(8% 0 8% 0); }
  to { opacity: 1; transform: translateY(0); clip-path: inset(0 0 0 0); }
}
@media (prefers-reduced-motion: reduce) {
  [data-style-motion="vibrant-accents"] {
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
- Hero or discovery area that makes the Vibrant Accents identity obvious.
- Filter rail with categories, sort, price/status/location/tags as relevant.
- Product/service grid with real card states: hover, selected/favorited, unavailable, loading, empty.
- Detail preview or featured product section with concrete specs, images, trust, and action.
- Trust/conversion section: reviews, guarantees, delivery, security, booking/checkout steps.
- Footer with useful links, not a generic dump.

Style-specific application: use accent-hero-cta, color-coded-filter, vivid-stat-card, neutral-product-grid as the first component candidates. Use the accent/radius/surface rules from the operating mode.

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
- Use density appropriate to Vibrant Accents: Medium. Clear neutral layout with vivid focal points.
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

- No different color theme in every section.
- No vivid accents as body text.
- No accent variety that makes states ambiguous.
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

- First viewport unmistakably expresses Vibrant Accents.
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
