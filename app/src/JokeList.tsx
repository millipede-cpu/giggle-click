import React from "react";

interface JokeListProps {
  haJokes: any;
  toggleJoke: any;
  text: string;
  complete: boolean;
}

const JokeList: React.FC<JokeListProps> = (haJokes, toggleJoke) => {
  return (
    <div>Nope</div>
    // <li>
    //   <label
    //     style={{
    //       textDecoration: haJokes.complete ? "line-through" : undefined,
    //     }}
    //   >
    //     <input
    //       type="checkbox"
    //       defaultChecked={haJokes?.complete}
    //       onClick={() => toggleJoke}
    //     />
    //     {haJokes?.text}
    //   </label>
    // </li>
  );
};
export default JokeList;
