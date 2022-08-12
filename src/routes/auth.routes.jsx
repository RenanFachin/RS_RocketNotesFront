import { Routes, Route } from 'react-router-dom' 
//Routes envolve todas as rotas
//Route é para cada rota


import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp'


export function AuthRoutes(){
    return(
        <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/register" element={<SignUp />} />
        </Routes>
    )
}