import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const localInstallCommand =
  "npx skills add ~/Desktop/design-skills-db/publish/refero-design-skills";

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
    <div className="command-wrap" aria-label="Commande locale d'installation">
      <span className="prompt">$</span>
      <code>{localInstallCommand}</code>
      <button className="copy-button" type="button" onClick={copyCommand}>
        <span>{copied ? "COPIE" : "COPIER"}</span>
        <CopyIcon />
      </button>
    </div>
  );
}

function BrowserPreview() {
  return (
    <div className="browser-preview" aria-label="Apercu de page generee par un skill design">
      <div className="mini-nav">
        <span>Refero</span>
        <span>Styles</span>
        <span>Docs</span>
        <strong>Installer</strong>
      </div>
      <div className="preview-body">
        <span className="tiny-label">Generated interface</span>
        <h2>Less slop, sharper systems.</h2>
        <p>Skills locaux pour imposer une direction visuelle claire aux agents.</p>
        <div className="preview-actions">
          <span />
          <span />
        </div>
      </div>
      <div className="floating-shot shot-a" />
      <div className="floating-shot shot-b" />
    </div>
  );
}

function CodePanel() {
  return (
    <div className="code-panel" aria-label="Extrait de configuration">
      <div className="window-dots">
        <span />
        <span />
        <span />
      </div>
      <p>SKILL.md</p>
      <pre>{`name: high-end-design
description: Design system premium

rules:
  - strong typography
  - precise spacing
  - reusable visual taste`}</pre>
    </div>
  );
}

function StyleCard() {
  return (
    <div className="style-card" aria-label="Carte de style applique">
      <div>
        <Mark />
        <span>Refero Skills</span>
      </div>
      <h3>Local pack, instant taste.</h3>
      <p>23 directions visuelles pretes a installer dans vos projets.</p>
      <small>Install local</small>
    </div>
  );
}

function App() {
  return (
    <main className="site-shell">
      <header className="topbar" aria-label="Navigation principale">
        <a className="brand-pill" href="#top" aria-label="Refero Design Skills">
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
          <h1>Goût et compétence pour agents d'IA</h1>
          <p className="lead">Le framework frontal anti-slop pour générer des interfaces qui tiennent debout.</p>
          <p className="accent">- Moins de négligence, des designs qui ressortent</p>
          <p className="body-copy">
            Un pack local de skills open source pour Cursor, Claude Code, Codex, Gemini CLI,
            v0, Lovable et vos prochains projets.
          </p>
          <CommandBar />
          <div className="hero-actions">
            <a className="primary-action" href="#local">
              <span>Installer en local</span>
              <ArrowIcon />
            </a>
            <span className="version-dot">Local · v0.1</span>
          </div>
        </div>

        <div className="hero-art" aria-hidden="true">
          <BrowserPreview />
          <CodePanel />
          <StyleCard />
        </div>
      </section>

      <section className="below-fold" id="local">
        <div>
          <span>Chemin local utilise</span>
          <strong>C:/Users/matth/Desktop/design-skills-db/publish/refero-design-skills</strong>
        </div>
        <p>
          Lance la commande depuis la racine d'un projet: elle installe le pack local maintenant,
          et la ligne pourra basculer plus tard vers une source GitHub publique.
        </p>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
