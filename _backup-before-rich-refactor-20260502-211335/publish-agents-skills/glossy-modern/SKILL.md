---
name: glossy-modern
description: "Use this skill to create Glossy Modern visual design systems that feel polished, luminous, smooth, premium, dimensional, modern. USE FOR: polished modern SaaS, glassy product pages, premium tech, visual tools, interactive brand systems. DO NOT USE FOR: unrelated backend work, non-visual tasks, or when an existing product design system must be followed exactly."
---

# Glossy Modern Skill

## Core Directive

You are a senior frontend design engineer specializing in Glossy Modern. The output must feel polished, luminous, smooth, premium, dimensional, modern. Do not merely skin default components with a color palette. Build a visual operating system: layout, typography, color roles, component geometry, imagery, motion, interaction states, responsive behavior, and proof content must all point in the same direction.

Use this skill for polished modern SaaS, glassy product pages, premium tech, visual tools, interactive brand systems.


## Mandatory `<design_plan>`

Before writing code for a substantial UI, output a compact `<design_plan>` block. This is not optional; it prevents lazy default layouts.

Include:

1. **Use case:** product type, audience, primary action, and emotional target.
2. **Style direction:** one Glossy Modern sub-direction chosen from the archetypes below.
3. **Visual operating mode:** density, motion intensity, decoration budget, contrast mode, radius rule, and asset burden.
4. **First viewport:** nav type, H1 width/line strategy, hero proof object, CTA treatment, next-section hint.
5. **System contracts:** type, color, surface, geometry, evidence, and interaction state rules.
6. **Component plan:** at least four concrete components from the arsenal, with states.
7. **Motion plan:** which elements move, why they move, and reduced-motion fallback.
8. **Anti-slop sweep:** name the top three failure modes for this style and how you will avoid them.

If the request is tiny, do this mentally and keep the final answer concise. If the request asks for a full page/app, include the block.

## Non-Negotiable Principles

- Gloss and glass are accents around key surfaces, not a blanket effect.
- Readable text and stable depth hierarchy matter more than blur amount.
- Use reflection, highlight, bevel, gradient, and translucency with performance discipline.


## Style Operating Mode

| Control | Setting |
| --- | --- |
| density | Medium. Polished interfaces need space for light and reflections. |
| motion | Medium-high. Highlight sweeps, depth shifts, lens transitions, and product reveals. |
| decoration | Medium. Gloss, reflection, and glow must be localized. |
| contrast | Luminous mid/high contrast with protected text surfaces. |
| radius | 16-32px for glossy panels, 999px for controls, 8px for dense UI. |
| type | Clean modern sans with refined weights. |
| assets | 3D product renders, glass panels, UI mockups, luminous gradients, high-quality screenshots. |

These controls are binding. If the user's brand or existing codebase conflicts with a setting, preserve the user's constraints but keep the underlying Glossy Modern behavior.


## Signature System

Use these as executable rules, not inspiration labels:

- Glass Hierarchy: background glow, translucent hero object, solid text slab, crisp CTA.
- Specular Edge: key cards get a one-pixel highlight and inner shadow, not heavy drop shadow.
- Depth Stack: foreground panels have more opacity and sharper borders than background panels.
- Performance Glass: isolate blur to small layers and keep scrolling smooth.

### Source Direction Matrix

The source URLs and full extracts stay in references. The main skill keeps only transferable lessons.

| Reference | Transferable lesson | Use for |
| --- | --- | --- |
| Changelog - Glossy Modern Source Notes | Source-specific layout, color, type, component, and motion lessons. | dark |
| Raycast - Glossy Modern Source Notes | Source-specific layout, color, type, component, and motion lessons. | dark |
| Dia Browser - Glossy Modern Source Notes | Source-specific layout, color, type, component, and motion lessons. | light |
| Ayo / Lava - Glossy Modern Source Notes | Source-specific layout, color, type, component, and motion lessons. | dark |
| monopo saigon - Glossy Modern Source Notes | Source-specific layout, color, type, component, and motion lessons. | dark |


