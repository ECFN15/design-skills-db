# Refero Design Skills

Installable visual-design skill pack generated from Refero style references.

## Install

After this folder is published as a GitHub repository:

```powershell
npx skills add <owner>/<repo>
```

Install one specific skill:

```powershell
npx skills add <owner>/<repo> --skill high-end-design
```

Test locally from the parent workspace:

```powershell
npx skills add .\publish\refero-design-skills --list
```

## Skills

- `clean-saas`
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

## Structure

Each skill follows the universal Agent Skills layout:

```
.agents/skills/<skill-name>/SKILL.md
.agents/skills/<skill-name>/references/refero-style-database.md
.agents/skills/<skill-name>/references/sources/*.md
```

The main `SKILL.md` is intentionally concise and directive. The large Refero-derived database is loaded only when needed through `references/`.
