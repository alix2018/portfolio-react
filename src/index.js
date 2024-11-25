import React from "react";
import { render } from "react-dom";
import "./index.css";
import "./animations.css";

// Main app
import App from "./App";

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/service-worker.js").then((reg) => {
      console.log("Service worker registered.", reg);
    });
  });
}

render(<App />, document.querySelector("#app"));
