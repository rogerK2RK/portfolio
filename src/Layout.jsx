import { useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import SwitchButton from './components/boutonSwitch/index.jsx';

// Le switch ne bascule qu'entre les deux vitrines ; le blog vit sous la face web.
const isMusicPath = (pathname) => pathname.startsWith('/music');
const hasSwitch = (pathname) => pathname === '/' || pathname === '/music';

const Layout = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const isMusic = isMusicPath(location.pathname);

    // L'accent (rouge web / bleu musique) est posé sur le body pour que les
    // éléments hors page — switch et curseur custom — l'héritent aussi.
    useEffect(() => {
        document.body.classList.toggle('mode-web', !isMusic);
        document.body.classList.toggle('mode-music', isMusic);
    }, [isMusic]);

    const handleSwitch = () => {
        navigate(isMusic ? '/' : '/music');
    };

    return (
        <>
            {hasSwitch(location.pathname) && (
                <SwitchButton isPageOne={!isMusic} onClick={handleSwitch} />
            )}
            <Outlet />
            <Analytics />
        </>
    );
};

export default Layout;
