import { useEffect, useRef } from 'react';
import { Outlet, NavLink, Link, useLocation } from 'react-router-dom';
import { sortedPosts, formatDate } from './posts.jsx';

// Coquille commune à /blog et /blog/:slug : la sidebar reste montée d'une
// page à l'autre, seule la colonne de droite change.
const BlogLayout = () => {
  const posts = sortedPosts();
  const sideRef = useRef(null);
  const { pathname } = useLocation();

  // La liste dépasse la hauteur d'écran dès une poignée d'articles : en
  // arrivant directement sur un article du bas, l'entrée active serait hors
  // de vue et le lecteur ne saurait pas où il se trouve.
  useEffect(() => {
    const active = sideRef.current?.querySelector('.blog-side__item--active');
    // 'nearest' : ne bouge que si l'entrée est hors de vue, et ne déplace pas
    // la fenêtre quand elle est déjà visible.
    active?.scrollIntoView({ block: 'nearest' });
  }, [pathname]);

  return (
    <div className="blog-shell">
      <aside className="blog-side" ref={sideRef}>
        <div className="blog-side__inner">
          <div className="blog-side__head">
            <Link className="blog-side__back" to="/">
              <span className="arrow">←</span> Portfolio
            </Link>

            <h2 className="blog-side__title">Blog</h2>
          </div>

          <nav className="blog-side__nav" aria-label="Articles">
            {posts.map((p) => (
              <NavLink
                className={({ isActive }) =>
                  `blog-side__item${isActive ? ' blog-side__item--active' : ''}`
                }
                key={p.slug}
                to={`/blog/${p.slug}`}
              >
                <span className="blog-side__meta">
                  <time dateTime={p.date}>{formatDate(p.date)}</time>
                  <span className="blog-side__tag">{p.tag}</span>
                </span>
                <span className="blog-side__name">{p.title}</span>
              </NavLink>
            ))}
          </nav>
        </div>
      </aside>

      <main className="blog-main">
        <Outlet />
      </main>
    </div>
  );
};

export default BlogLayout;
