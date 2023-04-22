import { BrowserRouter, Routes, Route } from "react-router-dom";
import JokeRandomiser from "./JokeRandomiser";
import RateJoke from "./RateJoke";
import CardFlipGame from "./CardFlipGame";
import Home from "./Home";
import JokeFetch from "./JokeFetch";
import { ErrorBoundary } from "react-error-boundary";
import {
  // ChangeEventHandler,
  MouseEventHandler,
  useRef,
  useState,
} from "react";
import styled from "styled-components";
import { Button } from "../stories/Button";
import React from "react";

interface AppRoute {
  path: string;
  component: JSX.Element;
  label?: string;
}

interface BombProps {
  firstName: string;
}

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: MouseEventHandler<HTMLButtonElement>;
}

const appRoutes: AppRoute[] = [
  {
    path: "/",
    component: <Home />,
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

const FailPretty = styled.div`
  background: #ffd9bd;
  margin: 0 auto;
  padding: 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  font-family: "Capriola", sans-serif;

  p {
    font-size: 1rem;
  }
  pre {
    color: #ed4337;
    background-color: #fff;
    font-size: 1rem;
    max-width: 500px;
    margin: 2rem auto;
    @media (max-width: 500px) {
      text-align: center;
      font-size: 0.7rem;
    }
  }
`;

function ErrorFallback({ error, resetErrorBoundary }: ErrorFallbackProps) {
  return (
    <FailPretty role="alert">
      <p> 😱😱😱 Sorry, something went wrong 😲😲😲</p>
      <p> 💥 BOOM 💥</p>
      <pre>{error.message}</pre>
      <Button label={"Try Again"} primary={true} onClick={resetErrorBoundary} />
    </FailPretty>
  );
}

// function Bomb({ firstName }: BombProps): JSX.Element {
//   if (firstName === "bomb") throw new Error("💥 CABOOM 💥");

//   return <p>{`Hi ${firstName}`}</p>;
// }

export default function App(): JSX.Element {
  const [firstName, setFirstName] = useState("");
  const usernameRef = useRef<HTMLInputElement>(null);

  // const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
  //   const target = event.target as HTMLInputElement;
  //   if (target.name === "bomb" && target.value === "bomb") {
  //     event.preventDefault();
  //   } else {
  //     setFirstName(target.value);
  //   }
  // };

  return (
    <>
      {/* <div>
        <label>
          {`Your name: (don't type "bomb"): `}
          <input
            placeholder={`type "bomb"`}
            value={firstName}
            onChange={handleChange}
            ref={usernameRef}
          />
        </label>
        <div> */}
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
          setFirstName("");

          if (usernameRef.current != null) {
            // Typescript know that ref is not null here
            usernameRef.current.focus();
          }
        }}
        resetKeys={[firstName]}
      >
        {/* <Bomb firstName={firstName} /> */}
      </ErrorBoundary>
      {/* </div>
      </div> */}

      <BrowserRouter>
        <Routes>
          {appRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.component}>
              {route.label}
            </Route>
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}
