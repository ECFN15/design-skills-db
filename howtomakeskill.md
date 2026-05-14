# How To Make A High-Usage Visual Skill

Objectif: documenter la methode qui a transforme `clean-saas` d'un guide partiellement suivi en un vrai systeme de decision visuelle. Ce fichier doit permettre de reproduire la meme qualite sur les 22 autres skills Refero installables.

Scope principal:

- Source active a modifier: `.agents/skills/<skill>/SKILL.md`
- Miroir a regenerer: `publish/refero-design-skills/.agents/skills/<skill>/SKILL.md`
- Sources lourdes a consulter, pas a remplacer: `skills/<skill>/SKILL.md`
- Notes brutes a consulter, pas a supprimer: `raw/<skill>/*.md`
- References embarquees dans le skill actif: `.agents/skills/<skill>/references/`

Regle centrale: un bon skill visuel n'est pas un moodboard. C'est un systeme d'exploitation pour le modele. Chaque decision que le modele peut resoudre avec un token, un mapping, un composant, une table ou un skeleton doit etre fournie sous cette forme.

## 1. Le Probleme A Resoudre

Le modele improvise quand le skill dit seulement:

- "use a subtle shadow"
- "use semantic states"
- "use clean typography"
- "keep section spacing consistent"
- "use product evidence"

Ces phrases sont utiles pour l'intention, mais elles ne disent pas exactement quoi coder. Le modele revient alors a ses defaults: `text-7xl`, `p-6`, `shadow-xl`, `border-green`, `hover:-translate-y-1`, grilles de cartes generiques, faux dashboards.

Le skill doit donc transformer les intentions en decisions executables:

| Intention floue | Forme executable |
| --- | --- |
| clean typography | type scale nommee + pairings |
| consistent spacing | spacing scale + table d'application |
| subtle elevation | shadow tier map |
| semantic states | status tokens + mapping mots -> roles |
| product proof | composants et page skeletons |
| no Tailwind defaults | table Tailwind -> token |

## 2. Ratio Cible

Ne pas viser 100% code. Un skill 100% tokens devient une table de reference sans jugement. Le bon ratio pour un skill visuel:

| Type de contenu | Part cible | Forme |
| --- | ---: | --- |
| Code executable | 55-60% | CSS tokens, TSX composants, CSS states |
| Tables de decision | 15-20% | archetypes, mappings, Tailwind -> tokens |
| Regles binaires | 10-15% | always/never courts |
| Prose contextuelle | 10-15% | phrases courtes sur l'intention et les cas limites |

La prose doit dire "quand" et "pourquoi". Les tokens/composants doivent dire "quoi" et "comment".

## 3. Structure Cible D'un Skill Installable

Chaque `.agents/skills/<skill>/SKILL.md` doit suivre cette structure, adaptee au style.

```md
---
name: <skill-slug>
description: "<description riche avec USE FOR / DO NOT USE FOR>"
---

# <Skill Display Name> Skill

## Core Directive
1-2 paragraphes maximum. Dire le ressenti, le job du style, et l'erreur principale a eviter.

## Mandatory `<design_plan>`
Liste numerotee 8 points. Ne pas compresser en phrase.

## Non-Negotiable Principles
3-5 bullets specifiques au style.

## Style Operating Mode
Table: density, motion, decoration, contrast, radius, type, assets.

## Signature System
3-5 patterns nommes qui rendent le style reconnaissable.

### Raw Archetype Packs
Table courte par source: Source, Use When, Palette, Type, Radius/Spacing, Components, Carry Forward, Avoid.

## Differentiation
3-5 lignes. Tester quand utiliser ce skill vs skills voisins.

## Semantic Palette And Tokens
3-5 packs CSS courts. Chaque pack doit exposer le meme vocabulaire token.

### Execution Token Contract
Type scale, spacing scale, shadows, status/state tokens, motion tokens.

## First Viewport Protocol
5 bullets maximum.

## Archetype Picker
Table des 4-6 archetypes de pages/ecrans.

## Signature Components
4-6 composants cables avec props, states et CSS.

## State Language
Mapping de states vers tokens + copy rules.

## Motion System
Table pattern/use/timing/implementation + reduced-motion CSS.

## Complete Page Protocols
Skeletons TSX courts pour les 2-4 cas principaux.

## Absolute Bans
8-12 bans specifiques, pas generiques.

## Reference Use
Pointer seulement vers `references/refero-style-database.md` et `references/sources/`.

## Pre-Output Checklist
8-12 checks specifiques au style.
```

