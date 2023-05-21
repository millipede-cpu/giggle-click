import styled from "styled-components";
import BackButton from "./BackButton";
import NextButton from "./NextButton";
import React, { useCallback, useState } from "react";
import { Button } from "../stories/Button";

// Define a type for the Joke object
interface Joke {
  id: number;
  type: string;
  setup: string;
  punchline: string;
}

export default function JokeRandomiser() {
  // Render json from fetchJoke() when handleClick() event fires
  const [joke, setJoke] = useState<Joke | null>(null);
  //  useState with boolean type to initially hide the punchline by default
  const [isHidden, setIsHidden] = useState<boolean>(false);
  // useCallback to toggle the boolean state of the punchline
  const toggleJokePunchline = useCallback(
    () => setIsHidden((isHidden) => !isHidden),
    [setIsHidden]
  );

  // Declare an async function to fetch a random joke
  const randomJoke = async (): Promise<Joke> => {
    const response = await fetch(
      "https://official-joke-api.appspot.com/random_joke",
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    const data = (await response.json()) as Joke;
    return data;
  };

  // Declare a function to handle the button click event
  async function handleClick(): Promise<void> {
    try {
      const jokeData = await randomJoke();
      setJoke(jokeData);
    } catch (error) {
      console.error("There was an error", error);
    }
  }

  return (
    <PageStyle>
      <Title>Joke Randomiser 🃏🔀</Title>
      <NextButton to={"/card-flip-game"} />
      <BackButton to={"/"} />
      <Button
        onClick={handleClick}
        primary={false}
        backgroundColor={"rgb(252, 163, 249)"}
        size={"large"}
        label={"Get Random Joke"}
        style={{ margin: "2rem" }}
      />
      {joke && (
        <div>
          <JokeBox>{joke.setup}</JokeBox>
          <Button
            onClick={toggleJokePunchline}
            backgroundColor={"rgb(252, 163, 249)"}
            size={"large"}
            label={"🥁🥁🥁 Click for giggles"}
          />
          {isHidden ? <JokeBox>{joke.punchline}</JokeBox> : null}
        </div>
      )}
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

const JokeBox = styled.p`
  font-family: "Capriola", sans-serif;
  font-weight: 400;
  margin: 0 auto;
  padding: 2rem;
`;
