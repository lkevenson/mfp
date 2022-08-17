import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Moun function to start up the app
const mount = (el) => {
  ReactDOM.render(<App />, el);
};

// It we are in development and isolation,
// call mount imediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#root");

  if (devRoot) {
    mount(devRoot);
  }
}

// We are running through container
// and we should export the mount function
export { mount };
