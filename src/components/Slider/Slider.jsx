import React, { useState } from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

import "./slider.css";

const Slider = (props) => {
  const sliderImages = [
    {
      url: "https://prestigegroupprojects.co.in/dew-drops/assets/img/home-slider/web22.jpg",
    },
    {
      url: "https://prestigegroupprojects.co.in/dew-drops/assets/img/home-slider/web11.jpg",
    },
    {
      url: "https://prestigegroupprojects.co.in/dew-drops/assets/img/home-slider/web33.jpg",
    },
  ];
  let timer;
  const [activeImageNum, setCurrent] = useState(0);
  const length = sliderImages.length;
  const nextSlide = () => {
   clearInterval(timer)
    setCurrent(activeImageNum === length - 1 ? 0 : activeImageNum + 1);
  };
  const prevSlide = () => {
    setCurrent(activeImageNum === 0 ? length - 1 : activeImageNum - 1);
  };
  if (!Array.isArray(sliderImages) || sliderImages.length <= 0) {
    return null;
  }
  timer = setInterval(nextSlide, 4000);
  return (
    <div>
      <section className="image-slider">
        <div className={`left ${props.sidebar ? "open" : ""}`}>
          <BiLeftArrow onClick={prevSlide} />
        </div>
        <div className={`right ${props.sidebar ? "open" : ""}`}>
          <BiRightArrow onClick={nextSlide} />
        </div>
        {sliderImages.map((currentSlide, ind) => {
          return (
            <div
              className={
                ind === activeImageNum ? "currentSlide active" : "currentSlide"
              }
              key={ind}
            >
              {ind === activeImageNum && (
                <img alt="img" src={currentSlide.url} className="image" />
              )}
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Slider;
