import { useState } from "react";
import BackButton from "./BackButton";
import NextButton from "./NextButton";

// export default function RateJoke() {
//   const [happy, setHappy] = useState(false);
//   const [sad, setSad] = useState(false);

//   return (
//     <>
//       <NextButton to={"/joke-fetch"} />
//       <BackButton to={"/card-flip-game"} />
//       <h1>Rate Joke 👍🏼🎭👎🏼</h1>
//       <button className="happy-click" onClick={() => setHappy(!happy)}>
//         Happy
//       </button>
//       {happy ? <span className="happy">&#128514;</span> : null}

//       <button className="sad-click" onClick={() => setSad(!sad)}>
//         Sad
//       </button>
//       {sad ? <span className="sad">&#128529;</span> : null}
//     </>
//   );
// }

export default function RateJoke() {
  const [happy, setHappy] = useState(false);
  const [sad, setSad] = useState(false);

  // wrap the code that might throw an error in a try-catch block
  try {
    return (
      <>
        <NextButton to={"/joke-fetch"} />
        <BackButton to={"/card-flip-game"} />
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
  } catch (error) {
    // handle the error here
    console.error("Error:", error);
    return <p>Oh dear an error occured, no Ratings for us today</p>;
  }
}

// We wrapped the code that might throw an error in a try block. This includes the JSX code that generates the UI, as well as the onClick handlers that update the component's state.
// If an error is thrown anywhere in the try block, execution will jump to the catch block.
// In the catch block, we log the error to the console using console.error, and return a simple error message to the UI.
// By adding this error handling, we're making our code more robust and defensive. If something unexpected happens during the execution of the component, we'll be able to handle it gracefully and provide feedback to the user.
