import { useEffect, useState } from "react";
import styled from "styled-components";
import BackButton from "./BackButton";
import NextButton from "./NextButton";
import Card from "./Card";
import React from "react";

interface CardsProps {
  cards?: string[];
}

interface CardData {
  id: number;
  value: string;
}

export default function CardFlipGame({ cards }: CardsProps): JSX.Element {
  const defaultCards = cards ?? ["A", "B", "C", "A", "B", "C"];
  const [deck, setDeck] = useState<CardData[]>([]);
  const [flipped, setFlipped] = useState<number[]>([]);
  const [matched, setMatched] = useState<number[]>([]);
  const [lockBoard, setLockBoard] = useState(false);

  // Shuffle and initialise the deck on mount
  useEffect(() => {
    const shuffled = [...defaultCards]
      .flatMap((value) => [value, value]) // Ensure pairs
      .map((value, i) => ({ id: i + Math.random(), value }))
      .sort(() => Math.random() - 0.5);
    setDeck(shuffled);
  }, [cards]);

  const handleCardClick = (id: number) => {
    if (lockBoard || flipped.includes(id) || matched.includes(id)) return;

    const newFlipped = [...flipped, id];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setLockBoard(true);
      const [first, second] = newFlipped;
      const firstCard = deck.find((card) => card.id === first);
      const secondCard = deck.find((card) => card.id === second);

      if (firstCard && secondCard && firstCard.value === secondCard.value) {
        setMatched((prev) => [...prev, first, second]);
        setTimeout(() => {
          setFlipped([]);
          setLockBoard(false);
        }, 1000);
      } else {
        setTimeout(() => {
          setFlipped([]);
          setLockBoard(false);
        }, 1000);
      }
    }
  };

  return (
    <Container>
      <NextButton to="/rate-joke" />
      <BackButton to="/joke-randomiser" />
      <Title>Card Flip Game 🃏</Title>
      <CardGrid>
        {deck.map((card) => (
          <Card
            key={card.id}
            value={card.value}
            isFlipped={flipped.includes(card.id) || matched.includes(card.id)}
            onClick={() => handleCardClick(card.id)}
          />
        ))}
      </CardGrid>
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #0eb0f3;
`;

const CardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 3rem;
`;
