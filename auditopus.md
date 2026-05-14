# Audit Opus - Clean SaaS Skill

Date: 2026-05-03
Scope: `.agents/skills/clean-saas/SKILL.md` and published mirror.

## Verdict court

Je valide l'essentiel du diagnostic Opus: le skill Clean SaaS actuel fonctionne quand il donne des choix executables, et il laisse trop d'improvisation quand il exprime une intention sans token, composant, mapping ou regle de choix. Le ratio 40/60 observe par Claude est plausible pour une generation Tailwind, surtout sur typo, spacing, ombres et couleurs de statut.

Je nuance deux points:

- Le skill actif n'est pas un vieux document 100% prose: il fait deja environ 26k caracteres et contient des archetypes, packs CSS, composants, states et motion. Le probleme n'est donc pas "manque de richesse", mais "decisions critiques encore non cablees".
- Le ratio optimal n'est pas 100% code. Pour un skill visuel, il faut garder assez de prose pour choisir le bon archetype, arbitrer les cas limites et conserver le gout. Le bon objectif est un playbook dense: environ 55-60% tokens/code, 15-20% tableaux de decision, 10-15% regles binaires, 10-15% prose de contexte.

## Diagnostic valide

| Decision visuelle | Etat actuel observe | Validation |
| --- | --- | --- |
| H1 hero | Le skill dit 2-3 lignes, balance, max-width, mais ne donne pas de type scale complete. | Valide. Sans `--type-display`, le modele revient a `text-7xl`, `text-6xl`, etc. |
| Padding cards | Le skill donne des espacements dans les archetypes, mais pas une echelle globale applicable. | Valide. `p-5/p-6/p-7` devient un choix au feeling. |
| Shadows | Le skill dit de garder peu de recettes, mais ne nomme pas assez les tiers. | Valide. "subtle card shadow" est trop ouvert. |
| Status colors | Le skill dit semantic state tokens, mais les tokens exacts et le mapping metier manquent. | Tres valide. C'est le trou le plus dangereux pour les interfaces SaaS. |
| Hover rows | Le skill interdit le hover lift, mais ne donne pas assez de contrat de hover row/data. | Valide. Il faut `background/border/inset`, pas seulement une interdiction. |
| Labels mono | Le skill nomme Geist Mono, mais ne donne pas de scale mono executable. | Valide. Les agents choisissent `text-[10px]` ou `text-[11px]` arbitrairement. |
| Section gaps | Les archetypes ont des valeurs, mais pas de scale unique. | Valide. Tailwind `py-20/py-28` reprend le dessus. |
| Radius et action | Le skill est deja bon: `8px`, `12-16px`, `999px`, `#615fff`. | Valide. Quand le token existe, il est suivi. |

## Diagnostic a nuancer

Opus propose 300-380 lignes. C'est coherent avec le fichier actuel, qui tourne deja autour de cette taille logique si on ignore les lignes vides et les gros blocs. Il ne faut pas chercher une reduction agressive a 200 lignes: on perdrait les archetypes et les cas limites.

Le bon mouvement est de remplacer des instructions molles par des contrats:

- `Geist for UI` devient une type scale nommee.
- `16px panels` devient `--s-6` ou `--space-card`.
- `semantic states` devient `status="warning"` -> `--status-warning-bg/fg`.
- `subtle shadow` devient `--shadow-card`, `--shadow-panel`, `--shadow-hero`.
- `workflow rows` devient un composant `DataRow` avec DOM, props, CSS et states.

## Ce que j'ai change dans le skill

Fichier actif modifie: `.agents/skills/clean-saas/SKILL.md`
Miroir synchronise: `publish/refero-design-skills/.agents/skills/clean-saas/SKILL.md`

1. Ajout d'un `Execution Token Contract` commun aux packs:
   - type scale complete;
   - spacing scale;
   - shadow recipes;
   - semantic status tokens;
   - interaction tokens.

2. Ajout de mappings explicites:
   - roles status `success/info/warning/danger/neutral`;
   - mots metier vers role;
   - pairings typo (`hero-block`, `section-head`, `card-block`, `data-row`);
   - tier map des shadows.

3. Ajout de composants cables:
   - `StatusPill`;
   - `DataRow`;
   - `KpiCard`;
   - `SectionHeader`;
   - `ProductFrame` sert de shell produit; `SaaSProductFrame` reste l'objet de preuve hero.

4. Remplacement de states Tailwind hardcodes:
   - suppression des rouges/verts hardcodes dans `cleanSaaSState`;
   - usage des status tokens et interaction tokens.

5. Conversion des page protocols en skeletons plus executables:
   - landing product;
   - marketplace/booking;
   - dashboard/app.

## Plan d'action global pour les autres skills

| Etape | Action | Pourquoi | Priorite |
| --- | --- | --- | --- |
| 1 | Pour chaque skill, identifier les decisions ou l'agent improvise encore: type, spacing, shadow, states, motion, palette. | Les trous de decision creent le slop. | Haute |
| 2 | Ajouter un `Execution Token Contract` specifique au style. | Les tokens retirent des choix arbitraires au modele. | Haute |
| 3 | Ajouter 4-6 composants signature cables avec states. | Les composants convertissent le gout en structure. | Haute |
| 4 | Garder les archetype tables, mais couper les colonnes narratives inutiles. | Les tableaux guident le "quand" sans bavarder. | Moyenne |
| 5 | Transformer les page protocols en skeletons. | Les agents suivent mieux du TSX/CSS que des listes abstraites. | Moyenne |
| 6 | Garder une checklist courte et specifique au style. | Dernier filtre contre les defaults generiques. | Moyenne |
| 7 | Synchroniser `publish/` apres chaque lot et lancer `node tools/validate_rich_design_skills.mjs`. | Eviter les divergences installable/publish. | Haute |

## Criteres de validation futurs

Un skill passe de "guide" a "systeme d'exploitation visuel" quand:

- chaque H1/H2/card/meta/data label a un token ou pairing;
- chaque statut a un role, une couleur bg/fg et une phrase metier;
- chaque composant principal a hover, focus, selected, loading, disabled, empty/error/success quand pertinent;
- les ombres sont limitees a 4-7 recettes nommees;
- la page commence par un objet de preuve propre au style;
- les bans ciblent les defaults reels que les agents produisent.

## Decision

Je valide la recommandation Opus a environ 85%, avec une correction: ne pas viser "moins de lignes" comme objectif principal. Viser "moins de decisions non cablees". Le skill Clean SaaS etait deja proche de la bonne longueur; il avait besoin d'un noyau de tokens et composants plus contraignant.

## Validation locale

Commande lancee:

```powershell
node tools\validate_rich_design_skills.mjs
```

Resultat: 23 skills audites, 0 erreur, 0 warning. Le miroir `publish/` a ete regenere avec `node tools\sync_publish_pack.mjs`.

## Addendum - Passe Claude

Apres retour Claude, nouvelle micro-passe appliquee:

- restauration de la liste numerotee `<design_plan>`;
- ajout de la table `Tailwind default -> Clean SaaS token`;
- standardisation des packs avec `--radius-control`, `--radius-card`, `--radius-panel`;
- renommage clair `ProductFrameShell` vs `SaaSProductFrameDemo`;
- redeploiement humainement lisible des tokens CSS;
- compression de `Differentiation`;
- remplacement de `Reference Use` par les chemins embarques `references/...`.

Validation relancee: 23 skills, 0 erreur, 0 warning.
