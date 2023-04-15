import React, { useState } from "react";
import styled from "styled-components";
import AddJoke from "./AddJoke";
import BackButton from "./BackButton";
import NextButton from "./NextButton";
import { Button } from "../../stories/Button";

export default function Home(): JSX.Element {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <AppStyle>
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
      </AppStyle>
    </>
  );
}

const AppStyle = styled.div`
  background-color: #add8e6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  height: 100vh;
`;

const StyledTitle = styled.h1`
  color: #fd7094;
`;
