import { Head } from 'vite-react-ssg';
import { sortedPosts } from './posts.jsx';
import { SITE_URL as SITE } from '../../site.js';

const TITLE = 'Blog — Roger Retita';
const DESCRIPTION =
  "Notes de terrain sur le développement web, PrestaShop et la création musicale, par Roger Retita, développeur full stack et beatmaker.";

// Panneau d'accueil du blog : la liste vit dans la sidebar, cette colonne
// invite à choisir. Elle ne reprend le texte d'aucun article, pour que /blog
// et /blog/:slug ne servent jamais le même contenu.
function BlogHome() {
  const posts = sortedPosts();

  return (
    <div className="blog-home">
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href={`${SITE}/blog`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={`${SITE}/blog`} />
      </Head>

      <h1 className="blog-home__title">
        Ce que j&apos;apprends en construisant des sites et des morceaux.
      </h1>

      <p className="blog-home__lead">
        Du développement web à la production musicale : des notes prises en
        cours de route, pas des tutoriels.
      </p>

      <p className="blog-home__hint">
        <span className="arrow">←</span> {posts.length} articles à lire
      </p>
    </div>
  );
}

export default BlogHome;
