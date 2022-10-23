import { useState } from "react";
interface AddJokeProps {
  joke: string;
  pun: string;
  funnyHAHA: string;
  answerPun: string;
}
const AddJoke: React.FC<AddJokeProps> = ({
  joke,
  pun,
  funnyHAHA,
  answerPun,
}) => {
  const [jokeFields, setJokeFields] = useState([{ joke: "", pun: "" }]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    let jokeCopy = [...funnyHAHA];
    let punCopy = [...answerPun];
    jokeCopy[0] = capitalizeFirstLetter(event.target.value);
    punCopy[1] = capitalizeFirstLetter(event.target.value);
    setJokeFields(jokeFields);
    // setJokeFields(punCopy);
    console.log(event.target.value);
  };
  function capitalizeFirstLetter(user: String) {
    return user.charAt(0).toUpperCase() + user.slice(1);
  }

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
            <label htmlFor="joke">Add your joke</label>
            <input
              placeholder="Type something funny"
              type="text"
              value={joke}
              id="joke"
              name="joke"
              onChange={handleChange}
              required
            />
            <label htmlFor="pun">Add your pun</label>
            <input
              placeholder="What's the pun?"
              type="text"
              id="pun"
              value={pun}
              name="pun"
              onChange={handleChange}
              required
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
