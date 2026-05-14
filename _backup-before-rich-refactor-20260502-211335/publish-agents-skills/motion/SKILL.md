---
name: motion
description: "Use this skill to create Motion visual design systems that feel kinetic, cinematic, responsive, tactile, sequenced, alive. USE FOR: motion-heavy websites, animated product pages, scroll narratives, cinematic launches, interactive brand experiences. DO NOT USE FOR: unrelated backend work, non-visual tasks, or when an existing product design system must be followed exactly."
---

# Motion Skill

## Core Directive

You are a senior frontend design engineer specializing in Motion. The output must feel kinetic, cinematic, responsive, tactile, sequenced, alive. Do not merely skin default components with a color palette. Build a visual operating system: layout, typography, color roles, component geometry, imagery, motion, interaction states, responsive behavior, and proof content must all point in the same direction.

Use this skill for motion-heavy websites, animated product pages, scroll narratives, cinematic launches, interactive brand experiences.


## Mandatory `<design_plan>`

Before writing code for a substantial UI, output a compact `<design_plan>` block. This is not optional; it prevents lazy default layouts.

Include:

1. **Use case:** product type, audience, primary action, and emotional target.
2. **Style direction:** one Motion sub-direction chosen from the archetypes below.
3. **Visual operating mode:** density, motion intensity, decoration budget, contrast mode, radius rule, and asset burden.
4. **First viewport:** nav type, H1 width/line strategy, hero proof object, CTA treatment, next-section hint.
5. **System contracts:** type, color, surface, geometry, evidence, and interaction state rules.
6. **Component plan:** at least four concrete components from the arsenal, with states.
7. **Motion plan:** which elements move, why they move, and reduced-motion fallback.
8. **Anti-slop sweep:** name the top three failure modes for this style and how you will avoid them.

If the request is tiny, do this mentally and keep the final answer concise. If the request asks for a full page/app, include the block.

## Non-Negotiable Principles

- Motion is structure: it reveals sequence, transition, feedback, continuity, and story.
- Define motion roles before coding and keep nonessential motion out of dense tasks.
- Use transform and opacity, respect reduced motion, and avoid layout-triggering animation.


## Style Operating Mode

| Control | Setting |
| --- | --- |
| density | Variable. Motion-heavy pages alternate cinematic emptiness with focused interaction. |
| motion | Very high but choreographed. Scroll, pointer, 3D, reveal, and state transitions. |
| decoration | Medium. Motion can create graphic identity if the static frame still works. |
| contrast | Depends on concept, but moving text must remain readable. |
| radius | Driven by concept; motion components need stable bounds. |
| type | Large display type with readable body; kinetic type must have fallback. |
| assets | Video, canvas, 3D objects, animated masks, product frames, shader backgrounds. |

These controls are binding. If the user's brand or existing codebase conflicts with a setting, preserve the user's constraints but keep the underlying Motion behavior.


## Signature System

Use these as executable rules, not inspiration labels:

- Motion Archetypes By Engine: choose GSAP scroll, 3D camera/orbit, shader field, scanline terminal, kinetic type, or physical card stack.
- Static Frame Test: every section must still read if animation is disabled.
- Reduced Motion Contract: provide a visible but nonmoving equivalent.
- Choreography Map: hero, transition, proof, interaction, and footer each get distinct motion roles.

### Source Direction Matrix

The source URLs and full extracts stay in references. The main skill keeps only transferable lessons.

| Reference | Transferable lesson | Use for |
| --- | --- | --- |
| Liquid Death - Style Reference | Source-specific layout, color, type, component, and motion lessons. | Extract transferable visual rules, not a clone. |
| Heavyweight - Style Reference | Source-specific layout, color, type, component, and motion lessons. | Extract transferable visual rules, not a clone. |
| Handshake - Style Reference | Source-specific layout, color, type, component, and motion lessons. | Extract transferable visual rules, not a clone. |
| cthdrl - Style Reference | Source-specific layout, color, type, component, and motion lessons. | Extract transferable visual rules, not a clone. |
| Superlative - Style Reference | Source-specific layout, color, type, component, and motion lessons. | Extract transferable visual rules, not a clone. |
| MekaVerse - Style Reference | Source-specific layout, color, type, component, and motion lessons. | Extract transferable visual rules, not a clone. |
| HAPE PRIME - Style Reference | Source-specific layout, color, type, component, and motion lessons. | Extract transferable visual rules, not a clone. |
| Moving Parts - Style Reference | Source-specific layout, color, type, component, and motion lessons. | Extract transferable visual rules, not a clone. |
| homunculus Inc. - Style Reference | Source-specific layout, color, type, component, and motion lessons. | Extract transferable visual rules, not a clone. |


