# ROADMAP — Refonte du pack `refero-design-skills`

> Document destiné à l'agent qui va exécuter la refonte (GPT-5.5).
> Tout est self-contained : paths, code à supprimer/ajouter, structure cible, critères de validation.

---

## 0. Contexte projet

**Repo racine** : `c:/Users/matth/Desktop/design-skills-db/`

**4 hiérarchies de fichiers** :

1. **Installables (à refondre)** — `c:/Users/matth/Desktop/design-skills-db/.agents/skills/<skill>/SKILL.md`
   Ce sont les skills réellement utilisés par les agents. Doivent être courts (8-12k caractères) ET techniquement riches.

2. **Pack publié (mirror à régénérer après refonte)** — `c:/Users/matth/Desktop/design-skills-db/publish/refero-design-skills/.agents/skills/<skill>/SKILL.md`
   Installé via `npx skills add c:/Users/matth/Desktop/design-skills-db/publish/refero-design-skills`. À régénérer une fois la refonte faite.

3. **Bruts (matière première)** — `c:/Users/matth/Desktop/design-skills-db/skills/<skill>/SKILL.md` (60-95k caractères chacun)
   Source de vérité. Contient palettes complètes, typographies exactes, archétypes nommés, "Carry Forward / Avoid" par source, formules signatures.

4. **Références embarquées** — `c:/Users/matth/Desktop/design-skills-db/.agents/skills/<skill>/references/refero-style-database.md` + `references/sources/*.md`
   Chargées à la demande par l'agent.

**Skills de référence (ne pas toucher, à imiter)** :
- `c:/Users/matth/Desktop/design-skills-db/.agents/skills/gpt-taste/SKILL.md` (8k)
- `c:/Users/matth/Desktop/design-skills-db/.agents/skills/high-end-visual-design/SKILL.md` (10k)
- `c:/Users/matth/Desktop/design-skills-db/.agents/skills/industrial-brutalist-ui/SKILL.md` (8.5k)

**23 skills à refondre** :
clean-saas, cyber-neon, dark-ui, editorial-minimal, editorial-type, experimental-type, expressive-brand, geometric-modern, glossy-modern, high-contrast, high-end-design, light-ui, minimal-design, monochrome-ui, motion, pastel, playful-design, serif-display, soft-gradients, technical-sans, technical-ui, utilitarian, vibrant-accents.

---

## 1. Diagnostic actuel

### 1.1 Le problème central
Les 23 skills installables ont été générés par un pipeline templating identique. Sur ~32k caractères par skill, **~22-24k sont du boilerplate copié-collé verbatim entre tous les skills**. Seuls **6-8k sont du contenu réellement spécifique**, et cette spécificité est diluée dans le bruit.

**Conséquences** :
- Identité diluée : un agent qui charge `monochrome-ui` et `pastel` reçoit ~80% des mêmes instructions.
- Coût en tokens élevé à chaque chargement.
- Contradictions internes (ex : `cyber-neon` viole sa propre Pure Black Mandate).
- Les agents génèrent du slop générique au lieu de pages identitaires.
- Bruts riches (60-95k caractères) quasi inutilisés.

### 1.2 Sections génériques dupliquées entre les 23 skills

Ces sections sont **identiques mot-pour-mot** dans la quasi-totalité des skills (à supprimer ou externaliser) :

| Section | Lignes/skill | Problème |
|---|---|---|
| `Mandatory <design_plan>` | ~12 | 8 puces génériques identiques |
| `First Viewport Protocol` | ~8 | Texte identique partout |
| `Component construction rules` | ~10 | 5 puces identiques |
| `Component Blueprints` (8 sous-sections) | **~250** | **Le pire offender**. Chaque "blueprint" répète la stub `"Reusable style-specific module that carries identity and function. Start with real content..."` Aucune valeur. |
| `Tailwind/React Section Skeleton` | ~30 | JSX identique, seul le commentaire `<Style> identity` change |
| `State Pattern` (objet `stateClasses`) | ~20 | `border-emerald-500 text-emerald-700` partout — casse les skills monochromes |
| Pattern `useGSAP` | ~15 | Fade-up de 28px + `power3.out` partout, y compris dans le skill `motion` |
| `Style-Specific CSS Motion Primitive` | ~10 | Nom mensonger — `transition: 420ms cubic-bezier(0.16,1,0.30,1)` + `filter: brightness(1.03) translateY(-1px)` est identique dans 5/6 skills par groupe |
| `Complete Page Protocols` (Marketplace/Client/App/Hero) | ~40 | Copié-collé verbatim |
| `Failure Corrections` | ~8 | 5 puces identiques |
| `Reference Use` | ~8 | Identique |
| `Pre-Output Checklist` | ~15 | 10 puces identiques |
| 5 derniers bullets de `Absolute Bans` | ~5 | Génériques cross-skill |

