import { ViteReactSSG } from 'vite-react-ssg';
import { routes } from './routes.jsx';
import './index.css';

// ViteReactSSG rend l'app en HTML au build (un fichier par route) puis
// l'hydrate dans le navigateur. Même app, mais servie déjà remplie —
// c'est ce qui la rend lisible par les moteurs de recherche.
export const createRoot = ViteReactSSG({ routes });
