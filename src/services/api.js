// Importando o axios
import axios from "axios";

// método create dentro do axios
// Se passa um objeto para este método
export const api = axios.create({
    baseURL: "https://rocketnotes-api182.herokuapp.com"
    // endereço do backend, para não precisar repetir em todas as requisições
})


