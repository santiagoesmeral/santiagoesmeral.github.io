import { useEffect, useState } from "react";
import "./TheFunBox.scss";
/*
    This is a very special and weird component: it represents the box in the homepage that will display all sort of different things. From cheatsheets to animations, to minigames.
*/

export default function TheFunBox() {
  const [currentStatus, setCurrentStatus] = useState("");
  useEffect(() => {
    /*
    !I am not sure if this code is worth optimizing too much
    At the time of writing, i tested execution time on the interval function.
    The longest time reported, which is a rare occasion, shows 20ms of execution time. 

    ...that is 0.02 seconds.

    If this was code that i would put in a business project i would be worried, but to be fair, its not that bad. 
    I dont think its worth neither the effort nor the inevitable code mess it will become due to trying to optimize it.

    TODO: 
      -add a check to make sure the page is currently the active tab, otherwise do nothing
      -add checks for redundant calls. No need to re-run the setState code if the state has not changed at all.
      -test on other browsers and intentionally reduce the speed of the browser to make sure its still ok
    
    EDIT: currently working on the hover effect. I have 2 options, neither of which i really like
      1- add a useless :hover property to the element i want to listen to, and every loop check in the document if that class + hover pseudoclass exists (dont like it, relies too much on css)
      2- attach an onmousemove function to the document, then every loop get the X and Y coordinates of the event given to the function, then use the function document.elementFromPoint with the X and Y coordinates to get the element we're hovering over
    */

    let currentHoverElements: Element[] | null;
    function setCurrentHoverElementOnMouseMove(event: any) {
      currentHoverElements = document.elementsFromPoint(
        event.clientX,
        event.clientY
      );
    }
    document.onmousemove = setCurrentHoverElementOnMouseMove;

    function handleCurrentHoverOrFocusElement() {
      const currentActiveElem = document.activeElement;

      if (currentActiveElem?.id === "skip-navigation-target") {
        //skip-navigation-target, in the homepage, represent the searchbar. This element will only be rendered in the home page so this effectively means the searchbar
        setCurrentStatus("showSearchbarCheatsheet");
      } else if (
        currentActiveElem?.id.includes("homepage-link-card-number-") ||
        currentHoverElements?.some(
          (elem: Element) => elem.id === "homepage-list-of-links"
        )
      ) {
        setCurrentStatus("showNumpadCheatsheet");
      } else {
        setCurrentStatus("");
      }
    }

    const interval = window.setInterval(handleCurrentHoverOrFocusElement, 300);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  const elementToRender = () => {
    switch (currentStatus) {
      case "showSearchbarCheatsheet":
        return (
          <div className="the-fun-box-cheatsheet">
            <p className="the-fun-box-cheatsheet-decription">
              DuckDuckGo has a feature called searchbangs. It allows you to add
              a special keyword on your search to automatically redirect the
              search on another site.
              <br />
              For example, you can search for: "bohemian rhapsody !yt"
              <br />
              There's hundreds of them, but here are some useful ones.
              <br />
              <sup>hover over them to see what they do</sup>
            </p>
            <div className="the-fun-box-cheatsheet-list-of-searchbangs">
              <kbd title="Redirect search to www.google.com">!g</kbd>
              <kbd title="Redirect search to www.youtube.com">!yt</kbd>
              <kbd title="Redirect to maps.google.com">!gm</kbd>
              <kbd title="Redirect to wikipedia.org">!w</kbd>
              <kbd title="Redirect to the first result of the search">!</kbd>
            </div>
          </div>
        );
      case "showNumpadCheatsheet":
        return (
          <div className="the-fun-box-cheatsheet">
            <p className="the-fun-box-cheatsheet-decription">
              Hey, fun fact: the links on the left are mapped to the numpad
              inputs
              <br />
              If you press 1 it will take you to Youtube, 2 to Deepl, etc{" "}
              <sup>;)</sup>
            </p>
          </div>
        );
      default:
        return <div className="TEMP-IDK-WHAT-TO-CALL-THIS"></div>;
    }
  };
  return (
    <div className="the-fun-box" title="Work in progress ;)">
      {elementToRender()}
    </div>
  );
}
