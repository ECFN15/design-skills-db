---
name: high-end-design
description: "Use this skill to create premium high-end websites and product experiences using restraint, refined type, strong imagery, material cues, luxury pacing, and quiet conversion paths. USE FOR: luxury sites, premium product pages, high-end portfolios, refined commerce, gallery-like brand systems. DO NOT USE FOR: unrelated backend work, non-visual tasks, or when an existing product design system must be followed exactly."
---

# High-End Design Skill

## Core Directive

You are a senior frontend design engineer specializing in High-End Design. The output must feel premium, restrained, confident, tactile, editorial, composed. Do not merely skin default components with a color palette. Build a visual operating system: layout, typography, color roles, component geometry, imagery, motion, interaction states, responsive behavior, and proof content must all point in the same direction.

Use this skill for luxury sites, premium product pages, high-end portfolios, refined commerce, gallery-like brand systems.


## Mandatory `<design_plan>`

Before writing code for a substantial UI, output a compact `<design_plan>` block. This is not optional; it prevents lazy default layouts.

Include:

1. **Use case:** product type, audience, primary action, and emotional target.
2. **Style direction:** one High-End Design sub-direction chosen from the archetypes below.
3. **Visual operating mode:** density, motion intensity, decoration budget, contrast mode, radius rule, and asset burden.
4. **First viewport:** nav type, H1 width/line strategy, hero proof object, CTA treatment, next-section hint.
5. **System contracts:** type, color, surface, geometry, evidence, and interaction state rules.
6. **Component plan:** at least four concrete components from the arsenal, with states.
7. **Motion plan:** which elements move, why they move, and reduced-motion fallback.
8. **Anti-slop sweep:** name the top three failure modes for this style and how you will avoid them.

If the request is tiny, do this mentally and keep the final answer concise. If the request asks for a full page/app, include the block.

## Non-Negotiable Principles

- Restraint must be visible through spacing, material, image quality, type, and pacing.
- Show the object, service, craft, or environment clearly; high-end does not mean vague.
- Use quiet conversion and refined interaction instead of loud effects.


## Style Operating Mode

| Control | Setting |
| --- | --- |
| density | Low-medium. Let objects and typography breathe, then add detail with captions and material specs. |
| motion | Low-medium. Slow image reveals, gallery pacing, tactile hover, product rotation, smooth chapter transitions. |
| decoration | Very low. Material, crop, and spacing are the decoration. |
| contrast | Refined high contrast or warm architectural neutrals. |
| radius | 0-4px for automotive/editorial, 8px for product cards, 32-80px only for soft luxury furniture/wellness. |
| type | Elegant serif or premium grotesk. Body text must stay readable and calm. |
| assets | Large product photography, material closeups, gallery frames, architectural images, craft process. |

These controls are binding. If the user's brand or existing codebase conflicts with a setting, preserve the user's constraints but keep the underlying High-End Design behavior.


## Signature System

Use these as executable rules, not inspiration labels:

- Luxury Geometry Signatures: Ferrari/BMW can be 0px and machined; B&O can use 40px pill CTAs; interiors may use 80px soft corners; Peak uses 4-8px utility precision.
- Object As Proof: the product or craft must be inspectable in the first or second section.
- Quiet Conversion: CTAs are visible but composed, often text links, small pills, or refined bars.
- Material Cue System: leather, metal, glass, fabric, wood, stone, carbon, or paper must influence surfaces and motion.

### Source Direction Matrix

The source URLs and full extracts stay in references. The main skill keeps only transferable lessons.

| Reference | Transferable lesson | Use for |
| --- | --- | --- |
| Bang & Olufsen - High-End Design Source Notes | Gallery of precise objects. A dark, velvet-lined showcase where each product rests, spotlighted with refined exactitude. | mixed |
| BMW.com - High-End Design Source Notes | Precision-engineered monochrome luxury; every detail is intentional, nothing is superfluous. | light |
| Ferrari - High-End Design Source Notes | Precision engineered machinery. Like the interior of a sleek, high-performance engine, where every component is black or silver, and only critical indicators glow red. | mixed |
| True Staging - High-End Design Source Notes | Architectural blueprint on aged parchment | dark |
| Peak Design - High-End Design Source Notes | Photographic gallery on architectural black and white. Product precision through high-contrast typography. | light |