## Raw-Derived Technical Signals

These signals are distilled from the large Refero database bundled in `references/`. They prevent the skill from forgetting the concrete values that made the references specific. Use them as a vocabulary, not as a command to use every value.

| Signal | Raw values to keep in mind |
| --- | --- |
| Color tokens | `#ffffff` (51x), `#000000` (37x), `#000` (20x), `#0000ff` (14x), `#fff` (12x), `#d2ac5a` (9x), `#d3fb52` (9x), `#141414` (8x), `#232323` (8x), `#999999` (8x), `#151515` (7x), `#efefef` (7x) |
| Pixel/rhythm values | `0px` (80x), `1px` (54x), `16px` (52x), `24px` (48x), `8px` (47x), `12px` (43x), `20px` (41x), `10px` (32x), `15px` (28x), `40px` (28x), `30px` (27x), `60px` (27x), `26px` (25x), `4px` (23x) |
| Radius declarations | `border-radius: 0` (11x), `--radius: 0` (4x), `border-radius: 26px` (4x), `border-radius: 90.3833px` (4x), `--radius-buttons: 0px` (3x), `--radius-cards: 90.3833px` (3x), `border-radius: var(--radius-button)` (3x), `--radius-button: 0` (2x), `--radius-buttons: 0` (2x), `--radius-buttons: 8px` (2x) |
| Typography declarations | `text-transform: uppercase` (18x), `font-family: var(--font-display)` (13x), `font-family: var(--font-body)` (8x), `font-weight: 700` (8x), `font-weight: 400` (6x), `letter-spacing: 0.08em` (5x), `font-family: var(--font-mono)` (4x), `font-weight: 500` (4x), `line-height: 0.85` (4x), `line-height: var(--leading-display)` (4x), `font-size: 13px` (3x), `font-size: 14px` (3x), `font-size: var(--text-body)` (3x), `font-size: var(--text-display)` (3x) |
| Surface/effect declarations | `background: transparent` (12x), `opacity: 1` (8x), `background: #000` (7x), `border: none` (7x), `opacity: 0` (7x), `background: var(--color-bg)` (6x), `background: #ffffff` (5x), `border: 1px solid currentColor` (5x), `background: oklab(1 0 5.96046e-8 / 0.06)` (4x), `background: var(--color-accent)` (4x), `backdrop-filter: blur(12px)` (3x), `background: #fff` (3x), `background: conic-gradient(` (3x), `background: rgba(255, 255, 255, 0.2)` (3x) |
| Motion declarations | `transform: uppercase` (18x), `transform: translateY(0)` (7x), `transition:` (4x), `transform: translateY(40px)` (3x), `@keyframes nebula-drift` (2x), `@keyframes rise` (2x), `@keyframes scroll-x` (2x), `animation: scroll-x 30s linear infinite` (2x), `duration: 0.01ms !important;` (2x), `duration: 0.8` (2x), `transform: translate(0, 0) scale(1)` (2x), `transform: translateX(-50%)` (2x), `transform: translateY(-2px)` (2x), `transform: translateY(60px)` (2x) |

### Raw-Derived Token Starter

