import { BrowserRouter, Routes, Route } from "react-router-dom";
import JokeRandomiser from "./JokeRandomiser";
import RateJoke from "./RateJoke";
import CardFlipGame from "./CardFlipGame";
import Home from "./Home";
import JokeFetch from "./JokeFetch";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              onClick={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
          }
        ></Route>

        <Route path="/joke-randomiser" element={<JokeRandomiser />}>
          Joke Randomiser
        </Route>

        <Route path="/card-flip-game" element={<CardFlipGame />}>
          Card Flip Game
        </Route>

        <Route path="/rate-joke" element={<RateJoke />}>
          Rate Joke
        </Route>

        <Route path="/joke-fetch" element={<JokeFetch jokeRandom={""} />}>
          Joke Fetch
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