## Raw-Derived Technical Signals

These signals are distilled from the large Refero database bundled in `references/`. They prevent the skill from forgetting the concrete values that made the references specific. Use them as a vocabulary, not as a command to use every value.

| Signal | Raw values to keep in mind |
| --- | --- |
| Color tokens | `#ffffff` (67x), `#000000` (36x), `#262626` (30x), `#191817` (27x), `#fcfaee` (19x), `#1a211e` (18x), `#f5efeb` (18x), `#060daa` (15x), `#181818` (14x), `#eef1f0` (14x), `#FF0000` (14x), `#8f8f8f` (12x) |
| Pixel/rhythm values | `16px` (115x), `12px` (86x), `14px` (72x), `4px` (72x), `1px` (63x), `8px` (47x), `24px` (44x), `0px` (40x), `32px` (36x), `40px` (34x), `0.007px` (26x), `20px` (25x), `10px` (24x), `600px` (24x) |
| Radius declarations | `border-radius:50%` (24x), `border-radius:0` (16x), `border-radius: 4px` (8x), `border-radius:0px` (8x), `border-radius: 8px` (6x), `border-radius: 9999px` (6x), `border-radius:40px` (6x), `border-radius:4px` (6x), `border-radius:2px` (4x), `border-radius: 12px 12px 8px 8px` (2x) |
| Typography declarations | `font-weight:400` (88x), `font-family:var(--font-bmwtypenextlatin)` (62x), `font-family:var(--font-beosupreme)` (58x), `font-size:16px` (56x), `line-height:1.63` (56x), `font-family:var(--font-custom)` (30x), `line-height:1.43` (30x), `font-size:14px` (26x), `letter-spacing:0.007px` (26x), `font-size:12px` (24x), `text-transform:uppercase` (24x), `font-weight: 700` (21x), `font-family: var(--font-bryant)` (20x), `letter-spacing:0.0830em` (20x) |
| Surface/effect declarations | `background:transparent` (14x), `background:var(--color-ash-mist)` (12x), `background: var(--color-cloud-white)` (10x), `background: var(--color-absolute-zero)` (8x), `background: transparent` (6x), `background:var(--color-carbon-black)` (6x), `background:var(--color-pure-white)` (6x), `border: #cccfcd` (6x), `border: 1px solid var(--color-slate-border)` (6x), `border: none` (6x), `background: var(--color-ash-gray)` (4x), `background: var(--color-badge-gray)` (4x), `background:#191817` (4x), `background:linear-gradient(180deg,#c9926b,#a8724a)` (4x) |
| Motion declarations | `transform:uppercase` (24x), `transform: uppercase` (20x), `transform: translateX(-50%)` (2x), `transform: translateY(-50%)` (2x), `transform:rotate(-3deg)` (2x), `transform:rotate(-8deg)` (2x), `transform:rotate(5deg)` (2x), `transition: 240-420ms` (1x) |

### Raw-Derived Token Starter

