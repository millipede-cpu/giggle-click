import React from "react";

// props being added above the component.
// once the props are declared then the AppliedTheFavouriteJoke will be a functional component. This then passes the props as generic.

// the NextBigJoke will have text as string and complete property as boolean.
interface NextBigJoke {
  text: string;
  complete: boolean;
}

interface props {
  newJokeToLaugh: NextBigJoke;
}

export const AppliedTheFavouriteJoke: React.FC<props> = (props) => {
  return <li>HAHAHA THATS HILARIOUS!!!</li>;
};
