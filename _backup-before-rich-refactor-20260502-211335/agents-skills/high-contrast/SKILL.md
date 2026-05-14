---
name: high-contrast
description: "Use this skill to create stark, readable, high-impact visual identities based on black-white tension, disciplined accent color, sharp layout, poster-like hierarchy, editorial drama, or precise data-console contrast. Use it for brand sites, launch pages, fashion/editorial experiences, technical products, AI tools, portfolios, and interfaces that need immediate visual authority without visual mush. USE FOR: stark brand sites, editorial product pages, technical consoles, monochrome pages, bold launch pages. DO NOT USE FOR: unrelated backend work, non-visual tasks, or when an existing product design system must be followed exactly."
---

# High Contrast Skill

## Core Directive

You are a senior frontend design engineer specializing in High Contrast. The output must feel direct, sharp, readable, confident, editorial, precise. Do not merely skin default components with a color palette. Build a visual operating system: layout, typography, color roles, component geometry, imagery, motion, interaction states, responsive behavior, and proof content must all point in the same direction.

Use this skill for stark brand sites, editorial product pages, technical consoles, monochrome pages, bold launch pages.


## Mandatory `<design_plan>`

Before writing code for a substantial UI, output a compact `<design_plan>` block. This is not optional; it prevents lazy default layouts.

Include:

1. **Use case:** product type, audience, primary action, and emotional target.
2. **Style direction:** one High Contrast sub-direction chosen from the archetypes below.
3. **Visual operating mode:** density, motion intensity, decoration budget, contrast mode, radius rule, and asset burden.
4. **First viewport:** nav type, H1 width/line strategy, hero proof object, CTA treatment, next-section hint.
5. **System contracts:** type, color, surface, geometry, evidence, and interaction state rules.
6. **Component plan:** at least four concrete components from the arsenal, with states.
7. **Motion plan:** which elements move, why they move, and reduced-motion fallback.
8. **Anti-slop sweep:** name the top three failure modes for this style and how you will avoid them.

If the request is tiny, do this mentally and keep the final answer concise. If the request asks for a full page/app, include the block.

## Non-Negotiable Principles

- Contrast is structure: foreground/background tension, section cuts, state inversion, and action hierarchy.
- Use a tiny palette and assign the accent a strict job.
- The design should be immediately readable at a distance and still refined up close.


## Style Operating Mode

| Control | Setting |
| --- | --- |
| density | Medium-high. Poster blocks and dense data sections can coexist. |
| motion | Medium. Hard cuts, inversion, wipes, and snap reveals. |
| decoration | Low-medium. Lines, blocks, type scale, and accent marks do the work. |
| contrast | Maximum. Black/white or near black/near white with one accent. |
| radius | 0-4px generally; pills only if intentionally contrasted. |
| type | Bold grotesk, condensed sans, mono data, or dramatic editorial serif. |
| assets | High contrast photography, product silhouettes, technical diagrams, poster crops. |

These controls are binding. If the user's brand or existing codebase conflicts with a setting, preserve the user's constraints but keep the underlying High Contrast behavior.


## Signature System

Use these as executable rules, not inspiration labels:

- Poster Authority: huge type and hard section boundaries replace decorative art.
- Accent Job Lock: accent can mean action, warning, price, or selection, but only one role.
- Inversion State System: hover/focus/active often invert foreground and background.
- Blueprint Or Fashion Fork: choose data-console precision or editorial drama; do not average them.

### Source Direction Matrix

The source URLs and full extracts stay in references. The main skill keeps only transferable lessons.

| Reference | Transferable lesson | Use for |
| --- | --- | --- |
| Colab - High Contrast Source Notes | High-contrast theatrical canvas | dark |
| Holographik - High Contrast Source Notes | High-contrast monochrome blueprint | dark |
| HARDCLO - High Contrast Source Notes | Monochrome cinematic canvas - stark black and white drama | dark |
| HyperAktiv - High Contrast Source Notes | High-contrast stark blueprint | light |
| Hugging Face - High Contrast Source Notes | High-contrast data console, a brightly lit control panel with precise readouts and subtle depth | light |


