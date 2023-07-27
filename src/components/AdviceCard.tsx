'use client'

import { useEffect, useState } from "react";
import styled from "styled-components";
import dice from "../assets/icon-dice.svg"
import Image from "next/image";

interface AdviceCardProps {
    slip: {
        id: number,
        advice: string,
    }
}

const Card = styled.div`
    width: 50vw;
    height: 50vh;
    margin: 25vh 25vw;
    background-color: ${props => props.theme.colors.darkGrayishBlue};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;

    & button {
        background-color: ${props => props.theme.colors.neonGreen};
        border: none;
        border-radius: 50%;
        width: 45px;
        height: 45px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        top: 23px;

        &:hover {
            cursor: pointer;
            box-shadow: 0 0 12px 12px ${props => props.theme.colors.neonGreenShadow};
        }
    }
`

export default function AdviceCard() {
    const [advice, setAdvice] = useState<AdviceCardProps>()
    const [newAdvice, setNewAdvice] = useState(true)

    useEffect(() => {
     async function fetchData() {
        const res = await fetch('https://api.adviceslip.com/advice');
        const data = await res.json();
        setAdvice(data);
     } 
     fetchData();
    }, [newAdvice])

    const rollDice = () => {
        setNewAdvice(!newAdvice)
    }

    return(
        <Card>
            <h1>Advice #{advice && advice.slip.id}</h1>
            <h2>{advice && advice.slip.advice}</h2>
            <button onClick={rollDice}>
                <Image src={dice} alt="Clique para um novo conselho" width={24} height={24} />
            </button>
        </Card>
    )
}