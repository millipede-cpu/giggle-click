import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import React from "react";

/** React Version 18 has included updates where ReactDOM
 *  is not needed to be added before functions such as createRoot,
 * and this can be imported directly from react-dom/client
 * More information here 👉🏻 👀 https://react.dev/blog/2022/03/08/react-18-upgrade-guide*/
const rootElement = document.getElementById("root") as HTMLElement;
const root = createRoot(rootElement!);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
