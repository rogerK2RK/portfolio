import { Head } from 'vite-react-ssg';
import { Link, useParams } from 'react-router-dom';
import { getPost, formatDate } from './posts.jsx';
import { SITE_URL, AUTHOR } from '../../site.js';
import NotFound from '../notFound/index.jsx';

function BlogPost() {
  const { slug } = useParams();
  const post = getPost(slug);

  // Un slug inconnu ne doit pas planter le rendu : on rend le 404,
  // qui porte déjà la balise noindex.
  if (!post) return <NotFound />;

  const url = `${SITE_URL}/blog/${post.slug}`;

  // Donnée structurée : c'est elle qui permet à Google d'afficher la date
  // et l'auteur sous le résultat, plutôt qu'un lien nu.
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Person', name: AUTHOR, url: SITE_URL },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  };

  return (
    <div className="page">
      <Head>
        <title>{`${post.title} — ${AUTHOR}`}</title>
        <meta name="description" content={post.description} />
        <link rel="canonical" href={url} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:url" content={url} />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:author" content={AUTHOR} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Head>

      <article className="block post">
        <div className="block__head">
          <span className="block__num">{post.tag}</span>
          <h1 className="block__title">{post.title}</h1>
        </div>

        <p className="post__meta">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span className="sep"> / </span>
          <span>{post.readingTime} de lecture</span>
        </p>

        <div className="post__body">{post.content}</div>

        <Link className="blog__back" to="/blog">
          <span className="arrow">←</span> Tous les articles
        </Link>
      </article>
    </div>
  );
}

export default BlogPost;
