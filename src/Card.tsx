import React from "react";

// interface CardProps {
//   value: string;
//   faceUp: boolean;
//   onClick: () => void;
//   cards: string[];
// }

interface CardProps {
  value: string;
  faceUp: boolean;
  onClick: () => void;
  cards: string[]; // new property representing the array of cards
}

export default function Card({
  value,
  faceUp,
  onClick,
  cards,
}: CardProps): JSX.Element {
  return (
    <div onClick={onClick}>
      {faceUp ? (
        <span>{value}</span>
      ) : (
        <span role="img" aria-label="card-back">
          🂠
        </span>
      )}
    </div>
  );
}
