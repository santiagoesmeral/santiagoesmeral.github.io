import Homepage from "./pages/homepage/Homepage";
import AboutMe from "./pages/about_me/AboutMe";
import Header from "./Header";
import "./App.scss";

//TODO: remove all the unnecesary import React from "react"; calls throughout the app, as they are no longer needed in v18
function App() {
  const pageToReturn = () => {
    /*
      I could implement react-router or another library, but it seems like a massive overkill for such a simple project. 
      I dont need dynamic routes or anything complex. And i'm only gonna have a couple of paths.
    */
    switch (window.location.pathname) {
      /* note: since we're returning, we dont need to break after each case */
      case "/about_me":
        return <AboutMe />;
      /* fall through sequence checking for empty string, "/", and "#" to redirect to homepage (https://stackoverflow.com/a/6514571/6749456) */
      case "/":
      case "#":
      case "":
        return <Homepage />;
      default: //TODO: make a 404 page
        return <Homepage />;
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
