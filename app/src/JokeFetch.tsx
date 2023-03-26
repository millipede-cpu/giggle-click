import { useState } from "react";
import styled, { keyframes } from "styled-components";
import BackButton from "./BackButton";
import NextButton from "./NextButton";
import { Button } from "../../stories/Button";

// Define a type for the Joke object
interface Joke {
  joke: string;
}

// Define a type for the array of possible review text
type ReviewText = string[];

// Define a type for index state
type IndexState = number;

const buttonText: ReviewText = [
  "Ugh.",
  "🤦🏻‍♂️",
  "omg dad.",
  "you are the worst",
  "seriously",
  "stop it.",
  "please stop",
  "that was the worst one",
];

function JokeFetch(): JSX.Element {
  // Declare state types with hooks

  // Render json from fetchJoke() when handleClick() event fires
  const [joke, setJoke] = useState<string>("");
  // Toggle button with boolean values
  const [toggle, setToggle] = useState<boolean>(false);
  // Randomise array string value "Joke Review" onClick button event fires
  const [index, setIndex] = useState<IndexState>(-1);

  // Declare a constant with type for starting name string
  const startName: string[] = [""];
  // Define the current review text space on the current index
  const currentReview: string = index !== -1 ? buttonText[index] : startName[0];

  // Declare an async function to fetch the joke
  async function fetchJoke(): Promise<Joke> {
    const response = await fetch("https://icanhazdadjoke.com", {
      headers: {
        Accept: "application/json",
      },
    });
    const data = response.json() as Promise<Joke>;
    return data;
  }

  // Declare a function to handle the button click event
  async function handleClick(): Promise<void> {
    const { joke } = await fetchJoke();
    setJoke(joke);
  }

  const jokeTitle = ["D", "a", "d", "J", "o", "k", "e", "s", "🤹🏻‍♂️"];

  return (
    <Container>
      <Title>
        {jokeTitle.map((letter, index) => (
          <span key={index}>{letter}</span>
        ))}
      </Title>
      <TextBox style={{ marginTop: "10rem" }}>
        <Button
          onClick={handleClick}
          primary={false}
          backgroundColor={"rgb(252, 163, 249)"}
          size={"large"}
          label={"Get a Joke"}
        />

        <JokeBox>{joke}</JokeBox>
      </TextBox>
      <Button
        onClick={() => setToggle(!toggle)}
        backgroundColor={"rgb(252, 163, 249)"}
        label={"Show me the giggles"}
      />
      {toggle && <JokeBox>🙈😂🙉</JokeBox>}
      <JokeBox>{currentReview}</JokeBox>
      <Button
        onClick={() => setIndex(Math.floor(Math.random() * buttonText.length))}
        backgroundColor={"rgb(252, 163, 249)"}
        label={"Joke Review"}
      />
      <JokeBox>
      <NextButton to={"/"} />
      <BackButton to={"/rate-joke"} />
      </JokeBox>
    </Container>
  );
}

export default JokeFetch;

const DURATION = "6s";

const jump = keyframes`
  33% {
    text-shadow: 0 60px #f37121, 0 100px #f2aaaa;
 }
  50% {
    transform: translate(0, 0) rotate(-4deg);
    text-shadow: 0 0px #8fc0a9, 0 0px #84a9ac;
 }
  66.67% {
    text-shadow: 0 -60px #d54062, 0 -100px #8fc0a9;
 }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #ffd574;
  height: 100vh;
  width: 100%;
`;

const Title = styled.div`
  color: purple;
  margin: 0 auto;
  max-width: 50rem;
  text-align: center;

  span {
    -webkit-text-stroke-width: 1.25px;
    -webkit-text-stroke-color: #000;
    font-size: 4rem;
    text-shadow: 0 0px #f3c623, 0 0px #f2aaaa;
    transform: translate(0, 100%) rotate(4deg);
    display: inline-block;
    font-family: "Capriola", sans-serif;
    color: #fff;
    animation-name: ${jump};
    animation-duration: ${DURATION};
    animation-direction: ease-in-out;
    animation-iteration-count: infinite;
  }

  span:nth-child(1) {
    animation-delay: 120ms;
  }
  span:nth-child(2) {
    animation-delay: 240ms;
  }
  span:nth-child(3) {
    animation-delay: 360ms;
  }
  span:nth-child(4) {
    animation-delay: 480ms;
    margin-left: 2rem;
  }
  span:nth-child(5) {
    animation-delay: 600ms;
  }
  span:nth-child(6) {
    animation-delay: 720ms;
  }
  span:nth-child(7) {
    animation-delay: 840ms;
  }
  span:nth-child(8) {
    animation-delay: 860ms;
  }
  span:nth-child(9) {
    animation-delay: 900ms;
  }
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

const JokeBox = styled.p`
  font-family: "Capriola", sans-serif;
  font-weight: 400;
  margin: 0 auto;
  padding: 2rem;
`;
