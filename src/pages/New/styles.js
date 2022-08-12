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

    > main {
        // Pegando a tag main dentro do Content
        // Com essas estilizações, o bcabeçalho sempre estará fixo no topo da tela e somente o main será scrolado
        grid-area: content;
        overflow-y: auto;
    }

    //Deixando a div de className=tags aparecendo os elementos lado a lado e não um em cima do outro
    .tags{
        display:flex;
        justify-content: space-between;
        flex-wrap: wrap; // Quando não couber mais na linha, ele vai jogar automaticamente para baixo
    }
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