## Raw-Derived Technical Signals

These signals are distilled from the large Refero database bundled in `references/`. They prevent the skill from forgetting the concrete values that made the references specific. Use them as a vocabulary, not as a command to use every value.

| Signal | Raw values to keep in mind |
| --- | --- |
| Color tokens | `#ffffff` (14x), `#000000` (12x), `#111214` (12x), `#f7f8f8` (12x), `#34343a` (10x), `#8a8f98` (10x), `#040506` (8x), `#141516` (8x), `#1b1c1e` (8x), `#363739` (8x), `#0358f7` (7x), `#23252a` (7x) |
| Pixel/rhythm values | `1px` (95x), `8px` (27x), `24px` (17x), `20px` (15x), `5px` (14x), `18px` (13x), `2px` (12x), `12px` (11x), `34px` (10x), `9999px` (10x), `16px` (9x), `30px` (9x), `32px` (9x), `48px` (9x) |
| Radius declarations | `border-radius: 8px` (7x), `border-radius: 9999px` (6x), `border-radius: 30px` (3x), `--radius-key: 8px` (2x), `border-radius: 18px` (2x), `border-radius: 20px` (2x), `border-radius: 24px` (2x), `--radius-card: 12px` (1x), `--radius-frost: 30px` (1x), `--radius-gloss-card: 12px` (1x) |
| Typography declarations | `font-weight: 500` (3x), `font-weight: 650` (3x), `font-size: 12px` (2x), `font-family: "Berkeley Mono", ui-monospace, monospace` (1x), `font-family: ui-monospace, SFMono-Regular, Menlo, monospace` (1x), `font-family: var(--font-sans)` (1x), `font-size: 13px` (1x), `font-size: 18px` (1x), `font-size: clamp(48px, 7vw, 88px)` (1x), `letter-spacing: -0.03em` (1x), `letter-spacing: .04em` (1x), `line-height: 1.02` (1x), `line-height: 1.6` (1x) |
| Surface/effect declarations | `border: 1px solid #34343a` (5x), `background: #141516` (4x), `background: transparent` (4x), `box-shadow: 0 0 8px rgba(0,0,0,.08)` (4x), `backdrop-filter: blur(24px)` (3x), `background: #111214` (3x), `background: rgba(255,255,255,.90)` (3x), `border: 1px solid #363739` (3x), `border: 1px solid rgba(255,255,255,.14)` (3x), `border: 1px solid var(--border)` (3x), `box-shadow: 0 1.5px .5px 2px rgba(0,0,0,.40),` (3x), `backdrop-filter: blur(18px)` (2x), `background: #1f2023` (2x), `background: linear-gradient(180deg, #1b1c1e, #111214)` (2x) |
| Motion declarations | `transform: translateY(1px)` (3x), `@keyframes ambient-drift` (1x), `animation: ambient-drift 24s ease-in-out infinite alternate` (1x), `animation: none` (1x), `transform: translateX(-40%)` (1x), `transform: translateX(-70%)` (1x), `transform: translateX(40%)` (1x), `transform: translateX(70%)` (1x), `transform: translateY(-1px)` (1x), `transition: opacity 160ms ease, transform 360ms ease` (1x), `transition: opacity 180ms ease, transform 360ms ease` (1x), `transition: transform 120ms ease, box-shadow 120ms ease, border-color 120ms ease` (1x), `transition: transform 140ms ease, box-shadow 140ms ease, border-color 140ms ease` (1x) |

### Raw-Derived Token Starter

