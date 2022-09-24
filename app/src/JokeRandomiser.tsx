import { Link } from "react-router-dom";
import styled from "styled-components";
import NextButton from "./NextButton";

export default function JokeRandomiser() {
  return (
    <>
      <Title>Joke Randomiser 🃏🔀</Title>
      <Link to={"/card-flip-game"}>
        <NextButton />
      </Link>
    </>
  );
}

const Title = styled.h1`
  font-size: 3rem;
  color: #bb7cf8;
`;
