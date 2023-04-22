import React from "react";
import { IJokes } from "./interfaces";

interface Props {
  joke: IJokes;
}
export const AppliedTheFavouriteJoke = ({ joke }: Props): JSX.Element => {
  // placing a checkbox in each list item
  // the checkbox will be checked once complete type is true.
  // This will have a label with the text of the joke.
  return (
    <div className="showJokePun">
      {joke.jokeName} {joke.punName}
    </div>
  );
};
