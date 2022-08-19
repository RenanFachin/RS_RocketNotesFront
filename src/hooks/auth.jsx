// Importando do react
import { createContext, useContext } from "react";

// Importando a API
import {api} from '../services/api'

// Criando um contexto com valor default um objeto vazio
export const AuthContext = createContext({});

// O children vai ser as rotas da aplicação (lá do main). é o filho do authContext
function AuthProvider({ children }){

    // Função de autenticação recebe 2 parâmetros: email e password
    // Passado como objeto para a ordem não ter importância
    async function signIn({ email, password }){

        // Try e catch para fazer o tratamento de erros
        try{
        // Fazendo requisição para a api
            const response = await api.post("/sessions", {email, password});
            console.log(response)
        } catch(error){
            if(error.response){
                alert(error.response.data.message)
            } else{
                alert("Não foi possível fazer o login")
            }
        }

    }

    return (
        <AuthContext.Provider value={{ signIn }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContext); // atribuindo em context o uso de um contexto e definindo qual contexto


    return context
}


export { AuthProvider, useAuth };