## Raw-Derived Technical Signals

These signals are distilled from the large Refero database bundled in `references/`. They prevent the skill from forgetting the concrete values that made the references specific. Use them as a vocabulary, not as a command to use every value.

| Signal | Raw values to keep in mind |
| --- | --- |
| Color tokens | `#ffffff` (23x), `#000000` (20x), `#e5e7eb` (7x), `#f3f4f6` (7x), `#0000ff` (6x), `#155dfc` (6x), `#333333` (6x), `#101828` (5x), `#ee1c5b` (5x), `#111111` (4x), `#aaaaaa` (4x), `#ff3939` (4x) |
| Pixel/rhythm values | `1px` (32x), `16px` (17x), `8px` (16x), `20px` (15x), `0px` (13x), `12px` (9x), `72px` (9x), `160px` (8x), `32px` (8x), `24px` (7x), `64px` (7x), `96px` (7x), `10px` (6x), `120px` (6x) |
| Radius declarations | `--hc-radius-console: 8px` (1x), `--hc-radius-none: 0px` (1x), `--hc-radius-pill: 999px` (1x), `border-radius: 0` (1x), `border-radius: 8px` (1x), `border-radius: var(--hc-radius-console)` (1x) |
| Typography declarations | `font-family: var(--font-body, Inter, sans-serif)` (1x), `font-family: var(--font-display, Inter, sans-serif)` (1x), `font-family: var(--font-ui, "Source Sans Pro", Inter, sans-serif)` (1x), `font-size: 13px` (1x), `font-size: clamp(48px, 8vw, 96px)` (1x), `font-size: clamp(56px, 10vw, 128px)` (1x), `font-weight: 700` (1x), `letter-spacing: -0.02em` (1x), `line-height: 0.9 to 1.05` (1x), `line-height: 0.92` (1x), `line-height: 0.95` (1x), `line-height: 1.35 to 1.55` (1x) |
| Surface/effect declarations | `background: var(--hc-white)` (3x), `background: #ffffff` (2x), `background: black` (2x), `background: white` (2x), `border: 1px gray` (2x), `background: #000000` (1x), `background: black, white, or one accent` (1x), `background: var(--hc-black)` (1x), `background: var(--hc-blue)` (1x), `border: 1px solid #e5e7eb` (1x), `border: 1px solid #ffffff` (1x), `border: 1px solid contrast color` (1x), `border: 1px solid currentColor` (1x), `border: 1px solid currentColor or none` (1x) |
| Motion declarations | `transform: translateX(-4px)` (1x), `transform: translateX(0)` (1x), `transition: color 140ms ease-out, background 140ms ease-out, border-color 140ms ease-out` (1x), `transition: transform 140ms ease-out, opacity 140ms ease-out` (1x) |

### Raw-Derived Token Starter

