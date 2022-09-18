// @ts-nocheck
//todo: remove nocheck. Its caused by the event listener in the screen size
import { useState, useEffect } from "react";
import {
  Search,
  Heart,
  DuckDuckGoLogo,
  GithubLogo,
  GmailLogo,
  YoutubeLogo,
  GoogleKeepLogo,
  GoogleMapsLogo,
  GoogleDriveLogo,
  MicrosoftOutlookLogo,
  DeeplLogo,
  LinkedInLogo,
} from "../../images";
import HomepageLinkCard from "./HomepageLinkCard";
import TheFunBox from "./TheFunBox";
import "./Homepage.scss";

/*
  * Here's a fun challenge for a coding interview: given a randomly ordered array of numbers from 1 to 9, sort them in the numpad format. 
  The numpad format being the following: 
  789
  456
  123

  in other words, the array must be: [7, 8, 9, 4, 5, 6, 1, 2, 3]

  My approach: immediately give up since this list is hardcoded anyways. Just manually order the list. I would have to go through the spaghetti headache of implementing the above solution if it was dynamic though. A story for another day.

  Also, just to note: if we were using flexbox, i think it would be as easy as setting flex-direction: reverse-row and flex-wrap: wrap-reverse. Didnt test it though, and since we want this to have exactly 3 columns and 3 rows, it makes sense to use grid instead. (Also, doing this approach would probably screw the tab index like my last attempt at fixing it using a defined grid template area corresponding to the id of each link)
*/

//*TL-DR: the id corresponds to the number in the numpad to link it with. For a detailed explanation, look at the useEffect of <Homepage />
const ListOfLinks = [
  {
    content: "LinkedIn",
    url: "https://www.linkedin.com/",
    id: "7",
    icon: <LinkedInLogo />,
  },
  {
    content: "Github",
    url: "https://github.com/",
    id: "8",
    icon: <GithubLogo />,
  },
  {
    content: "Google Maps",
    url: "https://maps.google.com",
    id: "9",
    icon: <GoogleMapsLogo />,
  },
  {
    content: "Outlook",
    url: "https://outlook.live.com",
    id: "4",
    icon: <MicrosoftOutlookLogo />,
  },
  {
    content: "Gmail",
    url: "https://mail.google.com",
    id: "5",
    icon: <GmailLogo />,
  },
  {
    content: "Google Drive",
    url: "https://drive.google.com",
    id: "6",
    icon: <GoogleDriveLogo />,
  },
  {
    content: "Youtube",
    url: "https://www.youtube.com",
    id: "1",
    icon: <YoutubeLogo />,
  },
  {
    content: "Deepl",
    url: "https://www.deepl.com",
    id: "2",
    icon: <DeeplLogo />,
  },
  {
    content: "Google Keep",
    url: "https://keep.google.com/",
    id: "3",
    icon: <GoogleKeepLogo />,
  },
];

