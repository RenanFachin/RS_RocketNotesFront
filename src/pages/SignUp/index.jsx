import { Container, Form, Background } from './styles'; // Importando o elemento Container criado no style.js
import { FiMail, FiLock, FiUser} from 'react-icons/fi' // Fazendo o import de um ícone da bibliteca react-icons

import { Input } from '../../components/Input'; // Importando o componente INPUT
import { Button } from '../../components/Button'; // Importando o componente BUTTON


// Criando a função signIn que vai conter os elementos de styles e será utilizado para renderizar a página
export function SignUp(){
    return (
        <Container>
            <Background />

            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>

                <h2>Crie sua conta</h2>

                <Input
                    placeholder = "Nome"
                    type= "text"
                    icon={FiUser}
                />

                <Input
                    placeholder = "E-mail"
                    type= "text"
                    icon={FiMail}
                />

                <Input
                    placeholder = "Senha"
                    type= "password"
                    icon={FiLock}
                />

                <Button title="Cadastrar" />


                <a href='#'>
                    Voltar para página de Login
                </a>

            </Form>
        </Container>
    )
}