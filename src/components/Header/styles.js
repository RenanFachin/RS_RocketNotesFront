import styled from 'styled-components';



export const Container = styled.header`
    grid-area: header; // Estratégia para a navegação da página ficar fixa no topo ao usar o scroll

    height: 105px;
    width: 100%;

    border-bottom-width: 1px; // borda embaixo do elemento header
    border-bottom-style: solid; //
    border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_700};

    display: flex;
    justify-content: space-between;

    padding: 0 80px;
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;

    //  o simbolo de > é para garantir que somente a img que está dentro da profile será estilizada
    > img {
        width: 56px;
        height: 56px;
        border-radius: 50%; // deixando a imagem redonda
    }

    //  o simbolo de > é para garantir que somente a div que está dentro da profile será estilizada
    > div {
        display: flex;
        flex-direction: column;
        margin-left: 16px;
        line-height: 24px;

        // modificando a span dentro da div que está dentro de profile, não precisa de > pois ele já está em um bom nível de especificidade
        span {
            font-size: 14px;
            color: ${({theme}) => theme.COLORS.GRAY_100}
        }

        strong {
            font-size: 16px;
            color: ${({theme}) => theme.COLORS.WHITE}
        }
    }
`;

export const Logout = styled.button`
    border: none;
    background: none;

    // O ícone é um svg, e um svg permite que seja aplicado estilos
    > svg {
        color: ${({theme}) => theme.COLORS.GRAY_100};
        font-size: 32px;
    }
`;