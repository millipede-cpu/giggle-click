import styled from "styled-components";
import NextButton from "./NextButton";

export default function CardFlipGame() {
  return (
    <>
      <NextButton />
      <Title>Card Flip Game</Title>
    </>
  );
}

const Title = styled.h1`
  font-size: 3rem;
  color: #0eb0f3;
`;
