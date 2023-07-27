'use client'

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: sans-serif;
    }

    body {
        background-color: ${props => props.theme.colors.darkBlue};
        color: ${props => props.theme.colors.lightCyan};
        height: 100vh;
    }
`