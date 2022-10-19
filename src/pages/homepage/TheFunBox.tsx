import { useEffect, useState } from "react";
import randomFromArray from "../../usefulFunctions/randomFromArray";
import "./TheFunBox.scss";

//todo: typescript interface
export default function TheFunBox({ userCanHover }: any) {
  const [currentStatus, setCurrentStatus] = useState("");
  const currentGames = ["unclickableButton", "speedrunButton"];

  const chooseNextGame = () => {
    if (userCanHover) {
      return randomFromArray(
        currentGames.filter((elem) => elem !== currentStatus)
      );
    } else {
      //gotta exclude unclickableButton when the device cant easily hover. For now since its a hardcoded array and we know its the first element, we just remove that.
      return randomFromArray(
        currentGames
          .filter((elem) => elem !== "unclickableButton")
          .filter((elem) => elem !== currentStatus)
      );
    }
  };

  useEffect(() => {
    setCurrentStatus(chooseNextGame());
  }, []);

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
    1- the tips cards that will be displayed inside TheFunBox
    2- the tips cards that will be shown on mobile (dunno what to do yet)
  */

  const elementToRender = () => {
    switch (currentStatus) {
      case "tips":
        return <Tips onClose={() => setCurrentStatus(chooseNextGame())} />;
      case "unclickableButton":
        return <UnclickableButton />;
      case "speedrunButton":
        return <SpeedrunButton />;
      default:
        return "";
    }
  };
  /*
    todo: if another game ever gets added, change the userCanHover conditional in the control menu. 
    Currently that line is there because we only have 1 game for when the user is unable to hover
  */
  return (
    <div className="the-fun-box" title="I hope you have a great day :)">
      {currentStatus !== "tips" && (
        <div className="tfb-control-menu">
          <button
            className="tfb-control-button"
            onClick={() => setCurrentStatus("tips")}
          >
            Tips
          </button>
          {userCanHover && (
            <button
              onClick={() => setCurrentStatus(chooseNextGame())}
              title="change to a different available game"
              className="tfb-control-button"
            >
              Different Game
            </button>
          )}
        </div>
      )}
      {elementToRender()}
    </div>
  );
}

interface TipsProps {
  onClose: () => void;
}

function Tips({ onClose }: TipsProps) {
  const [currentListOfTipsIndex, setCurrentListOfTipsIndex] = useState(0);
  const listOfTips = [
    "searchbangs",
    "redirectToNewPageWithNumpadEnter",
    "drinkWater",
    "numpadButtonsLinkedWithExternalPageLinks",
  ];
  const tipToRender = () => {
    switch (listOfTips[currentListOfTipsIndex]) {
      case "searchbangs":
        return <SearchbangTips />;
      case "redirectToNewPageWithNumpadEnter":
        return (
          <div className="tfb-simple-tips">
            <h2 className="tfb-simple-tips-title">
              🢤 See those numbers in the links over there in the left?
            </h2>
            <p className="tfb-simple-tips-text">
              They're mapped to the numbers in the keyboard! If you have a
              keyboard, try pressing a number! There may even be a surprise :)
            </p>
          </div>
        );
      case "drinkWater":
        return (
          <div className="tfb-simple-tips">
            <h2 className="tfb-simple-tips-title">Drink water.</h2>
            <p className="tfb-simple-tips-text">
              No seriously, go drink water right now. And stand up for 1 minute
              while you're at it, stretch if you can. You'll thank me later.
            </p>
          </div>
        );
      case "numpadButtonsLinkedWithExternalPageLinks":
        return (
          <div className="tfb-simple-tips">
            <h2 className="tfb-simple-tips-title">
              Wanna search something but don't want to close this page?
            </h2>
            <p className="tfb-simple-tips-text">
              You can open your search in a new page by using the numpad enter
              rather than the normal one! It also works with the F9 key as long
              as the searchabar is selected, for those of you that don't have a
              numpad.
            </p>
          </div>
        );
      default:
        return "";
    }
  };
  const handleNextIndex = () => {
    if (currentListOfTipsIndex === listOfTips.length - 1) {
      setCurrentListOfTipsIndex(0);
    } else setCurrentListOfTipsIndex(currentListOfTipsIndex + 1);
  };
  return (
    <div className="tfb-tips-container">
      <button className="tfb-tips-container-close" onClick={() => onClose()}>
        Close
      </button>
      {tipToRender()}
      <button
        className="tfb-tips-container-next-tip"
        onClick={() => handleNextIndex()}
      >
        Next Tip ➤
      </button>
    </div>
  );
}

function SearchbangTips() {
  const [currentlySelectedBang, setCurrentlySelectedBang] = useState("");
  const listOfSearchBangs = [
    {
      bang: "!",
      description: "Automatically enters the first search result",
      example: "instagram !",
    },
    {
      bang: "!yt",
      description: "Searches on YouTube",
      example: "bohemian rhapsody !yt",
    },
    {
      bang: "!w",
      description: "Searches on Wikipedia",
      example: "alexithymia !w",
    },
    {
      bang: "!gm",
      description: "Searches on Google Maps",
      example: "giant causeway !gm",
    },
  ];
  return (
    <div className="tfb-tips-bangs-grid">
      <h2 className="tfb-tips-bangs-title">!bangs</h2>
      <p className="tfb-tips-bangs-paragraph">
        DuckDuckGo has an awesome feature called !bangs. It allows you to
        redirect the search to another site by adding !bangs to your search.
        <br />
        <a
          href="https://duckduckgo.com/bang"
          title="https://duckduckgo.com/bang"
          className="tfb-tips-bangs-link"
        >
          Here's a link
        </a>{" "}
        to see all the available !bangs.
      </p>
      <div className="tfb-tips-bangs">
        {listOfSearchBangs.map((bang) => {
          return (
            <button
              title={bang.description}
              onClick={() => setCurrentlySelectedBang(bang.bang)}
              className="tfb-tips-bang"
              key={bang.bang}
            >
              {bang.bang}
            </button>
          );
        })}
      </div>
      <p className="tfb-tips-bangs-description">
        {currentlySelectedBang
          ? listOfSearchBangs.find(
              (bang) => bang.bang === currentlySelectedBang
            )?.description
          : "Click a bang above to see what it does"}
      </p>
      <div className="tfb-tips-bangs-example">
        {currentlySelectedBang ? (
          <>
            <p>Example: </p>
            <p>
              {
                listOfSearchBangs.find(
                  (bang) => bang.bang === currentlySelectedBang
                )?.example
              }
            </p>
          </>
        ) : (
          ""
        )}
      </div>
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

  //TODO: store this in a ref
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
