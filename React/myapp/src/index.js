import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import QuestionStore from "./store/QuestionStore.js";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider QuestionStore={QuestionStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
