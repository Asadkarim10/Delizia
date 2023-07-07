import React from 'react';
import ImageSlider from './carousel';

const Apps = () => {
  const images = [
    'https://delizia.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1673694012-2-(1).png&w=1920&q=75',
    'https://delizia.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1673694005-1.png&w=1920&q=75',
  ];

  return (
    <div>
      <ImageSlider images={styles.images}  interval={3000}  />
    </div>
  );
};

export default Apps;


const styles = StyleSheet.create({
    image: {
        width: 1000,
        resizeMode: 'cover'
    }
});
