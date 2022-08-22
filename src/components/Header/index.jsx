// Importando biblioteca de icones
import { RiShutDownLine } from 'react-icons/ri'

// Importando o hook
import { useAuth } from '../../hooks/auth'

// criando a estrutura para receber o styles.js
import { Container, Profile, Logout } from './styles'; // Fazendo o import do styles.js que tbm está dentro da pasta HEADER

import { api } from '../../services/api'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

export function Header(){
    // Acessando ao signOut de dentro de useAuth
    const { signOut, user } = useAuth();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder


    return(
        <Container>

            <Profile to="/profile">
                <img src={avatarUrl}
                alt= {user.name}/>

                <div>
                    <span>Bem-vindo</span>
                    <strong>{user.name}</strong>
                </div>
            </Profile>

            <Logout onClick={signOut}>
                <RiShutDownLine/>
            </Logout>

        </Container>
    )
}