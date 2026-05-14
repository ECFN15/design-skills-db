import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const root = process.cwd();
const skillsRoot = path.join(root, ".agents", "skills");
const generatorPath = path.join(root, "tools", "prepare_top_tier_agents_skills.mjs");
const outputFileName = "design-use-cases.md";

function loadProfiles() {
  const source = fs.readFileSync(generatorPath, "utf8");
  const start = source.indexOf("const profiles = ");
  const end = source.indexOf(";\n\nfunction parseFrontmatter", start);
  if (start === -1 || end === -1) {
    throw new Error("Could not locate profiles object in prepare_top_tier_agents_skills.mjs");
  }
  const expr = source.slice(start + "const profiles = ".length, end);
  return vm.runInNewContext(`(${expr})`, {});
}

const designSummaries = {
  "clean-saas": "Design SaaS propre, opérationnel et crédible. Il transforme une page ou une interface en surface de travail lisible: preuve produit visible, hiérarchie calme, actions nettes, données compréhensibles et confiance enterprise sans surcharge marketing.",
  "cyber-neon": "Design nocturne, électrique et futuriste. Il crée une identité lumineuse avec néons contrôlés, panneaux sombres, signalétique active et atmosphère techno, tout en gardant les textes et contrôles réellement utilisables.",
  "dark-ui": "Design sombre premium et immersif. Il sert aux produits où la concentration, les surfaces profondes, les commandes et les données doivent primer sans tomber dans le noir uniforme ou le gris illisible.",
  "editorial-minimal": "Design éditorial minimal, calme et écrit. Il s'appuie sur la typographie, les marges, les images choisies et le rythme de lecture pour donner une impression d'auteur plutôt qu'une simple page vide.",
  "editorial-type": "Design typographique éditorial. La mise en page vient de l'échelle de type, des colonnes, des index, des légendes et des contrastes typographiques, avec une logique de magazine ou d'archive.",
  "experimental-type": "Design typographique expérimental. Il utilise les lettres comme matière visuelle principale: compositions audacieuses, blocs typographiques, contrastes industriels, systèmes chromatiques et pages type specimen.",
  "expressive-brand": "Design de marque expressif. Il construit une identité reconnaissable avec voix, motif, couleur, composants, preuves produit et moments de marque répétés, au lieu d'une simple peau graphique.",
  "geometric-modern": "Design moderne géométrique. Il donne de la personnalité avec grille, formes répétées, angles, modules, alignements et rythme spatial, en gardant une logique claire et structurée.",
  "glossy-modern": "Design moderne brillant et dimensionnel. Il crée des surfaces polies, des reflets, du verre, du volume et une sensation premium sans perdre les états, les contrôles et la lisibilité.",
  "high-contrast": "Design à fort contraste, direct et autoritaire. Il utilise la tension noir/blanc, les règles, l'échelle typographique et un accent discipliné pour produire un impact immédiat.",
  "high-end-design": "Design haut de gamme, sobre et premium. Il privilégie la matière, l'image, la typographie raffinée, les espacements luxueux et la conversion calme plutôt que les effets visibles.",
  "light-ui": "Design d'interface claire et moderne. Il produit des surfaces blanches précises, des panneaux lisibles, une hiérarchie douce et des contrôles accessibles pour des apps ou SaaS lumineux.",
  "minimal-design": "Design minimal essentiel et précis. Il retire le bruit sans retirer l'utilité: peu de couleurs, beaucoup de structure, typographie nette, espaces assumés et actions évidentes.",
  "monochrome-ui": "Design monochrome fondé sur noir, blanc et gris. Il remplace la couleur décorative par inversion, bordures, densité, typographie, états et contrastes disciplinés.",
  "motion": "Design où le mouvement fait partie de l'architecture. Il sert aux expériences cinétiques, scroll narratives, héros 3D, transitions séquencées et interfaces où l'animation explique l'information.",
  "pastel": "Design pastel doux, chaleureux et lisible. Il crée des expériences accueillantes avec surfaces teintées, contrastes near-black, composants souples et motion calme sans devenir fade.",
  "playful-design": "Design ludique mais mature. Il introduit couleurs gouvernées, surfaces tactiles, récompenses, personnages ou stickers, progression et micro-interactions sans sacrifier l'ergonomie.",
  "serif-display": "Design serif display, éditorial et élégant. Il utilise les grandes fontes serif, la composition, les images et un rythme premium pour des marques culturelles, luxe ou portfolios.",
  "soft-gradients": "Design aux gradients doux, lumineux et ambiants. Il construit une atmosphère moderne avec fonds lissés, halos contenus, surfaces calmes et accent utile plutôt qu'un simple décor flou.",
  "technical-sans": "Design technique, rationnel et précis. Il emploie une typographie sans nette, des grilles, des schémas, du code, des specs et des composants clairs pour produits dev ou infra.",
  "technical-ui": "Design d'interface technique dense. Il sert aux consoles, dashboards, workstations et outils IA où contrôles, états, logs, métriques et workflows doivent être lisibles rapidement.",
  "utilitarian": "Design utilitaire et fonctionnel. Il optimise vitesse, densité, saisie, contrôle, répétition et fiabilité, avec très peu de décoration et une priorité absolue à la tâche.",
  "vibrant-accents": "Design à accents vibrants gouvernés. Il garde une base neutre et applique des couleurs fortes à l'action, la catégorie, le focus, le progrès ou l'identité sans chaos arc-en-ciel."
};

