import React from 'react';


const images = [
    "/images/shin1.jpg",
    "/images/shin2.jpg",
    "/images/shin3.jpg", // Use paths for images stored in the public folder
    "/images/shin4.jpg",
    "/images/shin5.jpg",
    "/images/shin6.jpg",
    "/images/shin7.jpg",
    "/images/shin8.jpg",
    "/images/shin9.jpg",
    "/images/shin10.jpg",
];

function ImageSlider() {
  return (
    <div className="slider-container">
      <div className="slider-track">
        {images.map((image, index) => (
          <div
            key={index}
            className="slider-image"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
        {images.map((image, index) => (
          <div
            key={`duplicate-${index}`}
            className="slider-image"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
