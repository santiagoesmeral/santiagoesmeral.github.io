import Homepage from "./pages/homepage/Homepage";
import HireMe from "./pages/hire_me/HireMe";
import Header from "./Header";
import "./App.scss";

function App() {
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
      case "/hire_me":
        return <HireMe />;
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
