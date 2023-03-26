import styled from "styled-components";
import BackButton from "./BackButton";
import NextButton from "./NextButton";

interface Props {}

const CardFlipGame: Props = (): JSX.Element => {
  return (
    <>
      <NextButton to={"/rate-joke"} />
      <BackButton to={"/joke-randomiser"} />
      <Title>Card Flip Game 🃟⤵️🃏</Title>
    </>
  );
};

const Title = styled.h1`
  font-size: 3rem;
  color: #0eb0f3;
`;

export default CardFlipGame;