const siteOutcomes = {
  "clean-saas": ["Landing page B2B avec preuve produit", "Page produit SaaS", "Dashboard opérationnel", "Onboarding et activation", "Pricing enterprise", "Page intégrations", "Surface de confiance sécurité/compliance"],
  "cyber-neon": ["Launch futuriste", "Site gaming ou nightlife", "Page AI lab", "Interface terminal lumineuse", "Éditorial cyberpunk", "Carte ou console holographique"],
  "dark-ui": ["Dashboard sombre", "Command center", "Console développeur", "Workspace IA", "Monitoring produit", "Application premium en mode focus"],
  "editorial-minimal": ["Portfolio calme", "Site culturel", "Page de recherche ou manifeste", "Landing page écrite", "Archive légère", "Marque éditoriale premium"],
  "editorial-type": ["Magazine digital", "Archive éditoriale", "Essai long format", "Commerce éditorial", "Portfolio typographique", "Campagne culturelle"],
  "experimental-type": ["Specimen typographique", "Poster web", "Portfolio studio créatif", "Campagne culturelle radicale", "Microsite événementiel", "Playground de typographie variable"],
  "expressive-brand": ["Launch de marque", "SaaS expressif", "Page consumer product", "Campagne produit", "Portfolio agence", "Système identité + preuve produit"],
  "geometric-modern": ["Portfolio architecture/design", "Site de studio", "SaaS modulaire", "Page produit structurée", "Editorial géométrique", "Commerce shape-led"],
  "glossy-modern": ["SaaS premium", "Page produit glassy", "Outil visuel", "Launch tech poli", "Dashboard lumineux dimensionnel", "Expérience interactive de marque"],
  "high-contrast": ["Launch poster-like", "Site monochrome impactant", "Console technique contrastée", "Page mode/culture", "Portfolio direct", "Commerce noir/blanc"],
  "high-end-design": ["Luxury product page", "Commerce premium", "Portfolio haut de gamme", "Site architecture/interior", "Galerie ou maison créative", "Service concierge"],
  "light-ui": ["Application claire", "Dashboard SaaS", "Documentation produit", "Productivity tool", "Onboarding", "Settings ou admin surface"],
  "minimal-design": ["Landing simple et raffinée", "Portfolio minimal", "Index ou archive calme", "Outil léger", "Pricing sobre", "Page produit essentielle"],
  "monochrome-ui": ["Dashboard gris/noir/blanc", "Brand site monochrome", "Console technique", "Archive éditoriale", "Documentation réduite", "Interface sans chroma"],
  "motion": ["Scroll narrative", "Launch animé", "Démo produit cinématique", "Hero 3D ou shader", "Kinetic typography", "Story interactive"],
  "pastel": ["Wellness landing", "SaaS amical", "DTC food/beverage", "Marketplace douce", "Community ou creator platform", "Onboarding chaleureux"],
  "playful-design": ["Learning app", "Consumer app", "SaaS gamifié", "Commerce joyeux", "Produit famille/wellness", "Onboarding avec récompense"],
  "serif-display": ["Site luxe éditorial", "Portfolio élégant", "Marque culturelle", "Commerce premium", "Galerie", "Page littéraire ou magazine"],
  "soft-gradients": ["Landing IA calme", "Produit wellness/fintech doux", "SaaS atmosphérique", "Page modern premium", "Dashboard avec fonds lumineux", "Hero ambient"],
  "technical-sans": ["Developer tool", "Page API/docs", "Infra SaaS", "Produit IA technique", "Architecture diagram page", "Dashboard specs/metrics"],
  "technical-ui": ["Workstation SaaS", "Monitoring console", "AI control surface", "Log/trace viewer", "Data operations dashboard", "Outil d'ingénierie"],
  "utilitarian": ["Admin interne", "CRUD dense", "Data entry", "Audit log", "Settings console", "Dashboard opérationnel répétitif"],
  "vibrant-accents": ["Fintech/SaaS coloré", "Marketplace par catégories", "Launch IA", "Portfolio dynamique", "Campagne produit", "Enterprise product avec accents"]
};

