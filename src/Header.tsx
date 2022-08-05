import React from "react";
import "./Header.scss";

export default function Header() {
  /*
    This is a small project, so i dont see the value of having the links defined in the app and passing them as props. 
    I dont need a fancy routing system here, i'll have a couple of static links. So for now, it will stay here. If i needed a more complex routing system i'd probably go for a library like react-router instead
  */
  //TODO: redirect on clicking title, maybe
  const onSkipNavigation = () => {
    document.getElementById("skip-navigation-target")?.focus();
    return;
  };
  return (
    <header className="header">
      <h1 className="header-title"> Santiago Esmeral</h1>
      <button className="special-button" onClick={() => onSkipNavigation()}>
        Skip Navigation
      </button>
      <nav className="header-nav">
        <a id="link-1" href="/about_me" className="special-link">
          About Me
        </a>
        <a id="link-2" href="/" className="special-link">
          Link 2
        </a>
        <a id="link-3" href="/" className="special-link">
          Link 3
        </a>
      </nav>
    </header>
  );
}
