import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { ToastProvider } from 'react-toast-notifications'

import "./index.css";
import "./services/translate.ts";

import App from "./App";

const Index = () => (
  <Suspense fallback={null}>
    <ToastProvider>
      <App />
    </ToastProvider>
  </Suspense>
);

ReactDOM.render(<Index />, document.getElementById("root"));