**Total à dégraisser** : ~430 lignes / skill × 23 skills = **~10 000 lignes de duplication**.

### 1.3 Sections "spécifiques" mais cassées

#### `Raw-Derived Technical Signals`
Tableaux de fréquences brutes du type `#ffffff (18x)`, `1px (32x)`. Inutilisable par un agent.
**Pollués par des couleurs hors-style** :
- `minimal-design` contient `#693edf` (violet) — contradictoire.
- `monochrome-ui` contient `#c692ff`, `#02b7b6`, `#b70202` — contradictoires.
- `clean-saas` contient `#611f69`, `#4a1255` (Slack purple) — risque de pollution Slack-like.
- `dark-ui` met `#ffffff` en première position — absurde.

#### `Raw-Derived Token Starter`
Génère `--source-color-1` à `--source-color-8` **anonymes**, sans rôle sémantique. Incite à copier des tokens sans intention.

#### `Source Direction Matrix`
Le brut a des descriptions précises de chaque source. L'installable les remplace par la phrase recyclée :
> `"Source-specific layout, color, type, component, and motion lessons."`
Présente dans 4/5 skills par groupe. Aucune information.

### 1.4 Bugs concrets repérés

| Skill | Bug | Action |
|---|---|---|
| `pastel` | Token `#3c422` (5 chars, hex invalide) copié dans `--source-color-3` | Corriger en `#3c4422` (vérifier dans le brut) |
| `technical-sans` | Entrée `transform: uppercase (1x)` dans Motion declarations (parsing cassé) | Supprimer, remplacer par vraies primitives |
| `technical-ui` | Entrée `transform: translateY(1px) (1x)` quasi vide (parsing cassé) | Idem |
| `editorial-type` | Entrée `transform: uppercase (1x)` (parsing cassé) | Idem |
| `cyber-neon` | `--bg: #05060a` au lieu de `#000000` (viole sa propre "Pure Black Mandate" du brut) | Imposer `--bg: #000000` |

---

## 2. Baseline qualité (les 3 références)

### 2.1 Structure type observée
Les 3 références partagent :
- **Longueur 8-10k caractères** (vs 32k pour les skills à refondre).
- **Persona forte et nommée** : `Vanguard_UI_Architect`, "elite frontend design engineer".
- **Anti-patterns avec valeurs concrètes** : `BANNED FONTS: Inter, Roboto, Arial`, `BANNED: shadow-md, rgba(0,0,0,0.3)`, `BANNED: linear/ease-in-out transitions`.
- **Recettes CSS/Tailwind copiables** spécifiques au style : `rounded-[calc(2rem-0.375rem)]`, `cubic-bezier(0.32,0.72,0,1)`, `clamp(4rem, 10vw, 15rem)`.
- **Motion identitaire** : double-bezel hover physics, scrubbing text reveals, hard-wipes — chacune avec rôle précis et props autorisées.
- **Performance section** : "Never animate top/left/width/height", "backdrop-blur réservé au fixed/sticky".
- **Ratio règle/exemple ~70/30** : presque chaque ligne est actionnable.
- **Pre-flight checklist** : 8-12 points spécifiques à vérifier (pas génériques).
- **Identité radicale** : impossible de confondre `gpt-taste` avec `industrial-brutalist-ui` après 3 lignes.

### 2.2 Patterns signatures concrets observés

| Référence | Patterns signature |
|---|---|
| `gpt-taste` | Python RNG pour seed la variance, AIDA section structure, 2-line iron rule pour titles, Macro-Typography (Structural Headers `clamp(4rem, 10vw, 15rem)`), Inline Typography Images, Gapless Bento, ScrollTrigger pin/stack/scrub |
| `high-end-visual-design` | Variance Engine (Vibe × Layout archetypes), Double-Bezel (Doppelrand) avec `rounded-[calc(2rem-0.375rem)]`, Button-in-Button, Fluid Island Nav, Hamburger Morph staggered, Magnetic Hover Physics avec `active:scale-[0.98]`, GPU-Safe Animation rules |
| `industrial-brutalist-ui` | 2 archétypes mutuellement exclusifs (Swiss Print vs Military Terminal), `gap: 1px` mathematical grid, scanlines (`repeating-linear-gradient`), ASCII framing, no border-radius, Halftone overlays, Jitter/Glitch primitives |

