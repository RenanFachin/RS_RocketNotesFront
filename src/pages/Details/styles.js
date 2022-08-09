import styled from 'styled-components'

export const Container = styled.div`
 width: 100%;
 height: 100vh;
 
 // Criando uma divisão da pagina em 2 elementos, o header com autura de 105px e todo o restane se ajustando ao total que a página permitir
 display: grid;
 grid-template-rows: 105px auto;
 //Definindo a posição destes 2 elementos de grid
 grid-template-areas:
 "header"
 "content"
`;