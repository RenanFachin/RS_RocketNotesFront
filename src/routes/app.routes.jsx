import { Routes, Route } from 'react-router-dom' 
//Routes envolve todas as rotas
//Route é para cada rota


import { New } from '../pages/New'
import { Home } from '../pages/Home'
import { Profile } from '../pages/Profile'
import { Details } from '../pages/Details'


export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    )
}