---

## 3. Structure cible pour chaque SKILL.md refondu

Chaque skill doit suivre **exactement** cette structure. Cible : **8-12k caractères**.

```markdown
---
name: <skill-name>
description: <description active 1 phrase qui pose le standard et oppose à au moins 1 autre skill voisin>
---

# Agent Skill: <Persona Name> (<Role>)

## 1. Core Directive
- **Persona:** `<NamedPersona>` (ex: Editorial_Architect, Cyber_Holographer, Tactile_Engineer)
- **Standard:** Phrase qui pose la barre ($150k agency, Awwwards-tier, Linear-tier, etc.)
- **Identity Rule:** Une formule philosophique tranchée (ex: "Glow replaces Shadow", "Type IS the layout", "Minimalism is not emptiness")

## 2. ABSOLUTE BANS (Style-Specific)
5 à 10 anti-patterns SPÉCIFIQUES à ce skill avec valeurs concrètes.
- **Banned Fonts:** liste précise.
- **Banned Behaviors:** liste précise (ex: "no purple-blue blob duo", "no centered hero", "no decorative gradient on text").
- **Banned CSS:** liste précise (ex: "no `border-radius > 8px` for editorial", "no `transition > 120ms` for utilitarian").
- **Style Contradictions:** ce qu'il NE faut JAMAIS faire qui appartient à un skill voisin.

## 3. Differentiation
1 paragraphe court qui pose les frontières avec les 2-3 skills voisins.
Exemple pour `cyber-neon` : "Use cyber-neon for pure black + 1 neon accent + obligatory glow. For multi-accent dark with gradient hero use dark-ui. For warm OLED with serif drama use dark editorial."

## 4. Tokens (Curated, Semantic)
Pas de fréquences brutes. 5-8 tokens nommés avec rôle :
```css
:root {
  --bg: #...;          /* Canvas / page background */
  --surface: #...;     /* Cards, panels */
  --ink: #...;         /* Body text */
  --muted: #...;       /* Secondary text */
  --line: #...;        /* Hairlines, dividers */
  --accent: #...;      /* Primary action only */
  --radius-control: ...;
  --radius-card: ...;
}
```
+ couples typographiques précis :
- Display: <font>, <weight>, `clamp(...)`, `line-height: ...`, `letter-spacing: ...`
- Body: idem
- Mono/labels: idem

## 5. Archetypes (3-5)
Chaque archétype = **vraie recette différenciée** avec sa propre palette + radius + spacing + couple typo.
NE PAS recycler la phrase générique du brut. Décrire pour chaque :
- Quand l'utiliser (1 ligne).
- Hex de la palette (3 valeurs).
- Radius signature (1 valeur).
- Section gap (1 valeur).
- Couple typo (1 ligne).
- 1 motion comportement spécifique.

## 6. Signature Components (3-5)
Pas 8 stubs vides. 3 à 5 composants RÉELLEMENT décrits avec :
- DOM/JSX minimal.
- Classes CSS/Tailwind exactes.
- États hover/active/focus.
- Motion comportement.
- Mobile fallback.

## 7. Motion System (Style-Specific)
PAS de fade-up générique. Pour CHAQUE skill :
- 2-3 keyframes nommées propres au style.
- Easings nommés (ex: `--ease-reveal`, `--ease-spring`, `--ease-scrub`) avec rôles.
- Au moins 1 primitive utilisable (CSS ou GSAP).
- `prefers-reduced-motion` fallback explicite.

## 8. Performance Guardrails
Spécifiques au style si pertinent (ex: blur uniquement sur fixed pour glossy, no-backdrop-filter pour utilitarian). Sinon hériter du shared protocol.

## 9. Pre-Output Checklist
8-12 points VÉRIFIABLES et SPÉCIFIQUES au skill. Pas génériques.
- [ ] La palette utilise <hex spécifiques>
- [ ] Le motion <comportement signature> est présent
- [ ] Aucune classe <bannie spécifique> n'apparaît
- [ ] Le couple typographique <X + Y> est respecté
- [ ] L'archétype choisi (parmi les 3-5) est consciemment appliqué
```

**Référence cross-cut** : tout ce qui est partagé (Page Protocols, design_plan, GSAP useGSAP générique, Pre-Output générique) va dans `_shared-protocol.md` (voir §4).

---

## 4. Le fichier `_shared-protocol.md` à créer

