import { useState } from "react";
interface AddJokeProps {
  joke: string;
  pun: string;
}
const AddJoke: React.FC<AddJokeProps> = ({ joke, pun }) => {
  const [jokeFields, setJokeFields] = useState([{ joke: "", pun: "" }]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setJokeFields(jokeFields);
    console.log(event.target.value);
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    setJokeFields(jokeFields);
  };

  const addJoke = () => {
    let newJoke = { joke: "", pun: "" };
    setJokeFields([...jokeFields, newJoke]);
  };

  const removeJokes = (index: number) => {
    let data = [...jokeFields];
    data.splice(index, 0);
    setJokeFields(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      {jokeFields.map((_input, index) => {
        return (
          <div key={index}>
            <input
              placeholder="Type something funny"
              type="text"
              value={joke}
              name="joke"
              onChange={handleChange}
            />
            <input
              placeholder="What's the pun?"
              type="text"
              value={pun}
              name="pun"
              onChange={handleChange}
            />
          </div>
        );
      })}

      <button type="button" onClick={addJoke}>
        Add more joke and pun boxes
      </button>
      <button type="submit" onClick={() => handleSubmit}>
        Submit
      </button>
      <span>Joke: {joke}</span>
      <span>Pun: {pun}</span>
      <button type="button" onClick={() => removeJokes}>
        Remove
      </button>
    </form>
  );
};

export default AddJoke;

// const [joke, setAddJoke] = useState({ addJoke: "", punchline: "" });

// const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//   setAddJoke({ ...joke, [event.target.name]: event.target.value });
// };

// const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//   event.preventDefault();
//   addJoke(joke);
//   setAddJoke({ addJoke: "", punchline: "" });
// };

// return (
//   <form onSubmit={handleSubmit}>
//     <label htmlFor="joke"></label>
//     <input
//       placeholder="Add a new joke"
//       value={joke.addJoke}
//       onChange={handleChange}
//       type="text"
//       id="joke"
//       name="joke"
//     />
//     <input
//       placeholder="Add the punchline"
//       value={joke.punchline}
//       onChange={handleChange}
//       type="text"
//       id="punchline"
//       name="punchline"
//     />
//     <button onClick={() => joke} className="submit-joke">
//       Submit Joke
//     </button>
//   </form>
// );
// }
