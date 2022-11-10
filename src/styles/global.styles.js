import { createGlobalStyle } from "styled-components";
import { swiperStyle } from "./swiper.styles";

export const GlobaStyles = createGlobalStyle`
    *,
    *::before,
    *::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    *:focus-visible{
        /* border: 2px solid ${(p) => p.theme.palette.tertiary.main.bg}; */
        outline:3px solid ${(p) => p.theme.palette.tertiary.container.bg};
        outline-offset: 3px;
    }
    :root{
        color-scheme: dark;
    }
    html{
        scroll-behavior: smooth;
    }
    body{
        font-family: 'Poppins', sans-serif;;
        color: ${(p) => p.theme.palette.text.primary};
        background-color: ${(p) => p.theme.palette.background.default};
        overflow: overlay;
    }
    a{
        color: ${(p) => p.theme.palette.text.primary};
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

    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus, 
    input:-webkit-autofill:active{
        -webkit-text-fill-color: ${(p) =>
          p.theme.palette.text.primary} !important;
        box-shadow: ${(p) =>
          `0 0 0 30px ${p.theme.palette.background.paper[3]} inset !important`};
    }

    ${swiperStyle}

`;