```css
:root {
  --source-color-1: #ffffff;
  --source-color-2: #000000;
  --source-color-3: #000;
  --source-color-4: #0000ff;
  --source-color-5: #fff;
  --source-color-6: #d2ac5a;
  --source-color-7: #d3fb52;
  --source-color-8: #141414;
  --source-space-1: 0px;
  --source-space-2: 1px;
  --source-space-3: 16px;
  --source-space-4: 24px;
  --source-space-5: 8px;
  --source-space-6: 12px;
  --source-space-7: 20px;
  --source-space-8: 10px;
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

The first viewport must instantly say "Motion" without needing an explanatory paragraph. Build it from:

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
| Scroll Narrative | pinned text, scrubbed media, chapter transitions | launch storytelling |
| Interactive 3D Stage | camera, object rotation, pointer parallax | product and game |
| Kinetic Typography | words reveal, split, mask, or scrub | editorial and campaigns |
| Motion Product Demo | UI states animate as workflow proof | SaaS and apps |

Selection rule:
- If the user asks for a whole website, choose one archetype for the first viewport and one supporting archetype for the proof/conversion section.
- If the user asks for an app/work surface, prioritize workflow clarity over theatrical hero composition.
- If the user asks for a hero only, still define nav, proof object, CTA, and next-section hint so the hero feels connected to a full page.


## Component Arsenal

Use at least four of these for full-page work. Components must have real content and states; do not create empty decorative blocks.

| Component | Purpose | Required states |
| --- | --- | --- |
| pinned-scroll-chapter | Reusable style-specific module that carries identity and function. | hover/focus/active plus selected |
| scrubbed-gallery | Proof, product visibility, atmosphere, or editorial pacing. | loading/empty/error plus success |
| kinetic-word-reveal | Structured animation or sequence. | responsive compact/expanded variants |
| motion-card-stack | Structured animation or sequence. | keyboard focus and reduced-motion behavior |
| cursor-parallax-stage | Reusable style-specific module that carries identity and function. | hover/focus/active plus selected |
| timeline-control | Reusable style-specific module that carries identity and function. | loading/empty/error plus success |
| animated-product-demo | Structured animation or sequence. | responsive compact/expanded variants |
| reduced-motion-fallback | Structured animation or sequence. | keyboard focus and reduced-motion behavior |

Component construction rules:

- Build components with stable dimensions: 'aspect-ratio', explicit grid tracks, 'minmax(0, 1fr)', and responsive 'clamp()' spacing.
- Keep hover states inside the component bounds; hover cannot resize neighboring layout.
- Put icons in icon buttons where appropriate, but do not replace clear labels for destructive or purchasing actions.
- For forms and marketplace/product flows, include validation, disabled, loading, empty, and success behavior.
- For cards, decide whether they are informational, navigational, selectable, draggable, or purchasable before styling them.


## Component Blueprints

Use these blueprints when implementing the arsenal above. They turn the style into buildable UI, not just visual direction.

### pinned-scroll-chapter

Purpose: Reusable style-specific module that carries identity and function.

Structure:
- Start with real content: title, meaningful body copy or data, primary affordance, and one proof/detail element.
- Use a stable grid or aspect-ratio shell. The component should not change outer dimensions on hover, selection, loading, or error.
- Use Motion surface rules instead of default card styling.

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

### scrubbed-gallery

Purpose: Proof, product visibility, atmosphere, or editorial pacing.

Structure:
- Start with real content: title, meaningful body copy or data, primary affordance, and one proof/detail element.
- Use consistent padding, radius, border, and typography tokens from the operating mode. Repeat the same geometry elsewhere.
- Use Motion surface rules instead of default card styling.

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

### kinetic-word-reveal

Purpose: Structured animation or sequence.

Structure:
- Start with real content: title, meaningful body copy or data, primary affordance, and one proof/detail element.
- Use an explicit compact/mobile variant and a spacious desktop variant. Do not rely on browser wrapping to solve layout.
- Use Motion surface rules instead of default card styling.

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

### motion-card-stack

Purpose: Structured animation or sequence.

Structure:
- Start with real content: title, meaningful body copy or data, primary affordance, and one proof/detail element.
- Use a stable grid or aspect-ratio shell. The component should not change outer dimensions on hover, selection, loading, or error.
- Use Motion surface rules instead of default card styling.

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

### cursor-parallax-stage

Purpose: Reusable style-specific module that carries identity and function.

Structure:
- Start with real content: title, meaningful body copy or data, primary affordance, and one proof/detail element.
- Use consistent padding, radius, border, and typography tokens from the operating mode. Repeat the same geometry elsewhere.
- Use Motion surface rules instead of default card styling.

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

### timeline-control

Purpose: Reusable style-specific module that carries identity and function.

Structure:
- Start with real content: title, meaningful body copy or data, primary affordance, and one proof/detail element.
- Use an explicit compact/mobile variant and a spacious desktop variant. Do not rely on browser wrapping to solve layout.
- Use Motion surface rules instead of default card styling.

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

### animated-product-demo

Purpose: Structured animation or sequence.

Structure:
- Start with real content: title, meaningful body copy or data, primary affordance, and one proof/detail element.
- Use a stable grid or aspect-ratio shell. The component should not change outer dimensions on hover, selection, loading, or error.
- Use Motion surface rules instead of default card styling.

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

### reduced-motion-fallback

Purpose: Structured animation or sequence.

Structure:
- Start with real content: title, meaningful body copy or data, primary affordance, and one proof/detail element.
- Use consistent padding, radius, border, and typography tokens from the operating mode. Repeat the same geometry elsewhere.
- Use Motion surface rules instead of default card styling.

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
```