## 4. Mandatory Design Plan

Garder la liste numerotee. Elle force le modele a raisonner en sequence au lieu de paraphraser.

Template:

```md
## Mandatory `<design_plan>`

Before substantial UI code, output a compact `<design_plan>` block. Include:

1. **Use case:** product/page type, audience, primary action, emotional target.
2. **Style direction:** one archetype below.
3. **Operating mode:** density, motion, decoration, contrast, radius, asset burden.
4. **First viewport:** nav type, H1 width/line strategy, proof/media object, CTA, next-section hint.
5. **System contracts:** type, color, surface, radius, spacing, shadow, state, motion tokens.
6. **Component plan:** at least four concrete components with states.
7. **Motion plan:** what moves, why, timing, and reduced-motion fallback.
8. **Anti-slop sweep:** top three failure modes and how to avoid them.

If the request is tiny, do this mentally and keep the final answer concise.
```

Adapter les mots aux styles. Exemple: `proof object` pour Clean SaaS, `glow role` pour Cyber Neon, `surface ladder` pour Dark UI, `type rhythm` pour Editorial Type.

## 5. Execution Token Contract

Cette section est le coeur du refactor. Elle retire les decisions arbitraires.

Chaque skill doit definir:

- type scale;
- spacing scale;
- shadow/elevation/depth system;
- radius vocabulary;
- semantic state/status tokens;
- interaction tokens;
- motion tokens si le style depend du mouvement;
- pairings d'usage.

### Vocabulaire Standard

Tous les packs d'un meme skill doivent utiliser le meme vocabulaire:

```css
:root {
  --canvas: ...;
  --surface: ...;
  --surface-muted: ...;
  --text: ...;
  --text-muted: ...;
  --line: ...;
  --action: ...;
  --action-strong: ...;
  --radius-control: ...;
  --radius-card: ...;
  --radius-panel: ...;
  --ease-product: ...;
}
```

Ne pas avoir `--radius-button` dans un pack, `--radius-card` dans un autre, et aucun `--radius-panel` ailleurs. L'ambiguite force le modele a inventer.

### Type Scale

Toujours inclure une scale nommee, adaptee au style:

```css
:root {
  --font-sans: ...;
  --font-mono: ...;
  --type-mono-xs: ...;
  --type-mono-sm: ...;
  --type-meta: ...;
  --type-body-sm: ...;
  --type-body: ...;
  --type-ui: ...;
  --type-card: ...;
  --type-section-sm: ...;
  --type-section: ...;
  --type-display: ...;
}
```

Adapter les noms si le style est editorial ou experimental, mais garder les roles. Exemple pour Editorial Type: ajouter `--type-pullquote`, `--type-index`, `--type-deck`. Pour Technical UI: ajouter `--type-code`, `--type-log`, `--type-value`.

### Spacing Scale

Toujours fournir une echelle courte et une table d'application:

```css
:root {
  --s-1: 4px;
  --s-2: 8px;
  --s-3: 12px;
  --s-4: 16px;
  --s-5: 20px;
  --s-6: 24px;
  --s-7: 32px;
  --s-8: 48px;
  --s-9: 64px;
  --s-10: 80px;
  --s-11: 96px;
}
```

Puis:

| Target | Token |
| --- | --- |
| section vertical | `var(--s-9)` mobile, `var(--s-10)` desktop |
| card default | `var(--s-6)` |
| card compact | `var(--s-4)` |
| button | `var(--s-2) var(--s-4)` |
| row | `var(--s-3) var(--s-4)` |

Changer les valeurs par style, pas les noms. Exemple: Utilitarian peut reduire `--s-7`, Editorial peut augmenter `--s-10`.

### Shadow / Depth System

Nommer les tiers. Interdire les ombres inventees.

```css
:root {
  --shadow-flat: none;
  --shadow-card: ...;
  --shadow-panel: ...;
  --shadow-hero: ...;
  --shadow-modal: ...;
  --shadow-action: ...;
}
```

Pour les styles sans ombres, garder les noms mais mapper a borders/contrast:

```css
--shadow-flat: none;
--shadow-card: inset 0 0 0 1px var(--line);
--shadow-panel: inset 0 0 0 1px var(--line-strong);
```

