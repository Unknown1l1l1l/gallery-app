import React, { useState, useEffect } from "react";
import "../style/slider.scss";

const ImageSlider: React.FC<{
  category: { name: string; num: number };
  currentImageIndex: number;
  setCurrentImageIndex: (val: number) => void;
}> = ({ category, currentImageIndex, setCurrentImageIndex }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % category.num);
    }, 15000);

    return () => clearInterval(interval);
  }, [category]);

  const goToNextSlide = () => {
    setCurrentImageIndex((currentImageIndex + 1) % category.num);
  };

  const goToPreviousSlide = () => {
    setCurrentImageIndex((currentImageIndex + category.num - 1) % category.num);
  };
  let arr = new Array();
  for (let i = 0; i < category.num; i++) arr.push(i);
  return (
    <div className="image-slider">
      <div className="slider-wrapper">
        {arr.map((image, index) => (
          <div
            key={index}
            className={`slide ${currentImageIndex === index ? "active" : ""}`}
          >
            <img key={index} src={`assets/${category.name}/${index + 1}.png`} />
          </div>
        ))}
      </div>
      <button className="previous-button" onClick={goToPreviousSlide}>
        &lt;
      </button>
      <button className="next-button" onClick={goToNextSlide}>
        &gt;
      </button>
    </div>
  );
};

export default ImageSlider;
