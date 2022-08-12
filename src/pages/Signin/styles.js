import styled from "styled-components"; // Importaçao inicial do styled

// Criando uma constante container (sendo uma div) e já exportando ela para ser utilzada no index.jsx
export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
`;

// Criando uma constante Form (sendo um form) e já exportando ela para ser utilzada no index.jsx
export const Form = styled.form`
    padding: 0 136px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;
`;