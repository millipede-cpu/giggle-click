import { useState, ChangeEvent } from "react";
import { AppliedTheFavouriteJoke } from "./AppliedTheFavouriteJoke";
import { IJokes } from "./interfaces";

interface AddJokeProps {
  status: string;
}

export default function AddJoke({ status = "empty" }: AddJokeProps) {
  const [joke, setJoke] = useState<string>("");
  const [pun, setPun] = useState<string>("");
  const [jokeList, setJokeList] = useState<IJokes[]>([]);

  // conditional statement to set status to 'success' if user submits correct answer
  if (status === "success") {
    return <h1>That's right!</h1>;
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    if (event.target.name === "joke") {
      setJoke(event.target.value);
    } else {
      setPun(event.target.value);
    }
  };

  const addJoke = (): void => {
    const newJoke = { jokeName: joke, punName: pun };
    setJokeList([...jokeList, newJoke]);
    setJoke("");
  };

  const addPun = (): void => {
    const newPun = { jokeName: joke, punName: pun };
    setJokeList([...jokeList, newPun]);
    setPun("");
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="joke">Add your joke</label>
      <input
        placeholder="Type something funny"
        type="text"
        defaultValue={joke}
        id="joke"
        name="joke"
        onChange={handleChange}
      />
      <label htmlFor="pun">Add your pun</label>
      <input
        placeholder="What's the pun?"
        type="text"
        id="pun"
        defaultValue={pun}
        name="pun"
        onChange={handleChange}
      />

      <button type="submit" onClick={addJoke}>
        Add Joke
      </button>
      <button type="submit" onClick={addPun}>
        Add Pun
      </button>
      <div className="jokeList">
        {jokeList.map((joke: IJokes, key: number) => {
          return <AppliedTheFavouriteJoke key={key} joke={joke} />;
        })}
      </div>
    </form>
  );
}
