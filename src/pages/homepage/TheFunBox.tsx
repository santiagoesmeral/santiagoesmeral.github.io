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
    function SetStatusToShowLinkListCheatsheet(event: any) {
      console.log(event);
      setCurrentStatus("showNumpadCheatsheet");
    }
    function SetStatusToHideLinkListCheatsheet(event: any) {
      console.log(event);
      setCurrentStatus("");
    }

    /*
        Here, we're adding an event listener to each individual link in the numpad link list, for whenever they are focused on.
        We also have to add the corresponding removeEventListener in the return of this useEffect
        
        The layout of the list of links: 
        <ul id="homepage-list-of-links">
        [
          <li className="homepage-link-card-container">
          <a className="homepage-link-card" />
          </li>
        ]
        </ul>
        
        Edit 19/8/22: i tried to make only 1 function for both focus and blur, but that seems impossible. I am not 100% experienced with event listeners so there may be a way, but for now, we'll have to add and remove 2 event listeners to each of the keys. C'est la vie.
    */
    document
      .getElementById("homepage-list-of-links")
      ?.childNodes.forEach((linkContainer) => {
        linkContainer.childNodes[0].addEventListener(
          "focus",
          SetStatusToShowLinkListCheatsheet
        );
        linkContainer.childNodes[0].addEventListener(
          "blur",
          SetStatusToHideLinkListCheatsheet
        );
      });

    return () => {
      document
        .getElementById("homepage-list-of-links")
        ?.childNodes.forEach((linkContainer) => {
          linkContainer.childNodes[0].removeEventListener(
            "focus",
            SetStatusToShowLinkListCheatsheet
          );
          linkContainer.childNodes[0].addEventListener(
            "blur",
            SetStatusToHideLinkListCheatsheet
          );
        });
    };
  }, []);

  const elementToRender = () => {
    switch (currentStatus) {
      case "showNumpadCheatsheet":
        return (
          <div>
            <p>Here be the cheatsheet, arr</p>
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
