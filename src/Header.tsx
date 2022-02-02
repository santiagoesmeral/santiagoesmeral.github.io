import React from "react";
import "./Header.scss";

export default function Header() {
  const onSkipNavigation = () => {
    document.getElementById("skip-navigation-target")?.focus();
    return;
  };
  return (
    <header className="header">
      <h1 className="header-title"> Santiago Esmeral </h1>
      <button className="special-button" onClick={() => onSkipNavigation()}>
        Skip Navigation
      </button>
      <nav className="header-nav">
        <a id="link-1" href="#" className="special-link">
          Link 1
        </a>
        <a id="link-2" href="#" className="special-link">
          Link 2
        </a>
        <a id="link-3" href="#" className="special-link">
          Link 3
        </a>
      </nav>
    </header>
  );
}
