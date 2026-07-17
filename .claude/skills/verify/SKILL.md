---
name: verify
description: Vérifier un changement du portfolio en pilotant le build prérendu dans un navigateur.
---

# Vérifier le portfolio

Site Vite + React prérendu par `vite-react-ssg`. Le build génère un fichier
HTML par route ; c'est ce HTML qu'il faut inspecter pour tout ce qui touche au SEO.

## Lancer

```bash
npm run build                 # = vite-react-ssg build, génère dist/ + dist/sitemap.xml
npx vite preview --port 4179  # sert dist/
```

`npm run dev` sert l'app **non prérendue** : inutile pour vérifier le SEO.

## Piloter

Playwright n'est pas une dépendance du projet. L'installer dans le scratchpad
(`npm init -y && npm i playwright`), pas dans le repo.

Parcours qui couvre l'essentiel :

1. `/` — hero visible, marquee, footer
2. clic `.footer__blog` → `/blog` — 3 articles listés
3. clic `.blog__link` → `/blog/:slug` — h1 + h2 présents
4. clic sur le switch depuis `/` → `/music`, `body.mode-music`
5. `/blog` — le switch doit être **absent**, `body.mode-web`
6. accès direct `/blog/:slug` — ne doit **pas** rediriger

## Pièges connus

- **`page.title()` juste après `waitForURL` renvoie le titre précédent.**
  react-helmet met à jour dans un effet, après le changement d'URL. Attendre
  ~1s avant de lire le titre, sinon on croit à un bug qui n'existe pas.
- **`/_vercel/insights/script.js` en 404 en local est normal** : l'endpoint
  Vercel Analytics n'existe que sur un déploiement Vercel.
- **`vite preview` rabat les URL inconnues sur `index.html` avec un statut 200.**
  Vercel ne le fait pas (pas de `rewrites` dans `vercel.json`, `404.html` est
  généré). Ne pas conclure à un soft-404 depuis le preview local.
- **`.block__title` a `line-height: 0.86`** : sur tout titre qui passe à la
  ligne, les lignes se chevauchent. Vérifier visuellement, pas seulement le DOM.

## Contrôles SEO

```bash
# une seule balise par page — un doublon signifie qu'index.html les redéclare
grep -oE '<title[^>]*>[^<]*</title>' dist/blog/*.html
grep -c 'name="description"' dist/index.html
cat dist/sitemap.xml
```

Le contenu doit être dans le HTML servi (`curl`), pas seulement après hydratation :

```bash
curl -s localhost:4179/blog/<slug> | grep '<h1'
```
