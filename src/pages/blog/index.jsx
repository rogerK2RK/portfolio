import { Head } from 'vite-react-ssg';
import { Link } from 'react-router-dom';
import { sortedPosts, formatDate } from './posts.jsx';
import { SITE_URL as SITE } from '../../site.js';

const TITLE = 'Blog — Roger Retita';
const DESCRIPTION =
  "Notes de terrain sur le développement web, PrestaShop et la création musicale, par Roger Retita, développeur full stack et beatmaker.";

function BlogIndex() {
  const posts = sortedPosts();

  return (
    <div className="page">
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href={`${SITE}/blog`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={`${SITE}/blog`} />
      </Head>

      <section className="block">
        <div className="block__head">
          <span className="block__num">—</span>
          <h2 className="block__title">Blog</h2>
        </div>

        <p className="blog__intro">
          Ce que j&apos;apprends en construisant des sites et des morceaux.
        </p>

        <ul className="blog__list">
          {posts.map((p) => (
            <li className="blog__item" key={p.slug}>
              <Link className="blog__link" to={`/blog/${p.slug}`}>
                <span className="blog__meta">
                  <time dateTime={p.date}>{formatDate(p.date)}</time>
                  <span className="blog__tag">{p.tag}</span>
                  <span className="blog__time">{p.readingTime}</span>
                </span>
                <h3 className="blog__title">{p.title}</h3>
                <p className="blog__desc">{p.description}</p>
                <span className="blog__more">Lire <span className="arrow">→</span></span>
              </Link>
            </li>
          ))}
        </ul>

        <Link className="blog__back" to="/">
          <span className="arrow">←</span> Retour au portfolio
        </Link>
      </section>
    </div>
  );
}

export default BlogIndex;
