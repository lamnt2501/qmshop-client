import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollRestoration = () => {
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      sessionStorage.setItem(
        location.key,
        JSON.stringify({ x: window.scrollX, y: window.scrollY })
      );
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location]);

  useEffect(() => {
    const scrollPosition = sessionStorage.getItem(location.key);
    if (scrollPosition) {
      const { x, y } = JSON.parse(scrollPosition);
      window.scrollTo(x, y);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
};

export default ScrollRestoration;
