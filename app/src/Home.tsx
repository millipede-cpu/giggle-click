import React, { useState } from "react";
import styled from "styled-components";
import AddJoke from "./AddJoke";
import BackButton from "./BackButton";
import NextButton from "./NextButton";

interface Joke {
  text: string;
  complete: boolean;
}

interface HomeProps {
  onClick: () => void;
}

export default function Home({ onClick }: HomeProps): JSX.Element {
  const [count, setCount] = useState<number>(0);
  const newJokeToLaugh: Joke[] = [
    {
      text: "What do you call a yam with a broom ? A sweep potato.",
      complete: false,
    },
    {
      text: "Why did the ice cream van break down? Because there was a rocky road!",
      complete: true,
    },
  ];
  const [haJokes, setHaJokes] = useState<Joke[]>(newJokeToLaugh);

  const toggleJoke = (selectedJoke: Joke) => {
    const newJokes = haJokes.map((joke) => {
      if (joke === selectedJoke) {
        return {
          ...joke,
          complete: !joke.complete,
        };
      }
      return joke;
    });
    setHaJokes(newJokes);
  };

  return (
    <>
      <AppStyle>
        <NextButton to={"/joke-randomiser"} />
        <BackButton to={"/joke-fetch"} />
        <StyledTitle>Giggle Click</StyledTitle>
        {/* <ul>
          {haJokes.map((joke) => (
            <li key={joke.text}> */}
        {/* <label
                style={{
                  textDecoration: joke.complete ? "line-through" : undefined,
                }}
              >
                {/* <input
                  type="checkbox"
                  defaultChecked={joke.complete}
                  onClick={() => toggleJoke(joke)}
                /> }
                {joke.text}
              // </label>
            // </li> */}
        {/* ))} */}
        {/* </ul> */}
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <React.Fragment>
            <AddJoke status={""} />
          </React.Fragment>
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
