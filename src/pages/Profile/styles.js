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
    margin: -95px auto 0; // para centralizar e fazer ele subir um pouco no header  

    > div:nth-child(4){
        margin-top: 24px;
    }
`;

export const Avatar = styled.div`
    position: relative;
    margin: 0 auto 32px;
    width: 186px;
    height: 186px;


    >img{
        width: 186px;
        height: 186px;

        border-radius: 50%;
    }


    > label {
        width: 48px;
        height: 48px;
        background-color: ${({theme})=> theme.COLORS.ORANGE};
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        bottom: 7px;
        right: 7px;

        cursor: pointer;

        input {
            display: none; // escondendo as coisas e deixando só o svg aparecendo
        }

        svg{
            width: 20px;
            height: 20px;
            color: ${({theme})=> theme.COLORS.BACKGROUND_800};
        }
    }
`;