//todo: typescript interface
export default function Homepage({ appConfig }: any) {
  const [searchValue, setSearchValue] = useState("");
  const [listOfLinksIsOver35vw, setListOfLinksIsOver35vw] = useState(false);

  useEffect(() => {
    console.log(
      "%cHey there, console user. If you have any improvements for the layout or CSS of this page, let me know, ok? n.n",
      "color:magenta;font-family:system-ui;font-size:2rem;-webkit-text-stroke: 1px black;font-weight:bold"
    );

    function RedirectOnNumpadNumberInput(event: KeyboardEvent) {
      /*
        Explanation: 
          Since all the codes for numpad inputs are like this: NumpadX (X being either the number, or stuff like NumpadAdd), we can use the first 5 characters of the code to know if we're using the numpad. We can then map it on the linklist, and if the reminding string after "Numpad" matches an Id, we redirect to that page. Otherwise, we ignore it.

          Also: if you're wondering why i'm defining a function rather than passing an arrow function to the addEventListener, its because i need the function declaration on the removeEventListener. https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener
      */

      //skip-navigation-target, in the homepage, represent the searchbar. Dont wanna redirect the user while they search something.
      if (document.activeElement?.id === "skip-navigation-target") {
        //numpad enter redirects on new tab feature!!
        if (event.code === "NumpadEnter") {
          event.preventDefault();
          /*
            for some reason, i cant use searchValue. It appears like the value doesn't get set as its typing, for some reason.
            todo: bug detected, it should always open a new tab, not open one and then keep overwriting it after consecutive uses.
          */
          window.open(
            "https://duckduckgo.com/?q=" +
              (
                document.getElementById(
                  "skip-navigation-target"
                ) as HTMLInputElement
              )?.value,
            "blank"
          );
        }
        return;
      }

      if (event.code.includes("Numpad")) {
        let numpadInput = event.code.slice(6); //Remove the "Numpad" from the string
        if (numpadInput === "0") {
          window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"; //gottem
        }
        // negated isNaN seems to be the best way to check if a string is a number
        if (!isNaN(Number(numpadInput))) {
          const urlToRedirect = ListOfLinks.find(
            (link) => link.id === numpadInput
          )?.url;
          if (urlToRedirect) {
            window.location.href = urlToRedirect;
          }
        }
      }
    }

    function OnScreenSizeChange(event: any) {
      //optimization wise: this function takes about .1ms to run, except when the first if statement is true, in which case its 20ms but just once. I'll call that good enough
      if (
        document.getElementById("homepage-list-of-links") &&
        document.getElementsByTagName("html")[0] &&
        document.getElementById("homepage-list-of-links")?.offsetWidth >
          document.getElementsByTagName("html")[0].offsetWidth * (35 / 100)
      ) {
        //translation into english: if the list of links has rendered and the width of the list of links is more than 35% of the current viewport
        setListOfLinksIsOver35vw(true);
      } else {
        //if the list is smaller or equal to 35vw
        setListOfLinksIsOver35vw(false);
      }
    }

    window.addEventListener("resize", OnScreenSizeChange);
    document.body.addEventListener("keydown", RedirectOnNumpadNumberInput);
    return () => {
      document.body.removeEventListener("keydown", RedirectOnNumpadNumberInput);
      window.removeEventListener("resize", OnScreenSizeChange);
    };
  }, []);

  const searchbarIcon = () => {
    if (searchValue.toLowerCase().includes("i love you")) {
      return <Heart />;
    }
    if (searchValue.length > 0) {
      return <Search />;
    }
    return <DuckDuckGoLogo />;
  };

  return (
    <section
      className={
        "homepage take-remaining-space-in-page" +
        (listOfLinksIsOver35vw ? " vertical-mode" : "")
      }
    >
      <form
        method="get"
        id="ddgSearch"
        action="https://duckduckgo.com/"
        className="homepage-search-form"
        autoComplete="off"
      >
        <input
          type="search"
          name="q"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="homepage-searchbar"
          id="skip-navigation-target"
          placeholder="Search on DuckDuckGo"
          aria-label="Search on DuckDuckGo"
          title="Search on DuckDuckGo"
        />
        <button
          type="submit"
          className="homepage-search-submit"
          disabled={searchValue.length === 0}
          title="Search on DuckDuckGo (Submit button)"
          tabIndex={-1}
        >
          {searchbarIcon()}
        </button>
      </form>
      <ul className="homepage-list-of-links" id="homepage-list-of-links">
        {ListOfLinks.map((item) => {
          return (
            <HomepageLinkCard
              id={item.id}
              key={"external-link-" + item.id}
              icon={item.icon}
              content={item.content}
              url={item.url}
            />
          );
        })}
      </ul>
      {!listOfLinksIsOver35vw && (
        <TheFunBox userCanHover={appConfig.userCanHover} />
      )}
      <span className="homepage-icon-creator-links">
        Icons from https://fontawesome.com/, https://icons8.com/ and
        https://icon-icons.com/
      </span>
    </section>
  );
}