```css
:root {
  --source-color-1: #ffffff;
  --source-color-2: #000000;
  --source-color-3: #111214;
  --source-color-4: #f7f8f8;
  --source-color-5: #34343a;
  --source-color-6: #8a8f98;
  --source-color-7: #040506;
  --source-color-8: #141516;
  --source-space-1: 1px;
  --source-space-2: 8px;
  --source-space-3: 24px;
  --source-space-4: 20px;
  --source-space-5: 5px;
  --source-space-6: 18px;
  --source-space-7: 2px;
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

The first viewport must instantly say "Glossy Modern" without needing an explanatory paragraph. Build it from:

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
| Glass Product Stage | hero product on luminous glass platform | premium tech |
| Visual Tool UI | layer panels, canvas, inspector, preview | creative software |
| Glossy SaaS | app shell with polished cards and highlight sweeps | modern SaaS |
| Dimensional Brand | 3D objects and reflective cards define the identity | launch pages |

Selection rule:
- If the user asks for a whole website, choose one archetype for the first viewport and one supporting archetype for the proof/conversion section.
- If the user asks for an app/work surface, prioritize workflow clarity over theatrical hero composition.
- If the user asks for a hero only, still define nav, proof object, CTA, and next-section hint so the hero feels connected to a full page.


## Component Arsenal

Use at least four of these for full-page work. Components must have real content and states; do not create empty decorative blocks.

| Component | Purpose | Required states |
| --- | --- | --- |
| glass-hero-panel | First-viewport identity and proof object. | hover/focus/active plus selected |
| specular-card | Reusable style-specific module that carries identity and function. | loading/empty/error plus success |
| floating-toolbar | Reusable style-specific module that carries identity and function. | responsive compact/expanded variants |
| layered-product-frame | Reusable style-specific module that carries identity and function. | keyboard focus and reduced-motion behavior |
| highlight-sweep-button | Reusable style-specific module that carries identity and function. | hover/focus/active plus selected |
| depth-pricing-card | Conversion, checkout, plan choice, or purchasing confidence. | loading/empty/error plus success |
| reflection-gallery | Proof, product visibility, atmosphere, or editorial pacing. | responsive compact/expanded variants |
| luminous-footer | Designed closure with nav, CTA, and repeated motif. | keyboard focus and reduced-motion behavior |

Component construction rules:

- Build components with stable dimensions: 'aspect-ratio', explicit grid tracks, 'minmax(0, 1fr)', and responsive 'clamp()' spacing.
- Keep hover states inside the component bounds; hover cannot resize neighboring layout.
- Put icons in icon buttons where appropriate, but do not replace clear labels for destructive or purchasing actions.
- For forms and marketplace/product flows, include validation, disabled, loading, empty, and success behavior.
- For cards, decide whether they are informational, navigational, selectable, draggable, or purchasable before styling them.


## Component Blueprints

Use these blueprints when implementing the arsenal above. They turn the style into buildable UI, not just visual direction.

### glass-hero-panel

Purpose: First-viewport identity and proof object.

Structure:
- Start with real content: title, meaningful body copy or data, primary affordance, and one proof/detail element.
- Use a stable grid or aspect-ratio shell. The component should not change outer dimensions on hover, selection, loading, or error.
- Use Glossy Modern surface rules instead of default card styling.

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

### specular-card

Purpose: Reusable style-specific module that carries identity and function.

Structure:
- Start with real content: title, meaningful body copy or data, primary affordance, and one proof/detail element.
- Use consistent padding, radius, border, and typography tokens from the operating mode. Repeat the same geometry elsewhere.
- Use Glossy Modern surface rules instead of default card styling.

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

### floating-toolbar

Purpose: Reusable style-specific module that carries identity and function.

Structure:
- Start with real content: title, meaningful body copy or data, primary affordance, and one proof/detail element.
- Use an explicit compact/mobile variant and a spacious desktop variant. Do not rely on browser wrapping to solve layout.
- Use Glossy Modern surface rules instead of default card styling.

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

### layered-product-frame

Purpose: Reusable style-specific module that carries identity and function.

Structure:
- Start with real content: title, meaningful body copy or data, primary affordance, and one proof/detail element.
- Use a stable grid or aspect-ratio shell. The component should not change outer dimensions on hover, selection, loading, or error.
- Use Glossy Modern surface rules instead of default card styling.

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

### highlight-sweep-button

Purpose: Reusable style-specific module that carries identity and function.

Structure:
- Start with real content: title, meaningful body copy or data, primary affordance, and one proof/detail element.
- Use consistent padding, radius, border, and typography tokens from the operating mode. Repeat the same geometry elsewhere.
- Use Glossy Modern surface rules instead of default card styling.

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

### depth-pricing-card

Purpose: Conversion, checkout, plan choice, or purchasing confidence.

Structure:
- Start with real content: title, meaningful body copy or data, primary affordance, and one proof/detail element.
- Use an explicit compact/mobile variant and a spacious desktop variant. Do not rely on browser wrapping to solve layout.
- Use Glossy Modern surface rules instead of default card styling.

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

### reflection-gallery

Purpose: Proof, product visibility, atmosphere, or editorial pacing.

Structure:
- Start with real content: title, meaningful body copy or data, primary affordance, and one proof/detail element.
- Use a stable grid or aspect-ratio shell. The component should not change outer dimensions on hover, selection, loading, or error.
- Use Glossy Modern surface rules instead of default card styling.

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

### luminous-footer

Purpose: Designed closure with nav, CTA, and repeated motif.

Structure:
- Start with real content: title, meaningful body copy or data, primary affordance, and one proof/detail element.
- Use consistent padding, radius, border, and typography tokens from the operating mode. Repeat the same geometry elsewhere.
- Use Glossy Modern surface rules instead of default card styling.

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
```