```css
:root {
  --source-color-1: #ffffff;
  --source-color-2: #000000;
  --source-color-3: #262626;
  --source-color-4: #191817;
  --source-color-5: #fcfaee;
  --source-color-6: #1a211e;
  --source-color-7: #f5efeb;
  --source-color-8: #060daa;
  --source-space-1: 16px;
  --source-space-2: 12px;
  --source-space-3: 14px;
  --source-space-4: 4px;
  --source-space-5: 1px;
  --source-space-6: 8px;
  --source-space-7: 24px;
  --source-space-8: 0px;
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

The first viewport must instantly say "High-End Design" without needing an explanatory paragraph. Build it from:

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
| Gallery Product Stage | large object image, serif/grotesk type, quiet CTA | luxury product pages |
| Machined Performance | black/silver surfaces, red accent, square panels | automotive and equipment |
| Architectural Warmth | large photography, warm paper, generous radius | interiors and hospitality |
| Refined Commerce | product grid with editorial pacing and material details | premium shops |

Selection rule:
- If the user asks for a whole website, choose one archetype for the first viewport and one supporting archetype for the proof/conversion section.
- If the user asks for an app/work surface, prioritize workflow clarity over theatrical hero composition.
- If the user asks for a hero only, still define nav, proof object, CTA, and next-section hint so the hero feels connected to a full page.


## Component Arsenal

Use at least four of these for full-page work. Components must have real content and states; do not create empty decorative blocks.

| Component | Purpose | Required states |
| --- | --- | --- |
| gallery-hero | First-viewport identity and proof object. | hover/focus/active plus selected |
| material-spec-row | Reusable style-specific module that carries identity and function. | loading/empty/error plus success |
| quiet-purchase-bar | Conversion, checkout, plan choice, or purchasing confidence. | responsive compact/expanded variants |
| editorial-product-card | Reusable style-specific module that carries identity and function. | keyboard focus and reduced-motion behavior |
| craft-process-sequence | Reusable style-specific module that carries identity and function. | hover/focus/active plus selected |
| large-image-chapter | Proof, product visibility, atmosphere, or editorial pacing. | loading/empty/error plus success |
| concierge-form | Input, validation, submission, and trust. | responsive compact/expanded variants |
| refined-footer | Designed closure with nav, CTA, and repeated motif. | keyboard focus and reduced-motion behavior |

Component construction rules:

- Build components with stable dimensions: 'aspect-ratio', explicit grid tracks, 'minmax(0, 1fr)', and responsive 'clamp()' spacing.
- Keep hover states inside the component bounds; hover cannot resize neighboring layout.
- Put icons in icon buttons where appropriate, but do not replace clear labels for destructive or purchasing actions.
- For forms and marketplace/product flows, include validation, disabled, loading, empty, and success behavior.
- For cards, decide whether they are informational, navigational, selectable, draggable, or purchasable before styling them.


## Component Blueprints

Use these blueprints when implementing the arsenal above. They turn the style into buildable UI, not just visual direction.

### gallery-hero

Purpose: First-viewport identity and proof object.

Structure:
- Start with real content: title, meaningful body copy or data, primary affordance, and one proof/detail element.
- Use a stable grid or aspect-ratio shell. The component should not change outer dimensions on hover, selection, loading, or error.
- Use High-End Design surface rules instead of default card styling.

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

### material-spec-row

Purpose: Reusable style-specific module that carries identity and function.

Structure:
- Start with real content: title, meaningful body copy or data, primary affordance, and one proof/detail element.
- Use consistent padding, radius, border, and typography tokens from the operating mode. Repeat the same geometry elsewhere.
- Use High-End Design surface rules instead of default card styling.

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

### quiet-purchase-bar

Purpose: Conversion, checkout, plan choice, or purchasing confidence.

Structure:
- Start with real content: title, meaningful body copy or data, primary affordance, and one proof/detail element.
- Use an explicit compact/mobile variant and a spacious desktop variant. Do not rely on browser wrapping to solve layout.
- Use High-End Design surface rules instead of default card styling.

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

### editorial-product-card

Purpose: Reusable style-specific module that carries identity and function.

Structure:
- Start with real content: title, meaningful body copy or data, primary affordance, and one proof/detail element.
- Use a stable grid or aspect-ratio shell. The component should not change outer dimensions on hover, selection, loading, or error.
- Use High-End Design surface rules instead of default card styling.

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

### craft-process-sequence

Purpose: Reusable style-specific module that carries identity and function.

Structure:
- Start with real content: title, meaningful body copy or data, primary affordance, and one proof/detail element.
- Use consistent padding, radius, border, and typography tokens from the operating mode. Repeat the same geometry elsewhere.
- Use High-End Design surface rules instead of default card styling.

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

### large-image-chapter

Purpose: Proof, product visibility, atmosphere, or editorial pacing.

Structure:
- Start with real content: title, meaningful body copy or data, primary affordance, and one proof/detail element.
- Use an explicit compact/mobile variant and a spacious desktop variant. Do not rely on browser wrapping to solve layout.
- Use High-End Design surface rules instead of default card styling.

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

### concierge-form

Purpose: Input, validation, submission, and trust.

Structure:
- Start with real content: title, meaningful body copy or data, primary affordance, and one proof/detail element.
- Use a stable grid or aspect-ratio shell. The component should not change outer dimensions on hover, selection, loading, or error.
- Use High-End Design surface rules instead of default card styling.

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

### refined-footer

Purpose: Designed closure with nav, CTA, and repeated motif.

Structure:
- Start with real content: title, meaningful body copy or data, primary affordance, and one proof/detail element.
- Use consistent padding, radius, border, and typography tokens from the operating mode. Repeat the same geometry elsewhere.
- Use High-End Design surface rules instead of default card styling.

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
```

