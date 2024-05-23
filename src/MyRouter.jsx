import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import SwitchButton from './components/boutonSwitch/index.jsx';
import Web from './pages/web/index.jsx';
import Music from './pages/music/index.jsx';

const MyRouter = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isPageOne, setIsPageOne] = useState(location.pathname === '/');

    useEffect(() => {
        if (isPageOne && location.pathname !== '/') {
            navigate('/');
        } else if (!isPageOne && location.pathname !== '/music') {
            navigate('/music');
        }
    }, [isPageOne, navigate, location.pathname]);

    const handleSwitch = () => {
        setIsPageOne(prevState => !prevState);
    };

    return (
        <>
            <SwitchButton isPageOne={isPageOne} onClick={handleSwitch} />
            <Routes>
                <Route path='/' element={<Web />} />
                <Route path='/music' element={<Music />} />
                <Route path='*' element={<h1>404 page not found</h1>} />
            </Routes>
        </>
    );
};

export default MyRouter;
