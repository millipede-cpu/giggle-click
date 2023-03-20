import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import BackButton from "./BackButton";
import NextButton from "./NextButton";
import { Button } from "../../stories/Button";

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
      <Title className="jokeWrapper">
        <span>D</span>
        <span>a</span>
        <span>d</span>
        {/* <br></br> */}
        <span>J</span>
        <span>o</span>
        <span>k</span>
        <span>e</span>
        <span>s</span>
        {/* <br></br> */}
        <span>🤹🏻‍♂️</span>
      </Title>
      <div>
        {joke === "" ? (
          <Button
            onClick={handleClick}
            primary={false}
            backgroundColor={"pink"}
            size={"large"}
            label={"Get a Joke"}
            style={undefined}
          />
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

const DURATION = "6s";

const jump = keyframes`
  33% {
    text-shadow: 0 60px #f37121, 0 150px #f2aaaa;
 }
  50% {
    transform: translate(0, 0) rotate(-4deg);
    text-shadow: 0 0px #8fc0a9, 0 0px #84a9ac;
 }
  66.67% {
    text-shadow: 0 -60px #d54062, 0 -150px #8fc0a9;
 }
`;

const Title = styled.div`
  font-size: 3rem;
  color: purple;
  margin-left: auto;
  margin-right: auto;
  max-width: 60rem;
  width: 100vw;
  text-align: center;
  padding: 5rem;

  span {
    -webkit-text-stroke-width: 1.25px;
    -webkit-text-stroke-color: #000;
    font-size: 100px;
    text-shadow: 0 0px #f3c623, 0 0px #f2aaaa;
    transform: translate(0, 100%) rotate(4deg);
    display: inline-block;
    // font-family: "Titan One", cursive;
    // font-family: "Source Sans Pro", sans-serif;
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