Créer **un seul** fichier partagé : `c:/Users/matth/Desktop/design-skills-db/.agents/skills/_shared/protocol.md` (ou équivalent, à charger en référence).

Contenu (extraits des 23 skills, à dédupliquer) :

```markdown
---
name: shared-design-protocol
description: Shared execution protocol for all refero design skills. Loaded as a reference, not a standalone skill.
---

# Shared Design Protocol

## Mandatory <design_plan> (every skill)
1. Identify the requested page type (marketplace, client website, app/dashboard, iconic hero).
2. Pick 1 archetype from the active skill's Archetype list.
3. Draft the first viewport: header, hero block, primary action.
4. Plan the section rhythm (3-7 sections max).
5. Pick the motion primitives that will run.
6. Pick the components from the skill's Signature Components.
7. List the bans that apply.
8. Validate against the skill's Pre-Output Checklist.

## First Viewport Protocol
- Above the fold: brand mark + 1 nav surface + 1 H1 + 1 primary CTA + 1 product/visual evidence.
- No empty hero. Real content from the prompt.
- No "lorem ipsum" placeholders.

## Component Construction Rules
- Real DOM, real classes, real states.
- Mobile-first: design at 390px, then scale up.
- Every component has hover + focus + active + disabled.
- Every interactive element is keyboard-accessible.
- No icons without labels on destructive actions.

## Page Protocols (when applicable)
### Marketplace
Header + Hero + Filter rail + Result grid + Featured strip + Footer.
### Client Website
Header + Hero + Service grid + Case study strip + CTA + Footer.
### App or Dashboard
Sidebar nav + Top bar + Main canvas (split or grid) + Inspector panel + Footer status.
### Iconic Hero
Full-bleed canvas + 1 dominant typographic move + 1 supporting visual + 1 CTA + scroll cue.

## Failure Corrections (universal)
- If output is generic SaaS template → restart from skill's Archetype + Tokens.
- If layout is symmetrical 3-column → break with the active Layout Archetype.
- If motion is fade-up only → apply skill's Motion System.
- If colors don't match Tokens → reset palette to skill's Tokens.
- If checklist fails any point → fix before delivering.

## Reference Use
- Load `references/refero-style-database.md` only when:
  - The user requests a specific source (e.g., "make it like Linear").
  - The user wants a deeper variation than the 3-5 archetypes.
  - The user explicitly mentions `references`.
- Otherwise stay within the active skill's main file.

## Universal GPU/Performance Rules
- Animate only `transform`, `opacity`, `filter`, `clip-path`, `background-position`.
- Never animate `top`, `left`, `width`, `height`.
- `backdrop-filter: blur(>12px)` reserved to fixed/sticky elements.
- `will-change` only during active animation, then cleanup.
- Use `IntersectionObserver` or framework `whileInView`. Never `window.addEventListener('scroll')`.

## Universal Pre-Output Checklist
- [ ] Active skill's Tokens are applied
- [ ] Active skill's Archetype was consciously picked
- [ ] At least 2 Signature Components from the skill are used
- [ ] Motion System primitives from the skill are present
- [ ] No banned elements from the skill's ABSOLUTE BANS
- [ ] Mobile fallback is implemented
- [ ] Keyboard navigation works
- [ ] No layout-triggering animations
```

**Gain** : ~15k caractères × 23 skills = **~345k caractères supprimés** des installables. Coût négligeable (1 fichier de référence chargé à la demande).

---

## 5. Tâches de refonte (par ordre d'exécution)

### TÂCHE 1 — Bugs bloquants (30 min)
**Fichiers** :
- `c:/Users/matth/Desktop/design-skills-db/.agents/skills/pastel/SKILL.md` : remplacer `#3c422` par `#3c4422` (vérifier le brut `c:/Users/matth/Desktop/design-skills-db/skills/pastel/SKILL.md`).
- `c:/Users/matth/Desktop/design-skills-db/.agents/skills/technical-sans/SKILL.md` : supprimer la ligne `transform: uppercase (1x)` dans Motion declarations.
- `c:/Users/matth/Desktop/design-skills-db/.agents/skills/technical-ui/SKILL.md` : supprimer la ligne `transform: translateY(1px) (1x)`.
- `c:/Users/matth/Desktop/design-skills-db/.agents/skills/editorial-type/SKILL.md` : supprimer `transform: uppercase (1x)`.
- `c:/Users/matth/Desktop/design-skills-db/.agents/skills/cyber-neon/SKILL.md` : changer `--bg: #05060a` en `--bg: #000000` et ajouter une ligne "Pure Black Mandate: --bg MUST be #000000, never #0a0a0a or #111".

