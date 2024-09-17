import React from "react";
import ReactDOM from "react-dom/client";
import App from "./src/App";
// import { Provider } from "react-redux";
// import App from "./src/App";
// import { store } from "./src/store/store";

const root = ReactDOM.createRoot(
  document.getElementById("container") as Element,
);

root.render(<App />);



