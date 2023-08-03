"use client";

import { useEffect, useState } from "react";
import { translateText } from '../utils/translate';
import styled from "styled-components";
import thinking from "../assets/thinking.png";
import trace from "../assets/pattern-divider-desktop.svg";
import dice from "../assets/icon-dice.svg";
import Image from "next/image";

interface AdviceCardProps {
  slip: {
    id: number;
    advice: string;
  };
}

interface TranslatedAdviceCardProps {
  advice: string;
}

const Card = styled.div`
  width: 50vw;
  height: 300px;
  margin: 20vh auto;
  padding: 1em;
  background-color: ${(props) => props.theme.colors.darkGrayishBlue};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  border-radius: 20px;

  @media (max-width: 850px) {
    width: 75vw;
  }

  @media (max-width: 550px) {
    width: 90vw;
    height: 350px;

    & .trace {
        width: 70vw;
    }
  }

  & h1 {
    font-size: 24px;
    color: ${(props) => props.theme.colors.neonGreenFont};
  }

  & div {
    display: flex;
    align-items: center;
    gap: 0.8em;
  }

  & h2 {
    margin: 2em 0;
  }

  & button {
    background-color: ${(props) => props.theme.colors.neonGreen};
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
      box-shadow: 0 0 12px 12px ${(props) => props.theme.colors.neonGreenShadow};
    }
  }
`;

export default function AdviceCard() {
  const [advice, setAdvice] = useState<AdviceCardProps>();
  const [newAdvice, setNewAdvice] = useState(true);
  const [loading, setLoading] = useState(false);
  const [translatedAdvice, setTranslatedAdvice] = useState<TranslatedAdviceCardProps | null>(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://api.adviceslip.com/advice");
      const data = await res.json();
      setAdvice(data);

      if (data && data.slip && data.slip.advice) {
        translateText(data.slip.advice, 'pt')
          .then((translatedText) => {
            setTranslatedAdvice({ advice: translatedText });
          })
          .catch((error) => {
            console.error('Error translating advice:', error);
            setTranslatedAdvice(null);
          });
        }
    }
    fetchData();
  }, [newAdvice]);

  const rollDice = () => {
    setLoading(true);
    setNewAdvice(!newAdvice);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <Card>
      {loading ? (
        <h1> Advice - - -</h1>
      ) : (
        <h1>Advice #{advice && advice.slip.id}</h1>
      )}
      {loading ? (
        <div>
          <h2>Let me think...</h2>
          <Image src={thinking} alt="Emoji thinking" width={50} height={50} />
        </div>
      ) : (
        <h2>{translatedAdvice && translatedAdvice.advice}</h2>
      )}

      <Image className="trace" src={trace} alt="trace" width={400} height={20} priority />

      <button onClick={rollDice}>
        <Image
          src={dice}
          alt="Clique para um novo conselho"
          width={24}
          height={24}
        />
      </button>
    </Card>
  );
}