### Tailwind/React Section Skeleton

```tsx
export function MotionSection() {
  return (
    <section className="relative overflow-hidden px-6 py-28 md:py-40">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 md:grid-cols-12 md:gap-6">
        <div className="md:col-span-5">
          <p className="mb-4 text-sm font-medium tracking-[0.08em] text-muted-foreground">Specific category label</p>
          <h2 className="text-balance text-4xl font-semibold leading-[0.95] tracking-tight md:text-7xl">
            A concrete promise with Motion identity.
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

Motion must be specific to Motion. It should never be generic scroll-fade spam.

- Map motion before coding: hero entrance, chapter transition, proof animation, interaction feedback, closure.
- Use pinned sections and scrub only when they create a readable sequence.
- Every animated section needs a reduced-motion equivalent.


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
[data-style-motion="motion-chapter"] {
  transition:
    transform var(--source-motion-medium, 420ms) var(--source-ease-out, cubic-bezier(0.16, 1, 0.30, 1)),
    opacity var(--source-motion-medium, 420ms) var(--source-ease-out, cubic-bezier(0.16, 1, 0.30, 1)),
    filter 220ms ease,
    clip-path 520ms var(--source-ease-out, cubic-bezier(0.16, 1, 0.30, 1));
  will-change: transform, opacity, filter, clip-path;
}
[data-style-motion="motion-chapter"]:is(:hover, :focus-visible, [data-active="true"]) {
  filter: contrast(1.06); transform: translateY(-2px) scale(1.01);
}

@keyframes motion-band-reveal {
  from { opacity: 0; transform: translateY(44px) scale(.96); clip-path: inset(12% 0 12% 0); }
  to { opacity: 1; transform: translateY(0) scale(1); clip-path: inset(0 0 0 0); }
}
@keyframes motion-marquee-x {
  to { transform: translateX(-50%); }
}
@media (prefers-reduced-motion: reduce) {
  [data-style-motion="motion-chapter"] {
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
- Hero or discovery area that makes the Motion identity obvious.
- Filter rail with categories, sort, price/status/location/tags as relevant.
- Product/service grid with real card states: hover, selected/favorited, unavailable, loading, empty.
- Detail preview or featured product section with concrete specs, images, trust, and action.
- Trust/conversion section: reviews, guarantees, delivery, security, booking/checkout steps.
- Footer with useful links, not a generic dump.

Style-specific application: use pinned-scroll-chapter, scrubbed-gallery, kinetic-word-reveal, motion-card-stack as the first component candidates. Use the accent/radius/surface rules from the operating mode.

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
- Use density appropriate to Motion: Variable. Motion-heavy pages alternate cinematic emptiness with focused interaction.
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

- No animating everything.
- No motion used to compensate for weak content.
- No width/height/top/left animation when transform can do it.
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

- First viewport unmistakably expresses Motion.
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
