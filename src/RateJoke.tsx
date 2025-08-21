import { useState } from "react";
import BackButton from "./BackButton";
import NextButton from "./NextButton";
import React from "react";
import styled from "styled-components";
import { Button } from "../stories/Button";

const RateJokeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color:rgb(239, 245, 183);
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: center;   
  align-items: center;     
  gap: 2rem;
  width: 100%;
  min-height: 200px;   
`

const ButtonColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;     
  justify-content: center;   
  height: 100%;
`;

const HappyButtonResult = styled.div`
  font-size: 2rem;
  height: 2rem;
`;

const SadButtonResult = styled.div`
 font-size: 2rem;
 height: 2rem;
`

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #333;
`;

export default function RateJoke() {
  const [happy, setHappy] = useState(false);
  const [sad, setSad] = useState(false);

  // wrap the code that might throw an error in a try-catch block
  try {
    return (
      <>
      <NextButton to={"/joke-fetch"} />
      <BackButton to={"/card-flip-game"} />
      <RateJokeContainer>
        <Title>Rate Your Joke 🎭</Title>
        <ButtonRow>
        <ButtonColumn>
          <Button
          className="happy-click"
          onClick={() => setHappy(!happy)}
          data-testid="happy-button"
          label="Happy"
          />
          {happy ? (
          <HappyButtonResult className="happy" data-testid="happy-emoji">
            &#128514;
          </HappyButtonResult>
          ) :  null}
     
        </ButtonColumn>
        <ButtonColumn>
          <Button
          className="sad-click"
          onClick={() => setSad(!sad)}
          data-testid="sad-button"
          label="Sad"
          />
          {sad ? (
          <SadButtonResult className="sad" data-testid="sad-emoji">
            &#128529;
          </SadButtonResult>
          ) : null}
        </ButtonColumn>
        </ButtonRow>
      </RateJokeContainer>
      </>
    );
  } catch (error) {
    // handle the error here
    console.error("Error:", error);
    return <p>Oh dear an error occured, no Ratings for us today</p>;
  }
}
