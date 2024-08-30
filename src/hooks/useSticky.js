import { useState, useEffect, useRef } from "react";

const useSticky = () => {
  const [isSticky, setIsSticky] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(entry.intersectionRatio < 1);
      },
      { threshold: [1] }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return { isSticky, elementRef };
};

export default useSticky;