// criando a estrutura para receber o styles.js

import { Container, Profile } from './styles'; // Fazendo o import do styles.js que tbm está dentro da pasta HEADER

export function Header(){
    return(
        <Container>

            <Profile>
                <img src="https://github.com/RenanFachin.png" alt="Foto do usuário" />

                <div>
                    <span>Bem-vindo</span>
                    <strong>Renan Fachin</strong>
                </div>
            </Profile>
            
        </Container>
    )
}