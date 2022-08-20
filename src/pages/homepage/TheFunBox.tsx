import { useEffect, useState } from "react";
import "./TheFunBox.scss";
/*
    This is a very special and weird component: it represents the box in the homepage that will display all sort of different things. From cheatsheets to animations, to minigames.
*/

export default function TheFunBox() {
  const [currentStatus, setCurrentStatus] = useState("");
  /* 
        I am adding the event listeners for displaying a special element here. Since the logic pertains to this element, to me it makes sense to put it here rather than in hompeage or app.
    */

  useEffect(() => {
    function handlePageFocusOrHoverChange() {
      console.log(document.activeElement?.id);
      const currentElem = document.activeElement;
      if (currentElem?.id.includes("homepage-link-card-number-")) {
        setCurrentStatus("showNumpadCheatsheet");
      } else {
        setCurrentStatus("");
      }
    }
    /*
      * So, i could totally do this using listeners and stuff but the logic gets too complex unnecesarily. I've decided to use a setInterval that returns the currently active item

      Think about it: I dont need immediate response from the page because i'm gonna put animations and transitions anyways, and by doing this i save myself from having to set eventListeners on a lot of things. I would have to set an event listener on each card and the searchbar, twice (once for blur and once for focus, plus probably one for hover and hover out but i havent looked into those yet), and then clear each individual event listener. 

      Yes, a loop every second or so is not very efficient but in the end its gonna be more efficient than the event listeners (probably at least).

      ! reminder for myself: focus > hover in priority of display

      todo: find a way to check elements under hover

      todo: change the name of the var. I was just thinking of that song from 4 non blondes so yeah. 
      https://www.youtube.com/watch?v=6NXnxTNIWkc WHAT'S GOING OOOOOOOOOOOOOOOOOOOOOOOON
    */
    const whatsGoingOn = window.setInterval(handlePageFocusOrHoverChange, 250);

    return () => {
      window.clearInterval(whatsGoingOn);
    };
  }, []);

  const elementToRender = () => {
    switch (currentStatus) {
      case "showNumpadCheatsheet":
        return (
          <div>
            <p>
              Hey, fun fact: the links on the left are mapped to the numpad
              inputs
            </p>
            <p>If you press 1 it will take you to Youtube, 2 to Deepl, etc</p>
            <p>;)</p>
          </div>
        );
      default:
        return <p>The fun box! ☜(⌒▽⌒)☞</p>;
    }
  };
  return (
    <div className="the-fun-box" title="Work in progress ;)">
      {elementToRender()}
    </div>
  );
}
