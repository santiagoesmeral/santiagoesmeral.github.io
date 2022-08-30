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

export default function Homepage() {
  const [searchValue, setSearchValue] = useState("");

  //TODO: add a feature to open search on new tab if the user is selecting the skip navigation target and uses the numpad enter to search

  useEffect(() => {
    //TODO: change :any into a more appropiate type. :event is not the right one apparently
    function RedirectOnNumpadNumberInput(event: any) {
      /*
        Explanation: 
          Since all the codes for numpad inputs are like this: NumpadX (X being either the number, or stuff like NumpadAdd), we can use the first 5 characters of the code to know if we're using the numpad. We can then map it on the linklist, and if the reminding string after "Numpad" matches an Id, we redirect to that page. Otherwise, we ignore it.

          Also: if you're wondering why i'm defining a function rather than passing an arrow function to the addEventListener, its because i need the function declaration on the removeEventListener. https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener
      */

      //skip-navigation-target, in the homepage, represent the searchbar. Dont wanna redirect the user while they search something.
      if (document.activeElement?.id === "skip-navigation-target") return;

      if (event.code.includes("Numpad")) {
        let numpadInput = event.code.slice(6); //Remove the "Numpad" from the string
        if (numpadInput === "0") {
          window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"; //gottem
        }
        // negated isNaN seems to be the best way to check if a string is a number
        if (!isNaN(numpadInput)) {
          const urlToRedirect = ListOfLinks.find(
            (link) => link.id === numpadInput
          )?.url;
          if (urlToRedirect) {
            window.location.href = urlToRedirect;
          }
        }
      }
    }

    document.body.addEventListener("keydown", RedirectOnNumpadNumberInput);
    return () => {
      document.body.removeEventListener("keydown", RedirectOnNumpadNumberInput);
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
    <section className="homepage">
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
      <TheFunBox />
    </section>
  );
}
