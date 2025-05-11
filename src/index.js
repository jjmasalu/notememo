import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import "./styles.css";
import GlobalProvider from "./components/GlobalState";

const root = createRoot(document.getElementById("root"));
root.render(
  <GlobalProvider>
    <App />
  </GlobalProvider>
);
//Challenge. Render all the notes inside notes.js as a seperate Note
//component.
