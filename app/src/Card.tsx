import React from "react";

interface CardProps {
  value: string;
  faceUp: boolean;
  onClick: () => void;
  cards: string[];
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
