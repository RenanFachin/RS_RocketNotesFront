import styled from "styled-components"; // Importaçao inicial do styled
import backgroundImg from '../../assets/background.png' // Fazendo o import da imagem de background

// Criando uma constante container (sendo uma div) e já exportando ela para ser utilzada no index.jsx
export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
`;

// Criando uma constante Form (sendo um form) e já exportando ela para ser utilzada no index.jsx
export const Form = styled.form`
    padding: 0 136px;

    /* border: 8px solid #fff; */ // só para conferir onde que tá a borda

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;

    > h1 {
        // Fazendo a estilização do h1 dentro do Form
        font-size: 48px;
        color: ${({theme})=>theme.COLORS.ORANGE}
    }

    > h2 {
        // Fazendo a estilização do h2 dentro do Form
        font-size: 24px;
        margin-top: 84px;
        margin-bottom: 24px;
    }

    > p{
        // Fazendo a estilização do p dentro do Form
        font-size: 14px;
        color: ${({theme})=>theme.COLORS.GRAY_100}
    }

    > a{
        // Fazeno a estilização do a dentro do form
        text-decoration: none;
        margin-top: 124px;
        color: ${({theme})=>theme.COLORS.ORANGE}
    }
`;

// Criação de um novo componente para agrupar as caracteristicas de estilização da imagem
export const Background = styled.div`
    flex: 1; // Para ocupar todo o espaço disponível
    background: url(${backgroundImg}) no-repeat center center; // (${backgroundImg}) é a maneira com que se usa a imagem importada
    background-size: cover;
`;