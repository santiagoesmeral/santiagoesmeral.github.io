import { useState, Fragment, useEffect } from "react";
import "./Header.scss";

export default function Header() {
  //i could do css shenanigans instead of state, but it will complicate things for what i have in mind for mobile
  //todo: close menu when page is no longer active
  //todo: close menu when clicking outside of it (not entirely sure about this one)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    /*  
      In theory, useEffect runs after every render. So, rather than creating a whole new component which can be annoying with typescript, i can instead some logic for the opening and closing of the menu here
    */
    //when the menu gets opened, set the focus on the first button
    if (isMenuOpen) {
      document.getElementById("header-nav-link-0")?.focus();
    } else {
      //when the menu is closed, focus on the open menu button
      document.getElementById("header-open-nav-button")?.focus();
    }
  }, [isMenuOpen]);

  const menu = () => {
    //TODO: continue this
    /*
      choose buttons for this menu: 
      a) https://codepen.io/version1/pen/zYvWYEB
      b) https://codepen.io/letitcode/pen/veEvpd

      great resource to read: https://www.smashingmagazine.com/2017/11/building-accessible-menu-systems/#navigation-menu-buttons
      tl-dr: for accesibility purposes, we really want a simple menu that toggles between opened and closed
    */
    if (isMenuOpen) {
      return (
        <nav className="header-nav">
          <button
            id="header-nav-link-0"
            title="Close Navigation"
            className="header-button header-close-navigation-button"
            onClick={() => setIsMenuOpen(false)}
          >
            Close Menu
          </button>
          <a
            id="header-nav-link-1"
            href="/hire_me"
            className="header-button"
            title="Hire Me"
          >
            Hire Me
          </a>
          <a
            id="header-nav-link-2"
            href="https://github.com/santiagoesmeral"
            className="header-button"
            title="Santiago Esmeral's Github profile"
          >
            My Github Profile
          </a>
          <a
            id="header-nav-link-3"
            href="https://www.linkedin.com/in/santiago-alfredo-esmeral-albarracin-37250516b/"
            className="header-button"
            title="Santiago Esmeral's LinkedIn profile"
          >
            My LinkedIn Profile
          </a>
          <button
            id="header-nav-link-4"
            className="header-button"
            title="Santiago Esmeral's Codepen (coming soon)"
            disabled
          >
            My Codepen
          </button>
          <button
            id="header-nav-link-5"
            className="header-button"
            title="Download my CV (coming soon)"
            disabled
          >
            Download my CV
          </button>
        </nav>
      );
    } else
      return (
        <Fragment>
          <a
            id="header-hire-me-button"
            href="/hire_me"
            className="header-button hire-me-quick-access-button"
            title="Hire Me"
          >
            Hire Me
          </a>
          <button
            id="header-open-nav-button"
            title="Open Navigation"
            className="header-button header-open-navigation-button"
            onClick={() => setIsMenuOpen(true)}
            aria-haspopup
          >
            ☰
          </button>
        </Fragment>
      );
  };

  /*
    This is a small project, so i dont see the value of having the links defined in the app and passing them as props. 
    I dont need a fancy routing system here, i'll have a couple of static links. So for now, it will stay here. If i needed a more complex routing system i'd probably go for a library like react-router instead
  */
  const onSkipNavigation = () => {
    document.getElementById("skip-navigation-target")?.focus();
    return;
  };
  return (
    <header className="header">
      <a id="header-homepage-link" className="header-title" href="/">
        Santiago Esmeral
      </a>
      <button
        id="header-skip-nav-button"
        className="header-button hidden-button"
        onClick={() => onSkipNavigation()}
      >
        Skip Navigation
      </button>
      {menu()}
    </header>
  );
}