### TÂCHE 2 — Créer `_shared-protocol.md` (2h)
Créer le fichier décrit en §4. Vérifier qu'il couvre bien tout ce qui est dupliqué dans les 23 skills (lire 3-4 skills pour valider).

### TÂCHE 3 — Refondre le skill `motion` from scratch (1 jour, priorité critique)
C'est le skill le plus cassé du pack. Doit être réécrit intégralement.

**Source brute à exploiter** : `c:/Users/matth/Desktop/design-skills-db/skills/motion/SKILL.md`. En particulier la section "9 Motion Archetypes" (Brutalist DTC, Type Foundry Minimalism, Nebula Gradient Hero, Stark Editorial Dark, Instrument Panel, Holographic Sci-Fi, Neon Noir, Geometric Soft-Cards, Iridescent Shader Night).

**Structure cible** (~10k caractères) :

1. Persona : `Motion_Choreographer`. Standard : Awwwards-tier choreography, 60fps mobile minimum.
2. Identity Rule : "Motion IS structure. If the static frame doesn't work, motion can't save it."
3. Differentiation vs autres skills : "Use motion when scroll/cursor/timeline drives layout. For static-first identity skills, do not pick motion."
4. Tokens : palette d'easings nommés
   ```css
   --ease-reveal: cubic-bezier(0.16, 1, 0.30, 1);
   --ease-spring: cubic-bezier(.34, 1.56, .64, 1);
   --ease-scrub: linear;
   --ease-quick: cubic-bezier(.4, 0, .2, 1);
   --ease-pop: cubic-bezier(.68, -0.55, .27, 1.55);
   ```
5. Archetypes : remonter les **9 motion archetypes du brut** avec leurs tokens distincts (palette, radius, type, motion engine).
6. Signature Components avec recettes **complètes** :
   - Pinned scroll narrative (ScrollTrigger pin + scrub avec code complet)
   - SplitText word stagger reveal (avec import + setup + cleanup)
   - Marquee infinite (CSS-only avec hover-pause)
   - Cursor parallax (avec lerp + RAF)
   - View Transitions cross-page (avec API native)
7. Motion Engine Picker : critères pour choisir CSS-only vs Framer Motion vs GSAP+ScrollTrigger vs Lenis+GSAP vs R3F.
8. Performance Budget : 60fps minimum, will-change cleanup, GPU-only properties, IntersectionObserver vs scroll listener.
9. Pre-flight checklist : 10 points motion-spécifiques (pas génériques).

### TÂCHE 4 — Refondre les 22 autres skills selon la structure cible (§3)

**Méthodologie pour chaque skill** :

1. Lire l'installable actuel `c:/Users/matth/Desktop/design-skills-db/.agents/skills/<skill>/SKILL.md`.
2. Lire au moins les 300 premières lignes du brut `c:/Users/matth/Desktop/design-skills-db/skills/<skill>/SKILL.md`.
3. Extraire du brut :
   - Les 5 archétypes nommés (avec hex, radius, section gap, couple typo).
   - Les couples typographiques précis (font + weights + sizes + line-heights + letter-spacings).
   - Les "Carry Forward / Avoid" listes par source.
   - Les formules signatures philosophiques.
   - Les box-shadows / gradients / max-widths exactes.
4. Réécrire le SKILL.md selon la structure §3.
5. Cible 8-12k caractères.
6. Valider contre la checklist §6 ci-dessous.

**Ordre de priorité** (par dégât identitaire actuel le plus élevé) :