## 6. Status Et State Mapping

Un skill de qualite ne dit pas seulement "use semantic colors". Il donne:

- roles;
- token bg/fg;
- mots metier;
- composant badge/pill/row state.

Template:

```css
:root {
  --status-success-bg: ...;
  --status-success-fg: ...;
  --status-info-bg: ...;
  --status-info-fg: ...;
  --status-warning-bg: ...;
  --status-warning-fg: ...;
  --status-danger-bg: ...;
  --status-danger-fg: ...;
  --status-neutral-bg: ...;
  --status-neutral-fg: ...;
}
```

Table:

| Role | Words |
| --- | --- |
| `success` | Paid, Synced, Live, Approved, Stable |
| `info` | Active, In review, Processing |
| `warning` | Pending, Stale, Slow, Watch |
| `danger` | Failed, Blocked, Critical, Error |
| `neutral` | Empty, Disabled, Skipped, Ready passive |

Adapter aux styles. Monochrome peut utiliser patterns, outlines, icons et text labels au lieu de couleurs chromatiques. Cyber Neon peut faire `live`, `alert`, `critical`, `offline`, mais les roles doivent rester predictibles.

## 7. Tailwind To Token Mapping

Cette table est obligatoire pour chaque skill qui risque d'etre implemente en Tailwind. Elle evite que le modele sache "je dois utiliser un token" sans savoir lequel.

Template general:

| Tailwind default | Skill token |
| --- | --- |
| `text-xs`, `text-sm` | `--type-body-sm` or `--type-meta` |
| `text-base`, `text-lg` | `--type-body` or `--type-card` |
| `text-2xl`, `text-3xl` | `--type-card` or `--type-section-sm` |
| `text-4xl`, `text-5xl` | `--type-section` |
| `text-6xl`, `text-7xl` | `--type-display` |
| `p-3`, `p-4`, `p-5` | `var(--s-3)`, `var(--s-4)`, `var(--s-5)` |
| `gap-3`, `gap-4`, `gap-6` | `var(--s-3)`, `var(--s-4)`, `var(--s-6)` |
| `shadow-sm`, `shadow-md` | `var(--shadow-card)` |
| `shadow-lg`, `shadow-xl` | `var(--shadow-panel)` or `var(--shadow-hero)` |
| `shadow-2xl` | `var(--shadow-modal)` |

Adapter:

- Cyber Neon: `shadow-*` doit mapper vers glow tokens, pas dark shadows.
- Monochrome: `text-purple-*`, `bg-blue-*` doivent etre interdits sauf alerts critiques.
- Industrial Brutalist: `rounded-*` doit mapper vers `0px` ou un strict token.
- Editorial Type: Tailwind headings doivent mapper vers display/deck/body/editorial roles.

## 8. Component Kit

Ajouter 4-6 composants cables. Chaque composant doit avoir:

- nom clair;
- props/types;
- DOM shape;
- CSS contract;
- states;
- mobile behavior si pertinent.

Ne pas lister 15 composants. Mieux vaut 5 composants tres solides qu'une bibliotheque vague.

Template:

```tsx
type StatusRole = "success" | "info" | "warning" | "danger" | "neutral";

export function StatusPill({ role, children }: { role: StatusRole; children: React.ReactNode }) {
  return <span className="status-pill" data-role={role}>{children}</span>;
}
```

```css
.status-pill {
  display: inline-flex;
  padding: var(--s-1) 10px;
  border-radius: 999px;
  font: var(--type-mono-sm);
  background: var(--status-neutral-bg);
  color: var(--status-neutral-fg);
}
.status-pill[data-role="success"] {
  background: var(--status-success-bg);
  color: var(--status-success-fg);
}
```

### Naming Rule

Eviter les noms ambigus:

- `ProductFrameShell`: shell utilitaire pour app/dashboard.
- `SaaSProductFrameDemo`: objet de preuve hero.
- `DataRow`: ligne universelle.
- `SectionHeader`: header de section.

Si deux composants se ressemblent, les noms doivent dire leur role. `Frame` et `ProductFrame` en meme temps creent de l'hesitation.

## 9. Page Protocols

Les protocols doivent etre des skeletons, pas seulement des bullets.

Mauvais:

