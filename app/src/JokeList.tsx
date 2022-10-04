import React from "react";

interface Props {
  haJokes?: {
    text: string;
    complete: boolean;
  };
  toggleJoke: ToggleJoke;
}

interface Jokes {
  text: string;
  complete: boolean;
}

const JokeList: React.FC<Props> = ({ haJokes, toggleJoke }): any => {
  return (
    <li>
      <label
        style={{
          textDecoration: haJokes?.complete ? "line-through" : undefined,
        }}
      >
        <input
          type="checkbox"
          checked={haJokes?.complete}
          onClick={() => {
            toggleJoke(haJokes);
          }}
        />{" "}
        {haJokes?.text}
      </label>
    </li>
  );
};
export default JokeList;
