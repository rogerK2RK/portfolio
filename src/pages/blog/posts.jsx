/**
 * Index du blog.
 *
 * Un article = un fichier dans ./articles/, qui exporte par défaut un objet.
 * Pour en ajouter un : copie le fichier le plus proche de ce que tu veux
 * écrire, change le `slug` (il devient l'URL /blog/mon-slug), puis importe-le
 * ici et ajoute-le au tableau. Le build génère alors son fichier HTML et
 * l'ajoute au sitemap — rien d'autre à déclarer.
 *
 * Champs qui comptent pour le référencement :
 *  - title       : 50-60 caractères. C'est le lien bleu dans Google.
 *  - description : 150-160 caractères. C'est le texte gris sous le lien.
 *                  Écris-la pour donner envie de cliquer, pas pour caser
 *                  des mots-clés — Google réécrit les descriptions creuses.
 *  - date        : format AAAA-MM-JJ. Sert au tri, à la donnée structurée,
 *                  et s'affiche au lecteur : mets la vraie date de publication.
 *  - readingTime : manuel, il ne se recalcule pas. Compte ~200 mots/minute.
 *
 * Les apostrophes s'écrivent &apos; (règle ESLint react/no-unescaped-entities).
 */

import prestashopOuSurMesure from './articles/prestashop-ou-sur-mesure.jsx';
import animationsGsap from './articles/animations-gsap-sans-plomber-les-perfs.jsx';
import beatmakingEtCode from './articles/beatmaking-et-code-meme-metier.jsx';
import reactPasToujours from './articles/react-nest-pas-toujours-la-reponse.jsx';
import brutalisme from './articles/le-brutalisme-nest-pas-une-excuse.jsx';
import portfolioPreuves from './articles/ce-quun-portfolio-doit-prouver.jsx';
import figmaLivrable from './articles/figma-nest-pas-un-livrable.jsx';
import coderAvecUneIa from './articles/coder-avec-une-ia-sans-perdre-la-main.jsx';
import iaEnMusique from './articles/lia-en-musique-outil-ou-raccourci.jsx';

export const POSTS = [
  prestashopOuSurMesure,
  animationsGsap,
  beatmakingEtCode,
  reactPasToujours,
  brutalisme,
  portfolioPreuves,
  figmaLivrable,
  coderAvecUneIa,
  iaEnMusique,
];

export const getPost = (slug) => POSTS.find((p) => p.slug === slug);

export const sortedPosts = () =>
  [...POSTS].sort((a, b) => b.date.localeCompare(a.date));

export const formatDate = (iso) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
