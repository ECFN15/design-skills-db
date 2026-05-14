---
name: pastel
description: "Use this skill to create Pastel visual design systems that feel soft, approachable, friendly, warm, optimistic, gentle. USE FOR: soft consumer brands, wellness, friendly SaaS, playful products, approachable commerce, community pages. DO NOT USE FOR: unrelated backend work, non-visual tasks, or when an existing product design system must be followed exactly."
---

# Pastel Skill

## Core Directive

You are a senior frontend design engineer specializing in Pastel. The output must feel soft, approachable, friendly, warm, optimistic, gentle. Do not merely skin default components with a color palette. Build a visual operating system: layout, typography, color roles, component geometry, imagery, motion, interaction states, responsive behavior, and proof content must all point in the same direction.

Use this skill for soft consumer brands, wellness, friendly SaaS, playful products, approachable commerce, community pages.


## Mandatory `<design_plan>`

Before writing code for a substantial UI, output a compact `<design_plan>` block. This is not optional; it prevents lazy default layouts.

Include:

1. **Use case:** product type, audience, primary action, and emotional target.
2. **Style direction:** one Pastel sub-direction chosen from the archetypes below.
3. **Visual operating mode:** density, motion intensity, decoration budget, contrast mode, radius rule, and asset burden.
4. **First viewport:** nav type, H1 width/line strategy, hero proof object, CTA treatment, next-section hint.
5. **System contracts:** type, color, surface, geometry, evidence, and interaction state rules.
6. **Component plan:** at least four concrete components from the arsenal, with states.
7. **Motion plan:** which elements move, why they move, and reduced-motion fallback.
8. **Anti-slop sweep:** name the top three failure modes for this style and how you will avoid them.

If the request is tiny, do this mentally and keep the final answer concise. If the request asks for a full page/app, include the block.

## Non-Negotiable Principles

- Pastel must be soft but structured: readable text, strong CTAs, and clear layout.
- Use color to group paths, reduce anxiety, or create warmth.
- Pair gentle palettes with enough contrast and mature typography.


## Style Operating Mode

| Control | Setting |
| --- | --- |
| density | Medium. Friendly pages need enough content and guidance. |
| motion | Low-medium. Gentle hover, soft reveal, buoyant product interactions. |
| decoration | Medium. Soft shapes and color blocks can guide, but keep hierarchy clear. |
| contrast | Pastel surfaces with dark readable type and strong CTA color. |
| radius | 18-32px for friendly panels, 999px for pills. |
| type | Rounded sans or warm grotesk, sometimes friendly serif. |
| assets | Soft product imagery, illustrated objects, lifestyle photos, friendly icons. |

These controls are binding. If the user's brand or existing codebase conflicts with a setting, preserve the user's constraints but keep the underlying Pastel behavior.


## Signature System

Use these as executable rules, not inspiration labels:

- Pastel Contrast Discipline: pastel belongs in backgrounds and fills, not long text.
- Soft Pathways: each color can represent a step, audience, category, or product family.
- Friendly Tactility: rounded modules, soft shadows, and gentle press states create warmth.
- Adult Softness: use refined typography and spacing to avoid toy-like outcomes.

### Source Direction Matrix

The source URLs and full extracts stay in references. The main skill keeps only transferable lessons.

| Reference | Transferable lesson | Use for |
| --- | --- | --- |
| Pastel - Style Reference | Source-specific layout, color, type, component, and motion lessons. | Extract transferable visual rules, not a clone. |
| Palette Supply - Style Reference | Source-specific layout, color, type, component, and motion lessons. | Extract transferable visual rules, not a clone. |
| Recess - Style Reference | Source-specific layout, color, type, component, and motion lessons. | Extract transferable visual rules, not a clone. |
| GRAZA - Style Reference | Source-specific layout, color, type, component, and motion lessons. | Extract transferable visual rules, not a clone. |
| Podcorn - Style Reference | Source-specific layout, color, type, component, and motion lessons. | Extract transferable visual rules, not a clone. |
| Podia - Style Reference | Source-specific layout, color, type, component, and motion lessons. | Extract transferable visual rules, not a clone. |


