import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    // Estaos criando este header e não reaproveitando o componente header pq eles são diferentes e não vale a pena criar um componente para este header e utilizar ele somente uma vez na página
    > header {
        width: 100%;
        height: 144px;

        background: ${({theme})=> theme.COLORS.BACKGROUND_900};

        display: flex;
        align-items: center;

        padding: 0 124px;

        // acessando o svg dentro do header (o icon)
        svg {
            color: ${({theme})=> theme.COLORS.GRAY_100};
            font-size: 24px;

        }
    }
`;


export const Form = styled.form`
    max-width: 340px;
    margin: -84px auto 0; // para centralizar e fazer ele subir um pouco no header

    
`;