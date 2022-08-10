// Importando o styled Components
import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-columns: 250px auto; // separando em duas colunas, uma de 250px (será o menu) e outra que ocupará todo o restante
    grid-template-rows: 105px 128px auto 64px;
    //105px será o cabeçalho, 128px será o search, auto o restante do conteudo e 64px para o botão do final do menu lateral

    grid-template-areas: 
    "brand header"
    "menu search"
    "menu content"
    "newnote content";

    background-color: ${({theme})=> theme.COLORS.BACKGROUND_800};
`;

export const Brand = styled.div``;

export const Menu = styled.ul``;

export const Search = styled.div``;

export const Content = styled.div``;

export const NewNot = styled.button``;
