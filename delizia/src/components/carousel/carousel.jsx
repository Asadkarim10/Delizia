import React, { useState, useEffect } from 'react';

const ImageSlider = ({ images, interval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const sliderInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => {
      clearInterval(sliderInterval);
    };
  }, [images, interval]);

  return (
    <div>
      <img src={images[currentIndex]} alt="Slider" />
    </div>
  );
};

export default ImageSlider;
