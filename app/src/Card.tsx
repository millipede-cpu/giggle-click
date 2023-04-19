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

const Card: React.FC<CardProps> = ({ value, faceUp, onClick, cards }) => {
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
};

export default Card;
