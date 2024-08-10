import { createGlobalStyle } from "styled-components";
import RobotoBlack from "../fonts/Roboto/Roboto-Black.ttf"
import RobotoRegular from "../fonts/Roboto/Roboto-Regular.ttf"
import RobotoLight from '../fonts/Roboto/Roboto-Light.ttf'
import RobotoThin from '../fonts/Roboto/Roboto-Thin.ttf'

export const GlobalStyle = createGlobalStyle`

    @font-face {
        font-family: 'Roboto Regular';
        src: url(${RobotoRegular}) format("woff");
    }

    @font-face {
        font-family: 'Roboto Black';
        src: url(${RobotoBlack}) format("woff");
    }

    @font-face {
        font-family: 'Roboto Light';
        src: url(${RobotoLight}) format("woff");
    }

    @font-face {
        font-family: 'Roboto Thin';
        src: url(${RobotoThin}) format("woff");
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto Regular', sans-serif;
    }

    h1 {
        font-family: 'Roboto Black', sans-serif;
        margin: 0;
        padding: 0;
    }

    body {
        background: white;
        color: black;
    }
`;
