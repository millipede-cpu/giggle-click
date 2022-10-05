// export default function AddJoke({ addJoke }: any) {

import React, { ChangeEvent, FormEvent, useState } from "react";

// interface Props {
//   addJoke: typeof AddJoke;
// }

const AddJoke = (addJoke: string) => {
  const [text, setText] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(text);
    setText(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    addJoke(text);
    setText("");
  };

  return (
    <form>
      <input type="text" value={text} onChange={handleChange} />
      <button type="submit" onClick={handleSubmit}>
        Add Joke
      </button>
      <span>{text}</span>
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