### Tailwind/React Section Skeleton

```tsx
export function HighEndDesignSection() {
  return (
    <section className="relative overflow-hidden px-6 py-28 md:py-40">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 md:grid-cols-12 md:gap-6">
        <div className="md:col-span-5">
          <p className="mb-4 text-sm font-medium tracking-[0.08em] text-muted-foreground">Specific category label</p>
          <h2 className="text-balance text-4xl font-semibold leading-[0.95] tracking-tight md:text-7xl">
            A concrete promise with High-End Design identity.
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

Motion must be specific to High-End Design. It should never be generic scroll-fade spam.

- Use slow, confident reveals: image crop, material closeup, product scale from 0.96 to 1.
- Hover states should feel tactile and quiet: underline, image zoom, border refinement.
- Avoid constant loops; luxury motion is paced, not restless.


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
[data-style-motion="luxury-crop"] {
  transition:
    transform var(--source-motion-medium, 420ms) var(--source-ease-out, cubic-bezier(0.16, 1, 0.30, 1)),
    opacity var(--source-motion-medium, 420ms) var(--source-ease-out, cubic-bezier(0.16, 1, 0.30, 1)),
    filter 220ms ease,
    clip-path 520ms var(--source-ease-out, cubic-bezier(0.16, 1, 0.30, 1));
  will-change: transform, opacity, filter, clip-path;
}
[data-style-motion="luxury-crop"]:is(:hover, :focus-visible, [data-active="true"]) {
  filter: brightness(1.03) contrast(1.02); transform: scale(1.015);
}

@keyframes luxury-crop-reveal {
  from { opacity: 0; transform: scale(.96); clip-path: inset(10% 8% 10% 8%); }
  to { opacity: 1; transform: scale(1); clip-path: inset(0 0 0 0); }
}
@media (prefers-reduced-motion: reduce) {
  [data-style-motion="luxury-crop"] {
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
- Hero or discovery area that makes the High-End Design identity obvious.
- Filter rail with categories, sort, price/status/location/tags as relevant.
- Product/service grid with real card states: hover, selected/favorited, unavailable, loading, empty.
- Detail preview or featured product section with concrete specs, images, trust, and action.
- Trust/conversion section: reviews, guarantees, delivery, security, booking/checkout steps.
- Footer with useful links, not a generic dump.

Style-specific application: use gallery-hero, material-spec-row, quiet-purchase-bar, editorial-product-card as the first component candidates. Use the accent/radius/surface rules from the operating mode.

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
- Use density appropriate to High-End Design: Low-medium. Let objects and typography breathe, then add detail with captions and material specs.
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

- No gold cliches, fake luxury gradients, excessive blur, or generic black pages.
- No hiding product details behind mood imagery.
- No illegible tiny type used as fake sophistication.
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

- First viewport unmistakably expresses High-End Design.
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
