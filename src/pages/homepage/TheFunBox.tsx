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
      if (event.type === "focus") {
        /*
          I usually like to leave classes for css only, but in this case i dont see another attribute that would make sense. 
          Id is unique and i want to target all link cards. 

          ! DONT DO THIS, if the minimization removes classes then this gets borked. 

          instead set a custom attribute, probably. Or something. Idk. Still trying to figure out what best to do here. 

          Ideally, we just get whatever happens to be the currently focused item.

          window.getSelection()?.focusNode doesnt quite work because the focusNode isnt necesarily an DOM object. It can be just a string. 

          TODO: 
          1- find a way to trigger a function each time focus changes in the page
          2- find a way to know if we're targeting a card link or the searchbar. We cant rely on classNames or IDs (probably a custom attr)
        */
        if (event.target.className === "homepage-link-card") {
          setCurrentStatus("showNumpadCheatsheet");
        } else {
          setCurrentStatus("showSearchbarCheatsheet");
        }
      }
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
          SetStatusToShowLinkListCheatsheet
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
            SetStatusToShowLinkListCheatsheet
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
