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

export default function TypewriterTitle({
  defaultTitleList = ["ERROR: title not found :c"],
  priorityTitleQueue = [],
  popPriorityTitleQueue,
  className,
}: TypewriterProps) {
  //TODO: check if and where it makes sense to implement useMemo/useCalback
  //TODO: make the caret bigger, like in a console
  //TODO: se if its possible to fix the caret sometimes disappearing in the waiting periods
  //TODO: possibly make the background black, give it more of a console asthetic.
  const [currentTitle, setCurrentTitle] = useState("");
  const [isDeletingText, setIsDeletingText] = useState(false);

  //values in seconds
  let typewriterCharactersPerSecondModifier = 0.05;
  let typewriterpause = 2; //pause after animation

  const calcTypewriterTime = (string: string) => {
    return string.length * typewriterCharactersPerSecondModifier;
  };

  const textTransition = () => {
    setIsDeletingText(!isDeletingText);
  };

  useEffect(() => {
    //TODO: fix ESLint errors here
    let currentTimeout: NodeJS.Timeout;
    // could probably change it to use setTimeout, but i like the idea of being able to change the time of deleting vs typing individually
    if (isDeletingText) {
      currentTimeout = setTimeout(
        textTransition,
        (calcTypewriterTime(currentTitle) + typewriterpause) * 1000
      );
    } else {
      /*
        There was a bug where the timeout duration was being calculated before the text was being set, and thus it was using the previous text's length.
        So we cant use the current title's value, and instead we need to calculate it based on the upcoming title length
      */
      let futureTitle: string;
      if (priorityTitleQueue.length > 0) {
        futureTitle = popPriorityTitleQueue();
      } else {
        futureTitle =
          defaultTitleList[Math.floor(Math.random() * defaultTitleList.length)];
      }

      setCurrentTitle(futureTitle);
      currentTimeout = setTimeout(
        textTransition,
        (calcTypewriterTime(futureTitle) + typewriterpause) * 1000
      );
    }
    return () => {
      clearTimeout(currentTimeout);
    };
  }, [isDeletingText]);

  return (
    <div className={className + " typewriter-container"}>
      <span
        className={"typewriter " + (isDeletingText ? "typewriter-delete" : "")}
        style={
          {
            "--string-length": currentTitle.length,
            "--typewriter-time": `${calcTypewriterTime(currentTitle)}s`,
          } as TypewriterCSSInterface
        }
      >
        {currentTitle}
      </span>
    </div>
  );
}
