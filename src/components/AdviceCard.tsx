'use client'

import { useEffect, useState } from "react";
import styled from "styled-components";

interface AdviceCardProps {
    slip: {
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

    useEffect(() => {
     async function fetchData() {
        const res = await fetch('https://api.adviceslip.com/advice');
        const data = await res.json();
        setAdvice(data);
     } 
     fetchData()
    }, [])

    return(
        <Card>
            <h1>{advice && advice.slip.advice}</h1>
        </Card>
    )
}