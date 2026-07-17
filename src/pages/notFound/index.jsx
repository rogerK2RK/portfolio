import { Head } from 'vite-react-ssg';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="page">
      <Head>
        <title>Page introuvable — Roger Retita</title>
        {/* noindex : une 404 indexée dilue le référencement du reste du site. */}
        <meta name="robots" content="noindex" />
      </Head>

      <section className="block notfound">
        <div className="block__head">
          <span className="block__num">404</span>
          <h1 className="block__title">Page introuvable</h1>
        </div>
        <p className="notfound__text">
          Cette page n&apos;existe pas, ou n&apos;existe plus.
        </p>
        <Link className="link-back" to="/">
          <span className="arrow">←</span> Retour au portfolio
        </Link>
      </section>
    </div>
  );
}

export default NotFound;
