import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Sliders.css";
import PropTypes from "prop-types";

const Sliders = ({ datas, children, settings }) => {
  return (
    <Slider {...settings}>
      {datas
        ? datas.map((data, index) => (
            <div key={index}>
              {React.Children.map(children, (child) =>
                React.cloneElement(child, { data })
              )}
            </div>
          ))
        : children.map((chil, index) => <div key={index}>{chil}</div>)}
    </Slider>
  );
};

Sliders.propTypes = {
  datas: PropTypes.array,
  children: PropTypes.any,
  settings: PropTypes.object,
};
export default React.memo(Sliders);
