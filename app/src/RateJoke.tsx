import { useState } from "react";
import { Link } from "react-router-dom";
import BackButton from "./BackButton";
import NextButton from "./NextButton";

export default function RateJoke() {
  const [happy, setHappy] = useState(false);
  const [sad, setSad] = useState(false);

  return (
    <>
      <Link to={"/joke-fetch"}>
        <NextButton />
      </Link>
      <Link to={"/card-flip-game"}>
        <BackButton />
      </Link>
      <h1>Rate Joke 👍🏼🎭👎🏼</h1>
      <button className="happy-click" onClick={() => setHappy(!happy)}>
        Happy
      </button>
      {happy ? <span className="happy">&#128514;</span> : null}

      <button className="sad-click" onClick={() => setSad(!sad)}>
        Sad
      </button>
      {sad ? <span className="sad">&#128529;</span> : null}
    </>
  );
}
