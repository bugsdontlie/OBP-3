import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import AllContexts from "./Lecture 75 - Context API Advanced/context/AllContexts";
import App from "./Lecture 76 - useRef/App";

createRoot(document.getElementById("root")).render(
  <AllContexts>
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  </AllContexts>,
);
