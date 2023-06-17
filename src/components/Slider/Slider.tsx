import React from 'react';

import styles from './Slider.module.scss';

const images = ['img/slides/slide1.jpg', 'img/slides/slide2.jpg', 'img/slides/slide3.jpg'];

const Slider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.slider}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index}`}
          className={`${styles.slide} ${
            currentSlide === index && styles["slide__current"]
          }`}
         
        />
      ))}
    </div>
  );
};

export default Slider;