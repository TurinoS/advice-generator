'use client'

import Switcher from "@/components/Switcher";
import { CustomThemeProvider } from "@/contexts/ThemeContext";
import { GlobalStyle } from "@/styles/GlobalStyles";
import Link from "next/link";
import styled from "styled-components";

const Container = styled.div`
    width: 20vw;
    margin: 20vh 40vw;
    padding: 1em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${props => props.theme.colors.darkGrayishBlue};
    border-radius: 20px;

    & h2 {
        text-align: center;
    }

    & form {
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 1em;
        margin-top: 1em;
    }

    & input {
        padding: 10px 30px;
        border: none;
        background-color: ${props => props.theme.colors.lightCyan};
        color: ${props => props.theme.colors.darkGrayishBlue};
        font-weight: bold;
        border-radius: 10px;
    }

    & button {
        padding: 10px 30px;
        border: none;
        background-color: ${props => props.theme.colors.neonGreenFont};
        color: ${props => props.theme.colors.darkGrayishBlue};
        font-weight: bold;
        border-radius: 10px;
        cursor: pointer;
    }

    & a {
        text-decoration: none;
        color: ${props => props.theme.colors.lightCyan};
        margin-top: 10px;
    }
`

export default function Login() {
    return(
        <CustomThemeProvider>
            <GlobalStyle />
            <Switcher />
            <Container>
                <h2>Create acount</h2>
                <form>
                    <input type="text" name="name" id="name" placeholder="Type your name..." />
                    <input type="email" name="email" id="email" placeholder="Type your e-mail..." />
                    <input type="password" name="password" id="password" placeholder="type your password..." />
                    <button type="submit">Register</button>
                </form>
                <Link href='/login'>Login</Link>
            </Container>
        </CustomThemeProvider>
    )
}