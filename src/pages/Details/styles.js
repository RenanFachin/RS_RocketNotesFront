import styled, { ThemeContext } from 'styled-components'

export const Container = styled.div`
 width: 100%;
 height: 100vh;
 
 // Criando uma divisão da pagina em 2 elementos, o header com autura de 105px e todo o restane se ajustando ao total que a página permitir
 display: grid;
 grid-template-rows: 105px auto;
 //Definindo a posição destes 2 elementos de grid
 grid-template-areas:
 "header"
 "content";

 > main {
    grid-area: content; // definindo a região do grid. Main é o content
    overflow-y: scroll; // quando o conteudo não couber mais na vertical, terá uma barra de scroll
    padding: 64x 0;
 }
`;


export const Links = styled.ul`
    list-style: none;

    > li{
        margin-top: 12px;
    
        a{
            color: ${({theme})=> theme.COLORS.WHITE};      
        }
    }
    
`;

export const Content = styled.div`
    // Largura da box main + o ajuste dela para centralizar na página
    max-width: 550px;
    margin: 0 auto;


    display: flex;
    flex-direction: column;

    // Alinhando o botão para a direita
    > button:first-child{
        align-self: end;
    }

    // Ajustando o h1 dentro do content
    > h1 {
        font-size: 36px;
        font-weight: 500;
        padding-top: 60px;
    }

    // Ajustando a tag p de dentro do content
    p {
        font-size: 16px;
        margin-top: 16px;
        text-align: justify;
    }
`;