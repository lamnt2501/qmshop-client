import { React, useState, memo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setParamsCategory } from "../../../app/reducers";

import "./CategoryCard.css";

const CategoryCard = ({ data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [mouseMoved, setMouseMoved] = useState(false);
  const { id, name, imgUrl, slug } = data;

  const handleClick = (e) => {
    if (e.button === 0)
      if (!mouseMoved) {
        dispatch(setParamsCategory({ id, name }));
        navigate(`/collections/${slug}`);
      }
  };

  return (
    <div className="card categoryCard mx-4 relative">
      <Link
        onClick={(e) => handleClick(e)}
        onMouseUp={(e) => handleClick(e)}
        onMouseMove={() => setMouseMoved(true)}
        onMouseDown={() => setMouseMoved(false)}
      >
        <div className="w-auto cardShadow h-full mb-8">
          <img className="image" src={imgUrl} />
        </div>
        <div className="categoryDetail flex place-items-center absolute bottom-[10%] h-auto w-max p-2">
          <h2 className="px-2">{name}</h2>
          <div className="arrow">
            <FaArrowRight />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default memo(CategoryCard);
