'use client'

import { useEffect, useState } from "react";
import styled from "styled-components";
import thinking from "../assets/thinking.png";
import trace from "../assets/pattern-divider-desktop.svg"
import dice from "../assets/icon-dice.svg";
import Image from "next/image";

interface AdviceCardProps {
    slip: {
        id: number,
        advice: string,
    };
};

const Card = styled.div`
    width: 50vw;
    height: 50vh;
    margin: 20vh 25vw;
    padding: 1em;
    background-color: ${props => props.theme.colors.darkGrayishBlue};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    border-radius: 20px;

    & h1 {
        color: ${props => props.theme.colors.neonGreenFont};
    }

    & div {
        display: flex;
        align-items: center;
        gap: .8em;
    }

    & h2 {
        margin: 2em 0;
    }

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
        top: 40px;

        &:hover {
            cursor: pointer;
            box-shadow: 0 0 12px 12px ${props => props.theme.colors.neonGreenShadow};
        }
    }
`;

export default function AdviceCard() {
    const [advice, setAdvice] = useState<AdviceCardProps>();
    const [newAdvice, setNewAdvice] = useState(true);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
     async function fetchData() {
        const res = await fetch('https://api.adviceslip.com/advice');
        const data = await res.json();
        setAdvice(data);
     } 
     fetchData();
    }, [newAdvice])

    const rollDice = () => {
        setLoading(true);
        setNewAdvice(!newAdvice);

        setTimeout(() => {
        setLoading(false);
        }, 2000);
    };

    return(
        <Card>
            {loading ? <h1> Advice - - -</h1> : <h1>Advice #{advice && advice.slip.id}</h1>}
            {loading ? 
                <div>
                    <h2>Let me think...</h2>
                    <Image src={thinking} alt="Emoji thinking" width={50} height={50} />
                </div> : 
                <h2>{advice && advice.slip.advice}</h2>}

            <Image src={trace} alt="trace" width={400} height={20} priority />

            <button onClick={rollDice}>
                <Image src={dice} alt="Clique para um novo conselho" width={24} height={24} />
            </button>
        </Card>
    )
}