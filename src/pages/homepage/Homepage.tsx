import React, { useEffect, useState } from "react";
import { Search, CaretRight, Heart } from "../../images";
import "./Homepage.scss";
import TypewriterTitle from "./TypewriterTitle";

const TEMPListOfObjectsForLinksList = [
  {
    content: "Youtube",
    url: "",
    id: "1",
  },
  {
    content: "Github",
    url: "https://github.com/",
    id: "2",
  },
  {
    content: "Outlook",
    url: "https://outlook.live.com",
    id: "3",
  },
  {
    content: "Gmail",
    url: "https://mail.google.com",
    id: "4",
  },
  {
    content: "Google Keep",
    url: "https://keep.google.com/",
    id: "5",
  },
  {
    content: "Google Drive",
    url: "https://drive.google.com",
    id: "6",
  },
  {
    content: "Google Maps",
    url: "maps.google.com",
    id: "7",
  },
  {
    content: "Deepl",
    url: "https://www.deepl.com",
    id: "8",
  },
];

export default function Homepage() {
  const [searchValue, setSearchValue] = useState("");
  const [priorityTitleQueue, setPriorityTitleQueue] = useState([
    "Welcome to my page!",
  ]);

  const defaultTitleList = [
    "Hello world!",
    "Have a great day!",
    "Did you brush your teeth?",
    "☜(⌒▽⌒)☞",
    "ʕ·͡ᴥ·ʔ",
    "※(^o^)※",
    "ʕっ•ᴥ•ʔっ ♥",
    "Do you like Minecraft?",
    "I like Mangoes",
    "Lorem ipsum n stuff",
  ];

  const popPriorityTitleQueue = () => {
    const aux = priorityTitleQueue[0];
    setPriorityTitleQueue(priorityTitleQueue.slice(1));
    return aux;
  };

  const searchbarIcon = () => {
    if (searchValue.toLowerCase() === "i love you") {
      return <Heart />;
    }
    if (searchValue.length > 0) {
      return <CaretRight />;
    }
    return <Search />;
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

  return (
    <div className="homepage">
      <section className="homepage-content">
        <TypewriterTitle
          defaultTitleList={defaultTitleList}
          priorityTitleQueue={priorityTitleQueue}
          popPriorityTitleQueue={popPriorityTitleQueue}
          className="homepage-title"
        />
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
          />
          <button
            type="submit"
            className="homepage-search-submit"
            disabled={searchValue.length === 0}
          >
            {searchbarIcon()}
          </button>
        </form>
        <ul className="homepage-list-of-links">
          {TEMPListOfObjectsForLinksList.map((item) => {
            return (
              <li className="homepage-link-card" key={item.id}>
                <a className="homepage-link" href={item.url || "#"}>
                  {item.content}
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
