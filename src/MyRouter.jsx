import {Routes, Route} from 'react-router-dom'
import Web from './pages/web/index.jsx'
import Music from './pages/music/index.jsx'


const MyRouter = () => {
    return (
        <> 
            <Routes>
                <Route path='/' element={<Web />} />
                <Route path='/music/' element={<Music />} />
                <Route path='*' element={<h1>404 page not found</h1>} />
            </Routes>
        </>
    )
}


export default MyRouter