import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";



  let slideIndex = 0;
  showSlides();
  
  function showSlides() {
    let i;
    let slides = document.getElementsByclass("mySlides");
    let dots = document.getElementsByclass("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].classNameName = dots[i].class.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].class += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds

    return (  

      <div>
        <h2>Automatic Slideshow</h2>
  <p>Change image every 2 seconds:</p>
  
  <div className="slideshow-container">
  
  <div className="mySlides fade">
    <div className="numbertext">1 / 3</div>
    <img src="img_nature_wide.jpg" style="width:100%"/>
    <div className="text">Caption Text</div>
  </div>
  
  <div className="mySlides fade">
    <div className="numbertext">2 / 3</div>
    <img src="img_snow_wide.jpg" style="width:100%" />
    <div className="text">Caption Two</div>
  </div>
  
  <div className="mySlides fade">
    <div className="numbertext">3 / 3</div>
    <img src="img_mountains_wide.jpg" style="width:100%" />
    <div className="text">Caption Three</div>
  </div>
  
  </div>
  <br />
  
  <div style="text-align:center">
    <span className="dot"></span> 
    <span className="dot"></span> 
    <span className="dot"></span> 
  </div>
  
  
  
  
      </div>)
  






  }
   
  
  export default Sidebar;