import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import BackButton from "./BackButton";
import NextButton from "./NextButton";

const buttonText = [
  "Ugh.",
  "🤦🏻‍♂️",
  "omg dad.",
  "you are the worst",
  "seriously",
  "stop it.",
  "please stop",
  "that was the worst one",
];

const JokeFetch = () => {
  /* Render json from fetchJoke()
     when handleClick() event fires */
  const [joke, setJoke] = useState("");
  /* Toggle button with boolean values  */
  const [toggle, setToggle] = useState(false);
  /* Randomise array string value "Joke Review"
     onClick button event fires */
  const [index, setIndex] = useState(-1);

  const startName = [""];
  const randomJokeReview = index !== -1 ? buttonText[index] : startName[0];

  async function fetchJoke() {
    const response = await fetch("https://icanhazdadjoke.com", {
      headers: {
        Accept: "application/json",
      },
    });
    const data = response.json();
    return data;
  }

  async function handleClick() {
    const { joke } = await fetchJoke();
    setJoke(joke);
  }

  return (
    <>
      <Title>Dad Jokes 🤹🏻‍♂️</Title>
      <div>
        {joke === "" ? (
          <button onClick={handleClick}>Get a Joke</button>
        ) : (
          <p>Dad Jokes: {joke}</p>
        )}
      </div>
      <button onClick={() => setToggle(!toggle)}>Show me the giggles</button>
      {toggle && <span>🙈😂🙉</span>}
      <p>{randomJokeReview}</p>
      <button
        onClick={() => setIndex(Math.floor(Math.random() * buttonText.length))}
      >
        Joke Review
      </button>

      <Link to={"/"}>
        <NextButton />
      </Link>

      <Link to={"/rate-joke"}>
        <BackButton />
      </Link>
    </>
  );
};

export default JokeFetch;

const Title = styled.h1`
  font-size: 3rem;
  color: #f79d44;
`;
