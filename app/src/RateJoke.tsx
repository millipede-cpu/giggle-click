import { useState } from "react";

export default function RateJoke() {
  const [happy, setHappy] = useState(false);
  const [sad, setSad] = useState(false);

  return (
    <>
      <button onClick={() => setHappy(!happy)}>Happy</button>
      {happy ? <span className="happy">&#128514;</span> : null}

      <button onClick={() => setSad(!sad)}>Sad</button>
      {sad ? <span className="sad">&#128529;</span> : null}
    </>
  );
}
