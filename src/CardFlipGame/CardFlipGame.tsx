import { useEffect, useState } from "react";
import styled from "styled-components";
import BackButton from "../BackButton/BackButton";
import NextButton from "../NextButton/NextButton";
import Card from "../Card/Card";
import React from "react";

interface CardsProps {
  cards?: string[];
}

interface CardData {
  id: number;
  jokeId: number;
  type: "setup" | "punchline";
  value: string;
}

// Define a type for the Joke object
interface Joke {
  id: number;
  type: string;
  setup: string;
  punchline: string;
}

export default function CardFlipGame({ cards }: CardsProps): JSX.Element {
  const [deck, setDeck] = useState<CardData[]>([]);
  const [flipped, setFlipped] = useState<number[]>([]);
  const [matched, setMatched] = useState<number[]>([]);
  const [lockBoard, setLockBoard] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  // Shuffle and initialise the deck on mount
  useEffect(() => {
async function setupDeck() {
  let cardData: CardData[] = [];
  if (cards && cards.length > 0) {
    cardData = cards.flatMap((value, i) => [
      {id: i + Math.random(), jokeId: i, type: "setup", value},
      {id: i + Math.random(), jokeId: i, type: "punchline", value}
    ])
  } else {
    // Fetch jokes and use their setup or punchline as card values
    const jokes = await randomTen();
    cardData = jokes.flatMap(joke => [
     { id: joke.id + Math.random(), jokeId: joke.id, type: "setup", value: joke.setup },
     { id: joke.id + 1000 + Math.random(), jokeId: joke.id, type: "punchline", value: joke.punchline }
    ]);
      const shuffled = cardData.sort(() => Math.random() - 0.5);
    
      setDeck(shuffled);
    }
  }
  setupDeck();
}, [cards, refreshKey]);


  const handleCardClick = (id: number) => {
    if (lockBoard || flipped.includes(id) || matched.includes(id)) return;

    const newFlipped = [...flipped, id];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setLockBoard(true);
      const [first, second] = newFlipped;
      const firstCard = deck.find((card) => card.id === first);
      const secondCard = deck.find((card) => card.id === second);

      // Only match if both cards are of the same jokeId
      if (firstCard && 
        secondCard && 
        firstCard.jokeId === secondCard.jokeId &&
      firstCard.type === "setup" && 
      secondCard.type === "punchline"
    ) {
        // If they match, add both to matched state

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


  // Declare an async function to fetch ten random jokes
  const randomTen = async (): Promise<Joke[]> => {
    const response = await fetch(
      "https://official-joke-api.appspot.com/random_ten",
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    const data = (await response.json()) as Joke[];
    return data;
  };

  // Check if all cards are matched
  const allMatched = deck.length > 0 && matched.length === deck.length;

  //  Handle refresh button logic here with onclick function
  const handleRefresh = () => setRefreshKey((num) => num + 1);

  return (
    <Container>
      <NextButton to="/rate-joke" />
      <BackButton to="/joke-randomiser" />
      <Title>Card Flip Game 🃏</Title>
      {allMatched ?? (
        <RefreshButton onClick={handleRefresh}>
          Refresh ⟳
        </RefreshButton>
      )} 
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

const RefreshButton = styled.button`
background-color: #0eb0f3;
color: white;
border: 2px solid navy;
border-radius: 5px;
margin: 2rem;`