const goodRequests = {
  "clean-saas": ["Polir une page SaaS pour qu'elle montre le produit et ses preuves dès le premier écran.", "Transformer une vitrine B2B générique en expérience claire, crédible et opérationnelle."],
  "cyber-neon": ["Créer une launch page cyberpunk lisible avec néons, dark panels et signaux actifs.", "Donner à un produit IA ou gaming une présence nocturne sans perdre les états d'interface."],
  "dark-ui": ["Transformer un dashboard sombre en interface premium avec une vraie hiérarchie de surfaces.", "Créer une console IA/developer où les panels, logs et actions restent très lisibles."],
  "editorial-minimal": ["Polir un portfolio ou une page culturelle avec une composition typographique calme.", "Transformer une page écrite en expérience éditoriale raffinée et respirante."],
  "editorial-type": ["Créer une page magazine typographique avec index, colonnes, citations et hiérarchie forte.", "Donner une patte éditoriale à une archive, un portfolio ou un commerce culturel."],
  "experimental-type": ["Créer une direction visuelle typographique radicale pour un studio, événement ou campagne.", "Transformer une page neutre en composition type-first mémorable et contrôlée."],
  "expressive-brand": ["Construire une identité web complète avec motif, voix, composants et preuves produit.", "Rendre une page de marque reconnaissable sans perdre le parcours utilisateur."],
  "geometric-modern": ["Créer une identité moderne structurée par grille, formes et modules répétés.", "Transformer une page portfolio/SaaS en système géométrique clair et mémorable."],
  "glossy-modern": ["Polir une interface ou landing avec surfaces glassy, reflets et profondeur premium.", "Créer un produit tech lumineux et dimensionnel sans perdre les états UI."],
  "high-contrast": ["Créer une page à impact immédiat avec tension noir/blanc et accent très discipliné.", "Renforcer la lisibilité et l'autorité visuelle d'une page trop molle."],
  "high-end-design": ["Transformer un site premium en expérience luxueuse, posée et photographique.", "Polir un commerce/portfolio haut de gamme avec typographie, matière et rythme."],
  "light-ui": ["Créer une interface claire, propre et facile à utiliser pour un produit quotidien.", "Polir un dashboard ou outil SaaS lumineux avec panels, états et hiérarchie douce."],
  "minimal-design": ["Réduire une interface au nécessaire sans la rendre vide ou confuse.", "Créer une page simple, précise et raffinée avec une vraie structure."],
  "monochrome-ui": ["Créer une interface noir/blanc/gris où les états restent distincts sans couleur.", "Transformer une page monochrome en système complet de contraste, inversion et bordures."],
  "motion": ["Créer une page où le scroll, les transitions et la séquence expliquent le produit.", "Ajouter une couche motion utile à une expérience 3D, narrative ou cinétique."],
  "pastel": ["Créer une page douce et accueillante qui reste contrastée et professionnelle.", "Polir un SaaS/wellness/DTC avec surfaces pastel, CTA clairs et composants souples."],
  "playful-design": ["Créer une interface ludique avec progression, récompenses et composants tactiles.", "Rendre un produit consumer/famille/learning plus joyeux sans le rendre enfantin."],
  "serif-display": ["Créer une page premium où la serif display porte l'identité dès le premier écran.", "Transformer un portfolio, commerce ou site culturel en expérience éditoriale élégante."],
  "soft-gradients": ["Créer une ambiance lumineuse et calme avec gradients contenus et surfaces lisibles.", "Polir une page IA/wellness/SaaS avec halos doux et hiérarchie moderne."],
  "technical-sans": ["Créer une page produit développeur claire avec specs, code, diagrammes et preuves.", "Donner à un outil technique une identité nette, précise et engineered."],
  "technical-ui": ["Créer une console dense où métriques, logs, filtres et états sont immédiatement scannables.", "Polir une workstation IA/SaaS pour usage répété et haute confiance."],
  "utilitarian": ["Optimiser une interface admin pour rapidité, densité, saisie et contrôle.", "Transformer un outil interne en surface fiable, claire et sans décoration inutile."],
  "vibrant-accents": ["Créer une page SaaS/fintech avec couleur forte mais gouvernée par des rôles.", "Transformer une interface neutre en système d'accents lisible et distinctif."]
};

