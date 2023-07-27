'use client'

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto_Flex', sans-serif;
    }

    body {
        background-image: linear-gradient(160deg, blue 30%, aqua 60%);
        height: 100%;
    }
`