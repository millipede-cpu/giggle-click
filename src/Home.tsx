import React, { useState } from "react";
import styled from "styled-components";
import AddJoke from "./AddJoke";
import BackButton from "./BackButton";
import NextButton from "./NextButton";
import { Button } from "../stories/Button";

export default function Home(): JSX.Element {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <HomeContainer>
        <NextButton to={"/joke-randomiser"} />
        <BackButton to={"/joke-fetch"} />
        <StyledTitle>Giggle Click</StyledTitle>
        <div className="card">
          <Button
            className="counter-button incremented-number"
            onClick={() => setCount((count) => count + 1)}
            label={`Count is ${count}`}
          />
          <AddJoke status={""} />
        </div>
      </HomeContainer>
    </>
  );
}

const HomeContainer = styled.div`
 background-color: #add8e6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin:0;
  padding:0;
  box-sizing: border-box;
  width: 100vw;
  min-height: 100vh;
`;

const StyledTitle = styled.h1`
  color: #fd7094;
`;
