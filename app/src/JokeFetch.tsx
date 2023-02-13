import React from "react";

interface JokeFetchProps {
  jokeRandom: string;
}

const JokeFetch: React.FC<JokeFetchProps> = (jokeRandom) => {
  return <div>Random Joke to be fetched from https://icanhazdadjoke.com/</div>;
};

export default JokeFetch;
