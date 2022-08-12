import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 105px auto; // 105 px para o cabeçalho e automatico para o restante da tela

    // Aproveitando a estrutura do componente HEADER já feita

    grid-template-areas: 
    "header"
    "content";
`;

export const Form = styled.form`
    max-width: 550px;
    margin: 38px auto;  // Para centralizar

    > header {
        display: flex;
        align-items: center;
        justify-content: space-between; // Deixar criar nota de um lado e o voltar do outro

        margin-bottom: 36px;

        a{
            font-size: 20px;
            color: ${({theme})=> theme.COLORS.GRAY_100}
        }
    }
`;