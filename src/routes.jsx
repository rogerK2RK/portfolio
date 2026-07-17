import Layout from './Layout.jsx';
import Web from './pages/web/index.jsx';
import Music from './pages/music/index.jsx';
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
      { path: 'blog', element: <BlogIndex /> },
      {
        path: 'blog/:slug',
        element: <BlogPost />,
        // Dit au build quelles URL générer : un fichier HTML par article.
        getStaticPaths: () => POSTS.map((p) => `blog/${p.slug}`),
      },
      // Génère dist/404.html, que Vercel sert automatiquement avec un vrai
      // statut 404 sur les URL inconnues.
      { path: '404', element: <NotFound /> },
      { path: '*', element: <NotFound /> },
    ],
  },
];
