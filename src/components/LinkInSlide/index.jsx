import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LinkInSlide = (prop) => {
  const { children, url, onMouseOver, onMouseOut, className } = prop
  
  const clickTime = 100;

  const navigate = useNavigate();

  // Lắng nghe thời gian người dùng nhấn vào màn hình
  const [touchStartTime, setTouchStartTime] = useState(0);

  // lắng nghe sự kiện chuột di chuyển
  const [mouseMoved, setMouseMoved] = useState(false);

  // cài đặt thời gian bắt đầu khi người dùng bắt đầu nhấp vào màn hình
  const handleTouchStart = () => {
    setTouchStartTime(Date.now());
  };

  // Xử lý khi người dùng click (fix lỗi khi sử dụng slide của react-Slick)
  const handleClick = (e) => {
    // người dùng click chuột trái thì e.button === 0
    if (e.button === 0)
      if (!mouseMoved && touchStartTime === 0) {
        // khi người dùng click chuột và thời gian di ngón tay là 0 (tức là chỉ có sự kiện click chuột)
        navigate(url);
      }
  };

  const handleTouchEnd = () => {
    // khi người dùng chạm (tính thời gian là nhỏ hơn giá trị click chuột tự đặt ra)
    if (Date.now() - touchStartTime < clickTime) navigate(url);
  };

  return (
    <Link
      className={className ?? ""}
      // Click và thả chuột ra
      onClick={(e) => handleClick(e)}
      onMouseUp={(e) => handleClick(e)}
      onTouchEnd={() => handleTouchEnd()}
      // Giữ và nhấn chuột
      onMouseMove={() => setMouseMoved(true)}
      onMouseDown={() => setMouseMoved(false)}
      // Di chuyển ngón tay trên màn hình
      onTouchStart={() => handleTouchStart()}
      onTouchMove={() => setMouseMoved(true)}
      // Sự kiện hover
      onMouseOver={onMouseOver ?? undefined}
      onMouseOut={onMouseOut ?? undefined}
    >
      {children}
    </Link>
  );
};

export default LinkInSlide;
