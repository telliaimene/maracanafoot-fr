import { useEffect } from "react";
import {  withRouter } from "next/router";
//RouterProps
export interface ScrollToTopProps {
  history: RouterProps["history"];
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({ history }) => {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, []);

  return null;
};

export default withRouter(ScrollToTop);
