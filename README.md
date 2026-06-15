# Portfolio — Roger Retita

Portfolio personnel à **deux faces**, basculables via un bouton flottant :

- **Web** — Développeur Web Full Stack : à propos, compétences, projets, contact.
- **Music** — Rog One Beats (beatmaker / mixeur / compositeur) : à propos, compétences, compositions YouTube, contact.

🔗 Identité couleur : rouge `#E02B20` (web) · bleu `#0F4CE7` (music), sur fond sombre.

## Stack

- [React 18](https://react.dev/) + [Vite 5](https://vitejs.dev/)
- [react-router-dom](https://reactrouter.com/) — routage `/` (web) et `/music`
- [react-scroll](https://www.npmjs.com/package/react-scroll) — navigation par ancres
- [styled-components](https://styled-components.com/) — bouton de bascule
- Polices [Oswald](https://fonts.google.com/specimen/Oswald) (titres) + [Raleway](https://fonts.google.com/specimen/Raleway) (texte)

## Démarrage

```bash
npm install      # installer les dépendances
npm run dev      # serveur de développement (http://localhost:5173)
npm run build    # build de production dans dist/
npm run preview  # prévisualiser le build
npm run lint     # vérifier le code
```

## Déploiement

Le site se déploie sur GitHub Pages :

```bash
npm run deploy   # build + publication du dossier dist/
```

## Structure

```
src/
├── main.jsx                    # point d'entrée (BrowserRouter)
├── MyRouter.jsx                # routes + bascule web/music
├── index.css                   # styles globaux (variables, responsive)
├── components/
│   └── boutonSwitch/           # bouton de bascule entre les deux faces
└── pages/
    ├── web/                    # face développeur web
    └── music/                  # face musique
```

## Contact

- Web — [roger.retita@gmail.com](mailto:roger.retita@gmail.com)
- Music — [rogonebeats@gmail.com](mailto:rogonebeats@gmail.com)
- [GitHub](https://github.com/rogerK2RK) · [LinkedIn](https://www.linkedin.com/in/roger-retita-9402b1197/) · [YouTube](https://www.youtube.com/channel/UCDECuuPMRTnP4NWFvSC2jaA)

© 2026 RETITA Roger.
