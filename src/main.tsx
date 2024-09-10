import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import Nav from "./Nav.tsx";
import Hero from "./Hero.tsx";
import Projects from "./Projects.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <Nav /> */}
    <Hero />
    <Projects />
  </StrictMode>
);
