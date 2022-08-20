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
      <a id="header-link-0" className="header-title" href="/">
        Santiago Esmeral
      </a>
      <button className="header-button" onClick={() => onSkipNavigation()}>
        Skip Navigation
      </button>
      <nav className="header-nav">
        <a
          id="header-link-1"
          href="/about_me"
          className="header-link"
          title="About Me"
        >
          About Me
        </a>
        <a
          id="header-link-2"
          href="https://github.com/santiagoesmeral"
          className="header-link"
          title="Santiago Esmeral's Github profile"
        >
          My Github Profile
        </a>
        <a
          id="header-link-3"
          href="https://www.linkedin.com/in/santiago-alfredo-esmeral-albarracin-37250516b/"
          className="header-link"
          title="Santiago Esmeral's LinkedIn profile"
        >
          My LinkedIn Profile
        </a>
      </nav>
    </header>
  );
}
