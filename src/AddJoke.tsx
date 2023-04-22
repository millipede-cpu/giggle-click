import { useState, ChangeEvent, FormEvent } from "react";
import { AppliedTheFavouriteJoke } from "./AppliedTheFavouriteJoke";
import { IJokes } from "./interfaces";
import React from "react";

// Add types for the props object
interface AddJokeProps {
  status: string;
}

interface InputEvent extends ChangeEvent<HTMLInputElement> {
  target: HTMLInputElement;
}

export default function AddJoke({
  status = "empty",
}: AddJokeProps): JSX.Element {
  // Add type annotations for the state variables
  const [joke, setJoke] = useState<string>("");
  const [pun, setPun] = useState<string>("");
  const [jokeList, setJokeList] = useState<IJokes[]>([]);

  // conditional statement to set status to 'success' if user submits correct answer
  if (status === "success") {
    return <h1>That's right!</h1>;
  }

  // Add a type annotation for the event object
  const handleChange = (event: InputEvent): void => {
    event.preventDefault();
    if (event.target.name === "joke") {
      setJoke(event.target.value);
    } else {
      setPun(event.target.value);
    }
  };

  // Add return type for the function
  const addJoke = (): void => {
    const newJoke: IJokes = { jokeName: joke, punName: pun };
    setJokeList([...jokeList, newJoke]);
    setJoke("");
  };

  // Add return type for the function
  const addPun = (): void => {
    const newPun: IJokes = { jokeName: joke, punName: pun };
    setJokeList([...jokeList, newPun]);
    setPun("");
  };

  // Add type annotation for the event object.
  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="joke">Add your joke</label>
      <input
        placeholder="Type something funny"
        type="text"
        defaultValue={joke} // Use value instead of defaultValue
        id="joke"
        name="joke"
        onChange={handleChange}
      />
      <label htmlFor="pun">Add your pun</label>
      <input
        placeholder="What's the pun?"
        type="text"
        id="pun"
        defaultValue={pun} // Use value instead of defaultValue
        name="pun"
        onChange={handleChange}
      />

      <button type="submit" className="submit-joke" onClick={addJoke}>
        Add Joke
      </button>
      <button type="submit" className="submit-pun" onClick={addPun}>
        Add Pun
      </button>
      <div className="jokeList">
        {jokeList.map(
          (joke: IJokes, key: number): JSX.Element => (
            <AppliedTheFavouriteJoke key={key} joke={joke} />
          )
        )}
      </div>
    </form>
  );
}
