import { useState } from "react";
import Homepage from "./pages/homepage/Homepage";
import ContactMe from "./pages/contact_me/ContactMe";
import Header from "./Header";
import "./App.scss";

function App() {
  // if the config gets complicated, it may be worth it to move it to a useContext. For now though, it should be simple enough to implement
  const [appConfig, _] = useState({
    userCanHover: window.matchMedia("(hover: hover)").matches,
  });
  //why keep it in state? honestly because in case in the future i want to add more functionality, because i'm used to it, and because a single useState statement wont destroy the app's performance.

  const pageToReturn = () => {
    /*
      I could implement react-router or another library, but it seems like a massive overkill for such a simple project. 
      I dont need dynamic routes or anything complex. And i'm only gonna have a couple of paths.

      todo: in the future, create custom link elements that prevent default and use the history npm package and all. 
      For now though, i just want to get this rolling as simple as possible. MVP and stuff

      Just so we're clear on the problem:
      A single page app is not meant to get refreshed on every url change.
      But normal links by default will request the file in each new url to the server. 
      Meaning that it does a refresh even if the server returns index.html always.
      There are ways of changing the history of the page without redirecting, without using a big library like react-router. 
      So take a look at that. For now though, for this simple page, this will suffice.
    */
    switch (window.location.pathname) {
      /* note: since we're returning, we dont need to break after each case */
      case "/contact_me":
        return <ContactMe />;
      /* fall through sequence checking for empty string, "/", and "#" to redirect to homepage (https://stackoverflow.com/a/6514571/6749456) */
      case "/":
      case "#":
      case "":
        return <Homepage appConfig={appConfig} />;
      default: //TODO: make a 404 page
        return <Homepage appConfig={appConfig} />;
    }
  };

  return (
    <div className="App">
      <Header />
      {pageToReturn()}
    </div>
  );
}

export default App;
