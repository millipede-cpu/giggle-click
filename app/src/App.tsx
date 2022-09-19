import { useState } from "react";
import { AppliedTheFavouriteJoke } from "./AppliedTheFavouriteJoke";
import AddJoke from "./AddJoke";

const newJokeToLaugh: NextBigJoke[] = [
  {
    text: "What do you call a yam with a broom ? A sweep potato.",
    complete: false,
  },
  {
    text: "Why did the ice cream van break down? Because there was a rocky road!",
    complete: true,
  },
];

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div></div>
      <h1>Giggle Click</h1>
      <ul>
        <AppliedTheFavouriteJoke newJokeToLaugh={newJokeToLaugh[0]} />
        <AppliedTheFavouriteJoke newJokeToLaugh={newJokeToLaugh[1]} />
      </ul>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <AddJoke />
      </div>
    </div>
  );
}

export default App;
