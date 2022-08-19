import { useState } from 'react';

import { Container, Form, Background } from './styles'; // Importando o elemento Container criado no style.js
import { FiMail, FiLock} from 'react-icons/fi' // Fazendo o import de um ícone da bibliteca react-icons

import { Input } from '../../components/Input'; // Importando o componente INPUT
import { Button } from '../../components/Button'; // Importando o componente BUTTON

import { Link } from 'react-router-dom' // Import de um padrão de navegação

import { useAuth } from '../../hooks/auth'; // Importando o contexto criado

// Criando a função signIn que vai conter os elementos de styles e será utilizado para renderizar a página
export function SignIn(){
    
    // Criando os estados
    const [email, setEmail] = useState(""); // Começando vazio
    const [password, setPassword] = useState(""); // Começando vazio

    const { signIn } = useAuth(); // Acessando o hook criado

    // função que será "disparada" quando um evento acontecer
    function handleSignIn(){
        signIn({ email, password })
    }

    
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
                    // Capturando as mudanças que ocorrem no input e atribuindo em setEmail
                    onChange={e=>setEmail(e.target.value)}
                />

                <Input
                    placeholder = "Senha"
                    type= "password"
                    icon={FiLock}
                    // Capturando as mudanças que ocorrem no input e atribuindo em setPassword
                    onChange={e=>setPassword(e.target.value)}
                />

                {/* Disparando a função quando acontecer um click no button */}
                <Button title="Entrar" onClick={handleSignIn}/>


                <Link to='/register'>
                    Criar conta
                </Link>

            </Form>

            <Background />
        </Container>
    )
}