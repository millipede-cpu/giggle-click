import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AddJoke from "./AddJoke";
import { AppliedTheFavouriteJoke } from "./AppliedTheFavouriteJoke";
import JokeList from "./JokeList";
import NextButton from "./NextButton";

// const addJoke: AddJoke = (text: string) => {
//   const newTodo = { text, complete: false };
//   setTodos([...todos, newTodo]);
// };

export default function Home({ onClick }: { onClick: () => void }) {
  const [count, setCount] = useState(0);
  const newJokeToLaugh = [
    {
      text: "What do you call a yam with a broom ? A sweep potato.",
      complete: false,
    },
    {
      text: "Why did the ice cream van break down? Because there was a rocky road!",
      complete: true,
    },
  ];
  // create array state to store joke data
  const [haJokes, setHaJokes] = useState(newJokeToLaugh);

  const toggleJoke = (selectedJoke: { text: string; complete: boolean }) => {
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

  const addJoke = (newerJoke: string) => {
    newerJoke.trim() !== "" &&
      setHaJokes([...haJokes, { text: newerJoke, complete: false }]);
  };

  return (
    <>
      <AppStyle>
        <Link to={"/joke-randomiser"}>
          <NextButton {...onClick} />
        </Link>
        <StyledTitle>Giggle Click</StyledTitle>
        <ul>
          <AppliedTheFavouriteJoke
            newJokeToLaugh={newJokeToLaugh[0]}
            toggleJoke={toggleJoke}
          />
          <AppliedTheFavouriteJoke
            newJokeToLaugh={newJokeToLaugh[1]}
            toggleJoke={toggleJoke}
          />
        </ul>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          {/* <AddJoke addJoke={addJoke} /> */}
          <React.Fragment>
            <JokeList
              haJokes={haJokes}
              toggleJoke={toggleJoke}
              text={""}
              complete={false}
            />
            <AddJoke jokeText={""} />
          </React.Fragment>
        </div>
      </AppStyle>
    </>
  );
}

const AppStyle = styled.div`
  background-color: #add8e6;
  display: flex;
  // flex-wrap: nowrap;
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
function useInput() {
  throw new Error("Function not implemented.");
}
