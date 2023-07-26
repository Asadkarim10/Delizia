import React from "react";
import './sld.css'; 

function Sld() {
  return (
    <div className="img-slider">
      <div className="slider-container">
        <div className="slide">
          <img src="../cakeimg.webp" alt="Slide 1" />
        </div>
        <div className="slide">
          <img src="../cupcakeimg.webp" alt="Slide 2" />
        </div>
        <div className="slide">
          <img src="../cakeimg.webp" alt="Slide 3" />
        </div>
      </div>
    </div>
  );
}

export default Sld;
