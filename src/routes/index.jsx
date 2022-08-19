import { BrowserRouter } from 'react-router-dom'
import { useAuth } from '../hooks/auth'

// Importando as rotas criadas
import { AppRoutes } from './app.routes'
import { AuthRoutes } from './auth.routes'


export function Routes() {
    const {user} = useAuth();
    
    return(
        <BrowserRouter>
        {/* Se existe um usuário ->  AppRoutes*/}
        {/* Se não existir um usuário -> AuthRoutes */}
            {user ? <AppRoutes /> : <AuthRoutes />}
        </BrowserRouter>
    )
}