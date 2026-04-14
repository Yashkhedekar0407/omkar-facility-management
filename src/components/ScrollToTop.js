import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  
  /*const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // optional (use "auto" if you want instant)
    });
  }, [pathname]);

  return null;
  */
  const location = useLocation();

  useEffect(() => {
    const id = location.hash.replace("#", "");

    if (id) {
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  return null;

}

export default ScrollToTop;