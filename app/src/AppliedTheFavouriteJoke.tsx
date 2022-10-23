import React from "react";
import { IJokes } from "./interfaces";

interface Props {
  joke: IJokes;
}

export const AppliedTheFavouriteJoke = ({ joke }: Props) => {
  // placing a checkbox in each list item
  // the checkbox will be checked once complete type is true.
  // This will have a label with the text of the joke.
  return (
    <>
      <div>
        {joke.jokeName} {joke.punName}
      </div>
    </>
  );
};
