import React, { useState } from "react";

export default function AddJoke() {
  const [joke, setAddJoke] = useState("");
  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // alert(joke);
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="joke"></label>
      <input
        placeholder="Add a new joke"
        value={joke}
        onChange={(e) => setAddJoke(e.target.value)}
        type="text"
        id="joke"
        name="joke"
      ></input>
      <button type="submit" className="submit-joke">
        Submit Joke
      </button>
      <span>{joke}</span>
    </form>
  );
}
