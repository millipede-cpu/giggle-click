import React from "react";
import styled from "styled-components";
import AddJoke from "./AddJoke";
import BackButton from "./BackButton";
import NextButton from "./NextButton";

export default function Home(): JSX.Element {
  

  return (
    <>
      <HomeContainer>
        <NextButton to={"/joke-randomiser"} />
        <BackButton to={"/joke-fetch"} />
        <StyledTitle>Giggle Click</StyledTitle>
        <div className="card">
          
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
  position:relative;
`;

const StyledTitle = styled.h1`
  color: #fd7094;
`;
