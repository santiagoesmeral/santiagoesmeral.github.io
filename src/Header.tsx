import React, { useState, Fragment, useEffect } from "react";
import "./Header.scss";

export default function Header() {
  //i could do css shenanigans instead of state for the popup menu, but it will complicate things for what i have in mind for mobile

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [
    shouldFocusOnMenuButtonAfterKeyInput,
    setShouldFocusOnMenuButtonAfterKeyInput,
  ] = useState(false);
  const [smallViewportMode, setSmallViewportMode] = useState(false);

  const handleSetIsMenuOpen = (
    event: React.MouseEvent,
    newIsMenuOpen: boolean
  ) => {
    //if the user uses the keyboard to navigate, i want to automatically focus on the open/close button. But if he clicks, i dont want to do that.
    setIsMenuOpen(newIsMenuOpen);
    if (event.detail === 0) {
      // event.detail = 0 means that the user used a keyboard to interact. event.detail = 1 means that the user clicked on the button.
      setShouldFocusOnMenuButtonAfterKeyInput(true);
    }
  };

  /*
    Since useState functions are async, we cant just call a function right afterwards and have a guarantee that it is executed after the state is set.
    So we have to use a useEffect and state just for this small thing...
  */
  useEffect(() => {
    if (shouldFocusOnMenuButtonAfterKeyInput) {
      if (isMenuOpen)
        document.getElementById("header-close-nav-button")?.focus();
      else document.getElementById("header-open-nav-button")?.focus();

      setShouldFocusOnMenuButtonAfterKeyInput(false);
    }
  }, [isMenuOpen, shouldFocusOnMenuButtonAfterKeyInput]);

  useEffect(() => {
    /*
      Width of homepage link/title: 400px
      if 400px is 50% of the screen
      then x is 100% of the screen
      x = (400 * 100)/50 = 800px => our breakpoint for when to swap to small mode
      edit: +10px to avoid a small frame that was annoying me where overflow would happen.
      */
    const mediaQuerySmallViewport = window.matchMedia(`(max-width: ${810}px)`);

    //todo: find what the right event type is here
    function handleMediaQueryChange(mediaEvent: any) {
      if (mediaEvent.matches) {
        setSmallViewportMode(true);
      } else {
        setSmallViewportMode(false);
      }
    }
    mediaQuerySmallViewport.addEventListener("change", handleMediaQueryChange);
    handleMediaQueryChange(mediaQuerySmallViewport);
    return () => {
      mediaQuerySmallViewport.removeEventListener(
        "change",
        handleMediaQueryChange
      );
    };
  }, []);

  const onSkipNavigation = () => {
    document.getElementById("skip-navigation-target")?.focus();
    return;
  };

  const menu = () => {
    if (isMenuOpen) {
      return (
        <nav className="header-nav">
          <button
            id="header-close-nav-button"
            title="Close Navigation"
            className="header-button header-close-navigation-button"
            onClick={(event) => handleSetIsMenuOpen(event, false)}
          >
            Close Menu
          </button>
          {window.location.pathname !== "/hire_me" && (
            <a
              id="header-nav-link-1"
              href="/hire_me"
              className="header-button"
              title="Hire Me"
            >
              Hire Me
            </a>
          )}
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
          <a
            id="header-nav-link-5"
            className="header-button"
            title="Preview my CV (.pdf)"
            href="https://drive.google.com/file/d/1gEPawyT0Mc3keyUzhIISF3YxlmXFT8ju/view?usp=sharing"
          >
            Get my CV
          </a>
          <button
            id="header-nav-link-4"
            className="header-button"
            title="Santiago Esmeral's Codepen (coming soon)"
            disabled
          >
            My Codepen
          </button>
        </nav>
      );
    } else
      return (
        <Fragment>
          {window.location.pathname !== "/hire_me" && !smallViewportMode && (
            <a
              id="header-hire-me-button"
              href="/hire_me"
              className="header-button hire-me-quick-access-button"
              title="Hire Me"
            >
              Hire Me
            </a>
          )}
          <button
            id="header-open-nav-button"
            title="Open Navigation"
            className="header-button header-open-navigation-button"
            onClick={(event) => handleSetIsMenuOpen(event, true)}
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
  return (
    <header
      className={"header" + (smallViewportMode ? " space-between" : "")}
      id="header"
    >
      <a
        id="header-homepage-link"
        className={
          "header-title" +
          (smallViewportMode ? " header-small-viewport-title" : "")
        }
        title="homepage"
        href="/"
      >
        Santiago Esmeral
      </a>
      <button
        id="header-skip-nav-button"
        className={
          "header-button hidden-button" +
          (smallViewportMode ? " position-fixed" : "")
        }
        onClick={() => onSkipNavigation()}
      >
        Skip Navigation
      </button>
      {menu()}
    </header>
  );
}
