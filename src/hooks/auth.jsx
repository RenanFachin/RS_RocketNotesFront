// Importando do react
import { createContext, useContext, useState } from "react";

// Importando a API
import {api} from '../services/api'

// Criando um contexto com valor default um objeto vazio
export const AuthContext = createContext({});

// O children vai ser as rotas da aplicação (lá do main). é o filho do authContext
function AuthProvider({ children }){
    // Sempre no inicio se cria os estados
    const [data, setData] = useState({});

    // Função de autenticação recebe 2 parâmetros: email e password
    // Passado como objeto para a ordem não ter importância
    async function signIn({ email, password }){

        // Try e catch para fazer o tratamento de erros
        try{
        // Fazendo requisição para a api
            const response = await api.post("/sessions", {email, password});

            // Destruturando o data para voltar somente os dados de user e o token de login
            const { user, token } = response.data

            // Utilizando o localStorage
            localStorage.setItem("@rocketnotes:user", JSON.stringify(user));
            localStorage.setItem("@rocketnotes:token", token);

            // Inserindo um token de autenticação no cabeçalho de todas as requisições que usuário fará apartir de seu login
            api.defaults.headers.authorization = `Bear ${token}`;

            // Armazendando as informações
            setData({user,token})

        } catch(error){
            if(error.response){
                alert(error.response.data.message)
            } else{
                alert("Não foi possível fazer o login")
            }
        }

    }

    return (
        <AuthContext.Provider value={{ signIn, user: data.user }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContext); // atribuindo em context o uso de um contexto e definindo qual contexto


    return context
}


export { AuthProvider, useAuth };