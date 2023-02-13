import React from "react";

interface JokeFetchProps {
  jokeHolder: string;
  jokeButton: string;
}

async function fetchJoke() {
  const response = await fetch("https://icanhazdadjoke.com", {
    headers: {
      Accept: "application/json",
    },
  });
  return response.json();
}

async function handleClick() {
  const { joke } = await fetchJoke();
  console.log(joke);
}
const JokeFetch: React.FC<JokeFetchProps> = (jokeHolder, jokeButton) => {
  return (
    <div>
      Random Joke to be fetched from https://icanhazdadjoke.com/
      <p>Dad Jokes </p>
      <button onClick={handleClick}>Get a Joke</button>
    </div>
  );
};

export default JokeFetch;
