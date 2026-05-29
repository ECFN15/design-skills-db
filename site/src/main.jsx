import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const localInstallCommand =
  "npx skills add C:/Users/matth/Desktop/design-skills-db/publish/refero-design-skills";

const allSkillModules = [
  ["technical-sans", "Developer tooling", "Interfaces precises pour docs, CLI, agents IA et produits techniques."],
  ["high-end-design", "Premium product", "Rythme editorial, surfaces premium et conversion plus calme."],
  ["clean-saas", "SaaS clarity", "Ecrans lisibles, hierarchie nette et composants faciles a scanner."],
  ["editorial-type", "Type direction", "Titres plus affirmes et compositions pilotees par la typographie."],
  ["motion", "Interaction layer", "Transitions utiles, reveal mesure et rythme sans surcharge."],
  ["dark-ui", "Dark systems", "Produits sombres, contrastes serieux et panneaux denses."],
  ["serif-display", "Editorial polish", "Moments plus luxueux pour pages de marque et sections hero."],
  ["technical-ui", "Operational UI", "Dashboards, tables, etats et controles orientes production."],
  ["cyber-neon", "High signal", "Accents lumineux et interfaces sombres pour produits plus expressifs."],
  ["editorial-minimal", "Calm pages", "Compositions aeriennes, contenu lisible et rythme plus propre."],
  ["experimental-type", "Type systems", "Directions typographiques fortes quand la page doit se differencier."],
  ["expressive-brand", "Brand layer", "Identites visuelles plus marquees pour landing pages et produits."],
  ["geometric-modern", "Precise layouts", "Grilles nettes, formes simples et composition architecturee."],
  ["glossy-modern", "Polished SaaS", "Surfaces modernes, details produit et rendu plus premium."],
  ["high-contrast", "Bold systems", "Hierarchie tres lisible, contrastes francs et sections memorables."],
  ["light-ui", "Clean product", "Interfaces claires pour outils SaaS, docs et experiences produit."],
  ["minimal-design", "Sharp restraint", "Moins d'elements, plus de precision dans l'espace et le texte."],
  ["monochrome-ui", "Neutral systems", "Interfaces sobres, palettes controlees et composants tres lisibles."],
  ["pastel", "Soft product", "Tons plus doux pour produits accessibles et pages plus legeres."],
  ["playful-design", "Friendly flows", "Energie visuelle, micro-interactions et tonalite plus humaine."],
  ["soft-gradients", "Ambient UI", "Transitions de couleur controlees pour pages SaaS plus fluides."],
  ["utilitarian", "Work surfaces", "Ecrans pratiques, denses et orientes usage repete."],
  ["vibrant-accents", "Action color", "Accentuation claire des CTA, etats et points de decision."],
].map(([name, role, description]) => ({ name, role, description }));

const featuredSkills = [
  { name: "technical-sans", scope: "dev tools" },
  { name: "clean-saas", scope: "product UI" },
  { name: "high-end-design", scope: "premium pages" },
  { name: "technical-ui", scope: "dashboards" },
];

function shuffleSkills(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function CopyIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
      <path d="M8 8.5h8.5v10H8z" />
      <path d="M5.5 15.5H4.25A1.25 1.25 0 0 1 3 14.25v-10A1.25 1.25 0 0 1 4.25 3h8.5A1.25 1.25 0 0 1 14 4.25V5.5" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
      <path d="M5 12h13" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function Mark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <span />
    </span>
  );
}