## Raw-Derived Technical Signals

These signals are distilled from the large Refero database bundled in `references/`. They prevent the skill from forgetting the concrete values that made the references specific. Use them as a vocabulary, not as a command to use every value.

| Signal | Raw values to keep in mind |
| --- | --- |
| Color tokens | `#ffffff` (32x), `#25385b` (15x), `#3c422` (15x), `#090335` (12x), `#165dfb` (12x), `#f2f0e9` (12x), `#06040e` (11x), `#d1e030` (11x), `#fff4ec` (11x), `#fff4f2` (11x), `#a2b0ff` (8x), `#f5f5f4` (8x) |
| Pixel/rhythm values | `20px` (49x), `16px` (45x), `10px` (36x), `8px` (34x), `1px` (33x), `0px` (31x), `24px` (30x), `100px` (29x), `12px` (27x), `40px` (21x), `56px` (17x), `8.8px` (16x), `120px` (14x), `80px` (14x) |
| Radius declarations | `border-radius: 0` (10x), `--radius-buttons: 10px` (6x), `border-radius: var(--radius-buttons)` (6x), `border-radius: 10px` (5x), `border-radius: 100px` (4x), `border-radius: 20px` (4x), `--radius-badges: 9999px` (3x), `--radius-buttons: 16px` (3x), `--radius-cards: 56px` (3x), `--radius-default: 8.8px` (3x) |
| Typography declarations | `font-family: inherit` (9x), `font-family: var(--font-primary)` (7x), `font-weight: 400` (7x), `font-weight: 700` (7x), `font-weight: 500` (6x), `font-family: var(--font-display)` (4x), `font-family: 'GT Alpina Typewriter', monospace` (3x), `font-family: var(--font-body)` (3x), `font-size: 16px` (3x), `font-size: var(--text-body)` (3x), `letter-spacing: -0.19px` (3x), `letter-spacing: var(--tracking-body)` (3x), `line-height: 1` (3x), `line-height: var(--leading-body)` (3x) |
| Surface/effect declarations | `border: none` (11x), `background: transparent` (10x), `background: var(--color-canvas)` (7x), `background: var(--color-cta)` (5x), `background: var(--surface-1)` (5x), `border: 1px solid var(--color-text)` (5x), `background: #d1e030` (3x), `background: #fff4ec` (3x), `background: #fff4f2` (3x), `background: var(--color-cta-bg)` (3x), `background: var(--surface-0)` (3x), `border: 1px solid var(--color-cta-text)` (3x), `background: #165dfb` (2x), `background: #3051a8` (2x) |
| Motion declarations | `transform: translateY(0)` (4x), `@keyframes float` (3x), `animation: float 8s ease-in-out infinite` (3x), `transform: translateY(-12px)` (3x), `duration: 0.01ms !important;` (2x), `transition: opacity 200ms ease` (2x), `transform: translateY(20px)` (1x), `transform: uppercase` (1x), `transition: background 200ms ease` (1x), `transition: opacity 0.8s ease, transform 0.8s ease` (1x), `transition: opacity 150ms ease` (1x) |

### Raw-Derived Token Starter

