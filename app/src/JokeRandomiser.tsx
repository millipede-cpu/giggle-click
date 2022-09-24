import styled from "styled-components";
import NextButton from "./NextButton";

export default function JokeRandomiser() {
  return (
    <>
      <Title>Joke Randomiser</Title>
      <NextButton />
    </>
  );
}

const Title = styled.h1`
  font-size: 3rem;
  color: #bb7cf8;
`;