| # | Skill | Pourquoi |
|---|---|---|
| 1 | `motion` | Déjà refait en TÂCHE 3 |
| 2 | `utilitarian` | Brut extrêmement riche, installable totalement déconnecté. State Pattern hover-translate-y anti-utilitarian. |
| 3 | `expressive-brand` | Identité Family/mymind/Antimetal/Empower jamais remontée. L'équation `Brand Voice = Category + Audience + Lever + Repetition` est absente. |
| 4 | `editorial-minimal` | 5 canvas types du brut perdus. 5 archétypes (OpenAI/Anthropic/Legend/Intercom/Limitless) jamais décrits. |
| 5 | `minimal-design` | `stateClasses` emerald casse la palette. Aucun ban minimal-spécifique. |
| 6 | `monochrome-ui` | Raws polluées par violet/turquoise. State pattern emerald incohérent. |
| 7 | `cyber-neon` | Multi-tier black stack 7 niveaux du brut absent. Massive Display + Tiny UI dichotomie perdue. |
| 8 | `dark-ui` | Pas de différenciation explicite vs cyber-neon. 8-tier surface stack absent. |
| 9 | `editorial-type` | 3 presets nommés au lieu d'1 unique. Ajouter drop caps, multi-column, fleurons. |
| 10 | `serif-display` | Ajouter fonts canoniques + binary radius rule + line-mask motion. |
| 11 | `clean-saas` | Box-shadows exactes du brut + 2 blancs hiérarchisés (Snow + Paper) à remonter. |
| 12 | `light-ui` | "Avoid Pale Weakness" du brut absent. Différenciation vs clean-saas/minimal-design urgente. |
| 13 | `pastel` | Palette Pairings contraste-AA à ajouter. 6 archétypes du brut au lieu de 4 vagues. |
| 14 | `playful-design` | Étendre patterns existants (chunky shadow system, spring physics, character/sticker system). |
| 15 | `geometric-modern` | Tokens section-gap (200px Greenspace, 64px Artem) + letter-spacing fonctionnel à remonter. |
| 16 | `glossy-modern` | Glossy Stack 6 layers + Material Question 8 metaphors absents. |
| 17 | `high-contrast` | Accent Job Lock par archétype. Remplacer `filter: invert(1)` dangereux par toggle propre. |
| 18 | `high-end-design` | Material Cue → CSS table. Ajouter mini-token-pack par archétype. |
| 19 | `experimental-type` | 5 archétypes opposés au lieu d'1 acid preset. Variable Font Playground + Kinetic Marquee complets. |
| 20 | `vibrant-accents` | "Big Color vs Small Color" + 5 palettes nommées + accent fill sweep keyframe. |
| 21 | `soft-gradients` | 5 poles nommés du brut (Pearl/Lavender/Peach/Dusk/Ember) + règle 3 couches (Ambient/Surface/Action). |
| 22 | `technical-sans` | Type Discipline (variable weights 450/480/510/590, OpenType features). Différenciation vs technical-ui. |
| 23 | `technical-ui` | Différenciation vs technical-sans (in-product vs marketing). Density grid chiffrée. |

### TÂCHE 5 — Régénérer le pack publié
Une fois les 23 skills refondus dans `.agents/skills/`, copier vers `publish/refero-design-skills/.agents/skills/` (mirror).

### TÂCHE 6 — Tester en chargement réel
- Charger 3 skills voisins (ex: `clean-saas`, `light-ui`, `minimal-design`) et générer une page avec chacun.
- Vérifier que les outputs sont **clairement identifiables** comme provenant de skills différents.
- Si 2 outputs sont indiscernables → renforcer la Differentiation section des deux skills.

---

## 6. Critères de validation par skill refondu

Chaque SKILL.md refondu DOIT satisfaire :

- [ ] Longueur entre 8 000 et 12 000 caractères.
- [ ] Persona nommée explicitement.
- [ ] Identity Rule (formule philosophique tranchée) présente.
- [ ] Section "Differentiation" qui oppose à au moins 1 autre skill voisin.
- [ ] 5-10 ABSOLUTE BANS spécifiques au style (pas génériques cross-skill).
- [ ] Tokens curés avec rôles sémantiques (`--bg`, `--ink`, `--accent`, etc.) — pas de `--source-color-N`.
- [ ] 3-5 Archétypes décrits avec hex + radius + section-gap + couple typo distincts.
- [ ] 3-5 Signature Components avec DOM + classes + states + motion + mobile (pas 8 stubs vides).
- [ ] Motion System spécifique : 2-3 keyframes propres + easings nommés.
- [ ] Au moins 1 recette CSS/Tailwind copiable inline dans la prose.
- [ ] Pre-flight checklist de 8-12 points spécifiques.
- [ ] Aucune occurrence des stubs : `"Reusable style-specific module that carries identity and function"`, `"Source-specific layout, color, type, component, and motion lessons."`, `"A concrete promise with <Style> identity."`.
- [ ] Aucun `--source-color-1` à `--source-color-8` anonyme.
- [ ] Aucune table de fréquences brutes (`#xxx (Nx)`).
- [ ] Aucun `border-emerald-500 text-emerald-700` sauf si la palette du skill l'autorise explicitement.
- [ ] Aucune section "Complete Page Protocols" / "Failure Corrections" / "Reference Use" dupliquée (déplacée dans `_shared-protocol.md`).

---

## 7. Pertes systémiques à corriger en remontant du brut