```css
:root {
  --source-color-1: #ffffff;
  --source-color-2: #25385b;
  --source-color-3: #3c422;
  --source-color-4: #090335;
  --source-color-5: #165dfb;
  --source-color-6: #f2f0e9;
  --source-color-7: #06040e;
  --source-color-8: #d1e030;
  --source-space-1: 20px;
  --source-space-2: 16px;
  --source-space-3: 10px;
  --source-space-4: 8px;
  --source-space-5: 1px;
  --source-space-6: 0px;
  --source-space-7: 24px;
  --source-space-8: 100px;
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

The first viewport must instantly say "Pastel" without needing an explanatory paragraph. Build it from:

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
| Friendly Commerce | soft product grid, warm CTA, category colors | consumer stores |
| Wellness Flow | calm hero, soft sections, guided booking | wellness/health |
| Approachable SaaS | gentle UI frames with concrete workflow proof | friendly apps |
| Community Page | people, cards, events, soft onboarding | communities |

Selection rule:
- If the user asks for a whole website, choose one archetype for the first viewport and one supporting archetype for the proof/conversion section.
- If the user asks for an app/work surface, prioritize workflow clarity over theatrical hero composition.
- If the user asks for a hero only, still define nav, proof object, CTA, and next-section hint so the hero feels connected to a full page.


## Component Arsenal

Use at least four of these for full-page work. Components must have real content and states; do not create empty decorative blocks.

| Component | Purpose | Required states |
| --- | --- | --- |
| pastel-hero-card | First-viewport identity and proof object. | hover/focus/active plus selected |
| soft-category-pill | Reusable style-specific module that carries identity and function. | loading/empty/error plus success |
| friendly-product-card | Reusable style-specific module that carries identity and function. | responsive compact/expanded variants |
| gentle-stepper | Reusable style-specific module that carries identity and function. | keyboard focus and reduced-motion behavior |
| warm-testimonial | Reusable style-specific module that carries identity and function. | hover/focus/active plus selected |
| rounded-form | Input, validation, submission, and trust. | loading/empty/error plus success |
| soft-pricing-card | Conversion, checkout, plan choice, or purchasing confidence. | responsive compact/expanded variants |
| community-strip | Reusable style-specific module that carries identity and function. | keyboard focus and reduced-motion behavior |

Component construction rules:

- Build components with stable dimensions: 'aspect-ratio', explicit grid tracks, 'minmax(0, 1fr)', and responsive 'clamp()' spacing.
- Keep hover states inside the component bounds; hover cannot resize neighboring layout.
- Put icons in icon buttons where appropriate, but do not replace clear labels for destructive or purchasing actions.
- For forms and marketplace/product flows, include validation, disabled, loading, empty, and success behavior.
- For cards, decide whether they are informational, navigational, selectable, draggable, or purchasable before styling them.


## Component Blueprints

Use these blueprints when implementing the arsenal above. They turn the style into buildable UI, not just visual direction.

### pastel-hero-card

Purpose: First-viewport identity and proof object.

Structure:
- Start with real content: title, meaningful body copy or data, primary affordance, and one proof/detail element.
- Use a stable grid or aspect-ratio shell. The component should not change outer dimensions on hover, selection, loading, or error.
- Use Pastel surface rules instead of default card styling.

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

### soft-category-pill

Purpose: Reusable style-specific module that carries identity and function.

Structure:
- Start with real content: title, meaningful body copy or data, primary affordance, and one proof/detail element.
- Use consistent padding, radius, border, and typography tokens from the operating mode. Repeat the same geometry elsewhere.
- Use Pastel surface rules instead of default card styling.

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

### friendly-product-card

Purpose: Reusable style-specific module that carries identity and function.

Structure:
- Start with real content: title, meaningful body copy or data, primary affordance, and one proof/detail element.
- Use an explicit compact/mobile variant and a spacious desktop variant. Do not rely on browser wrapping to solve layout.
- Use Pastel surface rules instead of default card styling.

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

### gentle-stepper

Purpose: Reusable style-specific module that carries identity and function.

Structure:
- Start with real content: title, meaningful body copy or data, primary affordance, and one proof/detail element.
- Use a stable grid or aspect-ratio shell. The component should not change outer dimensions on hover, selection, loading, or error.
- Use Pastel surface rules instead of default card styling.

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

### warm-testimonial

Purpose: Reusable style-specific module that carries identity and function.

Structure:
- Start with real content: title, meaningful body copy or data, primary affordance, and one proof/detail element.
- Use consistent padding, radius, border, and typography tokens from the operating mode. Repeat the same geometry elsewhere.
- Use Pastel surface rules instead of default card styling.

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

### rounded-form

Purpose: Input, validation, submission, and trust.

Structure:
- Start with real content: title, meaningful body copy or data, primary affordance, and one proof/detail element.
- Use an explicit compact/mobile variant and a spacious desktop variant. Do not rely on browser wrapping to solve layout.
- Use Pastel surface rules instead of default card styling.

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

### soft-pricing-card

Purpose: Conversion, checkout, plan choice, or purchasing confidence.

Structure:
- Start with real content: title, meaningful body copy or data, primary affordance, and one proof/detail element.
- Use a stable grid or aspect-ratio shell. The component should not change outer dimensions on hover, selection, loading, or error.
- Use Pastel surface rules instead of default card styling.

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

### community-strip

Purpose: Reusable style-specific module that carries identity and function.

Structure:
- Start with real content: title, meaningful body copy or data, primary affordance, and one proof/detail element.
- Use consistent padding, radius, border, and typography tokens from the operating mode. Repeat the same geometry elsewhere.
- Use Pastel surface rules instead of default card styling.

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
```

