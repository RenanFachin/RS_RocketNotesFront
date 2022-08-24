import { Routes, Route } from 'react-router-dom' 
//Routes envolve todas as rotas
//Route é para cada rota


import { Signin } from '../pages/Signin'
import { SignUp } from '../pages/SignUp'


export function AuthRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Signin />} />
            <Route path="/register" element={<SignUp />} />
        </Routes>
    )
}