function bulletList(items) {
  return items.map((item) => `- ${item}`).join("\n");
}

function compactList(items) {
  return items.map((item) => `- ${item}`).join("\n");
}

function ascii(value) {
  return value
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/œ/g, "oe")
    .replace(/Œ/g, "OE")
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .replace(/[–—]/g, "-")
    .replace(/…/g, "...");
}

function render(slug, profile) {
  const siteList = siteOutcomes[slug] ?? profile.use.split(",").map((item) => item.trim());
  const requests = goodRequests[slug] ?? [
    `Appliquer la patte ${profile.display} a une page visuelle complete.`,
    `Polir une interface pour qu'elle exprime ${profile.mood}.`
  ];
  const signatureList = profile.signatures?.slice(0, 5) ?? [];
  const archetypes = profile.archetypes?.map(([name, structure, use]) => `${name}: ${structure}. ${use}.`) ?? [];
  const components = profile.components?.slice(0, 10) ?? [];
  const avoid = profile.bans?.slice(0, 5) ?? [];

  return ascii(`# ${profile.display} - Types De Design Et Sites

Ce fichier resume, en version ecrite, ce que ce skill doit permettre de produire. Il ne remplace pas \`SKILL.md\`: il sert de reference rapide pour comprendre la patte graphique, les types de sites naturels, et les demandes ou ce skill a une vraie utilite.

## Type De Design

${designSummaries[slug] ?? `Design ${profile.display} pour des experiences ${profile.mood}.`}

Mots clefs de sensation: ${profile.mood}.

## Sites Et Interfaces Qui En Decoulent

${bulletList(siteList)}

## Signatures Visuelles Attendues

${compactList(signatureList)}

## Archetypes Naturels

${compactList(archetypes)}

## Composants Qui Portent La Patte

${compactList(components)}

## Bonnes Demandes Pour Ce Skill

${bulletList(requests)}

## Ce Que Le Skill Doit Ameliorer

- Remplacer les choix visuels generiques par une intention specifique au style.
- Forcer des tokens coherents pour couleur, type, espacement, radius, ombre et etats.
- Donner une structure de page ou d'interface qui correspond vraiment au domaine.
- Rendre la patte visible dans le premier viewport, puis la repeter dans les composants.
- Garder les controles, textes, etats et breakpoints utilisables.

## A Eviter

${bulletList(avoid)}

## Test De Qualite

Une generation reussie avec ce skill doit encore etre reconnaissable si on retire le nom du skill. Si la page pourrait etre decrite comme "jolie mais generique", le skill n'a pas assez pilote les decisions de design.
`);
}

const profiles = loadProfiles();
const written = [];

for (const [slug, profile] of Object.entries(profiles)) {
  const referencesDir = path.join(skillsRoot, slug, "references");
  if (!fs.existsSync(referencesDir)) continue;
  const outputPath = path.join(referencesDir, outputFileName);
  fs.writeFileSync(outputPath, render(slug, profile), "utf8");
  written.push(path.relative(root, outputPath));
}

console.log(JSON.stringify({ outputFileName, count: written.length, written }, null, 2));
