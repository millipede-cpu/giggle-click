import styled from "styled-components";
import BackButton from "./BackButton";
import NextButton from "./NextButton";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./App";
import { useState } from "react";
import Card from "./Card";
import * as React from "react";

interface CardsProps {
  cards?: string[];
}

export default function CardFlipGame({ cards }: CardsProps): JSX.Element {
  const [selectedCards, setSelectedCards] = useState<string[]>([]);

  const handleCardClick = (value: string) => {
    if (selectedCards.length === 2) {
      setSelectedCards([]);
    } else {
      setSelectedCards([...selectedCards, value]);
    }
  };

  const matchCards = (card1: string, card2: string) => {
    return card1 === card2;
  };
  try {
    // Your code that could potentially throw an error goes here

    return (
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={(details) => {
          // Reset the state of your app so the error doesn't happen again
        }}
      >
        <NextButton to={"/rate-joke"} />
        <BackButton to={"/joke-randomiser"} />
        <Title>Card Flip Game 🃟⤵️🃏</Title>

        <div>
          {/** cards array is given the option to be undefined with a question mark,
           * this needs to be added to the interface cards type as well.
           * If the array has an error, the error handling will show an error
           * message so the issue can be resolved.
           */}
          {cards?.map((card) => (
            <Card
              key={card}
              value={card}
              faceUp={
                selectedCards.includes(card) ||
                matchCards(selectedCards[0], selectedCards[1])
              }
              onClick={() => handleCardClick(card)}
              cards={[]}
            />
          ))}
        </div>
      </ErrorBoundary>
    );
  } catch (error) {
    // Your error handling code goes here
    console.error("An error occurred:", error);
    return (
      <p>
        😱😱😱😱😱😱😱😱😱😱😱😱 Sorry, something went wrong. Theres no card
        flip game for us today NOOOOOOO!!!!!!! 😲😲😲😲😲😲😲😲
      </p>
    );
  }
}

const Title = styled.h1`
  font-size: 3rem;
  color: #0eb0f3;
`;

// wrapped the code that could potentially throw an error in a try block. If an error is thrown, execution will jump to the catch block, where you can handle the error in whatever way you see fit.

// In the catch block, I've simply logged the error to the console and returned a simple error message.
