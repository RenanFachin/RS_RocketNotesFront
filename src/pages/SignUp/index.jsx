import { useState } from "react" // Importa o useSate que cria estado
import { Container, Form, Background } from './styles'; // Importando o elemento Container criado no style.js
import { FiMail, FiLock, FiUser} from 'react-icons/fi' // Fazendo o import de um ícone da bibliteca react-icons

import { Input } from '../../components/Input'; // Importando o componente INPUT
import { Button } from '../../components/Button'; // Importando o componente BUTTON

import { Link, useNavigate } from 'react-router-dom'

import { api } from '../../services/api' // importando a api criada no backend

// Criando a função signIn que vai conter os elementos de styles e será utilizado para renderizar a página
export function SignUp(){
    const [name, setName] = useState(""); // O hook que cria o estado
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate()

    function handleSignUp(){
        // Criando uma verificação para saber se todos os campos foram preenchidos
        // Se não nome ou não email ou não password
        if(!name || !email || !password){
            // return aqui é para não deixar a função prosseguir
            return alert("Preencha todos os campos!")

            navigate("/") // Redireciona o usuário diretamente a tela de login após o cadastro
        }
        // Fazendo o post na rota de cadastro de usuários
        api.post("/users", { name, email, password})
        .then(()=>{
            alert("Usuário cadastrado com sucesso!")
        }) 
        .catch(error => {
            if(error.response){
                // Capturando a mensagem de erro lá do backend
                alert(error.response.data.message);
            }else{
                alert("Não foi possível cadastrar")
            }
        })
        //then executa se deu certo e o catch se deu errado

    }

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
                    onChange={e => setName(e.target.value)}
                />

                <Input
                    placeholder = "E-mail"
                    type= "text"
                    icon={FiMail}
                    onChange={e => setEmail(e.target.value)}
                />

                <Input
                    placeholder = "Senha"
                    type= "password"
                    icon={FiLock}
                    onChange={e => setPassword(e.target.value)}
                />

                <Button title="Cadastrar" onClick={handleSignUp}/>


                <Link to='/'>
                    Voltar para página de Login
                </Link>

            </Form>
        </Container>
    )
}