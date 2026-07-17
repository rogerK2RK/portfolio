import { Outlet, NavLink, Link } from 'react-router-dom';
import { sortedPosts, formatDate } from './posts.jsx';

// Coquille commune à /blog et /blog/:slug : la sidebar reste montée d'une
// page à l'autre, seule la colonne de droite change.
const BlogLayout = () => {
  const posts = sortedPosts();

  return (
    <div className="blog-shell">
      <aside className="blog-side">
        <div className="blog-side__inner">
          <Link className="blog-side__back" to="/">
            <span className="arrow">←</span> Portfolio
          </Link>

          <h2 className="blog-side__title">Blog</h2>

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