Pour chaque skill, ces patterns du brut sont quasi systématiquement perdus dans l'installable. À remonter :

### 7.1 Les "5 archétypes nommés"
Chaque brut a 5 archétypes radicalement différents (sources réelles : OpenAI, Anthropic, Linear, Stripe, etc.). Aujourd'hui l'installable les liste en `Source Direction Matrix` mais ne les décrit jamais. Pour chaque archétype, le brut donne :
- Une palette hex complète.
- Un radius signature (ex: 0px MAKR vs 5px Vitra).
- Un section-gap signature (ex: 173px Vitra, 90px MAKR, 200px Greenspace).
- Une typographie précise (font + weights + sizes + line-height + letter-spacing).
- Un comportement motion spécifique.

→ **Action** : remonter ces 5 archétypes avec un mini-token-pack par archétype.

### 7.2 Les couples typographiques précis
Le brut contient des specs exactes :
- BMW : `BMWTypeNextLatin Light, 60px, weight 300, letter-spacing 0.007px`.
- Standards : `letter-spacing -0.0100em` partout.
- Artem Militonian : `letter-spacing -0.0880em at 157px`.
- Christopherdoyle : `century-old-style-std 50px à -0.094em`.

L'installable se contente de "Editorial serif or high-quality grotesk". À remplacer par specs exactes.

### 7.3 Les box-shadows / gradients / max-widths exactes
Le brut donne par ex. pour Clean SaaS :
```css
box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
            rgba(0, 0, 0, 0.1) 0px 8px 10px -6px;
```
Ces signatures visuelles ne sont jamais remontées. À tokeniser.

### 7.4 Les formules signatures philosophiques
Le brut contient des formules excellentes :
- `"Glow replaces Shadow"` (cyber-neon)
- `"Editorial Minimal Is Not Always Pure White"` (editorial-minimal — avec 5 canvas types nommés)
- `"The page can be loud, but the system cannot be random"` (experimental-type)
- `"Type IS the layout"` (editorial-type)
- `"Minimalism Is Not Emptiness"` (minimal-design)
- `"Playful Is Not Random"` (playful-design)
- `"The gradient is light. The interface is still the object."` (soft-gradients)
- `"Bright color must be either: action / active / semantic / brand marker / section surface / category / atmosphere — sinon retire-la"` (vibrant-accents)

À remonter en Identity Rule (§3 structure cible).

### 7.5 Les listes "Carry Forward / Avoid" par source
Le brut a souvent une table par source qui dit "What to keep / What to drop". Beaucoup plus utile que les 8 component blueprints stubs. À remonter en condensé dans la section ABSOLUTE BANS et Archetypes.

---

## 8. Risques de chevauchement à résoudre explicitement

3 paires de skills sont aujourd'hui dangereusement proches. Chaque skill concerné DOIT avoir sa section Differentiation refondue :

### 8.1 `cyber-neon` ↔ `dark-ui`
| Critère | `cyber-neon` | `dark-ui` |
|---|---|---|
| Background | `#000000` strict (Pure Black Mandate) | Charcoal/navy (`#0b0b0b`, `#060419`) |
| Accents | 1 neon primary + glow obligatoire | 1-2 brand accents, glow optionnel |
| Gradient hero | Banni | Autorisé (Indigo Fusion, Nebula Horizon) |
| Shadow | Banni (Glow replaces Shadow) | Autorisé pour testimonials/app-preview |
| Typography | Massive display + tiny UI dichotomie | Polished sans, gradient calm |

### 8.2 `clean-saas` ↔ `light-ui` ↔ `minimal-design`
| Critère | `clean-saas` | `light-ui` | `minimal-design` |
|---|---|---|---|
| First viewport | Product evidence (dashboard frame) | SaaS canvas + vivid focus state | Single typographic move + silence |
| Palette | 2 whites (Snow + Paper) + violet/blue accent | White chrome + bold focus accent (purple/lime) | Warm cream/ivory + ink + 1 line color |
| Radius | 8/12/16 hierarchy | Varied (control 6/8, card 12/16) | Strict 0-4px or 999px |
| Motion | Tab transition, command palette open | Focus pulse, table row flash | Minimal opacity + border-color only |
| Decoration | Minimal, product-led | Soft glow allowed | None |

### 8.3 `technical-sans` ↔ `technical-ui`
| Critère | `technical-sans` | `technical-ui` |
|---|---|---|
| Use case | Marketing/landing pour produit technique | In-product surface (app, dashboard) |
| First viewport | Hero marketing avec product proof | App shell direct (sidebar + canvas) |
| Density | Aérée, marketing | Dense, opérationnelle |
| Typography | Variable weights pour hierarchy | Tabular-nums, mono for data |
| Components | Hero, code-window, metric-card, CTA | Workstation grid, dense table, command palette, log stream |

