import { Link } from "react-router-dom";
import styled from "styled-components";
import BackButton from "./BackButton";
import NextButton from "./NextButton";

export default function CardFlipGame() {
  return (
    <>
      <Link to={"/rate-joke"}>
        <NextButton />
      </Link>
      <Link to={"/joke-randomiser"}>
        <BackButton />
      </Link>
      <Title>Card Flip Game 🃟⤵️🃏</Title>
    </>
  );
}

const Title = styled.h1`
  font-size: 3rem;
  color: #0eb0f3;
`;
