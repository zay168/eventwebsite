# eventwebsite ![Version](https://img.shields.io/badge/version-0.0.0-blue) ![License](https://img.shields.io/badge/license-MIT-green)

**Site d\'événements construit avec React et Vite, démontrant un curseur personnalisable.**

## Table des matières
- [Installation](#installation)
- [Usage](#usage)
- [Fonctionnalités clés](#fonctionnalités-clés)
- [Configuration](#configuration)
- [Exemples](#exemples)
- [Tests](#tests)
- [Contribution](#contribution)
- [Support & Contact](#support--contact)
- [Licence](#licence)
- [Badges complémentaires](#badges-complémentaires)
- [Historique des versions](#historique-des-versions)

## Installation 🛠️

```bash
cd portfolio
npm install --legacy-peer-deps
```

## Usage 🚀

```bash
npm run dev
```

Ou intégrez le curseur dans votre application :

```jsx
import TargetCursor from './components/custom/TargetCursor';

function App() {
  return (
    <div>
      <TargetCursor spinDuration={2} hideDefaultCursor={true} />
    </div>
  );
}
```

## Fonctionnalités clés ✨

- Environnement React + Vite avec HMR
- Curseur animé personnalisable basé sur GSAP
- Thème clair/sombre via Tailwind CSS
- Composants UI (bouton, carte)
- Configurations ESLint et alias TypeScript

## Configuration ⚙️

Variables d\'environnement possibles :

| Variable | Description |
|----------|-------------|
| `NODE_ENV` | Mode d\'exécution (`development` ou `production`) |

## Exemples 📸

![Aperçu](portfolio/public/vite.svg)

## Tests ✅

```bash
npm run lint
npm run build
```

## Contribution 🤝

Les contributions sont les bienvenues ! Ouvrez une *issue* ou une *pull request* après avoir lu le [`CODE_OF_CONDUCT`](CODE_OF_CONDUCT.md) (s\'il existe).

## Support & Contact 📬

Pour toute question, ouvrez une [issue](https://github.com/zay168/eventwebsite/issues) sur GitHub.

## Licence 📄

Ce projet est sous licence [MIT](LICENSE).

## Badges complémentaires 🏷️

![Build](https://img.shields.io/github/actions/workflow/status/zay168/eventwebsite/ci.yml?label=build)
![Coverage](https://img.shields.io/codecov/c/github/zay168/eventwebsite)
![Dependencies](https://img.shields.io/librariesio/release/npm/eventwebsite)
![Pull Requests](https://img.shields.io/github/issues-pr/zay168/eventwebsite)

## Historique des versions 🕑

Consultez la page [Releases](https://github.com/zay168/eventwebsite/releases) pour le détail des versions.