---

## 9. Guide de réécriture : 1 exemple complet

Pour cadrer la refonte, voici le **before/after** sur un extrait de `monochrome-ui`.

### AVANT (extrait actuel, ~200 lignes pour 1 composant)

```markdown
### monochrome-table
- Reusable style-specific module that carries identity and function.
- Start with real content: title, meaningful body copy or data; never lorem ipsum.
- Visual state must be more than opacity: include color, border, motion difference.
- At mobile widths, preserve the style motif while collapsing to a single column.
- Avoid generic SaaS card patterns; this component must feel monochrome-ui.
- Structure: ...
- States: ...
- Responsive: ...
- Motion: ...
- Avoid: ...
```

### APRÈS (cible, ~25 lignes)

```markdown
### monochrome-table
Dense achromatic data table. No accent color, no zebra-striping by color.

```jsx
<table className="w-full text-sm tabular-nums">
  <thead className="sticky top-0 bg-[var(--gray-0)] border-b border-[var(--gray-200)]">
    <tr>
      <th className="text-left px-4 py-3 text-[11px] uppercase tracking-[0.08em] text-[var(--gray-600)]">Name</th>
      <th className="text-right px-4 py-3 text-[11px] uppercase tracking-[0.08em] text-[var(--gray-600)]">Value</th>
    </tr>
  </thead>
  <tbody>
    {rows.map((r) => (
      <tr key={r.id}
          data-selected={selected === r.id}
          className="border-b border-[var(--gray-100)]
                     hover:bg-[var(--gray-50)]
                     data-[selected=true]:bg-[var(--gray-900)]
                     data-[selected=true]:text-[var(--gray-0)]
                     transition-colors duration-[120ms] ease-out">
        <td className="px-4 py-3">{r.name}</td>
        <td className="px-4 py-3 text-right">{r.value}</td>
      </tr>
    ))}
  </tbody>
</table>
```

- **Selected state = full inversion** (no accent color).
- **Hover = subtle gray-50** (no shadow, no transform).
- **Mobile** : conserve la table, ne dégrade PAS en cards (perd la densité).
```

→ De 200 lignes vagues à 25 lignes copiables. Identité monochrome préservée. Anti-patterns visibles.

---

## 10. Livrables attendus

À la fin de la refonte :

1. **23 SKILL.md refondus** dans `.agents/skills/<skill>/SKILL.md` (8-12k caractères chacun).
2. **1 fichier `_shared-protocol.md`** créé (référence partagée).
3. **23 SKILL.md mirror** régénérés dans `publish/refero-design-skills/.agents/skills/<skill>/SKILL.md`.
4. **1 fichier `CHANGELOG.md`** récapitulant pour chaque skill : caractères avant/après, sections supprimées, patterns remontés du brut.
5. **Tests croisés** : pour chaque paire de skills voisins (cyber-neon/dark-ui, clean-saas/light-ui/minimal-design, technical-sans/technical-ui), générer 1 page avec chacun et vérifier que les outputs sont visiblement différents.

**Métriques de succès** :
- Taille moyenne installable : passer de ~32k à ~10k caractères (−70%).
- Score qualitatif (vs baseline gpt-taste/high-end-visual-design/industrial-brutalist-ui) : passer de 4.3/10 à 7-8/10.
- Aucun stub `"Reusable style-specific module..."` restant.
- Aucun `--source-color-N` anonyme restant.
- Aucune table de fréquences brutes restante.
- Aucun bug hex / parsing restant.

---

## 11. Notes finales pour l'agent exécutant

- **Ne pas hésiter à supprimer massivement**. Le pack souffre de gras, pas de manque. La meilleure refonte est une suppression bien ciblée + une remontée chirurgicale de matière brute.
- **Chaque ligne du SKILL.md doit être actionnable**. Si une ligne pourrait s'appliquer à n'importe quel autre skill du pack, elle est candidate à la suppression.
- **Préférer la concision tranchée à la prose explicative**. Les références utilisent `BANNED:`, `MUST:`, `NEVER:` directement.
- **Les bruts sont la source de vérité visuelle**. Les installables sont la source de vérité opérationnelle. Faire le pont : extraire du brut, condenser dans l'installable.
- **Toujours valider contre la checklist §6** avant de passer au skill suivant.
