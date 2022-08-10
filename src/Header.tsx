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
      <a id="link-0" className="header-title" href="/">
        Santiago Esmeral
      </a>
      <button className="header-button" onClick={() => onSkipNavigation()}>
        Skip Navigation
      </button>
      <nav className="header-nav">
        <a
          id="link-1"
          href="/about_me"
          className="header-link"
          title="About Me"
        >
          About Me
        </a>
        <a
          id="link-2"
          href="https://github.com/santiagoesmeral"
          className="header-link"
          title="Santiago Esmeral's Github profile"
        >
          My Github Profile
        </a>
        <a id="link-3" href="/" className="header-link">
          Link 3
        </a>
      </nav>
    </header>
  );
}