```css
:root {
  --source-color-1: #ffffff;
  --source-color-2: #000000;
  --source-color-3: #e5e7eb;
  --source-color-4: #f3f4f6;
  --source-color-5: #0000ff;
  --source-color-6: #155dfc;
  --source-color-7: #333333;
  --source-color-8: #101828;
  --source-space-1: 1px;
  --source-space-2: 16px;
  --source-space-3: 8px;
  --source-space-4: 20px;
  --source-space-5: 0px;
  --source-space-6: 12px;
  --source-space-7: 72px;
  --source-space-8: 160px;
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

The first viewport must instantly say "High Contrast" without needing an explanatory paragraph. Build it from:

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
| Poster Launch | huge type, image cutout, stark CTA | brand and product launches |
| Data Console | black/white grid, mono data, one accent | technical tools |
| Fashion Editorial | large photo, extreme whitespace, tight typography | fashion/culture |
| Stark Marketplace | filter rail, product grid, bold inversion states | commerce |

Selection rule:
- If the user asks for a whole website, choose one archetype for the first viewport and one supporting archetype for the proof/conversion section.
- If the user asks for an app/work surface, prioritize workflow clarity over theatrical hero composition.
- If the user asks for a hero only, still define nav, proof object, CTA, and next-section hint so the hero feels connected to a full page.


## Component Arsenal

Use at least four of these for full-page work. Components must have real content and states; do not create empty decorative blocks.

| Component | Purpose | Required states |
| --- | --- | --- |
| inverted-nav | Reusable style-specific module that carries identity and function. | hover/focus/active plus selected |
| poster-hero | First-viewport identity and proof object. | loading/empty/error plus success |
| hard-edge-card | Reusable style-specific module that carries identity and function. | responsive compact/expanded variants |
| contrast-filter-rail | Browsing, sorting, narrowing, and marketplace/product discovery. | keyboard focus and reduced-motion behavior |
| mono-data-strip | Dense comparison, operational data, or scannable records. | hover/focus/active plus selected |
| split-image-feature | Proof, product visibility, atmosphere, or editorial pacing. | loading/empty/error plus success |
| accent-cta-block | Reusable style-specific module that carries identity and function. | responsive compact/expanded variants |
| black-white-footer | Designed closure with nav, CTA, and repeated motif. | keyboard focus and reduced-motion behavior |

Component construction rules:

- Build components with stable dimensions: 'aspect-ratio', explicit grid tracks, 'minmax(0, 1fr)', and responsive 'clamp()' spacing.
- Keep hover states inside the component bounds; hover cannot resize neighboring layout.
- Put icons in icon buttons where appropriate, but do not replace clear labels for destructive or purchasing actions.
- For forms and marketplace/product flows, include validation, disabled, loading, empty, and success behavior.
- For cards, decide whether they are informational, navigational, selectable, draggable, or purchasable before styling them.


## Component Blueprints

Use these blueprints when implementing the arsenal above. They turn the style into buildable UI, not just visual direction.

### inverted-nav

Purpose: Reusable style-specific module that carries identity and function.

Structure:
- Start with real content: title, meaningful body copy or data, primary affordance, and one proof/detail element.
- Use a stable grid or aspect-ratio shell. The component should not change outer dimensions on hover, selection, loading, or error.
- Use High Contrast surface rules instead of default card styling.

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

### poster-hero

Purpose: First-viewport identity and proof object.

Structure:
- Start with real content: title, meaningful body copy or data, primary affordance, and one proof/detail element.
- Use consistent padding, radius, border, and typography tokens from the operating mode. Repeat the same geometry elsewhere.
- Use High Contrast surface rules instead of default card styling.

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

### hard-edge-card

Purpose: Reusable style-specific module that carries identity and function.

Structure:
- Start with real content: title, meaningful body copy or data, primary affordance, and one proof/detail element.
- Use an explicit compact/mobile variant and a spacious desktop variant. Do not rely on browser wrapping to solve layout.
- Use High Contrast surface rules instead of default card styling.

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

### contrast-filter-rail

Purpose: Browsing, sorting, narrowing, and marketplace/product discovery.

Structure:
- Start with real content: title, meaningful body copy or data, primary affordance, and one proof/detail element.
- Use a stable grid or aspect-ratio shell. The component should not change outer dimensions on hover, selection, loading, or error.
- Use High Contrast surface rules instead of default card styling.

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

### mono-data-strip

Purpose: Dense comparison, operational data, or scannable records.

Structure:
- Start with real content: title, meaningful body copy or data, primary affordance, and one proof/detail element.
- Use consistent padding, radius, border, and typography tokens from the operating mode. Repeat the same geometry elsewhere.
- Use High Contrast surface rules instead of default card styling.

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

### split-image-feature

Purpose: Proof, product visibility, atmosphere, or editorial pacing.

Structure:
- Start with real content: title, meaningful body copy or data, primary affordance, and one proof/detail element.
- Use an explicit compact/mobile variant and a spacious desktop variant. Do not rely on browser wrapping to solve layout.
- Use High Contrast surface rules instead of default card styling.

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

### accent-cta-block

Purpose: Reusable style-specific module that carries identity and function.

Structure:
- Start with real content: title, meaningful body copy or data, primary affordance, and one proof/detail element.
- Use a stable grid or aspect-ratio shell. The component should not change outer dimensions on hover, selection, loading, or error.
- Use High Contrast surface rules instead of default card styling.

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

### black-white-footer

Purpose: Designed closure with nav, CTA, and repeated motif.

Structure:
- Start with real content: title, meaningful body copy or data, primary affordance, and one proof/detail element.
- Use consistent padding, radius, border, and typography tokens from the operating mode. Repeat the same geometry elsewhere.
- Use High Contrast surface rules instead of default card styling.

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
  --black: #050505;
  --white: #f7f7f2;
  --accent: #ff3b30;
  --line: currentColor;
}
.contrast-section {
  background: var(--white);
  color: var(--black);
  border-block: 2px solid currentColor;
}
.contrast-section[data-invert="true"] {
  background: var(--black);
  color: var(--white);
}
.inversion-button {
  border: 1px solid currentColor;
  background: transparent;
  color: currentColor;
}
.inversion-button:hover,
.inversion-button:focus-visible {
  background: currentColor;
  color: var(--white);
}
```

