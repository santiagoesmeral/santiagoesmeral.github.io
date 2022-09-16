import { useState } from "react";
import randomFromArray from "../../usefulFunctions/randomFromArray";
import useInterval from "../../usefulFunctions/useInterval";
import "./TheFunBox.scss";
/*
    This is a very special and weird component: it represents the box in the homepage that will display all sort of different things. From cheatsheets to animations, to minigames.

    The idea: have the page loop over a couple of random minigames, except when the user is selecting the links or the searchbar. 
    If they are selecting those, then instead show the user a cheatsheet with some useful info
*/

//todo: typescript interface
export default function TheFunBox({ userCanHover }: any) {
  const [currentStatus, setCurrentStatus] = useState("");
  const currentGames = ["unclickableButton", "speedrunButton", "angryButton"];

  const chooseNextGame = () => {
    if (userCanHover) {
      return randomFromArray(currentGames);
    } else {
      //gotta exclude unclickableButton when the device cant easily hover. For now since its a hardcoded array and we know its the first element, we just remove that.
      return randomFromArray(
        currentGames.filter((elem) => elem !== "unclickableButton")
      );
    }
  };

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
    } else {
      if (!currentGames.includes(currentStatus)) {
        setCurrentStatus(chooseNextGame());
      }
    }
  }
  useInterval(handleCurrentHoverOrFocusElement, 300);

  const elementToRender = () => {
    switch (currentStatus) {
      case "searchbarCheatsheet":
        return (
          <div className="tfb-cheatsheet">
            <p className="tfb-cheatsheet-decription">
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
            <div className="tfb-cheatsheet-list-of-searchbangs">
              <kbd title="Redirect search to www.google.com">!g</kbd>
              <kbd title="Redirect to Google Maps">!gm</kbd>
              <kbd title="Redirect to Google Images">!gi</kbd>
              <kbd title="Redirect search to www.youtube.com">!yt</kbd>
              <kbd title="Redirect to wikipedia.org">!w</kbd>
              <kbd title="Redirect to the first result of the search">!</kbd>
            </div>
            <p className="tfb-cheatsheet-decription">
              Also, if you want to open your search in a new window rather than
              this one, then use the numpad enter instead of the normal one.
            </p>
          </div>
        );
      case "numpadCheatsheet":
        return (
          <div className="tfb-cheatsheet">
            <p className="tfb-cheatsheet-decription">
              Hey, fun fact: the links on the left are mapped to the numpad
              inputs
              <br />
              If you press 1 it will take you to Youtube, 2 to Deepl, etc{" "}
              <sup>;)</sup>
            </p>
          </div>
        );
      case "unclickableButton":
        return <UnclickableButton />;
      //todo: 3 button ideas: a button that changes text and gets angry at the user clicking it, a "click as many times as you can in 10 seconds", and the unclickable button.
      //unclickable button only appears when the user is detected to be ablet o hover.
      case "speedrunButton":
        return <div>speedrun! wip</div>;
      case "angryButton":
        return <div>angry! wip</div>;
      case "nothing":
        return "";
      default:
        return "";
    }
  };
  return (
    <div
      className={
        "the-fun-box" +
        (currentStatus.includes("Cheatsheet")
          ? " the-fun-box-align-center"
          : "")
      }
      title="I hope you have a great day :)"
    >
      {elementToRender()}
    </div>
  );
}

function UnclickableButton() {
  // [0] = x, [1] = y, [2] = text
  const [randomState, setRandomState] = useState([
    "center",
    "center",
    "Click me if you can!",
  ]);
  const possiblePositions = ["start", "center", "end"];
  const possibleTexts = [
    "🤣",
    "gotta go fast!",
    "hehehe",
    "jaja",
    "😂",
    "🗿",
    "ᕕ( ᐛ )ᕗ",
    "Can't touch this",
    "EEEH MACARENA",
    "Cha cha real smooth",
  ];
  const newRandomState = () => {
    const newRandomX = possiblePositions.filter(
      (elem) => elem !== randomState[0]
    )[Math.floor(Math.random() * 2)]; //2 = length of possiblePositions -1
    const newRandomY = possiblePositions.filter(
      (elem) => elem !== randomState[1]
    )[Math.floor(Math.random() * 2)];
    const newRandomText = possibleTexts.filter(
      (elem) => elem !== randomState[2]
    )[Math.floor(Math.random() * (possibleTexts.length - 1))];
    setRandomState([newRandomX, newRandomY, newRandomText]);
  };
  return (
    <button
      className={
        "tfb-unclickable-button" +
        " tfb-unclickable-button-justify-" +
        randomState[0] +
        " tfb-unclickable-button-align-" +
        randomState[1]
      }
      onMouseOver={() => newRandomState()}
      onClick={() => setRandomState(["center", "center", "You won!!"])}
      tabIndex={-1}
      title="a silly button that runs away from the mouse"
    >
      {randomState[2]}
    </button>
  );
}
