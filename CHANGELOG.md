# Changelog

## 2026-05-02 - Rich design skill refactor

Refonte des 23 skills Refero installables pour remplacer le volume template par du contenu stylistique, UI et motion directement exploitable.

### Objectif

- Garder des skills fournis: cible finale 24k-35k caracteres par `SKILL.md`, pas une reduction seche.
- Supprimer le boilerplate generique issu du generateur precedent.
- Remonter davantage de matiere brute: archetypes sources, hex, typographies, spacing, radius, composants, etats, motion, guardrails.
- Rendre les skills plus proches en utilite de `gpt-taste`, `high-end-visual-design` et `industrial-brutalist-ui`, tout en conservant la richesse des gros fichiers Refero.

### Metriques

| Metric | Before | After |
| --- | ---: | ---: |
| Skills refondus | 23 | 23 |
| Total installable chars | 721,546 | 618,584 |
| Average chars / skill | 31,372 | 26,895 |
| Min / max chars | 30,206 / 32,823 | 24,000 / 34,942 |
| Forbidden template markers | 188 validation errors | 0 |

### Changements globaux

- Remplacement des `Component Blueprints` generiques par des composants signature par skill.
- Suppression des tables `Raw-Derived Technical Signals` et des tokens anonymes `--source-color-*`.
- Suppression des states SaaS generiques (`border-emerald-500`, `text-emerald-700`).
- Ajout de palettes semantiques et mini token packs par archetype.
- Ajout de sections de differentiation pour les skills proches.
- Ajout de recettes CSS/TSX, motion primitives, reduced-motion fallbacks, et state contracts.
- Creation de `.agents/skills/_shared/protocol.md` pour les regles universelles non stylistiques.
- Ajout de `tools/validate_rich_design_skills.mjs` pour auditer les installables.
- Synchronisation du mirror `publish/refero-design-skills/.agents/skills/`.

### Bugs corriges

- `pastel`: suppression du token invalide `#3c422`.
- `playful-design`: correction du token source Clay `#55534` en `#55534a` dans:
  - `.agents/skills/playful-design/SKILL.md`
  - `skills/playful-design/SKILL.md`
  - `raw/playful-design/05-clay.md`
- References/bruts: correction de tokens tronques supplementaires herites des sources:
  - `#0f161` -> `#0f161e`
  - `#17150` -> `#17150e`
  - `#1a211` -> `#1a211e`
  - `#3c422` -> `#3c4422`
  - `#4e4e4` -> `#4e4e4e`
- `cyber-neon`: suppression de la contradiction `#05060a`; le mandat de canvas pur noir utilise `#000000`.
- Suppression des faux patterns de parsing `transform: uppercase (...)` et equivalents generes.

### Fichiers principaux modifies

- `.agents/skills/<23-skills>/SKILL.md`
- `publish/refero-design-skills/.agents/skills/<23-skills>/SKILL.md`
- `.agents/skills/_shared/protocol.md`
- `publish/refero-design-skills/.agents/skills/_shared/protocol.md`
- `tools/validate_rich_design_skills.mjs`
- `tools/sync_publish_pack.mjs`
- `skills/playful-design/SKILL.md`
- `raw/playful-design/05-clay.md`

### Validation

Run:

```powershell
node tools\validate_rich_design_skills.mjs
```

Expected summary:

```json
{
  "skills": 23,
  "errors": 0,
  "warnings": 0,
  "minChars": 24000,
  "maxChars": 34942,
  "avgChars": 26895
}
```

Additional checks performed:

- Publish mirror equality: all 23 published `SKILL.md` files match `.agents/skills`.
- Forbidden pattern count in `.agents/skills`: 0.
- Forbidden pattern count in `publish/refero-design-skills/.agents/skills`: 0.

### Backup

Pre-refactor backup:

`_backup-before-rich-refactor-20260502-211335/`
