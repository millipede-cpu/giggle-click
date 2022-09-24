import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppliedTheFavouriteJoke } from "./AppliedTheFavouriteJoke";
import AddJoke from "./AddJoke";
import styled from "styled-components";
import NextButton from "./NextButton";
import JokeRandomiser from "./JokeRandomiser";
import RateJoke from "./RateJoke";
import CardFlipGame from "./CardFlipGame";

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
    <AppStyle>
      <BrowserRouter>
        <Routes>
          <Route path="/">Home</Route>

          <Route path="/joke-randomiser" element={<JokeRandomiser />}>
            Joke Randomiser
          </Route>

          <Route path="/card-flip-game" element={<CardFlipGame />}>
            Card Flip Game
          </Route>

          <Route path="/rate-joke" element={<RateJoke />}>
            Rate Joke
          </Route>
        </Routes>
        <div></div>
        <StyledTitle>Giggle Click</StyledTitle>
        <ul>
          <AppliedTheFavouriteJoke newJokeToLaugh={newJokeToLaugh[0]} />
          <AppliedTheFavouriteJoke newJokeToLaugh={newJokeToLaugh[1]} />
        </ul>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <AddJoke />
          <NextButton />
        </div>
      </BrowserRouter>
    </AppStyle>
  );
}

export default App;

const AppStyle = styled.div`
  background-color: #add8e6;
  display: flex;
  // flex-wrap: nowrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  height: 100vh;
`;

const StyledTitle = styled.h1`
  color: #fd7094;
`;
