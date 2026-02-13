import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./Lecture 74 - Context APIs/App";
import { ThemeProvider } from "./Lecture 74 - Context APIs/context/ThemeContext";

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  </ThemeProvider>
);
