import { useEffect, useState } from "react";
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
} from "../../images";
import TypewriterTitle from "./TypewriterTitle";
import "./Homepage.scss";
import HomepageLinkCard from "./HomepageLinkCard";

/*
 * This can potentially come from a backend in the future
 */
const TEMPListOfObjectsForLinksList = [
  {
    content: "Youtube",
    url: "https://www.youtube.com",
    id: "1",
    icon: <YoutubeLogo />,
  },
  {
    content: "Github",
    url: "https://github.com/",
    id: "2",
    icon: <GithubLogo />,
  },
  {
    content: "Outlook",
    url: "https://outlook.live.com",
    id: "3",
    icon: <MicrosoftOutlookLogo />,
  },
  {
    content: "Gmail",
    url: "https://mail.google.com",
    id: "4",
    icon: <GmailLogo />,
  },
  {
    content: "Google Keep",
    url: "https://keep.google.com/",
    id: "5",
    icon: <GoogleKeepLogo />,
  },
  {
    content: "Google Drive",
    url: "https://drive.google.com",
    id: "6",
    icon: <GoogleDriveLogo />,
  },
  {
    content: "Google Maps",
    url: "maps.google.com",
    id: "7",
    icon: <GoogleMapsLogo />,
  },
  {
    content: "Deepl",
    url: "https://www.deepl.com",
    id: "8",
    icon: <DeeplLogo />,
  },
];

export default function Homepage() {
  const [searchValue, setSearchValue] = useState("");
  const [priorityTitleQueue, setPriorityTitleQueue] = useState([
    "Welcome to my page!",
  ]);

  /* 
    ? Not sure if i should move the title logic elsewhere
    It should probably stay here given the fact that events in other components in the homepage can alter the priority queue of text 

    here are all the cool texts i couldnt put in the defaultTitleList because true monospace fonts are hard
    "☜(⌒▽⌒)☞",
    "※(^o^)※",
    "ʕっ•ᴥ•ʔっ ♥",
    "ʕ·͡ᴥ·ʔ",
    */

  const defaultTitleList = [
    "Hello world!",
    "I hope you have a great day!",
    "Did you brush your teeth?",
    "Cats or dogs?",
    "What did the fox say?",
    "PEBKAC",
    "Lorem ipsum n stuff",
    "Hey, wake up, this is a dream",
    "It took over a week to get this title to work...",
    "I wanted to put emojis, but turns out there are no monospace emoji/japanese character fonts ",
  ];

  const popPriorityTitleQueue = () => {
    const aux = priorityTitleQueue[0];
    setPriorityTitleQueue(priorityTitleQueue.slice(1));
    return aux;
  };

  useEffect(() => {
    if (searchValue.toLowerCase() === "i love you") {
      setPriorityTitleQueue(["I love you Zvet <3", ...priorityTitleQueue]);
    }
    if (searchValue.toLowerCase() === "c'est la vie") {
      setPriorityTitleQueue(["Oui, c'est la vie eh?", ...priorityTitleQueue]);
    }
    if (searchValue.toLowerCase() === "un dos tres cuatro") {
      setPriorityTitleQueue(["Cinco seis siete ocho!", ...priorityTitleQueue]);
    }
  }, [searchValue]);

  const searchbarIcon = () => {
    if (searchValue.toLowerCase() === "i love you") {
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
          type="text"
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
        >
          {searchbarIcon()}
        </button>
      </form>
      <ul className="homepage-list-of-links">
        {TEMPListOfObjectsForLinksList.map((item) => {
          return (
            <HomepageLinkCard
              id={item.id}
              icon={item.icon}
              content={item.content}
              url={item.url}
            />
          );
        })}
      </ul>
      <TypewriterTitle
        defaultTitleList={defaultTitleList}
        priorityTitleQueue={priorityTitleQueue}
        popPriorityTitleQueue={popPriorityTitleQueue}
        className="homepage-title"
      />
    </section>
  );
}
