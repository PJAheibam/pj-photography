import { createGlobalStyle } from "styled-components";

export const GlobaStyles = createGlobalStyle`
    *,
    *::before,
    *::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        font-family: 'Poppins', sans-serif;;
        color: ${(p) => p.theme.palette.text.primary};
        background-color: ${(p) => p.theme.palette.background.default};
    }

`;
