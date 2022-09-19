import React from "react";

// props being added above the component.
// once the props are declared then the AppliedTheFavouriteJoke will be a functional component. This then passes the props as generic.

// the NextBigJoke will have text as string and complete property as boolean.
// interface NextBigJoke {
//   text: string;
//   complete: boolean;
// }

interface props {
  newJokeToLaugh: NextBigJoke;
}

export const AppliedTheFavouriteJoke: React.FC<props> = ({
  newJokeToLaugh,
}) => {
  // placing a checkbox in each list item
  // the checkbox will be checked once complete type is true.
  // This will have a label with the text of the joke.
  return (
    <li>
      <label
        htmlFor="add-joke"
        style={{
          textDecoration: newJokeToLaugh.complete ? "line-through" : undefined,
        }}
      >
        Add Joke
      </label>
      <input type="checkbox" checked={newJokeToLaugh.complete} />
      {newJokeToLaugh.text}
      {/* HAHAHA THATS HILARIOUS!!! */}
    </li>
  );
};
