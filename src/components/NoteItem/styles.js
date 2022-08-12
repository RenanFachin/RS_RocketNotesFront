import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;

    // Como saber se é um novo elemento?
    // Dessa maneira é possível acessar uma propriedade passada dentro do jsx
    background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_900};
    color: ${({theme}) => theme.COLORS.GRAY_300};

    // se isNew for true ele vai dizer que é transparent, se for false, aplicará o tema de fundo theme


    // Criando uma borda com a condição
    border: ${({theme, isNew}) => isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};


    margin-bottom: 8px;
    border-radius: 10px;
    padding-right: 16px;

    >button {
        border: none;
        background: none;
    }

    .button-delete {
        color: ${({theme}) => theme.COLORS.RED};
    }

    .button-add {
        color: ${({theme}) => theme.COLORS.ORANGE};
    }

    > input {
        height: 56px;
        width: 100%;

        padding: 12px;
        color: ${({theme}) => theme.COLORS.WHITE};
        background: transparent;

        border: none;

        &::placeholder{
            color: ${({theme}) => theme.COLORS.GRAY_300};
        }

    }
`;