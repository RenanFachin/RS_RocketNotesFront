import { BrowserRouter } from 'react-router-dom'


// Importando as rotas criadas
import { AppRoutes } from './app.routes'
import { AuthRoutes } from './auth.routes'


export function Routes() {
    return(
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    )
}