```md
- First viewport: nav, hero, product frame, CTA.
- Section 2: workflow.
- Section 3: integrations.
```

Bon:

```tsx
// Product/B2B landing
<main>
  <Nav mode="sticky" primaryAction="Book demo" secondaryAction="Sign in" />
  <HeroProduct h1="..." proof={<SaaSProductFrameDemo state="ready" />} cta="Book demo" />
  <MetricProofStrip metrics={["42k records synced", "97% SLA met"]} />
  <WorkflowSequence records={atLeastSixRealRecords} />
  <IntegrationMatrix groups={["billing", "identity", "analytics"]} />
  <TrustRail claims={["SOC 2", "SSO", "99.95% uptime"]} />
</main>
```

Chaque skill doit avoir 2-4 skeletons pour ses usages principaux.

Exemples par style:

| Skill | Skeletons utiles |
| --- | --- |
| `clean-saas` | B2B landing, marketplace/booking, app/dashboard |
| `technical-ui` | workstation, monitoring console, AI control surface |
| `dark-ui` | command center, premium product dark, developer console |
| `editorial-type` | essay/archive, magazine landing, type-led portfolio |
| `playful-design` | onboarding, learning/game surface, friendly SaaS |
| `motion` | scroll narrative, animated product demo, kinetic hero |

## 10. Differentiation

Garder court. La differentiation doit aider a choisir, pas devenir un essai.

Template:

```md
## Differentiation

Use this skill when <specific job>. If removing <signature object> leaves a generic page, keep this skill. Use `<neighbor-a>` for <difference>; use `<neighbor-b>` for <difference>.
```

Exemple Clean SaaS:

```md
Clean SaaS is the right choice when product workflow, enterprise trust, onboarding, pricing, integrations, data, admin, or operational value must be proven. If removing the product frame, metrics, table, workflow, search, or integration map leaves a generic brand page, the proof object must stay. Use `light-ui` for bright tactile surfaces without SaaS proof economics; use `minimal-design` when negative space is the identity.
```

## 11. Reference Use

Ne jamais pointer le skill installable vers `raw/<skill>` ou `skills/<skill>` comme runtime. Ces dossiers existent dans le repo de maintenance, mais le skill publie doit etre autonome.

Template:

```md
## Reference Use

For deeper source extraction, load `references/refero-style-database.md`. For source-specific inspiration, load only the selected file under `references/sources/`.
```

Le dossier `.agents/skills/<skill>/references/` contient deja:

- `refero-style-database.md`;
- `sources/*.md`.

## 12. Absolute Bans

Les bans doivent cibler les defaults reels que les modeles produisent.

Mauvais:

- Do not make it generic.
- Avoid bad design.

Bon:

- No raw Tailwind typography, spacing, or shadow defaults when a token exists.
- No hover lift as the main interaction unless the style explicitly uses physical motion.
- No generic centered hero without the style's proof/media/type object.
- No status colors without semantic role mapping.

Chaque skill doit avoir des bans lies a son style:

| Skill | Bans typiques |
| --- | --- |
| `cyber-neon` | no glow on every border; no saturated text on saturated glow |
| `dark-ui` | no muddy gray text; no indistinguishable panels |
| `minimal-design` | no empty luxury whitespace without content role |
| `monochrome-ui` | no random chromatic accents |
| `playful-design` | no childish sticker chaos; no inaccessible candy palette |
| `technical-ui` | no hidden controls; no fake terminal decoration |

## 13. Pre-Output Checklist

Checklist courte, specifique, verificatrice.

Template:

```md
## Pre-Output Checklist

- First viewport contains the style's required proof/media/type object.
- One archetype is clearly dominant.
- Execution tokens are declared and used.
- Typography uses named pairings, not raw Tailwind defaults.
- Spacing uses `--s-*` or style tokens.
- State/status chips use role mapping plus tokens.
- Components include hover, focus-visible, active, disabled, loading, empty, error, success where relevant.
- Motion has a role and a reduced-motion fallback.
- Mobile layout has stable dimensions and no overlapping text or controls.
```

## 14. Migration Workflow For The 22 Remaining Skills

Pour chaque skill restant:

