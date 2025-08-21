import { BrowserRouter, Routes, Route } from "react-router-dom";
import JokeRandomiser from "./JokeRandomiser";
import RateJoke from "./RateJoke";
import CardFlipGame from "./CardFlipGame";
import Home from "./Home";
import JokeFetch from "./JokeFetch";
import { ErrorBoundary } from "react-error-boundary";
import {

  MouseEventHandler,
  useRef,
  useState,
} from "react";
import styled, { createGlobalStyle } from "styled-components";
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

const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: #add8e6;
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


export default function App(): JSX.Element {
  const [firstName, setFirstName] = useState("");
  const usernameRef = useRef<HTMLInputElement>(null);



  return (
    <>
    <GlobalStyle/>

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

      </ErrorBoundary>
   

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
