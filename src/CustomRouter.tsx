/*
    i am challenging myself to learn as much as possible, and it only makes sense to do the same with the routing system.
*/
import { useContext, useLayoutEffect, useState } from "react";
import { createBrowserHistory, Location } from "history";

const history = createBrowserHistory();
function getPathFromLocation(location: Location) {
  return location.pathname;
}

type CustomRouterProviderType = {
  children: React.ReactNode;
};

const CustomRouterProvider = ({ children }: CustomRouterProviderType) => {
  const [currentPage, setCurrentPage] = useState("/");
  const handleRouteChange = (location: any) => {
    console.log(location);
  };

  useLayoutEffect(() => {
    const unlisten = history.listen(handleRouteChange);
    return () => {
      unlisten();
    };
  }, []);
  return <>{children}</>;
};

type InternalLinkType = {
  children: React.ReactNode;
};

const InternalLink = ({ children }: InternalLinkType) => {
  /* 
        we'll see if i even need this...
    */
};
export { CustomRouterProvider, InternalLink };