1. Lire `.agents/skills/<skill>/SKILL.md`.
2. Lire rapidement `skills/<skill>/SKILL.md` pour extraire les valeurs manquantes.
3. Lire seulement les fichiers pertinents dans `raw/<skill>/*.md` si les sources ont des signaux forts.
4. Identifier les decisions improvisees: type, spacing, radius, shadow/depth, states, motion, component anatomy.
5. Ajouter ou corriger `Execution Token Contract`.
6. Standardiser les packs CSS avec le meme vocabulaire token.
7. Ajouter `Tailwind to token mapping`.
8. Ajouter ou clarifier 4-6 composants cables.
9. Transformer les page protocols en skeletons TSX.
10. Compresser `Differentiation`.
11. Corriger `Reference Use`.
12. Resynchroniser publish.
13. Valider.

Commandes:

```powershell
node tools\sync_publish_pack.mjs
node tools\validate_rich_design_skills.mjs
```

Verifier que le skill actif et le miroir publie matchent:

```powershell
Get-FileHash .agents\skills\<skill>\SKILL.md, publish\refero-design-skills\.agents\skills\<skill>\SKILL.md
```

## 15. Quality Gate

Un skill est pret quand il passe ces gates:

### Gate 1 - Runtime

- `.agents/skills/<skill>/SKILL.md` est modifie.
- `publish/.../<skill>/SKILL.md` est synchronise.
- `node tools\validate_rich_design_skills.mjs` retourne 0 erreur, 0 warning.

### Gate 2 - Determinisme

- Le skill donne une type scale complete.
- Le skill donne une spacing scale.
- Le skill donne un systeme de depth/shadow/border.
- Le skill donne un mapping Tailwind -> token.
- Le skill donne un mapping state/status si l'interface a des etats.

### Gate 3 - Composants

- Au moins 4 composants cables.
- Chaque composant a states.
- Les noms n'entrent pas en collision.
- Les composants utilisent les tokens, pas des valeurs arbitraires.

### Gate 4 - First Viewport

- Le skill dit exactement quel objet doit apparaitre en premier viewport.
- Cet objet est code ou decrit en skeleton.
- Le H1 a largeur, line strategy et type token.
- Le CTA a states.
- Le bas du premier viewport laisse voir le prochain proof band.

### Gate 5 - Anti-Slop

- Pas de `shadow-xl` ou `text-7xl` sans mapping.
- Pas de status `green/red` non semantique.
- Pas de card farm quand un workflow/table/search/proof object est meilleur.
- Pas de section hero generique qui pourrait appartenir a n'importe quel style.

## 16. Forward Test Simple

Apres refactor d'un skill, tester avec un prompt neuf et sans contexte de la version precedente.

Pour Clean SaaS, le test etait:

- Generer une vitrine BTP SaaS.
- Verifier status `Payee / En attente / En retard`.
- Verifier padding sections.
- Verifier shadows.
- Verifier type scale.

Test generique pour chaque skill:

1. Demander une page/app typique du skill.
2. Relever 4 categories:
   - type;
   - spacing/radius;
   - states/status;
   - depth/motion/assets.
3. Score:
   - 4/4 categories utilisent les tokens/composants: skill pret;
   - 3/4: petite passe de serrage;
   - 2/4 ou moins: le skill reste trop prose.

## 17. Liste Des 22 Skills Restants

`clean-saas` est le modele recent. Les autres a traiter avec cette methode:

- `cyber-neon`
- `dark-ui`
- `editorial-minimal`
- `editorial-type`
- `experimental-type`
- `expressive-brand`
- `geometric-modern`
- `glossy-modern`
- `high-contrast`
- `high-end-design`
- `light-ui`
- `minimal-design`
- `monochrome-ui`
- `motion`
- `pastel`
- `playful-design`
- `serif-display`
- `soft-gradients`
- `technical-sans`
- `technical-ui`
- `utilitarian`
- `vibrant-accents`

## 18. Le Principe A Retenir

Le skill ne doit pas seulement inspirer le modele. Il doit rendre l'improvisation plus couteuse que l'application du systeme.

Un bon skill dit:

- quoi choisir;
- quand le choisir;
- comment le coder;
- quels defaults bannir;
- comment verifier que le resultat suit le style.

Le refactor Clean SaaS a fonctionne parce qu'il a remplace des zones floues par:

- tokens executables;
- tables de mapping;
- composants cables;
- skeletons de pages;
- checklist specifique;
- references embarquees propres.

Repliquer exactement ce pattern sur les 22 autres skills.
