import React from "react";
import styled from "styled-components";

interface CardProps {
  value: string;
  isFlipped: boolean;
  onClick: () => void;
}

export default function Card({ value, isFlipped, onClick }: CardProps) {
  return (
    <CardWrapper onClick={onClick}>
      <CardInner isFlipped={isFlipped}>
        <CardFront>{value}</CardFront>
        <CardBack>🂠</CardBack>
      </CardInner>
    </CardWrapper>
  );
}

// Styled with flip animation
const CardWrapper = styled.div`
  perspective: 1000px;
`;

const CardInner = styled.div<{ isFlipped: boolean }>`
  width: 100px;
  height: 140px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s;
  transform: rotateY(${(props) => (props.isFlipped ? 180 : 0)}deg);
  cursor: pointer;
`;

const CardFace = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
`;

const CardFront = styled(CardFace)`

  background: #222;
  color: #f1c40f;
  transform: rotateY(180deg);
`;

const CardBack = styled(CardFace)`
  background: #114;
  color: #87fced;
`;
