import React from 'react';
import AwesomeSlider from 'react-awesome-slider'; 


export default function Footer() {
    return (
        <div>
    <AwesomeSlider>
    <AwesomeSlider animation="cubeAnimation">
    <div data-src="/path/to/image-0.png" />
    <div data-src="/path/to/image-1.png" />
    <div data-src="/path/to/image-2.jpg" />
  </AwesomeSlider>
  </AwesomeSlider>
        </div>
    )
}