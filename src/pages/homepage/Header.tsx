import React from "react";
import "./Homepage.scss";

export default function Header() {
  return (
    <header className="homepage-header">
      <h1>Santiago Esmeral's Portfolio</h1>
      <a href="#intro">Intro</a>
      <a href="#who-am-i">Who am i?</a>
      <a href="#my-projects">My projects</a>
    </header>
  );
}
