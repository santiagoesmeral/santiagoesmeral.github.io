import React, { useEffect, useState } from "react";
import "./TypewriterTitle.scss";

/* in order to avoid typescript errors, i've added a new interace which accepts the "--var" format */
export interface TypewriterCSSInterface extends React.CSSProperties {
  "--string-length": number;
  "--typewriter-speed": string;
}

export default function TypewriterTitle({
  title = "ERROR: title not found :c",
}) {
  const [isDeletingText, setIsDeletingText] = useState(false);
  let typewriterSpeed = Math.min(Math.max(4, title.length / 2), 6);

  useEffect(() => {
    const textTransition = () => {
      setIsDeletingText(!isDeletingText);
    };
    /* we cant use setInterval() because the amount of time to wait after deleting text is different than the amount of time to wait after writing text */
    if (isDeletingText) {
      setTimeout(textTransition, (typewriterSpeed / 2) * 1000);
    } else {
      setTimeout(textTransition, (typewriterSpeed + 2) * 1000);
    }
  }, [isDeletingText]);
  return (
    <h1
      className={"typewriter " + (isDeletingText ? "typewriter-delete" : "")}
      onClick={() => setIsDeletingText(!isDeletingText)}
      style={
        {
          "--string-length": title.length,
          "--typewriter-speed": `${typewriterSpeed}s`,
        } as TypewriterCSSInterface
      }
    >
      {title}
    </h1>
  );
}
