import React, { useEffect, useState } from "react";
import "./TypewriterTitle.scss";

/* in order to avoid typescript errors, i've added a new interace which accepts the "--var" format */
interface TypewriterCSSInterface extends React.CSSProperties {
  "--string-length": number;
  "--typewriter-time": string;
}

interface TypewriterProps {
  defaultTitleList: string[];
  priorityTitleQueue: string[];
  popPriorityTitleQueue: Function;
  className?: string;
}
/*
  TODO: There's a bug in this: the timeout is being set before the new text gets set on state, so,
  if the length of the texts in the list is: [20, 40, 30]
  then what happens is that the 40 char text uses a timeout calculated with the length of the 20 char text when typing. 
  Same between the 30 char text and the 40 one. 

  This only happens when typing the text, not when deleting
*/
export default function TypewriterTitle({
  defaultTitleList = ["ERROR: title not found :c"],
  priorityTitleQueue = [],
  popPriorityTitleQueue,
  className,
}: TypewriterProps) {
  const [currentTitle, setCurrentTitle] = useState(
    "whats up boi, really long text coming up."
  );
  const [isDeletingText, setIsDeletingText] = useState(false);

  // values in seconds. 0.3s per character, and one extra character cus bugs
  let typewriterCharactersPerSecondModifier = 0.1;
  let typewriterTime =
    currentTitle.length * typewriterCharactersPerSecondModifier;
  let typewriterSecondsOfPauseAfterAnimation = 2;

  useEffect(() => {
    const textTransition = () => {
      setIsDeletingText(!isDeletingText);
    };
    let currentTimeout;
    /* we cant use setInterval() because the amount of time to wait after deleting text is different than the amount of time to wait after writing text */
    if (isDeletingText) {
      currentTimeout = setTimeout(
        textTransition,
        (typewriterTime + typewriterSecondsOfPauseAfterAnimation) * 1000
      );
    } else {
      if (priorityTitleQueue.length > 0) {
        setCurrentTitle(popPriorityTitleQueue());
      } else {
        setCurrentTitle(
          defaultTitleList[Math.floor(Math.random() * defaultTitleList.length)]
        );
      }
      currentTimeout = setTimeout(
        textTransition,
        (typewriterTime + typewriterSecondsOfPauseAfterAnimation) * 1000
      );
    }
  }, [isDeletingText]);

  console.log(typewriterTime);

  return (
    <h1
      className="typewriter-container"
      onClick={() => setIsDeletingText(!isDeletingText)}
    >
      <span
        className={
          className +
          " typewriter " +
          (isDeletingText ? "typewriter-delete" : "")
        }
        style={
          {
            "--string-length": currentTitle.length,
            "--typewriter-time": `${typewriterTime}s`,
          } as TypewriterCSSInterface
        }
      >
        {currentTitle}
      </span>
    </h1>
  );
}
