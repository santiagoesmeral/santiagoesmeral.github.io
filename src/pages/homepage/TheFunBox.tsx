import { useEffect, useState } from "react";
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
  const currentGames = ["unclickableButton", "speedrunButton"];

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
      TODO: read comment below
    
      i now realize how stupid it is to be using the whole "use event listeners and display when user is on focus" method. 
      it slows performance, it doesnt allow the user to copypaste very easily, etc. 

      So, instead, we're gonna do the following: 
      1- add a very small menu to the funbox. Two buttons: change game, and "show tips"
      2- when tips are being shown, show slide cards with the info previously hidden behind this whole section
      
      unfortunately i dont see how i would get rid of the mediaquery in js (for Homepage.tsx). We still dont want to render the funbox on mobile. 
      And since we're gonna be adding the tips section, i'd like a way for the user to access that information. 
      So we'll probably have a conditional render. 
      This will in turn need two components. 
      1- the tips cards that will be displayed inside TheFunBox (kinda like this? https://css-tricks.com/video-screencasts/171-movable-stacked-card-row-in-css/)
      2- the tips cards that will be shown on mobile (dunno what to do yet)
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
        return <SpeedrunButton />;
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

function SpeedrunButton() {
  const [buttonState, setButtonState] = useState({
    text: "Click me!",
    clickCount: 0,
    posX: "center",
    posY: "center",
  });

  const [timeLeft, setTimeLeft] = useState(-1);

  let currentTimeout: NodeJS.Timeout;
  useEffect(() => {
    /*
      timeLeft === -1 => special state, game hasn't started
      timeLeft === 0 => show end game screen
      timeLeft > 0 =>  count down!
    */
    let currentTime = timeLeft; //to avoid shenanigans when passing it to the setTimeout
    if (currentTime > 0) {
      currentTimeout = setTimeout(() => {
        setTimeLeft(currentTime - 1);
      }, 1000);
    }
    return () => {
      clearTimeout(currentTimeout);
    };
  }, [timeLeft]);

  const possibleEmojis = [
    "",
    "",
    "",
    "",
    "🤣",
    "😂",
    "🗿",
    "🧐",
    "💀",
    "👾",
    "🤖",
    "🙈",
    "🙉",
    "🙊",
    "🐒",
    "🐎",
    "🦄",
    "🚂",
    "🚗",
    "🏎",
  ];
  const possiblePositions = ["start", "center", "end"];

  const handleButtonClick = () => {
    if (timeLeft <= 0) {
      setTimeLeft(10);
    }
    setButtonState({
      ...buttonState,
      text:
        randomFromArray(possibleEmojis) +
        (buttonState.clickCount + 1) +
        randomFromArray(possibleEmojis),
      clickCount: buttonState.clickCount + 1,
      posX: possiblePositions.filter((elem) => elem !== buttonState.posX)[
        Math.floor(Math.random() * 2)
      ],
      posY: possiblePositions.filter((elem) => elem !== buttonState.posY)[
        Math.floor(Math.random() * 2)
      ],
    });
  };
  return timeLeft === 0 ? (
    <>
      <div className="tfb-speedrun-button-background" data-time-left={timeLeft}>
        {timeLeft || ""}
      </div>
      <p className="tfb-speedrun-endscreen">
        And that's it folks!
        <br />
        you clicked the button {buttonState.clickCount}{" "}
        {buttonState.clickCount === 1 ? "time" : "times"}!
        <br />
        <button
          className="tfb-button"
          tabIndex={-1}
          title="a button that challenges you to click it"
          onClick={() => {
            setButtonState({
              text: "Click me!",
              clickCount: 1,
              posX: "center",
              posY: "center",
            });
            setTimeLeft(10);
          }}
        >
          Try again!
        </button>
      </p>
    </>
  ) : (
    <>
      <div className="tfb-speedrun-button-background" data-time-left={timeLeft}>
        {timeLeft || ""}
      </div>
      <button
        className={
          "tfb-button tfb-speedrun-button" +
          " tfb-button-justify-" +
          buttonState.posX +
          " tfb-button-align-" +
          buttonState.posY
        }
        onClick={() => handleButtonClick()}
      >
        {buttonState.text}
      </button>
    </>
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
        "tfb-button tfb-unclickable-button" +
        " tfb-button-justify-" +
        randomState[0] +
        " tfb-button-align-" +
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