### Tailwind/React Section Skeleton

```tsx
export function HighContrastSection() {
  return (
    <section className="relative overflow-hidden px-6 py-28 md:py-40">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 md:grid-cols-12 md:gap-6">
        <div className="md:col-span-5">
          <p className="mb-4 text-sm font-medium tracking-[0.08em] text-muted-foreground">Specific category label</p>
          <h2 className="text-balance text-4xl font-semibold leading-[0.95] tracking-tight md:text-7xl">
            A concrete promise with High Contrast identity.
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

Motion must be specific to High Contrast. It should never be generic scroll-fade spam.

- Use hard wipes, inversion hover, snap reveals, and section cuts.
- Avoid soft easing that weakens the high-contrast attitude.
- Keep the final state perfectly readable after every transition.


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
[data-style-motion="contrast-cut"] {
  transition:
    transform var(--source-motion-medium, 420ms) var(--source-ease-out, cubic-bezier(0.16, 1, 0.30, 1)),
    opacity var(--source-motion-medium, 420ms) var(--source-ease-out, cubic-bezier(0.16, 1, 0.30, 1)),
    filter 220ms ease,
    clip-path 520ms var(--source-ease-out, cubic-bezier(0.16, 1, 0.30, 1));
  will-change: transform, opacity, filter, clip-path;
}
[data-style-motion="contrast-cut"]:is(:hover, :focus-visible, [data-active="true"]) {
  filter: invert(1); transform: translateY(-1px);
}

@keyframes contrast-hard-cut {
  from { clip-path: inset(0 100% 0 0); }
  to { clip-path: inset(0 0 0 0); }
}
@media (prefers-reduced-motion: reduce) {
  [data-style-motion="contrast-cut"] {
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
- Hero or discovery area that makes the High Contrast identity obvious.
- Filter rail with categories, sort, price/status/location/tags as relevant.
- Product/service grid with real card states: hover, selected/favorited, unavailable, loading, empty.
- Detail preview or featured product section with concrete specs, images, trust, and action.
- Trust/conversion section: reviews, guarantees, delivery, security, booking/checkout steps.
- Footer with useful links, not a generic dump.

Style-specific application: use inverted-nav, poster-hero, hard-edge-card, contrast-filter-rail as the first component candidates. Use the accent/radius/surface rules from the operating mode.

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
- Use density appropriate to High Contrast: Medium-high. Poster blocks and dense data sections can coexist.
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

- No black-white styling without composition.
- No low-opacity gray for important text.
- No gradients when flat contrast would be stronger.
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

- First viewport unmistakably expresses High Contrast.
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
