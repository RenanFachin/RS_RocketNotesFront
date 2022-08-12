import { Container, Form, Background } from './styles'; // Importando o elemento Container criado no style.js
import { FiMail, FiLock} from 'react-icons/fi' // Fazendo o import de um ícone da bibliteca react-icons

import { Input } from '../../components/Input'; // Importando o componente INPUT
import { Button } from '../../components/Button'; // Importando o componente BUTTON

import { Link } from 'react-router-dom' // Import de um padrão de navegação

// Criando a função signIn que vai conter os elementos de styles e será utilizado para renderizar a página
export function SignIn(){
    return (
        <Container>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>

                <h2>Faça seu login</h2>

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

                <Button title="Entrar" />


                <Link to='/register'>
                    Criar conta
                </Link>

            </Form>

            <Background />
        </Container>
    )
}