import Homepage from "./pages/homepage/Homepage";
import HireMe from "./pages/hire_me/HireMe";
import Header from "./Header";
import { CustomRouterProvider } from "./CustomRouter";
import "./App.scss";

//TODO: create new favicon.ico in public
function App() {
  const pageToReturn = () => {
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
      <CustomRouterProvider>
        <Header />
        {pageToReturn()}
      </CustomRouterProvider>
    </div>
  );
}

export default App;