function CommandBar() {
  const [copied, setCopied] = useState(false);

  async function copyCommand() {
    try {
      await navigator.clipboard.writeText(localInstallCommand);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="command-module" aria-label="Commande locale d'installation">
      <div className="command-meta">
        <span>local install</span>
        <span>powershell ready</span>
      </div>
      <div className="command-line">
        <span className="prompt">$</span>
        <code>{localInstallCommand}</code>
        <button className="copy-button" type="button" onClick={copyCommand}>
          <span>{copied ? "COPIE" : "COPIER"}</span>
          <CopyIcon />
        </button>
      </div>
    </div>
  );
}

function InstallerModule() {
  return (
    <section className="module-panel installer-module" aria-label="Module d'installation locale">
      <div className="module-topline">
        <span>local installer</span>
        <strong>ready</strong>
      </div>
      <div className="terminal-card">
        <div className="terminal-dots">
          <span />
          <span />
          <span />
        </div>
        <pre>{`> skills add ./publish/refero-design-skills
source   local pack
target   current project
mode     no remote fetch

OK manifest checked
OK 23 skills available
OK command copied locally`}</pre>
      </div>
      <div className="route-list">
        <p>
          <span>path</span>
          <strong>C:/Users/matth/Desktop/design-skills-db/publish</strong>
        </p>
        <p>
          <span>later</span>
          <strong>github-ready npx route</strong>
        </p>
      </div>
    </section>
  );
}

function SkillCoverageModule() {
  return (
    <section className="module-panel coverage-module" aria-label="Module de couverture des skills">
      <div className="module-topline">
        <span>skill coverage</span>
        <strong>23 systems</strong>
      </div>
      <div className="coverage-score">
        <span>selected for this page</span>
        <strong>technical-sans</strong>
      </div>
      <div className="coverage-list">
        {featuredSkills.map((skill) => (
          <p key={skill.name}>
            <span>{skill.name}</span>
            <strong>{skill.scope}</strong>
          </p>
        ))}
      </div>
      <div className="compatibility-row">
        <span>Cursor</span>
        <span>Codex</span>
        <span>Claude Code</span>
        <span>Gemini CLI</span>
      </div>
    </section>
  );
}

function SystemBoard() {
  return (
    <div className="system-board" aria-label="Modules techniques du pack local">
      <div className="board-header">
        <span>refero local pack</span>
        <strong>installable now</strong>
      </div>
      <div className="board-grid">
        <InstallerModule />
        <SkillCoverageModule />
      </div>
    </div>
  );
}

function ProofStrip() {
  return (
    <section className="proof-strip" id="local" aria-label="Installation locale">
      <div>
        <span className="eyebrow">install path</span>
        <strong>C:/Users/matth/Desktop/design-skills-db/publish/refero-design-skills</strong>
      </div>
      <p>
        La page reste branchee sur ton pack local maintenant. Plus tard, la meme surface peut
        basculer vers une commande GitHub publique sans changer le parcours.
      </p>
    </section>
  );
}

function SkillModules() {
  const [modules, setModules] = useState(() => shuffleSkills(allSkillModules).slice(0, 6));

  useEffect(() => {
    const rotation = window.setInterval(() => {
      setModules(shuffleSkills(allSkillModules).slice(0, 6));
    }, 2600);

    return () => window.clearInterval(rotation);
  }, []);

  return (
    <section className="skill-modules" id="styles" aria-label="Modules de skills mis en avant">
      <div className="modules-heading">
        <span>23 skill systems</span>
        <h2>Les styles disponibles remontent en continu.</h2>
        <p>La rotation expose progressivement le pack complet sans recharger la page.</p>
      </div>
      <div className="module-list" aria-live="polite">
        {modules.map((module, index) => (
          <article
            className="skill-module"
            key={`${module.name}-${index}`}
            style={{ animationDelay: `${index * 70}ms` }}
          >
            <span className="module-index">{String(index + 1).padStart(2, "0")}</span>
            <div>
              <h3>{module.name}</h3>
              <p>{module.description}</p>
            </div>
            <strong>{module.role}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}

function App() {
  return (
    <main className="site-shell">
      <header className="topbar" aria-label="Navigation principale">
        <a className="brand-chip" href="#top" aria-label="Refero Design Skills">
          <Mark />
          <span>Refero Design Skills</span>
        </a>
        <nav>
          <a href="#docs">Docs</a>
          <a href="#styles">Styles</a>
          <a href="#local">Local</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="release-row" aria-label="Statut du pack">
            <span>local beta</span>
            <span>23 skills</span>
            <span>no remote fetch</span>
          </div>
          <h1>Skills to the next level</h1>
          <p className="lead">
            Un pack local de skills design pour donner aux agents IA une direction visuelle
            claire, precise et reutilisable.
          </p>
          <CommandBar />
          <div className="hero-actions">
            <a className="primary-action" href="#local">
              <span>Voir le chemin local</span>
              <ArrowIcon />
            </a>
            <span className="version-dot">Local - v0.1</span>
          </div>
        </div>

        <div className="hero-art">
          <SystemBoard />
        </div>
      </section>

      <ProofStrip />
      <SkillModules />
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
