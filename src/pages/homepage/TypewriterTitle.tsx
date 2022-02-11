import React, { useEffect, useState } from "react";
import "./TypewriterTitle.scss";

/* in order to avoid typescript errors, i've added a new interace which accepts the "--var" format */
export interface TypewriterCSSInterface extends React.CSSProperties {
  "--string-length": number;
  "--typewriter-speed": string;
}

interface TypewriterProps {
  titleList: string[];
  priorityTitle?: string;
}

export default function TypewriterTitle({
  titleList = ["ERROR: title not found :c"],
  priorityTitle = "",
}: TypewriterProps) {
  const [currentTitle, setCurrentTitle] = useState(titleList[0]);
  const [isDeletingText, setIsDeletingText] = useState(false);

  let typewriterSpeed = 4;
  // let typewriterSpeed = Math.min(Math.max(4, currentTitle.length / 2), 6);

  useEffect(() => {
    const textTransition = () => {
      setIsDeletingText(!isDeletingText);
    };
    /* we cant use setInterval() because the amount of time to wait after deleting text is different than the amount of time to wait after writing text */
    if (isDeletingText) {
      setTimeout(textTransition, (typewriterSpeed / 2) * 1000);
    } else {
      setTimeout(textTransition, (typewriterSpeed + 2) * 1000);
      setCurrentTitle(titleList[Math.floor(Math.random() * titleList.length)]);
    }
  }, [isDeletingText]);
  return (
    <h1
      className={"typewriter " + (isDeletingText ? "typewriter-delete" : "")}
      style={
        {
          "--string-length": currentTitle.length,
          "--typewriter-speed": `${typewriterSpeed}s`,
        } as TypewriterCSSInterface
      }
    >
      {currentTitle}
    </h1>
  );
}
