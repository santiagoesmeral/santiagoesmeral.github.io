import React, { useEffect, useState } from "react";
import "./TypewriterTitle.scss";

/* in order to avoid typescript errors, i've added a new interace which accepts the "--var" format */
export interface TypewriterCSSInterface extends React.CSSProperties {
  "--string-length": number;
  "--typewriter-speed": string;
  "--typewriter-pause": string;
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
  const [currentTitle, setCurrentTitle] = useState(defaultTitleList[0]);
  const [isDeletingText, setIsDeletingText] = useState(false);

  // values in seconds
  let typewriterSpeed = 2;
  let typewriterPause = 1.5;

  useEffect(() => {
    const textTransition = () => {
      setIsDeletingText(!isDeletingText);
    };
    let currentTimeout;
    /* we cant use setInterval() because the amount of time to wait after deleting text is different than the amount of time to wait after writing text */
    if (isDeletingText) {
      currentTimeout = setTimeout(textTransition, (typewriterSpeed / 2) * 1000);
    } else {
      currentTimeout = setTimeout(
        textTransition,
        (typewriterSpeed + typewriterPause) * 1000 + 2000
      );
      if (priorityTitleQueue.length > 0) {
        setCurrentTitle(popPriorityTitleQueue());
      } else {
        setCurrentTitle(
          defaultTitleList[Math.floor(Math.random() * defaultTitleList.length)]
        );
      }
    }
  }, [isDeletingText]);

  return (
    <h1
      className={
        className + " typewriter " + (isDeletingText ? "typewriter-delete" : "")
      }
      style={
        {
          "--string-length": currentTitle.length,
          "--typewriter-speed": `${typewriterSpeed}s`,
          "--typewriter-pause": `${typewriterPause}s`,
        } as TypewriterCSSInterface
      }
    >
      {currentTitle}
    </h1>
  );
}
