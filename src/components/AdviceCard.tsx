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
    width: 33vw;
    height: 50vh;
    margin: 25vh 33vw;
    background-color: ${props => props.theme.colors.darkGrayishBlue};
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