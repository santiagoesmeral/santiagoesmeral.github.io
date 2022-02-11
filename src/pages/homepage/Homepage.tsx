import React, { useEffect, useState } from "react";
import { Search, CaretRight, Heart } from "../../images";
import "./Homepage.scss";
import TypewriterTitle from "./TypewriterTitle";

const TEMPListOfObjectsForLinksList = [
  {
    content: "A",
    id: "1",
  },
  {
    content: "B",
    id: "2",
  },
  {
    content: "C",
    id: "3",
  },
  {
    content: "D",
    id: "4",
  },
  {
    content: "E",
    id: "5",
  },
  {
    content: "F",
    id: "6",
  },
  {
    content: "G",
    id: "7",
  },
  {
    content: "H",
    id: "8",
  },
];

export default function Homepage() {
  const [searchValue, setSearchValue] = useState("");
  const [titleList, setTitleList] = useState([
    "Welcome to my page!",
    "Hello world!",
    "I hope you have a fantastic day.",
    "Did you brush your teeth?",
    "I really hope StackOverflow doesnt go down today...",
    "☜(⌒▽⌒)☞",
    "ʕ·͡ᴥ·ʔ",
    "※(^o^)/※",
    "It's ok to be mediocre.",
    "Love yourself, before you can love others.",
    "Dont look at death with fear, but as reminder to cherish what you have.",
  ]);

  const searchbarIcon = () => {
    if (searchValue.toLowerCase() === "i love you") {
      return <Heart />;
    }
    if (searchValue.length > 0) {
      return <CaretRight />;
    }
    return <Search />;
  };

  useEffect(() => {}, [searchValue]);

  return (
    <div className="homepage">
      <section className="homepage-content">
        <TypewriterTitle titleList={titleList} priorityTitle={""} />
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
                <button className="homepage-link-button">{item.content}</button>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
