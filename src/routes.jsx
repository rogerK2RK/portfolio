import Layout from './Layout.jsx';
import Web from './pages/web/index.jsx';
import Music from './pages/music/index.jsx';
import BlogLayout from './pages/blog/layout.jsx';
import BlogIndex from './pages/blog/index.jsx';
import BlogPost from './pages/blog/post.jsx';
import NotFound from './pages/notFound/index.jsx';
import { POSTS } from './pages/blog/posts.jsx';

export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Web /> },
      { path: 'music', element: <Music /> },
      {
        // Coquille à deux colonnes : la sidebar est partagée par /blog et
        // /blog/:slug, seule la colonne de droite change.
        path: 'blog',
        element: <BlogLayout />,
        children: [
          { index: true, element: <BlogIndex /> },
          {
            path: ':slug',
            element: <BlogPost />,
            // Dit au build quelles URL générer : un fichier HTML par article.
            // Les chemins sont relatifs à la route parente : renvoyer
            // `blog/<slug>` ici produirait dist/blog/blog/<slug>.html.
            getStaticPaths: () => POSTS.map((p) => p.slug),
          },
        ],
      },
      // Génère dist/404.html, que Vercel sert automatiquement avec un vrai
      // statut 404 sur les URL inconnues.
      { path: '404', element: <NotFound /> },
      { path: '*', element: <NotFound /> },
    ],
  },
];
