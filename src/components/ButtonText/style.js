import styled from "styled-components";

export const Container = styled.button`
    background: none;
    
    color: ${({ theme, isActive }) => isActive ? theme.COLORS.ORANGE : theme.COLORS.GRAY_100 };
    // Criando uma condição, se tiver ativo é laranja

    border: none;
    font-size: 16px;
`;