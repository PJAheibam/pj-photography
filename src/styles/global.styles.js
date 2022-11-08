import { createGlobalStyle } from "styled-components";

export const GlobaStyles = createGlobalStyle`
    *,
    *::before,
    *::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        scroll-behavior: smooth;
    }
    body{
        font-family: 'Poppins', sans-serif;;
        color: ${(p) => p.theme.palette.text.primary};
        background-color: ${(p) => p.theme.palette.background.default};
    }
    a{
        text-decoration: none;
    }
    button{
        font-weight: 500;
        cursor: pointer;
        font-size: 1rem;
        background-color: transparent;
        border: none;
        text-transform: capitalize;
        border-radius: 0;
    }

`;
