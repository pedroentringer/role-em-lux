import React, { Suspense } from "react";
import ReactDOM from "react-dom";

import "./index.css";
import "./services/translate.ts";

import App from "./App";

const Index = () => (
  <Suspense fallback={null}>
    <App />
  </Suspense>
);

ReactDOM.render(<Index />, document.getElementById("root"));
