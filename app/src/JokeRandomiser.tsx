import styled from "styled-components";
import BackButton from "./BackButton";
import NextButton from "./NextButton";

export default function JokeRandomiser() {
  return (
    <PageStyle>
      <Title>Joke Randomiser 🃏🔀</Title>
      <NextButton to={"/card-flip-game"} />
      <BackButton to={"/"} />
    </PageStyle>
  );
}

const PageStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #df5d3d;
  height: 100vh;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #bb7cf8;
`;
