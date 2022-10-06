// export default function AddJoke({ addJoke }: any) {

import { ChangeEvent, FormEvent, useState } from "react";
interface AddJokeProps {
  joke: string;
  pun: string;
}
const AddJoke: React.FC<AddJokeProps> = ({ joke, pun }) => {
  const inputProps = { text: "" };
  const [jokeFields, setJokeFields] = useState([{ joke: "", pun: "" }]);

  // const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   // setText(text);
  //   setJokeFields(event.target.value);
  // };

  // const handleSubmit = (event: FormEvent<HTMLButtonElement>) => {
  //   event.preventDefault();
  //   // addJoke(text);
  //   setJokeFields("");
  // };

  const addJoke = () => {};

  return (
    <form onSubmit={submit}>
      {jokeFields.map((input, index) => {
        return (
          <div key={index}>
            <input
              placeholder="Type something funny"
              {...inputProps}
              type="text"
              value={input.joke}
              name="joke"
            />
            <input
              placeholder="What's the pun?"
              {...inputProps}
              type="text"
              value={input.pun}
              name="pun"
            />
          </div>
        );
      })}

      <button type="button" onClick={addJoke}>
        Add Joke
      </button>
      <span>Joke: {joke}</span>
    </form>
  );
};

export default AddJoke;

function useInput() {
  throw new Error("Function not implemented.");
}
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
