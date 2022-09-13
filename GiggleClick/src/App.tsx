import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { AppliedTheFavouriteJoke } from "./AppliedTheFavouriteJoke";

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
    <>
      <AppliedTheFavouriteJoke />
      <div className="App">
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>

        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </>
  );
}

export default App;
