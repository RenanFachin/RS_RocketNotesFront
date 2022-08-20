// Importando biblioteca de icones
import { RiShutDownLine } from 'react-icons/ri'

// Importando o hook
import { useAuth } from '../../hooks/auth'

// criando a estrutura para receber o styles.js
import { Container, Profile, Logout } from './styles'; // Fazendo o import do styles.js que tbm está dentro da pasta HEADER

export function Header(){
    // Acessando ao signOut de dentro de useAuth
    const { signOut } = useAuth();

    return(
        <Container>

            <Profile to="/profile">
                <img src="https://github.com/RenanFachin.png" alt="Foto do usuário" />

                <div>
                    <span>Bem-vindo</span>
                    <strong>Renan Fachin</strong>
                </div>
            </Profile>

            <Logout onClick={signOut}>
                <RiShutDownLine/>
            </Logout>

        </Container>
    )
}