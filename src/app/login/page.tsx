'use client'

import Switcher from "@/components/Switcher";
import { CustomThemeProvider } from "@/contexts/ThemeContext";
import { GlobalStyle } from "@/styles/GlobalStyles";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 300px;
    margin: 20vh auto 0;
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

interface FormData {
    email: string;
    password: string;
  }

export default function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const handleFormOnChange = (event: ChangeEvent<HTMLInputElement>, name: keyof FormData) => {
        setFormData({
            ...formData,
            [name]: event.target.value
        })
    }

    const handleFormSubmit = (event: any) => {
        event.preventDefault();
        console.log(formData)
    }
    return(
        <CustomThemeProvider>
            <GlobalStyle />
            <Switcher />
            <Container>
                <h2>Login</h2>
                <form onSubmit={(e) => handleFormSubmit(e)}>
                    <input type="email" name="email" id="email" placeholder="Type your e-mail..." required value={formData.email} onChange={(e) => {handleFormOnChange(e, 'email')}} />
                    <input type="password" name="password" id="password" placeholder="type your password..." required value={formData.password} onChange={(e) => {handleFormOnChange(e, 'password')}} />
                    <button type="submit">Login</button>
                </form>
                <Link href='/register'>Create acount</Link>
            </Container>
        </CustomThemeProvider>
    )
}