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