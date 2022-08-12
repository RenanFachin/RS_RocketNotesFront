import styled from "styled-components";

export const Container = styled.textarea`
    width: 100%; // vai ocupar 100% da largura disponível para o elemento
    height: 150px;

    background-color: ${({theme})=> theme.COLORS.BACKGROUND_900};
    color: ${({theme})=> theme.COLORS.WHITE};

    border: none;
    resize: none; // Não deixar o usuário aumentar a caixinha de textarea

    margin-bottom: 8px;
    border-radius: 10px;
    padding: 16px;

    &::placegolder{
        color: ${({theme})=> theme.COLORS.GRAY_300};
    }
`;