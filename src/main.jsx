import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./styles.css";
import { HeroesApp } from "./HeroesApp";

const basename = import.meta.env.BASE_URL;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter
      basename={basename}
      // future={{
      //   v7_startTransition: true,
      //   v7_relativeSplatPath: true,
      // }}
    >
      <HeroesApp />
    </BrowserRouter>
  </StrictMode>
);
