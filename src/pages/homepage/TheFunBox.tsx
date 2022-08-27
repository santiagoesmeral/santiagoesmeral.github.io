import { useState } from "react";
import useInterval from "../../usefulFunctions/useInterval";
import "./TheFunBox.scss";
/*
    This is a very special and weird component: it represents the box in the homepage that will display all sort of different things. From cheatsheets to animations, to minigames.

    The idea: have the page loop over a couple of random minigames, except when the user is selecting the links or the searchbar. 
    If they are selecting those, then instead show the user a cheatsheet with some useful info
*/

const randomEvents = ["unclickableButton"];

export default function TheFunBox() {
  const [currentStatus, setCurrentStatus] = useState("");

  function handleCurrentHoverOrFocusElement() {
    /*
    !I am not sure if this code is worth optimizing too much
    At the time of writing, i tested execution time on the interval function.
    The longest time reported, which is a rare occasion, shows 20ms of execution time. 
    
    ...that is 0.02 seconds.
    
    If this was code that i would put in a business project i would be worried, but to be fair, its not that bad. 
    I dont think its worth neither the effort nor the inevitable code mess it will become due to trying to optimize it.
    
    TODO: test on other browsers and intentionally reduce the speed of the browser to make sure its still ok
    */

    //dont wanna be calling this if the page isnt currently active
    if (document.hidden) return;

    const currentActiveElem = document.activeElement;

    //separated this if statement from the others so that we only declare isListOfLinksHovered if needed
    if (currentActiveElem?.id === "skip-navigation-target") {
      //skip-navigation-target, in the homepage, represent the searchbar. This element will only be rendered in the home page so this effectively means the searchbar
      if (currentStatus !== "searchbarCheatsheet") {
        setCurrentStatus("searchbarCheatsheet");
        return;
      } else return;
    }

    /*
      I tried my best to make the hover logic as clean as possible. 
      But any solution leads down a path of madness.
      Either you make an absolute mess with mouse event logics in the component,
      or you make a mess by setting a var that captures the onmousemove from the document.

      ...or you make this. At the time of calling the function, you get the list of all items with the hovered status, then convert it to an array and check if any of them matches the id of the list of links.
      
      If anyone can provide a better alternative, then let me know
    */
    const isListOfLinksHovered = Array.from(
      document.querySelectorAll(":hover")
    ).some((elem: Element) => elem.id === "homepage-list-of-links");

    if (
      currentActiveElem?.id.includes("homepage-link-card-number-") ||
      isListOfLinksHovered
    ) {
      if (currentStatus !== "numpadCheatsheet") {
        setCurrentStatus("numpadCheatsheet");
      }
    } else setCurrentStatus("unclickableButton");
  }
  useInterval(handleCurrentHoverOrFocusElement, 300);

  const elementToRender = () => {
    switch (currentStatus) {
      case "searchbarCheatsheet":
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
      case "numpadCheatsheet":
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
      case "unclickableButton":
        return (
          <div className="the-fun-box-unclickable-button-container">
            <button>ᕕ( ᐛ )ᕗ</button>
          </div>
        );
      case "nothing":
        return "";
      default:
        return "";
    }
  };
  return (
    <div className="the-fun-box" title="Work in progress ;)">
      {elementToRender()}
    </div>
  );
}
