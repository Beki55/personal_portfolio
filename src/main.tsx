import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Set initial mode to light
if (typeof document !== "undefined") {
  document.documentElement.classList.add("light");
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
