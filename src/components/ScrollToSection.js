import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToSection(){
     const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto" // IMPORTANT: use auto for route change
    });
  }, [pathname]);

  return null;
}

export default ScrollToSection;