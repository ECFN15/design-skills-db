# Skill Quality Audit

Date: 2026-05-03

Scope:

- Baseline: `.agents/skills/clean-saas/SKILL.md`
- Method: `howtomakeskill.md`
- Audited skills: 23 Refero visual skills in `.agents/skills`
- Publish mirror: `publish/refero-design-skills/.agents/skills`

## Verdict

The 23 visual skills now pass the hard quality gates derived from `clean-saas` and `howtomakeskill.md`.

Hard gates passed:

- 23/23 have one mandatory 8-point `<design_plan>`.
- 23/23 have execution tokens: type scale, spacing scale, radius, shadow/depth, status/state tokens.
- 23/23 have Tailwind-to-token mapping.
- 23/23 have a core component kit with state/data-role contracts.
- 23/23 have TSX page protocols.
- 23/23 have reference use pointing to bundled `references/`.
- 23/23 have `references/design-use-cases.md`.
- 23/23 active skills are synced to the publish mirror.

## Fixes Applied During This Audit

- `pastel`: frontmatter now uses explicit `USE FOR` / `DO NOT USE FOR`.
- `playful-design`: frontmatter now uses explicit `USE FOR` / `DO NOT USE FOR`.
- `motion`, `pastel`, `playful-design`: fixed section order so `### Core Component Kit` contains the component contracts before `## Complete Page Protocols`.
- Removed duplicate adjacent TSX protocol blocks in those three skills during the order fix.

## Focus Perfecting Pass

Second pass focused on the six skills that were structurally behind `clean-saas`:

- `editorial-minimal`
- `minimal-design`
- `monochrome-ui`
- `serif-display`
- `motion`
- `vibrant-accents`

Changes:

- Moved execution contracts earlier for `editorial-minimal`, `minimal-design`, `monochrome-ui`, and `serif-display`.
- Added explicit `Core Directive` and `Non-Negotiable Principles` headings where the content existed but was not structured like `clean-saas`.
- Moved or compacted long implementation recipe sections into `references/advanced-implementation-notes.md`.
- Moved `motion` component kit and page protocols earlier.
- Replaced the very long `vibrant-accents` signature implementation block with a compact runtime summary, preserving the full detail in references.
- Removed duplicated `Signature System` / `Execution Token Contract` fragments introduced during the reordering pass.

Focused result:

| Skill | Lines | Execution Contract | Core Kit | Page Protocols | Cautions |
| --- | ---: | ---: | ---: | ---: | --- |
| `editorial-minimal` | 972 | 410 | 589 | 833 | 0 |
| `minimal-design` | 964 | 403 | 566 | 817 | 0 |
| `monochrome-ui` | 953 | 391 | 555 | 808 | 0 |
| `serif-display` | 968 | 425 | 565 | 816 | 0 |
| `motion` | 979 | 66 | 433 | 514 | 0 |
| `vibrant-accents` | 786 | 368 | 505 | 597 | 0 |

## Clean SaaS Baseline

`clean-saas` remains the best integrated reference:

- 698 lines.
- Execution token contract starts at line 168.
- Core component kit starts at line 312.
- Page protocols start at line 635.
- 0 hard issues.
- 0 cautions.

This is the model shape: the deterministic contract appears early, components are close to the contract, and the page skeletons come after the component language is established.

## Strong Skills With No Audit Cautions

These skills are closest to the `clean-saas` quality shape:

- `cyber-neon`
- `dark-ui`
- `editorial-minimal`
- `experimental-type`
- `geometric-modern`
- `glossy-modern`
- `high-contrast`
- `light-ui`
- `minimal-design`
- `monochrome-ui`
- `motion`
- `serif-display`
- `soft-gradients`
- `technical-sans`
- `technical-ui`
- `utilitarian`
- `vibrant-accents`

They have early enough contracts, useful component kits, clear states, and domain-specific page protocols.

## Skills That Pass But Are Heavier

These skills pass all hard gates, but should be watched for context weight or late section placement:

- `editorial-type`: over 1000 lines.
- `expressive-brand`: over 1000 lines.
- `high-end-design`: over 1000 lines.
- `pastel`: over 1000 lines.
- `playful-design`: over 1000 lines; page protocols appear late.

These are not blockers. The tokens, components, states, and protocols are present. The remaining risk is context economy and how quickly the model reaches the deterministic contract.

## Utility Check

All 23 skills have a real domain-specific purpose. None looks useless as a standalone visual skill.

Important overlap boundaries:

- `clean-saas` vs `light-ui`: use `clean-saas` when product proof, trust, workflow, pricing, integrations, or dashboards matter; use `light-ui` for bright app surfaces without SaaS proof economics.
- `technical-ui` vs `technical-sans` vs `utilitarian`: use `technical-ui` for dense workstations/consoles, `technical-sans` for technical brand/product pages, and `utilitarian` for internal/admin speed.
- `editorial-minimal` vs `minimal-design` vs `serif-display`: use `editorial-minimal` for authored calm publication rhythm, `minimal-design` for essential restraint, and `serif-display` when the serif itself carries premium identity.
- `soft-gradients` vs `glossy-modern`: use `soft-gradients` for ambient calm, `glossy-modern` for dimensional polished surfaces.
- `playful-design` vs `pastel`: use `playful-design` for reward/tactility/progression, `pastel` for gentle warmth and soft product trust.

## Commands Run

```powershell
node tools\audit_skill_quality_against_clean_saas.mjs
node tools\validate_rich_design_skills.mjs
node tools\check_final_polish_skills.mjs
node tools\check_section_shape.mjs
node tools\survey_high_usage_skills.mjs
node tools\sync_publish_pack.mjs
```

## Current Recommendation

The focused six are now in the clean shape and no longer carry audit cautions.

The next optional quality step would be to apply the same slimming strategy to the remaining heavier non-focused skills: `editorial-type`, `expressive-brand`, `high-end-design`, `pastel`, and `playful-design`.
