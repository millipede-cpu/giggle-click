import { BrowserRouter, Routes, Route } from "react-router-dom";
import JokeRandomiser from "./JokeRandomiser";
import RateJoke from "./RateJoke";
import CardFlipGame from "./CardFlipGame";
import Home from "./Home";
import JokeFetch from "./JokeFetch";

interface AppRoute {
  path: string;
  component: JSX.Element;
  label?: string;
}

const appRoutes: AppRoute[] = [
  {
    path: "/",
    component: (
      <Home
        onClick={() => {
          throw new Error("Function not implemented.");
        }}
      />
    ),
  },
  {
    path: "/joke-randomiser",
    component: <JokeRandomiser />,
    label: "Joke Randomiser",
  },
  {
    path: "/card-flip-game",
    component: <CardFlipGame />,
    label: "Card Flip Game",
  },
  {
    path: "/rate-joke",
    component: <RateJoke />,
    label: "Rate Joke",
  },
  {
    path: "/joke-fetch",
    component: <JokeFetch />,
    label: "Joke Fetch",
  },
];

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        {appRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.component}>
            {route.label}
          </Route>
        ))}
      </Routes>
    </BrowserRouter>
  );
}