### Tailwind/React Section Skeleton

```tsx
export function PastelSection() {
  return (
    <section className="relative overflow-hidden px-6 py-28 md:py-40">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 md:grid-cols-12 md:gap-6">
        <div className="md:col-span-5">
          <p className="mb-4 text-sm font-medium tracking-[0.08em] text-muted-foreground">Specific category label</p>
          <h2 className="text-balance text-4xl font-semibold leading-[0.95] tracking-tight md:text-7xl">
            A concrete promise with Pastel identity.
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

Motion must be specific to Pastel. It should never be generic scroll-fade spam.

- Use gentle y movement, soft scale, and color transitions.
- Keep bounces small; avoid cartoon physics unless the brand is clearly playful.
- Inputs and CTAs should feel responsive, not slippery.


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
[data-style-motion="pastel"] {
  transition:
    transform var(--source-motion-medium, 420ms) var(--source-ease-out, cubic-bezier(0.16, 1, 0.30, 1)),
    opacity var(--source-motion-medium, 420ms) var(--source-ease-out, cubic-bezier(0.16, 1, 0.30, 1)),
    filter 220ms ease,
    clip-path 520ms var(--source-ease-out, cubic-bezier(0.16, 1, 0.30, 1));
  will-change: transform, opacity, filter, clip-path;
}
[data-style-motion="pastel"]:is(:hover, :focus-visible, [data-active="true"]) {
  filter: brightness(1.03); transform: translateY(-1px);
}

@keyframes style-reveal {
  from { opacity: 0; transform: translateY(22px); clip-path: inset(8% 0 8% 0); }
  to { opacity: 1; transform: translateY(0); clip-path: inset(0 0 0 0); }
}
@media (prefers-reduced-motion: reduce) {
  [data-style-motion="pastel"] {
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
- Hero or discovery area that makes the Pastel identity obvious.
- Filter rail with categories, sort, price/status/location/tags as relevant.
- Product/service grid with real card states: hover, selected/favorited, unavailable, loading, empty.
- Detail preview or featured product section with concrete specs, images, trust, and action.
- Trust/conversion section: reviews, guarantees, delivery, security, booking/checkout steps.
- Footer with useful links, not a generic dump.

Style-specific application: use pastel-hero-card, soft-category-pill, friendly-product-card, gentle-stepper as the first component candidates. Use the accent/radius/surface rules from the operating mode.

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
- Use density appropriate to Pastel: Medium. Friendly pages need enough content and guidance.
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

- No washed-out low-contrast copy.
- No too many candy colors at once.
- No childish treatment for serious flows.
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

- First viewport unmistakably expresses Pastel.
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