### Tailwind/React Section Skeleton

```tsx
export function GlossyModernSection() {
  return (
    <section className="relative overflow-hidden px-6 py-28 md:py-40">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 md:grid-cols-12 md:gap-6">
        <div className="md:col-span-5">
          <p className="mb-4 text-sm font-medium tracking-[0.08em] text-muted-foreground">Specific category label</p>
          <h2 className="text-balance text-4xl font-semibold leading-[0.95] tracking-tight md:text-7xl">
            A concrete promise with Glossy Modern identity.
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

Motion must be specific to Glossy Modern. It should never be generic scroll-fade spam.

- Animate highlight sweeps, depth shifts, panel scale, and product reveal.
- Keep blur layers static or slow; avoid animating large backdrop-filter areas.
- Use hover tilt only for visual cards, not forms or dense controls.


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
[data-style-motion="glossy-specular"] {
  transition:
    transform var(--source-motion-medium, 420ms) var(--source-ease-out, cubic-bezier(0.16, 1, 0.30, 1)),
    opacity var(--source-motion-medium, 420ms) var(--source-ease-out, cubic-bezier(0.16, 1, 0.30, 1)),
    filter 220ms ease,
    clip-path 520ms var(--source-ease-out, cubic-bezier(0.16, 1, 0.30, 1));
  will-change: transform, opacity, filter, clip-path;
}
[data-style-motion="glossy-specular"]:is(:hover, :focus-visible, [data-active="true"]) {
  filter: brightness(1.04); transform: translateY(-3px) rotateX(1deg);
}

@keyframes glossy-highlight-sweep {
  from { transform: translateX(-70%); opacity: 0; }
  40% { opacity: .85; }
  to { transform: translateX(70%); opacity: 0; }
}
@media (prefers-reduced-motion: reduce) {
  [data-style-motion="glossy-specular"] {
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
- Hero or discovery area that makes the Glossy Modern identity obvious.
- Filter rail with categories, sort, price/status/location/tags as relevant.
- Product/service grid with real card states: hover, selected/favorited, unavailable, loading, empty.
- Detail preview or featured product section with concrete specs, images, trust, and action.
- Trust/conversion section: reviews, guarantees, delivery, security, booking/checkout steps.
- Footer with useful links, not a generic dump.

Style-specific application: use glass-hero-panel, specular-card, floating-toolbar, layered-product-frame as the first component candidates. Use the accent/radius/surface rules from the operating mode.

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
- Use density appropriate to Glossy Modern: Medium. Polished interfaces need space for light and reflections.
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

- No glassmorphism on every card.
- No large blurred scrolling regions.
- No low-contrast text inside translucent panels.
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

- First viewport unmistakably expresses Glossy Modern.
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
