import { useEffect, useState } from "react";

const useScrollDirection = () => {
  const [hidden, setHidden] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Cuộn xuống
      if (window.scrollY > scrollY) setHidden(true);
      // cuộn lên
      else setHidden(false);

      // thiết lập lại vị trí
      setScrollY(window.scrollY);
    };

    // Lắng nghe sự kiện cuộn chuột
    window.addEventListener("scroll", handleScroll);

    // Hủy lắng nghe sự kiện cuộn chuột
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  return hidden;
};

export default useScrollDirection;
