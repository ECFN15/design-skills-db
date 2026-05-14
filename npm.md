# NPM Commands

## Reinstaller les skills Refero dans un projet

Depuis la racine du projet ou tu veux installer/mettre a jour les skills:

```powershell
npx skills add c:/Users/matth/Desktop/design-skills-db/publish/refero-design-skills
```

Cette commande reinstalle le pack complet des 23 skills depuis la version locale publiee dans:

```text
c:/Users/matth/Desktop/design-skills-db/publish/refero-design-skills
```

## Installer un seul skill

Exemple avec `clean-saas`:

```powershell
npx skills add c:/Users/matth/Desktop/design-skills-db/publish/refero-design-skills --skill clean-saas
```

## Verifier la liste disponible

Depuis `C:/Users/matth/Desktop/design-skills-db`:

```powershell
npx skills add .\publish\refero-design-skills --list
```

## Variante si le pack est publie sur GitHub

```powershell
npx skills add <owner>/<repo>
```
